var Jw=Object.defineProperty;var ey=(t,e,n)=>e in t?Jw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>ey(t,typeof e!="symbol"?e+"":e,n);import{c as Wu,o as ty,p as ny,q as hd,s as Ne,a as S,t as ue,d as me,u as ne,v as ry,m as iy}from"./disclose-version.X1mjziy_.js";import{i as fe}from"./legacy.CL9GlO2d.js";import{l as Zh,h as ln,k as As,y as Qh,v as bs,R as oy,V as sy,U as ay,g as Bu,i as Jh,K as ev,a0 as ly,j as cy,u as th,B as uy,aK as vd,z as dy,x as _y,a2 as pd,as as tv,A as nh,aL as fy,a3 as gy,a8 as hy,m as vy,c as j,r as z,s as F,t as ee,p as se,aM as D,aN as Ce,a as ae,Z as _,aw as X,_ as O,$ as L,f as te,aD as di,aO as Yu,al as ft,aP as wu,ak as rh}from"./utils.FBOUsyea.js";import{i as Q,s as Ye,a as ge,b as go,m as nv}from"./store.CwWqV19U.js";import{s as Sn,u as nr,r as py,t as my}from"./global.QY33tXzd.js";import{e as qe,i as pt}from"./each.CQzofs9j.js";import{i as Ey,p as U,s as Cy}from"./props.CDZpVoAy.js";import{w as Rt,g as De,d as Wn}from"./index.XPG9yTa8.js";import{b as Ui,c as md}from"./this.CumUjykt.js";import{s as rt}from"./render.C06zU-KV.js";import{r as gn,s as x,a as rv,b as by,c as Iy,d as iv}from"./attributes.nocA7ieE.js";import{a as wy,o as ov}from"./index-client.Dk2x2RJG.js";import{b as ih}from"./paths.DWQkc1Ee.js";function yy(t,e,n,r,i){var o=t,a="",l;Zh(()=>{if(a===(a=e()??"")){ln&&As();return}l!==void 0&&(ev(l),l=void 0),a!==""&&(l=Qh(()=>{if(ln){bs.data;for(var u=As(),d=u;u!==null&&(u.nodeType!==8||u.data!=="");)d=u,u=oy(u);if(u===null)throw sy(),ay;Wu(bs,d),o=Bu(u);return}var g=a+"",h=ty(g);Wu(Jh(h),h.lastChild),o.before(h)}))})}function wt(t,e,n,r,i){var l;ln&&As();var o=(l=e.$$slots)==null?void 0:l[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function sv(t,e,n,r,i,o){let a=ln;ln&&As();var l,u,d=null;ln&&bs.nodeType===1&&(d=bs,As());var g=ln?bs:t,h;Zh(()=>{const v=e()||null;var m=v==="svg"?vd:null;v!==l&&(h&&(v===null?dy(h,()=>{h=null,u=null}):v===u?_y(h):ev(h)),v&&v!==u&&(h=Qh(()=>{if(d=ln?d:m?document.createElementNS(m,v):document.createElement(v),Wu(d,d),r){ln&&ny(v)&&d.append(document.createComment(""));var E=ln?Jh(d):d.appendChild(cy());ln&&(E===null?th(!1):Bu(E)),r(d,E)}uy.nodes_end=d,g.before(d)})),l=v,l&&(u=l))},ly),a&&(th(!0),Bu(g))}function Ss(t,e,n){var r=t.__className,i=lv(e);ln&&t.getAttribute("class")===i?t.__className=i:(r!==i||ln&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function av(t,e,n){var r=t.__className,i=lv(e);ln&&t.className===i?t.__className=i:(r!==i||ln&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function lv(t,e){return(t??"")+""}function xt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function rr(t,e,n=e){var r=fy();hd(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=Ou(t)?Au(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(l,t.value.length))}}),(ln&&t.defaultValue!==t.value||gy(e)==null&&t.value)&&n(Ou(t)?Au(t.value):t.value),pd(()=>{var i=e();Ou(t)&&i===Au(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const yu=new Set;function Ed(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let l=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),hd(n,"change",()=>{var d=n.__value;o&&(d=oh(a,d,n.checked)),i(d)},()=>i(o?[]:null)),pd(()=>{var d=r();if(ln&&n.defaultChecked!==n.checked){l=!0;return}o?(d=d||[],n.checked=d.includes(n.__value)):n.checked=Ey(n.__value,d)}),tv(()=>{var d=a.indexOf(n);d!==-1&&a.splice(d,1)}),yu.has(a)||(yu.add(a),nh(()=>{a.sort((d,g)=>d.compareDocumentPosition(g)===4?-1:1),yu.delete(a)})),nh(()=>{if(l){var d;if(o)d=oh(a,d,n.checked);else{var g=a.find(h=>h.checked);d=g==null?void 0:g.__value}i(d)}})}function oh(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Ou(t){var e=t.type;return e==="number"||e==="range"}function Au(t){return t===""?null:+t}function Oy(t,e,n=e){hd(t,"change",()=>{n(t.files)}),pd(()=>{t.files=e()})}function ot(t,e,n){var r=hy(t,e);r&&r.set&&(t[e]=n,tv(()=>{t[e]=null}))}function Ay(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Fn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function oo(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function xy(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=vy(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var Co=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Co||{}),Cd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(Cd||{}),cv=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t))(cv||{}),bd=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.PARITY_MIRROR_POSITIVE_DIAGONAL="Parity Mirror Positive Diagonal",t.PARITY_MIRROR_NEGATIVE_DIAGONAL="Parity Mirror Negative Diagonal",t))(bd||{}),uv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(uv||{}),dv=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(dv||{}),_v=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(_v||{}),fv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(fv||{}),gv=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(gv||{}),hv=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(hv||{}),vv=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(vv||{}),pv=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION="Ying Yang Identical Digits Diagonally Belong To Same The Region",t))(pv||{}),mv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(mv||{}),Ev=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(Ev||{}),Cv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.CAVE_WALL_SUGURU="Cave Wall Suguru",t.CAVE_CELLS_FILLOMINO="Cave Cells Fillomino",t))(Cv||{}),bv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(bv||{}),Iv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Iv||{}),Il=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.YIN_YANG_LABELED_SHADE_CELL="Yin Yang Labeled Shade Cell",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE="Cave Shaded Region Size Unshaded Seen Orthogonally Clue",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Il||{}),Id=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Id||{}),wd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Cells Not In The Same Region Arrows",t.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Seen Cells In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(wd||{}),yd=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.COMBINED_EDGE_CONSTRAINT="Combined Edge Constraint",t))(yd||{}),Od=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Od||{}),Ad=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Ad||{}),xd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(xd||{}),Ld=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Ld||{}),Sd=(t=>(t.CLONE_REGION="Clone Region",t))(Sd||{}),Nd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.CHAOS_CONSTRUCTION_X_INDEX_REGION="Chaos Construction X-Index Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(Nd||{}),Dd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Dd||{}),Rd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Rd||{}),Td=(t=>(t.MAZE_WALL="Maze Wall",t))(Td||{}),kd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(kd||{}),Md=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Md||{}),wv=(t=>(t.FOG_LIGHTS="Fog Lights",t.CUSTOM_FOG_CLEARING="Custom Fog Clearing",t.FOG_CLEARING_ITSELF="Fog Clearing Itself",t.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS="Fog Clearing Orthogonal Neighbours",t.FOG_CLEARING_DIAGONAL_NEIGHBOURS="Fog Clearing Diagonal Neighbours",t.FOG_CLEARING_CONTAINING_ROW="Fog Clearing Containing Row",t.FOG_CLEARING_CONTAINING_COLUMN="Fog Clearing Containing Column",t.FOG_CLEARING_KNIGHTS_MOVE="Fog Clearing Knights Move",t))(wv||{}),yv=(t=>(t.PEN_TOOL="Pen Tool",t))(yv||{});const Ly={..._v,...Cv,...bv,...Ev,...Iv,...mv,...pv,...vv,...hv,...gv,...fv},Ov={...uv,...bd,...cv,...Ly,...dv},Av={...Il,...Id,...wd,...yd,...Od,...Ad,...xd,...Ld,...Sd,...Nd,...Dd,...Rd,...Td,...kd,...wv},f={...Cd,...Ov,...Av,...Md,...yv};var H=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.FOG_TOOL="Fog Tool",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(H||{});function Sy(t){return Object.values(bd).includes(t)}function Ny(t){return Object.values(Ov).includes(t)}function xv(t){return Object.values(Av).includes(t)}function Dy(t){return Object.values(Md).includes(t)}function Ry(t){return xv(t)||Dy(t)||Ny(t)}function wl(t){return Object.values(Il).includes(t)||t===f.COSMETIC_CELL_CENTER_SHAPE||t===f.FOG_LIGHTS}function Fi(t){return Object.values(Id).includes(t)||t===f.COSMETIC_CELL_ARROW}function bo(t){return Object.values(wd).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function Ud(t){return wl(t)||Fi(t)||bo(t)}function Io(t){return Object.values(yd).includes(t)||t===f.COSMETIC_EDGE}function Ns(t){return Object.values(Od).includes(t)||t===f.COSMETIC_CORNER}function wo(t){return Object.values(Ad).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function yo(t){return Object.values(xd).includes(t)||t===f.COSMETIC_ARROW}function Oo(t){return Object.values(Ld).includes(t)||t===f.COSMETIC_CAGE}function Ds(t){return Object.values(Rd).includes(t)}function Lv(t){return Object.values(Td).includes(t)}function Rs(t){return Object.values(Sd).includes(t)}function jr(t){const e=Object.values(Nd),n=Object.values(Dd);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function Sv(t){return Object.values(kd).includes(t)}function Gd(t){return Object.values(Cd).includes(t)}function Ty(t){return jr(t)||Ud(t)||wo(t)||yo(t)||Oo(t)||Rs(t)}const ky=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint","Valued Global Constraint"],My=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...ky,"Fog Tool","Cosmetic Tool"];function Uy(t){for(const e of Object.values(f))if(e===t)return e}function Gy(t,e){return Object.values(e).includes(t)}var B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function En(t,e,n){n!==void 0&&(t[e]=n)}function $y(t){var e,n,r,i,o,a,l,u,d,g,h,v,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(l=t.fill)!=null&&l.editable||(u=t.stroke)!=null&&u.editable||(d=t.strokeWidth)!=null&&d.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function ju(t){var n,r,i,o,a,l,u,d,g,h,v,m,E,I,b,w,A,T,k,G,W,M,$;const e={type:t.type};return En(e,"n",(n=t.n)==null?void 0:n.value),En(e,"r",(r=t.r)==null?void 0:r.value),En(e,"height",(i=t.height)==null?void 0:i.value),En(e,"width",(o=t.width)==null?void 0:o.value),En(e,"inset",(a=t.inset)==null?void 0:a.value),En(e,"angle",(l=t.angle)==null?void 0:l.value),En(e,"fill",(u=t.fill)==null?void 0:u.value),En(e,"stroke",(d=t.stroke)==null?void 0:d.value),En(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),En(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),En(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),En(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),En(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),En(e,"opacity",(I=t.opacity)==null?void 0:I.value),En(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:A.value,shortenTail:(k=(T=t.linePathOptions)==null?void 0:T.shortenTail)==null?void 0:k.value,bezierRounding:(W=(G=t.linePathOptions)==null?void 0:G.bezierRounding)==null?void 0:W.value,closeLoops:($=(M=t.linePathOptions)==null?void 0:M.closeLoops)==null?void 0:$.value}),e}function Fy(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const sh={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},ah={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},lh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},sl={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ku={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ts={type:"Line",strokeWidth:.125,stroke:"gray"},$d={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Nv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Py={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},ch={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},uh={strokeWidth:.02,stroke:"black"},yl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,or=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Ao=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,zy=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,tn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,xo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Fd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ge=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Hy=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Wy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,By=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Lo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Yy=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,jy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Ky=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function Vy(t){return Fi(t)?Hy():bo(t)?Wy():t===f.XV?jy():Io(t)?By():Oo(t)?yl():yo(t)?Ao():jr(t)?zy():wo(t)?Ge():Rs(t)?Ky():""}var he=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.VALUE_TOOL=13]="VALUE_TOOL",t[t.PEN=14]="PEN",t))(he||{}),St=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(St||{}),Un=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Un||{}),ke=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(ke||{}),Ln=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(Ln||{}),Pd=(t=>(t.CREATE="Create",t))(Pd||{});function Xy(t){if(wl(t)||Fi(t)||bo(t)||wo(t)||Io(t)||Ns(t)||Oo(t)||jr(t)||Ds(t))return ke;if(yo(t))return Un;if(Rs(t))return Ln;if(Sv(t))return Pd}function qy(t){if(wl(t)||Fi(t)||bo(t)||wo(t)||Io(t)||Ns(t)||Oo(t)||jr(t)||Ds(t)||yo(t)||Rs(t))return"Dynamic"}const ks=[H.ARROW_CONSTRAINT,H.LOCAL_CONSTRAINT,H.ARROW_TOOL,H.LOCAL_ELEMENT],Zy={inputOptions:{type:he.ARROW},toolId:f.ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Ao(),tags:[],categories:ks}},Qy={inputOptions:{type:he.ARROW},toolId:f.AVERAGE_ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Ao(),tags:[],categories:ks}},Jy={inputOptions:{type:he.ARROW,allowSelfIntersection:!0},toolId:f.BULBOUS_ARROW,shape:{type:B.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Ao(),tags:[],categories:ks}};he.ARROW,f.SQUARE_ROOT_ARROW,B.LINE,Ao();const eO={inputOptions:{type:he.ARROW},toolId:f.CHAOS_CONSTRUCTION_ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Ao(),tags:[],categories:ks}};function tO(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function nO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function rO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function iO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function oO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const sO={Delete:null,Backspace:null};function aO(t,e=10){if(t in sO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function lO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function cO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function uO(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function dO(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function Dv(t){return t==="Backspace"}function So(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t)||Dv(t))}function _O(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function fO(t){return _O(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function gO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function gi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),l=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,d=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${l.source}${d.source}$`,"i").test(t))}function Kr(t,e,n){if(t===void 0)return t;let r=t;return Dv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const zd=[H.CAGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.CAGE_TOOL,H.LOCAL_ELEMENT],sr=[H.CAGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.CAGE_TOOL,H.LOCAL_ELEMENT];function Rv(t,e=5){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Tv(t,e,n){return Kr(t,e,n)}const Bn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},Ol={type:he.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},ar={...Ol,valueUpdater:(t,e)=>Tv(t,e,Rv)},hO={inputOptions:ar,toolId:f.KILLER_CAGE,shape:Bn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:or(),tags:[],categories:sr}},vO={inputOptions:ar,toolId:f.UNIQUE_DIGITS_CAGE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:or(),tags:[],categories:sr}},pO={inputOptions:ar,toolId:f.INVERTED_KILLER_CAGE,shape:Bn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:or(),tags:[],categories:sr}},mO={inputOptions:ar,toolId:f.SUM_CAGE,shape:Bn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:or(),tags:[],categories:sr}},EO={inputOptions:Ol,toolId:f.SUM_CAGE_LOOK_AND_SAY,shape:Bn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:yl(),tags:[],categories:zd}},CO={inputOptions:Ol,toolId:f.PARITY_BALANCE_CAGE,shape:Bn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:yl(),tags:[],categories:zd}},bO={inputOptions:ar,toolId:f.DIVISIBLE_KILLER_CAGE,shape:Bn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:or(),tags:[],categories:sr}},IO={inputOptions:ar,toolId:f.SPOTLIGHT_CAGE,shape:Bn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:or(),tags:[],categories:sr}},wO={inputOptions:Ol,toolId:f.PUTTERIA_CAGE,shape:Bn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:yl(),tags:[],categories:zd}},yO={inputOptions:ar,toolId:f.MULTISET_CAGE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:or(),tags:[],categories:sr}},OO={inputOptions:ar,toolId:f.VAULTED_CAGE,shape:Bn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:or(),tags:[],categories:sr}},AO={inputOptions:ar,toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Bn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:or(),tags:[],categories:sr}},xO={inputOptions:ar,toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Bn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:or(),tags:[],categories:sr}},LO={inputOptions:ar,toolId:f.DOUBLERS_KILLER_CAGE,shape:Bn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:or(),tags:[],categories:sr}},SO={inputOptions:ar,toolId:f.NEGATORS_KILLER_CAGE,shape:Bn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:or(),tags:[],categories:sr}},NO={inputOptions:{type:he.SELECTION},toolId:f.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[H.CELL_INPUT_TOOL]}},DO={inputOptions:{type:he.SELECTION},toolId:f.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[H.CELL_INPUT_TOOL]}},RO={inputOptions:{type:he.SELECTION},toolId:f.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[H.CELL_INPUT_TOOL]}},TO={inputOptions:{type:he.SELECTION},toolId:f.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[H.CELL_INPUT_TOOL]}},kO={inputOptions:{type:he.SELECTION},toolId:f.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[H.CELL_INPUT_TOOL]}},MO={inputOptions:{type:he.SELECTION},toolId:f.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[H.CELL_INPUT_TOOL]}},UO={inputOptions:{type:he.SELECTION},toolId:f.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[H.CELL_INPUT_TOOL]}},GO={inputOptions:{type:he.PEN},toolId:f.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},$O={type:he.CENTER_CORNER_OR_EDGE,targets:St.CLOSEST},Hd=[H.LOCAL_CONSTRAINT,H.CENTER_CORNER_EDGE_CONSTRAINT,H.LOCAL_ELEMENT];f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,B.CIRCLE,Fd();const FO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:St.CLOSEST,valueUpdater:(t,e)=>Kr(t,e,()=>!0),defaultValue:""},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Fd(),tags:[],categories:Hd}},PO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:St.CORNER_OR_EDGE,valueUpdater:(t,e)=>Kr(t,e,()=>!0),defaultValue:""},toolId:f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Fd(),tags:[],categories:Hd}},zO={inputOptions:{type:he.CLONE},toolId:f.CLONE_REGION,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[H.CLONE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT]}},Al=[H.CORNER_CONSTRAINT,H.LOCAL_CONSTRAINT,H.CORNER_TOOL,H.LOCAL_ELEMENT],Wd=[H.CORNER_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.CORNER_TOOL,H.LOCAL_ELEMENT];function kv(t,e=3){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Mv(t,e,n){return Kr(t,e,n)}function HO(t,e){function n(){return!0}return Kr(t,e,n)}const Bd={type:he.CORNER,defaultValue:"",valueUpdater:(t,e)=>Mv(t,e,kv)},WO={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>HO(t,e),defaultValue:""},toolId:f.QUADRUPLE,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Yy(),categories:Wd}},BO={inputOptions:Bd,toolId:f.CORNER_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Lo(),categories:Wd}},YO={inputOptions:{type:he.CORNER,defaultValue:""},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Lo(),categories:Al}},jO={inputOptions:Bd,toolId:f.CORNER_EVEN_COUNT,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Lo(),categories:Al}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,B.CIRCLE,Lo();const KO={inputOptions:{type:he.CORNER,defaultValue:"X"},toolId:f.PRODUCT_SQUARE,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Lo(),categories:Al}},VO={inputOptions:{type:he.CORNER,defaultValue:""},toolId:f.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Lo(),categories:Al}},xl=[H.EDGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.EDGE_TOOL,H.LOCAL_ELEMENT],lr=[H.EDGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.EDGE_TOOL,H.LOCAL_ELEMENT],Ms=.15,Uv=.02,Pi={type:B.CIRCLE,r:{editable:!0,value:Ms,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Uv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Yd={type:B.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function XO(t,e=1){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Gv(t,e=3){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function qO(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function jd(t,e,n){return Kr(t,e,n)}function ZO(t,e){return t===void 0?"V":qO(e)?e.toUpperCase():t}function QO(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function $v(t,e){return t===void 0?"<":QO(e)?e:t}const Us={type:he.EDGE,valueUpdater:(t,e)=>jd(t,e,Gv)},JO={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>jd(t,e,XO)},toolId:f.RATIO,negative_constraints:[{toolId:f.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:lr}},eA={inputOptions:Us,toolId:f.DIFFERENCE,negative_constraints:[{toolId:f.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:Pi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:lr}},tA={inputOptions:Us,toolId:f.EDGE_SUM,shape:{...Pi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:lr}},nA={inputOptions:{type:he.EDGE,defaultValue:"V",valueUpdater:ZO},toolId:f.XV,negative_constraints:[{toolId:f.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:f.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:f.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:B.TEXT_ONLY,r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:lr}},rA={inputOptions:{type:he.EDGE,valueUpdater:$v,defaultValue:"<"},toolId:f.EDGE_INEQUALITY,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:lr}},iA={inputOptions:Us,toolId:f.EDGE_PRODUCT,shape:{...Pi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:lr}},oA={inputOptions:Us,toolId:f.EDGE_MODULO,shape:{...Pi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:lr}},sA={inputOptions:Us,toolId:f.EDGE_FACTOR,shape:{...Pi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:lr}},aA={inputOptions:{type:he.EDGE},toolId:f.XY_DIFFERENCES,negative_constraints:[{toolId:f.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:Uv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:lr}},lA={inputOptions:{type:he.EDGE},toolId:f.YIN_YANG_WHITE_KROPKI,shape:Pi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:lr}},cA={inputOptions:{type:he.EDGE},toolId:f.YIN_YANG_KROPKI,negative_constraints:[{toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:lr}},uA={inputOptions:{type:he.EDGE},toolId:f.FILLOMINO_REGION_BORDER,shape:Yd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:xl}},dA={inputOptions:{type:he.EDGE},toolId:f.UNKNOWN_REGION_BORDER,shape:Yd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:xl}},_A={inputOptions:{type:he.EDGE},toolId:f.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:Yd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:xl}},fA={inputOptions:{type:he.EDGE},toolId:f.EDGE_CAVE_ONE_OF_EACH,shape:Pi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:xl}},gA={inputOptions:{type:he.EDGE,valueUpdater:$v,defaultValue:"<"},toolId:f.ONE_WAY_DOOR,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:lr}},No=[H.OUTSIDE_CORNER_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.OUTSIDE_CORNER_TOOL,H.OUTSIDE_DIRECTION_TOOL,H.LOCAL_ELEMENT];function hA(t,e=5){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fv(t,e,n){return Kr(t,e,n)}const Do={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Ro={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fv(t,e,hA),defaultValue:"",cornerOrEdge:St.CORNER},vA={inputOptions:Ro,toolId:f.LITTLE_KILLER_SUM,shape:Do,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:xo(),tags:[],categories:No}},pA={inputOptions:Ro,toolId:f.LITTLE_KILLER_PRODUCT,shape:Do,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:xo(),tags:[],categories:No}},mA={inputOptions:Ro,toolId:f.LITTLE_KILLER_LOOK_AND_SAY,shape:Do,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:xo(),tags:[],categories:No}},EA={inputOptions:Ro,toolId:f.X_OMIT_LITTLE_KILLER_SUM,shape:Do,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:xo(),tags:[],categories:No}},CA={inputOptions:Ro,toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:Do,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:xo(),tags:[],categories:No}},bA={inputOptions:Ro,toolId:f.NEGATORS_LITTLE_KILLER_SUM,shape:Do,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:xo(),tags:[],categories:No}},nn=[H.OUTSIDE_EDGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.OUTSIDE_EDGE_TOOL,H.OUTSIDE_DIRECTION_TOOL,H.LOCAL_ELEMENT];function To(t,e=5){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Gs(t,e,n){return Kr(t,e,n)}const rn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Yn={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,To),defaultValue:"",cornerOrEdge:St.EDGE},IA={inputOptions:Yn,toolId:f.SANDWICH_SUM,shape:rn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:tn(),tags:[],categories:nn}},wA={inputOptions:{...Yn,cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.MYSTERY_SANDWICH_SUM,shape:rn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:tn(),tags:[],categories:nn}},yA={inputOptions:Yn,toolId:f.SANDWICH_SUM_XOR_X_SUM,shape:rn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:tn(),tags:[],categories:nn}},OA={inputOptions:Yn,toolId:f.X_SUM,shape:rn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:tn(),tags:[],categories:nn}},AA={inputOptions:Yn,toolId:f.SHORTSIGHTED_X_SUM,shape:rn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:tn(),tags:[],categories:nn}},xA={inputOptions:Yn,toolId:f.SHIFTED_X_SUM,shape:rn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:tn(),tags:[],categories:nn}},LA={inputOptions:Yn,toolId:f.BROKEN_X_SUM,shape:rn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:tn(),tags:[],categories:nn}},SA={inputOptions:Yn,toolId:f.X_SUM_SKYSCRAPERS,shape:rn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:tn(),tags:[],categories:nn}},NA={inputOptions:Yn,toolId:f.BATTLEFIELD,shape:rn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:tn(),tags:[],categories:nn}},DA={inputOptions:Yn,toolId:f.SKYSCRAPERS,shape:rn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:tn(),tags:[],categories:nn}},RA={inputOptions:Yn,toolId:f.X_INDEX,shape:rn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:tn(),tags:[],categories:nn}},TA={inputOptions:Yn,toolId:f.RISING_STREAK,shape:rn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:tn(),tags:[],categories:nn}},kA={inputOptions:Yn,toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:rn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:tn(),tags:[],categories:nn}},MA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,To),defaultValue:"",cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.OUTSIDE_CONSECUTIVE_SUM,shape:rn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:tn(),tags:[],categories:nn}},UA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,To),defaultValue:"",cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.LOOPWICHES,shape:rn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:tn(),tags:[],categories:nn}},GA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,To),defaultValue:"",cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:rn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:tn(),tags:[],categories:nn}},$A={inputOptions:{type:he.OUTSIDE_DIRECTION,defaultValue:"",cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_X_INDEX_REGION,shape:rn,meta:{description:"Clues outside the grid indicate the first N cells pointing in that direction are in the same region - followed by a region border - where N is the first digit seen by the clue.",usage:tn(),tags:[],categories:nn}},FA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,To),defaultValue:"",cornerOrEdge:St.EDGE},toolId:f.PENTOMINO_BORDER_COUNT,shape:rn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:tn(),tags:[],categories:nn}},PA={inputOptions:{type:he.SINGLE_CELL},toolId:f.COSMETIC_CELL_CENTER_SHAPE,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},zA={inputOptions:{type:he.SINGLE_CELL_ARROW,cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},HA={inputOptions:{type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_MULTI_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},WA={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>jd(t,e,Gv),defaultValue:""},toolId:f.COSMETIC_EDGE,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.LOCAL_ELEMENT]}},BA={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Mv(t,e,kv),defaultValue:""},toolId:f.COSMETIC_CORNER,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.LOCAL_ELEMENT]}},YA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},jA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},KA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},VA={inputOptions:{type:he.CAGE,valueUpdater:(t,e)=>Tv(t,e,Rv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:f.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.LOCAL_ELEMENT]}},XA={inputOptions:{type:he.ARROW},toolId:f.COSMETIC_ARROW,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT]}},qA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fv(t,e,To),defaultValue:"",cornerOrEdge:St.CORNER_OR_EDGE},toolId:f.COSMETIC_OUTSIDE_DIRECTION,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.OUTSIDE_DIRECTION_TOOL,H.LOCAL_ELEMENT]}},ko=[H.LOCAL_ELEMENT,H.DIAGONAL_CONSTRAINTS],ZA={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},QA={toolId:f.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},JA={toolId:f.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},ex={toolId:f.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},tx={toolId:f.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},nx={toolId:f.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:f.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:f.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:f.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:f.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:f.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:f.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:ko}},cx={toolId:f.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:ko}},ux={toolId:f.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:ko}},dx={toolId:f.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:ko}},_x={toolId:f.PARITY_MIRROR_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:ko}},fx={toolId:f.PARITY_MIRROR_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:ko}},gx={toolId:f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},hx={toolId:f.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},vx={toolId:f.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},px={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},mx={toolId:f.CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ex={toolId:f.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Cx={toolId:f.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},bx={toolId:f.YIN_YANG,negative_constraints:[{toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."},{toolId:f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION,description:"Identical digits which see each other by a bishops move (diagonally) must be the same color."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ix={toolId:f.NURIMISAKI,negative_constraints:[{toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:f.NURIKABE,negative_constraints:[{toolId:f.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:f.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:f.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:f.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},xx={toolId:f.SHIKAKU,negative_constraints:[{toolId:f.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:f.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Sx={toolId:f.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:f.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:f.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Dx={toolId:f.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:f.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:f.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Rx={toolId:f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[H.GLOBAL_CONSTRAINT,H.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Tx={toolId:f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[H.GLOBAL_CONSTRAINT,H.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},kx={toolId:f.CAVE,negative_constraints:[{toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:f.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:f.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:f.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:f.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."},{toolId:f.CAVE_WALL_SUGURU,description:"Each orthogonally connected group of shaded (wall) cells contains the digits 1-N (where N is the size of the group). Suguru digits may not repeat in a row, column, or shaded group."},{toolId:f.CAVE_CELLS_FILLOMINO,description:"Divide unshaded cells into polyominoes and fill each cell with a digit equal to the size of its polyomino. Polyominoes of the same size may not share an edge."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:f.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:f.GALAXIES,negative_constraints:[{toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:f.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:f.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:f.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:f.CONNECT_FOUR,negative_constraints:[{toolId:f.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:f.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:f.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Be=[H.LINE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.LINE_TOOL,H.LOCAL_ELEMENT],Vr=[H.LINE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.DOUBLE_ENDED_LINE_CONSTRAINT,H.LINE_TOOL,H.LOCAL_ELEMENT],$s={description:"",usage:Ge(),tags:[],categories:Be},Gt={type:he.LINE,allowSelfIntersection:!0},Qt={type:he.LINE,allowSelfIntersection:!1},Wx={inputOptions:Qt,toolId:f.THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a thermometer must increase from the bulb end."}},Bx={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:f.CUSTOM_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},Yx={inputOptions:Qt,toolId:f.FUZZY_THERMOMETER,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},jx={inputOptions:Qt,toolId:f.SLOW_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},Kx={inputOptions:Qt,toolId:f.ROW_CYCLE_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},Vx={inputOptions:Gt,toolId:f.PALINDROME,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Ge(),tags:[],categories:Be}},Xx={inputOptions:Gt,toolId:f.RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Ge(),tags:[],categories:Be}},qx={inputOptions:Gt,toolId:f.DOUBLE_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Ge(),tags:[],categories:Be}},Zx={inputOptions:Gt,toolId:f.RENRENBANBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Ge(),tags:[],categories:Be}},Qx={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.N_CONSECUTIVE_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Be}},Jx={inputOptions:Gt,toolId:f.NABNER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Be}},eL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Ge(),tags:[],categories:Be}},tL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.DUTCH_WHISPERS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Ge(),tags:[],categories:Be}},nL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Ge(),tags:[],categories:Be}},rL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Ge(),tags:[],categories:Be}},iL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_NABNER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Be}},oL={inputOptions:Qt,toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Ge(),tags:[],categories:Be}},sL={inputOptions:Qt,toolId:f.INDEX_LINE,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Ge(),tags:[],categories:Be}},aL={inputOptions:Gt,toolId:f.UNIQUE_VALUES_LINE,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Ge(),tags:[],categories:Be}},lL={inputOptions:Gt,toolId:f.REGION_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Ge(),tags:[],categories:Be}},cL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Ge(),tags:[],categories:Be}},uL={inputOptions:Qt,toolId:f.ARITHMETIC_SEQUENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Ge(),tags:[],categories:Be}},dL={inputOptions:Gt,toolId:f.SAME_PARITY_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Ge(),tags:[],categories:Be}},_L={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Be}},fL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.UNIMODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Ge(),tags:[],categories:Be}},gL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_OR_UNIMODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Ge(),tags:[],categories:Be}},hL={inputOptions:Gt,toolId:f.ODD_EVEN_OSCILLATOR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Ge(),tags:[],categories:Be}},vL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.HIGH_LOW_OSCILLATOR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Ge(),tags:[],categories:Be}},pL={inputOptions:Gt,toolId:f.ENTROPIC_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Ge(),tags:[],categories:Be}},mL={inputOptions:Gt,toolId:f.ENTROPIC_OR_MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Ge(),tags:[],categories:Be}},EL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_COLUMN_IS_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Ge(),tags:[],categories:Be}},CL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_ROW_IS_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Ge(),tags:[],categories:Be}},bL={inputOptions:Qt,toolId:f.REPEATED_DIGITS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Ge(),tags:[],categories:Be}},IL={inputOptions:Qt,toolId:f.SUPERFUZZY_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Ge(),tags:[],categories:Be}},wL={inputOptions:Gt,toolId:f.AMBIGUOUS_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Ge(),tags:[],categories:Be}},yL={inputOptions:Qt,toolId:f.HEADLESS_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Ge(),tags:[],categories:Be}},OL={inputOptions:Gt,toolId:f.XV_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Ge(),tags:[],categories:Be}},AL={inputOptions:Qt,toolId:f.ROW_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Ge(),tags:[],categories:Be}},xL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.AT_LEAST_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Ge(),tags:[],categories:Be}},LL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Ge(),tags:[],categories:Be}};f.ADJACENT_CELL_SUM_IS_PRIME_LINE,B.LINE,Ge();const SL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.PRODUCT_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Ge(),tags:[],categories:Be}},NL={inputOptions:Gt,toolId:f.ADJACENT_MULTIPLES_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Ge(),tags:[],categories:Be}},DL={inputOptions:Gt,toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Ge(),tags:[],categories:Be}},RL={inputOptions:Qt,toolId:f.LOOK_AND_SAY_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Ge(),tags:[],categories:Be}},TL={inputOptions:Qt,toolId:f.ZIPPER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Ge(),tags:[],categories:Be}},kL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.SEGMENTED_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Ge(),tags:[],categories:Be}},ML={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Ge(),tags:[],categories:Be}},UL={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Ge(),tags:[],categories:Be}};f.THERMO_OR_AVERAGE_ARROW,B.THERMO_WITH_CIRCLE,Ge();const GL={inputOptions:Qt,toolId:f.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:B.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Ge(),tags:[],categories:Be}},$L={inputOptions:Qt,toolId:f.PEAPODS,shape:{type:B.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Ge(),tags:[],categories:Be}},FL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Ge(),tags:[],categories:Be}},PL={inputOptions:Gt,toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Ge(),tags:[],categories:Be}},zL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Be}},HL={inputOptions:Gt,toolId:f.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Ge(),tags:[],categories:Be}},WL={inputOptions:Qt,toolId:f.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Ge(),tags:[],categories:Be}},BL={inputOptions:Qt,toolId:f.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Ge(),tags:[],categories:Be}},YL={inputOptions:Gt,toolId:f.BETWEEN_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Ge(),tags:[],categories:Vr}},jL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.LOCKOUT_LINE,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Ge(),tags:[],categories:Vr}},KL={inputOptions:Gt,toolId:f.TIGHTROPE_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Ge(),tags:[],categories:Vr}},VL={inputOptions:Gt,toolId:f.PARITY_COUNT_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Ge(),tags:[],categories:Vr}},XL={inputOptions:Gt,toolId:f.DOUBLE_ARROW_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Ge(),categories:Vr}},qL={inputOptions:Gt,toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Ge(),tags:[],categories:Vr}},ZL={inputOptions:Gt,toolId:f.SPLIT_PEAS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Ge(),tags:[],categories:Vr}},QL={inputOptions:Qt,toolId:f.DOUBLERS_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Ge(),tags:[],categories:Be}},JL={inputOptions:Gt,toolId:f.DOUBLERS_BETWEEN_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:Vr}},eS={inputOptions:Gt,toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:Vr}},Ke=[H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.SINGLE_CELL_SHAPE_TOOL,H.LOCAL_ELEMENT],zi=[H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.SINGLE_CELL_COLOR_TOOL,H.LOCAL_ELEMENT],Pv=[H.SINGLE_CELL_ARROW_TOOL,H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT],Ll={type:B.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},hi={type:B.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Sl(t,e=3){return gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function tS(t){return t===""||t==="1"||t==="2"||t==="3"}function Fs(t,e,n){return Kr(t,e,n)}const Je={type:he.SINGLE_CELL},Xr={type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Sl),defaultValue:""},zv={type:he.SINGLE_CELL_ARROW,cornerOrEdge:St.CORNER_OR_EDGE},nS={inputOptions:Je,toolId:f.ODD,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:Ke}},rS={inputOptions:Je,toolId:f.EVEN,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:Ke}},iS={inputOptions:Je,toolId:f.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:zi}},oS={inputOptions:Je,toolId:f.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:zi}},sS={inputOptions:Je,toolId:f.ODD_MINESWEEPER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Ke}},aS={inputOptions:Je,toolId:f.EVEN_MINESWEEPER,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Ke}},lS={inputOptions:Je,toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:Ke}},cS={inputOptions:Je,toolId:f.WATCHTOWER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Ke}},uS={inputOptions:Je,toolId:f.NOT_WATCHTOWER,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Ke}},dS={inputOptions:Xr,toolId:f.FARSIGHT,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:Ke}},_S={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Sl),defaultValue:"9"},toolId:f.RADAR,negative_constraints:[{toolId:f.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:Ke}},fS={inputOptions:Je,toolId:f.ORTHOGONAL_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:Ke}},gS={inputOptions:Je,toolId:f.INDEXING_COLUMN,negative_constraints:[{toolId:f.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:zi}},hS={inputOptions:Je,toolId:f.INDEXING_ROW,negative_constraints:[{toolId:f.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:zi}},vS={inputOptions:Je,toolId:f.LOW_DIGIT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:zi}},pS={inputOptions:Je,toolId:f.HIGH_DIGIT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:zi}},mS={inputOptions:Je,toolId:f.FRIENDLY_CELL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:zi}},ES={inputOptions:Je,toolId:f.DIAGONALLY_ADJACENT_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:Ke}},CS={inputOptions:Je,toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:Ke}},bS={inputOptions:Je,toolId:f.SANDWICH_ROW_COL_COUNT,shape:hi,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:Ke}},IS={inputOptions:Je,toolId:f.COUNTING_CIRCLES,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:Ke}},wS={inputOptions:Je,toolId:f.REVERSE_COUNTING_CIRCLES,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:Ke}},yS={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,tS),defaultValue:""},toolId:f.COLORED_COUNTING_CIRCLES,shape:hi,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:Ke}},OS={inputOptions:Je,toolId:f.UNIQUE_CELLS,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:Ke}},AS={inputOptions:Je,toolId:f.SEEN_EVEN_COUNT,shape:Ll,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Ke}},xS={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Sl),defaultValue:"5"},toolId:f.CELL_KNIGHT_WHISPERS,shape:hi,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:Ke}},LS={inputOptions:Je,toolId:f.SEEN_ODD_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Ke}},SS={inputOptions:Je,toolId:f.YIN_YANG_MINESWEEPER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:Ke}},NS={inputOptions:Je,toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Ke}},DS={inputOptions:Je,toolId:f.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Ke}},RS={inputOptions:Je,toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Ll,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:Ke}},TS={inputOptions:Je,toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:Ke}},kS={inputOptions:Je,toolId:f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:Ke}},MS={inputOptions:Xr,toolId:f.YIN_YANG_LABELED_SHADE_CELL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"Cells in cages with the same label have the yin yang shading.",tags:[],categories:Ke}},US={inputOptions:Je,toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:Ke}},GS={inputOptions:Je,toolId:f.SEEN_REGION_BORDERS_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:Ke}},$S={inputOptions:Je,toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:Ke}},FS={inputOptions:Je,toolId:f.SASHIGANE_BEND_REGION_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:Ke}},PS={inputOptions:zv,toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Pv}},zS={inputOptions:zv,toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Pv}},HS={inputOptions:Xr,toolId:f.SASHIGANE_REGION_SUM,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:Ke}},WS={inputOptions:Je,toolId:f.CELL_ON_THE_LOOP,shape:Ll,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:Ke}},BS={inputOptions:Je,toolId:f.CELL_NOT_ON_THE_LOOP,shape:hi,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:Ke}},YS={inputOptions:Je,toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:Ke}},jS={inputOptions:Xr,toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:Ke}},KS={inputOptions:Je,toolId:f.CAVE_CLUE,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:Ke}},VS={inputOptions:Je,toolId:f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,shape:hi,meta:{description:"An unshaded circled clue (cave) indicates the total number of unshaded cells seen in the four orthogonal directions, including the clue cell. A shaded circle clue (wall) indicates the size of the shaded region.",tags:[],categories:Ke}},XS={inputOptions:Xr,toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:Ke}},qS={inputOptions:Xr,toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:Ke}},ZS={inputOptions:Xr,toolId:f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:hi,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:Ke}},QS={inputOptions:Je,toolId:f.DIRECTED_PATH_START,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:Ke}},JS={inputOptions:Je,toolId:f.DIRECTED_PATH_END,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:Ke}},eN={inputOptions:Xr,toolId:f.TELEPORT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:Ke}},tN={inputOptions:Xr,toolId:f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:Ke}},nN={inputOptions:Je,toolId:f.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Ll,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:Ke}},rN={inputOptions:Je,toolId:f.NURIKABE_ISLAND_SIZE_CELL,shape:hi,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:Ke}},iN={inputOptions:Je,toolId:f.CONNECT_FOUR_YELLOW,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:Ke}},oN={inputOptions:Je,toolId:f.CONENCT_FOUR_RED,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:Ke}},sN={inputOptions:Je,toolId:f.SHIKAKU_REGION_SIZE,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,description:"Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region."}],shape:hi,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:Ke}},aN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Sl),defaultValue:"?"},toolId:f.SHIKAKU_REGION_SUM,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,description:"Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region."}],shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:Ke}},lN={inputOptions:{type:he.SINGLE_CELL},toolId:f.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:[H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT,H.FOG_TOOL]}},cN={toolId:f.CUSTOM_FOG_CLEARING,negative_constraints:[{toolId:f.FOG_CLEARING_ITSELF,description:"On cell input, clear itself."},{toolId:f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,description:"On cell input, clear orthogonal neighbours."},{toolId:f.FOG_CLEARING_DIAGONAL_NEIGHBOURS,description:"On cell input, clear diagonal neighbours."},{toolId:f.FOG_CLEARING_CONTAINING_ROW,description:"On cell input, clear containing row."},{toolId:f.FOG_CLEARING_CONTAINING_COLUMN,description:"On cell input, clear containing column."},{toolId:f.FOG_CLEARING_KNIGHTS_MOVE,description:"On cell input, clear cells a knight's move away."}],meta:{description:"",tags:[],categories:[H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT,H.FOG_TOOL]}},cr=[H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.SINGLE_CELL_MULTIARROW_TOOL,H.LOCAL_ELEMENT],Rr={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},ur={type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:St.CORNER_OR_EDGE},uN={inputOptions:ur,toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:Rr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:cr}},dN={inputOptions:ur,toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:Rr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:cr}},_N={inputOptions:ur,toolId:f.LOOP_CELL_COUNT_ARROWS,shape:Rr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:cr}},fN={inputOptions:ur,toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:Rr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:cr}},gN={inputOptions:ur,toolId:f.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:Rr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:cr}},hN={inputOptions:ur,toolId:f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:Rr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:cr}},vN={inputOptions:ur,toolId:f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,shape:Rr,meta:{description:"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",tags:[],categories:cr}},pN={inputOptions:ur,toolId:f.COLD_ARROWS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:cr}},mN={inputOptions:ur,toolId:f.HOT_ARROWS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:cr}},EN={inputOptions:ur,toolId:f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:Rr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:cr}},CN={inputOptions:ur,toolId:f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:Rr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:cr}},bN={inputOptions:ur,toolId:f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:Rr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:cr}};function IN(t,e){if(t===void 0||gi(t,{maxLength:10,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const wN={type:he.VALUE_TOOL,defaultValue:"",valueUpdater:IN},yN={inputOptions:wN,toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}},ON={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}},AN={toolId:f.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}},xN={toolId:f.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;const LN={toolId:f.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}},SN={toolId:f.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;const NN={toolId:f.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}},DN={toolId:f.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}},RN=[H.CORNER_LINE_CONSTRAINT,H.CORNER_LINE_TOOL,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT],TN={inputOptions:{type:he.CORNER_LINE},toolId:f.MAZE_WALL,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:RN}},Ht={[f.GIVEN]:NO,[f.DIGIT]:DO,[f.REGIONS]:RO,[f.OUTSIDE]:UO,[f.CORNER_PM]:TO,[f.CENTER_PM]:kO,[f.HIGHLIGHTS]:MO,[f.PEN_TOOL]:GO,[f.SUDOKU_RULES_DO_NOT_APPLY]:ZA,[f.LEAVE_EMPTY_CELLS_EMPTY]:QA,[f.LITS]:Hx,[f.HEXED_SUDOKU]:JA,[f.FILLOMINO]:zx,[f.ANTIKNIGHT]:ex,[f.ANTI_LONG_KNIGHT]:nx,[f.ANTIKING]:rx,[f.ANTI_GIRAFFE]:tx,[f.DISJOINT_GROUPS]:ix,[f.TANGO]:ox,[f.NONCONSECUTIVE]:sx,[f.NONRATIO]:ax,[f.ANTI_ENTROPY]:hx,[f.GLOBAL_INDEXING_COLUMN]:vx,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:px,[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:gx,[f.NEGATIVE_DIAGONAL]:lx,[f.POSITIVE_DIAGONAL]:cx,[f.NEGATIVE_ANTIDIAGONAL]:ux,[f.POSITIVE_ANTIDIAGONAL]:dx,[f.PARITY_MIRROR_NEGATIVE_DIAGONAL]:_x,[f.PARITY_MIRROR_POSITIVE_DIAGONAL]:fx,[f.DOUBLERS]:LN,[f.NEGATORS]:SN,[f.NEXUS]:NN,[f.INDEXER_CELLS]:DN,[f.CHAOS_CONSTRUCTION]:mx,[f.NUMBERED_CHAOS_CONSTRUCTION]:Ex,[f.CHAOS_CONSTRUCTION_SUGURU]:Cx,[f.YIN_YANG]:bx,[f.NURIMISAKI]:Ix,[f.NURIKABE]:wx,[f.TWO_CONTIGUOUS_REGIONS]:yx,[f.SASHIGANE]:Ox,[f.NORINORI]:Ax,[f.SHIKAKU]:xx,[f.GOLDILOCKS_ZONE]:Sx,[f.CELL_CENTER_LOOP_NO_TOUCHING]:Nx,[f.CAVE]:kx,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Mx,[f.GALAXIES]:Gx,[f.PENTOMINO_TILLING]:$x,[f.LITS_BLACK_WHITE_STAR_BATTLE]:Fx,[f.NORINORI_STAR_BATTLE]:Lx,[f.MAZE_DIRECTED_PATH]:Dx,[f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:Rx,[f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Tx,[f.CONNECT_FOUR]:Px,[f.ODD]:nS,[f.EVEN]:rS,[f.MINIMUM]:iS,[f.MAXIMUM]:oS,[f.ODD_MINESWEEPER]:sS,[f.EVEN_MINESWEEPER]:aS,[f.WATCHTOWER]:cS,[f.NOT_WATCHTOWER]:uS,[f.FARSIGHT]:dS,[f.RADAR]:_S,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:lS,[f.ORTHOGONAL_SUM]:fS,[f.DIAGONALLY_ADJACENT_SUM]:ES,[f.INDEXING_COLUMN]:gS,[f.INDEXING_ROW]:hS,[f.LOW_DIGIT]:vS,[f.HIGH_DIGIT]:pS,[f.FRIENDLY_CELL]:mS,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:CS,[f.SANDWICH_ROW_COL_COUNT]:bS,[f.COUNTING_CIRCLES]:IS,[f.REVERSE_COUNTING_CIRCLES]:wS,[f.COLORED_COUNTING_CIRCLES]:yS,[f.UNIQUE_CELLS]:OS,[f.SEEN_EVEN_COUNT]:AS,[f.SEEN_ODD_COUNT]:LS,[f.CELL_KNIGHT_WHISPERS]:xS,[f.YIN_YANG_MINESWEEPER]:SS,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:NS,[f.YIN_YANG_SEEN_SHADED_CELLS]:DS,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:RS,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:TS,[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:kS,[f.YIN_YANG_LABELED_SHADE_CELL]:MS,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:US,[f.SEEN_REGION_BORDERS_COUNT]:GS,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:$S,[f.SASHIGANE_BEND_REGION_COUNT]:FS,[f.SASHIGANE_REGION_SUM]:HS,[f.CELL_ON_THE_LOOP]:WS,[f.CELL_NOT_ON_THE_LOOP]:BS,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:YS,[f.CAVE_CLUE]:KS,[f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE]:VS,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:jS,[f.YIN_YANG_FILLOMINO_PARITY]:Ux,[f.SHIKAKU_REGION_SIZE]:sN,[f.SHIKAKU_REGION_SUM]:aN,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:XS,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:qS,[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:ZS,[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:tN,[f.DIRECTED_PATH_START]:QS,[f.DIRECTED_PATH_END]:JS,[f.TELEPORT]:eN,[f.CONNECT_FOUR_YELLOW]:iN,[f.CONENCT_FOUR_RED]:oN,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:PS,[f.THERMO_SIGHTLINE_LOOP_ARROW]:zS,[f.HOT_ARROWS]:mN,[f.COLD_ARROWS]:pN,[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:hN,[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:vN,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:fN,[f.YIN_YANG_COUNT_SHADED_CELLS]:gN,[f.LOOP_CELL_COUNT_ARROWS]:_N,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:dN,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:uN,[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:EN,[f.NURIKABE_SEEN_WATERWAY_CELLS]:nN,[f.NURIKABE_ISLAND_SIZE_CELL]:rN,[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:CN,[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:bN,[f.DIFFERENCE]:eA,[f.RATIO]:JO,[f.XV]:nA,[f.EDGE_INEQUALITY]:rA,[f.EDGE_SUM]:tA,[f.EDGE_PRODUCT]:iA,[f.EDGE_MODULO]:oA,[f.EDGE_FACTOR]:sA,[f.XY_DIFFERENCES]:aA,[f.YIN_YANG_WHITE_KROPKI]:lA,[f.YIN_YANG_KROPKI]:cA,[f.FILLOMINO_REGION_BORDER]:uA,[f.UNKNOWN_REGION_BORDER]:dA,[f.CHAOS_CONSTRUCTION_SUGURU_BORDER]:_A,[f.EDGE_CAVE_ONE_OF_EACH]:fA,[f.ONE_WAY_DOOR]:gA,[f.QUADRUPLE]:WO,[f.CORNER_SUM]:BO,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:YO,[f.CORNER_EVEN_COUNT]:jO,[f.PRODUCT_SQUARE]:KO,[f.EQUAL_DIAGONAL_DIFFERENCES]:VO,[f.THERMOMETER]:Wx,[f.FUZZY_THERMOMETER]:Yx,[f.SLOW_THERMOMETER]:jx,[f.CUSTOM_THERMOMETER]:Bx,[f.ROW_CYCLE_THERMOMETER]:Kx,[f.PALINDROME]:Vx,[f.RENBAN_LINE]:Xx,[f.DOUBLE_RENBAN_LINE]:qx,[f.RENRENBANBAN_LINE]:Zx,[f.N_CONSECUTIVE_RENBAN_LINE]:Qx,[f.NABNER_LINE]:Jx,[f.WHISPERS_LINE]:eL,[f.DUTCH_WHISPERS]:tL,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:nL,[f.RENBAN_OR_WHISPERS_LINE]:rL,[f.RENBAN_OR_NABNER_LINE]:iL,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:oL,[f.INDEX_LINE]:sL,[f.UNIQUE_VALUES_LINE]:aL,[f.REPEATED_DIGITS_LINE]:bL,[f.REGION_SUM_LINE]:lL,[f.SUM_LINE]:cL,[f.XV_LINE]:OL,[f.ROW_SUM_LINE]:AL,[f.AT_LEAST_X_LINE]:xL,[f.SUPERFUZZY_ARROW]:IL,[f.AMBIGUOUS_ARROW]:wL,[f.HEADLESS_ARROW]:yL,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:LL,[f.PRODUCT_LINE]:SL,[f.ADJACENT_MULTIPLES_LINE]:NL,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:DL,[f.LOOK_AND_SAY_LINE]:RL,[f.ARITHMETIC_SEQUENCE_LINE]:uL,[f.ZIPPER_LINE]:TL,[f.SEGMENTED_SUM_LINE]:kL,[f.SEGMENTED_SUM_AND_RENBAN_LINE]:ML,[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:UL,[f.SAME_PARITY_LINE]:dL,[f.MODULAR_LINE]:_L,[f.UNIMODULAR_LINE]:fL,[f.MODULAR_OR_UNIMODULAR_LINE]:gL,[f.ODD_EVEN_OSCILLATOR_LINE]:hL,[f.HIGH_LOW_OSCILLATOR_LINE]:vL,[f.ENTROPIC_LINE]:pL,[f.ENTROPIC_OR_MODULAR_LINE]:mL,[f.INDEXING_COLUMN_IS_X_LINE]:EL,[f.INDEXING_ROW_IS_X_LINE]:CL,[f.INDEXER_CELLS_REGION_SUBSET_LINE]:GL,[f.PEAPODS]:$L,[f.YIN_YANG_INDEXING_LINE_COLORING]:WL,[f.YIN_YANG_SHADED_WHISPERS_LINE]:FL,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:PL,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:zL,[f.YIN_YANG_REGION_SUM_LINE]:HL,[f.GOLDILOCKS_ZONE_REGION_SUM]:BL,[f.BETWEEN_LINE]:YL,[f.LOCKOUT_LINE]:jL,[f.PARITY_COUNT_LINE]:VL,[f.TIGHTROPE_LINE]:KL,[f.DOUBLE_ARROW_LINE]:XL,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:qL,[f.SPLIT_PEAS]:ZL,[f.DOUBLERS_THERMOMETER]:QL,[f.DOUBLERS_BETWEEN_LINE]:JL,[f.DOUBLERS_DOUBLE_ARROW_LINE]:eS,[f.ARROW]:Zy,[f.CHAOS_CONSTRUCTION_ARROW]:eO,[f.AVERAGE_ARROW]:Qy,[f.BULBOUS_ARROW]:Jy,[f.MAZE_WALL]:TN,[f.KILLER_CAGE]:hO,[f.UNIQUE_DIGITS_CAGE]:vO,[f.INVERTED_KILLER_CAGE]:pO,[f.SUM_CAGE]:mO,[f.SUM_CAGE_LOOK_AND_SAY]:EO,[f.PARITY_BALANCE_CAGE]:CO,[f.DIVISIBLE_KILLER_CAGE]:bO,[f.SPOTLIGHT_CAGE]:IO,[f.PUTTERIA_CAGE]:wO,[f.MULTISET_CAGE]:yO,[f.VAULTED_CAGE]:OO,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:AO,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:xO,[f.DOUBLERS_KILLER_CAGE]:LO,[f.NEGATORS_KILLER_CAGE]:SO,[f.CLONE_REGION]:zO,[f.SANDWICH_SUM]:IA,[f.MYSTERY_SANDWICH_SUM]:wA,[f.X_SUM]:OA,[f.SHORTSIGHTED_X_SUM]:AA,[f.SHIFTED_X_SUM]:xA,[f.BROKEN_X_SUM]:LA,[f.X_SUM_SKYSCRAPERS]:SA,[f.BATTLEFIELD]:NA,[f.SKYSCRAPERS]:DA,[f.X_INDEX]:RA,[f.SANDWICH_SUM_XOR_X_SUM]:yA,[f.RISING_STREAK]:TA,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:kA,[f.OUTSIDE_CONSECUTIVE_SUM]:MA,[f.LOOPWICHES]:UA,[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:GA,[f.CHAOS_CONSTRUCTION_X_INDEX_REGION]:$A,[f.PENTOMINO_BORDER_COUNT]:FA,[f.LITTLE_KILLER_SUM]:vA,[f.LITTLE_KILLER_PRODUCT]:pA,[f.LITTLE_KILLER_LOOK_AND_SAY]:mA,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:CA,[f.X_OMIT_LITTLE_KILLER_SUM]:EA,[f.NEGATORS_LITTLE_KILLER_SUM]:bA,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:FO,[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:PO,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:yN,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:ON,[f.FORBIDDEN_KNIGHT_SUM]:AN,[f.LITS_MAX_TETROMINO_SUM]:xN,[f.FOG_LIGHTS]:lN,[f.CUSTOM_FOG_CLEARING]:cN,[f.COSMETIC_CELL_CENTER_SHAPE]:PA,[f.COSMETIC_CELL_ARROW]:zA,[f.COSMETIC_CELL_MULTI_ARROW]:HA,[f.COSMETIC_EDGE]:WA,[f.COSMETIC_CORNER]:BA,[f.COSMETIC_LINE]:YA,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:jA,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:KA,[f.COSMETIC_ARROW]:XA,[f.COSMETIC_CAGE]:VA,[f.COSMETIC_OUTSIDE_DIRECTION]:qA};var We=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(We||{});function Hv(t){if(!(t in We))throw Error(" not a key in DIRECTION");return We[t]}function Ze(t,e){return t.r===e.r&&t.c===e.c}function Wv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function kN(t,e){return{r:t.r*e,c:t.c*e}}function MN(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Ps(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ze(t,e)}function UN(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function al(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Ft(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Nl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function GN(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ll(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function $N(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const FN=new Map([[6,We.N],[2,We.S],[0,We.E],[4,We.W],[7,We.NE],[5,We.NW],[1,We.SE],[3,We.SW]]);function ho(t){t=t%8;const e=FN.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const PN=new Map([[We.N,{r:-1,c:0}],[We.S,{r:1,c:0}],[We.E,{r:0,c:1}],[We.W,{r:0,c:-1}],[We.NE,{r:-1,c:1}],[We.NW,{r:-1,c:-1}],[We.SE,{r:1,c:1}],[We.SW,{r:1,c:-1}]]);function zs(t){const e=PN.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function dh(t,e){const n=zs(e);return Wv(t,n)}function cl(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Bv(t,e,n=!1){const r=t.some(o=>Ze(o,e)),i=n?t.some(o=>Ps(o,e)):t.some(o=>UN(o,e));if(!r&&i){const o=[...t,e];return al(o),o}return t}function Ba(t){return`R${t.r+1}C${t.c+1}`}function Kd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function zN(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}var Ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ps={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var HN=ps.exports,_h;function WN(){return _h||(_h=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",d=500,g="__lodash_placeholder__",h=1,v=2,m=4,E=1,I=2,b=1,w=2,A=4,T=8,k=16,G=32,W=64,M=128,$=256,J=512,oe=30,ie="...",ce=800,be=16,Z=1,Ae=2,we=3,Oe=1/0,Se=9007199254740991,ye=17976931348623157e292,Re=NaN,$e=4294967295,st=$e-1,ut=$e>>>1,yt=[["ary",M],["bind",b],["bindKey",w],["curry",T],["curryRight",k],["flip",J],["partial",G],["partialRight",W],["rearg",$]],_t="[object Arguments]",Et="[object Array]",Ct="[object AsyncFunction]",In="[object Boolean]",un="[object Date]",Ir="[object DOMException]",wr="[object Error]",Tr="[object Function]",Pe="[object GeneratorFunction]",Ie="[object Map]",Te="[object Number]",ze="[object Null]",Mt="[object Object]",ea="[object Promise]",ta="[object Proxy]",Ei="[object RegExp]",wn="[object Set]",Ci="[object String]",Wi="[object Symbol]",tc="[object Undefined]",et="[object WeakMap]",Vo="[object WeakSet]",Xo="[object ArrayBuffer]",Bi="[object DataView]",nc="[object Float32Array]",rc="[object Float64Array]",ic="[object Int8Array]",oc="[object Int16Array]",sc="[object Int32Array]",ac="[object Uint8Array]",lc="[object Uint8ClampedArray]",cc="[object Uint16Array]",uc="[object Uint32Array]",Cm=/\b__p \+= '';/g,bm=/\b(__p \+=) '' \+/g,Im=/(__e\(.*?\)|\b__t\)) \+\n'';/g,O_=/&(?:amp|lt|gt|quot|#39);/g,A_=/[&<>"']/g,wm=RegExp(O_.source),ym=RegExp(A_.source),Om=/<%-([\s\S]+?)%>/g,Am=/<%([\s\S]+?)%>/g,x_=/<%=([\s\S]+?)%>/g,xm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lm=/^\w*$/,Sm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dc=/[\\^$.*+?()[\]{}|]/g,Nm=RegExp(dc.source),_c=/^\s+/,Dm=/\s/,Rm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tm=/\{\n\/\* \[wrapped with (.+)\] \*/,km=/,? & /,Mm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Um=/[()=,{}\[\]\/\s]/,Gm=/\\(\\)?/g,$m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,L_=/\w*$/,Fm=/^[-+]0x[0-9a-f]+$/i,Pm=/^0b[01]+$/i,zm=/^\[object .+?Constructor\]$/,Hm=/^0o[0-7]+$/i,Wm=/^(?:0|[1-9]\d*)$/,Bm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,na=/($^)/,Ym=/['\n\r\u2028\u2029\\]/g,ra="\\ud800-\\udfff",jm="\\u0300-\\u036f",Km="\\ufe20-\\ufe2f",Vm="\\u20d0-\\u20ff",S_=jm+Km+Vm,N_="\\u2700-\\u27bf",D_="a-z\\xdf-\\xf6\\xf8-\\xff",Xm="\\xac\\xb1\\xd7\\xf7",qm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zm="\\u2000-\\u206f",Qm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",R_="A-Z\\xc0-\\xd6\\xd8-\\xde",T_="\\ufe0e\\ufe0f",k_=Xm+qm+Zm+Qm,fc="['’]",Jm="["+ra+"]",M_="["+k_+"]",ia="["+S_+"]",U_="\\d+",e1="["+N_+"]",G_="["+D_+"]",$_="[^"+ra+k_+U_+N_+D_+R_+"]",gc="\\ud83c[\\udffb-\\udfff]",t1="(?:"+ia+"|"+gc+")",F_="[^"+ra+"]",hc="(?:\\ud83c[\\udde6-\\uddff]){2}",vc="[\\ud800-\\udbff][\\udc00-\\udfff]",Yi="["+R_+"]",P_="\\u200d",z_="(?:"+G_+"|"+$_+")",n1="(?:"+Yi+"|"+$_+")",H_="(?:"+fc+"(?:d|ll|m|re|s|t|ve))?",W_="(?:"+fc+"(?:D|LL|M|RE|S|T|VE))?",B_=t1+"?",Y_="["+T_+"]?",r1="(?:"+P_+"(?:"+[F_,hc,vc].join("|")+")"+Y_+B_+")*",i1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",j_=Y_+B_+r1,s1="(?:"+[e1,hc,vc].join("|")+")"+j_,a1="(?:"+[F_+ia+"?",ia,hc,vc,Jm].join("|")+")",l1=RegExp(fc,"g"),c1=RegExp(ia,"g"),pc=RegExp(gc+"(?="+gc+")|"+a1+j_,"g"),u1=RegExp([Yi+"?"+G_+"+"+H_+"(?="+[M_,Yi,"$"].join("|")+")",n1+"+"+W_+"(?="+[M_,Yi+z_,"$"].join("|")+")",Yi+"?"+z_+"+"+H_,Yi+"+"+W_,o1,i1,U_,s1].join("|"),"g"),d1=RegExp("["+P_+ra+S_+T_+"]"),_1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,f1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],g1=-1,$t={};$t[nc]=$t[rc]=$t[ic]=$t[oc]=$t[sc]=$t[ac]=$t[lc]=$t[cc]=$t[uc]=!0,$t[_t]=$t[Et]=$t[Xo]=$t[In]=$t[Bi]=$t[un]=$t[wr]=$t[Tr]=$t[Ie]=$t[Te]=$t[Mt]=$t[Ei]=$t[wn]=$t[Ci]=$t[et]=!1;var Ut={};Ut[_t]=Ut[Et]=Ut[Xo]=Ut[Bi]=Ut[In]=Ut[un]=Ut[nc]=Ut[rc]=Ut[ic]=Ut[oc]=Ut[sc]=Ut[Ie]=Ut[Te]=Ut[Mt]=Ut[Ei]=Ut[wn]=Ut[Ci]=Ut[Wi]=Ut[ac]=Ut[lc]=Ut[cc]=Ut[uc]=!0,Ut[wr]=Ut[Tr]=Ut[et]=!1;var h1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},v1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},m1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},E1=parseFloat,C1=parseInt,K_=typeof Ya=="object"&&Ya&&Ya.Object===Object&&Ya,b1=typeof self=="object"&&self&&self.Object===Object&&self,sn=K_||b1||Function("return this")(),mc=e&&!e.nodeType&&e,bi=mc&&!0&&t&&!t.nodeType&&t,V_=bi&&bi.exports===mc,Ec=V_&&K_.process,Kn=function(){try{var V=bi&&bi.require&&bi.require("util").types;return V||Ec&&Ec.binding&&Ec.binding("util")}catch{}}(),X_=Kn&&Kn.isArrayBuffer,q_=Kn&&Kn.isDate,Z_=Kn&&Kn.isMap,Q_=Kn&&Kn.isRegExp,J_=Kn&&Kn.isSet,ef=Kn&&Kn.isTypedArray;function Nn(V,le,re){switch(re.length){case 0:return V.call(le);case 1:return V.call(le,re[0]);case 2:return V.call(le,re[0],re[1]);case 3:return V.call(le,re[0],re[1],re[2])}return V.apply(le,re)}function I1(V,le,re,Me){for(var tt=-1,bt=V==null?0:V.length;++tt<bt;){var qt=V[tt];le(Me,qt,re(qt),V)}return Me}function Vn(V,le){for(var re=-1,Me=V==null?0:V.length;++re<Me&&le(V[re],re,V)!==!1;);return V}function w1(V,le){for(var re=V==null?0:V.length;re--&&le(V[re],re,V)!==!1;);return V}function tf(V,le){for(var re=-1,Me=V==null?0:V.length;++re<Me;)if(!le(V[re],re,V))return!1;return!0}function ei(V,le){for(var re=-1,Me=V==null?0:V.length,tt=0,bt=[];++re<Me;){var qt=V[re];le(qt,re,V)&&(bt[tt++]=qt)}return bt}function oa(V,le){var re=V==null?0:V.length;return!!re&&ji(V,le,0)>-1}function Cc(V,le,re){for(var Me=-1,tt=V==null?0:V.length;++Me<tt;)if(re(le,V[Me]))return!0;return!1}function Pt(V,le){for(var re=-1,Me=V==null?0:V.length,tt=Array(Me);++re<Me;)tt[re]=le(V[re],re,V);return tt}function ti(V,le){for(var re=-1,Me=le.length,tt=V.length;++re<Me;)V[tt+re]=le[re];return V}function bc(V,le,re,Me){var tt=-1,bt=V==null?0:V.length;for(Me&&bt&&(re=V[++tt]);++tt<bt;)re=le(re,V[tt],tt,V);return re}function y1(V,le,re,Me){var tt=V==null?0:V.length;for(Me&&tt&&(re=V[--tt]);tt--;)re=le(re,V[tt],tt,V);return re}function Ic(V,le){for(var re=-1,Me=V==null?0:V.length;++re<Me;)if(le(V[re],re,V))return!0;return!1}var O1=wc("length");function A1(V){return V.split("")}function x1(V){return V.match(Mm)||[]}function nf(V,le,re){var Me;return re(V,function(tt,bt,qt){if(le(tt,bt,qt))return Me=bt,!1}),Me}function sa(V,le,re,Me){for(var tt=V.length,bt=re+(Me?1:-1);Me?bt--:++bt<tt;)if(le(V[bt],bt,V))return bt;return-1}function ji(V,le,re){return le===le?F1(V,le,re):sa(V,rf,re)}function L1(V,le,re,Me){for(var tt=re-1,bt=V.length;++tt<bt;)if(Me(V[tt],le))return tt;return-1}function rf(V){return V!==V}function of(V,le){var re=V==null?0:V.length;return re?Oc(V,le)/re:Re}function wc(V){return function(le){return le==null?n:le[V]}}function yc(V){return function(le){return V==null?n:V[le]}}function sf(V,le,re,Me,tt){return tt(V,function(bt,qt,Tt){re=Me?(Me=!1,bt):le(re,bt,qt,Tt)}),re}function S1(V,le){var re=V.length;for(V.sort(le);re--;)V[re]=V[re].value;return V}function Oc(V,le){for(var re,Me=-1,tt=V.length;++Me<tt;){var bt=le(V[Me]);bt!==n&&(re=re===n?bt:re+bt)}return re}function Ac(V,le){for(var re=-1,Me=Array(V);++re<V;)Me[re]=le(re);return Me}function N1(V,le){return Pt(le,function(re){return[re,V[re]]})}function af(V){return V&&V.slice(0,df(V)+1).replace(_c,"")}function Dn(V){return function(le){return V(le)}}function xc(V,le){return Pt(le,function(re){return V[re]})}function qo(V,le){return V.has(le)}function lf(V,le){for(var re=-1,Me=V.length;++re<Me&&ji(le,V[re],0)>-1;);return re}function cf(V,le){for(var re=V.length;re--&&ji(le,V[re],0)>-1;);return re}function D1(V,le){for(var re=V.length,Me=0;re--;)V[re]===le&&++Me;return Me}var R1=yc(h1),T1=yc(v1);function k1(V){return"\\"+m1[V]}function M1(V,le){return V==null?n:V[le]}function Ki(V){return d1.test(V)}function U1(V){return _1.test(V)}function G1(V){for(var le,re=[];!(le=V.next()).done;)re.push(le.value);return re}function Lc(V){var le=-1,re=Array(V.size);return V.forEach(function(Me,tt){re[++le]=[tt,Me]}),re}function uf(V,le){return function(re){return V(le(re))}}function ni(V,le){for(var re=-1,Me=V.length,tt=0,bt=[];++re<Me;){var qt=V[re];(qt===le||qt===g)&&(V[re]=g,bt[tt++]=re)}return bt}function aa(V){var le=-1,re=Array(V.size);return V.forEach(function(Me){re[++le]=Me}),re}function $1(V){var le=-1,re=Array(V.size);return V.forEach(function(Me){re[++le]=[Me,Me]}),re}function F1(V,le,re){for(var Me=re-1,tt=V.length;++Me<tt;)if(V[Me]===le)return Me;return-1}function P1(V,le,re){for(var Me=re+1;Me--;)if(V[Me]===le)return Me;return Me}function Vi(V){return Ki(V)?H1(V):O1(V)}function hr(V){return Ki(V)?W1(V):A1(V)}function df(V){for(var le=V.length;le--&&Dm.test(V.charAt(le)););return le}var z1=yc(p1);function H1(V){for(var le=pc.lastIndex=0;pc.test(V);)++le;return le}function W1(V){return V.match(pc)||[]}function B1(V){return V.match(u1)||[]}var Y1=function V(le){le=le==null?sn:Xi.defaults(sn.Object(),le,Xi.pick(sn,f1));var re=le.Array,Me=le.Date,tt=le.Error,bt=le.Function,qt=le.Math,Tt=le.Object,Sc=le.RegExp,j1=le.String,Xn=le.TypeError,la=re.prototype,K1=bt.prototype,qi=Tt.prototype,ca=le["__core-js_shared__"],ua=K1.toString,At=qi.hasOwnProperty,V1=0,_f=function(){var s=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),da=qi.toString,X1=ua.call(Tt),q1=sn._,Z1=Sc("^"+ua.call(At).replace(dc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_a=V_?le.Buffer:n,ri=le.Symbol,fa=le.Uint8Array,ff=_a?_a.allocUnsafe:n,ga=uf(Tt.getPrototypeOf,Tt),gf=Tt.create,hf=qi.propertyIsEnumerable,ha=la.splice,vf=ri?ri.isConcatSpreadable:n,Zo=ri?ri.iterator:n,Ii=ri?ri.toStringTag:n,va=function(){try{var s=xi(Tt,"defineProperty");return s({},"",{}),s}catch{}}(),Q1=le.clearTimeout!==sn.clearTimeout&&le.clearTimeout,J1=Me&&Me.now!==sn.Date.now&&Me.now,eE=le.setTimeout!==sn.setTimeout&&le.setTimeout,pa=qt.ceil,ma=qt.floor,Nc=Tt.getOwnPropertySymbols,tE=_a?_a.isBuffer:n,pf=le.isFinite,nE=la.join,rE=uf(Tt.keys,Tt),Zt=qt.max,dn=qt.min,iE=Me.now,oE=le.parseInt,mf=qt.random,sE=la.reverse,Dc=xi(le,"DataView"),Qo=xi(le,"Map"),Rc=xi(le,"Promise"),Zi=xi(le,"Set"),Jo=xi(le,"WeakMap"),es=xi(Tt,"create"),Ea=Jo&&new Jo,Qi={},aE=Li(Dc),lE=Li(Qo),cE=Li(Rc),uE=Li(Zi),dE=Li(Jo),Ca=ri?ri.prototype:n,ts=Ca?Ca.valueOf:n,Ef=Ca?Ca.toString:n;function N(s){if(Bt(s)&&!nt(s)&&!(s instanceof ht)){if(s instanceof qn)return s;if(At.call(s,"__wrapped__"))return Cg(s)}return new qn(s)}var Ji=function(){function s(){}return function(c){if(!zt(c))return{};if(gf)return gf(c);s.prototype=c;var p=new s;return s.prototype=n,p}}();function ba(){}function qn(s,c){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=n}N.templateSettings={escape:Om,evaluate:Am,interpolate:x_,variable:"",imports:{_:N}},N.prototype=ba.prototype,N.prototype.constructor=N,qn.prototype=Ji(ba.prototype),qn.prototype.constructor=qn;function ht(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function _E(){var s=new ht(this.__wrapped__);return s.__actions__=yn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=yn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=yn(this.__views__),s}function fE(){if(this.__filtered__){var s=new ht(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function gE(){var s=this.__wrapped__.value(),c=this.__dir__,p=nt(s),C=c<0,y=p?s.length:0,R=A0(0,y,this.__views__),P=R.start,K=R.end,q=K-P,de=C?K:P-1,_e=this.__iteratees__,pe=_e.length,Le=0,Fe=dn(q,this.__takeCount__);if(!p||!C&&y==q&&Fe==q)return Wf(s,this.__actions__);var Ve=[];e:for(;q--&&Le<Fe;){de+=c;for(var ct=-1,Xe=s[de];++ct<pe;){var gt=_e[ct],vt=gt.iteratee,kn=gt.type,mn=vt(Xe);if(kn==Ae)Xe=mn;else if(!mn){if(kn==Z)continue e;break e}}Ve[Le++]=Xe}return Ve}ht.prototype=Ji(ba.prototype),ht.prototype.constructor=ht;function wi(s){var c=-1,p=s==null?0:s.length;for(this.clear();++c<p;){var C=s[c];this.set(C[0],C[1])}}function hE(){this.__data__=es?es(null):{},this.size=0}function vE(s){var c=this.has(s)&&delete this.__data__[s];return this.size-=c?1:0,c}function pE(s){var c=this.__data__;if(es){var p=c[s];return p===u?n:p}return At.call(c,s)?c[s]:n}function mE(s){var c=this.__data__;return es?c[s]!==n:At.call(c,s)}function EE(s,c){var p=this.__data__;return this.size+=this.has(s)?0:1,p[s]=es&&c===n?u:c,this}wi.prototype.clear=hE,wi.prototype.delete=vE,wi.prototype.get=pE,wi.prototype.has=mE,wi.prototype.set=EE;function kr(s){var c=-1,p=s==null?0:s.length;for(this.clear();++c<p;){var C=s[c];this.set(C[0],C[1])}}function CE(){this.__data__=[],this.size=0}function bE(s){var c=this.__data__,p=Ia(c,s);if(p<0)return!1;var C=c.length-1;return p==C?c.pop():ha.call(c,p,1),--this.size,!0}function IE(s){var c=this.__data__,p=Ia(c,s);return p<0?n:c[p][1]}function wE(s){return Ia(this.__data__,s)>-1}function yE(s,c){var p=this.__data__,C=Ia(p,s);return C<0?(++this.size,p.push([s,c])):p[C][1]=c,this}kr.prototype.clear=CE,kr.prototype.delete=bE,kr.prototype.get=IE,kr.prototype.has=wE,kr.prototype.set=yE;function Mr(s){var c=-1,p=s==null?0:s.length;for(this.clear();++c<p;){var C=s[c];this.set(C[0],C[1])}}function OE(){this.size=0,this.__data__={hash:new wi,map:new(Qo||kr),string:new wi}}function AE(s){var c=ka(this,s).delete(s);return this.size-=c?1:0,c}function xE(s){return ka(this,s).get(s)}function LE(s){return ka(this,s).has(s)}function SE(s,c){var p=ka(this,s),C=p.size;return p.set(s,c),this.size+=p.size==C?0:1,this}Mr.prototype.clear=OE,Mr.prototype.delete=AE,Mr.prototype.get=xE,Mr.prototype.has=LE,Mr.prototype.set=SE;function yi(s){var c=-1,p=s==null?0:s.length;for(this.__data__=new Mr;++c<p;)this.add(s[c])}function NE(s){return this.__data__.set(s,u),this}function DE(s){return this.__data__.has(s)}yi.prototype.add=yi.prototype.push=NE,yi.prototype.has=DE;function vr(s){var c=this.__data__=new kr(s);this.size=c.size}function RE(){this.__data__=new kr,this.size=0}function TE(s){var c=this.__data__,p=c.delete(s);return this.size=c.size,p}function kE(s){return this.__data__.get(s)}function ME(s){return this.__data__.has(s)}function UE(s,c){var p=this.__data__;if(p instanceof kr){var C=p.__data__;if(!Qo||C.length<i-1)return C.push([s,c]),this.size=++p.size,this;p=this.__data__=new Mr(C)}return p.set(s,c),this.size=p.size,this}vr.prototype.clear=RE,vr.prototype.delete=TE,vr.prototype.get=kE,vr.prototype.has=ME,vr.prototype.set=UE;function Cf(s,c){var p=nt(s),C=!p&&Si(s),y=!p&&!C&&li(s),R=!p&&!C&&!y&&ro(s),P=p||C||y||R,K=P?Ac(s.length,j1):[],q=K.length;for(var de in s)(c||At.call(s,de))&&!(P&&(de=="length"||y&&(de=="offset"||de=="parent")||R&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Fr(de,q)))&&K.push(de);return K}function bf(s){var c=s.length;return c?s[Wc(0,c-1)]:n}function GE(s,c){return Ma(yn(s),Oi(c,0,s.length))}function $E(s){return Ma(yn(s))}function Tc(s,c,p){(p!==n&&!pr(s[c],p)||p===n&&!(c in s))&&Ur(s,c,p)}function ns(s,c,p){var C=s[c];(!(At.call(s,c)&&pr(C,p))||p===n&&!(c in s))&&Ur(s,c,p)}function Ia(s,c){for(var p=s.length;p--;)if(pr(s[p][0],c))return p;return-1}function FE(s,c,p,C){return ii(s,function(y,R,P){c(C,y,p(y),P)}),C}function If(s,c){return s&&Or(c,Jt(c),s)}function PE(s,c){return s&&Or(c,An(c),s)}function Ur(s,c,p){c=="__proto__"&&va?va(s,c,{configurable:!0,enumerable:!0,value:p,writable:!0}):s[c]=p}function kc(s,c){for(var p=-1,C=c.length,y=re(C),R=s==null;++p<C;)y[p]=R?n:gu(s,c[p]);return y}function Oi(s,c,p){return s===s&&(p!==n&&(s=s<=p?s:p),c!==n&&(s=s>=c?s:c)),s}function Zn(s,c,p,C,y,R){var P,K=c&h,q=c&v,de=c&m;if(p&&(P=y?p(s,C,y,R):p(s)),P!==n)return P;if(!zt(s))return s;var _e=nt(s);if(_e){if(P=L0(s),!K)return yn(s,P)}else{var pe=_n(s),Le=pe==Tr||pe==Pe;if(li(s))return jf(s,K);if(pe==Mt||pe==_t||Le&&!y){if(P=q||Le?{}:dg(s),!K)return q?p0(s,PE(P,s)):v0(s,If(P,s))}else{if(!Ut[pe])return y?s:{};P=S0(s,pe,K)}}R||(R=new vr);var Fe=R.get(s);if(Fe)return Fe;R.set(s,P),Pg(s)?s.forEach(function(Xe){P.add(Zn(Xe,c,p,Xe,s,R))}):$g(s)&&s.forEach(function(Xe,gt){P.set(gt,Zn(Xe,c,p,gt,s,R))});var Ve=de?q?eu:Jc:q?An:Jt,ct=_e?n:Ve(s);return Vn(ct||s,function(Xe,gt){ct&&(gt=Xe,Xe=s[gt]),ns(P,gt,Zn(Xe,c,p,gt,s,R))}),P}function zE(s){var c=Jt(s);return function(p){return wf(p,s,c)}}function wf(s,c,p){var C=p.length;if(s==null)return!C;for(s=Tt(s);C--;){var y=p[C],R=c[y],P=s[y];if(P===n&&!(y in s)||!R(P))return!1}return!0}function yf(s,c,p){if(typeof s!="function")throw new Xn(a);return cs(function(){s.apply(n,p)},c)}function rs(s,c,p,C){var y=-1,R=oa,P=!0,K=s.length,q=[],de=c.length;if(!K)return q;p&&(c=Pt(c,Dn(p))),C?(R=Cc,P=!1):c.length>=i&&(R=qo,P=!1,c=new yi(c));e:for(;++y<K;){var _e=s[y],pe=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,P&&pe===pe){for(var Le=de;Le--;)if(c[Le]===pe)continue e;q.push(_e)}else R(c,pe,C)||q.push(_e)}return q}var ii=Zf(yr),Of=Zf(Uc,!0);function HE(s,c){var p=!0;return ii(s,function(C,y,R){return p=!!c(C,y,R),p}),p}function wa(s,c,p){for(var C=-1,y=s.length;++C<y;){var R=s[C],P=c(R);if(P!=null&&(K===n?P===P&&!Tn(P):p(P,K)))var K=P,q=R}return q}function WE(s,c,p,C){var y=s.length;for(p=at(p),p<0&&(p=-p>y?0:y+p),C=C===n||C>y?y:at(C),C<0&&(C+=y),C=p>C?0:Hg(C);p<C;)s[p++]=c;return s}function Af(s,c){var p=[];return ii(s,function(C,y,R){c(C,y,R)&&p.push(C)}),p}function an(s,c,p,C,y){var R=-1,P=s.length;for(p||(p=D0),y||(y=[]);++R<P;){var K=s[R];c>0&&p(K)?c>1?an(K,c-1,p,C,y):ti(y,K):C||(y[y.length]=K)}return y}var Mc=Qf(),xf=Qf(!0);function yr(s,c){return s&&Mc(s,c,Jt)}function Uc(s,c){return s&&xf(s,c,Jt)}function ya(s,c){return ei(c,function(p){return Pr(s[p])})}function Ai(s,c){c=si(c,s);for(var p=0,C=c.length;s!=null&&p<C;)s=s[Ar(c[p++])];return p&&p==C?s:n}function Lf(s,c,p){var C=c(s);return nt(s)?C:ti(C,p(s))}function vn(s){return s==null?s===n?tc:ze:Ii&&Ii in Tt(s)?O0(s):$0(s)}function Gc(s,c){return s>c}function BE(s,c){return s!=null&&At.call(s,c)}function YE(s,c){return s!=null&&c in Tt(s)}function jE(s,c,p){return s>=dn(c,p)&&s<Zt(c,p)}function $c(s,c,p){for(var C=p?Cc:oa,y=s[0].length,R=s.length,P=R,K=re(R),q=1/0,de=[];P--;){var _e=s[P];P&&c&&(_e=Pt(_e,Dn(c))),q=dn(_e.length,q),K[P]=!p&&(c||y>=120&&_e.length>=120)?new yi(P&&_e):n}_e=s[0];var pe=-1,Le=K[0];e:for(;++pe<y&&de.length<q;){var Fe=_e[pe],Ve=c?c(Fe):Fe;if(Fe=p||Fe!==0?Fe:0,!(Le?qo(Le,Ve):C(de,Ve,p))){for(P=R;--P;){var ct=K[P];if(!(ct?qo(ct,Ve):C(s[P],Ve,p)))continue e}Le&&Le.push(Ve),de.push(Fe)}}return de}function KE(s,c,p,C){return yr(s,function(y,R,P){c(C,p(y),R,P)}),C}function is(s,c,p){c=si(c,s),s=hg(s,c);var C=s==null?s:s[Ar(Jn(c))];return C==null?n:Nn(C,s,p)}function Sf(s){return Bt(s)&&vn(s)==_t}function VE(s){return Bt(s)&&vn(s)==Xo}function XE(s){return Bt(s)&&vn(s)==un}function os(s,c,p,C,y){return s===c?!0:s==null||c==null||!Bt(s)&&!Bt(c)?s!==s&&c!==c:qE(s,c,p,C,os,y)}function qE(s,c,p,C,y,R){var P=nt(s),K=nt(c),q=P?Et:_n(s),de=K?Et:_n(c);q=q==_t?Mt:q,de=de==_t?Mt:de;var _e=q==Mt,pe=de==Mt,Le=q==de;if(Le&&li(s)){if(!li(c))return!1;P=!0,_e=!1}if(Le&&!_e)return R||(R=new vr),P||ro(s)?lg(s,c,p,C,y,R):w0(s,c,q,p,C,y,R);if(!(p&E)){var Fe=_e&&At.call(s,"__wrapped__"),Ve=pe&&At.call(c,"__wrapped__");if(Fe||Ve){var ct=Fe?s.value():s,Xe=Ve?c.value():c;return R||(R=new vr),y(ct,Xe,p,C,R)}}return Le?(R||(R=new vr),y0(s,c,p,C,y,R)):!1}function ZE(s){return Bt(s)&&_n(s)==Ie}function Fc(s,c,p,C){var y=p.length,R=y,P=!C;if(s==null)return!R;for(s=Tt(s);y--;){var K=p[y];if(P&&K[2]?K[1]!==s[K[0]]:!(K[0]in s))return!1}for(;++y<R;){K=p[y];var q=K[0],de=s[q],_e=K[1];if(P&&K[2]){if(de===n&&!(q in s))return!1}else{var pe=new vr;if(C)var Le=C(de,_e,q,s,c,pe);if(!(Le===n?os(_e,de,E|I,C,pe):Le))return!1}}return!0}function Nf(s){if(!zt(s)||T0(s))return!1;var c=Pr(s)?Z1:zm;return c.test(Li(s))}function QE(s){return Bt(s)&&vn(s)==Ei}function JE(s){return Bt(s)&&_n(s)==wn}function e0(s){return Bt(s)&&za(s.length)&&!!$t[vn(s)]}function Df(s){return typeof s=="function"?s:s==null?xn:typeof s=="object"?nt(s)?kf(s[0],s[1]):Tf(s):Jg(s)}function Pc(s){if(!ls(s))return rE(s);var c=[];for(var p in Tt(s))At.call(s,p)&&p!="constructor"&&c.push(p);return c}function t0(s){if(!zt(s))return G0(s);var c=ls(s),p=[];for(var C in s)C=="constructor"&&(c||!At.call(s,C))||p.push(C);return p}function zc(s,c){return s<c}function Rf(s,c){var p=-1,C=On(s)?re(s.length):[];return ii(s,function(y,R,P){C[++p]=c(y,R,P)}),C}function Tf(s){var c=nu(s);return c.length==1&&c[0][2]?fg(c[0][0],c[0][1]):function(p){return p===s||Fc(p,s,c)}}function kf(s,c){return iu(s)&&_g(c)?fg(Ar(s),c):function(p){var C=gu(p,s);return C===n&&C===c?hu(p,s):os(c,C,E|I)}}function Oa(s,c,p,C,y){s!==c&&Mc(c,function(R,P){if(y||(y=new vr),zt(R))n0(s,c,P,p,Oa,C,y);else{var K=C?C(su(s,P),R,P+"",s,c,y):n;K===n&&(K=R),Tc(s,P,K)}},An)}function n0(s,c,p,C,y,R,P){var K=su(s,p),q=su(c,p),de=P.get(q);if(de){Tc(s,p,de);return}var _e=R?R(K,q,p+"",s,c,P):n,pe=_e===n;if(pe){var Le=nt(q),Fe=!Le&&li(q),Ve=!Le&&!Fe&&ro(q);_e=q,Le||Fe||Ve?nt(K)?_e=K:jt(K)?_e=yn(K):Fe?(pe=!1,_e=jf(q,!0)):Ve?(pe=!1,_e=Kf(q,!0)):_e=[]:us(q)||Si(q)?(_e=K,Si(K)?_e=Wg(K):(!zt(K)||Pr(K))&&(_e=dg(q))):pe=!1}pe&&(P.set(q,_e),y(_e,q,C,R,P),P.delete(q)),Tc(s,p,_e)}function Mf(s,c){var p=s.length;if(p)return c+=c<0?p:0,Fr(c,p)?s[c]:n}function Uf(s,c,p){c.length?c=Pt(c,function(R){return nt(R)?function(P){return Ai(P,R.length===1?R[0]:R)}:R}):c=[xn];var C=-1;c=Pt(c,Dn(je()));var y=Rf(s,function(R,P,K){var q=Pt(c,function(de){return de(R)});return{criteria:q,index:++C,value:R}});return S1(y,function(R,P){return h0(R,P,p)})}function r0(s,c){return Gf(s,c,function(p,C){return hu(s,C)})}function Gf(s,c,p){for(var C=-1,y=c.length,R={};++C<y;){var P=c[C],K=Ai(s,P);p(K,P)&&ss(R,si(P,s),K)}return R}function i0(s){return function(c){return Ai(c,s)}}function Hc(s,c,p,C){var y=C?L1:ji,R=-1,P=c.length,K=s;for(s===c&&(c=yn(c)),p&&(K=Pt(s,Dn(p)));++R<P;)for(var q=0,de=c[R],_e=p?p(de):de;(q=y(K,_e,q,C))>-1;)K!==s&&ha.call(K,q,1),ha.call(s,q,1);return s}function $f(s,c){for(var p=s?c.length:0,C=p-1;p--;){var y=c[p];if(p==C||y!==R){var R=y;Fr(y)?ha.call(s,y,1):jc(s,y)}}return s}function Wc(s,c){return s+ma(mf()*(c-s+1))}function o0(s,c,p,C){for(var y=-1,R=Zt(pa((c-s)/(p||1)),0),P=re(R);R--;)P[C?R:++y]=s,s+=p;return P}function Bc(s,c){var p="";if(!s||c<1||c>Se)return p;do c%2&&(p+=s),c=ma(c/2),c&&(s+=s);while(c);return p}function dt(s,c){return au(gg(s,c,xn),s+"")}function s0(s){return bf(io(s))}function a0(s,c){var p=io(s);return Ma(p,Oi(c,0,p.length))}function ss(s,c,p,C){if(!zt(s))return s;c=si(c,s);for(var y=-1,R=c.length,P=R-1,K=s;K!=null&&++y<R;){var q=Ar(c[y]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(y!=P){var _e=K[q];de=C?C(_e,q,K):n,de===n&&(de=zt(_e)?_e:Fr(c[y+1])?[]:{})}ns(K,q,de),K=K[q]}return s}var Ff=Ea?function(s,c){return Ea.set(s,c),s}:xn,l0=va?function(s,c){return va(s,"toString",{configurable:!0,enumerable:!1,value:pu(c),writable:!0})}:xn;function c0(s){return Ma(io(s))}function Qn(s,c,p){var C=-1,y=s.length;c<0&&(c=-c>y?0:y+c),p=p>y?y:p,p<0&&(p+=y),y=c>p?0:p-c>>>0,c>>>=0;for(var R=re(y);++C<y;)R[C]=s[C+c];return R}function u0(s,c){var p;return ii(s,function(C,y,R){return p=c(C,y,R),!p}),!!p}function Aa(s,c,p){var C=0,y=s==null?C:s.length;if(typeof c=="number"&&c===c&&y<=ut){for(;C<y;){var R=C+y>>>1,P=s[R];P!==null&&!Tn(P)&&(p?P<=c:P<c)?C=R+1:y=R}return y}return Yc(s,c,xn,p)}function Yc(s,c,p,C){var y=0,R=s==null?0:s.length;if(R===0)return 0;c=p(c);for(var P=c!==c,K=c===null,q=Tn(c),de=c===n;y<R;){var _e=ma((y+R)/2),pe=p(s[_e]),Le=pe!==n,Fe=pe===null,Ve=pe===pe,ct=Tn(pe);if(P)var Xe=C||Ve;else de?Xe=Ve&&(C||Le):K?Xe=Ve&&Le&&(C||!Fe):q?Xe=Ve&&Le&&!Fe&&(C||!ct):Fe||ct?Xe=!1:Xe=C?pe<=c:pe<c;Xe?y=_e+1:R=_e}return dn(R,st)}function Pf(s,c){for(var p=-1,C=s.length,y=0,R=[];++p<C;){var P=s[p],K=c?c(P):P;if(!p||!pr(K,q)){var q=K;R[y++]=P===0?0:P}}return R}function zf(s){return typeof s=="number"?s:Tn(s)?Re:+s}function Rn(s){if(typeof s=="string")return s;if(nt(s))return Pt(s,Rn)+"";if(Tn(s))return Ef?Ef.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function oi(s,c,p){var C=-1,y=oa,R=s.length,P=!0,K=[],q=K;if(p)P=!1,y=Cc;else if(R>=i){var de=c?null:b0(s);if(de)return aa(de);P=!1,y=qo,q=new yi}else q=c?[]:K;e:for(;++C<R;){var _e=s[C],pe=c?c(_e):_e;if(_e=p||_e!==0?_e:0,P&&pe===pe){for(var Le=q.length;Le--;)if(q[Le]===pe)continue e;c&&q.push(pe),K.push(_e)}else y(q,pe,p)||(q!==K&&q.push(pe),K.push(_e))}return K}function jc(s,c){return c=si(c,s),s=hg(s,c),s==null||delete s[Ar(Jn(c))]}function Hf(s,c,p,C){return ss(s,c,p(Ai(s,c)),C)}function xa(s,c,p,C){for(var y=s.length,R=C?y:-1;(C?R--:++R<y)&&c(s[R],R,s););return p?Qn(s,C?0:R,C?R+1:y):Qn(s,C?R+1:0,C?y:R)}function Wf(s,c){var p=s;return p instanceof ht&&(p=p.value()),bc(c,function(C,y){return y.func.apply(y.thisArg,ti([C],y.args))},p)}function Kc(s,c,p){var C=s.length;if(C<2)return C?oi(s[0]):[];for(var y=-1,R=re(C);++y<C;)for(var P=s[y],K=-1;++K<C;)K!=y&&(R[y]=rs(R[y]||P,s[K],c,p));return oi(an(R,1),c,p)}function Bf(s,c,p){for(var C=-1,y=s.length,R=c.length,P={};++C<y;){var K=C<R?c[C]:n;p(P,s[C],K)}return P}function Vc(s){return jt(s)?s:[]}function Xc(s){return typeof s=="function"?s:xn}function si(s,c){return nt(s)?s:iu(s,c)?[s]:Eg(Ot(s))}var d0=dt;function ai(s,c,p){var C=s.length;return p=p===n?C:p,!c&&p>=C?s:Qn(s,c,p)}var Yf=Q1||function(s){return sn.clearTimeout(s)};function jf(s,c){if(c)return s.slice();var p=s.length,C=ff?ff(p):new s.constructor(p);return s.copy(C),C}function qc(s){var c=new s.constructor(s.byteLength);return new fa(c).set(new fa(s)),c}function _0(s,c){var p=c?qc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.byteLength)}function f0(s){var c=new s.constructor(s.source,L_.exec(s));return c.lastIndex=s.lastIndex,c}function g0(s){return ts?Tt(ts.call(s)):{}}function Kf(s,c){var p=c?qc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.length)}function Vf(s,c){if(s!==c){var p=s!==n,C=s===null,y=s===s,R=Tn(s),P=c!==n,K=c===null,q=c===c,de=Tn(c);if(!K&&!de&&!R&&s>c||R&&P&&q&&!K&&!de||C&&P&&q||!p&&q||!y)return 1;if(!C&&!R&&!de&&s<c||de&&p&&y&&!C&&!R||K&&p&&y||!P&&y||!q)return-1}return 0}function h0(s,c,p){for(var C=-1,y=s.criteria,R=c.criteria,P=y.length,K=p.length;++C<P;){var q=Vf(y[C],R[C]);if(q){if(C>=K)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return s.index-c.index}function Xf(s,c,p,C){for(var y=-1,R=s.length,P=p.length,K=-1,q=c.length,de=Zt(R-P,0),_e=re(q+de),pe=!C;++K<q;)_e[K]=c[K];for(;++y<P;)(pe||y<R)&&(_e[p[y]]=s[y]);for(;de--;)_e[K++]=s[y++];return _e}function qf(s,c,p,C){for(var y=-1,R=s.length,P=-1,K=p.length,q=-1,de=c.length,_e=Zt(R-K,0),pe=re(_e+de),Le=!C;++y<_e;)pe[y]=s[y];for(var Fe=y;++q<de;)pe[Fe+q]=c[q];for(;++P<K;)(Le||y<R)&&(pe[Fe+p[P]]=s[y++]);return pe}function yn(s,c){var p=-1,C=s.length;for(c||(c=re(C));++p<C;)c[p]=s[p];return c}function Or(s,c,p,C){var y=!p;p||(p={});for(var R=-1,P=c.length;++R<P;){var K=c[R],q=C?C(p[K],s[K],K,p,s):n;q===n&&(q=s[K]),y?Ur(p,K,q):ns(p,K,q)}return p}function v0(s,c){return Or(s,ru(s),c)}function p0(s,c){return Or(s,cg(s),c)}function La(s,c){return function(p,C){var y=nt(p)?I1:FE,R=c?c():{};return y(p,s,je(C,2),R)}}function eo(s){return dt(function(c,p){var C=-1,y=p.length,R=y>1?p[y-1]:n,P=y>2?p[2]:n;for(R=s.length>3&&typeof R=="function"?(y--,R):n,P&&pn(p[0],p[1],P)&&(R=y<3?n:R,y=1),c=Tt(c);++C<y;){var K=p[C];K&&s(c,K,C,R)}return c})}function Zf(s,c){return function(p,C){if(p==null)return p;if(!On(p))return s(p,C);for(var y=p.length,R=c?y:-1,P=Tt(p);(c?R--:++R<y)&&C(P[R],R,P)!==!1;);return p}}function Qf(s){return function(c,p,C){for(var y=-1,R=Tt(c),P=C(c),K=P.length;K--;){var q=P[s?K:++y];if(p(R[q],q,R)===!1)break}return c}}function m0(s,c,p){var C=c&b,y=as(s);function R(){var P=this&&this!==sn&&this instanceof R?y:s;return P.apply(C?p:this,arguments)}return R}function Jf(s){return function(c){c=Ot(c);var p=Ki(c)?hr(c):n,C=p?p[0]:c.charAt(0),y=p?ai(p,1).join(""):c.slice(1);return C[s]()+y}}function to(s){return function(c){return bc(Zg(qg(c).replace(l1,"")),s,"")}}function as(s){return function(){var c=arguments;switch(c.length){case 0:return new s;case 1:return new s(c[0]);case 2:return new s(c[0],c[1]);case 3:return new s(c[0],c[1],c[2]);case 4:return new s(c[0],c[1],c[2],c[3]);case 5:return new s(c[0],c[1],c[2],c[3],c[4]);case 6:return new s(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new s(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var p=Ji(s.prototype),C=s.apply(p,c);return zt(C)?C:p}}function E0(s,c,p){var C=as(s);function y(){for(var R=arguments.length,P=re(R),K=R,q=no(y);K--;)P[K]=arguments[K];var de=R<3&&P[0]!==q&&P[R-1]!==q?[]:ni(P,q);if(R-=de.length,R<p)return ig(s,c,Sa,y.placeholder,n,P,de,n,n,p-R);var _e=this&&this!==sn&&this instanceof y?C:s;return Nn(_e,this,P)}return y}function eg(s){return function(c,p,C){var y=Tt(c);if(!On(c)){var R=je(p,3);c=Jt(c),p=function(K){return R(y[K],K,y)}}var P=s(c,p,C);return P>-1?y[R?c[P]:P]:n}}function tg(s){return $r(function(c){var p=c.length,C=p,y=qn.prototype.thru;for(s&&c.reverse();C--;){var R=c[C];if(typeof R!="function")throw new Xn(a);if(y&&!P&&Ta(R)=="wrapper")var P=new qn([],!0)}for(C=P?C:p;++C<p;){R=c[C];var K=Ta(R),q=K=="wrapper"?tu(R):n;q&&ou(q[0])&&q[1]==(M|T|G|$)&&!q[4].length&&q[9]==1?P=P[Ta(q[0])].apply(P,q[3]):P=R.length==1&&ou(R)?P[K]():P.thru(R)}return function(){var de=arguments,_e=de[0];if(P&&de.length==1&&nt(_e))return P.plant(_e).value();for(var pe=0,Le=p?c[pe].apply(this,de):_e;++pe<p;)Le=c[pe].call(this,Le);return Le}})}function Sa(s,c,p,C,y,R,P,K,q,de){var _e=c&M,pe=c&b,Le=c&w,Fe=c&(T|k),Ve=c&J,ct=Le?n:as(s);function Xe(){for(var gt=arguments.length,vt=re(gt),kn=gt;kn--;)vt[kn]=arguments[kn];if(Fe)var mn=no(Xe),Mn=D1(vt,mn);if(C&&(vt=Xf(vt,C,y,Fe)),R&&(vt=qf(vt,R,P,Fe)),gt-=Mn,Fe&&gt<de){var Kt=ni(vt,mn);return ig(s,c,Sa,Xe.placeholder,p,vt,Kt,K,q,de-gt)}var mr=pe?p:this,Hr=Le?mr[s]:s;return gt=vt.length,K?vt=F0(vt,K):Ve&&gt>1&&vt.reverse(),_e&&q<gt&&(vt.length=q),this&&this!==sn&&this instanceof Xe&&(Hr=ct||as(Hr)),Hr.apply(mr,vt)}return Xe}function ng(s,c){return function(p,C){return KE(p,s,c(C),{})}}function Na(s,c){return function(p,C){var y;if(p===n&&C===n)return c;if(p!==n&&(y=p),C!==n){if(y===n)return C;typeof p=="string"||typeof C=="string"?(p=Rn(p),C=Rn(C)):(p=zf(p),C=zf(C)),y=s(p,C)}return y}}function Zc(s){return $r(function(c){return c=Pt(c,Dn(je())),dt(function(p){var C=this;return s(c,function(y){return Nn(y,C,p)})})})}function Da(s,c){c=c===n?" ":Rn(c);var p=c.length;if(p<2)return p?Bc(c,s):c;var C=Bc(c,pa(s/Vi(c)));return Ki(c)?ai(hr(C),0,s).join(""):C.slice(0,s)}function C0(s,c,p,C){var y=c&b,R=as(s);function P(){for(var K=-1,q=arguments.length,de=-1,_e=C.length,pe=re(_e+q),Le=this&&this!==sn&&this instanceof P?R:s;++de<_e;)pe[de]=C[de];for(;q--;)pe[de++]=arguments[++K];return Nn(Le,y?p:this,pe)}return P}function rg(s){return function(c,p,C){return C&&typeof C!="number"&&pn(c,p,C)&&(p=C=n),c=zr(c),p===n?(p=c,c=0):p=zr(p),C=C===n?c<p?1:-1:zr(C),o0(c,p,C,s)}}function Ra(s){return function(c,p){return typeof c=="string"&&typeof p=="string"||(c=er(c),p=er(p)),s(c,p)}}function ig(s,c,p,C,y,R,P,K,q,de){var _e=c&T,pe=_e?P:n,Le=_e?n:P,Fe=_e?R:n,Ve=_e?n:R;c|=_e?G:W,c&=~(_e?W:G),c&A||(c&=-4);var ct=[s,c,y,Fe,pe,Ve,Le,K,q,de],Xe=p.apply(n,ct);return ou(s)&&vg(Xe,ct),Xe.placeholder=C,pg(Xe,s,c)}function Qc(s){var c=qt[s];return function(p,C){if(p=er(p),C=C==null?0:dn(at(C),292),C&&pf(p)){var y=(Ot(p)+"e").split("e"),R=c(y[0]+"e"+(+y[1]+C));return y=(Ot(R)+"e").split("e"),+(y[0]+"e"+(+y[1]-C))}return c(p)}}var b0=Zi&&1/aa(new Zi([,-0]))[1]==Oe?function(s){return new Zi(s)}:Cu;function og(s){return function(c){var p=_n(c);return p==Ie?Lc(c):p==wn?$1(c):N1(c,s(c))}}function Gr(s,c,p,C,y,R,P,K){var q=c&w;if(!q&&typeof s!="function")throw new Xn(a);var de=C?C.length:0;if(de||(c&=-97,C=y=n),P=P===n?P:Zt(at(P),0),K=K===n?K:at(K),de-=y?y.length:0,c&W){var _e=C,pe=y;C=y=n}var Le=q?n:tu(s),Fe=[s,c,p,C,y,_e,pe,R,P,K];if(Le&&U0(Fe,Le),s=Fe[0],c=Fe[1],p=Fe[2],C=Fe[3],y=Fe[4],K=Fe[9]=Fe[9]===n?q?0:s.length:Zt(Fe[9]-de,0),!K&&c&(T|k)&&(c&=-25),!c||c==b)var Ve=m0(s,c,p);else c==T||c==k?Ve=E0(s,c,K):(c==G||c==(b|G))&&!y.length?Ve=C0(s,c,p,C):Ve=Sa.apply(n,Fe);var ct=Le?Ff:vg;return pg(ct(Ve,Fe),s,c)}function sg(s,c,p,C){return s===n||pr(s,qi[p])&&!At.call(C,p)?c:s}function ag(s,c,p,C,y,R){return zt(s)&&zt(c)&&(R.set(c,s),Oa(s,c,n,ag,R),R.delete(c)),s}function I0(s){return us(s)?n:s}function lg(s,c,p,C,y,R){var P=p&E,K=s.length,q=c.length;if(K!=q&&!(P&&q>K))return!1;var de=R.get(s),_e=R.get(c);if(de&&_e)return de==c&&_e==s;var pe=-1,Le=!0,Fe=p&I?new yi:n;for(R.set(s,c),R.set(c,s);++pe<K;){var Ve=s[pe],ct=c[pe];if(C)var Xe=P?C(ct,Ve,pe,c,s,R):C(Ve,ct,pe,s,c,R);if(Xe!==n){if(Xe)continue;Le=!1;break}if(Fe){if(!Ic(c,function(gt,vt){if(!qo(Fe,vt)&&(Ve===gt||y(Ve,gt,p,C,R)))return Fe.push(vt)})){Le=!1;break}}else if(!(Ve===ct||y(Ve,ct,p,C,R))){Le=!1;break}}return R.delete(s),R.delete(c),Le}function w0(s,c,p,C,y,R,P){switch(p){case Bi:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Xo:return!(s.byteLength!=c.byteLength||!R(new fa(s),new fa(c)));case In:case un:case Te:return pr(+s,+c);case wr:return s.name==c.name&&s.message==c.message;case Ei:case Ci:return s==c+"";case Ie:var K=Lc;case wn:var q=C&E;if(K||(K=aa),s.size!=c.size&&!q)return!1;var de=P.get(s);if(de)return de==c;C|=I,P.set(s,c);var _e=lg(K(s),K(c),C,y,R,P);return P.delete(s),_e;case Wi:if(ts)return ts.call(s)==ts.call(c)}return!1}function y0(s,c,p,C,y,R){var P=p&E,K=Jc(s),q=K.length,de=Jc(c),_e=de.length;if(q!=_e&&!P)return!1;for(var pe=q;pe--;){var Le=K[pe];if(!(P?Le in c:At.call(c,Le)))return!1}var Fe=R.get(s),Ve=R.get(c);if(Fe&&Ve)return Fe==c&&Ve==s;var ct=!0;R.set(s,c),R.set(c,s);for(var Xe=P;++pe<q;){Le=K[pe];var gt=s[Le],vt=c[Le];if(C)var kn=P?C(vt,gt,Le,c,s,R):C(gt,vt,Le,s,c,R);if(!(kn===n?gt===vt||y(gt,vt,p,C,R):kn)){ct=!1;break}Xe||(Xe=Le=="constructor")}if(ct&&!Xe){var mn=s.constructor,Mn=c.constructor;mn!=Mn&&"constructor"in s&&"constructor"in c&&!(typeof mn=="function"&&mn instanceof mn&&typeof Mn=="function"&&Mn instanceof Mn)&&(ct=!1)}return R.delete(s),R.delete(c),ct}function $r(s){return au(gg(s,n,wg),s+"")}function Jc(s){return Lf(s,Jt,ru)}function eu(s){return Lf(s,An,cg)}var tu=Ea?function(s){return Ea.get(s)}:Cu;function Ta(s){for(var c=s.name+"",p=Qi[c],C=At.call(Qi,c)?p.length:0;C--;){var y=p[C],R=y.func;if(R==null||R==s)return y.name}return c}function no(s){var c=At.call(N,"placeholder")?N:s;return c.placeholder}function je(){var s=N.iteratee||mu;return s=s===mu?Df:s,arguments.length?s(arguments[0],arguments[1]):s}function ka(s,c){var p=s.__data__;return R0(c)?p[typeof c=="string"?"string":"hash"]:p.map}function nu(s){for(var c=Jt(s),p=c.length;p--;){var C=c[p],y=s[C];c[p]=[C,y,_g(y)]}return c}function xi(s,c){var p=M1(s,c);return Nf(p)?p:n}function O0(s){var c=At.call(s,Ii),p=s[Ii];try{s[Ii]=n;var C=!0}catch{}var y=da.call(s);return C&&(c?s[Ii]=p:delete s[Ii]),y}var ru=Nc?function(s){return s==null?[]:(s=Tt(s),ei(Nc(s),function(c){return hf.call(s,c)}))}:bu,cg=Nc?function(s){for(var c=[];s;)ti(c,ru(s)),s=ga(s);return c}:bu,_n=vn;(Dc&&_n(new Dc(new ArrayBuffer(1)))!=Bi||Qo&&_n(new Qo)!=Ie||Rc&&_n(Rc.resolve())!=ea||Zi&&_n(new Zi)!=wn||Jo&&_n(new Jo)!=et)&&(_n=function(s){var c=vn(s),p=c==Mt?s.constructor:n,C=p?Li(p):"";if(C)switch(C){case aE:return Bi;case lE:return Ie;case cE:return ea;case uE:return wn;case dE:return et}return c});function A0(s,c,p){for(var C=-1,y=p.length;++C<y;){var R=p[C],P=R.size;switch(R.type){case"drop":s+=P;break;case"dropRight":c-=P;break;case"take":c=dn(c,s+P);break;case"takeRight":s=Zt(s,c-P);break}}return{start:s,end:c}}function x0(s){var c=s.match(Tm);return c?c[1].split(km):[]}function ug(s,c,p){c=si(c,s);for(var C=-1,y=c.length,R=!1;++C<y;){var P=Ar(c[C]);if(!(R=s!=null&&p(s,P)))break;s=s[P]}return R||++C!=y?R:(y=s==null?0:s.length,!!y&&za(y)&&Fr(P,y)&&(nt(s)||Si(s)))}function L0(s){var c=s.length,p=new s.constructor(c);return c&&typeof s[0]=="string"&&At.call(s,"index")&&(p.index=s.index,p.input=s.input),p}function dg(s){return typeof s.constructor=="function"&&!ls(s)?Ji(ga(s)):{}}function S0(s,c,p){var C=s.constructor;switch(c){case Xo:return qc(s);case In:case un:return new C(+s);case Bi:return _0(s,p);case nc:case rc:case ic:case oc:case sc:case ac:case lc:case cc:case uc:return Kf(s,p);case Ie:return new C;case Te:case Ci:return new C(s);case Ei:return f0(s);case wn:return new C;case Wi:return g0(s)}}function N0(s,c){var p=c.length;if(!p)return s;var C=p-1;return c[C]=(p>1?"& ":"")+c[C],c=c.join(p>2?", ":" "),s.replace(Rm,`{
/* [wrapped with `+c+`] */
`)}function D0(s){return nt(s)||Si(s)||!!(vf&&s&&s[vf])}function Fr(s,c){var p=typeof s;return c=c??Se,!!c&&(p=="number"||p!="symbol"&&Wm.test(s))&&s>-1&&s%1==0&&s<c}function pn(s,c,p){if(!zt(p))return!1;var C=typeof c;return(C=="number"?On(p)&&Fr(c,p.length):C=="string"&&c in p)?pr(p[c],s):!1}function iu(s,c){if(nt(s))return!1;var p=typeof s;return p=="number"||p=="symbol"||p=="boolean"||s==null||Tn(s)?!0:Lm.test(s)||!xm.test(s)||c!=null&&s in Tt(c)}function R0(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ou(s){var c=Ta(s),p=N[c];if(typeof p!="function"||!(c in ht.prototype))return!1;if(s===p)return!0;var C=tu(p);return!!C&&s===C[0]}function T0(s){return!!_f&&_f in s}var k0=ca?Pr:Iu;function ls(s){var c=s&&s.constructor,p=typeof c=="function"&&c.prototype||qi;return s===p}function _g(s){return s===s&&!zt(s)}function fg(s,c){return function(p){return p==null?!1:p[s]===c&&(c!==n||s in Tt(p))}}function M0(s){var c=Fa(s,function(C){return p.size===d&&p.clear(),C}),p=c.cache;return c}function U0(s,c){var p=s[1],C=c[1],y=p|C,R=y<(b|w|M),P=C==M&&p==T||C==M&&p==$&&s[7].length<=c[8]||C==(M|$)&&c[7].length<=c[8]&&p==T;if(!(R||P))return s;C&b&&(s[2]=c[2],y|=p&b?0:A);var K=c[3];if(K){var q=s[3];s[3]=q?Xf(q,K,c[4]):K,s[4]=q?ni(s[3],g):c[4]}return K=c[5],K&&(q=s[5],s[5]=q?qf(q,K,c[6]):K,s[6]=q?ni(s[5],g):c[6]),K=c[7],K&&(s[7]=K),C&M&&(s[8]=s[8]==null?c[8]:dn(s[8],c[8])),s[9]==null&&(s[9]=c[9]),s[0]=c[0],s[1]=y,s}function G0(s){var c=[];if(s!=null)for(var p in Tt(s))c.push(p);return c}function $0(s){return da.call(s)}function gg(s,c,p){return c=Zt(c===n?s.length-1:c,0),function(){for(var C=arguments,y=-1,R=Zt(C.length-c,0),P=re(R);++y<R;)P[y]=C[c+y];y=-1;for(var K=re(c+1);++y<c;)K[y]=C[y];return K[c]=p(P),Nn(s,this,K)}}function hg(s,c){return c.length<2?s:Ai(s,Qn(c,0,-1))}function F0(s,c){for(var p=s.length,C=dn(c.length,p),y=yn(s);C--;){var R=c[C];s[C]=Fr(R,p)?y[R]:n}return s}function su(s,c){if(!(c==="constructor"&&typeof s[c]=="function")&&c!="__proto__")return s[c]}var vg=mg(Ff),cs=eE||function(s,c){return sn.setTimeout(s,c)},au=mg(l0);function pg(s,c,p){var C=c+"";return au(s,N0(C,P0(x0(C),p)))}function mg(s){var c=0,p=0;return function(){var C=iE(),y=be-(C-p);if(p=C,y>0){if(++c>=ce)return arguments[0]}else c=0;return s.apply(n,arguments)}}function Ma(s,c){var p=-1,C=s.length,y=C-1;for(c=c===n?C:c;++p<c;){var R=Wc(p,y),P=s[R];s[R]=s[p],s[p]=P}return s.length=c,s}var Eg=M0(function(s){var c=[];return s.charCodeAt(0)===46&&c.push(""),s.replace(Sm,function(p,C,y,R){c.push(y?R.replace(Gm,"$1"):C||p)}),c});function Ar(s){if(typeof s=="string"||Tn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Li(s){if(s!=null){try{return ua.call(s)}catch{}try{return s+""}catch{}}return""}function P0(s,c){return Vn(yt,function(p){var C="_."+p[0];c&p[1]&&!oa(s,C)&&s.push(C)}),s.sort()}function Cg(s){if(s instanceof ht)return s.clone();var c=new qn(s.__wrapped__,s.__chain__);return c.__actions__=yn(s.__actions__),c.__index__=s.__index__,c.__values__=s.__values__,c}function z0(s,c,p){(p?pn(s,c,p):c===n)?c=1:c=Zt(at(c),0);var C=s==null?0:s.length;if(!C||c<1)return[];for(var y=0,R=0,P=re(pa(C/c));y<C;)P[R++]=Qn(s,y,y+=c);return P}function H0(s){for(var c=-1,p=s==null?0:s.length,C=0,y=[];++c<p;){var R=s[c];R&&(y[C++]=R)}return y}function W0(){var s=arguments.length;if(!s)return[];for(var c=re(s-1),p=arguments[0],C=s;C--;)c[C-1]=arguments[C];return ti(nt(p)?yn(p):[p],an(c,1))}var B0=dt(function(s,c){return jt(s)?rs(s,an(c,1,jt,!0)):[]}),Y0=dt(function(s,c){var p=Jn(c);return jt(p)&&(p=n),jt(s)?rs(s,an(c,1,jt,!0),je(p,2)):[]}),j0=dt(function(s,c){var p=Jn(c);return jt(p)&&(p=n),jt(s)?rs(s,an(c,1,jt,!0),n,p):[]});function K0(s,c,p){var C=s==null?0:s.length;return C?(c=p||c===n?1:at(c),Qn(s,c<0?0:c,C)):[]}function V0(s,c,p){var C=s==null?0:s.length;return C?(c=p||c===n?1:at(c),c=C-c,Qn(s,0,c<0?0:c)):[]}function X0(s,c){return s&&s.length?xa(s,je(c,3),!0,!0):[]}function q0(s,c){return s&&s.length?xa(s,je(c,3),!0):[]}function Z0(s,c,p,C){var y=s==null?0:s.length;return y?(p&&typeof p!="number"&&pn(s,c,p)&&(p=0,C=y),WE(s,c,p,C)):[]}function bg(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:at(p);return y<0&&(y=Zt(C+y,0)),sa(s,je(c,3),y)}function Ig(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=C-1;return p!==n&&(y=at(p),y=p<0?Zt(C+y,0):dn(y,C-1)),sa(s,je(c,3),y,!0)}function wg(s){var c=s==null?0:s.length;return c?an(s,1):[]}function Q0(s){var c=s==null?0:s.length;return c?an(s,Oe):[]}function J0(s,c){var p=s==null?0:s.length;return p?(c=c===n?1:at(c),an(s,c)):[]}function eC(s){for(var c=-1,p=s==null?0:s.length,C={};++c<p;){var y=s[c];C[y[0]]=y[1]}return C}function yg(s){return s&&s.length?s[0]:n}function tC(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:at(p);return y<0&&(y=Zt(C+y,0)),ji(s,c,y)}function nC(s){var c=s==null?0:s.length;return c?Qn(s,0,-1):[]}var rC=dt(function(s){var c=Pt(s,Vc);return c.length&&c[0]===s[0]?$c(c):[]}),iC=dt(function(s){var c=Jn(s),p=Pt(s,Vc);return c===Jn(p)?c=n:p.pop(),p.length&&p[0]===s[0]?$c(p,je(c,2)):[]}),oC=dt(function(s){var c=Jn(s),p=Pt(s,Vc);return c=typeof c=="function"?c:n,c&&p.pop(),p.length&&p[0]===s[0]?$c(p,n,c):[]});function sC(s,c){return s==null?"":nE.call(s,c)}function Jn(s){var c=s==null?0:s.length;return c?s[c-1]:n}function aC(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=C;return p!==n&&(y=at(p),y=y<0?Zt(C+y,0):dn(y,C-1)),c===c?P1(s,c,y):sa(s,rf,y,!0)}function lC(s,c){return s&&s.length?Mf(s,at(c)):n}var cC=dt(Og);function Og(s,c){return s&&s.length&&c&&c.length?Hc(s,c):s}function uC(s,c,p){return s&&s.length&&c&&c.length?Hc(s,c,je(p,2)):s}function dC(s,c,p){return s&&s.length&&c&&c.length?Hc(s,c,n,p):s}var _C=$r(function(s,c){var p=s==null?0:s.length,C=kc(s,c);return $f(s,Pt(c,function(y){return Fr(y,p)?+y:y}).sort(Vf)),C});function fC(s,c){var p=[];if(!(s&&s.length))return p;var C=-1,y=[],R=s.length;for(c=je(c,3);++C<R;){var P=s[C];c(P,C,s)&&(p.push(P),y.push(C))}return $f(s,y),p}function lu(s){return s==null?s:sE.call(s)}function gC(s,c,p){var C=s==null?0:s.length;return C?(p&&typeof p!="number"&&pn(s,c,p)?(c=0,p=C):(c=c==null?0:at(c),p=p===n?C:at(p)),Qn(s,c,p)):[]}function hC(s,c){return Aa(s,c)}function vC(s,c,p){return Yc(s,c,je(p,2))}function pC(s,c){var p=s==null?0:s.length;if(p){var C=Aa(s,c);if(C<p&&pr(s[C],c))return C}return-1}function mC(s,c){return Aa(s,c,!0)}function EC(s,c,p){return Yc(s,c,je(p,2),!0)}function CC(s,c){var p=s==null?0:s.length;if(p){var C=Aa(s,c,!0)-1;if(pr(s[C],c))return C}return-1}function bC(s){return s&&s.length?Pf(s):[]}function IC(s,c){return s&&s.length?Pf(s,je(c,2)):[]}function wC(s){var c=s==null?0:s.length;return c?Qn(s,1,c):[]}function yC(s,c,p){return s&&s.length?(c=p||c===n?1:at(c),Qn(s,0,c<0?0:c)):[]}function OC(s,c,p){var C=s==null?0:s.length;return C?(c=p||c===n?1:at(c),c=C-c,Qn(s,c<0?0:c,C)):[]}function AC(s,c){return s&&s.length?xa(s,je(c,3),!1,!0):[]}function xC(s,c){return s&&s.length?xa(s,je(c,3)):[]}var LC=dt(function(s){return oi(an(s,1,jt,!0))}),SC=dt(function(s){var c=Jn(s);return jt(c)&&(c=n),oi(an(s,1,jt,!0),je(c,2))}),NC=dt(function(s){var c=Jn(s);return c=typeof c=="function"?c:n,oi(an(s,1,jt,!0),n,c)});function DC(s){return s&&s.length?oi(s):[]}function RC(s,c){return s&&s.length?oi(s,je(c,2)):[]}function TC(s,c){return c=typeof c=="function"?c:n,s&&s.length?oi(s,n,c):[]}function cu(s){if(!(s&&s.length))return[];var c=0;return s=ei(s,function(p){if(jt(p))return c=Zt(p.length,c),!0}),Ac(c,function(p){return Pt(s,wc(p))})}function Ag(s,c){if(!(s&&s.length))return[];var p=cu(s);return c==null?p:Pt(p,function(C){return Nn(c,n,C)})}var kC=dt(function(s,c){return jt(s)?rs(s,c):[]}),MC=dt(function(s){return Kc(ei(s,jt))}),UC=dt(function(s){var c=Jn(s);return jt(c)&&(c=n),Kc(ei(s,jt),je(c,2))}),GC=dt(function(s){var c=Jn(s);return c=typeof c=="function"?c:n,Kc(ei(s,jt),n,c)}),$C=dt(cu);function FC(s,c){return Bf(s||[],c||[],ns)}function PC(s,c){return Bf(s||[],c||[],ss)}var zC=dt(function(s){var c=s.length,p=c>1?s[c-1]:n;return p=typeof p=="function"?(s.pop(),p):n,Ag(s,p)});function xg(s){var c=N(s);return c.__chain__=!0,c}function HC(s,c){return c(s),s}function Ua(s,c){return c(s)}var WC=$r(function(s){var c=s.length,p=c?s[0]:0,C=this.__wrapped__,y=function(R){return kc(R,s)};return c>1||this.__actions__.length||!(C instanceof ht)||!Fr(p)?this.thru(y):(C=C.slice(p,+p+(c?1:0)),C.__actions__.push({func:Ua,args:[y],thisArg:n}),new qn(C,this.__chain__).thru(function(R){return c&&!R.length&&R.push(n),R}))});function BC(){return xg(this)}function YC(){return new qn(this.value(),this.__chain__)}function jC(){this.__values__===n&&(this.__values__=zg(this.value()));var s=this.__index__>=this.__values__.length,c=s?n:this.__values__[this.__index__++];return{done:s,value:c}}function KC(){return this}function VC(s){for(var c,p=this;p instanceof ba;){var C=Cg(p);C.__index__=0,C.__values__=n,c?y.__wrapped__=C:c=C;var y=C;p=p.__wrapped__}return y.__wrapped__=s,c}function XC(){var s=this.__wrapped__;if(s instanceof ht){var c=s;return this.__actions__.length&&(c=new ht(this)),c=c.reverse(),c.__actions__.push({func:Ua,args:[lu],thisArg:n}),new qn(c,this.__chain__)}return this.thru(lu)}function qC(){return Wf(this.__wrapped__,this.__actions__)}var ZC=La(function(s,c,p){At.call(s,p)?++s[p]:Ur(s,p,1)});function QC(s,c,p){var C=nt(s)?tf:HE;return p&&pn(s,c,p)&&(c=n),C(s,je(c,3))}function JC(s,c){var p=nt(s)?ei:Af;return p(s,je(c,3))}var eb=eg(bg),tb=eg(Ig);function nb(s,c){return an(Ga(s,c),1)}function rb(s,c){return an(Ga(s,c),Oe)}function ib(s,c,p){return p=p===n?1:at(p),an(Ga(s,c),p)}function Lg(s,c){var p=nt(s)?Vn:ii;return p(s,je(c,3))}function Sg(s,c){var p=nt(s)?w1:Of;return p(s,je(c,3))}var ob=La(function(s,c,p){At.call(s,p)?s[p].push(c):Ur(s,p,[c])});function sb(s,c,p,C){s=On(s)?s:io(s),p=p&&!C?at(p):0;var y=s.length;return p<0&&(p=Zt(y+p,0)),Ha(s)?p<=y&&s.indexOf(c,p)>-1:!!y&&ji(s,c,p)>-1}var ab=dt(function(s,c,p){var C=-1,y=typeof c=="function",R=On(s)?re(s.length):[];return ii(s,function(P){R[++C]=y?Nn(c,P,p):is(P,c,p)}),R}),lb=La(function(s,c,p){Ur(s,p,c)});function Ga(s,c){var p=nt(s)?Pt:Rf;return p(s,je(c,3))}function cb(s,c,p,C){return s==null?[]:(nt(c)||(c=c==null?[]:[c]),p=C?n:p,nt(p)||(p=p==null?[]:[p]),Uf(s,c,p))}var ub=La(function(s,c,p){s[p?0:1].push(c)},function(){return[[],[]]});function db(s,c,p){var C=nt(s)?bc:sf,y=arguments.length<3;return C(s,je(c,4),p,y,ii)}function _b(s,c,p){var C=nt(s)?y1:sf,y=arguments.length<3;return C(s,je(c,4),p,y,Of)}function fb(s,c){var p=nt(s)?ei:Af;return p(s,Pa(je(c,3)))}function gb(s){var c=nt(s)?bf:s0;return c(s)}function hb(s,c,p){(p?pn(s,c,p):c===n)?c=1:c=at(c);var C=nt(s)?GE:a0;return C(s,c)}function vb(s){var c=nt(s)?$E:c0;return c(s)}function pb(s){if(s==null)return 0;if(On(s))return Ha(s)?Vi(s):s.length;var c=_n(s);return c==Ie||c==wn?s.size:Pc(s).length}function mb(s,c,p){var C=nt(s)?Ic:u0;return p&&pn(s,c,p)&&(c=n),C(s,je(c,3))}var Eb=dt(function(s,c){if(s==null)return[];var p=c.length;return p>1&&pn(s,c[0],c[1])?c=[]:p>2&&pn(c[0],c[1],c[2])&&(c=[c[0]]),Uf(s,an(c,1),[])}),$a=J1||function(){return sn.Date.now()};function Cb(s,c){if(typeof c!="function")throw new Xn(a);return s=at(s),function(){if(--s<1)return c.apply(this,arguments)}}function Ng(s,c,p){return c=p?n:c,c=s&&c==null?s.length:c,Gr(s,M,n,n,n,n,c)}function Dg(s,c){var p;if(typeof c!="function")throw new Xn(a);return s=at(s),function(){return--s>0&&(p=c.apply(this,arguments)),s<=1&&(c=n),p}}var uu=dt(function(s,c,p){var C=b;if(p.length){var y=ni(p,no(uu));C|=G}return Gr(s,C,c,p,y)}),Rg=dt(function(s,c,p){var C=b|w;if(p.length){var y=ni(p,no(Rg));C|=G}return Gr(c,C,s,p,y)});function Tg(s,c,p){c=p?n:c;var C=Gr(s,T,n,n,n,n,n,c);return C.placeholder=Tg.placeholder,C}function kg(s,c,p){c=p?n:c;var C=Gr(s,k,n,n,n,n,n,c);return C.placeholder=kg.placeholder,C}function Mg(s,c,p){var C,y,R,P,K,q,de=0,_e=!1,pe=!1,Le=!0;if(typeof s!="function")throw new Xn(a);c=er(c)||0,zt(p)&&(_e=!!p.leading,pe="maxWait"in p,R=pe?Zt(er(p.maxWait)||0,c):R,Le="trailing"in p?!!p.trailing:Le);function Fe(Kt){var mr=C,Hr=y;return C=y=n,de=Kt,P=s.apply(Hr,mr),P}function Ve(Kt){return de=Kt,K=cs(gt,c),_e?Fe(Kt):P}function ct(Kt){var mr=Kt-q,Hr=Kt-de,eh=c-mr;return pe?dn(eh,R-Hr):eh}function Xe(Kt){var mr=Kt-q,Hr=Kt-de;return q===n||mr>=c||mr<0||pe&&Hr>=R}function gt(){var Kt=$a();if(Xe(Kt))return vt(Kt);K=cs(gt,ct(Kt))}function vt(Kt){return K=n,Le&&C?Fe(Kt):(C=y=n,P)}function kn(){K!==n&&Yf(K),de=0,C=q=y=K=n}function mn(){return K===n?P:vt($a())}function Mn(){var Kt=$a(),mr=Xe(Kt);if(C=arguments,y=this,q=Kt,mr){if(K===n)return Ve(q);if(pe)return Yf(K),K=cs(gt,c),Fe(q)}return K===n&&(K=cs(gt,c)),P}return Mn.cancel=kn,Mn.flush=mn,Mn}var bb=dt(function(s,c){return yf(s,1,c)}),Ib=dt(function(s,c,p){return yf(s,er(c)||0,p)});function wb(s){return Gr(s,J)}function Fa(s,c){if(typeof s!="function"||c!=null&&typeof c!="function")throw new Xn(a);var p=function(){var C=arguments,y=c?c.apply(this,C):C[0],R=p.cache;if(R.has(y))return R.get(y);var P=s.apply(this,C);return p.cache=R.set(y,P)||R,P};return p.cache=new(Fa.Cache||Mr),p}Fa.Cache=Mr;function Pa(s){if(typeof s!="function")throw new Xn(a);return function(){var c=arguments;switch(c.length){case 0:return!s.call(this);case 1:return!s.call(this,c[0]);case 2:return!s.call(this,c[0],c[1]);case 3:return!s.call(this,c[0],c[1],c[2])}return!s.apply(this,c)}}function yb(s){return Dg(2,s)}var Ob=d0(function(s,c){c=c.length==1&&nt(c[0])?Pt(c[0],Dn(je())):Pt(an(c,1),Dn(je()));var p=c.length;return dt(function(C){for(var y=-1,R=dn(C.length,p);++y<R;)C[y]=c[y].call(this,C[y]);return Nn(s,this,C)})}),du=dt(function(s,c){var p=ni(c,no(du));return Gr(s,G,n,c,p)}),Ug=dt(function(s,c){var p=ni(c,no(Ug));return Gr(s,W,n,c,p)}),Ab=$r(function(s,c){return Gr(s,$,n,n,n,c)});function xb(s,c){if(typeof s!="function")throw new Xn(a);return c=c===n?c:at(c),dt(s,c)}function Lb(s,c){if(typeof s!="function")throw new Xn(a);return c=c==null?0:Zt(at(c),0),dt(function(p){var C=p[c],y=ai(p,0,c);return C&&ti(y,C),Nn(s,this,y)})}function Sb(s,c,p){var C=!0,y=!0;if(typeof s!="function")throw new Xn(a);return zt(p)&&(C="leading"in p?!!p.leading:C,y="trailing"in p?!!p.trailing:y),Mg(s,c,{leading:C,maxWait:c,trailing:y})}function Nb(s){return Ng(s,1)}function Db(s,c){return du(Xc(c),s)}function Rb(){if(!arguments.length)return[];var s=arguments[0];return nt(s)?s:[s]}function Tb(s){return Zn(s,m)}function kb(s,c){return c=typeof c=="function"?c:n,Zn(s,m,c)}function Mb(s){return Zn(s,h|m)}function Ub(s,c){return c=typeof c=="function"?c:n,Zn(s,h|m,c)}function Gb(s,c){return c==null||wf(s,c,Jt(c))}function pr(s,c){return s===c||s!==s&&c!==c}var $b=Ra(Gc),Fb=Ra(function(s,c){return s>=c}),Si=Sf(function(){return arguments}())?Sf:function(s){return Bt(s)&&At.call(s,"callee")&&!hf.call(s,"callee")},nt=re.isArray,Pb=X_?Dn(X_):VE;function On(s){return s!=null&&za(s.length)&&!Pr(s)}function jt(s){return Bt(s)&&On(s)}function zb(s){return s===!0||s===!1||Bt(s)&&vn(s)==In}var li=tE||Iu,Hb=q_?Dn(q_):XE;function Wb(s){return Bt(s)&&s.nodeType===1&&!us(s)}function Bb(s){if(s==null)return!0;if(On(s)&&(nt(s)||typeof s=="string"||typeof s.splice=="function"||li(s)||ro(s)||Si(s)))return!s.length;var c=_n(s);if(c==Ie||c==wn)return!s.size;if(ls(s))return!Pc(s).length;for(var p in s)if(At.call(s,p))return!1;return!0}function Yb(s,c){return os(s,c)}function jb(s,c,p){p=typeof p=="function"?p:n;var C=p?p(s,c):n;return C===n?os(s,c,n,p):!!C}function _u(s){if(!Bt(s))return!1;var c=vn(s);return c==wr||c==Ir||typeof s.message=="string"&&typeof s.name=="string"&&!us(s)}function Kb(s){return typeof s=="number"&&pf(s)}function Pr(s){if(!zt(s))return!1;var c=vn(s);return c==Tr||c==Pe||c==Ct||c==ta}function Gg(s){return typeof s=="number"&&s==at(s)}function za(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Se}function zt(s){var c=typeof s;return s!=null&&(c=="object"||c=="function")}function Bt(s){return s!=null&&typeof s=="object"}var $g=Z_?Dn(Z_):ZE;function Vb(s,c){return s===c||Fc(s,c,nu(c))}function Xb(s,c,p){return p=typeof p=="function"?p:n,Fc(s,c,nu(c),p)}function qb(s){return Fg(s)&&s!=+s}function Zb(s){if(k0(s))throw new tt(o);return Nf(s)}function Qb(s){return s===null}function Jb(s){return s==null}function Fg(s){return typeof s=="number"||Bt(s)&&vn(s)==Te}function us(s){if(!Bt(s)||vn(s)!=Mt)return!1;var c=ga(s);if(c===null)return!0;var p=At.call(c,"constructor")&&c.constructor;return typeof p=="function"&&p instanceof p&&ua.call(p)==X1}var fu=Q_?Dn(Q_):QE;function eI(s){return Gg(s)&&s>=-9007199254740991&&s<=Se}var Pg=J_?Dn(J_):JE;function Ha(s){return typeof s=="string"||!nt(s)&&Bt(s)&&vn(s)==Ci}function Tn(s){return typeof s=="symbol"||Bt(s)&&vn(s)==Wi}var ro=ef?Dn(ef):e0;function tI(s){return s===n}function nI(s){return Bt(s)&&_n(s)==et}function rI(s){return Bt(s)&&vn(s)==Vo}var iI=Ra(zc),oI=Ra(function(s,c){return s<=c});function zg(s){if(!s)return[];if(On(s))return Ha(s)?hr(s):yn(s);if(Zo&&s[Zo])return G1(s[Zo]());var c=_n(s),p=c==Ie?Lc:c==wn?aa:io;return p(s)}function zr(s){if(!s)return s===0?s:0;if(s=er(s),s===Oe||s===-1/0){var c=s<0?-1:1;return c*ye}return s===s?s:0}function at(s){var c=zr(s),p=c%1;return c===c?p?c-p:c:0}function Hg(s){return s?Oi(at(s),0,$e):0}function er(s){if(typeof s=="number")return s;if(Tn(s))return Re;if(zt(s)){var c=typeof s.valueOf=="function"?s.valueOf():s;s=zt(c)?c+"":c}if(typeof s!="string")return s===0?s:+s;s=af(s);var p=Pm.test(s);return p||Hm.test(s)?C1(s.slice(2),p?2:8):Fm.test(s)?Re:+s}function Wg(s){return Or(s,An(s))}function sI(s){return s?Oi(at(s),-9007199254740991,Se):s===0?s:0}function Ot(s){return s==null?"":Rn(s)}var aI=eo(function(s,c){if(ls(c)||On(c)){Or(c,Jt(c),s);return}for(var p in c)At.call(c,p)&&ns(s,p,c[p])}),Bg=eo(function(s,c){Or(c,An(c),s)}),Wa=eo(function(s,c,p,C){Or(c,An(c),s,C)}),lI=eo(function(s,c,p,C){Or(c,Jt(c),s,C)}),cI=$r(kc);function uI(s,c){var p=Ji(s);return c==null?p:If(p,c)}var dI=dt(function(s,c){s=Tt(s);var p=-1,C=c.length,y=C>2?c[2]:n;for(y&&pn(c[0],c[1],y)&&(C=1);++p<C;)for(var R=c[p],P=An(R),K=-1,q=P.length;++K<q;){var de=P[K],_e=s[de];(_e===n||pr(_e,qi[de])&&!At.call(s,de))&&(s[de]=R[de])}return s}),_I=dt(function(s){return s.push(n,ag),Nn(Yg,n,s)});function fI(s,c){return nf(s,je(c,3),yr)}function gI(s,c){return nf(s,je(c,3),Uc)}function hI(s,c){return s==null?s:Mc(s,je(c,3),An)}function vI(s,c){return s==null?s:xf(s,je(c,3),An)}function pI(s,c){return s&&yr(s,je(c,3))}function mI(s,c){return s&&Uc(s,je(c,3))}function EI(s){return s==null?[]:ya(s,Jt(s))}function CI(s){return s==null?[]:ya(s,An(s))}function gu(s,c,p){var C=s==null?n:Ai(s,c);return C===n?p:C}function bI(s,c){return s!=null&&ug(s,c,BE)}function hu(s,c){return s!=null&&ug(s,c,YE)}var II=ng(function(s,c,p){c!=null&&typeof c.toString!="function"&&(c=da.call(c)),s[c]=p},pu(xn)),wI=ng(function(s,c,p){c!=null&&typeof c.toString!="function"&&(c=da.call(c)),At.call(s,c)?s[c].push(p):s[c]=[p]},je),yI=dt(is);function Jt(s){return On(s)?Cf(s):Pc(s)}function An(s){return On(s)?Cf(s,!0):t0(s)}function OI(s,c){var p={};return c=je(c,3),yr(s,function(C,y,R){Ur(p,c(C,y,R),C)}),p}function AI(s,c){var p={};return c=je(c,3),yr(s,function(C,y,R){Ur(p,y,c(C,y,R))}),p}var xI=eo(function(s,c,p){Oa(s,c,p)}),Yg=eo(function(s,c,p,C){Oa(s,c,p,C)}),LI=$r(function(s,c){var p={};if(s==null)return p;var C=!1;c=Pt(c,function(R){return R=si(R,s),C||(C=R.length>1),R}),Or(s,eu(s),p),C&&(p=Zn(p,h|v|m,I0));for(var y=c.length;y--;)jc(p,c[y]);return p});function SI(s,c){return jg(s,Pa(je(c)))}var NI=$r(function(s,c){return s==null?{}:r0(s,c)});function jg(s,c){if(s==null)return{};var p=Pt(eu(s),function(C){return[C]});return c=je(c),Gf(s,p,function(C,y){return c(C,y[0])})}function DI(s,c,p){c=si(c,s);var C=-1,y=c.length;for(y||(y=1,s=n);++C<y;){var R=s==null?n:s[Ar(c[C])];R===n&&(C=y,R=p),s=Pr(R)?R.call(s):R}return s}function RI(s,c,p){return s==null?s:ss(s,c,p)}function TI(s,c,p,C){return C=typeof C=="function"?C:n,s==null?s:ss(s,c,p,C)}var Kg=og(Jt),Vg=og(An);function kI(s,c,p){var C=nt(s),y=C||li(s)||ro(s);if(c=je(c,4),p==null){var R=s&&s.constructor;y?p=C?new R:[]:zt(s)?p=Pr(R)?Ji(ga(s)):{}:p={}}return(y?Vn:yr)(s,function(P,K,q){return c(p,P,K,q)}),p}function MI(s,c){return s==null?!0:jc(s,c)}function UI(s,c,p){return s==null?s:Hf(s,c,Xc(p))}function GI(s,c,p,C){return C=typeof C=="function"?C:n,s==null?s:Hf(s,c,Xc(p),C)}function io(s){return s==null?[]:xc(s,Jt(s))}function $I(s){return s==null?[]:xc(s,An(s))}function FI(s,c,p){return p===n&&(p=c,c=n),p!==n&&(p=er(p),p=p===p?p:0),c!==n&&(c=er(c),c=c===c?c:0),Oi(er(s),c,p)}function PI(s,c,p){return c=zr(c),p===n?(p=c,c=0):p=zr(p),s=er(s),jE(s,c,p)}function zI(s,c,p){if(p&&typeof p!="boolean"&&pn(s,c,p)&&(c=p=n),p===n&&(typeof c=="boolean"?(p=c,c=n):typeof s=="boolean"&&(p=s,s=n)),s===n&&c===n?(s=0,c=1):(s=zr(s),c===n?(c=s,s=0):c=zr(c)),s>c){var C=s;s=c,c=C}if(p||s%1||c%1){var y=mf();return dn(s+y*(c-s+E1("1e-"+((y+"").length-1))),c)}return Wc(s,c)}var HI=to(function(s,c,p){return c=c.toLowerCase(),s+(p?Xg(c):c)});function Xg(s){return vu(Ot(s).toLowerCase())}function qg(s){return s=Ot(s),s&&s.replace(Bm,R1).replace(c1,"")}function WI(s,c,p){s=Ot(s),c=Rn(c);var C=s.length;p=p===n?C:Oi(at(p),0,C);var y=p;return p-=c.length,p>=0&&s.slice(p,y)==c}function BI(s){return s=Ot(s),s&&ym.test(s)?s.replace(A_,T1):s}function YI(s){return s=Ot(s),s&&Nm.test(s)?s.replace(dc,"\\$&"):s}var jI=to(function(s,c,p){return s+(p?"-":"")+c.toLowerCase()}),KI=to(function(s,c,p){return s+(p?" ":"")+c.toLowerCase()}),VI=Jf("toLowerCase");function XI(s,c,p){s=Ot(s),c=at(c);var C=c?Vi(s):0;if(!c||C>=c)return s;var y=(c-C)/2;return Da(ma(y),p)+s+Da(pa(y),p)}function qI(s,c,p){s=Ot(s),c=at(c);var C=c?Vi(s):0;return c&&C<c?s+Da(c-C,p):s}function ZI(s,c,p){s=Ot(s),c=at(c);var C=c?Vi(s):0;return c&&C<c?Da(c-C,p)+s:s}function QI(s,c,p){return p||c==null?c=0:c&&(c=+c),oE(Ot(s).replace(_c,""),c||0)}function JI(s,c,p){return(p?pn(s,c,p):c===n)?c=1:c=at(c),Bc(Ot(s),c)}function ew(){var s=arguments,c=Ot(s[0]);return s.length<3?c:c.replace(s[1],s[2])}var tw=to(function(s,c,p){return s+(p?"_":"")+c.toLowerCase()});function nw(s,c,p){return p&&typeof p!="number"&&pn(s,c,p)&&(c=p=n),p=p===n?$e:p>>>0,p?(s=Ot(s),s&&(typeof c=="string"||c!=null&&!fu(c))&&(c=Rn(c),!c&&Ki(s))?ai(hr(s),0,p):s.split(c,p)):[]}var rw=to(function(s,c,p){return s+(p?" ":"")+vu(c)});function iw(s,c,p){return s=Ot(s),p=p==null?0:Oi(at(p),0,s.length),c=Rn(c),s.slice(p,p+c.length)==c}function ow(s,c,p){var C=N.templateSettings;p&&pn(s,c,p)&&(c=n),s=Ot(s),c=Wa({},c,C,sg);var y=Wa({},c.imports,C.imports,sg),R=Jt(y),P=xc(y,R),K,q,de=0,_e=c.interpolate||na,pe="__p += '",Le=Sc((c.escape||na).source+"|"+_e.source+"|"+(_e===x_?$m:na).source+"|"+(c.evaluate||na).source+"|$","g"),Fe="//# sourceURL="+(At.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++g1+"]")+`
`;s.replace(Le,function(Xe,gt,vt,kn,mn,Mn){return vt||(vt=kn),pe+=s.slice(de,Mn).replace(Ym,k1),gt&&(K=!0,pe+=`' +
__e(`+gt+`) +
'`),mn&&(q=!0,pe+=`';
`+mn+`;
__p += '`),vt&&(pe+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),de=Mn+Xe.length,Xe}),pe+=`';
`;var Ve=At.call(c,"variable")&&c.variable;if(!Ve)pe=`with (obj) {
`+pe+`
}
`;else if(Um.test(Ve))throw new tt(l);pe=(q?pe.replace(Cm,""):pe).replace(bm,"$1").replace(Im,"$1;"),pe="function("+(Ve||"obj")+`) {
`+(Ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+pe+`return __p
}`;var ct=Qg(function(){return bt(R,Fe+"return "+pe).apply(n,P)});if(ct.source=pe,_u(ct))throw ct;return ct}function sw(s){return Ot(s).toLowerCase()}function aw(s){return Ot(s).toUpperCase()}function lw(s,c,p){if(s=Ot(s),s&&(p||c===n))return af(s);if(!s||!(c=Rn(c)))return s;var C=hr(s),y=hr(c),R=lf(C,y),P=cf(C,y)+1;return ai(C,R,P).join("")}function cw(s,c,p){if(s=Ot(s),s&&(p||c===n))return s.slice(0,df(s)+1);if(!s||!(c=Rn(c)))return s;var C=hr(s),y=cf(C,hr(c))+1;return ai(C,0,y).join("")}function uw(s,c,p){if(s=Ot(s),s&&(p||c===n))return s.replace(_c,"");if(!s||!(c=Rn(c)))return s;var C=hr(s),y=lf(C,hr(c));return ai(C,y).join("")}function dw(s,c){var p=oe,C=ie;if(zt(c)){var y="separator"in c?c.separator:y;p="length"in c?at(c.length):p,C="omission"in c?Rn(c.omission):C}s=Ot(s);var R=s.length;if(Ki(s)){var P=hr(s);R=P.length}if(p>=R)return s;var K=p-Vi(C);if(K<1)return C;var q=P?ai(P,0,K).join(""):s.slice(0,K);if(y===n)return q+C;if(P&&(K+=q.length-K),fu(y)){if(s.slice(K).search(y)){var de,_e=q;for(y.global||(y=Sc(y.source,Ot(L_.exec(y))+"g")),y.lastIndex=0;de=y.exec(_e);)var pe=de.index;q=q.slice(0,pe===n?K:pe)}}else if(s.indexOf(Rn(y),K)!=K){var Le=q.lastIndexOf(y);Le>-1&&(q=q.slice(0,Le))}return q+C}function _w(s){return s=Ot(s),s&&wm.test(s)?s.replace(O_,z1):s}var fw=to(function(s,c,p){return s+(p?" ":"")+c.toUpperCase()}),vu=Jf("toUpperCase");function Zg(s,c,p){return s=Ot(s),c=p?n:c,c===n?U1(s)?B1(s):x1(s):s.match(c)||[]}var Qg=dt(function(s,c){try{return Nn(s,n,c)}catch(p){return _u(p)?p:new tt(p)}}),gw=$r(function(s,c){return Vn(c,function(p){p=Ar(p),Ur(s,p,uu(s[p],s))}),s});function hw(s){var c=s==null?0:s.length,p=je();return s=c?Pt(s,function(C){if(typeof C[1]!="function")throw new Xn(a);return[p(C[0]),C[1]]}):[],dt(function(C){for(var y=-1;++y<c;){var R=s[y];if(Nn(R[0],this,C))return Nn(R[1],this,C)}})}function vw(s){return zE(Zn(s,h))}function pu(s){return function(){return s}}function pw(s,c){return s==null||s!==s?c:s}var mw=tg(),Ew=tg(!0);function xn(s){return s}function mu(s){return Df(typeof s=="function"?s:Zn(s,h))}function Cw(s){return Tf(Zn(s,h))}function bw(s,c){return kf(s,Zn(c,h))}var Iw=dt(function(s,c){return function(p){return is(p,s,c)}}),ww=dt(function(s,c){return function(p){return is(s,p,c)}});function Eu(s,c,p){var C=Jt(c),y=ya(c,C);p==null&&!(zt(c)&&(y.length||!C.length))&&(p=c,c=s,s=this,y=ya(c,Jt(c)));var R=!(zt(p)&&"chain"in p)||!!p.chain,P=Pr(s);return Vn(y,function(K){var q=c[K];s[K]=q,P&&(s.prototype[K]=function(){var de=this.__chain__;if(R||de){var _e=s(this.__wrapped__),pe=_e.__actions__=yn(this.__actions__);return pe.push({func:q,args:arguments,thisArg:s}),_e.__chain__=de,_e}return q.apply(s,ti([this.value()],arguments))})}),s}function yw(){return sn._===this&&(sn._=q1),this}function Cu(){}function Ow(s){return s=at(s),dt(function(c){return Mf(c,s)})}var Aw=Zc(Pt),xw=Zc(tf),Lw=Zc(Ic);function Jg(s){return iu(s)?wc(Ar(s)):i0(s)}function Sw(s){return function(c){return s==null?n:Ai(s,c)}}var Nw=rg(),Dw=rg(!0);function bu(){return[]}function Iu(){return!1}function Rw(){return{}}function Tw(){return""}function kw(){return!0}function Mw(s,c){if(s=at(s),s<1||s>Se)return[];var p=$e,C=dn(s,$e);c=je(c),s-=$e;for(var y=Ac(C,c);++p<s;)c(p);return y}function Uw(s){return nt(s)?Pt(s,Ar):Tn(s)?[s]:yn(Eg(Ot(s)))}function Gw(s){var c=++V1;return Ot(s)+c}var $w=Na(function(s,c){return s+c},0),Fw=Qc("ceil"),Pw=Na(function(s,c){return s/c},1),zw=Qc("floor");function Hw(s){return s&&s.length?wa(s,xn,Gc):n}function Ww(s,c){return s&&s.length?wa(s,je(c,2),Gc):n}function Bw(s){return of(s,xn)}function Yw(s,c){return of(s,je(c,2))}function jw(s){return s&&s.length?wa(s,xn,zc):n}function Kw(s,c){return s&&s.length?wa(s,je(c,2),zc):n}var Vw=Na(function(s,c){return s*c},1),Xw=Qc("round"),qw=Na(function(s,c){return s-c},0);function Zw(s){return s&&s.length?Oc(s,xn):0}function Qw(s,c){return s&&s.length?Oc(s,je(c,2)):0}return N.after=Cb,N.ary=Ng,N.assign=aI,N.assignIn=Bg,N.assignInWith=Wa,N.assignWith=lI,N.at=cI,N.before=Dg,N.bind=uu,N.bindAll=gw,N.bindKey=Rg,N.castArray=Rb,N.chain=xg,N.chunk=z0,N.compact=H0,N.concat=W0,N.cond=hw,N.conforms=vw,N.constant=pu,N.countBy=ZC,N.create=uI,N.curry=Tg,N.curryRight=kg,N.debounce=Mg,N.defaults=dI,N.defaultsDeep=_I,N.defer=bb,N.delay=Ib,N.difference=B0,N.differenceBy=Y0,N.differenceWith=j0,N.drop=K0,N.dropRight=V0,N.dropRightWhile=X0,N.dropWhile=q0,N.fill=Z0,N.filter=JC,N.flatMap=nb,N.flatMapDeep=rb,N.flatMapDepth=ib,N.flatten=wg,N.flattenDeep=Q0,N.flattenDepth=J0,N.flip=wb,N.flow=mw,N.flowRight=Ew,N.fromPairs=eC,N.functions=EI,N.functionsIn=CI,N.groupBy=ob,N.initial=nC,N.intersection=rC,N.intersectionBy=iC,N.intersectionWith=oC,N.invert=II,N.invertBy=wI,N.invokeMap=ab,N.iteratee=mu,N.keyBy=lb,N.keys=Jt,N.keysIn=An,N.map=Ga,N.mapKeys=OI,N.mapValues=AI,N.matches=Cw,N.matchesProperty=bw,N.memoize=Fa,N.merge=xI,N.mergeWith=Yg,N.method=Iw,N.methodOf=ww,N.mixin=Eu,N.negate=Pa,N.nthArg=Ow,N.omit=LI,N.omitBy=SI,N.once=yb,N.orderBy=cb,N.over=Aw,N.overArgs=Ob,N.overEvery=xw,N.overSome=Lw,N.partial=du,N.partialRight=Ug,N.partition=ub,N.pick=NI,N.pickBy=jg,N.property=Jg,N.propertyOf=Sw,N.pull=cC,N.pullAll=Og,N.pullAllBy=uC,N.pullAllWith=dC,N.pullAt=_C,N.range=Nw,N.rangeRight=Dw,N.rearg=Ab,N.reject=fb,N.remove=fC,N.rest=xb,N.reverse=lu,N.sampleSize=hb,N.set=RI,N.setWith=TI,N.shuffle=vb,N.slice=gC,N.sortBy=Eb,N.sortedUniq=bC,N.sortedUniqBy=IC,N.split=nw,N.spread=Lb,N.tail=wC,N.take=yC,N.takeRight=OC,N.takeRightWhile=AC,N.takeWhile=xC,N.tap=HC,N.throttle=Sb,N.thru=Ua,N.toArray=zg,N.toPairs=Kg,N.toPairsIn=Vg,N.toPath=Uw,N.toPlainObject=Wg,N.transform=kI,N.unary=Nb,N.union=LC,N.unionBy=SC,N.unionWith=NC,N.uniq=DC,N.uniqBy=RC,N.uniqWith=TC,N.unset=MI,N.unzip=cu,N.unzipWith=Ag,N.update=UI,N.updateWith=GI,N.values=io,N.valuesIn=$I,N.without=kC,N.words=Zg,N.wrap=Db,N.xor=MC,N.xorBy=UC,N.xorWith=GC,N.zip=$C,N.zipObject=FC,N.zipObjectDeep=PC,N.zipWith=zC,N.entries=Kg,N.entriesIn=Vg,N.extend=Bg,N.extendWith=Wa,Eu(N,N),N.add=$w,N.attempt=Qg,N.camelCase=HI,N.capitalize=Xg,N.ceil=Fw,N.clamp=FI,N.clone=Tb,N.cloneDeep=Mb,N.cloneDeepWith=Ub,N.cloneWith=kb,N.conformsTo=Gb,N.deburr=qg,N.defaultTo=pw,N.divide=Pw,N.endsWith=WI,N.eq=pr,N.escape=BI,N.escapeRegExp=YI,N.every=QC,N.find=eb,N.findIndex=bg,N.findKey=fI,N.findLast=tb,N.findLastIndex=Ig,N.findLastKey=gI,N.floor=zw,N.forEach=Lg,N.forEachRight=Sg,N.forIn=hI,N.forInRight=vI,N.forOwn=pI,N.forOwnRight=mI,N.get=gu,N.gt=$b,N.gte=Fb,N.has=bI,N.hasIn=hu,N.head=yg,N.identity=xn,N.includes=sb,N.indexOf=tC,N.inRange=PI,N.invoke=yI,N.isArguments=Si,N.isArray=nt,N.isArrayBuffer=Pb,N.isArrayLike=On,N.isArrayLikeObject=jt,N.isBoolean=zb,N.isBuffer=li,N.isDate=Hb,N.isElement=Wb,N.isEmpty=Bb,N.isEqual=Yb,N.isEqualWith=jb,N.isError=_u,N.isFinite=Kb,N.isFunction=Pr,N.isInteger=Gg,N.isLength=za,N.isMap=$g,N.isMatch=Vb,N.isMatchWith=Xb,N.isNaN=qb,N.isNative=Zb,N.isNil=Jb,N.isNull=Qb,N.isNumber=Fg,N.isObject=zt,N.isObjectLike=Bt,N.isPlainObject=us,N.isRegExp=fu,N.isSafeInteger=eI,N.isSet=Pg,N.isString=Ha,N.isSymbol=Tn,N.isTypedArray=ro,N.isUndefined=tI,N.isWeakMap=nI,N.isWeakSet=rI,N.join=sC,N.kebabCase=jI,N.last=Jn,N.lastIndexOf=aC,N.lowerCase=KI,N.lowerFirst=VI,N.lt=iI,N.lte=oI,N.max=Hw,N.maxBy=Ww,N.mean=Bw,N.meanBy=Yw,N.min=jw,N.minBy=Kw,N.stubArray=bu,N.stubFalse=Iu,N.stubObject=Rw,N.stubString=Tw,N.stubTrue=kw,N.multiply=Vw,N.nth=lC,N.noConflict=yw,N.noop=Cu,N.now=$a,N.pad=XI,N.padEnd=qI,N.padStart=ZI,N.parseInt=QI,N.random=zI,N.reduce=db,N.reduceRight=_b,N.repeat=JI,N.replace=ew,N.result=DI,N.round=Xw,N.runInContext=V,N.sample=gb,N.size=pb,N.snakeCase=tw,N.some=mb,N.sortedIndex=hC,N.sortedIndexBy=vC,N.sortedIndexOf=pC,N.sortedLastIndex=mC,N.sortedLastIndexBy=EC,N.sortedLastIndexOf=CC,N.startCase=rw,N.startsWith=iw,N.subtract=qw,N.sum=Zw,N.sumBy=Qw,N.template=ow,N.times=Mw,N.toFinite=zr,N.toInteger=at,N.toLength=Hg,N.toLower=sw,N.toNumber=er,N.toSafeInteger=sI,N.toString=Ot,N.toUpper=aw,N.trim=lw,N.trimEnd=cw,N.trimStart=uw,N.truncate=dw,N.unescape=_w,N.uniqueId=Gw,N.upperCase=fw,N.upperFirst=vu,N.each=Lg,N.eachRight=Sg,N.first=yg,Eu(N,function(){var s={};return yr(N,function(c,p){At.call(N.prototype,p)||(s[p]=c)}),s}(),{chain:!1}),N.VERSION=r,Vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){N[s].placeholder=N}),Vn(["drop","take"],function(s,c){ht.prototype[s]=function(p){p=p===n?1:Zt(at(p),0);var C=this.__filtered__&&!c?new ht(this):this.clone();return C.__filtered__?C.__takeCount__=dn(p,C.__takeCount__):C.__views__.push({size:dn(p,$e),type:s+(C.__dir__<0?"Right":"")}),C},ht.prototype[s+"Right"]=function(p){return this.reverse()[s](p).reverse()}}),Vn(["filter","map","takeWhile"],function(s,c){var p=c+1,C=p==Z||p==we;ht.prototype[s]=function(y){var R=this.clone();return R.__iteratees__.push({iteratee:je(y,3),type:p}),R.__filtered__=R.__filtered__||C,R}}),Vn(["head","last"],function(s,c){var p="take"+(c?"Right":"");ht.prototype[s]=function(){return this[p](1).value()[0]}}),Vn(["initial","tail"],function(s,c){var p="drop"+(c?"":"Right");ht.prototype[s]=function(){return this.__filtered__?new ht(this):this[p](1)}}),ht.prototype.compact=function(){return this.filter(xn)},ht.prototype.find=function(s){return this.filter(s).head()},ht.prototype.findLast=function(s){return this.reverse().find(s)},ht.prototype.invokeMap=dt(function(s,c){return typeof s=="function"?new ht(this):this.map(function(p){return is(p,s,c)})}),ht.prototype.reject=function(s){return this.filter(Pa(je(s)))},ht.prototype.slice=function(s,c){s=at(s);var p=this;return p.__filtered__&&(s>0||c<0)?new ht(p):(s<0?p=p.takeRight(-s):s&&(p=p.drop(s)),c!==n&&(c=at(c),p=c<0?p.dropRight(-c):p.take(c-s)),p)},ht.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ht.prototype.toArray=function(){return this.take($e)},yr(ht.prototype,function(s,c){var p=/^(?:filter|find|map|reject)|While$/.test(c),C=/^(?:head|last)$/.test(c),y=N[C?"take"+(c=="last"?"Right":""):c],R=C||/^find/.test(c);y&&(N.prototype[c]=function(){var P=this.__wrapped__,K=C?[1]:arguments,q=P instanceof ht,de=K[0],_e=q||nt(P),pe=function(gt){var vt=y.apply(N,ti([gt],K));return C&&Le?vt[0]:vt};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var Le=this.__chain__,Fe=!!this.__actions__.length,Ve=R&&!Le,ct=q&&!Fe;if(!R&&_e){P=ct?P:new ht(this);var Xe=s.apply(P,K);return Xe.__actions__.push({func:Ua,args:[pe],thisArg:n}),new qn(Xe,Le)}return Ve&&ct?s.apply(this,K):(Xe=this.thru(pe),Ve?C?Xe.value()[0]:Xe.value():Xe)})}),Vn(["pop","push","shift","sort","splice","unshift"],function(s){var c=la[s],p=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);N.prototype[s]=function(){var y=arguments;if(C&&!this.__chain__){var R=this.value();return c.apply(nt(R)?R:[],y)}return this[p](function(P){return c.apply(nt(P)?P:[],y)})}}),yr(ht.prototype,function(s,c){var p=N[c];if(p){var C=p.name+"";At.call(Qi,C)||(Qi[C]=[]),Qi[C].push({name:c,func:p})}}),Qi[Sa(n,w).name]=[{name:"wrapper",func:n}],ht.prototype.clone=_E,ht.prototype.reverse=fE,ht.prototype.value=gE,N.prototype.at=WC,N.prototype.chain=BC,N.prototype.commit=YC,N.prototype.next=jC,N.prototype.plant=VC,N.prototype.reverse=XC,N.prototype.toJSON=N.prototype.valueOf=N.prototype.value=qC,N.prototype.first=N.prototype.head,Zo&&(N.prototype[Zo]=KC),N},Xi=Y1();bi?((bi.exports=Xi)._=Xi,mc._=Xi):sn._=Xi}).call(HN)}(ps,ps.exports)),ps.exports}var Lt=WN();function Yr(t){return Array.isArray?Array.isArray(t):Kv(t)==="[object Array]"}function BN(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function YN(t){return t==null?"":BN(t)}function Sr(t){return typeof t=="string"}function Yv(t){return typeof t=="number"}function jN(t){return t===!0||t===!1||KN(t)&&Kv(t)=="[object Boolean]"}function jv(t){return typeof t=="object"}function KN(t){return jv(t)&&t!==null}function $n(t){return t!=null}function xu(t){return!t.trim().length}function Kv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const VN="Incorrect 'index' type",XN=t=>`Invalid value for key ${t}`,qN=t=>`Pattern length exceeds max of ${t}.`,ZN=t=>`Missing ${t} property in key`,QN=t=>`Property 'weight' in key '${t}' must be a positive integer`,fh=Object.prototype.hasOwnProperty;class JN{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Vv(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Vv(t){let e=null,n=null,r=null,i=1,o=null;if(Sr(t)||Yr(t))r=t,e=gh(t),n=Vu(t);else{if(!fh.call(t,"name"))throw new Error(ZN("name"));const a=t.name;if(r=a,fh.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(QN(a));e=gh(a),n=Vu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function gh(t){return Yr(t)?t:t.split(".")}function Vu(t){return Yr(t)?t.join("."):t}function eD(t,e){let n=[],r=!1;const i=(o,a,l)=>{if($n(o))if(!a[l])n.push(o);else{let u=a[l];const d=o[u];if(!$n(d))return;if(l===a.length-1&&(Sr(d)||Yv(d)||jN(d)))n.push(YN(d));else if(Yr(d)){r=!0;for(let g=0,h=d.length;g<h;g+=1)i(d[g],a,l+1)}else a.length&&i(d,a,l+1)}};return i(t,Sr(e)?e.split("."):e,0),r?n:n[0]}const tD={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},nD={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},rD={location:0,threshold:.6,distance:100},iD={useExtendedSearch:!1,getFn:eD,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Qe={...nD,...tD,...rD,...iD};const oD=/[^ ]+/g;function sD(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(oD).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Vd{constructor({getFn:e=Qe.getFn,fieldNormWeight:n=Qe.fieldNormWeight}={}){this.norm=sD(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Sr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Sr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!$n(e)||xu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if($n(a)){if(Yr(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:d,value:g}=u.pop();if($n(g))if(Sr(g)&&!xu(g)){let h={v:g,i:d,n:this.norm.get(g)};l.push(h)}else Yr(g)&&g.forEach((h,v)=>{u.push({nestedArrIndex:v,value:h})})}r.$[o]=l}else if(Sr(a)&&!xu(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Xv(t,e,{getFn:n=Qe.getFn,fieldNormWeight:r=Qe.fieldNormWeight}={}){const i=new Vd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Vv)),i.setSources(e),i.create(),i}function aD(t,{getFn:e=Qe.getFn,fieldNormWeight:n=Qe.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Vd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function ja(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Qe.distance,ignoreLocation:o=Qe.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function lD(t=[],e=Qe.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Di=32;function cD(t,e,n,{location:r=Qe.location,distance:i=Qe.distance,threshold:o=Qe.threshold,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:l=Qe.minMatchCharLength,includeMatches:u=Qe.includeMatches,ignoreLocation:d=Qe.ignoreLocation}={}){if(e.length>Di)throw new Error(qN(Di));const g=e.length,h=t.length,v=Math.max(0,Math.min(r,h));let m=o,E=v;const I=l>1||u,b=I?Array(h):[];let w;for(;(w=t.indexOf(e,E))>-1;){let M=ja(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:d});if(m=Math.min(M,m),E=w+g,I){let $=0;for(;$<g;)b[w+$]=1,$+=1}}E=-1;let A=[],T=1,k=g+h;const G=1<<g-1;for(let M=0;M<g;M+=1){let $=0,J=k;for(;$<J;)ja(e,{errors:M,currentLocation:v+J,expectedLocation:v,distance:i,ignoreLocation:d})<=m?$=J:k=J,J=Math.floor((k-$)/2+$);k=J;let oe=Math.max(1,v-J+1),ie=a?h:Math.min(v+J,h)+g,ce=Array(ie+2);ce[ie+1]=(1<<M)-1;for(let Z=ie;Z>=oe;Z-=1){let Ae=Z-1,we=n[t.charAt(Ae)];if(I&&(b[Ae]=+!!we),ce[Z]=(ce[Z+1]<<1|1)&we,M&&(ce[Z]|=(A[Z+1]|A[Z])<<1|1|A[Z+1]),ce[Z]&G&&(T=ja(e,{errors:M,currentLocation:Ae,expectedLocation:v,distance:i,ignoreLocation:d}),T<=m)){if(m=T,E=Ae,E<=v)break;oe=Math.max(1,2*v-E)}}if(ja(e,{errors:M+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:d})>m)break;A=ce}const W={isMatch:E>=0,score:Math.max(.001,T)};if(I){const M=lD(b,l);M.length?u&&(W.indices=M):W.isMatch=!1}return W}function uD(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class qv{constructor(e,{location:n=Qe.location,threshold:r=Qe.threshold,distance:i=Qe.distance,includeMatches:o=Qe.includeMatches,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:l=Qe.minMatchCharLength,isCaseSensitive:u=Qe.isCaseSensitive,ignoreLocation:d=Qe.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(v,m)=>{this.chunks.push({pattern:v,alphabet:uD(v),startIndex:m})},h=this.pattern.length;if(h>Di){let v=0;const m=h%Di,E=h-m;for(;v<E;)g(this.pattern.substr(v,Di),v),v+=Di;if(m){const I=h-Di;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:d}=this.options;let g=[],h=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:w,score:A,indices:T}=cD(e,E,I,{location:i+b,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:d});w&&(v=!0),h+=A,w&&T&&(g=[...g,...T])});let m={isMatch:v,score:v?h/this.chunks.length:1};return v&&r&&(m.indices=g),m}}class vi{constructor(e){this.pattern=e}static isMultiMatch(e){return hh(e,this.multiRegex)}static isSingleMatch(e){return hh(e,this.singleRegex)}search(){}}function hh(t,e){const n=t.match(e);return n?n[1]:null}class dD extends vi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class _D extends vi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class fD extends vi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class gD extends vi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class hD extends vi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class vD extends vi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Zv extends vi{constructor(e,{location:n=Qe.location,threshold:r=Qe.threshold,distance:i=Qe.distance,includeMatches:o=Qe.includeMatches,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:l=Qe.minMatchCharLength,isCaseSensitive:u=Qe.isCaseSensitive,ignoreLocation:d=Qe.ignoreLocation}={}){super(e),this._bitapSearch=new qv(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Qv extends vi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Xu=[dD,Qv,fD,gD,vD,hD,_D,Zv],vh=Xu.length,pD=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,mD="|";function ED(t,e={}){return t.split(mD).map(n=>{let r=n.trim().split(pD).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,d=-1;for(;!u&&++d<vh;){const g=Xu[d];let h=g.isMultiMatch(l);h&&(i.push(new g(h,e)),u=!0)}if(!u)for(d=-1;++d<vh;){const g=Xu[d];let h=g.isSingleMatch(l);if(h){i.push(new g(h,e));break}}}return i})}const CD=new Set([Zv.type,Qv.type]);class bD{constructor(e,{isCaseSensitive:n=Qe.isCaseSensitive,includeMatches:r=Qe.includeMatches,minMatchCharLength:i=Qe.minMatchCharLength,ignoreLocation:o=Qe.ignoreLocation,findAllMatches:a=Qe.findAllMatches,location:l=Qe.location,threshold:u=Qe.threshold,distance:d=Qe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=ED(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,d=n.length;u<d;u+=1){const g=n[u];a.length=0,o=0;for(let h=0,v=g.length;h<v;h+=1){const m=g[h],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(o+=1,l+=b,r){const w=m.constructor.type;CD.has(w)?a=[...a,...I]:a.push(I)}}else{l=0,o=0,a.length=0;break}}if(o){let h={isMatch:!0,score:l/o};return r&&(h.indices=a),h}}return{isMatch:!1,score:1}}}const qu=[];function ID(...t){qu.push(...t)}function Zu(t,e){for(let n=0,r=qu.length;n<r;n+=1){let i=qu[n];if(i.condition(t,e))return new i(t,e)}return new qv(t,e)}const ul={AND:"$and",OR:"$or"},Qu={PATH:"$path",PATTERN:"$val"},Ju=t=>!!(t[ul.AND]||t[ul.OR]),wD=t=>!!t[Qu.PATH],yD=t=>!Yr(t)&&jv(t)&&!Ju(t),ph=t=>({[ul.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Jv(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=wD(i);if(!a&&o.length>1&&!Ju(i))return r(ph(i));if(yD(i)){const u=a?i[Qu.PATH]:o[0],d=a?i[Qu.PATTERN]:i[u];if(!Sr(d))throw new Error(XN(u));const g={keyId:Vu(u),pattern:d};return n&&(g.searcher=Zu(d,e)),g}let l={children:[],operator:o[0]};return o.forEach(u=>{const d=i[u];Yr(d)&&d.forEach(g=>{l.children.push(r(g))})}),l};return Ju(t)||(t=ph(t)),r(t)}function OD(t,{ignoreFieldNorm:e=Qe.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function AD(t,e){const n=t.matches;e.matches=[],$n(n)&&n.forEach(r=>{if(!$n(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function xD(t,e){e.score=t.score}function LD(t,e,{includeMatches:n=Qe.includeMatches,includeScore:r=Qe.includeScore}={}){const i=[];return n&&i.push(AD),r&&i.push(xD),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Mo{constructor(e,n={},r){this.options={...Qe,...n},this.options.useExtendedSearch,this._keyStore=new JN(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Vd))throw new Error(VN);this._myIndex=n||Xv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){$n(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=Sr(e)?Sr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return OD(u,{ignoreFieldNorm:l}),o&&u.sort(a),Yv(n)&&n>-1&&(u=u.slice(0,n)),LD(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Zu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!$n(o))return;const{isMatch:u,score:d,indices:g}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:d,value:o,norm:l,indices:g}]})}),i}_searchLogical(e){const n=Jv(e,this.options),r=(l,u,d)=>{if(!l.children){const{keyId:h,searcher:v}=l,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:v});return m&&m.length?[{idx:d,item:u,matches:m}]:[]}const g=[];for(let h=0,v=l.children.length;h<v;h+=1){const m=l.children[h],E=r(m,u,d);if(E.length)g.push(...E);else if(l.operator===ul.AND)return[]}return g},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if($n(l)){let d=r(n,l,u);d.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),d.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),a}_searchObjectList(e){const n=Zu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!$n(a))return;let u=[];r.forEach((d,g)=>{u.push(...this._findMatches({key:d,value:a[g],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!$n(n))return[];let i=[];if(Yr(n))n.forEach(({v:o,i:a,n:l})=>{if(!$n(o))return;const{isMatch:u,score:d,indices:g}=r.searchIn(o);u&&i.push({score:d,key:e,value:o,idx:a,norm:l,indices:g})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:d}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:d})}return i}}Mo.version="7.0.0";Mo.createIndex=Xv;Mo.parseIndex=aD;Mo.config=Qe;Mo.parseQuery=Jv;ID(bD);function Dl(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function SD(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function ND(t){return new Mo(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function DD(t,e,n){const r=SD(e,n);return t.length===0?r:ND(r).search(t).map(i=>i.item)}function RD(t,e){return Dl(t,e).shape}function cn(t,e){const n=RD(t,e);return n?ju(n):void 0}function Rl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Kd(e)}function TD(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return zN(e)}function kD(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Hs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Kd(i)})}function MD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Kd(o)})})}function qr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function ep(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Hv(e)}function UD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Hv(r)})}function GD(t,e){const n=t.shape;return n===void 0?void 0:{...cn(e,Ht),...n}}function tp(t,e,n){return{toolId:t,cells:e,value:n}}function $D(t,e){const n=Hs(e,"cells"),r=qr(e);return tp(t,n,r)}function np(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Ze(o,e)&&a>=r)}function FD(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Ps(r[i-1],e)))return t;const a=np(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function rp(t,e){return{toolId:t,cells:e,lines:[]}}function PD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),al(n),{...t,cells:n};const r=n.some(o=>Ze(o,e)),i=n.some(o=>Ps(o,e));return n.length>0&&!r&&i?(n.push(e),al(n),{...t,cells:n}):t}function zD(t,e,n){const r=t.cells.some(d=>Ze(d,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return ed(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return ed(t,e);const l=np(o,e,!1);return(o.length===0?!0:Ps(o[a-1],e))?l>=0?(o.length=l+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function ed(t,e){return t.cells.some(r=>Ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function HD(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function WD(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function BD(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function YD(t,e){const n=Hs(e,"cells"),r=MD(e),i=rp(t,n);return i.lines=r,i}function ip(t,e,n=""){return{toolId:t,cells:e,value:n}}function jD(t,e,n=!1){const r=Bv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function KD(t,e){return{...t,value:e}}function VD(t,e){const n=Hs(e,"cells"),r=qr(e);return ip(t,n,r)}function td(t,e,n){return{toolId:t,cells:e,value:n}}function XD(t,e){const n=Hs(e,"cells"),r=qr(e);return td(t,n,r)}function nd(t,e,n){return{toolId:t,cells:e,value:n}}function qD(t,e){const n=Hs(e,"cells"),r=qr(e);return nd(t,n,r)}function rd(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function ZD(t,e){const n=Rl(e),r=ep(e),i=qr(e);return rd(t,n,r,i)}function id(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function QD(t,e){const n=Rl(e),r=qr(e);return id(t,n,r)}function od(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function JD(t,e){const n=Rl(e),r=ep(e);return od(t,n,r)}function sd(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function eR(t,e){const n=Rl(e),r=UD(e),i=sd(t,n,We.N);return i.directions=r,i}function ad(t,e,n=""){return{toolId:t,cell:e,value:n}}function tR(t,e){const n=TD(e),r=qr(e);return ad(t,n,r)}function op(t,e=""){return{toolId:t,value:e}}function nR(t,e){const n=qr(e);return op(t,n)}function rR(t,e,n=""){return{toolId:t,coords:e,value:n}}function iR(t,e){const n=kD(e,"coords"),r=qr(e);return rR(t,n,r)}function Uo(t,e){return{...t,value:e}}class Go extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const i=r.constraints[n];return i||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);!i||!i.constraints||(i.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const i=this.get(e);!i||!i.constraints||i.constraints[n]&&(i.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];if(r.constraints)for(const a of Object.values(r.constraints))i.push(uR(a));const o={tool_id:n,constraints:i};if(r.negative_constraints)for(const[a,l]of Object.entries(r.negative_constraints))l&&(o.negative_constraints||(o.negative_constraints={}),o.negative_constraints[a]=l);e[n]=o}return e}static fromJson(e){const n=new Go;if(!e)return n;for(const r of Object.values(e)){const i=r.tool_id;if(typeof i!="string")throw TypeError("tool_id_str must be of type string.");const o=Uy(i);if(o===void 0||!Object.keys(Ht).includes(o))continue;n.addToDict(o);const a=n.get(o);if(!a)continue;const l=r.negative_constraints;if(l){a.negative_constraints={};for(const[d,g]of Object.entries(l))a.negative_constraints[d]=g}const u=r.constraints;for(const d of u){let g=null;if(Gy(o,Il)?g=QD(o,d):Fi(o)?g=JD(o,d):bo(o)?g=eR(o,d):Io(o)?g=qD(o,d):Ns(o)?g=XD(o,d):wo(o)?g=$D(o,d):Lv(o)?g=iR(o,d):yo(o)?g=YD(o,d):Oo(o)?g=VD(o,d):jr(o)?g=ZD(o,d):Sv(o)?g=nR(o,d):Ds(o)&&(g=tR(o,d)),g!==null){const h=Lt.uniqueId(),v=GD(d,o);g.shape=v,n.addConstraint(o,h,g)}}}return n}}function _o(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=i[0];if(Ze(o.cell,n))return[a,o]}return null}function mh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(n.every(l=>o.cells.some(u=>Ze(l,u))))return i}return null}function Eh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=o.cells[o.cells.length-1];if(Ze(n,a))return i}return null}function oR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Ze(l,n)))return[i[0],o]}return null}function sR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints))if(i[1].cells.some(l=>Ze(l,n)))return i;return null}function Ch(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Ze(l,n)))return[i[0],o]}return null}function aR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[i,o]of Object.entries(r.constraints)){const a=o,l=a.lines.findIndex(u=>u.some((d,g)=>Ze(d,n)&&g>0));if(l>=0)return{id:i,arrow:a,matchLineIdx:l}}return null}function bh(t,e,n,r){const i=t.get(e);if(!i||!i.constraints)return null;for(const o of Object.entries(i.constraints)){const a=o[1],l=o[0];if(Ze(n,a.cell)&&r===a.direction)return[l,a]}return null}function Ih(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=i[0];if(Ze(n,o.cell))return[a,o]}return null}function lR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Ze(l,n))||o.cells2.some(l=>Ze(l,n)))return[i[0],o]}return null}function cR(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const i of Object.entries(n.constraints)){const o=i[1];r.add(o.value)}return r}function uR(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ba(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ba(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ba(i)));e.lines=n}if("cell"in t){const n=Ba(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=cn(t.toolId,Ht),r=Fy(t.shape,n);r&&(e.shape=r)}return e}function wh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function sp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function ld(t){const e=new Option().style;return e.color=t,e.color!==""}function Lu(t){return sp(t)||ld(t)?t:ld(`#${t}`)?`#${t}`:void 0}function dl(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}const dR=t=>btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function E7(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");for(;e.length%4!==0;)e+="=";return atob(e)}function ap(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function _l(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function _R(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const yh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function fR(t){return t in yh?yh[t]:null}function lp(t,e,n){if(n===null)return null;const r=fR(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Su(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class gR{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Su(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Su(this.cornerMarks,e))}enterHighlight(e){this.highlights=Su(this.highlights,e)}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==lp(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class $o{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const l=new gR(i,a);if(r){const u=lp(i,a,e);l.region=u}o.push(l)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],l=this.getCell(o,a);l&&!l.outside&&n.push(l)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],l=this.getCell(o,a);l&&!l.outside&&n.push(l)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],l=this.getCell(o,a);l&&!l.outside&&n.push(l)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return ap(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(l=>l===o))return n;for(const l of i){const u=this.getRegion(l);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=zs(r);let[l,u]=[e+o,n+a];for(;0<=l&&l<this.nRows&&0<=u&&u<this.nCols;){const d=this.grid[l][u];i.push(d),[l,u]=[l+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const l=a==null?void 0:a.toJson(n);i.push(l)}e.push(i)}return e}static fromJSON(e,n,r){const i=new $o(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const l=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,l)}return i}}function hR(t){const e=t.grid,n=t.elementsDict,r={};r.puzzleInfo=t.puzzleMeta,r.nRows=e.nRows,r.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),o=Lt.range(1,i+1);t.valid_digits&&!_R(o,t.valid_digits)&&(r.valid_digits=t.valid_digits),r.grid=e.toJSON(),t.solution&&(r.solution=t.solution);const a=n.toJSON();return Object.keys(a).length&&(r.local_constraints=a),r}function vR(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo;let i={};r&&(i=r);const o=t.valid_digits,a=t.grid,l=$o.fromJSON(e,n,a),u=Math.min(l.nRows,l.nRows);let d=Lt.range(1,u+1);o!==void 0&&(d=o);const g=t.solution,h=t.local_constraints,v=Go.fromJson(h);return{puzzleMeta:i,solution:g,grid:l,valid_digits:d,elementsDict:v}}function C7(){const t=new $o(9,9),e=new Go;return{grid:t,solution:void 0,valid_digits:Lt.range(1,10),puzzleMeta:{},elementsDict:e}}var ms=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(ms||{});const pR=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),mR=()=>({type:"CLEAR"}),ER=t=>({type:"DRAG",payload:t}),cd=t=>({type:"SET",payload:t}),CR=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Xd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Lr=(t,e,n)=>{const r=[...t];return al(r),{cells:r,lastCell:e,mode:n}};function bR(t,e,n){if(e===null)return Xd();if(n==="RESETTING")return Lr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ze(e,i));if(n==="SELECTING")return r!==-1?t:Lr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Lr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Lr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Lr(i,null,"DESELECTING")}return t}function IR(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:Lr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Lr(r,null,t.mode)}return t}function wR(t,e){return{...t,cells:e}}function yR(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ze(e,i))!==-1?Lr([...t.cells],e,"SELECTING"):Lr([...t.cells,e],e,"SELECTING"):Lr([e],e,t.mode)}function cp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Xd();case"SET":return wR(t,e.payload);case"CLICK":return bR(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return IR(t,e.payload);case"ARROW_KEY":return yR(t,e.payload.cell,e.payload.selectionMode);default:return t}}function uo(t,e){return Ze(t.p1,e.p1)&&Ze(t.p2,e.p2)||Ze(t.p1,e.p2)&&Ze(t.p2,e.p1)}function OR(t,e){return Ze(t.p1,e.p2)&&Ze(t.p2,e.p1)}function up(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ze(t,e)}class Tl{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ze(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ze(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ze(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ze(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ze(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>uo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>uo(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&OR(r,e)&&this.draftLine.splice(n,1)}onDrag(e){up(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>uo(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>uo(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Tl;return Object.assign(e,this),e}}const Oh=t=>({type:"ADD_EDGE_MARKER",payload:t}),Ah=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ka=t=>({type:"ADD_CELL_MARKER",payload:t}),AR=t=>({type:"SET_CELL_MARKERS",payload:t}),xh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),xR=t=>({type:"DRAG",payload:t}),xs=t=>({type:"ADD_LINE_MARKERS",payload:t}),Lh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),qd=()=>({type:"RESET"});function LR(t,e){switch(e.type){case"RESET":return new Tl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function dp(){return{_undoStack:[],_redoStack:[]}}const Fo=Rt(dp());function SR(){Fo.update(()=>dp())}function tr(t,e=!0){Fo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function NR(t,e=!0){Fo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function _p(){Fo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function fp(){Fo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const fl=Rt(new Tl);function Dr(t){fl.update(e=>LR(e,t))}const gl=Rt(1);function Ni(t,e){return{execute:()=>{Dr(t)},unExecute:()=>{Dr(e)}}}const Gi=Rt(Xd());function lo(t){t&&Gi.update(e=>cp(e,t))}function Sh(t){t&&Gi.update(e=>cp(e,t))}function DR(t,e){return{execute:()=>{Sh(t)},unExecute:()=>{Sh(e)}}}const vo=Rt(null),kl=Rt(Co.SETTING),ud=Rt(!1),en=Rt(f.DIGIT),gp=Rt(f.DIGIT),Zd=Rt(Lt.range(1,10)),hn=Rt(new $o(9,9)),Pn=Rt(De(hn).getAllCells()),Zr=Rt({}),lt=Rt(new Go),Wt=Rt(null),Po=Rt(void 0),Ml=Rt(void 0);function RR(t){Zr.update(()=>t)}function zo(t){Wt.update(()=>t)}function Qd(t){Po.update(()=>t)}function Br(t){De(en)!==t&&(en.update(()=>t),zo(null))}function TR(){const t=De(gp);t&&Br(t)}function dd(t){gp.update(()=>t)}function kR(t){De(en)===t&&Br(f.DIGIT)}function MR(t){lt.update(e=>(e.removeFromDict(t),e)),Qd(void 0)}function Xt(t,e,n){lt.update(r=>(r.updateConstraint(t,e,n),r)),zo({id:e,constraint:n})}function Nu(t){const e=De(Wt);if(t=t?{...t}:void 0,Qd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Xt(r,e.id,n)}function pi(t,e){const r=De(lt).get(e);if(!r||!r.constraints)return;const i=r.constraints[t];i&&zo({id:t,constraint:i})}function UR(t,e,n){const r=new $o(t,e);hn.update(()=>r),Zd.update(()=>n),lt.update(()=>new Go),Zr.update(()=>({})),Jd(void 0),Pn.update(()=>r.getAllCells())}function GR(t){hn.update(()=>t.grid),Zr.update(()=>t.puzzleMeta),Jd(t.solution),Zd.update(()=>t.valid_digits),lt.update(()=>t.elementsDict),Pn.update(()=>t.grid.getAllCells())}function hp(){const t=De(hn);t.resetValues(),hn.update(()=>t),Pn.update(()=>t.getAllCells()),Dr(qd())}function hl(){SR(),Dr(qd()),Br(f.DIGIT);const t=mR();lo(t),Qd(void 0),zo(null)}const $R=Wn(lt,t=>{for(const e of t.values()){const n=e.tool_id;if(n===f.FOG_LIGHTS||n===f.CUSTOM_FOG_CLEARING)return!0}return!1}),mi=Wn([Sn,$R,kl,en],([t,e,n,r])=>{const i=t.hideFog,o=e,a=r,l=a===f.DIGIT||a===f.CORNER_PM||a===f.CENTER_PM||a===f.HIGHLIGHTS||a===f.PEN_TOOL;return!i&&o&&(l||n===Co.SOLVING)});Wn([Sn,kl],([t,e])=>!t.hideFog&&e===Co.SETTING);const Ws=Wn([hn,Zr,lt,Ml,Zd],([t,e,n,r,i])=>({grid:t,solution:r,puzzleMeta:e,valid_digits:i,elementsDict:n}));function Jd(t){Ml.update(()=>t)}var FR=ue('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function PR(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=FR(),o=j(i),a=j(o,!0);z(o);var l=F(o,2);z(i),ee(()=>rt(a,n())),Ne("click",l,function(...u){var d;(d=r())==null||d.apply(this,u)}),S(t,i)}var zR=ue('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Qr(t,e){se(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),i=L();function o(){n(!1),_(i).close()}D(()=>(_(i),X(n())),()=>{_(i)&&n()&&_(i).showModal()}),D(()=>(_(i),X(n())),()=>{_(i)&&!n()&&_(i).close()}),Ce();var a=zR(),l=j(a),u=j(l);PR(u,{get title(){return r()},closeCb:o});var d=F(u,2),g=j(d),h=j(g);wt(h,e,"default",{}),z(g),z(d),z(l),z(a),Ui(a,v=>O(i,v),()=>_(i)),Ne("click",l,Fn(function(v){xy.call(this,e,v)})),Ne("close",a,()=>{n(!1)}),Ne("click",a,Ay(Fn(()=>_(i).close()))),S(t,a),ae()}var HR=ue('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function WR(t,e){se(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=L(null);D(()=>(X(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),Ce();var o=HR(),a=F(j(o),2);gn(a),x(a,"spellcheck",!1),Ui(a,l=>O(i,l),()=>_(i)),z(o),rr(a,n),S(t,o),ae()}var BR=ue('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function YR(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);Qr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var l=BR(),u=j(l);WR(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var d=F(u,2),g=j(d),h=j(g);wt(h,e,"default",{}),z(g),z(d),z(l),S(o,l)},$$slots:{default:!0},$$legacy:!0})}var jR=ue('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function vp(t,e){let n=U(e,"isOpen",8,!0);var r=jR(),i=j(r);wt(i,e,"default",{}),z(r),ee(()=>{x(r,"aria-expanded",n()),xt(r,"closed",!n())}),S(t,r)}var KR=ue('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),VR=ue('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Ri(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var o=me(),a=te(o);{var l=d=>{var g=KR(),h=j(g),v=j(h),m=j(v,!0);z(v),z(h);var E=F(h,2),I=j(E);wt(I,e,"default",{}),z(E),z(g),ee(()=>rt(m,n())),S(d,g)},u=d=>{var g=VR(),h=j(g),v=j(h),m=j(v,!0);z(v),z(h);var E=F(h,2),I=j(E);wt(I,e,"default",{});var b=F(I,2);z(E),z(g),ee(()=>{rt(m,n()),xt(b,"open",r())}),Ne("click",g,()=>r(!r())),S(d,g)};Q(a,d=>{i()?d(u,!1):d(l)})}S(t,o)}var XR=ue('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),qR=ue('<ol class="svelte-cd45on"></ol>'),ZR=ue("<!> <!>",1);function QR(t,e){se(e,!1);const n=L();let r=U(e,"category",8),i=U(e,"addTool",8),o=U(e,"searchResults",8),a=L(!0);D(()=>(X(o()),X(r())),()=>{O(n,o().filter(g=>{var h,v;return(v=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:v.includes(r())}))}),Ce(),fe();var l=me(),u=te(l);{var d=g=>{var h=ZR(),v=te(h);Ri(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(a)},set isOpen(E){O(a,E)},$$legacy:!0});var m=F(v,2);vp(m,{get isOpen(){return _(a)},children:(E,I)=>{var b=qR();qe(b,5,()=>_(n),pt,(w,A)=>{let T=()=>_(A).key,k=()=>_(A).info;var G=XR(),W=j(G),M=j(W,!0);z(W),z(G),ee(()=>{var $;x(W,"title",($=k().meta)==null?void 0:$.description),rt(M,T())}),Ne("click",W,()=>{i()(T())}),S(w,G)}),z(b),S(E,b)},$$slots:{default:!0}}),S(g,h)};Q(u,g=>{_(n).length&&g(d)})}S(t,l),ae()}function JR(t,e){se(e,!1);const n=L();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),o=U(e,"categories",8),a=U(e,"filterFunc",8),l=U(e,"elementHandlers",8);D(()=>(X(r()),X(a()),X(l())),()=>{O(n,DD(r(),a(),l()))}),Ce(),fe();var u=me(),d=te(u);qe(d,1,o,pt,(g,h)=>{QR(g,{get category(){return _(h)},get searchResults(){return _(n)},get addTool(){return i()}})}),S(t,u),ae()}var e2=ue('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Ul(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=e2();x(i,"tabindex",0);var o=j(i),a=j(o);wt(a,e,"add-button",{}),z(o);var l=F(o,2),u=j(l),d=j(u);wt(d,e,"title-icon",{}),z(u);var g=F(u);z(l);var h=F(l,2),v=j(h);z(h),z(i),ee(()=>{rt(g,` ${r()??""}`),xt(v,"open",n())}),Ne("click",i,()=>n(!n())),Ne("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),S(t,i)}var t2=ue('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function n2(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function o(){i(!i())}Ul(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,l)=>{var u=t2();Ne("click",u,Fn(()=>o())),S(a,u)},"title-icon":(a,l)=>{var u=me(),d=te(u);wt(d,e,"title-icon",{}),S(a,u)}},$$legacy:!0})}var r2=ue('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),i2=ue('<div class="panel-container svelte-hixu4"><!> <!></div>');function Gl(t,e){let n=U(e,"isOpen",8,!0);var r=i2(),i=j(r);wt(i,e,"panel-header",{});var o=F(i,2);vp(o,{get isOpen(){return n()},children:(a,l)=>{var u=r2(),d=j(u);wt(d,e,"panel-content",{}),z(u),S(a,u)},$$slots:{default:!0}}),z(r),S(t,r)}var o2=ue("<!> <!>",1);function s2(t,e){se(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),o=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),l=L(!0),u=L(!1),d=L("");const g=h=>{O(u,!1),O(l,!0),i()(h)};fe(),Gl(t,{get isOpen(){return _(l)},set isOpen(h){O(l,h)},$$slots:{"panel-header":(h,v)=>{var m=o2(),E=te(m);n2(E,{get title(){return r()},get isOpen(){return _(l)},set isOpen(b){O(l,b)},get showModal(){return _(u)},set showModal(b){O(u,b)},$$slots:{"title-icon":(b,w)=>{var A=me(),T=te(A);wt(T,e,"title-icon",{}),S(b,A)}},$$legacy:!0});var I=F(E,2);YR(I,{get title(){return r()},get showModal(){return _(u)},set showModal(b){O(u,b)},get searchPattern(){return _(d)},set searchPattern(b){O(d,b)},children:(b,w)=>{JR(b,{get searchPattern(){return _(d)},get categories(){return n()},get filterFunc(){return o()},addTool:g,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),S(h,m)},"panel-content":(h,v)=>{var m=me(),E=te(m);wt(E,e,"panel-content",{}),S(h,m)}},$$legacy:!0}),ae()}var a2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function l2(t){var e=a2();S(t,e)}var co=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(co||{});const e_=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),t_=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),c2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),u2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),Nh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function d2(t){lt.update(e=>(e.addToDict(t),e))}function Bs(t,e){const n=De(Po);n&&(e.shape={...n}),lt.update(r=>(r.addConstraint(e.toolId,t,e),r)),zo({id:t,constraint:e})}function n_(t,e){e&&lt.update(n=>(n.removeConstraint(t,e),n))}function pp(t,e){lt.update(n=>(n.setElement(t,e),n))}function Dh(t){t.type===co.ADD_LOCAL_CONSTRAINT?Bs(t.payload.id,t.payload.constraint):t.type===co.REMOVE_LOCAL_CONSTRAINT?n_(t.payload.tool,t.payload.id):t.type===co.REMOVE_LOCAL_CONSTRAINT_GROUP?MR(t.payload.tool):t.type===co.RESTORE_ELEMENT?pp(t.payload.tool,t.payload.constraints):t.type===co.UPDATE_LOCAL_CONSTRAINT&&Xt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ys(t,e){return{execute:()=>{Dh(t)},unExecute:()=>{Dh(e)}}}var _2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function mp(t){var e=_2();S(t,e)}var f2=ue('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function g2(t,e){se(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=L(),o=L();let a=U(e,"tool_id",8),l=U(e,"neg_tool_id",8),u=U(e,"description",8);function d(){_(i)&&(_(i).negative_constraints||Yu(i,_(i).negative_constraints={}),Yu(i,_(i).negative_constraints[l()]=!_(o)),pp(a(),_(i)),O(o,!_(o)))}D(()=>(r(),X(a())),()=>{O(i,r().get(a()))}),D(()=>(_(i),X(l())),()=>{var I;O(o,(I=_(i))!=null&&I.negative_constraints?!!_(i).negative_constraints[l()]:!1)}),Ce(),fe();var g=f2(),h=j(g),v=j(h);di(2),z(h);var m=F(h,2),E=j(m,!0);z(m),z(g),ee(()=>{x(g,"title",u()),xt(h,"checked",_(o)),xt(v,"checked",_(o)),rt(E,l())}),Ne("click",v,d),S(t,g),ae()}var h2=ue('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function v2(t,e){se(e,!1);const n=Ye(),r=()=>ge(vo,"$svgRefStore",n),i=()=>ge(lt,"$elementsDictStore",n),o=()=>ge(Wt,"$currentConstraintStore",n),a=L();let l=U(e,"constraint_id",8),u=U(e,"tool_id",8);function d(){pi(l(),u()),r()&&r().focus()}function g(){const w=i().getConstraint(u(),l());if(!w)return;const A=t_(l(),u()),T=e_(l(),w),k=Ys(A,T);tr(k)}D(()=>o(),()=>{var w;O(a,(w=o())==null?void 0:w.id)}),Ce(),fe();var h=h2(),v=j(h),m=j(v);z(v);var E=F(v,2),I=j(E),b=j(I);mp(b),z(I),z(E),z(h),ee(()=>{xt(h,"active",l()===_(a)),rt(m,`ID: ${l()??""}`)}),Ne("click",I,Fn(g)),Ne("click",h,d),S(t,h),ae()}var p2=ue('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function m2(t,e){se(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=L();let o=U(e,"tool_id",8);D(()=>(r(),X(o())),()=>{O(i,r().get(o()))}),Ce(),fe();var a=me(),l=te(a);{var u=d=>{var g=p2(),h=j(g);qe(h,5,()=>Object.entries(_(i).constraints),v=>v[0],(v,m)=>{v2(v,{get constraint_id(){return _(m)[0]},get tool_id(){return o()}})}),z(h),z(g),S(d,g)};Q(l,d=>{_(i)&&_(i).constraints&&Object.entries(_(i).constraints).length&&d(u)})}S(t,a),ae()}function Rh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function E2(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Th(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function kh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function C2(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===f.HIGHLIGHTS&&i.highlights.length?Rh(i,e):i.value!==null?E2(i,e):n===f.CORNER_PM&&i.cornerMarks.length?Th(i,e):n===f.CENTER_PM&&i.centerMarks.length?kh(i,e):i.cornerMarks.length?Th(i,e):i.centerMarks.length?kh(i,e):i.highlights.length?Rh(i,e):r:r}function dr(t,e,n,r=!1){if(!(t&&e))return;const i=e_(t,e),o=t_(t,n),a=Ys(i,o);tr(a,r)}function br(t,e,n,r=!0){if(!(t&&e))return;const i=t_(t,n),o=e_(t,e),a=Ys(i,o);tr(a,r)}function _d(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Nh(r,t,n),a=Nh(r,t,e),l=Ys(o,a);tr(l,i)}class Ue{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ue(this.x+e.x,this.y+e.y)}subtract(e){return new Ue(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ue(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ue(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function Ep(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const bn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ue(i.x,i.y)};function qa(t,e){const n=Nl(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function b2(t,e){const n=Nl(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Za(t,e){const n=Nl(t),r=GN(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),a=o.indexOf(Math.min(...o)),l=r[a],u=o[a];return e===void 0||u<e?{corner:l,dist:u,idx:a}:null}function Qa(t,e){const n=Nl(t),r=$N(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),a=o.indexOf(Math.min(...o)),l=r[a],u=o[a];return e===void 0||u<e?{edge:l,dist:u,idx:a}:null}function Is(t,e,n){const r=qa(t);if(!r)return null;const i=Qa(t);if(!i)return null;const o=Za(t);if(!o)return null;const a=b2(t);if(!a)return null;let l,u;e===St.CORNER?(l=o.corner,u="corner"):e===St.EDGE?(l=i.edge,u="edge"):e===St.CELL_CENTER?(l=a.cellCenter,u="cell center"):e===St.CORNER_OR_EDGE?o.dist<i.dist?(l=o.corner,u="corner"):(l=i.edge,u="edge"):e===St.CORNER_OR_CENTER?o.dist<a.dist?(l=o.corner,u="corner"):(l=a.cellCenter,u="cell center"):e===St.EDGE_OR_CENTER?i.dist<a.dist?(l=i.edge,u="edge"):(l=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(l=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(l=o.corner,u="corner"):(l=a.cellCenter,u="cell center");const g=new Ue(l.c,l.r).subtract(t).length(),h=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:g,closest:l,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:h}}class Ho{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;this._prevPoint=r;const i=qa(r);if(!i)return;const o=i.cell;this._prevCell=o,this._lastPointerDownTime=e.timeStamp;const a={event:e,cell:o,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){const r=bn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=qa(r,i);if(!o)return;const a=o.cell;if(this._prevCell&&Ze(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const l={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(l),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(l)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=bn(e,n);if(!r)return;const i=qa(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const l=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,l>0&&l<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function I2(t,e,n,r){const i=new Ho,o={nRows:e.nRows,nCols:e.nCols};let a=null,l=null,u=null,d=!1,g=!1,h=Un.DYNAMIC;function v(E){d=!1;const I=E.cell;if(Ft(E.cell,o)){if(h===Un.DYNAMIC){const w=De(lt),A=aR(w,n,I);if(A){const k=BD(A.arrow,A.matchLineIdx);_d(A.id,A.arrow,k,n,!0),g=!0;return}const T=Ch(w,n,I);if(!T)d=!0,h=Un.EDIT_BULB,u=null,a=null;else{h=Un.EDIT_ARROWS,u=T[0],a=T[1],a=ed(a,I),Xt(n,u,a);return}}if(h===Un.EDIT_BULB&&!u){u=Lt.uniqueId(),a=rp(n,[I]),Bs(u,a);return}else h===Un.EDIT_BULB&&u&&a?(a=PD(a,I),Xt(n,u,a)):h===Un.EDIT_ARROWS&&u&&a&&(a=zD(a,I,r==null?void 0:r.allowSelfIntersection),Xt(n,u,a))}}return i.onDragStart=E=>{h=Un.DYNAMIC,v(E)},i.onDrag=E=>{v(E)},i.onDragEnd=()=>{if(g){g=!1;return}h===Un.EDIT_ARROWS&&u&&a?HD(a)?(a=WD(a),Xt(n,u,a)):(_d(u,l,a,n),l=a):h===Un.EDIT_BULB&&(dr(u,a,n),l=a),h=Un.DYNAMIC},i.onTap=E=>{if(d)return;const I=E.cell,b=De(lt);if(Ch(b,n,I)){br(u,a,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function w2(t,e,n,r){const i=new Ho,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let l=null,u=null;function d(v){return!!Ft(v.cell,o)}function g(v){if(!u||!l)throw"UNREACHABLE";const m=v.cell;d(v)&&(l=FD(l,m,a),Xt(n,u,l))}return i.onDragStart=v=>{De(Yt)!==ke.DELETE&&(u=Lt.uniqueId(),l=tp(n,[],r==null?void 0:r.defaultValue),Bs(u,l),g(v))},i.onDrag=v=>{g(v)},i.onDragEnd=()=>{u&&l&&l.cells.length<=1?n_(n,u):u&&l&&dr(u,l,n,!1),u=null},i.onTap=v=>{if(De(Yt)===ke.ADD_EDIT)return;const E=v.cell,I=De(lt),b=sR(I,n,E);if(b){const[w,A]=b;br(w,A,n)}},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:v=>{i.pointerMove(v,t)},pointerUp:v=>{i.pointerUp(v,t)},keyDown:()=>{},keyUp:()=>{}}}const y2=Wn(lt,t=>{const e=[];for(const[n,r]of t.entries())Ty(n)&&e.push(r);return e});function Wo(t){return Wn(lt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push(o);return r})}const r_=Wo(Ud),Cp=Wn(r_,t=>{const e=t.find(r=>r.tool_id===f.FOG_LIGHTS);return e?e.constraints:{}}),O2=Wn(lt,t=>{for(const e of t.values())if(e.tool_id===f.CUSTOM_FOG_CLEARING)return e}),A2=Wn(r_,t=>{const e=t.find(r=>r.tool_id===f.MINIMUM);return e?e.constraints:{}}),x2=Wn(r_,t=>{const e=t.find(r=>r.tool_id===f.MAXIMUM);return e?e.constraints:{}}),L2=Wo(Io),S2=Wo(Ds),N2=Wo(Ns),D2=Wo(Lv),R2=Wo(Sy),Ja=Rt(void 0),el=Rt(void 0),tl=Rt(void 0),nl=Rt(void 0),rl=Rt(void 0),Es=Rt(void 0),il=Rt(void 0);Wn([lt,en],([t,e])=>{const n=e;return t.get(n)});function T2(t,e,n,r){const i=new Ho,o={nRows:e.nRows,nCols:e.nCols};function a(d){const g=De(lt),h=d.cell;if(!Ft(d.cell,o))return;let m=De(Yt);const E=_o(g,n,h);if(m===ke.DYNAMIC&&(m=E?ke.DELETE:ke.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&_o(g,r.oppositeConstraintId,h)))if(E&&m===ke.DELETE){const[I,b]=E;br(I,b,n)}else if(!E&&m===ke.ADD_EDIT){const I=id(n,h,r==null?void 0:r.defaultValue),b=Lt.uniqueId();dr(b,I,n,!0)}else E&&m===ke.ADD_EDIT&&pi(E[0],n)}i.onDragStart=d=>{a(d)},i.onDrag=d=>{a(d)},i.onMove=d=>{if(!Ft(d.cell,o)){Ja.set(void 0);return}const h=id(n,d.cell,r==null?void 0:r.defaultValue),v=De(Po);v&&(h.shape={...v});const m=De(Yt),E=De(lt),I=_o(E,n,d.cell);if(!I&&m===ke.DELETE){Ja.set(void 0);return}let b="add",w;I&&(m===ke.DELETE||m===ke.DYNAMIC)&&(b="remove",w=I[0]);const A={tool:h,match_id:w,mode:b};Ja.set(A)};function l(d){const g=De(Wt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!So(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Uo(h,m),Xt(n,v,h))}return{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class $l{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"feature");ve(this,"_prevCoord",null);ve(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=bn(e,n);if(!r)return;const i=Is(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Is(r,this.feature);if(!i||this._prevCoord&&Ze(i.closest,this._prevCoord)&&this._prevCellCoord&&Ze(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function k2(t,e,n,r){const i=(r==null?void 0:r.targets)??St.CLOSEST,o=new $l(i),a={nRows:e.nRows,nCols:e.nCols};function l(g){const h=De(lt),v=g.cell,m=g.closest;let E=De(Yt);if(!Ft(v,a))return;const b=Ih(h,n,m);if(E===ke.DYNAMIC&&(E=b?ke.DELETE:ke.ADD_EDIT),b&&E===ke.DELETE){const w=b[0];br(w,b[1],n)}else if(!b&&E===ke.ADD_EDIT){const w=ad(n,m,""),A=Lt.uniqueId();dr(A,w,n,!0)}else b&&E===ke.ADD_EDIT&&pi(b[0],n)}function u(g){const h=De(Wt);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!So(g.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=Uo(v,E),Xt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(!Ft(g.cell,a)){il.set(void 0);return}const v=De(Yt),m=ad(n,g.closest,""),E=De(Po);E&&(m.shape={...E});const I=De(lt),b=Ih(I,n,g.closest);if(!b&&v===ke.DELETE){il.set(void 0);return}let w="add",A;b&&(v===ke.DYNAMIC||v===ke.DELETE)&&(w="remove",A=b[0]);const T={tool:m,match_id:A,mode:w};il.set(T)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function M2(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??St.CORNER_OR_EDGE,o=new $l(i),a={nRows:e.nRows,nCols:e.nCols};function l(g){const h=De(lt),v=g.cell,m=g.direction,E=ho(m);if(Ft(v,a))return;const b=dh(v,E);if(!Ft(b,a))return;let A=De(Yt);const T=bh(h,n,v,E);if(A===ke.DYNAMIC&&(A=T?ke.DELETE:ke.ADD_EDIT),T&&A===ke.DELETE){const[k,G]=T;br(k,G,n)}else if(!T&&A===ke.ADD_EDIT){const k=rd(n,v,E,""),G=Lt.uniqueId();dr(G,k,n,!0)}else T&&A===ke.ADD_EDIT&&pi(T[0],n)}function u(g){const h=De(Wt);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!So(g.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=Uo(v,E),Xt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(Ft(g.cell,a)){Es.set(void 0);return}const v=ho(g.direction),m=dh(g.cell,v);if(!Ft(m,a)){Es.set(void 0);return}const I=De(Yt),b=De(lt);if(!bh(b,n,g.cell,v)&&I===ke.DELETE){Es.set(void 0);return}const A=rd(n,g.cell,v,"");Es.set(A)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function U2(t,e,n,r){const i=new Ho,o={nRows:e.nRows,nCols:e.nCols};let a=null,l=null;function u(h){const v=De(lt),m=h.cell;if(!Ft(h.cell,o))return;let I=De(Yt);const b=oR(v,n,m);if(b&&(h.event.shiftKey||I===ke.ADD_EDIT)&&(l=b[0],a=b[1],zo({id:l,constraint:a}),I=ke.ADD_EDIT),I===ke.DYNAMIC&&(I=b?ke.DELETE:ke.ADD_EDIT),b&&I===ke.DELETE){br(b[0],b[1],n);return}if(!a&&I===ke.ADD_EDIT){a=ip(n,[m]),l=Lt.uniqueId(),Bs(l,a);return}else if(a&&l&&I===ke.ADD_EDIT){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=jD(a,m,w),Xt(n,l,a);return}}function d(h){const v=De(Wt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!So(h.key)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=KD(m,I),Xt(n,E,m))}return i.onDragStart=h=>{l=null,a=null,u(h)},i.onDrag=h=>{u(h)},i.onDragEnd=()=>{l&&a&&dr(l,a,n,!1),l=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{d(h)},keyUp:()=>{}}}var Er=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Er||{});const G2=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),bp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),$2=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),F2=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),P2=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),z2=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Du=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),H2=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Ru=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Fl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function W2(t,e,n){if(e===f.DIGIT){const r=t.map(a=>a.value),i=G2(t,n),o=bp(t,r);return[i,o]}if(e===f.GIVEN){const r=t.map(l=>l.value),i=t.map(l=>l.given),o=$2(t,n),a=F2(t,r,i);return[o,a]}if(e===f.REGIONS){const r=t.map(a=>a.region),i=P2(t,n),o=z2(t,r);return[i,o]}if(e===f.HIGHLIGHTS&&n!==null){const r=Ru(t,n),i=Ru(t,n);return[r,i]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=Ru(t,n),o=Fl(t,r);return[i,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Du(t,n,e),i=Du(t,n,e);return[r,i]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=Du(t,n,e),o=H2(t,r,e);return[i,o]}}function ds(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Pn.update(i=>i)}function po(t){switch(t.type){case Er.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ds(e,f.DIGIT,n,!0);break}case Er.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ds(e,f.GIVEN,n,!0);break}case Er.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ds(e,f.REGIONS,n,!0);break}case Er.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ds(e,f.HIGHLIGHTS,n,!0);break}case Er.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ds(e,r,n,!0);break}case Er.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Pn.update(r=>r);break}case Er.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Pn.update(i=>i);break}case Er.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Pn.update(r=>r);break}case Er.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Pn.update(r=>r);break}case Er.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===f.CENTER_PM?e[i].centerMarks=r[i]:n===f.CORNER_PM&&(e[i].cornerMarks=r[i]);Pn.update(i=>i);break}}}function B2(t,e){return{execute:()=>{po(t)},unExecute:()=>{po(e)}}}const so=new Ho;function Mh(t,e){return t.shiftKey?ms.SELECTING:t.ctrlKey||t.metaKey||e?ms.DYNAMIC:t.altKey?ms.DESELECTING:ms.RESETTING}function fd(t,e,n,r,i=!1){switch(e){case f.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case f.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case f.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function Y2(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=i=>i===f.CORNER_PM||i===f.CENTER_PM||i===f.DIGIT;for(const i of n){const o=fd(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function Tu(t,e,n,r){const i=W2(e,n,r);if(i){const o=i[0],a=i[1],l=B2(o,a),u=cd(t),g=[DR(u,u),l];NR(g)}}function j2(t,e,n){const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};so.onTap=m=>{if(m.tapCount!==2)return;const I=Ft(m.cell,i)?m.cell:null;if(!I)return;const b=C2(I,e,n),w=cd(b);lo(w)},so.onDragStart=m=>{const E=Ft(m.cell,i),I=De(ud),b=Mh(m.event,I),w=E?m.cell:null,A=pR(w,b);lo(A)},so.onDrag=m=>{const I=Ft(m.cell,i)?m.cell:null,b=ER(I);lo(b)};function o(m){if(!iO(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=cd(E);return lo(I),!0}function a(m){if(!cO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=dO(m);return Br(E),!0}return m.type==="keyup"?(TR(),!0):!1}function l(m){if(!lO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Br(I),dd(I),!0}else{const E=uO(m.code);return Br(E),dd(E),!0}}function u(m){if(!fO(m))return!1;const E=De(Gi).lastCell;let I=null;if(E!==null){const[A,T]=gO(m),[k,G]=[wh(E.r+T,0,i.nRows-1),wh(E.c+A,0,i.nCols-1)];I={r:k,c:G}}else I={r:0,c:0};const b=Mh(m,!1),w=CR(I,b);return lo(w),!0}function d(m){const E=aO(m);if(E===void 0)return!1;const I=De(Gi).cells,b=[];if(I.forEach(w=>{const A=e.getCell(w.r,w.c);A&&b.push(A)}),E===null){const{tool:w,cells:A}=Y2(b,n);if(A.length)return Tu(I,A,w,E),!0}else{let w=fd(b,n,"different",E,!0);if(w.length)return Tu(I,w,n,E),!0;if(w=fd(b,n,"equal",E,!0),w.length)return Tu(I,w,n,E),!0}return!1}function g(m){return m.repeat?!1:d(m.key)}const h=Lt.throttle(m=>{so.pointerMove(m,t)},10);return{pointerDown(m){m.button===0&&so.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){so.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||g(m)||a(m)||l(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){d(m.currentTarget.value)}}}function K2(t,e,n,r){const i=[We.N,We.NE,We.E,We.SE,We.S,We.SW,We.W,We.NW],o=new $l(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let l=null,u=null;function d(v){const m=De(lt),E=v.cell;if(!Ft(v.cell,a))return;let b=De(Yt);v.event.altKey&&(b=ke.DELETE);const w=_o(m,n,E),A=ho(v.direction);!w&&b!==ke.DELETE?(l=od(n,E,A),u=Lt.uniqueId(),dr(u,l,n,!0)):w&&(w[1].direction===A&&b===ke.ADD_EDIT?([u,l]=w,pi(w[0],n)):w[1].direction===A&&b===ke.DYNAMIC||b===ke.DELETE?br(w[0],w[1],n):(u=w[0],l={...w[1],direction:A},Xt(n,w[0],l)))}function g(v){if(!oO(v))return;const m=De(Wt);if(!m)return;const E=m.id,I=m.constraint;if(!Fi(I.toolId))return;const w=(i.indexOf(I.direction)+1)%i.length;l={...I,direction:i[w]},Xt(n,E,l)}return o.onDragStart=v=>{d(v)},o.onMove=v=>{if(!Ft(v.cell,a)){el.set(void 0);return}const E=ho(v.direction),I=od(n,v.cell,E),b=De(Yt),w=De(lt),A=_o(w,n,v.cell);if(!A&&b===ke.DELETE){el.set(void 0);return}let T="add",k;A&&(b===ke.DELETE||A[1].direction===E&&b===ke.DYNAMIC)&&(T="remove",k=A[0]);const G={tool:I,match_id:k,mode:T};el.set(G)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}function V2(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function X2(t,e,n,r){const i=new $l(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,l=null;function u(g){const h=De(lt),v=g.cell;if(!Ft(g.cell,o))return;let E=De(Yt);E===ke.DYNAMIC&&g.event.altKey&&(E=ke.DELETE);const I=ho(g.direction),b=_o(h,n,v);if(!b&&E!==ke.DELETE)a=sd(n,v,I),l=Lt.uniqueId(),dr(l,a,n,!0);else if(b)if(b[1].directions.includes(I)&&E!==ke.DELETE&&([l,a]=b,pi(b[0],n)),b&&E===ke.DELETE)br(b[0],b[1],n);else{const w=V2(b[1].directions,I);w.length>0?(l=b[0],a={...b[1],directions:w},Xt(n,b[0],a)):br(b[0],b[1],n)}}return i.onDragStart=g=>{u(g)},i.onMove=g=>{if(!Ft(g.cell,o)){tl.set(void 0);return}const v=ho(g.direction),m=sd(n,g.cell,v);if(De(Yt)===ke.DELETE){tl.set(void 0);return}tl.set(m)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class q2{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i||this._prevCoord&&Ze(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function Z2(t,e,n,r){const i=new q2,o={nRows:e.nRows,nCols:e.nCols};function a(d){const g=De(lt),h=d.coord;let v=De(Yt);const m=cl(h);if(!m.every(b=>Ft(b,o)))return;let I=null;if(I=mh(g,n,m),v===ke.DYNAMIC&&(v=I?ke.DELETE:ke.ADD_EDIT),I&&v===ke.DELETE){const b=I[0];br(b,I[1],n)}else if(!I&&v===ke.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",w=nd(n,m,b),A=Lt.uniqueId();dr(A,w,n,!0)}else I&&v===ke.ADD_EDIT&&pi(I[0],n)}function l(d){const g=De(Wt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!So(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Uo(h,m),Xt(n,v,h))}return i.onDragStart=d=>{a(d)},i.onMove=d=>{if(!Ft(d.coord,o)){nl.set(void 0);return}const h=De(Yt),v=cl(d.coord),m=(r==null?void 0:r.defaultValue)??"",E=nd(n,v,m),I=De(Po);I&&(E.shape={...I});const b=De(lt),w=mh(b,n,v);if(!w&&h===ke.DELETE){nl.set(void 0);return}let A="add",T;w&&(h===ke.DYNAMIC||h===ke.DELETE)&&(A="remove",T=w[0]);const k={tool:E,match_id:T,mode:A};nl.set(k)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class Q2{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=Za(r,o);if(!a)return;this._prevCoord=a.corner;const l={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(l)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i||this._prevCoord&&Ze(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=bn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function J2(t,e,n,r){const i=new Q2,o={nRows:e.nRows,nCols:e.nCols};function a(d){const g=De(lt),h=d.coord;let v=De(Yt);const m=ll(h);if(!m.every(b=>Ft(b,o)))return;let I=null;if(I=Eh(g,n,h),v===ke.DYNAMIC&&(v=I?ke.DELETE:ke.ADD_EDIT),I&&v===ke.DELETE){const b=I[0];br(b,I[1],n)}else if(!I&&v===ke.ADD_EDIT){const b=td(n,m,r==null?void 0:r.defaultValue),w=Lt.uniqueId();dr(w,b,n,!0)}else I&&v===ke.ADD_EDIT&&pi(I[0],n)}function l(d){const g=De(Wt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!So(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Uo(h,m),Xt(n,v,h))}return i.onDragStart=d=>{a(d)},i.onMove=d=>{if(!Ft(d.coord,o)){rl.set(void 0);return}const h=De(Yt),v=ll(d.coord),m=td(n,v,r==null?void 0:r.defaultValue),E=De(Po);E&&(m.shape={...E});const I=De(lt),b=Eh(I,n,d.coord);if(!b&&h===ke.DELETE){rl.set(void 0);return}let w="add",A;b&&(h===ke.DYNAMIC||h===ke.DELETE)&&(w="remove",A=b[0]);const T={tool:m,match_id:A,mode:w};rl.set(T)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class eT{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const i=Is(r,St.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=bn(e,n);if(!r)return;const i=Is(r,St.CLOSEST);if(!i||this._prevCoords&&Ze(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&up(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=bn(e,n);if(!r)return;const i=Is(r,St.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Ze(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function tT(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new eT;return r.onTap=o=>{const a=o.coords,l=De(gl),u=De(fl);if(o.type==="cell center"){if(!MN(a,n))return;const g=u.getCellMarker(a);if(g)if(g.marker==="X"){const h={...a,colorId:l,marker:"O"},v=Ka(h),m=Ka(g),E=Ni(v,m);tr(E)}else{const h=xh(a),v=Ka(g),m=Ni(h,v);tr(m)}else{const h={...a,colorId:l,marker:"X"},v=Ka(h),m=xh(a),E=Ni(v,m);tr(E)}}else if(o.type==="edge"){const d=u.getEdgeMarker(a);if(d){const g=Ah(a),h=Oh(d),v=Ni(g,h);tr(v)}else{const g={...a,colorId:l},h=Oh(g),v=Ah(a),m=Ni(h,v);tr(m)}}},r.onDrag=o=>{const a=o.coords,l=De(gl);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:l},d=xR(u);Dr(d)}},r.onDragEnd=()=>{const o=De(fl);if(o.mode==="add"){const a=o.draftLine.filter(l=>!o.lineMarkers.some(u=>uo(l,u)));if(a.length){const l=xs(a),u=Lh(a),d=Ni(l,u);tr(d)}}else{const a=o.lineMarkers.filter(l=>o.draftLine.some(u=>uo(l,u)));if(a.length){const l=Lh(a),u=xs(a),d=Ni(l,u);tr(d)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function nT(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function rT(t,e){const n=Bv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function iT(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function oT(t){for(let e=0;;e++){const n=iT(e);if(!t.has(n))return n}}function sT(t,e,n){const r=new Ho,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,l=null,u=null,d="cells2",g=De(Yt);function h(m){const E=De(lt),I=m.cell;if(!Ft(m.cell,i))return;const w=lR(E,n,I);if(w?(l=w[0],o=w[1],g===Ln.DYNAMIC&&(g=Ln.MOVE),g===Ln.MOVE&&(g=Ln.MOVE,u=I,d=o.cells2.some(T=>Ze(T,I))?"cells2":"cells")):g===Ln.DYNAMIC&&(g=Ln.SELECT),g===Ln.SELECT&&l===null){l=Lt.uniqueId();const A=cR(E,n),T=oT(A);o=nT(n,[I],T),Bs(l,o);return}else if(g===Ln.SELECT&&l&&o){o=rT(o,I),Xt(n,l,o);return}else if(g===Ln.MOVE&&l&&o&&u){const A={r:I.r-u.r,c:I.c-u.c},k=(d==="cells2"?o.cells2:o.cells).map(W=>({r:W.r+A.r,c:W.c+A.c}));if(!k.every(W=>Ft(W,i)))return;d==="cells"?o={...o,cells:k}:o={...o,cells2:k},u=I,Xt(n,l,o)}}return r.onDragStart=m=>{g=De(Yt),l=null,o=null,u=null,h(m)},r.onDrag=m=>{h(m)},r.onDragEnd=()=>{l&&o&&(g===Ln.SELECT?dr(l,o,n):g===Ln.MOVE&&_d(l,a,o,n),a=o)},r.onTap=()=>{l&&g!==Ln.SELECT&&(n_(n,l),l=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function aT(t){if(t.type===he.SELECTION)return function(n,r,i){return j2(n,r,i)};if(t.type===he.SINGLE_CELL){let e=function(r,i,o){return T2(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_ARROW){let e=function(r,i,o){return K2(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return X2(r,i,o,n)};const n=t;return e}else if(t.type===he.EDGE){let e=function(r,i,o){return Z2(r,i,o,n)};const n=t;return e}else if(t.type===he.CORNER){let e=function(r,i,o){return J2(r,i,o,n)};const n=t;return e}else if(t.type===he.LINE){let e=function(r,i,o){return w2(r,i,o,n)};const n=t;return e}else if(t.type===he.ARROW){let e=function(r,i,o){return I2(r,i,o,n)};const n=t;return e}else if(t.type===he.CAGE){let e=function(r,i,o){return U2(r,i,o,n)};const n=t;return e}else{if(t.type===he.CLONE)return function(n,r,i){return sT(n,r,i)};if(t.type===he.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return k2(r,i,o,n)};const n=t;return e}else if(t.type===he.OUTSIDE_DIRECTION){let e=function(r,i,o){return M2(r,i,o,n)};const n=t;return e}else if(t.type===he.PEN)return function(n,r){return tT(n,r)}}}const Ip=Wn([vo,hn,en],([t,e,n])=>{const r=Dl(n,Ht);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?aT(i):void 0;return o?o(t,e,n):void 0}),Yt=Rt(void 0);var lT=ue('<button class="form-button svelte-lzdz6g"> </button>'),cT=ue('<button class="form-button radio-button svelte-lzdz6g" role="switch"> </button>'),uT=ue('<div class="tool-buttons svelte-lzdz6g"></div>');function dT(t,e){se(e,!1);const n=Ye(),r=()=>ge(Yt,"$toolModeStore",n),i=L(),o=L();let a=U(e,"tool_id",8);function l(v){go(Yt,v)}function u(){const v=Lt.uniqueId(),m=op(a(),"");dr(v,m,a(),!0)}go(Yt,qy(a())),D(()=>X(a()),()=>{O(i,Xy(a()))}),D(()=>r(),()=>{O(o,r())}),Ce(),fe();var d=me(),g=te(d);{var h=v=>{var m=uT();qe(m,5,()=>Object.values(_(i)),pt,(E,I)=>{var b=me(),w=te(b);{var A=k=>{var G=lT(),W=j(G,!0);z(G),ee(()=>rt(W,_(I))),Ne("click",G,u),S(k,G)},T=k=>{var G=cT(),W=j(G,!0);z(G),ee(()=>{x(G,"aria-checked",_(I)===_(o)),xt(G,"selected",_(I)===_(o)),rt(W,_(I))}),Ne("click",G,()=>l(_(I))),S(k,G)};Q(w,k=>{_(I)===Pd.CREATE?k(A):k(T,!1)})}S(E,b)}),z(m),S(v,m)};Q(g,v=>{_(i)&&v(h)})}S(t,d),ae()}var _T=ue('<div class="value-editor svelte-1ff7bz5">Value: <input class="value-input svelte-1ff7bz5" type="text"></div>'),fT=ue('<div class="editor-wrapper svelte-1ff7bz5"><div class="editor svelte-1ff7bz5"><div class="bool-constraints-container svelte-1ff7bz5"><!></div> <!> <!> <!></div></div>');function gT(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L();let o=U(e,"tool_id",8);const a=Ht[o()],l=a.negative_constraints,u=!!(l&&Object.keys(l).length>0),g=xv(o())||u;function h(I){if(!_(i))return;const w=I.target.value,A=a.inputOptions;if(!A||A.type!==he.VALUE_TOOL&&A.type!==he.CAGE&&A.type!==he.LINE&&A.type!==he.EDGE&&A.type!==he.CORNER&&A.type!==he.OUTSIDE_DIRECTION)return;const T=A.valueUpdater;if(!T)return;const k=T(w,"");if(k===void 0)return;const G=Uo(_(i).constraint,k);Xt(o(),_(i).id,G)}D(()=>r(),()=>{O(i,r())}),Ce(),fe();var v=me(),m=te(v);{var E=I=>{var b=fT(),w=j(b),A=j(w),T=j(A);{var k=J=>{var oe=me(),ie=te(oe);qe(ie,1,()=>l,pt,(ce,be)=>{g2(ce,{get tool_id(){return o()},get neg_tool_id(){return _(be).toolId},get description(){return _(be).description}})}),S(J,oe)};Q(T,J=>{l&&J(k)})}z(A);var G=F(A,2);{var W=J=>{var oe=_T(),ie=F(j(oe));gn(ie),x(ie,"spellcheck",!1),z(oe),ee(()=>rv(ie,_(i).constraint.value)),Ne("input",ie,ce=>h(ce)),S(J,oe)};Q(G,J=>{_(i)&&_(i).constraint.value!==void 0&&J(W)})}var M=F(G,2);dT(M,{get tool_id(){return o()}});var $=F(M,2);m2($,{get tool_id(){return o()}}),z(w),z(b),S(I,b)};Q(m,I=>{g&&I(E)})}S(t,v),ae()}var hT=ue('<button class="form-button icon header-button svelte-8ay9bc"><!></button>'),vT=ue('<div class="element-button-wrapper svelte-8ay9bc"><div class="constraints-ui svelte-8ay9bc"><div class="header svelte-8ay9bc"><div class="element-icon-container svelte-8ay9bc"></div> <div class="element-name svelte-8ay9bc"></div> <!></div> <!></div></div>');function ku(t,e){se(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=()=>ge(en,"$toolStore",n),o=L();let a=U(e,"tool_id",8),l=U(e,"elementHandlers",8);const u=!!l()[a()].permanent;let d=L(!1),g=a();function h(){_(d)?Br(f.DIGIT):Br(a())}function v(){kR(a());const W=r().get(a());if(!W)return;const M=c2(a()),$=u2(a(),W),J=Ys(M,$);tr(J)}function m(){var J,oe;const W=(J=_(o).meta)==null?void 0:J.description,M=((oe=_(o).meta)==null?void 0:oe.usage)??Vy(a());let $;return W&&W.length&&($=W),M.length&&($?$=$+`

`+M:$=M),$}D(()=>(X(a()),X(l())),()=>{O(o,Dl(a(),l()))}),D(()=>(X(a()),i()),()=>{O(d,a()===i())}),Ce(),fe();var E=vT(),I=j(E);xt(I,"clickable",!0);var b=j(I);ee(()=>x(b,"title",m()));var w=F(j(b),2);w.textContent=g;var A=F(w,2);{var T=W=>{var M=hT(),$=j(M);mp($),z(M),Ne("click",M,Fn(v)),S(W,M)};Q(A,W=>{u||W(T)})}z(b);var k=F(b,2);{var G=W=>{gT(W,{get tool_id(){return a()}})};Q(k,W=>{_(d)&&W(G)})}z(I),z(E),ee(()=>xt(I,"selected",_(d))),Ne("click",b,h),S(t,E),ae()}var pT=ue("<!> <!> <!>",1);function mT(t,e){se(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=L();let o=U(e,"elementHandlers",8);const a=My,l=u=>{d2(u),Br(u)};D(()=>(r(),H),()=>{O(i,(u,d)=>{var v;const g=r().has(u);return!!((v=d.meta)!=null&&v.categories.includes(H.LOCAL_ELEMENT))&&!g})}),Ce(),fe(),s2(t,{title:"Elements",onAddTool:l,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,d)=>{l2(u)},"panel-content":(u,d)=>{var g=pT(),h=te(g);ku(h,{get tool_id(){return f.GIVEN},get elementHandlers(){return o()}});var v=F(h,2);ku(v,{get tool_id(){return f.REGIONS},get elementHandlers(){return o()}});var m=F(v,2);qe(m,1,()=>r().entries(),([E,I])=>E,(E,I)=>{let b=()=>_(I)[0];var w=me(),A=te(w);{var T=k=>{ku(k,{get tool_id(){return b()},get elementHandlers(){return o()}})};Q(A,k=>{Ry(b())&&k(T)})}S(E,w)}),S(u,g)}}}),ae()}var ET=ue('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ws(t,e){let n=U(e,"name",8);var r=ET(),i=j(r),o=j(i,!0);z(i);var a=F(i,2);wt(a,e,"default",{}),z(r),ee(()=>rt(o,n())),S(t,r)}var CT=ue('<input class="control-slider svelte-1rsuho6" type="range">');function bT(t,e){se(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),o=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),l=U(e,"onInputCb",8,void 0);fe();var u=CT();gn(u),ee(()=>{x(u,"min",n()),x(u,"max",r()),x(u,"step",o())}),rr(u,i),Ne("change",u,()=>{a()&&a()(i())}),Ne("input",u,()=>{l()&&l()(i())}),S(t,u),ae()}function ci(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),o=U(e,"max",8),a=U(e,"step",24,()=>(o()-i())/10),l=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ws(t,{get name(){return`${n()??""}: ${r()??""}`},children:(d,g)=>{bT(d,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return l()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var IT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function wT(t){var e=IT();S(t,e)}var yT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function OT(t){var e=yT();S(t,e)}var AT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function xT(t){var e=AT();S(t,e)}var LT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function ST(t){var e=LT();S(t,e)}var NT=ue('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function DT(t,e){se(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),o=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);fe();var l=NT(),u=j(l);gn(u);var d,g=F(u,2);wt(g,e,"default",{}),z(l),ee(()=>{x(l,"title",o()),xt(l,"active",r()===i()),d!==(d=r())&&(u.value=(u.__value=r())==null?"":r())}),Ed(n,[],u,()=>(r(),i()),i),Ne("change",u,()=>a()&&a()(r())),S(t,l),ae()}var RT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function TT(t){var e=RT(),n=j(e);x(n,"cx",480),x(n,"cy",-480),x(n,"rx",480),x(n,"ry",300),z(e),S(t,e)}var kT=ue('<div class="icon-wrapper svelte-18euf14"><!></div>'),MT=ue('<div class="radio-container svelte-18euf14"></div>');function UT(t,e){se(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),o=U(e,"updateShapeCb",8,void 0);const a=new Map([[B.CIRCLE,xT],[B.ELLIPSE,TT],[B.SQUARE,OT],[B.RECTANGLE,wT],[B.POLYGON,ST]]);fe(),ws(t,{get name(){return n()},children:(l,u)=>{var d=MT();qe(d,5,i,pt,(g,h)=>{DT(g,{get title(){return _(h)},get value(){return _(h)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=me(),I=te(E);{var b=w=>{var A=kT(),T=j(A);md(T,()=>a.get(_(h)),(k,G)=>{G(k,{})}),z(A),S(w,A)};Q(I,w=>{a.has(_(h))&&w(b)})}S(v,E)},$$slots:{default:!0}})}),z(d),S(l,d)},$$slots:{default:!0}}),ae()}var GT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function $T(t){var e=GT();S(t,e)}var FT=ue('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function ol(t,e){se(e,!1);const n=L();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),o=L(void 0);function a(m){const E=Lu(m);E&&i()&&i()(E)}D(()=>X(r()),()=>{O(n,r())}),D(()=>(_(n),Lu),()=>{ld(_(n))&&O(o,Lu(_(n)))}),Ce(),fe();var l=FT(),u=j(l);const d=ft(()=>sp(_(n)));var g=j(u);gn(g),z(u);var h=F(u,2),v=F(j(h),2);gn(v),x(v,"spellcheck",!1),x(v,"maxlength",30),z(h),z(l),ee(()=>{x(u,"style",`--choosen-color: ${_(o)??""}`),xt(u,"transparent",_(d))}),rr(g,()=>_(n),m=>O(n,m)),Ne("change",g,()=>a(_(n))),rr(v,()=>_(n),m=>O(n,m)),Ne("input",v,()=>a(_(n))),S(t,l),ae()}var PT=ue('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),zT=ue("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function HT(t,e){se(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n),i=()=>ge(Wt,"$currentConstraintStore",n),o=L(),a=L(),l=L();let u=L(!0),d=U(e,"elementHandlers",8);function g(b,w){const A=(b==null?void 0:b.shape)??(w?ju(w):void 0);return Nu(A),A}function h(b,w){_(l)&&(Yu(l,_(l)[b]=w),Nu(_(l)))}function v(){_(a)&&(O(l,ju(_(a))),Nu(_(l)))}function m(b){return b&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[B.ELLIPSE,B.RECTANGLE].includes(b)}D(()=>(r(),X(d())),()=>{O(o,Dl(r(),d()))}),D(()=>_(o),()=>{O(a,_(o).shape)}),D(()=>(i(),_(a)),()=>{var b;O(l,g(((b=i())==null?void 0:b.constraint)??null,_(a)))}),Ce(),fe(),Gl(t,{get isOpen(){return _(u)},set isOpen(b){O(u,b)},$$slots:{"panel-header":(b,w)=>{Ul(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(A){O(u,A)},$$slots:{"title-icon":(A,T)=>{$T(A)}},$$legacy:!0})},"panel-content":(b,w)=>{var A=me(),T=te(A);{var k=G=>{var W=zT(),M=te(W);{var $=Pe=>{var Ie=PT();Ne("click",Ie,v),S(Pe,Ie)};Q(M,Pe=>{$y(_(a))&&Pe($)})}var J=F(M,2);{var oe=Pe=>{UT(Pe,{get possibleShapes(){return _(a).allowedTypes},name:"Shape",get selectedShape(){return _(l).type},updateShapeCb:Ie=>h("type",Ie)})};Q(J,Pe=>{var Ie;_(a).allowedTypes&&_(a).allowedTypes.length&&((Ie=_(l))!=null&&Ie.type)&&Pe(oe)})}var ie=F(J,2);{var ce=Pe=>{var Ie=ft(()=>_(a).n.lb??3),Te=ft(()=>_(a).n.ub??10);ci(Pe,{name:"Number of Sides",get value(){return _(l).n},get min(){return _(Ie)},get max(){return _(Te)},step:1,onChangeCb:ze=>h("n",ze)})};Q(ie,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.n)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.n)!=null&&ze.editable)&&E(_(l).type)&&Pe(ce)})}var be=F(ie,2);{var Z=Pe=>{var Ie=ft(()=>_(a).r.lb??0),Te=ft(()=>_(a).r.ub??1),ze=ft(()=>_(a).r.step??.05);ci(Pe,{name:"Radius",get value(){return _(l).r},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("r",Mt)})};Q(be,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.r)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.r)!=null&&ze.editable)&&m(_(l).type)&&Pe(Z)})}var Ae=F(be,2);{var we=Pe=>{var Ie=ft(()=>_(a).width.lb??0),Te=ft(()=>_(a).width.ub??1),ze=ft(()=>_(a).width.step??.05);ci(Pe,{name:"Width",get value(){return _(l).width},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("width",Mt)})};Q(Ae,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.width)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.width)!=null&&ze.editable)&&I(_(l).type)&&Pe(we)})}var Oe=F(Ae,2);{var Se=Pe=>{var Ie=ft(()=>_(a).height.lb??0),Te=ft(()=>_(a).height.ub??1),ze=ft(()=>_(a).height.step??.05);ci(Pe,{name:"Height",get value(){return _(l).height},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("height",Mt)})};Q(Oe,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.height)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.height)!=null&&ze.editable)&&I(_(l).type)&&Pe(Se)})}var ye=F(Oe,2);{var Re=Pe=>{var Ie=ft(()=>_(a).angle.lb??0),Te=ft(()=>_(a).angle.ub??360),ze=ft(()=>_(a).angle.step??15);ci(Pe,{name:"Angle",get value(){return _(l).angle},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("angle",Mt)})};Q(ye,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.angle)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.angle)!=null&&ze.editable)&&Pe(Re)})}var $e=F(ye,2);{var st=Pe=>{var Ie=ft(()=>_(a).inset.lb??0),Te=ft(()=>_(a).inset.ub??.5),ze=ft(()=>_(a).inset.step??.01);ci(Pe,{name:"Inset",get value(){return _(l).inset},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("inset",Mt)})};Q($e,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.inset)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.inset)!=null&&ze.editable)&&Pe(st)})}var ut=F($e,2);{var yt=Pe=>{ws(Pe,{name:"Stroke",children:(Ie,Te)=>{ol(Ie,{get value(){return _(l).stroke},onChangeCb:ze=>h("stroke",ze)})},$$slots:{default:!0}})};Q(ut,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.stroke)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.stroke)!=null&&ze.editable)&&Pe(yt)})}var _t=F(ut,2);{var Et=Pe=>{var Ie=ft(()=>_(a).strokeWidth.lb??0),Te=ft(()=>_(a).strokeWidth.ub??.8),ze=ft(()=>_(a).strokeWidth.step??.01);ci(Pe,{name:"Stroke Width",get value(){return _(l).strokeWidth},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("strokeWidth",Mt)})};Q(_t,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.strokeWidth)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.strokeWidth)!=null&&ze.editable)&&Pe(Et)})}var Ct=F(_t,2);{var In=Pe=>{var Ie=ft(()=>_(a).strokeDasharray.lb??0),Te=ft(()=>_(a).strokeDasharray.ub??1),ze=ft(()=>_(a).strokeDasharray.step??.01);ci(Pe,{name:"Stroke Dasharray",get value(){return _(l).strokeDasharray},get min(){return _(Ie)},get max(){return _(Te)},get step(){return _(ze)},onChangeCb:Mt=>h("strokeDasharray",Mt)})};Q(Ct,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.strokeDasharray)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.strokeDasharray)!=null&&ze.editable)&&Pe(In)})}var un=F(Ct,2);{var Ir=Pe=>{ws(Pe,{name:"Fill",children:(Ie,Te)=>{ol(Ie,{get value(){return _(l).fill},onChangeCb:ze=>h("fill",ze)})},$$slots:{default:!0}})};Q(un,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.fill)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.fill)!=null&&ze.editable)&&Pe(Ir)})}var wr=F(un,2);{var Tr=Pe=>{ws(Pe,{name:"Font Color",children:(Ie,Te)=>{ol(Ie,{get value(){return _(l).fontColor},onChangeCb:ze=>h("fontColor",ze)})},$$slots:{default:!0}})};Q(wr,Pe=>{var Ie,Te,ze;((Ie=_(l))==null?void 0:Ie.fontColor)!==void 0&&((ze=(Te=_(a))==null?void 0:Te.fontColor)!=null&&ze.editable)&&Pe(Tr)})}S(G,W)};Q(T,G=>{_(a)&&G(k)})}S(b,A)}},$$legacy:!0}),ae()}var WT=ue('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function js(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=WT(),o=j(i),a=j(o);wt(a,e,"default",{}),z(o),z(i),ee(()=>x(i,"title",r())),Ne("click",i,Fn(function(...l){var u;(u=n())==null||u.apply(this,l)})),S(t,i)}var BT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function YT(t){var e=BT();S(t,e)}var jT=ue('<div class="buttons-container svelte-kc00rw"><!></div>');function Pl(t,e){var n=jT(),r=j(n);wt(r,e,"default",{}),z(n),S(t,n)}var KT=ue('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),VT=ue('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),XT=ue('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function qT(t,e){se(e,!1);const n=Ye(),r=()=>ge(Zr,"$puzzleMetaStore",n),i=()=>ge(lt,"$elementsDictStore",n);let o=U(e,"showModal",12,!1),a=L(""),l=L(""),u=L(""),d=L(""),g=L("");function h(){o(!1)}function v(){const b=_(l)?m(_(l)):["Anonymous"],A={title:_(a)?_(a):"Sudoku",authors:b,ruleset:_(u),ctcYoutubeUrl:_(d),ctcUrl:_(g)};RR(A),o(!1)}function m(b){return b.split(/\s*[;]\s*/)}function E(){var k,G,W;let b="";const w=Ht,A=i();!A.get(f.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules apply.

`:b+=`Sudoku rules do not apply.

`;for(const[M,$]of A.entries()){if(M===f.SUDOKU_RULES_DO_NOT_APPLY)continue;const J=w[M],oe=((k=J.menu)==null?void 0:k.name)??J.toolId,ie=(G=J.meta)==null?void 0:G.description;if(b+=`**${oe}**: ${ie}

`,!!$.negative_constraints)for(const[ce,be]of Object.entries($.negative_constraints)){if(!be)continue;const Z=(W=J.negative_constraints)==null?void 0:W.find(Oe=>Oe.toolId===ce);if(!Z)continue;const Ae=ce,we=Z.description;b+=` - **${Ae}**: ${we}

`}}return b.trim()}function I(){const b=E();O(u,b)}D(()=>(X(o()),r(),dl),()=>{if(!o()){const b=r().authors;O(a,r().title??""),O(l,b?dl(b,"; ","; "):""),O(u,r().ruleset??""),O(d,r().ctcYoutubeUrl??""),O(g,r().ctcUrl??"")}}),Ce(),fe(),Qr(t,{title:"Edit Puzzle Meta",get showModal(){return o()},set showModal(b){o(b)},children:(b,w)=>{var A=XT(),T=j(A);Ri(T,{title:"Title"});var k=F(T,2);gn(k);var G=F(k,2);Ri(G,{title:"Authors"});var W=F(G,2);gn(W);var M=F(W,2);Ri(M,{title:"Ruleset",children:(Z,Ae)=>{var we=KT();Ne("click",we,I),S(Z,we)},$$slots:{default:!0}});var $=F(M,2);ry($),x($,"rows",8);var J=F($,2);Ri(J,{title:"CTC Link"});var oe=F(J,2);gn(oe);var ie=F(oe,2);Ri(ie,{title:"CTC Youtube Link"});var ce=F(ie,2);gn(ce);var be=F(ce,2);Pl(be,{children:(Z,Ae)=>{var we=VT(),Oe=te(we),Se=F(Oe,2);Ne("click",Oe,v),Ne("click",Se,h),S(Z,we)},$$slots:{default:!0}}),z(A),rr(k,()=>_(a),Z=>O(a,Z)),rr(W,()=>_(l),Z=>O(l,Z)),rr($,()=>_(u),Z=>O(u,Z)),rr(oe,()=>_(g),Z=>O(g,Z)),rr(ce,()=>_(d),Z=>O(d,Z)),S(b,A)},$$slots:{default:!0},$$legacy:!0}),ae()}var ZT=ue("<!> <!>",1);function QT(t){let e=L(!1);function n(){O(e,!0)}var r=ZT(),i=te(r);js(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,l)=>{YT(a)},$$slots:{default:!0}});var o=F(i,2);qT(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var JT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function ek(t){var e=JT();S(t,e)}function tk(t,e){for(const[n,r]of t.entries()){if(!jr(n))continue;if(Object.values(r.constraints).some(o=>!Ft(o.cell,e)))return!0}return!1}function nk(t,e,n,r){const i=n.zoom_factor;if(r<1){const o=e.x+e.width/2,a=e.y+e.height/2,l=e.width/i,u=e.height/i,d=o-l/2,g=a-u/2;return{x:d,y:g,height:u,width:l}}else if(r>1){const o=e.width/i,a=e.height/i,l=t.x,u=t.width,d=t.y,g=t.height,h=e.x+e.width/2,v=e.y+e.height/2,m=(h+n.point.x)/2,E=(v+n.point.y)/2;let I=m-o/2,b=E-a/2;return I<l&&(I=l),b<d&&(b=d),I+o>u&&(I=u-o),b+a>g&&(b=g-a),{x:I,y:b,height:a,width:o}}return e}const mo=Rt(1),Ks=Wn([lt,en,hn],([t,e,n])=>{const r={nRows:n.nRows,nCols:n.nCols},i=tk(t,r),o=jr(e),a=i||o?1:.2,l=-a,u=-a,d=r.nCols+2*a,g=r.nRows+2*a;return{x:l,y:u,width:d,height:g}}),Vs=Rt(De(Ks));function i_(){mo.set(1),Vs.set(De(Ks))}function rk(t){if(!t.ctrl)return;const e=De(mo),n=.5,r=2,i=t.zoom_factor;let o=e*i;if(o=Math.max(n,Math.min(r,o)),mo.set(o),o===e)return;const a=De(Ks);Vs.update(l=>nk(a,l,t,o))}function ik(t){if(t.ctrl)return;const e=De(mo),n=De(Ks);if(e<1)return;const r=-(t.delta>0?1:t.delta<0?-1:0),i=n.y,o=i+n.height;Vs.update(a=>{const l=.5*r*e;let u=a.y+l;return u<i&&(u=i),u+a.height>o&&(u=o-a.height),{x:a.x,y:u,height:a.height,width:a.width}})}function ok(t){const e=De(mo),n=De(Ks);if(e<1)return;const r=t.point,i=n.x,o=i+n.width,a=n.y,l=a+n.height;Vs.update(u=>{let d=u.x-.012/e*r.x,g=u.y-.012*1/e*r.y;return g<a&&(g=a),g+u.height>l&&(g=l-u.height),d<i&&(d=i),d+u.width>o&&(d=o-u.width),{x:d,y:g,height:u.height,width:u.width}})}var sk=ue('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function ak(t,e){se(e,!1);let n=L(null),r=L(null);function i(){var o;(o=_(n))==null||o.click()}D(()=>(_(r),hl),()=>{if(_(r)&&_(r).length){const o=_(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(l){if(l.target||alert(a.error),l.target&&l.target.result){const u=l.target.result;if(typeof u!="string")return;const d=JSON.parse(u),g=vR(d);console.log(g),GR(g),i_(),hl()}},a.onerror=function(){alert(a.error)}}}),Ce(),fe(),js(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var l=sk(),u=te(l);ek(u);var d=F(u,2);Ui(d,g=>O(n,g),()=>_(n)),Oy(d,()=>_(r),g=>O(r,g)),S(o,l)},$$slots:{default:!0}}),ae()}var lk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function ck(t){var e=lk();S(t,e)}var uk=ue('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Uh(t,e){se(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),o=U(e,"value",12),a=U(e,"step",24,()=>(i()-r())/10),l=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fe();var d=uk(),g=j(d),h=j(g);z(g);var v=F(g,2);gn(v),z(d),ee(()=>{rt(h,`${n()??""}: ${o()??""}`),x(v,"min",r()),x(v,"max",i()),x(v,"step",a())}),rr(v,o),Ne("change",v,()=>{l()&&l()(o())}),Ne("input",v,()=>{u()&&u()(o())}),S(t,d),ae()}var dk=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),_k=ue('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function fk(t,e){se(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let o=L(9),a=L(9),l=L(""),u=L(Lt.range(1,10));function d(){n(!1)}function g(){hl(),UR(_(a),_(o),_(u).sort()),i_(),n(!1)}function h(E){return E.map(b=>String(b)).join(",")}function v(){const E=Math.min(Math.max(_(a),_(o)),9);O(u,Lt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}fe(),Qr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=_k(),w=j(b);Uh(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return _(o)},set value(M){O(o,M)},$$legacy:!0});var A=F(w,2);Uh(A,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return _(a)},set value(M){O(a,M)},$$legacy:!0});var T=F(A,2),k=ft(()=>`Allowed Digits (for the solver): ${h(_(u))}`);Ri(T,{get title(){return _(k)}});var G=F(T,2);gn(G),ee(()=>x(G,"placeholder",h(_(u))));var W=F(G,2);Pl(W,{children:(M,$)=>{var J=dk(),oe=te(J),ie=F(oe,2);Ne("click",oe,g),Ne("click",ie,d),S(M,J)},$$slots:{default:!0}}),z(b),rr(G,()=>_(l),M=>O(l,M)),Ne("input",G,()=>m(_(l))),S(E,b)},$$slots:{default:!0},$$legacy:!0}),ae()}var gk=ue("<!> <!>",1);function hk(t){let e=L(!1);function n(){O(e,!0)}var r=gk(),i=te(r);js(i,{title:"New Puzzle",clickCb:n,children:(a,l)=>{ck(a)},$$slots:{default:!0}});var o=F(i,2);fk(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var vk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function pk(t){var e=vk();S(t,e)}var mk=ue('<button class="modal-button">Cancel</button>'),Ek=ue('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button> <button class="modal-button">Copy Link</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function Ck(t,e){se(e,!1);const n=Ye(),r=()=>ge(vo,"$svgRefStore",n),i=()=>ge(Zr,"$puzzleMetaStore",n),o=()=>ge(Ws,"$puzzleStore",n),a=L();let l=U(e,"showModal",12,!1);function u(w){const A=getComputedStyle(w);let T="";for(let k of A){const G=A.getPropertyValue(k);G&&(T+=`${k}:${G};`)}return T}function d(w){const A=w.cloneNode(!0);(A instanceof SVGElement||A instanceof HTMLElement)&&(A.style.cssText=u(w));const T=w.childNodes;for(let k=0;k<T.length;k++){const G=T[k];if(G instanceof Element){const W=d(G);A.replaceChild(W,A.childNodes[k])}}return A}function g(w){if(!w)return;const A=d(w),T=_l(i()),G=new XMLSerializer().serializeToString(A),W=new Image,M=new Blob([G],{type:"image/svg+xml;charset=utf-8"}),$=URL.createObjectURL(M);W.onload=()=>{const J=w.getBoundingClientRect(),oe=J.width,ie=J.height,ce=document.createElement("canvas"),be=window.devicePixelRatio||1;ce.width=oe*be,ce.height=ie*be;const Z=ce.getContext("2d");Z&&(Z.scale(be,be),Z.drawImage(W,0,0,oe,ie),ce.toBlob(Ae=>{if(!Ae)return;const we=URL.createObjectURL(Ae),Oe=document.createElement("a");Oe.href=we,Oe.download=T,Oe.click(),URL.revokeObjectURL(we)}))},W.src=$}function h(w,A="download.svg"){if(!w)return;const T=d(w);let G=new XMLSerializer().serializeToString(T);G.includes("<?xml")||(G=`<?xml version="1.0" standalone="no"?>\r
`+G);const W=new Blob([G],{type:"image/svg+xml"}),M=URL.createObjectURL(W),$=document.createElement("a");$.href=M,$.download=A,$.click(),URL.revokeObjectURL(M)}const v=w=>{const A=hR(o());return JSON.stringify(A,null,w)},m=()=>{function w(k,G,W){var M=document.createElement("a"),$=new Blob([k],{type:W});M.href=URL.createObjectURL($),M.download=G,M.click(),URL.revokeObjectURL(M.href)}const A=v(2),T=_l(i());w(A,`${T}.json`,"text/plain")},E=()=>{const w=v(0),A=dR(w),T=`${window.location.host}/encpuzzle/${A}`;navigator.clipboard.writeText(T)};function I(){l(!1)}const b=1;D(()=>r(),()=>{O(a,r())}),Ce(),fe(),Qr(t,{title:"Save Puzzle",get showModal(){return l()},set showModal(w){l(w)},children:(w,A)=>{var T=Ek(),k=j(T),G=j(k),W=j(G),M=F(W,2),$=F(M,2),J=F($,2);z(G);var oe=F(G,2),ie=F(j(oe),2),ce=j(ie);x(ce,"width",400*b),x(ce,"height",300*b),z(ie),z(oe),z(k);var be=F(k,2);Pl(be,{children:(Z,Ae)=>{var we=mk();Ne("click",we,I),S(Z,we)},$$slots:{default:!0}}),z(T),Ne("click",W,m),Ne("click",M,()=>g(_(a))),Ne("click",$,()=>h(_(a))),Ne("click",J,E),S(w,T)},$$slots:{default:!0},$$legacy:!0}),ae()}var bk=ue("<!> <!>",1);function Ik(t){let e=L(!1);function n(){O(e,!0)}var r=bk(),i=te(r);js(i,{title:"Save Puzzle",clickCb:n,children:(a,l)=>{pk(a)},$$slots:{default:!0}});var o=F(i,2);Ck(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var wk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function wp(t){var e=wk();S(t,e)}var yk=ue("<button> </button>"),Ok=ue('<div class="tab-panel svelte-f72dxl"><!></div>'),Ak=ue('<div class="tabbed-menu svelte-f72dxl"><div class="tab-header svelte-f72dxl"></div> <div class="tab-content svelte-f72dxl"></div></div>');function xk(t,e){let n=U(e,"tabs",24,()=>[]),r=U(e,"activeTab",12,0);function i(u){r(u)}var o=Ak(),a=j(o);qe(a,5,n,pt,(u,d,g)=>{var h=yk(),v=j(h,!0);z(h),ee(()=>{av(h,`tab-button ${(r()===g?"active":"")??""} svelte-f72dxl`),rt(v,_(d).label)}),Ne("click",h,()=>i(g)),S(u,h)}),z(a);var l=F(a,2);qe(l,5,n,pt,(u,d,g)=>{var h=me(),v=te(h);{var m=E=>{var I=Ok(),b=j(I);md(b,()=>_(d).component,(w,A)=>{A(w,Cy(()=>_(d).props||{}))}),z(I),S(E,I)};Q(v,E=>{r()===g&&_(d).component&&E(m)})}S(u,h)}),z(l),z(o),S(t,o)}var Lk=ue('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function Sk(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var o=Lk(),a=j(o);gn(a),di(2),z(o),ee(()=>{xt(o,"disabled",i()),by(a,n()),a.disabled=i()}),Ne("change",a,function(...l){var u;(u=r())==null||u.apply(this,l)}),S(t,o)}var Nk=ue('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Ti(t,e){se(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),o=U(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}fe();var l=Nk(),u=j(l);Sk(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var d=F(u,2),g=j(d,!0);z(d),z(l),ee(()=>{xt(l,"disabled",o()),rt(g,r())}),Ne("click",d,Fn(a)),S(t,l),ae()}var Dk=ue('<div class="settings-tab-layout"><!> <!> <!></div>');function Rk(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=L();D(()=>r(),()=>{O(i,r())}),Ce(),fe();var o=Dk(),a=j(o);Ti(a,{name:"Check Conflicts",get value(){return _(i).checkConflicts},updateCb:d=>nr("checkConflicts",d)});var l=F(a,2);Ti(l,{name:"Highlight Pencilmark Conflicts",get value(){return _(i).highlightPencilmarkConflicts},updateCb:d=>nr("highlightPencilmarkConflicts",d)});var u=F(l,2);Ti(u,{name:"Highlight Cells Seen By Selection",get value(){return _(i).highlightCellsSeenBySelection},updateCb:d=>nr("highlightCellsSeenBySelection",d)}),z(o),S(t,o),ae()}var Tk=ue('<div class="settings-tab-layout"><!> <!> <!> <!> <button class="form-button svelte-1w0umsh">Restore default settings</button></div>');function kk(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=L();D(()=>r(),()=>{O(i,r())}),Ce(),fe();var o=Tk(),a=j(o);Ti(a,{get value(){return _(i).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:h=>nr("darkMode",h)});var l=F(a,2);Ti(l,{get value(){return _(i).penToolActive},name:"Pen Tool",updateCb:h=>nr("penToolActive",h)});var u=F(l,2);Ti(u,{disabled:!0,get value(){return _(i).letterToolActive},name:"Letter Tool",updateCb:h=>nr("letterToolActive",h)});var d=F(u,2);Ti(d,{name:"Show Solution",get value(){return _(i).showSolution},updateCb:h=>nr("showSolution",h)});var g=F(d,2);z(o),Ne("click",g,function(...h){var v;(v=py)==null||v.apply(this,h)}),S(t,o),ae()}var Mk=ue('<div class="setting-color-name svelte-1dih2k"> </div> <div class="picker-container svelte-1dih2k"><!></div>',1);function _s(t,e){let n=U(e,"name",8),r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0);var o=Mk(),a=te(o),l=j(a,!0);z(a);var u=F(a,2),d=j(u);ol(d,{get value(){return r()},get onChangeCb(){return i()}}),z(u),ee(()=>rt(l,n())),S(t,o)}var Uk=ue('<div class="settings-tab-layout"><div class="grid svelte-169jaiw"><!> <!> <!> <!> <!></div></div>');function Gk(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=L();D(()=>r(),()=>{O(i,r())}),Ce(),fe();var o=Uk(),a=j(o),l=j(a);_s(l,{name:"Non-given value color:",get value(){return _(i).non_given_color},onChangeCb:v=>{nr("non_given_color",v)}});var u=F(l,2);_s(u,{name:"Seen cells color:",get value(){return _(i).seen_cells_color},onChangeCb:v=>{nr("seen_cells_color",v)}});var d=F(u,2);_s(d,{name:"Selection color:",get value(){return _(i).selection_color},onChangeCb:v=>{nr("selection_color",v)}});var g=F(d,2);_s(g,{name:"Conflicting cells color:",get value(){return _(i).conflict_cells_color},onChangeCb:v=>{nr("conflict_cells_color",v)}});var h=F(g,2);_s(h,{name:"Conflicting pencilmarks color:",get value(){return _(i).conflict_marks_color},onChangeCb:v=>{nr("conflict_marks_color",v)}}),z(a),z(o),S(t,o),ae()}var $k=ue('<div class="settings-content svelte-heebuf"><!></div>');function yp(t,e){let n=U(e,"showModal",12,!1);const r=[{label:"Display",component:Gk},{label:"Gameplay",component:Rk},{label:"Other",component:kk}];Qr(t,{title:"Settings",get showModal(){return n()},set showModal(i){n(i)},children:(i,o)=>{var a=$k(),l=j(a);xk(l,{tabs:r}),z(a),S(i,a)},$$slots:{default:!0},$$legacy:!0})}var Fk=ue("<!> <!>",1);function Pk(t){let e=L(!1);function n(){O(e,!0)}var r=Fk(),i=te(r);js(i,{title:"Settings",clickCb:n,children:(a,l)=>{wp(a)},$$slots:{default:!0}});var o=F(i,2);yp(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var zk=ue('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function Hk(t){var e=zk(),n=j(e);hk(n);var r=F(n,2);Ik(r);var i=F(r,2);ak(i,{});var o=F(i,2);QT(o);var a=F(o,2);Pk(a),z(e),S(t,e)}var Wk=ue('<button class="entry-panel-button svelte-yhctjt" title="Set current cell values as the puzzle solution">Set Solution</button>');function Bk(t,e){se(e,!1);let n=L(!1);function r(){const i=De(hn),o=[];for(let a=0;a<i.nRows;a++){const l=[];for(let u=0;u<i.nCols;u++){const d=i.getCell(a,u);if(!d)continue;const g=d.value;l.push(g)}o.push(l)}Jd(o)}fe(),Gl(t,{get isOpen(){return _(n)},set isOpen(i){O(n,i)},$$slots:{"panel-header":(i,o)=>{Ul(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(a){O(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=Wk();Ne("click",a,r),S(i,a)}},$$legacy:!0}),ae()}const Yk={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function jk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,l==="]"?"<=":"<"]}}return null}function Kk(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function Vk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function Xk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Op(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function qk(t,e){const n=Kk(t);if(n)return{type:"number",parsed:parseInt(n)};const r=Vk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=Xk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=jk(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=Op(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var Y=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.CAVE_CELLS_FILLOMINO_REGIONS="cave_cells_fillomino_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(Y||{});function it(t,e){return`${e}[${t.r},${t.c}]`}function Bo(t,e){return t.map(r=>it(r,e))}function Ee(t,e){return"["+Bo(t,e).join(",")+"]"}function xe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function It(t){return t.map(n=>xe(n))}function ki(t){return`constraint alldifferent([${t.join(",")}]);
`}function kt(t,e){return t&&(t=`
% ${e}
`+t),t}function zl(t,e){const n=[We.N,We.S,We.W,We.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function o_(t,e,n=void 0){n||(n=[We.N,We.S,We.W,We.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+It(o).join(",")+"]";r.push(a)}return r}function He(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const[a,l]of Object.entries(i)){const u=n(t,o,a,l);r+=u}return r}function jn(t,e,n){let r="";const i=e.tool_id,o=n.get(i);if(o){const a=o(t,e);r+=a}return r}class Zk{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=Yk){const i=qk(e,r);if(!i)return null;if(i.type==="number"){const l=i.parsed;return["",String(l)]}let o="";if(i.type==="variable"){const l=i.parsed;return this.hasVariable(l)||(o+=`var int: ${l};
`,this.addVariable(l)),[o,l]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const l=i.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];o+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];o+=`constraint ${n} ${d} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const l=i.parsed,u="["+l.join(",")+"]";for(const d of l){const g=parseInt(d);Number.isNaN(g)&&!this.hasVariable(d)&&(o+=`var int: ${d};
`,this.addVariable(d))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function Qk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let l=null,u=0,d=0,g=0;for(let w=0;w<e.length;w++){const A=e[w].trim(),T=A.match(r),k=A.match(i),G=A.match(o),W=A.match(a);if(!l&&(T||k||G||W)){l={name:(T||k||G||W)[1],startLine:w,content:[e[w]],type:T?"function":k?"predicate":G?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(l&&(l.content.push(e[w]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&d===0&&g===0&&A.endsWith(";"))){n[l.name]={...l,endLine:w};let M=l.startLine;for(;M>0&&e[M-1].trim().startsWith("%");)M-=1;n[l.name].startLine=M,l=null}}function h(w){const A=[],T=w.match(r),k=w.match(i),G=w.match(o);for(const W of Object.keys(n)){const M=n[W].type;if(M==="function"||M==="test"||M==="predicate"){if(T||k||G)continue;new RegExp(`\\b${W}\\s*\\(`,"g").test(w)&&A.push(W)}else if(M==="variable"){const $=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${W}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match($))continue;new RegExp(`\\b${W}\\b`,"g").test(w)&&A.push(W)}}return A}const v=new Set;for(const w of e)h(w).forEach(T=>v.add(T));const m=Object.values(n).filter(w=>!v.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,A)=>A.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const I=[];let b=!1;for(const w of E)w.trim()===""?b||(I.push(w),b=!0):(I.push(w),b=!1);return I.join(`
`)}function Gh(t){let e=t,n=e.length;for(;e=Qk(e),e.length!=n;)n=e.length;return e}function Ap(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function Jk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let l=0;l<e.nRows;l++){const u=[];for(let d=0;d<e.nCols;d++){const g=e.getCell(l,d);!g||g.region===null?u.push(r-1):u.push(g.region)}o.push(u)}const a=Ap(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Hl(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function on(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*Jr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Xs(t,e){return[...Object.values(t)].find(i=>{const o=i.cell;if(e.c===o.c&&e.r===o.r)return i})}function xp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Lp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function s_(t,e,n,r){const i=t.grid;let o="";if(!!!t.elementsDict.get(f.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const d of u){const g=i.getRegion(d),h=Ee(g,r);o+=`constraint count_eq(${h}, ${n}, ${e});
`}}return o}function fo(t,e,n,r){let i=xp(e,n,r);return i+=Lp(e,n,r),i+=s_(t,e,n,r),i}function eM(t,e){const n=e.tool_id,r=t.puzzle.grid,i=t.puzzle.valid_digits,o=Math.min(...i);let a="";for(const l of r.getAllCells()){if(l.value!==null)continue;const u=it(l,Y.BOARD);a+=`constraint ${u} == ${o};
`}return a=kt(a,`${n}`),a}function tM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),a=It(o);let l=`
% ${i}
`;return l+=ki(a),l}function nM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),a=It(o);let l=`
% ${i}
`;return l+=ki(a),l}function rM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),l="["+It(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function iM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),l="["+It(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function oM(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,a]=[r.nRows,r.nCols];if(o!==a)return"";let l=`
% ${i}
`;const u=r.getPositiveDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h+(g-v));if(!m||!E)continue;const I=xe(m),b=xe(E),A=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;l+=A}}return l}function sM(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,a]=[r.nRows,r.nCols];if(o!==a)return"";let l=`
% ${i}
`;const u=r.getNegativeDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h-(g-v));if(!m||!E)continue;const I=xe(m),b=xe(E),A=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;l+=A}}return l}function aM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;const a=[...r.getUsedRegions()].length;for(let l=0;l<a;l++){const u=r.getDisjointGroup(l),h=`constraint alldifferent(${`[${It(u).join(",")}]`});
`;o+=h}return o}function lM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getNeighboorCells(a).filter(m=>m.r+m.c>=a.r+a.c),d=xe(a),h=`[${It(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function cM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getCellsByKnightMove(a).filter(m=>m.r>=a.r||m.c>=a.c),d=xe(a),h=`[${It(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function uM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=kt(r,`${n}`),r}function dM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=kt(r,`${n}`),r}function _M(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=kt(r,`${n}`),r}function fM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=kt(r,`${n}`),r}function gM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[a,l]of Jr(r)){const u=xe(a),d=xe(l),g=`constraint not consecutive_p(${u}, ${d});
`;o+=g}return o}function hM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[a,l]of Jr(r)){const u=xe(a),d=xe(l),g=`constraint not ratio_p(${u}, ${d}, 2);
`;o+=g}return o}function vM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const l=r.getRow(a.r),d=`[${It(l).join(",")}]`,g=a.c+1,h=`constraint indexing_column_p(${d}, ${g});
`;o+=h}return o}function pM(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=kt(r,`${n}`),r}function mM(t,e){const n=e.tool_id;let r="";return r+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,r=kt(r,`${n}`),r}function EM(t,e){const n=e.tool_id;let r="";return r+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,r=kt(r,`${n}`),r}function CM(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;let o="";const a=n.grid.getUsedRegions();for(const l of a){const u=r.getRegion(l),d=[...new Set(u.map(h=>h.r))],g=[...new Set(u.map(h=>h.c))];for(const h of g){const v=u.filter(E=>E.c===h),m=Ee(v,Y.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}for(const h of d){const v=u.filter(E=>E.r===h),m=Ee(v,Y.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}}return o=kt(o,`${i}`),o}function bM(t){const e=t.elementsDict;if(!!e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let i="";i+=`
% row constraints (digits do not repeat on rows)
`;const o=r.nRows;for(let u=0;u<o;u++){const d=r.getRow(u),g=It(d),h=ki(g);i+=h}i+=`
% col constraints (digits do not repeat on cols)
`;const a=r.nCols;for(let u=0;u<a;u++){const d=r.getCol(u),g=It(d),h=ki(g);i+=h}if(!!!e.get(f.CHAOS_CONSTRUCTION)){i+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const d of u){const g=r.getRegion(d),h=It(g),v=ki(h);i+=v}}return i}function IM(t){const e=t.elementsDict,n=f.HEXED_SUDOKU;if(!!!e.get(n))return"";let i=`
% ${n}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const wM=new Map([[f.LEAVE_EMPTY_CELLS_EMPTY,eM],[f.POSITIVE_DIAGONAL,tM],[f.NEGATIVE_DIAGONAL,nM],[f.POSITIVE_ANTIDIAGONAL,rM],[f.NEGATIVE_ANTIDIAGONAL,iM],[f.PARITY_MIRROR_POSITIVE_DIAGONAL,oM],[f.PARITY_MIRROR_NEGATIVE_DIAGONAL,sM],[f.ANTIKING,lM],[f.ANTIKNIGHT,cM],[f.ANTI_LONG_KNIGHT,dM],[f.ANTI_GIRAFFE,uM],[f.DISJOINT_GROUPS,aM],[f.TANGO,_M],[f.NONCONSECUTIVE,gM],[f.NONRATIO,hM],[f.ANTI_ENTROPY,fM],[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,CM],[f.GLOBAL_INDEXING_COLUMN,vM],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,pM],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,mM],[f.YIN_YANG_FILLOMINO_PARITY,EM]]);function yM(t,e){let n="";const r=e.tool_id,i=wM.get(r);if(i){const o=i(t,e);n+=o}return n}function Sp(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return It(r)}function Np(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${It(n.slice(1)).join(",")}]`}function Dp(t,e,n){let r="";const o="["+Sp(t,e).join(",")+"]";for(const a of e.lines){const l=Np(t,a);r+=`constraint ${n}(${o}, ${l});
`}return r}function Rp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=Dp(t,o,n);r+=a}return r}function OM(t,e){const n=t.puzzle.grid;return Rp(n,e,"arrow_p")}function AM(t,e){const n=t.puzzle.grid;return Rp(n,e,"bulbous_arrow_p")}function xM(t,e,n,r){let i="";const o=Sp(e,r);if(o.length===1){const a=o[0],l=r.lines;for(const u of l){const g=`constraint average_arrow_p(${Np(e,u)}, ${a});
`;i+=g}}return i}function LM(t,e){return He(t,e,xM)}function SM(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=Ee(o,Y.UNKNOWN_REGIONS),l=r.lines.map(u=>u.map(d=>e.getCell(d.r,d.c)).filter(d=>!!d));for(const u of l){if(u.length<=1)continue;const d=Ee(u.slice(1),Y.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${d});
`}return i+=Dp(e,r,"arrow_p"),i}function NM(t,e){return He(t,e,SM)}const DM=new Map([[f.ARROW,OM],[f.AVERAGE_ARROW,LM],[f.BULBOUS_ARROW,AM],[f.CHAOS_CONSTRUCTION_ARROW,NM]]);function RM(t,e){return jn(t,e,DM)}function _i(t,e){const n=on(t,e.cells);return It(n)}function TM(t,e,n){const i=`[${_i(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Tp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=TM(o,a,n);r+=l}return r}function Wl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function kM(t,e,n,r){const i=t.puzzle.grid,a=`[${_i(i,n).join(",")}]`,l=n.value,u=Wl(t,l,e);if(!u)return"";const d=u[1];let g=u[0];return g+=`constraint ${r}(${a}, ${d});
`,g}function a_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const[o,a]of Object.entries(i)){const l=kM(t,o,a,n);r+=l}return r}function MM(t,e,n,r){const i=_i(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return ki(i);const l=Wl(t,a,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint killer_cage(${o}, ${u});
`,d}function UM(t,e){return He(t,e,MM)}function GM(t,e,n,r){const i=_i(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return ki(i);const l=Wl(t,a,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint inverted_killer_cage_p(${o}, ${u});
`,d}function $M(t,e){return He(t,e,GM)}function FM(t,e){return a_(t,e,"sum_cage_p")}function PM(t,e){return Tp(t,e,"parity_balance_cage_p")}function zM(t,e){return Tp(t,e,"sum_cage_look_and_say_p")}function HM(t,e){return a_(t,e,"divisible_killer_cage_p")}function WM(t,e){return a_(t,e,"spotlight_cage_p")}function BM(t,e,n,r){const o=`[${_i(e,r).join(",")}]`,a=r.value;if(a){const l=parseInt(a);return`constraint unique_values_cage_p(${o}, ${l}, ALLOWED_DIGITS);
`}return""}function YM(t,e){return He(t,e,BM)}function jM(t,e,n,r){const o=`[${_i(e,r).join(",")}]`,a=r.value;let l="";const u=Wl(t,a,n);if(u){const m=u[1];l+=u[0],l+=`constraint sum(${o}) == ${m};
`}const d=r.cells,g=on(e,d),h=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!h.includes(I)&&h.push(I)});const v=Ee(h,Y.BOARD);return l+=`constraint vaulted_cage_p(${o}, ${v});
`,l}function KM(t,e){return He(t,e,jM)}function VM(t,e,n,r,i){const o=on(e,r.cells),a=Ee(o,Y.BOARD),l=Ee(o,Y.YIN_YANG),u=r.value;if(u){const d=parseInt(u);return`constraint ${i}(${a}, ${l}, ${d});
`}return""}function kp(t,e,n,r){let i="";const o=n.constraints;if(!o)return i;for(const[a,l]of Object.entries(o)){const u=VM(t,e,a,l,r);i+=u}return i}function XM(t,e){const n=t.puzzle.grid;return kp(t,n,e,"yin_yang_antithesis_killer_cage_p")}function qM(t,e){const n=t.puzzle.grid;return kp(t,n,e,"yin_yang_breakeven_killer_cage_p")}function ZM(t,e,n,r){const i=on(e,r.cells),o=Ee(i,Y.BOARD),a=Ee(i,Y.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function QM(t,e){return He(t,e,ZM)}function JM(t,e,n,r){const i=on(e,r.cells),o=Ee(i,Y.BOARD),a=Ee(i,Y.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function e3(t,e){return He(t,e,JM)}function t3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=Hl(Object.values(r)),o=t.puzzle.grid;for(const a of i.values())if(!(a.length<=1))for(const[l,u]of a.flatMap((d,g)=>a.slice(g+1).map(h=>[d,h]))){const g=`[${_i(o,l).join(",")}]`,v=`[${_i(o,u).join(",")}]`;n+=`constraint multisets_equal_p(${g}, ${v});
`}return n}const n3=new Map([[f.KILLER_CAGE,UM],[f.INVERTED_KILLER_CAGE,$M],[f.SUM_CAGE,FM],[f.PARITY_BALANCE_CAGE,PM],[f.SUM_CAGE_LOOK_AND_SAY,zM],[f.DIVISIBLE_KILLER_CAGE,HM],[f.SPOTLIGHT_CAGE,WM],[f.UNIQUE_DIGITS_CAGE,YM],[f.VAULTED_CAGE,KM],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,XM],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,qM],[f.DOUBLERS_KILLER_CAGE,QM],[f.NEGATORS_KILLER_CAGE,e3],[f.MULTISET_CAGE,t3]]);function r3(t,e){return jn(t,e,n3)}function i3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,l=r-o,u=Math.floor(n+a),d=Math.floor(r+l);return t.getCell(u,d)}function o3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=i3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function s3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;for(let d=0;d<i.length;d++){const g=i[d],h=g.cell,v=d+1,[m,E,I]=o3(o,h),b=Ee(m,Y.GALAXY_REGIONS),w=Ee(E,Y.GALAXY_REGIONS),A=Ee(I,Y.GALAXY_REGIONS);n+=`% galaxy ${v}
`,n+=`constraint galaxy_center_p(${b}, ${w}, ${A}, ${v});
`,n+=`constraint connected_region(${Y.GALAXY_REGIONS}, ${v});
`;const T=g.value;if(!T)continue;const k=parseInt(T);n+=`constraint galaxy_sum_p(${Y.BOARD}, ${Y.GALAXY_REGIONS}, ${k}, ${v});
`}if(!i.length)return n;const a=o.nCols*o.nRows,u=`${i.length+1}..${a}`;return n+=`
constraint order_remaining_galaxies_p(${Y.GALAXY_REGIONS}, ${u});
`,n}function a3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function l3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],l=r.value,u=a3(t,l,n);if(!u)return"";const d=u[1];let g=u[0],h=[];if(o%1===0&&a%1===0?h=ll(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(h=cl(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!h.length)return"";const v=Ee(h,Y.BOARD),m=Ee(h,Y.YIN_YANG);return g+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${d};
`,g}function c3(t,e){return He(t,e,l3)}const u3=new Map([[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,c3],[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,s3]]);function d3(t,e){return jn(t,e,u3)}function $h(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return It(n)}function _3(t,e){const r="["+$h(t,e.cells).join(",")+"]",o="["+$h(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}function f3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=_3(i,o);n+=a}return n}const g3=new Map([[f.CLONE_REGION,f3]]);function h3(t,e){return jn(t,e,g3)}function l_(t,e){const n=on(t,e.cells);return It(n)}function v3(t,e,n){const i=`[${l_(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function c_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=v3(t,o,n);r+=a}return r}function p3(t,e,n,r,i,o=""){const l=`[${l_(e,r).join(",")}]`;let u=r.value;if(u||(u=o),u){const d=parseInt(u);return`constraint ${i}(${l}, ${d});
`}return""}function Mp(t,e,n,r,i=""){let o="";const a=n.constraints;if(!a)return o;for(const[l,u]of Object.entries(a)){const d=p3(t,e,l,u,r,i);o+=d}return o}function m3(t,e,n,r){const o=`[${l_(e,r).join(",")}]`,a=r.value;if(!a)return"";const l=Op(a);if(!l)return"";let u="";for(const g of l){const h=parseInt(g);Number.isNaN(h)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const d="["+l.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${d});
`,u}function E3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const l=m3(t,i,o,a);n+=l}return n}function C3(t,e){const n=t.puzzle.grid;return Mp(t,n,e,"corner_sum_p")}function b3(t,e){const n=t.puzzle.grid;return Mp(t,n,e,"corner_even_count_p")}function I3(t,e){const n=t.puzzle.grid;return c_(n,e,"corner_sum_of_three_equals_the_other_p")}function w3(t,e){const n=t.puzzle.grid;return c_(n,e,"equal_diagonal_differences_p")}function y3(t,e){const n=t.puzzle.grid;return c_(n,e,"product_square_p")}const O3=new Map([[f.QUADRUPLE,E3],[f.CORNER_SUM,C3],[f.CORNER_EVEN_COUNT,b3],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,I3],[f.PRODUCT_SQUARE,y3],[f.EQUAL_DIAGONAL_DIFFERENCES,w3]]);function A3(t,e){return jn(t,e,O3)}function qs(t,e,n){return[...Object.values(t)].find(o=>{const a=o.cells[0],l=o.cells[1];if(e.c===a.c&&e.r===a.r&&n.c===l.c&&n.r===l.r||e.c===l.c&&e.r===l.r&&n.c===a.c&&n.r===a.r)return o})}function Bl(t,e){const n=on(t,e.cells);return It(n)}function x3(t,e,n){const r=Bl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function L3(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=x3(t,o,n);r+=a}return r}function S3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function N3(t,e,n,r,i,o=""){var m;const a=Bl(e,r),[l,u]=a,d=(m=r.value)!=null&&m.length?r.value:o,g=S3(t,d,n);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint ${i}(${l}, ${u}, ${h});
`,v}function Yl(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=N3(t,a,l,u,n,r);i+=d}return i}function D3(t,e){const n=Bl(t,e),[r,i]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${i} = 5;
`:`constraint ${r} + ${i} = 10;
`}function R3(t,e){let n="";const r=e.constraints,i=t.puzzle.grid;for(const u of Object.values(r)){const d=D3(i,u);n+=d}if(!e.negative_constraints)return n;const o=!!e.negative_constraints[f.NEGATIVE_V_CONSTRAINT],a=!!e.negative_constraints[f.NEGATIVE_X_CONSTRAINT],l=!!e.negative_constraints[f.NEGATIVE_XV_CONSTRAINT];if(!o&&!a&&!l)return n;for(const[u,d]of Jr(i)){const g=qs(r,u,d),h=xe(u),v=xe(d);if(o&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${h} + ${v} != 5;
`;n+=m}else if(a&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${h} + ${v} != 10;
`;n+=m}else if(l&&!g){const m=`constraint ${h} + ${v} != 5 /\\ (${h} + ${v} != 10);
`;n+=m}}return n}function T3(t,e){const n=t.puzzle.grid;let r=Yl(t,e,"ratio_p","2");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RATIOS_GIVEN])return r;const o=e.constraints;let a=[];o&&(a=Object.values(o).map(u=>u.value).map(u=>u||"2")),a.length===0&&a.push("2");const l=[...new Set(a)];console.log("values",l),r+=`
% ${f.ALL_RATIOS_GIVEN}
`;for(const[u,d]of Jr(n)){if(qs(o,u,d))continue;const h=xe(u),v=xe(d);for(const m of l){const E=parseInt(m),I=`constraint not ratio_p(${h}, ${v}, ${E});
`;r+=I}}return r}function k3(t,e){const n=t.puzzle.grid;let r=Yl(t,e,"abs_difference","1");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_DIFFERENCES_GIVEN])return r;const o=e.constraints;let a=[];o&&(a=Object.values(o).map(u=>u.value).map(u=>u||"1")),a.length===0&&a.push("1");const l=[...new Set(a)];r+=`
% ${f.ALL_DIFFERENCES_GIVEN}
`;for(const[u,d]of Jr(n)){if(qs(o,u,d))continue;const h=xe(u),v=xe(d);for(const m of l){const E=parseInt(m),I=`constraint abs(${h} - ${v}) != ${E};
`;r+=I}}return r}function M3(t,e){const n=Bl(t,e),[r,i]=n,o=e.value;return o==="<"?`constraint ${r} < ${i};
`:o===">"?`constraint ${r} > ${i};
`:""}function Fh(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=M3(i,o);n+=a}return n}function U3(t,e){return Yl(t,e,"edge_sum_p")}function G3(t,e){return Yl(t,e,"edge_modulo_p")}function $3(t,e){const n=t.puzzle.grid;return L3(n,e,"edge_factor_p")}function Up(t,e,n){const r=xe(e),i=xe(n);let o="";if(e.r==n.r){const u=t.getRow(e.r)[0];o=xe(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];o=xe(u)}return o?`xy_differences_p(${r}, ${i}, ${o});
`:""}function F3(t,e){const n=on(t,e.cells),[r,i]=n,o=Up(t,r,i);return o.length===0?"":`constraint ${o}`}function P3(t,e){const n=e.constraints,r=t.puzzle.grid;let i="";for(const a of Object.values(n)){const l=F3(r,a);i+=l}if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_XY_DIFFERENCES_GIVEN])return i;i+=`
% ${f.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[a,l]of Jr(r)){if(qs(n,a,l))continue;const d=Up(r,a,l);if(d.length===0)continue;const g=`constraint not ${d}`;i+=g}return i}function z3(t,e,n){const r=on(t,e.cells),[i,o]=It(r),a=Bo(r,Y.YIN_YANG),[l,u]=a;return`constraint ${n}(${i}, ${o}, ${l}, ${u});
`}function Gp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=z3(t,o,n);r+=a}return r}function H3(t,e){const n=t.puzzle.grid;let r=Gp(n,e,"yin_yang_kropki_p");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_KROPKI_GIVEN])return r;const o=e.constraints;r+=`
% ${f.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[a,l]of Jr(n)){if(qs(o,a,l))continue;const d=xe(a),g=xe(l),h=it(a,Y.YIN_YANG),v=it(l,Y.YIN_YANG),m=`constraint not yin_yang_kropki_p(${d}, ${g}, ${h}, ${v});
`;r+=m}return r}function W3(t,e){const n=t.puzzle.grid;return Gp(n,e,"yin_yang_white_kropki_p")}function B3(t,e,n){const r=on(t,e.cells),i=Bo(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function jl(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=B3(t,o,n);r+=a}return r}function Y3(t,e){const n=t.puzzle.grid;return jl(n,e,Y.UNKNOWN_REGIONS)}function j3(t,e){const n=t.puzzle.grid;return jl(n,e,Y.FILLOMINO_REGIONS)}function K3(t,e){const n=t.puzzle.grid;return jl(n,e,Y.SUGURU_REGIONS)}function V3(t,e){const n=t.puzzle.grid;return jl(n,e,Y.CAVE_SHADING)}const X3=new Map([[f.XV,R3],[f.DIFFERENCE,k3],[f.RATIO,T3],[f.EDGE_INEQUALITY,Fh],[f.ONE_WAY_DOOR,Fh],[f.EDGE_SUM,U3],[f.EDGE_MODULO,G3],[f.EDGE_FACTOR,$3],[f.XY_DIFFERENCES,P3],[f.YIN_YANG_KROPKI,H3],[f.YIN_YANG_WHITE_KROPKI,W3],[f.FILLOMINO_REGION_BORDER,j3],[f.UNKNOWN_REGION_BORDER,Y3],[f.CHAOS_CONSTRUCTION_SUGURU_BORDER,K3],[f.EDGE_CAVE_ONE_OF_EACH,V3]]);function q3(t,e){return jn(t,e,X3)}function Z3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Kl(t,e,n=!1){let r=on(t,e.cells);return n&&(r=[...new Set(r)]),It(r)}function Q3(t,e,n,r=!1){const o=`[${Kl(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function mt(t,e,n,r=!1){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const l of Object.values(o)){const u=Q3(a,l,n,r);i+=u}return i}function J3(t,e,n,r,i,o=""){var v;const l=`[${Kl(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,d=Z3(t,u,n);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${i}(${l}, ${g});
`,h}function _r(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=J3(t,a,l,u,n,r);i+=d}return i}function e5(t,e,n,r=""){let o=e.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>!!v),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const u=`[${It(o).join(",")}]`;let d=e.value;d||(d=r);const g=parseInt(d);return`constraint ${n}(${u}, ${g}, ${a});
`}function u_(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=e5(a,u,n,r);i+=d}return i}function t5(t,e){return mt(t,e,"renban",!0)}function n5(t,e){return mt(t,e,"double_renban_p",!0)}function r5(t,e){return mt(t,e,"renrenbanban_p",!0)}function i5(t,e){return mt(t,e,"knabner_p",!0)}function o5(t,e){return mt(t,e,"renban_or_nabner_line_p",!0)}function s5(t,e){return mt(t,e,"out_of_order_consecutive_line_p")}function a5(t,e){return _r(t,e,"whispers","5")}function l5(t,e){return _r(t,e,"whispers","4")}function c5(t,e){return mt(t,e,"strictly_increasing")}function u5(t,e){return mt(t,e,"fuzzy_thermo_p")}function d5(t,e){return mt(t,e,"increasing")}function _5(t,e){return _r(t,e,"custom_thermo_p")}function f5(t,e){return mt(t,e,"palindrome")}function g5(t,e){return _r(t,e,"sum_line_p")}function h5(t,e){return mt(t,e,"xv_line_p")}function v5(t,e){return _r(t,e,"at_least_x_line_p","10")}function p5(t,e){return _r(t,e,"product_line_p")}function m5(t,e){return _r(t,e,"maximum_adjacent_difference_line_p","2")}function E5(t,e){return mt(t,e,"adjacent_multiples_line_p")}function C5(t,e){return mt(t,e,"index_line_p")}function b5(t,e){return mt(t,e,"zipper_line_p")}function I5(t,e){return u_(t,e,"segmented_sum_line_p")}function w5(t,e){return mt(t,e,"segmented_sum_and_renban_line_p")}function y5(t,e){return u_(t,e,"n_consecutive_renban_line_p")}function O5(t,e){return u_(t,e,"n_consecutive_fuzzy_sum_line_p")}function A5(t,e,n){const r=on(t,n.cells);let i="";const o=[];for(let l=0;l<r.length;l++){const u=r[l],d=t.getRow(u.r),g=Ee(d,Y.BOARD),h=`cycle_${e}_${l}`;o.push(h);const v=u.c+1;i+=`var int: ${h} = cycle_order_f(${g}, ${v});
`}const a="["+o.join(",")+"]";return i+=`constraint strictly_increasing(${a});
`,i}function x5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const l=A5(i,o,a);n+=l}return n}function L5(t,e){return mt(t,e,"adjacent_differences_count_line_p")}function S5(t,e){return mt(t,e,"same_parity_line_p")}function N5(t,e){return _r(t,e,"renban_or_whispers_p","5")}function D5(t,e){return mt(t,e,"alldifferent",!0)}function R5(t,e){return mt(t,e,"repeated_digits_line_p")}function T5(t,e){return mt(t,e,"superfuzzy_arrow_p")}function k5(t,e){return mt(t,e,"ambiguous_arrow_p",!0)}function M5(t,e){return mt(t,e,"headless_arrow_p")}function U5(t,e){return _r(t,e,"unimodular_line_p","3")}function G5(t,e){return _r(t,e,"modular_line_p","3")}function $5(t,e){return _r(t,e,"modular_or_unimodular_line_p","3")}function F5(t,e){return mt(t,e,"arithmetic_sequence_line_p")}function P5(t,e){return mt(t,e,"odd_even_oscillator_line_p")}function z5(t,e){return _r(t,e,"high_low_oscillator_line_p","5")}function H5(t,e){return mt(t,e,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function W5(t,e){return mt(t,e,"look_and_say_line_p",!0)}function B5(t,e){const n=on(t,e.cells);function r(d){const g=[];let h=null;for(const v of d)v.r!=h?(g.push([v]),h=v.r):g[g.length-1].push(v);return g}const i=r(n);if(i.length<2)return"";const o=i[0],l=`[${It(o).join(",")}]`;let u="";for(let d=1;d<i.length;d++){const g=i[d],v=`[${It(g).join(",")}]`;u+=`constraint sum(${v}) == sum(${l});
`}return u}function Y5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=B5(i,o);n+=a}return n}function j5(t,e){return mt(t,e,"between_line_p")}function K5(t,e){return mt(t,e,"tightrope_line_p")}function V5(t,e){return mt(t,e,"double_arrow_p")}function X5(t,e){return mt(t,e,"split_peas_p")}function q5(t,e){return mt(t,e,"parity_count_line_p")}function Z5(t,e){return mt(t,e,"product_of_ends_equals_sum_of_line_p")}function $p(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function Q5(t,e,n,r){let i="";const o=on(e,r.cells),a=$p(o);if(!a.length)return"";const l=`sum_line_${n}`;i+=`var int: ${l};
`;for(const u of a){const g=`constraint sum(${Ee(u,Y.BOARD)}) == ${l};
`;i+=g}return i}function J5(t,e){return He(t,e,Q5)}function eU(t,e,n,r){return`constraint entropic_line_p(${`[${Kl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function tU(t,e){return He(t,e,eU)}function nU(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Kl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function rU(t,e){return He(t,e,nU)}function iU(t,e){return mt(t,e,"peapods_p")}function oU(t,e,n,r,i=""){const o=t.puzzle.grid,a=on(o,n.cells),l=Ee(a,Y.BOARD),u=Ee(a,Y.YIN_YANG);let d=n.value;d||(d=i);const g=parseInt(d);return`constraint ${r}(${l}, ${u}, ${g});
`}function Fp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;for(const[a,l]of Object.entries(o)){const u=oU(t,a,l,n,r);i+=u}return i}function sU(t,e){return Fp(t,e,"yin_yang_shaded_whispers_line_p","5")}function aU(t,e){return Fp(t,e,"yin_yang_unshaded_modular_line_p","3")}function lU(t,e,n){const r=on(t,e.cells),i=Ee(r,Y.BOARD),o=Ee(r,Y.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function d_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=lU(o,a,n);r+=l}return r}function cU(t,e){return d_(t,e,"yin_yang_unshaded_entropic_line_p")}function uU(t,e){return d_(t,e,"yin_yang_indexing_line_coloring_p")}function dU(t,e){const n=t.grid,i=t.elementsDict.get(f.YIN_YANG_REGION_SUM_LINE);if(!i||!i.constraints)return"";let o=`
% ${e}
`;for(const a of Object.values(i.constraints)){const u=a.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),d=Ee(u,Y.YIN_YANG);o+=`constraint count_unique_values(${d}) >= 2;
`}return o}function _U(t,e){let n=d_(t,e,"yin_yang_region_sum_line_p");return e.negative_constraints&&!!e.negative_constraints[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(n+=dU(t.puzzle,f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),n}function fU(t,e,n){const r=t.puzzle.grid,i=on(r,e.cells),o=Ee(i,Y.VALUES_GRID);return`constraint ${n}(${o});
`}function __(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=fU(t,o,n);r+=a}return r}function gU(t,e){return __(t,e,"between_line_p")}function hU(t,e){return __(t,e,"double_arrow_p")}function vU(t,e){return __(t,e,"strictly_increasing")}function pU(t,e,n,r){const i=on(e,r.cells),o=$p(i);if(o.sort((d,g)=>g.length-d.length),o.length<=1)return"";let a="";const l=o[0],u=Ee(l,Y.VALUES_GRID);for(const d of o.slice(1)){const g=Ee(d,Y.VALUES_GRID),h=`constraint subset_p(${u}, ${g});
`;a+=h}return a}function mU(t,e){return He(t,e,pU)}const EU=new Map([[f.THERMOMETER,c5],[f.FUZZY_THERMOMETER,u5],[f.SLOW_THERMOMETER,d5],[f.CUSTOM_THERMOMETER,_5],[f.RENBAN_LINE,t5],[f.DOUBLE_RENBAN_LINE,n5],[f.RENRENBANBAN_LINE,r5],[f.NABNER_LINE,i5],[f.WHISPERS_LINE,a5],[f.DUTCH_WHISPERS,l5],[f.RENBAN_OR_WHISPERS_LINE,N5],[f.RENBAN_OR_NABNER_LINE,o5],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,s5],[f.N_CONSECUTIVE_RENBAN_LINE,y5],[f.PALINDROME,f5],[f.SUM_LINE,g5],[f.PRODUCT_LINE,p5],[f.XV_LINE,h5],[f.AT_LEAST_X_LINE,v5],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,m5],[f.SAME_PARITY_LINE,S5],[f.ADJACENT_MULTIPLES_LINE,E5],[f.ADJACENT_DIFFERENCES_COUNT_LINE,L5],[f.LOOK_AND_SAY_LINE,W5],[f.ROW_SUM_LINE,Y5],[f.INDEX_LINE,C5],[f.ZIPPER_LINE,b5],[f.SEGMENTED_SUM_LINE,I5],[f.SEGMENTED_SUM_AND_RENBAN_LINE,w5],[f.N_CONSECUTIVE_FUZZY_SUM_LINE,O5],[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,H5],[f.SUPERFUZZY_ARROW,T5],[f.AMBIGUOUS_ARROW,k5],[f.HEADLESS_ARROW,M5],[f.ARITHMETIC_SEQUENCE_LINE,F5],[f.ODD_EVEN_OSCILLATOR_LINE,P5],[f.HIGH_LOW_OSCILLATOR_LINE,z5],[f.UNIQUE_VALUES_LINE,D5],[f.REPEATED_DIGITS_LINE,R5],[f.UNIMODULAR_LINE,U5],[f.MODULAR_LINE,G5],[f.MODULAR_OR_UNIMODULAR_LINE,$5],[f.REGION_SUM_LINE,J5],[f.ENTROPIC_LINE,tU],[f.ENTROPIC_OR_MODULAR_LINE,rU],[f.ROW_CYCLE_THERMOMETER,x5],[f.PEAPODS,iU],[f.BETWEEN_LINE,j5],[f.TIGHTROPE_LINE,K5],[f.DOUBLE_ARROW_LINE,V5],[f.SPLIT_PEAS,X5],[f.PARITY_COUNT_LINE,q5],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,Z5],[f.DOUBLERS_BETWEEN_LINE,gU],[f.DOUBLERS_DOUBLE_ARROW_LINE,hU],[f.DOUBLERS_THERMOMETER,vU],[f.INDEXER_CELLS_REGION_SUBSET_LINE,mU],[f.YIN_YANG_SHADED_WHISPERS_LINE,sU],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,cU],[f.YIN_YANG_UNSHADED_MODULAR_LINE,aU],[f.YIN_YANG_REGION_SUM_LINE,_U],[f.YIN_YANG_INDEXING_LINE_COLORING,uU]]);function CU(t,e){return jn(t,e,EU)}function Vl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return It(i)}function Yo(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function bU(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),l=`[${Vl(e,n).join(",")}]`,u=n.value,d=Yo(t,u,i,o);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${r}(${l}, ${g});
`,h}function fr(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=bU(t,o,a,n);r+=l}return r}function IU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Vl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Yo(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E}function wU(t,e){return He(t,e,IU)}function yU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Vl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Yo(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E+=`var bool: ${b} = x_sum_p(${l}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function OU(t,e){return He(t,e,yU)}function AU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Vl(e,r),l=`[${a.join(",")}]`,u=a[0],d=r.value,g=Yo(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint x_index_p(${l}, ${u}, ${h});
`,v}function xU(t,e){return He(t,e,AU)}function LU(t,e){return fr(t,e,"x_sum_p")}function SU(t,e){return fr(t,e,"shortsighted_x_sum_p")}function NU(t,e){return fr(t,e,"broken_x_sum_p")}function DU(t,e){return fr(t,e,"shifted_x_sum_p")}function RU(t,e){return fr(t,e,"skyscrapers_p")}function TU(t,e){return fr(t,e,"x_sum_skyscrapers_p")}function kU(t,e){return fr(t,e,"battlefield_p")}function MU(t,e){return fr(t,e,"rising_streak_p")}function UU(t,e){return fr(t,e,"outside_consecutive_sum_p")}function GU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=Ee(a,Y.BOARD),u=Ee(a,Y.CELL_CENTER_LOOP),d=r.value;if(d){const g=parseInt(d);return`constraint loopwhiches_p(${l}, ${u}, ${g});
`}return""}function $U(t,e){return He(t,e,GU)}function FU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,l=e.getCellsInDirection(i.r,i.c,a),u=Ee(l,Y.BOARD),d=Ee(l,Y.UNKNOWN_REGIONS),g=r.value,h=Yo(t,g,i,o);if(!h)return"";const v=h[1];let m=h[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${d}, ${v});
`,m}function PU(t,e){return He(t,e,FU)}function zU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=a[0],u=it(l,Y.BOARD),d=Ee(a,Y.UNKNOWN_REGIONS);return`constraint chaos_construction_x_index_region_p(${u}, ${d});
`}function HU(t,e){return He(t,e,zU)}function WU(t,e){return fr(t,e,"little_killer_sum_p")}function BU(t,e){return fr(t,e,"little_killer_product_p")}function YU(t,e){return fr(t,e,"x_omit_little_killer_sum_p")}function jU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=Ee(a,Y.BOARD),u=Ee(a,Y.YIN_YANG),d=r.value;if(d){const g=parseInt(d);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${l}, ${u}, ${g});
`}return""}function KU(t,e){return He(t,e,jU)}function VU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=Ee(a,Y.VALUES_GRID),u=r.value;if(u){const d=parseInt(u);return`constraint little_killer_sum_p(${l}, ${d});
`}return""}function XU(t,e){return He(t,e,VU)}function qU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,l=e.getCellsInDirection(i.r,i.c,a),u=Ee(l,Y.PENTOMINO_REGIONS),d=r.value,g=Yo(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint pentomino_border_count_p(${u}, ${h});
`,v}function ZU(t,e){return He(t,e,qU)}const QU=new Map([[f.SANDWICH_SUM,wU],[f.X_SUM,LU],[f.SHORTSIGHTED_X_SUM,SU],[f.BROKEN_X_SUM,NU],[f.SHIFTED_X_SUM,DU],[f.SKYSCRAPERS,RU],[f.X_SUM_SKYSCRAPERS,TU],[f.X_INDEX,xU],[f.BATTLEFIELD,kU],[f.SANDWICH_SUM_XOR_X_SUM,OU],[f.RISING_STREAK,MU],[f.OUTSIDE_CONSECUTIVE_SUM,UU],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,KU],[f.LOOPWICHES,$U],[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,PU],[f.CHAOS_CONSTRUCTION_X_INDEX_REGION,HU],[f.PENTOMINO_BORDER_COUNT,ZU],[f.LITTLE_KILLER_SUM,WU],[f.LITTLE_KILLER_PRODUCT,BU],[f.X_OMIT_LITTLE_KILLER_SUM,YU],[f.NEGATORS_LITTLE_KILLER_SUM,XU]]);function JU(t,e){return jn(t,e,QU)}function Pp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=n(o,a);r+=l}return r}function eG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=Ee(o,Y.SASHIGANE),l=Ee(o,Y.SASHIGANE_BENDS),u=xe(r),d=it(r,Y.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${d}, ${a}, ${l});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function tG(t,e){return Pp(t,e,eG)}function nG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+It(o).join(",")+"]",u=Ee(o,Y.CELL_CENTER_LOOP),d=xe(r);return`constraint thermo_sightline_loop_arrow_p(${l}, ${u}, ${d});
`}function rG(t,e){return Pp(t,e,nG)}const iG=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,tG],[f.THERMO_SIGHTLINE_LOOP_ARROW,rG]]);function oG(t,e){return jn(t,e,iG)}function sG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i);return`constraint ${n}(${o});
`}function zp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=sG(o,a,n);r+=l}return r}const aG={allow_var:!0,allow_interval:!0,allow_int_list:!1};function f_(t,e,n,r=aG){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function lG(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=xe(o);let l=e.value;if(l||(l=r),!l)return"";const u=parseInt(l);return`constraint ${n}(${a}, ${u});
`}function Hp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const l of Object.values(o)){const u=lG(a,l,n,r);i+=u}return i}function Xl(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=xe(o),u=zl(t,o).map(h=>Ee(h,n)),d=it(o,n);return`constraint ${r}(${u.join(", ")}, ${d}, ${a});
`}function g_(t,e,n,r){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const l of Object.values(o)){const u=Xl(a,l,n,r);i+=u}return i}function cG(t,e){return zp(t,e,"odd_p")}function uG(t,e){return zp(t,e,"even_p")}function dG(t,e){return Hp(t,e,"low_digit_p","5")}function _G(t,e){return Hp(t,e,"high_digit_p","5")}function fG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),a=t.getNeighboorCells(i),l=Ee(a,Y.BOARD);return`constraint ${n}(${l}) == ${o};
`}function Wp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=fG(o,a,n);r+=l}return r}function gG(t,e){return Wp(t,e,"odd_count")}function hG(t,e){return Wp(t,e,"even_count")}function vG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getNeighboorCells(o);l.push(o);const u=Ee(l,Y.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function pG(t,e){return He(t,e,vG)}function mG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${Ee(l,Y.BOARD)}, ${a});
`}function EG(t,e){return He(t,e,mG)}function CG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${Ee(l,Y.BOARD)}, ${a});
`}function bG(t,e){return He(t,e,CG)}function IG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),l=Ee(a,Y.BOARD),u=o.c+1;return`constraint indexing_column_p(${l}, ${u});
`}function wG(t,e){let n=He(t,e,IG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_COLUMN_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_COLUMN_GIVEN}
`;for(const a of o.getAllCells()){if(Xs(i,a))continue;const u=o.getRow(a.r),d=Ee(u,Y.BOARD),g=a.c+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function yG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),l=Ee(a,Y.BOARD),u=o.r+1;return`constraint indexing_column_p(${l}, ${u});
`}function OG(t,e){let n=He(t,e,yG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_ROW_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_ROW_GIVEN}
`;for(const a of o.getAllCells()){if(Xs(i,a))continue;const u=o.getCol(a.c),d=Ee(u,Y.BOARD),g=a.r+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function AG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=o.r+1,u=o.c+1;if(o.region!==null){const g=o.region+1;return`constraint ${a} == ${l} \\/ ${a} == ${u} \\/ ${a} == ${g};
`}return`constraint ${a} == ${l} \\/ ${a} == ${u};
`}function xG(t,e){return He(t,e,AG)}function LG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),l=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),d=e.getCell(i.r,i.c+1);if(!a||!l||!u||!d)return"";const g=xe(a),h=xe(l),v=xe(u),m=xe(d);return`constraint groups_opposite_parity_p([${g},${h}], [${v},${m}]);
`}function SG(t,e){return He(t,e,LG)}function NG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),[a,l,u,d]=o_(t,i);return`constraint ${n}(${o}, ${a}, ${l}, ${u}, ${d});
`}function h_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=NG(o,a,n);r+=l}return r}function DG(t,e){return h_(t,e,"is_watchtower_p")}function RG(t,e){return h_(t,e,"is_not_watchtower_p")}function TG(t,e){return h_(t,e,"farsight_p")}function kG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),[l,u,d,g]=o_(e,o);return`constraint radar_p(${a}, ${l}, ${u}, ${d}, ${g}, 9);
`}function MG(t,e){let n=He(t,e,kG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RADARS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_RADARS_GIVEN}
`;for(const a of o.getAllCells()){if(Xs(i,a))continue;const u=xe(a),[d,g,h,v]=o_(o,a),m=`constraint not radar_p(${u}, ${d}, ${g}, ${h}, ${v}, 9);
`;n+=m}return n}function UG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=Ee(l,Y.BOARD),g=Ee(u,Y.BOARD),[h,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${d}, ${g}, ${h}, ${v}, ${a});
`}function GG(t,e){return He(t,e,UG)}function Bp(t,e,n){const r=e.constraints,i=Object.values(r);let o="";const a=i.map(u=>u.cell),l=new Set(a.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of i){const d=u.cell,g=t.getCell(d.r,d.c);if(!g)continue;const h=xe(g),v=t.getOrthogonallyAdjacentCells(g).filter(I=>!l.has(I)),m=Ee(v,Y.BOARD),E=`constraint ${n}(${m}, ${h});
`;o+=E}return o}function $G(t,e){const n=t.puzzle.grid;return Bp(n,e,"maximum_p")}function FG(t,e){const n=t.puzzle.grid;return Bp(n,e,"minimum_p")}function PG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(g=>g.cell),l=new Set(a.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${It([...l]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${d}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}function zG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(m=>m.cell),l=new Set(a.map(m=>n.getCell(m.r,m.c)).filter(m=>!!m)),u=n.getAllCells().filter(m=>!l.has(m)),g=`${It([...l]).join(`,
	`)}`,v=`${It([...u]).join(`,
	`)}`;return o+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,o+=`array[int] of var int: not_reverse_counting_circles = [
	${v}
];
`,o+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,o}function HG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(v=>v.cell),l=new Set(a.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${It([...l]).join(`,
	`)}`,h=`${Bo([...l],Y.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${Y.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${d}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${h}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${Y.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const v of n.getAllCells()){if(l.has(v))continue;const m=it(v,Y.COUNTING_CIRCLES_COLORS);o+=`constraint ${m} == 0;
`}for(const v of i){const m=v.cell,E=n.getCell(m.r,m.c);if(!E)continue;const I=xe(E),b=it(E,Y.COUNTING_CIRCLES_COLORS),w=v.value;w?o+=`constraint ${b} == ${w};
`:o+=`constraint ${b} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${I}, ${b}) == ${I};
`}return o+=`
`,o}function WG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(g=>g.cell),l=new Set(a.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${It([...l]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${d}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function BG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),l=zl(t,i).map(d=>Ee(d,Y.BOARD));return`constraint ${n}(${l.join(", ")}, ${o});
`}function Yp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=BG(t,o,n);r+=a}return r}function YG(t,e){const n=t.puzzle.grid;return Yp(n,e,"seen_even_count_p")}function jG(t,e){const n=t.puzzle.grid;return Yp(n,e,"seen_odd_count_p")}function KG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getCellsByKnightMove(o),u=Ee(l,Y.BOARD),d=r.value??"5",g=f_(t,d,n);if(!g)return"";let h="";const v=g[1];return h+=g[0],h+=`constraint cell_knights_whisper_p(${a}, ${u}, ${v});
`,h}function VG(t,e){return He(t,e,KG)}function XG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint yin_yang_minesweeper_p(${Ee(u,Y.YIN_YANG)}, ${a});
`}function qG(t,e){return He(t,e,XG)}function ZG(t,e){return g_(t,e,Y.YIN_YANG,"yin_yang_seen_unshaded_p")}function QG(t,e){return g_(t,e,Y.YIN_YANG,"yin_yang_seen_shaded_p")}function JG(t,e){return g_(t,e,Y.YIN_YANG,"yin_yang_seen_same_shade_p")}function e$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=it(o,Y.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),d=Ee(u,Y.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${l}, ${d});
`}function t$(t,e){return He(t,e,e$)}function n$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getNeighboorCells(o);return`constraint count(${Ee(l,Y.YIN_YANG)}, 1) == ${a};
`}function r$(t,e){return He(t,e,n$)}function i$(t,e){let n=`
% ${e.tool_id}
`;const r=e.constraints,i=Hl(Object.values(r)),o=t.puzzle.grid;for(const a of i.values()){if(a.length<=1)continue;const u=a.map(g=>g.cell).map(g=>o.getCell(g.r,g.c)).filter(g=>g!==void 0),d=Ee(u,Y.YIN_YANG);n+=`constraint all_equal(${d});
`}return n}function o$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),d=e.getCol(o.c),g=Ee(u,Y.TWO_CONTIGUOUS_REGIONS),h=Ee(d,Y.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${a}, ${l});
`}function s$(t,e){return He(t,e,o$)}function a$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=Ee(l,Y.UNKNOWN_REGIONS),g=Ee(u,Y.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${d}, ${g}, ${a});
`}function l$(t,e){return He(t,e,a$)}function c$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=it(o,Y.NURIMISAKI),l=e.getOrthogonallyAdjacentCells(o);let d=`constraint nurimisaki_unshaded_endpoint_p(${Ee(l,Y.NURIMISAKI)}, ${a});
`;return d+=Xl(e,r,Y.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),d}function u$(t,e){let n=He(t,e,c$);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const a of o.getAllCells()){if(Xs(i,a))continue;const u=it(a,Y.NURIMISAKI),d=o.getOrthogonallyAdjacentCells(a),h=`constraint not nurimisaki_unshaded_endpoint_p(${Ee(d,Y.NURIMISAKI)}, ${u});
`;n+=h}return n}function d$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=it(o,Y.SASHIGANE),u=it(o,Y.SASHIGANE_BENDS);let d=`constraint sashigane_bend_region_count_p(${a}, ${l}, sashigane);
`;return d+=`constraint ${u} = true;
`,d}function _$(t,e){return He(t,e,d$)}function f$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=it(o,Y.SASHIGANE),l=r.value;if(!l)return"";const u=parseInt(l);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function g$(t,e){return He(t,e,f$)}function h$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${it(o,Y.CELL_CENTER_LOOP)} == 1;
`:""}function v$(t,e){return He(t,e,h$)}function p$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${it(o,Y.CELL_CENTER_LOOP)} == 0;
`:""}function m$(t,e){return He(t,e,p$)}function E$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint sum(${Ee(u,Y.CELL_CENTER_LOOP)}) == ${a};
`}function C$(t,e){return He(t,e,E$)}function b$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=it(o,Y.CAVE_SHADING),u=zl(e,o),d=[];for(const h of u){const v=Ee(h,Y.CAVE_SHADING);d.push(v)}return`constraint cave_clue_p(${a}, ${l}, ${d[0]}, ${d[1]}, ${d[2]}, ${d[3]});
`}function I$(t,e){return He(t,e,b$)}function w$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=it(o,Y.CAVE_SHADING),u=it(o,Y.CAVE_REGIONS),d=zl(e,o),g=[];for(const v of d){const m=Ee(v,Y.CAVE_SHADING);g.push(m)}return`constraint cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(${a}, ${l}, ${u}, ${Y.CAVE_REGIONS}, ${g[0]}, ${g[1]}, ${g[2]}, ${g[3]});
`}function y$(t,e){return He(t,e,w$)}function O$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const l=parseInt(a);let u="";const d=xe(o),g=it(o,Y.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(o),v=Ee(h,Y.BOARD),m=Ee(h,Y.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${d});
`;const E=e.getCellsByKnightMove(o),I=Ee(E,Y.BOARD),b=Ee(E,Y.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${d});
`;const w=[We.NE,We.NW,We.SE,We.SW],A=[];for(const G of w)e.getCellsInDirection(o.r,o.c,G).forEach(M=>A.push(M));const T=Ee(A,Y.BOARD),k=Ee(A,Y.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${k}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${d});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${l};
`,u}function A$(t,e){return He(t,e,O$)}function x$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const l=parseInt(a);let u="";const d=xe(o),g=it(o,Y.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(o),v=Ee(h,Y.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${g}) >= ${l};
`;const m=[We.N,We.S,We.E,We.W],E=[];for(const I of m){const b=e.getCellsInDirection(o.r,o.c,I);if(!b.length)continue;const w=Ee(b,Y.BOARD),A=Ee(b,Y.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,k=`in_arrow_${n}_${I}[1]`;E.push(k),u+=`array[index_set(${w})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${T}, ${d}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${l};
`,u}function L$(t,e){return He(t,e,x$)}function S$(t,e,n,r){return Xl(e,r,Y.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function N$(t,e){return He(t,e,S$)}function D$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function R$(t,e){return He(t,e,D$)}function T$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function k$(t,e){return He(t,e,T$)}function M$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${it(o,Y.CONNECT_FOUR)});
`:""}function U$(t,e){return He(t,e,M$)}function G$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${it(o,Y.CONNECT_FOUR)});
`:""}function $$(t,e){return He(t,e,G$)}function F$(t,e){let n="";const r=e.constraints,i=t.puzzle.grid,o=Object.values(r).map(d=>d.cell),a=new Set(o.map(d=>i.getCell(d.r,d.c)).filter(d=>!!d)),l=Ee([...a],Y.NURIKABE_REGIONS);n+=`constraint all_different(${l});
`;let u=0;for(const[d,g]of Object.entries(r)){const h=g.cell,v=i.getCell(h.r,h.c);if(!v)continue;const m=g.value;if(!m)continue;const E=f_(t,m,d);if(!E)continue;const I=E[1];n+=E[0];const b=it(v,Y.NURIKABE_REGIONS);n+=`constraint nurikabe_island_product_of_sum_and_size_p(${Y.BOARD}, ${Y.NURIKABE_REGIONS}, ${b}, ${I});
`,u+=1}return n+=`constraint count_unique_values(array1d(${Y.NURIKABE_REGIONS})) == ${u+1};
`,n}function P$(t,e,n,r){return Xl(e,r,Y.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function z$(t,e){return He(t,e,P$)}function H$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),l=it(o,Y.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${Y.NURIKABE_REGIONS}, ${l}, ${a});
`}function W$(t,e){return He(t,e,H$)}function B$(t,e){let n="";const r=e.constraints,i=Hl(Object.values(r)),o=t.puzzle.grid;for(const d of i.values())if(!(d.length<=1))for(const[g,h]of d.flatMap((v,m)=>d.slice(m+1).map(E=>[v,E]))){const v=g.cell,m=h.cell,E=o.getCell(v.r,v.c),I=o.getCell(m.r,m.c);if(!E||!I)continue;const b=it(E,Y.BOARD),w=it(I,Y.BOARD);n+=`constraint ${b} == ${w};
`}const l=[...i.values()].map(d=>d[0].cell).map(d=>o.getCell(d.r,d.c)).filter(d=>d!==void 0),u=Ee(l,Y.BOARD);return n+=`constraint alldifferent(${u});
`,n}function Y$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(h=>h.cell),l=new Set(a.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),d=`${Bo([...l],Y.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_size_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_size_clues);
`;for(const h of Object.values(r)){const v=h.cell,m=n.getCell(v.r,v.c);if(!m)continue;const E=xe(m),I=it(m,Y.SHIKAKU_REGIONS),b=it(m,Y.SHIKAKU_WIDTH),w=it(m,Y.SHIKAKU_HEIGHT);o+=`constraint shikaku_region_size_p(${Y.SHIKAKU_REGIONS}, ${I}, ${E}, ${b}, ${w});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${Y.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`),o}function j$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(v=>v.cell),l=new Set(a.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${Bo([...l],Y.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_sum_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,m]of Object.entries(r)){const E=m.cell,I=n.getCell(E.r,E.c);if(!I)continue;const b=it(I,Y.SHIKAKU_REGIONS),w=m.value??"",A=f_(t,w,v,g);if(!A)continue;const T=A[1];o+=A[0],o+=`constraint shikaku_region_sum_p(${Y.BOARD}, ${Y.SHIKAKU_REGIONS}, ${b}, ${T});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${Y.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`),o}const K$=new Map([[f.ODD,cG],[f.EVEN,uG],[f.LOW_DIGIT,dG],[f.HIGH_DIGIT,_G],[f.ODD_MINESWEEPER,gG],[f.EVEN_MINESWEEPER,hG],[f.DIAGONALLY_ADJACENT_SUM,bG],[f.ORTHOGONAL_SUM,EG],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,pG],[f.FRIENDLY_CELL,xG],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,SG],[f.WATCHTOWER,DG],[f.NOT_WATCHTOWER,RG],[f.FARSIGHT,TG],[f.RADAR,MG],[f.INDEXING_COLUMN,wG],[f.INDEXING_ROW,OG],[f.SANDWICH_ROW_COL_COUNT,GG],[f.SEEN_EVEN_COUNT,YG],[f.SEEN_ODD_COUNT,jG],[f.CELL_KNIGHT_WHISPERS,VG],[f.YIN_YANG_MINESWEEPER,qG],[f.YIN_YANG_SEEN_UNSHADED_CELLS,ZG],[f.YIN_YANG_SEEN_SHADED_CELLS,QG],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,JG],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,t$],[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,r$],[f.YIN_YANG_LABELED_SHADE_CELL,i$],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,s$],[f.SEEN_REGION_BORDERS_COUNT,l$],[f.NURIMISAKI_UNSHADED_ENDPOINTS,u$],[f.NURIKABE_SEEN_WATERWAY_CELLS,z$],[f.NURIKABE_ISLAND_SIZE_CELL,W$],[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,F$],[f.SASHIGANE_BEND_REGION_COUNT,_$],[f.SASHIGANE_REGION_SUM,g$],[f.CELL_ON_THE_LOOP,v$],[f.CELL_NOT_ON_THE_LOOP,m$],[f.COUNT_LOOP_NEIGHBOUR_CELLS,C$],[f.CAVE_CLUE,I$],[f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,y$],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,A$],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,L$],[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,N$],[f.DIRECTED_PATH_START,R$],[f.DIRECTED_PATH_END,k$],[f.CONENCT_FOUR_RED,U$],[f.CONNECT_FOUR_YELLOW,$$],[f.MAXIMUM,$G],[f.MINIMUM,FG],[f.COUNTING_CIRCLES,PG],[f.REVERSE_COUNTING_CIRCLES,zG],[f.COLORED_COUNTING_CIRCLES,HG],[f.UNIQUE_CELLS,WG],[f.SHIKAKU_REGION_SIZE,Y$],[f.SHIKAKU_REGION_SUM,j$],[f.TELEPORT,B$]]);function V$(t,e){return jn(t,e,K$)}function gr(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=n(o,a);r+=l}return r}function X$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.UNKNOWN_REGIONS),a=e.directions,l=[];for(const g of a){const h=t.getCellsInDirection(r.r,r.c,g),v=Ee(h,Y.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_different(${g}, ${o})`).join(" + ")} == ${i};
`}function q$(t,e){return gr(t,e,X$)}function Z$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.UNKNOWN_REGIONS),a=e.directions,l=[];for(const g of a){const h=t.getCellsInDirection(r.r,r.c,g),v=Ee(h,Y.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_uninterrupted(${g}, ${o})`).join(" + ")} + 1 == ${i};
`}function Q$(t,e){return gr(t,e,Z$)}function J$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.YIN_YANG),a=e.directions;let l="";for(const u of a){const d=t.getCellsInDirection(r.r,r.c,u),g=Ee(d,Y.BOARD),h=Ee(d,Y.YIN_YANG);l+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${g}, ${h}) == ${i};
`}return l}function eF(t,e){return gr(t,e,J$)}function tF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let a="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=Ee(u,Y.YIN_YANG);a+=`constraint count(${d}, 1) == ${i};
`}return a}function nF(t,e){let n=gr(t,e,tF);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const a of o.getAllCells()){const l=Xs(i,a),u=l?l.directions:[],d=xe(a),g=[We.E,We.N,We.S,We.W];for(const h of g){if(u.includes(h))continue;const v=o.getCellsInDirection(a.r,a.c,h),m=Ee(v,Y.YIN_YANG);n+=`constraint count(${m}, 1) != ${d};
`}}return n}function rF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.YIN_YANG),a=e.directions,l=[];for(const d of a){const g=t.getCellsInDirection(r.r,r.c,d),h=Ee(g,Y.YIN_YANG),v=Ee(g,Y.FILLOMINO_REGIONS);l.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${h}, ${v})`)}return l.length?`constraint ${l.join(" + ")} == ${i};
`:""}function iF(t,e){return gr(t,e,rF)}function oF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,a=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count(${Ee(d,Y.NURIKABE_SHADING)}, 1)`;a.push(h)}return`constraint ${a.join(" + ")} = ${i};
`}function sF(t,e){return gr(t,e,oF)}function aF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,a=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${Ee(d,Y.CELL_CENTER_LOOP)})`;a.push(h)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function lF(t,e){return gr(t,e,aF)}function cF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.GALAXY_REGIONS),a=e.directions,l=[];for(const d of a){const g=t.getCellsInDirection(r.r,r.c,d),v=`count(${Ee(g,Y.GALAXY_REGIONS)}, ${o})`;l.push(v)}return l.length?`constraint ${l.join(" + ")} = ${i};
`:""}function uF(t,e){return gr(t,e,cF)}function dF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let a="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),g="["+It(u).join(",")+"]";a+=`constraint hot_arrows_p(${g}, ${i});
`}return a}function _F(t,e){return gr(t,e,dF)}function fF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let a="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=Ee(u,Y.BOARD);a+=`constraint cold_arrows_p(${d}, ${i});
`}return a}function gF(t,e){return gr(t,e,fF)}function hF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.CONNECT_FOUR),a=e.directions,l=[];for(const g of a){const h=t.getCellsInDirection(r.r,r.c,g);l.push(...h)}return l.length===0?"":`constraint count(${Ee(l,Y.CONNECT_FOUR)}, ${o}) == ${i};
`}function vF(t,e){return gr(t,e,hF)}function pF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=it(r,Y.UNKNOWN_REGIONS),a=e.directions;let l="";for(const u of a){const d=t.getCellsInDirection(r.r,r.c,u),g=Ee(d,Y.UNKNOWN_REGIONS);l+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${g});
`}return l}function mF(t,e){return gr(t,e,pF)}const EF=new Map([[f.HOT_ARROWS,_F],[f.COLD_ARROWS,gF],[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,q$],[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,Q$],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,eF],[f.LOOP_CELL_COUNT_ARROWS,lF],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,iF],[f.YIN_YANG_COUNT_SHADED_CELLS,nF],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,uF],[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,sF],[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,vF],[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,mF]]);function CF(t,e){return jn(t,e,EF)}function bF(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=kt(e,`${t}`),e}function IF(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=kt(e,`${t}`),e}function wF(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=kt(e,`${t}`),e}function yF(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=kt(e,`${t}`),e}function OF(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.LITS_REGIONS,l=Y.CAVE_REGIONS;let u=`
% ${e}
`;u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${l}, ${a});
`,u+=`constraint lits_4_per_region_p(${l}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const d=r.getUsedRegions();d.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of d){const h=r.getRegion(g),m=`constraint count_eq(${Ee(h,Y.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function AF(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.CAVE_SHADING,a=Y.BOARD_REGIONS,l="renban_cave_regions";let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${l});
`,u+=`constraint renban_caves_p(${Y.BOARD}, ${l});
`,u}function xF(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.BOARD,a=Y.CAVE_REGIONS;let l=`
% ${e}
`;return l+=`constraint cave_wall_suguru_p(${o}, ${a});
`,l}function LF(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.BOARD,a=Y.CAVE_SHADING,l=Y.CAVE_CELLS_FILLOMINO_REGIONS;let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_cells_fillomino_p(${o}, ${a}, ${l});
`,u}function SF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(w=>w.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.CAVE_SHADING,l=Y.CAVE_REGIONS;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_p(${a}, ${l});
`,e.negative_constraints&&(!!e.negative_constraints[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]&&(u+=wF(f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),!!e.negative_constraints[f.CAVE_CELLS_ARE_ODD]&&(u+=bF(f.CAVE_CELLS_ARE_ODD)),!!e.negative_constraints[f.CAVE_WALLS_ARE_EVEN]&&(u+=IF(f.CAVE_WALLS_ARE_EVEN)),!!e.negative_constraints[f.CAVE_LITS]&&(u+=OF(t,f.CAVE_LITS)),!!e.negative_constraints[f.RENBAN_CAVES]&&(u+=AF(t,f.RENBAN_CAVES)),!!e.negative_constraints[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]&&(u+=yF(f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),!!e.negative_constraints[f.CAVE_WALL_SUGURU]&&(u+=xF(t,f.CAVE_WALL_SUGURU)),!!e.negative_constraints[f.CAVE_CELLS_FILLOMINO]&&(u+=LF(t,f.CAVE_CELLS_FILLOMINO))),u}function NF(t){let e="";return e+=`constraint connect_four_draw_p(${Y.CONNECT_FOUR});
`,e=kt(e,`${t}`),e}function DF(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${Y.BOARD}, ${Y.CONNECT_FOUR});
`,e=kt(e,`${t}`),e}function RF(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${Y.BOARD}, ${Y.CONNECT_FOUR}, 3);
`,e=kt(e,`${t}`),e}function TF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a="connect_four";let l=`
% ${i}
`;if(l+=`% 1 - Red, 2 - Yellow
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${a};
`,!e.negative_constraints)return l;const u=!!e.negative_constraints[f.CONNECT_FOUR_DRAW],d=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],g=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(l+=NF(f.CONNECT_FOUR_DRAW)),d&&(l+=RF(f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),g&&(l+=DF(f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),l}function kF(t){let e="";return e+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function MF(t){let e="";return e+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function UF(t){let e="";return e+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function GF(t){let e="";return e+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,e=kt(e,`${t}`),e}function $F(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.GALAXY_REGIONS,l=Y.GALAXY_SIZES,u=r.nCols*r.nRows;let d=`
% ${i}
`;if(d+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${a};
`,d+=`constraint galaxy_restrict_numbering_p(${a});
`,d+=`array[0..${u}] of var 0..${u}: ${l};
`,d+=`constraint galaxy_sizes_p(${a}, ${l});
`,d+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${l});
`,d+=`constraint gallaxy_connected_regions_p(${a});
`,!e.negative_constraints)return d;const g=!!e.negative_constraints[f.EVERY_CELL_BELONGS_TO_A_GALAXY],h=!!e.negative_constraints[f.TWO_SYMMETRIC_GALAXIES],v=!!e.negative_constraints[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS];return g&&(d+=kF(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),v&&(d+=MF(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),h&&(d+=UF(f.TWO_SYMMETRIC_GALAXIES)),m&&(d+=GF(f.TWO_SYMMETRIC_GALAXIES)),d}function FF(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function PF(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function zF(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function HF(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function WF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(m=>m.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=e.negative_constraints,l=a?!!a[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${i}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${l});
`,!a)return u;const d=!!a[f.NOT_LOOP_SIZED_REGIONS],g=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],h=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],v=!!a[f.MODULAR_LOOP];return g&&(u+=PF(f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),h&&(u+=FF(f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),d&&(u+=zF(t,f.NOT_LOOP_SIZED_REGIONS)),v&&(u+=HF(t,f.MODULAR_LOOP)),u}function BF(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function YF(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function jF(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=kt(e,`${t}`),e}function KF(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function VF(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=kt(n,`${e}`),n}function Vt(t,e,n){return t*n+e+1}function XF(t){const e=t.grid;function n(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r+h,u.c,e.nCols);d.push([g,v]),d.push([v,g])}return d}function r(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r,u.c+h,e.nCols);d.push([g,v]),d.push([v,g])}return d}const i=[],a=t.elementsDict.get(f.MAZE_WALL);if(!a||!a.constraints)return i;for(const l of Object.values(a.constraints)){const u=l.coords;if(u.length===1){const d=u[0],h=ll(d).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Vt(h[0].r,h[0].c,e.nCols),m=Vt(h[3].r,h[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Vt(h[1].r,h[1].c,e.nCols),m=Vt(h[2].r,h[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let d=0;d<u.length-1;d++){const g=kN(Wv(u[d],u[d+1]),.5),v=cl(g).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function qF(t){const e=t.grid,n=[],i=t.elementsDict.get(f.ONE_WAY_DOOR);if(!i||!i.constraints)return n;for(const o of Object.values(i.constraints)){const l=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,d]=l,g=o.value,h=Vt(u.r,u.c,e.nCols),v=Vt(d.r,d.c,e.nCols);g==="<"?n.push([h,v]):g===">"&&n.push([v,h])}return n}function ZF(t){const e=[];for(const n of t.getAllCells()){const r=Vt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Vt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function QF(t){const e=t.grid,n=[],r=[],o=t.elementsDict.get(f.TELEPORT),a=o?Object.values(o):[];let l=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const d=Hl(a);let g=1;for(const h of d.values())if(!(h.length<=1)){for(const[v,m]of h.flatMap((E,I)=>h.slice(I+1).map(b=>[E,b]))){const E=Vt(v.cell.r,v.cell.c,e.nCols),I=Vt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[v.cell.r][v.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const v of h){const m=Vt(v.cell.r,v.cell.c,e.nCols);r.push(m)}g++}l=d.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:l}}function JF(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(M=>M.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a="",l=ZF(r);const u=XF(n),d=qF(n);u.push(...d);const g=n.elementsDict;l=l.filter(M=>!u.some($=>M[0]===$[0]&&M[1]===$[1]));const h=QF(n);if(h.tp_edges.length){l.push(...h.tp_edges);const M=Ap(h.tp_arr),$=h.tp_count;a+=`
% teleports grid
`,a+=`array[ROW_IDXS, COL_IDXS] of 0..${$}: teleports = array2d(ROW_IDXS, COL_IDXS, ${M});
`}t.edge_list=l,console.log(l);const v=r.nRows*r.nCols,m=l.length,E="["+l.map(M=>M[0]).join(",")+"]",I="["+l.map(M=>M[1]).join(",")+"]";a+=`array[int] of int: dpath_from = ${E};
`,a+=`array[int] of int: dpath_to = ${I};
`,a+=`var 1..${v}: dpath_source;
`,a+=`var 1..${v}: dpath_target;
`,a+=`array[1..${v}] of var bool: dpath_ns;
`,a+=`array[1..${m}] of var bool: dpath_es;
`,a+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,a+=`
% Direct Path no crossings
`;for(let M=0;M<r.nRows-1;M++)for(let $=0;$<r.nCols-1;$++){const J=r.getCell(M,$),oe=r.getCell(M,$+1),ie=r.getCell(M+1,$),ce=r.getCell(M+1,$+1);if(!J||!oe||!ie||!ce)continue;const be=Vt(J.r,J.c,r.nCols),Z=Vt(oe.r,oe.c,r.nCols),Ae=Vt(ie.r,ie.c,r.nCols),we=Vt(ce.r,ce.c,r.nCols),Se=[[be,we],[we,be],[Z,Ae],[Ae,Z]].map(ye=>l.findIndex(Re=>ye[0]===Re[0]&&ye[1]===Re[1])).filter(ye=>ye!==-1);if(Se.length){const ye=Se.map(Re=>`dpath_es[${Re+1}]`).join(",");a+=`constraint sum([${ye}]) <= 1;
`}}const b=g.get(f.TELEPORT),w=b?Object.values(b):[];if(h.tp_count>0){a+=`
% At most 1 edge per teleporter
`;for(const M of w){const $=M.cell,J=r.getCell($.r,$.c);if(!J)continue;const oe=r.getNeighboorCells(J),ie=Vt(J.r,J.c,r.nCols),ce=[];for(const Z of oe){if(w.some(Oe=>Oe.cell.r===Z.r&&Oe.cell.c==Z.c&&Oe.value===M.value))continue;const we=Vt(Z.r,Z.c,r.nCols);ce.push([ie,we]),ce.push([we,ie])}const be=ce.map(Z=>l.findIndex(Ae=>Z[0]===Ae[0]&&Z[1]===Ae[1])).filter(Z=>Z!==-1);if(be.length){const Z=be.map(Ae=>`dpath_es[${Ae+1}]`).join(",");a+=`constraint sum([${Z}]) <= 1;
`}}}if(!e.negative_constraints)return a;const A=!!e.negative_constraints[f.DIRECTED_PATH_IS_PARITY_LINE],T=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],k=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],G=!!e.negative_constraints[f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],W=!!e.negative_constraints[f.DIRECTED_PATH_IS_REGION_SUM_LINE];return k&&(a+=BF(f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),A&&(a+=KF(f.DIRECTED_PATH_IS_PARITY_LINE)),T&&(a+=YF(f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),G&&(a+=VF(n,f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),W&&(a+=jF(f.DIRECTED_PATH_IS_REGION_SUM_LINE)),a}function e8(t,e){const n=t.grid;let r=`
% ${e}
`;const i=Y.YIN_YANG;for(const[o,a]of Jr(n)){const l=xe(o),u=xe(a),d=`${i}[${o.r},${o.c}]`,g=`${i}[${a.r},${a.c}]`,h=`constraint (${d} == 1 /\\ ${g} == 1) -> abs(${l} - ${u}) >= 5;
`;r+=h}return r}function t8(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(d=>i.region!==null&&d.region===i.region),a=it(i,Y.BOARD),l=it(i,Y.YIN_YANG),u=Ee(o,Y.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${l}, ${u});
`}return n=kt(n,`${e}`),n}function n8(t){let e=`
% ${t}
`;return e+=`constraint yin_yang_identical_digits_diagonally_belong_to_same_region_p(${Y.BOARD}, ${Y.YIN_YANG});
`,e}function r8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,e.negative_constraints&&(!!e.negative_constraints[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]&&(a+=t8(n,f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),!!e.negative_constraints[f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]&&(a+=e8(n,f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),!!e.negative_constraints[f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION]&&(a+=n8(f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION))),a}function i8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Jr(n)){const a=xe(i),l=xe(o),u=it(i,Y.NURIMISAKI),d=it(o,Y.NURIMISAKI),g=`constraint (${u} == 0 /\\ ${d} == 0) -> abs(${a} - ${l}) >= 5;
`;r+=g}return r}function o8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(a+=i8(n,f.NURIMISAKI_PATH_GERMAN_WHISPERS)),a}function s8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function a8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(a+=s8(t,f.NURIKABE_NO_REPEATS_IN_ISLANDS)),a}function l8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function c8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows),u="["+Lt.range(1,a+1).join(",")+"]";let d="";return d+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: unknown_regions;
`,d+=`constraint chaos_construction_p(unknown_regions, ${u}, ${a});
`,d+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,d}function u8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const a=Y.UNKNOWN_REGIONS,l=Math.max(r.nCols,r.nRows),d="["+Lt.range(1,l+1).join(",")+"]";let g=`
% ${i}
`;return g+=`array[ROW_IDXS, COL_IDXS] of var 1..${l}: ${a};
`,g+=`constraint numbered_chaos_construction_p(${Y.BOARD}, ${a}, ${d}, ${l});
`,g+=`constraint no_repeats_in_unknown_regions_p(${Y.BOARD}, ${a}, ALLOWED_DIGITS, ${d});
`,g}function d8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function _8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.FILLOMINO_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,l+=`constraint fillomino_p(board, ${a});
`,l}function f8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${Y.BOARD}, ${Y.SHIKAKU_REGIONS});
`,o}function g8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.SHIKAKU_REGIONS;let l=`
% ${i}
`;const u=r.nRows,d=r.nCols;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${Y.SHIKAKU_HEIGHT};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${d}: ${Y.SHIKAKU_WIDTH};
`,l+=`constraint shikaku_p(${a}, ${Y.SHIKAKU_WIDTH}, ${Y.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_NO_REPEATS_IN_REGION]&&(l+=f8(t,f.SHIKAKU_NO_REPEATS_IN_REGION)),l}function h8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function v8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function p8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=12,l=Y.PENTOMINO_REGIONS;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: ${l};
`,u+=`constraint pentomino_tilling_p(${l});
`,u}function m8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.LITS_SHADING,l=Y.LITS_REGIONS,u=Y.LITS_GRID,d=Y.BOARD_REGIONS,g=[...r.getUsedRegions()];g.sort();const h=Math.min(...g),v=Math.max(...g);let m=`
% ${i}
`;m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${l};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..${g.length}: ${u};
`,m+=`constraint lits_shading_p(${a});
`,m+=`constraint lits_shading_ids_p(${a}, ${l});
`,m+=`constraint lits_region_and_ids_p(${d}, ${l});
`,m+=`constraint lits_tetromino_shapes_p(${l});
`,m+=`constraint lits_grid_p(${u}, ${d}, ${a}, ${h}..${v});
`,g.length&&(m+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const E of g){const I=r.getRegion(E),w=`constraint count_eq(${Ee(I,Y.LITS_SHADING)}, 1, 4);
`;m+=w}return m}function E8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.NORINORI_SHADING;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,l+=`constraint norinori_p(${Y.BOARD_REGIONS}, ${a});
`,r.getUsedRegions().size&&(l+=`
% Exactly 2 shaded cells per region (known regions)
`),l+=s_(n,2,1,Y.NORINORI_SHADING),l}function C8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.NORINORI_SHADING,l=Y.STAR_BATTLE;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,u+=Lp(2,1,l),u+=xp(2,1,l),u+=s_(n,1,1,l),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${l});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${a}, ${l});
`,u}function b8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.LITS_SHADING,l=Y.STAR_BATTLE,u=Y.LITS_WHITE_BLACK_STAR_BATTLE;let d=`
% ${i}
`;return d+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,d+=fo(n,2,1,Y.STAR_BATTLE),d+=`
% Star battle stars can't touch orthogonally or diagonally
`,d+=`constraint star_battle_no_touching_p(${l});
`,d+=`
`,d+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,d+=`
% 1 white star per row, column, region
`,d+=fo(n,1,1,Y.LITS_WHITE_BLACK_STAR_BATTLE),d+=`
% 1 black star per row, column, region
`,d+=fo(n,1,2,Y.LITS_WHITE_BLACK_STAR_BATTLE),d+=`constraint black_and_white_star_battle_p(${l}, ${u});
`,d+=`constraint lits_black_and_white_star_battle_p(${a}, ${u});
`,d}function I8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.SUGURU_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,l+=`constraint chaos_construction_suguru_p(board, ${a});
`,l}const w8=new Map([[f.CAVE,SF],[f.CONNECT_FOUR,TF],[f.GALAXIES,$F],[f.CELL_CENTER_LOOP_NO_TOUCHING,WF],[f.MAZE_DIRECTED_PATH,JF],[f.YIN_YANG,r8],[f.NURIMISAKI,o8],[f.NURIKABE,a8],[f.SHIKAKU,g8],[f.PENTOMINO_TILLING,p8],[f.CHAOS_CONSTRUCTION,c8],[f.NUMBERED_CHAOS_CONSTRUCTION,u8],[f.CHAOS_CONSTRUCTION_SUGURU,I8],[f.TWO_CONTIGUOUS_REGIONS,l8],[f.NORINORI,E8],[f.NORINORI_STAR_BATTLE,C8],[f.SASHIGANE,d8],[f.LITS,m8],[f.LITS_BLACK_WHITE_STAR_BATTLE,b8],[f.FILLOMINO,_8],[f.NEXUS,h8],[f.GOLDILOCKS_ZONE,v8]]);function y8(t,e){let n="";const r=e.tool_id,i=w8.get(r);if(i){const o=i(t,e);n+=o}return n}function O8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=fo(n,1,!0,Y.DOUBLERS),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function A8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,l+=fo(n,1,!0,Y.NEGATORS),l+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,l+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,l}function x8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=Y.INDEXER_CELLS_GRID;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,l+=fo(n,2,!0,a),l+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,l+=`constraint indexer_cells_p(board, ${a}, values_grid);
`,l}function L8(t,e,n,r){const i=r.value;return i?`constraint forbidden_adjacent_sum_p(board, ${parseInt(i)});
`:""}function S8(t,e){return He(t,e,L8)}function N8(t,e,n,r){const i=r.value;return i?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(i)});
`:""}function D8(t,e){return He(t,e,N8)}function R8(t,e,n,r){const i=r.value;return i?`constraint forbidden_knight_sum_p(board, ${parseInt(i)});
`:""}function T8(t,e){return He(t,e,R8)}function k8(t,e,n,r){const i=r.value;if(!i)return"";const o=parseInt(i),a=[...e.getUsedRegions()];a.sort();const l=a.length;return`constraint lits_max_tetromino_sum_p(${Y.BOARD}, ${Y.LITS_GRID}, ${o}, 0..${l});
`}function M8(t,e){return He(t,e,k8)}const U8=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,S8],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,D8],[f.FORBIDDEN_KNIGHT_SUM,T8],[f.LITS_MAX_TETROMINO_SUM,M8]]);function G8(t,e){return jn(t,e,U8)}const $8=new Map([[f.DOUBLERS,O8],[f.NEGATORS,A8],[f.INDEXER_CELLS,x8]]),F8=[y8,P8,d3,V$,oG,CF,q3,A3,CU,RM,r3,JU,h3,G8,yM];function P8(t,e){return jn(t,e,$8)}function z8(t,e){let n="";const r=t.elementsDict;for(const[i,o]of r.entries())for(const a of F8){let l=a(e,o);l=kt(l,`${i}`),n+=l}return n}function H8(){return`
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

`}function W8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${xe(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function jp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new Zk(t),[o,a]=[n.nRows,n.nCols],l=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(H8());let d=`1..${Math.max(o,a)}`;const g=t.elementsDict,h=!!g.get(f.FILLOMINO),v=!!g.get(f.HEXED_SUDOKU);return h?d=`1..${l}`:v?r=[...Lt.range(1,16)]:r&&(d="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${d};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),Jk(i,n),i.add(W8(t)),i.add(bM(t)),i.add(IM(t)),i.add(z8(t,i)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Ph=encodeURIComponent("4.4.2");let xr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Mi=[];let Mu;function Cs(){if(!Mu){const e=`importScripts(${JSON.stringify(xr.workerURL)});`;Mu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Mu);t.postMessage({wasmURL:xr.wasmURL?xr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Ph}`,xr.workerURL).toString(),dataURL:xr.dataURL?xr.dataURL.toString():new URL(`./minizinc.data?version=${Ph}`,xr.workerURL).toString()}),Mi.push({worker:t,runCount:0})}function Kp(){for(;Mi.length<xr.numWorkers;)Cs()}async function B8(t){if(xr={...xr,...t},Mi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Kp(),await Promise.race(Mi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class v_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new v_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Kp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:l}=Mi.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:l+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),l=[];o.onmessage=u=>{switch(u.data.type){case"error":l.push(u.data);break;case"exit":a<10?Mi.push({worker:o,runCount:a}):(o.terminate(),Cs()),n(l)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),l=[];let u=null;o.onmessage=d=>{switch(d.data.type){case"error":l.push(d.data);break;case"interface":u=d.data;break;case"exit":a<10?Mi.push({worker:o,runCount:a}):(o.terminate(),Cs()),d.data.code===0?n(u):r(l)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);Cs();let l={},u=!1,d=null;return a.onmessage=g=>{if(l[g.data.type])for(const h of l[g.data.type])h(g.data);switch(g.data.type){case"exit":a.terminate(),u=!0,l={};break;case"error":d||(d=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),l.exit)for(const g of l.exit)g({type:"exit",code:null});l={}}},on(g,h){l[g]?l[g].add(h):l[g]=new Set([h])},off(g,h){l[g]&&l[g].delete(h)},then(g,h){const v=m=>{if(m.code===0)g(m.outputFiles[i]);else{const E=d?{message:d.message,...m}:m;if(!h)throw E;h(E)}};l.exit?l.exit.add(v):l.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Cs();let o=null,a={},l=!1,u=null,d={},g="UNKNOWN";return i.onmessage=h=>{if(a[h.data.type])for(const v of a[h.data.type])v(h.data);switch(h.data.type){case"exit":i.terminate(),l=!0,a={};break;case"error":o||(o=h.data);break;case"statistics":d={...d,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!l,cancel(){if(!l){if(l=!0,i.terminate(),a.exit)for(const h of a.exit)h({type:"exit",code:null});a={}}},on(h,v){a[h]?a[h].add(v):a[h]=new Set([v])},off(h,v){a[h]&&a[h].delete(v)},then(h,v){const m=E=>{if(E.code===0)h({status:g,solution:u,statistics:d});else{const I=o?{message:o.message,...E}:E;if(!v)throw I;v(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var Y8=ue('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function j8(t,e){se(e,!1);const n=Ye(),r=()=>ge(Zr,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function o(h,v,m){var E=document.createElement("a"),I=new Blob([h],{type:m});E.href=URL.createObjectURL(I),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function a(){const h=De(Ws);return jp(h).model_str}function l(){const h=a();navigator.clipboard.writeText(h)}function u(){const h=a(),v=Gh(h);navigator.clipboard.writeText(v)}function d(){const h=_l(r()),v=a();o(v,`${h}.mzn`,"text/plain")}function g(){const h=_l(r()),v=a(),m=Gh(v);o(m,`${h}.mzn`,"text/plain")}fe(),Qr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(h){i(h)},children:(h,v)=>{var m=Y8(),E=j(m),I=F(E,2),b=F(I,2),w=F(b,2),A=F(w,2),T=F(j(A));x(T,"href","https://play.minizinc.dev/"),di(),z(A),z(m),Ne("click",E,l),Ne("click",I,u),Ne("click",b,d),Ne("click",w,g),S(h,m)},$$slots:{default:!0},$$legacy:!0}),ae()}function jo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const l=t[a];for(let u=0;u<l.length;u++){const d=e.getCell(a,u);if(!d)continue;const g=Number(l[u]),h=n.get(g);h!==void 0&&(r.push(d),i.push([h]))}}const o=Fl(r,i);po(o)}function K8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),a(v,m,t[v][m])}function a(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),a(v+1,m,E),a(v-1,m,E),a(v,m+1,E),a(v,m-1,E))}const l=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,I]of v)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+b,T=I+w;if(m.some(([k,G])=>k===A&&G===T))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(l[v].add(m),l[m].add(v));const d=[1,4,7,9],g=new Array(i.length).fill(0);function h(v,m){for(const E of l[v])if(g[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of d)if(h(v,m)){g[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=g[v];return o}function V8(t,e){const n=e.grid,i=!!e.elementsDict.get(f.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const a=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=n.getCell(d,h);if(!v||v.given||i&&!v.given&&v.value===null)continue;const m=g[h];a.push(v),l.push(m)}}const u=bp(a,l);po(u)}function X8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){jo(o,e,r);return}}}function q8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){jo(o,e,r);return}}}function Z8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const l=n[a];for(let u=0;u<l.length;u++){const d=e.getCell(a,u);if(!d)continue;r.push(d);const g=l[u];i.push([g])}}const o=Fl(r,i);po(o)}function Q8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;jo(n,e,new Map([[0,4],[1,7],[2,9]]))}function J8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;jo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function eP(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;jo(n,e,new Map([[1,7],[2,4],[3,9]]))}function tP(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;jo(n,e,new Map([[1,7],[2,8]]))}function nP(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],l=3,u=[];for(let g=0;g<i.length;g++){const h=i[g];for(let v=0;v<h.length-1;v++){const m=e.getCell(g,v),E=e.getCell(g,v+1);if(!m||!E)continue;const I=h[v],b=h[v+1];if(I===b)continue;const w={colorId:l,p1:{r:g,c:v+1},p2:{r:g+1,c:v+1}};u.push(w)}}for(let g=0;g<a;g++)for(let h=0;h<o-1;h++){const v=e.getCell(h,g),m=e.getCell(h+1,g);if(!v||!m)continue;const E=i[h][g],I=i[h+1][g];if(E===I)continue;const b={colorId:l,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(b)}const d=xs(u);Dr(d);return}}function rP(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const v=i[g.r][g.c],m=i[h.r][h.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};o.push(E)}}}const a=xs(o);Dr(a);return}}function iP(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=K8(i);if(!o)return;const a=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=e.getCell(d,h);if(!v)continue;a.push(v);const m=g[h];l.push([m])}}const u=Fl(a,l);po(u);return}}function oP(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(!g)continue;const h=i[g.r][g.c];if(h===0)continue;const m={colorId:h===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};o.push(m)}}const a=AR(o);Dr(a);return}}function sP(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let l=0;l<n.length;l++){if(!n[l])continue;const d=r[l],[g,h]=d,[v,m]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols],[E,I]=[Math.floor((h-1)/i.nCols),(h-1)%i.nCols];if(!Ps({r:v,c:m},{r:E,c:I}))continue;const A={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(A)}const a=xs(o);Dr(a)}function aP(t,e){const n=e.puzzle,r=n.grid;Dr(qd()),V8(t,n),Z8(t,r),nP(t,r),Q8(t,r),J8(t,r),rP(t,r),q8(t,r),iP(t,r),X8(t,r),oP(t,r),eP(t,r),sP(t,e),tP(t,r)}function lP(){const{subscribe:t,set:e}=Rt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var cP=ue('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function uP(t,e){se(e,!1);const n=Ye(),r=()=>ge(Ws,"$puzzleStore",n),i=()=>ge(hn,"$gridStore",n),o=()=>ge(w,"$timer",n),a=L(),l=L(),u=L(),d=L();let g=L(!0),h=L(!1),v=L(null),m=L(100),E=L("100"),I=L(null),b=L("IDLE");const w=lP();function A($){return $===null?"":String($)}function T($){const J=Math.floor($/6e4),oe=Math.floor($%6e4/1e3),ie=Math.floor($%1e3/100),ce=oe.toString().padStart(2,"0");return`${J}:${ce}.${ie}`}function k(){O(h,!0)}function G($){const J=parseInt($);typeof J=="number"&&J>=1&&O(m,J)}async function W(){O(I,0),O(b,"SOLVING...");const $=new v_;hp();const J=jp(_(a));$.addFile("test.mzn",J.model_str),w.reset(),w.start(),O(v,$.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(v).on("solution",oe=>{const ie=oe.output.json;oe.type==="solution"&&_(I)!==null&&O(I,_(I)+1),aP(ie,J)}),_(v).on("error",oe=>{O(u,"Solve"),O(b,"ERROR"),console.log(oe.message),w.stop(),_(v)&&_(v).cancel()}),_(v).on("warning",oe=>{O(b,"WARNING"),console.log(oe.message)}),_(v).then(oe=>{O(b,oe.status),O(u,"Solve"),w.stop()})}function M(){_(v)===null||!_(v).isRunning()?W():_(v)!==null&&_(v).isRunning()&&(O(b,"IDLE"),O(u,"Solve"),w.stop(),_(v).cancel())}D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(l,i())}),D(()=>{},()=>{O(u,"Solve")}),D(()=>o(),()=>{O(d,o())}),D(()=>_(v),()=>{_(v)&&(_(v)!==null&&_(v).isRunning()?O(u,"Stop"):O(u,"Solve"))}),Ce(),fe(),Gl(t,{get isOpen(){return _(g)},set isOpen($){O(g,$)},$$slots:{"panel-header":($,J)=>{Ul($,{slot:"panel-header",title:"Solver",get isOpen(){return _(g)},set isOpen(oe){O(g,oe)},$$legacy:!0})},"panel-content":($,J)=>{var oe=cP(),ie=te(oe),ce=F(ie,2);j8(ce,{get showModal(){return _(h)},set showModal(_t){O(h,_t)},$$legacy:!0});var be=F(ce,2),Z=j(be,!0);z(be);var Ae=F(be,2),we=j(Ae,!0);z(Ae);var Oe=F(Ae,2),Se=j(Oe);gn(Se),x(Se,"min",1),x(Se,"max",200),x(Se,"step",1),z(Oe);var ye=F(Oe,2),Re=j(ye,!0);ee(()=>rt(Re,`Solution Count: ${A(_(I))}`)),z(ye);var $e=F(ye,2),st=j($e,!0);ee(()=>rt(st,`Elapsed Time: ${T(_(d))}`)),z($e);var ut=F($e,2),yt=j(ut,!0);z(ut),ee(()=>{rt(Z,_(u)),rt(we,`Max. Solutions: ${_(m)}`),rt(yt,`Status: ${_(b)}`)}),Ne("click",ie,k),Ne("click",be,M),rr(Se,()=>_(E),_t=>O(E,_t)),Ne("input",Se,()=>G(_(E))),S($,oe)}},$$legacy:!0}),ae()}var dP=ue('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function _P(t){var e=dP(),n=j(e);Hk(n);var r=F(n,2),i=j(r);uP(i,{});var o=F(i,2);mT(o,{elementHandlers:Ht});var a=F(o,2);HT(a,{elementHandlers:Ht});var l=F(a,2);Bk(l,{}),z(r),z(e),S(t,e)}var fP=ne('<path class="cursor svelte-zsq70u"></path>');function gP(t,e){se(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n),i=()=>ge(Gi,"$selectionStore",n),o=L(),a=L(),l=.25;function u(g){if(!g)return"";const[h,v]=[g.c,g.r];return`M${h},${v}L${h+l},${v}L${h},${v+l}Z`}D(()=>r(),()=>{O(o,Gd(r()))}),D(()=>i(),()=>{O(a,u(i().lastCell))}),Ce(),fe();var d=fP();ee(()=>{x(d,"d",_(a)),x(d,"visibility",_(o)?"visible":"hidden")}),S(t,d),ae()}var hP=ne('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function vP(t,e){se(e,!1);let n=U(e,"gridShape",8);fe();var r=hP(),i=j(r);x(i,"x",0),x(i,"y",0),z(r),ee(()=>{x(i,"width",n().nCols),x(i,"height",n().nRows)}),S(t,r),ae()}var pP=ne('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),mP=ne('<g class="grid-lines"></g>');function EP(t,e){se(e,!1);const n=Ye(),r=()=>ge(hn,"$gridStore",n),i=L();D(()=>r(),()=>{O(i,r().getAllCells())}),Ce(),fe();var o=mP();qe(o,5,()=>_(i),pt,(a,l)=>{var u=pP();x(u,"width",1),x(u,"height",1),ee(()=>{x(u,"x",_(l).c),x(u,"y",_(l).r)}),S(a,u)}),z(o),S(t,o),ae()}function CP(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function bP(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=CP(r),o=i.length;for(let a=0;a<o;a++){const l=i[a%o],u=i[(a+1)%o],d=JSON.stringify(l),g=JSON.stringify(u);n(d,g)}}return e}function IP(t,e=0,n=!1){const r=[],i=bP(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[l,u]=a;let d=JSON.parse(l);const g=Array.from(u)[0];let h=JSON.parse(g),v=g;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Ue(d.c,d.r),b=new Ue(h.c,h.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,T=null;for(const ce of E){const be=JSON.parse(ce),Z=new Ue(be.c,be.r),Ae=b.subtract(I),we=Z.subtract(b),Oe=Ae.perpDotProduct(we);w<Oe!=n&&(w=Oe,T=be,A=ce)}if(n&&E.size>1&&o.add(v),T===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(v);const k=e*(h.c-d.c),G=e*(T.c-h.c),W=e*(d.r-h.r),M=e*(h.r-T.r),$=M+w*G,J=k+w*W,oe=new Ue(h.c+$,h.r+J),ie=4;o.has(v)?(m.push(new Ue(oe.x-ie*k,oe.y-ie*G)),m.push(new Ue(oe.x-ie*W,oe.y-ie*M))):m.push(oe),d=h,h=T,v=A}while(v!==g);r.push(m)}return r}function Eo(t,e=0,n=!1){return IP(t,e,n).map(o=>Ko(o,!0)).join("")}const wP=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5)];function yP(t,e,n=wP){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,l=t*a+o,u=(t+1)*a+o,d=l/(360/i),g=u/(360/i),h=Math.floor(d)%i,v=Math.ceil(d)%i,m=n[h].lerp(n[v],d%1),E=Math.floor(g)%i,I=Math.ceil(g)%i,b=n[E].lerp(n[I],g%1);r.push(m);for(let A=Math.ceil(d);A<=Math.floor(g);A++)r.push(n[A%i]);r.push(b);const w=new Ue(0,0);return r.push(w),r}function Vp(t,e,n=new Ue(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,l=[];for(let u=0;u<e;u++){const d=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),h=n.add(new Ue(d,g));l.push(h)}return l}function Ko(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function fi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(g=>new Ue(g.x,g.y));if(r&&o.length>1){const g=o[o.length-1];for(let v=0;v<o.length-1;v++)if(g.equals(o[v])){o.push(o[v+1]);break}const h=o[0];for(let v=1;v<o.length;v++)if(h.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let g=o[1].subtract(o[0]);g=g.normalise(),g=g.scale(e),o[0]=o[0].add(g)}if(n){const g=o.length;let h=o[g-2].subtract(o[g-1]);h=h.normalise(),h=h.scale(n),o[g-1]=o[g-1].add(h)}}if(!i)return Ko(o);const a=o[0],l=["M",`${a.x},${a.y}`],u=o.length;for(let g=2;g<u;g++){const h=o[g-2],v=o[g-1],m=o[g];let E=h.subtract(v).normalise();E=E.scale(i),E=E.add(v);let I=m.subtract(v).normalise();I=I.scale(i),I=I.add(v),l.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${I.x},${I.y}`)}const d=o[u-1];return l.push(`L${d.x},${d.y}`),l.join(" ")}function vl(t,e={}){const n=ql(t);return fi(n,e)}function Hn(t){return new Ue(t.c+.5,t.r+.5)}function ql(t){return t.map(n=>Hn(n))}function OP(t){const e=Math.min(...t.map(a=>a.r)),n=Math.max(...t.map(a=>a.r)),r=Math.min(...t.map(a=>a.c)),i=Math.max(...t.map(a=>a.c));return{x:r,y:e,width:i+1,height:n+1}}const AP=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5),new Ue(0,-.5),new Ue(0,.5),new Ue(-.5,0),new Ue(.5,0)];function xP(t,e){const n=AP[t];return n.subtract(n.scale(e))}function Xp(t,e){const n=[new Ue(t.c-e,t.r-e),new Ue(t.c+e,t.r+e)],r=[new Ue(t.c-e,t.r+e),new Ue(t.c+e,t.r-e)];return[n,r].map(o=>Ko(o,!1)).join("")}const LP=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Zl(t,e="none"){return LP.get(t)||e}function SP(t,e,n){let r=[];function o(l,u){return l.map(d=>d.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Ue(-.12,-.32),new Ue(0,-.4),new Ue(.12,-.32)]:a=[new Ue(-.12,-.4),new Ue(0,-.32),new Ue(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(l=>l.map(u=>{const d=new Ue(n+.5,e+.5);return u.add(d)})),r}function p_(t,e){const n=[new Ue(-t,0),new Ue(0,0),new Ue(0,t)],i={[We.NE]:0,[We.E]:Math.PI/4,[We.SE]:Math.PI/2,[We.S]:3*Math.PI/4,[We.SW]:Math.PI,[We.W]:5*Math.PI/4,[We.NW]:3*Math.PI/2,[We.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function NP(t,e){const r=zs(e),i=new Ue(r.c,r.r).normalise().scale(.3),o=Hn(t),a=o.subtract(i),l=o.add(i);return[a,l]}function DP(t,e){const r=NP(t,e);let i=p_(.2,e);i=i.map(u=>u.add(r[1]));const o=fi(r),a=fi(i);return o+a}function RP(t,e){const r=zs(e),i=new Ue(r.c,r.r),a=Hn(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function Uu(t,e){const r=RP(t,e);let i=p_(.1,e);i=i.map(u=>u.add(r[1]));const o=fi(r),a=fi(i);return o+a}var TP=ne('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),kP=ne('<g class="regions-border"></g>');function MP(t,e){se(e,!1);const n=Ye(),r=()=>ge(Pn,"$cellsStore",n),i=L(),o=L();function a(u,d){return u.filter(v=>v.region===d).map(v=>({r:v.r,c:v.c}))}D(()=>r(),()=>{O(i,r())}),D(()=>_(i),()=>{O(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),Ce(),fe();var l=kP();qe(l,5,()=>_(o),pt,(u,d)=>{var g=TP();ee(()=>x(g,"d",Eo(a(_(i),_(d)),0,!1))),ee(()=>x(g,"id",`region-${_(d)??""}`)),S(u,g)}),z(l),S(t,l),ae()}var UP=ne('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse"><rect></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-5l2s5m" mask="url(#selection-mask)"></path></g>');function GP(t,e){se(e,!1);const n=Ye(),r=()=>ge(Gi,"$selectionStore",n),i=()=>ge(en,"$toolStore",n),o=()=>ge(Sn,"$settingsStore",n),a=L(),l=L(),u=L(),d=L(),g=L();let h=U(e,"gridShape",8);const v=.06,m=.05,E="#080808",I="#b2b2b2";D(()=>r(),()=>{O(a,r().cells)}),D(()=>_(a),()=>{O(l,Eo(_(a),0))}),D(()=>_(a),()=>{O(u,Eo(_(a),v))}),D(()=>i(),()=>{O(d,Gd(i()))}),D(()=>o(),()=>{O(g,o().selection_color)}),Ce(),fe();var b=UP(),w=j(b),A=j(w);x(A,"stdDeviation",m),di(),z(w);var T=F(w);x(T,"x",0),x(T,"y",0);var k=j(T);x(k,"x",0),x(k,"y",0),x(k,"fill",I);var G=F(k);x(G,"fill",E),z(T);var W=F(T);z(b),ee(()=>{x(b,"visibility",_(d)?"visible":"hidden"),x(T,"width",h().nCols),x(T,"height",h().nRows),x(k,"width",h().nCols),x(k,"height",h().nRows),x(G,"d",_(u)),x(W,"d",_(l)),x(W,"fill",_(g))}),S(t,b),ae()}var $P=ne('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function FP(t,e){se(e,!1);const n=L(),r=L();let i=U(e,"grid",8);D(()=>X(i()),()=>{O(n,i().getAllCells().map(l=>({r:l.r,c:l.c})))}),D(()=>_(n),()=>{O(r,Eo(_(n),0))}),Ce(),fe();var o=$P(),a=j(o);z(o),ee(()=>x(a,"d",_(r))),S(t,o),ae()}function PP(t,e){const n=t.getRow(e.r);return new Set(n)}function zP(t,e){const n=t.getCol(e.c);return new Set(n)}function HP(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function WP(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function BP(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function YP(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function jP(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function KP(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function VP(t,e,n){let r=new Set;const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),a=o.length,l=[o[0],o[a-1]],u=o.slice(1,a-1),d=l.findIndex(h=>h===e);if(d!==-1){if(r=new Set([...r,...u]),u.length>0){const h=l.filter((v,m)=>m!==d);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...l])),r}function XP(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function qP(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function ZP(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(!!e.get(f.ANTIKNIGHT)&&(r=r.union(WP(t,i))),!!e.get(f.ANTIKING)&&(r=r.union(BP(t,i))),!!e.get(f.DISJOINT_GROUPS)&&(r=r.union(YP(t,i))),!!e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(KP(t,i))),!!e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(jP(t,i)))),r}function Gu(t,e,n,r,i){if(e.tool_id!==r||!e.constraints)return i;for(const o of Object.values(e.constraints)){const a=qP(t,n,o);i=new Set([...i,...a])}return i}function QP(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;for(const o of e.values()){const a=o.tool_id;if(o.constraints){if(a===f.BETWEEN_LINE)for(const l of Object.values(o.constraints)){const u=VP(t,i,l);r=new Set([...r,...u])}else if(a===f.RENBAN_LINE)for(const l of Object.values(o.constraints)){const u=XP(t,i,l);r=new Set([...r,...u])}r=Gu(t,o,i,f.KILLER_CAGE,r),r=Gu(t,o,i,f.PARITY_BALANCE_CAGE,r),r=Gu(t,o,i,f.SPOTLIGHT_CAGE,r)}}return r}function qp(t,e){let n=new Set;const r=t.grid,i=t.elementsDict;!i.get(f.SUDOKU_RULES_DO_NOT_APPLY)&&(n=new Set([...PP(r,e),...zP(r,e),...HP(r,e)])),n=new Set([...n,...ZP(r,i,e)]),n=new Set([...n,...QP(r,i,e)]);const a=r.getCell(e.r,e.c);return a&&n.delete(a),n}function JP(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(qp(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var e4=ne('<tspan class="svelte-fb40hv"> </tspan>'),t4=ne('<g class="center-marks-group"><text class="center-mark svelte-fb40hv" dominant-baseline="central"></text></g>');function n4(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=L(),o=L();let a=U(e,"cell",8),l=U(e,"seen_values",8);const u=.25;function d(m){return l().find(I=>I===m)!==void 0}D(()=>X(a()),()=>{O(i,Hn({r:a().r,c:a().c}))}),D(()=>r(),()=>{O(o,r().non_given_color)}),Ce(),fe();var g=me(),h=te(g);{var v=m=>{var E=t4(),I=j(E);x(I,"font-size",u),qe(I,5,()=>a().centerMarks,pt,(b,w)=>{var A=e4();const T=ft(()=>d(_(w)));ee(()=>xt(A,"conflict",_(T)));var k=j(A,!0);z(A),ee(()=>rt(k,_(w))),S(b,A)}),z(I),z(E),ee(()=>{x(I,"x",_(i).x),x(I,"y",_(i).y),x(I,"textLength",a().centerMarks.length>5?"0.9":void 0),x(I,"fill",_(o))}),S(m,E)};Q(h,m=>{a().centerMarks.length&&m(v)})}S(t,g),ae()}var r4=ne('<text class="corner-mark svelte-r25lu9" dominant-baseline="central"> </text>'),i4=ne('<g class="corner-marks-group"></g>');function o4(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=L(),o=L();let a=U(e,"cell",8),l=U(e,"seen_values",8);const u=.25,d=.28;function g(I){const b=I.cornerMarks.slice(0,8),w=Hn({r:I.r,c:I.c});return b.map((A,T)=>{const k=xP(T,d);return{pos:w.add(k),value:A,idx:T}})}function h(I){return l().find(w=>w===I)!==void 0}D(()=>r(),()=>{O(i,r().conflict_marks_color)}),D(()=>r(),()=>{O(o,r().non_given_color)}),Ce(),fe();var v=me(),m=te(v);{var E=I=>{var b=i4();qe(b,5,()=>g(a()),pt,(w,A)=>{let T=()=>_(A).pos,k=()=>_(A).value;var G=r4();x(G,"font-size",u),ee(()=>x(G,"fill",h(k())?_(i):_(o)));var W=j(G,!0);z(G),ee(()=>{x(G,"x",T().x),x(G,"y",T().y),rt(W,k())}),S(w,G)}),z(b),S(I,b)};Q(m,I=>{a().cornerMarks.length&&I(E)})}S(t,v),ae()}var s4=ne('<text class="cell-region svelte-129e584" dominant-baseline="central"> </text>');function a4(t,e){se(e,!1);const n=L();let r=U(e,"cell",8);const i=.8,o=400;D(()=>X(r()),()=>{O(n,Hn({r:r().r,c:r().c}))}),Ce(),fe();var a=me(),l=te(a);{var u=d=>{var g=s4();x(g,"font-size",i),x(g,"font-weight",o);var h=j(g,!0);z(g),ee(()=>{x(g,"x",_(n).x),x(g,"y",_(n).y),rt(h,r().region)}),S(d,g)};Q(l,d=>{r().region!==null&&d(u)})}S(t,a),ae()}var l4=ne('<text class="cell-value svelte-1p0g0b7" dominant-baseline="central"> </text>'),c4=ne("<!><!>",1),u4=ne('<g class="cell-values cell-digit-outline svelte-1p0g0b7"><!></g>');function d4(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=()=>ge(Ws,"$puzzleStore",n),o=()=>ge(mi,"$enableFogMaskStore",n),a=()=>ge(en,"$toolStore",n),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L(),E=L(),I=L();let b=U(e,"cell",8);const w=.8,A=400;function T(M,$){if(!M)return[];let oe=[...qp(_(h),$.toCoords())].map(ie=>ie.value).filter(ie=>ie!==null);return oe=[...new Set(oe)],oe}D(()=>X(b()),()=>{O(l,b().value)}),D(()=>X(b()),()=>{O(u,b().given)}),D(()=>X(b()),()=>{O(d,Hn({r:b().r,c:b().c}))}),D(()=>r(),()=>{O(g,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{O(h,i())}),D(()=>r(),()=>{O(v,r().showSolution)}),D(()=>(_(u),r()),()=>{O(m,_(u)?"var(--cell-given-color)":r().non_given_color)}),D(()=>(_(g),X(b())),()=>{O(E,T(_(g),b()))}),D(()=>(X(b()),o()),()=>{O(I,b().given&&o())}),Ce(),fe();var k=me(),G=te(k);{var W=M=>{var $=u4(),J=j($);{var oe=ce=>{a4(ce,{get cell(){return b()}})},ie=ce=>{var be=me(),Z=te(be);{var Ae=Oe=>{var Se=l4();x(Se,"font-size",w),x(Se,"font-weight",A);var ye=j(Se,!0);z(Se),ee(()=>{x(Se,"x",_(d).x),x(Se,"y",_(d).y),x(Se,"fill",_(m)),xt(Se,"given",_(u)),rt(ye,_(l))}),S(Oe,Se)},we=Oe=>{var Se=c4(),ye=te(Se);o4(ye,{get cell(){return b()},get seen_values(){return _(E)}});var Re=F(ye);n4(Re,{get cell(){return b()},get seen_values(){return _(E)}}),S(Oe,Se)};Q(Z,Oe=>{_(l)!==null?Oe(Ae):Oe(we,!1)},!0)}S(ce,be)};Q(J,ce=>{a()===f.REGIONS?ce(oe):ce(ie,!1)})}z($),ee(()=>xt($,"hide-given",_(I))),S(M,$)};Q(G,M=>{_(v)||M(W)})}S(t,k),ae()}var _4=ne("<path></path>"),f4=ne('<g class="highlights-group"></g>');function g4(t,e){se(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n);let i=U(e,"cell",8);function o(d){const g=Hn({r:i().r,c:i().c}),h=i().highlights.length;return i().highlights.map((m,E)=>{let I=yP(E,h);I=I.map(w=>w.add(g));const b=Ko(I,!0);return{colorId:m,d:b}})}fe();var a=me(),l=te(a);{var u=d=>{var g=me(),h=te(g);{var v=m=>{var E=f4();qe(E,5,()=>o(i()),pt,(I,b)=>{let w=()=>_(b).colorId,A=()=>_(b).d;var T=_4();ee(()=>{Ss(T,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),x(T,"d",A())}),S(I,T)}),z(E),S(m,E)};Q(h,m=>{i().highlights.length&&m(v)})}S(d,g)};Q(l,d=>{r()!==f.REGIONS&&d(u)})}S(t,a),ae()}var h4=ne('<path class="cell-marker" fill="none"></path>'),v4=ne('<circle fill="none" opacity="0.9"></circle>');function p4(t,e){se(e,!1);const n=L(),r=L();let i=U(e,"marker",8);const o=.3,a=.08;D(()=>X(i()),()=>{O(n,Xp(i(),o))}),D(()=>X(i()),()=>{O(r,Zl(i().colorId,"black"))}),Ce(),fe();var l=me(),u=te(l);{var d=h=>{var v=h4();x(v,"stroke-width",a),ee(()=>{x(v,"d",_(n)),x(v,"stroke",_(r))}),S(h,v)},g=h=>{var v=v4();x(v,"r",o),x(v,"stroke-width",a),ee(()=>{Ss(v,`cell-marker color-${i().colorId??""}`),x(v,"cx",i().c),x(v,"cy",i().r),x(v,"stroke",_(r))}),S(h,v)};Q(u,h=>{i().marker==="X"?h(d):h(g,!1)})}S(t,l),ae()}var m4=ne('<g class="cell-markers"></g>');function E4(t,e){let n=U(e,"markers",8);var r=m4();qe(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{p4(i,{get marker(){return _(o)}})}),z(r),S(t,r)}var C4=ne('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function b4(t,e){se(e,!1);const n=L();let r=U(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(g=>[new Ue(g.p1.c,g.p1.r),new Ue(g.p2.c,g.p2.r)]).flat()}function a(u){const d=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Zl(d,"black"):"darkred"}D(()=>X(r()),()=>{O(n,Ko(o(r().draftLine)))}),Ce(),fe();var l=C4();ee(()=>x(l,"stroke",a(r()))),x(l,"stroke-width",i),x(l,"opacity",.5),ee(()=>x(l,"d",_(n))),S(t,l),ae()}var I4=ne('<path fill="none" opacity="0.9"></path>');function w4(t,e){se(e,!1);const n=L(),r=L();let i=U(e,"marker",8);const o=.08,a=.04;D(()=>X(i()),()=>{O(n,Xp(i(),o))}),D(()=>X(i()),()=>{O(r,Zl(i().colorId,"black"))}),Ce(),fe();var l=I4();x(l,"stroke-width",a),ee(()=>{x(l,"d",_(n)),Ss(l,`edge-marker color-${i().colorId??""}`),x(l,"stroke",_(r))}),S(t,l),ae()}var y4=ne('<g class="edge-markers"></g>');function O4(t,e){let n=U(e,"markers",8);var r=y4();qe(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{w4(i,{get marker(){return _(o)}})}),z(r),S(t,r)}var A4=ne('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),x4=ne('<g class="line-markers svelte-yha19m"></g>');function L4(t,e){se(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(l){return JSON.stringify(l)}function o(l){return Zl(l,"black")}fe();var a=x4();qe(a,5,n,l=>i(l),(l,u)=>{var d=A4();x(d,"stroke-width",r),ee(()=>x(d,"stroke",o(_(u).colorId))),ee(()=>{x(d,"x1",_(u).p1.c),x(d,"y1",_(u).p1.r),x(d,"x2",_(u).p2.c),x(d,"y2",_(u).p2.r),Ss(d,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),S(l,d)}),z(a),S(t,a),ae()}var S4=ne('<g class="pen-tool"><!><!><!><!></g>');function N4(t,e){se(e,!1);const n=Ye(),r=()=>ge(fl,"$penToolStore",n),i=L();D(()=>r(),()=>{O(i,{draftLine:r().draftLine,mode:r().mode})}),Ce(),fe();var o=S4(),a=j(o);L4(a,{get lineMarkers(){return r().lineMarkers}});var l=F(a);O4(l,{get markers(){return r().edgeMarkers}});var u=F(l);E4(u,{get markers(){return r().cellMarkers}});var d=F(u);b4(d,{get draftLineMarker(){return _(i)}}),z(o),S(t,o),ae()}var D4=ne("<path></path>");function Wr(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L();let g=U(e,"cells",8),h=U(e,"shape",8,$d);const v="square";D(()=>X(h()),()=>{O(n,h().inset??.06)}),D(()=>X(h()),()=>{O(r,h().stroke??"black")}),D(()=>X(h()),()=>{O(i,h().strokeWidth??.03)}),D(()=>X(h()),()=>{O(o,h().strokeDasharray??.08)}),D(()=>X(h()),()=>{O(a,h().fill??"none")}),D(()=>X(h()),()=>{O(l,h().connectDiag??!0)}),D(()=>(X(g()),_(n),_(l)),()=>{O(u,Eo(g(),_(n),_(l)))}),D(()=>X(h()),()=>{O(d,h().strokeLinejoin??"miter")}),Ce(),fe();var m=D4();x(m,"stroke-linecap",v),ee(()=>{x(m,"d",_(u)),x(m,"stroke",_(r)),x(m,"stroke-width",_(i)),x(m,"fill",_(a)),x(m,"stroke-dasharray",_(o)),x(m,"stroke-linejoin",_(d))}),S(t,m),ae()}var R4=ne('<g class="seen-cells-layer svelte-dqmhr7"><!></g>');function T4(t,e){se(e,!1);const n=Ye(),r=()=>ge(Gi,"$selectionStore",n),i=()=>ge(Sn,"$settingsStore",n),o=()=>ge(Ws,"$puzzleStore",n),a=()=>ge(en,"$toolStore",n),l=()=>ge(mi,"$enableFogMaskStore",n),u=L(),d=L(),g=L(),h=L(),v=L(),m=L(),E=L();function I(T,k){return T.length?JP(_(g),T):[]}D(()=>r(),()=>{O(u,r().cells)}),D(()=>i(),()=>{O(d,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{O(g,o())}),D(()=>a(),()=>{O(h,Gd(a()))}),D(()=>i(),()=>{O(v,i().seen_cells_color)}),D(()=>_(v),()=>{O(m,{type:B.CAGE,strokeWidth:0,stroke:"none",fill:_(v),inset:.15,connectDiag:!1})}),D(()=>l(),()=>{O(E,l())}),Ce(),fe();var b=me(),w=te(b);{var A=T=>{var k=R4(),G=j(k),W=ft(()=>I(_(u),_(g)));Wr(G,{get cells(){return _(W)},get shape(){return _(m)}}),z(k),ee(()=>x(k,"mask",_(E)?"url(#fog-mask-fog)":null)),S(T,k)};Q(w,T=>{_(d)&&_(h)&&T(A)})}S(t,b),ae()}function Ql(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...ap(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function k4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Ql(r))}return new Set(e)}function M4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Ql(r))}return new Set(e)}function U4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Ql(r))}return new Set(e)}function G4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function $4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function F4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function P4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Ql(i);o.length&&e.push(...o)}return new Set(e)}function z4(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...k4(t),...M4(t),...U4(t)]);n=n.union(u)}return!!e.get(f.ANTIKNIGHT)&&(n=n.union(G4(t))),!!e.get(f.ANTIKING)&&(n=n.union($4(t))),!!e.get(f.NONCONSECUTIVE)&&(n=n.union(F4(t))),!!e.get(f.DISJOINT_GROUPS)&&(n=n.union(P4(t))),n}function H4(t,e){return[...new Set([...z4(t,e)])]}var W4=ne('<rect class="conflict svelte-d9qu4j"></rect>'),B4=ne('<g class="conflicts-layer"></g>');function Y4(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=()=>ge(hn,"$gridStore",n),o=()=>ge(lt,"$elementsDictStore",n),a=()=>ge(Pn,"$cellsStore",n),l=()=>ge(mi,"$enableFogMaskStore",n),u=L(),d=L(),g=L(),h=L(),v=L(),m=L();B.CAGE;function E(A){return H4(_(d),_(g)).map(G=>G.toCoords())}D(()=>r(),()=>{O(u,r().checkConflicts)}),D(()=>i(),()=>{O(d,i())}),D(()=>o(),()=>{O(g,o())}),D(()=>a(),()=>{O(h,a())}),D(()=>l(),()=>{O(v,l())}),D(()=>r(),()=>{O(m,r().conflict_cells_color)}),Ce(),fe();var I=me(),b=te(I);{var w=A=>{var T=B4();qe(T,5,()=>E(_(h)),pt,(k,G)=>{var W=W4();x(W,"width",1),x(W,"height",1),ee(()=>{x(W,"x",_(G).c),x(W,"y",_(G).r),x(W,"fill",_(m))}),S(k,W)}),z(T),ee(()=>x(T,"mask",_(v)?"url(#fog-mask-fog)":null)),S(A,T)};Q(b,A=>{_(u)&&A(w)})}S(t,I),ae()}var j4=ne('<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" class="svelte-1qi1v0f"><rect class="fog-mask-white svelte-1qi1v0f"></rect><g class="fog-mask-black svelte-1qi1v0f"><use href="#fog-edge"></use></g></mask>'),K4=ne('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge"><use class="fog-edge-1 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-2 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-3 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-4 svelte-1qi1v0f" href="#fog-shape"></use><use href="#fog-shape"></use></g><!><mask id="fog-mask-light" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1qi1v0f"></rect><rect class="fog-mask-black svelte-1qi1v0f" mask="url(#fog-mask-fog)"></rect></mask></defs>');function V4(t,e){se(e,!1);const n=Ye(),r=()=>ge(mi,"$enableFogMaskStore",n),i=()=>ge(Ml,"$solutionStore",n),o=()=>ge(hn,"$gridStore",n),a=()=>ge(Cp,"$fogLightsStore",n),l=()=>ge(O2,"$customFogClearingStore",n),u=()=>ge(Pn,"$cellsStore",n),d=L(),g=L(),h=L(),v=L(),m=L(),E=L(),I=L(),b=L();let w=U(e,"gridShape",8);function A(ye){const Re=[];if(!ye)return Re;for(const $e of Object.entries(ye)){const st=$e[1].cell,ut=_(h).getCell(st.r,st.c);ut&&Re.push(ut)}return Re}function T(ye){const Re=[];for(const $e of ye)$e.value!==null&&!$e.given&&Re.push($e);return Re}function k(ye,Re){const $e=[];if(Re)for(const st of ye){const ut=Re[st.r][st.c];ut!==null&&st.value===ut&&!st.given&&$e.push(st)}return $e}function G(ye,Re,$e){const st=A(Re);let ut=new Set(ye);ut=ut.difference(new Set(st));let yt=T(ye);_(g)&&(yt=k(yt,_(g)));const _t=$e==null?void 0:$e.negative_constraints;if(_t){const Ct=new Set;!!_t[f.FOG_CLEARING_ITSELF]&&yt.forEach(Ie=>Ct.add(Ie)),!!_t[f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS]&&yt.forEach(Ie=>_(h).getOrthogonallyAdjacentCells(Ie).forEach(Te=>Ct.add(Te))),!!_t[f.FOG_CLEARING_DIAGONAL_NEIGHBOURS]&&yt.forEach(Ie=>_(h).getDiagonallyAdjacentCells(Ie).forEach(Te=>Ct.add(Te))),!!_t[f.FOG_CLEARING_CONTAINING_ROW]&&yt.forEach(Ie=>_(h).getRow(Ie.r).forEach(Te=>Ct.add(Te))),!!_t[f.FOG_CLEARING_CONTAINING_COLUMN]&&yt.forEach(Ie=>_(h).getCol(Ie.c).forEach(Te=>Ct.add(Te))),!!_t[f.FOG_CLEARING_KNIGHTS_MOVE]&&yt.forEach(Ie=>_(h).getCellsByKnightMove(Ie).forEach(Te=>Ct.add(Te))),ut=ut.difference(Ct)}return[...ut].map(Ct=>Ct.toCoords())}D(()=>r(),()=>{O(d,!r())}),D(()=>i(),()=>{O(g,i())}),D(()=>o(),()=>{O(h,o())}),D(()=>a(),()=>{O(v,a())}),D(()=>l(),()=>{O(m,l())}),D(()=>u(),()=>{O(I,u())}),D(()=>(_(I),_(v),_(m)),()=>{O(b,G(_(I),_(v),_(m)))}),D(()=>_(b),()=>{O(E,Eo(_(b),0))}),Ce(),fe();var W=K4(),M=j(W),$=j(M);z(M);var J=F(M),oe=j(J);x(oe,"stroke-width",.4);var ie=F(oe);x(ie,"stroke-width",.3);var ce=F(ie);x(ce,"stroke-width",.2);var be=F(ce);x(be,"stroke-width",.1),di(),z(J);var Z=F(J);{var Ae=ye=>{var Re=j4();x(Re,"x",0),x(Re,"y",0);var $e=j(Re);x($e,"x",0),x($e,"y",0),di(),z(Re),ee(()=>{x(Re,"width",w().nCols),x(Re,"height",w().nRows),xt(Re,"disabled",_(d)),x($e,"width",w().nCols),x($e,"height",w().nRows)}),S(ye,Re)};Q(Z,ye=>{_(d)||ye(Ae)})}var we=F(Z);x(we,"x",0),x(we,"y",0);var Oe=j(we);x(Oe,"x",0),x(Oe,"y",0);var Se=F(Oe);x(Se,"x",0),x(Se,"y",0),z(we),z(W),ee(()=>{x($,"d",_(E)),x(we,"width",w().nCols),x(we,"height",w().nRows),x(Oe,"width",w().nCols),x(Oe,"height",w().nRows),x(Se,"width",w().nCols),x(Se,"height",w().nRows)}),S(t,W),ae()}var X4=ne('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function q4(t,e){se(e,!1);const n=Ye(),r=()=>ge(mi,"$enableFogMaskStore",n),i=L();let o=U(e,"gridShape",8);D(()=>r(),()=>{O(i,r())}),Ce(),fe();var a=X4(),l=j(a);x(l,"x",0),x(l,"y",0),z(a),ee(()=>{x(l,"width",o().nCols),x(l,"height",o().nRows)}),S(t,a),ae()}var Z4=ne('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function Q4(t,e){se(e,!1);const n=L();let r=U(e,"r",8),i=U(e,"c",8),o=U(e,"val",8);const a=.8,l=400;D(()=>(X(r()),X(i())),()=>{O(n,Hn({r:r(),c:i()}))}),Ce(),fe();var u=me(),d=te(u);{var g=h=>{var v=Z4();x(v,"font-size",a),x(v,"font-weight",l);var m=j(v,!0);z(v),ee(()=>{x(v,"x",_(n).x),x(v,"y",_(n).y),rt(m,o())}),S(h,v)};Q(d,h=>{o()!==null&&h(g)})}S(t,u),ae()}var J4=ne('<g class="solution-layer"></g>');function e6(t,e){se(e,!1);const n=Ye(),r=()=>ge(Ml,"$solutionStore",n),i=()=>ge(Sn,"$settingsStore",n),o=()=>ge(kl,"$gameModeStore",n),a=L(),l=L(),u=L();D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(l,i().showSolution)}),D(()=>o(),()=>{O(u,o())}),Ce(),fe();var d=me(),g=te(d);{var h=v=>{var m=J4();qe(m,5,()=>_(a),pt,(E,I,b)=>{var w=me(),A=te(w);qe(A,1,()=>_(I),pt,(T,k,G)=>{Q4(T,{r:b,c:G,get val(){return _(k)}})}),S(E,w)}),z(m),S(v,m)};Q(g,v=>{_(a)&&_(l)&&_(u)===Co.SETTING&&v(h)})}S(t,d),ae()}var t6=ne('<g class="element-group"></g>'),n6=ne("<g></g>");function Va(t,e){se(e,!1);const n=Ye(),r=()=>ge(mi,"$enableFogMaskStore",n),i=L();let o=U(e,"elements",8),a=U(e,"g_name",8),l=U(e,"Component",8);D(()=>r(),()=>{O(i,r())}),Ce();var u=n6();qe(u,5,o,pt,(d,g)=>{var h=me(),v=te(h);{var m=E=>{var I=t6();qe(I,5,()=>Object.entries(_(g).constraints),b=>b[0],(b,w)=>{l()(b,{get tool(){return _(w)[1]},get c_id(){return _(w)[0]}})}),z(I),ee(()=>x(I,"data-toolId",_(g).tool_id)),S(E,I)};Q(v,E=>{_(g).constraints&&E(m)})}S(d,h)}),z(u),ee(()=>{Ss(u,Iy(a())),x(u,"mask",_(i)?"url(#fog-mask-fog)":null)}),S(t,u),ae()}var r6=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),i6=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),o6=ne('<g class="quadruple-text"><!></g>');function s6(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=U(e,"cornerTool",8);const u=l().cells,d=new Ue(u[u.length-1].c,u[u.length-1].r),g=cn(l().toolId,Ht)??Ku;D(()=>X(l()),()=>{O(n,l().value)}),D(()=>X(l()),()=>{O(r,l().shape??g)}),D(()=>_(r),()=>{var E;O(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),D(()=>_(r),()=>{var E;O(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),D(()=>_(n),()=>{var E;O(a,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),Ce(),fe();var h=me(),v=te(h);{var m=E=>{var I=o6(),b=j(I);{var w=T=>{var k=r6(),G=j(k,!0);ee(()=>rt(G,_(a).join(" "))),z(k),ee(()=>{x(k,"x",d.x),x(k,"y",d.y),x(k,"font-size",_(i)),x(k,"fill",_(o))}),S(T,k)},A=T=>{var k=i6(),G=te(k),W=j(G,!0);ee(()=>rt(W,_(a).slice(0,2).join(" "))),z(G);var M=F(G),$=j(M,!0);ee(()=>rt($,_(a).slice(2).join(" "))),z(M),ee(()=>{x(G,"x",d.x),x(G,"y",d.y),x(G,"dy",-_(i)/2),x(G,"font-size",_(i)),x(G,"fill",_(o)),x(M,"x",d.x),x(M,"y",d.y),x(M,"dy",_(i)/2),x(M,"font-size",_(i)),x(M,"fill",_(o))}),S(T,k)};Q(b,T=>{_(a).length<=2?T(w):T(A,!1)})}z(I),ee(()=>x(I,"data-count",_(a).length)),S(E,I)};Q(v,E=>{_(n)&&E(m)})}S(t,h),ae()}var a6=ne("<circle></circle>");function Cr(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L();let u=U(e,"x",8),d=U(e,"y",8),g=U(e,"shape",8);D(()=>X(g()),()=>{O(n,g().r??.35)}),D(()=>X(g()),()=>{O(r,g().stroke??"black")}),D(()=>X(g()),()=>{var v;O(i,(v=g())==null?void 0:v.opacity)}),D(()=>X(g()),()=>{O(o,g().strokeWidth??.02)}),D(()=>X(g()),()=>{O(a,g().fill??"none")}),D(()=>X(g()),()=>{O(l,g().strokeDasharray??0)}),Ce(),fe();var h=a6();ee(()=>{x(h,"cx",u()),x(h,"cy",d()),x(h,"r",_(n)),x(h,"stroke",_(r)),x(h,"stroke-width",_(o)),x(h,"fill",_(a)),x(h,"opacity",_(i)),x(h,"stroke-dasharray",_(l))}),S(t,h),ae()}var l6=ne("<ellipse></ellipse>");function c6(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L();let d=U(e,"cx",8),g=U(e,"cy",8),h=U(e,"shape",8);D(()=>X(h()),()=>{O(n,h().width??.5)}),D(()=>X(h()),()=>{O(r,h().height??.5)}),D(()=>X(h()),()=>{O(i,h().stroke??"black")}),D(()=>X(h()),()=>{var m;O(o,(m=h())==null?void 0:m.opacity)}),D(()=>X(h()),()=>{O(a,h().strokeWidth??.02)}),D(()=>X(h()),()=>{O(l,h().fill??"none")}),D(()=>X(h()),()=>{O(u,h().angle??0)}),Ce(),fe();var v=l6();ee(()=>{x(v,"cx",d()),x(v,"cy",g()),x(v,"rx",_(n)/2),x(v,"ry",_(r)/2),x(v,"stroke",_(i)),x(v,"stroke-width",_(a)),x(v,"fill",_(l)),x(v,"opacity",_(o)),x(v,"transform",`rotate(${_(u)}, ${d()}, ${g()} )`)}),S(t,v),ae()}var u6=ne("<polygon></polygon>");function pl(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L();let g=U(e,"cx",8),h=U(e,"cy",8),v=U(e,"shape",8);D(()=>X(v()),()=>{O(n,v().n??3)}),D(()=>X(v()),()=>{O(r,v().r??.5)}),D(()=>(_(r),_(n),X(g()),X(h())),()=>{O(i,Vp(_(r),_(n),new Ue(g(),h())))}),D(()=>_(i),()=>{O(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>X(v()),()=>{O(a,v().stroke??"black")}),D(()=>X(v()),()=>{O(l,v().strokeWidth??.02)}),D(()=>X(v()),()=>{O(u,v().fill??"none")}),D(()=>X(v()),()=>{O(d,v().angle??0)}),Ce(),fe();var m=u6();ee(()=>{x(m,"points",_(o)),x(m,"stroke",_(a)),x(m,"stroke-width",_(l)),x(m,"fill",_(u)),x(m,"transform",`rotate(${_(d)}, ${g()}, ${h()} )`)}),S(t,m),ae()}var d6=ne("<rect></rect>");function _6(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L();let d=U(e,"cx",8),g=U(e,"cy",8),h=U(e,"shape",8);D(()=>X(h()),()=>{O(n,h().width??.5)}),D(()=>X(h()),()=>{O(r,h().height??.5)}),D(()=>(X(d()),_(n)),()=>{O(i,d()-_(n)/2)}),D(()=>(X(g()),_(r)),()=>{O(o,g()-_(r)/2)}),D(()=>X(h()),()=>{O(a,h().stroke||"black")}),D(()=>X(h()),()=>{O(l,h().strokeWidth||.023)}),D(()=>X(h()),()=>{O(u,h().fill||"none")}),Ce(),fe();var v=d6();ee(()=>{x(v,"x",_(i)),x(v,"y",_(o)),x(v,"width",_(n)),x(v,"height",_(r)),x(v,"stroke",_(a)),x(v,"stroke-width",_(l)),x(v,"fill",_(u))}),S(t,v),ae()}var f6=ne("<rect></rect>");function g6(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=U(e,"cx",8),E=U(e,"cy",8),I=U(e,"shape",8);D(()=>X(I()),()=>{O(n,I().r??.5)}),D(()=>(X(m()),_(n)),()=>{O(r,m()-_(n))}),D(()=>(X(E()),_(n)),()=>{O(i,E()-_(n))}),D(()=>_(n),()=>{O(o,2*_(n))}),D(()=>_(n),()=>{O(a,2*_(n))}),D(()=>X(I()),()=>{O(l,I().stroke??"black")}),D(()=>X(I()),()=>{O(u,I().strokeWidth??.02)}),D(()=>X(I()),()=>{O(d,I().fill??"none")}),D(()=>X(I()),()=>{O(g,I().angle??0)}),D(()=>X(I()),()=>{O(h,I().strokeDasharray??0)}),D(()=>X(I()),()=>{O(v,I().opacity??1)}),Ce(),fe();var b=f6();ee(()=>{x(b,"x",_(r)),x(b,"y",_(i)),x(b,"width",_(o)),x(b,"height",_(a)),x(b,"stroke",_(l)),x(b,"stroke-width",_(u)),x(b,"fill",_(d)),x(b,"transform",`rotate(${_(g)}, ${m()}, ${E()})`),x(b,"stroke-dasharray",_(h)),x(b,"opacity",_(v))}),S(t,b),ae()}function Nr(t,e){se(e,!1);const n=L();let r=U(e,"cx",8),i=U(e,"cy",8),o=U(e,"shape",8);D(()=>(X(o()),B),()=>{var g;O(n,((g=o())==null?void 0:g.type)??B.CIRCLE)}),Ce(),fe();var a=me(),l=te(a);{var u=g=>{Cr(g,{get x(){return r()},get y(){return i()},get shape(){return o()}})},d=g=>{var h=me(),v=te(h);{var m=I=>{c6(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var b=me(),w=te(b);{var A=k=>{g6(k,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},T=k=>{var G=me(),W=te(G);{var M=J=>{_6(J,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},$=J=>{var oe=me(),ie=te(oe);{var ce=Z=>{pl(Z,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},be=Z=>{Cr(Z,{get x(){return r()},get y(){return i()},get shape(){return o()}})};Q(ie,Z=>{_(n)===B.POLYGON?Z(ce):Z(be,!1)},!0)}S(J,oe)};Q(W,J=>{_(n)===B.RECTANGLE?J(M):J($,!1)},!0)}S(k,G)};Q(w,k=>{_(n)===B.SQUARE?k(A):k(T,!1)},!0)}S(I,b)};Q(v,I=>{_(n)===B.ELLIPSE?I(m):I(E,!1)},!0)}S(g,h)};Q(l,g=>{_(n)===B.CIRCLE?g(u):g(d,!1)})}S(t,a),ae()}var h6=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),v6=ne('<g class="corner-tool"><!><!><!></g>');function Zp(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(T,k){return k===B.TEXT_ONLY?T.value?T.value:"-":T.value??""}D(()=>r(),()=>{var T;O(i,(T=r())==null?void 0:T.id)}),D(()=>(X(m()),Ku),()=>{O(o,cn(m().toolId,Ht)??Ku)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>(_(a),B),()=>{var T;O(l,((T=_(a))==null?void 0:T.type)??B.CIRCLE)}),D(()=>_(a),()=>{var T;O(u,((T=_(a))==null?void 0:T.fontSize)??.2)}),D(()=>_(a),()=>{var T;O(d,((T=_(a))==null?void 0:T.fontColor)??"black")}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(h,m().cells)}),D(()=>_(h),()=>{O(v,new Ue(_(h)[_(h).length-1].c,_(h)[_(h).length-1].r))}),Ce(),fe();var b=me(),w=te(b);{var A=T=>{var k=v6(),G=j(k);{var W=ie=>{Nr(ie,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(g)}})};Q(G,ie=>{E()&&E()===_(i)&&ie(W)})}var M=F(G);Nr(M,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(a)}});var $=F(M);{var J=ie=>{s6(ie,{get cornerTool(){return m()}})},oe=ie=>{var ce=h6(),be=j(ce,!0);ee(()=>rt(be,I(m(),_(l)))),z(ce),ee(()=>{x(ce,"x",_(v).x),x(ce,"y",_(v).y),x(ce,"font-size",_(u)),x(ce,"fill",_(d))}),S(ie,ce)};Q($,ie=>{m().toolId===f.QUADRUPLE?ie(J):ie(oe,!1)})}z(k),S(T,k)};Q(w,T=>{_(h).length===4&&T(A)})}S(t,b),ae()}var p6=ne('<g class="corner-tool"><!></g>');function m6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=l=>{var u=p6(),d=j(u);Zp(d,{get tool(){return n()},get c_id(){return r()}}),z(u),ee(()=>x(u,"id",`c-${r()}`)),S(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}S(t,i)}var E6=ne('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ls(t,e){se(e,!1);const n=L();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),o=U(e,"x",8),a=U(e,"y",8),l=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),d=U(e,"fontWeight",8,400),g=L(null),h=L(null);function v(A,T,k){const G=["TL","TR"].includes(k),M=["TL","BL"].includes(k)?A+.05:A,$=T;return new Ue(M,$)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}wy(()=>{if(!_(g)||!_(h))return;const A=_(g).getBBox();_(h).setAttribute("x",String(A.x)),_(h).setAttribute("y",String(A.y+A.height*.1)),_(h).setAttribute("width",String(A.width)),_(h).setAttribute("height",String(A.height*.8))}),D(()=>(X(o()),X(a()),X(l())),()=>{O(n,v(o(),a(),l()))}),Ce(),fe();var I=me(),b=te(I);{var w=A=>{var T=E6(),k=te(T);Ui(k,M=>O(h,M),()=>_(h));var G=F(k);ee(()=>x(G,"text-anchor",m(l()))),ee(()=>x(G,"dominant-baseline",E(l())));var W=j(G,!0);z(G),Ui(G,M=>O(g,M),()=>_(g)),ee(()=>{var M,$;x(G,"x",(M=_(n))==null?void 0:M.x),x(G,"y",($=_(n))==null?void 0:$.y),x(G,"font-size",i()),x(G,"fill",u()),x(G,"font-weight",d()),rt(W,r())}),S(A,T)};Q(b,A=>{r().length&&A(w)})}S(t,I),ae()}var C6=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),b6=ne("<!><!><!>",1);function Qp(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(M,$){return $===B.TEXT_ONLY?M.value?M.value:"-":M.value??""}D(()=>r(),()=>{var M;O(i,(M=r())==null?void 0:M.id)}),D(()=>(X(m()),sl),()=>{O(o,cn(m().toolId,Ht)??sl)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>_(a),()=>{O(l,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(u,m().cell)}),D(()=>(_(a),B),()=>{var M;O(d,((M=_(a))==null?void 0:M.type)||B.CIRCLE)}),D(()=>_(a),()=>{var M;O(g,((M=_(a))==null?void 0:M.fontSize)??.2)}),D(()=>_(a),()=>{var M;O(h,((M=_(a))==null?void 0:M.fontColor)??"black")}),D(()=>_(u),()=>{O(v,_(u).r%1===.5&&_(u).c%1===.5)}),Ce(),fe();var b=b6(),w=te(b);{var A=M=>{Nr(M,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(l)}})};Q(w,M=>{E()===_(i)&&M(A)})}var T=F(w);Nr(T,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(a)}});var k=F(T);{var G=M=>{var $=ft(()=>I(m(),_(d))),J=ft(()=>Math.floor(_(u).c)),oe=ft(()=>Math.floor(_(u).r));Ls(M,{get value(){return _($)},get x(){return _(J)},get y(){return _(oe)},position:"TL",get fontColor(){return _(h)}})},W=M=>{var $=C6(),J=j($,!0);ee(()=>rt(J,I(m(),_(d)))),z($),ee(()=>{x($,"x",_(u).c),x($,"y",_(u).r),x($,"font-size",_(g)),x($,"fill",_(h))}),S(M,$)};Q(k,M=>{_(v)?M(G):M(W,!1)})}S(t,b),ae()}var I6=ne('<g class="center-corner-or-edge-tool"><!></g>');function w6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=l=>{var u=I6(),d=j(u);Qp(d,{get tool(){return n()},get c_id(){return r()}}),z(u),ee(()=>x(u,"id",`c-${r()}`)),S(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}S(t,i)}var y6=ne('<rect stroke="none" fill="#5373ea80"></rect>'),O6=ne('<rect stroke="none" fill="#5373ea66"></rect>'),A6=ne('<path fill="none" stroke-linecap="round"></path><!>',1),x6=ne('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function zh(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=()=>ge(hn,"$gridStore",n),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L(),E=L(),I=L();let b=U(e,"tool",8),w=U(e,"c_id",8,void 0);const A=.03;function T(Z){return Z.value&&Z.value.length?Z.value:"-"}function k(Z,Ae){const we=zs(Ae),Oe=new Ue(we.c,we.r).scale(.5),Se=Hn(Z),ye=Se.add(Oe.scale(.5)),Re=Se.add(Oe.scale(.8));return[ye,Re]}function G(Z,Ae){const Oe=k(Z,Ae);let Se=p_(.08,Ae);Se=Se.map(st=>st.add(Oe[1]));const ye=fi(Oe),Re=fi(Se);return ye+Re}D(()=>r(),()=>{var Z;O(o,(Z=r())==null?void 0:Z.id)}),D(()=>X(b()),()=>{O(a,b().cell)}),D(()=>_(a),()=>{O(l,Hn(_(a)))}),D(()=>(i(),X(b())),()=>{O(u,i().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),D(()=>(X(b()),ch),()=>{O(d,cn(b().toolId,Ht)??ch)}),D(()=>(X(b()),_(d)),()=>{O(g,b().shape??_(d))}),D(()=>_(g),()=>{var Z;O(h,((Z=_(g))==null?void 0:Z.fontSize)??.5)}),D(()=>_(g),()=>{var Z;O(v,((Z=_(g))==null?void 0:Z.fontColor)??"var(--text-primary-color)")}),D(()=>_(g),()=>{var Z;O(m,((Z=_(g))==null?void 0:Z.stroke)??"var(--text-primary-color)")}),D(()=>_(g),()=>{O(E,{..._(g),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),D(()=>(_(a),X(b())),()=>{O(I,G(_(a),b().direction))}),Ce(),fe();var W=x6(),M=j(W);{var $=Z=>{var Ae=me(),we=te(Ae);qe(we,1,()=>_(u),pt,(Oe,Se)=>{var ye=y6();x(ye,"width",1),x(ye,"height",1),ee(()=>{x(ye,"x",_(Se).c),x(ye,"y",_(Se).r)}),S(Oe,ye)}),S(Z,Ae)};Q(M,Z=>{w()===void 0&&Z($)})}var J=F(M);{var oe=Z=>{var Ae=A6(),we=te(Ae),Oe=F(we);qe(Oe,1,()=>_(u),pt,(Se,ye)=>{var Re=O6();x(Re,"width",1),x(Re,"height",1),ee(()=>{x(Re,"x",_(ye).c),x(Re,"y",_(ye).r)}),S(Se,Re)}),ee(()=>{x(we,"d",_(I)),x(we,"stroke",_(E).stroke),x(we,"stroke-width",_(E).strokeWidth)}),S(Z,Ae)};Q(J,Z=>{w()&&w()===_(o)&&Z(oe)})}var ie=F(J);x(ie,"stroke-width",A);var ce=F(ie),be=j(ce,!0);ee(()=>rt(be,T(b()))),z(ce),z(W),ee(()=>{x(ie,"d",_(I)),x(ie,"stroke",_(m)),x(ce,"x",_(l).x),x(ce,"y",_(l).y),x(ce,"font-size",_(h)),x(ce,"fill",_(v))}),S(t,W),ae()}var L6=ne('<g class="outside-direction-tool"><!></g>'),S6=ne('<g class="outside-direction-preview"><!></g>');function Jp(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=u=>{var d=L6(),g=j(d);zh(g,{get tool(){return n()},get c_id(){return r()}}),z(d),ee(()=>x(d,"data-id",`${r()}`)),S(u,d)},l=u=>{var d=S6();x(d,"opacity",.5);var g=j(d);zh(g,{get tool(){return n()}}),z(d),S(u,d)};Q(o,u=>{r()!==void 0?u(a):u(l,!1)})}S(t,i)}var N6=ne('<path fill="none"></path>');function ui(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L();let u=U(e,"linePoints",8),d=U(e,"shape",8,void 0);const g="round",h="round";D(()=>X(d()),()=>{var m;O(n,((m=d())==null?void 0:m.stroke)??"gray")}),D(()=>X(d()),()=>{var m;O(r,((m=d())==null?void 0:m.strokeWidth)??.1)}),D(()=>X(d()),()=>{var m;O(i,((m=d())==null?void 0:m.strokeDasharray)??0)}),D(()=>X(d()),()=>{var m;O(o,((m=d())==null?void 0:m.strokeDashoffset)??0)}),D(()=>X(d()),()=>{var m,E,I,b,w,A,T,k;O(a,{shortenHead:((E=(m=d())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=d())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(w=d())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((k=(T=d())==null?void 0:T.linePathOptions)==null?void 0:k.closeLoops)??!1})}),D(()=>(X(u()),_(a)),()=>{O(l,fi(u(),_(a)))}),Ce(),fe();var v=N6();x(v,"stroke-linejoin",g),x(v,"stroke-linecap",h),ee(()=>{x(v,"d",_(l)),x(v,"stroke",_(n)),x(v,"stroke-width",_(r)),x(v,"stroke-dasharray",_(i)),x(v,"stroke-dashoffset",_(o))}),S(t,v),ae()}var D6=ue("<!> <!> <!>",1);function R6(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=U(e,"linePoints",8),u=U(e,"shape",8);function d(b){const w=Lt.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>X(l()),()=>{O(n,l().length)}),D(()=>(_(n),X(l())),()=>{O(r,_(n)>1&&l()[0].equals(l()[_(n)-1]))}),D(()=>(_(n),X(l())),()=>{O(i,_(n)>=0?l()[0]:void 0)}),D(()=>(_(n),X(l())),()=>{O(o,_(n)>=0?l()[_(n)-1]:void 0)}),D(()=>X(u()),()=>{O(a,d(u()))}),Ce(),fe();var g=D6(),h=te(g);ui(h,{get linePoints(){return l()},get shape(){return u()}});var v=F(h,2);{var m=b=>{Cr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(a)}})};Q(v,b=>{!_(r)&&_(i)&&b(m)})}var E=F(v,2);{var I=b=>{Cr(b,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(a)}})};Q(E,b=>{!_(r)&&_(o)&&b(I)})}S(t,g),ae()}var T6=ne('<g class="corner-line-tool"><!></g>');function k6(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L();let a=U(e,"tool",8);const l=cn(a().toolId,Ht)??Ts;D(()=>(X(a()),Ue),()=>{O(n,a().coords.map(v=>new Ue(v.c,v.r)))}),D(()=>X(a()),()=>{O(r,a().shape??l)}),D(()=>(_(r),B),()=>{var v;O(i,((v=_(r))==null?void 0:v.type)||B.LINE)}),D(()=>_(r),()=>{var v;O(o,((v=_(r))==null?void 0:v.opacity)??1)}),Ce(),fe();var u=T6(),d=j(u);{var g=v=>{R6(v,{get linePoints(){return _(n)},get shape(){return _(r)}})},h=v=>{ui(v,{get linePoints(){return _(n)},get shape(){return _(r)}})};Q(d,v=>{_(i)===B.MAZE_WALL?v(g):v(h,!1)})}z(u),ee(()=>x(u,"opacity",_(o))),S(t,u),ae()}var M6=ne('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Hh(t,e){se(e,!1);const n=L(),r=L(),i=L();let o=U(e,"shape",8),a=U(e,"coords",8);const[l,u]=a(),d=u.c,g=l.c===u.c?u.c+1:u.c,h=u.r,v=l.r===u.r?u.r+1:u.r;D(()=>X(o()),()=>{O(n,o().stroke??"black")}),D(()=>X(o()),()=>{var E;O(r,(E=o())==null?void 0:E.opacity)}),D(()=>X(o()),()=>{O(i,o().strokeWidth??.02)}),Ce(),fe();var m=M6();x(m,"x1",d),x(m,"x2",g),x(m,"y1",h),x(m,"y2",v),ee(()=>{x(m,"stroke",_(n)),x(m,"stroke-width",_(i)),x(m,"opacity",_(r))}),S(t,m),ae()}var U6=ne("<!><!>",1),G6=ne("<!><!>",1),$6=ne("<!><!>",1),F6=ne("<!><!>",1),P6=ne('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function em(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(k,G){return G===B.TEXT_ONLY?k.value?k.value:"-":k.value??""}function b(k){if(k!==f.EDGE_INEQUALITY&&k!==f.ONE_WAY_DOOR)return 0;const G=Hn(_(h)[0]);return Hn(_(h)[1]).subtract(G).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),D(()=>(X(m()),sl),()=>{O(o,cn(m().toolId,Ht)??sl)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>(_(a),B),()=>{var k;O(l,((k=_(a))==null?void 0:k.type)||B.CIRCLE)}),D(()=>_(a),()=>{var k;O(u,((k=_(a))==null?void 0:k.fontSize)??.2)}),D(()=>_(a),()=>{var k;O(d,((k=_(a))==null?void 0:k.fontColor)??"black")}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(h,m().cells)}),D(()=>_(h),()=>{O(v,Ep(ql(_(h))))}),Ce(),fe();var w=me(),A=te(w);{var T=k=>{var G=P6(),W=te(G);{var M=ie=>{var ce=U6(),be=te(ce);{var Z=we=>{Cr(we,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(g)}})};Q(be,we=>{E()&&E()===_(i)&&we(Z)})}var Ae=F(be);Cr(Ae,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(a)}}),S(ie,ce)},$=ie=>{var ce=me(),be=te(ce);{var Z=we=>{var Oe=G6(),Se=te(Oe);{var ye=$e=>{Cr($e,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(g)}})};Q(Se,$e=>{E()&&E()===_(i)&&$e(ye)})}var Re=F(Se);Cr(Re,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(a)}}),S(we,Oe)},Ae=we=>{var Oe=me(),Se=te(Oe);{var ye=$e=>{var st=$6(),ut=te(st);{var yt=Et=>{Hh(Et,{get coords(){return _(h)},get shape(){return _(g)}})};Q(ut,Et=>{E()&&E()===_(i)&&Et(yt)})}var _t=F(ut);Hh(_t,{get coords(){return _(h)},get shape(){return _(a)}}),S($e,st)},Re=$e=>{var st=F6(),ut=te(st);{var yt=Et=>{Nr(Et,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(g)}})};Q(ut,Et=>{E()&&E()===_(i)&&Et(yt)})}var _t=F(ut);Nr(_t,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(a)}}),S($e,st)};Q(Se,$e=>{_(l)===B.BORDER_LINE?$e(ye):$e(Re,!1)},!0)}S(we,Oe)};Q(be,we=>{_(l)===B.TEXT_ONLY?we(Z):we(Ae,!1)},!0)}S(ie,ce)};Q(W,ie=>{m().toolId===f.EDGE_INEQUALITY||m().toolId===f.ONE_WAY_DOOR?ie(M):ie($,!1)})}var J=F(W);ee(()=>x(J,"transform",`rotate(${b(m().toolId)}, ${_(v).x}, ${_(v).y} )`));var oe=j(J,!0);ee(()=>rt(oe,I(m(),_(l)))),z(J),ee(()=>{x(J,"x",_(v).x),x(J,"y",_(v).y),x(J,"font-size",_(u)),x(J,"fill",_(d))}),S(k,G)};Q(A,k=>{_(h).length===2&&k(T)})}S(t,w),ae()}var z6=ne('<g class="edge-tool"><!></g>');function H6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=l=>{var u=z6(),d=j(u);em(d,{get tool(){return n()},get c_id(){return r()}}),z(u),ee(()=>x(u,"id",`c-${r()}`)),S(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}S(t,i)}var W6=ne('<path fill="none" stroke-linecap="round"></path>'),B6=ne('<path fill="none" stroke-linecap="round"></path>'),Y6=ne('<path fill="none" stroke-linecap="round"></path>'),j6=ne("<!><!><!>",1);function Wh(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L();let d=U(e,"tool",8),g=U(e,"c_id",8,void 0);D(()=>r(),()=>{var w;O(i,(w=r())==null?void 0:w.id)}),D(()=>(X(d()),lh),()=>{O(o,cn(d().toolId,Ht)??lh)}),D(()=>(X(d()),_(o)),()=>{O(a,d().shape??_(o))}),D(()=>_(a),()=>{O(l,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.03:.03})}),D(()=>_(a),()=>{O(u,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),Ce(),fe();var h=j6(),v=te(h);{var m=w=>{var A=me(),T=te(A);qe(T,1,()=>d().directions,pt,(k,G)=>{var W=W6();ee(()=>x(W,"d",Uu(d().cell,_(G)))),ee(()=>{x(W,"stroke",_(l).stroke),x(W,"stroke-width",_(l).strokeWidth)}),S(k,W)}),S(w,A)};Q(v,w=>{w(m)})}var E=F(v);{var I=w=>{var A=me(),T=te(A);qe(T,1,()=>d().directions,pt,(k,G)=>{var W=B6();ee(()=>x(W,"d",Uu(d().cell,_(G)))),ee(()=>{x(W,"stroke",_(u).stroke),x(W,"stroke-width",_(u).strokeWidth)}),S(k,W)}),S(w,A)};Q(E,w=>{g()&&g()===_(i)&&w(I)})}var b=F(E);qe(b,1,()=>d().directions,pt,(w,A)=>{var T=Y6();ee(()=>x(T,"d",Uu(d().cell,_(A)))),ee(()=>{x(T,"stroke",_(a).stroke),x(T,"stroke-width",_(a).strokeWidth)}),S(w,T)}),S(t,h),ae()}var K6=ne('<g class="single-cell-multi-arrow-tool"><!></g>'),V6=ne('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function tm(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=u=>{var d=K6(),g=j(d);Wh(g,{get tool(){return n()},get c_id(){return r()}}),z(d),ee(()=>x(d,"data-id",`${r()}`)),S(u,d)},l=u=>{var d=V6();x(d,"opacity",.5);var g=j(d);Wh(g,{get tool(){return n()}}),z(d),S(u,d)};Q(o,u=>{r()!==void 0?u(a):u(l,!1)})}S(t,i)}var X6=ne('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function q6(t){var e=X6(),n=j(e);x(n,"opacity",.5),z(e),S(t,e)}var Z6=ne('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function Q6(t,e){se(e,!1);const n=L();let r=U(e,"tool",8);U(e,"c_id",8,void 0),D(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),Ce(),fe();var i=Z6();ee(()=>x(i,"transform",`translate(${_(n).x} ${_(n).y})`)),S(t,i),ae()}var J6=ne('<g class="fog-lights-layer svelte-17myswq"></g>');function ez(t,e){se(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n),i=()=>ge(mi,"$enableFogMaskStore",n),o=L(),a=L();let l=U(e,"element",8);D(()=>r(),()=>{O(o,r())}),D(()=>i(),()=>{O(a,!i())}),Ce(),fe();var u=me(),d=te(u);{var g=h=>{var v=J6();qe(v,5,()=>Object.entries(l()),m=>m[0],(m,E)=>{Q6(m,{get tool(){return _(E)[1]},get c_id(){return _(E)[0]}})}),z(v),ee(()=>xt(v,"inactive",_(o)!==f.FOG_LIGHTS)),S(h,v)};Q(d,h=>{_(a)&&h(g)})}S(t,u),ae()}var tz=ne('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function Jl(t,e){se(e,!1);const n=L(),r=L(),i=L();let o=U(e,"cx",8),a=U(e,"cy",8),l=U(e,"c_id",8);D(()=>X(l()),()=>{O(n,document.getElementById(`c-${l()}`))}),D(()=>_(n),()=>{var h;O(r,(h=_(n))==null?void 0:h.getBBox())}),D(()=>_(r),()=>{O(i,_(r)?Math.max(_(r).width,_(r).height):void 0)}),Ce();var u=me(),d=te(u);{var g=h=>{var v=tz(),m=j(v);x(m,"stroke-width",.6),z(v),ee(()=>x(v,"transform",`translate(${o()}, ${a()}) scale(${_(i)*.6})`)),S(h,v)};Q(d,h=>{_(i)&&h(g)})}S(t,u),ae()}var nz=ne('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),rz=ne('<g class="edge-tool-preview"><!></g>');function iz(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=U(e,"tool_preview",8);D(()=>X(l()),()=>{O(n,l().tool)}),D(()=>X(l()),()=>{O(r,l().mode)}),D(()=>X(l()),()=>{O(i,l().match_id)}),D(()=>_(n),()=>{O(o,_(n).cells)}),D(()=>_(o),()=>{O(a,Ep(ql(_(o))))}),Ce(),fe();var u=me(),d=te(u);{var g=v=>{var m=nz();x(m,"opacity",.5);var E=j(m);Jl(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),z(m),S(v,m)},h=v=>{var m=rz();x(m,"opacity",.5);var E=j(m);em(E,{get tool(){return _(n)}}),z(m),S(v,m)};Q(d,v=>{_(r)==="remove"&&_(i)?v(g):v(h,!1)})}S(t,u),ae()}var oz=ne('<g class="corner-tool-remove-preview"><!></g>'),sz=ne('<g class="corner-tool-preview"><!></g>');function az(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=U(e,"tool_preview",8);D(()=>X(l()),()=>{O(n,l().tool)}),D(()=>X(l()),()=>{O(r,l().mode)}),D(()=>X(l()),()=>{O(i,l().match_id)}),D(()=>_(n),()=>{O(o,_(n).cells)}),D(()=>_(o),()=>{O(a,new Ue(_(o)[_(o).length-1].c,_(o)[_(o).length-1].r))}),Ce(),fe();var u=me(),d=te(u);{var g=v=>{var m=oz();x(m,"opacity",.5);var E=j(m);Jl(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),z(m),S(v,m)},h=v=>{var m=sz();x(m,"opacity",.5);var E=j(m);Zp(E,{get tool(){return _(n)}}),z(m),S(v,m)};Q(d,v=>{_(r)==="remove"&&_(i)?v(g):v(h,!1)})}S(t,u),ae()}var lz=ne('<path fill="none" stroke-linecap="round"></path>'),cz=ne('<path fill="none" stroke-linecap="round"></path>'),uz=ne('<!><!><path fill="none" stroke-linecap="round"></path>',1);function nm(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L();let v=U(e,"tool",8),m=U(e,"c_id",8,void 0);D(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),D(()=>(X(v()),ah),()=>{O(o,cn(v().toolId,Ht)??ah)}),D(()=>(X(v()),_(o)),()=>{O(a,v().shape??_(o))}),D(()=>_(a),()=>{O(l,_(a).strokeWidth??.1)}),D(()=>_(a),()=>{O(u,_(a).stroke??"black")}),D(()=>_(a),()=>{O(d,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(v()),()=>{O(h,DP(v().cell,v().direction))}),Ce(),fe();var E=uz(),I=te(E);{var b=k=>{var G=lz();ee(()=>{x(G,"d",_(h)),x(G,"stroke",_(d).stroke),x(G,"stroke-width",_(d).strokeWidth)}),S(k,G)};Q(I,k=>{k(b)})}var w=F(I);{var A=k=>{var G=cz();ee(()=>{x(G,"d",_(h)),x(G,"stroke",_(g).stroke),x(G,"stroke-width",_(g).strokeWidth)}),S(k,G)};Q(w,k=>{m()&&m()===_(i)&&k(A)})}var T=F(w);ee(()=>{x(T,"d",_(h)),x(T,"stroke",_(u)),x(T,"stroke-width",_(l))}),S(t,E),ae()}var dz=ne('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),_z=ne('<g class="single-cell-arrow-tool-preview"><!></g>');function fz(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L();let a=U(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>_(n),()=>{O(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),Ce(),fe();var l=me(),u=te(l);{var d=h=>{var v=dz();x(v,"opacity",.5);var m=j(v);Jl(m,{get cx(){return _(o).x},get cy(){return _(o).y},get c_id(){return _(i)}}),z(v),S(h,v)},g=h=>{var v=_z();x(v,"opacity",.5);var m=j(v);nm(m,{get tool(){return _(n)}}),z(v),S(h,v)};Q(u,h=>{_(r)==="remove"&&_(i)?h(d):h(g,!1)})}S(t,l),ae()}var gz=ue("<!> <!>",1);function rm(t,e){se(e,!1);const n=L(),r=L();let i=U(e,"cells",8),o=U(e,"shape",8,$d),a=U(e,"value",8,void 0);D(()=>X(i()),()=>{O(n,i()[0])}),D(()=>_(n),()=>{O(r,new Ue(_(n).c,_(n).r))}),Ce(),fe();var l=gz(),u=te(l);Wr(u,{get cells(){return i()},get shape(){return o()}});var d=F(u,2);{var g=h=>{Ls(h,{get value(){return a()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};Q(d,h=>{a()&&a().length&&h(g)})}S(t,l),ae()}var hz=ne('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Bh(t,e){se(e,!1);const n=Ye(),r=()=>ge(A2,"$minimumConstraintsStore",n),i=()=>ge(x2,"$maximumConstraintsStore",n),o=L(),a=L(),l=L();let u=U(e,"coord",8),d=U(e,"minOrMax",8);function g(b,w){const A=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<T.length;k++){let G=T[k];const W={r:b.r+G[1],c:b.c+G[0]};A[k]=!Object.values(w).some(M=>Ze(W,M.cell))}return A}function h(b,w){let A=SP(d(),b.r,b.c);const T=g(b,w);return A=A.filter((G,W)=>T[W]),A.map(G=>Ko(G,!1)).join("")}function v(b,w){return d()==="max"?w:b}D(()=>X(u()),()=>{O(o,u().c)}),D(()=>X(u()),()=>{O(a,u().r)}),D(()=>(r(),i()),()=>{O(l,v(r(),i()))}),Ce(),fe();var m=hz(),E=j(m);x(E,"width",1),x(E,"height",1);var I=F(E);ee(()=>x(I,"d",h(u(),_(l)))),z(m),ee(()=>{x(E,"x",_(o)),x(E,"y",_(a))}),S(t,m),ae()}var vz=ne("<circle></circle>");function pz(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L();let u=U(e,"x",8),d=U(e,"y",8),g=U(e,"value",8),h=U(e,"shape",8);D(()=>X(h()),()=>{O(n,h().r??.35)}),D(()=>X(h()),()=>{O(r,h().stroke??"black")}),D(()=>X(h()),()=>{var m;O(i,(m=h())==null?void 0:m.opacity)}),D(()=>X(h()),()=>{O(o,h().strokeWidth??.02)}),D(()=>X(g()),()=>{O(a,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>X(h()),()=>{O(l,h().strokeDasharray??0)}),Ce(),fe();var v=vz();ee(()=>{x(v,"cx",u()),x(v,"cy",d()),x(v,"r",_(n)),x(v,"stroke",_(r)),x(v,"stroke-width",_(o)),x(v,"fill",_(a)),x(v,"opacity",_(i)),x(v,"stroke-dasharray",_(l))}),S(t,v),ae()}var mz=ne("<!><!>",1),Ez=ne("<!><!>",1),Cz=ne("<!><!><!>",1),bz=ne('<g class="single-cell-tool"><!><!></g>');function im(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);D(()=>r(),()=>{var G;O(i,(G=r())==null?void 0:G.id)}),D(()=>(X(m()),sh),()=>{O(o,cn(m().toolId,Ht)??sh)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>(_(a),B),()=>{var G;O(l,((G=_(a))==null?void 0:G.type)||B.CIRCLE)}),D(()=>_(a),()=>{O(u,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{O(d,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>X(m()),()=>{O(h,new Ue(m().cell.c,m().cell.r))}),D(()=>X(m()),()=>{O(v,m().value)}),Ce(),fe();var I=bz(),b=j(I);{var w=G=>{Bh(G,{get coord(){return m().cell},minOrMax:"min"})},A=G=>{var W=me(),M=te(W);{var $=oe=>{Bh(oe,{get coord(){return m().cell},minOrMax:"max"})},J=oe=>{var ie=me(),ce=te(ie);{var be=Ae=>{var we=mz(),Oe=te(we);{var Se=Re=>{Nr(Re,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(d)}})};Q(Oe,Re=>{E()&&E()===_(i)&&Re(Se)})}var ye=F(Oe);pz(ye,{get x(){return _(g).x},get y(){return _(g).y},get value(){return _(v)},get shape(){return _(a)}}),S(Ae,we)},Z=Ae=>{var we=me(),Oe=te(we);{var Se=Re=>{var $e=Ez(),st=te($e);{var ut=Et=>{var Ct=ft(()=>[m().cell]);Wr(Et,{get cells(){return _(Ct)},get shape(){return _(d)}})};Q(st,Et=>{E()&&E()===_(i)&&Et(ut)})}var yt=F(st),_t=ft(()=>[m().cell]);rm(yt,{get cells(){return _(_t)},get shape(){return _(a)},get value(){return m().value}}),S(Re,$e)},ye=Re=>{var $e=Cz(),st=te($e);{var ut=Ct=>{Nr(Ct,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(u)}})};Q(st,Ct=>{Ct(ut)})}var yt=F(st);{var _t=Ct=>{Nr(Ct,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(d)}})};Q(yt,Ct=>{E()&&E()===_(i)&&Ct(_t)})}var Et=F(yt);Nr(Et,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(a)}}),S(Re,$e)};Q(Oe,Re=>{_(l)===B.CAGE?Re(Se):Re(ye,!1)},!0)}S(Ae,we)};Q(ce,Ae=>{m().toolId===f.COLORED_COUNTING_CIRCLES?Ae(be):Ae(Z,!1)},!0)}S(oe,ie)};Q(M,oe=>{m().toolId===f.MAXIMUM?oe($):oe(J,!1)},!0)}S(G,W)};Q(b,G=>{m().toolId===f.MINIMUM?G(w):G(A,!1)})}var T=F(b);{var k=G=>{Ls(G,{get value(){return _(v)},get x(){return _(h).x},get y(){return _(h).y},position:"TL"})};Q(T,G=>{_(l)!==B.CAGE&&m().toolId!==f.COLORED_COUNTING_CIRCLES&&_(v)&&G(k)})}z(I),ee(()=>x(I,"data-id",`${E()}`)),S(t,I),ae()}var Iz=ne('<g class="single-cell-tool-preview"><!></g>');function wz(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L();let a=U(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>_(n),()=>{O(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),Ce(),fe();var l=Iz();x(l,"opacity",.5);var u=j(l);im(u,{get tool(){return _(n)}}),z(l),S(t,l),ae()}var yz=ne('<g class="single-cell-arrow-tool"><!></g>');function Oz(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=l=>{var u=yz(),d=j(u);nm(d,{get tool(){return n()},get c_id(){return r()}}),z(u),ee(()=>x(u,"id",`c-${r()}`)),S(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}S(t,i)}var Az=ne('<g class="single-cell-tool"><!></g>');function xz(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=me(),o=te(i);{var a=l=>{var u=Az(),d=j(u);im(d,{get tool(){return n()},get c_id(){return r()}}),z(u),ee(()=>x(u,"id",`c-${r()}`)),S(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}S(t,i)}function Lz(t,e){se(e,!1);let n=U(e,"tool",8),r=U(e,"c_id",8);fe();var i=me(),o=te(i);{var a=l=>{var u=me(),d=te(u);{var g=v=>{Oz(v,{get tool(){return n()},get c_id(){return r()}})},h=v=>{var m=me(),E=te(m);{var I=w=>{tm(w,{get tool(){return n()},get c_id(){return r()}})},b=w=>{var A=me(),T=te(A);{var k=G=>{xz(G,{get tool(){return n()},get c_id(){return r()}})};Q(T,G=>{n().type==="SIMPLE"&&G(k)},!0)}S(w,A)};Q(E,w=>{n().type==="MULTIARROW"?w(I):w(b,!1)},!0)}S(v,m)};Q(d,v=>{n().type==="ARROW"?v(g):v(h,!1)})}S(l,u)};Q(o,l=>{n().toolId!==f.FOG_LIGHTS&&l(a)})}S(t,i),ae()}var Sz=ue("<!> <!> <!>",1);function $u(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L();let a=U(e,"linePoints",8),l=U(e,"shape",8,Ts);function u(b){var T;const w=Lt.cloneDeep(b);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(T=w.linePathOptions)==null?void 0:T.bezierRounding},w}D(()=>X(a()),()=>{O(n,a().length)}),D(()=>(_(n),X(a())),()=>{O(r,_(n)>=0?a()[0]:void 0)}),D(()=>(_(n),X(a())),()=>{O(i,_(n)>=0?a()[_(n)-1]:void 0)}),D(()=>X(l()),()=>{O(o,u(l()))}),Ce(),fe();var d=Sz(),g=te(d);{var h=b=>{Cr(b,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};Q(g,b=>{_(r)&&b(h)})}var v=F(g,2);{var m=b=>{ui(b,{get linePoints(){return a()},get shape(){return _(o)}})};Q(v,b=>{_(n)>1&&b(m)})}var E=F(v,2);{var I=b=>{Cr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};Q(E,b=>{_(i)&&b(I)})}S(t,d),ae()}var Nz=ue("<!> <!> <!>",1);function Fu(t,e){se(e,!1);const n=L(),r=L(),i=L();let o=U(e,"linePoints",8),a=U(e,"shape",12,Ts);const l=4,u=.5;function d(k,G){const W=G.r??u,M=G.n??l,$=G.angle??0,J=Vp(W,M,new Ue(0,0),!0,0),oe=(M+(k-$/360)*M%M)%M,ie=Math.floor(oe)%M,ce=Math.ceil(oe)%M;return J[ie].lerp(J[ce],oe%1).length()}function g(k){if(_(n)<=1)return 0;const G=o()[0],M=o()[1].subtract(G).angle()/(2*Math.PI);return d(M,k)}function h(k){if(_(n)<=1)return 0;const G=o()[_(n)-1],M=o()[_(n)-2].subtract(G).angle()/(2*Math.PI);return d(M,k)}function v(k){var W;const G=Lt.cloneDeep(k);return G.r=G.r||u,G.opacity=1,G.linePathOptions={shortenHead:g(G),shortenTail:h(G),bezierRounding:(W=G.linePathOptions)==null?void 0:W.bezierRounding},G}D(()=>X(o()),()=>{O(n,o().length)}),D(()=>(_(n),X(o())),()=>{O(r,_(n)>=0?o()[0]:void 0)}),D(()=>(_(n),X(o())),()=>{O(i,_(n)>=0?o()[_(n)-1]:void 0)}),D(()=>X(a()),()=>{a(v(a()))}),Ce(),fe();var m=Nz(),E=te(m);{var I=k=>{pl(k,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return a()}})};Q(E,k=>{_(r)&&k(I)})}var b=F(E,2);{var w=k=>{ui(k,{get linePoints(){return o()},get shape(){return a()}})};Q(b,k=>{_(n)>1&&k(w)})}var A=F(b,2);{var T=k=>{pl(k,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return a()}})};Q(A,k=>{_(i)&&k(T)})}S(t,m),ae()}var Dz=ue("<!> <!>",1);function Pu(t,e){se(e,!1);const n=L();let r=U(e,"linePoints",8),i=U(e,"shape",8,Ts);function o(m){var b,w,A;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var b,w,A;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}D(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),Ce(),fe();var l=Dz(),u=te(l);{var d=m=>{var E=ft(()=>o(i()));ui(m,{get linePoints(){return r()},get shape(){return _(E)}})};Q(u,m=>{r().length>1&&m(d)})}var g=F(u,2);{var h=m=>{var E=ft(()=>o(i()));Cr(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},v=m=>{var E=me(),I=te(E);{var b=w=>{var A=ft(()=>a(i()));pl(w,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(A)}})};Q(I,w=>{_(n)&&w(b)},!0)}S(m,E)};Q(g,m=>{_(n)&&i().type===B.THERMO_WITH_CIRCLE?m(h):m(v,!1)})}S(t,l),ae()}var Rz=ne("<!><!><!>",1),Tz=ne("<!><!><!>",1),kz=ne("<!><!><!>",1),Mz=ne("<!><!><!>",1),Uz=ne('<g class="line-tool"><!></g>');function Gz(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L();let h=U(e,"tool",8),v=U(e,"c_id",8);const m=cn(h().toolId,Ht)??Ts;D(()=>r(),()=>{var A;O(i,(A=r())==null?void 0:A.id)}),D(()=>X(h()),()=>{O(o,ql(h().cells))}),D(()=>X(h()),()=>{O(a,h().shape??m)}),D(()=>(_(a),B),()=>{var A;O(l,((A=_(a))==null?void 0:A.type)||B.LINE)}),D(()=>_(a),()=>{var A;O(u,((A=_(a))==null?void 0:A.opacity)??1)}),D(()=>_(a),()=>{O(d,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),Ce(),fe();var E=Uz(),I=j(E);{var b=A=>{var T=Rz(),k=te(T);{var G=J=>{$u(J,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(k,J=>{J(G)})}var W=F(k);{var M=J=>{$u(J,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(W,J=>{v()===_(i)&&J(M)})}var $=F(W);$u($,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(A,T)},w=A=>{var T=me(),k=te(T);{var G=M=>{var $=Tz(),J=te($);{var oe=Z=>{Fu(Z,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(J,Z=>{Z(oe)})}var ie=F(J);{var ce=Z=>{Fu(Z,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(ie,Z=>{v()===_(i)&&Z(ce)})}var be=F(ie);Fu(be,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(M,$)},W=M=>{var $=me(),J=te($);{var oe=ce=>{var be=kz(),Z=te(be);{var Ae=ye=>{Pu(ye,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,ye=>{ye(Ae)})}var we=F(Z);{var Oe=ye=>{Pu(ye,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(we,ye=>{v()===_(i)&&ye(Oe)})}var Se=F(we);Pu(Se,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(ce,be)},ie=ce=>{var be=Mz(),Z=te(be);{var Ae=ye=>{ui(ye,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,ye=>{ye(Ae)})}var we=F(Z);{var Oe=ye=>{ui(ye,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(we,ye=>{v()===_(i)&&ye(Oe)})}var Se=F(we);ui(Se,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(ce,be)};Q(J,ce=>{_(l)===B.THERMO_WITH_CIRCLE||_(l)===B.THERMO_WITH_POLYGON?ce(oe):ce(ie,!1)},!0)}S(M,$)};Q(k,M=>{_(l)===B.LINE_WITH_POLYGON_ENDS?M(G):M(W,!1)},!0)}S(A,T)};Q(I,A=>{_(l)===B.LINE_WITH_CIRCLE_ENDS?A(b):A(w,!1)})}z(E),ee(()=>x(E,"opacity",_(u))),S(t,E),ae()}var $z=ne('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function om(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),o=U(e,"stroke",8,"black");const a=.5,l=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=$z();x(u,"viewBox","0 0 1 1"),x(u,"refX",a),x(u,"refY",a),x(u,"markerWidth",1),x(u,"markerHeight",1);var d=j(u);x(d,"d",l),z(u),ee(()=>{x(u,"id",r()),x(d,"stroke-width",i()),x(d,"stroke",o())}),S(t,u)}var Fz=ne('<path class="arrow-line" fill="none"></path>'),Pz=ne("<!><!><!>",1);function zz(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=U(e,"tool",8),E=U(e,"arrowId",8);const I=cn(m().toolId,Ht)??Nv,b="round",w="round",A=crypto.randomUUID(),T=`arrow-marker-${E()}-${A}`;D(()=>X(m()),()=>{O(n,m().shape??I)}),D(()=>_(n),()=>{var $;O(r,(($=_(n))==null?void 0:$.r)??.4)}),D(()=>_(n),()=>{var $;O(i,(($=_(n))==null?void 0:$.stroke)??"gray")}),D(()=>_(n),()=>{var $;O(o,(($=_(n))==null?void 0:$.strokeWidth)??.1)}),D(()=>_(n),()=>{var $;O(a,(($=_(n))==null?void 0:$.strokeDasharray)??0)}),D(()=>_(n),()=>{var $;O(l,(($=_(n))==null?void 0:$.opacity)??.8)}),D(()=>(_(r),_(n)),()=>{var $,J,oe,ie;O(u,{shortenHead:_(r),shortenTail:((J=($=_(n))==null?void 0:$.linePathOptions)==null?void 0:J.shortenTail)??.2,bezierRounding:((ie=(oe=_(n))==null?void 0:oe.linePathOptions)==null?void 0:ie.bezierRounding)??.4})}),D(()=>_(n),()=>{var $;O(d,(($=_(n))==null?void 0:$.fill)??"none")}),D(()=>_(n),()=>{var $;O(g,(($=_(n))==null?void 0:$.inset)??.2)}),D(()=>_(g),()=>{O(h,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:_(g)})}),D(()=>X(m()),()=>{O(v,vl(m().cells))}),Ce(),fe();var k=Pz(),G=te(k);om(G,{id:T,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var W=F(G);Wr(W,{get cells(){return m().cells},get shape(){return _(h)}});var M=F(W);qe(M,1,()=>m().lines,pt,($,J)=>{var oe=me(),ie=te(oe);{var ce=be=>{var Z=Fz();ee(()=>x(Z,"d",vl(_(J),_(u)))),x(Z,"stroke-linejoin",b),x(Z,"stroke-linecap",w),x(Z,"marker-end",`url(#${T??""})`),ee(()=>{x(Z,"stroke",_(i)),x(Z,"stroke-width",_(o)),x(Z,"opacity",_(l)),x(Z,"stroke-dasharray",_(a))}),S(be,Z)};Q(ie,be=>{_(J).length>1&&be(ce)})}S($,oe)}),S(t,k),ae()}var Hz=ne('<path class="arrow-line" fill="none"></path>'),Wz=ne('<mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><path class="arrow-bulb svelte-8t4zyo" stroke="white" fill="none"></path><path class="arrow-bulb svelte-8t4zyo" stroke="black" fill="none"></path></mask><!><path class="arrow-bulb svelte-8t4zyo"></path><!>',1);function zu(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L();let d=U(e,"tool",8),g=U(e,"c_id",8),h=U(e,"shape",8);const v="round",m="round",E=crypto.randomUUID(),I=`arrow-mask-${g()}-${E}`,b=`arrow-marker-${g()}-${E}`;D(()=>X(h()),()=>{var $;O(n,(($=h())==null?void 0:$.r)??.4)}),D(()=>X(h()),()=>{var $;O(r,(($=h())==null?void 0:$.stroke)??"gray")}),D(()=>X(h()),()=>{var $;O(i,(($=h())==null?void 0:$.strokeWidth)??.1)}),D(()=>X(h()),()=>{var $;O(o,(($=h())==null?void 0:$.strokeDasharray)??0)}),D(()=>(_(n),X(h())),()=>{var $,J,oe,ie;O(a,{shortenHead:_(n),shortenTail:((J=($=h())==null?void 0:$.linePathOptions)==null?void 0:J.shortenTail)??.2,bezierRounding:((ie=(oe=h())==null?void 0:oe.linePathOptions)==null?void 0:ie.bezierRounding)??.4})}),D(()=>X(d()),()=>{O(l,vl(d().cells))}),D(()=>X(d()),()=>{O(u,OP(d().cells))}),Ce(),fe();var w=Wz(),A=te(w);x(A,"id",I);var T=j(A),k=F(T);z(A);var G=F(A);om(G,{id:b,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var W=F(G);x(W,"mask",`url(#${I??""})`);var M=F(W);qe(M,1,()=>d().lines,pt,($,J)=>{var oe=me(),ie=te(oe);{var ce=be=>{var Z=Hz();ee(()=>x(Z,"d",vl(_(J),_(a)))),x(Z,"stroke-linejoin",v),x(Z,"stroke-linecap",m),x(Z,"marker-end",`url(#${b??""})`),ee(()=>{x(Z,"stroke",_(r)),x(Z,"stroke-width",_(i)),x(Z,"stroke-dasharray",_(o))}),S(be,Z)};Q(ie,be=>{_(J).length>1&&be(ce)})}S($,oe)}),ee(()=>{x(A,"x",_(u).x),x(A,"y",_(u).y),x(A,"width",_(u).width),x(A,"height",_(u).height),x(T,"stroke-width",2*_(n)+_(i)),x(T,"d",_(l)),x(k,"stroke-width",2*_(n)-_(i)),x(k,"d",_(l)),x(W,"d",_(l)),x(W,"stroke-width",2*_(n)+_(i)),x(W,"stroke",_(r))}),S(t,w),ae()}var Bz=ne("<!><!><!>",1),Yz=ne('<g class="arrow-tool"><!></g>');function jz(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L();let u=U(e,"tool",8),d=U(e,"c_id",8);const g=cn(u().toolId,Ht)??Nv;D(()=>X(u()),()=>{O(i,u().shape??g)}),D(()=>_(i),()=>{O(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),D(()=>_(i),()=>{O(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;O(l,(I=r())==null?void 0:I.id)}),Ce(),fe();var h=Yz(),v=j(h);{var m=I=>{zz(I,{get tool(){return u()},get arrowId(){return d()}})},E=I=>{var b=Bz(),w=te(b);{var A=W=>{zu(W,{get tool(){return u()},get c_id(){return d()},get shape(){return _(o)}})};Q(w,W=>{W(A)})}var T=F(w);{var k=W=>{zu(W,{get tool(){return u()},get c_id(){return d()},get shape(){return _(a)}})};Q(T,W=>{d()===_(l)&&W(k)})}var G=F(T);zu(G,{get tool(){return u()},get c_id(){return d()},get shape(){return _(i)}}),S(I,b)};Q(v,I=>{_(i).type===B.BULBOUS_ARROW?I(m):I(E,!1)})}z(h),S(t,h),ae()}var Kz=ne('<g class="cage-tool"><!><!></g>');function Vz(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L();let l=U(e,"tool",8),u=U(e,"c_id",8);const d=cn(l().toolId,Ht)??$d;D(()=>X(l()),()=>{O(i,l().shape??d)}),D(()=>r(),()=>{var E;O(o,(E=r())==null?void 0:E.id)}),D(()=>_(i),()=>{O(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),Ce(),fe();var g=Kz(),h=j(g);{var v=E=>{Wr(E,{get cells(){return l().cells},get shape(){return _(a)}})};Q(h,E=>{u()===_(o)&&E(v)})}var m=F(h);rm(m,{get cells(){return l().cells},get shape(){return _(i)},get value(){return l().value}}),z(g),S(t,g),ae()}var Xz=ne("<!><!>",1),qz=ne('<g class="clone-tool"><!><!><!><!><!></g>');function Zz(t,e){se(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L();let E=U(e,"tool",8),I=U(e,"c_id",8);const b=cn(E().toolId,Ht)??Py,w=800,A=E().value;D(()=>r(),()=>{var oe;O(i,(oe=r())==null?void 0:oe.id)}),D(()=>X(E()),()=>{O(o,E().shape??b)}),D(()=>_(o),()=>{O(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{O(l,_(o).inset??.15)}),D(()=>_(o),()=>{O(u,_(o).strokeWidth??.07)}),D(()=>_(o),()=>{O(d,_(o).fontColor??_(o).stroke??"black")}),D(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),D(()=>X(E()),()=>{O(h,E().cells2[E().cells2.length-1])}),D(()=>(_(g),_(l)),()=>{O(v,new Ue(_(g).c+1-_(l)-.05,_(g).r+1-_(l)-.05))}),D(()=>(_(h),_(l)),()=>{O(m,new Ue(_(h).c+1-_(l)-.05,_(h).r+1-_(l)-.05))}),Ce(),fe();var T=qz(),k=j(T);{var G=oe=>{var ie=Xz(),ce=te(ie);Wr(ce,{get cells(){return E().cells},get shape(){return _(a)}});var be=F(ce);Wr(be,{get cells(){return E().cells2},get shape(){return _(a)}}),S(oe,ie)};Q(k,oe=>{I()===_(i)&&oe(G)})}var W=F(k);Wr(W,{get cells(){return E().cells},get shape(){return _(o)}});var M=F(W);Ls(M,{value:A,get x(){return _(v).x},get y(){return _(v).y},position:"BR",get fontColor(){return _(d)},fontWeight:w});var $=F(M);Wr($,{get cells(){return E().cells2},get shape(){return _(o)}});var J=F($);Ls(J,{value:A,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(d)},fontWeight:w}),z(T),S(t,T),ae()}var Qz=ne('<g class="element-group"><!></g>'),Jz=ne('<g class="underlay-layer"></g>');function eH(t,e){se(e,!1);const n=Ye(),r=()=>ge(y2,"$underlayElementsStore",n),i=()=>ge(mi,"$enableFogMaskStore",n),o=L(),a=L();D(()=>r(),()=>{O(o,r())}),D(()=>i(),()=>{O(a,i())}),Ce(),fe();var l=Jz();qe(l,5,()=>_(o),pt,(u,d)=>{var g=me(),h=te(g);{var v=m=>{var E=Qz(),I=j(E);{var b=A=>{var T=me(),k=te(T);qe(k,1,()=>Object.entries(_(d).constraints),G=>G[0],(G,W)=>{Lz(G,{get tool(){return _(W)[1]},get c_id(){return _(W)[0]}})}),S(A,T)},w=A=>{var T=me(),k=te(T);{var G=M=>{var $=me(),J=te($);qe(J,1,()=>Object.entries(_(d).constraints),oe=>oe[0],(oe,ie)=>{Gz(oe,{get tool(){return _(ie)[1]},get c_id(){return _(ie)[0]}})}),S(M,$)},W=M=>{var $=me(),J=te($);{var oe=ce=>{var be=me(),Z=te(be);qe(Z,1,()=>Object.entries(_(d).constraints),Ae=>Ae[0],(Ae,we)=>{jz(Ae,{get tool(){return _(we)[1]},get c_id(){return _(we)[0]}})}),S(ce,be)},ie=ce=>{var be=me(),Z=te(be);{var Ae=Oe=>{var Se=me(),ye=te(Se);qe(ye,1,()=>Object.entries(_(d).constraints),Re=>Re[0],(Re,$e)=>{Vz(Re,{get tool(){return _($e)[1]},get c_id(){return _($e)[0]}})}),S(Oe,Se)},we=Oe=>{var Se=me(),ye=te(Se);{var Re=st=>{var ut=me(),yt=te(ut);qe(yt,1,()=>Object.entries(_(d).constraints),_t=>_t[0],(_t,Et)=>{Zz(_t,{get tool(){return _(Et)[1]},get c_id(){return _(Et)[0]}})}),S(st,ut)},$e=st=>{var ut=me(),yt=te(ut);{var _t=Et=>{var Ct=me(),In=te(Ct);qe(In,1,()=>Object.entries(_(d).constraints),un=>un[0],(un,Ir)=>{Jp(un,{get tool(){return _(Ir)[1]},get c_id(){return _(Ir)[0]}})}),S(Et,Ct)};Q(yt,Et=>{jr(_(d).tool_id)&&Et(_t)},!0)}S(st,ut)};Q(ye,st=>{Rs(_(d).tool_id)?st(Re):st($e,!1)},!0)}S(Oe,Se)};Q(Z,Oe=>{Oo(_(d).tool_id)?Oe(Ae):Oe(we,!1)},!0)}S(ce,be)};Q(J,ce=>{yo(_(d).tool_id)?ce(oe):ce(ie,!1)},!0)}S(M,$)};Q(k,M=>{wo(_(d).tool_id)?M(G):M(W,!1)},!0)}S(A,T)};Q(I,A=>{Ud(_(d).tool_id)?A(b):A(w,!1)})}z(E),ee(()=>x(E,"data-toolId",_(d).tool_id)),S(m,E)};Q(h,m=>{_(d).constraints&&m(v)})}S(u,g)}),z(l),ee(()=>x(l,"mask",_(a)?"url(#fog-mask-fog)":null)),S(t,l),ae()}var tH=ne('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),nH=ne('<g class="center-corner-or-edge-tool-preview"><!></g>');function rH(t,e){se(e,!1);const n=L(),r=L(),i=L(),o=L();let a=U(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>_(n),()=>{O(o,_(n).cell)}),Ce(),fe();var l=me(),u=te(l);{var d=h=>{var v=tH();x(v,"opacity",.5);var m=j(v);Jl(m,{get cx(){return _(o).c},get cy(){return _(o).r},get c_id(){return _(i)}}),z(v),S(h,v)},g=h=>{var v=nH();x(v,"opacity",.5);var m=j(v);Qp(m,{get tool(){return _(n)}}),z(v),S(h,v)};Q(u,h=>{_(r)==="remove"&&_(i)?h(d):h(g,!1)})}S(t,l),ae()}var iH=ne('<line class="positive-diagonal"></line>'),oH=ne('<line class="negative-diagonal"></line>'),sH=ne('<g class="element-group"><!></g>');function aH(t,e){se(e,!1);const n=Ye(),r=()=>ge(hn,"$gridStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L();let E=U(e,"element",8);const I=0,b=0,w=0,A=0;D(()=>X(E()),()=>{O(i,E().tool_id)}),D(()=>(X(E()),uh),()=>{O(o,cn(E().tool_id,Ht)??uh)}),D(()=>_(o),()=>{var M;O(a,((M=_(o))==null?void 0:M.strokeWidth)??.02)}),D(()=>_(o),()=>{var M;O(l,((M=_(o))==null?void 0:M.stroke)??"black")}),D(()=>r(),()=>{O(u,r())}),D(()=>(_(i),f),()=>{O(d,_(i)===f.POSITIVE_DIAGONAL||_(i)===f.POSITIVE_ANTIDIAGONAL||_(i)===f.PARITY_MIRROR_POSITIVE_DIAGONAL)}),D(()=>_(u),()=>{O(g,_(u).nCols)}),D(()=>_(u),()=>{O(h,_(u).nRows)}),D(()=>_(u),()=>{O(v,_(u).nCols)}),D(()=>_(u),()=>{O(m,_(u).nRows)}),Ce(),fe();var T=sH(),k=j(T);{var G=M=>{var $=iH();x($,"x2",A),x($,"y1",w),ee(()=>{x($,"x1",_(g)),x($,"y2",_(h)),x($,"stroke",_(l)),x($,"stroke-width",_(a))}),S(M,$)},W=M=>{var $=oH();x($,"x1",I),x($,"y1",b),ee(()=>{x($,"x2",_(v)),x($,"y2",_(m)),x($,"stroke",_(l)),x($,"stroke-width",_(a))}),S(M,$)};Q(k,M=>{_(d)?M(G):M(W,!1)})}z(T),ee(()=>x(T,"data-toolId",E().tool_id)),S(t,T),ae()}function lH(t,e){se(e,!1);const n=Ye(),r=()=>ge(R2,"$diagonalElementsStore",n),i=L();D(()=>r(),()=>{O(i,r())}),Ce();var o=me(),a=te(o);qe(a,1,()=>_(i),pt,(l,u)=>{aH(l,{get element(){return _(u)}})}),S(t,o),ae()}var cH=ne('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function uH(t,e){se(e,!1);const n=Ye(),r=()=>ge(hn,"$gridStore",n),i=()=>ge(Vs,"$boundingBoxStore",n),o=()=>ge(Pn,"$cellsStore",n),a=()=>ge(Cp,"$fogLightsStore",n),l=()=>ge(D2,"$cornerLineToolsStore",n),u=()=>ge(L2,"$edgeToolsStore",n),d=()=>ge(N2,"$cornerToolsStore",n),g=()=>ge(S2,"$centerCornerOrEdgeToolsStore",n),h=()=>ge(en,"$toolStore",n),v=()=>ge(Es,"$outsideDirectionToolPreviewStore",n),m=()=>ge(Ja,"$simpleCellToolPreviewStore",n),E=()=>ge(el,"$singleCellArrowPreviewStore",n),I=()=>ge(tl,"$singleCellMultiArrowPreviewStore",n),b=()=>ge(nl,"$edgeToolPreviewStore",n),w=()=>ge(rl,"$cornerToolPreviewStore",n),A=()=>ge(il,"$centerCornerOrEdgeToolPreviewStore",n),T=L(),k=L(),G=L();let W=U(e,"svgRef",12,null);function M(et){return`${et.x} ${et.y} ${et.width} ${et.height}`}D(()=>r(),()=>{O(T,r())}),D(()=>_(T),()=>{O(k,{nRows:_(T).nRows,nCols:_(T).nCols})}),D(()=>i(),()=>{O(G,i())}),Ce(),fe();var $=cH();ee(()=>x($,"viewBox",M(_(G))));var J=j($);q6(J);var oe=F(J);V4(oe,{get gridShape(){return _(k)}});var ie=F(oe);FP(ie,{get grid(){return r()}});var ce=F(ie);q4(ce,{get gridShape(){return _(k)}});var be=F(ce);vP(be,{get gridShape(){return _(k)}});var Z=F(be);qe(Z,5,o,pt,(et,Vo)=>{g4(et,{get cell(){return _(Vo)}})}),z(Z);var Ae=F(Z);T4(Ae,{});var we=F(Ae);ez(we,{get element(){return a()}});var Oe=F(we);eH(Oe,{});var Se=F(Oe);lH(Se,{});var ye=F(Se);EP(ye,{});var Re=F(ye);MP(Re,{});var $e=F(Re);Va($e,{get elements(){return l()},g_name:"corner-line-tools-layer",Component:k6});var st=F($e);GP(st,{get gridShape(){return _(k)}});var ut=F(st);gP(ut,{});var yt=F(ut);Va(yt,{get elements(){return u()},g_name:"edge-tools-layer",Component:H6});var _t=F(yt);Va(_t,{get elements(){return d()},g_name:"corner-tools-layer",Component:m6});var Et=F(_t);Va(Et,{get elements(){return g()},g_name:"center-corner-edge-tools-layer",Component:w6});var Ct=F(Et);N4(Ct,{});var In=F(Ct);qe(In,5,o,pt,(et,Vo)=>{d4(et,{get cell(){return _(Vo)}})}),z(In);var un=F(In);e6(un,{});var Ir=F(un);Y4(Ir,{});var wr=F(Ir);{var Tr=et=>{Jp(et,{get tool(){return v()}})};Q(wr,et=>{jr(h())&&v()&&et(Tr)})}var Pe=F(wr);{var Ie=et=>{wz(et,{get tool_preview(){return m()}})};Q(Pe,et=>{wl(h())&&h()!==f.FOG_LIGHTS&&m()&&et(Ie)})}var Te=F(Pe);{var ze=et=>{fz(et,{get tool_preview(){return E()}})};Q(Te,et=>{Fi(h())&&E()&&et(ze)})}var Mt=F(Te);{var ea=et=>{tm(et,{get tool(){return I()}})};Q(Mt,et=>{bo(h())&&I()&&et(ea)})}var ta=F(Mt);{var Ei=et=>{iz(et,{get tool_preview(){return b()}})};Q(ta,et=>{Io(h())&&b()&&et(Ei)})}var wn=F(ta);{var Ci=et=>{az(et,{get tool_preview(){return w()}})};Q(wn,et=>{Ns(h())&&w()&&et(Ci)})}var Wi=F(wn);{var tc=et=>{rH(et,{get tool_preview(){return A()}})};Q(Wi,et=>{Ds(h())&&A()&&et(tc)})}z($),Ui($,et=>W(et),()=>W()),S(t,$),ae()}function dH(t){return tO(t)?(my(),!0):!1}function _H(t){return nO(t)?(_p(),!0):!1}function fH(t){return rO(t)?(fp(),!0):!1}function Hu(t){(dH(t)||_H(t)||fH(t))&&(t.stopImmediatePropagation(),t.preventDefault())}function gH(t,e){if(!e)return;const n=bn(t,e);if(!n)return;const r=t.ctrlKey,i=-t.deltaY,o=i>0?1.1:i<0?1/1.1:0;return{event:t,point:n,ctrl:r,zoom_factor:o,delta:i}}class hH{constructor(){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"onWheel",null);ve(this,"_isDown",!1);ve(this,"_lastPoint",null);ve(this,"_pointerId",null)}pointerDown(e,n){if(e.button!==1||!n)return;const r=new Ue(e.clientX,e.clientY);if(r&&(this._pointerId=e.pointerId,e.currentTarget instanceof Element&&e.currentTarget.setPointerCapture(e.pointerId),this._isDown=!0,this._lastPoint=r,this.onDragStart)){const i={event:e,point:r};this.onDragStart(i)}}pointerMove(e,n){if(!this._isDown||this._pointerId!==null&&e.pointerId!==this._pointerId||!n)return;const r=new Ue(e.clientX,e.clientY);if(!r||!this._lastPoint)return;const i=r.subtract(this._lastPoint),o={event:e,point:i};this._lastPoint=r,this.onDrag&&this.onDrag(o)}pointerUp(e){this._pointerId!==null&&e.pointerId!==this._pointerId||e.button===1&&(this._pointerId!==null&&e.currentTarget instanceof Element&&e.currentTarget.releasePointerCapture(this._pointerId),this._isDown&&(this._isDown=!1,this.onDragEnd&&this.onDragEnd()),this._lastPoint=null,this._pointerId=null)}wheel(e,n){const r=gH(e,n);r&&this.onWheel&&this.onWheel(r)}}const ao=new hH;function vH(t){ao.onDrag=r=>{ok(r)},ao.onWheel=r=>{rk(r),ik(r)};const e=Lt.throttle(r=>{ao.pointerMove(r,t)},10);return{pointerDown(r){r.button===1&&r.preventDefault(),ao.pointerDown(r,t)},pointerMove(r){e(r)},pointerUp(r){ao.pointerUp(r)},keyUp(){},keyDown(){},wheelEvent(r){ao.wheel(r,t)}}}var pH=ue('<button class="form-button zoom-reset svelte-11c686j">Reset zoom</button>'),mH=ue('<div class="board-container svelte-11c686j" tabindex="-1"><!> <!></div>');function EH(t,e){se(e,!1);const n=Ye(),r=()=>ge(Ip,"$InputHandlerStore",n),i=()=>ge(vo,"$svgRefStore",n),o=()=>ge(mo,"$currentScaleStore",n),a=L(),l=L();let u=L(null);function d(w){return A=>{w&&_(a)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(u))&&w(A)}}function g(){i_()}D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(l,vH(i()))}),Ce(),fe();var h=mH();Ne("keydown",wu,function(...w){Hu==null||Hu.apply(this,w)});var v=rh(()=>{var w;return d((w=_(a))==null?void 0:w.keyDown)});Ne("keydown",wu,function(...w){var A;(A=_(v))==null||A.apply(this,w)});var m=rh(()=>{var w;return d((w=_(a))==null?void 0:w.keyUp)});Ne("keyup",wu,function(...w){var A;(A=_(m))==null||A.apply(this,w)});var E=j(h);uH(E,{get svgRef(){return nv(),i()},set svgRef(w){go(vo,w)},$$legacy:!0});var I=F(E,2);{var b=w=>{var A=pH();Ne("click",A,oo(Fn(g)),!0),S(w,A)};Q(I,w=>{o()!==1&&w(b)})}z(h),Ui(h,w=>O(u,w),()=>_(u)),Ne("pointerdown",h,oo(w=>{_(l).pointerDown(w)}),!0),Ne("pointermove",h,w=>{_(l).pointerMove(w)},!0),Ne("pointerup",h,w=>{_(l).pointerUp(w)},!0),Ne("pointercancel",h,w=>{_(l).pointerUp(w)},!0),Ne("wheel",h,oo(Fn(w=>{w.currentTarget.focus(),_(l).wheelEvent&&_(l).wheelEvent(w)})),!0),Ne("pointerdown",h,oo(Fn(w=>{var A;w.currentTarget.focus(),(A=_(a))==null||A.pointerDown(w)})),!0),Ne("pointermove",h,oo(Fn(w=>{var A;w.currentTarget.focus(),(A=_(a))==null||A.pointerMove(w)})),!0),Ne("pointerup",h,oo(Fn(w=>{var A;w.currentTarget.focus(),(A=_(a))==null||A.pointerUp(w)})),!0),S(t,h),ae()}var CH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function bH(t){var e=CH();S(t,e)}var IH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function wH(t){var e=IH();S(t,e)}var yH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function OH(t){var e=yH();S(t,e)}var AH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function xH(t){var e=AH();S(t,e)}var LH=ue('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function SH(t,e){se(e,!1);const n=Ye(),r=()=>ge(Fo,"$commandHistoryStore",n),i=()=>ge(ud,"$selectOnStore",n),o=L(),a=L();function l(){_p()}function u(){fp()}function d(){console.log("check")}function g(){go(ud,!i())}D(()=>r(),()=>{O(o,r()._undoStack.length===0)}),D(()=>r(),()=>{O(a,r()._redoStack.length===0)}),Ce(),fe();var h=LH(),v=j(h),m=j(v);xH(m),z(v);var E=F(v,2),I=j(E);wH(I),z(E);var b=F(E,2);b.disabled=!0;var w=j(b);bH(w),z(b);var A=F(b,2),T=j(A);OH(T),z(A),z(h),ee(()=>{v.disabled=_(o),E.disabled=_(a),x(A,"aria-checked",i()),xt(A,"active",i())}),Ne("click",v,l),Ne("click",E,u),Ne("click",b,d),Ne("click",A,g),S(t,h),ae()}var NH=ue('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),DH=ue('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),RH=ue('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),TH=ue('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function kH(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n),i=()=>ge(gl,"$penColorStore",n),o=()=>ge(Ip,"$InputHandlerStore",n),a=L(),l=L(),u=[];let d=U(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let v=L(!1);function m(M){return M?h:g}function E(M){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(M)}function I(M){const $=M.currentTarget;if(!$)return;const J=$.getAttribute("aria-checked");O(v,J!=="true")}D(()=>r(),()=>{O(a,r().penToolActive)}),D(()=>r(),()=>{O(l,r().letterToolActive)}),Ce(),fe();var b=TH(),w=j(b);{var A=M=>{var $=me(),J=te($);qe(J,1,()=>g,pt,(oe,ie)=>{var ce=NH(),be=j(ce);gn(be);var Z;di(2),z(ce),ee(()=>{x(ce,"data-value",_(ie)),xt(ce,"active",i()===_(ie)),Z!==(Z=_(ie))&&(be.value=(be.__value=_(ie))==null?"":_(ie))}),Ed(u,[],be,()=>(_(ie),i()),Ae=>go(gl,Ae)),S(oe,ce)}),S(M,$)},T=M=>{var $=me(),J=te($);qe(J,1,()=>m(_(v)),pt,(oe,ie)=>{var ce=DH(),be=j(ce),Z=j(be,!0);z(be),di(2),z(ce),ee(()=>{rv(ce,_(ie)),rt(Z,_(ie))}),Ne("click",ce,function(...Ae){var we;(we=o()&&o().padClick)==null||we.apply(this,Ae)}),S(oe,ce)}),S(M,$)};Q(w,M=>{d()===f.PEN_TOOL&&_(a)?M(A):M(T,!1)})}var k=F(w,2);{var G=M=>{var $=RH();ee(()=>{x($,"aria-checked",_(v)),xt($,"letter-checked",_(v)),xt($,"num-checked",!_(v))}),Ne("click",$,I),S(M,$)};Q(k,M=>{_(l)&&E(d())&&M(G)})}var W=F(k,2);z(b),ee(()=>{xt(b,"digit",d()===f.DIGIT),xt(b,"center",d()===f.CENTER_PM),xt(b,"corner",d()===f.CORNER_PM),xt(b,"color",d()===f.HIGHLIGHTS),xt(b,"pen",d()===f.PEN_TOOL),xt(W,"letter-tool",_(l))}),Ne("click",W,function(...M){var $;($=o()&&o().padClick)==null||$.apply(this,M)}),S(t,b),ae()}var MH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function UH(t){var e=MH();S(t,e)}var GH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function $H(t){var e=GH();S(t,e)}var FH=ue('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function fs(t,e){se(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),o=U(e,"title",8,void 0);function a(){dd(i())}fe();var l=FH(),u=j(l);gn(u);var d,g=F(u,2);wt(g,e,"default",{}),z(l),ee(()=>{x(l,"title",o()),xt(l,"active",i()===r()),d!==(d=i())&&(u.value=(u.__value=i())==null?"":i())}),Ed(n,[],u,()=>(i(),r()),r),Ne("change",u,a),S(t,l),ae()}var PH=ue('<span aria-hidden="true">1</span>'),zH=ue('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),HH=ue('<span aria-hidden="true" style="font-size: 50%">123</span>'),WH=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),BH=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),YH=ue('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function jH(t,e){se(e,!1);const n=Ye(),r=()=>ge(Sn,"$settingsStore",n);let i=U(e,"selectedTool",12);fe();var o=YH(),a=j(o);fs(a,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=PH();S(v,E)},$$slots:{default:!0},$$legacy:!0});var l=F(a,2);fs(l,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=zH();S(v,E)},$$slots:{default:!0},$$legacy:!0});var u=F(l,2);fs(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=HH();S(v,E)},$$slots:{default:!0},$$legacy:!0});var d=F(u,2);fs(d,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=WH(),I=j(E);UH(I),z(E),S(v,E)},$$slots:{default:!0},$$legacy:!0});var g=F(d,2);{var h=v=>{fs(v,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=BH(),b=j(I);$H(b),z(I),S(m,I)},$$slots:{default:!0},$$legacy:!0})};Q(g,v=>{r().penToolActive&&v(h)})}z(o),S(t,o),ae()}var KH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function VH(t){var e=KH();S(t,e)}var XH=ue('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Zs(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=XH(),o=j(i),a=j(o);wt(a,e,"default",{}),z(o),z(i),ee(()=>x(i,"title",n())),Ne("click",i,function(...l){var u;(u=r())==null||u.apply(this,l)}),S(t,i)}var qH=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),ZH=ue('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function QH(t,e){se(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){hp(),hl(),n(!1)}fe(),Qr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var l=ZH(),u=F(j(l),2);Pl(u,{children:(d,g)=>{var h=qH(),v=te(h),m=F(v,2);Ne("click",v,i),Ne("click",m,r),S(d,h)},$$slots:{default:!0}}),z(l),S(o,l)},$$slots:{default:!0},$$legacy:!0}),ae()}var JH=ue("<!> <!>",1);function eW(t){let e=L(!1);function n(){O(e,!0)}var r=JH(),i=te(r);Zs(i,{title:"Restart",clickCb:n,children:(a,l)=>{VH(a)},$$slots:{default:!0}});var o=F(i,2);QH(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var tW=ue('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function gs(t,e){let n=U(e,"title",8);var r=tW(),i=j(r),o=j(i,!0);z(i);var a=F(i,2);wt(a,e,"default",{}),z(r),ee(()=>rt(o,n())),S(t,r)}var nW=ue('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function Cn(t,e){let n=U(e,"description",8);var r=nW(),i=j(r),o=j(i,!0);z(i);var a=F(i,2),l=j(a);wt(l,e,"default",{}),z(a),z(r),ee(()=>rt(o,n())),S(t,r)}var rW=ue('<div class="shortcut svelte-1cgt5u5"> </div>');function fn(t,e){let n=U(e,"shortcut",8);var r=rW(),i=j(r,!0);z(r),ee(()=>rt(i,n())),S(t,r)}var iW=ue("<p></p>"),oW=ue("<!> <!> <!> <!>",1),sW=ue("<!> or <!>",1),aW=ue("<!> <!> <!> <!> <!> <!> <!> <!>",1),lW=ue("<!> <!>",1),cW=ue('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function uW(t,e){let n=U(e,"showModal",12,!1);Qr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=cW(),a=j(o);gs(a,{title:"Setting Instructions",children:(h,v)=>{var m=iW();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",S(h,m)},$$slots:{default:!0}});var l=F(a,2);gs(l,{title:"General",children:(h,v)=>{Cn(h,{description:"Toggle Darkmode",children:(m,E)=>{fn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=F(l,2);gs(u,{title:"Selection",children:(h,v)=>{var m=oW(),E=te(m);Cn(E,{description:"Select cells",children:(A,T)=>{fn(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=F(E,2);Cn(I,{description:"Add to current selection",children:(A,T)=>{fn(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=F(I,2);Cn(b,{description:"Remove from current selection",children:(A,T)=>{fn(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=F(b,2);Cn(w,{description:"Add or remove from current selection",children:(A,T)=>{fn(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),S(h,m)},$$slots:{default:!0}});var d=F(u,2);gs(d,{title:"Change Tool",children:(h,v)=>{var m=aW(),E=te(m);Cn(E,{description:"Cycle Tool",children:(W,M)=>{fn(W,{shortcut:"Space"})},$$slots:{default:!0}});var I=F(E,2);Cn(I,{description:"Change to Digit Tool",children:(W,M)=>{fn(W,{shortcut:"Z"})},$$slots:{default:!0}});var b=F(I,2);Cn(b,{description:"Change to Corner Pencilmark Tool",children:(W,M)=>{fn(W,{shortcut:"X"})},$$slots:{default:!0}});var w=F(b,2);Cn(w,{description:"Change to Center Pencilmark Tool",children:(W,M)=>{fn(W,{shortcut:"C"})},$$slots:{default:!0}});var A=F(w,2);Cn(A,{description:"Change to Highlights Tool",children:(W,M)=>{fn(W,{shortcut:"V"})},$$slots:{default:!0}});var T=F(A,2);Cn(T,{description:"Quickshift To Corner Pencilmark Tool",children:(W,M)=>{fn(W,{shortcut:"Shift"})},$$slots:{default:!0}});var k=F(T,2);Cn(k,{description:"Quickshift To Center Pencilmark Tool",children:(W,M)=>{fn(W,{shortcut:"Ctrl"})},$$slots:{default:!0}});var G=F(k,2);Cn(G,{description:"Quickshift To Highlights Tool",children:(W,M)=>{var $=sW(),J=te($);fn(J,{shortcut:"Shift + Ctrl"});var oe=F(J,2);fn(oe,{shortcut:"Alt"}),S(W,$)},$$slots:{default:!0}}),S(h,m)},$$slots:{default:!0}});var g=F(d,2);gs(g,{title:"Undo/Redo",children:(h,v)=>{var m=lW(),E=te(m);Cn(E,{description:"Undo",children:(b,w)=>{fn(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=F(E,2);Cn(I,{description:"Redo",children:(b,w)=>{fn(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),S(h,m)},$$slots:{default:!0}}),z(o),S(r,o)},$$slots:{default:!0},$$legacy:!0})}var dW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function _W(t){var e=dW();S(t,e)}var fW=ue("<!> <!>",1);function gW(t){let e=L(!1);function n(){O(e,!0)}var r=fW(),i=te(r);Zs(i,{title:"Info",clickCb:n,children:(a,l)=>{_W(a)},$$slots:{default:!0}});var o=F(i,2);uW(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var hW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function vW(t){var e=hW();S(t,e)}var pW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function mW(t){var e=pW();S(t,e)}function EW(t){let e=L(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),O(e,!_(e))}Zs(t,{title:"Fullscreen",clickCb:o,children:(a,l)=>{var u=me(),d=te(u);{var g=v=>{mW(v)},h=v=>{vW(v)};Q(d,v=>{_(e)?v(g):v(h,!1)})}S(a,u)},$$slots:{default:!0}})}function sm(t,e){se(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);fe();var o=me(),a=te(o);{var l=u=>{var d=me(),g=te(d);md(g,()=>r()[n().type],(h,v)=>{v(h,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=me(),b=te(I);{var w=T=>{ml(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=T=>{var k=iy();ee(()=>rt(k,n().raw)),S(T,k)};Q(b,T=>{"tokens"in n()&&n().tokens?T(w):T(A,!1)})}S(m,I)},$$slots:{default:!0}})}),S(u,d)};Q(a,u=>{r()[n().type]&&u(l)})}S(t,o),ae()}function ml(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var o=me(),a=te(o);{var l=u=>{var d=me(),g=te(d);qe(g,1,n,pt,(h,v)=>{sm(h,{get token(){return _(v)},get renderers(){return r()},get options(){return i()}})}),S(u,d)};Q(a,u=>{n()&&u(l)})}S(t,o)}function am(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function lm(t){return t.startsWith("/")||t.startsWith("#")}function CW(t,e){return e.slug(t).replace(/--+/g,"-")}function bW(t,e){se(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let o=L();D(()=>(X(n()),X(r())),()=>{O(o,CW(n().text,r().slugger))}),Ce(),fe();var a=me(),l=te(a);return sv(l,()=>`h${n().depth}`,!1,(u,d)=>{let g;ee(()=>g=iv(u,g,{id:_(o)},void 0,u.namespaceURI===vd,u.nodeName.includes("-")));var h=me(),v=te(h);wt(v,e,"default",{}),S(d,h)}),S(t,a),ot(e,"renderers",i),ae({renderers:i})}var IW=ue("<blockquote><!></blockquote>");function wW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=IW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}function yW(t,e){se(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),o=L();D(()=>X(n()),()=>{O(o,n().ordered?"ol":"ul")}),Ce(),fe();var a=me(),l=te(a);sv(l,()=>_(o),!1,(u,d)=>{let g;ee(()=>g=iv(u,g,{start:n().start||1},void 0,u.namespaceURI===vd,u.nodeName.includes("-")));var h=me(),v=te(h);qe(v,1,()=>n().items,pt,(m,E)=>{var I=ft(()=>({..._(E)}));sm(m,{get token(){return _(I)},get options(){return r()},get renderers(){return i()}})}),S(d,h)}),S(t,a),ae()}var OW=ue("<li><!></li>");function AW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=OW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var xW=ue("<br>");function LW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=xW();return S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var SW=ue("<pre><code> </code></pre>");function NW(t,e){se(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=SW(),a=j(o),l=j(a,!0);return z(a),z(o),ee(()=>{av(a,`lang-${n().lang}`),rt(l,n().text)}),S(t,o),ot(e,"options",r),ot(e,"renderers",i),ae({options:r,renderers:i})}var DW=ue("<code> </code>");function RW(t,e){se(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=DW(),a=j(o,!0);return ee(()=>rt(a,n().raw.slice(1,n().raw.length-1))),z(o),S(t,o),ot(e,"options",r),ot(e,"renderers",i),ae({options:r,renderers:i})}var TW=ue('<th scope="col"><!></th>'),kW=ue("<td><!></td>"),MW=ue("<tr></tr>"),UW=ue("<table><thead><tr></tr></thead><tbody></tbody></table>");function GW(t,e){se(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);fe();var o=UW(),a=j(o),l=j(a);qe(l,5,()=>n().header,pt,(d,g)=>{var h=TW(),v=j(h);ml(v,{get tokens(){return _(g).tokens},get options(){return r()},get renderers(){return i()}}),z(h),S(d,h)}),z(l),z(a);var u=F(a);qe(u,5,()=>n().rows,pt,(d,g)=>{var h=MW();qe(h,5,()=>_(g),pt,(v,m)=>{var E=kW(),I=j(E);ml(I,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),z(E),S(v,E)}),z(h),S(d,h)}),z(u),z(o),S(t,o),ae()}function $W(t,e){se(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=me(),a=te(o);return yy(a,()=>n().text),S(t,o),ot(e,"options",r),ot(e,"renderers",i),ae({options:r,renderers:i})}var FW=ue("<p><!></p>");function PW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=FW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var zW=ue("<a><!></a>");function HW(t,e){se(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;fe();var o=zW();ee(()=>x(o,"href",lm(n().href)?am(r().baseUrl,n().href):n().href));var a=j(o);return wt(a,e,"default",{}),z(o),ee(()=>x(o,"title",n().title)),S(t,o),ot(e,"renderers",i),ae({renderers:i})}function WW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=me(),a=te(o);return wt(a,e,"default",{}),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var BW=ue("<dfn><!></dfn>");function YW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=BW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var jW=ue("<del><!></del>");function KW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=jW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var VW=ue("<em><!></em>");function XW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=VW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var qW=ue("<hr>");function ZW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=qW();return S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var QW=ue("<strong><!></strong>");function JW(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=QW(),a=j(o);return wt(a,e,"default",{}),z(o),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}var e9=ue('<img class="markdown-image svelte-z38cge">');function t9(t,e){se(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;fe();var o=e9();return ee(()=>x(o,"src",lm(n().href)?am(r().baseUrl,n().href):n().href)),ee(()=>{x(o,"title",n().title),x(o,"alt",n().text)}),S(t,o),ot(e,"renderers",i),ae({renderers:i})}function Yh(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=me(),a=te(o);return wt(a,e,"default",{}),S(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),ae({token:n,options:r,renderers:i})}const n9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,r9=Object.hasOwnProperty;class i9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=o9(e,n===!0);const o=i;for(;r9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function o9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(n9,"").replace(/ /g,"-"))}function m_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Hi=m_();function cm(t){Hi=t}const um=/[&<>"']/,s9=new RegExp(um.source,"g"),dm=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,a9=new RegExp(dm.source,"g"),l9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jh=t=>l9[t];function Gn(t,e){if(e){if(um.test(t))return t.replace(s9,jh)}else if(dm.test(t))return t.replace(a9,jh);return t}const c9=/(^|[^\[])\^/g;function Dt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(c9,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Kh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ys={exec:()=>null};function Vh(t,e){const n=t.replace(/\|/g,(o,a,l)=>{let u=!1,d=a;for(;--d>=0&&l[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function hs(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function u9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Xh(t,e,n,r){const i=e.href,o=e.title?Gn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:o,text:Gn(a)}}function d9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class El{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Hi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:hs(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=d9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=hs(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:hs(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=hs(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let l=!1;const u=[];let d;for(d=0;d<r.length;d++)if(/^ {0,3}>/.test(r[d]))u.push(r[d]),l=!0;else if(!l)u.push(r[d]);else break;r=r.slice(d);const g=u.join(`
`),h=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,o=o?`${o}
${h}`:h;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,a,!0),this.lexer.state.top=v,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,o=o.substring(0,o.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,o=o.substring(0,o.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let u=!1,d="",g="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;d=n[0],e=e.substring(d.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!h.trim(),E=0;if(this.options.pedantic?(E=2,g=h.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=h.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(d+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const W=e.split(`
`,1)[0];let M;if(v=W,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),M=v):M=v.replace(/\t/g,"    "),T.test(v)||k.test(v)||G.test(v)||w.test(v)||A.test(v))break;if(M.search(/[^ ]/)>=E||!v.trim())g+=`
`+M.slice(E);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(h)||k.test(h)||A.test(h))break;g+=`
`+v}!m&&!v.trim()&&(m=!0),d+=W+`
`,e=e.substring(W.length+1),h=M.slice(E)}}o.loose||(l?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(d)&&(l=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:d,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),o.raw+=d}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const d=o.items[u].tokens.filter(h=>h.type==="space"),g=d.length>0&&d.some(h=>/\n.*\n/.test(h.raw));o.loose=g}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Vh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?a.align.push("right"):/^ *:-+: *$/.test(l)?a.align.push("center"):/^ *:-+ *$/.test(l)?a.align.push("left"):a.align.push(null);for(let l=0;l<r.length;l++)a.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:a.align[l]});for(const l of o)a.rows.push(Vh(l,a.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[d]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=hs(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=u9(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Xh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Xh(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let l,u,d=a,g=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+a);(i=h.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(u=[...l].length,i[3]||i[4]){d+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){g+=u;continue}if(d-=u,d>0)continue;u=Math.min(u,u+d+g);const v=[...i[0]][0].length,m=e.slice(0,a+i.index+v+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Gn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Gn(n[1]),i="mailto:"+r):(r=Gn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Gn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Gn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Gn(n[0]),{type:"text",raw:n[0],text:r}}}}const _9=/^(?:[ \t]*(?:\n|$))+/,f9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,g9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,h9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_m=/(?:[*+-]|\d{1,9}[.)])/,fm=Dt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,_m).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),E_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,v9=/^[^\n]+/,C_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,p9=Dt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",C_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),m9=Dt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_m).getRegex(),ec="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",b_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,E9=Dt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",b_).replace("tag",ec).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gm=Dt(E_).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex(),C9=Dt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gm).getRegex(),I_={blockquote:C9,code:f9,def:p9,fences:g9,heading:h9,hr:Qs,html:E9,lheading:fm,list:m9,newline:_9,paragraph:gm,table:ys,text:v9},qh=Dt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex(),b9={...I_,table:qh,paragraph:Dt(E_).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",qh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex()},I9={...I_,html:Dt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",b_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ys,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Dt(E_).replace("hr",Qs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",fm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,w9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,vm=/^( {2,}|\\)\n(?!\s*$)/,y9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Js="\\p{P}\\p{S}",O9=Dt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Js).getRegex(),A9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,x9=Dt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Js).getRegex(),L9=Dt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Js).getRegex(),S9=Dt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Js).getRegex(),N9=Dt(/\\([punct])/,"gu").replace(/punct/g,Js).getRegex(),D9=Dt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),R9=Dt(b_).replace("(?:-->|$)","-->").getRegex(),T9=Dt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",R9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,k9=Dt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pm=Dt(/^!?\[(label)\]\[(ref)\]/).replace("label",Cl).replace("ref",C_).getRegex(),mm=Dt(/^!?\[(ref)\](?:\[\])?/).replace("ref",C_).getRegex(),M9=Dt("reflink|nolink(?!\\()","g").replace("reflink",pm).replace("nolink",mm).getRegex(),w_={_backpedal:ys,anyPunctuation:N9,autolink:D9,blockSkip:A9,br:vm,code:w9,del:ys,emStrongLDelim:x9,emStrongRDelimAst:L9,emStrongRDelimUnd:S9,escape:hm,link:k9,nolink:mm,punctuation:O9,reflink:pm,reflinkSearch:M9,tag:T9,text:y9,url:ys},U9={...w_,link:Dt(/^!?\[(label)\]\((.*?)\)/).replace("label",Cl).getRegex(),reflink:Dt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cl).getRegex()},gd={...w_,escape:Dt(hm).replace("])","~|])").getRegex(),url:Dt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},G9={...gd,br:Dt(vm).replace("{2,}","*").getRegex(),text:Dt(gd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xa={normal:I_,gfm:b9,pedantic:I9},vs={normal:w_,gfm:gd,breaks:G9,pedantic:U9};class zn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hi,this.options.tokenizer=this.options.tokenizer||new El,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Xa.normal,inline:vs.normal};this.options.pedantic?(n.block=Xa.pedantic,n.inline=vs.pedantic):this.options.gfm&&(n.block=Xa.gfm,this.options.breaks?n.inline=vs.breaks:n.inline=vs.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xa,inline:vs}}static lex(e,n){return new zn(n).lex(e)}static lexInline(e,n){return new zn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(g=>{d=g.call({lexer:this},u),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(a=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,l,u,d;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,l.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(d=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,d)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},h),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(o=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(d=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class bl{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Hi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Gn(i)+'">'+(r?o:Gn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Gn(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let l=0;l<e.items.length;l++){const u=e.items[l];i+=this.listitem(u)}const o=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+o+a+`>
`+i+"</"+o+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let o=0;o<e.header.length;o++)r+=this.tablecell(e.header[o]);n+=this.tablerow({text:r});let i="";for(let o=0;o<e.rows.length;o++){const a=e.rows[o];r="";for(let l=0;l<a.length;l++)r+=this.tablecell(a[l]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Kh(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Kh(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class y_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class ir{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Hi,this.options.renderer=this.options.renderer||new bl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new y_}static parse(e,n){return new ir(n).parse(e)}static parseInline(e,n){return new ir(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let l=a,u=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],u+=`
`+this.renderer.text(l);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=l||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}}class Os{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Hi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?zn.lex:zn.lexInline}provideParser(){return this.block?ir.parse:ir.parseInline}}ve(Os,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class $9{constructor(...e){ve(this,"defaults",m_());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",ir);ve(this,"Renderer",bl);ve(this,"TextRenderer",y_);ve(this,"Lexer",zn);ve(this,"Tokenizer",El);ve(this,"Hooks",Os);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const l=a;for(const u of l.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of l.rows)for(const d of u)r=r.concat(this.walkTokens(d.tokens,n));break}case"list":{const l=a;r=r.concat(this.walkTokens(l.items,n));break}default:{const l=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(u=>{const d=l[u].flat(1/0);r=r.concat(this.walkTokens(d,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...l){let u=o.renderer.apply(this,l);return u===!1&&(u=a.apply(this,l)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new bl(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const l=a,u=r.renderer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new El(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const l=a,u=r.tokenizer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Os;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const l=a,u=r.hooks[l],d=o[l];Os.passThroughHooks.has(a)?o[l]=g=>{if(this.defaults.async)return Promise.resolve(u.call(o,g)).then(v=>d.call(o,v));const h=u.call(o,g);return d.call(o,h)}:o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(l){let u=[];return u.push(a.call(this,l)),o&&(u=u.concat(o.call(this,l))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return zn.lex(e,n??this.defaults)}parser(e,n){return ir.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},l=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?zn.lex:zn.lexInline,d=a.hooks?a.hooks.provideParser():e?ir.parse:ir.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(g=>u(g,a)).then(g=>a.hooks?a.hooks.processAllTokens(g):g).then(g=>a.walkTokens?Promise.all(this.walkTokens(g,a.walkTokens)).then(()=>g):g).then(g=>d(g,a)).then(g=>a.hooks?a.hooks.postprocess(g):g).catch(l);try{a.hooks&&(r=a.hooks.preprocess(r));let g=u(r,a);a.hooks&&(g=a.hooks.processAllTokens(g)),a.walkTokens&&this.walkTokens(g,a.walkTokens);let h=d(g,a);return a.hooks&&(h=a.hooks.postprocess(h)),h}catch(g){return l(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Gn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const $i=new $9;function Nt(t,e){return $i.parse(t,e)}Nt.options=Nt.setOptions=function(t){return $i.setOptions(t),Nt.defaults=$i.defaults,cm(Nt.defaults),Nt};Nt.getDefaults=m_;Nt.defaults=Hi;Nt.use=function(...t){return $i.use(...t),Nt.defaults=$i.defaults,cm(Nt.defaults),Nt};Nt.walkTokens=function(t,e){return $i.walkTokens(t,e)};Nt.parseInline=$i.parseInline;Nt.Parser=ir;Nt.parser=ir.parse;Nt.Renderer=bl;Nt.TextRenderer=y_;Nt.Lexer=zn;Nt.lexer=zn.lex;Nt.Tokenizer=El;Nt.Hooks=Os;Nt.parse=Nt;Nt.options;Nt.setOptions;Nt.use;Nt.walkTokens;Nt.parseInline;ir.parse;zn.lex;function F9(t){return new zn().lex(t)}const P9=()=>({heading:bW,blockquote:wW,list:yW,list_item:AW,br:LW,code:NW,codespan:RW,table:GW,html:$W,paragraph:PW,link:HW,text:WW,def:YW,del:KW,em:XW,hr:ZW,strong:JW,image:t9,space:Yh,escape:Yh}),z9=()=>({baseUrl:"/",slugger:new i9});function H9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},ov(()=>{console.warn=t})}function Em(t,e){se(e,!1),H9();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),o=L(),a=L(),l=L();D(()=>(X(n()),X(i()),X(r())),()=>{O(o,F9(n())),O(a,{...P9(),...i()}),O(l,{...z9(),...r()})}),Ce(),fe(),ml(t,{get tokens(){return _(o)},get renderers(){return _(a)},get options(){return _(l)}}),ae()}var W9=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),B9=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),Y9=ue('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function j9(t,e){se(e,!1);const n=Ye(),r=()=>ge(Zr,"$puzzleMetaStore",n),i=L();let o=U(e,"showModal",12,!1);function a(u){return u?dl(u," & ",", "):"Anonymous"}function l(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{O(i,r())}),Ce(),fe(),Qr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,d)=>{var g=Y9(),h=j(g),v=j(h,!0);z(h);var m=F(h,2),E=j(m);ee(()=>rt(E,`by ${a(_(i).authors)??""}`)),z(m);var I=F(m,2),b=j(I),w=ft(()=>l(_(i).ruleset));Em(b,{get source(){return _(w)}}),z(I);var A=F(I,2);{var T=W=>{var M=W9(),$=F(te(M),2);ee(()=>x($,"href",_(i).ctcUrl)),S(W,M)};Q(A,W=>{var M,$;($=(M=_(i))==null?void 0:M.ctcUrl)!=null&&$.length&&W(T)})}var k=F(A,2);{var G=W=>{var M=B9(),$=F(te(M),2);ee(()=>x($,"href",_(i).ctcYoutubeUrl)),S(W,M)};Q(k,W=>{var M,$;($=(M=_(i))==null?void 0:M.ctcYoutubeUrl)!=null&&$.length&&W(G)})}z(g),ee(()=>{var W;return rt(v,((W=_(i))==null?void 0:W.title)||"Puzzle")}),S(u,g)},$$slots:{default:!0},$$legacy:!0}),ae()}var K9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function V9(t){var e=K9();S(t,e)}var X9=ue("<!> <!>",1);function q9(t){let e=L(!1);function n(){O(e,!0)}var r=X9(),i=te(r);Zs(i,{title:"Rules",clickCb:n,children:(a,l)=>{V9(a)},$$slots:{default:!0}});var o=F(i,2);j9(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var Z9=ue("<!> <!>",1);function Q9(t){let e=L(!1);function n(){O(e,!0)}var r=Z9(),i=te(r);Zs(i,{title:"Settings",clickCb:n,children:(a,l)=>{wp(a)},$$slots:{default:!0}});var o=F(i,2);yp(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),S(t,r)}var J9=ue('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!> <!></div>');function e7(t){var e=J9(),n=j(e);Q9(n);var r=F(n,2);q9(r);var i=F(r,2);EW(i);var o=F(i,2);gW(o);var a=F(o,2);eW(a),z(e),S(t,e)}var t7=ue('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function n7(t,e){se(e,!1);const n=Ye(),r=()=>ge(vo,"$svgRefStore",n),i=()=>ge(Zr,"$puzzleMetaStore",n),o=()=>ge(en,"$toolStore",n),a=L(),l=L();function u(){r()&&r().focus()}function d(ie){return ie?dl(ie," & ",", "):"Anonymous"}function g(ie){return ie&&ie.length?ie:"Normal sudoku rules apply."}D(()=>i(),()=>{O(a,i().title??"Sudoku")}),D(()=>i(),()=>{O(l,d(i().authors))}),Ce(),fe();var h=t7(),v=j(h),m=j(v),E=j(m),I=j(E,!0);z(E);var b=F(E,2),w=j(b);z(b),z(m);var A=F(m,2),T=j(A),k=ft(()=>g(i().ruleset));Em(T,{get source(){return _(k)}}),z(A),z(v);var G=F(v,2),W=j(G);e7(W);var M=F(W,2),$=j(M);SH($,{});var J=F($,2);kH(J,{get selectedTool(){return o()}});var oe=F(J,2);jH(oe,{get selectedTool(){return nv(),o()},set selectedTool(ie){go(en,ie)},$$legacy:!0}),z(M),z(G),z(h),ee(()=>{rt(I,_(a)),rt(w,`by ${_(l)??""}`)}),Ne("click",G,Fn(()=>{u()})),S(t,h),ae()}var r7=ue('<div class="left-panel svelte-fwyvr2"><!></div>'),i7=ue('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function b7(t,e){se(e,!1);const n=Ye(),r=()=>ge(kl,"$gameModeStore",n),i=L();ov(async()=>{const v=window.location.origin,m=ih===""?v:`${v}/${ih}`;try{await B8({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const I="Failed to initialize MiniZinc: "+E.message;console.log(I)}}),D(()=>r(),()=>{O(i,r())}),Ce(),fe();var o=i7(),a=j(o);{var l=v=>{var m=r7(),E=j(m);_P(E),z(m),S(v,m)};Q(a,v=>{_(i)===Co.SETTING&&v(l)})}var u=F(a,2),d=j(u);EH(d,{}),z(u);var g=F(u,2),h=j(g);n7(h,{}),z(g),z(o),S(t,o),ae()}export{b7 as G,i_ as a,C7 as b,E7 as d,vR as p,hl as r,GR as s};
