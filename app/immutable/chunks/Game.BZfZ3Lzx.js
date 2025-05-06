var Hw=Object.defineProperty;var Ww=(t,e,n)=>e in t?Hw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>Ww(t,typeof e!="symbol"?e+"":e,n);import{c as Mu,o as Bw,p as Yw,q as ad,s as Ue,a as L,t as ue,d as be,u as ee,v as jw,m as Kw}from"./disclose-version.BMjGnY8r.js";import{i as fe}from"./legacy.CBYIjwbu.js";import{l as Wh,h as on,k as Os,y as Bh,v as Cs,R as Vw,V as Xw,U as qw,g as Uu,i as Yh,K as jh,a0 as Zw,j as Qw,u as Kg,B as Jw,aJ as ld,z as ey,x as ty,a2 as cd,ar as Kh,A as Vg,aK as ny,a3 as ry,a8 as iy,m as oy,c as K,r as P,s as G,t as te,p as ae,aL as D,aM as Ie,a as le,Z as d,av as X,_ as O,$ as A,f as ne,aC as Mi,aN as Gu,al as ut,aO as fu,ak as Xg}from"./utils.Bp9j5Uj0.js";import{i as Q,s as qe,a as ve,b as ho,m as Vh}from"./store.D4OU4dvo.js";import{s as jr,u as sy,a as ay,b as ly,c as cy,e as uy,f as dy,g as _y,h as fy,t as gy}from"./global.Bod0hR-p.js";import{e as Je,i as mt}from"./each.BoOPhUgK.js";import{i as hy,p as U}from"./props.DtgsZciY.js";import{w as Lt,g as ke,d as nr}from"./index.DYJKv3QC.js";import{b as Ui,c as Xh}from"./this.DLpfsf4C.js";import{s as lt}from"./render.BDhmuNhf.js";import{r as En,s as N,a as vy,c as py,b as my,d as qh}from"./attributes.BQB_fdHO.js";import{a as Ey,o as Zh}from"./index-client.BnGHJMPg.js";import{b as qg}from"./paths.cfvHbpWZ.js";function Cy(t,e,n,r,i){var o=t,a="",c;Wh(()=>{if(a===(a=e()??"")){on&&Os();return}c!==void 0&&(jh(c),c=void 0),a!==""&&(c=Bh(()=>{if(on){Cs.data;for(var u=Os(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=Vw(u);if(u===null)throw Xw(),qw;Mu(Cs,_),o=Uu(u);return}var g=a+"",v=Bw(g);Mu(Yh(v),v.lastChild),o.before(v)}))})}function Et(t,e,n,r,i){var c;on&&Os();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function Qh(t,e,n,r,i,o){let a=on;on&&Os();var c,u,_=null;on&&Cs.nodeType===1&&(_=Cs,Os());var g=on?Cs:t,v;Wh(()=>{const h=e()||null;var m=h==="svg"?ld:null;h!==c&&(v&&(h===null?ey(v,()=>{v=null,u=null}):h===u?ty(v):jh(v)),h&&h!==u&&(v=Bh(()=>{if(_=on?_:m?document.createElementNS(m,h):document.createElement(h),Mu(_,_),r){on&&Yw(h)&&_.append(document.createComment(""));var E=on?Yh(_):_.appendChild(Qw());on&&(E===null?Kg(!1):Uu(E)),r(_,E)}Jw.nodes_end=_,g.before(_)})),c=h,c&&(u=c))},Zw),a&&(Kg(!0),Uu(g))}function Ls(t,e,n){var r=t.__className,i=Jh(e);on&&t.getAttribute("class")===i?t.__className=i:(r!==i||on&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function by(t,e,n){var r=t.__className,i=Jh(e);on&&t.className===i?t.__className=i:(r!==i||on&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Jh(t,e){return(t??"")+""}function wt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Jn(t,e,n=e){var r=ny();ad(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=hu(t)?vu(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(on&&t.defaultValue!==t.value||ry(e)==null&&t.value)&&n(hu(t)?vu(t.value):t.value),cd(()=>{var i=e();hu(t)&&i===vu(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const gu=new Set;function ud(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),ad(n,"change",()=>{var _=n.__value;o&&(_=Zg(a,_,n.checked)),i(_)},()=>i(o?[]:null)),cd(()=>{var _=r();if(on&&n.defaultChecked!==n.checked){c=!0;return}o?(_=_||[],n.checked=_.includes(n.__value)):n.checked=hy(n.__value,_)}),Kh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),gu.has(a)||(gu.add(a),Vg(()=>{a.sort((_,g)=>_.compareDocumentPosition(g)===4?-1:1),gu.delete(a)})),Vg(()=>{if(c){var _;if(o)_=Zg(a,_,n.checked);else{var g=a.find(v=>v.checked);_=g==null?void 0:g.__value}i(_)}})}function Zg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function hu(t){var e=t.type;return e==="number"||e==="range"}function vu(t){return t===""?null:+t}function Iy(t,e,n=e){ad(t,"change",()=>{n(t.files)}),cd(()=>{t.files=e()})}function rt(t,e,n){var r=iy(t,e);r&&r.set&&(t[e]=n,Kh(()=>{t[e]=null}))}function wy(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Er(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function pu(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function yy(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=oy(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var $i=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))($i||{}),dd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(dd||{}),ev=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t))(ev||{}),_d=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.PARITY_MIRROR_POSITIVE_DIAGONAL="Parity Mirror Positive Diagonal",t.PARITY_MIRROR_NEGATIVE_DIAGONAL="Parity Mirror Negative Diagonal",t))(_d||{}),tv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(tv||{}),nv=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(nv||{}),rv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(rv||{}),iv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(iv||{}),ov=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(ov||{}),sv=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(sv||{}),av=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(av||{}),lv=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t))(lv||{}),cv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(cv||{}),uv=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(uv||{}),dv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(dv||{}),_v=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(_v||{}),fv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(fv||{}),bl=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(bl||{}),fd=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(fd||{}),gd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Cells Not In The Same Region Arrows",t.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Seen Cells In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(gd||{}),hd=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.COMBINED_EDGE_CONSTRAINT="Combined Edge Constraint",t))(hd||{}),vd=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(vd||{}),pd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(pd||{}),md=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(md||{}),Ed=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Ed||{}),Cd=(t=>(t.CLONE_REGION="Clone Region",t))(Cd||{}),bd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(bd||{}),Id=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Id||{}),wd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(wd||{}),yd=(t=>(t.MAZE_WALL="Maze Wall",t))(yd||{}),Od=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Od||{}),Ad=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Ad||{}),gv=(t=>(t.FOG_LIGHTS="Fog Lights",t.CUSTOM_FOG_CLEARING="Custom Fog Clearing",t.FOG_CLEARING_ITSELF="Fog Clearing Itself",t.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS="Fog Clearing Orthogonal Neighbours",t.FOG_CLEARING_DIAGONAL_NEIGHBOURS="Fog Clearing Diagonal Neighbours",t.FOG_CLEARING_CONTAINING_ROW="Fog Clearing Containing Row",t.FOG_CLEARING_CONTAINING_COLUMN="Fog Clearing Containing Column",t.FOG_CLEARING_KNIGHTS_MOVE="Fog Clearing Knights Move",t))(gv||{}),hv=(t=>(t.PEN_TOOL="Pen Tool",t))(hv||{});const Oy={...rv,...dv,..._v,...uv,...fv,...cv,...lv,...av,...sv,...ov,...iv},vv={...tv,..._d,...ev,...Oy,...nv},pv={...bl,...fd,...gd,...hd,...vd,...pd,...md,...Ed,...Cd,...bd,...Id,...wd,...yd,...Od,...gv},f={...dd,...vv,...pv,...Ad,...hv};var $=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.FOG_TOOL="Fog Tool",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))($||{});function Ay(t){return Object.values(_d).includes(t)}function xy(t){return Object.values(vv).includes(t)}function mv(t){return Object.values(pv).includes(t)}function Ly(t){return Object.values(Ad).includes(t)}function Ny(t){return mv(t)||Ly(t)||xy(t)}function Il(t){return Object.values(bl).includes(t)||t===f.COSMETIC_CELL_CENTER_SHAPE||t===f.FOG_LIGHTS}function Pi(t){return Object.values(fd).includes(t)||t===f.COSMETIC_CELL_ARROW}function Co(t){return Object.values(gd).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function xd(t){return Il(t)||Pi(t)||Co(t)}function bo(t){return Object.values(hd).includes(t)||t===f.COSMETIC_EDGE}function Ns(t){return Object.values(vd).includes(t)||t===f.COSMETIC_CORNER}function Io(t){return Object.values(pd).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function wo(t){return Object.values(md).includes(t)||t===f.COSMETIC_ARROW}function yo(t){return Object.values(Ed).includes(t)||t===f.COSMETIC_CAGE}function Rs(t){return Object.values(wd).includes(t)}function Ev(t){return Object.values(yd).includes(t)}function Ds(t){return Object.values(Cd).includes(t)}function Wr(t){const e=Object.values(bd),n=Object.values(Id);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function Ry(t){return Object.values(Od).includes(t)}function Ld(t){return Object.values(dd).includes(t)}function Dy(t){return Wr(t)||xd(t)||Io(t)||wo(t)||yo(t)||Ds(t)}const Sy=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Ty=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...Sy,"Fog Tool","Cosmetic Tool"];function ky(t){for(const e of Object.values(f))if(e===t)return e}function My(t,e){return Object.values(e).includes(t)}var W=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(W||{});function pn(t,e,n){n!==void 0&&(t[e]=n)}function Uy(t){var e,n,r,i,o,a,c,u,_,g,v,h,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(g=t.strokeDasharray)!=null&&g.editable||(v=t.strokeDashoffset)!=null&&v.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Fu(t){var n,r,i,o,a,c,u,_,g,v,h,m,E,I,b,y,x,T,M,z,H,k,B;const e={type:t.type};return pn(e,"n",(n=t.n)==null?void 0:n.value),pn(e,"r",(r=t.r)==null?void 0:r.value),pn(e,"height",(i=t.height)==null?void 0:i.value),pn(e,"width",(o=t.width)==null?void 0:o.value),pn(e,"inset",(a=t.inset)==null?void 0:a.value),pn(e,"angle",(c=t.angle)==null?void 0:c.value),pn(e,"fill",(u=t.fill)==null?void 0:u.value),pn(e,"stroke",(_=t.stroke)==null?void 0:_.value),pn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),pn(e,"strokeDasharray",(v=t.strokeDasharray)==null?void 0:v.value),pn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),pn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),pn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),pn(e,"opacity",(I=t.opacity)==null?void 0:I.value),pn(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(x=(y=t.linePathOptions)==null?void 0:y.shortenHead)==null?void 0:x.value,shortenTail:(M=(T=t.linePathOptions)==null?void 0:T.shortenTail)==null?void 0:M.value,bezierRounding:(H=(z=t.linePathOptions)==null?void 0:z.bezierRounding)==null?void 0:H.value,closeLoops:(B=(k=t.linePathOptions)==null?void 0:k.closeLoops)==null?void 0:B.value}),e}function Gy(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const Qg={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},Jg={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},eh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},ol={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},$u={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ss={type:"Line",strokeWidth:.125,stroke:"gray"},Nd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Cv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Fy={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},th={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},nh={strokeWidth:.02,stroke:"black"},wl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,rr=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Oo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,$y=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,an=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ao=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Rd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Me=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Py=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,zy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Hy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,xo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Wy=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,By=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Yy=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function jy(t){return Pi(t)?Py():Co(t)?zy():t===f.XV?By():bo(t)?Hy():yo(t)?wl():wo(t)?Oo():Wr(t)?$y():Io(t)?Me():Ds(t)?Yy():""}var he=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(he||{}),Rt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Rt||{}),Ln=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Ln||{}),Ne=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(Ne||{}),xn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(xn||{});function Ky(t){if(Il(t)||Pi(t)||Co(t)||Io(t)||bo(t)||Ns(t)||yo(t)||Wr(t)||Rs(t))return Ne;if(wo(t))return Ln;if(Ds(t))return xn}function Vy(t){if(Il(t)||Pi(t)||Co(t)||Io(t)||bo(t)||Ns(t)||yo(t)||Wr(t)||Rs(t)||wo(t)||Ds(t))return"Dynamic"}const Ts=[$.ARROW_CONSTRAINT,$.LOCAL_CONSTRAINT,$.ARROW_TOOL,$.LOCAL_ELEMENT],Xy={inputOptions:{type:he.ARROW},toolId:f.ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Oo(),tags:[],categories:Ts}},qy={inputOptions:{type:he.ARROW},toolId:f.AVERAGE_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Oo(),tags:[],categories:Ts}},Zy={inputOptions:{type:he.ARROW,allowSelfIntersection:!0},toolId:f.BULBOUS_ARROW,shape:{type:W.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Oo(),tags:[],categories:Ts}};he.ARROW,f.SQUARE_ROOT_ARROW,W.LINE,Oo();const Qy={inputOptions:{type:he.ARROW},toolId:f.CHAOS_CONSTRUCTION_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Oo(),tags:[],categories:Ts}};function Jy(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function eO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function tO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function nO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function rO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const iO={Delete:null,Backspace:null};function oO(t,e=10){if(t in iO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function sO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function aO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function lO(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function cO(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function bv(t){return t==="Backspace"}function Lo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||bv(t.key))}function uO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function dO(t){return uO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function _O(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function zi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Kr(t,e,n){if(t===void 0)return t;let r=t;return bv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Dd=[$.CAGE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.CAGE_TOOL,$.LOCAL_ELEMENT],ir=[$.CAGE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.TYPABLE_TOOL,$.CAGE_TOOL,$.LOCAL_ELEMENT];function Iv(t,e=5){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function wv(t,e,n){return Kr(t,e,n)}const Pn={type:W.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},yl={type:he.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},or={...yl,valueUpdater:(t,e)=>wv(t,e,Iv)},fO={inputOptions:or,toolId:f.KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:rr(),tags:[],categories:ir}},gO={inputOptions:or,toolId:f.UNIQUE_DIGITS_CAGE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:rr(),tags:[],categories:ir}},hO={inputOptions:or,toolId:f.INVERTED_KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:rr(),tags:[],categories:ir}},vO={inputOptions:or,toolId:f.SUM_CAGE,shape:Pn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:rr(),tags:[],categories:ir}},pO={inputOptions:yl,toolId:f.SUM_CAGE_LOOK_AND_SAY,shape:Pn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:wl(),tags:[],categories:Dd}},mO={inputOptions:yl,toolId:f.PARITY_BALANCE_CAGE,shape:Pn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:wl(),tags:[],categories:Dd}},EO={inputOptions:or,toolId:f.DIVISIBLE_KILLER_CAGE,shape:Pn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:rr(),tags:[],categories:ir}},CO={inputOptions:or,toolId:f.SPOTLIGHT_CAGE,shape:Pn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:rr(),tags:[],categories:ir}},bO={inputOptions:yl,toolId:f.PUTTERIA_CAGE,shape:Pn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:wl(),tags:[],categories:Dd}},IO={inputOptions:or,toolId:f.MULTISET_CAGE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:rr(),tags:[],categories:ir}},wO={inputOptions:or,toolId:f.VAULTED_CAGE,shape:Pn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:rr(),tags:[],categories:ir}},yO={inputOptions:or,toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Pn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:rr(),tags:[],categories:ir}},OO={inputOptions:or,toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Pn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:rr(),tags:[],categories:ir}},AO={inputOptions:or,toolId:f.DOUBLERS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:rr(),tags:[],categories:ir}},xO={inputOptions:or,toolId:f.NEGATORS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:rr(),tags:[],categories:ir}},LO={inputOptions:{type:he.SELECTION},toolId:f.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[$.CELL_INPUT_TOOL]}},NO={inputOptions:{type:he.SELECTION},toolId:f.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[$.CELL_INPUT_TOOL]}},RO={inputOptions:{type:he.SELECTION},toolId:f.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[$.CELL_INPUT_TOOL]}},DO={inputOptions:{type:he.SELECTION},toolId:f.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[$.CELL_INPUT_TOOL]}},SO={inputOptions:{type:he.SELECTION},toolId:f.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[$.CELL_INPUT_TOOL]}},TO={inputOptions:{type:he.SELECTION},toolId:f.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[$.CELL_INPUT_TOOL]}},kO={inputOptions:{type:he.SELECTION},toolId:f.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[$.CELL_INPUT_TOOL]}},MO={inputOptions:{type:he.PEN},toolId:f.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},UO={type:he.CENTER_CORNER_OR_EDGE,targets:Rt.CLOSEST},Sd=[$.LOCAL_CONSTRAINT,$.CENTER_CORNER_EDGE_CONSTRAINT,$.LOCAL_ELEMENT];f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,W.CIRCLE,Rd();const GO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Rt.CLOSEST,valueUpdater:(t,e)=>Kr(t,e,()=>!0),defaultValue:""},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Rd(),tags:[],categories:Sd}},FO={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:Rt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Kr(t,e,()=>!0),defaultValue:""},toolId:f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Rd(),tags:[],categories:Sd}},$O={inputOptions:{type:he.CLONE},toolId:f.CLONE_REGION,shape:{type:W.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[$.CLONE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.LOCAL_ELEMENT]}},Ol=[$.CORNER_CONSTRAINT,$.LOCAL_CONSTRAINT,$.CORNER_TOOL,$.LOCAL_ELEMENT],Td=[$.CORNER_CONSTRAINT,$.LOCAL_CONSTRAINT,$.TYPABLE_TOOL,$.CORNER_TOOL,$.LOCAL_ELEMENT];function yv(t,e=3){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ov(t,e,n){return Kr(t,e,n)}function PO(t,e){function n(){return!0}return Kr(t,e,n)}const kd={type:he.CORNER,defaultValue:"",valueUpdater:(t,e)=>Ov(t,e,yv)},zO={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>PO(t,e),defaultValue:""},toolId:f.QUADRUPLE,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Wy(),categories:Td}},HO={inputOptions:kd,toolId:f.CORNER_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:xo(),categories:Td}},WO={inputOptions:{type:he.CORNER,defaultValue:""},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:W.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:xo(),categories:Ol}},BO={inputOptions:kd,toolId:f.CORNER_EVEN_COUNT,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:xo(),categories:Ol}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,W.CIRCLE,xo();const YO={inputOptions:{type:he.CORNER,defaultValue:"X"},toolId:f.PRODUCT_SQUARE,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:xo(),categories:Ol}},jO={inputOptions:{type:he.CORNER,defaultValue:""},toolId:f.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:xo(),categories:Ol}},Al=[$.EDGE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.EDGE_TOOL,$.LOCAL_ELEMENT],sr=[$.EDGE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.TYPABLE_TOOL,$.EDGE_TOOL,$.LOCAL_ELEMENT],ks=.15,Av=.02,Hi={type:W.CIRCLE,r:{editable:!0,value:ks,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Av,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Md={type:W.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function KO(t,e=1){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function xv(t,e=3){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function VO(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Ud(t,e,n){return Kr(t,e,n)}function XO(t,e){return t===void 0?"V":VO(e)?e.toUpperCase():t}function qO(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Lv(t,e){return t===void 0?"<":qO(e)?e:t}const Ms={type:he.EDGE,valueUpdater:(t,e)=>Ud(t,e,xv)},ZO={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>Ud(t,e,KO)},toolId:f.RATIO,negative_constraints:[{toolId:f.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:ks},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:sr}},QO={inputOptions:Ms,toolId:f.DIFFERENCE,negative_constraints:[{toolId:f.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:Hi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:sr}},JO={inputOptions:Ms,toolId:f.EDGE_SUM,shape:{...Hi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:sr}},eA={inputOptions:{type:he.EDGE,defaultValue:"V",valueUpdater:XO},toolId:f.XV,negative_constraints:[{toolId:f.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:f.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:f.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:W.TEXT_ONLY,r:{editable:!1,value:ks},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:sr}},tA={inputOptions:{type:he.EDGE,valueUpdater:Lv,defaultValue:"<"},toolId:f.EDGE_INEQUALITY,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:sr}},nA={inputOptions:Ms,toolId:f.EDGE_PRODUCT,shape:{...Hi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:sr}},rA={inputOptions:Ms,toolId:f.EDGE_MODULO,shape:{...Hi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:sr}},iA={inputOptions:Ms,toolId:f.EDGE_FACTOR,shape:{...Hi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:sr}},oA={inputOptions:{type:he.EDGE},toolId:f.XY_DIFFERENCES,negative_constraints:[{toolId:f.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:W.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:ks},strokeWidth:{editable:!1,value:Av,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:sr}},sA={inputOptions:{type:he.EDGE},toolId:f.YIN_YANG_WHITE_KROPKI,shape:Hi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:sr}},aA={inputOptions:{type:he.EDGE},toolId:f.YIN_YANG_KROPKI,negative_constraints:[{toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:ks},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:sr}},lA={inputOptions:{type:he.EDGE},toolId:f.FILLOMINO_REGION_BORDER,shape:Md,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Al}},cA={inputOptions:{type:he.EDGE},toolId:f.UNKNOWN_REGION_BORDER,shape:Md,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Al}},uA={inputOptions:{type:he.EDGE},toolId:f.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:Md,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Al}},dA={inputOptions:{type:he.EDGE},toolId:f.EDGE_CAVE_ONE_OF_EACH,shape:Hi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Al}},_A={inputOptions:{type:he.EDGE,valueUpdater:Lv,defaultValue:"<"},toolId:f.ONE_WAY_DOOR,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:sr}},No=[$.OUTSIDE_CORNER_CONSTRAINT,$.LOCAL_CONSTRAINT,$.TYPABLE_TOOL,$.OUTSIDE_CORNER_TOOL,$.OUTSIDE_DIRECTION_TOOL,$.LOCAL_ELEMENT];function fA(t,e=5){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Nv(t,e,n){return Kr(t,e,n)}const Ro={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Do={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Nv(t,e,fA),defaultValue:"",cornerOrEdge:Rt.CORNER},gA={inputOptions:Do,toolId:f.LITTLE_KILLER_SUM,shape:Ro,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Ao(),tags:[],categories:No}},hA={inputOptions:Do,toolId:f.LITTLE_KILLER_PRODUCT,shape:Ro,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Ao(),tags:[],categories:No}},vA={inputOptions:Do,toolId:f.LITTLE_KILLER_LOOK_AND_SAY,shape:Ro,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Ao(),tags:[],categories:No}},pA={inputOptions:Do,toolId:f.X_OMIT_LITTLE_KILLER_SUM,shape:Ro,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Ao(),tags:[],categories:No}},mA={inputOptions:Do,toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:Ro,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Ao(),tags:[],categories:No}},EA={inputOptions:Do,toolId:f.NEGATORS_LITTLE_KILLER_SUM,shape:Ro,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Ao(),tags:[],categories:No}},ln=[$.OUTSIDE_EDGE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.TYPABLE_TOOL,$.OUTSIDE_EDGE_TOOL,$.OUTSIDE_DIRECTION_TOOL,$.LOCAL_ELEMENT];function So(t,e=5){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Us(t,e,n){return Kr(t,e,n)}const cn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},zn={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Us(t,e,So),defaultValue:"",cornerOrEdge:Rt.EDGE},CA={inputOptions:zn,toolId:f.SANDWICH_SUM,shape:cn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:an(),tags:[],categories:ln}},bA={inputOptions:{...zn,cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.MYSTERY_SANDWICH_SUM,shape:cn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:an(),tags:[],categories:ln}},IA={inputOptions:zn,toolId:f.SANDWICH_SUM_XOR_X_SUM,shape:cn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:an(),tags:[],categories:ln}},wA={inputOptions:zn,toolId:f.X_SUM,shape:cn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:an(),tags:[],categories:ln}},yA={inputOptions:zn,toolId:f.SHORTSIGHTED_X_SUM,shape:cn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:an(),tags:[],categories:ln}},OA={inputOptions:zn,toolId:f.SHIFTED_X_SUM,shape:cn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:an(),tags:[],categories:ln}},AA={inputOptions:zn,toolId:f.BROKEN_X_SUM,shape:cn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:an(),tags:[],categories:ln}},xA={inputOptions:zn,toolId:f.X_SUM_SKYSCRAPERS,shape:cn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:an(),tags:[],categories:ln}},LA={inputOptions:zn,toolId:f.BATTLEFIELD,shape:cn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:an(),tags:[],categories:ln}},NA={inputOptions:zn,toolId:f.SKYSCRAPERS,shape:cn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:an(),tags:[],categories:ln}},RA={inputOptions:zn,toolId:f.X_INDEX,shape:cn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:an(),tags:[],categories:ln}},DA={inputOptions:zn,toolId:f.RISING_STREAK,shape:cn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:an(),tags:[],categories:ln}},SA={inputOptions:zn,toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:cn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:an(),tags:[],categories:ln}},TA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Us(t,e,So),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.OUTSIDE_CONSECUTIVE_SUM,shape:cn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:an(),tags:[],categories:ln}},kA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Us(t,e,So),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.LOOPWICHES,shape:cn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:an(),tags:[],categories:ln}},MA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Us(t,e,So),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:cn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:an(),tags:[],categories:ln}},UA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Us(t,e,So),defaultValue:"",cornerOrEdge:Rt.EDGE},toolId:f.PENTOMINO_BORDER_COUNT,shape:cn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:an(),tags:[],categories:ln}},GA={inputOptions:{type:he.SINGLE_CELL},toolId:f.COSMETIC_CELL_CENTER_SHAPE,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_ELEMENT]}},FA={inputOptions:{type:he.SINGLE_CELL_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_ELEMENT]}},$A={inputOptions:{type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_MULTI_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_ELEMENT]}},PA={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>Ud(t,e,xv),defaultValue:""},toolId:f.COSMETIC_EDGE,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.TYPABLE_TOOL,$.LOCAL_ELEMENT]}},zA={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Ov(t,e,yv),defaultValue:""},toolId:f.COSMETIC_CORNER,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.TYPABLE_TOOL,$.LOCAL_ELEMENT]}},HA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_ELEMENT]}},WA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_ELEMENT]}},BA={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_ELEMENT]}},YA={inputOptions:{type:he.CAGE,valueUpdater:(t,e)=>wv(t,e,Iv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:f.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.TYPABLE_TOOL,$.LOCAL_ELEMENT]}},jA={inputOptions:{type:he.ARROW},toolId:f.COSMETIC_ARROW,shape:{type:W.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.LOCAL_CONSTRAINT,$.LOCAL_ELEMENT]}},KA={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Nv(t,e,So),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.COSMETIC_OUTSIDE_DIRECTION,shape:{type:W.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[$.COSMETIC_TOOL,$.TYPABLE_TOOL,$.OUTSIDE_DIRECTION_TOOL,$.LOCAL_ELEMENT]}},To=[$.LOCAL_ELEMENT,$.DIAGONAL_CONSTRAINTS],VA={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},XA={toolId:f.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},qA={toolId:f.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},ZA={toolId:f.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},QA={toolId:f.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},JA={toolId:f.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},ex={toolId:f.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},tx={toolId:f.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},nx={toolId:f.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:f.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:f.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:f.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:To}},sx={toolId:f.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:To}},ax={toolId:f.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:To}},lx={toolId:f.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:To}},cx={toolId:f.PARITY_MIRROR_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:To}},ux={toolId:f.PARITY_MIRROR_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:To}},dx={toolId:f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},_x={toolId:f.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:f.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[$.LOCAL_ELEMENT,$.SIMPLE_GLOBAL_CONSTRAINT]}},hx={toolId:f.CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},vx={toolId:f.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},px={toolId:f.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},mx={toolId:f.YIN_YANG,negative_constraints:[{toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Ex={toolId:f.NURIMISAKI,negative_constraints:[{toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Cx={toolId:f.NURIKABE,negative_constraints:[{toolId:f.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},bx={toolId:f.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Ix={toolId:f.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:f.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:f.SHIKAKU,negative_constraints:[{toolId:f.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:f.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:f.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},xx={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:f.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:f.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:f.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:f.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:f.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[$.GLOBAL_CONSTRAINT,$.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Rx={toolId:f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[$.GLOBAL_CONSTRAINT,$.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Dx={toolId:f.CAVE,negative_constraints:[{toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:f.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:f.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:f.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:f.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Sx={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:f.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},kx={toolId:f.GALAXIES,negative_constraints:[{toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:f.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:f.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:f.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:f.CONNECT_FOUR,negative_constraints:[{toolId:f.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:f.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:f.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[$.LOCAL_ELEMENT,$.UNDETERMINED_REGIONS_CONSTRAINT]}},We=[$.LINE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.LINE_TOOL,$.LOCAL_ELEMENT],Vr=[$.LINE_CONSTRAINT,$.LOCAL_CONSTRAINT,$.DOUBLE_ENDED_LINE_CONSTRAINT,$.LINE_TOOL,$.LOCAL_ELEMENT],Gs={description:"",usage:Me(),tags:[],categories:We},kt={type:he.LINE,allowSelfIntersection:!0},Jt={type:he.LINE,allowSelfIntersection:!1},Px={inputOptions:Jt,toolId:f.THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Numbers along a thermometer must increase from the bulb end."}},zx={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:f.CUSTOM_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},Hx={inputOptions:Jt,toolId:f.FUZZY_THERMOMETER,shape:{type:W.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},Wx={inputOptions:Jt,toolId:f.SLOW_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},Bx={inputOptions:Jt,toolId:f.ROW_CYCLE_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},Yx={inputOptions:kt,toolId:f.PALINDROME,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Me(),tags:[],categories:We}},jx={inputOptions:kt,toolId:f.RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Me(),tags:[],categories:We}},Kx={inputOptions:kt,toolId:f.DOUBLE_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Me(),tags:[],categories:We}},Vx={inputOptions:kt,toolId:f.RENRENBANBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Me(),tags:[],categories:We}},Xx={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.N_CONSECUTIVE_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:We}},qx={inputOptions:kt,toolId:f.NABNER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Me(),tags:[],categories:We}},Zx={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Me(),tags:[],categories:We}},Qx={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.DUTCH_WHISPERS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Me(),tags:[],categories:We}},Jx={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Me(),tags:[],categories:We}},eL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Me(),tags:[],categories:We}},tL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_NABNER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Me(),tags:[],categories:We}},nL={inputOptions:Jt,toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Me(),tags:[],categories:We}},rL={inputOptions:Jt,toolId:f.INDEX_LINE,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Me(),tags:[],categories:We}},iL={inputOptions:kt,toolId:f.UNIQUE_VALUES_LINE,shape:{type:W.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Me(),tags:[],categories:We}},oL={inputOptions:kt,toolId:f.REGION_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Me(),tags:[],categories:We}},sL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Me(),tags:[],categories:We}},aL={inputOptions:Jt,toolId:f.ARITHMETIC_SEQUENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Me(),tags:[],categories:We}},lL={inputOptions:kt,toolId:f.SAME_PARITY_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Me(),tags:[],categories:We}},cL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Me(),tags:[],categories:We}},uL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.UNIMODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Me(),tags:[],categories:We}},dL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_OR_UNIMODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Me(),tags:[],categories:We}},_L={inputOptions:kt,toolId:f.ODD_EVEN_OSCILLATOR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Me(),tags:[],categories:We}},fL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.HIGH_LOW_OSCILLATOR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Me(),tags:[],categories:We}},gL={inputOptions:kt,toolId:f.ENTROPIC_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Me(),tags:[],categories:We}},hL={inputOptions:kt,toolId:f.ENTROPIC_OR_MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Me(),tags:[],categories:We}},vL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_COLUMN_IS_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Me(),tags:[],categories:We}},pL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_ROW_IS_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Me(),tags:[],categories:We}},mL={inputOptions:Jt,toolId:f.REPEATED_DIGITS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Me(),tags:[],categories:We}},EL={inputOptions:Jt,toolId:f.SUPERFUZZY_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Me(),tags:[],categories:We}},CL={inputOptions:kt,toolId:f.AMBIGUOUS_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Me(),tags:[],categories:We}},bL={inputOptions:Jt,toolId:f.HEADLESS_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Me(),tags:[],categories:We}},IL={inputOptions:kt,toolId:f.XV_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Me(),tags:[],categories:We}},wL={inputOptions:Jt,toolId:f.ROW_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Me(),tags:[],categories:We}},yL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.AT_LEAST_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Me(),tags:[],categories:We}},OL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Me(),tags:[],categories:We}};f.ADJACENT_CELL_SUM_IS_PRIME_LINE,W.LINE,Me();const AL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.PRODUCT_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Me(),tags:[],categories:We}},xL={inputOptions:kt,toolId:f.ADJACENT_MULTIPLES_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Me(),tags:[],categories:We}},LL={inputOptions:kt,toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Me(),tags:[],categories:We}},NL={inputOptions:Jt,toolId:f.LOOK_AND_SAY_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Me(),tags:[],categories:We}},RL={inputOptions:Jt,toolId:f.ZIPPER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Me(),tags:[],categories:We}},DL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.SEGMENTED_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Me(),tags:[],categories:We}},SL={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Me(),tags:[],categories:We}},TL={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Me(),tags:[],categories:We}};f.THERMO_OR_AVERAGE_ARROW,W.THERMO_WITH_CIRCLE,Me();const kL={inputOptions:Jt,toolId:f.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:W.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Me(),tags:[],categories:We}},ML={inputOptions:Jt,toolId:f.PEAPODS,shape:{type:W.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Me(),tags:[],categories:We}},UL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Me(),tags:[],categories:We}},GL={inputOptions:kt,toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Me(),tags:[],categories:We}},FL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Me(),tags:[],categories:We}},$L={inputOptions:kt,toolId:f.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Me(),tags:[],categories:We}},PL={inputOptions:Jt,toolId:f.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Me(),tags:[],categories:We}},zL={inputOptions:Jt,toolId:f.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Me(),tags:[],categories:We}},HL={inputOptions:kt,toolId:f.BETWEEN_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Me(),tags:[],categories:Vr}},WL={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.LOCKOUT_LINE,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Me(),tags:[],categories:Vr}},BL={inputOptions:kt,toolId:f.TIGHTROPE_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Me(),tags:[],categories:Vr}},YL={inputOptions:kt,toolId:f.PARITY_COUNT_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Me(),tags:[],categories:Vr}},jL={inputOptions:kt,toolId:f.DOUBLE_ARROW_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Me(),categories:Vr}},KL={inputOptions:kt,toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Me(),tags:[],categories:Vr}},VL={inputOptions:kt,toolId:f.SPLIT_PEAS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Me(),tags:[],categories:Vr}},XL={inputOptions:Jt,toolId:f.DOUBLERS_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Me(),tags:[],categories:We}},qL={inputOptions:kt,toolId:f.DOUBLERS_BETWEEN_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Me(),tags:[],categories:Vr}},ZL={inputOptions:kt,toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Me(),tags:[],categories:Vr}},Xe=[$.SINGLE_CELL_CONSTRAINT,$.LOCAL_CONSTRAINT,$.SINGLE_CELL_SHAPE_TOOL,$.LOCAL_ELEMENT],Wi=[$.SINGLE_CELL_CONSTRAINT,$.LOCAL_CONSTRAINT,$.SINGLE_CELL_COLOR_TOOL,$.LOCAL_ELEMENT],Rv=[$.SINGLE_CELL_ARROW_TOOL,$.SINGLE_CELL_CONSTRAINT,$.LOCAL_CONSTRAINT,$.LOCAL_ELEMENT],xl={type:W.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Bi={type:W.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Ll(t,e=3){return zi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function QL(t){return t===""||t==="1"||t==="2"||t==="3"}function Fs(t,e,n){return Kr(t,e,n)}const tt={type:he.SINGLE_CELL},hi={type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Ll),defaultValue:""},Dv={type:he.SINGLE_CELL_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},JL={inputOptions:tt,toolId:f.ODD,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:Xe}},eN={inputOptions:tt,toolId:f.EVEN,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:Xe}},tN={inputOptions:tt,toolId:f.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:Wi}},nN={inputOptions:tt,toolId:f.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:Wi}},rN={inputOptions:tt,toolId:f.ODD_MINESWEEPER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Xe}},iN={inputOptions:tt,toolId:f.EVEN_MINESWEEPER,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Xe}},oN={inputOptions:tt,toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:Xe}},sN={inputOptions:tt,toolId:f.WATCHTOWER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Xe}},aN={inputOptions:tt,toolId:f.NOT_WATCHTOWER,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Xe}},lN={inputOptions:hi,toolId:f.FARSIGHT,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:Xe}},cN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Ll),defaultValue:"9"},toolId:f.RADAR,negative_constraints:[{toolId:f.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:Xe}},uN={inputOptions:tt,toolId:f.ORTHOGONAL_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:Xe}},dN={inputOptions:tt,toolId:f.INDEXING_COLUMN,negative_constraints:[{toolId:f.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Wi}},_N={inputOptions:tt,toolId:f.INDEXING_ROW,negative_constraints:[{toolId:f.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Wi}},fN={inputOptions:tt,toolId:f.LOW_DIGIT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Wi}},gN={inputOptions:tt,toolId:f.HIGH_DIGIT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Wi}},hN={inputOptions:tt,toolId:f.FRIENDLY_CELL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Wi}},vN={inputOptions:tt,toolId:f.DIAGONALLY_ADJACENT_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:Xe}},pN={inputOptions:tt,toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:Xe}},mN={inputOptions:tt,toolId:f.SANDWICH_ROW_COL_COUNT,shape:Bi,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:Xe}},EN={inputOptions:tt,toolId:f.COUNTING_CIRCLES,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:Xe}},CN={inputOptions:tt,toolId:f.REVERSE_COUNTING_CIRCLES,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:Xe}},bN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,QL),defaultValue:""},toolId:f.COLORED_COUNTING_CIRCLES,shape:Bi,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:Xe}},IN={inputOptions:tt,toolId:f.UNIQUE_CELLS,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:Xe}},wN={inputOptions:tt,toolId:f.SEEN_EVEN_COUNT,shape:xl,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Xe}},yN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Ll),defaultValue:"5"},toolId:f.CELL_KNIGHT_WHISPERS,shape:Bi,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:Xe}},ON={inputOptions:tt,toolId:f.SEEN_ODD_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Xe}},AN={inputOptions:tt,toolId:f.YIN_YANG_MINESWEEPER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:Xe}},xN={inputOptions:tt,toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Xe}},LN={inputOptions:tt,toolId:f.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Xe}},NN={inputOptions:tt,toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:xl,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:Xe}},RN={inputOptions:tt,toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:Xe}},DN={inputOptions:tt,toolId:f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:W.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:Xe}},SN={inputOptions:tt,toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:Xe}},TN={inputOptions:tt,toolId:f.SEEN_REGION_BORDERS_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:Xe}},kN={inputOptions:tt,toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:Xe}},MN={inputOptions:tt,toolId:f.SASHIGANE_BEND_REGION_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:Xe}},UN={inputOptions:Dv,toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Rv}},GN={inputOptions:Dv,toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Rv}},FN={inputOptions:hi,toolId:f.SASHIGANE_REGION_SUM,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:Xe}},$N={inputOptions:tt,toolId:f.CELL_ON_THE_LOOP,shape:xl,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:Xe}},PN={inputOptions:tt,toolId:f.CELL_NOT_ON_THE_LOOP,shape:Bi,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:Xe}},zN={inputOptions:tt,toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:Xe}},HN={inputOptions:hi,toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:Xe}},WN={inputOptions:tt,toolId:f.CAVE_CLUE,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:Xe}},BN={inputOptions:hi,toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:Xe}},YN={inputOptions:hi,toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:Xe}},jN={inputOptions:hi,toolId:f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:Bi,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:Xe}},KN={inputOptions:tt,toolId:f.DIRECTED_PATH_START,shape:{type:W.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:Xe}},VN={inputOptions:tt,toolId:f.DIRECTED_PATH_END,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:Xe}},XN={inputOptions:hi,toolId:f.TELEPORT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:Xe}},qN={inputOptions:hi,toolId:f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:Xe}},ZN={inputOptions:tt,toolId:f.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...xl,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:Xe}},QN={inputOptions:tt,toolId:f.NURIKABE_ISLAND_SIZE_CELL,shape:Bi,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:Xe}},JN={inputOptions:tt,toolId:f.CONNECT_FOUR_YELLOW,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:Xe}},eR={inputOptions:tt,toolId:f.CONENCT_FOUR_RED,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:Xe}},tR={inputOptions:tt,toolId:f.SHIKAKU_REGION_SIZE,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,description:"Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region."}],shape:Bi,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:Xe}},nR={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Fs(t,e,Ll),defaultValue:"?"},toolId:f.SHIKAKU_REGION_SUM,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,description:"Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region."}],shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:Xe}},rR={inputOptions:{type:he.SINGLE_CELL},toolId:f.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:[$.LOCAL_CONSTRAINT,$.LOCAL_ELEMENT,$.FOG_TOOL]}},iR={toolId:f.CUSTOM_FOG_CLEARING,negative_constraints:[{toolId:f.FOG_CLEARING_ITSELF,description:"On cell input, clear itself."},{toolId:f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,description:"On cell input, clear orthogonal neighbours."},{toolId:f.FOG_CLEARING_DIAGONAL_NEIGHBOURS,description:"On cell input, clear diagonal neighbours."},{toolId:f.FOG_CLEARING_CONTAINING_ROW,description:"On cell input, clear containing row."},{toolId:f.FOG_CLEARING_CONTAINING_COLUMN,description:"On cell input, clear containing column."},{toolId:f.FOG_CLEARING_KNIGHTS_MOVE,description:"On cell input, clear cells a knight's move away."}],meta:{description:"",tags:[],categories:[$.LOCAL_CONSTRAINT,$.LOCAL_ELEMENT,$.FOG_TOOL]}},ar=[$.SINGLE_CELL_CONSTRAINT,$.LOCAL_CONSTRAINT,$.SINGLE_CELL_MULTIARROW_TOOL,$.LOCAL_ELEMENT],Sr={type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},lr={type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},oR={inputOptions:lr,toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:Sr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:ar}},sR={inputOptions:lr,toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:Sr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:ar}},aR={inputOptions:lr,toolId:f.LOOP_CELL_COUNT_ARROWS,shape:Sr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:ar}},lR={inputOptions:lr,toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:Sr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:ar}},cR={inputOptions:lr,toolId:f.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:Sr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:ar}},uR={inputOptions:lr,toolId:f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:Sr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:ar}},dR={inputOptions:lr,toolId:f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,shape:Sr,meta:{description:"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",tags:[],categories:ar}},_R={inputOptions:lr,toolId:f.COLD_ARROWS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:ar}},fR={inputOptions:lr,toolId:f.HOT_ARROWS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:ar}},gR={inputOptions:lr,toolId:f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:Sr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:ar}},hR={inputOptions:lr,toolId:f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:Sr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:ar}},vR={inputOptions:lr,toolId:f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:Sr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:ar}},pR={toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[$.LOCAL_CONSTRAINT,$.VALUED_GLOBAL_CONSTRAINT]}},mR={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[$.LOCAL_CONSTRAINT,$.VALUED_GLOBAL_CONSTRAINT]}},ER={toolId:f.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[$.LOCAL_CONSTRAINT,$.VALUED_GLOBAL_CONSTRAINT]}},CR={toolId:f.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[$.LOCAL_CONSTRAINT,$.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT;const bR={toolId:f.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT]}},IR={toolId:f.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT;const wR={toolId:f.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT]}},yR={toolId:f.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[$.LOCAL_ELEMENT,$.VALUE_MODIFIER_CONSTRAINT]}},OR=[$.CORNER_LINE_CONSTRAINT,$.CORNER_LINE_TOOL,$.LOCAL_CONSTRAINT,$.LOCAL_ELEMENT],AR={inputOptions:{type:he.CORNER_LINE},toolId:f.MAZE_WALL,shape:{type:W.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:OR}},Pt={[f.GIVEN]:LO,[f.DIGIT]:NO,[f.REGIONS]:RO,[f.OUTSIDE]:kO,[f.CORNER_PM]:DO,[f.CENTER_PM]:SO,[f.HIGHLIGHTS]:TO,[f.PEN_TOOL]:MO,[f.SUDOKU_RULES_DO_NOT_APPLY]:VA,[f.LEAVE_EMPTY_CELLS_EMPTY]:XA,[f.LITS]:$x,[f.HEXED_SUDOKU]:qA,[f.FILLOMINO]:Fx,[f.ANTIKNIGHT]:ZA,[f.ANTI_LONG_KNIGHT]:JA,[f.ANTIKING]:ex,[f.ANTI_GIRAFFE]:QA,[f.DISJOINT_GROUPS]:tx,[f.TANGO]:nx,[f.NONCONSECUTIVE]:rx,[f.NONRATIO]:ix,[f.ANTI_ENTROPY]:_x,[f.GLOBAL_INDEXING_COLUMN]:fx,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:gx,[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:dx,[f.NEGATIVE_DIAGONAL]:ox,[f.POSITIVE_DIAGONAL]:sx,[f.NEGATIVE_ANTIDIAGONAL]:ax,[f.POSITIVE_ANTIDIAGONAL]:lx,[f.PARITY_MIRROR_NEGATIVE_DIAGONAL]:cx,[f.PARITY_MIRROR_POSITIVE_DIAGONAL]:ux,[f.DOUBLERS]:bR,[f.NEGATORS]:IR,[f.NEXUS]:wR,[f.INDEXER_CELLS]:yR,[f.CHAOS_CONSTRUCTION]:hx,[f.NUMBERED_CHAOS_CONSTRUCTION]:vx,[f.CHAOS_CONSTRUCTION_SUGURU]:px,[f.YIN_YANG]:mx,[f.NURIMISAKI]:Ex,[f.NURIKABE]:Cx,[f.TWO_CONTIGUOUS_REGIONS]:bx,[f.SASHIGANE]:Ix,[f.NORINORI]:wx,[f.SHIKAKU]:yx,[f.GOLDILOCKS_ZONE]:Ax,[f.CELL_CENTER_LOOP_NO_TOUCHING]:xx,[f.CAVE]:Dx,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Sx,[f.GALAXIES]:kx,[f.PENTOMINO_TILLING]:Mx,[f.LITS_BLACK_WHITE_STAR_BATTLE]:Ux,[f.NORINORI_STAR_BATTLE]:Ox,[f.MAZE_DIRECTED_PATH]:Lx,[f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:Nx,[f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Rx,[f.CONNECT_FOUR]:Gx,[f.ODD]:JL,[f.EVEN]:eN,[f.MINIMUM]:tN,[f.MAXIMUM]:nN,[f.ODD_MINESWEEPER]:rN,[f.EVEN_MINESWEEPER]:iN,[f.WATCHTOWER]:sN,[f.NOT_WATCHTOWER]:aN,[f.FARSIGHT]:lN,[f.RADAR]:cN,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:oN,[f.ORTHOGONAL_SUM]:uN,[f.DIAGONALLY_ADJACENT_SUM]:vN,[f.INDEXING_COLUMN]:dN,[f.INDEXING_ROW]:_N,[f.LOW_DIGIT]:fN,[f.HIGH_DIGIT]:gN,[f.FRIENDLY_CELL]:hN,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:pN,[f.SANDWICH_ROW_COL_COUNT]:mN,[f.COUNTING_CIRCLES]:EN,[f.REVERSE_COUNTING_CIRCLES]:CN,[f.COLORED_COUNTING_CIRCLES]:bN,[f.UNIQUE_CELLS]:IN,[f.SEEN_EVEN_COUNT]:wN,[f.SEEN_ODD_COUNT]:ON,[f.CELL_KNIGHT_WHISPERS]:yN,[f.YIN_YANG_MINESWEEPER]:AN,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:xN,[f.YIN_YANG_SEEN_SHADED_CELLS]:LN,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:NN,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:RN,[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:DN,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:SN,[f.SEEN_REGION_BORDERS_COUNT]:TN,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:kN,[f.SASHIGANE_BEND_REGION_COUNT]:MN,[f.SASHIGANE_REGION_SUM]:FN,[f.CELL_ON_THE_LOOP]:$N,[f.CELL_NOT_ON_THE_LOOP]:PN,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:zN,[f.CAVE_CLUE]:WN,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:HN,[f.YIN_YANG_FILLOMINO_PARITY]:Tx,[f.SHIKAKU_REGION_SIZE]:tR,[f.SHIKAKU_REGION_SUM]:nR,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:BN,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:YN,[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:jN,[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:qN,[f.DIRECTED_PATH_START]:KN,[f.DIRECTED_PATH_END]:VN,[f.TELEPORT]:XN,[f.CONNECT_FOUR_YELLOW]:JN,[f.CONENCT_FOUR_RED]:eR,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:UN,[f.THERMO_SIGHTLINE_LOOP_ARROW]:GN,[f.HOT_ARROWS]:fR,[f.COLD_ARROWS]:_R,[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:uR,[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:dR,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:lR,[f.YIN_YANG_COUNT_SHADED_CELLS]:cR,[f.LOOP_CELL_COUNT_ARROWS]:aR,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:sR,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:oR,[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:gR,[f.NURIKABE_SEEN_WATERWAY_CELLS]:ZN,[f.NURIKABE_ISLAND_SIZE_CELL]:QN,[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:hR,[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:vR,[f.DIFFERENCE]:QO,[f.RATIO]:ZO,[f.XV]:eA,[f.EDGE_INEQUALITY]:tA,[f.EDGE_SUM]:JO,[f.EDGE_PRODUCT]:nA,[f.EDGE_MODULO]:rA,[f.EDGE_FACTOR]:iA,[f.XY_DIFFERENCES]:oA,[f.YIN_YANG_WHITE_KROPKI]:sA,[f.YIN_YANG_KROPKI]:aA,[f.FILLOMINO_REGION_BORDER]:lA,[f.UNKNOWN_REGION_BORDER]:cA,[f.CHAOS_CONSTRUCTION_SUGURU_BORDER]:uA,[f.EDGE_CAVE_ONE_OF_EACH]:dA,[f.ONE_WAY_DOOR]:_A,[f.QUADRUPLE]:zO,[f.CORNER_SUM]:HO,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:WO,[f.CORNER_EVEN_COUNT]:BO,[f.PRODUCT_SQUARE]:YO,[f.EQUAL_DIAGONAL_DIFFERENCES]:jO,[f.THERMOMETER]:Px,[f.FUZZY_THERMOMETER]:Hx,[f.SLOW_THERMOMETER]:Wx,[f.CUSTOM_THERMOMETER]:zx,[f.ROW_CYCLE_THERMOMETER]:Bx,[f.PALINDROME]:Yx,[f.RENBAN_LINE]:jx,[f.DOUBLE_RENBAN_LINE]:Kx,[f.RENRENBANBAN_LINE]:Vx,[f.N_CONSECUTIVE_RENBAN_LINE]:Xx,[f.NABNER_LINE]:qx,[f.WHISPERS_LINE]:Zx,[f.DUTCH_WHISPERS]:Qx,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:Jx,[f.RENBAN_OR_WHISPERS_LINE]:eL,[f.RENBAN_OR_NABNER_LINE]:tL,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:nL,[f.INDEX_LINE]:rL,[f.UNIQUE_VALUES_LINE]:iL,[f.REPEATED_DIGITS_LINE]:mL,[f.REGION_SUM_LINE]:oL,[f.SUM_LINE]:sL,[f.XV_LINE]:IL,[f.ROW_SUM_LINE]:wL,[f.AT_LEAST_X_LINE]:yL,[f.SUPERFUZZY_ARROW]:EL,[f.AMBIGUOUS_ARROW]:CL,[f.HEADLESS_ARROW]:bL,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:OL,[f.PRODUCT_LINE]:AL,[f.ADJACENT_MULTIPLES_LINE]:xL,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:LL,[f.LOOK_AND_SAY_LINE]:NL,[f.ARITHMETIC_SEQUENCE_LINE]:aL,[f.ZIPPER_LINE]:RL,[f.SEGMENTED_SUM_LINE]:DL,[f.SEGMENTED_SUM_AND_RENBAN_LINE]:SL,[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:TL,[f.SAME_PARITY_LINE]:lL,[f.MODULAR_LINE]:cL,[f.UNIMODULAR_LINE]:uL,[f.MODULAR_OR_UNIMODULAR_LINE]:dL,[f.ODD_EVEN_OSCILLATOR_LINE]:_L,[f.HIGH_LOW_OSCILLATOR_LINE]:fL,[f.ENTROPIC_LINE]:gL,[f.ENTROPIC_OR_MODULAR_LINE]:hL,[f.INDEXING_COLUMN_IS_X_LINE]:vL,[f.INDEXING_ROW_IS_X_LINE]:pL,[f.INDEXER_CELLS_REGION_SUBSET_LINE]:kL,[f.PEAPODS]:ML,[f.YIN_YANG_INDEXING_LINE_COLORING]:PL,[f.YIN_YANG_SHADED_WHISPERS_LINE]:UL,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:GL,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:FL,[f.YIN_YANG_REGION_SUM_LINE]:$L,[f.GOLDILOCKS_ZONE_REGION_SUM]:zL,[f.BETWEEN_LINE]:HL,[f.LOCKOUT_LINE]:WL,[f.PARITY_COUNT_LINE]:YL,[f.TIGHTROPE_LINE]:BL,[f.DOUBLE_ARROW_LINE]:jL,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:KL,[f.SPLIT_PEAS]:VL,[f.DOUBLERS_THERMOMETER]:XL,[f.DOUBLERS_BETWEEN_LINE]:qL,[f.DOUBLERS_DOUBLE_ARROW_LINE]:ZL,[f.ARROW]:Xy,[f.CHAOS_CONSTRUCTION_ARROW]:Qy,[f.AVERAGE_ARROW]:qy,[f.BULBOUS_ARROW]:Zy,[f.MAZE_WALL]:AR,[f.KILLER_CAGE]:fO,[f.UNIQUE_DIGITS_CAGE]:gO,[f.INVERTED_KILLER_CAGE]:hO,[f.SUM_CAGE]:vO,[f.SUM_CAGE_LOOK_AND_SAY]:pO,[f.PARITY_BALANCE_CAGE]:mO,[f.DIVISIBLE_KILLER_CAGE]:EO,[f.SPOTLIGHT_CAGE]:CO,[f.PUTTERIA_CAGE]:bO,[f.MULTISET_CAGE]:IO,[f.VAULTED_CAGE]:wO,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:yO,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:OO,[f.DOUBLERS_KILLER_CAGE]:AO,[f.NEGATORS_KILLER_CAGE]:xO,[f.CLONE_REGION]:$O,[f.SANDWICH_SUM]:CA,[f.MYSTERY_SANDWICH_SUM]:bA,[f.X_SUM]:wA,[f.SHORTSIGHTED_X_SUM]:yA,[f.SHIFTED_X_SUM]:OA,[f.BROKEN_X_SUM]:AA,[f.X_SUM_SKYSCRAPERS]:xA,[f.BATTLEFIELD]:LA,[f.SKYSCRAPERS]:NA,[f.X_INDEX]:RA,[f.SANDWICH_SUM_XOR_X_SUM]:IA,[f.RISING_STREAK]:DA,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:SA,[f.OUTSIDE_CONSECUTIVE_SUM]:TA,[f.LOOPWICHES]:kA,[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:MA,[f.PENTOMINO_BORDER_COUNT]:UA,[f.LITTLE_KILLER_SUM]:gA,[f.LITTLE_KILLER_PRODUCT]:hA,[f.LITTLE_KILLER_LOOK_AND_SAY]:vA,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:mA,[f.X_OMIT_LITTLE_KILLER_SUM]:pA,[f.NEGATORS_LITTLE_KILLER_SUM]:EA,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:GO,[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:FO,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:pR,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:mR,[f.FORBIDDEN_KNIGHT_SUM]:ER,[f.LITS_MAX_TETROMINO_SUM]:CR,[f.FOG_LIGHTS]:rR,[f.CUSTOM_FOG_CLEARING]:iR,[f.COSMETIC_CELL_CENTER_SHAPE]:GA,[f.COSMETIC_CELL_ARROW]:FA,[f.COSMETIC_CELL_MULTI_ARROW]:$A,[f.COSMETIC_EDGE]:PA,[f.COSMETIC_CORNER]:zA,[f.COSMETIC_LINE]:HA,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:WA,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:BA,[f.COSMETIC_ARROW]:jA,[f.COSMETIC_CAGE]:YA,[f.COSMETIC_OUTSIDE_DIRECTION]:KA};var He=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(He||{});function Sv(t){if(!(t in He))throw Error(" not a key in DIRECTION");return He[t]}function Ze(t,e){return t.r===e.r&&t.c===e.c}function Tv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function xR(t,e){return{r:t.r*e,c:t.c*e}}function LR(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function $s(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ze(t,e)}function NR(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function sl(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Gt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Nl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function RR(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function al(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function DR(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const SR=new Map([[6,He.N],[2,He.S],[0,He.E],[4,He.W],[7,He.NE],[5,He.NW],[1,He.SE],[3,He.SW]]);function vo(t){t=t%8;const e=SR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const TR=new Map([[He.N,{r:-1,c:0}],[He.S,{r:1,c:0}],[He.E,{r:0,c:1}],[He.W,{r:0,c:-1}],[He.NE,{r:-1,c:1}],[He.NW,{r:-1,c:-1}],[He.SE,{r:1,c:1}],[He.SW,{r:1,c:-1}]]);function Ps(t){const e=TR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function rh(t,e){const n=Ps(e);return Tv(t,n)}function ll(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function kv(t,e,n=!1){const r=t.some(o=>Ze(o,e)),i=n?t.some(o=>$s(o,e)):t.some(o=>NR(o,e));if(!r&&i){const o=[...t,e];return sl(o),o}return t}function Wa(t){return`R${t.r+1}C${t.c+1}`}function Gd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function kR(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var MR=vs.exports,ih;function UR(){return ih||(ih=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,g="__lodash_placeholder__",v=1,h=2,m=4,E=1,I=2,b=1,y=2,x=4,T=8,M=16,z=32,H=64,k=128,B=256,re=512,ce=30,J="...",oe=800,we=16,Z=1,Ee=2,me=3,ye=1/0,Se=9007199254740991,Le=17976931348623157e292,Ge=NaN,Fe=4294967295,_t=Fe-1,vt=Fe>>>1,zt=[["ary",k],["bind",b],["bindKey",y],["curry",T],["curryRight",M],["flip",re],["partial",z],["partialRight",H],["rearg",B]],st="[object Arguments]",Ot="[object Array]",Yt="[object AsyncFunction]",_r="[object Boolean]",Wn="[object Date]",Jr="[object DOMException]",Ir="[object Error]",jt="[object Function]",Re="[object GeneratorFunction]",Oe="[object Map]",$e="[object Number]",ze="[object Null]",St="[object Object]",Js="[object Promise]",ea="[object Proxy]",mi="[object RegExp]",bn="[object Set]",Ei="[object String]",Ci="[object Symbol]",Zl="[object Undefined]",bi="[object WeakMap]",Ql="[object WeakSet]",Ve="[object ArrayBuffer]",In="[object DataView]",ji="[object Float32Array]",Ki="[object Float64Array]",wr="[object Int8Array]",jo="[object Int16Array]",Ko="[object Int32Array]",Vo="[object Uint8Array]",Xo="[object Uint8ClampedArray]",Jl="[object Uint16Array]",ec="[object Uint32Array]",cm=/\b__p \+= '';/g,um=/\b(__p \+=) '' \+/g,dm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,p_=/&(?:amp|lt|gt|quot|#39);/g,m_=/[&<>"']/g,_m=RegExp(p_.source),fm=RegExp(m_.source),gm=/<%-([\s\S]+?)%>/g,hm=/<%([\s\S]+?)%>/g,E_=/<%=([\s\S]+?)%>/g,vm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pm=/^\w*$/,mm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tc=/[\\^$.*+?()[\]{}|]/g,Em=RegExp(tc.source),nc=/^\s+/,Cm=/\s/,bm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Im=/\{\n\/\* \[wrapped with (.+)\] \*/,wm=/,? & /,ym=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Om=/[()=,{}\[\]\/\s]/,Am=/\\(\\)?/g,xm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C_=/\w*$/,Lm=/^[-+]0x[0-9a-f]+$/i,Nm=/^0b[01]+$/i,Rm=/^\[object .+?Constructor\]$/,Dm=/^0o[0-7]+$/i,Sm=/^(?:0|[1-9]\d*)$/,Tm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ta=/($^)/,km=/['\n\r\u2028\u2029\\]/g,na="\\ud800-\\udfff",Mm="\\u0300-\\u036f",Um="\\ufe20-\\ufe2f",Gm="\\u20d0-\\u20ff",b_=Mm+Um+Gm,I_="\\u2700-\\u27bf",w_="a-z\\xdf-\\xf6\\xf8-\\xff",Fm="\\xac\\xb1\\xd7\\xf7",$m="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pm="\\u2000-\\u206f",zm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y_="A-Z\\xc0-\\xd6\\xd8-\\xde",O_="\\ufe0e\\ufe0f",A_=Fm+$m+Pm+zm,rc="['’]",Hm="["+na+"]",x_="["+A_+"]",ra="["+b_+"]",L_="\\d+",Wm="["+I_+"]",N_="["+w_+"]",R_="[^"+na+A_+L_+I_+w_+y_+"]",ic="\\ud83c[\\udffb-\\udfff]",Bm="(?:"+ra+"|"+ic+")",D_="[^"+na+"]",oc="(?:\\ud83c[\\udde6-\\uddff]){2}",sc="[\\ud800-\\udbff][\\udc00-\\udfff]",Vi="["+y_+"]",S_="\\u200d",T_="(?:"+N_+"|"+R_+")",Ym="(?:"+Vi+"|"+R_+")",k_="(?:"+rc+"(?:d|ll|m|re|s|t|ve))?",M_="(?:"+rc+"(?:D|LL|M|RE|S|T|VE))?",U_=Bm+"?",G_="["+O_+"]?",jm="(?:"+S_+"(?:"+[D_,oc,sc].join("|")+")"+G_+U_+")*",Km="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",F_=G_+U_+jm,Xm="(?:"+[Wm,oc,sc].join("|")+")"+F_,qm="(?:"+[D_+ra+"?",ra,oc,sc,Hm].join("|")+")",Zm=RegExp(rc,"g"),Qm=RegExp(ra,"g"),ac=RegExp(ic+"(?="+ic+")|"+qm+F_,"g"),Jm=RegExp([Vi+"?"+N_+"+"+k_+"(?="+[x_,Vi,"$"].join("|")+")",Ym+"+"+M_+"(?="+[x_,Vi+T_,"$"].join("|")+")",Vi+"?"+T_+"+"+k_,Vi+"+"+M_,Vm,Km,L_,Xm].join("|"),"g"),e1=RegExp("["+S_+na+b_+O_+"]"),t1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,n1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],r1=-1,Ut={};Ut[ji]=Ut[Ki]=Ut[wr]=Ut[jo]=Ut[Ko]=Ut[Vo]=Ut[Xo]=Ut[Jl]=Ut[ec]=!0,Ut[st]=Ut[Ot]=Ut[Ve]=Ut[_r]=Ut[In]=Ut[Wn]=Ut[Ir]=Ut[jt]=Ut[Oe]=Ut[$e]=Ut[St]=Ut[mi]=Ut[bn]=Ut[Ei]=Ut[bi]=!1;var Tt={};Tt[st]=Tt[Ot]=Tt[Ve]=Tt[In]=Tt[_r]=Tt[Wn]=Tt[ji]=Tt[Ki]=Tt[wr]=Tt[jo]=Tt[Ko]=Tt[Oe]=Tt[$e]=Tt[St]=Tt[mi]=Tt[bn]=Tt[Ei]=Tt[Ci]=Tt[Vo]=Tt[Xo]=Tt[Jl]=Tt[ec]=!0,Tt[Ir]=Tt[jt]=Tt[bi]=!1;var i1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},o1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},s1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},a1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},l1=parseFloat,c1=parseInt,$_=typeof Ba=="object"&&Ba&&Ba.Object===Object&&Ba,u1=typeof self=="object"&&self&&self.Object===Object&&self,nn=$_||u1||Function("return this")(),lc=e&&!e.nodeType&&e,Ii=lc&&!0&&t&&!t.nodeType&&t,P_=Ii&&Ii.exports===lc,cc=P_&&$_.process,Bn=function(){try{var V=Ii&&Ii.require&&Ii.require("util").types;return V||cc&&cc.binding&&cc.binding("util")}catch{}}(),z_=Bn&&Bn.isArrayBuffer,H_=Bn&&Bn.isDate,W_=Bn&&Bn.isMap,B_=Bn&&Bn.isRegExp,Y_=Bn&&Bn.isSet,j_=Bn&&Bn.isTypedArray;function Rn(V,se,ie){switch(ie.length){case 0:return V.call(se);case 1:return V.call(se,ie[0]);case 2:return V.call(se,ie[0],ie[1]);case 3:return V.call(se,ie[0],ie[1],ie[2])}return V.apply(se,ie)}function d1(V,se,ie,De){for(var et=-1,Ct=V==null?0:V.length;++et<Ct;){var qt=V[et];se(De,qt,ie(qt),V)}return De}function Yn(V,se){for(var ie=-1,De=V==null?0:V.length;++ie<De&&se(V[ie],ie,V)!==!1;);return V}function _1(V,se){for(var ie=V==null?0:V.length;ie--&&se(V[ie],ie,V)!==!1;);return V}function K_(V,se){for(var ie=-1,De=V==null?0:V.length;++ie<De;)if(!se(V[ie],ie,V))return!1;return!0}function ei(V,se){for(var ie=-1,De=V==null?0:V.length,et=0,Ct=[];++ie<De;){var qt=V[ie];se(qt,ie,V)&&(Ct[et++]=qt)}return Ct}function ia(V,se){var ie=V==null?0:V.length;return!!ie&&Xi(V,se,0)>-1}function uc(V,se,ie){for(var De=-1,et=V==null?0:V.length;++De<et;)if(ie(se,V[De]))return!0;return!1}function Ft(V,se){for(var ie=-1,De=V==null?0:V.length,et=Array(De);++ie<De;)et[ie]=se(V[ie],ie,V);return et}function ti(V,se){for(var ie=-1,De=se.length,et=V.length;++ie<De;)V[et+ie]=se[ie];return V}function dc(V,se,ie,De){var et=-1,Ct=V==null?0:V.length;for(De&&Ct&&(ie=V[++et]);++et<Ct;)ie=se(ie,V[et],et,V);return ie}function f1(V,se,ie,De){var et=V==null?0:V.length;for(De&&et&&(ie=V[--et]);et--;)ie=se(ie,V[et],et,V);return ie}function _c(V,se){for(var ie=-1,De=V==null?0:V.length;++ie<De;)if(se(V[ie],ie,V))return!0;return!1}var g1=fc("length");function h1(V){return V.split("")}function v1(V){return V.match(ym)||[]}function V_(V,se,ie){var De;return ie(V,function(et,Ct,qt){if(se(et,Ct,qt))return De=Ct,!1}),De}function oa(V,se,ie,De){for(var et=V.length,Ct=ie+(De?1:-1);De?Ct--:++Ct<et;)if(se(V[Ct],Ct,V))return Ct;return-1}function Xi(V,se,ie){return se===se?L1(V,se,ie):oa(V,X_,ie)}function p1(V,se,ie,De){for(var et=ie-1,Ct=V.length;++et<Ct;)if(De(V[et],se))return et;return-1}function X_(V){return V!==V}function q_(V,se){var ie=V==null?0:V.length;return ie?hc(V,se)/ie:Ge}function fc(V){return function(se){return se==null?n:se[V]}}function gc(V){return function(se){return V==null?n:V[se]}}function Z_(V,se,ie,De,et){return et(V,function(Ct,qt,Nt){ie=De?(De=!1,Ct):se(ie,Ct,qt,Nt)}),ie}function m1(V,se){var ie=V.length;for(V.sort(se);ie--;)V[ie]=V[ie].value;return V}function hc(V,se){for(var ie,De=-1,et=V.length;++De<et;){var Ct=se(V[De]);Ct!==n&&(ie=ie===n?Ct:ie+Ct)}return ie}function vc(V,se){for(var ie=-1,De=Array(V);++ie<V;)De[ie]=se(ie);return De}function E1(V,se){return Ft(se,function(ie){return[ie,V[ie]]})}function Q_(V){return V&&V.slice(0,nf(V)+1).replace(nc,"")}function Dn(V){return function(se){return V(se)}}function pc(V,se){return Ft(se,function(ie){return V[ie]})}function qo(V,se){return V.has(se)}function J_(V,se){for(var ie=-1,De=V.length;++ie<De&&Xi(se,V[ie],0)>-1;);return ie}function ef(V,se){for(var ie=V.length;ie--&&Xi(se,V[ie],0)>-1;);return ie}function C1(V,se){for(var ie=V.length,De=0;ie--;)V[ie]===se&&++De;return De}var b1=gc(i1),I1=gc(o1);function w1(V){return"\\"+a1[V]}function y1(V,se){return V==null?n:V[se]}function qi(V){return e1.test(V)}function O1(V){return t1.test(V)}function A1(V){for(var se,ie=[];!(se=V.next()).done;)ie.push(se.value);return ie}function mc(V){var se=-1,ie=Array(V.size);return V.forEach(function(De,et){ie[++se]=[et,De]}),ie}function tf(V,se){return function(ie){return V(se(ie))}}function ni(V,se){for(var ie=-1,De=V.length,et=0,Ct=[];++ie<De;){var qt=V[ie];(qt===se||qt===g)&&(V[ie]=g,Ct[et++]=ie)}return Ct}function sa(V){var se=-1,ie=Array(V.size);return V.forEach(function(De){ie[++se]=De}),ie}function x1(V){var se=-1,ie=Array(V.size);return V.forEach(function(De){ie[++se]=[De,De]}),ie}function L1(V,se,ie){for(var De=ie-1,et=V.length;++De<et;)if(V[De]===se)return De;return-1}function N1(V,se,ie){for(var De=ie+1;De--;)if(V[De]===se)return De;return De}function Zi(V){return qi(V)?D1(V):g1(V)}function fr(V){return qi(V)?S1(V):h1(V)}function nf(V){for(var se=V.length;se--&&Cm.test(V.charAt(se)););return se}var R1=gc(s1);function D1(V){for(var se=ac.lastIndex=0;ac.test(V);)++se;return se}function S1(V){return V.match(ac)||[]}function T1(V){return V.match(Jm)||[]}var k1=function V(se){se=se==null?nn:Qi.defaults(nn.Object(),se,Qi.pick(nn,n1));var ie=se.Array,De=se.Date,et=se.Error,Ct=se.Function,qt=se.Math,Nt=se.Object,Ec=se.RegExp,M1=se.String,jn=se.TypeError,aa=ie.prototype,U1=Ct.prototype,Ji=Nt.prototype,la=se["__core-js_shared__"],ca=U1.toString,yt=Ji.hasOwnProperty,G1=0,rf=function(){var s=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ua=Ji.toString,F1=ca.call(Nt),$1=nn._,P1=Ec("^"+ca.call(yt).replace(tc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),da=P_?se.Buffer:n,ri=se.Symbol,_a=se.Uint8Array,of=da?da.allocUnsafe:n,fa=tf(Nt.getPrototypeOf,Nt),sf=Nt.create,af=Ji.propertyIsEnumerable,ga=aa.splice,lf=ri?ri.isConcatSpreadable:n,Zo=ri?ri.iterator:n,wi=ri?ri.toStringTag:n,ha=function(){try{var s=Li(Nt,"defineProperty");return s({},"",{}),s}catch{}}(),z1=se.clearTimeout!==nn.clearTimeout&&se.clearTimeout,H1=De&&De.now!==nn.Date.now&&De.now,W1=se.setTimeout!==nn.setTimeout&&se.setTimeout,va=qt.ceil,pa=qt.floor,Cc=Nt.getOwnPropertySymbols,B1=da?da.isBuffer:n,cf=se.isFinite,Y1=aa.join,j1=tf(Nt.keys,Nt),Zt=qt.max,dn=qt.min,K1=De.now,V1=se.parseInt,uf=qt.random,X1=aa.reverse,bc=Li(se,"DataView"),Qo=Li(se,"Map"),Ic=Li(se,"Promise"),eo=Li(se,"Set"),Jo=Li(se,"WeakMap"),es=Li(Nt,"create"),ma=Jo&&new Jo,to={},q1=Ni(bc),Z1=Ni(Qo),Q1=Ni(Ic),J1=Ni(eo),eE=Ni(Jo),Ea=ri?ri.prototype:n,ts=Ea?Ea.valueOf:n,df=Ea?Ea.toString:n;function R(s){if(Ht(s)&&!nt(s)&&!(s instanceof gt)){if(s instanceof Kn)return s;if(yt.call(s,"__wrapped__"))return _g(s)}return new Kn(s)}var no=function(){function s(){}return function(l){if(!$t(l))return{};if(sf)return sf(l);s.prototype=l;var p=new s;return s.prototype=n,p}}();function Ca(){}function Kn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}R.templateSettings={escape:gm,evaluate:hm,interpolate:E_,variable:"",imports:{_:R}},R.prototype=Ca.prototype,R.prototype.constructor=R,Kn.prototype=no(Ca.prototype),Kn.prototype.constructor=Kn;function gt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Fe,this.__views__=[]}function tE(){var s=new gt(this.__wrapped__);return s.__actions__=wn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=wn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=wn(this.__views__),s}function nE(){if(this.__filtered__){var s=new gt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function rE(){var s=this.__wrapped__.value(),l=this.__dir__,p=nt(s),C=l<0,w=p?s.length:0,S=h0(0,w,this.__views__),F=S.start,Y=S.end,q=Y-F,de=C?Y:F-1,_e=this.__iteratees__,ge=_e.length,Ae=0,Pe=dn(q,this.__takeCount__);if(!p||!C&&w==q&&Pe==q)return Mf(s,this.__actions__);var je=[];e:for(;q--&&Ae<Pe;){de+=l;for(var at=-1,Ke=s[de];++at<ge;){var ft=_e[at],ht=ft.iteratee,kn=ft.type,vn=ht(Ke);if(kn==Ee)Ke=vn;else if(!vn){if(kn==Z)continue e;break e}}je[Ae++]=Ke}return je}gt.prototype=no(Ca.prototype),gt.prototype.constructor=gt;function yi(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function iE(){this.__data__=es?es(null):{},this.size=0}function oE(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function sE(s){var l=this.__data__;if(es){var p=l[s];return p===u?n:p}return yt.call(l,s)?l[s]:n}function aE(s){var l=this.__data__;return es?l[s]!==n:yt.call(l,s)}function lE(s,l){var p=this.__data__;return this.size+=this.has(s)?0:1,p[s]=es&&l===n?u:l,this}yi.prototype.clear=iE,yi.prototype.delete=oE,yi.prototype.get=sE,yi.prototype.has=aE,yi.prototype.set=lE;function Tr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function cE(){this.__data__=[],this.size=0}function uE(s){var l=this.__data__,p=ba(l,s);if(p<0)return!1;var C=l.length-1;return p==C?l.pop():ga.call(l,p,1),--this.size,!0}function dE(s){var l=this.__data__,p=ba(l,s);return p<0?n:l[p][1]}function _E(s){return ba(this.__data__,s)>-1}function fE(s,l){var p=this.__data__,C=ba(p,s);return C<0?(++this.size,p.push([s,l])):p[C][1]=l,this}Tr.prototype.clear=cE,Tr.prototype.delete=uE,Tr.prototype.get=dE,Tr.prototype.has=_E,Tr.prototype.set=fE;function kr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function gE(){this.size=0,this.__data__={hash:new yi,map:new(Qo||Tr),string:new yi}}function hE(s){var l=Ta(this,s).delete(s);return this.size-=l?1:0,l}function vE(s){return Ta(this,s).get(s)}function pE(s){return Ta(this,s).has(s)}function mE(s,l){var p=Ta(this,s),C=p.size;return p.set(s,l),this.size+=p.size==C?0:1,this}kr.prototype.clear=gE,kr.prototype.delete=hE,kr.prototype.get=vE,kr.prototype.has=pE,kr.prototype.set=mE;function Oi(s){var l=-1,p=s==null?0:s.length;for(this.__data__=new kr;++l<p;)this.add(s[l])}function EE(s){return this.__data__.set(s,u),this}function CE(s){return this.__data__.has(s)}Oi.prototype.add=Oi.prototype.push=EE,Oi.prototype.has=CE;function gr(s){var l=this.__data__=new Tr(s);this.size=l.size}function bE(){this.__data__=new Tr,this.size=0}function IE(s){var l=this.__data__,p=l.delete(s);return this.size=l.size,p}function wE(s){return this.__data__.get(s)}function yE(s){return this.__data__.has(s)}function OE(s,l){var p=this.__data__;if(p instanceof Tr){var C=p.__data__;if(!Qo||C.length<i-1)return C.push([s,l]),this.size=++p.size,this;p=this.__data__=new kr(C)}return p.set(s,l),this.size=p.size,this}gr.prototype.clear=bE,gr.prototype.delete=IE,gr.prototype.get=wE,gr.prototype.has=yE,gr.prototype.set=OE;function _f(s,l){var p=nt(s),C=!p&&Ri(s),w=!p&&!C&&li(s),S=!p&&!C&&!w&&so(s),F=p||C||w||S,Y=F?vc(s.length,M1):[],q=Y.length;for(var de in s)(l||yt.call(s,de))&&!(F&&(de=="length"||w&&(de=="offset"||de=="parent")||S&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Fr(de,q)))&&Y.push(de);return Y}function ff(s){var l=s.length;return l?s[Tc(0,l-1)]:n}function AE(s,l){return ka(wn(s),Ai(l,0,s.length))}function xE(s){return ka(wn(s))}function wc(s,l,p){(p!==n&&!hr(s[l],p)||p===n&&!(l in s))&&Mr(s,l,p)}function ns(s,l,p){var C=s[l];(!(yt.call(s,l)&&hr(C,p))||p===n&&!(l in s))&&Mr(s,l,p)}function ba(s,l){for(var p=s.length;p--;)if(hr(s[p][0],l))return p;return-1}function LE(s,l,p,C){return ii(s,function(w,S,F){l(C,w,p(w),F)}),C}function gf(s,l){return s&&Or(l,en(l),s)}function NE(s,l){return s&&Or(l,On(l),s)}function Mr(s,l,p){l=="__proto__"&&ha?ha(s,l,{configurable:!0,enumerable:!0,value:p,writable:!0}):s[l]=p}function yc(s,l){for(var p=-1,C=l.length,w=ie(C),S=s==null;++p<C;)w[p]=S?n:iu(s,l[p]);return w}function Ai(s,l,p){return s===s&&(p!==n&&(s=s<=p?s:p),l!==n&&(s=s>=l?s:l)),s}function Vn(s,l,p,C,w,S){var F,Y=l&v,q=l&h,de=l&m;if(p&&(F=w?p(s,C,w,S):p(s)),F!==n)return F;if(!$t(s))return s;var _e=nt(s);if(_e){if(F=p0(s),!Y)return wn(s,F)}else{var ge=_n(s),Ae=ge==jt||ge==Re;if(li(s))return Ff(s,Y);if(ge==St||ge==st||Ae&&!w){if(F=q||Ae?{}:rg(s),!Y)return q?s0(s,NE(F,s)):o0(s,gf(F,s))}else{if(!Tt[ge])return w?s:{};F=m0(s,ge,Y)}}S||(S=new gr);var Pe=S.get(s);if(Pe)return Pe;S.set(s,F),Sg(s)?s.forEach(function(Ke){F.add(Vn(Ke,l,p,Ke,s,S))}):Rg(s)&&s.forEach(function(Ke,ft){F.set(ft,Vn(Ke,l,p,ft,s,S))});var je=de?q?Bc:Wc:q?On:en,at=_e?n:je(s);return Yn(at||s,function(Ke,ft){at&&(ft=Ke,Ke=s[ft]),ns(F,ft,Vn(Ke,l,p,ft,s,S))}),F}function RE(s){var l=en(s);return function(p){return hf(p,s,l)}}function hf(s,l,p){var C=p.length;if(s==null)return!C;for(s=Nt(s);C--;){var w=p[C],S=l[w],F=s[w];if(F===n&&!(w in s)||!S(F))return!1}return!0}function vf(s,l,p){if(typeof s!="function")throw new jn(a);return cs(function(){s.apply(n,p)},l)}function rs(s,l,p,C){var w=-1,S=ia,F=!0,Y=s.length,q=[],de=l.length;if(!Y)return q;p&&(l=Ft(l,Dn(p))),C?(S=uc,F=!1):l.length>=i&&(S=qo,F=!1,l=new Oi(l));e:for(;++w<Y;){var _e=s[w],ge=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,F&&ge===ge){for(var Ae=de;Ae--;)if(l[Ae]===ge)continue e;q.push(_e)}else S(l,ge,C)||q.push(_e)}return q}var ii=Wf(yr),pf=Wf(Ac,!0);function DE(s,l){var p=!0;return ii(s,function(C,w,S){return p=!!l(C,w,S),p}),p}function Ia(s,l,p){for(var C=-1,w=s.length;++C<w;){var S=s[C],F=l(S);if(F!=null&&(Y===n?F===F&&!Tn(F):p(F,Y)))var Y=F,q=S}return q}function SE(s,l,p,C){var w=s.length;for(p=it(p),p<0&&(p=-p>w?0:w+p),C=C===n||C>w?w:it(C),C<0&&(C+=w),C=p>C?0:kg(C);p<C;)s[p++]=l;return s}function mf(s,l){var p=[];return ii(s,function(C,w,S){l(C,w,S)&&p.push(C)}),p}function rn(s,l,p,C,w){var S=-1,F=s.length;for(p||(p=C0),w||(w=[]);++S<F;){var Y=s[S];l>0&&p(Y)?l>1?rn(Y,l-1,p,C,w):ti(w,Y):C||(w[w.length]=Y)}return w}var Oc=Bf(),Ef=Bf(!0);function yr(s,l){return s&&Oc(s,l,en)}function Ac(s,l){return s&&Ef(s,l,en)}function wa(s,l){return ei(l,function(p){return $r(s[p])})}function xi(s,l){l=si(l,s);for(var p=0,C=l.length;s!=null&&p<C;)s=s[Ar(l[p++])];return p&&p==C?s:n}function Cf(s,l,p){var C=l(s);return nt(s)?C:ti(C,p(s))}function gn(s){return s==null?s===n?Zl:ze:wi&&wi in Nt(s)?g0(s):x0(s)}function xc(s,l){return s>l}function TE(s,l){return s!=null&&yt.call(s,l)}function kE(s,l){return s!=null&&l in Nt(s)}function ME(s,l,p){return s>=dn(l,p)&&s<Zt(l,p)}function Lc(s,l,p){for(var C=p?uc:ia,w=s[0].length,S=s.length,F=S,Y=ie(S),q=1/0,de=[];F--;){var _e=s[F];F&&l&&(_e=Ft(_e,Dn(l))),q=dn(_e.length,q),Y[F]=!p&&(l||w>=120&&_e.length>=120)?new Oi(F&&_e):n}_e=s[0];var ge=-1,Ae=Y[0];e:for(;++ge<w&&de.length<q;){var Pe=_e[ge],je=l?l(Pe):Pe;if(Pe=p||Pe!==0?Pe:0,!(Ae?qo(Ae,je):C(de,je,p))){for(F=S;--F;){var at=Y[F];if(!(at?qo(at,je):C(s[F],je,p)))continue e}Ae&&Ae.push(je),de.push(Pe)}}return de}function UE(s,l,p,C){return yr(s,function(w,S,F){l(C,p(w),S,F)}),C}function is(s,l,p){l=si(l,s),s=ag(s,l);var C=s==null?s:s[Ar(qn(l))];return C==null?n:Rn(C,s,p)}function bf(s){return Ht(s)&&gn(s)==st}function GE(s){return Ht(s)&&gn(s)==Ve}function FE(s){return Ht(s)&&gn(s)==Wn}function os(s,l,p,C,w){return s===l?!0:s==null||l==null||!Ht(s)&&!Ht(l)?s!==s&&l!==l:$E(s,l,p,C,os,w)}function $E(s,l,p,C,w,S){var F=nt(s),Y=nt(l),q=F?Ot:_n(s),de=Y?Ot:_n(l);q=q==st?St:q,de=de==st?St:de;var _e=q==St,ge=de==St,Ae=q==de;if(Ae&&li(s)){if(!li(l))return!1;F=!0,_e=!1}if(Ae&&!_e)return S||(S=new gr),F||so(s)?eg(s,l,p,C,w,S):_0(s,l,q,p,C,w,S);if(!(p&E)){var Pe=_e&&yt.call(s,"__wrapped__"),je=ge&&yt.call(l,"__wrapped__");if(Pe||je){var at=Pe?s.value():s,Ke=je?l.value():l;return S||(S=new gr),w(at,Ke,p,C,S)}}return Ae?(S||(S=new gr),f0(s,l,p,C,w,S)):!1}function PE(s){return Ht(s)&&_n(s)==Oe}function Nc(s,l,p,C){var w=p.length,S=w,F=!C;if(s==null)return!S;for(s=Nt(s);w--;){var Y=p[w];if(F&&Y[2]?Y[1]!==s[Y[0]]:!(Y[0]in s))return!1}for(;++w<S;){Y=p[w];var q=Y[0],de=s[q],_e=Y[1];if(F&&Y[2]){if(de===n&&!(q in s))return!1}else{var ge=new gr;if(C)var Ae=C(de,_e,q,s,l,ge);if(!(Ae===n?os(_e,de,E|I,C,ge):Ae))return!1}}return!0}function If(s){if(!$t(s)||I0(s))return!1;var l=$r(s)?P1:Rm;return l.test(Ni(s))}function zE(s){return Ht(s)&&gn(s)==mi}function HE(s){return Ht(s)&&_n(s)==bn}function WE(s){return Ht(s)&&Pa(s.length)&&!!Ut[gn(s)]}function wf(s){return typeof s=="function"?s:s==null?An:typeof s=="object"?nt(s)?Af(s[0],s[1]):Of(s):Yg(s)}function Rc(s){if(!ls(s))return j1(s);var l=[];for(var p in Nt(s))yt.call(s,p)&&p!="constructor"&&l.push(p);return l}function BE(s){if(!$t(s))return A0(s);var l=ls(s),p=[];for(var C in s)C=="constructor"&&(l||!yt.call(s,C))||p.push(C);return p}function Dc(s,l){return s<l}function yf(s,l){var p=-1,C=yn(s)?ie(s.length):[];return ii(s,function(w,S,F){C[++p]=l(w,S,F)}),C}function Of(s){var l=jc(s);return l.length==1&&l[0][2]?og(l[0][0],l[0][1]):function(p){return p===s||Nc(p,s,l)}}function Af(s,l){return Vc(s)&&ig(l)?og(Ar(s),l):function(p){var C=iu(p,s);return C===n&&C===l?ou(p,s):os(l,C,E|I)}}function ya(s,l,p,C,w){s!==l&&Oc(l,function(S,F){if(w||(w=new gr),$t(S))YE(s,l,F,p,ya,C,w);else{var Y=C?C(qc(s,F),S,F+"",s,l,w):n;Y===n&&(Y=S),wc(s,F,Y)}},On)}function YE(s,l,p,C,w,S,F){var Y=qc(s,p),q=qc(l,p),de=F.get(q);if(de){wc(s,p,de);return}var _e=S?S(Y,q,p+"",s,l,F):n,ge=_e===n;if(ge){var Ae=nt(q),Pe=!Ae&&li(q),je=!Ae&&!Pe&&so(q);_e=q,Ae||Pe||je?nt(Y)?_e=Y:Kt(Y)?_e=wn(Y):Pe?(ge=!1,_e=Ff(q,!0)):je?(ge=!1,_e=$f(q,!0)):_e=[]:us(q)||Ri(q)?(_e=Y,Ri(Y)?_e=Mg(Y):(!$t(Y)||$r(Y))&&(_e=rg(q))):ge=!1}ge&&(F.set(q,_e),w(_e,q,C,S,F),F.delete(q)),wc(s,p,_e)}function xf(s,l){var p=s.length;if(p)return l+=l<0?p:0,Fr(l,p)?s[l]:n}function Lf(s,l,p){l.length?l=Ft(l,function(S){return nt(S)?function(F){return xi(F,S.length===1?S[0]:S)}:S}):l=[An];var C=-1;l=Ft(l,Dn(Ye()));var w=yf(s,function(S,F,Y){var q=Ft(l,function(de){return de(S)});return{criteria:q,index:++C,value:S}});return m1(w,function(S,F){return i0(S,F,p)})}function jE(s,l){return Nf(s,l,function(p,C){return ou(s,C)})}function Nf(s,l,p){for(var C=-1,w=l.length,S={};++C<w;){var F=l[C],Y=xi(s,F);p(Y,F)&&ss(S,si(F,s),Y)}return S}function KE(s){return function(l){return xi(l,s)}}function Sc(s,l,p,C){var w=C?p1:Xi,S=-1,F=l.length,Y=s;for(s===l&&(l=wn(l)),p&&(Y=Ft(s,Dn(p)));++S<F;)for(var q=0,de=l[S],_e=p?p(de):de;(q=w(Y,_e,q,C))>-1;)Y!==s&&ga.call(Y,q,1),ga.call(s,q,1);return s}function Rf(s,l){for(var p=s?l.length:0,C=p-1;p--;){var w=l[p];if(p==C||w!==S){var S=w;Fr(w)?ga.call(s,w,1):Uc(s,w)}}return s}function Tc(s,l){return s+pa(uf()*(l-s+1))}function VE(s,l,p,C){for(var w=-1,S=Zt(va((l-s)/(p||1)),0),F=ie(S);S--;)F[C?S:++w]=s,s+=p;return F}function kc(s,l){var p="";if(!s||l<1||l>Se)return p;do l%2&&(p+=s),l=pa(l/2),l&&(s+=s);while(l);return p}function ct(s,l){return Zc(sg(s,l,An),s+"")}function XE(s){return ff(ao(s))}function qE(s,l){var p=ao(s);return ka(p,Ai(l,0,p.length))}function ss(s,l,p,C){if(!$t(s))return s;l=si(l,s);for(var w=-1,S=l.length,F=S-1,Y=s;Y!=null&&++w<S;){var q=Ar(l[w]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(w!=F){var _e=Y[q];de=C?C(_e,q,Y):n,de===n&&(de=$t(_e)?_e:Fr(l[w+1])?[]:{})}ns(Y,q,de),Y=Y[q]}return s}var Df=ma?function(s,l){return ma.set(s,l),s}:An,ZE=ha?function(s,l){return ha(s,"toString",{configurable:!0,enumerable:!1,value:au(l),writable:!0})}:An;function QE(s){return ka(ao(s))}function Xn(s,l,p){var C=-1,w=s.length;l<0&&(l=-l>w?0:w+l),p=p>w?w:p,p<0&&(p+=w),w=l>p?0:p-l>>>0,l>>>=0;for(var S=ie(w);++C<w;)S[C]=s[C+l];return S}function JE(s,l){var p;return ii(s,function(C,w,S){return p=l(C,w,S),!p}),!!p}function Oa(s,l,p){var C=0,w=s==null?C:s.length;if(typeof l=="number"&&l===l&&w<=vt){for(;C<w;){var S=C+w>>>1,F=s[S];F!==null&&!Tn(F)&&(p?F<=l:F<l)?C=S+1:w=S}return w}return Mc(s,l,An,p)}function Mc(s,l,p,C){var w=0,S=s==null?0:s.length;if(S===0)return 0;l=p(l);for(var F=l!==l,Y=l===null,q=Tn(l),de=l===n;w<S;){var _e=pa((w+S)/2),ge=p(s[_e]),Ae=ge!==n,Pe=ge===null,je=ge===ge,at=Tn(ge);if(F)var Ke=C||je;else de?Ke=je&&(C||Ae):Y?Ke=je&&Ae&&(C||!Pe):q?Ke=je&&Ae&&!Pe&&(C||!at):Pe||at?Ke=!1:Ke=C?ge<=l:ge<l;Ke?w=_e+1:S=_e}return dn(S,_t)}function Sf(s,l){for(var p=-1,C=s.length,w=0,S=[];++p<C;){var F=s[p],Y=l?l(F):F;if(!p||!hr(Y,q)){var q=Y;S[w++]=F===0?0:F}}return S}function Tf(s){return typeof s=="number"?s:Tn(s)?Ge:+s}function Sn(s){if(typeof s=="string")return s;if(nt(s))return Ft(s,Sn)+"";if(Tn(s))return df?df.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function oi(s,l,p){var C=-1,w=ia,S=s.length,F=!0,Y=[],q=Y;if(p)F=!1,w=uc;else if(S>=i){var de=l?null:u0(s);if(de)return sa(de);F=!1,w=qo,q=new Oi}else q=l?[]:Y;e:for(;++C<S;){var _e=s[C],ge=l?l(_e):_e;if(_e=p||_e!==0?_e:0,F&&ge===ge){for(var Ae=q.length;Ae--;)if(q[Ae]===ge)continue e;l&&q.push(ge),Y.push(_e)}else w(q,ge,p)||(q!==Y&&q.push(ge),Y.push(_e))}return Y}function Uc(s,l){return l=si(l,s),s=ag(s,l),s==null||delete s[Ar(qn(l))]}function kf(s,l,p,C){return ss(s,l,p(xi(s,l)),C)}function Aa(s,l,p,C){for(var w=s.length,S=C?w:-1;(C?S--:++S<w)&&l(s[S],S,s););return p?Xn(s,C?0:S,C?S+1:w):Xn(s,C?S+1:0,C?w:S)}function Mf(s,l){var p=s;return p instanceof gt&&(p=p.value()),dc(l,function(C,w){return w.func.apply(w.thisArg,ti([C],w.args))},p)}function Gc(s,l,p){var C=s.length;if(C<2)return C?oi(s[0]):[];for(var w=-1,S=ie(C);++w<C;)for(var F=s[w],Y=-1;++Y<C;)Y!=w&&(S[w]=rs(S[w]||F,s[Y],l,p));return oi(rn(S,1),l,p)}function Uf(s,l,p){for(var C=-1,w=s.length,S=l.length,F={};++C<w;){var Y=C<S?l[C]:n;p(F,s[C],Y)}return F}function Fc(s){return Kt(s)?s:[]}function $c(s){return typeof s=="function"?s:An}function si(s,l){return nt(s)?s:Vc(s,l)?[s]:dg(It(s))}var e0=ct;function ai(s,l,p){var C=s.length;return p=p===n?C:p,!l&&p>=C?s:Xn(s,l,p)}var Gf=z1||function(s){return nn.clearTimeout(s)};function Ff(s,l){if(l)return s.slice();var p=s.length,C=of?of(p):new s.constructor(p);return s.copy(C),C}function Pc(s){var l=new s.constructor(s.byteLength);return new _a(l).set(new _a(s)),l}function t0(s,l){var p=l?Pc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.byteLength)}function n0(s){var l=new s.constructor(s.source,C_.exec(s));return l.lastIndex=s.lastIndex,l}function r0(s){return ts?Nt(ts.call(s)):{}}function $f(s,l){var p=l?Pc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.length)}function Pf(s,l){if(s!==l){var p=s!==n,C=s===null,w=s===s,S=Tn(s),F=l!==n,Y=l===null,q=l===l,de=Tn(l);if(!Y&&!de&&!S&&s>l||S&&F&&q&&!Y&&!de||C&&F&&q||!p&&q||!w)return 1;if(!C&&!S&&!de&&s<l||de&&p&&w&&!C&&!S||Y&&p&&w||!F&&w||!q)return-1}return 0}function i0(s,l,p){for(var C=-1,w=s.criteria,S=l.criteria,F=w.length,Y=p.length;++C<F;){var q=Pf(w[C],S[C]);if(q){if(C>=Y)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return s.index-l.index}function zf(s,l,p,C){for(var w=-1,S=s.length,F=p.length,Y=-1,q=l.length,de=Zt(S-F,0),_e=ie(q+de),ge=!C;++Y<q;)_e[Y]=l[Y];for(;++w<F;)(ge||w<S)&&(_e[p[w]]=s[w]);for(;de--;)_e[Y++]=s[w++];return _e}function Hf(s,l,p,C){for(var w=-1,S=s.length,F=-1,Y=p.length,q=-1,de=l.length,_e=Zt(S-Y,0),ge=ie(_e+de),Ae=!C;++w<_e;)ge[w]=s[w];for(var Pe=w;++q<de;)ge[Pe+q]=l[q];for(;++F<Y;)(Ae||w<S)&&(ge[Pe+p[F]]=s[w++]);return ge}function wn(s,l){var p=-1,C=s.length;for(l||(l=ie(C));++p<C;)l[p]=s[p];return l}function Or(s,l,p,C){var w=!p;p||(p={});for(var S=-1,F=l.length;++S<F;){var Y=l[S],q=C?C(p[Y],s[Y],Y,p,s):n;q===n&&(q=s[Y]),w?Mr(p,Y,q):ns(p,Y,q)}return p}function o0(s,l){return Or(s,Kc(s),l)}function s0(s,l){return Or(s,tg(s),l)}function xa(s,l){return function(p,C){var w=nt(p)?d1:LE,S=l?l():{};return w(p,s,Ye(C,2),S)}}function ro(s){return ct(function(l,p){var C=-1,w=p.length,S=w>1?p[w-1]:n,F=w>2?p[2]:n;for(S=s.length>3&&typeof S=="function"?(w--,S):n,F&&hn(p[0],p[1],F)&&(S=w<3?n:S,w=1),l=Nt(l);++C<w;){var Y=p[C];Y&&s(l,Y,C,S)}return l})}function Wf(s,l){return function(p,C){if(p==null)return p;if(!yn(p))return s(p,C);for(var w=p.length,S=l?w:-1,F=Nt(p);(l?S--:++S<w)&&C(F[S],S,F)!==!1;);return p}}function Bf(s){return function(l,p,C){for(var w=-1,S=Nt(l),F=C(l),Y=F.length;Y--;){var q=F[s?Y:++w];if(p(S[q],q,S)===!1)break}return l}}function a0(s,l,p){var C=l&b,w=as(s);function S(){var F=this&&this!==nn&&this instanceof S?w:s;return F.apply(C?p:this,arguments)}return S}function Yf(s){return function(l){l=It(l);var p=qi(l)?fr(l):n,C=p?p[0]:l.charAt(0),w=p?ai(p,1).join(""):l.slice(1);return C[s]()+w}}function io(s){return function(l){return dc(Wg(Hg(l).replace(Zm,"")),s,"")}}function as(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var p=no(s.prototype),C=s.apply(p,l);return $t(C)?C:p}}function l0(s,l,p){var C=as(s);function w(){for(var S=arguments.length,F=ie(S),Y=S,q=oo(w);Y--;)F[Y]=arguments[Y];var de=S<3&&F[0]!==q&&F[S-1]!==q?[]:ni(F,q);if(S-=de.length,S<p)return qf(s,l,La,w.placeholder,n,F,de,n,n,p-S);var _e=this&&this!==nn&&this instanceof w?C:s;return Rn(_e,this,F)}return w}function jf(s){return function(l,p,C){var w=Nt(l);if(!yn(l)){var S=Ye(p,3);l=en(l),p=function(Y){return S(w[Y],Y,w)}}var F=s(l,p,C);return F>-1?w[S?l[F]:F]:n}}function Kf(s){return Gr(function(l){var p=l.length,C=p,w=Kn.prototype.thru;for(s&&l.reverse();C--;){var S=l[C];if(typeof S!="function")throw new jn(a);if(w&&!F&&Sa(S)=="wrapper")var F=new Kn([],!0)}for(C=F?C:p;++C<p;){S=l[C];var Y=Sa(S),q=Y=="wrapper"?Yc(S):n;q&&Xc(q[0])&&q[1]==(k|T|z|B)&&!q[4].length&&q[9]==1?F=F[Sa(q[0])].apply(F,q[3]):F=S.length==1&&Xc(S)?F[Y]():F.thru(S)}return function(){var de=arguments,_e=de[0];if(F&&de.length==1&&nt(_e))return F.plant(_e).value();for(var ge=0,Ae=p?l[ge].apply(this,de):_e;++ge<p;)Ae=l[ge].call(this,Ae);return Ae}})}function La(s,l,p,C,w,S,F,Y,q,de){var _e=l&k,ge=l&b,Ae=l&y,Pe=l&(T|M),je=l&re,at=Ae?n:as(s);function Ke(){for(var ft=arguments.length,ht=ie(ft),kn=ft;kn--;)ht[kn]=arguments[kn];if(Pe)var vn=oo(Ke),Mn=C1(ht,vn);if(C&&(ht=zf(ht,C,w,Pe)),S&&(ht=Hf(ht,S,F,Pe)),ft-=Mn,Pe&&ft<de){var Vt=ni(ht,vn);return qf(s,l,La,Ke.placeholder,p,ht,Vt,Y,q,de-ft)}var vr=ge?p:this,zr=Ae?vr[s]:s;return ft=ht.length,Y?ht=L0(ht,Y):je&&ft>1&&ht.reverse(),_e&&q<ft&&(ht.length=q),this&&this!==nn&&this instanceof Ke&&(zr=at||as(zr)),zr.apply(vr,ht)}return Ke}function Vf(s,l){return function(p,C){return UE(p,s,l(C),{})}}function Na(s,l){return function(p,C){var w;if(p===n&&C===n)return l;if(p!==n&&(w=p),C!==n){if(w===n)return C;typeof p=="string"||typeof C=="string"?(p=Sn(p),C=Sn(C)):(p=Tf(p),C=Tf(C)),w=s(p,C)}return w}}function zc(s){return Gr(function(l){return l=Ft(l,Dn(Ye())),ct(function(p){var C=this;return s(l,function(w){return Rn(w,C,p)})})})}function Ra(s,l){l=l===n?" ":Sn(l);var p=l.length;if(p<2)return p?kc(l,s):l;var C=kc(l,va(s/Zi(l)));return qi(l)?ai(fr(C),0,s).join(""):C.slice(0,s)}function c0(s,l,p,C){var w=l&b,S=as(s);function F(){for(var Y=-1,q=arguments.length,de=-1,_e=C.length,ge=ie(_e+q),Ae=this&&this!==nn&&this instanceof F?S:s;++de<_e;)ge[de]=C[de];for(;q--;)ge[de++]=arguments[++Y];return Rn(Ae,w?p:this,ge)}return F}function Xf(s){return function(l,p,C){return C&&typeof C!="number"&&hn(l,p,C)&&(p=C=n),l=Pr(l),p===n?(p=l,l=0):p=Pr(p),C=C===n?l<p?1:-1:Pr(C),VE(l,p,C,s)}}function Da(s){return function(l,p){return typeof l=="string"&&typeof p=="string"||(l=Zn(l),p=Zn(p)),s(l,p)}}function qf(s,l,p,C,w,S,F,Y,q,de){var _e=l&T,ge=_e?F:n,Ae=_e?n:F,Pe=_e?S:n,je=_e?n:S;l|=_e?z:H,l&=~(_e?H:z),l&x||(l&=-4);var at=[s,l,w,Pe,ge,je,Ae,Y,q,de],Ke=p.apply(n,at);return Xc(s)&&lg(Ke,at),Ke.placeholder=C,cg(Ke,s,l)}function Hc(s){var l=qt[s];return function(p,C){if(p=Zn(p),C=C==null?0:dn(it(C),292),C&&cf(p)){var w=(It(p)+"e").split("e"),S=l(w[0]+"e"+(+w[1]+C));return w=(It(S)+"e").split("e"),+(w[0]+"e"+(+w[1]-C))}return l(p)}}var u0=eo&&1/sa(new eo([,-0]))[1]==ye?function(s){return new eo(s)}:uu;function Zf(s){return function(l){var p=_n(l);return p==Oe?mc(l):p==bn?x1(l):E1(l,s(l))}}function Ur(s,l,p,C,w,S,F,Y){var q=l&y;if(!q&&typeof s!="function")throw new jn(a);var de=C?C.length:0;if(de||(l&=-97,C=w=n),F=F===n?F:Zt(it(F),0),Y=Y===n?Y:it(Y),de-=w?w.length:0,l&H){var _e=C,ge=w;C=w=n}var Ae=q?n:Yc(s),Pe=[s,l,p,C,w,_e,ge,S,F,Y];if(Ae&&O0(Pe,Ae),s=Pe[0],l=Pe[1],p=Pe[2],C=Pe[3],w=Pe[4],Y=Pe[9]=Pe[9]===n?q?0:s.length:Zt(Pe[9]-de,0),!Y&&l&(T|M)&&(l&=-25),!l||l==b)var je=a0(s,l,p);else l==T||l==M?je=l0(s,l,Y):(l==z||l==(b|z))&&!w.length?je=c0(s,l,p,C):je=La.apply(n,Pe);var at=Ae?Df:lg;return cg(at(je,Pe),s,l)}function Qf(s,l,p,C){return s===n||hr(s,Ji[p])&&!yt.call(C,p)?l:s}function Jf(s,l,p,C,w,S){return $t(s)&&$t(l)&&(S.set(l,s),ya(s,l,n,Jf,S),S.delete(l)),s}function d0(s){return us(s)?n:s}function eg(s,l,p,C,w,S){var F=p&E,Y=s.length,q=l.length;if(Y!=q&&!(F&&q>Y))return!1;var de=S.get(s),_e=S.get(l);if(de&&_e)return de==l&&_e==s;var ge=-1,Ae=!0,Pe=p&I?new Oi:n;for(S.set(s,l),S.set(l,s);++ge<Y;){var je=s[ge],at=l[ge];if(C)var Ke=F?C(at,je,ge,l,s,S):C(je,at,ge,s,l,S);if(Ke!==n){if(Ke)continue;Ae=!1;break}if(Pe){if(!_c(l,function(ft,ht){if(!qo(Pe,ht)&&(je===ft||w(je,ft,p,C,S)))return Pe.push(ht)})){Ae=!1;break}}else if(!(je===at||w(je,at,p,C,S))){Ae=!1;break}}return S.delete(s),S.delete(l),Ae}function _0(s,l,p,C,w,S,F){switch(p){case In:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Ve:return!(s.byteLength!=l.byteLength||!S(new _a(s),new _a(l)));case _r:case Wn:case $e:return hr(+s,+l);case Ir:return s.name==l.name&&s.message==l.message;case mi:case Ei:return s==l+"";case Oe:var Y=mc;case bn:var q=C&E;if(Y||(Y=sa),s.size!=l.size&&!q)return!1;var de=F.get(s);if(de)return de==l;C|=I,F.set(s,l);var _e=eg(Y(s),Y(l),C,w,S,F);return F.delete(s),_e;case Ci:if(ts)return ts.call(s)==ts.call(l)}return!1}function f0(s,l,p,C,w,S){var F=p&E,Y=Wc(s),q=Y.length,de=Wc(l),_e=de.length;if(q!=_e&&!F)return!1;for(var ge=q;ge--;){var Ae=Y[ge];if(!(F?Ae in l:yt.call(l,Ae)))return!1}var Pe=S.get(s),je=S.get(l);if(Pe&&je)return Pe==l&&je==s;var at=!0;S.set(s,l),S.set(l,s);for(var Ke=F;++ge<q;){Ae=Y[ge];var ft=s[Ae],ht=l[Ae];if(C)var kn=F?C(ht,ft,Ae,l,s,S):C(ft,ht,Ae,s,l,S);if(!(kn===n?ft===ht||w(ft,ht,p,C,S):kn)){at=!1;break}Ke||(Ke=Ae=="constructor")}if(at&&!Ke){var vn=s.constructor,Mn=l.constructor;vn!=Mn&&"constructor"in s&&"constructor"in l&&!(typeof vn=="function"&&vn instanceof vn&&typeof Mn=="function"&&Mn instanceof Mn)&&(at=!1)}return S.delete(s),S.delete(l),at}function Gr(s){return Zc(sg(s,n,hg),s+"")}function Wc(s){return Cf(s,en,Kc)}function Bc(s){return Cf(s,On,tg)}var Yc=ma?function(s){return ma.get(s)}:uu;function Sa(s){for(var l=s.name+"",p=to[l],C=yt.call(to,l)?p.length:0;C--;){var w=p[C],S=w.func;if(S==null||S==s)return w.name}return l}function oo(s){var l=yt.call(R,"placeholder")?R:s;return l.placeholder}function Ye(){var s=R.iteratee||lu;return s=s===lu?wf:s,arguments.length?s(arguments[0],arguments[1]):s}function Ta(s,l){var p=s.__data__;return b0(l)?p[typeof l=="string"?"string":"hash"]:p.map}function jc(s){for(var l=en(s),p=l.length;p--;){var C=l[p],w=s[C];l[p]=[C,w,ig(w)]}return l}function Li(s,l){var p=y1(s,l);return If(p)?p:n}function g0(s){var l=yt.call(s,wi),p=s[wi];try{s[wi]=n;var C=!0}catch{}var w=ua.call(s);return C&&(l?s[wi]=p:delete s[wi]),w}var Kc=Cc?function(s){return s==null?[]:(s=Nt(s),ei(Cc(s),function(l){return af.call(s,l)}))}:du,tg=Cc?function(s){for(var l=[];s;)ti(l,Kc(s)),s=fa(s);return l}:du,_n=gn;(bc&&_n(new bc(new ArrayBuffer(1)))!=In||Qo&&_n(new Qo)!=Oe||Ic&&_n(Ic.resolve())!=Js||eo&&_n(new eo)!=bn||Jo&&_n(new Jo)!=bi)&&(_n=function(s){var l=gn(s),p=l==St?s.constructor:n,C=p?Ni(p):"";if(C)switch(C){case q1:return In;case Z1:return Oe;case Q1:return Js;case J1:return bn;case eE:return bi}return l});function h0(s,l,p){for(var C=-1,w=p.length;++C<w;){var S=p[C],F=S.size;switch(S.type){case"drop":s+=F;break;case"dropRight":l-=F;break;case"take":l=dn(l,s+F);break;case"takeRight":s=Zt(s,l-F);break}}return{start:s,end:l}}function v0(s){var l=s.match(Im);return l?l[1].split(wm):[]}function ng(s,l,p){l=si(l,s);for(var C=-1,w=l.length,S=!1;++C<w;){var F=Ar(l[C]);if(!(S=s!=null&&p(s,F)))break;s=s[F]}return S||++C!=w?S:(w=s==null?0:s.length,!!w&&Pa(w)&&Fr(F,w)&&(nt(s)||Ri(s)))}function p0(s){var l=s.length,p=new s.constructor(l);return l&&typeof s[0]=="string"&&yt.call(s,"index")&&(p.index=s.index,p.input=s.input),p}function rg(s){return typeof s.constructor=="function"&&!ls(s)?no(fa(s)):{}}function m0(s,l,p){var C=s.constructor;switch(l){case Ve:return Pc(s);case _r:case Wn:return new C(+s);case In:return t0(s,p);case ji:case Ki:case wr:case jo:case Ko:case Vo:case Xo:case Jl:case ec:return $f(s,p);case Oe:return new C;case $e:case Ei:return new C(s);case mi:return n0(s);case bn:return new C;case Ci:return r0(s)}}function E0(s,l){var p=l.length;if(!p)return s;var C=p-1;return l[C]=(p>1?"& ":"")+l[C],l=l.join(p>2?", ":" "),s.replace(bm,`{
/* [wrapped with `+l+`] */
`)}function C0(s){return nt(s)||Ri(s)||!!(lf&&s&&s[lf])}function Fr(s,l){var p=typeof s;return l=l??Se,!!l&&(p=="number"||p!="symbol"&&Sm.test(s))&&s>-1&&s%1==0&&s<l}function hn(s,l,p){if(!$t(p))return!1;var C=typeof l;return(C=="number"?yn(p)&&Fr(l,p.length):C=="string"&&l in p)?hr(p[l],s):!1}function Vc(s,l){if(nt(s))return!1;var p=typeof s;return p=="number"||p=="symbol"||p=="boolean"||s==null||Tn(s)?!0:pm.test(s)||!vm.test(s)||l!=null&&s in Nt(l)}function b0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Xc(s){var l=Sa(s),p=R[l];if(typeof p!="function"||!(l in gt.prototype))return!1;if(s===p)return!0;var C=Yc(p);return!!C&&s===C[0]}function I0(s){return!!rf&&rf in s}var w0=la?$r:_u;function ls(s){var l=s&&s.constructor,p=typeof l=="function"&&l.prototype||Ji;return s===p}function ig(s){return s===s&&!$t(s)}function og(s,l){return function(p){return p==null?!1:p[s]===l&&(l!==n||s in Nt(p))}}function y0(s){var l=Fa(s,function(C){return p.size===_&&p.clear(),C}),p=l.cache;return l}function O0(s,l){var p=s[1],C=l[1],w=p|C,S=w<(b|y|k),F=C==k&&p==T||C==k&&p==B&&s[7].length<=l[8]||C==(k|B)&&l[7].length<=l[8]&&p==T;if(!(S||F))return s;C&b&&(s[2]=l[2],w|=p&b?0:x);var Y=l[3];if(Y){var q=s[3];s[3]=q?zf(q,Y,l[4]):Y,s[4]=q?ni(s[3],g):l[4]}return Y=l[5],Y&&(q=s[5],s[5]=q?Hf(q,Y,l[6]):Y,s[6]=q?ni(s[5],g):l[6]),Y=l[7],Y&&(s[7]=Y),C&k&&(s[8]=s[8]==null?l[8]:dn(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=w,s}function A0(s){var l=[];if(s!=null)for(var p in Nt(s))l.push(p);return l}function x0(s){return ua.call(s)}function sg(s,l,p){return l=Zt(l===n?s.length-1:l,0),function(){for(var C=arguments,w=-1,S=Zt(C.length-l,0),F=ie(S);++w<S;)F[w]=C[l+w];w=-1;for(var Y=ie(l+1);++w<l;)Y[w]=C[w];return Y[l]=p(F),Rn(s,this,Y)}}function ag(s,l){return l.length<2?s:xi(s,Xn(l,0,-1))}function L0(s,l){for(var p=s.length,C=dn(l.length,p),w=wn(s);C--;){var S=l[C];s[C]=Fr(S,p)?w[S]:n}return s}function qc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var lg=ug(Df),cs=W1||function(s,l){return nn.setTimeout(s,l)},Zc=ug(ZE);function cg(s,l,p){var C=l+"";return Zc(s,E0(C,N0(v0(C),p)))}function ug(s){var l=0,p=0;return function(){var C=K1(),w=we-(C-p);if(p=C,w>0){if(++l>=oe)return arguments[0]}else l=0;return s.apply(n,arguments)}}function ka(s,l){var p=-1,C=s.length,w=C-1;for(l=l===n?C:l;++p<l;){var S=Tc(p,w),F=s[S];s[S]=s[p],s[p]=F}return s.length=l,s}var dg=y0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(mm,function(p,C,w,S){l.push(w?S.replace(Am,"$1"):C||p)}),l});function Ar(s){if(typeof s=="string"||Tn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Ni(s){if(s!=null){try{return ca.call(s)}catch{}try{return s+""}catch{}}return""}function N0(s,l){return Yn(zt,function(p){var C="_."+p[0];l&p[1]&&!ia(s,C)&&s.push(C)}),s.sort()}function _g(s){if(s instanceof gt)return s.clone();var l=new Kn(s.__wrapped__,s.__chain__);return l.__actions__=wn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function R0(s,l,p){(p?hn(s,l,p):l===n)?l=1:l=Zt(it(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var w=0,S=0,F=ie(va(C/l));w<C;)F[S++]=Xn(s,w,w+=l);return F}function D0(s){for(var l=-1,p=s==null?0:s.length,C=0,w=[];++l<p;){var S=s[l];S&&(w[C++]=S)}return w}function S0(){var s=arguments.length;if(!s)return[];for(var l=ie(s-1),p=arguments[0],C=s;C--;)l[C-1]=arguments[C];return ti(nt(p)?wn(p):[p],rn(l,1))}var T0=ct(function(s,l){return Kt(s)?rs(s,rn(l,1,Kt,!0)):[]}),k0=ct(function(s,l){var p=qn(l);return Kt(p)&&(p=n),Kt(s)?rs(s,rn(l,1,Kt,!0),Ye(p,2)):[]}),M0=ct(function(s,l){var p=qn(l);return Kt(p)&&(p=n),Kt(s)?rs(s,rn(l,1,Kt,!0),n,p):[]});function U0(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:it(l),Xn(s,l<0?0:l,C)):[]}function G0(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:it(l),l=C-l,Xn(s,0,l<0?0:l)):[]}function F0(s,l){return s&&s.length?Aa(s,Ye(l,3),!0,!0):[]}function $0(s,l){return s&&s.length?Aa(s,Ye(l,3),!0):[]}function P0(s,l,p,C){var w=s==null?0:s.length;return w?(p&&typeof p!="number"&&hn(s,l,p)&&(p=0,C=w),SE(s,l,p,C)):[]}function fg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=p==null?0:it(p);return w<0&&(w=Zt(C+w,0)),oa(s,Ye(l,3),w)}function gg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=C-1;return p!==n&&(w=it(p),w=p<0?Zt(C+w,0):dn(w,C-1)),oa(s,Ye(l,3),w,!0)}function hg(s){var l=s==null?0:s.length;return l?rn(s,1):[]}function z0(s){var l=s==null?0:s.length;return l?rn(s,ye):[]}function H0(s,l){var p=s==null?0:s.length;return p?(l=l===n?1:it(l),rn(s,l)):[]}function W0(s){for(var l=-1,p=s==null?0:s.length,C={};++l<p;){var w=s[l];C[w[0]]=w[1]}return C}function vg(s){return s&&s.length?s[0]:n}function B0(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=p==null?0:it(p);return w<0&&(w=Zt(C+w,0)),Xi(s,l,w)}function Y0(s){var l=s==null?0:s.length;return l?Xn(s,0,-1):[]}var j0=ct(function(s){var l=Ft(s,Fc);return l.length&&l[0]===s[0]?Lc(l):[]}),K0=ct(function(s){var l=qn(s),p=Ft(s,Fc);return l===qn(p)?l=n:p.pop(),p.length&&p[0]===s[0]?Lc(p,Ye(l,2)):[]}),V0=ct(function(s){var l=qn(s),p=Ft(s,Fc);return l=typeof l=="function"?l:n,l&&p.pop(),p.length&&p[0]===s[0]?Lc(p,n,l):[]});function X0(s,l){return s==null?"":Y1.call(s,l)}function qn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function q0(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=C;return p!==n&&(w=it(p),w=w<0?Zt(C+w,0):dn(w,C-1)),l===l?N1(s,l,w):oa(s,X_,w,!0)}function Z0(s,l){return s&&s.length?xf(s,it(l)):n}var Q0=ct(pg);function pg(s,l){return s&&s.length&&l&&l.length?Sc(s,l):s}function J0(s,l,p){return s&&s.length&&l&&l.length?Sc(s,l,Ye(p,2)):s}function eC(s,l,p){return s&&s.length&&l&&l.length?Sc(s,l,n,p):s}var tC=Gr(function(s,l){var p=s==null?0:s.length,C=yc(s,l);return Rf(s,Ft(l,function(w){return Fr(w,p)?+w:w}).sort(Pf)),C});function nC(s,l){var p=[];if(!(s&&s.length))return p;var C=-1,w=[],S=s.length;for(l=Ye(l,3);++C<S;){var F=s[C];l(F,C,s)&&(p.push(F),w.push(C))}return Rf(s,w),p}function Qc(s){return s==null?s:X1.call(s)}function rC(s,l,p){var C=s==null?0:s.length;return C?(p&&typeof p!="number"&&hn(s,l,p)?(l=0,p=C):(l=l==null?0:it(l),p=p===n?C:it(p)),Xn(s,l,p)):[]}function iC(s,l){return Oa(s,l)}function oC(s,l,p){return Mc(s,l,Ye(p,2))}function sC(s,l){var p=s==null?0:s.length;if(p){var C=Oa(s,l);if(C<p&&hr(s[C],l))return C}return-1}function aC(s,l){return Oa(s,l,!0)}function lC(s,l,p){return Mc(s,l,Ye(p,2),!0)}function cC(s,l){var p=s==null?0:s.length;if(p){var C=Oa(s,l,!0)-1;if(hr(s[C],l))return C}return-1}function uC(s){return s&&s.length?Sf(s):[]}function dC(s,l){return s&&s.length?Sf(s,Ye(l,2)):[]}function _C(s){var l=s==null?0:s.length;return l?Xn(s,1,l):[]}function fC(s,l,p){return s&&s.length?(l=p||l===n?1:it(l),Xn(s,0,l<0?0:l)):[]}function gC(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:it(l),l=C-l,Xn(s,l<0?0:l,C)):[]}function hC(s,l){return s&&s.length?Aa(s,Ye(l,3),!1,!0):[]}function vC(s,l){return s&&s.length?Aa(s,Ye(l,3)):[]}var pC=ct(function(s){return oi(rn(s,1,Kt,!0))}),mC=ct(function(s){var l=qn(s);return Kt(l)&&(l=n),oi(rn(s,1,Kt,!0),Ye(l,2))}),EC=ct(function(s){var l=qn(s);return l=typeof l=="function"?l:n,oi(rn(s,1,Kt,!0),n,l)});function CC(s){return s&&s.length?oi(s):[]}function bC(s,l){return s&&s.length?oi(s,Ye(l,2)):[]}function IC(s,l){return l=typeof l=="function"?l:n,s&&s.length?oi(s,n,l):[]}function Jc(s){if(!(s&&s.length))return[];var l=0;return s=ei(s,function(p){if(Kt(p))return l=Zt(p.length,l),!0}),vc(l,function(p){return Ft(s,fc(p))})}function mg(s,l){if(!(s&&s.length))return[];var p=Jc(s);return l==null?p:Ft(p,function(C){return Rn(l,n,C)})}var wC=ct(function(s,l){return Kt(s)?rs(s,l):[]}),yC=ct(function(s){return Gc(ei(s,Kt))}),OC=ct(function(s){var l=qn(s);return Kt(l)&&(l=n),Gc(ei(s,Kt),Ye(l,2))}),AC=ct(function(s){var l=qn(s);return l=typeof l=="function"?l:n,Gc(ei(s,Kt),n,l)}),xC=ct(Jc);function LC(s,l){return Uf(s||[],l||[],ns)}function NC(s,l){return Uf(s||[],l||[],ss)}var RC=ct(function(s){var l=s.length,p=l>1?s[l-1]:n;return p=typeof p=="function"?(s.pop(),p):n,mg(s,p)});function Eg(s){var l=R(s);return l.__chain__=!0,l}function DC(s,l){return l(s),s}function Ma(s,l){return l(s)}var SC=Gr(function(s){var l=s.length,p=l?s[0]:0,C=this.__wrapped__,w=function(S){return yc(S,s)};return l>1||this.__actions__.length||!(C instanceof gt)||!Fr(p)?this.thru(w):(C=C.slice(p,+p+(l?1:0)),C.__actions__.push({func:Ma,args:[w],thisArg:n}),new Kn(C,this.__chain__).thru(function(S){return l&&!S.length&&S.push(n),S}))});function TC(){return Eg(this)}function kC(){return new Kn(this.value(),this.__chain__)}function MC(){this.__values__===n&&(this.__values__=Tg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function UC(){return this}function GC(s){for(var l,p=this;p instanceof Ca;){var C=_g(p);C.__index__=0,C.__values__=n,l?w.__wrapped__=C:l=C;var w=C;p=p.__wrapped__}return w.__wrapped__=s,l}function FC(){var s=this.__wrapped__;if(s instanceof gt){var l=s;return this.__actions__.length&&(l=new gt(this)),l=l.reverse(),l.__actions__.push({func:Ma,args:[Qc],thisArg:n}),new Kn(l,this.__chain__)}return this.thru(Qc)}function $C(){return Mf(this.__wrapped__,this.__actions__)}var PC=xa(function(s,l,p){yt.call(s,p)?++s[p]:Mr(s,p,1)});function zC(s,l,p){var C=nt(s)?K_:DE;return p&&hn(s,l,p)&&(l=n),C(s,Ye(l,3))}function HC(s,l){var p=nt(s)?ei:mf;return p(s,Ye(l,3))}var WC=jf(fg),BC=jf(gg);function YC(s,l){return rn(Ua(s,l),1)}function jC(s,l){return rn(Ua(s,l),ye)}function KC(s,l,p){return p=p===n?1:it(p),rn(Ua(s,l),p)}function Cg(s,l){var p=nt(s)?Yn:ii;return p(s,Ye(l,3))}function bg(s,l){var p=nt(s)?_1:pf;return p(s,Ye(l,3))}var VC=xa(function(s,l,p){yt.call(s,p)?s[p].push(l):Mr(s,p,[l])});function XC(s,l,p,C){s=yn(s)?s:ao(s),p=p&&!C?it(p):0;var w=s.length;return p<0&&(p=Zt(w+p,0)),za(s)?p<=w&&s.indexOf(l,p)>-1:!!w&&Xi(s,l,p)>-1}var qC=ct(function(s,l,p){var C=-1,w=typeof l=="function",S=yn(s)?ie(s.length):[];return ii(s,function(F){S[++C]=w?Rn(l,F,p):is(F,l,p)}),S}),ZC=xa(function(s,l,p){Mr(s,p,l)});function Ua(s,l){var p=nt(s)?Ft:yf;return p(s,Ye(l,3))}function QC(s,l,p,C){return s==null?[]:(nt(l)||(l=l==null?[]:[l]),p=C?n:p,nt(p)||(p=p==null?[]:[p]),Lf(s,l,p))}var JC=xa(function(s,l,p){s[p?0:1].push(l)},function(){return[[],[]]});function eb(s,l,p){var C=nt(s)?dc:Z_,w=arguments.length<3;return C(s,Ye(l,4),p,w,ii)}function tb(s,l,p){var C=nt(s)?f1:Z_,w=arguments.length<3;return C(s,Ye(l,4),p,w,pf)}function nb(s,l){var p=nt(s)?ei:mf;return p(s,$a(Ye(l,3)))}function rb(s){var l=nt(s)?ff:XE;return l(s)}function ib(s,l,p){(p?hn(s,l,p):l===n)?l=1:l=it(l);var C=nt(s)?AE:qE;return C(s,l)}function ob(s){var l=nt(s)?xE:QE;return l(s)}function sb(s){if(s==null)return 0;if(yn(s))return za(s)?Zi(s):s.length;var l=_n(s);return l==Oe||l==bn?s.size:Rc(s).length}function ab(s,l,p){var C=nt(s)?_c:JE;return p&&hn(s,l,p)&&(l=n),C(s,Ye(l,3))}var lb=ct(function(s,l){if(s==null)return[];var p=l.length;return p>1&&hn(s,l[0],l[1])?l=[]:p>2&&hn(l[0],l[1],l[2])&&(l=[l[0]]),Lf(s,rn(l,1),[])}),Ga=H1||function(){return nn.Date.now()};function cb(s,l){if(typeof l!="function")throw new jn(a);return s=it(s),function(){if(--s<1)return l.apply(this,arguments)}}function Ig(s,l,p){return l=p?n:l,l=s&&l==null?s.length:l,Ur(s,k,n,n,n,n,l)}function wg(s,l){var p;if(typeof l!="function")throw new jn(a);return s=it(s),function(){return--s>0&&(p=l.apply(this,arguments)),s<=1&&(l=n),p}}var eu=ct(function(s,l,p){var C=b;if(p.length){var w=ni(p,oo(eu));C|=z}return Ur(s,C,l,p,w)}),yg=ct(function(s,l,p){var C=b|y;if(p.length){var w=ni(p,oo(yg));C|=z}return Ur(l,C,s,p,w)});function Og(s,l,p){l=p?n:l;var C=Ur(s,T,n,n,n,n,n,l);return C.placeholder=Og.placeholder,C}function Ag(s,l,p){l=p?n:l;var C=Ur(s,M,n,n,n,n,n,l);return C.placeholder=Ag.placeholder,C}function xg(s,l,p){var C,w,S,F,Y,q,de=0,_e=!1,ge=!1,Ae=!0;if(typeof s!="function")throw new jn(a);l=Zn(l)||0,$t(p)&&(_e=!!p.leading,ge="maxWait"in p,S=ge?Zt(Zn(p.maxWait)||0,l):S,Ae="trailing"in p?!!p.trailing:Ae);function Pe(Vt){var vr=C,zr=w;return C=w=n,de=Vt,F=s.apply(zr,vr),F}function je(Vt){return de=Vt,Y=cs(ft,l),_e?Pe(Vt):F}function at(Vt){var vr=Vt-q,zr=Vt-de,jg=l-vr;return ge?dn(jg,S-zr):jg}function Ke(Vt){var vr=Vt-q,zr=Vt-de;return q===n||vr>=l||vr<0||ge&&zr>=S}function ft(){var Vt=Ga();if(Ke(Vt))return ht(Vt);Y=cs(ft,at(Vt))}function ht(Vt){return Y=n,Ae&&C?Pe(Vt):(C=w=n,F)}function kn(){Y!==n&&Gf(Y),de=0,C=q=w=Y=n}function vn(){return Y===n?F:ht(Ga())}function Mn(){var Vt=Ga(),vr=Ke(Vt);if(C=arguments,w=this,q=Vt,vr){if(Y===n)return je(q);if(ge)return Gf(Y),Y=cs(ft,l),Pe(q)}return Y===n&&(Y=cs(ft,l)),F}return Mn.cancel=kn,Mn.flush=vn,Mn}var ub=ct(function(s,l){return vf(s,1,l)}),db=ct(function(s,l,p){return vf(s,Zn(l)||0,p)});function _b(s){return Ur(s,re)}function Fa(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new jn(a);var p=function(){var C=arguments,w=l?l.apply(this,C):C[0],S=p.cache;if(S.has(w))return S.get(w);var F=s.apply(this,C);return p.cache=S.set(w,F)||S,F};return p.cache=new(Fa.Cache||kr),p}Fa.Cache=kr;function $a(s){if(typeof s!="function")throw new jn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function fb(s){return wg(2,s)}var gb=e0(function(s,l){l=l.length==1&&nt(l[0])?Ft(l[0],Dn(Ye())):Ft(rn(l,1),Dn(Ye()));var p=l.length;return ct(function(C){for(var w=-1,S=dn(C.length,p);++w<S;)C[w]=l[w].call(this,C[w]);return Rn(s,this,C)})}),tu=ct(function(s,l){var p=ni(l,oo(tu));return Ur(s,z,n,l,p)}),Lg=ct(function(s,l){var p=ni(l,oo(Lg));return Ur(s,H,n,l,p)}),hb=Gr(function(s,l){return Ur(s,B,n,n,n,l)});function vb(s,l){if(typeof s!="function")throw new jn(a);return l=l===n?l:it(l),ct(s,l)}function pb(s,l){if(typeof s!="function")throw new jn(a);return l=l==null?0:Zt(it(l),0),ct(function(p){var C=p[l],w=ai(p,0,l);return C&&ti(w,C),Rn(s,this,w)})}function mb(s,l,p){var C=!0,w=!0;if(typeof s!="function")throw new jn(a);return $t(p)&&(C="leading"in p?!!p.leading:C,w="trailing"in p?!!p.trailing:w),xg(s,l,{leading:C,maxWait:l,trailing:w})}function Eb(s){return Ig(s,1)}function Cb(s,l){return tu($c(l),s)}function bb(){if(!arguments.length)return[];var s=arguments[0];return nt(s)?s:[s]}function Ib(s){return Vn(s,m)}function wb(s,l){return l=typeof l=="function"?l:n,Vn(s,m,l)}function yb(s){return Vn(s,v|m)}function Ob(s,l){return l=typeof l=="function"?l:n,Vn(s,v|m,l)}function Ab(s,l){return l==null||hf(s,l,en(l))}function hr(s,l){return s===l||s!==s&&l!==l}var xb=Da(xc),Lb=Da(function(s,l){return s>=l}),Ri=bf(function(){return arguments}())?bf:function(s){return Ht(s)&&yt.call(s,"callee")&&!af.call(s,"callee")},nt=ie.isArray,Nb=z_?Dn(z_):GE;function yn(s){return s!=null&&Pa(s.length)&&!$r(s)}function Kt(s){return Ht(s)&&yn(s)}function Rb(s){return s===!0||s===!1||Ht(s)&&gn(s)==_r}var li=B1||_u,Db=H_?Dn(H_):FE;function Sb(s){return Ht(s)&&s.nodeType===1&&!us(s)}function Tb(s){if(s==null)return!0;if(yn(s)&&(nt(s)||typeof s=="string"||typeof s.splice=="function"||li(s)||so(s)||Ri(s)))return!s.length;var l=_n(s);if(l==Oe||l==bn)return!s.size;if(ls(s))return!Rc(s).length;for(var p in s)if(yt.call(s,p))return!1;return!0}function kb(s,l){return os(s,l)}function Mb(s,l,p){p=typeof p=="function"?p:n;var C=p?p(s,l):n;return C===n?os(s,l,n,p):!!C}function nu(s){if(!Ht(s))return!1;var l=gn(s);return l==Ir||l==Jr||typeof s.message=="string"&&typeof s.name=="string"&&!us(s)}function Ub(s){return typeof s=="number"&&cf(s)}function $r(s){if(!$t(s))return!1;var l=gn(s);return l==jt||l==Re||l==Yt||l==ea}function Ng(s){return typeof s=="number"&&s==it(s)}function Pa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Se}function $t(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Ht(s){return s!=null&&typeof s=="object"}var Rg=W_?Dn(W_):PE;function Gb(s,l){return s===l||Nc(s,l,jc(l))}function Fb(s,l,p){return p=typeof p=="function"?p:n,Nc(s,l,jc(l),p)}function $b(s){return Dg(s)&&s!=+s}function Pb(s){if(w0(s))throw new et(o);return If(s)}function zb(s){return s===null}function Hb(s){return s==null}function Dg(s){return typeof s=="number"||Ht(s)&&gn(s)==$e}function us(s){if(!Ht(s)||gn(s)!=St)return!1;var l=fa(s);if(l===null)return!0;var p=yt.call(l,"constructor")&&l.constructor;return typeof p=="function"&&p instanceof p&&ca.call(p)==F1}var ru=B_?Dn(B_):zE;function Wb(s){return Ng(s)&&s>=-9007199254740991&&s<=Se}var Sg=Y_?Dn(Y_):HE;function za(s){return typeof s=="string"||!nt(s)&&Ht(s)&&gn(s)==Ei}function Tn(s){return typeof s=="symbol"||Ht(s)&&gn(s)==Ci}var so=j_?Dn(j_):WE;function Bb(s){return s===n}function Yb(s){return Ht(s)&&_n(s)==bi}function jb(s){return Ht(s)&&gn(s)==Ql}var Kb=Da(Dc),Vb=Da(function(s,l){return s<=l});function Tg(s){if(!s)return[];if(yn(s))return za(s)?fr(s):wn(s);if(Zo&&s[Zo])return A1(s[Zo]());var l=_n(s),p=l==Oe?mc:l==bn?sa:ao;return p(s)}function Pr(s){if(!s)return s===0?s:0;if(s=Zn(s),s===ye||s===-1/0){var l=s<0?-1:1;return l*Le}return s===s?s:0}function it(s){var l=Pr(s),p=l%1;return l===l?p?l-p:l:0}function kg(s){return s?Ai(it(s),0,Fe):0}function Zn(s){if(typeof s=="number")return s;if(Tn(s))return Ge;if($t(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=$t(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=Q_(s);var p=Nm.test(s);return p||Dm.test(s)?c1(s.slice(2),p?2:8):Lm.test(s)?Ge:+s}function Mg(s){return Or(s,On(s))}function Xb(s){return s?Ai(it(s),-9007199254740991,Se):s===0?s:0}function It(s){return s==null?"":Sn(s)}var qb=ro(function(s,l){if(ls(l)||yn(l)){Or(l,en(l),s);return}for(var p in l)yt.call(l,p)&&ns(s,p,l[p])}),Ug=ro(function(s,l){Or(l,On(l),s)}),Ha=ro(function(s,l,p,C){Or(l,On(l),s,C)}),Zb=ro(function(s,l,p,C){Or(l,en(l),s,C)}),Qb=Gr(yc);function Jb(s,l){var p=no(s);return l==null?p:gf(p,l)}var eI=ct(function(s,l){s=Nt(s);var p=-1,C=l.length,w=C>2?l[2]:n;for(w&&hn(l[0],l[1],w)&&(C=1);++p<C;)for(var S=l[p],F=On(S),Y=-1,q=F.length;++Y<q;){var de=F[Y],_e=s[de];(_e===n||hr(_e,Ji[de])&&!yt.call(s,de))&&(s[de]=S[de])}return s}),tI=ct(function(s){return s.push(n,Jf),Rn(Gg,n,s)});function nI(s,l){return V_(s,Ye(l,3),yr)}function rI(s,l){return V_(s,Ye(l,3),Ac)}function iI(s,l){return s==null?s:Oc(s,Ye(l,3),On)}function oI(s,l){return s==null?s:Ef(s,Ye(l,3),On)}function sI(s,l){return s&&yr(s,Ye(l,3))}function aI(s,l){return s&&Ac(s,Ye(l,3))}function lI(s){return s==null?[]:wa(s,en(s))}function cI(s){return s==null?[]:wa(s,On(s))}function iu(s,l,p){var C=s==null?n:xi(s,l);return C===n?p:C}function uI(s,l){return s!=null&&ng(s,l,TE)}function ou(s,l){return s!=null&&ng(s,l,kE)}var dI=Vf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=ua.call(l)),s[l]=p},au(An)),_I=Vf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=ua.call(l)),yt.call(s,l)?s[l].push(p):s[l]=[p]},Ye),fI=ct(is);function en(s){return yn(s)?_f(s):Rc(s)}function On(s){return yn(s)?_f(s,!0):BE(s)}function gI(s,l){var p={};return l=Ye(l,3),yr(s,function(C,w,S){Mr(p,l(C,w,S),C)}),p}function hI(s,l){var p={};return l=Ye(l,3),yr(s,function(C,w,S){Mr(p,w,l(C,w,S))}),p}var vI=ro(function(s,l,p){ya(s,l,p)}),Gg=ro(function(s,l,p,C){ya(s,l,p,C)}),pI=Gr(function(s,l){var p={};if(s==null)return p;var C=!1;l=Ft(l,function(S){return S=si(S,s),C||(C=S.length>1),S}),Or(s,Bc(s),p),C&&(p=Vn(p,v|h|m,d0));for(var w=l.length;w--;)Uc(p,l[w]);return p});function mI(s,l){return Fg(s,$a(Ye(l)))}var EI=Gr(function(s,l){return s==null?{}:jE(s,l)});function Fg(s,l){if(s==null)return{};var p=Ft(Bc(s),function(C){return[C]});return l=Ye(l),Nf(s,p,function(C,w){return l(C,w[0])})}function CI(s,l,p){l=si(l,s);var C=-1,w=l.length;for(w||(w=1,s=n);++C<w;){var S=s==null?n:s[Ar(l[C])];S===n&&(C=w,S=p),s=$r(S)?S.call(s):S}return s}function bI(s,l,p){return s==null?s:ss(s,l,p)}function II(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:ss(s,l,p,C)}var $g=Zf(en),Pg=Zf(On);function wI(s,l,p){var C=nt(s),w=C||li(s)||so(s);if(l=Ye(l,4),p==null){var S=s&&s.constructor;w?p=C?new S:[]:$t(s)?p=$r(S)?no(fa(s)):{}:p={}}return(w?Yn:yr)(s,function(F,Y,q){return l(p,F,Y,q)}),p}function yI(s,l){return s==null?!0:Uc(s,l)}function OI(s,l,p){return s==null?s:kf(s,l,$c(p))}function AI(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:kf(s,l,$c(p),C)}function ao(s){return s==null?[]:pc(s,en(s))}function xI(s){return s==null?[]:pc(s,On(s))}function LI(s,l,p){return p===n&&(p=l,l=n),p!==n&&(p=Zn(p),p=p===p?p:0),l!==n&&(l=Zn(l),l=l===l?l:0),Ai(Zn(s),l,p)}function NI(s,l,p){return l=Pr(l),p===n?(p=l,l=0):p=Pr(p),s=Zn(s),ME(s,l,p)}function RI(s,l,p){if(p&&typeof p!="boolean"&&hn(s,l,p)&&(l=p=n),p===n&&(typeof l=="boolean"?(p=l,l=n):typeof s=="boolean"&&(p=s,s=n)),s===n&&l===n?(s=0,l=1):(s=Pr(s),l===n?(l=s,s=0):l=Pr(l)),s>l){var C=s;s=l,l=C}if(p||s%1||l%1){var w=uf();return dn(s+w*(l-s+l1("1e-"+((w+"").length-1))),l)}return Tc(s,l)}var DI=io(function(s,l,p){return l=l.toLowerCase(),s+(p?zg(l):l)});function zg(s){return su(It(s).toLowerCase())}function Hg(s){return s=It(s),s&&s.replace(Tm,b1).replace(Qm,"")}function SI(s,l,p){s=It(s),l=Sn(l);var C=s.length;p=p===n?C:Ai(it(p),0,C);var w=p;return p-=l.length,p>=0&&s.slice(p,w)==l}function TI(s){return s=It(s),s&&fm.test(s)?s.replace(m_,I1):s}function kI(s){return s=It(s),s&&Em.test(s)?s.replace(tc,"\\$&"):s}var MI=io(function(s,l,p){return s+(p?"-":"")+l.toLowerCase()}),UI=io(function(s,l,p){return s+(p?" ":"")+l.toLowerCase()}),GI=Yf("toLowerCase");function FI(s,l,p){s=It(s),l=it(l);var C=l?Zi(s):0;if(!l||C>=l)return s;var w=(l-C)/2;return Ra(pa(w),p)+s+Ra(va(w),p)}function $I(s,l,p){s=It(s),l=it(l);var C=l?Zi(s):0;return l&&C<l?s+Ra(l-C,p):s}function PI(s,l,p){s=It(s),l=it(l);var C=l?Zi(s):0;return l&&C<l?Ra(l-C,p)+s:s}function zI(s,l,p){return p||l==null?l=0:l&&(l=+l),V1(It(s).replace(nc,""),l||0)}function HI(s,l,p){return(p?hn(s,l,p):l===n)?l=1:l=it(l),kc(It(s),l)}function WI(){var s=arguments,l=It(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var BI=io(function(s,l,p){return s+(p?"_":"")+l.toLowerCase()});function YI(s,l,p){return p&&typeof p!="number"&&hn(s,l,p)&&(l=p=n),p=p===n?Fe:p>>>0,p?(s=It(s),s&&(typeof l=="string"||l!=null&&!ru(l))&&(l=Sn(l),!l&&qi(s))?ai(fr(s),0,p):s.split(l,p)):[]}var jI=io(function(s,l,p){return s+(p?" ":"")+su(l)});function KI(s,l,p){return s=It(s),p=p==null?0:Ai(it(p),0,s.length),l=Sn(l),s.slice(p,p+l.length)==l}function VI(s,l,p){var C=R.templateSettings;p&&hn(s,l,p)&&(l=n),s=It(s),l=Ha({},l,C,Qf);var w=Ha({},l.imports,C.imports,Qf),S=en(w),F=pc(w,S),Y,q,de=0,_e=l.interpolate||ta,ge="__p += '",Ae=Ec((l.escape||ta).source+"|"+_e.source+"|"+(_e===E_?xm:ta).source+"|"+(l.evaluate||ta).source+"|$","g"),Pe="//# sourceURL="+(yt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++r1+"]")+`
`;s.replace(Ae,function(Ke,ft,ht,kn,vn,Mn){return ht||(ht=kn),ge+=s.slice(de,Mn).replace(km,w1),ft&&(Y=!0,ge+=`' +
__e(`+ft+`) +
'`),vn&&(q=!0,ge+=`';
`+vn+`;
__p += '`),ht&&(ge+=`' +
((__t = (`+ht+`)) == null ? '' : __t) +
'`),de=Mn+Ke.length,Ke}),ge+=`';
`;var je=yt.call(l,"variable")&&l.variable;if(!je)ge=`with (obj) {
`+ge+`
}
`;else if(Om.test(je))throw new et(c);ge=(q?ge.replace(cm,""):ge).replace(um,"$1").replace(dm,"$1;"),ge="function("+(je||"obj")+`) {
`+(je?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(Y?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var at=Bg(function(){return Ct(S,Pe+"return "+ge).apply(n,F)});if(at.source=ge,nu(at))throw at;return at}function XI(s){return It(s).toLowerCase()}function qI(s){return It(s).toUpperCase()}function ZI(s,l,p){if(s=It(s),s&&(p||l===n))return Q_(s);if(!s||!(l=Sn(l)))return s;var C=fr(s),w=fr(l),S=J_(C,w),F=ef(C,w)+1;return ai(C,S,F).join("")}function QI(s,l,p){if(s=It(s),s&&(p||l===n))return s.slice(0,nf(s)+1);if(!s||!(l=Sn(l)))return s;var C=fr(s),w=ef(C,fr(l))+1;return ai(C,0,w).join("")}function JI(s,l,p){if(s=It(s),s&&(p||l===n))return s.replace(nc,"");if(!s||!(l=Sn(l)))return s;var C=fr(s),w=J_(C,fr(l));return ai(C,w).join("")}function ew(s,l){var p=ce,C=J;if($t(l)){var w="separator"in l?l.separator:w;p="length"in l?it(l.length):p,C="omission"in l?Sn(l.omission):C}s=It(s);var S=s.length;if(qi(s)){var F=fr(s);S=F.length}if(p>=S)return s;var Y=p-Zi(C);if(Y<1)return C;var q=F?ai(F,0,Y).join(""):s.slice(0,Y);if(w===n)return q+C;if(F&&(Y+=q.length-Y),ru(w)){if(s.slice(Y).search(w)){var de,_e=q;for(w.global||(w=Ec(w.source,It(C_.exec(w))+"g")),w.lastIndex=0;de=w.exec(_e);)var ge=de.index;q=q.slice(0,ge===n?Y:ge)}}else if(s.indexOf(Sn(w),Y)!=Y){var Ae=q.lastIndexOf(w);Ae>-1&&(q=q.slice(0,Ae))}return q+C}function tw(s){return s=It(s),s&&_m.test(s)?s.replace(p_,R1):s}var nw=io(function(s,l,p){return s+(p?" ":"")+l.toUpperCase()}),su=Yf("toUpperCase");function Wg(s,l,p){return s=It(s),l=p?n:l,l===n?O1(s)?T1(s):v1(s):s.match(l)||[]}var Bg=ct(function(s,l){try{return Rn(s,n,l)}catch(p){return nu(p)?p:new et(p)}}),rw=Gr(function(s,l){return Yn(l,function(p){p=Ar(p),Mr(s,p,eu(s[p],s))}),s});function iw(s){var l=s==null?0:s.length,p=Ye();return s=l?Ft(s,function(C){if(typeof C[1]!="function")throw new jn(a);return[p(C[0]),C[1]]}):[],ct(function(C){for(var w=-1;++w<l;){var S=s[w];if(Rn(S[0],this,C))return Rn(S[1],this,C)}})}function ow(s){return RE(Vn(s,v))}function au(s){return function(){return s}}function sw(s,l){return s==null||s!==s?l:s}var aw=Kf(),lw=Kf(!0);function An(s){return s}function lu(s){return wf(typeof s=="function"?s:Vn(s,v))}function cw(s){return Of(Vn(s,v))}function uw(s,l){return Af(s,Vn(l,v))}var dw=ct(function(s,l){return function(p){return is(p,s,l)}}),_w=ct(function(s,l){return function(p){return is(s,p,l)}});function cu(s,l,p){var C=en(l),w=wa(l,C);p==null&&!($t(l)&&(w.length||!C.length))&&(p=l,l=s,s=this,w=wa(l,en(l)));var S=!($t(p)&&"chain"in p)||!!p.chain,F=$r(s);return Yn(w,function(Y){var q=l[Y];s[Y]=q,F&&(s.prototype[Y]=function(){var de=this.__chain__;if(S||de){var _e=s(this.__wrapped__),ge=_e.__actions__=wn(this.__actions__);return ge.push({func:q,args:arguments,thisArg:s}),_e.__chain__=de,_e}return q.apply(s,ti([this.value()],arguments))})}),s}function fw(){return nn._===this&&(nn._=$1),this}function uu(){}function gw(s){return s=it(s),ct(function(l){return xf(l,s)})}var hw=zc(Ft),vw=zc(K_),pw=zc(_c);function Yg(s){return Vc(s)?fc(Ar(s)):KE(s)}function mw(s){return function(l){return s==null?n:xi(s,l)}}var Ew=Xf(),Cw=Xf(!0);function du(){return[]}function _u(){return!1}function bw(){return{}}function Iw(){return""}function ww(){return!0}function yw(s,l){if(s=it(s),s<1||s>Se)return[];var p=Fe,C=dn(s,Fe);l=Ye(l),s-=Fe;for(var w=vc(C,l);++p<s;)l(p);return w}function Ow(s){return nt(s)?Ft(s,Ar):Tn(s)?[s]:wn(dg(It(s)))}function Aw(s){var l=++G1;return It(s)+l}var xw=Na(function(s,l){return s+l},0),Lw=Hc("ceil"),Nw=Na(function(s,l){return s/l},1),Rw=Hc("floor");function Dw(s){return s&&s.length?Ia(s,An,xc):n}function Sw(s,l){return s&&s.length?Ia(s,Ye(l,2),xc):n}function Tw(s){return q_(s,An)}function kw(s,l){return q_(s,Ye(l,2))}function Mw(s){return s&&s.length?Ia(s,An,Dc):n}function Uw(s,l){return s&&s.length?Ia(s,Ye(l,2),Dc):n}var Gw=Na(function(s,l){return s*l},1),Fw=Hc("round"),$w=Na(function(s,l){return s-l},0);function Pw(s){return s&&s.length?hc(s,An):0}function zw(s,l){return s&&s.length?hc(s,Ye(l,2)):0}return R.after=cb,R.ary=Ig,R.assign=qb,R.assignIn=Ug,R.assignInWith=Ha,R.assignWith=Zb,R.at=Qb,R.before=wg,R.bind=eu,R.bindAll=rw,R.bindKey=yg,R.castArray=bb,R.chain=Eg,R.chunk=R0,R.compact=D0,R.concat=S0,R.cond=iw,R.conforms=ow,R.constant=au,R.countBy=PC,R.create=Jb,R.curry=Og,R.curryRight=Ag,R.debounce=xg,R.defaults=eI,R.defaultsDeep=tI,R.defer=ub,R.delay=db,R.difference=T0,R.differenceBy=k0,R.differenceWith=M0,R.drop=U0,R.dropRight=G0,R.dropRightWhile=F0,R.dropWhile=$0,R.fill=P0,R.filter=HC,R.flatMap=YC,R.flatMapDeep=jC,R.flatMapDepth=KC,R.flatten=hg,R.flattenDeep=z0,R.flattenDepth=H0,R.flip=_b,R.flow=aw,R.flowRight=lw,R.fromPairs=W0,R.functions=lI,R.functionsIn=cI,R.groupBy=VC,R.initial=Y0,R.intersection=j0,R.intersectionBy=K0,R.intersectionWith=V0,R.invert=dI,R.invertBy=_I,R.invokeMap=qC,R.iteratee=lu,R.keyBy=ZC,R.keys=en,R.keysIn=On,R.map=Ua,R.mapKeys=gI,R.mapValues=hI,R.matches=cw,R.matchesProperty=uw,R.memoize=Fa,R.merge=vI,R.mergeWith=Gg,R.method=dw,R.methodOf=_w,R.mixin=cu,R.negate=$a,R.nthArg=gw,R.omit=pI,R.omitBy=mI,R.once=fb,R.orderBy=QC,R.over=hw,R.overArgs=gb,R.overEvery=vw,R.overSome=pw,R.partial=tu,R.partialRight=Lg,R.partition=JC,R.pick=EI,R.pickBy=Fg,R.property=Yg,R.propertyOf=mw,R.pull=Q0,R.pullAll=pg,R.pullAllBy=J0,R.pullAllWith=eC,R.pullAt=tC,R.range=Ew,R.rangeRight=Cw,R.rearg=hb,R.reject=nb,R.remove=nC,R.rest=vb,R.reverse=Qc,R.sampleSize=ib,R.set=bI,R.setWith=II,R.shuffle=ob,R.slice=rC,R.sortBy=lb,R.sortedUniq=uC,R.sortedUniqBy=dC,R.split=YI,R.spread=pb,R.tail=_C,R.take=fC,R.takeRight=gC,R.takeRightWhile=hC,R.takeWhile=vC,R.tap=DC,R.throttle=mb,R.thru=Ma,R.toArray=Tg,R.toPairs=$g,R.toPairsIn=Pg,R.toPath=Ow,R.toPlainObject=Mg,R.transform=wI,R.unary=Eb,R.union=pC,R.unionBy=mC,R.unionWith=EC,R.uniq=CC,R.uniqBy=bC,R.uniqWith=IC,R.unset=yI,R.unzip=Jc,R.unzipWith=mg,R.update=OI,R.updateWith=AI,R.values=ao,R.valuesIn=xI,R.without=wC,R.words=Wg,R.wrap=Cb,R.xor=yC,R.xorBy=OC,R.xorWith=AC,R.zip=xC,R.zipObject=LC,R.zipObjectDeep=NC,R.zipWith=RC,R.entries=$g,R.entriesIn=Pg,R.extend=Ug,R.extendWith=Ha,cu(R,R),R.add=xw,R.attempt=Bg,R.camelCase=DI,R.capitalize=zg,R.ceil=Lw,R.clamp=LI,R.clone=Ib,R.cloneDeep=yb,R.cloneDeepWith=Ob,R.cloneWith=wb,R.conformsTo=Ab,R.deburr=Hg,R.defaultTo=sw,R.divide=Nw,R.endsWith=SI,R.eq=hr,R.escape=TI,R.escapeRegExp=kI,R.every=zC,R.find=WC,R.findIndex=fg,R.findKey=nI,R.findLast=BC,R.findLastIndex=gg,R.findLastKey=rI,R.floor=Rw,R.forEach=Cg,R.forEachRight=bg,R.forIn=iI,R.forInRight=oI,R.forOwn=sI,R.forOwnRight=aI,R.get=iu,R.gt=xb,R.gte=Lb,R.has=uI,R.hasIn=ou,R.head=vg,R.identity=An,R.includes=XC,R.indexOf=B0,R.inRange=NI,R.invoke=fI,R.isArguments=Ri,R.isArray=nt,R.isArrayBuffer=Nb,R.isArrayLike=yn,R.isArrayLikeObject=Kt,R.isBoolean=Rb,R.isBuffer=li,R.isDate=Db,R.isElement=Sb,R.isEmpty=Tb,R.isEqual=kb,R.isEqualWith=Mb,R.isError=nu,R.isFinite=Ub,R.isFunction=$r,R.isInteger=Ng,R.isLength=Pa,R.isMap=Rg,R.isMatch=Gb,R.isMatchWith=Fb,R.isNaN=$b,R.isNative=Pb,R.isNil=Hb,R.isNull=zb,R.isNumber=Dg,R.isObject=$t,R.isObjectLike=Ht,R.isPlainObject=us,R.isRegExp=ru,R.isSafeInteger=Wb,R.isSet=Sg,R.isString=za,R.isSymbol=Tn,R.isTypedArray=so,R.isUndefined=Bb,R.isWeakMap=Yb,R.isWeakSet=jb,R.join=X0,R.kebabCase=MI,R.last=qn,R.lastIndexOf=q0,R.lowerCase=UI,R.lowerFirst=GI,R.lt=Kb,R.lte=Vb,R.max=Dw,R.maxBy=Sw,R.mean=Tw,R.meanBy=kw,R.min=Mw,R.minBy=Uw,R.stubArray=du,R.stubFalse=_u,R.stubObject=bw,R.stubString=Iw,R.stubTrue=ww,R.multiply=Gw,R.nth=Z0,R.noConflict=fw,R.noop=uu,R.now=Ga,R.pad=FI,R.padEnd=$I,R.padStart=PI,R.parseInt=zI,R.random=RI,R.reduce=eb,R.reduceRight=tb,R.repeat=HI,R.replace=WI,R.result=CI,R.round=Fw,R.runInContext=V,R.sample=rb,R.size=sb,R.snakeCase=BI,R.some=ab,R.sortedIndex=iC,R.sortedIndexBy=oC,R.sortedIndexOf=sC,R.sortedLastIndex=aC,R.sortedLastIndexBy=lC,R.sortedLastIndexOf=cC,R.startCase=jI,R.startsWith=KI,R.subtract=$w,R.sum=Pw,R.sumBy=zw,R.template=VI,R.times=yw,R.toFinite=Pr,R.toInteger=it,R.toLength=kg,R.toLower=XI,R.toNumber=Zn,R.toSafeInteger=Xb,R.toString=It,R.toUpper=qI,R.trim=ZI,R.trimEnd=QI,R.trimStart=JI,R.truncate=ew,R.unescape=tw,R.uniqueId=Aw,R.upperCase=nw,R.upperFirst=su,R.each=Cg,R.eachRight=bg,R.first=vg,cu(R,function(){var s={};return yr(R,function(l,p){yt.call(R.prototype,p)||(s[p]=l)}),s}(),{chain:!1}),R.VERSION=r,Yn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){R[s].placeholder=R}),Yn(["drop","take"],function(s,l){gt.prototype[s]=function(p){p=p===n?1:Zt(it(p),0);var C=this.__filtered__&&!l?new gt(this):this.clone();return C.__filtered__?C.__takeCount__=dn(p,C.__takeCount__):C.__views__.push({size:dn(p,Fe),type:s+(C.__dir__<0?"Right":"")}),C},gt.prototype[s+"Right"]=function(p){return this.reverse()[s](p).reverse()}}),Yn(["filter","map","takeWhile"],function(s,l){var p=l+1,C=p==Z||p==me;gt.prototype[s]=function(w){var S=this.clone();return S.__iteratees__.push({iteratee:Ye(w,3),type:p}),S.__filtered__=S.__filtered__||C,S}}),Yn(["head","last"],function(s,l){var p="take"+(l?"Right":"");gt.prototype[s]=function(){return this[p](1).value()[0]}}),Yn(["initial","tail"],function(s,l){var p="drop"+(l?"":"Right");gt.prototype[s]=function(){return this.__filtered__?new gt(this):this[p](1)}}),gt.prototype.compact=function(){return this.filter(An)},gt.prototype.find=function(s){return this.filter(s).head()},gt.prototype.findLast=function(s){return this.reverse().find(s)},gt.prototype.invokeMap=ct(function(s,l){return typeof s=="function"?new gt(this):this.map(function(p){return is(p,s,l)})}),gt.prototype.reject=function(s){return this.filter($a(Ye(s)))},gt.prototype.slice=function(s,l){s=it(s);var p=this;return p.__filtered__&&(s>0||l<0)?new gt(p):(s<0?p=p.takeRight(-s):s&&(p=p.drop(s)),l!==n&&(l=it(l),p=l<0?p.dropRight(-l):p.take(l-s)),p)},gt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},gt.prototype.toArray=function(){return this.take(Fe)},yr(gt.prototype,function(s,l){var p=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),w=R[C?"take"+(l=="last"?"Right":""):l],S=C||/^find/.test(l);w&&(R.prototype[l]=function(){var F=this.__wrapped__,Y=C?[1]:arguments,q=F instanceof gt,de=Y[0],_e=q||nt(F),ge=function(ft){var ht=w.apply(R,ti([ft],Y));return C&&Ae?ht[0]:ht};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var Ae=this.__chain__,Pe=!!this.__actions__.length,je=S&&!Ae,at=q&&!Pe;if(!S&&_e){F=at?F:new gt(this);var Ke=s.apply(F,Y);return Ke.__actions__.push({func:Ma,args:[ge],thisArg:n}),new Kn(Ke,Ae)}return je&&at?s.apply(this,Y):(Ke=this.thru(ge),je?C?Ke.value()[0]:Ke.value():Ke)})}),Yn(["pop","push","shift","sort","splice","unshift"],function(s){var l=aa[s],p=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);R.prototype[s]=function(){var w=arguments;if(C&&!this.__chain__){var S=this.value();return l.apply(nt(S)?S:[],w)}return this[p](function(F){return l.apply(nt(F)?F:[],w)})}}),yr(gt.prototype,function(s,l){var p=R[l];if(p){var C=p.name+"";yt.call(to,C)||(to[C]=[]),to[C].push({name:l,func:p})}}),to[La(n,y).name]=[{name:"wrapper",func:n}],gt.prototype.clone=tE,gt.prototype.reverse=nE,gt.prototype.value=rE,R.prototype.at=SC,R.prototype.chain=TC,R.prototype.commit=kC,R.prototype.next=MC,R.prototype.plant=GC,R.prototype.reverse=FC,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=$C,R.prototype.first=R.prototype.head,Zo&&(R.prototype[Zo]=UC),R},Qi=k1();Ii?((Ii.exports=Qi)._=Qi,lc._=Qi):nn._=Qi}).call(MR)}(vs,vs.exports)),vs.exports}var Dt=UR();function Yr(t){return Array.isArray?Array.isArray(t):Gv(t)==="[object Array]"}function GR(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function FR(t){return t==null?"":GR(t)}function Nr(t){return typeof t=="string"}function Mv(t){return typeof t=="number"}function $R(t){return t===!0||t===!1||PR(t)&&Gv(t)=="[object Boolean]"}function Uv(t){return typeof t=="object"}function PR(t){return Uv(t)&&t!==null}function Gn(t){return t!=null}function mu(t){return!t.trim().length}function Gv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const zR="Incorrect 'index' type",HR=t=>`Invalid value for key ${t}`,WR=t=>`Pattern length exceeds max of ${t}.`,BR=t=>`Missing ${t} property in key`,YR=t=>`Property 'weight' in key '${t}' must be a positive integer`,oh=Object.prototype.hasOwnProperty;class jR{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Fv(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Fv(t){let e=null,n=null,r=null,i=1,o=null;if(Nr(t)||Yr(t))r=t,e=sh(t),n=Pu(t);else{if(!oh.call(t,"name"))throw new Error(BR("name"));const a=t.name;if(r=a,oh.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(YR(a));e=sh(a),n=Pu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function sh(t){return Yr(t)?t:t.split(".")}function Pu(t){return Yr(t)?t.join("."):t}function KR(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Gn(o))if(!a[c])n.push(o);else{let u=a[c];const _=o[u];if(!Gn(_))return;if(c===a.length-1&&(Nr(_)||Mv(_)||$R(_)))n.push(FR(_));else if(Yr(_)){r=!0;for(let g=0,v=_.length;g<v;g+=1)i(_[g],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,Nr(e)?e.split("."):e,0),r?n:n[0]}const VR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},XR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},qR={location:0,threshold:.6,distance:100},ZR={useExtendedSearch:!1,getFn:KR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Qe={...XR,...VR,...qR,...ZR};const QR=/[^ ]+/g;function JR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(QR).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class Fd{constructor({getFn:e=Qe.getFn,fieldNormWeight:n=Qe.fieldNormWeight}={}){this.norm=JR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Nr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Nr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Gn(e)||mu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Gn(a)){if(Yr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:g}=u.pop();if(Gn(g))if(Nr(g)&&!mu(g)){let v={v:g,i:_,n:this.norm.get(g)};c.push(v)}else Yr(g)&&g.forEach((v,h)=>{u.push({nestedArrIndex:h,value:v})})}r.$[o]=c}else if(Nr(a)&&!mu(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function $v(t,e,{getFn:n=Qe.getFn,fieldNormWeight:r=Qe.fieldNormWeight}={}){const i=new Fd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Fv)),i.setSources(e),i.create(),i}function eD(t,{getFn:e=Qe.getFn,fieldNormWeight:n=Qe.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Fd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ya(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Qe.distance,ignoreLocation:o=Qe.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function tD(t=[],e=Qe.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Si=32;function nD(t,e,n,{location:r=Qe.location,distance:i=Qe.distance,threshold:o=Qe.threshold,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:c=Qe.minMatchCharLength,includeMatches:u=Qe.includeMatches,ignoreLocation:_=Qe.ignoreLocation}={}){if(e.length>Si)throw new Error(WR(Si));const g=e.length,v=t.length,h=Math.max(0,Math.min(r,v));let m=o,E=h;const I=c>1||u,b=I?Array(v):[];let y;for(;(y=t.indexOf(e,E))>-1;){let k=Ya(e,{currentLocation:y,expectedLocation:h,distance:i,ignoreLocation:_});if(m=Math.min(k,m),E=y+g,I){let B=0;for(;B<g;)b[y+B]=1,B+=1}}E=-1;let x=[],T=1,M=g+v;const z=1<<g-1;for(let k=0;k<g;k+=1){let B=0,re=M;for(;B<re;)Ya(e,{errors:k,currentLocation:h+re,expectedLocation:h,distance:i,ignoreLocation:_})<=m?B=re:M=re,re=Math.floor((M-B)/2+B);M=re;let ce=Math.max(1,h-re+1),J=a?v:Math.min(h+re,v)+g,oe=Array(J+2);oe[J+1]=(1<<k)-1;for(let Z=J;Z>=ce;Z-=1){let Ee=Z-1,me=n[t.charAt(Ee)];if(I&&(b[Ee]=+!!me),oe[Z]=(oe[Z+1]<<1|1)&me,k&&(oe[Z]|=(x[Z+1]|x[Z])<<1|1|x[Z+1]),oe[Z]&z&&(T=Ya(e,{errors:k,currentLocation:Ee,expectedLocation:h,distance:i,ignoreLocation:_}),T<=m)){if(m=T,E=Ee,E<=h)break;ce=Math.max(1,2*h-E)}}if(Ya(e,{errors:k+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:_})>m)break;x=oe}const H={isMatch:E>=0,score:Math.max(.001,T)};if(I){const k=tD(b,c);k.length?u&&(H.indices=k):H.isMatch=!1}return H}function rD(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Pv{constructor(e,{location:n=Qe.location,threshold:r=Qe.threshold,distance:i=Qe.distance,includeMatches:o=Qe.includeMatches,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:c=Qe.minMatchCharLength,isCaseSensitive:u=Qe.isCaseSensitive,ignoreLocation:_=Qe.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(h,m)=>{this.chunks.push({pattern:h,alphabet:rD(h),startIndex:m})},v=this.pattern.length;if(v>Si){let h=0;const m=v%Si,E=v-m;for(;h<E;)g(this.pattern.substr(h,Si),h),h+=Si;if(m){const I=v-Si;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let g=[],v=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:y,score:x,indices:T}=nD(e,E,I,{location:i+b,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});y&&(h=!0),v+=x,y&&T&&(g=[...g,...T])});let m={isMatch:h,score:h?v/this.chunks.length:1};return h&&r&&(m.indices=g),m}}class vi{constructor(e){this.pattern=e}static isMultiMatch(e){return ah(e,this.multiRegex)}static isSingleMatch(e){return ah(e,this.singleRegex)}search(){}}function ah(t,e){const n=t.match(e);return n?n[1]:null}class iD extends vi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class oD extends vi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class sD extends vi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class aD extends vi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class lD extends vi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class cD extends vi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zv extends vi{constructor(e,{location:n=Qe.location,threshold:r=Qe.threshold,distance:i=Qe.distance,includeMatches:o=Qe.includeMatches,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:c=Qe.minMatchCharLength,isCaseSensitive:u=Qe.isCaseSensitive,ignoreLocation:_=Qe.ignoreLocation}={}){super(e),this._bitapSearch=new Pv(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Hv extends vi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const zu=[iD,Hv,sD,aD,cD,lD,oD,zv],lh=zu.length,uD=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,dD="|";function _D(t,e={}){return t.split(dD).map(n=>{let r=n.trim().split(uD).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,_=-1;for(;!u&&++_<lh;){const g=zu[_];let v=g.isMultiMatch(c);v&&(i.push(new g(v,e)),u=!0)}if(!u)for(_=-1;++_<lh;){const g=zu[_];let v=g.isSingleMatch(c);if(v){i.push(new g(v,e));break}}}return i})}const fD=new Set([zv.type,Hv.type]);class gD{constructor(e,{isCaseSensitive:n=Qe.isCaseSensitive,includeMatches:r=Qe.includeMatches,minMatchCharLength:i=Qe.minMatchCharLength,ignoreLocation:o=Qe.ignoreLocation,findAllMatches:a=Qe.findAllMatches,location:c=Qe.location,threshold:u=Qe.threshold,distance:_=Qe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=_D(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const g=n[u];a.length=0,o=0;for(let v=0,h=g.length;v<h;v+=1){const m=g[v],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(o+=1,c+=b,r){const y=m.constructor.type;fD.has(y)?a=[...a,...I]:a.push(I)}}else{c=0,o=0,a.length=0;break}}if(o){let v={isMatch:!0,score:c/o};return r&&(v.indices=a),v}}return{isMatch:!1,score:1}}}const Hu=[];function hD(...t){Hu.push(...t)}function Wu(t,e){for(let n=0,r=Hu.length;n<r;n+=1){let i=Hu[n];if(i.condition(t,e))return new i(t,e)}return new Pv(t,e)}const cl={AND:"$and",OR:"$or"},Bu={PATH:"$path",PATTERN:"$val"},Yu=t=>!!(t[cl.AND]||t[cl.OR]),vD=t=>!!t[Bu.PATH],pD=t=>!Yr(t)&&Uv(t)&&!Yu(t),ch=t=>({[cl.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Wv(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=vD(i);if(!a&&o.length>1&&!Yu(i))return r(ch(i));if(pD(i)){const u=a?i[Bu.PATH]:o[0],_=a?i[Bu.PATTERN]:i[u];if(!Nr(_))throw new Error(HR(u));const g={keyId:Pu(u),pattern:_};return n&&(g.searcher=Wu(_,e)),g}let c={children:[],operator:o[0]};return o.forEach(u=>{const _=i[u];Yr(_)&&_.forEach(g=>{c.children.push(r(g))})}),c};return Yu(t)||(t=ch(t)),r(t)}function mD(t,{ignoreFieldNorm:e=Qe.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function ED(t,e){const n=t.matches;e.matches=[],Gn(n)&&n.forEach(r=>{if(!Gn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function CD(t,e){e.score=t.score}function bD(t,e,{includeMatches:n=Qe.includeMatches,includeScore:r=Qe.includeScore}={}){const i=[];return n&&i.push(ED),r&&i.push(CD),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class ko{constructor(e,n={},r){this.options={...Qe,...n},this.options.useExtendedSearch,this._keyStore=new jR(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Fd))throw new Error(zR);this._myIndex=n||$v(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Gn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=Nr(e)?Nr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return mD(u,{ignoreFieldNorm:c}),o&&u.sort(a),Mv(n)&&n>-1&&(u=u.slice(0,n)),bD(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Wu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Gn(o))return;const{isMatch:u,score:_,indices:g}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:_,value:o,norm:c,indices:g}]})}),i}_searchLogical(e){const n=Wv(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:v,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(v),value:this._myIndex.getValueForItemAtKeyId(u,v),searcher:h});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const g=[];for(let v=0,h=c.children.length;v<h;v+=1){const m=c.children[v],E=r(m,u,_);if(E.length)g.push(...E);else if(c.operator===cl.AND)return[]}return g},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Gn(c)){let _=r(n,c,u);_.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),_.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),a}_searchObjectList(e){const n=Wu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Gn(a))return;let u=[];r.forEach((_,g)=>{u.push(...this._findMatches({key:_,value:a[g],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Gn(n))return[];let i=[];if(Yr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Gn(o))return;const{isMatch:u,score:_,indices:g}=r.searchIn(o);u&&i.push({score:_,key:e,value:o,idx:a,norm:c,indices:g})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:_})}return i}}ko.version="7.0.0";ko.createIndex=$v;ko.parseIndex=eD;ko.config=Qe;ko.parseQuery=Wv;hD(gD);function Rl(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function ID(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function wD(t){return new ko(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function yD(t,e,n){const r=ID(e,n);return t.length===0?r:wD(r).search(t).map(i=>i.item)}function OD(t,e){return Rl(t,e).shape}function un(t,e){const n=OD(t,e);return n?Fu(n):void 0}function Dl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Gd(e)}function AD(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return kR(e)}function xD(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function zs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Gd(i)})}function LD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Gd(o)})})}function Xr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Bv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Sv(e)}function ND(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Sv(r)})}function RD(t,e){const n=t.shape;return n===void 0?void 0:{...un(e,Pt),...n}}function Yv(t,e,n){return{toolId:t,cells:e,value:n}}function DD(t,e){const n=zs(e,"cells"),r=Xr(e);return Yv(t,n,r)}function jv(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Ze(o,e)&&a>=r)}function SD(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:$s(r[i-1],e)))return t;const a=jv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Kv(t,e){return{toolId:t,cells:e,lines:[]}}function TD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),sl(n),{...t,cells:n};const r=n.some(o=>Ze(o,e)),i=n.some(o=>$s(o,e));return n.length>0&&!r&&i?(n.push(e),sl(n),{...t,cells:n}):t}function kD(t,e,n){const r=t.cells.some(_=>Ze(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return ju(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return ju(t,e);const c=jv(o,e,!1);return(o.length===0?!0:$s(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function ju(t,e){return t.cells.some(r=>Ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function MD(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function UD(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function GD(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function FD(t,e){const n=zs(e,"cells"),r=LD(e),i=Kv(t,n);return i.lines=r,i}function Vv(t,e,n=""){return{toolId:t,cells:e,value:n}}function $D(t,e,n=!1){const r=kv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function PD(t,e){return{...t,value:e}}function zD(t,e){const n=zs(e,"cells"),r=Xr(e);return Vv(t,n,r)}function Ku(t,e,n){return{toolId:t,cells:e,value:n}}function HD(t,e){const n=zs(e,"cells"),r=Xr(e);return Ku(t,n,r)}function Vu(t,e,n){return{toolId:t,cells:e,value:n}}function WD(t,e){const n=zs(e,"cells"),r=Xr(e);return Vu(t,n,r)}function Xu(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function BD(t,e){const n=Dl(e),r=Bv(e),i=Xr(e);return Xu(t,n,r,i)}function qu(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function YD(t,e){const n=Dl(e),r=Xr(e);return qu(t,n,r)}function Zu(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function jD(t,e){const n=Dl(e),r=Bv(e);return Zu(t,n,r)}function Qu(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function KD(t,e){const n=Dl(e),r=ND(e),i=Qu(t,n,He.N);return i.directions=r,i}function Ju(t,e,n=""){return{toolId:t,cell:e,value:n}}function VD(t,e){const n=AD(e),r=Xr(e);return Ju(t,n,r)}function XD(t,e=""){return{toolId:t,value:e}}function qD(t,e){const n=Xr(e);return XD(t,n)}function ZD(t,e,n=""){return{toolId:t,coords:e,value:n}}function QD(t,e){const n=xD(e,"coords"),r=Xr(e);return ZD(t,n,r)}function Hs(t,e){return{...t,value:e}}class Mo extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const i=r.constraints[n];return i||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);!i||!i.constraints||(i.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const i=this.get(e);!i||!i.constraints||i.constraints[n]&&(i.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];if(r.constraints)for(const a of Object.values(r.constraints))i.push(iS(a));const o={tool_id:n,constraints:i};if(r.negative_constraints)for(const[a,c]of Object.entries(r.negative_constraints))c&&(o.negative_constraints||(o.negative_constraints={}),o.negative_constraints[a]=c);e[n]=o}return e}static fromJson(e){const n=new Mo;if(!e)return n;for(const r of Object.values(e)){const i=r.tool_id;if(typeof i!="string")throw TypeError("tool_id_str must be of type string.");const o=ky(i);if(o===void 0||!Object.keys(Pt).includes(o))continue;n.addToDict(o);const a=n.get(o);if(!a)continue;const c=r.negative_constraints;if(c){a.negative_constraints={};for(const[_,g]of Object.entries(c))a.negative_constraints[_]=g}const u=r.constraints;for(const _ of u){let g=null;if(My(o,bl)?g=YD(o,_):Pi(o)?g=jD(o,_):Co(o)?g=KD(o,_):bo(o)?g=WD(o,_):Ns(o)?g=HD(o,_):Io(o)?g=DD(o,_):Ev(o)?g=QD(o,_):wo(o)?g=FD(o,_):yo(o)?g=zD(o,_):Wr(o)?g=BD(o,_):Ry(o)?g=qD(o,_):Rs(o)&&(g=VD(o,_)),g!==null){const v=Dt.uniqueId(),h=RD(_,o);g.shape=h,n.addConstraint(o,v,g)}}}return n}}function fo(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=i[0];if(Ze(o.cell,n))return[a,o]}return null}function uh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(n.every(c=>o.cells.some(u=>Ze(c,u))))return i}return null}function dh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=o.cells[o.cells.length-1];if(Ze(n,a))return i}return null}function JD(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(c=>Ze(c,n)))return[i[0],o]}return null}function eS(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints))if(i[1].cells.some(c=>Ze(c,n)))return i;return null}function _h(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(c=>Ze(c,n)))return[i[0],o]}return null}function tS(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[i,o]of Object.entries(r.constraints)){const a=o,c=a.lines.findIndex(u=>u.some((_,g)=>Ze(_,n)&&g>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function fh(t,e,n,r){const i=t.get(e);if(!i||!i.constraints)return null;for(const o of Object.entries(i.constraints)){const a=o[1],c=o[0];if(Ze(n,a.cell)&&r===a.direction)return[c,a]}return null}function gh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=i[0];if(Ze(n,o.cell))return[a,o]}return null}function nS(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(c=>Ze(c,n))||o.cells2.some(c=>Ze(c,n)))return[i[0],o]}return null}function rS(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const i of Object.entries(n.constraints)){const o=i[1];r.add(o.value)}return r}function iS(t){const e={};if("cells"in t){const n=t.cells.map(r=>Wa(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Wa(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Wa(i)));e.lines=n}if("cell"in t){const n=Wa(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=un(t.toolId,Pt),r=Gy(t.shape,n);r&&(e.shape=r)}return e}function hh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Xv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function ed(t){const e=new Option().style;return e.color=t,e.color!==""}function Eu(t){return Xv(t)||ed(t)?t:ed(`#${t}`)?`#${t}`:void 0}function ul(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function qv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function dl(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function oS(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const vh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function sS(t){return t in vh?vh[t]:null}function Zv(t,e,n){if(n===null)return null;const r=sS(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Cu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class aS{constructor(e,n){pe(this,"r");pe(this,"c");pe(this,"outside",!1);pe(this,"value",null);pe(this,"given",!1);pe(this,"region",null);pe(this,"centerMarks",[]);pe(this,"cornerMarks",[]);pe(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Cu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Cu(this.cornerMarks,e))}enterHighlight(e){this.highlights=Cu(this.highlights,e)}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Zv(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Uo{constructor(e,n){pe(this,"nCols");pe(this,"nRows");pe(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new aS(i,a);if(r){const u=Zv(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return qv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Ps(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Uo(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function lS(t){const e=t.grid,n=t.elementsDict,r={};r.puzzleInfo=t.puzzleMeta,r.nRows=e.nRows,r.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),o=Dt.range(1,i+1);t.valid_digits&&!oS(o,t.valid_digits)&&(r.valid_digits=t.valid_digits),r.grid=e.toJSON(),t.solution&&(r.solution=t.solution);const a=n.toJSON();return Object.keys(a).length&&(r.local_constraints=a),r}function cS(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=Uo.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=Dt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,g=t.local_constraints,v=Mo.fromJson(g);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,elementsDict:v}}function W9(){const t=new Uo(9,9),e=new Mo;return{grid:t,solution:void 0,valid_digits:Dt.range(1,10),puzzleMeta:{},elementsDict:e}}var ps=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(ps||{});const uS=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),dS=()=>({type:"CLEAR"}),_S=t=>({type:"DRAG",payload:t}),td=t=>({type:"SET",payload:t}),fS=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),$d=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Lr=(t,e,n)=>{const r=[...t];return sl(r),{cells:r,lastCell:e,mode:n}};function gS(t,e,n){if(e===null)return $d();if(n==="RESETTING")return Lr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ze(e,i));if(n==="SELECTING")return r!==-1?t:Lr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Lr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Lr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Lr(i,null,"DESELECTING")}return t}function hS(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:Lr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Lr(r,null,t.mode)}return t}function vS(t,e){return{...t,cells:e}}function pS(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ze(e,i))!==-1?Lr([...t.cells],e,"SELECTING"):Lr([...t.cells,e],e,"SELECTING"):Lr([e],e,t.mode)}function Qv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return $d();case"SET":return vS(t,e.payload);case"CLICK":return gS(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return hS(t,e.payload);case"ARROW_KEY":return pS(t,e.payload.cell,e.payload.selectionMode);default:return t}}function _o(t,e){return Ze(t.p1,e.p1)&&Ze(t.p2,e.p2)||Ze(t.p1,e.p2)&&Ze(t.p2,e.p1)}function mS(t,e){return Ze(t.p1,e.p2)&&Ze(t.p2,e.p1)}function Jv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ze(t,e)}class Sl{constructor(){pe(this,"edgeMarkers",[]);pe(this,"cellMarkers",[]);pe(this,"lineMarkers",[]);pe(this,"draftLine",[]);pe(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ze(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ze(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ze(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ze(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ze(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>_o(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>_o(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&mS(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Jv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>_o(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>_o(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Sl;return Object.assign(e,this),e}}const ph=t=>({type:"ADD_EDGE_MARKER",payload:t}),mh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),ja=t=>({type:"ADD_CELL_MARKER",payload:t}),ES=t=>({type:"SET_CELL_MARKERS",payload:t}),Eh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),CS=t=>({type:"DRAG",payload:t}),As=t=>({type:"ADD_LINE_MARKERS",payload:t}),Ch=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Pd=()=>({type:"RESET"});function bS(t,e){switch(e.type){case"RESET":return new Sl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function ep(){return{_undoStack:[],_redoStack:[]}}const Go=Lt(ep());function IS(){Go.update(()=>ep())}function Qn(t,e=!0){Go.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function wS(t,e=!0){Go.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function tp(){Go.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function np(){Go.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const _l=Lt(new Sl);function Dr(t){_l.update(e=>bS(e,t))}const fl=Lt(1);function Di(t,e){return{execute:()=>{Dr(t)},unExecute:()=>{Dr(e)}}}const Gi=Lt($d());function co(t){t&&Gi.update(e=>Qv(e,t))}function bh(t){t&&Gi.update(e=>Qv(e,t))}function yS(t,e){return{execute:()=>{bh(t)},unExecute:()=>{bh(e)}}}const po=Lt(null),Ws=Lt($i.SETTING),nd=Lt(!1),sn=Lt(f.DIGIT),rp=Lt(f.DIGIT),zd=Lt(Dt.range(1,10)),Cn=Lt(new Uo(9,9)),Fn=Lt(ke(Cn).getAllCells()),qr=Lt({}),ot=Lt(new Mo),Bt=Lt(null),Fo=Lt(void 0),Tl=Lt(void 0);function OS(t){qr.update(()=>t)}function $o(t){Bt.update(()=>t)}function Hd(t){Fo.update(()=>t)}function Br(t){ke(sn)!==t&&(sn.update(()=>t),$o(null))}function AS(){const t=ke(rp);t&&Br(t)}function rd(t){rp.update(()=>t)}function xS(t){ke(sn)===t&&Br(f.DIGIT)}function LS(t){ot.update(e=>(e.removeFromDict(t),e)),Hd(void 0)}function Qt(t,e,n){ot.update(r=>(r.updateConstraint(t,e,n),r)),$o({id:e,constraint:n})}function bu(t){const e=ke(Bt);if(t=t?{...t}:void 0,Hd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Qt(r,e.id,n)}function pi(t,e){const r=ke(ot).get(e);if(!r||!r.constraints)return;const i=r.constraints[t];i&&$o({id:t,constraint:i})}function NS(t,e,n){const r=new Uo(t,e);Cn.update(()=>r),zd.update(()=>n),ot.update(()=>new Mo),qr.update(()=>({})),Wd(void 0),Fn.update(()=>r.getAllCells())}function RS(t){Cn.update(()=>t.grid),qr.update(()=>t.puzzleMeta),Wd(t.solution),zd.update(()=>t.valid_digits),ot.update(()=>t.elementsDict),Fn.update(()=>t.grid.getAllCells())}function ip(){const t=ke(Cn);t.resetValues(),Cn.update(()=>t),Fn.update(()=>t.getAllCells()),Dr(Pd())}function gl(){IS(),Dr(Pd()),Br(f.DIGIT);const t=dS();co(t),Hd(void 0),$o(null)}const DS=nr(ot,t=>{for(const e of t.values()){const n=e.tool_id;if(n===f.FOG_LIGHTS||n===f.CUSTOM_FOG_CLEARING)return!0}return!1}),op=nr([jr,DS,Ws,sn],([t,e,n,r])=>{const i=t.hideFog,o=e,a=r,c=a===f.DIGIT||a===f.CORNER_PM||a===f.CENTER_PM||a===f.HIGHLIGHTS||a===f.PEN_TOOL;return!i&&o&&(c||n===$i.SOLVING)}),SS=nr([jr,Ws],([t,e])=>!t.hideFog&&e===$i.SETTING),Bs=nr([Cn,qr,ot,Tl,zd],([t,e,n,r,i])=>({grid:t,solution:r,puzzleMeta:e,valid_digits:i,elementsDict:n}));function Wd(t){Tl.update(()=>t)}var TS=ue('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function kS(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=TS(),o=K(i),a=K(o,!0);P(o);var c=G(o,2);P(i),te(()=>lt(a,n())),Ue("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),L(t,i)}var MS=ue('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Zr(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),i=A();function o(){n(!1),d(i).close()}D(()=>(d(i),X(n())),()=>{d(i)&&n()&&d(i).showModal()}),D(()=>(d(i),X(n())),()=>{d(i)&&!n()&&d(i).close()}),Ie();var a=MS(),c=K(a),u=K(c);kS(u,{get title(){return r()},closeCb:o});var _=G(u,2),g=K(_),v=K(g);Et(v,e,"default",{}),P(g),P(_),P(c),P(a),Ui(a,h=>O(i,h),()=>d(i)),Ue("click",c,Er(function(h){yy.call(this,e,h)})),Ue("close",a,()=>{n(!1)}),Ue("click",a,wy(Er(()=>d(i).close()))),L(t,a),le()}var US=ue('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function GS(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=A(null);D(()=>(X(r()),d(i)),()=>{r()&&d(i)&&d(i).focus()}),Ie();var o=US(),a=G(K(o),2);En(a),N(a,"spellcheck",!1),Ui(a,c=>O(i,c),()=>d(i)),P(o),Jn(a,n),L(t,o),le()}var FS=ue('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function $S(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);Zr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=FS(),u=K(c);GS(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var _=G(u,2),g=K(_),v=K(g);Et(v,e,"default",{}),P(g),P(_),P(c),L(o,c)},$$slots:{default:!0},$$legacy:!0})}var PS=ue('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Bd(t,e){let n=U(e,"isOpen",8,!0);var r=PS(),i=K(r);Et(i,e,"default",{}),P(r),te(()=>{N(r,"aria-expanded",n()),wt(r,"closed",!n())}),L(t,r)}var zS=ue('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),HS=ue('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function di(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var o=be(),a=ne(o);{var c=_=>{var g=zS(),v=K(g),h=K(v),m=K(h,!0);P(h),P(v);var E=G(v,2),I=K(E);Et(I,e,"default",{}),P(E),P(g),te(()=>lt(m,n())),L(_,g)},u=_=>{var g=HS(),v=K(g),h=K(v),m=K(h,!0);P(h),P(v);var E=G(v,2),I=K(E);Et(I,e,"default",{});var b=G(I,2);P(E),P(g),te(()=>{lt(m,n()),wt(b,"open",r())}),Ue("click",g,()=>r(!r())),L(_,g)};Q(a,_=>{i()?_(u,!1):_(c)})}L(t,o)}var WS=ue('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),BS=ue('<ol class="svelte-cd45on"></ol>'),YS=ue("<!> <!>",1);function jS(t,e){ae(e,!1);const n=A();let r=U(e,"category",8),i=U(e,"addTool",8),o=U(e,"searchResults",8),a=A(!0);D(()=>(X(o()),X(r())),()=>{O(n,o().filter(g=>{var v,h;return(h=(v=g.info.meta)==null?void 0:v.categories)==null?void 0:h.includes(r())}))}),Ie(),fe();var c=be(),u=ne(c);{var _=g=>{var v=YS(),h=ne(v);di(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return d(a)},set isOpen(E){O(a,E)},$$legacy:!0});var m=G(h,2);Bd(m,{get isOpen(){return d(a)},children:(E,I)=>{var b=BS();Je(b,5,()=>d(n),mt,(y,x)=>{let T=()=>d(x).key,M=()=>d(x).info;var z=WS(),H=K(z),k=K(H,!0);P(H),P(z),te(()=>{var B;N(H,"title",(B=M().meta)==null?void 0:B.description),lt(k,T())}),Ue("click",H,()=>{i()(T())}),L(y,z)}),P(b),L(E,b)},$$slots:{default:!0}}),L(g,v)};Q(u,g=>{d(n).length&&g(_)})}L(t,c),le()}function KS(t,e){ae(e,!1);const n=A();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),o=U(e,"categories",8),a=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);D(()=>(X(r()),X(a()),X(c())),()=>{O(n,yD(r(),a(),c()))}),Ie(),fe();var u=be(),_=ne(u);Je(_,1,o,mt,(g,v)=>{jS(g,{get category(){return d(v)},get searchResults(){return d(n)},get addTool(){return i()}})}),L(t,u),le()}var VS=ue('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function kl(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=VS();N(i,"tabindex",0);var o=K(i),a=K(o);Et(a,e,"add-button",{}),P(o);var c=G(o,2),u=K(c),_=K(u);Et(_,e,"title-icon",{}),P(u);var g=G(u);P(c);var v=G(c,2),h=K(v);P(v),P(i),te(()=>{lt(g,` ${r()??""}`),wt(h,"open",n())}),Ue("click",i,()=>n(!n())),Ue("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),L(t,i)}var XS=ue('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function qS(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function o(){i(!i())}kl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=XS();Ue("click",u,Er(()=>o())),L(a,u)},"title-icon":(a,c)=>{var u=be(),_=ne(u);Et(_,e,"title-icon",{}),L(a,u)}},$$legacy:!0})}var ZS=ue('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),QS=ue('<div class="panel-container svelte-hixu4"><!> <!></div>');function Ml(t,e){let n=U(e,"isOpen",8,!0);var r=QS(),i=K(r);Et(i,e,"panel-header",{});var o=G(i,2);Bd(o,{get isOpen(){return n()},children:(a,c)=>{var u=ZS(),_=K(u);Et(_,e,"panel-content",{}),P(u),L(a,u)},$$slots:{default:!0}}),P(r),L(t,r)}var JS=ue("<!> <!>",1);function e2(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),o=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),c=A(!0),u=A(!1),_=A("");const g=v=>{O(u,!1),O(c,!0),i()(v)};fe(),Ml(t,{get isOpen(){return d(c)},set isOpen(v){O(c,v)},$$slots:{"panel-header":(v,h)=>{var m=JS(),E=ne(m);qS(E,{get title(){return r()},get isOpen(){return d(c)},set isOpen(b){O(c,b)},get showModal(){return d(u)},set showModal(b){O(u,b)},$$slots:{"title-icon":(b,y)=>{var x=be(),T=ne(x);Et(T,e,"title-icon",{}),L(b,x)}},$$legacy:!0});var I=G(E,2);$S(I,{get title(){return r()},get showModal(){return d(u)},set showModal(b){O(u,b)},get searchPattern(){return d(_)},set searchPattern(b){O(_,b)},children:(b,y)=>{KS(b,{get searchPattern(){return d(_)},get categories(){return n()},get filterFunc(){return o()},addTool:g,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),L(v,m)},"panel-content":(v,h)=>{var m=be(),E=ne(m);Et(E,e,"panel-content",{}),L(v,m)}},$$legacy:!0}),le()}var t2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function n2(t){var e=t2();L(t,e)}var uo=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(uo||{});const Yd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),jd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),r2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),i2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),Ih=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function o2(t){ot.update(e=>(e.addToDict(t),e))}function Ys(t,e){const n=ke(Fo);n&&(e.shape={...n}),ot.update(r=>(r.addConstraint(e.toolId,t,e),r)),$o({id:t,constraint:e})}function Kd(t,e){e&&ot.update(n=>(n.removeConstraint(t,e),n))}function sp(t,e){ot.update(n=>(n.setElement(t,e),n))}function wh(t){t.type===uo.ADD_LOCAL_CONSTRAINT?Ys(t.payload.id,t.payload.constraint):t.type===uo.REMOVE_LOCAL_CONSTRAINT?Kd(t.payload.tool,t.payload.id):t.type===uo.REMOVE_LOCAL_CONSTRAINT_GROUP?LS(t.payload.tool):t.type===uo.RESTORE_ELEMENT?sp(t.payload.tool,t.payload.constraints):t.type===uo.UPDATE_LOCAL_CONSTRAINT&&Qt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function js(t,e){return{execute:()=>{wh(t)},unExecute:()=>{wh(e)}}}var s2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function ap(t){var e=s2();L(t,e)}var a2=ue('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function l2(t,e){ae(e,!1);const n=qe(),r=()=>ve(ot,"$elementsDictStore",n),i=A(),o=A();let a=U(e,"tool_id",8),c=U(e,"neg_tool_id",8),u=U(e,"description",8);function _(){d(i)&&(d(i).negative_constraints||Gu(i,d(i).negative_constraints={}),Gu(i,d(i).negative_constraints[c()]=!d(o)),sp(a(),d(i)),O(o,!d(o)))}D(()=>(r(),X(a())),()=>{O(i,r().get(a()))}),D(()=>(d(i),X(c())),()=>{var I;O(o,(I=d(i))!=null&&I.negative_constraints?!!d(i).negative_constraints[c()]:!1)}),Ie(),fe();var g=a2(),v=K(g),h=K(v);Mi(2),P(v);var m=G(v,2),E=K(m,!0);P(m),P(g),te(()=>{N(g,"title",u()),wt(v,"checked",d(o)),wt(h,"checked",d(o)),lt(E,c())}),Ue("click",h,_),L(t,g),le()}var c2=ue('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function u2(t,e){ae(e,!1);const n=qe(),r=()=>ve(po,"$svgRefStore",n),i=()=>ve(ot,"$elementsDictStore",n),o=()=>ve(Bt,"$currentConstraintStore",n),a=A();let c=U(e,"constraint_id",8),u=U(e,"tool_id",8);function _(){pi(c(),u()),r()&&r().focus()}function g(){const y=i().getConstraint(u(),c());if(!y)return;const x=jd(c(),u()),T=Yd(c(),y),M=js(x,T);Qn(M)}D(()=>o(),()=>{var y;O(a,(y=o())==null?void 0:y.id)}),Ie(),fe();var v=c2(),h=K(v),m=K(h);P(h);var E=G(h,2),I=K(E),b=K(I);ap(b),P(I),P(E),P(v),te(()=>{wt(v,"active",c()===d(a)),lt(m,`ID: ${c()??""}`)}),Ue("click",I,Er(g)),Ue("click",v,_),L(t,v),le()}var d2=ue('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function _2(t,e){ae(e,!1);const n=qe(),r=()=>ve(ot,"$elementsDictStore",n),i=A();let o=U(e,"tool_id",8);D(()=>(r(),X(o())),()=>{O(i,r().get(o()))}),Ie(),fe();var a=be(),c=ne(a);{var u=_=>{var g=d2(),v=K(g);Je(v,5,()=>Object.entries(d(i).constraints),h=>h[0],(h,m)=>{u2(h,{get constraint_id(){return d(m)[0]},get tool_id(){return o()}})}),P(v),P(g),L(_,g)};Q(c,_=>{d(i)&&d(i).constraints&&Object.entries(d(i).constraints).length&&_(u)})}L(t,a),le()}class Te{constructor(e,n){pe(this,"x");pe(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function lp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Nn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Te(i.x,i.y)};function qa(t,e){const n=Nl(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function f2(t,e){const n=Nl(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Za(t,e){const n=Nl(t),r=RR(n),o=r.map(_=>new Te(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function Qa(t,e){const n=Nl(t),r=DR(n),o=r.map(_=>new Te(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function bs(t,e,n){const r=qa(t);if(!r)return null;const i=Qa(t);if(!i)return null;const o=Za(t);if(!o)return null;const a=f2(t);if(!a)return null;let c,u;e===Rt.CORNER?(c=o.corner,u="corner"):e===Rt.EDGE?(c=i.edge,u="edge"):e===Rt.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===Rt.CORNER_OR_EDGE?o.dist<i.dist?(c=o.corner,u="corner"):(c=i.edge,u="edge"):e===Rt.CORNER_OR_CENTER?o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===Rt.EDGE_OR_CENTER?i.dist<a.dist?(c=i.edge,u="edge"):(c=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(c=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center");const g=new Te(c.c,c.r).subtract(t).length(),v=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:g,closest:c,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:v}}class Po{constructor(e=.4){pe(this,"onTap",null);pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onMove",null);pe(this,"_prevPoint",null);pe(this,"_prevCell",null);pe(this,"_lastPointerDownTime",0);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_tapCount",0);pe(this,"_lastTapPosition",null);pe(this,"_lastTapTime",0);pe(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;this._prevPoint=r;const i=qa(r);if(!i)return;const o=i.cell;this._prevCell=o,this._lastPointerDownTime=e.timeStamp;const a={event:e,cell:o,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=qa(r,i);if(!o)return;const a=o.cell;if(this._prevCell&&Ze(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const c={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(c),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(c)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Nn(e,n);if(!r)return;const i=qa(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function yh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function g2(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Oh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Ah(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function h2(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===f.HIGHLIGHTS&&i.highlights.length?yh(i,e):i.value!==null?g2(i,e):n===f.CORNER_PM&&i.cornerMarks.length?Oh(i,e):n===f.CENTER_PM&&i.centerMarks.length?Ah(i,e):i.cornerMarks.length?Oh(i,e):i.centerMarks.length?Ah(i,e):i.highlights.length?yh(i,e):r:r}function br(t,e,n,r=!1){if(!(t&&e))return;const i=Yd(t,e),o=jd(t,n),a=js(i,o);Qn(a,r)}function Cr(t,e,n,r=!0){if(!(t&&e))return;const i=jd(t,n),o=Yd(t,e),a=js(i,o);Qn(a,r)}function id(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Ih(r,t,n),a=Ih(r,t,e),c=js(o,a);Qn(c,i)}function v2(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,g=!1,v=Ln.DYNAMIC;function h(E){_=!1;const I=E.cell;if(Gt(E.cell,o)){if(v===Ln.DYNAMIC){const y=ke(ot),x=tS(y,n,I);if(x){const M=GD(x.arrow,x.matchLineIdx);id(x.id,x.arrow,M,n,!0),g=!0;return}const T=_h(y,n,I);if(!T)_=!0,v=Ln.EDIT_BULB,u=null,a=null;else{v=Ln.EDIT_ARROWS,u=T[0],a=T[1],a=ju(a,I),Qt(n,u,a);return}}if(v===Ln.EDIT_BULB&&!u){u=Dt.uniqueId(),a=Kv(n,[I]),Ys(u,a);return}else v===Ln.EDIT_BULB&&u&&a?(a=TD(a,I),Qt(n,u,a)):v===Ln.EDIT_ARROWS&&u&&a&&(a=kD(a,I,r==null?void 0:r.allowSelfIntersection),Qt(n,u,a))}}return i.onDragStart=E=>{v=Ln.DYNAMIC,h(E)},i.onDrag=E=>{h(E)},i.onDragEnd=()=>{if(g){g=!1;return}v===Ln.EDIT_ARROWS&&u&&a?MD(a)?(a=UD(a),Qt(n,u,a)):(id(u,c,a,n),c=a):v===Ln.EDIT_BULB&&(br(u,a,n),c=a),v=Ln.DYNAMIC},i.onTap=E=>{if(_)return;const I=E.cell,b=ke(ot);if(_h(b,n,I)){Cr(u,a,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function p2(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(h){return!!Gt(h.cell,o)}function g(h){if(!u||!c)throw"UNREACHABLE";const m=h.cell;_(h)&&(c=SD(c,m,a),Qt(n,u,c))}return i.onDragStart=h=>{ke(Wt)!==Ne.DELETE&&(u=Dt.uniqueId(),c=Yv(n,[],r==null?void 0:r.defaultValue),Ys(u,c),g(h))},i.onDrag=h=>{g(h)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?Kd(n,u):u&&c&&br(u,c,n,!1),u=null},i.onTap=h=>{if(ke(Wt)===Ne.ADD_EDIT)return;const E=h.cell,I=ke(ot),b=eS(I,n,E);if(b){const[y,x]=b;Cr(y,x,n)}},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const m2=nr(ot,t=>{const e=[];for(const[n,r]of t.entries())Dy(n)&&e.push(r);return e});function zo(t){return nr(ot,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push(o);return r})}const Vd=zo(xd),cp=nr(Vd,t=>{const e=t.find(r=>r.tool_id===f.FOG_LIGHTS);return e?e.constraints:{}}),E2=nr(ot,t=>{for(const e of t.values())if(e.tool_id===f.CUSTOM_FOG_CLEARING)return e}),C2=nr(Vd,t=>{const e=t.find(r=>r.tool_id===f.MINIMUM);return e?e.constraints:{}}),b2=nr(Vd,t=>{const e=t.find(r=>r.tool_id===f.MAXIMUM);return e?e.constraints:{}}),I2=zo(bo),w2=zo(Rs),y2=zo(Ns),O2=zo(Ev),A2=zo(Ay),Ja=Lt(void 0),el=Lt(void 0),tl=Lt(void 0),nl=Lt(void 0),rl=Lt(void 0),ms=Lt(void 0),il=Lt(void 0);nr([ot,sn],([t,e])=>{const n=e;return t.get(n)});function x2(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols};function a(_){const g=ke(ot),v=_.cell;if(!Gt(_.cell,o))return;let m=ke(Wt);const E=fo(g,n,v);if(m===Ne.DYNAMIC&&(m=E?Ne.DELETE:Ne.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&fo(g,r.oppositeConstraintId,v)))if(E&&m===Ne.DELETE){const[I,b]=E;Cr(I,b,n)}else if(!E&&m===Ne.ADD_EDIT){const I=qu(n,v,r==null?void 0:r.defaultValue),b=Dt.uniqueId();br(b,I,n,!0)}else E&&m===Ne.ADD_EDIT&&pi(E[0],n)}i.onDragStart=_=>{a(_)},i.onDrag=_=>{a(_)},i.onMove=_=>{if(!Gt(_.cell,o)){Ja.set(void 0);return}const v=qu(n,_.cell,r==null?void 0:r.defaultValue),h=ke(Fo);h&&(v.shape={...h});const m=ke(Wt),E=ke(ot),I=fo(E,n,_.cell);if(!I&&m===Ne.DELETE){Ja.set(void 0);return}let b="add",y;I&&(m===Ne.DELETE||m===Ne.DYNAMIC)&&(b="remove",y=I[0]);const x={tool:v,match_id:y,mode:b};Ja.set(x)};function c(_){const g=ke(Bt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Lo(_)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,_.key);m!==void 0&&m!==v.value&&(v=Hs(v,m),Qt(n,h,v))}return{pointerDown:_=>{_.button===0&&i.pointerDown(_,t)},pointerMove:_=>{i.pointerMove(_,t)},pointerUp:_=>{i.pointerUp(_,t)},keyDown:_=>{c(_)},keyUp:()=>{}}}class Ul{constructor(e){pe(this,"onDragStart",null);pe(this,"onMove",null);pe(this,"feature");pe(this,"_prevCoord",null);pe(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=Nn(e,n);if(!r)return;const i=bs(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;const i=bs(r,this.feature);if(!i||this._prevCoord&&Ze(i.closest,this._prevCoord)&&this._prevCellCoord&&Ze(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function L2(t,e,n,r){const i=(r==null?void 0:r.targets)??Rt.CLOSEST,o=new Ul(i),a={nRows:e.nRows,nCols:e.nCols};function c(g){const v=ke(ot),h=g.cell,m=g.closest;let E=ke(Wt);if(!Gt(h,a))return;const b=gh(v,n,m);if(E===Ne.DYNAMIC&&(E=b?Ne.DELETE:Ne.ADD_EDIT),b&&E===Ne.DELETE){const y=b[0];Cr(y,b[1],n)}else if(!b&&E===Ne.ADD_EDIT){const y=Ju(n,m,""),x=Dt.uniqueId();br(x,y,n,!0)}else b&&E===Ne.ADD_EDIT&&pi(b[0],n)}function u(g){const v=ke(Bt);if(!v)return;let h=v.constraint;const m=v.id;if(h.value===void 0||!Lo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Hs(h,E),Qt(n,m,h))}return o.onDragStart=g=>{c(g)},o.onMove=g=>{if(!Gt(g.cell,a)){il.set(void 0);return}const h=ke(Wt),m=Ju(n,g.closest,""),E=ke(Fo);E&&(m.shape={...E});const I=ke(ot),b=gh(I,n,g.closest);if(!b&&h===Ne.DELETE){il.set(void 0);return}let y="add",x;b&&(h===Ne.DYNAMIC||h===Ne.DELETE)&&(y="remove",x=b[0]);const T={tool:m,match_id:x,mode:y};il.set(T)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function N2(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Rt.CORNER_OR_EDGE,o=new Ul(i),a={nRows:e.nRows,nCols:e.nCols};function c(g){const v=ke(ot),h=g.cell,m=g.direction,E=vo(m);if(Gt(h,a))return;const b=rh(h,E);if(!Gt(b,a))return;let x=ke(Wt);const T=fh(v,n,h,E);if(x===Ne.DYNAMIC&&(x=T?Ne.DELETE:Ne.ADD_EDIT),T&&x===Ne.DELETE){const[M,z]=T;Cr(M,z,n)}else if(!T&&x===Ne.ADD_EDIT){const M=Xu(n,h,E,""),z=Dt.uniqueId();br(z,M,n,!0)}else T&&x===Ne.ADD_EDIT&&pi(T[0],n)}function u(g){const v=ke(Bt);if(!v)return;let h=v.constraint;const m=v.id;if(h.value===void 0||!Lo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Hs(h,E),Qt(n,m,h))}return o.onDragStart=g=>{c(g)},o.onMove=g=>{if(Gt(g.cell,a)){ms.set(void 0);return}const h=vo(g.direction),m=rh(g.cell,h);if(!Gt(m,a)){ms.set(void 0);return}const I=ke(Wt),b=ke(ot);if(!fh(b,n,g.cell,h)&&I===Ne.DELETE){ms.set(void 0);return}const x=Xu(n,g.cell,h,"");ms.set(x)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function R2(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null;function u(v){const h=ke(ot),m=v.cell;if(!Gt(v.cell,o))return;let I=ke(Wt);const b=JD(h,n,m);if(b&&(v.event.shiftKey||I===Ne.ADD_EDIT)&&(c=b[0],a=b[1],$o({id:c,constraint:a}),I=Ne.ADD_EDIT),I===Ne.DYNAMIC&&(I=b?Ne.DELETE:Ne.ADD_EDIT),b&&I===Ne.DELETE){Cr(b[0],b[1],n);return}if(!a&&I===Ne.ADD_EDIT){a=Vv(n,[m]),c=Dt.uniqueId(),Ys(c,a);return}else if(a&&c&&I===Ne.ADD_EDIT){const y=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=$D(a,m,y),Qt(n,c,a);return}}function _(v){const h=ke(Bt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Lo(v)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,v.key);I!==void 0&&I!==m.value&&(m=PD(m,I),Qt(n,E,m))}return i.onDragStart=v=>{c=null,a=null,u(v)},i.onDrag=v=>{u(v)},i.onDragEnd=()=>{c&&a&&br(c,a,n,!1),c=null},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:v=>{i.pointerMove(v,t)},pointerUp:v=>{i.pointerUp(v,t)},keyDown:v=>{_(v)},keyUp:()=>{}}}var pr=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(pr||{});const D2=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),up=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),S2=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),T2=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),k2=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),M2=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Iu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),U2=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),wu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Gl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function G2(t,e,n){if(e===f.DIGIT){const r=t.map(a=>a.value),i=D2(t,n),o=up(t,r);return[i,o]}if(e===f.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=S2(t,n),a=T2(t,r,i);return[o,a]}if(e===f.REGIONS){const r=t.map(a=>a.region),i=k2(t,n),o=M2(t,r);return[i,o]}if(e===f.HIGHLIGHTS&&n!==null){const r=wu(t,n),i=wu(t,n);return[r,i]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=wu(t,n),o=Gl(t,r);return[i,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Iu(t,n,e),i=Iu(t,n,e);return[r,i]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=Iu(t,n,e),o=U2(t,r,e);return[i,o]}}function ds(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Fn.update(i=>i)}function mo(t){switch(t.type){case pr.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ds(e,f.DIGIT,n,!0);break}case pr.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ds(e,f.GIVEN,n,!0);break}case pr.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ds(e,f.REGIONS,n,!0);break}case pr.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ds(e,f.HIGHLIGHTS,n,!0);break}case pr.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ds(e,r,n,!0);break}case pr.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Fn.update(r=>r);break}case pr.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Fn.update(i=>i);break}case pr.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Fn.update(r=>r);break}case pr.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Fn.update(r=>r);break}case pr.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===f.CENTER_PM?e[i].centerMarks=r[i]:n===f.CORNER_PM&&(e[i].cornerMarks=r[i]);Fn.update(i=>i);break}}}function F2(t,e){return{execute:()=>{mo(t)},unExecute:()=>{mo(e)}}}const lo=new Po;function xh(t,e){return t.shiftKey?ps.SELECTING:t.ctrlKey||t.metaKey||e?ps.DYNAMIC:t.altKey?ps.DESELECTING:ps.RESETTING}function od(t,e,n,r,i=!1){switch(e){case f.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case f.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case f.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function $2(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=i=>i===f.CORNER_PM||i===f.CENTER_PM||i===f.DIGIT;for(const i of n){const o=od(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function yu(t,e,n,r){const i=G2(e,n,r);if(i){const o=i[0],a=i[1],c=F2(o,a),u=td(t),g=[yS(u,u),c];wS(g)}}function P2(t,e,n){const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};lo.onTap=m=>{if(m.tapCount!==2)return;const I=Gt(m.cell,i)?m.cell:null;if(!I)return;const b=h2(I,e,n),y=td(b);co(y)},lo.onDragStart=m=>{const E=Gt(m.cell,i),I=ke(nd),b=xh(m.event,I),y=E?m.cell:null,x=uS(y,b);co(x)},lo.onDrag=m=>{const I=Gt(m.cell,i)?m.cell:null,b=_S(I);co(b)};function o(m){if(!nO(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=td(E);return co(I),!0}function a(m){if(!aO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=cO(m);return Br(E),!0}return m.type==="keyup"?(AS(),!0):!1}function c(m){if(!sO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Br(I),rd(I),!0}else{const E=lO(m.code);return Br(E),rd(E),!0}}function u(m){if(!dO(m))return!1;const E=ke(Gi).lastCell;let I=null;if(E!==null){const[x,T]=_O(m),[M,z]=[hh(E.r+T,0,i.nRows-1),hh(E.c+x,0,i.nCols-1)];I={r:M,c:z}}else I={r:0,c:0};const b=xh(m,!1),y=fS(I,b);return co(y),!0}function _(m){const E=oO(m);if(E===void 0)return!1;const I=ke(Gi).cells,b=[];if(I.forEach(y=>{const x=e.getCell(y.r,y.c);x&&b.push(x)}),E===null){const{tool:y,cells:x}=$2(b,n);if(x.length)return yu(I,x,y,E),!0}else{let y=od(b,n,"different",E,!0);if(y.length)return yu(I,y,n,E),!0;if(y=od(b,n,"equal",E,!0),y.length)return yu(I,y,n,E),!0}return!1}function g(m){return m.repeat?!1:_(m.key)}const v=Dt.throttle(m=>{lo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&lo.pointerDown(m,t)},pointerMove(m){v(m)},pointerUp(m){lo.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||g(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function z2(t,e,n,r){const i=[He.N,He.NE,He.E,He.SE,He.S,He.SW,He.W,He.NW],o=new Ul(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=ke(ot),E=h.cell;if(!Gt(h.cell,a))return;let b=ke(Wt);h.event.altKey&&(b=Ne.DELETE);const y=fo(m,n,E),x=vo(h.direction);!y&&b!==Ne.DELETE?(c=Zu(n,E,x),u=Dt.uniqueId(),br(u,c,n,!0)):y&&(y[1].direction===x&&b===Ne.ADD_EDIT?([u,c]=y,pi(y[0],n)):y[1].direction===x&&b===Ne.DYNAMIC||b===Ne.DELETE?Cr(y[0],y[1],n):(u=y[0],c={...y[1],direction:x},Qt(n,y[0],c)))}function g(h){if(!rO(h))return;const m=ke(Bt);if(!m)return;const E=m.id,I=m.constraint;if(!Pi(I.toolId))return;const y=(i.indexOf(I.direction)+1)%i.length;c={...I,direction:i[y]},Qt(n,E,c)}return o.onDragStart=h=>{_(h)},o.onMove=h=>{if(!Gt(h.cell,a)){el.set(void 0);return}const E=vo(h.direction),I=Zu(n,h.cell,E),b=ke(Wt),y=ke(ot),x=fo(y,n,h.cell);if(!x&&b===Ne.DELETE){el.set(void 0);return}let T="add",M;x&&(b===Ne.DELETE||x[1].direction===E&&b===Ne.DYNAMIC)&&(T="remove",M=x[0]);const z={tool:I,match_id:M,mode:T};el.set(z)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:()=>{},keyDown:h=>{g(h)},keyUp:()=>{}}}function H2(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function W2(t,e,n,r){const i=new Ul(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null;function u(g){const v=ke(ot),h=g.cell;if(!Gt(g.cell,o))return;let E=ke(Wt);E===Ne.DYNAMIC&&g.event.altKey&&(E=Ne.DELETE);const I=vo(g.direction),b=fo(v,n,h);if(!b&&E!==Ne.DELETE)a=Qu(n,h,I),c=Dt.uniqueId(),br(c,a,n,!0);else if(b)if(b[1].directions.includes(I)&&E!==Ne.DELETE&&([c,a]=b,pi(b[0],n)),b&&E===Ne.DELETE)Cr(b[0],b[1],n);else{const y=H2(b[1].directions,I);y.length>0?(c=b[0],a={...b[1],directions:y},Qt(n,b[0],a)):Cr(b[0],b[1],n)}}return i.onDragStart=g=>{u(g)},i.onMove=g=>{if(!Gt(g.cell,o)){tl.set(void 0);return}const h=vo(g.direction),m=Qu(n,g.cell,h);if(ke(Wt)===Ne.DELETE){tl.set(void 0);return}tl.set(m)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class B2{constructor(e){pe(this,"onDragStart",null);pe(this,"onMove",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onTap",null);pe(this,"_prevCoord",null);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i||this._prevCoord&&Ze(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Nn(e,n);if(!r)return;const i=Qa(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function Y2(t,e,n,r){const i=new B2,o={nRows:e.nRows,nCols:e.nCols};function a(_){const g=ke(ot),v=_.coord;let h=ke(Wt);const m=ll(v);if(!m.every(b=>Gt(b,o)))return;let I=null;if(I=uh(g,n,m),h===Ne.DYNAMIC&&(h=I?Ne.DELETE:Ne.ADD_EDIT),I&&h===Ne.DELETE){const b=I[0];Cr(b,I[1],n)}else if(!I&&h===Ne.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",y=Vu(n,m,b),x=Dt.uniqueId();br(x,y,n,!0)}else I&&h===Ne.ADD_EDIT&&pi(I[0],n)}function c(_){const g=ke(Bt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Lo(_)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,_.key);m!==void 0&&m!==v.value&&(v=Hs(v,m),Qt(n,h,v))}return i.onDragStart=_=>{a(_)},i.onMove=_=>{if(!Gt(_.coord,o)){nl.set(void 0);return}const v=ke(Wt),h=ll(_.coord),m=(r==null?void 0:r.defaultValue)??"",E=Vu(n,h,m),I=ke(Fo);I&&(E.shape={...I});const b=ke(ot),y=uh(b,n,h);if(!y&&v===Ne.DELETE){nl.set(void 0);return}let x="add",T;y&&(v===Ne.DYNAMIC||v===Ne.DELETE)&&(x="remove",T=y[0]);const M={tool:E,match_id:T,mode:x};nl.set(M)},{pointerDown:_=>{_.button===0&&i.pointerDown(_,t)},pointerMove:_=>{i.pointerMove(_,t)},pointerUp:_=>{i.pointerUp(_,t)},keyDown:_=>{c(_)},keyUp:()=>{}}}class j2{constructor(){pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onTap",null);pe(this,"onMove",null);pe(this,"_prevCoord",null);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=Za(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i||this._prevCoord&&Ze(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Nn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function K2(t,e,n,r){const i=new j2,o={nRows:e.nRows,nCols:e.nCols};function a(_){const g=ke(ot),v=_.coord;let h=ke(Wt);const m=al(v);if(!m.every(b=>Gt(b,o)))return;let I=null;if(I=dh(g,n,v),h===Ne.DYNAMIC&&(h=I?Ne.DELETE:Ne.ADD_EDIT),I&&h===Ne.DELETE){const b=I[0];Cr(b,I[1],n)}else if(!I&&h===Ne.ADD_EDIT){const b=Ku(n,m,r==null?void 0:r.defaultValue),y=Dt.uniqueId();br(y,b,n,!0)}else I&&h===Ne.ADD_EDIT&&pi(I[0],n)}function c(_){const g=ke(Bt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Lo(_)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,_.key);m!==void 0&&m!==v.value&&(v=Hs(v,m),Qt(n,h,v))}return i.onDragStart=_=>{a(_)},i.onMove=_=>{if(!Gt(_.coord,o)){rl.set(void 0);return}const v=ke(Wt),h=al(_.coord),m=Ku(n,h,r==null?void 0:r.defaultValue),E=ke(Fo);E&&(m.shape={...E});const I=ke(ot),b=dh(I,n,_.coord);if(!b&&v===Ne.DELETE){rl.set(void 0);return}let y="add",x;b&&(v===Ne.DYNAMIC||v===Ne.DELETE)&&(y="remove",x=b[0]);const T={tool:m,match_id:x,mode:y};rl.set(T)},{pointerDown:_=>{_.button===0&&i.pointerDown(_,t)},pointerMove:_=>{i.pointerMove(_,t)},pointerUp:_=>{i.pointerUp(_,t)},keyDown:_=>{c(_)},keyUp:()=>{}}}class V2{constructor(){pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onTap",null);pe(this,"_prevType",null);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;const i=bs(r,Rt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Nn(e,n);if(!r)return;const i=bs(r,Rt.CLOSEST);if(!i||this._prevCoords&&Ze(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Jv(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Nn(e,n);if(!r)return;const i=bs(r,Rt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Ze(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function X2(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new V2;return r.onTap=o=>{const a=o.coords,c=ke(fl),u=ke(_l);if(o.type==="cell center"){if(!LR(a,n))return;const g=u.getCellMarker(a);if(g)if(g.marker==="X"){const v={...a,colorId:c,marker:"O"},h=ja(v),m=ja(g),E=Di(h,m);Qn(E)}else{const v=Eh(a),h=ja(g),m=Di(v,h);Qn(m)}else{const v={...a,colorId:c,marker:"X"},h=ja(v),m=Eh(a),E=Di(h,m);Qn(E)}}else if(o.type==="edge"){const _=u.getEdgeMarker(a);if(_){const g=mh(a),v=ph(_),h=Di(g,v);Qn(h)}else{const g={...a,colorId:c},v=ph(g),h=mh(a),m=Di(v,h);Qn(m)}}},r.onDrag=o=>{const a=o.coords,c=ke(fl);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},_=CS(u);Dr(_)}},r.onDragEnd=()=>{const o=ke(_l);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>_o(c,u)));if(a.length){const c=As(a),u=Ch(a),_=Di(c,u);Qn(_)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>_o(c,u)));if(a.length){const c=Ch(a),u=As(a),_=Di(c,u);Qn(_)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function q2(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function Z2(t,e){const n=kv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function Q2(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function J2(t){for(let e=0;;e++){const n=Q2(e);if(!t.has(n))return n}}function eT(t,e,n){const r=new Po,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,_="cells2",g=ke(Wt);function v(m){const E=ke(ot),I=m.cell;if(!Gt(m.cell,i))return;const y=nS(E,n,I);if(y?(c=y[0],o=y[1],g===xn.DYNAMIC&&(g=xn.MOVE),g===xn.MOVE&&(g=xn.MOVE,u=I,_=o.cells2.some(T=>Ze(T,I))?"cells2":"cells")):g===xn.DYNAMIC&&(g=xn.SELECT),g===xn.SELECT&&c===null){c=Dt.uniqueId();const x=rS(E,n),T=J2(x);o=q2(n,[I],T),Ys(c,o);return}else if(g===xn.SELECT&&c&&o){o=Z2(o,I),Qt(n,c,o);return}else if(g===xn.MOVE&&c&&o&&u){const x={r:I.r-u.r,c:I.c-u.c},M=(_==="cells2"?o.cells2:o.cells).map(H=>({r:H.r+x.r,c:H.c+x.c}));if(!M.every(H=>Gt(H,i)))return;_==="cells"?o={...o,cells:M}:o={...o,cells2:M},u=I,Qt(n,c,o)}}return r.onDragStart=m=>{g=ke(Wt),c=null,o=null,u=null,v(m)},r.onDrag=m=>{v(m)},r.onDragEnd=()=>{c&&o&&(g===xn.SELECT?br(c,o,n):g===xn.MOVE&&id(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==xn.SELECT&&(Kd(n,c),c=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function tT(t){if(t.type===he.SELECTION)return function(n,r,i){return P2(n,r,i)};if(t.type===he.SINGLE_CELL){let e=function(r,i,o){return x2(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_ARROW){let e=function(r,i,o){return z2(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return W2(r,i,o,n)};const n=t;return e}else if(t.type===he.EDGE){let e=function(r,i,o){return Y2(r,i,o,n)};const n=t;return e}else if(t.type===he.CORNER){let e=function(r,i,o){return K2(r,i,o,n)};const n=t;return e}else if(t.type===he.LINE){let e=function(r,i,o){return p2(r,i,o,n)};const n=t;return e}else if(t.type===he.ARROW){let e=function(r,i,o){return v2(r,i,o,n)};const n=t;return e}else if(t.type===he.CAGE){let e=function(r,i,o){return R2(r,i,o,n)};const n=t;return e}else{if(t.type===he.CLONE)return function(n,r,i){return eT(n,r,i)};if(t.type===he.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return L2(r,i,o,n)};const n=t;return e}else if(t.type===he.OUTSIDE_DIRECTION){let e=function(r,i,o){return N2(r,i,o,n)};const n=t;return e}else if(t.type===he.PEN)return function(n,r){return X2(n,r)}}}const dp=nr([po,Cn,sn],([t,e,n])=>{const r=Rl(n,Pt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?tT(i):void 0;return o?o(t,e,n):void 0});Lt(Ne.DYNAMIC);Lt(Ln.DYNAMIC);const Wt=Lt(void 0);var nT=ue('<button class="form-button svelte-yu5gtn" role="switch"> </button>'),rT=ue('<div class="tool-buttons svelte-yu5gtn"></div>');function iT(t,e){ae(e,!1);const n=qe(),r=()=>ve(Wt,"$toolModeStore",n),i=A(),o=A();let a=U(e,"tool_id",8);function c(v){ho(Wt,v)}ho(Wt,Vy(a())),D(()=>X(a()),()=>{O(i,Ky(a()))}),D(()=>r(),()=>{O(o,r())}),Ie(),fe();var u=be(),_=ne(u);{var g=v=>{var h=rT();Je(h,5,()=>Object.values(d(i)),mt,(m,E)=>{var I=nT(),b=K(I,!0);P(I),te(()=>{N(I,"aria-checked",d(E)===d(o)),wt(I,"selected",d(E)===d(o)),lt(b,d(E))}),Ue("click",I,()=>c(d(E))),L(m,I)}),P(h),L(v,h)};Q(_,v=>{d(i)&&v(g)})}L(t,u),le()}var oT=ue('<div class="editor-wrapper svelte-v0t6hq"><div class="editor svelte-v0t6hq"><div class="editor-layout svelte-v0t6hq"><div class="bool-constraints-container svelte-v0t6hq"><!></div> <!> <!></div></div></div>');function sT(t,e){ae(e,!1);let n=U(e,"tool_id",8);const i=Pt[n()].negative_constraints,o=!!(i&&Object.keys(i).length>0),c=mv(n())||o;fe();var u=be(),_=ne(u);{var g=v=>{var h=oT(),m=K(h),E=K(m),I=K(E),b=K(I);{var y=M=>{var z=be(),H=ne(z);Je(H,1,()=>i,mt,(k,B)=>{l2(k,{get tool_id(){return n()},get neg_tool_id(){return d(B).toolId},get description(){return d(B).description}})}),L(M,z)};Q(b,M=>{i&&M(y)})}P(I);var x=G(I,2);iT(x,{get tool_id(){return n()}});var T=G(x,2);_2(T,{get tool_id(){return n()}}),P(E),P(m),P(h),L(v,h)};Q(_,v=>{c&&v(g)})}L(t,u),le()}var aT=ue('<button class="form-button icon header-button svelte-8ay9bc"><!></button>'),lT=ue('<div class="element-button-wrapper svelte-8ay9bc"><div class="constraints-ui svelte-8ay9bc"><div class="header svelte-8ay9bc"><div class="element-icon-container svelte-8ay9bc"></div> <div class="element-name svelte-8ay9bc"></div> <!></div> <!></div></div>');function Ou(t,e){ae(e,!1);const n=qe(),r=()=>ve(ot,"$elementsDictStore",n),i=()=>ve(sn,"$toolStore",n),o=A();let a=U(e,"tool_id",8),c=U(e,"elementHandlers",8);const u=!!c()[a()].permanent;let _=A(!1),g=a();function v(){d(_)?Br(f.DIGIT):Br(a())}function h(){xS(a());const H=r().get(a());if(!H)return;const k=r2(a()),B=i2(a(),H),re=js(k,B);Qn(re)}function m(){var re,ce;const H=(re=d(o).meta)==null?void 0:re.description,k=((ce=d(o).meta)==null?void 0:ce.usage)??jy(a());let B;return H&&H.length&&(B=H),k.length&&(B?B=B+`

`+k:B=k),B}D(()=>(X(a()),X(c())),()=>{O(o,Rl(a(),c()))}),D(()=>(X(a()),i()),()=>{O(_,a()===i())}),Ie(),fe();var E=lT(),I=K(E);wt(I,"clickable",!0);var b=K(I);te(()=>N(b,"title",m()));var y=G(K(b),2);y.textContent=g;var x=G(y,2);{var T=H=>{var k=aT(),B=K(k);ap(B),P(k),Ue("click",k,Er(h)),L(H,k)};Q(x,H=>{u||H(T)})}P(b);var M=G(b,2);{var z=H=>{sT(H,{get tool_id(){return a()}})};Q(M,H=>{d(_)&&H(z)})}P(I),P(E),te(()=>wt(I,"selected",d(_))),Ue("click",b,v),L(t,E),le()}var cT=ue("<!> <!> <!>",1);function uT(t,e){ae(e,!1);const n=qe(),r=()=>ve(ot,"$elementsDictStore",n),i=A();let o=U(e,"elementHandlers",8);const a=Ty,c=u=>{o2(u),Br(u)};D(()=>(r(),$),()=>{O(i,(u,_)=>{var h;const g=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes($.LOCAL_ELEMENT))&&!g})}),Ie(),fe(),e2(t,{title:"Elements",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return d(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{n2(u)},"panel-content":(u,_)=>{var g=cT(),v=ne(g);Ou(v,{get tool_id(){return f.GIVEN},get elementHandlers(){return o()}});var h=G(v,2);Ou(h,{get tool_id(){return f.REGIONS},get elementHandlers(){return o()}});var m=G(h,2);Je(m,1,()=>r().entries(),([E,I])=>E,(E,I)=>{let b=()=>d(I)[0];var y=be(),x=ne(y);{var T=M=>{Ou(M,{get tool_id(){return b()},get elementHandlers(){return o()}})};Q(x,M=>{Ny(b())&&M(T)})}L(E,y)}),L(u,g)}}}),le()}var dT=ue('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Au(t,e){ae(e,!1);const n=A();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),o=A(void 0);function a(m){const E=Eu(m);E&&i()&&i()(E)}D(()=>X(r()),()=>{O(n,r())}),D(()=>(d(n),Eu),()=>{ed(d(n))&&O(o,Eu(d(n)))}),Ie(),fe();var c=dT(),u=K(c);const _=ut(()=>Xv(d(n)));var g=K(u);En(g),P(u);var v=G(u,2),h=G(K(v),2);En(h),N(h,"spellcheck",!1),N(h,"maxlength",30),P(v),P(c),te(()=>{N(u,"style",`--choosen-color: ${d(o)??""}`),wt(u,"transparent",d(_))}),Jn(g,()=>d(n),m=>O(n,m)),Ue("change",g,()=>a(d(n))),Jn(h,()=>d(n),m=>O(n,m)),Ue("input",h,()=>a(d(n))),L(t,c),le()}var _T=ue('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Is(t,e){let n=U(e,"name",8);var r=_T(),i=K(r),o=K(i,!0);P(i);var a=G(i,2);Et(a,e,"default",{}),P(r),te(()=>lt(o,n())),L(t,r)}var fT=ue('<input class="control-slider svelte-1rsuho6" type="range">');function gT(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),o=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);fe();var u=fT();En(u),te(()=>{N(u,"min",n()),N(u,"max",r()),N(u,"step",o())}),Jn(u,i),Ue("change",u,()=>{a()&&a()(i())}),Ue("input",u,()=>{c()&&c()(i())}),L(t,u),le()}function ci(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),o=U(e,"max",8),a=U(e,"step",24,()=>(o()-i())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);Is(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,g)=>{gT(_,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(v){r(v)},$$legacy:!0})},$$slots:{default:!0}})}var hT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function vT(t){var e=hT();L(t,e)}var pT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function mT(t){var e=pT();L(t,e)}var ET=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function CT(t){var e=ET();L(t,e)}var bT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function IT(t){var e=bT();L(t,e)}var wT=ue('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function yT(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),o=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);fe();var c=wT(),u=K(c);En(u);var _,g=G(u,2);Et(g,e,"default",{}),P(c),te(()=>{N(c,"title",o()),wt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),ud(n,[],u,()=>(r(),i()),i),Ue("change",u,()=>a()&&a()(r())),L(t,c),le()}var OT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function AT(t){var e=OT(),n=K(e);N(n,"cx",480),N(n,"cy",-480),N(n,"rx",480),N(n,"ry",300),P(e),L(t,e)}var xT=ue('<div class="icon-wrapper svelte-18euf14"><!></div>'),LT=ue('<div class="radio-container svelte-18euf14"></div>');function NT(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),o=U(e,"updateShapeCb",8,void 0);const a=new Map([[W.CIRCLE,CT],[W.ELLIPSE,AT],[W.SQUARE,mT],[W.RECTANGLE,vT],[W.POLYGON,IT]]);fe(),Is(t,{get name(){return n()},children:(c,u)=>{var _=LT();Je(_,5,i,mt,(g,v)=>{yT(g,{get title(){return d(v)},get value(){return d(v)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(h,m)=>{var E=be(),I=ne(E);{var b=y=>{var x=xT(),T=K(x);Xh(T,()=>a.get(d(v)),(M,z)=>{z(M,{})}),P(x),L(y,x)};Q(I,y=>{a.has(d(v))&&y(b)})}L(h,E)},$$slots:{default:!0}})}),P(_),L(c,_)},$$slots:{default:!0}}),le()}var RT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function DT(t){var e=RT();L(t,e)}var ST=ue('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),TT=ue("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function kT(t,e){ae(e,!1);const n=qe(),r=()=>ve(sn,"$toolStore",n),i=()=>ve(Bt,"$currentConstraintStore",n),o=A(),a=A(),c=A();let u=A(!0),_=U(e,"elementHandlers",8);function g(b,y){const x=(b==null?void 0:b.shape)??(y?Fu(y):void 0);return bu(x),x}function v(b,y){d(c)&&(Gu(c,d(c)[b]=y),bu(d(c)))}function h(){d(a)&&(O(c,Fu(d(a))),bu(d(c)))}function m(b){return b&&[W.CIRCLE,W.SQUARE,W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[W.ELLIPSE,W.RECTANGLE].includes(b)}D(()=>(r(),X(_())),()=>{O(o,Rl(r(),_()))}),D(()=>d(o),()=>{O(a,d(o).shape)}),D(()=>(i(),d(a)),()=>{var b;O(c,g(((b=i())==null?void 0:b.constraint)??null,d(a)))}),Ie(),fe(),Ml(t,{get isOpen(){return d(u)},set isOpen(b){O(u,b)},$$slots:{"panel-header":(b,y)=>{kl(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return d(u)},set isOpen(x){O(u,x)},$$slots:{"title-icon":(x,T)=>{DT(x)}},$$legacy:!0})},"panel-content":(b,y)=>{var x=be(),T=ne(x);{var M=z=>{var H=TT(),k=ne(H);{var B=Re=>{var Oe=ST();Ue("click",Oe,h),L(Re,Oe)};Q(k,Re=>{Uy(d(a))&&Re(B)})}var re=G(k,2);{var ce=Re=>{NT(Re,{get possibleShapes(){return d(a).allowedTypes},name:"Shape",get selectedShape(){return d(c).type},updateShapeCb:Oe=>v("type",Oe)})};Q(re,Re=>{var Oe;d(a).allowedTypes&&d(a).allowedTypes.length&&((Oe=d(c))!=null&&Oe.type)&&Re(ce)})}var J=G(re,2);{var oe=Re=>{var Oe=ut(()=>d(a).n.lb??3),$e=ut(()=>d(a).n.ub??10);ci(Re,{name:"Number of Sides",get value(){return d(c).n},get min(){return d(Oe)},get max(){return d($e)},step:1,onChangeCb:ze=>v("n",ze)})};Q(J,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.n)!==void 0&&((ze=($e=d(a))==null?void 0:$e.n)!=null&&ze.editable)&&E(d(c).type)&&Re(oe)})}var we=G(J,2);{var Z=Re=>{var Oe=ut(()=>d(a).r.lb??0),$e=ut(()=>d(a).r.ub??1),ze=ut(()=>d(a).r.step??.05);ci(Re,{name:"Radius",get value(){return d(c).r},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("r",St)})};Q(we,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.r)!==void 0&&((ze=($e=d(a))==null?void 0:$e.r)!=null&&ze.editable)&&m(d(c).type)&&Re(Z)})}var Ee=G(we,2);{var me=Re=>{var Oe=ut(()=>d(a).width.lb??0),$e=ut(()=>d(a).width.ub??1),ze=ut(()=>d(a).width.step??.05);ci(Re,{name:"Width",get value(){return d(c).width},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("width",St)})};Q(Ee,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.width)!==void 0&&((ze=($e=d(a))==null?void 0:$e.width)!=null&&ze.editable)&&I(d(c).type)&&Re(me)})}var ye=G(Ee,2);{var Se=Re=>{var Oe=ut(()=>d(a).height.lb??0),$e=ut(()=>d(a).height.ub??1),ze=ut(()=>d(a).height.step??.05);ci(Re,{name:"Height",get value(){return d(c).height},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("height",St)})};Q(ye,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.height)!==void 0&&((ze=($e=d(a))==null?void 0:$e.height)!=null&&ze.editable)&&I(d(c).type)&&Re(Se)})}var Le=G(ye,2);{var Ge=Re=>{var Oe=ut(()=>d(a).angle.lb??0),$e=ut(()=>d(a).angle.ub??360),ze=ut(()=>d(a).angle.step??15);ci(Re,{name:"Angle",get value(){return d(c).angle},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("angle",St)})};Q(Le,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.angle)!==void 0&&((ze=($e=d(a))==null?void 0:$e.angle)!=null&&ze.editable)&&Re(Ge)})}var Fe=G(Le,2);{var _t=Re=>{var Oe=ut(()=>d(a).inset.lb??0),$e=ut(()=>d(a).inset.ub??.5),ze=ut(()=>d(a).inset.step??.01);ci(Re,{name:"Inset",get value(){return d(c).inset},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("inset",St)})};Q(Fe,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.inset)!==void 0&&((ze=($e=d(a))==null?void 0:$e.inset)!=null&&ze.editable)&&Re(_t)})}var vt=G(Fe,2);{var zt=Re=>{Is(Re,{name:"Stroke",children:(Oe,$e)=>{Au(Oe,{get value(){return d(c).stroke},onChangeCb:ze=>v("stroke",ze)})},$$slots:{default:!0}})};Q(vt,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.stroke)!==void 0&&((ze=($e=d(a))==null?void 0:$e.stroke)!=null&&ze.editable)&&Re(zt)})}var st=G(vt,2);{var Ot=Re=>{var Oe=ut(()=>d(a).strokeWidth.lb??0),$e=ut(()=>d(a).strokeWidth.ub??.8),ze=ut(()=>d(a).strokeWidth.step??.01);ci(Re,{name:"Stroke Width",get value(){return d(c).strokeWidth},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("strokeWidth",St)})};Q(st,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.strokeWidth)!==void 0&&((ze=($e=d(a))==null?void 0:$e.strokeWidth)!=null&&ze.editable)&&Re(Ot)})}var Yt=G(st,2);{var _r=Re=>{var Oe=ut(()=>d(a).strokeDasharray.lb??0),$e=ut(()=>d(a).strokeDasharray.ub??1),ze=ut(()=>d(a).strokeDasharray.step??.01);ci(Re,{name:"Stroke Dasharray",get value(){return d(c).strokeDasharray},get min(){return d(Oe)},get max(){return d($e)},get step(){return d(ze)},onChangeCb:St=>v("strokeDasharray",St)})};Q(Yt,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.strokeDasharray)!==void 0&&((ze=($e=d(a))==null?void 0:$e.strokeDasharray)!=null&&ze.editable)&&Re(_r)})}var Wn=G(Yt,2);{var Jr=Re=>{Is(Re,{name:"Fill",children:(Oe,$e)=>{Au(Oe,{get value(){return d(c).fill},onChangeCb:ze=>v("fill",ze)})},$$slots:{default:!0}})};Q(Wn,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.fill)!==void 0&&((ze=($e=d(a))==null?void 0:$e.fill)!=null&&ze.editable)&&Re(Jr)})}var Ir=G(Wn,2);{var jt=Re=>{Is(Re,{name:"Font Color",children:(Oe,$e)=>{Au(Oe,{get value(){return d(c).fontColor},onChangeCb:ze=>v("fontColor",ze)})},$$slots:{default:!0}})};Q(Ir,Re=>{var Oe,$e,ze;((Oe=d(c))==null?void 0:Oe.fontColor)!==void 0&&((ze=($e=d(a))==null?void 0:$e.fontColor)!=null&&ze.editable)&&Re(jt)})}L(z,H)};Q(T,z=>{d(a)&&z(M)})}L(b,x)}},$$legacy:!0}),le()}var MT=ue('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function Ks(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=MT(),o=K(i),a=K(o);Et(a,e,"default",{}),P(o),P(i),te(()=>N(i,"title",r())),Ue("click",i,Er(function(...c){var u;(u=n())==null||u.apply(this,c)})),L(t,i)}var UT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function GT(t){var e=UT();L(t,e)}var FT=ue('<div class="buttons-container svelte-kc00rw"><!></div>');function Fl(t,e){var n=FT(),r=K(n);Et(r,e,"default",{}),P(n),L(t,n)}var $T=ue('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),PT=ue('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),zT=ue('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function HT(t,e){ae(e,!1);const n=qe(),r=()=>ve(qr,"$puzzleMetaStore",n),i=()=>ve(ot,"$elementsDictStore",n);let o=U(e,"showModal",12,!1),a=A(""),c=A(""),u=A(""),_=A(""),g=A("");function v(){o(!1)}function h(){const b=d(c)?m(d(c)):["Anonymous"],x={title:d(a)?d(a):"Sudoku",authors:b,ruleset:d(u),ctcYoutubeUrl:d(_),ctcUrl:d(g)};OS(x),o(!1)}function m(b){return b.split(/\s*[;]\s*/)}function E(){var M,z,H;let b="";const y=Pt,x=i();!x.get(f.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules apply.

`:b+=`Sudoku rules do not apply.

`;for(const[k,B]of x.entries()){if(k===f.SUDOKU_RULES_DO_NOT_APPLY)continue;const re=y[k],ce=((M=re.menu)==null?void 0:M.name)??re.toolId,J=(z=re.meta)==null?void 0:z.description;if(b+=`**${ce}**: ${J}

`,!!B.negative_constraints)for(const[oe,we]of Object.entries(B.negative_constraints)){if(!we)continue;const Z=(H=re.negative_constraints)==null?void 0:H.find(ye=>ye.toolId===oe);if(!Z)continue;const Ee=oe,me=Z.description;b+=` - **${Ee}**: ${me}

`}}return b.trim()}function I(){const b=E();O(u,b)}D(()=>(X(o()),r(),ul),()=>{if(!o()){const b=r().authors;O(a,r().title??""),O(c,b?ul(b,"; ","; "):""),O(u,r().ruleset??""),O(_,r().ctcYoutubeUrl??""),O(g,r().ctcUrl??"")}}),Ie(),fe(),Zr(t,{title:"Edit Puzzle Meta",get showModal(){return o()},set showModal(b){o(b)},children:(b,y)=>{var x=zT(),T=K(x);di(T,{title:"Title"});var M=G(T,2);En(M);var z=G(M,2);di(z,{title:"Authors"});var H=G(z,2);En(H);var k=G(H,2);di(k,{title:"Ruleset",children:(Z,Ee)=>{var me=$T();Ue("click",me,I),L(Z,me)},$$slots:{default:!0}});var B=G(k,2);jw(B),N(B,"rows",8);var re=G(B,2);di(re,{title:"CTC Link"});var ce=G(re,2);En(ce);var J=G(ce,2);di(J,{title:"CTC Youtube Link"});var oe=G(J,2);En(oe);var we=G(oe,2);Fl(we,{children:(Z,Ee)=>{var me=PT(),ye=ne(me),Se=G(ye,2);Ue("click",ye,h),Ue("click",Se,v),L(Z,me)},$$slots:{default:!0}}),P(x),Jn(M,()=>d(a),Z=>O(a,Z)),Jn(H,()=>d(c),Z=>O(c,Z)),Jn(B,()=>d(u),Z=>O(u,Z)),Jn(ce,()=>d(g),Z=>O(g,Z)),Jn(oe,()=>d(_),Z=>O(_,Z)),L(b,x)},$$slots:{default:!0},$$legacy:!0}),le()}var WT=ue("<!> <!>",1);function BT(t){let e=A(!1);function n(){O(e,!0)}var r=WT(),i=ne(r);Ks(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{GT(a)},$$slots:{default:!0}});var o=G(i,2);HT(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var YT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function jT(t){var e=YT();L(t,e)}var KT=ue('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function VT(t,e){ae(e,!1);let n=A(null),r=A(null);function i(){var o;(o=d(n))==null||o.click()}D(()=>(d(r),gl),()=>{if(d(r)&&d(r).length){const o=d(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),g=cS(_);console.log(g),RS(g),gl()}},a.onerror=function(){alert(a.error)}}}),Ie(),fe(),Ks(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=KT(),u=ne(c);jT(u);var _=G(u,2);Ui(_,g=>O(n,g),()=>d(n)),Iy(_,()=>d(r),g=>O(r,g)),L(o,c)},$$slots:{default:!0}}),le()}var XT=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function qT(t){var e=XT();L(t,e)}var ZT=ue('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Lh(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),o=U(e,"value",12),a=U(e,"step",24,()=>(i()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fe();var _=ZT(),g=K(_),v=K(g);P(g);var h=G(g,2);En(h),P(_),te(()=>{lt(v,`${n()??""}: ${o()??""}`),N(h,"min",r()),N(h,"max",i()),N(h,"step",a())}),Jn(h,o),Ue("change",h,()=>{c()&&c()(o())}),Ue("input",h,()=>{u()&&u()(o())}),L(t,_),le()}var QT=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),JT=ue('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function ek(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let o=A(9),a=A(9),c=A(""),u=A(Dt.range(1,10));function _(){n(!1)}function g(){gl(),NS(d(a),d(o),d(u).sort()),n(!1)}function v(E){return E.map(b=>String(b)).join(",")}function h(){const E=Math.min(Math.max(d(a),d(o)),9);O(u,Dt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}fe(),Zr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=JT(),y=K(b);Lh(y,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return d(o)},set value(k){O(o,k)},$$legacy:!0});var x=G(y,2);Lh(x,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return d(a)},set value(k){O(a,k)},$$legacy:!0});var T=G(x,2),M=ut(()=>`Allowed Digits (for the solver): ${v(d(u))}`);di(T,{get title(){return d(M)}});var z=G(T,2);En(z),te(()=>N(z,"placeholder",v(d(u))));var H=G(z,2);Fl(H,{children:(k,B)=>{var re=QT(),ce=ne(re),J=G(ce,2);Ue("click",ce,g),Ue("click",J,_),L(k,re)},$$slots:{default:!0}}),P(b),Jn(z,()=>d(c),k=>O(c,k)),Ue("input",z,()=>m(d(c))),L(E,b)},$$slots:{default:!0},$$legacy:!0}),le()}var tk=ue("<!> <!>",1);function nk(t){let e=A(!1);function n(){O(e,!0)}var r=tk(),i=ne(r);Ks(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{qT(a)},$$slots:{default:!0}});var o=G(i,2);ek(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var rk=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function ik(t){var e=rk();L(t,e)}var ok=ue('<button class="modal-button">Cancel</button>'),sk=ue('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function ak(t,e){ae(e,!1);const n=qe(),r=()=>ve(po,"$svgRefStore",n),i=()=>ve(qr,"$puzzleMetaStore",n),o=()=>ve(Bs,"$puzzleStore",n),a=A();let c=U(e,"showModal",12,!1);function u(b){const y=getComputedStyle(b);let x="";for(let T of y){const M=y.getPropertyValue(T);M&&(x+=`${T}:${M};`)}return x}function _(b){const y=b.cloneNode(!0);(y instanceof SVGElement||y instanceof HTMLElement)&&(y.style.cssText=u(b));const x=b.childNodes;for(let T=0;T<x.length;T++){const M=x[T];if(M instanceof Element){const z=_(M);y.replaceChild(z,y.childNodes[T])}}return y}function g(b){if(!b)return;const y=_(b),x=dl(i()),M=new XMLSerializer().serializeToString(y),z=new Image,H=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),k=URL.createObjectURL(H);z.onload=()=>{const B=b.getBoundingClientRect(),re=B.width,ce=B.height,J=document.createElement("canvas"),oe=window.devicePixelRatio||1;J.width=re*oe,J.height=ce*oe;const we=J.getContext("2d");we&&(we.scale(oe,oe),we.drawImage(z,0,0,re,ce),J.toBlob(Z=>{if(!Z)return;const Ee=URL.createObjectURL(Z),me=document.createElement("a");me.href=Ee,me.download=x,me.click(),URL.revokeObjectURL(Ee)}))},z.src=k}function v(b,y="download.svg"){if(!b)return;const x=_(b);let M=new XMLSerializer().serializeToString(x);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const z=new Blob([M],{type:"image/svg+xml"}),H=URL.createObjectURL(z),k=document.createElement("a");k.href=H,k.download=y,k.click(),URL.revokeObjectURL(H)}const h=b=>{const y=lS(o());return JSON.stringify(y,null,b)},m=()=>{function b(T,M,z){var H=document.createElement("a"),k=new Blob([T],{type:z});H.href=URL.createObjectURL(k),H.download=M,H.click(),URL.revokeObjectURL(H.href)}const y=h(2),x=dl(i());b(y,`${x}.json`,"text/plain")};function E(){c(!1)}const I=1;D(()=>r(),()=>{O(a,r())}),Ie(),fe(),Zr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,y)=>{var x=sk(),T=K(x),M=K(T),z=K(M),H=G(z,2),k=G(H,2);P(M);var B=G(M,2),re=G(K(B),2),ce=K(re);N(ce,"width",400*I),N(ce,"height",300*I),P(re),P(B),P(T);var J=G(T,2);Fl(J,{children:(oe,we)=>{var Z=ok();Ue("click",Z,E),L(oe,Z)},$$slots:{default:!0}}),P(x),Ue("click",z,m),Ue("click",H,()=>g(d(a))),Ue("click",k,()=>v(d(a))),L(b,x)},$$slots:{default:!0},$$legacy:!0}),le()}var lk=ue("<!> <!>",1);function ck(t){let e=A(!1);function n(){O(e,!0)}var r=lk(),i=ne(r);Ks(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{ik(a)},$$slots:{default:!0}});var o=G(i,2);ak(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var uk=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function _p(t){var e=uk();L(t,e)}var dk=ue('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),_k=ue('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Ka(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var i=_k(),o=K(i);di(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=G(o,2);Bd(a,{get isOpen(){return r()},children:(c,u)=>{var _=dk(),g=K(_);Et(g,e,"default",{}),P(_),L(c,_)},$$slots:{default:!0}}),P(i),L(t,i)}var fk=ue('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function gk(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var o=fk(),a=K(o);En(a),Mi(2),P(o),te(()=>{wt(o,"disabled",i()),vy(a,n()),a.disabled=i()}),Ue("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),L(t,o)}var hk=ue('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function ui(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),o=U(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}fe();var c=hk(),u=K(c);gk(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var _=G(u,2),g=K(_,!0);P(_),P(c),te(()=>{wt(c,"disabled",o()),lt(g,r())}),Ue("click",_,Er(a)),L(t,c),le()}var vk=ue("<!> <!>",1),pk=ue("<!> <!> <!>",1),mk=ue("<!> <!>",1),Ek=ue('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function fp(t,e){ae(e,!1);const n=qe(),r=()=>ve(jr,"$settingsStore",n),i=()=>ve(Ws,"$gameModeStore",n),o=A();let a=U(e,"showModal",12,!1);D(()=>r(),()=>{O(o,r())}),Ie(),fe(),Zr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=Ek(),g=K(_);Ka(g,{title:"General",children:(I,b)=>{ui(I,{get value(){return d(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:sy})},$$slots:{default:!0}});var v=G(g,2);Ka(v,{title:"Tools",children:(I,b)=>{var y=vk(),x=ne(y);ui(x,{get value(){return d(o).penToolActive},name:"Pen Tool",updateCb:ay});var T=G(x,2);ui(T,{disabled:!0,get value(){return d(o).letterToolActive},name:"Letter Tool",updateCb:ly}),L(I,y)},$$slots:{default:!0}});var h=G(v,2);Ka(h,{title:"Gameplay",children:(I,b)=>{var y=pk(),x=ne(y);ui(x,{name:"Check Conflicts",get value(){return d(o).checkConflicts},updateCb:cy});var T=G(x,2);ui(T,{name:"Highlight Pencilmark Conflicts",get value(){return d(o).highlightPencilmarkConflicts},updateCb:uy});var M=G(T,2);ui(M,{name:"Highlight Cells Seen By Selection",get value(){return d(o).highlightCellsSeenBySelection},updateCb:dy}),L(I,y)},$$slots:{default:!0}});var m=G(h,2);{var E=I=>{Ka(I,{title:"Setting Mode Display",children:(b,y)=>{var x=mk(),T=ne(x);ui(T,{name:"Hide Fog",get value(){return d(o).hideFog},updateCb:_y});var M=G(T,2);ui(M,{name:"Show Solution",get value(){return d(o).showSolution},updateCb:fy}),L(b,x)},$$slots:{default:!0}})};Q(m,I=>{i()===$i.SETTING&&I(E)})}P(_),L(c,_)},$$slots:{default:!0},$$legacy:!0}),le()}var Ck=ue("<!> <!>",1);function bk(t){let e=A(!1);function n(){O(e,!0)}var r=Ck(),i=ne(r);Ks(i,{title:"Settings",clickCb:n,children:(a,c)=>{_p(a)},$$slots:{default:!0}});var o=G(i,2);fp(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var Ik=ue('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function wk(t){var e=Ik(),n=K(e);nk(n);var r=G(n,2);ck(r);var i=G(r,2);VT(i,{});var o=G(i,2);BT(o);var a=G(o,2);bk(a),P(e),L(t,e)}var yk=ue('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function Ok(t,e){ae(e,!1);let n=A(!1);function r(){const i=ke(Cn),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const g=_.value;c.push(g)}o.push(c)}Wd(o)}fe(),Ml(t,{get isOpen(){return d(n)},set isOpen(i){O(n,i)},$$slots:{"panel-header":(i,o)=>{kl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return d(n)},set isOpen(a){O(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=yk();Ue("click",a,r),L(i,a)}},$$legacy:!0}),le()}const Ak={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function xk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function Lk(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function Nk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function Rk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function gp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function Dk(t,e){const n=Lk(t);if(n)return{type:"number",parsed:parseInt(n)};const r=Nk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=Rk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=xk(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=gp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var j=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(j||{});function dt(t,e){return`${e}[${t.r},${t.c}]`}function Ho(t,e){return t.map(r=>dt(r,e))}function Ce(t,e){return"["+Ho(t,e).join(",")+"]"}function xe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function bt(t){return t.map(n=>xe(n))}function Ti(t){return`constraint alldifferent([${t.join(",")}]);
`}function Mt(t,e){return t&&(t=`
% ${e}
`+t),t}function Xd(t,e){const n=[He.N,He.S,He.W,He.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function qd(t,e,n=void 0){n||(n=[He.N,He.S,He.W,He.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+bt(o).join(",")+"]";r.push(a)}return r}function Be(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const[a,c]of Object.entries(i)){const u=n(t,o,a,c);r+=u}return r}function Hn(t,e,n){let r="";const i=e.tool_id,o=n.get(i);if(o){const a=o(t,e);r+=a}return r}class Sk{constructor(e){pe(this,"model_str","");pe(this,"used_vars");pe(this,"puzzle");pe(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=Ak){const i=Dk(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];o+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];o+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const _ of c){const g=parseInt(_);Number.isNaN(g)&&!this.hasVariable(_)&&(o+=`var int: ${_};
`,this.addVariable(_))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function Tk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,_=0,g=0;for(let y=0;y<e.length;y++){const x=e[y].trim(),T=x.match(r),M=x.match(i),z=x.match(o),H=x.match(a);if(!c&&(T||M||z||H)){c={name:(T||M||z||H)[1],startLine:y,content:[e[y]],type:T?"function":M?"predicate":z?"test":"variable"},u=(x.match(/\(/g)||[]).length-(x.match(/\)/g)||[]).length,_=(x.match(/\{/g)||[]).length-(x.match(/\}/g)||[]).length,g=(x.match(/\[/g)||[]).length-(x.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[y]),u+=(x.match(/\(/g)||[]).length-(x.match(/\)/g)||[]).length,_+=(x.match(/\{/g)||[]).length-(x.match(/\}/g)||[]).length,g+=(x.match(/\[/g)||[]).length-(x.match(/\]/g)||[]).length,u===0&&_===0&&g===0&&x.endsWith(";"))){n[c.name]={...c,endLine:y};let k=c.startLine;for(;k>0&&e[k-1].trim().startsWith("%");)k-=1;n[c.name].startLine=k,c=null}}function v(y){const x=[],T=y.match(r),M=y.match(i),z=y.match(o);for(const H of Object.keys(n)){const k=n[H].type;if(k==="function"||k==="test"||k==="predicate"){if(T||M||z)continue;new RegExp(`\\b${H}\\s*\\(`,"g").test(y)&&x.push(H)}else if(k==="variable"){const B=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${H}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(y.match(B))continue;new RegExp(`\\b${H}\\b`,"g").test(y)&&x.push(H)}}return x}const h=new Set;for(const y of e)v(y).forEach(T=>h.add(T));const m=Object.values(n).filter(y=>!h.has(y.name)).map(y=>({start:y.startLine,end:y.endLine}));m.sort((y,x)=>x.start-y.start);const E=[...e];for(const y of m)E.splice(y.start,y.end-y.start+1);const I=[];let b=!1;for(const y of E)y.trim()===""?b||(I.push(y),b=!0):(I.push(y),b=!1);return I.join(`
`)}function Nh(t){let e=t,n=e.length;for(;e=Tk(e),e.length!=n;)n=e.length;return e}function hp(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function kk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const g=e.getCell(c,_);!g||g.region===null?u.push(r-1):u.push(g.region)}o.push(u)}const a=hp(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Zd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function tn(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*Qr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Vs(t,e){return[...Object.values(t)].find(i=>{const o=i.cell;if(e.c===o.c&&e.r===o.r)return i})}function vp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function pp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function Qd(t,e,n,r){const i=t.grid;let o="";if(!!!t.elementsDict.get(f.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const _ of u){const g=i.getRegion(_),v=Ce(g,r);o+=`constraint count_eq(${v}, ${n}, ${e});
`}}return o}function go(t,e,n,r){let i=vp(e,n,r);return i+=pp(e,n,r),i+=Qd(t,e,n,r),i}function Mk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),a=bt(o);let c=`
% ${i}
`;return c+=Ti(a),c}function Uk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),a=bt(o);let c=`
% ${i}
`;return c+=Ti(a),c}function Gk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),c="["+bt(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${c}) == 3;
`,u}function Fk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),c="["+bt(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${c}) == 3;
`,u}function $k(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,a]=[r.nRows,r.nCols];if(o!==a)return"";let c=`
% ${i}
`;const u=r.getPositiveDiagonal();for(const _ of u){const[g,v]=[_.r,_.c];for(let h=0;h<g;h++){const m=r.getCell(h,v),E=r.getCell(g,v+(g-h));if(!m||!E)continue;const I=xe(m),b=xe(E),x=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;c+=x}}return c}function Pk(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,a]=[r.nRows,r.nCols];if(o!==a)return"";let c=`
% ${i}
`;const u=r.getNegativeDiagonal();for(const _ of u){const[g,v]=[_.r,_.c];for(let h=0;h<g;h++){const m=r.getCell(h,v),E=r.getCell(g,v-(g-h));if(!m||!E)continue;const I=xe(m),b=xe(E),x=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;c+=x}}return c}function zk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;const a=[...r.getUsedRegions()].length;for(let c=0;c<a;c++){const u=r.getDisjointGroup(c),v=`constraint alldifferent(${`[${bt(u).join(",")}]`});
`;o+=v}return o}function Hk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getNeighboorCells(a).filter(m=>m.r+m.c>=a.r+a.c),_=xe(a),v=`[${bt(u).join(",")}]`,h=`constraint different_from_group_p(${_}, ${v});
`;o+=h}return o}function Wk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getCellsByKnightMove(a).filter(m=>m.r>=a.r||m.c>=a.c),_=xe(a),v=`[${bt(u).join(",")}]`,h=`constraint different_from_group_p(${_}, ${v});
`;o+=h}return o}function Bk(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=Mt(r,`${n}`),r}function Yk(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=Mt(r,`${n}`),r}function jk(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=Mt(r,`${n}`),r}function Kk(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=Mt(r,`${n}`),r}function Vk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[a,c]of Qr(r)){const u=xe(a),_=xe(c),g=`constraint not consecutive_p(${u}, ${_});
`;o+=g}return o}function Xk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[a,c]of Qr(r)){const u=xe(a),_=xe(c),g=`constraint not ratio_p(${u}, ${_}, 2);
`;o+=g}return o}function qk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const c=r.getRow(a.r),_=`[${bt(c).join(",")}]`,g=a.c+1,v=`constraint indexing_column_p(${_}, ${g});
`;o+=v}return o}function Zk(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=Mt(r,`${n}`),r}function Qk(t,e){const n=e.tool_id;let r="";return r+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,r=Mt(r,`${n}`),r}function Jk(t,e){const n=e.tool_id;let r="";return r+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,r=Mt(r,`${n}`),r}function eM(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;let o="";const a=n.grid.getUsedRegions();for(const c of a){const u=r.getRegion(c),_=[...new Set(u.map(v=>v.r))],g=[...new Set(u.map(v=>v.c))];for(const v of g){const h=u.filter(E=>E.c===v),m=Ce(h,j.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}for(const v of _){const h=u.filter(E=>E.r===v),m=Ce(h,j.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}}return o=Mt(o,`${i}`),o}function tM(t){const e=t.elementsDict;if(!!e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let i="";i+=`
% row constraints (digits do not repeat on rows)
`;const o=r.nRows;for(let u=0;u<o;u++){const _=r.getRow(u),g=bt(_),v=Ti(g);i+=v}i+=`
% col constraints (digits do not repeat on cols)
`;const a=r.nCols;for(let u=0;u<a;u++){const _=r.getCol(u),g=bt(_),v=Ti(g);i+=v}if(!!!e.get(f.CHAOS_CONSTRUCTION)){i+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const _ of u){const g=r.getRegion(_),v=bt(g),h=Ti(v);i+=h}}return i}function nM(t){const e=t.elementsDict,n=f.HEXED_SUDOKU;if(!!!e.get(n))return"";let i=`
% ${n}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const rM=new Map([[f.POSITIVE_DIAGONAL,Mk],[f.NEGATIVE_DIAGONAL,Uk],[f.POSITIVE_ANTIDIAGONAL,Gk],[f.NEGATIVE_ANTIDIAGONAL,Fk],[f.PARITY_MIRROR_POSITIVE_DIAGONAL,$k],[f.PARITY_MIRROR_NEGATIVE_DIAGONAL,Pk],[f.ANTIKING,Hk],[f.ANTIKNIGHT,Wk],[f.ANTI_LONG_KNIGHT,Yk],[f.ANTI_GIRAFFE,Bk],[f.DISJOINT_GROUPS,zk],[f.TANGO,jk],[f.NONCONSECUTIVE,Vk],[f.NONRATIO,Xk],[f.ANTI_ENTROPY,Kk],[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,eM],[f.GLOBAL_INDEXING_COLUMN,qk],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,Zk],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Qk],[f.YIN_YANG_FILLOMINO_PARITY,Jk]]);function iM(t,e){let n="";const r=e.tool_id,i=rM.get(r);if(i){const o=i(t,e);n+=o}return n}function mp(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return bt(r)}function Ep(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${bt(n.slice(1)).join(",")}]`}function Cp(t,e,n){let r="";const o="["+mp(t,e).join(",")+"]";for(const a of e.lines){const c=Ep(t,a);r+=`constraint ${n}(${o}, ${c});
`}return r}function bp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=Cp(t,o,n);r+=a}return r}function oM(t,e){const n=t.puzzle.grid;return bp(n,e,"arrow_p")}function sM(t,e){const n=t.puzzle.grid;return bp(n,e,"bulbous_arrow_p")}function aM(t,e,n,r){let i="";const o=mp(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${Ep(e,u)}, ${a});
`;i+=g}}return i}function lM(t,e){return Be(t,e,aM)}function cM(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=Ce(o,j.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=Ce(u.slice(1),j.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=Cp(e,r,"arrow_p"),i}function uM(t,e){return Be(t,e,cM)}const dM=new Map([[f.ARROW,oM],[f.AVERAGE_ARROW,lM],[f.BULBOUS_ARROW,sM],[f.CHAOS_CONSTRUCTION_ARROW,uM]]);function _M(t,e){return Hn(t,e,dM)}function fi(t,e){const n=tn(t,e.cells);return bt(n)}function fM(t,e,n){const i=`[${fi(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Ip(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=fM(o,a,n);r+=c}return r}function $l(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function gM(t,e,n,r){const i=t.puzzle.grid,a=`[${fi(i,n).join(",")}]`,c=n.value,u=$l(t,c,e);if(!u)return"";const _=u[1];let g=u[0];return g+=`constraint ${r}(${a}, ${_});
`,g}function Jd(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const[o,a]of Object.entries(i)){const c=gM(t,o,a,n);r+=c}return r}function hM(t,e,n,r){const i=fi(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ti(i);const c=$l(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${o}, ${u});
`,_}function vM(t,e){return Be(t,e,hM)}function pM(t,e,n,r){const i=fi(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ti(i);const c=$l(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${o}, ${u});
`,_}function mM(t,e){return Be(t,e,pM)}function EM(t,e){return Jd(t,e,"sum_cage_p")}function CM(t,e){return Ip(t,e,"parity_balance_cage_p")}function bM(t,e){return Ip(t,e,"sum_cage_look_and_say_p")}function IM(t,e){return Jd(t,e,"divisible_killer_cage_p")}function wM(t,e){return Jd(t,e,"spotlight_cage_p")}function yM(t,e,n,r){const o=`[${fi(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function OM(t,e){return Be(t,e,yM)}function AM(t,e,n,r){const o=`[${fi(e,r).join(",")}]`,a=r.value;let c="";const u=$l(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const _=r.cells,g=tn(e,_),v=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!v.includes(I)&&v.push(I)});const h=Ce(v,j.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${h});
`,c}function xM(t,e){return Be(t,e,AM)}function LM(t,e,n,r,i){const o=tn(e,r.cells),a=Ce(o,j.BOARD),c=Ce(o,j.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function wp(t,e,n,r){let i="";const o=n.constraints;if(!o)return i;for(const[a,c]of Object.entries(o)){const u=LM(t,e,a,c,r);i+=u}return i}function NM(t,e){const n=t.puzzle.grid;return wp(t,n,e,"yin_yang_antithesis_killer_cage_p")}function RM(t,e){const n=t.puzzle.grid;return wp(t,n,e,"yin_yang_breakeven_killer_cage_p")}function DM(t,e,n,r){const i=tn(e,r.cells),o=Ce(i,j.BOARD),a=Ce(i,j.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function SM(t,e){return Be(t,e,DM)}function TM(t,e,n,r){const i=tn(e,r.cells),o=Ce(i,j.BOARD),a=Ce(i,j.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function kM(t,e){return Be(t,e,TM)}function MM(t,e){let n="";const r=e.constraints;if(!r)return n;const i=Zd(Object.values(r)),o=t.puzzle.grid;for(const a of i.values())if(!(a.length<=1))for(const[c,u]of a.flatMap((_,g)=>a.slice(g+1).map(v=>[_,v]))){const g=`[${fi(o,c).join(",")}]`,h=`[${fi(o,u).join(",")}]`;n+=`constraint multisets_equal_p(${g}, ${h});
`}return n}const UM=new Map([[f.KILLER_CAGE,vM],[f.INVERTED_KILLER_CAGE,mM],[f.SUM_CAGE,EM],[f.PARITY_BALANCE_CAGE,CM],[f.SUM_CAGE_LOOK_AND_SAY,bM],[f.DIVISIBLE_KILLER_CAGE,IM],[f.SPOTLIGHT_CAGE,wM],[f.UNIQUE_DIGITS_CAGE,OM],[f.VAULTED_CAGE,xM],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,NM],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,RM],[f.DOUBLERS_KILLER_CAGE,SM],[f.NEGATORS_KILLER_CAGE,kM],[f.MULTISET_CAGE,MM]]);function GM(t,e){return Hn(t,e,UM)}function FM(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function $M(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=FM(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function PM(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;for(let _=0;_<i.length;_++){const g=i[_],v=g.cell,h=_+1,[m,E,I]=$M(o,v),b=Ce(m,j.GALAXY_REGIONS),y=Ce(E,j.GALAXY_REGIONS),x=Ce(I,j.GALAXY_REGIONS);n+=`% galaxy ${h}
`,n+=`constraint galaxy_center_p(${b}, ${y}, ${x}, ${h});
`,n+=`constraint connected_region(${j.GALAXY_REGIONS}, ${h});
`;const T=g.value;if(!T)continue;const M=parseInt(T);n+=`constraint galaxy_sum_p(${j.BOARD}, ${j.GALAXY_REGIONS}, ${M}, ${h});
`}if(!i.length)return n;const a=o.nCols*o.nRows,u=`${i.length+1}..${a}`;return n+=`
constraint order_remaining_galaxies_p(${j.GALAXY_REGIONS}, ${u});
`,n}function zM(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function HM(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=zM(t,c,n);if(!u)return"";const _=u[1];let g=u[0],v=[];if(o%1===0&&a%1===0?v=al(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(v=ll(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!v.length)return"";const h=Ce(v,j.BOARD),m=Ce(v,j.YIN_YANG);return g+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${_};
`,g}function WM(t,e){return Be(t,e,HM)}const BM=new Map([[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,WM],[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,PM]]);function YM(t,e){return Hn(t,e,BM)}function Rh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return bt(n)}function jM(t,e){const r="["+Rh(t,e.cells).join(",")+"]",o="["+Rh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}function KM(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=jM(i,o);n+=a}return n}const VM=new Map([[f.CLONE_REGION,KM]]);function XM(t,e){return Hn(t,e,VM)}function e_(t,e){const n=tn(t,e.cells);return bt(n)}function qM(t,e,n){const i=`[${e_(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function t_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=qM(t,o,n);r+=a}return r}function ZM(t,e,n,r,i,o=""){const c=`[${e_(e,r).join(",")}]`;let u=r.value;if(u||(u=o),u){const _=parseInt(u);return`constraint ${i}(${c}, ${_});
`}return""}function yp(t,e,n,r,i=""){let o="";const a=n.constraints;if(!a)return o;for(const[c,u]of Object.entries(a)){const _=ZM(t,e,c,u,r,i);o+=_}return o}function QM(t,e,n,r){const o=`[${e_(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=gp(a);if(!c)return"";let u="";for(const g of c){const v=parseInt(g);Number.isNaN(v)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${_});
`,u}function JM(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const c=QM(t,i,o,a);n+=c}return n}function e3(t,e){const n=t.puzzle.grid;return yp(t,n,e,"corner_sum_p")}function t3(t,e){const n=t.puzzle.grid;return yp(t,n,e,"corner_even_count_p")}function n3(t,e){const n=t.puzzle.grid;return t_(n,e,"corner_sum_of_three_equals_the_other_p")}function r3(t,e){const n=t.puzzle.grid;return t_(n,e,"equal_diagonal_differences_p")}function i3(t,e){const n=t.puzzle.grid;return t_(n,e,"product_square_p")}const o3=new Map([[f.QUADRUPLE,JM],[f.CORNER_SUM,e3],[f.CORNER_EVEN_COUNT,t3],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,n3],[f.PRODUCT_SQUARE,i3],[f.EQUAL_DIAGONAL_DIFFERENCES,r3]]);function s3(t,e){return Hn(t,e,o3)}function Xs(t,e,n){return[...Object.values(t)].find(o=>{const a=o.cells[0],c=o.cells[1];if(e.c===a.c&&e.r===a.r&&n.c===c.c&&n.r===c.r||e.c===c.c&&e.r===c.r&&n.c===a.c&&n.r===a.r)return o})}function Pl(t,e){const n=tn(t,e.cells);return bt(n)}function a3(t,e,n){const r=Pl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function l3(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=a3(t,o,n);r+=a}return r}function c3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function u3(t,e,n,r,i,o=""){var m;const a=Pl(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:o,g=c3(t,_,n);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint ${i}(${c}, ${u}, ${v});
`,h}function zl(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[c,u]of Object.entries(o)){const _=u3(t,a,c,u,n,r);i+=_}return i}function d3(t,e){const n=Pl(t,e),[r,i]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${i} = 5;
`:`constraint ${r} + ${i} = 10;
`}function _3(t,e){let n="";const r=e.constraints,i=t.puzzle.grid;for(const u of Object.values(r)){const _=d3(i,u);n+=_}if(!e.negative_constraints)return n;const o=!!e.negative_constraints[f.NEGATIVE_V_CONSTRAINT],a=!!e.negative_constraints[f.NEGATIVE_X_CONSTRAINT],c=!!e.negative_constraints[f.NEGATIVE_XV_CONSTRAINT];if(!o&&!a&&!c)return n;for(const[u,_]of Qr(i)){const g=Xs(r,u,_),v=xe(u),h=xe(_);if(o&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${v} + ${h} != 5;
`;n+=m}else if(a&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${v} + ${h} != 10;
`;n+=m}else if(c&&!g){const m=`constraint ${v} + ${h} != 5 /\\ (${v} + ${h} != 10);
`;n+=m}}return n}function f3(t,e){const n=t.puzzle.grid;let r=zl(t,e,"ratio_p","2");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RATIOS_GIVEN])return r;const o=e.constraints;let a=[];o&&(a=Object.values(o).map(u=>u.value).map(u=>u||"2")),a.length===0&&a.push("2");const c=[...new Set(a)];console.log("values",c),r+=`
% ${f.ALL_RATIOS_GIVEN}
`;for(const[u,_]of Qr(n)){if(Xs(o,u,_))continue;const v=xe(u),h=xe(_);for(const m of c){const E=parseInt(m),I=`constraint not ratio_p(${v}, ${h}, ${E});
`;r+=I}}return r}function g3(t,e){const n=t.puzzle.grid;let r=zl(t,e,"abs_difference","1");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_DIFFERENCES_GIVEN])return r;const o=e.constraints;let a=[];o&&(a=Object.values(o).map(u=>u.value).map(u=>u||"1")),a.length===0&&a.push("1");const c=[...new Set(a)];r+=`
% ${f.ALL_DIFFERENCES_GIVEN}
`;for(const[u,_]of Qr(n)){if(Xs(o,u,_))continue;const v=xe(u),h=xe(_);for(const m of c){const E=parseInt(m),I=`constraint abs(${v} - ${h}) != ${E};
`;r+=I}}return r}function h3(t,e){const n=Pl(t,e),[r,i]=n,o=e.value;return o==="<"?`constraint ${r} < ${i};
`:o===">"?`constraint ${r} > ${i};
`:""}function Dh(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=h3(i,o);n+=a}return n}function v3(t,e){return zl(t,e,"edge_sum_p")}function p3(t,e){return zl(t,e,"edge_modulo_p")}function m3(t,e){const n=t.puzzle.grid;return l3(n,e,"edge_factor_p")}function Op(t,e,n){const r=xe(e),i=xe(n);let o="";if(e.r==n.r){const u=t.getRow(e.r)[0];o=xe(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];o=xe(u)}return o?`xy_differences_p(${r}, ${i}, ${o});
`:""}function E3(t,e){const n=tn(t,e.cells),[r,i]=n,o=Op(t,r,i);return o.length===0?"":`constraint ${o}`}function C3(t,e){const n=e.constraints,r=t.puzzle.grid;let i="";for(const a of Object.values(n)){const c=E3(r,a);i+=c}if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_XY_DIFFERENCES_GIVEN])return i;i+=`
% ${f.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[a,c]of Qr(r)){if(Xs(n,a,c))continue;const _=Op(r,a,c);if(_.length===0)continue;const g=`constraint not ${_}`;i+=g}return i}function b3(t,e,n){const r=tn(t,e.cells),[i,o]=bt(r),a=Ho(r,j.YIN_YANG),[c,u]=a;return`constraint ${n}(${i}, ${o}, ${c}, ${u});
`}function Ap(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=b3(t,o,n);r+=a}return r}function I3(t,e){const n=t.puzzle.grid;let r=Ap(n,e,"yin_yang_kropki_p");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_KROPKI_GIVEN])return r;const o=e.constraints;r+=`
% ${f.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[a,c]of Qr(n)){if(Xs(o,a,c))continue;const _=xe(a),g=xe(c),v=dt(a,j.YIN_YANG),h=dt(c,j.YIN_YANG),m=`constraint not yin_yang_kropki_p(${_}, ${g}, ${v}, ${h});
`;r+=m}return r}function w3(t,e){const n=t.puzzle.grid;return Ap(n,e,"yin_yang_white_kropki_p")}function y3(t,e,n){const r=tn(t,e.cells),i=Ho(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function Hl(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=y3(t,o,n);r+=a}return r}function O3(t,e){const n=t.puzzle.grid;return Hl(n,e,j.UNKNOWN_REGIONS)}function A3(t,e){const n=t.puzzle.grid;return Hl(n,e,j.FILLOMINO_REGIONS)}function x3(t,e){const n=t.puzzle.grid;return Hl(n,e,j.SUGURU_REGIONS)}function L3(t,e){const n=t.puzzle.grid;return Hl(n,e,j.CAVE_SHADING)}const N3=new Map([[f.XV,_3],[f.DIFFERENCE,g3],[f.RATIO,f3],[f.EDGE_INEQUALITY,Dh],[f.ONE_WAY_DOOR,Dh],[f.EDGE_SUM,v3],[f.EDGE_MODULO,p3],[f.EDGE_FACTOR,m3],[f.XY_DIFFERENCES,C3],[f.YIN_YANG_KROPKI,I3],[f.YIN_YANG_WHITE_KROPKI,w3],[f.FILLOMINO_REGION_BORDER,A3],[f.UNKNOWN_REGION_BORDER,O3],[f.CHAOS_CONSTRUCTION_SUGURU_BORDER,x3],[f.EDGE_CAVE_ONE_OF_EACH,L3]]);function R3(t,e){return Hn(t,e,N3)}function D3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Wl(t,e,n=!1){let r=tn(t,e.cells);return n&&(r=[...new Set(r)]),bt(r)}function S3(t,e,n,r=!1){const o=`[${Wl(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function pt(t,e,n,r=!1){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const c of Object.values(o)){const u=S3(a,c,n,r);i+=u}return i}function T3(t,e,n,r,i,o=""){var h;const c=`[${Wl(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:o,_=D3(t,u,n);if(!_)return"";const g=_[1];let v=_[0];return v+=`constraint ${i}(${c}, ${g});
`,v}function cr(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[c,u]of Object.entries(o)){const _=T3(t,a,c,u,n,r);i+=_}return i}function k3(t,e,n,r=""){let o=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const u=`[${bt(o).join(",")}]`;let _=e.value;_||(_=r);const g=parseInt(_);return`constraint ${n}(${u}, ${g}, ${a});
`}function n_(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[c,u]of Object.entries(o)){const _=k3(a,u,n,r);i+=_}return i}function M3(t,e){return pt(t,e,"renban",!0)}function U3(t,e){return pt(t,e,"double_renban_p",!0)}function G3(t,e){return pt(t,e,"renrenbanban_p",!0)}function F3(t,e){return pt(t,e,"knabner_p",!0)}function $3(t,e){return pt(t,e,"renban_or_nabner_line_p",!0)}function P3(t,e){return pt(t,e,"out_of_order_consecutive_line_p")}function z3(t,e){return cr(t,e,"whispers","5")}function H3(t,e){return cr(t,e,"whispers","4")}function W3(t,e){return pt(t,e,"strictly_increasing")}function B3(t,e){return pt(t,e,"fuzzy_thermo_p")}function Y3(t,e){return pt(t,e,"increasing")}function j3(t,e){return cr(t,e,"custom_thermo_p")}function K3(t,e){return pt(t,e,"palindrome")}function V3(t,e){return cr(t,e,"sum_line_p")}function X3(t,e){return pt(t,e,"xv_line_p")}function q3(t,e){return cr(t,e,"at_least_x_line_p","10")}function Z3(t,e){return cr(t,e,"product_line_p")}function Q3(t,e){return cr(t,e,"maximum_adjacent_difference_line_p","2")}function J3(t,e){return pt(t,e,"adjacent_multiples_line_p")}function e5(t,e){return pt(t,e,"index_line_p")}function t5(t,e){return pt(t,e,"zipper_line_p")}function n5(t,e){return n_(t,e,"segmented_sum_line_p")}function r5(t,e){return pt(t,e,"segmented_sum_and_renban_line_p")}function i5(t,e){return n_(t,e,"n_consecutive_renban_line_p")}function o5(t,e){return n_(t,e,"n_consecutive_fuzzy_sum_line_p")}function s5(t,e,n){const r=tn(t,n.cells);let i="";const o=[];for(let c=0;c<r.length;c++){const u=r[c],_=t.getRow(u.r),g=Ce(_,j.BOARD),v=`cycle_${e}_${c}`;o.push(v);const h=u.c+1;i+=`var int: ${v} = cycle_order_f(${g}, ${h});
`}const a="["+o.join(",")+"]";return i+=`constraint strictly_increasing(${a});
`,i}function a5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const c=s5(i,o,a);n+=c}return n}function l5(t,e){return pt(t,e,"adjacent_differences_count_line_p")}function c5(t,e){return pt(t,e,"same_parity_line_p")}function u5(t,e){return cr(t,e,"renban_or_whispers_p","5")}function d5(t,e){return pt(t,e,"alldifferent",!0)}function _5(t,e){return pt(t,e,"repeated_digits_line_p")}function f5(t,e){return pt(t,e,"superfuzzy_arrow_p")}function g5(t,e){return pt(t,e,"ambiguous_arrow_p",!0)}function h5(t,e){return pt(t,e,"headless_arrow_p")}function v5(t,e){return cr(t,e,"unimodular_line_p","3")}function p5(t,e){return cr(t,e,"modular_line_p","3")}function m5(t,e){return cr(t,e,"modular_or_unimodular_line_p","3")}function E5(t,e){return pt(t,e,"arithmetic_sequence_line_p")}function C5(t,e){return pt(t,e,"odd_even_oscillator_line_p")}function b5(t,e){return cr(t,e,"high_low_oscillator_line_p","5")}function I5(t,e){return pt(t,e,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function w5(t,e){return pt(t,e,"look_and_say_line_p",!0)}function y5(t,e){const n=tn(t,e.cells);function r(_){const g=[];let v=null;for(const h of _)h.r!=v?(g.push([h]),v=h.r):g[g.length-1].push(h);return g}const i=r(n);if(i.length<2)return"";const o=i[0],c=`[${bt(o).join(",")}]`;let u="";for(let _=1;_<i.length;_++){const g=i[_],h=`[${bt(g).join(",")}]`;u+=`constraint sum(${h}) == sum(${c});
`}return u}function O5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=y5(i,o);n+=a}return n}function A5(t,e){return pt(t,e,"between_line_p")}function x5(t,e){return pt(t,e,"tightrope_line_p")}function L5(t,e){return pt(t,e,"double_arrow_p")}function N5(t,e){return pt(t,e,"split_peas_p")}function R5(t,e){return pt(t,e,"parity_count_line_p")}function D5(t,e){return pt(t,e,"product_of_ends_equals_sum_of_line_p")}function xp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function S5(t,e,n,r){let i="";const o=tn(e,r.cells),a=xp(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const g=`constraint sum(${Ce(u,j.BOARD)}) == ${c};
`;i+=g}return i}function T5(t,e){return Be(t,e,S5)}function k5(t,e,n,r){return`constraint entropic_line_p(${`[${Wl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function M5(t,e){return Be(t,e,k5)}function U5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Wl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function G5(t,e){return Be(t,e,U5)}function F5(t,e){return pt(t,e,"peapods_p")}function $5(t,e,n,r,i=""){const o=t.puzzle.grid,a=tn(o,n.cells),c=Ce(a,j.BOARD),u=Ce(a,j.YIN_YANG);let _=n.value;_||(_=i);const g=parseInt(_);return`constraint ${r}(${c}, ${u}, ${g});
`}function Lp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;for(const[a,c]of Object.entries(o)){const u=$5(t,a,c,n,r);i+=u}return i}function P5(t,e){return Lp(t,e,"yin_yang_shaded_whispers_line_p","5")}function z5(t,e){return Lp(t,e,"yin_yang_unshaded_modular_line_p","3")}function H5(t,e,n){const r=tn(t,e.cells),i=Ce(r,j.BOARD),o=Ce(r,j.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function r_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=H5(o,a,n);r+=c}return r}function W5(t,e){return r_(t,e,"yin_yang_unshaded_entropic_line_p")}function B5(t,e){return r_(t,e,"yin_yang_indexing_line_coloring_p")}function Y5(t,e){const n=t.grid,i=t.elementsDict.get(f.YIN_YANG_REGION_SUM_LINE);if(!i||!i.constraints)return"";let o=`
% ${e}
`;for(const a of Object.values(i.constraints)){const u=a.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),_=Ce(u,j.YIN_YANG);o+=`constraint count_unique_values(${_}) >= 2;
`}return o}function j5(t,e){let n=r_(t,e,"yin_yang_region_sum_line_p");return e.negative_constraints&&!!e.negative_constraints[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(n+=Y5(t.puzzle,f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),n}function K5(t,e,n){const r=t.puzzle.grid,i=tn(r,e.cells),o=Ce(i,j.VALUES_GRID);return`constraint ${n}(${o});
`}function i_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=K5(t,o,n);r+=a}return r}function V5(t,e){return i_(t,e,"between_line_p")}function X5(t,e){return i_(t,e,"double_arrow_p")}function q5(t,e){return i_(t,e,"strictly_increasing")}function Z5(t,e,n,r){const i=tn(e,r.cells),o=xp(i);if(o.sort((_,g)=>g.length-_.length),o.length<=1)return"";let a="";const c=o[0],u=Ce(c,j.VALUES_GRID);for(const _ of o.slice(1)){const g=Ce(_,j.VALUES_GRID),v=`constraint subset_p(${u}, ${g});
`;a+=v}return a}function Q5(t,e){return Be(t,e,Z5)}const J5=new Map([[f.THERMOMETER,W3],[f.FUZZY_THERMOMETER,B3],[f.SLOW_THERMOMETER,Y3],[f.CUSTOM_THERMOMETER,j3],[f.RENBAN_LINE,M3],[f.DOUBLE_RENBAN_LINE,U3],[f.RENRENBANBAN_LINE,G3],[f.NABNER_LINE,F3],[f.WHISPERS_LINE,z3],[f.DUTCH_WHISPERS,H3],[f.RENBAN_OR_WHISPERS_LINE,u5],[f.RENBAN_OR_NABNER_LINE,$3],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,P3],[f.N_CONSECUTIVE_RENBAN_LINE,i5],[f.PALINDROME,K3],[f.SUM_LINE,V3],[f.PRODUCT_LINE,Z3],[f.XV_LINE,X3],[f.AT_LEAST_X_LINE,q3],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,Q3],[f.SAME_PARITY_LINE,c5],[f.ADJACENT_MULTIPLES_LINE,J3],[f.ADJACENT_DIFFERENCES_COUNT_LINE,l5],[f.LOOK_AND_SAY_LINE,w5],[f.ROW_SUM_LINE,O5],[f.INDEX_LINE,e5],[f.ZIPPER_LINE,t5],[f.SEGMENTED_SUM_LINE,n5],[f.SEGMENTED_SUM_AND_RENBAN_LINE,r5],[f.N_CONSECUTIVE_FUZZY_SUM_LINE,o5],[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,I5],[f.SUPERFUZZY_ARROW,f5],[f.AMBIGUOUS_ARROW,g5],[f.HEADLESS_ARROW,h5],[f.ARITHMETIC_SEQUENCE_LINE,E5],[f.ODD_EVEN_OSCILLATOR_LINE,C5],[f.HIGH_LOW_OSCILLATOR_LINE,b5],[f.UNIQUE_VALUES_LINE,d5],[f.REPEATED_DIGITS_LINE,_5],[f.UNIMODULAR_LINE,v5],[f.MODULAR_LINE,p5],[f.MODULAR_OR_UNIMODULAR_LINE,m5],[f.REGION_SUM_LINE,T5],[f.ENTROPIC_LINE,M5],[f.ENTROPIC_OR_MODULAR_LINE,G5],[f.ROW_CYCLE_THERMOMETER,a5],[f.PEAPODS,F5],[f.BETWEEN_LINE,A5],[f.TIGHTROPE_LINE,x5],[f.DOUBLE_ARROW_LINE,L5],[f.SPLIT_PEAS,N5],[f.PARITY_COUNT_LINE,R5],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,D5],[f.DOUBLERS_BETWEEN_LINE,V5],[f.DOUBLERS_DOUBLE_ARROW_LINE,X5],[f.DOUBLERS_THERMOMETER,q5],[f.INDEXER_CELLS_REGION_SUBSET_LINE,Q5],[f.YIN_YANG_SHADED_WHISPERS_LINE,P5],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,W5],[f.YIN_YANG_UNSHADED_MODULAR_LINE,z5],[f.YIN_YANG_REGION_SUM_LINE,j5],[f.YIN_YANG_INDEXING_LINE_COLORING,B5]]);function eU(t,e){return Hn(t,e,J5)}function Bl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return bt(i)}function Wo(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function tU(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${Bl(e,n).join(",")}]`,u=n.value,_=Wo(t,u,i,o);if(!_)return"";const g=_[1];let v=_[0];return v+=`constraint ${r}(${c}, ${g});
`,v}function ur(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=tU(t,o,a,n);r+=c}return r}function nU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Bl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,g=Math.min(..._),v=Math.max(..._),h=Wo(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${g}, ${v});
`,E}function rU(t,e){return Be(t,e,nU)}function iU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Bl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,g=Math.min(..._),v=Math.max(..._),h=Wo(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${g}, ${v});
`,E+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function oU(t,e){return Be(t,e,iU)}function sU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Bl(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,g=Wo(t,_,i,o);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint x_index_p(${c}, ${u}, ${v});
`,h}function aU(t,e){return Be(t,e,sU)}function lU(t,e){return ur(t,e,"x_sum_p")}function cU(t,e){return ur(t,e,"shortsighted_x_sum_p")}function uU(t,e){return ur(t,e,"broken_x_sum_p")}function dU(t,e){return ur(t,e,"shifted_x_sum_p")}function _U(t,e){return ur(t,e,"skyscrapers_p")}function fU(t,e){return ur(t,e,"x_sum_skyscrapers_p")}function gU(t,e){return ur(t,e,"battlefield_p")}function hU(t,e){return ur(t,e,"rising_streak_p")}function vU(t,e){return ur(t,e,"outside_consecutive_sum_p")}function pU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ce(a,j.BOARD),u=Ce(a,j.CELL_CENTER_LOOP),_=r.value;if(_){const g=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${g});
`}return""}function mU(t,e){return Be(t,e,pU)}function EU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ce(c,j.BOARD),_=Ce(c,j.UNKNOWN_REGIONS),g=r.value,v=Wo(t,g,i,o);if(!v)return"";const h=v[1];let m=v[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${h});
`,m}function CU(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const c=EU(t,i,o,a);n+=c}return n}function bU(t,e){return ur(t,e,"little_killer_sum_p")}function IU(t,e){return ur(t,e,"little_killer_product_p")}function wU(t,e){return ur(t,e,"x_omit_little_killer_sum_p")}function yU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ce(a,j.BOARD),u=Ce(a,j.YIN_YANG),_=r.value;if(_){const g=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${g});
`}return""}function OU(t,e){return Be(t,e,yU)}function AU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ce(a,j.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}function xU(t,e){return Be(t,e,AU)}function LU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ce(c,j.PENTOMINO_REGIONS),_=r.value,g=Wo(t,_,i,o);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint pentomino_border_count_p(${u}, ${v});
`,h}function NU(t,e){return Be(t,e,LU)}const RU=new Map([[f.SANDWICH_SUM,rU],[f.X_SUM,lU],[f.SHORTSIGHTED_X_SUM,cU],[f.BROKEN_X_SUM,uU],[f.SHIFTED_X_SUM,dU],[f.SKYSCRAPERS,_U],[f.X_SUM_SKYSCRAPERS,fU],[f.X_INDEX,aU],[f.BATTLEFIELD,gU],[f.SANDWICH_SUM_XOR_X_SUM,oU],[f.RISING_STREAK,hU],[f.OUTSIDE_CONSECUTIVE_SUM,vU],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,OU],[f.LOOPWICHES,mU],[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,CU],[f.PENTOMINO_BORDER_COUNT,NU],[f.LITTLE_KILLER_SUM,bU],[f.LITTLE_KILLER_PRODUCT,IU],[f.X_OMIT_LITTLE_KILLER_SUM,wU],[f.NEGATORS_LITTLE_KILLER_SUM,xU]]);function DU(t,e){return Hn(t,e,RU)}function Np(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=n(o,a);r+=c}return r}function SU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=Ce(o,j.SASHIGANE),c=Ce(o,j.SASHIGANE_BENDS),u=xe(r),_=dt(r,j.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function TU(t,e){return Np(t,e,SU)}function kU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+bt(o).join(",")+"]",u=Ce(o,j.CELL_CENTER_LOOP),_=xe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}function MU(t,e){return Np(t,e,kU)}const UU=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,TU],[f.THERMO_SIGHTLINE_LOOP_ARROW,MU]]);function GU(t,e){return Hn(t,e,UU)}function FU(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i);return`constraint ${n}(${o});
`}function Rp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=FU(o,a,n);r+=c}return r}const $U={allow_var:!0,allow_interval:!0,allow_int_list:!1};function o_(t,e,n,r=$U){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function PU(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=xe(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function Dp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const c of Object.values(o)){const u=PU(a,c,n,r);i+=u}return i}function Yl(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=xe(o),u=Xd(t,o).map(v=>Ce(v,n)),_=dt(o,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function s_(t,e,n,r){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const c of Object.values(o)){const u=Yl(a,c,n,r);i+=u}return i}function zU(t,e){return Rp(t,e,"odd_p")}function HU(t,e){return Rp(t,e,"even_p")}function WU(t,e){return Dp(t,e,"low_digit_p","5")}function BU(t,e){return Dp(t,e,"high_digit_p","5")}function YU(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),a=t.getNeighboorCells(i),c=Ce(a,j.BOARD);return`constraint ${n}(${c}) == ${o};
`}function Sp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=YU(o,a,n);r+=c}return r}function jU(t,e){return Sp(t,e,"odd_count")}function KU(t,e){return Sp(t,e,"even_count")}function VU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getNeighboorCells(o);c.push(o);const u=Ce(c,j.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function XU(t,e){return Be(t,e,VU)}function qU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${Ce(c,j.BOARD)}, ${a});
`}function ZU(t,e){return Be(t,e,qU)}function QU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${Ce(c,j.BOARD)}, ${a});
`}function JU(t,e){return Be(t,e,QU)}function eG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=Ce(a,j.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function tG(t,e){let n=Be(t,e,eG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_COLUMN_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_COLUMN_GIVEN}
`;for(const a of o.getAllCells()){if(Vs(i,a))continue;const u=o.getRow(a.r),_=Ce(u,j.BOARD),g=a.c+1,v=`constraint not indexing_column_p(${_}, ${g});
`;n+=v}return n}function nG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=Ce(a,j.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function rG(t,e){let n=Be(t,e,nG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_ROW_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_ROW_GIVEN}
`;for(const a of o.getAllCells()){if(Vs(i,a))continue;const u=o.getCol(a.c),_=Ce(u,j.BOARD),g=a.r+1,v=`constraint not indexing_column_p(${_}, ${g});
`;n+=v}return n}function iG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=o.r+1,u=o.c+1;if(o.region!==null){const g=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${g};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function oG(t,e){return Be(t,e,iG)}function sG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const g=xe(a),v=xe(c),h=xe(u),m=xe(_);return`constraint groups_opposite_parity_p([${g},${v}], [${h},${m}]);
`}function aG(t,e){return Be(t,e,sG)}function lG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),[a,c,u,_]=qd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${_});
`}function a_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=lG(o,a,n);r+=c}return r}function cG(t,e){return a_(t,e,"is_watchtower_p")}function uG(t,e){return a_(t,e,"is_not_watchtower_p")}function dG(t,e){return a_(t,e,"farsight_p")}function _G(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),[c,u,_,g]=qd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${g}, 9);
`}function fG(t,e){let n=Be(t,e,_G);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RADARS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_RADARS_GIVEN}
`;for(const a of o.getAllCells()){if(Vs(i,a))continue;const u=xe(a),[_,g,v,h]=qd(o,a),m=`constraint not radar_p(${u}, ${_}, ${g}, ${v}, ${h}, 9);
`;n+=m}return n}function gG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getRow(o.r),u=e.getCol(o.c),_=Ce(c,j.BOARD),g=Ce(u,j.BOARD),[v,h]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${_}, ${g}, ${v}, ${h}, ${a});
`}function hG(t,e){return Be(t,e,gG)}function Tp(t,e,n){const r=e.constraints,i=Object.values(r);let o="";const a=i.map(u=>u.cell),c=new Set(a.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of i){const _=u.cell,g=t.getCell(_.r,_.c);if(!g)continue;const v=xe(g),h=t.getOrthogonallyAdjacentCells(g).filter(I=>!c.has(I)),m=Ce(h,j.BOARD),E=`constraint ${n}(${m}, ${v});
`;o+=E}return o}function vG(t,e){const n=t.puzzle.grid;return Tp(n,e,"maximum_p")}function pG(t,e){const n=t.puzzle.grid;return Tp(n,e,"minimum_p")}function mG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(g=>g.cell),c=new Set(a.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),_=`${bt([...c]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${_}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}function EG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(m=>m.cell),c=new Set(a.map(m=>n.getCell(m.r,m.c)).filter(m=>!!m)),u=n.getAllCells().filter(m=>!c.has(m)),g=`${bt([...c]).join(`,
	`)}`,h=`${bt([...u]).join(`,
	`)}`;return o+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,o+=`array[int] of var int: not_reverse_counting_circles = [
	${h}
];
`,o+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,o}function CG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(h=>h.cell),c=new Set(a.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),_=`${bt([...c]).join(`,
	`)}`,v=`${Ho([...c],j.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${j.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${_}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${j.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const h of n.getAllCells()){if(c.has(h))continue;const m=dt(h,j.COUNTING_CIRCLES_COLORS);o+=`constraint ${m} == 0;
`}for(const h of i){const m=h.cell,E=n.getCell(m.r,m.c);if(!E)continue;const I=xe(E),b=dt(E,j.COUNTING_CIRCLES_COLORS),y=h.value;y?o+=`constraint ${b} == ${y};
`:o+=`constraint ${b} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${I}, ${b}) == ${I};
`}return o+=`
`,o}function bG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(g=>g.cell),c=new Set(a.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),_=`${bt([...c]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${_}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function IG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=xe(i),c=Xd(t,i).map(_=>Ce(_,j.BOARD));return`constraint ${n}(${c.join(", ")}, ${o});
`}function kp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=IG(t,o,n);r+=a}return r}function wG(t,e){const n=t.puzzle.grid;return kp(n,e,"seen_even_count_p")}function yG(t,e){const n=t.puzzle.grid;return kp(n,e,"seen_odd_count_p")}function OG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getCellsByKnightMove(o),u=Ce(c,j.BOARD),_=r.value??"5",g=o_(t,_,n);if(!g)return"";let v="";const h=g[1];return v+=g[0],v+=`constraint cell_knights_whisper_p(${a}, ${u}, ${h});
`,v}function AG(t,e){return Be(t,e,OG)}function xG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${Ce(u,j.YIN_YANG)}, ${a});
`}function LG(t,e){return Be(t,e,xG)}function NG(t,e){return s_(t,e,j.YIN_YANG,"yin_yang_seen_unshaded_p")}function RG(t,e){return s_(t,e,j.YIN_YANG,"yin_yang_seen_shaded_p")}function DG(t,e){return s_(t,e,j.YIN_YANG,"yin_yang_seen_same_shade_p")}function SG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=dt(o,j.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),_=Ce(u,j.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function TG(t,e){return Be(t,e,SG)}function kG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getNeighboorCells(o);return`constraint count(${Ce(c,j.YIN_YANG)}, 1) == ${a};
`}function MG(t,e){return Be(t,e,kG)}function UG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),_=e.getCol(o.c),g=Ce(u,j.TWO_CONTIGUOUS_REGIONS),v=Ce(_,j.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${v}, ${a}, ${c});
`}function GG(t,e){return Be(t,e,UG)}function FG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getRow(o.r),u=e.getCol(o.c),_=Ce(c,j.UNKNOWN_REGIONS),g=Ce(u,j.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${g}, ${a});
`}function $G(t,e){return Be(t,e,FG)}function PG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=dt(o,j.NURIMISAKI),c=e.getOrthogonallyAdjacentCells(o);let _=`constraint nurimisaki_unshaded_endpoint_p(${Ce(c,j.NURIMISAKI)}, ${a});
`;return _+=Yl(e,r,j.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function zG(t,e){let n=Be(t,e,PG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const a of o.getAllCells()){if(Vs(i,a))continue;const u=dt(a,j.NURIMISAKI),_=o.getOrthogonallyAdjacentCells(a),v=`constraint not nurimisaki_unshaded_endpoint_p(${Ce(_,j.NURIMISAKI)}, ${u});
`;n+=v}return n}function HG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=dt(o,j.SASHIGANE),u=dt(o,j.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function WG(t,e){return Be(t,e,HG)}function BG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=dt(o,j.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function YG(t,e){return Be(t,e,BG)}function jG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${dt(o,j.CELL_CENTER_LOOP)} == 1;
`:""}function KG(t,e){return Be(t,e,jG)}function VG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${dt(o,j.CELL_CENTER_LOOP)} == 0;
`:""}function XG(t,e){return Be(t,e,VG)}function qG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${Ce(u,j.CELL_CENTER_LOOP)}) == ${a};
`}function ZG(t,e){return Be(t,e,qG)}function QG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=dt(o,j.CAVE_SHADING),u=Xd(e,o),_=[];for(const v of u){const h=Ce(v,j.CAVE_SHADING);_.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function JG(t,e){return Be(t,e,QG)}function eF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=xe(o),g=dt(o,j.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const v=e.getNeighboorCells(o),h=Ce(v,j.BOARD),m=Ce(v,j.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(o),I=Ce(E,j.BOARD),b=Ce(E,j.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const y=[He.NE,He.NW,He.SE,He.SW],x=[];for(const z of y)e.getCellsInDirection(o.r,o.c,z).forEach(k=>x.push(k));const T=Ce(x,j.BOARD),M=Ce(x,j.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${M}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function tF(t,e){return Be(t,e,eF)}function nF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=xe(o),g=dt(o,j.UNKNOWN_REGIONS),v=e.getOrthogonallyAdjacentCells(o),h=Ce(v,j.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${g}) >= ${c};
`;const m=[He.N,He.S,He.E,He.W],E=[];for(const I of m){const b=e.getCellsInDirection(o.r,o.c,I);if(!b.length)continue;const y=Ce(b,j.BOARD),x=Ce(b,j.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,M=`in_arrow_${n}_${I}[1]`;E.push(M),u+=`array[index_set(${y})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${y}, ${x}, ${T}, ${_}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function rF(t,e){return Be(t,e,nF)}function iF(t,e,n,r){return Yl(e,r,j.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function oF(t,e){return Be(t,e,iF)}function sF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function aF(t,e){return Be(t,e,sF)}function lF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function cF(t,e){return Be(t,e,lF)}function uF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${dt(o,j.CONNECT_FOUR)});
`:""}function dF(t,e){return Be(t,e,uF)}function _F(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${dt(o,j.CONNECT_FOUR)});
`:""}function fF(t,e){return Be(t,e,_F)}function gF(t,e){let n="",r=0;const i=e.constraints,o=t.puzzle.grid;for(const[a,c]of Object.entries(i)){const u=c.cell,_=o.getCell(u.r,u.c);if(!_)continue;const g=c.value;if(!g)continue;const v=o_(t,g,a);if(!v)continue;const h=v[1];n+=v[0];const m=dt(_,j.NURIKABE_REGIONS);n+=`constraint nurikabe_island_product_of_sum_and_size_p(${j.BOARD}, ${j.NURIKABE_REGIONS}, ${m}, ${h});
`,r+=1}return n+=`constraint count_unique_values(array1d(${j.NURIKABE_REGIONS})) == ${r+1};
`,n}function hF(t,e,n,r){return Yl(e,r,j.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function vF(t,e){return Be(t,e,hF)}function pF(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=xe(o),c=dt(o,j.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${j.NURIKABE_REGIONS}, ${c}, ${a});
`}function mF(t,e){return Be(t,e,pF)}function EF(t,e){let n="";const r=e.constraints,i=Zd(Object.values(r)),o=t.puzzle.grid;for(const _ of i.values())if(!(_.length<=1))for(const[g,v]of _.flatMap((h,m)=>_.slice(m+1).map(E=>[h,E]))){const h=g.cell,m=v.cell,E=o.getCell(h.r,h.c),I=o.getCell(m.r,m.c);if(!E||!I)continue;const b=dt(E,j.BOARD),y=dt(I,j.BOARD);n+=`constraint ${b} == ${y};
`}const c=[...i.values()].map(_=>_[0].cell).map(_=>o.getCell(_.r,_.c)).filter(_=>_!==void 0),u=Ce(c,j.BOARD);return n+=`constraint alldifferent(${u});
`,n}function CF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(v=>v.cell),c=new Set(a.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),_=`${Ho([...c],j.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_size_clues = [
	${_}
];
`,o+=`constraint alldifferent(shikaku_region_size_clues);
`;for(const v of Object.values(r)){const h=v.cell,m=n.getCell(h.r,h.c);if(!m)continue;const E=xe(m),I=dt(m,j.SHIKAKU_REGIONS),b=dt(m,j.SHIKAKU_WIDTH),y=dt(m,j.SHIKAKU_HEIGHT);o+=`constraint shikaku_region_size_p(${j.SHIKAKU_REGIONS}, ${I}, ${E}, ${b}, ${y});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${j.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`),o}function bF(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(h=>h.cell),c=new Set(a.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),_=`${Ho([...c],j.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_sum_clues = [
	${_}
];
`,o+=`constraint alldifferent(shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[h,m]of Object.entries(r)){const E=m.cell,I=n.getCell(E.r,E.c);if(!I)continue;const b=dt(I,j.SHIKAKU_REGIONS),y=m.value??"",x=o_(t,y,h,g);if(!x)continue;const T=x[1];o+=x[0],o+=`constraint shikaku_region_sum_p(${j.BOARD}, ${j.SHIKAKU_REGIONS}, ${b}, ${T});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${j.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`),o}const IF=new Map([[f.ODD,zU],[f.EVEN,HU],[f.LOW_DIGIT,WU],[f.HIGH_DIGIT,BU],[f.ODD_MINESWEEPER,jU],[f.EVEN_MINESWEEPER,KU],[f.DIAGONALLY_ADJACENT_SUM,JU],[f.ORTHOGONAL_SUM,ZU],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,XU],[f.FRIENDLY_CELL,oG],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,aG],[f.WATCHTOWER,cG],[f.NOT_WATCHTOWER,uG],[f.FARSIGHT,dG],[f.RADAR,fG],[f.INDEXING_COLUMN,tG],[f.INDEXING_ROW,rG],[f.SANDWICH_ROW_COL_COUNT,hG],[f.SEEN_EVEN_COUNT,wG],[f.SEEN_ODD_COUNT,yG],[f.CELL_KNIGHT_WHISPERS,AG],[f.YIN_YANG_MINESWEEPER,LG],[f.YIN_YANG_SEEN_UNSHADED_CELLS,NG],[f.YIN_YANG_SEEN_SHADED_CELLS,RG],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,DG],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,TG],[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,MG],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,GG],[f.SEEN_REGION_BORDERS_COUNT,$G],[f.NURIMISAKI_UNSHADED_ENDPOINTS,zG],[f.NURIKABE_SEEN_WATERWAY_CELLS,vF],[f.NURIKABE_ISLAND_SIZE_CELL,mF],[f.SASHIGANE_BEND_REGION_COUNT,WG],[f.SASHIGANE_REGION_SUM,YG],[f.CELL_ON_THE_LOOP,KG],[f.CELL_NOT_ON_THE_LOOP,XG],[f.COUNT_LOOP_NEIGHBOUR_CELLS,ZG],[f.CAVE_CLUE,JG],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,tF],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,rF],[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,oF],[f.DIRECTED_PATH_START,aF],[f.DIRECTED_PATH_END,cF],[f.CONENCT_FOUR_RED,dF],[f.CONNECT_FOUR_YELLOW,fF],[f.MAXIMUM,vG],[f.MINIMUM,pG],[f.COUNTING_CIRCLES,mG],[f.REVERSE_COUNTING_CIRCLES,EG],[f.COLORED_COUNTING_CIRCLES,CG],[f.UNIQUE_CELLS,bG],[f.SHIKAKU_REGION_SIZE,CF],[f.SHIKAKU_REGION_SUM,bF],[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,gF],[f.TELEPORT,EF]]);function wF(t,e){return Hn(t,e,IF)}function dr(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const c=n(o,a);r+=c}return r}function yF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.UNKNOWN_REGIONS),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g),h=Ce(v,j.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(g=>`count_different(${g}, ${o})`).join(" + ")} == ${i};
`}function OF(t,e){return dr(t,e,yF)}function AF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.UNKNOWN_REGIONS),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g),h=Ce(v,j.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(g=>`count_uninterrupted(${g}, ${o})`).join(" + ")} + 1 == ${i};
`}function xF(t,e){return dr(t,e,AF)}function LF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=Ce(_,j.BOARD),v=Ce(_,j.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${g}, ${v}) == ${i};
`}return c}function NF(t,e){return dr(t,e,LF)}function RF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=Ce(u,j.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function DF(t,e){let n=dr(t,e,RF);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const a of o.getAllCells()){const c=Vs(i,a),u=c?c.directions:[],_=xe(a),g=[He.E,He.N,He.S,He.W];for(const v of g){if(u.includes(v))continue;const h=o.getCellsInDirection(a.r,a.c,v),m=Ce(h,j.YIN_YANG);n+=`constraint count(${m}, 1) != ${_};
`}}return n}function SF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.YIN_YANG),a=e.directions,c=[];for(const _ of a){const g=t.getCellsInDirection(r.r,r.c,_),v=Ce(g,j.YIN_YANG),h=Ce(g,j.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${v}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function TF(t,e){return dr(t,e,SF)}function kF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),v=`count(${Ce(_,j.NURIKABE_SHADING)}, 1)`;a.push(v)}return`constraint ${a.join(" + ")} = ${i};
`}function MF(t,e){return dr(t,e,kF)}function UF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),v=`count_loop_vars_f(${Ce(_,j.CELL_CENTER_LOOP)})`;a.push(v)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function GF(t,e){return dr(t,e,UF)}function FF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const g=t.getCellsInDirection(r.r,r.c,_),h=`count(${Ce(g,j.GALAXY_REGIONS)}, ${o})`;c.push(h)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function $F(t,e){return dr(t,e,FF)}function PF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),g="["+bt(u).join(",")+"]";a+=`constraint hot_arrows_p(${g}, ${i});
`}return a}function zF(t,e){return dr(t,e,PF)}function HF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=Ce(u,j.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function WF(t,e){return dr(t,e,HF)}function BF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.CONNECT_FOUR),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g);c.push(...v)}return c.length===0?"":`constraint count(${Ce(c,j.CONNECT_FOUR)}, ${o}) == ${i};
`}function YF(t,e){return dr(t,e,BF)}function jF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=xe(r),o=dt(r,j.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=Ce(_,j.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${g});
`}return c}function KF(t,e){return dr(t,e,jF)}const VF=new Map([[f.HOT_ARROWS,zF],[f.COLD_ARROWS,WF],[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,OF],[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,xF],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,NF],[f.LOOP_CELL_COUNT_ARROWS,GF],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,TF],[f.YIN_YANG_COUNT_SHADED_CELLS,DF],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,$F],[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,MF],[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,YF],[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,KF]]);function XF(t,e){return Hn(t,e,VF)}function qF(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=Mt(e,`${t}`),e}function ZF(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=Mt(e,`${t}`),e}function QF(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=Mt(e,`${t}`),e}function JF(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=Mt(e,`${t}`),e}function e$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=j.LITS_SHADING,a=j.LITS_REGIONS,c=j.CAVE_REGIONS;let u=`
% ${e}
`;u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of _){const v=r.getRegion(g),m=`constraint count_eq(${Ce(v,j.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function t$(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=j.CAVE_SHADING,a=j.BOARD_REGIONS,c="renban_cave_regions";let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${j.BOARD}, ${c});
`,u}function n$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(I=>I.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.CAVE_SHADING,c=j.CAVE_REGIONS;let u="";if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint cave_p(${a}, ${c});
`,!e.negative_constraints)return u;const _=!!e.negative_constraints[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED],g=!!e.negative_constraints[f.CAVE_CELLS_ARE_ODD],v=!!e.negative_constraints[f.CAVE_WALLS_ARE_EVEN],h=!!e.negative_constraints[f.CAVE_LITS],m=!!e.negative_constraints[f.RENBAN_CAVES],E=!!e.negative_constraints[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE];return _&&(u+=QF(f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),g&&(u+=qF(f.CAVE_CELLS_ARE_ODD)),v&&(u+=ZF(f.CAVE_WALLS_ARE_EVEN)),h&&(u+=e$(t,f.CAVE_LITS)),m&&(u+=t$(t,f.RENBAN_CAVES)),E&&(u+=JF(f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),u}function r$(t){let e="";return e+=`constraint connect_four_draw_p(${j.CONNECT_FOUR});
`,e=Mt(e,`${t}`),e}function i$(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${j.BOARD}, ${j.CONNECT_FOUR});
`,e=Mt(e,`${t}`),e}function o$(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${j.BOARD}, ${j.CONNECT_FOUR}, 3);
`,e=Mt(e,`${t}`),e}function s$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(v=>v.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a="connect_four";let c=`
% ${i}
`;if(c+=`% 1 - Red, 2 - Yellow
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${a};
`,!e.negative_constraints)return c;const u=!!e.negative_constraints[f.CONNECT_FOUR_DRAW],_=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],g=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(c+=r$(f.CONNECT_FOUR_DRAW)),_&&(c+=o$(f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),g&&(c+=i$(f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),c}function a$(t){let e="";return e+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,e=Mt(e,`${t}`),e}function l$(t){let e="";return e+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,e=Mt(e,`${t}`),e}function c$(t){let e="";return e+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,e=Mt(e,`${t}`),e}function u$(t){let e="";return e+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,e=Mt(e,`${t}`),e}function d$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.GALAXY_REGIONS,c=j.GALAXY_SIZES,u=r.nCols*r.nRows;let _=`
% ${i}
`;if(_+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${a};
`,_+=`constraint galaxy_restrict_numbering_p(${a});
`,_+=`array[0..${u}] of var 0..${u}: ${c};
`,_+=`constraint galaxy_sizes_p(${a}, ${c});
`,_+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${c});
`,_+=`constraint gallaxy_connected_regions_p(${a});
`,!e.negative_constraints)return _;const g=!!e.negative_constraints[f.EVERY_CELL_BELONGS_TO_A_GALAXY],v=!!e.negative_constraints[f.TWO_SYMMETRIC_GALAXIES],h=!!e.negative_constraints[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS];return g&&(_+=a$(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),h&&(_+=l$(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),v&&(_+=c$(f.TWO_SYMMETRIC_GALAXIES)),m&&(_+=u$(f.TWO_SYMMETRIC_GALAXIES)),_}function _$(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function f$(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function g$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function h$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function v$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(m=>m.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=e.negative_constraints,c=a?!!a[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${i}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${c});
`,!a)return u;const _=!!a[f.NOT_LOOP_SIZED_REGIONS],g=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],v=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],h=!!a[f.MODULAR_LOOP];return g&&(u+=f$(f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),v&&(u+=_$(f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),_&&(u+=g$(t,f.NOT_LOOP_SIZED_REGIONS)),h&&(u+=h$(t,f.MODULAR_LOOP)),u}function p$(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=Mt(e,`${t}`),e}function m$(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=Mt(e,`${t}`),e}function E$(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=Mt(e,`${t}`),e}function C$(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=Mt(e,`${t}`),e}function b$(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=Mt(n,`${e}`),n}function Xt(t,e,n){return t*n+e+1}function I$(t){const e=t.grid;function n(c,u){const _=[],g=Xt(c.r,c.c,e.nCols);for(let v=-1;v<=1;v++){const h=Xt(u.r+v,u.c,e.nCols);_.push([g,h]),_.push([h,g])}return _}function r(c,u){const _=[],g=Xt(c.r,c.c,e.nCols);for(let v=-1;v<=1;v++){const h=Xt(u.r,u.c+v,e.nCols);_.push([g,h]),_.push([h,g])}return _}const i=[],a=t.elementsDict.get(f.MAZE_WALL);if(!a||!a.constraints)return i;for(const c of Object.values(a.constraints)){const u=c.coords;if(u.length===1){const _=u[0],v=al(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=Xt(v[0].r,v[0].c,e.nCols),m=Xt(v[3].r,v[3].c,e.nCols);i.push([h,m]),i.push([m,h]),h=Xt(v[1].r,v[1].c,e.nCols),m=Xt(v[2].r,v[2].c,e.nCols),i.push([h,m]),i.push([m,h])}for(let _=0;_<u.length-1;_++){const g=xR(Tv(u[_],u[_+1]),.5),h=ll(g).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function w$(t){const e=t.grid,n=[],i=t.elementsDict.get(f.ONE_WAY_DOOR);if(!i||!i.constraints)return n;for(const o of Object.values(i.constraints)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,g=o.value,v=Xt(u.r,u.c,e.nCols),h=Xt(_.r,_.c,e.nCols);g==="<"?n.push([v,h]):g===">"&&n.push([h,v])}return n}function y$(t){const e=[];for(const n of t.getAllCells()){const r=Xt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Xt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function O$(t){const e=t.grid,n=[],r=[],o=t.elementsDict.get(f.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const _=Zd(a);let g=1;for(const v of _.values())if(!(v.length<=1)){for(const[h,m]of v.flatMap((E,I)=>v.slice(I+1).map(b=>[E,b]))){const E=Xt(h.cell.r,h.cell.c,e.nCols),I=Xt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[h.cell.r][h.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const h of v){const m=Xt(h.cell.r,h.cell.c,e.nCols);r.push(m)}g++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function A$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(k=>k.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a="",c=y$(r);const u=I$(n),_=w$(n);u.push(..._);const g=n.elementsDict;c=c.filter(k=>!u.some(B=>k[0]===B[0]&&k[1]===B[1]));const v=O$(n);if(v.tp_edges.length){c.push(...v.tp_edges);const k=hp(v.tp_arr),B=v.tp_count;a+=`
% teleports grid
`,a+=`array[ROW_IDXS, COL_IDXS] of 0..${B}: teleports = array2d(ROW_IDXS, COL_IDXS, ${k});
`}t.edge_list=c,console.log(c);const h=r.nRows*r.nCols,m=c.length,E="["+c.map(k=>k[0]).join(",")+"]",I="["+c.map(k=>k[1]).join(",")+"]";a+=`array[int] of int: dpath_from = ${E};
`,a+=`array[int] of int: dpath_to = ${I};
`,a+=`var 1..${h}: dpath_source;
`,a+=`var 1..${h}: dpath_target;
`,a+=`array[1..${h}] of var bool: dpath_ns;
`,a+=`array[1..${m}] of var bool: dpath_es;
`,a+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,a+=`
% Direct Path no crossings
`;for(let k=0;k<r.nRows-1;k++)for(let B=0;B<r.nCols-1;B++){const re=r.getCell(k,B),ce=r.getCell(k,B+1),J=r.getCell(k+1,B),oe=r.getCell(k+1,B+1);if(!re||!ce||!J||!oe)continue;const we=Xt(re.r,re.c,r.nCols),Z=Xt(ce.r,ce.c,r.nCols),Ee=Xt(J.r,J.c,r.nCols),me=Xt(oe.r,oe.c,r.nCols),Se=[[we,me],[me,we],[Z,Ee],[Ee,Z]].map(Le=>c.findIndex(Ge=>Le[0]===Ge[0]&&Le[1]===Ge[1])).filter(Le=>Le!==-1);if(Se.length){const Le=Se.map(Ge=>`dpath_es[${Ge+1}]`).join(",");a+=`constraint sum([${Le}]) <= 1;
`}}const b=g.get(f.TELEPORT),y=b?Object.values(b):[];if(v.tp_count>0){a+=`
% At most 1 edge per teleporter
`;for(const k of y){const B=k.cell,re=r.getCell(B.r,B.c);if(!re)continue;const ce=r.getNeighboorCells(re),J=Xt(re.r,re.c,r.nCols),oe=[];for(const Z of ce){if(y.some(ye=>ye.cell.r===Z.r&&ye.cell.c==Z.c&&ye.value===k.value))continue;const me=Xt(Z.r,Z.c,r.nCols);oe.push([J,me]),oe.push([me,J])}const we=oe.map(Z=>c.findIndex(Ee=>Z[0]===Ee[0]&&Z[1]===Ee[1])).filter(Z=>Z!==-1);if(we.length){const Z=we.map(Ee=>`dpath_es[${Ee+1}]`).join(",");a+=`constraint sum([${Z}]) <= 1;
`}}}if(!e.negative_constraints)return a;const x=!!e.negative_constraints[f.DIRECTED_PATH_IS_PARITY_LINE],T=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],M=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],z=!!e.negative_constraints[f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],H=!!e.negative_constraints[f.DIRECTED_PATH_IS_REGION_SUM_LINE];return M&&(a+=p$(f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),x&&(a+=C$(f.DIRECTED_PATH_IS_PARITY_LINE)),T&&(a+=m$(f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),z&&(a+=b$(n,f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),H&&(a+=E$(f.DIRECTED_PATH_IS_REGION_SUM_LINE)),a}function x$(t,e){const n=t.grid;let r=`
% ${e}
`;const i=j.YIN_YANG;for(const[o,a]of Qr(n)){const c=xe(o),u=xe(a),_=`${i}[${o.r},${o.c}]`,g=`${i}[${a.r},${a.c}]`,v=`constraint (${_} == 1 /\\ ${g} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=v}return r}function L$(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=dt(i,j.BOARD),c=dt(i,j.YIN_YANG),u=Ce(o,j.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=Mt(n,`${e}`),n}function N$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;if(a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,!e.negative_constraints)return a;const c=!!e.negative_constraints[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED],u=!!e.negative_constraints[f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS];return c&&(a+=L$(n,f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),u&&(a+=x$(n,f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),a}function R$(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Qr(n)){const a=xe(i),c=xe(o),u=dt(i,j.NURIMISAKI),_=dt(o,j.NURIMISAKI),g=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=g}return r}function D$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(a+=R$(n,f.NURIMISAKI_PATH_GERMAN_WHISPERS)),a}function S$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function T$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(a+=S$(t,f.NURIKABE_NO_REPEATS_IN_ISLANDS)),a}function k$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function M$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows),u="["+Dt.range(1,a+1).join(",")+"]";let _="";return _+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: unknown_regions;
`,_+=`constraint chaos_construction_p(unknown_regions, ${u}, ${a});
`,_+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,_}function U$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(v=>v.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const a=j.UNKNOWN_REGIONS,c=Math.max(r.nCols,r.nRows),_="["+Dt.range(1,c+1).join(",")+"]";let g=`
% ${i}
`;return g+=`array[ROW_IDXS, COL_IDXS] of var 1..${c}: ${a};
`,g+=`constraint numbered_chaos_construction_p(${j.BOARD}, ${a}, ${_}, ${c});
`,g+=`constraint no_repeats_in_unknown_regions_p(${j.BOARD}, ${a}, ALLOWED_DIGITS, ${_});
`,g}function G$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function F$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.FILLOMINO_REGIONS;let c=`
% ${i}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint fillomino_p(board, ${a});
`,c}function $$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${j.BOARD}, ${j.SHIKAKU_REGIONS});
`,o}function P$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(v=>v.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.SHIKAKU_REGIONS;let c=`
% ${i}
`;const u=r.nRows,_=r.nCols;return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${j.SHIKAKU_HEIGHT};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..${_}: ${j.SHIKAKU_WIDTH};
`,c+=`constraint shikaku_p(${a}, ${j.SHIKAKU_WIDTH}, ${j.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_NO_REPEATS_IN_REGION]&&(c+=$$(t,f.SHIKAKU_NO_REPEATS_IN_REGION)),c}function z$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function H$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function W$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=12,c=j.PENTOMINO_REGIONS;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: ${c};
`,u+=`constraint pentomino_tilling_p(${c});
`,u}function B$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.LITS_SHADING,c=j.LITS_REGIONS,u=j.LITS_GRID,_=j.BOARD_REGIONS,g=[...r.getUsedRegions()];g.sort();const v=Math.min(...g),h=Math.max(...g);let m=`
% ${i}
`;m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${c};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..${g.length}: ${u};
`,m+=`constraint lits_shading_p(${a});
`,m+=`constraint lits_shading_ids_p(${a}, ${c});
`,m+=`constraint lits_region_and_ids_p(${_}, ${c});
`,m+=`constraint lits_tetromino_shapes_p(${c});
`,m+=`constraint lits_grid_p(${u}, ${_}, ${a}, ${v}..${h});
`,g.length&&(m+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const E of g){const I=r.getRegion(E),y=`constraint count_eq(${Ce(I,j.LITS_SHADING)}, 1, 4);
`;m+=y}return m}function Y$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.NORINORI_SHADING;let c=`
% ${i}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`constraint norinori_p(${j.BOARD_REGIONS}, ${a});
`,r.getUsedRegions().size&&(c+=`
% Exactly 2 shaded cells per region (known regions)
`),c+=Qd(n,2,1,j.NORINORI_SHADING),c}function j$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.NORINORI_SHADING,c=j.STAR_BATTLE;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${c};
`,u+=pp(2,1,c),u+=vp(2,1,c),u+=Qd(n,1,1,c),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${c});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${a}, ${c});
`,u}function K$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.LITS_SHADING,c=j.STAR_BATTLE,u=j.LITS_WHITE_BLACK_STAR_BATTLE;let _=`
% ${i}
`;return _+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${c};
`,_+=go(n,2,1,j.STAR_BATTLE),_+=`
% Star battle stars can't touch orthogonally or diagonally
`,_+=`constraint star_battle_no_touching_p(${c});
`,_+=`
`,_+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,_+=`
% 1 white star per row, column, region
`,_+=go(n,1,1,j.LITS_WHITE_BLACK_STAR_BATTLE),_+=`
% 1 black star per row, column, region
`,_+=go(n,1,2,j.LITS_WHITE_BLACK_STAR_BATTLE),_+=`constraint black_and_white_star_battle_p(${c}, ${u});
`,_+=`constraint lits_black_and_white_star_battle_p(${a}, ${u});
`,_}function V$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.SUGURU_REGIONS;let c=`
% ${i}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint chaos_construction_suguru_p(board, ${a});
`,c}const X$=new Map([[f.CAVE,n$],[f.CONNECT_FOUR,s$],[f.GALAXIES,d$],[f.CELL_CENTER_LOOP_NO_TOUCHING,v$],[f.MAZE_DIRECTED_PATH,A$],[f.YIN_YANG,N$],[f.NURIMISAKI,D$],[f.NURIKABE,T$],[f.SHIKAKU,P$],[f.PENTOMINO_TILLING,W$],[f.CHAOS_CONSTRUCTION,M$],[f.NUMBERED_CHAOS_CONSTRUCTION,U$],[f.CHAOS_CONSTRUCTION_SUGURU,V$],[f.TWO_CONTIGUOUS_REGIONS,k$],[f.NORINORI,Y$],[f.NORINORI_STAR_BATTLE,j$],[f.SASHIGANE,G$],[f.LITS,B$],[f.LITS_BLACK_WHITE_STAR_BATTLE,K$],[f.FILLOMINO,F$],[f.NEXUS,z$],[f.GOLDILOCKS_ZONE,H$]]);function q$(t,e){let n="";const r=e.tool_id,i=X$.get(r);if(i){const o=i(t,e);n+=o}return n}function Z$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=go(n,1,!0,j.DOUBLERS),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function Q$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let c=`
% ${i}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,c+=go(n,1,!0,j.NEGATORS),c+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,c+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,c}function J$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=j.INDEXER_CELLS_GRID;let c=`
% ${i}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,c+=go(n,2,!0,a),c+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,c+=`constraint indexer_cells_p(board, ${a}, values_grid);
`,c}function e8(t,e,n,r){const i=r.value;return i?`constraint forbidden_adjacent_sum_p(board, ${parseInt(i)});
`:""}function t8(t,e){return Be(t,e,e8)}function n8(t,e,n,r){const i=r.value;return i?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(i)});
`:""}function r8(t,e){return Be(t,e,n8)}function i8(t,e,n,r){const i=r.value;return i?`constraint forbidden_knight_sum_p(board, ${parseInt(i)});
`:""}function o8(t,e){return Be(t,e,i8)}function s8(t,e,n,r){const i=r.value;if(!i)return"";const o=parseInt(i),a=[...e.getUsedRegions()];a.sort();const c=a.length;return`constraint lits_max_tetromino_sum_p(${j.BOARD}, ${j.LITS_GRID}, ${o}, 0..${c});
`}function a8(t,e){return Be(t,e,s8)}const l8=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,t8],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,r8],[f.FORBIDDEN_KNIGHT_SUM,o8],[f.LITS_MAX_TETROMINO_SUM,a8]]);function c8(t,e){return Hn(t,e,l8)}const u8=new Map([[f.DOUBLERS,Z$],[f.NEGATORS,Q$],[f.INDEXER_CELLS,J$]]),d8=[q$,_8,YM,wF,GU,XF,R3,s3,eU,_M,GM,DU,XM,c8,iM];function _8(t,e){return Hn(t,e,u8)}function f8(t,e){let n="";const r=t.elementsDict;for(const[i,o]of r.entries())for(const a of d8){let c=a(e,o);c=Mt(c,`${i}`),n+=c}return n}function g8(){return`
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

`}function h8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${xe(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Mp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new Sk(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(g8());let _=`1..${Math.max(o,a)}`;const g=t.elementsDict,v=!!g.get(f.FILLOMINO),h=!!g.get(f.HEXED_SUDOKU);return v?_=`1..${c}`:h?r=[...Dt.range(1,16)]:r&&(_="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${_};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),kk(i,n),i.add(h8(t)),i.add(tM(t)),i.add(nM(t)),i.add(f8(t,i)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Sh=encodeURIComponent("4.4.2");let xr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const ki=[];let xu;function Es(){if(!xu){const e=`importScripts(${JSON.stringify(xr.workerURL)});`;xu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(xu);t.postMessage({wasmURL:xr.wasmURL?xr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Sh}`,xr.workerURL).toString(),dataURL:xr.dataURL?xr.dataURL.toString():new URL(`./minizinc.data?version=${Sh}`,xr.workerURL).toString()}),ki.push({worker:t,runCount:0})}function Up(){for(;ki.length<xr.numWorkers;)Es()}async function v8(t){if(xr={...xr,...t},ki.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Up(),await Promise.race(ki.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class l_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new l_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Up();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=ki.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?ki.push({worker:o,runCount:a}):(o.terminate(),Es()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?ki.push({worker:o,runCount:a}):(o.terminate(),Es()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);Es();let c={},u=!1,_=null;return a.onmessage=g=>{if(c[g.data.type])for(const v of c[g.data.type])v(g.data);switch(g.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,v){c[g]?c[g].add(v):c[g]=new Set([v])},off(g,v){c[g]&&c[g].delete(v)},then(g,v){const h=m=>{if(m.code===0)g(m.outputFiles[i]);else{const E=_?{message:_.message,...m}:m;if(!v)throw E;v(E)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Es();let o=null,a={},c=!1,u=null,_={},g="UNKNOWN";return i.onmessage=v=>{if(a[v.data.type])for(const h of a[v.data.type])h(v.data);switch(v.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=v.data);break;case"statistics":_={..._,...v.data.statistics};break;case"solution":u=v.data,g="SATISFIED";break;case"status":g=v.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const v of a.exit)v({type:"exit",code:null});a={}}},on(v,h){a[v]?a[v].add(h):a[v]=new Set([h])},off(v,h){a[v]&&a[v].delete(h)},then(v,h){const m=E=>{if(E.code===0)v({status:g,solution:u,statistics:_});else{const I=o?{message:o.message,...E}:E;if(!h)throw I;h(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var p8=ue('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function m8(t,e){ae(e,!1);const n=qe(),r=()=>ve(qr,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function o(v,h,m){var E=document.createElement("a"),I=new Blob([v],{type:m});E.href=URL.createObjectURL(I),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function a(){const v=ke(Bs);return Mp(v).model_str}function c(){const v=a();navigator.clipboard.writeText(v)}function u(){const v=a(),h=Nh(v);navigator.clipboard.writeText(h)}function _(){const v=dl(r()),h=a();o(h,`${v}.mzn`,"text/plain")}function g(){const v=dl(r()),h=a(),m=Nh(h);o(m,`${v}.mzn`,"text/plain")}fe(),Zr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(v){i(v)},children:(v,h)=>{var m=p8(),E=K(m),I=G(E,2),b=G(I,2),y=G(b,2),x=G(y,2),T=G(K(x));N(T,"href","https://play.minizinc.dev/"),Mi(),P(x),P(m),Ue("click",E,c),Ue("click",I,u),Ue("click",b,_),Ue("click",y,g),L(v,m)},$$slots:{default:!0},$$legacy:!0}),le()}function Bo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const g=Number(c[u]),v=n.get(g);v!==void 0&&(r.push(_),i.push([v]))}}const o=Gl(r,i);mo(o)}function E8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];i.push(E),a(h,m,t[h][m])}function a(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,i[i.length-1].push([h,m]),a(h+1,m,E),a(h-1,m,E),a(h,m+1,E),a(h,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,I]of h)for(const[b,y]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=E+b,T=I+y;if(m.some(([M,z])=>M===x&&z===T))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(c[h].add(m),c[m].add(h));const _=[1,4,7,9],g=new Array(i.length).fill(0);function v(h,m){for(const E of c[h])if(g[E]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of _)if(v(h,m)){g[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,E]of i[h])o[m][E]=g[h];return o}function C8(t,e){const n=e.grid,i=!!e.elementsDict.get(f.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const a=[],c=[];for(let _=0;_<o.length;_++){const g=o[_];for(let v=0;v<g.length;v++){const h=n.getCell(_,v);if(!h||h.given||i&&!h.given&&h.value===null)continue;const m=g[v];a.push(h),c.push(m)}}const u=up(a,c);mo(u)}function b8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Bo(o,e,r);return}}}function I8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Bo(o,e,r);return}}}function w8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const g=c[u];i.push([g])}}const o=Gl(r,i);mo(o)}function y8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Bo(n,e,new Map([[0,4],[1,7],[2,9]]))}function O8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Bo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function A8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Bo(n,e,new Map([[1,7],[2,4],[3,9]]))}function x8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Bo(n,e,new Map([[1,7],[2,8]]))}function L8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<i.length;g++){const v=i[g];for(let h=0;h<v.length-1;h++){const m=e.getCell(g,h),E=e.getCell(g,h+1);if(!m||!E)continue;const I=v[h],b=v[h+1];if(I===b)continue;const y={colorId:c,p1:{r:g,c:h+1},p2:{r:g+1,c:h+1}};u.push(y)}}for(let g=0;g<a;g++)for(let v=0;v<o-1;v++){const h=e.getCell(v,g),m=e.getCell(v+1,g);if(!h||!m)continue;const E=i[v][g],I=i[v+1][g];if(E===I)continue;const b={colorId:c,p1:{r:v+1,c:g},p2:{r:v+1,c:g+1}};u.push(b)}const _=As(u);Dr(_);return}}function N8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const g=e.getCell(c,_);if(g)for(const v of e.getOrthogonallyAdjacentCells(g)){if(!v||!(v.r>g.r||v.c>g.c))continue;const h=i[g.r][g.c],m=i[v.r][v.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:v.r+.5,c:v.c+.5}};o.push(E)}}}const a=As(o);Dr(a);return}}function R8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=E8(i);if(!o)return;const a=[],c=[];for(let _=0;_<o.length;_++){const g=o[_];for(let v=0;v<g.length;v++){const h=e.getCell(_,v);if(!h)continue;a.push(h);const m=g[v];c.push([m])}}const u=Gl(a,c);mo(u);return}}function D8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const g=e.getCell(c,_);if(!g)continue;const v=i[g.r][g.c];if(v===0)continue;const m={colorId:v===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};o.push(m)}}const a=ES(o);Dr(a);return}}function S8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[g,v]=_,[h,m]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols],[E,I]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols];if(!$s({r:h,c:m},{r:E,c:I}))continue;const x={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(x)}const a=As(o);Dr(a)}function T8(t,e){const n=e.puzzle,r=n.grid;Dr(Pd()),C8(t,n),w8(t,r),L8(t,r),y8(t,r),O8(t,r),N8(t,r),I8(t,r),R8(t,r),b8(t,r),D8(t,r),A8(t,r),S8(t,e),x8(t,r)}function k8(){const{subscribe:t,set:e}=Lt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var M8=ue('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function U8(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bs,"$puzzleStore",n),i=()=>ve(Cn,"$gridStore",n),o=()=>ve(y,"$timer",n),a=A(),c=A(),u=A(),_=A();let g=A(!0),v=A(!1),h=A(null),m=A(100),E=A("100"),I=A(null),b=A("IDLE");const y=k8();function x(B){return B===null?"":String(B)}function T(B){const re=Math.floor(B/6e4),ce=Math.floor(B%6e4/1e3),J=Math.floor(B%1e3/100),oe=ce.toString().padStart(2,"0");return`${re}:${oe}.${J}`}function M(){O(v,!0)}function z(B){const re=parseInt(B);typeof re=="number"&&re>=1&&O(m,re)}async function H(){O(I,0),O(b,"SOLVING...");const B=new l_;ip();const re=Mp(d(a));B.addFile("test.mzn",re.model_str),y.reset(),y.start(),O(h,B.solve({options:{solver:"chuffed","num-solutions":d(m)}})),d(h).on("solution",ce=>{const J=ce.output.json;ce.type==="solution"&&d(I)!==null&&O(I,d(I)+1),T8(J,re)}),d(h).on("error",ce=>{O(u,"Solve"),O(b,"ERROR"),console.log(ce.message),y.stop(),d(h)&&d(h).cancel()}),d(h).on("warning",ce=>{O(b,"WARNING"),console.log(ce.message)}),d(h).then(ce=>{O(b,ce.status),O(u,"Solve"),y.stop()})}function k(){d(h)===null||!d(h).isRunning()?H():d(h)!==null&&d(h).isRunning()&&(O(b,"IDLE"),O(u,"Solve"),y.stop(),d(h).cancel())}D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(c,i())}),D(()=>{},()=>{O(u,"Solve")}),D(()=>o(),()=>{O(_,o())}),D(()=>d(h),()=>{d(h)&&(d(h)!==null&&d(h).isRunning()?O(u,"Stop"):O(u,"Solve"))}),Ie(),fe(),Ml(t,{get isOpen(){return d(g)},set isOpen(B){O(g,B)},$$slots:{"panel-header":(B,re)=>{kl(B,{slot:"panel-header",title:"Solver",get isOpen(){return d(g)},set isOpen(ce){O(g,ce)},$$legacy:!0})},"panel-content":(B,re)=>{var ce=M8(),J=ne(ce),oe=G(J,2);m8(oe,{get showModal(){return d(v)},set showModal(st){O(v,st)},$$legacy:!0});var we=G(oe,2),Z=K(we,!0);P(we);var Ee=G(we,2),me=K(Ee,!0);P(Ee);var ye=G(Ee,2),Se=K(ye);En(Se),N(Se,"min",1),N(Se,"max",200),N(Se,"step",1),P(ye);var Le=G(ye,2),Ge=K(Le,!0);te(()=>lt(Ge,`Solution Count: ${x(d(I))}`)),P(Le);var Fe=G(Le,2),_t=K(Fe,!0);te(()=>lt(_t,`Elapsed Time: ${T(d(_))}`)),P(Fe);var vt=G(Fe,2),zt=K(vt,!0);P(vt),te(()=>{lt(Z,d(u)),lt(me,`Max. Solutions: ${d(m)}`),lt(zt,`Status: ${d(b)}`)}),Ue("click",J,M),Ue("click",we,k),Jn(Se,()=>d(E),st=>O(E,st)),Ue("input",Se,()=>z(d(E))),L(B,ce)}},$$legacy:!0}),le()}var G8=ue('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function F8(t){var e=G8(),n=K(e);wk(n);var r=G(n,2),i=K(r);U8(i,{});var o=G(i,2);uT(o,{elementHandlers:Pt});var a=G(o,2);kT(a,{elementHandlers:Pt});var c=G(a,2);Ok(c,{}),P(r),P(e),L(t,e)}var $8=ee('<path class="cursor svelte-zsq70u"></path>');function P8(t,e){ae(e,!1);const n=qe(),r=()=>ve(sn,"$toolStore",n),i=()=>ve(Gi,"$selectionStore",n),o=A(),a=A(),c=.25;function u(g){if(!g)return"";const[v,h]=[g.c,g.r];return`M${v},${h}L${v+c},${h}L${v},${h+c}Z`}D(()=>r(),()=>{O(o,Ld(r()))}),D(()=>i(),()=>{O(a,u(i().lastCell))}),Ie(),fe();var _=$8();te(()=>{N(_,"d",d(a)),N(_,"visibility",d(o)?"visible":"hidden")}),L(t,_),le()}var z8=ee('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function H8(t,e){ae(e,!1);let n=U(e,"gridShape",8);fe();var r=z8(),i=K(r);N(i,"x",0),N(i,"y",0),P(r),te(()=>{N(i,"width",n().nCols),N(i,"height",n().nRows)}),L(t,r),le()}var W8=ee('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),B8=ee('<g class="grid-lines"></g>');function Y8(t,e){ae(e,!1);const n=qe(),r=()=>ve(Cn,"$gridStore",n),i=A();D(()=>r(),()=>{O(i,r().getAllCells())}),Ie(),fe();var o=B8();Je(o,5,()=>d(i),mt,(a,c)=>{var u=W8();N(u,"width",1),N(u,"height",1),te(()=>{N(u,"x",d(c).c),N(u,"y",d(c).r)}),L(a,u)}),P(o),L(t,o),le()}function j8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function K8(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=j8(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],_=JSON.stringify(c),g=JSON.stringify(u);n(_,g)}}return e}function V8(t,e=0,n=!1){const r=[],i=K8(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const g=Array.from(u)[0];let v=JSON.parse(g),h=g;const m=[];do{const E=i.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Te(_.c,_.r),b=new Te(v.c,v.r);let y=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,T=null;for(const oe of E){const we=JSON.parse(oe),Z=new Te(we.c,we.r),Ee=b.subtract(I),me=Z.subtract(b),ye=Ee.perpDotProduct(me);y<ye!=n&&(y=ye,T=we,x=oe)}if(n&&E.size>1&&o.add(h),T===null||x===null)throw new Error("Corner with no adjacencies found");E.delete(x),E.size<=0&&i.delete(h);const M=e*(v.c-_.c),z=e*(T.c-v.c),H=e*(_.r-v.r),k=e*(v.r-T.r),B=k+y*z,re=M+y*H,ce=new Te(v.c+B,v.r+re),J=4;o.has(h)?(m.push(new Te(ce.x-J*M,ce.y-J*z)),m.push(new Te(ce.x-J*H,ce.y-J*k))):m.push(ce),_=v,v=T,h=x}while(h!==g);r.push(m)}return r}function Eo(t,e=0,n=!1){return V8(t,e,n).map(o=>Yo(o,!0)).join("")}const X8=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function q8(t,e,n=X8){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,_=c/(360/i),g=u/(360/i),v=Math.floor(_)%i,h=Math.ceil(_)%i,m=n[v].lerp(n[h],_%1),E=Math.floor(g)%i,I=Math.ceil(g)%i,b=n[E].lerp(n[I],g%1);r.push(m);for(let x=Math.ceil(_);x<=Math.floor(g);x++)r.push(n[x%i]);r.push(b);const y=new Te(0,0);return r.push(y),r}function Gp(t,e,n=new Te(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),v=n.add(new Te(_,g));c.push(v)}return c}function Yo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function gi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(g=>new Te(g.x,g.y));if(r&&o.length>1){const g=o[o.length-1];for(let h=0;h<o.length-1;h++)if(g.equals(o[h])){o.push(o[h+1]);break}const v=o[0];for(let h=1;h<o.length;h++)if(v.equals(o[h])){o.unshift(o[h-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let g=o[1].subtract(o[0]);g=g.normalise(),g=g.scale(e),o[0]=o[0].add(g)}if(n){const g=o.length;let v=o[g-2].subtract(o[g-1]);v=v.normalise(),v=v.scale(n),o[g-1]=o[g-1].add(v)}}if(!i)return Yo(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let g=2;g<u;g++){const v=o[g-2],h=o[g-1],m=o[g];let E=v.subtract(h).normalise();E=E.scale(i),E=E.add(h);let I=m.subtract(h).normalise();I=I.scale(i),I=I.add(h),c.push(`L${E.x},${E.y} Q ${h.x},${h.y} ${I.x},${I.y}`)}const _=o[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function hl(t,e={}){const n=jl(t);return gi(n,e)}function tr(t){return new Te(t.c+.5,t.r+.5)}function jl(t){return t.map(n=>tr(n))}const Z8=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function Q8(t,e){const n=Z8[t];return n.subtract(n.scale(e))}function Fp(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(o=>Yo(o,!1)).join("")}const J8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Kl(t,e="none"){return J8.get(t)||e}function eP(t,e,n){let r=[];function o(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:a=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const _=new Te(n+.5,e+.5);return u.add(_)})),r}function c_(t,e){const n=[new Te(-t,0),new Te(0,0),new Te(0,t)],i={[He.NE]:0,[He.E]:Math.PI/4,[He.SE]:Math.PI/2,[He.S]:3*Math.PI/4,[He.SW]:Math.PI,[He.W]:5*Math.PI/4,[He.NW]:3*Math.PI/2,[He.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function tP(t,e){const r=Ps(e),i=new Te(r.c,r.r).normalise().scale(.3),o=tr(t),a=o.subtract(i),c=o.add(i);return[a,c]}function nP(t,e){const r=tP(t,e);let i=c_(.2,e);i=i.map(u=>u.add(r[1]));const o=gi(r),a=gi(i);return o+a}function rP(t,e){const r=Ps(e),i=new Te(r.c,r.r),a=tr(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function Lu(t,e){const r=rP(t,e);let i=c_(.1,e);i=i.map(u=>u.add(r[1]));const o=gi(r),a=gi(i);return o+a}var iP=ee('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),oP=ee('<g class="regions-border"></g>');function sP(t,e){ae(e,!1);const n=qe(),r=()=>ve(Fn,"$cellsStore",n),i=A(),o=A();function a(u,_){return u.filter(h=>h.region===_).map(h=>({r:h.r,c:h.c}))}D(()=>r(),()=>{O(i,r())}),D(()=>d(i),()=>{O(o,new Set(d(i).map(u=>u.region).filter(u=>u!==null)))}),Ie(),fe();var c=oP();Je(c,5,()=>d(o),mt,(u,_)=>{var g=iP();te(()=>N(g,"d",Eo(a(d(i),d(_)),0,!1))),te(()=>N(g,"id",`region-${d(_)??""}`)),L(u,g)}),P(c),L(t,c),le()}var aP=ee('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function lP(t,e){ae(e,!1);const n=qe(),r=()=>ve(Gi,"$selectionStore",n),i=()=>ve(sn,"$toolStore",n),o=A(),a=A(),c=A(),u=A(),_=.06,g=.05,v="#080808",h="#b2b2b2";D(()=>r(),()=>{O(o,r().cells)}),D(()=>d(o),()=>{O(a,Eo(d(o),0))}),D(()=>d(o),()=>{O(c,Eo(d(o),_))}),D(()=>i(),()=>{O(u,Ld(i()))}),Ie(),fe();var m=aP(),E=K(m),I=K(E);N(I,"stdDeviation",g),Mi(),P(E);var b=G(E),y=K(b);N(y,"fill",h);var x=G(y);N(x,"fill",v),P(b);var T=G(b);P(m),te(()=>{N(m,"visibility",d(u)?"visible":"hidden"),N(x,"d",d(c)),N(T,"d",d(a))}),L(t,m),le()}var cP=ee('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function uP(t,e){ae(e,!1);const n=A(),r=A();let i=U(e,"grid",8);D(()=>X(i()),()=>{O(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>d(n),()=>{O(r,Eo(d(n),0))}),Ie(),fe();var o=cP(),a=K(o);P(o),te(()=>N(a,"d",d(r))),L(t,o),le()}function dP(t,e){const n=t.getRow(e.r);return new Set(n)}function _P(t,e){const n=t.getCol(e.c);return new Set(n)}function fP(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function gP(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function hP(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function vP(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function pP(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function mP(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function EP(t,e,n){let r=new Set;const o=n.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>v!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),_=c.findIndex(v=>v===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const v=c.filter((h,m)=>m!==_);r=new Set([...r,...v])}return r}return u.findIndex(v=>v===e)!==-1&&(r=new Set([...r,...c])),r}function CP(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function bP(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function IP(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(!!e.get(f.ANTIKNIGHT)&&(r=r.union(gP(t,i))),!!e.get(f.ANTIKING)&&(r=r.union(hP(t,i))),!!e.get(f.DISJOINT_GROUPS)&&(r=r.union(vP(t,i))),!!e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(mP(t,i))),!!e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(pP(t,i)))),r}function Nu(t,e,n,r,i){if(e.tool_id!==r||!e.constraints)return i;for(const o of Object.values(e.constraints)){const a=bP(t,n,o);i=new Set([...i,...a])}return i}function wP(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;for(const o of e.values()){const a=o.tool_id;if(o.constraints){if(a===f.BETWEEN_LINE)for(const c of Object.values(o.constraints)){const u=EP(t,i,c);r=new Set([...r,...u])}else if(a===f.RENBAN_LINE)for(const c of Object.values(o.constraints)){const u=CP(t,i,c);r=new Set([...r,...u])}r=Nu(t,o,i,f.KILLER_CAGE,r),r=Nu(t,o,i,f.PARITY_BALANCE_CAGE,r),r=Nu(t,o,i,f.SPOTLIGHT_CAGE,r)}}return r}function $p(t,e){let n=new Set;const r=t.grid,i=t.elementsDict;!i.get(f.SUDOKU_RULES_DO_NOT_APPLY)&&(n=new Set([...dP(r,e),..._P(r,e),...fP(r,e)])),n=new Set([...n,...IP(r,i,e)]),n=new Set([...n,...wP(r,i,e)]);const a=r.getCell(e.r,e.c);return a&&n.delete(a),n}function yP(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push($p(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var OP=ee('<tspan class="svelte-xct9ah"> </tspan>'),AP=ee('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function xP(t,e){ae(e,!1);const n=A();let r=U(e,"cell",8),i=U(e,"seen_values",8);const o=.25;function a(g){return i().find(h=>h===g)!==void 0}D(()=>X(r()),()=>{O(n,tr({r:r().r,c:r().c}))}),Ie(),fe();var c=be(),u=ne(c);{var _=g=>{var v=AP(),h=K(v);N(h,"font-size",o),Je(h,5,()=>r().centerMarks,mt,(m,E)=>{var I=OP();const b=ut(()=>a(d(E)));te(()=>wt(I,"conflict",d(b)));var y=K(I,!0);P(I),te(()=>lt(y,d(E))),L(m,I)}),P(h),P(v),te(()=>{N(h,"x",d(n).x),N(h,"y",d(n).y),N(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),L(g,v)};Q(u,g=>{r().centerMarks.length&&g(_)})}L(t,c),le()}var LP=ee('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),NP=ee('<g class="corner-marks-group"></g>');function RP(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const i=.25,o=.28;function a(v){const h=v.cornerMarks.slice(0,8),m=tr({r:v.r,c:v.c});return h.map((E,I)=>{const b=Q8(I,o);return{pos:m.add(b),value:E,idx:I}})}function c(v){return r().find(m=>m===v)!==void 0}fe();var u=be(),_=ne(u);{var g=v=>{var h=NP();Je(h,5,()=>a(n()),mt,(m,E)=>{let I=()=>d(E).pos,b=()=>d(E).value;var y=LP();N(y,"font-size",i);const x=ut(()=>c(b()));var T=K(y,!0);P(y),te(()=>{N(y,"x",I().x),N(y,"y",I().y),wt(y,"conflict",d(x)),lt(T,b())}),L(m,y)}),P(h),L(v,h)};Q(_,v=>{n().cornerMarks.length&&v(g)})}L(t,u),le()}var DP=ee('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),SP=ee('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),TP=ee("<!><!>",1),kP=ee('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function MP(t,e){ae(e,!1);const n=qe(),r=()=>ve(jr,"$settingsStore",n),i=()=>ve(Bs,"$puzzleStore",n),o=()=>ve(sn,"$toolStore",n),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"cell",8);const E=.8,I=400;function b(M,z){if(!M)return[];let k=[...$p(d(g),z.toCoords())].map(B=>B.value).filter(B=>B!==null);return k=[...new Set(k)],k}D(()=>X(m()),()=>{O(a,m().value)}),D(()=>X(m()),()=>{O(c,m().given)}),D(()=>X(m()),()=>{O(u,tr({r:m().r,c:m().c}))}),D(()=>r(),()=>{O(_,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{O(g,i())}),D(()=>r(),()=>{O(v,r().showSolution)}),D(()=>(d(_),X(m())),()=>{O(h,b(d(_),m()))}),Ie(),fe();var y=be(),x=ne(y);{var T=M=>{var z=kP(),H=K(z);{var k=re=>{var ce=be(),J=ne(ce);{var oe=we=>{var Z=DP();N(Z,"font-size",E),N(Z,"font-weight",I);var Ee=K(Z,!0);P(Z),te(()=>{N(Z,"x",d(u).x),N(Z,"y",d(u).y),lt(Ee,m().region)}),L(we,Z)};Q(J,we=>{m().region!==null&&we(oe)})}L(re,ce)},B=re=>{var ce=be(),J=ne(ce);{var oe=Z=>{var Ee=SP();N(Ee,"font-size",E),N(Ee,"font-weight",I);var me=K(Ee,!0);P(Ee),te(()=>{N(Ee,"x",d(u).x),N(Ee,"y",d(u).y),wt(Ee,"given",d(c)),lt(me,d(a))}),L(Z,Ee)},we=Z=>{var Ee=TP(),me=ne(Ee);RP(me,{get cell(){return m()},get seen_values(){return d(h)}});var ye=G(me);xP(ye,{get cell(){return m()},get seen_values(){return d(h)}}),L(Z,Ee)};Q(J,Z=>{d(a)!==null?Z(oe):Z(we,!1)},!0)}L(re,ce)};Q(H,re=>{o()===f.REGIONS?re(k):re(B,!1)})}P(z),te(()=>wt(z,"hide-given",m().given)),L(M,z)};Q(x,M=>{d(v)||M(T)})}L(t,y),le()}var UP=ee("<path></path>"),GP=ee('<g class="highlights-group"></g>');function FP(t,e){ae(e,!1);const n=qe(),r=()=>ve(sn,"$toolStore",n);let i=U(e,"cell",8);function o(_){const g=tr({r:i().r,c:i().c}),v=i().highlights.length;return i().highlights.map((m,E)=>{let I=q8(E,v);I=I.map(y=>y.add(g));const b=Yo(I,!0);return{colorId:m,d:b}})}fe();var a=be(),c=ne(a);{var u=_=>{var g=be(),v=ne(g);{var h=m=>{var E=GP();Je(E,5,()=>o(i()),mt,(I,b)=>{let y=()=>d(b).colorId,x=()=>d(b).d;var T=UP();te(()=>{Ls(T,`highlight-wedge color-${y()??""} svelte-1ynpdsm`),N(T,"d",x())}),L(I,T)}),P(E),L(m,E)};Q(v,m=>{i().highlights.length&&m(h)})}L(_,g)};Q(c,_=>{r()!==f.REGIONS&&_(u)})}L(t,a),le()}var $P=ee('<path class="cell-marker" fill="none"></path>'),PP=ee('<circle fill="none" opacity="0.9"></circle>');function zP(t,e){ae(e,!1);const n=A(),r=A();let i=U(e,"marker",8);const o=.3,a=.08;D(()=>X(i()),()=>{O(n,Fp(i(),o))}),D(()=>X(i()),()=>{O(r,Kl(i().colorId,"black"))}),Ie(),fe();var c=be(),u=ne(c);{var _=v=>{var h=$P();N(h,"stroke-width",a),te(()=>{N(h,"d",d(n)),N(h,"stroke",d(r))}),L(v,h)},g=v=>{var h=PP();N(h,"r",o),N(h,"stroke-width",a),te(()=>{Ls(h,`cell-marker color-${i().colorId??""}`),N(h,"cx",i().c),N(h,"cy",i().r),N(h,"stroke",d(r))}),L(v,h)};Q(u,v=>{i().marker==="X"?v(_):v(g,!1)})}L(t,c),le()}var HP=ee('<g class="cell-markers"></g>');function WP(t,e){let n=U(e,"markers",8);var r=HP();Je(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{zP(i,{get marker(){return d(o)}})}),P(r),L(t,r)}var BP=ee('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function YP(t,e){ae(e,!1);const n=A();let r=U(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(g=>[new Te(g.p1.c,g.p1.r),new Te(g.p2.c,g.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Kl(_,"black"):"darkred"}D(()=>X(r()),()=>{O(n,Yo(o(r().draftLine)))}),Ie(),fe();var c=BP();te(()=>N(c,"stroke",a(r()))),N(c,"stroke-width",i),N(c,"opacity",.5),te(()=>N(c,"d",d(n))),L(t,c),le()}var jP=ee('<path fill="none" opacity="0.9"></path>');function KP(t,e){ae(e,!1);const n=A(),r=A();let i=U(e,"marker",8);const o=.08,a=.04;D(()=>X(i()),()=>{O(n,Fp(i(),o))}),D(()=>X(i()),()=>{O(r,Kl(i().colorId,"black"))}),Ie(),fe();var c=jP();N(c,"stroke-width",a),te(()=>{N(c,"d",d(n)),Ls(c,`edge-marker color-${i().colorId??""}`),N(c,"stroke",d(r))}),L(t,c),le()}var VP=ee('<g class="edge-markers"></g>');function XP(t,e){let n=U(e,"markers",8);var r=VP();Je(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{KP(i,{get marker(){return d(o)}})}),P(r),L(t,r)}var qP=ee('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),ZP=ee('<g class="line-markers svelte-yha19m"></g>');function QP(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return Kl(c,"black")}fe();var a=ZP();Je(a,5,n,c=>i(c),(c,u)=>{var _=qP();N(_,"stroke-width",r),te(()=>N(_,"stroke",o(d(u).colorId))),te(()=>{N(_,"x1",d(u).p1.c),N(_,"y1",d(u).p1.r),N(_,"x2",d(u).p2.c),N(_,"y2",d(u).p2.r),Ls(_,`line-marker color-${d(u).colorId??""} svelte-yha19m`)}),L(c,_)}),P(a),L(t,a),le()}var JP=ee('<g class="pen-tool"><!><!><!><!></g>');function e4(t,e){ae(e,!1);const n=qe(),r=()=>ve(_l,"$penToolStore",n),i=A();D(()=>r(),()=>{O(i,{draftLine:r().draftLine,mode:r().mode})}),Ie(),fe();var o=JP(),a=K(o);QP(a,{get lineMarkers(){return r().lineMarkers}});var c=G(a);XP(c,{get markers(){return r().edgeMarkers}});var u=G(c);WP(u,{get markers(){return r().cellMarkers}});var _=G(u);YP(_,{get draftLineMarker(){return d(i)}}),P(o),L(t,o),le()}var t4=ee("<path></path>");function Hr(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A(),u=A(),_=A();let g=U(e,"cells",8),v=U(e,"shape",8,Nd);const h="square";D(()=>X(v()),()=>{O(n,v().inset??.06)}),D(()=>X(v()),()=>{O(r,v().stroke??"black")}),D(()=>X(v()),()=>{O(i,v().strokeWidth??.03)}),D(()=>X(v()),()=>{O(o,v().strokeDasharray??.08)}),D(()=>X(v()),()=>{O(a,v().fill??"none")}),D(()=>X(v()),()=>{O(c,v().connectDiag??!0)}),D(()=>(X(g()),d(n),d(c)),()=>{O(u,Eo(g(),d(n),d(c)))}),D(()=>X(v()),()=>{O(_,v().strokeLinejoin??"miter")}),Ie(),fe();var m=t4();N(m,"stroke-linecap",h),te(()=>{N(m,"d",d(u)),N(m,"stroke",d(r)),N(m,"stroke-width",d(i)),N(m,"fill",d(a)),N(m,"stroke-dasharray",d(o)),N(m,"stroke-linejoin",d(_))}),L(t,m),le()}var n4=ee('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function r4(t,e){ae(e,!1);const n=qe(),r=()=>ve(Gi,"$selectionStore",n),i=()=>ve(jr,"$settingsStore",n),o=()=>ve(Bs,"$puzzleStore",n),a=()=>ve(sn,"$toolStore",n),c=A(),u=A(),_=A(),g=A(),v={type:W.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,y){return b.length?yP(d(_),b):[]}D(()=>r(),()=>{O(c,r().cells)}),D(()=>i(),()=>{O(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{O(_,o())}),D(()=>a(),()=>{O(g,Ld(a()))}),Ie(),fe();var m=be(),E=ne(m);{var I=b=>{var y=n4(),x=K(y),T=ut(()=>h(d(c),d(_)));Hr(x,{get cells(){return d(T)},shape:v}),P(y),L(b,y)};Q(E,b=>{d(u)&&d(g)&&b(I)})}L(t,m),le()}function Vl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...qv(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function i4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Vl(r))}return new Set(e)}function o4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Vl(r))}return new Set(e)}function s4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Vl(r))}return new Set(e)}function a4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function l4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function c4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function u4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Vl(i);o.length&&e.push(...o)}return new Set(e)}function d4(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...i4(t),...o4(t),...s4(t)]);n=n.union(u)}return!!e.get(f.ANTIKNIGHT)&&(n=n.union(a4(t))),!!e.get(f.ANTIKING)&&(n=n.union(l4(t))),!!e.get(f.NONCONSECUTIVE)&&(n=n.union(c4(t))),!!e.get(f.DISJOINT_GROUPS)&&(n=n.union(u4(t))),n}function _4(t,e){return[...new Set([...d4(t,e)])]}var f4=ee('<rect class="conflict svelte-4mp6ok"></rect>'),g4=ee('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function h4(t,e){ae(e,!1);const n=qe(),r=()=>ve(jr,"$settingsStore",n),i=()=>ve(Cn,"$gridStore",n),o=()=>ve(ot,"$elementsDictStore",n),a=()=>ve(Fn,"$cellsStore",n),c=A(),u=A(),_=A(),g=A();W.CAGE;function v(I){return _4(d(u),d(_)).map(x=>x.toCoords())}D(()=>r(),()=>{O(c,r().checkConflicts)}),D(()=>i(),()=>{O(u,i())}),D(()=>o(),()=>{O(_,o())}),D(()=>a(),()=>{O(g,a())}),Ie(),fe();var h=be(),m=ne(h);{var E=I=>{var b=g4();Je(b,5,()=>v(d(g)),mt,(y,x)=>{var T=f4();N(T,"width",1),N(T,"height",1),te(()=>{N(T,"x",d(x).c),N(T,"y",d(x).r)}),L(y,T)}),P(b),L(I,b)};Q(m,I=>{d(c)&&I(E)})}L(t,h),le()}var v4=ee('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge"><use class="fog-edge-1 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-2 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-3 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-4 svelte-1cxyg7s" href="#fog-shape"></use><use href="#fog-shape"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1cxyg7s"><rect class="fog-mask-white svelte-1cxyg7s" x="0%" y="0%" width="100%" height="100%"></rect><g class="fog-mask-black svelte-1cxyg7s"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1cxyg7s" x="0%" y="0%" width="100%" height="100%"></rect><rect class="fog-mask-black svelte-1cxyg7s" mask="url(#fog-mask-fog)"></rect></mask></defs>');function p4(t,e){ae(e,!1);const n=qe(),r=()=>ve(op,"$enableFogMaskStore",n),i=()=>ve(Tl,"$solutionStore",n),o=()=>ve(Cn,"$gridStore",n),a=()=>ve(cp,"$fogLightsStore",n),c=()=>ve(E2,"$customFogClearingStore",n),u=()=>ve(Fn,"$cellsStore",n),_=A(),g=A(),v=A(),h=A(),m=A(),E=A(),I=A(),b=A();let y=U(e,"gridShape",8);function x(ye){const Se=[];if(!ye)return Se;for(const Le of Object.entries(ye)){const Ge=Le[1].cell,Fe=d(v).getCell(Ge.r,Ge.c);Fe&&Se.push(Fe)}return Se}function T(ye){const Se=[];for(const Le of ye)Le.value!==null&&!Le.given&&Se.push(Le);return Se}function M(ye,Se){const Le=[];if(Se)for(const Ge of ye){const Fe=Se[Ge.r][Ge.c];Fe!==null&&Ge.value===Fe&&!Ge.given&&Le.push(Ge)}return Le}function z(ye,Se,Le){const Ge=x(Se);let Fe=new Set(ye);Fe=Fe.difference(new Set(Ge));let _t=T(ye);d(g)&&(_t=M(_t,d(g)));const vt=Le==null?void 0:Le.negative_constraints;if(vt){const st=new Set;!!vt[f.FOG_CLEARING_ITSELF]&&_t.forEach(jt=>st.add(jt)),!!vt[f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS]&&_t.forEach(jt=>d(v).getOrthogonallyAdjacentCells(jt).forEach(Re=>st.add(Re))),!!vt[f.FOG_CLEARING_DIAGONAL_NEIGHBOURS]&&_t.forEach(jt=>d(v).getDiagonallyAdjacentCells(jt).forEach(Re=>st.add(Re))),!!vt[f.FOG_CLEARING_CONTAINING_ROW]&&_t.forEach(jt=>d(v).getRow(jt.r).forEach(Re=>st.add(Re))),!!vt[f.FOG_CLEARING_CONTAINING_COLUMN]&&_t.forEach(jt=>d(v).getCol(jt.c).forEach(Re=>st.add(Re))),!!vt[f.FOG_CLEARING_KNIGHTS_MOVE]&&_t.forEach(jt=>d(v).getCellsByKnightMove(jt).forEach(Re=>st.add(Re))),Fe=Fe.difference(st)}return[...Fe].map(st=>st.toCoords())}D(()=>r(),()=>{O(_,!r())}),D(()=>i(),()=>{O(g,i())}),D(()=>o(),()=>{O(v,o())}),D(()=>a(),()=>{O(h,a())}),D(()=>c(),()=>{O(m,c())}),D(()=>u(),()=>{O(I,u())}),D(()=>(d(I),d(h),d(m)),()=>{O(b,z(d(I),d(h),d(m)))}),D(()=>d(b),()=>{O(E,Eo(d(b),0))}),Ie(),fe();var H=v4(),k=K(H),B=K(k);P(k);var re=G(k),ce=K(re);N(ce,"stroke-width",.4);var J=G(ce);N(J,"stroke-width",.3);var oe=G(J);N(oe,"stroke-width",.2);var we=G(oe);N(we,"stroke-width",.1),Mi(),P(re);var Z=G(re),Ee=G(Z),me=G(K(Ee));N(me,"x",0),N(me,"y",0),P(Ee),P(H),te(()=>{N(B,"d",d(E)),wt(Z,"disabled",d(_)),N(me,"width",y().nCols),N(me,"height",y().nRows)}),L(t,H),le()}var m4=ee('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function E4(t,e){ae(e,!1);const n=qe(),r=()=>ve(SS,"$showFogStore",n),i=A();let o=U(e,"gridShape",8);D(()=>r(),()=>{O(i,r())}),Ie(),fe();var a=m4(),c=K(a);N(c,"x",0),N(c,"y",0),P(a),te(()=>{N(a,"visibility",d(i)?"visible":"hidden"),N(c,"width",o().nCols),N(c,"height",o().nRows)}),L(t,a),le()}var C4=ee('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function b4(t,e){ae(e,!1);const n=A();let r=U(e,"r",8),i=U(e,"c",8),o=U(e,"val",8);const a=.8,c=400;D(()=>(X(r()),X(i())),()=>{O(n,tr({r:r(),c:i()}))}),Ie(),fe();var u=be(),_=ne(u);{var g=v=>{var h=C4();N(h,"font-size",a),N(h,"font-weight",c);var m=K(h,!0);P(h),te(()=>{N(h,"x",d(n).x),N(h,"y",d(n).y),lt(m,o())}),L(v,h)};Q(_,v=>{o()!==null&&v(g)})}L(t,u),le()}var I4=ee('<g class="solution-layer"></g>');function w4(t,e){ae(e,!1);const n=qe(),r=()=>ve(Tl,"$solutionStore",n),i=()=>ve(jr,"$settingsStore",n),o=()=>ve(Ws,"$gameModeStore",n),a=A(),c=A(),u=A();D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(c,i().showSolution)}),D(()=>o(),()=>{O(u,o())}),Ie(),fe();var _=be(),g=ne(_);{var v=h=>{var m=I4();Je(m,5,()=>d(a),mt,(E,I,b)=>{var y=be(),x=ne(y);Je(x,1,()=>d(I),mt,(T,M,z)=>{b4(T,{r:b,c:z,get val(){return d(M)}})}),L(E,y)}),P(m),L(h,m)};Q(g,h=>{d(a)&&d(c)&&d(u)===$i.SETTING&&h(v)})}L(t,_),le()}var y4=ee('<g class="element-group"></g>'),O4=ee('<g mask="url(#fog-mask-fog)"></g>');function Va(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),i=U(e,"Component",8);var o=O4();Je(o,5,n,mt,(a,c)=>{var u=be(),_=ne(u);{var g=v=>{var h=y4();Je(h,5,()=>Object.entries(d(c).constraints),m=>m[0],(m,E)=>{i()(m,{get tool(){return d(E)[1]},get c_id(){return d(E)[0]}})}),P(h),te(()=>N(h,"data-toolId",d(c).tool_id)),L(v,h)};Q(_,v=>{d(c).constraints&&v(g)})}L(a,u)}),P(o),te(()=>Ls(o,py(r()))),L(t,o)}var A4=ee('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),x4=ee('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),L4=ee('<g class="quadruple-text"><!></g>');function N4(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A();let c=U(e,"cornerTool",8);const u=c().cells,_=new Te(u[u.length-1].c,u[u.length-1].r),g=un(c().toolId,Pt)??$u;D(()=>X(c()),()=>{O(n,c().value)}),D(()=>X(c()),()=>{O(r,c().shape??g)}),D(()=>d(r),()=>{var E;O(i,((E=d(r))==null?void 0:E.fontSize)??.2)}),D(()=>d(r),()=>{var E;O(o,((E=d(r))==null?void 0:E.fontColor)??"black")}),D(()=>d(n),()=>{var E;O(a,d(n)?(E=d(n))==null?void 0:E.split(","):[])}),Ie(),fe();var v=be(),h=ne(v);{var m=E=>{var I=L4(),b=K(I);{var y=T=>{var M=A4(),z=K(M,!0);te(()=>lt(z,d(a).join(" "))),P(M),te(()=>{N(M,"x",_.x),N(M,"y",_.y),N(M,"font-size",d(i)),N(M,"fill",d(o))}),L(T,M)},x=T=>{var M=x4(),z=ne(M),H=K(z,!0);te(()=>lt(H,d(a).slice(0,2).join(" "))),P(z);var k=G(z),B=K(k,!0);te(()=>lt(B,d(a).slice(2).join(" "))),P(k),te(()=>{N(z,"x",_.x),N(z,"y",_.y),N(z,"dy",-d(i)/2),N(z,"font-size",d(i)),N(z,"fill",d(o)),N(k,"x",_.x),N(k,"y",_.y),N(k,"dy",d(i)/2),N(k,"font-size",d(i)),N(k,"fill",d(o))}),L(T,M)};Q(b,T=>{d(a).length<=2?T(y):T(x,!1)})}P(I),te(()=>N(I,"data-count",d(a).length)),L(E,I)};Q(h,E=>{d(n)&&E(m)})}L(t,v),le()}var R4=ee("<circle></circle>");function mr(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A();let u=U(e,"x",8),_=U(e,"y",8),g=U(e,"shape",8);D(()=>X(g()),()=>{O(n,g().r??.35)}),D(()=>X(g()),()=>{O(r,g().stroke??"black")}),D(()=>X(g()),()=>{var h;O(i,(h=g())==null?void 0:h.opacity)}),D(()=>X(g()),()=>{O(o,g().strokeWidth??.02)}),D(()=>X(g()),()=>{O(a,g().fill??"none")}),D(()=>X(g()),()=>{O(c,g().strokeDasharray??0)}),Ie(),fe();var v=R4();te(()=>{N(v,"cx",u()),N(v,"cy",_()),N(v,"r",d(n)),N(v,"stroke",d(r)),N(v,"stroke-width",d(o)),N(v,"fill",d(a)),N(v,"opacity",d(i)),N(v,"stroke-dasharray",d(c))}),L(t,v),le()}var D4=ee("<ellipse></ellipse>");function S4(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A(),u=A();let _=U(e,"cx",8),g=U(e,"cy",8),v=U(e,"shape",8);D(()=>X(v()),()=>{O(n,v().width??.5)}),D(()=>X(v()),()=>{O(r,v().height??.5)}),D(()=>X(v()),()=>{O(i,v().stroke??"black")}),D(()=>X(v()),()=>{var m;O(o,(m=v())==null?void 0:m.opacity)}),D(()=>X(v()),()=>{O(a,v().strokeWidth??.02)}),D(()=>X(v()),()=>{O(c,v().fill??"none")}),D(()=>X(v()),()=>{O(u,v().angle??0)}),Ie(),fe();var h=D4();te(()=>{N(h,"cx",_()),N(h,"cy",g()),N(h,"rx",d(n)/2),N(h,"ry",d(r)/2),N(h,"stroke",d(i)),N(h,"stroke-width",d(a)),N(h,"fill",d(c)),N(h,"opacity",d(o)),N(h,"transform",`rotate(${d(u)}, ${_()}, ${g()} )`)}),L(t,h),le()}var T4=ee("<polygon></polygon>");function vl(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A(),u=A(),_=A();let g=U(e,"cx",8),v=U(e,"cy",8),h=U(e,"shape",8);D(()=>X(h()),()=>{O(n,h().n??3)}),D(()=>X(h()),()=>{O(r,h().r??.5)}),D(()=>(d(r),d(n),X(g()),X(v())),()=>{O(i,Gp(d(r),d(n),new Te(g(),v())))}),D(()=>d(i),()=>{O(o,d(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>X(h()),()=>{O(a,h().stroke??"black")}),D(()=>X(h()),()=>{O(c,h().strokeWidth??.02)}),D(()=>X(h()),()=>{O(u,h().fill??"none")}),D(()=>X(h()),()=>{O(_,h().angle??0)}),Ie(),fe();var m=T4();te(()=>{N(m,"points",d(o)),N(m,"stroke",d(a)),N(m,"stroke-width",d(c)),N(m,"fill",d(u)),N(m,"transform",`rotate(${d(_)}, ${g()}, ${v()} )`)}),L(t,m),le()}var k4=ee("<rect></rect>");function M4(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A(),u=A();let _=U(e,"cx",8),g=U(e,"cy",8),v=U(e,"shape",8);D(()=>X(v()),()=>{O(n,v().width??.5)}),D(()=>X(v()),()=>{O(r,v().height??.5)}),D(()=>(X(_()),d(n)),()=>{O(i,_()-d(n)/2)}),D(()=>(X(g()),d(r)),()=>{O(o,g()-d(r)/2)}),D(()=>X(v()),()=>{O(a,v().stroke||"black")}),D(()=>X(v()),()=>{O(c,v().strokeWidth||.023)}),D(()=>X(v()),()=>{O(u,v().fill||"none")}),Ie(),fe();var h=k4();te(()=>{N(h,"x",d(i)),N(h,"y",d(o)),N(h,"width",d(n)),N(h,"height",d(r)),N(h,"stroke",d(a)),N(h,"stroke-width",d(c)),N(h,"fill",d(u))}),L(t,h),le()}var U4=ee("<rect></rect>");function G4(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"cx",8),E=U(e,"cy",8),I=U(e,"shape",8);D(()=>X(I()),()=>{O(n,I().r??.5)}),D(()=>(X(m()),d(n)),()=>{O(r,m()-d(n))}),D(()=>(X(E()),d(n)),()=>{O(i,E()-d(n))}),D(()=>d(n),()=>{O(o,2*d(n))}),D(()=>d(n),()=>{O(a,2*d(n))}),D(()=>X(I()),()=>{O(c,I().stroke??"black")}),D(()=>X(I()),()=>{O(u,I().strokeWidth??.02)}),D(()=>X(I()),()=>{O(_,I().fill??"none")}),D(()=>X(I()),()=>{O(g,I().angle??0)}),D(()=>X(I()),()=>{O(v,I().strokeDasharray??0)}),D(()=>X(I()),()=>{O(h,I().opacity??1)}),Ie(),fe();var b=U4();te(()=>{N(b,"x",d(r)),N(b,"y",d(i)),N(b,"width",d(o)),N(b,"height",d(a)),N(b,"stroke",d(c)),N(b,"stroke-width",d(u)),N(b,"fill",d(_)),N(b,"transform",`rotate(${d(g)}, ${m()}, ${E()})`),N(b,"stroke-dasharray",d(v)),N(b,"opacity",d(h))}),L(t,b),le()}function Rr(t,e){ae(e,!1);const n=A();let r=U(e,"cx",8),i=U(e,"cy",8),o=U(e,"shape",8);D(()=>(X(o()),W),()=>{var g;O(n,((g=o())==null?void 0:g.type)??W.CIRCLE)}),Ie(),fe();var a=be(),c=ne(a);{var u=g=>{mr(g,{get x(){return r()},get y(){return i()},get shape(){return o()}})},_=g=>{var v=be(),h=ne(v);{var m=I=>{S4(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var b=be(),y=ne(b);{var x=M=>{G4(M,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},T=M=>{var z=be(),H=ne(z);{var k=re=>{M4(re,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},B=re=>{var ce=be(),J=ne(ce);{var oe=Z=>{vl(Z,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},we=Z=>{mr(Z,{get x(){return r()},get y(){return i()},get shape(){return o()}})};Q(J,Z=>{d(n)===W.POLYGON?Z(oe):Z(we,!1)},!0)}L(re,ce)};Q(H,re=>{d(n)===W.RECTANGLE?re(k):re(B,!1)},!0)}L(M,z)};Q(y,M=>{d(n)===W.SQUARE?M(x):M(T,!1)},!0)}L(I,b)};Q(h,I=>{d(n)===W.ELLIPSE?I(m):I(E,!1)},!0)}L(g,v)};Q(c,g=>{d(n)===W.CIRCLE?g(u):g(_,!1)})}L(t,a),le()}var F4=ee('<text text-anchor="middle" dominant-baseline="central"> </text>'),$4=ee('<g class="corner-tool"><!><!><!></g>');function Pp(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(T,M){return M===W.TEXT_ONLY?T.value?T.value:"-":T.value??""}D(()=>r(),()=>{var T;O(i,(T=r())==null?void 0:T.id)}),D(()=>(X(m()),$u),()=>{O(o,un(m().toolId,Pt)??$u)}),D(()=>(X(m()),d(o)),()=>{O(a,m().shape??d(o))}),D(()=>(d(a),W),()=>{var T;O(c,((T=d(a))==null?void 0:T.type)??W.CIRCLE)}),D(()=>d(a),()=>{var T;O(u,((T=d(a))==null?void 0:T.fontSize)??.2)}),D(()=>d(a),()=>{var T;O(_,((T=d(a))==null?void 0:T.fontColor)??"black")}),D(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(v,m().cells)}),D(()=>d(v),()=>{O(h,new Te(d(v)[d(v).length-1].c,d(v)[d(v).length-1].r))}),Ie(),fe();var b=be(),y=ne(b);{var x=T=>{var M=$4(),z=K(M);{var H=J=>{Rr(J,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(g)}})};Q(z,J=>{E()&&E()===d(i)&&J(H)})}var k=G(z);Rr(k,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(a)}});var B=G(k);{var re=J=>{N4(J,{get cornerTool(){return m()}})},ce=J=>{var oe=F4(),we=K(oe,!0);te(()=>lt(we,I(m(),d(c)))),P(oe),te(()=>{N(oe,"x",d(h).x),N(oe,"y",d(h).y),N(oe,"font-size",d(u)),N(oe,"fill",d(_))}),L(J,oe)};Q(B,J=>{m().toolId===f.QUADRUPLE?J(re):J(ce,!1)})}P(M),L(T,M)};Q(y,T=>{d(v).length===4&&T(x)})}L(t,b),le()}var P4=ee('<g class="corner-tool"><!></g>');function z4(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=c=>{var u=P4(),_=K(u);Pp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),te(()=>N(u,"id",`c-${r()}`)),L(c,u)};Q(o,c=>{r()!==void 0&&c(a)})}L(t,i)}var H4=ee('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function xs(t,e){ae(e,!1);const n=A();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),o=U(e,"x",8),a=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),g=A(null),v=A(null);function h(x,T,M){const z=["TL","TR"].includes(M),k=["TL","BL"].includes(M)?x+.05:x,B=T;return new Te(k,B)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function E(x){return["TL","TR"].includes(x)?"text-before-edge":""}Ey(()=>{if(!d(g)||!d(v))return;const x=d(g).getBBox();d(v).setAttribute("x",String(x.x)),d(v).setAttribute("y",String(x.y+x.height*.1)),d(v).setAttribute("width",String(x.width)),d(v).setAttribute("height",String(x.height*.8))}),D(()=>(X(o()),X(a()),X(c())),()=>{O(n,h(o(),a(),c()))}),Ie(),fe();var I=be(),b=ne(I);{var y=x=>{var T=H4(),M=ne(T);Ui(M,k=>O(v,k),()=>d(v));var z=G(M);te(()=>N(z,"text-anchor",m(c()))),te(()=>N(z,"dominant-baseline",E(c())));var H=K(z,!0);P(z),Ui(z,k=>O(g,k),()=>d(g)),te(()=>{var k,B;N(z,"x",(k=d(n))==null?void 0:k.x),N(z,"y",(B=d(n))==null?void 0:B.y),N(z,"font-size",i()),N(z,"fill",u()),N(z,"font-weight",_()),lt(H,r())}),L(x,T)};Q(b,x=>{r().length&&x(y)})}L(t,I),le()}var W4=ee('<text text-anchor="middle" dominant-baseline="central"> </text>'),B4=ee("<!><!><!>",1);function zp(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(k,B){return B===W.TEXT_ONLY?k.value?k.value:"-":k.value??""}D(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),D(()=>(X(m()),ol),()=>{O(o,un(m().toolId,Pt)??ol)}),D(()=>(X(m()),d(o)),()=>{O(a,m().shape??d(o))}),D(()=>d(a),()=>{O(c,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(u,m().cell)}),D(()=>(d(a),W),()=>{var k;O(_,((k=d(a))==null?void 0:k.type)||W.CIRCLE)}),D(()=>d(a),()=>{var k;O(g,((k=d(a))==null?void 0:k.fontSize)??.2)}),D(()=>d(a),()=>{var k;O(v,((k=d(a))==null?void 0:k.fontColor)??"black")}),D(()=>d(u),()=>{O(h,d(u).r%1===.5&&d(u).c%1===.5)}),Ie(),fe();var b=B4(),y=ne(b);{var x=k=>{Rr(k,{get cx(){return d(u).c},get cy(){return d(u).r},get shape(){return d(c)}})};Q(y,k=>{E()===d(i)&&k(x)})}var T=G(y);Rr(T,{get cx(){return d(u).c},get cy(){return d(u).r},get shape(){return d(a)}});var M=G(T);{var z=k=>{var B=ut(()=>I(m(),d(_))),re=ut(()=>Math.floor(d(u).c)),ce=ut(()=>Math.floor(d(u).r));xs(k,{get value(){return d(B)},get x(){return d(re)},get y(){return d(ce)},position:"TL",get fontColor(){return d(v)}})},H=k=>{var B=W4(),re=K(B,!0);te(()=>lt(re,I(m(),d(_)))),P(B),te(()=>{N(B,"x",d(u).c),N(B,"y",d(u).r),N(B,"font-size",d(g)),N(B,"fill",d(v))}),L(k,B)};Q(M,k=>{d(h)?k(z):k(H,!1)})}L(t,b),le()}var Y4=ee('<g class="center-corner-or-edge-tool"><!></g>');function j4(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=c=>{var u=Y4(),_=K(u);zp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),te(()=>N(u,"id",`c-${r()}`)),L(c,u)};Q(o,c=>{r()!==void 0&&c(a)})}L(t,i)}var K4=ee('<rect stroke="none" fill="#5373ea80"></rect>'),V4=ee('<rect stroke="none" fill="#5373ea66"></rect>'),X4=ee('<path fill="none" stroke-linecap="round"></path><!>',1),q4=ee('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function Th(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=()=>ve(Cn,"$gridStore",n),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A(),m=A(),E=A(),I=A();let b=U(e,"tool",8),y=U(e,"c_id",8,void 0);const x=.03;function T(Z){return Z.value&&Z.value.length?Z.value:"-"}function M(Z,Ee){const me=Ps(Ee),ye=new Te(me.c,me.r).scale(.5),Se=tr(Z),Le=Se.add(ye.scale(.5)),Ge=Se.add(ye.scale(.8));return[Le,Ge]}function z(Z,Ee){const ye=M(Z,Ee);let Se=c_(.08,Ee);Se=Se.map(_t=>_t.add(ye[1]));const Le=gi(ye),Ge=gi(Se);return Le+Ge}D(()=>r(),()=>{var Z;O(o,(Z=r())==null?void 0:Z.id)}),D(()=>X(b()),()=>{O(a,b().cell)}),D(()=>d(a),()=>{O(c,tr(d(a)))}),D(()=>(i(),X(b())),()=>{O(u,i().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),D(()=>(X(b()),th),()=>{O(_,un(b().toolId,Pt)??th)}),D(()=>(X(b()),d(_)),()=>{O(g,b().shape??d(_))}),D(()=>d(g),()=>{var Z;O(v,((Z=d(g))==null?void 0:Z.fontSize)??.5)}),D(()=>d(g),()=>{var Z;O(h,((Z=d(g))==null?void 0:Z.fontColor)??"var(--text-primary-color)")}),D(()=>d(g),()=>{var Z;O(m,((Z=d(g))==null?void 0:Z.stroke)??"var(--text-primary-color)")}),D(()=>d(g),()=>{O(E,{...d(g),stroke:"var(--constraint-selected-color)",strokeWidth:x+.07})}),D(()=>(d(a),X(b())),()=>{O(I,z(d(a),b().direction))}),Ie(),fe();var H=q4(),k=K(H);{var B=Z=>{var Ee=be(),me=ne(Ee);Je(me,1,()=>d(u),mt,(ye,Se)=>{var Le=K4();N(Le,"width",1),N(Le,"height",1),te(()=>{N(Le,"x",d(Se).c),N(Le,"y",d(Se).r)}),L(ye,Le)}),L(Z,Ee)};Q(k,Z=>{y()===void 0&&Z(B)})}var re=G(k);{var ce=Z=>{var Ee=X4(),me=ne(Ee),ye=G(me);Je(ye,1,()=>d(u),mt,(Se,Le)=>{var Ge=V4();N(Ge,"width",1),N(Ge,"height",1),te(()=>{N(Ge,"x",d(Le).c),N(Ge,"y",d(Le).r)}),L(Se,Ge)}),te(()=>{N(me,"d",d(I)),N(me,"stroke",d(E).stroke),N(me,"stroke-width",d(E).strokeWidth)}),L(Z,Ee)};Q(re,Z=>{y()&&y()===d(o)&&Z(ce)})}var J=G(re);N(J,"stroke-width",x);var oe=G(J),we=K(oe,!0);te(()=>lt(we,T(b()))),P(oe),P(H),te(()=>{N(J,"d",d(I)),N(J,"stroke",d(m)),N(oe,"x",d(c).x),N(oe,"y",d(c).y),N(oe,"font-size",d(v)),N(oe,"fill",d(h))}),L(t,H),le()}var Z4=ee('<g class="outside-direction-tool"><!></g>'),Q4=ee('<g class="outside-direction-preview"><!></g>');function Hp(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=u=>{var _=Z4(),g=K(_);Th(g,{get tool(){return n()},get c_id(){return r()}}),P(_),te(()=>N(_,"data-id",`${r()}`)),L(u,_)},c=u=>{var _=Q4();N(_,"opacity",.5);var g=K(_);Th(g,{get tool(){return n()}}),P(_),L(u,_)};Q(o,u=>{r()!==void 0?u(a):u(c,!1)})}L(t,i)}var J4=ee('<path fill="none"></path>');function _i(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const g="round",v="round";D(()=>X(_()),()=>{var m;O(n,((m=_())==null?void 0:m.stroke)??"gray")}),D(()=>X(_()),()=>{var m;O(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),D(()=>X(_()),()=>{var m;O(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),D(()=>X(_()),()=>{var m;O(o,((m=_())==null?void 0:m.strokeDashoffset)??0)}),D(()=>X(_()),()=>{var m,E,I,b,y,x,T,M;O(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=_())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((x=(y=_())==null?void 0:y.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:((M=(T=_())==null?void 0:T.linePathOptions)==null?void 0:M.closeLoops)??!1})}),D(()=>(X(u()),d(a)),()=>{O(c,gi(u(),d(a)))}),Ie(),fe();var h=J4();N(h,"stroke-linejoin",g),N(h,"stroke-linecap",v),te(()=>{N(h,"d",d(c)),N(h,"stroke",d(n)),N(h,"stroke-width",d(r)),N(h,"stroke-dasharray",d(i)),N(h,"stroke-dashoffset",d(o))}),L(t,h),le()}var e6=ue("<!> <!> <!>",1);function t6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(b){const y=Dt.cloneDeep(b);return y.r=y.r||.2,y.strokeWidth=0,y.opacity=1,y}D(()=>X(c()),()=>{O(n,c().length)}),D(()=>(d(n),X(c())),()=>{O(r,d(n)>1&&c()[0].equals(c()[d(n)-1]))}),D(()=>(d(n),X(c())),()=>{O(i,d(n)>=0?c()[0]:void 0)}),D(()=>(d(n),X(c())),()=>{O(o,d(n)>=0?c()[d(n)-1]:void 0)}),D(()=>X(u()),()=>{O(a,_(u()))}),Ie(),fe();var g=e6(),v=ne(g);_i(v,{get linePoints(){return c()},get shape(){return u()}});var h=G(v,2);{var m=b=>{mr(b,{get x(){return d(i).x},get y(){return d(i).y},get shape(){return d(a)}})};Q(h,b=>{!d(r)&&d(i)&&b(m)})}var E=G(h,2);{var I=b=>{mr(b,{get x(){return d(o).x},get y(){return d(o).y},get shape(){return d(a)}})};Q(E,b=>{!d(r)&&d(o)&&b(I)})}L(t,g),le()}var n6=ee('<g class="corner-line-tool"><!></g>');function r6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let a=U(e,"tool",8);const c=un(a().toolId,Pt)??Ss;D(()=>(X(a()),Te),()=>{O(n,a().coords.map(h=>new Te(h.c,h.r)))}),D(()=>X(a()),()=>{O(r,a().shape??c)}),D(()=>(d(r),W),()=>{var h;O(i,((h=d(r))==null?void 0:h.type)||W.LINE)}),D(()=>d(r),()=>{var h;O(o,((h=d(r))==null?void 0:h.opacity)??1)}),Ie(),fe();var u=n6(),_=K(u);{var g=h=>{t6(h,{get linePoints(){return d(n)},get shape(){return d(r)}})},v=h=>{_i(h,{get linePoints(){return d(n)},get shape(){return d(r)}})};Q(_,h=>{d(i)===W.MAZE_WALL?h(g):h(v,!1)})}P(u),te(()=>N(u,"opacity",d(o))),L(t,u),le()}var i6=ee('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function kh(t,e){ae(e,!1);const n=A(),r=A(),i=A();let o=U(e,"shape",8),a=U(e,"coords",8);const[c,u]=a(),_=u.c,g=c.c===u.c?u.c+1:u.c,v=u.r,h=c.r===u.r?u.r+1:u.r;D(()=>X(o()),()=>{O(n,o().stroke??"black")}),D(()=>X(o()),()=>{var E;O(r,(E=o())==null?void 0:E.opacity)}),D(()=>X(o()),()=>{O(i,o().strokeWidth??.02)}),Ie(),fe();var m=i6();N(m,"x1",_),N(m,"x2",g),N(m,"y1",v),N(m,"y2",h),te(()=>{N(m,"stroke",d(n)),N(m,"stroke-width",d(i)),N(m,"opacity",d(r))}),L(t,m),le()}var o6=ee("<!><!>",1),s6=ee("<!><!>",1),a6=ee("<!><!>",1),l6=ee("<!><!>",1),c6=ee('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function Wp(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(M,z){return z===W.TEXT_ONLY?M.value?M.value:"-":M.value??""}function b(M){if(M!==f.EDGE_INEQUALITY&&M!==f.ONE_WAY_DOOR)return 0;const z=tr(d(v)[0]);return tr(d(v)[1]).subtract(z).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var M;O(i,(M=r())==null?void 0:M.id)}),D(()=>(X(m()),ol),()=>{O(o,un(m().toolId,Pt)??ol)}),D(()=>(X(m()),d(o)),()=>{O(a,m().shape??d(o))}),D(()=>(d(a),W),()=>{var M;O(c,((M=d(a))==null?void 0:M.type)||W.CIRCLE)}),D(()=>d(a),()=>{var M;O(u,((M=d(a))==null?void 0:M.fontSize)??.2)}),D(()=>d(a),()=>{var M;O(_,((M=d(a))==null?void 0:M.fontColor)??"black")}),D(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(v,m().cells)}),D(()=>d(v),()=>{O(h,lp(jl(d(v))))}),Ie(),fe();var y=be(),x=ne(y);{var T=M=>{var z=c6(),H=ne(z);{var k=J=>{var oe=o6(),we=ne(oe);{var Z=me=>{mr(me,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(g)}})};Q(we,me=>{E()&&E()===d(i)&&me(Z)})}var Ee=G(we);mr(Ee,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(a)}}),L(J,oe)},B=J=>{var oe=be(),we=ne(oe);{var Z=me=>{var ye=s6(),Se=ne(ye);{var Le=Fe=>{mr(Fe,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(g)}})};Q(Se,Fe=>{E()&&E()===d(i)&&Fe(Le)})}var Ge=G(Se);mr(Ge,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(a)}}),L(me,ye)},Ee=me=>{var ye=be(),Se=ne(ye);{var Le=Fe=>{var _t=a6(),vt=ne(_t);{var zt=Ot=>{kh(Ot,{get coords(){return d(v)},get shape(){return d(g)}})};Q(vt,Ot=>{E()&&E()===d(i)&&Ot(zt)})}var st=G(vt);kh(st,{get coords(){return d(v)},get shape(){return d(a)}}),L(Fe,_t)},Ge=Fe=>{var _t=l6(),vt=ne(_t);{var zt=Ot=>{Rr(Ot,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(g)}})};Q(vt,Ot=>{E()&&E()===d(i)&&Ot(zt)})}var st=G(vt);Rr(st,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(a)}}),L(Fe,_t)};Q(Se,Fe=>{d(c)===W.BORDER_LINE?Fe(Le):Fe(Ge,!1)},!0)}L(me,ye)};Q(we,me=>{d(c)===W.TEXT_ONLY?me(Z):me(Ee,!1)},!0)}L(J,oe)};Q(H,J=>{m().toolId===f.EDGE_INEQUALITY||m().toolId===f.ONE_WAY_DOOR?J(k):J(B,!1)})}var re=G(H);te(()=>N(re,"transform",`rotate(${b(m().toolId)}, ${d(h).x}, ${d(h).y} )`));var ce=K(re,!0);te(()=>lt(ce,I(m(),d(c)))),P(re),te(()=>{N(re,"x",d(h).x),N(re,"y",d(h).y),N(re,"font-size",d(u)),N(re,"fill",d(_))}),L(M,z)};Q(x,M=>{d(v).length===2&&M(T)})}L(t,y),le()}var u6=ee('<g class="edge-tool"><!></g>');function d6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=c=>{var u=u6(),_=K(u);Wp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),te(()=>N(u,"id",`c-${r()}`)),L(c,u)};Q(o,c=>{r()!==void 0&&c(a)})}L(t,i)}var _6=ee('<path fill="none" stroke-linecap="round"></path>'),f6=ee('<path fill="none" stroke-linecap="round"></path>'),g6=ee('<path fill="none" stroke-linecap="round"></path>'),h6=ee("<!><!><!>",1);function Mh(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A();let _=U(e,"tool",8),g=U(e,"c_id",8,void 0);D(()=>r(),()=>{var y;O(i,(y=r())==null?void 0:y.id)}),D(()=>(X(_()),eh),()=>{O(o,un(_().toolId,Pt)??eh)}),D(()=>(X(_()),d(o)),()=>{O(a,_().shape??d(o))}),D(()=>d(a),()=>{O(c,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.03:.03})}),D(()=>d(a),()=>{O(u,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.05:.05})}),Ie(),fe();var v=h6(),h=ne(v);{var m=y=>{var x=be(),T=ne(x);Je(T,1,()=>_().directions,mt,(M,z)=>{var H=_6();te(()=>N(H,"d",Lu(_().cell,d(z)))),te(()=>{N(H,"stroke",d(c).stroke),N(H,"stroke-width",d(c).strokeWidth)}),L(M,H)}),L(y,x)};Q(h,y=>{y(m)})}var E=G(h);{var I=y=>{var x=be(),T=ne(x);Je(T,1,()=>_().directions,mt,(M,z)=>{var H=f6();te(()=>N(H,"d",Lu(_().cell,d(z)))),te(()=>{N(H,"stroke",d(u).stroke),N(H,"stroke-width",d(u).strokeWidth)}),L(M,H)}),L(y,x)};Q(E,y=>{g()&&g()===d(i)&&y(I)})}var b=G(E);Je(b,1,()=>_().directions,mt,(y,x)=>{var T=g6();te(()=>N(T,"d",Lu(_().cell,d(x)))),te(()=>{N(T,"stroke",d(a).stroke),N(T,"stroke-width",d(a).strokeWidth)}),L(y,T)}),L(t,v),le()}var v6=ee('<g class="single-cell-multi-arrow-tool"><!></g>'),p6=ee('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function Bp(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=u=>{var _=v6(),g=K(_);Mh(g,{get tool(){return n()},get c_id(){return r()}}),P(_),te(()=>N(_,"data-id",`${r()}`)),L(u,_)},c=u=>{var _=p6();N(_,"opacity",.5);var g=K(_);Mh(g,{get tool(){return n()}}),P(_),L(u,_)};Q(o,u=>{r()!==void 0?u(a):u(c,!1)})}L(t,i)}var m6=ee('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function E6(t){var e=m6(),n=K(e);N(n,"opacity",.5),P(e),L(t,e)}var C6=ee('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function b6(t,e){ae(e,!1);const n=A();let r=U(e,"tool",8);U(e,"c_id",8,void 0),D(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),Ie(),fe();var i=C6();te(()=>N(i,"transform",`translate(${d(n).x} ${d(n).y})`)),L(t,i),le()}var I6=ee('<g class="fog-lights-layer svelte-17myswq"></g>');function w6(t,e){ae(e,!1);const n=qe(),r=()=>ve(sn,"$toolStore",n),i=()=>ve(op,"$enableFogMaskStore",n),o=A(),a=A();let c=U(e,"element",8);D(()=>r(),()=>{O(o,r())}),D(()=>i(),()=>{O(a,!i())}),Ie(),fe();var u=be(),_=ne(u);{var g=v=>{var h=I6();Je(h,5,()=>Object.entries(c()),m=>m[0],(m,E)=>{b6(m,{get tool(){return d(E)[1]},get c_id(){return d(E)[0]}})}),P(h),te(()=>wt(h,"inactive",d(o)!==f.FOG_LIGHTS)),L(v,h)};Q(_,v=>{d(a)&&v(g)})}L(t,u),le()}var y6=ee('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function Xl(t,e){ae(e,!1);const n=A(),r=A(),i=A();let o=U(e,"cx",8),a=U(e,"cy",8),c=U(e,"c_id",8);D(()=>X(c()),()=>{O(n,document.getElementById(`c-${c()}`))}),D(()=>d(n),()=>{var v;O(r,(v=d(n))==null?void 0:v.getBBox())}),D(()=>d(r),()=>{O(i,d(r)?Math.max(d(r).width,d(r).height):void 0)}),Ie();var u=be(),_=ne(u);{var g=v=>{var h=y6(),m=K(h);N(m,"stroke-width",.6),P(h),te(()=>N(h,"transform",`translate(${o()}, ${a()}) scale(${d(i)*.6})`)),L(v,h)};Q(_,v=>{d(i)&&v(g)})}L(t,u),le()}var O6=ee('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),A6=ee('<g class="edge-tool-preview"><!></g>');function x6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A();let c=U(e,"tool_preview",8);D(()=>X(c()),()=>{O(n,c().tool)}),D(()=>X(c()),()=>{O(r,c().mode)}),D(()=>X(c()),()=>{O(i,c().match_id)}),D(()=>d(n),()=>{O(o,d(n).cells)}),D(()=>d(o),()=>{O(a,lp(jl(d(o))))}),Ie(),fe();var u=be(),_=ne(u);{var g=h=>{var m=O6();N(m,"opacity",.5);var E=K(m);Xl(E,{get cx(){return d(a).x},get cy(){return d(a).y},get c_id(){return d(i)}}),P(m),L(h,m)},v=h=>{var m=A6();N(m,"opacity",.5);var E=K(m);Wp(E,{get tool(){return d(n)}}),P(m),L(h,m)};Q(_,h=>{d(r)==="remove"&&d(i)?h(g):h(v,!1)})}L(t,u),le()}var L6=ee('<g class="corner-tool-remove-preview"><!></g>'),N6=ee('<g class="corner-tool-preview"><!></g>');function R6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A();let c=U(e,"tool_preview",8);D(()=>X(c()),()=>{O(n,c().tool)}),D(()=>X(c()),()=>{O(r,c().mode)}),D(()=>X(c()),()=>{O(i,c().match_id)}),D(()=>d(n),()=>{O(o,d(n).cells)}),D(()=>d(o),()=>{O(a,new Te(d(o)[d(o).length-1].c,d(o)[d(o).length-1].r))}),Ie(),fe();var u=be(),_=ne(u);{var g=h=>{var m=L6();N(m,"opacity",.5);var E=K(m);Xl(E,{get cx(){return d(a).x},get cy(){return d(a).y},get c_id(){return d(i)}}),P(m),L(h,m)},v=h=>{var m=N6();N(m,"opacity",.5);var E=K(m);Pp(E,{get tool(){return d(n)}}),P(m),L(h,m)};Q(_,h=>{d(r)==="remove"&&d(i)?h(g):h(v,!1)})}L(t,u),le()}var D6=ee('<path fill="none" stroke-linecap="round"></path>'),S6=ee('<path fill="none" stroke-linecap="round"></path>'),T6=ee('<!><!><path fill="none" stroke-linecap="round"></path>',1);function Yp(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A();let h=U(e,"tool",8),m=U(e,"c_id",8,void 0);D(()=>r(),()=>{var M;O(i,(M=r())==null?void 0:M.id)}),D(()=>(X(h()),Jg),()=>{O(o,un(h().toolId,Pt)??Jg)}),D(()=>(X(h()),d(o)),()=>{O(a,h().shape??d(o))}),D(()=>d(a),()=>{O(c,d(a).strokeWidth??.1)}),D(()=>d(a),()=>{O(u,d(a).stroke??"black")}),D(()=>d(a),()=>{O(_,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.05:.05})}),D(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),D(()=>X(h()),()=>{O(v,nP(h().cell,h().direction))}),Ie(),fe();var E=T6(),I=ne(E);{var b=M=>{var z=D6();te(()=>{N(z,"d",d(v)),N(z,"stroke",d(_).stroke),N(z,"stroke-width",d(_).strokeWidth)}),L(M,z)};Q(I,M=>{M(b)})}var y=G(I);{var x=M=>{var z=S6();te(()=>{N(z,"d",d(v)),N(z,"stroke",d(g).stroke),N(z,"stroke-width",d(g).strokeWidth)}),L(M,z)};Q(y,M=>{m()&&m()===d(i)&&M(x)})}var T=G(y);te(()=>{N(T,"d",d(v)),N(T,"stroke",d(u)),N(T,"stroke-width",d(c))}),L(t,E),le()}var k6=ee('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),M6=ee('<g class="single-cell-arrow-tool-preview"><!></g>');function U6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let a=U(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>d(n),()=>{O(o,{x:d(n).cell.c+.5,y:d(n).cell.r+.5})}),Ie(),fe();var c=be(),u=ne(c);{var _=v=>{var h=k6();N(h,"opacity",.5);var m=K(h);Xl(m,{get cx(){return d(o).x},get cy(){return d(o).y},get c_id(){return d(i)}}),P(h),L(v,h)},g=v=>{var h=M6();N(h,"opacity",.5);var m=K(h);Yp(m,{get tool(){return d(n)}}),P(h),L(v,h)};Q(u,v=>{d(r)==="remove"&&d(i)?v(_):v(g,!1)})}L(t,c),le()}var G6=ue("<!> <!>",1);function jp(t,e){ae(e,!1);const n=A(),r=A();let i=U(e,"cells",8),o=U(e,"shape",8,Nd),a=U(e,"value",8,void 0);D(()=>X(i()),()=>{O(n,i()[0])}),D(()=>d(n),()=>{O(r,new Te(d(n).c,d(n).r))}),Ie(),fe();var c=G6(),u=ne(c);Hr(u,{get cells(){return i()},get shape(){return o()}});var _=G(u,2);{var g=v=>{xs(v,{get value(){return a()},get x(){return d(r).x},get y(){return d(r).y},position:"TL"})};Q(_,v=>{a()&&a().length&&v(g)})}L(t,c),le()}var F6=ee('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Uh(t,e){ae(e,!1);const n=qe(),r=()=>ve(C2,"$minimumConstraintsStore",n),i=()=>ve(b2,"$maximumConstraintsStore",n),o=A(),a=A(),c=A();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function g(b,y){const x=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<T.length;M++){let z=T[M];const H={r:b.r+z[1],c:b.c+z[0]};x[M]=!Object.values(y).some(k=>Ze(H,k.cell))}return x}function v(b,y){let x=eP(_(),b.r,b.c);const T=g(b,y);return x=x.filter((z,H)=>T[H]),x.map(z=>Yo(z,!1)).join("")}function h(b,y){return _()==="max"?y:b}D(()=>X(u()),()=>{O(o,u().c)}),D(()=>X(u()),()=>{O(a,u().r)}),D(()=>(r(),i()),()=>{O(c,h(r(),i()))}),Ie(),fe();var m=F6(),E=K(m);N(E,"width",1),N(E,"height",1);var I=G(E);te(()=>N(I,"d",v(u(),d(c)))),P(m),te(()=>{N(E,"x",d(o)),N(E,"y",d(a))}),L(t,m),le()}var $6=ee("<circle></circle>");function P6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A();let u=U(e,"x",8),_=U(e,"y",8),g=U(e,"value",8),v=U(e,"shape",8);D(()=>X(v()),()=>{O(n,v().r??.35)}),D(()=>X(v()),()=>{O(r,v().stroke??"black")}),D(()=>X(v()),()=>{var m;O(i,(m=v())==null?void 0:m.opacity)}),D(()=>X(v()),()=>{O(o,v().strokeWidth??.02)}),D(()=>X(g()),()=>{O(a,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>X(v()),()=>{O(c,v().strokeDasharray??0)}),Ie(),fe();var h=$6();te(()=>{N(h,"cx",u()),N(h,"cy",_()),N(h,"r",d(n)),N(h,"stroke",d(r)),N(h,"stroke-width",d(o)),N(h,"fill",d(a)),N(h,"opacity",d(i)),N(h,"stroke-dasharray",d(c))}),L(t,h),le()}var z6=ee("<!><!>",1),H6=ee("<!><!>",1),W6=ee("<!><!><!>",1),B6=ee('<g class="single-cell-tool"><!><!></g>');function Kp(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);D(()=>r(),()=>{var z;O(i,(z=r())==null?void 0:z.id)}),D(()=>(X(m()),Qg),()=>{O(o,un(m().toolId,Pt)??Qg)}),D(()=>(X(m()),d(o)),()=>{O(a,m().shape??d(o))}),D(()=>(d(a),W),()=>{var z;O(c,((z=d(a))==null?void 0:z.type)||W.CIRCLE)}),D(()=>d(a),()=>{O(u,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.06:.06})}),D(()=>d(a),()=>{O(_,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>X(m()),()=>{O(v,new Te(m().cell.c,m().cell.r))}),D(()=>X(m()),()=>{O(h,m().value)}),Ie(),fe();var I=B6(),b=K(I);{var y=z=>{Uh(z,{get coord(){return m().cell},minOrMax:"min"})},x=z=>{var H=be(),k=ne(H);{var B=ce=>{Uh(ce,{get coord(){return m().cell},minOrMax:"max"})},re=ce=>{var J=be(),oe=ne(J);{var we=Ee=>{var me=z6(),ye=ne(me);{var Se=Ge=>{Rr(Ge,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(_)}})};Q(ye,Ge=>{E()&&E()===d(i)&&Ge(Se)})}var Le=G(ye);P6(Le,{get x(){return d(g).x},get y(){return d(g).y},get value(){return d(h)},get shape(){return d(a)}}),L(Ee,me)},Z=Ee=>{var me=be(),ye=ne(me);{var Se=Ge=>{var Fe=H6(),_t=ne(Fe);{var vt=Ot=>{var Yt=ut(()=>[m().cell]);Hr(Ot,{get cells(){return d(Yt)},get shape(){return d(_)}})};Q(_t,Ot=>{E()&&E()===d(i)&&Ot(vt)})}var zt=G(_t),st=ut(()=>[m().cell]);jp(zt,{get cells(){return d(st)},get shape(){return d(a)},get value(){return m().value}}),L(Ge,Fe)},Le=Ge=>{var Fe=W6(),_t=ne(Fe);{var vt=Yt=>{Rr(Yt,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(u)}})};Q(_t,Yt=>{Yt(vt)})}var zt=G(_t);{var st=Yt=>{Rr(Yt,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(_)}})};Q(zt,Yt=>{E()&&E()===d(i)&&Yt(st)})}var Ot=G(zt);Rr(Ot,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(a)}}),L(Ge,Fe)};Q(ye,Ge=>{d(c)===W.CAGE?Ge(Se):Ge(Le,!1)},!0)}L(Ee,me)};Q(oe,Ee=>{m().toolId===f.COLORED_COUNTING_CIRCLES?Ee(we):Ee(Z,!1)},!0)}L(ce,J)};Q(k,ce=>{m().toolId===f.MAXIMUM?ce(B):ce(re,!1)},!0)}L(z,H)};Q(b,z=>{m().toolId===f.MINIMUM?z(y):z(x,!1)})}var T=G(b);{var M=z=>{xs(z,{get value(){return d(h)},get x(){return d(v).x},get y(){return d(v).y},position:"TL"})};Q(T,z=>{d(c)!==W.CAGE&&m().toolId!==f.COLORED_COUNTING_CIRCLES&&d(h)&&z(M)})}P(I),te(()=>N(I,"data-id",`${E()}`)),L(t,I),le()}var Y6=ee('<g class="single-cell-tool-preview"><!></g>');function j6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let a=U(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>d(n),()=>{O(o,{x:d(n).cell.c+.5,y:d(n).cell.r+.5})}),Ie(),fe();var c=Y6();N(c,"opacity",.5);var u=K(c);Kp(u,{get tool(){return d(n)}}),P(c),L(t,c),le()}var K6=ee('<g class="single-cell-arrow-tool"><!></g>');function V6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=c=>{var u=K6(),_=K(u);Yp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),te(()=>N(u,"id",`c-${r()}`)),L(c,u)};Q(o,c=>{r()!==void 0&&c(a)})}L(t,i)}var X6=ee('<g class="single-cell-tool"><!></g>');function q6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=be(),o=ne(i);{var a=c=>{var u=X6(),_=K(u);Kp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),te(()=>N(u,"id",`c-${r()}`)),L(c,u)};Q(o,c=>{r()!==void 0&&c(a)})}L(t,i)}function Z6(t,e){ae(e,!1);let n=U(e,"tool",8),r=U(e,"c_id",8);fe();var i=be(),o=ne(i);{var a=c=>{var u=be(),_=ne(u);{var g=h=>{V6(h,{get tool(){return n()},get c_id(){return r()}})},v=h=>{var m=be(),E=ne(m);{var I=y=>{Bp(y,{get tool(){return n()},get c_id(){return r()}})},b=y=>{var x=be(),T=ne(x);{var M=z=>{q6(z,{get tool(){return n()},get c_id(){return r()}})};Q(T,z=>{n().type==="SIMPLE"&&z(M)},!0)}L(y,x)};Q(E,y=>{n().type==="MULTIARROW"?y(I):y(b,!1)},!0)}L(h,m)};Q(_,h=>{n().type==="ARROW"?h(g):h(v,!1)})}L(c,u)};Q(o,c=>{n().toolId!==f.FOG_LIGHTS&&c(a)})}L(t,i),le()}var Q6=ue("<!> <!> <!>",1);function Ru(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let a=U(e,"linePoints",8),c=U(e,"shape",8,Ss);function u(b){var T;const y=Dt.cloneDeep(b);y.r=y.r||.2;const x=y.r;return y.strokeDasharray=b.strokeDasharray,y.opacity=1,y.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(T=y.linePathOptions)==null?void 0:T.bezierRounding},y}D(()=>X(a()),()=>{O(n,a().length)}),D(()=>(d(n),X(a())),()=>{O(r,d(n)>=0?a()[0]:void 0)}),D(()=>(d(n),X(a())),()=>{O(i,d(n)>=0?a()[d(n)-1]:void 0)}),D(()=>X(c()),()=>{O(o,u(c()))}),Ie(),fe();var _=Q6(),g=ne(_);{var v=b=>{mr(b,{get x(){return d(r).x},get y(){return d(r).y},get shape(){return d(o)}})};Q(g,b=>{d(r)&&b(v)})}var h=G(g,2);{var m=b=>{_i(b,{get linePoints(){return a()},get shape(){return d(o)}})};Q(h,b=>{d(n)>1&&b(m)})}var E=G(h,2);{var I=b=>{mr(b,{get x(){return d(i).x},get y(){return d(i).y},get shape(){return d(o)}})};Q(E,b=>{d(i)&&b(I)})}L(t,_),le()}var J6=ue("<!> <!> <!>",1);function Du(t,e){ae(e,!1);const n=A(),r=A(),i=A();let o=U(e,"linePoints",8),a=U(e,"shape",12,Ss);const c=4,u=.5;function _(M,z){const H=z.r??u,k=z.n??c,B=z.angle??0,re=Gp(H,k,new Te(0,0),!0,0),ce=(k+(M-B/360)*k%k)%k,J=Math.floor(ce)%k,oe=Math.ceil(ce)%k;return re[J].lerp(re[oe],ce%1).length()}function g(M){if(d(n)<=1)return 0;const z=o()[0],k=o()[1].subtract(z).angle()/(2*Math.PI);return _(k,M)}function v(M){if(d(n)<=1)return 0;const z=o()[d(n)-1],k=o()[d(n)-2].subtract(z).angle()/(2*Math.PI);return _(k,M)}function h(M){var H;const z=Dt.cloneDeep(M);return z.r=z.r||u,z.opacity=1,z.linePathOptions={shortenHead:g(z),shortenTail:v(z),bezierRounding:(H=z.linePathOptions)==null?void 0:H.bezierRounding},z}D(()=>X(o()),()=>{O(n,o().length)}),D(()=>(d(n),X(o())),()=>{O(r,d(n)>=0?o()[0]:void 0)}),D(()=>(d(n),X(o())),()=>{O(i,d(n)>=0?o()[d(n)-1]:void 0)}),D(()=>X(a()),()=>{a(h(a()))}),Ie(),fe();var m=J6(),E=ne(m);{var I=M=>{vl(M,{get cx(){return d(r).x},get cy(){return d(r).y},get shape(){return a()}})};Q(E,M=>{d(r)&&M(I)})}var b=G(E,2);{var y=M=>{_i(M,{get linePoints(){return o()},get shape(){return a()}})};Q(b,M=>{d(n)>1&&M(y)})}var x=G(b,2);{var T=M=>{vl(M,{get cx(){return d(i).x},get cy(){return d(i).y},get shape(){return a()}})};Q(x,M=>{d(i)&&M(T)})}L(t,m),le()}var ez=ue("<!> <!>",1);function Su(t,e){ae(e,!1);const n=A();let r=U(e,"linePoints",8),i=U(e,"shape",8,Ss);function o(m){var b,y,x;const E=Dt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(y=E.linePathOptions)==null?void 0:y.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}function a(m){var b,y,x;const E=Dt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(y=E.linePathOptions)==null?void 0:y.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}D(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),Ie(),fe();var c=ez(),u=ne(c);{var _=m=>{var E=ut(()=>o(i()));_i(m,{get linePoints(){return r()},get shape(){return d(E)}})};Q(u,m=>{r().length>1&&m(_)})}var g=G(u,2);{var v=m=>{var E=ut(()=>o(i()));mr(m,{get x(){return d(n).x},get y(){return d(n).y},get shape(){return d(E)}})},h=m=>{var E=be(),I=ne(E);{var b=y=>{var x=ut(()=>a(i()));vl(y,{get cx(){return d(n).x},get cy(){return d(n).y},get shape(){return d(x)}})};Q(I,y=>{d(n)&&y(b)},!0)}L(m,E)};Q(g,m=>{d(n)&&i().type===W.THERMO_WITH_CIRCLE?m(v):m(h,!1)})}L(t,c),le()}var tz=ee("<!><!><!>",1),nz=ee("<!><!><!>",1),rz=ee("<!><!><!>",1),iz=ee("<!><!><!>",1),oz=ee('<g class="line-tool"><!></g>');function sz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A();let v=U(e,"tool",8),h=U(e,"c_id",8);const m=un(v().toolId,Pt)??Ss;D(()=>r(),()=>{var x;O(i,(x=r())==null?void 0:x.id)}),D(()=>X(v()),()=>{O(o,jl(v().cells))}),D(()=>X(v()),()=>{O(a,v().shape??m)}),D(()=>(d(a),W),()=>{var x;O(c,((x=d(a))==null?void 0:x.type)||W.LINE)}),D(()=>d(a),()=>{var x;O(u,((x=d(a))==null?void 0:x.opacity)??1)}),D(()=>d(a),()=>{O(_,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.06:.06})}),D(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),Ie(),fe();var E=oz(),I=K(E);{var b=x=>{var T=tz(),M=ne(T);{var z=re=>{Ru(re,{get linePoints(){return d(o)},get shape(){return d(_)}})};Q(M,re=>{re(z)})}var H=G(M);{var k=re=>{Ru(re,{get linePoints(){return d(o)},get shape(){return d(g)}})};Q(H,re=>{h()===d(i)&&re(k)})}var B=G(H);Ru(B,{get linePoints(){return d(o)},get shape(){return d(a)}}),L(x,T)},y=x=>{var T=be(),M=ne(T);{var z=k=>{var B=nz(),re=ne(B);{var ce=Z=>{Du(Z,{get linePoints(){return d(o)},get shape(){return d(_)}})};Q(re,Z=>{Z(ce)})}var J=G(re);{var oe=Z=>{Du(Z,{get linePoints(){return d(o)},get shape(){return d(g)}})};Q(J,Z=>{h()===d(i)&&Z(oe)})}var we=G(J);Du(we,{get linePoints(){return d(o)},get shape(){return d(a)}}),L(k,B)},H=k=>{var B=be(),re=ne(B);{var ce=oe=>{var we=rz(),Z=ne(we);{var Ee=Le=>{Su(Le,{get linePoints(){return d(o)},get shape(){return d(_)}})};Q(Z,Le=>{Le(Ee)})}var me=G(Z);{var ye=Le=>{Su(Le,{get linePoints(){return d(o)},get shape(){return d(g)}})};Q(me,Le=>{h()===d(i)&&Le(ye)})}var Se=G(me);Su(Se,{get linePoints(){return d(o)},get shape(){return d(a)}}),L(oe,we)},J=oe=>{var we=iz(),Z=ne(we);{var Ee=Le=>{_i(Le,{get linePoints(){return d(o)},get shape(){return d(_)}})};Q(Z,Le=>{Le(Ee)})}var me=G(Z);{var ye=Le=>{_i(Le,{get linePoints(){return d(o)},get shape(){return d(g)}})};Q(me,Le=>{h()===d(i)&&Le(ye)})}var Se=G(me);_i(Se,{get linePoints(){return d(o)},get shape(){return d(a)}}),L(oe,we)};Q(re,oe=>{d(c)===W.THERMO_WITH_CIRCLE||d(c)===W.THERMO_WITH_POLYGON?oe(ce):oe(J,!1)},!0)}L(k,B)};Q(M,k=>{d(c)===W.LINE_WITH_POLYGON_ENDS?k(z):k(H,!1)},!0)}L(x,T)};Q(I,x=>{d(c)===W.LINE_WITH_CIRCLE_ENDS?x(b):x(y,!1)})}P(E),te(()=>N(E,"opacity",d(u))),L(t,E),le()}var az=ee('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function Vp(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),o=U(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=az();N(u,"viewBox","0 0 1 1"),N(u,"refX",a),N(u,"refY",a),N(u,"markerWidth",1),N(u,"markerHeight",1);var _=K(u);N(_,"d",c),P(u),te(()=>{N(u,"id",r()),N(_,"stroke-width",i()),N(_,"stroke",o())}),L(t,u)}var lz=ee('<path class="arrow-line" fill="none"></path>'),cz=ee('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function uz(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A();let m=U(e,"tool",8),E=U(e,"arrowId",8);const I=un(m().toolId,Pt)??Cv,b="round",y="round",x=crypto.randomUUID(),T=`arrow-mask-${E()}-${x}`,M=`arrow-marker-${E()}-${x}`;D(()=>X(m()),()=>{O(n,m().shape??I)}),D(()=>d(n),()=>{var J;O(r,((J=d(n))==null?void 0:J.r)??.4)}),D(()=>d(n),()=>{var J;O(i,((J=d(n))==null?void 0:J.stroke)??"gray")}),D(()=>d(n),()=>{var J;O(o,((J=d(n))==null?void 0:J.strokeWidth)??.1)}),D(()=>d(n),()=>{var J;O(a,((J=d(n))==null?void 0:J.strokeDasharray)??0)}),D(()=>d(n),()=>{var J;O(c,((J=d(n))==null?void 0:J.opacity)??.8)}),D(()=>(d(r),d(n)),()=>{var J,oe,we,Z;O(u,{shortenHead:d(r),shortenTail:((oe=(J=d(n))==null?void 0:J.linePathOptions)==null?void 0:oe.shortenTail)??.2,bezierRounding:((Z=(we=d(n))==null?void 0:we.linePathOptions)==null?void 0:Z.bezierRounding)??.4})}),D(()=>d(n),()=>{var J;O(_,((J=d(n))==null?void 0:J.fill)??"none")}),D(()=>d(n),()=>{var J;O(g,((J=d(n))==null?void 0:J.inset)??.2)}),D(()=>d(g),()=>{O(v,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:d(g)})}),D(()=>X(m()),()=>{O(h,hl(m().cells))}),Ie(),fe();var z=cz(),H=ne(z);N(H,"id",T);var k=G(K(H));P(H);var B=G(H);Vp(B,{id:M,l:.2,get strokeWidth(){return d(o)},get stroke(){return d(i)}});var re=G(B);Hr(re,{get cells(){return m().cells},get shape(){return d(v)}});var ce=G(re);Je(ce,1,()=>m().lines,mt,(J,oe)=>{var we=be(),Z=ne(we);{var Ee=me=>{var ye=lz();te(()=>N(ye,"d",hl(d(oe),d(u)))),N(ye,"stroke-linejoin",b),N(ye,"stroke-linecap",y),N(ye,"marker-end",`url(#${M??""})`),te(()=>{N(ye,"stroke",d(i)),N(ye,"stroke-width",d(o)),N(ye,"opacity",d(c)),N(ye,"stroke-dasharray",d(a))}),L(me,ye)};Q(Z,me=>{d(oe).length>1&&me(Ee)})}L(J,we)}),te(()=>{N(k,"stroke-width",2*d(r)-d(o)),N(k,"d",d(h))}),L(t,z),le()}var dz=ee('<path class="arrow-line" fill="none"></path>'),_z=ee('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function Tu(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),a=A(),c=A();let u=U(e,"tool",8),_=U(e,"c_id",8),g=U(e,"shape",8);const v="round",h="round",m=crypto.randomUUID(),E=`arrow-mask-${_()}-${m}`,I=`arrow-marker-${_()}-${m}`;D(()=>X(g()),()=>{var H;O(n,((H=g())==null?void 0:H.r)??.4)}),D(()=>X(g()),()=>{var H;O(r,((H=g())==null?void 0:H.stroke)??"gray")}),D(()=>X(g()),()=>{var H;O(i,((H=g())==null?void 0:H.strokeWidth)??.1)}),D(()=>X(g()),()=>{var H;O(o,((H=g())==null?void 0:H.strokeDasharray)??0)}),D(()=>(d(n),X(g())),()=>{var H,k,B,re;O(a,{shortenHead:d(n),shortenTail:((k=(H=g())==null?void 0:H.linePathOptions)==null?void 0:k.shortenTail)??.2,bezierRounding:((re=(B=g())==null?void 0:B.linePathOptions)==null?void 0:re.bezierRounding)??.4})}),D(()=>X(u()),()=>{O(c,hl(u().cells))}),Ie(),fe();var b=_z(),y=ne(b);N(y,"id",E);var x=G(K(y));P(y);var T=G(y);Vp(T,{id:I,l:.2,get strokeWidth(){return d(i)},get stroke(){return d(r)}});var M=G(T);N(M,"mask",`url(#${E??""})`);var z=G(M);Je(z,1,()=>u().lines,mt,(H,k)=>{var B=be(),re=ne(B);{var ce=J=>{var oe=dz();te(()=>N(oe,"d",hl(d(k),d(a)))),N(oe,"stroke-linejoin",v),N(oe,"stroke-linecap",h),N(oe,"marker-end",`url(#${I??""})`),te(()=>{N(oe,"stroke",d(r)),N(oe,"stroke-width",d(i)),N(oe,"stroke-dasharray",d(o))}),L(J,oe)};Q(re,J=>{d(k).length>1&&J(ce)})}L(H,B)}),te(()=>{N(x,"stroke-width",2*d(n)-d(i)),N(x,"d",d(c)),N(M,"d",d(c)),N(M,"stroke-width",2*d(n)+d(i)),N(M,"stroke",d(r))}),L(t,b),le()}var fz=ee("<!><!><!>",1),gz=ee('<g class="arrow-tool"><!></g>');function hz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A();let u=U(e,"tool",8),_=U(e,"c_id",8);const g=un(u().toolId,Pt)??Cv;D(()=>X(u()),()=>{O(i,u().shape??g)}),D(()=>d(i),()=>{O(o,{...d(i),stroke:"var(--grid-background-color)",strokeWidth:d(i).strokeWidth?d(i).strokeWidth+.06:.06})}),D(()=>d(i),()=>{O(a,{...d(i),stroke:"var(--constraint-selected-color)",strokeWidth:d(i).strokeWidth?d(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;O(c,(I=r())==null?void 0:I.id)}),Ie(),fe();var v=gz(),h=K(v);{var m=I=>{uz(I,{get tool(){return u()},get arrowId(){return _()}})},E=I=>{var b=fz(),y=ne(b);{var x=H=>{Tu(H,{get tool(){return u()},get c_id(){return _()},get shape(){return d(o)}})};Q(y,H=>{H(x)})}var T=G(y);{var M=H=>{Tu(H,{get tool(){return u()},get c_id(){return _()},get shape(){return d(a)}})};Q(T,H=>{_()===d(c)&&H(M)})}var z=G(T);Tu(z,{get tool(){return u()},get c_id(){return _()},get shape(){return d(i)}}),L(I,b)};Q(h,I=>{d(i).type===W.BULBOUS_ARROW?I(m):I(E,!1)})}P(v),L(t,v),le()}var vz=ee('<g class="cage-tool"><!><!></g>');function pz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A();let c=U(e,"tool",8),u=U(e,"c_id",8);const _=un(c().toolId,Pt)??Nd;D(()=>X(c()),()=>{O(i,c().shape??_)}),D(()=>r(),()=>{var E;O(o,(E=r())==null?void 0:E.id)}),D(()=>d(i),()=>{O(a,{...d(i),stroke:"var(--constraint-selected-color)",strokeWidth:d(i).strokeWidth?d(i).strokeWidth+.07:.07})}),Ie(),fe();var g=vz(),v=K(g);{var h=E=>{Hr(E,{get cells(){return c().cells},get shape(){return d(a)}})};Q(v,E=>{u()===d(o)&&E(h)})}var m=G(v);jp(m,{get cells(){return c().cells},get shape(){return d(i)},get value(){return c().value}}),P(g),L(t,g),le()}var mz=ee("<!><!>",1),Ez=ee('<g class="clone-tool"><!><!><!><!><!></g>');function Cz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Bt,"$currentConstraintStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A(),m=A();let E=U(e,"tool",8),I=U(e,"c_id",8);const b=un(E().toolId,Pt)??Fy,y=800,x=E().value;D(()=>r(),()=>{var ce;O(i,(ce=r())==null?void 0:ce.id)}),D(()=>X(E()),()=>{O(o,E().shape??b)}),D(()=>d(o),()=>{O(a,{...d(o),stroke:"var(--constraint-selected-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.07:.07})}),D(()=>d(o),()=>{O(c,d(o).inset??.15)}),D(()=>d(o),()=>{O(u,d(o).strokeWidth??.07)}),D(()=>d(o),()=>{O(_,d(o).fontColor??d(o).stroke??"black")}),D(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),D(()=>X(E()),()=>{O(v,E().cells2[E().cells2.length-1])}),D(()=>(d(g),d(c)),()=>{O(h,new Te(d(g).c+1-d(c)-.05,d(g).r+1-d(c)-.05))}),D(()=>(d(v),d(c)),()=>{O(m,new Te(d(v).c+1-d(c)-.05,d(v).r+1-d(c)-.05))}),Ie(),fe();var T=Ez(),M=K(T);{var z=ce=>{var J=mz(),oe=ne(J);Hr(oe,{get cells(){return E().cells},get shape(){return d(a)}});var we=G(oe);Hr(we,{get cells(){return E().cells2},get shape(){return d(a)}}),L(ce,J)};Q(M,ce=>{I()===d(i)&&ce(z)})}var H=G(M);Hr(H,{get cells(){return E().cells},get shape(){return d(o)}});var k=G(H);xs(k,{value:x,get x(){return d(h).x},get y(){return d(h).y},position:"BR",get fontColor(){return d(_)},fontWeight:y});var B=G(k);Hr(B,{get cells(){return E().cells2},get shape(){return d(o)}});var re=G(B);xs(re,{value:x,get x(){return d(m).x},get y(){return d(m).y},position:"BR",get fontColor(){return d(_)},fontWeight:y}),P(T),L(t,T),le()}var bz=ee('<g class="element-group"></g>'),Iz=ee('<g class="element-group"></g>'),wz=ee('<g class="element-group"></g>'),yz=ee('<g class="element-group"></g>'),Oz=ee('<g class="element-group"></g>'),Az=ee('<g class="element-group"></g>'),xz=ee('<g class="underlay-layer" mask="url(#fog-mask-fog)"></g>');function Lz(t,e){ae(e,!1);const n=qe(),r=()=>ve(m2,"$underlayElementsStore",n),i=A();D(()=>r(),()=>{O(i,r())}),Ie(),fe();var o=xz();Je(o,5,()=>d(i),mt,(a,c)=>{var u=be(),_=ne(u);{var g=v=>{var h=be(),m=ne(h);{var E=b=>{var y=bz();Je(y,5,()=>Object.entries(d(c).constraints),x=>x[0],(x,T)=>{Z6(x,{get tool(){return d(T)[1]},get c_id(){return d(T)[0]}})}),P(y),te(()=>N(y,"data-toolId",d(c).tool_id)),L(b,y)},I=b=>{var y=be(),x=ne(y);{var T=z=>{var H=Iz();Je(H,5,()=>Object.entries(d(c).constraints),k=>k[0],(k,B)=>{sz(k,{get tool(){return d(B)[1]},get c_id(){return d(B)[0]}})}),P(H),te(()=>N(H,"data-toolId",d(c).tool_id)),L(z,H)},M=z=>{var H=be(),k=ne(H);{var B=ce=>{var J=wz();Je(J,5,()=>Object.entries(d(c).constraints),oe=>oe[0],(oe,we)=>{hz(oe,{get tool(){return d(we)[1]},get c_id(){return d(we)[0]}})}),P(J),te(()=>N(J,"data-toolId",d(c).tool_id)),L(ce,J)},re=ce=>{var J=be(),oe=ne(J);{var we=Ee=>{var me=yz();Je(me,5,()=>Object.entries(d(c).constraints),ye=>ye[0],(ye,Se)=>{pz(ye,{get tool(){return d(Se)[1]},get c_id(){return d(Se)[0]}})}),P(me),te(()=>N(me,"data-toolId",d(c).tool_id)),L(Ee,me)},Z=Ee=>{var me=be(),ye=ne(me);{var Se=Ge=>{var Fe=Oz();Je(Fe,5,()=>Object.entries(d(c).constraints),_t=>_t[0],(_t,vt)=>{Cz(_t,{get tool(){return d(vt)[1]},get c_id(){return d(vt)[0]}})}),P(Fe),te(()=>N(Fe,"data-toolId",d(c).tool_id)),L(Ge,Fe)},Le=Ge=>{var Fe=be(),_t=ne(Fe);{var vt=zt=>{var st=Az();Je(st,5,()=>Object.entries(d(c).constraints),Ot=>Ot[0],(Ot,Yt)=>{Hp(Ot,{get tool(){return d(Yt)[1]},get c_id(){return d(Yt)[0]}})}),P(st),te(()=>N(st,"data-toolId",d(c).tool_id)),L(zt,st)};Q(_t,zt=>{Wr(d(c).tool_id)&&zt(vt)},!0)}L(Ge,Fe)};Q(ye,Ge=>{Ds(d(c).tool_id)?Ge(Se):Ge(Le,!1)},!0)}L(Ee,me)};Q(oe,Ee=>{yo(d(c).tool_id)?Ee(we):Ee(Z,!1)},!0)}L(ce,J)};Q(k,ce=>{wo(d(c).tool_id)?ce(B):ce(re,!1)},!0)}L(z,H)};Q(x,z=>{Io(d(c).tool_id)?z(T):z(M,!1)},!0)}L(b,y)};Q(m,b=>{xd(d(c).tool_id)?b(E):b(I,!1)})}L(v,h)};Q(_,v=>{d(c).constraints&&v(g)})}L(a,u)}),P(o),L(t,o),le()}var Nz=ee('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),Rz=ee('<g class="center-corner-or-edge-tool-preview"><!></g>');function Dz(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let a=U(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>d(n),()=>{O(o,d(n).cell)}),Ie(),fe();var c=be(),u=ne(c);{var _=v=>{var h=Nz();N(h,"opacity",.5);var m=K(h);Xl(m,{get cx(){return d(o).c},get cy(){return d(o).r},get c_id(){return d(i)}}),P(h),L(v,h)},g=v=>{var h=Rz();N(h,"opacity",.5);var m=K(h);zp(m,{get tool(){return d(n)}}),P(h),L(v,h)};Q(u,v=>{d(r)==="remove"&&d(i)?v(_):v(g,!1)})}L(t,c),le()}var Sz=ee('<line class="positive-diagonal"></line>'),Tz=ee('<line class="negative-diagonal"></line>'),kz=ee('<g class="element-group"><!></g>');function Mz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Cn,"$gridStore",n),i=A(),o=A(),a=A(),c=A(),u=A(),_=A(),g=A(),v=A(),h=A(),m=A();let E=U(e,"element",8);const I=0,b=0,y=0,x=0;D(()=>X(E()),()=>{O(i,E().tool_id)}),D(()=>(X(E()),nh),()=>{O(o,un(E().tool_id,Pt)??nh)}),D(()=>d(o),()=>{var k;O(a,((k=d(o))==null?void 0:k.strokeWidth)??.02)}),D(()=>d(o),()=>{var k;O(c,((k=d(o))==null?void 0:k.stroke)??"black")}),D(()=>r(),()=>{O(u,r())}),D(()=>(d(i),f),()=>{O(_,d(i)===f.POSITIVE_DIAGONAL||d(i)===f.POSITIVE_ANTIDIAGONAL||d(i)===f.PARITY_MIRROR_POSITIVE_DIAGONAL)}),D(()=>d(u),()=>{O(g,d(u).nCols)}),D(()=>d(u),()=>{O(v,d(u).nRows)}),D(()=>d(u),()=>{O(h,d(u).nCols)}),D(()=>d(u),()=>{O(m,d(u).nRows)}),Ie(),fe();var T=kz(),M=K(T);{var z=k=>{var B=Sz();N(B,"x2",x),N(B,"y1",y),te(()=>{N(B,"x1",d(g)),N(B,"y2",d(v)),N(B,"stroke",d(c)),N(B,"stroke-width",d(a))}),L(k,B)},H=k=>{var B=Tz();N(B,"x1",I),N(B,"y1",b),te(()=>{N(B,"x2",d(h)),N(B,"y2",d(m)),N(B,"stroke",d(c)),N(B,"stroke-width",d(a))}),L(k,B)};Q(M,k=>{d(_)?k(z):k(H,!1)})}P(T),te(()=>N(T,"data-toolId",E().tool_id)),L(t,T),le()}function Uz(t,e){ae(e,!1);const n=qe(),r=()=>ve(A2,"$diagonalElementsStore",n),i=A();D(()=>r(),()=>{O(i,r())}),Ie();var o=be(),a=ne(o);Je(a,1,()=>d(i),mt,(c,u)=>{Mz(c,{get element(){return d(u)}})}),L(t,o),le()}var Gz=ee('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function Fz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Cn,"$gridStore",n),i=()=>ve(ot,"$elementsDictStore",n),o=()=>ve(sn,"$toolStore",n),a=()=>ve(Fn,"$cellsStore",n),c=()=>ve(cp,"$fogLightsStore",n),u=()=>ve(O2,"$cornerLineToolsStore",n),_=()=>ve(I2,"$edgeToolsStore",n),g=()=>ve(y2,"$cornerToolsStore",n),v=()=>ve(w2,"$centerCornerOrEdgeToolsStore",n),h=()=>ve(ms,"$outsideDirectionToolPreviewStore",n),m=()=>ve(Ja,"$simpleCellToolPreviewStore",n),E=()=>ve(el,"$singleCellArrowPreviewStore",n),I=()=>ve(tl,"$singleCellMultiArrowPreviewStore",n),b=()=>ve(nl,"$edgeToolPreviewStore",n),y=()=>ve(rl,"$cornerToolPreviewStore",n),x=()=>ve(il,"$centerCornerOrEdgeToolPreviewStore",n),T=A(),M=A(),z=A();let H=U(e,"svgRef",12,null);function k(){for(const[Ve,In]of i().entries()){if(!Wr(Ve))continue;if(Object.entries(In.constraints).some(([Ki,wr])=>!Gt(wr.cell,d(M))))return!0}return!1}function B(Ve,In){const ji=k(),Ki=Wr(In),wr=ji||Ki?1:.2,jo=-wr,Ko=-wr,Vo=Ve.nCols+2*wr,Xo=Ve.nRows+2*wr;return{x:jo,y:Ko,width:Vo,height:Xo}}function re(Ve){return`${Ve.x} ${Ve.y} ${Ve.width} ${Ve.height}`}D(()=>r(),()=>{O(T,r())}),D(()=>d(T),()=>{O(M,{nRows:d(T).nRows,nCols:d(T).nCols})}),D(()=>(d(M),o()),()=>{O(z,B(d(M),o()))}),Ie(),fe();var ce=Gz();te(()=>N(ce,"viewBox",re(d(z))));var J=K(ce);E6(J);var oe=G(J);p4(oe,{get gridShape(){return d(M)}});var we=G(oe);E4(we,{get gridShape(){return d(M)}});var Z=G(we);uP(Z,{get grid(){return r()}});var Ee=G(Z);H8(Ee,{get gridShape(){return d(M)}});var me=G(Ee);Je(me,5,a,mt,(Ve,In)=>{FP(Ve,{get cell(){return d(In)}})}),P(me);var ye=G(me);r4(ye,{});var Se=G(ye);w6(Se,{get element(){return c()}});var Le=G(Se);Lz(Le,{});var Ge=G(Le);Y8(Ge,{});var Fe=G(Ge);Uz(Fe,{});var _t=G(Fe);sP(_t,{});var vt=G(_t);Va(vt,{get elements(){return u()},g_name:"corner-line-tools-layer",Component:r6});var zt=G(vt);lP(zt,{});var st=G(zt);P8(st,{});var Ot=G(st);Va(Ot,{get elements(){return _()},g_name:"edge-tools-layer",Component:d6});var Yt=G(Ot);Va(Yt,{get elements(){return g()},g_name:"corner-tools-layer",Component:z4});var _r=G(Yt);Va(_r,{get elements(){return v()},g_name:"center-corner-edge-tools-layer",Component:j4});var Wn=G(_r);e4(Wn,{});var Jr=G(Wn);Je(Jr,5,a,mt,(Ve,In)=>{MP(Ve,{get cell(){return d(In)}})}),P(Jr);var Ir=G(Jr);w4(Ir,{});var jt=G(Ir);h4(jt,{});var Re=G(jt);{var Oe=Ve=>{Hp(Ve,{get tool(){return h()}})};Q(Re,Ve=>{Wr(o())&&h()&&Ve(Oe)})}var $e=G(Re);{var ze=Ve=>{j6(Ve,{get tool_preview(){return m()}})};Q($e,Ve=>{Il(o())&&o()!==f.FOG_LIGHTS&&m()&&Ve(ze)})}var St=G($e);{var Js=Ve=>{U6(Ve,{get tool_preview(){return E()}})};Q(St,Ve=>{Pi(o())&&E()&&Ve(Js)})}var ea=G(St);{var mi=Ve=>{Bp(Ve,{get tool(){return I()}})};Q(ea,Ve=>{Co(o())&&I()&&Ve(mi)})}var bn=G(ea);{var Ei=Ve=>{x6(Ve,{get tool_preview(){return b()}})};Q(bn,Ve=>{bo(o())&&b()&&Ve(Ei)})}var Ci=G(bn);{var Zl=Ve=>{R6(Ve,{get tool_preview(){return y()}})};Q(Ci,Ve=>{Ns(o())&&y()&&Ve(Zl)})}var bi=G(Ci);{var Ql=Ve=>{Dz(Ve,{get tool_preview(){return x()}})};Q(bi,Ve=>{Rs(o())&&x()&&Ve(Ql)})}P(ce),Ui(ce,Ve=>H(Ve),()=>H()),L(t,ce),le()}function $z(t){return Jy(t)?(gy(),!0):!1}function Pz(t){return eO(t)?(tp(),!0):!1}function zz(t){return tO(t)?(np(),!0):!1}function ku(t){($z(t)||Pz(t)||zz(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var Hz=ue('<div class="board-container svelte-m3kzqm" tabindex="-1"><!></div>');function Wz(t,e){ae(e,!1);const n=qe(),r=()=>ve(dp,"$InputHandlerStore",n),i=()=>ve(po,"$svgRefStore",n),o=A();let a=A(null);function c(h){return m=>{h&&d(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===d(a))&&h(m)}}D(()=>r(),()=>{O(o,r())}),Ie();var u=Hz();Ue("keydown",fu,function(...h){ku==null||ku.apply(this,h)});var _=Xg(()=>{var h;return c((h=d(o))==null?void 0:h.keyDown)});Ue("keydown",fu,function(...h){var m;(m=d(_))==null||m.apply(this,h)});var g=Xg(()=>{var h;return c((h=d(o))==null?void 0:h.keyUp)});Ue("keyup",fu,function(...h){var m;(m=d(g))==null||m.apply(this,h)});var v=K(u);Fz(v,{get svgRef(){return Vh(),i()},set svgRef(h){ho(po,h)},$$legacy:!0}),P(u),Ui(u,h=>O(a,h),()=>d(a)),Ue("pointerdown",u,pu(Er(h=>{var m;h.currentTarget.focus(),(m=d(o))==null||m.pointerDown(h)})),!0),Ue("pointermove",u,pu(Er(h=>{var m;h.currentTarget.focus(),(m=d(o))==null||m.pointerMove(h)})),!0),Ue("pointerup",u,pu(Er(h=>{var m;h.currentTarget.focus(),(m=d(o))==null||m.pointerUp(h)})),!0),L(t,u),le()}var Bz=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function Yz(t){var e=Bz();L(t,e)}var jz=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function Kz(t){var e=jz();L(t,e)}var Vz=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function Xz(t){var e=Vz();L(t,e)}var qz=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function Zz(t){var e=qz();L(t,e)}var Qz=ue('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function Jz(t,e){ae(e,!1);const n=qe(),r=()=>ve(Go,"$commandHistoryStore",n),i=()=>ve(nd,"$selectOnStore",n),o=A(),a=A();function c(){tp()}function u(){np()}function _(){console.log("check")}function g(){ho(nd,!i())}D(()=>r(),()=>{O(o,r()._undoStack.length===0)}),D(()=>r(),()=>{O(a,r()._redoStack.length===0)}),Ie(),fe();var v=Qz(),h=K(v),m=K(h);Zz(m),P(h);var E=G(h,2),I=K(E);Kz(I),P(E);var b=G(E,2);b.disabled=!0;var y=K(b);Yz(y),P(b);var x=G(b,2),T=K(x);Xz(T),P(x),P(v),te(()=>{h.disabled=d(o),E.disabled=d(a),N(x,"aria-checked",i()),wt(x,"active",i())}),Ue("click",h,c),Ue("click",E,u),Ue("click",b,_),Ue("click",x,g),L(t,v),le()}var eH=ue('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),tH=ue('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),nH=ue('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),rH=ue('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function iH(t,e){ae(e,!1);const n=qe(),r=()=>ve(jr,"$settingsStore",n),i=()=>ve(fl,"$penColorStore",n),o=()=>ve(dp,"$InputHandlerStore",n),a=A(),c=A(),u=[];let _=U(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],v=["A","B","C","D","E","F","G","H","I","O"];let h=A(!1);function m(k){return k?v:g}function E(k){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(k)}function I(k){const B=k.currentTarget;if(!B)return;const re=B.getAttribute("aria-checked");O(h,re!=="true")}D(()=>r(),()=>{O(a,r().penToolActive)}),D(()=>r(),()=>{O(c,r().letterToolActive)}),Ie(),fe();var b=rH(),y=K(b);{var x=k=>{var B=be(),re=ne(B);Je(re,1,()=>g,mt,(ce,J)=>{var oe=eH(),we=K(oe);En(we);var Z;Mi(2),P(oe),te(()=>{N(oe,"data-value",d(J)),wt(oe,"active",i()===d(J)),Z!==(Z=d(J))&&(we.value=(we.__value=d(J))==null?"":d(J))}),ud(u,[],we,()=>(d(J),i()),Ee=>ho(fl,Ee)),L(ce,oe)}),L(k,B)},T=k=>{var B=be(),re=ne(B);Je(re,1,()=>m(d(h)),mt,(ce,J)=>{var oe=tH(),we=K(oe),Z=K(we,!0);P(we),Mi(2),P(oe),te(()=>{my(oe,d(J)),lt(Z,d(J))}),Ue("click",oe,function(...Ee){var me;(me=o()&&o().padClick)==null||me.apply(this,Ee)}),L(ce,oe)}),L(k,B)};Q(y,k=>{_()===f.PEN_TOOL&&d(a)?k(x):k(T,!1)})}var M=G(y,2);{var z=k=>{var B=nH();te(()=>{N(B,"aria-checked",d(h)),wt(B,"letter-checked",d(h)),wt(B,"num-checked",!d(h))}),Ue("click",B,I),L(k,B)};Q(M,k=>{d(c)&&E(_())&&k(z)})}var H=G(M,2);P(b),te(()=>{wt(b,"digit",_()===f.DIGIT),wt(b,"center",_()===f.CENTER_PM),wt(b,"corner",_()===f.CORNER_PM),wt(b,"color",_()===f.HIGHLIGHTS),wt(b,"pen",_()===f.PEN_TOOL),wt(H,"letter-tool",d(c))}),Ue("click",H,function(...k){var B;(B=o()&&o().padClick)==null||B.apply(this,k)}),L(t,b),le()}var oH=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function sH(t){var e=oH();L(t,e)}var aH=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function lH(t){var e=aH();L(t,e)}var cH=ue('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function _s(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),o=U(e,"title",8,void 0);function a(){rd(i())}fe();var c=cH(),u=K(c);En(u);var _,g=G(u,2);Et(g,e,"default",{}),P(c),te(()=>{N(c,"title",o()),wt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),ud(n,[],u,()=>(i(),r()),r),Ue("change",u,a),L(t,c),le()}var uH=ue('<span aria-hidden="true">1</span>'),dH=ue('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),_H=ue('<span aria-hidden="true" style="font-size: 50%">123</span>'),fH=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),gH=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),hH=ue('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function vH(t,e){ae(e,!1);const n=qe(),r=()=>ve(jr,"$settingsStore",n);let i=U(e,"selectedTool",12);fe();var o=hH(),a=K(o);_s(a,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=uH();L(h,E)},$$slots:{default:!0},$$legacy:!0});var c=G(a,2);_s(c,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=dH();L(h,E)},$$slots:{default:!0},$$legacy:!0});var u=G(c,2);_s(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=_H();L(h,E)},$$slots:{default:!0},$$legacy:!0});var _=G(u,2);_s(_,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=fH(),I=K(E);sH(I),P(E),L(h,E)},$$slots:{default:!0},$$legacy:!0});var g=G(_,2);{var v=h=>{_s(h,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=gH(),b=K(I);lH(b),P(I),L(m,I)},$$slots:{default:!0},$$legacy:!0})};Q(g,h=>{r().penToolActive&&h(v)})}P(o),L(t,o),le()}var pH=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function mH(t){var e=pH();L(t,e)}var EH=ue('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function qs(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=EH(),o=K(i),a=K(o);Et(a,e,"default",{}),P(o),P(i),te(()=>N(i,"title",n())),Ue("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),L(t,i)}var CH=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),bH=ue('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function IH(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){ip(),gl(),n(!1)}fe(),Zr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=bH(),u=G(K(c),2);Fl(u,{children:(_,g)=>{var v=CH(),h=ne(v),m=G(h,2);Ue("click",h,i),Ue("click",m,r),L(_,v)},$$slots:{default:!0}}),P(c),L(o,c)},$$slots:{default:!0},$$legacy:!0}),le()}var wH=ue("<!> <!>",1);function yH(t){let e=A(!1);function n(){O(e,!0)}var r=wH(),i=ne(r);qs(i,{title:"Restart",clickCb:n,children:(a,c)=>{mH(a)},$$slots:{default:!0}});var o=G(i,2);IH(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var OH=ue('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function fs(t,e){let n=U(e,"title",8);var r=OH(),i=K(r),o=K(i,!0);P(i);var a=G(i,2);Et(a,e,"default",{}),P(r),te(()=>lt(o,n())),L(t,r)}var AH=ue('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function mn(t,e){let n=U(e,"description",8);var r=AH(),i=K(r),o=K(i,!0);P(i);var a=G(i,2),c=K(a);Et(c,e,"default",{}),P(a),P(r),te(()=>lt(o,n())),L(t,r)}var xH=ue('<div class="shortcut svelte-1cgt5u5"> </div>');function fn(t,e){let n=U(e,"shortcut",8);var r=xH(),i=K(r,!0);P(r),te(()=>lt(i,n())),L(t,r)}var LH=ue("<p></p>"),NH=ue("<!> <!> <!> <!>",1),RH=ue("<!> or <!>",1),DH=ue("<!> <!> <!> <!> <!> <!> <!> <!>",1),SH=ue("<!> <!>",1),TH=ue('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function kH(t,e){let n=U(e,"showModal",12,!1);Zr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=TH(),a=K(o);fs(a,{title:"Setting Instructions",children:(v,h)=>{var m=LH();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",L(v,m)},$$slots:{default:!0}});var c=G(a,2);fs(c,{title:"General",children:(v,h)=>{mn(v,{description:"Toggle Darkmode",children:(m,E)=>{fn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=G(c,2);fs(u,{title:"Selection",children:(v,h)=>{var m=NH(),E=ne(m);mn(E,{description:"Select cells",children:(x,T)=>{fn(x,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=G(E,2);mn(I,{description:"Add to current selection",children:(x,T)=>{fn(x,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=G(I,2);mn(b,{description:"Remove from current selection",children:(x,T)=>{fn(x,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var y=G(b,2);mn(y,{description:"Add or remove from current selection",children:(x,T)=>{fn(x,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}});var _=G(u,2);fs(_,{title:"Change Tool",children:(v,h)=>{var m=DH(),E=ne(m);mn(E,{description:"Cycle Tool",children:(H,k)=>{fn(H,{shortcut:"Space"})},$$slots:{default:!0}});var I=G(E,2);mn(I,{description:"Change to Digit Tool",children:(H,k)=>{fn(H,{shortcut:"Z"})},$$slots:{default:!0}});var b=G(I,2);mn(b,{description:"Change to Corner Pencilmark Tool",children:(H,k)=>{fn(H,{shortcut:"X"})},$$slots:{default:!0}});var y=G(b,2);mn(y,{description:"Change to Center Pencilmark Tool",children:(H,k)=>{fn(H,{shortcut:"C"})},$$slots:{default:!0}});var x=G(y,2);mn(x,{description:"Change to Highlights Tool",children:(H,k)=>{fn(H,{shortcut:"V"})},$$slots:{default:!0}});var T=G(x,2);mn(T,{description:"Quickshift To Corner Pencilmark Tool",children:(H,k)=>{fn(H,{shortcut:"Shift"})},$$slots:{default:!0}});var M=G(T,2);mn(M,{description:"Quickshift To Center Pencilmark Tool",children:(H,k)=>{fn(H,{shortcut:"Ctrl"})},$$slots:{default:!0}});var z=G(M,2);mn(z,{description:"Quickshift To Highlights Tool",children:(H,k)=>{var B=RH(),re=ne(B);fn(re,{shortcut:"Shift + Ctrl"});var ce=G(re,2);fn(ce,{shortcut:"Alt"}),L(H,B)},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}});var g=G(_,2);fs(g,{title:"Undo/Redo",children:(v,h)=>{var m=SH(),E=ne(m);mn(E,{description:"Undo",children:(b,y)=>{fn(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=G(E,2);mn(I,{description:"Redo",children:(b,y)=>{fn(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}}),P(o),L(r,o)},$$slots:{default:!0},$$legacy:!0})}var MH=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function UH(t){var e=MH();L(t,e)}var GH=ue("<!> <!>",1);function FH(t){let e=A(!1);function n(){O(e,!0)}var r=GH(),i=ne(r);qs(i,{title:"Info",clickCb:n,children:(a,c)=>{UH(a)},$$slots:{default:!0}});var o=G(i,2);kH(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var $H=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function PH(t){var e=$H();L(t,e)}var zH=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function HH(t){var e=zH();L(t,e)}function WH(t){let e=A(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),O(e,!d(e))}qs(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=be(),_=ne(u);{var g=h=>{HH(h)},v=h=>{PH(h)};Q(_,h=>{d(e)?h(g):h(v,!1)})}L(a,u)},$$slots:{default:!0}})}function Xp(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);fe();var o=be(),a=ne(o);{var c=u=>{var _=be(),g=ne(_);Xh(g,()=>r()[n().type],(v,h)=>{h(v,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=be(),b=ne(I);{var y=T=>{pl(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},x=T=>{var M=Kw();te(()=>lt(M,n().raw)),L(T,M)};Q(b,T=>{"tokens"in n()&&n().tokens?T(y):T(x,!1)})}L(m,I)},$$slots:{default:!0}})}),L(u,_)};Q(a,u=>{r()[n().type]&&u(c)})}L(t,o),le()}function pl(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var o=be(),a=ne(o);{var c=u=>{var _=be(),g=ne(_);Je(g,1,n,mt,(v,h)=>{Xp(v,{get token(){return d(h)},get renderers(){return r()},get options(){return i()}})}),L(u,_)};Q(a,u=>{n()&&u(c)})}L(t,o)}function qp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Zp(t){return t.startsWith("/")||t.startsWith("#")}function BH(t,e){return e.slug(t).replace(/--+/g,"-")}function YH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let o=A();D(()=>(X(n()),X(r())),()=>{O(o,BH(n().text,r().slugger))}),Ie(),fe();var a=be(),c=ne(a);return Qh(c,()=>`h${n().depth}`,!1,(u,_)=>{let g;te(()=>g=qh(u,g,{id:d(o)},void 0,u.namespaceURI===ld,u.nodeName.includes("-")));var v=be(),h=ne(v);Et(h,e,"default",{}),L(_,v)}),L(t,a),rt(e,"renderers",i),le({renderers:i})}var jH=ue("<blockquote><!></blockquote>");function KH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=jH(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}function VH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),o=A();D(()=>X(n()),()=>{O(o,n().ordered?"ol":"ul")}),Ie(),fe();var a=be(),c=ne(a);Qh(c,()=>d(o),!1,(u,_)=>{let g;te(()=>g=qh(u,g,{start:n().start||1},void 0,u.namespaceURI===ld,u.nodeName.includes("-")));var v=be(),h=ne(v);Je(h,1,()=>n().items,mt,(m,E)=>{var I=ut(()=>({...d(E)}));Xp(m,{get token(){return d(I)},get options(){return r()},get renderers(){return i()}})}),L(_,v)}),L(t,a),le()}var XH=ue("<li><!></li>");function qH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=XH(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var ZH=ue("<br>");function QH(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=ZH();return L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var JH=ue("<pre><code> </code></pre>");function eW(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=JH(),a=K(o),c=K(a,!0);return P(a),P(o),te(()=>{by(a,`lang-${n().lang}`),lt(c,n().text)}),L(t,o),rt(e,"options",r),rt(e,"renderers",i),le({options:r,renderers:i})}var tW=ue("<code> </code>");function nW(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=tW(),a=K(o,!0);return te(()=>lt(a,n().raw.slice(1,n().raw.length-1))),P(o),L(t,o),rt(e,"options",r),rt(e,"renderers",i),le({options:r,renderers:i})}var rW=ue('<th scope="col"><!></th>'),iW=ue("<td><!></td>"),oW=ue("<tr></tr>"),sW=ue("<table><thead><tr></tr></thead><tbody></tbody></table>");function aW(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);fe();var o=sW(),a=K(o),c=K(a);Je(c,5,()=>n().header,mt,(_,g)=>{var v=rW(),h=K(v);pl(h,{get tokens(){return d(g).tokens},get options(){return r()},get renderers(){return i()}}),P(v),L(_,v)}),P(c),P(a);var u=G(a);Je(u,5,()=>n().rows,mt,(_,g)=>{var v=oW();Je(v,5,()=>d(g),mt,(h,m)=>{var E=iW(),I=K(E);pl(I,{get tokens(){return d(m).tokens},get options(){return r()},get renderers(){return i()}}),P(E),L(h,E)}),P(v),L(_,v)}),P(u),P(o),L(t,o),le()}function lW(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=be(),a=ne(o);return Cy(a,()=>n().text),L(t,o),rt(e,"options",r),rt(e,"renderers",i),le({options:r,renderers:i})}var cW=ue("<p><!></p>");function uW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=cW(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var dW=ue("<a><!></a>");function _W(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;fe();var o=dW();te(()=>N(o,"href",Zp(n().href)?qp(r().baseUrl,n().href):n().href));var a=K(o);return Et(a,e,"default",{}),P(o),te(()=>N(o,"title",n().title)),L(t,o),rt(e,"renderers",i),le({renderers:i})}function fW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=be(),a=ne(o);return Et(a,e,"default",{}),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var gW=ue("<dfn><!></dfn>");function hW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=gW(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var vW=ue("<del><!></del>");function pW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=vW(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var mW=ue("<em><!></em>");function EW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=mW(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var CW=ue("<hr>");function bW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=CW();return L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var IW=ue("<strong><!></strong>");function wW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=IW(),a=K(o);return Et(a,e,"default",{}),P(o),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}var yW=ue('<img class="markdown-image svelte-z38cge">');function OW(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;fe();var o=yW();return te(()=>N(o,"src",Zp(n().href)?qp(r().baseUrl,n().href):n().href)),te(()=>{N(o,"title",n().title),N(o,"alt",n().text)}),L(t,o),rt(e,"renderers",i),le({renderers:i})}function Gh(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=be(),a=ne(o);return Et(a,e,"default",{}),L(t,o),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",i),le({token:n,options:r,renderers:i})}const AW=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,xW=Object.hasOwnProperty;class LW{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=NW(e,n===!0);const o=i;for(;xW.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function NW(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(AW,"").replace(/ /g,"-"))}function u_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Yi=u_();function Qp(t){Yi=t}const Jp=/[&<>"']/,RW=new RegExp(Jp.source,"g"),em=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,DW=new RegExp(em.source,"g"),SW={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fh=t=>SW[t];function Un(t,e){if(e){if(Jp.test(t))return t.replace(RW,Fh)}else if(em.test(t))return t.replace(DW,Fh);return t}const TW=/(^|[^\[])\^/g;function xt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(TW,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function $h(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ws={exec:()=>null};function Ph(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function gs(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function kW(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function zh(t,e,n,r){const i=e.href,o=e.title?Un(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Un(a)}}function MW(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class ml{constructor(e){pe(this,"options");pe(this,"rules");pe(this,"lexer");this.options=e||Yi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:gs(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=MW(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=gs(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:gs(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=gs(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const g=u.join(`
`),v=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,o=o?`${o}
${v}`:v;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,o=o.substring(0,o.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,o=o.substring(0,o.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",g="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let v=n[2].split(`
`,1)[0].replace(/^\t+/,y=>" ".repeat(3*y.length)),h=e.split(`
`,1)[0],m=!v.trim(),E=0;if(this.options.pedantic?(E=2,g=v.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=v.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(_+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const y=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),z=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const H=e.split(`
`,1)[0];let k;if(h=H,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),k=h):k=h.replace(/\t/g,"    "),T.test(h)||M.test(h)||z.test(h)||y.test(h)||x.test(h))break;if(k.search(/[^ ]/)>=E||!h.trim())g+=`
`+k.slice(E);else{if(m||v.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(v)||M.test(v)||x.test(v))break;g+=`
`+h}!m&&!h.trim()&&(m=!0),_+=H+`
`,e=e.substring(H.length+1),v=k.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const _=o.items[u].tokens.filter(v=>v.type==="space"),g=_.length>0&&_.some(v=>/\n.*\n/.test(v.raw));o.loose=g}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Ph(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(Ph(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Un(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=gs(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=kW(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),zh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return zh(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,g=0;const v=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,n=n.slice(-1*e.length+a);(i=v.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){g+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+g);const h=[...i[0]][0].length,m=e.slice(0,a+i.index+h+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Un(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Un(n[1]),i="mailto:"+r):(r=Un(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Un(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Un(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Un(n[0]),{type:"text",raw:n[0],text:r}}}}const UW=/^(?:[ \t]*(?:\n|$))+/,GW=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,FW=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Zs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$W=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tm=/(?:[*+-]|\d{1,9}[.)])/,nm=xt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,tm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),d_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,PW=/^[^\n]+/,__=/(?!\s*\])(?:\\.|[^\[\]\\])+/,zW=xt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",__).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),HW=xt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,tm).getRegex(),ql="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,WW=xt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",f_).replace("tag",ql).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rm=xt(d_).replace("hr",Zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ql).getRegex(),BW=xt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",rm).getRegex(),g_={blockquote:BW,code:GW,def:zW,fences:FW,heading:$W,hr:Zs,html:WW,lheading:nm,list:HW,newline:UW,paragraph:rm,table:ws,text:PW},Hh=xt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ql).getRegex(),YW={...g_,table:Hh,paragraph:xt(d_).replace("hr",Zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Hh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ql).getRegex()},jW={...g_,html:xt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",f_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ws,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:xt(d_).replace("hr",Zs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},im=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,KW=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,om=/^( {2,}|\\)\n(?!\s*$)/,VW=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Qs="\\p{P}\\p{S}",XW=xt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Qs).getRegex(),qW=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,ZW=xt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Qs).getRegex(),QW=xt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Qs).getRegex(),JW=xt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Qs).getRegex(),e9=xt(/\\([punct])/,"gu").replace(/punct/g,Qs).getRegex(),t9=xt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),n9=xt(f_).replace("(?:-->|$)","-->").getRegex(),r9=xt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",n9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),El=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,i9=xt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",El).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),sm=xt(/^!?\[(label)\]\[(ref)\]/).replace("label",El).replace("ref",__).getRegex(),am=xt(/^!?\[(ref)\](?:\[\])?/).replace("ref",__).getRegex(),o9=xt("reflink|nolink(?!\\()","g").replace("reflink",sm).replace("nolink",am).getRegex(),h_={_backpedal:ws,anyPunctuation:e9,autolink:t9,blockSkip:qW,br:om,code:KW,del:ws,emStrongLDelim:ZW,emStrongRDelimAst:QW,emStrongRDelimUnd:JW,escape:im,link:i9,nolink:am,punctuation:XW,reflink:sm,reflinkSearch:o9,tag:r9,text:VW,url:ws},s9={...h_,link:xt(/^!?\[(label)\]\((.*?)\)/).replace("label",El).getRegex(),reflink:xt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",El).getRegex()},sd={...h_,escape:xt(im).replace("])","~|])").getRegex(),url:xt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},a9={...sd,br:xt(om).replace("{2,}","*").getRegex(),text:xt(sd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xa={normal:g_,gfm:YW,pedantic:jW},hs={normal:h_,gfm:sd,breaks:a9,pedantic:s9};class $n{constructor(e){pe(this,"tokens");pe(this,"options");pe(this,"state");pe(this,"tokenizer");pe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Yi,this.options.tokenizer=this.options.tokenizer||new ml,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Xa.normal,inline:hs.normal};this.options.pedantic?(n.block=Xa.pedantic,n.inline=hs.pedantic):this.options.gfm&&(n.block=Xa.gfm,this.options.breaks?n.inline=hs.breaks:n.inline=hs.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xa,inline:hs}}static lex(e,n){return new $n(n).lex(e)}static lexInline(e,n){return new $n(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(g=>{_=g.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,_;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const v=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},v),typeof h=="number"&&h>=0&&(g=Math.min(g,h))}),g<1/0&&g>=0&&(o=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class Cl{constructor(e){pe(this,"options");pe(this,"parser");this.options=e||Yi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Un(i)+'">'+(r?o:Un(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Un(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=$h(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=$h(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class v_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class er{constructor(e){pe(this,"options");pe(this,"renderer");pe(this,"textRenderer");this.options=e||Yi,this.options.renderer=this.options.renderer||new Cl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new v_}static parse(e,n){return new er(n).parse(e)}static parseInline(e,n){return new er(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class ys{constructor(e){pe(this,"options");pe(this,"block");this.options=e||Yi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?$n.lex:$n.lexInline}provideParser(){return this.block?er.parse:er.parseInline}}pe(ys,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class l9{constructor(...e){pe(this,"defaults",u_());pe(this,"options",this.setOptions);pe(this,"parse",this.parseMarkdown(!0));pe(this,"parseInline",this.parseMarkdown(!1));pe(this,"Parser",er);pe(this,"Renderer",Cl);pe(this,"TextRenderer",v_);pe(this,"Lexer",$n);pe(this,"Tokenizer",ml);pe(this,"Hooks",ys);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new Cl(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=o[c];o[c]=(...g)=>{let v=u.apply(o,g);return v===!1&&(v=_.apply(o,g)),v||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new ml(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=o[c];o[c]=(...g)=>{let v=u.apply(o,g);return v===!1&&(v=_.apply(o,g)),v}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new ys;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=o[c];ys.passThroughHooks.has(a)?o[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(o,g)).then(h=>_.call(o,h));const v=u.call(o,g);return _.call(o,v)}:o[c]=(...g)=>{let v=u.apply(o,g);return v===!1&&(v=_.apply(o,g)),v}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return $n.lex(e,n??this.defaults)}parser(e,n){return er.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?$n.lex:$n.lexInline,_=a.hooks?a.hooks.provideParser():e?er.parse:er.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(g=>u(g,a)).then(g=>a.hooks?a.hooks.processAllTokens(g):g).then(g=>a.walkTokens?Promise.all(this.walkTokens(g,a.walkTokens)).then(()=>g):g).then(g=>_(g,a)).then(g=>a.hooks?a.hooks.postprocess(g):g).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let g=u(r,a);a.hooks&&(g=a.hooks.processAllTokens(g)),a.walkTokens&&this.walkTokens(g,a.walkTokens);let v=_(g,a);return a.hooks&&(v=a.hooks.postprocess(v)),v}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Un(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Fi=new l9;function At(t,e){return Fi.parse(t,e)}At.options=At.setOptions=function(t){return Fi.setOptions(t),At.defaults=Fi.defaults,Qp(At.defaults),At};At.getDefaults=u_;At.defaults=Yi;At.use=function(...t){return Fi.use(...t),At.defaults=Fi.defaults,Qp(At.defaults),At};At.walkTokens=function(t,e){return Fi.walkTokens(t,e)};At.parseInline=Fi.parseInline;At.Parser=er;At.parser=er.parse;At.Renderer=Cl;At.TextRenderer=v_;At.Lexer=$n;At.lexer=$n.lex;At.Tokenizer=ml;At.Hooks=ys;At.parse=At;At.options;At.setOptions;At.use;At.walkTokens;At.parseInline;er.parse;$n.lex;function c9(t){return new $n().lex(t)}const u9=()=>({heading:YH,blockquote:KH,list:VH,list_item:qH,br:QH,code:eW,codespan:nW,table:aW,html:lW,paragraph:uW,link:_W,text:fW,def:hW,del:pW,em:EW,hr:bW,strong:wW,image:OW,space:Gh,escape:Gh}),d9=()=>({baseUrl:"/",slugger:new LW});function _9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},Zh(()=>{console.warn=t})}function lm(t,e){ae(e,!1),_9();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),o=A(),a=A(),c=A();D(()=>(X(n()),X(i()),X(r())),()=>{O(o,c9(n())),O(a,{...u9(),...i()}),O(c,{...d9(),...r()})}),Ie(),fe(),pl(t,{get tokens(){return d(o)},get renderers(){return d(a)},get options(){return d(c)}}),le()}var f9=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),g9=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),h9=ue('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function v9(t,e){ae(e,!1);const n=qe(),r=()=>ve(qr,"$puzzleMetaStore",n),i=A();let o=U(e,"showModal",12,!1);function a(u){return u?ul(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{O(i,r())}),Ie(),fe(),Zr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,_)=>{var g=h9(),v=K(g),h=K(v,!0);P(v);var m=G(v,2),E=K(m);te(()=>lt(E,`by ${a(d(i).authors)??""}`)),P(m);var I=G(m,2),b=K(I),y=ut(()=>c(d(i).ruleset));lm(b,{get source(){return d(y)}}),P(I);var x=G(I,2);{var T=H=>{var k=f9(),B=G(ne(k),2);te(()=>N(B,"href",d(i).ctcUrl)),L(H,k)};Q(x,H=>{var k,B;(B=(k=d(i))==null?void 0:k.ctcUrl)!=null&&B.length&&H(T)})}var M=G(x,2);{var z=H=>{var k=g9(),B=G(ne(k),2);te(()=>N(B,"href",d(i).ctcYoutubeUrl)),L(H,k)};Q(M,H=>{var k,B;(B=(k=d(i))==null?void 0:k.ctcYoutubeUrl)!=null&&B.length&&H(z)})}P(g),te(()=>{var H;return lt(h,((H=d(i))==null?void 0:H.title)||"Puzzle")}),L(u,g)},$$slots:{default:!0},$$legacy:!0}),le()}var p9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function m9(t){var e=p9();L(t,e)}var E9=ue("<!> <!>",1);function C9(t){let e=A(!1);function n(){O(e,!0)}var r=E9(),i=ne(r);qs(i,{title:"Rules",clickCb:n,children:(a,c)=>{m9(a)},$$slots:{default:!0}});var o=G(i,2);v9(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var b9=ue("<!> <!>",1);function I9(t){let e=A(!1);function n(){O(e,!0)}var r=b9(),i=ne(r);qs(i,{title:"Settings",clickCb:n,children:(a,c)=>{_p(a)},$$slots:{default:!0}});var o=G(i,2);fp(o,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var w9=ue('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!> <!></div>');function y9(t){var e=w9(),n=K(e);I9(n);var r=G(n,2);C9(r);var i=G(r,2);WH(i);var o=G(i,2);FH(o);var a=G(o,2);yH(a),P(e),L(t,e)}var O9=ue('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function A9(t,e){ae(e,!1);const n=qe(),r=()=>ve(po,"$svgRefStore",n),i=()=>ve(qr,"$puzzleMetaStore",n),o=()=>ve(sn,"$toolStore",n),a=A(),c=A();function u(){r()&&r().focus()}function _(J){return J?ul(J," & ",", "):"Anonymous"}function g(J){return J&&J.length?J:"Normal sudoku rules apply."}D(()=>i(),()=>{O(a,i().title??"Sudoku")}),D(()=>i(),()=>{O(c,_(i().authors))}),Ie(),fe();var v=O9(),h=K(v),m=K(h),E=K(m),I=K(E,!0);P(E);var b=G(E,2),y=K(b);P(b),P(m);var x=G(m,2),T=K(x),M=ut(()=>g(i().ruleset));lm(T,{get source(){return d(M)}}),P(x),P(h);var z=G(h,2),H=K(z);y9(H);var k=G(H,2),B=K(k);Jz(B,{});var re=G(B,2);iH(re,{get selectedTool(){return o()}});var ce=G(re,2);vH(ce,{get selectedTool(){return Vh(),o()},set selectedTool(J){ho(sn,J)},$$legacy:!0}),P(k),P(z),P(v),te(()=>{lt(I,d(a)),lt(y,`by ${d(c)??""}`)}),Ue("click",z,Er(()=>{u()})),L(t,v),le()}var x9=ue('<div class="left-panel svelte-fwyvr2"><!></div>'),L9=ue('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function B9(t,e){ae(e,!1);const n=qe(),r=()=>ve(Ws,"$gameModeStore",n),i=A();Zh(async()=>{const h=window.location.origin,m=qg===""?h:`${h}/${qg}`;try{await v8({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const I="Failed to initialize MiniZinc: "+E.message;console.log(I)}}),D(()=>r(),()=>{O(i,r())}),Ie(),fe();var o=L9(),a=K(o);{var c=h=>{var m=x9(),E=K(m);F8(E),P(m),L(h,m)};Q(a,h=>{d(i)===$i.SETTING&&h(c)})}var u=G(a,2),_=K(u);Wz(_,{}),P(u);var g=G(u,2),v=K(g);A9(v,{}),P(g),P(o),L(t,o),le()}export{B9 as G,W9 as b,cS as p,gl as r,RS as s};
