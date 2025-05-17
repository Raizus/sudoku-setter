var ny=Object.defineProperty;var ry=(t,e,n)=>e in t?ny(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>ry(t,typeof e!="symbol"?e+"":e,n);import{c as Wu,o as iy,p as oy,q as vd,s as Ne,a as L,t as ue,d as Ee,u as ne,v as sy,m as ay}from"./disclose-version.X1mjziy_.js";import{i as fe}from"./legacy.CL9GlO2d.js";import{l as nv,h as ln,k as xs,y as rv,v as Is,R as ly,V as cy,U as uy,g as Bu,i as iv,K as ov,a0 as dy,j as _y,u as sh,B as fy,aK as pd,z as gy,x as hy,a2 as md,as as sv,A as ah,aL as vy,a3 as py,a8 as my,m as Ey,c as Y,r as H,s as F,t as J,p as oe,aM as D,aN as be,a as se,Z as _,aw as X,_ as O,$ as S,f as ee,aD as _i,aO as Yu,al as ft,aP as wu,ak as lh}from"./utils.FBOUsyea.js";import{i as Q,s as Ye,a as ge,b as go,m as av}from"./store.CwWqV19U.js";import{s as Ln,u as sr,r as Cy,t as by}from"./global.y-JjPrBU.js";import{e as qe,i as pt}from"./each.CQzofs9j.js";import{i as Iy,p as G,s as wy}from"./props.CDZpVoAy.js";import{w as Rt,g as De,d as Bn}from"./index.XPG9yTa8.js";import{b as ki,c as Ed}from"./this.CumUjykt.js";import{s as it}from"./render.C06zU-KV.js";import{r as cn,s as x,a as ju,b as yy,c as Oy,d as lv}from"./attributes.nocA7ieE.js";import{a as Ay,o as cv}from"./index-client.Dk2x2RJG.js";import{b as ch}from"./paths.0sysC80y.js";function xy(t,e,n,r,i){var o=t,s="",l;nv(()=>{if(s===(s=e()??"")){ln&&xs();return}l!==void 0&&(ov(l),l=void 0),s!==""&&(l=rv(()=>{if(ln){Is.data;for(var u=xs(),d=u;u!==null&&(u.nodeType!==8||u.data!=="");)d=u,u=ly(u);if(u===null)throw cy(),uy;Wu(Is,d),o=Bu(u);return}var g=s+"",h=iy(g);Wu(iv(h),h.lastChild),o.before(h)}))})}function yt(t,e,n,r,i){var l;ln&&xs();var o=(l=e.$$slots)==null?void 0:l[n],s=!1;o===!0&&(o=e[n==="default"?"children":n],s=!0),o===void 0||o(t,s?()=>r:r)}function uv(t,e,n,r,i,o){let s=ln;ln&&xs();var l,u,d=null;ln&&Is.nodeType===1&&(d=Is,xs());var g=ln?Is:t,h;nv(()=>{const v=e()||null;var m=v==="svg"?pd:null;v!==l&&(h&&(v===null?gy(h,()=>{h=null,u=null}):v===u?hy(h):ov(h)),v&&v!==u&&(h=rv(()=>{if(d=ln?d:m?document.createElementNS(m,v):document.createElement(v),Wu(d,d),r){ln&&oy(v)&&d.append(document.createComment(""));var E=ln?iv(d):d.appendChild(_y());ln&&(E===null?sh(!1):Bu(E)),r(d,E)}fy.nodes_end=d,g.before(d)})),l=v,l&&(u=l))},dy),s&&(sh(!0),Bu(g))}function Ls(t,e,n){var r=t.__className,i=_v(e);ln&&t.getAttribute("class")===i?t.__className=i:(r!==i||ln&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function dv(t,e,n){var r=t.__className,i=_v(e);ln&&t.className===i?t.__className=i:(r!==i||ln&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function _v(t,e){return(t??"")+""}function St(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function ar(t,e,n=e){var r=vy();vd(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=Ou(t)?Au(o):o,n(o),r&&o!==(o=e())){var s=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(l,t.value.length))}}),(ln&&t.defaultValue!==t.value||py(e)==null&&t.value)&&n(Ou(t)?Au(t.value):t.value),md(()=>{var i=e();Ou(t)&&i===Au(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const yu=new Set;function Cd(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",s=t;let l=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),vd(n,"change",()=>{var d=n.__value;o&&(d=uh(s,d,n.checked)),i(d)},()=>i(o?[]:null)),md(()=>{var d=r();if(ln&&n.defaultChecked!==n.checked){l=!0;return}o?(d=d||[],n.checked=d.includes(n.__value)):n.checked=Iy(n.__value,d)}),sv(()=>{var d=s.indexOf(n);d!==-1&&s.splice(d,1)}),yu.has(s)||(yu.add(s),ah(()=>{s.sort((d,g)=>d.compareDocumentPosition(g)===4?-1:1),yu.delete(s)})),ah(()=>{if(l){var d;if(o)d=uh(s,d,n.checked);else{var g=s.find(h=>h.checked);d=g==null?void 0:g.__value}i(d)}})}function uh(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Ou(t){var e=t.type;return e==="number"||e==="range"}function Au(t){return t===""?null:+t}function Sy(t,e,n=e){vd(t,"change",()=>{n(t.files)}),md(()=>{t.files=e()})}function ot(t,e,n){var r=my(t,e);r&&r.set&&(t[e]=n,sv(()=>{t[e]=null}))}function Ly(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Fn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function io(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Ny(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=Ey(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var bo=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(bo||{}),bd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(bd||{}),fv=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t))(fv||{}),Id=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.PARITY_MIRROR_POSITIVE_DIAGONAL="Parity Mirror Positive Diagonal",t.PARITY_MIRROR_NEGATIVE_DIAGONAL="Parity Mirror Negative Diagonal",t))(Id||{}),gv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_CAGE_TOTALS_ARE_DIFFERENT="All Cage Totals Are Different",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_SQUARES_GIVEN="All Squares Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(gv||{}),hv=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(hv||{}),vv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SHADED_BOUNDARIES="Shaded Boundaries",t.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN="Shaded Boundaries Adjacent Cell Sum Is Even",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t.BUILD_YOUR_OWN_KILLER_CAGES="Build Your Own Killer Cages",t))(vv||{}),pv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(pv||{}),mv=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(mv||{}),Ev=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(Ev||{}),Cv=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(Cv||{}),bv=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION="Ying Yang Identical Digits Diagonally Belong To Same The Region",t))(bv||{}),Iv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(Iv||{}),wv=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(wv||{}),yv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.CAVE_WALL_SUGURU="Cave Wall Suguru",t.CAVE_CELLS_FILLOMINO="Cave Cells Fillomino",t))(yv||{}),Ov=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Ov||{}),Av=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Av||{}),Il=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.YIN_YANG_LABELED_SHADE_CELL="Yin Yang Labeled Shade Cell",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE="Cave Shaded Region Size Unshaded Seen Orthogonally Clue",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.BYOK_CAGE_SIZE="BYOK Cage Size",t.BYOK_NOT_CAGE_CELL="BYOK Not Cage Cell",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Il||{}),wd=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t.INTERNAL_LOOP_SKYSCRAPERS="Internal Loop Skyscrapers",t))(wd||{}),yd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Cells Not In The Same Region Arrows",t.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Seen Cells In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS="Shaded Boundaries Combined Count Arrows",t))(yd||{}),Od=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.COMBINED_EDGE_CONSTRAINT="Combined Edge Constraint",t))(Od||{}),Ad=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Ad||{}),xd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(xd||{}),Sd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(Sd||{}),Ld=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Ld||{}),Nd=(t=>(t.CLONE_REGION="Clone Region",t))(Nd||{}),Dd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.CHAOS_CONSTRUCTION_X_INDEX_REGION="Chaos Construction X-Index Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(Dd||{}),Rd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Rd||{}),Td=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Td||{}),kd=(t=>(t.MAZE_WALL="Maze Wall",t))(kd||{}),Md=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Md||{}),xv=(t=>(t.VARIABLE_CONSTRAINT="Variable Constraint",t))(xv||{}),Ud=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Ud||{}),Sv=(t=>(t.FOG_LIGHTS="Fog Lights",t.CUSTOM_FOG_CLEARING="Custom Fog Clearing",t.FOG_CLEARING_ITSELF="Fog Clearing Itself",t.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS="Fog Clearing Orthogonal Neighbours",t.FOG_CLEARING_DIAGONAL_NEIGHBOURS="Fog Clearing Diagonal Neighbours",t.FOG_CLEARING_CONTAINING_ROW="Fog Clearing Containing Row",t.FOG_CLEARING_CONTAINING_COLUMN="Fog Clearing Containing Column",t.FOG_CLEARING_KNIGHTS_MOVE="Fog Clearing Knights Move",t))(Sv||{}),Lv=(t=>(t.PEN_TOOL="Pen Tool",t))(Lv||{});const Dy={...vv,...yv,...Ov,...wv,...Av,...Iv,...bv,...Cv,...Ev,...mv,...pv},Nv={...gv,...Id,...fv,...Dy,...hv},Dv={...Il,...wd,...yd,...Od,...Ad,...xd,...Sd,...Ld,...Nd,...Dd,...Rd,...Td,...kd,...Md,...xv,...Sv},f={...bd,...Nv,...Dv,...Ud,...Lv};var W=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.OTHER_CONSTRAINTS="Other Constraints",t.FOG_TOOL="Fog Tool",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(W||{});function Ry(t){return Object.values(Id).includes(t)}function Ty(t){return Object.values(Nv).includes(t)}function Rv(t){return Object.values(Dv).includes(t)}function ky(t){return Object.values(Ud).includes(t)}function My(t){return Rv(t)||ky(t)||Ty(t)}function wl(t){return Object.values(Il).includes(t)||t===f.COSMETIC_CELL_CENTER_SHAPE||t===f.FOG_LIGHTS}function $i(t){return Object.values(wd).includes(t)||t===f.COSMETIC_CELL_ARROW}function Io(t){return Object.values(yd).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function Gd(t){return wl(t)||$i(t)||Io(t)}function wo(t){return Object.values(Od).includes(t)||t===f.COSMETIC_EDGE}function Ns(t){return Object.values(Ad).includes(t)||t===f.COSMETIC_CORNER}function yo(t){return Object.values(xd).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Oo(t){return Object.values(Sd).includes(t)||t===f.COSMETIC_ARROW}function Ao(t){return Object.values(Ld).includes(t)||t===f.COSMETIC_CAGE}function Ds(t){return Object.values(Td).includes(t)}function Tv(t){return Object.values(kd).includes(t)}function Rs(t){return Object.values(Nd).includes(t)}function Kr(t){const e=Object.values(Dd),n=Object.values(Rd);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function $d(t){return Object.values(Md).includes(t)}function Fd(t){return Object.values(bd).includes(t)}function Uy(t){return Kr(t)||Gd(t)||yo(t)||Oo(t)||Ao(t)||Rs(t)}const Gy=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint","Valued Global Constraint","Other Constraints"],$y=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...Gy,"Fog Tool","Cosmetic Tool"];function Fy(t){for(const e of Object.values(f))if(e===t)return e}function Py(t,e){return Object.values(e).includes(t)}var B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function En(t,e,n){n!==void 0&&(t[e]=n)}function zy(t){var e,n,r,i,o,s,l,u,d,g,h,v,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(s=t.angle)!=null&&s.editable||(l=t.fill)!=null&&l.editable||(u=t.stroke)!=null&&u.editable||(d=t.strokeWidth)!=null&&d.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Ku(t){var n,r,i,o,s,l,u,d,g,h,v,m,E,I,b,w,A,T,k,U,j,M,$;const e={type:t.type};return En(e,"n",(n=t.n)==null?void 0:n.value),En(e,"r",(r=t.r)==null?void 0:r.value),En(e,"height",(i=t.height)==null?void 0:i.value),En(e,"width",(o=t.width)==null?void 0:o.value),En(e,"inset",(s=t.inset)==null?void 0:s.value),En(e,"angle",(l=t.angle)==null?void 0:l.value),En(e,"fill",(u=t.fill)==null?void 0:u.value),En(e,"stroke",(d=t.stroke)==null?void 0:d.value),En(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),En(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),En(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),En(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),En(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),En(e,"opacity",(I=t.opacity)==null?void 0:I.value),En(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:A.value,shortenTail:(k=(T=t.linePathOptions)==null?void 0:T.shortenTail)==null?void 0:k.value,bezierRounding:(j=(U=t.linePathOptions)==null?void 0:U.bezierRounding)==null?void 0:j.value,closeLoops:($=(M=t.linePathOptions)==null?void 0:M.closeLoops)==null?void 0:$.value}),e}function Hy(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const dh={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},_h={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},fh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},sl={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Vu={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ts={type:"Line",strokeWidth:.125,stroke:"gray"},Pd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},kv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Wy={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},gh={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},hh={strokeWidth:.02,stroke:"black"},yl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,cr=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,xo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,By=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,tn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,So=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,zd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ge=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Yy=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,jy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Ky=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Lo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Vy=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Xy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,qy=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function Zy(t){return $i(t)?Yy():Io(t)?jy():t===f.XV?Xy():wo(t)?Ky():Ao(t)?yl():Oo(t)?xo():Kr(t)?By():yo(t)?Ge():Rs(t)?qy():""}var he=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.VALUE_TOOL=13]="VALUE_TOOL",t[t.PEN=14]="PEN",t))(he||{}),Lt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Lt||{}),Un=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Un||{}),ke=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(ke||{}),Sn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(Sn||{}),Hd=(t=>(t.CREATE="Create",t))(Hd||{});function Qy(t){if(wl(t)||$i(t)||Io(t)||yo(t)||wo(t)||Ns(t)||Ao(t)||Kr(t)||Ds(t))return ke;if(Oo(t))return Un;if(Rs(t))return Sn;if($d(t)||t===f.VARIABLE_CONSTRAINT)return Hd}function Jy(t){if(wl(t)||$i(t)||Io(t)||yo(t)||wo(t)||Ns(t)||Ao(t)||Kr(t)||Ds(t)||Oo(t)||Rs(t))return"Dynamic"}const ks=[W.ARROW_CONSTRAINT,W.LOCAL_CONSTRAINT,W.ARROW_TOOL,W.LOCAL_ELEMENT],eO={inputOptions:{type:he.ARROW},toolId:f.ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:xo(),tags:[],categories:ks}},tO={inputOptions:{type:he.ARROW},toolId:f.AVERAGE_ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:xo(),tags:[],categories:ks}},nO={inputOptions:{type:he.ARROW,allowSelfIntersection:!0},toolId:f.BULBOUS_ARROW,shape:{type:B.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:xo(),tags:[],categories:ks}};he.ARROW,f.SQUARE_ROOT_ARROW,B.LINE,xo();const rO={inputOptions:{type:he.ARROW},toolId:f.CHAOS_CONSTRUCTION_ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:xo(),tags:[],categories:ks}};function iO(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function oO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function sO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function aO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function lO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const cO={Delete:null,Backspace:null};function uO(t,e=10){if(t in cO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function dO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function _O(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function fO(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function gO(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function Mv(t){return t==="Backspace"}function No(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t)||Mv(t))}function hO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function vO(t){return hO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function pO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Vr(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),l=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,d=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${l.source}${d.source}$`,"i").test(t))}function Xr(t,e,n){if(t===void 0)return t;let r=t;return Mv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Wd=[W.CAGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.CAGE_TOOL,W.LOCAL_ELEMENT],ur=[W.CAGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.CAGE_TOOL,W.LOCAL_ELEMENT];function Uv(t,e=5){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Gv(t,e,n){return Xr(t,e,n)}const Yn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},Ol={type:he.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},dr={...Ol,valueUpdater:(t,e)=>Gv(t,e,Uv)},mO={inputOptions:dr,toolId:f.KILLER_CAGE,negative_constraints:[{toolId:f.ALL_CAGE_TOTALS_ARE_DIFFERENT,description:"All Killer Cage totals are different."}],shape:Yn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:cr(),tags:[],categories:ur}},EO={inputOptions:dr,toolId:f.UNIQUE_DIGITS_CAGE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:cr(),tags:[],categories:ur}},CO={inputOptions:dr,toolId:f.INVERTED_KILLER_CAGE,shape:Yn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:cr(),tags:[],categories:ur}},bO={inputOptions:dr,toolId:f.SUM_CAGE,shape:Yn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:cr(),tags:[],categories:ur}},IO={inputOptions:Ol,toolId:f.SUM_CAGE_LOOK_AND_SAY,shape:Yn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:yl(),tags:[],categories:Wd}},wO={inputOptions:Ol,toolId:f.PARITY_BALANCE_CAGE,shape:Yn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:yl(),tags:[],categories:Wd}},yO={inputOptions:dr,toolId:f.DIVISIBLE_KILLER_CAGE,shape:Yn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:cr(),tags:[],categories:ur}},OO={inputOptions:dr,toolId:f.SPOTLIGHT_CAGE,shape:Yn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:cr(),tags:[],categories:ur}},AO={inputOptions:Ol,toolId:f.PUTTERIA_CAGE,shape:Yn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:yl(),tags:[],categories:Wd}},xO={inputOptions:dr,toolId:f.MULTISET_CAGE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:cr(),tags:[],categories:ur}},SO={inputOptions:dr,toolId:f.VAULTED_CAGE,shape:Yn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:cr(),tags:[],categories:ur}},LO={inputOptions:dr,toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Yn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:cr(),tags:[],categories:ur}},NO={inputOptions:dr,toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Yn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:cr(),tags:[],categories:ur}},DO={inputOptions:dr,toolId:f.DOUBLERS_KILLER_CAGE,shape:Yn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:cr(),tags:[],categories:ur}},RO={inputOptions:dr,toolId:f.NEGATORS_KILLER_CAGE,shape:Yn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:cr(),tags:[],categories:ur}},TO={inputOptions:{type:he.SELECTION},toolId:f.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[W.CELL_INPUT_TOOL]}},kO={inputOptions:{type:he.SELECTION},toolId:f.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[W.CELL_INPUT_TOOL]}},MO={inputOptions:{type:he.SELECTION},toolId:f.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[W.CELL_INPUT_TOOL]}},UO={inputOptions:{type:he.SELECTION},toolId:f.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[W.CELL_INPUT_TOOL]}},GO={inputOptions:{type:he.SELECTION},toolId:f.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[W.CELL_INPUT_TOOL]}},$O={inputOptions:{type:he.SELECTION},toolId:f.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[W.CELL_INPUT_TOOL]}},FO={inputOptions:{type:he.SELECTION},toolId:f.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[W.CELL_INPUT_TOOL]}},PO={inputOptions:{type:he.PEN},toolId:f.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},zO={type:he.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST},Bd=[W.LOCAL_CONSTRAINT,W.CENTER_CORNER_EDGE_CONSTRAINT,W.LOCAL_ELEMENT];f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,B.CIRCLE,zd();const HO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST,valueUpdater:(t,e)=>Xr(t,e,()=>!0),defaultValue:""},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:zd(),tags:[],categories:Bd}},WO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Lt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Xr(t,e,()=>!0),defaultValue:""},toolId:f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:zd(),tags:[],categories:Bd}},BO={inputOptions:{type:he.CLONE},toolId:f.CLONE_REGION,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[W.CLONE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT]}},Al=[W.CORNER_CONSTRAINT,W.LOCAL_CONSTRAINT,W.CORNER_TOOL,W.LOCAL_ELEMENT],Yd=[W.CORNER_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.CORNER_TOOL,W.LOCAL_ELEMENT];function $v(t,e=3){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fv(t,e,n){return Xr(t,e,n)}function YO(t,e){function n(){return!0}return Xr(t,e,n)}const jd={type:he.CORNER,defaultValue:"",valueUpdater:(t,e)=>Fv(t,e,$v)},jO={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>YO(t,e),defaultValue:""},toolId:f.QUADRUPLE,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Vy(),categories:Yd}},KO={inputOptions:jd,toolId:f.CORNER_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Lo(),categories:Yd}},VO={inputOptions:{type:he.CORNER,defaultValue:""},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Lo(),categories:Al}},XO={inputOptions:jd,toolId:f.CORNER_EVEN_COUNT,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Lo(),categories:Al}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,B.CIRCLE,Lo();const qO={inputOptions:{type:he.CORNER,defaultValue:"X"},toolId:f.PRODUCT_SQUARE,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Lo(),categories:Al}},ZO={inputOptions:{type:he.CORNER,defaultValue:""},toolId:f.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Lo(),categories:Al}},xl=[W.EDGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.EDGE_TOOL,W.LOCAL_ELEMENT],_r=[W.EDGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.EDGE_TOOL,W.LOCAL_ELEMENT],Ms=.15,Pv=.02,Fi={type:B.CIRCLE,r:{editable:!0,value:Ms,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Pv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Kd={type:B.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function QO(t,e=1){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function zv(t,e=3){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function JO(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Vd(t,e,n){return Xr(t,e,n)}function eA(t,e){return t===void 0?"V":JO(e)?e.toUpperCase():t}function tA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Hv(t,e){return t===void 0?"<":tA(e)?e:t}const Us={type:he.EDGE,valueUpdater:(t,e)=>Vd(t,e,zv)},nA={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>Vd(t,e,QO)},toolId:f.RATIO,negative_constraints:[{toolId:f.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:_r}},rA={inputOptions:Us,toolId:f.DIFFERENCE,negative_constraints:[{toolId:f.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:Fi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:_r}},iA={inputOptions:Us,toolId:f.EDGE_SUM,shape:{...Fi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:_r}},oA={inputOptions:{type:he.EDGE,defaultValue:"V",valueUpdater:eA},toolId:f.XV,negative_constraints:[{toolId:f.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:f.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:f.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:B.TEXT_ONLY,r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:_r}},sA={inputOptions:{type:he.EDGE,valueUpdater:Hv,defaultValue:"<"},toolId:f.EDGE_INEQUALITY,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:_r}},aA={inputOptions:Us,toolId:f.EDGE_PRODUCT,shape:{...Fi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:_r}},lA={inputOptions:Us,toolId:f.EDGE_MODULO,shape:{...Fi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:_r}},cA={inputOptions:Us,toolId:f.EDGE_FACTOR,shape:{...Fi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:_r}},uA={inputOptions:{type:he.EDGE},toolId:f.XY_DIFFERENCES,negative_constraints:[{toolId:f.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:Pv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:_r}},dA={inputOptions:{type:he.EDGE},toolId:f.YIN_YANG_WHITE_KROPKI,shape:Fi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:_r}},_A={inputOptions:{type:he.EDGE},toolId:f.YIN_YANG_KROPKI,negative_constraints:[{toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:Ms},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:_r}},fA={inputOptions:{type:he.EDGE},toolId:f.FILLOMINO_REGION_BORDER,shape:Kd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:xl}},gA={inputOptions:{type:he.EDGE},toolId:f.UNKNOWN_REGION_BORDER,shape:Kd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:xl}},hA={inputOptions:{type:he.EDGE},toolId:f.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:Kd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:xl}},vA={inputOptions:{type:he.EDGE},toolId:f.EDGE_CAVE_ONE_OF_EACH,shape:Fi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:xl}},pA={inputOptions:{type:he.EDGE,valueUpdater:Hv,defaultValue:"<"},toolId:f.ONE_WAY_DOOR,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:_r}},Do=[W.OUTSIDE_CORNER_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.OUTSIDE_CORNER_TOOL,W.OUTSIDE_DIRECTION_TOOL,W.LOCAL_ELEMENT];function mA(t,e=5){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Wv(t,e,n){return Xr(t,e,n)}const Ro={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},To={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Wv(t,e,mA),defaultValue:"",cornerOrEdge:Lt.CORNER},EA={inputOptions:To,toolId:f.LITTLE_KILLER_SUM,shape:Ro,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:So(),tags:[],categories:Do}},CA={inputOptions:To,toolId:f.LITTLE_KILLER_PRODUCT,shape:Ro,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:So(),tags:[],categories:Do}},bA={inputOptions:To,toolId:f.LITTLE_KILLER_LOOK_AND_SAY,shape:Ro,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:So(),tags:[],categories:Do}},IA={inputOptions:To,toolId:f.X_OMIT_LITTLE_KILLER_SUM,shape:Ro,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:So(),tags:[],categories:Do}},wA={inputOptions:To,toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:Ro,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:So(),tags:[],categories:Do}},yA={inputOptions:To,toolId:f.NEGATORS_LITTLE_KILLER_SUM,shape:Ro,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:So(),tags:[],categories:Do}},nn=[W.OUTSIDE_EDGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.OUTSIDE_EDGE_TOOL,W.OUTSIDE_DIRECTION_TOOL,W.LOCAL_ELEMENT];function ko(t,e=5){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Gs(t,e,n){return Xr(t,e,n)}const rn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},jn={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,ko),defaultValue:"",cornerOrEdge:Lt.EDGE},OA={inputOptions:jn,toolId:f.SANDWICH_SUM,shape:rn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:tn(),tags:[],categories:nn}},AA={inputOptions:{...jn,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.MYSTERY_SANDWICH_SUM,shape:rn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:tn(),tags:[],categories:nn}},xA={inputOptions:jn,toolId:f.SANDWICH_SUM_XOR_X_SUM,shape:rn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:tn(),tags:[],categories:nn}},SA={inputOptions:jn,toolId:f.X_SUM,shape:rn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:tn(),tags:[],categories:nn}},LA={inputOptions:jn,toolId:f.SHORTSIGHTED_X_SUM,shape:rn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:tn(),tags:[],categories:nn}},NA={inputOptions:jn,toolId:f.SHIFTED_X_SUM,shape:rn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:tn(),tags:[],categories:nn}},DA={inputOptions:jn,toolId:f.BROKEN_X_SUM,shape:rn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:tn(),tags:[],categories:nn}},RA={inputOptions:jn,toolId:f.X_SUM_SKYSCRAPERS,shape:rn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:tn(),tags:[],categories:nn}},TA={inputOptions:jn,toolId:f.BATTLEFIELD,shape:rn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:tn(),tags:[],categories:nn}},kA={inputOptions:jn,toolId:f.SKYSCRAPERS,shape:rn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:tn(),tags:[],categories:nn}},MA={inputOptions:jn,toolId:f.X_INDEX,shape:rn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:tn(),tags:[],categories:nn}},UA={inputOptions:jn,toolId:f.RISING_STREAK,shape:rn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:tn(),tags:[],categories:nn}},GA={inputOptions:jn,toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:rn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:tn(),tags:[],categories:nn}},$A={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,ko),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.OUTSIDE_CONSECUTIVE_SUM,shape:rn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:tn(),tags:[],categories:nn}},FA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,ko),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.LOOPWICHES,shape:rn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:tn(),tags:[],categories:nn}},PA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,ko),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:rn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:tn(),tags:[],categories:nn}},zA={inputOptions:{type:he.OUTSIDE_DIRECTION,defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_X_INDEX_REGION,shape:rn,meta:{description:"Clues outside the grid indicate the first N cells pointing in that direction are in the same region - followed by a region border - where N is the first digit seen by the clue.",usage:tn(),tags:[],categories:nn}},HA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Gs(t,e,ko),defaultValue:"",cornerOrEdge:Lt.EDGE},toolId:f.PENTOMINO_BORDER_COUNT,shape:rn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:tn(),tags:[],categories:nn}},WA={inputOptions:{type:he.SINGLE_CELL},toolId:f.COSMETIC_CELL_CENTER_SHAPE,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},BA={inputOptions:{type:he.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},YA={inputOptions:{type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_MULTI_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},jA={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>Vd(t,e,zv),defaultValue:""},toolId:f.COSMETIC_EDGE,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.LOCAL_ELEMENT]}},KA={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Fv(t,e,$v),defaultValue:""},toolId:f.COSMETIC_CORNER,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.LOCAL_ELEMENT]}},VA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},XA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},qA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},ZA={inputOptions:{type:he.CAGE,valueUpdater:(t,e)=>Gv(t,e,Uv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:f.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.LOCAL_ELEMENT]}},QA={inputOptions:{type:he.ARROW},toolId:f.COSMETIC_ARROW,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT]}},JA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Wv(t,e,ko),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.COSMETIC_OUTSIDE_DIRECTION,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.OUTSIDE_DIRECTION_TOOL,W.LOCAL_ELEMENT]}},Mo=[W.LOCAL_ELEMENT,W.DIAGONAL_CONSTRAINTS],ex={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},tx={toolId:f.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},nx={toolId:f.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:f.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:f.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:f.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:f.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:f.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:f.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:f.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:f.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:f.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Mo}},_x={toolId:f.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Mo}},fx={toolId:f.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Mo}},gx={toolId:f.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Mo}},hx={toolId:f.PARITY_MIRROR_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Mo}},vx={toolId:f.PARITY_MIRROR_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Mo}},px={toolId:f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},mx={toolId:f.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},Ex={toolId:f.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},Cx={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},bx={toolId:f.CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Ix={toolId:f.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:f.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:f.YIN_YANG,negative_constraints:[{toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."},{toolId:f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION,description:"Identical digits which see each other by a bishops move (diagonally) must be the same color."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:f.NURIMISAKI,negative_constraints:[{toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:f.NURIKABE,negative_constraints:[{toolId:f.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},xx={toolId:f.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Sx={toolId:f.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:f.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:f.SHIKAKU,negative_constraints:[{toolId:f.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Dx={toolId:f.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Rx={toolId:f.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:f.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:f.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},kx={toolId:f.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:f.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:f.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[W.GLOBAL_CONSTRAINT,W.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Ux={toolId:f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[W.GLOBAL_CONSTRAINT,W.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Gx={toolId:f.CAVE,negative_constraints:[{toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:f.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:f.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:f.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:f.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."},{toolId:f.CAVE_WALL_SUGURU,description:"Each orthogonally connected group of shaded (wall) cells contains the digits 1-N (where N is the size of the group). Suguru digits may not repeat in a row, column, or shaded group."},{toolId:f.CAVE_CELLS_FILLOMINO,description:"Divide unshaded cells into polyominoes and fill each cell with a digit equal to the size of its polyomino. Polyominoes of the same size may not share an edge."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:f.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:f.GALAXIES,negative_constraints:[{toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:f.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:f.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:f.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:f.CONNECT_FOUR,negative_constraints:[{toolId:f.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:f.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:f.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:f.BUILD_YOUR_OWN_KILLER_CAGES,meta:{description:"A cage is a set of orthogonally connected cells which do not contain repeated digits. Cages may not overlap each other.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:f.SHADED_BOUNDARIES,negative_constraints:[{toolId:f.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN,description:"Shade the boundary between adjacent digits if and only if they sum to an even number."}],meta:{description:"Shade the boundary between adjacent. Shaded boundaries must divide the grid into exactly 2 regions. There may be shaded boundaries that lie within a region without fully dividing it, as allowed by other rules.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},Be=[W.LINE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.LINE_TOOL,W.LOCAL_ELEMENT],qr=[W.LINE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.DOUBLE_ENDED_LINE_CONSTRAINT,W.LINE_TOOL,W.LOCAL_ELEMENT],$s={description:"",usage:Ge(),tags:[],categories:Be},Gt={type:he.LINE,allowSelfIntersection:!0},Qt={type:he.LINE,allowSelfIntersection:!1},Vx={inputOptions:Qt,toolId:f.THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a thermometer must increase from the bulb end."}},Xx={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:f.CUSTOM_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},qx={inputOptions:Qt,toolId:f.FUZZY_THERMOMETER,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},Zx={inputOptions:Qt,toolId:f.SLOW_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},Qx={inputOptions:Qt,toolId:f.ROW_CYCLE_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},Jx={inputOptions:Gt,toolId:f.PALINDROME,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Ge(),tags:[],categories:Be}},eS={inputOptions:Gt,toolId:f.RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Ge(),tags:[],categories:Be}},tS={inputOptions:Gt,toolId:f.DOUBLE_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Ge(),tags:[],categories:Be}},nS={inputOptions:Gt,toolId:f.RENRENBANBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Ge(),tags:[],categories:Be}},rS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.N_CONSECUTIVE_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Be}},iS={inputOptions:Gt,toolId:f.NABNER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Be}},oS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Ge(),tags:[],categories:Be}},sS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.DUTCH_WHISPERS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Ge(),tags:[],categories:Be}},aS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Ge(),tags:[],categories:Be}},lS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Ge(),tags:[],categories:Be}},cS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_NABNER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Be}},uS={inputOptions:Qt,toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Ge(),tags:[],categories:Be}},dS={inputOptions:Qt,toolId:f.INDEX_LINE,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Ge(),tags:[],categories:Be}},_S={inputOptions:Gt,toolId:f.UNIQUE_VALUES_LINE,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Ge(),tags:[],categories:Be}},fS={inputOptions:Gt,toolId:f.REGION_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Ge(),tags:[],categories:Be}},gS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Ge(),tags:[],categories:Be}},hS={inputOptions:Qt,toolId:f.ARITHMETIC_SEQUENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Ge(),tags:[],categories:Be}},vS={inputOptions:Gt,toolId:f.SAME_PARITY_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Ge(),tags:[],categories:Be}},pS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Be}},mS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.UNIMODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Ge(),tags:[],categories:Be}},ES={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_OR_UNIMODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Ge(),tags:[],categories:Be}},CS={inputOptions:Gt,toolId:f.ODD_EVEN_OSCILLATOR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Ge(),tags:[],categories:Be}},bS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.HIGH_LOW_OSCILLATOR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Ge(),tags:[],categories:Be}},IS={inputOptions:Gt,toolId:f.ENTROPIC_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Ge(),tags:[],categories:Be}},wS={inputOptions:Gt,toolId:f.ENTROPIC_OR_MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Ge(),tags:[],categories:Be}},yS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_COLUMN_IS_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Ge(),tags:[],categories:Be}},OS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_ROW_IS_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Ge(),tags:[],categories:Be}},AS={inputOptions:Qt,toolId:f.REPEATED_DIGITS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Ge(),tags:[],categories:Be}},xS={inputOptions:Qt,toolId:f.SUPERFUZZY_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Ge(),tags:[],categories:Be}},SS={inputOptions:Gt,toolId:f.AMBIGUOUS_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Ge(),tags:[],categories:Be}},LS={inputOptions:Qt,toolId:f.HEADLESS_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Ge(),tags:[],categories:Be}},NS={inputOptions:Gt,toolId:f.XV_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Ge(),tags:[],categories:Be}},DS={inputOptions:Qt,toolId:f.ROW_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Ge(),tags:[],categories:Be}},RS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.AT_LEAST_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Ge(),tags:[],categories:Be}},TS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Ge(),tags:[],categories:Be}};f.ADJACENT_CELL_SUM_IS_PRIME_LINE,B.LINE,Ge();const kS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.PRODUCT_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Ge(),tags:[],categories:Be}},MS={inputOptions:Gt,toolId:f.ADJACENT_MULTIPLES_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Ge(),tags:[],categories:Be}},US={inputOptions:Gt,toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Ge(),tags:[],categories:Be}},GS={inputOptions:Qt,toolId:f.LOOK_AND_SAY_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Ge(),tags:[],categories:Be}},$S={inputOptions:Qt,toolId:f.ZIPPER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Ge(),tags:[],categories:Be}},FS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.SEGMENTED_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Ge(),tags:[],categories:Be}},PS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Ge(),tags:[],categories:Be}},zS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Ge(),tags:[],categories:Be}};f.THERMO_OR_AVERAGE_ARROW,B.THERMO_WITH_CIRCLE,Ge();const HS={inputOptions:Qt,toolId:f.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:B.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Ge(),tags:[],categories:Be}},WS={inputOptions:Qt,toolId:f.PEAPODS,shape:{type:B.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Ge(),tags:[],categories:Be}},BS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Ge(),tags:[],categories:Be}},YS={inputOptions:Gt,toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Ge(),tags:[],categories:Be}},jS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Be}},KS={inputOptions:Gt,toolId:f.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Ge(),tags:[],categories:Be}},VS={inputOptions:Qt,toolId:f.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Ge(),tags:[],categories:Be}},XS={inputOptions:Qt,toolId:f.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Ge(),tags:[],categories:Be}},qS={inputOptions:Gt,toolId:f.BETWEEN_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Ge(),tags:[],categories:qr}},ZS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.LOCKOUT_LINE,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Ge(),tags:[],categories:qr}},QS={inputOptions:Gt,toolId:f.TIGHTROPE_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Ge(),tags:[],categories:qr}},JS={inputOptions:Gt,toolId:f.PARITY_COUNT_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Ge(),tags:[],categories:qr}},eL={inputOptions:Gt,toolId:f.DOUBLE_ARROW_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Ge(),categories:qr}},tL={inputOptions:Gt,toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Ge(),tags:[],categories:qr}},nL={inputOptions:Gt,toolId:f.SPLIT_PEAS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Ge(),tags:[],categories:qr}},rL={inputOptions:Qt,toolId:f.DOUBLERS_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Ge(),tags:[],categories:Be}},iL={inputOptions:Gt,toolId:f.DOUBLERS_BETWEEN_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:qr}},oL={inputOptions:Gt,toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:qr}},je=[W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.SINGLE_CELL_SHAPE_TOOL,W.LOCAL_ELEMENT],Pi=[W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.SINGLE_CELL_COLOR_TOOL,W.LOCAL_ELEMENT],Xd=[W.SINGLE_CELL_ARROW_TOOL,W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT],Fs={type:B.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Zr={type:B.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Sl(t,e=3){return Vr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sL(t){return t===""||t==="1"||t==="2"||t==="3"}function Ps(t,e,n){return Xr(t,e,n)}const Ze={type:he.SINGLE_CELL},Qr={type:he.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Sl),defaultValue:""},qd={type:he.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},aL={inputOptions:Ze,toolId:f.ODD,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:je}},lL={inputOptions:Ze,toolId:f.EVEN,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:je}},cL={inputOptions:Ze,toolId:f.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:Pi}},uL={inputOptions:Ze,toolId:f.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:Pi}},dL={inputOptions:Ze,toolId:f.ODD_MINESWEEPER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},_L={inputOptions:Ze,toolId:f.EVEN_MINESWEEPER,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},fL={inputOptions:Ze,toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:je}},gL={inputOptions:Ze,toolId:f.WATCHTOWER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},hL={inputOptions:Ze,toolId:f.NOT_WATCHTOWER,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},vL={inputOptions:Qr,toolId:f.FARSIGHT,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:je}},pL={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Sl),defaultValue:"9"},toolId:f.RADAR,negative_constraints:[{toolId:f.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:je}},mL={inputOptions:Ze,toolId:f.ORTHOGONAL_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:je}},EL={inputOptions:Ze,toolId:f.INDEXING_COLUMN,negative_constraints:[{toolId:f.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Pi}},CL={inputOptions:Ze,toolId:f.INDEXING_ROW,negative_constraints:[{toolId:f.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Pi}},bL={inputOptions:Ze,toolId:f.LOW_DIGIT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Pi}},IL={inputOptions:Ze,toolId:f.HIGH_DIGIT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Pi}},wL={inputOptions:Ze,toolId:f.FRIENDLY_CELL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Pi}},yL={inputOptions:Ze,toolId:f.DIAGONALLY_ADJACENT_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:je}},OL={inputOptions:Ze,toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:je}},AL={inputOptions:Ze,toolId:f.SANDWICH_ROW_COL_COUNT,shape:Zr,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:je}},xL={inputOptions:Ze,toolId:f.COUNTING_CIRCLES,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:je}},SL={inputOptions:Ze,toolId:f.REVERSE_COUNTING_CIRCLES,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:je}},LL={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,sL),defaultValue:""},toolId:f.COLORED_COUNTING_CIRCLES,shape:Zr,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:je}},NL={inputOptions:Ze,toolId:f.UNIQUE_CELLS,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:je}},DL={inputOptions:Ze,toolId:f.SEEN_EVEN_COUNT,shape:Fs,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},RL={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Sl),defaultValue:"5"},toolId:f.CELL_KNIGHT_WHISPERS,shape:Zr,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:je}},TL={inputOptions:Ze,toolId:f.SEEN_ODD_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},kL={inputOptions:Ze,toolId:f.YIN_YANG_MINESWEEPER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:je}},ML={inputOptions:Ze,toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},UL={inputOptions:Ze,toolId:f.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},GL={inputOptions:Ze,toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Fs,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:je}},$L={inputOptions:Ze,toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:je}},FL={inputOptions:Ze,toolId:f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:je}},PL={inputOptions:Qr,toolId:f.YIN_YANG_LABELED_SHADE_CELL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"Cells in cages with the same label have the yin yang shading.",tags:[],categories:je}},zL={inputOptions:Ze,toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:je}},HL={inputOptions:Ze,toolId:f.SEEN_REGION_BORDERS_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:je}},WL={inputOptions:Ze,toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:je}},BL={inputOptions:Ze,toolId:f.SASHIGANE_BEND_REGION_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:je}},YL={inputOptions:qd,toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Xd}},jL={inputOptions:qd,toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Xd}},KL={inputOptions:Qr,toolId:f.SASHIGANE_REGION_SUM,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:je}},VL={inputOptions:Ze,toolId:f.CELL_ON_THE_LOOP,shape:Fs,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:je}},XL={inputOptions:Ze,toolId:f.CELL_NOT_ON_THE_LOOP,shape:Zr,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:je}},qL={inputOptions:Ze,toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:je}},ZL={inputOptions:Qr,toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:je}},QL={inputOptions:Ze,toolId:f.CAVE_CLUE,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:je}},JL={inputOptions:Ze,toolId:f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,shape:Zr,meta:{description:"An unshaded circled clue (cave) indicates the total number of unshaded cells seen in the four orthogonal directions, including the clue cell. A shaded circle clue (wall) indicates the size of the shaded region.",tags:[],categories:je}},eN={inputOptions:Qr,toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:je}},tN={inputOptions:Qr,toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:je}},nN={inputOptions:Qr,toolId:f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:Zr,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:je}},rN={inputOptions:Ze,toolId:f.DIRECTED_PATH_START,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:je}},iN={inputOptions:Ze,toolId:f.DIRECTED_PATH_END,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:je}},oN={inputOptions:Qr,toolId:f.TELEPORT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:je}},sN={inputOptions:Qr,toolId:f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:je}},aN={inputOptions:Ze,toolId:f.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Fs,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:je}},lN={inputOptions:Ze,toolId:f.NURIKABE_ISLAND_SIZE_CELL,shape:Zr,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:je}},cN={inputOptions:Ze,toolId:f.CONNECT_FOUR_YELLOW,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:je}},uN={inputOptions:Ze,toolId:f.CONENCT_FOUR_RED,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:je}},dN={inputOptions:Ze,toolId:f.SHIKAKU_REGION_SIZE,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,description:"Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region."}],shape:Zr,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:je}},_N={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Sl),defaultValue:"?"},toolId:f.SHIKAKU_REGION_SUM,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,description:"Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region."}],shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:je}},fN={inputOptions:qd,toolId:f.INTERNAL_LOOP_SKYSCRAPERS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell on the loop represents a skyscraper with a height equal to its value (non-loop cells are not skyscrapers). A digit in a clued cell gives the number of skyscrapers visible in the indicated direction (not including the cell itself), where skyscrapers block the view of skyscrapers with the same or lower height behind them. The clued cell may or may not be on the loop.",tags:[],categories:Xd}},gN={inputOptions:Ze,toolId:f.BYOK_CAGE_SIZE,shape:Zr,meta:{description:"Circles appear in cages and count the total number of cells in that cage. All circles are given.",tags:[],categories:je}},hN={inputOptions:Ze,toolId:f.BYOK_NOT_CAGE_CELL,negative_constraints:[{toolId:f.ALL_SQUARES_GIVEN,description:"All such squares are given."}],shape:Fs,meta:{description:"Squares indicate that a cell is not in any cage.",tags:[],categories:je}},vN={inputOptions:{type:he.SINGLE_CELL},toolId:f.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:[W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT,W.FOG_TOOL]}},pN={toolId:f.CUSTOM_FOG_CLEARING,negative_constraints:[{toolId:f.FOG_CLEARING_ITSELF,description:"On cell input, clear itself."},{toolId:f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,description:"On cell input, clear orthogonal neighbours."},{toolId:f.FOG_CLEARING_DIAGONAL_NEIGHBOURS,description:"On cell input, clear diagonal neighbours."},{toolId:f.FOG_CLEARING_CONTAINING_ROW,description:"On cell input, clear containing row."},{toolId:f.FOG_CLEARING_CONTAINING_COLUMN,description:"On cell input, clear containing column."},{toolId:f.FOG_CLEARING_KNIGHTS_MOVE,description:"On cell input, clear cells a knight's move away."}],meta:{description:"",tags:[],categories:[W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT,W.FOG_TOOL]}},Kn=[W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.SINGLE_CELL_MULTIARROW_TOOL,W.LOCAL_ELEMENT],wr={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},Vn={type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},mN={inputOptions:Vn,toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:wr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Kn}},EN={inputOptions:Vn,toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:wr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Kn}},CN={inputOptions:Vn,toolId:f.LOOP_CELL_COUNT_ARROWS,shape:wr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Kn}},bN={inputOptions:Vn,toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:wr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Kn}},IN={inputOptions:Vn,toolId:f.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:wr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Kn}},wN={inputOptions:Vn,toolId:f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:wr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Kn}},yN={inputOptions:Vn,toolId:f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,shape:wr,meta:{description:"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",tags:[],categories:Kn}},ON={inputOptions:Vn,toolId:f.COLD_ARROWS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Kn}},AN={inputOptions:Vn,toolId:f.HOT_ARROWS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Kn}},xN={inputOptions:Vn,toolId:f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:wr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Kn}},SN={inputOptions:Vn,toolId:f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:wr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:Kn}},LN={inputOptions:Vn,toolId:f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:wr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:Kn}},NN={inputOptions:Vn,toolId:f.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS,shape:wr,meta:{description:"A digit in a cell with one or more arrows indicates the total number of shaded boundaries in the directions of all arrows combined.",tags:[],categories:Kn}};function DN(t,e){if(t===void 0||Vr(t,{maxLength:10,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const RN={type:he.VALUE_TOOL,defaultValue:"",valueUpdater:DN},TN={inputOptions:RN,toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUED_GLOBAL_CONSTRAINT]}},kN={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUED_GLOBAL_CONSTRAINT]}},MN={toolId:f.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUED_GLOBAL_CONSTRAINT]}},UN={toolId:f.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;const GN={toolId:f.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}},$N={toolId:f.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;const FN={toolId:f.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}},PN={toolId:f.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}},zN=[W.CORNER_LINE_CONSTRAINT,W.CORNER_LINE_TOOL,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT],HN={inputOptions:{type:he.CORNER_LINE},toolId:f.MAZE_WALL,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:zN}};function WN(t,e){if(t===void 0||Vr(t,{maxLength:30,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const BN={type:he.VALUE_TOOL,defaultValue:"",valueUpdater:WN},YN={inputOptions:BN,toolId:f.VARIABLE_CONSTRAINT,meta:{description:"Create global variables with given values.",tags:[],categories:[W.LOCAL_ELEMENT,W.OTHER_CONSTRAINTS]}},Ht={[f.GIVEN]:TO,[f.DIGIT]:kO,[f.REGIONS]:MO,[f.OUTSIDE]:FO,[f.CORNER_PM]:UO,[f.CENTER_PM]:GO,[f.HIGHLIGHTS]:$O,[f.PEN_TOOL]:PO,[f.SUDOKU_RULES_DO_NOT_APPLY]:ex,[f.LEAVE_EMPTY_CELLS_EMPTY]:tx,[f.LITS]:Yx,[f.HEXED_SUDOKU]:nx,[f.FILLOMINO]:Bx,[f.ANTIKNIGHT]:rx,[f.ANTI_LONG_KNIGHT]:ox,[f.ANTIKING]:sx,[f.ANTI_GIRAFFE]:ix,[f.DISJOINT_GROUPS]:ax,[f.TANGO]:lx,[f.NONCONSECUTIVE]:cx,[f.NONRATIO]:ux,[f.ANTI_ENTROPY]:mx,[f.GLOBAL_INDEXING_COLUMN]:Ex,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:Cx,[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:px,[f.NEGATIVE_DIAGONAL]:dx,[f.POSITIVE_DIAGONAL]:_x,[f.NEGATIVE_ANTIDIAGONAL]:fx,[f.POSITIVE_ANTIDIAGONAL]:gx,[f.PARITY_MIRROR_NEGATIVE_DIAGONAL]:hx,[f.PARITY_MIRROR_POSITIVE_DIAGONAL]:vx,[f.DOUBLERS]:GN,[f.NEGATORS]:$N,[f.NEXUS]:FN,[f.INDEXER_CELLS]:PN,[f.CHAOS_CONSTRUCTION]:bx,[f.NUMBERED_CHAOS_CONSTRUCTION]:Ix,[f.CHAOS_CONSTRUCTION_SUGURU]:wx,[f.YIN_YANG]:yx,[f.NURIMISAKI]:Ox,[f.NURIKABE]:Ax,[f.BUILD_YOUR_OWN_KILLER_CAGES]:jx,[f.SHADED_BOUNDARIES]:Kx,[f.TWO_CONTIGUOUS_REGIONS]:xx,[f.SASHIGANE]:Sx,[f.NORINORI]:Lx,[f.SHIKAKU]:Nx,[f.GOLDILOCKS_ZONE]:Rx,[f.CELL_CENTER_LOOP_NO_TOUCHING]:Tx,[f.CAVE]:Gx,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:$x,[f.GALAXIES]:Px,[f.PENTOMINO_TILLING]:zx,[f.LITS_BLACK_WHITE_STAR_BATTLE]:Hx,[f.NORINORI_STAR_BATTLE]:Dx,[f.MAZE_DIRECTED_PATH]:kx,[f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:Mx,[f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Ux,[f.CONNECT_FOUR]:Wx,[f.ODD]:aL,[f.EVEN]:lL,[f.MINIMUM]:cL,[f.MAXIMUM]:uL,[f.ODD_MINESWEEPER]:dL,[f.EVEN_MINESWEEPER]:_L,[f.WATCHTOWER]:gL,[f.NOT_WATCHTOWER]:hL,[f.FARSIGHT]:vL,[f.RADAR]:pL,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:fL,[f.ORTHOGONAL_SUM]:mL,[f.DIAGONALLY_ADJACENT_SUM]:yL,[f.INDEXING_COLUMN]:EL,[f.INDEXING_ROW]:CL,[f.LOW_DIGIT]:bL,[f.HIGH_DIGIT]:IL,[f.FRIENDLY_CELL]:wL,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:OL,[f.SANDWICH_ROW_COL_COUNT]:AL,[f.COUNTING_CIRCLES]:xL,[f.REVERSE_COUNTING_CIRCLES]:SL,[f.COLORED_COUNTING_CIRCLES]:LL,[f.UNIQUE_CELLS]:NL,[f.SEEN_EVEN_COUNT]:DL,[f.SEEN_ODD_COUNT]:TL,[f.CELL_KNIGHT_WHISPERS]:RL,[f.YIN_YANG_MINESWEEPER]:kL,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:ML,[f.YIN_YANG_SEEN_SHADED_CELLS]:UL,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:GL,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:$L,[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:FL,[f.YIN_YANG_LABELED_SHADE_CELL]:PL,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:zL,[f.SEEN_REGION_BORDERS_COUNT]:HL,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:WL,[f.SASHIGANE_BEND_REGION_COUNT]:BL,[f.SASHIGANE_REGION_SUM]:KL,[f.CELL_ON_THE_LOOP]:VL,[f.CELL_NOT_ON_THE_LOOP]:XL,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:qL,[f.CAVE_CLUE]:QL,[f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE]:JL,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:ZL,[f.YIN_YANG_FILLOMINO_PARITY]:Fx,[f.SHIKAKU_REGION_SIZE]:dN,[f.SHIKAKU_REGION_SUM]:_N,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:eN,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:tN,[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:nN,[f.BYOK_CAGE_SIZE]:gN,[f.BYOK_NOT_CAGE_CELL]:hN,[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:sN,[f.DIRECTED_PATH_START]:rN,[f.DIRECTED_PATH_END]:iN,[f.TELEPORT]:oN,[f.CONNECT_FOUR_YELLOW]:cN,[f.CONENCT_FOUR_RED]:uN,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:YL,[f.THERMO_SIGHTLINE_LOOP_ARROW]:jL,[f.INTERNAL_LOOP_SKYSCRAPERS]:fN,[f.HOT_ARROWS]:AN,[f.COLD_ARROWS]:ON,[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:wN,[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:yN,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:bN,[f.YIN_YANG_COUNT_SHADED_CELLS]:IN,[f.LOOP_CELL_COUNT_ARROWS]:CN,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:EN,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:mN,[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:xN,[f.NURIKABE_SEEN_WATERWAY_CELLS]:aN,[f.NURIKABE_ISLAND_SIZE_CELL]:lN,[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:SN,[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:LN,[f.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS]:NN,[f.DIFFERENCE]:rA,[f.RATIO]:nA,[f.XV]:oA,[f.EDGE_INEQUALITY]:sA,[f.EDGE_SUM]:iA,[f.EDGE_PRODUCT]:aA,[f.EDGE_MODULO]:lA,[f.EDGE_FACTOR]:cA,[f.XY_DIFFERENCES]:uA,[f.YIN_YANG_WHITE_KROPKI]:dA,[f.YIN_YANG_KROPKI]:_A,[f.FILLOMINO_REGION_BORDER]:fA,[f.UNKNOWN_REGION_BORDER]:gA,[f.CHAOS_CONSTRUCTION_SUGURU_BORDER]:hA,[f.EDGE_CAVE_ONE_OF_EACH]:vA,[f.ONE_WAY_DOOR]:pA,[f.QUADRUPLE]:jO,[f.CORNER_SUM]:KO,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:VO,[f.CORNER_EVEN_COUNT]:XO,[f.PRODUCT_SQUARE]:qO,[f.EQUAL_DIAGONAL_DIFFERENCES]:ZO,[f.THERMOMETER]:Vx,[f.FUZZY_THERMOMETER]:qx,[f.SLOW_THERMOMETER]:Zx,[f.CUSTOM_THERMOMETER]:Xx,[f.ROW_CYCLE_THERMOMETER]:Qx,[f.PALINDROME]:Jx,[f.RENBAN_LINE]:eS,[f.DOUBLE_RENBAN_LINE]:tS,[f.RENRENBANBAN_LINE]:nS,[f.N_CONSECUTIVE_RENBAN_LINE]:rS,[f.NABNER_LINE]:iS,[f.WHISPERS_LINE]:oS,[f.DUTCH_WHISPERS]:sS,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:aS,[f.RENBAN_OR_WHISPERS_LINE]:lS,[f.RENBAN_OR_NABNER_LINE]:cS,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:uS,[f.INDEX_LINE]:dS,[f.UNIQUE_VALUES_LINE]:_S,[f.REPEATED_DIGITS_LINE]:AS,[f.REGION_SUM_LINE]:fS,[f.SUM_LINE]:gS,[f.XV_LINE]:NS,[f.ROW_SUM_LINE]:DS,[f.AT_LEAST_X_LINE]:RS,[f.SUPERFUZZY_ARROW]:xS,[f.AMBIGUOUS_ARROW]:SS,[f.HEADLESS_ARROW]:LS,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:TS,[f.PRODUCT_LINE]:kS,[f.ADJACENT_MULTIPLES_LINE]:MS,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:US,[f.LOOK_AND_SAY_LINE]:GS,[f.ARITHMETIC_SEQUENCE_LINE]:hS,[f.ZIPPER_LINE]:$S,[f.SEGMENTED_SUM_LINE]:FS,[f.SEGMENTED_SUM_AND_RENBAN_LINE]:PS,[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:zS,[f.SAME_PARITY_LINE]:vS,[f.MODULAR_LINE]:pS,[f.UNIMODULAR_LINE]:mS,[f.MODULAR_OR_UNIMODULAR_LINE]:ES,[f.ODD_EVEN_OSCILLATOR_LINE]:CS,[f.HIGH_LOW_OSCILLATOR_LINE]:bS,[f.ENTROPIC_LINE]:IS,[f.ENTROPIC_OR_MODULAR_LINE]:wS,[f.INDEXING_COLUMN_IS_X_LINE]:yS,[f.INDEXING_ROW_IS_X_LINE]:OS,[f.INDEXER_CELLS_REGION_SUBSET_LINE]:HS,[f.PEAPODS]:WS,[f.YIN_YANG_INDEXING_LINE_COLORING]:VS,[f.YIN_YANG_SHADED_WHISPERS_LINE]:BS,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:YS,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:jS,[f.YIN_YANG_REGION_SUM_LINE]:KS,[f.GOLDILOCKS_ZONE_REGION_SUM]:XS,[f.BETWEEN_LINE]:qS,[f.LOCKOUT_LINE]:ZS,[f.PARITY_COUNT_LINE]:JS,[f.TIGHTROPE_LINE]:QS,[f.DOUBLE_ARROW_LINE]:eL,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:tL,[f.SPLIT_PEAS]:nL,[f.DOUBLERS_THERMOMETER]:rL,[f.DOUBLERS_BETWEEN_LINE]:iL,[f.DOUBLERS_DOUBLE_ARROW_LINE]:oL,[f.ARROW]:eO,[f.CHAOS_CONSTRUCTION_ARROW]:rO,[f.AVERAGE_ARROW]:tO,[f.BULBOUS_ARROW]:nO,[f.MAZE_WALL]:HN,[f.KILLER_CAGE]:mO,[f.UNIQUE_DIGITS_CAGE]:EO,[f.INVERTED_KILLER_CAGE]:CO,[f.SUM_CAGE]:bO,[f.SUM_CAGE_LOOK_AND_SAY]:IO,[f.PARITY_BALANCE_CAGE]:wO,[f.DIVISIBLE_KILLER_CAGE]:yO,[f.SPOTLIGHT_CAGE]:OO,[f.PUTTERIA_CAGE]:AO,[f.MULTISET_CAGE]:xO,[f.VAULTED_CAGE]:SO,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:LO,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:NO,[f.DOUBLERS_KILLER_CAGE]:DO,[f.NEGATORS_KILLER_CAGE]:RO,[f.CLONE_REGION]:BO,[f.SANDWICH_SUM]:OA,[f.MYSTERY_SANDWICH_SUM]:AA,[f.X_SUM]:SA,[f.SHORTSIGHTED_X_SUM]:LA,[f.SHIFTED_X_SUM]:NA,[f.BROKEN_X_SUM]:DA,[f.X_SUM_SKYSCRAPERS]:RA,[f.BATTLEFIELD]:TA,[f.SKYSCRAPERS]:kA,[f.X_INDEX]:MA,[f.SANDWICH_SUM_XOR_X_SUM]:xA,[f.RISING_STREAK]:UA,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:GA,[f.OUTSIDE_CONSECUTIVE_SUM]:$A,[f.LOOPWICHES]:FA,[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:PA,[f.CHAOS_CONSTRUCTION_X_INDEX_REGION]:zA,[f.PENTOMINO_BORDER_COUNT]:HA,[f.LITTLE_KILLER_SUM]:EA,[f.LITTLE_KILLER_PRODUCT]:CA,[f.LITTLE_KILLER_LOOK_AND_SAY]:bA,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:wA,[f.X_OMIT_LITTLE_KILLER_SUM]:IA,[f.NEGATORS_LITTLE_KILLER_SUM]:yA,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:HO,[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:WO,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:TN,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:kN,[f.FORBIDDEN_KNIGHT_SUM]:MN,[f.LITS_MAX_TETROMINO_SUM]:UN,[f.VARIABLE_CONSTRAINT]:YN,[f.FOG_LIGHTS]:vN,[f.CUSTOM_FOG_CLEARING]:pN,[f.COSMETIC_CELL_CENTER_SHAPE]:WA,[f.COSMETIC_CELL_ARROW]:BA,[f.COSMETIC_CELL_MULTI_ARROW]:YA,[f.COSMETIC_EDGE]:jA,[f.COSMETIC_CORNER]:KA,[f.COSMETIC_LINE]:VA,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:XA,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:qA,[f.COSMETIC_ARROW]:QA,[f.COSMETIC_CAGE]:ZA,[f.COSMETIC_OUTSIDE_DIRECTION]:JA};var Fe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Fe||{});function Bv(t){if(!(t in Fe))throw Error(" not a key in DIRECTION");return Fe[t]}function Qe(t,e){return t.r===e.r&&t.c===e.c}function Yv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function jN(t,e){return{r:t.r*e,c:t.c*e}}function KN(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function zs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Qe(t,e)}function VN(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function al(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Ft(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ll(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function XN(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ll(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function qN(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const ZN=new Map([[6,Fe.N],[2,Fe.S],[0,Fe.E],[4,Fe.W],[7,Fe.NE],[5,Fe.NW],[1,Fe.SE],[3,Fe.SW]]);function ho(t){t=t%8;const e=ZN.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const QN=new Map([[Fe.N,{r:-1,c:0}],[Fe.S,{r:1,c:0}],[Fe.E,{r:0,c:1}],[Fe.W,{r:0,c:-1}],[Fe.NE,{r:-1,c:1}],[Fe.NW,{r:-1,c:-1}],[Fe.SE,{r:1,c:1}],[Fe.SW,{r:1,c:-1}]]);function Hs(t){const e=QN.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function vh(t,e){const n=Hs(e);return Yv(t,n)}function cl(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function jv(t,e,n=!1){const r=t.some(o=>Qe(o,e)),i=n?t.some(o=>zs(o,e)):t.some(o=>VN(o,e));if(!r&&i){const o=[...t,e];return al(o),o}return t}function Wa(t){return`R${t.r+1}C${t.c+1}`}function Zd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function JN(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ms={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var eD=ms.exports,ph;function tD(){return ph||(ph=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",d=500,g="__lodash_placeholder__",h=1,v=2,m=4,E=1,I=2,b=1,w=2,A=4,T=8,k=16,U=32,j=64,M=128,$=256,te=512,ae=30,ie="...",ce=800,we=16,Z=1,Ie=2,me=3,Oe=1/0,Se=9007199254740991,Ae=17976931348623157e292,Re=NaN,$e=4294967295,st=$e-1,ut=$e>>>1,Ct=[["ary",M],["bind",b],["bindKey",w],["curry",T],["curryRight",k],["flip",te],["partial",U],["partialRight",j],["rearg",$]],dt="[object Arguments]",bt="[object Array]",It="[object AsyncFunction]",In="[object Boolean]",dn="[object Date]",yr="[object DOMException]",Or="[object Error]",kr="[object Function]",ze="[object GeneratorFunction]",ye="[object Map]",Te="[object Number]",He="[object Null]",Mt="[object Object]",Js="[object Promise]",ea="[object Proxy]",mi="[object RegExp]",wn="[object Set]",Ei="[object String]",Hi="[object Symbol]",tc="[object Undefined]",tt="[object WeakMap]",qo="[object WeakSet]",Zo="[object ArrayBuffer]",Wi="[object DataView]",nc="[object Float32Array]",rc="[object Float64Array]",ic="[object Int8Array]",oc="[object Int16Array]",sc="[object Int32Array]",ac="[object Uint8Array]",lc="[object Uint8ClampedArray]",cc="[object Uint16Array]",uc="[object Uint32Array]",wm=/\b__p \+= '';/g,ym=/\b(__p \+=) '' \+/g,Om=/(__e\(.*?\)|\b__t\)) \+\n'';/g,N_=/&(?:amp|lt|gt|quot|#39);/g,D_=/[&<>"']/g,Am=RegExp(N_.source),xm=RegExp(D_.source),Sm=/<%-([\s\S]+?)%>/g,Lm=/<%([\s\S]+?)%>/g,R_=/<%=([\s\S]+?)%>/g,Nm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dm=/^\w*$/,Rm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dc=/[\\^$.*+?()[\]{}|]/g,Tm=RegExp(dc.source),_c=/^\s+/,km=/\s/,Mm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Um=/\{\n\/\* \[wrapped with (.+)\] \*/,Gm=/,? & /,$m=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fm=/[()=,{}\[\]\/\s]/,Pm=/\\(\\)?/g,zm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,T_=/\w*$/,Hm=/^[-+]0x[0-9a-f]+$/i,Wm=/^0b[01]+$/i,Bm=/^\[object .+?Constructor\]$/,Ym=/^0o[0-7]+$/i,jm=/^(?:0|[1-9]\d*)$/,Km=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ta=/($^)/,Vm=/['\n\r\u2028\u2029\\]/g,na="\\ud800-\\udfff",Xm="\\u0300-\\u036f",qm="\\ufe20-\\ufe2f",Zm="\\u20d0-\\u20ff",k_=Xm+qm+Zm,M_="\\u2700-\\u27bf",U_="a-z\\xdf-\\xf6\\xf8-\\xff",Qm="\\xac\\xb1\\xd7\\xf7",Jm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",e1="\\u2000-\\u206f",t1=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",G_="A-Z\\xc0-\\xd6\\xd8-\\xde",$_="\\ufe0e\\ufe0f",F_=Qm+Jm+e1+t1,fc="['’]",n1="["+na+"]",P_="["+F_+"]",ra="["+k_+"]",z_="\\d+",r1="["+M_+"]",H_="["+U_+"]",W_="[^"+na+F_+z_+M_+U_+G_+"]",gc="\\ud83c[\\udffb-\\udfff]",i1="(?:"+ra+"|"+gc+")",B_="[^"+na+"]",hc="(?:\\ud83c[\\udde6-\\uddff]){2}",vc="[\\ud800-\\udbff][\\udc00-\\udfff]",Bi="["+G_+"]",Y_="\\u200d",j_="(?:"+H_+"|"+W_+")",o1="(?:"+Bi+"|"+W_+")",K_="(?:"+fc+"(?:d|ll|m|re|s|t|ve))?",V_="(?:"+fc+"(?:D|LL|M|RE|S|T|VE))?",X_=i1+"?",q_="["+$_+"]?",s1="(?:"+Y_+"(?:"+[B_,hc,vc].join("|")+")"+q_+X_+")*",a1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Z_=q_+X_+s1,c1="(?:"+[r1,hc,vc].join("|")+")"+Z_,u1="(?:"+[B_+ra+"?",ra,hc,vc,n1].join("|")+")",d1=RegExp(fc,"g"),_1=RegExp(ra,"g"),pc=RegExp(gc+"(?="+gc+")|"+u1+Z_,"g"),f1=RegExp([Bi+"?"+H_+"+"+K_+"(?="+[P_,Bi,"$"].join("|")+")",o1+"+"+V_+"(?="+[P_,Bi+j_,"$"].join("|")+")",Bi+"?"+j_+"+"+K_,Bi+"+"+V_,l1,a1,z_,c1].join("|"),"g"),g1=RegExp("["+Y_+na+k_+$_+"]"),h1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,v1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],p1=-1,$t={};$t[nc]=$t[rc]=$t[ic]=$t[oc]=$t[sc]=$t[ac]=$t[lc]=$t[cc]=$t[uc]=!0,$t[dt]=$t[bt]=$t[Zo]=$t[In]=$t[Wi]=$t[dn]=$t[Or]=$t[kr]=$t[ye]=$t[Te]=$t[Mt]=$t[mi]=$t[wn]=$t[Ei]=$t[tt]=!1;var Ut={};Ut[dt]=Ut[bt]=Ut[Zo]=Ut[Wi]=Ut[In]=Ut[dn]=Ut[nc]=Ut[rc]=Ut[ic]=Ut[oc]=Ut[sc]=Ut[ye]=Ut[Te]=Ut[Mt]=Ut[mi]=Ut[wn]=Ut[Ei]=Ut[Hi]=Ut[ac]=Ut[lc]=Ut[cc]=Ut[uc]=!0,Ut[Or]=Ut[kr]=Ut[tt]=!1;var m1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},E1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},b1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},I1=parseFloat,w1=parseInt,Q_=typeof Ba=="object"&&Ba&&Ba.Object===Object&&Ba,y1=typeof self=="object"&&self&&self.Object===Object&&self,sn=Q_||y1||Function("return this")(),mc=e&&!e.nodeType&&e,Ci=mc&&!0&&t&&!t.nodeType&&t,J_=Ci&&Ci.exports===mc,Ec=J_&&Q_.process,Zn=function(){try{var V=Ci&&Ci.require&&Ci.require("util").types;return V||Ec&&Ec.binding&&Ec.binding("util")}catch{}}(),ef=Zn&&Zn.isArrayBuffer,tf=Zn&&Zn.isDate,nf=Zn&&Zn.isMap,rf=Zn&&Zn.isRegExp,of=Zn&&Zn.isSet,sf=Zn&&Zn.isTypedArray;function Nn(V,le,re){switch(re.length){case 0:return V.call(le);case 1:return V.call(le,re[0]);case 2:return V.call(le,re[0],re[1]);case 3:return V.call(le,re[0],re[1],re[2])}return V.apply(le,re)}function O1(V,le,re,Me){for(var nt=-1,wt=V==null?0:V.length;++nt<wt;){var qt=V[nt];le(Me,qt,re(qt),V)}return Me}function Qn(V,le){for(var re=-1,Me=V==null?0:V.length;++re<Me&&le(V[re],re,V)!==!1;);return V}function A1(V,le){for(var re=V==null?0:V.length;re--&&le(V[re],re,V)!==!1;);return V}function af(V,le){for(var re=-1,Me=V==null?0:V.length;++re<Me;)if(!le(V[re],re,V))return!1;return!0}function ti(V,le){for(var re=-1,Me=V==null?0:V.length,nt=0,wt=[];++re<Me;){var qt=V[re];le(qt,re,V)&&(wt[nt++]=qt)}return wt}function ia(V,le){var re=V==null?0:V.length;return!!re&&Yi(V,le,0)>-1}function Cc(V,le,re){for(var Me=-1,nt=V==null?0:V.length;++Me<nt;)if(re(le,V[Me]))return!0;return!1}function Pt(V,le){for(var re=-1,Me=V==null?0:V.length,nt=Array(Me);++re<Me;)nt[re]=le(V[re],re,V);return nt}function ni(V,le){for(var re=-1,Me=le.length,nt=V.length;++re<Me;)V[nt+re]=le[re];return V}function bc(V,le,re,Me){var nt=-1,wt=V==null?0:V.length;for(Me&&wt&&(re=V[++nt]);++nt<wt;)re=le(re,V[nt],nt,V);return re}function x1(V,le,re,Me){var nt=V==null?0:V.length;for(Me&&nt&&(re=V[--nt]);nt--;)re=le(re,V[nt],nt,V);return re}function Ic(V,le){for(var re=-1,Me=V==null?0:V.length;++re<Me;)if(le(V[re],re,V))return!0;return!1}var S1=wc("length");function L1(V){return V.split("")}function N1(V){return V.match($m)||[]}function lf(V,le,re){var Me;return re(V,function(nt,wt,qt){if(le(nt,wt,qt))return Me=wt,!1}),Me}function oa(V,le,re,Me){for(var nt=V.length,wt=re+(Me?1:-1);Me?wt--:++wt<nt;)if(le(V[wt],wt,V))return wt;return-1}function Yi(V,le,re){return le===le?H1(V,le,re):oa(V,cf,re)}function D1(V,le,re,Me){for(var nt=re-1,wt=V.length;++nt<wt;)if(Me(V[nt],le))return nt;return-1}function cf(V){return V!==V}function uf(V,le){var re=V==null?0:V.length;return re?Oc(V,le)/re:Re}function wc(V){return function(le){return le==null?n:le[V]}}function yc(V){return function(le){return V==null?n:V[le]}}function df(V,le,re,Me,nt){return nt(V,function(wt,qt,Tt){re=Me?(Me=!1,wt):le(re,wt,qt,Tt)}),re}function R1(V,le){var re=V.length;for(V.sort(le);re--;)V[re]=V[re].value;return V}function Oc(V,le){for(var re,Me=-1,nt=V.length;++Me<nt;){var wt=le(V[Me]);wt!==n&&(re=re===n?wt:re+wt)}return re}function Ac(V,le){for(var re=-1,Me=Array(V);++re<V;)Me[re]=le(re);return Me}function T1(V,le){return Pt(le,function(re){return[re,V[re]]})}function _f(V){return V&&V.slice(0,vf(V)+1).replace(_c,"")}function Dn(V){return function(le){return V(le)}}function xc(V,le){return Pt(le,function(re){return V[re]})}function Qo(V,le){return V.has(le)}function ff(V,le){for(var re=-1,Me=V.length;++re<Me&&Yi(le,V[re],0)>-1;);return re}function gf(V,le){for(var re=V.length;re--&&Yi(le,V[re],0)>-1;);return re}function k1(V,le){for(var re=V.length,Me=0;re--;)V[re]===le&&++Me;return Me}var M1=yc(m1),U1=yc(E1);function G1(V){return"\\"+b1[V]}function $1(V,le){return V==null?n:V[le]}function ji(V){return g1.test(V)}function F1(V){return h1.test(V)}function P1(V){for(var le,re=[];!(le=V.next()).done;)re.push(le.value);return re}function Sc(V){var le=-1,re=Array(V.size);return V.forEach(function(Me,nt){re[++le]=[nt,Me]}),re}function hf(V,le){return function(re){return V(le(re))}}function ri(V,le){for(var re=-1,Me=V.length,nt=0,wt=[];++re<Me;){var qt=V[re];(qt===le||qt===g)&&(V[re]=g,wt[nt++]=re)}return wt}function sa(V){var le=-1,re=Array(V.size);return V.forEach(function(Me){re[++le]=Me}),re}function z1(V){var le=-1,re=Array(V.size);return V.forEach(function(Me){re[++le]=[Me,Me]}),re}function H1(V,le,re){for(var Me=re-1,nt=V.length;++Me<nt;)if(V[Me]===le)return Me;return-1}function W1(V,le,re){for(var Me=re+1;Me--;)if(V[Me]===le)return Me;return Me}function Ki(V){return ji(V)?Y1(V):S1(V)}function hr(V){return ji(V)?j1(V):L1(V)}function vf(V){for(var le=V.length;le--&&km.test(V.charAt(le)););return le}var B1=yc(C1);function Y1(V){for(var le=pc.lastIndex=0;pc.test(V);)++le;return le}function j1(V){return V.match(pc)||[]}function K1(V){return V.match(f1)||[]}var V1=function V(le){le=le==null?sn:Vi.defaults(sn.Object(),le,Vi.pick(sn,v1));var re=le.Array,Me=le.Date,nt=le.Error,wt=le.Function,qt=le.Math,Tt=le.Object,Lc=le.RegExp,X1=le.String,Jn=le.TypeError,aa=re.prototype,q1=wt.prototype,Xi=Tt.prototype,la=le["__core-js_shared__"],ca=q1.toString,xt=Xi.hasOwnProperty,Z1=0,pf=function(){var a=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),ua=Xi.toString,Q1=ca.call(Tt),J1=sn._,eE=Lc("^"+ca.call(xt).replace(dc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),da=J_?le.Buffer:n,ii=le.Symbol,_a=le.Uint8Array,mf=da?da.allocUnsafe:n,fa=hf(Tt.getPrototypeOf,Tt),Ef=Tt.create,Cf=Xi.propertyIsEnumerable,ga=aa.splice,bf=ii?ii.isConcatSpreadable:n,Jo=ii?ii.iterator:n,bi=ii?ii.toStringTag:n,ha=function(){try{var a=Ai(Tt,"defineProperty");return a({},"",{}),a}catch{}}(),tE=le.clearTimeout!==sn.clearTimeout&&le.clearTimeout,nE=Me&&Me.now!==sn.Date.now&&Me.now,rE=le.setTimeout!==sn.setTimeout&&le.setTimeout,va=qt.ceil,pa=qt.floor,Nc=Tt.getOwnPropertySymbols,iE=da?da.isBuffer:n,If=le.isFinite,oE=aa.join,sE=hf(Tt.keys,Tt),Zt=qt.max,_n=qt.min,aE=Me.now,lE=le.parseInt,wf=qt.random,cE=aa.reverse,Dc=Ai(le,"DataView"),es=Ai(le,"Map"),Rc=Ai(le,"Promise"),qi=Ai(le,"Set"),ts=Ai(le,"WeakMap"),ns=Ai(Tt,"create"),ma=ts&&new ts,Zi={},uE=xi(Dc),dE=xi(es),_E=xi(Rc),fE=xi(qi),gE=xi(ts),Ea=ii?ii.prototype:n,rs=Ea?Ea.valueOf:n,yf=Ea?Ea.toString:n;function N(a){if(Bt(a)&&!rt(a)&&!(a instanceof ht)){if(a instanceof er)return a;if(xt.call(a,"__wrapped__"))return Og(a)}return new er(a)}var Qi=function(){function a(){}return function(c){if(!zt(c))return{};if(Ef)return Ef(c);a.prototype=c;var p=new a;return a.prototype=n,p}}();function Ca(){}function er(a,c){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=n}N.templateSettings={escape:Sm,evaluate:Lm,interpolate:R_,variable:"",imports:{_:N}},N.prototype=Ca.prototype,N.prototype.constructor=N,er.prototype=Qi(Ca.prototype),er.prototype.constructor=er;function ht(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function hE(){var a=new ht(this.__wrapped__);return a.__actions__=yn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=yn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=yn(this.__views__),a}function vE(){if(this.__filtered__){var a=new ht(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function pE(){var a=this.__wrapped__.value(),c=this.__dir__,p=rt(a),C=c<0,y=p?a.length:0,R=L0(0,y,this.__views__),P=R.start,K=R.end,q=K-P,de=C?K:P-1,_e=this.__iteratees__,pe=_e.length,Le=0,Pe=_n(q,this.__takeCount__);if(!p||!C&&y==q&&Pe==q)return Vf(a,this.__actions__);var Ve=[];e:for(;q--&&Le<Pe;){de+=c;for(var ct=-1,Xe=a[de];++ct<pe;){var gt=_e[ct],vt=gt.iteratee,kn=gt.type,mn=vt(Xe);if(kn==Ie)Xe=mn;else if(!mn){if(kn==Z)continue e;break e}}Ve[Le++]=Xe}return Ve}ht.prototype=Qi(Ca.prototype),ht.prototype.constructor=ht;function Ii(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var C=a[c];this.set(C[0],C[1])}}function mE(){this.__data__=ns?ns(null):{},this.size=0}function EE(a){var c=this.has(a)&&delete this.__data__[a];return this.size-=c?1:0,c}function CE(a){var c=this.__data__;if(ns){var p=c[a];return p===u?n:p}return xt.call(c,a)?c[a]:n}function bE(a){var c=this.__data__;return ns?c[a]!==n:xt.call(c,a)}function IE(a,c){var p=this.__data__;return this.size+=this.has(a)?0:1,p[a]=ns&&c===n?u:c,this}Ii.prototype.clear=mE,Ii.prototype.delete=EE,Ii.prototype.get=CE,Ii.prototype.has=bE,Ii.prototype.set=IE;function Mr(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var C=a[c];this.set(C[0],C[1])}}function wE(){this.__data__=[],this.size=0}function yE(a){var c=this.__data__,p=ba(c,a);if(p<0)return!1;var C=c.length-1;return p==C?c.pop():ga.call(c,p,1),--this.size,!0}function OE(a){var c=this.__data__,p=ba(c,a);return p<0?n:c[p][1]}function AE(a){return ba(this.__data__,a)>-1}function xE(a,c){var p=this.__data__,C=ba(p,a);return C<0?(++this.size,p.push([a,c])):p[C][1]=c,this}Mr.prototype.clear=wE,Mr.prototype.delete=yE,Mr.prototype.get=OE,Mr.prototype.has=AE,Mr.prototype.set=xE;function Ur(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var C=a[c];this.set(C[0],C[1])}}function SE(){this.size=0,this.__data__={hash:new Ii,map:new(es||Mr),string:new Ii}}function LE(a){var c=Ta(this,a).delete(a);return this.size-=c?1:0,c}function NE(a){return Ta(this,a).get(a)}function DE(a){return Ta(this,a).has(a)}function RE(a,c){var p=Ta(this,a),C=p.size;return p.set(a,c),this.size+=p.size==C?0:1,this}Ur.prototype.clear=SE,Ur.prototype.delete=LE,Ur.prototype.get=NE,Ur.prototype.has=DE,Ur.prototype.set=RE;function wi(a){var c=-1,p=a==null?0:a.length;for(this.__data__=new Ur;++c<p;)this.add(a[c])}function TE(a){return this.__data__.set(a,u),this}function kE(a){return this.__data__.has(a)}wi.prototype.add=wi.prototype.push=TE,wi.prototype.has=kE;function vr(a){var c=this.__data__=new Mr(a);this.size=c.size}function ME(){this.__data__=new Mr,this.size=0}function UE(a){var c=this.__data__,p=c.delete(a);return this.size=c.size,p}function GE(a){return this.__data__.get(a)}function $E(a){return this.__data__.has(a)}function FE(a,c){var p=this.__data__;if(p instanceof Mr){var C=p.__data__;if(!es||C.length<i-1)return C.push([a,c]),this.size=++p.size,this;p=this.__data__=new Ur(C)}return p.set(a,c),this.size=p.size,this}vr.prototype.clear=ME,vr.prototype.delete=UE,vr.prototype.get=GE,vr.prototype.has=$E,vr.prototype.set=FE;function Of(a,c){var p=rt(a),C=!p&&Si(a),y=!p&&!C&&ci(a),R=!p&&!C&&!y&&no(a),P=p||C||y||R,K=P?Ac(a.length,X1):[],q=K.length;for(var de in a)(c||xt.call(a,de))&&!(P&&(de=="length"||y&&(de=="offset"||de=="parent")||R&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Pr(de,q)))&&K.push(de);return K}function Af(a){var c=a.length;return c?a[Wc(0,c-1)]:n}function PE(a,c){return ka(yn(a),yi(c,0,a.length))}function zE(a){return ka(yn(a))}function Tc(a,c,p){(p!==n&&!pr(a[c],p)||p===n&&!(c in a))&&Gr(a,c,p)}function is(a,c,p){var C=a[c];(!(xt.call(a,c)&&pr(C,p))||p===n&&!(c in a))&&Gr(a,c,p)}function ba(a,c){for(var p=a.length;p--;)if(pr(a[p][0],c))return p;return-1}function HE(a,c,p,C){return oi(a,function(y,R,P){c(C,y,p(y),P)}),C}function xf(a,c){return a&&xr(c,Jt(c),a)}function WE(a,c){return a&&xr(c,An(c),a)}function Gr(a,c,p){c=="__proto__"&&ha?ha(a,c,{configurable:!0,enumerable:!0,value:p,writable:!0}):a[c]=p}function kc(a,c){for(var p=-1,C=c.length,y=re(C),R=a==null;++p<C;)y[p]=R?n:gu(a,c[p]);return y}function yi(a,c,p){return a===a&&(p!==n&&(a=a<=p?a:p),c!==n&&(a=a>=c?a:c)),a}function tr(a,c,p,C,y,R){var P,K=c&h,q=c&v,de=c&m;if(p&&(P=y?p(a,C,y,R):p(a)),P!==n)return P;if(!zt(a))return a;var _e=rt(a);if(_e){if(P=D0(a),!K)return yn(a,P)}else{var pe=fn(a),Le=pe==kr||pe==ze;if(ci(a))return Zf(a,K);if(pe==Mt||pe==dt||Le&&!y){if(P=q||Le?{}:vg(a),!K)return q?C0(a,WE(P,a)):E0(a,xf(P,a))}else{if(!Ut[pe])return y?a:{};P=R0(a,pe,K)}}R||(R=new vr);var Pe=R.get(a);if(Pe)return Pe;R.set(a,P),Yg(a)?a.forEach(function(Xe){P.add(tr(Xe,c,p,Xe,a,R))}):Wg(a)&&a.forEach(function(Xe,gt){P.set(gt,tr(Xe,c,p,gt,a,R))});var Ve=de?q?eu:Jc:q?An:Jt,ct=_e?n:Ve(a);return Qn(ct||a,function(Xe,gt){ct&&(gt=Xe,Xe=a[gt]),is(P,gt,tr(Xe,c,p,gt,a,R))}),P}function BE(a){var c=Jt(a);return function(p){return Sf(p,a,c)}}function Sf(a,c,p){var C=p.length;if(a==null)return!C;for(a=Tt(a);C--;){var y=p[C],R=c[y],P=a[y];if(P===n&&!(y in a)||!R(P))return!1}return!0}function Lf(a,c,p){if(typeof a!="function")throw new Jn(s);return ds(function(){a.apply(n,p)},c)}function os(a,c,p,C){var y=-1,R=ia,P=!0,K=a.length,q=[],de=c.length;if(!K)return q;p&&(c=Pt(c,Dn(p))),C?(R=Cc,P=!1):c.length>=i&&(R=Qo,P=!1,c=new wi(c));e:for(;++y<K;){var _e=a[y],pe=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,P&&pe===pe){for(var Le=de;Le--;)if(c[Le]===pe)continue e;q.push(_e)}else R(c,pe,C)||q.push(_e)}return q}var oi=ng(Ar),Nf=ng(Uc,!0);function YE(a,c){var p=!0;return oi(a,function(C,y,R){return p=!!c(C,y,R),p}),p}function Ia(a,c,p){for(var C=-1,y=a.length;++C<y;){var R=a[C],P=c(R);if(P!=null&&(K===n?P===P&&!Tn(P):p(P,K)))var K=P,q=R}return q}function jE(a,c,p,C){var y=a.length;for(p=at(p),p<0&&(p=-p>y?0:y+p),C=C===n||C>y?y:at(C),C<0&&(C+=y),C=p>C?0:Kg(C);p<C;)a[p++]=c;return a}function Df(a,c){var p=[];return oi(a,function(C,y,R){c(C,y,R)&&p.push(C)}),p}function an(a,c,p,C,y){var R=-1,P=a.length;for(p||(p=k0),y||(y=[]);++R<P;){var K=a[R];c>0&&p(K)?c>1?an(K,c-1,p,C,y):ni(y,K):C||(y[y.length]=K)}return y}var Mc=rg(),Rf=rg(!0);function Ar(a,c){return a&&Mc(a,c,Jt)}function Uc(a,c){return a&&Rf(a,c,Jt)}function wa(a,c){return ti(c,function(p){return zr(a[p])})}function Oi(a,c){c=ai(c,a);for(var p=0,C=c.length;a!=null&&p<C;)a=a[Sr(c[p++])];return p&&p==C?a:n}function Tf(a,c,p){var C=c(a);return rt(a)?C:ni(C,p(a))}function vn(a){return a==null?a===n?tc:He:bi&&bi in Tt(a)?S0(a):z0(a)}function Gc(a,c){return a>c}function KE(a,c){return a!=null&&xt.call(a,c)}function VE(a,c){return a!=null&&c in Tt(a)}function XE(a,c,p){return a>=_n(c,p)&&a<Zt(c,p)}function $c(a,c,p){for(var C=p?Cc:ia,y=a[0].length,R=a.length,P=R,K=re(R),q=1/0,de=[];P--;){var _e=a[P];P&&c&&(_e=Pt(_e,Dn(c))),q=_n(_e.length,q),K[P]=!p&&(c||y>=120&&_e.length>=120)?new wi(P&&_e):n}_e=a[0];var pe=-1,Le=K[0];e:for(;++pe<y&&de.length<q;){var Pe=_e[pe],Ve=c?c(Pe):Pe;if(Pe=p||Pe!==0?Pe:0,!(Le?Qo(Le,Ve):C(de,Ve,p))){for(P=R;--P;){var ct=K[P];if(!(ct?Qo(ct,Ve):C(a[P],Ve,p)))continue e}Le&&Le.push(Ve),de.push(Pe)}}return de}function qE(a,c,p,C){return Ar(a,function(y,R,P){c(C,p(y),R,P)}),C}function ss(a,c,p){c=ai(c,a),a=Cg(a,c);var C=a==null?a:a[Sr(rr(c))];return C==null?n:Nn(C,a,p)}function kf(a){return Bt(a)&&vn(a)==dt}function ZE(a){return Bt(a)&&vn(a)==Zo}function QE(a){return Bt(a)&&vn(a)==dn}function as(a,c,p,C,y){return a===c?!0:a==null||c==null||!Bt(a)&&!Bt(c)?a!==a&&c!==c:JE(a,c,p,C,as,y)}function JE(a,c,p,C,y,R){var P=rt(a),K=rt(c),q=P?bt:fn(a),de=K?bt:fn(c);q=q==dt?Mt:q,de=de==dt?Mt:de;var _e=q==Mt,pe=de==Mt,Le=q==de;if(Le&&ci(a)){if(!ci(c))return!1;P=!0,_e=!1}if(Le&&!_e)return R||(R=new vr),P||no(a)?fg(a,c,p,C,y,R):A0(a,c,q,p,C,y,R);if(!(p&E)){var Pe=_e&&xt.call(a,"__wrapped__"),Ve=pe&&xt.call(c,"__wrapped__");if(Pe||Ve){var ct=Pe?a.value():a,Xe=Ve?c.value():c;return R||(R=new vr),y(ct,Xe,p,C,R)}}return Le?(R||(R=new vr),x0(a,c,p,C,y,R)):!1}function e0(a){return Bt(a)&&fn(a)==ye}function Fc(a,c,p,C){var y=p.length,R=y,P=!C;if(a==null)return!R;for(a=Tt(a);y--;){var K=p[y];if(P&&K[2]?K[1]!==a[K[0]]:!(K[0]in a))return!1}for(;++y<R;){K=p[y];var q=K[0],de=a[q],_e=K[1];if(P&&K[2]){if(de===n&&!(q in a))return!1}else{var pe=new vr;if(C)var Le=C(de,_e,q,a,c,pe);if(!(Le===n?as(_e,de,E|I,C,pe):Le))return!1}}return!0}function Mf(a){if(!zt(a)||U0(a))return!1;var c=zr(a)?eE:Bm;return c.test(xi(a))}function t0(a){return Bt(a)&&vn(a)==mi}function n0(a){return Bt(a)&&fn(a)==wn}function r0(a){return Bt(a)&&Pa(a.length)&&!!$t[vn(a)]}function Uf(a){return typeof a=="function"?a:a==null?xn:typeof a=="object"?rt(a)?Ff(a[0],a[1]):$f(a):ih(a)}function Pc(a){if(!us(a))return sE(a);var c=[];for(var p in Tt(a))xt.call(a,p)&&p!="constructor"&&c.push(p);return c}function i0(a){if(!zt(a))return P0(a);var c=us(a),p=[];for(var C in a)C=="constructor"&&(c||!xt.call(a,C))||p.push(C);return p}function zc(a,c){return a<c}function Gf(a,c){var p=-1,C=On(a)?re(a.length):[];return oi(a,function(y,R,P){C[++p]=c(y,R,P)}),C}function $f(a){var c=nu(a);return c.length==1&&c[0][2]?mg(c[0][0],c[0][1]):function(p){return p===a||Fc(p,a,c)}}function Ff(a,c){return iu(a)&&pg(c)?mg(Sr(a),c):function(p){var C=gu(p,a);return C===n&&C===c?hu(p,a):as(c,C,E|I)}}function ya(a,c,p,C,y){a!==c&&Mc(c,function(R,P){if(y||(y=new vr),zt(R))o0(a,c,P,p,ya,C,y);else{var K=C?C(su(a,P),R,P+"",a,c,y):n;K===n&&(K=R),Tc(a,P,K)}},An)}function o0(a,c,p,C,y,R,P){var K=su(a,p),q=su(c,p),de=P.get(q);if(de){Tc(a,p,de);return}var _e=R?R(K,q,p+"",a,c,P):n,pe=_e===n;if(pe){var Le=rt(q),Pe=!Le&&ci(q),Ve=!Le&&!Pe&&no(q);_e=q,Le||Pe||Ve?rt(K)?_e=K:jt(K)?_e=yn(K):Pe?(pe=!1,_e=Zf(q,!0)):Ve?(pe=!1,_e=Qf(q,!0)):_e=[]:_s(q)||Si(q)?(_e=K,Si(K)?_e=Vg(K):(!zt(K)||zr(K))&&(_e=vg(q))):pe=!1}pe&&(P.set(q,_e),y(_e,q,C,R,P),P.delete(q)),Tc(a,p,_e)}function Pf(a,c){var p=a.length;if(p)return c+=c<0?p:0,Pr(c,p)?a[c]:n}function zf(a,c,p){c.length?c=Pt(c,function(R){return rt(R)?function(P){return Oi(P,R.length===1?R[0]:R)}:R}):c=[xn];var C=-1;c=Pt(c,Dn(Ke()));var y=Gf(a,function(R,P,K){var q=Pt(c,function(de){return de(R)});return{criteria:q,index:++C,value:R}});return R1(y,function(R,P){return m0(R,P,p)})}function s0(a,c){return Hf(a,c,function(p,C){return hu(a,C)})}function Hf(a,c,p){for(var C=-1,y=c.length,R={};++C<y;){var P=c[C],K=Oi(a,P);p(K,P)&&ls(R,ai(P,a),K)}return R}function a0(a){return function(c){return Oi(c,a)}}function Hc(a,c,p,C){var y=C?D1:Yi,R=-1,P=c.length,K=a;for(a===c&&(c=yn(c)),p&&(K=Pt(a,Dn(p)));++R<P;)for(var q=0,de=c[R],_e=p?p(de):de;(q=y(K,_e,q,C))>-1;)K!==a&&ga.call(K,q,1),ga.call(a,q,1);return a}function Wf(a,c){for(var p=a?c.length:0,C=p-1;p--;){var y=c[p];if(p==C||y!==R){var R=y;Pr(y)?ga.call(a,y,1):jc(a,y)}}return a}function Wc(a,c){return a+pa(wf()*(c-a+1))}function l0(a,c,p,C){for(var y=-1,R=Zt(va((c-a)/(p||1)),0),P=re(R);R--;)P[C?R:++y]=a,a+=p;return P}function Bc(a,c){var p="";if(!a||c<1||c>Se)return p;do c%2&&(p+=a),c=pa(c/2),c&&(a+=a);while(c);return p}function _t(a,c){return au(Eg(a,c,xn),a+"")}function c0(a){return Af(ro(a))}function u0(a,c){var p=ro(a);return ka(p,yi(c,0,p.length))}function ls(a,c,p,C){if(!zt(a))return a;c=ai(c,a);for(var y=-1,R=c.length,P=R-1,K=a;K!=null&&++y<R;){var q=Sr(c[y]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return a;if(y!=P){var _e=K[q];de=C?C(_e,q,K):n,de===n&&(de=zt(_e)?_e:Pr(c[y+1])?[]:{})}is(K,q,de),K=K[q]}return a}var Bf=ma?function(a,c){return ma.set(a,c),a}:xn,d0=ha?function(a,c){return ha(a,"toString",{configurable:!0,enumerable:!1,value:pu(c),writable:!0})}:xn;function _0(a){return ka(ro(a))}function nr(a,c,p){var C=-1,y=a.length;c<0&&(c=-c>y?0:y+c),p=p>y?y:p,p<0&&(p+=y),y=c>p?0:p-c>>>0,c>>>=0;for(var R=re(y);++C<y;)R[C]=a[C+c];return R}function f0(a,c){var p;return oi(a,function(C,y,R){return p=c(C,y,R),!p}),!!p}function Oa(a,c,p){var C=0,y=a==null?C:a.length;if(typeof c=="number"&&c===c&&y<=ut){for(;C<y;){var R=C+y>>>1,P=a[R];P!==null&&!Tn(P)&&(p?P<=c:P<c)?C=R+1:y=R}return y}return Yc(a,c,xn,p)}function Yc(a,c,p,C){var y=0,R=a==null?0:a.length;if(R===0)return 0;c=p(c);for(var P=c!==c,K=c===null,q=Tn(c),de=c===n;y<R;){var _e=pa((y+R)/2),pe=p(a[_e]),Le=pe!==n,Pe=pe===null,Ve=pe===pe,ct=Tn(pe);if(P)var Xe=C||Ve;else de?Xe=Ve&&(C||Le):K?Xe=Ve&&Le&&(C||!Pe):q?Xe=Ve&&Le&&!Pe&&(C||!ct):Pe||ct?Xe=!1:Xe=C?pe<=c:pe<c;Xe?y=_e+1:R=_e}return _n(R,st)}function Yf(a,c){for(var p=-1,C=a.length,y=0,R=[];++p<C;){var P=a[p],K=c?c(P):P;if(!p||!pr(K,q)){var q=K;R[y++]=P===0?0:P}}return R}function jf(a){return typeof a=="number"?a:Tn(a)?Re:+a}function Rn(a){if(typeof a=="string")return a;if(rt(a))return Pt(a,Rn)+"";if(Tn(a))return yf?yf.call(a):"";var c=a+"";return c=="0"&&1/a==-1/0?"-0":c}function si(a,c,p){var C=-1,y=ia,R=a.length,P=!0,K=[],q=K;if(p)P=!1,y=Cc;else if(R>=i){var de=c?null:y0(a);if(de)return sa(de);P=!1,y=Qo,q=new wi}else q=c?[]:K;e:for(;++C<R;){var _e=a[C],pe=c?c(_e):_e;if(_e=p||_e!==0?_e:0,P&&pe===pe){for(var Le=q.length;Le--;)if(q[Le]===pe)continue e;c&&q.push(pe),K.push(_e)}else y(q,pe,p)||(q!==K&&q.push(pe),K.push(_e))}return K}function jc(a,c){return c=ai(c,a),a=Cg(a,c),a==null||delete a[Sr(rr(c))]}function Kf(a,c,p,C){return ls(a,c,p(Oi(a,c)),C)}function Aa(a,c,p,C){for(var y=a.length,R=C?y:-1;(C?R--:++R<y)&&c(a[R],R,a););return p?nr(a,C?0:R,C?R+1:y):nr(a,C?R+1:0,C?y:R)}function Vf(a,c){var p=a;return p instanceof ht&&(p=p.value()),bc(c,function(C,y){return y.func.apply(y.thisArg,ni([C],y.args))},p)}function Kc(a,c,p){var C=a.length;if(C<2)return C?si(a[0]):[];for(var y=-1,R=re(C);++y<C;)for(var P=a[y],K=-1;++K<C;)K!=y&&(R[y]=os(R[y]||P,a[K],c,p));return si(an(R,1),c,p)}function Xf(a,c,p){for(var C=-1,y=a.length,R=c.length,P={};++C<y;){var K=C<R?c[C]:n;p(P,a[C],K)}return P}function Vc(a){return jt(a)?a:[]}function Xc(a){return typeof a=="function"?a:xn}function ai(a,c){return rt(a)?a:iu(a,c)?[a]:yg(Ot(a))}var g0=_t;function li(a,c,p){var C=a.length;return p=p===n?C:p,!c&&p>=C?a:nr(a,c,p)}var qf=tE||function(a){return sn.clearTimeout(a)};function Zf(a,c){if(c)return a.slice();var p=a.length,C=mf?mf(p):new a.constructor(p);return a.copy(C),C}function qc(a){var c=new a.constructor(a.byteLength);return new _a(c).set(new _a(a)),c}function h0(a,c){var p=c?qc(a.buffer):a.buffer;return new a.constructor(p,a.byteOffset,a.byteLength)}function v0(a){var c=new a.constructor(a.source,T_.exec(a));return c.lastIndex=a.lastIndex,c}function p0(a){return rs?Tt(rs.call(a)):{}}function Qf(a,c){var p=c?qc(a.buffer):a.buffer;return new a.constructor(p,a.byteOffset,a.length)}function Jf(a,c){if(a!==c){var p=a!==n,C=a===null,y=a===a,R=Tn(a),P=c!==n,K=c===null,q=c===c,de=Tn(c);if(!K&&!de&&!R&&a>c||R&&P&&q&&!K&&!de||C&&P&&q||!p&&q||!y)return 1;if(!C&&!R&&!de&&a<c||de&&p&&y&&!C&&!R||K&&p&&y||!P&&y||!q)return-1}return 0}function m0(a,c,p){for(var C=-1,y=a.criteria,R=c.criteria,P=y.length,K=p.length;++C<P;){var q=Jf(y[C],R[C]);if(q){if(C>=K)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return a.index-c.index}function eg(a,c,p,C){for(var y=-1,R=a.length,P=p.length,K=-1,q=c.length,de=Zt(R-P,0),_e=re(q+de),pe=!C;++K<q;)_e[K]=c[K];for(;++y<P;)(pe||y<R)&&(_e[p[y]]=a[y]);for(;de--;)_e[K++]=a[y++];return _e}function tg(a,c,p,C){for(var y=-1,R=a.length,P=-1,K=p.length,q=-1,de=c.length,_e=Zt(R-K,0),pe=re(_e+de),Le=!C;++y<_e;)pe[y]=a[y];for(var Pe=y;++q<de;)pe[Pe+q]=c[q];for(;++P<K;)(Le||y<R)&&(pe[Pe+p[P]]=a[y++]);return pe}function yn(a,c){var p=-1,C=a.length;for(c||(c=re(C));++p<C;)c[p]=a[p];return c}function xr(a,c,p,C){var y=!p;p||(p={});for(var R=-1,P=c.length;++R<P;){var K=c[R],q=C?C(p[K],a[K],K,p,a):n;q===n&&(q=a[K]),y?Gr(p,K,q):is(p,K,q)}return p}function E0(a,c){return xr(a,ru(a),c)}function C0(a,c){return xr(a,gg(a),c)}function xa(a,c){return function(p,C){var y=rt(p)?O1:HE,R=c?c():{};return y(p,a,Ke(C,2),R)}}function Ji(a){return _t(function(c,p){var C=-1,y=p.length,R=y>1?p[y-1]:n,P=y>2?p[2]:n;for(R=a.length>3&&typeof R=="function"?(y--,R):n,P&&pn(p[0],p[1],P)&&(R=y<3?n:R,y=1),c=Tt(c);++C<y;){var K=p[C];K&&a(c,K,C,R)}return c})}function ng(a,c){return function(p,C){if(p==null)return p;if(!On(p))return a(p,C);for(var y=p.length,R=c?y:-1,P=Tt(p);(c?R--:++R<y)&&C(P[R],R,P)!==!1;);return p}}function rg(a){return function(c,p,C){for(var y=-1,R=Tt(c),P=C(c),K=P.length;K--;){var q=P[a?K:++y];if(p(R[q],q,R)===!1)break}return c}}function b0(a,c,p){var C=c&b,y=cs(a);function R(){var P=this&&this!==sn&&this instanceof R?y:a;return P.apply(C?p:this,arguments)}return R}function ig(a){return function(c){c=Ot(c);var p=ji(c)?hr(c):n,C=p?p[0]:c.charAt(0),y=p?li(p,1).join(""):c.slice(1);return C[a]()+y}}function eo(a){return function(c){return bc(nh(th(c).replace(d1,"")),a,"")}}function cs(a){return function(){var c=arguments;switch(c.length){case 0:return new a;case 1:return new a(c[0]);case 2:return new a(c[0],c[1]);case 3:return new a(c[0],c[1],c[2]);case 4:return new a(c[0],c[1],c[2],c[3]);case 5:return new a(c[0],c[1],c[2],c[3],c[4]);case 6:return new a(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var p=Qi(a.prototype),C=a.apply(p,c);return zt(C)?C:p}}function I0(a,c,p){var C=cs(a);function y(){for(var R=arguments.length,P=re(R),K=R,q=to(y);K--;)P[K]=arguments[K];var de=R<3&&P[0]!==q&&P[R-1]!==q?[]:ri(P,q);if(R-=de.length,R<p)return cg(a,c,Sa,y.placeholder,n,P,de,n,n,p-R);var _e=this&&this!==sn&&this instanceof y?C:a;return Nn(_e,this,P)}return y}function og(a){return function(c,p,C){var y=Tt(c);if(!On(c)){var R=Ke(p,3);c=Jt(c),p=function(K){return R(y[K],K,y)}}var P=a(c,p,C);return P>-1?y[R?c[P]:P]:n}}function sg(a){return Fr(function(c){var p=c.length,C=p,y=er.prototype.thru;for(a&&c.reverse();C--;){var R=c[C];if(typeof R!="function")throw new Jn(s);if(y&&!P&&Ra(R)=="wrapper")var P=new er([],!0)}for(C=P?C:p;++C<p;){R=c[C];var K=Ra(R),q=K=="wrapper"?tu(R):n;q&&ou(q[0])&&q[1]==(M|T|U|$)&&!q[4].length&&q[9]==1?P=P[Ra(q[0])].apply(P,q[3]):P=R.length==1&&ou(R)?P[K]():P.thru(R)}return function(){var de=arguments,_e=de[0];if(P&&de.length==1&&rt(_e))return P.plant(_e).value();for(var pe=0,Le=p?c[pe].apply(this,de):_e;++pe<p;)Le=c[pe].call(this,Le);return Le}})}function Sa(a,c,p,C,y,R,P,K,q,de){var _e=c&M,pe=c&b,Le=c&w,Pe=c&(T|k),Ve=c&te,ct=Le?n:cs(a);function Xe(){for(var gt=arguments.length,vt=re(gt),kn=gt;kn--;)vt[kn]=arguments[kn];if(Pe)var mn=to(Xe),Mn=k1(vt,mn);if(C&&(vt=eg(vt,C,y,Pe)),R&&(vt=tg(vt,R,P,Pe)),gt-=Mn,Pe&&gt<de){var Kt=ri(vt,mn);return cg(a,c,Sa,Xe.placeholder,p,vt,Kt,K,q,de-gt)}var mr=pe?p:this,Wr=Le?mr[a]:a;return gt=vt.length,K?vt=H0(vt,K):Ve&&gt>1&&vt.reverse(),_e&&q<gt&&(vt.length=q),this&&this!==sn&&this instanceof Xe&&(Wr=ct||cs(Wr)),Wr.apply(mr,vt)}return Xe}function ag(a,c){return function(p,C){return qE(p,a,c(C),{})}}function La(a,c){return function(p,C){var y;if(p===n&&C===n)return c;if(p!==n&&(y=p),C!==n){if(y===n)return C;typeof p=="string"||typeof C=="string"?(p=Rn(p),C=Rn(C)):(p=jf(p),C=jf(C)),y=a(p,C)}return y}}function Zc(a){return Fr(function(c){return c=Pt(c,Dn(Ke())),_t(function(p){var C=this;return a(c,function(y){return Nn(y,C,p)})})})}function Na(a,c){c=c===n?" ":Rn(c);var p=c.length;if(p<2)return p?Bc(c,a):c;var C=Bc(c,va(a/Ki(c)));return ji(c)?li(hr(C),0,a).join(""):C.slice(0,a)}function w0(a,c,p,C){var y=c&b,R=cs(a);function P(){for(var K=-1,q=arguments.length,de=-1,_e=C.length,pe=re(_e+q),Le=this&&this!==sn&&this instanceof P?R:a;++de<_e;)pe[de]=C[de];for(;q--;)pe[de++]=arguments[++K];return Nn(Le,y?p:this,pe)}return P}function lg(a){return function(c,p,C){return C&&typeof C!="number"&&pn(c,p,C)&&(p=C=n),c=Hr(c),p===n?(p=c,c=0):p=Hr(p),C=C===n?c<p?1:-1:Hr(C),l0(c,p,C,a)}}function Da(a){return function(c,p){return typeof c=="string"&&typeof p=="string"||(c=ir(c),p=ir(p)),a(c,p)}}function cg(a,c,p,C,y,R,P,K,q,de){var _e=c&T,pe=_e?P:n,Le=_e?n:P,Pe=_e?R:n,Ve=_e?n:R;c|=_e?U:j,c&=~(_e?j:U),c&A||(c&=-4);var ct=[a,c,y,Pe,pe,Ve,Le,K,q,de],Xe=p.apply(n,ct);return ou(a)&&bg(Xe,ct),Xe.placeholder=C,Ig(Xe,a,c)}function Qc(a){var c=qt[a];return function(p,C){if(p=ir(p),C=C==null?0:_n(at(C),292),C&&If(p)){var y=(Ot(p)+"e").split("e"),R=c(y[0]+"e"+(+y[1]+C));return y=(Ot(R)+"e").split("e"),+(y[0]+"e"+(+y[1]-C))}return c(p)}}var y0=qi&&1/sa(new qi([,-0]))[1]==Oe?function(a){return new qi(a)}:Cu;function ug(a){return function(c){var p=fn(c);return p==ye?Sc(c):p==wn?z1(c):T1(c,a(c))}}function $r(a,c,p,C,y,R,P,K){var q=c&w;if(!q&&typeof a!="function")throw new Jn(s);var de=C?C.length:0;if(de||(c&=-97,C=y=n),P=P===n?P:Zt(at(P),0),K=K===n?K:at(K),de-=y?y.length:0,c&j){var _e=C,pe=y;C=y=n}var Le=q?n:tu(a),Pe=[a,c,p,C,y,_e,pe,R,P,K];if(Le&&F0(Pe,Le),a=Pe[0],c=Pe[1],p=Pe[2],C=Pe[3],y=Pe[4],K=Pe[9]=Pe[9]===n?q?0:a.length:Zt(Pe[9]-de,0),!K&&c&(T|k)&&(c&=-25),!c||c==b)var Ve=b0(a,c,p);else c==T||c==k?Ve=I0(a,c,K):(c==U||c==(b|U))&&!y.length?Ve=w0(a,c,p,C):Ve=Sa.apply(n,Pe);var ct=Le?Bf:bg;return Ig(ct(Ve,Pe),a,c)}function dg(a,c,p,C){return a===n||pr(a,Xi[p])&&!xt.call(C,p)?c:a}function _g(a,c,p,C,y,R){return zt(a)&&zt(c)&&(R.set(c,a),ya(a,c,n,_g,R),R.delete(c)),a}function O0(a){return _s(a)?n:a}function fg(a,c,p,C,y,R){var P=p&E,K=a.length,q=c.length;if(K!=q&&!(P&&q>K))return!1;var de=R.get(a),_e=R.get(c);if(de&&_e)return de==c&&_e==a;var pe=-1,Le=!0,Pe=p&I?new wi:n;for(R.set(a,c),R.set(c,a);++pe<K;){var Ve=a[pe],ct=c[pe];if(C)var Xe=P?C(ct,Ve,pe,c,a,R):C(Ve,ct,pe,a,c,R);if(Xe!==n){if(Xe)continue;Le=!1;break}if(Pe){if(!Ic(c,function(gt,vt){if(!Qo(Pe,vt)&&(Ve===gt||y(Ve,gt,p,C,R)))return Pe.push(vt)})){Le=!1;break}}else if(!(Ve===ct||y(Ve,ct,p,C,R))){Le=!1;break}}return R.delete(a),R.delete(c),Le}function A0(a,c,p,C,y,R,P){switch(p){case Wi:if(a.byteLength!=c.byteLength||a.byteOffset!=c.byteOffset)return!1;a=a.buffer,c=c.buffer;case Zo:return!(a.byteLength!=c.byteLength||!R(new _a(a),new _a(c)));case In:case dn:case Te:return pr(+a,+c);case Or:return a.name==c.name&&a.message==c.message;case mi:case Ei:return a==c+"";case ye:var K=Sc;case wn:var q=C&E;if(K||(K=sa),a.size!=c.size&&!q)return!1;var de=P.get(a);if(de)return de==c;C|=I,P.set(a,c);var _e=fg(K(a),K(c),C,y,R,P);return P.delete(a),_e;case Hi:if(rs)return rs.call(a)==rs.call(c)}return!1}function x0(a,c,p,C,y,R){var P=p&E,K=Jc(a),q=K.length,de=Jc(c),_e=de.length;if(q!=_e&&!P)return!1;for(var pe=q;pe--;){var Le=K[pe];if(!(P?Le in c:xt.call(c,Le)))return!1}var Pe=R.get(a),Ve=R.get(c);if(Pe&&Ve)return Pe==c&&Ve==a;var ct=!0;R.set(a,c),R.set(c,a);for(var Xe=P;++pe<q;){Le=K[pe];var gt=a[Le],vt=c[Le];if(C)var kn=P?C(vt,gt,Le,c,a,R):C(gt,vt,Le,a,c,R);if(!(kn===n?gt===vt||y(gt,vt,p,C,R):kn)){ct=!1;break}Xe||(Xe=Le=="constructor")}if(ct&&!Xe){var mn=a.constructor,Mn=c.constructor;mn!=Mn&&"constructor"in a&&"constructor"in c&&!(typeof mn=="function"&&mn instanceof mn&&typeof Mn=="function"&&Mn instanceof Mn)&&(ct=!1)}return R.delete(a),R.delete(c),ct}function Fr(a){return au(Eg(a,n,Sg),a+"")}function Jc(a){return Tf(a,Jt,ru)}function eu(a){return Tf(a,An,gg)}var tu=ma?function(a){return ma.get(a)}:Cu;function Ra(a){for(var c=a.name+"",p=Zi[c],C=xt.call(Zi,c)?p.length:0;C--;){var y=p[C],R=y.func;if(R==null||R==a)return y.name}return c}function to(a){var c=xt.call(N,"placeholder")?N:a;return c.placeholder}function Ke(){var a=N.iteratee||mu;return a=a===mu?Uf:a,arguments.length?a(arguments[0],arguments[1]):a}function Ta(a,c){var p=a.__data__;return M0(c)?p[typeof c=="string"?"string":"hash"]:p.map}function nu(a){for(var c=Jt(a),p=c.length;p--;){var C=c[p],y=a[C];c[p]=[C,y,pg(y)]}return c}function Ai(a,c){var p=$1(a,c);return Mf(p)?p:n}function S0(a){var c=xt.call(a,bi),p=a[bi];try{a[bi]=n;var C=!0}catch{}var y=ua.call(a);return C&&(c?a[bi]=p:delete a[bi]),y}var ru=Nc?function(a){return a==null?[]:(a=Tt(a),ti(Nc(a),function(c){return Cf.call(a,c)}))}:bu,gg=Nc?function(a){for(var c=[];a;)ni(c,ru(a)),a=fa(a);return c}:bu,fn=vn;(Dc&&fn(new Dc(new ArrayBuffer(1)))!=Wi||es&&fn(new es)!=ye||Rc&&fn(Rc.resolve())!=Js||qi&&fn(new qi)!=wn||ts&&fn(new ts)!=tt)&&(fn=function(a){var c=vn(a),p=c==Mt?a.constructor:n,C=p?xi(p):"";if(C)switch(C){case uE:return Wi;case dE:return ye;case _E:return Js;case fE:return wn;case gE:return tt}return c});function L0(a,c,p){for(var C=-1,y=p.length;++C<y;){var R=p[C],P=R.size;switch(R.type){case"drop":a+=P;break;case"dropRight":c-=P;break;case"take":c=_n(c,a+P);break;case"takeRight":a=Zt(a,c-P);break}}return{start:a,end:c}}function N0(a){var c=a.match(Um);return c?c[1].split(Gm):[]}function hg(a,c,p){c=ai(c,a);for(var C=-1,y=c.length,R=!1;++C<y;){var P=Sr(c[C]);if(!(R=a!=null&&p(a,P)))break;a=a[P]}return R||++C!=y?R:(y=a==null?0:a.length,!!y&&Pa(y)&&Pr(P,y)&&(rt(a)||Si(a)))}function D0(a){var c=a.length,p=new a.constructor(c);return c&&typeof a[0]=="string"&&xt.call(a,"index")&&(p.index=a.index,p.input=a.input),p}function vg(a){return typeof a.constructor=="function"&&!us(a)?Qi(fa(a)):{}}function R0(a,c,p){var C=a.constructor;switch(c){case Zo:return qc(a);case In:case dn:return new C(+a);case Wi:return h0(a,p);case nc:case rc:case ic:case oc:case sc:case ac:case lc:case cc:case uc:return Qf(a,p);case ye:return new C;case Te:case Ei:return new C(a);case mi:return v0(a);case wn:return new C;case Hi:return p0(a)}}function T0(a,c){var p=c.length;if(!p)return a;var C=p-1;return c[C]=(p>1?"& ":"")+c[C],c=c.join(p>2?", ":" "),a.replace(Mm,`{
/* [wrapped with `+c+`] */
`)}function k0(a){return rt(a)||Si(a)||!!(bf&&a&&a[bf])}function Pr(a,c){var p=typeof a;return c=c??Se,!!c&&(p=="number"||p!="symbol"&&jm.test(a))&&a>-1&&a%1==0&&a<c}function pn(a,c,p){if(!zt(p))return!1;var C=typeof c;return(C=="number"?On(p)&&Pr(c,p.length):C=="string"&&c in p)?pr(p[c],a):!1}function iu(a,c){if(rt(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||Tn(a)?!0:Dm.test(a)||!Nm.test(a)||c!=null&&a in Tt(c)}function M0(a){var c=typeof a;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?a!=="__proto__":a===null}function ou(a){var c=Ra(a),p=N[c];if(typeof p!="function"||!(c in ht.prototype))return!1;if(a===p)return!0;var C=tu(p);return!!C&&a===C[0]}function U0(a){return!!pf&&pf in a}var G0=la?zr:Iu;function us(a){var c=a&&a.constructor,p=typeof c=="function"&&c.prototype||Xi;return a===p}function pg(a){return a===a&&!zt(a)}function mg(a,c){return function(p){return p==null?!1:p[a]===c&&(c!==n||a in Tt(p))}}function $0(a){var c=$a(a,function(C){return p.size===d&&p.clear(),C}),p=c.cache;return c}function F0(a,c){var p=a[1],C=c[1],y=p|C,R=y<(b|w|M),P=C==M&&p==T||C==M&&p==$&&a[7].length<=c[8]||C==(M|$)&&c[7].length<=c[8]&&p==T;if(!(R||P))return a;C&b&&(a[2]=c[2],y|=p&b?0:A);var K=c[3];if(K){var q=a[3];a[3]=q?eg(q,K,c[4]):K,a[4]=q?ri(a[3],g):c[4]}return K=c[5],K&&(q=a[5],a[5]=q?tg(q,K,c[6]):K,a[6]=q?ri(a[5],g):c[6]),K=c[7],K&&(a[7]=K),C&M&&(a[8]=a[8]==null?c[8]:_n(a[8],c[8])),a[9]==null&&(a[9]=c[9]),a[0]=c[0],a[1]=y,a}function P0(a){var c=[];if(a!=null)for(var p in Tt(a))c.push(p);return c}function z0(a){return ua.call(a)}function Eg(a,c,p){return c=Zt(c===n?a.length-1:c,0),function(){for(var C=arguments,y=-1,R=Zt(C.length-c,0),P=re(R);++y<R;)P[y]=C[c+y];y=-1;for(var K=re(c+1);++y<c;)K[y]=C[y];return K[c]=p(P),Nn(a,this,K)}}function Cg(a,c){return c.length<2?a:Oi(a,nr(c,0,-1))}function H0(a,c){for(var p=a.length,C=_n(c.length,p),y=yn(a);C--;){var R=c[C];a[C]=Pr(R,p)?y[R]:n}return a}function su(a,c){if(!(c==="constructor"&&typeof a[c]=="function")&&c!="__proto__")return a[c]}var bg=wg(Bf),ds=rE||function(a,c){return sn.setTimeout(a,c)},au=wg(d0);function Ig(a,c,p){var C=c+"";return au(a,T0(C,W0(N0(C),p)))}function wg(a){var c=0,p=0;return function(){var C=aE(),y=we-(C-p);if(p=C,y>0){if(++c>=ce)return arguments[0]}else c=0;return a.apply(n,arguments)}}function ka(a,c){var p=-1,C=a.length,y=C-1;for(c=c===n?C:c;++p<c;){var R=Wc(p,y),P=a[R];a[R]=a[p],a[p]=P}return a.length=c,a}var yg=$0(function(a){var c=[];return a.charCodeAt(0)===46&&c.push(""),a.replace(Rm,function(p,C,y,R){c.push(y?R.replace(Pm,"$1"):C||p)}),c});function Sr(a){if(typeof a=="string"||Tn(a))return a;var c=a+"";return c=="0"&&1/a==-1/0?"-0":c}function xi(a){if(a!=null){try{return ca.call(a)}catch{}try{return a+""}catch{}}return""}function W0(a,c){return Qn(Ct,function(p){var C="_."+p[0];c&p[1]&&!ia(a,C)&&a.push(C)}),a.sort()}function Og(a){if(a instanceof ht)return a.clone();var c=new er(a.__wrapped__,a.__chain__);return c.__actions__=yn(a.__actions__),c.__index__=a.__index__,c.__values__=a.__values__,c}function B0(a,c,p){(p?pn(a,c,p):c===n)?c=1:c=Zt(at(c),0);var C=a==null?0:a.length;if(!C||c<1)return[];for(var y=0,R=0,P=re(va(C/c));y<C;)P[R++]=nr(a,y,y+=c);return P}function Y0(a){for(var c=-1,p=a==null?0:a.length,C=0,y=[];++c<p;){var R=a[c];R&&(y[C++]=R)}return y}function j0(){var a=arguments.length;if(!a)return[];for(var c=re(a-1),p=arguments[0],C=a;C--;)c[C-1]=arguments[C];return ni(rt(p)?yn(p):[p],an(c,1))}var K0=_t(function(a,c){return jt(a)?os(a,an(c,1,jt,!0)):[]}),V0=_t(function(a,c){var p=rr(c);return jt(p)&&(p=n),jt(a)?os(a,an(c,1,jt,!0),Ke(p,2)):[]}),X0=_t(function(a,c){var p=rr(c);return jt(p)&&(p=n),jt(a)?os(a,an(c,1,jt,!0),n,p):[]});function q0(a,c,p){var C=a==null?0:a.length;return C?(c=p||c===n?1:at(c),nr(a,c<0?0:c,C)):[]}function Z0(a,c,p){var C=a==null?0:a.length;return C?(c=p||c===n?1:at(c),c=C-c,nr(a,0,c<0?0:c)):[]}function Q0(a,c){return a&&a.length?Aa(a,Ke(c,3),!0,!0):[]}function J0(a,c){return a&&a.length?Aa(a,Ke(c,3),!0):[]}function eC(a,c,p,C){var y=a==null?0:a.length;return y?(p&&typeof p!="number"&&pn(a,c,p)&&(p=0,C=y),jE(a,c,p,C)):[]}function Ag(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=p==null?0:at(p);return y<0&&(y=Zt(C+y,0)),oa(a,Ke(c,3),y)}function xg(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=C-1;return p!==n&&(y=at(p),y=p<0?Zt(C+y,0):_n(y,C-1)),oa(a,Ke(c,3),y,!0)}function Sg(a){var c=a==null?0:a.length;return c?an(a,1):[]}function tC(a){var c=a==null?0:a.length;return c?an(a,Oe):[]}function nC(a,c){var p=a==null?0:a.length;return p?(c=c===n?1:at(c),an(a,c)):[]}function rC(a){for(var c=-1,p=a==null?0:a.length,C={};++c<p;){var y=a[c];C[y[0]]=y[1]}return C}function Lg(a){return a&&a.length?a[0]:n}function iC(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=p==null?0:at(p);return y<0&&(y=Zt(C+y,0)),Yi(a,c,y)}function oC(a){var c=a==null?0:a.length;return c?nr(a,0,-1):[]}var sC=_t(function(a){var c=Pt(a,Vc);return c.length&&c[0]===a[0]?$c(c):[]}),aC=_t(function(a){var c=rr(a),p=Pt(a,Vc);return c===rr(p)?c=n:p.pop(),p.length&&p[0]===a[0]?$c(p,Ke(c,2)):[]}),lC=_t(function(a){var c=rr(a),p=Pt(a,Vc);return c=typeof c=="function"?c:n,c&&p.pop(),p.length&&p[0]===a[0]?$c(p,n,c):[]});function cC(a,c){return a==null?"":oE.call(a,c)}function rr(a){var c=a==null?0:a.length;return c?a[c-1]:n}function uC(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=C;return p!==n&&(y=at(p),y=y<0?Zt(C+y,0):_n(y,C-1)),c===c?W1(a,c,y):oa(a,cf,y,!0)}function dC(a,c){return a&&a.length?Pf(a,at(c)):n}var _C=_t(Ng);function Ng(a,c){return a&&a.length&&c&&c.length?Hc(a,c):a}function fC(a,c,p){return a&&a.length&&c&&c.length?Hc(a,c,Ke(p,2)):a}function gC(a,c,p){return a&&a.length&&c&&c.length?Hc(a,c,n,p):a}var hC=Fr(function(a,c){var p=a==null?0:a.length,C=kc(a,c);return Wf(a,Pt(c,function(y){return Pr(y,p)?+y:y}).sort(Jf)),C});function vC(a,c){var p=[];if(!(a&&a.length))return p;var C=-1,y=[],R=a.length;for(c=Ke(c,3);++C<R;){var P=a[C];c(P,C,a)&&(p.push(P),y.push(C))}return Wf(a,y),p}function lu(a){return a==null?a:cE.call(a)}function pC(a,c,p){var C=a==null?0:a.length;return C?(p&&typeof p!="number"&&pn(a,c,p)?(c=0,p=C):(c=c==null?0:at(c),p=p===n?C:at(p)),nr(a,c,p)):[]}function mC(a,c){return Oa(a,c)}function EC(a,c,p){return Yc(a,c,Ke(p,2))}function CC(a,c){var p=a==null?0:a.length;if(p){var C=Oa(a,c);if(C<p&&pr(a[C],c))return C}return-1}function bC(a,c){return Oa(a,c,!0)}function IC(a,c,p){return Yc(a,c,Ke(p,2),!0)}function wC(a,c){var p=a==null?0:a.length;if(p){var C=Oa(a,c,!0)-1;if(pr(a[C],c))return C}return-1}function yC(a){return a&&a.length?Yf(a):[]}function OC(a,c){return a&&a.length?Yf(a,Ke(c,2)):[]}function AC(a){var c=a==null?0:a.length;return c?nr(a,1,c):[]}function xC(a,c,p){return a&&a.length?(c=p||c===n?1:at(c),nr(a,0,c<0?0:c)):[]}function SC(a,c,p){var C=a==null?0:a.length;return C?(c=p||c===n?1:at(c),c=C-c,nr(a,c<0?0:c,C)):[]}function LC(a,c){return a&&a.length?Aa(a,Ke(c,3),!1,!0):[]}function NC(a,c){return a&&a.length?Aa(a,Ke(c,3)):[]}var DC=_t(function(a){return si(an(a,1,jt,!0))}),RC=_t(function(a){var c=rr(a);return jt(c)&&(c=n),si(an(a,1,jt,!0),Ke(c,2))}),TC=_t(function(a){var c=rr(a);return c=typeof c=="function"?c:n,si(an(a,1,jt,!0),n,c)});function kC(a){return a&&a.length?si(a):[]}function MC(a,c){return a&&a.length?si(a,Ke(c,2)):[]}function UC(a,c){return c=typeof c=="function"?c:n,a&&a.length?si(a,n,c):[]}function cu(a){if(!(a&&a.length))return[];var c=0;return a=ti(a,function(p){if(jt(p))return c=Zt(p.length,c),!0}),Ac(c,function(p){return Pt(a,wc(p))})}function Dg(a,c){if(!(a&&a.length))return[];var p=cu(a);return c==null?p:Pt(p,function(C){return Nn(c,n,C)})}var GC=_t(function(a,c){return jt(a)?os(a,c):[]}),$C=_t(function(a){return Kc(ti(a,jt))}),FC=_t(function(a){var c=rr(a);return jt(c)&&(c=n),Kc(ti(a,jt),Ke(c,2))}),PC=_t(function(a){var c=rr(a);return c=typeof c=="function"?c:n,Kc(ti(a,jt),n,c)}),zC=_t(cu);function HC(a,c){return Xf(a||[],c||[],is)}function WC(a,c){return Xf(a||[],c||[],ls)}var BC=_t(function(a){var c=a.length,p=c>1?a[c-1]:n;return p=typeof p=="function"?(a.pop(),p):n,Dg(a,p)});function Rg(a){var c=N(a);return c.__chain__=!0,c}function YC(a,c){return c(a),a}function Ma(a,c){return c(a)}var jC=Fr(function(a){var c=a.length,p=c?a[0]:0,C=this.__wrapped__,y=function(R){return kc(R,a)};return c>1||this.__actions__.length||!(C instanceof ht)||!Pr(p)?this.thru(y):(C=C.slice(p,+p+(c?1:0)),C.__actions__.push({func:Ma,args:[y],thisArg:n}),new er(C,this.__chain__).thru(function(R){return c&&!R.length&&R.push(n),R}))});function KC(){return Rg(this)}function VC(){return new er(this.value(),this.__chain__)}function XC(){this.__values__===n&&(this.__values__=jg(this.value()));var a=this.__index__>=this.__values__.length,c=a?n:this.__values__[this.__index__++];return{done:a,value:c}}function qC(){return this}function ZC(a){for(var c,p=this;p instanceof Ca;){var C=Og(p);C.__index__=0,C.__values__=n,c?y.__wrapped__=C:c=C;var y=C;p=p.__wrapped__}return y.__wrapped__=a,c}function QC(){var a=this.__wrapped__;if(a instanceof ht){var c=a;return this.__actions__.length&&(c=new ht(this)),c=c.reverse(),c.__actions__.push({func:Ma,args:[lu],thisArg:n}),new er(c,this.__chain__)}return this.thru(lu)}function JC(){return Vf(this.__wrapped__,this.__actions__)}var eb=xa(function(a,c,p){xt.call(a,p)?++a[p]:Gr(a,p,1)});function tb(a,c,p){var C=rt(a)?af:YE;return p&&pn(a,c,p)&&(c=n),C(a,Ke(c,3))}function nb(a,c){var p=rt(a)?ti:Df;return p(a,Ke(c,3))}var rb=og(Ag),ib=og(xg);function ob(a,c){return an(Ua(a,c),1)}function sb(a,c){return an(Ua(a,c),Oe)}function ab(a,c,p){return p=p===n?1:at(p),an(Ua(a,c),p)}function Tg(a,c){var p=rt(a)?Qn:oi;return p(a,Ke(c,3))}function kg(a,c){var p=rt(a)?A1:Nf;return p(a,Ke(c,3))}var lb=xa(function(a,c,p){xt.call(a,p)?a[p].push(c):Gr(a,p,[c])});function cb(a,c,p,C){a=On(a)?a:ro(a),p=p&&!C?at(p):0;var y=a.length;return p<0&&(p=Zt(y+p,0)),za(a)?p<=y&&a.indexOf(c,p)>-1:!!y&&Yi(a,c,p)>-1}var ub=_t(function(a,c,p){var C=-1,y=typeof c=="function",R=On(a)?re(a.length):[];return oi(a,function(P){R[++C]=y?Nn(c,P,p):ss(P,c,p)}),R}),db=xa(function(a,c,p){Gr(a,p,c)});function Ua(a,c){var p=rt(a)?Pt:Gf;return p(a,Ke(c,3))}function _b(a,c,p,C){return a==null?[]:(rt(c)||(c=c==null?[]:[c]),p=C?n:p,rt(p)||(p=p==null?[]:[p]),zf(a,c,p))}var fb=xa(function(a,c,p){a[p?0:1].push(c)},function(){return[[],[]]});function gb(a,c,p){var C=rt(a)?bc:df,y=arguments.length<3;return C(a,Ke(c,4),p,y,oi)}function hb(a,c,p){var C=rt(a)?x1:df,y=arguments.length<3;return C(a,Ke(c,4),p,y,Nf)}function vb(a,c){var p=rt(a)?ti:Df;return p(a,Fa(Ke(c,3)))}function pb(a){var c=rt(a)?Af:c0;return c(a)}function mb(a,c,p){(p?pn(a,c,p):c===n)?c=1:c=at(c);var C=rt(a)?PE:u0;return C(a,c)}function Eb(a){var c=rt(a)?zE:_0;return c(a)}function Cb(a){if(a==null)return 0;if(On(a))return za(a)?Ki(a):a.length;var c=fn(a);return c==ye||c==wn?a.size:Pc(a).length}function bb(a,c,p){var C=rt(a)?Ic:f0;return p&&pn(a,c,p)&&(c=n),C(a,Ke(c,3))}var Ib=_t(function(a,c){if(a==null)return[];var p=c.length;return p>1&&pn(a,c[0],c[1])?c=[]:p>2&&pn(c[0],c[1],c[2])&&(c=[c[0]]),zf(a,an(c,1),[])}),Ga=nE||function(){return sn.Date.now()};function wb(a,c){if(typeof c!="function")throw new Jn(s);return a=at(a),function(){if(--a<1)return c.apply(this,arguments)}}function Mg(a,c,p){return c=p?n:c,c=a&&c==null?a.length:c,$r(a,M,n,n,n,n,c)}function Ug(a,c){var p;if(typeof c!="function")throw new Jn(s);return a=at(a),function(){return--a>0&&(p=c.apply(this,arguments)),a<=1&&(c=n),p}}var uu=_t(function(a,c,p){var C=b;if(p.length){var y=ri(p,to(uu));C|=U}return $r(a,C,c,p,y)}),Gg=_t(function(a,c,p){var C=b|w;if(p.length){var y=ri(p,to(Gg));C|=U}return $r(c,C,a,p,y)});function $g(a,c,p){c=p?n:c;var C=$r(a,T,n,n,n,n,n,c);return C.placeholder=$g.placeholder,C}function Fg(a,c,p){c=p?n:c;var C=$r(a,k,n,n,n,n,n,c);return C.placeholder=Fg.placeholder,C}function Pg(a,c,p){var C,y,R,P,K,q,de=0,_e=!1,pe=!1,Le=!0;if(typeof a!="function")throw new Jn(s);c=ir(c)||0,zt(p)&&(_e=!!p.leading,pe="maxWait"in p,R=pe?Zt(ir(p.maxWait)||0,c):R,Le="trailing"in p?!!p.trailing:Le);function Pe(Kt){var mr=C,Wr=y;return C=y=n,de=Kt,P=a.apply(Wr,mr),P}function Ve(Kt){return de=Kt,K=ds(gt,c),_e?Pe(Kt):P}function ct(Kt){var mr=Kt-q,Wr=Kt-de,oh=c-mr;return pe?_n(oh,R-Wr):oh}function Xe(Kt){var mr=Kt-q,Wr=Kt-de;return q===n||mr>=c||mr<0||pe&&Wr>=R}function gt(){var Kt=Ga();if(Xe(Kt))return vt(Kt);K=ds(gt,ct(Kt))}function vt(Kt){return K=n,Le&&C?Pe(Kt):(C=y=n,P)}function kn(){K!==n&&qf(K),de=0,C=q=y=K=n}function mn(){return K===n?P:vt(Ga())}function Mn(){var Kt=Ga(),mr=Xe(Kt);if(C=arguments,y=this,q=Kt,mr){if(K===n)return Ve(q);if(pe)return qf(K),K=ds(gt,c),Pe(q)}return K===n&&(K=ds(gt,c)),P}return Mn.cancel=kn,Mn.flush=mn,Mn}var yb=_t(function(a,c){return Lf(a,1,c)}),Ob=_t(function(a,c,p){return Lf(a,ir(c)||0,p)});function Ab(a){return $r(a,te)}function $a(a,c){if(typeof a!="function"||c!=null&&typeof c!="function")throw new Jn(s);var p=function(){var C=arguments,y=c?c.apply(this,C):C[0],R=p.cache;if(R.has(y))return R.get(y);var P=a.apply(this,C);return p.cache=R.set(y,P)||R,P};return p.cache=new($a.Cache||Ur),p}$a.Cache=Ur;function Fa(a){if(typeof a!="function")throw new Jn(s);return function(){var c=arguments;switch(c.length){case 0:return!a.call(this);case 1:return!a.call(this,c[0]);case 2:return!a.call(this,c[0],c[1]);case 3:return!a.call(this,c[0],c[1],c[2])}return!a.apply(this,c)}}function xb(a){return Ug(2,a)}var Sb=g0(function(a,c){c=c.length==1&&rt(c[0])?Pt(c[0],Dn(Ke())):Pt(an(c,1),Dn(Ke()));var p=c.length;return _t(function(C){for(var y=-1,R=_n(C.length,p);++y<R;)C[y]=c[y].call(this,C[y]);return Nn(a,this,C)})}),du=_t(function(a,c){var p=ri(c,to(du));return $r(a,U,n,c,p)}),zg=_t(function(a,c){var p=ri(c,to(zg));return $r(a,j,n,c,p)}),Lb=Fr(function(a,c){return $r(a,$,n,n,n,c)});function Nb(a,c){if(typeof a!="function")throw new Jn(s);return c=c===n?c:at(c),_t(a,c)}function Db(a,c){if(typeof a!="function")throw new Jn(s);return c=c==null?0:Zt(at(c),0),_t(function(p){var C=p[c],y=li(p,0,c);return C&&ni(y,C),Nn(a,this,y)})}function Rb(a,c,p){var C=!0,y=!0;if(typeof a!="function")throw new Jn(s);return zt(p)&&(C="leading"in p?!!p.leading:C,y="trailing"in p?!!p.trailing:y),Pg(a,c,{leading:C,maxWait:c,trailing:y})}function Tb(a){return Mg(a,1)}function kb(a,c){return du(Xc(c),a)}function Mb(){if(!arguments.length)return[];var a=arguments[0];return rt(a)?a:[a]}function Ub(a){return tr(a,m)}function Gb(a,c){return c=typeof c=="function"?c:n,tr(a,m,c)}function $b(a){return tr(a,h|m)}function Fb(a,c){return c=typeof c=="function"?c:n,tr(a,h|m,c)}function Pb(a,c){return c==null||Sf(a,c,Jt(c))}function pr(a,c){return a===c||a!==a&&c!==c}var zb=Da(Gc),Hb=Da(function(a,c){return a>=c}),Si=kf(function(){return arguments}())?kf:function(a){return Bt(a)&&xt.call(a,"callee")&&!Cf.call(a,"callee")},rt=re.isArray,Wb=ef?Dn(ef):ZE;function On(a){return a!=null&&Pa(a.length)&&!zr(a)}function jt(a){return Bt(a)&&On(a)}function Bb(a){return a===!0||a===!1||Bt(a)&&vn(a)==In}var ci=iE||Iu,Yb=tf?Dn(tf):QE;function jb(a){return Bt(a)&&a.nodeType===1&&!_s(a)}function Kb(a){if(a==null)return!0;if(On(a)&&(rt(a)||typeof a=="string"||typeof a.splice=="function"||ci(a)||no(a)||Si(a)))return!a.length;var c=fn(a);if(c==ye||c==wn)return!a.size;if(us(a))return!Pc(a).length;for(var p in a)if(xt.call(a,p))return!1;return!0}function Vb(a,c){return as(a,c)}function Xb(a,c,p){p=typeof p=="function"?p:n;var C=p?p(a,c):n;return C===n?as(a,c,n,p):!!C}function _u(a){if(!Bt(a))return!1;var c=vn(a);return c==Or||c==yr||typeof a.message=="string"&&typeof a.name=="string"&&!_s(a)}function qb(a){return typeof a=="number"&&If(a)}function zr(a){if(!zt(a))return!1;var c=vn(a);return c==kr||c==ze||c==It||c==ea}function Hg(a){return typeof a=="number"&&a==at(a)}function Pa(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=Se}function zt(a){var c=typeof a;return a!=null&&(c=="object"||c=="function")}function Bt(a){return a!=null&&typeof a=="object"}var Wg=nf?Dn(nf):e0;function Zb(a,c){return a===c||Fc(a,c,nu(c))}function Qb(a,c,p){return p=typeof p=="function"?p:n,Fc(a,c,nu(c),p)}function Jb(a){return Bg(a)&&a!=+a}function eI(a){if(G0(a))throw new nt(o);return Mf(a)}function tI(a){return a===null}function nI(a){return a==null}function Bg(a){return typeof a=="number"||Bt(a)&&vn(a)==Te}function _s(a){if(!Bt(a)||vn(a)!=Mt)return!1;var c=fa(a);if(c===null)return!0;var p=xt.call(c,"constructor")&&c.constructor;return typeof p=="function"&&p instanceof p&&ca.call(p)==Q1}var fu=rf?Dn(rf):t0;function rI(a){return Hg(a)&&a>=-9007199254740991&&a<=Se}var Yg=of?Dn(of):n0;function za(a){return typeof a=="string"||!rt(a)&&Bt(a)&&vn(a)==Ei}function Tn(a){return typeof a=="symbol"||Bt(a)&&vn(a)==Hi}var no=sf?Dn(sf):r0;function iI(a){return a===n}function oI(a){return Bt(a)&&fn(a)==tt}function sI(a){return Bt(a)&&vn(a)==qo}var aI=Da(zc),lI=Da(function(a,c){return a<=c});function jg(a){if(!a)return[];if(On(a))return za(a)?hr(a):yn(a);if(Jo&&a[Jo])return P1(a[Jo]());var c=fn(a),p=c==ye?Sc:c==wn?sa:ro;return p(a)}function Hr(a){if(!a)return a===0?a:0;if(a=ir(a),a===Oe||a===-1/0){var c=a<0?-1:1;return c*Ae}return a===a?a:0}function at(a){var c=Hr(a),p=c%1;return c===c?p?c-p:c:0}function Kg(a){return a?yi(at(a),0,$e):0}function ir(a){if(typeof a=="number")return a;if(Tn(a))return Re;if(zt(a)){var c=typeof a.valueOf=="function"?a.valueOf():a;a=zt(c)?c+"":c}if(typeof a!="string")return a===0?a:+a;a=_f(a);var p=Wm.test(a);return p||Ym.test(a)?w1(a.slice(2),p?2:8):Hm.test(a)?Re:+a}function Vg(a){return xr(a,An(a))}function cI(a){return a?yi(at(a),-9007199254740991,Se):a===0?a:0}function Ot(a){return a==null?"":Rn(a)}var uI=Ji(function(a,c){if(us(c)||On(c)){xr(c,Jt(c),a);return}for(var p in c)xt.call(c,p)&&is(a,p,c[p])}),Xg=Ji(function(a,c){xr(c,An(c),a)}),Ha=Ji(function(a,c,p,C){xr(c,An(c),a,C)}),dI=Ji(function(a,c,p,C){xr(c,Jt(c),a,C)}),_I=Fr(kc);function fI(a,c){var p=Qi(a);return c==null?p:xf(p,c)}var gI=_t(function(a,c){a=Tt(a);var p=-1,C=c.length,y=C>2?c[2]:n;for(y&&pn(c[0],c[1],y)&&(C=1);++p<C;)for(var R=c[p],P=An(R),K=-1,q=P.length;++K<q;){var de=P[K],_e=a[de];(_e===n||pr(_e,Xi[de])&&!xt.call(a,de))&&(a[de]=R[de])}return a}),hI=_t(function(a){return a.push(n,_g),Nn(qg,n,a)});function vI(a,c){return lf(a,Ke(c,3),Ar)}function pI(a,c){return lf(a,Ke(c,3),Uc)}function mI(a,c){return a==null?a:Mc(a,Ke(c,3),An)}function EI(a,c){return a==null?a:Rf(a,Ke(c,3),An)}function CI(a,c){return a&&Ar(a,Ke(c,3))}function bI(a,c){return a&&Uc(a,Ke(c,3))}function II(a){return a==null?[]:wa(a,Jt(a))}function wI(a){return a==null?[]:wa(a,An(a))}function gu(a,c,p){var C=a==null?n:Oi(a,c);return C===n?p:C}function yI(a,c){return a!=null&&hg(a,c,KE)}function hu(a,c){return a!=null&&hg(a,c,VE)}var OI=ag(function(a,c,p){c!=null&&typeof c.toString!="function"&&(c=ua.call(c)),a[c]=p},pu(xn)),AI=ag(function(a,c,p){c!=null&&typeof c.toString!="function"&&(c=ua.call(c)),xt.call(a,c)?a[c].push(p):a[c]=[p]},Ke),xI=_t(ss);function Jt(a){return On(a)?Of(a):Pc(a)}function An(a){return On(a)?Of(a,!0):i0(a)}function SI(a,c){var p={};return c=Ke(c,3),Ar(a,function(C,y,R){Gr(p,c(C,y,R),C)}),p}function LI(a,c){var p={};return c=Ke(c,3),Ar(a,function(C,y,R){Gr(p,y,c(C,y,R))}),p}var NI=Ji(function(a,c,p){ya(a,c,p)}),qg=Ji(function(a,c,p,C){ya(a,c,p,C)}),DI=Fr(function(a,c){var p={};if(a==null)return p;var C=!1;c=Pt(c,function(R){return R=ai(R,a),C||(C=R.length>1),R}),xr(a,eu(a),p),C&&(p=tr(p,h|v|m,O0));for(var y=c.length;y--;)jc(p,c[y]);return p});function RI(a,c){return Zg(a,Fa(Ke(c)))}var TI=Fr(function(a,c){return a==null?{}:s0(a,c)});function Zg(a,c){if(a==null)return{};var p=Pt(eu(a),function(C){return[C]});return c=Ke(c),Hf(a,p,function(C,y){return c(C,y[0])})}function kI(a,c,p){c=ai(c,a);var C=-1,y=c.length;for(y||(y=1,a=n);++C<y;){var R=a==null?n:a[Sr(c[C])];R===n&&(C=y,R=p),a=zr(R)?R.call(a):R}return a}function MI(a,c,p){return a==null?a:ls(a,c,p)}function UI(a,c,p,C){return C=typeof C=="function"?C:n,a==null?a:ls(a,c,p,C)}var Qg=ug(Jt),Jg=ug(An);function GI(a,c,p){var C=rt(a),y=C||ci(a)||no(a);if(c=Ke(c,4),p==null){var R=a&&a.constructor;y?p=C?new R:[]:zt(a)?p=zr(R)?Qi(fa(a)):{}:p={}}return(y?Qn:Ar)(a,function(P,K,q){return c(p,P,K,q)}),p}function $I(a,c){return a==null?!0:jc(a,c)}function FI(a,c,p){return a==null?a:Kf(a,c,Xc(p))}function PI(a,c,p,C){return C=typeof C=="function"?C:n,a==null?a:Kf(a,c,Xc(p),C)}function ro(a){return a==null?[]:xc(a,Jt(a))}function zI(a){return a==null?[]:xc(a,An(a))}function HI(a,c,p){return p===n&&(p=c,c=n),p!==n&&(p=ir(p),p=p===p?p:0),c!==n&&(c=ir(c),c=c===c?c:0),yi(ir(a),c,p)}function WI(a,c,p){return c=Hr(c),p===n?(p=c,c=0):p=Hr(p),a=ir(a),XE(a,c,p)}function BI(a,c,p){if(p&&typeof p!="boolean"&&pn(a,c,p)&&(c=p=n),p===n&&(typeof c=="boolean"?(p=c,c=n):typeof a=="boolean"&&(p=a,a=n)),a===n&&c===n?(a=0,c=1):(a=Hr(a),c===n?(c=a,a=0):c=Hr(c)),a>c){var C=a;a=c,c=C}if(p||a%1||c%1){var y=wf();return _n(a+y*(c-a+I1("1e-"+((y+"").length-1))),c)}return Wc(a,c)}var YI=eo(function(a,c,p){return c=c.toLowerCase(),a+(p?eh(c):c)});function eh(a){return vu(Ot(a).toLowerCase())}function th(a){return a=Ot(a),a&&a.replace(Km,M1).replace(_1,"")}function jI(a,c,p){a=Ot(a),c=Rn(c);var C=a.length;p=p===n?C:yi(at(p),0,C);var y=p;return p-=c.length,p>=0&&a.slice(p,y)==c}function KI(a){return a=Ot(a),a&&xm.test(a)?a.replace(D_,U1):a}function VI(a){return a=Ot(a),a&&Tm.test(a)?a.replace(dc,"\\$&"):a}var XI=eo(function(a,c,p){return a+(p?"-":"")+c.toLowerCase()}),qI=eo(function(a,c,p){return a+(p?" ":"")+c.toLowerCase()}),ZI=ig("toLowerCase");function QI(a,c,p){a=Ot(a),c=at(c);var C=c?Ki(a):0;if(!c||C>=c)return a;var y=(c-C)/2;return Na(pa(y),p)+a+Na(va(y),p)}function JI(a,c,p){a=Ot(a),c=at(c);var C=c?Ki(a):0;return c&&C<c?a+Na(c-C,p):a}function ew(a,c,p){a=Ot(a),c=at(c);var C=c?Ki(a):0;return c&&C<c?Na(c-C,p)+a:a}function tw(a,c,p){return p||c==null?c=0:c&&(c=+c),lE(Ot(a).replace(_c,""),c||0)}function nw(a,c,p){return(p?pn(a,c,p):c===n)?c=1:c=at(c),Bc(Ot(a),c)}function rw(){var a=arguments,c=Ot(a[0]);return a.length<3?c:c.replace(a[1],a[2])}var iw=eo(function(a,c,p){return a+(p?"_":"")+c.toLowerCase()});function ow(a,c,p){return p&&typeof p!="number"&&pn(a,c,p)&&(c=p=n),p=p===n?$e:p>>>0,p?(a=Ot(a),a&&(typeof c=="string"||c!=null&&!fu(c))&&(c=Rn(c),!c&&ji(a))?li(hr(a),0,p):a.split(c,p)):[]}var sw=eo(function(a,c,p){return a+(p?" ":"")+vu(c)});function aw(a,c,p){return a=Ot(a),p=p==null?0:yi(at(p),0,a.length),c=Rn(c),a.slice(p,p+c.length)==c}function lw(a,c,p){var C=N.templateSettings;p&&pn(a,c,p)&&(c=n),a=Ot(a),c=Ha({},c,C,dg);var y=Ha({},c.imports,C.imports,dg),R=Jt(y),P=xc(y,R),K,q,de=0,_e=c.interpolate||ta,pe="__p += '",Le=Lc((c.escape||ta).source+"|"+_e.source+"|"+(_e===R_?zm:ta).source+"|"+(c.evaluate||ta).source+"|$","g"),Pe="//# sourceURL="+(xt.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++p1+"]")+`
`;a.replace(Le,function(Xe,gt,vt,kn,mn,Mn){return vt||(vt=kn),pe+=a.slice(de,Mn).replace(Vm,G1),gt&&(K=!0,pe+=`' +
__e(`+gt+`) +
'`),mn&&(q=!0,pe+=`';
`+mn+`;
__p += '`),vt&&(pe+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),de=Mn+Xe.length,Xe}),pe+=`';
`;var Ve=xt.call(c,"variable")&&c.variable;if(!Ve)pe=`with (obj) {
`+pe+`
}
`;else if(Fm.test(Ve))throw new nt(l);pe=(q?pe.replace(wm,""):pe).replace(ym,"$1").replace(Om,"$1;"),pe="function("+(Ve||"obj")+`) {
`+(Ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+pe+`return __p
}`;var ct=rh(function(){return wt(R,Pe+"return "+pe).apply(n,P)});if(ct.source=pe,_u(ct))throw ct;return ct}function cw(a){return Ot(a).toLowerCase()}function uw(a){return Ot(a).toUpperCase()}function dw(a,c,p){if(a=Ot(a),a&&(p||c===n))return _f(a);if(!a||!(c=Rn(c)))return a;var C=hr(a),y=hr(c),R=ff(C,y),P=gf(C,y)+1;return li(C,R,P).join("")}function _w(a,c,p){if(a=Ot(a),a&&(p||c===n))return a.slice(0,vf(a)+1);if(!a||!(c=Rn(c)))return a;var C=hr(a),y=gf(C,hr(c))+1;return li(C,0,y).join("")}function fw(a,c,p){if(a=Ot(a),a&&(p||c===n))return a.replace(_c,"");if(!a||!(c=Rn(c)))return a;var C=hr(a),y=ff(C,hr(c));return li(C,y).join("")}function gw(a,c){var p=ae,C=ie;if(zt(c)){var y="separator"in c?c.separator:y;p="length"in c?at(c.length):p,C="omission"in c?Rn(c.omission):C}a=Ot(a);var R=a.length;if(ji(a)){var P=hr(a);R=P.length}if(p>=R)return a;var K=p-Ki(C);if(K<1)return C;var q=P?li(P,0,K).join(""):a.slice(0,K);if(y===n)return q+C;if(P&&(K+=q.length-K),fu(y)){if(a.slice(K).search(y)){var de,_e=q;for(y.global||(y=Lc(y.source,Ot(T_.exec(y))+"g")),y.lastIndex=0;de=y.exec(_e);)var pe=de.index;q=q.slice(0,pe===n?K:pe)}}else if(a.indexOf(Rn(y),K)!=K){var Le=q.lastIndexOf(y);Le>-1&&(q=q.slice(0,Le))}return q+C}function hw(a){return a=Ot(a),a&&Am.test(a)?a.replace(N_,B1):a}var vw=eo(function(a,c,p){return a+(p?" ":"")+c.toUpperCase()}),vu=ig("toUpperCase");function nh(a,c,p){return a=Ot(a),c=p?n:c,c===n?F1(a)?K1(a):N1(a):a.match(c)||[]}var rh=_t(function(a,c){try{return Nn(a,n,c)}catch(p){return _u(p)?p:new nt(p)}}),pw=Fr(function(a,c){return Qn(c,function(p){p=Sr(p),Gr(a,p,uu(a[p],a))}),a});function mw(a){var c=a==null?0:a.length,p=Ke();return a=c?Pt(a,function(C){if(typeof C[1]!="function")throw new Jn(s);return[p(C[0]),C[1]]}):[],_t(function(C){for(var y=-1;++y<c;){var R=a[y];if(Nn(R[0],this,C))return Nn(R[1],this,C)}})}function Ew(a){return BE(tr(a,h))}function pu(a){return function(){return a}}function Cw(a,c){return a==null||a!==a?c:a}var bw=sg(),Iw=sg(!0);function xn(a){return a}function mu(a){return Uf(typeof a=="function"?a:tr(a,h))}function ww(a){return $f(tr(a,h))}function yw(a,c){return Ff(a,tr(c,h))}var Ow=_t(function(a,c){return function(p){return ss(p,a,c)}}),Aw=_t(function(a,c){return function(p){return ss(a,p,c)}});function Eu(a,c,p){var C=Jt(c),y=wa(c,C);p==null&&!(zt(c)&&(y.length||!C.length))&&(p=c,c=a,a=this,y=wa(c,Jt(c)));var R=!(zt(p)&&"chain"in p)||!!p.chain,P=zr(a);return Qn(y,function(K){var q=c[K];a[K]=q,P&&(a.prototype[K]=function(){var de=this.__chain__;if(R||de){var _e=a(this.__wrapped__),pe=_e.__actions__=yn(this.__actions__);return pe.push({func:q,args:arguments,thisArg:a}),_e.__chain__=de,_e}return q.apply(a,ni([this.value()],arguments))})}),a}function xw(){return sn._===this&&(sn._=J1),this}function Cu(){}function Sw(a){return a=at(a),_t(function(c){return Pf(c,a)})}var Lw=Zc(Pt),Nw=Zc(af),Dw=Zc(Ic);function ih(a){return iu(a)?wc(Sr(a)):a0(a)}function Rw(a){return function(c){return a==null?n:Oi(a,c)}}var Tw=lg(),kw=lg(!0);function bu(){return[]}function Iu(){return!1}function Mw(){return{}}function Uw(){return""}function Gw(){return!0}function $w(a,c){if(a=at(a),a<1||a>Se)return[];var p=$e,C=_n(a,$e);c=Ke(c),a-=$e;for(var y=Ac(C,c);++p<a;)c(p);return y}function Fw(a){return rt(a)?Pt(a,Sr):Tn(a)?[a]:yn(yg(Ot(a)))}function Pw(a){var c=++Z1;return Ot(a)+c}var zw=La(function(a,c){return a+c},0),Hw=Qc("ceil"),Ww=La(function(a,c){return a/c},1),Bw=Qc("floor");function Yw(a){return a&&a.length?Ia(a,xn,Gc):n}function jw(a,c){return a&&a.length?Ia(a,Ke(c,2),Gc):n}function Kw(a){return uf(a,xn)}function Vw(a,c){return uf(a,Ke(c,2))}function Xw(a){return a&&a.length?Ia(a,xn,zc):n}function qw(a,c){return a&&a.length?Ia(a,Ke(c,2),zc):n}var Zw=La(function(a,c){return a*c},1),Qw=Qc("round"),Jw=La(function(a,c){return a-c},0);function ey(a){return a&&a.length?Oc(a,xn):0}function ty(a,c){return a&&a.length?Oc(a,Ke(c,2)):0}return N.after=wb,N.ary=Mg,N.assign=uI,N.assignIn=Xg,N.assignInWith=Ha,N.assignWith=dI,N.at=_I,N.before=Ug,N.bind=uu,N.bindAll=pw,N.bindKey=Gg,N.castArray=Mb,N.chain=Rg,N.chunk=B0,N.compact=Y0,N.concat=j0,N.cond=mw,N.conforms=Ew,N.constant=pu,N.countBy=eb,N.create=fI,N.curry=$g,N.curryRight=Fg,N.debounce=Pg,N.defaults=gI,N.defaultsDeep=hI,N.defer=yb,N.delay=Ob,N.difference=K0,N.differenceBy=V0,N.differenceWith=X0,N.drop=q0,N.dropRight=Z0,N.dropRightWhile=Q0,N.dropWhile=J0,N.fill=eC,N.filter=nb,N.flatMap=ob,N.flatMapDeep=sb,N.flatMapDepth=ab,N.flatten=Sg,N.flattenDeep=tC,N.flattenDepth=nC,N.flip=Ab,N.flow=bw,N.flowRight=Iw,N.fromPairs=rC,N.functions=II,N.functionsIn=wI,N.groupBy=lb,N.initial=oC,N.intersection=sC,N.intersectionBy=aC,N.intersectionWith=lC,N.invert=OI,N.invertBy=AI,N.invokeMap=ub,N.iteratee=mu,N.keyBy=db,N.keys=Jt,N.keysIn=An,N.map=Ua,N.mapKeys=SI,N.mapValues=LI,N.matches=ww,N.matchesProperty=yw,N.memoize=$a,N.merge=NI,N.mergeWith=qg,N.method=Ow,N.methodOf=Aw,N.mixin=Eu,N.negate=Fa,N.nthArg=Sw,N.omit=DI,N.omitBy=RI,N.once=xb,N.orderBy=_b,N.over=Lw,N.overArgs=Sb,N.overEvery=Nw,N.overSome=Dw,N.partial=du,N.partialRight=zg,N.partition=fb,N.pick=TI,N.pickBy=Zg,N.property=ih,N.propertyOf=Rw,N.pull=_C,N.pullAll=Ng,N.pullAllBy=fC,N.pullAllWith=gC,N.pullAt=hC,N.range=Tw,N.rangeRight=kw,N.rearg=Lb,N.reject=vb,N.remove=vC,N.rest=Nb,N.reverse=lu,N.sampleSize=mb,N.set=MI,N.setWith=UI,N.shuffle=Eb,N.slice=pC,N.sortBy=Ib,N.sortedUniq=yC,N.sortedUniqBy=OC,N.split=ow,N.spread=Db,N.tail=AC,N.take=xC,N.takeRight=SC,N.takeRightWhile=LC,N.takeWhile=NC,N.tap=YC,N.throttle=Rb,N.thru=Ma,N.toArray=jg,N.toPairs=Qg,N.toPairsIn=Jg,N.toPath=Fw,N.toPlainObject=Vg,N.transform=GI,N.unary=Tb,N.union=DC,N.unionBy=RC,N.unionWith=TC,N.uniq=kC,N.uniqBy=MC,N.uniqWith=UC,N.unset=$I,N.unzip=cu,N.unzipWith=Dg,N.update=FI,N.updateWith=PI,N.values=ro,N.valuesIn=zI,N.without=GC,N.words=nh,N.wrap=kb,N.xor=$C,N.xorBy=FC,N.xorWith=PC,N.zip=zC,N.zipObject=HC,N.zipObjectDeep=WC,N.zipWith=BC,N.entries=Qg,N.entriesIn=Jg,N.extend=Xg,N.extendWith=Ha,Eu(N,N),N.add=zw,N.attempt=rh,N.camelCase=YI,N.capitalize=eh,N.ceil=Hw,N.clamp=HI,N.clone=Ub,N.cloneDeep=$b,N.cloneDeepWith=Fb,N.cloneWith=Gb,N.conformsTo=Pb,N.deburr=th,N.defaultTo=Cw,N.divide=Ww,N.endsWith=jI,N.eq=pr,N.escape=KI,N.escapeRegExp=VI,N.every=tb,N.find=rb,N.findIndex=Ag,N.findKey=vI,N.findLast=ib,N.findLastIndex=xg,N.findLastKey=pI,N.floor=Bw,N.forEach=Tg,N.forEachRight=kg,N.forIn=mI,N.forInRight=EI,N.forOwn=CI,N.forOwnRight=bI,N.get=gu,N.gt=zb,N.gte=Hb,N.has=yI,N.hasIn=hu,N.head=Lg,N.identity=xn,N.includes=cb,N.indexOf=iC,N.inRange=WI,N.invoke=xI,N.isArguments=Si,N.isArray=rt,N.isArrayBuffer=Wb,N.isArrayLike=On,N.isArrayLikeObject=jt,N.isBoolean=Bb,N.isBuffer=ci,N.isDate=Yb,N.isElement=jb,N.isEmpty=Kb,N.isEqual=Vb,N.isEqualWith=Xb,N.isError=_u,N.isFinite=qb,N.isFunction=zr,N.isInteger=Hg,N.isLength=Pa,N.isMap=Wg,N.isMatch=Zb,N.isMatchWith=Qb,N.isNaN=Jb,N.isNative=eI,N.isNil=nI,N.isNull=tI,N.isNumber=Bg,N.isObject=zt,N.isObjectLike=Bt,N.isPlainObject=_s,N.isRegExp=fu,N.isSafeInteger=rI,N.isSet=Yg,N.isString=za,N.isSymbol=Tn,N.isTypedArray=no,N.isUndefined=iI,N.isWeakMap=oI,N.isWeakSet=sI,N.join=cC,N.kebabCase=XI,N.last=rr,N.lastIndexOf=uC,N.lowerCase=qI,N.lowerFirst=ZI,N.lt=aI,N.lte=lI,N.max=Yw,N.maxBy=jw,N.mean=Kw,N.meanBy=Vw,N.min=Xw,N.minBy=qw,N.stubArray=bu,N.stubFalse=Iu,N.stubObject=Mw,N.stubString=Uw,N.stubTrue=Gw,N.multiply=Zw,N.nth=dC,N.noConflict=xw,N.noop=Cu,N.now=Ga,N.pad=QI,N.padEnd=JI,N.padStart=ew,N.parseInt=tw,N.random=BI,N.reduce=gb,N.reduceRight=hb,N.repeat=nw,N.replace=rw,N.result=kI,N.round=Qw,N.runInContext=V,N.sample=pb,N.size=Cb,N.snakeCase=iw,N.some=bb,N.sortedIndex=mC,N.sortedIndexBy=EC,N.sortedIndexOf=CC,N.sortedLastIndex=bC,N.sortedLastIndexBy=IC,N.sortedLastIndexOf=wC,N.startCase=sw,N.startsWith=aw,N.subtract=Jw,N.sum=ey,N.sumBy=ty,N.template=lw,N.times=$w,N.toFinite=Hr,N.toInteger=at,N.toLength=Kg,N.toLower=cw,N.toNumber=ir,N.toSafeInteger=cI,N.toString=Ot,N.toUpper=uw,N.trim=dw,N.trimEnd=_w,N.trimStart=fw,N.truncate=gw,N.unescape=hw,N.uniqueId=Pw,N.upperCase=vw,N.upperFirst=vu,N.each=Tg,N.eachRight=kg,N.first=Lg,Eu(N,function(){var a={};return Ar(N,function(c,p){xt.call(N.prototype,p)||(a[p]=c)}),a}(),{chain:!1}),N.VERSION=r,Qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){N[a].placeholder=N}),Qn(["drop","take"],function(a,c){ht.prototype[a]=function(p){p=p===n?1:Zt(at(p),0);var C=this.__filtered__&&!c?new ht(this):this.clone();return C.__filtered__?C.__takeCount__=_n(p,C.__takeCount__):C.__views__.push({size:_n(p,$e),type:a+(C.__dir__<0?"Right":"")}),C},ht.prototype[a+"Right"]=function(p){return this.reverse()[a](p).reverse()}}),Qn(["filter","map","takeWhile"],function(a,c){var p=c+1,C=p==Z||p==me;ht.prototype[a]=function(y){var R=this.clone();return R.__iteratees__.push({iteratee:Ke(y,3),type:p}),R.__filtered__=R.__filtered__||C,R}}),Qn(["head","last"],function(a,c){var p="take"+(c?"Right":"");ht.prototype[a]=function(){return this[p](1).value()[0]}}),Qn(["initial","tail"],function(a,c){var p="drop"+(c?"":"Right");ht.prototype[a]=function(){return this.__filtered__?new ht(this):this[p](1)}}),ht.prototype.compact=function(){return this.filter(xn)},ht.prototype.find=function(a){return this.filter(a).head()},ht.prototype.findLast=function(a){return this.reverse().find(a)},ht.prototype.invokeMap=_t(function(a,c){return typeof a=="function"?new ht(this):this.map(function(p){return ss(p,a,c)})}),ht.prototype.reject=function(a){return this.filter(Fa(Ke(a)))},ht.prototype.slice=function(a,c){a=at(a);var p=this;return p.__filtered__&&(a>0||c<0)?new ht(p):(a<0?p=p.takeRight(-a):a&&(p=p.drop(a)),c!==n&&(c=at(c),p=c<0?p.dropRight(-c):p.take(c-a)),p)},ht.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},ht.prototype.toArray=function(){return this.take($e)},Ar(ht.prototype,function(a,c){var p=/^(?:filter|find|map|reject)|While$/.test(c),C=/^(?:head|last)$/.test(c),y=N[C?"take"+(c=="last"?"Right":""):c],R=C||/^find/.test(c);y&&(N.prototype[c]=function(){var P=this.__wrapped__,K=C?[1]:arguments,q=P instanceof ht,de=K[0],_e=q||rt(P),pe=function(gt){var vt=y.apply(N,ni([gt],K));return C&&Le?vt[0]:vt};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var Le=this.__chain__,Pe=!!this.__actions__.length,Ve=R&&!Le,ct=q&&!Pe;if(!R&&_e){P=ct?P:new ht(this);var Xe=a.apply(P,K);return Xe.__actions__.push({func:Ma,args:[pe],thisArg:n}),new er(Xe,Le)}return Ve&&ct?a.apply(this,K):(Xe=this.thru(pe),Ve?C?Xe.value()[0]:Xe.value():Xe)})}),Qn(["pop","push","shift","sort","splice","unshift"],function(a){var c=aa[a],p=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",C=/^(?:pop|shift)$/.test(a);N.prototype[a]=function(){var y=arguments;if(C&&!this.__chain__){var R=this.value();return c.apply(rt(R)?R:[],y)}return this[p](function(P){return c.apply(rt(P)?P:[],y)})}}),Ar(ht.prototype,function(a,c){var p=N[c];if(p){var C=p.name+"";xt.call(Zi,C)||(Zi[C]=[]),Zi[C].push({name:c,func:p})}}),Zi[Sa(n,w).name]=[{name:"wrapper",func:n}],ht.prototype.clone=hE,ht.prototype.reverse=vE,ht.prototype.value=pE,N.prototype.at=jC,N.prototype.chain=KC,N.prototype.commit=VC,N.prototype.next=XC,N.prototype.plant=ZC,N.prototype.reverse=QC,N.prototype.toJSON=N.prototype.valueOf=N.prototype.value=JC,N.prototype.first=N.prototype.head,Jo&&(N.prototype[Jo]=qC),N},Vi=V1();Ci?((Ci.exports=Vi)._=Vi,mc._=Vi):sn._=Vi}).call(eD)}(ms,ms.exports)),ms.exports}var At=tD();function jr(t){return Array.isArray?Array.isArray(t):Xv(t)==="[object Array]"}function nD(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function rD(t){return t==null?"":nD(t)}function Dr(t){return typeof t=="string"}function Kv(t){return typeof t=="number"}function iD(t){return t===!0||t===!1||oD(t)&&Xv(t)=="[object Boolean]"}function Vv(t){return typeof t=="object"}function oD(t){return Vv(t)&&t!==null}function $n(t){return t!=null}function xu(t){return!t.trim().length}function Xv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const sD="Incorrect 'index' type",aD=t=>`Invalid value for key ${t}`,lD=t=>`Pattern length exceeds max of ${t}.`,cD=t=>`Missing ${t} property in key`,uD=t=>`Property 'weight' in key '${t}' must be a positive integer`,mh=Object.prototype.hasOwnProperty;class dD{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=qv(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function qv(t){let e=null,n=null,r=null,i=1,o=null;if(Dr(t)||jr(t))r=t,e=Eh(t),n=Xu(t);else{if(!mh.call(t,"name"))throw new Error(cD("name"));const s=t.name;if(r=s,mh.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(uD(s));e=Eh(s),n=Xu(s),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Eh(t){return jr(t)?t:t.split(".")}function Xu(t){return jr(t)?t.join("."):t}function _D(t,e){let n=[],r=!1;const i=(o,s,l)=>{if($n(o))if(!s[l])n.push(o);else{let u=s[l];const d=o[u];if(!$n(d))return;if(l===s.length-1&&(Dr(d)||Kv(d)||iD(d)))n.push(rD(d));else if(jr(d)){r=!0;for(let g=0,h=d.length;g<h;g+=1)i(d[g],s,l+1)}else s.length&&i(d,s,l+1)}};return i(t,Dr(e)?e.split("."):e,0),r?n:n[0]}const fD={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},gD={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},hD={location:0,threshold:.6,distance:100},vD={useExtendedSearch:!1,getFn:_D,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var et={...gD,...fD,...hD,...vD};const pD=/[^ ]+/g;function mD(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(pD).length;if(n.has(o))return n.get(o);const s=1/Math.pow(o,.5*t),l=parseFloat(Math.round(s*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Qd{constructor({getFn:e=et.getFn,fieldNormWeight:n=et.fieldNormWeight}={}){this.norm=mD(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Dr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Dr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!$n(e)||xu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if($n(s)){if(jr(s)){let l=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:d,value:g}=u.pop();if($n(g))if(Dr(g)&&!xu(g)){let h={v:g,i:d,n:this.norm.get(g)};l.push(h)}else jr(g)&&g.forEach((h,v)=>{u.push({nestedArrIndex:v,value:h})})}r.$[o]=l}else if(Dr(s)&&!xu(s)){let l={v:s,n:this.norm.get(s)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Zv(t,e,{getFn:n=et.getFn,fieldNormWeight:r=et.fieldNormWeight}={}){const i=new Qd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(qv)),i.setSources(e),i.create(),i}function ED(t,{getFn:e=et.getFn,fieldNormWeight:n=et.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Qd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ya(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=et.distance,ignoreLocation:o=et.ignoreLocation}={}){const s=e/t.length;if(o)return s;const l=Math.abs(r-n);return i?s+l/i:l?1:s}function CD(t=[],e=et.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=t.length;o<s;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Ni=32;function bD(t,e,n,{location:r=et.location,distance:i=et.distance,threshold:o=et.threshold,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,includeMatches:u=et.includeMatches,ignoreLocation:d=et.ignoreLocation}={}){if(e.length>Ni)throw new Error(lD(Ni));const g=e.length,h=t.length,v=Math.max(0,Math.min(r,h));let m=o,E=v;const I=l>1||u,b=I?Array(h):[];let w;for(;(w=t.indexOf(e,E))>-1;){let M=Ya(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:d});if(m=Math.min(M,m),E=w+g,I){let $=0;for(;$<g;)b[w+$]=1,$+=1}}E=-1;let A=[],T=1,k=g+h;const U=1<<g-1;for(let M=0;M<g;M+=1){let $=0,te=k;for(;$<te;)Ya(e,{errors:M,currentLocation:v+te,expectedLocation:v,distance:i,ignoreLocation:d})<=m?$=te:k=te,te=Math.floor((k-$)/2+$);k=te;let ae=Math.max(1,v-te+1),ie=s?h:Math.min(v+te,h)+g,ce=Array(ie+2);ce[ie+1]=(1<<M)-1;for(let Z=ie;Z>=ae;Z-=1){let Ie=Z-1,me=n[t.charAt(Ie)];if(I&&(b[Ie]=+!!me),ce[Z]=(ce[Z+1]<<1|1)&me,M&&(ce[Z]|=(A[Z+1]|A[Z])<<1|1|A[Z+1]),ce[Z]&U&&(T=Ya(e,{errors:M,currentLocation:Ie,expectedLocation:v,distance:i,ignoreLocation:d}),T<=m)){if(m=T,E=Ie,E<=v)break;ae=Math.max(1,2*v-E)}}if(Ya(e,{errors:M+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:d})>m)break;A=ce}const j={isMatch:E>=0,score:Math.max(.001,T)};if(I){const M=CD(b,l);M.length?u&&(j.indices=M):j.isMatch=!1}return j}function ID(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Qv{constructor(e,{location:n=et.location,threshold:r=et.threshold,distance:i=et.distance,includeMatches:o=et.includeMatches,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,isCaseSensitive:u=et.isCaseSensitive,ignoreLocation:d=et.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(v,m)=>{this.chunks.push({pattern:v,alphabet:ID(v),startIndex:m})},h=this.pattern.length;if(h>Ni){let v=0;const m=h%Ni,E=h-m;for(;v<E;)g(this.pattern.substr(v,Ni),v),v+=Ni;if(m){const I=h-Ni;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:u,ignoreLocation:d}=this.options;let g=[],h=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:w,score:A,indices:T}=bD(e,E,I,{location:i+b,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:d});w&&(v=!0),h+=A,w&&T&&(g=[...g,...T])});let m={isMatch:v,score:v?h/this.chunks.length:1};return v&&r&&(m.indices=g),m}}class gi{constructor(e){this.pattern=e}static isMultiMatch(e){return Ch(e,this.multiRegex)}static isSingleMatch(e){return Ch(e,this.singleRegex)}search(){}}function Ch(t,e){const n=t.match(e);return n?n[1]:null}class wD extends gi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class yD extends gi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class OD extends gi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class AD extends gi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class xD extends gi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class SD extends gi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Jv extends gi{constructor(e,{location:n=et.location,threshold:r=et.threshold,distance:i=et.distance,includeMatches:o=et.includeMatches,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,isCaseSensitive:u=et.isCaseSensitive,ignoreLocation:d=et.ignoreLocation}={}){super(e),this._bitapSearch=new Qv(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ep extends gi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const qu=[wD,ep,OD,AD,SD,xD,yD,Jv],bh=qu.length,LD=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ND="|";function DD(t,e={}){return t.split(ND).map(n=>{let r=n.trim().split(LD).filter(o=>o&&!!o.trim()),i=[];for(let o=0,s=r.length;o<s;o+=1){const l=r[o];let u=!1,d=-1;for(;!u&&++d<bh;){const g=qu[d];let h=g.isMultiMatch(l);h&&(i.push(new g(h,e)),u=!0)}if(!u)for(d=-1;++d<bh;){const g=qu[d];let h=g.isSingleMatch(l);if(h){i.push(new g(h,e));break}}}return i})}const RD=new Set([Jv.type,ep.type]);class TD{constructor(e,{isCaseSensitive:n=et.isCaseSensitive,includeMatches:r=et.includeMatches,minMatchCharLength:i=et.minMatchCharLength,ignoreLocation:o=et.ignoreLocation,findAllMatches:s=et.findAllMatches,location:l=et.location,threshold:u=et.threshold,distance:d=et.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:o,location:l,threshold:u,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=DD(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,s=[],l=0;for(let u=0,d=n.length;u<d;u+=1){const g=n[u];s.length=0,o=0;for(let h=0,v=g.length;h<v;h+=1){const m=g[h],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(o+=1,l+=b,r){const w=m.constructor.type;RD.has(w)?s=[...s,...I]:s.push(I)}}else{l=0,o=0,s.length=0;break}}if(o){let h={isMatch:!0,score:l/o};return r&&(h.indices=s),h}}return{isMatch:!1,score:1}}}const Zu=[];function kD(...t){Zu.push(...t)}function Qu(t,e){for(let n=0,r=Zu.length;n<r;n+=1){let i=Zu[n];if(i.condition(t,e))return new i(t,e)}return new Qv(t,e)}const ul={AND:"$and",OR:"$or"},Ju={PATH:"$path",PATTERN:"$val"},ed=t=>!!(t[ul.AND]||t[ul.OR]),MD=t=>!!t[Ju.PATH],UD=t=>!jr(t)&&Vv(t)&&!ed(t),Ih=t=>({[ul.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function tp(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const s=MD(i);if(!s&&o.length>1&&!ed(i))return r(Ih(i));if(UD(i)){const u=s?i[Ju.PATH]:o[0],d=s?i[Ju.PATTERN]:i[u];if(!Dr(d))throw new Error(aD(u));const g={keyId:Xu(u),pattern:d};return n&&(g.searcher=Qu(d,e)),g}let l={children:[],operator:o[0]};return o.forEach(u=>{const d=i[u];jr(d)&&d.forEach(g=>{l.children.push(r(g))})}),l};return ed(t)||(t=Ih(t)),r(t)}function GD(t,{ignoreFieldNorm:e=et.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:s})=>{const l=i?i.weight:null;r*=Math.pow(s===0&&l?Number.EPSILON:s,(l||1)*(e?1:o))}),n.score=r})}function $D(t,e){const n=t.matches;e.matches=[],$n(n)&&n.forEach(r=>{if(!$n(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let s={indices:i,value:o};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function FD(t,e){e.score=t.score}function PD(t,e,{includeMatches:n=et.includeMatches,includeScore:r=et.includeScore}={}){const i=[];return n&&i.push($D),r&&i.push(FD),t.map(o=>{const{idx:s}=o,l={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Uo{constructor(e,n={},r){this.options={...et,...n},this.options.useExtendedSearch,this._keyStore=new dD(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Qd))throw new Error(sD);this._myIndex=n||Zv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){$n(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:s,ignoreFieldNorm:l}=this.options;let u=Dr(e)?Dr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return GD(u,{ignoreFieldNorm:l}),o&&u.sort(s),Kv(n)&&n>-1&&(u=u.slice(0,n)),PD(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Qu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:s,n:l})=>{if(!$n(o))return;const{isMatch:u,score:d,indices:g}=n.searchIn(o);u&&i.push({item:o,idx:s,matches:[{score:d,value:o,norm:l,indices:g}]})}),i}_searchLogical(e){const n=tp(e,this.options),r=(l,u,d)=>{if(!l.children){const{keyId:h,searcher:v}=l,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:v});return m&&m.length?[{idx:d,item:u,matches:m}]:[]}const g=[];for(let h=0,v=l.children.length;h<v;h+=1){const m=l.children[h],E=r(m,u,d);if(E.length)g.push(...E);else if(l.operator===ul.AND)return[]}return g},i=this._myIndex.records,o={},s=[];return i.forEach(({$:l,i:u})=>{if($n(l)){let d=r(n,l,u);d.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},s.push(o[u])),d.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),s}_searchObjectList(e){const n=Qu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:s,i:l})=>{if(!$n(s))return;let u=[];r.forEach((d,g)=>{u.push(...this._findMatches({key:d,value:s[g],searcher:n}))}),u.length&&o.push({idx:l,item:s,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!$n(n))return[];let i=[];if(jr(n))n.forEach(({v:o,i:s,n:l})=>{if(!$n(o))return;const{isMatch:u,score:d,indices:g}=r.searchIn(o);u&&i.push({score:d,key:e,value:o,idx:s,norm:l,indices:g})});else{const{v:o,n:s}=n,{isMatch:l,score:u,indices:d}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:s,indices:d})}return i}}Uo.version="7.0.0";Uo.createIndex=Zv;Uo.parseIndex=ED;Uo.config=et;Uo.parseQuery=tp;kD(TD);function Nl(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function zD(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function HD(t){return new Uo(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function WD(t,e,n){const r=zD(e,n);return t.length===0?r:HD(r).search(t).map(i=>i.item)}function BD(t,e){return Nl(t,e).shape}function un(t,e){const n=BD(t,e);return n?Ku(n):void 0}function Dl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Zd(e)}function YD(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return JN(e)}function jD(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Ws(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Zd(i)})}function KD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Zd(o)})})}function np(t,e){const n=t[e];if(n!==void 0&&typeof n!="string")throw Error(`${e} entry must be a string, if present at all: ${n}`);return n}function Tr(t){return np(t,"value")}function rp(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Bv(e)}function VD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Bv(r)})}function XD(t,e){const n=t.shape;return n===void 0?void 0:{...un(e,Ht),...n}}function ip(t,e,n){return{toolId:t,cells:e,value:n}}function qD(t,e){const n=Ws(e,"cells"),r=Tr(e);return ip(t,n,r)}function op(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,s)=>Qe(o,e)&&s>=r)}function ZD(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:zs(r[i-1],e)))return t;const s=op(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function sp(t,e){return{toolId:t,cells:e,lines:[]}}function QD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),al(n),{...t,cells:n};const r=n.some(o=>Qe(o,e)),i=n.some(o=>zs(o,e));return n.length>0&&!r&&i?(n.push(e),al(n),{...t,cells:n}):t}function JD(t,e,n){const r=t.cells.some(d=>Qe(d,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return td(t,e);const o=t.lines[i-1],s=o.length;if(s===0&&!r)return t;if(s===0&&r)return td(t,e);const l=op(o,e,!1);return(o.length===0?!0:zs(o[s-1],e))?l>=0?(o.length=l+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function td(t,e){return t.cells.some(r=>Qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function eR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function tR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function nR(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function rR(t,e){const n=Ws(e,"cells"),r=KD(e),i=sp(t,n);return i.lines=r,i}function ap(t,e,n=""){return{toolId:t,cells:e,value:n}}function iR(t,e,n=!1){const r=jv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function oR(t,e){return{...t,value:e}}function sR(t,e){const n=Ws(e,"cells"),r=Tr(e);return ap(t,n,r)}function nd(t,e,n){return{toolId:t,cells:e,value:n}}function aR(t,e){const n=Ws(e,"cells"),r=Tr(e);return nd(t,n,r)}function rd(t,e,n){return{toolId:t,cells:e,value:n}}function lR(t,e){const n=Ws(e,"cells"),r=Tr(e);return rd(t,n,r)}function id(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function cR(t,e){const n=Dl(e),r=rp(e),i=Tr(e);return id(t,n,r,i)}function od(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function uR(t,e){const n=Dl(e),r=Tr(e);return od(t,n,r)}function sd(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function dR(t,e){const n=Dl(e),r=rp(e);return sd(t,n,r)}function ad(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function _R(t,e){const n=Dl(e),r=VD(e),i=ad(t,n,Fe.N);return i.directions=r,i}function ld(t,e,n=""){return{toolId:t,cell:e,value:n}}function fR(t,e){const n=YD(e),r=Tr(e);return ld(t,n,r)}function lp(t,e=""){return{toolId:t,value:e}}function gR(t,e){const n=Tr(e);return lp(t,n)}function hR(t,e,n=""){return{toolId:t,coords:e,value:n}}function vR(t,e){const n=jD(e,"coords"),r=Tr(e);return hR(t,n,r)}function cp(t="",e=""){return{toolId:f.VARIABLE_CONSTRAINT,name:t,value:e}}function pR(t){const e=np(t,"name"),n=Tr(t);return cp(e,n)}function Go(t,e){return{...t,value:e}}function mR(t,e){return{...t,name:e}}class $o extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const i=r.constraints[n];return i||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);!i||!i.constraints||(i.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const i=this.get(e);!i||!i.constraints||i.constraints[n]&&(i.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];if(r.constraints)for(const s of Object.values(r.constraints))i.push(yR(s));const o={tool_id:n,constraints:i};if(r.negative_constraints)for(const[s,l]of Object.entries(r.negative_constraints))l&&(o.negative_constraints||(o.negative_constraints={}),o.negative_constraints[s]=l);e[n]=o}return e}static fromJson(e){const n=new $o;if(!e)return n;for(const r of Object.values(e)){const i=r.tool_id;if(typeof i!="string")throw TypeError("tool_id_str must be of type string.");const o=Fy(i);if(o===void 0||!Object.keys(Ht).includes(o))continue;n.addToDict(o);const s=n.get(o);if(!s)continue;const l=r.negative_constraints;if(l){s.negative_constraints={};for(const[d,g]of Object.entries(l))s.negative_constraints[d]=g}const u=r.constraints;for(const d of u){let g=null;if(Py(o,Il)?g=uR(o,d):$i(o)?g=dR(o,d):Io(o)?g=_R(o,d):wo(o)?g=lR(o,d):Ns(o)?g=aR(o,d):yo(o)?g=qD(o,d):Tv(o)?g=vR(o,d):Oo(o)?g=rR(o,d):Ao(o)?g=sR(o,d):Kr(o)?g=cR(o,d):$d(o)?g=gR(o,d):o===f.VARIABLE_CONSTRAINT?g=pR(d):Ds(o)&&(g=fR(o,d)),g!==null){const h=At.uniqueId(),v=XD(d,o);g.shape=v,n.addConstraint(o,h,g)}}}return n}}function uo(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=i[0];if(Qe(o.cell,n))return[s,o]}return null}function wh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(n.every(l=>o.cells.some(u=>Qe(l,u))))return i}return null}function yh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=o.cells[o.cells.length-1];if(Qe(n,s))return i}return null}function ER(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Qe(l,n)))return[i[0],o]}return null}function CR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints))if(i[1].cells.some(l=>Qe(l,n)))return i;return null}function Oh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Qe(l,n)))return[i[0],o]}return null}function bR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[i,o]of Object.entries(r.constraints)){const s=o,l=s.lines.findIndex(u=>u.some((d,g)=>Qe(d,n)&&g>0));if(l>=0)return{id:i,arrow:s,matchLineIdx:l}}return null}function Ah(t,e,n,r){const i=t.get(e);if(!i||!i.constraints)return null;for(const o of Object.entries(i.constraints)){const s=o[1],l=o[0];if(Qe(n,s.cell)&&r===s.direction)return[l,s]}return null}function xh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=i[0];if(Qe(n,o.cell))return[s,o]}return null}function IR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Qe(l,n))||o.cells2.some(l=>Qe(l,n)))return[i[0],o]}return null}function wR(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const i of Object.entries(n.constraints)){const o=i[1];r.add(o.value)}return r}function yR(t){const e={};if("cells"in t){const n=t.cells.map(r=>Wa(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Wa(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Wa(i)));e.lines=n}if("cell"in t){const n=Wa(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"name"in t&&t.name&&(e.name=t.name),"shape"in t&&t.shape){const n=un(t.toolId,Ht),r=Hy(t.shape,n);r&&(e.shape=r)}return e}function Sh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function up(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function cd(t){const e=new Option().style;return e.color=t,e.color!==""}function Su(t){return up(t)||cd(t)?t:cd(`#${t}`)?`#${t}`:void 0}function dl(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}const OR=t=>btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function P9(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");for(;e.length%4!==0;)e+="=";return atob(e)}function dp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function _l(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function AR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Lh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function xR(t){return t in Lh?Lh[t]:null}function _p(t,e,n){if(n===null)return null;const r=xR(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Lu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class SR{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Lu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Lu(this.cornerMarks,e))}enterHighlight(e){this.highlights=Lu(this.highlights,e)}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==_p(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Fo{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let s=0;s<n;s++){const l=new SR(i,s);if(r){const u=_p(i,s,e);l.region=u}o.push(l)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,s]=[e.r+i[0],e.c+i[1]],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],s=e.c+i[1],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],s=e.c+i[1],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return dp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(l=>l===o))return n;for(const l of i){const u=this.getRegion(l);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:s}=Hs(r);let[l,u]=[e+o,n+s];for(;0<=l&&l<this.nRows&&0<=u&&u<this.nCols;){const d=this.grid[l][u];i.push(d),[l,u]=[l+o,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const s=this.getCell(r,o);if(!s)continue;const l=s==null?void 0:s.toJson(n);i.push(l)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Fo(e,n);for(let o=0;o<e;o++)for(let s=0;s<n;s++){const l=r[o][s],u=i.getCell(o,s);u&&Object.assign(u,l)}return i}}function LR(t){const e=t.grid,n=t.elementsDict,r={};r.puzzleInfo=t.puzzleMeta,r.nRows=e.nRows,r.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),o=At.range(1,i+1);t.valid_digits&&!AR(o,t.valid_digits)&&(r.valid_digits=t.valid_digits),r.grid=e.toJSON(),t.solution&&(r.solution=t.solution);const s=n.toJSON();return Object.keys(s).length&&(r.local_constraints=s),r}function NR(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo;let i={};r&&(i=r);const o=t.valid_digits,s=t.grid,l=Fo.fromJSON(e,n,s),u=Math.min(l.nRows,l.nRows);let d=At.range(1,u+1);o!==void 0&&(d=o);const g=t.solution,h=t.local_constraints,v=$o.fromJson(h);return{puzzleMeta:i,solution:g,grid:l,valid_digits:d,elementsDict:v}}function z9(){const t=new Fo(9,9),e=new $o;return{grid:t,solution:void 0,valid_digits:At.range(1,10),puzzleMeta:{},elementsDict:e}}var Es=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Es||{});const DR=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),RR=()=>({type:"CLEAR"}),TR=t=>({type:"DRAG",payload:t}),ud=t=>({type:"SET",payload:t}),kR=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Jd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Nr=(t,e,n)=>{const r=[...t];return al(r),{cells:r,lastCell:e,mode:n}};function MR(t,e,n){if(e===null)return Jd();if(n==="RESETTING")return Nr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Qe(e,i));if(n==="SELECTING")return r!==-1?t:Nr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Nr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Nr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Nr(i,null,"DESELECTING")}return t}function UR(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:Nr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Nr(r,null,t.mode)}return t}function GR(t,e){return{...t,cells:e}}function $R(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Qe(e,i))!==-1?Nr([...t.cells],e,"SELECTING"):Nr([...t.cells,e],e,"SELECTING"):Nr([e],e,t.mode)}function fp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Jd();case"SET":return GR(t,e.payload);case"CLICK":return MR(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return UR(t,e.payload);case"ARROW_KEY":return $R(t,e.payload.cell,e.payload.selectionMode);default:return t}}function co(t,e){return Qe(t.p1,e.p1)&&Qe(t.p2,e.p2)||Qe(t.p1,e.p2)&&Qe(t.p2,e.p1)}function FR(t,e){return Qe(t.p1,e.p2)&&Qe(t.p2,e.p1)}function gp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Qe(t,e)}class Rl{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Qe(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Qe(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Qe(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Qe(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Qe(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>co(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>co(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&FR(r,e)&&this.draftLine.splice(n,1)}onDrag(e){gp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>co(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>co(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Rl;return Object.assign(e,this),e}}const Nh=t=>({type:"ADD_EDGE_MARKER",payload:t}),Dh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),ja=t=>({type:"ADD_CELL_MARKER",payload:t}),PR=t=>({type:"SET_CELL_MARKERS",payload:t}),Rh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),zR=t=>({type:"DRAG",payload:t}),vo=t=>({type:"ADD_LINE_MARKERS",payload:t}),Th=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),e_=()=>({type:"RESET"});function HR(t,e){switch(e.type){case"RESET":return new Rl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function hp(){return{_undoStack:[],_redoStack:[]}}const Po=Rt(hp());function WR(){Po.update(()=>hp())}function or(t,e=!0){Po.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function BR(t,e=!0){Po.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function vp(){Po.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function pp(){Po.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const fl=Rt(new Rl);function br(t){fl.update(e=>HR(e,t))}const gl=Rt(1);function Li(t,e){return{execute:()=>{br(t)},unExecute:()=>{br(e)}}}const Mi=Rt(Jd());function ao(t){t&&Mi.update(e=>fp(e,t))}function kh(t){t&&Mi.update(e=>fp(e,t))}function YR(t,e){return{execute:()=>{kh(t)},unExecute:()=>{kh(e)}}}const po=Rt(null),Tl=Rt(bo.SETTING),dd=Rt(!1),en=Rt(f.DIGIT),mp=Rt(f.DIGIT),t_=Rt(At.range(1,10)),hn=Rt(new Fo(9,9)),Pn=Rt(De(hn).getAllCells()),Jr=Rt({}),lt=Rt(new $o),Wt=Rt(null),zo=Rt(void 0),kl=Rt(void 0);function jR(t){Jr.update(()=>t)}function Ho(t){Wt.update(()=>t)}function n_(t){zo.update(()=>t)}function Yr(t){De(en)!==t&&(en.update(()=>t),Ho(null))}function KR(){const t=De(mp);t&&Yr(t)}function _d(t){mp.update(()=>t)}function VR(t){De(en)===t&&Yr(f.DIGIT)}function XR(t){lt.update(e=>(e.removeFromDict(t),e)),n_(void 0)}function Xt(t,e,n){lt.update(r=>(r.updateConstraint(t,e,n),r)),Ho({id:e,constraint:n})}function Nu(t){const e=De(Wt);if(t=t?{...t}:void 0,n_(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Xt(r,e.id,n)}function hi(t,e){const r=De(lt).get(e);if(!r||!r.constraints)return;const i=r.constraints[t];i&&Ho({id:t,constraint:i})}function qR(t,e,n){const r=new Fo(t,e);hn.update(()=>r),t_.update(()=>n),lt.update(()=>new $o),Jr.update(()=>({})),r_(void 0),Pn.update(()=>r.getAllCells())}function ZR(t){hn.update(()=>t.grid),Jr.update(()=>t.puzzleMeta),r_(t.solution),t_.update(()=>t.valid_digits),lt.update(()=>t.elementsDict),Pn.update(()=>t.grid.getAllCells())}function Ep(){const t=De(hn);t.resetValues(),hn.update(()=>t),Pn.update(()=>t.getAllCells()),br(e_())}function hl(){WR(),br(e_()),Yr(f.DIGIT);const t=RR();ao(t),n_(void 0),Ho(null)}const QR=Bn(lt,t=>{for(const e of t.values()){const n=e.tool_id;if(n===f.FOG_LIGHTS||n===f.CUSTOM_FOG_CLEARING)return!0}return!1}),vi=Bn([Ln,QR,Tl,en],([t,e,n,r])=>{const i=t.hideFog,o=e,s=r,l=s===f.DIGIT||s===f.CORNER_PM||s===f.CENTER_PM||s===f.HIGHLIGHTS||s===f.PEN_TOOL;return!i&&o&&(l||n===bo.SOLVING)});Bn([Ln,Tl],([t,e])=>!t.hideFog&&e===bo.SETTING);const Bs=Bn([hn,Jr,lt,kl,t_],([t,e,n,r,i])=>({grid:t,solution:r,puzzleMeta:e,valid_digits:i,elementsDict:n}));function r_(t){kl.update(()=>t)}var JR=ue('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function e2(t,e){let n=G(e,"title",8),r=G(e,"closeCb",8);var i=JR(),o=Y(i),s=Y(o,!0);H(o);var l=F(o,2);H(i),J(()=>it(s,n())),Ne("click",l,function(...u){var d;(d=r())==null||d.apply(this,u)}),L(t,i)}var t2=ue('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function pi(t,e){oe(e,!1);let n=G(e,"showModal",12),r=G(e,"title",8),i=S();function o(){n(!1),_(i).close()}D(()=>(_(i),X(n())),()=>{_(i)&&n()&&_(i).showModal()}),D(()=>(_(i),X(n())),()=>{_(i)&&!n()&&_(i).close()}),be();var s=t2(),l=Y(s),u=Y(l);e2(u,{get title(){return r()},closeCb:o});var d=F(u,2),g=Y(d),h=Y(g);yt(h,e,"default",{}),H(g),H(d),H(l),H(s),ki(s,v=>O(i,v),()=>_(i)),Ne("click",l,Fn(function(v){Ny.call(this,e,v)})),Ne("close",s,()=>{n(!1)}),Ne("click",s,Ly(Fn(()=>_(i).close()))),L(t,s),se()}var n2=ue('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function r2(t,e){oe(e,!1);let n=G(e,"searchPattern",12,""),r=G(e,"showModal",8),i=S(null);D(()=>(X(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),be();var o=n2(),s=F(Y(o),2);cn(s),x(s,"spellcheck",!1),ki(s,l=>O(i,l),()=>_(i)),H(o),ar(s,n),L(t,o),se()}var i2=ue('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function o2(t,e){let n=G(e,"showModal",12),r=G(e,"searchPattern",12,""),i=G(e,"title",8);pi(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,s)=>{var l=i2(),u=Y(l);r2(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var d=F(u,2),g=Y(d),h=Y(g);yt(h,e,"default",{}),H(g),H(d),H(l),L(o,l)},$$slots:{default:!0},$$legacy:!0})}var s2=ue('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Cp(t,e){let n=G(e,"isOpen",8,!0);var r=s2(),i=Y(r);yt(i,e,"default",{}),H(r),J(()=>{x(r,"aria-expanded",n()),St(r,"closed",!n())}),L(t,r)}var a2=ue('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),l2=ue('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Di(t,e){let n=G(e,"title",8),r=G(e,"isOpen",12,!0),i=G(e,"isCollapsible",8,!1);var o=Ee(),s=ee(o);{var l=d=>{var g=a2(),h=Y(g),v=Y(h),m=Y(v,!0);H(v),H(h);var E=F(h,2),I=Y(E);yt(I,e,"default",{}),H(E),H(g),J(()=>it(m,n())),L(d,g)},u=d=>{var g=l2(),h=Y(g),v=Y(h),m=Y(v,!0);H(v),H(h);var E=F(h,2),I=Y(E);yt(I,e,"default",{});var b=F(I,2);H(E),H(g),J(()=>{it(m,n()),St(b,"open",r())}),Ne("click",g,()=>r(!r())),L(d,g)};Q(s,d=>{i()?d(u,!1):d(l)})}L(t,o)}var c2=ue('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),u2=ue('<ol class="svelte-cd45on"></ol>'),d2=ue("<!> <!>",1);function _2(t,e){oe(e,!1);const n=S();let r=G(e,"category",8),i=G(e,"addTool",8),o=G(e,"searchResults",8),s=S(!0);D(()=>(X(o()),X(r())),()=>{O(n,o().filter(g=>{var h,v;return(v=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:v.includes(r())}))}),be(),fe();var l=Ee(),u=ee(l);{var d=g=>{var h=d2(),v=ee(h);Di(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(s)},set isOpen(E){O(s,E)},$$legacy:!0});var m=F(v,2);Cp(m,{get isOpen(){return _(s)},children:(E,I)=>{var b=u2();qe(b,5,()=>_(n),pt,(w,A)=>{let T=()=>_(A).key,k=()=>_(A).info;var U=c2(),j=Y(U),M=Y(j,!0);H(j),H(U),J(()=>{var $;x(j,"title",($=k().meta)==null?void 0:$.description),it(M,T())}),Ne("click",j,()=>{i()(T())}),L(w,U)}),H(b),L(E,b)},$$slots:{default:!0}}),L(g,h)};Q(u,g=>{_(n).length&&g(d)})}L(t,l),se()}function f2(t,e){oe(e,!1);const n=S();let r=G(e,"searchPattern",8,""),i=G(e,"addTool",8),o=G(e,"categories",8),s=G(e,"filterFunc",8),l=G(e,"elementHandlers",8);D(()=>(X(r()),X(s()),X(l())),()=>{O(n,WD(r(),s(),l()))}),be(),fe();var u=Ee(),d=ee(u);qe(d,1,o,pt,(g,h)=>{_2(g,{get category(){return _(h)},get searchResults(){return _(n)},get addTool(){return i()}})}),L(t,u),se()}var g2=ue('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Ml(t,e){let n=G(e,"isOpen",12),r=G(e,"title",8);var i=g2();x(i,"tabindex",0);var o=Y(i),s=Y(o);yt(s,e,"add-button",{}),H(o);var l=F(o,2),u=Y(l),d=Y(u);yt(d,e,"title-icon",{}),H(u);var g=F(u);H(l);var h=F(l,2),v=Y(h);H(h),H(i),J(()=>{it(g,` ${r()??""}`),St(v,"open",n())}),Ne("click",i,()=>n(!n())),Ne("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),L(t,i)}var h2=ue('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Element"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function v2(t,e){let n=G(e,"isOpen",12),r=G(e,"title",8),i=G(e,"showModal",12);function o(){i(!i())}Ml(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,l)=>{var u=h2();Ne("click",u,Fn(()=>o())),L(s,u)},"title-icon":(s,l)=>{var u=Ee(),d=ee(u);yt(d,e,"title-icon",{}),L(s,u)}},$$legacy:!0})}var p2=ue('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),m2=ue('<div class="panel-container svelte-hixu4"><!> <!></div>');function Ul(t,e){let n=G(e,"isOpen",8,!0);var r=m2(),i=Y(r);yt(i,e,"panel-header",{});var o=F(i,2);Cp(o,{get isOpen(){return n()},children:(s,l)=>{var u=p2(),d=Y(u);yt(d,e,"panel-content",{}),H(u),L(s,u)},$$slots:{default:!0}}),H(r),L(t,r)}var E2=ue("<!> <!>",1);function C2(t,e){oe(e,!1);let n=G(e,"categories",8),r=G(e,"title",8),i=G(e,"onAddTool",8),o=G(e,"elementHandlerFilterFunc",8),s=G(e,"elementHandlers",8),l=S(!0),u=S(!1),d=S("");const g=h=>{O(u,!1),O(l,!0),i()(h)};fe(),Ul(t,{get isOpen(){return _(l)},set isOpen(h){O(l,h)},$$slots:{"panel-header":(h,v)=>{var m=E2(),E=ee(m);v2(E,{get title(){return r()},get isOpen(){return _(l)},set isOpen(b){O(l,b)},get showModal(){return _(u)},set showModal(b){O(u,b)},$$slots:{"title-icon":(b,w)=>{var A=Ee(),T=ee(A);yt(T,e,"title-icon",{}),L(b,A)}},$$legacy:!0});var I=F(E,2);o2(I,{get title(){return r()},get showModal(){return _(u)},set showModal(b){O(u,b)},get searchPattern(){return _(d)},set searchPattern(b){O(d,b)},children:(b,w)=>{f2(b,{get searchPattern(){return _(d)},get categories(){return n()},get filterFunc(){return o()},addTool:g,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),L(h,m)},"panel-content":(h,v)=>{var m=Ee(),E=ee(m);yt(E,e,"panel-content",{}),L(h,m)}},$$legacy:!0}),se()}var b2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function I2(t){var e=b2();L(t,e)}var lo=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(lo||{});const i_=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),o_=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),w2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),y2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),Mh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function O2(t){lt.update(e=>(e.addToDict(t),e))}function Ys(t,e){const n=De(zo);n&&(e.shape={...n}),lt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Ho({id:t,constraint:e})}function s_(t,e){e&&lt.update(n=>(n.removeConstraint(t,e),n))}function bp(t,e){lt.update(n=>(n.setElement(t,e),n))}function Uh(t){t.type===lo.ADD_LOCAL_CONSTRAINT?Ys(t.payload.id,t.payload.constraint):t.type===lo.REMOVE_LOCAL_CONSTRAINT?s_(t.payload.tool,t.payload.id):t.type===lo.REMOVE_LOCAL_CONSTRAINT_GROUP?XR(t.payload.tool):t.type===lo.RESTORE_ELEMENT?bp(t.payload.tool,t.payload.constraints):t.type===lo.UPDATE_LOCAL_CONSTRAINT&&Xt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function js(t,e){return{execute:()=>{Uh(t)},unExecute:()=>{Uh(e)}}}var A2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Ip(t){var e=A2();L(t,e)}var x2=ue('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function S2(t,e){oe(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=S(),o=S();let s=G(e,"tool_id",8),l=G(e,"neg_tool_id",8),u=G(e,"description",8);function d(){_(i)&&(_(i).negative_constraints||Yu(i,_(i).negative_constraints={}),Yu(i,_(i).negative_constraints[l()]=!_(o)),bp(s(),_(i)),O(o,!_(o)))}D(()=>(r(),X(s())),()=>{O(i,r().get(s()))}),D(()=>(_(i),X(l())),()=>{var I;O(o,(I=_(i))!=null&&I.negative_constraints?!!_(i).negative_constraints[l()]:!1)}),be(),fe();var g=x2(),h=Y(g),v=Y(h);_i(2),H(h);var m=F(h,2),E=Y(m,!0);H(m),H(g),J(()=>{x(g,"title",u()),St(h,"checked",_(o)),St(v,"checked",_(o)),it(E,l())}),Ne("click",v,d),L(t,g),se()}var L2=ue('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function N2(t,e){oe(e,!1);const n=Ye(),r=()=>ge(po,"$svgRefStore",n),i=()=>ge(lt,"$elementsDictStore",n),o=()=>ge(Wt,"$currentConstraintStore",n),s=S();let l=G(e,"constraint_id",8),u=G(e,"tool_id",8);function d(){hi(l(),u()),r()&&r().focus()}function g(){const w=i().getConstraint(u(),l());if(!w)return;const A=o_(l(),u()),T=i_(l(),w),k=js(A,T);or(k)}D(()=>o(),()=>{var w;O(s,(w=o())==null?void 0:w.id)}),be(),fe();var h=L2(),v=Y(h),m=Y(v);H(v);var E=F(v,2),I=Y(E),b=Y(I);Ip(b),H(I),H(E),H(h),J(()=>{St(h,"active",l()===_(s)),it(m,`ID: ${l()??""}`)}),Ne("click",I,Fn(g)),Ne("click",h,d),L(t,h),se()}var D2=ue('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function R2(t,e){oe(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=S();let o=G(e,"tool_id",8);D(()=>(r(),X(o())),()=>{O(i,r().get(o()))}),be(),fe();var s=Ee(),l=ee(s);{var u=d=>{var g=D2(),h=Y(g);qe(h,5,()=>Object.entries(_(i).constraints),v=>v[0],(v,m)=>{N2(v,{get constraint_id(){return _(m)[0]},get tool_id(){return o()}})}),H(h),H(g),L(d,g)};Q(l,d=>{_(i)&&_(i).constraints&&Object.entries(_(i).constraints).length&&d(u)})}L(t,s),se()}function Gh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const s=new Set(o.highlights);return n.difference(s).size===0}).map(o=>o.toCoords())}function T2(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function $h(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const s=new Set(o.cornerMarks);return n.difference(s).size===0}).map(o=>o.toCoords())}function Fh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const s=new Set(o.centerMarks);return n.difference(s).size===0}).map(o=>o.toCoords())}function k2(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===f.HIGHLIGHTS&&i.highlights.length?Gh(i,e):i.value!==null?T2(i,e):n===f.CORNER_PM&&i.cornerMarks.length?$h(i,e):n===f.CENTER_PM&&i.centerMarks.length?Fh(i,e):i.cornerMarks.length?$h(i,e):i.centerMarks.length?Fh(i,e):i.highlights.length?Gh(i,e):r:r}function Hn(t,e,n,r=!1){if(!(t&&e))return;const i=i_(t,e),o=o_(t,n),s=js(i,o);or(s,r)}function Ir(t,e,n,r=!0){if(!(t&&e))return;const i=o_(t,n),o=i_(t,e),s=js(i,o);or(s,r)}function fd(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Mh(r,t,n),s=Mh(r,t,e),l=js(o,s);or(l,i)}class Ue{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ue(this.x+e.x,this.y+e.y)}subtract(e){return new Ue(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ue(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ue(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function wp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const bn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ue(i.x,i.y)};function qa(t,e){const n=Ll(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function M2(t,e){const n=Ll(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Za(t,e){const n=Ll(t),r=XN(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),s=o.indexOf(Math.min(...o)),l=r[s],u=o[s];return e===void 0||u<e?{corner:l,dist:u,idx:s}:null}function Qa(t,e){const n=Ll(t),r=qN(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),s=o.indexOf(Math.min(...o)),l=r[s],u=o[s];return e===void 0||u<e?{edge:l,dist:u,idx:s}:null}function ws(t,e,n){const r=qa(t);if(!r)return null;const i=Qa(t);if(!i)return null;const o=Za(t);if(!o)return null;const s=M2(t);if(!s)return null;let l,u;e===Lt.CORNER?(l=o.corner,u="corner"):e===Lt.EDGE?(l=i.edge,u="edge"):e===Lt.CELL_CENTER?(l=s.cellCenter,u="cell center"):e===Lt.CORNER_OR_EDGE?o.dist<i.dist?(l=o.corner,u="corner"):(l=i.edge,u="edge"):e===Lt.CORNER_OR_CENTER?o.dist<s.dist?(l=o.corner,u="corner"):(l=s.cellCenter,u="cell center"):e===Lt.EDGE_OR_CENTER?i.dist<s.dist?(l=i.edge,u="edge"):(l=s.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<s.dist?(l=i.edge,u="edge"):o.dist<i.dist&&o.dist<s.dist?(l=o.corner,u="corner"):(l=s.cellCenter,u="cell center");const g=new Ue(l.c,l.r).subtract(t).length(),h=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:s.cellCenter,edge:i.edge,corner:o.corner,dist:g,closest:l,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:h}}class Wo{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;this._prevPoint=r;const i=qa(r);if(!i)return;const o=i.cell;this._prevCell=o,this._lastPointerDownTime=e.timeStamp;const s={event:e,cell:o,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){const r=bn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=qa(r,i);if(!o)return;const s=o.cell;if(this._prevCell&&Qe(this._prevCell,s))return;this._prevCell=s,this._prevPoint=r,this._isTap=!1;const l={event:e,cell:s,tapCount:this._tapCount};this.onMove&&this.onMove(l),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(l)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=bn(e,n);if(!r)return;const i=qa(r,void 0);if(!i)return;const o=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const l=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,l>0&&l<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function U2(t,e,n,r){const i=new Wo,o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null,u=null,d=!1,g=!1,h=Un.DYNAMIC;function v(E){d=!1;const I=E.cell;if(Ft(E.cell,o)){if(h===Un.DYNAMIC){const w=De(lt),A=bR(w,n,I);if(A){const k=nR(A.arrow,A.matchLineIdx);fd(A.id,A.arrow,k,n,!0),g=!0;return}const T=Oh(w,n,I);if(!T)d=!0,h=Un.EDIT_BULB,u=null,s=null;else{h=Un.EDIT_ARROWS,u=T[0],s=T[1],s=td(s,I),Xt(n,u,s);return}}if(h===Un.EDIT_BULB&&!u){u=At.uniqueId(),s=sp(n,[I]),Ys(u,s);return}else h===Un.EDIT_BULB&&u&&s?(s=QD(s,I),Xt(n,u,s)):h===Un.EDIT_ARROWS&&u&&s&&(s=JD(s,I,r==null?void 0:r.allowSelfIntersection),Xt(n,u,s))}}return i.onDragStart=E=>{h=Un.DYNAMIC,v(E)},i.onDrag=E=>{v(E)},i.onDragEnd=()=>{if(g){g=!1;return}h===Un.EDIT_ARROWS&&u&&s?eR(s)?(s=tR(s),Xt(n,u,s)):(fd(u,l,s,n),l=s):h===Un.EDIT_BULB&&(Hn(u,s,n),l=s),h=Un.DYNAMIC},i.onTap=E=>{if(d)return;const I=E.cell,b=De(lt);if(Oh(b,n,I)){Ir(u,s,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function G2(t,e,n,r){const i=new Wo,o={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let l=null,u=null;function d(v){return!!Ft(v.cell,o)}function g(v){if(!u||!l)throw"UNREACHABLE";const m=v.cell;d(v)&&(l=ZD(l,m,s),Xt(n,u,l))}return i.onDragStart=v=>{De(Yt)!==ke.DELETE&&(u=At.uniqueId(),l=ip(n,[],r==null?void 0:r.defaultValue),Ys(u,l),g(v))},i.onDrag=v=>{g(v)},i.onDragEnd=()=>{u&&l&&l.cells.length<=1?s_(n,u):u&&l&&Hn(u,l,n,!1),u=null},i.onTap=v=>{if(De(Yt)===ke.ADD_EDIT)return;const E=v.cell,I=De(lt),b=CR(I,n,E);if(b){const[w,A]=b;Ir(w,A,n)}},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:v=>{i.pointerMove(v,t)},pointerUp:v=>{i.pointerUp(v,t)},keyDown:()=>{},keyUp:()=>{}}}const $2=Bn(lt,t=>{const e=[];for(const[n,r]of t.entries())Uy(n)&&e.push(r);return e});function Bo(t){return Bn(lt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push(o);return r})}const a_=Bo(Gd),yp=Bn(a_,t=>{const e=t.find(r=>r.tool_id===f.FOG_LIGHTS);return e?e.constraints:{}}),F2=Bn(lt,t=>{for(const e of t.values())if(e.tool_id===f.CUSTOM_FOG_CLEARING)return e}),P2=Bn(a_,t=>{const e=t.find(r=>r.tool_id===f.MINIMUM);return e?e.constraints:{}}),z2=Bn(a_,t=>{const e=t.find(r=>r.tool_id===f.MAXIMUM);return e?e.constraints:{}}),H2=Bo(wo),W2=Bo(Ds),B2=Bo(Ns),Y2=Bo(Tv),j2=Bo(Ry),Ja=Rt(void 0),el=Rt(void 0),tl=Rt(void 0),nl=Rt(void 0),rl=Rt(void 0),Cs=Rt(void 0),il=Rt(void 0);Bn([lt,en],([t,e])=>{const n=e;return t.get(n)});function K2(t,e,n,r){const i=new Wo,o={nRows:e.nRows,nCols:e.nCols};function s(d){const g=De(lt),h=d.cell;if(!Ft(d.cell,o))return;let m=De(Yt);const E=uo(g,n,h);if(m===ke.DYNAMIC&&(m=E?ke.DELETE:ke.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&uo(g,r.oppositeConstraintId,h)))if(E&&m===ke.DELETE){const[I,b]=E;Ir(I,b,n)}else if(!E&&m===ke.ADD_EDIT){const I=od(n,h,r==null?void 0:r.defaultValue),b=At.uniqueId();Hn(b,I,n,!0)}else E&&m===ke.ADD_EDIT&&hi(E[0],n)}i.onDragStart=d=>{s(d)},i.onDrag=d=>{s(d)},i.onMove=d=>{if(!Ft(d.cell,o)){Ja.set(void 0);return}const h=od(n,d.cell,r==null?void 0:r.defaultValue),v=De(zo);v&&(h.shape={...v});const m=De(Yt),E=De(lt),I=uo(E,n,d.cell);if(!I&&m===ke.DELETE){Ja.set(void 0);return}let b="add",w;I&&(m===ke.DELETE||m===ke.DYNAMIC)&&(b="remove",w=I[0]);const A={tool:h,match_id:w,mode:b};Ja.set(A)};function l(d){const g=De(Wt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!No(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Go(h,m),Xt(n,v,h))}return{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class Gl{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"feature");ve(this,"_prevCoord",null);ve(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=bn(e,n);if(!r)return;const i=ws(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=ws(r,this.feature);if(!i||this._prevCoord&&Qe(i.closest,this._prevCoord)&&this._prevCellCoord&&Qe(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function V2(t,e,n,r){const i=(r==null?void 0:r.targets)??Lt.CLOSEST,o=new Gl(i),s={nRows:e.nRows,nCols:e.nCols};function l(g){const h=De(lt),v=g.cell,m=g.closest;let E=De(Yt);if(!Ft(v,s))return;const b=xh(h,n,m);if(E===ke.DYNAMIC&&(E=b?ke.DELETE:ke.ADD_EDIT),b&&E===ke.DELETE){const w=b[0];Ir(w,b[1],n)}else if(!b&&E===ke.ADD_EDIT){const w=ld(n,m,""),A=At.uniqueId();Hn(A,w,n,!0)}else b&&E===ke.ADD_EDIT&&hi(b[0],n)}function u(g){const h=De(Wt);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!No(g.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=Go(v,E),Xt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(!Ft(g.cell,s)){il.set(void 0);return}const v=De(Yt),m=ld(n,g.closest,""),E=De(zo);E&&(m.shape={...E});const I=De(lt),b=xh(I,n,g.closest);if(!b&&v===ke.DELETE){il.set(void 0);return}let w="add",A;b&&(v===ke.DYNAMIC||v===ke.DELETE)&&(w="remove",A=b[0]);const T={tool:m,match_id:A,mode:w};il.set(T)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function X2(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Lt.CORNER_OR_EDGE,o=new Gl(i),s={nRows:e.nRows,nCols:e.nCols};function l(g){const h=De(lt),v=g.cell,m=g.direction,E=ho(m);if(Ft(v,s))return;const b=vh(v,E);if(!Ft(b,s))return;let A=De(Yt);const T=Ah(h,n,v,E);if(A===ke.DYNAMIC&&(A=T?ke.DELETE:ke.ADD_EDIT),T&&A===ke.DELETE){const[k,U]=T;Ir(k,U,n)}else if(!T&&A===ke.ADD_EDIT){const k=id(n,v,E,""),U=At.uniqueId();Hn(U,k,n,!0)}else T&&A===ke.ADD_EDIT&&hi(T[0],n)}function u(g){const h=De(Wt);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!No(g.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=Go(v,E),Xt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(Ft(g.cell,s)){Cs.set(void 0);return}const v=ho(g.direction),m=vh(g.cell,v);if(!Ft(m,s)){Cs.set(void 0);return}const I=De(Yt),b=De(lt);if(!Ah(b,n,g.cell,v)&&I===ke.DELETE){Cs.set(void 0);return}const A=id(n,g.cell,v,"");Cs.set(A)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function q2(t,e,n,r){const i=new Wo,o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null;function u(h){const v=De(lt),m=h.cell;if(!Ft(h.cell,o))return;let I=De(Yt);const b=ER(v,n,m);if(b&&(h.event.shiftKey||I===ke.ADD_EDIT)&&(l=b[0],s=b[1],Ho({id:l,constraint:s}),I=ke.ADD_EDIT),I===ke.DYNAMIC&&(I=b?ke.DELETE:ke.ADD_EDIT),b&&I===ke.DELETE){Ir(b[0],b[1],n);return}if(!s&&I===ke.ADD_EDIT){s=ap(n,[m]),l=At.uniqueId(),Ys(l,s);return}else if(s&&l&&I===ke.ADD_EDIT){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=iR(s,m,w),Xt(n,l,s);return}}function d(h){const v=De(Wt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!No(h.key)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=oR(m,I),Xt(n,E,m))}return i.onDragStart=h=>{l=null,s=null,u(h)},i.onDrag=h=>{u(h)},i.onDragEnd=()=>{l&&s&&Hn(l,s,n,!1),l=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{d(h)},keyUp:()=>{}}}var Er=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Er||{});const Z2=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Op=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),Q2=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),J2=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),eT=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),tT=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Du=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),nT=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Ru=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),$l=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function rT(t,e,n){if(e===f.DIGIT){const r=t.map(s=>s.value),i=Z2(t,n),o=Op(t,r);return[i,o]}if(e===f.GIVEN){const r=t.map(l=>l.value),i=t.map(l=>l.given),o=Q2(t,n),s=J2(t,r,i);return[o,s]}if(e===f.REGIONS){const r=t.map(s=>s.region),i=eT(t,n),o=tT(t,r);return[i,o]}if(e===f.HIGHLIGHTS&&n!==null){const r=Ru(t,n),i=Ru(t,n);return[r,i]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=Ru(t,n),o=$l(t,r);return[i,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Du(t,n,e),i=Du(t,n,e);return[r,i]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=Du(t,n,e),o=nT(t,r,e);return[i,o]}}function fs(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Pn.update(i=>i)}function mo(t){switch(t.type){case Er.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;fs(e,f.DIGIT,n,!0);break}case Er.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;fs(e,f.GIVEN,n,!0);break}case Er.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;fs(e,f.REGIONS,n,!0);break}case Er.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;fs(e,f.HIGHLIGHTS,n,!0);break}case Er.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;fs(e,r,n,!0);break}case Er.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Pn.update(r=>r);break}case Er.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Pn.update(i=>i);break}case Er.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Pn.update(r=>r);break}case Er.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Pn.update(r=>r);break}case Er.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===f.CENTER_PM?e[i].centerMarks=r[i]:n===f.CORNER_PM&&(e[i].cornerMarks=r[i]);Pn.update(i=>i);break}}}function iT(t,e){return{execute:()=>{mo(t)},unExecute:()=>{mo(e)}}}const oo=new Wo;function Ph(t,e){return t.shiftKey?Es.SELECTING:t.ctrlKey||t.metaKey||e?Es.DYNAMIC:t.altKey?Es.DESELECTING:Es.RESETTING}function gd(t,e,n,r,i=!1){switch(e){case f.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case f.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case f.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r))}return t}function oT(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=i=>i===f.CORNER_PM||i===f.CENTER_PM||i===f.DIGIT;for(const i of n){const o=gd(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function Tu(t,e,n,r){const i=rT(e,n,r);if(i){const o=i[0],s=i[1],l=iT(o,s),u=ud(t),g=[YR(u,u),l];BR(g)}}function sT(t,e,n){const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};oo.onTap=m=>{if(m.tapCount!==2)return;const I=Ft(m.cell,i)?m.cell:null;if(!I)return;const b=k2(I,e,n),w=ud(b);ao(w)},oo.onDragStart=m=>{const E=Ft(m.cell,i),I=De(dd),b=Ph(m.event,I),w=E?m.cell:null,A=DR(w,b);ao(A)},oo.onDrag=m=>{const I=Ft(m.cell,i)?m.cell:null,b=TR(I);ao(b)};function o(m){if(!aO(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=ud(E);return ao(I),!0}function s(m){if(!_O(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=gO(m);return Yr(E),!0}return m.type==="keyup"?(KR(),!0):!1}function l(m){if(!dO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Yr(I),_d(I),!0}else{const E=fO(m.code);return Yr(E),_d(E),!0}}function u(m){if(!vO(m))return!1;const E=De(Mi).lastCell;let I=null;if(E!==null){const[A,T]=pO(m),[k,U]=[Sh(E.r+T,0,i.nRows-1),Sh(E.c+A,0,i.nCols-1)];I={r:k,c:U}}else I={r:0,c:0};const b=Ph(m,!1),w=kR(I,b);return ao(w),!0}function d(m){const E=uO(m);if(E===void 0)return!1;const I=De(Mi).cells,b=[];if(I.forEach(w=>{const A=e.getCell(w.r,w.c);A&&b.push(A)}),E===null){const{tool:w,cells:A}=oT(b,n);if(A.length)return Tu(I,A,w,E),!0}else{let w=gd(b,n,"different",E,!0);if(w.length)return Tu(I,w,n,E),!0;if(w=gd(b,n,"equal",E,!0),w.length)return Tu(I,w,n,E),!0}return!1}function g(m){return m.repeat?!1:d(m.key)}const h=At.throttle(m=>{oo.pointerMove(m,t)},10);return{pointerDown(m){m.button===0&&oo.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){oo.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||g(m)||s(m)||l(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){d(m.currentTarget.value)}}}function aT(t,e,n,r){const i=[Fe.N,Fe.NE,Fe.E,Fe.SE,Fe.S,Fe.SW,Fe.W,Fe.NW],o=new Gl(r.cornerOrEdge),s={nRows:e.nRows,nCols:e.nCols};let l=null,u=null;function d(v){const m=De(lt),E=v.cell;if(!Ft(v.cell,s))return;let b=De(Yt);v.event.altKey&&(b=ke.DELETE);const w=uo(m,n,E),A=ho(v.direction);!w&&b!==ke.DELETE?(l=sd(n,E,A),u=At.uniqueId(),Hn(u,l,n,!0)):w&&(w[1].direction===A&&b===ke.ADD_EDIT?([u,l]=w,hi(w[0],n)):w[1].direction===A&&b===ke.DYNAMIC||b===ke.DELETE?Ir(w[0],w[1],n):(u=w[0],l={...w[1],direction:A},Xt(n,w[0],l)))}function g(v){if(!lO(v))return;const m=De(Wt);if(!m)return;const E=m.id,I=m.constraint;if(!$i(I.toolId))return;const w=(i.indexOf(I.direction)+1)%i.length;l={...I,direction:i[w]},Xt(n,E,l)}return o.onDragStart=v=>{d(v)},o.onMove=v=>{if(!Ft(v.cell,s)){el.set(void 0);return}const E=ho(v.direction),I=sd(n,v.cell,E),b=De(Yt),w=De(lt),A=uo(w,n,v.cell);if(!A&&b===ke.DELETE){el.set(void 0);return}let T="add",k;A&&(b===ke.DELETE||A[1].direction===E&&b===ke.DYNAMIC)&&(T="remove",k=A[0]);const U={tool:I,match_id:k,mode:T};el.set(U)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}function lT(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function cT(t,e,n,r){const i=new Gl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null;function u(g){const h=De(lt),v=g.cell;if(!Ft(g.cell,o))return;let E=De(Yt);E===ke.DYNAMIC&&g.event.altKey&&(E=ke.DELETE);const I=ho(g.direction),b=uo(h,n,v);if(!b&&E!==ke.DELETE)s=ad(n,v,I),l=At.uniqueId(),Hn(l,s,n,!0);else if(b)if(b[1].directions.includes(I)&&E!==ke.DELETE&&([l,s]=b,hi(b[0],n)),b&&E===ke.DELETE)Ir(b[0],b[1],n);else{const w=lT(b[1].directions,I);w.length>0?(l=b[0],s={...b[1],directions:w},Xt(n,b[0],s)):Ir(b[0],b[1],n)}}return i.onDragStart=g=>{u(g)},i.onMove=g=>{if(!Ft(g.cell,o)){tl.set(void 0);return}const v=ho(g.direction),m=ad(n,g.cell,v);if(De(Yt)===ke.DELETE){tl.set(void 0);return}tl.set(m)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class uT{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i||this._prevCoord&&Qe(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function dT(t,e,n,r){const i=new uT,o={nRows:e.nRows,nCols:e.nCols};function s(d){const g=De(lt),h=d.coord;let v=De(Yt);const m=cl(h);if(!m.every(b=>Ft(b,o)))return;let I=null;if(I=wh(g,n,m),v===ke.DYNAMIC&&(v=I?ke.DELETE:ke.ADD_EDIT),I&&v===ke.DELETE){const b=I[0];Ir(b,I[1],n)}else if(!I&&v===ke.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",w=rd(n,m,b),A=At.uniqueId();Hn(A,w,n,!0)}else I&&v===ke.ADD_EDIT&&hi(I[0],n)}function l(d){const g=De(Wt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!No(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Go(h,m),Xt(n,v,h))}return i.onDragStart=d=>{s(d)},i.onMove=d=>{if(!Ft(d.coord,o)){nl.set(void 0);return}const h=De(Yt),v=cl(d.coord),m=(r==null?void 0:r.defaultValue)??"",E=rd(n,v,m),I=De(zo);I&&(E.shape={...I});const b=De(lt),w=wh(b,n,v);if(!w&&h===ke.DELETE){nl.set(void 0);return}let A="add",T;w&&(h===ke.DYNAMIC||h===ke.DELETE)&&(A="remove",T=w[0]);const k={tool:E,match_id:T,mode:A};nl.set(k)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class _T{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,s=Za(r,o);if(!s)return;this._prevCoord=s.corner;const l={event:e,coord:s.corner};this.onDragStart&&this.onDragStart(l)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i||this._prevCoord&&Qe(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=bn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function fT(t,e,n,r){const i=new _T,o={nRows:e.nRows,nCols:e.nCols};function s(d){const g=De(lt),h=d.coord;let v=De(Yt);const m=ll(h);if(!m.every(b=>Ft(b,o)))return;let I=null;if(I=yh(g,n,h),v===ke.DYNAMIC&&(v=I?ke.DELETE:ke.ADD_EDIT),I&&v===ke.DELETE){const b=I[0];Ir(b,I[1],n)}else if(!I&&v===ke.ADD_EDIT){const b=nd(n,m,r==null?void 0:r.defaultValue),w=At.uniqueId();Hn(w,b,n,!0)}else I&&v===ke.ADD_EDIT&&hi(I[0],n)}function l(d){const g=De(Wt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!No(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Go(h,m),Xt(n,v,h))}return i.onDragStart=d=>{s(d)},i.onMove=d=>{if(!Ft(d.coord,o)){rl.set(void 0);return}const h=De(Yt),v=ll(d.coord),m=nd(n,v,r==null?void 0:r.defaultValue),E=De(zo);E&&(m.shape={...E});const I=De(lt),b=yh(I,n,d.coord);if(!b&&h===ke.DELETE){rl.set(void 0);return}let w="add",A;b&&(h===ke.DYNAMIC||h===ke.DELETE)&&(w="remove",A=b[0]);const T={tool:m,match_id:A,mode:w};rl.set(T)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class gT{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const i=ws(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=bn(e,n);if(!r)return;const i=ws(r,Lt.CLOSEST);if(!i||this._prevCoords&&Qe(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&gp(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=bn(e,n);if(!r)return;const i=ws(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Qe(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function hT(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new gT;return r.onTap=o=>{const s=o.coords,l=De(gl),u=De(fl);if(o.type==="cell center"){if(!KN(s,n))return;const g=u.getCellMarker(s);if(g)if(g.marker==="X"){const h={...s,colorId:l,marker:"O"},v=ja(h),m=ja(g),E=Li(v,m);or(E)}else{const h=Rh(s),v=ja(g),m=Li(h,v);or(m)}else{const h={...s,colorId:l,marker:"X"},v=ja(h),m=Rh(s),E=Li(v,m);or(E)}}else if(o.type==="edge"){const d=u.getEdgeMarker(s);if(d){const g=Dh(s),h=Nh(d),v=Li(g,h);or(v)}else{const g={...s,colorId:l},h=Nh(g),v=Dh(s),m=Li(h,v);or(m)}}},r.onDrag=o=>{const s=o.coords,l=De(gl);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:s,colorId:l},d=zR(u);br(d)}},r.onDragEnd=()=>{const o=De(fl);if(o.mode==="add"){const s=o.draftLine.filter(l=>!o.lineMarkers.some(u=>co(l,u)));if(s.length){const l=vo(s),u=Th(s),d=Li(l,u);or(d)}}else{const s=o.lineMarkers.filter(l=>o.draftLine.some(u=>co(l,u)));if(s.length){const l=Th(s),u=vo(s),d=Li(l,u);or(d)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function vT(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function pT(t,e){const n=jv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function mT(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function ET(t){for(let e=0;;e++){const n=mT(e);if(!t.has(n))return n}}function CT(t,e,n){const r=new Wo,i={nRows:e.nRows,nCols:e.nCols};let o=null,s=null,l=null,u=null,d="cells2",g=De(Yt);function h(m){const E=De(lt),I=m.cell;if(!Ft(m.cell,i))return;const w=IR(E,n,I);if(w?(l=w[0],o=w[1],g===Sn.DYNAMIC&&(g=Sn.MOVE),g===Sn.MOVE&&(g=Sn.MOVE,u=I,d=o.cells2.some(T=>Qe(T,I))?"cells2":"cells")):g===Sn.DYNAMIC&&(g=Sn.SELECT),g===Sn.SELECT&&l===null){l=At.uniqueId();const A=wR(E,n),T=ET(A);o=vT(n,[I],T),Ys(l,o);return}else if(g===Sn.SELECT&&l&&o){o=pT(o,I),Xt(n,l,o);return}else if(g===Sn.MOVE&&l&&o&&u){const A={r:I.r-u.r,c:I.c-u.c},k=(d==="cells2"?o.cells2:o.cells).map(j=>({r:j.r+A.r,c:j.c+A.c}));if(!k.every(j=>Ft(j,i)))return;d==="cells"?o={...o,cells:k}:o={...o,cells2:k},u=I,Xt(n,l,o)}}return r.onDragStart=m=>{g=De(Yt),l=null,o=null,u=null,h(m)},r.onDrag=m=>{h(m)},r.onDragEnd=()=>{l&&o&&(g===Sn.SELECT?Hn(l,o,n):g===Sn.MOVE&&fd(l,s,o,n),s=o)},r.onTap=()=>{l&&g!==Sn.SELECT&&(s_(n,l),l=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function bT(t){if(t.type===he.SELECTION)return function(n,r,i){return sT(n,r,i)};if(t.type===he.SINGLE_CELL){let e=function(r,i,o){return K2(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_ARROW){let e=function(r,i,o){return aT(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return cT(r,i,o,n)};const n=t;return e}else if(t.type===he.EDGE){let e=function(r,i,o){return dT(r,i,o,n)};const n=t;return e}else if(t.type===he.CORNER){let e=function(r,i,o){return fT(r,i,o,n)};const n=t;return e}else if(t.type===he.LINE){let e=function(r,i,o){return G2(r,i,o,n)};const n=t;return e}else if(t.type===he.ARROW){let e=function(r,i,o){return U2(r,i,o,n)};const n=t;return e}else if(t.type===he.CAGE){let e=function(r,i,o){return q2(r,i,o,n)};const n=t;return e}else{if(t.type===he.CLONE)return function(n,r,i){return CT(n,r,i)};if(t.type===he.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return V2(r,i,o,n)};const n=t;return e}else if(t.type===he.OUTSIDE_DIRECTION){let e=function(r,i,o){return X2(r,i,o,n)};const n=t;return e}else if(t.type===he.PEN)return function(n,r){return hT(n,r)}}}const Ap=Bn([po,hn,en],([t,e,n])=>{const r=Nl(n,Ht);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?bT(i):void 0;return o?o(t,e,n):void 0}),Yt=Rt(void 0);var IT=ue('<button class="form-button svelte-lzdz6g"> </button>'),wT=ue('<button class="form-button radio-button svelte-lzdz6g" role="switch"> </button>'),yT=ue('<div class="tool-buttons svelte-lzdz6g"></div>');function OT(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Yt,"$toolModeStore",n),i=S(),o=S();let s=G(e,"tool_id",8);function l(v){go(Yt,v)}function u(){if($d(s())){const v=At.uniqueId(),m=lp(s(),"");Hn(v,m,s(),!0)}else if(s()===f.VARIABLE_CONSTRAINT){const v=At.uniqueId(),m=cp("","");Hn(v,m,s(),!0)}}go(Yt,Jy(s())),D(()=>X(s()),()=>{O(i,Qy(s()))}),D(()=>r(),()=>{O(o,r())}),be(),fe();var d=Ee(),g=ee(d);{var h=v=>{var m=yT();qe(m,5,()=>Object.values(_(i)),pt,(E,I)=>{var b=Ee(),w=ee(b);{var A=k=>{var U=IT(),j=Y(U,!0);H(U),J(()=>it(j,_(I))),Ne("click",U,u),L(k,U)},T=k=>{var U=wT(),j=Y(U,!0);H(U),J(()=>{x(U,"aria-checked",_(I)===_(o)),St(U,"selected",_(I)===_(o)),it(j,_(I))}),Ne("click",U,()=>l(_(I))),L(k,U)};Q(w,k=>{_(I)===Hd.CREATE?k(A):k(T,!1)})}L(E,b)}),H(m),L(v,m)};Q(g,v=>{_(i)&&v(h)})}L(t,d),se()}var AT=ue('<div class="value-editor svelte-1lvt8yv">Name: <input class="text-input" type="text"></div>'),xT=ue('<div class="value-editor svelte-1lvt8yv">Value: <input class="text-input" type="text"></div>'),ST=ue('<div class="editor-wrapper svelte-1lvt8yv"><div class="editor svelte-1lvt8yv"><div class="bool-constraints-container svelte-1lvt8yv"><!></div> <div class="value-editor-container svelte-1lvt8yv"><!> <!></div> <!> <!></div></div>');function LT(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S();let s=G(e,"tool_id",8);const l=Ht[s()],u=l.negative_constraints,d=!!(u&&Object.keys(u).length>0),h=Rv(s())||d;function v(w){if(!_(i))return;const T=w.target.value,k=l.inputOptions;if(!k||k.type!==he.VALUE_TOOL&&k.type!==he.CAGE&&k.type!==he.LINE&&k.type!==he.EDGE&&k.type!==he.CORNER&&k.type!==he.OUTSIDE_DIRECTION)return;const U=k.valueUpdater;if(!U)return;const j=U(T,"");if(j===void 0)return;const M=Go(_(i).constraint,j);Xt(s(),_(i).id,M)}function m(w){if(!_(i))return;const T=w.target.value;if(!l.inputOptions)return;const U=mR(_(i).constraint,T);Xt(s(),_(i).id,U)}D(()=>r(),()=>{O(i,r())}),D(()=>_(i),()=>{var w;O(o,(w=_(i))==null?void 0:w.constraint)}),be(),fe();var E=Ee(),I=ee(E);{var b=w=>{var A=ST(),T=Y(A),k=Y(T),U=Y(k);{var j=Z=>{var Ie=Ee(),me=ee(Ie);qe(me,1,()=>u,pt,(Oe,Se)=>{S2(Oe,{get tool_id(){return s()},get neg_tool_id(){return _(Se).toolId},get description(){return _(Se).description}})}),L(Z,Ie)};Q(U,Z=>{u&&Z(j)})}H(k);var M=F(k,2),$=Y(M);{var te=Z=>{var Ie=AT(),me=F(Y(Ie));cn(me),x(me,"spellcheck",!1),H(Ie),J(()=>ju(me,_(o).name)),Ne("change",me,Oe=>m(Oe)),L(Z,Ie)};Q($,Z=>{_(o)&&Object.hasOwn(_(o),"name")&&Z(te)})}var ae=F($,2);{var ie=Z=>{var Ie=xT(),me=F(Y(Ie));cn(me),x(me,"spellcheck",!1),H(Ie),J(()=>ju(me,_(o).value)),Ne("input",me,Oe=>v(Oe)),L(Z,Ie)};Q(ae,Z=>{var Ie;((Ie=_(o))==null?void 0:Ie.value)!==void 0&&Z(ie)})}H(M);var ce=F(M,2);OT(ce,{get tool_id(){return s()}});var we=F(ce,2);R2(we,{get tool_id(){return s()}}),H(T),H(A),L(w,A)};Q(I,w=>{h&&w(b)})}L(t,E),se()}var NT=ue('<button class="form-button icon header-button svelte-8ay9bc"><!></button>'),DT=ue('<div class="element-button-wrapper svelte-8ay9bc"><div class="constraints-ui svelte-8ay9bc"><div class="header svelte-8ay9bc"><div class="element-icon-container svelte-8ay9bc"></div> <div class="element-name svelte-8ay9bc"></div> <!></div> <!></div></div>');function ku(t,e){oe(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=()=>ge(en,"$toolStore",n),o=S();let s=G(e,"tool_id",8),l=G(e,"elementHandlers",8);const u=!!l()[s()].permanent;let d=S(!1),g=s();function h(){_(d)?Yr(f.DIGIT):Yr(s())}function v(){VR(s());const j=r().get(s());if(!j)return;const M=w2(s()),$=y2(s(),j),te=js(M,$);or(te)}function m(){var te,ae;const j=(te=_(o).meta)==null?void 0:te.description,M=((ae=_(o).meta)==null?void 0:ae.usage)??Zy(s());let $;return j&&j.length&&($=j),M.length&&($?$=$+`

`+M:$=M),$}D(()=>(X(s()),X(l())),()=>{O(o,Nl(s(),l()))}),D(()=>(X(s()),i()),()=>{O(d,s()===i())}),be(),fe();var E=DT(),I=Y(E);St(I,"clickable",!0);var b=Y(I);J(()=>x(b,"title",m()));var w=F(Y(b),2);w.textContent=g;var A=F(w,2);{var T=j=>{var M=NT(),$=Y(M);Ip($),H(M),Ne("click",M,Fn(v)),L(j,M)};Q(A,j=>{u||j(T)})}H(b);var k=F(b,2);{var U=j=>{LT(j,{get tool_id(){return s()}})};Q(k,j=>{_(d)&&j(U)})}H(I),H(E),J(()=>St(I,"selected",_(d))),Ne("click",b,h),L(t,E),se()}var RT=ue("<!> <!> <!>",1);function TT(t,e){oe(e,!1);const n=Ye(),r=()=>ge(lt,"$elementsDictStore",n),i=S();let o=G(e,"elementHandlers",8);const s=$y,l=u=>{O2(u),Yr(u)};D(()=>(r(),W),()=>{O(i,(u,d)=>{var v;const g=r().has(u);return!!((v=d.meta)!=null&&v.categories.includes(W.LOCAL_ELEMENT))&&!g})}),be(),fe(),C2(t,{title:"Elements",onAddTool:l,categories:s,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,d)=>{I2(u)},"panel-content":(u,d)=>{var g=RT(),h=ee(g);ku(h,{get tool_id(){return f.GIVEN},get elementHandlers(){return o()}});var v=F(h,2);ku(v,{get tool_id(){return f.REGIONS},get elementHandlers(){return o()}});var m=F(v,2);qe(m,1,()=>r().entries(),([E,I])=>E,(E,I)=>{let b=()=>_(I)[0];var w=Ee(),A=ee(w);{var T=k=>{ku(k,{get tool_id(){return b()},get elementHandlers(){return o()}})};Q(A,k=>{My(b())&&k(T)})}L(E,w)}),L(u,g)}}}),se()}var kT=ue('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ys(t,e){let n=G(e,"name",8);var r=kT(),i=Y(r),o=Y(i,!0);H(i);var s=F(i,2);yt(s,e,"default",{}),H(r),J(()=>it(o,n())),L(t,r)}var MT=ue('<input class="control-slider svelte-1rsuho6" type="range">');function UT(t,e){oe(e,!1);let n=G(e,"min",8),r=G(e,"max",8),i=G(e,"value",12),o=G(e,"step",24,()=>(r()-n())/10),s=G(e,"onChangeCb",8,void 0),l=G(e,"onInputCb",8,void 0);fe();var u=MT();cn(u),J(()=>{x(u,"min",n()),x(u,"max",r()),x(u,"step",o())}),ar(u,i),Ne("change",u,()=>{s()&&s()(i())}),Ne("input",u,()=>{l()&&l()(i())}),L(t,u),se()}function ui(t,e){let n=G(e,"name",8),r=G(e,"value",12),i=G(e,"min",8),o=G(e,"max",8),s=G(e,"step",24,()=>(o()-i())/10),l=G(e,"onChangeCb",8,void 0),u=G(e,"onInputCb",8,void 0);ys(t,{get name(){return`${n()??""}: ${r()??""}`},children:(d,g)=>{UT(d,{get min(){return i()},get max(){return o()},get step(){return s()},get onChangeCb(){return l()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var GT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function $T(t){var e=GT();L(t,e)}var FT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function PT(t){var e=FT();L(t,e)}var zT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function HT(t){var e=zT();L(t,e)}var WT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function BT(t){var e=WT();L(t,e)}var YT=ue('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function jT(t,e){oe(e,!1);const n=[];let r=G(e,"value",8),i=G(e,"selectedShape",12),o=G(e,"title",8),s=G(e,"updateShapeCb",8,void 0);fe();var l=YT(),u=Y(l);cn(u);var d,g=F(u,2);yt(g,e,"default",{}),H(l),J(()=>{x(l,"title",o()),St(l,"active",r()===i()),d!==(d=r())&&(u.value=(u.__value=r())==null?"":r())}),Cd(n,[],u,()=>(r(),i()),i),Ne("change",u,()=>s()&&s()(r())),L(t,l),se()}var KT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function VT(t){var e=KT(),n=Y(e);x(n,"cx",480),x(n,"cy",-480),x(n,"rx",480),x(n,"ry",300),H(e),L(t,e)}var XT=ue('<div class="icon-wrapper svelte-18euf14"><!></div>'),qT=ue('<div class="radio-container svelte-18euf14"></div>');function ZT(t,e){oe(e,!1);let n=G(e,"name",8),r=G(e,"selectedShape",8),i=G(e,"possibleShapes",8),o=G(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,HT],[B.ELLIPSE,VT],[B.SQUARE,PT],[B.RECTANGLE,$T],[B.POLYGON,BT]]);fe(),ys(t,{get name(){return n()},children:(l,u)=>{var d=qT();qe(d,5,i,pt,(g,h)=>{jT(g,{get title(){return _(h)},get value(){return _(h)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=Ee(),I=ee(E);{var b=w=>{var A=XT(),T=Y(A);Ed(T,()=>s.get(_(h)),(k,U)=>{U(k,{})}),H(A),L(w,A)};Q(I,w=>{s.has(_(h))&&w(b)})}L(v,E)},$$slots:{default:!0}})}),H(d),L(l,d)},$$slots:{default:!0}}),se()}var QT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function JT(t){var e=QT();L(t,e)}var ek=ue('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function ol(t,e){oe(e,!1);const n=S();let r=G(e,"value",8),i=G(e,"onChangeCb",8,void 0),o=S(void 0);function s(m){const E=Su(m);E&&i()&&i()(E)}D(()=>X(r()),()=>{O(n,r())}),D(()=>(_(n),Su),()=>{cd(_(n))&&O(o,Su(_(n)))}),be(),fe();var l=ek(),u=Y(l);const d=ft(()=>up(_(n)));var g=Y(u);cn(g),H(u);var h=F(u,2),v=F(Y(h),2);cn(v),x(v,"spellcheck",!1),x(v,"maxlength",30),H(h),H(l),J(()=>{x(u,"style",`--choosen-color: ${_(o)??""}`),St(u,"transparent",_(d))}),ar(g,()=>_(n),m=>O(n,m)),Ne("change",g,()=>s(_(n))),ar(v,()=>_(n),m=>O(n,m)),Ne("input",v,()=>s(_(n))),L(t,l),se()}var tk=ue('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),nk=ue("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function rk(t,e){oe(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n),i=()=>ge(Wt,"$currentConstraintStore",n),o=S(),s=S(),l=S();let u=S(!0),d=G(e,"elementHandlers",8);function g(b,w){const A=(b==null?void 0:b.shape)??(w?Ku(w):void 0);return Nu(A),A}function h(b,w){_(l)&&(Yu(l,_(l)[b]=w),Nu(_(l)))}function v(){_(s)&&(O(l,Ku(_(s))),Nu(_(l)))}function m(b){return b&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[B.ELLIPSE,B.RECTANGLE].includes(b)}D(()=>(r(),X(d())),()=>{O(o,Nl(r(),d()))}),D(()=>_(o),()=>{O(s,_(o).shape)}),D(()=>(i(),_(s)),()=>{var b;O(l,g(((b=i())==null?void 0:b.constraint)??null,_(s)))}),be(),fe(),Ul(t,{get isOpen(){return _(u)},set isOpen(b){O(u,b)},$$slots:{"panel-header":(b,w)=>{Ml(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(A){O(u,A)},$$slots:{"title-icon":(A,T)=>{JT(A)}},$$legacy:!0})},"panel-content":(b,w)=>{var A=Ee(),T=ee(A);{var k=U=>{var j=nk(),M=ee(j);{var $=ze=>{var ye=tk();Ne("click",ye,v),L(ze,ye)};Q(M,ze=>{zy(_(s))&&ze($)})}var te=F(M,2);{var ae=ze=>{ZT(ze,{get possibleShapes(){return _(s).allowedTypes},name:"Shape",get selectedShape(){return _(l).type},updateShapeCb:ye=>h("type",ye)})};Q(te,ze=>{var ye;_(s).allowedTypes&&_(s).allowedTypes.length&&((ye=_(l))!=null&&ye.type)&&ze(ae)})}var ie=F(te,2);{var ce=ze=>{var ye=ft(()=>_(s).n.lb??3),Te=ft(()=>_(s).n.ub??10);ui(ze,{name:"Number of Sides",get value(){return _(l).n},get min(){return _(ye)},get max(){return _(Te)},step:1,onChangeCb:He=>h("n",He)})};Q(ie,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.n)!==void 0&&((He=(Te=_(s))==null?void 0:Te.n)!=null&&He.editable)&&E(_(l).type)&&ze(ce)})}var we=F(ie,2);{var Z=ze=>{var ye=ft(()=>_(s).r.lb??0),Te=ft(()=>_(s).r.ub??1),He=ft(()=>_(s).r.step??.05);ui(ze,{name:"Radius",get value(){return _(l).r},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("r",Mt)})};Q(we,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.r)!==void 0&&((He=(Te=_(s))==null?void 0:Te.r)!=null&&He.editable)&&m(_(l).type)&&ze(Z)})}var Ie=F(we,2);{var me=ze=>{var ye=ft(()=>_(s).width.lb??0),Te=ft(()=>_(s).width.ub??1),He=ft(()=>_(s).width.step??.05);ui(ze,{name:"Width",get value(){return _(l).width},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("width",Mt)})};Q(Ie,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.width)!==void 0&&((He=(Te=_(s))==null?void 0:Te.width)!=null&&He.editable)&&I(_(l).type)&&ze(me)})}var Oe=F(Ie,2);{var Se=ze=>{var ye=ft(()=>_(s).height.lb??0),Te=ft(()=>_(s).height.ub??1),He=ft(()=>_(s).height.step??.05);ui(ze,{name:"Height",get value(){return _(l).height},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("height",Mt)})};Q(Oe,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.height)!==void 0&&((He=(Te=_(s))==null?void 0:Te.height)!=null&&He.editable)&&I(_(l).type)&&ze(Se)})}var Ae=F(Oe,2);{var Re=ze=>{var ye=ft(()=>_(s).angle.lb??0),Te=ft(()=>_(s).angle.ub??360),He=ft(()=>_(s).angle.step??15);ui(ze,{name:"Angle",get value(){return _(l).angle},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("angle",Mt)})};Q(Ae,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.angle)!==void 0&&((He=(Te=_(s))==null?void 0:Te.angle)!=null&&He.editable)&&ze(Re)})}var $e=F(Ae,2);{var st=ze=>{var ye=ft(()=>_(s).inset.lb??0),Te=ft(()=>_(s).inset.ub??.5),He=ft(()=>_(s).inset.step??.01);ui(ze,{name:"Inset",get value(){return _(l).inset},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("inset",Mt)})};Q($e,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.inset)!==void 0&&((He=(Te=_(s))==null?void 0:Te.inset)!=null&&He.editable)&&ze(st)})}var ut=F($e,2);{var Ct=ze=>{ys(ze,{name:"Stroke",children:(ye,Te)=>{ol(ye,{get value(){return _(l).stroke},onChangeCb:He=>h("stroke",He)})},$$slots:{default:!0}})};Q(ut,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.stroke)!==void 0&&((He=(Te=_(s))==null?void 0:Te.stroke)!=null&&He.editable)&&ze(Ct)})}var dt=F(ut,2);{var bt=ze=>{var ye=ft(()=>_(s).strokeWidth.lb??0),Te=ft(()=>_(s).strokeWidth.ub??.8),He=ft(()=>_(s).strokeWidth.step??.01);ui(ze,{name:"Stroke Width",get value(){return _(l).strokeWidth},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("strokeWidth",Mt)})};Q(dt,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.strokeWidth)!==void 0&&((He=(Te=_(s))==null?void 0:Te.strokeWidth)!=null&&He.editable)&&ze(bt)})}var It=F(dt,2);{var In=ze=>{var ye=ft(()=>_(s).strokeDasharray.lb??0),Te=ft(()=>_(s).strokeDasharray.ub??1),He=ft(()=>_(s).strokeDasharray.step??.01);ui(ze,{name:"Stroke Dasharray",get value(){return _(l).strokeDasharray},get min(){return _(ye)},get max(){return _(Te)},get step(){return _(He)},onChangeCb:Mt=>h("strokeDasharray",Mt)})};Q(It,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.strokeDasharray)!==void 0&&((He=(Te=_(s))==null?void 0:Te.strokeDasharray)!=null&&He.editable)&&ze(In)})}var dn=F(It,2);{var yr=ze=>{ys(ze,{name:"Fill",children:(ye,Te)=>{ol(ye,{get value(){return _(l).fill},onChangeCb:He=>h("fill",He)})},$$slots:{default:!0}})};Q(dn,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.fill)!==void 0&&((He=(Te=_(s))==null?void 0:Te.fill)!=null&&He.editable)&&ze(yr)})}var Or=F(dn,2);{var kr=ze=>{ys(ze,{name:"Font Color",children:(ye,Te)=>{ol(ye,{get value(){return _(l).fontColor},onChangeCb:He=>h("fontColor",He)})},$$slots:{default:!0}})};Q(Or,ze=>{var ye,Te,He;((ye=_(l))==null?void 0:ye.fontColor)!==void 0&&((He=(Te=_(s))==null?void 0:Te.fontColor)!=null&&He.editable)&&ze(kr)})}L(U,j)};Q(T,U=>{_(s)&&U(k)})}L(b,A)}},$$legacy:!0}),se()}var ik=ue('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function Ks(t,e){let n=G(e,"clickCb",8),r=G(e,"title",8);var i=ik(),o=Y(i),s=Y(o);yt(s,e,"default",{}),H(o),H(i),J(()=>x(i,"title",r())),Ne("click",i,Fn(function(...l){var u;(u=n())==null||u.apply(this,l)})),L(t,i)}var ok=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function sk(t){var e=ok();L(t,e)}var ak=ue('<div class="buttons-container svelte-kc00rw"><!></div>');function Fl(t,e){var n=ak(),r=Y(n);yt(r,e,"default",{}),H(n),L(t,n)}var lk=ue('<button class="generate-button svelte-uogiuu">Auto-Generate</button>'),ck=ue('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),uk=ue('<div class="edit-puzzle-meta-content svelte-uogiuu"><!> <input class="text-input input-title" type="text" placeholder="Title"> <!> <input class="text-input input-authors" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="text-input input-ruleset" placeholder="Ruleset"></textarea> <!> <input class="text-input input-ctc-link" type="text" placeholder="CTC Link"> <!> <input class="text-input input-ctc-youtube-link" type="text" placeholder="CTC Youtube Link"> <!></div>');function dk(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Jr,"$puzzleMetaStore",n),i=()=>ge(lt,"$elementsDictStore",n);let o=G(e,"showModal",12,!1),s=S(""),l=S(""),u=S(""),d=S(""),g=S("");function h(){o(!1)}function v(){const b=_(l)?m(_(l)):["Anonymous"],A={title:_(s)?_(s):"Sudoku",authors:b,ruleset:_(u),ctcYoutubeUrl:_(d),ctcUrl:_(g)};jR(A),o(!1)}function m(b){return b.split(/\s*[;]\s*/)}function E(){var k,U,j;let b="";const w=Ht,A=i();!A.get(f.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules apply.

`:b+=`Sudoku rules do not apply.

`;for(const[M,$]of A.entries()){if(M===f.SUDOKU_RULES_DO_NOT_APPLY)continue;const te=w[M],ae=((k=te.menu)==null?void 0:k.name)??te.toolId,ie=(U=te.meta)==null?void 0:U.description;if(b+=`**${ae}**: ${ie}

`,!!$.negative_constraints)for(const[ce,we]of Object.entries($.negative_constraints)){if(!we)continue;const Z=(j=te.negative_constraints)==null?void 0:j.find(Oe=>Oe.toolId===ce);if(!Z)continue;const Ie=ce,me=Z.description;b+=` - **${Ie}**: ${me}

`}}return b.trim()}function I(){const b=E();O(u,b)}D(()=>(X(o()),r(),dl),()=>{if(!o()){const b=r().authors;O(s,r().title??""),O(l,b?dl(b,"; ","; "):""),O(u,r().ruleset??""),O(d,r().ctcYoutubeUrl??""),O(g,r().ctcUrl??"")}}),be(),fe(),pi(t,{title:"Edit Puzzle Meta",get showModal(){return o()},set showModal(b){o(b)},children:(b,w)=>{var A=uk(),T=Y(A);Di(T,{title:"Title"});var k=F(T,2);cn(k);var U=F(k,2);Di(U,{title:"Authors"});var j=F(U,2);cn(j);var M=F(j,2);Di(M,{title:"Ruleset",children:(Z,Ie)=>{var me=lk();Ne("click",me,I),L(Z,me)},$$slots:{default:!0}});var $=F(M,2);sy($),x($,"rows",8);var te=F($,2);Di(te,{title:"CTC Link"});var ae=F(te,2);cn(ae);var ie=F(ae,2);Di(ie,{title:"CTC Youtube Link"});var ce=F(ie,2);cn(ce);var we=F(ce,2);Fl(we,{children:(Z,Ie)=>{var me=ck(),Oe=ee(me),Se=F(Oe,2);Ne("click",Oe,v),Ne("click",Se,h),L(Z,me)},$$slots:{default:!0}}),H(A),ar(k,()=>_(s),Z=>O(s,Z)),ar(j,()=>_(l),Z=>O(l,Z)),ar($,()=>_(u),Z=>O(u,Z)),ar(ae,()=>_(g),Z=>O(g,Z)),ar(ce,()=>_(d),Z=>O(d,Z)),L(b,A)},$$slots:{default:!0},$$legacy:!0}),se()}var _k=ue("<!> <!>",1);function fk(t){let e=S(!1);function n(){O(e,!0)}var r=_k(),i=ee(r);Ks(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,l)=>{sk(s)},$$slots:{default:!0}});var o=F(i,2);dk(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var gk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function hk(t){var e=gk();L(t,e)}function vk(t,e){for(const[n,r]of t.entries()){if(!Kr(n))continue;if(Object.values(r.constraints).some(o=>!Ft(o.cell,e)))return!0}return!1}function pk(t,e,n,r){const i=n.zoom_factor;if(r<1){const o=e.x+e.width/2,s=e.y+e.height/2,l=e.width/i,u=e.height/i,d=o-l/2,g=s-u/2;return{x:d,y:g,height:u,width:l}}else if(r>1){const o=e.width/i,s=e.height/i,l=t.x,u=t.width,d=t.y,g=t.height,h=e.x+e.width/2,v=e.y+e.height/2,m=(h+n.point.x)/2,E=(v+n.point.y)/2;let I=m-o/2,b=E-s/2;return I<l&&(I=l),b<d&&(b=d),I+o>u&&(I=u-o),b+s>g&&(b=g-s),{x:I,y:b,height:s,width:o}}return e}const Eo=Rt(1),Vs=Bn([lt,en,hn],([t,e,n])=>{const r={nRows:n.nRows,nCols:n.nCols},i=vk(t,r),o=Kr(e),s=i||o?1:.2,l=-s,u=-s,d=r.nCols+2*s,g=r.nRows+2*s;return{x:l,y:u,width:d,height:g}}),Xs=Rt(De(Vs));function l_(){Eo.set(1),Xs.set(De(Vs))}function mk(t){if(!t.ctrl)return;const e=De(Eo),n=.5,r=2,i=t.zoom_factor;let o=e*i;if(o=Math.max(n,Math.min(r,o)),Eo.set(o),o===e)return;const s=De(Vs);Xs.update(l=>pk(s,l,t,o))}function Ek(t){if(t.ctrl)return;const e=De(Eo),n=De(Vs);if(e<1)return;const r=-(t.delta>0?1:t.delta<0?-1:0),i=n.y,o=i+n.height;Xs.update(s=>{const l=.5*r*e;let u=s.y+l;return u<i&&(u=i),u+s.height>o&&(u=o-s.height),{x:s.x,y:u,height:s.height,width:s.width}})}function Ck(t){const e=De(Eo),n=De(Vs);if(e<1)return;const r=t.point,i=n.x,o=i+n.width,s=n.y,l=s+n.height;Xs.update(u=>{let d=u.x-.012/e*r.x,g=u.y-.012*1/e*r.y;return g<s&&(g=s),g+u.height>l&&(g=l-u.height),d<i&&(d=i),d+u.width>o&&(d=o-u.width),{x:d,y:g,height:u.height,width:u.width}})}var bk=ue('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function Ik(t,e){oe(e,!1);let n=S(null),r=S(null);function i(){var o;(o=_(n))==null||o.click()}D(()=>(_(r),hl),()=>{if(_(r)&&_(r).length){const o=_(r)[0],s=new FileReader;s.readAsText(o),s.onload=function(l){if(l.target||alert(s.error),l.target&&l.target.result){const u=l.target.result;if(typeof u!="string")return;const d=JSON.parse(u),g=NR(d);console.log(g),ZR(g),l_(),hl()}},s.onerror=function(){alert(s.error)}}}),be(),fe(),Ks(t,{title:"Open Puzzle",clickCb:i,children:(o,s)=>{var l=bk(),u=ee(l);hk(u);var d=F(u,2);ki(d,g=>O(n,g),()=>_(n)),Sy(d,()=>_(r),g=>O(r,g)),L(o,l)},$$slots:{default:!0}}),se()}var wk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function yk(t){var e=wk();L(t,e)}var Ok=ue('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function zh(t,e){oe(e,!1);let n=G(e,"name",8),r=G(e,"min",8),i=G(e,"max",8),o=G(e,"value",12),s=G(e,"step",24,()=>(i()-r())/10),l=G(e,"onChangeCb",8,void 0),u=G(e,"onInputCb",8,void 0);fe();var d=Ok(),g=Y(d),h=Y(g);H(g);var v=F(g,2);cn(v),H(d),J(()=>{it(h,`${n()??""}: ${o()??""}`),x(v,"min",r()),x(v,"max",i()),x(v,"step",s())}),ar(v,o),Ne("change",v,()=>{l()&&l()(o())}),Ne("input",v,()=>{u()&&u()(o())}),L(t,d),se()}var Ak=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),xk=ue('<div class="new-puzzle-content svelte-1boysdf"><!> <!> <!> <input class="text-input" type="text"> <!></div>');function Sk(t,e){oe(e,!1);let n=G(e,"showModal",12,!1);const r=4,i=20;let o=S(9),s=S(9),l=S(""),u=S(At.range(1,10));function d(){n(!1)}function g(){hl(),qR(_(s),_(o),_(u).sort()),l_(),n(!1)}function h(E){return E.map(b=>String(b)).join(",")}function v(){const E=Math.min(Math.max(_(s),_(o)),9);O(u,At.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}fe(),pi(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=xk(),w=Y(b);zh(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return _(o)},set value(M){O(o,M)},$$legacy:!0});var A=F(w,2);zh(A,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return _(s)},set value(M){O(s,M)},$$legacy:!0});var T=F(A,2),k=ft(()=>`Allowed Digits (for the solver): ${h(_(u))}`);Di(T,{get title(){return _(k)}});var U=F(T,2);cn(U),J(()=>x(U,"placeholder",h(_(u))));var j=F(U,2);Fl(j,{children:(M,$)=>{var te=Ak(),ae=ee(te),ie=F(ae,2);Ne("click",ae,g),Ne("click",ie,d),L(M,te)},$$slots:{default:!0}}),H(b),ar(U,()=>_(l),M=>O(l,M)),Ne("input",U,()=>m(_(l))),L(E,b)},$$slots:{default:!0},$$legacy:!0}),se()}var Lk=ue("<!> <!>",1);function Nk(t){let e=S(!1);function n(){O(e,!0)}var r=Lk(),i=ee(r);Ks(i,{title:"New Puzzle",clickCb:n,children:(s,l)=>{yk(s)},$$slots:{default:!0}});var o=F(i,2);Sk(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var Dk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function Rk(t){var e=Dk();L(t,e)}var Tk=ue('<button class="modal-button">Cancel</button>'),kk=ue('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button> <button class="modal-button">Copy Link</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function Mk(t,e){oe(e,!1);const n=Ye(),r=()=>ge(po,"$svgRefStore",n),i=()=>ge(Jr,"$puzzleMetaStore",n),o=()=>ge(Bs,"$puzzleStore",n),s=S();let l=G(e,"showModal",12,!1);function u(w){const A=getComputedStyle(w);let T="";for(let k of A){const U=A.getPropertyValue(k);U&&(T+=`${k}:${U};`)}return T}function d(w){const A=w.cloneNode(!0);(A instanceof SVGElement||A instanceof HTMLElement)&&(A.style.cssText=u(w));const T=w.childNodes;for(let k=0;k<T.length;k++){const U=T[k];if(U instanceof Element){const j=d(U);A.replaceChild(j,A.childNodes[k])}}return A}function g(w){if(!w)return;const A=d(w),T=_l(i()),U=new XMLSerializer().serializeToString(A),j=new Image,M=new Blob([U],{type:"image/svg+xml;charset=utf-8"}),$=URL.createObjectURL(M);j.onload=()=>{const te=w.getBoundingClientRect(),ae=te.width,ie=te.height,ce=document.createElement("canvas"),we=window.devicePixelRatio||1;ce.width=ae*we,ce.height=ie*we;const Z=ce.getContext("2d");Z&&(Z.scale(we,we),Z.drawImage(j,0,0,ae,ie),ce.toBlob(Ie=>{if(!Ie)return;const me=URL.createObjectURL(Ie),Oe=document.createElement("a");Oe.href=me,Oe.download=T,Oe.click(),URL.revokeObjectURL(me)}))},j.src=$}function h(w,A="download.svg"){if(!w)return;const T=d(w);let U=new XMLSerializer().serializeToString(T);U.includes("<?xml")||(U=`<?xml version="1.0" standalone="no"?>\r
`+U);const j=new Blob([U],{type:"image/svg+xml"}),M=URL.createObjectURL(j),$=document.createElement("a");$.href=M,$.download=A,$.click(),URL.revokeObjectURL(M)}const v=w=>{const A=LR(o());return JSON.stringify(A,null,w)},m=()=>{function w(k,U,j){var M=document.createElement("a"),$=new Blob([k],{type:j});M.href=URL.createObjectURL($),M.download=U,M.click(),URL.revokeObjectURL(M.href)}const A=v(2),T=_l(i());w(A,`${T}.json`,"text/plain")},E=()=>{const w=v(0),A=OR(w),T=`${window.location.host}/encpuzzle/${A}`;navigator.clipboard.writeText(T)};function I(){l(!1)}const b=1;D(()=>r(),()=>{O(s,r())}),be(),fe(),pi(t,{title:"Save Puzzle",get showModal(){return l()},set showModal(w){l(w)},children:(w,A)=>{var T=kk(),k=Y(T),U=Y(k),j=Y(U),M=F(j,2),$=F(M,2),te=F($,2);H(U);var ae=F(U,2),ie=F(Y(ae),2),ce=Y(ie);x(ce,"width",400*b),x(ce,"height",300*b),H(ie),H(ae),H(k);var we=F(k,2);Fl(we,{children:(Z,Ie)=>{var me=Tk();Ne("click",me,I),L(Z,me)},$$slots:{default:!0}}),H(T),Ne("click",j,m),Ne("click",M,()=>g(_(s))),Ne("click",$,()=>h(_(s))),Ne("click",te,E),L(w,T)},$$slots:{default:!0},$$legacy:!0}),se()}var Uk=ue("<!> <!>",1);function Gk(t){let e=S(!1);function n(){O(e,!0)}var r=Uk(),i=ee(r);Ks(i,{title:"Save Puzzle",clickCb:n,children:(s,l)=>{Rk(s)},$$slots:{default:!0}});var o=F(i,2);Mk(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var $k=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function xp(t){var e=$k();L(t,e)}var Fk=ue("<button> </button>"),Pk=ue('<div class="tab-panel svelte-1cn515q"><!></div>'),zk=ue('<div class="tabbed-menu svelte-1cn515q"><div class="tab-header svelte-1cn515q"></div> <div class="tab-content svelte-1cn515q"></div></div>');function Hk(t,e){let n=G(e,"tabs",24,()=>[]),r=G(e,"activeTab",12,0);function i(u){r(u)}var o=zk(),s=Y(o);qe(s,5,n,pt,(u,d,g)=>{var h=Fk(),v=Y(h,!0);H(h),J(()=>{dv(h,`tab-button ${(r()===g?"active":"")??""} svelte-1cn515q`),it(v,_(d).label)}),Ne("click",h,()=>i(g)),L(u,h)}),H(s);var l=F(s,2);qe(l,5,n,pt,(u,d,g)=>{var h=Ee(),v=ee(h);{var m=E=>{var I=Pk(),b=Y(I);Ed(b,()=>_(d).component,(w,A)=>{A(w,wy(()=>_(d).props||{}))}),H(I),L(E,I)};Q(v,E=>{r()===g&&_(d).component&&E(m)})}L(u,h)}),H(l),H(o),L(t,o)}var Wk=ue('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function Bk(t,e){let n=G(e,"value",8),r=G(e,"onClickCb",8),i=G(e,"disabled",8,!1);var o=Wk(),s=Y(o);cn(s),_i(2),H(o),J(()=>{St(o,"disabled",i()),yy(s,n()),s.disabled=i()}),Ne("change",s,function(...l){var u;(u=r())==null||u.apply(this,l)}),L(t,o)}var Yk=ue('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Ri(t,e){oe(e,!1);let n=G(e,"value",8),r=G(e,"name",8),i=G(e,"updateCb",8,void 0),o=G(e,"disabled",8,!1);function s(){o()||i()&&i()(!n())}fe();var l=Yk(),u=Y(l);Bk(u,{get value(){return n()},onClickCb:s,get disabled(){return o()}});var d=F(u,2),g=Y(d,!0);H(d),H(l),J(()=>{St(l,"disabled",o()),it(g,r())}),Ne("click",d,Fn(s)),L(t,l),se()}var jk=ue('<div class="settings-tab-layout"><!> <!> <!></div>');function Kk(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=S();D(()=>r(),()=>{O(i,r())}),be(),fe();var o=jk(),s=Y(o);Ri(s,{name:"Check Conflicts",get value(){return _(i).checkConflicts},updateCb:d=>sr("checkConflicts",d)});var l=F(s,2);Ri(l,{name:"Highlight Pencilmark Conflicts",get value(){return _(i).highlightPencilmarkConflicts},updateCb:d=>sr("highlightPencilmarkConflicts",d)});var u=F(l,2);Ri(u,{name:"Highlight Cells Seen By Selection",get value(){return _(i).highlightCellsSeenBySelection},updateCb:d=>sr("highlightCellsSeenBySelection",d)}),H(o),L(t,o),se()}var Vk=ue('<div class="settings-tab-layout"><!> <!> <!> <!> <button class="form-button svelte-nt1ewk">Restore default settings</button></div>');function Xk(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=S();D(()=>r(),()=>{O(i,r())}),be(),fe();var o=Vk(),s=Y(o);Ri(s,{get value(){return _(i).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:h=>sr("darkMode",h)});var l=F(s,2);Ri(l,{get value(){return _(i).penToolActive},name:"Pen Tool",updateCb:h=>sr("penToolActive",h)});var u=F(l,2);Ri(u,{disabled:!0,get value(){return _(i).letterToolActive},name:"Letter Tool",updateCb:h=>sr("letterToolActive",h)});var d=F(u,2);Ri(d,{name:"Show Solution",get value(){return _(i).showSolution},updateCb:h=>sr("showSolution",h)});var g=F(d,2);H(o),Ne("click",g,function(...h){var v;(v=Cy)==null||v.apply(this,h)}),L(t,o),se()}var qk=ue('<div class="setting-color-name svelte-1dih2k"> </div> <div class="picker-container svelte-1dih2k"><!></div>',1);function gs(t,e){let n=G(e,"name",8),r=G(e,"value",8),i=G(e,"onChangeCb",8,void 0);var o=qk(),s=ee(o),l=Y(s,!0);H(s);var u=F(s,2),d=Y(u);ol(d,{get value(){return r()},get onChangeCb(){return i()}}),H(u),J(()=>it(l,n())),L(t,o)}var Zk=ue('<div class="settings-tab-layout"><div class="grid svelte-169jaiw"><!> <!> <!> <!> <!></div></div>');function Qk(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=S();D(()=>r(),()=>{O(i,r())}),be(),fe();var o=Zk(),s=Y(o),l=Y(s);gs(l,{name:"Non-given value color:",get value(){return _(i).non_given_color},onChangeCb:v=>{sr("non_given_color",v)}});var u=F(l,2);gs(u,{name:"Seen cells color:",get value(){return _(i).seen_cells_color},onChangeCb:v=>{sr("seen_cells_color",v)}});var d=F(u,2);gs(d,{name:"Selection color:",get value(){return _(i).selection_color},onChangeCb:v=>{sr("selection_color",v)}});var g=F(d,2);gs(g,{name:"Conflicting cells color:",get value(){return _(i).conflict_cells_color},onChangeCb:v=>{sr("conflict_cells_color",v)}});var h=F(g,2);gs(h,{name:"Conflicting pencilmarks color:",get value(){return _(i).conflict_marks_color},onChangeCb:v=>{sr("conflict_marks_color",v)}}),H(s),H(o),L(t,o),se()}var Jk=ue('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function Cn(t,e){let n=G(e,"description",8);var r=Jk(),i=Y(r),o=Y(i,!0);H(i);var s=F(i,2),l=Y(s);yt(l,e,"default",{}),H(s),H(r),J(()=>it(o,n())),L(t,r)}var eM=ue('<div class="shortcut svelte-1cgt5u5"> </div>');function gn(t,e){let n=G(e,"shortcut",8);var r=eM(),i=Y(r,!0);H(r),J(()=>it(i,n())),L(t,r)}var tM=ue('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Ka(t,e){let n=G(e,"title",8);var r=tM(),i=Y(r),o=Y(i,!0);H(i);var s=F(i,2);yt(s,e,"default",{}),H(r),J(()=>it(o,n())),L(t,r)}var nM=ue("<!> <!> <!> <!>",1),rM=ue("<!> or <!>",1),iM=ue("<!> <!> <!> <!> <!> <!> <!> <!>",1),oM=ue("<!> <!>",1),sM=ue('<div class="settings-tab-layout"><!> <!> <!> <!></div>');function aM(t){var e=sM(),n=Y(e);Ka(n,{title:"General",children:(s,l)=>{Cn(s,{description:"Toggle Darkmode",children:(u,d)=>{gn(u,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var r=F(n,2);Ka(r,{title:"Selection",children:(s,l)=>{var u=nM(),d=ee(u);Cn(d,{description:"Select cells",children:(m,E)=>{gn(m,{shortcut:"click/drag"})},$$slots:{default:!0}});var g=F(d,2);Cn(g,{description:"Add to current selection",children:(m,E)=>{gn(m,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var h=F(g,2);Cn(h,{description:"Remove from current selection",children:(m,E)=>{gn(m,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var v=F(h,2);Cn(v,{description:"Add or remove from current selection",children:(m,E)=>{gn(m,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),L(s,u)},$$slots:{default:!0}});var i=F(r,2);Ka(i,{title:"Change Tool",children:(s,l)=>{var u=iM(),d=ee(u);Cn(d,{description:"Cycle Tool",children:(w,A)=>{gn(w,{shortcut:"Space"})},$$slots:{default:!0}});var g=F(d,2);Cn(g,{description:"Change to Digit Tool",children:(w,A)=>{gn(w,{shortcut:"Z"})},$$slots:{default:!0}});var h=F(g,2);Cn(h,{description:"Change to Corner Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"X"})},$$slots:{default:!0}});var v=F(h,2);Cn(v,{description:"Change to Center Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"C"})},$$slots:{default:!0}});var m=F(v,2);Cn(m,{description:"Change to Highlights Tool",children:(w,A)=>{gn(w,{shortcut:"V"})},$$slots:{default:!0}});var E=F(m,2);Cn(E,{description:"Quickshift To Corner Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"Shift"})},$$slots:{default:!0}});var I=F(E,2);Cn(I,{description:"Quickshift To Center Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"Ctrl"})},$$slots:{default:!0}});var b=F(I,2);Cn(b,{description:"Quickshift To Highlights Tool",children:(w,A)=>{var T=rM(),k=ee(T);gn(k,{shortcut:"Shift + Ctrl"});var U=F(k,2);gn(U,{shortcut:"Alt"}),L(w,T)},$$slots:{default:!0}}),L(s,u)},$$slots:{default:!0}});var o=F(i,2);Ka(o,{title:"Undo/Redo",children:(s,l)=>{var u=oM(),d=ee(u);Cn(d,{description:"Undo",children:(h,v)=>{gn(h,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var g=F(d,2);Cn(g,{description:"Redo",children:(h,v)=>{gn(h,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),L(s,u)},$$slots:{default:!0}}),H(e),L(t,e)}var lM=ue('<div class="settings-content svelte-heebuf"><!></div>');function Sp(t,e){let n=G(e,"showModal",12,!1);const r=[{label:"Display",component:Qk},{label:"Gameplay",component:Kk},{label:"Shortcuts",component:aM},{label:"Other",component:Xk}];pi(t,{title:"Settings",get showModal(){return n()},set showModal(i){n(i)},children:(i,o)=>{var s=lM(),l=Y(s);Hk(l,{tabs:r}),H(s),L(i,s)},$$slots:{default:!0},$$legacy:!0})}var cM=ue("<!> <!>",1);function uM(t){let e=S(!1);function n(){O(e,!0)}var r=cM(),i=ee(r);Ks(i,{title:"Settings",clickCb:n,children:(s,l)=>{xp(s)},$$slots:{default:!0}});var o=F(i,2);Sp(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var dM=ue('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function _M(t){var e=dM(),n=Y(e);Nk(n);var r=F(n,2);Gk(r);var i=F(r,2);Ik(i,{});var o=F(i,2);fk(o);var s=F(o,2);uM(s),H(e),L(t,e)}var fM=ue('<button class="entry-panel-button svelte-yhctjt" title="Set current cell values as the puzzle solution">Set Solution</button>');function gM(t,e){oe(e,!1);let n=S(!1);function r(){const i=De(hn),o=[];for(let s=0;s<i.nRows;s++){const l=[];for(let u=0;u<i.nCols;u++){const d=i.getCell(s,u);if(!d)continue;const g=d.value;l.push(g)}o.push(l)}r_(o)}fe(),Ul(t,{get isOpen(){return _(n)},set isOpen(i){O(n,i)},$$slots:{"panel-header":(i,o)=>{Ml(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(s){O(n,s)},$$legacy:!0})},"panel-content":(i,o)=>{var s=fM();Ne("click",s,r),L(i,s)}},$$legacy:!0}),se()}const hM={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function vM(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),s=parseInt(r[3],10),l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[s,l==="]"?"<=":"<"]}}return null}function pM(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function mM(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function EM(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Lp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function CM(t,e){const n=pM(t);if(n)return{type:"number",parsed:parseInt(n)};const r=mM(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=EM(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=vM(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const s=Lp(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var z=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.CAVE_CELLS_FILLOMINO_REGIONS="cave_cells_fillomino_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t.BYOKC_GRID="byokc_grid",t.SHADED_BOUNDARIES_REGIONS="shaded_boundaries_regions",t.SHADED_BOUNDARIES_VERTICAL="shaded_boundaries_vertical",t.SHADED_BOUNDARIES_HORIZONTAL="shaded_boundaries_horizontal",t))(z||{});function Je(t,e){return`${e}[${t.r},${t.c}]`}function Yo(t,e){return t.map(r=>Je(r,e))}function Ce(t,e){return"["+Yo(t,e).join(",")+"]"}function xe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function Et(t){return t.map(n=>xe(n))}function _o(t){return`constraint alldifferent([${t.join(",")}]);
`}function kt(t,e){return t&&(t=`
% ${e}
`+t),t}function Pl(t,e){const n=[Fe.N,Fe.S,Fe.W,Fe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function c_(t,e,n=void 0){n||(n=[Fe.N,Fe.S,Fe.W,Fe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),s="["+Et(o).join(",")+"]";r.push(s)}return r}function We(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const[s,l]of Object.entries(i)){const u=n(t,o,s,l);r+=u}return r}function Xn(t,e,n){let r="";const i=e.tool_id,o=n.get(i);if(o){const s=o(t,e);r+=s}return r}class bM{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=hM){let i="";if(e.length===0&&n.length>0){const l=n;return this.hasVariable(l)||(i+=`var int: ${l};
`,this.addVariable(l)),[i,l]}const o=CM(e,r);if(!o)return null;if(o.type==="number"){const l=o.parsed;return["",String(l)]}if(o.type==="variable"){const l=o.parsed;return this.hasVariable(l)||(i+=`var int: ${l};
`,this.addVariable(l)),[i,l]}if(!n)return null;if(this.hasVariable(n)||(i+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const l=o.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];i+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];i+=`constraint ${n} ${d} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";i+=`constraint member(${u}, ${n});
`}if(o.type==="var_list"){const l=o.parsed,u="["+l.join(",")+"]";for(const d of l){const g=parseInt(d);Number.isNaN(g)&&!this.hasVariable(d)&&(i+=`var int: ${d};
`,this.addVariable(d))}i+=`constraint member(${u}, ${n});
`}return[i,n]}}function IM(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,s=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let l=null,u=0,d=0,g=0;for(let w=0;w<e.length;w++){const A=e[w].trim(),T=A.match(r),k=A.match(i),U=A.match(o),j=A.match(s);if(!l&&(T||k||U||j)){l={name:(T||k||U||j)[1],startLine:w,content:[e[w]],type:T?"function":k?"predicate":U?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(l&&(l.content.push(e[w]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&d===0&&g===0&&A.endsWith(";"))){n[l.name]={...l,endLine:w};let M=l.startLine;for(;M>0&&e[M-1].trim().startsWith("%");)M-=1;n[l.name].startLine=M,l=null}}function h(w){const A=[],T=w.match(r),k=w.match(i),U=w.match(o);for(const j of Object.keys(n)){const M=n[j].type;if(M==="function"||M==="test"||M==="predicate"){if(T||k||U)continue;new RegExp(`\\b${j}\\s*\\(`,"g").test(w)&&A.push(j)}else if(M==="variable"){const $=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${j}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match($))continue;new RegExp(`\\b${j}\\b`,"g").test(w)&&A.push(j)}}return A}const v=new Set;for(const w of e)h(w).forEach(T=>v.add(T));const m=Object.values(n).filter(w=>!v.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,A)=>A.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const I=[];let b=!1;for(const w of E)w.trim()===""?b||(I.push(w),b=!0):(I.push(w),b=!1);return I.join(`
`)}function Hh(t){let e=t,n=e.length;for(;e=IM(e),e.length!=n;)n=e.length;return e}function Np(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function wM(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let l=0;l<e.nRows;l++){const u=[];for(let d=0;d<e.nCols;d++){const g=e.getCell(l,d);!g||g.region===null?u.push(r-1):u.push(g.region)}o.push(u)}const s=Np(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${s});
`)}}function zl(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function on(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*ei(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function jo(t,e){return[...Object.values(t)].find(i=>{const o=i.cell;if(e.c===o.c&&e.r===o.r)return i})}function Dp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Rp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function u_(t,e,n,r){const i=t.grid;let o="";if(!!!t.elementsDict.get(f.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const d of u){const g=i.getRegion(d),h=Ce(g,r);o+=`constraint count_eq(${h}, ${n}, ${e});
`}}return o}function fo(t,e,n,r){let i=Dp(e,n,r);return i+=Rp(e,n,r),i+=u_(t,e,n,r),i}function yM(t,e){const n=e.tool_id,r=t.puzzle.grid,i=t.puzzle.valid_digits,o=Math.min(...i);let s="";for(const l of r.getAllCells()){if(l.value!==null)continue;const u=Je(l,z.BOARD);s+=`constraint ${u} == ${o};
`}return s=kt(s,`${n}`),s}function OM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),s=Et(o);let l=`
% ${i}
`;return l+=_o(s),l}function AM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),s=Et(o);let l=`
% ${i}
`;return l+=_o(s),l}function xM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),l="["+Et(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function SM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),l="["+Et(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function LM(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,s]=[r.nRows,r.nCols];if(o!==s)return"";let l=`
% ${i}
`;const u=r.getPositiveDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h+(g-v));if(!m||!E)continue;const I=xe(m),b=xe(E),A=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;l+=A}}return l}function NM(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,s]=[r.nRows,r.nCols];if(o!==s)return"";let l=`
% ${i}
`;const u=r.getNegativeDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h-(g-v));if(!m||!E)continue;const I=xe(m),b=xe(E),A=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;l+=A}}return l}function DM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;const s=[...r.getUsedRegions()].length;for(let l=0;l<s;l++){const u=r.getDisjointGroup(l),h=`constraint alldifferent(${`[${Et(u).join(",")}]`});
`;o+=h}return o}function RM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const u=r.getNeighboorCells(s).filter(m=>m.r+m.c>=s.r+s.c),d=xe(s),h=`[${Et(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function TM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const u=r.getCellsByKnightMove(s).filter(m=>m.r>=s.r||m.c>=s.c),d=xe(s),h=`[${Et(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function kM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=kt(r,`${n}`),r}function MM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=kt(r,`${n}`),r}function UM(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=kt(r,`${n}`),r}function GM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=kt(r,`${n}`),r}function $M(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[s,l]of ei(r)){const u=xe(s),d=xe(l),g=`constraint not consecutive_p(${u}, ${d});
`;o+=g}return o}function FM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[s,l]of ei(r)){const u=xe(s),d=xe(l),g=`constraint not ratio_p(${u}, ${d}, 2);
`;o+=g}return o}function PM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const l=r.getRow(s.r),d=`[${Et(l).join(",")}]`,g=s.c+1,h=`constraint indexing_column_p(${d}, ${g});
`;o+=h}return o}function zM(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=kt(r,`${n}`),r}function HM(t,e){const n=e.tool_id;let r="";return r+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,r=kt(r,`${n}`),r}function WM(t,e){const n=e.tool_id;let r="";return r+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,r=kt(r,`${n}`),r}function BM(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;let o="";const s=n.grid.getUsedRegions();for(const l of s){const u=r.getRegion(l),d=[...new Set(u.map(h=>h.r))],g=[...new Set(u.map(h=>h.c))];for(const h of g){const v=u.filter(E=>E.c===h),m=Ce(v,z.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}for(const h of d){const v=u.filter(E=>E.r===h),m=Ce(v,z.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}}return o=kt(o,`${i}`),o}function YM(t){const e=t.elementsDict;if(!!e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let i="";i+=`
% row constraints (digits do not repeat on rows)
`;const o=r.nRows;for(let u=0;u<o;u++){const d=r.getRow(u),g=Et(d),h=_o(g);i+=h}i+=`
% col constraints (digits do not repeat on cols)
`;const s=r.nCols;for(let u=0;u<s;u++){const d=r.getCol(u),g=Et(d),h=_o(g);i+=h}if(!!!e.get(f.CHAOS_CONSTRUCTION)){i+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const d of u){const g=r.getRegion(d),h=Et(g),v=_o(h);i+=v}}return i}function jM(t){const e=t.elementsDict,n=f.HEXED_SUDOKU;if(!!!e.get(n))return"";let i=`
% ${n}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const KM=new Map([[f.LEAVE_EMPTY_CELLS_EMPTY,yM],[f.POSITIVE_DIAGONAL,OM],[f.NEGATIVE_DIAGONAL,AM],[f.POSITIVE_ANTIDIAGONAL,xM],[f.NEGATIVE_ANTIDIAGONAL,SM],[f.PARITY_MIRROR_POSITIVE_DIAGONAL,LM],[f.PARITY_MIRROR_NEGATIVE_DIAGONAL,NM],[f.ANTIKING,RM],[f.ANTIKNIGHT,TM],[f.ANTI_LONG_KNIGHT,MM],[f.ANTI_GIRAFFE,kM],[f.DISJOINT_GROUPS,DM],[f.TANGO,UM],[f.NONCONSECUTIVE,$M],[f.NONRATIO,FM],[f.ANTI_ENTROPY,GM],[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,BM],[f.GLOBAL_INDEXING_COLUMN,PM],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,zM],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,HM],[f.YIN_YANG_FILLOMINO_PARITY,WM]]);function VM(t,e){let n="";const r=e.tool_id,i=KM.get(r);if(i){const o=i(t,e);n+=o}return n}function Tp(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return Et(r)}function kp(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${Et(n.slice(1)).join(",")}]`}function Mp(t,e,n){let r="";const o="["+Tp(t,e).join(",")+"]";for(const s of e.lines){const l=kp(t,s);r+=`constraint ${n}(${o}, ${l});
`}return r}function Up(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=Mp(t,o,n);r+=s}return r}function XM(t,e){const n=t.puzzle.grid;return Up(n,e,"arrow_p")}function qM(t,e){const n=t.puzzle.grid;return Up(n,e,"bulbous_arrow_p")}function ZM(t,e,n,r){let i="";const o=Tp(e,r);if(o.length===1){const s=o[0],l=r.lines;for(const u of l){const g=`constraint average_arrow_p(${kp(e,u)}, ${s});
`;i+=g}}return i}function QM(t,e){return We(t,e,ZM)}function JM(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),s=Ce(o,z.UNKNOWN_REGIONS),l=r.lines.map(u=>u.map(d=>e.getCell(d.r,d.c)).filter(d=>!!d));for(const u of l){if(u.length<=1)continue;const d=Ce(u.slice(1),z.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${s}, ${d});
`}return i+=Mp(e,r,"arrow_p"),i}function e3(t,e){return We(t,e,JM)}const t3=new Map([[f.ARROW,XM],[f.AVERAGE_ARROW,QM],[f.BULBOUS_ARROW,qM],[f.CHAOS_CONSTRUCTION_ARROW,e3]]);function n3(t,e){return Xn(t,e,t3)}function Ui(t,e){const n=on(t,e.cells);return Et(n)}function r3(t,e,n){const i=`[${Ui(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Gp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=r3(o,s,n);r+=l}return r}function d_(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function i3(t,e,n,r){const i=t.puzzle.grid,s=`[${Ui(i,n).join(",")}]`,l=n.value,u=d_(t,l,e);if(!u)return["",""];const d=u[1];let g=u[0];return g+=`constraint ${r}(${s}, ${d});
`,[g,d]}function Hl(t,e,n){let r="";const i=e.constraints;if(!i)return[r,[]];const o=[];for(const[s,l]of Object.entries(i)){const u=i3(t,s,l,n);r+=u[0],o.push(u[1])}return[r,o]}function o3(t,e){const n=Hl(t,e,"killer_cage");let r=n[0];const i=n[1];return e.negative_constraints&&!!e.negative_constraints[f.ALL_CAGE_TOTALS_ARE_DIFFERENT]&&(r+=`
% ${f.ALL_CAGE_TOTALS_ARE_DIFFERENT}
`,r+=`constraint all_different([${i.join(", ")}]);
`),r}function s3(t,e,n,r){const i=Ui(e,r),o=`[${i.join(",")}]`,s=r.value;if(!s)return _o(i);const l=d_(t,s,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint inverted_killer_cage_p(${o}, ${u});
`,d}function a3(t,e){return We(t,e,s3)}function l3(t,e){return Hl(t,e,"sum_cage_p")[0]}function c3(t,e){return Gp(t,e,"parity_balance_cage_p")}function u3(t,e){return Gp(t,e,"sum_cage_look_and_say_p")}function d3(t,e){return Hl(t,e,"divisible_killer_cage_p")[0]}function _3(t,e){return Hl(t,e,"spotlight_cage_p")[0]}function f3(t,e,n,r){const o=`[${Ui(e,r).join(",")}]`,s=r.value;if(s){const l=parseInt(s);return`constraint unique_values_cage_p(${o}, ${l}, ALLOWED_DIGITS);
`}return""}function g3(t,e){return We(t,e,f3)}function h3(t,e,n,r){const o=`[${Ui(e,r).join(",")}]`,s=r.value;let l="";const u=d_(t,s,n);if(u){const m=u[1];l+=u[0],l+=`constraint sum(${o}) == ${m};
`}const d=r.cells,g=on(e,d),h=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!h.includes(I)&&h.push(I)});const v=Ce(h,z.BOARD);return l+=`constraint vaulted_cage_p(${o}, ${v});
`,l}function v3(t,e){return We(t,e,h3)}function p3(t,e,n,r,i){const o=on(e,r.cells),s=Ce(o,z.BOARD),l=Ce(o,z.YIN_YANG),u=r.value;if(u){const d=parseInt(u);return`constraint ${i}(${s}, ${l}, ${d});
`}return""}function $p(t,e,n,r){let i="";const o=n.constraints;if(!o)return i;for(const[s,l]of Object.entries(o)){const u=p3(t,e,s,l,r);i+=u}return i}function m3(t,e){const n=t.puzzle.grid;return $p(t,n,e,"yin_yang_antithesis_killer_cage_p")}function E3(t,e){const n=t.puzzle.grid;return $p(t,n,e,"yin_yang_breakeven_killer_cage_p")}function C3(t,e,n,r){const i=on(e,r.cells),o=Ce(i,z.BOARD),s=Ce(i,z.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint doublers_killer_cage_p(${o}, ${s}, ${u});
`}return""}function b3(t,e){return We(t,e,C3)}function I3(t,e,n,r){const i=on(e,r.cells),o=Ce(i,z.BOARD),s=Ce(i,z.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint negators_killer_cage_p(${o}, ${s}, ${u});
`}return""}function w3(t,e){return We(t,e,I3)}function y3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=zl(Object.values(r)),o=t.puzzle.grid;for(const s of i.values())if(!(s.length<=1))for(const[l,u]of s.flatMap((d,g)=>s.slice(g+1).map(h=>[d,h]))){const g=`[${Ui(o,l).join(",")}]`,v=`[${Ui(o,u).join(",")}]`;n+=`constraint multisets_equal_p(${g}, ${v});
`}return n}const O3=new Map([[f.KILLER_CAGE,o3],[f.INVERTED_KILLER_CAGE,a3],[f.SUM_CAGE,l3],[f.PARITY_BALANCE_CAGE,c3],[f.SUM_CAGE_LOOK_AND_SAY,u3],[f.DIVISIBLE_KILLER_CAGE,d3],[f.SPOTLIGHT_CAGE,_3],[f.UNIQUE_DIGITS_CAGE,g3],[f.VAULTED_CAGE,v3],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,m3],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,E3],[f.DOUBLERS_KILLER_CAGE,b3],[f.NEGATORS_KILLER_CAGE,w3],[f.MULTISET_CAGE,y3]]);function A3(t,e){return Xn(t,e,O3)}function x3(t,e,n,r){const i=e.r+.5,o=e.c+.5,s=n-i,l=r-o,u=Math.floor(n+s),d=Math.floor(r+l);return t.getCell(u,d)}function S3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const s=x3(t,o,e.r,e.c);s&&!n.includes(s)?(n.push(o),r.push(s)):r.includes(o)||i.push(o)}return[n,r,i]}function L3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;for(let d=0;d<i.length;d++){const g=i[d],h=g.cell,v=d+1,[m,E,I]=S3(o,h),b=Ce(m,z.GALAXY_REGIONS),w=Ce(E,z.GALAXY_REGIONS),A=Ce(I,z.GALAXY_REGIONS);n+=`% galaxy ${v}
`,n+=`constraint galaxy_center_p(${b}, ${w}, ${A}, ${v});
`,n+=`constraint connected_region(${z.GALAXY_REGIONS}, ${v});
`;const T=g.value;if(!T)continue;const k=parseInt(T);n+=`constraint galaxy_sum_p(${z.BOARD}, ${z.GALAXY_REGIONS}, ${k}, ${v});
`}if(!i.length)return n;const s=o.nCols*o.nRows,u=`${i.length+1}..${s}`;return n+=`
constraint order_remaining_galaxies_p(${z.GALAXY_REGIONS}, ${u});
`,n}function N3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function D3(t,e,n,r){const i=r.cell,[o,s]=[i.r,i.c],l=r.value,u=N3(t,l,n);if(!u)return"";const d=u[1];let g=u[0],h=[];if(o%1===0&&s%1===0?h=ll(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&s%1===0||o%1===0&&s%1===.5)&&(h=cl(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!h.length)return"";const v=Ce(h,z.BOARD),m=Ce(h,z.YIN_YANG);return g+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${d};
`,g}function R3(t,e){return We(t,e,D3)}const T3=new Map([[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,R3],[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,L3]]);function k3(t,e){return Xn(t,e,T3)}function Wh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return Et(n)}function M3(t,e){const r="["+Wh(t,e.cells).join(",")+"]",o="["+Wh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}function U3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=M3(i,o);n+=s}return n}const G3=new Map([[f.CLONE_REGION,U3]]);function $3(t,e){return Xn(t,e,G3)}function __(t,e){const n=on(t,e.cells);return Et(n)}function F3(t,e,n){const i=`[${__(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function f_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=F3(t,o,n);r+=s}return r}function P3(t,e,n,r,i,o=""){const l=`[${__(e,r).join(",")}]`;let u=r.value;if(u||(u=o),u){const d=parseInt(u);return`constraint ${i}(${l}, ${d});
`}return""}function Fp(t,e,n,r,i=""){let o="";const s=n.constraints;if(!s)return o;for(const[l,u]of Object.entries(s)){const d=P3(t,e,l,u,r,i);o+=d}return o}function z3(t,e,n,r){const o=`[${__(e,r).join(",")}]`,s=r.value;if(!s)return"";const l=Lp(s);if(!l)return"";let u="";for(const g of l){const h=parseInt(g);Number.isNaN(h)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const d="["+l.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${d});
`,u}function H3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,s]of Object.entries(r)){const l=z3(t,i,o,s);n+=l}return n}function W3(t,e){const n=t.puzzle.grid;return Fp(t,n,e,"corner_sum_p")}function B3(t,e){const n=t.puzzle.grid;return Fp(t,n,e,"corner_even_count_p")}function Y3(t,e){const n=t.puzzle.grid;return f_(n,e,"corner_sum_of_three_equals_the_other_p")}function j3(t,e){const n=t.puzzle.grid;return f_(n,e,"equal_diagonal_differences_p")}function K3(t,e){const n=t.puzzle.grid;return f_(n,e,"product_square_p")}const V3=new Map([[f.QUADRUPLE,H3],[f.CORNER_SUM,W3],[f.CORNER_EVEN_COUNT,B3],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,Y3],[f.PRODUCT_SQUARE,K3],[f.EQUAL_DIAGONAL_DIFFERENCES,j3]]);function X3(t,e){return Xn(t,e,V3)}function qs(t,e,n){return[...Object.values(t)].find(o=>{const s=o.cells[0],l=o.cells[1];if(e.c===s.c&&e.r===s.r&&n.c===l.c&&n.r===l.r||e.c===l.c&&e.r===l.r&&n.c===s.c&&n.r===s.r)return o})}function Wl(t,e){const n=on(t,e.cells);return Et(n)}function q3(t,e,n){const r=Wl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function Z3(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=q3(t,o,n);r+=s}return r}function Q3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function J3(t,e,n,r,i,o=""){var m;const s=Wl(e,r),[l,u]=s,d=(m=r.value)!=null&&m.length?r.value:o,g=Q3(t,d,n);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint ${i}(${l}, ${u}, ${h});
`,v}function Bl(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=J3(t,s,l,u,n,r);i+=d}return i}function e5(t,e){const n=Wl(t,e),[r,i]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${i} = 5;
`:`constraint ${r} + ${i} = 10;
`}function t5(t,e){let n="";const r=e.constraints,i=t.puzzle.grid;for(const u of Object.values(r)){const d=e5(i,u);n+=d}if(!e.negative_constraints)return n;const o=!!e.negative_constraints[f.NEGATIVE_V_CONSTRAINT],s=!!e.negative_constraints[f.NEGATIVE_X_CONSTRAINT],l=!!e.negative_constraints[f.NEGATIVE_XV_CONSTRAINT];if(!o&&!s&&!l)return n;for(const[u,d]of ei(i)){const g=qs(r,u,d),h=xe(u),v=xe(d);if(o&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${h} + ${v} != 5;
`;n+=m}else if(s&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${h} + ${v} != 10;
`;n+=m}else if(l&&!g){const m=`constraint ${h} + ${v} != 5 /\\ (${h} + ${v} != 10);
`;n+=m}}return n}function n5(t,e){const n=t.puzzle.grid;let r=Bl(t,e,"ratio_p","2");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RATIOS_GIVEN])return r;const o=e.constraints;let s=[];o&&(s=Object.values(o).map(u=>u.value).map(u=>u||"2")),s.length===0&&s.push("2");const l=[...new Set(s)];console.log("values",l),r+=`
% ${f.ALL_RATIOS_GIVEN}
`;for(const[u,d]of ei(n)){if(qs(o,u,d))continue;const h=xe(u),v=xe(d);for(const m of l){const E=parseInt(m),I=`constraint not ratio_p(${h}, ${v}, ${E});
`;r+=I}}return r}function r5(t,e){const n=t.puzzle.grid;let r=Bl(t,e,"abs_difference","1");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_DIFFERENCES_GIVEN])return r;const o=e.constraints;let s=[];o&&(s=Object.values(o).map(u=>u.value).map(u=>u||"1")),s.length===0&&s.push("1");const l=[...new Set(s)];r+=`
% ${f.ALL_DIFFERENCES_GIVEN}
`;for(const[u,d]of ei(n)){if(qs(o,u,d))continue;const h=xe(u),v=xe(d);for(const m of l){const E=parseInt(m),I=`constraint abs(${h} - ${v}) != ${E};
`;r+=I}}return r}function i5(t,e){const n=Wl(t,e),[r,i]=n,o=e.value;return o==="<"?`constraint ${r} < ${i};
`:o===">"?`constraint ${r} > ${i};
`:""}function Bh(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=i5(i,o);n+=s}return n}function o5(t,e){return Bl(t,e,"edge_sum_p")}function s5(t,e){return Bl(t,e,"edge_modulo_p")}function a5(t,e){const n=t.puzzle.grid;return Z3(n,e,"edge_factor_p")}function Pp(t,e,n){const r=xe(e),i=xe(n);let o="";if(e.r==n.r){const u=t.getRow(e.r)[0];o=xe(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];o=xe(u)}return o?`xy_differences_p(${r}, ${i}, ${o});
`:""}function l5(t,e){const n=on(t,e.cells),[r,i]=n,o=Pp(t,r,i);return o.length===0?"":`constraint ${o}`}function c5(t,e){const n=e.constraints,r=t.puzzle.grid;let i="";for(const s of Object.values(n)){const l=l5(r,s);i+=l}if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_XY_DIFFERENCES_GIVEN])return i;i+=`
% ${f.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[s,l]of ei(r)){if(qs(n,s,l))continue;const d=Pp(r,s,l);if(d.length===0)continue;const g=`constraint not ${d}`;i+=g}return i}function u5(t,e,n){const r=on(t,e.cells),[i,o]=Et(r),s=Yo(r,z.YIN_YANG),[l,u]=s;return`constraint ${n}(${i}, ${o}, ${l}, ${u});
`}function zp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=u5(t,o,n);r+=s}return r}function d5(t,e){const n=t.puzzle.grid;let r=zp(n,e,"yin_yang_kropki_p");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_KROPKI_GIVEN])return r;const o=e.constraints;r+=`
% ${f.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[s,l]of ei(n)){if(qs(o,s,l))continue;const d=xe(s),g=xe(l),h=Je(s,z.YIN_YANG),v=Je(l,z.YIN_YANG),m=`constraint not yin_yang_kropki_p(${d}, ${g}, ${h}, ${v});
`;r+=m}return r}function _5(t,e){const n=t.puzzle.grid;return zp(n,e,"yin_yang_white_kropki_p")}function f5(t,e,n){const r=on(t,e.cells),i=Yo(r,n),[o,s]=i;return`constraint ${o} != ${s};
`}function Yl(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=f5(t,o,n);r+=s}return r}function g5(t,e){const n=t.puzzle.grid;return Yl(n,e,z.UNKNOWN_REGIONS)}function h5(t,e){const n=t.puzzle.grid;return Yl(n,e,z.FILLOMINO_REGIONS)}function v5(t,e){const n=t.puzzle.grid;return Yl(n,e,z.SUGURU_REGIONS)}function p5(t,e){const n=t.puzzle.grid;return Yl(n,e,z.CAVE_SHADING)}const m5=new Map([[f.XV,t5],[f.DIFFERENCE,r5],[f.RATIO,n5],[f.EDGE_INEQUALITY,Bh],[f.ONE_WAY_DOOR,Bh],[f.EDGE_SUM,o5],[f.EDGE_MODULO,s5],[f.EDGE_FACTOR,a5],[f.XY_DIFFERENCES,c5],[f.YIN_YANG_KROPKI,d5],[f.YIN_YANG_WHITE_KROPKI,_5],[f.FILLOMINO_REGION_BORDER,h5],[f.UNKNOWN_REGION_BORDER,g5],[f.CHAOS_CONSTRUCTION_SUGURU_BORDER,v5],[f.EDGE_CAVE_ONE_OF_EACH,p5]]);function E5(t,e){return Xn(t,e,m5)}function C5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function jl(t,e,n=!1){let r=on(t,e.cells);return n&&(r=[...new Set(r)]),Et(r)}function b5(t,e,n,r=!1){const o=`[${jl(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function mt(t,e,n,r=!1){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=b5(s,l,n,r);i+=u}return i}function I5(t,e,n,r,i,o=""){var v;const l=`[${jl(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,d=C5(t,u,n);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${i}(${l}, ${g});
`,h}function fr(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=I5(t,s,l,u,n,r);i+=d}return i}function w5(t,e,n,r=""){let o=e.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>!!v),s=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),s=!0);const u=`[${Et(o).join(",")}]`;let d=e.value;d||(d=r);const g=parseInt(d);return`constraint ${n}(${u}, ${g}, ${s});
`}function g_(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=w5(s,u,n,r);i+=d}return i}function y5(t,e){return mt(t,e,"renban",!0)}function O5(t,e){return mt(t,e,"double_renban_p",!0)}function A5(t,e){return mt(t,e,"renrenbanban_p",!0)}function x5(t,e){return mt(t,e,"knabner_p",!0)}function S5(t,e){return mt(t,e,"renban_or_nabner_line_p",!0)}function L5(t,e){return mt(t,e,"out_of_order_consecutive_line_p")}function N5(t,e){return fr(t,e,"whispers","5")}function D5(t,e){return fr(t,e,"whispers","4")}function R5(t,e){return mt(t,e,"strictly_increasing")}function T5(t,e){return mt(t,e,"fuzzy_thermo_p")}function k5(t,e){return mt(t,e,"increasing")}function M5(t,e){return fr(t,e,"custom_thermo_p")}function U5(t,e){return mt(t,e,"palindrome")}function G5(t,e){return fr(t,e,"sum_line_p")}function $5(t,e){return mt(t,e,"xv_line_p")}function F5(t,e){return fr(t,e,"at_least_x_line_p","10")}function P5(t,e){return fr(t,e,"product_line_p")}function z5(t,e){return fr(t,e,"maximum_adjacent_difference_line_p","2")}function H5(t,e){return mt(t,e,"adjacent_multiples_line_p")}function W5(t,e){return mt(t,e,"index_line_p")}function B5(t,e){return mt(t,e,"zipper_line_p")}function Y5(t,e){return g_(t,e,"segmented_sum_line_p")}function j5(t,e){return mt(t,e,"segmented_sum_and_renban_line_p")}function K5(t,e){return g_(t,e,"n_consecutive_renban_line_p")}function V5(t,e){return g_(t,e,"n_consecutive_fuzzy_sum_line_p")}function X5(t,e,n){const r=on(t,n.cells);let i="";const o=[];for(let l=0;l<r.length;l++){const u=r[l],d=t.getRow(u.r),g=Ce(d,z.BOARD),h=`cycle_${e}_${l}`;o.push(h);const v=u.c+1;i+=`var int: ${h} = cycle_order_f(${g}, ${v});
`}const s="["+o.join(",")+"]";return i+=`constraint strictly_increasing(${s});
`,i}function q5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,s]of Object.entries(r)){const l=X5(i,o,s);n+=l}return n}function Z5(t,e){return mt(t,e,"adjacent_differences_count_line_p")}function Q5(t,e){return mt(t,e,"same_parity_line_p")}function J5(t,e){return fr(t,e,"renban_or_whispers_p","5")}function eU(t,e){return mt(t,e,"alldifferent",!0)}function tU(t,e){return mt(t,e,"repeated_digits_line_p")}function nU(t,e){return mt(t,e,"superfuzzy_arrow_p")}function rU(t,e){return mt(t,e,"ambiguous_arrow_p",!0)}function iU(t,e){return mt(t,e,"headless_arrow_p")}function oU(t,e){return fr(t,e,"unimodular_line_p","3")}function sU(t,e){return fr(t,e,"modular_line_p","3")}function aU(t,e){return fr(t,e,"modular_or_unimodular_line_p","3")}function lU(t,e){return mt(t,e,"arithmetic_sequence_line_p")}function cU(t,e){return mt(t,e,"odd_even_oscillator_line_p")}function uU(t,e){return fr(t,e,"high_low_oscillator_line_p","5")}function dU(t,e){return mt(t,e,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function _U(t,e){return mt(t,e,"look_and_say_line_p",!0)}function fU(t,e){const n=on(t,e.cells);function r(d){const g=[];let h=null;for(const v of d)v.r!=h?(g.push([v]),h=v.r):g[g.length-1].push(v);return g}const i=r(n);if(i.length<2)return"";const o=i[0],l=`[${Et(o).join(",")}]`;let u="";for(let d=1;d<i.length;d++){const g=i[d],v=`[${Et(g).join(",")}]`;u+=`constraint sum(${v}) == sum(${l});
`}return u}function gU(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=fU(i,o);n+=s}return n}function hU(t,e){return mt(t,e,"between_line_p")}function vU(t,e){return mt(t,e,"tightrope_line_p")}function pU(t,e){return mt(t,e,"double_arrow_p")}function mU(t,e){return mt(t,e,"split_peas_p")}function EU(t,e){return mt(t,e,"parity_count_line_p")}function CU(t,e){return mt(t,e,"product_of_ends_equals_sum_of_line_p")}function Hp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function bU(t,e,n,r){let i="";const o=on(e,r.cells),s=Hp(o);if(!s.length)return"";const l=`sum_line_${n}`;i+=`var int: ${l};
`;for(const u of s){const g=`constraint sum(${Ce(u,z.BOARD)}) == ${l};
`;i+=g}return i}function IU(t,e){return We(t,e,bU)}function wU(t,e,n,r){return`constraint entropic_line_p(${`[${jl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function yU(t,e){return We(t,e,wU)}function OU(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${jl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function AU(t,e){return We(t,e,OU)}function xU(t,e){return mt(t,e,"peapods_p")}function SU(t,e,n,r,i=""){const o=t.puzzle.grid,s=on(o,n.cells),l=Ce(s,z.BOARD),u=Ce(s,z.YIN_YANG);let d=n.value;d||(d=i);const g=parseInt(d);return`constraint ${r}(${l}, ${u}, ${g});
`}function Wp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;for(const[s,l]of Object.entries(o)){const u=SU(t,s,l,n,r);i+=u}return i}function LU(t,e){return Wp(t,e,"yin_yang_shaded_whispers_line_p","5")}function NU(t,e){return Wp(t,e,"yin_yang_unshaded_modular_line_p","3")}function DU(t,e,n){const r=on(t,e.cells),i=Ce(r,z.BOARD),o=Ce(r,z.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function h_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=DU(o,s,n);r+=l}return r}function RU(t,e){return h_(t,e,"yin_yang_unshaded_entropic_line_p")}function TU(t,e){return h_(t,e,"yin_yang_indexing_line_coloring_p")}function kU(t,e){const n=t.grid,i=t.elementsDict.get(f.YIN_YANG_REGION_SUM_LINE);if(!i||!i.constraints)return"";let o=`
% ${e}
`;for(const s of Object.values(i.constraints)){const u=s.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),d=Ce(u,z.YIN_YANG);o+=`constraint count_unique_values(${d}) >= 2;
`}return o}function MU(t,e){let n=h_(t,e,"yin_yang_region_sum_line_p");return e.negative_constraints&&!!e.negative_constraints[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(n+=kU(t.puzzle,f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),n}function UU(t,e,n){const r=t.puzzle.grid,i=on(r,e.cells),o=Ce(i,z.VALUES_GRID);return`constraint ${n}(${o});
`}function v_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=UU(t,o,n);r+=s}return r}function GU(t,e){return v_(t,e,"between_line_p")}function $U(t,e){return v_(t,e,"double_arrow_p")}function FU(t,e){return v_(t,e,"strictly_increasing")}function PU(t,e,n,r){const i=on(e,r.cells),o=Hp(i);if(o.sort((d,g)=>g.length-d.length),o.length<=1)return"";let s="";const l=o[0],u=Ce(l,z.VALUES_GRID);for(const d of o.slice(1)){const g=Ce(d,z.VALUES_GRID),h=`constraint subset_p(${u}, ${g});
`;s+=h}return s}function zU(t,e){return We(t,e,PU)}const HU=new Map([[f.THERMOMETER,R5],[f.FUZZY_THERMOMETER,T5],[f.SLOW_THERMOMETER,k5],[f.CUSTOM_THERMOMETER,M5],[f.RENBAN_LINE,y5],[f.DOUBLE_RENBAN_LINE,O5],[f.RENRENBANBAN_LINE,A5],[f.NABNER_LINE,x5],[f.WHISPERS_LINE,N5],[f.DUTCH_WHISPERS,D5],[f.RENBAN_OR_WHISPERS_LINE,J5],[f.RENBAN_OR_NABNER_LINE,S5],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,L5],[f.N_CONSECUTIVE_RENBAN_LINE,K5],[f.PALINDROME,U5],[f.SUM_LINE,G5],[f.PRODUCT_LINE,P5],[f.XV_LINE,$5],[f.AT_LEAST_X_LINE,F5],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,z5],[f.SAME_PARITY_LINE,Q5],[f.ADJACENT_MULTIPLES_LINE,H5],[f.ADJACENT_DIFFERENCES_COUNT_LINE,Z5],[f.LOOK_AND_SAY_LINE,_U],[f.ROW_SUM_LINE,gU],[f.INDEX_LINE,W5],[f.ZIPPER_LINE,B5],[f.SEGMENTED_SUM_LINE,Y5],[f.SEGMENTED_SUM_AND_RENBAN_LINE,j5],[f.N_CONSECUTIVE_FUZZY_SUM_LINE,V5],[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,dU],[f.SUPERFUZZY_ARROW,nU],[f.AMBIGUOUS_ARROW,rU],[f.HEADLESS_ARROW,iU],[f.ARITHMETIC_SEQUENCE_LINE,lU],[f.ODD_EVEN_OSCILLATOR_LINE,cU],[f.HIGH_LOW_OSCILLATOR_LINE,uU],[f.UNIQUE_VALUES_LINE,eU],[f.REPEATED_DIGITS_LINE,tU],[f.UNIMODULAR_LINE,oU],[f.MODULAR_LINE,sU],[f.MODULAR_OR_UNIMODULAR_LINE,aU],[f.REGION_SUM_LINE,IU],[f.ENTROPIC_LINE,yU],[f.ENTROPIC_OR_MODULAR_LINE,AU],[f.ROW_CYCLE_THERMOMETER,q5],[f.PEAPODS,xU],[f.BETWEEN_LINE,hU],[f.TIGHTROPE_LINE,vU],[f.DOUBLE_ARROW_LINE,pU],[f.SPLIT_PEAS,mU],[f.PARITY_COUNT_LINE,EU],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,CU],[f.DOUBLERS_BETWEEN_LINE,GU],[f.DOUBLERS_DOUBLE_ARROW_LINE,$U],[f.DOUBLERS_THERMOMETER,FU],[f.INDEXER_CELLS_REGION_SUBSET_LINE,zU],[f.YIN_YANG_SHADED_WHISPERS_LINE,LU],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,RU],[f.YIN_YANG_UNSHADED_MODULAR_LINE,NU],[f.YIN_YANG_REGION_SUM_LINE,MU],[f.YIN_YANG_INDEXING_LINE_COLORING,TU]]);function WU(t,e){return Xn(t,e,HU)}function BU(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};return t.getOrSetSharedVar(e,n,r)}function YU(t,e,n,r){const i=r.value,o=r.name;if(!i)return"";const s=o.length?o:`var_${n}`,l=BU(t,i,s);return l?l[0]:""}function jU(t,e){return We(t,e,YU)}const KU=new Map([[f.VARIABLE_CONSTRAINT,jU]]);function VU(t,e){return Xn(t,e,KU)}function Kl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return Et(i)}function Ko(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function XU(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),l=`[${Kl(e,n).join(",")}]`,u=n.value,d=Ko(t,u,i,o);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${r}(${l}, ${g});
`,h}function gr(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=XU(t,o,s,n);r+=l}return r}function qU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Kl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Ko(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E}function ZU(t,e){return We(t,e,qU)}function QU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Kl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Ko(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E+=`var bool: ${b} = x_sum_p(${l}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function JU(t,e){return We(t,e,QU)}function eG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=Kl(e,r),l=`[${s.join(",")}]`,u=s[0],d=r.value,g=Ko(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint x_index_p(${l}, ${u}, ${h});
`,v}function tG(t,e){return We(t,e,eG)}function nG(t,e){return gr(t,e,"x_sum_p")}function rG(t,e){return gr(t,e,"shortsighted_x_sum_p")}function iG(t,e){return gr(t,e,"broken_x_sum_p")}function oG(t,e){return gr(t,e,"shifted_x_sum_p")}function sG(t,e){return gr(t,e,"skyscrapers_p")}function aG(t,e){return gr(t,e,"x_sum_skyscrapers_p")}function lG(t,e){return gr(t,e,"battlefield_p")}function cG(t,e){return gr(t,e,"rising_streak_p")}function uG(t,e){return gr(t,e,"outside_consecutive_sum_p")}function dG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=Ce(s,z.BOARD),u=Ce(s,z.CELL_CENTER_LOOP),d=r.value;if(d){const g=parseInt(d);return`constraint loopwhiches_p(${l}, ${u}, ${g});
`}return""}function _G(t,e){return We(t,e,dG)}function fG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=Ce(l,z.BOARD),d=Ce(l,z.UNKNOWN_REGIONS),g=r.value,h=Ko(t,g,i,o);if(!h)return"";const v=h[1];let m=h[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${d}, ${v});
`,m}function gG(t,e){return We(t,e,fG)}function hG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=s[0],u=Je(l,z.BOARD),d=Ce(s,z.UNKNOWN_REGIONS);return`constraint chaos_construction_x_index_region_p(${u}, ${d});
`}function vG(t,e){return We(t,e,hG)}function pG(t,e){return gr(t,e,"little_killer_sum_p")}function mG(t,e){return gr(t,e,"little_killer_product_p")}function EG(t,e){return gr(t,e,"x_omit_little_killer_sum_p")}function CG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=Ce(s,z.BOARD),u=Ce(s,z.YIN_YANG),d=r.value;if(d){const g=parseInt(d);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${l}, ${u}, ${g});
`}return""}function bG(t,e){return We(t,e,CG)}function IG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=Ce(s,z.VALUES_GRID),u=r.value;if(u){const d=parseInt(u);return`constraint little_killer_sum_p(${l}, ${d});
`}return""}function wG(t,e){return We(t,e,IG)}function yG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=Ce(l,z.PENTOMINO_REGIONS),d=r.value,g=Ko(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint pentomino_border_count_p(${u}, ${h});
`,v}function OG(t,e){return We(t,e,yG)}const AG=new Map([[f.SANDWICH_SUM,ZU],[f.X_SUM,nG],[f.SHORTSIGHTED_X_SUM,rG],[f.BROKEN_X_SUM,iG],[f.SHIFTED_X_SUM,oG],[f.SKYSCRAPERS,sG],[f.X_SUM_SKYSCRAPERS,aG],[f.X_INDEX,tG],[f.BATTLEFIELD,lG],[f.SANDWICH_SUM_XOR_X_SUM,JU],[f.RISING_STREAK,cG],[f.OUTSIDE_CONSECUTIVE_SUM,uG],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,bG],[f.LOOPWICHES,_G],[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,gG],[f.CHAOS_CONSTRUCTION_X_INDEX_REGION,vG],[f.PENTOMINO_BORDER_COUNT,OG],[f.LITTLE_KILLER_SUM,pG],[f.LITTLE_KILLER_PRODUCT,mG],[f.X_OMIT_LITTLE_KILLER_SUM,EG],[f.NEGATORS_LITTLE_KILLER_SUM,wG]]);function xG(t,e){return Xn(t,e,AG)}function p_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=n(o,s);r+=l}return r}function SG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const s=Ce(o,z.SASHIGANE),l=Ce(o,z.SASHIGANE_BENDS),u=xe(r),d=Je(r,z.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${d}, ${s}, ${l});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function LG(t,e){return p_(t,e,SG)}function NG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+Et(o).join(",")+"]",u=Ce(o,z.CELL_CENTER_LOOP),d=xe(r);return`constraint thermo_sightline_loop_arrow_p(${l}, ${u}, ${d});
`}function DG(t,e){return p_(t,e,NG)}function RG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+Et(o).join(",")+"]",u=Ce(o,z.CELL_CENTER_LOOP),d=xe(r);return`constraint internal_loop_skyscrapers_p(${l}, ${u}, ${d});
`}function TG(t,e){return p_(t,e,RG)}const kG=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,LG],[f.THERMO_SIGHTLINE_LOOP_ARROW,DG],[f.INTERNAL_LOOP_SKYSCRAPERS,TG]]);function MG(t,e){return Xn(t,e,kG)}function UG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i);return`constraint ${n}(${o});
`}function Bp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=UG(o,s,n);r+=l}return r}const GG={allow_var:!0,allow_interval:!0,allow_int_list:!1};function m_(t,e,n,r=GG){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function $G(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const s=xe(o);let l=e.value;if(l||(l=r),!l)return"";const u=parseInt(l);return`constraint ${n}(${s}, ${u});
`}function Yp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=$G(s,l,n,r);i+=u}return i}function Vl(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const s=xe(o),u=Pl(t,o).map(h=>Ce(h,n)),d=Je(o,n);return`constraint ${r}(${u.join(", ")}, ${d}, ${s});
`}function E_(t,e,n,r){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=Vl(s,l,n,r);i+=u}return i}function FG(t,e){return Bp(t,e,"odd_p")}function PG(t,e){return Bp(t,e,"even_p")}function zG(t,e){return Yp(t,e,"low_digit_p","5")}function HG(t,e){return Yp(t,e,"high_digit_p","5")}function WG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),s=t.getNeighboorCells(i),l=Ce(s,z.BOARD);return`constraint ${n}(${l}) == ${o};
`}function jp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=WG(o,s,n);r+=l}return r}function BG(t,e){return jp(t,e,"odd_count")}function YG(t,e){return jp(t,e,"even_count")}function jG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o);l.push(o);const u=Ce(l,z.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function KG(t,e){return We(t,e,jG)}function VG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${Ce(l,z.BOARD)}, ${s});
`}function XG(t,e){return We(t,e,VG)}function qG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${Ce(l,z.BOARD)}, ${s});
`}function ZG(t,e){return We(t,e,qG)}function QG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=e.getRow(o.r),l=Ce(s,z.BOARD),u=o.c+1;return`constraint indexing_column_p(${l}, ${u});
`}function JG(t,e){let n=We(t,e,QG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_COLUMN_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_COLUMN_GIVEN}
`;for(const s of o.getAllCells()){if(jo(i,s))continue;const u=o.getRow(s.r),d=Ce(u,z.BOARD),g=s.c+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function e$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=e.getCol(o.c),l=Ce(s,z.BOARD),u=o.r+1;return`constraint indexing_column_p(${l}, ${u});
`}function t$(t,e){let n=We(t,e,e$);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_ROW_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_ROW_GIVEN}
`;for(const s of o.getAllCells()){if(jo(i,s))continue;const u=o.getCol(s.c),d=Ce(u,z.BOARD),g=s.r+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function n$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=o.r+1,u=o.c+1;if(o.region!==null){const g=o.region+1;return`constraint ${s} == ${l} \\/ ${s} == ${u} \\/ ${s} == ${g};
`}return`constraint ${s} == ${l} \\/ ${s} == ${u};
`}function r$(t,e){return We(t,e,n$)}function i$(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),l=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),d=e.getCell(i.r,i.c+1);if(!s||!l||!u||!d)return"";const g=xe(s),h=xe(l),v=xe(u),m=xe(d);return`constraint groups_opposite_parity_p([${g},${h}], [${v},${m}]);
`}function o$(t,e){return We(t,e,i$)}function s$(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),[s,l,u,d]=c_(t,i);return`constraint ${n}(${o}, ${s}, ${l}, ${u}, ${d});
`}function C_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=s$(o,s,n);r+=l}return r}function a$(t,e){return C_(t,e,"is_watchtower_p")}function l$(t,e){return C_(t,e,"is_not_watchtower_p")}function c$(t,e){return C_(t,e,"farsight_p")}function u$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),[l,u,d,g]=c_(e,o);return`constraint radar_p(${s}, ${l}, ${u}, ${d}, ${g}, 9);
`}function d$(t,e){let n=We(t,e,u$);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RADARS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_RADARS_GIVEN}
`;for(const s of o.getAllCells()){if(jo(i,s))continue;const u=xe(s),[d,g,h,v]=c_(o,s),m=`constraint not radar_p(${u}, ${d}, ${g}, ${h}, ${v}, 9);
`;n+=m}return n}function _$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=Ce(l,z.BOARD),g=Ce(u,z.BOARD),[h,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${d}, ${g}, ${h}, ${v}, ${s});
`}function f$(t,e){return We(t,e,_$)}function Kp(t,e,n){const r=e.constraints,i=Object.values(r);let o="";const s=i.map(u=>u.cell),l=new Set(s.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of i){const d=u.cell,g=t.getCell(d.r,d.c);if(!g)continue;const h=xe(g),v=t.getOrthogonallyAdjacentCells(g).filter(I=>!l.has(I)),m=Ce(v,z.BOARD),E=`constraint ${n}(${m}, ${h});
`;o+=E}return o}function g$(t,e){const n=t.puzzle.grid;return Kp(n,e,"maximum_p")}function h$(t,e){const n=t.puzzle.grid;return Kp(n,e,"minimum_p")}function v$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(g=>g.cell),l=new Set(s.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${Et([...l]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${d}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}function p$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(m=>m.cell),l=new Set(s.map(m=>n.getCell(m.r,m.c)).filter(m=>!!m)),u=n.getAllCells().filter(m=>!l.has(m)),g=`${Et([...l]).join(`,
	`)}`,v=`${Et([...u]).join(`,
	`)}`;return o+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,o+=`array[int] of var int: not_reverse_counting_circles = [
	${v}
];
`,o+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,o}function m$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(v=>v.cell),l=new Set(s.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${Et([...l]).join(`,
	`)}`,h=`${Yo([...l],z.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${z.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${d}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${h}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${z.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const v of n.getAllCells()){if(l.has(v))continue;const m=Je(v,z.COUNTING_CIRCLES_COLORS);o+=`constraint ${m} == 0;
`}for(const v of i){const m=v.cell,E=n.getCell(m.r,m.c);if(!E)continue;const I=xe(E),b=Je(E,z.COUNTING_CIRCLES_COLORS),w=v.value;w?o+=`constraint ${b} == ${w};
`:o+=`constraint ${b} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${I}, ${b}) == ${I};
`}return o+=`
`,o}function E$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(g=>g.cell),l=new Set(s.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${Et([...l]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${d}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function C$(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),l=Pl(t,i).map(d=>Ce(d,z.BOARD));return`constraint ${n}(${l.join(", ")}, ${o});
`}function Vp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=C$(t,o,n);r+=s}return r}function b$(t,e){const n=t.puzzle.grid;return Vp(n,e,"seen_even_count_p")}function I$(t,e){const n=t.puzzle.grid;return Vp(n,e,"seen_odd_count_p")}function w$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getCellsByKnightMove(o),u=Ce(l,z.BOARD),d=r.value??"5",g=m_(t,d,n);if(!g)return"";let h="";const v=g[1];return h+=g[0],h+=`constraint cell_knights_whisper_p(${s}, ${u}, ${v});
`,h}function y$(t,e){return We(t,e,w$)}function O$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint yin_yang_minesweeper_p(${Ce(u,z.YIN_YANG)}, ${s});
`}function A$(t,e){return We(t,e,O$)}function x$(t,e){return E_(t,e,z.YIN_YANG,"yin_yang_seen_unshaded_p")}function S$(t,e){return E_(t,e,z.YIN_YANG,"yin_yang_seen_shaded_p")}function L$(t,e){return E_(t,e,z.YIN_YANG,"yin_yang_seen_same_shade_p")}function N$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Je(o,z.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),d=Ce(u,z.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${l}, ${d});
`}function D$(t,e){return We(t,e,N$)}function R$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o);return`constraint count(${Ce(l,z.YIN_YANG)}, 1) == ${s};
`}function T$(t,e){return We(t,e,R$)}function k$(t,e){let n=`
% ${e.tool_id}
`;const r=e.constraints,i=zl(Object.values(r)),o=t.puzzle.grid;for(const s of i.values()){if(s.length<=1)continue;const u=s.map(g=>g.cell).map(g=>o.getCell(g.r,g.c)).filter(g=>g!==void 0),d=Ce(u,z.YIN_YANG);n+=`constraint all_equal(${d});
`}return n}function M$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),d=e.getCol(o.c),g=Ce(u,z.TWO_CONTIGUOUS_REGIONS),h=Ce(d,z.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${s}, ${l});
`}function U$(t,e){return We(t,e,M$)}function G$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=Ce(l,z.UNKNOWN_REGIONS),g=Ce(u,z.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${d}, ${g}, ${s});
`}function $$(t,e){return We(t,e,G$)}function F$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Je(o,z.NURIMISAKI),l=e.getOrthogonallyAdjacentCells(o);let d=`constraint nurimisaki_unshaded_endpoint_p(${Ce(l,z.NURIMISAKI)}, ${s});
`;return d+=Vl(e,r,z.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),d}function P$(t,e){let n=We(t,e,F$);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const s of o.getAllCells()){if(jo(i,s))continue;const u=Je(s,z.NURIMISAKI),d=o.getOrthogonallyAdjacentCells(s),h=`constraint not nurimisaki_unshaded_endpoint_p(${Ce(d,z.NURIMISAKI)}, ${u});
`;n+=h}return n}function z$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Je(o,z.SASHIGANE),u=Je(o,z.SASHIGANE_BENDS);let d=`constraint sashigane_bend_region_count_p(${s}, ${l}, sashigane);
`;return d+=`constraint ${u} = true;
`,d}function H$(t,e){return We(t,e,z$)}function W$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Je(o,z.SASHIGANE),l=r.value;if(!l)return"";const u=parseInt(l);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function B$(t,e){return We(t,e,W$)}function Y$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Je(o,z.CELL_CENTER_LOOP)} == 1;
`:""}function j$(t,e){return We(t,e,Y$)}function K$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Je(o,z.CELL_CENTER_LOOP)} == 0;
`:""}function V$(t,e){return We(t,e,K$)}function X$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint sum(${Ce(u,z.CELL_CENTER_LOOP)}) == ${s};
`}function q$(t,e){return We(t,e,X$)}function Z$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Je(o,z.CAVE_SHADING),u=Pl(e,o),d=[];for(const h of u){const v=Ce(h,z.CAVE_SHADING);d.push(v)}return`constraint cave_clue_p(${s}, ${l}, ${d[0]}, ${d[1]}, ${d[2]}, ${d[3]});
`}function Q$(t,e){return We(t,e,Z$)}function J$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Je(o,z.CAVE_SHADING),u=Je(o,z.CAVE_REGIONS),d=Pl(e,o),g=[];for(const v of d){const m=Ce(v,z.CAVE_SHADING);g.push(m)}return`constraint cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(${s}, ${l}, ${u}, ${z.CAVE_REGIONS}, ${g[0]}, ${g[1]}, ${g[2]}, ${g[3]});
`}function eF(t,e){return We(t,e,J$)}function tF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=r.value;if(!s)return"";const l=parseInt(s);let u="";const d=xe(o),g=Je(o,z.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(o),v=Ce(h,z.BOARD),m=Ce(h,z.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${d});
`;const E=e.getCellsByKnightMove(o),I=Ce(E,z.BOARD),b=Ce(E,z.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${d});
`;const w=[Fe.NE,Fe.NW,Fe.SE,Fe.SW],A=[];for(const U of w)e.getCellsInDirection(o.r,o.c,U).forEach(M=>A.push(M));const T=Ce(A,z.BOARD),k=Ce(A,z.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${k}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${d});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${l};
`,u}function nF(t,e){return We(t,e,tF)}function rF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=r.value;if(!s)return"";const l=parseInt(s);let u="";const d=xe(o),g=Je(o,z.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(o),v=Ce(h,z.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${g}) >= ${l};
`;const m=[Fe.N,Fe.S,Fe.E,Fe.W],E=[];for(const I of m){const b=e.getCellsInDirection(o.r,o.c,I);if(!b.length)continue;const w=Ce(b,z.BOARD),A=Ce(b,z.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,k=`in_arrow_${n}_${I}[1]`;E.push(k),u+=`array[index_set(${w})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${T}, ${d}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${l};
`,u}function iF(t,e){return We(t,e,rF)}function oF(t,e,n,r){return Vl(e,r,z.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function sF(t,e){return We(t,e,oF)}function aF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function lF(t,e){return We(t,e,aF)}function cF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function uF(t,e){return We(t,e,cF)}function dF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${Je(o,z.CONNECT_FOUR)});
`:""}function _F(t,e){return We(t,e,dF)}function fF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${Je(o,z.CONNECT_FOUR)});
`:""}function gF(t,e){return We(t,e,fF)}function hF(t,e){let n="";const r=e.constraints,i=t.puzzle.grid,o=Object.values(r).map(d=>d.cell),s=new Set(o.map(d=>i.getCell(d.r,d.c)).filter(d=>!!d)),l=Ce([...s],z.NURIKABE_REGIONS);n+=`constraint all_different(${l});
`;let u=0;for(const[d,g]of Object.entries(r)){const h=g.cell,v=i.getCell(h.r,h.c);if(!v)continue;const m=g.value;if(!m)continue;const E=m_(t,m,d);if(!E)continue;const I=E[1];n+=E[0];const b=Je(v,z.NURIKABE_REGIONS);n+=`constraint nurikabe_island_product_of_sum_and_size_p(${z.BOARD}, ${z.NURIKABE_REGIONS}, ${b}, ${I});
`,u+=1}return n+=`constraint count_unique_values(array1d(${z.NURIKABE_REGIONS})) == ${u+1};
`,n}function vF(t,e,n,r){return Vl(e,r,z.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function pF(t,e){return We(t,e,vF)}function mF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Je(o,z.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${z.NURIKABE_REGIONS}, ${l}, ${s});
`}function EF(t,e){return We(t,e,mF)}function CF(t,e){let n="";const r=e.constraints,i=zl(Object.values(r)),o=t.puzzle.grid;for(const d of i.values())if(!(d.length<=1))for(const[g,h]of d.flatMap((v,m)=>d.slice(m+1).map(E=>[v,E]))){const v=g.cell,m=h.cell,E=o.getCell(v.r,v.c),I=o.getCell(m.r,m.c);if(!E||!I)continue;const b=Je(E,z.BOARD),w=Je(I,z.BOARD);n+=`constraint ${b} == ${w};
`}const l=[...i.values()].map(d=>d[0].cell).map(d=>o.getCell(d.r,d.c)).filter(d=>d!==void 0),u=Ce(l,z.BOARD);return n+=`constraint alldifferent(${u});
`,n}function bF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(h=>h.cell),l=new Set(s.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),d=`${Yo([...l],z.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_size_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_size_clues);
`;for(const h of Object.values(r)){const v=h.cell,m=n.getCell(v.r,v.c);if(!m)continue;const E=xe(m),I=Je(m,z.SHIKAKU_REGIONS),b=Je(m,z.SHIKAKU_WIDTH),w=Je(m,z.SHIKAKU_HEIGHT);o+=`constraint shikaku_region_size_p(${z.SHIKAKU_REGIONS}, ${I}, ${E}, ${b}, ${w});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${z.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`),o}function IF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(v=>v.cell),l=new Set(s.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${Yo([...l],z.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_sum_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,m]of Object.entries(r)){const E=m.cell,I=n.getCell(E.r,E.c);if(!I)continue;const b=Je(I,z.SHIKAKU_REGIONS),w=m.value??"",A=m_(t,w,v,g);if(!A)continue;const T=A[1];o+=A[0],o+=`constraint shikaku_region_sum_p(${z.BOARD}, ${z.SHIKAKU_REGIONS}, ${b}, ${T});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${z.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`),o}function wF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";for(const[s,l]of i.entries()){const u=l.cell,d=n.getCell(u.r,u.c);if(!d)continue;const g=xe(d),h=Je(d,z.BYOKC_GRID);o+=`constraint ${h} == ${s+1};
`,o+=`constraint byok_cage_cell_size_p(${z.BYOKC_GRID}, ${g}, ${h});
`}return o}function yF(t,e){const n=t.puzzle.grid,r=e.constraints;let i="";for(const s of Object.values(r)){const l=s.cell,u=n.getCell(l.r,l.c);if(!u)continue;const d=Je(u,z.BYOKC_GRID);i+=`constraint byok_not_cage_cell_p(${d});
`}if(!e.negative_constraints)return i;if(!!e.negative_constraints[f.ALL_SQUARES_GIVEN]){i+=`
% ${f.ALL_SQUARES_GIVEN}
`;for(const s of n.getAllCells()){if(jo(r,s))continue;const d=`constraint ${Je(s,z.BYOKC_GRID)} > 0;
`;i+=d}}return i}const OF=new Map([[f.ODD,FG],[f.EVEN,PG],[f.LOW_DIGIT,zG],[f.HIGH_DIGIT,HG],[f.ODD_MINESWEEPER,BG],[f.EVEN_MINESWEEPER,YG],[f.DIAGONALLY_ADJACENT_SUM,ZG],[f.ORTHOGONAL_SUM,XG],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,KG],[f.FRIENDLY_CELL,r$],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,o$],[f.WATCHTOWER,a$],[f.NOT_WATCHTOWER,l$],[f.FARSIGHT,c$],[f.RADAR,d$],[f.INDEXING_COLUMN,JG],[f.INDEXING_ROW,t$],[f.SANDWICH_ROW_COL_COUNT,f$],[f.SEEN_EVEN_COUNT,b$],[f.SEEN_ODD_COUNT,I$],[f.CELL_KNIGHT_WHISPERS,y$],[f.YIN_YANG_MINESWEEPER,A$],[f.YIN_YANG_SEEN_UNSHADED_CELLS,x$],[f.YIN_YANG_SEEN_SHADED_CELLS,S$],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,L$],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,D$],[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,T$],[f.YIN_YANG_LABELED_SHADE_CELL,k$],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,U$],[f.SEEN_REGION_BORDERS_COUNT,$$],[f.NURIMISAKI_UNSHADED_ENDPOINTS,P$],[f.NURIKABE_SEEN_WATERWAY_CELLS,pF],[f.NURIKABE_ISLAND_SIZE_CELL,EF],[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,hF],[f.SASHIGANE_BEND_REGION_COUNT,H$],[f.SASHIGANE_REGION_SUM,B$],[f.CELL_ON_THE_LOOP,j$],[f.CELL_NOT_ON_THE_LOOP,V$],[f.COUNT_LOOP_NEIGHBOUR_CELLS,q$],[f.CAVE_CLUE,Q$],[f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,eF],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,nF],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,iF],[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,sF],[f.BYOK_CAGE_SIZE,wF],[f.BYOK_NOT_CAGE_CELL,yF],[f.DIRECTED_PATH_START,lF],[f.DIRECTED_PATH_END,uF],[f.CONENCT_FOUR_RED,_F],[f.CONNECT_FOUR_YELLOW,gF],[f.MAXIMUM,g$],[f.MINIMUM,h$],[f.COUNTING_CIRCLES,v$],[f.REVERSE_COUNTING_CIRCLES,p$],[f.COLORED_COUNTING_CIRCLES,m$],[f.UNIQUE_CELLS,E$],[f.SHIKAKU_REGION_SIZE,bF],[f.SHIKAKU_REGION_SUM,IF],[f.TELEPORT,CF]]);function AF(t,e){return Xn(t,e,OF)}function qn(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=n(o,s);r+=l}return r}function xF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.UNKNOWN_REGIONS),s=e.directions,l=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),v=Ce(h,z.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_different(${g}, ${o})`).join(" + ")} == ${i};
`}function SF(t,e){return qn(t,e,xF)}function LF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.UNKNOWN_REGIONS),s=e.directions,l=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),v=Ce(h,z.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_uninterrupted(${g}, ${o})`).join(" + ")} + 1 == ${i};
`}function NF(t,e){return qn(t,e,LF)}function DF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.YIN_YANG),s=e.directions;let l="";for(const u of s){const d=t.getCellsInDirection(r.r,r.c,u),g=Ce(d,z.BOARD),h=Ce(d,z.YIN_YANG);l+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${g}, ${h}) == ${i};
`}return l}function RF(t,e){return qn(t,e,DF)}function TF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=Ce(u,z.YIN_YANG);s+=`constraint count(${d}, 1) == ${i};
`}return s}function kF(t,e){let n=qn(t,e,TF);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const s of o.getAllCells()){const l=jo(i,s),u=l?l.directions:[],d=xe(s),g=[Fe.E,Fe.N,Fe.S,Fe.W];for(const h of g){if(u.includes(h))continue;const v=o.getCellsInDirection(s.r,s.c,h),m=Ce(v,z.YIN_YANG);n+=`constraint count(${m}, 1) != ${d};
`}}return n}function MF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.YIN_YANG),s=e.directions,l=[];for(const d of s){const g=t.getCellsInDirection(r.r,r.c,d),h=Ce(g,z.YIN_YANG),v=Ce(g,z.FILLOMINO_REGIONS);l.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${h}, ${v})`)}return l.length?`constraint ${l.join(" + ")} == ${i};
`:""}function UF(t,e){return qn(t,e,MF)}function GF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count(${Ce(d,z.NURIKABE_SHADING)}, 1)`;s.push(h)}return`constraint ${s.join(" + ")} = ${i};
`}function $F(t,e){return qn(t,e,GF)}function FF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${Ce(d,z.CELL_CENTER_LOOP)})`;s.push(h)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function PF(t,e){return qn(t,e,FF)}function zF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.GALAXY_REGIONS),s=e.directions,l=[];for(const d of s){const g=t.getCellsInDirection(r.r,r.c,d),v=`count(${Ce(g,z.GALAXY_REGIONS)}, ${o})`;l.push(v)}return l.length?`constraint ${l.join(" + ")} = ${i};
`:""}function HF(t,e){return qn(t,e,zF)}function WF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),g="["+Et(u).join(",")+"]";s+=`constraint hot_arrows_p(${g}, ${i});
`}return s}function BF(t,e){return qn(t,e,WF)}function YF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=Ce(u,z.BOARD);s+=`constraint cold_arrows_p(${d}, ${i});
`}return s}function jF(t,e){return qn(t,e,YF)}function KF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.CONNECT_FOUR),s=e.directions,l=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g);l.push(...h)}return l.length===0?"":`constraint count(${Ce(l,z.CONNECT_FOUR)}, ${o}) == ${i};
`}function VF(t,e){return qn(t,e,KF)}function XF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Je(r,z.UNKNOWN_REGIONS),s=e.directions;let l="";for(const u of s){const d=t.getCellsInDirection(r.r,r.c,u),g=Ce(d,z.UNKNOWN_REGIONS);l+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${g});
`}return l}function qF(t,e){return qn(t,e,XF)}function ZF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u);if(d.length!=0){if(u===Fe.N||u===Fe.S){const g=u===Fe.N?0:-1,v=`count(${"["+d.map(m=>`${z.SHADED_BOUNDARIES_VERTICAL}[${m.r+g}, ${m.c}]`).join(",")+"]"}, true)`;s.push(v)}if(u===Fe.E||u===Fe.W){const g=u==Fe.W?0:-1,v=`count(${"["+d.map(m=>`${z.SHADED_BOUNDARIES_HORIZONTAL}[${m.r}, ${m.c+g}]`).join(",")+"]"}, true)`;s.push(v)}}}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function QF(t,e){return qn(t,e,ZF)}const JF=new Map([[f.HOT_ARROWS,BF],[f.COLD_ARROWS,jF],[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,SF],[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,NF],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,RF],[f.LOOP_CELL_COUNT_ARROWS,PF],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,UF],[f.YIN_YANG_COUNT_SHADED_CELLS,kF],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,HF],[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,$F],[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,VF],[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,qF],[f.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS,QF]]);function eP(t,e){return Xn(t,e,JF)}function tP(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=kt(e,`${t}`),e}function nP(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=kt(e,`${t}`),e}function rP(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=kt(e,`${t}`),e}function iP(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=kt(e,`${t}`),e}function oP(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=z.LITS_SHADING,s=z.LITS_REGIONS,l=z.CAVE_REGIONS;let u=`
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
`);for(const g of d){const h=r.getRegion(g),m=`constraint count_eq(${Ce(h,z.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function sP(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=z.CAVE_SHADING,s=z.BOARD_REGIONS,l="renban_cave_regions";let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint renban_cave_regions_p(${o}, ${s}, ${l});
`,u+=`constraint renban_caves_p(${z.BOARD}, ${l});
`,u}function aP(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=z.BOARD,s=z.CAVE_REGIONS;let l=`
% ${e}
`;return l+=`constraint cave_wall_suguru_p(${o}, ${s});
`,l}function lP(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=z.BOARD,s=z.CAVE_SHADING,l=z.CAVE_CELLS_FILLOMINO_REGIONS;let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_cells_fillomino_p(${o}, ${s}, ${l});
`,u}function cP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(w=>w.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.CAVE_SHADING,l=z.CAVE_REGIONS;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_p(${s}, ${l});
`,e.negative_constraints&&(!!e.negative_constraints[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]&&(u+=rP(f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),!!e.negative_constraints[f.CAVE_CELLS_ARE_ODD]&&(u+=tP(f.CAVE_CELLS_ARE_ODD)),!!e.negative_constraints[f.CAVE_WALLS_ARE_EVEN]&&(u+=nP(f.CAVE_WALLS_ARE_EVEN)),!!e.negative_constraints[f.CAVE_LITS]&&(u+=oP(t,f.CAVE_LITS)),!!e.negative_constraints[f.RENBAN_CAVES]&&(u+=sP(t,f.RENBAN_CAVES)),!!e.negative_constraints[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]&&(u+=iP(f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),!!e.negative_constraints[f.CAVE_WALL_SUGURU]&&(u+=aP(t,f.CAVE_WALL_SUGURU)),!!e.negative_constraints[f.CAVE_CELLS_FILLOMINO]&&(u+=lP(t,f.CAVE_CELLS_FILLOMINO))),u}function uP(t){let e="";return e+=`constraint connect_four_draw_p(${z.CONNECT_FOUR});
`,e=kt(e,`${t}`),e}function dP(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${z.BOARD}, ${z.CONNECT_FOUR});
`,e=kt(e,`${t}`),e}function _P(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${z.BOARD}, ${z.CONNECT_FOUR}, 3);
`,e=kt(e,`${t}`),e}function fP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s="connect_four";let l=`
% ${i}
`;if(l+=`% 1 - Red, 2 - Yellow
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,!e.negative_constraints)return l;const u=!!e.negative_constraints[f.CONNECT_FOUR_DRAW],d=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],g=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(l+=uP(f.CONNECT_FOUR_DRAW)),d&&(l+=_P(f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),g&&(l+=dP(f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),l}function gP(t){let e="";return e+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function hP(t){let e="";return e+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function vP(t){let e="";return e+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function pP(t){let e="";return e+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,e=kt(e,`${t}`),e}function mP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.GALAXY_REGIONS,l=z.GALAXY_SIZES,u=r.nCols*r.nRows;let d=`
% ${i}
`;if(d+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${s};
`,d+=`constraint galaxy_restrict_numbering_p(${s});
`,d+=`array[0..${u}] of var 0..${u}: ${l};
`,d+=`constraint galaxy_sizes_p(${s}, ${l});
`,d+=`constraint adjacent_galaxies_not_size_leq_3_p(${s}, ${l});
`,d+=`constraint gallaxy_connected_regions_p(${s});
`,!e.negative_constraints)return d;const g=!!e.negative_constraints[f.EVERY_CELL_BELONGS_TO_A_GALAXY],h=!!e.negative_constraints[f.TWO_SYMMETRIC_GALAXIES],v=!!e.negative_constraints[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS];return g&&(d+=gP(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),v&&(d+=hP(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),h&&(d+=vP(f.TWO_SYMMETRIC_GALAXIES)),m&&(d+=pP(f.TWO_SYMMETRIC_GALAXIES)),d}function EP(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function CP(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function bP(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function IP(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function wP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(m=>m.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=e.negative_constraints,l=s?!!s[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${i}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${l});
`,!s)return u;const d=!!s[f.NOT_LOOP_SIZED_REGIONS],g=!!s[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],h=!!s[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],v=!!s[f.MODULAR_LOOP];return g&&(u+=CP(f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),h&&(u+=EP(f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),d&&(u+=bP(t,f.NOT_LOOP_SIZED_REGIONS)),v&&(u+=IP(t,f.MODULAR_LOOP)),u}function yP(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function OP(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function AP(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=kt(e,`${t}`),e}function xP(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function SP(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=kt(n,`${e}`),n}function Vt(t,e,n){return t*n+e+1}function LP(t){const e=t.grid;function n(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r+h,u.c,e.nCols);d.push([g,v]),d.push([v,g])}return d}function r(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r,u.c+h,e.nCols);d.push([g,v]),d.push([v,g])}return d}const i=[],s=t.elementsDict.get(f.MAZE_WALL);if(!s||!s.constraints)return i;for(const l of Object.values(s.constraints)){const u=l.coords;if(u.length===1){const d=u[0],h=ll(d).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Vt(h[0].r,h[0].c,e.nCols),m=Vt(h[3].r,h[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Vt(h[1].r,h[1].c,e.nCols),m=Vt(h[2].r,h[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let d=0;d<u.length-1;d++){const g=jN(Yv(u[d],u[d+1]),.5),v=cl(g).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function NP(t){const e=t.grid,n=[],i=t.elementsDict.get(f.ONE_WAY_DOOR);if(!i||!i.constraints)return n;for(const o of Object.values(i.constraints)){const l=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,d]=l,g=o.value,h=Vt(u.r,u.c,e.nCols),v=Vt(d.r,d.c,e.nCols);g==="<"?n.push([h,v]):g===">"&&n.push([v,h])}return n}function DP(t){const e=[];for(const n of t.getAllCells()){const r=Vt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const s=Vt(o.r,o.c,t.nCols);e.push([r,s])}}return e}function RP(t){const e=t.grid,n=[],r=[],o=t.elementsDict.get(f.TELEPORT),s=o?Object.values(o):[];let l=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const d=zl(s);let g=1;for(const h of d.values())if(!(h.length<=1)){for(const[v,m]of h.flatMap((E,I)=>h.slice(I+1).map(b=>[E,b]))){const E=Vt(v.cell.r,v.cell.c,e.nCols),I=Vt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[v.cell.r][v.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const v of h){const m=Vt(v.cell.r,v.cell.c,e.nCols);r.push(m)}g++}l=d.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:l}}function TP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(M=>M.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s="",l=DP(r);const u=LP(n),d=NP(n);u.push(...d);const g=n.elementsDict;l=l.filter(M=>!u.some($=>M[0]===$[0]&&M[1]===$[1]));const h=RP(n);if(h.tp_edges.length){l.push(...h.tp_edges);const M=Np(h.tp_arr),$=h.tp_count;s+=`
% teleports grid
`,s+=`array[ROW_IDXS, COL_IDXS] of 0..${$}: teleports = array2d(ROW_IDXS, COL_IDXS, ${M});
`}t.edge_list=l,console.log(l);const v=r.nRows*r.nCols,m=l.length,E="["+l.map(M=>M[0]).join(",")+"]",I="["+l.map(M=>M[1]).join(",")+"]";s+=`array[int] of int: dpath_from = ${E};
`,s+=`array[int] of int: dpath_to = ${I};
`,s+=`var 1..${v}: dpath_source;
`,s+=`var 1..${v}: dpath_target;
`,s+=`array[1..${v}] of var bool: dpath_ns;
`,s+=`array[1..${m}] of var bool: dpath_es;
`,s+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,s+=`
% Direct Path no crossings
`;for(let M=0;M<r.nRows-1;M++)for(let $=0;$<r.nCols-1;$++){const te=r.getCell(M,$),ae=r.getCell(M,$+1),ie=r.getCell(M+1,$),ce=r.getCell(M+1,$+1);if(!te||!ae||!ie||!ce)continue;const we=Vt(te.r,te.c,r.nCols),Z=Vt(ae.r,ae.c,r.nCols),Ie=Vt(ie.r,ie.c,r.nCols),me=Vt(ce.r,ce.c,r.nCols),Se=[[we,me],[me,we],[Z,Ie],[Ie,Z]].map(Ae=>l.findIndex(Re=>Ae[0]===Re[0]&&Ae[1]===Re[1])).filter(Ae=>Ae!==-1);if(Se.length){const Ae=Se.map(Re=>`dpath_es[${Re+1}]`).join(",");s+=`constraint sum([${Ae}]) <= 1;
`}}const b=g.get(f.TELEPORT),w=b?Object.values(b):[];if(h.tp_count>0){s+=`
% At most 1 edge per teleporter
`;for(const M of w){const $=M.cell,te=r.getCell($.r,$.c);if(!te)continue;const ae=r.getNeighboorCells(te),ie=Vt(te.r,te.c,r.nCols),ce=[];for(const Z of ae){if(w.some(Oe=>Oe.cell.r===Z.r&&Oe.cell.c==Z.c&&Oe.value===M.value))continue;const me=Vt(Z.r,Z.c,r.nCols);ce.push([ie,me]),ce.push([me,ie])}const we=ce.map(Z=>l.findIndex(Ie=>Z[0]===Ie[0]&&Z[1]===Ie[1])).filter(Z=>Z!==-1);if(we.length){const Z=we.map(Ie=>`dpath_es[${Ie+1}]`).join(",");s+=`constraint sum([${Z}]) <= 1;
`}}}if(!e.negative_constraints)return s;const A=!!e.negative_constraints[f.DIRECTED_PATH_IS_PARITY_LINE],T=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],k=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],U=!!e.negative_constraints[f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],j=!!e.negative_constraints[f.DIRECTED_PATH_IS_REGION_SUM_LINE];return k&&(s+=yP(f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),A&&(s+=xP(f.DIRECTED_PATH_IS_PARITY_LINE)),T&&(s+=OP(f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),U&&(s+=SP(n,f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),j&&(s+=AP(f.DIRECTED_PATH_IS_REGION_SUM_LINE)),s}function kP(t,e){const n=t.grid;let r=`
% ${e}
`;const i=z.YIN_YANG;for(const[o,s]of ei(n)){const l=xe(o),u=xe(s),d=`${i}[${o.r},${o.c}]`,g=`${i}[${s.r},${s.c}]`,h=`constraint (${d} == 1 /\\ ${g} == 1) -> abs(${l} - ${u}) >= 5;
`;r+=h}return r}function MP(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(d=>i.region!==null&&d.region===i.region),s=Je(i,z.BOARD),l=Je(i,z.YIN_YANG),u=Ce(o,z.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${l}, ${u});
`}return n=kt(n,`${e}`),n}function UP(t){let e=`
% ${t}
`;return e+=`constraint yin_yang_identical_digits_diagonally_belong_to_same_region_p(${z.BOARD}, ${z.YIN_YANG});
`,e}function GP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,s+=`constraint yin_yang_p(yin_yang);
`,e.negative_constraints&&(!!e.negative_constraints[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]&&(s+=MP(n,f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),!!e.negative_constraints[f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]&&(s+=kP(n,f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),!!e.negative_constraints[f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION]&&(s+=UP(f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION))),s}function $P(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,s+=fo(n,1,!0,z.DOUBLERS),s+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,s}function FP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s="negators_grid";let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,l+=fo(n,1,!0,z.NEGATORS),l+=`
constraint one_of_each_digit_p(board, ${s}, ALLOWED_DIGITS);
`,l+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${s});
`,l}function PP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.INDEXER_CELLS_GRID;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,l+=fo(n,2,!0,s),l+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,l+=`constraint indexer_cells_p(board, ${s}, values_grid);
`,l}function zP(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of ei(n)){const s=xe(i),l=xe(o),u=Je(i,z.NURIMISAKI),d=Je(o,z.NURIMISAKI),g=`constraint (${u} == 0 /\\ ${d} == 0) -> abs(${s} - ${l}) >= 5;
`;r+=g}return r}function HP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,s+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(s+=zP(n,f.NURIMISAKI_PATH_GERMAN_WHISPERS)),s}function WP(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function BP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,s+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(s+=WP(t,f.NURIKABE_NO_REPEATS_IN_ISLANDS)),s}function YP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,s+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,s}function jP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=Math.max(r.nCols,r.nRows),u="["+At.range(1,s+1).join(",")+"]";let d="";return d+=`array[ROW_IDXS, COL_IDXS] of var 1..${s}: unknown_regions;
`,d+=`constraint chaos_construction_p(unknown_regions, ${u}, ${s});
`,d+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,d}function KP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=z.UNKNOWN_REGIONS,l=Math.max(r.nCols,r.nRows),d="["+At.range(1,l+1).join(",")+"]";let g=`
% ${i}
`;return g+=`array[ROW_IDXS, COL_IDXS] of var 1..${l}: ${s};
`,g+=`constraint numbered_chaos_construction_p(${z.BOARD}, ${s}, ${d}, ${l});
`,g+=`constraint no_repeats_in_unknown_regions_p(${z.BOARD}, ${s}, ALLOWED_DIGITS, ${d});
`,g}function VP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,s+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,s+=`constraint sashigane_adjacency_p(sashigane);
`,s+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,s+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,s+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,s}function XP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.FILLOMINO_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint fillomino_p(board, ${s});
`,l}function qP(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${z.BOARD}, ${z.SHIKAKU_REGIONS});
`,o}function ZP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.SHIKAKU_REGIONS;let l=`
% ${i}
`;const u=r.nRows,d=r.nCols;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${z.SHIKAKU_HEIGHT};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${d}: ${z.SHIKAKU_WIDTH};
`,l+=`constraint shikaku_p(${s}, ${z.SHIKAKU_WIDTH}, ${z.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_NO_REPEATS_IN_REGION]&&(l+=qP(t,f.SHIKAKU_NO_REPEATS_IN_REGION)),l}function QP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,s+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,s}function JP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint goldilocks_zone_p(goldilocks_regions);
`,s+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,s}function e8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=12,l=z.PENTOMINO_REGIONS;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${l};
`,u+=`constraint pentomino_tilling_p(${l});
`,u}function t8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.LITS_SHADING,l=z.LITS_REGIONS,u=z.LITS_GRID,d=z.BOARD_REGIONS,g=[...r.getUsedRegions()];g.sort();const h=Math.min(...g),v=Math.max(...g);let m=`
% ${i}
`;m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${l};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..${g.length}: ${u};
`,m+=`constraint lits_shading_p(${s});
`,m+=`constraint lits_shading_ids_p(${s}, ${l});
`,m+=`constraint lits_region_and_ids_p(${d}, ${l});
`,m+=`constraint lits_tetromino_shapes_p(${l});
`,m+=`constraint lits_grid_p(${u}, ${d}, ${s}, ${h}..${v});
`,g.length&&(m+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const E of g){const I=r.getRegion(E),w=`constraint count_eq(${Ce(I,z.LITS_SHADING)}, 1, 4);
`;m+=w}return m}function n8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.NORINORI_SHADING;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,l+=`constraint norinori_p(${z.BOARD_REGIONS}, ${s});
`,r.getUsedRegions().size&&(l+=`
% Exactly 2 shaded cells per region (known regions)
`),l+=u_(n,2,1,z.NORINORI_SHADING),l}function r8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.NORINORI_SHADING,l=z.STAR_BATTLE;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,u+=Rp(2,1,l),u+=Dp(2,1,l),u+=u_(n,1,1,l),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${l});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${s}, ${l});
`,u}function i8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.LITS_SHADING,l=z.STAR_BATTLE,u=z.LITS_WHITE_BLACK_STAR_BATTLE;let d=`
% ${i}
`;return d+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,d+=fo(n,2,1,z.STAR_BATTLE),d+=`
% Star battle stars can't touch orthogonally or diagonally
`,d+=`constraint star_battle_no_touching_p(${l});
`,d+=`
`,d+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,d+=`
% 1 white star per row, column, region
`,d+=fo(n,1,1,z.LITS_WHITE_BLACK_STAR_BATTLE),d+=`
% 1 black star per row, column, region
`,d+=fo(n,1,2,z.LITS_WHITE_BLACK_STAR_BATTLE),d+=`constraint black_and_white_star_battle_p(${l}, ${u});
`,d+=`constraint lits_black_and_white_star_battle_p(${s}, ${u});
`,d}function o8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.SUGURU_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint chaos_construction_suguru_p(board, ${s});
`,l}function s8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=z.BYOKC_GRID;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint byok_no_repeats_in_regions(${z.BOARD}, ${s});
`,l}function a8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(I=>I.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=z.SHADED_BOUNDARIES_REGIONS,l=z.SHADED_BOUNDARIES_VERTICAL,u=z.SHADED_BOUNDARIES_HORIZONTAL,d=r.nRows,g=r.nCols,h=`0..${d-2}`,v=`0..${g-2}`;let m="";return m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,m+=`array[${h}, COL_IDXS] of var bool: ${l};
`,m+=`array[ROW_IDXS, ${v}] of var bool: ${u};
`,m+=`constraint shaded_boundaries_two_regions2_p(${s}, ${u}, ${l});
`,e.negative_constraints&&!!e.negative_constraints[f.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN]&&(m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_vertical_p(${z.BOARD}, ${l});
`,m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_horizontal_p(${z.BOARD}, ${u});
`,m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_region_p(${z.BOARD}, ${s});
`),m}const l8=new Map([[f.DOUBLERS,$P],[f.NEGATORS,FP],[f.INDEXER_CELLS,PP],[f.CAVE,cP],[f.CONNECT_FOUR,fP],[f.GALAXIES,mP],[f.CELL_CENTER_LOOP_NO_TOUCHING,wP],[f.MAZE_DIRECTED_PATH,TP],[f.YIN_YANG,GP],[f.NURIMISAKI,HP],[f.NURIKABE,BP],[f.SHIKAKU,ZP],[f.PENTOMINO_TILLING,e8],[f.CHAOS_CONSTRUCTION,jP],[f.NUMBERED_CHAOS_CONSTRUCTION,KP],[f.CHAOS_CONSTRUCTION_SUGURU,o8],[f.TWO_CONTIGUOUS_REGIONS,YP],[f.NORINORI,n8],[f.NORINORI_STAR_BATTLE,r8],[f.SASHIGANE,VP],[f.LITS,t8],[f.LITS_BLACK_WHITE_STAR_BATTLE,i8],[f.FILLOMINO,XP],[f.NEXUS,QP],[f.GOLDILOCKS_ZONE,JP],[f.BUILD_YOUR_OWN_KILLER_CAGES,s8],[f.SHADED_BOUNDARIES,a8]]);function c8(t,e){let n="";const r=e.tool_id,i=l8.get(r);if(i){const o=i(t,e);n+=o}return n}function u8(t,e,n,r){const i=r.value;return i?`constraint forbidden_adjacent_sum_p(board, ${parseInt(i)});
`:""}function d8(t,e){return We(t,e,u8)}function _8(t,e,n,r){const i=r.value;return i?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(i)});
`:""}function f8(t,e){return We(t,e,_8)}function g8(t,e,n,r){const i=r.value;return i?`constraint forbidden_knight_sum_p(board, ${parseInt(i)});
`:""}function h8(t,e){return We(t,e,g8)}function v8(t,e,n,r){const i=r.value;if(!i)return"";const o=parseInt(i),s=[...e.getUsedRegions()];s.sort();const l=s.length;return`constraint lits_max_tetromino_sum_p(${z.BOARD}, ${z.LITS_GRID}, ${o}, 0..${l});
`}function p8(t,e){return We(t,e,v8)}const m8=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,d8],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,f8],[f.FORBIDDEN_KNIGHT_SUM,h8],[f.LITS_MAX_TETROMINO_SUM,p8]]);function E8(t,e){return Xn(t,e,m8)}const C8=[c8,k3,AF,MG,eP,E5,X3,WU,n3,A3,xG,$3,E8,VU,VM];function b8(t,e){let n="";const r=t.elementsDict;for(const[i,o]of r.entries())for(const s of C8){let l=s(e,o);l=kt(l,`${i}`),n+=l}return n}function I8(){return`
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

predicate internal_loop_skyscrapers_p(
    array[int] of var int: cell_vars,
    array[int] of var int: loop_vars,
    var int: value
) = (
    value == conditional_skyscrapers_f(cell_vars, loop_vars, 1)
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
    array[int, int] of var 0..1: shaded_boundaries_grid
) = (
    exists(val in array1d(shaded_boundaries_grid))(val == 0)
    /\\ exists(val in array1d(shaded_boundaries_grid))(val == 1)
    /\\ connected_region(shaded_boundaries_grid, 0)
    /\\ connected_region(shaded_boundaries_grid, 1)
);

predicate shaded_boundaries_two_regions2_p(
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

    array[1..num_edges] of var bool: flat_edges = array1d(shaded_boundaries_horizontal) ++ array1d(shaded_boundaries_vertical);

    % edges
    array[1..num_edges] of var bool: es0 = [not flat_edges[edge_id] /\\ ns0[from[edge_id]] /\\ ns0[to[edge_id]] | edge_id in 1..num_edges];
    array[1..num_edges] of var bool: es1 = [not flat_edges[edge_id] /\\ ns1[from[edge_id]] /\\ ns1[to[edge_id]] | edge_id in 1..num_edges];
} in (
    exists(val in array1d(shaded_boundaries_grid))(val == 0)
    /\\ exists(val in array1d(shaded_boundaries_grid))(val == 1)
    % /\\ connected(from, to, ns0, es0)
    % /\\ connected(from, to, ns1, es1)
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

`}function w8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${xe(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Xp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new bM(t),[o,s]=[n.nRows,n.nCols],l=o*s;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(I8());let d=`1..${Math.max(o,s)}`;const g=t.elementsDict,h=!!g.get(f.FILLOMINO),v=!!g.get(f.HEXED_SUDOKU);return h?d=`1..${l}`:v?r=[...At.range(1,16)]:r&&(d="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${s-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${d};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),wM(i,n),i.add(w8(t)),i.add(YM(t)),i.add(jM(t)),i.add(b8(t,i)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Yh=encodeURIComponent("4.4.2");let Lr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ti=[];let Mu;function bs(){if(!Mu){const e=`importScripts(${JSON.stringify(Lr.workerURL)});`;Mu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Mu);t.postMessage({wasmURL:Lr.wasmURL?Lr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Yh}`,Lr.workerURL).toString(),dataURL:Lr.dataURL?Lr.dataURL.toString():new URL(`./minizinc.data?version=${Yh}`,Lr.workerURL).toString()}),Ti.push({worker:t,runCount:0})}function qp(){for(;Ti.length<Lr.numWorkers;)bs()}async function y8(t){if(Lr={...Lr,...t},Ti.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");qp(),await Promise.race(Ti.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class b_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new b_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){qp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:l}=Ti.pop();return s.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:l+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:s}=this._run(["--model-check-only"],i.options),l=[];o.onmessage=u=>{switch(u.data.type){case"error":l.push(u.data);break;case"exit":s<10?Ti.push({worker:o,runCount:s}):(o.terminate(),bs()),n(l)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:s}=this._run(["--model-interface-only"],i.options),l=[];let u=null;o.onmessage=d=>{switch(d.data.type){case"error":l.push(d.data);break;case"interface":u=d.data;break;case"exit":s<10?Ti.push({worker:o,runCount:s}):(o.terminate(),bs()),d.data.code===0?n(u):r(l)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:s}=this._run(o,n.options,[i]);bs();let l={},u=!1,d=null;return s.onmessage=g=>{if(l[g.data.type])for(const h of l[g.data.type])h(g.data);switch(g.data.type){case"exit":s.terminate(),u=!0,l={};break;case"error":d||(d=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),l.exit)for(const g of l.exit)g({type:"exit",code:null});l={}}},on(g,h){l[g]?l[g].add(h):l[g]=new Set([h])},off(g,h){l[g]&&l[g].delete(h)},then(g,h){const v=m=>{if(m.code===0)g(m.outputFiles[i]);else{const E=d?{message:d.message,...m}:m;if(!h)throw E;h(E)}};l.exit?l.exit.add(v):l.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);bs();let o=null,s={},l=!1,u=null,d={},g="UNKNOWN";return i.onmessage=h=>{if(s[h.data.type])for(const v of s[h.data.type])v(h.data);switch(h.data.type){case"exit":i.terminate(),l=!0,s={};break;case"error":o||(o=h.data);break;case"statistics":d={...d,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!l,cancel(){if(!l){if(l=!0,i.terminate(),s.exit)for(const h of s.exit)h({type:"exit",code:null});s={}}},on(h,v){s[h]?s[h].add(v):s[h]=new Set([v])},off(h,v){s[h]&&s[h].delete(v)},then(h,v){const m=E=>{if(E.code===0)h({status:g,solution:u,statistics:d});else{const I=o?{message:o.message,...E}:E;if(!v)throw I;v(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var O8=ue('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function A8(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Jr,"$puzzleMetaStore",n);let i=G(e,"showModal",12,!1);function o(h,v,m){var E=document.createElement("a"),I=new Blob([h],{type:m});E.href=URL.createObjectURL(I),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function s(){const h=De(Bs);return Xp(h).model_str}function l(){const h=s();navigator.clipboard.writeText(h)}function u(){const h=s(),v=Hh(h);navigator.clipboard.writeText(v)}function d(){const h=_l(r()),v=s();o(v,`${h}.mzn`,"text/plain")}function g(){const h=_l(r()),v=s(),m=Hh(v);o(m,`${h}.mzn`,"text/plain")}fe(),pi(t,{title:"Minizinc File",get showModal(){return i()},set showModal(h){i(h)},children:(h,v)=>{var m=O8(),E=Y(m),I=F(E,2),b=F(I,2),w=F(b,2),A=F(w,2),T=F(Y(A));x(T,"href","https://play.minizinc.dev/"),_i(),H(A),H(m),Ne("click",E,l),Ne("click",I,u),Ne("click",b,d),Ne("click",w,g),L(h,m)},$$slots:{default:!0},$$legacy:!0}),se()}function Vo(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const l=t[s];for(let u=0;u<l.length;u++){const d=e.getCell(s,u);if(!d)continue;const g=Number(l[u]),h=n.get(g);h!==void 0&&(r.push(d),i.push([h]))}}const o=$l(r,i);mo(o)}function x8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),s(v,m,t[v][m])}function s(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),s(v+1,m,E),s(v-1,m,E),s(v,m+1,E),s(v,m-1,E))}const l=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,I]of v)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+b,T=I+w;if(m.some(([k,U])=>k===A&&U===T))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(l[v].add(m),l[m].add(v));const d=[1,4,7,9],g=new Array(i.length).fill(0);function h(v,m){for(const E of l[v])if(g[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of d)if(h(v,m)){g[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=g[v];return o}function S8(t,e){const n=e.grid,i=!!e.elementsDict.get(f.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const s=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=n.getCell(d,h);if(!v||v.given||i&&!v.given&&v.value===null)continue;const m=g[h];s.push(v),l.push(m)}}const u=Op(s,l);mo(u)}function L8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading",z.SHADED_BOUNDARIES_REGIONS],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Vo(o,e,r);return}}}function N8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Vo(o,e,r);return}}}function D8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const l=n[s];for(let u=0;u<l.length;u++){const d=e.getCell(s,u);if(!d)continue;r.push(d);const g=l[u];i.push([g])}}const o=$l(r,i);mo(o)}function R8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Vo(n,e,new Map([[0,4],[1,7],[2,9]]))}function T8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Vo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function k8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Vo(n,e,new Map([[1,7],[2,4],[3,9]]))}function M8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Vo(n,e,new Map([[1,7],[2,8]]))}function U8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,s]=[e.nRows,e.nCols],l=3,u=[];for(let g=0;g<i.length;g++){const h=i[g];for(let v=0;v<h.length-1;v++){const m=e.getCell(g,v),E=e.getCell(g,v+1);if(!m||!E)continue;const I=h[v],b=h[v+1];if(I===b)continue;const w={colorId:l,p1:{r:g,c:v+1},p2:{r:g+1,c:v+1}};u.push(w)}}for(let g=0;g<s;g++)for(let h=0;h<o-1;h++){const v=e.getCell(h,g),m=e.getCell(h+1,g);if(!v||!m)continue;const E=i[h][g],I=i[h+1][g];if(E===I)continue;const b={colorId:l,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(b)}const d=vo(u);br(d);return}}function G8(t){if(t===void 0)return;const e=4,n=[],r=z.SHADED_BOUNDARIES_HORIZONTAL,i=t[r];if(i)for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){if(!u[d])continue;const h={colorId:e,p1:{r:l,c:d+1},p2:{r:l+1,c:d+1}};n.push(h)}}const o=z.SHADED_BOUNDARIES_VERTICAL,s=t[o];if(s)for(let l=0;l<s.length;l++){const u=s[l];for(let d=0;d<u.length;d++){if(!u[d])continue;const h={colorId:e,p1:{r:l+1,c:d},p2:{r:l+1,c:d+1}};n.push(h)}}if(n.length){const l=vo(n);br(l)}}function $8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const v=i[g.r][g.c],m=i[h.r][h.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};o.push(E)}}}const s=vo(o);br(s);return}}function F8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions",z.BYOKC_GRID];for(const r of n){const i=t[r];if(i===void 0)continue;const o=x8(i);if(!o)return;const s=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=e.getCell(d,h);if(!v)continue;s.push(v);const m=g[h];l.push([m])}}const u=$l(s,l);mo(u);return}}function P8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(!g)continue;const h=i[g.r][g.c];if(h===0)continue;const m={colorId:h===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};o.push(m)}}const s=PR(o);br(s);return}}function z8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let l=0;l<n.length;l++){if(!n[l])continue;const d=r[l],[g,h]=d,[v,m]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols],[E,I]=[Math.floor((h-1)/i.nCols),(h-1)%i.nCols];if(!zs({r:v,c:m},{r:E,c:I}))continue;const A={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(A)}const s=vo(o);br(s)}function H8(t,e){const n=e.puzzle,r=n.grid;br(e_()),S8(t,n),D8(t,r),U8(t,r),R8(t,r),T8(t,r),$8(t,r),N8(t,r),F8(t,r),L8(t,r),P8(t,r),k8(t,r),z8(t,e),M8(t,r),G8(t)}function W8(){const{subscribe:t,set:e}=Rt(0),n=100;let r=Date.now(),i,o=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{s&&(s=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:o})}}var B8=ue('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function Y8(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Bs,"$puzzleStore",n),i=()=>ge(hn,"$gridStore",n),o=()=>ge(w,"$timer",n),s=S(),l=S(),u=S(),d=S();let g=S(!0),h=S(!1),v=S(null),m=S(100),E=S("100"),I=S(null),b=S("IDLE");const w=W8();function A($){return $===null?"":String($)}function T($){const te=Math.floor($/6e4),ae=Math.floor($%6e4/1e3),ie=Math.floor($%1e3/100),ce=ae.toString().padStart(2,"0");return`${te}:${ce}.${ie}`}function k(){O(h,!0)}function U($){const te=parseInt($);typeof te=="number"&&te>=1&&O(m,te)}async function j(){O(I,0),O(b,"SOLVING...");const $=new b_;Ep();const te=Xp(_(s));$.addFile("test.mzn",te.model_str),w.reset(),w.start(),O(v,$.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(v).on("solution",ae=>{const ie=ae.output.json;ae.type==="solution"&&_(I)!==null&&O(I,_(I)+1),H8(ie,te)}),_(v).on("error",ae=>{O(u,"Solve"),O(b,"ERROR"),console.log(ae.message),w.stop(),_(v)&&_(v).cancel()}),_(v).on("warning",ae=>{O(b,"WARNING"),console.log(ae.message)}),_(v).then(ae=>{O(b,ae.status),O(u,"Solve"),w.stop()})}function M(){_(v)===null||!_(v).isRunning()?j():_(v)!==null&&_(v).isRunning()&&(O(b,"IDLE"),O(u,"Solve"),w.stop(),_(v).cancel())}D(()=>r(),()=>{O(s,r())}),D(()=>i(),()=>{O(l,i())}),D(()=>{},()=>{O(u,"Solve")}),D(()=>o(),()=>{O(d,o())}),D(()=>_(v),()=>{_(v)&&(_(v)!==null&&_(v).isRunning()?O(u,"Stop"):O(u,"Solve"))}),be(),fe(),Ul(t,{get isOpen(){return _(g)},set isOpen($){O(g,$)},$$slots:{"panel-header":($,te)=>{Ml($,{slot:"panel-header",title:"Solver",get isOpen(){return _(g)},set isOpen(ae){O(g,ae)},$$legacy:!0})},"panel-content":($,te)=>{var ae=B8(),ie=ee(ae),ce=F(ie,2);A8(ce,{get showModal(){return _(h)},set showModal(dt){O(h,dt)},$$legacy:!0});var we=F(ce,2),Z=Y(we,!0);H(we);var Ie=F(we,2),me=Y(Ie,!0);H(Ie);var Oe=F(Ie,2),Se=Y(Oe);cn(Se),x(Se,"min",1),x(Se,"max",200),x(Se,"step",1),H(Oe);var Ae=F(Oe,2),Re=Y(Ae,!0);J(()=>it(Re,`Solution Count: ${A(_(I))}`)),H(Ae);var $e=F(Ae,2),st=Y($e,!0);J(()=>it(st,`Elapsed Time: ${T(_(d))}`)),H($e);var ut=F($e,2),Ct=Y(ut,!0);H(ut),J(()=>{it(Z,_(u)),it(me,`Max. Solutions: ${_(m)}`),it(Ct,`Status: ${_(b)}`)}),Ne("click",ie,k),Ne("click",we,M),ar(Se,()=>_(E),dt=>O(E,dt)),Ne("input",Se,()=>U(_(E))),L($,ae)}},$$legacy:!0}),se()}var j8=ue('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function K8(t){var e=j8(),n=Y(e);_M(n);var r=F(n,2),i=Y(r);Y8(i,{});var o=F(i,2);TT(o,{elementHandlers:Ht});var s=F(o,2);rk(s,{elementHandlers:Ht});var l=F(s,2);gM(l,{}),H(r),H(e),L(t,e)}var V8=ne('<path class="cursor svelte-zsq70u"></path>');function X8(t,e){oe(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n),i=()=>ge(Mi,"$selectionStore",n),o=S(),s=S(),l=.25;function u(g){if(!g)return"";const[h,v]=[g.c,g.r];return`M${h},${v}L${h+l},${v}L${h},${v+l}Z`}D(()=>r(),()=>{O(o,Fd(r()))}),D(()=>i(),()=>{O(s,u(i().lastCell))}),be(),fe();var d=V8();J(()=>{x(d,"d",_(s)),x(d,"visibility",_(o)?"visible":"hidden")}),L(t,d),se()}var q8=ne('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function Z8(t,e){oe(e,!1);let n=G(e,"gridShape",8);fe();var r=q8(),i=Y(r);x(i,"x",0),x(i,"y",0),H(r),J(()=>{x(i,"width",n().nCols),x(i,"height",n().nRows)}),L(t,r),se()}var Q8=ne('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),J8=ne('<g class="grid-lines"></g>');function ez(t,e){oe(e,!1);const n=Ye(),r=()=>ge(hn,"$gridStore",n),i=S();D(()=>r(),()=>{O(i,r().getAllCells())}),be(),fe();var o=J8();qe(o,5,()=>_(i),pt,(s,l)=>{var u=Q8();x(u,"width",1),x(u,"height",1),J(()=>{x(u,"x",_(l).c),x(u,"y",_(l).r)}),L(s,u)}),H(o),L(t,o),se()}function tz(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function nz(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=tz(r),o=i.length;for(let s=0;s<o;s++){const l=i[s%o],u=i[(s+1)%o],d=JSON.stringify(l),g=JSON.stringify(u);n(d,g)}}return e}function rz(t,e=0,n=!1){const r=[],i=nz(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(E=>E[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[l,u]=s;let d=JSON.parse(l);const g=Array.from(u)[0];let h=JSON.parse(g),v=g;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Ue(d.c,d.r),b=new Ue(h.c,h.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,T=null;for(const ce of E){const we=JSON.parse(ce),Z=new Ue(we.c,we.r),Ie=b.subtract(I),me=Z.subtract(b),Oe=Ie.perpDotProduct(me);w<Oe!=n&&(w=Oe,T=we,A=ce)}if(n&&E.size>1&&o.add(v),T===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(v);const k=e*(h.c-d.c),U=e*(T.c-h.c),j=e*(d.r-h.r),M=e*(h.r-T.r),$=M+w*U,te=k+w*j,ae=new Ue(h.c+$,h.r+te),ie=4;o.has(v)?(m.push(new Ue(ae.x-ie*k,ae.y-ie*U)),m.push(new Ue(ae.x-ie*j,ae.y-ie*M))):m.push(ae),d=h,h=T,v=A}while(v!==g);r.push(m)}return r}function Co(t,e=0,n=!1){return rz(t,e,n).map(o=>Xo(o,!0)).join("")}const iz=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5)];function oz(t,e,n=iz){if(e===1)return n;const r=[],i=n.length,o=0,s=360/e,l=t*s+o,u=(t+1)*s+o,d=l/(360/i),g=u/(360/i),h=Math.floor(d)%i,v=Math.ceil(d)%i,m=n[h].lerp(n[v],d%1),E=Math.floor(g)%i,I=Math.ceil(g)%i,b=n[E].lerp(n[I],g%1);r.push(m);for(let A=Math.ceil(d);A<=Math.floor(g);A++)r.push(n[A%i]);r.push(b);const w=new Ue(0,0);return r.push(w),r}function Zp(t,e,n=new Ue(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),s=r?t:t/o,l=[];for(let u=0;u<e;u++){const d=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),h=n.add(new Ue(d,g));l.push(h)}return l}function Xo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function fi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(g=>new Ue(g.x,g.y));if(r&&o.length>1){const g=o[o.length-1];for(let v=0;v<o.length-1;v++)if(g.equals(o[v])){o.push(o[v+1]);break}const h=o[0];for(let v=1;v<o.length;v++)if(h.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let g=o[1].subtract(o[0]);g=g.normalise(),g=g.scale(e),o[0]=o[0].add(g)}if(n){const g=o.length;let h=o[g-2].subtract(o[g-1]);h=h.normalise(),h=h.scale(n),o[g-1]=o[g-1].add(h)}}if(!i)return Xo(o);const s=o[0],l=["M",`${s.x},${s.y}`],u=o.length;for(let g=2;g<u;g++){const h=o[g-2],v=o[g-1],m=o[g];let E=h.subtract(v).normalise();E=E.scale(i),E=E.add(v);let I=m.subtract(v).normalise();I=I.scale(i),I=I.add(v),l.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${I.x},${I.y}`)}const d=o[u-1];return l.push(`L${d.x},${d.y}`),l.join(" ")}function vl(t,e={}){const n=Xl(t);return fi(n,e)}function Wn(t){return new Ue(t.c+.5,t.r+.5)}function Xl(t){return t.map(n=>Wn(n))}function sz(t){const e=Math.min(...t.map(s=>s.r)),n=Math.max(...t.map(s=>s.r)),r=Math.min(...t.map(s=>s.c)),i=Math.max(...t.map(s=>s.c));return{x:r,y:e,width:i+1,height:n+1}}const az=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5),new Ue(0,-.5),new Ue(0,.5),new Ue(-.5,0),new Ue(.5,0)];function lz(t,e){const n=az[t];return n.subtract(n.scale(e))}function Qp(t,e){const n=[new Ue(t.c-e,t.r-e),new Ue(t.c+e,t.r+e)],r=[new Ue(t.c-e,t.r+e),new Ue(t.c+e,t.r-e)];return[n,r].map(o=>Xo(o,!1)).join("")}const cz=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function ql(t,e="none"){return cz.get(t)||e}function uz(t,e,n){let r=[];function o(l,u){return l.map(d=>d.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Ue(-.12,-.32),new Ue(0,-.4),new Ue(.12,-.32)]:s=[new Ue(-.12,-.4),new Ue(0,-.32),new Ue(.12,-.4)],r=[s,o(s,90),o(s,180),o(s,270)],r=r.map(l=>l.map(u=>{const d=new Ue(n+.5,e+.5);return u.add(d)})),r}function I_(t,e){const n=[new Ue(-t,0),new Ue(0,0),new Ue(0,t)],i={[Fe.NE]:0,[Fe.E]:Math.PI/4,[Fe.SE]:Math.PI/2,[Fe.S]:3*Math.PI/4,[Fe.SW]:Math.PI,[Fe.W]:5*Math.PI/4,[Fe.NW]:3*Math.PI/2,[Fe.N]:7*Math.PI/4}[e];return n.map(s=>s.rotate(i))}function dz(t,e){const r=Hs(e),i=new Ue(r.c,r.r).normalise().scale(.3),o=Wn(t),s=o.subtract(i),l=o.add(i);return[s,l]}function _z(t,e){const r=dz(t,e);let i=I_(.2,e);i=i.map(u=>u.add(r[1]));const o=fi(r),s=fi(i);return o+s}function fz(t,e){const r=Hs(e),i=new Ue(r.c,r.r),s=Wn(t).add(i.scale(.4));return[s.subtract(i.normalise().scale(.2)),s]}function Uu(t,e){const r=fz(t,e);let i=I_(.1,e);i=i.map(u=>u.add(r[1]));const o=fi(r),s=fi(i);return o+s}var gz=ne('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),hz=ne('<g class="regions-border"></g>');function vz(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Pn,"$cellsStore",n),i=S(),o=S();function s(u,d){return u.filter(v=>v.region===d).map(v=>({r:v.r,c:v.c}))}D(()=>r(),()=>{O(i,r())}),D(()=>_(i),()=>{O(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),be(),fe();var l=hz();qe(l,5,()=>_(o),pt,(u,d)=>{var g=gz();J(()=>x(g,"d",Co(s(_(i),_(d)),0,!1))),J(()=>x(g,"id",`region-${_(d)??""}`)),L(u,g)}),H(l),L(t,l),se()}var pz=ne('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse"><rect></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-5l2s5m" mask="url(#selection-mask)"></path></g>');function mz(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Mi,"$selectionStore",n),i=()=>ge(en,"$toolStore",n),o=()=>ge(Ln,"$settingsStore",n),s=S(),l=S(),u=S(),d=S(),g=S();let h=G(e,"gridShape",8);const v=.06,m=.05,E="#080808",I="#b2b2b2";D(()=>r(),()=>{O(s,r().cells)}),D(()=>_(s),()=>{O(l,Co(_(s),0))}),D(()=>_(s),()=>{O(u,Co(_(s),v))}),D(()=>i(),()=>{O(d,Fd(i()))}),D(()=>o(),()=>{O(g,o().selection_color)}),be(),fe();var b=pz(),w=Y(b),A=Y(w);x(A,"stdDeviation",m),_i(),H(w);var T=F(w);x(T,"x",0),x(T,"y",0);var k=Y(T);x(k,"x",0),x(k,"y",0),x(k,"fill",I);var U=F(k);x(U,"fill",E),H(T);var j=F(T);H(b),J(()=>{x(b,"visibility",_(d)?"visible":"hidden"),x(T,"width",h().nCols),x(T,"height",h().nRows),x(k,"width",h().nCols),x(k,"height",h().nRows),x(U,"d",_(u)),x(j,"d",_(l)),x(j,"fill",_(g))}),L(t,b),se()}var Ez=ne('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function Cz(t,e){oe(e,!1);const n=S(),r=S();let i=G(e,"grid",8);D(()=>X(i()),()=>{O(n,i().getAllCells().map(l=>({r:l.r,c:l.c})))}),D(()=>_(n),()=>{O(r,Co(_(n),0))}),be(),fe();var o=Ez(),s=Y(o);H(o),J(()=>x(s,"d",_(r))),L(t,o),se()}function bz(t,e){const n=t.getRow(e.r);return new Set(n)}function Iz(t,e){const n=t.getCol(e.c);return new Set(n)}function wz(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function yz(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function Oz(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function Az(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function xz(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function Sz(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function Lz(t,e,n){let r=new Set;const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),s=o.length,l=[o[0],o[s-1]],u=o.slice(1,s-1),d=l.findIndex(h=>h===e);if(d!==-1){if(r=new Set([...r,...u]),u.length>0){const h=l.filter((v,m)=>m!==d);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...l])),r}function Nz(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function Dz(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function Rz(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(!!e.get(f.ANTIKNIGHT)&&(r=r.union(yz(t,i))),!!e.get(f.ANTIKING)&&(r=r.union(Oz(t,i))),!!e.get(f.DISJOINT_GROUPS)&&(r=r.union(Az(t,i))),!!e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(Sz(t,i))),!!e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(xz(t,i)))),r}function Gu(t,e,n,r,i){if(e.tool_id!==r||!e.constraints)return i;for(const o of Object.values(e.constraints)){const s=Dz(t,n,o);i=new Set([...i,...s])}return i}function Tz(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;for(const o of e.values()){const s=o.tool_id;if(o.constraints){if(s===f.BETWEEN_LINE)for(const l of Object.values(o.constraints)){const u=Lz(t,i,l);r=new Set([...r,...u])}else if(s===f.RENBAN_LINE)for(const l of Object.values(o.constraints)){const u=Nz(t,i,l);r=new Set([...r,...u])}r=Gu(t,o,i,f.KILLER_CAGE,r),r=Gu(t,o,i,f.PARITY_BALANCE_CAGE,r),r=Gu(t,o,i,f.SPOTLIGHT_CAGE,r)}}return r}function Jp(t,e){let n=new Set;const r=t.grid,i=t.elementsDict;!i.get(f.SUDOKU_RULES_DO_NOT_APPLY)&&(n=new Set([...bz(r,e),...Iz(r,e),...wz(r,e)])),n=new Set([...n,...Rz(r,i,e)]),n=new Set([...n,...Tz(r,i,e)]);const s=r.getCell(e.r,e.c);return s&&n.delete(s),n}function kz(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(Jp(t,o));const r=n.reduce((o,s)=>o.intersection(s)),i=[];for(const o of r)i.push(o.toCoords());return i}var Mz=ne('<tspan class="svelte-fb40hv"> </tspan>'),Uz=ne('<g class="center-marks-group"><text class="center-mark svelte-fb40hv" dominant-baseline="central"></text></g>');function Gz(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=S(),o=S();let s=G(e,"cell",8),l=G(e,"seen_values",8);const u=.25;function d(m){return l().find(I=>I===m)!==void 0}D(()=>X(s()),()=>{O(i,Wn({r:s().r,c:s().c}))}),D(()=>r(),()=>{O(o,r().non_given_color)}),be(),fe();var g=Ee(),h=ee(g);{var v=m=>{var E=Uz(),I=Y(E);x(I,"font-size",u),qe(I,5,()=>s().centerMarks,pt,(b,w)=>{var A=Mz();const T=ft(()=>d(_(w)));J(()=>St(A,"conflict",_(T)));var k=Y(A,!0);H(A),J(()=>it(k,_(w))),L(b,A)}),H(I),H(E),J(()=>{x(I,"x",_(i).x),x(I,"y",_(i).y),x(I,"textLength",s().centerMarks.length>5?"0.9":void 0),x(I,"fill",_(o))}),L(m,E)};Q(h,m=>{s().centerMarks.length&&m(v)})}L(t,g),se()}var $z=ne('<text class="corner-mark svelte-r25lu9" dominant-baseline="central"> </text>'),Fz=ne('<g class="corner-marks-group"></g>');function Pz(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=S(),o=S();let s=G(e,"cell",8),l=G(e,"seen_values",8);const u=.25,d=.28;function g(I){const b=I.cornerMarks.slice(0,8),w=Wn({r:I.r,c:I.c});return b.map((A,T)=>{const k=lz(T,d);return{pos:w.add(k),value:A,idx:T}})}function h(I){return l().find(w=>w===I)!==void 0}D(()=>r(),()=>{O(i,r().conflict_marks_color)}),D(()=>r(),()=>{O(o,r().non_given_color)}),be(),fe();var v=Ee(),m=ee(v);{var E=I=>{var b=Fz();qe(b,5,()=>g(s()),pt,(w,A)=>{let T=()=>_(A).pos,k=()=>_(A).value;var U=$z();x(U,"font-size",u),J(()=>x(U,"fill",h(k())?_(i):_(o)));var j=Y(U,!0);H(U),J(()=>{x(U,"x",T().x),x(U,"y",T().y),it(j,k())}),L(w,U)}),H(b),L(I,b)};Q(m,I=>{s().cornerMarks.length&&I(E)})}L(t,v),se()}var zz=ne('<text class="cell-region svelte-129e584" dominant-baseline="central"> </text>');function Hz(t,e){oe(e,!1);const n=S();let r=G(e,"cell",8);const i=.8,o=400;D(()=>X(r()),()=>{O(n,Wn({r:r().r,c:r().c}))}),be(),fe();var s=Ee(),l=ee(s);{var u=d=>{var g=zz();x(g,"font-size",i),x(g,"font-weight",o);var h=Y(g,!0);H(g),J(()=>{x(g,"x",_(n).x),x(g,"y",_(n).y),it(h,r().region)}),L(d,g)};Q(l,d=>{r().region!==null&&d(u)})}L(t,s),se()}var Wz=ne('<text class="cell-value svelte-1p0g0b7" dominant-baseline="central"> </text>'),Bz=ne("<!><!>",1),Yz=ne('<g class="cell-values cell-digit-outline svelte-1p0g0b7"><!></g>');function jz(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=()=>ge(Bs,"$puzzleStore",n),o=()=>ge(vi,"$enableFogMaskStore",n),s=()=>ge(en,"$toolStore",n),l=S(),u=S(),d=S(),g=S(),h=S(),v=S(),m=S(),E=S(),I=S();let b=G(e,"cell",8);const w=.8,A=400;function T(M,$){if(!M)return[];let ae=[...Jp(_(h),$.toCoords())].map(ie=>ie.value).filter(ie=>ie!==null);return ae=[...new Set(ae)],ae}D(()=>X(b()),()=>{O(l,b().value)}),D(()=>X(b()),()=>{O(u,b().given)}),D(()=>X(b()),()=>{O(d,Wn({r:b().r,c:b().c}))}),D(()=>r(),()=>{O(g,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{O(h,i())}),D(()=>r(),()=>{O(v,r().showSolution)}),D(()=>(_(u),r()),()=>{O(m,_(u)?"var(--cell-given-color)":r().non_given_color)}),D(()=>(_(g),X(b())),()=>{O(E,T(_(g),b()))}),D(()=>(X(b()),o()),()=>{O(I,b().given&&o())}),be(),fe();var k=Ee(),U=ee(k);{var j=M=>{var $=Yz(),te=Y($);{var ae=ce=>{Hz(ce,{get cell(){return b()}})},ie=ce=>{var we=Ee(),Z=ee(we);{var Ie=Oe=>{var Se=Wz();x(Se,"font-size",w),x(Se,"font-weight",A);var Ae=Y(Se,!0);H(Se),J(()=>{x(Se,"x",_(d).x),x(Se,"y",_(d).y),x(Se,"fill",_(m)),St(Se,"given",_(u)),it(Ae,_(l))}),L(Oe,Se)},me=Oe=>{var Se=Bz(),Ae=ee(Se);Pz(Ae,{get cell(){return b()},get seen_values(){return _(E)}});var Re=F(Ae);Gz(Re,{get cell(){return b()},get seen_values(){return _(E)}}),L(Oe,Se)};Q(Z,Oe=>{_(l)!==null?Oe(Ie):Oe(me,!1)},!0)}L(ce,we)};Q(te,ce=>{s()===f.REGIONS?ce(ae):ce(ie,!1)})}H($),J(()=>St($,"hide-given",_(I))),L(M,$)};Q(U,M=>{_(v)||M(j)})}L(t,k),se()}var Kz=ne("<path></path>"),Vz=ne('<g class="highlights-group svelte-doew1h"></g>');function Xz(t,e){oe(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n);let i=G(e,"cell",8);function o(d){const g=Wn({r:i().r,c:i().c}),h=i().highlights.length;return i().highlights.map((m,E)=>{let I=oz(E,h);I=I.map(w=>w.add(g));const b=Xo(I,!0);return{colorId:m,d:b}})}fe();var s=Ee(),l=ee(s);{var u=d=>{var g=Ee(),h=ee(g);{var v=m=>{var E=Vz();qe(E,5,()=>o(i()),pt,(I,b)=>{let w=()=>_(b).colorId,A=()=>_(b).d;var T=Kz();J(()=>{Ls(T,`highlight-wedge color-${w()??""} svelte-doew1h`),x(T,"d",A())}),L(I,T)}),H(E),L(m,E)};Q(h,m=>{i().highlights.length&&m(v)})}L(d,g)};Q(l,d=>{r()!==f.REGIONS&&d(u)})}L(t,s),se()}var qz=ne('<path class="cell-marker" fill="none"></path>'),Zz=ne('<circle fill="none" opacity="0.9"></circle>');function Qz(t,e){oe(e,!1);const n=S(),r=S();let i=G(e,"marker",8);const o=.3,s=.08;D(()=>X(i()),()=>{O(n,Qp(i(),o))}),D(()=>X(i()),()=>{O(r,ql(i().colorId,"black"))}),be(),fe();var l=Ee(),u=ee(l);{var d=h=>{var v=qz();x(v,"stroke-width",s),J(()=>{x(v,"d",_(n)),x(v,"stroke",_(r))}),L(h,v)},g=h=>{var v=Zz();x(v,"r",o),x(v,"stroke-width",s),J(()=>{Ls(v,`cell-marker color-${i().colorId??""}`),x(v,"cx",i().c),x(v,"cy",i().r),x(v,"stroke",_(r))}),L(h,v)};Q(u,h=>{i().marker==="X"?h(d):h(g,!1)})}L(t,l),se()}var Jz=ne('<g class="cell-markers"></g>');function e4(t,e){let n=G(e,"markers",8);var r=Jz();qe(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{Qz(i,{get marker(){return _(o)}})}),H(r),L(t,r)}var t4=ne('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function n4(t,e){oe(e,!1);const n=S();let r=G(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(g=>[new Ue(g.p1.c,g.p1.r),new Ue(g.p2.c,g.p2.r)]).flat()}function s(u){const d=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?ql(d,"black"):"darkred"}D(()=>X(r()),()=>{O(n,Xo(o(r().draftLine)))}),be(),fe();var l=t4();J(()=>x(l,"stroke",s(r()))),x(l,"stroke-width",i),x(l,"opacity",.5),J(()=>x(l,"d",_(n))),L(t,l),se()}var r4=ne('<path fill="none" opacity="0.9"></path>');function i4(t,e){oe(e,!1);const n=S(),r=S();let i=G(e,"marker",8);const o=.08,s=.04;D(()=>X(i()),()=>{O(n,Qp(i(),o))}),D(()=>X(i()),()=>{O(r,ql(i().colorId,"black"))}),be(),fe();var l=r4();x(l,"stroke-width",s),J(()=>{x(l,"d",_(n)),Ls(l,`edge-marker color-${i().colorId??""}`),x(l,"stroke",_(r))}),L(t,l),se()}var o4=ne('<g class="edge-markers"></g>');function s4(t,e){let n=G(e,"markers",8);var r=o4();qe(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{i4(i,{get marker(){return _(o)}})}),H(r),L(t,r)}var a4=ne('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),l4=ne('<g class="line-markers svelte-yha19m"></g>');function c4(t,e){oe(e,!1);let n=G(e,"lineMarkers",8);const r=.09;function i(l){return JSON.stringify(l)}function o(l){return ql(l,"black")}fe();var s=l4();qe(s,5,n,l=>i(l),(l,u)=>{var d=a4();x(d,"stroke-width",r),J(()=>x(d,"stroke",o(_(u).colorId))),J(()=>{x(d,"x1",_(u).p1.c),x(d,"y1",_(u).p1.r),x(d,"x2",_(u).p2.c),x(d,"y2",_(u).p2.r),Ls(d,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),L(l,d)}),H(s),L(t,s),se()}var u4=ne('<g class="pen-tool"><!><!><!><!></g>');function d4(t,e){oe(e,!1);const n=Ye(),r=()=>ge(fl,"$penToolStore",n),i=S();D(()=>r(),()=>{O(i,{draftLine:r().draftLine,mode:r().mode})}),be(),fe();var o=u4(),s=Y(o);c4(s,{get lineMarkers(){return r().lineMarkers}});var l=F(s);s4(l,{get markers(){return r().edgeMarkers}});var u=F(l);e4(u,{get markers(){return r().cellMarkers}});var d=F(u);n4(d,{get draftLineMarker(){return _(i)}}),H(o),L(t,o),se()}var _4=ne("<path></path>");function Br(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S(),d=S();let g=G(e,"cells",8),h=G(e,"shape",8,Pd);const v="square";D(()=>X(h()),()=>{O(n,h().inset??.06)}),D(()=>X(h()),()=>{O(r,h().stroke??"black")}),D(()=>X(h()),()=>{O(i,h().strokeWidth??.03)}),D(()=>X(h()),()=>{O(o,h().strokeDasharray??.08)}),D(()=>X(h()),()=>{O(s,h().fill??"none")}),D(()=>X(h()),()=>{O(l,h().connectDiag??!0)}),D(()=>(X(g()),_(n),_(l)),()=>{O(u,Co(g(),_(n),_(l)))}),D(()=>X(h()),()=>{O(d,h().strokeLinejoin??"miter")}),be(),fe();var m=_4();x(m,"stroke-linecap",v),J(()=>{x(m,"d",_(u)),x(m,"stroke",_(r)),x(m,"stroke-width",_(i)),x(m,"fill",_(s)),x(m,"stroke-dasharray",_(o)),x(m,"stroke-linejoin",_(d))}),L(t,m),se()}var f4=ne('<g class="seen-cells-layer svelte-dqmhr7"><!></g>');function g4(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Mi,"$selectionStore",n),i=()=>ge(Ln,"$settingsStore",n),o=()=>ge(Bs,"$puzzleStore",n),s=()=>ge(en,"$toolStore",n),l=()=>ge(vi,"$enableFogMaskStore",n),u=S(),d=S(),g=S(),h=S(),v=S(),m=S(),E=S();function I(T,k){return T.length?kz(_(g),T):[]}D(()=>r(),()=>{O(u,r().cells)}),D(()=>i(),()=>{O(d,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{O(g,o())}),D(()=>s(),()=>{O(h,Fd(s()))}),D(()=>i(),()=>{O(v,i().seen_cells_color)}),D(()=>_(v),()=>{O(m,{type:B.CAGE,strokeWidth:0,stroke:"none",fill:_(v),inset:.15,connectDiag:!1})}),D(()=>l(),()=>{O(E,l())}),be(),fe();var b=Ee(),w=ee(b);{var A=T=>{var k=f4(),U=Y(k),j=ft(()=>I(_(u),_(g)));Br(U,{get cells(){return _(j)},get shape(){return _(m)}}),H(k),J(()=>x(k,"mask",_(E)?"url(#fog-mask-fog)":null)),L(T,k)};Q(w,T=>{_(d)&&_(h)&&T(A)})}L(t,b),se()}function Zl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...dp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function h4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Zl(r))}return new Set(e)}function v4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Zl(r))}return new Set(e)}function p4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Zl(r))}return new Set(e)}function m4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function E4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(s=>s.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function C4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function b4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Zl(i);o.length&&e.push(...o)}return new Set(e)}function I4(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...h4(t),...v4(t),...p4(t)]);n=n.union(u)}return!!e.get(f.ANTIKNIGHT)&&(n=n.union(m4(t))),!!e.get(f.ANTIKING)&&(n=n.union(E4(t))),!!e.get(f.NONCONSECUTIVE)&&(n=n.union(C4(t))),!!e.get(f.DISJOINT_GROUPS)&&(n=n.union(b4(t))),n}function w4(t,e){return[...new Set([...I4(t,e)])]}var y4=ne('<rect class="conflict svelte-d9qu4j"></rect>'),O4=ne('<g class="conflicts-layer"></g>');function A4(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=()=>ge(hn,"$gridStore",n),o=()=>ge(lt,"$elementsDictStore",n),s=()=>ge(Pn,"$cellsStore",n),l=()=>ge(vi,"$enableFogMaskStore",n),u=S(),d=S(),g=S(),h=S(),v=S(),m=S();B.CAGE;function E(A){return w4(_(d),_(g)).map(U=>U.toCoords())}D(()=>r(),()=>{O(u,r().checkConflicts)}),D(()=>i(),()=>{O(d,i())}),D(()=>o(),()=>{O(g,o())}),D(()=>s(),()=>{O(h,s())}),D(()=>l(),()=>{O(v,l())}),D(()=>r(),()=>{O(m,r().conflict_cells_color)}),be(),fe();var I=Ee(),b=ee(I);{var w=A=>{var T=O4();qe(T,5,()=>E(_(h)),pt,(k,U)=>{var j=y4();x(j,"width",1),x(j,"height",1),J(()=>{x(j,"x",_(U).c),x(j,"y",_(U).r),x(j,"fill",_(m))}),L(k,j)}),H(T),J(()=>x(T,"mask",_(v)?"url(#fog-mask-fog)":null)),L(A,T)};Q(b,A=>{_(u)&&A(w)})}L(t,I),se()}var x4=ne('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function S4(t,e){oe(e,!1);const n=S();let r=G(e,"r",8),i=G(e,"c",8),o=G(e,"val",8);const s=.8,l=400;D(()=>(X(r()),X(i())),()=>{O(n,Wn({r:r(),c:i()}))}),be(),fe();var u=Ee(),d=ee(u);{var g=h=>{var v=x4();x(v,"font-size",s),x(v,"font-weight",l);var m=Y(v,!0);H(v),J(()=>{x(v,"x",_(n).x),x(v,"y",_(n).y),it(m,o())}),L(h,v)};Q(d,h=>{o()!==null&&h(g)})}L(t,u),se()}var L4=ne('<g class="solution-layer"></g>');function N4(t,e){oe(e,!1);const n=Ye(),r=()=>ge(kl,"$solutionStore",n),i=()=>ge(Ln,"$settingsStore",n),o=()=>ge(Tl,"$gameModeStore",n),s=S(),l=S(),u=S();D(()=>r(),()=>{O(s,r())}),D(()=>i(),()=>{O(l,i().showSolution)}),D(()=>o(),()=>{O(u,o())}),be(),fe();var d=Ee(),g=ee(d);{var h=v=>{var m=L4();qe(m,5,()=>_(s),pt,(E,I,b)=>{var w=Ee(),A=ee(w);qe(A,1,()=>_(I),pt,(T,k,U)=>{S4(T,{r:b,c:U,get val(){return _(k)}})}),L(E,w)}),H(m),L(v,m)};Q(g,v=>{_(s)&&_(l)&&_(u)===bo.SETTING&&v(h)})}L(t,d),se()}var D4=ne('<g class="element-group"></g>'),R4=ne("<g></g>");function Va(t,e){oe(e,!1);const n=Ye(),r=()=>ge(vi,"$enableFogMaskStore",n),i=S();let o=G(e,"elements",8),s=G(e,"g_name",8),l=G(e,"Component",8);D(()=>r(),()=>{O(i,r())}),be();var u=R4();qe(u,5,o,pt,(d,g)=>{var h=Ee(),v=ee(h);{var m=E=>{var I=D4();qe(I,5,()=>Object.entries(_(g).constraints),b=>b[0],(b,w)=>{l()(b,{get tool(){return _(w)[1]},get c_id(){return _(w)[0]}})}),H(I),J(()=>x(I,"data-toolId",_(g).tool_id)),L(E,I)};Q(v,E=>{_(g).constraints&&E(m)})}L(d,h)}),H(u),J(()=>{Ls(u,Oy(s())),x(u,"mask",_(i)?"url(#fog-mask-fog)":null)}),L(t,u),se()}var T4=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),k4=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),M4=ne('<g class="quadruple-text"><!></g>');function U4(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S();let l=G(e,"cornerTool",8);const u=l().cells,d=new Ue(u[u.length-1].c,u[u.length-1].r),g=un(l().toolId,Ht)??Vu;D(()=>X(l()),()=>{O(n,l().value)}),D(()=>X(l()),()=>{O(r,l().shape??g)}),D(()=>_(r),()=>{var E;O(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),D(()=>_(r),()=>{var E;O(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),D(()=>_(n),()=>{var E;O(s,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),be(),fe();var h=Ee(),v=ee(h);{var m=E=>{var I=M4(),b=Y(I);{var w=T=>{var k=T4(),U=Y(k,!0);J(()=>it(U,_(s).join(" "))),H(k),J(()=>{x(k,"x",d.x),x(k,"y",d.y),x(k,"font-size",_(i)),x(k,"fill",_(o))}),L(T,k)},A=T=>{var k=k4(),U=ee(k),j=Y(U,!0);J(()=>it(j,_(s).slice(0,2).join(" "))),H(U);var M=F(U),$=Y(M,!0);J(()=>it($,_(s).slice(2).join(" "))),H(M),J(()=>{x(U,"x",d.x),x(U,"y",d.y),x(U,"dy",-_(i)/2),x(U,"font-size",_(i)),x(U,"fill",_(o)),x(M,"x",d.x),x(M,"y",d.y),x(M,"dy",_(i)/2),x(M,"font-size",_(i)),x(M,"fill",_(o))}),L(T,k)};Q(b,T=>{_(s).length<=2?T(w):T(A,!1)})}H(I),J(()=>x(I,"data-count",_(s).length)),L(E,I)};Q(v,E=>{_(n)&&E(m)})}L(t,h),se()}var G4=ne("<circle></circle>");function Cr(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S();let u=G(e,"x",8),d=G(e,"y",8),g=G(e,"shape",8);D(()=>X(g()),()=>{O(n,g().r??.35)}),D(()=>X(g()),()=>{O(r,g().stroke??"black")}),D(()=>X(g()),()=>{var v;O(i,(v=g())==null?void 0:v.opacity)}),D(()=>X(g()),()=>{O(o,g().strokeWidth??.02)}),D(()=>X(g()),()=>{O(s,g().fill??"none")}),D(()=>X(g()),()=>{O(l,g().strokeDasharray??0)}),be(),fe();var h=G4();J(()=>{x(h,"cx",u()),x(h,"cy",d()),x(h,"r",_(n)),x(h,"stroke",_(r)),x(h,"stroke-width",_(o)),x(h,"fill",_(s)),x(h,"opacity",_(i)),x(h,"stroke-dasharray",_(l))}),L(t,h),se()}var $4=ne("<ellipse></ellipse>");function F4(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S();let d=G(e,"cx",8),g=G(e,"cy",8),h=G(e,"shape",8);D(()=>X(h()),()=>{O(n,h().width??.5)}),D(()=>X(h()),()=>{O(r,h().height??.5)}),D(()=>X(h()),()=>{O(i,h().stroke??"black")}),D(()=>X(h()),()=>{var m;O(o,(m=h())==null?void 0:m.opacity)}),D(()=>X(h()),()=>{O(s,h().strokeWidth??.02)}),D(()=>X(h()),()=>{O(l,h().fill??"none")}),D(()=>X(h()),()=>{O(u,h().angle??0)}),be(),fe();var v=$4();J(()=>{x(v,"cx",d()),x(v,"cy",g()),x(v,"rx",_(n)/2),x(v,"ry",_(r)/2),x(v,"stroke",_(i)),x(v,"stroke-width",_(s)),x(v,"fill",_(l)),x(v,"opacity",_(o)),x(v,"transform",`rotate(${_(u)}, ${d()}, ${g()} )`)}),L(t,v),se()}var P4=ne("<polygon></polygon>");function pl(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S(),d=S();let g=G(e,"cx",8),h=G(e,"cy",8),v=G(e,"shape",8);D(()=>X(v()),()=>{O(n,v().n??3)}),D(()=>X(v()),()=>{O(r,v().r??.5)}),D(()=>(_(r),_(n),X(g()),X(h())),()=>{O(i,Zp(_(r),_(n),new Ue(g(),h())))}),D(()=>_(i),()=>{O(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>X(v()),()=>{O(s,v().stroke??"black")}),D(()=>X(v()),()=>{O(l,v().strokeWidth??.02)}),D(()=>X(v()),()=>{O(u,v().fill??"none")}),D(()=>X(v()),()=>{O(d,v().angle??0)}),be(),fe();var m=P4();J(()=>{x(m,"points",_(o)),x(m,"stroke",_(s)),x(m,"stroke-width",_(l)),x(m,"fill",_(u)),x(m,"transform",`rotate(${_(d)}, ${g()}, ${h()} )`)}),L(t,m),se()}var z4=ne("<rect></rect>");function H4(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S();let d=G(e,"cx",8),g=G(e,"cy",8),h=G(e,"shape",8);D(()=>X(h()),()=>{O(n,h().width??.5)}),D(()=>X(h()),()=>{O(r,h().height??.5)}),D(()=>(X(d()),_(n)),()=>{O(i,d()-_(n)/2)}),D(()=>(X(g()),_(r)),()=>{O(o,g()-_(r)/2)}),D(()=>X(h()),()=>{O(s,h().stroke||"black")}),D(()=>X(h()),()=>{O(l,h().strokeWidth||.023)}),D(()=>X(h()),()=>{O(u,h().fill||"none")}),be(),fe();var v=z4();J(()=>{x(v,"x",_(i)),x(v,"y",_(o)),x(v,"width",_(n)),x(v,"height",_(r)),x(v,"stroke",_(s)),x(v,"stroke-width",_(l)),x(v,"fill",_(u))}),L(t,v),se()}var W4=ne("<rect></rect>");function B4(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S();let m=G(e,"cx",8),E=G(e,"cy",8),I=G(e,"shape",8);D(()=>X(I()),()=>{O(n,I().r??.5)}),D(()=>(X(m()),_(n)),()=>{O(r,m()-_(n))}),D(()=>(X(E()),_(n)),()=>{O(i,E()-_(n))}),D(()=>_(n),()=>{O(o,2*_(n))}),D(()=>_(n),()=>{O(s,2*_(n))}),D(()=>X(I()),()=>{O(l,I().stroke??"black")}),D(()=>X(I()),()=>{O(u,I().strokeWidth??.02)}),D(()=>X(I()),()=>{O(d,I().fill??"none")}),D(()=>X(I()),()=>{O(g,I().angle??0)}),D(()=>X(I()),()=>{O(h,I().strokeDasharray??0)}),D(()=>X(I()),()=>{O(v,I().opacity??1)}),be(),fe();var b=W4();J(()=>{x(b,"x",_(r)),x(b,"y",_(i)),x(b,"width",_(o)),x(b,"height",_(s)),x(b,"stroke",_(l)),x(b,"stroke-width",_(u)),x(b,"fill",_(d)),x(b,"transform",`rotate(${_(g)}, ${m()}, ${E()})`),x(b,"stroke-dasharray",_(h)),x(b,"opacity",_(v))}),L(t,b),se()}function Rr(t,e){oe(e,!1);const n=S();let r=G(e,"cx",8),i=G(e,"cy",8),o=G(e,"shape",8);D(()=>(X(o()),B),()=>{var g;O(n,((g=o())==null?void 0:g.type)??B.CIRCLE)}),be(),fe();var s=Ee(),l=ee(s);{var u=g=>{Cr(g,{get x(){return r()},get y(){return i()},get shape(){return o()}})},d=g=>{var h=Ee(),v=ee(h);{var m=I=>{F4(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var b=Ee(),w=ee(b);{var A=k=>{B4(k,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},T=k=>{var U=Ee(),j=ee(U);{var M=te=>{H4(te,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},$=te=>{var ae=Ee(),ie=ee(ae);{var ce=Z=>{pl(Z,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},we=Z=>{Cr(Z,{get x(){return r()},get y(){return i()},get shape(){return o()}})};Q(ie,Z=>{_(n)===B.POLYGON?Z(ce):Z(we,!1)},!0)}L(te,ae)};Q(j,te=>{_(n)===B.RECTANGLE?te(M):te($,!1)},!0)}L(k,U)};Q(w,k=>{_(n)===B.SQUARE?k(A):k(T,!1)},!0)}L(I,b)};Q(v,I=>{_(n)===B.ELLIPSE?I(m):I(E,!1)},!0)}L(g,h)};Q(l,g=>{_(n)===B.CIRCLE?g(u):g(d,!1)})}L(t,s),se()}var Y4=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),j4=ne('<g class="corner-tool"><!><!><!></g>');function em(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);function I(T,k){return k===B.TEXT_ONLY?T.value?T.value:"-":T.value??""}D(()=>r(),()=>{var T;O(i,(T=r())==null?void 0:T.id)}),D(()=>(X(m()),Vu),()=>{O(o,un(m().toolId,Ht)??Vu)}),D(()=>(X(m()),_(o)),()=>{O(s,m().shape??_(o))}),D(()=>(_(s),B),()=>{var T;O(l,((T=_(s))==null?void 0:T.type)??B.CIRCLE)}),D(()=>_(s),()=>{var T;O(u,((T=_(s))==null?void 0:T.fontSize)??.2)}),D(()=>_(s),()=>{var T;O(d,((T=_(s))==null?void 0:T.fontColor)??"black")}),D(()=>_(s),()=>{O(g,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(h,m().cells)}),D(()=>_(h),()=>{O(v,new Ue(_(h)[_(h).length-1].c,_(h)[_(h).length-1].r))}),be(),fe();var b=Ee(),w=ee(b);{var A=T=>{var k=j4(),U=Y(k);{var j=ie=>{Rr(ie,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(g)}})};Q(U,ie=>{E()&&E()===_(i)&&ie(j)})}var M=F(U);Rr(M,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(s)}});var $=F(M);{var te=ie=>{U4(ie,{get cornerTool(){return m()}})},ae=ie=>{var ce=Y4(),we=Y(ce,!0);J(()=>it(we,I(m(),_(l)))),H(ce),J(()=>{x(ce,"x",_(v).x),x(ce,"y",_(v).y),x(ce,"font-size",_(u)),x(ce,"fill",_(d))}),L(ie,ce)};Q($,ie=>{m().toolId===f.QUADRUPLE?ie(te):ie(ae,!1)})}H(k),L(T,k)};Q(w,T=>{_(h).length===4&&T(A)})}L(t,b),se()}var K4=ne('<g class="corner-tool"><!></g>');function V4(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=K4(),d=Y(u);em(d,{get tool(){return n()},get c_id(){return r()}}),H(u),J(()=>x(u,"id",`c-${r()}`)),L(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}L(t,i)}var X4=ne('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ss(t,e){oe(e,!1);const n=S();let r=G(e,"value",8,""),i=G(e,"fontSize",8,.2),o=G(e,"x",8),s=G(e,"y",8),l=G(e,"position",8,"TL"),u=G(e,"fontColor",8,"var(--text-primary-color)"),d=G(e,"fontWeight",8,400),g=S(null),h=S(null);function v(A,T,k){const U=["TL","TR"].includes(k),M=["TL","BL"].includes(k)?A+.05:A,$=T;return new Ue(M,$)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}Ay(()=>{if(!_(g)||!_(h))return;const A=_(g).getBBox();_(h).setAttribute("x",String(A.x)),_(h).setAttribute("y",String(A.y+A.height*.1)),_(h).setAttribute("width",String(A.width)),_(h).setAttribute("height",String(A.height*.8))}),D(()=>(X(o()),X(s()),X(l())),()=>{O(n,v(o(),s(),l()))}),be(),fe();var I=Ee(),b=ee(I);{var w=A=>{var T=X4(),k=ee(T);ki(k,M=>O(h,M),()=>_(h));var U=F(k);J(()=>x(U,"text-anchor",m(l()))),J(()=>x(U,"dominant-baseline",E(l())));var j=Y(U,!0);H(U),ki(U,M=>O(g,M),()=>_(g)),J(()=>{var M,$;x(U,"x",(M=_(n))==null?void 0:M.x),x(U,"y",($=_(n))==null?void 0:$.y),x(U,"font-size",i()),x(U,"fill",u()),x(U,"font-weight",d()),it(j,r())}),L(A,T)};Q(b,A=>{r().length&&A(w)})}L(t,I),se()}var q4=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),Z4=ne("<!><!><!>",1);function tm(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);function I(M,$){return $===B.TEXT_ONLY?M.value?M.value:"-":M.value??""}D(()=>r(),()=>{var M;O(i,(M=r())==null?void 0:M.id)}),D(()=>(X(m()),sl),()=>{O(o,un(m().toolId,Ht)??sl)}),D(()=>(X(m()),_(o)),()=>{O(s,m().shape??_(o))}),D(()=>_(s),()=>{O(l,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(u,m().cell)}),D(()=>(_(s),B),()=>{var M;O(d,((M=_(s))==null?void 0:M.type)||B.CIRCLE)}),D(()=>_(s),()=>{var M;O(g,((M=_(s))==null?void 0:M.fontSize)??.2)}),D(()=>_(s),()=>{var M;O(h,((M=_(s))==null?void 0:M.fontColor)??"black")}),D(()=>_(u),()=>{O(v,_(u).r%1===.5&&_(u).c%1===.5)}),be(),fe();var b=Z4(),w=ee(b);{var A=M=>{Rr(M,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(l)}})};Q(w,M=>{E()===_(i)&&M(A)})}var T=F(w);Rr(T,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(s)}});var k=F(T);{var U=M=>{var $=ft(()=>I(m(),_(d))),te=ft(()=>Math.floor(_(u).c)),ae=ft(()=>Math.floor(_(u).r));Ss(M,{get value(){return _($)},get x(){return _(te)},get y(){return _(ae)},position:"TL",get fontColor(){return _(h)}})},j=M=>{var $=q4(),te=Y($,!0);J(()=>it(te,I(m(),_(d)))),H($),J(()=>{x($,"x",_(u).c),x($,"y",_(u).r),x($,"font-size",_(g)),x($,"fill",_(h))}),L(M,$)};Q(k,M=>{_(v)?M(U):M(j,!1)})}L(t,b),se()}var Q4=ne('<g class="center-corner-or-edge-tool"><!></g>');function J4(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=Q4(),d=Y(u);tm(d,{get tool(){return n()},get c_id(){return r()}}),H(u),J(()=>x(u,"id",`c-${r()}`)),L(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}L(t,i)}var eH=ne('<rect stroke="none" fill="#5373ea80"></rect>'),tH=ne('<rect stroke="none" fill="#5373ea66"></rect>'),nH=ne('<path fill="none" stroke-linecap="round"></path><!>',1),rH=ne('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function jh(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=()=>ge(hn,"$gridStore",n),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S(),m=S(),E=S(),I=S();let b=G(e,"tool",8),w=G(e,"c_id",8,void 0);const A=.03;function T(Z){return Z.value&&Z.value.length?Z.value:"-"}function k(Z,Ie){const me=Hs(Ie),Oe=new Ue(me.c,me.r).scale(.5),Se=Wn(Z),Ae=Se.add(Oe.scale(.5)),Re=Se.add(Oe.scale(.8));return[Ae,Re]}function U(Z,Ie){const Oe=k(Z,Ie);let Se=I_(.08,Ie);Se=Se.map(st=>st.add(Oe[1]));const Ae=fi(Oe),Re=fi(Se);return Ae+Re}D(()=>r(),()=>{var Z;O(o,(Z=r())==null?void 0:Z.id)}),D(()=>X(b()),()=>{O(s,b().cell)}),D(()=>_(s),()=>{O(l,Wn(_(s)))}),D(()=>(i(),X(b())),()=>{O(u,i().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),D(()=>(X(b()),gh),()=>{O(d,un(b().toolId,Ht)??gh)}),D(()=>(X(b()),_(d)),()=>{O(g,b().shape??_(d))}),D(()=>_(g),()=>{var Z;O(h,((Z=_(g))==null?void 0:Z.fontSize)??.5)}),D(()=>_(g),()=>{var Z;O(v,((Z=_(g))==null?void 0:Z.fontColor)??"var(--text-primary-color)")}),D(()=>_(g),()=>{var Z;O(m,((Z=_(g))==null?void 0:Z.stroke)??"var(--text-primary-color)")}),D(()=>_(g),()=>{O(E,{..._(g),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),D(()=>(_(s),X(b())),()=>{O(I,U(_(s),b().direction))}),be(),fe();var j=rH(),M=Y(j);{var $=Z=>{var Ie=Ee(),me=ee(Ie);qe(me,1,()=>_(u),pt,(Oe,Se)=>{var Ae=eH();x(Ae,"width",1),x(Ae,"height",1),J(()=>{x(Ae,"x",_(Se).c),x(Ae,"y",_(Se).r)}),L(Oe,Ae)}),L(Z,Ie)};Q(M,Z=>{w()===void 0&&Z($)})}var te=F(M);{var ae=Z=>{var Ie=nH(),me=ee(Ie),Oe=F(me);qe(Oe,1,()=>_(u),pt,(Se,Ae)=>{var Re=tH();x(Re,"width",1),x(Re,"height",1),J(()=>{x(Re,"x",_(Ae).c),x(Re,"y",_(Ae).r)}),L(Se,Re)}),J(()=>{x(me,"d",_(I)),x(me,"stroke",_(E).stroke),x(me,"stroke-width",_(E).strokeWidth)}),L(Z,Ie)};Q(te,Z=>{w()&&w()===_(o)&&Z(ae)})}var ie=F(te);x(ie,"stroke-width",A);var ce=F(ie),we=Y(ce,!0);J(()=>it(we,T(b()))),H(ce),H(j),J(()=>{x(ie,"d",_(I)),x(ie,"stroke",_(m)),x(ce,"x",_(l).x),x(ce,"y",_(l).y),x(ce,"font-size",_(h)),x(ce,"fill",_(v))}),L(t,j),se()}var iH=ne('<g class="outside-direction-tool"><!></g>'),oH=ne('<g class="outside-direction-preview"><!></g>');function nm(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=u=>{var d=iH(),g=Y(d);jh(g,{get tool(){return n()},get c_id(){return r()}}),H(d),J(()=>x(d,"data-id",`${r()}`)),L(u,d)},l=u=>{var d=oH();x(d,"opacity",.5);var g=Y(d);jh(g,{get tool(){return n()}}),H(d),L(u,d)};Q(o,u=>{r()!==void 0?u(s):u(l,!1)})}L(t,i)}var sH=ne('<path fill="none"></path>');function di(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S();let u=G(e,"linePoints",8),d=G(e,"shape",8,void 0);const g="round",h="round";D(()=>X(d()),()=>{var m;O(n,((m=d())==null?void 0:m.stroke)??"gray")}),D(()=>X(d()),()=>{var m;O(r,((m=d())==null?void 0:m.strokeWidth)??.1)}),D(()=>X(d()),()=>{var m;O(i,((m=d())==null?void 0:m.strokeDasharray)??0)}),D(()=>X(d()),()=>{var m;O(o,((m=d())==null?void 0:m.strokeDashoffset)??0)}),D(()=>X(d()),()=>{var m,E,I,b,w,A,T,k;O(s,{shortenHead:((E=(m=d())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=d())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(w=d())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((k=(T=d())==null?void 0:T.linePathOptions)==null?void 0:k.closeLoops)??!1})}),D(()=>(X(u()),_(s)),()=>{O(l,fi(u(),_(s)))}),be(),fe();var v=sH();x(v,"stroke-linejoin",g),x(v,"stroke-linecap",h),J(()=>{x(v,"d",_(l)),x(v,"stroke",_(n)),x(v,"stroke-width",_(r)),x(v,"stroke-dasharray",_(i)),x(v,"stroke-dashoffset",_(o))}),L(t,v),se()}var aH=ue("<!> <!> <!>",1);function lH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S();let l=G(e,"linePoints",8),u=G(e,"shape",8);function d(b){const w=At.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>X(l()),()=>{O(n,l().length)}),D(()=>(_(n),X(l())),()=>{O(r,_(n)>1&&l()[0].equals(l()[_(n)-1]))}),D(()=>(_(n),X(l())),()=>{O(i,_(n)>=0?l()[0]:void 0)}),D(()=>(_(n),X(l())),()=>{O(o,_(n)>=0?l()[_(n)-1]:void 0)}),D(()=>X(u()),()=>{O(s,d(u()))}),be(),fe();var g=aH(),h=ee(g);di(h,{get linePoints(){return l()},get shape(){return u()}});var v=F(h,2);{var m=b=>{Cr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(s)}})};Q(v,b=>{!_(r)&&_(i)&&b(m)})}var E=F(v,2);{var I=b=>{Cr(b,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(s)}})};Q(E,b=>{!_(r)&&_(o)&&b(I)})}L(t,g),se()}var cH=ne('<g class="corner-line-tool"><!></g>');function uH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S();let s=G(e,"tool",8);const l=un(s().toolId,Ht)??Ts;D(()=>(X(s()),Ue),()=>{O(n,s().coords.map(v=>new Ue(v.c,v.r)))}),D(()=>X(s()),()=>{O(r,s().shape??l)}),D(()=>(_(r),B),()=>{var v;O(i,((v=_(r))==null?void 0:v.type)||B.LINE)}),D(()=>_(r),()=>{var v;O(o,((v=_(r))==null?void 0:v.opacity)??1)}),be(),fe();var u=cH(),d=Y(u);{var g=v=>{lH(v,{get linePoints(){return _(n)},get shape(){return _(r)}})},h=v=>{di(v,{get linePoints(){return _(n)},get shape(){return _(r)}})};Q(d,v=>{_(i)===B.MAZE_WALL?v(g):v(h,!1)})}H(u),J(()=>x(u,"opacity",_(o))),L(t,u),se()}var dH=ne('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Kh(t,e){oe(e,!1);const n=S(),r=S(),i=S();let o=G(e,"shape",8),s=G(e,"coords",8);const[l,u]=s(),d=u.c,g=l.c===u.c?u.c+1:u.c,h=u.r,v=l.r===u.r?u.r+1:u.r;D(()=>X(o()),()=>{O(n,o().stroke??"black")}),D(()=>X(o()),()=>{var E;O(r,(E=o())==null?void 0:E.opacity)}),D(()=>X(o()),()=>{O(i,o().strokeWidth??.02)}),be(),fe();var m=dH();x(m,"x1",d),x(m,"x2",g),x(m,"y1",h),x(m,"y2",v),J(()=>{x(m,"stroke",_(n)),x(m,"stroke-width",_(i)),x(m,"opacity",_(r))}),L(t,m),se()}var _H=ne("<!><!>",1),fH=ne("<!><!>",1),gH=ne("<!><!>",1),hH=ne("<!><!>",1),vH=ne('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function rm(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);function I(k,U){return U===B.TEXT_ONLY?k.value?k.value:"-":k.value??""}function b(k){if(k!==f.EDGE_INEQUALITY&&k!==f.ONE_WAY_DOOR)return 0;const U=Wn(_(h)[0]);return Wn(_(h)[1]).subtract(U).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),D(()=>(X(m()),sl),()=>{O(o,un(m().toolId,Ht)??sl)}),D(()=>(X(m()),_(o)),()=>{O(s,m().shape??_(o))}),D(()=>(_(s),B),()=>{var k;O(l,((k=_(s))==null?void 0:k.type)||B.CIRCLE)}),D(()=>_(s),()=>{var k;O(u,((k=_(s))==null?void 0:k.fontSize)??.2)}),D(()=>_(s),()=>{var k;O(d,((k=_(s))==null?void 0:k.fontColor)??"black")}),D(()=>_(s),()=>{O(g,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(h,m().cells)}),D(()=>_(h),()=>{O(v,wp(Xl(_(h))))}),be(),fe();var w=Ee(),A=ee(w);{var T=k=>{var U=vH(),j=ee(U);{var M=ie=>{var ce=_H(),we=ee(ce);{var Z=me=>{Cr(me,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(g)}})};Q(we,me=>{E()&&E()===_(i)&&me(Z)})}var Ie=F(we);Cr(Ie,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(s)}}),L(ie,ce)},$=ie=>{var ce=Ee(),we=ee(ce);{var Z=me=>{var Oe=fH(),Se=ee(Oe);{var Ae=$e=>{Cr($e,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(g)}})};Q(Se,$e=>{E()&&E()===_(i)&&$e(Ae)})}var Re=F(Se);Cr(Re,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(s)}}),L(me,Oe)},Ie=me=>{var Oe=Ee(),Se=ee(Oe);{var Ae=$e=>{var st=gH(),ut=ee(st);{var Ct=bt=>{Kh(bt,{get coords(){return _(h)},get shape(){return _(g)}})};Q(ut,bt=>{E()&&E()===_(i)&&bt(Ct)})}var dt=F(ut);Kh(dt,{get coords(){return _(h)},get shape(){return _(s)}}),L($e,st)},Re=$e=>{var st=hH(),ut=ee(st);{var Ct=bt=>{Rr(bt,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(g)}})};Q(ut,bt=>{E()&&E()===_(i)&&bt(Ct)})}var dt=F(ut);Rr(dt,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(s)}}),L($e,st)};Q(Se,$e=>{_(l)===B.BORDER_LINE?$e(Ae):$e(Re,!1)},!0)}L(me,Oe)};Q(we,me=>{_(l)===B.TEXT_ONLY?me(Z):me(Ie,!1)},!0)}L(ie,ce)};Q(j,ie=>{m().toolId===f.EDGE_INEQUALITY||m().toolId===f.ONE_WAY_DOOR?ie(M):ie($,!1)})}var te=F(j);J(()=>x(te,"transform",`rotate(${b(m().toolId)}, ${_(v).x}, ${_(v).y} )`));var ae=Y(te,!0);J(()=>it(ae,I(m(),_(l)))),H(te),J(()=>{x(te,"x",_(v).x),x(te,"y",_(v).y),x(te,"font-size",_(u)),x(te,"fill",_(d))}),L(k,U)};Q(A,k=>{_(h).length===2&&k(T)})}L(t,w),se()}var pH=ne('<g class="edge-tool"><!></g>');function mH(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=pH(),d=Y(u);rm(d,{get tool(){return n()},get c_id(){return r()}}),H(u),J(()=>x(u,"id",`c-${r()}`)),L(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}L(t,i)}var EH=ne('<path fill="none" stroke-linecap="round"></path>'),CH=ne('<path fill="none" stroke-linecap="round"></path>'),bH=ne('<path fill="none" stroke-linecap="round"></path>'),IH=ne("<!><!><!>",1);function Vh(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S();let d=G(e,"tool",8),g=G(e,"c_id",8,void 0);D(()=>r(),()=>{var w;O(i,(w=r())==null?void 0:w.id)}),D(()=>(X(d()),fh),()=>{O(o,un(d().toolId,Ht)??fh)}),D(()=>(X(d()),_(o)),()=>{O(s,d().shape??_(o))}),D(()=>_(s),()=>{O(l,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.03:.03})}),D(()=>_(s),()=>{O(u,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.05:.05})}),be(),fe();var h=IH(),v=ee(h);{var m=w=>{var A=Ee(),T=ee(A);qe(T,1,()=>d().directions,pt,(k,U)=>{var j=EH();J(()=>x(j,"d",Uu(d().cell,_(U)))),J(()=>{x(j,"stroke",_(l).stroke),x(j,"stroke-width",_(l).strokeWidth)}),L(k,j)}),L(w,A)};Q(v,w=>{w(m)})}var E=F(v);{var I=w=>{var A=Ee(),T=ee(A);qe(T,1,()=>d().directions,pt,(k,U)=>{var j=CH();J(()=>x(j,"d",Uu(d().cell,_(U)))),J(()=>{x(j,"stroke",_(u).stroke),x(j,"stroke-width",_(u).strokeWidth)}),L(k,j)}),L(w,A)};Q(E,w=>{g()&&g()===_(i)&&w(I)})}var b=F(E);qe(b,1,()=>d().directions,pt,(w,A)=>{var T=bH();J(()=>x(T,"d",Uu(d().cell,_(A)))),J(()=>{x(T,"stroke",_(s).stroke),x(T,"stroke-width",_(s).strokeWidth)}),L(w,T)}),L(t,h),se()}var wH=ne('<g class="single-cell-multi-arrow-tool"><!></g>'),yH=ne('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function im(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=u=>{var d=wH(),g=Y(d);Vh(g,{get tool(){return n()},get c_id(){return r()}}),H(d),J(()=>x(d,"data-id",`${r()}`)),L(u,d)},l=u=>{var d=yH();x(d,"opacity",.5);var g=Y(d);Vh(g,{get tool(){return n()}}),H(d),L(u,d)};Q(o,u=>{r()!==void 0?u(s):u(l,!1)})}L(t,i)}var OH=ne('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function AH(t,e){oe(e,!1);const n=S();let r=G(e,"tool",8);G(e,"c_id",8,void 0),D(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),be(),fe();var i=OH();J(()=>x(i,"transform",`translate(${_(n).x} ${_(n).y})`)),L(t,i),se()}var xH=ne('<g class="fog-lights-layer svelte-17myswq"></g>');function SH(t,e){oe(e,!1);const n=Ye(),r=()=>ge(en,"$toolStore",n),i=()=>ge(vi,"$enableFogMaskStore",n),o=S(),s=S();let l=G(e,"element",8);D(()=>r(),()=>{O(o,r())}),D(()=>i(),()=>{O(s,!i())}),be(),fe();var u=Ee(),d=ee(u);{var g=h=>{var v=xH();qe(v,5,()=>Object.entries(l()),m=>m[0],(m,E)=>{AH(m,{get tool(){return _(E)[1]},get c_id(){return _(E)[0]}})}),H(v),J(()=>St(v,"inactive",_(o)!==f.FOG_LIGHTS)),L(h,v)};Q(d,h=>{_(s)&&h(g)})}L(t,u),se()}var LH=ne('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function Ql(t,e){oe(e,!1);const n=S(),r=S(),i=S();let o=G(e,"cx",8),s=G(e,"cy",8),l=G(e,"c_id",8);D(()=>X(l()),()=>{O(n,document.getElementById(`c-${l()}`))}),D(()=>_(n),()=>{var h;O(r,(h=_(n))==null?void 0:h.getBBox())}),D(()=>_(r),()=>{O(i,_(r)?Math.max(_(r).width,_(r).height):void 0)}),be();var u=Ee(),d=ee(u);{var g=h=>{var v=LH(),m=Y(v);x(m,"stroke-width",.6),H(v),J(()=>x(v,"transform",`translate(${o()}, ${s()}) scale(${_(i)*.6})`)),L(h,v)};Q(d,h=>{_(i)&&h(g)})}L(t,u),se()}var NH=ne('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),DH=ne('<g class="edge-tool-preview"><!></g>');function RH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S();let l=G(e,"tool_preview",8);D(()=>X(l()),()=>{O(n,l().tool)}),D(()=>X(l()),()=>{O(r,l().mode)}),D(()=>X(l()),()=>{O(i,l().match_id)}),D(()=>_(n),()=>{O(o,_(n).cells)}),D(()=>_(o),()=>{O(s,wp(Xl(_(o))))}),be(),fe();var u=Ee(),d=ee(u);{var g=v=>{var m=NH();x(m,"opacity",.5);var E=Y(m);Ql(E,{get cx(){return _(s).x},get cy(){return _(s).y},get c_id(){return _(i)}}),H(m),L(v,m)},h=v=>{var m=DH();x(m,"opacity",.5);var E=Y(m);rm(E,{get tool(){return _(n)}}),H(m),L(v,m)};Q(d,v=>{_(r)==="remove"&&_(i)?v(g):v(h,!1)})}L(t,u),se()}var TH=ne('<g class="corner-tool-remove-preview"><!></g>'),kH=ne('<g class="corner-tool-preview"><!></g>');function MH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S();let l=G(e,"tool_preview",8);D(()=>X(l()),()=>{O(n,l().tool)}),D(()=>X(l()),()=>{O(r,l().mode)}),D(()=>X(l()),()=>{O(i,l().match_id)}),D(()=>_(n),()=>{O(o,_(n).cells)}),D(()=>_(o),()=>{O(s,new Ue(_(o)[_(o).length-1].c,_(o)[_(o).length-1].r))}),be(),fe();var u=Ee(),d=ee(u);{var g=v=>{var m=TH();x(m,"opacity",.5);var E=Y(m);Ql(E,{get cx(){return _(s).x},get cy(){return _(s).y},get c_id(){return _(i)}}),H(m),L(v,m)},h=v=>{var m=kH();x(m,"opacity",.5);var E=Y(m);em(E,{get tool(){return _(n)}}),H(m),L(v,m)};Q(d,v=>{_(r)==="remove"&&_(i)?v(g):v(h,!1)})}L(t,u),se()}var UH=ne('<path fill="none" stroke-linecap="round"></path>'),GH=ne('<path fill="none" stroke-linecap="round"></path>'),$H=ne('<!><!><path fill="none" stroke-linecap="round"></path>',1);function om(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S();let v=G(e,"tool",8),m=G(e,"c_id",8,void 0);D(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),D(()=>(X(v()),_h),()=>{O(o,un(v().toolId,Ht)??_h)}),D(()=>(X(v()),_(o)),()=>{O(s,v().shape??_(o))}),D(()=>_(s),()=>{O(l,_(s).strokeWidth??.1)}),D(()=>_(s),()=>{O(u,_(s).stroke??"black")}),D(()=>_(s),()=>{O(d,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.05:.05})}),D(()=>_(s),()=>{O(g,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),D(()=>X(v()),()=>{O(h,_z(v().cell,v().direction))}),be(),fe();var E=$H(),I=ee(E);{var b=k=>{var U=UH();J(()=>{x(U,"d",_(h)),x(U,"stroke",_(d).stroke),x(U,"stroke-width",_(d).strokeWidth)}),L(k,U)};Q(I,k=>{k(b)})}var w=F(I);{var A=k=>{var U=GH();J(()=>{x(U,"d",_(h)),x(U,"stroke",_(g).stroke),x(U,"stroke-width",_(g).strokeWidth)}),L(k,U)};Q(w,k=>{m()&&m()===_(i)&&k(A)})}var T=F(w);J(()=>{x(T,"d",_(h)),x(T,"stroke",_(u)),x(T,"stroke-width",_(l))}),L(t,E),se()}var FH=ne('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),PH=ne('<g class="single-cell-arrow-tool-preview"><!></g>');function zH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S();let s=G(e,"tool_preview",8);D(()=>X(s()),()=>{O(n,s().tool)}),D(()=>X(s()),()=>{O(r,s().mode)}),D(()=>X(s()),()=>{O(i,s().match_id)}),D(()=>_(n),()=>{O(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),be(),fe();var l=Ee(),u=ee(l);{var d=h=>{var v=FH();x(v,"opacity",.5);var m=Y(v);Ql(m,{get cx(){return _(o).x},get cy(){return _(o).y},get c_id(){return _(i)}}),H(v),L(h,v)},g=h=>{var v=PH();x(v,"opacity",.5);var m=Y(v);om(m,{get tool(){return _(n)}}),H(v),L(h,v)};Q(u,h=>{_(r)==="remove"&&_(i)?h(d):h(g,!1)})}L(t,l),se()}var HH=ue("<!> <!>",1);function sm(t,e){oe(e,!1);const n=S(),r=S();let i=G(e,"cells",8),o=G(e,"shape",8,Pd),s=G(e,"value",8,void 0);D(()=>X(i()),()=>{O(n,i()[0])}),D(()=>_(n),()=>{O(r,new Ue(_(n).c,_(n).r))}),be(),fe();var l=HH(),u=ee(l);Br(u,{get cells(){return i()},get shape(){return o()}});var d=F(u,2);{var g=h=>{Ss(h,{get value(){return s()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};Q(d,h=>{s()&&s().length&&h(g)})}L(t,l),se()}var WH=ne('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Xh(t,e){oe(e,!1);const n=Ye(),r=()=>ge(P2,"$minimumConstraintsStore",n),i=()=>ge(z2,"$maximumConstraintsStore",n),o=S(),s=S(),l=S();let u=G(e,"coord",8),d=G(e,"minOrMax",8);function g(b,w){const A=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<T.length;k++){let U=T[k];const j={r:b.r+U[1],c:b.c+U[0]};A[k]=!Object.values(w).some(M=>Qe(j,M.cell))}return A}function h(b,w){let A=uz(d(),b.r,b.c);const T=g(b,w);return A=A.filter((U,j)=>T[j]),A.map(U=>Xo(U,!1)).join("")}function v(b,w){return d()==="max"?w:b}D(()=>X(u()),()=>{O(o,u().c)}),D(()=>X(u()),()=>{O(s,u().r)}),D(()=>(r(),i()),()=>{O(l,v(r(),i()))}),be(),fe();var m=WH(),E=Y(m);x(E,"width",1),x(E,"height",1);var I=F(E);J(()=>x(I,"d",h(u(),_(l)))),H(m),J(()=>{x(E,"x",_(o)),x(E,"y",_(s))}),L(t,m),se()}var BH=ne("<circle></circle>");function YH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S();let u=G(e,"x",8),d=G(e,"y",8),g=G(e,"value",8),h=G(e,"shape",8);D(()=>X(h()),()=>{O(n,h().r??.35)}),D(()=>X(h()),()=>{O(r,h().stroke??"black")}),D(()=>X(h()),()=>{var m;O(i,(m=h())==null?void 0:m.opacity)}),D(()=>X(h()),()=>{O(o,h().strokeWidth??.02)}),D(()=>X(g()),()=>{O(s,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>X(h()),()=>{O(l,h().strokeDasharray??0)}),be(),fe();var v=BH();J(()=>{x(v,"cx",u()),x(v,"cy",d()),x(v,"r",_(n)),x(v,"stroke",_(r)),x(v,"stroke-width",_(o)),x(v,"fill",_(s)),x(v,"opacity",_(i)),x(v,"stroke-dasharray",_(l))}),L(t,v),se()}var jH=ne("<!><!>",1),KH=ne("<!><!>",1),VH=ne("<!><!><!>",1),XH=ne('<g class="single-cell-tool"><!><!></g>');function am(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);D(()=>r(),()=>{var U;O(i,(U=r())==null?void 0:U.id)}),D(()=>(X(m()),dh),()=>{O(o,un(m().toolId,Ht)??dh)}),D(()=>(X(m()),_(o)),()=>{O(s,m().shape??_(o))}),D(()=>(_(s),B),()=>{var U;O(l,((U=_(s))==null?void 0:U.type)||B.CIRCLE)}),D(()=>_(s),()=>{O(u,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.06:.06})}),D(()=>_(s),()=>{O(d,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>X(m()),()=>{O(h,new Ue(m().cell.c,m().cell.r))}),D(()=>X(m()),()=>{O(v,m().value)}),be(),fe();var I=XH(),b=Y(I);{var w=U=>{Xh(U,{get coord(){return m().cell},minOrMax:"min"})},A=U=>{var j=Ee(),M=ee(j);{var $=ae=>{Xh(ae,{get coord(){return m().cell},minOrMax:"max"})},te=ae=>{var ie=Ee(),ce=ee(ie);{var we=Ie=>{var me=jH(),Oe=ee(me);{var Se=Re=>{Rr(Re,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(d)}})};Q(Oe,Re=>{E()&&E()===_(i)&&Re(Se)})}var Ae=F(Oe);YH(Ae,{get x(){return _(g).x},get y(){return _(g).y},get value(){return _(v)},get shape(){return _(s)}}),L(Ie,me)},Z=Ie=>{var me=Ee(),Oe=ee(me);{var Se=Re=>{var $e=KH(),st=ee($e);{var ut=bt=>{var It=ft(()=>[m().cell]);Br(bt,{get cells(){return _(It)},get shape(){return _(d)}})};Q(st,bt=>{E()&&E()===_(i)&&bt(ut)})}var Ct=F(st),dt=ft(()=>[m().cell]);sm(Ct,{get cells(){return _(dt)},get shape(){return _(s)},get value(){return m().value}}),L(Re,$e)},Ae=Re=>{var $e=VH(),st=ee($e);{var ut=It=>{Rr(It,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(u)}})};Q(st,It=>{It(ut)})}var Ct=F(st);{var dt=It=>{Rr(It,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(d)}})};Q(Ct,It=>{E()&&E()===_(i)&&It(dt)})}var bt=F(Ct);Rr(bt,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(s)}}),L(Re,$e)};Q(Oe,Re=>{_(l)===B.CAGE?Re(Se):Re(Ae,!1)},!0)}L(Ie,me)};Q(ce,Ie=>{m().toolId===f.COLORED_COUNTING_CIRCLES?Ie(we):Ie(Z,!1)},!0)}L(ae,ie)};Q(M,ae=>{m().toolId===f.MAXIMUM?ae($):ae(te,!1)},!0)}L(U,j)};Q(b,U=>{m().toolId===f.MINIMUM?U(w):U(A,!1)})}var T=F(b);{var k=U=>{Ss(U,{get value(){return _(v)},get x(){return _(h).x},get y(){return _(h).y},position:"TL"})};Q(T,U=>{_(l)!==B.CAGE&&m().toolId!==f.COLORED_COUNTING_CIRCLES&&_(v)&&U(k)})}H(I),J(()=>x(I,"data-id",`${E()}`)),L(t,I),se()}var qH=ne('<g class="single-cell-tool-preview"><!></g>');function ZH(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S();let s=G(e,"tool_preview",8);D(()=>X(s()),()=>{O(n,s().tool)}),D(()=>X(s()),()=>{O(r,s().mode)}),D(()=>X(s()),()=>{O(i,s().match_id)}),D(()=>_(n),()=>{O(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),be(),fe();var l=qH();x(l,"opacity",.5);var u=Y(l);am(u,{get tool(){return _(n)}}),H(l),L(t,l),se()}var QH=ne('<g class="single-cell-arrow-tool"><!></g>');function JH(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=QH(),d=Y(u);om(d,{get tool(){return n()},get c_id(){return r()}}),H(u),J(()=>x(u,"id",`c-${r()}`)),L(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}L(t,i)}var e6=ne('<g class="single-cell-tool"><!></g>');function t6(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=e6(),d=Y(u);am(d,{get tool(){return n()},get c_id(){return r()}}),H(u),J(()=>x(u,"id",`c-${r()}`)),L(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}L(t,i)}function n6(t,e){oe(e,!1);let n=G(e,"tool",8),r=G(e,"c_id",8);fe();var i=Ee(),o=ee(i);{var s=l=>{var u=Ee(),d=ee(u);{var g=v=>{JH(v,{get tool(){return n()},get c_id(){return r()}})},h=v=>{var m=Ee(),E=ee(m);{var I=w=>{im(w,{get tool(){return n()},get c_id(){return r()}})},b=w=>{var A=Ee(),T=ee(A);{var k=U=>{t6(U,{get tool(){return n()},get c_id(){return r()}})};Q(T,U=>{n().type==="SIMPLE"&&U(k)},!0)}L(w,A)};Q(E,w=>{n().type==="MULTIARROW"?w(I):w(b,!1)},!0)}L(v,m)};Q(d,v=>{n().type==="ARROW"?v(g):v(h,!1)})}L(l,u)};Q(o,l=>{n().toolId!==f.FOG_LIGHTS&&l(s)})}L(t,i),se()}var r6=ue("<!> <!> <!>",1);function $u(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S();let s=G(e,"linePoints",8),l=G(e,"shape",8,Ts);function u(b){var T;const w=At.cloneDeep(b);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(T=w.linePathOptions)==null?void 0:T.bezierRounding},w}D(()=>X(s()),()=>{O(n,s().length)}),D(()=>(_(n),X(s())),()=>{O(r,_(n)>=0?s()[0]:void 0)}),D(()=>(_(n),X(s())),()=>{O(i,_(n)>=0?s()[_(n)-1]:void 0)}),D(()=>X(l()),()=>{O(o,u(l()))}),be(),fe();var d=r6(),g=ee(d);{var h=b=>{Cr(b,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};Q(g,b=>{_(r)&&b(h)})}var v=F(g,2);{var m=b=>{di(b,{get linePoints(){return s()},get shape(){return _(o)}})};Q(v,b=>{_(n)>1&&b(m)})}var E=F(v,2);{var I=b=>{Cr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};Q(E,b=>{_(i)&&b(I)})}L(t,d),se()}var i6=ue("<!> <!> <!>",1);function Fu(t,e){oe(e,!1);const n=S(),r=S(),i=S();let o=G(e,"linePoints",8),s=G(e,"shape",12,Ts);const l=4,u=.5;function d(k,U){const j=U.r??u,M=U.n??l,$=U.angle??0,te=Zp(j,M,new Ue(0,0),!0,0),ae=(M+(k-$/360)*M%M)%M,ie=Math.floor(ae)%M,ce=Math.ceil(ae)%M;return te[ie].lerp(te[ce],ae%1).length()}function g(k){if(_(n)<=1)return 0;const U=o()[0],M=o()[1].subtract(U).angle()/(2*Math.PI);return d(M,k)}function h(k){if(_(n)<=1)return 0;const U=o()[_(n)-1],M=o()[_(n)-2].subtract(U).angle()/(2*Math.PI);return d(M,k)}function v(k){var j;const U=At.cloneDeep(k);return U.r=U.r||u,U.opacity=1,U.linePathOptions={shortenHead:g(U),shortenTail:h(U),bezierRounding:(j=U.linePathOptions)==null?void 0:j.bezierRounding},U}D(()=>X(o()),()=>{O(n,o().length)}),D(()=>(_(n),X(o())),()=>{O(r,_(n)>=0?o()[0]:void 0)}),D(()=>(_(n),X(o())),()=>{O(i,_(n)>=0?o()[_(n)-1]:void 0)}),D(()=>X(s()),()=>{s(v(s()))}),be(),fe();var m=i6(),E=ee(m);{var I=k=>{pl(k,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return s()}})};Q(E,k=>{_(r)&&k(I)})}var b=F(E,2);{var w=k=>{di(k,{get linePoints(){return o()},get shape(){return s()}})};Q(b,k=>{_(n)>1&&k(w)})}var A=F(b,2);{var T=k=>{pl(k,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return s()}})};Q(A,k=>{_(i)&&k(T)})}L(t,m),se()}var o6=ue("<!> <!>",1);function Pu(t,e){oe(e,!1);const n=S();let r=G(e,"linePoints",8),i=G(e,"shape",8,Ts);function o(m){var b,w,A;const E=At.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function s(m){var b,w,A;const E=At.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}D(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),be(),fe();var l=o6(),u=ee(l);{var d=m=>{var E=ft(()=>o(i()));di(m,{get linePoints(){return r()},get shape(){return _(E)}})};Q(u,m=>{r().length>1&&m(d)})}var g=F(u,2);{var h=m=>{var E=ft(()=>o(i()));Cr(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},v=m=>{var E=Ee(),I=ee(E);{var b=w=>{var A=ft(()=>s(i()));pl(w,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(A)}})};Q(I,w=>{_(n)&&w(b)},!0)}L(m,E)};Q(g,m=>{_(n)&&i().type===B.THERMO_WITH_CIRCLE?m(h):m(v,!1)})}L(t,l),se()}var s6=ne("<!><!><!>",1),a6=ne("<!><!><!>",1),l6=ne("<!><!><!>",1),c6=ne("<!><!><!>",1),u6=ne('<g class="line-tool"><!></g>');function d6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S();let h=G(e,"tool",8),v=G(e,"c_id",8);const m=un(h().toolId,Ht)??Ts;D(()=>r(),()=>{var A;O(i,(A=r())==null?void 0:A.id)}),D(()=>X(h()),()=>{O(o,Xl(h().cells))}),D(()=>X(h()),()=>{O(s,h().shape??m)}),D(()=>(_(s),B),()=>{var A;O(l,((A=_(s))==null?void 0:A.type)||B.LINE)}),D(()=>_(s),()=>{var A;O(u,((A=_(s))==null?void 0:A.opacity)??1)}),D(()=>_(s),()=>{O(d,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.06:.06})}),D(()=>_(s),()=>{O(g,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),be(),fe();var E=u6(),I=Y(E);{var b=A=>{var T=s6(),k=ee(T);{var U=te=>{$u(te,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(k,te=>{te(U)})}var j=F(k);{var M=te=>{$u(te,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(j,te=>{v()===_(i)&&te(M)})}var $=F(j);$u($,{get linePoints(){return _(o)},get shape(){return _(s)}}),L(A,T)},w=A=>{var T=Ee(),k=ee(T);{var U=M=>{var $=a6(),te=ee($);{var ae=Z=>{Fu(Z,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(te,Z=>{Z(ae)})}var ie=F(te);{var ce=Z=>{Fu(Z,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(ie,Z=>{v()===_(i)&&Z(ce)})}var we=F(ie);Fu(we,{get linePoints(){return _(o)},get shape(){return _(s)}}),L(M,$)},j=M=>{var $=Ee(),te=ee($);{var ae=ce=>{var we=l6(),Z=ee(we);{var Ie=Ae=>{Pu(Ae,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,Ae=>{Ae(Ie)})}var me=F(Z);{var Oe=Ae=>{Pu(Ae,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(me,Ae=>{v()===_(i)&&Ae(Oe)})}var Se=F(me);Pu(Se,{get linePoints(){return _(o)},get shape(){return _(s)}}),L(ce,we)},ie=ce=>{var we=c6(),Z=ee(we);{var Ie=Ae=>{di(Ae,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,Ae=>{Ae(Ie)})}var me=F(Z);{var Oe=Ae=>{di(Ae,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(me,Ae=>{v()===_(i)&&Ae(Oe)})}var Se=F(me);di(Se,{get linePoints(){return _(o)},get shape(){return _(s)}}),L(ce,we)};Q(te,ce=>{_(l)===B.THERMO_WITH_CIRCLE||_(l)===B.THERMO_WITH_POLYGON?ce(ae):ce(ie,!1)},!0)}L(M,$)};Q(k,M=>{_(l)===B.LINE_WITH_POLYGON_ENDS?M(U):M(j,!1)},!0)}L(A,T)};Q(I,A=>{_(l)===B.LINE_WITH_CIRCLE_ENDS?A(b):A(w,!1)})}H(E),J(()=>x(E,"opacity",_(u))),L(t,E),se()}var _6=ne('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function lm(t,e){let n=G(e,"l",8,.2),r=G(e,"id",8),i=G(e,"strokeWidth",8),o=G(e,"stroke",8,"black");const s=.5,l=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=_6();x(u,"viewBox","0 0 1 1"),x(u,"refX",s),x(u,"refY",s),x(u,"markerWidth",1),x(u,"markerHeight",1);var d=Y(u);x(d,"d",l),H(u),J(()=>{x(u,"id",r()),x(d,"stroke-width",i()),x(d,"stroke",o())}),L(t,u)}var f6=ne('<path class="arrow-line" fill="none"></path>'),g6=ne("<!><!><!>",1);function h6(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S();let m=G(e,"tool",8),E=G(e,"arrowId",8);const I=un(m().toolId,Ht)??kv,b="round",w="round",A=crypto.randomUUID(),T=`arrow-marker-${E()}-${A}`;D(()=>X(m()),()=>{O(n,m().shape??I)}),D(()=>_(n),()=>{var $;O(r,(($=_(n))==null?void 0:$.r)??.4)}),D(()=>_(n),()=>{var $;O(i,(($=_(n))==null?void 0:$.stroke)??"gray")}),D(()=>_(n),()=>{var $;O(o,(($=_(n))==null?void 0:$.strokeWidth)??.1)}),D(()=>_(n),()=>{var $;O(s,(($=_(n))==null?void 0:$.strokeDasharray)??0)}),D(()=>_(n),()=>{var $;O(l,(($=_(n))==null?void 0:$.opacity)??.8)}),D(()=>(_(r),_(n)),()=>{var $,te,ae,ie;O(u,{shortenHead:_(r),shortenTail:((te=($=_(n))==null?void 0:$.linePathOptions)==null?void 0:te.shortenTail)??.2,bezierRounding:((ie=(ae=_(n))==null?void 0:ae.linePathOptions)==null?void 0:ie.bezierRounding)??.4})}),D(()=>_(n),()=>{var $;O(d,(($=_(n))==null?void 0:$.fill)??"none")}),D(()=>_(n),()=>{var $;O(g,(($=_(n))==null?void 0:$.inset)??.2)}),D(()=>_(g),()=>{O(h,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:_(g)})}),D(()=>X(m()),()=>{O(v,vl(m().cells))}),be(),fe();var k=g6(),U=ee(k);lm(U,{id:T,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var j=F(U);Br(j,{get cells(){return m().cells},get shape(){return _(h)}});var M=F(j);qe(M,1,()=>m().lines,pt,($,te)=>{var ae=Ee(),ie=ee(ae);{var ce=we=>{var Z=f6();J(()=>x(Z,"d",vl(_(te),_(u)))),x(Z,"stroke-linejoin",b),x(Z,"stroke-linecap",w),x(Z,"marker-end",`url(#${T??""})`),J(()=>{x(Z,"stroke",_(i)),x(Z,"stroke-width",_(o)),x(Z,"opacity",_(l)),x(Z,"stroke-dasharray",_(s))}),L(we,Z)};Q(ie,we=>{_(te).length>1&&we(ce)})}L($,ae)}),L(t,k),se()}var v6=ne('<path class="arrow-line" fill="none"></path>'),p6=ne('<mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><path class="arrow-bulb svelte-8t4zyo" stroke="white" fill="none"></path><path class="arrow-bulb svelte-8t4zyo" stroke="black" fill="none"></path></mask><!><path class="arrow-bulb svelte-8t4zyo"></path><!>',1);function zu(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S(),s=S(),l=S(),u=S();let d=G(e,"tool",8),g=G(e,"c_id",8),h=G(e,"shape",8);const v="round",m="round",E=crypto.randomUUID(),I=`arrow-mask-${g()}-${E}`,b=`arrow-marker-${g()}-${E}`;D(()=>X(h()),()=>{var $;O(n,(($=h())==null?void 0:$.r)??.4)}),D(()=>X(h()),()=>{var $;O(r,(($=h())==null?void 0:$.stroke)??"gray")}),D(()=>X(h()),()=>{var $;O(i,(($=h())==null?void 0:$.strokeWidth)??.1)}),D(()=>X(h()),()=>{var $;O(o,(($=h())==null?void 0:$.strokeDasharray)??0)}),D(()=>(_(n),X(h())),()=>{var $,te,ae,ie;O(s,{shortenHead:_(n),shortenTail:((te=($=h())==null?void 0:$.linePathOptions)==null?void 0:te.shortenTail)??.2,bezierRounding:((ie=(ae=h())==null?void 0:ae.linePathOptions)==null?void 0:ie.bezierRounding)??.4})}),D(()=>X(d()),()=>{O(l,vl(d().cells))}),D(()=>X(d()),()=>{O(u,sz(d().cells))}),be(),fe();var w=p6(),A=ee(w);x(A,"id",I);var T=Y(A),k=F(T);H(A);var U=F(A);lm(U,{id:b,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var j=F(U);x(j,"mask",`url(#${I??""})`);var M=F(j);qe(M,1,()=>d().lines,pt,($,te)=>{var ae=Ee(),ie=ee(ae);{var ce=we=>{var Z=v6();J(()=>x(Z,"d",vl(_(te),_(s)))),x(Z,"stroke-linejoin",v),x(Z,"stroke-linecap",m),x(Z,"marker-end",`url(#${b??""})`),J(()=>{x(Z,"stroke",_(r)),x(Z,"stroke-width",_(i)),x(Z,"stroke-dasharray",_(o))}),L(we,Z)};Q(ie,we=>{_(te).length>1&&we(ce)})}L($,ae)}),J(()=>{x(A,"x",_(u).x),x(A,"y",_(u).y),x(A,"width",_(u).width),x(A,"height",_(u).height),x(T,"stroke-width",2*_(n)+_(i)),x(T,"d",_(l)),x(k,"stroke-width",2*_(n)-_(i)),x(k,"d",_(l)),x(j,"d",_(l)),x(j,"stroke-width",2*_(n)+_(i)),x(j,"stroke",_(r))}),L(t,w),se()}var m6=ne("<!><!><!>",1),E6=ne('<g class="arrow-tool"><!></g>');function C6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S();let u=G(e,"tool",8),d=G(e,"c_id",8);const g=un(u().toolId,Ht)??kv;D(()=>X(u()),()=>{O(i,u().shape??g)}),D(()=>_(i),()=>{O(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),D(()=>_(i),()=>{O(s,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;O(l,(I=r())==null?void 0:I.id)}),be(),fe();var h=E6(),v=Y(h);{var m=I=>{h6(I,{get tool(){return u()},get arrowId(){return d()}})},E=I=>{var b=m6(),w=ee(b);{var A=j=>{zu(j,{get tool(){return u()},get c_id(){return d()},get shape(){return _(o)}})};Q(w,j=>{j(A)})}var T=F(w);{var k=j=>{zu(j,{get tool(){return u()},get c_id(){return d()},get shape(){return _(s)}})};Q(T,j=>{d()===_(l)&&j(k)})}var U=F(T);zu(U,{get tool(){return u()},get c_id(){return d()},get shape(){return _(i)}}),L(I,b)};Q(v,I=>{_(i).type===B.BULBOUS_ARROW?I(m):I(E,!1)})}H(h),L(t,h),se()}var b6=ne('<g class="cage-tool"><!><!></g>');function I6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S();let l=G(e,"tool",8),u=G(e,"c_id",8);const d=un(l().toolId,Ht)??Pd;D(()=>X(l()),()=>{O(i,l().shape??d)}),D(()=>r(),()=>{var E;O(o,(E=r())==null?void 0:E.id)}),D(()=>_(i),()=>{O(s,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),be(),fe();var g=b6(),h=Y(g);{var v=E=>{Br(E,{get cells(){return l().cells},get shape(){return _(s)}})};Q(h,E=>{u()===_(o)&&E(v)})}var m=F(h);sm(m,{get cells(){return l().cells},get shape(){return _(i)},get value(){return l().value}}),H(g),L(t,g),se()}var w6=ne("<!><!>",1),y6=ne('<g class="clone-tool"><!><!><!><!><!></g>');function O6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Wt,"$currentConstraintStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S(),m=S();let E=G(e,"tool",8),I=G(e,"c_id",8);const b=un(E().toolId,Ht)??Wy,w=800,A=E().value;D(()=>r(),()=>{var ae;O(i,(ae=r())==null?void 0:ae.id)}),D(()=>X(E()),()=>{O(o,E().shape??b)}),D(()=>_(o),()=>{O(s,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{O(l,_(o).inset??.15)}),D(()=>_(o),()=>{O(u,_(o).strokeWidth??.07)}),D(()=>_(o),()=>{O(d,_(o).fontColor??_(o).stroke??"black")}),D(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),D(()=>X(E()),()=>{O(h,E().cells2[E().cells2.length-1])}),D(()=>(_(g),_(l)),()=>{O(v,new Ue(_(g).c+1-_(l)-.05,_(g).r+1-_(l)-.05))}),D(()=>(_(h),_(l)),()=>{O(m,new Ue(_(h).c+1-_(l)-.05,_(h).r+1-_(l)-.05))}),be(),fe();var T=y6(),k=Y(T);{var U=ae=>{var ie=w6(),ce=ee(ie);Br(ce,{get cells(){return E().cells},get shape(){return _(s)}});var we=F(ce);Br(we,{get cells(){return E().cells2},get shape(){return _(s)}}),L(ae,ie)};Q(k,ae=>{I()===_(i)&&ae(U)})}var j=F(k);Br(j,{get cells(){return E().cells},get shape(){return _(o)}});var M=F(j);Ss(M,{value:A,get x(){return _(v).x},get y(){return _(v).y},position:"BR",get fontColor(){return _(d)},fontWeight:w});var $=F(M);Br($,{get cells(){return E().cells2},get shape(){return _(o)}});var te=F($);Ss(te,{value:A,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(d)},fontWeight:w}),H(T),L(t,T),se()}var A6=ne('<g class="element-group"><!></g>'),x6=ne('<g class="underlay-layer"></g>');function S6(t,e){oe(e,!1);const n=Ye(),r=()=>ge($2,"$underlayElementsStore",n),i=()=>ge(vi,"$enableFogMaskStore",n),o=S(),s=S();D(()=>r(),()=>{O(o,r())}),D(()=>i(),()=>{O(s,i())}),be(),fe();var l=x6();qe(l,5,()=>_(o),pt,(u,d)=>{var g=Ee(),h=ee(g);{var v=m=>{var E=A6(),I=Y(E);{var b=A=>{var T=Ee(),k=ee(T);qe(k,1,()=>Object.entries(_(d).constraints),U=>U[0],(U,j)=>{n6(U,{get tool(){return _(j)[1]},get c_id(){return _(j)[0]}})}),L(A,T)},w=A=>{var T=Ee(),k=ee(T);{var U=M=>{var $=Ee(),te=ee($);qe(te,1,()=>Object.entries(_(d).constraints),ae=>ae[0],(ae,ie)=>{d6(ae,{get tool(){return _(ie)[1]},get c_id(){return _(ie)[0]}})}),L(M,$)},j=M=>{var $=Ee(),te=ee($);{var ae=ce=>{var we=Ee(),Z=ee(we);qe(Z,1,()=>Object.entries(_(d).constraints),Ie=>Ie[0],(Ie,me)=>{C6(Ie,{get tool(){return _(me)[1]},get c_id(){return _(me)[0]}})}),L(ce,we)},ie=ce=>{var we=Ee(),Z=ee(we);{var Ie=Oe=>{var Se=Ee(),Ae=ee(Se);qe(Ae,1,()=>Object.entries(_(d).constraints),Re=>Re[0],(Re,$e)=>{I6(Re,{get tool(){return _($e)[1]},get c_id(){return _($e)[0]}})}),L(Oe,Se)},me=Oe=>{var Se=Ee(),Ae=ee(Se);{var Re=st=>{var ut=Ee(),Ct=ee(ut);qe(Ct,1,()=>Object.entries(_(d).constraints),dt=>dt[0],(dt,bt)=>{O6(dt,{get tool(){return _(bt)[1]},get c_id(){return _(bt)[0]}})}),L(st,ut)},$e=st=>{var ut=Ee(),Ct=ee(ut);{var dt=bt=>{var It=Ee(),In=ee(It);qe(In,1,()=>Object.entries(_(d).constraints),dn=>dn[0],(dn,yr)=>{nm(dn,{get tool(){return _(yr)[1]},get c_id(){return _(yr)[0]}})}),L(bt,It)};Q(Ct,bt=>{Kr(_(d).tool_id)&&bt(dt)},!0)}L(st,ut)};Q(Ae,st=>{Rs(_(d).tool_id)?st(Re):st($e,!1)},!0)}L(Oe,Se)};Q(Z,Oe=>{Ao(_(d).tool_id)?Oe(Ie):Oe(me,!1)},!0)}L(ce,we)};Q(te,ce=>{Oo(_(d).tool_id)?ce(ae):ce(ie,!1)},!0)}L(M,$)};Q(k,M=>{yo(_(d).tool_id)?M(U):M(j,!1)},!0)}L(A,T)};Q(I,A=>{Gd(_(d).tool_id)?A(b):A(w,!1)})}H(E),J(()=>x(E,"data-toolId",_(d).tool_id)),L(m,E)};Q(h,m=>{_(d).constraints&&m(v)})}L(u,g)}),H(l),J(()=>x(l,"mask",_(s)?"url(#fog-mask-fog)":null)),L(t,l),se()}var L6=ne('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),N6=ne('<g class="center-corner-or-edge-tool-preview"><!></g>');function D6(t,e){oe(e,!1);const n=S(),r=S(),i=S(),o=S();let s=G(e,"tool_preview",8);D(()=>X(s()),()=>{O(n,s().tool)}),D(()=>X(s()),()=>{O(r,s().mode)}),D(()=>X(s()),()=>{O(i,s().match_id)}),D(()=>_(n),()=>{O(o,_(n).cell)}),be(),fe();var l=Ee(),u=ee(l);{var d=h=>{var v=L6();x(v,"opacity",.5);var m=Y(v);Ql(m,{get cx(){return _(o).c},get cy(){return _(o).r},get c_id(){return _(i)}}),H(v),L(h,v)},g=h=>{var v=N6();x(v,"opacity",.5);var m=Y(v);tm(m,{get tool(){return _(n)}}),H(v),L(h,v)};Q(u,h=>{_(r)==="remove"&&_(i)?h(d):h(g,!1)})}L(t,l),se()}var R6=ne('<line class="positive-diagonal"></line>'),T6=ne('<line class="negative-diagonal"></line>'),k6=ne('<g class="element-group"><!></g>');function M6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(hn,"$gridStore",n),i=S(),o=S(),s=S(),l=S(),u=S(),d=S(),g=S(),h=S(),v=S(),m=S();let E=G(e,"element",8);const I=0,b=0,w=0,A=0;D(()=>X(E()),()=>{O(i,E().tool_id)}),D(()=>(X(E()),hh),()=>{O(o,un(E().tool_id,Ht)??hh)}),D(()=>_(o),()=>{var M;O(s,((M=_(o))==null?void 0:M.strokeWidth)??.02)}),D(()=>_(o),()=>{var M;O(l,((M=_(o))==null?void 0:M.stroke)??"black")}),D(()=>r(),()=>{O(u,r())}),D(()=>(_(i),f),()=>{O(d,_(i)===f.POSITIVE_DIAGONAL||_(i)===f.POSITIVE_ANTIDIAGONAL||_(i)===f.PARITY_MIRROR_POSITIVE_DIAGONAL)}),D(()=>_(u),()=>{O(g,_(u).nCols)}),D(()=>_(u),()=>{O(h,_(u).nRows)}),D(()=>_(u),()=>{O(v,_(u).nCols)}),D(()=>_(u),()=>{O(m,_(u).nRows)}),be(),fe();var T=k6(),k=Y(T);{var U=M=>{var $=R6();x($,"x2",A),x($,"y1",w),J(()=>{x($,"x1",_(g)),x($,"y2",_(h)),x($,"stroke",_(l)),x($,"stroke-width",_(s))}),L(M,$)},j=M=>{var $=T6();x($,"x1",I),x($,"y1",b),J(()=>{x($,"x2",_(v)),x($,"y2",_(m)),x($,"stroke",_(l)),x($,"stroke-width",_(s))}),L(M,$)};Q(k,M=>{_(d)?M(U):M(j,!1)})}H(T),J(()=>x(T,"data-toolId",E().tool_id)),L(t,T),se()}function U6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(j2,"$diagonalElementsStore",n),i=S();D(()=>r(),()=>{O(i,r())}),be();var o=Ee(),s=ee(o);qe(s,1,()=>_(i),pt,(l,u)=>{M6(l,{get element(){return _(u)}})}),L(t,o),se()}var G6=ne('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function $6(t){var e=G6(),n=Y(e);x(n,"opacity",.5),H(e),L(t,e)}var F6=ne('<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" class="svelte-1qi1v0f"><rect class="fog-mask-white svelte-1qi1v0f"></rect><g class="fog-mask-black svelte-1qi1v0f"><use href="#fog-edge"></use></g></mask>'),P6=ne('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge"><use class="fog-edge-1 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-2 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-3 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-4 svelte-1qi1v0f" href="#fog-shape"></use><use href="#fog-shape"></use></g><!><mask id="fog-mask-light" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1qi1v0f"></rect><rect class="fog-mask-black svelte-1qi1v0f" mask="url(#fog-mask-fog)"></rect></mask></defs>');function z6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(vi,"$enableFogMaskStore",n),i=()=>ge(kl,"$solutionStore",n),o=()=>ge(hn,"$gridStore",n),s=()=>ge(yp,"$fogLightsStore",n),l=()=>ge(F2,"$customFogClearingStore",n),u=()=>ge(Pn,"$cellsStore",n),d=S(),g=S(),h=S(),v=S(),m=S(),E=S(),I=S(),b=S();let w=G(e,"gridShape",8);function A(Ae){const Re=[];if(!Ae)return Re;for(const $e of Object.entries(Ae)){const st=$e[1].cell,ut=_(h).getCell(st.r,st.c);ut&&Re.push(ut)}return Re}function T(Ae){const Re=[];for(const $e of Ae)$e.value!==null&&!$e.given&&Re.push($e);return Re}function k(Ae,Re){const $e=[];if(Re)for(const st of Ae){const ut=Re[st.r][st.c];ut!==null&&st.value===ut&&!st.given&&$e.push(st)}return $e}function U(Ae,Re,$e){const st=A(Re);let ut=new Set(Ae);ut=ut.difference(new Set(st));let Ct=T(Ae);_(g)&&(Ct=k(Ct,_(g)));const dt=$e==null?void 0:$e.negative_constraints;if(dt){const It=new Set;!!dt[f.FOG_CLEARING_ITSELF]&&Ct.forEach(ye=>It.add(ye)),!!dt[f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS]&&Ct.forEach(ye=>_(h).getOrthogonallyAdjacentCells(ye).forEach(Te=>It.add(Te))),!!dt[f.FOG_CLEARING_DIAGONAL_NEIGHBOURS]&&Ct.forEach(ye=>_(h).getDiagonallyAdjacentCells(ye).forEach(Te=>It.add(Te))),!!dt[f.FOG_CLEARING_CONTAINING_ROW]&&Ct.forEach(ye=>_(h).getRow(ye.r).forEach(Te=>It.add(Te))),!!dt[f.FOG_CLEARING_CONTAINING_COLUMN]&&Ct.forEach(ye=>_(h).getCol(ye.c).forEach(Te=>It.add(Te))),!!dt[f.FOG_CLEARING_KNIGHTS_MOVE]&&Ct.forEach(ye=>_(h).getCellsByKnightMove(ye).forEach(Te=>It.add(Te))),ut=ut.difference(It)}return[...ut].map(It=>It.toCoords())}D(()=>r(),()=>{O(d,!r())}),D(()=>i(),()=>{O(g,i())}),D(()=>o(),()=>{O(h,o())}),D(()=>s(),()=>{O(v,s())}),D(()=>l(),()=>{O(m,l())}),D(()=>u(),()=>{O(I,u())}),D(()=>(_(I),_(v),_(m)),()=>{O(b,U(_(I),_(v),_(m)))}),D(()=>_(b),()=>{O(E,Co(_(b),0))}),be(),fe();var j=P6(),M=Y(j),$=Y(M);H(M);var te=F(M),ae=Y(te);x(ae,"stroke-width",.4);var ie=F(ae);x(ie,"stroke-width",.3);var ce=F(ie);x(ce,"stroke-width",.2);var we=F(ce);x(we,"stroke-width",.1),_i(),H(te);var Z=F(te);{var Ie=Ae=>{var Re=F6();x(Re,"x",0),x(Re,"y",0);var $e=Y(Re);x($e,"x",0),x($e,"y",0),_i(),H(Re),J(()=>{x(Re,"width",w().nCols),x(Re,"height",w().nRows),St(Re,"disabled",_(d)),x($e,"width",w().nCols),x($e,"height",w().nRows)}),L(Ae,Re)};Q(Z,Ae=>{_(d)||Ae(Ie)})}var me=F(Z);x(me,"x",0),x(me,"y",0);var Oe=Y(me);x(Oe,"x",0),x(Oe,"y",0);var Se=F(Oe);x(Se,"x",0),x(Se,"y",0),H(me),H(j),J(()=>{x($,"d",_(E)),x(me,"width",w().nCols),x(me,"height",w().nRows),x(Oe,"width",w().nCols),x(Oe,"height",w().nRows),x(Se,"width",w().nCols),x(Se,"height",w().nRows)}),L(t,j),se()}var H6=ne('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function W6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(vi,"$enableFogMaskStore",n),i=S();let o=G(e,"gridShape",8);D(()=>r(),()=>{O(i,r())}),be(),fe();var s=H6(),l=Y(s);x(l,"x",0),x(l,"y",0),H(s),J(()=>{x(l,"width",o().nCols),x(l,"height",o().nRows)}),L(t,s),se()}var B6=ne('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function Y6(t,e){oe(e,!1);const n=Ye(),r=()=>ge(hn,"$gridStore",n),i=()=>ge(Xs,"$boundingBoxStore",n),o=()=>ge(Pn,"$cellsStore",n),s=()=>ge(yp,"$fogLightsStore",n),l=()=>ge(Y2,"$cornerLineToolsStore",n),u=()=>ge(H2,"$edgeToolsStore",n),d=()=>ge(B2,"$cornerToolsStore",n),g=()=>ge(W2,"$centerCornerOrEdgeToolsStore",n),h=()=>ge(en,"$toolStore",n),v=()=>ge(Cs,"$outsideDirectionToolPreviewStore",n),m=()=>ge(Ja,"$simpleCellToolPreviewStore",n),E=()=>ge(el,"$singleCellArrowPreviewStore",n),I=()=>ge(tl,"$singleCellMultiArrowPreviewStore",n),b=()=>ge(nl,"$edgeToolPreviewStore",n),w=()=>ge(rl,"$cornerToolPreviewStore",n),A=()=>ge(il,"$centerCornerOrEdgeToolPreviewStore",n),T=S(),k=S(),U=S();let j=G(e,"svgRef",12,null);function M(tt){return`${tt.x} ${tt.y} ${tt.width} ${tt.height}`}D(()=>r(),()=>{O(T,r())}),D(()=>_(T),()=>{O(k,{nRows:_(T).nRows,nCols:_(T).nCols})}),D(()=>i(),()=>{O(U,i())}),be(),fe();var $=B6();J(()=>x($,"viewBox",M(_(U))));var te=Y($);$6(te);var ae=F(te);z6(ae,{get gridShape(){return _(k)}});var ie=F(ae);Cz(ie,{get grid(){return r()}});var ce=F(ie);W6(ce,{get gridShape(){return _(k)}});var we=F(ce);Z8(we,{get gridShape(){return _(k)}});var Z=F(we);qe(Z,5,o,pt,(tt,qo)=>{Xz(tt,{get cell(){return _(qo)}})}),H(Z);var Ie=F(Z);g4(Ie,{});var me=F(Ie);SH(me,{get element(){return s()}});var Oe=F(me);S6(Oe,{});var Se=F(Oe);U6(Se,{});var Ae=F(Se);ez(Ae,{});var Re=F(Ae);vz(Re,{});var $e=F(Re);Va($e,{get elements(){return l()},g_name:"corner-line-tools-layer",Component:uH});var st=F($e);mz(st,{get gridShape(){return _(k)}});var ut=F(st);X8(ut,{});var Ct=F(ut);Va(Ct,{get elements(){return u()},g_name:"edge-tools-layer",Component:mH});var dt=F(Ct);Va(dt,{get elements(){return d()},g_name:"corner-tools-layer",Component:V4});var bt=F(dt);Va(bt,{get elements(){return g()},g_name:"center-corner-edge-tools-layer",Component:J4});var It=F(bt);d4(It,{});var In=F(It);qe(In,5,o,pt,(tt,qo)=>{jz(tt,{get cell(){return _(qo)}})}),H(In);var dn=F(In);N4(dn,{});var yr=F(dn);A4(yr,{});var Or=F(yr);{var kr=tt=>{nm(tt,{get tool(){return v()}})};Q(Or,tt=>{Kr(h())&&v()&&tt(kr)})}var ze=F(Or);{var ye=tt=>{ZH(tt,{get tool_preview(){return m()}})};Q(ze,tt=>{wl(h())&&h()!==f.FOG_LIGHTS&&m()&&tt(ye)})}var Te=F(ze);{var He=tt=>{zH(tt,{get tool_preview(){return E()}})};Q(Te,tt=>{$i(h())&&E()&&tt(He)})}var Mt=F(Te);{var Js=tt=>{im(tt,{get tool(){return I()}})};Q(Mt,tt=>{Io(h())&&I()&&tt(Js)})}var ea=F(Mt);{var mi=tt=>{RH(tt,{get tool_preview(){return b()}})};Q(ea,tt=>{wo(h())&&b()&&tt(mi)})}var wn=F(ea);{var Ei=tt=>{MH(tt,{get tool_preview(){return w()}})};Q(wn,tt=>{Ns(h())&&w()&&tt(Ei)})}var Hi=F(wn);{var tc=tt=>{D6(tt,{get tool_preview(){return A()}})};Q(Hi,tt=>{Ds(h())&&A()&&tt(tc)})}H($),ki($,tt=>j(tt),()=>j()),L(t,$),se()}function j6(t){return iO(t)?(by(),!0):!1}function K6(t){return oO(t)?(vp(),!0):!1}function V6(t){return sO(t)?(pp(),!0):!1}function Hu(t){(j6(t)||K6(t)||V6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}function X6(t,e){if(!e)return;const n=bn(t,e);if(!n)return;const r=t.ctrlKey,i=-t.deltaY,o=i>0?1.1:i<0?1/1.1:0;return{event:t,point:n,ctrl:r,zoom_factor:o,delta:i}}class q6{constructor(){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"onWheel",null);ve(this,"_isDown",!1);ve(this,"_lastPoint",null);ve(this,"_pointerId",null)}pointerDown(e,n){if(e.button!==1||!n)return;const r=new Ue(e.clientX,e.clientY);if(r&&(this._pointerId=e.pointerId,e.currentTarget instanceof Element&&e.currentTarget.setPointerCapture(e.pointerId),this._isDown=!0,this._lastPoint=r,this.onDragStart)){const i={event:e,point:r};this.onDragStart(i)}}pointerMove(e,n){if(!this._isDown||this._pointerId!==null&&e.pointerId!==this._pointerId||!n)return;const r=new Ue(e.clientX,e.clientY);if(!r||!this._lastPoint)return;const i=r.subtract(this._lastPoint),o={event:e,point:i};this._lastPoint=r,this.onDrag&&this.onDrag(o)}pointerUp(e){this._pointerId!==null&&e.pointerId!==this._pointerId||e.button===1&&(this._pointerId!==null&&e.currentTarget instanceof Element&&e.currentTarget.releasePointerCapture(this._pointerId),this._isDown&&(this._isDown=!1,this.onDragEnd&&this.onDragEnd()),this._lastPoint=null,this._pointerId=null)}wheel(e,n){const r=X6(e,n);r&&this.onWheel&&this.onWheel(r)}}const so=new q6;function Z6(t){so.onDrag=r=>{Ck(r)},so.onWheel=r=>{mk(r),Ek(r)};const e=At.throttle(r=>{so.pointerMove(r,t)},10);return{pointerDown(r){r.button===1&&r.preventDefault(),so.pointerDown(r,t)},pointerMove(r){e(r)},pointerUp(r){so.pointerUp(r)},keyUp(){},keyDown(){},wheelEvent(r){so.wheel(r,t)}}}var Q6=ue('<button class="form-button zoom-reset svelte-11c686j">Reset zoom</button>'),J6=ue('<div class="board-container svelte-11c686j" tabindex="-1"><!> <!></div>');function eW(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ap,"$InputHandlerStore",n),i=()=>ge(po,"$svgRefStore",n),o=()=>ge(Eo,"$currentScaleStore",n),s=S(),l=S();let u=S(null);function d(w){return A=>{w&&_(s)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(u))&&w(A)}}function g(){l_()}D(()=>r(),()=>{O(s,r())}),D(()=>i(),()=>{O(l,Z6(i()))}),be(),fe();var h=J6();Ne("keydown",wu,function(...w){Hu==null||Hu.apply(this,w)});var v=lh(()=>{var w;return d((w=_(s))==null?void 0:w.keyDown)});Ne("keydown",wu,function(...w){var A;(A=_(v))==null||A.apply(this,w)});var m=lh(()=>{var w;return d((w=_(s))==null?void 0:w.keyUp)});Ne("keyup",wu,function(...w){var A;(A=_(m))==null||A.apply(this,w)});var E=Y(h);Y6(E,{get svgRef(){return av(),i()},set svgRef(w){go(po,w)},$$legacy:!0});var I=F(E,2);{var b=w=>{var A=Q6();Ne("click",A,io(Fn(g)),!0),L(w,A)};Q(I,w=>{o()!==1&&w(b)})}H(h),ki(h,w=>O(u,w),()=>_(u)),Ne("pointerdown",h,io(w=>{_(l).pointerDown(w)}),!0),Ne("pointermove",h,w=>{_(l).pointerMove(w)},!0),Ne("pointerup",h,w=>{_(l).pointerUp(w)},!0),Ne("pointercancel",h,w=>{_(l).pointerUp(w)},!0),Ne("wheel",h,io(Fn(w=>{w.currentTarget.focus(),_(l).wheelEvent&&_(l).wheelEvent(w)})),!0),Ne("pointerdown",h,io(Fn(w=>{var A;w.currentTarget.focus(),(A=_(s))==null||A.pointerDown(w)})),!0),Ne("pointermove",h,io(Fn(w=>{var A;w.currentTarget.focus(),(A=_(s))==null||A.pointerMove(w)})),!0),Ne("pointerup",h,io(Fn(w=>{var A;w.currentTarget.focus(),(A=_(s))==null||A.pointerUp(w)})),!0),L(t,h),se()}var tW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function nW(t){var e=tW();L(t,e)}var rW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function iW(t){var e=rW();L(t,e)}var oW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function sW(t){var e=oW();L(t,e)}var aW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function lW(t){var e=aW();L(t,e)}var cW=ue('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function uW(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Po,"$commandHistoryStore",n),i=()=>ge(dd,"$selectOnStore",n),o=S(),s=S();function l(){vp()}function u(){pp()}function d(){console.log("check")}function g(){go(dd,!i())}D(()=>r(),()=>{O(o,r()._undoStack.length===0)}),D(()=>r(),()=>{O(s,r()._redoStack.length===0)}),be(),fe();var h=cW(),v=Y(h),m=Y(v);lW(m),H(v);var E=F(v,2),I=Y(E);iW(I),H(E);var b=F(E,2);b.disabled=!0;var w=Y(b);nW(w),H(b);var A=F(b,2),T=Y(A);sW(T),H(A),H(h),J(()=>{v.disabled=_(o),E.disabled=_(s),x(A,"aria-checked",i()),St(A,"active",i())}),Ne("click",v,l),Ne("click",E,u),Ne("click",b,d),Ne("click",A,g),L(t,h),se()}var dW=ue('<label class="entry-panel-label number-pad-button number-pad-selector svelte-bixb30"><input type="radio" class="svelte-bixb30"> <div class="selector-color svelte-bixb30"></div></label>'),_W=ue('<button class="entry-panel-button number-pad-button svelte-bixb30"><div class="digit-button-text svelte-bixb30"> </div> <div class="digit-button-color svelte-bixb30"></div></button>'),fW=ue('<button role="switch" class="entry-panel-button letter-button svelte-bixb30" value="Letter"><span class="num svelte-bixb30">9</span>/<span class="letter svelte-bixb30">A</span></button>'),gW=ue('<div class="number-pad svelte-bixb30"><!> <!>  <button class="entry-panel-button delete-button svelte-bixb30" value="Delete"><svg class="icon svelte-bixb30" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function hW(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n),i=()=>ge(gl,"$penColorStore",n),o=()=>ge(Ap,"$InputHandlerStore",n),s=S(),l=S(),u=[];let d=G(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let v=S(!1);function m(M){return M?h:g}function E(M){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(M)}function I(M){const $=M.currentTarget;if(!$)return;const te=$.getAttribute("aria-checked");O(v,te!=="true")}D(()=>r(),()=>{O(s,r().penToolActive)}),D(()=>r(),()=>{O(l,r().letterToolActive)}),be(),fe();var b=gW(),w=Y(b);{var A=M=>{var $=Ee(),te=ee($);qe(te,1,()=>g,pt,(ae,ie)=>{var ce=dW(),we=Y(ce);cn(we);var Z;_i(2),H(ce),J(()=>{x(ce,"data-value",_(ie)),St(ce,"active",i()===_(ie)),Z!==(Z=_(ie))&&(we.value=(we.__value=_(ie))==null?"":_(ie))}),Cd(u,[],we,()=>(_(ie),i()),Ie=>go(gl,Ie)),L(ae,ce)}),L(M,$)},T=M=>{var $=Ee(),te=ee($);qe(te,1,()=>m(_(v)),pt,(ae,ie)=>{var ce=_W(),we=Y(ce),Z=Y(we,!0);H(we),_i(2),H(ce),J(()=>{ju(ce,_(ie)),it(Z,_(ie))}),Ne("click",ce,function(...Ie){var me;(me=o()&&o().padClick)==null||me.apply(this,Ie)}),L(ae,ce)}),L(M,$)};Q(w,M=>{d()===f.PEN_TOOL&&_(s)?M(A):M(T,!1)})}var k=F(w,2);{var U=M=>{var $=fW();J(()=>{x($,"aria-checked",_(v)),St($,"letter-checked",_(v)),St($,"num-checked",!_(v))}),Ne("click",$,I),L(M,$)};Q(k,M=>{_(l)&&E(d())&&M(U)})}var j=F(k,2);H(b),J(()=>{St(b,"digit",d()===f.DIGIT),St(b,"center",d()===f.CENTER_PM),St(b,"corner",d()===f.CORNER_PM),St(b,"color",d()===f.HIGHLIGHTS),St(b,"pen",d()===f.PEN_TOOL),St(j,"letter-tool",_(l))}),Ne("click",j,function(...M){var $;($=o()&&o().padClick)==null||$.apply(this,M)}),L(t,b),se()}var vW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function pW(t){var e=vW();L(t,e)}var mW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function EW(t){var e=mW();L(t,e)}var CW=ue('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function hs(t,e){oe(e,!1);const n=[];let r=G(e,"selectedTool",12),i=G(e,"value",8),o=G(e,"title",8,void 0);function s(){_d(i())}fe();var l=CW(),u=Y(l);cn(u);var d,g=F(u,2);yt(g,e,"default",{}),H(l),J(()=>{x(l,"title",o()),St(l,"active",i()===r()),d!==(d=i())&&(u.value=(u.__value=i())==null?"":i())}),Cd(n,[],u,()=>(i(),r()),r),Ne("change",u,s),L(t,l),se()}var bW=ue('<span aria-hidden="true">1</span>'),IW=ue('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),wW=ue('<span aria-hidden="true" style="font-size: 50%">123</span>'),yW=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),OW=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),AW=ue('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function xW(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Ln,"$settingsStore",n);let i=G(e,"selectedTool",12);fe();var o=AW(),s=Y(o);hs(s,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=bW();L(v,E)},$$slots:{default:!0},$$legacy:!0});var l=F(s,2);hs(l,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=IW();L(v,E)},$$slots:{default:!0},$$legacy:!0});var u=F(l,2);hs(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=wW();L(v,E)},$$slots:{default:!0},$$legacy:!0});var d=F(u,2);hs(d,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=yW(),I=Y(E);pW(I),H(E),L(v,E)},$$slots:{default:!0},$$legacy:!0});var g=F(d,2);{var h=v=>{hs(v,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=OW(),b=Y(I);EW(b),H(I),L(m,I)},$$slots:{default:!0},$$legacy:!0})};Q(g,v=>{r().penToolActive&&v(h)})}H(o),L(t,o),se()}var SW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function LW(t){var e=SW();L(t,e)}var NW=ue('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Jl(t,e){let n=G(e,"title",8,void 0),r=G(e,"clickCb",8,void 0);var i=NW(),o=Y(i),s=Y(o);yt(s,e,"default",{}),H(o),H(i),J(()=>x(i,"title",n())),Ne("click",i,function(...l){var u;(u=r())==null||u.apply(this,l)}),L(t,i)}var DW=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),RW=ue('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function TW(t,e){oe(e,!1);let n=G(e,"showModal",12,!1);function r(){n(!1)}function i(){Ep(),hl(),n(!1)}fe(),pi(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,s)=>{var l=RW(),u=F(Y(l),2);Fl(u,{children:(d,g)=>{var h=DW(),v=ee(h),m=F(v,2);Ne("click",v,i),Ne("click",m,r),L(d,h)},$$slots:{default:!0}}),H(l),L(o,l)},$$slots:{default:!0},$$legacy:!0}),se()}var kW=ue("<!> <!>",1);function MW(t){let e=S(!1);function n(){O(e,!0)}var r=kW(),i=ee(r);Jl(i,{title:"Restart",clickCb:n,children:(s,l)=>{LW(s)},$$slots:{default:!0}});var o=F(i,2);TW(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var UW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function GW(t){var e=UW();L(t,e)}var $W=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function FW(t){var e=$W();L(t,e)}function PW(t){let e=S(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),O(e,!_(e))}Jl(t,{title:"Fullscreen",clickCb:o,children:(s,l)=>{var u=Ee(),d=ee(u);{var g=v=>{FW(v)},h=v=>{GW(v)};Q(d,v=>{_(e)?v(g):v(h,!1)})}L(s,u)},$$slots:{default:!0}})}function cm(t,e){oe(e,!1);let n=G(e,"token",8),r=G(e,"renderers",8),i=G(e,"options",8);fe();var o=Ee(),s=ee(o);{var l=u=>{var d=Ee(),g=ee(d);Ed(g,()=>r()[n().type],(h,v)=>{v(h,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=Ee(),b=ee(I);{var w=T=>{ml(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=T=>{var k=ay();J(()=>it(k,n().raw)),L(T,k)};Q(b,T=>{"tokens"in n()&&n().tokens?T(w):T(A,!1)})}L(m,I)},$$slots:{default:!0}})}),L(u,d)};Q(s,u=>{r()[n().type]&&u(l)})}L(t,o),se()}function ml(t,e){let n=G(e,"tokens",8),r=G(e,"renderers",8),i=G(e,"options",8);var o=Ee(),s=ee(o);{var l=u=>{var d=Ee(),g=ee(d);qe(g,1,n,pt,(h,v)=>{cm(h,{get token(){return _(v)},get renderers(){return r()},get options(){return i()}})}),L(u,d)};Q(s,u=>{n()&&u(l)})}L(t,o)}function um(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function dm(t){return t.startsWith("/")||t.startsWith("#")}function zW(t,e){return e.slug(t).replace(/--+/g,"-")}function HW(t,e){oe(e,!1);let n=G(e,"token",8),r=G(e,"options",8);const i=void 0;let o=S();D(()=>(X(n()),X(r())),()=>{O(o,zW(n().text,r().slugger))}),be(),fe();var s=Ee(),l=ee(s);return uv(l,()=>`h${n().depth}`,!1,(u,d)=>{let g;J(()=>g=lv(u,g,{id:_(o)},void 0,u.namespaceURI===pd,u.nodeName.includes("-")));var h=Ee(),v=ee(h);yt(v,e,"default",{}),L(d,h)}),L(t,s),ot(e,"renderers",i),se({renderers:i})}var WW=ue("<blockquote><!></blockquote>");function BW(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=WW(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}function YW(t,e){oe(e,!1);let n=G(e,"token",8),r=G(e,"options",8),i=G(e,"renderers",8),o=S();D(()=>X(n()),()=>{O(o,n().ordered?"ol":"ul")}),be(),fe();var s=Ee(),l=ee(s);uv(l,()=>_(o),!1,(u,d)=>{let g;J(()=>g=lv(u,g,{start:n().start||1},void 0,u.namespaceURI===pd,u.nodeName.includes("-")));var h=Ee(),v=ee(h);qe(v,1,()=>n().items,pt,(m,E)=>{var I=ft(()=>({..._(E)}));cm(m,{get token(){return _(I)},get options(){return r()},get renderers(){return i()}})}),L(d,h)}),L(t,s),se()}var jW=ue("<li><!></li>");function KW(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=jW(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var VW=ue("<br>");function XW(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=VW();return L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var qW=ue("<pre><code> </code></pre>");function ZW(t,e){oe(e,!1);let n=G(e,"token",8);const r=void 0,i=void 0;fe();var o=qW(),s=Y(o),l=Y(s,!0);return H(s),H(o),J(()=>{dv(s,`lang-${n().lang}`),it(l,n().text)}),L(t,o),ot(e,"options",r),ot(e,"renderers",i),se({options:r,renderers:i})}var QW=ue("<code> </code>");function JW(t,e){oe(e,!1);let n=G(e,"token",8);const r=void 0,i=void 0;fe();var o=QW(),s=Y(o,!0);return J(()=>it(s,n().raw.slice(1,n().raw.length-1))),H(o),L(t,o),ot(e,"options",r),ot(e,"renderers",i),se({options:r,renderers:i})}var eB=ue('<th scope="col"><!></th>'),tB=ue("<td><!></td>"),nB=ue("<tr></tr>"),rB=ue("<table><thead><tr></tr></thead><tbody></tbody></table>");function iB(t,e){oe(e,!1);let n=G(e,"token",8),r=G(e,"options",8),i=G(e,"renderers",8);fe();var o=rB(),s=Y(o),l=Y(s);qe(l,5,()=>n().header,pt,(d,g)=>{var h=eB(),v=Y(h);ml(v,{get tokens(){return _(g).tokens},get options(){return r()},get renderers(){return i()}}),H(h),L(d,h)}),H(l),H(s);var u=F(s);qe(u,5,()=>n().rows,pt,(d,g)=>{var h=nB();qe(h,5,()=>_(g),pt,(v,m)=>{var E=tB(),I=Y(E);ml(I,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),H(E),L(v,E)}),H(h),L(d,h)}),H(u),H(o),L(t,o),se()}function oB(t,e){oe(e,!1);let n=G(e,"token",8);const r=void 0,i=void 0;fe();var o=Ee(),s=ee(o);return xy(s,()=>n().text),L(t,o),ot(e,"options",r),ot(e,"renderers",i),se({options:r,renderers:i})}var sB=ue("<p><!></p>");function aB(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=sB(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var lB=ue("<a><!></a>");function cB(t,e){oe(e,!1);let n=G(e,"token",8),r=G(e,"options",8);const i=void 0;fe();var o=lB();J(()=>x(o,"href",dm(n().href)?um(r().baseUrl,n().href):n().href));var s=Y(o);return yt(s,e,"default",{}),H(o),J(()=>x(o,"title",n().title)),L(t,o),ot(e,"renderers",i),se({renderers:i})}function uB(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ee(),s=ee(o);return yt(s,e,"default",{}),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var dB=ue("<dfn><!></dfn>");function _B(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=dB(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var fB=ue("<del><!></del>");function gB(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=fB(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var hB=ue("<em><!></em>");function vB(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=hB(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var pB=ue("<hr>");function mB(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=pB();return L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var EB=ue("<strong><!></strong>");function CB(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=EB(),s=Y(o);return yt(s,e,"default",{}),H(o),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}var bB=ue('<img class="markdown-image svelte-z38cge">');function IB(t,e){oe(e,!1);let n=G(e,"token",8),r=G(e,"options",8);const i=void 0;fe();var o=bB();return J(()=>x(o,"src",dm(n().href)?um(r().baseUrl,n().href):n().href)),J(()=>{x(o,"title",n().title),x(o,"alt",n().text)}),L(t,o),ot(e,"renderers",i),se({renderers:i})}function qh(t,e){oe(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ee(),s=ee(o);return yt(s,e,"default",{}),L(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),se({token:n,options:r,renderers:i})}const wB=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,yB=Object.hasOwnProperty;class OB{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=AB(e,n===!0);const o=i;for(;yB.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function AB(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(wB,"").replace(/ /g,"-"))}function w_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let zi=w_();function _m(t){zi=t}const fm=/[&<>"']/,xB=new RegExp(fm.source,"g"),gm=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,SB=new RegExp(gm.source,"g"),LB={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zh=t=>LB[t];function Gn(t,e){if(e){if(fm.test(t))return t.replace(xB,Zh)}else if(gm.test(t))return t.replace(SB,Zh);return t}const NB=/(^|[^\[])\^/g;function Dt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(NB,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function Qh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Os={exec:()=>null};function Jh(t,e){const n=t.replace(/\|/g,(o,s,l)=>{let u=!1,d=s;for(;--d>=0&&l[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function vs(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function DB(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function ev(t,e,n,r){const i=e.href,o=e.title?Gn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:i,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:o,text:Gn(s)}}function RB(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class El{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||zi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:vs(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=RB(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=vs(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:vs(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=vs(n[0],`
`).split(`
`),i="",o="";const s=[];for(;r.length>0;){let l=!1;const u=[];let d;for(d=0;d<r.length;d++)if(/^ {0,3}>/.test(r[d]))u.push(r[d]),l=!0;else if(!l)u.push(r[d]);else break;r=r.slice(d);const g=u.join(`
`),h=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,o=o?`${o}
${h}`:h;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=v,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);s[s.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,o=o.substring(0,o.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);s[s.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,o=o.substring(0,o.length-E.raw.length)+b.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let u=!1,d="",g="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;d=n[0],e=e.substring(d.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!h.trim(),E=0;if(this.options.pedantic?(E=2,g=h.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=h.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(d+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),U=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const j=e.split(`
`,1)[0];let M;if(v=j,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),M=v):M=v.replace(/\t/g,"    "),T.test(v)||k.test(v)||U.test(v)||w.test(v)||A.test(v))break;if(M.search(/[^ ]/)>=E||!v.trim())g+=`
`+M.slice(E);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(h)||k.test(h)||A.test(h))break;g+=`
`+v}!m&&!v.trim()&&(m=!0),d+=j+`
`,e=e.substring(j.length+1),h=M.slice(E)}}o.loose||(l?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(d)&&(l=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:d,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),o.raw+=d}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const d=o.items[u].tokens.filter(h=>h.type==="space"),g=d.length>0&&d.some(h=>/\n.*\n/.test(h.raw));o.loose=g}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Jh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(let l=0;l<r.length;l++)s.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:s.align[l]});for(const l of o)s.rows.push(Jh(l,s.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[d]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=vs(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=DB(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),ev(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return ev(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let l,u,d=s,g=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+s);(i=h.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(u=[...l].length,i[3]||i[4]){d+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){g+=u;continue}if(d-=u,d>0)continue;u=Math.min(u,u+d+g);const v=[...i[0]][0].length,m=e.slice(0,s+i.index+v+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Gn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Gn(n[1]),i="mailto:"+r):(r=Gn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Gn(n[0]),o="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=Gn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Gn(n[0]),{type:"text",raw:n[0],text:r}}}}const TB=/^(?:[ \t]*(?:\n|$))+/,kB=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,MB=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,UB=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hm=/(?:[*+-]|\d{1,9}[.)])/,vm=Dt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,hm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),y_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,GB=/^[^\n]+/,O_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,$B=Dt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",O_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),FB=Dt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,hm).getRegex(),ec="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",A_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,PB=Dt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",A_).replace("tag",ec).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pm=Dt(y_).replace("hr",Zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex(),zB=Dt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",pm).getRegex(),x_={blockquote:zB,code:kB,def:$B,fences:MB,heading:UB,hr:Zs,html:PB,lheading:vm,list:FB,newline:TB,paragraph:pm,table:Os,text:GB},tv=Dt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex(),HB={...x_,table:tv,paragraph:Dt(y_).replace("hr",Zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",tv).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex()},WB={...x_,html:Dt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",A_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Os,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Dt(y_).replace("hr",Zs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",vm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},mm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,BB=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Em=/^( {2,}|\\)\n(?!\s*$)/,YB=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Qs="\\p{P}\\p{S}",jB=Dt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Qs).getRegex(),KB=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,VB=Dt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Qs).getRegex(),XB=Dt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Qs).getRegex(),qB=Dt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Qs).getRegex(),ZB=Dt(/\\([punct])/,"gu").replace(/punct/g,Qs).getRegex(),QB=Dt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),JB=Dt(A_).replace("(?:-->|$)","-->").getRegex(),e9=Dt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",JB).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,t9=Dt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Cm=Dt(/^!?\[(label)\]\[(ref)\]/).replace("label",Cl).replace("ref",O_).getRegex(),bm=Dt(/^!?\[(ref)\](?:\[\])?/).replace("ref",O_).getRegex(),n9=Dt("reflink|nolink(?!\\()","g").replace("reflink",Cm).replace("nolink",bm).getRegex(),S_={_backpedal:Os,anyPunctuation:ZB,autolink:QB,blockSkip:KB,br:Em,code:BB,del:Os,emStrongLDelim:VB,emStrongRDelimAst:XB,emStrongRDelimUnd:qB,escape:mm,link:t9,nolink:bm,punctuation:jB,reflink:Cm,reflinkSearch:n9,tag:e9,text:YB,url:Os},r9={...S_,link:Dt(/^!?\[(label)\]\((.*?)\)/).replace("label",Cl).getRegex(),reflink:Dt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cl).getRegex()},hd={...S_,escape:Dt(mm).replace("])","~|])").getRegex(),url:Dt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},i9={...hd,br:Dt(Em).replace("{2,}","*").getRegex(),text:Dt(hd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xa={normal:x_,gfm:HB,pedantic:WB},ps={normal:S_,gfm:hd,breaks:i9,pedantic:r9};class zn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zi,this.options.tokenizer=this.options.tokenizer||new El,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Xa.normal,inline:ps.normal};this.options.pedantic?(n.block=Xa.pedantic,n.inline=ps.pedantic):this.options.gfm&&(n.block=Xa.gfm,this.options.breaks?n.inline=ps.breaks:n.inline=ps.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xa,inline:ps}}static lex(e,n){return new zn(n).lex(e)}static lexInline(e,n){return new zn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(g=>{d=g.call({lexer:this},u),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,s=e,l,u,d;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)g.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(d=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,d)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},h),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(o=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(d=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class bl{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||zi}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Gn(i)+'">'+(r?o:Gn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Gn(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Qh(e);if(o===null)return i;e=o;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=Qh(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class L_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class lr{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||zi,this.options.renderer=this.options.renderer||new bl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new L_}static parse(e,n){return new lr(n).parse(e)}static parseInline(e,n){return new lr(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){r+=u||"";continue}}const s=o;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let l=s,u=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],u+=`
`+this.renderer.text(l);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=l||"";continue}}const s=o;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}}class As{constructor(e){ve(this,"options");ve(this,"block");this.options=e||zi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?zn.lex:zn.lexInline}provideParser(){return this.block?lr.parse:lr.parseInline}}ve(As,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class o9{constructor(...e){ve(this,"defaults",w_());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",lr);ve(this,"Renderer",bl);ve(this,"TextRenderer",L_);ve(this,"Lexer",zn);ve(this,"Tokenizer",El);ve(this,"Hooks",As);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const l=s;for(const u of l.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of l.rows)for(const d of u)r=r.concat(this.walkTokens(d.tokens,n));break}case"list":{const l=s;r=r.concat(this.walkTokens(l.items,n));break}default:{const l=s;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(u=>{const d=l[u].flat(1/0);r=r.concat(this.walkTokens(d,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const s=n.renderers[o.name];s?n.renderers[o.name]=function(...l){let u=o.renderer.apply(this,l);return u===!1&&(u=s.apply(this,l)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[o.level];s?s.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new bl(this.defaults);for(const s in r.renderer){if(!(s in o))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,u=r.renderer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new El(this.defaults);for(const s in r.tokenizer){if(!(s in o))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,u=r.tokenizer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new As;for(const s in r.hooks){if(!(s in o))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,u=r.hooks[l],d=o[l];As.passThroughHooks.has(s)?o[l]=g=>{if(this.defaults.async)return Promise.resolve(u.call(o,g)).then(v=>d.call(o,v));const h=u.call(o,g);return d.call(o,h)}:o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(l){let u=[];return u.push(s.call(this,l)),o&&(u=u.concat(o.call(this,l))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return zn.lex(e,n??this.defaults)}parser(e,n){return lr.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},s={...this.defaults,...o},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?zn.lex:zn.lexInline,d=s.hooks?s.hooks.provideParser():e?lr.parse:lr.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(g=>u(g,s)).then(g=>s.hooks?s.hooks.processAllTokens(g):g).then(g=>s.walkTokens?Promise.all(this.walkTokens(g,s.walkTokens)).then(()=>g):g).then(g=>d(g,s)).then(g=>s.hooks?s.hooks.postprocess(g):g).catch(l);try{s.hooks&&(r=s.hooks.preprocess(r));let g=u(r,s);s.hooks&&(g=s.hooks.processAllTokens(g)),s.walkTokens&&this.walkTokens(g,s.walkTokens);let h=d(g,s);return s.hooks&&(h=s.hooks.postprocess(h)),h}catch(g){return l(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Gn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Gi=new o9;function Nt(t,e){return Gi.parse(t,e)}Nt.options=Nt.setOptions=function(t){return Gi.setOptions(t),Nt.defaults=Gi.defaults,_m(Nt.defaults),Nt};Nt.getDefaults=w_;Nt.defaults=zi;Nt.use=function(...t){return Gi.use(...t),Nt.defaults=Gi.defaults,_m(Nt.defaults),Nt};Nt.walkTokens=function(t,e){return Gi.walkTokens(t,e)};Nt.parseInline=Gi.parseInline;Nt.Parser=lr;Nt.parser=lr.parse;Nt.Renderer=bl;Nt.TextRenderer=L_;Nt.Lexer=zn;Nt.lexer=zn.lex;Nt.Tokenizer=El;Nt.Hooks=As;Nt.parse=Nt;Nt.options;Nt.setOptions;Nt.use;Nt.walkTokens;Nt.parseInline;lr.parse;zn.lex;function s9(t){return new zn().lex(t)}const a9=()=>({heading:HW,blockquote:BW,list:YW,list_item:KW,br:XW,code:ZW,codespan:JW,table:iB,html:oB,paragraph:aB,link:cB,text:uB,def:_B,del:gB,em:vB,hr:mB,strong:CB,image:IB,space:qh,escape:qh}),l9=()=>({baseUrl:"/",slugger:new OB});function c9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},cv(()=>{console.warn=t})}function Im(t,e){oe(e,!1),c9();let n=G(e,"source",8),r=G(e,"options",24,()=>({})),i=G(e,"renderers",24,()=>({})),o=S(),s=S(),l=S();D(()=>(X(n()),X(i()),X(r())),()=>{O(o,s9(n())),O(s,{...a9(),...i()}),O(l,{...l9(),...r()})}),be(),fe(),ml(t,{get tokens(){return _(o)},get renderers(){return _(s)},get options(){return _(l)}}),se()}var u9=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),d9=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),_9=ue('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function f9(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Jr,"$puzzleMetaStore",n),i=S();let o=G(e,"showModal",12,!1);function s(u){return u?dl(u," & ",", "):"Anonymous"}function l(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{O(i,r())}),be(),fe(),pi(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,d)=>{var g=_9(),h=Y(g),v=Y(h,!0);H(h);var m=F(h,2),E=Y(m);J(()=>it(E,`by ${s(_(i).authors)??""}`)),H(m);var I=F(m,2),b=Y(I),w=ft(()=>l(_(i).ruleset));Im(b,{get source(){return _(w)}}),H(I);var A=F(I,2);{var T=j=>{var M=u9(),$=F(ee(M),2);J(()=>x($,"href",_(i).ctcUrl)),L(j,M)};Q(A,j=>{var M,$;($=(M=_(i))==null?void 0:M.ctcUrl)!=null&&$.length&&j(T)})}var k=F(A,2);{var U=j=>{var M=d9(),$=F(ee(M),2);J(()=>x($,"href",_(i).ctcYoutubeUrl)),L(j,M)};Q(k,j=>{var M,$;($=(M=_(i))==null?void 0:M.ctcYoutubeUrl)!=null&&$.length&&j(U)})}H(g),J(()=>{var j;return it(v,((j=_(i))==null?void 0:j.title)||"Puzzle")}),L(u,g)},$$slots:{default:!0},$$legacy:!0}),se()}var g9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function h9(t){var e=g9();L(t,e)}var v9=ue("<!> <!>",1);function p9(t){let e=S(!1);function n(){O(e,!0)}var r=v9(),i=ee(r);Jl(i,{title:"Rules",clickCb:n,children:(s,l)=>{h9(s)},$$slots:{default:!0}});var o=F(i,2);f9(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var m9=ue("<!> <!>",1);function E9(t){let e=S(!1);function n(){O(e,!0)}var r=m9(),i=ee(r);Jl(i,{title:"Settings",clickCb:n,children:(s,l)=>{xp(s)},$$slots:{default:!0}});var o=F(i,2);Sp(o,{get showModal(){return _(e)},set showModal(s){O(e,s)},$$legacy:!0}),L(t,r)}var C9=ue('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!></div>');function b9(t){var e=C9(),n=Y(e);E9(n);var r=F(n,2);p9(r);var i=F(r,2);PW(i);var o=F(i,2);MW(o),H(e),L(t,e)}var I9=ue('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function w9(t,e){oe(e,!1);const n=Ye(),r=()=>ge(po,"$svgRefStore",n),i=()=>ge(Jr,"$puzzleMetaStore",n),o=()=>ge(en,"$toolStore",n),s=S(),l=S();function u(){r()&&r().focus()}function d(ie){return ie?dl(ie," & ",", "):"Anonymous"}function g(ie){return ie&&ie.length?ie:"Normal sudoku rules apply."}D(()=>i(),()=>{O(s,i().title??"Sudoku")}),D(()=>i(),()=>{O(l,d(i().authors))}),be(),fe();var h=I9(),v=Y(h),m=Y(v),E=Y(m),I=Y(E,!0);H(E);var b=F(E,2),w=Y(b);H(b),H(m);var A=F(m,2),T=Y(A),k=ft(()=>g(i().ruleset));Im(T,{get source(){return _(k)}}),H(A),H(v);var U=F(v,2),j=Y(U);b9(j);var M=F(j,2),$=Y(M);uW($,{});var te=F($,2);hW(te,{get selectedTool(){return o()}});var ae=F(te,2);xW(ae,{get selectedTool(){return av(),o()},set selectedTool(ie){go(en,ie)},$$legacy:!0}),H(M),H(U),H(h),J(()=>{it(I,_(s)),it(w,`by ${_(l)??""}`)}),Ne("click",U,Fn(()=>{u()})),L(t,h),se()}var y9=ue('<div class="left-panel svelte-fwyvr2"><!></div>'),O9=ue('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function H9(t,e){oe(e,!1);const n=Ye(),r=()=>ge(Tl,"$gameModeStore",n),i=S();cv(async()=>{const v=window.location.origin,m=ch===""?v:`${v}/${ch}`;try{await y8({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const I="Failed to initialize MiniZinc: "+E.message;console.log(I)}}),D(()=>r(),()=>{O(i,r())}),be(),fe();var o=O9(),s=Y(o);{var l=v=>{var m=y9(),E=Y(m);K8(E),H(m),L(v,m)};Q(s,v=>{_(i)===bo.SETTING&&v(l)})}var u=F(s,2),d=Y(u);eW(d,{}),H(u);var g=F(u,2),h=Y(g);w9(h,{}),H(g),H(o),L(t,o),se()}export{H9 as G,l_ as a,z9 as b,P9 as d,NR as p,hl as r,ZR as s};
