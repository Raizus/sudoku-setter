var ly=Object.defineProperty;var cy=(t,e,n)=>e in t?ly(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>cy(t,typeof e!="symbol"?e+"":e,n);import{c as Yu,o as uy,p as dy,q as md,s as Le,a as N,t as le,d as Ee,u as ne,v as _y,m as fy}from"./disclose-version.X1mjziy_.js";import{i as ge}from"./legacy.CL9GlO2d.js";import{l as sv,h as ln,k as Ss,y as av,v as ws,R as gy,V as hy,U as vy,g as ju,i as lv,K as cv,a0 as py,j as my,u as ch,B as Ey,aK as Ed,z as Cy,x as by,a2 as Cd,as as uv,A as uh,aL as Iy,a3 as wy,a8 as yy,m as Oy,c as j,r as W,s as F,t as J,p as ie,aM as L,aN as be,a as oe,Z as f,aw as X,_ as O,$ as x,f as ee,aD as _i,aO as Ku,al as ft,aP as Ou,ak as dh}from"./utils.FBOUsyea.js";import{s as Be,a as fe,i as Q,b as ho,m as dv}from"./store.CwWqV19U.js";import{s as Nn,u as sr,r as Ay,t as xy}from"./global.z6zTwcYi.js";import{e as Qe,i as pt}from"./each.CQzofs9j.js";import{i as Sy,p as U,s as Ny}from"./props.CDZpVoAy.js";import{w as Nt,g as Re,d as Bn}from"./index.XPG9yTa8.js";import{b as Mi,c as bd}from"./this.CumUjykt.js";import{s as it}from"./render.C06zU-KV.js";import{r as cn,s as S,a as Vu,b as Ly,c as Ry,d as _v}from"./attributes.nocA7ieE.js";import{a as Dy,o as fv}from"./index-client.Dk2x2RJG.js";import{b as _h}from"./paths.C6tDwKeN.js";function Ty(t,e,n,r,i){var o=t,s="",l;sv(()=>{if(s===(s=e()??"")){ln&&Ss();return}l!==void 0&&(cv(l),l=void 0),s!==""&&(l=av(()=>{if(ln){ws.data;for(var u=Ss(),d=u;u!==null&&(u.nodeType!==8||u.data!=="");)d=u,u=gy(u);if(u===null)throw hy(),vy;Yu(ws,d),o=ju(u);return}var g=s+"",h=uy(g);Yu(lv(h),h.lastChild),o.before(h)}))})}function Ot(t,e,n,r,i){var l;ln&&Ss();var o=(l=e.$$slots)==null?void 0:l[n],s=!1;o===!0&&(o=e[n==="default"?"children":n],s=!0),o===void 0||o(t,s?()=>r:r)}function gv(t,e,n,r,i,o){let s=ln;ln&&Ss();var l,u,d=null;ln&&ws.nodeType===1&&(d=ws,Ss());var g=ln?ws:t,h;sv(()=>{const v=e()||null;var m=v==="svg"?Ed:null;v!==l&&(h&&(v===null?Cy(h,()=>{h=null,u=null}):v===u?by(h):cv(h)),v&&v!==u&&(h=av(()=>{if(d=ln?d:m?document.createElementNS(m,v):document.createElement(v),Yu(d,d),r){ln&&dy(v)&&d.append(document.createComment(""));var E=ln?lv(d):d.appendChild(my());ln&&(E===null?ch(!1):ju(E)),r(d,E)}Ey.nodes_end=d,g.before(d)})),l=v,l&&(u=l))},py),s&&(ch(!0),ju(g))}function Ls(t,e,n){var r=t.__className,i=vv(e);ln&&t.getAttribute("class")===i?t.__className=i:(r!==i||ln&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function hv(t,e,n){var r=t.__className,i=vv(e);ln&&t.className===i?t.__className=i:(r!==i||ln&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function vv(t,e){return(t??"")+""}function Et(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function ar(t,e,n=e){var r=Iy();md(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=xu(t)?Su(o):o,n(o),r&&o!==(o=e())){var s=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(l,t.value.length))}}),(ln&&t.defaultValue!==t.value||wy(e)==null&&t.value)&&n(xu(t)?Su(t.value):t.value),Cd(()=>{var i=e();xu(t)&&i===Su(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Au=new Set;function Id(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",s=t;let l=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),md(n,"change",()=>{var d=n.__value;o&&(d=fh(s,d,n.checked)),i(d)},()=>i(o?[]:null)),Cd(()=>{var d=r();if(ln&&n.defaultChecked!==n.checked){l=!0;return}o?(d=d||[],n.checked=d.includes(n.__value)):n.checked=Sy(n.__value,d)}),uv(()=>{var d=s.indexOf(n);d!==-1&&s.splice(d,1)}),Au.has(s)||(Au.add(s),uh(()=>{s.sort((d,g)=>d.compareDocumentPosition(g)===4?-1:1),Au.delete(s)})),uh(()=>{if(l){var d;if(o)d=fh(s,d,n.checked);else{var g=s.find(h=>h.checked);d=g==null?void 0:g.__value}i(d)}})}function fh(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function xu(t){var e=t.type;return e==="number"||e==="range"}function Su(t){return t===""?null:+t}function ky(t,e,n=e){md(t,"change",()=>{n(t.files)}),Cd(()=>{t.files=e()})}function ot(t,e,n){var r=yy(t,e);r&&r.set&&(t[e]=n,uv(()=>{t[e]=null}))}function My(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Fn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function oo(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Uy(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=Oy(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var Io=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Io||{}),wd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(wd||{}),pv=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t))(pv||{}),yd=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.PARITY_MIRROR_POSITIVE_DIAGONAL="Parity Mirror Positive Diagonal",t.PARITY_MIRROR_NEGATIVE_DIAGONAL="Parity Mirror Negative Diagonal",t))(yd||{}),mv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_CAGE_TOTALS_ARE_DIFFERENT="All Cage Totals Are Different",t.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE="Adjacent Cage Totals Are Consecutive",t.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT="Adjacent Cage Totals Are Different",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_SQUARES_GIVEN="All Squares Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.ALL_GALAXY_CENTERS_GIVEN="All Galaxy Centers Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(mv||{}),Ev=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(Ev||{}),Cv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION="Chaos Construction 2x2 Does Not Belong To The Same Region",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SHADED_BOUNDARIES="Shaded Boundaries",t.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN="Shaded Boundaries Adjacent Cell Sum Is Even",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.STAR_BATTLE="Star Battle",t.ONE_STAR_PER_GALAXY="One Star Per Galaxy",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.BUILD_YOUR_OWN_KILLER_CAGES="Build Your Own Killer Cages",t))(Cv||{}),bv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(bv||{}),Iv=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(Iv||{}),wv=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(wv||{}),yv=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(yv||{}),Ov=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION="Ying Yang Identical Digits Diagonally Belong To Same The Region",t))(Ov||{}),Av=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(Av||{}),xv=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY="Digits Do Not Repeat In A Galaxy",t))(xv||{}),Sv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.CAVE_WALL_SUGURU="Cave Wall Suguru",t.CAVE_CELLS_FILLOMINO="Cave Cells Fillomino",t))(Sv||{}),Nv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Nv||{}),Lv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Lv||{}),wl=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_SHADED_CELL="Yin Yang Shaded Cell",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.YIN_YANG_LABELED_SHADE_CELL="Yin Yang Labeled Shade Cell",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE="Cave Shaded Region Size Unshaded Seen Orthogonally Clue",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT="Chaos Construction Neighbour Cells Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.BYOK_CAGE_SIZE="BYOK Cage Size",t.BYOK_NOT_CAGE_CELL="BYOK Not Cage Cell",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(wl||{}),Od=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t.INTERNAL_LOOP_SKYSCRAPERS="Internal Loop Skyscrapers",t))(Od||{}),Ad=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Cells Not In The Same Region Arrows",t.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Seen Cells In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS="Shaded Boundaries Combined Count Arrows",t))(Ad||{}),xd=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.COMBINED_EDGE_CONSTRAINT="Combined Edge Constraint",t))(xd||{}),Sd=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Sd||{}),Nd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE="Yin Yang Californian Mountain Snake",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Nd||{}),Ld=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(Ld||{}),Rd=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Rd||{}),Dd=(t=>(t.CLONE_REGION="Clone Region",t))(Dd||{}),Td=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.CHAOS_CONSTRUCTION_X_INDEX_REGION="Chaos Construction X-Index Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(Td||{}),kd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(kd||{}),Md=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Md||{}),Ud=(t=>(t.MAZE_WALL="Maze Wall",t))(Ud||{}),Gd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Gd||{}),Rv=(t=>(t.VARIABLE_CONSTRAINT="Variable Constraint",t))(Rv||{}),$d=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))($d||{}),Dv=(t=>(t.FOG_LIGHTS="Fog Lights",t.CUSTOM_FOG_CLEARING="Custom Fog Clearing",t.FOG_CLEARING_ITSELF="Fog Clearing Itself",t.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS="Fog Clearing Orthogonal Neighbours",t.FOG_CLEARING_DIAGONAL_NEIGHBOURS="Fog Clearing Diagonal Neighbours",t.FOG_CLEARING_CONTAINING_ROW="Fog Clearing Containing Row",t.FOG_CLEARING_CONTAINING_COLUMN="Fog Clearing Containing Column",t.FOG_CLEARING_KNIGHTS_MOVE="Fog Clearing Knights Move",t))(Dv||{}),Tv=(t=>(t.PEN_TOOL="Pen Tool",t))(Tv||{});const Gy={...Cv,...Sv,...Nv,...xv,...Lv,...Av,...Ov,...yv,...wv,...Iv,...bv},kv={...mv,...yd,...pv,...Gy,...Ev},Mv={...wl,...Od,...Ad,...xd,...Sd,...Nd,...Ld,...Rd,...Dd,...Td,...kd,...Md,...Ud,...Gd,...Rv,...Dv},_={...wd,...kv,...Mv,...$d,...Tv};var H=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.OTHER_CONSTRAINTS="Other Constraints",t.FOG_TOOL="Fog Tool",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(H||{});function $y(t){return Object.values(yd).includes(t)}function Fy(t){return Object.values(kv).includes(t)}function Uv(t){return Object.values(Mv).includes(t)}function Py(t){return Object.values($d).includes(t)}function zy(t){return Uv(t)||Py(t)||Fy(t)}function yl(t){return Object.values(wl).includes(t)||t===_.COSMETIC_CELL_CENTER_SHAPE||t===_.FOG_LIGHTS}function Fi(t){return Object.values(Od).includes(t)||t===_.COSMETIC_CELL_ARROW}function wo(t){return Object.values(Ad).includes(t)||t===_.COSMETIC_CELL_MULTI_ARROW}function Fd(t){return yl(t)||Fi(t)||wo(t)}function yo(t){return Object.values(xd).includes(t)||t===_.COSMETIC_EDGE}function Rs(t){return Object.values(Sd).includes(t)||t===_.COSMETIC_CORNER}function Oo(t){return Object.values(Nd).includes(t)||t===_.COSMETIC_LINE||t===_.COSMETIC_LINE_WITH_POLYGON_ENDS||t===_.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Ao(t){return Object.values(Ld).includes(t)||t===_.COSMETIC_ARROW}function xo(t){return Object.values(Rd).includes(t)||t===_.COSMETIC_CAGE}function Ds(t){return Object.values(Md).includes(t)}function Gv(t){return Object.values(Ud).includes(t)}function Ts(t){return Object.values(Dd).includes(t)}function Xr(t){const e=Object.values(Td),n=Object.values(kd);return e.includes(t)||n.includes(t)||t===_.COSMETIC_OUTSIDE_DIRECTION}function Pd(t){return Object.values(Gd).includes(t)}function zd(t){return Object.values(wd).includes(t)}function Hy(t){return Xr(t)||Fd(t)||Oo(t)||Ao(t)||xo(t)||Ts(t)}const Wy=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint","Valued Global Constraint","Other Constraints"],By=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...Wy,"Fog Tool","Cosmetic Tool"];function Yy(t){for(const e of Object.values(_))if(e===t)return e}function jy(t,e){return Object.values(e).includes(t)}var B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function En(t,e,n){n!==void 0&&(t[e]=n)}function Ky(t){var e,n,r,i,o,s,l,u,d,g,h,v,m,E,b;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(s=t.angle)!=null&&s.editable||(l=t.fill)!=null&&l.editable||(u=t.stroke)!=null&&u.editable||(d=t.strokeWidth)!=null&&d.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(b=t.displayValue)!=null&&b.editable)}function Xu(t){var n,r,i,o,s,l,u,d,g,h,v,m,E,b,I,w,A,T,k,G,Y,M,P;const e={type:t.type};return En(e,"n",(n=t.n)==null?void 0:n.value),En(e,"r",(r=t.r)==null?void 0:r.value),En(e,"height",(i=t.height)==null?void 0:i.value),En(e,"width",(o=t.width)==null?void 0:o.value),En(e,"inset",(s=t.inset)==null?void 0:s.value),En(e,"angle",(l=t.angle)==null?void 0:l.value),En(e,"fill",(u=t.fill)==null?void 0:u.value),En(e,"stroke",(d=t.stroke)==null?void 0:d.value),En(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),En(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),En(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),En(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),En(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),En(e,"opacity",(b=t.opacity)==null?void 0:b.value),En(e,"displayValue",(I=t.displayValue)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:A.value,shortenTail:(k=(T=t.linePathOptions)==null?void 0:T.shortenTail)==null?void 0:k.value,bezierRounding:(Y=(G=t.linePathOptions)==null?void 0:G.bezierRounding)==null?void 0:Y.value,closeLoops:(P=(M=t.linePathOptions)==null?void 0:M.closeLoops)==null?void 0:P.value}),e}function Vy(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const gh={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},hh={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},vh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},al={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},qu={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ks={type:"Line",strokeWidth:.125,stroke:"gray"},Hd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},$v={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Xy={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},ph={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},mh={strokeWidth:.02,stroke:"black"},Ol=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,cr=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,So=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,qy=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,nn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,No=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Wd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ge=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Zy=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Qy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Jy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Lo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,eO=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,tO=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,nO=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function rO(t){return Fi(t)?Zy():wo(t)?Qy():t===_.XV?tO():yo(t)?Jy():xo(t)?Ol():Ao(t)?So():Xr(t)?qy():Oo(t)?Ge():Ts(t)?nO():""}var he=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.VALUE_TOOL=13]="VALUE_TOOL",t[t.PEN=14]="PEN",t))(he||{}),Lt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Lt||{}),Un=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Un||{}),ke=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(ke||{}),Sn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(Sn||{}),Bd=(t=>(t.CREATE="Create",t))(Bd||{});function iO(t){if(yl(t)||Fi(t)||wo(t)||Oo(t)||yo(t)||Rs(t)||xo(t)||Xr(t)||Ds(t))return ke;if(Ao(t))return Un;if(Ts(t))return Sn;if(Pd(t)||t===_.VARIABLE_CONSTRAINT)return Bd}function oO(t){if(yl(t)||Fi(t)||wo(t)||Oo(t)||yo(t)||Rs(t)||xo(t)||Xr(t)||Ds(t)||Ao(t)||Ts(t))return"Dynamic"}const Ms=[H.ARROW_CONSTRAINT,H.LOCAL_CONSTRAINT,H.ARROW_TOOL,H.LOCAL_ELEMENT],sO={inputOptions:{type:he.ARROW},toolId:_.ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:So(),tags:[],categories:Ms}},aO={inputOptions:{type:he.ARROW},toolId:_.AVERAGE_ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:So(),tags:[],categories:Ms}},lO={inputOptions:{type:he.ARROW,allowSelfIntersection:!0},toolId:_.BULBOUS_ARROW,shape:{type:B.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:So(),tags:[],categories:Ms}};he.ARROW,_.SQUARE_ROOT_ARROW,B.LINE,So();const cO={inputOptions:{type:he.ARROW},toolId:_.CHAOS_CONSTRUCTION_ARROW,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:So(),tags:[],categories:Ms}};function uO(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function dO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function _O(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function fO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function gO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const hO={Delete:null,Backspace:null};function vO(t,e=10){if(t in hO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function pO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function mO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function EO(t){const e={KeyZ:_.DIGIT,KeyX:_.CORNER_PM,KeyC:_.CENTER_PM,KeyV:_.HIGHLIGHTS};return t in e?e[t]:_.DIGIT}function CO(t){let e;return t.altKey?e=_.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=_.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=_.CENTER_PM:e=_.HIGHLIGHTS,e}function Fv(t){return t==="Backspace"}function Ro(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t)||Fv(t))}function bO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function IO(t){return bO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function wO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function qr(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),l=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,d=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${l.source}${d.source}$`,"i").test(t))}function Zr(t,e,n){if(t===void 0)return t;let r=t;return Fv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Yd=[H.CAGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.CAGE_TOOL,H.LOCAL_ELEMENT],ur=[H.CAGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.CAGE_TOOL,H.LOCAL_ELEMENT];function Pv(t,e=5){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function zv(t,e,n){return Zr(t,e,n)}const Yn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},Al={type:he.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},dr={...Al,valueUpdater:(t,e)=>zv(t,e,Pv)},yO={inputOptions:dr,toolId:_.KILLER_CAGE,negative_constraints:[{toolId:_.ALL_CAGE_TOTALS_ARE_DIFFERENT,description:"All Killer Cage totals are different."},{toolId:_.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE,description:"Adjacent Killer Cages have consecutive sums."},{toolId:_.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT,description:"Killer Cages that share an edge have different totals."}],shape:Yn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:cr(),tags:[],categories:ur}},OO={inputOptions:dr,toolId:_.UNIQUE_DIGITS_CAGE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:cr(),tags:[],categories:ur}},AO={inputOptions:dr,toolId:_.INVERTED_KILLER_CAGE,shape:Yn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:cr(),tags:[],categories:ur}},xO={inputOptions:dr,toolId:_.SUM_CAGE,shape:Yn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:cr(),tags:[],categories:ur}},SO={inputOptions:Al,toolId:_.SUM_CAGE_LOOK_AND_SAY,shape:Yn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Ol(),tags:[],categories:Yd}},NO={inputOptions:Al,toolId:_.PARITY_BALANCE_CAGE,shape:Yn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Ol(),tags:[],categories:Yd}},LO={inputOptions:dr,toolId:_.DIVISIBLE_KILLER_CAGE,shape:Yn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:cr(),tags:[],categories:ur}},RO={inputOptions:dr,toolId:_.SPOTLIGHT_CAGE,shape:Yn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:cr(),tags:[],categories:ur}},DO={inputOptions:Al,toolId:_.PUTTERIA_CAGE,shape:Yn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Ol(),tags:[],categories:Yd}},TO={inputOptions:dr,toolId:_.MULTISET_CAGE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:cr(),tags:[],categories:ur}},kO={inputOptions:dr,toolId:_.VAULTED_CAGE,shape:Yn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:cr(),tags:[],categories:ur}},MO={inputOptions:dr,toolId:_.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Yn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:cr(),tags:[],categories:ur}},UO={inputOptions:dr,toolId:_.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Yn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:cr(),tags:[],categories:ur}},GO={inputOptions:dr,toolId:_.DOUBLERS_KILLER_CAGE,shape:Yn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:cr(),tags:[],categories:ur}},$O={inputOptions:dr,toolId:_.NEGATORS_KILLER_CAGE,shape:Yn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:cr(),tags:[],categories:ur}},FO={inputOptions:{type:he.SELECTION},toolId:_.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[H.CELL_INPUT_TOOL]}},PO={inputOptions:{type:he.SELECTION},toolId:_.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[H.CELL_INPUT_TOOL]}},zO={inputOptions:{type:he.SELECTION},toolId:_.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[H.CELL_INPUT_TOOL]}},HO={inputOptions:{type:he.SELECTION},toolId:_.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[H.CELL_INPUT_TOOL]}},WO={inputOptions:{type:he.SELECTION},toolId:_.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[H.CELL_INPUT_TOOL]}},BO={inputOptions:{type:he.SELECTION},toolId:_.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[H.CELL_INPUT_TOOL]}},YO={inputOptions:{type:he.SELECTION},toolId:_.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[H.CELL_INPUT_TOOL]}},jO={inputOptions:{type:he.PEN},toolId:_.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},KO={type:he.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST},jd=[H.LOCAL_CONSTRAINT,H.CENTER_CORNER_EDGE_CONSTRAINT,H.LOCAL_ELEMENT],VO={inputOptions:KO,toolId:_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,negative_constraints:[{toolId:_.ALL_GALAXY_CENTERS_GIVEN,description:"All galaxy centers are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The dots in the grid are centers of 180 degree rotationally symmetric 'galaxies' (non-overlapping set of orthogonally connected cells).",usage:Wd(),tags:[],categories:jd}},XO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST,valueUpdater:(t,e)=>Zr(t,e,()=>!0),defaultValue:""},toolId:_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Wd(),tags:[],categories:jd}},qO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Lt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Zr(t,e,()=>!0),defaultValue:""},toolId:_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Wd(),tags:[],categories:jd}},ZO={inputOptions:{type:he.CLONE},toolId:_.CLONE_REGION,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[H.CLONE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT]}},xl=[H.CORNER_CONSTRAINT,H.LOCAL_CONSTRAINT,H.CORNER_TOOL,H.LOCAL_ELEMENT],Kd=[H.CORNER_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.CORNER_TOOL,H.LOCAL_ELEMENT];function Hv(t,e=3){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Wv(t,e,n){return Zr(t,e,n)}function QO(t,e){function n(){return!0}return Zr(t,e,n)}const Vd={type:he.CORNER,defaultValue:"",valueUpdater:(t,e)=>Wv(t,e,Hv)},JO={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>QO(t,e),defaultValue:""},toolId:_.QUADRUPLE,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:eO(),categories:Kd}},eA={inputOptions:Vd,toolId:_.CORNER_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Lo(),categories:Kd}},tA={inputOptions:{type:he.CORNER,defaultValue:""},toolId:_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Lo(),categories:xl}},nA={inputOptions:Vd,toolId:_.CORNER_EVEN_COUNT,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Lo(),categories:xl}};_.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,B.CIRCLE,Lo();const rA={inputOptions:{type:he.CORNER,defaultValue:"X"},toolId:_.PRODUCT_SQUARE,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Lo(),categories:xl}},iA={inputOptions:{type:he.CORNER,defaultValue:""},toolId:_.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Lo(),categories:xl}},Sl=[H.EDGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.EDGE_TOOL,H.LOCAL_ELEMENT],_r=[H.EDGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.EDGE_TOOL,H.LOCAL_ELEMENT],Us=.15,Bv=.02,Pi={type:B.CIRCLE,r:{editable:!0,value:Us,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Bv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Xd={type:B.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function oA(t,e=1){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Yv(t,e=3){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function qd(t,e,n){return Zr(t,e,n)}function aA(t,e){return t===void 0?"V":sA(e)?e.toUpperCase():t}function lA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function jv(t,e){return t===void 0?"<":lA(e)?e:t}const Gs={type:he.EDGE,valueUpdater:(t,e)=>qd(t,e,Yv)},cA={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>qd(t,e,oA)},toolId:_.RATIO,negative_constraints:[{toolId:_.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:_r}},uA={inputOptions:Gs,toolId:_.DIFFERENCE,negative_constraints:[{toolId:_.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:Pi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:_r}},dA={inputOptions:Gs,toolId:_.EDGE_SUM,shape:{...Pi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:_r}},_A={inputOptions:{type:he.EDGE,defaultValue:"V",valueUpdater:aA},toolId:_.XV,negative_constraints:[{toolId:_.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:_.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:_.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:B.TEXT_ONLY,r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:_r}},fA={inputOptions:{type:he.EDGE,valueUpdater:jv,defaultValue:"<"},toolId:_.EDGE_INEQUALITY,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:_r}},gA={inputOptions:Gs,toolId:_.EDGE_PRODUCT,shape:{...Pi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:_r}},hA={inputOptions:Gs,toolId:_.EDGE_MODULO,shape:{...Pi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:_r}},vA={inputOptions:Gs,toolId:_.EDGE_FACTOR,shape:{...Pi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:_r}},pA={inputOptions:{type:he.EDGE},toolId:_.XY_DIFFERENCES,negative_constraints:[{toolId:_.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:Bv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:_r}},mA={inputOptions:{type:he.EDGE},toolId:_.YIN_YANG_WHITE_KROPKI,shape:Pi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:_r}},EA={inputOptions:{type:he.EDGE},toolId:_.YIN_YANG_KROPKI,negative_constraints:[{toolId:_.ALL_YIN_YANG_KROPKI_GIVEN,description:"All such dots are given."}],shape:{type:B.CIRCLE,r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:_r}},CA={inputOptions:{type:he.EDGE},toolId:_.FILLOMINO_REGION_BORDER,shape:Xd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Sl}},bA={inputOptions:{type:he.EDGE},toolId:_.UNKNOWN_REGION_BORDER,shape:Xd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Sl}},IA={inputOptions:{type:he.EDGE},toolId:_.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:Xd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Sl}},wA={inputOptions:{type:he.EDGE},toolId:_.EDGE_CAVE_ONE_OF_EACH,shape:Pi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Sl}},yA={inputOptions:{type:he.EDGE,valueUpdater:jv,defaultValue:"<"},toolId:_.ONE_WAY_DOOR,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:_r}},Do=[H.OUTSIDE_CORNER_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.OUTSIDE_CORNER_TOOL,H.OUTSIDE_DIRECTION_TOOL,H.LOCAL_ELEMENT];function OA(t,e=5){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Kv(t,e,n){return Zr(t,e,n)}const To={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},ko={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Kv(t,e,OA),defaultValue:"",cornerOrEdge:Lt.CORNER},AA={inputOptions:ko,toolId:_.LITTLE_KILLER_SUM,shape:To,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:No(),tags:[],categories:Do}},xA={inputOptions:ko,toolId:_.LITTLE_KILLER_PRODUCT,shape:To,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:No(),tags:[],categories:Do}},SA={inputOptions:ko,toolId:_.LITTLE_KILLER_LOOK_AND_SAY,shape:To,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:No(),tags:[],categories:Do}},NA={inputOptions:ko,toolId:_.X_OMIT_LITTLE_KILLER_SUM,shape:To,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:No(),tags:[],categories:Do}},LA={inputOptions:ko,toolId:_.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:To,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:No(),tags:[],categories:Do}},RA={inputOptions:ko,toolId:_.NEGATORS_LITTLE_KILLER_SUM,shape:To,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:No(),tags:[],categories:Do}},rn=[H.OUTSIDE_EDGE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.TYPABLE_TOOL,H.OUTSIDE_EDGE_TOOL,H.OUTSIDE_DIRECTION_TOOL,H.LOCAL_ELEMENT];function Mo(t,e=5){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function $s(t,e,n){return Zr(t,e,n)}const on={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},jn={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$s(t,e,Mo),defaultValue:"",cornerOrEdge:Lt.EDGE},DA={inputOptions:jn,toolId:_.SANDWICH_SUM,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:nn(),tags:[],categories:rn}},TA={inputOptions:{...jn,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.MYSTERY_SANDWICH_SUM,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:nn(),tags:[],categories:rn}},kA={inputOptions:jn,toolId:_.SANDWICH_SUM_XOR_X_SUM,shape:on,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:nn(),tags:[],categories:rn}},MA={inputOptions:jn,toolId:_.X_SUM,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:nn(),tags:[],categories:rn}},UA={inputOptions:jn,toolId:_.SHORTSIGHTED_X_SUM,shape:on,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:nn(),tags:[],categories:rn}},GA={inputOptions:jn,toolId:_.SHIFTED_X_SUM,shape:on,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:nn(),tags:[],categories:rn}},$A={inputOptions:jn,toolId:_.BROKEN_X_SUM,shape:on,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:nn(),tags:[],categories:rn}},FA={inputOptions:jn,toolId:_.X_SUM_SKYSCRAPERS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:nn(),tags:[],categories:rn}},PA={inputOptions:jn,toolId:_.BATTLEFIELD,shape:on,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:nn(),tags:[],categories:rn}},zA={inputOptions:jn,toolId:_.SKYSCRAPERS,shape:on,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:nn(),tags:[],categories:rn}},HA={inputOptions:jn,toolId:_.X_INDEX,shape:on,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:nn(),tags:[],categories:rn}},WA={inputOptions:jn,toolId:_.RISING_STREAK,shape:on,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:nn(),tags:[],categories:rn}},BA={inputOptions:jn,toolId:_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:on,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:nn(),tags:[],categories:rn}},YA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$s(t,e,Mo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.OUTSIDE_CONSECUTIVE_SUM,shape:on,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:nn(),tags:[],categories:rn}},jA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$s(t,e,Mo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.LOOPWICHES,shape:on,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:nn(),tags:[],categories:rn}},KA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$s(t,e,Mo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:on,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:nn(),tags:[],categories:rn}},VA={inputOptions:{type:he.OUTSIDE_DIRECTION,defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.CHAOS_CONSTRUCTION_X_INDEX_REGION,shape:on,meta:{description:"Clues outside the grid indicate the first N cells pointing in that direction are in the same region - followed by a region border - where N is the first digit seen by the clue.",usage:nn(),tags:[],categories:rn}},XA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$s(t,e,Mo),defaultValue:"",cornerOrEdge:Lt.EDGE},toolId:_.PENTOMINO_BORDER_COUNT,shape:on,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:nn(),tags:[],categories:rn}},qA={inputOptions:{type:he.SINGLE_CELL},toolId:_.COSMETIC_CELL_CENTER_SHAPE,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},ZA={inputOptions:{type:he.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.COSMETIC_CELL_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},QA={inputOptions:{type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.COSMETIC_CELL_MULTI_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},JA={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>qd(t,e,Yv),defaultValue:""},toolId:_.COSMETIC_EDGE,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.LOCAL_ELEMENT]}},ex={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Wv(t,e,Hv),defaultValue:""},toolId:_.COSMETIC_CORNER,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.LOCAL_ELEMENT]}},tx={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:_.COSMETIC_LINE,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},nx={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:_.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},rx={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:_.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_ELEMENT]}},ix={inputOptions:{type:he.CAGE,valueUpdater:(t,e)=>zv(t,e,Pv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:_.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.LOCAL_ELEMENT]}},ox={inputOptions:{type:he.ARROW},toolId:_.COSMETIC_ARROW,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT]}},sx={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Kv(t,e,Mo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:_.COSMETIC_OUTSIDE_DIRECTION,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[H.COSMETIC_TOOL,H.TYPABLE_TOOL,H.OUTSIDE_DIRECTION_TOOL,H.LOCAL_ELEMENT]}},Uo=[H.LOCAL_ELEMENT,H.DIAGONAL_CONSTRAINTS],ax={toolId:_.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:_.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:_.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:_.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:_.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},_x={toolId:_.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:_.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:_.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},hx={toolId:_.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},vx={toolId:_.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},px={toolId:_.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},mx={toolId:_.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Uo}},Ex={toolId:_.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Uo}},Cx={toolId:_.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Uo}},bx={toolId:_.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Uo}},Ix={toolId:_.PARITY_MIRROR_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Uo}},wx={toolId:_.PARITY_MIRROR_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Uo}},yx={toolId:_.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},Ox={toolId:_.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},Ax={toolId:_.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},xx={toolId:_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[H.LOCAL_ELEMENT,H.SIMPLE_GLOBAL_CONSTRAINT]}},Sx={toolId:_.CHAOS_CONSTRUCTION,negative_constraints:[{toolId:_.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION,description:"Regions cannot cover any 2x2 section of the grid."}],meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:_.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:_.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Rx={toolId:_.YIN_YANG,negative_constraints:[{toolId:_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:_.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."},{toolId:_.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION,description:"Identical digits which see each other by a bishops move (diagonally) must be the same color."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Dx={toolId:_.NURIMISAKI,negative_constraints:[{toolId:_.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:_.NURIKABE,negative_constraints:[{toolId:_.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},kx={toolId:_.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:_.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:_.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:_.SHIKAKU,negative_constraints:[{toolId:_.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:_.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:_.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:_.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:_.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:_.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:_.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:_.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:_.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:_.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:_.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:_.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:_.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[H.GLOBAL_CONSTRAINT,H.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Wx={toolId:_.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[H.GLOBAL_CONSTRAINT,H.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Bx={toolId:_.CAVE,negative_constraints:[{toolId:_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:_.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:_.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:_.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:_.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."},{toolId:_.CAVE_WALL_SUGURU,description:"Each orthogonally connected group of shaded (wall) cells contains the digits 1-N (where N is the size of the group). Suguru digits may not repeat in a row, column, or shaded group."},{toolId:_.CAVE_CELLS_FILLOMINO,description:"Divide unshaded cells into polyominoes and fill each cell with a digit equal to the size of its polyomino. Polyominoes of the same size may not share an edge."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:_.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:_.GALAXIES,negative_constraints:[{toolId:_.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:_.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY,description:"Digits do not repeat in each galaxy."},{toolId:_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:_.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:_.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:_.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:_.CONNECT_FOUR,negative_constraints:[{toolId:_.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:_.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:_.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:_.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:_.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:_.BUILD_YOUR_OWN_KILLER_CAGES,meta:{description:"A cage is a set of orthogonally connected cells which do not contain repeated digits. Cages may not overlap each other.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},eS={toolId:_.SHADED_BOUNDARIES,negative_constraints:[{toolId:_.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN,description:"Shade the boundary between adjacent digits if and only if they sum to an even number."}],meta:{description:"Shade the boundary between adjacent. Shaded boundaries must divide the grid into exactly 2 regions. There may be shaded boundaries that lie within a region without fully dividing it, as allowed by other rules.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},tS={toolId:_.STAR_BATTLE,meta:{description:"Each row, column, and 3x3 box contains exactly 2 stars. Stars can't be within a kings move (in chess) from each other.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},nS={toolId:_.ONE_STAR_PER_GALAXY,meta:{description:"Every galaxy contains exactly 1 star.",tags:[],categories:[H.LOCAL_ELEMENT,H.UNDETERMINED_REGIONS_CONSTRAINT]}},Ye=[H.LINE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.LINE_TOOL,H.LOCAL_ELEMENT],Qr=[H.LINE_CONSTRAINT,H.LOCAL_CONSTRAINT,H.DOUBLE_ENDED_LINE_CONSTRAINT,H.LINE_TOOL,H.LOCAL_ELEMENT],Fs={description:"",usage:Ge(),tags:[],categories:Ye},Ut={type:he.LINE,allowSelfIntersection:!0},Jt={type:he.LINE,allowSelfIntersection:!1},rS={inputOptions:Jt,toolId:_.THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Fs,description:"Numbers along a thermometer must increase from the bulb end."}},iS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:_.CUSTOM_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Fs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},oS={inputOptions:Jt,toolId:_.FUZZY_THERMOMETER,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Fs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},sS={inputOptions:Jt,toolId:_.SLOW_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Fs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},aS={inputOptions:Jt,toolId:_.ROW_CYCLE_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Fs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},lS={inputOptions:Ut,toolId:_.PALINDROME,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Ge(),tags:[],categories:Ye}},cS={inputOptions:Ut,toolId:_.RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Ge(),tags:[],categories:Ye}},uS={inputOptions:Ut,toolId:_.DOUBLE_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Ge(),tags:[],categories:Ye}},dS={inputOptions:Ut,toolId:_.RENRENBANBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Ge(),tags:[],categories:Ye}},_S={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.N_CONSECUTIVE_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Ye}},fS={inputOptions:Ut,toolId:_.NABNER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Ye}},gS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Ge(),tags:[],categories:Ye}},hS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:_.DUTCH_WHISPERS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Ge(),tags:[],categories:Ye}},vS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Ge(),tags:[],categories:Ye}},pS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.RENBAN_OR_WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Ge(),tags:[],categories:Ye}},mS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.RENBAN_OR_NABNER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Ye}},ES={inputOptions:Jt,toolId:_.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Ge(),tags:[],categories:Ye}},CS={inputOptions:Jt,toolId:_.INDEX_LINE,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Ge(),tags:[],categories:Ye}},bS={inputOptions:Ut,toolId:_.UNIQUE_VALUES_LINE,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Ge(),tags:[],categories:Ye}},IS={inputOptions:Ut,toolId:_.REGION_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Ge(),tags:[],categories:Ye}},wS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:_.SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Ge(),tags:[],categories:Ye}},yS={inputOptions:Jt,toolId:_.ARITHMETIC_SEQUENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Ge(),tags:[],categories:Ye}},OS={inputOptions:Ut,toolId:_.SAME_PARITY_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Ge(),tags:[],categories:Ye}},AS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Ye}},xS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.UNIMODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Ge(),tags:[],categories:Ye}},SS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.MODULAR_OR_UNIMODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Ge(),tags:[],categories:Ye}},NS={inputOptions:Ut,toolId:_.ODD_EVEN_OSCILLATOR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Ge(),tags:[],categories:Ye}},LS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.HIGH_LOW_OSCILLATOR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Ge(),tags:[],categories:Ye}},RS={inputOptions:Ut,toolId:_.ENTROPIC_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Ge(),tags:[],categories:Ye}},DS={inputOptions:Ut,toolId:_.ENTROPIC_OR_MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Ge(),tags:[],categories:Ye}},TS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.INDEXING_COLUMN_IS_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Ge(),tags:[],categories:Ye}},kS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.INDEXING_ROW_IS_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Ge(),tags:[],categories:Ye}},MS={inputOptions:Jt,toolId:_.REPEATED_DIGITS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Ge(),tags:[],categories:Ye}},US={inputOptions:Jt,toolId:_.SUPERFUZZY_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Ge(),tags:[],categories:Ye}},GS={inputOptions:Ut,toolId:_.AMBIGUOUS_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Ge(),tags:[],categories:Ye}},$S={inputOptions:Jt,toolId:_.HEADLESS_ARROW,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Ge(),tags:[],categories:Ye}},FS={inputOptions:Ut,toolId:_.XV_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Ge(),tags:[],categories:Ye}},PS={inputOptions:Jt,toolId:_.ROW_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Ge(),tags:[],categories:Ye}},zS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:_.AT_LEAST_X_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Ge(),tags:[],categories:Ye}},HS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Ge(),tags:[],categories:Ye}};_.ADJACENT_CELL_SUM_IS_PRIME_LINE,B.LINE,Ge();const WS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:_.PRODUCT_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Ge(),tags:[],categories:Ye}},BS={inputOptions:Ut,toolId:_.ADJACENT_MULTIPLES_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Ge(),tags:[],categories:Ye}},YS={inputOptions:Ut,toolId:_.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Ge(),tags:[],categories:Ye}},jS={inputOptions:Jt,toolId:_.LOOK_AND_SAY_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Ge(),tags:[],categories:Ye}},KS={inputOptions:Jt,toolId:_.ZIPPER_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Ge(),tags:[],categories:Ye}},VS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:_.SEGMENTED_SUM_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Ge(),tags:[],categories:Ye}},XS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:_.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Ge(),tags:[],categories:Ye}},qS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:_.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Ge(),tags:[],categories:Ye}};_.THERMO_OR_AVERAGE_ARROW,B.THERMO_WITH_CIRCLE,Ge();const ZS={inputOptions:Jt,toolId:_.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:B.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Ge(),tags:[],categories:Ye}},QS={inputOptions:Jt,toolId:_.PEAPODS,shape:{type:B.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Ge(),tags:[],categories:Ye}},JS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Ge(),tags:[],categories:Ye}},eN={inputOptions:Ut,toolId:_.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Ge(),tags:[],categories:Ye}},tN={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Ye}},nN={inputOptions:{type:he.LINE,allowSelfIntersection:!1},toolId:_.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along the red line, each run of cells with the same yin yang shading contains a non-repeating set of consecutive digits in any order. Along the red line, digits in each pair of adjacent cells with different yin yang shading must differ by at least 5.",usage:Ge(),tags:[],categories:Ye}},rN={inputOptions:Ut,toolId:_.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Ge(),tags:[],categories:Ye}},iN={inputOptions:Jt,toolId:_.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Ge(),tags:[],categories:Ye}},oN={inputOptions:Jt,toolId:_.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Ge(),tags:[],categories:Ye}},sN={inputOptions:Ut,toolId:_.BETWEEN_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Ge(),tags:[],categories:Qr}},aN={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:_.LOCKOUT_LINE,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Ge(),tags:[],categories:Qr}},lN={inputOptions:Ut,toolId:_.TIGHTROPE_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Ge(),tags:[],categories:Qr}},cN={inputOptions:Ut,toolId:_.PARITY_COUNT_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Ge(),tags:[],categories:Qr}},uN={inputOptions:Ut,toolId:_.DOUBLE_ARROW_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Ge(),categories:Qr}},dN={inputOptions:Ut,toolId:_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Ge(),tags:[],categories:Qr}},_N={inputOptions:Ut,toolId:_.SPLIT_PEAS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Ge(),tags:[],categories:Qr}},fN={inputOptions:Jt,toolId:_.DOUBLERS_THERMOMETER,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Ge(),tags:[],categories:Ye}},gN={inputOptions:Ut,toolId:_.DOUBLERS_BETWEEN_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:Qr}},hN={inputOptions:Ut,toolId:_.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:Qr}},je=[H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.SINGLE_CELL_SHAPE_TOOL,H.LOCAL_ELEMENT],zi=[H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.SINGLE_CELL_COLOR_TOOL,H.LOCAL_ELEMENT],Zd=[H.SINGLE_CELL_ARROW_TOOL,H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT],Ps={type:B.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Tr={type:B.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Nl(t,e=3){return qr(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function vN(t){return t===""||t==="1"||t==="2"||t==="3"}function zs(t,e,n){return Zr(t,e,n)}const qe={type:he.SINGLE_CELL},Jr={type:he.SINGLE_CELL,valueUpdater:(t,e)=>zs(t,e,Nl),defaultValue:""},Qd={type:he.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},pN={inputOptions:qe,toolId:_.ODD,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:je}},mN={inputOptions:qe,toolId:_.EVEN,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:je}},EN={inputOptions:qe,toolId:_.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:zi}},CN={inputOptions:qe,toolId:_.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:zi}},bN={inputOptions:qe,toolId:_.ODD_MINESWEEPER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},IN={inputOptions:qe,toolId:_.EVEN_MINESWEEPER,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},wN={inputOptions:qe,toolId:_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:je}},yN={inputOptions:qe,toolId:_.WATCHTOWER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},ON={inputOptions:qe,toolId:_.NOT_WATCHTOWER,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},AN={inputOptions:Jr,toolId:_.FARSIGHT,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:je}},xN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>zs(t,e,Nl),defaultValue:"9"},toolId:_.RADAR,negative_constraints:[{toolId:_.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:je}},SN={inputOptions:qe,toolId:_.ORTHOGONAL_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:je}},NN={inputOptions:qe,toolId:_.INDEXING_COLUMN,negative_constraints:[{toolId:_.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:zi}},LN={inputOptions:qe,toolId:_.INDEXING_ROW,negative_constraints:[{toolId:_.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:zi}},RN={inputOptions:qe,toolId:_.LOW_DIGIT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:zi}},DN={inputOptions:qe,toolId:_.HIGH_DIGIT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:zi}},TN={inputOptions:qe,toolId:_.FRIENDLY_CELL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:zi}},kN={inputOptions:qe,toolId:_.DIAGONALLY_ADJACENT_SUM,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:je}},MN={inputOptions:qe,toolId:_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:je}},UN={inputOptions:qe,toolId:_.SANDWICH_ROW_COL_COUNT,shape:Tr,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:je}},GN={inputOptions:qe,toolId:_.COUNTING_CIRCLES,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:je}},$N={inputOptions:qe,toolId:_.REVERSE_COUNTING_CIRCLES,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:je}},FN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>zs(t,e,vN),defaultValue:""},toolId:_.COLORED_COUNTING_CIRCLES,shape:Tr,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:je}},PN={inputOptions:qe,toolId:_.UNIQUE_CELLS,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:je}},zN={inputOptions:qe,toolId:_.SEEN_EVEN_COUNT,shape:Ps,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},HN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>zs(t,e,Nl),defaultValue:"5"},toolId:_.CELL_KNIGHT_WHISPERS,shape:Tr,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:je}},WN={inputOptions:qe,toolId:_.SEEN_ODD_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},BN={inputOptions:qe,toolId:_.YIN_YANG_SHADED_CELL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"var(--constraint-color-gray)"}},meta:{description:"Grey shaded cells are shaded yin yang cells.",tags:[],categories:je}},YN={inputOptions:qe,toolId:_.YIN_YANG_MINESWEEPER,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:je}},jN={inputOptions:qe,toolId:_.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},KN={inputOptions:qe,toolId:_.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},VN={inputOptions:qe,toolId:_.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Ps,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:je}},XN={inputOptions:qe,toolId:_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:je}},qN={inputOptions:qe,toolId:_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:je}},ZN={inputOptions:Jr,toolId:_.YIN_YANG_LABELED_SHADE_CELL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"Cells in cages with the same label have the yin yang shading.",tags:[],categories:je}},QN={inputOptions:qe,toolId:_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:je}},JN={inputOptions:qe,toolId:_.SEEN_REGION_BORDERS_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:je}},eL={inputOptions:qe,toolId:_.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:je}},tL={inputOptions:qe,toolId:_.SASHIGANE_BEND_REGION_COUNT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:je}},nL={inputOptions:Qd,toolId:_.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Zd}},rL={inputOptions:Qd,toolId:_.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Zd}},iL={inputOptions:Jr,toolId:_.SASHIGANE_REGION_SUM,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:je}},oL={inputOptions:qe,toolId:_.CELL_ON_THE_LOOP,shape:Ps,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:je}},sL={inputOptions:qe,toolId:_.CELL_NOT_ON_THE_LOOP,shape:Tr,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:je}},aL={inputOptions:qe,toolId:_.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:je}},lL={inputOptions:Jr,toolId:_.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:je}},cL={inputOptions:qe,toolId:_.CAVE_CLUE,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:je}},uL={inputOptions:qe,toolId:_.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,shape:Tr,meta:{description:"An unshaded circled clue (cave) indicates the total number of unshaded cells seen in the four orthogonal directions, including the clue cell. A shaded circle clue (wall) indicates the size of the shaded region.",tags:[],categories:je}},dL={inputOptions:Jr,toolId:_.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:je}},_L={inputOptions:Jr,toolId:_.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:je}},fL={inputOptions:Jr,toolId:_.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:Tr,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:je}},gL={inputOptions:qe,toolId:_.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT,shape:Tr,meta:{description:"A digit in a circle shows the amount of cells touching it, orthogonally and diagonally, not including itself, which are part of the same region.",tags:[],categories:je}},hL={inputOptions:qe,toolId:_.DIRECTED_PATH_START,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:je}},vL={inputOptions:qe,toolId:_.DIRECTED_PATH_END,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:je}},pL={inputOptions:Jr,toolId:_.TELEPORT,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:je}},mL={inputOptions:Jr,toolId:_.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:je}},EL={inputOptions:qe,toolId:_.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Ps,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:je}},CL={inputOptions:qe,toolId:_.NURIKABE_ISLAND_SIZE_CELL,shape:Tr,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:je}},bL={inputOptions:qe,toolId:_.CONNECT_FOUR_YELLOW,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:je}},IL={inputOptions:qe,toolId:_.CONENCT_FOUR_RED,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:je}},wL={inputOptions:qe,toolId:_.SHIKAKU_REGION_SIZE,negative_constraints:[{toolId:_.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,description:"Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region."}],shape:Tr,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:je}},yL={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>zs(t,e,Nl),defaultValue:"?"},toolId:_.SHIKAKU_REGION_SUM,negative_constraints:[{toolId:_.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,description:"Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region."}],shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:je}},OL={inputOptions:Qd,toolId:_.INTERNAL_LOOP_SKYSCRAPERS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell on the loop represents a skyscraper with a height equal to its value (non-loop cells are not skyscrapers). A digit in a clued cell gives the number of skyscrapers visible in the indicated direction (not including the cell itself), where skyscrapers block the view of skyscrapers with the same or lower height behind them. The clued cell may or may not be on the loop.",tags:[],categories:Zd}},AL={inputOptions:qe,toolId:_.BYOK_CAGE_SIZE,shape:Tr,meta:{description:"Circles appear in cages and count the total number of cells in that cage. All circles are given.",tags:[],categories:je}},xL={inputOptions:qe,toolId:_.BYOK_NOT_CAGE_CELL,negative_constraints:[{toolId:_.ALL_SQUARES_GIVEN,description:"All such squares are given."}],shape:Ps,meta:{description:"Squares indicate that a cell is not in any cage.",tags:[],categories:je}},SL={inputOptions:{type:he.SINGLE_CELL},toolId:_.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:[H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT,H.FOG_TOOL]}},NL={toolId:_.CUSTOM_FOG_CLEARING,negative_constraints:[{toolId:_.FOG_CLEARING_ITSELF,description:"On cell input, clear itself."},{toolId:_.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,description:"On cell input, clear orthogonal neighbours."},{toolId:_.FOG_CLEARING_DIAGONAL_NEIGHBOURS,description:"On cell input, clear diagonal neighbours."},{toolId:_.FOG_CLEARING_CONTAINING_ROW,description:"On cell input, clear containing row."},{toolId:_.FOG_CLEARING_CONTAINING_COLUMN,description:"On cell input, clear containing column."},{toolId:_.FOG_CLEARING_KNIGHTS_MOVE,description:"On cell input, clear cells a knight's move away."}],meta:{description:"",tags:[],categories:[H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT,H.FOG_TOOL]}},Kn=[H.SINGLE_CELL_CONSTRAINT,H.LOCAL_CONSTRAINT,H.SINGLE_CELL_MULTIARROW_TOOL,H.LOCAL_ELEMENT],wr={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},Vn={type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},LL={inputOptions:Vn,toolId:_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:wr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Kn}},RL={inputOptions:Vn,toolId:_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:wr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Kn}},DL={inputOptions:Vn,toolId:_.LOOP_CELL_COUNT_ARROWS,shape:wr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Kn}},TL={inputOptions:Vn,toolId:_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:wr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Kn}},kL={inputOptions:Vn,toolId:_.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:wr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Kn}},ML={inputOptions:Vn,toolId:_.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:wr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Kn}},UL={inputOptions:Vn,toolId:_.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,shape:wr,meta:{description:"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",tags:[],categories:Kn}},GL={inputOptions:Vn,toolId:_.COLD_ARROWS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Kn}},$L={inputOptions:Vn,toolId:_.HOT_ARROWS,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Kn}},FL={inputOptions:Vn,toolId:_.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:wr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Kn}},PL={inputOptions:Vn,toolId:_.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:wr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:Kn}},zL={inputOptions:Vn,toolId:_.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:wr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:Kn}},HL={inputOptions:Vn,toolId:_.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS,shape:wr,meta:{description:"A digit in a cell with one or more arrows indicates the total number of shaded boundaries in the directions of all arrows combined.",tags:[],categories:Kn}};function WL(t,e){if(t===void 0||qr(t,{maxLength:10,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const BL={type:he.VALUE_TOOL,defaultValue:"",valueUpdater:WL},YL={inputOptions:BL,toolId:_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}},jL={toolId:_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}},KL={toolId:_.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}},VL={toolId:_.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUED_GLOBAL_CONSTRAINT]}};_.VAMPIRE_AND_PREY,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;_.MARKED_CELLS,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;const XL={toolId:_.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}},qL={toolId:_.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}};_.HOT_CELLS,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;_.COLD_CELLS,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;_.DECREMENT_FOUNTAIN,H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT;const ZL={toolId:_.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}},QL={toolId:_.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[H.LOCAL_ELEMENT,H.VALUE_MODIFIER_CONSTRAINT]}},JL=[H.CORNER_LINE_CONSTRAINT,H.CORNER_LINE_TOOL,H.LOCAL_CONSTRAINT,H.LOCAL_ELEMENT],eR={inputOptions:{type:he.CORNER_LINE},toolId:_.MAZE_WALL,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:JL}};function tR(t,e){if(t===void 0||qr(t,{maxLength:30,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const nR={type:he.VALUE_TOOL,defaultValue:"",valueUpdater:tR},rR={inputOptions:nR,toolId:_.VARIABLE_CONSTRAINT,meta:{description:"Create global variables with given values.",tags:[],categories:[H.LOCAL_ELEMENT,H.OTHER_CONSTRAINTS]}},zt={[_.GIVEN]:FO,[_.DIGIT]:PO,[_.REGIONS]:zO,[_.OUTSIDE]:YO,[_.CORNER_PM]:HO,[_.CENTER_PM]:WO,[_.HIGHLIGHTS]:BO,[_.PEN_TOOL]:jO,[_.SUDOKU_RULES_DO_NOT_APPLY]:ax,[_.LEAVE_EMPTY_CELLS_EMPTY]:lx,[_.LITS]:Qx,[_.HEXED_SUDOKU]:cx,[_.FILLOMINO]:Zx,[_.ANTIKNIGHT]:ux,[_.ANTI_LONG_KNIGHT]:_x,[_.ANTIKING]:fx,[_.ANTI_GIRAFFE]:dx,[_.DISJOINT_GROUPS]:gx,[_.TANGO]:hx,[_.NONCONSECUTIVE]:vx,[_.NONRATIO]:px,[_.ANTI_ENTROPY]:Ox,[_.GLOBAL_INDEXING_COLUMN]:Ax,[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:xx,[_.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:yx,[_.NEGATIVE_DIAGONAL]:mx,[_.POSITIVE_DIAGONAL]:Ex,[_.NEGATIVE_ANTIDIAGONAL]:Cx,[_.POSITIVE_ANTIDIAGONAL]:bx,[_.PARITY_MIRROR_NEGATIVE_DIAGONAL]:Ix,[_.PARITY_MIRROR_POSITIVE_DIAGONAL]:wx,[_.DOUBLERS]:XL,[_.NEGATORS]:qL,[_.NEXUS]:ZL,[_.INDEXER_CELLS]:QL,[_.CHAOS_CONSTRUCTION]:Sx,[_.NUMBERED_CHAOS_CONSTRUCTION]:Nx,[_.CHAOS_CONSTRUCTION_SUGURU]:Lx,[_.YIN_YANG]:Rx,[_.NURIMISAKI]:Dx,[_.NURIKABE]:Tx,[_.BUILD_YOUR_OWN_KILLER_CAGES]:Jx,[_.SHADED_BOUNDARIES]:eS,[_.TWO_CONTIGUOUS_REGIONS]:kx,[_.SASHIGANE]:Mx,[_.NORINORI]:Ux,[_.SHIKAKU]:Gx,[_.GOLDILOCKS_ZONE]:Fx,[_.CELL_CENTER_LOOP_NO_TOUCHING]:Px,[_.CAVE]:Bx,[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Yx,[_.GALAXIES]:Kx,[_.STAR_BATTLE]:tS,[_.ONE_STAR_PER_GALAXY]:nS,[_.PENTOMINO_TILLING]:Vx,[_.LITS_BLACK_WHITE_STAR_BATTLE]:Xx,[_.NORINORI_STAR_BATTLE]:$x,[_.MAZE_DIRECTED_PATH]:zx,[_.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:Hx,[_.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Wx,[_.CONNECT_FOUR]:qx,[_.ODD]:pN,[_.EVEN]:mN,[_.MINIMUM]:EN,[_.MAXIMUM]:CN,[_.ODD_MINESWEEPER]:bN,[_.EVEN_MINESWEEPER]:IN,[_.WATCHTOWER]:yN,[_.NOT_WATCHTOWER]:ON,[_.FARSIGHT]:AN,[_.RADAR]:xN,[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:wN,[_.ORTHOGONAL_SUM]:SN,[_.DIAGONALLY_ADJACENT_SUM]:kN,[_.INDEXING_COLUMN]:NN,[_.INDEXING_ROW]:LN,[_.LOW_DIGIT]:RN,[_.HIGH_DIGIT]:DN,[_.FRIENDLY_CELL]:TN,[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:MN,[_.SANDWICH_ROW_COL_COUNT]:UN,[_.COUNTING_CIRCLES]:GN,[_.REVERSE_COUNTING_CIRCLES]:$N,[_.COLORED_COUNTING_CIRCLES]:FN,[_.UNIQUE_CELLS]:PN,[_.SEEN_EVEN_COUNT]:zN,[_.SEEN_ODD_COUNT]:WN,[_.CELL_KNIGHT_WHISPERS]:HN,[_.YIN_YANG_SHADED_CELL]:BN,[_.YIN_YANG_MINESWEEPER]:YN,[_.YIN_YANG_SEEN_UNSHADED_CELLS]:jN,[_.YIN_YANG_SEEN_SHADED_CELLS]:KN,[_.YIN_YANG_SEEN_SAME_SHADE_CELLS]:VN,[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:XN,[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:qN,[_.YIN_YANG_LABELED_SHADE_CELL]:ZN,[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:QN,[_.SEEN_REGION_BORDERS_COUNT]:JN,[_.NURIMISAKI_UNSHADED_ENDPOINTS]:eL,[_.SASHIGANE_BEND_REGION_COUNT]:tL,[_.SASHIGANE_REGION_SUM]:iL,[_.CELL_ON_THE_LOOP]:oL,[_.CELL_NOT_ON_THE_LOOP]:sL,[_.COUNT_LOOP_NEIGHBOUR_CELLS]:aL,[_.CAVE_CLUE]:cL,[_.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE]:uL,[_.TWILIGHT_CAVE_FILLOMINO_CLUE]:lL,[_.YIN_YANG_FILLOMINO_PARITY]:jx,[_.SHIKAKU_REGION_SIZE]:wL,[_.SHIKAKU_REGION_SUM]:yL,[_.CHAOS_CONSTRUCTION_CHESS_SUMS]:dL,[_.CHAOS_CONSTRUCTION_ARROW_KNOTS]:_L,[_.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:fL,[_.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT]:gL,[_.BYOK_CAGE_SIZE]:AL,[_.BYOK_NOT_CAGE_CELL]:xL,[_.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:mL,[_.DIRECTED_PATH_START]:hL,[_.DIRECTED_PATH_END]:vL,[_.TELEPORT]:pL,[_.CONNECT_FOUR_YELLOW]:bL,[_.CONENCT_FOUR_RED]:IL,[_.SASHIGANE_ARROW_POINTS_TO_BEND]:nL,[_.THERMO_SIGHTLINE_LOOP_ARROW]:rL,[_.INTERNAL_LOOP_SKYSCRAPERS]:OL,[_.HOT_ARROWS]:$L,[_.COLD_ARROWS]:GL,[_.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:ML,[_.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:UL,[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:TL,[_.YIN_YANG_COUNT_SHADED_CELLS]:kL,[_.LOOP_CELL_COUNT_ARROWS]:DL,[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:RL,[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:LL,[_.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:FL,[_.NURIKABE_SEEN_WATERWAY_CELLS]:EL,[_.NURIKABE_ISLAND_SIZE_CELL]:CL,[_.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:PL,[_.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:zL,[_.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS]:HL,[_.DIFFERENCE]:uA,[_.RATIO]:cA,[_.XV]:_A,[_.EDGE_INEQUALITY]:fA,[_.EDGE_SUM]:dA,[_.EDGE_PRODUCT]:gA,[_.EDGE_MODULO]:hA,[_.EDGE_FACTOR]:vA,[_.XY_DIFFERENCES]:pA,[_.YIN_YANG_WHITE_KROPKI]:mA,[_.YIN_YANG_KROPKI]:EA,[_.FILLOMINO_REGION_BORDER]:CA,[_.UNKNOWN_REGION_BORDER]:bA,[_.CHAOS_CONSTRUCTION_SUGURU_BORDER]:IA,[_.EDGE_CAVE_ONE_OF_EACH]:wA,[_.ONE_WAY_DOOR]:yA,[_.QUADRUPLE]:JO,[_.CORNER_SUM]:eA,[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:tA,[_.CORNER_EVEN_COUNT]:nA,[_.PRODUCT_SQUARE]:rA,[_.EQUAL_DIAGONAL_DIFFERENCES]:iA,[_.THERMOMETER]:rS,[_.FUZZY_THERMOMETER]:oS,[_.SLOW_THERMOMETER]:sS,[_.CUSTOM_THERMOMETER]:iS,[_.ROW_CYCLE_THERMOMETER]:aS,[_.PALINDROME]:lS,[_.RENBAN_LINE]:cS,[_.DOUBLE_RENBAN_LINE]:uS,[_.RENRENBANBAN_LINE]:dS,[_.N_CONSECUTIVE_RENBAN_LINE]:_S,[_.NABNER_LINE]:fS,[_.WHISPERS_LINE]:gS,[_.DUTCH_WHISPERS]:hS,[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:vS,[_.RENBAN_OR_WHISPERS_LINE]:pS,[_.RENBAN_OR_NABNER_LINE]:mS,[_.OUT_OF_ORDER_CONSECUTIVE_LINE]:ES,[_.INDEX_LINE]:CS,[_.UNIQUE_VALUES_LINE]:bS,[_.REPEATED_DIGITS_LINE]:MS,[_.REGION_SUM_LINE]:IS,[_.SUM_LINE]:wS,[_.XV_LINE]:FS,[_.ROW_SUM_LINE]:PS,[_.AT_LEAST_X_LINE]:zS,[_.SUPERFUZZY_ARROW]:US,[_.AMBIGUOUS_ARROW]:GS,[_.HEADLESS_ARROW]:$S,[_.N_CONSECUTIVE_FUZZY_SUM_LINE]:HS,[_.PRODUCT_LINE]:WS,[_.ADJACENT_MULTIPLES_LINE]:BS,[_.ADJACENT_DIFFERENCES_COUNT_LINE]:YS,[_.LOOK_AND_SAY_LINE]:jS,[_.ARITHMETIC_SEQUENCE_LINE]:yS,[_.ZIPPER_LINE]:KS,[_.SEGMENTED_SUM_LINE]:VS,[_.SEGMENTED_SUM_AND_RENBAN_LINE]:XS,[_.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:qS,[_.SAME_PARITY_LINE]:OS,[_.MODULAR_LINE]:AS,[_.UNIMODULAR_LINE]:xS,[_.MODULAR_OR_UNIMODULAR_LINE]:SS,[_.ODD_EVEN_OSCILLATOR_LINE]:NS,[_.HIGH_LOW_OSCILLATOR_LINE]:LS,[_.ENTROPIC_LINE]:RS,[_.ENTROPIC_OR_MODULAR_LINE]:DS,[_.INDEXING_COLUMN_IS_X_LINE]:TS,[_.INDEXING_ROW_IS_X_LINE]:kS,[_.INDEXER_CELLS_REGION_SUBSET_LINE]:ZS,[_.PEAPODS]:QS,[_.YIN_YANG_INDEXING_LINE_COLORING]:iN,[_.YIN_YANG_SHADED_WHISPERS_LINE]:JS,[_.YIN_YANG_UNSHADED_ENTROPIC_LINE]:eN,[_.YIN_YANG_UNSHADED_MODULAR_LINE]:tN,[_.YIN_YANG_REGION_SUM_LINE]:rN,[_.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE]:nN,[_.GOLDILOCKS_ZONE_REGION_SUM]:oN,[_.BETWEEN_LINE]:sN,[_.LOCKOUT_LINE]:aN,[_.PARITY_COUNT_LINE]:cN,[_.TIGHTROPE_LINE]:lN,[_.DOUBLE_ARROW_LINE]:uN,[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:dN,[_.SPLIT_PEAS]:_N,[_.DOUBLERS_THERMOMETER]:fN,[_.DOUBLERS_BETWEEN_LINE]:gN,[_.DOUBLERS_DOUBLE_ARROW_LINE]:hN,[_.ARROW]:sO,[_.CHAOS_CONSTRUCTION_ARROW]:cO,[_.AVERAGE_ARROW]:aO,[_.BULBOUS_ARROW]:lO,[_.MAZE_WALL]:eR,[_.KILLER_CAGE]:yO,[_.UNIQUE_DIGITS_CAGE]:OO,[_.INVERTED_KILLER_CAGE]:AO,[_.SUM_CAGE]:xO,[_.SUM_CAGE_LOOK_AND_SAY]:SO,[_.PARITY_BALANCE_CAGE]:NO,[_.DIVISIBLE_KILLER_CAGE]:LO,[_.SPOTLIGHT_CAGE]:RO,[_.PUTTERIA_CAGE]:DO,[_.MULTISET_CAGE]:TO,[_.VAULTED_CAGE]:kO,[_.YIN_YANG_ANTITHESIS_KILLER_CAGE]:MO,[_.YIN_YANG_BREAKEVEN_KILLER_CAGE]:UO,[_.DOUBLERS_KILLER_CAGE]:GO,[_.NEGATORS_KILLER_CAGE]:$O,[_.CLONE_REGION]:ZO,[_.SANDWICH_SUM]:DA,[_.MYSTERY_SANDWICH_SUM]:TA,[_.X_SUM]:MA,[_.SHORTSIGHTED_X_SUM]:UA,[_.SHIFTED_X_SUM]:GA,[_.BROKEN_X_SUM]:$A,[_.X_SUM_SKYSCRAPERS]:FA,[_.BATTLEFIELD]:PA,[_.SKYSCRAPERS]:zA,[_.X_INDEX]:HA,[_.SANDWICH_SUM_XOR_X_SUM]:kA,[_.RISING_STREAK]:WA,[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:BA,[_.OUTSIDE_CONSECUTIVE_SUM]:YA,[_.LOOPWICHES]:jA,[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:KA,[_.CHAOS_CONSTRUCTION_X_INDEX_REGION]:VA,[_.PENTOMINO_BORDER_COUNT]:XA,[_.LITTLE_KILLER_SUM]:AA,[_.LITTLE_KILLER_PRODUCT]:xA,[_.LITTLE_KILLER_LOOK_AND_SAY]:SA,[_.LITTLE_KILLER_REGION_SUM_PRODUCT]:LA,[_.X_OMIT_LITTLE_KILLER_SUM]:NA,[_.NEGATORS_LITTLE_KILLER_SUM]:RA,[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER]:VO,[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:XO,[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:qO,[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:YL,[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:jL,[_.FORBIDDEN_KNIGHT_SUM]:KL,[_.LITS_MAX_TETROMINO_SUM]:VL,[_.VARIABLE_CONSTRAINT]:rR,[_.FOG_LIGHTS]:SL,[_.CUSTOM_FOG_CLEARING]:NL,[_.COSMETIC_CELL_CENTER_SHAPE]:qA,[_.COSMETIC_CELL_ARROW]:ZA,[_.COSMETIC_CELL_MULTI_ARROW]:QA,[_.COSMETIC_EDGE]:JA,[_.COSMETIC_CORNER]:ex,[_.COSMETIC_LINE]:tx,[_.COSMETIC_LINE_WITH_CIRCLE_ENDS]:nx,[_.COSMETIC_LINE_WITH_POLYGON_ENDS]:rx,[_.COSMETIC_ARROW]:ox,[_.COSMETIC_CAGE]:ix,[_.COSMETIC_OUTSIDE_DIRECTION]:sx};var Fe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Fe||{});function Vv(t){if(!(t in Fe))throw Error(" not a key in DIRECTION");return Fe[t]}function Je(t,e){return t.r===e.r&&t.c===e.c}function Xv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function iR(t,e){return{r:t.r*e,c:t.c*e}}function oR(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Hs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Je(t,e)}function sR(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function ll(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function $t(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ll(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function aR(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function cl(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function lR(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const cR=new Map([[6,Fe.N],[2,Fe.S],[0,Fe.E],[4,Fe.W],[7,Fe.NE],[5,Fe.NW],[1,Fe.SE],[3,Fe.SW]]);function vo(t){t=t%8;const e=cR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const uR=new Map([[Fe.N,{r:-1,c:0}],[Fe.S,{r:1,c:0}],[Fe.E,{r:0,c:1}],[Fe.W,{r:0,c:-1}],[Fe.NE,{r:-1,c:1}],[Fe.NW,{r:-1,c:-1}],[Fe.SE,{r:1,c:1}],[Fe.SW,{r:1,c:-1}]]);function Ws(t){const e=uR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Eh(t,e){const n=Ws(e);return Xv(t,n)}function ul(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function qv(t,e,n=!1){const r=t.some(o=>Je(o,e)),i=n?t.some(o=>Hs(o,e)):t.some(o=>sR(o,e));if(!r&&i){const o=[...t,e];return ll(o),o}return t}function Ba(t){return`R${t.r+1}C${t.c+1}`}function Jd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function dR(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}var Ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Es={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var _R=Es.exports,Ch;function fR(){return Ch||(Ch=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",d=500,g="__lodash_placeholder__",h=1,v=2,m=4,E=1,b=2,I=1,w=2,A=4,T=8,k=16,G=32,Y=64,M=128,P=256,te=512,ce=30,se="...",ue=800,ye=16,Z=1,Ie=2,Ce=3,Oe=1/0,Ae=9007199254740991,Se=17976931348623157e292,De=NaN,$e=4294967295,st=$e-1,ut=$e>>>1,bt=[["ary",M],["bind",I],["bindKey",w],["curry",T],["curryRight",k],["flip",te],["partial",G],["partialRight",Y],["rearg",P]],dt="[object Arguments]",It="[object Array]",wt="[object AsyncFunction]",In="[object Boolean]",dn="[object Date]",yr="[object DOMException]",Or="[object Error]",Ur="[object Function]",He="[object GeneratorFunction]",we="[object Map]",Te="[object Number]",We="[object Null]",kt="[object Object]",ea="[object Promise]",ta="[object Proxy]",mi="[object RegExp]",wn="[object Set]",Ei="[object String]",Wi="[object Symbol]",rc="[object Undefined]",tt="[object WeakMap]",Zo="[object WeakSet]",Qo="[object ArrayBuffer]",Bi="[object DataView]",ic="[object Float32Array]",oc="[object Float64Array]",sc="[object Int8Array]",ac="[object Int16Array]",lc="[object Int32Array]",cc="[object Uint8Array]",uc="[object Uint8ClampedArray]",dc="[object Uint16Array]",_c="[object Uint32Array]",Nm=/\b__p \+= '';/g,Lm=/\b(__p \+=) '' \+/g,Rm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,T_=/&(?:amp|lt|gt|quot|#39);/g,k_=/[&<>"']/g,Dm=RegExp(T_.source),Tm=RegExp(k_.source),km=/<%-([\s\S]+?)%>/g,Mm=/<%([\s\S]+?)%>/g,M_=/<%=([\s\S]+?)%>/g,Um=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gm=/^\w*$/,$m=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fc=/[\\^$.*+?()[\]{}|]/g,Fm=RegExp(fc.source),gc=/^\s+/,Pm=/\s/,zm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Hm=/\{\n\/\* \[wrapped with (.+)\] \*/,Wm=/,? & /,Bm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ym=/[()=,{}\[\]\/\s]/,jm=/\\(\\)?/g,Km=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,U_=/\w*$/,Vm=/^[-+]0x[0-9a-f]+$/i,Xm=/^0b[01]+$/i,qm=/^\[object .+?Constructor\]$/,Zm=/^0o[0-7]+$/i,Qm=/^(?:0|[1-9]\d*)$/,Jm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,na=/($^)/,e1=/['\n\r\u2028\u2029\\]/g,ra="\\ud800-\\udfff",t1="\\u0300-\\u036f",n1="\\ufe20-\\ufe2f",r1="\\u20d0-\\u20ff",G_=t1+n1+r1,$_="\\u2700-\\u27bf",F_="a-z\\xdf-\\xf6\\xf8-\\xff",i1="\\xac\\xb1\\xd7\\xf7",o1="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",s1="\\u2000-\\u206f",a1=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",P_="A-Z\\xc0-\\xd6\\xd8-\\xde",z_="\\ufe0e\\ufe0f",H_=i1+o1+s1+a1,hc="['’]",l1="["+ra+"]",W_="["+H_+"]",ia="["+G_+"]",B_="\\d+",c1="["+$_+"]",Y_="["+F_+"]",j_="[^"+ra+H_+B_+$_+F_+P_+"]",vc="\\ud83c[\\udffb-\\udfff]",u1="(?:"+ia+"|"+vc+")",K_="[^"+ra+"]",pc="(?:\\ud83c[\\udde6-\\uddff]){2}",mc="[\\ud800-\\udbff][\\udc00-\\udfff]",Yi="["+P_+"]",V_="\\u200d",X_="(?:"+Y_+"|"+j_+")",d1="(?:"+Yi+"|"+j_+")",q_="(?:"+hc+"(?:d|ll|m|re|s|t|ve))?",Z_="(?:"+hc+"(?:D|LL|M|RE|S|T|VE))?",Q_=u1+"?",J_="["+z_+"]?",_1="(?:"+V_+"(?:"+[K_,pc,mc].join("|")+")"+J_+Q_+")*",f1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",g1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ef=J_+Q_+_1,h1="(?:"+[c1,pc,mc].join("|")+")"+ef,v1="(?:"+[K_+ia+"?",ia,pc,mc,l1].join("|")+")",p1=RegExp(hc,"g"),m1=RegExp(ia,"g"),Ec=RegExp(vc+"(?="+vc+")|"+v1+ef,"g"),E1=RegExp([Yi+"?"+Y_+"+"+q_+"(?="+[W_,Yi,"$"].join("|")+")",d1+"+"+Z_+"(?="+[W_,Yi+X_,"$"].join("|")+")",Yi+"?"+X_+"+"+q_,Yi+"+"+Z_,g1,f1,B_,h1].join("|"),"g"),C1=RegExp("["+V_+ra+G_+z_+"]"),b1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,I1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],w1=-1,Gt={};Gt[ic]=Gt[oc]=Gt[sc]=Gt[ac]=Gt[lc]=Gt[cc]=Gt[uc]=Gt[dc]=Gt[_c]=!0,Gt[dt]=Gt[It]=Gt[Qo]=Gt[In]=Gt[Bi]=Gt[dn]=Gt[Or]=Gt[Ur]=Gt[we]=Gt[Te]=Gt[kt]=Gt[mi]=Gt[wn]=Gt[Ei]=Gt[tt]=!1;var Mt={};Mt[dt]=Mt[It]=Mt[Qo]=Mt[Bi]=Mt[In]=Mt[dn]=Mt[ic]=Mt[oc]=Mt[sc]=Mt[ac]=Mt[lc]=Mt[we]=Mt[Te]=Mt[kt]=Mt[mi]=Mt[wn]=Mt[Ei]=Mt[Wi]=Mt[cc]=Mt[uc]=Mt[dc]=Mt[_c]=!0,Mt[Or]=Mt[Ur]=Mt[tt]=!1;var y1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},O1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},x1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},S1=parseFloat,N1=parseInt,tf=typeof Ya=="object"&&Ya&&Ya.Object===Object&&Ya,L1=typeof self=="object"&&self&&self.Object===Object&&self,sn=tf||L1||Function("return this")(),Cc=e&&!e.nodeType&&e,Ci=Cc&&!0&&t&&!t.nodeType&&t,nf=Ci&&Ci.exports===Cc,bc=nf&&tf.process,Zn=function(){try{var V=Ci&&Ci.require&&Ci.require("util").types;return V||bc&&bc.binding&&bc.binding("util")}catch{}}(),rf=Zn&&Zn.isArrayBuffer,of=Zn&&Zn.isDate,sf=Zn&&Zn.isMap,af=Zn&&Zn.isRegExp,lf=Zn&&Zn.isSet,cf=Zn&&Zn.isTypedArray;function Ln(V,ae,re){switch(re.length){case 0:return V.call(ae);case 1:return V.call(ae,re[0]);case 2:return V.call(ae,re[0],re[1]);case 3:return V.call(ae,re[0],re[1],re[2])}return V.apply(ae,re)}function R1(V,ae,re,Me){for(var nt=-1,yt=V==null?0:V.length;++nt<yt;){var Zt=V[nt];ae(Me,Zt,re(Zt),V)}return Me}function Qn(V,ae){for(var re=-1,Me=V==null?0:V.length;++re<Me&&ae(V[re],re,V)!==!1;);return V}function D1(V,ae){for(var re=V==null?0:V.length;re--&&ae(V[re],re,V)!==!1;);return V}function uf(V,ae){for(var re=-1,Me=V==null?0:V.length;++re<Me;)if(!ae(V[re],re,V))return!1;return!0}function ti(V,ae){for(var re=-1,Me=V==null?0:V.length,nt=0,yt=[];++re<Me;){var Zt=V[re];ae(Zt,re,V)&&(yt[nt++]=Zt)}return yt}function oa(V,ae){var re=V==null?0:V.length;return!!re&&ji(V,ae,0)>-1}function Ic(V,ae,re){for(var Me=-1,nt=V==null?0:V.length;++Me<nt;)if(re(ae,V[Me]))return!0;return!1}function Ft(V,ae){for(var re=-1,Me=V==null?0:V.length,nt=Array(Me);++re<Me;)nt[re]=ae(V[re],re,V);return nt}function ni(V,ae){for(var re=-1,Me=ae.length,nt=V.length;++re<Me;)V[nt+re]=ae[re];return V}function wc(V,ae,re,Me){var nt=-1,yt=V==null?0:V.length;for(Me&&yt&&(re=V[++nt]);++nt<yt;)re=ae(re,V[nt],nt,V);return re}function T1(V,ae,re,Me){var nt=V==null?0:V.length;for(Me&&nt&&(re=V[--nt]);nt--;)re=ae(re,V[nt],nt,V);return re}function yc(V,ae){for(var re=-1,Me=V==null?0:V.length;++re<Me;)if(ae(V[re],re,V))return!0;return!1}var k1=Oc("length");function M1(V){return V.split("")}function U1(V){return V.match(Bm)||[]}function df(V,ae,re){var Me;return re(V,function(nt,yt,Zt){if(ae(nt,yt,Zt))return Me=yt,!1}),Me}function sa(V,ae,re,Me){for(var nt=V.length,yt=re+(Me?1:-1);Me?yt--:++yt<nt;)if(ae(V[yt],yt,V))return yt;return-1}function ji(V,ae,re){return ae===ae?V1(V,ae,re):sa(V,_f,re)}function G1(V,ae,re,Me){for(var nt=re-1,yt=V.length;++nt<yt;)if(Me(V[nt],ae))return nt;return-1}function _f(V){return V!==V}function ff(V,ae){var re=V==null?0:V.length;return re?xc(V,ae)/re:De}function Oc(V){return function(ae){return ae==null?n:ae[V]}}function Ac(V){return function(ae){return V==null?n:V[ae]}}function gf(V,ae,re,Me,nt){return nt(V,function(yt,Zt,Tt){re=Me?(Me=!1,yt):ae(re,yt,Zt,Tt)}),re}function $1(V,ae){var re=V.length;for(V.sort(ae);re--;)V[re]=V[re].value;return V}function xc(V,ae){for(var re,Me=-1,nt=V.length;++Me<nt;){var yt=ae(V[Me]);yt!==n&&(re=re===n?yt:re+yt)}return re}function Sc(V,ae){for(var re=-1,Me=Array(V);++re<V;)Me[re]=ae(re);return Me}function F1(V,ae){return Ft(ae,function(re){return[re,V[re]]})}function hf(V){return V&&V.slice(0,Ef(V)+1).replace(gc,"")}function Rn(V){return function(ae){return V(ae)}}function Nc(V,ae){return Ft(ae,function(re){return V[re]})}function Jo(V,ae){return V.has(ae)}function vf(V,ae){for(var re=-1,Me=V.length;++re<Me&&ji(ae,V[re],0)>-1;);return re}function pf(V,ae){for(var re=V.length;re--&&ji(ae,V[re],0)>-1;);return re}function P1(V,ae){for(var re=V.length,Me=0;re--;)V[re]===ae&&++Me;return Me}var z1=Ac(y1),H1=Ac(O1);function W1(V){return"\\"+x1[V]}function B1(V,ae){return V==null?n:V[ae]}function Ki(V){return C1.test(V)}function Y1(V){return b1.test(V)}function j1(V){for(var ae,re=[];!(ae=V.next()).done;)re.push(ae.value);return re}function Lc(V){var ae=-1,re=Array(V.size);return V.forEach(function(Me,nt){re[++ae]=[nt,Me]}),re}function mf(V,ae){return function(re){return V(ae(re))}}function ri(V,ae){for(var re=-1,Me=V.length,nt=0,yt=[];++re<Me;){var Zt=V[re];(Zt===ae||Zt===g)&&(V[re]=g,yt[nt++]=re)}return yt}function aa(V){var ae=-1,re=Array(V.size);return V.forEach(function(Me){re[++ae]=Me}),re}function K1(V){var ae=-1,re=Array(V.size);return V.forEach(function(Me){re[++ae]=[Me,Me]}),re}function V1(V,ae,re){for(var Me=re-1,nt=V.length;++Me<nt;)if(V[Me]===ae)return Me;return-1}function X1(V,ae,re){for(var Me=re+1;Me--;)if(V[Me]===ae)return Me;return Me}function Vi(V){return Ki(V)?Z1(V):k1(V)}function hr(V){return Ki(V)?Q1(V):M1(V)}function Ef(V){for(var ae=V.length;ae--&&Pm.test(V.charAt(ae)););return ae}var q1=Ac(A1);function Z1(V){for(var ae=Ec.lastIndex=0;Ec.test(V);)++ae;return ae}function Q1(V){return V.match(Ec)||[]}function J1(V){return V.match(E1)||[]}var eE=function V(ae){ae=ae==null?sn:Xi.defaults(sn.Object(),ae,Xi.pick(sn,I1));var re=ae.Array,Me=ae.Date,nt=ae.Error,yt=ae.Function,Zt=ae.Math,Tt=ae.Object,Rc=ae.RegExp,tE=ae.String,Jn=ae.TypeError,la=re.prototype,nE=yt.prototype,qi=Tt.prototype,ca=ae["__core-js_shared__"],ua=nE.toString,St=qi.hasOwnProperty,rE=0,Cf=function(){var a=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),da=qi.toString,iE=ua.call(Tt),oE=sn._,sE=Rc("^"+ua.call(St).replace(fc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_a=nf?ae.Buffer:n,ii=ae.Symbol,fa=ae.Uint8Array,bf=_a?_a.allocUnsafe:n,ga=mf(Tt.getPrototypeOf,Tt),If=Tt.create,wf=qi.propertyIsEnumerable,ha=la.splice,yf=ii?ii.isConcatSpreadable:n,es=ii?ii.iterator:n,bi=ii?ii.toStringTag:n,va=function(){try{var a=Ai(Tt,"defineProperty");return a({},"",{}),a}catch{}}(),aE=ae.clearTimeout!==sn.clearTimeout&&ae.clearTimeout,lE=Me&&Me.now!==sn.Date.now&&Me.now,cE=ae.setTimeout!==sn.setTimeout&&ae.setTimeout,pa=Zt.ceil,ma=Zt.floor,Dc=Tt.getOwnPropertySymbols,uE=_a?_a.isBuffer:n,Of=ae.isFinite,dE=la.join,_E=mf(Tt.keys,Tt),Qt=Zt.max,_n=Zt.min,fE=Me.now,gE=ae.parseInt,Af=Zt.random,hE=la.reverse,Tc=Ai(ae,"DataView"),ts=Ai(ae,"Map"),kc=Ai(ae,"Promise"),Zi=Ai(ae,"Set"),ns=Ai(ae,"WeakMap"),rs=Ai(Tt,"create"),Ea=ns&&new ns,Qi={},vE=xi(Tc),pE=xi(ts),mE=xi(kc),EE=xi(Zi),CE=xi(ns),Ca=ii?ii.prototype:n,is=Ca?Ca.valueOf:n,xf=Ca?Ca.toString:n;function R(a){if(Bt(a)&&!rt(a)&&!(a instanceof ht)){if(a instanceof er)return a;if(St.call(a,"__wrapped__"))return Sg(a)}return new er(a)}var Ji=function(){function a(){}return function(c){if(!Pt(c))return{};if(If)return If(c);a.prototype=c;var p=new a;return a.prototype=n,p}}();function ba(){}function er(a,c){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=n}R.templateSettings={escape:km,evaluate:Mm,interpolate:M_,variable:"",imports:{_:R}},R.prototype=ba.prototype,R.prototype.constructor=R,er.prototype=Ji(ba.prototype),er.prototype.constructor=er;function ht(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function bE(){var a=new ht(this.__wrapped__);return a.__actions__=yn(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=yn(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=yn(this.__views__),a}function IE(){if(this.__filtered__){var a=new ht(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function wE(){var a=this.__wrapped__.value(),c=this.__dir__,p=rt(a),C=c<0,y=p?a.length:0,D=MC(0,y,this.__views__),z=D.start,K=D.end,q=K-z,de=C?K:z-1,_e=this.__iteratees__,pe=_e.length,Ne=0,Pe=_n(q,this.__takeCount__);if(!p||!C&&y==q&&Pe==q)return Zf(a,this.__actions__);var Ve=[];e:for(;q--&&Ne<Pe;){de+=c;for(var ct=-1,Xe=a[de];++ct<pe;){var gt=_e[ct],vt=gt.iteratee,kn=gt.type,mn=vt(Xe);if(kn==Ie)Xe=mn;else if(!mn){if(kn==Z)continue e;break e}}Ve[Ne++]=Xe}return Ve}ht.prototype=Ji(ba.prototype),ht.prototype.constructor=ht;function Ii(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var C=a[c];this.set(C[0],C[1])}}function yE(){this.__data__=rs?rs(null):{},this.size=0}function OE(a){var c=this.has(a)&&delete this.__data__[a];return this.size-=c?1:0,c}function AE(a){var c=this.__data__;if(rs){var p=c[a];return p===u?n:p}return St.call(c,a)?c[a]:n}function xE(a){var c=this.__data__;return rs?c[a]!==n:St.call(c,a)}function SE(a,c){var p=this.__data__;return this.size+=this.has(a)?0:1,p[a]=rs&&c===n?u:c,this}Ii.prototype.clear=yE,Ii.prototype.delete=OE,Ii.prototype.get=AE,Ii.prototype.has=xE,Ii.prototype.set=SE;function Gr(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var C=a[c];this.set(C[0],C[1])}}function NE(){this.__data__=[],this.size=0}function LE(a){var c=this.__data__,p=Ia(c,a);if(p<0)return!1;var C=c.length-1;return p==C?c.pop():ha.call(c,p,1),--this.size,!0}function RE(a){var c=this.__data__,p=Ia(c,a);return p<0?n:c[p][1]}function DE(a){return Ia(this.__data__,a)>-1}function TE(a,c){var p=this.__data__,C=Ia(p,a);return C<0?(++this.size,p.push([a,c])):p[C][1]=c,this}Gr.prototype.clear=NE,Gr.prototype.delete=LE,Gr.prototype.get=RE,Gr.prototype.has=DE,Gr.prototype.set=TE;function $r(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var C=a[c];this.set(C[0],C[1])}}function kE(){this.size=0,this.__data__={hash:new Ii,map:new(ts||Gr),string:new Ii}}function ME(a){var c=ka(this,a).delete(a);return this.size-=c?1:0,c}function UE(a){return ka(this,a).get(a)}function GE(a){return ka(this,a).has(a)}function $E(a,c){var p=ka(this,a),C=p.size;return p.set(a,c),this.size+=p.size==C?0:1,this}$r.prototype.clear=kE,$r.prototype.delete=ME,$r.prototype.get=UE,$r.prototype.has=GE,$r.prototype.set=$E;function wi(a){var c=-1,p=a==null?0:a.length;for(this.__data__=new $r;++c<p;)this.add(a[c])}function FE(a){return this.__data__.set(a,u),this}function PE(a){return this.__data__.has(a)}wi.prototype.add=wi.prototype.push=FE,wi.prototype.has=PE;function vr(a){var c=this.__data__=new Gr(a);this.size=c.size}function zE(){this.__data__=new Gr,this.size=0}function HE(a){var c=this.__data__,p=c.delete(a);return this.size=c.size,p}function WE(a){return this.__data__.get(a)}function BE(a){return this.__data__.has(a)}function YE(a,c){var p=this.__data__;if(p instanceof Gr){var C=p.__data__;if(!ts||C.length<i-1)return C.push([a,c]),this.size=++p.size,this;p=this.__data__=new $r(C)}return p.set(a,c),this.size=p.size,this}vr.prototype.clear=zE,vr.prototype.delete=HE,vr.prototype.get=WE,vr.prototype.has=BE,vr.prototype.set=YE;function Sf(a,c){var p=rt(a),C=!p&&Si(a),y=!p&&!C&&ci(a),D=!p&&!C&&!y&&ro(a),z=p||C||y||D,K=z?Sc(a.length,tE):[],q=K.length;for(var de in a)(c||St.call(a,de))&&!(z&&(de=="length"||y&&(de=="offset"||de=="parent")||D&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Hr(de,q)))&&K.push(de);return K}function Nf(a){var c=a.length;return c?a[Yc(0,c-1)]:n}function jE(a,c){return Ma(yn(a),yi(c,0,a.length))}function KE(a){return Ma(yn(a))}function Mc(a,c,p){(p!==n&&!pr(a[c],p)||p===n&&!(c in a))&&Fr(a,c,p)}function os(a,c,p){var C=a[c];(!(St.call(a,c)&&pr(C,p))||p===n&&!(c in a))&&Fr(a,c,p)}function Ia(a,c){for(var p=a.length;p--;)if(pr(a[p][0],c))return p;return-1}function VE(a,c,p,C){return oi(a,function(y,D,z){c(C,y,p(y),z)}),C}function Lf(a,c){return a&&xr(c,en(c),a)}function XE(a,c){return a&&xr(c,An(c),a)}function Fr(a,c,p){c=="__proto__"&&va?va(a,c,{configurable:!0,enumerable:!0,value:p,writable:!0}):a[c]=p}function Uc(a,c){for(var p=-1,C=c.length,y=re(C),D=a==null;++p<C;)y[p]=D?n:vu(a,c[p]);return y}function yi(a,c,p){return a===a&&(p!==n&&(a=a<=p?a:p),c!==n&&(a=a>=c?a:c)),a}function tr(a,c,p,C,y,D){var z,K=c&h,q=c&v,de=c&m;if(p&&(z=y?p(a,C,y,D):p(a)),z!==n)return z;if(!Pt(a))return a;var _e=rt(a);if(_e){if(z=GC(a),!K)return yn(a,z)}else{var pe=fn(a),Ne=pe==Ur||pe==He;if(ci(a))return eg(a,K);if(pe==kt||pe==dt||Ne&&!y){if(z=q||Ne?{}:Eg(a),!K)return q?AC(a,XE(z,a)):OC(a,Lf(z,a))}else{if(!Mt[pe])return y?a:{};z=$C(a,pe,K)}}D||(D=new vr);var Pe=D.get(a);if(Pe)return Pe;D.set(a,z),Vg(a)?a.forEach(function(Xe){z.add(tr(Xe,c,p,Xe,a,D))}):jg(a)&&a.forEach(function(Xe,gt){z.set(gt,tr(Xe,c,p,gt,a,D))});var Ve=de?q?nu:tu:q?An:en,ct=_e?n:Ve(a);return Qn(ct||a,function(Xe,gt){ct&&(gt=Xe,Xe=a[gt]),os(z,gt,tr(Xe,c,p,gt,a,D))}),z}function qE(a){var c=en(a);return function(p){return Rf(p,a,c)}}function Rf(a,c,p){var C=p.length;if(a==null)return!C;for(a=Tt(a);C--;){var y=p[C],D=c[y],z=a[y];if(z===n&&!(y in a)||!D(z))return!1}return!0}function Df(a,c,p){if(typeof a!="function")throw new Jn(s);return _s(function(){a.apply(n,p)},c)}function ss(a,c,p,C){var y=-1,D=oa,z=!0,K=a.length,q=[],de=c.length;if(!K)return q;p&&(c=Ft(c,Rn(p))),C?(D=Ic,z=!1):c.length>=i&&(D=Jo,z=!1,c=new wi(c));e:for(;++y<K;){var _e=a[y],pe=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,z&&pe===pe){for(var Ne=de;Ne--;)if(c[Ne]===pe)continue e;q.push(_e)}else D(c,pe,C)||q.push(_e)}return q}var oi=og(Ar),Tf=og($c,!0);function ZE(a,c){var p=!0;return oi(a,function(C,y,D){return p=!!c(C,y,D),p}),p}function wa(a,c,p){for(var C=-1,y=a.length;++C<y;){var D=a[C],z=c(D);if(z!=null&&(K===n?z===z&&!Tn(z):p(z,K)))var K=z,q=D}return q}function QE(a,c,p,C){var y=a.length;for(p=at(p),p<0&&(p=-p>y?0:y+p),C=C===n||C>y?y:at(C),C<0&&(C+=y),C=p>C?0:qg(C);p<C;)a[p++]=c;return a}function kf(a,c){var p=[];return oi(a,function(C,y,D){c(C,y,D)&&p.push(C)}),p}function an(a,c,p,C,y){var D=-1,z=a.length;for(p||(p=PC),y||(y=[]);++D<z;){var K=a[D];c>0&&p(K)?c>1?an(K,c-1,p,C,y):ni(y,K):C||(y[y.length]=K)}return y}var Gc=sg(),Mf=sg(!0);function Ar(a,c){return a&&Gc(a,c,en)}function $c(a,c){return a&&Mf(a,c,en)}function ya(a,c){return ti(c,function(p){return Wr(a[p])})}function Oi(a,c){c=ai(c,a);for(var p=0,C=c.length;a!=null&&p<C;)a=a[Sr(c[p++])];return p&&p==C?a:n}function Uf(a,c,p){var C=c(a);return rt(a)?C:ni(C,p(a))}function vn(a){return a==null?a===n?rc:We:bi&&bi in Tt(a)?kC(a):KC(a)}function Fc(a,c){return a>c}function JE(a,c){return a!=null&&St.call(a,c)}function eC(a,c){return a!=null&&c in Tt(a)}function tC(a,c,p){return a>=_n(c,p)&&a<Qt(c,p)}function Pc(a,c,p){for(var C=p?Ic:oa,y=a[0].length,D=a.length,z=D,K=re(D),q=1/0,de=[];z--;){var _e=a[z];z&&c&&(_e=Ft(_e,Rn(c))),q=_n(_e.length,q),K[z]=!p&&(c||y>=120&&_e.length>=120)?new wi(z&&_e):n}_e=a[0];var pe=-1,Ne=K[0];e:for(;++pe<y&&de.length<q;){var Pe=_e[pe],Ve=c?c(Pe):Pe;if(Pe=p||Pe!==0?Pe:0,!(Ne?Jo(Ne,Ve):C(de,Ve,p))){for(z=D;--z;){var ct=K[z];if(!(ct?Jo(ct,Ve):C(a[z],Ve,p)))continue e}Ne&&Ne.push(Ve),de.push(Pe)}}return de}function nC(a,c,p,C){return Ar(a,function(y,D,z){c(C,p(y),D,z)}),C}function as(a,c,p){c=ai(c,a),a=wg(a,c);var C=a==null?a:a[Sr(rr(c))];return C==null?n:Ln(C,a,p)}function Gf(a){return Bt(a)&&vn(a)==dt}function rC(a){return Bt(a)&&vn(a)==Qo}function iC(a){return Bt(a)&&vn(a)==dn}function ls(a,c,p,C,y){return a===c?!0:a==null||c==null||!Bt(a)&&!Bt(c)?a!==a&&c!==c:oC(a,c,p,C,ls,y)}function oC(a,c,p,C,y,D){var z=rt(a),K=rt(c),q=z?It:fn(a),de=K?It:fn(c);q=q==dt?kt:q,de=de==dt?kt:de;var _e=q==kt,pe=de==kt,Ne=q==de;if(Ne&&ci(a)){if(!ci(c))return!1;z=!0,_e=!1}if(Ne&&!_e)return D||(D=new vr),z||ro(a)?vg(a,c,p,C,y,D):DC(a,c,q,p,C,y,D);if(!(p&E)){var Pe=_e&&St.call(a,"__wrapped__"),Ve=pe&&St.call(c,"__wrapped__");if(Pe||Ve){var ct=Pe?a.value():a,Xe=Ve?c.value():c;return D||(D=new vr),y(ct,Xe,p,C,D)}}return Ne?(D||(D=new vr),TC(a,c,p,C,y,D)):!1}function sC(a){return Bt(a)&&fn(a)==we}function zc(a,c,p,C){var y=p.length,D=y,z=!C;if(a==null)return!D;for(a=Tt(a);y--;){var K=p[y];if(z&&K[2]?K[1]!==a[K[0]]:!(K[0]in a))return!1}for(;++y<D;){K=p[y];var q=K[0],de=a[q],_e=K[1];if(z&&K[2]){if(de===n&&!(q in a))return!1}else{var pe=new vr;if(C)var Ne=C(de,_e,q,a,c,pe);if(!(Ne===n?ls(_e,de,E|b,C,pe):Ne))return!1}}return!0}function $f(a){if(!Pt(a)||HC(a))return!1;var c=Wr(a)?sE:qm;return c.test(xi(a))}function aC(a){return Bt(a)&&vn(a)==mi}function lC(a){return Bt(a)&&fn(a)==wn}function cC(a){return Bt(a)&&za(a.length)&&!!Gt[vn(a)]}function Ff(a){return typeof a=="function"?a:a==null?xn:typeof a=="object"?rt(a)?Hf(a[0],a[1]):zf(a):ah(a)}function Hc(a){if(!ds(a))return _E(a);var c=[];for(var p in Tt(a))St.call(a,p)&&p!="constructor"&&c.push(p);return c}function uC(a){if(!Pt(a))return jC(a);var c=ds(a),p=[];for(var C in a)C=="constructor"&&(c||!St.call(a,C))||p.push(C);return p}function Wc(a,c){return a<c}function Pf(a,c){var p=-1,C=On(a)?re(a.length):[];return oi(a,function(y,D,z){C[++p]=c(y,D,z)}),C}function zf(a){var c=iu(a);return c.length==1&&c[0][2]?bg(c[0][0],c[0][1]):function(p){return p===a||zc(p,a,c)}}function Hf(a,c){return su(a)&&Cg(c)?bg(Sr(a),c):function(p){var C=vu(p,a);return C===n&&C===c?pu(p,a):ls(c,C,E|b)}}function Oa(a,c,p,C,y){a!==c&&Gc(c,function(D,z){if(y||(y=new vr),Pt(D))dC(a,c,z,p,Oa,C,y);else{var K=C?C(lu(a,z),D,z+"",a,c,y):n;K===n&&(K=D),Mc(a,z,K)}},An)}function dC(a,c,p,C,y,D,z){var K=lu(a,p),q=lu(c,p),de=z.get(q);if(de){Mc(a,p,de);return}var _e=D?D(K,q,p+"",a,c,z):n,pe=_e===n;if(pe){var Ne=rt(q),Pe=!Ne&&ci(q),Ve=!Ne&&!Pe&&ro(q);_e=q,Ne||Pe||Ve?rt(K)?_e=K:jt(K)?_e=yn(K):Pe?(pe=!1,_e=eg(q,!0)):Ve?(pe=!1,_e=tg(q,!0)):_e=[]:fs(q)||Si(q)?(_e=K,Si(K)?_e=Zg(K):(!Pt(K)||Wr(K))&&(_e=Eg(q))):pe=!1}pe&&(z.set(q,_e),y(_e,q,C,D,z),z.delete(q)),Mc(a,p,_e)}function Wf(a,c){var p=a.length;if(p)return c+=c<0?p:0,Hr(c,p)?a[c]:n}function Bf(a,c,p){c.length?c=Ft(c,function(D){return rt(D)?function(z){return Oi(z,D.length===1?D[0]:D)}:D}):c=[xn];var C=-1;c=Ft(c,Rn(Ke()));var y=Pf(a,function(D,z,K){var q=Ft(c,function(de){return de(D)});return{criteria:q,index:++C,value:D}});return $1(y,function(D,z){return yC(D,z,p)})}function _C(a,c){return Yf(a,c,function(p,C){return pu(a,C)})}function Yf(a,c,p){for(var C=-1,y=c.length,D={};++C<y;){var z=c[C],K=Oi(a,z);p(K,z)&&cs(D,ai(z,a),K)}return D}function fC(a){return function(c){return Oi(c,a)}}function Bc(a,c,p,C){var y=C?G1:ji,D=-1,z=c.length,K=a;for(a===c&&(c=yn(c)),p&&(K=Ft(a,Rn(p)));++D<z;)for(var q=0,de=c[D],_e=p?p(de):de;(q=y(K,_e,q,C))>-1;)K!==a&&ha.call(K,q,1),ha.call(a,q,1);return a}function jf(a,c){for(var p=a?c.length:0,C=p-1;p--;){var y=c[p];if(p==C||y!==D){var D=y;Hr(y)?ha.call(a,y,1):Vc(a,y)}}return a}function Yc(a,c){return a+ma(Af()*(c-a+1))}function gC(a,c,p,C){for(var y=-1,D=Qt(pa((c-a)/(p||1)),0),z=re(D);D--;)z[C?D:++y]=a,a+=p;return z}function jc(a,c){var p="";if(!a||c<1||c>Ae)return p;do c%2&&(p+=a),c=ma(c/2),c&&(a+=a);while(c);return p}function _t(a,c){return cu(Ig(a,c,xn),a+"")}function hC(a){return Nf(io(a))}function vC(a,c){var p=io(a);return Ma(p,yi(c,0,p.length))}function cs(a,c,p,C){if(!Pt(a))return a;c=ai(c,a);for(var y=-1,D=c.length,z=D-1,K=a;K!=null&&++y<D;){var q=Sr(c[y]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return a;if(y!=z){var _e=K[q];de=C?C(_e,q,K):n,de===n&&(de=Pt(_e)?_e:Hr(c[y+1])?[]:{})}os(K,q,de),K=K[q]}return a}var Kf=Ea?function(a,c){return Ea.set(a,c),a}:xn,pC=va?function(a,c){return va(a,"toString",{configurable:!0,enumerable:!1,value:Eu(c),writable:!0})}:xn;function mC(a){return Ma(io(a))}function nr(a,c,p){var C=-1,y=a.length;c<0&&(c=-c>y?0:y+c),p=p>y?y:p,p<0&&(p+=y),y=c>p?0:p-c>>>0,c>>>=0;for(var D=re(y);++C<y;)D[C]=a[C+c];return D}function EC(a,c){var p;return oi(a,function(C,y,D){return p=c(C,y,D),!p}),!!p}function Aa(a,c,p){var C=0,y=a==null?C:a.length;if(typeof c=="number"&&c===c&&y<=ut){for(;C<y;){var D=C+y>>>1,z=a[D];z!==null&&!Tn(z)&&(p?z<=c:z<c)?C=D+1:y=D}return y}return Kc(a,c,xn,p)}function Kc(a,c,p,C){var y=0,D=a==null?0:a.length;if(D===0)return 0;c=p(c);for(var z=c!==c,K=c===null,q=Tn(c),de=c===n;y<D;){var _e=ma((y+D)/2),pe=p(a[_e]),Ne=pe!==n,Pe=pe===null,Ve=pe===pe,ct=Tn(pe);if(z)var Xe=C||Ve;else de?Xe=Ve&&(C||Ne):K?Xe=Ve&&Ne&&(C||!Pe):q?Xe=Ve&&Ne&&!Pe&&(C||!ct):Pe||ct?Xe=!1:Xe=C?pe<=c:pe<c;Xe?y=_e+1:D=_e}return _n(D,st)}function Vf(a,c){for(var p=-1,C=a.length,y=0,D=[];++p<C;){var z=a[p],K=c?c(z):z;if(!p||!pr(K,q)){var q=K;D[y++]=z===0?0:z}}return D}function Xf(a){return typeof a=="number"?a:Tn(a)?De:+a}function Dn(a){if(typeof a=="string")return a;if(rt(a))return Ft(a,Dn)+"";if(Tn(a))return xf?xf.call(a):"";var c=a+"";return c=="0"&&1/a==-1/0?"-0":c}function si(a,c,p){var C=-1,y=oa,D=a.length,z=!0,K=[],q=K;if(p)z=!1,y=Ic;else if(D>=i){var de=c?null:LC(a);if(de)return aa(de);z=!1,y=Jo,q=new wi}else q=c?[]:K;e:for(;++C<D;){var _e=a[C],pe=c?c(_e):_e;if(_e=p||_e!==0?_e:0,z&&pe===pe){for(var Ne=q.length;Ne--;)if(q[Ne]===pe)continue e;c&&q.push(pe),K.push(_e)}else y(q,pe,p)||(q!==K&&q.push(pe),K.push(_e))}return K}function Vc(a,c){return c=ai(c,a),a=wg(a,c),a==null||delete a[Sr(rr(c))]}function qf(a,c,p,C){return cs(a,c,p(Oi(a,c)),C)}function xa(a,c,p,C){for(var y=a.length,D=C?y:-1;(C?D--:++D<y)&&c(a[D],D,a););return p?nr(a,C?0:D,C?D+1:y):nr(a,C?D+1:0,C?y:D)}function Zf(a,c){var p=a;return p instanceof ht&&(p=p.value()),wc(c,function(C,y){return y.func.apply(y.thisArg,ni([C],y.args))},p)}function Xc(a,c,p){var C=a.length;if(C<2)return C?si(a[0]):[];for(var y=-1,D=re(C);++y<C;)for(var z=a[y],K=-1;++K<C;)K!=y&&(D[y]=ss(D[y]||z,a[K],c,p));return si(an(D,1),c,p)}function Qf(a,c,p){for(var C=-1,y=a.length,D=c.length,z={};++C<y;){var K=C<D?c[C]:n;p(z,a[C],K)}return z}function qc(a){return jt(a)?a:[]}function Zc(a){return typeof a=="function"?a:xn}function ai(a,c){return rt(a)?a:su(a,c)?[a]:xg(At(a))}var CC=_t;function li(a,c,p){var C=a.length;return p=p===n?C:p,!c&&p>=C?a:nr(a,c,p)}var Jf=aE||function(a){return sn.clearTimeout(a)};function eg(a,c){if(c)return a.slice();var p=a.length,C=bf?bf(p):new a.constructor(p);return a.copy(C),C}function Qc(a){var c=new a.constructor(a.byteLength);return new fa(c).set(new fa(a)),c}function bC(a,c){var p=c?Qc(a.buffer):a.buffer;return new a.constructor(p,a.byteOffset,a.byteLength)}function IC(a){var c=new a.constructor(a.source,U_.exec(a));return c.lastIndex=a.lastIndex,c}function wC(a){return is?Tt(is.call(a)):{}}function tg(a,c){var p=c?Qc(a.buffer):a.buffer;return new a.constructor(p,a.byteOffset,a.length)}function ng(a,c){if(a!==c){var p=a!==n,C=a===null,y=a===a,D=Tn(a),z=c!==n,K=c===null,q=c===c,de=Tn(c);if(!K&&!de&&!D&&a>c||D&&z&&q&&!K&&!de||C&&z&&q||!p&&q||!y)return 1;if(!C&&!D&&!de&&a<c||de&&p&&y&&!C&&!D||K&&p&&y||!z&&y||!q)return-1}return 0}function yC(a,c,p){for(var C=-1,y=a.criteria,D=c.criteria,z=y.length,K=p.length;++C<z;){var q=ng(y[C],D[C]);if(q){if(C>=K)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return a.index-c.index}function rg(a,c,p,C){for(var y=-1,D=a.length,z=p.length,K=-1,q=c.length,de=Qt(D-z,0),_e=re(q+de),pe=!C;++K<q;)_e[K]=c[K];for(;++y<z;)(pe||y<D)&&(_e[p[y]]=a[y]);for(;de--;)_e[K++]=a[y++];return _e}function ig(a,c,p,C){for(var y=-1,D=a.length,z=-1,K=p.length,q=-1,de=c.length,_e=Qt(D-K,0),pe=re(_e+de),Ne=!C;++y<_e;)pe[y]=a[y];for(var Pe=y;++q<de;)pe[Pe+q]=c[q];for(;++z<K;)(Ne||y<D)&&(pe[Pe+p[z]]=a[y++]);return pe}function yn(a,c){var p=-1,C=a.length;for(c||(c=re(C));++p<C;)c[p]=a[p];return c}function xr(a,c,p,C){var y=!p;p||(p={});for(var D=-1,z=c.length;++D<z;){var K=c[D],q=C?C(p[K],a[K],K,p,a):n;q===n&&(q=a[K]),y?Fr(p,K,q):os(p,K,q)}return p}function OC(a,c){return xr(a,ou(a),c)}function AC(a,c){return xr(a,pg(a),c)}function Sa(a,c){return function(p,C){var y=rt(p)?R1:VE,D=c?c():{};return y(p,a,Ke(C,2),D)}}function eo(a){return _t(function(c,p){var C=-1,y=p.length,D=y>1?p[y-1]:n,z=y>2?p[2]:n;for(D=a.length>3&&typeof D=="function"?(y--,D):n,z&&pn(p[0],p[1],z)&&(D=y<3?n:D,y=1),c=Tt(c);++C<y;){var K=p[C];K&&a(c,K,C,D)}return c})}function og(a,c){return function(p,C){if(p==null)return p;if(!On(p))return a(p,C);for(var y=p.length,D=c?y:-1,z=Tt(p);(c?D--:++D<y)&&C(z[D],D,z)!==!1;);return p}}function sg(a){return function(c,p,C){for(var y=-1,D=Tt(c),z=C(c),K=z.length;K--;){var q=z[a?K:++y];if(p(D[q],q,D)===!1)break}return c}}function xC(a,c,p){var C=c&I,y=us(a);function D(){var z=this&&this!==sn&&this instanceof D?y:a;return z.apply(C?p:this,arguments)}return D}function ag(a){return function(c){c=At(c);var p=Ki(c)?hr(c):n,C=p?p[0]:c.charAt(0),y=p?li(p,1).join(""):c.slice(1);return C[a]()+y}}function to(a){return function(c){return wc(oh(ih(c).replace(p1,"")),a,"")}}function us(a){return function(){var c=arguments;switch(c.length){case 0:return new a;case 1:return new a(c[0]);case 2:return new a(c[0],c[1]);case 3:return new a(c[0],c[1],c[2]);case 4:return new a(c[0],c[1],c[2],c[3]);case 5:return new a(c[0],c[1],c[2],c[3],c[4]);case 6:return new a(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var p=Ji(a.prototype),C=a.apply(p,c);return Pt(C)?C:p}}function SC(a,c,p){var C=us(a);function y(){for(var D=arguments.length,z=re(D),K=D,q=no(y);K--;)z[K]=arguments[K];var de=D<3&&z[0]!==q&&z[D-1]!==q?[]:ri(z,q);if(D-=de.length,D<p)return _g(a,c,Na,y.placeholder,n,z,de,n,n,p-D);var _e=this&&this!==sn&&this instanceof y?C:a;return Ln(_e,this,z)}return y}function lg(a){return function(c,p,C){var y=Tt(c);if(!On(c)){var D=Ke(p,3);c=en(c),p=function(K){return D(y[K],K,y)}}var z=a(c,p,C);return z>-1?y[D?c[z]:z]:n}}function cg(a){return zr(function(c){var p=c.length,C=p,y=er.prototype.thru;for(a&&c.reverse();C--;){var D=c[C];if(typeof D!="function")throw new Jn(s);if(y&&!z&&Ta(D)=="wrapper")var z=new er([],!0)}for(C=z?C:p;++C<p;){D=c[C];var K=Ta(D),q=K=="wrapper"?ru(D):n;q&&au(q[0])&&q[1]==(M|T|G|P)&&!q[4].length&&q[9]==1?z=z[Ta(q[0])].apply(z,q[3]):z=D.length==1&&au(D)?z[K]():z.thru(D)}return function(){var de=arguments,_e=de[0];if(z&&de.length==1&&rt(_e))return z.plant(_e).value();for(var pe=0,Ne=p?c[pe].apply(this,de):_e;++pe<p;)Ne=c[pe].call(this,Ne);return Ne}})}function Na(a,c,p,C,y,D,z,K,q,de){var _e=c&M,pe=c&I,Ne=c&w,Pe=c&(T|k),Ve=c&te,ct=Ne?n:us(a);function Xe(){for(var gt=arguments.length,vt=re(gt),kn=gt;kn--;)vt[kn]=arguments[kn];if(Pe)var mn=no(Xe),Mn=P1(vt,mn);if(C&&(vt=rg(vt,C,y,Pe)),D&&(vt=ig(vt,D,z,Pe)),gt-=Mn,Pe&&gt<de){var Kt=ri(vt,mn);return _g(a,c,Na,Xe.placeholder,p,vt,Kt,K,q,de-gt)}var mr=pe?p:this,Yr=Ne?mr[a]:a;return gt=vt.length,K?vt=VC(vt,K):Ve&&gt>1&&vt.reverse(),_e&&q<gt&&(vt.length=q),this&&this!==sn&&this instanceof Xe&&(Yr=ct||us(Yr)),Yr.apply(mr,vt)}return Xe}function ug(a,c){return function(p,C){return nC(p,a,c(C),{})}}function La(a,c){return function(p,C){var y;if(p===n&&C===n)return c;if(p!==n&&(y=p),C!==n){if(y===n)return C;typeof p=="string"||typeof C=="string"?(p=Dn(p),C=Dn(C)):(p=Xf(p),C=Xf(C)),y=a(p,C)}return y}}function Jc(a){return zr(function(c){return c=Ft(c,Rn(Ke())),_t(function(p){var C=this;return a(c,function(y){return Ln(y,C,p)})})})}function Ra(a,c){c=c===n?" ":Dn(c);var p=c.length;if(p<2)return p?jc(c,a):c;var C=jc(c,pa(a/Vi(c)));return Ki(c)?li(hr(C),0,a).join(""):C.slice(0,a)}function NC(a,c,p,C){var y=c&I,D=us(a);function z(){for(var K=-1,q=arguments.length,de=-1,_e=C.length,pe=re(_e+q),Ne=this&&this!==sn&&this instanceof z?D:a;++de<_e;)pe[de]=C[de];for(;q--;)pe[de++]=arguments[++K];return Ln(Ne,y?p:this,pe)}return z}function dg(a){return function(c,p,C){return C&&typeof C!="number"&&pn(c,p,C)&&(p=C=n),c=Br(c),p===n?(p=c,c=0):p=Br(p),C=C===n?c<p?1:-1:Br(C),gC(c,p,C,a)}}function Da(a){return function(c,p){return typeof c=="string"&&typeof p=="string"||(c=ir(c),p=ir(p)),a(c,p)}}function _g(a,c,p,C,y,D,z,K,q,de){var _e=c&T,pe=_e?z:n,Ne=_e?n:z,Pe=_e?D:n,Ve=_e?n:D;c|=_e?G:Y,c&=~(_e?Y:G),c&A||(c&=-4);var ct=[a,c,y,Pe,pe,Ve,Ne,K,q,de],Xe=p.apply(n,ct);return au(a)&&yg(Xe,ct),Xe.placeholder=C,Og(Xe,a,c)}function eu(a){var c=Zt[a];return function(p,C){if(p=ir(p),C=C==null?0:_n(at(C),292),C&&Of(p)){var y=(At(p)+"e").split("e"),D=c(y[0]+"e"+(+y[1]+C));return y=(At(D)+"e").split("e"),+(y[0]+"e"+(+y[1]-C))}return c(p)}}var LC=Zi&&1/aa(new Zi([,-0]))[1]==Oe?function(a){return new Zi(a)}:Iu;function fg(a){return function(c){var p=fn(c);return p==we?Lc(c):p==wn?K1(c):F1(c,a(c))}}function Pr(a,c,p,C,y,D,z,K){var q=c&w;if(!q&&typeof a!="function")throw new Jn(s);var de=C?C.length:0;if(de||(c&=-97,C=y=n),z=z===n?z:Qt(at(z),0),K=K===n?K:at(K),de-=y?y.length:0,c&Y){var _e=C,pe=y;C=y=n}var Ne=q?n:ru(a),Pe=[a,c,p,C,y,_e,pe,D,z,K];if(Ne&&YC(Pe,Ne),a=Pe[0],c=Pe[1],p=Pe[2],C=Pe[3],y=Pe[4],K=Pe[9]=Pe[9]===n?q?0:a.length:Qt(Pe[9]-de,0),!K&&c&(T|k)&&(c&=-25),!c||c==I)var Ve=xC(a,c,p);else c==T||c==k?Ve=SC(a,c,K):(c==G||c==(I|G))&&!y.length?Ve=NC(a,c,p,C):Ve=Na.apply(n,Pe);var ct=Ne?Kf:yg;return Og(ct(Ve,Pe),a,c)}function gg(a,c,p,C){return a===n||pr(a,qi[p])&&!St.call(C,p)?c:a}function hg(a,c,p,C,y,D){return Pt(a)&&Pt(c)&&(D.set(c,a),Oa(a,c,n,hg,D),D.delete(c)),a}function RC(a){return fs(a)?n:a}function vg(a,c,p,C,y,D){var z=p&E,K=a.length,q=c.length;if(K!=q&&!(z&&q>K))return!1;var de=D.get(a),_e=D.get(c);if(de&&_e)return de==c&&_e==a;var pe=-1,Ne=!0,Pe=p&b?new wi:n;for(D.set(a,c),D.set(c,a);++pe<K;){var Ve=a[pe],ct=c[pe];if(C)var Xe=z?C(ct,Ve,pe,c,a,D):C(Ve,ct,pe,a,c,D);if(Xe!==n){if(Xe)continue;Ne=!1;break}if(Pe){if(!yc(c,function(gt,vt){if(!Jo(Pe,vt)&&(Ve===gt||y(Ve,gt,p,C,D)))return Pe.push(vt)})){Ne=!1;break}}else if(!(Ve===ct||y(Ve,ct,p,C,D))){Ne=!1;break}}return D.delete(a),D.delete(c),Ne}function DC(a,c,p,C,y,D,z){switch(p){case Bi:if(a.byteLength!=c.byteLength||a.byteOffset!=c.byteOffset)return!1;a=a.buffer,c=c.buffer;case Qo:return!(a.byteLength!=c.byteLength||!D(new fa(a),new fa(c)));case In:case dn:case Te:return pr(+a,+c);case Or:return a.name==c.name&&a.message==c.message;case mi:case Ei:return a==c+"";case we:var K=Lc;case wn:var q=C&E;if(K||(K=aa),a.size!=c.size&&!q)return!1;var de=z.get(a);if(de)return de==c;C|=b,z.set(a,c);var _e=vg(K(a),K(c),C,y,D,z);return z.delete(a),_e;case Wi:if(is)return is.call(a)==is.call(c)}return!1}function TC(a,c,p,C,y,D){var z=p&E,K=tu(a),q=K.length,de=tu(c),_e=de.length;if(q!=_e&&!z)return!1;for(var pe=q;pe--;){var Ne=K[pe];if(!(z?Ne in c:St.call(c,Ne)))return!1}var Pe=D.get(a),Ve=D.get(c);if(Pe&&Ve)return Pe==c&&Ve==a;var ct=!0;D.set(a,c),D.set(c,a);for(var Xe=z;++pe<q;){Ne=K[pe];var gt=a[Ne],vt=c[Ne];if(C)var kn=z?C(vt,gt,Ne,c,a,D):C(gt,vt,Ne,a,c,D);if(!(kn===n?gt===vt||y(gt,vt,p,C,D):kn)){ct=!1;break}Xe||(Xe=Ne=="constructor")}if(ct&&!Xe){var mn=a.constructor,Mn=c.constructor;mn!=Mn&&"constructor"in a&&"constructor"in c&&!(typeof mn=="function"&&mn instanceof mn&&typeof Mn=="function"&&Mn instanceof Mn)&&(ct=!1)}return D.delete(a),D.delete(c),ct}function zr(a){return cu(Ig(a,n,Rg),a+"")}function tu(a){return Uf(a,en,ou)}function nu(a){return Uf(a,An,pg)}var ru=Ea?function(a){return Ea.get(a)}:Iu;function Ta(a){for(var c=a.name+"",p=Qi[c],C=St.call(Qi,c)?p.length:0;C--;){var y=p[C],D=y.func;if(D==null||D==a)return y.name}return c}function no(a){var c=St.call(R,"placeholder")?R:a;return c.placeholder}function Ke(){var a=R.iteratee||Cu;return a=a===Cu?Ff:a,arguments.length?a(arguments[0],arguments[1]):a}function ka(a,c){var p=a.__data__;return zC(c)?p[typeof c=="string"?"string":"hash"]:p.map}function iu(a){for(var c=en(a),p=c.length;p--;){var C=c[p],y=a[C];c[p]=[C,y,Cg(y)]}return c}function Ai(a,c){var p=B1(a,c);return $f(p)?p:n}function kC(a){var c=St.call(a,bi),p=a[bi];try{a[bi]=n;var C=!0}catch{}var y=da.call(a);return C&&(c?a[bi]=p:delete a[bi]),y}var ou=Dc?function(a){return a==null?[]:(a=Tt(a),ti(Dc(a),function(c){return wf.call(a,c)}))}:wu,pg=Dc?function(a){for(var c=[];a;)ni(c,ou(a)),a=ga(a);return c}:wu,fn=vn;(Tc&&fn(new Tc(new ArrayBuffer(1)))!=Bi||ts&&fn(new ts)!=we||kc&&fn(kc.resolve())!=ea||Zi&&fn(new Zi)!=wn||ns&&fn(new ns)!=tt)&&(fn=function(a){var c=vn(a),p=c==kt?a.constructor:n,C=p?xi(p):"";if(C)switch(C){case vE:return Bi;case pE:return we;case mE:return ea;case EE:return wn;case CE:return tt}return c});function MC(a,c,p){for(var C=-1,y=p.length;++C<y;){var D=p[C],z=D.size;switch(D.type){case"drop":a+=z;break;case"dropRight":c-=z;break;case"take":c=_n(c,a+z);break;case"takeRight":a=Qt(a,c-z);break}}return{start:a,end:c}}function UC(a){var c=a.match(Hm);return c?c[1].split(Wm):[]}function mg(a,c,p){c=ai(c,a);for(var C=-1,y=c.length,D=!1;++C<y;){var z=Sr(c[C]);if(!(D=a!=null&&p(a,z)))break;a=a[z]}return D||++C!=y?D:(y=a==null?0:a.length,!!y&&za(y)&&Hr(z,y)&&(rt(a)||Si(a)))}function GC(a){var c=a.length,p=new a.constructor(c);return c&&typeof a[0]=="string"&&St.call(a,"index")&&(p.index=a.index,p.input=a.input),p}function Eg(a){return typeof a.constructor=="function"&&!ds(a)?Ji(ga(a)):{}}function $C(a,c,p){var C=a.constructor;switch(c){case Qo:return Qc(a);case In:case dn:return new C(+a);case Bi:return bC(a,p);case ic:case oc:case sc:case ac:case lc:case cc:case uc:case dc:case _c:return tg(a,p);case we:return new C;case Te:case Ei:return new C(a);case mi:return IC(a);case wn:return new C;case Wi:return wC(a)}}function FC(a,c){var p=c.length;if(!p)return a;var C=p-1;return c[C]=(p>1?"& ":"")+c[C],c=c.join(p>2?", ":" "),a.replace(zm,`{
/* [wrapped with `+c+`] */
`)}function PC(a){return rt(a)||Si(a)||!!(yf&&a&&a[yf])}function Hr(a,c){var p=typeof a;return c=c??Ae,!!c&&(p=="number"||p!="symbol"&&Qm.test(a))&&a>-1&&a%1==0&&a<c}function pn(a,c,p){if(!Pt(p))return!1;var C=typeof c;return(C=="number"?On(p)&&Hr(c,p.length):C=="string"&&c in p)?pr(p[c],a):!1}function su(a,c){if(rt(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||Tn(a)?!0:Gm.test(a)||!Um.test(a)||c!=null&&a in Tt(c)}function zC(a){var c=typeof a;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?a!=="__proto__":a===null}function au(a){var c=Ta(a),p=R[c];if(typeof p!="function"||!(c in ht.prototype))return!1;if(a===p)return!0;var C=ru(p);return!!C&&a===C[0]}function HC(a){return!!Cf&&Cf in a}var WC=ca?Wr:yu;function ds(a){var c=a&&a.constructor,p=typeof c=="function"&&c.prototype||qi;return a===p}function Cg(a){return a===a&&!Pt(a)}function bg(a,c){return function(p){return p==null?!1:p[a]===c&&(c!==n||a in Tt(p))}}function BC(a){var c=Fa(a,function(C){return p.size===d&&p.clear(),C}),p=c.cache;return c}function YC(a,c){var p=a[1],C=c[1],y=p|C,D=y<(I|w|M),z=C==M&&p==T||C==M&&p==P&&a[7].length<=c[8]||C==(M|P)&&c[7].length<=c[8]&&p==T;if(!(D||z))return a;C&I&&(a[2]=c[2],y|=p&I?0:A);var K=c[3];if(K){var q=a[3];a[3]=q?rg(q,K,c[4]):K,a[4]=q?ri(a[3],g):c[4]}return K=c[5],K&&(q=a[5],a[5]=q?ig(q,K,c[6]):K,a[6]=q?ri(a[5],g):c[6]),K=c[7],K&&(a[7]=K),C&M&&(a[8]=a[8]==null?c[8]:_n(a[8],c[8])),a[9]==null&&(a[9]=c[9]),a[0]=c[0],a[1]=y,a}function jC(a){var c=[];if(a!=null)for(var p in Tt(a))c.push(p);return c}function KC(a){return da.call(a)}function Ig(a,c,p){return c=Qt(c===n?a.length-1:c,0),function(){for(var C=arguments,y=-1,D=Qt(C.length-c,0),z=re(D);++y<D;)z[y]=C[c+y];y=-1;for(var K=re(c+1);++y<c;)K[y]=C[y];return K[c]=p(z),Ln(a,this,K)}}function wg(a,c){return c.length<2?a:Oi(a,nr(c,0,-1))}function VC(a,c){for(var p=a.length,C=_n(c.length,p),y=yn(a);C--;){var D=c[C];a[C]=Hr(D,p)?y[D]:n}return a}function lu(a,c){if(!(c==="constructor"&&typeof a[c]=="function")&&c!="__proto__")return a[c]}var yg=Ag(Kf),_s=cE||function(a,c){return sn.setTimeout(a,c)},cu=Ag(pC);function Og(a,c,p){var C=c+"";return cu(a,FC(C,XC(UC(C),p)))}function Ag(a){var c=0,p=0;return function(){var C=fE(),y=ye-(C-p);if(p=C,y>0){if(++c>=ue)return arguments[0]}else c=0;return a.apply(n,arguments)}}function Ma(a,c){var p=-1,C=a.length,y=C-1;for(c=c===n?C:c;++p<c;){var D=Yc(p,y),z=a[D];a[D]=a[p],a[p]=z}return a.length=c,a}var xg=BC(function(a){var c=[];return a.charCodeAt(0)===46&&c.push(""),a.replace($m,function(p,C,y,D){c.push(y?D.replace(jm,"$1"):C||p)}),c});function Sr(a){if(typeof a=="string"||Tn(a))return a;var c=a+"";return c=="0"&&1/a==-1/0?"-0":c}function xi(a){if(a!=null){try{return ua.call(a)}catch{}try{return a+""}catch{}}return""}function XC(a,c){return Qn(bt,function(p){var C="_."+p[0];c&p[1]&&!oa(a,C)&&a.push(C)}),a.sort()}function Sg(a){if(a instanceof ht)return a.clone();var c=new er(a.__wrapped__,a.__chain__);return c.__actions__=yn(a.__actions__),c.__index__=a.__index__,c.__values__=a.__values__,c}function qC(a,c,p){(p?pn(a,c,p):c===n)?c=1:c=Qt(at(c),0);var C=a==null?0:a.length;if(!C||c<1)return[];for(var y=0,D=0,z=re(pa(C/c));y<C;)z[D++]=nr(a,y,y+=c);return z}function ZC(a){for(var c=-1,p=a==null?0:a.length,C=0,y=[];++c<p;){var D=a[c];D&&(y[C++]=D)}return y}function QC(){var a=arguments.length;if(!a)return[];for(var c=re(a-1),p=arguments[0],C=a;C--;)c[C-1]=arguments[C];return ni(rt(p)?yn(p):[p],an(c,1))}var JC=_t(function(a,c){return jt(a)?ss(a,an(c,1,jt,!0)):[]}),e0=_t(function(a,c){var p=rr(c);return jt(p)&&(p=n),jt(a)?ss(a,an(c,1,jt,!0),Ke(p,2)):[]}),t0=_t(function(a,c){var p=rr(c);return jt(p)&&(p=n),jt(a)?ss(a,an(c,1,jt,!0),n,p):[]});function n0(a,c,p){var C=a==null?0:a.length;return C?(c=p||c===n?1:at(c),nr(a,c<0?0:c,C)):[]}function r0(a,c,p){var C=a==null?0:a.length;return C?(c=p||c===n?1:at(c),c=C-c,nr(a,0,c<0?0:c)):[]}function i0(a,c){return a&&a.length?xa(a,Ke(c,3),!0,!0):[]}function o0(a,c){return a&&a.length?xa(a,Ke(c,3),!0):[]}function s0(a,c,p,C){var y=a==null?0:a.length;return y?(p&&typeof p!="number"&&pn(a,c,p)&&(p=0,C=y),QE(a,c,p,C)):[]}function Ng(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=p==null?0:at(p);return y<0&&(y=Qt(C+y,0)),sa(a,Ke(c,3),y)}function Lg(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=C-1;return p!==n&&(y=at(p),y=p<0?Qt(C+y,0):_n(y,C-1)),sa(a,Ke(c,3),y,!0)}function Rg(a){var c=a==null?0:a.length;return c?an(a,1):[]}function a0(a){var c=a==null?0:a.length;return c?an(a,Oe):[]}function l0(a,c){var p=a==null?0:a.length;return p?(c=c===n?1:at(c),an(a,c)):[]}function c0(a){for(var c=-1,p=a==null?0:a.length,C={};++c<p;){var y=a[c];C[y[0]]=y[1]}return C}function Dg(a){return a&&a.length?a[0]:n}function u0(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=p==null?0:at(p);return y<0&&(y=Qt(C+y,0)),ji(a,c,y)}function d0(a){var c=a==null?0:a.length;return c?nr(a,0,-1):[]}var _0=_t(function(a){var c=Ft(a,qc);return c.length&&c[0]===a[0]?Pc(c):[]}),f0=_t(function(a){var c=rr(a),p=Ft(a,qc);return c===rr(p)?c=n:p.pop(),p.length&&p[0]===a[0]?Pc(p,Ke(c,2)):[]}),g0=_t(function(a){var c=rr(a),p=Ft(a,qc);return c=typeof c=="function"?c:n,c&&p.pop(),p.length&&p[0]===a[0]?Pc(p,n,c):[]});function h0(a,c){return a==null?"":dE.call(a,c)}function rr(a){var c=a==null?0:a.length;return c?a[c-1]:n}function v0(a,c,p){var C=a==null?0:a.length;if(!C)return-1;var y=C;return p!==n&&(y=at(p),y=y<0?Qt(C+y,0):_n(y,C-1)),c===c?X1(a,c,y):sa(a,_f,y,!0)}function p0(a,c){return a&&a.length?Wf(a,at(c)):n}var m0=_t(Tg);function Tg(a,c){return a&&a.length&&c&&c.length?Bc(a,c):a}function E0(a,c,p){return a&&a.length&&c&&c.length?Bc(a,c,Ke(p,2)):a}function C0(a,c,p){return a&&a.length&&c&&c.length?Bc(a,c,n,p):a}var b0=zr(function(a,c){var p=a==null?0:a.length,C=Uc(a,c);return jf(a,Ft(c,function(y){return Hr(y,p)?+y:y}).sort(ng)),C});function I0(a,c){var p=[];if(!(a&&a.length))return p;var C=-1,y=[],D=a.length;for(c=Ke(c,3);++C<D;){var z=a[C];c(z,C,a)&&(p.push(z),y.push(C))}return jf(a,y),p}function uu(a){return a==null?a:hE.call(a)}function w0(a,c,p){var C=a==null?0:a.length;return C?(p&&typeof p!="number"&&pn(a,c,p)?(c=0,p=C):(c=c==null?0:at(c),p=p===n?C:at(p)),nr(a,c,p)):[]}function y0(a,c){return Aa(a,c)}function O0(a,c,p){return Kc(a,c,Ke(p,2))}function A0(a,c){var p=a==null?0:a.length;if(p){var C=Aa(a,c);if(C<p&&pr(a[C],c))return C}return-1}function x0(a,c){return Aa(a,c,!0)}function S0(a,c,p){return Kc(a,c,Ke(p,2),!0)}function N0(a,c){var p=a==null?0:a.length;if(p){var C=Aa(a,c,!0)-1;if(pr(a[C],c))return C}return-1}function L0(a){return a&&a.length?Vf(a):[]}function R0(a,c){return a&&a.length?Vf(a,Ke(c,2)):[]}function D0(a){var c=a==null?0:a.length;return c?nr(a,1,c):[]}function T0(a,c,p){return a&&a.length?(c=p||c===n?1:at(c),nr(a,0,c<0?0:c)):[]}function k0(a,c,p){var C=a==null?0:a.length;return C?(c=p||c===n?1:at(c),c=C-c,nr(a,c<0?0:c,C)):[]}function M0(a,c){return a&&a.length?xa(a,Ke(c,3),!1,!0):[]}function U0(a,c){return a&&a.length?xa(a,Ke(c,3)):[]}var G0=_t(function(a){return si(an(a,1,jt,!0))}),$0=_t(function(a){var c=rr(a);return jt(c)&&(c=n),si(an(a,1,jt,!0),Ke(c,2))}),F0=_t(function(a){var c=rr(a);return c=typeof c=="function"?c:n,si(an(a,1,jt,!0),n,c)});function P0(a){return a&&a.length?si(a):[]}function z0(a,c){return a&&a.length?si(a,Ke(c,2)):[]}function H0(a,c){return c=typeof c=="function"?c:n,a&&a.length?si(a,n,c):[]}function du(a){if(!(a&&a.length))return[];var c=0;return a=ti(a,function(p){if(jt(p))return c=Qt(p.length,c),!0}),Sc(c,function(p){return Ft(a,Oc(p))})}function kg(a,c){if(!(a&&a.length))return[];var p=du(a);return c==null?p:Ft(p,function(C){return Ln(c,n,C)})}var W0=_t(function(a,c){return jt(a)?ss(a,c):[]}),B0=_t(function(a){return Xc(ti(a,jt))}),Y0=_t(function(a){var c=rr(a);return jt(c)&&(c=n),Xc(ti(a,jt),Ke(c,2))}),j0=_t(function(a){var c=rr(a);return c=typeof c=="function"?c:n,Xc(ti(a,jt),n,c)}),K0=_t(du);function V0(a,c){return Qf(a||[],c||[],os)}function X0(a,c){return Qf(a||[],c||[],cs)}var q0=_t(function(a){var c=a.length,p=c>1?a[c-1]:n;return p=typeof p=="function"?(a.pop(),p):n,kg(a,p)});function Mg(a){var c=R(a);return c.__chain__=!0,c}function Z0(a,c){return c(a),a}function Ua(a,c){return c(a)}var Q0=zr(function(a){var c=a.length,p=c?a[0]:0,C=this.__wrapped__,y=function(D){return Uc(D,a)};return c>1||this.__actions__.length||!(C instanceof ht)||!Hr(p)?this.thru(y):(C=C.slice(p,+p+(c?1:0)),C.__actions__.push({func:Ua,args:[y],thisArg:n}),new er(C,this.__chain__).thru(function(D){return c&&!D.length&&D.push(n),D}))});function J0(){return Mg(this)}function eb(){return new er(this.value(),this.__chain__)}function tb(){this.__values__===n&&(this.__values__=Xg(this.value()));var a=this.__index__>=this.__values__.length,c=a?n:this.__values__[this.__index__++];return{done:a,value:c}}function nb(){return this}function rb(a){for(var c,p=this;p instanceof ba;){var C=Sg(p);C.__index__=0,C.__values__=n,c?y.__wrapped__=C:c=C;var y=C;p=p.__wrapped__}return y.__wrapped__=a,c}function ib(){var a=this.__wrapped__;if(a instanceof ht){var c=a;return this.__actions__.length&&(c=new ht(this)),c=c.reverse(),c.__actions__.push({func:Ua,args:[uu],thisArg:n}),new er(c,this.__chain__)}return this.thru(uu)}function ob(){return Zf(this.__wrapped__,this.__actions__)}var sb=Sa(function(a,c,p){St.call(a,p)?++a[p]:Fr(a,p,1)});function ab(a,c,p){var C=rt(a)?uf:ZE;return p&&pn(a,c,p)&&(c=n),C(a,Ke(c,3))}function lb(a,c){var p=rt(a)?ti:kf;return p(a,Ke(c,3))}var cb=lg(Ng),ub=lg(Lg);function db(a,c){return an(Ga(a,c),1)}function _b(a,c){return an(Ga(a,c),Oe)}function fb(a,c,p){return p=p===n?1:at(p),an(Ga(a,c),p)}function Ug(a,c){var p=rt(a)?Qn:oi;return p(a,Ke(c,3))}function Gg(a,c){var p=rt(a)?D1:Tf;return p(a,Ke(c,3))}var gb=Sa(function(a,c,p){St.call(a,p)?a[p].push(c):Fr(a,p,[c])});function hb(a,c,p,C){a=On(a)?a:io(a),p=p&&!C?at(p):0;var y=a.length;return p<0&&(p=Qt(y+p,0)),Ha(a)?p<=y&&a.indexOf(c,p)>-1:!!y&&ji(a,c,p)>-1}var vb=_t(function(a,c,p){var C=-1,y=typeof c=="function",D=On(a)?re(a.length):[];return oi(a,function(z){D[++C]=y?Ln(c,z,p):as(z,c,p)}),D}),pb=Sa(function(a,c,p){Fr(a,p,c)});function Ga(a,c){var p=rt(a)?Ft:Pf;return p(a,Ke(c,3))}function mb(a,c,p,C){return a==null?[]:(rt(c)||(c=c==null?[]:[c]),p=C?n:p,rt(p)||(p=p==null?[]:[p]),Bf(a,c,p))}var Eb=Sa(function(a,c,p){a[p?0:1].push(c)},function(){return[[],[]]});function Cb(a,c,p){var C=rt(a)?wc:gf,y=arguments.length<3;return C(a,Ke(c,4),p,y,oi)}function bb(a,c,p){var C=rt(a)?T1:gf,y=arguments.length<3;return C(a,Ke(c,4),p,y,Tf)}function Ib(a,c){var p=rt(a)?ti:kf;return p(a,Pa(Ke(c,3)))}function wb(a){var c=rt(a)?Nf:hC;return c(a)}function yb(a,c,p){(p?pn(a,c,p):c===n)?c=1:c=at(c);var C=rt(a)?jE:vC;return C(a,c)}function Ob(a){var c=rt(a)?KE:mC;return c(a)}function Ab(a){if(a==null)return 0;if(On(a))return Ha(a)?Vi(a):a.length;var c=fn(a);return c==we||c==wn?a.size:Hc(a).length}function xb(a,c,p){var C=rt(a)?yc:EC;return p&&pn(a,c,p)&&(c=n),C(a,Ke(c,3))}var Sb=_t(function(a,c){if(a==null)return[];var p=c.length;return p>1&&pn(a,c[0],c[1])?c=[]:p>2&&pn(c[0],c[1],c[2])&&(c=[c[0]]),Bf(a,an(c,1),[])}),$a=lE||function(){return sn.Date.now()};function Nb(a,c){if(typeof c!="function")throw new Jn(s);return a=at(a),function(){if(--a<1)return c.apply(this,arguments)}}function $g(a,c,p){return c=p?n:c,c=a&&c==null?a.length:c,Pr(a,M,n,n,n,n,c)}function Fg(a,c){var p;if(typeof c!="function")throw new Jn(s);return a=at(a),function(){return--a>0&&(p=c.apply(this,arguments)),a<=1&&(c=n),p}}var _u=_t(function(a,c,p){var C=I;if(p.length){var y=ri(p,no(_u));C|=G}return Pr(a,C,c,p,y)}),Pg=_t(function(a,c,p){var C=I|w;if(p.length){var y=ri(p,no(Pg));C|=G}return Pr(c,C,a,p,y)});function zg(a,c,p){c=p?n:c;var C=Pr(a,T,n,n,n,n,n,c);return C.placeholder=zg.placeholder,C}function Hg(a,c,p){c=p?n:c;var C=Pr(a,k,n,n,n,n,n,c);return C.placeholder=Hg.placeholder,C}function Wg(a,c,p){var C,y,D,z,K,q,de=0,_e=!1,pe=!1,Ne=!0;if(typeof a!="function")throw new Jn(s);c=ir(c)||0,Pt(p)&&(_e=!!p.leading,pe="maxWait"in p,D=pe?Qt(ir(p.maxWait)||0,c):D,Ne="trailing"in p?!!p.trailing:Ne);function Pe(Kt){var mr=C,Yr=y;return C=y=n,de=Kt,z=a.apply(Yr,mr),z}function Ve(Kt){return de=Kt,K=_s(gt,c),_e?Pe(Kt):z}function ct(Kt){var mr=Kt-q,Yr=Kt-de,lh=c-mr;return pe?_n(lh,D-Yr):lh}function Xe(Kt){var mr=Kt-q,Yr=Kt-de;return q===n||mr>=c||mr<0||pe&&Yr>=D}function gt(){var Kt=$a();if(Xe(Kt))return vt(Kt);K=_s(gt,ct(Kt))}function vt(Kt){return K=n,Ne&&C?Pe(Kt):(C=y=n,z)}function kn(){K!==n&&Jf(K),de=0,C=q=y=K=n}function mn(){return K===n?z:vt($a())}function Mn(){var Kt=$a(),mr=Xe(Kt);if(C=arguments,y=this,q=Kt,mr){if(K===n)return Ve(q);if(pe)return Jf(K),K=_s(gt,c),Pe(q)}return K===n&&(K=_s(gt,c)),z}return Mn.cancel=kn,Mn.flush=mn,Mn}var Lb=_t(function(a,c){return Df(a,1,c)}),Rb=_t(function(a,c,p){return Df(a,ir(c)||0,p)});function Db(a){return Pr(a,te)}function Fa(a,c){if(typeof a!="function"||c!=null&&typeof c!="function")throw new Jn(s);var p=function(){var C=arguments,y=c?c.apply(this,C):C[0],D=p.cache;if(D.has(y))return D.get(y);var z=a.apply(this,C);return p.cache=D.set(y,z)||D,z};return p.cache=new(Fa.Cache||$r),p}Fa.Cache=$r;function Pa(a){if(typeof a!="function")throw new Jn(s);return function(){var c=arguments;switch(c.length){case 0:return!a.call(this);case 1:return!a.call(this,c[0]);case 2:return!a.call(this,c[0],c[1]);case 3:return!a.call(this,c[0],c[1],c[2])}return!a.apply(this,c)}}function Tb(a){return Fg(2,a)}var kb=CC(function(a,c){c=c.length==1&&rt(c[0])?Ft(c[0],Rn(Ke())):Ft(an(c,1),Rn(Ke()));var p=c.length;return _t(function(C){for(var y=-1,D=_n(C.length,p);++y<D;)C[y]=c[y].call(this,C[y]);return Ln(a,this,C)})}),fu=_t(function(a,c){var p=ri(c,no(fu));return Pr(a,G,n,c,p)}),Bg=_t(function(a,c){var p=ri(c,no(Bg));return Pr(a,Y,n,c,p)}),Mb=zr(function(a,c){return Pr(a,P,n,n,n,c)});function Ub(a,c){if(typeof a!="function")throw new Jn(s);return c=c===n?c:at(c),_t(a,c)}function Gb(a,c){if(typeof a!="function")throw new Jn(s);return c=c==null?0:Qt(at(c),0),_t(function(p){var C=p[c],y=li(p,0,c);return C&&ni(y,C),Ln(a,this,y)})}function $b(a,c,p){var C=!0,y=!0;if(typeof a!="function")throw new Jn(s);return Pt(p)&&(C="leading"in p?!!p.leading:C,y="trailing"in p?!!p.trailing:y),Wg(a,c,{leading:C,maxWait:c,trailing:y})}function Fb(a){return $g(a,1)}function Pb(a,c){return fu(Zc(c),a)}function zb(){if(!arguments.length)return[];var a=arguments[0];return rt(a)?a:[a]}function Hb(a){return tr(a,m)}function Wb(a,c){return c=typeof c=="function"?c:n,tr(a,m,c)}function Bb(a){return tr(a,h|m)}function Yb(a,c){return c=typeof c=="function"?c:n,tr(a,h|m,c)}function jb(a,c){return c==null||Rf(a,c,en(c))}function pr(a,c){return a===c||a!==a&&c!==c}var Kb=Da(Fc),Vb=Da(function(a,c){return a>=c}),Si=Gf(function(){return arguments}())?Gf:function(a){return Bt(a)&&St.call(a,"callee")&&!wf.call(a,"callee")},rt=re.isArray,Xb=rf?Rn(rf):rC;function On(a){return a!=null&&za(a.length)&&!Wr(a)}function jt(a){return Bt(a)&&On(a)}function qb(a){return a===!0||a===!1||Bt(a)&&vn(a)==In}var ci=uE||yu,Zb=of?Rn(of):iC;function Qb(a){return Bt(a)&&a.nodeType===1&&!fs(a)}function Jb(a){if(a==null)return!0;if(On(a)&&(rt(a)||typeof a=="string"||typeof a.splice=="function"||ci(a)||ro(a)||Si(a)))return!a.length;var c=fn(a);if(c==we||c==wn)return!a.size;if(ds(a))return!Hc(a).length;for(var p in a)if(St.call(a,p))return!1;return!0}function eI(a,c){return ls(a,c)}function tI(a,c,p){p=typeof p=="function"?p:n;var C=p?p(a,c):n;return C===n?ls(a,c,n,p):!!C}function gu(a){if(!Bt(a))return!1;var c=vn(a);return c==Or||c==yr||typeof a.message=="string"&&typeof a.name=="string"&&!fs(a)}function nI(a){return typeof a=="number"&&Of(a)}function Wr(a){if(!Pt(a))return!1;var c=vn(a);return c==Ur||c==He||c==wt||c==ta}function Yg(a){return typeof a=="number"&&a==at(a)}function za(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=Ae}function Pt(a){var c=typeof a;return a!=null&&(c=="object"||c=="function")}function Bt(a){return a!=null&&typeof a=="object"}var jg=sf?Rn(sf):sC;function rI(a,c){return a===c||zc(a,c,iu(c))}function iI(a,c,p){return p=typeof p=="function"?p:n,zc(a,c,iu(c),p)}function oI(a){return Kg(a)&&a!=+a}function sI(a){if(WC(a))throw new nt(o);return $f(a)}function aI(a){return a===null}function lI(a){return a==null}function Kg(a){return typeof a=="number"||Bt(a)&&vn(a)==Te}function fs(a){if(!Bt(a)||vn(a)!=kt)return!1;var c=ga(a);if(c===null)return!0;var p=St.call(c,"constructor")&&c.constructor;return typeof p=="function"&&p instanceof p&&ua.call(p)==iE}var hu=af?Rn(af):aC;function cI(a){return Yg(a)&&a>=-9007199254740991&&a<=Ae}var Vg=lf?Rn(lf):lC;function Ha(a){return typeof a=="string"||!rt(a)&&Bt(a)&&vn(a)==Ei}function Tn(a){return typeof a=="symbol"||Bt(a)&&vn(a)==Wi}var ro=cf?Rn(cf):cC;function uI(a){return a===n}function dI(a){return Bt(a)&&fn(a)==tt}function _I(a){return Bt(a)&&vn(a)==Zo}var fI=Da(Wc),gI=Da(function(a,c){return a<=c});function Xg(a){if(!a)return[];if(On(a))return Ha(a)?hr(a):yn(a);if(es&&a[es])return j1(a[es]());var c=fn(a),p=c==we?Lc:c==wn?aa:io;return p(a)}function Br(a){if(!a)return a===0?a:0;if(a=ir(a),a===Oe||a===-1/0){var c=a<0?-1:1;return c*Se}return a===a?a:0}function at(a){var c=Br(a),p=c%1;return c===c?p?c-p:c:0}function qg(a){return a?yi(at(a),0,$e):0}function ir(a){if(typeof a=="number")return a;if(Tn(a))return De;if(Pt(a)){var c=typeof a.valueOf=="function"?a.valueOf():a;a=Pt(c)?c+"":c}if(typeof a!="string")return a===0?a:+a;a=hf(a);var p=Xm.test(a);return p||Zm.test(a)?N1(a.slice(2),p?2:8):Vm.test(a)?De:+a}function Zg(a){return xr(a,An(a))}function hI(a){return a?yi(at(a),-9007199254740991,Ae):a===0?a:0}function At(a){return a==null?"":Dn(a)}var vI=eo(function(a,c){if(ds(c)||On(c)){xr(c,en(c),a);return}for(var p in c)St.call(c,p)&&os(a,p,c[p])}),Qg=eo(function(a,c){xr(c,An(c),a)}),Wa=eo(function(a,c,p,C){xr(c,An(c),a,C)}),pI=eo(function(a,c,p,C){xr(c,en(c),a,C)}),mI=zr(Uc);function EI(a,c){var p=Ji(a);return c==null?p:Lf(p,c)}var CI=_t(function(a,c){a=Tt(a);var p=-1,C=c.length,y=C>2?c[2]:n;for(y&&pn(c[0],c[1],y)&&(C=1);++p<C;)for(var D=c[p],z=An(D),K=-1,q=z.length;++K<q;){var de=z[K],_e=a[de];(_e===n||pr(_e,qi[de])&&!St.call(a,de))&&(a[de]=D[de])}return a}),bI=_t(function(a){return a.push(n,hg),Ln(Jg,n,a)});function II(a,c){return df(a,Ke(c,3),Ar)}function wI(a,c){return df(a,Ke(c,3),$c)}function yI(a,c){return a==null?a:Gc(a,Ke(c,3),An)}function OI(a,c){return a==null?a:Mf(a,Ke(c,3),An)}function AI(a,c){return a&&Ar(a,Ke(c,3))}function xI(a,c){return a&&$c(a,Ke(c,3))}function SI(a){return a==null?[]:ya(a,en(a))}function NI(a){return a==null?[]:ya(a,An(a))}function vu(a,c,p){var C=a==null?n:Oi(a,c);return C===n?p:C}function LI(a,c){return a!=null&&mg(a,c,JE)}function pu(a,c){return a!=null&&mg(a,c,eC)}var RI=ug(function(a,c,p){c!=null&&typeof c.toString!="function"&&(c=da.call(c)),a[c]=p},Eu(xn)),DI=ug(function(a,c,p){c!=null&&typeof c.toString!="function"&&(c=da.call(c)),St.call(a,c)?a[c].push(p):a[c]=[p]},Ke),TI=_t(as);function en(a){return On(a)?Sf(a):Hc(a)}function An(a){return On(a)?Sf(a,!0):uC(a)}function kI(a,c){var p={};return c=Ke(c,3),Ar(a,function(C,y,D){Fr(p,c(C,y,D),C)}),p}function MI(a,c){var p={};return c=Ke(c,3),Ar(a,function(C,y,D){Fr(p,y,c(C,y,D))}),p}var UI=eo(function(a,c,p){Oa(a,c,p)}),Jg=eo(function(a,c,p,C){Oa(a,c,p,C)}),GI=zr(function(a,c){var p={};if(a==null)return p;var C=!1;c=Ft(c,function(D){return D=ai(D,a),C||(C=D.length>1),D}),xr(a,nu(a),p),C&&(p=tr(p,h|v|m,RC));for(var y=c.length;y--;)Vc(p,c[y]);return p});function $I(a,c){return eh(a,Pa(Ke(c)))}var FI=zr(function(a,c){return a==null?{}:_C(a,c)});function eh(a,c){if(a==null)return{};var p=Ft(nu(a),function(C){return[C]});return c=Ke(c),Yf(a,p,function(C,y){return c(C,y[0])})}function PI(a,c,p){c=ai(c,a);var C=-1,y=c.length;for(y||(y=1,a=n);++C<y;){var D=a==null?n:a[Sr(c[C])];D===n&&(C=y,D=p),a=Wr(D)?D.call(a):D}return a}function zI(a,c,p){return a==null?a:cs(a,c,p)}function HI(a,c,p,C){return C=typeof C=="function"?C:n,a==null?a:cs(a,c,p,C)}var th=fg(en),nh=fg(An);function WI(a,c,p){var C=rt(a),y=C||ci(a)||ro(a);if(c=Ke(c,4),p==null){var D=a&&a.constructor;y?p=C?new D:[]:Pt(a)?p=Wr(D)?Ji(ga(a)):{}:p={}}return(y?Qn:Ar)(a,function(z,K,q){return c(p,z,K,q)}),p}function BI(a,c){return a==null?!0:Vc(a,c)}function YI(a,c,p){return a==null?a:qf(a,c,Zc(p))}function jI(a,c,p,C){return C=typeof C=="function"?C:n,a==null?a:qf(a,c,Zc(p),C)}function io(a){return a==null?[]:Nc(a,en(a))}function KI(a){return a==null?[]:Nc(a,An(a))}function VI(a,c,p){return p===n&&(p=c,c=n),p!==n&&(p=ir(p),p=p===p?p:0),c!==n&&(c=ir(c),c=c===c?c:0),yi(ir(a),c,p)}function XI(a,c,p){return c=Br(c),p===n?(p=c,c=0):p=Br(p),a=ir(a),tC(a,c,p)}function qI(a,c,p){if(p&&typeof p!="boolean"&&pn(a,c,p)&&(c=p=n),p===n&&(typeof c=="boolean"?(p=c,c=n):typeof a=="boolean"&&(p=a,a=n)),a===n&&c===n?(a=0,c=1):(a=Br(a),c===n?(c=a,a=0):c=Br(c)),a>c){var C=a;a=c,c=C}if(p||a%1||c%1){var y=Af();return _n(a+y*(c-a+S1("1e-"+((y+"").length-1))),c)}return Yc(a,c)}var ZI=to(function(a,c,p){return c=c.toLowerCase(),a+(p?rh(c):c)});function rh(a){return mu(At(a).toLowerCase())}function ih(a){return a=At(a),a&&a.replace(Jm,z1).replace(m1,"")}function QI(a,c,p){a=At(a),c=Dn(c);var C=a.length;p=p===n?C:yi(at(p),0,C);var y=p;return p-=c.length,p>=0&&a.slice(p,y)==c}function JI(a){return a=At(a),a&&Tm.test(a)?a.replace(k_,H1):a}function ew(a){return a=At(a),a&&Fm.test(a)?a.replace(fc,"\\$&"):a}var tw=to(function(a,c,p){return a+(p?"-":"")+c.toLowerCase()}),nw=to(function(a,c,p){return a+(p?" ":"")+c.toLowerCase()}),rw=ag("toLowerCase");function iw(a,c,p){a=At(a),c=at(c);var C=c?Vi(a):0;if(!c||C>=c)return a;var y=(c-C)/2;return Ra(ma(y),p)+a+Ra(pa(y),p)}function ow(a,c,p){a=At(a),c=at(c);var C=c?Vi(a):0;return c&&C<c?a+Ra(c-C,p):a}function sw(a,c,p){a=At(a),c=at(c);var C=c?Vi(a):0;return c&&C<c?Ra(c-C,p)+a:a}function aw(a,c,p){return p||c==null?c=0:c&&(c=+c),gE(At(a).replace(gc,""),c||0)}function lw(a,c,p){return(p?pn(a,c,p):c===n)?c=1:c=at(c),jc(At(a),c)}function cw(){var a=arguments,c=At(a[0]);return a.length<3?c:c.replace(a[1],a[2])}var uw=to(function(a,c,p){return a+(p?"_":"")+c.toLowerCase()});function dw(a,c,p){return p&&typeof p!="number"&&pn(a,c,p)&&(c=p=n),p=p===n?$e:p>>>0,p?(a=At(a),a&&(typeof c=="string"||c!=null&&!hu(c))&&(c=Dn(c),!c&&Ki(a))?li(hr(a),0,p):a.split(c,p)):[]}var _w=to(function(a,c,p){return a+(p?" ":"")+mu(c)});function fw(a,c,p){return a=At(a),p=p==null?0:yi(at(p),0,a.length),c=Dn(c),a.slice(p,p+c.length)==c}function gw(a,c,p){var C=R.templateSettings;p&&pn(a,c,p)&&(c=n),a=At(a),c=Wa({},c,C,gg);var y=Wa({},c.imports,C.imports,gg),D=en(y),z=Nc(y,D),K,q,de=0,_e=c.interpolate||na,pe="__p += '",Ne=Rc((c.escape||na).source+"|"+_e.source+"|"+(_e===M_?Km:na).source+"|"+(c.evaluate||na).source+"|$","g"),Pe="//# sourceURL="+(St.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++w1+"]")+`
`;a.replace(Ne,function(Xe,gt,vt,kn,mn,Mn){return vt||(vt=kn),pe+=a.slice(de,Mn).replace(e1,W1),gt&&(K=!0,pe+=`' +
__e(`+gt+`) +
'`),mn&&(q=!0,pe+=`';
`+mn+`;
__p += '`),vt&&(pe+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),de=Mn+Xe.length,Xe}),pe+=`';
`;var Ve=St.call(c,"variable")&&c.variable;if(!Ve)pe=`with (obj) {
`+pe+`
}
`;else if(Ym.test(Ve))throw new nt(l);pe=(q?pe.replace(Nm,""):pe).replace(Lm,"$1").replace(Rm,"$1;"),pe="function("+(Ve||"obj")+`) {
`+(Ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+pe+`return __p
}`;var ct=sh(function(){return yt(D,Pe+"return "+pe).apply(n,z)});if(ct.source=pe,gu(ct))throw ct;return ct}function hw(a){return At(a).toLowerCase()}function vw(a){return At(a).toUpperCase()}function pw(a,c,p){if(a=At(a),a&&(p||c===n))return hf(a);if(!a||!(c=Dn(c)))return a;var C=hr(a),y=hr(c),D=vf(C,y),z=pf(C,y)+1;return li(C,D,z).join("")}function mw(a,c,p){if(a=At(a),a&&(p||c===n))return a.slice(0,Ef(a)+1);if(!a||!(c=Dn(c)))return a;var C=hr(a),y=pf(C,hr(c))+1;return li(C,0,y).join("")}function Ew(a,c,p){if(a=At(a),a&&(p||c===n))return a.replace(gc,"");if(!a||!(c=Dn(c)))return a;var C=hr(a),y=vf(C,hr(c));return li(C,y).join("")}function Cw(a,c){var p=ce,C=se;if(Pt(c)){var y="separator"in c?c.separator:y;p="length"in c?at(c.length):p,C="omission"in c?Dn(c.omission):C}a=At(a);var D=a.length;if(Ki(a)){var z=hr(a);D=z.length}if(p>=D)return a;var K=p-Vi(C);if(K<1)return C;var q=z?li(z,0,K).join(""):a.slice(0,K);if(y===n)return q+C;if(z&&(K+=q.length-K),hu(y)){if(a.slice(K).search(y)){var de,_e=q;for(y.global||(y=Rc(y.source,At(U_.exec(y))+"g")),y.lastIndex=0;de=y.exec(_e);)var pe=de.index;q=q.slice(0,pe===n?K:pe)}}else if(a.indexOf(Dn(y),K)!=K){var Ne=q.lastIndexOf(y);Ne>-1&&(q=q.slice(0,Ne))}return q+C}function bw(a){return a=At(a),a&&Dm.test(a)?a.replace(T_,q1):a}var Iw=to(function(a,c,p){return a+(p?" ":"")+c.toUpperCase()}),mu=ag("toUpperCase");function oh(a,c,p){return a=At(a),c=p?n:c,c===n?Y1(a)?J1(a):U1(a):a.match(c)||[]}var sh=_t(function(a,c){try{return Ln(a,n,c)}catch(p){return gu(p)?p:new nt(p)}}),ww=zr(function(a,c){return Qn(c,function(p){p=Sr(p),Fr(a,p,_u(a[p],a))}),a});function yw(a){var c=a==null?0:a.length,p=Ke();return a=c?Ft(a,function(C){if(typeof C[1]!="function")throw new Jn(s);return[p(C[0]),C[1]]}):[],_t(function(C){for(var y=-1;++y<c;){var D=a[y];if(Ln(D[0],this,C))return Ln(D[1],this,C)}})}function Ow(a){return qE(tr(a,h))}function Eu(a){return function(){return a}}function Aw(a,c){return a==null||a!==a?c:a}var xw=cg(),Sw=cg(!0);function xn(a){return a}function Cu(a){return Ff(typeof a=="function"?a:tr(a,h))}function Nw(a){return zf(tr(a,h))}function Lw(a,c){return Hf(a,tr(c,h))}var Rw=_t(function(a,c){return function(p){return as(p,a,c)}}),Dw=_t(function(a,c){return function(p){return as(a,p,c)}});function bu(a,c,p){var C=en(c),y=ya(c,C);p==null&&!(Pt(c)&&(y.length||!C.length))&&(p=c,c=a,a=this,y=ya(c,en(c)));var D=!(Pt(p)&&"chain"in p)||!!p.chain,z=Wr(a);return Qn(y,function(K){var q=c[K];a[K]=q,z&&(a.prototype[K]=function(){var de=this.__chain__;if(D||de){var _e=a(this.__wrapped__),pe=_e.__actions__=yn(this.__actions__);return pe.push({func:q,args:arguments,thisArg:a}),_e.__chain__=de,_e}return q.apply(a,ni([this.value()],arguments))})}),a}function Tw(){return sn._===this&&(sn._=oE),this}function Iu(){}function kw(a){return a=at(a),_t(function(c){return Wf(c,a)})}var Mw=Jc(Ft),Uw=Jc(uf),Gw=Jc(yc);function ah(a){return su(a)?Oc(Sr(a)):fC(a)}function $w(a){return function(c){return a==null?n:Oi(a,c)}}var Fw=dg(),Pw=dg(!0);function wu(){return[]}function yu(){return!1}function zw(){return{}}function Hw(){return""}function Ww(){return!0}function Bw(a,c){if(a=at(a),a<1||a>Ae)return[];var p=$e,C=_n(a,$e);c=Ke(c),a-=$e;for(var y=Sc(C,c);++p<a;)c(p);return y}function Yw(a){return rt(a)?Ft(a,Sr):Tn(a)?[a]:yn(xg(At(a)))}function jw(a){var c=++rE;return At(a)+c}var Kw=La(function(a,c){return a+c},0),Vw=eu("ceil"),Xw=La(function(a,c){return a/c},1),qw=eu("floor");function Zw(a){return a&&a.length?wa(a,xn,Fc):n}function Qw(a,c){return a&&a.length?wa(a,Ke(c,2),Fc):n}function Jw(a){return ff(a,xn)}function ey(a,c){return ff(a,Ke(c,2))}function ty(a){return a&&a.length?wa(a,xn,Wc):n}function ny(a,c){return a&&a.length?wa(a,Ke(c,2),Wc):n}var ry=La(function(a,c){return a*c},1),iy=eu("round"),oy=La(function(a,c){return a-c},0);function sy(a){return a&&a.length?xc(a,xn):0}function ay(a,c){return a&&a.length?xc(a,Ke(c,2)):0}return R.after=Nb,R.ary=$g,R.assign=vI,R.assignIn=Qg,R.assignInWith=Wa,R.assignWith=pI,R.at=mI,R.before=Fg,R.bind=_u,R.bindAll=ww,R.bindKey=Pg,R.castArray=zb,R.chain=Mg,R.chunk=qC,R.compact=ZC,R.concat=QC,R.cond=yw,R.conforms=Ow,R.constant=Eu,R.countBy=sb,R.create=EI,R.curry=zg,R.curryRight=Hg,R.debounce=Wg,R.defaults=CI,R.defaultsDeep=bI,R.defer=Lb,R.delay=Rb,R.difference=JC,R.differenceBy=e0,R.differenceWith=t0,R.drop=n0,R.dropRight=r0,R.dropRightWhile=i0,R.dropWhile=o0,R.fill=s0,R.filter=lb,R.flatMap=db,R.flatMapDeep=_b,R.flatMapDepth=fb,R.flatten=Rg,R.flattenDeep=a0,R.flattenDepth=l0,R.flip=Db,R.flow=xw,R.flowRight=Sw,R.fromPairs=c0,R.functions=SI,R.functionsIn=NI,R.groupBy=gb,R.initial=d0,R.intersection=_0,R.intersectionBy=f0,R.intersectionWith=g0,R.invert=RI,R.invertBy=DI,R.invokeMap=vb,R.iteratee=Cu,R.keyBy=pb,R.keys=en,R.keysIn=An,R.map=Ga,R.mapKeys=kI,R.mapValues=MI,R.matches=Nw,R.matchesProperty=Lw,R.memoize=Fa,R.merge=UI,R.mergeWith=Jg,R.method=Rw,R.methodOf=Dw,R.mixin=bu,R.negate=Pa,R.nthArg=kw,R.omit=GI,R.omitBy=$I,R.once=Tb,R.orderBy=mb,R.over=Mw,R.overArgs=kb,R.overEvery=Uw,R.overSome=Gw,R.partial=fu,R.partialRight=Bg,R.partition=Eb,R.pick=FI,R.pickBy=eh,R.property=ah,R.propertyOf=$w,R.pull=m0,R.pullAll=Tg,R.pullAllBy=E0,R.pullAllWith=C0,R.pullAt=b0,R.range=Fw,R.rangeRight=Pw,R.rearg=Mb,R.reject=Ib,R.remove=I0,R.rest=Ub,R.reverse=uu,R.sampleSize=yb,R.set=zI,R.setWith=HI,R.shuffle=Ob,R.slice=w0,R.sortBy=Sb,R.sortedUniq=L0,R.sortedUniqBy=R0,R.split=dw,R.spread=Gb,R.tail=D0,R.take=T0,R.takeRight=k0,R.takeRightWhile=M0,R.takeWhile=U0,R.tap=Z0,R.throttle=$b,R.thru=Ua,R.toArray=Xg,R.toPairs=th,R.toPairsIn=nh,R.toPath=Yw,R.toPlainObject=Zg,R.transform=WI,R.unary=Fb,R.union=G0,R.unionBy=$0,R.unionWith=F0,R.uniq=P0,R.uniqBy=z0,R.uniqWith=H0,R.unset=BI,R.unzip=du,R.unzipWith=kg,R.update=YI,R.updateWith=jI,R.values=io,R.valuesIn=KI,R.without=W0,R.words=oh,R.wrap=Pb,R.xor=B0,R.xorBy=Y0,R.xorWith=j0,R.zip=K0,R.zipObject=V0,R.zipObjectDeep=X0,R.zipWith=q0,R.entries=th,R.entriesIn=nh,R.extend=Qg,R.extendWith=Wa,bu(R,R),R.add=Kw,R.attempt=sh,R.camelCase=ZI,R.capitalize=rh,R.ceil=Vw,R.clamp=VI,R.clone=Hb,R.cloneDeep=Bb,R.cloneDeepWith=Yb,R.cloneWith=Wb,R.conformsTo=jb,R.deburr=ih,R.defaultTo=Aw,R.divide=Xw,R.endsWith=QI,R.eq=pr,R.escape=JI,R.escapeRegExp=ew,R.every=ab,R.find=cb,R.findIndex=Ng,R.findKey=II,R.findLast=ub,R.findLastIndex=Lg,R.findLastKey=wI,R.floor=qw,R.forEach=Ug,R.forEachRight=Gg,R.forIn=yI,R.forInRight=OI,R.forOwn=AI,R.forOwnRight=xI,R.get=vu,R.gt=Kb,R.gte=Vb,R.has=LI,R.hasIn=pu,R.head=Dg,R.identity=xn,R.includes=hb,R.indexOf=u0,R.inRange=XI,R.invoke=TI,R.isArguments=Si,R.isArray=rt,R.isArrayBuffer=Xb,R.isArrayLike=On,R.isArrayLikeObject=jt,R.isBoolean=qb,R.isBuffer=ci,R.isDate=Zb,R.isElement=Qb,R.isEmpty=Jb,R.isEqual=eI,R.isEqualWith=tI,R.isError=gu,R.isFinite=nI,R.isFunction=Wr,R.isInteger=Yg,R.isLength=za,R.isMap=jg,R.isMatch=rI,R.isMatchWith=iI,R.isNaN=oI,R.isNative=sI,R.isNil=lI,R.isNull=aI,R.isNumber=Kg,R.isObject=Pt,R.isObjectLike=Bt,R.isPlainObject=fs,R.isRegExp=hu,R.isSafeInteger=cI,R.isSet=Vg,R.isString=Ha,R.isSymbol=Tn,R.isTypedArray=ro,R.isUndefined=uI,R.isWeakMap=dI,R.isWeakSet=_I,R.join=h0,R.kebabCase=tw,R.last=rr,R.lastIndexOf=v0,R.lowerCase=nw,R.lowerFirst=rw,R.lt=fI,R.lte=gI,R.max=Zw,R.maxBy=Qw,R.mean=Jw,R.meanBy=ey,R.min=ty,R.minBy=ny,R.stubArray=wu,R.stubFalse=yu,R.stubObject=zw,R.stubString=Hw,R.stubTrue=Ww,R.multiply=ry,R.nth=p0,R.noConflict=Tw,R.noop=Iu,R.now=$a,R.pad=iw,R.padEnd=ow,R.padStart=sw,R.parseInt=aw,R.random=qI,R.reduce=Cb,R.reduceRight=bb,R.repeat=lw,R.replace=cw,R.result=PI,R.round=iy,R.runInContext=V,R.sample=wb,R.size=Ab,R.snakeCase=uw,R.some=xb,R.sortedIndex=y0,R.sortedIndexBy=O0,R.sortedIndexOf=A0,R.sortedLastIndex=x0,R.sortedLastIndexBy=S0,R.sortedLastIndexOf=N0,R.startCase=_w,R.startsWith=fw,R.subtract=oy,R.sum=sy,R.sumBy=ay,R.template=gw,R.times=Bw,R.toFinite=Br,R.toInteger=at,R.toLength=qg,R.toLower=hw,R.toNumber=ir,R.toSafeInteger=hI,R.toString=At,R.toUpper=vw,R.trim=pw,R.trimEnd=mw,R.trimStart=Ew,R.truncate=Cw,R.unescape=bw,R.uniqueId=jw,R.upperCase=Iw,R.upperFirst=mu,R.each=Ug,R.eachRight=Gg,R.first=Dg,bu(R,function(){var a={};return Ar(R,function(c,p){St.call(R.prototype,p)||(a[p]=c)}),a}(),{chain:!1}),R.VERSION=r,Qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){R[a].placeholder=R}),Qn(["drop","take"],function(a,c){ht.prototype[a]=function(p){p=p===n?1:Qt(at(p),0);var C=this.__filtered__&&!c?new ht(this):this.clone();return C.__filtered__?C.__takeCount__=_n(p,C.__takeCount__):C.__views__.push({size:_n(p,$e),type:a+(C.__dir__<0?"Right":"")}),C},ht.prototype[a+"Right"]=function(p){return this.reverse()[a](p).reverse()}}),Qn(["filter","map","takeWhile"],function(a,c){var p=c+1,C=p==Z||p==Ce;ht.prototype[a]=function(y){var D=this.clone();return D.__iteratees__.push({iteratee:Ke(y,3),type:p}),D.__filtered__=D.__filtered__||C,D}}),Qn(["head","last"],function(a,c){var p="take"+(c?"Right":"");ht.prototype[a]=function(){return this[p](1).value()[0]}}),Qn(["initial","tail"],function(a,c){var p="drop"+(c?"":"Right");ht.prototype[a]=function(){return this.__filtered__?new ht(this):this[p](1)}}),ht.prototype.compact=function(){return this.filter(xn)},ht.prototype.find=function(a){return this.filter(a).head()},ht.prototype.findLast=function(a){return this.reverse().find(a)},ht.prototype.invokeMap=_t(function(a,c){return typeof a=="function"?new ht(this):this.map(function(p){return as(p,a,c)})}),ht.prototype.reject=function(a){return this.filter(Pa(Ke(a)))},ht.prototype.slice=function(a,c){a=at(a);var p=this;return p.__filtered__&&(a>0||c<0)?new ht(p):(a<0?p=p.takeRight(-a):a&&(p=p.drop(a)),c!==n&&(c=at(c),p=c<0?p.dropRight(-c):p.take(c-a)),p)},ht.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},ht.prototype.toArray=function(){return this.take($e)},Ar(ht.prototype,function(a,c){var p=/^(?:filter|find|map|reject)|While$/.test(c),C=/^(?:head|last)$/.test(c),y=R[C?"take"+(c=="last"?"Right":""):c],D=C||/^find/.test(c);y&&(R.prototype[c]=function(){var z=this.__wrapped__,K=C?[1]:arguments,q=z instanceof ht,de=K[0],_e=q||rt(z),pe=function(gt){var vt=y.apply(R,ni([gt],K));return C&&Ne?vt[0]:vt};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var Ne=this.__chain__,Pe=!!this.__actions__.length,Ve=D&&!Ne,ct=q&&!Pe;if(!D&&_e){z=ct?z:new ht(this);var Xe=a.apply(z,K);return Xe.__actions__.push({func:Ua,args:[pe],thisArg:n}),new er(Xe,Ne)}return Ve&&ct?a.apply(this,K):(Xe=this.thru(pe),Ve?C?Xe.value()[0]:Xe.value():Xe)})}),Qn(["pop","push","shift","sort","splice","unshift"],function(a){var c=la[a],p=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",C=/^(?:pop|shift)$/.test(a);R.prototype[a]=function(){var y=arguments;if(C&&!this.__chain__){var D=this.value();return c.apply(rt(D)?D:[],y)}return this[p](function(z){return c.apply(rt(z)?z:[],y)})}}),Ar(ht.prototype,function(a,c){var p=R[c];if(p){var C=p.name+"";St.call(Qi,C)||(Qi[C]=[]),Qi[C].push({name:c,func:p})}}),Qi[Na(n,w).name]=[{name:"wrapper",func:n}],ht.prototype.clone=bE,ht.prototype.reverse=IE,ht.prototype.value=wE,R.prototype.at=Q0,R.prototype.chain=J0,R.prototype.commit=eb,R.prototype.next=tb,R.prototype.plant=rb,R.prototype.reverse=ib,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=ob,R.prototype.first=R.prototype.head,es&&(R.prototype[es]=nb),R},Xi=eE();Ci?((Ci.exports=Xi)._=Xi,Cc._=Xi):sn._=Xi}).call(_R)}(Es,Es.exports)),Es.exports}var xt=fR();function Vr(t){return Array.isArray?Array.isArray(t):Jv(t)==="[object Array]"}function gR(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function hR(t){return t==null?"":gR(t)}function Rr(t){return typeof t=="string"}function Zv(t){return typeof t=="number"}function vR(t){return t===!0||t===!1||pR(t)&&Jv(t)=="[object Boolean]"}function Qv(t){return typeof t=="object"}function pR(t){return Qv(t)&&t!==null}function $n(t){return t!=null}function Nu(t){return!t.trim().length}function Jv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const mR="Incorrect 'index' type",ER=t=>`Invalid value for key ${t}`,CR=t=>`Pattern length exceeds max of ${t}.`,bR=t=>`Missing ${t} property in key`,IR=t=>`Property 'weight' in key '${t}' must be a positive integer`,bh=Object.prototype.hasOwnProperty;class wR{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=ep(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ep(t){let e=null,n=null,r=null,i=1,o=null;if(Rr(t)||Vr(t))r=t,e=Ih(t),n=Zu(t);else{if(!bh.call(t,"name"))throw new Error(bR("name"));const s=t.name;if(r=s,bh.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(IR(s));e=Ih(s),n=Zu(s),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Ih(t){return Vr(t)?t:t.split(".")}function Zu(t){return Vr(t)?t.join("."):t}function yR(t,e){let n=[],r=!1;const i=(o,s,l)=>{if($n(o))if(!s[l])n.push(o);else{let u=s[l];const d=o[u];if(!$n(d))return;if(l===s.length-1&&(Rr(d)||Zv(d)||vR(d)))n.push(hR(d));else if(Vr(d)){r=!0;for(let g=0,h=d.length;g<h;g+=1)i(d[g],s,l+1)}else s.length&&i(d,s,l+1)}};return i(t,Rr(e)?e.split("."):e,0),r?n:n[0]}const OR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},AR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},xR={location:0,threshold:.6,distance:100},SR={useExtendedSearch:!1,getFn:yR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var et={...AR,...OR,...xR,...SR};const NR=/[^ ]+/g;function LR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(NR).length;if(n.has(o))return n.get(o);const s=1/Math.pow(o,.5*t),l=parseFloat(Math.round(s*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class e_{constructor({getFn:e=et.getFn,fieldNormWeight:n=et.fieldNormWeight}={}){this.norm=LR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Rr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Rr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!$n(e)||Nu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if($n(s)){if(Vr(s)){let l=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:d,value:g}=u.pop();if($n(g))if(Rr(g)&&!Nu(g)){let h={v:g,i:d,n:this.norm.get(g)};l.push(h)}else Vr(g)&&g.forEach((h,v)=>{u.push({nestedArrIndex:v,value:h})})}r.$[o]=l}else if(Rr(s)&&!Nu(s)){let l={v:s,n:this.norm.get(s)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function tp(t,e,{getFn:n=et.getFn,fieldNormWeight:r=et.fieldNormWeight}={}){const i=new e_({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(ep)),i.setSources(e),i.create(),i}function RR(t,{getFn:e=et.getFn,fieldNormWeight:n=et.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new e_({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function ja(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=et.distance,ignoreLocation:o=et.ignoreLocation}={}){const s=e/t.length;if(o)return s;const l=Math.abs(r-n);return i?s+l/i:l?1:s}function DR(t=[],e=et.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=t.length;o<s;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Li=32;function TR(t,e,n,{location:r=et.location,distance:i=et.distance,threshold:o=et.threshold,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,includeMatches:u=et.includeMatches,ignoreLocation:d=et.ignoreLocation}={}){if(e.length>Li)throw new Error(CR(Li));const g=e.length,h=t.length,v=Math.max(0,Math.min(r,h));let m=o,E=v;const b=l>1||u,I=b?Array(h):[];let w;for(;(w=t.indexOf(e,E))>-1;){let M=ja(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:d});if(m=Math.min(M,m),E=w+g,b){let P=0;for(;P<g;)I[w+P]=1,P+=1}}E=-1;let A=[],T=1,k=g+h;const G=1<<g-1;for(let M=0;M<g;M+=1){let P=0,te=k;for(;P<te;)ja(e,{errors:M,currentLocation:v+te,expectedLocation:v,distance:i,ignoreLocation:d})<=m?P=te:k=te,te=Math.floor((k-P)/2+P);k=te;let ce=Math.max(1,v-te+1),se=s?h:Math.min(v+te,h)+g,ue=Array(se+2);ue[se+1]=(1<<M)-1;for(let Z=se;Z>=ce;Z-=1){let Ie=Z-1,Ce=n[t.charAt(Ie)];if(b&&(I[Ie]=+!!Ce),ue[Z]=(ue[Z+1]<<1|1)&Ce,M&&(ue[Z]|=(A[Z+1]|A[Z])<<1|1|A[Z+1]),ue[Z]&G&&(T=ja(e,{errors:M,currentLocation:Ie,expectedLocation:v,distance:i,ignoreLocation:d}),T<=m)){if(m=T,E=Ie,E<=v)break;ce=Math.max(1,2*v-E)}}if(ja(e,{errors:M+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:d})>m)break;A=ue}const Y={isMatch:E>=0,score:Math.max(.001,T)};if(b){const M=DR(I,l);M.length?u&&(Y.indices=M):Y.isMatch=!1}return Y}function kR(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class np{constructor(e,{location:n=et.location,threshold:r=et.threshold,distance:i=et.distance,includeMatches:o=et.includeMatches,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,isCaseSensitive:u=et.isCaseSensitive,ignoreLocation:d=et.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(v,m)=>{this.chunks.push({pattern:v,alphabet:kR(v),startIndex:m})},h=this.pattern.length;if(h>Li){let v=0;const m=h%Li,E=h-m;for(;v<E;)g(this.pattern.substr(v,Li),v),v+=Li;if(m){const b=h-Li;g(this.pattern.substr(b),b)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:u,ignoreLocation:d}=this.options;let g=[],h=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:b,startIndex:I})=>{const{isMatch:w,score:A,indices:T}=TR(e,E,b,{location:i+I,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:d});w&&(v=!0),h+=A,w&&T&&(g=[...g,...T])});let m={isMatch:v,score:v?h/this.chunks.length:1};return v&&r&&(m.indices=g),m}}class gi{constructor(e){this.pattern=e}static isMultiMatch(e){return wh(e,this.multiRegex)}static isSingleMatch(e){return wh(e,this.singleRegex)}search(){}}function wh(t,e){const n=t.match(e);return n?n[1]:null}class MR extends gi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class UR extends gi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class GR extends gi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class $R extends gi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class FR extends gi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class PR extends gi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class rp extends gi{constructor(e,{location:n=et.location,threshold:r=et.threshold,distance:i=et.distance,includeMatches:o=et.includeMatches,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,isCaseSensitive:u=et.isCaseSensitive,ignoreLocation:d=et.ignoreLocation}={}){super(e),this._bitapSearch=new np(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ip extends gi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const Qu=[MR,ip,GR,$R,PR,FR,UR,rp],yh=Qu.length,zR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,HR="|";function WR(t,e={}){return t.split(HR).map(n=>{let r=n.trim().split(zR).filter(o=>o&&!!o.trim()),i=[];for(let o=0,s=r.length;o<s;o+=1){const l=r[o];let u=!1,d=-1;for(;!u&&++d<yh;){const g=Qu[d];let h=g.isMultiMatch(l);h&&(i.push(new g(h,e)),u=!0)}if(!u)for(d=-1;++d<yh;){const g=Qu[d];let h=g.isSingleMatch(l);if(h){i.push(new g(h,e));break}}}return i})}const BR=new Set([rp.type,ip.type]);class YR{constructor(e,{isCaseSensitive:n=et.isCaseSensitive,includeMatches:r=et.includeMatches,minMatchCharLength:i=et.minMatchCharLength,ignoreLocation:o=et.ignoreLocation,findAllMatches:s=et.findAllMatches,location:l=et.location,threshold:u=et.threshold,distance:d=et.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:o,location:l,threshold:u,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=WR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,s=[],l=0;for(let u=0,d=n.length;u<d;u+=1){const g=n[u];s.length=0,o=0;for(let h=0,v=g.length;h<v;h+=1){const m=g[h],{isMatch:E,indices:b,score:I}=m.search(e);if(E){if(o+=1,l+=I,r){const w=m.constructor.type;BR.has(w)?s=[...s,...b]:s.push(b)}}else{l=0,o=0,s.length=0;break}}if(o){let h={isMatch:!0,score:l/o};return r&&(h.indices=s),h}}return{isMatch:!1,score:1}}}const Ju=[];function jR(...t){Ju.push(...t)}function ed(t,e){for(let n=0,r=Ju.length;n<r;n+=1){let i=Ju[n];if(i.condition(t,e))return new i(t,e)}return new np(t,e)}const dl={AND:"$and",OR:"$or"},td={PATH:"$path",PATTERN:"$val"},nd=t=>!!(t[dl.AND]||t[dl.OR]),KR=t=>!!t[td.PATH],VR=t=>!Vr(t)&&Qv(t)&&!nd(t),Oh=t=>({[dl.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function op(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const s=KR(i);if(!s&&o.length>1&&!nd(i))return r(Oh(i));if(VR(i)){const u=s?i[td.PATH]:o[0],d=s?i[td.PATTERN]:i[u];if(!Rr(d))throw new Error(ER(u));const g={keyId:Zu(u),pattern:d};return n&&(g.searcher=ed(d,e)),g}let l={children:[],operator:o[0]};return o.forEach(u=>{const d=i[u];Vr(d)&&d.forEach(g=>{l.children.push(r(g))})}),l};return nd(t)||(t=Oh(t)),r(t)}function XR(t,{ignoreFieldNorm:e=et.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:s})=>{const l=i?i.weight:null;r*=Math.pow(s===0&&l?Number.EPSILON:s,(l||1)*(e?1:o))}),n.score=r})}function qR(t,e){const n=t.matches;e.matches=[],$n(n)&&n.forEach(r=>{if(!$n(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let s={indices:i,value:o};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function ZR(t,e){e.score=t.score}function QR(t,e,{includeMatches:n=et.includeMatches,includeScore:r=et.includeScore}={}){const i=[];return n&&i.push(qR),r&&i.push(ZR),t.map(o=>{const{idx:s}=o,l={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Go{constructor(e,n={},r){this.options={...et,...n},this.options.useExtendedSearch,this._keyStore=new wR(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof e_))throw new Error(mR);this._myIndex=n||tp(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){$n(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:s,ignoreFieldNorm:l}=this.options;let u=Rr(e)?Rr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return XR(u,{ignoreFieldNorm:l}),o&&u.sort(s),Zv(n)&&n>-1&&(u=u.slice(0,n)),QR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=ed(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:s,n:l})=>{if(!$n(o))return;const{isMatch:u,score:d,indices:g}=n.searchIn(o);u&&i.push({item:o,idx:s,matches:[{score:d,value:o,norm:l,indices:g}]})}),i}_searchLogical(e){const n=op(e,this.options),r=(l,u,d)=>{if(!l.children){const{keyId:h,searcher:v}=l,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:v});return m&&m.length?[{idx:d,item:u,matches:m}]:[]}const g=[];for(let h=0,v=l.children.length;h<v;h+=1){const m=l.children[h],E=r(m,u,d);if(E.length)g.push(...E);else if(l.operator===dl.AND)return[]}return g},i=this._myIndex.records,o={},s=[];return i.forEach(({$:l,i:u})=>{if($n(l)){let d=r(n,l,u);d.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},s.push(o[u])),d.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),s}_searchObjectList(e){const n=ed(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:s,i:l})=>{if(!$n(s))return;let u=[];r.forEach((d,g)=>{u.push(...this._findMatches({key:d,value:s[g],searcher:n}))}),u.length&&o.push({idx:l,item:s,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!$n(n))return[];let i=[];if(Vr(n))n.forEach(({v:o,i:s,n:l})=>{if(!$n(o))return;const{isMatch:u,score:d,indices:g}=r.searchIn(o);u&&i.push({score:d,key:e,value:o,idx:s,norm:l,indices:g})});else{const{v:o,n:s}=n,{isMatch:l,score:u,indices:d}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:s,indices:d})}return i}}Go.version="7.0.0";Go.createIndex=tp;Go.parseIndex=RR;Go.config=et;Go.parseQuery=op;jR(YR);function Rl(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function JR(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function eD(t){return new Go(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function tD(t,e,n){const r=JR(e,n);return t.length===0?r:eD(r).search(t).map(i=>i.item)}function nD(t,e){return Rl(t,e).shape}function un(t,e){const n=nD(t,e);return n?Xu(n):void 0}function Dl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Jd(e)}function rD(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return dR(e)}function iD(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Bs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Jd(i)})}function oD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Jd(o)})})}function sp(t,e){const n=t[e];if(n!==void 0&&typeof n!="string")throw Error(`${e} entry must be a string, if present at all: ${n}`);return n}function kr(t){return sp(t,"value")}function ap(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Vv(e)}function sD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Vv(r)})}function aD(t,e){const n=t.shape;return n===void 0?void 0:{...un(e,zt),...n}}function lp(t,e,n){return{toolId:t,cells:e,value:n}}function lD(t,e){const n=Bs(e,"cells"),r=kr(e);return lp(t,n,r)}function cp(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,s)=>Je(o,e)&&s>=r)}function cD(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Hs(r[i-1],e)))return t;const s=cp(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function up(t,e){return{toolId:t,cells:e,lines:[]}}function uD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),ll(n),{...t,cells:n};const r=n.some(o=>Je(o,e)),i=n.some(o=>Hs(o,e));return n.length>0&&!r&&i?(n.push(e),ll(n),{...t,cells:n}):t}function dD(t,e,n){const r=t.cells.some(d=>Je(d,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return rd(t,e);const o=t.lines[i-1],s=o.length;if(s===0&&!r)return t;if(s===0&&r)return rd(t,e);const l=cp(o,e,!1);return(o.length===0?!0:Hs(o[s-1],e))?l>=0?(o.length=l+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function rd(t,e){return t.cells.some(r=>Je(r,e))?{...t,lines:[...t.lines,[e]]}:t}function _D(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function fD(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function gD(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function hD(t,e){const n=Bs(e,"cells"),r=oD(e),i=up(t,n);return i.lines=r,i}function dp(t,e,n=""){return{toolId:t,cells:e,value:n}}function vD(t,e,n=!1){const r=qv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function pD(t,e){return{...t,value:e}}function mD(t,e){const n=Bs(e,"cells"),r=kr(e);return dp(t,n,r)}function id(t,e,n){return{toolId:t,cells:e,value:n}}function ED(t,e){const n=Bs(e,"cells"),r=kr(e);return id(t,n,r)}function od(t,e,n){return{toolId:t,cells:e,value:n}}function CD(t,e){const n=Bs(e,"cells"),r=kr(e);return od(t,n,r)}function sd(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function bD(t,e){const n=Dl(e),r=ap(e),i=kr(e);return sd(t,n,r,i)}function ad(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function ID(t,e){const n=Dl(e),r=kr(e);return ad(t,n,r)}function ld(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function wD(t,e){const n=Dl(e),r=ap(e);return ld(t,n,r)}function cd(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function yD(t,e){const n=Dl(e),r=sD(e),i=cd(t,n,Fe.N);return i.directions=r,i}function ud(t,e,n=""){return{toolId:t,cell:e,value:n}}function OD(t,e){const n=rD(e),r=kr(e);return ud(t,n,r)}function _p(t,e=""){return{toolId:t,value:e}}function AD(t,e){const n=kr(e);return _p(t,n)}function xD(t,e,n=""){return{toolId:t,coords:e,value:n}}function SD(t,e){const n=iD(e,"coords"),r=kr(e);return xD(t,n,r)}function fp(t="",e=""){return{toolId:_.VARIABLE_CONSTRAINT,name:t,value:e}}function ND(t){const e=sp(t,"name"),n=kr(t);return fp(e,n)}function $o(t,e){return{...t,value:e}}function LD(t,e){return{...t,name:e}}class Fo extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const i=r.constraints[n];return i||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);!i||!i.constraints||(i.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const i=this.get(e);!i||!i.constraints||i.constraints[n]&&(i.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];if(r.constraints)for(const s of Object.values(r.constraints))i.push(UD(s));const o={tool_id:n,constraints:i};if(r.negative_constraints)for(const[s,l]of Object.entries(r.negative_constraints))l&&(o.negative_constraints||(o.negative_constraints={}),o.negative_constraints[s]=l);e[n]=o}return e}static fromJson(e){const n=new Fo;if(!e)return n;for(const r of Object.values(e)){const i=r.tool_id;if(typeof i!="string")throw TypeError("tool_id_str must be of type string.");const o=Yy(i);if(o===void 0||!Object.keys(zt).includes(o))continue;n.addToDict(o);const s=n.get(o);if(!s)continue;const l=r.negative_constraints;if(l){s.negative_constraints={};for(const[d,g]of Object.entries(l))s.negative_constraints[d]=g}const u=r.constraints;for(const d of u){let g=null;if(jy(o,wl)?g=ID(o,d):Fi(o)?g=wD(o,d):wo(o)?g=yD(o,d):yo(o)?g=CD(o,d):Rs(o)?g=ED(o,d):Oo(o)?g=lD(o,d):Gv(o)?g=SD(o,d):Ao(o)?g=hD(o,d):xo(o)?g=mD(o,d):Xr(o)?g=bD(o,d):Pd(o)?g=AD(o,d):o===_.VARIABLE_CONSTRAINT?g=ND(d):Ds(o)&&(g=OD(o,d)),g!==null){const h=xt.uniqueId(),v=aD(d,o);g.shape=v,n.addConstraint(o,h,g)}}}return n}}function _o(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=i[0];if(Je(o.cell,n))return[s,o]}return null}function Ah(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(n.every(l=>o.cells.some(u=>Je(l,u))))return i}return null}function xh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=o.cells[o.cells.length-1];if(Je(n,s))return i}return null}function RD(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Je(l,n)))return[i[0],o]}return null}function DD(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints))if(i[1].cells.some(l=>Je(l,n)))return i;return null}function Sh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Je(l,n)))return[i[0],o]}return null}function TD(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[i,o]of Object.entries(r.constraints)){const s=o,l=s.lines.findIndex(u=>u.some((d,g)=>Je(d,n)&&g>0));if(l>=0)return{id:i,arrow:s,matchLineIdx:l}}return null}function Nh(t,e,n,r){const i=t.get(e);if(!i||!i.constraints)return null;for(const o of Object.entries(i.constraints)){const s=o[1],l=o[0];if(Je(n,s.cell)&&r===s.direction)return[l,s]}return null}function Lh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=i[0];if(Je(n,o.cell))return[s,o]}return null}function kD(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Je(l,n))||o.cells2.some(l=>Je(l,n)))return[i[0],o]}return null}function MD(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const i of Object.entries(n.constraints)){const o=i[1];r.add(o.value)}return r}function UD(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ba(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ba(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ba(i)));e.lines=n}if("cell"in t){const n=Ba(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"name"in t&&t.name&&(e.name=t.name),"shape"in t&&t.shape){const n=un(t.toolId,zt),r=Vy(t.shape,n);r&&(e.shape=r)}return e}function Rh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function gp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function dd(t){const e=new Option().style;return e.color=t,e.color!==""}function Lu(t){return gp(t)||dd(t)?t:dd(`#${t}`)?`#${t}`:void 0}function _l(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}const GD=t=>btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function i7(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");for(;e.length%4!==0;)e+="=";return atob(e)}function hp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function fl(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function $D(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function*vp(t,e){if(!(e<0||e>t.length)){if(e===0){yield[];return}for(let n=0;n<=t.length-e;n++){const r=t[n],i=t.slice(n+1);for(const o of vp(i,e-1))yield[r,...o]}}}const Dh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function FD(t){return t in Dh?Dh[t]:null}function pp(t,e,n){if(n===null)return null;const r=FD(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Ru(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class PD{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Ru(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Ru(this.cornerMarks,e))}enterHighlight(e){this.highlights=Ru(this.highlights,e)}enterCell(e,n,r=!1){n===_.GIVEN?this.enterGiven(e,r):n===_.DIGIT?this.enterValue(e,r):n===_.CORNER_PM?this.enterCornerPM(e):n===_.CENTER_PM?this.enterCenterPM(e):n===_.HIGHLIGHTS?this.enterHighlight(e):n===_.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==pp(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Po{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let s=0;s<n;s++){const l=new PD(i,s);if(r){const u=pp(i,s,e);l.region=u}o.push(l)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,s]=[e.r+i[0],e.c+i[1]],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],s=e.c+i[1],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],s=e.c+i[1],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return hp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(l=>l===o))return n;for(const l of i){const u=this.getRegion(l);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:s}=Ws(r);let[l,u]=[e+o,n+s];for(;0<=l&&l<this.nRows&&0<=u&&u<this.nCols;){const d=this.grid[l][u];i.push(d),[l,u]=[l+o,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const s=this.getCell(r,o);if(!s)continue;const l=s==null?void 0:s.toJson(n);i.push(l)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Po(e,n);for(let o=0;o<e;o++)for(let s=0;s<n;s++){const l=r[o][s],u=i.getCell(o,s);u&&Object.assign(u,l)}return i}}function zD(t){const e=t.grid,n=t.elementsDict,r={};r.puzzleInfo=t.puzzleMeta,r.nRows=e.nRows,r.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),o=xt.range(1,i+1);t.valid_digits&&!$D(o,t.valid_digits)&&(r.valid_digits=t.valid_digits),r.grid=e.toJSON(),t.solution&&(r.solution=t.solution);const s=n.toJSON();return Object.keys(s).length&&(r.elements=s),r}function HD(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo;let i={};r&&(i=r);const o=t.valid_digits,s=t.grid,l=Po.fromJSON(e,n,s),u=Math.min(l.nRows,l.nRows);let d=xt.range(1,u+1);o!==void 0&&(d=o);const g=t.solution,h=t.elements,v=Fo.fromJson(h);return{puzzleMeta:i,solution:g,grid:l,valid_digits:d,elementsDict:v}}function o7(){const t=new Po(9,9),e=new Fo;return{grid:t,solution:void 0,valid_digits:xt.range(1,10),puzzleMeta:{},elementsDict:e}}var Cs=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Cs||{});const WD=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),BD=()=>({type:"CLEAR"}),YD=t=>({type:"DRAG",payload:t}),_d=t=>({type:"SET",payload:t}),jD=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),t_=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Lr=(t,e,n)=>{const r=[...t];return ll(r),{cells:r,lastCell:e,mode:n}};function KD(t,e,n){if(e===null)return t_();if(n==="RESETTING")return Lr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Je(e,i));if(n==="SELECTING")return r!==-1?t:Lr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Lr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Lr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Lr(i,null,"DESELECTING")}return t}function VD(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Je(e,r));if(t.mode==="SELECTING")return n!==-1?t:Lr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Lr(r,null,t.mode)}return t}function XD(t,e){return{...t,cells:e}}function qD(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Je(e,i))!==-1?Lr([...t.cells],e,"SELECTING"):Lr([...t.cells,e],e,"SELECTING"):Lr([e],e,t.mode)}function mp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return t_();case"SET":return XD(t,e.payload);case"CLICK":return KD(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return VD(t,e.payload);case"ARROW_KEY":return qD(t,e.payload.cell,e.payload.selectionMode);default:return t}}function uo(t,e){return Je(t.p1,e.p1)&&Je(t.p2,e.p2)||Je(t.p1,e.p2)&&Je(t.p2,e.p1)}function ZD(t,e){return Je(t.p1,e.p2)&&Je(t.p2,e.p1)}function Ep(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Je(t,e)}class Tl{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Je(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Je(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Je(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Je(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Je(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Je(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Je(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Je(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Je(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Je(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>uo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>uo(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&ZD(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Ep(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>uo(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>uo(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Tl;return Object.assign(e,this),e}}const Th=t=>({type:"ADD_EDGE_MARKER",payload:t}),kh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ka=t=>({type:"ADD_CELL_MARKER",payload:t}),QD=t=>({type:"SET_CELL_MARKERS",payload:t}),Mh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),JD=t=>({type:"DRAG",payload:t}),po=t=>({type:"ADD_LINE_MARKERS",payload:t}),Uh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),n_=()=>({type:"RESET"});function e2(t,e){switch(e.type){case"RESET":return new Tl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Cp(){return{_undoStack:[],_redoStack:[]}}const zo=Nt(Cp());function t2(){zo.update(()=>Cp())}function or(t,e=!0){zo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function n2(t,e=!0){zo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function bp(){zo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Ip(){zo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const gl=Nt(new Tl);function br(t){gl.update(e=>e2(e,t))}const hl=Nt(1);function Ni(t,e){return{execute:()=>{br(t)},unExecute:()=>{br(e)}}}const Ui=Nt(t_());function lo(t){t&&Ui.update(e=>mp(e,t))}function Gh(t){t&&Ui.update(e=>mp(e,t))}function r2(t,e){return{execute:()=>{Gh(t)},unExecute:()=>{Gh(e)}}}const mo=Nt(null),kl=Nt(Io.SETTING),fd=Nt(!1),tn=Nt(_.DIGIT),wp=Nt(_.DIGIT),r_=Nt(xt.range(1,10)),hn=Nt(new Po(9,9)),Pn=Nt(Re(hn).getAllCells()),Mr=Nt({}),lt=Nt(new Fo),Ht=Nt(null),Ho=Nt(void 0),Ml=Nt(void 0);function i2(t){Mr.update(()=>t)}function Wo(t){Ht.update(()=>t)}function i_(t){Ho.update(()=>t)}function Kr(t){Re(tn)!==t&&(tn.update(()=>t),Wo(null))}function o2(){const t=Re(wp);t&&Kr(t)}function gd(t){wp.update(()=>t)}function s2(t){Re(tn)===t&&Kr(_.DIGIT)}function a2(t){lt.update(e=>(e.removeFromDict(t),e)),i_(void 0)}function Xt(t,e,n){lt.update(r=>(r.updateConstraint(t,e,n),r)),Wo({id:e,constraint:n})}function Du(t){const e=Re(Ht);if(t=t?{...t}:void 0,i_(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Xt(r,e.id,n)}function hi(t,e){const r=Re(lt).get(e);if(!r||!r.constraints)return;const i=r.constraints[t];i&&Wo({id:t,constraint:i})}function l2(t,e,n){const r=new Po(t,e);hn.update(()=>r),r_.update(()=>n),lt.update(()=>new Fo),Mr.update(()=>({})),o_(void 0),Pn.update(()=>r.getAllCells())}function c2(t){hn.update(()=>t.grid),Mr.update(()=>t.puzzleMeta),o_(t.solution),r_.update(()=>t.valid_digits),lt.update(()=>t.elementsDict),Pn.update(()=>t.grid.getAllCells())}function yp(){const t=Re(hn);t.resetValues(),hn.update(()=>t),Pn.update(()=>t.getAllCells()),br(n_())}function vl(){t2(),br(n_()),Kr(_.DIGIT);const t=BD();lo(t),i_(void 0),Wo(null)}const u2=Bn(lt,t=>{for(const e of t.values()){const n=e.tool_id;if(n===_.FOG_LIGHTS||n===_.CUSTOM_FOG_CLEARING)return!0}return!1}),vi=Bn([Nn,u2,kl,tn],([t,e,n,r])=>{const i=t.hideFog,o=e,s=r,l=s===_.DIGIT||s===_.CORNER_PM||s===_.CENTER_PM||s===_.HIGHLIGHTS||s===_.PEN_TOOL;return!i&&o&&(l||n===Io.SOLVING)});Bn([Nn,kl],([t,e])=>!t.hideFog&&e===Io.SETTING);const Ys=Bn([hn,Mr,lt,Ml,r_],([t,e,n,r,i])=>({grid:t,solution:r,puzzleMeta:e,valid_digits:i,elementsDict:n}));function o_(t){Ml.update(()=>t)}const s_=Nt(!1);if(typeof window<"u"){const t=()=>s_.set(window.matchMedia("(orientation: portrait)").matches);t(),window.addEventListener("resize",t)}var d2=le('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function _2(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=d2(),o=j(i),s=j(o,!0);W(o);var l=F(o,2);W(i),J(()=>it(s,n())),Le("click",l,function(...u){var d;(d=r())==null||d.apply(this,u)}),N(t,i)}var f2=le('<dialog class="svelte-1suym9f"><div class="svelte-1suym9f"><!> <div class="modal-content-wrapper svelte-1suym9f"><div class="modal-content svelte-1suym9f"><!></div></div></div></dialog>');function pi(t,e){ie(e,!1);const n=Be(),r=()=>fe(s_,"$isPortraitStore",n),i=x();let o=U(e,"showModal",12),s=U(e,"title",8),l=x();function u(){o(!1),f(l).close()}L(()=>(f(l),X(o())),()=>{f(l)&&o()&&f(l).showModal()}),L(()=>(f(l),X(o())),()=>{f(l)&&!o()&&f(l).close()}),L(()=>r(),()=>{O(i,r())}),be();var d=f2(),g=j(d),h=j(g);_2(h,{get title(){return s()},closeCb:u});var v=F(h,2),m=j(v),E=j(m);Ot(E,e,"default",{}),W(m),W(v),W(g),W(d),Mi(d,b=>O(l,b),()=>f(l)),J(()=>Et(d,"mobile-layout",f(i))),Le("click",g,Fn(function(b){Uy.call(this,e,b)})),Le("close",d,()=>{o(!1)}),Le("click",d,My(Fn(()=>f(l).close()))),N(t,d),oe()}var g2=le('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function h2(t,e){ie(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=x(null);L(()=>(X(r()),f(i)),()=>{r()&&f(i)&&f(i).focus()}),be();var o=g2(),s=F(j(o),2);cn(s),S(s,"spellcheck",!1),Mi(s,l=>O(i,l),()=>f(i)),W(o),ar(s,n),N(t,o),oe()}var v2=le('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function p2(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);pi(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,s)=>{var l=v2(),u=j(l);h2(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var d=F(u,2),g=j(d),h=j(g);Ot(h,e,"default",{}),W(g),W(d),W(l),N(o,l)},$$slots:{default:!0},$$legacy:!0})}var m2=le('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Op(t,e){let n=U(e,"isOpen",8,!0);var r=m2(),i=j(r);Ot(i,e,"default",{}),W(r),J(()=>{S(r,"aria-expanded",n()),Et(r,"closed",!n())}),N(t,r)}var E2=le('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),C2=le('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Ri(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var o=Ee(),s=ee(o);{var l=d=>{var g=E2(),h=j(g),v=j(h),m=j(v,!0);W(v),W(h);var E=F(h,2),b=j(E);Ot(b,e,"default",{}),W(E),W(g),J(()=>it(m,n())),N(d,g)},u=d=>{var g=C2(),h=j(g),v=j(h),m=j(v,!0);W(v),W(h);var E=F(h,2),b=j(E);Ot(b,e,"default",{});var I=F(b,2);W(E),W(g),J(()=>{it(m,n()),Et(I,"open",r())}),Le("click",g,()=>r(!r())),N(d,g)};Q(s,d=>{i()?d(u,!1):d(l)})}N(t,o)}var b2=le('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),I2=le('<ol class="svelte-cd45on"></ol>'),w2=le("<!> <!>",1);function y2(t,e){ie(e,!1);const n=x();let r=U(e,"category",8),i=U(e,"addTool",8),o=U(e,"searchResults",8),s=x(!0);L(()=>(X(o()),X(r())),()=>{O(n,o().filter(g=>{var h,v;return(v=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:v.includes(r())}))}),be(),ge();var l=Ee(),u=ee(l);{var d=g=>{var h=w2(),v=ee(h);Ri(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return f(s)},set isOpen(E){O(s,E)},$$legacy:!0});var m=F(v,2);Op(m,{get isOpen(){return f(s)},children:(E,b)=>{var I=I2();Qe(I,5,()=>f(n),pt,(w,A)=>{let T=()=>f(A).key,k=()=>f(A).info;var G=b2(),Y=j(G),M=j(Y,!0);W(Y),W(G),J(()=>{var P;S(Y,"title",(P=k().meta)==null?void 0:P.description),it(M,T())}),Le("click",Y,()=>{i()(T())}),N(w,G)}),W(I),N(E,I)},$$slots:{default:!0}}),N(g,h)};Q(u,g=>{f(n).length&&g(d)})}N(t,l),oe()}function O2(t,e){ie(e,!1);const n=x();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),o=U(e,"categories",8),s=U(e,"filterFunc",8),l=U(e,"elementHandlers",8);L(()=>(X(r()),X(s()),X(l())),()=>{O(n,tD(r(),s(),l()))}),be(),ge();var u=Ee(),d=ee(u);Qe(d,1,o,pt,(g,h)=>{y2(g,{get category(){return f(h)},get searchResults(){return f(n)},get addTool(){return i()}})}),N(t,u),oe()}var A2=le('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Ul(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=A2();S(i,"tabindex",0);var o=j(i),s=j(o);Ot(s,e,"add-button",{}),W(o);var l=F(o,2),u=j(l),d=j(u);Ot(d,e,"title-icon",{}),W(u);var g=F(u);W(l);var h=F(l,2),v=j(h);W(h),W(i),J(()=>{it(g,` ${r()??""}`),Et(v,"open",n())}),Le("click",i,()=>n(!n())),Le("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,i)}var x2=le('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Element"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function S2(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function o(){i(!i())}Ul(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,l)=>{var u=x2();Le("click",u,Fn(()=>o())),N(s,u)},"title-icon":(s,l)=>{var u=Ee(),d=ee(u);Ot(d,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var N2=le('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),L2=le('<div class="panel-container svelte-hixu4"><!> <!></div>');function Gl(t,e){let n=U(e,"isOpen",8,!0);var r=L2(),i=j(r);Ot(i,e,"panel-header",{});var o=F(i,2);Op(o,{get isOpen(){return n()},children:(s,l)=>{var u=N2(),d=j(u);Ot(d,e,"panel-content",{}),W(u),N(s,u)},$$slots:{default:!0}}),W(r),N(t,r)}var R2=le("<!> <!>",1);function D2(t,e){ie(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),o=U(e,"elementHandlerFilterFunc",8),s=U(e,"elementHandlers",8),l=x(!0),u=x(!1),d=x("");const g=h=>{O(u,!1),O(l,!0),i()(h)};ge(),Gl(t,{get isOpen(){return f(l)},set isOpen(h){O(l,h)},$$slots:{"panel-header":(h,v)=>{var m=R2(),E=ee(m);S2(E,{get title(){return r()},get isOpen(){return f(l)},set isOpen(I){O(l,I)},get showModal(){return f(u)},set showModal(I){O(u,I)},$$slots:{"title-icon":(I,w)=>{var A=Ee(),T=ee(A);Ot(T,e,"title-icon",{}),N(I,A)}},$$legacy:!0});var b=F(E,2);p2(b,{get title(){return r()},get showModal(){return f(u)},set showModal(I){O(u,I)},get searchPattern(){return f(d)},set searchPattern(I){O(d,I)},children:(I,w)=>{O2(I,{get searchPattern(){return f(d)},get categories(){return n()},get filterFunc(){return o()},addTool:g,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(h,m)},"panel-content":(h,v)=>{var m=Ee(),E=ee(m);Ot(E,e,"panel-content",{}),N(h,m)}},$$legacy:!0}),oe()}var T2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function k2(t){var e=T2();N(t,e)}var co=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(co||{});const a_=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),l_=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),M2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),U2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),$h=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function G2(t){lt.update(e=>(e.addToDict(t),e))}function js(t,e){const n=Re(Ho);n&&(e.shape={...n}),lt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Wo({id:t,constraint:e})}function c_(t,e){e&&lt.update(n=>(n.removeConstraint(t,e),n))}function Ap(t,e){lt.update(n=>(n.setElement(t,e),n))}function Fh(t){t.type===co.ADD_LOCAL_CONSTRAINT?js(t.payload.id,t.payload.constraint):t.type===co.REMOVE_LOCAL_CONSTRAINT?c_(t.payload.tool,t.payload.id):t.type===co.REMOVE_LOCAL_CONSTRAINT_GROUP?a2(t.payload.tool):t.type===co.RESTORE_ELEMENT?Ap(t.payload.tool,t.payload.constraints):t.type===co.UPDATE_LOCAL_CONSTRAINT&&Xt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ks(t,e){return{execute:()=>{Fh(t)},unExecute:()=>{Fh(e)}}}var $2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function xp(t){var e=$2();N(t,e)}var F2=le('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function P2(t,e){ie(e,!1);const n=Be(),r=()=>fe(lt,"$elementsDictStore",n),i=x(),o=x();let s=U(e,"tool_id",8),l=U(e,"neg_tool_id",8),u=U(e,"description",8);function d(){f(i)&&(f(i).negative_constraints||Ku(i,f(i).negative_constraints={}),Ku(i,f(i).negative_constraints[l()]=!f(o)),Ap(s(),f(i)),O(o,!f(o)))}L(()=>(r(),X(s())),()=>{O(i,r().get(s()))}),L(()=>(f(i),X(l())),()=>{var b;O(o,(b=f(i))!=null&&b.negative_constraints?!!f(i).negative_constraints[l()]:!1)}),be(),ge();var g=F2(),h=j(g),v=j(h);_i(2),W(h);var m=F(h,2),E=j(m,!0);W(m),W(g),J(()=>{S(g,"title",u()),Et(h,"checked",f(o)),Et(v,"checked",f(o)),it(E,l())}),Le("click",v,d),N(t,g),oe()}var z2=le('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function H2(t,e){ie(e,!1);const n=Be(),r=()=>fe(mo,"$svgRefStore",n),i=()=>fe(lt,"$elementsDictStore",n),o=()=>fe(Ht,"$currentConstraintStore",n),s=x();let l=U(e,"constraint_id",8),u=U(e,"tool_id",8);function d(){hi(l(),u()),r()&&r().focus()}function g(){const w=i().getConstraint(u(),l());if(!w)return;const A=l_(l(),u()),T=a_(l(),w),k=Ks(A,T);or(k)}L(()=>o(),()=>{var w;O(s,(w=o())==null?void 0:w.id)}),be(),ge();var h=z2(),v=j(h),m=j(v);W(v);var E=F(v,2),b=j(E),I=j(b);xp(I),W(b),W(E),W(h),J(()=>{Et(h,"active",l()===f(s)),it(m,`ID: ${l()??""}`)}),Le("click",b,Fn(g)),Le("click",h,d),N(t,h),oe()}var W2=le('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function B2(t,e){ie(e,!1);const n=Be(),r=()=>fe(lt,"$elementsDictStore",n),i=x();let o=U(e,"tool_id",8);L(()=>(r(),X(o())),()=>{O(i,r().get(o()))}),be(),ge();var s=Ee(),l=ee(s);{var u=d=>{var g=W2(),h=j(g);Qe(h,5,()=>Object.entries(f(i).constraints),v=>v[0],(v,m)=>{H2(v,{get constraint_id(){return f(m)[0]},get tool_id(){return o()}})}),W(h),W(g),N(d,g)};Q(l,d=>{f(i)&&f(i).constraints&&Object.entries(f(i).constraints).length&&d(u)})}N(t,s),oe()}function Ph(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const s=new Set(o.highlights);return n.difference(s).size===0}).map(o=>o.toCoords())}function Y2(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function zh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const s=new Set(o.cornerMarks);return n.difference(s).size===0}).map(o=>o.toCoords())}function Hh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const s=new Set(o.centerMarks);return n.difference(s).size===0}).map(o=>o.toCoords())}function j2(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===_.HIGHLIGHTS&&i.highlights.length?Ph(i,e):i.value!==null?Y2(i,e):n===_.CORNER_PM&&i.cornerMarks.length?zh(i,e):n===_.CENTER_PM&&i.centerMarks.length?Hh(i,e):i.cornerMarks.length?zh(i,e):i.centerMarks.length?Hh(i,e):i.highlights.length?Ph(i,e):r:r}function Hn(t,e,n,r=!1){if(!(t&&e))return;const i=a_(t,e),o=l_(t,n),s=Ks(i,o);or(s,r)}function Ir(t,e,n,r=!0){if(!(t&&e))return;const i=l_(t,n),o=a_(t,e),s=Ks(i,o);or(s,r)}function hd(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=$h(r,t,n),s=$h(r,t,e),l=Ks(o,s);or(l,i)}class Ue{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ue(this.x+e.x,this.y+e.y)}subtract(e){return new Ue(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ue(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ue(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function Sp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const bn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ue(i.x,i.y)};function Za(t,e){const n=Ll(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function K2(t,e){const n=Ll(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Qa(t,e){const n=Ll(t),r=aR(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),s=o.indexOf(Math.min(...o)),l=r[s],u=o[s];return e===void 0||u<e?{corner:l,dist:u,idx:s}:null}function Ja(t,e){const n=Ll(t),r=lR(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),s=o.indexOf(Math.min(...o)),l=r[s],u=o[s];return e===void 0||u<e?{edge:l,dist:u,idx:s}:null}function ys(t,e,n){const r=Za(t);if(!r)return null;const i=Ja(t);if(!i)return null;const o=Qa(t);if(!o)return null;const s=K2(t);if(!s)return null;let l,u;e===Lt.CORNER?(l=o.corner,u="corner"):e===Lt.EDGE?(l=i.edge,u="edge"):e===Lt.CELL_CENTER?(l=s.cellCenter,u="cell center"):e===Lt.CORNER_OR_EDGE?o.dist<i.dist?(l=o.corner,u="corner"):(l=i.edge,u="edge"):e===Lt.CORNER_OR_CENTER?o.dist<s.dist?(l=o.corner,u="corner"):(l=s.cellCenter,u="cell center"):e===Lt.EDGE_OR_CENTER?i.dist<s.dist?(l=i.edge,u="edge"):(l=s.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<s.dist?(l=i.edge,u="edge"):o.dist<i.dist&&o.dist<s.dist?(l=o.corner,u="corner"):(l=s.cellCenter,u="cell center");const g=new Ue(l.c,l.r).subtract(t).length(),h=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:s.cellCenter,edge:i.edge,corner:o.corner,dist:g,closest:l,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:h}}class Bo{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;this._prevPoint=r;const i=Za(r);if(!i)return;const o=i.cell;this._prevCell=o,this._lastPointerDownTime=e.timeStamp;const s={event:e,cell:o,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){const r=bn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=Za(r,i);if(!o)return;const s=o.cell;if(this._prevCell&&Je(this._prevCell,s))return;this._prevCell=s,this._prevPoint=r,this._isTap=!1;const l={event:e,cell:s,tapCount:this._tapCount};this.onMove&&this.onMove(l),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(l)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=bn(e,n);if(!r)return;const i=Za(r,void 0);if(!i)return;const o=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const l=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,l>0&&l<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function V2(t,e,n,r){const i=new Bo,o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null,u=null,d=!1,g=!1,h=Un.DYNAMIC;function v(E){d=!1;const b=E.cell;if($t(E.cell,o)){if(h===Un.DYNAMIC){const w=Re(lt),A=TD(w,n,b);if(A){const k=gD(A.arrow,A.matchLineIdx);hd(A.id,A.arrow,k,n,!0),g=!0;return}const T=Sh(w,n,b);if(!T)d=!0,h=Un.EDIT_BULB,u=null,s=null;else{h=Un.EDIT_ARROWS,u=T[0],s=T[1],s=rd(s,b),Xt(n,u,s);return}}if(h===Un.EDIT_BULB&&!u){u=xt.uniqueId(),s=up(n,[b]),js(u,s);return}else h===Un.EDIT_BULB&&u&&s?(s=uD(s,b),Xt(n,u,s)):h===Un.EDIT_ARROWS&&u&&s&&(s=dD(s,b,r==null?void 0:r.allowSelfIntersection),Xt(n,u,s))}}return i.onDragStart=E=>{h=Un.DYNAMIC,v(E)},i.onDrag=E=>{v(E)},i.onDragEnd=()=>{if(g){g=!1;return}h===Un.EDIT_ARROWS&&u&&s?_D(s)?(s=fD(s),Xt(n,u,s)):(hd(u,l,s,n),l=s):h===Un.EDIT_BULB&&(Hn(u,s,n),l=s),h=Un.DYNAMIC},i.onTap=E=>{if(d)return;const b=E.cell,I=Re(lt);if(Sh(I,n,b)){Ir(u,s,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function X2(t,e,n,r){const i=new Bo,o={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let l=null,u=null;function d(v){return!!$t(v.cell,o)}function g(v){if(!u||!l)throw"UNREACHABLE";const m=v.cell;d(v)&&(l=cD(l,m,s),Xt(n,u,l))}return i.onDragStart=v=>{Re(Yt)!==ke.DELETE&&(u=xt.uniqueId(),l=lp(n,[],r==null?void 0:r.defaultValue),js(u,l),g(v))},i.onDrag=v=>{g(v)},i.onDragEnd=()=>{u&&l&&l.cells.length<=1?c_(n,u):u&&l&&Hn(u,l,n,!1),u=null},i.onTap=v=>{if(Re(Yt)===ke.ADD_EDIT)return;const E=v.cell,b=Re(lt),I=DD(b,n,E);if(I){const[w,A]=I;Ir(w,A,n)}},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:v=>{i.pointerMove(v,t)},pointerUp:v=>{i.pointerUp(v,t)},keyDown:()=>{},keyUp:()=>{}}}const q2=Bn(lt,t=>{const e=[];for(const[n,r]of t.entries())Hy(n)&&e.push(r);return e});function Yo(t){return Bn(lt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push(o);return r})}const u_=Yo(Fd),Np=Bn(u_,t=>{const e=t.find(r=>r.tool_id===_.FOG_LIGHTS);return e?e.constraints:{}}),Z2=Bn(lt,t=>{for(const e of t.values())if(e.tool_id===_.CUSTOM_FOG_CLEARING)return e}),Q2=Bn(u_,t=>{const e=t.find(r=>r.tool_id===_.MINIMUM);return e?e.constraints:{}}),J2=Bn(u_,t=>{const e=t.find(r=>r.tool_id===_.MAXIMUM);return e?e.constraints:{}}),eT=Yo(yo),tT=Yo(Ds),nT=Yo(Rs),rT=Yo(Gv),iT=Yo($y),el=Nt(void 0),tl=Nt(void 0),nl=Nt(void 0),rl=Nt(void 0),il=Nt(void 0),bs=Nt(void 0),ol=Nt(void 0);Bn([lt,tn],([t,e])=>{const n=e;return t.get(n)});function oT(t,e,n,r){const i=new Bo,o={nRows:e.nRows,nCols:e.nCols};function s(d){const g=Re(lt),h=d.cell;if(!$t(d.cell,o))return;let m=Re(Yt);const E=_o(g,n,h);if(m===ke.DYNAMIC&&(m=E?ke.DELETE:ke.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&_o(g,r.oppositeConstraintId,h)))if(E&&m===ke.DELETE){const[b,I]=E;Ir(b,I,n)}else if(!E&&m===ke.ADD_EDIT){const b=ad(n,h,r==null?void 0:r.defaultValue),I=xt.uniqueId();Hn(I,b,n,!0)}else E&&m===ke.ADD_EDIT&&hi(E[0],n)}i.onDragStart=d=>{s(d)},i.onDrag=d=>{s(d)},i.onMove=d=>{if(!$t(d.cell,o)){el.set(void 0);return}const h=ad(n,d.cell,r==null?void 0:r.defaultValue),v=Re(Ho);v&&(h.shape={...v});const m=Re(Yt),E=Re(lt),b=_o(E,n,d.cell);if(!b&&m===ke.DELETE){el.set(void 0);return}let I="add",w;b&&(m===ke.DELETE||m===ke.DYNAMIC)&&(I="remove",w=b[0]);const A={tool:h,match_id:w,mode:I};el.set(A)};function l(d){const g=Re(Ht);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!Ro(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=$o(h,m),Xt(n,v,h))}return{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class $l{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"feature");ve(this,"_prevCoord",null);ve(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=bn(e,n);if(!r)return;const i=ys(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=ys(r,this.feature);if(!i||this._prevCoord&&Je(i.closest,this._prevCoord)&&this._prevCellCoord&&Je(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function sT(t,e,n,r){const i=(r==null?void 0:r.targets)??Lt.CLOSEST,o=new $l(i),s={nRows:e.nRows,nCols:e.nCols};function l(g){const h=Re(lt),v=g.cell,m=g.closest;let E=Re(Yt);if(!$t(v,s))return;const I=Lh(h,n,m);if(E===ke.DYNAMIC&&(E=I?ke.DELETE:ke.ADD_EDIT),I&&E===ke.DELETE){const w=I[0];Ir(w,I[1],n)}else if(!I&&E===ke.ADD_EDIT){const w=ud(n,m,""),A=xt.uniqueId();Hn(A,w,n,!0)}else I&&E===ke.ADD_EDIT&&hi(I[0],n)}function u(g){const h=Re(Ht);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!Ro(g.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=$o(v,E),Xt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(!$t(g.cell,s)){ol.set(void 0);return}const v=Re(Yt),m=ud(n,g.closest,""),E=Re(Ho);E&&(m.shape={...E});const b=Re(lt),I=Lh(b,n,g.closest);if(!I&&v===ke.DELETE){ol.set(void 0);return}let w="add",A;I&&(v===ke.DYNAMIC||v===ke.DELETE)&&(w="remove",A=I[0]);const T={tool:m,match_id:A,mode:w};ol.set(T)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function aT(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Lt.CORNER_OR_EDGE,o=new $l(i),s={nRows:e.nRows,nCols:e.nCols};function l(g){const h=Re(lt),v=g.cell,m=g.direction,E=vo(m);if($t(v,s))return;const I=Eh(v,E);if(!$t(I,s))return;let A=Re(Yt);const T=Nh(h,n,v,E);if(A===ke.DYNAMIC&&(A=T?ke.DELETE:ke.ADD_EDIT),T&&A===ke.DELETE){const[k,G]=T;Ir(k,G,n)}else if(!T&&A===ke.ADD_EDIT){const k=sd(n,v,E,""),G=xt.uniqueId();Hn(G,k,n,!0)}else T&&A===ke.ADD_EDIT&&hi(T[0],n)}function u(g){const h=Re(Ht);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!Ro(g.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=$o(v,E),Xt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if($t(g.cell,s)){bs.set(void 0);return}const v=vo(g.direction),m=Eh(g.cell,v);if(!$t(m,s)){bs.set(void 0);return}const b=Re(Yt),I=Re(lt);if(!Nh(I,n,g.cell,v)&&b===ke.DELETE){bs.set(void 0);return}const A=sd(n,g.cell,v,"");bs.set(A)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function lT(t,e,n,r){const i=new Bo,o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null;function u(h){const v=Re(lt),m=h.cell;if(!$t(h.cell,o))return;let b=Re(Yt);const I=RD(v,n,m);if(I&&(h.event.shiftKey||b===ke.ADD_EDIT)&&(l=I[0],s=I[1],Wo({id:l,constraint:s}),b=ke.ADD_EDIT),b===ke.DYNAMIC&&(b=I?ke.DELETE:ke.ADD_EDIT),I&&b===ke.DELETE){Ir(I[0],I[1],n);return}if(!s&&b===ke.ADD_EDIT){s=dp(n,[m]),l=xt.uniqueId(),js(l,s);return}else if(s&&l&&b===ke.ADD_EDIT){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=vD(s,m,w),Xt(n,l,s);return}}function d(h){const v=Re(Ht);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!Ro(h.key)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,h.key);b!==void 0&&b!==m.value&&(m=pD(m,b),Xt(n,E,m))}return i.onDragStart=h=>{l=null,s=null,u(h)},i.onDrag=h=>{u(h)},i.onDragEnd=()=>{l&&s&&Hn(l,s,n,!1),l=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{d(h)},keyUp:()=>{}}}var Er=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Er||{});const cT=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Lp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),uT=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),dT=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),_T=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),fT=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Tu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),gT=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),ku=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Fl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function hT(t,e,n){if(e===_.DIGIT){const r=t.map(s=>s.value),i=cT(t,n),o=Lp(t,r);return[i,o]}if(e===_.GIVEN){const r=t.map(l=>l.value),i=t.map(l=>l.given),o=uT(t,n),s=dT(t,r,i);return[o,s]}if(e===_.REGIONS){const r=t.map(s=>s.region),i=_T(t,n),o=fT(t,r);return[i,o]}if(e===_.HIGHLIGHTS&&n!==null){const r=ku(t,n),i=ku(t,n);return[r,i]}if(e===_.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=ku(t,n),o=Fl(t,r);return[i,o]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n!==null){const r=Tu(t,n,e),i=Tu(t,n,e);return[r,i]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n===null){let r=[];e===_.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=Tu(t,n,e),o=gT(t,r,e);return[i,o]}}function gs(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Pn.update(i=>i)}function Eo(t){switch(t.type){case Er.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;gs(e,_.DIGIT,n,!0);break}case Er.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;gs(e,_.GIVEN,n,!0);break}case Er.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;gs(e,_.REGIONS,n,!0);break}case Er.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;gs(e,_.HIGHLIGHTS,n,!0);break}case Er.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;gs(e,r,n,!0);break}case Er.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Pn.update(r=>r);break}case Er.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Pn.update(i=>i);break}case Er.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Pn.update(r=>r);break}case Er.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Pn.update(r=>r);break}case Er.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===_.CENTER_PM?e[i].centerMarks=r[i]:n===_.CORNER_PM&&(e[i].cornerMarks=r[i]);Pn.update(i=>i);break}}}function vT(t,e){return{execute:()=>{Eo(t)},unExecute:()=>{Eo(e)}}}const so=new Bo;function Wh(t,e){return t.shiftKey?Cs.SELECTING:t.ctrlKey||t.metaKey||e?Cs.DYNAMIC:t.altKey?Cs.DESELECTING:Cs.RESETTING}function vd(t,e,n,r,i=!1){switch(e){case _.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case _.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case _.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case _.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case _.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r))}return t}function pT(t,e){const n=[e,_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],r=i=>i===_.CORNER_PM||i===_.CENTER_PM||i===_.DIGIT;for(const i of n){const o=vd(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function Mu(t,e,n,r){const i=hT(e,n,r);if(i){const o=i[0],s=i[1],l=vT(o,s),u=_d(t),g=[r2(u,u),l];n2(g)}}function mT(t,e,n){const r=[_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};so.onTap=m=>{if(m.tapCount!==2)return;const b=$t(m.cell,i)?m.cell:null;if(!b)return;const I=j2(b,e,n),w=_d(I);lo(w)},so.onDragStart=m=>{const E=$t(m.cell,i),b=Re(fd),I=Wh(m.event,b),w=E?m.cell:null,A=WD(w,I);lo(A)},so.onDrag=m=>{const b=$t(m.cell,i)?m.cell:null,I=YD(b);lo(I)};function o(m){if(!fO(m))return!1;const E=e.getAllCells().map(I=>({r:I.r,c:I.c})),b=_d(E);return lo(b),!0}function s(m){if(!mO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=CO(m);return Kr(E),!0}return m.type==="keyup"?(o2(),!0):!1}function l(m){if(!pO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),b=r[(E+1)%r.length];return Kr(b),gd(b),!0}else{const E=EO(m.code);return Kr(E),gd(E),!0}}function u(m){if(!IO(m))return!1;const E=Re(Ui).lastCell;let b=null;if(E!==null){const[A,T]=wO(m),[k,G]=[Rh(E.r+T,0,i.nRows-1),Rh(E.c+A,0,i.nCols-1)];b={r:k,c:G}}else b={r:0,c:0};const I=Wh(m,!1),w=jD(b,I);return lo(w),!0}function d(m){const E=vO(m);if(E===void 0)return!1;const b=Re(Ui).cells,I=[];if(b.forEach(w=>{const A=e.getCell(w.r,w.c);A&&I.push(A)}),E===null){const{tool:w,cells:A}=pT(I,n);if(A.length)return Mu(b,A,w,E),!0}else{let w=vd(I,n,"different",E,!0);if(w.length)return Mu(b,w,n,E),!0;if(w=vd(I,n,"equal",E,!0),w.length)return Mu(b,w,n,E),!0}return!1}function g(m){return m.repeat?!1:d(m.key)}const h=xt.throttle(m=>{so.pointerMove(m,t)},10);return{pointerDown(m){m.button===0&&so.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){so.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||g(m)||s(m)||l(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){d(m.currentTarget.value)}}}function ET(t,e,n,r){const i=[Fe.N,Fe.NE,Fe.E,Fe.SE,Fe.S,Fe.SW,Fe.W,Fe.NW],o=new $l(r.cornerOrEdge),s={nRows:e.nRows,nCols:e.nCols};let l=null,u=null;function d(v){const m=Re(lt),E=v.cell;if(!$t(v.cell,s))return;let I=Re(Yt);v.event.altKey&&(I=ke.DELETE);const w=_o(m,n,E),A=vo(v.direction);!w&&I!==ke.DELETE?(l=ld(n,E,A),u=xt.uniqueId(),Hn(u,l,n,!0)):w&&(w[1].direction===A&&I===ke.ADD_EDIT?([u,l]=w,hi(w[0],n)):w[1].direction===A&&I===ke.DYNAMIC||I===ke.DELETE?Ir(w[0],w[1],n):(u=w[0],l={...w[1],direction:A},Xt(n,w[0],l)))}function g(v){if(!gO(v))return;const m=Re(Ht);if(!m)return;const E=m.id,b=m.constraint;if(!Fi(b.toolId))return;const w=(i.indexOf(b.direction)+1)%i.length;l={...b,direction:i[w]},Xt(n,E,l)}return o.onDragStart=v=>{d(v)},o.onMove=v=>{if(!$t(v.cell,s)){tl.set(void 0);return}const E=vo(v.direction),b=ld(n,v.cell,E),I=Re(Yt),w=Re(lt),A=_o(w,n,v.cell);if(!A&&I===ke.DELETE){tl.set(void 0);return}let T="add",k;A&&(I===ke.DELETE||A[1].direction===E&&I===ke.DYNAMIC)&&(T="remove",k=A[0]);const G={tool:b,match_id:k,mode:T};tl.set(G)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}function CT(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function bT(t,e,n,r){const i=new $l(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null;function u(g){const h=Re(lt),v=g.cell;if(!$t(g.cell,o))return;let E=Re(Yt);E===ke.DYNAMIC&&g.event.altKey&&(E=ke.DELETE);const b=vo(g.direction),I=_o(h,n,v);if(!I&&E!==ke.DELETE)s=cd(n,v,b),l=xt.uniqueId(),Hn(l,s,n,!0);else if(I)if(I[1].directions.includes(b)&&E!==ke.DELETE&&([l,s]=I,hi(I[0],n)),I&&E===ke.DELETE)Ir(I[0],I[1],n);else{const w=CT(I[1].directions,b);w.length>0?(l=I[0],s={...I[1],directions:w},Xt(n,I[0],s)):Ir(I[0],I[1],n)}}return i.onDragStart=g=>{u(g)},i.onMove=g=>{if(!$t(g.cell,o)){nl.set(void 0);return}const v=vo(g.direction),m=cd(n,g.cell,v);if(Re(Yt)===ke.DELETE){nl.set(void 0);return}nl.set(m)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class IT{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const i=Ja(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Ja(r,this._margin);if(!i||this._prevCoord&&Je(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=bn(e,n);if(!r)return;const i=Ja(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function wT(t,e,n,r){const i=new IT,o={nRows:e.nRows,nCols:e.nCols};function s(d){const g=Re(lt),h=d.coord;let v=Re(Yt);const m=ul(h);if(!m.every(I=>$t(I,o)))return;let b=null;if(b=Ah(g,n,m),v===ke.DYNAMIC&&(v=b?ke.DELETE:ke.ADD_EDIT),b&&v===ke.DELETE){const I=b[0];Ir(I,b[1],n)}else if(!b&&v===ke.ADD_EDIT){const I=(r==null?void 0:r.defaultValue)??"",w=od(n,m,I),A=xt.uniqueId();Hn(A,w,n,!0)}else b&&v===ke.ADD_EDIT&&hi(b[0],n)}function l(d){const g=Re(Ht);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!Ro(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=$o(h,m),Xt(n,v,h))}return i.onDragStart=d=>{s(d)},i.onMove=d=>{if(!$t(d.coord,o)){rl.set(void 0);return}const h=Re(Yt),v=ul(d.coord),m=(r==null?void 0:r.defaultValue)??"",E=od(n,v,m),b=Re(Ho);b&&(E.shape={...b});const I=Re(lt),w=Ah(I,n,v);if(!w&&h===ke.DELETE){rl.set(void 0);return}let A="add",T;w&&(h===ke.DYNAMIC||h===ke.DELETE)&&(A="remove",T=w[0]);const k={tool:E,match_id:T,mode:A};rl.set(k)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class yT{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,s=Qa(r,o);if(!s)return;this._prevCoord=s.corner;const l={event:e,coord:s.corner};this.onDragStart&&this.onDragStart(l)}pointerMove(e,n){const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i||this._prevCoord&&Je(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=bn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function OT(t,e,n,r){const i=new yT,o={nRows:e.nRows,nCols:e.nCols};function s(d){const g=Re(lt),h=d.coord;let v=Re(Yt);const m=cl(h);if(!m.every(I=>$t(I,o)))return;let b=null;if(b=xh(g,n,h),v===ke.DYNAMIC&&(v=b?ke.DELETE:ke.ADD_EDIT),b&&v===ke.DELETE){const I=b[0];Ir(I,b[1],n)}else if(!b&&v===ke.ADD_EDIT){const I=id(n,m,r==null?void 0:r.defaultValue),w=xt.uniqueId();Hn(w,I,n,!0)}else b&&v===ke.ADD_EDIT&&hi(b[0],n)}function l(d){const g=Re(Ht);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!Ro(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=$o(h,m),Xt(n,v,h))}return i.onDragStart=d=>{s(d)},i.onMove=d=>{if(!$t(d.coord,o)){il.set(void 0);return}const h=Re(Yt),v=cl(d.coord),m=id(n,v,r==null?void 0:r.defaultValue),E=Re(Ho);E&&(m.shape={...E});const b=Re(lt),I=xh(b,n,d.coord);if(!I&&h===ke.DELETE){il.set(void 0);return}let w="add",A;I&&(h===ke.DYNAMIC||h===ke.DELETE)&&(w="remove",A=I[0]);const T={tool:m,match_id:A,mode:w};il.set(T)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class AT{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=bn(e,n);if(!r)return;const i=ys(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=bn(e,n);if(!r)return;const i=ys(r,Lt.CLOSEST);if(!i||this._prevCoords&&Je(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Ep(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=bn(e,n);if(!r)return;const i=ys(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Je(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function xT(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new AT;return r.onTap=o=>{const s=o.coords,l=Re(hl),u=Re(gl);if(o.type==="cell center"){if(!oR(s,n))return;const g=u.getCellMarker(s);if(g)if(g.marker==="X"){const h={...s,colorId:l,marker:"O"},v=Ka(h),m=Ka(g),E=Ni(v,m);or(E)}else{const h=Mh(s),v=Ka(g),m=Ni(h,v);or(m)}else{const h={...s,colorId:l,marker:"X"},v=Ka(h),m=Mh(s),E=Ni(v,m);or(E)}}else if(o.type==="edge"){const d=u.getEdgeMarker(s);if(d){const g=kh(s),h=Th(d),v=Ni(g,h);or(v)}else{const g={...s,colorId:l},h=Th(g),v=kh(s),m=Ni(h,v);or(m)}}},r.onDrag=o=>{const s=o.coords,l=Re(hl);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:s,colorId:l},d=JD(u);br(d)}},r.onDragEnd=()=>{const o=Re(gl);if(o.mode==="add"){const s=o.draftLine.filter(l=>!o.lineMarkers.some(u=>uo(l,u)));if(s.length){const l=po(s),u=Uh(s),d=Ni(l,u);or(d)}}else{const s=o.lineMarkers.filter(l=>o.draftLine.some(u=>uo(l,u)));if(s.length){const l=Uh(s),u=po(s),d=Ni(l,u);or(d)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function ST(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function NT(t,e){const n=qv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function LT(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function RT(t){for(let e=0;;e++){const n=LT(e);if(!t.has(n))return n}}function DT(t,e,n){const r=new Bo,i={nRows:e.nRows,nCols:e.nCols};let o=null,s=null,l=null,u=null,d="cells2",g=Re(Yt);function h(m){const E=Re(lt),b=m.cell;if(!$t(m.cell,i))return;const w=kD(E,n,b);if(w?(l=w[0],o=w[1],g===Sn.DYNAMIC&&(g=Sn.MOVE),g===Sn.MOVE&&(g=Sn.MOVE,u=b,d=o.cells2.some(T=>Je(T,b))?"cells2":"cells")):g===Sn.DYNAMIC&&(g=Sn.SELECT),g===Sn.SELECT&&l===null){l=xt.uniqueId();const A=MD(E,n),T=RT(A);o=ST(n,[b],T),js(l,o);return}else if(g===Sn.SELECT&&l&&o){o=NT(o,b),Xt(n,l,o);return}else if(g===Sn.MOVE&&l&&o&&u){const A={r:b.r-u.r,c:b.c-u.c},k=(d==="cells2"?o.cells2:o.cells).map(Y=>({r:Y.r+A.r,c:Y.c+A.c}));if(!k.every(Y=>$t(Y,i)))return;d==="cells"?o={...o,cells:k}:o={...o,cells2:k},u=b,Xt(n,l,o)}}return r.onDragStart=m=>{g=Re(Yt),l=null,o=null,u=null,h(m)},r.onDrag=m=>{h(m)},r.onDragEnd=()=>{l&&o&&(g===Sn.SELECT?Hn(l,o,n):g===Sn.MOVE&&hd(l,s,o,n),s=o)},r.onTap=()=>{l&&g!==Sn.SELECT&&(c_(n,l),l=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function TT(t){if(t.type===he.SELECTION)return function(n,r,i){return mT(n,r,i)};if(t.type===he.SINGLE_CELL){let e=function(r,i,o){return oT(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_ARROW){let e=function(r,i,o){return ET(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return bT(r,i,o,n)};const n=t;return e}else if(t.type===he.EDGE){let e=function(r,i,o){return wT(r,i,o,n)};const n=t;return e}else if(t.type===he.CORNER){let e=function(r,i,o){return OT(r,i,o,n)};const n=t;return e}else if(t.type===he.LINE){let e=function(r,i,o){return X2(r,i,o,n)};const n=t;return e}else if(t.type===he.ARROW){let e=function(r,i,o){return V2(r,i,o,n)};const n=t;return e}else if(t.type===he.CAGE){let e=function(r,i,o){return lT(r,i,o,n)};const n=t;return e}else{if(t.type===he.CLONE)return function(n,r,i){return DT(n,r,i)};if(t.type===he.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return sT(r,i,o,n)};const n=t;return e}else if(t.type===he.OUTSIDE_DIRECTION){let e=function(r,i,o){return aT(r,i,o,n)};const n=t;return e}else if(t.type===he.PEN)return function(n,r){return xT(n,r)}}}const Rp=Bn([mo,hn,tn],([t,e,n])=>{const r=Rl(n,zt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?TT(i):void 0;return o?o(t,e,n):void 0}),Yt=Nt(void 0);var kT=le('<button class="form-button svelte-lzdz6g"> </button>'),MT=le('<button class="form-button radio-button svelte-lzdz6g" role="switch"> </button>'),UT=le('<div class="tool-buttons svelte-lzdz6g"></div>');function GT(t,e){ie(e,!1);const n=Be(),r=()=>fe(Yt,"$toolModeStore",n),i=x(),o=x();let s=U(e,"tool_id",8);function l(v){ho(Yt,v)}function u(){if(Pd(s())){const v=xt.uniqueId(),m=_p(s(),"");Hn(v,m,s(),!0)}else if(s()===_.VARIABLE_CONSTRAINT){const v=xt.uniqueId(),m=fp("","");Hn(v,m,s(),!0)}}ho(Yt,oO(s())),L(()=>X(s()),()=>{O(i,iO(s()))}),L(()=>r(),()=>{O(o,r())}),be(),ge();var d=Ee(),g=ee(d);{var h=v=>{var m=UT();Qe(m,5,()=>Object.values(f(i)),pt,(E,b)=>{var I=Ee(),w=ee(I);{var A=k=>{var G=kT(),Y=j(G,!0);W(G),J(()=>it(Y,f(b))),Le("click",G,u),N(k,G)},T=k=>{var G=MT(),Y=j(G,!0);W(G),J(()=>{S(G,"aria-checked",f(b)===f(o)),Et(G,"selected",f(b)===f(o)),it(Y,f(b))}),Le("click",G,()=>l(f(b))),N(k,G)};Q(w,k=>{f(b)===Bd.CREATE?k(A):k(T,!1)})}N(E,I)}),W(m),N(v,m)};Q(g,v=>{f(i)&&v(h)})}N(t,d),oe()}var $T=le('<div class="value-editor svelte-1lvt8yv">Name: <input class="text-input" type="text"></div>'),FT=le('<div class="value-editor svelte-1lvt8yv">Value: <input class="text-input" type="text"></div>'),PT=le('<div class="editor-wrapper svelte-1lvt8yv"><div class="editor svelte-1lvt8yv"><div class="bool-constraints-container svelte-1lvt8yv"><!></div> <div class="value-editor-container svelte-1lvt8yv"><!> <!></div> <!> <!></div></div>');function zT(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x();let s=U(e,"tool_id",8);const l=zt[s()],u=l.negative_constraints,d=!!(u&&Object.keys(u).length>0),h=Uv(s())||d;function v(w){if(!f(i))return;const T=w.target.value,k=l.inputOptions;if(!k||k.type!==he.VALUE_TOOL&&k.type!==he.CAGE&&k.type!==he.LINE&&k.type!==he.EDGE&&k.type!==he.CORNER&&k.type!==he.OUTSIDE_DIRECTION)return;const G=k.valueUpdater;if(!G)return;const Y=G(T,"");if(Y===void 0)return;const M=$o(f(i).constraint,Y);Xt(s(),f(i).id,M)}function m(w){if(!f(i))return;const T=w.target.value;if(!l.inputOptions)return;const G=LD(f(i).constraint,T);Xt(s(),f(i).id,G)}L(()=>r(),()=>{O(i,r())}),L(()=>f(i),()=>{var w;O(o,(w=f(i))==null?void 0:w.constraint)}),be(),ge();var E=Ee(),b=ee(E);{var I=w=>{var A=PT(),T=j(A),k=j(T),G=j(k);{var Y=Z=>{var Ie=Ee(),Ce=ee(Ie);Qe(Ce,1,()=>u,pt,(Oe,Ae)=>{P2(Oe,{get tool_id(){return s()},get neg_tool_id(){return f(Ae).toolId},get description(){return f(Ae).description}})}),N(Z,Ie)};Q(G,Z=>{u&&Z(Y)})}W(k);var M=F(k,2),P=j(M);{var te=Z=>{var Ie=$T(),Ce=F(j(Ie));cn(Ce),S(Ce,"spellcheck",!1),W(Ie),J(()=>Vu(Ce,f(o).name)),Le("change",Ce,Oe=>m(Oe)),N(Z,Ie)};Q(P,Z=>{f(o)&&Object.hasOwn(f(o),"name")&&Z(te)})}var ce=F(P,2);{var se=Z=>{var Ie=FT(),Ce=F(j(Ie));cn(Ce),S(Ce,"spellcheck",!1),W(Ie),J(()=>Vu(Ce,f(o).value)),Le("input",Ce,Oe=>v(Oe)),N(Z,Ie)};Q(ce,Z=>{var Ie;((Ie=f(o))==null?void 0:Ie.value)!==void 0&&Z(se)})}W(M);var ue=F(M,2);GT(ue,{get tool_id(){return s()}});var ye=F(ue,2);B2(ye,{get tool_id(){return s()}}),W(T),W(A),N(w,A)};Q(b,w=>{h&&w(I)})}N(t,E),oe()}var HT=le('<button class="form-button icon header-button svelte-1u2f2vf"><!></button>'),WT=le('<div class="element-button-wrapper svelte-1u2f2vf"><div class="constraints-ui svelte-1u2f2vf"><div class="header svelte-1u2f2vf"><div class="element-icon-container svelte-1u2f2vf"></div> <div class="element-name svelte-1u2f2vf"></div> <!></div> <!></div></div>');function Uu(t,e){ie(e,!1);const n=Be(),r=()=>fe(lt,"$elementsDictStore",n),i=()=>fe(tn,"$toolStore",n),o=x();let s=U(e,"tool_id",8),l=U(e,"elementHandlers",8);const u=!!l()[s()].permanent;let d=x(!1),g=s();function h(){f(d)?Kr(_.DIGIT):Kr(s())}function v(){s2(s());const Y=r().get(s());if(!Y)return;const M=M2(s()),P=U2(s(),Y),te=Ks(M,P);or(te)}function m(){var te,ce;const Y=(te=f(o).meta)==null?void 0:te.description,M=((ce=f(o).meta)==null?void 0:ce.usage)??rO(s());let P;return Y&&Y.length&&(P=Y),M.length&&(P?P=P+`

`+M:P=M),P}L(()=>(X(s()),X(l())),()=>{O(o,Rl(s(),l()))}),L(()=>(X(s()),i()),()=>{O(d,s()===i())}),be(),ge();var E=WT(),b=j(E);Et(b,"clickable",!0);var I=j(b);J(()=>S(I,"title",m()));var w=F(j(I),2);w.textContent=g;var A=F(w,2);{var T=Y=>{var M=HT(),P=j(M);xp(P),W(M),Le("click",M,Fn(v)),N(Y,M)};Q(A,Y=>{u||Y(T)})}W(I);var k=F(I,2);{var G=Y=>{zT(Y,{get tool_id(){return s()}})};Q(k,Y=>{f(d)&&Y(G)})}W(b),W(E),J(()=>Et(b,"selected",f(d))),Le("click",I,h),N(t,E),oe()}var BT=le("<!> <!> <!>",1);function YT(t,e){ie(e,!1);const n=Be(),r=()=>fe(lt,"$elementsDictStore",n),i=x();let o=U(e,"elementHandlers",8);const s=By,l=u=>{G2(u),Kr(u)};L(()=>(r(),H),()=>{O(i,(u,d)=>{var v;const g=r().has(u);return!!((v=d.meta)!=null&&v.categories.includes(H.LOCAL_ELEMENT))&&!g})}),be(),ge(),D2(t,{title:"Elements",onAddTool:l,categories:s,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,d)=>{k2(u)},"panel-content":(u,d)=>{var g=BT(),h=ee(g);Uu(h,{get tool_id(){return _.GIVEN},get elementHandlers(){return o()}});var v=F(h,2);Uu(v,{get tool_id(){return _.REGIONS},get elementHandlers(){return o()}});var m=F(v,2);Qe(m,1,()=>r().entries(),([E,b])=>E,(E,b)=>{let I=()=>f(b)[0];var w=Ee(),A=ee(w);{var T=k=>{Uu(k,{get tool_id(){return I()},get elementHandlers(){return o()}})};Q(A,k=>{zy(I())&&k(T)})}N(E,w)}),N(u,g)}}}),oe()}var jT=le('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Os(t,e){let n=U(e,"name",8);var r=jT(),i=j(r),o=j(i,!0);W(i);var s=F(i,2);Ot(s,e,"default",{}),W(r),J(()=>it(o,n())),N(t,r)}var KT=le('<input class="control-slider svelte-1rsuho6" type="range">');function VT(t,e){ie(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),o=U(e,"step",24,()=>(r()-n())/10),s=U(e,"onChangeCb",8,void 0),l=U(e,"onInputCb",8,void 0);ge();var u=KT();cn(u),J(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",o())}),ar(u,i),Le("change",u,()=>{s()&&s()(i())}),Le("input",u,()=>{l()&&l()(i())}),N(t,u),oe()}function ui(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),o=U(e,"max",8),s=U(e,"step",24,()=>(o()-i())/10),l=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);Os(t,{get name(){return`${n()??""}: ${r()??""}`},children:(d,g)=>{VT(d,{get min(){return i()},get max(){return o()},get step(){return s()},get onChangeCb(){return l()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var XT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function qT(t){var e=XT();N(t,e)}var ZT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function QT(t){var e=ZT();N(t,e)}var JT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function ek(t){var e=JT();N(t,e)}var tk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function nk(t){var e=tk();N(t,e)}var rk=le('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function ik(t,e){ie(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),o=U(e,"title",8),s=U(e,"updateShapeCb",8,void 0);ge();var l=rk(),u=j(l);cn(u);var d,g=F(u,2);Ot(g,e,"default",{}),W(l),J(()=>{S(l,"title",o()),Et(l,"active",r()===i()),d!==(d=r())&&(u.value=(u.__value=r())==null?"":r())}),Id(n,[],u,()=>(r(),i()),i),Le("change",u,()=>s()&&s()(r())),N(t,l),oe()}var ok=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function sk(t){var e=ok(),n=j(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),W(e),N(t,e)}var ak=le('<div class="icon-wrapper svelte-18euf14"><!></div>'),lk=le('<div class="radio-container svelte-18euf14"></div>');function ck(t,e){ie(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),o=U(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,ek],[B.ELLIPSE,sk],[B.SQUARE,QT],[B.RECTANGLE,qT],[B.POLYGON,nk]]);ge(),Os(t,{get name(){return n()},children:(l,u)=>{var d=lk();Qe(d,5,i,pt,(g,h)=>{ik(g,{get title(){return f(h)},get value(){return f(h)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=Ee(),b=ee(E);{var I=w=>{var A=ak(),T=j(A);bd(T,()=>s.get(f(h)),(k,G)=>{G(k,{})}),W(A),N(w,A)};Q(b,w=>{s.has(f(h))&&w(I)})}N(v,E)},$$slots:{default:!0}})}),W(d),N(l,d)},$$slots:{default:!0}}),oe()}var uk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function dk(t){var e=uk();N(t,e)}var _k=le('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function sl(t,e){ie(e,!1);const n=x();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),o=x(void 0);function s(m){const E=Lu(m);E&&i()&&i()(E)}L(()=>X(r()),()=>{O(n,r())}),L(()=>(f(n),Lu),()=>{dd(f(n))&&O(o,Lu(f(n)))}),be(),ge();var l=_k(),u=j(l);const d=ft(()=>gp(f(n)));var g=j(u);cn(g),W(u);var h=F(u,2),v=F(j(h),2);cn(v),S(v,"spellcheck",!1),S(v,"maxlength",30),W(h),W(l),J(()=>{S(u,"style",`--choosen-color: ${f(o)??""}`),Et(u,"transparent",f(d))}),ar(g,()=>f(n),m=>O(n,m)),Le("change",g,()=>s(f(n))),ar(v,()=>f(n),m=>O(n,m)),Le("input",v,()=>s(f(n))),N(t,l),oe()}var fk=le('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),gk=le("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function hk(t,e){ie(e,!1);const n=Be(),r=()=>fe(tn,"$toolStore",n),i=()=>fe(Ht,"$currentConstraintStore",n),o=x(),s=x(),l=x();let u=x(!0),d=U(e,"elementHandlers",8);function g(I,w){const A=(I==null?void 0:I.shape)??(w?Xu(w):void 0);return Du(A),A}function h(I,w){f(l)&&(Ku(l,f(l)[I]=w),Du(f(l)))}function v(){f(s)&&(O(l,Xu(f(s))),Du(f(l)))}function m(I){return I&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(I)}function E(I){return I&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(I)}function b(I){return I&&[B.ELLIPSE,B.RECTANGLE].includes(I)}L(()=>(r(),X(d())),()=>{O(o,Rl(r(),d()))}),L(()=>f(o),()=>{O(s,f(o).shape)}),L(()=>(i(),f(s)),()=>{var I;O(l,g(((I=i())==null?void 0:I.constraint)??null,f(s)))}),be(),ge(),Gl(t,{get isOpen(){return f(u)},set isOpen(I){O(u,I)},$$slots:{"panel-header":(I,w)=>{Ul(I,{slot:"panel-header",title:"Shape Editor",get isOpen(){return f(u)},set isOpen(A){O(u,A)},$$slots:{"title-icon":(A,T)=>{dk(A)}},$$legacy:!0})},"panel-content":(I,w)=>{var A=Ee(),T=ee(A);{var k=G=>{var Y=gk(),M=ee(Y);{var P=He=>{var we=fk();Le("click",we,v),N(He,we)};Q(M,He=>{Ky(f(s))&&He(P)})}var te=F(M,2);{var ce=He=>{ck(He,{get possibleShapes(){return f(s).allowedTypes},name:"Shape",get selectedShape(){return f(l).type},updateShapeCb:we=>h("type",we)})};Q(te,He=>{var we;f(s).allowedTypes&&f(s).allowedTypes.length&&((we=f(l))!=null&&we.type)&&He(ce)})}var se=F(te,2);{var ue=He=>{var we=ft(()=>f(s).n.lb??3),Te=ft(()=>f(s).n.ub??10);ui(He,{name:"Number of Sides",get value(){return f(l).n},get min(){return f(we)},get max(){return f(Te)},step:1,onChangeCb:We=>h("n",We)})};Q(se,He=>{var we,Te,We;((we=f(l))==null?void 0:we.n)!==void 0&&((We=(Te=f(s))==null?void 0:Te.n)!=null&&We.editable)&&E(f(l).type)&&He(ue)})}var ye=F(se,2);{var Z=He=>{var we=ft(()=>f(s).r.lb??0),Te=ft(()=>f(s).r.ub??1),We=ft(()=>f(s).r.step??.05);ui(He,{name:"Radius",get value(){return f(l).r},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("r",kt)})};Q(ye,He=>{var we,Te,We;((we=f(l))==null?void 0:we.r)!==void 0&&((We=(Te=f(s))==null?void 0:Te.r)!=null&&We.editable)&&m(f(l).type)&&He(Z)})}var Ie=F(ye,2);{var Ce=He=>{var we=ft(()=>f(s).width.lb??0),Te=ft(()=>f(s).width.ub??1),We=ft(()=>f(s).width.step??.05);ui(He,{name:"Width",get value(){return f(l).width},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("width",kt)})};Q(Ie,He=>{var we,Te,We;((we=f(l))==null?void 0:we.width)!==void 0&&((We=(Te=f(s))==null?void 0:Te.width)!=null&&We.editable)&&b(f(l).type)&&He(Ce)})}var Oe=F(Ie,2);{var Ae=He=>{var we=ft(()=>f(s).height.lb??0),Te=ft(()=>f(s).height.ub??1),We=ft(()=>f(s).height.step??.05);ui(He,{name:"Height",get value(){return f(l).height},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("height",kt)})};Q(Oe,He=>{var we,Te,We;((we=f(l))==null?void 0:we.height)!==void 0&&((We=(Te=f(s))==null?void 0:Te.height)!=null&&We.editable)&&b(f(l).type)&&He(Ae)})}var Se=F(Oe,2);{var De=He=>{var we=ft(()=>f(s).angle.lb??0),Te=ft(()=>f(s).angle.ub??360),We=ft(()=>f(s).angle.step??15);ui(He,{name:"Angle",get value(){return f(l).angle},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("angle",kt)})};Q(Se,He=>{var we,Te,We;((we=f(l))==null?void 0:we.angle)!==void 0&&((We=(Te=f(s))==null?void 0:Te.angle)!=null&&We.editable)&&He(De)})}var $e=F(Se,2);{var st=He=>{var we=ft(()=>f(s).inset.lb??0),Te=ft(()=>f(s).inset.ub??.5),We=ft(()=>f(s).inset.step??.01);ui(He,{name:"Inset",get value(){return f(l).inset},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("inset",kt)})};Q($e,He=>{var we,Te,We;((we=f(l))==null?void 0:we.inset)!==void 0&&((We=(Te=f(s))==null?void 0:Te.inset)!=null&&We.editable)&&He(st)})}var ut=F($e,2);{var bt=He=>{Os(He,{name:"Stroke",children:(we,Te)=>{sl(we,{get value(){return f(l).stroke},onChangeCb:We=>h("stroke",We)})},$$slots:{default:!0}})};Q(ut,He=>{var we,Te,We;((we=f(l))==null?void 0:we.stroke)!==void 0&&((We=(Te=f(s))==null?void 0:Te.stroke)!=null&&We.editable)&&He(bt)})}var dt=F(ut,2);{var It=He=>{var we=ft(()=>f(s).strokeWidth.lb??0),Te=ft(()=>f(s).strokeWidth.ub??.8),We=ft(()=>f(s).strokeWidth.step??.01);ui(He,{name:"Stroke Width",get value(){return f(l).strokeWidth},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("strokeWidth",kt)})};Q(dt,He=>{var we,Te,We;((we=f(l))==null?void 0:we.strokeWidth)!==void 0&&((We=(Te=f(s))==null?void 0:Te.strokeWidth)!=null&&We.editable)&&He(It)})}var wt=F(dt,2);{var In=He=>{var we=ft(()=>f(s).strokeDasharray.lb??0),Te=ft(()=>f(s).strokeDasharray.ub??1),We=ft(()=>f(s).strokeDasharray.step??.01);ui(He,{name:"Stroke Dasharray",get value(){return f(l).strokeDasharray},get min(){return f(we)},get max(){return f(Te)},get step(){return f(We)},onChangeCb:kt=>h("strokeDasharray",kt)})};Q(wt,He=>{var we,Te,We;((we=f(l))==null?void 0:we.strokeDasharray)!==void 0&&((We=(Te=f(s))==null?void 0:Te.strokeDasharray)!=null&&We.editable)&&He(In)})}var dn=F(wt,2);{var yr=He=>{Os(He,{name:"Fill",children:(we,Te)=>{sl(we,{get value(){return f(l).fill},onChangeCb:We=>h("fill",We)})},$$slots:{default:!0}})};Q(dn,He=>{var we,Te,We;((we=f(l))==null?void 0:we.fill)!==void 0&&((We=(Te=f(s))==null?void 0:Te.fill)!=null&&We.editable)&&He(yr)})}var Or=F(dn,2);{var Ur=He=>{Os(He,{name:"Font Color",children:(we,Te)=>{sl(we,{get value(){return f(l).fontColor},onChangeCb:We=>h("fontColor",We)})},$$slots:{default:!0}})};Q(Or,He=>{var we,Te,We;((we=f(l))==null?void 0:we.fontColor)!==void 0&&((We=(Te=f(s))==null?void 0:Te.fontColor)!=null&&We.editable)&&He(Ur)})}N(G,Y)};Q(T,G=>{f(s)&&G(k)})}N(I,A)}},$$legacy:!0}),oe()}var vk=le('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function Vs(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=vk(),o=j(i),s=j(o);Ot(s,e,"default",{}),W(o),W(i),J(()=>S(i,"title",r())),Le("click",i,Fn(function(...l){var u;(u=n())==null||u.apply(this,l)})),N(t,i)}var pk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function mk(t){var e=pk();N(t,e)}var Ek=le('<div class="buttons-container svelte-kc00rw"><!></div>');function d_(t,e){var n=Ek(),r=j(n);Ot(r,e,"default",{}),W(n),N(t,n)}var Ck=le('<button class="generate-button svelte-uogiuu">Auto-Generate</button>'),bk=le('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),Ik=le('<div class="edit-puzzle-meta-content svelte-uogiuu"><!> <input class="text-input input-title" type="text" placeholder="Title"> <!> <input class="text-input input-authors" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="text-input input-ruleset" placeholder="Ruleset"></textarea> <!> <input class="text-input input-ctc-link" type="text" placeholder="CTC Link"> <!> <input class="text-input input-ctc-youtube-link" type="text" placeholder="CTC Youtube Link"> <!></div>');function wk(t,e){ie(e,!1);const n=Be(),r=()=>fe(Mr,"$puzzleMetaStore",n),i=()=>fe(lt,"$elementsDictStore",n);let o=U(e,"showModal",12,!1),s=x(""),l=x(""),u=x(""),d=x(""),g=x("");function h(){o(!1)}function v(){const I=f(l)?m(f(l)):["Anonymous"],A={title:f(s)?f(s):"Sudoku",authors:I,ruleset:f(u),ctcYoutubeUrl:f(d),ctcUrl:f(g)};i2(A),o(!1)}function m(I){return I.split(/\s*[;]\s*/)}function E(){var k,G,Y;let I="";const w=zt,A=i();!A.get(_.SUDOKU_RULES_DO_NOT_APPLY)?I+=`Sudoku rules apply.

`:I+=`Sudoku rules do not apply.

`;for(const[M,P]of A.entries()){if(M===_.SUDOKU_RULES_DO_NOT_APPLY)continue;const te=w[M],ce=((k=te.menu)==null?void 0:k.name)??te.toolId,se=(G=te.meta)==null?void 0:G.description;if(I+=`**${ce}**: ${se}

`,!!P.negative_constraints)for(const[ue,ye]of Object.entries(P.negative_constraints)){if(!ye)continue;const Z=(Y=te.negative_constraints)==null?void 0:Y.find(Oe=>Oe.toolId===ue);if(!Z)continue;const Ie=ue,Ce=Z.description;I+=` - **${Ie}**: ${Ce}

`}}return I.trim()}function b(){const I=E();O(u,I)}L(()=>(X(o()),r(),_l),()=>{if(!o()){const I=r().authors;O(s,r().title??""),O(l,I?_l(I,"; ","; "):""),O(u,r().ruleset??""),O(d,r().ctcYoutubeUrl??""),O(g,r().ctcUrl??"")}}),be(),ge(),pi(t,{title:"Edit Puzzle Meta",get showModal(){return o()},set showModal(I){o(I)},children:(I,w)=>{var A=Ik(),T=j(A);Ri(T,{title:"Title"});var k=F(T,2);cn(k);var G=F(k,2);Ri(G,{title:"Authors"});var Y=F(G,2);cn(Y);var M=F(Y,2);Ri(M,{title:"Ruleset",children:(Z,Ie)=>{var Ce=Ck();Le("click",Ce,b),N(Z,Ce)},$$slots:{default:!0}});var P=F(M,2);_y(P),S(P,"rows",8);var te=F(P,2);Ri(te,{title:"CTC Link"});var ce=F(te,2);cn(ce);var se=F(ce,2);Ri(se,{title:"CTC Youtube Link"});var ue=F(se,2);cn(ue);var ye=F(ue,2);d_(ye,{children:(Z,Ie)=>{var Ce=bk(),Oe=ee(Ce),Ae=F(Oe,2);Le("click",Oe,v),Le("click",Ae,h),N(Z,Ce)},$$slots:{default:!0}}),W(A),ar(k,()=>f(s),Z=>O(s,Z)),ar(Y,()=>f(l),Z=>O(l,Z)),ar(P,()=>f(u),Z=>O(u,Z)),ar(ce,()=>f(g),Z=>O(g,Z)),ar(ue,()=>f(d),Z=>O(d,Z)),N(I,A)},$$slots:{default:!0},$$legacy:!0}),oe()}var yk=le("<!> <!>",1);function Ok(t){let e=x(!1);function n(){O(e,!0)}var r=yk(),i=ee(r);Vs(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,l)=>{mk(s)},$$slots:{default:!0}});var o=F(i,2);wk(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var Ak=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function xk(t){var e=Ak();N(t,e)}function Sk(t,e){for(const[n,r]of t.entries()){if(!Xr(n))continue;if(Object.values(r.constraints).some(o=>!$t(o.cell,e)))return!0}return!1}function Nk(t,e,n,r){const i=n.zoom_factor;if(r<1){const o=e.x+e.width/2,s=e.y+e.height/2,l=e.width/i,u=e.height/i,d=o-l/2,g=s-u/2;return{x:d,y:g,height:u,width:l}}else if(r>1){const o=e.width/i,s=e.height/i,l=t.x,u=t.width,d=t.y,g=t.height,h=e.x+e.width/2,v=e.y+e.height/2,m=(h+n.point.x)/2,E=(v+n.point.y)/2;let b=m-o/2,I=E-s/2;return b<l&&(b=l),I<d&&(I=d),b+o>u&&(b=u-o),I+s>g&&(I=g-s),{x:b,y:I,height:s,width:o}}return e}const Co=Nt(1),Xs=Bn([lt,tn,hn],([t,e,n])=>{const r={nRows:n.nRows,nCols:n.nCols},i=Sk(t,r),o=Xr(e),s=i||o?1:.2,l=-s,u=-s,d=r.nCols+2*s,g=r.nRows+2*s;return{x:l,y:u,width:d,height:g}}),qs=Nt(Re(Xs));function __(){Co.set(1),qs.set(Re(Xs))}function Lk(t){if(!t.ctrl)return;const e=Re(Co),n=.5,r=2,i=t.zoom_factor;let o=e*i;if(o=Math.max(n,Math.min(r,o)),Co.set(o),o===e)return;const s=Re(Xs);qs.update(l=>Nk(s,l,t,o))}function Rk(t){if(t.ctrl)return;const e=Re(Co),n=Re(Xs);if(e<1)return;const r=-(t.delta>0?1:t.delta<0?-1:0),i=n.y,o=i+n.height;qs.update(s=>{const l=.5*r*e;let u=s.y+l;return u<i&&(u=i),u+s.height>o&&(u=o-s.height),{x:s.x,y:u,height:s.height,width:s.width}})}function Dk(t){const e=Re(Co),n=Re(Xs);if(e<1)return;const r=t.point,i=n.x,o=i+n.width,s=n.y,l=s+n.height;qs.update(u=>{let d=u.x-.012/e*r.x,g=u.y-.012*1/e*r.y;return g<s&&(g=s),g+u.height>l&&(g=l-u.height),d<i&&(d=i),d+u.width>o&&(d=o-u.width),{x:d,y:g,height:u.height,width:u.width}})}var Tk=le('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function kk(t,e){ie(e,!1);let n=x(null),r=x(null);function i(){var o;(o=f(n))==null||o.click()}L(()=>(f(r),vl),()=>{if(f(r)&&f(r).length){const o=f(r)[0],s=new FileReader;s.readAsText(o),s.onload=function(l){if(l.target||alert(s.error),l.target&&l.target.result){const u=l.target.result;if(typeof u!="string")return;const d=JSON.parse(u),g=HD(d);console.log(g),c2(g),__(),vl()}},s.onerror=function(){alert(s.error)}}}),be(),ge(),Vs(t,{title:"Open Puzzle",clickCb:i,children:(o,s)=>{var l=Tk(),u=ee(l);xk(u);var d=F(u,2);Mi(d,g=>O(n,g),()=>f(n)),ky(d,()=>f(r),g=>O(r,g)),N(o,l)},$$slots:{default:!0}}),oe()}var Mk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function Uk(t){var e=Mk();N(t,e)}var Gk=le('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Bh(t,e){ie(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),o=U(e,"value",12),s=U(e,"step",24,()=>(i()-r())/10),l=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ge();var d=Gk(),g=j(d),h=j(g);W(g);var v=F(g,2);cn(v),W(d),J(()=>{it(h,`${n()??""}: ${o()??""}`),S(v,"min",r()),S(v,"max",i()),S(v,"step",s())}),ar(v,o),Le("change",v,()=>{l()&&l()(o())}),Le("input",v,()=>{u()&&u()(o())}),N(t,d),oe()}var $k=le('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),Fk=le('<div class="new-puzzle-content svelte-1boysdf"><!> <!> <!> <input class="text-input" type="text"> <!></div>');function Pk(t,e){ie(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let o=x(9),s=x(9),l=x(""),u=x(xt.range(1,10));function d(){n(!1)}function g(){vl(),l2(f(s),f(o),f(u).sort()),__(),n(!1)}function h(E){return E.map(I=>String(I)).join(",")}function v(){const E=Math.min(Math.max(f(s),f(o)),9);O(u,xt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}ge(),pi(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,b)=>{var I=Fk(),w=j(I);Bh(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return f(o)},set value(M){O(o,M)},$$legacy:!0});var A=F(w,2);Bh(A,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return f(s)},set value(M){O(s,M)},$$legacy:!0});var T=F(A,2),k=ft(()=>`Allowed Digits (for the solver): ${h(f(u))}`);Ri(T,{get title(){return f(k)}});var G=F(T,2);cn(G),J(()=>S(G,"placeholder",h(f(u))));var Y=F(G,2);d_(Y,{children:(M,P)=>{var te=$k(),ce=ee(te),se=F(ce,2);Le("click",ce,g),Le("click",se,d),N(M,te)},$$slots:{default:!0}}),W(I),ar(G,()=>f(l),M=>O(l,M)),Le("input",G,()=>m(f(l))),N(E,I)},$$slots:{default:!0},$$legacy:!0}),oe()}var zk=le("<!> <!>",1);function Hk(t){let e=x(!1);function n(){O(e,!0)}var r=zk(),i=ee(r);Vs(i,{title:"New Puzzle",clickCb:n,children:(s,l)=>{Uk(s)},$$slots:{default:!0}});var o=F(i,2);Pk(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var Wk=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function Bk(t){var e=Wk();N(t,e)}var Yk=le("<button> </button>"),jk=le('<div class="tab-panel svelte-1cn515q"><!></div>'),Kk=le('<div class="tabbed-menu svelte-1cn515q"><div class="tab-header svelte-1cn515q"></div> <div class="tab-content svelte-1cn515q"></div></div>');function Dp(t,e){let n=U(e,"tabs",24,()=>[]),r=U(e,"activeTab",12,0);function i(u){r(u)}var o=Kk(),s=j(o);Qe(s,5,n,pt,(u,d,g)=>{var h=Yk(),v=j(h,!0);W(h),J(()=>{hv(h,`tab-button ${(r()===g?"active":"")??""} svelte-1cn515q`),it(v,f(d).label)}),Le("click",h,()=>i(g)),N(u,h)}),W(s);var l=F(s,2);Qe(l,5,n,pt,(u,d,g)=>{var h=Ee(),v=ee(h);{var m=E=>{var b=jk(),I=j(b);bd(I,()=>f(d).component,(w,A)=>{A(w,Ny(()=>f(d).props||{}))}),W(b),N(E,b)};Q(v,E=>{r()===g&&f(d).component&&E(m)})}N(u,h)}),W(l),W(o),N(t,o)}var Vk=le('<div class="tab-container svelte-1051sg0"><div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div> <div class="form-row"><button class="form-button form-modal-button">Download PNG</button> <button class="form-button form-modal-button">Download SVG</button></div></div>');function Xk(t,e){ie(e,!1);const n=Be(),r=()=>fe(mo,"$svgRefStore",n),i=()=>fe(Mr,"$puzzleMetaStore",n),o=x(),s=x();function l(A){const T=getComputedStyle(A);let k="";for(let G of T){const Y=T.getPropertyValue(G);Y&&(k+=`${G}:${Y};`)}return k}function u(A){const T=A.cloneNode(!0);(T instanceof SVGElement||T instanceof HTMLElement)&&(T.style.cssText=l(A));const k=A.childNodes;for(let G=0;G<k.length;G++){const Y=k[G];if(Y instanceof Element){const M=u(Y);T.replaceChild(M,T.childNodes[G])}}return T}function d(A,T="sudoku_by_anonymous"){if(!A)return;const k=u(A),Y=new XMLSerializer().serializeToString(k),M=new Image,P=new Blob([Y],{type:"image/svg+xml;charset=utf-8"}),te=URL.createObjectURL(P);M.onload=()=>{const ce=A.getBoundingClientRect(),se=ce.width,ue=ce.height,ye=document.createElement("canvas"),Z=window.devicePixelRatio||1;ye.width=se*Z,ye.height=ue*Z;const Ie=ye.getContext("2d");Ie&&(Ie.scale(Z,Z),Ie.drawImage(M,0,0,se,ue),ye.toBlob(Ce=>{if(!Ce)return;const Oe=URL.createObjectURL(Ce),Ae=document.createElement("a");Ae.href=Oe,Ae.download=`${T}.png`,Ae.click(),URL.revokeObjectURL(Oe)}))},M.src=te}function g(A,T="sudoku_by_anonymous"){if(!A)return;const k=u(A);let Y=new XMLSerializer().serializeToString(k);Y.includes("<?xml")||(Y=`<?xml version="1.0" standalone="no"?>\r
`+Y);const M=new Blob([Y],{type:"image/svg+xml"}),P=URL.createObjectURL(M),te=document.createElement("a");te.href=P,te.download=`${T}.svg`,te.click(),URL.revokeObjectURL(P)}const h=1;L(()=>r(),()=>{O(o,r())}),L(()=>i(),()=>{O(s,fl(i()))}),be(),ge();var v=Vk(),m=j(v),E=j(m);S(E,"width",400*h),S(E,"height",300*h),W(m);var b=F(m,2),I=j(b),w=F(I,2);W(b),W(v),Le("click",I,()=>d(f(o),f(s))),Le("click",w,()=>g(f(o),f(s))),N(t,v),oe()}var qk=le('<div class="tab-container svelte-1051sg0"><div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div> <div class="form-row"><button class="form-button form-modal-button">Download JSON</button> <button class="form-button form-modal-button">Copy Link</button></div></div>');function Zk(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ys,"$puzzleStore",n),i=()=>fe(Mr,"$puzzleMetaStore",n),o=x(),s=I=>{const w=zD(r());return JSON.stringify(w,null,I)},l=(I="sudoku_by_anonymous")=>{function w(T,k,G){var Y=document.createElement("a"),M=new Blob([T],{type:G});Y.href=URL.createObjectURL(M),Y.download=k,Y.click(),URL.revokeObjectURL(Y.href)}const A=s(2);w(A,`${I}.json`,"text/plain")},u=()=>{const I=s(0),w=GD(I),A=`${window.location.host}/encpuzzle/${w}`;navigator.clipboard.writeText(A)},d=1;L(()=>i(),()=>{O(o,fl(i()))}),be(),ge();var g=qk(),h=j(g),v=j(h);S(v,"width",400*d),S(v,"height",300*d),W(h);var m=F(h,2),E=j(m),b=F(E,2);W(m),W(g),Le("click",E,()=>l(f(o))),Le("click",b,u),N(t,g),oe()}var Qk=le('<div class="save-puzzle-content svelte-mre2mf"><!></div>');function Jk(t,e){let n=U(e,"showModal",12,!1);const r=[{label:"Project",component:Zk},{label:"Image",component:Xk}];pi(t,{title:"Save Puzzle",get showModal(){return n()},set showModal(i){n(i)},children:(i,o)=>{var s=Qk(),l=j(s);Dp(l,{tabs:r}),W(s),N(i,s)},$$slots:{default:!0},$$legacy:!0})}var eM=le("<!> <!>",1);function tM(t){let e=x(!1);function n(){O(e,!0)}var r=eM(),i=ee(r);Vs(i,{title:"Save Puzzle",clickCb:n,children:(s,l)=>{Bk(s)},$$slots:{default:!0}});var o=F(i,2);Jk(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var nM=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Tp(t){var e=nM();N(t,e)}var rM=le('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function iM(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var o=rM(),s=j(o);cn(s),_i(2),W(o),J(()=>{Et(o,"disabled",i()),Ly(s,n()),s.disabled=i()}),Le("change",s,function(...l){var u;(u=r())==null||u.apply(this,l)}),N(t,o)}var oM=le('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Di(t,e){ie(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),o=U(e,"disabled",8,!1);function s(){o()||i()&&i()(!n())}ge();var l=oM(),u=j(l);iM(u,{get value(){return n()},onClickCb:s,get disabled(){return o()}});var d=F(u,2),g=j(d,!0);W(d),W(l),J(()=>{Et(l,"disabled",o()),it(g,r())}),Le("click",d,Fn(s)),N(t,l),oe()}var sM=le('<div class="settings-tab-layout"><!> <!> <!></div>');function aM(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=x();L(()=>r(),()=>{O(i,r())}),be(),ge();var o=sM(),s=j(o);Di(s,{name:"Check Conflicts",get value(){return f(i).checkConflicts},updateCb:d=>sr("checkConflicts",d)});var l=F(s,2);Di(l,{name:"Highlight Pencilmark Conflicts",get value(){return f(i).highlightPencilmarkConflicts},updateCb:d=>sr("highlightPencilmarkConflicts",d)});var u=F(l,2);Di(u,{name:"Highlight Cells Seen By Selection",get value(){return f(i).highlightCellsSeenBySelection},updateCb:d=>sr("highlightCellsSeenBySelection",d)}),W(o),N(t,o),oe()}var lM=le('<div class="settings-tab-layout"><!> <!> <!> <!> <button class="form-button form-modal-button">Restore default settings</button></div>');function cM(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=x();L(()=>r(),()=>{O(i,r())}),be(),ge();var o=lM(),s=j(o);Di(s,{get value(){return f(i).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:h=>sr("darkMode",h)});var l=F(s,2);Di(l,{get value(){return f(i).penToolActive},name:"Pen Tool",updateCb:h=>sr("penToolActive",h)});var u=F(l,2);Di(u,{disabled:!0,get value(){return f(i).letterToolActive},name:"Letter Tool",updateCb:h=>sr("letterToolActive",h)});var d=F(u,2);Di(d,{name:"Show Solution",get value(){return f(i).showSolution},updateCb:h=>sr("showSolution",h)});var g=F(d,2);W(o),Le("click",g,function(...h){var v;(v=Ay)==null||v.apply(this,h)}),N(t,o),oe()}var uM=le('<div class="setting-color-name svelte-1dih2k"> </div> <div class="picker-container svelte-1dih2k"><!></div>',1);function hs(t,e){let n=U(e,"name",8),r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0);var o=uM(),s=ee(o),l=j(s,!0);W(s);var u=F(s,2),d=j(u);sl(d,{get value(){return r()},get onChangeCb(){return i()}}),W(u),J(()=>it(l,n())),N(t,o)}var dM=le('<div class="settings-tab-layout"><div class="grid svelte-169jaiw"><!> <!> <!> <!> <!></div></div>');function _M(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=x();L(()=>r(),()=>{O(i,r())}),be(),ge();var o=dM(),s=j(o),l=j(s);hs(l,{name:"Non-given value color:",get value(){return f(i).non_given_color},onChangeCb:v=>{sr("non_given_color",v)}});var u=F(l,2);hs(u,{name:"Seen cells color:",get value(){return f(i).seen_cells_color},onChangeCb:v=>{sr("seen_cells_color",v)}});var d=F(u,2);hs(d,{name:"Selection color:",get value(){return f(i).selection_color},onChangeCb:v=>{sr("selection_color",v)}});var g=F(d,2);hs(g,{name:"Conflicting cells color:",get value(){return f(i).conflict_cells_color},onChangeCb:v=>{sr("conflict_cells_color",v)}});var h=F(g,2);hs(h,{name:"Conflicting pencilmarks color:",get value(){return f(i).conflict_marks_color},onChangeCb:v=>{sr("conflict_marks_color",v)}}),W(s),W(o),N(t,o),oe()}var fM=le('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function Cn(t,e){let n=U(e,"description",8);var r=fM(),i=j(r),o=j(i,!0);W(i);var s=F(i,2),l=j(s);Ot(l,e,"default",{}),W(s),W(r),J(()=>it(o,n())),N(t,r)}var gM=le('<div class="shortcut svelte-1cgt5u5"> </div>');function gn(t,e){let n=U(e,"shortcut",8);var r=gM(),i=j(r,!0);W(r),J(()=>it(i,n())),N(t,r)}var hM=le('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Va(t,e){let n=U(e,"title",8);var r=hM(),i=j(r),o=j(i,!0);W(i);var s=F(i,2);Ot(s,e,"default",{}),W(r),J(()=>it(o,n())),N(t,r)}var vM=le("<!> <!> <!> <!>",1),pM=le("<!> or <!>",1),mM=le("<!> <!> <!> <!> <!> <!> <!> <!>",1),EM=le("<!> <!>",1),CM=le('<div class="settings-tab-layout"><!> <!> <!> <!></div>');function bM(t){var e=CM(),n=j(e);Va(n,{title:"General",children:(s,l)=>{Cn(s,{description:"Toggle Darkmode",children:(u,d)=>{gn(u,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var r=F(n,2);Va(r,{title:"Selection",children:(s,l)=>{var u=vM(),d=ee(u);Cn(d,{description:"Select cells",children:(m,E)=>{gn(m,{shortcut:"click/drag"})},$$slots:{default:!0}});var g=F(d,2);Cn(g,{description:"Add to current selection",children:(m,E)=>{gn(m,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var h=F(g,2);Cn(h,{description:"Remove from current selection",children:(m,E)=>{gn(m,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var v=F(h,2);Cn(v,{description:"Add or remove from current selection",children:(m,E)=>{gn(m,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(s,u)},$$slots:{default:!0}});var i=F(r,2);Va(i,{title:"Change Tool",children:(s,l)=>{var u=mM(),d=ee(u);Cn(d,{description:"Cycle Tool",children:(w,A)=>{gn(w,{shortcut:"Space"})},$$slots:{default:!0}});var g=F(d,2);Cn(g,{description:"Change to Digit Tool",children:(w,A)=>{gn(w,{shortcut:"Z"})},$$slots:{default:!0}});var h=F(g,2);Cn(h,{description:"Change to Corner Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"X"})},$$slots:{default:!0}});var v=F(h,2);Cn(v,{description:"Change to Center Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"C"})},$$slots:{default:!0}});var m=F(v,2);Cn(m,{description:"Change to Highlights Tool",children:(w,A)=>{gn(w,{shortcut:"V"})},$$slots:{default:!0}});var E=F(m,2);Cn(E,{description:"Quickshift To Corner Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"Shift"})},$$slots:{default:!0}});var b=F(E,2);Cn(b,{description:"Quickshift To Center Pencilmark Tool",children:(w,A)=>{gn(w,{shortcut:"Ctrl"})},$$slots:{default:!0}});var I=F(b,2);Cn(I,{description:"Quickshift To Highlights Tool",children:(w,A)=>{var T=pM(),k=ee(T);gn(k,{shortcut:"Shift + Ctrl"});var G=F(k,2);gn(G,{shortcut:"Alt"}),N(w,T)},$$slots:{default:!0}}),N(s,u)},$$slots:{default:!0}});var o=F(i,2);Va(o,{title:"Undo/Redo",children:(s,l)=>{var u=EM(),d=ee(u);Cn(d,{description:"Undo",children:(h,v)=>{gn(h,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var g=F(d,2);Cn(g,{description:"Redo",children:(h,v)=>{gn(h,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(s,u)},$$slots:{default:!0}}),W(e),N(t,e)}var IM=le('<div class="settings-content svelte-heebuf"><!></div>');function kp(t,e){let n=U(e,"showModal",12,!1);const r=[{label:"Display",component:_M},{label:"Gameplay",component:aM},{label:"Shortcuts",component:bM},{label:"Other",component:cM}];pi(t,{title:"Settings",get showModal(){return n()},set showModal(i){n(i)},children:(i,o)=>{var s=IM(),l=j(s);Dp(l,{tabs:r}),W(s),N(i,s)},$$slots:{default:!0},$$legacy:!0})}var wM=le("<!> <!>",1);function yM(t){let e=x(!1);function n(){O(e,!0)}var r=wM(),i=ee(r);Vs(i,{title:"Settings",clickCb:n,children:(s,l)=>{Tp(s)},$$slots:{default:!0}});var o=F(i,2);kp(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var OM=le('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function AM(t){var e=OM(),n=j(e);Hk(n);var r=F(n,2);tM(r);var i=F(r,2);kk(i,{});var o=F(i,2);Ok(o);var s=F(o,2);yM(s),W(e),N(t,e)}var xM=le('<button class="entry-panel-button svelte-yhctjt" title="Set current cell values as the puzzle solution">Set Solution</button>');function SM(t,e){ie(e,!1);let n=x(!1);function r(){const i=Re(hn),o=[];for(let s=0;s<i.nRows;s++){const l=[];for(let u=0;u<i.nCols;u++){const d=i.getCell(s,u);if(!d)continue;const g=d.value;l.push(g)}o.push(l)}o_(o)}ge(),Gl(t,{get isOpen(){return f(n)},set isOpen(i){O(n,i)},$$slots:{"panel-header":(i,o)=>{Ul(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return f(n)},set isOpen(s){O(n,s)},$$legacy:!0})},"panel-content":(i,o)=>{var s=xM();Le("click",s,r),N(i,s)}},$$legacy:!0}),oe()}const NM={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function LM(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function RM(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),s=parseInt(r[3],10),l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[s,l==="]"?"<=":"<"]}}return null}function DM(t){t=t.trim();const e=/^(>|>=|<|<=)\s*([a-zA-Z][a-zA-Z0-9]*)$/,n=/^([[\]])([a-zA-Z][a-zA-Z0-9]*),\s*([a-zA-Z][a-zA-Z0-9]*)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=r[2];if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=r[2],s=r[3],l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[s,l==="]"?"<=":"<"]}}return null}function TM(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function kM(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Mp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function MM(t,e){const n=TM(t);if(n)return{type:"number",parsed:parseInt(n)};const r=LM(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=kM(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=RM(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const s=DM(t);if(e.allow_interval&&s)return{type:"variable_interval",parsed:s};const l=Mp(t);return e.allow_var_list&&l?{type:"var_list",parsed:l}:null}var $=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.CAVE_CELLS_FILLOMINO_REGIONS="cave_cells_fillomino_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t.BYOKC_GRID="byokc_grid",t.SHADED_BOUNDARIES_REGIONS="shaded_boundaries_regions",t.SHADED_BOUNDARIES_VERTICAL="shaded_boundaries_vertical",t.SHADED_BOUNDARIES_HORIZONTAL="shaded_boundaries_horizontal",t))($||{});function Ze(t,e){return`${e}[${t.r},${t.c}]`}function jo(t,e){return t.map(r=>Ze(r,e))}function me(t,e){return"["+jo(t,e).join(",")+"]"}function xe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function Ct(t){return t.map(n=>xe(n))}function fo(t){return`constraint alldifferent([${t.join(",")}]);
`}function Wt(t,e){return t&&(t=`
% ${e}
`+t),t}function Pl(t,e){const n=[Fe.N,Fe.S,Fe.W,Fe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function f_(t,e,n=void 0){n||(n=[Fe.N,Fe.S,Fe.W,Fe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),s="["+Ct(o).join(",")+"]";r.push(s)}return r}function ze(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const[s,l]of Object.entries(i)){const u=n(t,o,s,l);r+=u}return r}function Xn(t,e,n){let r="";const i=e.tool_id,o=n.get(i);if(o){const s=o(t,e);r+=s}return r}class UM{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=NM){let i="";if(e.length===0&&n.length>0){const l=n;return this.hasVariable(l)||(i+=`var int: ${l};
`,this.addVariable(l)),[i,l]}const o=MM(e,r);if(!o)return null;if(o.type==="number"){const l=o.parsed;return["",String(l)]}if(o.type==="variable"){const l=o.parsed;return this.hasVariable(l)||(i+=`var int: ${l};
`,this.addVariable(l)),[i,l]}if(!n)return null;if(this.hasVariable(n)||(i+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const l=o.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];i+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];i+=`constraint ${n} ${d} ${u};
`}}if(o.type==="variable_interval"){const l=o.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];this.hasVariable(u)||(i+=`var int: ${u};
`,this.addVariable(u)),i+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];this.hasVariable(u)||(i+=`var int: ${u};
`,this.addVariable(u)),i+=`constraint ${n} ${d} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";i+=`constraint member(${u}, ${n});
`}if(o.type==="var_list"){const l=o.parsed,u="["+l.join(",")+"]";for(const d of l){const g=parseInt(d);Number.isNaN(g)&&!this.hasVariable(d)&&(i+=`var int: ${d};
`,this.addVariable(d))}i+=`constraint member(${u}, ${n});
`}return[i,n]}}function GM(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,s=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let l=null,u=0,d=0,g=0;for(let w=0;w<e.length;w++){const A=e[w].trim(),T=A.match(r),k=A.match(i),G=A.match(o),Y=A.match(s);if(!l&&(T||k||G||Y)){l={name:(T||k||G||Y)[1],startLine:w,content:[e[w]],type:T?"function":k?"predicate":G?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(l&&(l.content.push(e[w]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&d===0&&g===0&&A.endsWith(";"))){n[l.name]={...l,endLine:w};let M=l.startLine;for(;M>0&&e[M-1].trim().startsWith("%");)M-=1;n[l.name].startLine=M,l=null}}function h(w){const A=[],T=w.match(r),k=w.match(i),G=w.match(o);for(const Y of Object.keys(n)){const M=n[Y].type;if(M==="function"||M==="test"||M==="predicate"){if(T||k||G)continue;new RegExp(`\\b${Y}\\s*\\(`,"g").test(w)&&A.push(Y)}else if(M==="variable"){const P=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${Y}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match(P))continue;new RegExp(`\\b${Y}\\b`,"g").test(w)&&A.push(Y)}}return A}const v=new Set;for(const w of e)h(w).forEach(T=>v.add(T));const m=Object.values(n).filter(w=>!v.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,A)=>A.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const b=[];let I=!1;for(const w of E)w.trim()===""?I||(b.push(w),I=!0):(b.push(w),I=!1);return b.join(`
`)}function Yh(t){let e=t,n=e.length;for(;e=GM(e),e.length!=n;)n=e.length;return e}function Up(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function $M(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let l=0;l<e.nRows;l++){const u=[];for(let d=0;d<e.nCols;d++){const g=e.getCell(l,d);!g||g.region===null?u.push(r-1):u.push(g.region)}o.push(u)}const s=Up(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${s});
`)}}function zl(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function qt(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*ei(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Ko(t,e){return[...Object.values(t)].find(i=>{const o=i.cell;if(e.c===o.c&&e.r===o.r)return i})}function g_(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function h_(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function Hl(t,e,n,r){const i=t.grid;let o="";if(!!!t.elementsDict.get(_.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const d of u){const g=i.getRegion(d),h=me(g,r);o+=`constraint count_eq(${h}, ${n}, ${e});
`}}return o}function go(t,e,n,r){let i=g_(e,n,r);return i+=h_(e,n,r),i+=Hl(t,e,n,r),i}function FM(t,e){const n=e.tool_id,r=t.puzzle.grid,i=t.puzzle.valid_digits,o=Math.min(...i);let s="";for(const l of r.getAllCells()){if(l.value!==null)continue;const u=Ze(l,$.BOARD);s+=`constraint ${u} == ${o};
`}return s=Wt(s,`${n}`),s}function PM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),s=Ct(o);let l=`
% ${i}
`;return l+=fo(s),l}function zM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),s=Ct(o);let l=`
% ${i}
`;return l+=fo(s),l}function HM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),l="["+Ct(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function WM(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),l="["+Ct(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function BM(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,s]=[r.nRows,r.nCols];if(o!==s)return"";let l=`
% ${i}
`;const u=r.getPositiveDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h+(g-v));if(!m||!E)continue;const b=xe(m),I=xe(E),A=`constraint is_unimodular_line(${`[${b}, ${I}]`}, 2);
`;l+=A}}return l}function YM(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,s]=[r.nRows,r.nCols];if(o!==s)return"";let l=`
% ${i}
`;const u=r.getNegativeDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h-(g-v));if(!m||!E)continue;const b=xe(m),I=xe(E),A=`constraint is_unimodular_line(${`[${b}, ${I}]`}, 2);
`;l+=A}}return l}function jM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;const s=[...r.getUsedRegions()].length;for(let l=0;l<s;l++){const u=r.getDisjointGroup(l),h=`constraint alldifferent(${`[${Ct(u).join(",")}]`});
`;o+=h}return o}function KM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const u=r.getNeighboorCells(s).filter(m=>m.r+m.c>=s.r+s.c),d=xe(s),h=`[${Ct(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function VM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const u=r.getCellsByKnightMove(s).filter(m=>m.r>=s.r||m.c>=s.c),d=xe(s),h=`[${Ct(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function XM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=Wt(r,`${n}`),r}function qM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=Wt(r,`${n}`),r}function ZM(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=Wt(r,`${n}`),r}function QM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=Wt(r,`${n}`),r}function JM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[s,l]of ei(r)){const u=xe(s),d=xe(l),g=`constraint not consecutive_p(${u}, ${d});
`;o+=g}return o}function e5(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[s,l]of ei(r)){const u=xe(s),d=xe(l),g=`constraint not ratio_p(${u}, ${d}, 2);
`;o+=g}return o}function t5(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const l=r.getRow(s.r),d=`[${Ct(l).join(",")}]`,g=s.c+1,h=`constraint indexing_column_p(${d}, ${g});
`;o+=h}return o}function n5(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=Wt(r,`${n}`),r}function r5(t,e){const n=e.tool_id;let r="";return r+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,r=Wt(r,`${n}`),r}function i5(t,e){const n=e.tool_id;let r="";return r+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,r=Wt(r,`${n}`),r}function o5(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;let o="";const s=n.grid.getUsedRegions();for(const l of s){const u=r.getRegion(l),d=[...new Set(u.map(h=>h.r))],g=[...new Set(u.map(h=>h.c))];for(const h of g){const v=u.filter(E=>E.c===h),m=me(v,$.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}for(const h of d){const v=u.filter(E=>E.r===h),m=me(v,$.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}}return o=Wt(o,`${i}`),o}function s5(t){const e=t.elementsDict;if(!!e.get(_.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let i="";i+=`
% row constraints (digits do not repeat on rows)
`;const o=r.nRows;for(let u=0;u<o;u++){const d=r.getRow(u),g=Ct(d),h=fo(g);i+=h}i+=`
% col constraints (digits do not repeat on cols)
`;const s=r.nCols;for(let u=0;u<s;u++){const d=r.getCol(u),g=Ct(d),h=fo(g);i+=h}if(!!!e.get(_.CHAOS_CONSTRUCTION)){i+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const d of u){const g=r.getRegion(d),h=Ct(g),v=fo(h);i+=v}}return i}function a5(t){const e=t.elementsDict,n=_.HEXED_SUDOKU;if(!!!e.get(n))return"";let i=`
% ${n}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const l5=new Map([[_.LEAVE_EMPTY_CELLS_EMPTY,FM],[_.POSITIVE_DIAGONAL,PM],[_.NEGATIVE_DIAGONAL,zM],[_.POSITIVE_ANTIDIAGONAL,HM],[_.NEGATIVE_ANTIDIAGONAL,WM],[_.PARITY_MIRROR_POSITIVE_DIAGONAL,BM],[_.PARITY_MIRROR_NEGATIVE_DIAGONAL,YM],[_.ANTIKING,KM],[_.ANTIKNIGHT,VM],[_.ANTI_LONG_KNIGHT,qM],[_.ANTI_GIRAFFE,XM],[_.DISJOINT_GROUPS,jM],[_.TANGO,ZM],[_.NONCONSECUTIVE,JM],[_.NONRATIO,e5],[_.ANTI_ENTROPY,QM],[_.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,o5],[_.GLOBAL_INDEXING_COLUMN,t5],[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,n5],[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,r5],[_.YIN_YANG_FILLOMINO_PARITY,i5]]);function c5(t,e){let n="";const r=e.tool_id,i=l5.get(r);if(i){const o=i(t,e);n+=o}return n}function Gp(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return Ct(r)}function $p(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${Ct(n.slice(1)).join(",")}]`}function Fp(t,e,n){let r="";const o="["+Gp(t,e).join(",")+"]";for(const s of e.lines){const l=$p(t,s);r+=`constraint ${n}(${o}, ${l});
`}return r}function Pp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=Fp(t,o,n);r+=s}return r}function u5(t,e){const n=t.puzzle.grid;return Pp(n,e,"arrow_p")}function d5(t,e){const n=t.puzzle.grid;return Pp(n,e,"bulbous_arrow_p")}function _5(t,e,n,r){let i="";const o=Gp(e,r);if(o.length===1){const s=o[0],l=r.lines;for(const u of l){const g=`constraint average_arrow_p(${$p(e,u)}, ${s});
`;i+=g}}return i}function f5(t,e){return ze(t,e,_5)}function g5(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),s=me(o,$.UNKNOWN_REGIONS),l=r.lines.map(u=>u.map(d=>e.getCell(d.r,d.c)).filter(d=>!!d));for(const u of l){if(u.length<=1)continue;const d=me(u.slice(1),$.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${s}, ${d});
`}return i+=Fp(e,r,"arrow_p"),i}function h5(t,e){return ze(t,e,g5)}const v5=new Map([[_.ARROW,u5],[_.AVERAGE_ARROW,f5],[_.BULBOUS_ARROW,d5],[_.CHAOS_CONSTRUCTION_ARROW,h5]]);function p5(t,e){return Xn(t,e,v5)}function zp(t,e){const n=[];for(const r of t)e.getOrthogonallyAdjacentCells(r).forEach(o=>{!t.includes(o)&&!n.includes(o)&&n.push(o)});return n}function jh(t,e){const n=e.constraints,r=new Map;if(!n)return r;const i=[...Object.entries(n)];for(const[o,s]of vp(i,2)){const l=o[0],u=s[0],d=qt(t,o[1].cells),g=new Set(qt(t,s[1].cells));if(!zp(d,t).some(b=>g.has(b)))continue;const m=r.get(l);m?m.add(u):r.set(l,new Set([u]));const E=r.get(u);E?E.add(l):r.set(u,new Set([l]))}return r}function Gi(t,e){const n=qt(t,e.cells);return Ct(n)}function m5(t,e,n){const i=`[${Gi(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Hp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=m5(o,s,n);r+=l}return r}function Ti(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function E5(t,e,n,r){const i=t.puzzle.grid,s=`[${Gi(i,n).join(",")}]`,l=n.value,u=Ti(t,l,e);if(!u)return["",""];const d=u[1];let g=u[0];return g+=`constraint ${r}(${s}, ${d});
`,[g,d]}function Wl(t,e,n){let r="";const i=e.constraints;if(!i)return[r,[]];const o=[];for(const[s,l]of Object.entries(i)){const u=E5(t,s,l,n);r+=u[0],o.push(u[1])}return[r,o]}function C5(t,e){const n=Wl(t,e,"killer_cage");let r=n[0];const i=n[1];if(!e.negative_constraints)return r;const o=!!e.negative_constraints[_.ALL_CAGE_TOTALS_ARE_DIFFERENT],s=!!e.negative_constraints[_.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE],l=!!e.negative_constraints[_.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT];if(o&&(r+=`
% ${_.ALL_CAGE_TOTALS_ARE_DIFFERENT}
`,r+=`constraint all_different([${i.join(", ")}]);
`),s){const u=jh(t.puzzle.grid,e);r+=`
% ${_.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE}
`;for(const[d,g]of u.entries())for(const h of g){const v=Ti(t,"",d);if(!v)continue;const m=v[1];r+=v[0];const E=Ti(t,"",h);if(!E)continue;const b=E[1];r+=E[0],r+=`constraint abs(${m} - ${b}) == 1;
`}}if(l){const u=jh(t.puzzle.grid,e);r+=`
% ${_.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT}
`;for(const[d,g]of u.entries())for(const h of g){const v=Ti(t,"",d);if(!v)continue;const m=v[1];r+=v[0];const E=Ti(t,"",h);if(!E)continue;const b=E[1];r+=E[0],r+=`constraint ${m} != ${b};
`}}return r}function b5(t,e,n,r){const i=Gi(e,r),o=`[${i.join(",")}]`,s=r.value;if(!s)return fo(i);const l=Ti(t,s,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint inverted_killer_cage_p(${o}, ${u});
`,d}function I5(t,e){return ze(t,e,b5)}function w5(t,e){return Wl(t,e,"sum_cage_p")[0]}function y5(t,e){return Hp(t,e,"parity_balance_cage_p")}function O5(t,e){return Hp(t,e,"sum_cage_look_and_say_p")}function A5(t,e){return Wl(t,e,"divisible_killer_cage_p")[0]}function x5(t,e){return Wl(t,e,"spotlight_cage_p")[0]}function S5(t,e,n,r){const o=`[${Gi(e,r).join(",")}]`,s=r.value;if(s){const l=parseInt(s);return`constraint unique_values_cage_p(${o}, ${l}, ALLOWED_DIGITS);
`}return""}function N5(t,e){return ze(t,e,S5)}function L5(t,e,n,r){const o=`[${Gi(e,r).join(",")}]`,s=r.value;let l="";const u=Ti(t,s,n);if(u){const m=u[1];l+=u[0],l+=`constraint sum(${o}) == ${m};
`}const d=r.cells,g=qt(e,d),h=zp(g,e),v=me(h,$.BOARD);return l+=`constraint vaulted_cage_p(${o}, ${v});
`,l}function R5(t,e){return ze(t,e,L5)}function D5(t,e,n,r,i){const o=qt(e,r.cells),s=me(o,$.BOARD),l=me(o,$.YIN_YANG),u=r.value;if(u){const d=parseInt(u);return`constraint ${i}(${s}, ${l}, ${d});
`}return""}function Wp(t,e,n,r){let i="";const o=n.constraints;if(!o)return i;for(const[s,l]of Object.entries(o)){const u=D5(t,e,s,l,r);i+=u}return i}function T5(t,e){const n=t.puzzle.grid;return Wp(t,n,e,"yin_yang_antithesis_killer_cage_p")}function k5(t,e){const n=t.puzzle.grid;return Wp(t,n,e,"yin_yang_breakeven_killer_cage_p")}function M5(t,e,n,r){const i=qt(e,r.cells),o=me(i,$.BOARD),s=me(i,$.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint doublers_killer_cage_p(${o}, ${s}, ${u});
`}return""}function U5(t,e){return ze(t,e,M5)}function G5(t,e,n,r){const i=qt(e,r.cells),o=me(i,$.BOARD),s=me(i,$.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint negators_killer_cage_p(${o}, ${s}, ${u});
`}return""}function $5(t,e){return ze(t,e,G5)}function F5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=zl(Object.values(r)),o=t.puzzle.grid;for(const s of i.values())if(!(s.length<=1))for(const[l,u]of s.flatMap((d,g)=>s.slice(g+1).map(h=>[d,h]))){const g=`[${Gi(o,l).join(",")}]`,v=`[${Gi(o,u).join(",")}]`;n+=`constraint multisets_equal_p(${g}, ${v});
`}return n}const P5=new Map([[_.KILLER_CAGE,C5],[_.INVERTED_KILLER_CAGE,I5],[_.SUM_CAGE,w5],[_.PARITY_BALANCE_CAGE,y5],[_.SUM_CAGE_LOOK_AND_SAY,O5],[_.DIVISIBLE_KILLER_CAGE,A5],[_.SPOTLIGHT_CAGE,x5],[_.UNIQUE_DIGITS_CAGE,N5],[_.VAULTED_CAGE,R5],[_.YIN_YANG_ANTITHESIS_KILLER_CAGE,T5],[_.YIN_YANG_BREAKEVEN_KILLER_CAGE,k5],[_.DOUBLERS_KILLER_CAGE,U5],[_.NEGATORS_KILLER_CAGE,$5],[_.MULTISET_CAGE,F5]]);function z5(t,e){return Xn(t,e,P5)}function H5(t,e,n,r){const i=e.r+.5,o=e.c+.5,s=n-i,l=r-o,u=Math.floor(n+s),d=Math.floor(r+l);return t.getCell(u,d)}function Bp(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const s=H5(t,o,e.r,e.c);s&&!n.includes(s)?(n.push(o),r.push(s)):r.includes(o)||i.push(o)}return[n,r,i]}function W5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;for(let d=0;d<i.length;d++){const g=i[d],h=g.cell,v=d+1,[m,E,b]=Bp(o,h),I=me(m,$.GALAXY_REGIONS),w=me(E,$.GALAXY_REGIONS),A=me(b,$.GALAXY_REGIONS);n+=`% galaxy ${v}
`,n+=`constraint galaxy_center_p(${I}, ${w}, ${A}, ${v});
`,n+=`constraint connected_region(${$.GALAXY_REGIONS}, ${v});
`;const T=g.value;if(!T)continue;const k=parseInt(T);n+=`constraint galaxy_sum_p(${$.BOARD}, ${$.GALAXY_REGIONS}, ${k}, ${v});
`}if(!i.length)return n;const s=o.nCols*o.nRows,u=`${i.length+1}..${s}`;return n+=`
constraint order_remaining_galaxies_p(${$.GALAXY_REGIONS}, ${u});
`,n}function B5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;let s=0;for(let u=0;u<i.length;u++){const g=i[u].cell,h=u+1,[v,m,E]=Bp(o,g),b=me(v,$.GALAXY_REGIONS),I=me(m,$.GALAXY_REGIONS),w=me(E,$.GALAXY_REGIONS);n+=`% galaxy ${h}
`,n+=`constraint galaxy_center_p(${b}, ${I}, ${w}, ${h});
`,n+=`constraint connected_region(${$.GALAXY_REGIONS}, ${h});
`,s+=1}if(!i.length||!e.negative_constraints)return n;if(!!e.negative_constraints[_.ALL_GALAXY_CENTERS_GIVEN])n+=`
constraint all_galaxy_centers_given_p(${$.GALAXY_REGIONS}, ${s});
`;else{const u=o.nCols*o.nRows,g=`${s+1}..${u}`;n+=`
constraint order_remaining_galaxies_p(${$.GALAXY_REGIONS}, ${g});
`}return n}function Y5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function j5(t,e,n,r){const i=r.cell,[o,s]=[i.r,i.c],l=r.value,u=Y5(t,l,n);if(!u)return"";const d=u[1];let g=u[0],h=[];if(o%1===0&&s%1===0?h=cl(i).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0):(o%1===.5&&s%1===0||o%1===0&&s%1===.5)&&(h=ul(i).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0)),!h.length)return"";const v=me(h,$.BOARD),m=me(h,$.YIN_YANG);return g+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${d};
`,g}function K5(t,e){return ze(t,e,j5)}const V5=new Map([[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,K5],[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,B5],[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,W5]]);function X5(t,e){return Xn(t,e,V5)}function Kh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return Ct(n)}function q5(t,e){const r="["+Kh(t,e.cells).join(",")+"]",o="["+Kh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}function Z5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=q5(i,o);n+=s}return n}const Q5=new Map([[_.CLONE_REGION,Z5]]);function J5(t,e){return Xn(t,e,Q5)}function v_(t,e){const n=qt(t,e.cells);return Ct(n)}function eU(t,e,n){const i=`[${v_(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function p_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=eU(t,o,n);r+=s}return r}function tU(t,e,n,r,i,o=""){const l=`[${v_(e,r).join(",")}]`;let u=r.value;if(u||(u=o),u){const d=parseInt(u);return`constraint ${i}(${l}, ${d});
`}return""}function Yp(t,e,n,r,i=""){let o="";const s=n.constraints;if(!s)return o;for(const[l,u]of Object.entries(s)){const d=tU(t,e,l,u,r,i);o+=d}return o}function nU(t,e,n,r){const o=`[${v_(e,r).join(",")}]`,s=r.value;if(!s)return"";const l=Mp(s);if(!l)return"";let u="";for(const g of l){const h=parseInt(g);Number.isNaN(h)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const d="["+l.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${d});
`,u}function rU(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,s]of Object.entries(r)){const l=nU(t,i,o,s);n+=l}return n}function iU(t,e){const n=t.puzzle.grid;return Yp(t,n,e,"corner_sum_p")}function oU(t,e){const n=t.puzzle.grid;return Yp(t,n,e,"corner_even_count_p")}function sU(t,e){const n=t.puzzle.grid;return p_(n,e,"corner_sum_of_three_equals_the_other_p")}function aU(t,e){const n=t.puzzle.grid;return p_(n,e,"equal_diagonal_differences_p")}function lU(t,e){const n=t.puzzle.grid;return p_(n,e,"product_square_p")}const cU=new Map([[_.QUADRUPLE,rU],[_.CORNER_SUM,iU],[_.CORNER_EVEN_COUNT,oU],[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,sU],[_.PRODUCT_SQUARE,lU],[_.EQUAL_DIAGONAL_DIFFERENCES,aU]]);function uU(t,e){return Xn(t,e,cU)}function Zs(t,e,n){return[...Object.values(t)].find(o=>{const s=o.cells[0],l=o.cells[1];if(e.c===s.c&&e.r===s.r&&n.c===l.c&&n.r===l.r||e.c===l.c&&e.r===l.r&&n.c===s.c&&n.r===s.r)return o})}function Bl(t,e){const n=qt(t,e.cells);return Ct(n)}function dU(t,e,n){const r=Bl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function _U(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=dU(t,o,n);r+=s}return r}function fU(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function gU(t,e,n,r,i,o=""){var m;const s=Bl(e,r),[l,u]=s,d=(m=r.value)!=null&&m.length?r.value:o,g=fU(t,d,n);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint ${i}(${l}, ${u}, ${h});
`,v}function Yl(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=gU(t,s,l,u,n,r);i+=d}return i}function hU(t,e){const n=Bl(t,e),[r,i]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${i} = 5;
`:`constraint ${r} + ${i} = 10;
`}function vU(t,e){let n="";const r=e.constraints,i=t.puzzle.grid;for(const u of Object.values(r)){const d=hU(i,u);n+=d}if(!e.negative_constraints)return n;const o=!!e.negative_constraints[_.NEGATIVE_V_CONSTRAINT],s=!!e.negative_constraints[_.NEGATIVE_X_CONSTRAINT],l=!!e.negative_constraints[_.NEGATIVE_XV_CONSTRAINT];if(!o&&!s&&!l)return n;for(const[u,d]of ei(i)){const g=Zs(r,u,d),h=xe(u),v=xe(d);if(o&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${h} + ${v} != 5;
`;n+=m}else if(s&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${h} + ${v} != 10;
`;n+=m}else if(l&&!g){const m=`constraint ${h} + ${v} != 5 /\\ (${h} + ${v} != 10);
`;n+=m}}return n}function pU(t,e){const n=t.puzzle.grid;let r=Yl(t,e,"ratio_p","2");if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_RATIOS_GIVEN])return r;const o=e.constraints;let s=[];o&&(s=Object.values(o).map(u=>u.value).map(u=>u||"2")),s.length===0&&s.push("2");const l=[...new Set(s)];console.log("values",l),r+=`
% ${_.ALL_RATIOS_GIVEN}
`;for(const[u,d]of ei(n)){if(Zs(o,u,d))continue;const h=xe(u),v=xe(d);for(const m of l){const E=parseInt(m),b=`constraint not ratio_p(${h}, ${v}, ${E});
`;r+=b}}return r}function mU(t,e){const n=t.puzzle.grid;let r=Yl(t,e,"abs_difference","1");if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_DIFFERENCES_GIVEN])return r;const o=e.constraints;let s=[];o&&(s=Object.values(o).map(u=>u.value).map(u=>u||"1")),s.length===0&&s.push("1");const l=[...new Set(s)];r+=`
% ${_.ALL_DIFFERENCES_GIVEN}
`;for(const[u,d]of ei(n)){if(Zs(o,u,d))continue;const h=xe(u),v=xe(d);for(const m of l){const E=parseInt(m),b=`constraint abs(${h} - ${v}) != ${E};
`;r+=b}}return r}function EU(t,e){const n=Bl(t,e),[r,i]=n,o=e.value;return o==="<"?`constraint ${r} < ${i};
`:o===">"?`constraint ${r} > ${i};
`:""}function Vh(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=EU(i,o);n+=s}return n}function CU(t,e){return Yl(t,e,"edge_sum_p")}function bU(t,e){return Yl(t,e,"edge_modulo_p")}function IU(t,e){const n=t.puzzle.grid;return _U(n,e,"edge_factor_p")}function jp(t,e,n){const r=xe(e),i=xe(n);let o="";if(e.r==n.r){const u=t.getRow(e.r)[0];o=xe(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];o=xe(u)}return o?`xy_differences_p(${r}, ${i}, ${o});
`:""}function wU(t,e){const n=qt(t,e.cells),[r,i]=n,o=jp(t,r,i);return o.length===0?"":`constraint ${o}`}function yU(t,e){const n=e.constraints,r=t.puzzle.grid;let i="";for(const s of Object.values(n)){const l=wU(r,s);i+=l}if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_XY_DIFFERENCES_GIVEN])return i;i+=`
% ${_.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[s,l]of ei(r)){if(Zs(n,s,l))continue;const d=jp(r,s,l);if(d.length===0)continue;const g=`constraint not ${d}`;i+=g}return i}function OU(t,e,n){const r=qt(t,e.cells),[i,o]=Ct(r),s=jo(r,$.YIN_YANG),[l,u]=s;return`constraint ${n}(${i}, ${o}, ${l}, ${u});
`}function Kp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=OU(t,o,n);r+=s}return r}function AU(t,e){const n=t.puzzle.grid;let r=Kp(n,e,"yin_yang_kropki_p");if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_YIN_YANG_KROPKI_GIVEN])return r;const o=e.constraints;r+=`
% ${_.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[s,l]of ei(n)){if(Zs(o,s,l))continue;const d=xe(s),g=xe(l),h=Ze(s,$.YIN_YANG),v=Ze(l,$.YIN_YANG),m=`constraint not yin_yang_kropki_p(${d}, ${g}, ${h}, ${v});
`;r+=m}return r}function xU(t,e){const n=t.puzzle.grid;return Kp(n,e,"yin_yang_white_kropki_p")}function SU(t,e,n){const r=qt(t,e.cells),i=jo(r,n),[o,s]=i;return`constraint ${o} != ${s};
`}function jl(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=SU(t,o,n);r+=s}return r}function NU(t,e){const n=t.puzzle.grid;return jl(n,e,$.UNKNOWN_REGIONS)}function LU(t,e){const n=t.puzzle.grid;return jl(n,e,$.FILLOMINO_REGIONS)}function RU(t,e){const n=t.puzzle.grid;return jl(n,e,$.SUGURU_REGIONS)}function DU(t,e){const n=t.puzzle.grid;return jl(n,e,$.CAVE_SHADING)}const TU=new Map([[_.XV,vU],[_.DIFFERENCE,mU],[_.RATIO,pU],[_.EDGE_INEQUALITY,Vh],[_.ONE_WAY_DOOR,Vh],[_.EDGE_SUM,CU],[_.EDGE_MODULO,bU],[_.EDGE_FACTOR,IU],[_.XY_DIFFERENCES,yU],[_.YIN_YANG_KROPKI,AU],[_.YIN_YANG_WHITE_KROPKI,xU],[_.FILLOMINO_REGION_BORDER,LU],[_.UNKNOWN_REGION_BORDER,NU],[_.CHAOS_CONSTRUCTION_SUGURU_BORDER,RU],[_.EDGE_CAVE_ONE_OF_EACH,DU]]);function kU(t,e){return Xn(t,e,TU)}function MU(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Kl(t,e,n=!1){let r=qt(t,e.cells);return n&&(r=[...new Set(r)]),Ct(r)}function UU(t,e,n,r=!1){const o=`[${Kl(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function mt(t,e,n,r=!1){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=UU(s,l,n,r);i+=u}return i}function GU(t,e,n,r,i,o=""){var v;const l=`[${Kl(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,d=MU(t,u,n);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${i}(${l}, ${g});
`,h}function fr(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=GU(t,s,l,u,n,r);i+=d}return i}function $U(t,e,n,r=""){let o=e.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>!!v),s=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),s=!0);const u=`[${Ct(o).join(",")}]`;let d=e.value;d||(d=r);const g=parseInt(d);return`constraint ${n}(${u}, ${g}, ${s});
`}function m_(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=$U(s,u,n,r);i+=d}return i}function FU(t,e){return mt(t,e,"renban",!0)}function PU(t,e){return mt(t,e,"double_renban_p",!0)}function zU(t,e){return mt(t,e,"renrenbanban_p",!0)}function HU(t,e){return mt(t,e,"knabner_p",!0)}function WU(t,e){return mt(t,e,"renban_or_nabner_line_p",!0)}function BU(t,e){return mt(t,e,"out_of_order_consecutive_line_p")}function YU(t,e){return fr(t,e,"whispers","5")}function jU(t,e){return fr(t,e,"whispers","4")}function KU(t,e){return mt(t,e,"strictly_increasing")}function VU(t,e){return mt(t,e,"fuzzy_thermo_p")}function XU(t,e){return mt(t,e,"increasing")}function qU(t,e){return fr(t,e,"custom_thermo_p")}function ZU(t,e){return mt(t,e,"palindrome")}function QU(t,e){return fr(t,e,"sum_line_p")}function JU(t,e){return mt(t,e,"xv_line_p")}function e3(t,e){return fr(t,e,"at_least_x_line_p","10")}function t3(t,e){return fr(t,e,"product_line_p")}function n3(t,e){return fr(t,e,"maximum_adjacent_difference_line_p","2")}function r3(t,e){return mt(t,e,"adjacent_multiples_line_p")}function i3(t,e){return mt(t,e,"index_line_p")}function o3(t,e){return mt(t,e,"zipper_line_p")}function s3(t,e){return m_(t,e,"segmented_sum_line_p")}function a3(t,e){return mt(t,e,"segmented_sum_and_renban_line_p")}function l3(t,e){return m_(t,e,"n_consecutive_renban_line_p")}function c3(t,e){return m_(t,e,"n_consecutive_fuzzy_sum_line_p")}function u3(t,e,n){const r=qt(t,n.cells);let i="";const o=[];for(let l=0;l<r.length;l++){const u=r[l],d=t.getRow(u.r),g=me(d,$.BOARD),h=`cycle_${e}_${l}`;o.push(h);const v=u.c+1;i+=`var int: ${h} = cycle_order_f(${g}, ${v});
`}const s="["+o.join(",")+"]";return i+=`constraint strictly_increasing(${s});
`,i}function d3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,s]of Object.entries(r)){const l=u3(i,o,s);n+=l}return n}function _3(t,e){return mt(t,e,"adjacent_differences_count_line_p")}function f3(t,e){return mt(t,e,"same_parity_line_p")}function g3(t,e){return fr(t,e,"renban_or_whispers_p","5")}function h3(t,e){return mt(t,e,"alldifferent",!0)}function v3(t,e){return mt(t,e,"repeated_digits_line_p")}function p3(t,e){return mt(t,e,"superfuzzy_arrow_p")}function m3(t,e){return mt(t,e,"ambiguous_arrow_p",!0)}function E3(t,e){return mt(t,e,"headless_arrow_p")}function C3(t,e){return fr(t,e,"unimodular_line_p","3")}function b3(t,e){return fr(t,e,"modular_line_p","3")}function I3(t,e){return fr(t,e,"modular_or_unimodular_line_p","3")}function w3(t,e){return mt(t,e,"arithmetic_sequence_line_p")}function y3(t,e){return mt(t,e,"odd_even_oscillator_line_p")}function O3(t,e){return fr(t,e,"high_low_oscillator_line_p","5")}function A3(t,e){return mt(t,e,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function x3(t,e){return mt(t,e,"look_and_say_line_p",!0)}function S3(t,e){const n=qt(t,e.cells);function r(d){const g=[];let h=null;for(const v of d)v.r!=h?(g.push([v]),h=v.r):g[g.length-1].push(v);return g}const i=r(n);if(i.length<2)return"";const o=i[0],l=`[${Ct(o).join(",")}]`;let u="";for(let d=1;d<i.length;d++){const g=i[d],v=`[${Ct(g).join(",")}]`;u+=`constraint sum(${v}) == sum(${l});
`}return u}function N3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=S3(i,o);n+=s}return n}function L3(t,e){return mt(t,e,"between_line_p")}function R3(t,e){return mt(t,e,"tightrope_line_p")}function D3(t,e){return mt(t,e,"double_arrow_p")}function T3(t,e){return mt(t,e,"split_peas_p")}function k3(t,e){return mt(t,e,"parity_count_line_p")}function M3(t,e){return mt(t,e,"product_of_ends_equals_sum_of_line_p")}function Vp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function U3(t,e,n,r){let i="";const o=qt(e,r.cells),s=Vp(o);if(!s.length)return"";const l=`sum_line_${n}`;i+=`var int: ${l};
`;for(const u of s){const g=`constraint sum(${me(u,$.BOARD)}) == ${l};
`;i+=g}return i}function G3(t,e){return ze(t,e,U3)}function $3(t,e,n,r){return`constraint entropic_line_p(${`[${Kl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function F3(t,e){return ze(t,e,$3)}function P3(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Kl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function z3(t,e){return ze(t,e,P3)}function H3(t,e){return mt(t,e,"peapods_p")}function W3(t,e,n,r,i=""){const o=t.puzzle.grid,s=qt(o,n.cells),l=me(s,$.BOARD),u=me(s,$.YIN_YANG);let d=n.value;d||(d=i);const g=parseInt(d);return`constraint ${r}(${l}, ${u}, ${g});
`}function Xp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;for(const[s,l]of Object.entries(o)){const u=W3(t,s,l,n,r);i+=u}return i}function B3(t,e){return Xp(t,e,"yin_yang_shaded_whispers_line_p","5")}function Y3(t,e){return Xp(t,e,"yin_yang_unshaded_modular_line_p","3")}function j3(t,e,n){const r=qt(t,e.cells),i=me(r,$.BOARD),o=me(r,$.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function Vl(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=j3(o,s,n);r+=l}return r}function K3(t,e){return Vl(t,e,"yin_yang_unshaded_entropic_line_p")}function V3(t,e){return Vl(t,e,"yin_yang_indexing_line_coloring_p")}function X3(t,e){const n=t.grid,i=t.elementsDict.get(_.YIN_YANG_REGION_SUM_LINE);if(!i||!i.constraints)return"";let o=`
% ${e}
`;for(const s of Object.values(i.constraints)){const u=s.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),d=me(u,$.YIN_YANG);o+=`constraint count_unique_values(${d}) >= 2;
`}return o}function q3(t,e){let n=Vl(t,e,"yin_yang_region_sum_line_p");return e.negative_constraints&&!!e.negative_constraints[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(n+=X3(t.puzzle,_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),n}function Z3(t,e){return Vl(t,e,"yin_yang_californian_mountaint_snake_p")}function Q3(t,e,n){const r=t.puzzle.grid,i=qt(r,e.cells),o=me(i,$.VALUES_GRID);return`constraint ${n}(${o});
`}function E_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=Q3(t,o,n);r+=s}return r}function J3(t,e){return E_(t,e,"between_line_p")}function eG(t,e){return E_(t,e,"double_arrow_p")}function tG(t,e){return E_(t,e,"strictly_increasing")}function nG(t,e,n,r){const i=qt(e,r.cells),o=Vp(i);if(o.sort((d,g)=>g.length-d.length),o.length<=1)return"";let s="";const l=o[0],u=me(l,$.VALUES_GRID);for(const d of o.slice(1)){const g=me(d,$.VALUES_GRID),h=`constraint subset_p(${u}, ${g});
`;s+=h}return s}function rG(t,e){return ze(t,e,nG)}const iG=new Map([[_.THERMOMETER,KU],[_.FUZZY_THERMOMETER,VU],[_.SLOW_THERMOMETER,XU],[_.CUSTOM_THERMOMETER,qU],[_.RENBAN_LINE,FU],[_.DOUBLE_RENBAN_LINE,PU],[_.RENRENBANBAN_LINE,zU],[_.NABNER_LINE,HU],[_.WHISPERS_LINE,YU],[_.DUTCH_WHISPERS,jU],[_.RENBAN_OR_WHISPERS_LINE,g3],[_.RENBAN_OR_NABNER_LINE,WU],[_.OUT_OF_ORDER_CONSECUTIVE_LINE,BU],[_.N_CONSECUTIVE_RENBAN_LINE,l3],[_.PALINDROME,ZU],[_.SUM_LINE,QU],[_.PRODUCT_LINE,t3],[_.XV_LINE,JU],[_.AT_LEAST_X_LINE,e3],[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,n3],[_.SAME_PARITY_LINE,f3],[_.ADJACENT_MULTIPLES_LINE,r3],[_.ADJACENT_DIFFERENCES_COUNT_LINE,_3],[_.LOOK_AND_SAY_LINE,x3],[_.ROW_SUM_LINE,N3],[_.INDEX_LINE,i3],[_.ZIPPER_LINE,o3],[_.SEGMENTED_SUM_LINE,s3],[_.SEGMENTED_SUM_AND_RENBAN_LINE,a3],[_.N_CONSECUTIVE_FUZZY_SUM_LINE,c3],[_.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,A3],[_.SUPERFUZZY_ARROW,p3],[_.AMBIGUOUS_ARROW,m3],[_.HEADLESS_ARROW,E3],[_.ARITHMETIC_SEQUENCE_LINE,w3],[_.ODD_EVEN_OSCILLATOR_LINE,y3],[_.HIGH_LOW_OSCILLATOR_LINE,O3],[_.UNIQUE_VALUES_LINE,h3],[_.REPEATED_DIGITS_LINE,v3],[_.UNIMODULAR_LINE,C3],[_.MODULAR_LINE,b3],[_.MODULAR_OR_UNIMODULAR_LINE,I3],[_.REGION_SUM_LINE,G3],[_.ENTROPIC_LINE,F3],[_.ENTROPIC_OR_MODULAR_LINE,z3],[_.ROW_CYCLE_THERMOMETER,d3],[_.PEAPODS,H3],[_.BETWEEN_LINE,L3],[_.TIGHTROPE_LINE,R3],[_.DOUBLE_ARROW_LINE,D3],[_.SPLIT_PEAS,T3],[_.PARITY_COUNT_LINE,k3],[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,M3],[_.DOUBLERS_BETWEEN_LINE,J3],[_.DOUBLERS_DOUBLE_ARROW_LINE,eG],[_.DOUBLERS_THERMOMETER,tG],[_.INDEXER_CELLS_REGION_SUBSET_LINE,rG],[_.YIN_YANG_SHADED_WHISPERS_LINE,B3],[_.YIN_YANG_UNSHADED_ENTROPIC_LINE,K3],[_.YIN_YANG_UNSHADED_MODULAR_LINE,Y3],[_.YIN_YANG_REGION_SUM_LINE,q3],[_.YIN_YANG_INDEXING_LINE_COLORING,V3],[_.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE,Z3]]);function oG(t,e){return Xn(t,e,iG)}function sG(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};return t.getOrSetSharedVar(e,n,r)}function aG(t,e,n,r){const i=r.value,o=r.name;if(!i)return"";const s=o.length?o:`var_${n}`,l=sG(t,i,s);return l?l[0]:""}function lG(t,e){return ze(t,e,aG)}const cG=new Map([[_.VARIABLE_CONSTRAINT,lG]]);function uG(t,e){return Xn(t,e,cG)}function Xl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return Ct(i)}function Vo(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function dG(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),l=`[${Xl(e,n).join(",")}]`,u=n.value,d=Vo(t,u,i,o);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${r}(${l}, ${g});
`,h}function gr(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=dG(t,o,s,n);r+=l}return r}function _G(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Xl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Vo(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E}function fG(t,e){return ze(t,e,_G)}function gG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Xl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Vo(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const b=`var_bool_${n}_0`,I=`var_bool_${n}_1`;return E+=`var bool: ${b} = sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E+=`var bool: ${I} = x_sum_p(${l}, ${m});
`,E+=`constraint 'xor'(${b}, ${I});
`,E}function hG(t,e){return ze(t,e,gG)}function vG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=Xl(e,r),l=`[${s.join(",")}]`,u=s[0],d=r.value,g=Vo(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint x_index_p(${l}, ${u}, ${h});
`,v}function pG(t,e){return ze(t,e,vG)}function mG(t,e){return gr(t,e,"x_sum_p")}function EG(t,e){return gr(t,e,"shortsighted_x_sum_p")}function CG(t,e){return gr(t,e,"broken_x_sum_p")}function bG(t,e){return gr(t,e,"shifted_x_sum_p")}function IG(t,e){return gr(t,e,"skyscrapers_p")}function wG(t,e){return gr(t,e,"x_sum_skyscrapers_p")}function yG(t,e){return gr(t,e,"battlefield_p")}function OG(t,e){return gr(t,e,"rising_streak_p")}function AG(t,e){return gr(t,e,"outside_consecutive_sum_p")}function xG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=me(s,$.BOARD),u=me(s,$.CELL_CENTER_LOOP),d=r.value;if(d){const g=parseInt(d);return`constraint loopwhiches_p(${l}, ${u}, ${g});
`}return""}function SG(t,e){return ze(t,e,xG)}function NG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=me(l,$.BOARD),d=me(l,$.UNKNOWN_REGIONS),g=r.value,h=Vo(t,g,i,o);if(!h)return"";const v=h[1];let m=h[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${d}, ${v});
`,m}function LG(t,e){return ze(t,e,NG)}function RG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=s[0],u=Ze(l,$.BOARD),d=me(s,$.UNKNOWN_REGIONS);return`constraint chaos_construction_x_index_region_p(${u}, ${d});
`}function DG(t,e){return ze(t,e,RG)}function TG(t,e){return gr(t,e,"little_killer_sum_p")}function kG(t,e){return gr(t,e,"little_killer_product_p")}function MG(t,e){return gr(t,e,"x_omit_little_killer_sum_p")}function UG(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=me(s,$.BOARD),u=me(s,$.YIN_YANG),d=r.value;if(d){const g=parseInt(d);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${l}, ${u}, ${g});
`}return""}function GG(t,e){return ze(t,e,UG)}function $G(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=me(s,$.VALUES_GRID),u=r.value;if(u){const d=parseInt(u);return`constraint little_killer_sum_p(${l}, ${d});
`}return""}function FG(t,e){return ze(t,e,$G)}function PG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=me(l,$.PENTOMINO_REGIONS),d=r.value,g=Vo(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint pentomino_border_count_p(${u}, ${h});
`,v}function zG(t,e){return ze(t,e,PG)}const HG=new Map([[_.SANDWICH_SUM,fG],[_.X_SUM,mG],[_.SHORTSIGHTED_X_SUM,EG],[_.BROKEN_X_SUM,CG],[_.SHIFTED_X_SUM,bG],[_.SKYSCRAPERS,IG],[_.X_SUM_SKYSCRAPERS,wG],[_.X_INDEX,pG],[_.BATTLEFIELD,yG],[_.SANDWICH_SUM_XOR_X_SUM,hG],[_.RISING_STREAK,OG],[_.OUTSIDE_CONSECUTIVE_SUM,AG],[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,GG],[_.LOOPWICHES,SG],[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,LG],[_.CHAOS_CONSTRUCTION_X_INDEX_REGION,DG],[_.PENTOMINO_BORDER_COUNT,zG],[_.LITTLE_KILLER_SUM,TG],[_.LITTLE_KILLER_PRODUCT,kG],[_.X_OMIT_LITTLE_KILLER_SUM,MG],[_.NEGATORS_LITTLE_KILLER_SUM,FG]]);function WG(t,e){return Xn(t,e,HG)}function C_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=n(o,s);r+=l}return r}function BG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const s=me(o,$.SASHIGANE),l=me(o,$.SASHIGANE_BENDS),u=xe(r),d=Ze(r,$.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${d}, ${s}, ${l});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function YG(t,e){return C_(t,e,BG)}function jG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+Ct(o).join(",")+"]",u=me(o,$.CELL_CENTER_LOOP),d=xe(r);return`constraint thermo_sightline_loop_arrow_p(${l}, ${u}, ${d});
`}function KG(t,e){return C_(t,e,jG)}function VG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+Ct(o).join(",")+"]",u=me(o,$.CELL_CENTER_LOOP),d=xe(r);return`constraint internal_loop_skyscrapers_p(${l}, ${u}, ${d});
`}function XG(t,e){return C_(t,e,VG)}const qG=new Map([[_.SASHIGANE_ARROW_POINTS_TO_BEND,YG],[_.THERMO_SIGHTLINE_LOOP_ARROW,KG],[_.INTERNAL_LOOP_SKYSCRAPERS,XG]]);function ZG(t,e){return Xn(t,e,qG)}function QG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i);return`constraint ${n}(${o});
`}function qp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=QG(o,s,n);r+=l}return r}const JG={allow_var:!0,allow_interval:!0,allow_int_list:!1};function b_(t,e,n,r=JG){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function e$(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const s=xe(o);let l=e.value;if(l||(l=r),!l)return"";const u=parseInt(l);return`constraint ${n}(${s}, ${u});
`}function Zp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=e$(s,l,n,r);i+=u}return i}function ql(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const s=xe(o),u=Pl(t,o).map(h=>me(h,n)),d=Ze(o,n);return`constraint ${r}(${u.join(", ")}, ${d}, ${s});
`}function I_(t,e,n,r){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=ql(s,l,n,r);i+=u}return i}function t$(t,e){return qp(t,e,"odd_p")}function n$(t,e){return qp(t,e,"even_p")}function r$(t,e){return Zp(t,e,"low_digit_p","5")}function i$(t,e){return Zp(t,e,"high_digit_p","5")}function o$(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),s=t.getNeighboorCells(i),l=me(s,$.BOARD);return`constraint ${n}(${l}) == ${o};
`}function Qp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=o$(o,s,n);r+=l}return r}function s$(t,e){return Qp(t,e,"odd_count")}function a$(t,e){return Qp(t,e,"even_count")}function l$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o);l.push(o);const u=me(l,$.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function c$(t,e){return ze(t,e,l$)}function u$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${me(l,$.BOARD)}, ${s});
`}function d$(t,e){return ze(t,e,u$)}function _$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${me(l,$.BOARD)}, ${s});
`}function f$(t,e){return ze(t,e,_$)}function g$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=e.getRow(o.r),l=me(s,$.BOARD),u=o.c+1;return`constraint indexing_column_p(${l}, ${u});
`}function h$(t,e){let n=ze(t,e,g$);if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_INDEXING_COLUMN_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${_.ALL_INDEXING_COLUMN_GIVEN}
`;for(const s of o.getAllCells()){if(Ko(i,s))continue;const u=o.getRow(s.r),d=me(u,$.BOARD),g=s.c+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function v$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=e.getCol(o.c),l=me(s,$.BOARD),u=o.r+1;return`constraint indexing_column_p(${l}, ${u});
`}function p$(t,e){let n=ze(t,e,v$);if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_INDEXING_ROW_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${_.ALL_INDEXING_ROW_GIVEN}
`;for(const s of o.getAllCells()){if(Ko(i,s))continue;const u=o.getCol(s.c),d=me(u,$.BOARD),g=s.r+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function m$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=o.r+1,u=o.c+1;if(o.region!==null){const g=o.region+1;return`constraint ${s} == ${l} \\/ ${s} == ${u} \\/ ${s} == ${g};
`}return`constraint ${s} == ${l} \\/ ${s} == ${u};
`}function E$(t,e){return ze(t,e,m$)}function C$(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),l=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),d=e.getCell(i.r,i.c+1);if(!s||!l||!u||!d)return"";const g=xe(s),h=xe(l),v=xe(u),m=xe(d);return`constraint groups_opposite_parity_p([${g},${h}], [${v},${m}]);
`}function b$(t,e){return ze(t,e,C$)}function I$(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),[s,l,u,d]=f_(t,i);return`constraint ${n}(${o}, ${s}, ${l}, ${u}, ${d});
`}function w_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=I$(o,s,n);r+=l}return r}function w$(t,e){return w_(t,e,"is_watchtower_p")}function y$(t,e){return w_(t,e,"is_not_watchtower_p")}function O$(t,e){return w_(t,e,"farsight_p")}function A$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),[l,u,d,g]=f_(e,o);return`constraint radar_p(${s}, ${l}, ${u}, ${d}, ${g}, 9);
`}function x$(t,e){let n=ze(t,e,A$);if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_RADARS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${_.ALL_RADARS_GIVEN}
`;for(const s of o.getAllCells()){if(Ko(i,s))continue;const u=xe(s),[d,g,h,v]=f_(o,s),m=`constraint not radar_p(${u}, ${d}, ${g}, ${h}, ${v}, 9);
`;n+=m}return n}function S$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=me(l,$.BOARD),g=me(u,$.BOARD),[h,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${d}, ${g}, ${h}, ${v}, ${s});
`}function N$(t,e){return ze(t,e,S$)}function Jp(t,e,n){const r=e.constraints,i=Object.values(r);let o="";const s=i.map(u=>u.cell),l=new Set(s.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of i){const d=u.cell,g=t.getCell(d.r,d.c);if(!g)continue;const h=xe(g),v=t.getOrthogonallyAdjacentCells(g).filter(b=>!l.has(b)),m=me(v,$.BOARD),E=`constraint ${n}(${m}, ${h});
`;o+=E}return o}function L$(t,e){const n=t.puzzle.grid;return Jp(n,e,"maximum_p")}function R$(t,e){const n=t.puzzle.grid;return Jp(n,e,"minimum_p")}function D$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(g=>g.cell),l=new Set(s.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${Ct([...l]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${d}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}function T$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(m=>m.cell),l=new Set(s.map(m=>n.getCell(m.r,m.c)).filter(m=>!!m)),u=n.getAllCells().filter(m=>!l.has(m)),g=`${Ct([...l]).join(`,
	`)}`,v=`${Ct([...u]).join(`,
	`)}`;return o+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,o+=`array[int] of var int: not_reverse_counting_circles = [
	${v}
];
`,o+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,o}function k$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(v=>v.cell),l=new Set(s.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${Ct([...l]).join(`,
	`)}`,h=`${jo([...l],$.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${$.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${d}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${h}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${$.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const v of n.getAllCells()){if(l.has(v))continue;const m=Ze(v,$.COUNTING_CIRCLES_COLORS);o+=`constraint ${m} == 0;
`}for(const v of i){const m=v.cell,E=n.getCell(m.r,m.c);if(!E)continue;const b=xe(E),I=Ze(E,$.COUNTING_CIRCLES_COLORS),w=v.value;w?o+=`constraint ${I} == ${w};
`:o+=`constraint ${I} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${b}, ${I}) == ${b};
`}return o+=`
`,o}function M$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(g=>g.cell),l=new Set(s.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${Ct([...l]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${d}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function U$(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),l=Pl(t,i).map(d=>me(d,$.BOARD));return`constraint ${n}(${l.join(", ")}, ${o});
`}function em(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=U$(t,o,n);r+=s}return r}function G$(t,e){const n=t.puzzle.grid;return em(n,e,"seen_even_count_p")}function $$(t,e){const n=t.puzzle.grid;return em(n,e,"seen_odd_count_p")}function F$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getCellsByKnightMove(o),u=me(l,$.BOARD),d=r.value??"5",g=b_(t,d,n);if(!g)return"";let h="";const v=g[1];return h+=g[0],h+=`constraint cell_knights_whisper_p(${s}, ${u}, ${v});
`,h}function P$(t,e){return ze(t,e,F$)}function z$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Ze(o,$.YIN_YANG)} == 1;
`:""}function H$(t,e){return ze(t,e,z$)}function W$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint yin_yang_minesweeper_p(${me(u,$.YIN_YANG)}, ${s});
`}function B$(t,e){return ze(t,e,W$)}function Y$(t,e){return I_(t,e,$.YIN_YANG,"yin_yang_seen_unshaded_p")}function j$(t,e){return I_(t,e,$.YIN_YANG,"yin_yang_seen_shaded_p")}function K$(t,e){return I_(t,e,$.YIN_YANG,"yin_yang_seen_same_shade_p")}function V$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Ze(o,$.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),d=me(u,$.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${l}, ${d});
`}function X$(t,e){return ze(t,e,V$)}function q$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o);return`constraint count(${me(l,$.YIN_YANG)}, 1) == ${s};
`}function Z$(t,e){return ze(t,e,q$)}function Q$(t,e){let n=`
% ${e.tool_id}
`;const r=e.constraints,i=zl(Object.values(r)),o=t.puzzle.grid;for(const s of i.values()){if(s.length<=1)continue;const u=s.map(g=>g.cell).map(g=>o.getCell(g.r,g.c)).filter(g=>g!==void 0),d=me(u,$.YIN_YANG);n+=`constraint all_equal(${d});
`}return n}function J$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),d=e.getCol(o.c),g=me(u,$.TWO_CONTIGUOUS_REGIONS),h=me(d,$.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${s}, ${l});
`}function eF(t,e){return ze(t,e,J$)}function tF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=me(l,$.UNKNOWN_REGIONS),g=me(u,$.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${d}, ${g}, ${s});
`}function nF(t,e){return ze(t,e,tF)}function rF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Ze(o,$.NURIMISAKI),l=e.getOrthogonallyAdjacentCells(o);let d=`constraint nurimisaki_unshaded_endpoint_p(${me(l,$.NURIMISAKI)}, ${s});
`;return d+=ql(e,r,$.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),d}function iF(t,e){let n=ze(t,e,rF);if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const s of o.getAllCells()){if(Ko(i,s))continue;const u=Ze(s,$.NURIMISAKI),d=o.getOrthogonallyAdjacentCells(s),h=`constraint not nurimisaki_unshaded_endpoint_p(${me(d,$.NURIMISAKI)}, ${u});
`;n+=h}return n}function oF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Ze(o,$.SASHIGANE),u=Ze(o,$.SASHIGANE_BENDS);let d=`constraint sashigane_bend_region_count_p(${s}, ${l}, sashigane);
`;return d+=`constraint ${u} = true;
`,d}function sF(t,e){return ze(t,e,oF)}function aF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Ze(o,$.SASHIGANE),l=r.value;if(!l)return"";const u=parseInt(l);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function lF(t,e){return ze(t,e,aF)}function cF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Ze(o,$.CELL_CENTER_LOOP)} == 1;
`:""}function uF(t,e){return ze(t,e,cF)}function dF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Ze(o,$.CELL_CENTER_LOOP)} == 0;
`:""}function _F(t,e){return ze(t,e,dF)}function fF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint sum(${me(u,$.CELL_CENTER_LOOP)}) == ${s};
`}function gF(t,e){return ze(t,e,fF)}function hF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Ze(o,$.CAVE_SHADING),u=Pl(e,o),d=[];for(const h of u){const v=me(h,$.CAVE_SHADING);d.push(v)}return`constraint cave_clue_p(${s}, ${l}, ${d[0]}, ${d[1]}, ${d[2]}, ${d[3]});
`}function vF(t,e){return ze(t,e,hF)}function pF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Ze(o,$.CAVE_SHADING),u=Ze(o,$.CAVE_REGIONS),d=Pl(e,o),g=[];for(const v of d){const m=me(v,$.CAVE_SHADING);g.push(m)}return`constraint cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(${s}, ${l}, ${u}, ${$.CAVE_REGIONS}, ${g[0]}, ${g[1]}, ${g[2]}, ${g[3]});
`}function mF(t,e){return ze(t,e,pF)}function EF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=r.value;if(!s)return"";const l=parseInt(s);let u="";const d=xe(o),g=Ze(o,$.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(o),v=me(h,$.BOARD),m=me(h,$.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${d});
`;const E=e.getCellsByKnightMove(o),b=me(E,$.BOARD),I=me(E,$.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${b}, ${I}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${d});
`;const w=[Fe.NE,Fe.NW,Fe.SE,Fe.SW],A=[];for(const G of w)e.getCellsInDirection(o.r,o.c,G).forEach(M=>A.push(M));const T=me(A,$.BOARD),k=me(A,$.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${k}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${d});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${l};
`,u}function CF(t,e){return ze(t,e,EF)}function bF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=r.value;if(!s)return"";const l=parseInt(s);let u="";const d=xe(o),g=Ze(o,$.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(o),v=me(h,$.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${g}) >= ${l};
`;const m=[Fe.N,Fe.S,Fe.E,Fe.W],E=[];for(const b of m){const I=e.getCellsInDirection(o.r,o.c,b);if(!I.length)continue;const w=me(I,$.BOARD),A=me(I,$.UNKNOWN_REGIONS),T=`in_arrow_${n}_${b}`,k=`in_arrow_${n}_${b}[1]`;E.push(k),u+=`array[index_set(${w})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${T}, ${d}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${l};
`,u}function IF(t,e){return ze(t,e,bF)}function wF(t,e,n,r){return ql(e,r,$.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function yF(t,e){return ze(t,e,wF)}function OF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Ze(o,$.UNKNOWN_REGIONS),d=[...e.getNeighboorCells(o)],g=me(d,$.UNKNOWN_REGIONS);return`constraint chaos_construction_neighbour_cells_same_region_count_p(${s}, ${l}, ${g});
`}function AF(t,e){return ze(t,e,OF)}function xF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function SF(t,e){return ze(t,e,xF)}function NF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function LF(t,e){return ze(t,e,NF)}function RF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${Ze(o,$.CONNECT_FOUR)});
`:""}function DF(t,e){return ze(t,e,RF)}function TF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${Ze(o,$.CONNECT_FOUR)});
`:""}function kF(t,e){return ze(t,e,TF)}function MF(t,e){let n="";const r=e.constraints,i=t.puzzle.grid,o=Object.values(r).map(d=>d.cell),s=new Set(o.map(d=>i.getCell(d.r,d.c)).filter(d=>!!d)),l=me([...s],$.NURIKABE_REGIONS);n+=`constraint all_different(${l});
`;let u=0;for(const[d,g]of Object.entries(r)){const h=g.cell,v=i.getCell(h.r,h.c);if(!v)continue;const m=g.value;if(!m)continue;const E=b_(t,m,d);if(!E)continue;const b=E[1];n+=E[0];const I=Ze(v,$.NURIKABE_REGIONS);n+=`constraint nurikabe_island_product_of_sum_and_size_p(${$.BOARD}, ${$.NURIKABE_REGIONS}, ${I}, ${b});
`,u+=1}return n+=`constraint count_unique_values(array1d(${$.NURIKABE_REGIONS})) == ${u+1};
`,n}function UF(t,e,n,r){return ql(e,r,$.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function GF(t,e){return ze(t,e,UF)}function $F(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=xe(o),l=Ze(o,$.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${$.NURIKABE_REGIONS}, ${l}, ${s});
`}function FF(t,e){return ze(t,e,$F)}function PF(t,e){let n="";const r=e.constraints,i=zl(Object.values(r)),o=t.puzzle.grid;for(const d of i.values())if(!(d.length<=1))for(const[g,h]of d.flatMap((v,m)=>d.slice(m+1).map(E=>[v,E]))){const v=g.cell,m=h.cell,E=o.getCell(v.r,v.c),b=o.getCell(m.r,m.c);if(!E||!b)continue;const I=Ze(E,$.BOARD),w=Ze(b,$.BOARD);n+=`constraint ${I} == ${w};
`}const l=[...i.values()].map(d=>d[0].cell).map(d=>o.getCell(d.r,d.c)).filter(d=>d!==void 0),u=me(l,$.BOARD);return n+=`constraint alldifferent(${u});
`,n}function zF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(h=>h.cell),l=new Set(s.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),d=`${jo([...l],$.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_size_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_size_clues);
`;for(const h of Object.values(r)){const v=h.cell,m=n.getCell(v.r,v.c);if(!m)continue;const E=xe(m),b=Ze(m,$.SHIKAKU_REGIONS),I=Ze(m,$.SHIKAKU_WIDTH),w=Ze(m,$.SHIKAKU_HEIGHT);o+=`constraint shikaku_region_size_p(${$.SHIKAKU_REGIONS}, ${b}, ${E}, ${I}, ${w});
`}return e.negative_constraints&&!!e.negative_constraints[_.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE]&&(o+=`
% ${_.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${$.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`),o}function HF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(v=>v.cell),l=new Set(s.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${jo([...l],$.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_sum_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,m]of Object.entries(r)){const E=m.cell,b=n.getCell(E.r,E.c);if(!b)continue;const I=Ze(b,$.SHIKAKU_REGIONS),w=m.value??"",A=b_(t,w,v,g);if(!A)continue;const T=A[1];o+=A[0],o+=`constraint shikaku_region_sum_p(${$.BOARD}, ${$.SHIKAKU_REGIONS}, ${I}, ${T});
`}return e.negative_constraints&&!!e.negative_constraints[_.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE]&&(o+=`
% ${_.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${$.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`),o}function WF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";for(const[s,l]of i.entries()){const u=l.cell,d=n.getCell(u.r,u.c);if(!d)continue;const g=xe(d),h=Ze(d,$.BYOKC_GRID);o+=`constraint ${h} == ${s+1};
`,o+=`constraint byok_cage_cell_size_p(${$.BYOKC_GRID}, ${g}, ${h});
`}return o}function BF(t,e){const n=t.puzzle.grid,r=e.constraints;let i="";for(const s of Object.values(r)){const l=s.cell,u=n.getCell(l.r,l.c);if(!u)continue;const d=Ze(u,$.BYOKC_GRID);i+=`constraint byok_not_cage_cell_p(${d});
`}if(!e.negative_constraints)return i;if(!!e.negative_constraints[_.ALL_SQUARES_GIVEN]){i+=`
% ${_.ALL_SQUARES_GIVEN}
`;for(const s of n.getAllCells()){if(Ko(r,s))continue;const d=`constraint ${Ze(s,$.BYOKC_GRID)} > 0;
`;i+=d}}return i}const YF=new Map([[_.ODD,t$],[_.EVEN,n$],[_.LOW_DIGIT,r$],[_.HIGH_DIGIT,i$],[_.ODD_MINESWEEPER,s$],[_.EVEN_MINESWEEPER,a$],[_.DIAGONALLY_ADJACENT_SUM,f$],[_.ORTHOGONAL_SUM,d$],[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,c$],[_.FRIENDLY_CELL,E$],[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,b$],[_.WATCHTOWER,w$],[_.NOT_WATCHTOWER,y$],[_.FARSIGHT,O$],[_.RADAR,x$],[_.INDEXING_COLUMN,h$],[_.INDEXING_ROW,p$],[_.SANDWICH_ROW_COL_COUNT,N$],[_.SEEN_EVEN_COUNT,G$],[_.SEEN_ODD_COUNT,$$],[_.CELL_KNIGHT_WHISPERS,P$],[_.YIN_YANG_SHADED_CELL,H$],[_.YIN_YANG_MINESWEEPER,B$],[_.YIN_YANG_SEEN_UNSHADED_CELLS,Y$],[_.YIN_YANG_SEEN_SHADED_CELLS,j$],[_.YIN_YANG_SEEN_SAME_SHADE_CELLS,K$],[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,X$],[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,Z$],[_.YIN_YANG_LABELED_SHADE_CELL,Q$],[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,eF],[_.SEEN_REGION_BORDERS_COUNT,nF],[_.NURIMISAKI_UNSHADED_ENDPOINTS,iF],[_.NURIKABE_SEEN_WATERWAY_CELLS,GF],[_.NURIKABE_ISLAND_SIZE_CELL,FF],[_.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,MF],[_.SASHIGANE_BEND_REGION_COUNT,sF],[_.SASHIGANE_REGION_SUM,lF],[_.CELL_ON_THE_LOOP,uF],[_.CELL_NOT_ON_THE_LOOP,_F],[_.COUNT_LOOP_NEIGHBOUR_CELLS,gF],[_.CAVE_CLUE,vF],[_.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,mF],[_.CHAOS_CONSTRUCTION_CHESS_SUMS,CF],[_.CHAOS_CONSTRUCTION_ARROW_KNOTS,IF],[_.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,yF],[_.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT,AF],[_.BYOK_CAGE_SIZE,WF],[_.BYOK_NOT_CAGE_CELL,BF],[_.DIRECTED_PATH_START,SF],[_.DIRECTED_PATH_END,LF],[_.CONENCT_FOUR_RED,DF],[_.CONNECT_FOUR_YELLOW,kF],[_.MAXIMUM,L$],[_.MINIMUM,R$],[_.COUNTING_CIRCLES,D$],[_.REVERSE_COUNTING_CIRCLES,T$],[_.COLORED_COUNTING_CIRCLES,k$],[_.UNIQUE_CELLS,M$],[_.SHIKAKU_REGION_SIZE,zF],[_.SHIKAKU_REGION_SUM,HF],[_.TELEPORT,PF]]);function jF(t,e){return Xn(t,e,YF)}function qn(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=n(o,s);r+=l}return r}function KF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.UNKNOWN_REGIONS),s=e.directions,l=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),v=me(h,$.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_different(${g}, ${o})`).join(" + ")} == ${i};
`}function VF(t,e){return qn(t,e,KF)}function XF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.UNKNOWN_REGIONS),s=e.directions,l=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),v=me(h,$.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_uninterrupted(${g}, ${o})`).join(" + ")} + 1 == ${i};
`}function qF(t,e){return qn(t,e,XF)}function ZF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.YIN_YANG),s=e.directions;let l="";for(const u of s){const d=t.getCellsInDirection(r.r,r.c,u),g=me(d,$.BOARD),h=me(d,$.YIN_YANG);l+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${g}, ${h}) == ${i};
`}return l}function QF(t,e){return qn(t,e,ZF)}function JF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=me(u,$.YIN_YANG);s+=`constraint count(${d}, 1) == ${i};
`}return s}function eP(t,e){let n=qn(t,e,JF);if(!e.negative_constraints||!!!e.negative_constraints[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const s of o.getAllCells()){const l=Ko(i,s),u=l?l.directions:[],d=xe(s),g=[Fe.E,Fe.N,Fe.S,Fe.W];for(const h of g){if(u.includes(h))continue;const v=o.getCellsInDirection(s.r,s.c,h),m=me(v,$.YIN_YANG);n+=`constraint count(${m}, 1) != ${d};
`}}return n}function tP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.YIN_YANG),s=e.directions,l=[];for(const d of s){const g=t.getCellsInDirection(r.r,r.c,d),h=me(g,$.YIN_YANG),v=me(g,$.FILLOMINO_REGIONS);l.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${h}, ${v})`)}return l.length?`constraint ${l.join(" + ")} == ${i};
`:""}function nP(t,e){return qn(t,e,tP)}function rP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count(${me(d,$.NURIKABE_SHADING)}, 1)`;s.push(h)}return`constraint ${s.join(" + ")} = ${i};
`}function iP(t,e){return qn(t,e,rP)}function oP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${me(d,$.CELL_CENTER_LOOP)})`;s.push(h)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function sP(t,e){return qn(t,e,oP)}function aP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.GALAXY_REGIONS),s=e.directions,l=[];for(const d of s){const g=t.getCellsInDirection(r.r,r.c,d),v=`count(${me(g,$.GALAXY_REGIONS)}, ${o})`;l.push(v)}return l.length?`constraint ${l.join(" + ")} = ${i};
`:""}function lP(t,e){return qn(t,e,aP)}function cP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),g="["+Ct(u).join(",")+"]";s+=`constraint hot_arrows_p(${g}, ${i});
`}return s}function uP(t,e){return qn(t,e,cP)}function dP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=me(u,$.BOARD);s+=`constraint cold_arrows_p(${d}, ${i});
`}return s}function _P(t,e){return qn(t,e,dP)}function fP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.CONNECT_FOUR),s=e.directions,l=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g);l.push(...h)}return l.length===0?"":`constraint count(${me(l,$.CONNECT_FOUR)}, ${o}) == ${i};
`}function gP(t,e){return qn(t,e,fP)}function hP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=Ze(r,$.UNKNOWN_REGIONS),s=e.directions;let l="";for(const u of s){const d=t.getCellsInDirection(r.r,r.c,u),g=me(d,$.UNKNOWN_REGIONS);l+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${g});
`}return l}function vP(t,e){return qn(t,e,hP)}function pP(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u);if(d.length!=0){if(u===Fe.N||u===Fe.S){const g=u===Fe.N?0:-1,v=`count(${"["+d.map(m=>`${$.SHADED_BOUNDARIES_VERTICAL}[${m.r+g}, ${m.c}]`).join(",")+"]"}, true)`;s.push(v)}if(u===Fe.E||u===Fe.W){const g=u==Fe.W?0:-1,v=`count(${"["+d.map(m=>`${$.SHADED_BOUNDARIES_HORIZONTAL}[${m.r}, ${m.c+g}]`).join(",")+"]"}, true)`;s.push(v)}}}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function mP(t,e){return qn(t,e,pP)}const EP=new Map([[_.HOT_ARROWS,uP],[_.COLD_ARROWS,_P],[_.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,VF],[_.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,qF],[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,QF],[_.LOOP_CELL_COUNT_ARROWS,sP],[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,nP],[_.YIN_YANG_COUNT_SHADED_CELLS,eP],[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,lP],[_.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,iP],[_.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,gP],[_.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,vP],[_.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS,mP]]);function CP(t,e){return Xn(t,e,EP)}function bP(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=Wt(e,`${t}`),e}function IP(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=Wt(e,`${t}`),e}function wP(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=Wt(e,`${t}`),e}function yP(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=Wt(e,`${t}`),e}function OP(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.LITS_SHADING,s=$.LITS_REGIONS,l=$.CAVE_REGIONS;let u=`
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
`);for(const g of d){const h=r.getRegion(g),m=`constraint count_eq(${me(h,$.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function AP(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.CAVE_SHADING,s=$.BOARD_REGIONS,l="renban_cave_regions";let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint renban_cave_regions_p(${o}, ${s}, ${l});
`,u+=`constraint renban_caves_p(${$.BOARD}, ${l});
`,u}function xP(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.BOARD,s=$.CAVE_REGIONS;let l=`
% ${e}
`;return l+=`constraint cave_wall_suguru_p(${o}, ${s});
`,l}function SP(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.BOARD,s=$.CAVE_SHADING,l=$.CAVE_CELLS_FILLOMINO_REGIONS;let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_cells_fillomino_p(${o}, ${s}, ${l});
`,u}function NP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(w=>w.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.CAVE_SHADING,l=$.CAVE_REGIONS;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_p(${s}, ${l});
`,e.negative_constraints&&(!!e.negative_constraints[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]&&(u+=wP(_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),!!e.negative_constraints[_.CAVE_CELLS_ARE_ODD]&&(u+=bP(_.CAVE_CELLS_ARE_ODD)),!!e.negative_constraints[_.CAVE_WALLS_ARE_EVEN]&&(u+=IP(_.CAVE_WALLS_ARE_EVEN)),!!e.negative_constraints[_.CAVE_LITS]&&(u+=OP(t,_.CAVE_LITS)),!!e.negative_constraints[_.RENBAN_CAVES]&&(u+=AP(t,_.RENBAN_CAVES)),!!e.negative_constraints[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]&&(u+=yP(_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),!!e.negative_constraints[_.CAVE_WALL_SUGURU]&&(u+=xP(t,_.CAVE_WALL_SUGURU)),!!e.negative_constraints[_.CAVE_CELLS_FILLOMINO]&&(u+=SP(t,_.CAVE_CELLS_FILLOMINO))),u}function LP(t){let e="";return e+=`constraint connect_four_draw_p(${$.CONNECT_FOUR});
`,e=Wt(e,`${t}`),e}function RP(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${$.BOARD}, ${$.CONNECT_FOUR});
`,e=Wt(e,`${t}`),e}function DP(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${$.BOARD}, ${$.CONNECT_FOUR}, 3);
`,e=Wt(e,`${t}`),e}function TP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s="connect_four";let l=`
% ${i}
`;if(l+=`% 1 - Red, 2 - Yellow
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,!e.negative_constraints)return l;const u=!!e.negative_constraints[_.CONNECT_FOUR_DRAW],d=!!e.negative_constraints[_.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],g=!!e.negative_constraints[_.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(l+=LP(_.CONNECT_FOUR_DRAW)),d&&(l+=DP(_.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),g&&(l+=RP(_.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),l}function kP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(b=>b.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.GALAXY_REGIONS,l=$.GALAXY_SIZES,u=r.nCols*r.nRows;let d=`
% ${i}
`;if(d+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${s};
`,d+=`constraint galaxy_restrict_numbering_p(${s});
`,d+=`array[0..${u}] of var 0..${u}: ${l};
`,d+=`constraint galaxy_sizes_p(${s}, ${l});
`,d+=`constraint gallaxy_connected_regions_p(${s});
`,!e.negative_constraints)return d;const g=!!e.negative_constraints[_.EVERY_CELL_BELONGS_TO_A_GALAXY],h=!!e.negative_constraints[_.TWO_SYMMETRIC_GALAXIES],v=!!e.negative_constraints[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS],E=!!e.negative_constraints[_.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY];return g&&(d+=`
% ${_.EVERY_CELL_BELONGS_TO_A_GALAXY}
`,d+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`),v&&(d+=`
% ${_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY}
`,d+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`),h&&(d+=`
% ${_.TWO_SYMMETRIC_GALAXIES}
`,d+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`),m&&(d+=`
% ${_.ONE_GALAXY_IS_A_GERMAN_WHISPERS}
`,d+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`),E&&(d+=`
% ${_.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY}
`,d+=`constraint no_repeats_in_galaxy_p(board, galaxy_regions);
`),d}function MP(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function UP(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function GP(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function $P(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function FP(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(m=>m.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=e.negative_constraints,l=s?!!s[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${i}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${l});
`,!s)return u;const d=!!s[_.NOT_LOOP_SIZED_REGIONS],g=!!s[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],h=!!s[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],v=!!s[_.MODULAR_LOOP];return g&&(u+=UP(_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),h&&(u+=MP(_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),d&&(u+=GP(t,_.NOT_LOOP_SIZED_REGIONS)),v&&(u+=$P(t,_.MODULAR_LOOP)),u}function PP(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=Wt(e,`${t}`),e}function zP(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=Wt(e,`${t}`),e}function HP(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=Wt(e,`${t}`),e}function WP(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=Wt(e,`${t}`),e}function BP(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=Wt(n,`${e}`),n}function Vt(t,e,n){return t*n+e+1}function YP(t){const e=t.grid;function n(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r+h,u.c,e.nCols);d.push([g,v]),d.push([v,g])}return d}function r(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r,u.c+h,e.nCols);d.push([g,v]),d.push([v,g])}return d}const i=[],s=t.elementsDict.get(_.MAZE_WALL);if(!s||!s.constraints)return i;for(const l of Object.values(s.constraints)){const u=l.coords;if(u.length===1){const d=u[0],h=cl(d).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Vt(h[0].r,h[0].c,e.nCols),m=Vt(h[3].r,h[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Vt(h[1].r,h[1].c,e.nCols),m=Vt(h[2].r,h[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let d=0;d<u.length-1;d++){const g=iR(Xv(u[d],u[d+1]),.5),v=ul(g).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let b=n(m,E);i.push(...b),b=n(E,m),i.push(...b)}else if(m.c===E.c){let b=r(m,E);i.push(...b),b=r(E,m),i.push(...b)}}}return i}function jP(t){const e=t.grid,n=[],i=t.elementsDict.get(_.ONE_WAY_DOOR);if(!i||!i.constraints)return n;for(const o of Object.values(i.constraints)){const l=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,d]=l,g=o.value,h=Vt(u.r,u.c,e.nCols),v=Vt(d.r,d.c,e.nCols);g==="<"?n.push([h,v]):g===">"&&n.push([v,h])}return n}function KP(t){const e=[];for(const n of t.getAllCells()){const r=Vt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const s=Vt(o.r,o.c,t.nCols);e.push([r,s])}}return e}function VP(t){const e=t.grid,n=[],r=[],o=t.elementsDict.get(_.TELEPORT),s=o?Object.values(o):[];let l=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const d=zl(s);let g=1;for(const h of d.values())if(!(h.length<=1)){for(const[v,m]of h.flatMap((E,b)=>h.slice(b+1).map(I=>[E,I]))){const E=Vt(v.cell.r,v.cell.c,e.nCols),b=Vt(m.cell.r,m.cell.c,e.nCols);n.push([E,b]),n.push([b,E]),u[v.cell.r][v.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const v of h){const m=Vt(v.cell.r,v.cell.c,e.nCols);r.push(m)}g++}l=d.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:l}}function XP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(M=>M.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s="",l=KP(r);const u=YP(n),d=jP(n);u.push(...d);const g=n.elementsDict;l=l.filter(M=>!u.some(P=>M[0]===P[0]&&M[1]===P[1]));const h=VP(n);if(h.tp_edges.length){l.push(...h.tp_edges);const M=Up(h.tp_arr),P=h.tp_count;s+=`
% teleports grid
`,s+=`array[ROW_IDXS, COL_IDXS] of 0..${P}: teleports = array2d(ROW_IDXS, COL_IDXS, ${M});
`}t.edge_list=l,console.log(l);const v=r.nRows*r.nCols,m=l.length,E="["+l.map(M=>M[0]).join(",")+"]",b="["+l.map(M=>M[1]).join(",")+"]";s+=`array[int] of int: dpath_from = ${E};
`,s+=`array[int] of int: dpath_to = ${b};
`,s+=`var 1..${v}: dpath_source;
`,s+=`var 1..${v}: dpath_target;
`,s+=`array[1..${v}] of var bool: dpath_ns;
`,s+=`array[1..${m}] of var bool: dpath_es;
`,s+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,s+=`
% Direct Path no crossings
`;for(let M=0;M<r.nRows-1;M++)for(let P=0;P<r.nCols-1;P++){const te=r.getCell(M,P),ce=r.getCell(M,P+1),se=r.getCell(M+1,P),ue=r.getCell(M+1,P+1);if(!te||!ce||!se||!ue)continue;const ye=Vt(te.r,te.c,r.nCols),Z=Vt(ce.r,ce.c,r.nCols),Ie=Vt(se.r,se.c,r.nCols),Ce=Vt(ue.r,ue.c,r.nCols),Ae=[[ye,Ce],[Ce,ye],[Z,Ie],[Ie,Z]].map(Se=>l.findIndex(De=>Se[0]===De[0]&&Se[1]===De[1])).filter(Se=>Se!==-1);if(Ae.length){const Se=Ae.map(De=>`dpath_es[${De+1}]`).join(",");s+=`constraint sum([${Se}]) <= 1;
`}}const I=g.get(_.TELEPORT),w=I?Object.values(I):[];if(h.tp_count>0){s+=`
% At most 1 edge per teleporter
`;for(const M of w){const P=M.cell,te=r.getCell(P.r,P.c);if(!te)continue;const ce=r.getNeighboorCells(te),se=Vt(te.r,te.c,r.nCols),ue=[];for(const Z of ce){if(w.some(Oe=>Oe.cell.r===Z.r&&Oe.cell.c==Z.c&&Oe.value===M.value))continue;const Ce=Vt(Z.r,Z.c,r.nCols);ue.push([se,Ce]),ue.push([Ce,se])}const ye=ue.map(Z=>l.findIndex(Ie=>Z[0]===Ie[0]&&Z[1]===Ie[1])).filter(Z=>Z!==-1);if(ye.length){const Z=ye.map(Ie=>`dpath_es[${Ie+1}]`).join(",");s+=`constraint sum([${Z}]) <= 1;
`}}}if(!e.negative_constraints)return s;const A=!!e.negative_constraints[_.DIRECTED_PATH_IS_PARITY_LINE],T=!!e.negative_constraints[_.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],k=!!e.negative_constraints[_.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],G=!!e.negative_constraints[_.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],Y=!!e.negative_constraints[_.DIRECTED_PATH_IS_REGION_SUM_LINE];return k&&(s+=PP(_.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),A&&(s+=WP(_.DIRECTED_PATH_IS_PARITY_LINE)),T&&(s+=zP(_.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),G&&(s+=BP(n,_.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),Y&&(s+=HP(_.DIRECTED_PATH_IS_REGION_SUM_LINE)),s}function qP(t,e){const n=t.grid;let r=`
% ${e}
`;const i=$.YIN_YANG;for(const[o,s]of ei(n)){const l=xe(o),u=xe(s),d=`${i}[${o.r},${o.c}]`,g=`${i}[${s.r},${s.c}]`,h=`constraint (${d} == 1 /\\ ${g} == 1) -> abs(${l} - ${u}) >= 5;
`;r+=h}return r}function ZP(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(d=>i.region!==null&&d.region===i.region),s=Ze(i,$.BOARD),l=Ze(i,$.YIN_YANG),u=me(o,$.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${l}, ${u});
`}return n=Wt(n,`${e}`),n}function QP(t){let e=`
% ${t}
`;return e+=`constraint yin_yang_identical_digits_diagonally_belong_to_same_region_p(${$.BOARD}, ${$.YIN_YANG});
`,e}function JP(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,s+=`constraint yin_yang_p(yin_yang);
`,e.negative_constraints&&(!!e.negative_constraints[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]&&(s+=ZP(n,_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),!!e.negative_constraints[_.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]&&(s+=qP(n,_.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),!!e.negative_constraints[_.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION]&&(s+=QP(_.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION))),s}function e8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,s+=go(n,1,!0,$.DOUBLERS),s+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,s}function t8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s="negators_grid";let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,l+=go(n,1,!0,$.NEGATORS),l+=`
constraint one_of_each_digit_p(board, ${s}, ALLOWED_DIGITS);
`,l+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${s});
`,l}function n8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.INDEXER_CELLS_GRID;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,l+=go(n,2,!0,s),l+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,l+=`constraint indexer_cells_p(board, ${s}, values_grid);
`,l}function r8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of ei(n)){const s=xe(i),l=xe(o),u=Ze(i,$.NURIMISAKI),d=Ze(o,$.NURIMISAKI),g=`constraint (${u} == 0 /\\ ${d} == 0) -> abs(${s} - ${l}) >= 5;
`;r+=g}return r}function i8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,s+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[_.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(s+=r8(n,_.NURIMISAKI_PATH_GERMAN_WHISPERS)),s}function o8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function s8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,s+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[_.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(s+=o8(t,_.NURIKABE_NO_REPEATS_IN_ISLANDS)),s}function a8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,s+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,s}function l8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=Math.max(r.nCols,r.nRows),u="["+xt.range(1,s+1).join(",")+"]";let d="";return d+=`array[ROW_IDXS, COL_IDXS] of var 1..${s}: unknown_regions;
`,d+=`constraint chaos_construction_p(unknown_regions, ${u}, ${s});
`,d+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,e.negative_constraints&&!!e.negative_constraints[_.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION]&&(d+=`constraint chaos_construction_no_2x2_belongs_to_one_region_p(unknown_regions);
`),d}function c8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=$.UNKNOWN_REGIONS,l=Math.max(r.nCols,r.nRows),d="["+xt.range(1,l+1).join(",")+"]";let g=`
% ${i}
`;return g+=`array[ROW_IDXS, COL_IDXS] of var 1..${l}: ${s};
`,g+=`constraint numbered_chaos_construction_p(${$.BOARD}, ${s}, ${d}, ${l});
`,g+=`constraint no_repeats_in_unknown_regions_p(${$.BOARD}, ${s}, ALLOWED_DIGITS, ${d});
`,g}function u8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,s+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,s+=`constraint sashigane_adjacency_p(sashigane);
`,s+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,s+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,s+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,s}function d8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.FILLOMINO_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint fillomino_p(board, ${s});
`,l}function _8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${$.BOARD}, ${$.SHIKAKU_REGIONS});
`,o}function f8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.SHIKAKU_REGIONS;let l=`
% ${i}
`;const u=r.nRows,d=r.nCols;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${$.SHIKAKU_HEIGHT};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${d}: ${$.SHIKAKU_WIDTH};
`,l+=`constraint shikaku_p(${s}, ${$.SHIKAKU_WIDTH}, ${$.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[_.SHIKAKU_NO_REPEATS_IN_REGION]&&(l+=_8(t,_.SHIKAKU_NO_REPEATS_IN_REGION)),l}function g8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,s+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,s}function h8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint goldilocks_zone_p(goldilocks_regions);
`,s+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,s}function v8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=12,l=$.PENTOMINO_REGIONS;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${l};
`,u+=`constraint pentomino_tilling_p(${l});
`,u}function p8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.LITS_SHADING,l=$.LITS_REGIONS,u=$.LITS_GRID,d=$.BOARD_REGIONS,g=[...r.getUsedRegions()];g.sort();const h=Math.min(...g),v=Math.max(...g);let m=`
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
`);for(const E of g){const b=r.getRegion(E),w=`constraint count_eq(${me(b,$.LITS_SHADING)}, 1, 4);
`;m+=w}return m}function m8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.NORINORI_SHADING;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,l+=`constraint norinori_p(${$.BOARD_REGIONS}, ${s});
`,r.getUsedRegions().size&&(l+=`
% Exactly 2 shaded cells per region (known regions)
`),l+=Hl(n,2,1,$.NORINORI_SHADING),l}function E8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.NORINORI_SHADING,l=$.STAR_BATTLE;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,u+=h_(2,1,l),u+=g_(2,1,l),u+=Hl(n,1,1,l),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${l});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${s}, ${l});
`,u}function C8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.LITS_SHADING,l=$.STAR_BATTLE,u=$.LITS_WHITE_BLACK_STAR_BATTLE;let d=`
% ${i}
`;return d+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,d+=go(n,2,1,$.STAR_BATTLE),d+=`
% Star battle stars can't touch orthogonally or diagonally
`,d+=`constraint star_battle_no_touching_p(${l});
`,d+=`
`,d+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,d+=`
% 1 white star per row, column, region
`,d+=go(n,1,1,$.LITS_WHITE_BLACK_STAR_BATTLE),d+=`
% 1 black star per row, column, region
`,d+=go(n,1,2,$.LITS_WHITE_BLACK_STAR_BATTLE),d+=`constraint black_and_white_star_battle_p(${l}, ${u});
`,d+=`constraint lits_black_and_white_star_battle_p(${s}, ${u});
`,d}function b8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.SUGURU_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint chaos_construction_suguru_p(board, ${s});
`,l}function I8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.BYOKC_GRID;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint byok_no_repeats_in_regions(${$.BOARD}, ${s});
`,l}function w8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(b=>b.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=$.SHADED_BOUNDARIES_REGIONS,l=$.SHADED_BOUNDARIES_VERTICAL,u=$.SHADED_BOUNDARIES_HORIZONTAL,d=r.nRows,g=r.nCols,h=`0..${d-2}`,v=`0..${g-2}`;let m="";return m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,m+=`array[${h}, COL_IDXS] of var bool: ${l};
`,m+=`array[ROW_IDXS, ${v}] of var bool: ${u};
`,m+=`constraint shaded_boundaries_two_regions_p(${s}, ${u}, ${l});
`,e.negative_constraints&&!!e.negative_constraints[_.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN]&&(m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_vertical_p(${$.BOARD}, ${l});
`,m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_horizontal_p(${$.BOARD}, ${u});
`,m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_region_p(${$.BOARD}, ${s});
`),m}function y8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.STAR_BATTLE;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,l+=h_(2,1,s),l+=g_(2,1,s),l+=Hl(n,2,1,s),l+=`
% Star battle stars can't touch orthogonally or diagonally
`,l+=`constraint star_battle_no_touching_p(${s});
`,l}function O8(){const t=$.STAR_BATTLE;return`constraint one_star_per_galaxy_p(${$.GALAXY_REGIONS}, ${t});
`}const A8=new Map([[_.DOUBLERS,e8],[_.NEGATORS,t8],[_.INDEXER_CELLS,n8],[_.CAVE,NP],[_.CONNECT_FOUR,TP],[_.STAR_BATTLE,y8],[_.GALAXIES,kP],[_.ONE_STAR_PER_GALAXY,O8],[_.CELL_CENTER_LOOP_NO_TOUCHING,FP],[_.MAZE_DIRECTED_PATH,XP],[_.YIN_YANG,JP],[_.NURIMISAKI,i8],[_.NURIKABE,s8],[_.SHIKAKU,f8],[_.PENTOMINO_TILLING,v8],[_.CHAOS_CONSTRUCTION,l8],[_.NUMBERED_CHAOS_CONSTRUCTION,c8],[_.CHAOS_CONSTRUCTION_SUGURU,b8],[_.TWO_CONTIGUOUS_REGIONS,a8],[_.NORINORI,m8],[_.NORINORI_STAR_BATTLE,E8],[_.SASHIGANE,u8],[_.LITS,p8],[_.LITS_BLACK_WHITE_STAR_BATTLE,C8],[_.FILLOMINO,d8],[_.NEXUS,g8],[_.GOLDILOCKS_ZONE,h8],[_.BUILD_YOUR_OWN_KILLER_CAGES,I8],[_.SHADED_BOUNDARIES,w8]]);function x8(t,e){let n="";const r=e.tool_id,i=A8.get(r);if(i){const o=i(t,e);n+=o}return n}function S8(t,e,n,r){const i=r.value;return i?`constraint forbidden_adjacent_sum_p(board, ${parseInt(i)});
`:""}function N8(t,e){return ze(t,e,S8)}function L8(t,e,n,r){const i=r.value;return i?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(i)});
`:""}function R8(t,e){return ze(t,e,L8)}function D8(t,e,n,r){const i=r.value;return i?`constraint forbidden_knight_sum_p(board, ${parseInt(i)});
`:""}function T8(t,e){return ze(t,e,D8)}function k8(t,e,n,r){const i=r.value;if(!i)return"";const o=parseInt(i),s=[...e.getUsedRegions()];s.sort();const l=s.length;return`constraint lits_max_tetromino_sum_p(${$.BOARD}, ${$.LITS_GRID}, ${o}, 0..${l});
`}function M8(t,e){return ze(t,e,k8)}const U8=new Map([[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,N8],[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,R8],[_.FORBIDDEN_KNIGHT_SUM,T8],[_.LITS_MAX_TETROMINO_SUM,M8]]);function G8(t,e){return Xn(t,e,U8)}const $8=[x8,X5,jF,ZG,CP,kU,uU,oG,p5,z5,WG,J5,G8,uG,c5];function F8(t,e){let n="";const r=t.elementsDict;for(const[i,o]of r.entries())for(const s of $8){let l=s(e,o);l=Wt(l,`${i}`),n+=l}return n}function P8(){return`
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

`}function z8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${xe(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function tm(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new UM(t),[o,s]=[n.nRows,n.nCols],l=o*s;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(P8());let d=`1..${Math.max(o,s)}`;const g=t.elementsDict,h=!!g.get(_.FILLOMINO),v=!!g.get(_.HEXED_SUDOKU);return h?d=`1..${l}`:v?r=[...xt.range(1,16)]:r&&(d="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${s-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${d};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),$M(i,n),i.add(z8(t)),i.add(s5(t)),i.add(a5(t)),i.add(F8(t,i)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Xh=encodeURIComponent("4.4.2");let Nr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const ki=[];let Gu;function Is(){if(!Gu){const e=`importScripts(${JSON.stringify(Nr.workerURL)});`;Gu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Gu);t.postMessage({wasmURL:Nr.wasmURL?Nr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Xh}`,Nr.workerURL).toString(),dataURL:Nr.dataURL?Nr.dataURL.toString():new URL(`./minizinc.data?version=${Xh}`,Nr.workerURL).toString()}),ki.push({worker:t,runCount:0})}function nm(){for(;ki.length<Nr.numWorkers;)Is()}async function H8(t){if(Nr={...Nr,...t},ki.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");nm(),await Promise.race(ki.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class y_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new y_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){nm();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:l}=ki.pop();return s.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:l+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:s}=this._run(["--model-check-only"],i.options),l=[];o.onmessage=u=>{switch(u.data.type){case"error":l.push(u.data);break;case"exit":s<10?ki.push({worker:o,runCount:s}):(o.terminate(),Is()),n(l)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:s}=this._run(["--model-interface-only"],i.options),l=[];let u=null;o.onmessage=d=>{switch(d.data.type){case"error":l.push(d.data);break;case"interface":u=d.data;break;case"exit":s<10?ki.push({worker:o,runCount:s}):(o.terminate(),Is()),d.data.code===0?n(u):r(l)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:s}=this._run(o,n.options,[i]);Is();let l={},u=!1,d=null;return s.onmessage=g=>{if(l[g.data.type])for(const h of l[g.data.type])h(g.data);switch(g.data.type){case"exit":s.terminate(),u=!0,l={};break;case"error":d||(d=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),l.exit)for(const g of l.exit)g({type:"exit",code:null});l={}}},on(g,h){l[g]?l[g].add(h):l[g]=new Set([h])},off(g,h){l[g]&&l[g].delete(h)},then(g,h){const v=m=>{if(m.code===0)g(m.outputFiles[i]);else{const E=d?{message:d.message,...m}:m;if(!h)throw E;h(E)}};l.exit?l.exit.add(v):l.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Is();let o=null,s={},l=!1,u=null,d={},g="UNKNOWN";return i.onmessage=h=>{if(s[h.data.type])for(const v of s[h.data.type])v(h.data);switch(h.data.type){case"exit":i.terminate(),l=!0,s={};break;case"error":o||(o=h.data);break;case"statistics":d={...d,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!l,cancel(){if(!l){if(l=!0,i.terminate(),s.exit)for(const h of s.exit)h({type:"exit",code:null});s={}}},on(h,v){s[h]?s[h].add(v):s[h]=new Set([v])},off(h,v){s[h]&&s[h].delete(v)},then(h,v){const m=E=>{if(E.code===0)h({status:g,solution:u,statistics:d});else{const b=o?{message:o.message,...E}:E;if(!v)throw b;v(b)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var W8=le('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function B8(t,e){ie(e,!1);const n=Be(),r=()=>fe(Mr,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function o(h,v,m){var E=document.createElement("a"),b=new Blob([h],{type:m});E.href=URL.createObjectURL(b),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function s(){const h=Re(Ys);return tm(h).model_str}function l(){const h=s();navigator.clipboard.writeText(h)}function u(){const h=s(),v=Yh(h);navigator.clipboard.writeText(v)}function d(){const h=fl(r()),v=s();o(v,`${h}.mzn`,"text/plain")}function g(){const h=fl(r()),v=s(),m=Yh(v);o(m,`${h}.mzn`,"text/plain")}ge(),pi(t,{title:"Minizinc File",get showModal(){return i()},set showModal(h){i(h)},children:(h,v)=>{var m=W8(),E=j(m),b=F(E,2),I=F(b,2),w=F(I,2),A=F(w,2),T=F(j(A));S(T,"href","https://play.minizinc.dev/"),_i(),W(A),W(m),Le("click",E,l),Le("click",b,u),Le("click",I,d),Le("click",w,g),N(h,m)},$$slots:{default:!0},$$legacy:!0}),oe()}function Xo(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const l=t[s];for(let u=0;u<l.length;u++){const d=e.getCell(s,u);if(!d)continue;const g=Number(l[u]),h=n.get(g);h!==void 0&&(r.push(d),i.push([h]))}}const o=Fl(r,i);Eo(o)}function Y8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),s(v,m,t[v][m])}function s(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),s(v+1,m,E),s(v-1,m,E),s(v,m+1,E),s(v,m-1,E))}const l=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,b]of v)for(const[I,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+I,T=b+w;if(m.some(([k,G])=>k===A&&G===T))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(l[v].add(m),l[m].add(v));const d=[1,4,7,9],g=new Array(i.length).fill(0);function h(v,m){for(const E of l[v])if(g[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of d)if(h(v,m)){g[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=g[v];return o}function j8(t,e){const n=e.grid,i=!!e.elementsDict.get(_.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const s=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=n.getCell(d,h);if(!v||v.given||i&&!v.given&&v.value===null)continue;const m=g[h];s.push(v),l.push(m)}}const u=Lp(s,l);Eo(u)}function K8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading",$.SHADED_BOUNDARIES_REGIONS],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Xo(o,e,r);return}}}function V8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Xo(o,e,r);return}}}function X8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const l=n[s];for(let u=0;u<l.length;u++){const d=e.getCell(s,u);if(!d)continue;r.push(d);const g=l[u];i.push([g])}}const o=Fl(r,i);Eo(o)}function q8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Xo(n,e,new Map([[0,4],[1,7],[2,9]]))}function Z8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Xo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function Q8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Xo(n,e,new Map([[1,7],[2,4],[3,9]]))}function J8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Xo(n,e,new Map([[1,7],[2,8]]))}function ez(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,s]=[e.nRows,e.nCols],l=3,u=[];for(let g=0;g<i.length;g++){const h=i[g];for(let v=0;v<h.length-1;v++){const m=e.getCell(g,v),E=e.getCell(g,v+1);if(!m||!E)continue;const b=h[v],I=h[v+1];if(b===I)continue;const w={colorId:l,p1:{r:g,c:v+1},p2:{r:g+1,c:v+1}};u.push(w)}}for(let g=0;g<s;g++)for(let h=0;h<o-1;h++){const v=e.getCell(h,g),m=e.getCell(h+1,g);if(!v||!m)continue;const E=i[h][g],b=i[h+1][g];if(E===b)continue;const I={colorId:l,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(I)}const d=po(u);br(d);return}}function tz(t){if(t===void 0)return;const e=4,n=[],r=$.SHADED_BOUNDARIES_HORIZONTAL,i=t[r];if(i)for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){if(!u[d])continue;const h={colorId:e,p1:{r:l,c:d+1},p2:{r:l+1,c:d+1}};n.push(h)}}const o=$.SHADED_BOUNDARIES_VERTICAL,s=t[o];if(s)for(let l=0;l<s.length;l++){const u=s[l];for(let d=0;d<u.length;d++){if(!u[d])continue;const h={colorId:e,p1:{r:l+1,c:d},p2:{r:l+1,c:d+1}};n.push(h)}}if(n.length){const l=po(n);br(l)}}function nz(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const v=i[g.r][g.c],m=i[h.r][h.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};o.push(E)}}}const s=po(o);br(s);return}}function rz(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions",$.BYOKC_GRID];for(const r of n){const i=t[r];if(i===void 0)continue;const o=Y8(i);if(!o)return;const s=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=e.getCell(d,h);if(!v)continue;s.push(v);const m=g[h];l.push([m])}}const u=Fl(s,l);Eo(u);return}}function iz(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(!g)continue;const h=i[g.r][g.c];if(h===0)continue;const m={colorId:h===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};o.push(m)}}const s=QD(o);br(s);return}}function oz(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let l=0;l<n.length;l++){if(!n[l])continue;const d=r[l],[g,h]=d,[v,m]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols],[E,b]=[Math.floor((h-1)/i.nCols),(h-1)%i.nCols];if(!Hs({r:v,c:m},{r:E,c:b}))continue;const A={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:b+.5}};o.push(A)}const s=po(o);br(s)}function sz(t,e){const n=e.puzzle,r=n.grid;br(n_()),j8(t,n),X8(t,r),ez(t,r),q8(t,r),Z8(t,r),nz(t,r),V8(t,r),rz(t,r),K8(t,r),iz(t,r),Q8(t,r),oz(t,e),J8(t,r),tz(t)}function az(){const{subscribe:t,set:e}=Nt(0),n=100;let r=Date.now(),i,o=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{s&&(s=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:o})}}var lz=le('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function cz(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ys,"$puzzleStore",n),i=()=>fe(hn,"$gridStore",n),o=()=>fe(w,"$timer",n),s=x(),l=x(),u=x(),d=x();let g=x(!0),h=x(!1),v=x(null),m=x(100),E=x("100"),b=x(null),I=x("IDLE");const w=az();function A(P){return P===null?"":String(P)}function T(P){const te=Math.floor(P/6e4),ce=Math.floor(P%6e4/1e3),se=Math.floor(P%1e3/100),ue=ce.toString().padStart(2,"0");return`${te}:${ue}.${se}`}function k(){O(h,!0)}function G(P){const te=parseInt(P);typeof te=="number"&&te>=1&&O(m,te)}async function Y(){O(b,0),O(I,"SOLVING...");const P=new y_;yp();const te=tm(f(s));P.addFile("test.mzn",te.model_str),w.reset(),w.start(),O(v,P.solve({options:{solver:"chuffed","num-solutions":f(m)}})),f(v).on("solution",ce=>{const se=ce.output.json;ce.type==="solution"&&f(b)!==null&&O(b,f(b)+1),sz(se,te)}),f(v).on("error",ce=>{O(u,"Solve"),O(I,"ERROR"),console.log(ce.message),w.stop(),f(v)&&f(v).cancel()}),f(v).on("warning",ce=>{O(I,"WARNING"),console.log(ce.message)}),f(v).then(ce=>{O(I,ce.status),O(u,"Solve"),w.stop()})}function M(){f(v)===null||!f(v).isRunning()?Y():f(v)!==null&&f(v).isRunning()&&(O(I,"IDLE"),O(u,"Solve"),w.stop(),f(v).cancel())}L(()=>r(),()=>{O(s,r())}),L(()=>i(),()=>{O(l,i())}),L(()=>{},()=>{O(u,"Solve")}),L(()=>o(),()=>{O(d,o())}),L(()=>f(v),()=>{f(v)&&(f(v)!==null&&f(v).isRunning()?O(u,"Stop"):O(u,"Solve"))}),be(),ge(),Gl(t,{get isOpen(){return f(g)},set isOpen(P){O(g,P)},$$slots:{"panel-header":(P,te)=>{Ul(P,{slot:"panel-header",title:"Solver",get isOpen(){return f(g)},set isOpen(ce){O(g,ce)},$$legacy:!0})},"panel-content":(P,te)=>{var ce=lz(),se=ee(ce),ue=F(se,2);B8(ue,{get showModal(){return f(h)},set showModal(dt){O(h,dt)},$$legacy:!0});var ye=F(ue,2),Z=j(ye,!0);W(ye);var Ie=F(ye,2),Ce=j(Ie,!0);W(Ie);var Oe=F(Ie,2),Ae=j(Oe);cn(Ae),S(Ae,"min",1),S(Ae,"max",200),S(Ae,"step",1),W(Oe);var Se=F(Oe,2),De=j(Se,!0);J(()=>it(De,`Solution Count: ${A(f(b))}`)),W(Se);var $e=F(Se,2),st=j($e,!0);J(()=>it(st,`Elapsed Time: ${T(f(d))}`)),W($e);var ut=F($e,2),bt=j(ut,!0);W(ut),J(()=>{it(Z,f(u)),it(Ce,`Max. Solutions: ${f(m)}`),it(bt,`Status: ${f(I)}`)}),Le("click",se,k),Le("click",ye,M),ar(Ae,()=>f(E),dt=>O(E,dt)),Le("input",Ae,()=>G(f(E))),N(P,ce)}},$$legacy:!0}),oe()}var uz=le('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function dz(t){var e=uz(),n=j(e);AM(n);var r=F(n,2),i=j(r);cz(i,{});var o=F(i,2);YT(o,{elementHandlers:zt});var s=F(o,2);hk(s,{elementHandlers:zt});var l=F(s,2);SM(l,{}),W(r),W(e),N(t,e)}var _z=ne('<path class="cursor svelte-zsq70u"></path>');function fz(t,e){ie(e,!1);const n=Be(),r=()=>fe(tn,"$toolStore",n),i=()=>fe(Ui,"$selectionStore",n),o=x(),s=x(),l=.25;function u(g){if(!g)return"";const[h,v]=[g.c,g.r];return`M${h},${v}L${h+l},${v}L${h},${v+l}Z`}L(()=>r(),()=>{O(o,zd(r()))}),L(()=>i(),()=>{O(s,u(i().lastCell))}),be(),ge();var d=_z();J(()=>{S(d,"d",f(s)),S(d,"visibility",f(o)?"visible":"hidden")}),N(t,d),oe()}var gz=ne('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function hz(t,e){ie(e,!1);let n=U(e,"gridShape",8);ge();var r=gz(),i=j(r);S(i,"x",0),S(i,"y",0),W(r),J(()=>{S(i,"width",n().nCols),S(i,"height",n().nRows)}),N(t,r),oe()}var vz=ne('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),pz=ne('<g class="grid-lines"></g>');function mz(t,e){ie(e,!1);const n=Be(),r=()=>fe(hn,"$gridStore",n),i=x();L(()=>r(),()=>{O(i,r().getAllCells())}),be(),ge();var o=pz();Qe(o,5,()=>f(i),pt,(s,l)=>{var u=vz();S(u,"width",1),S(u,"height",1),J(()=>{S(u,"x",f(l).c),S(u,"y",f(l).r)}),N(s,u)}),W(o),N(t,o),oe()}function Ez(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function Cz(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=Ez(r),o=i.length;for(let s=0;s<o;s++){const l=i[s%o],u=i[(s+1)%o],d=JSON.stringify(l),g=JSON.stringify(u);n(d,g)}}return e}function bz(t,e=0,n=!1){const r=[],i=Cz(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(E=>E[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[l,u]=s;let d=JSON.parse(l);const g=Array.from(u)[0];let h=JSON.parse(g),v=g;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const b=new Ue(d.c,d.r),I=new Ue(h.c,h.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,T=null;for(const ue of E){const ye=JSON.parse(ue),Z=new Ue(ye.c,ye.r),Ie=I.subtract(b),Ce=Z.subtract(I),Oe=Ie.perpDotProduct(Ce);w<Oe!=n&&(w=Oe,T=ye,A=ue)}if(n&&E.size>1&&o.add(v),T===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(v);const k=e*(h.c-d.c),G=e*(T.c-h.c),Y=e*(d.r-h.r),M=e*(h.r-T.r),P=M+w*G,te=k+w*Y,ce=new Ue(h.c+P,h.r+te),se=4;o.has(v)?(m.push(new Ue(ce.x-se*k,ce.y-se*G)),m.push(new Ue(ce.x-se*Y,ce.y-se*M))):m.push(ce),d=h,h=T,v=A}while(v!==g);r.push(m)}return r}function bo(t,e=0,n=!1){return bz(t,e,n).map(o=>qo(o,!0)).join("")}const Iz=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5)];function wz(t,e,n=Iz){if(e===1)return n;const r=[],i=n.length,o=0,s=360/e,l=t*s+o,u=(t+1)*s+o,d=l/(360/i),g=u/(360/i),h=Math.floor(d)%i,v=Math.ceil(d)%i,m=n[h].lerp(n[v],d%1),E=Math.floor(g)%i,b=Math.ceil(g)%i,I=n[E].lerp(n[b],g%1);r.push(m);for(let A=Math.ceil(d);A<=Math.floor(g);A++)r.push(n[A%i]);r.push(I);const w=new Ue(0,0);return r.push(w),r}function rm(t,e,n=new Ue(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),s=r?t:t/o,l=[];for(let u=0;u<e;u++){const d=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),h=n.add(new Ue(d,g));l.push(h)}return l}function qo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function fi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(g=>new Ue(g.x,g.y));if(r&&o.length>1){const g=o[o.length-1];for(let v=0;v<o.length-1;v++)if(g.equals(o[v])){o.push(o[v+1]);break}const h=o[0];for(let v=1;v<o.length;v++)if(h.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let g=o[1].subtract(o[0]);g=g.normalise(),g=g.scale(e),o[0]=o[0].add(g)}if(n){const g=o.length;let h=o[g-2].subtract(o[g-1]);h=h.normalise(),h=h.scale(n),o[g-1]=o[g-1].add(h)}}if(!i)return qo(o);const s=o[0],l=["M",`${s.x},${s.y}`],u=o.length;for(let g=2;g<u;g++){const h=o[g-2],v=o[g-1],m=o[g];let E=h.subtract(v).normalise();E=E.scale(i),E=E.add(v);let b=m.subtract(v).normalise();b=b.scale(i),b=b.add(v),l.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${b.x},${b.y}`)}const d=o[u-1];return l.push(`L${d.x},${d.y}`),l.join(" ")}function pl(t,e={}){const n=Zl(t);return fi(n,e)}function Wn(t){return new Ue(t.c+.5,t.r+.5)}function Zl(t){return t.map(n=>Wn(n))}function yz(t){const e=Math.min(...t.map(s=>s.r)),n=Math.max(...t.map(s=>s.r)),r=Math.min(...t.map(s=>s.c)),i=Math.max(...t.map(s=>s.c));return{x:r,y:e,width:i+1,height:n+1}}const Oz=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5),new Ue(0,-.5),new Ue(0,.5),new Ue(-.5,0),new Ue(.5,0)];function Az(t,e){const n=Oz[t];return n.subtract(n.scale(e))}function im(t,e){const n=[new Ue(t.c-e,t.r-e),new Ue(t.c+e,t.r+e)],r=[new Ue(t.c-e,t.r+e),new Ue(t.c+e,t.r-e)];return[n,r].map(o=>qo(o,!1)).join("")}const xz=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Ql(t,e="none"){return xz.get(t)||e}function Sz(t,e,n){let r=[];function o(l,u){return l.map(d=>d.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Ue(-.12,-.32),new Ue(0,-.4),new Ue(.12,-.32)]:s=[new Ue(-.12,-.4),new Ue(0,-.32),new Ue(.12,-.4)],r=[s,o(s,90),o(s,180),o(s,270)],r=r.map(l=>l.map(u=>{const d=new Ue(n+.5,e+.5);return u.add(d)})),r}function O_(t,e){const n=[new Ue(-t,0),new Ue(0,0),new Ue(0,t)],i={[Fe.NE]:0,[Fe.E]:Math.PI/4,[Fe.SE]:Math.PI/2,[Fe.S]:3*Math.PI/4,[Fe.SW]:Math.PI,[Fe.W]:5*Math.PI/4,[Fe.NW]:3*Math.PI/2,[Fe.N]:7*Math.PI/4}[e];return n.map(s=>s.rotate(i))}function Nz(t,e){const r=Ws(e),i=new Ue(r.c,r.r).normalise().scale(.3),o=Wn(t),s=o.subtract(i),l=o.add(i);return[s,l]}function Lz(t,e){const r=Nz(t,e);let i=O_(.2,e);i=i.map(u=>u.add(r[1]));const o=fi(r),s=fi(i);return o+s}function Rz(t,e){const r=Ws(e),i=new Ue(r.c,r.r),s=Wn(t).add(i.scale(.4));return[s.subtract(i.normalise().scale(.2)),s]}function $u(t,e){const r=Rz(t,e);let i=O_(.1,e);i=i.map(u=>u.add(r[1]));const o=fi(r),s=fi(i);return o+s}var Dz=ne('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),Tz=ne('<g class="regions-border"></g>');function kz(t,e){ie(e,!1);const n=Be(),r=()=>fe(Pn,"$cellsStore",n),i=x(),o=x();function s(u,d){return u.filter(v=>v.region===d).map(v=>({r:v.r,c:v.c}))}L(()=>r(),()=>{O(i,r())}),L(()=>f(i),()=>{O(o,new Set(f(i).map(u=>u.region).filter(u=>u!==null)))}),be(),ge();var l=Tz();Qe(l,5,()=>f(o),pt,(u,d)=>{var g=Dz();J(()=>S(g,"d",bo(s(f(i),f(d)),0,!1))),J(()=>S(g,"id",`region-${f(d)??""}`)),N(u,g)}),W(l),N(t,l),oe()}var Mz=ne('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse"><rect></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-5l2s5m" mask="url(#selection-mask)"></path></g>');function Uz(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ui,"$selectionStore",n),i=()=>fe(tn,"$toolStore",n),o=()=>fe(Nn,"$settingsStore",n),s=x(),l=x(),u=x(),d=x(),g=x();let h=U(e,"gridShape",8);const v=.1,m=.05,E="#080808",b="#b2b2b2";L(()=>r(),()=>{O(s,r().cells)}),L(()=>f(s),()=>{O(l,bo(f(s),0))}),L(()=>f(s),()=>{O(u,bo(f(s),v))}),L(()=>i(),()=>{O(d,zd(i()))}),L(()=>o(),()=>{O(g,o().selection_color)}),be(),ge();var I=Mz(),w=j(I),A=j(w);S(A,"stdDeviation",m),_i(),W(w);var T=F(w);S(T,"x",0),S(T,"y",0);var k=j(T);S(k,"x",0),S(k,"y",0),S(k,"fill",b);var G=F(k);S(G,"fill",E),W(T);var Y=F(T);W(I),J(()=>{S(I,"visibility",f(d)?"visible":"hidden"),S(T,"width",h().nCols),S(T,"height",h().nRows),S(k,"width",h().nCols),S(k,"height",h().nRows),S(G,"d",f(u)),S(Y,"d",f(l)),S(Y,"fill",f(g))}),N(t,I),oe()}var Gz=ne('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function $z(t,e){ie(e,!1);const n=x(),r=x();let i=U(e,"grid",8);L(()=>X(i()),()=>{O(n,i().getAllCells().map(l=>({r:l.r,c:l.c})))}),L(()=>f(n),()=>{O(r,bo(f(n),0))}),be(),ge();var o=Gz(),s=j(o);W(o),J(()=>S(s,"d",f(r))),N(t,o),oe()}function Fz(t,e){const n=t.getRow(e.r);return new Set(n)}function Pz(t,e){const n=t.getCol(e.c);return new Set(n)}function zz(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function Hz(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function Wz(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function Bz(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function Yz(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function jz(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function Kz(t,e,n){let r=new Set;const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),s=o.length,l=[o[0],o[s-1]],u=o.slice(1,s-1),d=l.findIndex(h=>h===e);if(d!==-1){if(r=new Set([...r,...u]),u.length>0){const h=l.filter((v,m)=>m!==d);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...l])),r}function Vz(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function Xz(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function qz(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(!!e.get(_.ANTIKNIGHT)&&(r=r.union(Hz(t,i))),!!e.get(_.ANTIKING)&&(r=r.union(Wz(t,i))),!!e.get(_.DISJOINT_GROUPS)&&(r=r.union(Bz(t,i))),!!e.get(_.NEGATIVE_DIAGONAL)&&(r=r.union(jz(t,i))),!!e.get(_.POSITIVE_DIAGONAL)&&(r=r.union(Yz(t,i)))),r}function Fu(t,e,n,r,i){if(e.tool_id!==r||!e.constraints)return i;for(const o of Object.values(e.constraints)){const s=Xz(t,n,o);i=new Set([...i,...s])}return i}function Zz(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;for(const o of e.values()){const s=o.tool_id;if(o.constraints){if(s===_.BETWEEN_LINE)for(const l of Object.values(o.constraints)){const u=Kz(t,i,l);r=new Set([...r,...u])}else if(s===_.RENBAN_LINE)for(const l of Object.values(o.constraints)){const u=Vz(t,i,l);r=new Set([...r,...u])}r=Fu(t,o,i,_.KILLER_CAGE,r),r=Fu(t,o,i,_.PARITY_BALANCE_CAGE,r),r=Fu(t,o,i,_.SPOTLIGHT_CAGE,r)}}return r}function om(t,e){let n=new Set;const r=t.grid,i=t.elementsDict;!i.get(_.SUDOKU_RULES_DO_NOT_APPLY)&&(n=new Set([...Fz(r,e),...Pz(r,e),...zz(r,e)])),n=new Set([...n,...qz(r,i,e)]),n=new Set([...n,...Zz(r,i,e)]);const s=r.getCell(e.r,e.c);return s&&n.delete(s),n}function Qz(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(om(t,o));const r=n.reduce((o,s)=>o.intersection(s)),i=[];for(const o of r)i.push(o.toCoords());return i}var Jz=ne('<tspan class="svelte-fb40hv"> </tspan>'),e4=ne('<g class="center-marks-group"><text class="center-mark svelte-fb40hv" dominant-baseline="central"></text></g>');function t4(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=x(),o=x();let s=U(e,"cell",8),l=U(e,"seen_values",8);const u=.25;function d(m){return l().find(b=>b===m)!==void 0}L(()=>X(s()),()=>{O(i,Wn({r:s().r,c:s().c}))}),L(()=>r(),()=>{O(o,r().non_given_color)}),be(),ge();var g=Ee(),h=ee(g);{var v=m=>{var E=e4(),b=j(E);S(b,"font-size",u),Qe(b,5,()=>s().centerMarks,pt,(I,w)=>{var A=Jz();const T=ft(()=>d(f(w)));J(()=>Et(A,"conflict",f(T)));var k=j(A,!0);W(A),J(()=>it(k,f(w))),N(I,A)}),W(b),W(E),J(()=>{S(b,"x",f(i).x),S(b,"y",f(i).y),S(b,"textLength",s().centerMarks.length>5?"0.9":void 0),S(b,"fill",f(o))}),N(m,E)};Q(h,m=>{s().centerMarks.length&&m(v)})}N(t,g),oe()}var n4=ne('<text class="corner-mark svelte-r25lu9" dominant-baseline="central"> </text>'),r4=ne('<g class="corner-marks-group"></g>');function i4(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=x(),o=x();let s=U(e,"cell",8),l=U(e,"seen_values",8);const u=.25,d=.28;function g(b){const I=b.cornerMarks.slice(0,8),w=Wn({r:b.r,c:b.c});return I.map((A,T)=>{const k=Az(T,d);return{pos:w.add(k),value:A,idx:T}})}function h(b){return l().find(w=>w===b)!==void 0}L(()=>r(),()=>{O(i,r().conflict_marks_color)}),L(()=>r(),()=>{O(o,r().non_given_color)}),be(),ge();var v=Ee(),m=ee(v);{var E=b=>{var I=r4();Qe(I,5,()=>g(s()),pt,(w,A)=>{let T=()=>f(A).pos,k=()=>f(A).value;var G=n4();S(G,"font-size",u),J(()=>S(G,"fill",h(k())?f(i):f(o)));var Y=j(G,!0);W(G),J(()=>{S(G,"x",T().x),S(G,"y",T().y),it(Y,k())}),N(w,G)}),W(I),N(b,I)};Q(m,b=>{s().cornerMarks.length&&b(E)})}N(t,v),oe()}var o4=ne('<text class="cell-region svelte-129e584" dominant-baseline="central"> </text>');function s4(t,e){ie(e,!1);const n=x();let r=U(e,"cell",8);const i=.8,o=400;L(()=>X(r()),()=>{O(n,Wn({r:r().r,c:r().c}))}),be(),ge();var s=Ee(),l=ee(s);{var u=d=>{var g=o4();S(g,"font-size",i),S(g,"font-weight",o);var h=j(g,!0);W(g),J(()=>{S(g,"x",f(n).x),S(g,"y",f(n).y),it(h,r().region)}),N(d,g)};Q(l,d=>{r().region!==null&&d(u)})}N(t,s),oe()}var a4=ne('<text class="cell-value svelte-1p0g0b7" dominant-baseline="central"> </text>'),l4=ne("<!><!>",1),c4=ne('<g class="cell-values cell-digit-outline svelte-1p0g0b7"><!></g>');function u4(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=()=>fe(Ys,"$puzzleStore",n),o=()=>fe(vi,"$enableFogMaskStore",n),s=()=>fe(tn,"$toolStore",n),l=x(),u=x(),d=x(),g=x(),h=x(),v=x(),m=x(),E=x(),b=x();let I=U(e,"cell",8);const w=.8,A=400;function T(M,P){if(!M)return[];let ce=[...om(f(h),P.toCoords())].map(se=>se.value).filter(se=>se!==null);return ce=[...new Set(ce)],ce}L(()=>X(I()),()=>{O(l,I().value)}),L(()=>X(I()),()=>{O(u,I().given)}),L(()=>X(I()),()=>{O(d,Wn({r:I().r,c:I().c}))}),L(()=>r(),()=>{O(g,r().highlightPencilmarkConflicts)}),L(()=>i(),()=>{O(h,i())}),L(()=>r(),()=>{O(v,r().showSolution)}),L(()=>(f(u),r()),()=>{O(m,f(u)?"var(--cell-given-color)":r().non_given_color)}),L(()=>(f(g),X(I())),()=>{O(E,T(f(g),I()))}),L(()=>(X(I()),o()),()=>{O(b,I().given&&o())}),be(),ge();var k=Ee(),G=ee(k);{var Y=M=>{var P=c4(),te=j(P);{var ce=ue=>{s4(ue,{get cell(){return I()}})},se=ue=>{var ye=Ee(),Z=ee(ye);{var Ie=Oe=>{var Ae=a4();S(Ae,"font-size",w),S(Ae,"font-weight",A);var Se=j(Ae,!0);W(Ae),J(()=>{S(Ae,"x",f(d).x),S(Ae,"y",f(d).y),S(Ae,"fill",f(m)),Et(Ae,"given",f(u)),it(Se,f(l))}),N(Oe,Ae)},Ce=Oe=>{var Ae=l4(),Se=ee(Ae);i4(Se,{get cell(){return I()},get seen_values(){return f(E)}});var De=F(Se);t4(De,{get cell(){return I()},get seen_values(){return f(E)}}),N(Oe,Ae)};Q(Z,Oe=>{f(l)!==null?Oe(Ie):Oe(Ce,!1)},!0)}N(ue,ye)};Q(te,ue=>{s()===_.REGIONS?ue(ce):ue(se,!1)})}W(P),J(()=>Et(P,"hide-given",f(b))),N(M,P)};Q(G,M=>{f(v)||M(Y)})}N(t,k),oe()}var d4=ne("<path></path>"),_4=ne('<g class="highlights-group svelte-vxfrnh"></g>');function f4(t,e){ie(e,!1);const n=Be(),r=()=>fe(tn,"$toolStore",n);let i=U(e,"cell",8);function o(d){const g=Wn({r:i().r,c:i().c}),h=i().highlights.length;return i().highlights.map((m,E)=>{let b=wz(E,h);b=b.map(w=>w.add(g));const I=qo(b,!0);return{colorId:m,d:I}})}ge();var s=Ee(),l=ee(s);{var u=d=>{var g=Ee(),h=ee(g);{var v=m=>{var E=_4();Qe(E,5,()=>o(i()),pt,(b,I)=>{let w=()=>f(I).colorId,A=()=>f(I).d;var T=d4();J(()=>{Ls(T,`highlight-wedge color-${w()??""} svelte-vxfrnh`),S(T,"d",A())}),N(b,T)}),W(E),N(m,E)};Q(h,m=>{i().highlights.length&&m(v)})}N(d,g)};Q(l,d=>{r()!==_.REGIONS&&d(u)})}N(t,s),oe()}var g4=ne('<path class="cell-marker" fill="none"></path>'),h4=ne('<circle fill="none" opacity="0.9"></circle>');function v4(t,e){ie(e,!1);const n=x(),r=x();let i=U(e,"marker",8);const o=.3,s=.08;L(()=>X(i()),()=>{O(n,im(i(),o))}),L(()=>X(i()),()=>{O(r,Ql(i().colorId,"black"))}),be(),ge();var l=Ee(),u=ee(l);{var d=h=>{var v=g4();S(v,"stroke-width",s),J(()=>{S(v,"d",f(n)),S(v,"stroke",f(r))}),N(h,v)},g=h=>{var v=h4();S(v,"r",o),S(v,"stroke-width",s),J(()=>{Ls(v,`cell-marker color-${i().colorId??""}`),S(v,"cx",i().c),S(v,"cy",i().r),S(v,"stroke",f(r))}),N(h,v)};Q(u,h=>{i().marker==="X"?h(d):h(g,!1)})}N(t,l),oe()}var p4=ne('<g class="cell-markers"></g>');function m4(t,e){let n=U(e,"markers",8);var r=p4();Qe(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{v4(i,{get marker(){return f(o)}})}),W(r),N(t,r)}var E4=ne('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function C4(t,e){ie(e,!1);const n=x();let r=U(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(g=>[new Ue(g.p1.c,g.p1.r),new Ue(g.p2.c,g.p2.r)]).flat()}function s(u){const d=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Ql(d,"black"):"darkred"}L(()=>X(r()),()=>{O(n,qo(o(r().draftLine)))}),be(),ge();var l=E4();J(()=>S(l,"stroke",s(r()))),S(l,"stroke-width",i),S(l,"opacity",.5),J(()=>S(l,"d",f(n))),N(t,l),oe()}var b4=ne('<path fill="none" opacity="0.9"></path>');function I4(t,e){ie(e,!1);const n=x(),r=x();let i=U(e,"marker",8);const o=.08,s=.04;L(()=>X(i()),()=>{O(n,im(i(),o))}),L(()=>X(i()),()=>{O(r,Ql(i().colorId,"black"))}),be(),ge();var l=b4();S(l,"stroke-width",s),J(()=>{S(l,"d",f(n)),Ls(l,`edge-marker color-${i().colorId??""}`),S(l,"stroke",f(r))}),N(t,l),oe()}var w4=ne('<g class="edge-markers"></g>');function y4(t,e){let n=U(e,"markers",8);var r=w4();Qe(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{I4(i,{get marker(){return f(o)}})}),W(r),N(t,r)}var O4=ne('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),A4=ne('<g class="line-markers svelte-yha19m"></g>');function x4(t,e){ie(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(l){return JSON.stringify(l)}function o(l){return Ql(l,"black")}ge();var s=A4();Qe(s,5,n,l=>i(l),(l,u)=>{var d=O4();S(d,"stroke-width",r),J(()=>S(d,"stroke",o(f(u).colorId))),J(()=>{S(d,"x1",f(u).p1.c),S(d,"y1",f(u).p1.r),S(d,"x2",f(u).p2.c),S(d,"y2",f(u).p2.r),Ls(d,`line-marker color-${f(u).colorId??""} svelte-yha19m`)}),N(l,d)}),W(s),N(t,s),oe()}var S4=ne('<g class="pen-tool"><!><!><!><!></g>');function N4(t,e){ie(e,!1);const n=Be(),r=()=>fe(gl,"$penToolStore",n),i=x();L(()=>r(),()=>{O(i,{draftLine:r().draftLine,mode:r().mode})}),be(),ge();var o=S4(),s=j(o);x4(s,{get lineMarkers(){return r().lineMarkers}});var l=F(s);y4(l,{get markers(){return r().edgeMarkers}});var u=F(l);m4(u,{get markers(){return r().cellMarkers}});var d=F(u);C4(d,{get draftLineMarker(){return f(i)}}),W(o),N(t,o),oe()}var L4=ne("<path></path>");function jr(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x(),d=x();let g=U(e,"cells",8),h=U(e,"shape",8,Hd);const v="square";L(()=>X(h()),()=>{O(n,h().inset??.06)}),L(()=>X(h()),()=>{O(r,h().stroke??"black")}),L(()=>X(h()),()=>{O(i,h().strokeWidth??.03)}),L(()=>X(h()),()=>{O(o,h().strokeDasharray??.08)}),L(()=>X(h()),()=>{O(s,h().fill??"none")}),L(()=>X(h()),()=>{O(l,h().connectDiag??!0)}),L(()=>(X(g()),f(n),f(l)),()=>{O(u,bo(g(),f(n),f(l)))}),L(()=>X(h()),()=>{O(d,h().strokeLinejoin??"miter")}),be(),ge();var m=L4();S(m,"stroke-linecap",v),J(()=>{S(m,"d",f(u)),S(m,"stroke",f(r)),S(m,"stroke-width",f(i)),S(m,"fill",f(s)),S(m,"stroke-dasharray",f(o)),S(m,"stroke-linejoin",f(d))}),N(t,m),oe()}var R4=ne('<g class="seen-cells-layer svelte-dqmhr7"><!></g>');function D4(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ui,"$selectionStore",n),i=()=>fe(Nn,"$settingsStore",n),o=()=>fe(Ys,"$puzzleStore",n),s=()=>fe(tn,"$toolStore",n),l=()=>fe(vi,"$enableFogMaskStore",n),u=x(),d=x(),g=x(),h=x(),v=x(),m=x(),E=x();function b(T,k){return T.length?Qz(f(g),T):[]}L(()=>r(),()=>{O(u,r().cells)}),L(()=>i(),()=>{O(d,i().highlightCellsSeenBySelection)}),L(()=>o(),()=>{O(g,o())}),L(()=>s(),()=>{O(h,zd(s()))}),L(()=>i(),()=>{O(v,i().seen_cells_color)}),L(()=>f(v),()=>{O(m,{type:B.CAGE,strokeWidth:0,stroke:"none",fill:f(v),inset:.15,connectDiag:!1})}),L(()=>l(),()=>{O(E,l())}),be(),ge();var I=Ee(),w=ee(I);{var A=T=>{var k=R4(),G=j(k),Y=ft(()=>b(f(u),f(g)));jr(G,{get cells(){return f(Y)},get shape(){return f(m)}}),W(k),J(()=>S(k,"mask",f(E)?"url(#fog-mask-fog)":null)),N(T,k)};Q(w,T=>{f(d)&&f(h)&&T(A)})}N(t,I),oe()}function Jl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...hp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function T4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Jl(r))}return new Set(e)}function k4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Jl(r))}return new Set(e)}function M4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Jl(r))}return new Set(e)}function U4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function G4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(s=>s.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function $4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function F4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Jl(i);o.length&&e.push(...o)}return new Set(e)}function P4(t,e){let n=new Set;if(!e.get(_.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...T4(t),...k4(t),...M4(t)]);n=n.union(u)}return!!e.get(_.ANTIKNIGHT)&&(n=n.union(U4(t))),!!e.get(_.ANTIKING)&&(n=n.union(G4(t))),!!e.get(_.NONCONSECUTIVE)&&(n=n.union($4(t))),!!e.get(_.DISJOINT_GROUPS)&&(n=n.union(F4(t))),n}function z4(t,e){return[...new Set([...P4(t,e)])]}var H4=ne('<rect class="conflict svelte-d9qu4j"></rect>'),W4=ne('<g class="conflicts-layer"></g>');function B4(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=()=>fe(hn,"$gridStore",n),o=()=>fe(lt,"$elementsDictStore",n),s=()=>fe(Pn,"$cellsStore",n),l=()=>fe(vi,"$enableFogMaskStore",n),u=x(),d=x(),g=x(),h=x(),v=x(),m=x();B.CAGE;function E(A){return z4(f(d),f(g)).map(G=>G.toCoords())}L(()=>r(),()=>{O(u,r().checkConflicts)}),L(()=>i(),()=>{O(d,i())}),L(()=>o(),()=>{O(g,o())}),L(()=>s(),()=>{O(h,s())}),L(()=>l(),()=>{O(v,l())}),L(()=>r(),()=>{O(m,r().conflict_cells_color)}),be(),ge();var b=Ee(),I=ee(b);{var w=A=>{var T=W4();Qe(T,5,()=>E(f(h)),pt,(k,G)=>{var Y=H4();S(Y,"width",1),S(Y,"height",1),J(()=>{S(Y,"x",f(G).c),S(Y,"y",f(G).r),S(Y,"fill",f(m))}),N(k,Y)}),W(T),J(()=>S(T,"mask",f(v)?"url(#fog-mask-fog)":null)),N(A,T)};Q(I,A=>{f(u)&&A(w)})}N(t,b),oe()}var Y4=ne('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function j4(t,e){ie(e,!1);const n=x();let r=U(e,"r",8),i=U(e,"c",8),o=U(e,"val",8);const s=.8,l=400;L(()=>(X(r()),X(i())),()=>{O(n,Wn({r:r(),c:i()}))}),be(),ge();var u=Ee(),d=ee(u);{var g=h=>{var v=Y4();S(v,"font-size",s),S(v,"font-weight",l);var m=j(v,!0);W(v),J(()=>{S(v,"x",f(n).x),S(v,"y",f(n).y),it(m,o())}),N(h,v)};Q(d,h=>{o()!==null&&h(g)})}N(t,u),oe()}var K4=ne('<g class="solution-layer"></g>');function V4(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ml,"$solutionStore",n),i=()=>fe(Nn,"$settingsStore",n),o=()=>fe(kl,"$gameModeStore",n),s=x(),l=x(),u=x();L(()=>r(),()=>{O(s,r())}),L(()=>i(),()=>{O(l,i().showSolution)}),L(()=>o(),()=>{O(u,o())}),be(),ge();var d=Ee(),g=ee(d);{var h=v=>{var m=K4();Qe(m,5,()=>f(s),pt,(E,b,I)=>{var w=Ee(),A=ee(w);Qe(A,1,()=>f(b),pt,(T,k,G)=>{j4(T,{r:I,c:G,get val(){return f(k)}})}),N(E,w)}),W(m),N(v,m)};Q(g,v=>{f(s)&&f(l)&&f(u)===Io.SETTING&&v(h)})}N(t,d),oe()}var X4=ne('<g class="element-group"></g>'),q4=ne("<g></g>");function Xa(t,e){ie(e,!1);const n=Be(),r=()=>fe(vi,"$enableFogMaskStore",n),i=x();let o=U(e,"elements",8),s=U(e,"g_name",8),l=U(e,"Component",8);L(()=>r(),()=>{O(i,r())}),be();var u=q4();Qe(u,5,o,pt,(d,g)=>{var h=Ee(),v=ee(h);{var m=E=>{var b=X4();Qe(b,5,()=>Object.entries(f(g).constraints),I=>I[0],(I,w)=>{l()(I,{get tool(){return f(w)[1]},get c_id(){return f(w)[0]}})}),W(b),J(()=>S(b,"data-toolId",f(g).tool_id)),N(E,b)};Q(v,E=>{f(g).constraints&&E(m)})}N(d,h)}),W(u),J(()=>{Ls(u,Ry(s())),S(u,"mask",f(i)?"url(#fog-mask-fog)":null)}),N(t,u),oe()}var Z4=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),Q4=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),J4=ne('<g class="quadruple-text"><!></g>');function eH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x();let l=U(e,"cornerTool",8);const u=l().cells,d=new Ue(u[u.length-1].c,u[u.length-1].r),g=un(l().toolId,zt)??qu;L(()=>X(l()),()=>{O(n,l().value)}),L(()=>X(l()),()=>{O(r,l().shape??g)}),L(()=>f(r),()=>{var E;O(i,((E=f(r))==null?void 0:E.fontSize)??.2)}),L(()=>f(r),()=>{var E;O(o,((E=f(r))==null?void 0:E.fontColor)??"black")}),L(()=>f(n),()=>{var E;O(s,f(n)?(E=f(n))==null?void 0:E.split(","):[])}),be(),ge();var h=Ee(),v=ee(h);{var m=E=>{var b=J4(),I=j(b);{var w=T=>{var k=Z4(),G=j(k,!0);J(()=>it(G,f(s).join(" "))),W(k),J(()=>{S(k,"x",d.x),S(k,"y",d.y),S(k,"font-size",f(i)),S(k,"fill",f(o))}),N(T,k)},A=T=>{var k=Q4(),G=ee(k),Y=j(G,!0);J(()=>it(Y,f(s).slice(0,2).join(" "))),W(G);var M=F(G),P=j(M,!0);J(()=>it(P,f(s).slice(2).join(" "))),W(M),J(()=>{S(G,"x",d.x),S(G,"y",d.y),S(G,"dy",-f(i)/2),S(G,"font-size",f(i)),S(G,"fill",f(o)),S(M,"x",d.x),S(M,"y",d.y),S(M,"dy",f(i)/2),S(M,"font-size",f(i)),S(M,"fill",f(o))}),N(T,k)};Q(I,T=>{f(s).length<=2?T(w):T(A,!1)})}W(b),J(()=>S(b,"data-count",f(s).length)),N(E,b)};Q(v,E=>{f(n)&&E(m)})}N(t,h),oe()}var tH=ne("<circle></circle>");function Cr(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x();let u=U(e,"x",8),d=U(e,"y",8),g=U(e,"shape",8);L(()=>X(g()),()=>{O(n,g().r??.35)}),L(()=>X(g()),()=>{O(r,g().stroke??"black")}),L(()=>X(g()),()=>{var v;O(i,(v=g())==null?void 0:v.opacity)}),L(()=>X(g()),()=>{O(o,g().strokeWidth??.02)}),L(()=>X(g()),()=>{O(s,g().fill??"none")}),L(()=>X(g()),()=>{O(l,g().strokeDasharray??0)}),be(),ge();var h=tH();J(()=>{S(h,"cx",u()),S(h,"cy",d()),S(h,"r",f(n)),S(h,"stroke",f(r)),S(h,"stroke-width",f(o)),S(h,"fill",f(s)),S(h,"opacity",f(i)),S(h,"stroke-dasharray",f(l))}),N(t,h),oe()}var nH=ne("<ellipse></ellipse>");function rH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x();let d=U(e,"cx",8),g=U(e,"cy",8),h=U(e,"shape",8);L(()=>X(h()),()=>{O(n,h().width??.5)}),L(()=>X(h()),()=>{O(r,h().height??.5)}),L(()=>X(h()),()=>{O(i,h().stroke??"black")}),L(()=>X(h()),()=>{var m;O(o,(m=h())==null?void 0:m.opacity)}),L(()=>X(h()),()=>{O(s,h().strokeWidth??.02)}),L(()=>X(h()),()=>{O(l,h().fill??"none")}),L(()=>X(h()),()=>{O(u,h().angle??0)}),be(),ge();var v=nH();J(()=>{S(v,"cx",d()),S(v,"cy",g()),S(v,"rx",f(n)/2),S(v,"ry",f(r)/2),S(v,"stroke",f(i)),S(v,"stroke-width",f(s)),S(v,"fill",f(l)),S(v,"opacity",f(o)),S(v,"transform",`rotate(${f(u)}, ${d()}, ${g()} )`)}),N(t,v),oe()}var iH=ne("<polygon></polygon>");function ml(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x(),d=x();let g=U(e,"cx",8),h=U(e,"cy",8),v=U(e,"shape",8);L(()=>X(v()),()=>{O(n,v().n??3)}),L(()=>X(v()),()=>{O(r,v().r??.5)}),L(()=>(f(r),f(n),X(g()),X(h())),()=>{O(i,rm(f(r),f(n),new Ue(g(),h())))}),L(()=>f(i),()=>{O(o,f(i).map(E=>`${E.x},${E.y}`).join(" "))}),L(()=>X(v()),()=>{O(s,v().stroke??"black")}),L(()=>X(v()),()=>{O(l,v().strokeWidth??.02)}),L(()=>X(v()),()=>{O(u,v().fill??"none")}),L(()=>X(v()),()=>{O(d,v().angle??0)}),be(),ge();var m=iH();J(()=>{S(m,"points",f(o)),S(m,"stroke",f(s)),S(m,"stroke-width",f(l)),S(m,"fill",f(u)),S(m,"transform",`rotate(${f(d)}, ${g()}, ${h()} )`)}),N(t,m),oe()}var oH=ne("<rect></rect>");function sH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x();let d=U(e,"cx",8),g=U(e,"cy",8),h=U(e,"shape",8);L(()=>X(h()),()=>{O(n,h().width??.5)}),L(()=>X(h()),()=>{O(r,h().height??.5)}),L(()=>(X(d()),f(n)),()=>{O(i,d()-f(n)/2)}),L(()=>(X(g()),f(r)),()=>{O(o,g()-f(r)/2)}),L(()=>X(h()),()=>{O(s,h().stroke||"black")}),L(()=>X(h()),()=>{O(l,h().strokeWidth||.023)}),L(()=>X(h()),()=>{O(u,h().fill||"none")}),be(),ge();var v=oH();J(()=>{S(v,"x",f(i)),S(v,"y",f(o)),S(v,"width",f(n)),S(v,"height",f(r)),S(v,"stroke",f(s)),S(v,"stroke-width",f(l)),S(v,"fill",f(u))}),N(t,v),oe()}var aH=ne("<rect></rect>");function lH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x();let m=U(e,"cx",8),E=U(e,"cy",8),b=U(e,"shape",8);L(()=>X(b()),()=>{O(n,b().r??.5)}),L(()=>(X(m()),f(n)),()=>{O(r,m()-f(n))}),L(()=>(X(E()),f(n)),()=>{O(i,E()-f(n))}),L(()=>f(n),()=>{O(o,2*f(n))}),L(()=>f(n),()=>{O(s,2*f(n))}),L(()=>X(b()),()=>{O(l,b().stroke??"black")}),L(()=>X(b()),()=>{O(u,b().strokeWidth??.02)}),L(()=>X(b()),()=>{O(d,b().fill??"none")}),L(()=>X(b()),()=>{O(g,b().angle??0)}),L(()=>X(b()),()=>{O(h,b().strokeDasharray??0)}),L(()=>X(b()),()=>{O(v,b().opacity??1)}),be(),ge();var I=aH();J(()=>{S(I,"x",f(r)),S(I,"y",f(i)),S(I,"width",f(o)),S(I,"height",f(s)),S(I,"stroke",f(l)),S(I,"stroke-width",f(u)),S(I,"fill",f(d)),S(I,"transform",`rotate(${f(g)}, ${m()}, ${E()})`),S(I,"stroke-dasharray",f(h)),S(I,"opacity",f(v))}),N(t,I),oe()}function Dr(t,e){ie(e,!1);const n=x();let r=U(e,"cx",8),i=U(e,"cy",8),o=U(e,"shape",8);L(()=>(X(o()),B),()=>{var g;O(n,((g=o())==null?void 0:g.type)??B.CIRCLE)}),be(),ge();var s=Ee(),l=ee(s);{var u=g=>{Cr(g,{get x(){return r()},get y(){return i()},get shape(){return o()}})},d=g=>{var h=Ee(),v=ee(h);{var m=b=>{rH(b,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=b=>{var I=Ee(),w=ee(I);{var A=k=>{lH(k,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},T=k=>{var G=Ee(),Y=ee(G);{var M=te=>{sH(te,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},P=te=>{var ce=Ee(),se=ee(ce);{var ue=Z=>{ml(Z,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},ye=Z=>{Cr(Z,{get x(){return r()},get y(){return i()},get shape(){return o()}})};Q(se,Z=>{f(n)===B.POLYGON?Z(ue):Z(ye,!1)},!0)}N(te,ce)};Q(Y,te=>{f(n)===B.RECTANGLE?te(M):te(P,!1)},!0)}N(k,G)};Q(w,k=>{f(n)===B.SQUARE?k(A):k(T,!1)},!0)}N(b,I)};Q(v,b=>{f(n)===B.ELLIPSE?b(m):b(E,!1)},!0)}N(g,h)};Q(l,g=>{f(n)===B.CIRCLE?g(u):g(d,!1)})}N(t,s),oe()}var cH=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),uH=ne('<g class="corner-tool"><!><!><!></g>');function sm(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function b(T,k){return k===B.TEXT_ONLY?T.value?T.value:"-":T.value??""}L(()=>r(),()=>{var T;O(i,(T=r())==null?void 0:T.id)}),L(()=>(X(m()),qu),()=>{O(o,un(m().toolId,zt)??qu)}),L(()=>(X(m()),f(o)),()=>{O(s,m().shape??f(o))}),L(()=>(f(s),B),()=>{var T;O(l,((T=f(s))==null?void 0:T.type)??B.CIRCLE)}),L(()=>f(s),()=>{var T;O(u,((T=f(s))==null?void 0:T.fontSize)??.2)}),L(()=>f(s),()=>{var T;O(d,((T=f(s))==null?void 0:T.fontColor)??"black")}),L(()=>f(s),()=>{O(g,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.07:.07})}),L(()=>X(m()),()=>{O(h,m().cells)}),L(()=>f(h),()=>{O(v,new Ue(f(h)[f(h).length-1].c,f(h)[f(h).length-1].r))}),be(),ge();var I=Ee(),w=ee(I);{var A=T=>{var k=uH(),G=j(k);{var Y=se=>{Dr(se,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(g)}})};Q(G,se=>{E()&&E()===f(i)&&se(Y)})}var M=F(G);Dr(M,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(s)}});var P=F(M);{var te=se=>{eH(se,{get cornerTool(){return m()}})},ce=se=>{var ue=cH(),ye=j(ue,!0);J(()=>it(ye,b(m(),f(l)))),W(ue),J(()=>{S(ue,"x",f(v).x),S(ue,"y",f(v).y),S(ue,"font-size",f(u)),S(ue,"fill",f(d))}),N(se,ue)};Q(P,se=>{m().toolId===_.QUADRUPLE?se(te):se(ce,!1)})}W(k),N(T,k)};Q(w,T=>{f(h).length===4&&T(A)})}N(t,I),oe()}var dH=ne('<g class="corner-tool"><!></g>');function _H(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=dH(),d=j(u);sm(d,{get tool(){return n()},get c_id(){return r()}}),W(u),J(()=>S(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}N(t,i)}var fH=ne('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ns(t,e){ie(e,!1);const n=x();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),o=U(e,"x",8),s=U(e,"y",8),l=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),d=U(e,"fontWeight",8,400),g=x(null),h=x(null);function v(A,T,k){const G=["TL","TR"].includes(k),M=["TL","BL"].includes(k)?A+.05:A,P=T;return new Ue(M,P)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}Dy(()=>{if(!f(g)||!f(h))return;const A=f(g).getBBox();f(h).setAttribute("x",String(A.x)),f(h).setAttribute("y",String(A.y+A.height*.1)),f(h).setAttribute("width",String(A.width)),f(h).setAttribute("height",String(A.height*.8))}),L(()=>(X(o()),X(s()),X(l())),()=>{O(n,v(o(),s(),l()))}),be(),ge();var b=Ee(),I=ee(b);{var w=A=>{var T=fH(),k=ee(T);Mi(k,M=>O(h,M),()=>f(h));var G=F(k);J(()=>S(G,"text-anchor",m(l()))),J(()=>S(G,"dominant-baseline",E(l())));var Y=j(G,!0);W(G),Mi(G,M=>O(g,M),()=>f(g)),J(()=>{var M,P;S(G,"x",(M=f(n))==null?void 0:M.x),S(G,"y",(P=f(n))==null?void 0:P.y),S(G,"font-size",i()),S(G,"fill",u()),S(G,"font-weight",d()),it(Y,r())}),N(A,T)};Q(I,A=>{r().length&&A(w)})}N(t,b),oe()}var gH=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),hH=ne("<!><!><!>",1);function am(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function b(M,P){return P===B.TEXT_ONLY?M.value?M.value:"-":M.value??""}L(()=>r(),()=>{var M;O(i,(M=r())==null?void 0:M.id)}),L(()=>(X(m()),al),()=>{O(o,un(m().toolId,zt)??al)}),L(()=>(X(m()),f(o)),()=>{O(s,m().shape??f(o))}),L(()=>f(s),()=>{O(l,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.07:.07})}),L(()=>X(m()),()=>{O(u,m().cell)}),L(()=>(f(s),B),()=>{var M;O(d,((M=f(s))==null?void 0:M.type)||B.CIRCLE)}),L(()=>f(s),()=>{var M;O(g,((M=f(s))==null?void 0:M.fontSize)??.2)}),L(()=>f(s),()=>{var M;O(h,((M=f(s))==null?void 0:M.fontColor)??"black")}),L(()=>f(u),()=>{O(v,f(u).r%1===.5&&f(u).c%1===.5)}),be(),ge();var I=hH(),w=ee(I);{var A=M=>{Dr(M,{get cx(){return f(u).c},get cy(){return f(u).r},get shape(){return f(l)}})};Q(w,M=>{E()===f(i)&&M(A)})}var T=F(w);Dr(T,{get cx(){return f(u).c},get cy(){return f(u).r},get shape(){return f(s)}});var k=F(T);{var G=M=>{var P=ft(()=>b(m(),f(d))),te=ft(()=>Math.floor(f(u).c)),ce=ft(()=>Math.floor(f(u).r));Ns(M,{get value(){return f(P)},get x(){return f(te)},get y(){return f(ce)},position:"TL",get fontColor(){return f(h)}})},Y=M=>{var P=gH(),te=j(P,!0);J(()=>it(te,b(m(),f(d)))),W(P),J(()=>{S(P,"x",f(u).c),S(P,"y",f(u).r),S(P,"font-size",f(g)),S(P,"fill",f(h))}),N(M,P)};Q(k,M=>{f(v)?M(G):M(Y,!1)})}N(t,I),oe()}var vH=ne('<g class="center-corner-or-edge-tool"><!></g>');function pH(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=vH(),d=j(u);am(d,{get tool(){return n()},get c_id(){return r()}}),W(u),J(()=>S(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}N(t,i)}var mH=ne('<rect stroke="none" fill="#5373ea80"></rect>'),EH=ne('<rect stroke="none" fill="#5373ea66"></rect>'),CH=ne('<path fill="none" stroke-linecap="round"></path><!>',1),bH=ne('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function qh(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=()=>fe(hn,"$gridStore",n),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x(),m=x(),E=x(),b=x();let I=U(e,"tool",8),w=U(e,"c_id",8,void 0);const A=.03;function T(Z){return Z.value&&Z.value.length?Z.value:"-"}function k(Z,Ie){const Ce=Ws(Ie),Oe=new Ue(Ce.c,Ce.r).scale(.5),Ae=Wn(Z),Se=Ae.add(Oe.scale(.5)),De=Ae.add(Oe.scale(.8));return[Se,De]}function G(Z,Ie){const Oe=k(Z,Ie);let Ae=O_(.08,Ie);Ae=Ae.map(st=>st.add(Oe[1]));const Se=fi(Oe),De=fi(Ae);return Se+De}L(()=>r(),()=>{var Z;O(o,(Z=r())==null?void 0:Z.id)}),L(()=>X(I()),()=>{O(s,I().cell)}),L(()=>f(s),()=>{O(l,Wn(f(s)))}),L(()=>(i(),X(I())),()=>{O(u,i().getCellsInDirection(I().cell.r,I().cell.c,I().direction))}),L(()=>(X(I()),ph),()=>{O(d,un(I().toolId,zt)??ph)}),L(()=>(X(I()),f(d)),()=>{O(g,I().shape??f(d))}),L(()=>f(g),()=>{var Z;O(h,((Z=f(g))==null?void 0:Z.fontSize)??.5)}),L(()=>f(g),()=>{var Z;O(v,((Z=f(g))==null?void 0:Z.fontColor)??"var(--text-primary-color)")}),L(()=>f(g),()=>{var Z;O(m,((Z=f(g))==null?void 0:Z.stroke)??"var(--text-primary-color)")}),L(()=>f(g),()=>{O(E,{...f(g),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),L(()=>(f(s),X(I())),()=>{O(b,G(f(s),I().direction))}),be(),ge();var Y=bH(),M=j(Y);{var P=Z=>{var Ie=Ee(),Ce=ee(Ie);Qe(Ce,1,()=>f(u),pt,(Oe,Ae)=>{var Se=mH();S(Se,"width",1),S(Se,"height",1),J(()=>{S(Se,"x",f(Ae).c),S(Se,"y",f(Ae).r)}),N(Oe,Se)}),N(Z,Ie)};Q(M,Z=>{w()===void 0&&Z(P)})}var te=F(M);{var ce=Z=>{var Ie=CH(),Ce=ee(Ie),Oe=F(Ce);Qe(Oe,1,()=>f(u),pt,(Ae,Se)=>{var De=EH();S(De,"width",1),S(De,"height",1),J(()=>{S(De,"x",f(Se).c),S(De,"y",f(Se).r)}),N(Ae,De)}),J(()=>{S(Ce,"d",f(b)),S(Ce,"stroke",f(E).stroke),S(Ce,"stroke-width",f(E).strokeWidth)}),N(Z,Ie)};Q(te,Z=>{w()&&w()===f(o)&&Z(ce)})}var se=F(te);S(se,"stroke-width",A);var ue=F(se),ye=j(ue,!0);J(()=>it(ye,T(I()))),W(ue),W(Y),J(()=>{S(se,"d",f(b)),S(se,"stroke",f(m)),S(ue,"x",f(l).x),S(ue,"y",f(l).y),S(ue,"font-size",f(h)),S(ue,"fill",f(v))}),N(t,Y),oe()}var IH=ne('<g class="outside-direction-tool"><!></g>'),wH=ne('<g class="outside-direction-preview"><!></g>');function lm(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=u=>{var d=IH(),g=j(d);qh(g,{get tool(){return n()},get c_id(){return r()}}),W(d),J(()=>S(d,"data-id",`${r()}`)),N(u,d)},l=u=>{var d=wH();S(d,"opacity",.5);var g=j(d);qh(g,{get tool(){return n()}}),W(d),N(u,d)};Q(o,u=>{r()!==void 0?u(s):u(l,!1)})}N(t,i)}var yH=ne('<path fill="none"></path>');function di(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x();let u=U(e,"linePoints",8),d=U(e,"shape",8,void 0);const g="round",h="round";L(()=>X(d()),()=>{var m;O(n,((m=d())==null?void 0:m.stroke)??"gray")}),L(()=>X(d()),()=>{var m;O(r,((m=d())==null?void 0:m.strokeWidth)??.1)}),L(()=>X(d()),()=>{var m;O(i,((m=d())==null?void 0:m.strokeDasharray)??0)}),L(()=>X(d()),()=>{var m;O(o,((m=d())==null?void 0:m.strokeDashoffset)??0)}),L(()=>X(d()),()=>{var m,E,b,I,w,A,T,k;O(s,{shortenHead:((E=(m=d())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((I=(b=d())==null?void 0:b.linePathOptions)==null?void 0:I.shortenTail)??.2,bezierRounding:((A=(w=d())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((k=(T=d())==null?void 0:T.linePathOptions)==null?void 0:k.closeLoops)??!1})}),L(()=>(X(u()),f(s)),()=>{O(l,fi(u(),f(s)))}),be(),ge();var v=yH();S(v,"stroke-linejoin",g),S(v,"stroke-linecap",h),J(()=>{S(v,"d",f(l)),S(v,"stroke",f(n)),S(v,"stroke-width",f(r)),S(v,"stroke-dasharray",f(i)),S(v,"stroke-dashoffset",f(o))}),N(t,v),oe()}var OH=le("<!> <!> <!>",1);function AH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x();let l=U(e,"linePoints",8),u=U(e,"shape",8);function d(I){const w=xt.cloneDeep(I);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}L(()=>X(l()),()=>{O(n,l().length)}),L(()=>(f(n),X(l())),()=>{O(r,f(n)>1&&l()[0].equals(l()[f(n)-1]))}),L(()=>(f(n),X(l())),()=>{O(i,f(n)>=0?l()[0]:void 0)}),L(()=>(f(n),X(l())),()=>{O(o,f(n)>=0?l()[f(n)-1]:void 0)}),L(()=>X(u()),()=>{O(s,d(u()))}),be(),ge();var g=OH(),h=ee(g);di(h,{get linePoints(){return l()},get shape(){return u()}});var v=F(h,2);{var m=I=>{Cr(I,{get x(){return f(i).x},get y(){return f(i).y},get shape(){return f(s)}})};Q(v,I=>{!f(r)&&f(i)&&I(m)})}var E=F(v,2);{var b=I=>{Cr(I,{get x(){return f(o).x},get y(){return f(o).y},get shape(){return f(s)}})};Q(E,I=>{!f(r)&&f(o)&&I(b)})}N(t,g),oe()}var xH=ne('<g class="corner-line-tool"><!></g>');function SH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x();let s=U(e,"tool",8);const l=un(s().toolId,zt)??ks;L(()=>(X(s()),Ue),()=>{O(n,s().coords.map(v=>new Ue(v.c,v.r)))}),L(()=>X(s()),()=>{O(r,s().shape??l)}),L(()=>(f(r),B),()=>{var v;O(i,((v=f(r))==null?void 0:v.type)||B.LINE)}),L(()=>f(r),()=>{var v;O(o,((v=f(r))==null?void 0:v.opacity)??1)}),be(),ge();var u=xH(),d=j(u);{var g=v=>{AH(v,{get linePoints(){return f(n)},get shape(){return f(r)}})},h=v=>{di(v,{get linePoints(){return f(n)},get shape(){return f(r)}})};Q(d,v=>{f(i)===B.MAZE_WALL?v(g):v(h,!1)})}W(u),J(()=>S(u,"opacity",f(o))),N(t,u),oe()}var NH=ne('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Zh(t,e){ie(e,!1);const n=x(),r=x(),i=x();let o=U(e,"shape",8),s=U(e,"coords",8);const[l,u]=s(),d=u.c,g=l.c===u.c?u.c+1:u.c,h=u.r,v=l.r===u.r?u.r+1:u.r;L(()=>X(o()),()=>{O(n,o().stroke??"black")}),L(()=>X(o()),()=>{var E;O(r,(E=o())==null?void 0:E.opacity)}),L(()=>X(o()),()=>{O(i,o().strokeWidth??.02)}),be(),ge();var m=NH();S(m,"x1",d),S(m,"x2",g),S(m,"y1",h),S(m,"y2",v),J(()=>{S(m,"stroke",f(n)),S(m,"stroke-width",f(i)),S(m,"opacity",f(r))}),N(t,m),oe()}var LH=ne("<!><!>",1),RH=ne("<!><!>",1),DH=ne("<!><!>",1),TH=ne("<!><!>",1),kH=ne('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function cm(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function b(k,G){return G===B.TEXT_ONLY?k.value?k.value:"-":k.value??""}function I(k){if(k!==_.EDGE_INEQUALITY&&k!==_.ONE_WAY_DOOR)return 0;const G=Wn(f(h)[0]);return Wn(f(h)[1]).subtract(G).angle()/(2*Math.PI)*360}L(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),L(()=>(X(m()),al),()=>{O(o,un(m().toolId,zt)??al)}),L(()=>(X(m()),f(o)),()=>{O(s,m().shape??f(o))}),L(()=>(f(s),B),()=>{var k;O(l,((k=f(s))==null?void 0:k.type)||B.CIRCLE)}),L(()=>f(s),()=>{var k;O(u,((k=f(s))==null?void 0:k.fontSize)??.2)}),L(()=>f(s),()=>{var k;O(d,((k=f(s))==null?void 0:k.fontColor)??"black")}),L(()=>f(s),()=>{O(g,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.07:.07})}),L(()=>X(m()),()=>{O(h,m().cells)}),L(()=>f(h),()=>{O(v,Sp(Zl(f(h))))}),be(),ge();var w=Ee(),A=ee(w);{var T=k=>{var G=kH(),Y=ee(G);{var M=se=>{var ue=LH(),ye=ee(ue);{var Z=Ce=>{Cr(Ce,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(g)}})};Q(ye,Ce=>{E()&&E()===f(i)&&Ce(Z)})}var Ie=F(ye);Cr(Ie,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(s)}}),N(se,ue)},P=se=>{var ue=Ee(),ye=ee(ue);{var Z=Ce=>{var Oe=RH(),Ae=ee(Oe);{var Se=$e=>{Cr($e,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(g)}})};Q(Ae,$e=>{E()&&E()===f(i)&&$e(Se)})}var De=F(Ae);Cr(De,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(s)}}),N(Ce,Oe)},Ie=Ce=>{var Oe=Ee(),Ae=ee(Oe);{var Se=$e=>{var st=DH(),ut=ee(st);{var bt=It=>{Zh(It,{get coords(){return f(h)},get shape(){return f(g)}})};Q(ut,It=>{E()&&E()===f(i)&&It(bt)})}var dt=F(ut);Zh(dt,{get coords(){return f(h)},get shape(){return f(s)}}),N($e,st)},De=$e=>{var st=TH(),ut=ee(st);{var bt=It=>{Dr(It,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(g)}})};Q(ut,It=>{E()&&E()===f(i)&&It(bt)})}var dt=F(ut);Dr(dt,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(s)}}),N($e,st)};Q(Ae,$e=>{f(l)===B.BORDER_LINE?$e(Se):$e(De,!1)},!0)}N(Ce,Oe)};Q(ye,Ce=>{f(l)===B.TEXT_ONLY?Ce(Z):Ce(Ie,!1)},!0)}N(se,ue)};Q(Y,se=>{m().toolId===_.EDGE_INEQUALITY||m().toolId===_.ONE_WAY_DOOR?se(M):se(P,!1)})}var te=F(Y);J(()=>S(te,"transform",`rotate(${I(m().toolId)}, ${f(v).x}, ${f(v).y} )`));var ce=j(te,!0);J(()=>it(ce,b(m(),f(l)))),W(te),J(()=>{S(te,"x",f(v).x),S(te,"y",f(v).y),S(te,"font-size",f(u)),S(te,"fill",f(d))}),N(k,G)};Q(A,k=>{f(h).length===2&&k(T)})}N(t,w),oe()}var MH=ne('<g class="edge-tool"><!></g>');function UH(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=MH(),d=j(u);cm(d,{get tool(){return n()},get c_id(){return r()}}),W(u),J(()=>S(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}N(t,i)}var GH=ne('<path fill="none" stroke-linecap="round"></path>'),$H=ne('<path fill="none" stroke-linecap="round"></path>'),FH=ne('<path fill="none" stroke-linecap="round"></path>'),PH=ne("<!><!><!>",1);function Qh(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x();let d=U(e,"tool",8),g=U(e,"c_id",8,void 0);L(()=>r(),()=>{var w;O(i,(w=r())==null?void 0:w.id)}),L(()=>(X(d()),vh),()=>{O(o,un(d().toolId,zt)??vh)}),L(()=>(X(d()),f(o)),()=>{O(s,d().shape??f(o))}),L(()=>f(s),()=>{O(l,{...f(s),stroke:"var(--grid-background-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.03:.03})}),L(()=>f(s),()=>{O(u,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.05:.05})}),be(),ge();var h=PH(),v=ee(h);{var m=w=>{var A=Ee(),T=ee(A);Qe(T,1,()=>d().directions,pt,(k,G)=>{var Y=GH();J(()=>S(Y,"d",$u(d().cell,f(G)))),J(()=>{S(Y,"stroke",f(l).stroke),S(Y,"stroke-width",f(l).strokeWidth)}),N(k,Y)}),N(w,A)};Q(v,w=>{w(m)})}var E=F(v);{var b=w=>{var A=Ee(),T=ee(A);Qe(T,1,()=>d().directions,pt,(k,G)=>{var Y=$H();J(()=>S(Y,"d",$u(d().cell,f(G)))),J(()=>{S(Y,"stroke",f(u).stroke),S(Y,"stroke-width",f(u).strokeWidth)}),N(k,Y)}),N(w,A)};Q(E,w=>{g()&&g()===f(i)&&w(b)})}var I=F(E);Qe(I,1,()=>d().directions,pt,(w,A)=>{var T=FH();J(()=>S(T,"d",$u(d().cell,f(A)))),J(()=>{S(T,"stroke",f(s).stroke),S(T,"stroke-width",f(s).strokeWidth)}),N(w,T)}),N(t,h),oe()}var zH=ne('<g class="single-cell-multi-arrow-tool"><!></g>'),HH=ne('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function um(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=u=>{var d=zH(),g=j(d);Qh(g,{get tool(){return n()},get c_id(){return r()}}),W(d),J(()=>S(d,"data-id",`${r()}`)),N(u,d)},l=u=>{var d=HH();S(d,"opacity",.5);var g=j(d);Qh(g,{get tool(){return n()}}),W(d),N(u,d)};Q(o,u=>{r()!==void 0?u(s):u(l,!1)})}N(t,i)}var WH=ne('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function BH(t,e){ie(e,!1);const n=x();let r=U(e,"tool",8);U(e,"c_id",8,void 0),L(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),be(),ge();var i=WH();J(()=>S(i,"transform",`translate(${f(n).x} ${f(n).y})`)),N(t,i),oe()}var YH=ne('<g class="fog-lights-layer svelte-17myswq"></g>');function jH(t,e){ie(e,!1);const n=Be(),r=()=>fe(tn,"$toolStore",n),i=()=>fe(vi,"$enableFogMaskStore",n),o=x(),s=x();let l=U(e,"element",8);L(()=>r(),()=>{O(o,r())}),L(()=>i(),()=>{O(s,!i())}),be(),ge();var u=Ee(),d=ee(u);{var g=h=>{var v=YH();Qe(v,5,()=>Object.entries(l()),m=>m[0],(m,E)=>{BH(m,{get tool(){return f(E)[1]},get c_id(){return f(E)[0]}})}),W(v),J(()=>Et(v,"inactive",f(o)!==_.FOG_LIGHTS)),N(h,v)};Q(d,h=>{f(s)&&h(g)})}N(t,u),oe()}var KH=ne('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function ec(t,e){ie(e,!1);const n=x(),r=x(),i=x();let o=U(e,"cx",8),s=U(e,"cy",8),l=U(e,"c_id",8);L(()=>X(l()),()=>{O(n,document.getElementById(`c-${l()}`))}),L(()=>f(n),()=>{var h;O(r,(h=f(n))==null?void 0:h.getBBox())}),L(()=>f(r),()=>{O(i,f(r)?Math.max(f(r).width,f(r).height):void 0)}),be();var u=Ee(),d=ee(u);{var g=h=>{var v=KH(),m=j(v);S(m,"stroke-width",.6),W(v),J(()=>S(v,"transform",`translate(${o()}, ${s()}) scale(${f(i)*.6})`)),N(h,v)};Q(d,h=>{f(i)&&h(g)})}N(t,u),oe()}var VH=ne('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),XH=ne('<g class="edge-tool-preview"><!></g>');function qH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x();let l=U(e,"tool_preview",8);L(()=>X(l()),()=>{O(n,l().tool)}),L(()=>X(l()),()=>{O(r,l().mode)}),L(()=>X(l()),()=>{O(i,l().match_id)}),L(()=>f(n),()=>{O(o,f(n).cells)}),L(()=>f(o),()=>{O(s,Sp(Zl(f(o))))}),be(),ge();var u=Ee(),d=ee(u);{var g=v=>{var m=VH();S(m,"opacity",.5);var E=j(m);ec(E,{get cx(){return f(s).x},get cy(){return f(s).y},get c_id(){return f(i)}}),W(m),N(v,m)},h=v=>{var m=XH();S(m,"opacity",.5);var E=j(m);cm(E,{get tool(){return f(n)}}),W(m),N(v,m)};Q(d,v=>{f(r)==="remove"&&f(i)?v(g):v(h,!1)})}N(t,u),oe()}var ZH=ne('<g class="corner-tool-remove-preview"><!></g>'),QH=ne('<g class="corner-tool-preview"><!></g>');function JH(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x();let l=U(e,"tool_preview",8);L(()=>X(l()),()=>{O(n,l().tool)}),L(()=>X(l()),()=>{O(r,l().mode)}),L(()=>X(l()),()=>{O(i,l().match_id)}),L(()=>f(n),()=>{O(o,f(n).cells)}),L(()=>f(o),()=>{O(s,new Ue(f(o)[f(o).length-1].c,f(o)[f(o).length-1].r))}),be(),ge();var u=Ee(),d=ee(u);{var g=v=>{var m=ZH();S(m,"opacity",.5);var E=j(m);ec(E,{get cx(){return f(s).x},get cy(){return f(s).y},get c_id(){return f(i)}}),W(m),N(v,m)},h=v=>{var m=QH();S(m,"opacity",.5);var E=j(m);sm(E,{get tool(){return f(n)}}),W(m),N(v,m)};Q(d,v=>{f(r)==="remove"&&f(i)?v(g):v(h,!1)})}N(t,u),oe()}var e6=ne('<path fill="none" stroke-linecap="round"></path>'),t6=ne('<path fill="none" stroke-linecap="round"></path>'),n6=ne('<!><!><path fill="none" stroke-linecap="round"></path>',1);function dm(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x();let v=U(e,"tool",8),m=U(e,"c_id",8,void 0);L(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),L(()=>(X(v()),hh),()=>{O(o,un(v().toolId,zt)??hh)}),L(()=>(X(v()),f(o)),()=>{O(s,v().shape??f(o))}),L(()=>f(s),()=>{O(l,f(s).strokeWidth??.1)}),L(()=>f(s),()=>{O(u,f(s).stroke??"black")}),L(()=>f(s),()=>{O(d,{...f(s),stroke:"var(--grid-background-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.05:.05})}),L(()=>f(s),()=>{O(g,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.07:.07})}),L(()=>X(v()),()=>{O(h,Lz(v().cell,v().direction))}),be(),ge();var E=n6(),b=ee(E);{var I=k=>{var G=e6();J(()=>{S(G,"d",f(h)),S(G,"stroke",f(d).stroke),S(G,"stroke-width",f(d).strokeWidth)}),N(k,G)};Q(b,k=>{k(I)})}var w=F(b);{var A=k=>{var G=t6();J(()=>{S(G,"d",f(h)),S(G,"stroke",f(g).stroke),S(G,"stroke-width",f(g).strokeWidth)}),N(k,G)};Q(w,k=>{m()&&m()===f(i)&&k(A)})}var T=F(w);J(()=>{S(T,"d",f(h)),S(T,"stroke",f(u)),S(T,"stroke-width",f(l))}),N(t,E),oe()}var r6=ne('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),i6=ne('<g class="single-cell-arrow-tool-preview"><!></g>');function o6(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x();let s=U(e,"tool_preview",8);L(()=>X(s()),()=>{O(n,s().tool)}),L(()=>X(s()),()=>{O(r,s().mode)}),L(()=>X(s()),()=>{O(i,s().match_id)}),L(()=>f(n),()=>{O(o,{x:f(n).cell.c+.5,y:f(n).cell.r+.5})}),be(),ge();var l=Ee(),u=ee(l);{var d=h=>{var v=r6();S(v,"opacity",.5);var m=j(v);ec(m,{get cx(){return f(o).x},get cy(){return f(o).y},get c_id(){return f(i)}}),W(v),N(h,v)},g=h=>{var v=i6();S(v,"opacity",.5);var m=j(v);dm(m,{get tool(){return f(n)}}),W(v),N(h,v)};Q(u,h=>{f(r)==="remove"&&f(i)?h(d):h(g,!1)})}N(t,l),oe()}var s6=le("<!> <!>",1);function _m(t,e){ie(e,!1);const n=x(),r=x();let i=U(e,"cells",8),o=U(e,"shape",8,Hd),s=U(e,"value",8,void 0);L(()=>X(i()),()=>{O(n,i()[0])}),L(()=>f(n),()=>{O(r,new Ue(f(n).c,f(n).r))}),be(),ge();var l=s6(),u=ee(l);jr(u,{get cells(){return i()},get shape(){return o()}});var d=F(u,2);{var g=h=>{Ns(h,{get value(){return s()},get x(){return f(r).x},get y(){return f(r).y},position:"TL"})};Q(d,h=>{s()&&s().length&&h(g)})}N(t,l),oe()}var a6=ne('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Jh(t,e){ie(e,!1);const n=Be(),r=()=>fe(Q2,"$minimumConstraintsStore",n),i=()=>fe(J2,"$maximumConstraintsStore",n),o=x(),s=x(),l=x();let u=U(e,"coord",8),d=U(e,"minOrMax",8);function g(I,w){const A=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<T.length;k++){let G=T[k];const Y={r:I.r+G[1],c:I.c+G[0]};A[k]=!Object.values(w).some(M=>Je(Y,M.cell))}return A}function h(I,w){let A=Sz(d(),I.r,I.c);const T=g(I,w);return A=A.filter((G,Y)=>T[Y]),A.map(G=>qo(G,!1)).join("")}function v(I,w){return d()==="max"?w:I}L(()=>X(u()),()=>{O(o,u().c)}),L(()=>X(u()),()=>{O(s,u().r)}),L(()=>(r(),i()),()=>{O(l,v(r(),i()))}),be(),ge();var m=a6(),E=j(m);S(E,"width",1),S(E,"height",1);var b=F(E);J(()=>S(b,"d",h(u(),f(l)))),W(m),J(()=>{S(E,"x",f(o)),S(E,"y",f(s))}),N(t,m),oe()}var l6=ne("<circle></circle>");function c6(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x();let u=U(e,"x",8),d=U(e,"y",8),g=U(e,"value",8),h=U(e,"shape",8);L(()=>X(h()),()=>{O(n,h().r??.35)}),L(()=>X(h()),()=>{O(r,h().stroke??"black")}),L(()=>X(h()),()=>{var m;O(i,(m=h())==null?void 0:m.opacity)}),L(()=>X(h()),()=>{O(o,h().strokeWidth??.02)}),L(()=>X(g()),()=>{O(s,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),L(()=>X(h()),()=>{O(l,h().strokeDasharray??0)}),be(),ge();var v=l6();J(()=>{S(v,"cx",u()),S(v,"cy",d()),S(v,"r",f(n)),S(v,"stroke",f(r)),S(v,"stroke-width",f(o)),S(v,"fill",f(s)),S(v,"opacity",f(i)),S(v,"stroke-dasharray",f(l))}),N(t,v),oe()}var u6=ne("<!><!>",1),d6=ne("<!><!>",1),_6=ne("<!><!><!>",1),f6=ne('<g class="single-cell-tool"><!><!></g>');function fm(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);L(()=>r(),()=>{var G;O(i,(G=r())==null?void 0:G.id)}),L(()=>(X(m()),gh),()=>{O(o,un(m().toolId,zt)??gh)}),L(()=>(X(m()),f(o)),()=>{O(s,m().shape??f(o))}),L(()=>(f(s),B),()=>{var G;O(l,((G=f(s))==null?void 0:G.type)||B.CIRCLE)}),L(()=>f(s),()=>{O(u,{...f(s),stroke:"var(--grid-background-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.06:.06})}),L(()=>f(s),()=>{O(d,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.07:.07})}),L(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),L(()=>X(m()),()=>{O(h,new Ue(m().cell.c,m().cell.r))}),L(()=>X(m()),()=>{O(v,m().value)}),be(),ge();var b=f6(),I=j(b);{var w=G=>{Jh(G,{get coord(){return m().cell},minOrMax:"min"})},A=G=>{var Y=Ee(),M=ee(Y);{var P=ce=>{Jh(ce,{get coord(){return m().cell},minOrMax:"max"})},te=ce=>{var se=Ee(),ue=ee(se);{var ye=Ie=>{var Ce=u6(),Oe=ee(Ce);{var Ae=De=>{Dr(De,{get cx(){return f(g).x},get cy(){return f(g).y},get shape(){return f(d)}})};Q(Oe,De=>{E()&&E()===f(i)&&De(Ae)})}var Se=F(Oe);c6(Se,{get x(){return f(g).x},get y(){return f(g).y},get value(){return f(v)},get shape(){return f(s)}}),N(Ie,Ce)},Z=Ie=>{var Ce=Ee(),Oe=ee(Ce);{var Ae=De=>{var $e=d6(),st=ee($e);{var ut=It=>{var wt=ft(()=>[m().cell]);jr(It,{get cells(){return f(wt)},get shape(){return f(d)}})};Q(st,It=>{E()&&E()===f(i)&&It(ut)})}var bt=F(st),dt=ft(()=>[m().cell]);_m(bt,{get cells(){return f(dt)},get shape(){return f(s)},get value(){return m().value}}),N(De,$e)},Se=De=>{var $e=_6(),st=ee($e);{var ut=wt=>{Dr(wt,{get cx(){return f(g).x},get cy(){return f(g).y},get shape(){return f(u)}})};Q(st,wt=>{wt(ut)})}var bt=F(st);{var dt=wt=>{Dr(wt,{get cx(){return f(g).x},get cy(){return f(g).y},get shape(){return f(d)}})};Q(bt,wt=>{E()&&E()===f(i)&&wt(dt)})}var It=F(bt);Dr(It,{get cx(){return f(g).x},get cy(){return f(g).y},get shape(){return f(s)}}),N(De,$e)};Q(Oe,De=>{f(l)===B.CAGE?De(Ae):De(Se,!1)},!0)}N(Ie,Ce)};Q(ue,Ie=>{m().toolId===_.COLORED_COUNTING_CIRCLES?Ie(ye):Ie(Z,!1)},!0)}N(ce,se)};Q(M,ce=>{m().toolId===_.MAXIMUM?ce(P):ce(te,!1)},!0)}N(G,Y)};Q(I,G=>{m().toolId===_.MINIMUM?G(w):G(A,!1)})}var T=F(I);{var k=G=>{Ns(G,{get value(){return f(v)},get x(){return f(h).x},get y(){return f(h).y},position:"TL"})};Q(T,G=>{f(l)!==B.CAGE&&m().toolId!==_.COLORED_COUNTING_CIRCLES&&f(v)&&G(k)})}W(b),J(()=>S(b,"data-id",`${E()}`)),N(t,b),oe()}var g6=ne('<g class="single-cell-tool-preview"><!></g>');function h6(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x();let s=U(e,"tool_preview",8);L(()=>X(s()),()=>{O(n,s().tool)}),L(()=>X(s()),()=>{O(r,s().mode)}),L(()=>X(s()),()=>{O(i,s().match_id)}),L(()=>f(n),()=>{O(o,{x:f(n).cell.c+.5,y:f(n).cell.r+.5})}),be(),ge();var l=g6();S(l,"opacity",.5);var u=j(l);fm(u,{get tool(){return f(n)}}),W(l),N(t,l),oe()}var v6=ne('<g class="single-cell-arrow-tool"><!></g>');function p6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=v6(),d=j(u);dm(d,{get tool(){return n()},get c_id(){return r()}}),W(u),J(()=>S(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}N(t,i)}var m6=ne('<g class="single-cell-tool"><!></g>');function E6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=m6(),d=j(u);fm(d,{get tool(){return n()},get c_id(){return r()}}),W(u),J(()=>S(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}N(t,i)}function C6(t,e){ie(e,!1);let n=U(e,"tool",8),r=U(e,"c_id",8);ge();var i=Ee(),o=ee(i);{var s=l=>{var u=Ee(),d=ee(u);{var g=v=>{p6(v,{get tool(){return n()},get c_id(){return r()}})},h=v=>{var m=Ee(),E=ee(m);{var b=w=>{um(w,{get tool(){return n()},get c_id(){return r()}})},I=w=>{var A=Ee(),T=ee(A);{var k=G=>{E6(G,{get tool(){return n()},get c_id(){return r()}})};Q(T,G=>{n().type==="SIMPLE"&&G(k)},!0)}N(w,A)};Q(E,w=>{n().type==="MULTIARROW"?w(b):w(I,!1)},!0)}N(v,m)};Q(d,v=>{n().type==="ARROW"?v(g):v(h,!1)})}N(l,u)};Q(o,l=>{n().toolId!==_.FOG_LIGHTS&&l(s)})}N(t,i),oe()}var b6=le("<!> <!> <!>",1);function Pu(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x();let s=U(e,"linePoints",8),l=U(e,"shape",8,ks);function u(I){var T;const w=xt.cloneDeep(I);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=I.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(T=w.linePathOptions)==null?void 0:T.bezierRounding},w}L(()=>X(s()),()=>{O(n,s().length)}),L(()=>(f(n),X(s())),()=>{O(r,f(n)>=0?s()[0]:void 0)}),L(()=>(f(n),X(s())),()=>{O(i,f(n)>=0?s()[f(n)-1]:void 0)}),L(()=>X(l()),()=>{O(o,u(l()))}),be(),ge();var d=b6(),g=ee(d);{var h=I=>{Cr(I,{get x(){return f(r).x},get y(){return f(r).y},get shape(){return f(o)}})};Q(g,I=>{f(r)&&I(h)})}var v=F(g,2);{var m=I=>{di(I,{get linePoints(){return s()},get shape(){return f(o)}})};Q(v,I=>{f(n)>1&&I(m)})}var E=F(v,2);{var b=I=>{Cr(I,{get x(){return f(i).x},get y(){return f(i).y},get shape(){return f(o)}})};Q(E,I=>{f(i)&&I(b)})}N(t,d),oe()}var I6=le("<!> <!> <!>",1);function zu(t,e){ie(e,!1);const n=x(),r=x(),i=x();let o=U(e,"linePoints",8),s=U(e,"shape",12,ks);const l=4,u=.5;function d(k,G){const Y=G.r??u,M=G.n??l,P=G.angle??0,te=rm(Y,M,new Ue(0,0),!0,0),ce=(M+(k-P/360)*M%M)%M,se=Math.floor(ce)%M,ue=Math.ceil(ce)%M;return te[se].lerp(te[ue],ce%1).length()}function g(k){if(f(n)<=1)return 0;const G=o()[0],M=o()[1].subtract(G).angle()/(2*Math.PI);return d(M,k)}function h(k){if(f(n)<=1)return 0;const G=o()[f(n)-1],M=o()[f(n)-2].subtract(G).angle()/(2*Math.PI);return d(M,k)}function v(k){var Y;const G=xt.cloneDeep(k);return G.r=G.r||u,G.opacity=1,G.linePathOptions={shortenHead:g(G),shortenTail:h(G),bezierRounding:(Y=G.linePathOptions)==null?void 0:Y.bezierRounding},G}L(()=>X(o()),()=>{O(n,o().length)}),L(()=>(f(n),X(o())),()=>{O(r,f(n)>=0?o()[0]:void 0)}),L(()=>(f(n),X(o())),()=>{O(i,f(n)>=0?o()[f(n)-1]:void 0)}),L(()=>X(s()),()=>{s(v(s()))}),be(),ge();var m=I6(),E=ee(m);{var b=k=>{ml(k,{get cx(){return f(r).x},get cy(){return f(r).y},get shape(){return s()}})};Q(E,k=>{f(r)&&k(b)})}var I=F(E,2);{var w=k=>{di(k,{get linePoints(){return o()},get shape(){return s()}})};Q(I,k=>{f(n)>1&&k(w)})}var A=F(I,2);{var T=k=>{ml(k,{get cx(){return f(i).x},get cy(){return f(i).y},get shape(){return s()}})};Q(A,k=>{f(i)&&k(T)})}N(t,m),oe()}var w6=le("<!> <!>",1);function Hu(t,e){ie(e,!1);const n=x();let r=U(e,"linePoints",8),i=U(e,"shape",8,ks);function o(m){var I,w,A;const E=xt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const b=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||b,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function s(m){var I,w,A;const E=xt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const b=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||b,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}L(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),be(),ge();var l=w6(),u=ee(l);{var d=m=>{var E=ft(()=>o(i()));di(m,{get linePoints(){return r()},get shape(){return f(E)}})};Q(u,m=>{r().length>1&&m(d)})}var g=F(u,2);{var h=m=>{var E=ft(()=>o(i()));Cr(m,{get x(){return f(n).x},get y(){return f(n).y},get shape(){return f(E)}})},v=m=>{var E=Ee(),b=ee(E);{var I=w=>{var A=ft(()=>s(i()));ml(w,{get cx(){return f(n).x},get cy(){return f(n).y},get shape(){return f(A)}})};Q(b,w=>{f(n)&&w(I)},!0)}N(m,E)};Q(g,m=>{f(n)&&i().type===B.THERMO_WITH_CIRCLE?m(h):m(v,!1)})}N(t,l),oe()}var y6=ne("<!><!><!>",1),O6=ne("<!><!><!>",1),A6=ne("<!><!><!>",1),x6=ne("<!><!><!>",1),S6=ne('<g class="line-tool"><!></g>');function N6(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x();let h=U(e,"tool",8),v=U(e,"c_id",8);const m=un(h().toolId,zt)??ks;L(()=>r(),()=>{var A;O(i,(A=r())==null?void 0:A.id)}),L(()=>X(h()),()=>{O(o,Zl(h().cells))}),L(()=>X(h()),()=>{O(s,h().shape??m)}),L(()=>(f(s),B),()=>{var A;O(l,((A=f(s))==null?void 0:A.type)||B.LINE)}),L(()=>f(s),()=>{var A;O(u,((A=f(s))==null?void 0:A.opacity)??1)}),L(()=>f(s),()=>{O(d,{...f(s),stroke:"var(--grid-background-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.06:.06})}),L(()=>f(s),()=>{O(g,{...f(s),stroke:"var(--constraint-selected-color)",strokeWidth:f(s).strokeWidth?f(s).strokeWidth+.07:.07})}),be(),ge();var E=S6(),b=j(E);{var I=A=>{var T=y6(),k=ee(T);{var G=te=>{Pu(te,{get linePoints(){return f(o)},get shape(){return f(d)}})};Q(k,te=>{te(G)})}var Y=F(k);{var M=te=>{Pu(te,{get linePoints(){return f(o)},get shape(){return f(g)}})};Q(Y,te=>{v()===f(i)&&te(M)})}var P=F(Y);Pu(P,{get linePoints(){return f(o)},get shape(){return f(s)}}),N(A,T)},w=A=>{var T=Ee(),k=ee(T);{var G=M=>{var P=O6(),te=ee(P);{var ce=Z=>{zu(Z,{get linePoints(){return f(o)},get shape(){return f(d)}})};Q(te,Z=>{Z(ce)})}var se=F(te);{var ue=Z=>{zu(Z,{get linePoints(){return f(o)},get shape(){return f(g)}})};Q(se,Z=>{v()===f(i)&&Z(ue)})}var ye=F(se);zu(ye,{get linePoints(){return f(o)},get shape(){return f(s)}}),N(M,P)},Y=M=>{var P=Ee(),te=ee(P);{var ce=ue=>{var ye=A6(),Z=ee(ye);{var Ie=Se=>{Hu(Se,{get linePoints(){return f(o)},get shape(){return f(d)}})};Q(Z,Se=>{Se(Ie)})}var Ce=F(Z);{var Oe=Se=>{Hu(Se,{get linePoints(){return f(o)},get shape(){return f(g)}})};Q(Ce,Se=>{v()===f(i)&&Se(Oe)})}var Ae=F(Ce);Hu(Ae,{get linePoints(){return f(o)},get shape(){return f(s)}}),N(ue,ye)},se=ue=>{var ye=x6(),Z=ee(ye);{var Ie=Se=>{di(Se,{get linePoints(){return f(o)},get shape(){return f(d)}})};Q(Z,Se=>{Se(Ie)})}var Ce=F(Z);{var Oe=Se=>{di(Se,{get linePoints(){return f(o)},get shape(){return f(g)}})};Q(Ce,Se=>{v()===f(i)&&Se(Oe)})}var Ae=F(Ce);di(Ae,{get linePoints(){return f(o)},get shape(){return f(s)}}),N(ue,ye)};Q(te,ue=>{f(l)===B.THERMO_WITH_CIRCLE||f(l)===B.THERMO_WITH_POLYGON?ue(ce):ue(se,!1)},!0)}N(M,P)};Q(k,M=>{f(l)===B.LINE_WITH_POLYGON_ENDS?M(G):M(Y,!1)},!0)}N(A,T)};Q(b,A=>{f(l)===B.LINE_WITH_CIRCLE_ENDS?A(I):A(w,!1)})}W(E),J(()=>S(E,"opacity",f(u))),N(t,E),oe()}var L6=ne('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function gm(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),o=U(e,"stroke",8,"black");const s=.5,l=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=L6();S(u,"viewBox","0 0 1 1"),S(u,"refX",s),S(u,"refY",s),S(u,"markerWidth",1),S(u,"markerHeight",1);var d=j(u);S(d,"d",l),W(u),J(()=>{S(u,"id",r()),S(d,"stroke-width",i()),S(d,"stroke",o())}),N(t,u)}var R6=ne('<path class="arrow-line" fill="none"></path>'),D6=ne("<!><!><!>",1);function T6(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x();let m=U(e,"tool",8),E=U(e,"arrowId",8);const b=un(m().toolId,zt)??$v,I="round",w="round",A=crypto.randomUUID(),T=`arrow-marker-${E()}-${A}`;L(()=>X(m()),()=>{O(n,m().shape??b)}),L(()=>f(n),()=>{var P;O(r,((P=f(n))==null?void 0:P.r)??.4)}),L(()=>f(n),()=>{var P;O(i,((P=f(n))==null?void 0:P.stroke)??"gray")}),L(()=>f(n),()=>{var P;O(o,((P=f(n))==null?void 0:P.strokeWidth)??.1)}),L(()=>f(n),()=>{var P;O(s,((P=f(n))==null?void 0:P.strokeDasharray)??0)}),L(()=>f(n),()=>{var P;O(l,((P=f(n))==null?void 0:P.opacity)??.8)}),L(()=>(f(r),f(n)),()=>{var P,te,ce,se;O(u,{shortenHead:f(r),shortenTail:((te=(P=f(n))==null?void 0:P.linePathOptions)==null?void 0:te.shortenTail)??.2,bezierRounding:((se=(ce=f(n))==null?void 0:ce.linePathOptions)==null?void 0:se.bezierRounding)??.4})}),L(()=>f(n),()=>{var P;O(d,((P=f(n))==null?void 0:P.fill)??"none")}),L(()=>f(n),()=>{var P;O(g,((P=f(n))==null?void 0:P.inset)??.2)}),L(()=>f(g),()=>{O(h,{...b,strokeDasharray:0,strokeLinejoin:"round",inset:f(g)})}),L(()=>X(m()),()=>{O(v,pl(m().cells))}),be(),ge();var k=D6(),G=ee(k);gm(G,{id:T,l:.2,get strokeWidth(){return f(o)},get stroke(){return f(i)}});var Y=F(G);jr(Y,{get cells(){return m().cells},get shape(){return f(h)}});var M=F(Y);Qe(M,1,()=>m().lines,pt,(P,te)=>{var ce=Ee(),se=ee(ce);{var ue=ye=>{var Z=R6();J(()=>S(Z,"d",pl(f(te),f(u)))),S(Z,"stroke-linejoin",I),S(Z,"stroke-linecap",w),S(Z,"marker-end",`url(#${T??""})`),J(()=>{S(Z,"stroke",f(i)),S(Z,"stroke-width",f(o)),S(Z,"opacity",f(l)),S(Z,"stroke-dasharray",f(s))}),N(ye,Z)};Q(se,ye=>{f(te).length>1&&ye(ue)})}N(P,ce)}),N(t,k),oe()}var k6=ne('<path class="arrow-line" fill="none"></path>'),M6=ne('<mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><path class="arrow-bulb svelte-8t4zyo" stroke="white" fill="none"></path><path class="arrow-bulb svelte-8t4zyo" stroke="black" fill="none"></path></mask><!><path class="arrow-bulb svelte-8t4zyo"></path><!>',1);function Wu(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x(),s=x(),l=x(),u=x();let d=U(e,"tool",8),g=U(e,"c_id",8),h=U(e,"shape",8);const v="round",m="round",E=crypto.randomUUID(),b=`arrow-mask-${g()}-${E}`,I=`arrow-marker-${g()}-${E}`;L(()=>X(h()),()=>{var P;O(n,((P=h())==null?void 0:P.r)??.4)}),L(()=>X(h()),()=>{var P;O(r,((P=h())==null?void 0:P.stroke)??"gray")}),L(()=>X(h()),()=>{var P;O(i,((P=h())==null?void 0:P.strokeWidth)??.1)}),L(()=>X(h()),()=>{var P;O(o,((P=h())==null?void 0:P.strokeDasharray)??0)}),L(()=>(f(n),X(h())),()=>{var P,te,ce,se;O(s,{shortenHead:f(n),shortenTail:((te=(P=h())==null?void 0:P.linePathOptions)==null?void 0:te.shortenTail)??.2,bezierRounding:((se=(ce=h())==null?void 0:ce.linePathOptions)==null?void 0:se.bezierRounding)??.4})}),L(()=>X(d()),()=>{O(l,pl(d().cells))}),L(()=>X(d()),()=>{O(u,yz(d().cells))}),be(),ge();var w=M6(),A=ee(w);S(A,"id",b);var T=j(A),k=F(T);W(A);var G=F(A);gm(G,{id:I,l:.2,get strokeWidth(){return f(i)},get stroke(){return f(r)}});var Y=F(G);S(Y,"mask",`url(#${b??""})`);var M=F(Y);Qe(M,1,()=>d().lines,pt,(P,te)=>{var ce=Ee(),se=ee(ce);{var ue=ye=>{var Z=k6();J(()=>S(Z,"d",pl(f(te),f(s)))),S(Z,"stroke-linejoin",v),S(Z,"stroke-linecap",m),S(Z,"marker-end",`url(#${I??""})`),J(()=>{S(Z,"stroke",f(r)),S(Z,"stroke-width",f(i)),S(Z,"stroke-dasharray",f(o))}),N(ye,Z)};Q(se,ye=>{f(te).length>1&&ye(ue)})}N(P,ce)}),J(()=>{S(A,"x",f(u).x),S(A,"y",f(u).y),S(A,"width",f(u).width),S(A,"height",f(u).height),S(T,"stroke-width",2*f(n)+f(i)),S(T,"d",f(l)),S(k,"stroke-width",2*f(n)-f(i)),S(k,"d",f(l)),S(Y,"d",f(l)),S(Y,"stroke-width",2*f(n)+f(i)),S(Y,"stroke",f(r))}),N(t,w),oe()}var U6=ne("<!><!><!>",1),G6=ne('<g class="arrow-tool"><!></g>');function $6(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x();let u=U(e,"tool",8),d=U(e,"c_id",8);const g=un(u().toolId,zt)??$v;L(()=>X(u()),()=>{O(i,u().shape??g)}),L(()=>f(i),()=>{O(o,{...f(i),stroke:"var(--grid-background-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.06:.06})}),L(()=>f(i),()=>{O(s,{...f(i),stroke:"var(--constraint-selected-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.07:.07})}),L(()=>r(),()=>{var b;O(l,(b=r())==null?void 0:b.id)}),be(),ge();var h=G6(),v=j(h);{var m=b=>{T6(b,{get tool(){return u()},get arrowId(){return d()}})},E=b=>{var I=U6(),w=ee(I);{var A=Y=>{Wu(Y,{get tool(){return u()},get c_id(){return d()},get shape(){return f(o)}})};Q(w,Y=>{Y(A)})}var T=F(w);{var k=Y=>{Wu(Y,{get tool(){return u()},get c_id(){return d()},get shape(){return f(s)}})};Q(T,Y=>{d()===f(l)&&Y(k)})}var G=F(T);Wu(G,{get tool(){return u()},get c_id(){return d()},get shape(){return f(i)}}),N(b,I)};Q(v,b=>{f(i).type===B.BULBOUS_ARROW?b(m):b(E,!1)})}W(h),N(t,h),oe()}var F6=ne('<g class="cage-tool"><!><!></g>');function P6(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x();let l=U(e,"tool",8),u=U(e,"c_id",8);const d=un(l().toolId,zt)??Hd;L(()=>X(l()),()=>{O(i,l().shape??d)}),L(()=>r(),()=>{var E;O(o,(E=r())==null?void 0:E.id)}),L(()=>f(i),()=>{O(s,{...f(i),stroke:"var(--constraint-selected-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.07:.07})}),be(),ge();var g=F6(),h=j(g);{var v=E=>{jr(E,{get cells(){return l().cells},get shape(){return f(s)}})};Q(h,E=>{u()===f(o)&&E(v)})}var m=F(h);_m(m,{get cells(){return l().cells},get shape(){return f(i)},get value(){return l().value}}),W(g),N(t,g),oe()}var z6=ne("<!><!>",1),H6=ne('<g class="clone-tool"><!><!><!><!><!></g>');function W6(t,e){ie(e,!1);const n=Be(),r=()=>fe(Ht,"$currentConstraintStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x(),m=x();let E=U(e,"tool",8),b=U(e,"c_id",8);const I=un(E().toolId,zt)??Xy,w=800,A=E().value;L(()=>r(),()=>{var ce;O(i,(ce=r())==null?void 0:ce.id)}),L(()=>X(E()),()=>{O(o,E().shape??I)}),L(()=>f(o),()=>{O(s,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),L(()=>f(o),()=>{O(l,f(o).inset??.15)}),L(()=>f(o),()=>{O(u,f(o).strokeWidth??.07)}),L(()=>f(o),()=>{O(d,f(o).fontColor??f(o).stroke??"black")}),L(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),L(()=>X(E()),()=>{O(h,E().cells2[E().cells2.length-1])}),L(()=>(f(g),f(l)),()=>{O(v,new Ue(f(g).c+1-f(l)-.05,f(g).r+1-f(l)-.05))}),L(()=>(f(h),f(l)),()=>{O(m,new Ue(f(h).c+1-f(l)-.05,f(h).r+1-f(l)-.05))}),be(),ge();var T=H6(),k=j(T);{var G=ce=>{var se=z6(),ue=ee(se);jr(ue,{get cells(){return E().cells},get shape(){return f(s)}});var ye=F(ue);jr(ye,{get cells(){return E().cells2},get shape(){return f(s)}}),N(ce,se)};Q(k,ce=>{b()===f(i)&&ce(G)})}var Y=F(k);jr(Y,{get cells(){return E().cells},get shape(){return f(o)}});var M=F(Y);Ns(M,{value:A,get x(){return f(v).x},get y(){return f(v).y},position:"BR",get fontColor(){return f(d)},fontWeight:w});var P=F(M);jr(P,{get cells(){return E().cells2},get shape(){return f(o)}});var te=F(P);Ns(te,{value:A,get x(){return f(m).x},get y(){return f(m).y},position:"BR",get fontColor(){return f(d)},fontWeight:w}),W(T),N(t,T),oe()}var B6=ne('<g class="element-group"><!></g>'),Y6=ne('<g class="underlay-layer"></g>');function j6(t,e){ie(e,!1);const n=Be(),r=()=>fe(q2,"$underlayElementsStore",n),i=()=>fe(vi,"$enableFogMaskStore",n),o=x(),s=x();L(()=>r(),()=>{O(o,r())}),L(()=>i(),()=>{O(s,i())}),be(),ge();var l=Y6();Qe(l,5,()=>f(o),pt,(u,d)=>{var g=Ee(),h=ee(g);{var v=m=>{var E=B6(),b=j(E);{var I=A=>{var T=Ee(),k=ee(T);Qe(k,1,()=>Object.entries(f(d).constraints),G=>G[0],(G,Y)=>{C6(G,{get tool(){return f(Y)[1]},get c_id(){return f(Y)[0]}})}),N(A,T)},w=A=>{var T=Ee(),k=ee(T);{var G=M=>{var P=Ee(),te=ee(P);Qe(te,1,()=>Object.entries(f(d).constraints),ce=>ce[0],(ce,se)=>{N6(ce,{get tool(){return f(se)[1]},get c_id(){return f(se)[0]}})}),N(M,P)},Y=M=>{var P=Ee(),te=ee(P);{var ce=ue=>{var ye=Ee(),Z=ee(ye);Qe(Z,1,()=>Object.entries(f(d).constraints),Ie=>Ie[0],(Ie,Ce)=>{$6(Ie,{get tool(){return f(Ce)[1]},get c_id(){return f(Ce)[0]}})}),N(ue,ye)},se=ue=>{var ye=Ee(),Z=ee(ye);{var Ie=Oe=>{var Ae=Ee(),Se=ee(Ae);Qe(Se,1,()=>Object.entries(f(d).constraints),De=>De[0],(De,$e)=>{P6(De,{get tool(){return f($e)[1]},get c_id(){return f($e)[0]}})}),N(Oe,Ae)},Ce=Oe=>{var Ae=Ee(),Se=ee(Ae);{var De=st=>{var ut=Ee(),bt=ee(ut);Qe(bt,1,()=>Object.entries(f(d).constraints),dt=>dt[0],(dt,It)=>{W6(dt,{get tool(){return f(It)[1]},get c_id(){return f(It)[0]}})}),N(st,ut)},$e=st=>{var ut=Ee(),bt=ee(ut);{var dt=It=>{var wt=Ee(),In=ee(wt);Qe(In,1,()=>Object.entries(f(d).constraints),dn=>dn[0],(dn,yr)=>{lm(dn,{get tool(){return f(yr)[1]},get c_id(){return f(yr)[0]}})}),N(It,wt)};Q(bt,It=>{Xr(f(d).tool_id)&&It(dt)},!0)}N(st,ut)};Q(Se,st=>{Ts(f(d).tool_id)?st(De):st($e,!1)},!0)}N(Oe,Ae)};Q(Z,Oe=>{xo(f(d).tool_id)?Oe(Ie):Oe(Ce,!1)},!0)}N(ue,ye)};Q(te,ue=>{Ao(f(d).tool_id)?ue(ce):ue(se,!1)},!0)}N(M,P)};Q(k,M=>{Oo(f(d).tool_id)?M(G):M(Y,!1)},!0)}N(A,T)};Q(b,A=>{Fd(f(d).tool_id)?A(I):A(w,!1)})}W(E),J(()=>S(E,"data-toolId",f(d).tool_id)),N(m,E)};Q(h,m=>{f(d).constraints&&m(v)})}N(u,g)}),W(l),J(()=>S(l,"mask",f(s)?"url(#fog-mask-fog)":null)),N(t,l),oe()}var K6=ne('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),V6=ne('<g class="center-corner-or-edge-tool-preview"><!></g>');function X6(t,e){ie(e,!1);const n=x(),r=x(),i=x(),o=x();let s=U(e,"tool_preview",8);L(()=>X(s()),()=>{O(n,s().tool)}),L(()=>X(s()),()=>{O(r,s().mode)}),L(()=>X(s()),()=>{O(i,s().match_id)}),L(()=>f(n),()=>{O(o,f(n).cell)}),be(),ge();var l=Ee(),u=ee(l);{var d=h=>{var v=K6();S(v,"opacity",.5);var m=j(v);ec(m,{get cx(){return f(o).c},get cy(){return f(o).r},get c_id(){return f(i)}}),W(v),N(h,v)},g=h=>{var v=V6();S(v,"opacity",.5);var m=j(v);am(m,{get tool(){return f(n)}}),W(v),N(h,v)};Q(u,h=>{f(r)==="remove"&&f(i)?h(d):h(g,!1)})}N(t,l),oe()}var q6=ne('<line class="positive-diagonal"></line>'),Z6=ne('<line class="negative-diagonal"></line>'),Q6=ne('<g class="element-group"><!></g>');function J6(t,e){ie(e,!1);const n=Be(),r=()=>fe(hn,"$gridStore",n),i=x(),o=x(),s=x(),l=x(),u=x(),d=x(),g=x(),h=x(),v=x(),m=x();let E=U(e,"element",8);const b=0,I=0,w=0,A=0;L(()=>X(E()),()=>{O(i,E().tool_id)}),L(()=>(X(E()),mh),()=>{O(o,un(E().tool_id,zt)??mh)}),L(()=>f(o),()=>{var M;O(s,((M=f(o))==null?void 0:M.strokeWidth)??.02)}),L(()=>f(o),()=>{var M;O(l,((M=f(o))==null?void 0:M.stroke)??"black")}),L(()=>r(),()=>{O(u,r())}),L(()=>(f(i),_),()=>{O(d,f(i)===_.POSITIVE_DIAGONAL||f(i)===_.POSITIVE_ANTIDIAGONAL||f(i)===_.PARITY_MIRROR_POSITIVE_DIAGONAL)}),L(()=>f(u),()=>{O(g,f(u).nCols)}),L(()=>f(u),()=>{O(h,f(u).nRows)}),L(()=>f(u),()=>{O(v,f(u).nCols)}),L(()=>f(u),()=>{O(m,f(u).nRows)}),be(),ge();var T=Q6(),k=j(T);{var G=M=>{var P=q6();S(P,"x2",A),S(P,"y1",w),J(()=>{S(P,"x1",f(g)),S(P,"y2",f(h)),S(P,"stroke",f(l)),S(P,"stroke-width",f(s))}),N(M,P)},Y=M=>{var P=Z6();S(P,"x1",b),S(P,"y1",I),J(()=>{S(P,"x2",f(v)),S(P,"y2",f(m)),S(P,"stroke",f(l)),S(P,"stroke-width",f(s))}),N(M,P)};Q(k,M=>{f(d)?M(G):M(Y,!1)})}W(T),J(()=>S(T,"data-toolId",E().tool_id)),N(t,T),oe()}function eW(t,e){ie(e,!1);const n=Be(),r=()=>fe(iT,"$diagonalElementsStore",n),i=x();L(()=>r(),()=>{O(i,r())}),be();var o=Ee(),s=ee(o);Qe(s,1,()=>f(i),pt,(l,u)=>{J6(l,{get element(){return f(u)}})}),N(t,o),oe()}var tW=ne('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function nW(t){var e=tW(),n=j(e);S(n,"opacity",.5),W(e),N(t,e)}var rW=ne('<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" class="svelte-1qi1v0f"><rect class="fog-mask-white svelte-1qi1v0f"></rect><g class="fog-mask-black svelte-1qi1v0f"><use href="#fog-edge"></use></g></mask>'),iW=ne('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge"><use class="fog-edge-1 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-2 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-3 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-4 svelte-1qi1v0f" href="#fog-shape"></use><use href="#fog-shape"></use></g><!><mask id="fog-mask-light" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1qi1v0f"></rect><rect class="fog-mask-black svelte-1qi1v0f" mask="url(#fog-mask-fog)"></rect></mask></defs>');function oW(t,e){ie(e,!1);const n=Be(),r=()=>fe(vi,"$enableFogMaskStore",n),i=()=>fe(Ml,"$solutionStore",n),o=()=>fe(hn,"$gridStore",n),s=()=>fe(Np,"$fogLightsStore",n),l=()=>fe(Z2,"$customFogClearingStore",n),u=()=>fe(Pn,"$cellsStore",n),d=x(),g=x(),h=x(),v=x(),m=x(),E=x(),b=x(),I=x();let w=U(e,"gridShape",8);function A(Se){const De=[];if(!Se)return De;for(const $e of Object.entries(Se)){const st=$e[1].cell,ut=f(h).getCell(st.r,st.c);ut&&De.push(ut)}return De}function T(Se){const De=[];for(const $e of Se)$e.value!==null&&!$e.given&&De.push($e);return De}function k(Se,De){const $e=[];if(De)for(const st of Se){const ut=De[st.r][st.c];ut!==null&&st.value===ut&&!st.given&&$e.push(st)}return $e}function G(Se,De,$e){const st=A(De);let ut=new Set(Se);ut=ut.difference(new Set(st));let bt=T(Se);f(g)&&(bt=k(bt,f(g)));const dt=$e==null?void 0:$e.negative_constraints;if(dt){const wt=new Set;!!dt[_.FOG_CLEARING_ITSELF]&&bt.forEach(we=>wt.add(we)),!!dt[_.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS]&&bt.forEach(we=>f(h).getOrthogonallyAdjacentCells(we).forEach(Te=>wt.add(Te))),!!dt[_.FOG_CLEARING_DIAGONAL_NEIGHBOURS]&&bt.forEach(we=>f(h).getDiagonallyAdjacentCells(we).forEach(Te=>wt.add(Te))),!!dt[_.FOG_CLEARING_CONTAINING_ROW]&&bt.forEach(we=>f(h).getRow(we.r).forEach(Te=>wt.add(Te))),!!dt[_.FOG_CLEARING_CONTAINING_COLUMN]&&bt.forEach(we=>f(h).getCol(we.c).forEach(Te=>wt.add(Te))),!!dt[_.FOG_CLEARING_KNIGHTS_MOVE]&&bt.forEach(we=>f(h).getCellsByKnightMove(we).forEach(Te=>wt.add(Te))),ut=ut.difference(wt)}return[...ut].map(wt=>wt.toCoords())}L(()=>r(),()=>{O(d,!r())}),L(()=>i(),()=>{O(g,i())}),L(()=>o(),()=>{O(h,o())}),L(()=>s(),()=>{O(v,s())}),L(()=>l(),()=>{O(m,l())}),L(()=>u(),()=>{O(b,u())}),L(()=>(f(b),f(v),f(m)),()=>{O(I,G(f(b),f(v),f(m)))}),L(()=>f(I),()=>{O(E,bo(f(I),0))}),be(),ge();var Y=iW(),M=j(Y),P=j(M);W(M);var te=F(M),ce=j(te);S(ce,"stroke-width",.4);var se=F(ce);S(se,"stroke-width",.3);var ue=F(se);S(ue,"stroke-width",.2);var ye=F(ue);S(ye,"stroke-width",.1),_i(),W(te);var Z=F(te);{var Ie=Se=>{var De=rW();S(De,"x",0),S(De,"y",0);var $e=j(De);S($e,"x",0),S($e,"y",0),_i(),W(De),J(()=>{S(De,"width",w().nCols),S(De,"height",w().nRows),Et(De,"disabled",f(d)),S($e,"width",w().nCols),S($e,"height",w().nRows)}),N(Se,De)};Q(Z,Se=>{f(d)||Se(Ie)})}var Ce=F(Z);S(Ce,"x",0),S(Ce,"y",0);var Oe=j(Ce);S(Oe,"x",0),S(Oe,"y",0);var Ae=F(Oe);S(Ae,"x",0),S(Ae,"y",0),W(Ce),W(Y),J(()=>{S(P,"d",f(E)),S(Ce,"width",w().nCols),S(Ce,"height",w().nRows),S(Oe,"width",w().nCols),S(Oe,"height",w().nRows),S(Ae,"width",w().nCols),S(Ae,"height",w().nRows)}),N(t,Y),oe()}var sW=ne('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function aW(t,e){ie(e,!1);const n=Be(),r=()=>fe(vi,"$enableFogMaskStore",n),i=x();let o=U(e,"gridShape",8);L(()=>r(),()=>{O(i,r())}),be(),ge();var s=sW(),l=j(s);S(l,"x",0),S(l,"y",0),W(s),J(()=>{S(l,"width",o().nCols),S(l,"height",o().nRows)}),N(t,s),oe()}var lW=ne('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function cW(t,e){ie(e,!1);const n=Be(),r=()=>fe(hn,"$gridStore",n),i=()=>fe(qs,"$boundingBoxStore",n),o=()=>fe(Pn,"$cellsStore",n),s=()=>fe(Np,"$fogLightsStore",n),l=()=>fe(rT,"$cornerLineToolsStore",n),u=()=>fe(eT,"$edgeToolsStore",n),d=()=>fe(nT,"$cornerToolsStore",n),g=()=>fe(tT,"$centerCornerOrEdgeToolsStore",n),h=()=>fe(tn,"$toolStore",n),v=()=>fe(bs,"$outsideDirectionToolPreviewStore",n),m=()=>fe(el,"$simpleCellToolPreviewStore",n),E=()=>fe(tl,"$singleCellArrowPreviewStore",n),b=()=>fe(nl,"$singleCellMultiArrowPreviewStore",n),I=()=>fe(rl,"$edgeToolPreviewStore",n),w=()=>fe(il,"$cornerToolPreviewStore",n),A=()=>fe(ol,"$centerCornerOrEdgeToolPreviewStore",n),T=x(),k=x(),G=x();let Y=U(e,"svgRef",12,null);function M(tt){return`${tt.x} ${tt.y} ${tt.width} ${tt.height}`}L(()=>r(),()=>{O(T,r())}),L(()=>f(T),()=>{O(k,{nRows:f(T).nRows,nCols:f(T).nCols})}),L(()=>i(),()=>{O(G,i())}),be(),ge();var P=lW();J(()=>S(P,"viewBox",M(f(G))));var te=j(P);nW(te);var ce=F(te);oW(ce,{get gridShape(){return f(k)}});var se=F(ce);$z(se,{get grid(){return r()}});var ue=F(se);aW(ue,{get gridShape(){return f(k)}});var ye=F(ue);hz(ye,{get gridShape(){return f(k)}});var Z=F(ye);Qe(Z,5,o,pt,(tt,Zo)=>{f4(tt,{get cell(){return f(Zo)}})}),W(Z);var Ie=F(Z);D4(Ie,{});var Ce=F(Ie);jH(Ce,{get element(){return s()}});var Oe=F(Ce);j6(Oe,{});var Ae=F(Oe);eW(Ae,{});var Se=F(Ae);mz(Se,{});var De=F(Se);kz(De,{});var $e=F(De);Xa($e,{get elements(){return l()},g_name:"corner-line-tools-layer",Component:SH});var st=F($e);Uz(st,{get gridShape(){return f(k)}});var ut=F(st);fz(ut,{});var bt=F(ut);Xa(bt,{get elements(){return u()},g_name:"edge-tools-layer",Component:UH});var dt=F(bt);Xa(dt,{get elements(){return d()},g_name:"corner-tools-layer",Component:_H});var It=F(dt);Xa(It,{get elements(){return g()},g_name:"center-corner-edge-tools-layer",Component:pH});var wt=F(It);N4(wt,{});var In=F(wt);Qe(In,5,o,pt,(tt,Zo)=>{u4(tt,{get cell(){return f(Zo)}})}),W(In);var dn=F(In);V4(dn,{});var yr=F(dn);B4(yr,{});var Or=F(yr);{var Ur=tt=>{lm(tt,{get tool(){return v()}})};Q(Or,tt=>{Xr(h())&&v()&&tt(Ur)})}var He=F(Or);{var we=tt=>{h6(tt,{get tool_preview(){return m()}})};Q(He,tt=>{yl(h())&&h()!==_.FOG_LIGHTS&&m()&&tt(we)})}var Te=F(He);{var We=tt=>{o6(tt,{get tool_preview(){return E()}})};Q(Te,tt=>{Fi(h())&&E()&&tt(We)})}var kt=F(Te);{var ea=tt=>{um(tt,{get tool(){return b()}})};Q(kt,tt=>{wo(h())&&b()&&tt(ea)})}var ta=F(kt);{var mi=tt=>{qH(tt,{get tool_preview(){return I()}})};Q(ta,tt=>{yo(h())&&I()&&tt(mi)})}var wn=F(ta);{var Ei=tt=>{JH(tt,{get tool_preview(){return w()}})};Q(wn,tt=>{Rs(h())&&w()&&tt(Ei)})}var Wi=F(wn);{var rc=tt=>{X6(tt,{get tool_preview(){return A()}})};Q(Wi,tt=>{Ds(h())&&A()&&tt(rc)})}W(P),Mi(P,tt=>Y(tt),()=>Y()),N(t,P),oe()}function uW(t){return uO(t)?(xy(),!0):!1}function dW(t){return dO(t)?(bp(),!0):!1}function _W(t){return _O(t)?(Ip(),!0):!1}function Bu(t){(uW(t)||dW(t)||_W(t))&&(t.stopImmediatePropagation(),t.preventDefault())}function fW(t,e){if(!e)return;const n=bn(t,e);if(!n)return;const r=t.ctrlKey,i=-t.deltaY,o=i>0?1.1:i<0?1/1.1:0;return{event:t,point:n,ctrl:r,zoom_factor:o,delta:i}}class gW{constructor(){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"onWheel",null);ve(this,"_isDown",!1);ve(this,"_lastPoint",null);ve(this,"_pointerId",null)}pointerDown(e,n){if(e.button!==1||!n)return;const r=new Ue(e.clientX,e.clientY);if(r&&(this._pointerId=e.pointerId,e.currentTarget instanceof Element&&e.currentTarget.setPointerCapture(e.pointerId),this._isDown=!0,this._lastPoint=r,this.onDragStart)){const i={event:e,point:r};this.onDragStart(i)}}pointerMove(e,n){if(!this._isDown||this._pointerId!==null&&e.pointerId!==this._pointerId||!n)return;const r=new Ue(e.clientX,e.clientY);if(!r||!this._lastPoint)return;const i=r.subtract(this._lastPoint),o={event:e,point:i};this._lastPoint=r,this.onDrag&&this.onDrag(o)}pointerUp(e){this._pointerId!==null&&e.pointerId!==this._pointerId||e.button===1&&(this._pointerId!==null&&e.currentTarget instanceof Element&&e.currentTarget.releasePointerCapture(this._pointerId),this._isDown&&(this._isDown=!1,this.onDragEnd&&this.onDragEnd()),this._lastPoint=null,this._pointerId=null)}wheel(e,n){const r=fW(e,n);r&&this.onWheel&&this.onWheel(r)}}const ao=new gW;function hW(t){ao.onDrag=r=>{Dk(r)},ao.onWheel=r=>{Lk(r),Rk(r)};const e=xt.throttle(r=>{ao.pointerMove(r,t)},10);return{pointerDown(r){r.button===1&&r.preventDefault(),ao.pointerDown(r,t)},pointerMove(r){e(r)},pointerUp(r){ao.pointerUp(r)},keyUp(){},keyDown(){},wheelEvent(r){ao.wheel(r,t)}}}var vW=le('<button class="form-button zoom-reset svelte-11c686j">Reset zoom</button>'),pW=le('<div class="board-container svelte-11c686j" tabindex="-1"><!> <!></div>');function mW(t,e){ie(e,!1);const n=Be(),r=()=>fe(Rp,"$InputHandlerStore",n),i=()=>fe(mo,"$svgRefStore",n),o=()=>fe(Co,"$currentScaleStore",n),s=x(),l=x();let u=x(null);function d(w){return A=>{w&&f(s)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===f(u))&&w(A)}}function g(){__()}L(()=>r(),()=>{O(s,r())}),L(()=>i(),()=>{O(l,hW(i()))}),be(),ge();var h=pW();Le("keydown",Ou,function(...w){Bu==null||Bu.apply(this,w)});var v=dh(()=>{var w;return d((w=f(s))==null?void 0:w.keyDown)});Le("keydown",Ou,function(...w){var A;(A=f(v))==null||A.apply(this,w)});var m=dh(()=>{var w;return d((w=f(s))==null?void 0:w.keyUp)});Le("keyup",Ou,function(...w){var A;(A=f(m))==null||A.apply(this,w)});var E=j(h);cW(E,{get svgRef(){return dv(),i()},set svgRef(w){ho(mo,w)},$$legacy:!0});var b=F(E,2);{var I=w=>{var A=vW();Le("click",A,oo(Fn(g)),!0),N(w,A)};Q(b,w=>{o()!==1&&w(I)})}W(h),Mi(h,w=>O(u,w),()=>f(u)),Le("pointerdown",h,oo(w=>{f(l).pointerDown(w)}),!0),Le("pointermove",h,w=>{f(l).pointerMove(w)},!0),Le("pointerup",h,w=>{f(l).pointerUp(w)},!0),Le("pointercancel",h,w=>{f(l).pointerUp(w)},!0),Le("wheel",h,oo(Fn(w=>{w.currentTarget.focus(),f(l).wheelEvent&&f(l).wheelEvent(w)})),!0),Le("pointerdown",h,oo(Fn(w=>{var A;w.currentTarget.focus(),(A=f(s))==null||A.pointerDown(w)})),!0),Le("pointermove",h,oo(Fn(w=>{var A;w.currentTarget.focus(),(A=f(s))==null||A.pointerMove(w)})),!0),Le("pointerup",h,oo(Fn(w=>{var A;w.currentTarget.focus(),(A=f(s))==null||A.pointerUp(w)})),!0),N(t,h),oe()}var EW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function CW(t){var e=EW();N(t,e)}var bW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function IW(t){var e=bW();N(t,e)}var wW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function yW(t){var e=wW();N(t,e)}var OW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function AW(t){var e=OW();N(t,e)}var xW=le('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function SW(t,e){ie(e,!1);const n=Be(),r=()=>fe(zo,"$commandHistoryStore",n),i=()=>fe(fd,"$selectOnStore",n),o=x(),s=x();function l(){bp()}function u(){Ip()}function d(){console.log("check")}function g(){ho(fd,!i())}L(()=>r(),()=>{O(o,r()._undoStack.length===0)}),L(()=>r(),()=>{O(s,r()._redoStack.length===0)}),be(),ge();var h=xW(),v=j(h),m=j(v);AW(m),W(v);var E=F(v,2),b=j(E);IW(b),W(E);var I=F(E,2);I.disabled=!0;var w=j(I);CW(w),W(I);var A=F(I,2),T=j(A);yW(T),W(A),W(h),J(()=>{v.disabled=f(o),E.disabled=f(s),S(A,"aria-checked",i()),Et(A,"active",i())}),Le("click",v,l),Le("click",E,u),Le("click",I,d),Le("click",A,g),N(t,h),oe()}var NW=le('<label class="entry-panel-label number-pad-button number-pad-selector svelte-15wmkv0"><input type="radio" class="svelte-15wmkv0"> <div class="selector-color svelte-15wmkv0"></div></label>'),LW=le('<button class="entry-panel-button number-pad-button svelte-15wmkv0"><div class="digit-button-text svelte-15wmkv0"> </div> <div class="digit-button-color svelte-15wmkv0"></div></button>'),RW=le('<button role="switch" class="entry-panel-button letter-button svelte-15wmkv0" value="Letter"><span class="num svelte-15wmkv0">9</span>/<span class="letter svelte-15wmkv0">A</span></button>'),DW=le('<div class="number-pad svelte-15wmkv0"><!> <!>  <button class="entry-panel-button delete-button svelte-15wmkv0" value="Delete"><svg class="icon svelte-15wmkv0" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function TW(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n),i=()=>fe(hl,"$penColorStore",n),o=()=>fe(Rp,"$InputHandlerStore",n),s=x(),l=x(),u=[];let d=U(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let v=x(!1);function m(M){return M?h:g}function E(M){return[_.DIGIT,_.CENTER_PM,_.CORNER_PM,_.GIVEN].includes(M)}function b(M){const P=M.currentTarget;if(!P)return;const te=P.getAttribute("aria-checked");O(v,te!=="true")}L(()=>r(),()=>{O(s,r().penToolActive)}),L(()=>r(),()=>{O(l,r().letterToolActive)}),be(),ge();var I=DW(),w=j(I);{var A=M=>{var P=Ee(),te=ee(P);Qe(te,1,()=>g,pt,(ce,se)=>{var ue=NW(),ye=j(ue);cn(ye);var Z;_i(2),W(ue),J(()=>{S(ue,"data-value",f(se)),Et(ue,"active",i()===f(se)),Z!==(Z=f(se))&&(ye.value=(ye.__value=f(se))==null?"":f(se))}),Id(u,[],ye,()=>(f(se),i()),Ie=>ho(hl,Ie)),N(ce,ue)}),N(M,P)},T=M=>{var P=Ee(),te=ee(P);Qe(te,1,()=>m(f(v)),pt,(ce,se)=>{var ue=LW(),ye=j(ue),Z=j(ye,!0);W(ye),_i(2),W(ue),J(()=>{Vu(ue,f(se)),it(Z,f(se))}),Le("click",ue,function(...Ie){var Ce;(Ce=o()&&o().padClick)==null||Ce.apply(this,Ie)}),N(ce,ue)}),N(M,P)};Q(w,M=>{d()===_.PEN_TOOL&&f(s)?M(A):M(T,!1)})}var k=F(w,2);{var G=M=>{var P=RW();J(()=>{S(P,"aria-checked",f(v)),Et(P,"letter-checked",f(v)),Et(P,"num-checked",!f(v))}),Le("click",P,b),N(M,P)};Q(k,M=>{f(l)&&E(d())&&M(G)})}var Y=F(k,2);W(I),J(()=>{Et(I,"digit",d()===_.DIGIT),Et(I,"center",d()===_.CENTER_PM),Et(I,"corner",d()===_.CORNER_PM),Et(I,"color",d()===_.HIGHLIGHTS),Et(I,"pen",d()===_.PEN_TOOL),Et(Y,"letter-tool",f(l))}),Le("click",Y,function(...M){var P;(P=o()&&o().padClick)==null||P.apply(this,M)}),N(t,I),oe()}var kW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function MW(t){var e=kW();N(t,e)}var UW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function GW(t){var e=UW();N(t,e)}var $W=le('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function vs(t,e){ie(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),o=U(e,"title",8,void 0);function s(){gd(i())}ge();var l=$W(),u=j(l);cn(u);var d,g=F(u,2);Ot(g,e,"default",{}),W(l),J(()=>{S(l,"title",o()),Et(l,"active",i()===r()),d!==(d=i())&&(u.value=(u.__value=i())==null?"":i())}),Id(n,[],u,()=>(i(),r()),r),Le("change",u,s),N(t,l),oe()}var FW=le('<span aria-hidden="true">1</span>'),PW=le('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),zW=le('<span aria-hidden="true" style="font-size: 50%">123</span>'),HW=le('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),WW=le('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),BW=le('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function YW(t,e){ie(e,!1);const n=Be(),r=()=>fe(Nn,"$settingsStore",n);let i=U(e,"selectedTool",12);ge();var o=BW(),s=j(o);vs(s,{get value(){return _.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=FW();N(v,E)},$$slots:{default:!0},$$legacy:!0});var l=F(s,2);vs(l,{get value(){return _.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=PW();N(v,E)},$$slots:{default:!0},$$legacy:!0});var u=F(l,2);vs(u,{get value(){return _.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=zW();N(v,E)},$$slots:{default:!0},$$legacy:!0});var d=F(u,2);vs(d,{get value(){return _.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=HW(),b=j(E);MW(b),W(E),N(v,E)},$$slots:{default:!0},$$legacy:!0});var g=F(d,2);{var h=v=>{vs(v,{get value(){return _.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var b=WW(),I=j(b);GW(I),W(b),N(m,b)},$$slots:{default:!0},$$legacy:!0})};Q(g,v=>{r().penToolActive&&v(h)})}W(o),N(t,o),oe()}var jW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function KW(t){var e=jW();N(t,e)}var VW=le('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function tc(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=VW(),o=j(i),s=j(o);Ot(s,e,"default",{}),W(o),W(i),J(()=>S(i,"title",n())),Le("click",i,function(...l){var u;(u=r())==null||u.apply(this,l)}),N(t,i)}var XW=le('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),qW=le('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function ZW(t,e){ie(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){yp(),vl(),n(!1)}ge(),pi(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,s)=>{var l=qW(),u=F(j(l),2);d_(u,{children:(d,g)=>{var h=XW(),v=ee(h),m=F(v,2);Le("click",v,i),Le("click",m,r),N(d,h)},$$slots:{default:!0}}),W(l),N(o,l)},$$slots:{default:!0},$$legacy:!0}),oe()}var QW=le("<!> <!>",1);function JW(t){let e=x(!1);function n(){O(e,!0)}var r=QW(),i=ee(r);tc(i,{title:"Restart",clickCb:n,children:(s,l)=>{KW(s)},$$slots:{default:!0}});var o=F(i,2);ZW(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var eB=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function tB(t){var e=eB();N(t,e)}var nB=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function rB(t){var e=nB();N(t,e)}function iB(t){let e=x(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),O(e,!f(e))}tc(t,{title:"Fullscreen",clickCb:o,children:(s,l)=>{var u=Ee(),d=ee(u);{var g=v=>{rB(v)},h=v=>{tB(v)};Q(d,v=>{f(e)?v(g):v(h,!1)})}N(s,u)},$$slots:{default:!0}})}function hm(t,e){ie(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);ge();var o=Ee(),s=ee(o);{var l=u=>{var d=Ee(),g=ee(d);bd(g,()=>r()[n().type],(h,v)=>{v(h,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var b=Ee(),I=ee(b);{var w=T=>{El(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=T=>{var k=fy();J(()=>it(k,n().raw)),N(T,k)};Q(I,T=>{"tokens"in n()&&n().tokens?T(w):T(A,!1)})}N(m,b)},$$slots:{default:!0}})}),N(u,d)};Q(s,u=>{r()[n().type]&&u(l)})}N(t,o),oe()}function El(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var o=Ee(),s=ee(o);{var l=u=>{var d=Ee(),g=ee(d);Qe(g,1,n,pt,(h,v)=>{hm(h,{get token(){return f(v)},get renderers(){return r()},get options(){return i()}})}),N(u,d)};Q(s,u=>{n()&&u(l)})}N(t,o)}function vm(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function pm(t){return t.startsWith("/")||t.startsWith("#")}function oB(t,e){return e.slug(t).replace(/--+/g,"-")}function sB(t,e){ie(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let o=x();L(()=>(X(n()),X(r())),()=>{O(o,oB(n().text,r().slugger))}),be(),ge();var s=Ee(),l=ee(s);return gv(l,()=>`h${n().depth}`,!1,(u,d)=>{let g;J(()=>g=_v(u,g,{id:f(o)},void 0,u.namespaceURI===Ed,u.nodeName.includes("-")));var h=Ee(),v=ee(h);Ot(v,e,"default",{}),N(d,h)}),N(t,s),ot(e,"renderers",i),oe({renderers:i})}var aB=le("<blockquote><!></blockquote>");function lB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=aB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}function cB(t,e){ie(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),o=x();L(()=>X(n()),()=>{O(o,n().ordered?"ol":"ul")}),be(),ge();var s=Ee(),l=ee(s);gv(l,()=>f(o),!1,(u,d)=>{let g;J(()=>g=_v(u,g,{start:n().start||1},void 0,u.namespaceURI===Ed,u.nodeName.includes("-")));var h=Ee(),v=ee(h);Qe(v,1,()=>n().items,pt,(m,E)=>{var b=ft(()=>({...f(E)}));hm(m,{get token(){return f(b)},get options(){return r()},get renderers(){return i()}})}),N(d,h)}),N(t,s),oe()}var uB=le("<li><!></li>");function dB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=uB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var _B=le("<br>");function fB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=_B();return N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var gB=le("<pre><code> </code></pre>");function hB(t,e){ie(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;ge();var o=gB(),s=j(o),l=j(s,!0);return W(s),W(o),J(()=>{hv(s,`lang-${n().lang}`),it(l,n().text)}),N(t,o),ot(e,"options",r),ot(e,"renderers",i),oe({options:r,renderers:i})}var vB=le("<code> </code>");function pB(t,e){ie(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;ge();var o=vB(),s=j(o,!0);return J(()=>it(s,n().raw.slice(1,n().raw.length-1))),W(o),N(t,o),ot(e,"options",r),ot(e,"renderers",i),oe({options:r,renderers:i})}var mB=le('<th scope="col"><!></th>'),EB=le("<td><!></td>"),CB=le("<tr></tr>"),bB=le("<table><thead><tr></tr></thead><tbody></tbody></table>");function IB(t,e){ie(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);ge();var o=bB(),s=j(o),l=j(s);Qe(l,5,()=>n().header,pt,(d,g)=>{var h=mB(),v=j(h);El(v,{get tokens(){return f(g).tokens},get options(){return r()},get renderers(){return i()}}),W(h),N(d,h)}),W(l),W(s);var u=F(s);Qe(u,5,()=>n().rows,pt,(d,g)=>{var h=CB();Qe(h,5,()=>f(g),pt,(v,m)=>{var E=EB(),b=j(E);El(b,{get tokens(){return f(m).tokens},get options(){return r()},get renderers(){return i()}}),W(E),N(v,E)}),W(h),N(d,h)}),W(u),W(o),N(t,o),oe()}function wB(t,e){ie(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;ge();var o=Ee(),s=ee(o);return Ty(s,()=>n().text),N(t,o),ot(e,"options",r),ot(e,"renderers",i),oe({options:r,renderers:i})}var yB=le("<p><!></p>");function OB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=yB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var AB=le("<a><!></a>");function xB(t,e){ie(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;ge();var o=AB();J(()=>S(o,"href",pm(n().href)?vm(r().baseUrl,n().href):n().href));var s=j(o);return Ot(s,e,"default",{}),W(o),J(()=>S(o,"title",n().title)),N(t,o),ot(e,"renderers",i),oe({renderers:i})}function SB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ee(),s=ee(o);return Ot(s,e,"default",{}),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var NB=le("<dfn><!></dfn>");function LB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=NB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var RB=le("<del><!></del>");function DB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=RB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var TB=le("<em><!></em>");function kB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=TB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var MB=le("<hr>");function UB(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=MB();return N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var GB=le("<strong><!></strong>");function $B(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=GB(),s=j(o);return Ot(s,e,"default",{}),W(o),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}var FB=le('<img class="markdown-image svelte-z38cge">');function PB(t,e){ie(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;ge();var o=FB();return J(()=>S(o,"src",pm(n().href)?vm(r().baseUrl,n().href):n().href)),J(()=>{S(o,"title",n().title),S(o,"alt",n().text)}),N(t,o),ot(e,"renderers",i),oe({renderers:i})}function ev(t,e){ie(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ee(),s=ee(o);return Ot(s,e,"default",{}),N(t,o),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",i),oe({token:n,options:r,renderers:i})}const zB=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,HB=Object.hasOwnProperty;class WB{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=BB(e,n===!0);const o=i;for(;HB.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function BB(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(zB,"").replace(/ /g,"-"))}function A_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Hi=A_();function mm(t){Hi=t}const Em=/[&<>"']/,YB=new RegExp(Em.source,"g"),Cm=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,jB=new RegExp(Cm.source,"g"),KB={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tv=t=>KB[t];function Gn(t,e){if(e){if(Em.test(t))return t.replace(YB,tv)}else if(Cm.test(t))return t.replace(jB,tv);return t}const VB=/(^|[^\[])\^/g;function Dt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(VB,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function nv(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const As={exec:()=>null};function rv(t,e){const n=t.replace(/\|/g,(o,s,l)=>{let u=!1,d=s;for(;--d>=0&&l[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function ps(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function XB(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function iv(t,e,n,r){const i=e.href,o=e.title?Gn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:i,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:o,text:Gn(s)}}function qB(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class Cl{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Hi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ps(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=qB(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=ps(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ps(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=ps(n[0],`
`).split(`
`),i="",o="";const s=[];for(;r.length>0;){let l=!1;const u=[];let d;for(d=0;d<r.length;d++)if(/^ {0,3}>/.test(r[d]))u.push(r[d]),l=!0;else if(!l)u.push(r[d]);else break;r=r.slice(d);const g=u.join(`
`),h=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,o=o?`${o}
${h}`:h;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=v,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,b=E.raw+`
`+r.join(`
`),I=this.blockquote(b);s[s.length-1]=I,i=i.substring(0,i.length-E.raw.length)+I.raw,o=o.substring(0,o.length-E.text.length)+I.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,b=E.raw+`
`+r.join(`
`),I=this.list(b);s[s.length-1]=I,i=i.substring(0,i.length-m.raw.length)+I.raw,o=o.substring(0,o.length-E.raw.length)+I.raw,r=b.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let u=!1,d="",g="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;d=n[0],e=e.substring(d.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!h.trim(),E=0;if(this.options.pedantic?(E=2,g=h.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=h.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(d+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let M;if(v=Y,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),M=v):M=v.replace(/\t/g,"    "),T.test(v)||k.test(v)||G.test(v)||w.test(v)||A.test(v))break;if(M.search(/[^ ]/)>=E||!v.trim())g+=`
`+M.slice(E);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(h)||k.test(h)||A.test(h))break;g+=`
`+v}!m&&!v.trim()&&(m=!0),d+=Y+`
`,e=e.substring(Y.length+1),h=M.slice(E)}}o.loose||(l?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(d)&&(l=!0));let b=null,I;this.options.gfm&&(b=/^\[[ xX]\] /.exec(g),b&&(I=b[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:d,task:!!b,checked:I,loose:!1,text:g,tokens:[]}),o.raw+=d}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const d=o.items[u].tokens.filter(h=>h.type==="space"),g=d.length>0&&d.some(h=>/\n.*\n/.test(h.raw));o.loose=g}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=rv(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(let l=0;l<r.length;l++)s.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:s.align[l]});for(const l of o)s.rows.push(rv(l,s.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[d]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=ps(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=XB(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),iv(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return iv(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let l,u,d=s,g=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+s);(i=h.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(u=[...l].length,i[3]||i[4]){d+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){g+=u;continue}if(d-=u,d>0)continue;u=Math.min(u,u+d+g);const v=[...i[0]][0].length,m=e.slice(0,s+i.index+v+u);if(Math.min(s,u)%2){const b=m.slice(1,-1);return{type:"em",raw:m,text:b,tokens:this.lexer.inlineTokens(b)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Gn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Gn(n[1]),i="mailto:"+r):(r=Gn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Gn(n[0]),o="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=Gn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Gn(n[0]),{type:"text",raw:n[0],text:r}}}}const ZB=/^(?:[ \t]*(?:\n|$))+/,QB=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,JB=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,e9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,bm=/(?:[*+-]|\d{1,9}[.)])/,Im=Dt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,bm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),x_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,t9=/^[^\n]+/,S_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,n9=Dt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",S_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),r9=Dt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,bm).getRegex(),nc="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,i9=Dt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",N_).replace("tag",nc).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wm=Dt(x_).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nc).getRegex(),o9=Dt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",wm).getRegex(),L_={blockquote:o9,code:QB,def:n9,fences:JB,heading:e9,hr:Qs,html:i9,lheading:Im,list:r9,newline:ZB,paragraph:wm,table:As,text:t9},ov=Dt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nc).getRegex(),s9={...L_,table:ov,paragraph:Dt(x_).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ov).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nc).getRegex()},a9={...L_,html:Dt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:As,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Dt(x_).replace("hr",Qs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Im).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ym=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,l9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Om=/^( {2,}|\\)\n(?!\s*$)/,c9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Js="\\p{P}\\p{S}",u9=Dt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Js).getRegex(),d9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,_9=Dt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Js).getRegex(),f9=Dt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Js).getRegex(),g9=Dt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Js).getRegex(),h9=Dt(/\\([punct])/,"gu").replace(/punct/g,Js).getRegex(),v9=Dt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),p9=Dt(N_).replace("(?:-->|$)","-->").getRegex(),m9=Dt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",p9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,E9=Dt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",bl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Am=Dt(/^!?\[(label)\]\[(ref)\]/).replace("label",bl).replace("ref",S_).getRegex(),xm=Dt(/^!?\[(ref)\](?:\[\])?/).replace("ref",S_).getRegex(),C9=Dt("reflink|nolink(?!\\()","g").replace("reflink",Am).replace("nolink",xm).getRegex(),R_={_backpedal:As,anyPunctuation:h9,autolink:v9,blockSkip:d9,br:Om,code:l9,del:As,emStrongLDelim:_9,emStrongRDelimAst:f9,emStrongRDelimUnd:g9,escape:ym,link:E9,nolink:xm,punctuation:u9,reflink:Am,reflinkSearch:C9,tag:m9,text:c9,url:As},b9={...R_,link:Dt(/^!?\[(label)\]\((.*?)\)/).replace("label",bl).getRegex(),reflink:Dt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bl).getRegex()},pd={...R_,escape:Dt(ym).replace("])","~|])").getRegex(),url:Dt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},I9={...pd,br:Dt(Om).replace("{2,}","*").getRegex(),text:Dt(pd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},qa={normal:L_,gfm:s9,pedantic:a9},ms={normal:R_,gfm:pd,breaks:I9,pedantic:b9};class zn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hi,this.options.tokenizer=this.options.tokenizer||new Cl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:qa.normal,inline:ms.normal};this.options.pedantic?(n.block=qa.pedantic,n.inline=ms.pedantic):this.options.gfm&&(n.block=qa.gfm,this.options.breaks?n.inline=ms.breaks:n.inline=ms.gfm),this.tokenizer.rules=n}static get rules(){return{block:qa,inline:ms}}static lex(e,n){return new zn(n).lex(e)}static lexInline(e,n){return new zn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(g=>{d=g.call({lexer:this},u),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,s=e,l,u,d;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)g.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(d=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,d)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},h),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(o=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(d=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class Il{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Hi}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],o=e.replace(/\n$/,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=nv(e);if(o===null)return i;e=o;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=nv(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class D_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class lr{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Hi,this.options.renderer=this.options.renderer||new Il,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new D_}static parse(e,n){return new lr(n).parse(e)}static parseInline(e,n){return new lr(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){r+=u||"";continue}}const s=o;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let l=s,u=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],u+=`
`+this.renderer.text(l);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=l||"";continue}}const s=o;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}}class xs{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Hi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?zn.lex:zn.lexInline}provideParser(){return this.block?lr.parse:lr.parseInline}}ve(xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class w9{constructor(...e){ve(this,"defaults",A_());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",lr);ve(this,"Renderer",Il);ve(this,"TextRenderer",D_);ve(this,"Lexer",zn);ve(this,"Tokenizer",Cl);ve(this,"Hooks",xs);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const l=s;for(const u of l.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of l.rows)for(const d of u)r=r.concat(this.walkTokens(d.tokens,n));break}case"list":{const l=s;r=r.concat(this.walkTokens(l.items,n));break}default:{const l=s;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(u=>{const d=l[u].flat(1/0);r=r.concat(this.walkTokens(d,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const s=n.renderers[o.name];s?n.renderers[o.name]=function(...l){let u=o.renderer.apply(this,l);return u===!1&&(u=s.apply(this,l)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[o.level];s?s.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new Il(this.defaults);for(const s in r.renderer){if(!(s in o))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,u=r.renderer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new Cl(this.defaults);for(const s in r.tokenizer){if(!(s in o))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,u=r.tokenizer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new xs;for(const s in r.hooks){if(!(s in o))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,u=r.hooks[l],d=o[l];xs.passThroughHooks.has(s)?o[l]=g=>{if(this.defaults.async)return Promise.resolve(u.call(o,g)).then(v=>d.call(o,v));const h=u.call(o,g);return d.call(o,h)}:o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(l){let u=[];return u.push(s.call(this,l)),o&&(u=u.concat(o.call(this,l))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return zn.lex(e,n??this.defaults)}parser(e,n){return lr.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},s={...this.defaults,...o},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?zn.lex:zn.lexInline,d=s.hooks?s.hooks.provideParser():e?lr.parse:lr.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(g=>u(g,s)).then(g=>s.hooks?s.hooks.processAllTokens(g):g).then(g=>s.walkTokens?Promise.all(this.walkTokens(g,s.walkTokens)).then(()=>g):g).then(g=>d(g,s)).then(g=>s.hooks?s.hooks.postprocess(g):g).catch(l);try{s.hooks&&(r=s.hooks.preprocess(r));let g=u(r,s);s.hooks&&(g=s.hooks.processAllTokens(g)),s.walkTokens&&this.walkTokens(g,s.walkTokens);let h=d(g,s);return s.hooks&&(h=s.hooks.postprocess(h)),h}catch(g){return l(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Gn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const $i=new w9;function Rt(t,e){return $i.parse(t,e)}Rt.options=Rt.setOptions=function(t){return $i.setOptions(t),Rt.defaults=$i.defaults,mm(Rt.defaults),Rt};Rt.getDefaults=A_;Rt.defaults=Hi;Rt.use=function(...t){return $i.use(...t),Rt.defaults=$i.defaults,mm(Rt.defaults),Rt};Rt.walkTokens=function(t,e){return $i.walkTokens(t,e)};Rt.parseInline=$i.parseInline;Rt.Parser=lr;Rt.parser=lr.parse;Rt.Renderer=Il;Rt.TextRenderer=D_;Rt.Lexer=zn;Rt.lexer=zn.lex;Rt.Tokenizer=Cl;Rt.Hooks=xs;Rt.parse=Rt;Rt.options;Rt.setOptions;Rt.use;Rt.walkTokens;Rt.parseInline;lr.parse;zn.lex;function y9(t){return new zn().lex(t)}const O9=()=>({heading:sB,blockquote:lB,list:cB,list_item:dB,br:fB,code:hB,codespan:pB,table:IB,html:wB,paragraph:OB,link:xB,text:SB,def:LB,del:DB,em:kB,hr:UB,strong:$B,image:PB,space:ev,escape:ev}),A9=()=>({baseUrl:"/",slugger:new WB});function x9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},fv(()=>{console.warn=t})}function Sm(t,e){ie(e,!1),x9();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),o=x(),s=x(),l=x();L(()=>(X(n()),X(i()),X(r())),()=>{O(o,y9(n())),O(s,{...O9(),...i()}),O(l,{...A9(),...r()})}),be(),ge(),El(t,{get tokens(){return f(o)},get renderers(){return f(s)},get options(){return f(l)}}),oe()}var S9=le('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),N9=le('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),L9=le('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function R9(t,e){ie(e,!1);const n=Be(),r=()=>fe(Mr,"$puzzleMetaStore",n),i=x();let o=U(e,"showModal",12,!1);function s(u){return u?_l(u," & ",", "):"Anonymous"}function l(u){return u&&u.length?u:"No ruleset provided."}L(()=>r(),()=>{O(i,r())}),be(),ge(),pi(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,d)=>{var g=L9(),h=j(g),v=j(h,!0);W(h);var m=F(h,2),E=j(m);J(()=>it(E,`by ${s(f(i).authors)??""}`)),W(m);var b=F(m,2),I=j(b),w=ft(()=>l(f(i).ruleset));Sm(I,{get source(){return f(w)}}),W(b);var A=F(b,2);{var T=Y=>{var M=S9(),P=F(ee(M),2);J(()=>S(P,"href",f(i).ctcUrl)),N(Y,M)};Q(A,Y=>{var M,P;(P=(M=f(i))==null?void 0:M.ctcUrl)!=null&&P.length&&Y(T)})}var k=F(A,2);{var G=Y=>{var M=N9(),P=F(ee(M),2);J(()=>S(P,"href",f(i).ctcYoutubeUrl)),N(Y,M)};Q(k,Y=>{var M,P;(P=(M=f(i))==null?void 0:M.ctcYoutubeUrl)!=null&&P.length&&Y(G)})}W(g),J(()=>{var Y;return it(v,((Y=f(i))==null?void 0:Y.title)||"Puzzle")}),N(u,g)},$$slots:{default:!0},$$legacy:!0}),oe()}var D9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function T9(t){var e=D9();N(t,e)}var k9=le("<!> <!>",1);function M9(t){let e=x(!1);function n(){O(e,!0)}var r=k9(),i=ee(r);tc(i,{title:"Rules",clickCb:n,children:(s,l)=>{T9(s)},$$slots:{default:!0}});var o=F(i,2);R9(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var U9=le("<!> <!>",1);function G9(t){let e=x(!1);function n(){O(e,!0)}var r=U9(),i=ee(r);tc(i,{title:"Settings",clickCb:n,children:(s,l)=>{Tp(s)},$$slots:{default:!0}});var o=F(i,2);kp(o,{get showModal(){return f(e)},set showModal(s){O(e,s)},$$legacy:!0}),N(t,r)}var $9=le('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!></div>');function F9(t){var e=$9(),n=j(e);G9(n);var r=F(n,2);M9(r);var i=F(r,2);iB(i);var o=F(i,2);JW(o),W(e),N(t,e)}var P9=le('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function z9(t,e){ie(e,!1);const n=Be(),r=()=>fe(mo,"$svgRefStore",n),i=()=>fe(Mr,"$puzzleMetaStore",n),o=()=>fe(tn,"$toolStore",n),s=x(),l=x();function u(){r()&&r().focus()}function d(se){return se?_l(se," & ",", "):"Anonymous"}function g(se){return se&&se.length?se:"Normal sudoku rules apply."}L(()=>i(),()=>{O(s,i().title??"Sudoku")}),L(()=>i(),()=>{O(l,d(i().authors))}),be(),ge();var h=P9(),v=j(h),m=j(v),E=j(m),b=j(E,!0);W(E);var I=F(E,2),w=j(I);W(I),W(m);var A=F(m,2),T=j(A),k=ft(()=>g(i().ruleset));Sm(T,{get source(){return f(k)}}),W(A),W(v);var G=F(v,2),Y=j(G);F9(Y);var M=F(Y,2),P=j(M);SW(P,{});var te=F(P,2);TW(te,{get selectedTool(){return o()}});var ce=F(te,2);YW(ce,{get selectedTool(){return dv(),o()},set selectedTool(se){ho(tn,se)},$$legacy:!0}),W(M),W(G),W(h),J(()=>{it(b,f(s)),it(w,`by ${f(l)??""}`)}),Le("click",G,Fn(()=>{u()})),N(t,h),oe()}var H9=le('<div class="left-panel svelte-55o7hb"><!></div>'),W9=le('<div class="game svelte-55o7hb"><!> <div class="center-panel svelte-55o7hb"><!></div> <div class="right-panel svelte-55o7hb"><!></div></div>');function s7(t,e){ie(e,!1);const n=Be(),r=()=>fe(kl,"$gameModeStore",n),i=()=>fe(s_,"$isPortraitStore",n),o=x(),s=x();fv(async()=>{const E=window.location.origin,b=_h===""?E:`${E}/${_h}`;try{await H8({workerURL:`${b}/minizinc-worker.js`,wasmURL:`${b}/minizinc.wasm`,dataURL:`${b}/minizinc.data`})}catch(I){const w="Failed to initialize MiniZinc: "+I.message;console.log(w)}}),L(()=>r(),()=>{O(o,r())}),L(()=>i(),()=>{O(s,i())}),be(),ge();var l=W9(),u=j(l);{var d=E=>{var b=H9(),I=j(b);dz(I),W(b),N(E,b)};Q(u,E=>{f(o)===Io.SETTING&&E(d)})}var g=F(u,2),h=j(g);mW(h,{}),W(g);var v=F(g,2),m=j(v);z9(m,{}),W(v),W(l),J(()=>{Et(l,"desktop-layout",!f(s)),Et(l,"mobile-layout",f(s))}),N(t,l),oe()}export{s7 as G,__ as a,o7 as b,i7 as d,HD as p,vl as r,c2 as s};
