var eb=Object.defineProperty;var tb=(t,e,n)=>e in t?eb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>tb(t,typeof e!="symbol"?e+"":e,n);import{c as cu,o as nb,p as rb,q as Lu,a as T,s as se,u as Ge,t as le,d as Ne,v as ib,m as ob}from"./disclose-version.MO2MFdNj.js";import{i as ve}from"./legacy.sN80Fe4S.js";import{l as rh,h as tn,k as ds,y as ih,v as is,R as sb,V as ab,U as lb,g as uu,i as oh,F as sh,a0 as cb,j as ub,u as vg,A as db,aJ as Au,z as _b,x as fb,a2 as Su,ar as ah,J as mg,aK as gb,a3 as hb,a8 as pb,m as vb,c as Z,r as j,p as de,s as G,t as ne,a as _e,Z as f,al as Qe,aL as k,_ as y,aM as ye,$ as R,av as ee,f as ae,aN as mb,aC as yi,aO as Bc,ak as Eg}from"./utils.DP-F0xIN.js";import{s as Ke,i as oe,a as Ce,b as ps,m as lh}from"./store.LjYb6QFI.js";import{s as ii,u as Eb,a as Cb,b as Ob,c as Ib,e as bb,f as wb,g as yb,h as Lb,t as Ab}from"./global.DKHZCW4A.js";import{e as dt,i as St}from"./each.BW2jvj41.js";import{i as Sb,p as $}from"./props.DNCAbpfG.js";import{w as jt,g as ct,d as uo}from"./index.C8uZp8ho.js";import{s as S,r as nn,a as ch,c as Nb,b as xb,d as uh}from"./attributes.H32U76MF.js";import{s as it}from"./render.3Jdrsfl8.js";import{b as Li,c as dh}from"./this.DYGG7ZR8.js";import{a as Rb,o as _h}from"./index-client.jiOaxa6s.js";import{b as Cg}from"./paths.DLPJPKsG.js";function Tb(t,e,n,r,i){var o=t,a="",c;rh(()=>{if(a===(a=e()??"")){tn&&ds();return}c!==void 0&&(sh(c),c=void 0),a!==""&&(c=ih(()=>{if(tn){is.data;for(var u=ds(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=sb(u);if(u===null)throw ab(),lb;cu(is,_),o=uu(u);return}var p=a+"",g=nb(p);cu(oh(g),g.lastChild),o.before(g)}))})}function ft(t,e,n,r,i){var c;tn&&ds();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function fh(t,e,n,r,i,o){let a=tn;tn&&ds();var c,u,_=null;tn&&is.nodeType===1&&(_=is,ds());var p=tn?is:t,g;rh(()=>{const v=e()||null;var m=v==="svg"?Au:null;v!==c&&(g&&(v===null?_b(g,()=>{g=null,u=null}):v===u?fb(g):sh(g)),v&&v!==u&&(g=ih(()=>{if(_=tn?_:m?document.createElementNS(m,v):document.createElement(v),cu(_,_),r){tn&&rb(v)&&_.append(document.createComment(""));var E=tn?oh(_):_.appendChild(ub());tn&&(E===null?vg(!1):uu(E)),r(_,E)}db.nodes_end=_,p.before(_)})),c=v,c&&(u=c))},cb),a&&(vg(!0),uu(p))}function oo(t,e,n){var r=t.__className,i=gh(e);tn&&t.getAttribute("class")===i?t.__className=i:(r!==i||tn&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Db(t,e,n){var r=t.__className,i=gh(e);tn&&t.className===i?t.__className=i:(r!==i||tn&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function gh(t,e){return(t??"")+""}function At(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Xn(t,e,n=e){var r=gb();Lu(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=zc(t)?Yc(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(tn&&t.defaultValue!==t.value||hb(e)==null&&t.value)&&n(zc(t)?Yc(t.value):t.value),Su(()=>{var i=e();zc(t)&&i===Yc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Wc=new Set;function Va(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),Lu(n,"change",()=>{var _=n.__value;o&&(_=Og(a,_,n.checked)),i(_)},()=>i(o?[]:null)),Su(()=>{var _=r();if(tn&&n.defaultChecked!==n.checked){c=!0;return}o?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Sb(n.__value,_)}),ah(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),Wc.has(a)||(Wc.add(a),mg(()=>{a.sort((_,p)=>_.compareDocumentPosition(p)===4?-1:1),Wc.delete(a)})),mg(()=>{if(c){var _;if(o)_=Og(a,_,n.checked);else{var p=a.find(g=>g.checked);_=p==null?void 0:p.__value}i(_)}})}function Og(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function zc(t){var e=t.type;return e==="number"||e==="range"}function Yc(t){return t===""?null:+t}function kb(t,e,n=e){Lu(t,"change",()=>{n(t.files)}),Su(()=>{t.files=e()})}function Je(t,e,n){var r=pb(t,e);r&&r.set&&(t[e]=n,ah(()=>{t[e]=null}))}function Gb(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Zn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function jc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Mb(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=vb(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var _o=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(_o||{}),Nu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Nu||{}),hh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(hh||{}),ph=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(ph||{}),vh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(vh||{}),mh=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(mh||{}),Eh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(Eh||{}),Ch=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(Ch||{}),Oh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(Oh||{}),Ih=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Ih||{}),bh=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(bh||{}),Xa=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Xa||{}),xu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(xu||{}),Ru=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(Ru||{}),Tu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Tu||{}),Du=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Du||{}),ku=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(ku||{}),Gu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(Gu||{}),Mu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Mu||{}),Uu=(t=>(t.CLONE_REGION="Clone Region",t))(Uu||{}),$u=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))($u||{}),Fu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Fu||{}),Pu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Pu||{}),Hu=(t=>(t.MAZE_WALL="Maze Wall",t))(Hu||{}),Bu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Bu||{}),Wu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Wu||{}),wh=(t=>(t.PEN_TOOL="Pen Tool",t))(wh||{});const zu={...hh,...ph,...vh,...Ch,...Oh,...Eh,...Ih,...bh,...mh},yh={...Xa,...xu,...Ru,...Tu,...Du,...ku,...Gu,...Mu,...Uu,...$u,...Fu,...Pu,...Hu,...Bu},d={...Nu,...zu,...yh,...Wu,...wh};var N=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(N||{});function Ub(t){return Object.values(zu).includes(t)}function $b(t){return Object.values(yh).includes(t)}function Yu(t){return Object.values(xu).includes(t)||t===d.COSMETIC_CELL_ARROW}function ju(t){return Object.values(Ru).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function Fb(t){return Object.values(Xa).includes(t)||Yu(t)||ju(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function Ku(t){return Object.values(Tu).includes(t)||t===d.COSMETIC_EDGE}function Lh(t){return Object.values(Du).includes(t)||t===d.COSMETIC_CORNER}function Vu(t){return Object.values(ku).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Xu(t){return Object.values(Gu).includes(t)||t===d.COSMETIC_ARROW}function qu(t){return Object.values(Mu).includes(t)||t===d.COSMETIC_CAGE}function Ah(t){return Object.values(Pu).includes(t)}function Sh(t){return Object.values(Hu).includes(t)}function Nh(t){return Object.values(Uu).includes(t)}function _s(t){const e=Object.values($u),n=Object.values(Fu);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function Pb(t){return Object.values(Bu).includes(t)}function Hb(t){return Object.values(Wu).includes(t)}function Zu(t){return Object.values(Nu).includes(t)}const Bb=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Wb=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function xh(t){for(const e of Object.values(d))if(e===t)return e}function Rh(t,e){return Object.values(e).includes(t)}var B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function gn(t,e,n){n!==void 0&&(t[e]=n)}function zb(t){var e,n,r,i,o,a,c,u,_,p,g,v,m,E,O;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(p=t.strokeDasharray)!=null&&p.editable||(g=t.strokeDashoffset)!=null&&g.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(O=t.displayValue)!=null&&O.editable)}function du(t){var n,r,i,o,a,c,u,_,p,g,v,m,E,O,I,w,A,D,M,z,W,F,P;const e={type:t.type};return gn(e,"n",(n=t.n)==null?void 0:n.value),gn(e,"r",(r=t.r)==null?void 0:r.value),gn(e,"height",(i=t.height)==null?void 0:i.value),gn(e,"width",(o=t.width)==null?void 0:o.value),gn(e,"inset",(a=t.inset)==null?void 0:a.value),gn(e,"angle",(c=t.angle)==null?void 0:c.value),gn(e,"fill",(u=t.fill)==null?void 0:u.value),gn(e,"stroke",(_=t.stroke)==null?void 0:_.value),gn(e,"strokeWidth",(p=t.strokeWidth)==null?void 0:p.value),gn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),gn(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),gn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),gn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),gn(e,"opacity",(O=t.opacity)==null?void 0:O.value),gn(e,"displayValue",(I=t.displayValue)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:A.value,shortenTail:(M=(D=t.linePathOptions)==null?void 0:D.shortenTail)==null?void 0:M.value,bezierRounding:(W=(z=t.linePathOptions)==null?void 0:z.bezierRounding)==null?void 0:W.value,closeLoops:(P=(F=t.linePathOptions)==null?void 0:F.closeLoops)==null?void 0:P.value}),e}function Yb(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const jb={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},Kb={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},Vb={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Th={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Dh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},vs={type:"Line",strokeWidth:.125,stroke:"gray"},Qu={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},kh={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Xb={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},qb={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var H=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(H||{});const qa=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,wn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,fo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Zb=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,qt=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,go=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ju=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Qb=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Jb=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,ew=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,ho=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,tw=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,nw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,rw=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function iw(t){return Yu(t)?Qb():ju(t)?Jb():t===d.XV?nw():Ku(t)?ew():qu(t)?qa():Xu(t)?fo():_s(t)?Zb():Vu(t)?De():Nh(t)?rw():""}var he=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(he||{}),Et=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Et||{});const ow={inputOptions:{type:he.ARROW},toolId:d.ARROW,order:H.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:fo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}},sw={inputOptions:{type:he.ARROW},toolId:d.AVERAGE_ARROW,order:H.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:fo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}},aw={inputOptions:{type:he.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:H.ARROW_TOOLS,shape:{type:B.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:fo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}};he.ARROW,d.SQUARE_ROOT_ARROW,H.ARROW_TOOLS,B.LINE,fo(),N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL;const lw={inputOptions:{type:he.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:H.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:fo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}};function cw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function uw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function dw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function _w(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function fw(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const gw={Delete:null,Backspace:null};function hw(t,e=10){if(t in gw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function pw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function vw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function mw(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function Ew(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Gh(t){return t==="Backspace"}function po(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Gh(t.key))}function Cw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function Ow(t){return Cw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Iw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ti(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Gr(t,e,n){if(t===void 0)return t;let r=t;return Gh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const ed=[N.CAGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CAGE_TOOL],yn=[N.CAGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CAGE_TOOL];function Mh(t,e=5){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Uh(t,e,n){return Gr(t,e,n)}const mn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},Za={type:he.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},Ln={...Za,valueUpdater:(t,e)=>Uh(t,e,Mh)},bw={inputOptions:Ln,toolId:d.KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:yn}},ww={inputOptions:Ln,toolId:d.UNIQUE_DIGITS_CAGE,order:H.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:wn(),tags:[],categories:yn}},yw={inputOptions:Ln,toolId:d.INVERTED_KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:wn(),tags:[],categories:yn}},Lw={inputOptions:Ln,toolId:d.SUM_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:wn(),tags:[],categories:yn}},Aw={inputOptions:Za,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:qa(),tags:[],categories:ed}},Sw={inputOptions:Za,toolId:d.PARITY_BALANCE_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:qa(),tags:[],categories:ed}},Nw={inputOptions:Ln,toolId:d.DIVISIBLE_KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:wn(),tags:[],categories:yn}},xw={inputOptions:Ln,toolId:d.SPOTLIGHT_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:wn(),tags:[],categories:yn}},Rw={inputOptions:Za,toolId:d.PUTTERIA_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:qa(),tags:[],categories:ed}};d.KILLER_CAGE_LOOK_AND_SAY,H.CAGE_TOOLS,wn();const Tw={inputOptions:Ln,toolId:d.MULTISET_CAGE,order:H.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:wn(),tags:[],categories:yn}},Dw={inputOptions:Ln,toolId:d.VAULTED_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:wn(),tags:[],categories:yn}};d.AQUARIUM_CAGE,H.CAGE_TOOLS,wn();const kw={inputOptions:Ln,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:wn(),tags:[],categories:yn}},Gw={inputOptions:Ln,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:wn(),tags:[],categories:yn}},Mw={inputOptions:Ln,toolId:d.DOUBLERS_KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:yn}},Uw={inputOptions:Ln,toolId:d.NEGATORS_KILLER_CAGE,order:H.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:wn(),tags:[],categories:yn}},$w={inputOptions:{type:he.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[N.CELL_INPUT_TOOL]}},Fw={inputOptions:{type:he.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[N.CELL_INPUT_TOOL]}},Pw={inputOptions:{type:he.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[N.CELL_INPUT_TOOL]}},Hw={inputOptions:{type:he.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[N.CELL_INPUT_TOOL]}},Bw={inputOptions:{type:he.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[N.CELL_INPUT_TOOL]}},Ww={inputOptions:{type:he.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[N.CELL_INPUT_TOOL]}},zw={inputOptions:{type:he.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[N.CELL_INPUT_TOOL]}},Yw={inputOptions:{type:he.SELECTION},toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[N.CELL_INPUT_TOOL]}},jw={inputOptions:{type:he.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},Kw={type:he.CENTER_CORNER_OR_EDGE,targets:Et.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,H.OUTSIDE_TOOLS,B.CIRCLE,Ju(),N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT;const Vw={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Et.CLOSEST,valueUpdater:(t,e)=>Gr(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:H.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Ju(),tags:[],categories:[N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT]}},Xw={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Et.CORNER_OR_EDGE,valueUpdater:(t,e)=>Gr(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:H.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Ju(),tags:[],categories:[N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT]}},qw={inputOptions:{type:he.CLONE},toolId:d.CLONE_REGION,order:H.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[N.CLONE_CONSTRAINT,N.LOCAL_CONSTRAINT]}};function $h(t,e=3){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fh(t,e,n){return Gr(t,e,n)}function Zw(t,e){function n(){return!0}return Gr(t,e,n)}const td={type:he.CORNER,defaultValue:"",valueUpdater:(t,e)=>Fh(t,e,$h)},Qw={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Zw(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:tw(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL]}},Jw={inputOptions:td,toolId:d.CORNER_SUM,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:ho(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL]}},ey={inputOptions:{type:he.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:ho(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},ty={inputOptions:td,toolId:d.CORNER_EVEN_COUNT,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:ho(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,H.CORNER_TOOLS,B.CIRCLE,ho(),N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL;const ny={inputOptions:{type:he.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:ho(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},ry={inputOptions:{type:he.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:ho(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},Qa=[N.EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.EDGE_TOOL],Pn=[N.EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.EDGE_TOOL],ms=.15,Ph=.02,oi={type:B.CIRCLE,r:{editable:!0,value:ms,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Ph,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},nd={type:B.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function iy(t,e=1){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Hh(t,e=3){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function oy(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function rd(t,e,n){return Gr(t,e,n)}function sy(t,e){return t===void 0?"V":oy(e)?e.toUpperCase():t}function ay(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Bh(t,e){return t===void 0?"<":ay(e)?e:t}const vo={type:he.EDGE,valueUpdater:(t,e)=>rd(t,e,Hh)},ly={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>rd(t,e,iy)},toolId:d.RATIO,order:H.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Pn}},cy={inputOptions:vo,toolId:d.DIFFERENCE,order:H.EDGE_TOOLS,shape:oi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Pn}},uy={inputOptions:vo,toolId:d.EDGE_SUM,order:H.EDGE_TOOLS,shape:{...oi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Pn}},dy={inputOptions:{type:he.EDGE,defaultValue:"V",valueUpdater:sy},toolId:d.XV,order:H.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Pn}},_y={inputOptions:{type:he.EDGE,valueUpdater:Bh,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:H.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Pn}},fy={inputOptions:vo,toolId:d.EDGE_PRODUCT,order:H.EDGE_TOOLS,shape:{...oi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Pn}},gy={inputOptions:vo,toolId:d.EDGE_MODULO,order:H.EDGE_TOOLS,shape:{...oi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Pn}},hy={inputOptions:vo,toolId:d.EDGE_FACTOR,order:H.EDGE_TOOLS,shape:{...oi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Pn}},py={inputOptions:{type:he.EDGE},toolId:d.XY_DIFFERENCES,order:H.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:ms},strokeWidth:{editable:!1,value:Ph,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Pn}},vy={inputOptions:{type:he.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:H.EDGE_TOOLS,shape:oi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Pn}},my={inputOptions:{type:he.EDGE},toolId:d.YIN_YANG_KROPKI,order:H.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Pn}},Ey={inputOptions:{type:he.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:H.EDGE_TOOLS,shape:nd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Qa}},Cy={inputOptions:{type:he.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:H.EDGE_TOOLS,shape:nd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Qa}},Oy={inputOptions:{type:he.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:H.EDGE_TOOLS,shape:nd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Qa}},Iy={inputOptions:{type:he.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:H.EDGE_TOOLS,shape:oi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Qa}},by={inputOptions:{type:he.EDGE,valueUpdater:Bh,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:H.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Pn}};d.CUSTOM_EDGE_CONSTRAINT,H.EDGE_TOOLS;const mo=[N.OUTSIDE_CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_CORNER_TOOL,N.OUTSIDE_DIRECTION_TOOL];function wy(t,e=5){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Wh(t,e,n){return Gr(t,e,n)}const Eo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Co={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Wh(t,e,wy),defaultValue:"",cornerOrEdge:Et.CORNER},yy={inputOptions:Co,toolId:d.LITTLE_KILLER_SUM,order:H.OUTSIDE_TOOLS,shape:Eo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:go(),tags:[],categories:mo}},Ly={inputOptions:Co,toolId:d.LITTLE_KILLER_PRODUCT,order:H.OUTSIDE_TOOLS,shape:Eo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:go(),tags:[],categories:mo}},Ay={inputOptions:Co,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:H.OUTSIDE_TOOLS,shape:Eo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:go(),tags:[],categories:mo}},Sy={inputOptions:Co,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:H.OUTSIDE_TOOLS,shape:Eo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:go(),tags:[],categories:mo}},Ny={inputOptions:Co,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:H.OUTSIDE_TOOLS,shape:Eo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:go(),tags:[],categories:mo}},xy={inputOptions:Co,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:H.OUTSIDE_TOOLS,shape:Eo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:go(),tags:[],categories:mo}},Zt=[N.OUTSIDE_EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_EDGE_TOOL,N.OUTSIDE_DIRECTION_TOOL];function Oo(t,e=5){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Es(t,e,n){return Gr(t,e,n)}const Qt={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},An={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Es(t,e,Oo),defaultValue:"",cornerOrEdge:Et.EDGE},Ry={inputOptions:An,toolId:d.SANDWICH_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:qt(),tags:[],categories:Zt}},Ty={inputOptions:{...An,cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.MYSTERY_SANDWICH_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:qt(),tags:[],categories:Zt}},Dy={inputOptions:An,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:qt(),tags:[],categories:Zt}},ky={inputOptions:An,toolId:d.X_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:qt(),tags:[],categories:Zt}},Gy={inputOptions:An,toolId:d.SHORTSIGHTED_X_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:qt(),tags:[],categories:Zt}},My={inputOptions:An,toolId:d.SHIFTED_X_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:qt(),tags:[],categories:Zt}},Uy={inputOptions:An,toolId:d.BROKEN_X_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:qt(),tags:[],categories:Zt}},$y={inputOptions:An,toolId:d.X_SUM_SKYSCRAPERS,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:qt(),tags:[],categories:Zt}},Fy={inputOptions:An,toolId:d.BATTLEFIELD,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:qt(),tags:[],categories:Zt}},Py={inputOptions:An,toolId:d.SKYSCRAPERS,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:qt(),tags:[],categories:Zt}},Hy={inputOptions:An,toolId:d.X_INDEX,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:qt(),tags:[],categories:Zt}},By={inputOptions:An,toolId:d.RISING_STREAK,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:qt(),tags:[],categories:Zt}};d.ROW_OR_COLUMN_RANK,H.OUTSIDE_TOOLS,qt();const Wy={inputOptions:An,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:qt(),tags:[],categories:Zt}},zy={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Es(t,e,Oo),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:qt(),tags:[],categories:Zt}},Yy={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Es(t,e,Oo),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:qt(),tags:[],categories:Zt}},jy={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Es(t,e,Oo),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:qt(),tags:[],categories:Zt}},Ky={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Es(t,e,Oo),defaultValue:"",cornerOrEdge:Et.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:H.OUTSIDE_TOOLS,shape:Qt,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:qt(),tags:[],categories:Zt}},Vy={inputOptions:{type:he.SINGLE_CELL},toolId:d.COSMETIC_CELL_SHAPE,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},Xy={inputOptions:{type:he.SINGLE_CELL_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:H.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},qy={inputOptions:{type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:H.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},Zy={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>rd(t,e,Hh),defaultValue:""},toolId:d.COSMETIC_EDGE,order:H.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},Qy={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Fh(t,e,$h),defaultValue:""},toolId:d.COSMETIC_CORNER,order:H.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},Jy={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},eL={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},tL={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},nL={inputOptions:{type:he.CAGE,valueUpdater:(t,e)=>Uh(t,e,Mh),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:H.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},rL={inputOptions:{type:he.ARROW},toolId:d.COSMETIC_ARROW,order:H.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.LOCAL_CONSTRAINT]}},iL={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Wh(t,e,Oo),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:H.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_DIRECTION_TOOL]}},Io=[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT,N.DIAGONAL_CONSTRAINT],oL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},sL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},aL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},lL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},cL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},uL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},dL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},_L={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},fL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},gL={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},hL={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},pL={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},vL={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},mL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Io}},EL={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Io}},CL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Io}},OL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Io}},IL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Io}},bL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Io}},wL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},yL={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},LL={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},AL={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},SL={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},NL={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},xL={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},RL={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},TL={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},DL={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},kL={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},GL={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},ML={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},UL={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},$L={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}};d.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT;d.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT;const FL={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},PL={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},HL={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},BL={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},WL={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},zL={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},YL={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},jL={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},KL={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},VL={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},XL={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},qL={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},ZL={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},QL={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},JL={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},eA={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},tA={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},nA={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},rA={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},iA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},oA={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},sA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},aA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},lA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},cA={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},uA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},dA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},_A={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},fA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},gA={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},hA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},pA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},vA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},mA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},EA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},CA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},OA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},IA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},bA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},wA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},yA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},LA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},AA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},SA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},NA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},xA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},RA={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},TA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},DA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},kA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},GA={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},MA={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},UA={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},$A={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},He=[N.LINE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.LINE_TOOL],Mr=[N.LINE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.DOUBLE_ENDED_LINE_CONSTRAINT,N.LINE_TOOL],Cs={description:"",usage:De(),tags:[],categories:He},Nt={type:he.LINE,allowSelfIntersection:!0},Kt={type:he.LINE,allowSelfIntersection:!1},FA={inputOptions:Kt,toolId:d.THERMOMETER,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Cs,description:"Numbers along a thermometer must increase from the bulb end."}},PA={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Cs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},HA={inputOptions:Kt,toolId:d.FUZZY_THERMOMETER,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Cs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},BA={inputOptions:Kt,toolId:d.SLOW_THERMOMETER,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Cs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},WA={inputOptions:Kt,toolId:d.ROW_CYCLE_THERMOMETER,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Cs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},zA={inputOptions:Nt,toolId:d.PALINDROME,order:H.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:He}},YA={inputOptions:Nt,toolId:d.RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:He}},jA={inputOptions:Nt,toolId:d.DOUBLE_RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:He}},KA={inputOptions:Nt,toolId:d.RENRENBANBAN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:He}},VA={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:He}},XA={inputOptions:Nt,toolId:d.NABNER_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:He}},qA={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:He}},ZA={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:He}},QA={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:He}},JA={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:He}},eS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:He}},tS={inputOptions:Kt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:He}},nS={inputOptions:Kt,toolId:d.INDEX_LINE,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:He}},rS={inputOptions:Nt,toolId:d.UNIQUE_VALUES_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:He}},iS={inputOptions:Nt,toolId:d.REGION_SUM_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:He}},oS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:He}},sS={inputOptions:Kt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:He}},aS={inputOptions:Nt,toolId:d.SAME_PARITY_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:He}},lS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:He}},cS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:He}},uS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:He}},dS={inputOptions:Nt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:He}},_S={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:He}},fS={inputOptions:Nt,toolId:d.ENTROPIC_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:He}},gS={inputOptions:Nt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:He}},hS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:He}},pS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:He}},vS={inputOptions:Kt,toolId:d.REPEATED_DIGITS_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:He}},mS={inputOptions:Kt,toolId:d.SUPERFUZZY_ARROW,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:He}},ES={inputOptions:Nt,toolId:d.AMBIGUOUS_ARROW,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:De(),tags:[],categories:He}},CS={inputOptions:Kt,toolId:d.HEADLESS_ARROW,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:He}},OS={inputOptions:Nt,toolId:d.XV_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:He}},IS={inputOptions:Kt,toolId:d.ROW_SUM_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:He}},bS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:He}},wS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:He}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,H.LINE_TOOLS,B.LINE,De();const yS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:He}},LS={inputOptions:Nt,toolId:d.ADJACENT_MULTIPLES_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:He}},AS={inputOptions:Nt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:He}},SS={inputOptions:Kt,toolId:d.LOOK_AND_SAY_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:He}},NS={inputOptions:Kt,toolId:d.ZIPPER_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:He}},xS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:He}},RS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:He}},TS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:De(),tags:[],categories:He}};d.THERMO_OR_AVERAGE_ARROW,H.LINE_TOOLS,B.THERMO_WITH_CIRCLE,De();const DS={inputOptions:Kt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:De(),tags:[],categories:He}},kS={inputOptions:Kt,toolId:d.PEAPODS,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:De(),tags:[],categories:He}},GS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:He}},MS={inputOptions:Nt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:He}},US={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:He}},$S={inputOptions:Nt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:He}},FS={inputOptions:Kt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:He}},PS={inputOptions:Kt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:H.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:He}},HS={inputOptions:Nt,toolId:d.BETWEEN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:Mr}},BS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:Mr}},WS={inputOptions:Nt,toolId:d.TIGHTROPE_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:Mr}},zS={inputOptions:Nt,toolId:d.PARITY_COUNT_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:Mr}},YS={inputOptions:Nt,toolId:d.DOUBLE_ARROW_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:Mr}},jS={inputOptions:Nt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:Mr}},KS={inputOptions:Nt,toolId:d.SPLIT_PEAS,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:Mr}},VS={inputOptions:Kt,toolId:d.DOUBLERS_THERMOMETER,order:H.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:He}},XS={inputOptions:Nt,toolId:d.DOUBLERS_BETWEEN_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Mr}},qS={inputOptions:Nt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:H.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Mr}},Ye=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_SHAPE_TOOL],bo=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_COLOR_TOOL],Ja={type:B.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Di={type:B.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function el(t,e=3){return Ti(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ZS(t){return t===""||t==="1"||t==="2"||t==="3"}function Os(t,e,n){return Gr(t,e,n)}const Ve={type:he.SINGLE_CELL},si={type:he.SINGLE_CELL,valueUpdater:(t,e)=>Os(t,e,el),defaultValue:""},zh={type:he.SINGLE_CELL_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},QS={inputOptions:Ve,toolId:d.ODD,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:Ye}},JS={inputOptions:Ve,toolId:d.EVEN,order:H.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:Ye}},eN={inputOptions:Ve,toolId:d.MINIMUM,order:H.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},tN={inputOptions:Ve,toolId:d.MAXIMUM,order:H.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}};d.PRIME_CELL,H.CELL_COLOR_TOOL;const nN={inputOptions:Ve,toolId:d.ODD_MINESWEEPER,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Ye}},rN={inputOptions:Ve,toolId:d.EVEN_MINESWEEPER,order:H.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Ye}},iN={inputOptions:Ve,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:Ye}},oN={inputOptions:Ve,toolId:d.WATCHTOWER,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Ye}},sN={inputOptions:Ve,toolId:d.NOT_WATCHTOWER,order:H.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Ye}},aN={inputOptions:si,toolId:d.FARSIGHT,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:Ye}},lN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Os(t,e,el),defaultValue:"9"},toolId:d.RADAR,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:Ye}},cN={inputOptions:Ve,toolId:d.ORTHOGONAL_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:Ye}},uN={inputOptions:Ve,toolId:d.INDEXING_COLUMN,order:H.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:bo}},dN={inputOptions:Ve,toolId:d.INDEXING_ROW,order:H.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:bo}},_N={inputOptions:Ve,toolId:d.LOW_DIGIT,order:H.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:bo}},fN={inputOptions:Ve,toolId:d.HIGH_DIGIT,order:H.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:bo}},gN={inputOptions:Ve,toolId:d.FRIENDLY_CELL,order:H.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:bo}},hN={inputOptions:Ve,toolId:d.DIAGONALLY_ADJACENT_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:Ye}},pN={inputOptions:Ve,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:Ye}},vN={inputOptions:Ve,toolId:d.SANDWICH_ROW_COL_COUNT,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:Ye}},mN={inputOptions:Ve,toolId:d.COUNTING_CIRCLES,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:Ye}},EN={inputOptions:Ve,toolId:d.REVERSE_COUNTING_CIRCLES,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:Ye}},CN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Os(t,e,ZS),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:Ye}},ON={inputOptions:Ve,toolId:d.UNIQUE_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:Ye}},IN={inputOptions:Ve,toolId:d.SEEN_EVEN_COUNT,order:H.CELL_SHAPE_TOOL,shape:Ja,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Ye}},bN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Os(t,e,el),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:Ye}},wN={inputOptions:Ve,toolId:d.SEEN_ODD_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Ye}},yN={inputOptions:Ve,toolId:d.YIN_YANG_MINESWEEPER,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:Ye}},LN={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Ye}},AN={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Ye}},SN={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:H.CELL_SHAPE_TOOL,shape:Ja,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:Ye}},NN={inputOptions:Ve,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:Ye}},xN={inputOptions:Ve,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:Ye}},RN={inputOptions:Ve,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:Ye}},TN={inputOptions:Ve,toolId:d.SEEN_REGION_BORDERS_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:Ye}},DN={inputOptions:Ve,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:Ye}},kN={inputOptions:Ve,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:Ye}},GN={inputOptions:zh,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:H.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[N.SINGLE_CELL_ARROW_TOOL,N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},MN={inputOptions:zh,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:H.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[N.SINGLE_CELL_ARROW_TOOL,N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},UN={inputOptions:si,toolId:d.SASHIGANE_REGION_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:Ye}},$N={inputOptions:Ve,toolId:d.CELL_ON_THE_LOOP,order:H.CELL_SHAPE_TOOL,shape:Ja,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:Ye}},FN={inputOptions:Ve,toolId:d.CELL_NOT_ON_THE_LOOP,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:Ye}},PN={inputOptions:Ve,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:Ye}},HN={inputOptions:si,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:Ye}},BN={inputOptions:Ve,toolId:d.CAVE_CLUE,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:Ye}},WN={inputOptions:si,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:Ye}},zN={inputOptions:si,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:Ye}},YN={inputOptions:si,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:Ye}},jN={inputOptions:Ve,toolId:d.DIRECTED_PATH_START,order:H.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:Ye}},KN={inputOptions:Ve,toolId:d.DIRECTED_PATH_END,order:H.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:Ye}},VN={inputOptions:si,toolId:d.TELEPORT,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:Ye}},XN={inputOptions:si,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:Ye}},qN={inputOptions:Ve,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:H.CELL_SHAPE_TOOL,shape:{...Ja,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:Ye}},ZN={inputOptions:Ve,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:Ye}},QN={inputOptions:Ve,toolId:d.CONNECT_FOUR_YELLOW,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:Ye}},JN={inputOptions:Ve,toolId:d.CONENCT_FOUR_RED,order:H.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:Ye}},ex={inputOptions:Ve,toolId:d.SHIKAKU_REGION_SIZE,order:H.CELL_SHAPE_TOOL,shape:Di,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:Ye}},tx={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Os(t,e,el),defaultValue:"?"},toolId:d.SHIKAKU_REGION_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:Ye}},sr=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_MULTIARROW_TOOL],Ur={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},ar={type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},nx={inputOptions:ar,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:sr}},rx={inputOptions:ar,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:sr}},ix={inputOptions:ar,toolId:d.LOOP_CELL_COUNT_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:sr}},ox={inputOptions:ar,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:sr}},sx={inputOptions:ar,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:sr}},ax={inputOptions:ar,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:sr}},lx={inputOptions:ar,toolId:d.COLD_ARROWS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:sr}},cx={inputOptions:ar,toolId:d.HOT_ARROWS,order:H.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:sr}},ux={inputOptions:ar,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:sr}},dx={inputOptions:ar,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:sr}},_x={inputOptions:ar,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Ur,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:sr}},fx={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},gx={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},hx={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},px={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;const vx={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},mx={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;const Ex={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},Cx={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},Ox=[N.CORNER_LINE_CONSTRAINT,N.CORNER_LINE_TOOL,N.LOCAL_CONSTRAINT],Ix={inputOptions:{type:he.CORNER_LINE},toolId:d.MAZE_WALL,order:H.EDGE_TOOLS,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:Ox}},Mt={[d.GIVEN]:$w,[d.DIGIT]:Fw,[d.REGIONS]:Pw,[d.OUTSIDE]:zw,[d.CORNER_PM]:Hw,[d.CENTER_PM]:Bw,[d.HIGHLIGHTS]:Ww,[d.FOG]:Yw,[d.PEN_TOOL]:jw,[d.SUDOKU_RULES_DO_NOT_APPLY]:oL,[d.LEAVE_EMPTY_CELLS_EMPTY]:sL,[d.LITS]:cL,[d.HEXED_SUDOKU]:aL,[d.FILLOMINO]:lL,[d.ANTIKNIGHT]:uL,[d.ANTI_LONG_KNIGHT]:_L,[d.ANTIKING]:fL,[d.ANTI_GIRAFFE]:dL,[d.DISJOINT_GROUPS]:gL,[d.TANGO]:hL,[d.NONCONSECUTIVE]:pL,[d.NONRATIO]:vL,[d.ANTI_ENTROPY]:yL,[d.GLOBAL_INDEXING_COLUMN]:LL,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:AL,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:wL,[d.NEGATIVE_DIAGONAL]:mL,[d.POSITIVE_DIAGONAL]:EL,[d.NEGATIVE_ANTIDIAGONAL]:CL,[d.POSITIVE_ANTIDIAGONAL]:OL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:IL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:bL,[d.ALL_RATIOS_GIVEN]:SL,[d.ALL_DIFFERENCES_GIVEN]:NL,[d.ALL_X_GIVEN]:xL,[d.ALL_V_GIVEN]:RL,[d.ALL_XV_GIVEN]:TL,[d.ALL_RADARS_GIVEN]:DL,[d.ALL_XY_DIFFERENCES_GIVEN]:kL,[d.ALL_INDEXING_COLUMN_GIVEN]:GL,[d.ALL_INDEXING_ROW_GIVEN]:ML,[d.ALL_YIN_YANG_KROPKI_GIVEN]:UL,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:$L,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:PL,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:HL,[d.CAVE_CELLS_ARE_ODD]:bA,[d.CAVE_WALLS_ARE_EVEN]:IA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:CA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:OA,[d.DOUBLERS]:vx,[d.NEGATORS]:mx,[d.NEXUS]:Ex,[d.INDEXER_CELLS]:Cx,[d.CHAOS_CONSTRUCTION]:BL,[d.NUMBERED_CHAOS_CONSTRUCTION]:WL,[d.CHAOS_CONSTRUCTION_SUGURU]:zL,[d.YIN_YANG]:YL,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:jL,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:KL,[d.NURIMISAKI]:VL,[d.NURIKABE]:XL,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:qL,[d.TWO_CONTIGUOUS_REGIONS]:ZL,[d.SASHIGANE]:QL,[d.NORINORI]:JL,[d.SHIKAKU]:eA,[d.SHIKAKU_NO_REPEATS_IN_REGION]:tA,[d.GOLDILOCKS_ZONE]:rA,[d.CELL_CENTER_LOOP_NO_TOUCHING]:iA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:oA,[d.NOT_LOOP_SIZED_REGIONS]:lA,[d.MODULAR_LOOP]:cA,[d.CAVE]:mA,[d.CAVE_LITS]:wA,[d.RENBAN_CAVES]:yA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:EA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:FL,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:sA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:aA,[d.GALAXIES]:AA,[d.TWO_SYMMETRIC_GALAXIES]:xA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:SA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:NA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:RA,[d.PENTOMINO_TILLING]:TA,[d.TILLING_NO_EMPTY_CELLS]:DA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:kA,[d.NORINORI_STAR_BATTLE]:nA,[d.MAZE_DIRECTED_PATH]:uA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:dA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:hA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:_A,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:gA,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:pA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:vA,[d.DIRECTED_PATH_IS_PARITY_LINE]:fA,[d.CONNECT_FOUR]:GA,[d.CONNECT_FOUR_DRAW]:MA,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:UA,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:$A,[d.ODD]:QS,[d.EVEN]:JS,[d.MINIMUM]:eN,[d.MAXIMUM]:tN,[d.ODD_MINESWEEPER]:nN,[d.EVEN_MINESWEEPER]:rN,[d.WATCHTOWER]:oN,[d.NOT_WATCHTOWER]:sN,[d.FARSIGHT]:aN,[d.RADAR]:lN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:iN,[d.ORTHOGONAL_SUM]:cN,[d.DIAGONALLY_ADJACENT_SUM]:hN,[d.INDEXING_COLUMN]:uN,[d.INDEXING_ROW]:dN,[d.LOW_DIGIT]:_N,[d.HIGH_DIGIT]:fN,[d.FRIENDLY_CELL]:gN,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:pN,[d.SANDWICH_ROW_COL_COUNT]:vN,[d.COUNTING_CIRCLES]:mN,[d.REVERSE_COUNTING_CIRCLES]:EN,[d.COLORED_COUNTING_CIRCLES]:CN,[d.UNIQUE_CELLS]:ON,[d.SEEN_EVEN_COUNT]:IN,[d.SEEN_ODD_COUNT]:wN,[d.CELL_KNIGHT_WHISPERS]:bN,[d.YIN_YANG_MINESWEEPER]:yN,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:LN,[d.YIN_YANG_SEEN_SHADED_CELLS]:AN,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:SN,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:NN,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:xN,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:RN,[d.SEEN_REGION_BORDERS_COUNT]:TN,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:DN,[d.SASHIGANE_BEND_REGION_COUNT]:kN,[d.SASHIGANE_REGION_SUM]:UN,[d.CELL_ON_THE_LOOP]:$N,[d.CELL_NOT_ON_THE_LOOP]:FN,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:PN,[d.CAVE_CLUE]:BN,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:HN,[d.YIN_YANG_FILLOMINO_PARITY]:LA,[d.SHIKAKU_REGION_SIZE]:ex,[d.SHIKAKU_REGION_SUM]:tx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:WN,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:zN,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:YN,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:XN,[d.DIRECTED_PATH_START]:jN,[d.DIRECTED_PATH_END]:KN,[d.TELEPORT]:VN,[d.CONNECT_FOUR_YELLOW]:QN,[d.CONENCT_FOUR_RED]:JN,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:GN,[d.THERMO_SIGHTLINE_LOOP_ARROW]:MN,[d.HOT_ARROWS]:cx,[d.COLD_ARROWS]:lx,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:ax,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:ox,[d.YIN_YANG_COUNT_SHADED_CELLS]:sx,[d.LOOP_CELL_COUNT_ARROWS]:ix,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:rx,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:nx,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:ux,[d.NURIKABE_SEEN_WATERWAY_CELLS]:qN,[d.NURIKABE_ISLAND_SIZE_CELL]:ZN,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:dx,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:_x,[d.DIFFERENCE]:cy,[d.RATIO]:ly,[d.XV]:dy,[d.EDGE_INEQUALITY]:_y,[d.EDGE_SUM]:uy,[d.EDGE_PRODUCT]:fy,[d.EDGE_MODULO]:gy,[d.EDGE_FACTOR]:hy,[d.XY_DIFFERENCES]:py,[d.YIN_YANG_WHITE_KROPKI]:vy,[d.YIN_YANG_KROPKI]:my,[d.FILLOMINO_REGION_BORDER]:Ey,[d.UNKNOWN_REGION_BORDER]:Cy,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:Oy,[d.EDGE_CAVE_ONE_OF_EACH]:Iy,[d.ONE_WAY_DOOR]:by,[d.QUADRUPLE]:Qw,[d.CORNER_SUM]:Jw,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:ey,[d.CORNER_EVEN_COUNT]:ty,[d.PRODUCT_SQUARE]:ny,[d.EQUAL_DIAGONAL_DIFFERENCES]:ry,[d.THERMOMETER]:FA,[d.FUZZY_THERMOMETER]:HA,[d.SLOW_THERMOMETER]:BA,[d.CUSTOM_THERMOMETER]:PA,[d.ROW_CYCLE_THERMOMETER]:WA,[d.PALINDROME]:zA,[d.RENBAN_LINE]:YA,[d.DOUBLE_RENBAN_LINE]:jA,[d.RENRENBANBAN_LINE]:KA,[d.N_CONSECUTIVE_RENBAN_LINE]:VA,[d.NABNER_LINE]:XA,[d.WHISPERS_LINE]:qA,[d.DUTCH_WHISPERS]:ZA,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:QA,[d.RENBAN_OR_WHISPERS_LINE]:JA,[d.RENBAN_OR_NABNER_LINE]:eS,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:tS,[d.INDEX_LINE]:nS,[d.UNIQUE_VALUES_LINE]:rS,[d.REPEATED_DIGITS_LINE]:vS,[d.REGION_SUM_LINE]:iS,[d.SUM_LINE]:oS,[d.XV_LINE]:OS,[d.ROW_SUM_LINE]:IS,[d.AT_LEAST_X_LINE]:bS,[d.SUPERFUZZY_ARROW]:mS,[d.AMBIGUOUS_ARROW]:ES,[d.HEADLESS_ARROW]:CS,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:wS,[d.PRODUCT_LINE]:yS,[d.ADJACENT_MULTIPLES_LINE]:LS,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:AS,[d.LOOK_AND_SAY_LINE]:SS,[d.ARITHMETIC_SEQUENCE_LINE]:sS,[d.ZIPPER_LINE]:NS,[d.SEGMENTED_SUM_LINE]:xS,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:RS,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:TS,[d.SAME_PARITY_LINE]:aS,[d.MODULAR_LINE]:lS,[d.UNIMODULAR_LINE]:cS,[d.MODULAR_OR_UNIMODULAR_LINE]:uS,[d.ODD_EVEN_OSCILLATOR_LINE]:dS,[d.HIGH_LOW_OSCILLATOR_LINE]:_S,[d.ENTROPIC_LINE]:fS,[d.ENTROPIC_OR_MODULAR_LINE]:gS,[d.INDEXING_COLUMN_IS_X_LINE]:hS,[d.INDEXING_ROW_IS_X_LINE]:pS,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:DS,[d.PEAPODS]:kS,[d.YIN_YANG_INDEXING_LINE_COLORING]:FS,[d.YIN_YANG_SHADED_WHISPERS_LINE]:GS,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:MS,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:US,[d.YIN_YANG_REGION_SUM_LINE]:$S,[d.GOLDILOCKS_ZONE_REGION_SUM]:PS,[d.BETWEEN_LINE]:HS,[d.LOCKOUT_LINE]:BS,[d.PARITY_COUNT_LINE]:zS,[d.TIGHTROPE_LINE]:WS,[d.DOUBLE_ARROW_LINE]:YS,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:jS,[d.SPLIT_PEAS]:KS,[d.DOUBLERS_THERMOMETER]:VS,[d.DOUBLERS_BETWEEN_LINE]:XS,[d.DOUBLERS_DOUBLE_ARROW_LINE]:qS,[d.ARROW]:ow,[d.CHAOS_CONSTRUCTION_ARROW]:lw,[d.AVERAGE_ARROW]:sw,[d.BULBOUS_ARROW]:aw,[d.MAZE_WALL]:Ix,[d.KILLER_CAGE]:bw,[d.UNIQUE_DIGITS_CAGE]:ww,[d.INVERTED_KILLER_CAGE]:yw,[d.SUM_CAGE]:Lw,[d.SUM_CAGE_LOOK_AND_SAY]:Aw,[d.PARITY_BALANCE_CAGE]:Sw,[d.DIVISIBLE_KILLER_CAGE]:Nw,[d.SPOTLIGHT_CAGE]:xw,[d.PUTTERIA_CAGE]:Rw,[d.MULTISET_CAGE]:Tw,[d.VAULTED_CAGE]:Dw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:kw,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:Gw,[d.DOUBLERS_KILLER_CAGE]:Mw,[d.NEGATORS_KILLER_CAGE]:Uw,[d.CLONE_REGION]:qw,[d.SANDWICH_SUM]:Ry,[d.MYSTERY_SANDWICH_SUM]:Ty,[d.X_SUM]:ky,[d.SHORTSIGHTED_X_SUM]:Gy,[d.SHIFTED_X_SUM]:My,[d.BROKEN_X_SUM]:Uy,[d.X_SUM_SKYSCRAPERS]:$y,[d.BATTLEFIELD]:Fy,[d.SKYSCRAPERS]:Py,[d.X_INDEX]:Hy,[d.SANDWICH_SUM_XOR_X_SUM]:Dy,[d.RISING_STREAK]:By,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:Wy,[d.OUTSIDE_CONSECUTIVE_SUM]:zy,[d.LOOPWICHES]:Yy,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:jy,[d.PENTOMINO_BORDER_COUNT]:Ky,[d.LITTLE_KILLER_SUM]:yy,[d.LITTLE_KILLER_PRODUCT]:Ly,[d.LITTLE_KILLER_LOOK_AND_SAY]:Ay,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:Ny,[d.X_OMIT_LITTLE_KILLER_SUM]:Sy,[d.NEGATORS_LITTLE_KILLER_SUM]:xy,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Vw,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:Xw,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:fx,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:gx,[d.FORBIDDEN_KNIGHT_SUM]:hx,[d.LITS_MAX_TETROMINO_SUM]:px,[d.COSMETIC_CELL_SHAPE]:Vy,[d.COSMETIC_CELL_ARROW]:Xy,[d.COSMETIC_CELL_MULTI_ARROW]:qy,[d.COSMETIC_EDGE]:Zy,[d.COSMETIC_CORNER]:Qy,[d.COSMETIC_LINE]:Jy,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:eL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:tL,[d.COSMETIC_ARROW]:rL,[d.COSMETIC_CAGE]:nL,[d.COSMETIC_OUTSIDE_DIRECTION]:iL};class Ai extends Map{constructor(){super()}setConstraint(e,n){return Ub(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Ai;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Ai;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=xh(r);o!==void 0&&Rh(o,zu)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Pe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Pe||{});function Yh(t){if(!(t in Pe))throw Error(" not a key in DIRECTION");return Pe[t]}function qe(t,e){return t.r===e.r&&t.c===e.c}function jh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function bx(t,e){return{r:t.r*e,c:t.c*e}}function wx(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Is(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!qe(t,e)}function yx(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ta(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function rn(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function tl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function Lx(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function id(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function Ax(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const Sx=new Map([[6,Pe.N],[2,Pe.S],[0,Pe.E],[4,Pe.W],[7,Pe.NE],[5,Pe.NW],[1,Pe.SE],[3,Pe.SW]]);function od(t){t=t%8;const e=Sx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const Nx=new Map([[Pe.N,{r:-1,c:0}],[Pe.S,{r:1,c:0}],[Pe.E,{r:0,c:1}],[Pe.W,{r:0,c:-1}],[Pe.NE,{r:-1,c:1}],[Pe.NW,{r:-1,c:-1}],[Pe.SE,{r:1,c:1}],[Pe.SW,{r:1,c:-1}]]);function bs(t){const e=Nx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Kh(t,e){const n=bs(e);return jh(t,n)}function sd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Vh(t,e,n=!1){const r=t.some(o=>qe(o,e)),i=n?t.some(o=>Is(o,e)):t.some(o=>yx(o,e));if(!r&&i){const o=[...t,e];return Ta(o),o}return t}function wa(t){return`R${t.r+1}C${t.c+1}`}function ad(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ts={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var xx=ts.exports,Ig;function Rx(){return Ig||(Ig=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,p="__lodash_placeholder__",g=1,v=2,m=4,E=1,O=2,I=1,w=2,A=4,D=8,M=16,z=32,W=64,F=128,P=256,X=512,re=30,q="...",J=800,fe=16,pe=1,be=2,Ae=3,Ue=1/0,xe=9007199254740991,me=17976931348623157e292,nt=NaN,$e=4294967295,wt=$e-1,xt=$e>>>1,sn=[["ary",F],["bind",I],["bindKey",w],["curry",D],["curryRight",M],["flip",X],["partial",z],["partialRight",W],["rearg",P]],Rt="[object Arguments]",kt="[object Array]",Cr="[object AsyncFunction]",Vt="[object Boolean]",er="[object Date]",$i="[object DOMException]",cr="[object Error]",Or="[object Function]",Fe="[object GeneratorFunction]",Oe="[object Map]",Re="[object Number]",Me="[object Null]",yt="[object Object]",Ir="[object Promise]",Cl="[object Proxy]",ui="[object RegExp]",Sn="[object Set]",di="[object String]",Gs="[object Symbol]",Ev="[object Undefined]",Do="[object WeakMap]",Cv="[object WeakSet]",ko="[object ArrayBuffer]",Fi="[object DataView]",Ol="[object Float32Array]",Il="[object Float64Array]",bl="[object Int8Array]",wl="[object Int16Array]",yl="[object Int32Array]",Ll="[object Uint8Array]",Al="[object Uint8ClampedArray]",Sl="[object Uint16Array]",Nl="[object Uint32Array]",Ov=/\b__p \+= '';/g,Iv=/\b(__p \+=) '' \+/g,bv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Hd=/&(?:amp|lt|gt|quot|#39);/g,Bd=/[&<>"']/g,wv=RegExp(Hd.source),yv=RegExp(Bd.source),Lv=/<%-([\s\S]+?)%>/g,Av=/<%([\s\S]+?)%>/g,Wd=/<%=([\s\S]+?)%>/g,Sv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nv=/^\w*$/,xv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xl=/[\\^$.*+?()[\]{}|]/g,Rv=RegExp(xl.source),Rl=/^\s+/,Tv=/\s/,Dv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,kv=/\{\n\/\* \[wrapped with (.+)\] \*/,Gv=/,? & /,Mv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Uv=/[()=,{}\[\]\/\s]/,$v=/\\(\\)?/g,Fv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zd=/\w*$/,Pv=/^[-+]0x[0-9a-f]+$/i,Hv=/^0b[01]+$/i,Bv=/^\[object .+?Constructor\]$/,Wv=/^0o[0-7]+$/i,zv=/^(?:0|[1-9]\d*)$/,Yv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ms=/($^)/,jv=/['\n\r\u2028\u2029\\]/g,Us="\\ud800-\\udfff",Kv="\\u0300-\\u036f",Vv="\\ufe20-\\ufe2f",Xv="\\u20d0-\\u20ff",Yd=Kv+Vv+Xv,jd="\\u2700-\\u27bf",Kd="a-z\\xdf-\\xf6\\xf8-\\xff",qv="\\xac\\xb1\\xd7\\xf7",Zv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Qv="\\u2000-\\u206f",Jv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Vd="A-Z\\xc0-\\xd6\\xd8-\\xde",Xd="\\ufe0e\\ufe0f",qd=qv+Zv+Qv+Jv,Tl="['’]",em="["+Us+"]",Zd="["+qd+"]",$s="["+Yd+"]",Qd="\\d+",tm="["+jd+"]",Jd="["+Kd+"]",e_="[^"+Us+qd+Qd+jd+Kd+Vd+"]",Dl="\\ud83c[\\udffb-\\udfff]",nm="(?:"+$s+"|"+Dl+")",t_="[^"+Us+"]",kl="(?:\\ud83c[\\udde6-\\uddff]){2}",Gl="[\\ud800-\\udbff][\\udc00-\\udfff]",Pi="["+Vd+"]",n_="\\u200d",r_="(?:"+Jd+"|"+e_+")",rm="(?:"+Pi+"|"+e_+")",i_="(?:"+Tl+"(?:d|ll|m|re|s|t|ve))?",o_="(?:"+Tl+"(?:D|LL|M|RE|S|T|VE))?",s_=nm+"?",a_="["+Xd+"]?",im="(?:"+n_+"(?:"+[t_,kl,Gl].join("|")+")"+a_+s_+")*",om="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",sm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",l_=a_+s_+im,am="(?:"+[tm,kl,Gl].join("|")+")"+l_,lm="(?:"+[t_+$s+"?",$s,kl,Gl,em].join("|")+")",cm=RegExp(Tl,"g"),um=RegExp($s,"g"),Ml=RegExp(Dl+"(?="+Dl+")|"+lm+l_,"g"),dm=RegExp([Pi+"?"+Jd+"+"+i_+"(?="+[Zd,Pi,"$"].join("|")+")",rm+"+"+o_+"(?="+[Zd,Pi+r_,"$"].join("|")+")",Pi+"?"+r_+"+"+i_,Pi+"+"+o_,sm,om,Qd,am].join("|"),"g"),_m=RegExp("["+n_+Us+Yd+Xd+"]"),fm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hm=-1,Tt={};Tt[Ol]=Tt[Il]=Tt[bl]=Tt[wl]=Tt[yl]=Tt[Ll]=Tt[Al]=Tt[Sl]=Tt[Nl]=!0,Tt[Rt]=Tt[kt]=Tt[ko]=Tt[Vt]=Tt[Fi]=Tt[er]=Tt[cr]=Tt[Or]=Tt[Oe]=Tt[Re]=Tt[yt]=Tt[ui]=Tt[Sn]=Tt[di]=Tt[Do]=!1;var Lt={};Lt[Rt]=Lt[kt]=Lt[ko]=Lt[Fi]=Lt[Vt]=Lt[er]=Lt[Ol]=Lt[Il]=Lt[bl]=Lt[wl]=Lt[yl]=Lt[Oe]=Lt[Re]=Lt[yt]=Lt[ui]=Lt[Sn]=Lt[di]=Lt[Gs]=Lt[Ll]=Lt[Al]=Lt[Sl]=Lt[Nl]=!0,Lt[cr]=Lt[Or]=Lt[Do]=!1;var pm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},vm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Em={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cm=parseFloat,Om=parseInt,c_=typeof ya=="object"&&ya&&ya.Object===Object&&ya,Im=typeof self=="object"&&self&&self.Object===Object&&self,Jt=c_||Im||Function("return this")(),Ul=e&&!e.nodeType&&e,_i=Ul&&!0&&t&&!t.nodeType&&t,u_=_i&&_i.exports===Ul,$l=u_&&c_.process,Hn=function(){try{var V=_i&&_i.require&&_i.require("util").types;return V||$l&&$l.binding&&$l.binding("util")}catch{}}(),d_=Hn&&Hn.isArrayBuffer,__=Hn&&Hn.isDate,f_=Hn&&Hn.isMap,g_=Hn&&Hn.isRegExp,h_=Hn&&Hn.isSet,p_=Hn&&Hn.isTypedArray;function Nn(V,ie,te){switch(te.length){case 0:return V.call(ie);case 1:return V.call(ie,te[0]);case 2:return V.call(ie,te[0],te[1]);case 3:return V.call(ie,te[0],te[1],te[2])}return V.apply(ie,te)}function bm(V,ie,te,Se){for(var Xe=-1,ht=V==null?0:V.length;++Xe<ht;){var Wt=V[Xe];ie(Se,Wt,te(Wt),V)}return Se}function Bn(V,ie){for(var te=-1,Se=V==null?0:V.length;++te<Se&&ie(V[te],te,V)!==!1;);return V}function wm(V,ie){for(var te=V==null?0:V.length;te--&&ie(V[te],te,V)!==!1;);return V}function v_(V,ie){for(var te=-1,Se=V==null?0:V.length;++te<Se;)if(!ie(V[te],te,V))return!1;return!0}function Wr(V,ie){for(var te=-1,Se=V==null?0:V.length,Xe=0,ht=[];++te<Se;){var Wt=V[te];ie(Wt,te,V)&&(ht[Xe++]=Wt)}return ht}function Fs(V,ie){var te=V==null?0:V.length;return!!te&&Hi(V,ie,0)>-1}function Fl(V,ie,te){for(var Se=-1,Xe=V==null?0:V.length;++Se<Xe;)if(te(ie,V[Se]))return!0;return!1}function Dt(V,ie){for(var te=-1,Se=V==null?0:V.length,Xe=Array(Se);++te<Se;)Xe[te]=ie(V[te],te,V);return Xe}function zr(V,ie){for(var te=-1,Se=ie.length,Xe=V.length;++te<Se;)V[Xe+te]=ie[te];return V}function Pl(V,ie,te,Se){var Xe=-1,ht=V==null?0:V.length;for(Se&&ht&&(te=V[++Xe]);++Xe<ht;)te=ie(te,V[Xe],Xe,V);return te}function ym(V,ie,te,Se){var Xe=V==null?0:V.length;for(Se&&Xe&&(te=V[--Xe]);Xe--;)te=ie(te,V[Xe],Xe,V);return te}function Hl(V,ie){for(var te=-1,Se=V==null?0:V.length;++te<Se;)if(ie(V[te],te,V))return!0;return!1}var Lm=Bl("length");function Am(V){return V.split("")}function Sm(V){return V.match(Mv)||[]}function m_(V,ie,te){var Se;return te(V,function(Xe,ht,Wt){if(ie(Xe,ht,Wt))return Se=ht,!1}),Se}function Ps(V,ie,te,Se){for(var Xe=V.length,ht=te+(Se?1:-1);Se?ht--:++ht<Xe;)if(ie(V[ht],ht,V))return ht;return-1}function Hi(V,ie,te){return ie===ie?Pm(V,ie,te):Ps(V,E_,te)}function Nm(V,ie,te,Se){for(var Xe=te-1,ht=V.length;++Xe<ht;)if(Se(V[Xe],ie))return Xe;return-1}function E_(V){return V!==V}function C_(V,ie){var te=V==null?0:V.length;return te?zl(V,ie)/te:nt}function Bl(V){return function(ie){return ie==null?n:ie[V]}}function Wl(V){return function(ie){return V==null?n:V[ie]}}function O_(V,ie,te,Se,Xe){return Xe(V,function(ht,Wt,It){te=Se?(Se=!1,ht):ie(te,ht,Wt,It)}),te}function xm(V,ie){var te=V.length;for(V.sort(ie);te--;)V[te]=V[te].value;return V}function zl(V,ie){for(var te,Se=-1,Xe=V.length;++Se<Xe;){var ht=ie(V[Se]);ht!==n&&(te=te===n?ht:te+ht)}return te}function Yl(V,ie){for(var te=-1,Se=Array(V);++te<V;)Se[te]=ie(te);return Se}function Rm(V,ie){return Dt(ie,function(te){return[te,V[te]]})}function I_(V){return V&&V.slice(0,L_(V)+1).replace(Rl,"")}function xn(V){return function(ie){return V(ie)}}function jl(V,ie){return Dt(ie,function(te){return V[te]})}function Go(V,ie){return V.has(ie)}function b_(V,ie){for(var te=-1,Se=V.length;++te<Se&&Hi(ie,V[te],0)>-1;);return te}function w_(V,ie){for(var te=V.length;te--&&Hi(ie,V[te],0)>-1;);return te}function Tm(V,ie){for(var te=V.length,Se=0;te--;)V[te]===ie&&++Se;return Se}var Dm=Wl(pm),km=Wl(vm);function Gm(V){return"\\"+Em[V]}function Mm(V,ie){return V==null?n:V[ie]}function Bi(V){return _m.test(V)}function Um(V){return fm.test(V)}function $m(V){for(var ie,te=[];!(ie=V.next()).done;)te.push(ie.value);return te}function Kl(V){var ie=-1,te=Array(V.size);return V.forEach(function(Se,Xe){te[++ie]=[Xe,Se]}),te}function y_(V,ie){return function(te){return V(ie(te))}}function Yr(V,ie){for(var te=-1,Se=V.length,Xe=0,ht=[];++te<Se;){var Wt=V[te];(Wt===ie||Wt===p)&&(V[te]=p,ht[Xe++]=te)}return ht}function Hs(V){var ie=-1,te=Array(V.size);return V.forEach(function(Se){te[++ie]=Se}),te}function Fm(V){var ie=-1,te=Array(V.size);return V.forEach(function(Se){te[++ie]=[Se,Se]}),te}function Pm(V,ie,te){for(var Se=te-1,Xe=V.length;++Se<Xe;)if(V[Se]===ie)return Se;return-1}function Hm(V,ie,te){for(var Se=te+1;Se--;)if(V[Se]===ie)return Se;return Se}function Wi(V){return Bi(V)?Wm(V):Lm(V)}function tr(V){return Bi(V)?zm(V):Am(V)}function L_(V){for(var ie=V.length;ie--&&Tv.test(V.charAt(ie)););return ie}var Bm=Wl(mm);function Wm(V){for(var ie=Ml.lastIndex=0;Ml.test(V);)++ie;return ie}function zm(V){return V.match(Ml)||[]}function Ym(V){return V.match(dm)||[]}var jm=function V(ie){ie=ie==null?Jt:zi.defaults(Jt.Object(),ie,zi.pick(Jt,gm));var te=ie.Array,Se=ie.Date,Xe=ie.Error,ht=ie.Function,Wt=ie.Math,It=ie.Object,Vl=ie.RegExp,Km=ie.String,Wn=ie.TypeError,Bs=te.prototype,Vm=ht.prototype,Yi=It.prototype,Ws=ie["__core-js_shared__"],zs=Vm.toString,mt=Yi.hasOwnProperty,Xm=0,A_=function(){var s=/[^.]+$/.exec(Ws&&Ws.keys&&Ws.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Ys=Yi.toString,qm=zs.call(It),Zm=Jt._,Qm=Vl("^"+zs.call(mt).replace(xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),js=u_?ie.Buffer:n,jr=ie.Symbol,Ks=ie.Uint8Array,S_=js?js.allocUnsafe:n,Vs=y_(It.getPrototypeOf,It),N_=It.create,x_=Yi.propertyIsEnumerable,Xs=Bs.splice,R_=jr?jr.isConcatSpreadable:n,Mo=jr?jr.iterator:n,fi=jr?jr.toStringTag:n,qs=function(){try{var s=mi(It,"defineProperty");return s({},"",{}),s}catch{}}(),Jm=ie.clearTimeout!==Jt.clearTimeout&&ie.clearTimeout,e1=Se&&Se.now!==Jt.Date.now&&Se.now,t1=ie.setTimeout!==Jt.setTimeout&&ie.setTimeout,Zs=Wt.ceil,Qs=Wt.floor,Xl=It.getOwnPropertySymbols,n1=js?js.isBuffer:n,T_=ie.isFinite,r1=Bs.join,i1=y_(It.keys,It),zt=Wt.max,an=Wt.min,o1=Se.now,s1=ie.parseInt,D_=Wt.random,a1=Bs.reverse,ql=mi(ie,"DataView"),Uo=mi(ie,"Map"),Zl=mi(ie,"Promise"),ji=mi(ie,"Set"),$o=mi(ie,"WeakMap"),Fo=mi(It,"create"),Js=$o&&new $o,Ki={},l1=Ei(ql),c1=Ei(Uo),u1=Ei(Zl),d1=Ei(ji),_1=Ei($o),ea=jr?jr.prototype:n,Po=ea?ea.valueOf:n,k_=ea?ea.toString:n;function L(s){if(Ut(s)&&!Ze(s)&&!(s instanceof st)){if(s instanceof zn)return s;if(mt.call(s,"__wrapped__"))return Mf(s)}return new zn(s)}var Vi=function(){function s(){}return function(l){if(!Gt(l))return{};if(N_)return N_(l);s.prototype=l;var h=new s;return s.prototype=n,h}}();function ta(){}function zn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:Lv,evaluate:Av,interpolate:Wd,variable:"",imports:{_:L}},L.prototype=ta.prototype,L.prototype.constructor=L,zn.prototype=Vi(ta.prototype),zn.prototype.constructor=zn;function st(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function f1(){var s=new st(this.__wrapped__);return s.__actions__=En(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=En(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=En(this.__views__),s}function g1(){if(this.__filtered__){var s=new st(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function h1(){var s=this.__wrapped__.value(),l=this.__dir__,h=Ze(s),C=l<0,b=h?s.length:0,x=A0(0,b,this.__views__),U=x.start,Y=x.end,Q=Y-U,ce=C?Y:U-1,ue=this.__iteratees__,ge=ue.length,Le=0,ke=an(Q,this.__takeCount__);if(!h||!C&&b==Q&&ke==Q)return of(s,this.__actions__);var We=[];e:for(;Q--&&Le<ke;){ce+=l;for(var tt=-1,ze=s[ce];++tt<ge;){var ot=ue[tt],lt=ot.iteratee,Dn=ot.type,fn=lt(ze);if(Dn==be)ze=fn;else if(!fn){if(Dn==pe)continue e;break e}}We[Le++]=ze}return We}st.prototype=Vi(ta.prototype),st.prototype.constructor=st;function gi(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function p1(){this.__data__=Fo?Fo(null):{},this.size=0}function v1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function m1(s){var l=this.__data__;if(Fo){var h=l[s];return h===u?n:h}return mt.call(l,s)?l[s]:n}function E1(s){var l=this.__data__;return Fo?l[s]!==n:mt.call(l,s)}function C1(s,l){var h=this.__data__;return this.size+=this.has(s)?0:1,h[s]=Fo&&l===n?u:l,this}gi.prototype.clear=p1,gi.prototype.delete=v1,gi.prototype.get=m1,gi.prototype.has=E1,gi.prototype.set=C1;function br(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function O1(){this.__data__=[],this.size=0}function I1(s){var l=this.__data__,h=na(l,s);if(h<0)return!1;var C=l.length-1;return h==C?l.pop():Xs.call(l,h,1),--this.size,!0}function b1(s){var l=this.__data__,h=na(l,s);return h<0?n:l[h][1]}function w1(s){return na(this.__data__,s)>-1}function y1(s,l){var h=this.__data__,C=na(h,s);return C<0?(++this.size,h.push([s,l])):h[C][1]=l,this}br.prototype.clear=O1,br.prototype.delete=I1,br.prototype.get=b1,br.prototype.has=w1,br.prototype.set=y1;function wr(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function L1(){this.size=0,this.__data__={hash:new gi,map:new(Uo||br),string:new gi}}function A1(s){var l=ga(this,s).delete(s);return this.size-=l?1:0,l}function S1(s){return ga(this,s).get(s)}function N1(s){return ga(this,s).has(s)}function x1(s,l){var h=ga(this,s),C=h.size;return h.set(s,l),this.size+=h.size==C?0:1,this}wr.prototype.clear=L1,wr.prototype.delete=A1,wr.prototype.get=S1,wr.prototype.has=N1,wr.prototype.set=x1;function hi(s){var l=-1,h=s==null?0:s.length;for(this.__data__=new wr;++l<h;)this.add(s[l])}function R1(s){return this.__data__.set(s,u),this}function T1(s){return this.__data__.has(s)}hi.prototype.add=hi.prototype.push=R1,hi.prototype.has=T1;function nr(s){var l=this.__data__=new br(s);this.size=l.size}function D1(){this.__data__=new br,this.size=0}function k1(s){var l=this.__data__,h=l.delete(s);return this.size=l.size,h}function G1(s){return this.__data__.get(s)}function M1(s){return this.__data__.has(s)}function U1(s,l){var h=this.__data__;if(h instanceof br){var C=h.__data__;if(!Uo||C.length<i-1)return C.push([s,l]),this.size=++h.size,this;h=this.__data__=new wr(C)}return h.set(s,l),this.size=h.size,this}nr.prototype.clear=D1,nr.prototype.delete=k1,nr.prototype.get=G1,nr.prototype.has=M1,nr.prototype.set=U1;function G_(s,l){var h=Ze(s),C=!h&&Ci(s),b=!h&&!C&&Zr(s),x=!h&&!C&&!b&&Qi(s),U=h||C||b||x,Y=U?Yl(s.length,Km):[],Q=Y.length;for(var ce in s)(l||mt.call(s,ce))&&!(U&&(ce=="length"||b&&(ce=="offset"||ce=="parent")||x&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||Sr(ce,Q)))&&Y.push(ce);return Y}function M_(s){var l=s.length;return l?s[lc(0,l-1)]:n}function $1(s,l){return ha(En(s),pi(l,0,s.length))}function F1(s){return ha(En(s))}function Ql(s,l,h){(h!==n&&!rr(s[l],h)||h===n&&!(l in s))&&yr(s,l,h)}function Ho(s,l,h){var C=s[l];(!(mt.call(s,l)&&rr(C,h))||h===n&&!(l in s))&&yr(s,l,h)}function na(s,l){for(var h=s.length;h--;)if(rr(s[h][0],l))return h;return-1}function P1(s,l,h,C){return Kr(s,function(b,x,U){l(C,b,h(b),U)}),C}function U_(s,l){return s&&dr(l,Xt(l),s)}function H1(s,l){return s&&dr(l,On(l),s)}function yr(s,l,h){l=="__proto__"&&qs?qs(s,l,{configurable:!0,enumerable:!0,value:h,writable:!0}):s[l]=h}function Jl(s,l){for(var h=-1,C=l.length,b=te(C),x=s==null;++h<C;)b[h]=x?n:Dc(s,l[h]);return b}function pi(s,l,h){return s===s&&(h!==n&&(s=s<=h?s:h),l!==n&&(s=s>=l?s:l)),s}function Yn(s,l,h,C,b,x){var U,Y=l&g,Q=l&v,ce=l&m;if(h&&(U=b?h(s,C,b,x):h(s)),U!==n)return U;if(!Gt(s))return s;var ue=Ze(s);if(ue){if(U=N0(s),!Y)return En(s,U)}else{var ge=ln(s),Le=ge==Or||ge==Fe;if(Zr(s))return lf(s,Y);if(ge==yt||ge==Rt||Le&&!b){if(U=Q||Le?{}:Af(s),!Y)return Q?m0(s,H1(U,s)):v0(s,U_(U,s))}else{if(!Lt[ge])return b?s:{};U=x0(s,ge,Y)}}x||(x=new nr);var ke=x.get(s);if(ke)return ke;x.set(s,U),ng(s)?s.forEach(function(ze){U.add(Yn(ze,l,h,ze,s,x))}):eg(s)&&s.forEach(function(ze,ot){U.set(ot,Yn(ze,l,h,ot,s,x))});var We=ce?Q?Ec:mc:Q?On:Xt,tt=ue?n:We(s);return Bn(tt||s,function(ze,ot){tt&&(ot=ze,ze=s[ot]),Ho(U,ot,Yn(ze,l,h,ot,s,x))}),U}function B1(s){var l=Xt(s);return function(h){return $_(h,s,l)}}function $_(s,l,h){var C=h.length;if(s==null)return!C;for(s=It(s);C--;){var b=h[C],x=l[b],U=s[b];if(U===n&&!(b in s)||!x(U))return!1}return!0}function F_(s,l,h){if(typeof s!="function")throw new Wn(a);return Vo(function(){s.apply(n,h)},l)}function Bo(s,l,h,C){var b=-1,x=Fs,U=!0,Y=s.length,Q=[],ce=l.length;if(!Y)return Q;h&&(l=Dt(l,xn(h))),C?(x=Fl,U=!1):l.length>=i&&(x=Go,U=!1,l=new hi(l));e:for(;++b<Y;){var ue=s[b],ge=h==null?ue:h(ue);if(ue=C||ue!==0?ue:0,U&&ge===ge){for(var Le=ce;Le--;)if(l[Le]===ge)continue e;Q.push(ue)}else x(l,ge,C)||Q.push(ue)}return Q}var Kr=ff(ur),P_=ff(tc,!0);function W1(s,l){var h=!0;return Kr(s,function(C,b,x){return h=!!l(C,b,x),h}),h}function ra(s,l,h){for(var C=-1,b=s.length;++C<b;){var x=s[C],U=l(x);if(U!=null&&(Y===n?U===U&&!Tn(U):h(U,Y)))var Y=U,Q=x}return Q}function z1(s,l,h,C){var b=s.length;for(h=et(h),h<0&&(h=-h>b?0:b+h),C=C===n||C>b?b:et(C),C<0&&(C+=b),C=h>C?0:ig(C);h<C;)s[h++]=l;return s}function H_(s,l){var h=[];return Kr(s,function(C,b,x){l(C,b,x)&&h.push(C)}),h}function en(s,l,h,C,b){var x=-1,U=s.length;for(h||(h=T0),b||(b=[]);++x<U;){var Y=s[x];l>0&&h(Y)?l>1?en(Y,l-1,h,C,b):zr(b,Y):C||(b[b.length]=Y)}return b}var ec=gf(),B_=gf(!0);function ur(s,l){return s&&ec(s,l,Xt)}function tc(s,l){return s&&B_(s,l,Xt)}function ia(s,l){return Wr(l,function(h){return Nr(s[h])})}function vi(s,l){l=Xr(l,s);for(var h=0,C=l.length;s!=null&&h<C;)s=s[_r(l[h++])];return h&&h==C?s:n}function W_(s,l,h){var C=l(s);return Ze(s)?C:zr(C,h(s))}function dn(s){return s==null?s===n?Ev:Me:fi&&fi in It(s)?L0(s):F0(s)}function nc(s,l){return s>l}function Y1(s,l){return s!=null&&mt.call(s,l)}function j1(s,l){return s!=null&&l in It(s)}function K1(s,l,h){return s>=an(l,h)&&s<zt(l,h)}function rc(s,l,h){for(var C=h?Fl:Fs,b=s[0].length,x=s.length,U=x,Y=te(x),Q=1/0,ce=[];U--;){var ue=s[U];U&&l&&(ue=Dt(ue,xn(l))),Q=an(ue.length,Q),Y[U]=!h&&(l||b>=120&&ue.length>=120)?new hi(U&&ue):n}ue=s[0];var ge=-1,Le=Y[0];e:for(;++ge<b&&ce.length<Q;){var ke=ue[ge],We=l?l(ke):ke;if(ke=h||ke!==0?ke:0,!(Le?Go(Le,We):C(ce,We,h))){for(U=x;--U;){var tt=Y[U];if(!(tt?Go(tt,We):C(s[U],We,h)))continue e}Le&&Le.push(We),ce.push(ke)}}return ce}function V1(s,l,h,C){return ur(s,function(b,x,U){l(C,h(b),x,U)}),C}function Wo(s,l,h){l=Xr(l,s),s=Rf(s,l);var C=s==null?s:s[_r(Kn(l))];return C==null?n:Nn(C,s,h)}function z_(s){return Ut(s)&&dn(s)==Rt}function X1(s){return Ut(s)&&dn(s)==ko}function q1(s){return Ut(s)&&dn(s)==er}function zo(s,l,h,C,b){return s===l?!0:s==null||l==null||!Ut(s)&&!Ut(l)?s!==s&&l!==l:Z1(s,l,h,C,zo,b)}function Z1(s,l,h,C,b,x){var U=Ze(s),Y=Ze(l),Q=U?kt:ln(s),ce=Y?kt:ln(l);Q=Q==Rt?yt:Q,ce=ce==Rt?yt:ce;var ue=Q==yt,ge=ce==yt,Le=Q==ce;if(Le&&Zr(s)){if(!Zr(l))return!1;U=!0,ue=!1}if(Le&&!ue)return x||(x=new nr),U||Qi(s)?wf(s,l,h,C,b,x):w0(s,l,Q,h,C,b,x);if(!(h&E)){var ke=ue&&mt.call(s,"__wrapped__"),We=ge&&mt.call(l,"__wrapped__");if(ke||We){var tt=ke?s.value():s,ze=We?l.value():l;return x||(x=new nr),b(tt,ze,h,C,x)}}return Le?(x||(x=new nr),y0(s,l,h,C,b,x)):!1}function Q1(s){return Ut(s)&&ln(s)==Oe}function ic(s,l,h,C){var b=h.length,x=b,U=!C;if(s==null)return!x;for(s=It(s);b--;){var Y=h[b];if(U&&Y[2]?Y[1]!==s[Y[0]]:!(Y[0]in s))return!1}for(;++b<x;){Y=h[b];var Q=Y[0],ce=s[Q],ue=Y[1];if(U&&Y[2]){if(ce===n&&!(Q in s))return!1}else{var ge=new nr;if(C)var Le=C(ce,ue,Q,s,l,ge);if(!(Le===n?zo(ue,ce,E|O,C,ge):Le))return!1}}return!0}function Y_(s){if(!Gt(s)||k0(s))return!1;var l=Nr(s)?Qm:Bv;return l.test(Ei(s))}function J1(s){return Ut(s)&&dn(s)==ui}function e0(s){return Ut(s)&&ln(s)==Sn}function t0(s){return Ut(s)&&Oa(s.length)&&!!Tt[dn(s)]}function j_(s){return typeof s=="function"?s:s==null?In:typeof s=="object"?Ze(s)?X_(s[0],s[1]):V_(s):hg(s)}function oc(s){if(!Ko(s))return i1(s);var l=[];for(var h in It(s))mt.call(s,h)&&h!="constructor"&&l.push(h);return l}function n0(s){if(!Gt(s))return $0(s);var l=Ko(s),h=[];for(var C in s)C=="constructor"&&(l||!mt.call(s,C))||h.push(C);return h}function sc(s,l){return s<l}function K_(s,l){var h=-1,C=Cn(s)?te(s.length):[];return Kr(s,function(b,x,U){C[++h]=l(b,x,U)}),C}function V_(s){var l=Oc(s);return l.length==1&&l[0][2]?Nf(l[0][0],l[0][1]):function(h){return h===s||ic(h,s,l)}}function X_(s,l){return bc(s)&&Sf(l)?Nf(_r(s),l):function(h){var C=Dc(h,s);return C===n&&C===l?kc(h,s):zo(l,C,E|O)}}function oa(s,l,h,C,b){s!==l&&ec(l,function(x,U){if(b||(b=new nr),Gt(x))r0(s,l,U,h,oa,C,b);else{var Y=C?C(yc(s,U),x,U+"",s,l,b):n;Y===n&&(Y=x),Ql(s,U,Y)}},On)}function r0(s,l,h,C,b,x,U){var Y=yc(s,h),Q=yc(l,h),ce=U.get(Q);if(ce){Ql(s,h,ce);return}var ue=x?x(Y,Q,h+"",s,l,U):n,ge=ue===n;if(ge){var Le=Ze(Q),ke=!Le&&Zr(Q),We=!Le&&!ke&&Qi(Q);ue=Q,Le||ke||We?Ze(Y)?ue=Y:$t(Y)?ue=En(Y):ke?(ge=!1,ue=lf(Q,!0)):We?(ge=!1,ue=cf(Q,!0)):ue=[]:Xo(Q)||Ci(Q)?(ue=Y,Ci(Y)?ue=og(Y):(!Gt(Y)||Nr(Y))&&(ue=Af(Q))):ge=!1}ge&&(U.set(Q,ue),b(ue,Q,C,x,U),U.delete(Q)),Ql(s,h,ue)}function q_(s,l){var h=s.length;if(h)return l+=l<0?h:0,Sr(l,h)?s[l]:n}function Z_(s,l,h){l.length?l=Dt(l,function(x){return Ze(x)?function(U){return vi(U,x.length===1?x[0]:x)}:x}):l=[In];var C=-1;l=Dt(l,xn(Be()));var b=K_(s,function(x,U,Y){var Q=Dt(l,function(ce){return ce(x)});return{criteria:Q,index:++C,value:x}});return xm(b,function(x,U){return p0(x,U,h)})}function i0(s,l){return Q_(s,l,function(h,C){return kc(s,C)})}function Q_(s,l,h){for(var C=-1,b=l.length,x={};++C<b;){var U=l[C],Y=vi(s,U);h(Y,U)&&Yo(x,Xr(U,s),Y)}return x}function o0(s){return function(l){return vi(l,s)}}function ac(s,l,h,C){var b=C?Nm:Hi,x=-1,U=l.length,Y=s;for(s===l&&(l=En(l)),h&&(Y=Dt(s,xn(h)));++x<U;)for(var Q=0,ce=l[x],ue=h?h(ce):ce;(Q=b(Y,ue,Q,C))>-1;)Y!==s&&Xs.call(Y,Q,1),Xs.call(s,Q,1);return s}function J_(s,l){for(var h=s?l.length:0,C=h-1;h--;){var b=l[h];if(h==C||b!==x){var x=b;Sr(b)?Xs.call(s,b,1):dc(s,b)}}return s}function lc(s,l){return s+Qs(D_()*(l-s+1))}function s0(s,l,h,C){for(var b=-1,x=zt(Zs((l-s)/(h||1)),0),U=te(x);x--;)U[C?x:++b]=s,s+=h;return U}function cc(s,l){var h="";if(!s||l<1||l>xe)return h;do l%2&&(h+=s),l=Qs(l/2),l&&(s+=s);while(l);return h}function rt(s,l){return Lc(xf(s,l,In),s+"")}function a0(s){return M_(Ji(s))}function l0(s,l){var h=Ji(s);return ha(h,pi(l,0,h.length))}function Yo(s,l,h,C){if(!Gt(s))return s;l=Xr(l,s);for(var b=-1,x=l.length,U=x-1,Y=s;Y!=null&&++b<x;){var Q=_r(l[b]),ce=h;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return s;if(b!=U){var ue=Y[Q];ce=C?C(ue,Q,Y):n,ce===n&&(ce=Gt(ue)?ue:Sr(l[b+1])?[]:{})}Ho(Y,Q,ce),Y=Y[Q]}return s}var ef=Js?function(s,l){return Js.set(s,l),s}:In,c0=qs?function(s,l){return qs(s,"toString",{configurable:!0,enumerable:!1,value:Mc(l),writable:!0})}:In;function u0(s){return ha(Ji(s))}function jn(s,l,h){var C=-1,b=s.length;l<0&&(l=-l>b?0:b+l),h=h>b?b:h,h<0&&(h+=b),b=l>h?0:h-l>>>0,l>>>=0;for(var x=te(b);++C<b;)x[C]=s[C+l];return x}function d0(s,l){var h;return Kr(s,function(C,b,x){return h=l(C,b,x),!h}),!!h}function sa(s,l,h){var C=0,b=s==null?C:s.length;if(typeof l=="number"&&l===l&&b<=xt){for(;C<b;){var x=C+b>>>1,U=s[x];U!==null&&!Tn(U)&&(h?U<=l:U<l)?C=x+1:b=x}return b}return uc(s,l,In,h)}function uc(s,l,h,C){var b=0,x=s==null?0:s.length;if(x===0)return 0;l=h(l);for(var U=l!==l,Y=l===null,Q=Tn(l),ce=l===n;b<x;){var ue=Qs((b+x)/2),ge=h(s[ue]),Le=ge!==n,ke=ge===null,We=ge===ge,tt=Tn(ge);if(U)var ze=C||We;else ce?ze=We&&(C||Le):Y?ze=We&&Le&&(C||!ke):Q?ze=We&&Le&&!ke&&(C||!tt):ke||tt?ze=!1:ze=C?ge<=l:ge<l;ze?b=ue+1:x=ue}return an(x,wt)}function tf(s,l){for(var h=-1,C=s.length,b=0,x=[];++h<C;){var U=s[h],Y=l?l(U):U;if(!h||!rr(Y,Q)){var Q=Y;x[b++]=U===0?0:U}}return x}function nf(s){return typeof s=="number"?s:Tn(s)?nt:+s}function Rn(s){if(typeof s=="string")return s;if(Ze(s))return Dt(s,Rn)+"";if(Tn(s))return k_?k_.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Vr(s,l,h){var C=-1,b=Fs,x=s.length,U=!0,Y=[],Q=Y;if(h)U=!1,b=Fl;else if(x>=i){var ce=l?null:I0(s);if(ce)return Hs(ce);U=!1,b=Go,Q=new hi}else Q=l?[]:Y;e:for(;++C<x;){var ue=s[C],ge=l?l(ue):ue;if(ue=h||ue!==0?ue:0,U&&ge===ge){for(var Le=Q.length;Le--;)if(Q[Le]===ge)continue e;l&&Q.push(ge),Y.push(ue)}else b(Q,ge,h)||(Q!==Y&&Q.push(ge),Y.push(ue))}return Y}function dc(s,l){return l=Xr(l,s),s=Rf(s,l),s==null||delete s[_r(Kn(l))]}function rf(s,l,h,C){return Yo(s,l,h(vi(s,l)),C)}function aa(s,l,h,C){for(var b=s.length,x=C?b:-1;(C?x--:++x<b)&&l(s[x],x,s););return h?jn(s,C?0:x,C?x+1:b):jn(s,C?x+1:0,C?b:x)}function of(s,l){var h=s;return h instanceof st&&(h=h.value()),Pl(l,function(C,b){return b.func.apply(b.thisArg,zr([C],b.args))},h)}function _c(s,l,h){var C=s.length;if(C<2)return C?Vr(s[0]):[];for(var b=-1,x=te(C);++b<C;)for(var U=s[b],Y=-1;++Y<C;)Y!=b&&(x[b]=Bo(x[b]||U,s[Y],l,h));return Vr(en(x,1),l,h)}function sf(s,l,h){for(var C=-1,b=s.length,x=l.length,U={};++C<b;){var Y=C<x?l[C]:n;h(U,s[C],Y)}return U}function fc(s){return $t(s)?s:[]}function gc(s){return typeof s=="function"?s:In}function Xr(s,l){return Ze(s)?s:bc(s,l)?[s]:Gf(pt(s))}var _0=rt;function qr(s,l,h){var C=s.length;return h=h===n?C:h,!l&&h>=C?s:jn(s,l,h)}var af=Jm||function(s){return Jt.clearTimeout(s)};function lf(s,l){if(l)return s.slice();var h=s.length,C=S_?S_(h):new s.constructor(h);return s.copy(C),C}function hc(s){var l=new s.constructor(s.byteLength);return new Ks(l).set(new Ks(s)),l}function f0(s,l){var h=l?hc(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.byteLength)}function g0(s){var l=new s.constructor(s.source,zd.exec(s));return l.lastIndex=s.lastIndex,l}function h0(s){return Po?It(Po.call(s)):{}}function cf(s,l){var h=l?hc(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.length)}function uf(s,l){if(s!==l){var h=s!==n,C=s===null,b=s===s,x=Tn(s),U=l!==n,Y=l===null,Q=l===l,ce=Tn(l);if(!Y&&!ce&&!x&&s>l||x&&U&&Q&&!Y&&!ce||C&&U&&Q||!h&&Q||!b)return 1;if(!C&&!x&&!ce&&s<l||ce&&h&&b&&!C&&!x||Y&&h&&b||!U&&b||!Q)return-1}return 0}function p0(s,l,h){for(var C=-1,b=s.criteria,x=l.criteria,U=b.length,Y=h.length;++C<U;){var Q=uf(b[C],x[C]);if(Q){if(C>=Y)return Q;var ce=h[C];return Q*(ce=="desc"?-1:1)}}return s.index-l.index}function df(s,l,h,C){for(var b=-1,x=s.length,U=h.length,Y=-1,Q=l.length,ce=zt(x-U,0),ue=te(Q+ce),ge=!C;++Y<Q;)ue[Y]=l[Y];for(;++b<U;)(ge||b<x)&&(ue[h[b]]=s[b]);for(;ce--;)ue[Y++]=s[b++];return ue}function _f(s,l,h,C){for(var b=-1,x=s.length,U=-1,Y=h.length,Q=-1,ce=l.length,ue=zt(x-Y,0),ge=te(ue+ce),Le=!C;++b<ue;)ge[b]=s[b];for(var ke=b;++Q<ce;)ge[ke+Q]=l[Q];for(;++U<Y;)(Le||b<x)&&(ge[ke+h[U]]=s[b++]);return ge}function En(s,l){var h=-1,C=s.length;for(l||(l=te(C));++h<C;)l[h]=s[h];return l}function dr(s,l,h,C){var b=!h;h||(h={});for(var x=-1,U=l.length;++x<U;){var Y=l[x],Q=C?C(h[Y],s[Y],Y,h,s):n;Q===n&&(Q=s[Y]),b?yr(h,Y,Q):Ho(h,Y,Q)}return h}function v0(s,l){return dr(s,Ic(s),l)}function m0(s,l){return dr(s,yf(s),l)}function la(s,l){return function(h,C){var b=Ze(h)?bm:P1,x=l?l():{};return b(h,s,Be(C,2),x)}}function Xi(s){return rt(function(l,h){var C=-1,b=h.length,x=b>1?h[b-1]:n,U=b>2?h[2]:n;for(x=s.length>3&&typeof x=="function"?(b--,x):n,U&&_n(h[0],h[1],U)&&(x=b<3?n:x,b=1),l=It(l);++C<b;){var Y=h[C];Y&&s(l,Y,C,x)}return l})}function ff(s,l){return function(h,C){if(h==null)return h;if(!Cn(h))return s(h,C);for(var b=h.length,x=l?b:-1,U=It(h);(l?x--:++x<b)&&C(U[x],x,U)!==!1;);return h}}function gf(s){return function(l,h,C){for(var b=-1,x=It(l),U=C(l),Y=U.length;Y--;){var Q=U[s?Y:++b];if(h(x[Q],Q,x)===!1)break}return l}}function E0(s,l,h){var C=l&I,b=jo(s);function x(){var U=this&&this!==Jt&&this instanceof x?b:s;return U.apply(C?h:this,arguments)}return x}function hf(s){return function(l){l=pt(l);var h=Bi(l)?tr(l):n,C=h?h[0]:l.charAt(0),b=h?qr(h,1).join(""):l.slice(1);return C[s]()+b}}function qi(s){return function(l){return Pl(fg(_g(l).replace(cm,"")),s,"")}}function jo(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var h=Vi(s.prototype),C=s.apply(h,l);return Gt(C)?C:h}}function C0(s,l,h){var C=jo(s);function b(){for(var x=arguments.length,U=te(x),Y=x,Q=Zi(b);Y--;)U[Y]=arguments[Y];var ce=x<3&&U[0]!==Q&&U[x-1]!==Q?[]:Yr(U,Q);if(x-=ce.length,x<h)return Cf(s,l,ca,b.placeholder,n,U,ce,n,n,h-x);var ue=this&&this!==Jt&&this instanceof b?C:s;return Nn(ue,this,U)}return b}function pf(s){return function(l,h,C){var b=It(l);if(!Cn(l)){var x=Be(h,3);l=Xt(l),h=function(Y){return x(b[Y],Y,b)}}var U=s(l,h,C);return U>-1?b[x?l[U]:U]:n}}function vf(s){return Ar(function(l){var h=l.length,C=h,b=zn.prototype.thru;for(s&&l.reverse();C--;){var x=l[C];if(typeof x!="function")throw new Wn(a);if(b&&!U&&fa(x)=="wrapper")var U=new zn([],!0)}for(C=U?C:h;++C<h;){x=l[C];var Y=fa(x),Q=Y=="wrapper"?Cc(x):n;Q&&wc(Q[0])&&Q[1]==(F|D|z|P)&&!Q[4].length&&Q[9]==1?U=U[fa(Q[0])].apply(U,Q[3]):U=x.length==1&&wc(x)?U[Y]():U.thru(x)}return function(){var ce=arguments,ue=ce[0];if(U&&ce.length==1&&Ze(ue))return U.plant(ue).value();for(var ge=0,Le=h?l[ge].apply(this,ce):ue;++ge<h;)Le=l[ge].call(this,Le);return Le}})}function ca(s,l,h,C,b,x,U,Y,Q,ce){var ue=l&F,ge=l&I,Le=l&w,ke=l&(D|M),We=l&X,tt=Le?n:jo(s);function ze(){for(var ot=arguments.length,lt=te(ot),Dn=ot;Dn--;)lt[Dn]=arguments[Dn];if(ke)var fn=Zi(ze),kn=Tm(lt,fn);if(C&&(lt=df(lt,C,b,ke)),x&&(lt=_f(lt,x,U,ke)),ot-=kn,ke&&ot<ce){var Ft=Yr(lt,fn);return Cf(s,l,ca,ze.placeholder,h,lt,Ft,Y,Q,ce-ot)}var ir=ge?h:this,Rr=Le?ir[s]:s;return ot=lt.length,Y?lt=P0(lt,Y):We&&ot>1&&lt.reverse(),ue&&Q<ot&&(lt.length=Q),this&&this!==Jt&&this instanceof ze&&(Rr=tt||jo(Rr)),Rr.apply(ir,lt)}return ze}function mf(s,l){return function(h,C){return V1(h,s,l(C),{})}}function ua(s,l){return function(h,C){var b;if(h===n&&C===n)return l;if(h!==n&&(b=h),C!==n){if(b===n)return C;typeof h=="string"||typeof C=="string"?(h=Rn(h),C=Rn(C)):(h=nf(h),C=nf(C)),b=s(h,C)}return b}}function pc(s){return Ar(function(l){return l=Dt(l,xn(Be())),rt(function(h){var C=this;return s(l,function(b){return Nn(b,C,h)})})})}function da(s,l){l=l===n?" ":Rn(l);var h=l.length;if(h<2)return h?cc(l,s):l;var C=cc(l,Zs(s/Wi(l)));return Bi(l)?qr(tr(C),0,s).join(""):C.slice(0,s)}function O0(s,l,h,C){var b=l&I,x=jo(s);function U(){for(var Y=-1,Q=arguments.length,ce=-1,ue=C.length,ge=te(ue+Q),Le=this&&this!==Jt&&this instanceof U?x:s;++ce<ue;)ge[ce]=C[ce];for(;Q--;)ge[ce++]=arguments[++Y];return Nn(Le,b?h:this,ge)}return U}function Ef(s){return function(l,h,C){return C&&typeof C!="number"&&_n(l,h,C)&&(h=C=n),l=xr(l),h===n?(h=l,l=0):h=xr(h),C=C===n?l<h?1:-1:xr(C),s0(l,h,C,s)}}function _a(s){return function(l,h){return typeof l=="string"&&typeof h=="string"||(l=Vn(l),h=Vn(h)),s(l,h)}}function Cf(s,l,h,C,b,x,U,Y,Q,ce){var ue=l&D,ge=ue?U:n,Le=ue?n:U,ke=ue?x:n,We=ue?n:x;l|=ue?z:W,l&=~(ue?W:z),l&A||(l&=-4);var tt=[s,l,b,ke,ge,We,Le,Y,Q,ce],ze=h.apply(n,tt);return wc(s)&&Tf(ze,tt),ze.placeholder=C,Df(ze,s,l)}function vc(s){var l=Wt[s];return function(h,C){if(h=Vn(h),C=C==null?0:an(et(C),292),C&&T_(h)){var b=(pt(h)+"e").split("e"),x=l(b[0]+"e"+(+b[1]+C));return b=(pt(x)+"e").split("e"),+(b[0]+"e"+(+b[1]-C))}return l(h)}}var I0=ji&&1/Hs(new ji([,-0]))[1]==Ue?function(s){return new ji(s)}:Fc;function Of(s){return function(l){var h=ln(l);return h==Oe?Kl(l):h==Sn?Fm(l):Rm(l,s(l))}}function Lr(s,l,h,C,b,x,U,Y){var Q=l&w;if(!Q&&typeof s!="function")throw new Wn(a);var ce=C?C.length:0;if(ce||(l&=-97,C=b=n),U=U===n?U:zt(et(U),0),Y=Y===n?Y:et(Y),ce-=b?b.length:0,l&W){var ue=C,ge=b;C=b=n}var Le=Q?n:Cc(s),ke=[s,l,h,C,b,ue,ge,x,U,Y];if(Le&&U0(ke,Le),s=ke[0],l=ke[1],h=ke[2],C=ke[3],b=ke[4],Y=ke[9]=ke[9]===n?Q?0:s.length:zt(ke[9]-ce,0),!Y&&l&(D|M)&&(l&=-25),!l||l==I)var We=E0(s,l,h);else l==D||l==M?We=C0(s,l,Y):(l==z||l==(I|z))&&!b.length?We=O0(s,l,h,C):We=ca.apply(n,ke);var tt=Le?ef:Tf;return Df(tt(We,ke),s,l)}function If(s,l,h,C){return s===n||rr(s,Yi[h])&&!mt.call(C,h)?l:s}function bf(s,l,h,C,b,x){return Gt(s)&&Gt(l)&&(x.set(l,s),oa(s,l,n,bf,x),x.delete(l)),s}function b0(s){return Xo(s)?n:s}function wf(s,l,h,C,b,x){var U=h&E,Y=s.length,Q=l.length;if(Y!=Q&&!(U&&Q>Y))return!1;var ce=x.get(s),ue=x.get(l);if(ce&&ue)return ce==l&&ue==s;var ge=-1,Le=!0,ke=h&O?new hi:n;for(x.set(s,l),x.set(l,s);++ge<Y;){var We=s[ge],tt=l[ge];if(C)var ze=U?C(tt,We,ge,l,s,x):C(We,tt,ge,s,l,x);if(ze!==n){if(ze)continue;Le=!1;break}if(ke){if(!Hl(l,function(ot,lt){if(!Go(ke,lt)&&(We===ot||b(We,ot,h,C,x)))return ke.push(lt)})){Le=!1;break}}else if(!(We===tt||b(We,tt,h,C,x))){Le=!1;break}}return x.delete(s),x.delete(l),Le}function w0(s,l,h,C,b,x,U){switch(h){case Fi:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case ko:return!(s.byteLength!=l.byteLength||!x(new Ks(s),new Ks(l)));case Vt:case er:case Re:return rr(+s,+l);case cr:return s.name==l.name&&s.message==l.message;case ui:case di:return s==l+"";case Oe:var Y=Kl;case Sn:var Q=C&E;if(Y||(Y=Hs),s.size!=l.size&&!Q)return!1;var ce=U.get(s);if(ce)return ce==l;C|=O,U.set(s,l);var ue=wf(Y(s),Y(l),C,b,x,U);return U.delete(s),ue;case Gs:if(Po)return Po.call(s)==Po.call(l)}return!1}function y0(s,l,h,C,b,x){var U=h&E,Y=mc(s),Q=Y.length,ce=mc(l),ue=ce.length;if(Q!=ue&&!U)return!1;for(var ge=Q;ge--;){var Le=Y[ge];if(!(U?Le in l:mt.call(l,Le)))return!1}var ke=x.get(s),We=x.get(l);if(ke&&We)return ke==l&&We==s;var tt=!0;x.set(s,l),x.set(l,s);for(var ze=U;++ge<Q;){Le=Y[ge];var ot=s[Le],lt=l[Le];if(C)var Dn=U?C(lt,ot,Le,l,s,x):C(ot,lt,Le,s,l,x);if(!(Dn===n?ot===lt||b(ot,lt,h,C,x):Dn)){tt=!1;break}ze||(ze=Le=="constructor")}if(tt&&!ze){var fn=s.constructor,kn=l.constructor;fn!=kn&&"constructor"in s&&"constructor"in l&&!(typeof fn=="function"&&fn instanceof fn&&typeof kn=="function"&&kn instanceof kn)&&(tt=!1)}return x.delete(s),x.delete(l),tt}function Ar(s){return Lc(xf(s,n,Ff),s+"")}function mc(s){return W_(s,Xt,Ic)}function Ec(s){return W_(s,On,yf)}var Cc=Js?function(s){return Js.get(s)}:Fc;function fa(s){for(var l=s.name+"",h=Ki[l],C=mt.call(Ki,l)?h.length:0;C--;){var b=h[C],x=b.func;if(x==null||x==s)return b.name}return l}function Zi(s){var l=mt.call(L,"placeholder")?L:s;return l.placeholder}function Be(){var s=L.iteratee||Uc;return s=s===Uc?j_:s,arguments.length?s(arguments[0],arguments[1]):s}function ga(s,l){var h=s.__data__;return D0(l)?h[typeof l=="string"?"string":"hash"]:h.map}function Oc(s){for(var l=Xt(s),h=l.length;h--;){var C=l[h],b=s[C];l[h]=[C,b,Sf(b)]}return l}function mi(s,l){var h=Mm(s,l);return Y_(h)?h:n}function L0(s){var l=mt.call(s,fi),h=s[fi];try{s[fi]=n;var C=!0}catch{}var b=Ys.call(s);return C&&(l?s[fi]=h:delete s[fi]),b}var Ic=Xl?function(s){return s==null?[]:(s=It(s),Wr(Xl(s),function(l){return x_.call(s,l)}))}:Pc,yf=Xl?function(s){for(var l=[];s;)zr(l,Ic(s)),s=Vs(s);return l}:Pc,ln=dn;(ql&&ln(new ql(new ArrayBuffer(1)))!=Fi||Uo&&ln(new Uo)!=Oe||Zl&&ln(Zl.resolve())!=Ir||ji&&ln(new ji)!=Sn||$o&&ln(new $o)!=Do)&&(ln=function(s){var l=dn(s),h=l==yt?s.constructor:n,C=h?Ei(h):"";if(C)switch(C){case l1:return Fi;case c1:return Oe;case u1:return Ir;case d1:return Sn;case _1:return Do}return l});function A0(s,l,h){for(var C=-1,b=h.length;++C<b;){var x=h[C],U=x.size;switch(x.type){case"drop":s+=U;break;case"dropRight":l-=U;break;case"take":l=an(l,s+U);break;case"takeRight":s=zt(s,l-U);break}}return{start:s,end:l}}function S0(s){var l=s.match(kv);return l?l[1].split(Gv):[]}function Lf(s,l,h){l=Xr(l,s);for(var C=-1,b=l.length,x=!1;++C<b;){var U=_r(l[C]);if(!(x=s!=null&&h(s,U)))break;s=s[U]}return x||++C!=b?x:(b=s==null?0:s.length,!!b&&Oa(b)&&Sr(U,b)&&(Ze(s)||Ci(s)))}function N0(s){var l=s.length,h=new s.constructor(l);return l&&typeof s[0]=="string"&&mt.call(s,"index")&&(h.index=s.index,h.input=s.input),h}function Af(s){return typeof s.constructor=="function"&&!Ko(s)?Vi(Vs(s)):{}}function x0(s,l,h){var C=s.constructor;switch(l){case ko:return hc(s);case Vt:case er:return new C(+s);case Fi:return f0(s,h);case Ol:case Il:case bl:case wl:case yl:case Ll:case Al:case Sl:case Nl:return cf(s,h);case Oe:return new C;case Re:case di:return new C(s);case ui:return g0(s);case Sn:return new C;case Gs:return h0(s)}}function R0(s,l){var h=l.length;if(!h)return s;var C=h-1;return l[C]=(h>1?"& ":"")+l[C],l=l.join(h>2?", ":" "),s.replace(Dv,`{
/* [wrapped with `+l+`] */
`)}function T0(s){return Ze(s)||Ci(s)||!!(R_&&s&&s[R_])}function Sr(s,l){var h=typeof s;return l=l??xe,!!l&&(h=="number"||h!="symbol"&&zv.test(s))&&s>-1&&s%1==0&&s<l}function _n(s,l,h){if(!Gt(h))return!1;var C=typeof l;return(C=="number"?Cn(h)&&Sr(l,h.length):C=="string"&&l in h)?rr(h[l],s):!1}function bc(s,l){if(Ze(s))return!1;var h=typeof s;return h=="number"||h=="symbol"||h=="boolean"||s==null||Tn(s)?!0:Nv.test(s)||!Sv.test(s)||l!=null&&s in It(l)}function D0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function wc(s){var l=fa(s),h=L[l];if(typeof h!="function"||!(l in st.prototype))return!1;if(s===h)return!0;var C=Cc(h);return!!C&&s===C[0]}function k0(s){return!!A_&&A_ in s}var G0=Ws?Nr:Hc;function Ko(s){var l=s&&s.constructor,h=typeof l=="function"&&l.prototype||Yi;return s===h}function Sf(s){return s===s&&!Gt(s)}function Nf(s,l){return function(h){return h==null?!1:h[s]===l&&(l!==n||s in It(h))}}function M0(s){var l=Ea(s,function(C){return h.size===_&&h.clear(),C}),h=l.cache;return l}function U0(s,l){var h=s[1],C=l[1],b=h|C,x=b<(I|w|F),U=C==F&&h==D||C==F&&h==P&&s[7].length<=l[8]||C==(F|P)&&l[7].length<=l[8]&&h==D;if(!(x||U))return s;C&I&&(s[2]=l[2],b|=h&I?0:A);var Y=l[3];if(Y){var Q=s[3];s[3]=Q?df(Q,Y,l[4]):Y,s[4]=Q?Yr(s[3],p):l[4]}return Y=l[5],Y&&(Q=s[5],s[5]=Q?_f(Q,Y,l[6]):Y,s[6]=Q?Yr(s[5],p):l[6]),Y=l[7],Y&&(s[7]=Y),C&F&&(s[8]=s[8]==null?l[8]:an(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=b,s}function $0(s){var l=[];if(s!=null)for(var h in It(s))l.push(h);return l}function F0(s){return Ys.call(s)}function xf(s,l,h){return l=zt(l===n?s.length-1:l,0),function(){for(var C=arguments,b=-1,x=zt(C.length-l,0),U=te(x);++b<x;)U[b]=C[l+b];b=-1;for(var Y=te(l+1);++b<l;)Y[b]=C[b];return Y[l]=h(U),Nn(s,this,Y)}}function Rf(s,l){return l.length<2?s:vi(s,jn(l,0,-1))}function P0(s,l){for(var h=s.length,C=an(l.length,h),b=En(s);C--;){var x=l[C];s[C]=Sr(x,h)?b[x]:n}return s}function yc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var Tf=kf(ef),Vo=t1||function(s,l){return Jt.setTimeout(s,l)},Lc=kf(c0);function Df(s,l,h){var C=l+"";return Lc(s,R0(C,H0(S0(C),h)))}function kf(s){var l=0,h=0;return function(){var C=o1(),b=fe-(C-h);if(h=C,b>0){if(++l>=J)return arguments[0]}else l=0;return s.apply(n,arguments)}}function ha(s,l){var h=-1,C=s.length,b=C-1;for(l=l===n?C:l;++h<l;){var x=lc(h,b),U=s[x];s[x]=s[h],s[h]=U}return s.length=l,s}var Gf=M0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(xv,function(h,C,b,x){l.push(b?x.replace($v,"$1"):C||h)}),l});function _r(s){if(typeof s=="string"||Tn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Ei(s){if(s!=null){try{return zs.call(s)}catch{}try{return s+""}catch{}}return""}function H0(s,l){return Bn(sn,function(h){var C="_."+h[0];l&h[1]&&!Fs(s,C)&&s.push(C)}),s.sort()}function Mf(s){if(s instanceof st)return s.clone();var l=new zn(s.__wrapped__,s.__chain__);return l.__actions__=En(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function B0(s,l,h){(h?_n(s,l,h):l===n)?l=1:l=zt(et(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var b=0,x=0,U=te(Zs(C/l));b<C;)U[x++]=jn(s,b,b+=l);return U}function W0(s){for(var l=-1,h=s==null?0:s.length,C=0,b=[];++l<h;){var x=s[l];x&&(b[C++]=x)}return b}function z0(){var s=arguments.length;if(!s)return[];for(var l=te(s-1),h=arguments[0],C=s;C--;)l[C-1]=arguments[C];return zr(Ze(h)?En(h):[h],en(l,1))}var Y0=rt(function(s,l){return $t(s)?Bo(s,en(l,1,$t,!0)):[]}),j0=rt(function(s,l){var h=Kn(l);return $t(h)&&(h=n),$t(s)?Bo(s,en(l,1,$t,!0),Be(h,2)):[]}),K0=rt(function(s,l){var h=Kn(l);return $t(h)&&(h=n),$t(s)?Bo(s,en(l,1,$t,!0),n,h):[]});function V0(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:et(l),jn(s,l<0?0:l,C)):[]}function X0(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:et(l),l=C-l,jn(s,0,l<0?0:l)):[]}function q0(s,l){return s&&s.length?aa(s,Be(l,3),!0,!0):[]}function Z0(s,l){return s&&s.length?aa(s,Be(l,3),!0):[]}function Q0(s,l,h,C){var b=s==null?0:s.length;return b?(h&&typeof h!="number"&&_n(s,l,h)&&(h=0,C=b),z1(s,l,h,C)):[]}function Uf(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var b=h==null?0:et(h);return b<0&&(b=zt(C+b,0)),Ps(s,Be(l,3),b)}function $f(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var b=C-1;return h!==n&&(b=et(h),b=h<0?zt(C+b,0):an(b,C-1)),Ps(s,Be(l,3),b,!0)}function Ff(s){var l=s==null?0:s.length;return l?en(s,1):[]}function J0(s){var l=s==null?0:s.length;return l?en(s,Ue):[]}function eE(s,l){var h=s==null?0:s.length;return h?(l=l===n?1:et(l),en(s,l)):[]}function tE(s){for(var l=-1,h=s==null?0:s.length,C={};++l<h;){var b=s[l];C[b[0]]=b[1]}return C}function Pf(s){return s&&s.length?s[0]:n}function nE(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var b=h==null?0:et(h);return b<0&&(b=zt(C+b,0)),Hi(s,l,b)}function rE(s){var l=s==null?0:s.length;return l?jn(s,0,-1):[]}var iE=rt(function(s){var l=Dt(s,fc);return l.length&&l[0]===s[0]?rc(l):[]}),oE=rt(function(s){var l=Kn(s),h=Dt(s,fc);return l===Kn(h)?l=n:h.pop(),h.length&&h[0]===s[0]?rc(h,Be(l,2)):[]}),sE=rt(function(s){var l=Kn(s),h=Dt(s,fc);return l=typeof l=="function"?l:n,l&&h.pop(),h.length&&h[0]===s[0]?rc(h,n,l):[]});function aE(s,l){return s==null?"":r1.call(s,l)}function Kn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function lE(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var b=C;return h!==n&&(b=et(h),b=b<0?zt(C+b,0):an(b,C-1)),l===l?Hm(s,l,b):Ps(s,E_,b,!0)}function cE(s,l){return s&&s.length?q_(s,et(l)):n}var uE=rt(Hf);function Hf(s,l){return s&&s.length&&l&&l.length?ac(s,l):s}function dE(s,l,h){return s&&s.length&&l&&l.length?ac(s,l,Be(h,2)):s}function _E(s,l,h){return s&&s.length&&l&&l.length?ac(s,l,n,h):s}var fE=Ar(function(s,l){var h=s==null?0:s.length,C=Jl(s,l);return J_(s,Dt(l,function(b){return Sr(b,h)?+b:b}).sort(uf)),C});function gE(s,l){var h=[];if(!(s&&s.length))return h;var C=-1,b=[],x=s.length;for(l=Be(l,3);++C<x;){var U=s[C];l(U,C,s)&&(h.push(U),b.push(C))}return J_(s,b),h}function Ac(s){return s==null?s:a1.call(s)}function hE(s,l,h){var C=s==null?0:s.length;return C?(h&&typeof h!="number"&&_n(s,l,h)?(l=0,h=C):(l=l==null?0:et(l),h=h===n?C:et(h)),jn(s,l,h)):[]}function pE(s,l){return sa(s,l)}function vE(s,l,h){return uc(s,l,Be(h,2))}function mE(s,l){var h=s==null?0:s.length;if(h){var C=sa(s,l);if(C<h&&rr(s[C],l))return C}return-1}function EE(s,l){return sa(s,l,!0)}function CE(s,l,h){return uc(s,l,Be(h,2),!0)}function OE(s,l){var h=s==null?0:s.length;if(h){var C=sa(s,l,!0)-1;if(rr(s[C],l))return C}return-1}function IE(s){return s&&s.length?tf(s):[]}function bE(s,l){return s&&s.length?tf(s,Be(l,2)):[]}function wE(s){var l=s==null?0:s.length;return l?jn(s,1,l):[]}function yE(s,l,h){return s&&s.length?(l=h||l===n?1:et(l),jn(s,0,l<0?0:l)):[]}function LE(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:et(l),l=C-l,jn(s,l<0?0:l,C)):[]}function AE(s,l){return s&&s.length?aa(s,Be(l,3),!1,!0):[]}function SE(s,l){return s&&s.length?aa(s,Be(l,3)):[]}var NE=rt(function(s){return Vr(en(s,1,$t,!0))}),xE=rt(function(s){var l=Kn(s);return $t(l)&&(l=n),Vr(en(s,1,$t,!0),Be(l,2))}),RE=rt(function(s){var l=Kn(s);return l=typeof l=="function"?l:n,Vr(en(s,1,$t,!0),n,l)});function TE(s){return s&&s.length?Vr(s):[]}function DE(s,l){return s&&s.length?Vr(s,Be(l,2)):[]}function kE(s,l){return l=typeof l=="function"?l:n,s&&s.length?Vr(s,n,l):[]}function Sc(s){if(!(s&&s.length))return[];var l=0;return s=Wr(s,function(h){if($t(h))return l=zt(h.length,l),!0}),Yl(l,function(h){return Dt(s,Bl(h))})}function Bf(s,l){if(!(s&&s.length))return[];var h=Sc(s);return l==null?h:Dt(h,function(C){return Nn(l,n,C)})}var GE=rt(function(s,l){return $t(s)?Bo(s,l):[]}),ME=rt(function(s){return _c(Wr(s,$t))}),UE=rt(function(s){var l=Kn(s);return $t(l)&&(l=n),_c(Wr(s,$t),Be(l,2))}),$E=rt(function(s){var l=Kn(s);return l=typeof l=="function"?l:n,_c(Wr(s,$t),n,l)}),FE=rt(Sc);function PE(s,l){return sf(s||[],l||[],Ho)}function HE(s,l){return sf(s||[],l||[],Yo)}var BE=rt(function(s){var l=s.length,h=l>1?s[l-1]:n;return h=typeof h=="function"?(s.pop(),h):n,Bf(s,h)});function Wf(s){var l=L(s);return l.__chain__=!0,l}function WE(s,l){return l(s),s}function pa(s,l){return l(s)}var zE=Ar(function(s){var l=s.length,h=l?s[0]:0,C=this.__wrapped__,b=function(x){return Jl(x,s)};return l>1||this.__actions__.length||!(C instanceof st)||!Sr(h)?this.thru(b):(C=C.slice(h,+h+(l?1:0)),C.__actions__.push({func:pa,args:[b],thisArg:n}),new zn(C,this.__chain__).thru(function(x){return l&&!x.length&&x.push(n),x}))});function YE(){return Wf(this)}function jE(){return new zn(this.value(),this.__chain__)}function KE(){this.__values__===n&&(this.__values__=rg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function VE(){return this}function XE(s){for(var l,h=this;h instanceof ta;){var C=Mf(h);C.__index__=0,C.__values__=n,l?b.__wrapped__=C:l=C;var b=C;h=h.__wrapped__}return b.__wrapped__=s,l}function qE(){var s=this.__wrapped__;if(s instanceof st){var l=s;return this.__actions__.length&&(l=new st(this)),l=l.reverse(),l.__actions__.push({func:pa,args:[Ac],thisArg:n}),new zn(l,this.__chain__)}return this.thru(Ac)}function ZE(){return of(this.__wrapped__,this.__actions__)}var QE=la(function(s,l,h){mt.call(s,h)?++s[h]:yr(s,h,1)});function JE(s,l,h){var C=Ze(s)?v_:W1;return h&&_n(s,l,h)&&(l=n),C(s,Be(l,3))}function eC(s,l){var h=Ze(s)?Wr:H_;return h(s,Be(l,3))}var tC=pf(Uf),nC=pf($f);function rC(s,l){return en(va(s,l),1)}function iC(s,l){return en(va(s,l),Ue)}function oC(s,l,h){return h=h===n?1:et(h),en(va(s,l),h)}function zf(s,l){var h=Ze(s)?Bn:Kr;return h(s,Be(l,3))}function Yf(s,l){var h=Ze(s)?wm:P_;return h(s,Be(l,3))}var sC=la(function(s,l,h){mt.call(s,h)?s[h].push(l):yr(s,h,[l])});function aC(s,l,h,C){s=Cn(s)?s:Ji(s),h=h&&!C?et(h):0;var b=s.length;return h<0&&(h=zt(b+h,0)),Ia(s)?h<=b&&s.indexOf(l,h)>-1:!!b&&Hi(s,l,h)>-1}var lC=rt(function(s,l,h){var C=-1,b=typeof l=="function",x=Cn(s)?te(s.length):[];return Kr(s,function(U){x[++C]=b?Nn(l,U,h):Wo(U,l,h)}),x}),cC=la(function(s,l,h){yr(s,h,l)});function va(s,l){var h=Ze(s)?Dt:K_;return h(s,Be(l,3))}function uC(s,l,h,C){return s==null?[]:(Ze(l)||(l=l==null?[]:[l]),h=C?n:h,Ze(h)||(h=h==null?[]:[h]),Z_(s,l,h))}var dC=la(function(s,l,h){s[h?0:1].push(l)},function(){return[[],[]]});function _C(s,l,h){var C=Ze(s)?Pl:O_,b=arguments.length<3;return C(s,Be(l,4),h,b,Kr)}function fC(s,l,h){var C=Ze(s)?ym:O_,b=arguments.length<3;return C(s,Be(l,4),h,b,P_)}function gC(s,l){var h=Ze(s)?Wr:H_;return h(s,Ca(Be(l,3)))}function hC(s){var l=Ze(s)?M_:a0;return l(s)}function pC(s,l,h){(h?_n(s,l,h):l===n)?l=1:l=et(l);var C=Ze(s)?$1:l0;return C(s,l)}function vC(s){var l=Ze(s)?F1:u0;return l(s)}function mC(s){if(s==null)return 0;if(Cn(s))return Ia(s)?Wi(s):s.length;var l=ln(s);return l==Oe||l==Sn?s.size:oc(s).length}function EC(s,l,h){var C=Ze(s)?Hl:d0;return h&&_n(s,l,h)&&(l=n),C(s,Be(l,3))}var CC=rt(function(s,l){if(s==null)return[];var h=l.length;return h>1&&_n(s,l[0],l[1])?l=[]:h>2&&_n(l[0],l[1],l[2])&&(l=[l[0]]),Z_(s,en(l,1),[])}),ma=e1||function(){return Jt.Date.now()};function OC(s,l){if(typeof l!="function")throw new Wn(a);return s=et(s),function(){if(--s<1)return l.apply(this,arguments)}}function jf(s,l,h){return l=h?n:l,l=s&&l==null?s.length:l,Lr(s,F,n,n,n,n,l)}function Kf(s,l){var h;if(typeof l!="function")throw new Wn(a);return s=et(s),function(){return--s>0&&(h=l.apply(this,arguments)),s<=1&&(l=n),h}}var Nc=rt(function(s,l,h){var C=I;if(h.length){var b=Yr(h,Zi(Nc));C|=z}return Lr(s,C,l,h,b)}),Vf=rt(function(s,l,h){var C=I|w;if(h.length){var b=Yr(h,Zi(Vf));C|=z}return Lr(l,C,s,h,b)});function Xf(s,l,h){l=h?n:l;var C=Lr(s,D,n,n,n,n,n,l);return C.placeholder=Xf.placeholder,C}function qf(s,l,h){l=h?n:l;var C=Lr(s,M,n,n,n,n,n,l);return C.placeholder=qf.placeholder,C}function Zf(s,l,h){var C,b,x,U,Y,Q,ce=0,ue=!1,ge=!1,Le=!0;if(typeof s!="function")throw new Wn(a);l=Vn(l)||0,Gt(h)&&(ue=!!h.leading,ge="maxWait"in h,x=ge?zt(Vn(h.maxWait)||0,l):x,Le="trailing"in h?!!h.trailing:Le);function ke(Ft){var ir=C,Rr=b;return C=b=n,ce=Ft,U=s.apply(Rr,ir),U}function We(Ft){return ce=Ft,Y=Vo(ot,l),ue?ke(Ft):U}function tt(Ft){var ir=Ft-Q,Rr=Ft-ce,pg=l-ir;return ge?an(pg,x-Rr):pg}function ze(Ft){var ir=Ft-Q,Rr=Ft-ce;return Q===n||ir>=l||ir<0||ge&&Rr>=x}function ot(){var Ft=ma();if(ze(Ft))return lt(Ft);Y=Vo(ot,tt(Ft))}function lt(Ft){return Y=n,Le&&C?ke(Ft):(C=b=n,U)}function Dn(){Y!==n&&af(Y),ce=0,C=Q=b=Y=n}function fn(){return Y===n?U:lt(ma())}function kn(){var Ft=ma(),ir=ze(Ft);if(C=arguments,b=this,Q=Ft,ir){if(Y===n)return We(Q);if(ge)return af(Y),Y=Vo(ot,l),ke(Q)}return Y===n&&(Y=Vo(ot,l)),U}return kn.cancel=Dn,kn.flush=fn,kn}var IC=rt(function(s,l){return F_(s,1,l)}),bC=rt(function(s,l,h){return F_(s,Vn(l)||0,h)});function wC(s){return Lr(s,X)}function Ea(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Wn(a);var h=function(){var C=arguments,b=l?l.apply(this,C):C[0],x=h.cache;if(x.has(b))return x.get(b);var U=s.apply(this,C);return h.cache=x.set(b,U)||x,U};return h.cache=new(Ea.Cache||wr),h}Ea.Cache=wr;function Ca(s){if(typeof s!="function")throw new Wn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function yC(s){return Kf(2,s)}var LC=_0(function(s,l){l=l.length==1&&Ze(l[0])?Dt(l[0],xn(Be())):Dt(en(l,1),xn(Be()));var h=l.length;return rt(function(C){for(var b=-1,x=an(C.length,h);++b<x;)C[b]=l[b].call(this,C[b]);return Nn(s,this,C)})}),xc=rt(function(s,l){var h=Yr(l,Zi(xc));return Lr(s,z,n,l,h)}),Qf=rt(function(s,l){var h=Yr(l,Zi(Qf));return Lr(s,W,n,l,h)}),AC=Ar(function(s,l){return Lr(s,P,n,n,n,l)});function SC(s,l){if(typeof s!="function")throw new Wn(a);return l=l===n?l:et(l),rt(s,l)}function NC(s,l){if(typeof s!="function")throw new Wn(a);return l=l==null?0:zt(et(l),0),rt(function(h){var C=h[l],b=qr(h,0,l);return C&&zr(b,C),Nn(s,this,b)})}function xC(s,l,h){var C=!0,b=!0;if(typeof s!="function")throw new Wn(a);return Gt(h)&&(C="leading"in h?!!h.leading:C,b="trailing"in h?!!h.trailing:b),Zf(s,l,{leading:C,maxWait:l,trailing:b})}function RC(s){return jf(s,1)}function TC(s,l){return xc(gc(l),s)}function DC(){if(!arguments.length)return[];var s=arguments[0];return Ze(s)?s:[s]}function kC(s){return Yn(s,m)}function GC(s,l){return l=typeof l=="function"?l:n,Yn(s,m,l)}function MC(s){return Yn(s,g|m)}function UC(s,l){return l=typeof l=="function"?l:n,Yn(s,g|m,l)}function $C(s,l){return l==null||$_(s,l,Xt(l))}function rr(s,l){return s===l||s!==s&&l!==l}var FC=_a(nc),PC=_a(function(s,l){return s>=l}),Ci=z_(function(){return arguments}())?z_:function(s){return Ut(s)&&mt.call(s,"callee")&&!x_.call(s,"callee")},Ze=te.isArray,HC=d_?xn(d_):X1;function Cn(s){return s!=null&&Oa(s.length)&&!Nr(s)}function $t(s){return Ut(s)&&Cn(s)}function BC(s){return s===!0||s===!1||Ut(s)&&dn(s)==Vt}var Zr=n1||Hc,WC=__?xn(__):q1;function zC(s){return Ut(s)&&s.nodeType===1&&!Xo(s)}function YC(s){if(s==null)return!0;if(Cn(s)&&(Ze(s)||typeof s=="string"||typeof s.splice=="function"||Zr(s)||Qi(s)||Ci(s)))return!s.length;var l=ln(s);if(l==Oe||l==Sn)return!s.size;if(Ko(s))return!oc(s).length;for(var h in s)if(mt.call(s,h))return!1;return!0}function jC(s,l){return zo(s,l)}function KC(s,l,h){h=typeof h=="function"?h:n;var C=h?h(s,l):n;return C===n?zo(s,l,n,h):!!C}function Rc(s){if(!Ut(s))return!1;var l=dn(s);return l==cr||l==$i||typeof s.message=="string"&&typeof s.name=="string"&&!Xo(s)}function VC(s){return typeof s=="number"&&T_(s)}function Nr(s){if(!Gt(s))return!1;var l=dn(s);return l==Or||l==Fe||l==Cr||l==Cl}function Jf(s){return typeof s=="number"&&s==et(s)}function Oa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=xe}function Gt(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Ut(s){return s!=null&&typeof s=="object"}var eg=f_?xn(f_):Q1;function XC(s,l){return s===l||ic(s,l,Oc(l))}function qC(s,l,h){return h=typeof h=="function"?h:n,ic(s,l,Oc(l),h)}function ZC(s){return tg(s)&&s!=+s}function QC(s){if(G0(s))throw new Xe(o);return Y_(s)}function JC(s){return s===null}function eO(s){return s==null}function tg(s){return typeof s=="number"||Ut(s)&&dn(s)==Re}function Xo(s){if(!Ut(s)||dn(s)!=yt)return!1;var l=Vs(s);if(l===null)return!0;var h=mt.call(l,"constructor")&&l.constructor;return typeof h=="function"&&h instanceof h&&zs.call(h)==qm}var Tc=g_?xn(g_):J1;function tO(s){return Jf(s)&&s>=-9007199254740991&&s<=xe}var ng=h_?xn(h_):e0;function Ia(s){return typeof s=="string"||!Ze(s)&&Ut(s)&&dn(s)==di}function Tn(s){return typeof s=="symbol"||Ut(s)&&dn(s)==Gs}var Qi=p_?xn(p_):t0;function nO(s){return s===n}function rO(s){return Ut(s)&&ln(s)==Do}function iO(s){return Ut(s)&&dn(s)==Cv}var oO=_a(sc),sO=_a(function(s,l){return s<=l});function rg(s){if(!s)return[];if(Cn(s))return Ia(s)?tr(s):En(s);if(Mo&&s[Mo])return $m(s[Mo]());var l=ln(s),h=l==Oe?Kl:l==Sn?Hs:Ji;return h(s)}function xr(s){if(!s)return s===0?s:0;if(s=Vn(s),s===Ue||s===-1/0){var l=s<0?-1:1;return l*me}return s===s?s:0}function et(s){var l=xr(s),h=l%1;return l===l?h?l-h:l:0}function ig(s){return s?pi(et(s),0,$e):0}function Vn(s){if(typeof s=="number")return s;if(Tn(s))return nt;if(Gt(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Gt(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=I_(s);var h=Hv.test(s);return h||Wv.test(s)?Om(s.slice(2),h?2:8):Pv.test(s)?nt:+s}function og(s){return dr(s,On(s))}function aO(s){return s?pi(et(s),-9007199254740991,xe):s===0?s:0}function pt(s){return s==null?"":Rn(s)}var lO=Xi(function(s,l){if(Ko(l)||Cn(l)){dr(l,Xt(l),s);return}for(var h in l)mt.call(l,h)&&Ho(s,h,l[h])}),sg=Xi(function(s,l){dr(l,On(l),s)}),ba=Xi(function(s,l,h,C){dr(l,On(l),s,C)}),cO=Xi(function(s,l,h,C){dr(l,Xt(l),s,C)}),uO=Ar(Jl);function dO(s,l){var h=Vi(s);return l==null?h:U_(h,l)}var _O=rt(function(s,l){s=It(s);var h=-1,C=l.length,b=C>2?l[2]:n;for(b&&_n(l[0],l[1],b)&&(C=1);++h<C;)for(var x=l[h],U=On(x),Y=-1,Q=U.length;++Y<Q;){var ce=U[Y],ue=s[ce];(ue===n||rr(ue,Yi[ce])&&!mt.call(s,ce))&&(s[ce]=x[ce])}return s}),fO=rt(function(s){return s.push(n,bf),Nn(ag,n,s)});function gO(s,l){return m_(s,Be(l,3),ur)}function hO(s,l){return m_(s,Be(l,3),tc)}function pO(s,l){return s==null?s:ec(s,Be(l,3),On)}function vO(s,l){return s==null?s:B_(s,Be(l,3),On)}function mO(s,l){return s&&ur(s,Be(l,3))}function EO(s,l){return s&&tc(s,Be(l,3))}function CO(s){return s==null?[]:ia(s,Xt(s))}function OO(s){return s==null?[]:ia(s,On(s))}function Dc(s,l,h){var C=s==null?n:vi(s,l);return C===n?h:C}function IO(s,l){return s!=null&&Lf(s,l,Y1)}function kc(s,l){return s!=null&&Lf(s,l,j1)}var bO=mf(function(s,l,h){l!=null&&typeof l.toString!="function"&&(l=Ys.call(l)),s[l]=h},Mc(In)),wO=mf(function(s,l,h){l!=null&&typeof l.toString!="function"&&(l=Ys.call(l)),mt.call(s,l)?s[l].push(h):s[l]=[h]},Be),yO=rt(Wo);function Xt(s){return Cn(s)?G_(s):oc(s)}function On(s){return Cn(s)?G_(s,!0):n0(s)}function LO(s,l){var h={};return l=Be(l,3),ur(s,function(C,b,x){yr(h,l(C,b,x),C)}),h}function AO(s,l){var h={};return l=Be(l,3),ur(s,function(C,b,x){yr(h,b,l(C,b,x))}),h}var SO=Xi(function(s,l,h){oa(s,l,h)}),ag=Xi(function(s,l,h,C){oa(s,l,h,C)}),NO=Ar(function(s,l){var h={};if(s==null)return h;var C=!1;l=Dt(l,function(x){return x=Xr(x,s),C||(C=x.length>1),x}),dr(s,Ec(s),h),C&&(h=Yn(h,g|v|m,b0));for(var b=l.length;b--;)dc(h,l[b]);return h});function xO(s,l){return lg(s,Ca(Be(l)))}var RO=Ar(function(s,l){return s==null?{}:i0(s,l)});function lg(s,l){if(s==null)return{};var h=Dt(Ec(s),function(C){return[C]});return l=Be(l),Q_(s,h,function(C,b){return l(C,b[0])})}function TO(s,l,h){l=Xr(l,s);var C=-1,b=l.length;for(b||(b=1,s=n);++C<b;){var x=s==null?n:s[_r(l[C])];x===n&&(C=b,x=h),s=Nr(x)?x.call(s):x}return s}function DO(s,l,h){return s==null?s:Yo(s,l,h)}function kO(s,l,h,C){return C=typeof C=="function"?C:n,s==null?s:Yo(s,l,h,C)}var cg=Of(Xt),ug=Of(On);function GO(s,l,h){var C=Ze(s),b=C||Zr(s)||Qi(s);if(l=Be(l,4),h==null){var x=s&&s.constructor;b?h=C?new x:[]:Gt(s)?h=Nr(x)?Vi(Vs(s)):{}:h={}}return(b?Bn:ur)(s,function(U,Y,Q){return l(h,U,Y,Q)}),h}function MO(s,l){return s==null?!0:dc(s,l)}function UO(s,l,h){return s==null?s:rf(s,l,gc(h))}function $O(s,l,h,C){return C=typeof C=="function"?C:n,s==null?s:rf(s,l,gc(h),C)}function Ji(s){return s==null?[]:jl(s,Xt(s))}function FO(s){return s==null?[]:jl(s,On(s))}function PO(s,l,h){return h===n&&(h=l,l=n),h!==n&&(h=Vn(h),h=h===h?h:0),l!==n&&(l=Vn(l),l=l===l?l:0),pi(Vn(s),l,h)}function HO(s,l,h){return l=xr(l),h===n?(h=l,l=0):h=xr(h),s=Vn(s),K1(s,l,h)}function BO(s,l,h){if(h&&typeof h!="boolean"&&_n(s,l,h)&&(l=h=n),h===n&&(typeof l=="boolean"?(h=l,l=n):typeof s=="boolean"&&(h=s,s=n)),s===n&&l===n?(s=0,l=1):(s=xr(s),l===n?(l=s,s=0):l=xr(l)),s>l){var C=s;s=l,l=C}if(h||s%1||l%1){var b=D_();return an(s+b*(l-s+Cm("1e-"+((b+"").length-1))),l)}return lc(s,l)}var WO=qi(function(s,l,h){return l=l.toLowerCase(),s+(h?dg(l):l)});function dg(s){return Gc(pt(s).toLowerCase())}function _g(s){return s=pt(s),s&&s.replace(Yv,Dm).replace(um,"")}function zO(s,l,h){s=pt(s),l=Rn(l);var C=s.length;h=h===n?C:pi(et(h),0,C);var b=h;return h-=l.length,h>=0&&s.slice(h,b)==l}function YO(s){return s=pt(s),s&&yv.test(s)?s.replace(Bd,km):s}function jO(s){return s=pt(s),s&&Rv.test(s)?s.replace(xl,"\\$&"):s}var KO=qi(function(s,l,h){return s+(h?"-":"")+l.toLowerCase()}),VO=qi(function(s,l,h){return s+(h?" ":"")+l.toLowerCase()}),XO=hf("toLowerCase");function qO(s,l,h){s=pt(s),l=et(l);var C=l?Wi(s):0;if(!l||C>=l)return s;var b=(l-C)/2;return da(Qs(b),h)+s+da(Zs(b),h)}function ZO(s,l,h){s=pt(s),l=et(l);var C=l?Wi(s):0;return l&&C<l?s+da(l-C,h):s}function QO(s,l,h){s=pt(s),l=et(l);var C=l?Wi(s):0;return l&&C<l?da(l-C,h)+s:s}function JO(s,l,h){return h||l==null?l=0:l&&(l=+l),s1(pt(s).replace(Rl,""),l||0)}function eI(s,l,h){return(h?_n(s,l,h):l===n)?l=1:l=et(l),cc(pt(s),l)}function tI(){var s=arguments,l=pt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var nI=qi(function(s,l,h){return s+(h?"_":"")+l.toLowerCase()});function rI(s,l,h){return h&&typeof h!="number"&&_n(s,l,h)&&(l=h=n),h=h===n?$e:h>>>0,h?(s=pt(s),s&&(typeof l=="string"||l!=null&&!Tc(l))&&(l=Rn(l),!l&&Bi(s))?qr(tr(s),0,h):s.split(l,h)):[]}var iI=qi(function(s,l,h){return s+(h?" ":"")+Gc(l)});function oI(s,l,h){return s=pt(s),h=h==null?0:pi(et(h),0,s.length),l=Rn(l),s.slice(h,h+l.length)==l}function sI(s,l,h){var C=L.templateSettings;h&&_n(s,l,h)&&(l=n),s=pt(s),l=ba({},l,C,If);var b=ba({},l.imports,C.imports,If),x=Xt(b),U=jl(b,x),Y,Q,ce=0,ue=l.interpolate||Ms,ge="__p += '",Le=Vl((l.escape||Ms).source+"|"+ue.source+"|"+(ue===Wd?Fv:Ms).source+"|"+(l.evaluate||Ms).source+"|$","g"),ke="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hm+"]")+`
`;s.replace(Le,function(ze,ot,lt,Dn,fn,kn){return lt||(lt=Dn),ge+=s.slice(ce,kn).replace(jv,Gm),ot&&(Y=!0,ge+=`' +
__e(`+ot+`) +
'`),fn&&(Q=!0,ge+=`';
`+fn+`;
__p += '`),lt&&(ge+=`' +
((__t = (`+lt+`)) == null ? '' : __t) +
'`),ce=kn+ze.length,ze}),ge+=`';
`;var We=mt.call(l,"variable")&&l.variable;if(!We)ge=`with (obj) {
`+ge+`
}
`;else if(Uv.test(We))throw new Xe(c);ge=(Q?ge.replace(Ov,""):ge).replace(Iv,"$1").replace(bv,"$1;"),ge="function("+(We||"obj")+`) {
`+(We?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(Y?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var tt=gg(function(){return ht(x,ke+"return "+ge).apply(n,U)});if(tt.source=ge,Rc(tt))throw tt;return tt}function aI(s){return pt(s).toLowerCase()}function lI(s){return pt(s).toUpperCase()}function cI(s,l,h){if(s=pt(s),s&&(h||l===n))return I_(s);if(!s||!(l=Rn(l)))return s;var C=tr(s),b=tr(l),x=b_(C,b),U=w_(C,b)+1;return qr(C,x,U).join("")}function uI(s,l,h){if(s=pt(s),s&&(h||l===n))return s.slice(0,L_(s)+1);if(!s||!(l=Rn(l)))return s;var C=tr(s),b=w_(C,tr(l))+1;return qr(C,0,b).join("")}function dI(s,l,h){if(s=pt(s),s&&(h||l===n))return s.replace(Rl,"");if(!s||!(l=Rn(l)))return s;var C=tr(s),b=b_(C,tr(l));return qr(C,b).join("")}function _I(s,l){var h=re,C=q;if(Gt(l)){var b="separator"in l?l.separator:b;h="length"in l?et(l.length):h,C="omission"in l?Rn(l.omission):C}s=pt(s);var x=s.length;if(Bi(s)){var U=tr(s);x=U.length}if(h>=x)return s;var Y=h-Wi(C);if(Y<1)return C;var Q=U?qr(U,0,Y).join(""):s.slice(0,Y);if(b===n)return Q+C;if(U&&(Y+=Q.length-Y),Tc(b)){if(s.slice(Y).search(b)){var ce,ue=Q;for(b.global||(b=Vl(b.source,pt(zd.exec(b))+"g")),b.lastIndex=0;ce=b.exec(ue);)var ge=ce.index;Q=Q.slice(0,ge===n?Y:ge)}}else if(s.indexOf(Rn(b),Y)!=Y){var Le=Q.lastIndexOf(b);Le>-1&&(Q=Q.slice(0,Le))}return Q+C}function fI(s){return s=pt(s),s&&wv.test(s)?s.replace(Hd,Bm):s}var gI=qi(function(s,l,h){return s+(h?" ":"")+l.toUpperCase()}),Gc=hf("toUpperCase");function fg(s,l,h){return s=pt(s),l=h?n:l,l===n?Um(s)?Ym(s):Sm(s):s.match(l)||[]}var gg=rt(function(s,l){try{return Nn(s,n,l)}catch(h){return Rc(h)?h:new Xe(h)}}),hI=Ar(function(s,l){return Bn(l,function(h){h=_r(h),yr(s,h,Nc(s[h],s))}),s});function pI(s){var l=s==null?0:s.length,h=Be();return s=l?Dt(s,function(C){if(typeof C[1]!="function")throw new Wn(a);return[h(C[0]),C[1]]}):[],rt(function(C){for(var b=-1;++b<l;){var x=s[b];if(Nn(x[0],this,C))return Nn(x[1],this,C)}})}function vI(s){return B1(Yn(s,g))}function Mc(s){return function(){return s}}function mI(s,l){return s==null||s!==s?l:s}var EI=vf(),CI=vf(!0);function In(s){return s}function Uc(s){return j_(typeof s=="function"?s:Yn(s,g))}function OI(s){return V_(Yn(s,g))}function II(s,l){return X_(s,Yn(l,g))}var bI=rt(function(s,l){return function(h){return Wo(h,s,l)}}),wI=rt(function(s,l){return function(h){return Wo(s,h,l)}});function $c(s,l,h){var C=Xt(l),b=ia(l,C);h==null&&!(Gt(l)&&(b.length||!C.length))&&(h=l,l=s,s=this,b=ia(l,Xt(l)));var x=!(Gt(h)&&"chain"in h)||!!h.chain,U=Nr(s);return Bn(b,function(Y){var Q=l[Y];s[Y]=Q,U&&(s.prototype[Y]=function(){var ce=this.__chain__;if(x||ce){var ue=s(this.__wrapped__),ge=ue.__actions__=En(this.__actions__);return ge.push({func:Q,args:arguments,thisArg:s}),ue.__chain__=ce,ue}return Q.apply(s,zr([this.value()],arguments))})}),s}function yI(){return Jt._===this&&(Jt._=Zm),this}function Fc(){}function LI(s){return s=et(s),rt(function(l){return q_(l,s)})}var AI=pc(Dt),SI=pc(v_),NI=pc(Hl);function hg(s){return bc(s)?Bl(_r(s)):o0(s)}function xI(s){return function(l){return s==null?n:vi(s,l)}}var RI=Ef(),TI=Ef(!0);function Pc(){return[]}function Hc(){return!1}function DI(){return{}}function kI(){return""}function GI(){return!0}function MI(s,l){if(s=et(s),s<1||s>xe)return[];var h=$e,C=an(s,$e);l=Be(l),s-=$e;for(var b=Yl(C,l);++h<s;)l(h);return b}function UI(s){return Ze(s)?Dt(s,_r):Tn(s)?[s]:En(Gf(pt(s)))}function $I(s){var l=++Xm;return pt(s)+l}var FI=ua(function(s,l){return s+l},0),PI=vc("ceil"),HI=ua(function(s,l){return s/l},1),BI=vc("floor");function WI(s){return s&&s.length?ra(s,In,nc):n}function zI(s,l){return s&&s.length?ra(s,Be(l,2),nc):n}function YI(s){return C_(s,In)}function jI(s,l){return C_(s,Be(l,2))}function KI(s){return s&&s.length?ra(s,In,sc):n}function VI(s,l){return s&&s.length?ra(s,Be(l,2),sc):n}var XI=ua(function(s,l){return s*l},1),qI=vc("round"),ZI=ua(function(s,l){return s-l},0);function QI(s){return s&&s.length?zl(s,In):0}function JI(s,l){return s&&s.length?zl(s,Be(l,2)):0}return L.after=OC,L.ary=jf,L.assign=lO,L.assignIn=sg,L.assignInWith=ba,L.assignWith=cO,L.at=uO,L.before=Kf,L.bind=Nc,L.bindAll=hI,L.bindKey=Vf,L.castArray=DC,L.chain=Wf,L.chunk=B0,L.compact=W0,L.concat=z0,L.cond=pI,L.conforms=vI,L.constant=Mc,L.countBy=QE,L.create=dO,L.curry=Xf,L.curryRight=qf,L.debounce=Zf,L.defaults=_O,L.defaultsDeep=fO,L.defer=IC,L.delay=bC,L.difference=Y0,L.differenceBy=j0,L.differenceWith=K0,L.drop=V0,L.dropRight=X0,L.dropRightWhile=q0,L.dropWhile=Z0,L.fill=Q0,L.filter=eC,L.flatMap=rC,L.flatMapDeep=iC,L.flatMapDepth=oC,L.flatten=Ff,L.flattenDeep=J0,L.flattenDepth=eE,L.flip=wC,L.flow=EI,L.flowRight=CI,L.fromPairs=tE,L.functions=CO,L.functionsIn=OO,L.groupBy=sC,L.initial=rE,L.intersection=iE,L.intersectionBy=oE,L.intersectionWith=sE,L.invert=bO,L.invertBy=wO,L.invokeMap=lC,L.iteratee=Uc,L.keyBy=cC,L.keys=Xt,L.keysIn=On,L.map=va,L.mapKeys=LO,L.mapValues=AO,L.matches=OI,L.matchesProperty=II,L.memoize=Ea,L.merge=SO,L.mergeWith=ag,L.method=bI,L.methodOf=wI,L.mixin=$c,L.negate=Ca,L.nthArg=LI,L.omit=NO,L.omitBy=xO,L.once=yC,L.orderBy=uC,L.over=AI,L.overArgs=LC,L.overEvery=SI,L.overSome=NI,L.partial=xc,L.partialRight=Qf,L.partition=dC,L.pick=RO,L.pickBy=lg,L.property=hg,L.propertyOf=xI,L.pull=uE,L.pullAll=Hf,L.pullAllBy=dE,L.pullAllWith=_E,L.pullAt=fE,L.range=RI,L.rangeRight=TI,L.rearg=AC,L.reject=gC,L.remove=gE,L.rest=SC,L.reverse=Ac,L.sampleSize=pC,L.set=DO,L.setWith=kO,L.shuffle=vC,L.slice=hE,L.sortBy=CC,L.sortedUniq=IE,L.sortedUniqBy=bE,L.split=rI,L.spread=NC,L.tail=wE,L.take=yE,L.takeRight=LE,L.takeRightWhile=AE,L.takeWhile=SE,L.tap=WE,L.throttle=xC,L.thru=pa,L.toArray=rg,L.toPairs=cg,L.toPairsIn=ug,L.toPath=UI,L.toPlainObject=og,L.transform=GO,L.unary=RC,L.union=NE,L.unionBy=xE,L.unionWith=RE,L.uniq=TE,L.uniqBy=DE,L.uniqWith=kE,L.unset=MO,L.unzip=Sc,L.unzipWith=Bf,L.update=UO,L.updateWith=$O,L.values=Ji,L.valuesIn=FO,L.without=GE,L.words=fg,L.wrap=TC,L.xor=ME,L.xorBy=UE,L.xorWith=$E,L.zip=FE,L.zipObject=PE,L.zipObjectDeep=HE,L.zipWith=BE,L.entries=cg,L.entriesIn=ug,L.extend=sg,L.extendWith=ba,$c(L,L),L.add=FI,L.attempt=gg,L.camelCase=WO,L.capitalize=dg,L.ceil=PI,L.clamp=PO,L.clone=kC,L.cloneDeep=MC,L.cloneDeepWith=UC,L.cloneWith=GC,L.conformsTo=$C,L.deburr=_g,L.defaultTo=mI,L.divide=HI,L.endsWith=zO,L.eq=rr,L.escape=YO,L.escapeRegExp=jO,L.every=JE,L.find=tC,L.findIndex=Uf,L.findKey=gO,L.findLast=nC,L.findLastIndex=$f,L.findLastKey=hO,L.floor=BI,L.forEach=zf,L.forEachRight=Yf,L.forIn=pO,L.forInRight=vO,L.forOwn=mO,L.forOwnRight=EO,L.get=Dc,L.gt=FC,L.gte=PC,L.has=IO,L.hasIn=kc,L.head=Pf,L.identity=In,L.includes=aC,L.indexOf=nE,L.inRange=HO,L.invoke=yO,L.isArguments=Ci,L.isArray=Ze,L.isArrayBuffer=HC,L.isArrayLike=Cn,L.isArrayLikeObject=$t,L.isBoolean=BC,L.isBuffer=Zr,L.isDate=WC,L.isElement=zC,L.isEmpty=YC,L.isEqual=jC,L.isEqualWith=KC,L.isError=Rc,L.isFinite=VC,L.isFunction=Nr,L.isInteger=Jf,L.isLength=Oa,L.isMap=eg,L.isMatch=XC,L.isMatchWith=qC,L.isNaN=ZC,L.isNative=QC,L.isNil=eO,L.isNull=JC,L.isNumber=tg,L.isObject=Gt,L.isObjectLike=Ut,L.isPlainObject=Xo,L.isRegExp=Tc,L.isSafeInteger=tO,L.isSet=ng,L.isString=Ia,L.isSymbol=Tn,L.isTypedArray=Qi,L.isUndefined=nO,L.isWeakMap=rO,L.isWeakSet=iO,L.join=aE,L.kebabCase=KO,L.last=Kn,L.lastIndexOf=lE,L.lowerCase=VO,L.lowerFirst=XO,L.lt=oO,L.lte=sO,L.max=WI,L.maxBy=zI,L.mean=YI,L.meanBy=jI,L.min=KI,L.minBy=VI,L.stubArray=Pc,L.stubFalse=Hc,L.stubObject=DI,L.stubString=kI,L.stubTrue=GI,L.multiply=XI,L.nth=cE,L.noConflict=yI,L.noop=Fc,L.now=ma,L.pad=qO,L.padEnd=ZO,L.padStart=QO,L.parseInt=JO,L.random=BO,L.reduce=_C,L.reduceRight=fC,L.repeat=eI,L.replace=tI,L.result=TO,L.round=qI,L.runInContext=V,L.sample=hC,L.size=mC,L.snakeCase=nI,L.some=EC,L.sortedIndex=pE,L.sortedIndexBy=vE,L.sortedIndexOf=mE,L.sortedLastIndex=EE,L.sortedLastIndexBy=CE,L.sortedLastIndexOf=OE,L.startCase=iI,L.startsWith=oI,L.subtract=ZI,L.sum=QI,L.sumBy=JI,L.template=sI,L.times=MI,L.toFinite=xr,L.toInteger=et,L.toLength=ig,L.toLower=aI,L.toNumber=Vn,L.toSafeInteger=aO,L.toString=pt,L.toUpper=lI,L.trim=cI,L.trimEnd=uI,L.trimStart=dI,L.truncate=_I,L.unescape=fI,L.uniqueId=$I,L.upperCase=gI,L.upperFirst=Gc,L.each=zf,L.eachRight=Yf,L.first=Pf,$c(L,function(){var s={};return ur(L,function(l,h){mt.call(L.prototype,h)||(s[h]=l)}),s}(),{chain:!1}),L.VERSION=r,Bn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){L[s].placeholder=L}),Bn(["drop","take"],function(s,l){st.prototype[s]=function(h){h=h===n?1:zt(et(h),0);var C=this.__filtered__&&!l?new st(this):this.clone();return C.__filtered__?C.__takeCount__=an(h,C.__takeCount__):C.__views__.push({size:an(h,$e),type:s+(C.__dir__<0?"Right":"")}),C},st.prototype[s+"Right"]=function(h){return this.reverse()[s](h).reverse()}}),Bn(["filter","map","takeWhile"],function(s,l){var h=l+1,C=h==pe||h==Ae;st.prototype[s]=function(b){var x=this.clone();return x.__iteratees__.push({iteratee:Be(b,3),type:h}),x.__filtered__=x.__filtered__||C,x}}),Bn(["head","last"],function(s,l){var h="take"+(l?"Right":"");st.prototype[s]=function(){return this[h](1).value()[0]}}),Bn(["initial","tail"],function(s,l){var h="drop"+(l?"":"Right");st.prototype[s]=function(){return this.__filtered__?new st(this):this[h](1)}}),st.prototype.compact=function(){return this.filter(In)},st.prototype.find=function(s){return this.filter(s).head()},st.prototype.findLast=function(s){return this.reverse().find(s)},st.prototype.invokeMap=rt(function(s,l){return typeof s=="function"?new st(this):this.map(function(h){return Wo(h,s,l)})}),st.prototype.reject=function(s){return this.filter(Ca(Be(s)))},st.prototype.slice=function(s,l){s=et(s);var h=this;return h.__filtered__&&(s>0||l<0)?new st(h):(s<0?h=h.takeRight(-s):s&&(h=h.drop(s)),l!==n&&(l=et(l),h=l<0?h.dropRight(-l):h.take(l-s)),h)},st.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},st.prototype.toArray=function(){return this.take($e)},ur(st.prototype,function(s,l){var h=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),b=L[C?"take"+(l=="last"?"Right":""):l],x=C||/^find/.test(l);b&&(L.prototype[l]=function(){var U=this.__wrapped__,Y=C?[1]:arguments,Q=U instanceof st,ce=Y[0],ue=Q||Ze(U),ge=function(ot){var lt=b.apply(L,zr([ot],Y));return C&&Le?lt[0]:lt};ue&&h&&typeof ce=="function"&&ce.length!=1&&(Q=ue=!1);var Le=this.__chain__,ke=!!this.__actions__.length,We=x&&!Le,tt=Q&&!ke;if(!x&&ue){U=tt?U:new st(this);var ze=s.apply(U,Y);return ze.__actions__.push({func:pa,args:[ge],thisArg:n}),new zn(ze,Le)}return We&&tt?s.apply(this,Y):(ze=this.thru(ge),We?C?ze.value()[0]:ze.value():ze)})}),Bn(["pop","push","shift","sort","splice","unshift"],function(s){var l=Bs[s],h=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);L.prototype[s]=function(){var b=arguments;if(C&&!this.__chain__){var x=this.value();return l.apply(Ze(x)?x:[],b)}return this[h](function(U){return l.apply(Ze(U)?U:[],b)})}}),ur(st.prototype,function(s,l){var h=L[l];if(h){var C=h.name+"";mt.call(Ki,C)||(Ki[C]=[]),Ki[C].push({name:l,func:h})}}),Ki[ca(n,w).name]=[{name:"wrapper",func:n}],st.prototype.clone=f1,st.prototype.reverse=g1,st.prototype.value=h1,L.prototype.at=zE,L.prototype.chain=YE,L.prototype.commit=jE,L.prototype.next=KE,L.prototype.plant=XE,L.prototype.reverse=qE,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=ZE,L.prototype.first=L.prototype.head,Mo&&(L.prototype[Mo]=VE),L},zi=jm();_i?((_i.exports=zi)._=zi,Ul._=zi):Jt._=zi}).call(xx)}(ts,ts.exports)),ts.exports}var bt=Rx();function kr(t){return Array.isArray?Array.isArray(t):Zh(t)==="[object Array]"}function Tx(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Dx(t){return t==null?"":Tx(t)}function pr(t){return typeof t=="string"}function Xh(t){return typeof t=="number"}function kx(t){return t===!0||t===!1||Gx(t)&&Zh(t)=="[object Boolean]"}function qh(t){return typeof t=="object"}function Gx(t){return qh(t)&&t!==null}function Un(t){return t!=null}function Kc(t){return!t.trim().length}function Zh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Mx="Incorrect 'index' type",Ux=t=>`Invalid value for key ${t}`,$x=t=>`Pattern length exceeds max of ${t}.`,Fx=t=>`Missing ${t} property in key`,Px=t=>`Property 'weight' in key '${t}' must be a positive integer`,bg=Object.prototype.hasOwnProperty;class Hx{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Qh(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Qh(t){let e=null,n=null,r=null,i=1,o=null;if(pr(t)||kr(t))r=t,e=wg(t),n=_u(t);else{if(!bg.call(t,"name"))throw new Error(Fx("name"));const a=t.name;if(r=a,bg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Px(a));e=wg(a),n=_u(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function wg(t){return kr(t)?t:t.split(".")}function _u(t){return kr(t)?t.join("."):t}function Bx(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Un(o))if(!a[c])n.push(o);else{let u=a[c];const _=o[u];if(!Un(_))return;if(c===a.length-1&&(pr(_)||Xh(_)||kx(_)))n.push(Dx(_));else if(kr(_)){r=!0;for(let p=0,g=_.length;p<g;p+=1)i(_[p],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,pr(e)?e.split("."):e,0),r?n:n[0]}const Wx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},zx={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Yx={location:0,threshold:.6,distance:100},jx={useExtendedSearch:!1,getFn:Bx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var je={...zx,...Wx,...Yx,...jx};const Kx=/[^ ]+/g;function Vx(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Kx).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class ld{constructor({getFn:e=je.getFn,fieldNormWeight:n=je.fieldNormWeight}={}){this.norm=Vx(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,pr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();pr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Un(e)||Kc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Un(a)){if(kr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:p}=u.pop();if(Un(p))if(pr(p)&&!Kc(p)){let g={v:p,i:_,n:this.norm.get(p)};c.push(g)}else kr(p)&&p.forEach((g,v)=>{u.push({nestedArrIndex:v,value:g})})}r.$[o]=c}else if(pr(a)&&!Kc(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Jh(t,e,{getFn:n=je.getFn,fieldNormWeight:r=je.fieldNormWeight}={}){const i=new ld({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Qh)),i.setSources(e),i.create(),i}function Xx(t,{getFn:e=je.getFn,fieldNormWeight:n=je.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new ld({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function La(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=je.distance,ignoreLocation:o=je.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function qx(t=[],e=je.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Ii=32;function Zx(t,e,n,{location:r=je.location,distance:i=je.distance,threshold:o=je.threshold,findAllMatches:a=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,includeMatches:u=je.includeMatches,ignoreLocation:_=je.ignoreLocation}={}){if(e.length>Ii)throw new Error($x(Ii));const p=e.length,g=t.length,v=Math.max(0,Math.min(r,g));let m=o,E=v;const O=c>1||u,I=O?Array(g):[];let w;for(;(w=t.indexOf(e,E))>-1;){let F=La(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:_});if(m=Math.min(F,m),E=w+p,O){let P=0;for(;P<p;)I[w+P]=1,P+=1}}E=-1;let A=[],D=1,M=p+g;const z=1<<p-1;for(let F=0;F<p;F+=1){let P=0,X=M;for(;P<X;)La(e,{errors:F,currentLocation:v+X,expectedLocation:v,distance:i,ignoreLocation:_})<=m?P=X:M=X,X=Math.floor((M-P)/2+P);M=X;let re=Math.max(1,v-X+1),q=a?g:Math.min(v+X,g)+p,J=Array(q+2);J[q+1]=(1<<F)-1;for(let pe=q;pe>=re;pe-=1){let be=pe-1,Ae=n[t.charAt(be)];if(O&&(I[be]=+!!Ae),J[pe]=(J[pe+1]<<1|1)&Ae,F&&(J[pe]|=(A[pe+1]|A[pe])<<1|1|A[pe+1]),J[pe]&z&&(D=La(e,{errors:F,currentLocation:be,expectedLocation:v,distance:i,ignoreLocation:_}),D<=m)){if(m=D,E=be,E<=v)break;re=Math.max(1,2*v-E)}}if(La(e,{errors:F+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:_})>m)break;A=J}const W={isMatch:E>=0,score:Math.max(.001,D)};if(O){const F=qx(I,c);F.length?u&&(W.indices=F):W.isMatch=!1}return W}function Qx(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class ep{constructor(e,{location:n=je.location,threshold:r=je.threshold,distance:i=je.distance,includeMatches:o=je.includeMatches,findAllMatches:a=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,isCaseSensitive:u=je.isCaseSensitive,ignoreLocation:_=je.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(v,m)=>{this.chunks.push({pattern:v,alphabet:Qx(v),startIndex:m})},g=this.pattern.length;if(g>Ii){let v=0;const m=g%Ii,E=g-m;for(;v<E;)p(this.pattern.substr(v,Ii),v),v+=Ii;if(m){const O=g-Ii;p(this.pattern.substr(O),O)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let p=[],g=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:O,startIndex:I})=>{const{isMatch:w,score:A,indices:D}=Zx(e,E,O,{location:i+I,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(v=!0),g+=A,w&&D&&(p=[...p,...D])});let m={isMatch:v,score:v?g/this.chunks.length:1};return v&&r&&(m.indices=p),m}}class ai{constructor(e){this.pattern=e}static isMultiMatch(e){return yg(e,this.multiRegex)}static isSingleMatch(e){return yg(e,this.singleRegex)}search(){}}function yg(t,e){const n=t.match(e);return n?n[1]:null}class Jx extends ai{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class eR extends ai{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class tR extends ai{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class nR extends ai{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class rR extends ai{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class iR extends ai{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class tp extends ai{constructor(e,{location:n=je.location,threshold:r=je.threshold,distance:i=je.distance,includeMatches:o=je.includeMatches,findAllMatches:a=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,isCaseSensitive:u=je.isCaseSensitive,ignoreLocation:_=je.ignoreLocation}={}){super(e),this._bitapSearch=new ep(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class np extends ai{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fu=[Jx,np,tR,nR,iR,rR,eR,tp],Lg=fu.length,oR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,sR="|";function aR(t,e={}){return t.split(sR).map(n=>{let r=n.trim().split(oR).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,_=-1;for(;!u&&++_<Lg;){const p=fu[_];let g=p.isMultiMatch(c);g&&(i.push(new p(g,e)),u=!0)}if(!u)for(_=-1;++_<Lg;){const p=fu[_];let g=p.isSingleMatch(c);if(g){i.push(new p(g,e));break}}}return i})}const lR=new Set([tp.type,np.type]);class cR{constructor(e,{isCaseSensitive:n=je.isCaseSensitive,includeMatches:r=je.includeMatches,minMatchCharLength:i=je.minMatchCharLength,ignoreLocation:o=je.ignoreLocation,findAllMatches:a=je.findAllMatches,location:c=je.location,threshold:u=je.threshold,distance:_=je.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=aR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const p=n[u];a.length=0,o=0;for(let g=0,v=p.length;g<v;g+=1){const m=p[g],{isMatch:E,indices:O,score:I}=m.search(e);if(E){if(o+=1,c+=I,r){const w=m.constructor.type;lR.has(w)?a=[...a,...O]:a.push(O)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const gu=[];function uR(...t){gu.push(...t)}function hu(t,e){for(let n=0,r=gu.length;n<r;n+=1){let i=gu[n];if(i.condition(t,e))return new i(t,e)}return new ep(t,e)}const Da={AND:"$and",OR:"$or"},pu={PATH:"$path",PATTERN:"$val"},vu=t=>!!(t[Da.AND]||t[Da.OR]),dR=t=>!!t[pu.PATH],_R=t=>!kr(t)&&qh(t)&&!vu(t),Ag=t=>({[Da.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function rp(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=dR(i);if(!a&&o.length>1&&!vu(i))return r(Ag(i));if(_R(i)){const u=a?i[pu.PATH]:o[0],_=a?i[pu.PATTERN]:i[u];if(!pr(_))throw new Error(Ux(u));const p={keyId:_u(u),pattern:_};return n&&(p.searcher=hu(_,e)),p}let c={children:[],operator:o[0]};return o.forEach(u=>{const _=i[u];kr(_)&&_.forEach(p=>{c.children.push(r(p))})}),c};return vu(t)||(t=Ag(t)),r(t)}function fR(t,{ignoreFieldNorm:e=je.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function gR(t,e){const n=t.matches;e.matches=[],Un(n)&&n.forEach(r=>{if(!Un(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function hR(t,e){e.score=t.score}function pR(t,e,{includeMatches:n=je.includeMatches,includeScore:r=je.includeScore}={}){const i=[];return n&&i.push(gR),r&&i.push(hR),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class wo{constructor(e,n={},r){this.options={...je,...n},this.options.useExtendedSearch,this._keyStore=new Hx(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ld))throw new Error(Mx);this._myIndex=n||Jh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Un(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=pr(e)?pr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return fR(u,{ignoreFieldNorm:c}),o&&u.sort(a),Xh(n)&&n>-1&&(u=u.slice(0,n)),pR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=hu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Un(o))return;const{isMatch:u,score:_,indices:p}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:_,value:o,norm:c,indices:p}]})}),i}_searchLogical(e){const n=rp(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:v});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const p=[];for(let g=0,v=c.children.length;g<v;g+=1){const m=c.children[g],E=r(m,u,_);if(E.length)p.push(...E);else if(c.operator===Da.AND)return[]}return p},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Un(c)){let _=r(n,c,u);_.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),_.forEach(({matches:p})=>{o[u].matches.push(...p)}))}}),a}_searchObjectList(e){const n=hu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Un(a))return;let u=[];r.forEach((_,p)=>{u.push(...this._findMatches({key:_,value:a[p],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Un(n))return[];let i=[];if(kr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Un(o))return;const{isMatch:u,score:_,indices:p}=r.searchIn(o);u&&i.push({score:_,key:e,value:o,idx:a,norm:c,indices:p})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:_})}return i}}wo.version="7.0.0";wo.createIndex=Jh;wo.parseIndex=Xx;wo.config=je;wo.parseQuery=rp;uR(cR);function Si(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function vR(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function mR(t){return new wo(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function ER(t,e,n){const r=vR(e,n);return t.length===0?r:mR(r).search(t).map(i=>i.item)}function CR(t,e){return Si(t,e).shape}function un(t,e){const n=CR(t,e);return n?du(n):void 0}function ws(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return ad(e)}function OR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function ys(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return ad(i)})}function IR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return ad(o)})})}function $r(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function ip(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Yh(e)}function bR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Yh(r)})}function wR(t,e){const n=t.shape;return n===void 0?void 0:{...un(e,Mt),...n}}function op(t,e,n){return{toolId:t,cells:e,value:n}}function yR(t,e){const n=ys(e,"cells"),r=$r(e);return op(t,n,r)}function sp(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>qe(o,e)&&a>=r)}function LR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Is(r[i-1],e)))return t;const a=sp(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function ap(t,e){return{toolId:t,cells:e,lines:[]}}function AR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ta(n),{...t,cells:n};const r=n.some(o=>qe(o,e)),i=n.some(o=>Is(o,e));return n.length>0&&!r&&i?(n.push(e),Ta(n),{...t,cells:n}):t}function SR(t,e,n){const r=t.cells.some(_=>qe(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return mu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return mu(t,e);const c=sp(o,e,!1);return(o.length===0?!0:Is(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function mu(t,e){return t.cells.some(r=>qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function NR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function xR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function RR(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function TR(t,e){const n=ys(e,"cells"),r=IR(e),i=ap(t,n);return i.lines=r,i}function lp(t,e,n=""){return{toolId:t,cells:e,value:n}}function DR(t,e,n=!1){const r=Vh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function kR(t,e){return{...t,value:e}}function GR(t,e){const n=ys(e,"cells"),r=$r(e);return lp(t,n,r)}function cp(t,e,n){return{toolId:t,cells:e,value:n}}function MR(t,e){const n=ys(e,"cells"),r=$r(e);return cp(t,n,r)}function up(t,e,n){return{toolId:t,cells:e,value:n}}function UR(t,e){const n=ys(e,"cells"),r=$r(e);return up(t,n,r)}function dp(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function $R(t,e){const n=ws(e),r=ip(e),i=$r(e);return dp(t,n,r,i)}function _p(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function FR(t,e){const n=ws(e),r=$r(e);return _p(t,n,r)}function fp(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function PR(t,e){const n=ws(e),r=ip(e);return fp(t,n,r)}function gp(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function HR(t,e){const n=ws(e),r=bR(e),i=gp(t,n,Pe.N);return i.directions=r,i}function hp(t,e,n=""){return{toolId:t,cell:e,value:n}}function BR(t,e){const n=ws(e),r=$r(e);return hp(t,n,r)}function WR(t,e=""){return{toolId:t,value:e}}function zR(t,e){const n=$r(e);return WR(t,n)}function YR(t,e,n=""){return{toolId:t,coords:e,value:n}}function jR(t,e){const n=OR(e,"coords"),r=$r(e);return YR(t,n,r)}function Ls(t,e){return{...t,value:e}}class yo extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(tT(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new yo;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=xh(r);if(o===void 0||!Object.keys(Mt).includes(o))continue;const a=i;for(const c of a){let u=null;if(Rh(o,Xa)?u=FR(o,c):Yu(o)?u=PR(o,c):ju(o)?u=HR(o,c):Ku(o)?u=UR(o,c):Lh(o)?u=MR(o,c):Vu(o)?u=yR(o,c):Sh(o)?u=jR(o,c):Xu(o)?u=TR(o,c):qu(o)?u=GR(o,c):_s(o)?u=$R(o,c):Pb(o)?u=zR(o,c):Ah(o)&&(u=BR(o,c)),u!==null){n.addToDict(o);const _=bt.uniqueId(),p=wR(c,o);u.shape=p,n.addConstraint(o,_,u)}}}return n}}function ka(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(qe(o.cell,n))return[a,o]}return null}function KR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>qe(c,u))))return i}return null}function VR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(qe(n,a))return i}return null}function Sg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>qe(c,n)))return[i[0],o]}return null}function XR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>qe(c,n)))return i;return null}function Ng(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>qe(c,n)))return[i[0],o]}return null}function qR(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((_,p)=>qe(_,n)&&p>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function ZR(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(qe(n,a.cell)&&r===a.direction)return c}return null}function QR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(qe(n,o.cell))return a}return null}function JR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>qe(c,n))||o.cells2.some(c=>qe(c,n)))return[i[0],o]}return null}function eT(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function tT(t){const e={};if("cells"in t){const n=t.cells.map(r=>wa(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>wa(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>wa(i)));e.lines=n}if("cell"in t){const n=wa(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=un(t.toolId,Mt),r=Yb(t.shape,n);r&&(e.shape=r)}return e}function xg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function pp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Eu(t){const e=new Option().style;return e.color=t,e.color!==""}function Vc(t){return pp(t)||Eu(t)?t:Eu(`#${t}`)?`#${t}`:void 0}function Ga(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function vp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Ma(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function nT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Rg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function rT(t){return t in Rg?Rg[t]:null}function mp(t,e,n){if(n===null)return null;const r=rT(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Xc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class iT{constructor(e,n){Ee(this,"r");Ee(this,"c");Ee(this,"outside",!1);Ee(this,"value",null);Ee(this,"given",!1);Ee(this,"region",null);Ee(this,"centerMarks",[]);Ee(this,"cornerMarks",[]);Ee(this,"highlights",[]);Ee(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Xc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Xc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Xc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==mp(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Lo{constructor(e,n){Ee(this,"nCols");Ee(this,"nRows");Ee(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new iT(i,a);if(r){const u=mp(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return vp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=bs(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Lo(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function oT(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=bt.range(1,o+1);t.valid_digits&&!nT(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function sT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=Lo.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=bt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,p=t.local_constraints,g=yo.fromJson(p),v=t.bool_constraints,m=Ai.fromJson(v);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function DH(){const t=new Lo(9,9),e=new yo,n=new Ai;return{grid:t,solution:void 0,valid_digits:bt.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var ns=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(ns||{});const aT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),lT=()=>({type:"CLEAR"}),cT=t=>({type:"DRAG",payload:t}),Cu=t=>({type:"SET",payload:t}),uT=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),cd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),hr=(t,e,n)=>{const r=[...t];return Ta(r),{cells:r,lastCell:e,mode:n}};function dT(t,e,n){if(e===null)return cd();if(n==="RESETTING")return hr([e],e,"SELECTING");const r=t.cells.findIndex(i=>qe(e,i));if(n==="SELECTING")return r!==-1?t:hr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),hr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return hr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),hr(i,null,"DESELECTING")}return t}function _T(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:hr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),hr(r,null,t.mode)}return t}function fT(t,e){return{...t,cells:e}}function gT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>qe(e,i))!==-1?hr([...t.cells],e,"SELECTING"):hr([...t.cells,e],e,"SELECTING"):hr([e],e,t.mode)}function Ep(t,e){switch(e==null?void 0:e.type){case"CLEAR":return cd();case"SET":return fT(t,e.payload);case"CLICK":return dT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return _T(t,e.payload);case"ARROW_KEY":return gT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function ro(t,e){return qe(t.p1,e.p1)&&qe(t.p2,e.p2)||qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function hT(t,e){return qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function Cp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!qe(t,e)}class nl{constructor(){Ee(this,"edgeMarkers",[]);Ee(this,"cellMarkers",[]);Ee(this,"lineMarkers",[]);Ee(this,"draftLine",[]);Ee(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>qe(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>qe(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>qe(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>qe(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>qe(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>ro(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>ro(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&hT(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Cp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>ro(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>ro(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new nl;return Object.assign(e,this),e}}const Tg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Dg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Aa=t=>({type:"ADD_CELL_MARKER",payload:t}),pT=t=>({type:"SET_CELL_MARKERS",payload:t}),kg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),vT=t=>({type:"DRAG",payload:t}),fs=t=>({type:"ADD_LINE_MARKERS",payload:t}),Gg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),ud=()=>({type:"RESET"});function mT(t,e){switch(e.type){case"RESET":return new nl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Op(){return{_undoStack:[],_redoStack:[]}}const Ao=jt(Op());function ET(){Ao.update(()=>Op())}function pn(t,e=!0){Ao.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function CT(t,e=!0){Ao.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Ip(){Ao.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function bp(){Ao.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ua=jt(new nl);function mr(t){Ua.update(e=>mT(e,t))}const $a=jt(1);function Oi(t,e){return{execute:()=>{mr(t)},unExecute:()=>{mr(e)}}}const Ni=jt(cd());function to(t){t&&Ni.update(e=>Ep(e,t))}function Mg(t){t&&Ni.update(e=>Ep(e,t))}function OT(t,e){return{execute:()=>{Mg(t)},unExecute:()=>{Mg(e)}}}const so=jt(null),rl=jt(_o.SETTING),Ou=jt(!1),on=jt(d.DIGIT),wp=jt(d.DIGIT),dd=jt(bt.range(1,10)),bn=jt(new Lo(9,9)),vn=jt(ct(bn).getAllCells()),Fr=jt({}),Pr=jt(new Ai),vt=jt(new yo),Bt=jt(null),yp=jt(void 0),il=jt(void 0);function IT(t){Fr.update(()=>t)}function So(t){Bt.update(()=>t)}function _d(t){yp.update(()=>t)}function Dr(t){ct(on)!==t&&(on.update(()=>t),So(null))}function bT(){const t=ct(wp);t&&Dr(t)}function Iu(t){wp.update(()=>t)}function wT(t){ct(on)===t&&Dr(d.DIGIT)}function yT(t){vt.update(e=>(e.removeFromDict(t),e)),_d(void 0)}function Yt(t,e,n){vt.update(r=>(r.updateConstraint(t,e,n),r)),So({id:e,constraint:n})}function qc(t){const e=ct(Bt);if(t=t?{...t}:void 0,_d(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Yt(r,e.id,n)}function LT(t,e){const r=ct(vt).get(e);if(!r)return;const i=r[t];i&&So({id:t,constraint:i})}function AT(t,e,n){const r=new Lo(t,e);bn.update(()=>r),dd.update(()=>n),vt.update(()=>new yo),Pr.update(()=>new Ai),Fr.update(()=>({})),fd(void 0),vn.update(()=>r.getAllCells())}function ST(t){bn.update(()=>t.grid),Fr.update(()=>t.puzzleMeta),fd(t.solution),dd.update(()=>t.valid_digits),vt.update(()=>t.localConstraints),Pr.update(()=>t.globalConstraints),vn.update(()=>t.grid.getAllCells())}function Lp(){const t=ct(bn);t.resetValues(),bn.update(()=>t),vn.update(()=>t.getAllCells()),mr(ud())}function Fa(){ET(),mr(ud()),Dr(d.DIGIT);const t=lT();to(t),_d(void 0),So(null)}const Ap=uo([ii,on,rl],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===_o.SETTING}),As=uo([bn,Fr,Pr,vt,il,dd],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function fd(t){il.update(()=>t)}var no=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(no||{});const gd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),hd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),NT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),xT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Ug=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Sp(t){vt.update(e=>(e.addToDict(t),e))}function li(t,e){const n=ct(yp);n&&(e.shape={...n}),vt.update(r=>(r.addConstraint(e.toolId,t,e),r)),So({id:t,constraint:e})}function xi(t,e){e&&vt.update(n=>(n.removeConstraint(t,e),n))}function RT(t,e){vt.update(n=>(n.setConstraints(t,e),n))}function $g(t){t.type===no.ADD_LOCAL_CONSTRAINT?li(t.payload.id,t.payload.constraint):t.type===no.REMOVE_LOCAL_CONSTRAINT?xi(t.payload.tool,t.payload.id):t.type===no.REMOVE_LOCAL_CONSTRAINT_GROUP?yT(t.payload.tool):t.type===no.RESTORE_LOCAL_CONSTRAINT_GROUP?RT(t.payload.tool,t.payload.constraints):t.type===no.UPDATE_LOCAL_CONSTRAINT&&Yt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ss(t,e){return{execute:()=>{$g(t)},unExecute:()=>{$g(e)}}}var TT=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Np(t){var e=TT();T(t,e)}var DT=le('<button class="remove-button svelte-17rdl63"><!></button>');function kT(t,e){let n=$(e,"onTrash",8,()=>{});var r=DT(),i=Z(r);Np(i),j(r),Ge("click",r,Zn(function(...o){var a;(a=n())==null||a.apply(this,o)})),T(t,r)}var GT=le('<input type="radio" class="radio-select-button svelte-3561wl">'),MT=le('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function Pa(t,e){var X,re;de(e,!1);const n=Ke(),r=()=>Ce(on,"$toolStore",n),i=[];let o=$(e,"elementInfo",8),a=$(e,"onClick",12,void 0),c=$(e,"onTrash",8,void 0);const u=o().toolId,_=o().permanent??!1,p=((X=o().menu)==null?void 0:X.name)??o().toolId,g=!((re=o().meta)!=null&&re.categories.includes(N.GLOBAL_CONSTRAINT)),v=`label-${p}`;g&&a(()=>{Dr(u)});function m(){var pe,be;const q=(pe=o().meta)==null?void 0:pe.description,J=((be=o().meta)==null?void 0:be.usage)??iw(u);let fe;return q&&q.length&&(fe=q),J.length&&(fe?fe=fe+`

`+J:fe=J),fe}ve();var E=MT(),O=Z(E);{var I=q=>{var J=GT();nn(J),S(J,"id",v),J.value=(J.__value=u)==null?"":u,Va(i,[],J,()=>r(),fe=>ps(on,fe)),T(q,J)};oe(O,q=>{g&&q(I)})}var w=G(O,2);ne(()=>S(w,"title",m())),S(w,"aria-labelledby",v);var A=Z(w),D=Z(A),M=Z(D);{var z=q=>{kT(q,{get onTrash(){return c()}})};oe(M,q=>{_||q(z)})}j(D);var W=G(D,2);S(W,"for",v),W.textContent=p,j(A);var F=G(A,2),P=Z(F);ft(P,e,"default",{}),j(F),j(w),j(E),ne(()=>At(E,"checked",u===r())),Ge("click",w,Zn(function(...q){var J;(J=a())==null||J.apply(this,q)})),T(t,E),_e()}function xp(t,e){de(e,!1);const n=Ke(),r=()=>Ce(vt,"$localConstraintsStore",n);let i=$(e,"toolId",8),o=$(e,"elementHandlers",8);const a=()=>{wT(i());const u=r().get(i());if(!u)return;const _=NT(i()),p=xT(i(),u),g=Ss(_,p);pn(g)};ve();var c=Qe(()=>Si(i(),o()));Pa(t,{get elementInfo(){return f(c)},onTrash:a}),_e()}var UT=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function $T(t){var e=UT();T(t,e)}var FT=le('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function ol(t,e){let n=$(e,"isOpen",8,!0);var r=FT(),i=Z(r);ft(i,e,"default",{}),j(r),ne(()=>{S(r,"aria-expanded",n()),At(r,"closed",!n())}),T(t,r)}var PT=le('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function HT(t,e){de(e,!1);const n=Ke(),r=()=>Ce(so,"$svgRefStore",n),i=()=>Ce(vt,"$localConstraintsStore",n),o=()=>Ce(Bt,"$currentConstraintStore",n),a=R();let c=$(e,"constraintId",8),u=$(e,"toolId",8);function _(){LT(c(),u()),r()&&r().focus()}function p(){const w=i().getConstraint(u(),c());if(!w)return;const A=hd(c(),u()),D=gd(c(),w),M=Ss(A,D);pn(M)}k(()=>o(),()=>{var w;y(a,(w=o())==null?void 0:w.id)}),ye(),ve();var g=PT(),v=Z(g),m=Z(v);j(v);var E=G(v,2),O=Z(E),I=Z(O);Np(I),j(O),j(E),j(g),ne(()=>{At(g,"active",c()===f(a)),it(m,`ID: ${c()??""}`)}),Ge("click",O,Zn(p)),Ge("click",g,_),T(t,g),_e()}var BT=le('<div class="constraint-list svelte-w5npcu"></div>');function Rp(t,e){de(e,!1);const n=Ke(),r=()=>Ce(vt,"$localConstraintsStore",n),i=()=>Ce(on,"$toolStore",n),o=R();let a=$(e,"toolId",8);k(()=>(r(),ee(a())),()=>{y(o,r().get(a()))}),ye(),ve();var c=Ne(),u=ae(c);{var _=p=>{var g=Qe(()=>a()===i());ol(p,{get isOpen(){return f(g)},children:(v,m)=>{var E=BT();dt(E,5,()=>Object.entries(f(o)),O=>O[0],(O,I)=>{HT(O,{get constraintId(){return f(I)[0]},get toolId(){return a()}})}),j(E),T(v,E)},$$slots:{default:!0}})};oe(u,p=>{f(o)&&Object.entries(f(o)).length&&p(_)})}T(t,c),_e()}var WT=le('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function zT(t,e){let n=$(e,"title",8),r=$(e,"closeCb",8);var i=WT(),o=Z(i),a=Z(o,!0);j(o);var c=G(o,2);j(i),ne(()=>it(a,n())),Ge("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),T(t,i)}var YT=le('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Hr(t,e){de(e,!1);let n=$(e,"showModal",12),r=$(e,"title",8),i=R();function o(){n(!1),f(i).close()}k(()=>(f(i),ee(n())),()=>{f(i)&&n()&&f(i).showModal()}),k(()=>(f(i),ee(n())),()=>{f(i)&&!n()&&f(i).close()}),ye();var a=YT(),c=Z(a),u=Z(c);zT(u,{get title(){return r()},closeCb:o});var _=G(u,2),p=Z(_),g=Z(p);ft(g,e,"default",{}),j(p),j(_),j(c),j(a),Li(a,v=>y(i,v),()=>f(i)),Ge("click",c,Zn(function(v){Mb.call(this,e,v)})),Ge("close",a,()=>{n(!1)}),Ge("click",a,Gb(Zn(()=>f(i).close()))),T(t,a),_e()}var jT=le('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function KT(t,e){de(e,!1);let n=$(e,"searchPattern",12,""),r=$(e,"showModal",8),i=R(null);k(()=>(ee(r()),f(i)),()=>{r()&&f(i)&&f(i).focus()}),ye();var o=jT(),a=G(Z(o),2);nn(a),S(a,"spellcheck",!1),Li(a,c=>y(i,c),()=>f(i)),j(o),Xn(a,n),T(t,o),_e()}var VT=le('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function XT(t,e){let n=$(e,"showModal",12),r=$(e,"searchPattern",12,""),i=$(e,"title",8);Hr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=VT(),u=Z(c);KT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var _=G(u,2),p=Z(_),g=Z(p);ft(g,e,"default",{}),j(p),j(_),j(c),T(o,c)},$$slots:{default:!0},$$legacy:!0})}var qT=le('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),ZT=le('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function ei(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0),i=$(e,"isCollapsible",8,!1);var o=Ne(),a=ae(o);{var c=_=>{var p=qT(),g=Z(p),v=Z(g),m=Z(v,!0);j(v),j(g);var E=G(g,2),O=Z(E);ft(O,e,"default",{}),j(E),j(p),ne(()=>it(m,n())),T(_,p)},u=_=>{var p=ZT(),g=Z(p),v=Z(g),m=Z(v,!0);j(v),j(g);var E=G(g,2),O=Z(E);ft(O,e,"default",{});var I=G(O,2);j(E),j(p),ne(()=>{it(m,n()),At(I,"open",r())}),Ge("click",p,()=>r(!r())),T(_,p)};oe(a,_=>{i()?_(u,!1):_(c)})}T(t,o)}var QT=le('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),JT=le('<ol class="svelte-cd45on"></ol>'),e2=le("<!> <!>",1);function t2(t,e){de(e,!1);const n=R();let r=$(e,"category",8),i=$(e,"addTool",8),o=$(e,"searchResults",8),a=R(!0);k(()=>(ee(o()),ee(r())),()=>{y(n,o().filter(p=>{var g,v;return(v=(g=p.info.meta)==null?void 0:g.categories)==null?void 0:v.includes(r())}))}),ye(),ve();var c=Ne(),u=ae(c);{var _=p=>{var g=e2(),v=ae(g);ei(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return f(a)},set isOpen(E){y(a,E)},$$legacy:!0});var m=G(v,2);ol(m,{get isOpen(){return f(a)},children:(E,O)=>{var I=JT();dt(I,5,()=>f(n),St,(w,A)=>{let D=()=>f(A).key,M=()=>f(A).info;var z=QT(),W=Z(z),F=Z(W,!0);j(W),j(z),ne(()=>{var P;S(W,"title",(P=M().meta)==null?void 0:P.description),it(F,D())}),Ge("click",W,()=>{i()(D())}),T(w,z)}),j(I),T(E,I)},$$slots:{default:!0}}),T(p,g)};oe(u,p=>{f(n).length&&p(_)})}T(t,c),_e()}function n2(t,e){de(e,!1);const n=R();let r=$(e,"searchPattern",8,""),i=$(e,"addTool",8),o=$(e,"categories",8),a=$(e,"filterFunc",8),c=$(e,"elementHandlers",8);k(()=>(ee(r()),ee(a()),ee(c())),()=>{y(n,ER(r(),a(),c()))}),ye(),ve();var u=Ne(),_=ae(u);dt(_,1,o,St,(p,g)=>{t2(p,{get category(){return f(g)},get searchResults(){return f(n)},get addTool(){return i()}})}),T(t,u),_e()}var r2=le('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function sl(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8);var i=r2();S(i,"tabindex",0);var o=Z(i),a=Z(o);ft(a,e,"add-button",{}),j(o);var c=G(o,2),u=Z(c),_=Z(u);ft(_,e,"title-icon",{}),j(u);var p=G(u);j(c);var g=G(c,2),v=Z(g);j(g),j(i),ne(()=>{it(p,` ${r()??""}`),At(v,"open",n())}),Ge("click",i,()=>n(!n())),Ge("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),T(t,i)}var i2=le('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function o2(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8),i=$(e,"showModal",12);function o(){i(!i())}sl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=i2();Ge("click",u,Zn(()=>o())),T(a,u)},"title-icon":(a,c)=>{var u=Ne(),_=ae(u);ft(_,e,"title-icon",{}),T(a,u)}},$$legacy:!0})}var s2=le('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),a2=le('<div class="panel-container svelte-hixu4"><!> <!></div>');function al(t,e){let n=$(e,"isOpen",8,!0);var r=a2(),i=Z(r);ft(i,e,"panel-header",{});var o=G(i,2);ol(o,{get isOpen(){return n()},children:(a,c)=>{var u=s2(),_=Z(u);ft(_,e,"panel-content",{}),j(u),T(a,u)},$$slots:{default:!0}}),j(r),T(t,r)}var l2=le("<!> <!>",1);function pd(t,e){de(e,!1);let n=$(e,"categories",8),r=$(e,"title",8),i=$(e,"onAddTool",8),o=$(e,"elementHandlerFilterFunc",8),a=$(e,"elementHandlers",8),c=R(!0),u=R(!1),_=R("");const p=g=>{y(u,!1),y(c,!0),i()(g)};ve(),al(t,{get isOpen(){return f(c)},set isOpen(g){y(c,g)},$$slots:{"panel-header":(g,v)=>{var m=l2(),E=ae(m);o2(E,{get title(){return r()},get isOpen(){return f(c)},set isOpen(I){y(c,I)},get showModal(){return f(u)},set showModal(I){y(u,I)},$$slots:{"title-icon":(I,w)=>{var A=Ne(),D=ae(A);ft(D,e,"title-icon",{}),T(I,A)}},$$legacy:!0});var O=G(E,2);XT(O,{get title(){return r()},get showModal(){return f(u)},set showModal(I){y(u,I)},get searchPattern(){return f(_)},set searchPattern(I){y(_,I)},children:(I,w)=>{n2(I,{get searchPattern(){return f(_)},get categories(){return n()},get filterFunc(){return o()},addTool:p,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),T(g,m)},"panel-content":(g,v)=>{var m=Ne(),E=ae(m);ft(E,e,"panel-content",{}),T(g,m)}},$$legacy:!0}),_e()}var c2=le("<!> <!>",1);function u2(t,e){de(e,!1);const n=Ke(),r=()=>Ce(vt,"$localConstraintsStore",n),i=R();let o=$(e,"elementHandlers",8);const a=[N.COSMETIC_TOOL],c=u=>{Sp(u),Dr(u)};k(()=>(r(),N),()=>{y(i,(u,_)=>{var v;const p=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(N.COSMETIC_TOOL))&&!p})}),ye(),ve(),pd(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{$T(u)},"panel-content":(u,_)=>{var p=Ne(),g=ae(p);dt(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>f(m)[0];var O=Ne(),I=ae(O);{var w=A=>{var D=c2(),M=ae(D);xp(M,{get toolId(){return E()},get elementHandlers(){return o()}});var z=G(M,2);Rp(z,{get toolId(){return E()}}),T(A,D)};oe(I,A=>{Hb(E())&&A(w)})}T(v,O)}),T(u,p)}}}),_e()}var Tp=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Tp||{});const xa=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Dp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function d2(t,e){Pr.update(n=>n.setConstraint(t,e))}function _2(t){Pr.update(e=>e.removeConstraint(t))}function Fg(t){t.type===Tp.REMOVE_GLOBAL_CONSTRAINT?_2(t.payload):d2(t.payload.tool,t.payload.value)}function bu(t,e){return{execute:()=>{Fg(t)},unExecute:()=>{Fg(e)}}}var f2=le('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function g2(t,e){let n=$(e,"value",8,!1);var r=f2(),i=Z(r);nn(i),j(r),ne(()=>ch(i,n())),T(t,r)}function h2(t,e){de(e,!1);let n=$(e,"toolId",8),r=$(e,"value",8,!1),i=$(e,"elementHandlers",8);const o=()=>{const u=xa(n(),!r()),_=xa(n(),r()),p=bu(u,_);pn(p)},a=()=>{const u=Dp(n()),_=xa(n(),r()),p=bu(u,_);pn(p)};ve();var c=Qe(()=>Si(n(),i()));Pa(t,{get elementInfo(){return f(c)},onClick:o,onTrash:a,children:(u,_)=>{g2(u,{get value(){return r()}})},$$slots:{default:!0}}),_e()}var p2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function v2(t){var e=p2();T(t,e)}function m2(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Pr,"$globalConstraintsStore",n),i=R();let o=$(e,"elementHandlers",8);const a=Wb,c=u=>{const _=xa(u,!0),p=Dp(u),g=bu(_,p);pn(g)};k(()=>r(),()=>{y(i,(u,_)=>{var v;const p=!!((v=_.meta)!=null&&v.categories.includes(N.GLOBAL_CONSTRAINT)),g=r().has(u);return p&&!g})}),ye(),ve(),pd(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{v2(u)},"panel-content":(u,_)=>{var p=Ne(),g=ae(p);dt(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>f(m)[0],O=()=>f(m)[1];h2(v,{get toolId(){return E()},get value(){return O()},get elementHandlers(){return o()}})}),T(u,p)}}}),_e()}var E2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function C2(t){var e=E2();T(t,e)}var O2=le("<!> <!>",1),I2=le("<!> <!> <!>",1);function b2(t,e){de(e,!1);const n=Ke(),r=()=>Ce(vt,"$localConstraintsStore",n),i=R();let o=$(e,"elementHandlers",8);const a=Bb,c=u=>{Sp(u),Dr(u)};k(()=>(r(),N),()=>{y(i,(u,_)=>{var v;const p=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(N.LOCAL_CONSTRAINT))&&!p})}),ye(),ve(),pd(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{C2(u)},"panel-content":(u,_)=>{var p=I2(),g=ae(p),v=Qe(()=>Si(d.GIVEN,o()));Pa(g,{get elementInfo(){return f(v)}});var m=G(g,2),E=Qe(()=>Si(d.REGIONS,o()));Pa(m,{get elementInfo(){return f(E)}});var O=G(m,2);dt(O,1,()=>r().entries(),([I,w])=>I,(I,w)=>{let A=()=>f(w)[0];var D=Ne(),M=ae(D);{var z=W=>{var F=O2(),P=ae(F);xp(P,{get toolId(){return A()},get elementHandlers(){return o()}});var X=G(P,2);Rp(X,{get toolId(){return A()}}),T(W,F)};oe(M,W=>{$b(A())&&W(z)})}T(I,D)}),T(u,p)}}}),_e()}var w2=le('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Zc(t,e){de(e,!1);const n=R();let r=$(e,"value",8),i=$(e,"onChangeCb",8,void 0),o=R(void 0);function a(m){const E=Vc(m);E&&i()&&i()(E)}k(()=>ee(r()),()=>{y(n,r())}),k(()=>(f(n),Vc),()=>{Eu(f(n))&&y(o,Vc(f(n)))}),ye(),ve();var c=w2(),u=Z(c);const _=Qe(()=>pp(f(n)));var p=Z(u);nn(p),j(u);var g=G(u,2),v=G(Z(g),2);nn(v),S(v,"spellcheck",!1),S(v,"maxlength",30),j(g),j(c),ne(()=>{S(u,"style",`--choosen-color: ${f(o)??""}`),At(u,"transparent",f(_))}),Xn(p,()=>f(n),m=>y(n,m)),Ge("change",p,()=>a(f(n))),Xn(v,()=>f(n),m=>y(n,m)),Ge("input",v,()=>a(f(n))),T(t,c),_e()}var y2=le('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function os(t,e){let n=$(e,"name",8);var r=y2(),i=Z(r),o=Z(i,!0);j(i);var a=G(i,2);ft(a,e,"default",{}),j(r),ne(()=>it(o,n())),T(t,r)}var L2=le('<input class="control-slider svelte-1rsuho6" type="range">');function A2(t,e){de(e,!1);let n=$(e,"min",8),r=$(e,"max",8),i=$(e,"value",12),o=$(e,"step",24,()=>(r()-n())/10),a=$(e,"onChangeCb",8,void 0),c=$(e,"onInputCb",8,void 0);ve();var u=L2();nn(u),ne(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",o())}),Xn(u,i),Ge("change",u,()=>{a()&&a()(i())}),Ge("input",u,()=>{c()&&c()(i())}),T(t,u),_e()}function Qr(t,e){let n=$(e,"name",8),r=$(e,"value",12),i=$(e,"min",8),o=$(e,"max",8),a=$(e,"step",24,()=>(o()-i())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);os(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,p)=>{A2(_,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var S2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function N2(t){var e=S2();T(t,e)}var x2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function R2(t){var e=x2();T(t,e)}var T2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function D2(t){var e=T2();T(t,e)}var k2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function G2(t){var e=k2();T(t,e)}var M2=le('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function U2(t,e){de(e,!1);const n=[];let r=$(e,"value",8),i=$(e,"selectedShape",12),o=$(e,"title",8),a=$(e,"updateShapeCb",8,void 0);ve();var c=M2(),u=Z(c);nn(u);var _,p=G(u,2);ft(p,e,"default",{}),j(c),ne(()=>{S(c,"title",o()),At(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Va(n,[],u,()=>(r(),i()),i),Ge("change",u,()=>a()&&a()(r())),T(t,c),_e()}var $2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function F2(t){var e=$2(),n=Z(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),j(e),T(t,e)}var P2=le('<div class="icon-wrapper svelte-18euf14"><!></div>'),H2=le('<div class="radio-container svelte-18euf14"></div>');function B2(t,e){de(e,!1);let n=$(e,"name",8),r=$(e,"selectedShape",8),i=$(e,"possibleShapes",8),o=$(e,"updateShapeCb",8,void 0);const a=new Map([[B.CIRCLE,D2],[B.ELLIPSE,F2],[B.SQUARE,R2],[B.RECTANGLE,N2],[B.POLYGON,G2]]);ve(),os(t,{get name(){return n()},children:(c,u)=>{var _=H2();dt(_,5,i,St,(p,g)=>{U2(p,{get title(){return f(g)},get value(){return f(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=Ne(),O=ae(E);{var I=w=>{var A=P2(),D=Z(A);dh(D,()=>a.get(f(g)),(M,z)=>{z(M,{})}),j(A),T(w,A)};oe(O,w=>{a.has(f(g))&&w(I)})}T(v,E)},$$slots:{default:!0}})}),j(_),T(c,_)},$$slots:{default:!0}}),_e()}var W2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function z2(t){var e=W2();T(t,e)}var Y2=le('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),j2=le("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function K2(t,e){de(e,!1);const n=Ke(),r=()=>Ce(on,"$toolStore",n),i=()=>Ce(Bt,"$currentConstraintStore",n),o=R(),a=R(),c=R();let u=R(!0),_=$(e,"elementHandlers",8);function p(I,w){const A=(I==null?void 0:I.shape)??(w?du(w):void 0);return qc(A),A}function g(I,w){f(c)&&(mb(c,f(c)[I]=w),qc(f(c)))}function v(){f(a)&&(y(c,du(f(a))),qc(f(c)))}function m(I){return I&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(I)}function E(I){return I&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(I)}function O(I){return I&&[B.ELLIPSE,B.RECTANGLE].includes(I)}k(()=>(r(),ee(_())),()=>{y(o,Si(r(),_()))}),k(()=>f(o),()=>{y(a,f(o).shape)}),k(()=>(i(),f(a)),()=>{var I;y(c,p(((I=i())==null?void 0:I.constraint)??null,f(a)))}),ye(),ve(),al(t,{get isOpen(){return f(u)},set isOpen(I){y(u,I)},$$slots:{"panel-header":(I,w)=>{sl(I,{slot:"panel-header",title:"Shape Editor",get isOpen(){return f(u)},set isOpen(A){y(u,A)},$$slots:{"title-icon":(A,D)=>{z2(A)}},$$legacy:!0})},"panel-content":(I,w)=>{var A=Ne(),D=ae(A);{var M=z=>{var W=j2(),F=ae(W);{var P=Fe=>{var Oe=Y2();Ge("click",Oe,v),T(Fe,Oe)};oe(F,Fe=>{zb(f(a))&&Fe(P)})}var X=G(F,2);{var re=Fe=>{B2(Fe,{get possibleShapes(){return f(a).allowedTypes},name:"Shape",get selectedShape(){return f(c).type},updateShapeCb:Oe=>g("type",Oe)})};oe(X,Fe=>{var Oe;f(a).allowedTypes&&f(a).allowedTypes.length&&((Oe=f(c))!=null&&Oe.type)&&Fe(re)})}var q=G(X,2);{var J=Fe=>{var Oe=Qe(()=>f(a).n.lb??3),Re=Qe(()=>f(a).n.ub??10);Qr(Fe,{name:"Number of Sides",get value(){return f(c).n},get min(){return f(Oe)},get max(){return f(Re)},step:1,onChangeCb:Me=>g("n",Me)})};oe(q,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.n)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.n)!=null&&Me.editable)&&E(f(c).type)&&Fe(J)})}var fe=G(q,2);{var pe=Fe=>{var Oe=Qe(()=>f(a).r.lb??0),Re=Qe(()=>f(a).r.ub??1),Me=Qe(()=>f(a).r.step??.05);Qr(Fe,{name:"Radius",get value(){return f(c).r},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("r",yt)})};oe(fe,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.r)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.r)!=null&&Me.editable)&&m(f(c).type)&&Fe(pe)})}var be=G(fe,2);{var Ae=Fe=>{var Oe=Qe(()=>f(a).width.lb??0),Re=Qe(()=>f(a).width.ub??1),Me=Qe(()=>f(a).width.step??.05);Qr(Fe,{name:"Width",get value(){return f(c).width},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("width",yt)})};oe(be,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.width)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.width)!=null&&Me.editable)&&O(f(c).type)&&Fe(Ae)})}var Ue=G(be,2);{var xe=Fe=>{var Oe=Qe(()=>f(a).height.lb??0),Re=Qe(()=>f(a).height.ub??1),Me=Qe(()=>f(a).height.step??.05);Qr(Fe,{name:"Height",get value(){return f(c).height},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("height",yt)})};oe(Ue,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.height)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.height)!=null&&Me.editable)&&O(f(c).type)&&Fe(xe)})}var me=G(Ue,2);{var nt=Fe=>{var Oe=Qe(()=>f(a).angle.lb??0),Re=Qe(()=>f(a).angle.ub??360),Me=Qe(()=>f(a).angle.step??15);Qr(Fe,{name:"Angle",get value(){return f(c).angle},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("angle",yt)})};oe(me,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.angle)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.angle)!=null&&Me.editable)&&Fe(nt)})}var $e=G(me,2);{var wt=Fe=>{var Oe=Qe(()=>f(a).inset.lb??0),Re=Qe(()=>f(a).inset.ub??.5),Me=Qe(()=>f(a).inset.step??.01);Qr(Fe,{name:"Inset",get value(){return f(c).inset},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("inset",yt)})};oe($e,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.inset)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.inset)!=null&&Me.editable)&&Fe(wt)})}var xt=G($e,2);{var sn=Fe=>{os(Fe,{name:"Stroke",children:(Oe,Re)=>{Zc(Oe,{get value(){return f(c).stroke},onChangeCb:Me=>g("stroke",Me)})},$$slots:{default:!0}})};oe(xt,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.stroke)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.stroke)!=null&&Me.editable)&&Fe(sn)})}var Rt=G(xt,2);{var kt=Fe=>{var Oe=Qe(()=>f(a).strokeWidth.lb??0),Re=Qe(()=>f(a).strokeWidth.ub??.8),Me=Qe(()=>f(a).strokeWidth.step??.01);Qr(Fe,{name:"Stroke Width",get value(){return f(c).strokeWidth},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("strokeWidth",yt)})};oe(Rt,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.strokeWidth)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.strokeWidth)!=null&&Me.editable)&&Fe(kt)})}var Cr=G(Rt,2);{var Vt=Fe=>{var Oe=Qe(()=>f(a).strokeDasharray.lb??0),Re=Qe(()=>f(a).strokeDasharray.ub??1),Me=Qe(()=>f(a).strokeDasharray.step??.01);Qr(Fe,{name:"Stroke Dasharray",get value(){return f(c).strokeDasharray},get min(){return f(Oe)},get max(){return f(Re)},get step(){return f(Me)},onChangeCb:yt=>g("strokeDasharray",yt)})};oe(Cr,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.strokeDasharray)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.strokeDasharray)!=null&&Me.editable)&&Fe(Vt)})}var er=G(Cr,2);{var $i=Fe=>{os(Fe,{name:"Fill",children:(Oe,Re)=>{Zc(Oe,{get value(){return f(c).fill},onChangeCb:Me=>g("fill",Me)})},$$slots:{default:!0}})};oe(er,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.fill)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.fill)!=null&&Me.editable)&&Fe($i)})}var cr=G(er,2);{var Or=Fe=>{os(Fe,{name:"Font Color",children:(Oe,Re)=>{Zc(Oe,{get value(){return f(c).fontColor},onChangeCb:Me=>g("fontColor",Me)})},$$slots:{default:!0}})};oe(cr,Fe=>{var Oe,Re,Me;((Oe=f(c))==null?void 0:Oe.fontColor)!==void 0&&((Me=(Re=f(a))==null?void 0:Re.fontColor)!=null&&Me.editable)&&Fe(Or)})}T(z,W)};oe(D,z=>{f(a)&&z(M)})}T(I,A)}},$$legacy:!0}),_e()}var V2=le('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ns(t,e){let n=$(e,"clickCb",8),r=$(e,"title",8);var i=V2(),o=Z(i),a=Z(o);ft(a,e,"default",{}),j(o),j(i),ne(()=>S(i,"title",r())),Ge("click",i,Zn(function(...c){var u;(u=n())==null||u.apply(this,c)})),T(t,i)}var X2=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function q2(t){var e=X2();T(t,e)}var Z2=le('<div class="buttons-container svelte-kc00rw"><!></div>');function ll(t,e){var n=Z2(),r=Z(n);ft(r,e,"default",{}),j(n),T(t,n)}var Q2=le('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),J2=le('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),eD=le('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function tD(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Fr,"$puzzleMetaStore",n),i=()=>Ce(Pr,"$globalConstraintsStore",n),o=()=>Ce(vt,"$localConstraintsStore",n);let a=$(e,"showModal",12,!1),c=R(""),u=R(""),_=R(""),p=R(""),g=R("");function v(){a(!1)}function m(){const w=f(u)?E(f(u)):["Anonymous"],D={title:f(c)?f(c):"Sudoku",authors:w,ruleset:f(_),ctcYoutubeUrl:f(p),ctcUrl:f(g)};IT(D),a(!1)}function E(w){return w.split(/\s*[;]\s*/)}function O(){var W,F,P,X;let w="";const A=Mt,D=i();!!D.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[re,q]of D.entries())if(re!==d.SUDOKU_RULES_DO_NOT_APPLY&&q){const J=A[re],fe=((W=J.menu)==null?void 0:W.name)??J.toolId,pe=(F=J.meta)==null?void 0:F.description;w+=`**${fe}**: ${pe}

`}const z=o();for(const[re,q]of z.entries())if(Object.keys(q).length>0){const fe=A[re],pe=((P=fe.menu)==null?void 0:P.name)??fe.toolId,be=(X=fe.meta)==null?void 0:X.description;w+=`**${pe}**: ${be}

`}return w.trim()}function I(){const w=O();y(_,w)}k(()=>(ee(a()),r(),Ga),()=>{if(!a()){const w=r().authors;y(c,r().title??""),y(u,w?Ga(w,"; ","; "):""),y(_,r().ruleset??""),y(p,r().ctcYoutubeUrl??""),y(g,r().ctcUrl??"")}}),ye(),ve(),Hr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,A)=>{var D=eD(),M=Z(D);ei(M,{title:"Title"});var z=G(M,2);nn(z);var W=G(z,2);ei(W,{title:"Authors"});var F=G(W,2);nn(F);var P=G(F,2);ei(P,{title:"Ruleset",children:(be,Ae)=>{var Ue=Q2();Ge("click",Ue,I),T(be,Ue)},$$slots:{default:!0}});var X=G(P,2);ib(X),S(X,"rows",8);var re=G(X,2);ei(re,{title:"CTC Link"});var q=G(re,2);nn(q);var J=G(q,2);ei(J,{title:"CTC Youtube Link"});var fe=G(J,2);nn(fe);var pe=G(fe,2);ll(pe,{children:(be,Ae)=>{var Ue=J2(),xe=ae(Ue),me=G(xe,2);Ge("click",xe,m),Ge("click",me,v),T(be,Ue)},$$slots:{default:!0}}),j(D),Xn(z,()=>f(c),be=>y(c,be)),Xn(F,()=>f(u),be=>y(u,be)),Xn(X,()=>f(_),be=>y(_,be)),Xn(q,()=>f(g),be=>y(g,be)),Xn(fe,()=>f(p),be=>y(p,be)),T(w,D)},$$slots:{default:!0},$$legacy:!0}),_e()}var nD=le("<!> <!>",1);function rD(t){let e=R(!1);function n(){y(e,!0)}var r=nD(),i=ae(r);Ns(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{q2(a)},$$slots:{default:!0}});var o=G(i,2);tD(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var iD=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function oD(t){var e=iD();T(t,e)}var sD=le('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function aD(t,e){de(e,!1);let n=R(null),r=R(null);function i(){var o;(o=f(n))==null||o.click()}k(()=>(f(r),Fa),()=>{if(f(r)&&f(r).length){const o=f(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),p=sT(_);console.log(p),ST(p),Fa()}},a.onerror=function(){alert(a.error)}}}),ye(),ve(),Ns(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=sD(),u=ae(c);oD(u);var _=G(u,2);Li(_,p=>y(n,p),()=>f(n)),kb(_,()=>f(r),p=>y(r,p)),T(o,c)},$$slots:{default:!0}}),_e()}var lD=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function cD(t){var e=lD();T(t,e)}var uD=le('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Pg(t,e){de(e,!1);let n=$(e,"name",8),r=$(e,"min",8),i=$(e,"max",8),o=$(e,"value",12),a=$(e,"step",24,()=>(i()-r())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);ve();var _=uD(),p=Z(_),g=Z(p);j(p);var v=G(p,2);nn(v),j(_),ne(()=>{it(g,`${n()??""}: ${o()??""}`),S(v,"min",r()),S(v,"max",i()),S(v,"step",a())}),Xn(v,o),Ge("change",v,()=>{c()&&c()(o())}),Ge("input",v,()=>{u()&&u()(o())}),T(t,_),_e()}var dD=le('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),_D=le('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function fD(t,e){de(e,!1);let n=$(e,"showModal",12,!1);const r=4,i=20;let o=R(9),a=R(9),c=R(""),u=R(bt.range(1,10));function _(){n(!1)}function p(){Fa(),AT(f(a),f(o),f(u).sort()),n(!1)}function g(E){return E.map(I=>String(I)).join(",")}function v(){const E=Math.min(Math.max(f(a),f(o)),9);y(u,bt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&y(u,E.replaceAll(" ","").split(",").map(Number))}ve(),Hr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,O)=>{var I=_D(),w=Z(I);Pg(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return f(o)},set value(F){y(o,F)},$$legacy:!0});var A=G(w,2);Pg(A,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return f(a)},set value(F){y(a,F)},$$legacy:!0});var D=G(A,2),M=Qe(()=>`Allowed Digits (for the solver): ${g(f(u))}`);ei(D,{get title(){return f(M)}});var z=G(D,2);nn(z),ne(()=>S(z,"placeholder",g(f(u))));var W=G(z,2);ll(W,{children:(F,P)=>{var X=dD(),re=ae(X),q=G(re,2);Ge("click",re,p),Ge("click",q,_),T(F,X)},$$slots:{default:!0}}),j(I),Xn(z,()=>f(c),F=>y(c,F)),Ge("input",z,()=>m(f(c))),T(E,I)},$$slots:{default:!0},$$legacy:!0}),_e()}var gD=le("<!> <!>",1);function hD(t){let e=R(!1);function n(){y(e,!0)}var r=gD(),i=ae(r);Ns(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{cD(a)},$$slots:{default:!0}});var o=G(i,2);fD(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var pD=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function vD(t){var e=pD();T(t,e)}var mD=le('<button class="modal-button">Cancel</button>'),ED=le('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function CD(t,e){de(e,!1);const n=Ke(),r=()=>Ce(so,"$svgRefStore",n),i=()=>Ce(Fr,"$puzzleMetaStore",n),o=()=>Ce(As,"$puzzleStore",n),a=R();let c=$(e,"showModal",12,!1);function u(I){const w=getComputedStyle(I);let A="";for(let D of w){const M=w.getPropertyValue(D);M&&(A+=`${D}:${M};`)}return A}function _(I){const w=I.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(I));const A=I.childNodes;for(let D=0;D<A.length;D++){const M=A[D];if(M instanceof Element){const z=_(M);w.replaceChild(z,w.childNodes[D])}}return w}function p(I){if(!I)return;const w=_(I),A=Ma(i()),M=new XMLSerializer().serializeToString(w),z=new Image,W=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),F=URL.createObjectURL(W);z.onload=()=>{const P=I.getBoundingClientRect(),X=P.width,re=P.height,q=document.createElement("canvas"),J=window.devicePixelRatio||1;q.width=X*J,q.height=re*J;const fe=q.getContext("2d");fe&&(fe.scale(J,J),fe.drawImage(z,0,0,X,re),q.toBlob(pe=>{if(!pe)return;const be=URL.createObjectURL(pe),Ae=document.createElement("a");Ae.href=be,Ae.download=A,Ae.click(),URL.revokeObjectURL(be)}))},z.src=F}function g(I,w="download.svg"){if(!I)return;const A=_(I);let M=new XMLSerializer().serializeToString(A);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const z=new Blob([M],{type:"image/svg+xml"}),W=URL.createObjectURL(z),F=document.createElement("a");F.href=W,F.download=w,F.click(),URL.revokeObjectURL(W)}const v=I=>{const w=oT(o());return JSON.stringify(w,null,I)},m=()=>{function I(D,M,z){var W=document.createElement("a"),F=new Blob([D],{type:z});W.href=URL.createObjectURL(F),W.download=M,W.click(),URL.revokeObjectURL(W.href)}const w=v(2),A=Ma(i());I(w,`${A}.json`,"text/plain")};function E(){c(!1)}const O=1;k(()=>r(),()=>{y(a,r())}),ye(),ve(),Hr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(I){c(I)},children:(I,w)=>{var A=ED(),D=Z(A),M=Z(D),z=Z(M),W=G(z,2),F=G(W,2);j(M);var P=G(M,2),X=G(Z(P),2),re=Z(X);S(re,"width",400*O),S(re,"height",300*O),j(X),j(P),j(D);var q=G(D,2);ll(q,{children:(J,fe)=>{var pe=mD();Ge("click",pe,E),T(J,pe)},$$slots:{default:!0}}),j(A),Ge("click",z,m),Ge("click",W,()=>p(f(a))),Ge("click",F,()=>g(f(a))),T(I,A)},$$slots:{default:!0},$$legacy:!0}),_e()}var OD=le("<!> <!>",1);function ID(t){let e=R(!1);function n(){y(e,!0)}var r=OD(),i=ae(r);Ns(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{vD(a)},$$slots:{default:!0}});var o=G(i,2);CD(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var bD=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function kp(t){var e=bD();T(t,e)}var wD=le('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),yD=le('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Sa(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0);var i=yD(),o=Z(i);ei(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=G(o,2);ol(a,{get isOpen(){return r()},children:(c,u)=>{var _=wD(),p=Z(_);ft(p,e,"default",{}),j(_),T(c,_)},$$slots:{default:!0}}),j(i),T(t,i)}var LD=le('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function AD(t,e){let n=$(e,"value",8),r=$(e,"onClickCb",8),i=$(e,"disabled",8,!1);var o=LD(),a=Z(o);nn(a),yi(2),j(o),ne(()=>{At(o,"disabled",i()),ch(a,n()),a.disabled=i()}),Ge("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,o)}var SD=le('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Jr(t,e){de(e,!1);let n=$(e,"value",8),r=$(e,"name",8),i=$(e,"updateCb",8,void 0),o=$(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}ve();var c=SD(),u=Z(c);AD(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var _=G(u,2),p=Z(_,!0);j(_),j(c),ne(()=>{At(c,"disabled",o()),it(p,r())}),Ge("click",_,Zn(a)),T(t,c),_e()}var ND=le("<!> <!>",1),xD=le("<!> <!> <!>",1),RD=le("<!> <!>",1),TD=le('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Gp(t,e){de(e,!1);const n=Ke(),r=()=>Ce(ii,"$settingsStore",n),i=()=>Ce(rl,"$gameModeStore",n),o=R();let a=$(e,"showModal",12,!1);k(()=>r(),()=>{y(o,r())}),ye(),ve(),Hr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=TD(),p=Z(_);Sa(p,{title:"General",children:(O,I)=>{Jr(O,{get value(){return f(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Eb})},$$slots:{default:!0}});var g=G(p,2);Sa(g,{title:"Tools",children:(O,I)=>{var w=ND(),A=ae(w);Jr(A,{get value(){return f(o).penToolActive},name:"Pen Tool",updateCb:Cb});var D=G(A,2);Jr(D,{disabled:!0,get value(){return f(o).letterToolActive},name:"Letter Tool",updateCb:Ob}),T(O,w)},$$slots:{default:!0}});var v=G(g,2);Sa(v,{title:"Gameplay",children:(O,I)=>{var w=xD(),A=ae(w);Jr(A,{name:"Check Conflicts",get value(){return f(o).checkConflicts},updateCb:Ib});var D=G(A,2);Jr(D,{name:"Highlight Pencilmark Conflicts",get value(){return f(o).highlightPencilmarkConflicts},updateCb:bb});var M=G(D,2);Jr(M,{name:"Highlight Cells Seen By Selection",get value(){return f(o).highlightCellsSeenBySelection},updateCb:wb}),T(O,w)},$$slots:{default:!0}});var m=G(v,2);{var E=O=>{Sa(O,{title:"Setting Mode Display",children:(I,w)=>{var A=RD(),D=ae(A);Jr(D,{name:"Hide Fog",get value(){return f(o).hideFog},updateCb:yb});var M=G(D,2);Jr(M,{name:"Show Solution",get value(){return f(o).showSolution},updateCb:Lb}),T(I,A)},$$slots:{default:!0}})};oe(m,O=>{i()===_o.SETTING&&O(E)})}j(_),T(c,_)},$$slots:{default:!0},$$legacy:!0}),_e()}var DD=le("<!> <!>",1);function kD(t){let e=R(!1);function n(){y(e,!0)}var r=DD(),i=ae(r);Ns(i,{title:"Settings",clickCb:n,children:(a,c)=>{kp(a)},$$slots:{default:!0}});var o=G(i,2);Gp(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var GD=le('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function MD(t){var e=GD(),n=Z(e);hD(n);var r=G(n,2);ID(r);var i=G(r,2);aD(i,{});var o=G(i,2);rD(o);var a=G(o,2);kD(a),j(e),T(t,e)}var UD=le('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function $D(t,e){de(e,!1);let n=R(!1);function r(){const i=ct(bn),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const p=_.value;c.push(p)}o.push(c)}fd(o)}ve(),al(t,{get isOpen(){return f(n)},set isOpen(i){y(n,i)},$$slots:{"panel-header":(i,o)=>{sl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return f(n)},set isOpen(a){y(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=UD();Ge("click",a,r),T(i,a)}},$$legacy:!0}),_e()}const FD={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function PD(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function HD(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function BD(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function WD(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Mp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function zD(t,e){const n=HD(t);if(n)return{type:"number",parsed:parseInt(n)};const r=BD(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=WD(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=PD(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=Mp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var K=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(K||{});function _t(t,e){return`${e}[${t.r},${t.c}]`}function ki(t,e){return t.map(r=>_t(r,e))}function Ie(t,e){return"["+ki(t,e).join(",")+"]"}function we(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function at(t){return t.map(n=>we(n))}function bi(t){return`constraint alldifferent([${t.join(",")}]);
`}function ut(t,e){return t&&(t=`
% ${e}
`+t),t}function cl(t,e){const n=[Pe.N,Pe.S,Pe.W,Pe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function vd(t,e,n=void 0){n||(n=[Pe.N,Pe.S,Pe.W,Pe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+at(o).join(",")+"]";r.push(a)}return r}function ul(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class YD{constructor(e){Ee(this,"model_str","");Ee(this,"used_vars");Ee(this,"puzzle");Ee(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=FD){const i=zD(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];o+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];o+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const _ of c){const p=parseInt(_);Number.isNaN(p)&&!this.hasVariable(_)&&(o+=`var int: ${_};
`,this.addVariable(_))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function jD(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,_=0,p=0;for(let w=0;w<e.length;w++){const A=e[w].trim(),D=A.match(r),M=A.match(i),z=A.match(o),W=A.match(a);if(!c&&(D||M||z||W)){c={name:(D||M||z||W)[1],startLine:w,content:[e[w]],type:D?"function":M?"predicate":z?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,_=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,p=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[w]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,_+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,p+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&_===0&&p===0&&A.endsWith(";"))){n[c.name]={...c,endLine:w};let F=c.startLine;for(;F>0&&e[F-1].trim().startsWith("%");)F-=1;n[c.name].startLine=F,c=null}}function g(w){const A=[],D=w.match(r),M=w.match(i),z=w.match(o);for(const W of Object.keys(n)){const F=n[W].type;if(F==="function"||F==="test"||F==="predicate"){if(D||M||z)continue;new RegExp(`\\b${W}\\s*\\(`,"g").test(w)&&A.push(W)}else if(F==="variable"){const P=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${W}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match(P))continue;new RegExp(`\\b${W}\\b`,"g").test(w)&&A.push(W)}}return A}const v=new Set;for(const w of e)g(w).forEach(D=>v.add(D));console.log("usedDefinitions",v);const m=Object.values(n).filter(w=>!v.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,A)=>A.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const O=[];let I=!1;for(const w of E)w.trim()===""?I||(O.push(w),I=!0):(O.push(w),I=!1);return O.join(`
`)}function Hg(t){let e=t,n=e.length;for(;e=jD(e),e.length!=n;)n=e.length;return e}function Up(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function KD(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const p=e.getCell(c,_);!p||p.region===null?u.push(r-1):u.push(p.region)}o.push(u)}const a=Up(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function md(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Ht(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function VD(t,e){const r=t.grid.getPositiveDiagonal(),i=at(r);let o=bi(i);return o=`
% Positive Diagonal Constraint
`+o,o}function XD(t,e){const r=t.grid.getNegativeDiagonal(),i=at(r);let o=bi(i);return o=`
% Negative Diagonal Constraint
`+o,o}function qD(t,e){const r=t.grid.getPositiveDiagonal(),o="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function ZD(t,e){const r=t.grid.getNegativeDiagonal(),o="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function QD(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,_),v=n.getCell(u,_+(u-p));if(!g||!v)continue;const m=we(g),E=we(v),I=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=I}}return o}function JD(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,_),v=n.getCell(u,_-(u-p));if(!g||!v)continue;const m=we(g),E=we(v),I=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=I}}return o}function ek(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),_=`constraint alldifferent(${`[${at(a).join(",")}]`});
`;r+=_}return r}function tk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=we(i),_=`[${at(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${_});
`;r+=p}return r}function nk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=we(i),_=`[${at(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${_});
`;r+=p}return r}function rk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=ut(n,`${e}`),n}function ik(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=ut(n,`${e}`),n}function ok(t,e){let n="";return n+=`constraint tango_p(board);
`,n=ut(n,`${e}`),n}function sk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=ut(n,`${e}`),n}function*Br(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function ak(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Br(n)){const a=we(i),c=we(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function lk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Br(n)){const a=we(i),c=we(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function ck(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${at(o).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function uk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function dk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function _k(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=ut(n,`${e}`),n}function Qc(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),p=c.value;(e===d.ALL_V_GIVEN&&(p==="v"||p==="V")||e===d.ALL_X_GIVEN&&(p==="x"||p==="X")||e===d.ALL_XV_GIVEN)&&o.push(_)}let a="";for(const[c,u]of Br(n)){if(o.find(v=>v.has(c)&&v.has(u)))continue;const p=we(c),g=we(u);if(e===d.ALL_V_GIVEN){const v=`constraint ${p} + ${g} != 5;
`;a+=v}else if(e===d.ALL_X_GIVEN){const v=`constraint ${p} + ${g} != 10;
`;a+=v}else{const v=`constraint ${p} + ${g} != 5 /\\ (${p} + ${g} != 10);
`;a+=v}}return a=ut(a,`${e}`),a}function ao(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function fk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=ao(n,i);let a="";for(const[c,u]of Br(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const p=we(c),g=we(u);let v="";if(c.r==u.r){const O=n.getRow(c.r)[0];v=we(O)}else if(c.c==u.c){const O=n.getCol(c.c)[0];v=we(O)}if(!v)continue;const m=`constraint abs(${p} - ${g}) != ${v};
`;a+=m}return a=ut(a,`${e}`),a}function gk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=ao(n,i);a=[...a,...ao(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"1"));const u=[...new Set(c)];let _="";for(const[p,g]of Br(n)){if(a.find(O=>O.has(p)&&O.has(g)))continue;const m=we(p),E=we(g);for(const O of u){const I=parseInt(O),w=`constraint abs(${m} - ${E}) != ${I};
`;_+=w}}return _=ut(_,`${e}`),_}function hk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=ao(n,i);a=[...a,...ao(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"2"));const u=[...new Set(c)];let _="";for(const[p,g]of Br(n)){if(a.find(O=>O.has(p)&&O.has(g)))continue;const m=we(p),E=we(g);for(const O of u){const I=parseInt(O),w=`constraint not ratio_p(${m}, ${E}, ${I});
`;_+=w}}return _=ut(_,`${e}`),_}function pk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=ao(n,i);let a="";for(const[c,u]of Br(n)){if(o.find(O=>O.has(c)&&O.has(u)))continue;const p=we(c),g=we(u),v=_t(c,K.YIN_YANG),m=_t(u,K.YIN_YANG),E=`constraint not yin_yang_kropki_p(${p}, ${g}, ${v}, ${m});
`;a+=E}return a=ut(a,`${e}`),a}function vk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,_){return u.find(p=>p.cell.r===_.r&&p.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(o,u),p=_?_.directions:[],g=we(u),v=[Pe.E,Pe.N,Pe.S,Pe.W];for(const m of v){if(p.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),O=Ie(E,K.YIN_YANG);c+=`constraint count(${O}, 1) != ${g};
`}}return c=ut(c,`${e}`),c}function Ed(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function mk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=Ed(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=n.getRow(c.r),g=`[${at(_).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${g}, ${v});
`;a+=m}return a=ut(a,`${e}`),a}function Ek(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=Ed(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=we(c),[p,g,v,m]=vd(n,c),E=`constraint not radar_p(${_}, ${p}, ${g}, ${v}, ${m}, 9);
`;a+=E}return a=ut(a,`${e}`),a}function Ck(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=Ed(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=v}return a=ut(a,`${e}`),a}function Ok(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Br(n)){const a=we(i),c=we(o),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${o.r},${o.c}]`,p=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=p}return r}function Ik(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(p=>n.getCell(p.r,p.c)).filter(p=>!!p),_=Ie(u,K.YIN_YANG);o+=`constraint count_unique_values(${_}) >= 2;
`}return o}function bk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=K.YIN_YANG;for(const[o,a]of Br(n)){const c=we(o),u=we(a),_=`${i}[${o.r},${o.c}]`,p=`${i}[${a.r},${a.c}]`,g=`constraint (${_} == 1 /\\ ${p} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function wk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=ut(n,`${e}`),n}function yk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=ut(n,`${e}`),n}function Lk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=ut(n,`${e}`),n}function Ak(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=ut(n,`${e}`),n}function Sk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=ut(n,`${e}`),n}function Nk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=ut(n,`${e}`),n}function xk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=ut(n,`${e}`),n}function Rk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=ut(n,`${e}`),n}function Tk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=ut(n,`${e}`),n}function Dk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=ut(n,`${e}`),n}function kk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=_t(i,K.BOARD),c=_t(i,K.YIN_YANG),u=Ie(o,K.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=ut(n,`${e}`),n}function Gk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=ut(n,`${e}`),n}function Mk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=ut(n,`${e}`),n}function Uk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=ut(n,`${e}`),n}function $k(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=ut(n,`${e}`),n}function Fk(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=ut(n,`${e}`),n}function Pk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=ut(n,`${e}`),n}function Hk(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=ut(n,`${e}`),n}function Bk(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(_=>_.r))],u=[...new Set(a.map(_=>_.c))];for(const _ of u){const p=a.filter(v=>v.c===_),g=Ie(p,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}for(const _ of c){const p=a.filter(v=>v.r===_),g=Ie(p,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}}return n=ut(n,`${e}`),n}function Wk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=at(u),p=bi(_);r+=p}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),_=at(u),p=bi(_);r+=p}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),p=at(_),g=bi(p);r+=g}}return r}function zk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const Yk=new Map([[d.POSITIVE_DIAGONAL,VD],[d.NEGATIVE_DIAGONAL,XD],[d.POSITIVE_ANTIDIAGONAL,qD],[d.NEGATIVE_ANTIDIAGONAL,ZD],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,QD],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,JD],[d.ANTIKING,tk],[d.ANTIKNIGHT,nk],[d.ANTI_LONG_KNIGHT,ik],[d.ANTI_GIRAFFE,rk],[d.DISJOINT_GROUPS,ek],[d.TANGO,ok],[d.NONCONSECUTIVE,ak],[d.NONRATIO,lk],[d.ANTI_ENTROPY,sk],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,Bk],[d.GLOBAL_INDEXING_COLUMN,ck],[d.ALL_V_GIVEN,Qc],[d.ALL_X_GIVEN,Qc],[d.ALL_XV_GIVEN,Qc],[d.ALL_DIFFERENCES_GIVEN,gk],[d.ALL_RATIOS_GIVEN,hk],[d.ALL_XY_DIFFERENCES_GIVEN,fk],[d.ALL_YIN_YANG_KROPKI_GIVEN,pk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,vk],[d.ALL_INDEXING_COLUMN_GIVEN,mk],[d.ALL_RADARS_GIVEN,Ek],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Ck],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Ok],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Ik],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,_k],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,uk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,dk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,wk],[d.CAVE_CELLS_ARE_ODD,Lk],[d.CAVE_WALLS_ARE_EVEN,Ak],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Sk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Nk],[d.YIN_YANG_FILLOMINO_PARITY,yk],[d.TWO_SYMMETRIC_GALAXIES,Tk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,xk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Rk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Dk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,kk],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,bk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,Gk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Hk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,Mk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,Uk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,$k],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,Fk],[d.DIRECTED_PATH_IS_PARITY_LINE,Pk]]);function jk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=Yk.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function Cd(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return at(r)}function Od(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${at(n.slice(1)).join(",")}]`}function $p(t,e,n,r){let i="";const a="["+Cd(e,r).join(",")+"]";for(const c of r.lines){const u=Od(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function Kk(t,e,n,r){let i="";const o=Cd(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const p=`constraint average_arrow_p(${Od(e,u)}, ${a});
`;i+=p}}return i}function Vk(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=Ie(o,K.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=Ie(u.slice(1),K.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=$p(t,e,n,r),i}function Xk(t,e,n,r){let i="";const a="["+Cd(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=Od(e,u),p=`constraint bulbous_arrow_p(${a}, ${_});
`;i+=p}return i}const qk=new Map([[d.ARROW,$p],[d.AVERAGE_ARROW,Kk],[d.BULBOUS_ARROW,Xk],[d.CHAOS_CONSTRUCTION_ARROW,Vk]]);function Zk(t,e,n,r){let i="";const o=qk.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function ni(t,e){const n=Ht(t,e.cells);return at(n)}function Fp(t,e,n){const i=`[${ni(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function dl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Id(t,e,n,r,i){const a=`[${ni(e,r).join(",")}]`,c=r.value,u=dl(t,c,n);if(!u)return"";const _=u[1];let p=u[0];return p+=`constraint ${i}(${a}, ${_});
`,p}function Qk(t,e,n,r){const i=ni(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return bi(i);const c=dl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${o}, ${u});
`,_}function Jk(t,e,n,r){const i=ni(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return bi(i);const c=dl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${o}, ${u});
`,_}function e3(t,e,n,r){return Id(t,e,n,r,"sum_cage_p")}function t3(t,e,n,r){return Fp(e,r,"parity_balance_cage_p")}function n3(t,e,n,r){return Fp(e,r,"sum_cage_look_and_say_p")}function r3(t,e,n,r){return Id(t,e,n,r,"divisible_killer_cage_p")}function i3(t,e,n,r){return Id(t,e,n,r,"spotlight_cage_p")}function o3(t,e,n,r){const o=`[${ni(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function s3(t,e,n,r){const o=`[${ni(e,r).join(",")}]`,a=r.value;let c="";const u=dl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const _=r.cells,p=Ht(e,_),g=[];for(const m of p)e.getOrthogonallyAdjacentCells(m).forEach(O=>{!p.includes(O)&&!g.includes(O)&&g.push(O)});const v=Ie(g,K.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${v});
`,c}function Pp(t,e,n,r,i){const o=Ht(e,r.cells),a=Ie(o,K.BOARD),c=Ie(o,K.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function a3(t,e,n,r){return Pp(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function l3(t,e,n,r){return Pp(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function c3(t,e,n,r){const i=Ht(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function u3(t,e,n,r){const i=Ht(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function d3(t,e){let n="";const r=md(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${ni(t,o).join(",")}]`,p=`[${ni(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${p});
`}return n}const _3=new Map([[d.KILLER_CAGE,Qk],[d.INVERTED_KILLER_CAGE,Jk],[d.SUM_CAGE,e3],[d.PARITY_BALANCE_CAGE,t3],[d.SUM_CAGE_LOOK_AND_SAY,n3],[d.DIVISIBLE_KILLER_CAGE,r3],[d.SPOTLIGHT_CAGE,i3],[d.UNIQUE_DIGITS_CAGE,o3],[d.VAULTED_CAGE,s3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,a3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,l3],[d.DOUBLERS_KILLER_CAGE,c3],[d.NEGATORS_KILLER_CAGE,u3]]);function f3(t,e,n,r){let i="";const o=_3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=d3(e,a);i+=c}return i}function g3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function h3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=g3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function p3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,p=c+1,[g,v,m]=h3(e,_),E=Ie(g,K.GALAXY_REGIONS),O=Ie(v,K.GALAXY_REGIONS),I=Ie(m,K.GALAXY_REGIONS);r+=`% galaxy ${p}
`,r+=`constraint galaxy_center_p(${E}, ${O}, ${I}, ${p});
`,r+=`constraint connected_region(${K.GALAXY_REGIONS}, ${p});
`;const w=u.value;if(!w)continue;const A=parseInt(w);r+=`constraint galaxy_sum_p(${K.BOARD}, ${K.GALAXY_REGIONS}, ${A}, ${p});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${K.GALAXY_REGIONS}, ${a});
`,r}function v3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function m3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=v3(t,c,n);if(!u)return"";const _=u[1];let p=u[0],g=[];if(o%1===0&&a%1===0?g=id(i).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=sd(i).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0)),!g.length)return"";const v=Ie(g,K.BOARD),m=Ie(g,K.YIN_YANG);return p+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${_};
`,p}const E3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,m3]]),C3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,p3]]);function O3(t,e,n,r){let i="";const o=C3.get(n),a=E3.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function Bg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return at(n)}function I3(t,e){const r="["+Bg(t,e.cells).join(",")+"]",o="["+Bg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const b3=new Map([[d.CLONE_REGION,I3]]);function w3(t,e,n,r){return ul(e,n,r,b3)}function bd(t,e){const n=Ht(t,e.cells);return at(n)}function wd(t,e,n){const i=`[${bd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Hp(t,e,n,r=""){const o=`[${bd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function y3(t,e,n,r){const o=`[${bd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Mp(a);if(!c)return"";let u="";for(const p of c){const g=parseInt(p);Number.isNaN(g)&&!t.hasVariable(p)&&(u+=`var int: ${p};
`,t.addVariable(p))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${_});
`,u}function L3(t,e,n,r){return Hp(e,r,"corner_sum_p")}function A3(t,e,n,r){return Hp(e,r,"corner_even_count_p")}function S3(t,e,n,r){return wd(e,r,"corner_sum_of_three_equals_the_other_p")}function N3(t,e,n,r){return wd(e,r,"equal_diagonal_differences_p")}function x3(t,e,n,r){return wd(e,r,"product_square_p")}const R3=new Map([[d.QUADRUPLE,y3],[d.CORNER_SUM,L3],[d.CORNER_EVEN_COUNT,A3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,S3],[d.PRODUCT_SQUARE,x3],[d.EQUAL_DIAGONAL_DIFFERENCES,N3]]);function T3(t,e,n,r){let i="";const o=R3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function _l(t,e){const n=Ht(t,e.cells);return at(n)}function D3(t,e,n){const r=_l(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function k3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function fl(t,e,n,r,i,o=""){var m;const a=_l(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:o,p=k3(t,_,n);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint ${i}(${c}, ${u}, ${g});
`,v}function G3(t,e,n,r){const i=_l(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function M3(t,e,n,r){return fl(t,e,n,r,"ratio_p","2")}function U3(t,e,n,r){return fl(t,e,n,r,"abs_difference","1")}function Wg(t,e,n,r){const i=_l(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function $3(t,e,n,r){return fl(t,e,n,r,"edge_sum_p")}function F3(t,e,n,r){return fl(t,e,n,r,"edge_modulo_p")}function P3(t,e,n,r){return D3(e,r,"edge_factor_p")}function H3(t,e,n,r){const i=Ht(e,r.cells),[o,a]=at(i),[c,u]=i;let _="";if(c.r==u.r){const v=e.getRow(c.r)[0];_=we(v)}else if(c.c==u.c){const v=e.getCol(c.c)[0];_=we(v)}return _?`constraint abs(${o} - ${a}) == ${_};
`:""}function B3(t,e,n,r){const i=Ht(e,r.cells),[o,a]=at(i),c=ki(i,K.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${_});
`}function W3(t,e,n,r){const i=Ht(e,r.cells),[o,a]=at(i),c=ki(i,K.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${_});
`}function gl(t,e,n){const r=Ht(t,e.cells),i=ki(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function z3(t,e,n,r){return gl(e,r,K.UNKNOWN_REGIONS)}function Y3(t,e,n,r){return gl(e,r,K.FILLOMINO_REGIONS)}function j3(t,e,n,r){return gl(e,r,K.SUGURU_REGIONS)}function K3(t,e,n,r){return gl(e,r,K.CAVE_SHADING)}const V3=new Map([[d.XV,G3],[d.DIFFERENCE,U3],[d.RATIO,M3],[d.EDGE_INEQUALITY,Wg],[d.ONE_WAY_DOOR,Wg],[d.EDGE_SUM,$3],[d.EDGE_MODULO,F3],[d.EDGE_FACTOR,P3],[d.XY_DIFFERENCES,H3],[d.YIN_YANG_KROPKI,B3],[d.YIN_YANG_WHITE_KROPKI,W3],[d.FILLOMINO_REGION_BORDER,Y3],[d.UNKNOWN_REGION_BORDER,z3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,j3],[d.EDGE_CAVE_ONE_OF_EACH,K3]]);function X3(t,e,n,r){let i="";const o=V3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function q3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function xs(t,e,n=!1){let r=Ht(t,e.cells);return n&&(r=[...new Set(r)]),at(r)}function gt(t,e,n,r=!1){const o=`[${xs(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function lr(t,e,n,r,i,o=""){var v;const c=`[${xs(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,_=q3(t,u,n);if(!_)return"";const p=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${p});
`,g}function yd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${at(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${o});
`}function Z3(t,e,n,r){return gt(e,r,"renban",!0)}function Q3(t,e,n,r){return gt(e,r,"double_renban_p",!0)}function J3(t,e,n,r){return gt(e,r,"renrenbanban_p",!0)}function e5(t,e,n,r){return gt(e,r,"knabner_p",!0)}function t5(t,e,n,r){return gt(e,r,"renban_or_nabner_line_p",!0)}function n5(t,e,n,r){return gt(e,r,"out_of_order_consecutive_line_p")}function r5(t,e,n,r){return lr(t,e,n,r,"whispers","5")}function i5(t,e,n,r){return`constraint whispers(${`[${xs(e,r).join(",")}]`}, 4);
`}function o5(t,e,n,r){return gt(e,r,"strictly_increasing")}function s5(t,e,n,r){return gt(e,r,"fuzzy_thermo_p")}function a5(t,e,n,r){return gt(e,r,"increasing")}function l5(t,e,n,r){return lr(t,e,n,r,"custom_thermo_p")}function c5(t,e,n,r){return gt(e,r,"palindrome")}function u5(t,e,n,r){return lr(t,e,n,r,"sum_line_p")}function d5(t,e,n,r){return gt(e,r,"xv_line_p")}function _5(t,e,n,r){return lr(t,e,n,r,"at_least_x_line_p","10")}function f5(t,e,n,r){return lr(t,e,n,r,"product_line_p")}function g5(t,e,n,r){return lr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function h5(t,e,n,r){return gt(e,r,"adjacent_multiples_line_p")}function p5(t,e,n,r){return gt(e,r,"index_line_p")}function v5(t,e,n,r){return gt(e,r,"zipper_line_p")}function m5(t,e,n,r){return yd(e,r,"segmented_sum_line_p")}function E5(t,e,n,r){return gt(e,r,"segmented_sum_and_renban_line_p")}function C5(t,e,n,r){return yd(e,r,"n_consecutive_renban_line_p")}function O5(t,e,n,r){return yd(e,r,"n_consecutive_fuzzy_sum_line_p")}function I5(t,e,n,r){const i=Ht(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const _=i[u],p=e.getRow(_.r),g=Ie(p,K.BOARD),v=`cycle_${n}_${u}`;a.push(v);const m=_.c+1;o+=`var int: ${v} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function b5(t,e,n,r){return gt(e,r,"adjacent_differences_count_line_p")}function w5(t,e,n,r){return gt(e,r,"same_parity_line_p")}function y5(t,e,n,r){return lr(t,e,n,r,"renban_or_whispers_p","5")}function L5(t,e,n,r){return gt(e,r,"alldifferent",!0)}function A5(t,e,n,r){return gt(e,r,"repeated_digits_line_p")}function S5(t,e,n,r){return gt(e,r,"superfuzzy_arrow_p")}function N5(t,e,n,r){return gt(e,r,"ambiguous_arrow_p",!0)}function x5(t,e,n,r){return gt(e,r,"headless_arrow_p")}function R5(t,e,n,r){return lr(t,e,n,r,"unimodular_line_p","3")}function T5(t,e,n,r){return lr(t,e,n,r,"modular_line_p","3")}function D5(t,e,n,r){return lr(t,e,n,r,"modular_or_unimodular_line_p","3")}function k5(t,e,n,r){return gt(e,r,"arithmetic_sequence_line_p")}function G5(t,e,n,r){return gt(e,r,"odd_even_oscillator_line_p")}function M5(t,e,n,r){return lr(t,e,n,r,"high_low_oscillator_line_p","5")}function U5(t,e,n,r){return gt(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function $5(t,e,n,r){return gt(e,r,"look_and_say_line_p",!0)}function F5(t,e,n,r){const i=Ht(e,r.cells);function o(g){const v=[];let m=null;for(const E of g)E.r!=m?(v.push([E]),m=E.r):v[v.length-1].push(E);return v}const a=o(i);if(a.length<2)return"";const c=a[0],_=`[${at(c).join(",")}]`;let p="";for(let g=1;g<a.length;g++){const v=a[g],E=`[${at(v).join(",")}]`;p+=`constraint sum(${E}) == sum(${_});
`}return p}function P5(t,e,n,r){return gt(e,r,"between_line_p")}function H5(t,e,n,r){return gt(e,r,"tightrope_line_p")}function B5(t,e,n,r){return gt(e,r,"double_arrow_p")}function W5(t,e,n,r){return gt(e,r,"split_peas_p")}function z5(t,e,n,r){return gt(e,r,"parity_count_line_p")}function Y5(t,e,n,r){return gt(e,r,"product_of_ends_equals_sum_of_line_p")}function Bp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function j5(t,e,n,r){let i="";const o=Ht(e,r.cells),a=Bp(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const p=`constraint sum(${Ie(u,K.BOARD)}) == ${c};
`;i+=p}return i}function K5(t,e,n,r){return`constraint entropic_line_p(${`[${xs(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function V5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${xs(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function X5(t,e,n,r){return gt(e,r,"peapods_p")}function q5(t,e,n,r){const i=Ht(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function Z5(t,e,n,r){const i=Ht(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function Ld(t,e,n){const r=Ht(t,e.cells),i=Ie(r,K.BOARD),o=Ie(r,K.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function Q5(t,e,n,r){return Ld(e,r,"yin_yang_unshaded_entropic_line_p")}function J5(t,e,n,r){return Ld(e,r,"yin_yang_indexing_line_coloring_p")}function eG(t,e,n,r){return Ld(e,r,"yin_yang_region_sum_line_p")}function tG(t,e,n,r){const i=Ht(e,r.cells),o=Ie(i,K.VALUES_GRID),a=Ie(i,K.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function Ad(t,e,n){const r=Ht(t,e.cells),i=Ie(r,K.VALUES_GRID);return`constraint ${n}(${i});
`}function nG(t,e,n,r){return Ad(e,r,"between_line_p")}function rG(t,e,n,r){return Ad(e,r,"double_arrow_p")}function iG(t,e,n,r){return Ad(e,r,"strictly_increasing")}function oG(t,e,n,r){const i=Ht(e,r.cells),o=Bp(i);if(o.sort((_,p)=>p.length-_.length),o.length<=1)return"";let a="";const c=o[0],u=Ie(c,K.VALUES_GRID);for(const _ of o.slice(1)){const p=Ie(_,K.VALUES_GRID),g=`constraint subset_p(${u}, ${p});
`;a+=g}return a}const sG=new Map([[d.THERMOMETER,o5],[d.FUZZY_THERMOMETER,s5],[d.SLOW_THERMOMETER,a5],[d.CUSTOM_THERMOMETER,l5],[d.RENBAN_LINE,Z3],[d.DOUBLE_RENBAN_LINE,Q3],[d.RENRENBANBAN_LINE,J3],[d.NABNER_LINE,e5],[d.WHISPERS_LINE,r5],[d.DUTCH_WHISPERS,i5],[d.RENBAN_OR_WHISPERS_LINE,y5],[d.RENBAN_OR_NABNER_LINE,t5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,n5],[d.N_CONSECUTIVE_RENBAN_LINE,C5],[d.PALINDROME,c5],[d.SUM_LINE,u5],[d.PRODUCT_LINE,f5],[d.XV_LINE,d5],[d.AT_LEAST_X_LINE,_5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,g5],[d.SAME_PARITY_LINE,w5],[d.ADJACENT_MULTIPLES_LINE,h5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,b5],[d.LOOK_AND_SAY_LINE,$5],[d.ROW_SUM_LINE,F5],[d.INDEX_LINE,p5],[d.ZIPPER_LINE,v5],[d.SEGMENTED_SUM_LINE,m5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,E5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,O5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,U5],[d.SUPERFUZZY_ARROW,S5],[d.AMBIGUOUS_ARROW,N5],[d.HEADLESS_ARROW,x5],[d.ARITHMETIC_SEQUENCE_LINE,k5],[d.ODD_EVEN_OSCILLATOR_LINE,G5],[d.HIGH_LOW_OSCILLATOR_LINE,M5],[d.UNIQUE_VALUES_LINE,L5],[d.REPEATED_DIGITS_LINE,A5],[d.UNIMODULAR_LINE,R5],[d.MODULAR_LINE,T5],[d.MODULAR_OR_UNIMODULAR_LINE,D5],[d.REGION_SUM_LINE,j5],[d.ENTROPIC_LINE,K5],[d.ENTROPIC_OR_MODULAR_LINE,V5],[d.ROW_CYCLE_THERMOMETER,I5],[d.PEAPODS,X5],[d.BETWEEN_LINE,P5],[d.TIGHTROPE_LINE,H5],[d.DOUBLE_ARROW_LINE,B5],[d.SPLIT_PEAS,W5],[d.PARITY_COUNT_LINE,z5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,Y5],[d.DOUBLERS_THERMOMETER,iG],[d.DOUBLERS_BETWEEN_LINE,nG],[d.DOUBLERS_DOUBLE_ARROW_LINE,rG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,oG],[d.YIN_YANG_SHADED_WHISPERS_LINE,q5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,Q5],[d.YIN_YANG_UNSHADED_MODULAR_LINE,Z5],[d.YIN_YANG_REGION_SUM_LINE,eG],[d.YIN_YANG_INDEXING_LINE_COLORING,J5],[d.GOLDILOCKS_ZONE_REGION_SUM,tG]]);function aG(t,e,n,r){let i="";const o=sG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Rs(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return at(i)}function Gi(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function Jn(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${Rs(e,n).join(",")}]`,u=n.value,_=Gi(t,u,i,o);if(!_)return"";const p=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${p});
`,g}function lG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Rs(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,p=Math.min(..._),g=Math.max(..._),v=Gi(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,E}function cG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Rs(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,p=Math.min(..._),g=Math.max(..._),v=Gi(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const O=`var_bool_${n}_0`,I=`var_bool_${n}_1`;return E+=`var bool: ${O} = sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,E+=`var bool: ${I} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${O}, ${I});
`,E}function uG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Rs(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,p=Gi(t,_,i,o);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint x_index_p(${c}, ${u}, ${g});
`,v}function dG(t,e,n,r){return Jn(t,e,r,"x_sum_p")}function _G(t,e,n,r){return Jn(t,e,r,"shortsighted_x_sum_p")}function fG(t,e,n,r){return Jn(t,e,r,"broken_x_sum_p")}function gG(t,e,n,r){return Jn(t,e,r,"shifted_x_sum_p")}function hG(t,e,n,r){return Jn(t,e,r,"skyscrapers_p")}function pG(t,e,n,r){return Jn(t,e,r,"x_sum_skyscrapers_p")}function vG(t,e,n,r){return Jn(t,e,r,"battlefield_p")}function mG(t,e,n,r){return Jn(t,e,r,"rising_streak_p")}function EG(t,e,n,r){return Jn(t,e,r,"outside_consecutive_sum_p")}function CG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ie(a,K.BOARD),u=Ie(a,K.CELL_CENTER_LOOP),_=r.value;if(_){const p=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${p});
`}return""}function OG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ie(c,K.BOARD),_=Ie(c,K.UNKNOWN_REGIONS),p=r.value,g=Gi(t,p,i,o);if(!g)return"";const v=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${v});
`,m}function IG(t,e,n,r){return Jn(t,e,r,"little_killer_sum_p")}function bG(t,e,n,r){return Jn(t,e,r,"little_killer_product_p")}function wG(t,e,n,r){return Jn(t,e,r,"x_omit_little_killer_sum_p")}function yG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ie(a,K.BOARD),u=Ie(a,K.YIN_YANG),_=r.value;if(_){const p=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${p});
`}return""}function LG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ie(a,K.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}function AG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ie(c,K.PENTOMINO_REGIONS),_=r.value,p=Gi(t,_,i,o);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint pentomino_border_count_p(${u}, ${g});
`,v}function SG(t,e,n){let r="";const i="mystery_sandwich_a",o="mystery_sandwich_b";r+=`var int: ${i};
`,r+=`var int: ${o};
`,r+=`constraint member(ALLOWED_DIGITS, ${i});
`,r+=`constraint member(ALLOWED_DIGITS, ${o});
`,r+=`constraint ${i} <= ${o};
`;for(const a of Object.values(n)){const c=a.cell,u=e.getCell(c.r,c.c),p=`[${Rs(e,a).join(",")}]`,g=a.value??"",v=Gi(t,g,c,u);if(!v)continue;const m=v[1];r+=v[0],r+=`constraint sandwich_sum_p(${p}, ${m}, ${i}, ${o});
`}return r}const NG=new Map([[d.SANDWICH_SUM,lG],[d.X_SUM,dG],[d.SHORTSIGHTED_X_SUM,_G],[d.BROKEN_X_SUM,fG],[d.SHIFTED_X_SUM,gG],[d.SKYSCRAPERS,hG],[d.X_SUM_SKYSCRAPERS,pG],[d.X_INDEX,uG],[d.BATTLEFIELD,vG],[d.SANDWICH_SUM_XOR_X_SUM,cG],[d.RISING_STREAK,mG],[d.OUTSIDE_CONSECUTIVE_SUM,EG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,yG],[d.LOOPWICHES,CG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,OG],[d.PENTOMINO_BORDER_COUNT,AG],[d.LITTLE_KILLER_SUM,IG],[d.LITTLE_KILLER_PRODUCT,bG],[d.X_OMIT_LITTLE_KILLER_SUM,wG],[d.NEGATORS_LITTLE_KILLER_SUM,LG]]),xG=new Map([[d.MYSTERY_SANDWICH_SUM,SG]]);function RG(t,e,n,r){let i="";const o=NG.get(n),a=xG.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function TG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=Ie(o,K.SASHIGANE),c=Ie(o,K.SASHIGANE_BENDS),u=we(r),_=_t(r,K.SASHIGANE);let p=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return p+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,p}function DG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+at(o).join(",")+"]",u=Ie(o,K.CELL_CENTER_LOOP),_=we(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const kG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,TG],[d.THERMO_SIGHTLINE_LOOP_ARROW,DG]]);function GG(t,e,n,r){return ul(e,n,r,kG)}function Wp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i);return`constraint ${n}(${o});
`}const MG={allow_var:!0,allow_interval:!0,allow_int_list:!1};function Sd(t,e,n,r=MG){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function zp(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function No(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o),u=cl(t,o).map(g=>Ie(g,n)),_=_t(o,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function UG(t,e,n,r){return Wp(e,r,"odd_p")}function $G(t,e,n,r){return Wp(e,r,"even_p")}function FG(t,e,n,r){return zp(e,r,"low_digit_p","5")}function PG(t,e,n,r){return zp(e,r,"high_digit_p","5")}function Yp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),a=t.getNeighboorCells(i),c=Ie(a,K.BOARD);return`constraint ${n}(${c}) == ${o};
`}function HG(t,e,n,r){return Yp(e,r,"odd_count")}function BG(t,e,n,r){return Yp(e,r,"even_count")}function WG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);c.push(o);const u=Ie(c,K.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function zG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${Ie(c,K.BOARD)}, ${a});
`}function YG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${Ie(c,K.BOARD)}, ${a});
`}function jG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=Ie(a,K.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function KG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=Ie(a,K.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function VG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=o.r+1,u=o.c+1;if(o.region!==null){const p=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${p};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function XG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const p=we(a),g=we(c),v=we(u),m=we(_);return`constraint groups_opposite_parity_p([${p},${g}], [${v},${m}]);
`}function Nd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),[a,c,u,_]=vd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${_});
`}function qG(t,e,n,r){return Nd(e,r,"is_watchtower_p")}function ZG(t,e,n,r){return Nd(e,r,"is_not_watchtower_p")}function QG(t,e,n,r){return Nd(e,r,"farsight_p")}function JG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),[c,u,_,p]=vd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${p}, 9);
`}function eM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u="["+at(c).join(",")+"]",_=e.getCol(o.c),p="["+at(_).join(",")+"]",[g,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${p}, ${g}, ${v}, ${a});
`}function jp(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const p=we(_),g=t.getOrthogonallyAdjacentCells(_).filter(E=>!a.has(E)),v=Ie(g,K.BOARD),m=`constraint ${n}(${v}, ${p});
`;i+=m}return i}function tM(t,e,n){return jp(e,n,"maximum_p")}function nM(t,e,n){return jp(e,n,"minimum_p")}function rM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function iM(t,e,n){const r=Object.values(n);let i="";const o=r.map(v=>v.cell),a=new Set(o.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),c=e.getAllCells().filter(v=>!a.has(v)),_=`${at([...a]).join(`,
	`)}`,g=`${at([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function oM(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${at([...a]).join(`,
	`)}`,p=`${ki([...a],K.COUNTING_CIRCLES_COLORS).join(`,
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
`;for(const g of e.getAllCells()){if(a.has(g))continue;const v=_t(g,K.COUNTING_CIRCLES_COLORS);i+=`constraint ${v} == 0;
`}for(const g of r){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const E=we(m),O=_t(m,K.COUNTING_CIRCLES_COLORS),I=g.value;I?i+=`constraint ${O} == ${I};
`:i+=`constraint ${O} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${O}) == ${E};
`}return i+=`
`,i}function sM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function aM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_even_count_p(${cl(e,o).map(p=>Ie(p,K.BOARD)).join(", ")}, ${a});
`}function lM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_odd_count_p(${cl(e,o).map(p=>Ie(p,K.BOARD)).join(", ")}, ${a});
`}function cM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getCellsByKnightMove(o),u=Ie(c,K.BOARD),_=r.value??"5",p=Sd(t,_,n);if(!p)return"";let g="";const v=p[1];return g+=p[0],g+=`constraint cell_knights_whisper_p(${a}, ${u}, ${v});
`,g}function uM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${Ie(u,K.YIN_YANG)}, ${a});
`}function dM(t,e,n,r){return No(e,r,K.YIN_YANG,"yin_yang_seen_unshaded_p")}function _M(t,e,n,r){return No(e,r,K.YIN_YANG,"yin_yang_seen_shaded_p")}function fM(t,e,n,r){return No(e,r,K.YIN_YANG,"yin_yang_seen_same_shade_p")}function gM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),_=Ie(u,K.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function hM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);return`constraint count(${Ie(c,K.YIN_YANG)}, 1) == ${a};
`}function pM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),_=e.getCol(o.c),p=Ie(u,K.TWO_CONTIGUOUS_REGIONS),g=Ie(_,K.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${p}, ${g}, ${a}, ${c});
`}function vM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u=e.getCol(o.c),_=Ie(c,K.UNKNOWN_REGIONS),p=Ie(u,K.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${p}, ${a});
`}function mM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let _=`constraint nurimisaki_unshaded_endpoint_p(${Ie(c,K.NURIMISAKI)}, ${a});
`;return _+=No(e,r,K.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function EM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.SASHIGANE),u=_t(o,K.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function CM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=_t(o,K.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function OM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,K.CELL_CENTER_LOOP)} == 1;
`:""}function IM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,K.CELL_CENTER_LOOP)} == 0;
`:""}function bM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${Ie(u,K.CELL_CENTER_LOOP)}) == ${a};
`}function wM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.CAVE_SHADING),u=cl(e,o),_=[];for(const g of u){const v=Ie(g,K.CAVE_SHADING);_.push(v)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function yM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=we(o),p=_t(o,K.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),v=Ie(g,K.BOARD),m=Ie(g,K.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${p});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(o),O=Ie(E,K.BOARD),I=Ie(E,K.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${O}, ${I}, ${p});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[Pe.NE,Pe.NW,Pe.SE,Pe.SW],A=[];for(const z of w)e.getCellsInDirection(o.r,o.c,z).forEach(F=>A.push(F));const D=Ie(A,K.BOARD),M=Ie(A,K.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${D}, ${M}, ${p});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function LM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=we(o),p=_t(o,K.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),v=Ie(g,K.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${p}) >= ${c};
`;const m=[Pe.N,Pe.S,Pe.E,Pe.W],E=[];for(const O of m){const I=e.getCellsInDirection(o.r,o.c,O);if(!I.length)continue;const w=Ie(I,K.BOARD),A=Ie(I,K.UNKNOWN_REGIONS),D=`in_arrow_${n}_${O}`,M=`in_arrow_${n}_${O}[1]`;E.push(M),u+=`array[index_set(${w})] of var bool: ${D};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${D}, ${_}, ${p});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function AM(t,e,n,r){return No(e,r,K.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function SM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function NM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function xM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${_t(o,K.CONNECT_FOUR)});
`:""}function RM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${_t(o,K.CONNECT_FOUR)});
`:""}function TM(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const p=Sd(t,_,o);if(!p)continue;const g=p[1];r+=p[0];const v=_t(u,K.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${K.BOARD}, ${K.NURIKABE_REGIONS}, ${v}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${K.NURIKABE_REGIONS})) == ${i+1};
`,r}function DM(t,e,n,r){return No(e,r,K.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function kM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${K.NURIKABE_REGIONS}, ${c}, ${a});
`}function GM(t,e,n){let r="";const i=md(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,p]of u.flatMap((g,v)=>u.slice(v+1).map(m=>[g,m]))){const g=_.cell,v=p.cell,m=e.getCell(g.r,g.c),E=e.getCell(v.r,v.c);if(!m||!E)continue;const O=_t(m,K.BOARD),I=_t(E,K.BOARD);r+=`constraint ${O} == ${I};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=Ie(a,K.BOARD);return r+=`constraint alldifferent(${c});
`,r}function MM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${ki([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const _ of Object.values(n)){const p=_.cell,g=e.getCell(p.r,p.c);if(!g)continue;const v=we(g),m=_t(g,K.SHIKAKU_REGIONS),E=_t(g,K.SHIKAKU_WIDTH),O=_t(g,K.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${K.SHIKAKU_REGIONS}, ${m}, ${v}, ${E}, ${O});
`}return i}function UM(t,e,n){const r=Object.values(n);let i="";const o=r.map(p=>p.cell),a=new Set(o.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),u=`${ki([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const _={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[p,g]of Object.entries(n)){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const E=_t(m,K.SHIKAKU_REGIONS),O=g.value??"",I=Sd(t,O,p,_);if(!I)continue;const w=I[1];i+=I[0],i+=`constraint shikaku_region_sum_p(${K.BOARD}, ${K.SHIKAKU_REGIONS}, ${E}, ${w});
`}return i}const $M=new Map([[d.ODD,UG],[d.EVEN,$G],[d.LOW_DIGIT,FG],[d.HIGH_DIGIT,PG],[d.ODD_MINESWEEPER,HG],[d.EVEN_MINESWEEPER,BG],[d.DIAGONALLY_ADJACENT_SUM,YG],[d.ORTHOGONAL_SUM,zG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,WG],[d.FRIENDLY_CELL,VG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,XG],[d.WATCHTOWER,qG],[d.NOT_WATCHTOWER,ZG],[d.FARSIGHT,QG],[d.RADAR,JG],[d.INDEXING_COLUMN,jG],[d.INDEXING_ROW,KG],[d.SANDWICH_ROW_COL_COUNT,eM],[d.SEEN_EVEN_COUNT,aM],[d.SEEN_ODD_COUNT,lM],[d.CELL_KNIGHT_WHISPERS,cM],[d.YIN_YANG_MINESWEEPER,uM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,dM],[d.YIN_YANG_SEEN_SHADED_CELLS,_M],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,fM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,gM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,hM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,pM],[d.SEEN_REGION_BORDERS_COUNT,vM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,mM],[d.NURIKABE_SEEN_WATERWAY_CELLS,DM],[d.NURIKABE_ISLAND_SIZE_CELL,kM],[d.SASHIGANE_BEND_REGION_COUNT,EM],[d.SASHIGANE_REGION_SUM,CM],[d.CELL_ON_THE_LOOP,OM],[d.CELL_NOT_ON_THE_LOOP,IM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,bM],[d.CAVE_CLUE,wM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,yM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,LM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,AM],[d.DIRECTED_PATH_START,SM],[d.DIRECTED_PATH_END,NM],[d.CONENCT_FOUR_RED,xM],[d.CONNECT_FOUR_YELLOW,RM]]),FM=new Map([[d.MAXIMUM,tM],[d.MINIMUM,nM],[d.COUNTING_CIRCLES,rM],[d.REVERSE_COUNTING_CIRCLES,iM],[d.COLORED_COUNTING_CIRCLES,oM],[d.UNIQUE_CELLS,sM],[d.SHIKAKU_REGION_SIZE,MM],[d.SHIKAKU_REGION_SUM,UM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,TM],[d.TELEPORT,GM]]);function PM(t,e,n,r){let i="";const o=$M.get(n),a=FM.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function HM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.UNKNOWN_REGIONS),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p),v=Ie(g,K.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(p=>`count_different(${p}, ${o})`).join(" + ")} == ${i};
`}function BM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),p=Ie(_,K.BOARD),g=Ie(_,K.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${p}, ${g}) == ${i};
`}return c}function WM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=Ie(u,K.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function zM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.YIN_YANG),a=e.directions,c=[];for(const _ of a){const p=t.getCellsInDirection(r.r,r.c,_),g=Ie(p,K.YIN_YANG),v=Ie(p,K.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function YM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${Ie(_,K.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function jM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${Ie(_,K.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function KM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const p=t.getCellsInDirection(r.r,r.c,_),v=`count(${Ie(p,K.GALAXY_REGIONS)}, ${o})`;c.push(v)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function VM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),p="["+at(u).join(",")+"]";a+=`constraint hot_arrows_p(${p}, ${i});
`}return a}function XM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=Ie(u,K.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function qM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.CONNECT_FOUR),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p);c.push(...g)}return c.length===0?"":`constraint count(${Ie(c,K.CONNECT_FOUR)}, ${o}) == ${i};
`}function ZM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),p=Ie(_,K.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${p});
`}return c}const QM=new Map([[d.HOT_ARROWS,VM],[d.COLD_ARROWS,XM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,HM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,BM],[d.LOOP_CELL_COUNT_ARROWS,jM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,zM],[d.YIN_YANG_COUNT_SHADED_CELLS,WM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,KM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,YM],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,qM],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,ZM]]);function JM(t,e,n,r){return ul(e,n,r,QM)}function eU(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function tU(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function nU(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function rU(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${K.BOARD}, ${K.LITS_GRID}, ${r}, 0..${o});
`}const iU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,eU],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,tU],[d.FORBIDDEN_KNIGHT_SUM,nU],[d.LITS_MAX_TETROMINO_SUM,rU]]);function oU(t,e,n,r){return ul(e,n,r,iU)}const sU=[O3,PM,GG,JM,X3,T3,aG,Zk,f3,RG,w3,oU];function aU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of sU){let u=c(e,i,o,a);u=ut(u,`${o}`),n+=u}return n}function lU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function cU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function uU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function dU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function _U(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function fU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=bt.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function gU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=K.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=bt.range(1,a+1);let u="";const _="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${K.BOARD}, ${o}, ${_}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${K.BOARD}, ${o}, ALLOWED_DIGITS, ${_});
`,u}function hU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function pU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function vU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function mU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function EU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function Kp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Vp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function xd(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const _ of u){const p=i.getRegion(_),g=Ie(p,r);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function io(t,e,n,r){let i=Kp(e,n,r);return i+=Vp(e,n,r),i+=xd(t,e,n,r),i}function CU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=io(n,1,!0,K.DOUBLERS),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function OU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=io(n,1,!0,K.NEGATORS),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function IU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function bU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=io(n,2,!0,o),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function wU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${K.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${K.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${K.SHIKAKU_WIDTH}, ${K.SHIKAKU_HEIGHT});
`,a}function yU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${K.BOARD}, ${K.SHIKAKU_REGIONS});
`,o}function LU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function AU(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${K.BOARD}, ${c});
`,u}function SU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.GALAXY_REGIONS,a=K.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function NU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function xU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function RU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=K.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function TU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.LITS_GRID,u=K.BOARD_REGIONS,_=[...r.getUsedRegions()];_.sort();const p=Math.min(..._),g=Math.max(..._);let v="";v+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,v+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,v+=`array[ROW_IDXS, COL_IDXS] of var 0..${_.length}: ${c};
`,v+=`constraint lits_shading_p(${o});
`,v+=`constraint lits_shading_ids_p(${o}, ${a});
`,v+=`constraint lits_region_and_ids_p(${u}, ${a});
`,v+=`constraint lits_tetromino_shapes_p(${a});
`,v+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${p}..${g});
`,_.length&&(v+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of _){const E=r.getRegion(m),I=`constraint count_eq(${Ie(E,K.LITS_SHADING)}, 1, 4);
`;v+=I}return v}function DU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${K.BOARD_REGIONS}, ${o});
`,r.getUsedRegions().size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`),a+=xd(n,2,1,K.NORINORI_SHADING),a}function kU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const p of _){const g=r.getRegion(p),m=`constraint count_eq(${Ie(g,K.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function GU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.STAR_BATTLE,c=K.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=io(n,2,1,K.STAR_BATTLE),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=io(n,1,1,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`
% 1 black star per row, column, region
`,u+=io(n,1,2,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function MU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING,a=K.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=Vp(2,1,a),c+=Kp(2,1,a),c+=xd(n,1,1,a),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function Pt(t,e,n){return t*n+e+1}function UU(t){const e=t.grid;function n(c,u){const _=[],p=Pt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Pt(u.r+g,u.c,e.nCols);_.push([p,v]),_.push([v,p])}return _}function r(c,u){const _=[],p=Pt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Pt(u.r,u.c+g,e.nCols);_.push([p,v]),_.push([v,p])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=id(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Pt(g[0].r,g[0].c,e.nCols),m=Pt(g[3].r,g[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Pt(g[1].r,g[1].c,e.nCols),m=Pt(g[2].r,g[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let _=0;_<u.length-1;_++){const p=bx(jh(u[_],u[_+1]),.5),v=sd(p).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let O=n(m,E);i.push(...O),O=n(E,m),i.push(...O)}else if(m.c===E.c){let O=r(m,E);i.push(...O),O=r(E,m),i.push(...O)}}}return i}function $U(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,p=o.value,g=Pt(u.r,u.c,e.nCols),v=Pt(_.r,_.c,e.nCols);p==="<"?n.push([g,v]):p===">"&&n.push([v,g])}return n}function FU(t){const e=[];for(const n of t.getAllCells()){const r=Pt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Pt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function PU(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const _=md(a);let p=1;for(const g of _.values())if(!(g.length<=1)){for(const[v,m]of g.flatMap((E,O)=>g.slice(O+1).map(I=>[E,I]))){const E=Pt(v.cell.r,v.cell.c,e.nCols),O=Pt(m.cell.r,m.cell.c,e.nCols);n.push([E,O]),n.push([O,E]),u[v.cell.r][v.cell.c]=p,u[m.cell.r][m.cell.c]=p}for(const v of g){const m=Pt(v.cell.r,v.cell.c,e.nCols);r.push(m)}p++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function HU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=FU(r);const c=UU(n),u=$U(n);c.push(...u);const _=n.localConstraints;a=a.filter(w=>!c.some(A=>w[0]===A[0]&&w[1]===A[1]));const p=PU(n);if(p.tp_edges.length){a.push(...p.tp_edges);const w=Up(p.tp_arr),A=p.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${A}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,v=a.length,m="["+a.map(w=>w[0]).join(",")+"]",E="["+a.map(w=>w[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${v}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let A=0;A<r.nCols-1;A++){const D=r.getCell(w,A),M=r.getCell(w,A+1),z=r.getCell(w+1,A),W=r.getCell(w+1,A+1);if(!D||!M||!z||!W)continue;const F=Pt(D.r,D.c,r.nCols),P=Pt(M.r,M.c,r.nCols),X=Pt(z.r,z.c,r.nCols),re=Pt(W.r,W.c,r.nCols),J=[[F,re],[re,F],[P,X],[X,P]].map(fe=>a.findIndex(pe=>fe[0]===pe[0]&&fe[1]===pe[1])).filter(fe=>fe!==-1);if(J.length){const fe=J.map(pe=>`dpath_es[${pe+1}]`).join(",");o+=`constraint sum([${fe}]) <= 1;
`}}const O=_.get(d.TELEPORT),I=O?Object.values(O):[];if(p.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const w of I){const A=w.cell,D=r.getCell(A.r,A.c);if(!D)continue;const M=r.getNeighboorCells(D),z=Pt(D.r,D.c,r.nCols),W=[];for(const P of M){if(I.some(q=>q.cell.r===P.r&&q.cell.c==P.c&&q.value===w.value))continue;const re=Pt(P.r,P.c,r.nCols);W.push([z,re]),W.push([re,z])}const F=W.map(P=>a.findIndex(X=>P[0]===X[0]&&P[1]===X[1])).filter(P=>P!==-1);if(F.length){const P=F.map(X=>`dpath_es[${X+1}]`).join(",");o+=`constraint sum([${P}]) <= 1;
`}}}return o}function BU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function WU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function zU(t,e){let n="";return n+=`constraint connect_four_draw_p(${K.CONNECT_FOUR});
`,n}function YU(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${K.BOARD}, ${K.CONNECT_FOUR});
`,n}function jU(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${K.BOARD}, ${K.CONNECT_FOUR}, 3);
`,n}const KU=new Map([[d.FILLOMINO,IU],[d.CAVE,LU],[d.GALAXIES,SU],[d.YIN_YANG,lU],[d.SHIKAKU,wU],[d.SHIKAKU_NO_REPEATS_IN_REGION,yU],[d.NORINORI,DU],[d.NURIMISAKI,cU],[d.NURIKABE,uU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,dU],[d.TWO_CONTIGUOUS_REGIONS,_U],[d.CHAOS_CONSTRUCTION,fU],[d.NUMBERED_CHAOS_CONSTRUCTION,gU],[d.SASHIGANE,hU],[d.CELL_CENTER_LOOP_NO_TOUCHING,pU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,vU],[d.NOT_LOOP_SIZED_REGIONS,mU],[d.MODULAR_LOOP,EU],[d.DOUBLERS,CU],[d.NEGATORS,OU],[d.GOLDILOCKS_ZONE,xU],[d.NEXUS,NU],[d.INDEXER_CELLS,bU],[d.PENTOMINO_TILLING,RU],[d.LITS,TU],[d.CAVE_LITS,kU],[d.LITS_BLACK_WHITE_STAR_BATTLE,GU],[d.NORINORI_STAR_BATTLE,MU],[d.RENBAN_CAVES,AU],[d.MAZE_DIRECTED_PATH,HU],[d.CHAOS_CONSTRUCTION_SUGURU,BU],[d.CONNECT_FOUR,WU],[d.CONNECT_FOUR_DRAW,zU],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,YU],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,jU]]);function VU(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=KU.get(i);if(!a)continue;let c=a(t,i);c=ut(c,`${i}`),e+=c}return e}function XU(){return`
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

`}function qU(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${we(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Xp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new YD(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(XU());let _=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?_=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...bt.range(1,16)]:r&&(_="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${_};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),KD(i,n),i.add(qU(t)),i.add(Wk(t)),i.add(zk(t)),i.add(VU(i)),i.add(aU(t,i)),i.add(jk(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const zg=encodeURIComponent("4.4.2");let gr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const wi=[];let Jc;function rs(){if(!Jc){const e=`importScripts(${JSON.stringify(gr.workerURL)});`;Jc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Jc);t.postMessage({wasmURL:gr.wasmURL?gr.wasmURL.toString():new URL(`./minizinc.wasm?version=${zg}`,gr.workerURL).toString(),dataURL:gr.dataURL?gr.dataURL.toString():new URL(`./minizinc.data?version=${zg}`,gr.workerURL).toString()}),wi.push({worker:t,runCount:0})}function qp(){for(;wi.length<gr.numWorkers;)rs()}async function ZU(t){if(gr={...gr,...t},wi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");qp(),await Promise.race(wi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Rd{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Rd;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){qp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=wi.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?wi.push({worker:o,runCount:a}):(o.terminate(),rs()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?wi.push({worker:o,runCount:a}):(o.terminate(),rs()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);rs();let c={},u=!1,_=null;return a.onmessage=p=>{if(c[p.data.type])for(const g of c[p.data.type])g(p.data);switch(p.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=p.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const p of c.exit)p({type:"exit",code:null});c={}}},on(p,g){c[p]?c[p].add(g):c[p]=new Set([g])},off(p,g){c[p]&&c[p].delete(g)},then(p,g){const v=m=>{if(m.code===0)p(m.outputFiles[i]);else{const E=_?{message:_.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);rs();let o=null,a={},c=!1,u=null,_={},p="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const v of a[g.data.type])v(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,p="SATISFIED";break;case"status":p=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,v){a[g]?a[g].add(v):a[g]=new Set([v])},off(g,v){a[g]&&a[g].delete(v)},then(g,v){const m=E=>{if(E.code===0)g({status:p,solution:u,statistics:_});else{const O=o?{message:o.message,...E}:E;if(!v)throw O;v(O)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var QU=le('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function JU(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Fr,"$puzzleMetaStore",n);let i=$(e,"showModal",12,!1);function o(g,v,m){var E=document.createElement("a"),O=new Blob([g],{type:m});E.href=URL.createObjectURL(O),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=ct(As);return Xp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),v=Hg(g);navigator.clipboard.writeText(v)}function _(){const g=Ma(r()),v=a();o(v,`${g}.mzn`,"text/plain")}function p(){const g=Ma(r()),v=a(),m=Hg(v);o(m,`${g}.mzn`,"text/plain")}ve(),Hr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,v)=>{var m=QU(),E=Z(m),O=G(E,2),I=G(O,2),w=G(I,2),A=G(w,2),D=G(Z(A));S(D,"href","https://play.minizinc.dev/"),yi(),j(A),j(m),Ge("click",E,c),Ge("click",O,u),Ge("click",I,_),Ge("click",w,p),T(g,m)},$$slots:{default:!0},$$legacy:!0}),_e()}var Gn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Gn||{});const e$=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Zp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),t$=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),n$=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),r$=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),i$=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),o$=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),s$=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),eu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),a$=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),tu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),hl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function l$(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=e$(t,n),o=Zp(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=t$(t,n),a=n$(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=r$(t,n),o=i$(t,r);return[i,o]}if(e===d.FOG){const r=t.map(c=>c.fog),o=o$(t,n===1),a=s$(t,r);return[o,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=tu(t,n),i=tu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=tu(t,n),o=hl(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=eu(t,n,e),i=eu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=eu(t,n,e),o=a$(t,r,e);return[i,o]}}function qo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),vn.update(i=>i)}function lo(t){switch(t.type){case Gn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;qo(e,d.DIGIT,n,!0);break}case Gn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;qo(e,d.GIVEN,n,!0);break}case Gn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;qo(e,d.REGIONS,n,!0);break}case Gn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;qo(e,d.HIGHLIGHTS,n,!0);break}case Gn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;qo(e,r,n,!0);break}case Gn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];vn.update(r=>r);break}case Gn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];vn.update(i=>i);break}case Gn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];vn.update(r=>r);break}case Gn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];vn.update(r=>r);break}case Gn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);vn.update(i=>i);break}case Gn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),vn.update(r=>r);break}case Gn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];vn.update(r=>r);break}}}function c$(t,e){return{execute:()=>{lo(t)},unExecute:()=>{lo(e)}}}function xo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const p=Number(c[u]),g=n.get(p);g!==void 0&&(r.push(_),i.push([g]))}}const o=hl(r,i);lo(o)}function u$(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),a(v,m,t[v][m])}function a(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),a(v+1,m,E),a(v-1,m,E),a(v,m+1,E),a(v,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,O]of v)for(const[I,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+I,D=O+w;if(m.some(([M,z])=>M===A&&z===D))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(c[v].add(m),c[m].add(v));const _=[1,4,7,9],p=new Array(i.length).fill(0);function g(v,m){for(const E of c[v])if(p[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of _)if(g(v,m)){p[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=p[v];return o}function d$(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let p=0;p<_.length;p++){const g=n.getCell(u,p);if(!g||g.given||r&&!g.given&&g.value===null)continue;const v=_[p];o.push(g),a.push(v)}}const c=Zp(o,a);lo(c)}function _$(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){xo(o,e,r);return}}}function f$(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){xo(o,e,r);return}}}function g$(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const p=c[u];i.push([p])}}const o=hl(r,i);lo(o)}function h$(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;xo(n,e,new Map([[0,4],[1,7],[2,9]]))}function p$(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;xo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function v$(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;xo(n,e,new Map([[1,7],[2,4],[3,9]]))}function m$(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;xo(n,e,new Map([[1,7],[2,8]]))}function E$(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let p=0;p<i.length;p++){const g=i[p];for(let v=0;v<g.length-1;v++){const m=e.getCell(p,v),E=e.getCell(p,v+1);if(!m||!E)continue;const O=g[v],I=g[v+1];if(O===I)continue;const w={colorId:c,p1:{r:p,c:v+1},p2:{r:p+1,c:v+1}};u.push(w)}}for(let p=0;p<a;p++)for(let g=0;g<o-1;g++){const v=e.getCell(g,p),m=e.getCell(g+1,p);if(!v||!m)continue;const E=i[g][p],O=i[g+1][p];if(E===O)continue;const I={colorId:c,p1:{r:g+1,c:p},p2:{r:g+1,c:p+1}};u.push(I)}const _=fs(u);mr(_);return}}function C$(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const p=e.getCell(c,_);if(p)for(const g of e.getOrthogonallyAdjacentCells(p)){if(!g||!(g.r>p.r||g.c>p.c))continue;const v=i[p.r][p.c],m=i[g.r][g.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:p.r+.5,c:p.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const a=fs(o);mr(a);return}}function O$(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=u$(i);if(!o)return;const a=[],c=[];for(let _=0;_<o.length;_++){const p=o[_];for(let g=0;g<p.length;g++){const v=e.getCell(_,g);if(!v)continue;a.push(v);const m=p[g];c.push([m])}}const u=hl(a,c);lo(u);return}}function I$(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const p=e.getCell(c,_);if(!p)continue;const g=i[p.r][p.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:p.r+.5,c:p.c+.5};o.push(m)}}const a=pT(o);mr(a);return}}function b$(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[p,g]=_,[v,m]=[Math.floor((p-1)/i.nCols),(p-1)%i.nCols],[E,O]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!Is({r:v,c:m},{r:E,c:O}))continue;const A={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:O+.5}};o.push(A)}const a=fs(o);mr(a)}function w$(t,e){const n=e.puzzle,r=n.grid;mr(ud()),d$(t,n),g$(t,r),E$(t,r),h$(t,r),p$(t,r),C$(t,r),f$(t,r),O$(t,r),_$(t,r),I$(t,r),v$(t,r),b$(t,e),m$(t,r)}function y$(){const{subscribe:t,set:e}=jt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var L$=le('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function A$(t,e){de(e,!1);const n=Ke(),r=()=>Ce(As,"$puzzleStore",n),i=()=>Ce(bn,"$gridStore",n),o=()=>Ce(w,"$timer",n),a=R(),c=R(),u=R(),_=R();let p=R(!0),g=R(!1),v=R(null),m=R(100),E=R("100"),O=R(null),I=R("IDLE");const w=y$();function A(P){return P===null?"":String(P)}function D(P){const X=Math.floor(P/6e4),re=Math.floor(P%6e4/1e3),q=Math.floor(P%1e3/100),J=re.toString().padStart(2,"0");return`${X}:${J}.${q}`}function M(){y(g,!0)}function z(P){const X=parseInt(P);typeof X=="number"&&X>=1&&y(m,X)}async function W(){y(O,0),y(I,"SOLVING...");const P=new Rd;Lp();const X=Xp(f(a));P.addFile("test.mzn",X.model_str),w.reset(),w.start(),y(v,P.solve({options:{solver:"chuffed","num-solutions":f(m)}})),f(v).on("solution",re=>{const q=re.output.json;re.type==="solution"&&f(O)!==null&&y(O,f(O)+1),w$(q,X)}),f(v).on("error",re=>{y(u,"Solve"),y(I,"ERROR"),console.log(re.message),w.stop(),f(v)&&f(v).cancel()}),f(v).on("warning",re=>{y(I,"WARNING"),console.log(re.message)}),f(v).then(re=>{y(I,re.status),y(u,"Solve"),w.stop()})}function F(){f(v)===null||!f(v).isRunning()?W():f(v)!==null&&f(v).isRunning()&&(y(I,"IDLE"),y(u,"Solve"),w.stop(),f(v).cancel())}k(()=>r(),()=>{y(a,r())}),k(()=>i(),()=>{y(c,i())}),k(()=>{},()=>{y(u,"Solve")}),k(()=>o(),()=>{y(_,o())}),k(()=>f(v),()=>{f(v)&&(f(v)!==null&&f(v).isRunning()?y(u,"Stop"):y(u,"Solve"))}),ye(),ve(),al(t,{get isOpen(){return f(p)},set isOpen(P){y(p,P)},$$slots:{"panel-header":(P,X)=>{sl(P,{slot:"panel-header",title:"Solver",get isOpen(){return f(p)},set isOpen(re){y(p,re)},$$legacy:!0})},"panel-content":(P,X)=>{var re=L$(),q=ae(re),J=G(q,2);JU(J,{get showModal(){return f(g)},set showModal(Rt){y(g,Rt)},$$legacy:!0});var fe=G(J,2),pe=Z(fe,!0);j(fe);var be=G(fe,2),Ae=Z(be,!0);j(be);var Ue=G(be,2),xe=Z(Ue);nn(xe),S(xe,"min",1),S(xe,"max",200),S(xe,"step",1),j(Ue);var me=G(Ue,2),nt=Z(me,!0);ne(()=>it(nt,`Solution Count: ${A(f(O))}`)),j(me);var $e=G(me,2),wt=Z($e,!0);ne(()=>it(wt,`Elapsed Time: ${D(f(_))}`)),j($e);var xt=G($e,2),sn=Z(xt,!0);j(xt),ne(()=>{it(pe,f(u)),it(Ae,`Max. Solutions: ${f(m)}`),it(sn,`Status: ${f(I)}`)}),Ge("click",q,M),Ge("click",fe,F),Xn(xe,()=>f(E),Rt=>y(E,Rt)),Ge("input",xe,()=>z(f(E))),T(P,re)}},$$legacy:!0}),_e()}var S$=le('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function N$(t){var e=S$(),n=Z(e),r=Z(n);MD(r);var i=G(r,2);A$(i,{});var o=G(i,2);m2(o,{elementHandlers:Mt});var a=G(o,2);b2(a,{elementHandlers:Mt});var c=G(a,2);u2(c,{elementHandlers:Mt});var u=G(c,2);K2(u,{elementHandlers:Mt});var _=G(u,2);$D(_,{}),j(n),j(e),T(t,e)}class Te{constructor(e,n){Ee(this,"x");Ee(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function x$(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Fn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Te(i.x,i.y)};function Ra(t,e=!0,n=.5){const r=tl(t),i=new Te(r.c+.5,r.r+.5),o=t.distance(i);return!e||o<n?{cell:r,dist:o}:null}function Qp(t,e){const n=tl(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function ss(t,e){const n=tl(t),r=Lx(n),o=r.map(_=>new Te(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function as(t,e){const n=tl(t),r=Ax(n),o=r.map(_=>new Te(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function nu(t,e=!0,n=.5){const r=as(t,void 0);if(!r)return null;const i=ss(t,void 0);if(!i)return null;const o=Qp(t);if(!o)return null;const a=[o.cellCenter,r.edge,i.corner],u=a.map(O=>new Te(O.c,O.r)).map(O=>O.distance(t)),_=Math.min(...u),p=u.findIndex(O=>O===_),g=a[p],m=["cell center","edge","corner"][p],E={cellCenter:o.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?E:null}class Ro{constructor(e=.4){Ee(this,"onTap",null);Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onMove",null);Ee(this,"_prevPoint",null);Ee(this,"_prevCell",null);Ee(this,"_lastPointerDownTime",0);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_tapCount",0);Ee(this,"_lastTapPosition",null);Ee(this,"_lastTapTime",0);Ee(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Fn(e,n);if(!i)return;this._prevPoint=i;const o=Ra(i,!r,this._margin);if(!o)return;const a=o.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=Ra(r,!0,this._margin);if(!i)return;const o=i.cell;if(this._prevCell&&qe(this._prevCell,o))return;this._prevCell=o,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:o,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Fn(e,n);if(!r)return;const i=Ra(r,!1);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Yg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function R$(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function jg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Kg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function T$(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Yg(i,e):i.value!==null?R$(i,e):n===d.CORNER_PM&&i.cornerMarks.length?jg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Kg(i,e):i.cornerMarks.length?jg(i,e):i.centerMarks.length?Kg(i,e):i.highlights.length?Yg(i,e):r:r}function ci(t,e,n,r=!1){if(!(t&&e))return;const i=gd(t,e),o=hd(t,n),a=Ss(i,o);pn(a,r)}function Mi(t,e,n,r=!0){if(!(t&&e))return;const i=hd(t,n),o=gd(t,e),a=Ss(i,o);pn(a,r)}function wu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Ug(r,t,n),a=Ug(r,t,e),c=Ss(o,a);pn(c,i)}function D$(t,e,n,r){const i=new Ro,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,p=!1,g;(O=>{O.DYNAMIC="DYNAMIC",O.BULB="BULB",O.BODY="BODY"})(g||(g={}));let v="DYNAMIC";function m(O){_=!1;const I=O.cell;if(rn(O.cell,o)){if(v==="DYNAMIC"){const A=ct(vt),D=qR(A,n,I);if(D){const z=RR(D.arrow,D.matchLineIdx);wu(D.id,D.arrow,z,n,!0),p=!0;return}const M=Ng(A,n,I);if(!M)_=!0,v="BULB",u=null,a=null;else{v="BODY",u=M[0],a=M[1],a=mu(a,I),Yt(n,u,a);return}}if(v==="BULB"&&!u){u=bt.uniqueId(),a=ap(n,[I]),li(u,a);return}else v==="BULB"&&u&&a?(a=AR(a,I),Yt(n,u,a)):v==="BODY"&&u&&a&&(a=SR(a,I,r==null?void 0:r.allowSelfIntersection),Yt(n,u,a))}}return i.onDragStart=O=>{v="DYNAMIC",m(O)},i.onDrag=O=>{m(O)},i.onDragEnd=()=>{if(p){p=!1;return}v==="BODY"&&u&&a?NR(a)?(a=xR(a),Yt(n,u,a)):(wu(u,c,a,n),c=a):v==="BULB"&&(ci(u,a,n),c=a),v="DYNAMIC"},i.onTap=O=>{if(_)return;const I=O.cell,w=ct(vt);if(Ng(w,n,I)){Mi(u,a,n);return}},{pointerDown:O=>{O.button===0&&i.pointerDown(O,t)},pointerMove:O=>{i.pointerMove(O,t)},pointerUp:O=>{i.pointerUp(O,t)},keyDown:()=>{},keyUp:()=>{}}}function k$(t,e,n,r){const i=new Ro,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const v=g.cell;rn(g.cell,o)&&(c=LR(c,v,a),Yt(n,u,c))}return i.onDragStart=g=>{u=bt.uniqueId(),c=op(n,[],r==null?void 0:r.defaultValue),li(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?xi(n,u):u&&c&&ci(u,c,n,!1),u=null},i.onTap=g=>{const v=g.cell,m=ct(vt),E=XR(m,n,v);if(E){const[O,I]=E;Mi(O,I,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function G$(t,e,n,r){const i=new Ro,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ct(vt),m=g.cell;if(!rn(g.cell,o))return;const O=ka(v,n,m);if(c===0&&(c=O?2:1),!(r!=null&&r.oppositeConstraintId&&ka(v,r.oppositeConstraintId,m))){if(O&&c===2){const[I,w]=O;Mi(I,w,n)}else if(c===1){const I=_p(n,m,r==null?void 0:r.defaultValue),w=bt.uniqueId();ci(w,I,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)};function _(g){const v=ct(Bt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!po(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=Ls(m,O),Yt(n,E,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class pl{constructor(e){Ee(this,"onDragStart",null);Ee(this,"target");this.target=e}pointerDown(e,n){const r=Fn(e,n);if(!r)return;const i=as(r,void 0);if(!i)return;const o=ss(r,void 0);if(!o)return;const a=Ra(r,!1);if(!a)return;const c=Qp(r);if(!c)return;let u;this.target===Et.CORNER?u=o.corner:this.target===Et.EDGE?u=i.edge:this.target===Et.CELL_CENTER?u=c.cellCenter:this.target===Et.CORNER_OR_EDGE?o.dist<i.dist?u=o.corner:u=i.edge:this.target===Et.CORNER_OR_CENTER?o.dist<c.dist?u=o.corner:u=c.cellCenter:this.target===Et.EDGE_OR_CENTER?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<o.dist&&i.dist<c.dist?u=i.edge:o.dist<i.dist&&o.dist<c.dist?u=o.corner:u=c.cellCenter;let _=this.target===Et.CORNER||this.target===Et.CORNER_OR_CENTER?"corner":"edge";(this.target===Et.CORNER_OR_EDGE||this.target===Et.CLOSEST)&&o.dist<i.dist&&(_="corner");const p=_==="edge"?2*i.idx:2*o.idx+1,g={event:e,cell:a.cell,edge:i.edge,corner:o.corner,closest:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:p};this.onDragStart&&this.onDragStart(g)}}function M$(t,e,n,r){const i=(r==null?void 0:r.targets)??Et.CLOSEST,o=new pl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=ct(vt),E=v.cell,O=v.closest;if(!rn(E,a))return;const w=QR(m,n,O);if(w){xi(n,w);return}c=hp(n,O,""),u=bt.uniqueId(),li(u,c)}function p(v){const m=ct(Bt);if(!m)return;let E=m.constraint;const O=m.id;if(E.value===void 0||!po(v)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(E==null?void 0:E.value,v.key);I!==void 0&&I!==E.value&&(E=Ls(E,I),Yt(n,O,E))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{p(v)},keyUp:()=>{}}}function U$(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Et.CORNER_OR_EDGE,o=new pl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=ct(vt),E=v.cell,O=v.direction,I=od(O);if(rn(E,a))return;const A=Kh(E,I);if(!rn(A,a))return;const M=ZR(m,n,E,I);if(M){xi(n,M);return}c=dp(n,E,I,""),u=bt.uniqueId(),li(u,c)}function p(v){const m=ct(Bt);if(!m)return;let E=m.constraint;const O=m.id;if(E.value===void 0||!po(v)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(E==null?void 0:E.value,v.key);I!==void 0&&I!==E.value&&(E=Ls(E,I),Yt(n,O,E))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{p(v)},keyUp:()=>{}}}function $$(t,e,n,r){const i=new Ro,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function p(m){const E=ct(vt),O=m.cell;if(rn(m.cell,o)){if(m.event.shiftKey){const w=Sg(E,n,O);w&&(c=w[0],a=w[1],So({id:c,constraint:a}),_=1)}if(_===0){const w=Sg(E,n,O);if(_=w?2:1,w){Mi(w[0],w[1],n);return}}if(!a&&_===1){a=lp(n,[O]),c=bt.uniqueId(),li(c,a);return}else if(a&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=DR(a,O,w),Yt(n,c,a);return}}}function g(m){const E=ct(Bt);if(!E)return;let O=E.constraint;const I=E.id;if(O.value===void 0||!po(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(O==null?void 0:O.value,m.key);w!==void 0&&w!==O.value&&(O=kR(O,w),Yt(n,I,O))}return i.onDragStart=m=>{c=null,a=null,_=0,p(m)},i.onDrag=m=>{p(m)},i.onDragEnd=()=>{c&&a&&ci(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const eo=new Ro;function Vg(t,e){return t.shiftKey?ns.SELECTING:t.ctrlKey||t.metaKey||e?ns.DYNAMIC:t.altKey?ns.DESELECTING:ns.RESETTING}function gs(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const o=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===o||n==="different"&&c.fog!==o)}}return t}function F$(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=gs(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function ls(t,e,n,r){const i=l$(e,n,r);if(i){const o=i[0],a=i[1],c=c$(o,a),u=Cu(t),p=[OT(u,u),c];CT(p)}}function P$(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=gs(e,r,"any",-1,!1);if(i.length)return ls(n,i,r,t),!0}else{const i=gs(e,r,"different",t,!0);if(i.length)return ls(n,i,r,t),!0}return!1}function H$(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};eo.onTap=m=>{if(m.tapCount!==2)return;const O=rn(m.cell,i)?m.cell:null;if(!O)return;const I=T$(O,e,n),w=Cu(I);to(w)},eo.onDragStart=m=>{const E=rn(m.cell,i),O=ct(Ou),I=Vg(m.event,O),w=E?m.cell:null,A=aT(w,I);to(A)},eo.onDrag=m=>{const O=rn(m.cell,i)?m.cell:null,I=cT(O);to(I)};function o(m){if(!_w(m))return!1;const E=e.getAllCells().map(I=>({r:I.r,c:I.c})),O=Cu(E);return to(O),!0}function a(m){if(!vw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=Ew(m);return Dr(E),!0}return m.type==="keyup"?(bT(),!0):!1}function c(m){if(!pw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),O=r[(E+1)%r.length];return Dr(O),Iu(O),!0}else{const E=mw(m.code);return Dr(E),Iu(E),!0}}function u(m){if(!Ow(m))return!1;const E=ct(Ni).lastCell;let O=null;if(E!==null){const[A,D]=Iw(m),[M,z]=[xg(E.r+D,0,i.nRows-1),xg(E.c+A,0,i.nCols-1)];O={r:M,c:z}}else O={r:0,c:0};const I=Vg(m,!1),w=uT(O,I);return to(w),!0}function _(m){const E=hw(m);if(E===void 0)return!1;const O=ct(Ni).cells,I=[];if(O.forEach(w=>{const A=e.getCell(w.r,w.c);A&&I.push(A)}),n===d.FOG)return P$(E,I,O);if(E===null){const{tool:w,cells:A}=F$(I,n);if(A.length)return ls(O,A,w,E),!0}else{let w=gs(I,n,"different",E,!0);if(w.length)return ls(O,w,n,E),!0;if(w=gs(I,n,"equal",E,!0),w.length)return ls(O,w,n,E),!0}return!1}function p(m){return m.repeat?!1:_(m.key)}const g=bt.throttle(m=>{eo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&eo.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){eo.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||p(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function B$(t,e,n,r){const i=[Pe.N,Pe.NE,Pe.E,Pe.SE,Pe.S,Pe.SW,Pe.W,Pe.NW],o=new pl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(_||(_={}));let p=0;function g(E){const O=ct(vt),I=E.cell;if(!rn(E.cell,a))return;E.event.altKey&&(p=2);const A=ka(O,n,I),D=od(E.direction);if(A){[u,c]=A,c.direction===D||p===2?Mi(u,c,n):(c={...c,direction:D},Yt(n,u,c));return}else p!==2&&(c=fp(n,I,D),u=bt.uniqueId(),ci(u,c,n,!0))}function v(E){if(!c||!u||!fw(E))return;const I=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[I]},Yt(n,u,c)}return o.onDragStart=E=>{p=0,g(E)},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:E=>{v(E)},keyUp:()=>{}}}function W$(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function z$(t,e,n,r){const i=new pl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function p(v){const m=ct(vt),E=v.cell;if(!rn(v.cell,o))return;v.event.altKey&&(_=2);const I=od(v.direction),w=ka(m,n,E);if(w){if(c=w[0],a=w[1],_===2)xi(n,w[0]);else{const A=W$(a.directions,I);A.length?(a={...a,directions:A},Yt(n,c,a)):xi(n,c)}return}else _!==2&&(a=gp(n,E,I),c=bt.uniqueId(),li(c,a))}return i.onDragStart=v=>{_=0,p(v)},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class Y${constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"_prevCoord",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Fn(e,n);if(!r)return;const i=as(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=as(r,this._margin);if(!i||this._prevCoord&&qe(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Fn(e,n);if(!r)return;const i=as(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function j$(t,e,n,r){const i=new Y$,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ct(vt),m=g.coord,E=sd(m);if(!E.every(w=>rn(w,o)))return;let I=null;if(c===0&&(I=KR(v,n,E),c=I?2:1),I&&c===2){const w=I[0];Mi(w,I[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",A=up(n,E,w),D=bt.uniqueId();ci(D,A,n,!0)}}function _(g){const v=ct(Bt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!po(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=Ls(m,O),Yt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class K${constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"onMove",null);Ee(this,"_prevCoord",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Fn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=ss(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=ss(r,this._margin);if(!i||this._prevCoord&&qe(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Fn(e,n);if(!r)return;const i=ss(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function V$(t,e,n,r){const i=new K$,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ct(vt),m=g.coord,E=id(m);if(!E.every(w=>rn(w,o)))return;let I=null;if(c===0&&(I=VR(v,n,m),c=I?2:1),I&&c===2){const w=I[0];Mi(w,I[1],n);return}else if(c===1){const w=cp(n,E,r==null?void 0:r.defaultValue),A=bt.uniqueId();ci(A,w,n,!0)}}function _(g){const v=ct(Bt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!po(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=Ls(m,O),Yt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class X${constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"_prevType",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Fn(e,n);if(!r)return;const i=nu(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Fn(e,n);if(!r)return;const i=nu(r,!1);if(!i||this._prevCoords&&qe(this._prevCoords,i.target))return;this._isTap=!1;const o={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Cp(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Fn(e,n);if(!r)return;const i=nu(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&qe(this._prevCoords,i.target)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function q$(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new X$;return r.onTap=o=>{const a=o.coords,c=ct($a),u=ct(Ua);if(o.type==="cell center"){if(!wx(a,n))return;const p=u.getCellMarker(a);if(p)if(p.marker==="X"){const g={...a,colorId:c,marker:"O"},v=Aa(g),m=Aa(p),E=Oi(v,m);pn(E)}else{const g=kg(a),v=Aa(p),m=Oi(g,v);pn(m)}else{const g={...a,colorId:c,marker:"X"},v=Aa(g),m=kg(a),E=Oi(v,m);pn(E)}}else if(o.type==="edge"){const _=u.getEdgeMarker(a);if(_){const p=Dg(a),g=Tg(_),v=Oi(p,g);pn(v)}else{const p={...a,colorId:c},g=Tg(p),v=Dg(a),m=Oi(g,v);pn(m)}}},r.onDrag=o=>{const a=o.coords,c=ct($a);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},_=vT(u);mr(_)}},r.onDragEnd=()=>{const o=ct(Ua);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>ro(c,u)));if(a.length){const c=fs(a),u=Gg(a),_=Oi(c,u);pn(_)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>ro(c,u)));if(a.length){const c=Gg(a),u=fs(a),_=Oi(c,u);pn(_)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function Z$(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function Q$(t,e){const n=Vh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function J$(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function eF(t){for(let e=0;;e++){const n=J$(e);if(!t.has(n))return n}}function tF(t,e,n){const r=new Ro,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,_="cells2",p;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(p||(p={}));let g=0;function v(E){const O=ct(vt),I=E.cell;if(!rn(E.cell,i))return;const A=JR(O,n,I);if(g===0&&(A?(c=A[0],o=A[1],g=2,u=I,_=o.cells2.some(M=>qe(M,I))?"cells2":"cells"):g=1),g===1&&c===null){c=bt.uniqueId();const D=eT(O,n),M=eF(D);o=Z$(n,[I],M),li(c,o);return}else if(g===1&&c&&o){o=Q$(o,I),Yt(n,c,o);return}else if(g===2&&c&&o&&u){const D={r:I.r-u.r,c:I.c-u.c},z=(_==="cells2"?o.cells2:o.cells).map(F=>({r:F.r+D.r,c:F.c+D.c}));if(!z.every(F=>rn(F,i)))return;_==="cells"?o={...o,cells:z}:o={...o,cells2:z},u=I,Yt(n,c,o)}}return r.onDragStart=E=>{c=null,o=null,g=0,u=null,v(E)},r.onDrag=E=>{v(E)},r.onDragEnd=()=>{c&&o&&(g===1?ci(c,o,n):g===2&&wu(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(xi(n,c),c=null,o=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function nF(t){if(t.type===he.SELECTION)return function(n,r,i){return H$(n,r,i)};if(t.type===he.SINGLE_CELL){let e=function(r,i,o){return G$(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_ARROW){let e=function(r,i,o){return B$(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return z$(r,i,o,n)};const n=t;return e}else if(t.type===he.EDGE){let e=function(r,i,o){return j$(r,i,o,n)};const n=t;return e}else if(t.type===he.CORNER){let e=function(r,i,o){return V$(r,i,o,n)};const n=t;return e}else if(t.type===he.LINE){let e=function(r,i,o){return k$(r,i,o,n)};const n=t;return e}else if(t.type===he.ARROW){let e=function(r,i,o){return D$(r,i,o,n)};const n=t;return e}else if(t.type===he.CAGE){let e=function(r,i,o){return $$(r,i,o,n)};const n=t;return e}else{if(t.type===he.CLONE)return function(n,r,i){return tF(n,r,i)};if(t.type===he.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return M$(r,i,o,n)};const n=t;return e}else if(t.type===he.OUTSIDE_DIRECTION){let e=function(r,i,o){return U$(r,i,o,n)};const n=t;return e}else if(t.type===he.PEN)return function(n,r){return q$(n,r)}}}const Jp=uo([so,bn,on],([t,e,n])=>{const r=Si(n,Mt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?nF(i):void 0;return o?o(t,e,n):void 0});var rF=se('<path class="cursor svelte-zsq70u"></path>');function iF(t,e){de(e,!1);const n=Ke(),r=()=>Ce(on,"$toolStore",n),i=()=>Ce(Ni,"$selectionStore",n),o=R(),a=R(),c=.25;function u(p){if(!p)return"";const[g,v]=[p.c,p.r];return`M${g},${v}L${g+c},${v}L${g},${v+c}Z`}k(()=>r(),()=>{y(o,Zu(r()))}),k(()=>i(),()=>{y(a,u(i().lastCell))}),ye(),ve();var _=rF();ne(()=>{S(_,"d",f(a)),S(_,"visibility",f(o)?"visible":"hidden")}),T(t,_),_e()}var oF=se('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function sF(t,e){de(e,!1);let n=$(e,"gridShape",8);ve();var r=oF(),i=Z(r);S(i,"x",0),S(i,"y",0),j(r),ne(()=>{S(i,"width",n().nCols),S(i,"height",n().nRows)}),T(t,r),_e()}var aF=se('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),lF=se('<g class="grid-lines"></g>');function cF(t,e){de(e,!1);const n=Ke(),r=()=>Ce(bn,"$gridStore",n),i=R();k(()=>r(),()=>{y(i,r().getAllCells())}),ye(),ve();var o=lF();dt(o,5,()=>f(i),St,(a,c)=>{var u=aF();S(u,"width",1),S(u,"height",1),ne(()=>{S(u,"x",f(c).c),S(u,"y",f(c).r)}),T(a,u)}),j(o),T(t,o),_e()}function uF(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function dF(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=uF(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],_=JSON.stringify(c),p=JSON.stringify(u);n(_,p)}}return e}function _F(t,e=0,n=!1){const r=[],i=dF(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const p=Array.from(u)[0];let g=JSON.parse(p),v=p;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const O=new Te(_.c,_.r),I=new Te(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,D=null;for(const J of E){const fe=JSON.parse(J),pe=new Te(fe.c,fe.r),be=I.subtract(O),Ae=pe.subtract(I),Ue=be.perpDotProduct(Ae);w<Ue!=n&&(w=Ue,D=fe,A=J)}if(n&&E.size>1&&o.add(v),D===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(v);const M=e*(g.c-_.c),z=e*(D.c-g.c),W=e*(_.r-g.r),F=e*(g.r-D.r),P=F+w*z,X=M+w*W,re=new Te(g.c+P,g.r+X),q=4;o.has(v)?(m.push(new Te(re.x-q*M,re.y-q*z)),m.push(new Te(re.x-q*W,re.y-q*F))):m.push(re),_=g,g=D,v=A}while(v!==p);r.push(m)}return r}function co(t,e=0,n=!1){return _F(t,e,n).map(o=>To(o,!0)).join("")}const fF=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function gF(t,e,n=fF){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,_=c/(360/i),p=u/(360/i),g=Math.floor(_)%i,v=Math.ceil(_)%i,m=n[g].lerp(n[v],_%1),E=Math.floor(p)%i,O=Math.ceil(p)%i,I=n[E].lerp(n[O],p%1);r.push(m);for(let A=Math.ceil(_);A<=Math.floor(p);A++)r.push(n[A%i]);r.push(I);const w=new Te(0,0);return r.push(w),r}function ev(t,e,n=new Te(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),p=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Te(_,p));c.push(g)}return c}function To(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function ri(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(p=>new Te(p.x,p.y));if(r&&o.length>1){const p=o[o.length-1];for(let v=0;v<o.length-1;v++)if(p.equals(o[v])){o.push(o[v+1]);break}const g=o[0];for(let v=1;v<o.length;v++)if(g.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let p=o[1].subtract(o[0]);p=p.normalise(),p=p.scale(e),o[0]=o[0].add(p)}if(n){const p=o.length;let g=o[p-2].subtract(o[p-1]);g=g.normalise(),g=g.scale(n),o[p-1]=o[p-1].add(g)}}if(!i)return To(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let p=2;p<u;p++){const g=o[p-2],v=o[p-1],m=o[p];let E=g.subtract(v).normalise();E=E.scale(i),E=E.add(v);let O=m.subtract(v).normalise();O=O.scale(i),O=O.add(v),c.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${O.x},${O.y}`)}const _=o[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function Ha(t,e={}){const n=Ba(t);return ri(n,e)}function Qn(t){return new Te(t.c+.5,t.r+.5)}function Ba(t){return t.map(n=>Qn(n))}const hF=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function pF(t,e){const n=hF[t];return n.subtract(n.scale(e))}function tv(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(o=>To(o,!1)).join("")}const vF=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function vl(t,e="none"){return vF.get(t)||e}function mF(t,e,n){let r=[];function o(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:a=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const _=new Te(n+.5,e+.5);return u.add(_)})),r}function Td(t,e){const n=[new Te(-t,0),new Te(0,0),new Te(0,t)],i={[Pe.NE]:0,[Pe.E]:Math.PI/4,[Pe.SE]:Math.PI/2,[Pe.S]:3*Math.PI/4,[Pe.SW]:Math.PI,[Pe.W]:5*Math.PI/4,[Pe.NW]:3*Math.PI/2,[Pe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}var EF=se('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),CF=se('<g class="regions-border"></g>');function OF(t,e){de(e,!1);const n=Ke(),r=()=>Ce(vn,"$cellsStore",n),i=R(),o=R();function a(u,_){return u.filter(v=>v.region===_).map(v=>({r:v.r,c:v.c}))}k(()=>r(),()=>{y(i,r())}),k(()=>f(i),()=>{y(o,new Set(f(i).map(u=>u.region).filter(u=>u!==null)))}),ye(),ve();var c=CF();dt(c,5,()=>f(o),St,(u,_)=>{var p=EF();ne(()=>S(p,"d",co(a(f(i),f(_)),0,!1))),ne(()=>S(p,"id",`region-${f(_)??""}`)),T(u,p)}),j(c),T(t,c),_e()}var IF=se('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function bF(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Ni,"$selectionStore",n),i=()=>Ce(on,"$toolStore",n),o=R(),a=R(),c=R(),u=R(),_=R(),p=R();let g=$(e,"boundingBox",8);const v=.06,m=.05,E="#080808",O="#b2b2b2";k(()=>ee(g()),()=>{y(o,g().x)}),k(()=>ee(g()),()=>{y(a,g().y)}),k(()=>r(),()=>{y(c,r().cells)}),k(()=>f(c),()=>{y(u,co(f(c),0))}),k(()=>f(c),()=>{y(_,co(f(c),v))}),k(()=>i(),()=>{y(p,Zu(i()))}),ye(),ve();var I=IF(),w=Z(I),A=Z(w);S(A,"stdDeviation",m),yi(),j(w);var D=G(w),M=Z(D);S(M,"fill",O);var z=G(M);S(z,"fill",E),j(D);var W=G(D);j(I),ne(()=>{S(I,"visibility",f(p)?"visible":"hidden"),S(D,"x",f(o)),S(D,"y",f(a)),S(M,"x",f(o)),S(M,"y",f(a)),S(z,"d",f(_)),S(W,"d",f(u))}),T(t,I),_e()}var wF=se('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function yF(t,e){de(e,!1);const n=R(),r=R();let i=$(e,"grid",8);k(()=>ee(i()),()=>{y(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),k(()=>f(n),()=>{y(r,co(f(n),0))}),ye(),ve();var o=wF(),a=Z(o);j(o),ne(()=>S(a,"d",f(r))),T(t,o),_e()}function LF(t,e){const n=t.getRow(e.r);return new Set(n)}function AF(t,e){const n=t.getCol(e.c);return new Set(n)}function SF(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function NF(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function xF(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function RF(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function TF(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function DF(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function kF(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((v,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function GF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function MF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function UF(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(NF(t,i))),e.get(d.ANTIKING)&&(r=r.union(xF(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(RF(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(DF(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(TF(t,i)))),r}function ru(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=MF(t,n,c);i=new Set([...i,...u])}return i}function $F(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],_=kF(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=GF(t,i,u);r=new Set([...r,..._])}return r=ru(t,e,i,d.KILLER_CAGE,r),r=ru(t,e,i,d.PARITY_BALANCE_CAGE,r),r=ru(t,e,i,d.SPOTLIGHT_CAGE,r),r}function nv(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...LF(i,e),...AF(i,e),...SF(i,e)])),n=new Set([...n,...UF(i,r,e)]),n=new Set([...n,...$F(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function FF(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(nv(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var PF=se('<tspan class="svelte-xct9ah"> </tspan>'),HF=se('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function BF(t,e){de(e,!1);const n=R();let r=$(e,"cell",8),i=$(e,"seen_values",8);const o=.25;function a(p){return i().find(v=>v===p)!==void 0}k(()=>ee(r()),()=>{y(n,Qn({r:r().r,c:r().c}))}),ye(),ve();var c=Ne(),u=ae(c);{var _=p=>{var g=HF(),v=Z(g);S(v,"font-size",o),dt(v,5,()=>r().centerMarks,St,(m,E)=>{var O=PF();const I=Qe(()=>a(f(E)));ne(()=>At(O,"conflict",f(I)));var w=Z(O,!0);j(O),ne(()=>it(w,f(E))),T(m,O)}),j(v),j(g),ne(()=>{S(v,"x",f(n).x),S(v,"y",f(n).y),S(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),T(p,g)};oe(u,p=>{r().centerMarks.length&&p(_)})}T(t,c),_e()}var WF=se('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),zF=se('<g class="corner-marks-group"></g>');function YF(t,e){de(e,!1);let n=$(e,"cell",8),r=$(e,"seen_values",8);const i=.25,o=.28;function a(g){const v=g.cornerMarks.slice(0,8),m=Qn({r:g.r,c:g.c});return v.map((E,O)=>{const I=pF(O,o);return{pos:m.add(I),value:E,idx:O}})}function c(g){return r().find(m=>m===g)!==void 0}ve();var u=Ne(),_=ae(u);{var p=g=>{var v=zF();dt(v,5,()=>a(n()),St,(m,E)=>{let O=()=>f(E).pos,I=()=>f(E).value;var w=WF();S(w,"font-size",i);const A=Qe(()=>c(I()));var D=Z(w,!0);j(w),ne(()=>{S(w,"x",O().x),S(w,"y",O().y),At(w,"conflict",f(A)),it(D,I())}),T(m,w)}),j(v),T(g,v)};oe(_,g=>{n().cornerMarks.length&&g(p)})}T(t,u),_e()}var jF=se('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),KF=se('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),VF=se('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),XF=se("<!><!>",1),qF=se('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function ZF(t,e){de(e,!1);const n=Ke(),r=()=>Ce(ii,"$settingsStore",n),i=()=>Ce(As,"$puzzleStore",n),o=()=>Ce(on,"$toolStore",n),a=R(),c=R(),u=R(),_=R(),p=R(),g=R(),v=R();let m=$(e,"cell",8);const E=.8,O=400;function I(z,W){if(!z)return[];let P=[...nv(f(p),W.toCoords())].map(X=>X.value).filter(X=>X!==null);return P=[...new Set(P)],P}function w(z){return z?"1":"0"}k(()=>ee(m()),()=>{y(a,m().value)}),k(()=>ee(m()),()=>{y(c,m().given)}),k(()=>ee(m()),()=>{y(u,Qn({r:m().r,c:m().c}))}),k(()=>r(),()=>{y(_,r().highlightPencilmarkConflicts)}),k(()=>i(),()=>{y(p,i())}),k(()=>r(),()=>{y(g,r().showSolution)}),k(()=>(f(_),ee(m())),()=>{y(v,I(f(_),m()))}),ye(),ve();var A=Ne(),D=ae(A);{var M=z=>{var W=qF(),F=Z(W);{var P=re=>{var q=Ne(),J=ae(q);{var fe=pe=>{var be=jF();S(be,"font-size",E),S(be,"font-weight",O);var Ae=Z(be,!0);j(be),ne(()=>{S(be,"x",f(u).x),S(be,"y",f(u).y),it(Ae,m().region)}),T(pe,be)};oe(J,pe=>{m().region!==null&&pe(fe)})}T(re,q)},X=re=>{var q=Ne(),J=ae(q);{var fe=be=>{var Ae=Ne(),Ue=ae(Ae);{var xe=me=>{var nt=KF();S(nt,"font-size",E),S(nt,"font-weight",O);var $e=Z(nt,!0);ne(()=>it($e,w(m().fog))),j(nt),ne(()=>{S(nt,"x",f(u).x),S(nt,"y",f(u).y)}),T(me,nt)};oe(Ue,me=>{m().fog!==null&&me(xe)})}T(be,Ae)},pe=be=>{var Ae=Ne(),Ue=ae(Ae);{var xe=nt=>{var $e=VF();S($e,"font-size",E),S($e,"font-weight",O);var wt=Z($e,!0);j($e),ne(()=>{S($e,"x",f(u).x),S($e,"y",f(u).y),At($e,"given",f(c)),it(wt,f(a))}),T(nt,$e)},me=nt=>{var $e=XF(),wt=ae($e);YF(wt,{get cell(){return m()},get seen_values(){return f(v)}});var xt=G(wt);BF(xt,{get cell(){return m()},get seen_values(){return f(v)}}),T(nt,$e)};oe(Ue,nt=>{f(a)!==null?nt(xe):nt(me,!1)},!0)}T(be,Ae)};oe(J,be=>{o()===d.FOG?be(fe):be(pe,!1)},!0)}T(re,q)};oe(F,re=>{o()===d.REGIONS?re(P):re(X,!1)})}j(W),ne(()=>At(W,"hide-given",m().given)),T(z,W)};oe(D,z=>{f(g)||z(M)})}T(t,A),_e()}var QF=se("<path></path>"),JF=se('<g class="highlights-group"></g>');function e8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(on,"$toolStore",n);let i=$(e,"cell",8);function o(_){const p=Qn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let O=gF(E,g);O=O.map(w=>w.add(p));const I=To(O,!0);return{colorId:m,d:I}})}ve();var a=Ne(),c=ae(a);{var u=_=>{var p=Ne(),g=ae(p);{var v=m=>{var E=JF();dt(E,5,()=>o(i()),St,(O,I)=>{let w=()=>f(I).colorId,A=()=>f(I).d;var D=QF();ne(()=>{oo(D,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),S(D,"d",A())}),T(O,D)}),j(E),T(m,E)};oe(g,m=>{i().highlights.length&&m(v)})}T(_,p)};oe(c,_=>{r()!==d.REGIONS&&_(u)})}T(t,a),_e()}var t8=se('<path class="cell-marker" fill="none"></path>'),n8=se('<circle fill="none" opacity="0.9"></circle>');function r8(t,e){de(e,!1);const n=R(),r=R();let i=$(e,"marker",8);const o=.3,a=.08;k(()=>ee(i()),()=>{y(n,tv(i(),o))}),k(()=>ee(i()),()=>{y(r,vl(i().colorId,"black"))}),ye(),ve();var c=Ne(),u=ae(c);{var _=g=>{var v=t8();S(v,"stroke-width",a),ne(()=>{S(v,"d",f(n)),S(v,"stroke",f(r))}),T(g,v)},p=g=>{var v=n8();S(v,"r",o),S(v,"stroke-width",a),ne(()=>{oo(v,`cell-marker color-${i().colorId??""}`),S(v,"cx",i().c),S(v,"cy",i().r),S(v,"stroke",f(r))}),T(g,v)};oe(u,g=>{i().marker==="X"?g(_):g(p,!1)})}T(t,c),_e()}var i8=se('<g class="cell-markers"></g>');function o8(t,e){let n=$(e,"markers",8);var r=i8();dt(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{r8(i,{get marker(){return f(o)}})}),j(r),T(t,r)}var s8=se('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function a8(t,e){de(e,!1);const n=R();let r=$(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(p=>[new Te(p.p1.c,p.p1.r),new Te(p.p2.c,p.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?vl(_,"black"):"darkred"}k(()=>ee(r()),()=>{y(n,To(o(r().draftLine)))}),ye(),ve();var c=s8();ne(()=>S(c,"stroke",a(r()))),S(c,"stroke-width",i),S(c,"opacity",.5),ne(()=>S(c,"d",f(n))),T(t,c),_e()}var l8=se('<path fill="none" opacity="0.9"></path>');function c8(t,e){de(e,!1);const n=R(),r=R();let i=$(e,"marker",8);const o=.08,a=.04;k(()=>ee(i()),()=>{y(n,tv(i(),o))}),k(()=>ee(i()),()=>{y(r,vl(i().colorId,"black"))}),ye(),ve();var c=l8();S(c,"stroke-width",a),ne(()=>{S(c,"d",f(n)),oo(c,`edge-marker color-${i().colorId??""}`),S(c,"stroke",f(r))}),T(t,c),_e()}var u8=se('<g class="edge-markers"></g>');function d8(t,e){let n=$(e,"markers",8);var r=u8();dt(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{c8(i,{get marker(){return f(o)}})}),j(r),T(t,r)}var _8=se('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),f8=se('<g class="line-markers svelte-yha19m"></g>');function g8(t,e){de(e,!1);let n=$(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return vl(c,"black")}ve();var a=f8();dt(a,5,n,c=>i(c),(c,u)=>{var _=_8();S(_,"stroke-width",r),ne(()=>S(_,"stroke",o(f(u).colorId))),ne(()=>{S(_,"x1",f(u).p1.c),S(_,"y1",f(u).p1.r),S(_,"x2",f(u).p2.c),S(_,"y2",f(u).p2.r),oo(_,`line-marker color-${f(u).colorId??""} svelte-yha19m`)}),T(c,_)}),j(a),T(t,a),_e()}var h8=se('<g class="pen-tool"><!><!><!><!></g>');function p8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Ua,"$penToolStore",n),i=R();k(()=>r(),()=>{y(i,{draftLine:r().draftLine,mode:r().mode})}),ye(),ve();var o=h8(),a=Z(o);g8(a,{get lineMarkers(){return r().lineMarkers}});var c=G(a);d8(c,{get markers(){return r().edgeMarkers}});var u=G(c);o8(u,{get markers(){return r().cellMarkers}});var _=G(u);a8(_,{get draftLineMarker(){return f(i)}}),j(o),T(t,o),_e()}var v8=se("<path></path>");function Tr(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R();let p=$(e,"cells",8),g=$(e,"shape",8,Qu);const v="square";k(()=>ee(g()),()=>{y(n,g().inset??.06)}),k(()=>ee(g()),()=>{y(r,g().stroke??"black")}),k(()=>ee(g()),()=>{y(i,g().strokeWidth??.03)}),k(()=>ee(g()),()=>{y(o,g().strokeDasharray??.08)}),k(()=>ee(g()),()=>{y(a,g().fill??"none")}),k(()=>ee(g()),()=>{y(c,g().connectDiag??!0)}),k(()=>(ee(p()),f(n),f(c)),()=>{y(u,co(p(),f(n),f(c)))}),k(()=>ee(g()),()=>{y(_,g().strokeLinejoin??"miter")}),ye(),ve();var m=v8();S(m,"stroke-linecap",v),ne(()=>{S(m,"d",f(u)),S(m,"stroke",f(r)),S(m,"stroke-width",f(i)),S(m,"fill",f(a)),S(m,"stroke-dasharray",f(o)),S(m,"stroke-linejoin",f(_))}),T(t,m),_e()}var m8=se('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function E8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Ni,"$selectionStore",n),i=()=>Ce(ii,"$settingsStore",n),o=()=>Ce(As,"$puzzleStore",n),a=()=>Ce(on,"$toolStore",n),c=R(),u=R(),_=R(),p=R(),g={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(I,w){return I.length?FF(f(_),I):[]}k(()=>r(),()=>{y(c,r().cells)}),k(()=>i(),()=>{y(u,i().highlightCellsSeenBySelection)}),k(()=>o(),()=>{y(_,o())}),k(()=>a(),()=>{y(p,Zu(a()))}),ye(),ve();var m=Ne(),E=ae(m);{var O=I=>{var w=m8(),A=Z(w),D=Qe(()=>v(f(c),f(_)));Tr(A,{get cells(){return f(D)},shape:g}),j(w),T(I,w)};oe(E,I=>{f(u)&&f(p)&&I(O)})}T(t,m),_e()}function ml(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...vp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function C8(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...ml(r))}return new Set(e)}function O8(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...ml(r))}return new Set(e)}function I8(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...ml(r))}return new Set(e)}function b8(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function w8(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function y8(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function L8(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=ml(i);o.length&&e.push(...o)}return new Set(e)}function A8(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...C8(t),...O8(t),...I8(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(b8(t))),e.get(d.ANTIKING)&&(n=n.union(w8(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(y8(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(L8(t))),n}function S8(t,e){return[...new Set([...A8(t,e)])]}var N8=se('<rect class="conflict svelte-4mp6ok"></rect>'),x8=se('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function R8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(ii,"$settingsStore",n),i=()=>Ce(bn,"$gridStore",n),o=()=>Ce(Pr,"$globalConstraintsStore",n),a=()=>Ce(vn,"$cellsStore",n),c=R(),u=R(),_=R(),p=R();B.CAGE;function g(O){return S8(f(u),f(_)).map(A=>A.toCoords())}k(()=>r(),()=>{y(c,r().checkConflicts)}),k(()=>i(),()=>{y(u,i())}),k(()=>o(),()=>{y(_,o())}),k(()=>a(),()=>{y(p,a())}),ye(),ve();var v=Ne(),m=ae(v);{var E=O=>{var I=x8();dt(I,5,()=>g(f(p)),St,(w,A)=>{var D=N8();S(D,"width",1),S(D,"height",1),ne(()=>{S(D,"x",f(A).c),S(D,"y",f(A).r)}),T(w,D)}),j(I),T(O,I)};oe(m,O=>{f(c)&&O(E)})}T(t,v),_e()}var T8=se('<line class="diag svelte-ylotlw"></line>'),D8=se('<line class="antidiag svelte-ylotlw"></line>'),k8=se('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),G8=se('<line class="diag svelte-ylotlw"></line>'),M8=se('<line class="antidiag svelte-ylotlw"></line>'),U8=se('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),$8=se('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function F8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Pr,"$globalConstraintsStore",n),i=()=>Ce(bn,"$gridStore",n),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R(),v=R(),m=R(),E=R(),O=R(),I=R(),w=0,A=0,D=0,M=0;k(()=>r(),()=>{y(o,r())}),k(()=>(f(o),d),()=>{y(a,!!f(o).get(d.POSITIVE_DIAGONAL))}),k(()=>(f(o),d),()=>{y(c,!!f(o).get(d.NEGATIVE_DIAGONAL))}),k(()=>(f(o),d),()=>{y(u,!!f(o).get(d.NEGATIVE_ANTIDIAGONAL))}),k(()=>(f(o),d),()=>{y(_,!!f(o).get(d.POSITIVE_ANTIDIAGONAL))}),k(()=>(f(o),d),()=>{y(p,!!f(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),k(()=>(f(o),d),()=>{y(g,!!f(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),k(()=>i(),()=>{y(v,i())}),k(()=>f(v),()=>{y(m,f(v).nCols)}),k(()=>f(v),()=>{y(E,f(v).nRows)}),k(()=>f(v),()=>{y(O,f(v).nCols)}),k(()=>f(v),()=>{y(I,f(v).nRows)}),ye(),ve();var z=$8(),W=Z(z);{var F=xe=>{var me=T8();S(me,"x1",w),S(me,"y1",A),ne(()=>{S(me,"x2",f(O)),S(me,"y2",f(I))}),T(xe,me)};oe(W,xe=>{f(c)&&xe(F)})}var P=G(W);{var X=xe=>{var me=D8();S(me,"x1",w),S(me,"y1",A),ne(()=>{S(me,"x2",f(O)),S(me,"y2",f(I))}),T(xe,me)};oe(P,xe=>{f(u)&&xe(X)})}var re=G(P);{var q=xe=>{var me=k8();S(me,"x1",w),S(me,"y1",A),ne(()=>{S(me,"x2",f(O)),S(me,"y2",f(I))}),T(xe,me)};oe(re,xe=>{f(p)&&xe(q)})}var J=G(re);{var fe=xe=>{var me=G8();S(me,"x2",M),S(me,"y1",D),ne(()=>{S(me,"x1",f(m)),S(me,"y2",f(E))}),T(xe,me)};oe(J,xe=>{f(a)&&xe(fe)})}var pe=G(J);{var be=xe=>{var me=M8();S(me,"x2",M),S(me,"y1",D),ne(()=>{S(me,"x1",f(m)),S(me,"y2",f(E))}),T(xe,me)};oe(pe,xe=>{f(_)&&xe(be)})}var Ae=G(pe);{var Ue=xe=>{var me=U8();S(me,"x2",M),S(me,"y1",D),ne(()=>{S(me,"x1",f(m)),S(me,"y2",f(E))}),T(xe,me)};oe(Ae,xe=>{f(g)&&xe(Ue)})}j(z),T(t,z),_e()}var P8=se('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function H8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(vn,"$cellsStore",n),i=()=>Ce(Ap,"$showFogStore",n),o=()=>Ce(il,"$solutionStore",n),a=()=>Ce(bn,"$gridStore",n),c=R(),u=R(),_=R(),p=R(),g=R(),v=R();let m=$(e,"boundingBox",8),E=$(e,"gridShape",8);function O(fe){const pe=fe.filter(me=>me.fog);if(!f(g))return pe.map(nt=>nt.toCoords());const be=fe.filter(me=>me.value===f(g)[me.r][me.c]);let Ae=new Set;for(const me of be){const nt=f(v).getNeighboorCells(me);Ae=new Set([...nt,me])}return[...new Set(pe).difference(Ae)].map(me=>me.toCoords())}k(()=>r(),()=>{y(c,r())}),k(()=>f(c),()=>{y(u,O(f(c)))}),k(()=>f(u),()=>{y(_,co(f(u),0))}),k(()=>i(),()=>{y(p,i())}),k(()=>o(),()=>{y(g,o())}),k(()=>a(),()=>{y(v,a())}),ye(),ve();var I=P8(),w=Z(I),A=Z(w);j(w);var D=G(w),M=Z(D);S(M,"stroke-width",.5);var z=G(M);S(z,"stroke-width",.375);var W=G(z);S(W,"stroke-width",.25);var F=G(W);S(F,"stroke-width",.125),yi(),j(D);var P=G(D),X=Z(P);yi(),j(P);var re=G(P),q=Z(re),J=G(q);S(J,"x",0),S(J,"y",0),j(re),j(I),ne(()=>{S(A,"d",f(_)),At(D,"disabled",!f(p)),At(P,"disabled",!f(p)),S(X,"x",m().x),S(X,"y",m().y),S(X,"width",m().width),S(X,"height",m().height),S(q,"x",m().x),S(q,"y",m().y),S(q,"width",m().width),S(q,"height",m().height),S(J,"width",E().nCols),S(J,"height",E().nRows)}),T(t,I),_e()}var B8=se('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function W8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Ap,"$showFogStore",n),i=R();let o=$(e,"gridShape",8);k(()=>r(),()=>{y(i,r())}),ye(),ve();var a=B8(),c=Z(a);S(c,"x",0),S(c,"y",0),j(a),ne(()=>{S(a,"visibility",f(i)?"visible":"hidden"),S(c,"width",o().nCols),S(c,"height",o().nRows)}),T(t,a),_e()}var z8=se('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function Y8(t,e){de(e,!1);const n=R();let r=$(e,"r",8),i=$(e,"c",8),o=$(e,"val",8);const a=.8,c=400;k(()=>(ee(r()),ee(i())),()=>{y(n,Qn({r:r(),c:i()}))}),ye(),ve();var u=Ne(),_=ae(u);{var p=g=>{var v=z8();S(v,"font-size",a),S(v,"font-weight",c);var m=Z(v,!0);j(v),ne(()=>{S(v,"x",f(n).x),S(v,"y",f(n).y),it(m,o())}),T(g,v)};oe(_,g=>{o()!==null&&g(p)})}T(t,u),_e()}var j8=se('<g class="solution-layer"></g>');function K8(t,e){de(e,!1);const n=Ke(),r=()=>Ce(il,"$solutionStore",n),i=()=>Ce(ii,"$settingsStore",n),o=()=>Ce(rl,"$gameModeStore",n),a=R(),c=R(),u=R();k(()=>r(),()=>{y(a,r())}),k(()=>i(),()=>{y(c,i().showSolution)}),k(()=>o(),()=>{y(u,o())}),ye(),ve();var _=Ne(),p=ae(_);{var g=v=>{var m=j8();dt(m,5,()=>f(a),St,(E,O,I)=>{var w=Ne(),A=ae(w);dt(A,1,()=>f(O),St,(D,M,z)=>{Y8(D,{r:I,c:z,get val(){return f(M)}})}),T(E,w)}),j(m),T(v,m)};oe(p,v=>{f(a)&&f(c)&&f(u)===_o.SETTING&&v(g)})}T(t,_),_e()}var V8=se("<g></g>"),X8=se('<g mask="url(#fog-mask-fog)"></g>');function fr(t,e){let n=$(e,"elements",8),r=$(e,"g_name",8),i=$(e,"Component",8);var o=X8();dt(o,5,n,St,(a,c)=>{let u=()=>f(c).toolId,_=()=>f(c).element;var p=V8();oo(p,"element-group"),dt(p,5,()=>Object.entries(_()),g=>g[0],(g,v)=>{i()(g,{get tool(){return f(v)[1]},get c_id(){return f(v)[0]}})}),j(p),ne(()=>S(p,"data-toolId",u())),T(a,p)}),j(o),ne(()=>oo(o,Nb(r()))),T(t,o)}function Er(t){return uo(vt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,element:o});return r})}const Dd=Er(Fb),q8=uo(Dd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),Z8=uo(Dd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),Q8=Er(Ku),J8=Er(Ah),e4=Er(Lh),t4=Er(Vu),n4=Er(Sh),r4=Er(Xu),i4=Er(qu),o4=Er(Nh),s4=Er(_s);var a4=se("<circle></circle>");function or(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=$(e,"x",8),_=$(e,"y",8),p=$(e,"shape",8);k(()=>ee(p()),()=>{y(n,p().r??.35)}),k(()=>ee(p()),()=>{y(r,p().stroke??"black")}),k(()=>ee(p()),()=>{var v;y(i,(v=p())==null?void 0:v.opacity)}),k(()=>ee(p()),()=>{y(o,p().strokeWidth??.02)}),k(()=>ee(p()),()=>{y(a,p().fill??"none")}),k(()=>ee(p()),()=>{y(c,p().strokeDasharray??0)}),ye(),ve();var g=a4();ne(()=>{S(g,"cx",u()),S(g,"cy",_()),S(g,"r",f(n)),S(g,"stroke",f(r)),S(g,"stroke-width",f(o)),S(g,"fill",f(a)),S(g,"opacity",f(i)),S(g,"stroke-dasharray",f(c))}),T(t,g),_e()}var l4=se('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Xg(t,e){de(e,!1);const n=R(),r=R(),i=R();let o=$(e,"shape",8),a=$(e,"coords",8);const[c,u]=a(),_=u.c,p=c.c===u.c?u.c+1:u.c,g=u.r,v=c.r===u.r?u.r+1:u.r;k(()=>ee(o()),()=>{y(n,o().stroke??"black")}),k(()=>ee(o()),()=>{var E;y(r,(E=o())==null?void 0:E.opacity)}),k(()=>ee(o()),()=>{y(i,o().strokeWidth??.02)}),ye(),ve();var m=l4();S(m,"x1",_),S(m,"x2",p),S(m,"y1",g),S(m,"y2",v),ne(()=>{S(m,"stroke",f(n)),S(m,"stroke-width",f(i)),S(m,"opacity",f(r))}),T(t,m),_e()}var c4=se("<ellipse></ellipse>");function u4(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R();let _=$(e,"cx",8),p=$(e,"cy",8),g=$(e,"shape",8);k(()=>ee(g()),()=>{y(n,g().width??.5)}),k(()=>ee(g()),()=>{y(r,g().height??.5)}),k(()=>ee(g()),()=>{y(i,g().stroke??"black")}),k(()=>ee(g()),()=>{var m;y(o,(m=g())==null?void 0:m.opacity)}),k(()=>ee(g()),()=>{y(a,g().strokeWidth??.02)}),k(()=>ee(g()),()=>{y(c,g().fill??"none")}),k(()=>ee(g()),()=>{y(u,g().angle??0)}),ye(),ve();var v=c4();ne(()=>{S(v,"cx",_()),S(v,"cy",p()),S(v,"rx",f(n)/2),S(v,"ry",f(r)/2),S(v,"stroke",f(i)),S(v,"stroke-width",f(a)),S(v,"fill",f(c)),S(v,"opacity",f(o)),S(v,"transform",`rotate(${f(u)}, ${_()}, ${p()} )`)}),T(t,v),_e()}var d4=se("<polygon></polygon>");function Wa(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R();let p=$(e,"cx",8),g=$(e,"cy",8),v=$(e,"shape",8);k(()=>ee(v()),()=>{y(n,v().n??3)}),k(()=>ee(v()),()=>{y(r,v().r??.5)}),k(()=>(f(r),f(n),ee(p()),ee(g())),()=>{y(i,ev(f(r),f(n),new Te(p(),g())))}),k(()=>f(i),()=>{y(o,f(i).map(E=>`${E.x},${E.y}`).join(" "))}),k(()=>ee(v()),()=>{y(a,v().stroke??"black")}),k(()=>ee(v()),()=>{y(c,v().strokeWidth??.02)}),k(()=>ee(v()),()=>{y(u,v().fill??"none")}),k(()=>ee(v()),()=>{y(_,v().angle??0)}),ye(),ve();var m=d4();ne(()=>{S(m,"points",f(o)),S(m,"stroke",f(a)),S(m,"stroke-width",f(c)),S(m,"fill",f(u)),S(m,"transform",`rotate(${f(_)}, ${p()}, ${g()} )`)}),T(t,m),_e()}var _4=se("<rect></rect>");function f4(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R();let _=$(e,"cx",8),p=$(e,"cy",8),g=$(e,"shape",8);k(()=>ee(g()),()=>{y(n,g().width??.5)}),k(()=>ee(g()),()=>{y(r,g().height??.5)}),k(()=>(ee(_()),f(n)),()=>{y(i,_()-f(n)/2)}),k(()=>(ee(p()),f(r)),()=>{y(o,p()-f(r)/2)}),k(()=>ee(g()),()=>{y(a,g().stroke||"black")}),k(()=>ee(g()),()=>{y(c,g().strokeWidth||.023)}),k(()=>ee(g()),()=>{y(u,g().fill||"none")}),ye(),ve();var v=_4();ne(()=>{S(v,"x",f(i)),S(v,"y",f(o)),S(v,"width",f(n)),S(v,"height",f(r)),S(v,"stroke",f(a)),S(v,"stroke-width",f(c)),S(v,"fill",f(u))}),T(t,v),_e()}var g4=se("<rect></rect>");function h4(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R(),v=R();let m=$(e,"cx",8),E=$(e,"cy",8),O=$(e,"shape",8);k(()=>ee(O()),()=>{y(n,O().r??.5)}),k(()=>(ee(m()),f(n)),()=>{y(r,m()-f(n))}),k(()=>(ee(E()),f(n)),()=>{y(i,E()-f(n))}),k(()=>f(n),()=>{y(o,2*f(n))}),k(()=>f(n),()=>{y(a,2*f(n))}),k(()=>ee(O()),()=>{y(c,O().stroke??"black")}),k(()=>ee(O()),()=>{y(u,O().strokeWidth??.02)}),k(()=>ee(O()),()=>{y(_,O().fill??"none")}),k(()=>ee(O()),()=>{y(p,O().angle??0)}),k(()=>ee(O()),()=>{y(g,O().strokeDasharray??0)}),k(()=>ee(O()),()=>{y(v,O().opacity??1)}),ye(),ve();var I=g4();ne(()=>{S(I,"x",f(r)),S(I,"y",f(i)),S(I,"width",f(o)),S(I,"height",f(a)),S(I,"stroke",f(c)),S(I,"stroke-width",f(u)),S(I,"fill",f(_)),S(I,"transform",`rotate(${f(p)}, ${m()}, ${E()})`),S(I,"stroke-dasharray",f(g)),S(I,"opacity",f(v))}),T(t,I),_e()}function vr(t,e){de(e,!1);const n=R();let r=$(e,"cx",8),i=$(e,"cy",8),o=$(e,"shape",8);k(()=>(ee(o()),B),()=>{var p;y(n,((p=o())==null?void 0:p.type)??B.CIRCLE)}),ye(),ve();var a=Ne(),c=ae(a);{var u=p=>{or(p,{get x(){return r()},get y(){return i()},get shape(){return o()}})},_=p=>{var g=Ne(),v=ae(g);{var m=O=>{u4(O,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=O=>{var I=Ne(),w=ae(I);{var A=M=>{h4(M,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},D=M=>{var z=Ne(),W=ae(z);{var F=X=>{f4(X,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},P=X=>{var re=Ne(),q=ae(re);{var J=pe=>{Wa(pe,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},fe=pe=>{or(pe,{get x(){return r()},get y(){return i()},get shape(){return o()}})};oe(q,pe=>{f(n)===B.POLYGON?pe(J):pe(fe,!1)},!0)}T(X,re)};oe(W,X=>{f(n)===B.RECTANGLE?X(F):X(P,!1)},!0)}T(M,z)};oe(w,M=>{f(n)===B.SQUARE?M(A):M(D,!1)},!0)}T(O,I)};oe(v,O=>{f(n)===B.ELLIPSE?O(m):O(E,!1)},!0)}T(p,g)};oe(c,p=>{f(n)===B.CIRCLE?p(u):p(_,!1)})}T(t,a),_e()}var p4=se("<!><!>",1),v4=se("<!><!>",1),m4=se("<!><!>",1),E4=se("<!><!>",1),C4=se('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function O4(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R();let g=$(e,"tool",8),v=$(e,"c_id",8);const m=un(g().toolId,Mt)??Th,E=g().cells;function O(M,z){return z===B.TEXT_ONLY?M.value?M.value:"-":M.value??""}function I(){if(g().toolId!==d.EDGE_INEQUALITY&&g().toolId!==d.ONE_WAY_DOOR)return 0;const M=Qn(E[0]);return Qn(E[1]).subtract(M).angle()/(2*Math.PI)*360}k(()=>r(),()=>{var M;y(i,(M=r())==null?void 0:M.id)}),k(()=>ee(g()),()=>{y(o,g().shape??m)}),k(()=>f(o),()=>{y(a,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),k(()=>Ba,()=>{y(c,x$(Ba(E)))}),k(()=>(f(o),B),()=>{var M;y(u,((M=f(o))==null?void 0:M.type)||B.CIRCLE)}),k(()=>f(o),()=>{var M;y(_,((M=f(o))==null?void 0:M.fontSize)??.2)}),k(()=>f(o),()=>{var M;y(p,((M=f(o))==null?void 0:M.fontColor)??"black")}),ye(),ve();var w=Ne(),A=ae(w);{var D=M=>{var z=C4(),W=Z(z);{var F=q=>{var J=p4(),fe=ae(J);{var pe=Ae=>{or(Ae,{get x(){return f(c).x},get y(){return f(c).y},get shape(){return f(a)}})};oe(fe,Ae=>{v()===f(i)&&Ae(pe)})}var be=G(fe);or(be,{get x(){return f(c).x},get y(){return f(c).y},get shape(){return f(o)}}),T(q,J)},P=q=>{var J=Ne(),fe=ae(J);{var pe=Ae=>{var Ue=v4(),xe=ae(Ue);{var me=$e=>{or($e,{get x(){return f(c).x},get y(){return f(c).y},get shape(){return f(a)}})};oe(xe,$e=>{v()===f(i)&&$e(me)})}var nt=G(xe);or(nt,{get x(){return f(c).x},get y(){return f(c).y},get shape(){return f(o)}}),T(Ae,Ue)},be=Ae=>{var Ue=Ne(),xe=ae(Ue);{var me=$e=>{var wt=m4(),xt=ae(wt);{var sn=kt=>{Xg(kt,{coords:E,get shape(){return f(a)}})};oe(xt,kt=>{v()===f(i)&&kt(sn)})}var Rt=G(xt);Xg(Rt,{coords:E,get shape(){return f(o)}}),T($e,wt)},nt=$e=>{var wt=E4(),xt=ae(wt);{var sn=kt=>{vr(kt,{get cx(){return f(c).x},get cy(){return f(c).y},get shape(){return f(a)}})};oe(xt,kt=>{v()===f(i)&&kt(sn)})}var Rt=G(xt);vr(Rt,{get cx(){return f(c).x},get cy(){return f(c).y},get shape(){return f(o)}}),T($e,wt)};oe(xe,$e=>{f(u)===B.BORDER_LINE?$e(me):$e(nt,!1)},!0)}T(Ae,Ue)};oe(fe,Ae=>{f(u)===B.TEXT_ONLY?Ae(pe):Ae(be,!1)},!0)}T(q,J)};oe(W,q=>{g().toolId===d.EDGE_INEQUALITY||g().toolId===d.ONE_WAY_DOOR?q(F):q(P,!1)})}var X=G(W);ne(()=>S(X,"transform",`rotate(${I()}, ${f(c).x}, ${f(c).y} )`));var re=Z(X,!0);ne(()=>it(re,O(g(),f(u)))),j(X),j(z),ne(()=>{S(X,"x",f(c).x),S(X,"y",f(c).y),S(X,"font-size",f(_)),S(X,"fill",f(p))}),T(M,z)};oe(A,M=>{E.length===2&&M(D)})}T(t,w),_e()}var I4=se('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),b4=se('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),w4=se('<g class="quadruple-text"><!></g>');function y4(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R();let c=$(e,"cornerTool",8);const u=c().cells,_=new Te(u[u.length-1].c,u[u.length-1].r),p=un(c().toolId,Mt)??Dh;k(()=>ee(c()),()=>{y(n,c().value)}),k(()=>ee(c()),()=>{y(r,c().shape??p)}),k(()=>f(r),()=>{var E;y(i,((E=f(r))==null?void 0:E.fontSize)??.2)}),k(()=>f(r),()=>{var E;y(o,((E=f(r))==null?void 0:E.fontColor)??"black")}),k(()=>f(n),()=>{var E;y(a,f(n)?(E=f(n))==null?void 0:E.split(","):[])}),ye(),ve();var g=Ne(),v=ae(g);{var m=E=>{var O=w4(),I=Z(O);{var w=D=>{var M=I4(),z=Z(M,!0);ne(()=>it(z,f(a).join(" "))),j(M),ne(()=>{S(M,"x",_.x),S(M,"y",_.y),S(M,"font-size",f(i)),S(M,"fill",f(o))}),T(D,M)},A=D=>{var M=b4(),z=ae(M),W=Z(z,!0);ne(()=>it(W,f(a).slice(0,2).join(" "))),j(z);var F=G(z),P=Z(F,!0);ne(()=>it(P,f(a).slice(2).join(" "))),j(F),ne(()=>{S(z,"x",_.x),S(z,"y",_.y),S(z,"dy",-f(i)/2),S(z,"font-size",f(i)),S(z,"fill",f(o)),S(F,"x",_.x),S(F,"y",_.y),S(F,"dy",f(i)/2),S(F,"font-size",f(i)),S(F,"fill",f(o))}),T(D,M)};oe(I,D=>{f(a).length<=2?D(w):D(A,!1)})}j(O),ne(()=>S(O,"data-count",f(a).length)),T(E,O)};oe(v,E=>{f(n)&&E(m)})}T(t,g),_e()}var L4=se('<text text-anchor="middle" dominant-baseline="central"> </text>'),A4=se('<g class="corner-tool"><!><!><!></g>');function S4(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R();let p=$(e,"tool",8),g=$(e,"c_id",8);const v=un(p().toolId,Mt)??Dh,m=p().cells,E=new Te(m[m.length-1].c,m[m.length-1].r);function O(D,M){return M===B.TEXT_ONLY?D.value?D.value:"-":D.value??""}k(()=>r(),()=>{var D;y(i,(D=r())==null?void 0:D.id)}),k(()=>ee(p()),()=>{y(o,p().shape??v)}),k(()=>(f(o),B),()=>{var D;y(a,((D=f(o))==null?void 0:D.type)??B.CIRCLE)}),k(()=>f(o),()=>{y(c,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),k(()=>f(o),()=>{var D;y(u,((D=f(o))==null?void 0:D.fontSize)??.2)}),k(()=>f(o),()=>{var D;y(_,((D=f(o))==null?void 0:D.fontColor)??"black")}),ye(),ve();var I=Ne(),w=ae(I);{var A=D=>{var M=A4(),z=Z(M);{var W=q=>{vr(q,{get cx(){return E.x},get cy(){return E.y},get shape(){return f(c)}})};oe(z,q=>{g()===f(i)&&q(W)})}var F=G(z);vr(F,{get cx(){return E.x},get cy(){return E.y},get shape(){return f(o)}});var P=G(F);{var X=q=>{y4(q,{get cornerTool(){return p()}})},re=q=>{var J=L4(),fe=Z(J,!0);ne(()=>it(fe,O(p(),f(a)))),j(J),ne(()=>{S(J,"x",E.x),S(J,"y",E.y),S(J,"font-size",f(u)),S(J,"fill",f(_))}),T(q,J)};oe(P,q=>{p().toolId===d.QUADRUPLE?q(X):q(re,!1)})}j(M),T(D,M)};oe(w,D=>{m.length===4&&D(A)})}T(t,I),_e()}var N4=se('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function hs(t,e){de(e,!1);const n=R();let r=$(e,"value",8,""),i=$(e,"fontSize",8,.2),o=$(e,"x",8),a=$(e,"y",8),c=$(e,"position",8,"TL"),u=$(e,"fontColor",8,"var(--text-primary-color)"),_=$(e,"fontWeight",8,400),p=R(null),g=R(null);function v(A,D,M){const z=["TL","TR"].includes(M),F=["TL","BL"].includes(M)?A+.05:A,P=D;return new Te(F,P)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}Rb(()=>{if(!f(p)||!f(g))return;const A=f(p).getBBox();f(g).setAttribute("x",String(A.x)),f(g).setAttribute("y",String(A.y+A.height*.1)),f(g).setAttribute("width",String(A.width)),f(g).setAttribute("height",String(A.height*.8))}),k(()=>(ee(o()),ee(a()),ee(c())),()=>{y(n,v(o(),a(),c()))}),ye(),ve();var O=Ne(),I=ae(O);{var w=A=>{var D=N4(),M=ae(D);Li(M,F=>y(g,F),()=>f(g));var z=G(M);ne(()=>S(z,"text-anchor",m(c()))),ne(()=>S(z,"dominant-baseline",E(c())));var W=Z(z,!0);j(z),Li(z,F=>y(p,F),()=>f(p)),ne(()=>{var F,P;S(z,"x",(F=f(n))==null?void 0:F.x),S(z,"y",(P=f(n))==null?void 0:P.y),S(z,"font-size",i()),S(z,"fill",u()),S(z,"font-weight",_()),it(W,r())}),T(A,D)};oe(I,A=>{r().length&&A(w)})}T(t,O),_e()}var x4=se('<text text-anchor="middle" dominant-baseline="central"> </text>'),R4=se('<g class="center-corner-or-edge-tool"><!><!><!></g>');function T4(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R();let v=$(e,"tool",8),m=$(e,"c_id",8);const E=v().cell,O=un(v().toolId,Mt)??Th;function I(P,X){return X===B.TEXT_ONLY?P.value?P.value:"-":P.value??""}k(()=>r(),()=>{var P;y(i,(P=r())==null?void 0:P.id)}),k(()=>ee(v()),()=>{y(o,v().shape??O)}),k(()=>f(o),()=>{y(a,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),k(()=>{},()=>{y(c,E)}),k(()=>(f(o),B),()=>{var P;y(u,((P=f(o))==null?void 0:P.type)||B.CIRCLE)}),k(()=>f(o),()=>{var P;y(_,((P=f(o))==null?void 0:P.fontSize)??.2)}),k(()=>f(o),()=>{var P;y(p,((P=f(o))==null?void 0:P.fontColor)??"black")}),k(()=>f(c),()=>{y(g,f(c).r%1===.5&&f(c).c%1===.5)}),ye(),ve();var w=R4(),A=Z(w);{var D=P=>{vr(P,{get cx(){return f(c).c},get cy(){return f(c).r},get shape(){return f(a)}})};oe(A,P=>{m()===f(i)&&P(D)})}var M=G(A);vr(M,{get cx(){return f(c).c},get cy(){return f(c).r},get shape(){return f(o)}});var z=G(M);{var W=P=>{var X=Qe(()=>I(v(),f(u))),re=Qe(()=>Math.floor(f(c).c)),q=Qe(()=>Math.floor(f(c).r));hs(P,{get value(){return f(X)},get x(){return f(re)},get y(){return f(q)},position:"TL",get fontColor(){return f(p)}})},F=P=>{var X=x4(),re=Z(X,!0);ne(()=>it(re,I(v(),f(u)))),j(X),ne(()=>{S(X,"x",f(c).c),S(X,"y",f(c).r),S(X,"font-size",f(_)),S(X,"fill",f(p))}),T(P,X)};oe(z,P=>{f(g)?P(W):P(F,!1)})}j(w),T(t,w),_e()}var D4=se('<path fill="none"></path>');function ti(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=$(e,"linePoints",8),_=$(e,"shape",8,void 0);const p="round",g="round";k(()=>ee(_()),()=>{var m;y(n,((m=_())==null?void 0:m.stroke)??"gray")}),k(()=>ee(_()),()=>{var m;y(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),k(()=>ee(_()),()=>{var m;y(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),k(()=>ee(_()),()=>{var m;y(o,((m=_())==null?void 0:m.strokeDashoffset)??0)}),k(()=>ee(_()),()=>{var m,E,O,I,w,A,D,M;y(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((I=(O=_())==null?void 0:O.linePathOptions)==null?void 0:I.shortenTail)??.2,bezierRounding:((A=(w=_())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((M=(D=_())==null?void 0:D.linePathOptions)==null?void 0:M.closeLoops)??!1})}),k(()=>(ee(u()),f(a)),()=>{y(c,ri(u(),f(a)))}),ye(),ve();var v=D4();S(v,"stroke-linejoin",p),S(v,"stroke-linecap",g),ne(()=>{S(v,"d",f(c)),S(v,"stroke",f(n)),S(v,"stroke-width",f(r)),S(v,"stroke-dasharray",f(i)),S(v,"stroke-dashoffset",f(o))}),T(t,v),_e()}var k4=le("<!> <!> <!>",1);function iu(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R();let a=$(e,"linePoints",8),c=$(e,"shape",8,vs);function u(I){var D;const w=bt.cloneDeep(I);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=I.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(D=w.linePathOptions)==null?void 0:D.bezierRounding},w}k(()=>ee(a()),()=>{y(n,a().length)}),k(()=>(f(n),ee(a())),()=>{y(r,f(n)>=0?a()[0]:void 0)}),k(()=>(f(n),ee(a())),()=>{y(i,f(n)>=0?a()[f(n)-1]:void 0)}),k(()=>ee(c()),()=>{y(o,u(c()))}),ye(),ve();var _=k4(),p=ae(_);{var g=I=>{or(I,{get x(){return f(r).x},get y(){return f(r).y},get shape(){return f(o)}})};oe(p,I=>{f(r)&&I(g)})}var v=G(p,2);{var m=I=>{ti(I,{get linePoints(){return a()},get shape(){return f(o)}})};oe(v,I=>{f(n)>1&&I(m)})}var E=G(v,2);{var O=I=>{or(I,{get x(){return f(i).x},get y(){return f(i).y},get shape(){return f(o)}})};oe(E,I=>{f(i)&&I(O)})}T(t,_),_e()}var G4=le("<!> <!> <!>",1);function ou(t,e){de(e,!1);const n=R(),r=R(),i=R();let o=$(e,"linePoints",8),a=$(e,"shape",12,vs);const c=4,u=.5;function _(M,z){const W=z.r??u,F=z.n??c,P=z.angle??0,X=ev(W,F,new Te(0,0),!0,0),re=(F+(M-P/360)*F%F)%F,q=Math.floor(re)%F,J=Math.ceil(re)%F;return X[q].lerp(X[J],re%1).length()}function p(M){if(f(n)<=1)return 0;const z=o()[0],F=o()[1].subtract(z).angle()/(2*Math.PI);return _(F,M)}function g(M){if(f(n)<=1)return 0;const z=o()[f(n)-1],F=o()[f(n)-2].subtract(z).angle()/(2*Math.PI);return _(F,M)}function v(M){var W;const z=bt.cloneDeep(M);return z.r=z.r||u,z.opacity=1,z.linePathOptions={shortenHead:p(z),shortenTail:g(z),bezierRounding:(W=z.linePathOptions)==null?void 0:W.bezierRounding},z}k(()=>ee(o()),()=>{y(n,o().length)}),k(()=>(f(n),ee(o())),()=>{y(r,f(n)>=0?o()[0]:void 0)}),k(()=>(f(n),ee(o())),()=>{y(i,f(n)>=0?o()[f(n)-1]:void 0)}),k(()=>ee(a()),()=>{a(v(a()))}),ye(),ve();var m=G4(),E=ae(m);{var O=M=>{Wa(M,{get cx(){return f(r).x},get cy(){return f(r).y},get shape(){return a()}})};oe(E,M=>{f(r)&&M(O)})}var I=G(E,2);{var w=M=>{ti(M,{get linePoints(){return o()},get shape(){return a()}})};oe(I,M=>{f(n)>1&&M(w)})}var A=G(I,2);{var D=M=>{Wa(M,{get cx(){return f(i).x},get cy(){return f(i).y},get shape(){return a()}})};oe(A,M=>{f(i)&&M(D)})}T(t,m),_e()}var M4=le("<!> <!>",1);function su(t,e){de(e,!1);const n=R();let r=$(e,"linePoints",8),i=$(e,"shape",8,vs);function o(m){var I,w,A;const E=bt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const O=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||O,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var I,w,A;const E=bt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const O=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||O,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}k(()=>ee(r()),()=>{y(n,r().length>0?r()[0]:void 0)}),ye(),ve();var c=M4(),u=ae(c);{var _=m=>{var E=Qe(()=>o(i()));ti(m,{get linePoints(){return r()},get shape(){return f(E)}})};oe(u,m=>{r().length>1&&m(_)})}var p=G(u,2);{var g=m=>{var E=Qe(()=>o(i()));or(m,{get x(){return f(n).x},get y(){return f(n).y},get shape(){return f(E)}})},v=m=>{var E=Ne(),O=ae(E);{var I=w=>{var A=Qe(()=>a(i()));Wa(w,{get cx(){return f(n).x},get cy(){return f(n).y},get shape(){return f(A)}})};oe(O,w=>{f(n)&&w(I)},!0)}T(m,E)};oe(p,m=>{f(n)&&i().type===B.THERMO_WITH_CIRCLE?m(g):m(v,!1)})}T(t,c),_e()}var U4=se("<!><!><!>",1),$4=se("<!><!><!>",1),F4=se("<!><!><!>",1),P4=se("<!><!><!>",1),H4=se('<g class="line-tool"><!></g>');function B4(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R();let g=$(e,"tool",8),v=$(e,"c_id",8);const m=un(g().toolId,Mt)??vs;k(()=>r(),()=>{var A;y(i,(A=r())==null?void 0:A.id)}),k(()=>ee(g()),()=>{y(o,Ba(g().cells))}),k(()=>ee(g()),()=>{y(a,g().shape??m)}),k(()=>(f(a),B),()=>{var A;y(c,((A=f(a))==null?void 0:A.type)||B.LINE)}),k(()=>f(a),()=>{var A;y(u,((A=f(a))==null?void 0:A.opacity)??1)}),k(()=>f(a),()=>{y(_,{...f(a),stroke:"var(--grid-background-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.06:.06})}),k(()=>f(a),()=>{y(p,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),ye(),ve();var E=H4(),O=Z(E);{var I=A=>{var D=U4(),M=ae(D);{var z=X=>{iu(X,{get linePoints(){return f(o)},get shape(){return f(_)}})};oe(M,X=>{X(z)})}var W=G(M);{var F=X=>{iu(X,{get linePoints(){return f(o)},get shape(){return f(p)}})};oe(W,X=>{v()===f(i)&&X(F)})}var P=G(W);iu(P,{get linePoints(){return f(o)},get shape(){return f(a)}}),T(A,D)},w=A=>{var D=Ne(),M=ae(D);{var z=F=>{var P=$4(),X=ae(P);{var re=pe=>{ou(pe,{get linePoints(){return f(o)},get shape(){return f(_)}})};oe(X,pe=>{pe(re)})}var q=G(X);{var J=pe=>{ou(pe,{get linePoints(){return f(o)},get shape(){return f(p)}})};oe(q,pe=>{v()===f(i)&&pe(J)})}var fe=G(q);ou(fe,{get linePoints(){return f(o)},get shape(){return f(a)}}),T(F,P)},W=F=>{var P=Ne(),X=ae(P);{var re=J=>{var fe=F4(),pe=ae(fe);{var be=me=>{su(me,{get linePoints(){return f(o)},get shape(){return f(_)}})};oe(pe,me=>{me(be)})}var Ae=G(pe);{var Ue=me=>{su(me,{get linePoints(){return f(o)},get shape(){return f(p)}})};oe(Ae,me=>{v()===f(i)&&me(Ue)})}var xe=G(Ae);su(xe,{get linePoints(){return f(o)},get shape(){return f(a)}}),T(J,fe)},q=J=>{var fe=P4(),pe=ae(fe);{var be=me=>{ti(me,{get linePoints(){return f(o)},get shape(){return f(_)}})};oe(pe,me=>{me(be)})}var Ae=G(pe);{var Ue=me=>{ti(me,{get linePoints(){return f(o)},get shape(){return f(p)}})};oe(Ae,me=>{v()===f(i)&&me(Ue)})}var xe=G(Ae);ti(xe,{get linePoints(){return f(o)},get shape(){return f(a)}}),T(J,fe)};oe(X,J=>{f(c)===B.THERMO_WITH_CIRCLE||f(c)===B.THERMO_WITH_POLYGON?J(re):J(q,!1)},!0)}T(F,P)};oe(M,F=>{f(c)===B.LINE_WITH_POLYGON_ENDS?F(z):F(W,!1)},!0)}T(A,D)};oe(O,A=>{f(c)===B.LINE_WITH_CIRCLE_ENDS?A(I):A(w,!1)})}j(E),ne(()=>S(E,"opacity",f(u))),T(t,E),_e()}var W4=le("<!> <!>",1);function rv(t,e){de(e,!1);const n=R(),r=R();let i=$(e,"cells",8),o=$(e,"shape",8,Qu),a=$(e,"value",8,void 0);k(()=>ee(i()),()=>{y(n,i()[0])}),k(()=>f(n),()=>{y(r,new Te(f(n).c,f(n).r))}),ye(),ve();var c=W4(),u=ae(c);Tr(u,{get cells(){return i()},get shape(){return o()}});var _=G(u,2);{var p=g=>{hs(g,{get value(){return a()},get x(){return f(r).x},get y(){return f(r).y},position:"TL"})};oe(_,g=>{a()&&a().length&&g(p)})}T(t,c),_e()}var z4=se('<g class="cage-tool"><!><!></g>');function Y4(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R();let c=$(e,"tool",8),u=$(e,"c_id",8);const _=un(c().toolId,Mt)??Qu;k(()=>ee(c()),()=>{y(i,c().shape??_)}),k(()=>r(),()=>{var E;y(o,(E=r())==null?void 0:E.id)}),k(()=>f(i),()=>{y(a,{...f(i),stroke:"var(--constraint-selected-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.07:.07})}),ye(),ve();var p=z4(),g=Z(p);{var v=E=>{Tr(E,{get cells(){return c().cells},get shape(){return f(a)}})};oe(g,E=>{u()===f(o)&&E(v)})}var m=G(g);rv(m,{get cells(){return c().cells},get shape(){return f(i)},get value(){return c().value}}),j(p),T(t,p),_e()}var j4=se("<!><!>",1),K4=se('<g class="clone-tool"><!><!><!><!><!></g>');function V4(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R(),v=R(),m=R();let E=$(e,"tool",8),O=$(e,"c_id",8);const I=un(E().toolId,Mt)??Xb,w=800,A=E().value;k(()=>r(),()=>{var re;y(i,(re=r())==null?void 0:re.id)}),k(()=>ee(E()),()=>{y(o,E().shape??I)}),k(()=>f(o),()=>{y(a,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),k(()=>f(o),()=>{y(c,f(o).inset??.15)}),k(()=>f(o),()=>{y(u,f(o).strokeWidth??.07)}),k(()=>f(o),()=>{y(_,f(o).fontColor??f(o).stroke??"black")}),k(()=>ee(E()),()=>{y(p,E().cells[E().cells.length-1])}),k(()=>ee(E()),()=>{y(g,E().cells2[E().cells2.length-1])}),k(()=>(f(p),f(c)),()=>{y(v,new Te(f(p).c+1-f(c)-.05,f(p).r+1-f(c)-.05))}),k(()=>(f(g),f(c)),()=>{y(m,new Te(f(g).c+1-f(c)-.05,f(g).r+1-f(c)-.05))}),ye(),ve();var D=K4(),M=Z(D);{var z=re=>{var q=j4(),J=ae(q);Tr(J,{get cells(){return E().cells},get shape(){return f(a)}});var fe=G(J);Tr(fe,{get cells(){return E().cells2},get shape(){return f(a)}}),T(re,q)};oe(M,re=>{O()===f(i)&&re(z)})}var W=G(M);Tr(W,{get cells(){return E().cells},get shape(){return f(o)}});var F=G(W);hs(F,{value:A,get x(){return f(v).x},get y(){return f(v).y},position:"BR",get fontColor(){return f(_)},fontWeight:w});var P=G(F);Tr(P,{get cells(){return E().cells2},get shape(){return f(o)}});var X=G(P);hs(X,{value:A,get x(){return f(m).x},get y(){return f(m).y},position:"BR",get fontColor(){return f(_)},fontWeight:w}),j(D),T(t,D),_e()}var X4=se('<g class="outside-direction-tool"><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function q4(t,e){var M;de(e,!1);const n=R(),r=R(),i=R(),o=R();let a=$(e,"tool",8);const c=a().cell,u=a().direction;Kh(c,u);const _=Qn(c),p=un(a().toolId,Mt)??qb,g=((M=f(n))==null?void 0:M.fontSize)??.5,v=.03;function m(z){return z.value&&z.value.length?z.value:"-"}function E(z,W){const F=bs(W),P=new Te(F.c,F.r).normalise(),X=Qn(z),re=X.add(P.scale(.35)),q=X.add(P.scale(.58));return[re,q]}function O(z,W){const P=E(z,W);let X=Td(.12,W);X=X.map(fe=>fe.add(P[1]));const re=ri(P),q=ri(X);return re+q}k(()=>ee(a()),()=>{y(n,a().shape??p)}),k(()=>f(n),()=>{var z;y(r,((z=f(n))==null?void 0:z.fontColor)??"var(--text-primary-color)")}),k(()=>f(n),()=>{var z;y(i,((z=f(n))==null?void 0:z.stroke)??"var(--text-primary-color)")}),k(()=>{},()=>{y(o,O(c,u))}),ye(),ve();var I=X4(),w=Z(I);S(w,"stroke-width",v);var A=G(w);S(A,"font-size",g);var D=Z(A,!0);ne(()=>it(D,m(a()))),j(A),j(I),ne(()=>{S(w,"d",f(o)),S(w,"stroke",f(i)),S(A,"x",_.x),S(A,"y",_.y),S(A,"fill",f(r))}),T(t,I),_e()}var Z4=le("<!> <!> <!>",1);function Q4(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R();let c=$(e,"linePoints",8),u=$(e,"shape",8);function _(I){const w=bt.cloneDeep(I);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}k(()=>ee(c()),()=>{y(n,c().length)}),k(()=>(f(n),ee(c())),()=>{y(r,f(n)>1&&c()[0].equals(c()[f(n)-1]))}),k(()=>(f(n),ee(c())),()=>{y(i,f(n)>=0?c()[0]:void 0)}),k(()=>(f(n),ee(c())),()=>{y(o,f(n)>=0?c()[f(n)-1]:void 0)}),k(()=>ee(u()),()=>{y(a,_(u()))}),ye(),ve();var p=Z4(),g=ae(p);ti(g,{get linePoints(){return c()},get shape(){return u()}});var v=G(g,2);{var m=I=>{or(I,{get x(){return f(i).x},get y(){return f(i).y},get shape(){return f(a)}})};oe(v,I=>{!f(r)&&f(i)&&I(m)})}var E=G(v,2);{var O=I=>{or(I,{get x(){return f(o).x},get y(){return f(o).y},get shape(){return f(a)}})};oe(E,I=>{!f(r)&&f(o)&&I(O)})}T(t,p),_e()}var J4=se('<g class="corner-line-tool"><!></g>');function eP(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R();let a=$(e,"tool",8);const c=un(a().toolId,Mt)??vs;k(()=>(ee(a()),Te),()=>{y(n,a().coords.map(v=>new Te(v.c,v.r)))}),k(()=>ee(a()),()=>{y(r,a().shape??c)}),k(()=>(f(r),B),()=>{var v;y(i,((v=f(r))==null?void 0:v.type)||B.LINE)}),k(()=>f(r),()=>{var v;y(o,((v=f(r))==null?void 0:v.opacity)??1)}),ye(),ve();var u=J4(),_=Z(u);{var p=v=>{Q4(v,{get linePoints(){return f(n)},get shape(){return f(r)}})},g=v=>{ti(v,{get linePoints(){return f(n)},get shape(){return f(r)}})};oe(_,v=>{f(i)===B.MAZE_WALL?v(p):v(g,!1)})}j(u),ne(()=>S(u,"opacity",f(o))),T(t,u),_e()}var tP=se('<path fill="none" stroke-linecap="round"></path>'),nP=se('<path fill="none" stroke-linecap="round"></path>'),rP=se('<!><!><path fill="none" stroke-linecap="round"></path>',1);function iP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R();let v=$(e,"tool",8),m=$(e,"c_id",8);const E=v().cell,O=un(v().toolId,Mt)??Kb;function I(P,X){const q=bs(X),J=new Te(q.c,q.r).normalise().scale(.3),fe=Qn(P),pe=fe.subtract(J),be=fe.add(J);return[pe,be]}function w(P,X){const q=I(P,X);let J=Td(.2,X);J=J.map(Ae=>Ae.add(q[1]));const fe=ri(q),pe=ri(J);return fe+pe}k(()=>r(),()=>{var P;y(i,(P=r())==null?void 0:P.id)}),k(()=>ee(v()),()=>{y(o,v().direction)}),k(()=>ee(v()),()=>{y(a,v().shape??O)}),k(()=>f(a),()=>{y(c,{...f(a),stroke:"var(--grid-background-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.05:.05})}),k(()=>f(a),()=>{y(u,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),k(()=>f(a),()=>{y(_,f(a).strokeWidth??.1)}),k(()=>f(a),()=>{y(p,f(a).stroke??"black")}),k(()=>f(o),()=>{y(g,w(E,f(o)))}),ye(),ve();var A=rP(),D=ae(A);{var M=P=>{var X=tP();ne(()=>{S(X,"d",f(g)),S(X,"stroke",f(c).stroke),S(X,"stroke-width",f(c).strokeWidth)}),T(P,X)};oe(D,P=>{P(M)})}var z=G(D);{var W=P=>{var X=nP();ne(()=>{S(X,"d",f(g)),S(X,"stroke",f(u).stroke),S(X,"stroke-width",f(u).strokeWidth)}),T(P,X)};oe(z,P=>{m()===f(i)&&P(W)})}var F=G(z);ne(()=>{S(F,"d",f(g)),S(F,"stroke",f(p)),S(F,"stroke-width",f(_))}),T(t,A),_e()}var oP=se('<path fill="none" stroke-linecap="round"></path>'),sP=se('<path fill="none" stroke-linecap="round"></path>'),aP=se('<path fill="none" stroke-linecap="round"></path>'),lP=se("<!><!><!>",1);function cP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R();let p=$(e,"tool",8),g=$(e,"c_id",8);const v=p().cell,m=un(p().toolId,Mt)??Vb,E=.2;function O(F,P){const X=bs(P),re=new Te(X.c,X.r),J=Qn(F).add(re.scale(.4));return[J.subtract(re.normalise().scale(E)),J]}function I(F,P){const re=O(F,P);let q=Td(.1,P);q=q.map(be=>be.add(re[1]));const J=ri(re),fe=ri(q);return J+fe}k(()=>r(),()=>{var F;y(i,(F=r())==null?void 0:F.id)}),k(()=>ee(p()),()=>{y(o,p().shape??m)}),k(()=>f(o),()=>{y(a,f(o).strokeWidth??.08)}),k(()=>f(o),()=>{y(c,f(o).stroke??"black")}),k(()=>f(o),()=>{y(u,{...f(o),stroke:"var(--grid-background-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.03:.03})}),k(()=>f(o),()=>{y(_,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.05:.05})}),ye(),ve();var w=lP(),A=ae(w);{var D=F=>{var P=Ne(),X=ae(P);dt(X,1,()=>p().directions,St,(re,q)=>{var J=oP();ne(()=>S(J,"d",I(v,f(q)))),ne(()=>{S(J,"stroke",f(u).stroke),S(J,"stroke-width",f(u).strokeWidth)}),T(re,J)}),T(F,P)};oe(A,F=>{F(D)})}var M=G(A);{var z=F=>{var P=Ne(),X=ae(P);dt(X,1,()=>p().directions,St,(re,q)=>{var J=sP();ne(()=>S(J,"d",I(v,f(q)))),ne(()=>{S(J,"stroke",f(_).stroke),S(J,"stroke-width",f(_).strokeWidth)}),T(re,J)}),T(F,P)};oe(M,F=>{g()===f(i)&&F(z)})}var W=G(M);dt(W,1,()=>p().directions,St,(F,P)=>{var X=aP();ne(()=>S(X,"d",I(v,f(P)))),ne(()=>{S(X,"stroke",f(c)),S(X,"stroke-width",f(a))}),T(F,X)}),T(t,w),_e()}var uP=se('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function qg(t,e){de(e,!1);const n=Ke(),r=()=>Ce(q8,"$minimumConstraintsStore",n),i=()=>Ce(Z8,"$maximumConstraintsStore",n),o=R(),a=R(),c=R();let u=$(e,"coord",8),_=$(e,"minOrMax",8);function p(I,w){const A=[!0,!0,!0,!0];let D=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<D.length;M++){let z=D[M];const W={r:I.r+z[1],c:I.c+z[0]};A[M]=!Object.values(w).some(F=>qe(W,F.cell))}return A}function g(I,w){let A=mF(_(),I.r,I.c);const D=p(I,w);return A=A.filter((z,W)=>D[W]),A.map(z=>To(z,!1)).join("")}function v(I,w){return _()==="max"?w:I}k(()=>ee(u()),()=>{y(o,u().c)}),k(()=>ee(u()),()=>{y(a,u().r)}),k(()=>(r(),i()),()=>{y(c,v(r(),i()))}),ye(),ve();var m=uP(),E=Z(m);S(E,"width",1),S(E,"height",1);var O=G(E);ne(()=>S(O,"d",g(u(),f(c)))),j(m),ne(()=>{S(E,"x",f(o)),S(E,"y",f(a))}),T(t,m),_e()}var dP=se("<circle></circle>");function _P(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=$(e,"x",8),_=$(e,"y",8),p=$(e,"value",8),g=$(e,"shape",8);k(()=>ee(g()),()=>{y(n,g().r??.35)}),k(()=>ee(g()),()=>{y(r,g().stroke??"black")}),k(()=>ee(g()),()=>{var m;y(i,(m=g())==null?void 0:m.opacity)}),k(()=>ee(g()),()=>{y(o,g().strokeWidth??.02)}),k(()=>ee(p()),()=>{y(a,p()==="1"?"var(--constraint-color-red)":p()==="2"?"var(--constraint-color-green)":p()==="3"?"var(--constraint-color-blue)":"none")}),k(()=>ee(g()),()=>{y(c,g().strokeDasharray??0)}),ye(),ve();var v=dP();ne(()=>{S(v,"cx",u()),S(v,"cy",_()),S(v,"r",f(n)),S(v,"stroke",f(r)),S(v,"stroke-width",f(o)),S(v,"fill",f(a)),S(v,"opacity",f(i)),S(v,"stroke-dasharray",f(c))}),T(t,v),_e()}var fP=se("<!><!>",1),gP=se("<!><!>",1),hP=se("<!><!><!>",1),pP=se('<g class="single-cell-tool"><!><!></g>');function vP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R();let v=$(e,"tool",8),m=$(e,"c_id",8);const E=v().cell,O=un(v().toolId,Mt)??jb;k(()=>r(),()=>{var W;y(i,(W=r())==null?void 0:W.id)}),k(()=>ee(v()),()=>{y(o,v().shape??O)}),k(()=>f(o),()=>{y(a,{...f(o),stroke:"var(--grid-background-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.06:.06})}),k(()=>f(o),()=>{y(c,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),k(()=>(f(o),B),()=>{var W;y(u,((W=f(o))==null?void 0:W.type)||B.CIRCLE)}),k(()=>{},()=>{y(_,{x:E.c+.5,y:E.r+.5})}),k(()=>Te,()=>{y(p,new Te(E.c,E.r))}),k(()=>ee(v()),()=>{y(g,v().value)}),ye(),ve();var I=pP(),w=Z(I);{var A=W=>{qg(W,{coord:E,minOrMax:"min"})},D=W=>{var F=Ne(),P=ae(F);{var X=q=>{qg(q,{coord:E,minOrMax:"max"})},re=q=>{var J=Ne(),fe=ae(J);{var pe=Ae=>{var Ue=fP(),xe=ae(Ue);{var me=$e=>{vr($e,{get cx(){return f(_).x},get cy(){return f(_).y},get shape(){return f(c)}})};oe(xe,$e=>{m()===f(i)&&$e(me)})}var nt=G(xe);_P(nt,{get x(){return f(_).x},get y(){return f(_).y},get value(){return f(g)},get shape(){return f(o)}}),T(Ae,Ue)},be=Ae=>{var Ue=Ne(),xe=ae(Ue);{var me=$e=>{var wt=gP(),xt=ae(wt);{var sn=kt=>{Tr(kt,{cells:[E],get shape(){return f(c)}})};oe(xt,kt=>{m()===f(i)&&kt(sn)})}var Rt=G(xt);rv(Rt,{cells:[E],get shape(){return f(o)},get value(){return v().value}}),T($e,wt)},nt=$e=>{var wt=hP(),xt=ae(wt);{var sn=Vt=>{vr(Vt,{get cx(){return f(_).x},get cy(){return f(_).y},get shape(){return f(a)}})};oe(xt,Vt=>{Vt(sn)})}var Rt=G(xt);{var kt=Vt=>{vr(Vt,{get cx(){return f(_).x},get cy(){return f(_).y},get shape(){return f(c)}})};oe(Rt,Vt=>{m()===f(i)&&Vt(kt)})}var Cr=G(Rt);vr(Cr,{get cx(){return f(_).x},get cy(){return f(_).y},get shape(){return f(o)}}),T($e,wt)};oe(xe,$e=>{f(u)===B.CAGE?$e(me):$e(nt,!1)},!0)}T(Ae,Ue)};oe(fe,Ae=>{v().toolId===d.COLORED_COUNTING_CIRCLES?Ae(pe):Ae(be,!1)},!0)}T(q,J)};oe(P,q=>{v().toolId===d.MAXIMUM?q(X):q(re,!1)},!0)}T(W,F)};oe(w,W=>{v().toolId===d.MINIMUM?W(A):W(D,!1)})}var M=G(w);{var z=W=>{hs(W,{get value(){return f(g)},get x(){return f(p).x},get y(){return f(p).y},position:"TL"})};oe(M,W=>{f(u)!==B.CAGE&&v().toolId!==d.COLORED_COUNTING_CIRCLES&&f(g)&&W(z)})}j(I),ne(()=>S(I,"id",`constraint-${m()}`)),T(t,I),_e()}function mP(t,e){de(e,!1);let n=$(e,"tool",8),r=$(e,"c_id",8);ve();var i=Ne(),o=ae(i);{var a=u=>{iP(u,{get tool(){return n()},get c_id(){return r()}})},c=u=>{var _=Ne(),p=ae(_);{var g=m=>{cP(m,{get tool(){return n()},get c_id(){return r()}})},v=m=>{var E=Ne(),O=ae(E);{var I=w=>{vP(w,{get tool(){return n()},get c_id(){return r()}})};oe(O,w=>{n().type==="SIMPLE"&&w(I)},!0)}T(m,E)};oe(p,m=>{n().type==="MULTIARROW"?m(g):m(v,!1)},!0)}T(u,_)};oe(o,u=>{n().type==="ARROW"?u(a):u(c,!1)})}T(t,i),_e()}var EP=se('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function iv(t,e){let n=$(e,"l",8,.2),r=$(e,"id",8),i=$(e,"strokeWidth",8),o=$(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=EP();S(u,"viewBox","0 0 1 1"),S(u,"refX",a),S(u,"refY",a),S(u,"markerWidth",1),S(u,"markerHeight",1);var _=Z(u);S(_,"d",c),j(u),ne(()=>{S(u,"id",r()),S(_,"stroke-width",i()),S(_,"stroke",o())}),T(t,u)}var CP=se('<path class="arrow-line" fill="none"></path>'),OP=se('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function IP(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),p=R(),g=R(),v=R();let m=$(e,"tool",8),E=$(e,"arrowId",8);const O=un(m().toolId,Mt)??kh,I="round",w="round",A=crypto.randomUUID(),D=`arrow-mask-${E()}-${A}`,M=`arrow-marker-${E()}-${A}`;k(()=>ee(m()),()=>{y(n,m().shape??O)}),k(()=>f(n),()=>{var q;y(r,((q=f(n))==null?void 0:q.r)??.4)}),k(()=>f(n),()=>{var q;y(i,((q=f(n))==null?void 0:q.stroke)??"gray")}),k(()=>f(n),()=>{var q;y(o,((q=f(n))==null?void 0:q.strokeWidth)??.1)}),k(()=>f(n),()=>{var q;y(a,((q=f(n))==null?void 0:q.strokeDasharray)??0)}),k(()=>f(n),()=>{var q;y(c,((q=f(n))==null?void 0:q.opacity)??.8)}),k(()=>(f(r),f(n)),()=>{var q,J,fe,pe;y(u,{shortenHead:f(r),shortenTail:((J=(q=f(n))==null?void 0:q.linePathOptions)==null?void 0:J.shortenTail)??.2,bezierRounding:((pe=(fe=f(n))==null?void 0:fe.linePathOptions)==null?void 0:pe.bezierRounding)??.4})}),k(()=>f(n),()=>{var q;y(_,((q=f(n))==null?void 0:q.fill)??"none")}),k(()=>f(n),()=>{var q;y(p,((q=f(n))==null?void 0:q.inset)??.2)}),k(()=>f(p),()=>{y(g,{...O,strokeDasharray:0,strokeLinejoin:"round",inset:f(p)})}),k(()=>ee(m()),()=>{y(v,Ha(m().cells))}),ye(),ve();var z=OP(),W=ae(z);S(W,"id",D);var F=G(Z(W));j(W);var P=G(W);iv(P,{id:M,l:.2,get strokeWidth(){return f(o)},get stroke(){return f(i)}});var X=G(P);Tr(X,{get cells(){return m().cells},get shape(){return f(g)}});var re=G(X);dt(re,1,()=>m().lines,St,(q,J)=>{var fe=Ne(),pe=ae(fe);{var be=Ae=>{var Ue=CP();ne(()=>S(Ue,"d",Ha(f(J),f(u)))),S(Ue,"stroke-linejoin",I),S(Ue,"stroke-linecap",w),S(Ue,"marker-end",`url(#${M??""})`),ne(()=>{S(Ue,"stroke",f(i)),S(Ue,"stroke-width",f(o)),S(Ue,"opacity",f(c)),S(Ue,"stroke-dasharray",f(a))}),T(Ae,Ue)};oe(pe,Ae=>{f(J).length>1&&Ae(be)})}T(q,fe)}),ne(()=>{S(F,"stroke-width",2*f(r)-f(o)),S(F,"d",f(v))}),T(t,z),_e()}var bP=se('<path class="arrow-line" fill="none"></path>'),wP=se('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function au(t,e){de(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=$(e,"tool",8),_=$(e,"c_id",8),p=$(e,"shape",8);const g="round",v="round",m=crypto.randomUUID(),E=`arrow-mask-${_()}-${m}`,O=`arrow-marker-${_()}-${m}`;k(()=>ee(p()),()=>{var W;y(n,((W=p())==null?void 0:W.r)??.4)}),k(()=>ee(p()),()=>{var W;y(r,((W=p())==null?void 0:W.stroke)??"gray")}),k(()=>ee(p()),()=>{var W;y(i,((W=p())==null?void 0:W.strokeWidth)??.1)}),k(()=>ee(p()),()=>{var W;y(o,((W=p())==null?void 0:W.strokeDasharray)??0)}),k(()=>(f(n),ee(p())),()=>{var W,F,P,X;y(a,{shortenHead:f(n),shortenTail:((F=(W=p())==null?void 0:W.linePathOptions)==null?void 0:F.shortenTail)??.2,bezierRounding:((X=(P=p())==null?void 0:P.linePathOptions)==null?void 0:X.bezierRounding)??.4})}),k(()=>ee(u()),()=>{y(c,Ha(u().cells))}),ye(),ve();var I=wP(),w=ae(I);S(w,"id",E);var A=G(Z(w));j(w);var D=G(w);iv(D,{id:O,l:.2,get strokeWidth(){return f(i)},get stroke(){return f(r)}});var M=G(D);S(M,"mask",`url(#${E??""})`);var z=G(M);dt(z,1,()=>u().lines,St,(W,F)=>{var P=Ne(),X=ae(P);{var re=q=>{var J=bP();ne(()=>S(J,"d",Ha(f(F),f(a)))),S(J,"stroke-linejoin",g),S(J,"stroke-linecap",v),S(J,"marker-end",`url(#${O??""})`),ne(()=>{S(J,"stroke",f(r)),S(J,"stroke-width",f(i)),S(J,"stroke-dasharray",f(o))}),T(q,J)};oe(X,q=>{f(F).length>1&&q(re)})}T(W,P)}),ne(()=>{S(A,"stroke-width",2*f(n)-f(i)),S(A,"d",f(c)),S(M,"d",f(c)),S(M,"stroke-width",2*f(n)+f(i)),S(M,"stroke",f(r))}),T(t,I),_e()}var yP=se("<!><!><!>",1),LP=se('<g class="arrow-tool"><!></g>');function AP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Bt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R();let u=$(e,"tool",8),_=$(e,"c_id",8);const p=un(u().toolId,Mt)??kh;k(()=>ee(u()),()=>{y(i,u().shape??p)}),k(()=>f(i),()=>{y(o,{...f(i),stroke:"var(--grid-background-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.06:.06})}),k(()=>f(i),()=>{y(a,{...f(i),stroke:"var(--constraint-selected-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.07:.07})}),k(()=>r(),()=>{var O;y(c,(O=r())==null?void 0:O.id)}),ye(),ve();var g=LP(),v=Z(g);{var m=O=>{IP(O,{get tool(){return u()},get arrowId(){return _()}})},E=O=>{var I=yP(),w=ae(I);{var A=W=>{au(W,{get tool(){return u()},get c_id(){return _()},get shape(){return f(o)}})};oe(w,W=>{W(A)})}var D=G(w);{var M=W=>{au(W,{get tool(){return u()},get c_id(){return _()},get shape(){return f(a)}})};oe(D,W=>{_()===f(c)&&W(M)})}var z=G(D);au(z,{get tool(){return u()},get c_id(){return _()},get shape(){return f(i)}}),T(O,I)};oe(v,O=>{f(i).type===B.BULBOUS_ARROW?O(m):O(E,!1)})}j(g),T(t,g),_e()}var SP=se('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function NP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(bn,"$gridStore",n),i=()=>Ce(vt,"$localConstraintsStore",n),o=()=>Ce(on,"$toolStore",n),a=()=>Ce(vn,"$cellsStore",n),c=()=>Ce(Dd,"$singleCellToolsStore",n),u=()=>Ce(i4,"$cageToolsStore",n),_=()=>Ce(t4,"$lineToolsStore",n),p=()=>Ce(o4,"$cloneToolsStore",n),g=()=>Ce(r4,"$arrowToolsStore",n),v=()=>Ce(n4,"$cornerLineToolsStore",n),m=()=>Ce(s4,"$outsideDirectionToolsStore",n),E=()=>Ce(Q8,"$edgeToolsStore",n),O=()=>Ce(e4,"$cornerToolsStore",n),I=()=>Ce(J8,"$centerCornerOrEdgeToolsStore",n),w=R(),A=R(),D=R();let M=$(e,"svgRef",12,null);function z(){for(const[Oe,Re]of i().entries()){if(!_s(Oe))continue;if(Object.entries(Re).some(([yt,Ir])=>!rn(Ir.cell,f(A))))return!0}return!1}function W(Oe,Re){const Me=z(),yt=_s(Re),Ir=Me||yt?1:.2,Cl=-Ir,ui=-Ir,Sn=Oe.nCols+2*Ir,di=Oe.nRows+2*Ir;return{x:Cl,y:ui,width:Sn,height:di}}function F(Oe){return`${Oe.x} ${Oe.y} ${Oe.width} ${Oe.height}`}k(()=>r(),()=>{y(w,r())}),k(()=>f(w),()=>{y(A,{nRows:f(w).nRows,nCols:f(w).nCols})}),k(()=>(f(A),o()),()=>{y(D,W(f(A),o()))}),ye(),ve();var P=SP();ne(()=>S(P,"viewBox",F(f(D))));var X=Z(P);H8(X,{get boundingBox(){return f(D)},get gridShape(){return f(A)}});var re=G(X);W8(re,{get gridShape(){return f(A)}});var q=G(re);yF(q,{get grid(){return r()}});var J=G(q);sF(J,{get gridShape(){return f(A)}});var fe=G(J);dt(fe,5,a,St,(Oe,Re)=>{e8(Oe,{get cell(){return f(Re)}})}),j(fe);var pe=G(fe);E8(pe,{});var be=G(pe);fr(be,{get elements(){return c()},g_name:"single-cell-tools-layer",Component:mP});var Ae=G(be);fr(Ae,{get elements(){return u()},g_name:"cage-tools-layer",Component:Y4});var Ue=G(Ae);fr(Ue,{get elements(){return _()},g_name:"line-tools-layer",Component:B4});var xe=G(Ue);fr(xe,{get elements(){return p()},g_name:"clone-tools-layer",Component:V4});var me=G(xe);fr(me,{get elements(){return g()},g_name:"arrow-tools-layer",Component:AP});var nt=G(me);cF(nt,{});var $e=G(nt);F8($e,{});var wt=G($e);OF(wt,{});var xt=G(wt);fr(xt,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:eP});var sn=G(xt);fr(sn,{get elements(){return m()},g_name:"outside-direction-tools-layer",Component:q4});var Rt=G(sn);bF(Rt,{get boundingBox(){return f(D)}});var kt=G(Rt);iF(kt,{});var Cr=G(kt);fr(Cr,{get elements(){return E()},g_name:"edge-tools-layer",Component:O4});var Vt=G(Cr);fr(Vt,{get elements(){return O()},g_name:"corner-tools-layer",Component:S4});var er=G(Vt);fr(er,{get elements(){return I()},g_name:"center-corner-edge-tools-layer",Component:T4});var $i=G(er);p8($i,{});var cr=G($i);dt(cr,5,a,St,(Oe,Re)=>{ZF(Oe,{get cell(){return f(Re)}})}),j(cr);var Or=G(cr);K8(Or,{});var Fe=G(Or);R8(Fe,{}),j(P),Li(P,Oe=>M(Oe),()=>M()),T(t,P),_e()}function xP(t){return cw(t)?(Ab(),!0):!1}function RP(t){return uw(t)?(Ip(),!0):!1}function TP(t){return dw(t)?(bp(),!0):!1}function lu(t){(xP(t)||RP(t)||TP(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var DP=le('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function kP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Jp,"$InputHandlerStore",n),i=()=>Ce(so,"$svgRefStore",n),o=R();let a=R(null);function c(v){return m=>{v&&f(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===f(a))&&v(m)}}k(()=>r(),()=>{y(o,r())}),ye();var u=DP();Ge("keydown",Bc,function(...v){lu==null||lu.apply(this,v)});var _=Eg(()=>{var v;return c((v=f(o))==null?void 0:v.keyDown)});Ge("keydown",Bc,function(...v){var m;(m=f(_))==null||m.apply(this,v)});var p=Eg(()=>{var v;return c((v=f(o))==null?void 0:v.keyUp)});Ge("keyup",Bc,function(...v){var m;(m=f(p))==null||m.apply(this,v)});var g=Z(u);NP(g,{get svgRef(){return lh(),i()},set svgRef(v){ps(so,v)},$$legacy:!0}),j(u),Li(u,v=>y(a,v),()=>f(a)),Ge("pointerdown",u,jc(Zn(v=>{var m;v.currentTarget.focus(),(m=f(o))==null||m.pointerDown(v)})),!0),Ge("pointermove",u,jc(Zn(v=>{var m;v.currentTarget.focus(),(m=f(o))==null||m.pointerMove(v)})),!0),Ge("pointerup",u,jc(Zn(v=>{var m;v.currentTarget.focus(),(m=f(o))==null||m.pointerUp(v)})),!0),T(t,u),_e()}var GP=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function MP(t){var e=GP();T(t,e)}var UP=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function $P(t){var e=UP();T(t,e)}var FP=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function PP(t){var e=FP();T(t,e)}var HP=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function BP(t){var e=HP();T(t,e)}var WP=le('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function zP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Ao,"$commandHistoryStore",n),i=()=>Ce(Ou,"$selectOnStore",n),o=R(),a=R();function c(){Ip()}function u(){bp()}function _(){console.log("check")}function p(){ps(Ou,!i())}k(()=>r(),()=>{y(o,r()._undoStack.length===0)}),k(()=>r(),()=>{y(a,r()._redoStack.length===0)}),ye(),ve();var g=WP(),v=Z(g),m=Z(v);BP(m),j(v);var E=G(v,2),O=Z(E);$P(O),j(E);var I=G(E,2);I.disabled=!0;var w=Z(I);MP(w),j(I);var A=G(I,2),D=Z(A);PP(D),j(A),j(g),ne(()=>{v.disabled=f(o),E.disabled=f(a),S(A,"aria-checked",i()),At(A,"active",i())}),Ge("click",v,c),Ge("click",E,u),Ge("click",I,_),Ge("click",A,p),T(t,g),_e()}var YP=le('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),jP=le('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),KP=le('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),VP=le('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function XP(t,e){de(e,!1);const n=Ke(),r=()=>Ce(ii,"$settingsStore",n),i=()=>Ce($a,"$penColorStore",n),o=()=>Ce(Jp,"$InputHandlerStore",n),a=R(),c=R(),u=[];let _=$(e,"selectedTool",8);const p=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let v=R(!1);function m(F){return F?g:p}function E(F){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(F)}function O(F){const P=F.currentTarget;if(!P)return;const X=P.getAttribute("aria-checked");y(v,X!=="true")}k(()=>r(),()=>{y(a,r().penToolActive)}),k(()=>r(),()=>{y(c,r().letterToolActive)}),ye(),ve();var I=VP(),w=Z(I);{var A=F=>{var P=Ne(),X=ae(P);dt(X,1,()=>p,St,(re,q)=>{var J=YP(),fe=Z(J);nn(fe);var pe;yi(2),j(J),ne(()=>{S(J,"data-value",f(q)),At(J,"active",i()===f(q)),pe!==(pe=f(q))&&(fe.value=(fe.__value=f(q))==null?"":f(q))}),Va(u,[],fe,()=>(f(q),i()),be=>ps($a,be)),T(re,J)}),T(F,P)},D=F=>{var P=Ne(),X=ae(P);dt(X,1,()=>m(f(v)),St,(re,q)=>{var J=jP(),fe=Z(J),pe=Z(fe,!0);j(fe),yi(2),j(J),ne(()=>{xb(J,f(q)),it(pe,f(q))}),Ge("click",J,function(...be){var Ae;(Ae=o()&&o().padClick)==null||Ae.apply(this,be)}),T(re,J)}),T(F,P)};oe(w,F=>{_()===d.PEN_TOOL&&f(a)?F(A):F(D,!1)})}var M=G(w,2);{var z=F=>{var P=KP();ne(()=>{S(P,"aria-checked",f(v)),At(P,"letter-checked",f(v)),At(P,"num-checked",!f(v))}),Ge("click",P,O),T(F,P)};oe(M,F=>{f(c)&&E(_())&&F(z)})}var W=G(M,2);j(I),ne(()=>{At(I,"digit",_()===d.DIGIT),At(I,"center",_()===d.CENTER_PM),At(I,"corner",_()===d.CORNER_PM),At(I,"color",_()===d.HIGHLIGHTS),At(I,"pen",_()===d.PEN_TOOL),At(W,"letter-tool",f(c))}),Ge("click",W,function(...F){var P;(P=o()&&o().padClick)==null||P.apply(this,F)}),T(t,I),_e()}var qP=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function ZP(t){var e=qP();T(t,e)}var QP=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function JP(t){var e=QP();T(t,e)}var e6=le('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Zo(t,e){de(e,!1);const n=[];let r=$(e,"selectedTool",12),i=$(e,"value",8),o=$(e,"title",8,void 0);function a(){Iu(i())}ve();var c=e6(),u=Z(c);nn(u);var _,p=G(u,2);ft(p,e,"default",{}),j(c),ne(()=>{S(c,"title",o()),At(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),Va(n,[],u,()=>(i(),r()),r),Ge("change",u,a),T(t,c),_e()}var t6=le('<span aria-hidden="true">1</span>'),n6=le('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),r6=le('<span aria-hidden="true" style="font-size: 50%">123</span>'),i6=le('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),o6=le('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),s6=le('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function a6(t,e){de(e,!1);const n=Ke(),r=()=>Ce(ii,"$settingsStore",n);let i=$(e,"selectedTool",12);ve();var o=s6(),a=Z(o);Zo(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=t6();T(v,E)},$$slots:{default:!0},$$legacy:!0});var c=G(a,2);Zo(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=n6();T(v,E)},$$slots:{default:!0},$$legacy:!0});var u=G(c,2);Zo(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=r6();T(v,E)},$$slots:{default:!0},$$legacy:!0});var _=G(u,2);Zo(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=i6(),O=Z(E);ZP(O),j(E),T(v,E)},$$slots:{default:!0},$$legacy:!0});var p=G(_,2);{var g=v=>{Zo(v,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var O=o6(),I=Z(O);JP(I),j(O),T(m,O)},$$slots:{default:!0},$$legacy:!0})};oe(p,v=>{r().penToolActive&&v(g)})}j(o),T(t,o),_e()}var l6=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function c6(t){var e=l6();T(t,e)}var u6=le('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ts(t,e){let n=$(e,"title",8,void 0),r=$(e,"clickCb",8,void 0);var i=u6(),o=Z(i),a=Z(o);ft(a,e,"default",{}),j(o),j(i),ne(()=>S(i,"title",n())),Ge("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,i)}var d6=le('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),_6=le('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function f6(t,e){de(e,!1);let n=$(e,"showModal",12,!1);function r(){n(!1)}function i(){Lp(),Fa(),n(!1)}ve(),Hr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=_6(),u=G(Z(c),2);ll(u,{children:(_,p)=>{var g=d6(),v=ae(g),m=G(v,2);Ge("click",v,i),Ge("click",m,r),T(_,g)},$$slots:{default:!0}}),j(c),T(o,c)},$$slots:{default:!0},$$legacy:!0}),_e()}var g6=le("<!> <!>",1);function h6(t){let e=R(!1);function n(){y(e,!0)}var r=g6(),i=ae(r);Ts(i,{title:"Restart",clickCb:n,children:(a,c)=>{c6(a)},$$slots:{default:!0}});var o=G(i,2);f6(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var p6=le('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Qo(t,e){let n=$(e,"title",8);var r=p6(),i=Z(r),o=Z(i,!0);j(i);var a=G(i,2);ft(a,e,"default",{}),j(r),ne(()=>it(o,n())),T(t,r)}var v6=le('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function hn(t,e){let n=$(e,"description",8);var r=v6(),i=Z(r),o=Z(i,!0);j(i);var a=G(i,2),c=Z(a);ft(c,e,"default",{}),j(a),j(r),ne(()=>it(o,n())),T(t,r)}var m6=le('<div class="shortcut svelte-1cgt5u5"> </div>');function cn(t,e){let n=$(e,"shortcut",8);var r=m6(),i=Z(r,!0);j(r),ne(()=>it(i,n())),T(t,r)}var E6=le("<p></p>"),C6=le("<!> <!> <!> <!>",1),O6=le("<!> or <!>",1),I6=le("<!> <!> <!> <!> <!> <!> <!> <!>",1),b6=le("<!> <!>",1),w6=le('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function y6(t,e){let n=$(e,"showModal",12,!1);Hr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=w6(),a=Z(o);Qo(a,{title:"Setting Instructions",children:(g,v)=>{var m=E6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",T(g,m)},$$slots:{default:!0}});var c=G(a,2);Qo(c,{title:"General",children:(g,v)=>{hn(g,{description:"Toggle Darkmode",children:(m,E)=>{cn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=G(c,2);Qo(u,{title:"Selection",children:(g,v)=>{var m=C6(),E=ae(m);hn(E,{description:"Select cells",children:(A,D)=>{cn(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var O=G(E,2);hn(O,{description:"Add to current selection",children:(A,D)=>{cn(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=G(O,2);hn(I,{description:"Remove from current selection",children:(A,D)=>{cn(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=G(I,2);hn(w,{description:"Add or remove from current selection",children:(A,D)=>{cn(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}});var _=G(u,2);Qo(_,{title:"Change Tool",children:(g,v)=>{var m=I6(),E=ae(m);hn(E,{description:"Cycle Tool",children:(W,F)=>{cn(W,{shortcut:"Space"})},$$slots:{default:!0}});var O=G(E,2);hn(O,{description:"Change to Digit Tool",children:(W,F)=>{cn(W,{shortcut:"Z"})},$$slots:{default:!0}});var I=G(O,2);hn(I,{description:"Change to Corner Pencilmark Tool",children:(W,F)=>{cn(W,{shortcut:"X"})},$$slots:{default:!0}});var w=G(I,2);hn(w,{description:"Change to Center Pencilmark Tool",children:(W,F)=>{cn(W,{shortcut:"C"})},$$slots:{default:!0}});var A=G(w,2);hn(A,{description:"Change to Highlights Tool",children:(W,F)=>{cn(W,{shortcut:"V"})},$$slots:{default:!0}});var D=G(A,2);hn(D,{description:"Quickshift To Corner Pencilmark Tool",children:(W,F)=>{cn(W,{shortcut:"Shift"})},$$slots:{default:!0}});var M=G(D,2);hn(M,{description:"Quickshift To Center Pencilmark Tool",children:(W,F)=>{cn(W,{shortcut:"Ctrl"})},$$slots:{default:!0}});var z=G(M,2);hn(z,{description:"Quickshift To Highlights Tool",children:(W,F)=>{var P=O6(),X=ae(P);cn(X,{shortcut:"Shift + Ctrl"});var re=G(X,2);cn(re,{shortcut:"Alt"}),T(W,P)},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}});var p=G(_,2);Qo(p,{title:"Undo/Redo",children:(g,v)=>{var m=b6(),E=ae(m);hn(E,{description:"Undo",children:(I,w)=>{cn(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var O=G(E,2);hn(O,{description:"Redo",children:(I,w)=>{cn(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}}),j(o),T(r,o)},$$slots:{default:!0},$$legacy:!0})}var L6=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function A6(t){var e=L6();T(t,e)}var S6=le("<!> <!>",1);function N6(t){let e=R(!1);function n(){y(e,!0)}var r=S6(),i=ae(r);Ts(i,{title:"Info",clickCb:n,children:(a,c)=>{A6(a)},$$slots:{default:!0}});var o=G(i,2);y6(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var x6=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function R6(t){var e=x6();T(t,e)}var T6=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function D6(t){var e=T6();T(t,e)}function k6(t){let e=R(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),y(e,!f(e))}Ts(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=Ne(),_=ae(u);{var p=v=>{D6(v)},g=v=>{R6(v)};oe(_,v=>{f(e)?v(p):v(g,!1)})}T(a,u)},$$slots:{default:!0}})}function ov(t,e){de(e,!1);let n=$(e,"token",8),r=$(e,"renderers",8),i=$(e,"options",8);ve();var o=Ne(),a=ae(o);{var c=u=>{var _=Ne(),p=ae(_);dh(p,()=>r()[n().type],(g,v)=>{v(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var O=Ne(),I=ae(O);{var w=D=>{za(D,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=D=>{var M=ob();ne(()=>it(M,n().raw)),T(D,M)};oe(I,D=>{"tokens"in n()&&n().tokens?D(w):D(A,!1)})}T(m,O)},$$slots:{default:!0}})}),T(u,_)};oe(a,u=>{r()[n().type]&&u(c)})}T(t,o),_e()}function za(t,e){let n=$(e,"tokens",8),r=$(e,"renderers",8),i=$(e,"options",8);var o=Ne(),a=ae(o);{var c=u=>{var _=Ne(),p=ae(_);dt(p,1,n,St,(g,v)=>{ov(g,{get token(){return f(v)},get renderers(){return r()},get options(){return i()}})}),T(u,_)};oe(a,u=>{n()&&u(c)})}T(t,o)}function sv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function av(t){return t.startsWith("/")||t.startsWith("#")}function G6(t,e){return e.slug(t).replace(/--+/g,"-")}function M6(t,e){de(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const i=void 0;let o=R();k(()=>(ee(n()),ee(r())),()=>{y(o,G6(n().text,r().slugger))}),ye(),ve();var a=Ne(),c=ae(a);return fh(c,()=>`h${n().depth}`,!1,(u,_)=>{let p;ne(()=>p=uh(u,p,{id:f(o)},void 0,u.namespaceURI===Au,u.nodeName.includes("-")));var g=Ne(),v=ae(g);ft(v,e,"default",{}),T(_,g)}),T(t,a),Je(e,"renderers",i),_e({renderers:i})}var U6=le("<blockquote><!></blockquote>");function $6(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=U6(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}function F6(t,e){de(e,!1);let n=$(e,"token",8),r=$(e,"options",8),i=$(e,"renderers",8),o=R();k(()=>ee(n()),()=>{y(o,n().ordered?"ol":"ul")}),ye(),ve();var a=Ne(),c=ae(a);fh(c,()=>f(o),!1,(u,_)=>{let p;ne(()=>p=uh(u,p,{start:n().start||1},void 0,u.namespaceURI===Au,u.nodeName.includes("-")));var g=Ne(),v=ae(g);dt(v,1,()=>n().items,St,(m,E)=>{var O=Qe(()=>({...f(E)}));ov(m,{get token(){return f(O)},get options(){return r()},get renderers(){return i()}})}),T(_,g)}),T(t,a),_e()}var P6=le("<li><!></li>");function H6(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=P6(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var B6=le("<br>");function W6(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=B6();return T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var z6=le("<pre><code> </code></pre>");function Y6(t,e){de(e,!1);let n=$(e,"token",8);const r=void 0,i=void 0;ve();var o=z6(),a=Z(o),c=Z(a,!0);return j(a),j(o),ne(()=>{Db(a,`lang-${n().lang}`),it(c,n().text)}),T(t,o),Je(e,"options",r),Je(e,"renderers",i),_e({options:r,renderers:i})}var j6=le("<code> </code>");function K6(t,e){de(e,!1);let n=$(e,"token",8);const r=void 0,i=void 0;ve();var o=j6(),a=Z(o,!0);return ne(()=>it(a,n().raw.slice(1,n().raw.length-1))),j(o),T(t,o),Je(e,"options",r),Je(e,"renderers",i),_e({options:r,renderers:i})}var V6=le('<th scope="col"><!></th>'),X6=le("<td><!></td>"),q6=le("<tr></tr>"),Z6=le("<table><thead><tr></tr></thead><tbody></tbody></table>");function Q6(t,e){de(e,!1);let n=$(e,"token",8),r=$(e,"options",8),i=$(e,"renderers",8);ve();var o=Z6(),a=Z(o),c=Z(a);dt(c,5,()=>n().header,St,(_,p)=>{var g=V6(),v=Z(g);za(v,{get tokens(){return f(p).tokens},get options(){return r()},get renderers(){return i()}}),j(g),T(_,g)}),j(c),j(a);var u=G(a);dt(u,5,()=>n().rows,St,(_,p)=>{var g=q6();dt(g,5,()=>f(p),St,(v,m)=>{var E=X6(),O=Z(E);za(O,{get tokens(){return f(m).tokens},get options(){return r()},get renderers(){return i()}}),j(E),T(v,E)}),j(g),T(_,g)}),j(u),j(o),T(t,o),_e()}function J6(t,e){de(e,!1);let n=$(e,"token",8);const r=void 0,i=void 0;ve();var o=Ne(),a=ae(o);return Tb(a,()=>n().text),T(t,o),Je(e,"options",r),Je(e,"renderers",i),_e({options:r,renderers:i})}var e9=le("<p><!></p>");function t9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=e9(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var n9=le("<a><!></a>");function r9(t,e){de(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const i=void 0;ve();var o=n9();ne(()=>S(o,"href",av(n().href)?sv(r().baseUrl,n().href):n().href));var a=Z(o);return ft(a,e,"default",{}),j(o),ne(()=>S(o,"title",n().title)),T(t,o),Je(e,"renderers",i),_e({renderers:i})}function i9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ne(),a=ae(o);return ft(a,e,"default",{}),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var o9=le("<dfn><!></dfn>");function s9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=o9(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var a9=le("<del><!></del>");function l9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=a9(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var c9=le("<em><!></em>");function u9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=c9(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var d9=le("<hr>");function _9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=d9();return T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var f9=le("<strong><!></strong>");function g9(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=f9(),a=Z(o);return ft(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}var h9=le('<img class="markdown-image svelte-z38cge">');function p9(t,e){de(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const i=void 0;ve();var o=h9();return ne(()=>S(o,"src",av(n().href)?sv(r().baseUrl,n().href):n().href)),ne(()=>{S(o,"title",n().title),S(o,"alt",n().text)}),T(t,o),Je(e,"renderers",i),_e({renderers:i})}function Zg(t,e){de(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ne(),a=ae(o);return ft(a,e,"default",{}),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),_e({token:n,options:r,renderers:i})}const v9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,m9=Object.hasOwnProperty;class E9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=C9(e,n===!0);const o=i;for(;m9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function C9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(v9,"").replace(/ /g,"-"))}function kd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ui=kd();function lv(t){Ui=t}const cv=/[&<>"']/,O9=new RegExp(cv.source,"g"),uv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,I9=new RegExp(uv.source,"g"),b9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qg=t=>b9[t];function Mn(t,e){if(e){if(cv.test(t))return t.replace(O9,Qg)}else if(uv.test(t))return t.replace(I9,Qg);return t}const w9=/(^|[^\[])\^/g;function Ot(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(w9,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Jg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const cs={exec:()=>null};function eh(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Jo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function y9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function th(t,e,n,r){const i=e.href,o=e.title?Mn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Mn(a)}}function L9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class Ya{constructor(e){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=e||Ui}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Jo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=L9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Jo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Jo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Jo(n[0],`
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
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,p=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,p=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(_+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),D=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),z=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const W=e.split(`
`,1)[0];let F;if(v=W,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),F=v):F=v.replace(/\t/g,"    "),D.test(v)||M.test(v)||z.test(v)||w.test(v)||A.test(v))break;if(F.search(/[^ ]/)>=E||!v.trim())p+=`
`+F.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||D.test(g)||M.test(g)||A.test(g))break;p+=`
`+v}!m&&!v.trim()&&(m=!0),_+=W+`
`,e=e.substring(W.length+1),g=F.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let O=null,I;this.options.gfm&&(O=/^\[[ xX]\] /.exec(p),O&&(I=O[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!O,checked:I,loose:!1,text:p,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const _=o.items[u].tokens.filter(g=>g.type==="space"),p=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));o.loose=p}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=eh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(eh(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Mn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Jo(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=y9(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),th(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return th(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,p=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){p+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+p);const v=[...i[0]][0].length,m=e.slice(0,a+i.index+v+u);if(Math.min(a,u)%2){const O=m.slice(1,-1);return{type:"em",raw:m,text:O,tokens:this.lexer.inlineTokens(O)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Mn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Mn(n[1]),i="mailto:"+r):(r=Mn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Mn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Mn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Mn(n[0]),{type:"text",raw:n[0],text:r}}}}const A9=/^(?:[ \t]*(?:\n|$))+/,S9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,N9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ds=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,x9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,dv=/(?:[*+-]|\d{1,9}[.)])/,_v=Ot(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,dv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Gd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,R9=/^[^\n]+/,Md=/(?!\s*\])(?:\\.|[^\[\]\\])+/,T9=Ot(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Md).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),D9=Ot(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,dv).getRegex(),El="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ud=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,k9=Ot("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ud).replace("tag",El).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fv=Ot(Gd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",El).getRegex(),G9=Ot(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fv).getRegex(),$d={blockquote:G9,code:S9,def:T9,fences:N9,heading:x9,hr:Ds,html:k9,lheading:_v,list:D9,newline:A9,paragraph:fv,table:cs,text:R9},nh=Ot("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",El).getRegex(),M9={...$d,table:nh,paragraph:Ot(Gd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",El).getRegex()},U9={...$d,html:Ot(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ud).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ot(Gd).replace("hr",Ds).replace("heading",` *#{1,6} *[^
]`).replace("lheading",_v).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,hv=/^( {2,}|\\)\n(?!\s*$)/,F9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ks="\\p{P}\\p{S}",P9=Ot(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ks).getRegex(),H9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,B9=Ot(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ks).getRegex(),W9=Ot("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ks).getRegex(),z9=Ot("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ks).getRegex(),Y9=Ot(/\\([punct])/,"gu").replace(/punct/g,ks).getRegex(),j9=Ot(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),K9=Ot(Ud).replace("(?:-->|$)","-->").getRegex(),V9=Ot("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",K9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ja=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,X9=Ot(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ja).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pv=Ot(/^!?\[(label)\]\[(ref)\]/).replace("label",ja).replace("ref",Md).getRegex(),vv=Ot(/^!?\[(ref)\](?:\[\])?/).replace("ref",Md).getRegex(),q9=Ot("reflink|nolink(?!\\()","g").replace("reflink",pv).replace("nolink",vv).getRegex(),Fd={_backpedal:cs,anyPunctuation:Y9,autolink:j9,blockSkip:H9,br:hv,code:$9,del:cs,emStrongLDelim:B9,emStrongRDelimAst:W9,emStrongRDelimUnd:z9,escape:gv,link:X9,nolink:vv,punctuation:P9,reflink:pv,reflinkSearch:q9,tag:V9,text:F9,url:cs},Z9={...Fd,link:Ot(/^!?\[(label)\]\((.*?)\)/).replace("label",ja).getRegex(),reflink:Ot(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ja).getRegex()},yu={...Fd,escape:Ot(gv).replace("])","~|])").getRegex(),url:Ot(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Q9={...yu,br:Ot(hv).replace("{2,}","*").getRegex(),text:Ot(yu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Na={normal:$d,gfm:M9,pedantic:U9},es={normal:Fd,gfm:yu,breaks:Q9,pedantic:Z9};class $n{constructor(e){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"tokenizer");Ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ui,this.options.tokenizer=this.options.tokenizer||new Ya,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Na.normal,inline:es.normal};this.options.pedantic?(n.block=Na.pedantic,n.inline=es.pedantic):this.options.gfm&&(n.block=Na.gfm,this.options.breaks?n.inline=es.breaks:n.inline=es.gfm),this.tokenizer.rules=n}static get rules(){return{block:Na,inline:es}}static lex(e,n){return new $n(n).lex(e)}static lexInline(e,n){return new $n(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(p=>{_=p.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,_;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)p.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(r=p.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},g),typeof v=="number"&&v>=0&&(p=Math.min(p,v))}),p<1/0&&p>=0&&(o=e.substring(0,p+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class Ka{constructor(e){Ee(this,"options");Ee(this,"parser");this.options=e||Ui}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Jg(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Jg(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Pd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class qn{constructor(e){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=e||Ui,this.options.renderer=this.options.renderer||new Ka,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pd}static parse(e,n){return new qn(n).parse(e)}static parseInline(e,n){return new qn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class us{constructor(e){Ee(this,"options");Ee(this,"block");this.options=e||Ui}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?$n.lex:$n.lexInline}provideParser(){return this.block?qn.parse:qn.parseInline}}Ee(us,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class J9{constructor(...e){Ee(this,"defaults",kd());Ee(this,"options",this.setOptions);Ee(this,"parse",this.parseMarkdown(!0));Ee(this,"parseInline",this.parseMarkdown(!1));Ee(this,"Parser",qn);Ee(this,"Renderer",Ka);Ee(this,"TextRenderer",Pd);Ee(this,"Lexer",$n);Ee(this,"Tokenizer",Ya);Ee(this,"Hooks",us);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new Ka(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new Ya(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new us;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=o[c];us.passThroughHooks.has(a)?o[c]=p=>{if(this.defaults.async)return Promise.resolve(u.call(o,p)).then(v=>_.call(o,v));const g=u.call(o,p);return _.call(o,g)}:o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return $n.lex(e,n??this.defaults)}parser(e,n){return qn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?$n.lex:$n.lexInline,_=a.hooks?a.hooks.provideParser():e?qn.parse:qn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(p=>u(p,a)).then(p=>a.hooks?a.hooks.processAllTokens(p):p).then(p=>a.walkTokens?Promise.all(this.walkTokens(p,a.walkTokens)).then(()=>p):p).then(p=>_(p,a)).then(p=>a.hooks?a.hooks.postprocess(p):p).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let p=u(r,a);a.hooks&&(p=a.hooks.processAllTokens(p)),a.walkTokens&&this.walkTokens(p,a.walkTokens);let g=_(p,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(p){return c(p)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Mn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Ri=new J9;function Ct(t,e){return Ri.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Ri.setOptions(t),Ct.defaults=Ri.defaults,lv(Ct.defaults),Ct};Ct.getDefaults=kd;Ct.defaults=Ui;Ct.use=function(...t){return Ri.use(...t),Ct.defaults=Ri.defaults,lv(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Ri.walkTokens(t,e)};Ct.parseInline=Ri.parseInline;Ct.Parser=qn;Ct.parser=qn.parse;Ct.Renderer=Ka;Ct.TextRenderer=Pd;Ct.Lexer=$n;Ct.lexer=$n.lex;Ct.Tokenizer=Ya;Ct.Hooks=us;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;qn.parse;$n.lex;function eH(t){return new $n().lex(t)}const tH=()=>({heading:M6,blockquote:$6,list:F6,list_item:H6,br:W6,code:Y6,codespan:K6,table:Q6,html:J6,paragraph:t9,link:r9,text:i9,def:s9,del:l9,em:u9,hr:_9,strong:g9,image:p9,space:Zg,escape:Zg}),nH=()=>({baseUrl:"/",slugger:new E9});function rH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},_h(()=>{console.warn=t})}function mv(t,e){de(e,!1),rH();let n=$(e,"source",8),r=$(e,"options",24,()=>({})),i=$(e,"renderers",24,()=>({})),o=R(),a=R(),c=R();k(()=>(ee(n()),ee(i()),ee(r())),()=>{y(o,eH(n())),y(a,{...tH(),...i()}),y(c,{...nH(),...r()})}),ye(),ve(),za(t,{get tokens(){return f(o)},get renderers(){return f(a)},get options(){return f(c)}}),_e()}var iH=le('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),oH=le('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),sH=le('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function aH(t,e){de(e,!1);const n=Ke(),r=()=>Ce(Fr,"$puzzleMetaStore",n),i=R();let o=$(e,"showModal",12,!1);function a(u){return u?Ga(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}k(()=>r(),()=>{y(i,r())}),ye(),ve(),Hr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,_)=>{var p=sH(),g=Z(p),v=Z(g,!0);j(g);var m=G(g,2),E=Z(m);ne(()=>it(E,`by ${a(f(i).authors)??""}`)),j(m);var O=G(m,2),I=Z(O),w=Qe(()=>c(f(i).ruleset));mv(I,{get source(){return f(w)}}),j(O);var A=G(O,2);{var D=W=>{var F=iH(),P=G(ae(F),2);ne(()=>S(P,"href",f(i).ctcUrl)),T(W,F)};oe(A,W=>{var F,P;(P=(F=f(i))==null?void 0:F.ctcUrl)!=null&&P.length&&W(D)})}var M=G(A,2);{var z=W=>{var F=oH(),P=G(ae(F),2);ne(()=>S(P,"href",f(i).ctcYoutubeUrl)),T(W,F)};oe(M,W=>{var F,P;(P=(F=f(i))==null?void 0:F.ctcYoutubeUrl)!=null&&P.length&&W(z)})}j(p),ne(()=>{var W;return it(v,((W=f(i))==null?void 0:W.title)||"Puzzle")}),T(u,p)},$$slots:{default:!0},$$legacy:!0}),_e()}var lH=se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function cH(t){var e=lH();T(t,e)}var uH=le("<!> <!>",1);function dH(t){let e=R(!1);function n(){y(e,!0)}var r=uH(),i=ae(r);Ts(i,{title:"Rules",clickCb:n,children:(a,c)=>{cH(a)},$$slots:{default:!0}});var o=G(i,2);aH(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var _H=le("<!> <!>",1);function fH(t){let e=R(!1);function n(){y(e,!0)}var r=_H(),i=ae(r);Ts(i,{title:"Settings",clickCb:n,children:(a,c)=>{kp(a)},$$slots:{default:!0}});var o=G(i,2);Gp(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var gH=le('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function hH(t){var e=gH(),n=Z(e);fH(n);var r=G(n,2);dH(r);var i=G(r,2);k6(i);var o=G(i,2);N6(o);var a=G(o,2);h6(a),j(e),T(t,e)}var pH=le('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function vH(t,e){de(e,!1);const n=Ke(),r=()=>Ce(so,"$svgRefStore",n),i=()=>Ce(Fr,"$puzzleMetaStore",n),o=()=>Ce(on,"$toolStore",n),a=R(),c=R();function u(){r()&&r().focus()}function _(q){return q?Ga(q," & ",", "):"Anonymous"}function p(q){return q&&q.length?q:"Normal sudoku rules apply."}k(()=>i(),()=>{y(a,i().title??"Sudoku")}),k(()=>i(),()=>{y(c,_(i().authors))}),ye(),ve();var g=pH(),v=Z(g),m=Z(v),E=Z(m),O=Z(E,!0);j(E);var I=G(E,2),w=Z(I);j(I),j(m);var A=G(m,2),D=Z(A),M=Qe(()=>p(i().ruleset));mv(D,{get source(){return f(M)}}),j(A),j(v);var z=G(v,2),W=Z(z);hH(W);var F=G(W,2),P=Z(F);XP(P,{get selectedTool(){return o()}});var X=G(P,2);a6(X,{get selectedTool(){return lh(),o()},set selectedTool(q){ps(on,q)},$$legacy:!0}),j(F);var re=G(F,2);zP(re,{}),j(z),j(g),ne(()=>{it(O,f(a)),it(w,`by ${f(c)??""}`)}),Ge("click",z,Zn(()=>{u()})),T(t,g),_e()}var mH=le('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function kH(t,e){de(e,!1);const n=Ke(),r=()=>Ce(rl,"$gameModeStore",n),i=R();_h(async()=>{const m=window.location.origin,E=Cg===""?m:`${m}/${Cg}`;try{await ZU({workerURL:`${E}/minizinc-worker.js`,wasmURL:`${E}/minizinc.wasm`,dataURL:`${E}/minizinc.data`})}catch(O){const I="Failed to initialize MiniZinc: "+O.message;console.log(I)}}),k(()=>r(),()=>{y(i,r())}),ye(),ve();var o=mH(),a=Z(o),c=Z(a);{var u=m=>{N$(m)};oe(c,m=>{f(i)===_o.SETTING&&m(u)})}var _=G(c,2),p=Z(_);kP(p,{}),j(_);var g=G(_,2),v=Z(g);vH(v,{}),j(g),j(a),j(o),T(t,o),_e()}export{kH as G,DH as b,sT as p,Fa as r,ST as s};
