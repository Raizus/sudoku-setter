var cb=Object.defineProperty;var ub=(t,e,n)=>e in t?cb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>ub(t,typeof e!="symbol"?e+"":e,n);import{c as Ou,o as db,p as _b,q as Ku,a as T,s as ie,u as Ge,t as ue,d as Ae,v as fb,m as gb}from"./disclose-version.MO2MFdNj.js";import{i as fe}from"./legacy.sN80Fe4S.js";import{l as mh,h as on,k as Es,y as Eh,v as _s,R as hb,V as pb,U as vb,g as Iu,i as Ch,F as Oh,a0 as mb,j as Eb,u as Dg,A as Cb,aJ as Vu,z as Ob,x as Ib,a2 as Xu,ar as Ih,J as kg,aK as bb,a3 as wb,a8 as yb,m as Lb,c as V,r as j,p as ae,s as M,t as te,a as le,Z as _,al as Qe,aL as D,_ as y,aM as Ie,$ as N,av as J,f as se,aN as Ab,aC as Ni,aO as tu,ak as Gg}from"./utils.DP-F0xIN.js";import{s as Ve,i as re,a as me,b as Ls,m as bh}from"./store.LjYb6QFI.js";import{s as ci,u as Sb,a as Nb,b as xb,c as Rb,e as Tb,f as Db,g as kb,h as Gb,t as Mb}from"./global.DKHZCW4A.js";import{e as lt,i as Ot}from"./each.BW2jvj41.js";import{i as Ub,p as U}from"./props.DNCAbpfG.js";import{w as $t,g as st,d as po}from"./index.C8uZp8ho.js";import{s as L,r as sn,a as wh,c as $b,b as Fb,d as yh}from"./attributes.H32U76MF.js";import{s as tt}from"./render.3Jdrsfl8.js";import{b as xi,c as Lh}from"./this.DYGG7ZR8.js";import{a as Pb,o as Ah}from"./index-client.jiOaxa6s.js";import{b as Mg}from"./paths.pbsaSKlY.js";function Hb(t,e,n,r,i){var o=t,a="",c;mh(()=>{if(a===(a=e()??"")){on&&Es();return}c!==void 0&&(Oh(c),c=void 0),a!==""&&(c=Eh(()=>{if(on){_s.data;for(var u=Es(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=hb(u);if(u===null)throw pb(),vb;Ou(_s,f),o=Iu(u);return}var v=a+"",g=db(v);Ou(Ch(g),g.lastChild),o.before(g)}))})}function gt(t,e,n,r,i){var c;on&&Es();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function Sh(t,e,n,r,i,o){let a=on;on&&Es();var c,u,f=null;on&&_s.nodeType===1&&(f=_s,Es());var v=on?_s:t,g;mh(()=>{const p=e()||null;var m=p==="svg"?Vu:null;p!==c&&(g&&(p===null?Ob(g,()=>{g=null,u=null}):p===u?Ib(g):Oh(g)),p&&p!==u&&(g=Eh(()=>{if(f=on?f:m?document.createElementNS(m,p):document.createElement(p),Ou(f,f),r){on&&_b(p)&&f.append(document.createComment(""));var E=on?Ch(f):f.appendChild(Eb());on&&(E===null?Dg(!1):Iu(E)),r(f,E)}Cb.nodes_end=f,v.before(f)})),c=p,c&&(u=c))},mb),a&&(Dg(!0),Iu(v))}function uo(t,e,n){var r=t.__className,i=Nh(e);on&&t.getAttribute("class")===i?t.__className=i:(r!==i||on&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Bb(t,e,n){var r=t.__className,i=Nh(e);on&&t.className===i?t.__className=i:(r!==i||on&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Nh(t,e){return(t??"")+""}function xt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Jn(t,e,n=e){var r=bb();Ku(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=ru(t)?iu(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(on&&t.defaultValue!==t.value||wb(e)==null&&t.value)&&n(ru(t)?iu(t.value):t.value),Xu(()=>{var i=e();ru(t)&&i===iu(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const nu=new Set;function ll(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),Ku(n,"change",()=>{var f=n.__value;o&&(f=Ug(a,f,n.checked)),i(f)},()=>i(o?[]:null)),Xu(()=>{var f=r();if(on&&n.defaultChecked!==n.checked){c=!0;return}o?(f=f||[],n.checked=f.includes(n.__value)):n.checked=Ub(n.__value,f)}),Ih(()=>{var f=a.indexOf(n);f!==-1&&a.splice(f,1)}),nu.has(a)||(nu.add(a),kg(()=>{a.sort((f,v)=>f.compareDocumentPosition(v)===4?-1:1),nu.delete(a)})),kg(()=>{if(c){var f;if(o)f=Ug(a,f,n.checked);else{var v=a.find(g=>g.checked);f=v==null?void 0:v.__value}i(f)}})}function Ug(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function ru(t){var e=t.type;return e==="number"||e==="range"}function iu(t){return t===""?null:+t}function Wb(t,e,n=e){Ku(t,"change",()=>{n(t.files)}),Xu(()=>{t.files=e()})}function Je(t,e,n){var r=yb(t,e);r&&r.set&&(t[e]=n,Ih(()=>{t[e]=null}))}function zb(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function nr(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function ou(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Yb(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=Lb(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var vo=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(vo||{}),qu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(qu||{}),xh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(xh||{}),Rh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(Rh||{}),Th=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(Th||{}),Dh=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(Dh||{}),kh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(kh||{}),Gh=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(Gh||{}),Mh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(Mh||{}),Uh=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Uh||{}),$h=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))($h||{}),cl=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(cl||{}),Zu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Zu||{}),Qu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(Qu||{}),Ju=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Ju||{}),ed=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(ed||{}),td=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(td||{}),nd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(nd||{}),rd=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(rd||{}),id=(t=>(t.CLONE_REGION="Clone Region",t))(id||{}),od=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(od||{}),sd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(sd||{}),ad=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(ad||{}),ld=(t=>(t.MAZE_WALL="Maze Wall",t))(ld||{}),cd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(cd||{}),ud=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(ud||{}),Fh=(t=>(t.PEN_TOOL="Pen Tool",t))(Fh||{});const dd={...xh,...Rh,...Th,...Gh,...Mh,...kh,...Uh,...$h,...Dh},Ph={...cl,...Zu,...Qu,...Ju,...ed,...td,...nd,...rd,...id,...od,...sd,...ad,...ld,...cd},d={...qu,...dd,...Ph,...ud,...Fh};var x=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(x||{});function jb(t){return Object.values(dd).includes(t)}function Kb(t){return Object.values(Ph).includes(t)}function ul(t){return Object.values(Zu).includes(t)||t===d.COSMETIC_CELL_ARROW}function dl(t){return Object.values(Qu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function Vb(t){return Object.values(cl).includes(t)||ul(t)||dl(t)||t===d.COSMETIC_CELL_CENTER_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function _l(t){return Object.values(Ju).includes(t)||t===d.COSMETIC_EDGE}function _d(t){return Object.values(ed).includes(t)||t===d.COSMETIC_CORNER}function fd(t){return Object.values(td).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function gd(t){return Object.values(nd).includes(t)||t===d.COSMETIC_ARROW}function hd(t){return Object.values(rd).includes(t)||t===d.COSMETIC_CAGE}function Hh(t){return Object.values(ad).includes(t)}function Bh(t){return Object.values(ld).includes(t)}function Wh(t){return Object.values(id).includes(t)}function Cs(t){const e=Object.values(od),n=Object.values(sd);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function Xb(t){return Object.values(cd).includes(t)}function qb(t){return Object.values(ud).includes(t)}function pd(t){return Object.values(qu).includes(t)}const Zb=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Qb=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function zh(t){for(const e of Object.values(d))if(e===t)return e}function Yh(t,e){return Object.values(e).includes(t)}var B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function hn(t,e,n){n!==void 0&&(t[e]=n)}function Jb(t){var e,n,r,i,o,a,c,u,f,v,g,p,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(f=t.strokeWidth)!=null&&f.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(p=t.fontSize)!=null&&p.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function bu(t){var n,r,i,o,a,c,u,f,v,g,p,m,E,I,O,b,A,k,G,H,$,F,z;const e={type:t.type};return hn(e,"n",(n=t.n)==null?void 0:n.value),hn(e,"r",(r=t.r)==null?void 0:r.value),hn(e,"height",(i=t.height)==null?void 0:i.value),hn(e,"width",(o=t.width)==null?void 0:o.value),hn(e,"inset",(a=t.inset)==null?void 0:a.value),hn(e,"angle",(c=t.angle)==null?void 0:c.value),hn(e,"fill",(u=t.fill)==null?void 0:u.value),hn(e,"stroke",(f=t.stroke)==null?void 0:f.value),hn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),hn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),hn(e,"strokeDashoffset",(p=t.strokeDashoffset)==null?void 0:p.value),hn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),hn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),hn(e,"opacity",(I=t.opacity)==null?void 0:I.value),hn(e,"displayValue",(O=t.displayValue)==null?void 0:O.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:A.value,shortenTail:(G=(k=t.linePathOptions)==null?void 0:k.shortenTail)==null?void 0:G.value,bezierRounding:($=(H=t.linePathOptions)==null?void 0:H.bezierRounding)==null?void 0:$.value,closeLoops:(z=(F=t.linePathOptions)==null?void 0:F.closeLoops)==null?void 0:z.value}),e}function ew(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const tw={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},jh={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},Kh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Wa={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},za={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},As={type:"Line",strokeWidth:.125,stroke:"gray"},vd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Vh={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},nw={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},rw={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var W=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(W||{});const fl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,An=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,mo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,iw=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Jt=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Eo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,md=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Te=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,ow=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,sw=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,aw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Co=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,lw=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,cw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,uw=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function dw(t){return ul(t)?ow():dl(t)?sw():t===d.XV?cw():_l(t)?aw():hd(t)?fl():gd(t)?mo():Cs(t)?iw():fd(t)?Te():Wh(t)?uw():""}var he=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(he||{}),wt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(wt||{});const _w={inputOptions:{type:he.ARROW},toolId:d.ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:mo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},fw={inputOptions:{type:he.ARROW},toolId:d.AVERAGE_ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:mo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},gw={inputOptions:{type:he.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:W.ARROW_TOOLS,shape:{type:B.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:mo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};he.ARROW,d.SQUARE_ROOT_ARROW,W.ARROW_TOOLS,B.LINE,mo(),x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL;const hw={inputOptions:{type:he.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:mo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};function pw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function vw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function mw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function Ew(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function Cw(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const Ow={Delete:null,Backspace:null};function Iw(t,e=10){if(t in Ow)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function bw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function ww(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function yw(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function Lw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Xh(t){return t==="Backspace"}function Oo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Xh(t.key))}function Aw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function Sw(t){return Aw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Nw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Mi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,f=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${f.source}$`,"i").test(t))}function $r(t,e,n){if(t===void 0)return t;let r=t;return Xh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Ed=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CAGE_TOOL],Sn=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CAGE_TOOL];function qh(t,e=5){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Zh(t,e,n){return $r(t,e,n)}const En={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},gl={type:he.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},Nn={...gl,valueUpdater:(t,e)=>Zh(t,e,qh)},xw={inputOptions:Nn,toolId:d.KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:An(),tags:[],categories:Sn}},Rw={inputOptions:Nn,toolId:d.UNIQUE_DIGITS_CAGE,order:W.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:An(),tags:[],categories:Sn}},Tw={inputOptions:Nn,toolId:d.INVERTED_KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:An(),tags:[],categories:Sn}},Dw={inputOptions:Nn,toolId:d.SUM_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:An(),tags:[],categories:Sn}},kw={inputOptions:gl,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:W.CAGE_TOOLS,shape:En,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:fl(),tags:[],categories:Ed}},Gw={inputOptions:gl,toolId:d.PARITY_BALANCE_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:fl(),tags:[],categories:Ed}},Mw={inputOptions:Nn,toolId:d.DIVISIBLE_KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:An(),tags:[],categories:Sn}},Uw={inputOptions:Nn,toolId:d.SPOTLIGHT_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:An(),tags:[],categories:Sn}},$w={inputOptions:gl,toolId:d.PUTTERIA_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:fl(),tags:[],categories:Ed}};d.KILLER_CAGE_LOOK_AND_SAY,W.CAGE_TOOLS,An();const Fw={inputOptions:Nn,toolId:d.MULTISET_CAGE,order:W.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:An(),tags:[],categories:Sn}},Pw={inputOptions:Nn,toolId:d.VAULTED_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:An(),tags:[],categories:Sn}};d.AQUARIUM_CAGE,W.CAGE_TOOLS,An();const Hw={inputOptions:Nn,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:An(),tags:[],categories:Sn}},Bw={inputOptions:Nn,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:An(),tags:[],categories:Sn}},Ww={inputOptions:Nn,toolId:d.DOUBLERS_KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:An(),tags:[],categories:Sn}},zw={inputOptions:Nn,toolId:d.NEGATORS_KILLER_CAGE,order:W.CAGE_TOOLS,shape:En,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:An(),tags:[],categories:Sn}},Yw={inputOptions:{type:he.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},jw={inputOptions:{type:he.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},Kw={inputOptions:{type:he.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[x.CELL_INPUT_TOOL]}},Vw={inputOptions:{type:he.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},Xw={inputOptions:{type:he.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},qw={inputOptions:{type:he.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[x.CELL_INPUT_TOOL]}},Zw={inputOptions:{type:he.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[x.CELL_INPUT_TOOL]}},Qw={inputOptions:{type:he.SELECTION},toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[x.CELL_INPUT_TOOL]}},Jw={inputOptions:{type:he.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},ey={type:he.CENTER_CORNER_OR_EDGE,targets:wt.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,W.OUTSIDE_TOOLS,B.CIRCLE,md(),x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT;const ty={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:wt.CLOSEST,valueUpdater:(t,e)=>$r(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:W.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:md(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}},ny={inputOptions:{type:he.CENTER_CORNER_OR_EDGE,targets:wt.CORNER_OR_EDGE,valueUpdater:(t,e)=>$r(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:W.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:md(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}},ry={inputOptions:{type:he.CLONE},toolId:d.CLONE_REGION,order:W.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[x.CLONE_CONSTRAINT,x.LOCAL_CONSTRAINT]}};function Qh(t,e=3){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Jh(t,e,n){return $r(t,e,n)}function iy(t,e){function n(){return!0}return $r(t,e,n)}const Cd={type:he.CORNER,defaultValue:"",valueUpdater:(t,e)=>Jh(t,e,Qh)},oy={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>iy(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:lw(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},sy={inputOptions:Cd,toolId:d.CORNER_SUM,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Co(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},ay={inputOptions:{type:he.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Co(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},ly={inputOptions:Cd,toolId:d.CORNER_EVEN_COUNT,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Co(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,W.CORNER_TOOLS,B.CIRCLE,Co(),x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL;const cy={inputOptions:{type:he.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Co(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},uy={inputOptions:{type:he.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Co(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},hl=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.EDGE_TOOL],zn=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.EDGE_TOOL],Ss=.15,ep=.02,ui={type:B.CIRCLE,r:{editable:!0,value:Ss,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:ep,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Od={type:B.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function dy(t,e=1){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function tp(t,e=3){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function _y(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Id(t,e,n){return $r(t,e,n)}function fy(t,e){return t===void 0?"V":_y(e)?e.toUpperCase():t}function gy(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function np(t,e){return t===void 0?"<":gy(e)?e:t}const Io={type:he.EDGE,valueUpdater:(t,e)=>Id(t,e,tp)},hy={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>Id(t,e,dy)},toolId:d.RATIO,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:Ss},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:zn}},py={inputOptions:Io,toolId:d.DIFFERENCE,order:W.EDGE_TOOLS,shape:ui,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:zn}},vy={inputOptions:Io,toolId:d.EDGE_SUM,order:W.EDGE_TOOLS,shape:{...ui,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:zn}},my={inputOptions:{type:he.EDGE,defaultValue:"V",valueUpdater:fy},toolId:d.XV,order:W.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:Ss},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:zn}},Ey={inputOptions:{type:he.EDGE,valueUpdater:np,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:W.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:zn}},Cy={inputOptions:Io,toolId:d.EDGE_PRODUCT,order:W.EDGE_TOOLS,shape:{...ui,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:zn}},Oy={inputOptions:Io,toolId:d.EDGE_MODULO,order:W.EDGE_TOOLS,shape:{...ui,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:zn}},Iy={inputOptions:Io,toolId:d.EDGE_FACTOR,order:W.EDGE_TOOLS,shape:{...ui,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:zn}},by={inputOptions:{type:he.EDGE},toolId:d.XY_DIFFERENCES,order:W.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ss},strokeWidth:{editable:!1,value:ep,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:zn}},wy={inputOptions:{type:he.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:W.EDGE_TOOLS,shape:ui,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:zn}},yy={inputOptions:{type:he.EDGE},toolId:d.YIN_YANG_KROPKI,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:Ss},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:zn}},Ly={inputOptions:{type:he.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:W.EDGE_TOOLS,shape:Od,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:hl}},Ay={inputOptions:{type:he.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:W.EDGE_TOOLS,shape:Od,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:hl}},Sy={inputOptions:{type:he.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:W.EDGE_TOOLS,shape:Od,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:hl}},Ny={inputOptions:{type:he.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:W.EDGE_TOOLS,shape:ui,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:hl}},xy={inputOptions:{type:he.EDGE,valueUpdater:np,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:W.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:zn}};d.CUSTOM_EDGE_CONSTRAINT,W.EDGE_TOOLS;const bo=[x.OUTSIDE_CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_CORNER_TOOL,x.OUTSIDE_DIRECTION_TOOL];function Ry(t,e=5){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function rp(t,e,n){return $r(t,e,n)}const wo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},yo={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>rp(t,e,Ry),defaultValue:"",cornerOrEdge:wt.CORNER},Ty={inputOptions:yo,toolId:d.LITTLE_KILLER_SUM,order:W.OUTSIDE_TOOLS,shape:wo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Eo(),tags:[],categories:bo}},Dy={inputOptions:yo,toolId:d.LITTLE_KILLER_PRODUCT,order:W.OUTSIDE_TOOLS,shape:wo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Eo(),tags:[],categories:bo}},ky={inputOptions:yo,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:W.OUTSIDE_TOOLS,shape:wo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Eo(),tags:[],categories:bo}},Gy={inputOptions:yo,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:W.OUTSIDE_TOOLS,shape:wo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Eo(),tags:[],categories:bo}},My={inputOptions:yo,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:W.OUTSIDE_TOOLS,shape:wo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Eo(),tags:[],categories:bo}},Uy={inputOptions:yo,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:W.OUTSIDE_TOOLS,shape:wo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Eo(),tags:[],categories:bo}},en=[x.OUTSIDE_EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_EDGE_TOOL,x.OUTSIDE_DIRECTION_TOOL];function Lo(t,e=5){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ns(t,e,n){return $r(t,e,n)}const tn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},xn={type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ns(t,e,Lo),defaultValue:"",cornerOrEdge:wt.EDGE},$y={inputOptions:xn,toolId:d.SANDWICH_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:Jt(),tags:[],categories:en}},Fy={inputOptions:{...xn,cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.MYSTERY_SANDWICH_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:Jt(),tags:[],categories:en}},Py={inputOptions:xn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:Jt(),tags:[],categories:en}},Hy={inputOptions:xn,toolId:d.X_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:Jt(),tags:[],categories:en}},By={inputOptions:xn,toolId:d.SHORTSIGHTED_X_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:Jt(),tags:[],categories:en}},Wy={inputOptions:xn,toolId:d.SHIFTED_X_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:Jt(),tags:[],categories:en}},zy={inputOptions:xn,toolId:d.BROKEN_X_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:Jt(),tags:[],categories:en}},Yy={inputOptions:xn,toolId:d.X_SUM_SKYSCRAPERS,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:Jt(),tags:[],categories:en}},jy={inputOptions:xn,toolId:d.BATTLEFIELD,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:Jt(),tags:[],categories:en}},Ky={inputOptions:xn,toolId:d.SKYSCRAPERS,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:Jt(),tags:[],categories:en}},Vy={inputOptions:xn,toolId:d.X_INDEX,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:Jt(),tags:[],categories:en}},Xy={inputOptions:xn,toolId:d.RISING_STREAK,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:Jt(),tags:[],categories:en}};d.ROW_OR_COLUMN_RANK,W.OUTSIDE_TOOLS,Jt();const qy={inputOptions:xn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:Jt(),tags:[],categories:en}},Zy={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ns(t,e,Lo),defaultValue:"",cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:Jt(),tags:[],categories:en}},Qy={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ns(t,e,Lo),defaultValue:"",cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:Jt(),tags:[],categories:en}},Jy={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ns(t,e,Lo),defaultValue:"",cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:Jt(),tags:[],categories:en}},eL={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ns(t,e,Lo),defaultValue:"",cornerOrEdge:wt.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:W.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:Jt(),tags:[],categories:en}},tL={inputOptions:{type:he.SINGLE_CELL},toolId:d.COSMETIC_CELL_CENTER_SHAPE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},nL={inputOptions:{type:he.SINGLE_CELL_ARROW,cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},rL={inputOptions:{type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},iL={inputOptions:{type:he.EDGE,valueUpdater:(t,e)=>Id(t,e,tp),defaultValue:""},toolId:d.COSMETIC_EDGE,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},oL={inputOptions:{type:he.CORNER,valueUpdater:(t,e)=>Jh(t,e,Qh),defaultValue:""},toolId:d.COSMETIC_CORNER,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},sL={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},aL={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},lL={inputOptions:{type:he.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},cL={inputOptions:{type:he.CAGE,valueUpdater:(t,e)=>Zh(t,e,qh),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:W.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},uL={inputOptions:{type:he.ARROW},toolId:d.COSMETIC_ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT]}},dL={inputOptions:{type:he.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>rp(t,e,Lo),defaultValue:"",cornerOrEdge:wt.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_DIRECTION_TOOL]}},Ao=[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT,x.DIAGONAL_CONSTRAINT],_L={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},fL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},gL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},hL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},pL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},vL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},mL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},EL={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},CL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},OL={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},IL={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},bL={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},wL={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},yL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Ao}},LL={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Ao}},AL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Ao}},SL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Ao}},NL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Ao}},xL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Ao}},RL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},TL={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},DL={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},kL={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},GL={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},ML={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},UL={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},$L={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},FL={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},PL={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},HL={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},BL={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},WL={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},zL={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},YL={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}};d.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT;d.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT;const jL={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},KL={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},VL={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},XL={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},qL={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},ZL={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},QL={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},JL={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},eA={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},tA={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},nA={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},rA={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},iA={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},oA={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},sA={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},aA={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},lA={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},cA={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},uA={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},dA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},_A={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},fA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},gA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},hA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},pA={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},vA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},mA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},EA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},CA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},OA={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},IA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},bA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},wA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},yA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},LA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},AA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},SA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},NA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},xA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},RA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},TA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},DA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},kA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},GA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},MA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},UA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},$A={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},FA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},PA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},HA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},BA={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},WA={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},zA={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},YA={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},He=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.LINE_TOOL],Fr=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.DOUBLE_ENDED_LINE_CONSTRAINT,x.LINE_TOOL],xs={description:"",usage:Te(),tags:[],categories:He},Rt={type:he.LINE,allowSelfIntersection:!0},qt={type:he.LINE,allowSelfIntersection:!1},jA={inputOptions:qt,toolId:d.THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...xs,description:"Numbers along a thermometer must increase from the bulb end."}},KA={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...xs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},VA={inputOptions:qt,toolId:d.FUZZY_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...xs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},XA={inputOptions:qt,toolId:d.SLOW_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...xs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},qA={inputOptions:qt,toolId:d.ROW_CYCLE_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...xs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},ZA={inputOptions:Rt,toolId:d.PALINDROME,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Te(),tags:[],categories:He}},QA={inputOptions:Rt,toolId:d.RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Te(),tags:[],categories:He}},JA={inputOptions:Rt,toolId:d.DOUBLE_RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Te(),tags:[],categories:He}},eS={inputOptions:Rt,toolId:d.RENRENBANBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Te(),tags:[],categories:He}},tS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:He}},nS={inputOptions:Rt,toolId:d.NABNER_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:He}},rS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Te(),tags:[],categories:He}},iS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Te(),tags:[],categories:He}},oS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Te(),tags:[],categories:He}},sS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Te(),tags:[],categories:He}},aS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:He}},lS={inputOptions:qt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Te(),tags:[],categories:He}},cS={inputOptions:qt,toolId:d.INDEX_LINE,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Te(),tags:[],categories:He}},uS={inputOptions:Rt,toolId:d.UNIQUE_VALUES_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Te(),tags:[],categories:He}},dS={inputOptions:Rt,toolId:d.REGION_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Te(),tags:[],categories:He}},_S={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Te(),tags:[],categories:He}},fS={inputOptions:qt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Te(),tags:[],categories:He}},gS={inputOptions:Rt,toolId:d.SAME_PARITY_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Te(),tags:[],categories:He}},hS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:He}},pS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Te(),tags:[],categories:He}},vS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Te(),tags:[],categories:He}},mS={inputOptions:Rt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Te(),tags:[],categories:He}},ES={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Te(),tags:[],categories:He}},CS={inputOptions:Rt,toolId:d.ENTROPIC_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Te(),tags:[],categories:He}},OS={inputOptions:Rt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Te(),tags:[],categories:He}},IS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Te(),tags:[],categories:He}},bS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Te(),tags:[],categories:He}},wS={inputOptions:qt,toolId:d.REPEATED_DIGITS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Te(),tags:[],categories:He}},yS={inputOptions:qt,toolId:d.SUPERFUZZY_ARROW,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Te(),tags:[],categories:He}},LS={inputOptions:Rt,toolId:d.AMBIGUOUS_ARROW,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Te(),tags:[],categories:He}},AS={inputOptions:qt,toolId:d.HEADLESS_ARROW,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Te(),tags:[],categories:He}},SS={inputOptions:Rt,toolId:d.XV_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Te(),tags:[],categories:He}},NS={inputOptions:qt,toolId:d.ROW_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Te(),tags:[],categories:He}},xS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Te(),tags:[],categories:He}},RS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Te(),tags:[],categories:He}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,W.LINE_TOOLS,B.LINE,Te();const TS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Te(),tags:[],categories:He}},DS={inputOptions:Rt,toolId:d.ADJACENT_MULTIPLES_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Te(),tags:[],categories:He}},kS={inputOptions:Rt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Te(),tags:[],categories:He}},GS={inputOptions:qt,toolId:d.LOOK_AND_SAY_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Te(),tags:[],categories:He}},MS={inputOptions:qt,toolId:d.ZIPPER_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Te(),tags:[],categories:He}},US={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Te(),tags:[],categories:He}},$S={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Te(),tags:[],categories:He}},FS={inputOptions:{type:he.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Te(),tags:[],categories:He}};d.THERMO_OR_AVERAGE_ARROW,W.LINE_TOOLS,B.THERMO_WITH_CIRCLE,Te();const PS={inputOptions:qt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Te(),tags:[],categories:He}},HS={inputOptions:qt,toolId:d.PEAPODS,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Te(),tags:[],categories:He}},BS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Te(),tags:[],categories:He}},WS={inputOptions:Rt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Te(),tags:[],categories:He}},zS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:He}},YS={inputOptions:Rt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Te(),tags:[],categories:He}},jS={inputOptions:qt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Te(),tags:[],categories:He}},KS={inputOptions:qt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Te(),tags:[],categories:He}},VS={inputOptions:Rt,toolId:d.BETWEEN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Te(),tags:[],categories:Fr}},XS={inputOptions:{type:he.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Te(),tags:[],categories:Fr}},qS={inputOptions:Rt,toolId:d.TIGHTROPE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Te(),tags:[],categories:Fr}},ZS={inputOptions:Rt,toolId:d.PARITY_COUNT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Te(),tags:[],categories:Fr}},QS={inputOptions:Rt,toolId:d.DOUBLE_ARROW_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Te(),categories:Fr}},JS={inputOptions:Rt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Te(),tags:[],categories:Fr}},eN={inputOptions:Rt,toolId:d.SPLIT_PEAS,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Te(),tags:[],categories:Fr}},tN={inputOptions:qt,toolId:d.DOUBLERS_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Te(),tags:[],categories:He}},nN={inputOptions:Rt,toolId:d.DOUBLERS_BETWEEN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:Fr}},rN={inputOptions:Rt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:Fr}},Ye=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_SHAPE_TOOL],So=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_COLOR_TOOL],pl={type:B.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Ui={type:B.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function vl(t,e=3){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function iN(t){return t===""||t==="1"||t==="2"||t==="3"}function Rs(t,e,n){return $r(t,e,n)}const Xe={type:he.SINGLE_CELL},di={type:he.SINGLE_CELL,valueUpdater:(t,e)=>Rs(t,e,vl),defaultValue:""},ip={type:he.SINGLE_CELL_ARROW,cornerOrEdge:wt.CORNER_OR_EDGE},oN={inputOptions:Xe,toolId:d.ODD,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:Ye}},sN={inputOptions:Xe,toolId:d.EVEN,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:Ye}},aN={inputOptions:Xe,toolId:d.MINIMUM,order:W.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},lN={inputOptions:Xe,toolId:d.MAXIMUM,order:W.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}};d.PRIME_CELL,W.CELL_COLOR_TOOL;const cN={inputOptions:Xe,toolId:d.ODD_MINESWEEPER,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Ye}},uN={inputOptions:Xe,toolId:d.EVEN_MINESWEEPER,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:Ye}},dN={inputOptions:Xe,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:Ye}},_N={inputOptions:Xe,toolId:d.WATCHTOWER,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Ye}},fN={inputOptions:Xe,toolId:d.NOT_WATCHTOWER,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:Ye}},gN={inputOptions:di,toolId:d.FARSIGHT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:Ye}},hN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Rs(t,e,vl),defaultValue:"9"},toolId:d.RADAR,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:Ye}},pN={inputOptions:Xe,toolId:d.ORTHOGONAL_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:Ye}},vN={inputOptions:Xe,toolId:d.INDEXING_COLUMN,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:So}},mN={inputOptions:Xe,toolId:d.INDEXING_ROW,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:So}},EN={inputOptions:Xe,toolId:d.LOW_DIGIT,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:So}},CN={inputOptions:Xe,toolId:d.HIGH_DIGIT,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:So}},ON={inputOptions:Xe,toolId:d.FRIENDLY_CELL,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:So}},IN={inputOptions:Xe,toolId:d.DIAGONALLY_ADJACENT_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:Ye}},bN={inputOptions:Xe,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:Ye}},wN={inputOptions:Xe,toolId:d.SANDWICH_ROW_COL_COUNT,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:Ye}},yN={inputOptions:Xe,toolId:d.COUNTING_CIRCLES,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:Ye}},LN={inputOptions:Xe,toolId:d.REVERSE_COUNTING_CIRCLES,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:Ye}},AN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Rs(t,e,iN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:Ye}},SN={inputOptions:Xe,toolId:d.UNIQUE_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:Ye}},NN={inputOptions:Xe,toolId:d.SEEN_EVEN_COUNT,order:W.CELL_SHAPE_TOOL,shape:pl,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Ye}},xN={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Rs(t,e,vl),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:Ye}},RN={inputOptions:Xe,toolId:d.SEEN_ODD_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:Ye}},TN={inputOptions:Xe,toolId:d.YIN_YANG_MINESWEEPER,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:Ye}},DN={inputOptions:Xe,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Ye}},kN={inputOptions:Xe,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:Ye}},GN={inputOptions:Xe,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:W.CELL_SHAPE_TOOL,shape:pl,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:Ye}},MN={inputOptions:Xe,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:Ye}},UN={inputOptions:Xe,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:Ye}},$N={inputOptions:Xe,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:Ye}},FN={inputOptions:Xe,toolId:d.SEEN_REGION_BORDERS_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:Ye}},PN={inputOptions:Xe,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:Ye}},HN={inputOptions:Xe,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:Ye}},BN={inputOptions:ip,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},WN={inputOptions:ip,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},zN={inputOptions:di,toolId:d.SASHIGANE_REGION_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:Ye}},YN={inputOptions:Xe,toolId:d.CELL_ON_THE_LOOP,order:W.CELL_SHAPE_TOOL,shape:pl,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:Ye}},jN={inputOptions:Xe,toolId:d.CELL_NOT_ON_THE_LOOP,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:Ye}},KN={inputOptions:Xe,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:Ye}},VN={inputOptions:di,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:Ye}},XN={inputOptions:Xe,toolId:d.CAVE_CLUE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:Ye}},qN={inputOptions:di,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:Ye}},ZN={inputOptions:di,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:Ye}},QN={inputOptions:di,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:Ye}},JN={inputOptions:Xe,toolId:d.DIRECTED_PATH_START,order:W.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:Ye}},ex={inputOptions:Xe,toolId:d.DIRECTED_PATH_END,order:W.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:Ye}},tx={inputOptions:di,toolId:d.TELEPORT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:Ye}},nx={inputOptions:di,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:Ye}},rx={inputOptions:Xe,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:W.CELL_SHAPE_TOOL,shape:{...pl,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:Ye}},ix={inputOptions:Xe,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:Ye}},ox={inputOptions:Xe,toolId:d.CONNECT_FOUR_YELLOW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:Ye}},sx={inputOptions:Xe,toolId:d.CONENCT_FOUR_RED,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:Ye}},ax={inputOptions:Xe,toolId:d.SHIKAKU_REGION_SIZE,order:W.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:Ye}},lx={inputOptions:{type:he.SINGLE_CELL,valueUpdater:(t,e)=>Rs(t,e,vl),defaultValue:"?"},toolId:d.SHIKAKU_REGION_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:Ye}},cr=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_MULTIARROW_TOOL],Pr={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},ur={type:he.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:wt.CORNER_OR_EDGE},cx={inputOptions:ur,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:cr}},ux={inputOptions:ur,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:cr}},dx={inputOptions:ur,toolId:d.LOOP_CELL_COUNT_ARROWS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:cr}},_x={inputOptions:ur,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:cr}},fx={inputOptions:ur,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:cr}},gx={inputOptions:ur,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:cr}},hx={inputOptions:ur,toolId:d.COLD_ARROWS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:cr}},px={inputOptions:ur,toolId:d.HOT_ARROWS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:cr}},vx={inputOptions:ur,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:cr}},mx={inputOptions:ur,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:cr}},Ex={inputOptions:ur,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:W.CELL_SHAPE_TOOL,shape:Pr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:cr}},Cx={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},Ox={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},Ix={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},bx={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const wx={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},yx={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const Lx={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},Ax={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},Sx=[x.CORNER_LINE_CONSTRAINT,x.CORNER_LINE_TOOL,x.LOCAL_CONSTRAINT],Nx={inputOptions:{type:he.CORNER_LINE},toolId:d.MAZE_WALL,order:W.EDGE_TOOLS,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:Sx}},yt={[d.GIVEN]:Yw,[d.DIGIT]:jw,[d.REGIONS]:Kw,[d.OUTSIDE]:Zw,[d.CORNER_PM]:Vw,[d.CENTER_PM]:Xw,[d.HIGHLIGHTS]:qw,[d.FOG]:Qw,[d.PEN_TOOL]:Jw,[d.SUDOKU_RULES_DO_NOT_APPLY]:_L,[d.LEAVE_EMPTY_CELLS_EMPTY]:fL,[d.LITS]:pL,[d.HEXED_SUDOKU]:gL,[d.FILLOMINO]:hL,[d.ANTIKNIGHT]:vL,[d.ANTI_LONG_KNIGHT]:EL,[d.ANTIKING]:CL,[d.ANTI_GIRAFFE]:mL,[d.DISJOINT_GROUPS]:OL,[d.TANGO]:IL,[d.NONCONSECUTIVE]:bL,[d.NONRATIO]:wL,[d.ANTI_ENTROPY]:TL,[d.GLOBAL_INDEXING_COLUMN]:DL,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:kL,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:RL,[d.NEGATIVE_DIAGONAL]:yL,[d.POSITIVE_DIAGONAL]:LL,[d.NEGATIVE_ANTIDIAGONAL]:AL,[d.POSITIVE_ANTIDIAGONAL]:SL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:NL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:xL,[d.ALL_RATIOS_GIVEN]:GL,[d.ALL_DIFFERENCES_GIVEN]:ML,[d.ALL_X_GIVEN]:UL,[d.ALL_V_GIVEN]:$L,[d.ALL_XV_GIVEN]:FL,[d.ALL_RADARS_GIVEN]:PL,[d.ALL_XY_DIFFERENCES_GIVEN]:HL,[d.ALL_INDEXING_COLUMN_GIVEN]:BL,[d.ALL_INDEXING_ROW_GIVEN]:WL,[d.ALL_YIN_YANG_KROPKI_GIVEN]:zL,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:YL,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:KL,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:VL,[d.CAVE_CELLS_ARE_ODD]:xA,[d.CAVE_WALLS_ARE_EVEN]:NA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:AA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:SA,[d.DOUBLERS]:wx,[d.NEGATORS]:yx,[d.NEXUS]:Lx,[d.INDEXER_CELLS]:Ax,[d.CHAOS_CONSTRUCTION]:XL,[d.NUMBERED_CHAOS_CONSTRUCTION]:qL,[d.CHAOS_CONSTRUCTION_SUGURU]:ZL,[d.YIN_YANG]:QL,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:JL,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:eA,[d.NURIMISAKI]:tA,[d.NURIKABE]:nA,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:rA,[d.TWO_CONTIGUOUS_REGIONS]:iA,[d.SASHIGANE]:oA,[d.NORINORI]:sA,[d.SHIKAKU]:aA,[d.SHIKAKU_NO_REPEATS_IN_REGION]:lA,[d.GOLDILOCKS_ZONE]:uA,[d.CELL_CENTER_LOOP_NO_TOUCHING]:dA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:_A,[d.NOT_LOOP_SIZED_REGIONS]:hA,[d.MODULAR_LOOP]:pA,[d.CAVE]:yA,[d.CAVE_LITS]:RA,[d.RENBAN_CAVES]:TA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:LA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:jL,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:fA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:gA,[d.GALAXIES]:kA,[d.TWO_SYMMETRIC_GALAXIES]:UA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:GA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:MA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:$A,[d.PENTOMINO_TILLING]:FA,[d.TILLING_NO_EMPTY_CELLS]:PA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:HA,[d.NORINORI_STAR_BATTLE]:cA,[d.MAZE_DIRECTED_PATH]:vA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:mA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:IA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:EA,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:OA,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:bA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:wA,[d.DIRECTED_PATH_IS_PARITY_LINE]:CA,[d.CONNECT_FOUR]:BA,[d.CONNECT_FOUR_DRAW]:WA,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:zA,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:YA,[d.ODD]:oN,[d.EVEN]:sN,[d.MINIMUM]:aN,[d.MAXIMUM]:lN,[d.ODD_MINESWEEPER]:cN,[d.EVEN_MINESWEEPER]:uN,[d.WATCHTOWER]:_N,[d.NOT_WATCHTOWER]:fN,[d.FARSIGHT]:gN,[d.RADAR]:hN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:dN,[d.ORTHOGONAL_SUM]:pN,[d.DIAGONALLY_ADJACENT_SUM]:IN,[d.INDEXING_COLUMN]:vN,[d.INDEXING_ROW]:mN,[d.LOW_DIGIT]:EN,[d.HIGH_DIGIT]:CN,[d.FRIENDLY_CELL]:ON,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:bN,[d.SANDWICH_ROW_COL_COUNT]:wN,[d.COUNTING_CIRCLES]:yN,[d.REVERSE_COUNTING_CIRCLES]:LN,[d.COLORED_COUNTING_CIRCLES]:AN,[d.UNIQUE_CELLS]:SN,[d.SEEN_EVEN_COUNT]:NN,[d.SEEN_ODD_COUNT]:RN,[d.CELL_KNIGHT_WHISPERS]:xN,[d.YIN_YANG_MINESWEEPER]:TN,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:DN,[d.YIN_YANG_SEEN_SHADED_CELLS]:kN,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:GN,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:MN,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:UN,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:$N,[d.SEEN_REGION_BORDERS_COUNT]:FN,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:PN,[d.SASHIGANE_BEND_REGION_COUNT]:HN,[d.SASHIGANE_REGION_SUM]:zN,[d.CELL_ON_THE_LOOP]:YN,[d.CELL_NOT_ON_THE_LOOP]:jN,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:KN,[d.CAVE_CLUE]:XN,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:VN,[d.YIN_YANG_FILLOMINO_PARITY]:DA,[d.SHIKAKU_REGION_SIZE]:ax,[d.SHIKAKU_REGION_SUM]:lx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:qN,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:ZN,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:QN,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:nx,[d.DIRECTED_PATH_START]:JN,[d.DIRECTED_PATH_END]:ex,[d.TELEPORT]:tx,[d.CONNECT_FOUR_YELLOW]:ox,[d.CONENCT_FOUR_RED]:sx,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:BN,[d.THERMO_SIGHTLINE_LOOP_ARROW]:WN,[d.HOT_ARROWS]:px,[d.COLD_ARROWS]:hx,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:gx,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:_x,[d.YIN_YANG_COUNT_SHADED_CELLS]:fx,[d.LOOP_CELL_COUNT_ARROWS]:dx,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:ux,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:cx,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:vx,[d.NURIKABE_SEEN_WATERWAY_CELLS]:rx,[d.NURIKABE_ISLAND_SIZE_CELL]:ix,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:mx,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:Ex,[d.DIFFERENCE]:py,[d.RATIO]:hy,[d.XV]:my,[d.EDGE_INEQUALITY]:Ey,[d.EDGE_SUM]:vy,[d.EDGE_PRODUCT]:Cy,[d.EDGE_MODULO]:Oy,[d.EDGE_FACTOR]:Iy,[d.XY_DIFFERENCES]:by,[d.YIN_YANG_WHITE_KROPKI]:wy,[d.YIN_YANG_KROPKI]:yy,[d.FILLOMINO_REGION_BORDER]:Ly,[d.UNKNOWN_REGION_BORDER]:Ay,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:Sy,[d.EDGE_CAVE_ONE_OF_EACH]:Ny,[d.ONE_WAY_DOOR]:xy,[d.QUADRUPLE]:oy,[d.CORNER_SUM]:sy,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:ay,[d.CORNER_EVEN_COUNT]:ly,[d.PRODUCT_SQUARE]:cy,[d.EQUAL_DIAGONAL_DIFFERENCES]:uy,[d.THERMOMETER]:jA,[d.FUZZY_THERMOMETER]:VA,[d.SLOW_THERMOMETER]:XA,[d.CUSTOM_THERMOMETER]:KA,[d.ROW_CYCLE_THERMOMETER]:qA,[d.PALINDROME]:ZA,[d.RENBAN_LINE]:QA,[d.DOUBLE_RENBAN_LINE]:JA,[d.RENRENBANBAN_LINE]:eS,[d.N_CONSECUTIVE_RENBAN_LINE]:tS,[d.NABNER_LINE]:nS,[d.WHISPERS_LINE]:rS,[d.DUTCH_WHISPERS]:iS,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:oS,[d.RENBAN_OR_WHISPERS_LINE]:sS,[d.RENBAN_OR_NABNER_LINE]:aS,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:lS,[d.INDEX_LINE]:cS,[d.UNIQUE_VALUES_LINE]:uS,[d.REPEATED_DIGITS_LINE]:wS,[d.REGION_SUM_LINE]:dS,[d.SUM_LINE]:_S,[d.XV_LINE]:SS,[d.ROW_SUM_LINE]:NS,[d.AT_LEAST_X_LINE]:xS,[d.SUPERFUZZY_ARROW]:yS,[d.AMBIGUOUS_ARROW]:LS,[d.HEADLESS_ARROW]:AS,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:RS,[d.PRODUCT_LINE]:TS,[d.ADJACENT_MULTIPLES_LINE]:DS,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:kS,[d.LOOK_AND_SAY_LINE]:GS,[d.ARITHMETIC_SEQUENCE_LINE]:fS,[d.ZIPPER_LINE]:MS,[d.SEGMENTED_SUM_LINE]:US,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:$S,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:FS,[d.SAME_PARITY_LINE]:gS,[d.MODULAR_LINE]:hS,[d.UNIMODULAR_LINE]:pS,[d.MODULAR_OR_UNIMODULAR_LINE]:vS,[d.ODD_EVEN_OSCILLATOR_LINE]:mS,[d.HIGH_LOW_OSCILLATOR_LINE]:ES,[d.ENTROPIC_LINE]:CS,[d.ENTROPIC_OR_MODULAR_LINE]:OS,[d.INDEXING_COLUMN_IS_X_LINE]:IS,[d.INDEXING_ROW_IS_X_LINE]:bS,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:PS,[d.PEAPODS]:HS,[d.YIN_YANG_INDEXING_LINE_COLORING]:jS,[d.YIN_YANG_SHADED_WHISPERS_LINE]:BS,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:WS,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:zS,[d.YIN_YANG_REGION_SUM_LINE]:YS,[d.GOLDILOCKS_ZONE_REGION_SUM]:KS,[d.BETWEEN_LINE]:VS,[d.LOCKOUT_LINE]:XS,[d.PARITY_COUNT_LINE]:ZS,[d.TIGHTROPE_LINE]:qS,[d.DOUBLE_ARROW_LINE]:QS,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:JS,[d.SPLIT_PEAS]:eN,[d.DOUBLERS_THERMOMETER]:tN,[d.DOUBLERS_BETWEEN_LINE]:nN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:rN,[d.ARROW]:_w,[d.CHAOS_CONSTRUCTION_ARROW]:hw,[d.AVERAGE_ARROW]:fw,[d.BULBOUS_ARROW]:gw,[d.MAZE_WALL]:Nx,[d.KILLER_CAGE]:xw,[d.UNIQUE_DIGITS_CAGE]:Rw,[d.INVERTED_KILLER_CAGE]:Tw,[d.SUM_CAGE]:Dw,[d.SUM_CAGE_LOOK_AND_SAY]:kw,[d.PARITY_BALANCE_CAGE]:Gw,[d.DIVISIBLE_KILLER_CAGE]:Mw,[d.SPOTLIGHT_CAGE]:Uw,[d.PUTTERIA_CAGE]:$w,[d.MULTISET_CAGE]:Fw,[d.VAULTED_CAGE]:Pw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:Hw,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:Bw,[d.DOUBLERS_KILLER_CAGE]:Ww,[d.NEGATORS_KILLER_CAGE]:zw,[d.CLONE_REGION]:ry,[d.SANDWICH_SUM]:$y,[d.MYSTERY_SANDWICH_SUM]:Fy,[d.X_SUM]:Hy,[d.SHORTSIGHTED_X_SUM]:By,[d.SHIFTED_X_SUM]:Wy,[d.BROKEN_X_SUM]:zy,[d.X_SUM_SKYSCRAPERS]:Yy,[d.BATTLEFIELD]:jy,[d.SKYSCRAPERS]:Ky,[d.X_INDEX]:Vy,[d.SANDWICH_SUM_XOR_X_SUM]:Py,[d.RISING_STREAK]:Xy,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:qy,[d.OUTSIDE_CONSECUTIVE_SUM]:Zy,[d.LOOPWICHES]:Qy,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:Jy,[d.PENTOMINO_BORDER_COUNT]:eL,[d.LITTLE_KILLER_SUM]:Ty,[d.LITTLE_KILLER_PRODUCT]:Dy,[d.LITTLE_KILLER_LOOK_AND_SAY]:ky,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:My,[d.X_OMIT_LITTLE_KILLER_SUM]:Gy,[d.NEGATORS_LITTLE_KILLER_SUM]:Uy,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:ty,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:ny,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:Cx,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:Ox,[d.FORBIDDEN_KNIGHT_SUM]:Ix,[d.LITS_MAX_TETROMINO_SUM]:bx,[d.COSMETIC_CELL_CENTER_SHAPE]:tL,[d.COSMETIC_CELL_ARROW]:nL,[d.COSMETIC_CELL_MULTI_ARROW]:rL,[d.COSMETIC_EDGE]:iL,[d.COSMETIC_CORNER]:oL,[d.COSMETIC_LINE]:sL,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:aL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:lL,[d.COSMETIC_ARROW]:uL,[d.COSMETIC_CAGE]:cL,[d.COSMETIC_OUTSIDE_DIRECTION]:dL};class Ri extends Map{constructor(){super()}setConstraint(e,n){return jb(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Ri;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Ri;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=zh(r);o!==void 0&&Yh(o,dd)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Pe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Pe||{});function op(t){if(!(t in Pe))throw Error(" not a key in DIRECTION");return Pe[t]}function je(t,e){return t.r===e.r&&t.c===e.c}function sp(t,e){return{r:t.r+e.r,c:t.c+e.c}}function xx(t,e){return{r:t.r*e,c:t.c*e}}function Rx(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Ts(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!je(t,e)}function Tx(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ya(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Wt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function ml(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function Dx(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ja(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function kx(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const Gx=new Map([[6,Pe.N],[2,Pe.S],[0,Pe.E],[4,Pe.W],[7,Pe.NE],[5,Pe.NW],[1,Pe.SE],[3,Pe.SW]]);function Os(t){t=t%8;const e=Gx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const Mx=new Map([[Pe.N,{r:-1,c:0}],[Pe.S,{r:1,c:0}],[Pe.E,{r:0,c:1}],[Pe.W,{r:0,c:-1}],[Pe.NE,{r:-1,c:1}],[Pe.NW,{r:-1,c:-1}],[Pe.SE,{r:1,c:1}],[Pe.SW,{r:1,c:-1}]]);function Ds(t){const e=Mx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function ap(t,e){const n=Ds(e);return sp(t,n)}function Ka(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function lp(t,e,n=!1){const r=t.some(o=>je(o,e)),i=n?t.some(o=>Ts(o,e)):t.some(o=>Tx(o,e));if(!r&&i){const o=[...t,e];return Ya(o),o}return t}function Da(t){return`R${t.r+1}C${t.c+1}`}function bd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Ux=cs.exports,$g;function $x(){return $g||($g=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,v="__lodash_placeholder__",g=1,p=2,m=4,E=1,I=2,O=1,b=2,A=4,k=8,G=16,H=32,$=64,F=128,z=256,Q=512,ce=30,Z="...",ne=800,pe=16,Ee=1,ye=2,Re=3,Ue=1/0,xe=9007199254740991,Ce=17976931348623157e292,rt=NaN,$e=4294967295,At=$e-1,Tt=$e>>>1,ln=[["ary",F],["bind",O],["bindKey",b],["curry",k],["curryRight",G],["flip",Q],["partial",H],["partialRight",$],["rearg",z]],Dt="[object Arguments]",Mt="[object Array]",Ir="[object AsyncFunction]",Zt="[object Boolean]",ir="[object Date]",Bi="[object DOMException]",br="[object Error]",wr="[object Function]",Fe="[object GeneratorFunction]",be="[object Map]",De="[object Number]",Me="[object Null]",St="[object Object]",$o="[object Promise]",$l="[object Proxy]",jr="[object RegExp]",Rn="[object Set]",Kr="[object String]",Wi="[object Symbol]",Fl="[object Undefined]",hi="[object WeakMap]",ft="[object WeakSet]",Tn="[object ArrayBuffer]",yr="[object DataView]",zi="[object Float32Array]",_r="[object Float64Array]",Fo="[object Int8Array]",Po="[object Int16Array]",Ho="[object Int32Array]",Bo="[object Uint8Array]",Pl="[object Uint8ClampedArray]",Hl="[object Uint16Array]",Bl="[object Uint32Array]",xv=/\b__p \+= '';/g,Rv=/\b(__p \+=) '' \+/g,Tv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,r_=/&(?:amp|lt|gt|quot|#39);/g,i_=/[&<>"']/g,Dv=RegExp(r_.source),kv=RegExp(i_.source),Gv=/<%-([\s\S]+?)%>/g,Mv=/<%([\s\S]+?)%>/g,o_=/<%=([\s\S]+?)%>/g,Uv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$v=/^\w*$/,Fv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wl=/[\\^$.*+?()[\]{}|]/g,Pv=RegExp(Wl.source),zl=/^\s+/,Hv=/\s/,Bv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Wv=/\{\n\/\* \[wrapped with (.+)\] \*/,zv=/,? & /,Yv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jv=/[()=,{}\[\]\/\s]/,Kv=/\\(\\)?/g,Vv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,s_=/\w*$/,Xv=/^[-+]0x[0-9a-f]+$/i,qv=/^0b[01]+$/i,Zv=/^\[object .+?Constructor\]$/,Qv=/^0o[0-7]+$/i,Jv=/^(?:0|[1-9]\d*)$/,em=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ys=/($^)/,tm=/['\n\r\u2028\u2029\\]/g,js="\\ud800-\\udfff",nm="\\u0300-\\u036f",rm="\\ufe20-\\ufe2f",im="\\u20d0-\\u20ff",a_=nm+rm+im,l_="\\u2700-\\u27bf",c_="a-z\\xdf-\\xf6\\xf8-\\xff",om="\\xac\\xb1\\xd7\\xf7",sm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",am="\\u2000-\\u206f",lm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u_="A-Z\\xc0-\\xd6\\xd8-\\xde",d_="\\ufe0e\\ufe0f",__=om+sm+am+lm,Yl="['’]",cm="["+js+"]",f_="["+__+"]",Ks="["+a_+"]",g_="\\d+",um="["+l_+"]",h_="["+c_+"]",p_="[^"+js+__+g_+l_+c_+u_+"]",jl="\\ud83c[\\udffb-\\udfff]",dm="(?:"+Ks+"|"+jl+")",v_="[^"+js+"]",Kl="(?:\\ud83c[\\udde6-\\uddff]){2}",Vl="[\\ud800-\\udbff][\\udc00-\\udfff]",Yi="["+u_+"]",m_="\\u200d",E_="(?:"+h_+"|"+p_+")",_m="(?:"+Yi+"|"+p_+")",C_="(?:"+Yl+"(?:d|ll|m|re|s|t|ve))?",O_="(?:"+Yl+"(?:D|LL|M|RE|S|T|VE))?",I_=dm+"?",b_="["+d_+"]?",fm="(?:"+m_+"(?:"+[v_,Kl,Vl].join("|")+")"+b_+I_+")*",gm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",hm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",w_=b_+I_+fm,pm="(?:"+[um,Kl,Vl].join("|")+")"+w_,vm="(?:"+[v_+Ks+"?",Ks,Kl,Vl,cm].join("|")+")",mm=RegExp(Yl,"g"),Em=RegExp(Ks,"g"),Xl=RegExp(jl+"(?="+jl+")|"+vm+w_,"g"),Cm=RegExp([Yi+"?"+h_+"+"+C_+"(?="+[f_,Yi,"$"].join("|")+")",_m+"+"+O_+"(?="+[f_,Yi+E_,"$"].join("|")+")",Yi+"?"+E_+"+"+C_,Yi+"+"+O_,hm,gm,g_,pm].join("|"),"g"),Om=RegExp("["+m_+js+a_+d_+"]"),Im=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,bm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wm=-1,kt={};kt[zi]=kt[_r]=kt[Fo]=kt[Po]=kt[Ho]=kt[Bo]=kt[Pl]=kt[Hl]=kt[Bl]=!0,kt[Dt]=kt[Mt]=kt[Tn]=kt[Zt]=kt[yr]=kt[ir]=kt[br]=kt[wr]=kt[be]=kt[De]=kt[St]=kt[jr]=kt[Rn]=kt[Kr]=kt[hi]=!1;var Nt={};Nt[Dt]=Nt[Mt]=Nt[Tn]=Nt[yr]=Nt[Zt]=Nt[ir]=Nt[zi]=Nt[_r]=Nt[Fo]=Nt[Po]=Nt[Ho]=Nt[be]=Nt[De]=Nt[St]=Nt[jr]=Nt[Rn]=Nt[Kr]=Nt[Wi]=Nt[Bo]=Nt[Pl]=Nt[Hl]=Nt[Bl]=!0,Nt[br]=Nt[wr]=Nt[hi]=!1;var ym={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Lm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Am={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Nm=parseFloat,xm=parseInt,y_=typeof ka=="object"&&ka&&ka.Object===Object&&ka,Rm=typeof self=="object"&&self&&self.Object===Object&&self,nn=y_||Rm||Function("return this")(),ql=e&&!e.nodeType&&e,pi=ql&&!0&&t&&!t.nodeType&&t,L_=pi&&pi.exports===ql,Zl=L_&&y_.process,Yn=function(){try{var X=pi&&pi.require&&pi.require("util").types;return X||Zl&&Zl.binding&&Zl.binding("util")}catch{}}(),A_=Yn&&Yn.isArrayBuffer,S_=Yn&&Yn.isDate,N_=Yn&&Yn.isMap,x_=Yn&&Yn.isRegExp,R_=Yn&&Yn.isSet,T_=Yn&&Yn.isTypedArray;function Dn(X,oe,ee){switch(ee.length){case 0:return X.call(oe);case 1:return X.call(oe,ee[0]);case 2:return X.call(oe,ee[0],ee[1]);case 3:return X.call(oe,ee[0],ee[1],ee[2])}return X.apply(oe,ee)}function Tm(X,oe,ee,Se){for(var qe=-1,pt=X==null?0:X.length;++qe<pt;){var Kt=X[qe];oe(Se,Kt,ee(Kt),X)}return Se}function jn(X,oe){for(var ee=-1,Se=X==null?0:X.length;++ee<Se&&oe(X[ee],ee,X)!==!1;);return X}function Dm(X,oe){for(var ee=X==null?0:X.length;ee--&&oe(X[ee],ee,X)!==!1;);return X}function D_(X,oe){for(var ee=-1,Se=X==null?0:X.length;++ee<Se;)if(!oe(X[ee],ee,X))return!1;return!0}function Vr(X,oe){for(var ee=-1,Se=X==null?0:X.length,qe=0,pt=[];++ee<Se;){var Kt=X[ee];oe(Kt,ee,X)&&(pt[qe++]=Kt)}return pt}function Vs(X,oe){var ee=X==null?0:X.length;return!!ee&&ji(X,oe,0)>-1}function Ql(X,oe,ee){for(var Se=-1,qe=X==null?0:X.length;++Se<qe;)if(ee(oe,X[Se]))return!0;return!1}function Gt(X,oe){for(var ee=-1,Se=X==null?0:X.length,qe=Array(Se);++ee<Se;)qe[ee]=oe(X[ee],ee,X);return qe}function Xr(X,oe){for(var ee=-1,Se=oe.length,qe=X.length;++ee<Se;)X[qe+ee]=oe[ee];return X}function Jl(X,oe,ee,Se){var qe=-1,pt=X==null?0:X.length;for(Se&&pt&&(ee=X[++qe]);++qe<pt;)ee=oe(ee,X[qe],qe,X);return ee}function km(X,oe,ee,Se){var qe=X==null?0:X.length;for(Se&&qe&&(ee=X[--qe]);qe--;)ee=oe(ee,X[qe],qe,X);return ee}function ec(X,oe){for(var ee=-1,Se=X==null?0:X.length;++ee<Se;)if(oe(X[ee],ee,X))return!0;return!1}var Gm=tc("length");function Mm(X){return X.split("")}function Um(X){return X.match(Yv)||[]}function k_(X,oe,ee){var Se;return ee(X,function(qe,pt,Kt){if(oe(qe,pt,Kt))return Se=pt,!1}),Se}function Xs(X,oe,ee,Se){for(var qe=X.length,pt=ee+(Se?1:-1);Se?pt--:++pt<qe;)if(oe(X[pt],pt,X))return pt;return-1}function ji(X,oe,ee){return oe===oe?Xm(X,oe,ee):Xs(X,G_,ee)}function $m(X,oe,ee,Se){for(var qe=ee-1,pt=X.length;++qe<pt;)if(Se(X[qe],oe))return qe;return-1}function G_(X){return X!==X}function M_(X,oe){var ee=X==null?0:X.length;return ee?rc(X,oe)/ee:rt}function tc(X){return function(oe){return oe==null?n:oe[X]}}function nc(X){return function(oe){return X==null?n:X[oe]}}function U_(X,oe,ee,Se,qe){return qe(X,function(pt,Kt,bt){ee=Se?(Se=!1,pt):oe(ee,pt,Kt,bt)}),ee}function Fm(X,oe){var ee=X.length;for(X.sort(oe);ee--;)X[ee]=X[ee].value;return X}function rc(X,oe){for(var ee,Se=-1,qe=X.length;++Se<qe;){var pt=oe(X[Se]);pt!==n&&(ee=ee===n?pt:ee+pt)}return ee}function ic(X,oe){for(var ee=-1,Se=Array(X);++ee<X;)Se[ee]=oe(ee);return Se}function Pm(X,oe){return Gt(oe,function(ee){return[ee,X[ee]]})}function $_(X){return X&&X.slice(0,B_(X)+1).replace(zl,"")}function kn(X){return function(oe){return X(oe)}}function oc(X,oe){return Gt(oe,function(ee){return X[ee]})}function Wo(X,oe){return X.has(oe)}function F_(X,oe){for(var ee=-1,Se=X.length;++ee<Se&&ji(oe,X[ee],0)>-1;);return ee}function P_(X,oe){for(var ee=X.length;ee--&&ji(oe,X[ee],0)>-1;);return ee}function Hm(X,oe){for(var ee=X.length,Se=0;ee--;)X[ee]===oe&&++Se;return Se}var Bm=nc(ym),Wm=nc(Lm);function zm(X){return"\\"+Sm[X]}function Ym(X,oe){return X==null?n:X[oe]}function Ki(X){return Om.test(X)}function jm(X){return Im.test(X)}function Km(X){for(var oe,ee=[];!(oe=X.next()).done;)ee.push(oe.value);return ee}function sc(X){var oe=-1,ee=Array(X.size);return X.forEach(function(Se,qe){ee[++oe]=[qe,Se]}),ee}function H_(X,oe){return function(ee){return X(oe(ee))}}function qr(X,oe){for(var ee=-1,Se=X.length,qe=0,pt=[];++ee<Se;){var Kt=X[ee];(Kt===oe||Kt===v)&&(X[ee]=v,pt[qe++]=ee)}return pt}function qs(X){var oe=-1,ee=Array(X.size);return X.forEach(function(Se){ee[++oe]=Se}),ee}function Vm(X){var oe=-1,ee=Array(X.size);return X.forEach(function(Se){ee[++oe]=[Se,Se]}),ee}function Xm(X,oe,ee){for(var Se=ee-1,qe=X.length;++Se<qe;)if(X[Se]===oe)return Se;return-1}function qm(X,oe,ee){for(var Se=ee+1;Se--;)if(X[Se]===oe)return Se;return Se}function Vi(X){return Ki(X)?Qm(X):Gm(X)}function or(X){return Ki(X)?Jm(X):Mm(X)}function B_(X){for(var oe=X.length;oe--&&Hv.test(X.charAt(oe)););return oe}var Zm=nc(Am);function Qm(X){for(var oe=Xl.lastIndex=0;Xl.test(X);)++oe;return oe}function Jm(X){return X.match(Xl)||[]}function e1(X){return X.match(Cm)||[]}var t1=function X(oe){oe=oe==null?nn:Xi.defaults(nn.Object(),oe,Xi.pick(nn,bm));var ee=oe.Array,Se=oe.Date,qe=oe.Error,pt=oe.Function,Kt=oe.Math,bt=oe.Object,ac=oe.RegExp,n1=oe.String,Kn=oe.TypeError,Zs=ee.prototype,r1=pt.prototype,qi=bt.prototype,Qs=oe["__core-js_shared__"],Js=r1.toString,Et=qi.hasOwnProperty,i1=0,W_=function(){var s=/[^.]+$/.exec(Qs&&Qs.keys&&Qs.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ea=qi.toString,o1=Js.call(bt),s1=nn._,a1=ac("^"+Js.call(Et).replace(Wl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ta=L_?oe.Buffer:n,Zr=oe.Symbol,na=oe.Uint8Array,z_=ta?ta.allocUnsafe:n,ra=H_(bt.getPrototypeOf,bt),Y_=bt.create,j_=qi.propertyIsEnumerable,ia=Zs.splice,K_=Zr?Zr.isConcatSpreadable:n,zo=Zr?Zr.iterator:n,vi=Zr?Zr.toStringTag:n,oa=function(){try{var s=Ii(bt,"defineProperty");return s({},"",{}),s}catch{}}(),l1=oe.clearTimeout!==nn.clearTimeout&&oe.clearTimeout,c1=Se&&Se.now!==nn.Date.now&&Se.now,u1=oe.setTimeout!==nn.setTimeout&&oe.setTimeout,sa=Kt.ceil,aa=Kt.floor,lc=bt.getOwnPropertySymbols,d1=ta?ta.isBuffer:n,V_=oe.isFinite,_1=Zs.join,f1=H_(bt.keys,bt),Vt=Kt.max,cn=Kt.min,g1=Se.now,h1=oe.parseInt,X_=Kt.random,p1=Zs.reverse,cc=Ii(oe,"DataView"),Yo=Ii(oe,"Map"),uc=Ii(oe,"Promise"),Zi=Ii(oe,"Set"),jo=Ii(oe,"WeakMap"),Ko=Ii(bt,"create"),la=jo&&new jo,Qi={},v1=bi(cc),m1=bi(Yo),E1=bi(uc),C1=bi(Zi),O1=bi(jo),ca=Zr?Zr.prototype:n,Vo=ca?ca.valueOf:n,q_=ca?ca.toString:n;function S(s){if(Ft(s)&&!Ze(s)&&!(s instanceof at)){if(s instanceof Vn)return s;if(Et.call(s,"__wrapped__"))return Qf(s)}return new Vn(s)}var Ji=function(){function s(){}return function(l){if(!Ut(l))return{};if(Y_)return Y_(l);s.prototype=l;var h=new s;return s.prototype=n,h}}();function ua(){}function Vn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}S.templateSettings={escape:Gv,evaluate:Mv,interpolate:o_,variable:"",imports:{_:S}},S.prototype=ua.prototype,S.prototype.constructor=S,Vn.prototype=Ji(ua.prototype),Vn.prototype.constructor=Vn;function at(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function I1(){var s=new at(this.__wrapped__);return s.__actions__=Cn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=Cn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=Cn(this.__views__),s}function b1(){if(this.__filtered__){var s=new at(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function w1(){var s=this.__wrapped__.value(),l=this.__dir__,h=Ze(s),C=l<0,w=h?s.length:0,R=M0(0,w,this.__views__),P=R.start,Y=R.end,q=Y-P,de=C?Y:P-1,_e=this.__iteratees__,ge=_e.length,Le=0,ke=cn(q,this.__takeCount__);if(!h||!C&&w==q&&ke==q)return Of(s,this.__actions__);var We=[];e:for(;q--&&Le<ke;){de+=l;for(var nt=-1,ze=s[de];++nt<ge;){var ot=_e[nt],ut=ot.iteratee,Un=ot.type,gn=ut(ze);if(Un==ye)ze=gn;else if(!gn){if(Un==Ee)continue e;break e}}We[Le++]=ze}return We}at.prototype=Ji(ua.prototype),at.prototype.constructor=at;function mi(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function y1(){this.__data__=Ko?Ko(null):{},this.size=0}function L1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function A1(s){var l=this.__data__;if(Ko){var h=l[s];return h===u?n:h}return Et.call(l,s)?l[s]:n}function S1(s){var l=this.__data__;return Ko?l[s]!==n:Et.call(l,s)}function N1(s,l){var h=this.__data__;return this.size+=this.has(s)?0:1,h[s]=Ko&&l===n?u:l,this}mi.prototype.clear=y1,mi.prototype.delete=L1,mi.prototype.get=A1,mi.prototype.has=S1,mi.prototype.set=N1;function Lr(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function x1(){this.__data__=[],this.size=0}function R1(s){var l=this.__data__,h=da(l,s);if(h<0)return!1;var C=l.length-1;return h==C?l.pop():ia.call(l,h,1),--this.size,!0}function T1(s){var l=this.__data__,h=da(l,s);return h<0?n:l[h][1]}function D1(s){return da(this.__data__,s)>-1}function k1(s,l){var h=this.__data__,C=da(h,s);return C<0?(++this.size,h.push([s,l])):h[C][1]=l,this}Lr.prototype.clear=x1,Lr.prototype.delete=R1,Lr.prototype.get=T1,Lr.prototype.has=D1,Lr.prototype.set=k1;function Ar(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function G1(){this.size=0,this.__data__={hash:new mi,map:new(Yo||Lr),string:new mi}}function M1(s){var l=ba(this,s).delete(s);return this.size-=l?1:0,l}function U1(s){return ba(this,s).get(s)}function $1(s){return ba(this,s).has(s)}function F1(s,l){var h=ba(this,s),C=h.size;return h.set(s,l),this.size+=h.size==C?0:1,this}Ar.prototype.clear=G1,Ar.prototype.delete=M1,Ar.prototype.get=U1,Ar.prototype.has=$1,Ar.prototype.set=F1;function Ei(s){var l=-1,h=s==null?0:s.length;for(this.__data__=new Ar;++l<h;)this.add(s[l])}function P1(s){return this.__data__.set(s,u),this}function H1(s){return this.__data__.has(s)}Ei.prototype.add=Ei.prototype.push=P1,Ei.prototype.has=H1;function sr(s){var l=this.__data__=new Lr(s);this.size=l.size}function B1(){this.__data__=new Lr,this.size=0}function W1(s){var l=this.__data__,h=l.delete(s);return this.size=l.size,h}function z1(s){return this.__data__.get(s)}function Y1(s){return this.__data__.has(s)}function j1(s,l){var h=this.__data__;if(h instanceof Lr){var C=h.__data__;if(!Yo||C.length<i-1)return C.push([s,l]),this.size=++h.size,this;h=this.__data__=new Ar(C)}return h.set(s,l),this.size=h.size,this}sr.prototype.clear=B1,sr.prototype.delete=W1,sr.prototype.get=z1,sr.prototype.has=Y1,sr.prototype.set=j1;function Z_(s,l){var h=Ze(s),C=!h&&wi(s),w=!h&&!C&&ni(s),R=!h&&!C&&!w&&ro(s),P=h||C||w||R,Y=P?ic(s.length,n1):[],q=Y.length;for(var de in s)(l||Et.call(s,de))&&!(P&&(de=="length"||w&&(de=="offset"||de=="parent")||R&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Rr(de,q)))&&Y.push(de);return Y}function Q_(s){var l=s.length;return l?s[Oc(0,l-1)]:n}function K1(s,l){return wa(Cn(s),Ci(l,0,s.length))}function V1(s){return wa(Cn(s))}function dc(s,l,h){(h!==n&&!ar(s[l],h)||h===n&&!(l in s))&&Sr(s,l,h)}function Xo(s,l,h){var C=s[l];(!(Et.call(s,l)&&ar(C,h))||h===n&&!(l in s))&&Sr(s,l,h)}function da(s,l){for(var h=s.length;h--;)if(ar(s[h][0],l))return h;return-1}function X1(s,l,h,C){return Qr(s,function(w,R,P){l(C,w,h(w),P)}),C}function J_(s,l){return s&&gr(l,Qt(l),s)}function q1(s,l){return s&&gr(l,In(l),s)}function Sr(s,l,h){l=="__proto__"&&oa?oa(s,l,{configurable:!0,enumerable:!0,value:h,writable:!0}):s[l]=h}function _c(s,l){for(var h=-1,C=l.length,w=ee(C),R=s==null;++h<C;)w[h]=R?n:jc(s,l[h]);return w}function Ci(s,l,h){return s===s&&(h!==n&&(s=s<=h?s:h),l!==n&&(s=s>=l?s:l)),s}function Xn(s,l,h,C,w,R){var P,Y=l&g,q=l&p,de=l&m;if(h&&(P=w?h(s,C,w,R):h(s)),P!==n)return P;if(!Ut(s))return s;var _e=Ze(s);if(_e){if(P=$0(s),!Y)return Cn(s,P)}else{var ge=un(s),Le=ge==wr||ge==Fe;if(ni(s))return wf(s,Y);if(ge==St||ge==Dt||Le&&!w){if(P=q||Le?{}:Wf(s),!Y)return q?A0(s,q1(P,s)):L0(s,J_(P,s))}else{if(!Nt[ge])return w?s:{};P=F0(s,ge,Y)}}R||(R=new sr);var ke=R.get(s);if(ke)return ke;R.set(s,P),mg(s)?s.forEach(function(ze){P.add(Xn(ze,l,h,ze,s,R))}):pg(s)&&s.forEach(function(ze,ot){P.set(ot,Xn(ze,l,h,ot,s,R))});var We=de?q?Tc:Rc:q?In:Qt,nt=_e?n:We(s);return jn(nt||s,function(ze,ot){nt&&(ot=ze,ze=s[ot]),Xo(P,ot,Xn(ze,l,h,ot,s,R))}),P}function Z1(s){var l=Qt(s);return function(h){return ef(h,s,l)}}function ef(s,l,h){var C=h.length;if(s==null)return!C;for(s=bt(s);C--;){var w=h[C],R=l[w],P=s[w];if(P===n&&!(w in s)||!R(P))return!1}return!0}function tf(s,l,h){if(typeof s!="function")throw new Kn(a);return ns(function(){s.apply(n,h)},l)}function qo(s,l,h,C){var w=-1,R=Vs,P=!0,Y=s.length,q=[],de=l.length;if(!Y)return q;h&&(l=Gt(l,kn(h))),C?(R=Ql,P=!1):l.length>=i&&(R=Wo,P=!1,l=new Ei(l));e:for(;++w<Y;){var _e=s[w],ge=h==null?_e:h(_e);if(_e=C||_e!==0?_e:0,P&&ge===ge){for(var Le=de;Le--;)if(l[Le]===ge)continue e;q.push(_e)}else R(l,ge,C)||q.push(_e)}return q}var Qr=Nf(fr),nf=Nf(gc,!0);function Q1(s,l){var h=!0;return Qr(s,function(C,w,R){return h=!!l(C,w,R),h}),h}function _a(s,l,h){for(var C=-1,w=s.length;++C<w;){var R=s[C],P=l(R);if(P!=null&&(Y===n?P===P&&!Mn(P):h(P,Y)))var Y=P,q=R}return q}function J1(s,l,h,C){var w=s.length;for(h=et(h),h<0&&(h=-h>w?0:w+h),C=C===n||C>w?w:et(C),C<0&&(C+=w),C=h>C?0:Cg(C);h<C;)s[h++]=l;return s}function rf(s,l){var h=[];return Qr(s,function(C,w,R){l(C,w,R)&&h.push(C)}),h}function rn(s,l,h,C,w){var R=-1,P=s.length;for(h||(h=H0),w||(w=[]);++R<P;){var Y=s[R];l>0&&h(Y)?l>1?rn(Y,l-1,h,C,w):Xr(w,Y):C||(w[w.length]=Y)}return w}var fc=xf(),of=xf(!0);function fr(s,l){return s&&fc(s,l,Qt)}function gc(s,l){return s&&of(s,l,Qt)}function fa(s,l){return Vr(l,function(h){return Tr(s[h])})}function Oi(s,l){l=ei(l,s);for(var h=0,C=l.length;s!=null&&h<C;)s=s[hr(l[h++])];return h&&h==C?s:n}function sf(s,l,h){var C=l(s);return Ze(s)?C:Xr(C,h(s))}function _n(s){return s==null?s===n?Fl:Me:vi&&vi in bt(s)?G0(s):V0(s)}function hc(s,l){return s>l}function e0(s,l){return s!=null&&Et.call(s,l)}function t0(s,l){return s!=null&&l in bt(s)}function n0(s,l,h){return s>=cn(l,h)&&s<Vt(l,h)}function pc(s,l,h){for(var C=h?Ql:Vs,w=s[0].length,R=s.length,P=R,Y=ee(R),q=1/0,de=[];P--;){var _e=s[P];P&&l&&(_e=Gt(_e,kn(l))),q=cn(_e.length,q),Y[P]=!h&&(l||w>=120&&_e.length>=120)?new Ei(P&&_e):n}_e=s[0];var ge=-1,Le=Y[0];e:for(;++ge<w&&de.length<q;){var ke=_e[ge],We=l?l(ke):ke;if(ke=h||ke!==0?ke:0,!(Le?Wo(Le,We):C(de,We,h))){for(P=R;--P;){var nt=Y[P];if(!(nt?Wo(nt,We):C(s[P],We,h)))continue e}Le&&Le.push(We),de.push(ke)}}return de}function r0(s,l,h,C){return fr(s,function(w,R,P){l(C,h(w),R,P)}),C}function Zo(s,l,h){l=ei(l,s),s=Kf(s,l);var C=s==null?s:s[hr(Zn(l))];return C==null?n:Dn(C,s,h)}function af(s){return Ft(s)&&_n(s)==Dt}function i0(s){return Ft(s)&&_n(s)==Tn}function o0(s){return Ft(s)&&_n(s)==ir}function Qo(s,l,h,C,w){return s===l?!0:s==null||l==null||!Ft(s)&&!Ft(l)?s!==s&&l!==l:s0(s,l,h,C,Qo,w)}function s0(s,l,h,C,w,R){var P=Ze(s),Y=Ze(l),q=P?Mt:un(s),de=Y?Mt:un(l);q=q==Dt?St:q,de=de==Dt?St:de;var _e=q==St,ge=de==St,Le=q==de;if(Le&&ni(s)){if(!ni(l))return!1;P=!0,_e=!1}if(Le&&!_e)return R||(R=new sr),P||ro(s)?Pf(s,l,h,C,w,R):D0(s,l,q,h,C,w,R);if(!(h&E)){var ke=_e&&Et.call(s,"__wrapped__"),We=ge&&Et.call(l,"__wrapped__");if(ke||We){var nt=ke?s.value():s,ze=We?l.value():l;return R||(R=new sr),w(nt,ze,h,C,R)}}return Le?(R||(R=new sr),k0(s,l,h,C,w,R)):!1}function a0(s){return Ft(s)&&un(s)==be}function vc(s,l,h,C){var w=h.length,R=w,P=!C;if(s==null)return!R;for(s=bt(s);w--;){var Y=h[w];if(P&&Y[2]?Y[1]!==s[Y[0]]:!(Y[0]in s))return!1}for(;++w<R;){Y=h[w];var q=Y[0],de=s[q],_e=Y[1];if(P&&Y[2]){if(de===n&&!(q in s))return!1}else{var ge=new sr;if(C)var Le=C(de,_e,q,s,l,ge);if(!(Le===n?Qo(_e,de,E|I,C,ge):Le))return!1}}return!0}function lf(s){if(!Ut(s)||W0(s))return!1;var l=Tr(s)?a1:Zv;return l.test(bi(s))}function l0(s){return Ft(s)&&_n(s)==jr}function c0(s){return Ft(s)&&un(s)==Rn}function u0(s){return Ft(s)&&xa(s.length)&&!!kt[_n(s)]}function cf(s){return typeof s=="function"?s:s==null?bn:typeof s=="object"?Ze(s)?_f(s[0],s[1]):df(s):Rg(s)}function mc(s){if(!ts(s))return f1(s);var l=[];for(var h in bt(s))Et.call(s,h)&&h!="constructor"&&l.push(h);return l}function d0(s){if(!Ut(s))return K0(s);var l=ts(s),h=[];for(var C in s)C=="constructor"&&(l||!Et.call(s,C))||h.push(C);return h}function Ec(s,l){return s<l}function uf(s,l){var h=-1,C=On(s)?ee(s.length):[];return Qr(s,function(w,R,P){C[++h]=l(w,R,P)}),C}function df(s){var l=kc(s);return l.length==1&&l[0][2]?Yf(l[0][0],l[0][1]):function(h){return h===s||vc(h,s,l)}}function _f(s,l){return Mc(s)&&zf(l)?Yf(hr(s),l):function(h){var C=jc(h,s);return C===n&&C===l?Kc(h,s):Qo(l,C,E|I)}}function ga(s,l,h,C,w){s!==l&&fc(l,function(R,P){if(w||(w=new sr),Ut(R))_0(s,l,P,h,ga,C,w);else{var Y=C?C($c(s,P),R,P+"",s,l,w):n;Y===n&&(Y=R),dc(s,P,Y)}},In)}function _0(s,l,h,C,w,R,P){var Y=$c(s,h),q=$c(l,h),de=P.get(q);if(de){dc(s,h,de);return}var _e=R?R(Y,q,h+"",s,l,P):n,ge=_e===n;if(ge){var Le=Ze(q),ke=!Le&&ni(q),We=!Le&&!ke&&ro(q);_e=q,Le||ke||We?Ze(Y)?_e=Y:Pt(Y)?_e=Cn(Y):ke?(ge=!1,_e=wf(q,!0)):We?(ge=!1,_e=yf(q,!0)):_e=[]:rs(q)||wi(q)?(_e=Y,wi(Y)?_e=Og(Y):(!Ut(Y)||Tr(Y))&&(_e=Wf(q))):ge=!1}ge&&(P.set(q,_e),w(_e,q,C,R,P),P.delete(q)),dc(s,h,_e)}function ff(s,l){var h=s.length;if(h)return l+=l<0?h:0,Rr(l,h)?s[l]:n}function gf(s,l,h){l.length?l=Gt(l,function(R){return Ze(R)?function(P){return Oi(P,R.length===1?R[0]:R)}:R}):l=[bn];var C=-1;l=Gt(l,kn(Be()));var w=uf(s,function(R,P,Y){var q=Gt(l,function(de){return de(R)});return{criteria:q,index:++C,value:R}});return Fm(w,function(R,P){return y0(R,P,h)})}function f0(s,l){return hf(s,l,function(h,C){return Kc(s,C)})}function hf(s,l,h){for(var C=-1,w=l.length,R={};++C<w;){var P=l[C],Y=Oi(s,P);h(Y,P)&&Jo(R,ei(P,s),Y)}return R}function g0(s){return function(l){return Oi(l,s)}}function Cc(s,l,h,C){var w=C?$m:ji,R=-1,P=l.length,Y=s;for(s===l&&(l=Cn(l)),h&&(Y=Gt(s,kn(h)));++R<P;)for(var q=0,de=l[R],_e=h?h(de):de;(q=w(Y,_e,q,C))>-1;)Y!==s&&ia.call(Y,q,1),ia.call(s,q,1);return s}function pf(s,l){for(var h=s?l.length:0,C=h-1;h--;){var w=l[h];if(h==C||w!==R){var R=w;Rr(w)?ia.call(s,w,1):wc(s,w)}}return s}function Oc(s,l){return s+aa(X_()*(l-s+1))}function h0(s,l,h,C){for(var w=-1,R=Vt(sa((l-s)/(h||1)),0),P=ee(R);R--;)P[C?R:++w]=s,s+=h;return P}function Ic(s,l){var h="";if(!s||l<1||l>xe)return h;do l%2&&(h+=s),l=aa(l/2),l&&(s+=s);while(l);return h}function it(s,l){return Fc(jf(s,l,bn),s+"")}function p0(s){return Q_(io(s))}function v0(s,l){var h=io(s);return wa(h,Ci(l,0,h.length))}function Jo(s,l,h,C){if(!Ut(s))return s;l=ei(l,s);for(var w=-1,R=l.length,P=R-1,Y=s;Y!=null&&++w<R;){var q=hr(l[w]),de=h;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(w!=P){var _e=Y[q];de=C?C(_e,q,Y):n,de===n&&(de=Ut(_e)?_e:Rr(l[w+1])?[]:{})}Xo(Y,q,de),Y=Y[q]}return s}var vf=la?function(s,l){return la.set(s,l),s}:bn,m0=oa?function(s,l){return oa(s,"toString",{configurable:!0,enumerable:!1,value:Xc(l),writable:!0})}:bn;function E0(s){return wa(io(s))}function qn(s,l,h){var C=-1,w=s.length;l<0&&(l=-l>w?0:w+l),h=h>w?w:h,h<0&&(h+=w),w=l>h?0:h-l>>>0,l>>>=0;for(var R=ee(w);++C<w;)R[C]=s[C+l];return R}function C0(s,l){var h;return Qr(s,function(C,w,R){return h=l(C,w,R),!h}),!!h}function ha(s,l,h){var C=0,w=s==null?C:s.length;if(typeof l=="number"&&l===l&&w<=Tt){for(;C<w;){var R=C+w>>>1,P=s[R];P!==null&&!Mn(P)&&(h?P<=l:P<l)?C=R+1:w=R}return w}return bc(s,l,bn,h)}function bc(s,l,h,C){var w=0,R=s==null?0:s.length;if(R===0)return 0;l=h(l);for(var P=l!==l,Y=l===null,q=Mn(l),de=l===n;w<R;){var _e=aa((w+R)/2),ge=h(s[_e]),Le=ge!==n,ke=ge===null,We=ge===ge,nt=Mn(ge);if(P)var ze=C||We;else de?ze=We&&(C||Le):Y?ze=We&&Le&&(C||!ke):q?ze=We&&Le&&!ke&&(C||!nt):ke||nt?ze=!1:ze=C?ge<=l:ge<l;ze?w=_e+1:R=_e}return cn(R,At)}function mf(s,l){for(var h=-1,C=s.length,w=0,R=[];++h<C;){var P=s[h],Y=l?l(P):P;if(!h||!ar(Y,q)){var q=Y;R[w++]=P===0?0:P}}return R}function Ef(s){return typeof s=="number"?s:Mn(s)?rt:+s}function Gn(s){if(typeof s=="string")return s;if(Ze(s))return Gt(s,Gn)+"";if(Mn(s))return q_?q_.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Jr(s,l,h){var C=-1,w=Vs,R=s.length,P=!0,Y=[],q=Y;if(h)P=!1,w=Ql;else if(R>=i){var de=l?null:R0(s);if(de)return qs(de);P=!1,w=Wo,q=new Ei}else q=l?[]:Y;e:for(;++C<R;){var _e=s[C],ge=l?l(_e):_e;if(_e=h||_e!==0?_e:0,P&&ge===ge){for(var Le=q.length;Le--;)if(q[Le]===ge)continue e;l&&q.push(ge),Y.push(_e)}else w(q,ge,h)||(q!==Y&&q.push(ge),Y.push(_e))}return Y}function wc(s,l){return l=ei(l,s),s=Kf(s,l),s==null||delete s[hr(Zn(l))]}function Cf(s,l,h,C){return Jo(s,l,h(Oi(s,l)),C)}function pa(s,l,h,C){for(var w=s.length,R=C?w:-1;(C?R--:++R<w)&&l(s[R],R,s););return h?qn(s,C?0:R,C?R+1:w):qn(s,C?R+1:0,C?w:R)}function Of(s,l){var h=s;return h instanceof at&&(h=h.value()),Jl(l,function(C,w){return w.func.apply(w.thisArg,Xr([C],w.args))},h)}function yc(s,l,h){var C=s.length;if(C<2)return C?Jr(s[0]):[];for(var w=-1,R=ee(C);++w<C;)for(var P=s[w],Y=-1;++Y<C;)Y!=w&&(R[w]=qo(R[w]||P,s[Y],l,h));return Jr(rn(R,1),l,h)}function If(s,l,h){for(var C=-1,w=s.length,R=l.length,P={};++C<w;){var Y=C<R?l[C]:n;h(P,s[C],Y)}return P}function Lc(s){return Pt(s)?s:[]}function Ac(s){return typeof s=="function"?s:bn}function ei(s,l){return Ze(s)?s:Mc(s,l)?[s]:Zf(vt(s))}var O0=it;function ti(s,l,h){var C=s.length;return h=h===n?C:h,!l&&h>=C?s:qn(s,l,h)}var bf=l1||function(s){return nn.clearTimeout(s)};function wf(s,l){if(l)return s.slice();var h=s.length,C=z_?z_(h):new s.constructor(h);return s.copy(C),C}function Sc(s){var l=new s.constructor(s.byteLength);return new na(l).set(new na(s)),l}function I0(s,l){var h=l?Sc(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.byteLength)}function b0(s){var l=new s.constructor(s.source,s_.exec(s));return l.lastIndex=s.lastIndex,l}function w0(s){return Vo?bt(Vo.call(s)):{}}function yf(s,l){var h=l?Sc(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.length)}function Lf(s,l){if(s!==l){var h=s!==n,C=s===null,w=s===s,R=Mn(s),P=l!==n,Y=l===null,q=l===l,de=Mn(l);if(!Y&&!de&&!R&&s>l||R&&P&&q&&!Y&&!de||C&&P&&q||!h&&q||!w)return 1;if(!C&&!R&&!de&&s<l||de&&h&&w&&!C&&!R||Y&&h&&w||!P&&w||!q)return-1}return 0}function y0(s,l,h){for(var C=-1,w=s.criteria,R=l.criteria,P=w.length,Y=h.length;++C<P;){var q=Lf(w[C],R[C]);if(q){if(C>=Y)return q;var de=h[C];return q*(de=="desc"?-1:1)}}return s.index-l.index}function Af(s,l,h,C){for(var w=-1,R=s.length,P=h.length,Y=-1,q=l.length,de=Vt(R-P,0),_e=ee(q+de),ge=!C;++Y<q;)_e[Y]=l[Y];for(;++w<P;)(ge||w<R)&&(_e[h[w]]=s[w]);for(;de--;)_e[Y++]=s[w++];return _e}function Sf(s,l,h,C){for(var w=-1,R=s.length,P=-1,Y=h.length,q=-1,de=l.length,_e=Vt(R-Y,0),ge=ee(_e+de),Le=!C;++w<_e;)ge[w]=s[w];for(var ke=w;++q<de;)ge[ke+q]=l[q];for(;++P<Y;)(Le||w<R)&&(ge[ke+h[P]]=s[w++]);return ge}function Cn(s,l){var h=-1,C=s.length;for(l||(l=ee(C));++h<C;)l[h]=s[h];return l}function gr(s,l,h,C){var w=!h;h||(h={});for(var R=-1,P=l.length;++R<P;){var Y=l[R],q=C?C(h[Y],s[Y],Y,h,s):n;q===n&&(q=s[Y]),w?Sr(h,Y,q):Xo(h,Y,q)}return h}function L0(s,l){return gr(s,Gc(s),l)}function A0(s,l){return gr(s,Hf(s),l)}function va(s,l){return function(h,C){var w=Ze(h)?Tm:X1,R=l?l():{};return w(h,s,Be(C,2),R)}}function eo(s){return it(function(l,h){var C=-1,w=h.length,R=w>1?h[w-1]:n,P=w>2?h[2]:n;for(R=s.length>3&&typeof R=="function"?(w--,R):n,P&&fn(h[0],h[1],P)&&(R=w<3?n:R,w=1),l=bt(l);++C<w;){var Y=h[C];Y&&s(l,Y,C,R)}return l})}function Nf(s,l){return function(h,C){if(h==null)return h;if(!On(h))return s(h,C);for(var w=h.length,R=l?w:-1,P=bt(h);(l?R--:++R<w)&&C(P[R],R,P)!==!1;);return h}}function xf(s){return function(l,h,C){for(var w=-1,R=bt(l),P=C(l),Y=P.length;Y--;){var q=P[s?Y:++w];if(h(R[q],q,R)===!1)break}return l}}function S0(s,l,h){var C=l&O,w=es(s);function R(){var P=this&&this!==nn&&this instanceof R?w:s;return P.apply(C?h:this,arguments)}return R}function Rf(s){return function(l){l=vt(l);var h=Ki(l)?or(l):n,C=h?h[0]:l.charAt(0),w=h?ti(h,1).join(""):l.slice(1);return C[s]()+w}}function to(s){return function(l){return Jl(Ng(Sg(l).replace(mm,"")),s,"")}}function es(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var h=Ji(s.prototype),C=s.apply(h,l);return Ut(C)?C:h}}function N0(s,l,h){var C=es(s);function w(){for(var R=arguments.length,P=ee(R),Y=R,q=no(w);Y--;)P[Y]=arguments[Y];var de=R<3&&P[0]!==q&&P[R-1]!==q?[]:qr(P,q);if(R-=de.length,R<h)return Mf(s,l,ma,w.placeholder,n,P,de,n,n,h-R);var _e=this&&this!==nn&&this instanceof w?C:s;return Dn(_e,this,P)}return w}function Tf(s){return function(l,h,C){var w=bt(l);if(!On(l)){var R=Be(h,3);l=Qt(l),h=function(Y){return R(w[Y],Y,w)}}var P=s(l,h,C);return P>-1?w[R?l[P]:P]:n}}function Df(s){return xr(function(l){var h=l.length,C=h,w=Vn.prototype.thru;for(s&&l.reverse();C--;){var R=l[C];if(typeof R!="function")throw new Kn(a);if(w&&!P&&Ia(R)=="wrapper")var P=new Vn([],!0)}for(C=P?C:h;++C<h;){R=l[C];var Y=Ia(R),q=Y=="wrapper"?Dc(R):n;q&&Uc(q[0])&&q[1]==(F|k|H|z)&&!q[4].length&&q[9]==1?P=P[Ia(q[0])].apply(P,q[3]):P=R.length==1&&Uc(R)?P[Y]():P.thru(R)}return function(){var de=arguments,_e=de[0];if(P&&de.length==1&&Ze(_e))return P.plant(_e).value();for(var ge=0,Le=h?l[ge].apply(this,de):_e;++ge<h;)Le=l[ge].call(this,Le);return Le}})}function ma(s,l,h,C,w,R,P,Y,q,de){var _e=l&F,ge=l&O,Le=l&b,ke=l&(k|G),We=l&Q,nt=Le?n:es(s);function ze(){for(var ot=arguments.length,ut=ee(ot),Un=ot;Un--;)ut[Un]=arguments[Un];if(ke)var gn=no(ze),$n=Hm(ut,gn);if(C&&(ut=Af(ut,C,w,ke)),R&&(ut=Sf(ut,R,P,ke)),ot-=$n,ke&&ot<de){var Ht=qr(ut,gn);return Mf(s,l,ma,ze.placeholder,h,ut,Ht,Y,q,de-ot)}var lr=ge?h:this,kr=Le?lr[s]:s;return ot=ut.length,Y?ut=X0(ut,Y):We&&ot>1&&ut.reverse(),_e&&q<ot&&(ut.length=q),this&&this!==nn&&this instanceof ze&&(kr=nt||es(kr)),kr.apply(lr,ut)}return ze}function kf(s,l){return function(h,C){return r0(h,s,l(C),{})}}function Ea(s,l){return function(h,C){var w;if(h===n&&C===n)return l;if(h!==n&&(w=h),C!==n){if(w===n)return C;typeof h=="string"||typeof C=="string"?(h=Gn(h),C=Gn(C)):(h=Ef(h),C=Ef(C)),w=s(h,C)}return w}}function Nc(s){return xr(function(l){return l=Gt(l,kn(Be())),it(function(h){var C=this;return s(l,function(w){return Dn(w,C,h)})})})}function Ca(s,l){l=l===n?" ":Gn(l);var h=l.length;if(h<2)return h?Ic(l,s):l;var C=Ic(l,sa(s/Vi(l)));return Ki(l)?ti(or(C),0,s).join(""):C.slice(0,s)}function x0(s,l,h,C){var w=l&O,R=es(s);function P(){for(var Y=-1,q=arguments.length,de=-1,_e=C.length,ge=ee(_e+q),Le=this&&this!==nn&&this instanceof P?R:s;++de<_e;)ge[de]=C[de];for(;q--;)ge[de++]=arguments[++Y];return Dn(Le,w?h:this,ge)}return P}function Gf(s){return function(l,h,C){return C&&typeof C!="number"&&fn(l,h,C)&&(h=C=n),l=Dr(l),h===n?(h=l,l=0):h=Dr(h),C=C===n?l<h?1:-1:Dr(C),h0(l,h,C,s)}}function Oa(s){return function(l,h){return typeof l=="string"&&typeof h=="string"||(l=Qn(l),h=Qn(h)),s(l,h)}}function Mf(s,l,h,C,w,R,P,Y,q,de){var _e=l&k,ge=_e?P:n,Le=_e?n:P,ke=_e?R:n,We=_e?n:R;l|=_e?H:$,l&=~(_e?$:H),l&A||(l&=-4);var nt=[s,l,w,ke,ge,We,Le,Y,q,de],ze=h.apply(n,nt);return Uc(s)&&Vf(ze,nt),ze.placeholder=C,Xf(ze,s,l)}function xc(s){var l=Kt[s];return function(h,C){if(h=Qn(h),C=C==null?0:cn(et(C),292),C&&V_(h)){var w=(vt(h)+"e").split("e"),R=l(w[0]+"e"+(+w[1]+C));return w=(vt(R)+"e").split("e"),+(w[0]+"e"+(+w[1]-C))}return l(h)}}var R0=Zi&&1/qs(new Zi([,-0]))[1]==Ue?function(s){return new Zi(s)}:Qc;function Uf(s){return function(l){var h=un(l);return h==be?sc(l):h==Rn?Vm(l):Pm(l,s(l))}}function Nr(s,l,h,C,w,R,P,Y){var q=l&b;if(!q&&typeof s!="function")throw new Kn(a);var de=C?C.length:0;if(de||(l&=-97,C=w=n),P=P===n?P:Vt(et(P),0),Y=Y===n?Y:et(Y),de-=w?w.length:0,l&$){var _e=C,ge=w;C=w=n}var Le=q?n:Dc(s),ke=[s,l,h,C,w,_e,ge,R,P,Y];if(Le&&j0(ke,Le),s=ke[0],l=ke[1],h=ke[2],C=ke[3],w=ke[4],Y=ke[9]=ke[9]===n?q?0:s.length:Vt(ke[9]-de,0),!Y&&l&(k|G)&&(l&=-25),!l||l==O)var We=S0(s,l,h);else l==k||l==G?We=N0(s,l,Y):(l==H||l==(O|H))&&!w.length?We=x0(s,l,h,C):We=ma.apply(n,ke);var nt=Le?vf:Vf;return Xf(nt(We,ke),s,l)}function $f(s,l,h,C){return s===n||ar(s,qi[h])&&!Et.call(C,h)?l:s}function Ff(s,l,h,C,w,R){return Ut(s)&&Ut(l)&&(R.set(l,s),ga(s,l,n,Ff,R),R.delete(l)),s}function T0(s){return rs(s)?n:s}function Pf(s,l,h,C,w,R){var P=h&E,Y=s.length,q=l.length;if(Y!=q&&!(P&&q>Y))return!1;var de=R.get(s),_e=R.get(l);if(de&&_e)return de==l&&_e==s;var ge=-1,Le=!0,ke=h&I?new Ei:n;for(R.set(s,l),R.set(l,s);++ge<Y;){var We=s[ge],nt=l[ge];if(C)var ze=P?C(nt,We,ge,l,s,R):C(We,nt,ge,s,l,R);if(ze!==n){if(ze)continue;Le=!1;break}if(ke){if(!ec(l,function(ot,ut){if(!Wo(ke,ut)&&(We===ot||w(We,ot,h,C,R)))return ke.push(ut)})){Le=!1;break}}else if(!(We===nt||w(We,nt,h,C,R))){Le=!1;break}}return R.delete(s),R.delete(l),Le}function D0(s,l,h,C,w,R,P){switch(h){case yr:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Tn:return!(s.byteLength!=l.byteLength||!R(new na(s),new na(l)));case Zt:case ir:case De:return ar(+s,+l);case br:return s.name==l.name&&s.message==l.message;case jr:case Kr:return s==l+"";case be:var Y=sc;case Rn:var q=C&E;if(Y||(Y=qs),s.size!=l.size&&!q)return!1;var de=P.get(s);if(de)return de==l;C|=I,P.set(s,l);var _e=Pf(Y(s),Y(l),C,w,R,P);return P.delete(s),_e;case Wi:if(Vo)return Vo.call(s)==Vo.call(l)}return!1}function k0(s,l,h,C,w,R){var P=h&E,Y=Rc(s),q=Y.length,de=Rc(l),_e=de.length;if(q!=_e&&!P)return!1;for(var ge=q;ge--;){var Le=Y[ge];if(!(P?Le in l:Et.call(l,Le)))return!1}var ke=R.get(s),We=R.get(l);if(ke&&We)return ke==l&&We==s;var nt=!0;R.set(s,l),R.set(l,s);for(var ze=P;++ge<q;){Le=Y[ge];var ot=s[Le],ut=l[Le];if(C)var Un=P?C(ut,ot,Le,l,s,R):C(ot,ut,Le,s,l,R);if(!(Un===n?ot===ut||w(ot,ut,h,C,R):Un)){nt=!1;break}ze||(ze=Le=="constructor")}if(nt&&!ze){var gn=s.constructor,$n=l.constructor;gn!=$n&&"constructor"in s&&"constructor"in l&&!(typeof gn=="function"&&gn instanceof gn&&typeof $n=="function"&&$n instanceof $n)&&(nt=!1)}return R.delete(s),R.delete(l),nt}function xr(s){return Fc(jf(s,n,tg),s+"")}function Rc(s){return sf(s,Qt,Gc)}function Tc(s){return sf(s,In,Hf)}var Dc=la?function(s){return la.get(s)}:Qc;function Ia(s){for(var l=s.name+"",h=Qi[l],C=Et.call(Qi,l)?h.length:0;C--;){var w=h[C],R=w.func;if(R==null||R==s)return w.name}return l}function no(s){var l=Et.call(S,"placeholder")?S:s;return l.placeholder}function Be(){var s=S.iteratee||qc;return s=s===qc?cf:s,arguments.length?s(arguments[0],arguments[1]):s}function ba(s,l){var h=s.__data__;return B0(l)?h[typeof l=="string"?"string":"hash"]:h.map}function kc(s){for(var l=Qt(s),h=l.length;h--;){var C=l[h],w=s[C];l[h]=[C,w,zf(w)]}return l}function Ii(s,l){var h=Ym(s,l);return lf(h)?h:n}function G0(s){var l=Et.call(s,vi),h=s[vi];try{s[vi]=n;var C=!0}catch{}var w=ea.call(s);return C&&(l?s[vi]=h:delete s[vi]),w}var Gc=lc?function(s){return s==null?[]:(s=bt(s),Vr(lc(s),function(l){return j_.call(s,l)}))}:Jc,Hf=lc?function(s){for(var l=[];s;)Xr(l,Gc(s)),s=ra(s);return l}:Jc,un=_n;(cc&&un(new cc(new ArrayBuffer(1)))!=yr||Yo&&un(new Yo)!=be||uc&&un(uc.resolve())!=$o||Zi&&un(new Zi)!=Rn||jo&&un(new jo)!=hi)&&(un=function(s){var l=_n(s),h=l==St?s.constructor:n,C=h?bi(h):"";if(C)switch(C){case v1:return yr;case m1:return be;case E1:return $o;case C1:return Rn;case O1:return hi}return l});function M0(s,l,h){for(var C=-1,w=h.length;++C<w;){var R=h[C],P=R.size;switch(R.type){case"drop":s+=P;break;case"dropRight":l-=P;break;case"take":l=cn(l,s+P);break;case"takeRight":s=Vt(s,l-P);break}}return{start:s,end:l}}function U0(s){var l=s.match(Wv);return l?l[1].split(zv):[]}function Bf(s,l,h){l=ei(l,s);for(var C=-1,w=l.length,R=!1;++C<w;){var P=hr(l[C]);if(!(R=s!=null&&h(s,P)))break;s=s[P]}return R||++C!=w?R:(w=s==null?0:s.length,!!w&&xa(w)&&Rr(P,w)&&(Ze(s)||wi(s)))}function $0(s){var l=s.length,h=new s.constructor(l);return l&&typeof s[0]=="string"&&Et.call(s,"index")&&(h.index=s.index,h.input=s.input),h}function Wf(s){return typeof s.constructor=="function"&&!ts(s)?Ji(ra(s)):{}}function F0(s,l,h){var C=s.constructor;switch(l){case Tn:return Sc(s);case Zt:case ir:return new C(+s);case yr:return I0(s,h);case zi:case _r:case Fo:case Po:case Ho:case Bo:case Pl:case Hl:case Bl:return yf(s,h);case be:return new C;case De:case Kr:return new C(s);case jr:return b0(s);case Rn:return new C;case Wi:return w0(s)}}function P0(s,l){var h=l.length;if(!h)return s;var C=h-1;return l[C]=(h>1?"& ":"")+l[C],l=l.join(h>2?", ":" "),s.replace(Bv,`{
/* [wrapped with `+l+`] */
`)}function H0(s){return Ze(s)||wi(s)||!!(K_&&s&&s[K_])}function Rr(s,l){var h=typeof s;return l=l??xe,!!l&&(h=="number"||h!="symbol"&&Jv.test(s))&&s>-1&&s%1==0&&s<l}function fn(s,l,h){if(!Ut(h))return!1;var C=typeof l;return(C=="number"?On(h)&&Rr(l,h.length):C=="string"&&l in h)?ar(h[l],s):!1}function Mc(s,l){if(Ze(s))return!1;var h=typeof s;return h=="number"||h=="symbol"||h=="boolean"||s==null||Mn(s)?!0:$v.test(s)||!Uv.test(s)||l!=null&&s in bt(l)}function B0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Uc(s){var l=Ia(s),h=S[l];if(typeof h!="function"||!(l in at.prototype))return!1;if(s===h)return!0;var C=Dc(h);return!!C&&s===C[0]}function W0(s){return!!W_&&W_ in s}var z0=Qs?Tr:eu;function ts(s){var l=s&&s.constructor,h=typeof l=="function"&&l.prototype||qi;return s===h}function zf(s){return s===s&&!Ut(s)}function Yf(s,l){return function(h){return h==null?!1:h[s]===l&&(l!==n||s in bt(h))}}function Y0(s){var l=Sa(s,function(C){return h.size===f&&h.clear(),C}),h=l.cache;return l}function j0(s,l){var h=s[1],C=l[1],w=h|C,R=w<(O|b|F),P=C==F&&h==k||C==F&&h==z&&s[7].length<=l[8]||C==(F|z)&&l[7].length<=l[8]&&h==k;if(!(R||P))return s;C&O&&(s[2]=l[2],w|=h&O?0:A);var Y=l[3];if(Y){var q=s[3];s[3]=q?Af(q,Y,l[4]):Y,s[4]=q?qr(s[3],v):l[4]}return Y=l[5],Y&&(q=s[5],s[5]=q?Sf(q,Y,l[6]):Y,s[6]=q?qr(s[5],v):l[6]),Y=l[7],Y&&(s[7]=Y),C&F&&(s[8]=s[8]==null?l[8]:cn(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=w,s}function K0(s){var l=[];if(s!=null)for(var h in bt(s))l.push(h);return l}function V0(s){return ea.call(s)}function jf(s,l,h){return l=Vt(l===n?s.length-1:l,0),function(){for(var C=arguments,w=-1,R=Vt(C.length-l,0),P=ee(R);++w<R;)P[w]=C[l+w];w=-1;for(var Y=ee(l+1);++w<l;)Y[w]=C[w];return Y[l]=h(P),Dn(s,this,Y)}}function Kf(s,l){return l.length<2?s:Oi(s,qn(l,0,-1))}function X0(s,l){for(var h=s.length,C=cn(l.length,h),w=Cn(s);C--;){var R=l[C];s[C]=Rr(R,h)?w[R]:n}return s}function $c(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var Vf=qf(vf),ns=u1||function(s,l){return nn.setTimeout(s,l)},Fc=qf(m0);function Xf(s,l,h){var C=l+"";return Fc(s,P0(C,q0(U0(C),h)))}function qf(s){var l=0,h=0;return function(){var C=g1(),w=pe-(C-h);if(h=C,w>0){if(++l>=ne)return arguments[0]}else l=0;return s.apply(n,arguments)}}function wa(s,l){var h=-1,C=s.length,w=C-1;for(l=l===n?C:l;++h<l;){var R=Oc(h,w),P=s[R];s[R]=s[h],s[h]=P}return s.length=l,s}var Zf=Y0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(Fv,function(h,C,w,R){l.push(w?R.replace(Kv,"$1"):C||h)}),l});function hr(s){if(typeof s=="string"||Mn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function bi(s){if(s!=null){try{return Js.call(s)}catch{}try{return s+""}catch{}}return""}function q0(s,l){return jn(ln,function(h){var C="_."+h[0];l&h[1]&&!Vs(s,C)&&s.push(C)}),s.sort()}function Qf(s){if(s instanceof at)return s.clone();var l=new Vn(s.__wrapped__,s.__chain__);return l.__actions__=Cn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function Z0(s,l,h){(h?fn(s,l,h):l===n)?l=1:l=Vt(et(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var w=0,R=0,P=ee(sa(C/l));w<C;)P[R++]=qn(s,w,w+=l);return P}function Q0(s){for(var l=-1,h=s==null?0:s.length,C=0,w=[];++l<h;){var R=s[l];R&&(w[C++]=R)}return w}function J0(){var s=arguments.length;if(!s)return[];for(var l=ee(s-1),h=arguments[0],C=s;C--;)l[C-1]=arguments[C];return Xr(Ze(h)?Cn(h):[h],rn(l,1))}var eE=it(function(s,l){return Pt(s)?qo(s,rn(l,1,Pt,!0)):[]}),tE=it(function(s,l){var h=Zn(l);return Pt(h)&&(h=n),Pt(s)?qo(s,rn(l,1,Pt,!0),Be(h,2)):[]}),nE=it(function(s,l){var h=Zn(l);return Pt(h)&&(h=n),Pt(s)?qo(s,rn(l,1,Pt,!0),n,h):[]});function rE(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:et(l),qn(s,l<0?0:l,C)):[]}function iE(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:et(l),l=C-l,qn(s,0,l<0?0:l)):[]}function oE(s,l){return s&&s.length?pa(s,Be(l,3),!0,!0):[]}function sE(s,l){return s&&s.length?pa(s,Be(l,3),!0):[]}function aE(s,l,h,C){var w=s==null?0:s.length;return w?(h&&typeof h!="number"&&fn(s,l,h)&&(h=0,C=w),J1(s,l,h,C)):[]}function Jf(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var w=h==null?0:et(h);return w<0&&(w=Vt(C+w,0)),Xs(s,Be(l,3),w)}function eg(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var w=C-1;return h!==n&&(w=et(h),w=h<0?Vt(C+w,0):cn(w,C-1)),Xs(s,Be(l,3),w,!0)}function tg(s){var l=s==null?0:s.length;return l?rn(s,1):[]}function lE(s){var l=s==null?0:s.length;return l?rn(s,Ue):[]}function cE(s,l){var h=s==null?0:s.length;return h?(l=l===n?1:et(l),rn(s,l)):[]}function uE(s){for(var l=-1,h=s==null?0:s.length,C={};++l<h;){var w=s[l];C[w[0]]=w[1]}return C}function ng(s){return s&&s.length?s[0]:n}function dE(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var w=h==null?0:et(h);return w<0&&(w=Vt(C+w,0)),ji(s,l,w)}function _E(s){var l=s==null?0:s.length;return l?qn(s,0,-1):[]}var fE=it(function(s){var l=Gt(s,Lc);return l.length&&l[0]===s[0]?pc(l):[]}),gE=it(function(s){var l=Zn(s),h=Gt(s,Lc);return l===Zn(h)?l=n:h.pop(),h.length&&h[0]===s[0]?pc(h,Be(l,2)):[]}),hE=it(function(s){var l=Zn(s),h=Gt(s,Lc);return l=typeof l=="function"?l:n,l&&h.pop(),h.length&&h[0]===s[0]?pc(h,n,l):[]});function pE(s,l){return s==null?"":_1.call(s,l)}function Zn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function vE(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var w=C;return h!==n&&(w=et(h),w=w<0?Vt(C+w,0):cn(w,C-1)),l===l?qm(s,l,w):Xs(s,G_,w,!0)}function mE(s,l){return s&&s.length?ff(s,et(l)):n}var EE=it(rg);function rg(s,l){return s&&s.length&&l&&l.length?Cc(s,l):s}function CE(s,l,h){return s&&s.length&&l&&l.length?Cc(s,l,Be(h,2)):s}function OE(s,l,h){return s&&s.length&&l&&l.length?Cc(s,l,n,h):s}var IE=xr(function(s,l){var h=s==null?0:s.length,C=_c(s,l);return pf(s,Gt(l,function(w){return Rr(w,h)?+w:w}).sort(Lf)),C});function bE(s,l){var h=[];if(!(s&&s.length))return h;var C=-1,w=[],R=s.length;for(l=Be(l,3);++C<R;){var P=s[C];l(P,C,s)&&(h.push(P),w.push(C))}return pf(s,w),h}function Pc(s){return s==null?s:p1.call(s)}function wE(s,l,h){var C=s==null?0:s.length;return C?(h&&typeof h!="number"&&fn(s,l,h)?(l=0,h=C):(l=l==null?0:et(l),h=h===n?C:et(h)),qn(s,l,h)):[]}function yE(s,l){return ha(s,l)}function LE(s,l,h){return bc(s,l,Be(h,2))}function AE(s,l){var h=s==null?0:s.length;if(h){var C=ha(s,l);if(C<h&&ar(s[C],l))return C}return-1}function SE(s,l){return ha(s,l,!0)}function NE(s,l,h){return bc(s,l,Be(h,2),!0)}function xE(s,l){var h=s==null?0:s.length;if(h){var C=ha(s,l,!0)-1;if(ar(s[C],l))return C}return-1}function RE(s){return s&&s.length?mf(s):[]}function TE(s,l){return s&&s.length?mf(s,Be(l,2)):[]}function DE(s){var l=s==null?0:s.length;return l?qn(s,1,l):[]}function kE(s,l,h){return s&&s.length?(l=h||l===n?1:et(l),qn(s,0,l<0?0:l)):[]}function GE(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:et(l),l=C-l,qn(s,l<0?0:l,C)):[]}function ME(s,l){return s&&s.length?pa(s,Be(l,3),!1,!0):[]}function UE(s,l){return s&&s.length?pa(s,Be(l,3)):[]}var $E=it(function(s){return Jr(rn(s,1,Pt,!0))}),FE=it(function(s){var l=Zn(s);return Pt(l)&&(l=n),Jr(rn(s,1,Pt,!0),Be(l,2))}),PE=it(function(s){var l=Zn(s);return l=typeof l=="function"?l:n,Jr(rn(s,1,Pt,!0),n,l)});function HE(s){return s&&s.length?Jr(s):[]}function BE(s,l){return s&&s.length?Jr(s,Be(l,2)):[]}function WE(s,l){return l=typeof l=="function"?l:n,s&&s.length?Jr(s,n,l):[]}function Hc(s){if(!(s&&s.length))return[];var l=0;return s=Vr(s,function(h){if(Pt(h))return l=Vt(h.length,l),!0}),ic(l,function(h){return Gt(s,tc(h))})}function ig(s,l){if(!(s&&s.length))return[];var h=Hc(s);return l==null?h:Gt(h,function(C){return Dn(l,n,C)})}var zE=it(function(s,l){return Pt(s)?qo(s,l):[]}),YE=it(function(s){return yc(Vr(s,Pt))}),jE=it(function(s){var l=Zn(s);return Pt(l)&&(l=n),yc(Vr(s,Pt),Be(l,2))}),KE=it(function(s){var l=Zn(s);return l=typeof l=="function"?l:n,yc(Vr(s,Pt),n,l)}),VE=it(Hc);function XE(s,l){return If(s||[],l||[],Xo)}function qE(s,l){return If(s||[],l||[],Jo)}var ZE=it(function(s){var l=s.length,h=l>1?s[l-1]:n;return h=typeof h=="function"?(s.pop(),h):n,ig(s,h)});function og(s){var l=S(s);return l.__chain__=!0,l}function QE(s,l){return l(s),s}function ya(s,l){return l(s)}var JE=xr(function(s){var l=s.length,h=l?s[0]:0,C=this.__wrapped__,w=function(R){return _c(R,s)};return l>1||this.__actions__.length||!(C instanceof at)||!Rr(h)?this.thru(w):(C=C.slice(h,+h+(l?1:0)),C.__actions__.push({func:ya,args:[w],thisArg:n}),new Vn(C,this.__chain__).thru(function(R){return l&&!R.length&&R.push(n),R}))});function eC(){return og(this)}function tC(){return new Vn(this.value(),this.__chain__)}function nC(){this.__values__===n&&(this.__values__=Eg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function rC(){return this}function iC(s){for(var l,h=this;h instanceof ua;){var C=Qf(h);C.__index__=0,C.__values__=n,l?w.__wrapped__=C:l=C;var w=C;h=h.__wrapped__}return w.__wrapped__=s,l}function oC(){var s=this.__wrapped__;if(s instanceof at){var l=s;return this.__actions__.length&&(l=new at(this)),l=l.reverse(),l.__actions__.push({func:ya,args:[Pc],thisArg:n}),new Vn(l,this.__chain__)}return this.thru(Pc)}function sC(){return Of(this.__wrapped__,this.__actions__)}var aC=va(function(s,l,h){Et.call(s,h)?++s[h]:Sr(s,h,1)});function lC(s,l,h){var C=Ze(s)?D_:Q1;return h&&fn(s,l,h)&&(l=n),C(s,Be(l,3))}function cC(s,l){var h=Ze(s)?Vr:rf;return h(s,Be(l,3))}var uC=Tf(Jf),dC=Tf(eg);function _C(s,l){return rn(La(s,l),1)}function fC(s,l){return rn(La(s,l),Ue)}function gC(s,l,h){return h=h===n?1:et(h),rn(La(s,l),h)}function sg(s,l){var h=Ze(s)?jn:Qr;return h(s,Be(l,3))}function ag(s,l){var h=Ze(s)?Dm:nf;return h(s,Be(l,3))}var hC=va(function(s,l,h){Et.call(s,h)?s[h].push(l):Sr(s,h,[l])});function pC(s,l,h,C){s=On(s)?s:io(s),h=h&&!C?et(h):0;var w=s.length;return h<0&&(h=Vt(w+h,0)),Ra(s)?h<=w&&s.indexOf(l,h)>-1:!!w&&ji(s,l,h)>-1}var vC=it(function(s,l,h){var C=-1,w=typeof l=="function",R=On(s)?ee(s.length):[];return Qr(s,function(P){R[++C]=w?Dn(l,P,h):Zo(P,l,h)}),R}),mC=va(function(s,l,h){Sr(s,h,l)});function La(s,l){var h=Ze(s)?Gt:uf;return h(s,Be(l,3))}function EC(s,l,h,C){return s==null?[]:(Ze(l)||(l=l==null?[]:[l]),h=C?n:h,Ze(h)||(h=h==null?[]:[h]),gf(s,l,h))}var CC=va(function(s,l,h){s[h?0:1].push(l)},function(){return[[],[]]});function OC(s,l,h){var C=Ze(s)?Jl:U_,w=arguments.length<3;return C(s,Be(l,4),h,w,Qr)}function IC(s,l,h){var C=Ze(s)?km:U_,w=arguments.length<3;return C(s,Be(l,4),h,w,nf)}function bC(s,l){var h=Ze(s)?Vr:rf;return h(s,Na(Be(l,3)))}function wC(s){var l=Ze(s)?Q_:p0;return l(s)}function yC(s,l,h){(h?fn(s,l,h):l===n)?l=1:l=et(l);var C=Ze(s)?K1:v0;return C(s,l)}function LC(s){var l=Ze(s)?V1:E0;return l(s)}function AC(s){if(s==null)return 0;if(On(s))return Ra(s)?Vi(s):s.length;var l=un(s);return l==be||l==Rn?s.size:mc(s).length}function SC(s,l,h){var C=Ze(s)?ec:C0;return h&&fn(s,l,h)&&(l=n),C(s,Be(l,3))}var NC=it(function(s,l){if(s==null)return[];var h=l.length;return h>1&&fn(s,l[0],l[1])?l=[]:h>2&&fn(l[0],l[1],l[2])&&(l=[l[0]]),gf(s,rn(l,1),[])}),Aa=c1||function(){return nn.Date.now()};function xC(s,l){if(typeof l!="function")throw new Kn(a);return s=et(s),function(){if(--s<1)return l.apply(this,arguments)}}function lg(s,l,h){return l=h?n:l,l=s&&l==null?s.length:l,Nr(s,F,n,n,n,n,l)}function cg(s,l){var h;if(typeof l!="function")throw new Kn(a);return s=et(s),function(){return--s>0&&(h=l.apply(this,arguments)),s<=1&&(l=n),h}}var Bc=it(function(s,l,h){var C=O;if(h.length){var w=qr(h,no(Bc));C|=H}return Nr(s,C,l,h,w)}),ug=it(function(s,l,h){var C=O|b;if(h.length){var w=qr(h,no(ug));C|=H}return Nr(l,C,s,h,w)});function dg(s,l,h){l=h?n:l;var C=Nr(s,k,n,n,n,n,n,l);return C.placeholder=dg.placeholder,C}function _g(s,l,h){l=h?n:l;var C=Nr(s,G,n,n,n,n,n,l);return C.placeholder=_g.placeholder,C}function fg(s,l,h){var C,w,R,P,Y,q,de=0,_e=!1,ge=!1,Le=!0;if(typeof s!="function")throw new Kn(a);l=Qn(l)||0,Ut(h)&&(_e=!!h.leading,ge="maxWait"in h,R=ge?Vt(Qn(h.maxWait)||0,l):R,Le="trailing"in h?!!h.trailing:Le);function ke(Ht){var lr=C,kr=w;return C=w=n,de=Ht,P=s.apply(kr,lr),P}function We(Ht){return de=Ht,Y=ns(ot,l),_e?ke(Ht):P}function nt(Ht){var lr=Ht-q,kr=Ht-de,Tg=l-lr;return ge?cn(Tg,R-kr):Tg}function ze(Ht){var lr=Ht-q,kr=Ht-de;return q===n||lr>=l||lr<0||ge&&kr>=R}function ot(){var Ht=Aa();if(ze(Ht))return ut(Ht);Y=ns(ot,nt(Ht))}function ut(Ht){return Y=n,Le&&C?ke(Ht):(C=w=n,P)}function Un(){Y!==n&&bf(Y),de=0,C=q=w=Y=n}function gn(){return Y===n?P:ut(Aa())}function $n(){var Ht=Aa(),lr=ze(Ht);if(C=arguments,w=this,q=Ht,lr){if(Y===n)return We(q);if(ge)return bf(Y),Y=ns(ot,l),ke(q)}return Y===n&&(Y=ns(ot,l)),P}return $n.cancel=Un,$n.flush=gn,$n}var RC=it(function(s,l){return tf(s,1,l)}),TC=it(function(s,l,h){return tf(s,Qn(l)||0,h)});function DC(s){return Nr(s,Q)}function Sa(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Kn(a);var h=function(){var C=arguments,w=l?l.apply(this,C):C[0],R=h.cache;if(R.has(w))return R.get(w);var P=s.apply(this,C);return h.cache=R.set(w,P)||R,P};return h.cache=new(Sa.Cache||Ar),h}Sa.Cache=Ar;function Na(s){if(typeof s!="function")throw new Kn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function kC(s){return cg(2,s)}var GC=O0(function(s,l){l=l.length==1&&Ze(l[0])?Gt(l[0],kn(Be())):Gt(rn(l,1),kn(Be()));var h=l.length;return it(function(C){for(var w=-1,R=cn(C.length,h);++w<R;)C[w]=l[w].call(this,C[w]);return Dn(s,this,C)})}),Wc=it(function(s,l){var h=qr(l,no(Wc));return Nr(s,H,n,l,h)}),gg=it(function(s,l){var h=qr(l,no(gg));return Nr(s,$,n,l,h)}),MC=xr(function(s,l){return Nr(s,z,n,n,n,l)});function UC(s,l){if(typeof s!="function")throw new Kn(a);return l=l===n?l:et(l),it(s,l)}function $C(s,l){if(typeof s!="function")throw new Kn(a);return l=l==null?0:Vt(et(l),0),it(function(h){var C=h[l],w=ti(h,0,l);return C&&Xr(w,C),Dn(s,this,w)})}function FC(s,l,h){var C=!0,w=!0;if(typeof s!="function")throw new Kn(a);return Ut(h)&&(C="leading"in h?!!h.leading:C,w="trailing"in h?!!h.trailing:w),fg(s,l,{leading:C,maxWait:l,trailing:w})}function PC(s){return lg(s,1)}function HC(s,l){return Wc(Ac(l),s)}function BC(){if(!arguments.length)return[];var s=arguments[0];return Ze(s)?s:[s]}function WC(s){return Xn(s,m)}function zC(s,l){return l=typeof l=="function"?l:n,Xn(s,m,l)}function YC(s){return Xn(s,g|m)}function jC(s,l){return l=typeof l=="function"?l:n,Xn(s,g|m,l)}function KC(s,l){return l==null||ef(s,l,Qt(l))}function ar(s,l){return s===l||s!==s&&l!==l}var VC=Oa(hc),XC=Oa(function(s,l){return s>=l}),wi=af(function(){return arguments}())?af:function(s){return Ft(s)&&Et.call(s,"callee")&&!j_.call(s,"callee")},Ze=ee.isArray,qC=A_?kn(A_):i0;function On(s){return s!=null&&xa(s.length)&&!Tr(s)}function Pt(s){return Ft(s)&&On(s)}function ZC(s){return s===!0||s===!1||Ft(s)&&_n(s)==Zt}var ni=d1||eu,QC=S_?kn(S_):o0;function JC(s){return Ft(s)&&s.nodeType===1&&!rs(s)}function eO(s){if(s==null)return!0;if(On(s)&&(Ze(s)||typeof s=="string"||typeof s.splice=="function"||ni(s)||ro(s)||wi(s)))return!s.length;var l=un(s);if(l==be||l==Rn)return!s.size;if(ts(s))return!mc(s).length;for(var h in s)if(Et.call(s,h))return!1;return!0}function tO(s,l){return Qo(s,l)}function nO(s,l,h){h=typeof h=="function"?h:n;var C=h?h(s,l):n;return C===n?Qo(s,l,n,h):!!C}function zc(s){if(!Ft(s))return!1;var l=_n(s);return l==br||l==Bi||typeof s.message=="string"&&typeof s.name=="string"&&!rs(s)}function rO(s){return typeof s=="number"&&V_(s)}function Tr(s){if(!Ut(s))return!1;var l=_n(s);return l==wr||l==Fe||l==Ir||l==$l}function hg(s){return typeof s=="number"&&s==et(s)}function xa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=xe}function Ut(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Ft(s){return s!=null&&typeof s=="object"}var pg=N_?kn(N_):a0;function iO(s,l){return s===l||vc(s,l,kc(l))}function oO(s,l,h){return h=typeof h=="function"?h:n,vc(s,l,kc(l),h)}function sO(s){return vg(s)&&s!=+s}function aO(s){if(z0(s))throw new qe(o);return lf(s)}function lO(s){return s===null}function cO(s){return s==null}function vg(s){return typeof s=="number"||Ft(s)&&_n(s)==De}function rs(s){if(!Ft(s)||_n(s)!=St)return!1;var l=ra(s);if(l===null)return!0;var h=Et.call(l,"constructor")&&l.constructor;return typeof h=="function"&&h instanceof h&&Js.call(h)==o1}var Yc=x_?kn(x_):l0;function uO(s){return hg(s)&&s>=-9007199254740991&&s<=xe}var mg=R_?kn(R_):c0;function Ra(s){return typeof s=="string"||!Ze(s)&&Ft(s)&&_n(s)==Kr}function Mn(s){return typeof s=="symbol"||Ft(s)&&_n(s)==Wi}var ro=T_?kn(T_):u0;function dO(s){return s===n}function _O(s){return Ft(s)&&un(s)==hi}function fO(s){return Ft(s)&&_n(s)==ft}var gO=Oa(Ec),hO=Oa(function(s,l){return s<=l});function Eg(s){if(!s)return[];if(On(s))return Ra(s)?or(s):Cn(s);if(zo&&s[zo])return Km(s[zo]());var l=un(s),h=l==be?sc:l==Rn?qs:io;return h(s)}function Dr(s){if(!s)return s===0?s:0;if(s=Qn(s),s===Ue||s===-1/0){var l=s<0?-1:1;return l*Ce}return s===s?s:0}function et(s){var l=Dr(s),h=l%1;return l===l?h?l-h:l:0}function Cg(s){return s?Ci(et(s),0,$e):0}function Qn(s){if(typeof s=="number")return s;if(Mn(s))return rt;if(Ut(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Ut(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=$_(s);var h=qv.test(s);return h||Qv.test(s)?xm(s.slice(2),h?2:8):Xv.test(s)?rt:+s}function Og(s){return gr(s,In(s))}function pO(s){return s?Ci(et(s),-9007199254740991,xe):s===0?s:0}function vt(s){return s==null?"":Gn(s)}var vO=eo(function(s,l){if(ts(l)||On(l)){gr(l,Qt(l),s);return}for(var h in l)Et.call(l,h)&&Xo(s,h,l[h])}),Ig=eo(function(s,l){gr(l,In(l),s)}),Ta=eo(function(s,l,h,C){gr(l,In(l),s,C)}),mO=eo(function(s,l,h,C){gr(l,Qt(l),s,C)}),EO=xr(_c);function CO(s,l){var h=Ji(s);return l==null?h:J_(h,l)}var OO=it(function(s,l){s=bt(s);var h=-1,C=l.length,w=C>2?l[2]:n;for(w&&fn(l[0],l[1],w)&&(C=1);++h<C;)for(var R=l[h],P=In(R),Y=-1,q=P.length;++Y<q;){var de=P[Y],_e=s[de];(_e===n||ar(_e,qi[de])&&!Et.call(s,de))&&(s[de]=R[de])}return s}),IO=it(function(s){return s.push(n,Ff),Dn(bg,n,s)});function bO(s,l){return k_(s,Be(l,3),fr)}function wO(s,l){return k_(s,Be(l,3),gc)}function yO(s,l){return s==null?s:fc(s,Be(l,3),In)}function LO(s,l){return s==null?s:of(s,Be(l,3),In)}function AO(s,l){return s&&fr(s,Be(l,3))}function SO(s,l){return s&&gc(s,Be(l,3))}function NO(s){return s==null?[]:fa(s,Qt(s))}function xO(s){return s==null?[]:fa(s,In(s))}function jc(s,l,h){var C=s==null?n:Oi(s,l);return C===n?h:C}function RO(s,l){return s!=null&&Bf(s,l,e0)}function Kc(s,l){return s!=null&&Bf(s,l,t0)}var TO=kf(function(s,l,h){l!=null&&typeof l.toString!="function"&&(l=ea.call(l)),s[l]=h},Xc(bn)),DO=kf(function(s,l,h){l!=null&&typeof l.toString!="function"&&(l=ea.call(l)),Et.call(s,l)?s[l].push(h):s[l]=[h]},Be),kO=it(Zo);function Qt(s){return On(s)?Z_(s):mc(s)}function In(s){return On(s)?Z_(s,!0):d0(s)}function GO(s,l){var h={};return l=Be(l,3),fr(s,function(C,w,R){Sr(h,l(C,w,R),C)}),h}function MO(s,l){var h={};return l=Be(l,3),fr(s,function(C,w,R){Sr(h,w,l(C,w,R))}),h}var UO=eo(function(s,l,h){ga(s,l,h)}),bg=eo(function(s,l,h,C){ga(s,l,h,C)}),$O=xr(function(s,l){var h={};if(s==null)return h;var C=!1;l=Gt(l,function(R){return R=ei(R,s),C||(C=R.length>1),R}),gr(s,Tc(s),h),C&&(h=Xn(h,g|p|m,T0));for(var w=l.length;w--;)wc(h,l[w]);return h});function FO(s,l){return wg(s,Na(Be(l)))}var PO=xr(function(s,l){return s==null?{}:f0(s,l)});function wg(s,l){if(s==null)return{};var h=Gt(Tc(s),function(C){return[C]});return l=Be(l),hf(s,h,function(C,w){return l(C,w[0])})}function HO(s,l,h){l=ei(l,s);var C=-1,w=l.length;for(w||(w=1,s=n);++C<w;){var R=s==null?n:s[hr(l[C])];R===n&&(C=w,R=h),s=Tr(R)?R.call(s):R}return s}function BO(s,l,h){return s==null?s:Jo(s,l,h)}function WO(s,l,h,C){return C=typeof C=="function"?C:n,s==null?s:Jo(s,l,h,C)}var yg=Uf(Qt),Lg=Uf(In);function zO(s,l,h){var C=Ze(s),w=C||ni(s)||ro(s);if(l=Be(l,4),h==null){var R=s&&s.constructor;w?h=C?new R:[]:Ut(s)?h=Tr(R)?Ji(ra(s)):{}:h={}}return(w?jn:fr)(s,function(P,Y,q){return l(h,P,Y,q)}),h}function YO(s,l){return s==null?!0:wc(s,l)}function jO(s,l,h){return s==null?s:Cf(s,l,Ac(h))}function KO(s,l,h,C){return C=typeof C=="function"?C:n,s==null?s:Cf(s,l,Ac(h),C)}function io(s){return s==null?[]:oc(s,Qt(s))}function VO(s){return s==null?[]:oc(s,In(s))}function XO(s,l,h){return h===n&&(h=l,l=n),h!==n&&(h=Qn(h),h=h===h?h:0),l!==n&&(l=Qn(l),l=l===l?l:0),Ci(Qn(s),l,h)}function qO(s,l,h){return l=Dr(l),h===n?(h=l,l=0):h=Dr(h),s=Qn(s),n0(s,l,h)}function ZO(s,l,h){if(h&&typeof h!="boolean"&&fn(s,l,h)&&(l=h=n),h===n&&(typeof l=="boolean"?(h=l,l=n):typeof s=="boolean"&&(h=s,s=n)),s===n&&l===n?(s=0,l=1):(s=Dr(s),l===n?(l=s,s=0):l=Dr(l)),s>l){var C=s;s=l,l=C}if(h||s%1||l%1){var w=X_();return cn(s+w*(l-s+Nm("1e-"+((w+"").length-1))),l)}return Oc(s,l)}var QO=to(function(s,l,h){return l=l.toLowerCase(),s+(h?Ag(l):l)});function Ag(s){return Vc(vt(s).toLowerCase())}function Sg(s){return s=vt(s),s&&s.replace(em,Bm).replace(Em,"")}function JO(s,l,h){s=vt(s),l=Gn(l);var C=s.length;h=h===n?C:Ci(et(h),0,C);var w=h;return h-=l.length,h>=0&&s.slice(h,w)==l}function eI(s){return s=vt(s),s&&kv.test(s)?s.replace(i_,Wm):s}function tI(s){return s=vt(s),s&&Pv.test(s)?s.replace(Wl,"\\$&"):s}var nI=to(function(s,l,h){return s+(h?"-":"")+l.toLowerCase()}),rI=to(function(s,l,h){return s+(h?" ":"")+l.toLowerCase()}),iI=Rf("toLowerCase");function oI(s,l,h){s=vt(s),l=et(l);var C=l?Vi(s):0;if(!l||C>=l)return s;var w=(l-C)/2;return Ca(aa(w),h)+s+Ca(sa(w),h)}function sI(s,l,h){s=vt(s),l=et(l);var C=l?Vi(s):0;return l&&C<l?s+Ca(l-C,h):s}function aI(s,l,h){s=vt(s),l=et(l);var C=l?Vi(s):0;return l&&C<l?Ca(l-C,h)+s:s}function lI(s,l,h){return h||l==null?l=0:l&&(l=+l),h1(vt(s).replace(zl,""),l||0)}function cI(s,l,h){return(h?fn(s,l,h):l===n)?l=1:l=et(l),Ic(vt(s),l)}function uI(){var s=arguments,l=vt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var dI=to(function(s,l,h){return s+(h?"_":"")+l.toLowerCase()});function _I(s,l,h){return h&&typeof h!="number"&&fn(s,l,h)&&(l=h=n),h=h===n?$e:h>>>0,h?(s=vt(s),s&&(typeof l=="string"||l!=null&&!Yc(l))&&(l=Gn(l),!l&&Ki(s))?ti(or(s),0,h):s.split(l,h)):[]}var fI=to(function(s,l,h){return s+(h?" ":"")+Vc(l)});function gI(s,l,h){return s=vt(s),h=h==null?0:Ci(et(h),0,s.length),l=Gn(l),s.slice(h,h+l.length)==l}function hI(s,l,h){var C=S.templateSettings;h&&fn(s,l,h)&&(l=n),s=vt(s),l=Ta({},l,C,$f);var w=Ta({},l.imports,C.imports,$f),R=Qt(w),P=oc(w,R),Y,q,de=0,_e=l.interpolate||Ys,ge="__p += '",Le=ac((l.escape||Ys).source+"|"+_e.source+"|"+(_e===o_?Vv:Ys).source+"|"+(l.evaluate||Ys).source+"|$","g"),ke="//# sourceURL="+(Et.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++wm+"]")+`
`;s.replace(Le,function(ze,ot,ut,Un,gn,$n){return ut||(ut=Un),ge+=s.slice(de,$n).replace(tm,zm),ot&&(Y=!0,ge+=`' +
__e(`+ot+`) +
'`),gn&&(q=!0,ge+=`';
`+gn+`;
__p += '`),ut&&(ge+=`' +
((__t = (`+ut+`)) == null ? '' : __t) +
'`),de=$n+ze.length,ze}),ge+=`';
`;var We=Et.call(l,"variable")&&l.variable;if(!We)ge=`with (obj) {
`+ge+`
}
`;else if(jv.test(We))throw new qe(c);ge=(q?ge.replace(xv,""):ge).replace(Rv,"$1").replace(Tv,"$1;"),ge="function("+(We||"obj")+`) {
`+(We?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(Y?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var nt=xg(function(){return pt(R,ke+"return "+ge).apply(n,P)});if(nt.source=ge,zc(nt))throw nt;return nt}function pI(s){return vt(s).toLowerCase()}function vI(s){return vt(s).toUpperCase()}function mI(s,l,h){if(s=vt(s),s&&(h||l===n))return $_(s);if(!s||!(l=Gn(l)))return s;var C=or(s),w=or(l),R=F_(C,w),P=P_(C,w)+1;return ti(C,R,P).join("")}function EI(s,l,h){if(s=vt(s),s&&(h||l===n))return s.slice(0,B_(s)+1);if(!s||!(l=Gn(l)))return s;var C=or(s),w=P_(C,or(l))+1;return ti(C,0,w).join("")}function CI(s,l,h){if(s=vt(s),s&&(h||l===n))return s.replace(zl,"");if(!s||!(l=Gn(l)))return s;var C=or(s),w=F_(C,or(l));return ti(C,w).join("")}function OI(s,l){var h=ce,C=Z;if(Ut(l)){var w="separator"in l?l.separator:w;h="length"in l?et(l.length):h,C="omission"in l?Gn(l.omission):C}s=vt(s);var R=s.length;if(Ki(s)){var P=or(s);R=P.length}if(h>=R)return s;var Y=h-Vi(C);if(Y<1)return C;var q=P?ti(P,0,Y).join(""):s.slice(0,Y);if(w===n)return q+C;if(P&&(Y+=q.length-Y),Yc(w)){if(s.slice(Y).search(w)){var de,_e=q;for(w.global||(w=ac(w.source,vt(s_.exec(w))+"g")),w.lastIndex=0;de=w.exec(_e);)var ge=de.index;q=q.slice(0,ge===n?Y:ge)}}else if(s.indexOf(Gn(w),Y)!=Y){var Le=q.lastIndexOf(w);Le>-1&&(q=q.slice(0,Le))}return q+C}function II(s){return s=vt(s),s&&Dv.test(s)?s.replace(r_,Zm):s}var bI=to(function(s,l,h){return s+(h?" ":"")+l.toUpperCase()}),Vc=Rf("toUpperCase");function Ng(s,l,h){return s=vt(s),l=h?n:l,l===n?jm(s)?e1(s):Um(s):s.match(l)||[]}var xg=it(function(s,l){try{return Dn(s,n,l)}catch(h){return zc(h)?h:new qe(h)}}),wI=xr(function(s,l){return jn(l,function(h){h=hr(h),Sr(s,h,Bc(s[h],s))}),s});function yI(s){var l=s==null?0:s.length,h=Be();return s=l?Gt(s,function(C){if(typeof C[1]!="function")throw new Kn(a);return[h(C[0]),C[1]]}):[],it(function(C){for(var w=-1;++w<l;){var R=s[w];if(Dn(R[0],this,C))return Dn(R[1],this,C)}})}function LI(s){return Z1(Xn(s,g))}function Xc(s){return function(){return s}}function AI(s,l){return s==null||s!==s?l:s}var SI=Df(),NI=Df(!0);function bn(s){return s}function qc(s){return cf(typeof s=="function"?s:Xn(s,g))}function xI(s){return df(Xn(s,g))}function RI(s,l){return _f(s,Xn(l,g))}var TI=it(function(s,l){return function(h){return Zo(h,s,l)}}),DI=it(function(s,l){return function(h){return Zo(s,h,l)}});function Zc(s,l,h){var C=Qt(l),w=fa(l,C);h==null&&!(Ut(l)&&(w.length||!C.length))&&(h=l,l=s,s=this,w=fa(l,Qt(l)));var R=!(Ut(h)&&"chain"in h)||!!h.chain,P=Tr(s);return jn(w,function(Y){var q=l[Y];s[Y]=q,P&&(s.prototype[Y]=function(){var de=this.__chain__;if(R||de){var _e=s(this.__wrapped__),ge=_e.__actions__=Cn(this.__actions__);return ge.push({func:q,args:arguments,thisArg:s}),_e.__chain__=de,_e}return q.apply(s,Xr([this.value()],arguments))})}),s}function kI(){return nn._===this&&(nn._=s1),this}function Qc(){}function GI(s){return s=et(s),it(function(l){return ff(l,s)})}var MI=Nc(Gt),UI=Nc(D_),$I=Nc(ec);function Rg(s){return Mc(s)?tc(hr(s)):g0(s)}function FI(s){return function(l){return s==null?n:Oi(s,l)}}var PI=Gf(),HI=Gf(!0);function Jc(){return[]}function eu(){return!1}function BI(){return{}}function WI(){return""}function zI(){return!0}function YI(s,l){if(s=et(s),s<1||s>xe)return[];var h=$e,C=cn(s,$e);l=Be(l),s-=$e;for(var w=ic(C,l);++h<s;)l(h);return w}function jI(s){return Ze(s)?Gt(s,hr):Mn(s)?[s]:Cn(Zf(vt(s)))}function KI(s){var l=++i1;return vt(s)+l}var VI=Ea(function(s,l){return s+l},0),XI=xc("ceil"),qI=Ea(function(s,l){return s/l},1),ZI=xc("floor");function QI(s){return s&&s.length?_a(s,bn,hc):n}function JI(s,l){return s&&s.length?_a(s,Be(l,2),hc):n}function eb(s){return M_(s,bn)}function tb(s,l){return M_(s,Be(l,2))}function nb(s){return s&&s.length?_a(s,bn,Ec):n}function rb(s,l){return s&&s.length?_a(s,Be(l,2),Ec):n}var ib=Ea(function(s,l){return s*l},1),ob=xc("round"),sb=Ea(function(s,l){return s-l},0);function ab(s){return s&&s.length?rc(s,bn):0}function lb(s,l){return s&&s.length?rc(s,Be(l,2)):0}return S.after=xC,S.ary=lg,S.assign=vO,S.assignIn=Ig,S.assignInWith=Ta,S.assignWith=mO,S.at=EO,S.before=cg,S.bind=Bc,S.bindAll=wI,S.bindKey=ug,S.castArray=BC,S.chain=og,S.chunk=Z0,S.compact=Q0,S.concat=J0,S.cond=yI,S.conforms=LI,S.constant=Xc,S.countBy=aC,S.create=CO,S.curry=dg,S.curryRight=_g,S.debounce=fg,S.defaults=OO,S.defaultsDeep=IO,S.defer=RC,S.delay=TC,S.difference=eE,S.differenceBy=tE,S.differenceWith=nE,S.drop=rE,S.dropRight=iE,S.dropRightWhile=oE,S.dropWhile=sE,S.fill=aE,S.filter=cC,S.flatMap=_C,S.flatMapDeep=fC,S.flatMapDepth=gC,S.flatten=tg,S.flattenDeep=lE,S.flattenDepth=cE,S.flip=DC,S.flow=SI,S.flowRight=NI,S.fromPairs=uE,S.functions=NO,S.functionsIn=xO,S.groupBy=hC,S.initial=_E,S.intersection=fE,S.intersectionBy=gE,S.intersectionWith=hE,S.invert=TO,S.invertBy=DO,S.invokeMap=vC,S.iteratee=qc,S.keyBy=mC,S.keys=Qt,S.keysIn=In,S.map=La,S.mapKeys=GO,S.mapValues=MO,S.matches=xI,S.matchesProperty=RI,S.memoize=Sa,S.merge=UO,S.mergeWith=bg,S.method=TI,S.methodOf=DI,S.mixin=Zc,S.negate=Na,S.nthArg=GI,S.omit=$O,S.omitBy=FO,S.once=kC,S.orderBy=EC,S.over=MI,S.overArgs=GC,S.overEvery=UI,S.overSome=$I,S.partial=Wc,S.partialRight=gg,S.partition=CC,S.pick=PO,S.pickBy=wg,S.property=Rg,S.propertyOf=FI,S.pull=EE,S.pullAll=rg,S.pullAllBy=CE,S.pullAllWith=OE,S.pullAt=IE,S.range=PI,S.rangeRight=HI,S.rearg=MC,S.reject=bC,S.remove=bE,S.rest=UC,S.reverse=Pc,S.sampleSize=yC,S.set=BO,S.setWith=WO,S.shuffle=LC,S.slice=wE,S.sortBy=NC,S.sortedUniq=RE,S.sortedUniqBy=TE,S.split=_I,S.spread=$C,S.tail=DE,S.take=kE,S.takeRight=GE,S.takeRightWhile=ME,S.takeWhile=UE,S.tap=QE,S.throttle=FC,S.thru=ya,S.toArray=Eg,S.toPairs=yg,S.toPairsIn=Lg,S.toPath=jI,S.toPlainObject=Og,S.transform=zO,S.unary=PC,S.union=$E,S.unionBy=FE,S.unionWith=PE,S.uniq=HE,S.uniqBy=BE,S.uniqWith=WE,S.unset=YO,S.unzip=Hc,S.unzipWith=ig,S.update=jO,S.updateWith=KO,S.values=io,S.valuesIn=VO,S.without=zE,S.words=Ng,S.wrap=HC,S.xor=YE,S.xorBy=jE,S.xorWith=KE,S.zip=VE,S.zipObject=XE,S.zipObjectDeep=qE,S.zipWith=ZE,S.entries=yg,S.entriesIn=Lg,S.extend=Ig,S.extendWith=Ta,Zc(S,S),S.add=VI,S.attempt=xg,S.camelCase=QO,S.capitalize=Ag,S.ceil=XI,S.clamp=XO,S.clone=WC,S.cloneDeep=YC,S.cloneDeepWith=jC,S.cloneWith=zC,S.conformsTo=KC,S.deburr=Sg,S.defaultTo=AI,S.divide=qI,S.endsWith=JO,S.eq=ar,S.escape=eI,S.escapeRegExp=tI,S.every=lC,S.find=uC,S.findIndex=Jf,S.findKey=bO,S.findLast=dC,S.findLastIndex=eg,S.findLastKey=wO,S.floor=ZI,S.forEach=sg,S.forEachRight=ag,S.forIn=yO,S.forInRight=LO,S.forOwn=AO,S.forOwnRight=SO,S.get=jc,S.gt=VC,S.gte=XC,S.has=RO,S.hasIn=Kc,S.head=ng,S.identity=bn,S.includes=pC,S.indexOf=dE,S.inRange=qO,S.invoke=kO,S.isArguments=wi,S.isArray=Ze,S.isArrayBuffer=qC,S.isArrayLike=On,S.isArrayLikeObject=Pt,S.isBoolean=ZC,S.isBuffer=ni,S.isDate=QC,S.isElement=JC,S.isEmpty=eO,S.isEqual=tO,S.isEqualWith=nO,S.isError=zc,S.isFinite=rO,S.isFunction=Tr,S.isInteger=hg,S.isLength=xa,S.isMap=pg,S.isMatch=iO,S.isMatchWith=oO,S.isNaN=sO,S.isNative=aO,S.isNil=cO,S.isNull=lO,S.isNumber=vg,S.isObject=Ut,S.isObjectLike=Ft,S.isPlainObject=rs,S.isRegExp=Yc,S.isSafeInteger=uO,S.isSet=mg,S.isString=Ra,S.isSymbol=Mn,S.isTypedArray=ro,S.isUndefined=dO,S.isWeakMap=_O,S.isWeakSet=fO,S.join=pE,S.kebabCase=nI,S.last=Zn,S.lastIndexOf=vE,S.lowerCase=rI,S.lowerFirst=iI,S.lt=gO,S.lte=hO,S.max=QI,S.maxBy=JI,S.mean=eb,S.meanBy=tb,S.min=nb,S.minBy=rb,S.stubArray=Jc,S.stubFalse=eu,S.stubObject=BI,S.stubString=WI,S.stubTrue=zI,S.multiply=ib,S.nth=mE,S.noConflict=kI,S.noop=Qc,S.now=Aa,S.pad=oI,S.padEnd=sI,S.padStart=aI,S.parseInt=lI,S.random=ZO,S.reduce=OC,S.reduceRight=IC,S.repeat=cI,S.replace=uI,S.result=HO,S.round=ob,S.runInContext=X,S.sample=wC,S.size=AC,S.snakeCase=dI,S.some=SC,S.sortedIndex=yE,S.sortedIndexBy=LE,S.sortedIndexOf=AE,S.sortedLastIndex=SE,S.sortedLastIndexBy=NE,S.sortedLastIndexOf=xE,S.startCase=fI,S.startsWith=gI,S.subtract=sb,S.sum=ab,S.sumBy=lb,S.template=hI,S.times=YI,S.toFinite=Dr,S.toInteger=et,S.toLength=Cg,S.toLower=pI,S.toNumber=Qn,S.toSafeInteger=pO,S.toString=vt,S.toUpper=vI,S.trim=mI,S.trimEnd=EI,S.trimStart=CI,S.truncate=OI,S.unescape=II,S.uniqueId=KI,S.upperCase=bI,S.upperFirst=Vc,S.each=sg,S.eachRight=ag,S.first=ng,Zc(S,function(){var s={};return fr(S,function(l,h){Et.call(S.prototype,h)||(s[h]=l)}),s}(),{chain:!1}),S.VERSION=r,jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){S[s].placeholder=S}),jn(["drop","take"],function(s,l){at.prototype[s]=function(h){h=h===n?1:Vt(et(h),0);var C=this.__filtered__&&!l?new at(this):this.clone();return C.__filtered__?C.__takeCount__=cn(h,C.__takeCount__):C.__views__.push({size:cn(h,$e),type:s+(C.__dir__<0?"Right":"")}),C},at.prototype[s+"Right"]=function(h){return this.reverse()[s](h).reverse()}}),jn(["filter","map","takeWhile"],function(s,l){var h=l+1,C=h==Ee||h==Re;at.prototype[s]=function(w){var R=this.clone();return R.__iteratees__.push({iteratee:Be(w,3),type:h}),R.__filtered__=R.__filtered__||C,R}}),jn(["head","last"],function(s,l){var h="take"+(l?"Right":"");at.prototype[s]=function(){return this[h](1).value()[0]}}),jn(["initial","tail"],function(s,l){var h="drop"+(l?"":"Right");at.prototype[s]=function(){return this.__filtered__?new at(this):this[h](1)}}),at.prototype.compact=function(){return this.filter(bn)},at.prototype.find=function(s){return this.filter(s).head()},at.prototype.findLast=function(s){return this.reverse().find(s)},at.prototype.invokeMap=it(function(s,l){return typeof s=="function"?new at(this):this.map(function(h){return Zo(h,s,l)})}),at.prototype.reject=function(s){return this.filter(Na(Be(s)))},at.prototype.slice=function(s,l){s=et(s);var h=this;return h.__filtered__&&(s>0||l<0)?new at(h):(s<0?h=h.takeRight(-s):s&&(h=h.drop(s)),l!==n&&(l=et(l),h=l<0?h.dropRight(-l):h.take(l-s)),h)},at.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},at.prototype.toArray=function(){return this.take($e)},fr(at.prototype,function(s,l){var h=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),w=S[C?"take"+(l=="last"?"Right":""):l],R=C||/^find/.test(l);w&&(S.prototype[l]=function(){var P=this.__wrapped__,Y=C?[1]:arguments,q=P instanceof at,de=Y[0],_e=q||Ze(P),ge=function(ot){var ut=w.apply(S,Xr([ot],Y));return C&&Le?ut[0]:ut};_e&&h&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var Le=this.__chain__,ke=!!this.__actions__.length,We=R&&!Le,nt=q&&!ke;if(!R&&_e){P=nt?P:new at(this);var ze=s.apply(P,Y);return ze.__actions__.push({func:ya,args:[ge],thisArg:n}),new Vn(ze,Le)}return We&&nt?s.apply(this,Y):(ze=this.thru(ge),We?C?ze.value()[0]:ze.value():ze)})}),jn(["pop","push","shift","sort","splice","unshift"],function(s){var l=Zs[s],h=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);S.prototype[s]=function(){var w=arguments;if(C&&!this.__chain__){var R=this.value();return l.apply(Ze(R)?R:[],w)}return this[h](function(P){return l.apply(Ze(P)?P:[],w)})}}),fr(at.prototype,function(s,l){var h=S[l];if(h){var C=h.name+"";Et.call(Qi,C)||(Qi[C]=[]),Qi[C].push({name:l,func:h})}}),Qi[ma(n,b).name]=[{name:"wrapper",func:n}],at.prototype.clone=I1,at.prototype.reverse=b1,at.prototype.value=w1,S.prototype.at=JE,S.prototype.chain=eC,S.prototype.commit=tC,S.prototype.next=nC,S.prototype.plant=iC,S.prototype.reverse=oC,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=sC,S.prototype.first=S.prototype.head,zo&&(S.prototype[zo]=rC),S},Xi=t1();pi?((pi.exports=Xi)._=Xi,ql._=Xi):nn._=Xi}).call(Ux)}(cs,cs.exports)),cs.exports}var Lt=$x();function Ur(t){return Array.isArray?Array.isArray(t):dp(t)==="[object Array]"}function Fx(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Px(t){return t==null?"":Fx(t)}function Er(t){return typeof t=="string"}function cp(t){return typeof t=="number"}function Hx(t){return t===!0||t===!1||Bx(t)&&dp(t)=="[object Boolean]"}function up(t){return typeof t=="object"}function Bx(t){return up(t)&&t!==null}function Hn(t){return t!=null}function su(t){return!t.trim().length}function dp(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Wx="Incorrect 'index' type",zx=t=>`Invalid value for key ${t}`,Yx=t=>`Pattern length exceeds max of ${t}.`,jx=t=>`Missing ${t} property in key`,Kx=t=>`Property 'weight' in key '${t}' must be a positive integer`,Fg=Object.prototype.hasOwnProperty;class Vx{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=_p(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function _p(t){let e=null,n=null,r=null,i=1,o=null;if(Er(t)||Ur(t))r=t,e=Pg(t),n=wu(t);else{if(!Fg.call(t,"name"))throw new Error(jx("name"));const a=t.name;if(r=a,Fg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Kx(a));e=Pg(a),n=wu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Pg(t){return Ur(t)?t:t.split(".")}function wu(t){return Ur(t)?t.join("."):t}function Xx(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Hn(o))if(!a[c])n.push(o);else{let u=a[c];const f=o[u];if(!Hn(f))return;if(c===a.length-1&&(Er(f)||cp(f)||Hx(f)))n.push(Px(f));else if(Ur(f)){r=!0;for(let v=0,g=f.length;v<g;v+=1)i(f[v],a,c+1)}else a.length&&i(f,a,c+1)}};return i(t,Er(e)?e.split("."):e,0),r?n:n[0]}const qx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Zx={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Qx={location:0,threshold:.6,distance:100},Jx={useExtendedSearch:!1,getFn:Xx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ke={...Zx,...qx,...Qx,...Jx};const eR=/[^ ]+/g;function tR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(eR).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class wd{constructor({getFn:e=Ke.getFn,fieldNormWeight:n=Ke.fieldNormWeight}={}){this.norm=tR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Er(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Er(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Hn(e)||su(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Hn(a)){if(Ur(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:v}=u.pop();if(Hn(v))if(Er(v)&&!su(v)){let g={v,i:f,n:this.norm.get(v)};c.push(g)}else Ur(v)&&v.forEach((g,p)=>{u.push({nestedArrIndex:p,value:g})})}r.$[o]=c}else if(Er(a)&&!su(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function fp(t,e,{getFn:n=Ke.getFn,fieldNormWeight:r=Ke.fieldNormWeight}={}){const i=new wd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(_p)),i.setSources(e),i.create(),i}function nR(t,{getFn:e=Ke.getFn,fieldNormWeight:n=Ke.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new wd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ga(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ke.distance,ignoreLocation:o=Ke.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function rR(t=[],e=Ke.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Li=32;function iR(t,e,n,{location:r=Ke.location,distance:i=Ke.distance,threshold:o=Ke.threshold,findAllMatches:a=Ke.findAllMatches,minMatchCharLength:c=Ke.minMatchCharLength,includeMatches:u=Ke.includeMatches,ignoreLocation:f=Ke.ignoreLocation}={}){if(e.length>Li)throw new Error(Yx(Li));const v=e.length,g=t.length,p=Math.max(0,Math.min(r,g));let m=o,E=p;const I=c>1||u,O=I?Array(g):[];let b;for(;(b=t.indexOf(e,E))>-1;){let F=Ga(e,{currentLocation:b,expectedLocation:p,distance:i,ignoreLocation:f});if(m=Math.min(F,m),E=b+v,I){let z=0;for(;z<v;)O[b+z]=1,z+=1}}E=-1;let A=[],k=1,G=v+g;const H=1<<v-1;for(let F=0;F<v;F+=1){let z=0,Q=G;for(;z<Q;)Ga(e,{errors:F,currentLocation:p+Q,expectedLocation:p,distance:i,ignoreLocation:f})<=m?z=Q:G=Q,Q=Math.floor((G-z)/2+z);G=Q;let ce=Math.max(1,p-Q+1),Z=a?g:Math.min(p+Q,g)+v,ne=Array(Z+2);ne[Z+1]=(1<<F)-1;for(let Ee=Z;Ee>=ce;Ee-=1){let ye=Ee-1,Re=n[t.charAt(ye)];if(I&&(O[ye]=+!!Re),ne[Ee]=(ne[Ee+1]<<1|1)&Re,F&&(ne[Ee]|=(A[Ee+1]|A[Ee])<<1|1|A[Ee+1]),ne[Ee]&H&&(k=Ga(e,{errors:F,currentLocation:ye,expectedLocation:p,distance:i,ignoreLocation:f}),k<=m)){if(m=k,E=ye,E<=p)break;ce=Math.max(1,2*p-E)}}if(Ga(e,{errors:F+1,currentLocation:p,expectedLocation:p,distance:i,ignoreLocation:f})>m)break;A=ne}const $={isMatch:E>=0,score:Math.max(.001,k)};if(I){const F=rR(O,c);F.length?u&&($.indices=F):$.isMatch=!1}return $}function oR(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class gp{constructor(e,{location:n=Ke.location,threshold:r=Ke.threshold,distance:i=Ke.distance,includeMatches:o=Ke.includeMatches,findAllMatches:a=Ke.findAllMatches,minMatchCharLength:c=Ke.minMatchCharLength,isCaseSensitive:u=Ke.isCaseSensitive,ignoreLocation:f=Ke.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(p,m)=>{this.chunks.push({pattern:p,alphabet:oR(p),startIndex:m})},g=this.pattern.length;if(g>Li){let p=0;const m=g%Li,E=g-m;for(;p<E;)v(this.pattern.substr(p,Li),p),p+=Li;if(m){const I=g-Li;v(this.pattern.substr(I),I)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let v=[],g=0,p=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:O})=>{const{isMatch:b,score:A,indices:k}=iR(e,E,I,{location:i+O,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});b&&(p=!0),g+=A,b&&k&&(v=[...v,...k])});let m={isMatch:p,score:p?g/this.chunks.length:1};return p&&r&&(m.indices=v),m}}class _i{constructor(e){this.pattern=e}static isMultiMatch(e){return Hg(e,this.multiRegex)}static isSingleMatch(e){return Hg(e,this.singleRegex)}search(){}}function Hg(t,e){const n=t.match(e);return n?n[1]:null}class sR extends _i{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class aR extends _i{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class lR extends _i{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class cR extends _i{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class uR extends _i{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class dR extends _i{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class hp extends _i{constructor(e,{location:n=Ke.location,threshold:r=Ke.threshold,distance:i=Ke.distance,includeMatches:o=Ke.includeMatches,findAllMatches:a=Ke.findAllMatches,minMatchCharLength:c=Ke.minMatchCharLength,isCaseSensitive:u=Ke.isCaseSensitive,ignoreLocation:f=Ke.ignoreLocation}={}){super(e),this._bitapSearch=new gp(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class pp extends _i{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const yu=[sR,pp,lR,cR,dR,uR,aR,hp],Bg=yu.length,_R=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,fR="|";function gR(t,e={}){return t.split(fR).map(n=>{let r=n.trim().split(_R).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,f=-1;for(;!u&&++f<Bg;){const v=yu[f];let g=v.isMultiMatch(c);g&&(i.push(new v(g,e)),u=!0)}if(!u)for(f=-1;++f<Bg;){const v=yu[f];let g=v.isSingleMatch(c);if(g){i.push(new v(g,e));break}}}return i})}const hR=new Set([hp.type,pp.type]);class pR{constructor(e,{isCaseSensitive:n=Ke.isCaseSensitive,includeMatches:r=Ke.includeMatches,minMatchCharLength:i=Ke.minMatchCharLength,ignoreLocation:o=Ke.ignoreLocation,findAllMatches:a=Ke.findAllMatches,location:c=Ke.location,threshold:u=Ke.threshold,distance:f=Ke.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=gR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const v=n[u];a.length=0,o=0;for(let g=0,p=v.length;g<p;g+=1){const m=v[g],{isMatch:E,indices:I,score:O}=m.search(e);if(E){if(o+=1,c+=O,r){const b=m.constructor.type;hR.has(b)?a=[...a,...I]:a.push(I)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const Lu=[];function vR(...t){Lu.push(...t)}function Au(t,e){for(let n=0,r=Lu.length;n<r;n+=1){let i=Lu[n];if(i.condition(t,e))return new i(t,e)}return new gp(t,e)}const Va={AND:"$and",OR:"$or"},Su={PATH:"$path",PATTERN:"$val"},Nu=t=>!!(t[Va.AND]||t[Va.OR]),mR=t=>!!t[Su.PATH],ER=t=>!Ur(t)&&up(t)&&!Nu(t),Wg=t=>({[Va.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function vp(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=mR(i);if(!a&&o.length>1&&!Nu(i))return r(Wg(i));if(ER(i)){const u=a?i[Su.PATH]:o[0],f=a?i[Su.PATTERN]:i[u];if(!Er(f))throw new Error(zx(u));const v={keyId:wu(u),pattern:f};return n&&(v.searcher=Au(f,e)),v}let c={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];Ur(f)&&f.forEach(v=>{c.children.push(r(v))})}),c};return Nu(t)||(t=Wg(t)),r(t)}function CR(t,{ignoreFieldNorm:e=Ke.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function OR(t,e){const n=t.matches;e.matches=[],Hn(n)&&n.forEach(r=>{if(!Hn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function IR(t,e){e.score=t.score}function bR(t,e,{includeMatches:n=Ke.includeMatches,includeScore:r=Ke.includeScore}={}){const i=[];return n&&i.push(OR),r&&i.push(IR),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class No{constructor(e,n={},r){this.options={...Ke,...n},this.options.useExtendedSearch,this._keyStore=new Vx(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof wd))throw new Error(Wx);this._myIndex=n||fp(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Hn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=Er(e)?Er(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return CR(u,{ignoreFieldNorm:c}),o&&u.sort(a),cp(n)&&n>-1&&(u=u.slice(0,n)),bR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Au(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Hn(o))return;const{isMatch:u,score:f,indices:v}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:c,indices:v}]})}),i}_searchLogical(e){const n=vp(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:g,searcher:p}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:p});return m&&m.length?[{idx:f,item:u,matches:m}]:[]}const v=[];for(let g=0,p=c.children.length;g<p;g+=1){const m=c.children[g],E=r(m,u,f);if(E.length)v.push(...E);else if(c.operator===Va.AND)return[]}return v},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Hn(c)){let f=r(n,c,u);f.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),f.forEach(({matches:v})=>{o[u].matches.push(...v)}))}}),a}_searchObjectList(e){const n=Au(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Hn(a))return;let u=[];r.forEach((f,v)=>{u.push(...this._findMatches({key:f,value:a[v],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Hn(n))return[];let i=[];if(Ur(n))n.forEach(({v:o,i:a,n:c})=>{if(!Hn(o))return;const{isMatch:u,score:f,indices:v}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:c,indices:v})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}No.version="7.0.0";No.createIndex=fp;No.parseIndex=nR;No.config=Ke;No.parseQuery=vp;vR(pR);function Ti(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function wR(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function yR(t){return new No(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function LR(t,e,n){const r=wR(e,n);return t.length===0?r:yR(r).search(t).map(i=>i.item)}function AR(t,e){return Ti(t,e).shape}function Yt(t,e){const n=AR(t,e);return n?bu(n):void 0}function ks(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return bd(e)}function SR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Gs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return bd(i)})}function NR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return bd(o)})})}function Hr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function mp(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return op(e)}function xR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return op(r)})}function RR(t,e){const n=t.shape;return n===void 0?void 0:{...Yt(e,yt),...n}}function Ep(t,e,n){return{toolId:t,cells:e,value:n}}function TR(t,e){const n=Gs(e,"cells"),r=Hr(e);return Ep(t,n,r)}function Cp(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>je(o,e)&&a>=r)}function DR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Ts(r[i-1],e)))return t;const a=Cp(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Op(t,e){return{toolId:t,cells:e,lines:[]}}function kR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ya(n),{...t,cells:n};const r=n.some(o=>je(o,e)),i=n.some(o=>Ts(o,e));return n.length>0&&!r&&i?(n.push(e),Ya(n),{...t,cells:n}):t}function GR(t,e,n){const r=t.cells.some(f=>je(f,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return xu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return xu(t,e);const c=Cp(o,e,!1);return(o.length===0?!0:Ts(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function xu(t,e){return t.cells.some(r=>je(r,e))?{...t,lines:[...t.lines,[e]]}:t}function MR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function UR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function $R(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function FR(t,e){const n=Gs(e,"cells"),r=NR(e),i=Op(t,n);return i.lines=r,i}function Ip(t,e,n=""){return{toolId:t,cells:e,value:n}}function PR(t,e,n=!1){const r=lp(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function HR(t,e){return{...t,value:e}}function BR(t,e){const n=Gs(e,"cells"),r=Hr(e);return Ip(t,n,r)}function Ru(t,e,n){return{toolId:t,cells:e,value:n}}function WR(t,e){const n=Gs(e,"cells"),r=Hr(e);return Ru(t,n,r)}function Tu(t,e,n){return{toolId:t,cells:e,value:n}}function zR(t,e){const n=Gs(e,"cells"),r=Hr(e);return Tu(t,n,r)}function bp(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function YR(t,e){const n=ks(e),r=mp(e),i=Hr(e);return bp(t,n,r,i)}function wp(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function jR(t,e){const n=ks(e),r=Hr(e);return wp(t,n,r)}function Du(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function KR(t,e){const n=ks(e),r=mp(e);return Du(t,n,r)}function ku(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function VR(t,e){const n=ks(e),r=xR(e),i=ku(t,n,Pe.N);return i.directions=r,i}function yp(t,e,n=""){return{toolId:t,cell:e,value:n}}function XR(t,e){const n=ks(e),r=Hr(e);return yp(t,n,r)}function qR(t,e=""){return{toolId:t,value:e}}function ZR(t,e){const n=Hr(e);return qR(t,n)}function QR(t,e,n=""){return{toolId:t,coords:e,value:n}}function JR(t,e){const n=SR(e,"coords"),r=Hr(e);return QR(t,n,r)}function Ms(t,e){return{...t,value:e}}class xo extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(lT(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new xo;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=zh(r);if(o===void 0||!Object.keys(yt).includes(o))continue;const a=i;for(const c of a){let u=null;if(Yh(o,cl)?u=jR(o,c):ul(o)?u=KR(o,c):dl(o)?u=VR(o,c):_l(o)?u=zR(o,c):_d(o)?u=WR(o,c):fd(o)?u=TR(o,c):Bh(o)?u=JR(o,c):gd(o)?u=FR(o,c):hd(o)?u=BR(o,c):Cs(o)?u=YR(o,c):Xb(o)?u=ZR(o,c):Hh(o)&&(u=XR(o,c)),u!==null){n.addToDict(o);const f=Lt.uniqueId(),v=RR(c,o);u.shape=v,n.addConstraint(o,f,u)}}}return n}}function Xa(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(je(o.cell,n))return[a,o]}return null}function eT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>je(c,u))))return i}return null}function tT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(je(n,a))return i}return null}function zg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>je(c,n)))return[i[0],o]}return null}function nT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>je(c,n)))return i;return null}function Yg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>je(c,n)))return[i[0],o]}return null}function rT(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((f,v)=>je(f,n)&&v>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function iT(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(je(n,a.cell)&&r===a.direction)return c}return null}function oT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(je(n,o.cell))return a}return null}function sT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>je(c,n))||o.cells2.some(c=>je(c,n)))return[i[0],o]}return null}function aT(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function lT(t){const e={};if("cells"in t){const n=t.cells.map(r=>Da(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Da(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Da(i)));e.lines=n}if("cell"in t){const n=Da(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=Yt(t.toolId,yt),r=ew(t.shape,n);r&&(e.shape=r)}return e}function jg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Lp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Gu(t){const e=new Option().style;return e.color=t,e.color!==""}function au(t){return Lp(t)||Gu(t)?t:Gu(`#${t}`)?`#${t}`:void 0}function qa(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Ap(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Za(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function cT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Kg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function uT(t){return t in Kg?Kg[t]:null}function Sp(t,e,n){if(n===null)return null;const r=uT(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function lu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class dT{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);ve(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=lu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=lu(this.cornerMarks,e))}enterHighlight(e){this.highlights=lu(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Sp(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Ro{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new dT(i,a);if(r){const u=Sp(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Ap(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Ds(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const f=this.grid[c][u];i.push(f),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Ro(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function _T(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=Lt.range(1,o+1);t.valid_digits&&!cT(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function fT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=Ro.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=Lt.range(1,c+1);i!==void 0&&(u=i);const f=t.solution,v=t.local_constraints,g=xo.fromJson(v),p=t.bool_constraints,m=Ri.fromJson(p);return{puzzleMeta:r,solution:f,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function QH(){const t=new Ro(9,9),e=new xo,n=new Ri;return{grid:t,solution:void 0,valid_digits:Lt.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var us=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(us||{});const gT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),hT=()=>({type:"CLEAR"}),pT=t=>({type:"DRAG",payload:t}),Mu=t=>({type:"SET",payload:t}),vT=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),yd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),mr=(t,e,n)=>{const r=[...t];return Ya(r),{cells:r,lastCell:e,mode:n}};function mT(t,e,n){if(e===null)return yd();if(n==="RESETTING")return mr([e],e,"SELECTING");const r=t.cells.findIndex(i=>je(e,i));if(n==="SELECTING")return r!==-1?t:mr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),mr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return mr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),mr(i,null,"DESELECTING")}return t}function ET(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>je(e,r));if(t.mode==="SELECTING")return n!==-1?t:mr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),mr(r,null,t.mode)}return t}function CT(t,e){return{...t,cells:e}}function OT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>je(e,i))!==-1?mr([...t.cells],e,"SELECTING"):mr([...t.cells,e],e,"SELECTING"):mr([e],e,t.mode)}function Np(t,e){switch(e==null?void 0:e.type){case"CLEAR":return yd();case"SET":return CT(t,e.payload);case"CLICK":return mT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return ET(t,e.payload);case"ARROW_KEY":return OT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function lo(t,e){return je(t.p1,e.p1)&&je(t.p2,e.p2)||je(t.p1,e.p2)&&je(t.p2,e.p1)}function IT(t,e){return je(t.p1,e.p2)&&je(t.p2,e.p1)}function xp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!je(t,e)}class El{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>je(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>je(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>je(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>je(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>je(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>je(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>je(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>je(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>je(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>je(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>lo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>lo(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&IT(r,e)&&this.draftLine.splice(n,1)}onDrag(e){xp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>lo(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>lo(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new El;return Object.assign(e,this),e}}const Vg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Xg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ma=t=>({type:"ADD_CELL_MARKER",payload:t}),bT=t=>({type:"SET_CELL_MARKERS",payload:t}),qg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),wT=t=>({type:"DRAG",payload:t}),Is=t=>({type:"ADD_LINE_MARKERS",payload:t}),Zg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Ld=()=>({type:"RESET"});function yT(t,e){switch(e.type){case"RESET":return new El;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Rp(){return{_undoStack:[],_redoStack:[]}}const To=$t(Rp());function LT(){To.update(()=>Rp())}function vn(t,e=!0){To.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function AT(t,e=!0){To.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Tp(){To.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Dp(){To.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Qa=$t(new El);function Cr(t){Qa.update(e=>yT(e,t))}const Ja=$t(1);function yi(t,e){return{execute:()=>{Cr(t)},unExecute:()=>{Cr(e)}}}const Di=$t(yd());function so(t){t&&Di.update(e=>Np(e,t))}function Qg(t){t&&Di.update(e=>Np(e,t))}function ST(t,e){return{execute:()=>{Qg(t)},unExecute:()=>{Qg(e)}}}const _o=$t(null),Cl=$t(vo.SETTING),Uu=$t(!1),an=$t(d.DIGIT),kp=$t(d.DIGIT),Ad=$t(Lt.range(1,10)),yn=$t(new Ro(9,9)),mn=$t(st(yn).getAllCells()),Br=$t({}),Wr=$t(new Ri),mt=$t(new xo),jt=$t(null),Ol=$t(void 0),Il=$t(void 0);function NT(t){Br.update(()=>t)}function Do(t){jt.update(()=>t)}function Sd(t){Ol.update(()=>t)}function Mr(t){st(an)!==t&&(an.update(()=>t),Do(null))}function xT(){const t=st(kp);t&&Mr(t)}function $u(t){kp.update(()=>t)}function RT(t){st(an)===t&&Mr(d.DIGIT)}function TT(t){mt.update(e=>(e.removeFromDict(t),e)),Sd(void 0)}function Xt(t,e,n){mt.update(r=>(r.updateConstraint(t,e,n),r)),Do({id:e,constraint:n})}function cu(t){const e=st(jt);if(t=t?{...t}:void 0,Sd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Xt(r,e.id,n)}function DT(t,e){const r=st(mt).get(e);if(!r)return;const i=r[t];i&&Do({id:t,constraint:i})}function kT(t,e,n){const r=new Ro(t,e);yn.update(()=>r),Ad.update(()=>n),mt.update(()=>new xo),Wr.update(()=>new Ri),Br.update(()=>({})),Nd(void 0),mn.update(()=>r.getAllCells())}function GT(t){yn.update(()=>t.grid),Br.update(()=>t.puzzleMeta),Nd(t.solution),Ad.update(()=>t.valid_digits),mt.update(()=>t.localConstraints),Wr.update(()=>t.globalConstraints),mn.update(()=>t.grid.getAllCells())}function Gp(){const t=st(yn);t.resetValues(),yn.update(()=>t),mn.update(()=>t.getAllCells()),Cr(Ld())}function el(){LT(),Cr(Ld()),Mr(d.DIGIT);const t=hT();so(t),Sd(void 0),Do(null)}const Mp=po([ci,an,Cl],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===vo.SETTING}),Us=po([yn,Br,Wr,mt,Il,Ad],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function Nd(t){Il.update(()=>t)}var ao=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(ao||{});const xd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Rd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),MT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),UT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Jg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Up(t){mt.update(e=>(e.addToDict(t),e))}function fi(t,e){const n=st(Ol);n&&(e.shape={...n}),mt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Do({id:t,constraint:e})}function ki(t,e){e&&mt.update(n=>(n.removeConstraint(t,e),n))}function $T(t,e){mt.update(n=>(n.setConstraints(t,e),n))}function eh(t){t.type===ao.ADD_LOCAL_CONSTRAINT?fi(t.payload.id,t.payload.constraint):t.type===ao.REMOVE_LOCAL_CONSTRAINT?ki(t.payload.tool,t.payload.id):t.type===ao.REMOVE_LOCAL_CONSTRAINT_GROUP?TT(t.payload.tool):t.type===ao.RESTORE_LOCAL_CONSTRAINT_GROUP?$T(t.payload.tool,t.payload.constraints):t.type===ao.UPDATE_LOCAL_CONSTRAINT&&Xt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function $s(t,e){return{execute:()=>{eh(t)},unExecute:()=>{eh(e)}}}var FT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function $p(t){var e=FT();T(t,e)}var PT=ue('<button class="remove-button svelte-17rdl63"><!></button>');function HT(t,e){let n=U(e,"onTrash",8,()=>{});var r=PT(),i=V(r);$p(i),j(r),Ge("click",r,nr(function(...o){var a;(a=n())==null||a.apply(this,o)})),T(t,r)}var BT=ue('<input type="radio" class="radio-select-button svelte-3561wl">'),WT=ue('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function tl(t,e){var Q,ce;ae(e,!1);const n=Ve(),r=()=>me(an,"$toolStore",n),i=[];let o=U(e,"elementInfo",8),a=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=o().toolId,f=o().permanent??!1,v=((Q=o().menu)==null?void 0:Q.name)??o().toolId,g=!((ce=o().meta)!=null&&ce.categories.includes(x.GLOBAL_CONSTRAINT)),p=`label-${v}`;g&&a(()=>{Mr(u)});function m(){var Ee,ye;const Z=(Ee=o().meta)==null?void 0:Ee.description,ne=((ye=o().meta)==null?void 0:ye.usage)??dw(u);let pe;return Z&&Z.length&&(pe=Z),ne.length&&(pe?pe=pe+`

`+ne:pe=ne),pe}fe();var E=WT(),I=V(E);{var O=Z=>{var ne=BT();sn(ne),L(ne,"id",p),ne.value=(ne.__value=u)==null?"":u,ll(i,[],ne,()=>r(),pe=>Ls(an,pe)),T(Z,ne)};re(I,Z=>{g&&Z(O)})}var b=M(I,2);te(()=>L(b,"title",m())),L(b,"aria-labelledby",p);var A=V(b),k=V(A),G=V(k);{var H=Z=>{HT(Z,{get onTrash(){return c()}})};re(G,Z=>{f||Z(H)})}j(k);var $=M(k,2);L($,"for",p),$.textContent=v,j(A);var F=M(A,2),z=V(F);gt(z,e,"default",{}),j(F),j(b),j(E),te(()=>xt(E,"checked",u===r())),Ge("click",b,nr(function(...Z){var ne;(ne=a())==null||ne.apply(this,Z)})),T(t,E),le()}function Fp(t,e){ae(e,!1);const n=Ve(),r=()=>me(mt,"$localConstraintsStore",n);let i=U(e,"toolId",8),o=U(e,"elementHandlers",8);const a=()=>{RT(i());const u=r().get(i());if(!u)return;const f=MT(i()),v=UT(i(),u),g=$s(f,v);vn(g)};fe();var c=Qe(()=>Ti(i(),o()));tl(t,{get elementInfo(){return _(c)},onTrash:a}),le()}var zT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function YT(t){var e=zT();T(t,e)}var jT=ue('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function bl(t,e){let n=U(e,"isOpen",8,!0);var r=jT(),i=V(r);gt(i,e,"default",{}),j(r),te(()=>{L(r,"aria-expanded",n()),xt(r,"closed",!n())}),T(t,r)}var KT=ue('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function VT(t,e){ae(e,!1);const n=Ve(),r=()=>me(_o,"$svgRefStore",n),i=()=>me(mt,"$localConstraintsStore",n),o=()=>me(jt,"$currentConstraintStore",n),a=N();let c=U(e,"constraintId",8),u=U(e,"toolId",8);function f(){DT(c(),u()),r()&&r().focus()}function v(){const b=i().getConstraint(u(),c());if(!b)return;const A=Rd(c(),u()),k=xd(c(),b),G=$s(A,k);vn(G)}D(()=>o(),()=>{var b;y(a,(b=o())==null?void 0:b.id)}),Ie(),fe();var g=KT(),p=V(g),m=V(p);j(p);var E=M(p,2),I=V(E),O=V(I);$p(O),j(I),j(E),j(g),te(()=>{xt(g,"active",c()===_(a)),tt(m,`ID: ${c()??""}`)}),Ge("click",I,nr(v)),Ge("click",g,f),T(t,g),le()}var XT=ue('<div class="constraint-list svelte-w5npcu"></div>');function Pp(t,e){ae(e,!1);const n=Ve(),r=()=>me(mt,"$localConstraintsStore",n),i=()=>me(an,"$toolStore",n),o=N();let a=U(e,"toolId",8);D(()=>(r(),J(a())),()=>{y(o,r().get(a()))}),Ie(),fe();var c=Ae(),u=se(c);{var f=v=>{var g=Qe(()=>a()===i());bl(v,{get isOpen(){return _(g)},children:(p,m)=>{var E=XT();lt(E,5,()=>Object.entries(_(o)),I=>I[0],(I,O)=>{VT(I,{get constraintId(){return _(O)[0]},get toolId(){return a()}})}),j(E),T(p,E)},$$slots:{default:!0}})};re(u,v=>{_(o)&&Object.entries(_(o)).length&&v(f)})}T(t,c),le()}var qT=ue('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function ZT(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=qT(),o=V(i),a=V(o,!0);j(o);var c=M(o,2);j(i),te(()=>tt(a,n())),Ge("click",c,function(...u){var f;(f=r())==null||f.apply(this,u)}),T(t,i)}var QT=ue('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function zr(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),i=N();function o(){n(!1),_(i).close()}D(()=>(_(i),J(n())),()=>{_(i)&&n()&&_(i).showModal()}),D(()=>(_(i),J(n())),()=>{_(i)&&!n()&&_(i).close()}),Ie();var a=QT(),c=V(a),u=V(c);ZT(u,{get title(){return r()},closeCb:o});var f=M(u,2),v=V(f),g=V(v);gt(g,e,"default",{}),j(v),j(f),j(c),j(a),xi(a,p=>y(i,p),()=>_(i)),Ge("click",c,nr(function(p){Yb.call(this,e,p)})),Ge("close",a,()=>{n(!1)}),Ge("click",a,zb(nr(()=>_(i).close()))),T(t,a),le()}var JT=ue('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function e2(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=N(null);D(()=>(J(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),Ie();var o=JT(),a=M(V(o),2);sn(a),L(a,"spellcheck",!1),xi(a,c=>y(i,c),()=>_(i)),j(o),Jn(a,n),T(t,o),le()}var t2=ue('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function n2(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);zr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=t2(),u=V(c);e2(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(p){r(p)},$$legacy:!0});var f=M(u,2),v=V(f),g=V(v);gt(g,e,"default",{}),j(v),j(f),j(c),T(o,c)},$$slots:{default:!0},$$legacy:!0})}var r2=ue('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),i2=ue('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function oi(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var o=Ae(),a=se(o);{var c=f=>{var v=r2(),g=V(v),p=V(g),m=V(p,!0);j(p),j(g);var E=M(g,2),I=V(E);gt(I,e,"default",{}),j(E),j(v),te(()=>tt(m,n())),T(f,v)},u=f=>{var v=i2(),g=V(v),p=V(g),m=V(p,!0);j(p),j(g);var E=M(g,2),I=V(E);gt(I,e,"default",{});var O=M(I,2);j(E),j(v),te(()=>{tt(m,n()),xt(O,"open",r())}),Ge("click",v,()=>r(!r())),T(f,v)};re(a,f=>{i()?f(u,!1):f(c)})}T(t,o)}var o2=ue('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),s2=ue('<ol class="svelte-cd45on"></ol>'),a2=ue("<!> <!>",1);function l2(t,e){ae(e,!1);const n=N();let r=U(e,"category",8),i=U(e,"addTool",8),o=U(e,"searchResults",8),a=N(!0);D(()=>(J(o()),J(r())),()=>{y(n,o().filter(v=>{var g,p;return(p=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:p.includes(r())}))}),Ie(),fe();var c=Ae(),u=se(c);{var f=v=>{var g=a2(),p=se(g);oi(p,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(a)},set isOpen(E){y(a,E)},$$legacy:!0});var m=M(p,2);bl(m,{get isOpen(){return _(a)},children:(E,I)=>{var O=s2();lt(O,5,()=>_(n),Ot,(b,A)=>{let k=()=>_(A).key,G=()=>_(A).info;var H=o2(),$=V(H),F=V($,!0);j($),j(H),te(()=>{var z;L($,"title",(z=G().meta)==null?void 0:z.description),tt(F,k())}),Ge("click",$,()=>{i()(k())}),T(b,H)}),j(O),T(E,O)},$$slots:{default:!0}}),T(v,g)};re(u,v=>{_(n).length&&v(f)})}T(t,c),le()}function c2(t,e){ae(e,!1);const n=N();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),o=U(e,"categories",8),a=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);D(()=>(J(r()),J(a()),J(c())),()=>{y(n,LR(r(),a(),c()))}),Ie(),fe();var u=Ae(),f=se(u);lt(f,1,o,Ot,(v,g)=>{l2(v,{get category(){return _(g)},get searchResults(){return _(n)},get addTool(){return i()}})}),T(t,u),le()}var u2=ue('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function wl(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=u2();L(i,"tabindex",0);var o=V(i),a=V(o);gt(a,e,"add-button",{}),j(o);var c=M(o,2),u=V(c),f=V(u);gt(f,e,"title-icon",{}),j(u);var v=M(u);j(c);var g=M(c,2),p=V(g);j(g),j(i),te(()=>{tt(v,` ${r()??""}`),xt(p,"open",n())}),Ge("click",i,()=>n(!n())),Ge("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),T(t,i)}var d2=ue('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function _2(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function o(){i(!i())}wl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=d2();Ge("click",u,nr(()=>o())),T(a,u)},"title-icon":(a,c)=>{var u=Ae(),f=se(u);gt(f,e,"title-icon",{}),T(a,u)}},$$legacy:!0})}var f2=ue('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),g2=ue('<div class="panel-container svelte-hixu4"><!> <!></div>');function yl(t,e){let n=U(e,"isOpen",8,!0);var r=g2(),i=V(r);gt(i,e,"panel-header",{});var o=M(i,2);bl(o,{get isOpen(){return n()},children:(a,c)=>{var u=f2(),f=V(u);gt(f,e,"panel-content",{}),j(u),T(a,u)},$$slots:{default:!0}}),j(r),T(t,r)}var h2=ue("<!> <!>",1);function Td(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),o=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),c=N(!0),u=N(!1),f=N("");const v=g=>{y(u,!1),y(c,!0),i()(g)};fe(),yl(t,{get isOpen(){return _(c)},set isOpen(g){y(c,g)},$$slots:{"panel-header":(g,p)=>{var m=h2(),E=se(m);_2(E,{get title(){return r()},get isOpen(){return _(c)},set isOpen(O){y(c,O)},get showModal(){return _(u)},set showModal(O){y(u,O)},$$slots:{"title-icon":(O,b)=>{var A=Ae(),k=se(A);gt(k,e,"title-icon",{}),T(O,A)}},$$legacy:!0});var I=M(E,2);n2(I,{get title(){return r()},get showModal(){return _(u)},set showModal(O){y(u,O)},get searchPattern(){return _(f)},set searchPattern(O){y(f,O)},children:(O,b)=>{c2(O,{get searchPattern(){return _(f)},get categories(){return n()},get filterFunc(){return o()},addTool:v,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),T(g,m)},"panel-content":(g,p)=>{var m=Ae(),E=se(m);gt(E,e,"panel-content",{}),T(g,m)}},$$legacy:!0}),le()}var p2=ue("<!> <!>",1);function v2(t,e){ae(e,!1);const n=Ve(),r=()=>me(mt,"$localConstraintsStore",n),i=N();let o=U(e,"elementHandlers",8);const a=[x.COSMETIC_TOOL],c=u=>{Up(u),Mr(u)};D(()=>(r(),x),()=>{y(i,(u,f)=>{var p;const v=r().has(u);return!!((p=f.meta)!=null&&p.categories.includes(x.COSMETIC_TOOL))&&!v})}),Ie(),fe(),Td(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{YT(u)},"panel-content":(u,f)=>{var v=Ae(),g=se(v);lt(g,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let E=()=>_(m)[0];var I=Ae(),O=se(I);{var b=A=>{var k=p2(),G=se(k);Fp(G,{get toolId(){return E()},get elementHandlers(){return o()}});var H=M(G,2);Pp(H,{get toolId(){return E()}}),T(A,k)};re(O,A=>{qb(E())&&A(b)})}T(p,I)}),T(u,v)}}}),le()}var Hp=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Hp||{});const Fa=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Bp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function m2(t,e){Wr.update(n=>n.setConstraint(t,e))}function E2(t){Wr.update(e=>e.removeConstraint(t))}function th(t){t.type===Hp.REMOVE_GLOBAL_CONSTRAINT?E2(t.payload):m2(t.payload.tool,t.payload.value)}function Fu(t,e){return{execute:()=>{th(t)},unExecute:()=>{th(e)}}}var C2=ue('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function O2(t,e){let n=U(e,"value",8,!1);var r=C2(),i=V(r);sn(i),j(r),te(()=>wh(i,n())),T(t,r)}function I2(t,e){ae(e,!1);let n=U(e,"toolId",8),r=U(e,"value",8,!1),i=U(e,"elementHandlers",8);const o=()=>{const u=Fa(n(),!r()),f=Fa(n(),r()),v=Fu(u,f);vn(v)},a=()=>{const u=Bp(n()),f=Fa(n(),r()),v=Fu(u,f);vn(v)};fe();var c=Qe(()=>Ti(n(),i()));tl(t,{get elementInfo(){return _(c)},onClick:o,onTrash:a,children:(u,f)=>{O2(u,{get value(){return r()}})},$$slots:{default:!0}}),le()}var b2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function w2(t){var e=b2();T(t,e)}function y2(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wr,"$globalConstraintsStore",n),i=N();let o=U(e,"elementHandlers",8);const a=Qb,c=u=>{const f=Fa(u,!0),v=Bp(u),g=Fu(f,v);vn(g)};D(()=>r(),()=>{y(i,(u,f)=>{var p;const v=!!((p=f.meta)!=null&&p.categories.includes(x.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Ie(),fe(),Td(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{w2(u)},"panel-content":(u,f)=>{var v=Ae(),g=se(v);lt(g,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let E=()=>_(m)[0],I=()=>_(m)[1];I2(p,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return o()}})}),T(u,v)}}}),le()}var L2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function A2(t){var e=L2();T(t,e)}var S2=ue("<!> <!>",1),N2=ue("<!> <!> <!>",1);function x2(t,e){ae(e,!1);const n=Ve(),r=()=>me(mt,"$localConstraintsStore",n),i=N();let o=U(e,"elementHandlers",8);const a=Zb,c=u=>{Up(u),Mr(u)};D(()=>(r(),x),()=>{y(i,(u,f)=>{var p;const v=r().has(u);return!!((p=f.meta)!=null&&p.categories.includes(x.LOCAL_CONSTRAINT))&&!v})}),Ie(),fe(),Td(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{A2(u)},"panel-content":(u,f)=>{var v=N2(),g=se(v),p=Qe(()=>Ti(d.GIVEN,o()));tl(g,{get elementInfo(){return _(p)}});var m=M(g,2),E=Qe(()=>Ti(d.REGIONS,o()));tl(m,{get elementInfo(){return _(E)}});var I=M(m,2);lt(I,1,()=>r().entries(),([O,b])=>O,(O,b)=>{let A=()=>_(b)[0];var k=Ae(),G=se(k);{var H=$=>{var F=S2(),z=se(F);Fp(z,{get toolId(){return A()},get elementHandlers(){return o()}});var Q=M(z,2);Pp(Q,{get toolId(){return A()}}),T($,F)};re(G,$=>{Kb(A())&&$(H)})}T(O,k)}),T(u,v)}}}),le()}var R2=ue('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function uu(t,e){ae(e,!1);const n=N();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),o=N(void 0);function a(m){const E=au(m);E&&i()&&i()(E)}D(()=>J(r()),()=>{y(n,r())}),D(()=>(_(n),au),()=>{Gu(_(n))&&y(o,au(_(n)))}),Ie(),fe();var c=R2(),u=V(c);const f=Qe(()=>Lp(_(n)));var v=V(u);sn(v),j(u);var g=M(u,2),p=M(V(g),2);sn(p),L(p,"spellcheck",!1),L(p,"maxlength",30),j(g),j(c),te(()=>{L(u,"style",`--choosen-color: ${_(o)??""}`),xt(u,"transparent",_(f))}),Jn(v,()=>_(n),m=>y(n,m)),Ge("change",v,()=>a(_(n))),Jn(p,()=>_(n),m=>y(n,m)),Ge("input",p,()=>a(_(n))),T(t,c),le()}var T2=ue('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function fs(t,e){let n=U(e,"name",8);var r=T2(),i=V(r),o=V(i,!0);j(i);var a=M(i,2);gt(a,e,"default",{}),j(r),te(()=>tt(o,n())),T(t,r)}var D2=ue('<input class="control-slider svelte-1rsuho6" type="range">');function k2(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),o=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);fe();var u=D2();sn(u),te(()=>{L(u,"min",n()),L(u,"max",r()),L(u,"step",o())}),Jn(u,i),Ge("change",u,()=>{a()&&a()(i())}),Ge("input",u,()=>{c()&&c()(i())}),T(t,u),le()}function ri(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),o=U(e,"max",8),a=U(e,"step",24,()=>(o()-i())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fs(t,{get name(){return`${n()??""}: ${r()??""}`},children:(f,v)=>{k2(f,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var G2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function M2(t){var e=G2();T(t,e)}var U2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function $2(t){var e=U2();T(t,e)}var F2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function P2(t){var e=F2();T(t,e)}var H2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function B2(t){var e=H2();T(t,e)}var W2=ue('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function z2(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),o=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);fe();var c=W2(),u=V(c);sn(u);var f,v=M(u,2);gt(v,e,"default",{}),j(c),te(()=>{L(c,"title",o()),xt(c,"active",r()===i()),f!==(f=r())&&(u.value=(u.__value=r())==null?"":r())}),ll(n,[],u,()=>(r(),i()),i),Ge("change",u,()=>a()&&a()(r())),T(t,c),le()}var Y2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function j2(t){var e=Y2(),n=V(e);L(n,"cx",480),L(n,"cy",-480),L(n,"rx",480),L(n,"ry",300),j(e),T(t,e)}var K2=ue('<div class="icon-wrapper svelte-18euf14"><!></div>'),V2=ue('<div class="radio-container svelte-18euf14"></div>');function X2(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),o=U(e,"updateShapeCb",8,void 0);const a=new Map([[B.CIRCLE,P2],[B.ELLIPSE,j2],[B.SQUARE,$2],[B.RECTANGLE,M2],[B.POLYGON,B2]]);fe(),fs(t,{get name(){return n()},children:(c,u)=>{var f=V2();lt(f,5,i,Ot,(v,g)=>{z2(v,{get title(){return _(g)},get value(){return _(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(p,m)=>{var E=Ae(),I=se(E);{var O=b=>{var A=K2(),k=V(A);Lh(k,()=>a.get(_(g)),(G,H)=>{H(G,{})}),j(A),T(b,A)};re(I,b=>{a.has(_(g))&&b(O)})}T(p,E)},$$slots:{default:!0}})}),j(f),T(c,f)},$$slots:{default:!0}}),le()}var q2=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function Z2(t){var e=q2();T(t,e)}var Q2=ue('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),J2=ue("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function eD(t,e){ae(e,!1);const n=Ve(),r=()=>me(an,"$toolStore",n),i=()=>me(jt,"$currentConstraintStore",n),o=N(),a=N(),c=N();let u=N(!0),f=U(e,"elementHandlers",8);function v(O,b){const A=(O==null?void 0:O.shape)??(b?bu(b):void 0);return cu(A),A}function g(O,b){_(c)&&(Ab(c,_(c)[O]=b),cu(_(c)))}function p(){_(a)&&(y(c,bu(_(a))),cu(_(c)))}function m(O){return O&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function E(O){return O&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function I(O){return O&&[B.ELLIPSE,B.RECTANGLE].includes(O)}D(()=>(r(),J(f())),()=>{y(o,Ti(r(),f()))}),D(()=>_(o),()=>{y(a,_(o).shape)}),D(()=>(i(),_(a)),()=>{var O;y(c,v(((O=i())==null?void 0:O.constraint)??null,_(a)))}),Ie(),fe(),yl(t,{get isOpen(){return _(u)},set isOpen(O){y(u,O)},$$slots:{"panel-header":(O,b)=>{wl(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(A){y(u,A)},$$slots:{"title-icon":(A,k)=>{Z2(A)}},$$legacy:!0})},"panel-content":(O,b)=>{var A=Ae(),k=se(A);{var G=H=>{var $=J2(),F=se($);{var z=Fe=>{var be=Q2();Ge("click",be,p),T(Fe,be)};re(F,Fe=>{Jb(_(a))&&Fe(z)})}var Q=M(F,2);{var ce=Fe=>{X2(Fe,{get possibleShapes(){return _(a).allowedTypes},name:"Shape",get selectedShape(){return _(c).type},updateShapeCb:be=>g("type",be)})};re(Q,Fe=>{var be;_(a).allowedTypes&&_(a).allowedTypes.length&&((be=_(c))!=null&&be.type)&&Fe(ce)})}var Z=M(Q,2);{var ne=Fe=>{var be=Qe(()=>_(a).n.lb??3),De=Qe(()=>_(a).n.ub??10);ri(Fe,{name:"Number of Sides",get value(){return _(c).n},get min(){return _(be)},get max(){return _(De)},step:1,onChangeCb:Me=>g("n",Me)})};re(Z,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.n)!==void 0&&((Me=(De=_(a))==null?void 0:De.n)!=null&&Me.editable)&&E(_(c).type)&&Fe(ne)})}var pe=M(Z,2);{var Ee=Fe=>{var be=Qe(()=>_(a).r.lb??0),De=Qe(()=>_(a).r.ub??1),Me=Qe(()=>_(a).r.step??.05);ri(Fe,{name:"Radius",get value(){return _(c).r},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("r",St)})};re(pe,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.r)!==void 0&&((Me=(De=_(a))==null?void 0:De.r)!=null&&Me.editable)&&m(_(c).type)&&Fe(Ee)})}var ye=M(pe,2);{var Re=Fe=>{var be=Qe(()=>_(a).width.lb??0),De=Qe(()=>_(a).width.ub??1),Me=Qe(()=>_(a).width.step??.05);ri(Fe,{name:"Width",get value(){return _(c).width},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("width",St)})};re(ye,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.width)!==void 0&&((Me=(De=_(a))==null?void 0:De.width)!=null&&Me.editable)&&I(_(c).type)&&Fe(Re)})}var Ue=M(ye,2);{var xe=Fe=>{var be=Qe(()=>_(a).height.lb??0),De=Qe(()=>_(a).height.ub??1),Me=Qe(()=>_(a).height.step??.05);ri(Fe,{name:"Height",get value(){return _(c).height},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("height",St)})};re(Ue,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.height)!==void 0&&((Me=(De=_(a))==null?void 0:De.height)!=null&&Me.editable)&&I(_(c).type)&&Fe(xe)})}var Ce=M(Ue,2);{var rt=Fe=>{var be=Qe(()=>_(a).angle.lb??0),De=Qe(()=>_(a).angle.ub??360),Me=Qe(()=>_(a).angle.step??15);ri(Fe,{name:"Angle",get value(){return _(c).angle},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("angle",St)})};re(Ce,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.angle)!==void 0&&((Me=(De=_(a))==null?void 0:De.angle)!=null&&Me.editable)&&Fe(rt)})}var $e=M(Ce,2);{var At=Fe=>{var be=Qe(()=>_(a).inset.lb??0),De=Qe(()=>_(a).inset.ub??.5),Me=Qe(()=>_(a).inset.step??.01);ri(Fe,{name:"Inset",get value(){return _(c).inset},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("inset",St)})};re($e,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.inset)!==void 0&&((Me=(De=_(a))==null?void 0:De.inset)!=null&&Me.editable)&&Fe(At)})}var Tt=M($e,2);{var ln=Fe=>{fs(Fe,{name:"Stroke",children:(be,De)=>{uu(be,{get value(){return _(c).stroke},onChangeCb:Me=>g("stroke",Me)})},$$slots:{default:!0}})};re(Tt,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.stroke)!==void 0&&((Me=(De=_(a))==null?void 0:De.stroke)!=null&&Me.editable)&&Fe(ln)})}var Dt=M(Tt,2);{var Mt=Fe=>{var be=Qe(()=>_(a).strokeWidth.lb??0),De=Qe(()=>_(a).strokeWidth.ub??.8),Me=Qe(()=>_(a).strokeWidth.step??.01);ri(Fe,{name:"Stroke Width",get value(){return _(c).strokeWidth},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("strokeWidth",St)})};re(Dt,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.strokeWidth)!==void 0&&((Me=(De=_(a))==null?void 0:De.strokeWidth)!=null&&Me.editable)&&Fe(Mt)})}var Ir=M(Dt,2);{var Zt=Fe=>{var be=Qe(()=>_(a).strokeDasharray.lb??0),De=Qe(()=>_(a).strokeDasharray.ub??1),Me=Qe(()=>_(a).strokeDasharray.step??.01);ri(Fe,{name:"Stroke Dasharray",get value(){return _(c).strokeDasharray},get min(){return _(be)},get max(){return _(De)},get step(){return _(Me)},onChangeCb:St=>g("strokeDasharray",St)})};re(Ir,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.strokeDasharray)!==void 0&&((Me=(De=_(a))==null?void 0:De.strokeDasharray)!=null&&Me.editable)&&Fe(Zt)})}var ir=M(Ir,2);{var Bi=Fe=>{fs(Fe,{name:"Fill",children:(be,De)=>{uu(be,{get value(){return _(c).fill},onChangeCb:Me=>g("fill",Me)})},$$slots:{default:!0}})};re(ir,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.fill)!==void 0&&((Me=(De=_(a))==null?void 0:De.fill)!=null&&Me.editable)&&Fe(Bi)})}var br=M(ir,2);{var wr=Fe=>{fs(Fe,{name:"Font Color",children:(be,De)=>{uu(be,{get value(){return _(c).fontColor},onChangeCb:Me=>g("fontColor",Me)})},$$slots:{default:!0}})};re(br,Fe=>{var be,De,Me;((be=_(c))==null?void 0:be.fontColor)!==void 0&&((Me=(De=_(a))==null?void 0:De.fontColor)!=null&&Me.editable)&&Fe(wr)})}T(H,$)};re(k,H=>{_(a)&&H(G)})}T(O,A)}},$$legacy:!0}),le()}var tD=ue('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Fs(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=tD(),o=V(i),a=V(o);gt(a,e,"default",{}),j(o),j(i),te(()=>L(i,"title",r())),Ge("click",i,nr(function(...c){var u;(u=n())==null||u.apply(this,c)})),T(t,i)}var nD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function rD(t){var e=nD();T(t,e)}var iD=ue('<div class="buttons-container svelte-kc00rw"><!></div>');function Ll(t,e){var n=iD(),r=V(n);gt(r,e,"default",{}),j(n),T(t,n)}var oD=ue('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),sD=ue('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),aD=ue('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function lD(t,e){ae(e,!1);const n=Ve(),r=()=>me(Br,"$puzzleMetaStore",n),i=()=>me(Wr,"$globalConstraintsStore",n),o=()=>me(mt,"$localConstraintsStore",n);let a=U(e,"showModal",12,!1),c=N(""),u=N(""),f=N(""),v=N(""),g=N("");function p(){a(!1)}function m(){const b=_(u)?E(_(u)):["Anonymous"],k={title:_(c)?_(c):"Sudoku",authors:b,ruleset:_(f),ctcYoutubeUrl:_(v),ctcUrl:_(g)};NT(k),a(!1)}function E(b){return b.split(/\s*[;]\s*/)}function I(){var $,F,z,Q;let b="";const A=yt,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[ce,Z]of k.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&Z){const ne=A[ce],pe=(($=ne.menu)==null?void 0:$.name)??ne.toolId,Ee=(F=ne.meta)==null?void 0:F.description;b+=`**${pe}**: ${Ee}

`}const H=o();for(const[ce,Z]of H.entries())if(Object.keys(Z).length>0){const pe=A[ce],Ee=((z=pe.menu)==null?void 0:z.name)??pe.toolId,ye=(Q=pe.meta)==null?void 0:Q.description;b+=`**${Ee}**: ${ye}

`}return b.trim()}function O(){const b=I();y(f,b)}D(()=>(J(a()),r(),qa),()=>{if(!a()){const b=r().authors;y(c,r().title??""),y(u,b?qa(b,"; ","; "):""),y(f,r().ruleset??""),y(v,r().ctcYoutubeUrl??""),y(g,r().ctcUrl??"")}}),Ie(),fe(),zr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(b){a(b)},children:(b,A)=>{var k=aD(),G=V(k);oi(G,{title:"Title"});var H=M(G,2);sn(H);var $=M(H,2);oi($,{title:"Authors"});var F=M($,2);sn(F);var z=M(F,2);oi(z,{title:"Ruleset",children:(ye,Re)=>{var Ue=oD();Ge("click",Ue,O),T(ye,Ue)},$$slots:{default:!0}});var Q=M(z,2);fb(Q),L(Q,"rows",8);var ce=M(Q,2);oi(ce,{title:"CTC Link"});var Z=M(ce,2);sn(Z);var ne=M(Z,2);oi(ne,{title:"CTC Youtube Link"});var pe=M(ne,2);sn(pe);var Ee=M(pe,2);Ll(Ee,{children:(ye,Re)=>{var Ue=sD(),xe=se(Ue),Ce=M(xe,2);Ge("click",xe,m),Ge("click",Ce,p),T(ye,Ue)},$$slots:{default:!0}}),j(k),Jn(H,()=>_(c),ye=>y(c,ye)),Jn(F,()=>_(u),ye=>y(u,ye)),Jn(Q,()=>_(f),ye=>y(f,ye)),Jn(Z,()=>_(g),ye=>y(g,ye)),Jn(pe,()=>_(v),ye=>y(v,ye)),T(b,k)},$$slots:{default:!0},$$legacy:!0}),le()}var cD=ue("<!> <!>",1);function uD(t){let e=N(!1);function n(){y(e,!0)}var r=cD(),i=se(r);Fs(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{rD(a)},$$slots:{default:!0}});var o=M(i,2);lD(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var dD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function _D(t){var e=dD();T(t,e)}var fD=ue('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function gD(t,e){ae(e,!1);let n=N(null),r=N(null);function i(){var o;(o=_(n))==null||o.click()}D(()=>(_(r),el),()=>{if(_(r)&&_(r).length){const o=_(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const f=JSON.parse(u),v=fT(f);console.log(v),GT(v),el()}},a.onerror=function(){alert(a.error)}}}),Ie(),fe(),Fs(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=fD(),u=se(c);_D(u);var f=M(u,2);xi(f,v=>y(n,v),()=>_(n)),Wb(f,()=>_(r),v=>y(r,v)),T(o,c)},$$slots:{default:!0}}),le()}var hD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function pD(t){var e=hD();T(t,e)}var vD=ue('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function nh(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),o=U(e,"value",12),a=U(e,"step",24,()=>(i()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fe();var f=vD(),v=V(f),g=V(v);j(v);var p=M(v,2);sn(p),j(f),te(()=>{tt(g,`${n()??""}: ${o()??""}`),L(p,"min",r()),L(p,"max",i()),L(p,"step",a())}),Jn(p,o),Ge("change",p,()=>{c()&&c()(o())}),Ge("input",p,()=>{u()&&u()(o())}),T(t,f),le()}var mD=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),ED=ue('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function CD(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let o=N(9),a=N(9),c=N(""),u=N(Lt.range(1,10));function f(){n(!1)}function v(){el(),kT(_(a),_(o),_(u).sort()),n(!1)}function g(E){return E.map(O=>String(O)).join(",")}function p(){const E=Math.min(Math.max(_(a),_(o)),9);y(u,Lt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&y(u,E.replaceAll(" ","").split(",").map(Number))}fe(),zr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var O=ED(),b=V(O);nh(b,{name:"Width",min:r,max:i,step:1,onInputCb:p,get value(){return _(o)},set value(F){y(o,F)},$$legacy:!0});var A=M(b,2);nh(A,{name:"Height",min:r,max:i,step:1,onInputCb:p,get value(){return _(a)},set value(F){y(a,F)},$$legacy:!0});var k=M(A,2),G=Qe(()=>`Allowed Digits (for the solver): ${g(_(u))}`);oi(k,{get title(){return _(G)}});var H=M(k,2);sn(H),te(()=>L(H,"placeholder",g(_(u))));var $=M(H,2);Ll($,{children:(F,z)=>{var Q=mD(),ce=se(Q),Z=M(ce,2);Ge("click",ce,v),Ge("click",Z,f),T(F,Q)},$$slots:{default:!0}}),j(O),Jn(H,()=>_(c),F=>y(c,F)),Ge("input",H,()=>m(_(c))),T(E,O)},$$slots:{default:!0},$$legacy:!0}),le()}var OD=ue("<!> <!>",1);function ID(t){let e=N(!1);function n(){y(e,!0)}var r=OD(),i=se(r);Fs(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{pD(a)},$$slots:{default:!0}});var o=M(i,2);CD(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var bD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function wD(t){var e=bD();T(t,e)}var yD=ue('<button class="modal-button">Cancel</button>'),LD=ue('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function AD(t,e){ae(e,!1);const n=Ve(),r=()=>me(_o,"$svgRefStore",n),i=()=>me(Br,"$puzzleMetaStore",n),o=()=>me(Us,"$puzzleStore",n),a=N();let c=U(e,"showModal",12,!1);function u(O){const b=getComputedStyle(O);let A="";for(let k of b){const G=b.getPropertyValue(k);G&&(A+=`${k}:${G};`)}return A}function f(O){const b=O.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(O));const A=O.childNodes;for(let k=0;k<A.length;k++){const G=A[k];if(G instanceof Element){const H=f(G);b.replaceChild(H,b.childNodes[k])}}return b}function v(O){if(!O)return;const b=f(O),A=Za(i()),G=new XMLSerializer().serializeToString(b),H=new Image,$=new Blob([G],{type:"image/svg+xml;charset=utf-8"}),F=URL.createObjectURL($);H.onload=()=>{const z=O.getBoundingClientRect(),Q=z.width,ce=z.height,Z=document.createElement("canvas"),ne=window.devicePixelRatio||1;Z.width=Q*ne,Z.height=ce*ne;const pe=Z.getContext("2d");pe&&(pe.scale(ne,ne),pe.drawImage(H,0,0,Q,ce),Z.toBlob(Ee=>{if(!Ee)return;const ye=URL.createObjectURL(Ee),Re=document.createElement("a");Re.href=ye,Re.download=A,Re.click(),URL.revokeObjectURL(ye)}))},H.src=F}function g(O,b="download.svg"){if(!O)return;const A=f(O);let G=new XMLSerializer().serializeToString(A);G.includes("<?xml")||(G=`<?xml version="1.0" standalone="no"?>\r
`+G);const H=new Blob([G],{type:"image/svg+xml"}),$=URL.createObjectURL(H),F=document.createElement("a");F.href=$,F.download=b,F.click(),URL.revokeObjectURL($)}const p=O=>{const b=_T(o());return JSON.stringify(b,null,O)},m=()=>{function O(k,G,H){var $=document.createElement("a"),F=new Blob([k],{type:H});$.href=URL.createObjectURL(F),$.download=G,$.click(),URL.revokeObjectURL($.href)}const b=p(2),A=Za(i());O(b,`${A}.json`,"text/plain")};function E(){c(!1)}const I=1;D(()=>r(),()=>{y(a,r())}),Ie(),fe(),zr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(O){c(O)},children:(O,b)=>{var A=LD(),k=V(A),G=V(k),H=V(G),$=M(H,2),F=M($,2);j(G);var z=M(G,2),Q=M(V(z),2),ce=V(Q);L(ce,"width",400*I),L(ce,"height",300*I),j(Q),j(z),j(k);var Z=M(k,2);Ll(Z,{children:(ne,pe)=>{var Ee=yD();Ge("click",Ee,E),T(ne,Ee)},$$slots:{default:!0}}),j(A),Ge("click",H,m),Ge("click",$,()=>v(_(a))),Ge("click",F,()=>g(_(a))),T(O,A)},$$slots:{default:!0},$$legacy:!0}),le()}var SD=ue("<!> <!>",1);function ND(t){let e=N(!1);function n(){y(e,!0)}var r=SD(),i=se(r);Fs(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{wD(a)},$$slots:{default:!0}});var o=M(i,2);AD(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var xD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Wp(t){var e=xD();T(t,e)}var RD=ue('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),TD=ue('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Ua(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var i=TD(),o=V(i);oi(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=M(o,2);bl(a,{get isOpen(){return r()},children:(c,u)=>{var f=RD(),v=V(f);gt(v,e,"default",{}),j(f),T(c,f)},$$slots:{default:!0}}),j(i),T(t,i)}var DD=ue('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function kD(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var o=DD(),a=V(o);sn(a),Ni(2),j(o),te(()=>{xt(o,"disabled",i()),wh(a,n()),a.disabled=i()}),Ge("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,o)}var GD=ue('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function ii(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),o=U(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}fe();var c=GD(),u=V(c);kD(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var f=M(u,2),v=V(f,!0);j(f),j(c),te(()=>{xt(c,"disabled",o()),tt(v,r())}),Ge("click",f,nr(a)),T(t,c),le()}var MD=ue("<!> <!>",1),UD=ue("<!> <!> <!>",1),$D=ue("<!> <!>",1),FD=ue('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function zp(t,e){ae(e,!1);const n=Ve(),r=()=>me(ci,"$settingsStore",n),i=()=>me(Cl,"$gameModeStore",n),o=N();let a=U(e,"showModal",12,!1);D(()=>r(),()=>{y(o,r())}),Ie(),fe(),zr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var f=FD(),v=V(f);Ua(v,{title:"General",children:(I,O)=>{ii(I,{get value(){return _(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Sb})},$$slots:{default:!0}});var g=M(v,2);Ua(g,{title:"Tools",children:(I,O)=>{var b=MD(),A=se(b);ii(A,{get value(){return _(o).penToolActive},name:"Pen Tool",updateCb:Nb});var k=M(A,2);ii(k,{disabled:!0,get value(){return _(o).letterToolActive},name:"Letter Tool",updateCb:xb}),T(I,b)},$$slots:{default:!0}});var p=M(g,2);Ua(p,{title:"Gameplay",children:(I,O)=>{var b=UD(),A=se(b);ii(A,{name:"Check Conflicts",get value(){return _(o).checkConflicts},updateCb:Rb});var k=M(A,2);ii(k,{name:"Highlight Pencilmark Conflicts",get value(){return _(o).highlightPencilmarkConflicts},updateCb:Tb});var G=M(k,2);ii(G,{name:"Highlight Cells Seen By Selection",get value(){return _(o).highlightCellsSeenBySelection},updateCb:Db}),T(I,b)},$$slots:{default:!0}});var m=M(p,2);{var E=I=>{Ua(I,{title:"Setting Mode Display",children:(O,b)=>{var A=$D(),k=se(A);ii(k,{name:"Hide Fog",get value(){return _(o).hideFog},updateCb:kb});var G=M(k,2);ii(G,{name:"Show Solution",get value(){return _(o).showSolution},updateCb:Gb}),T(O,A)},$$slots:{default:!0}})};re(m,I=>{i()===vo.SETTING&&I(E)})}j(f),T(c,f)},$$slots:{default:!0},$$legacy:!0}),le()}var PD=ue("<!> <!>",1);function HD(t){let e=N(!1);function n(){y(e,!0)}var r=PD(),i=se(r);Fs(i,{title:"Settings",clickCb:n,children:(a,c)=>{Wp(a)},$$slots:{default:!0}});var o=M(i,2);zp(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var BD=ue('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function WD(t){var e=BD(),n=V(e);ID(n);var r=M(n,2);ND(r);var i=M(r,2);gD(i,{});var o=M(i,2);uD(o);var a=M(o,2);HD(a),j(e),T(t,e)}var zD=ue('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function YD(t,e){ae(e,!1);let n=N(!1);function r(){const i=st(yn),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const f=i.getCell(a,u);if(!f)continue;const v=f.value;c.push(v)}o.push(c)}Nd(o)}fe(),yl(t,{get isOpen(){return _(n)},set isOpen(i){y(n,i)},$$slots:{"panel-header":(i,o)=>{wl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(a){y(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=zD();Ge("click",a,r),T(i,a)}},$$legacy:!0}),le()}const jD={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function KD(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function VD(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function XD(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function qD(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Yp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function ZD(t,e){const n=VD(t);if(n)return{type:"number",parsed:parseInt(n)};const r=XD(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=qD(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=KD(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=Yp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var K=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(K||{});function _t(t,e){return`${e}[${t.r},${t.c}]`}function $i(t,e){return t.map(r=>_t(r,e))}function Oe(t,e){return"["+$i(t,e).join(",")+"]"}function we(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ct(t){return t.map(n=>we(n))}function Ai(t){return`constraint alldifferent([${t.join(",")}]);
`}function dt(t,e){return t&&(t=`
% ${e}
`+t),t}function Al(t,e){const n=[Pe.N,Pe.S,Pe.W,Pe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function Dd(t,e,n=void 0){n||(n=[Pe.N,Pe.S,Pe.W,Pe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+ct(o).join(",")+"]";r.push(a)}return r}function Sl(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class QD{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=jD){const i=ZD(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],f=c.lower_bound[1];o+=`constraint ${n} ${f} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],f=c.upper_bound[1];o+=`constraint ${n} ${f} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const f of c){const v=parseInt(f);Number.isNaN(v)&&!this.hasVariable(f)&&(o+=`var int: ${f};
`,this.addVariable(f))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function JD(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,f=0,v=0;for(let b=0;b<e.length;b++){const A=e[b].trim(),k=A.match(r),G=A.match(i),H=A.match(o),$=A.match(a);if(!c&&(k||G||H||$)){c={name:(k||G||H||$)[1],startLine:b,content:[e[b]],type:k?"function":G?"predicate":H?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,f=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,v=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[b]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,f+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,v+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&f===0&&v===0&&A.endsWith(";"))){n[c.name]={...c,endLine:b};let F=c.startLine;for(;F>0&&e[F-1].trim().startsWith("%");)F-=1;n[c.name].startLine=F,c=null}}function g(b){const A=[],k=b.match(r),G=b.match(i),H=b.match(o);for(const $ of Object.keys(n)){const F=n[$].type;if(F==="function"||F==="test"||F==="predicate"){if(k||G||H)continue;new RegExp(`\\b${$}\\s*\\(`,"g").test(b)&&A.push($)}else if(F==="variable"){const z=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${$}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(b.match(z))continue;new RegExp(`\\b${$}\\b`,"g").test(b)&&A.push($)}}return A}const p=new Set;for(const b of e)g(b).forEach(k=>p.add(k));console.log("usedDefinitions",p);const m=Object.values(n).filter(b=>!p.has(b.name)).map(b=>({start:b.startLine,end:b.endLine}));m.sort((b,A)=>A.start-b.start);const E=[...e];for(const b of m)E.splice(b.start,b.end-b.start+1);const I=[];let O=!1;for(const b of E)b.trim()===""?O||(I.push(b),O=!0):(I.push(b),O=!1);return I.join(`
`)}function rh(t){let e=t,n=e.length;for(;e=JD(e),e.length!=n;)n=e.length;return e}function jp(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function ek(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let f=0;f<e.nCols;f++){const v=e.getCell(c,f);!v||v.region===null?u.push(r-1):u.push(v.region)}o.push(u)}const a=jp(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function kd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function zt(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function tk(t,e){const r=t.grid.getPositiveDiagonal(),i=ct(r);let o=Ai(i);return o=`
% Positive Diagonal Constraint
`+o,o}function nk(t,e){const r=t.grid.getNegativeDiagonal(),i=ct(r);let o=Ai(i);return o=`
% Negative Diagonal Constraint
`+o,o}function rk(t,e){const r=t.grid.getPositiveDiagonal(),o="["+ct(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function ik(t,e){const r=t.grid.getNegativeDiagonal(),o="["+ct(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function ok(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,f),p=n.getCell(u,f+(u-v));if(!g||!p)continue;const m=we(g),E=we(p),O=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=O}}return o}function sk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,f),p=n.getCell(u,f-(u-v));if(!g||!p)continue;const m=we(g),E=we(p),O=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=O}}return o}function ak(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),f=`constraint alldifferent(${`[${ct(a).join(",")}]`});
`;r+=f}return r}function lk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=we(i),f=`[${ct(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${f});
`;r+=v}return r}function ck(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=we(i),f=`[${ct(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${f});
`;r+=v}return r}function uk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=dt(n,`${e}`),n}function dk(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=dt(n,`${e}`),n}function _k(t,e){let n="";return n+=`constraint tango_p(board);
`,n=dt(n,`${e}`),n}function fk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=dt(n,`${e}`),n}function*Yr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function gk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Yr(n)){const a=we(i),c=we(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function hk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Yr(n)){const a=we(i),c=we(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function pk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${ct(o).join(",")}]`,u=i.c+1,f=`constraint indexing_column_p(${c}, ${u});
`;r+=f}return r}function vk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function mk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function Ek(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=dt(n,`${e}`),n}function du(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,f=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&o.push(f)}let a="";for(const[c,u]of Yr(n)){if(o.find(p=>p.has(c)&&p.has(u)))continue;const v=we(c),g=we(u);if(e===d.ALL_V_GIVEN){const p=`constraint ${v} + ${g} != 5;
`;a+=p}else if(e===d.ALL_X_GIVEN){const p=`constraint ${v} + ${g} != 10;
`;a+=p}else{const p=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;a+=p}}return a=dt(a,`${e}`),a}function fo(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function Ck(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=fo(n,i);let a="";for(const[c,u]of Yr(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const v=we(c),g=we(u);let p="";if(c.r==u.r){const I=n.getRow(c.r)[0];p=we(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];p=we(I)}if(!p)continue;const m=`constraint abs(${v} - ${g}) != ${p};
`;a+=m}return a=dt(a,`${e}`),a}function Ok(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=fo(n,i);a=[...a,...fo(n,o)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let f="";for(const[v,g]of Yr(n)){if(a.find(I=>I.has(v)&&I.has(g)))continue;const m=we(v),E=we(g);for(const I of u){const O=parseInt(I),b=`constraint abs(${m} - ${E}) != ${O};
`;f+=b}}return f=dt(f,`${e}`),f}function Ik(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=fo(n,i);a=[...a,...fo(n,o)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let f="";for(const[v,g]of Yr(n)){if(a.find(I=>I.has(v)&&I.has(g)))continue;const m=we(v),E=we(g);for(const I of u){const O=parseInt(I),b=`constraint not ratio_p(${m}, ${E}, ${O});
`;f+=b}}return f=dt(f,`${e}`),f}function bk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=fo(n,i);let a="";for(const[c,u]of Yr(n)){if(o.find(I=>I.has(c)&&I.has(u)))continue;const v=we(c),g=we(u),p=_t(c,K.YIN_YANG),m=_t(u,K.YIN_YANG),E=`constraint not yin_yang_kropki_p(${v}, ${g}, ${p}, ${m});
`;a+=E}return a=dt(a,`${e}`),a}function wk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,f){return u.find(v=>v.cell.r===f.r&&v.cell.c===f.c)}let c="";for(const u of n.getAllCells()){const f=a(o,u),v=f?f.directions:[],g=we(u),p=[Pe.E,Pe.N,Pe.S,Pe.W];for(const m of p){if(v.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),I=Oe(E,K.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=dt(c,`${e}`),c}function Gd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function yk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=Gd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=n.getRow(c.r),g=`[${ct(f).join(",")}]`,p=c.c+1,m=`constraint not indexing_column_p(${g}, ${p});
`;a+=m}return a=dt(a,`${e}`),a}function Lk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=Gd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=we(c),[v,g,p,m]=Dd(n,c),E=`constraint not radar_p(${f}, ${v}, ${g}, ${p}, ${m}, 9);
`;a+=E}return a=dt(a,`${e}`),a}function Ak(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=Gd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=`nurimisaki[${c.r},${c.c}]`,p=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${f});
`;a+=p}return a=dt(a,`${e}`),a}function Sk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Yr(n)){const a=we(i),c=we(o),u=`nurimisaki[${i.r},${i.c}]`,f=`nurimisaki[${o.r},${o.c}]`,v=`constraint (${u} == 0 /\\ ${f} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=v}return r}function Nk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),f=Oe(u,K.YIN_YANG);o+=`constraint count_unique_values(${f}) >= 2;
`}return o}function xk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=K.YIN_YANG;for(const[o,a]of Yr(n)){const c=we(o),u=we(a),f=`${i}[${o.r},${o.c}]`,v=`${i}[${a.r},${a.c}]`,g=`constraint (${f} == 1 /\\ ${v} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function Rk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=dt(n,`${e}`),n}function Tk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=dt(n,`${e}`),n}function Dk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function kk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function Gk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=dt(n,`${e}`),n}function Mk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=dt(n,`${e}`),n}function Uk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function $k(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Fk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Pk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=dt(n,`${e}`),n}function Hk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(f=>i.region!==null&&f.region===i.region),a=_t(i,K.BOARD),c=_t(i,K.YIN_YANG),u=Oe(o,K.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=dt(n,`${e}`),n}function Bk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Wk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function zk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Yk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function jk(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=dt(n,`${e}`),n}function Kk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Vk(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=dt(n,`${e}`),n}function Xk(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(f=>f.r))],u=[...new Set(a.map(f=>f.c))];for(const f of u){const v=a.filter(p=>p.c===f),g=Oe(v,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}for(const f of c){const v=a.filter(p=>p.r===f),g=Oe(v,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}}return n=dt(n,`${e}`),n}function qk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),f=ct(u),v=Ai(f);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),f=ct(u),v=Ai(f);r+=v}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const f=n.getRegion(u),v=ct(f),g=Ai(v);r+=g}}return r}function Zk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const Qk=new Map([[d.POSITIVE_DIAGONAL,tk],[d.NEGATIVE_DIAGONAL,nk],[d.POSITIVE_ANTIDIAGONAL,rk],[d.NEGATIVE_ANTIDIAGONAL,ik],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,ok],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,sk],[d.ANTIKING,lk],[d.ANTIKNIGHT,ck],[d.ANTI_LONG_KNIGHT,dk],[d.ANTI_GIRAFFE,uk],[d.DISJOINT_GROUPS,ak],[d.TANGO,_k],[d.NONCONSECUTIVE,gk],[d.NONRATIO,hk],[d.ANTI_ENTROPY,fk],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,Xk],[d.GLOBAL_INDEXING_COLUMN,pk],[d.ALL_V_GIVEN,du],[d.ALL_X_GIVEN,du],[d.ALL_XV_GIVEN,du],[d.ALL_DIFFERENCES_GIVEN,Ok],[d.ALL_RATIOS_GIVEN,Ik],[d.ALL_XY_DIFFERENCES_GIVEN,Ck],[d.ALL_YIN_YANG_KROPKI_GIVEN,bk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,wk],[d.ALL_INDEXING_COLUMN_GIVEN,yk],[d.ALL_RADARS_GIVEN,Lk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Ak],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Sk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Nk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,Ek],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,vk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,mk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Rk],[d.CAVE_CELLS_ARE_ODD,Dk],[d.CAVE_WALLS_ARE_EVEN,kk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Gk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Mk],[d.YIN_YANG_FILLOMINO_PARITY,Tk],[d.TWO_SYMMETRIC_GALAXIES,Fk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,Uk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,$k],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Pk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Hk],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,xk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,Bk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Vk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,Wk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,zk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,Yk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,jk],[d.DIRECTED_PATH_IS_PARITY_LINE,Kk]]);function Jk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=Qk.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function Md(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return ct(r)}function Ud(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${ct(n.slice(1)).join(",")}]`}function Kp(t,e,n,r){let i="";const a="["+Md(e,r).join(",")+"]";for(const c of r.lines){const u=Ud(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function e3(t,e,n,r){let i="";const o=Md(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${Ud(e,u)}, ${a});
`;i+=v}}return i}function t3(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=Oe(o,K.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f));for(const u of c){if(u.length<=1)continue;const f=Oe(u.slice(1),K.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${f});
`}return i+=Kp(t,e,n,r),i}function n3(t,e,n,r){let i="";const a="["+Md(e,r).join(",")+"]",c=r.lines;for(const u of c){const f=Ud(e,u),v=`constraint bulbous_arrow_p(${a}, ${f});
`;i+=v}return i}const r3=new Map([[d.ARROW,Kp],[d.AVERAGE_ARROW,e3],[d.BULBOUS_ARROW,n3],[d.CHAOS_CONSTRUCTION_ARROW,t3]]);function i3(t,e,n,r){let i="";const o=r3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function ai(t,e){const n=zt(t,e.cells);return ct(n)}function Vp(t,e,n){const i=`[${ai(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Nl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function $d(t,e,n,r,i){const a=`[${ai(e,r).join(",")}]`,c=r.value,u=Nl(t,c,n);if(!u)return"";const f=u[1];let v=u[0];return v+=`constraint ${i}(${a}, ${f});
`,v}function o3(t,e,n,r){const i=ai(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ai(i);const c=Nl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint killer_cage(${o}, ${u});
`,f}function s3(t,e,n,r){const i=ai(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ai(i);const c=Nl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint inverted_killer_cage_p(${o}, ${u});
`,f}function a3(t,e,n,r){return $d(t,e,n,r,"sum_cage_p")}function l3(t,e,n,r){return Vp(e,r,"parity_balance_cage_p")}function c3(t,e,n,r){return Vp(e,r,"sum_cage_look_and_say_p")}function u3(t,e,n,r){return $d(t,e,n,r,"divisible_killer_cage_p")}function d3(t,e,n,r){return $d(t,e,n,r,"spotlight_cage_p")}function _3(t,e,n,r){const o=`[${ai(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function f3(t,e,n,r){const o=`[${ai(e,r).join(",")}]`,a=r.value;let c="";const u=Nl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const f=r.cells,v=zt(e,f),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!v.includes(I)&&!g.includes(I)&&g.push(I)});const p=Oe(g,K.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${p});
`,c}function Xp(t,e,n,r,i){const o=zt(e,r.cells),a=Oe(o,K.BOARD),c=Oe(o,K.YIN_YANG),u=r.value;if(u){const f=parseInt(u);return`constraint ${i}(${a}, ${c}, ${f});
`}return""}function g3(t,e,n,r){return Xp(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function h3(t,e,n,r){return Xp(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function p3(t,e,n,r){const i=zt(e,r.cells),o=Oe(i,K.BOARD),a=Oe(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function v3(t,e,n,r){const i=zt(e,r.cells),o=Oe(i,K.BOARD),a=Oe(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function m3(t,e){let n="";const r=kd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(f=>[c,f]))){const u=`[${ai(t,o).join(",")}]`,v=`[${ai(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const E3=new Map([[d.KILLER_CAGE,o3],[d.INVERTED_KILLER_CAGE,s3],[d.SUM_CAGE,a3],[d.PARITY_BALANCE_CAGE,l3],[d.SUM_CAGE_LOOK_AND_SAY,c3],[d.DIVISIBLE_KILLER_CAGE,u3],[d.SPOTLIGHT_CAGE,d3],[d.UNIQUE_DIGITS_CAGE,_3],[d.VAULTED_CAGE,f3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,g3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,h3],[d.DOUBLERS_KILLER_CAGE,p3],[d.NEGATORS_KILLER_CAGE,v3]]);function C3(t,e,n,r){let i="";const o=E3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=m3(e,a);i+=c}return i}function O3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),f=Math.floor(r+c);return t.getCell(u,f)}function I3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=O3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function b3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],f=u.cell,v=c+1,[g,p,m]=I3(e,f),E=Oe(g,K.GALAXY_REGIONS),I=Oe(p,K.GALAXY_REGIONS),O=Oe(m,K.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${E}, ${I}, ${O}, ${v});
`,r+=`constraint connected_region(${K.GALAXY_REGIONS}, ${v});
`;const b=u.value;if(!b)continue;const A=parseInt(b);r+=`constraint galaxy_sum_p(${K.BOARD}, ${K.GALAXY_REGIONS}, ${A}, ${v});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${K.GALAXY_REGIONS}, ${a});
`,r}function w3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function y3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=w3(t,c,n);if(!u)return"";const f=u[1];let v=u[0],g=[];if(o%1===0&&a%1===0?g=ja(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=Ka(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const p=Oe(g,K.BOARD),m=Oe(g,K.YIN_YANG);return v+=`constraint conditional_sum_f(${p}, ${m}, 1) == ${f};
`,v}const L3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,y3]]),A3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,b3]]);function S3(t,e,n,r){let i="";const o=A3.get(n),a=L3.get(n);if(a)for(const[c,u]of Object.entries(r)){const f=a(t,e,c,u);i+=f}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function ih(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return ct(n)}function N3(t,e){const r="["+ih(t,e.cells).join(",")+"]",o="["+ih(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const x3=new Map([[d.CLONE_REGION,N3]]);function R3(t,e,n,r){return Sl(e,n,r,x3)}function Fd(t,e){const n=zt(t,e.cells);return ct(n)}function Pd(t,e,n){const i=`[${Fd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function qp(t,e,n,r=""){const o=`[${Fd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function T3(t,e,n,r){const o=`[${Fd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Yp(a);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const f="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${f});
`,u}function D3(t,e,n,r){return qp(e,r,"corner_sum_p")}function k3(t,e,n,r){return qp(e,r,"corner_even_count_p")}function G3(t,e,n,r){return Pd(e,r,"corner_sum_of_three_equals_the_other_p")}function M3(t,e,n,r){return Pd(e,r,"equal_diagonal_differences_p")}function U3(t,e,n,r){return Pd(e,r,"product_square_p")}const $3=new Map([[d.QUADRUPLE,T3],[d.CORNER_SUM,D3],[d.CORNER_EVEN_COUNT,k3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,G3],[d.PRODUCT_SQUARE,U3],[d.EQUAL_DIAGONAL_DIFFERENCES,M3]]);function F3(t,e,n,r){let i="";const o=$3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function xl(t,e){const n=zt(t,e.cells);return ct(n)}function P3(t,e,n){const r=xl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function H3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Rl(t,e,n,r,i,o=""){var m;const a=xl(e,r),[c,u]=a,f=(m=r.value)!=null&&m.length?r.value:o,v=H3(t,f,n);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint ${i}(${c}, ${u}, ${g});
`,p}function B3(t,e,n,r){const i=xl(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function W3(t,e,n,r){return Rl(t,e,n,r,"ratio_p","2")}function z3(t,e,n,r){return Rl(t,e,n,r,"abs_difference","1")}function oh(t,e,n,r){const i=xl(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function Y3(t,e,n,r){return Rl(t,e,n,r,"edge_sum_p")}function j3(t,e,n,r){return Rl(t,e,n,r,"edge_modulo_p")}function K3(t,e,n,r){return P3(e,r,"edge_factor_p")}function V3(t,e,n,r){const i=zt(e,r.cells),[o,a]=ct(i),[c,u]=i;let f="";if(c.r==u.r){const p=e.getRow(c.r)[0];f=we(p)}else if(c.c==u.c){const p=e.getCol(c.c)[0];f=we(p)}return f?`constraint abs(${o} - ${a}) == ${f};
`:""}function X3(t,e,n,r){const i=zt(e,r.cells),[o,a]=ct(i),c=$i(i,K.YIN_YANG),[u,f]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${f});
`}function q3(t,e,n,r){const i=zt(e,r.cells),[o,a]=ct(i),c=$i(i,K.YIN_YANG),[u,f]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${f});
`}function Tl(t,e,n){const r=zt(t,e.cells),i=$i(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function Z3(t,e,n,r){return Tl(e,r,K.UNKNOWN_REGIONS)}function Q3(t,e,n,r){return Tl(e,r,K.FILLOMINO_REGIONS)}function J3(t,e,n,r){return Tl(e,r,K.SUGURU_REGIONS)}function e5(t,e,n,r){return Tl(e,r,K.CAVE_SHADING)}const t5=new Map([[d.XV,B3],[d.DIFFERENCE,z3],[d.RATIO,W3],[d.EDGE_INEQUALITY,oh],[d.ONE_WAY_DOOR,oh],[d.EDGE_SUM,Y3],[d.EDGE_MODULO,j3],[d.EDGE_FACTOR,K3],[d.XY_DIFFERENCES,V3],[d.YIN_YANG_KROPKI,X3],[d.YIN_YANG_WHITE_KROPKI,q3],[d.FILLOMINO_REGION_BORDER,Q3],[d.UNKNOWN_REGION_BORDER,Z3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,J3],[d.EDGE_CAVE_ONE_OF_EACH,e5]]);function n5(t,e,n,r){let i="";const o=t5.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function r5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ps(t,e,n=!1){let r=zt(t,e.cells);return n&&(r=[...new Set(r)]),ct(r)}function ht(t,e,n,r=!1){const o=`[${Ps(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function dr(t,e,n,r,i,o=""){var p;const c=`[${Ps(e,r).join(",")}]`,u=(p=r.value)!=null&&p.length?r.value:o,f=r5(t,u,n);if(!f)return"";const v=f[1];let g=f[0];return g+=`constraint ${i}(${c}, ${v});
`,g}function Hd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${ct(i).join(",")}]`,u=e.value;if(!u)return"";const f=parseInt(u);return`constraint ${n}(${c}, ${f}, ${o});
`}function i5(t,e,n,r){return ht(e,r,"renban",!0)}function o5(t,e,n,r){return ht(e,r,"double_renban_p",!0)}function s5(t,e,n,r){return ht(e,r,"renrenbanban_p",!0)}function a5(t,e,n,r){return ht(e,r,"knabner_p",!0)}function l5(t,e,n,r){return ht(e,r,"renban_or_nabner_line_p",!0)}function c5(t,e,n,r){return ht(e,r,"out_of_order_consecutive_line_p")}function u5(t,e,n,r){return dr(t,e,n,r,"whispers","5")}function d5(t,e,n,r){return`constraint whispers(${`[${Ps(e,r).join(",")}]`}, 4);
`}function _5(t,e,n,r){return ht(e,r,"strictly_increasing")}function f5(t,e,n,r){return ht(e,r,"fuzzy_thermo_p")}function g5(t,e,n,r){return ht(e,r,"increasing")}function h5(t,e,n,r){return dr(t,e,n,r,"custom_thermo_p")}function p5(t,e,n,r){return ht(e,r,"palindrome")}function v5(t,e,n,r){return dr(t,e,n,r,"sum_line_p")}function m5(t,e,n,r){return ht(e,r,"xv_line_p")}function E5(t,e,n,r){return dr(t,e,n,r,"at_least_x_line_p","10")}function C5(t,e,n,r){return dr(t,e,n,r,"product_line_p")}function O5(t,e,n,r){return dr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function I5(t,e,n,r){return ht(e,r,"adjacent_multiples_line_p")}function b5(t,e,n,r){return ht(e,r,"index_line_p")}function w5(t,e,n,r){return ht(e,r,"zipper_line_p")}function y5(t,e,n,r){return Hd(e,r,"segmented_sum_line_p")}function L5(t,e,n,r){return ht(e,r,"segmented_sum_and_renban_line_p")}function A5(t,e,n,r){return Hd(e,r,"n_consecutive_renban_line_p")}function S5(t,e,n,r){return Hd(e,r,"n_consecutive_fuzzy_sum_line_p")}function N5(t,e,n,r){const i=zt(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const f=i[u],v=e.getRow(f.r),g=Oe(v,K.BOARD),p=`cycle_${n}_${u}`;a.push(p);const m=f.c+1;o+=`var int: ${p} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function x5(t,e,n,r){return ht(e,r,"adjacent_differences_count_line_p")}function R5(t,e,n,r){return ht(e,r,"same_parity_line_p")}function T5(t,e,n,r){return dr(t,e,n,r,"renban_or_whispers_p","5")}function D5(t,e,n,r){return ht(e,r,"alldifferent",!0)}function k5(t,e,n,r){return ht(e,r,"repeated_digits_line_p")}function G5(t,e,n,r){return ht(e,r,"superfuzzy_arrow_p")}function M5(t,e,n,r){return ht(e,r,"ambiguous_arrow_p",!0)}function U5(t,e,n,r){return ht(e,r,"headless_arrow_p")}function $5(t,e,n,r){return dr(t,e,n,r,"unimodular_line_p","3")}function F5(t,e,n,r){return dr(t,e,n,r,"modular_line_p","3")}function P5(t,e,n,r){return dr(t,e,n,r,"modular_or_unimodular_line_p","3")}function H5(t,e,n,r){return ht(e,r,"arithmetic_sequence_line_p")}function B5(t,e,n,r){return ht(e,r,"odd_even_oscillator_line_p")}function W5(t,e,n,r){return dr(t,e,n,r,"high_low_oscillator_line_p","5")}function z5(t,e,n,r){return ht(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function Y5(t,e,n,r){return ht(e,r,"look_and_say_line_p",!0)}function j5(t,e,n,r){const i=zt(e,r.cells);function o(g){const p=[];let m=null;for(const E of g)E.r!=m?(p.push([E]),m=E.r):p[p.length-1].push(E);return p}const a=o(i);if(a.length<2)return"";const c=a[0],f=`[${ct(c).join(",")}]`;let v="";for(let g=1;g<a.length;g++){const p=a[g],E=`[${ct(p).join(",")}]`;v+=`constraint sum(${E}) == sum(${f});
`}return v}function K5(t,e,n,r){return ht(e,r,"between_line_p")}function V5(t,e,n,r){return ht(e,r,"tightrope_line_p")}function X5(t,e,n,r){return ht(e,r,"double_arrow_p")}function q5(t,e,n,r){return ht(e,r,"split_peas_p")}function Z5(t,e,n,r){return ht(e,r,"parity_count_line_p")}function Q5(t,e,n,r){return ht(e,r,"product_of_ends_equals_sum_of_line_p")}function Zp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function J5(t,e,n,r){let i="";const o=zt(e,r.cells),a=Zp(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const v=`constraint sum(${Oe(u,K.BOARD)}) == ${c};
`;i+=v}return i}function eG(t,e,n,r){return`constraint entropic_line_p(${`[${Ps(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function tG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ps(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function nG(t,e,n,r){return ht(e,r,"peapods_p")}function rG(t,e,n,r){const i=zt(e,r.cells),o=Oe(i,K.BOARD),a=Oe(i,K.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function iG(t,e,n,r){const i=zt(e,r.cells),o=Oe(i,K.BOARD),a=Oe(i,K.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function Bd(t,e,n){const r=zt(t,e.cells),i=Oe(r,K.BOARD),o=Oe(r,K.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function oG(t,e,n,r){return Bd(e,r,"yin_yang_unshaded_entropic_line_p")}function sG(t,e,n,r){return Bd(e,r,"yin_yang_indexing_line_coloring_p")}function aG(t,e,n,r){return Bd(e,r,"yin_yang_region_sum_line_p")}function lG(t,e,n,r){const i=zt(e,r.cells),o=Oe(i,K.VALUES_GRID),a=Oe(i,K.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function Wd(t,e,n){const r=zt(t,e.cells),i=Oe(r,K.VALUES_GRID);return`constraint ${n}(${i});
`}function cG(t,e,n,r){return Wd(e,r,"between_line_p")}function uG(t,e,n,r){return Wd(e,r,"double_arrow_p")}function dG(t,e,n,r){return Wd(e,r,"strictly_increasing")}function _G(t,e,n,r){const i=zt(e,r.cells),o=Zp(i);if(o.sort((f,v)=>v.length-f.length),o.length<=1)return"";let a="";const c=o[0],u=Oe(c,K.VALUES_GRID);for(const f of o.slice(1)){const v=Oe(f,K.VALUES_GRID),g=`constraint subset_p(${u}, ${v});
`;a+=g}return a}const fG=new Map([[d.THERMOMETER,_5],[d.FUZZY_THERMOMETER,f5],[d.SLOW_THERMOMETER,g5],[d.CUSTOM_THERMOMETER,h5],[d.RENBAN_LINE,i5],[d.DOUBLE_RENBAN_LINE,o5],[d.RENRENBANBAN_LINE,s5],[d.NABNER_LINE,a5],[d.WHISPERS_LINE,u5],[d.DUTCH_WHISPERS,d5],[d.RENBAN_OR_WHISPERS_LINE,T5],[d.RENBAN_OR_NABNER_LINE,l5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,c5],[d.N_CONSECUTIVE_RENBAN_LINE,A5],[d.PALINDROME,p5],[d.SUM_LINE,v5],[d.PRODUCT_LINE,C5],[d.XV_LINE,m5],[d.AT_LEAST_X_LINE,E5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,O5],[d.SAME_PARITY_LINE,R5],[d.ADJACENT_MULTIPLES_LINE,I5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,x5],[d.LOOK_AND_SAY_LINE,Y5],[d.ROW_SUM_LINE,j5],[d.INDEX_LINE,b5],[d.ZIPPER_LINE,w5],[d.SEGMENTED_SUM_LINE,y5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,L5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,S5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,z5],[d.SUPERFUZZY_ARROW,G5],[d.AMBIGUOUS_ARROW,M5],[d.HEADLESS_ARROW,U5],[d.ARITHMETIC_SEQUENCE_LINE,H5],[d.ODD_EVEN_OSCILLATOR_LINE,B5],[d.HIGH_LOW_OSCILLATOR_LINE,W5],[d.UNIQUE_VALUES_LINE,D5],[d.REPEATED_DIGITS_LINE,k5],[d.UNIMODULAR_LINE,$5],[d.MODULAR_LINE,F5],[d.MODULAR_OR_UNIMODULAR_LINE,P5],[d.REGION_SUM_LINE,J5],[d.ENTROPIC_LINE,eG],[d.ENTROPIC_OR_MODULAR_LINE,tG],[d.ROW_CYCLE_THERMOMETER,N5],[d.PEAPODS,nG],[d.BETWEEN_LINE,K5],[d.TIGHTROPE_LINE,V5],[d.DOUBLE_ARROW_LINE,X5],[d.SPLIT_PEAS,q5],[d.PARITY_COUNT_LINE,Z5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,Q5],[d.DOUBLERS_THERMOMETER,dG],[d.DOUBLERS_BETWEEN_LINE,cG],[d.DOUBLERS_DOUBLE_ARROW_LINE,uG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,_G],[d.YIN_YANG_SHADED_WHISPERS_LINE,rG],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,oG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,iG],[d.YIN_YANG_REGION_SUM_LINE,aG],[d.YIN_YANG_INDEXING_LINE_COLORING,sG],[d.GOLDILOCKS_ZONE_REGION_SUM,lG]]);function gG(t,e,n,r){let i="";const o=fG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Hs(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return ct(i)}function Fi(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function rr(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,n).join(",")}]`,u=n.value,f=Fi(t,u,i,o);if(!f)return"";const v=f[1];let g=f[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function hG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,v=Math.min(...f),g=Math.max(...f),p=Fi(t,u,i,o);if(!p)return"";const m=p[1];let E=p[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,E}function pG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,v=Math.min(...f),g=Math.max(...f),p=Fi(t,u,i,o);if(!p)return"";const m=p[1];let E=p[0];const I=`var_bool_${n}_0`,O=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,E+=`var bool: ${O} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${O});
`,E}function vG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Hs(e,r),c=`[${a.join(",")}]`,u=a[0],f=r.value,v=Fi(t,f,i,o);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint x_index_p(${c}, ${u}, ${g});
`,p}function mG(t,e,n,r){return rr(t,e,r,"x_sum_p")}function EG(t,e,n,r){return rr(t,e,r,"shortsighted_x_sum_p")}function CG(t,e,n,r){return rr(t,e,r,"broken_x_sum_p")}function OG(t,e,n,r){return rr(t,e,r,"shifted_x_sum_p")}function IG(t,e,n,r){return rr(t,e,r,"skyscrapers_p")}function bG(t,e,n,r){return rr(t,e,r,"x_sum_skyscrapers_p")}function wG(t,e,n,r){return rr(t,e,r,"battlefield_p")}function yG(t,e,n,r){return rr(t,e,r,"rising_streak_p")}function LG(t,e,n,r){return rr(t,e,r,"outside_consecutive_sum_p")}function AG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Oe(a,K.BOARD),u=Oe(a,K.CELL_CENTER_LOOP),f=r.value;if(f){const v=parseInt(f);return`constraint loopwhiches_p(${c}, ${u}, ${v});
`}return""}function SG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Oe(c,K.BOARD),f=Oe(c,K.UNKNOWN_REGIONS),v=r.value,g=Fi(t,v,i,o);if(!g)return"";const p=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${f}, ${p});
`,m}function NG(t,e,n,r){return rr(t,e,r,"little_killer_sum_p")}function xG(t,e,n,r){return rr(t,e,r,"little_killer_product_p")}function RG(t,e,n,r){return rr(t,e,r,"x_omit_little_killer_sum_p")}function TG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Oe(a,K.BOARD),u=Oe(a,K.YIN_YANG),f=r.value;if(f){const v=parseInt(f);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${v});
`}return""}function DG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Oe(a,K.VALUES_GRID),u=r.value;if(u){const f=parseInt(u);return`constraint little_killer_sum_p(${c}, ${f});
`}return""}function kG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Oe(c,K.PENTOMINO_REGIONS),f=r.value,v=Fi(t,f,i,o);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint pentomino_border_count_p(${u}, ${g});
`,p}function GG(t,e,n){let r="";const i="mystery_sandwich_a",o="mystery_sandwich_b";r+=`var int: ${i};
`,r+=`var int: ${o};
`,r+=`constraint member(ALLOWED_DIGITS, ${i});
`,r+=`constraint member(ALLOWED_DIGITS, ${o});
`,r+=`constraint ${i} <= ${o};
`;for(const a of Object.values(n)){const c=a.cell,u=e.getCell(c.r,c.c),v=`[${Hs(e,a).join(",")}]`,g=a.value??"",p=Fi(t,g,c,u);if(!p)continue;const m=p[1];r+=p[0],r+=`constraint sandwich_sum_p(${v}, ${m}, ${i}, ${o});
`}return r}const MG=new Map([[d.SANDWICH_SUM,hG],[d.X_SUM,mG],[d.SHORTSIGHTED_X_SUM,EG],[d.BROKEN_X_SUM,CG],[d.SHIFTED_X_SUM,OG],[d.SKYSCRAPERS,IG],[d.X_SUM_SKYSCRAPERS,bG],[d.X_INDEX,vG],[d.BATTLEFIELD,wG],[d.SANDWICH_SUM_XOR_X_SUM,pG],[d.RISING_STREAK,yG],[d.OUTSIDE_CONSECUTIVE_SUM,LG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,TG],[d.LOOPWICHES,AG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,SG],[d.PENTOMINO_BORDER_COUNT,kG],[d.LITTLE_KILLER_SUM,NG],[d.LITTLE_KILLER_PRODUCT,xG],[d.X_OMIT_LITTLE_KILLER_SUM,RG],[d.NEGATORS_LITTLE_KILLER_SUM,DG]]),UG=new Map([[d.MYSTERY_SANDWICH_SUM,GG]]);function $G(t,e,n,r){let i="";const o=MG.get(n),a=UG.get(n);if(o)for(const[c,u]of Object.entries(r)){const f=o(t,e,c,u);i+=f}else if(a){const c=a(t,e,r);i+=c}return i}function FG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=Oe(o,K.SASHIGANE),c=Oe(o,K.SASHIGANE_BENDS),u=we(r),f=_t(r,K.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${f}, ${a}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function PG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+ct(o).join(",")+"]",u=Oe(o,K.CELL_CENTER_LOOP),f=we(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${f});
`}const HG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,FG],[d.THERMO_SIGHTLINE_LOOP_ARROW,PG]]);function BG(t,e,n,r){return Sl(e,n,r,HG)}function Qp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i);return`constraint ${n}(${o});
`}const WG={allow_var:!0,allow_interval:!0,allow_int_list:!1};function zd(t,e,n,r=WG){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Jp(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function ko(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o),u=Al(t,o).map(g=>Oe(g,n)),f=_t(o,n);return`constraint ${r}(${u.join(", ")}, ${f}, ${a});
`}function zG(t,e,n,r){return Qp(e,r,"odd_p")}function YG(t,e,n,r){return Qp(e,r,"even_p")}function jG(t,e,n,r){return Jp(e,r,"low_digit_p","5")}function KG(t,e,n,r){return Jp(e,r,"high_digit_p","5")}function ev(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),a=t.getNeighboorCells(i),c=Oe(a,K.BOARD);return`constraint ${n}(${c}) == ${o};
`}function VG(t,e,n,r){return ev(e,r,"odd_count")}function XG(t,e,n,r){return ev(e,r,"even_count")}function qG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);c.push(o);const u=Oe(c,K.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function ZG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${Oe(c,K.BOARD)}, ${a});
`}function QG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${Oe(c,K.BOARD)}, ${a});
`}function JG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=Oe(a,K.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function eM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=Oe(a,K.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function tM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=o.r+1,u=o.c+1;if(o.region!==null){const v=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${v};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function nM(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),f=e.getCell(i.r,i.c+1);if(!a||!c||!u||!f)return"";const v=we(a),g=we(c),p=we(u),m=we(f);return`constraint groups_opposite_parity_p([${v},${g}], [${p},${m}]);
`}function Yd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),[a,c,u,f]=Dd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${f});
`}function rM(t,e,n,r){return Yd(e,r,"is_watchtower_p")}function iM(t,e,n,r){return Yd(e,r,"is_not_watchtower_p")}function oM(t,e,n,r){return Yd(e,r,"farsight_p")}function sM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),[c,u,f,v]=Dd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${f}, ${v}, 9);
`}function aM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u="["+ct(c).join(",")+"]",f=e.getCol(o.c),v="["+ct(f).join(",")+"]",[g,p]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${p}, ${a});
`}function tv(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,f=t.getCell(u.r,u.c);if(!f)continue;const v=we(f),g=t.getOrthogonallyAdjacentCells(f).filter(E=>!a.has(E)),p=Oe(g,K.BOARD),m=`constraint ${n}(${p}, ${v});
`;i+=m}return i}function lM(t,e,n){return tv(e,n,"maximum_p")}function cM(t,e,n){return tv(e,n,"minimum_p")}function uM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${ct([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function dM(t,e,n){const r=Object.values(n);let i="";const o=r.map(p=>p.cell),a=new Set(o.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),c=e.getAllCells().filter(p=>!a.has(p)),f=`${ct([...a]).join(`,
	`)}`,g=`${ct([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${f}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function _M(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${ct([...a]).join(`,
	`)}`,v=`${$i([...a],K.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${K.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${K.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const p=_t(g,K.COUNTING_CIRCLES_COLORS);i+=`constraint ${p} == 0;
`}for(const g of r){const p=g.cell,m=e.getCell(p.r,p.c);if(!m)continue;const E=we(m),I=_t(m,K.COUNTING_CIRCLES_COLORS),O=g.value;O?i+=`constraint ${I} == ${O};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${I}) == ${E};
`}return i+=`
`,i}function fM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${ct([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function gM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_even_count_p(${Al(e,o).map(v=>Oe(v,K.BOARD)).join(", ")}, ${a});
`}function hM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_odd_count_p(${Al(e,o).map(v=>Oe(v,K.BOARD)).join(", ")}, ${a});
`}function pM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getCellsByKnightMove(o),u=Oe(c,K.BOARD),f=r.value??"5",v=zd(t,f,n);if(!v)return"";let g="";const p=v[1];return g+=v[0],g+=`constraint cell_knights_whisper_p(${a}, ${u}, ${p});
`,g}function vM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${Oe(u,K.YIN_YANG)}, ${a});
`}function mM(t,e,n,r){return ko(e,r,K.YIN_YANG,"yin_yang_seen_unshaded_p")}function EM(t,e,n,r){return ko(e,r,K.YIN_YANG,"yin_yang_seen_shaded_p")}function CM(t,e,n,r){return ko(e,r,K.YIN_YANG,"yin_yang_seen_same_shade_p")}function OM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),f=Oe(u,K.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${f});
`}function IM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);return`constraint count(${Oe(c,K.YIN_YANG)}, 1) == ${a};
`}function bM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),f=e.getCol(o.c),v=Oe(u,K.TWO_CONTIGUOUS_REGIONS),g=Oe(f,K.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${a}, ${c});
`}function wM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u=e.getCol(o.c),f=Oe(c,K.UNKNOWN_REGIONS),v=Oe(u,K.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${f}, ${v}, ${a});
`}function yM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let f=`constraint nurimisaki_unshaded_endpoint_p(${Oe(c,K.NURIMISAKI)}, ${a});
`;return f+=ko(e,r,K.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),f}function LM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.SASHIGANE),u=_t(o,K.SASHIGANE_BENDS);let f=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return f+=`constraint ${u} = true;
`,f}function AM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=_t(o,K.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function SM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,K.CELL_CENTER_LOOP)} == 1;
`:""}function NM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,K.CELL_CENTER_LOOP)} == 0;
`:""}function xM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${Oe(u,K.CELL_CENTER_LOOP)}) == ${a};
`}function RM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.CAVE_SHADING),u=Al(e,o),f=[];for(const g of u){const p=Oe(g,K.CAVE_SHADING);f.push(p)}return`constraint cave_clue_p(${a}, ${c}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function TM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=we(o),v=_t(o,K.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),p=Oe(g,K.BOARD),m=Oe(g,K.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${p}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${f});
`;const E=e.getCellsByKnightMove(o),I=Oe(E,K.BOARD),O=Oe(E,K.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${O}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${f});
`;const b=[Pe.NE,Pe.NW,Pe.SE,Pe.SW],A=[];for(const H of b)e.getCellsInDirection(o.r,o.c,H).forEach(F=>A.push(F));const k=Oe(A,K.BOARD),G=Oe(A,K.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${G}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${f});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function DM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=we(o),v=_t(o,K.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),p=Oe(g,K.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${p}, ${v}) >= ${c};
`;const m=[Pe.N,Pe.S,Pe.E,Pe.W],E=[];for(const I of m){const O=e.getCellsInDirection(o.r,o.c,I);if(!O.length)continue;const b=Oe(O,K.BOARD),A=Oe(O,K.UNKNOWN_REGIONS),k=`in_arrow_${n}_${I}`,G=`in_arrow_${n}_${I}[1]`;E.push(G),u+=`array[index_set(${b})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${A}, ${k}, ${f}, ${v});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function kM(t,e,n,r){return ko(e,r,K.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function GM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function MM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function UM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${_t(o,K.CONNECT_FOUR)});
`:""}function $M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${_t(o,K.CONNECT_FOUR)});
`:""}function FM(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const f=a.value;if(!f)continue;const v=zd(t,f,o);if(!v)continue;const g=v[1];r+=v[0];const p=_t(u,K.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${K.BOARD}, ${K.NURIKABE_REGIONS}, ${p}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${K.NURIKABE_REGIONS})) == ${i+1};
`,r}function PM(t,e,n,r){return ko(e,r,K.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function HM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,K.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${K.NURIKABE_REGIONS}, ${c}, ${a});
`}function BM(t,e,n){let r="";const i=kd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[f,v]of u.flatMap((g,p)=>u.slice(p+1).map(m=>[g,m]))){const g=f.cell,p=v.cell,m=e.getCell(g.r,g.c),E=e.getCell(p.r,p.c);if(!m||!E)continue;const I=_t(m,K.BOARD),O=_t(E,K.BOARD);r+=`constraint ${I} == ${O};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=Oe(a,K.BOARD);return r+=`constraint alldifferent(${c});
`,r}function WM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${$i([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const f of Object.values(n)){const v=f.cell,g=e.getCell(v.r,v.c);if(!g)continue;const p=we(g),m=_t(g,K.SHIKAKU_REGIONS),E=_t(g,K.SHIKAKU_WIDTH),I=_t(g,K.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${K.SHIKAKU_REGIONS}, ${m}, ${p}, ${E}, ${I});
`}return i}function zM(t,e,n){const r=Object.values(n);let i="";const o=r.map(v=>v.cell),a=new Set(o.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),u=`${$i([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const f={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,g]of Object.entries(n)){const p=g.cell,m=e.getCell(p.r,p.c);if(!m)continue;const E=_t(m,K.SHIKAKU_REGIONS),I=g.value??"",O=zd(t,I,v,f);if(!O)continue;const b=O[1];i+=O[0],i+=`constraint shikaku_region_sum_p(${K.BOARD}, ${K.SHIKAKU_REGIONS}, ${E}, ${b});
`}return i}const YM=new Map([[d.ODD,zG],[d.EVEN,YG],[d.LOW_DIGIT,jG],[d.HIGH_DIGIT,KG],[d.ODD_MINESWEEPER,VG],[d.EVEN_MINESWEEPER,XG],[d.DIAGONALLY_ADJACENT_SUM,QG],[d.ORTHOGONAL_SUM,ZG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,qG],[d.FRIENDLY_CELL,tM],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,nM],[d.WATCHTOWER,rM],[d.NOT_WATCHTOWER,iM],[d.FARSIGHT,oM],[d.RADAR,sM],[d.INDEXING_COLUMN,JG],[d.INDEXING_ROW,eM],[d.SANDWICH_ROW_COL_COUNT,aM],[d.SEEN_EVEN_COUNT,gM],[d.SEEN_ODD_COUNT,hM],[d.CELL_KNIGHT_WHISPERS,pM],[d.YIN_YANG_MINESWEEPER,vM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,mM],[d.YIN_YANG_SEEN_SHADED_CELLS,EM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,CM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,OM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,IM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,bM],[d.SEEN_REGION_BORDERS_COUNT,wM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,yM],[d.NURIKABE_SEEN_WATERWAY_CELLS,PM],[d.NURIKABE_ISLAND_SIZE_CELL,HM],[d.SASHIGANE_BEND_REGION_COUNT,LM],[d.SASHIGANE_REGION_SUM,AM],[d.CELL_ON_THE_LOOP,SM],[d.CELL_NOT_ON_THE_LOOP,NM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,xM],[d.CAVE_CLUE,RM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,TM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,DM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,kM],[d.DIRECTED_PATH_START,GM],[d.DIRECTED_PATH_END,MM],[d.CONENCT_FOUR_RED,UM],[d.CONNECT_FOUR_YELLOW,$M]]),jM=new Map([[d.MAXIMUM,lM],[d.MINIMUM,cM],[d.COUNTING_CIRCLES,uM],[d.REVERSE_COUNTING_CIRCLES,dM],[d.COLORED_COUNTING_CIRCLES,_M],[d.UNIQUE_CELLS,fM],[d.SHIKAKU_REGION_SIZE,WM],[d.SHIKAKU_REGION_SUM,zM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,FM],[d.TELEPORT,BM]]);function KM(t,e,n,r){let i="";const o=YM.get(n),a=jM.get(n);if(o)for(const[c,u]of Object.entries(r)){const f=o(t,e,c,u);i+=f}else if(a){const c=a(t,e,r);i+=c}return i}function VM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.UNKNOWN_REGIONS),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v),p=Oe(g,K.UNKNOWN_REGIONS);c.push(p)}return`constraint ${c.map(v=>`count_different(${v}, ${o})`).join(" + ")} == ${i};
`}function XM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.YIN_YANG),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),v=Oe(f,K.BOARD),g=Oe(f,K.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${v}, ${g}) == ${i};
`}return c}function qM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),f=Oe(u,K.YIN_YANG);a+=`constraint count(${f}, 1) == ${i};
`}return a}function ZM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.YIN_YANG),a=e.directions,c=[];for(const f of a){const v=t.getCellsInDirection(r.r,r.c,f),g=Oe(v,K.YIN_YANG),p=Oe(v,K.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${p})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function QM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const f=t.getCellsInDirection(r.r,r.c,u),g=`count(${Oe(f,K.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function JM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const f=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${Oe(f,K.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function eU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.GALAXY_REGIONS),a=e.directions,c=[];for(const f of a){const v=t.getCellsInDirection(r.r,r.c,f),p=`count(${Oe(v,K.GALAXY_REGIONS)}, ${o})`;c.push(p)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function tU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),v="["+ct(u).join(",")+"]";a+=`constraint hot_arrows_p(${v}, ${i});
`}return a}function nU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),f=Oe(u,K.BOARD);a+=`constraint cold_arrows_p(${f}, ${i});
`}return a}function rU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.CONNECT_FOUR),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v);c.push(...g)}return c.length===0?"":`constraint count(${Oe(c,K.CONNECT_FOUR)}, ${o}) == ${i};
`}function iU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,K.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),v=Oe(f,K.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${v});
`}return c}const oU=new Map([[d.HOT_ARROWS,tU],[d.COLD_ARROWS,nU],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,VM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,XM],[d.LOOP_CELL_COUNT_ARROWS,JM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,ZM],[d.YIN_YANG_COUNT_SHADED_CELLS,qM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,eU],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,QM],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,rU],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,iU]]);function sU(t,e,n,r){return Sl(e,n,r,oU)}function aU(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function lU(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function cU(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function uU(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${K.BOARD}, ${K.LITS_GRID}, ${r}, 0..${o});
`}const dU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,aU],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,lU],[d.FORBIDDEN_KNIGHT_SUM,cU],[d.LITS_MAX_TETROMINO_SUM,uU]]);function _U(t,e,n,r){return Sl(e,n,r,dU)}const fU=[S3,KM,BG,sU,n5,F3,gG,i3,C3,$G,R3,_U];function gU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of fU){let u=c(e,i,o,a);u=dt(u,`${o}`),n+=u}return n}function hU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function pU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function vU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function mU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function EU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function CU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=Lt.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function OU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=K.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=Lt.range(1,a+1);let u="";const f="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${K.BOARD}, ${o}, ${f}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${K.BOARD}, ${o}, ALLOWED_DIGITS, ${f});
`,u}function IU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function bU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function wU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function yU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function LU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function nv(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function rv(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function jd(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const f of u){const v=i.getRegion(f),g=Oe(v,r);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function co(t,e,n,r){let i=nv(e,n,r);return i+=rv(e,n,r),i+=jd(t,e,n,r),i}function AU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=co(n,1,!0,K.DOUBLERS),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function SU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=co(n,1,!0,K.NEGATORS),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function NU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function xU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=co(n,2,!0,o),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function RU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${K.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${K.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${K.SHIKAKU_WIDTH}, ${K.SHIKAKU_HEIGHT});
`,a}function TU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${K.BOARD}, ${K.SHIKAKU_REGIONS});
`,o}function DU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function kU(t,e){if(t.puzzle.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${K.BOARD}, ${c});
`,u}function GU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.GALAXY_REGIONS,a=K.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function MU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function UU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function $U(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=K.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function FU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.LITS_GRID,u=K.BOARD_REGIONS,f=[...r.getUsedRegions()];f.sort();const v=Math.min(...f),g=Math.max(...f);let p="";p+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,p+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,p+=`array[ROW_IDXS, COL_IDXS] of var 0..${f.length}: ${c};
`,p+=`constraint lits_shading_p(${o});
`,p+=`constraint lits_shading_ids_p(${o}, ${a});
`,p+=`constraint lits_region_and_ids_p(${u}, ${a});
`,p+=`constraint lits_tetromino_shapes_p(${a});
`,p+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${v}..${g});
`,f.length&&(p+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of f){const E=r.getRegion(m),O=`constraint count_eq(${Oe(E,K.LITS_SHADING)}, 1, 4);
`;p+=O}return p}function PU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${K.BOARD_REGIONS}, ${o});
`,r.getUsedRegions().size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`),a+=jd(n,2,1,K.NORINORI_SHADING),a}function HU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const f=r.getUsedRegions();f.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of f){const g=r.getRegion(v),m=`constraint count_eq(${Oe(g,K.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function BU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.STAR_BATTLE,c=K.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=co(n,2,1,K.STAR_BATTLE),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=co(n,1,1,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`
% 1 black star per row, column, region
`,u+=co(n,1,2,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function WU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING,a=K.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=rv(2,1,a),c+=nv(2,1,a),c+=jd(n,1,1,a),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function Bt(t,e,n){return t*n+e+1}function zU(t){const e=t.grid;function n(c,u){const f=[],v=Bt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const p=Bt(u.r+g,u.c,e.nCols);f.push([v,p]),f.push([p,v])}return f}function r(c,u){const f=[],v=Bt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const p=Bt(u.r,u.c+g,e.nCols);f.push([v,p]),f.push([p,v])}return f}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const f=u[0],g=ja(f).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let p=Bt(g[0].r,g[0].c,e.nCols),m=Bt(g[3].r,g[3].c,e.nCols);i.push([p,m]),i.push([m,p]),p=Bt(g[1].r,g[1].c,e.nCols),m=Bt(g[2].r,g[2].c,e.nCols),i.push([p,m]),i.push([m,p])}for(let f=0;f<u.length-1;f++){const v=xx(sp(u[f],u[f+1]),.5),p=Ka(v).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(p.length!==2)continue;const[m,E]=p;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function YU(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,f]=c,v=o.value,g=Bt(u.r,u.c,e.nCols),p=Bt(f.r,f.c,e.nCols);v==="<"?n.push([g,p]):v===">"&&n.push([p,g])}return n}function jU(t){const e=[];for(const n of t.getAllCells()){const r=Bt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Bt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function KU(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const f=kd(a);let v=1;for(const g of f.values())if(!(g.length<=1)){for(const[p,m]of g.flatMap((E,I)=>g.slice(I+1).map(O=>[E,O]))){const E=Bt(p.cell.r,p.cell.c,e.nCols),I=Bt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[p.cell.r][p.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const p of g){const m=Bt(p.cell.r,p.cell.c,e.nCols);r.push(m)}v++}c=f.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function VU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(b=>b.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=jU(r);const c=zU(n),u=YU(n);c.push(...u);const f=n.localConstraints;a=a.filter(b=>!c.some(A=>b[0]===A[0]&&b[1]===A[1]));const v=KU(n);if(v.tp_edges.length){a.push(...v.tp_edges);const b=jp(v.tp_arr),A=v.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${A}: teleports = array2d(ROW_IDXS, COL_IDXS, ${b});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,p=a.length,m="["+a.map(b=>b[0]).join(",")+"]",E="["+a.map(b=>b[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${p}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let b=0;b<r.nRows-1;b++)for(let A=0;A<r.nCols-1;A++){const k=r.getCell(b,A),G=r.getCell(b,A+1),H=r.getCell(b+1,A),$=r.getCell(b+1,A+1);if(!k||!G||!H||!$)continue;const F=Bt(k.r,k.c,r.nCols),z=Bt(G.r,G.c,r.nCols),Q=Bt(H.r,H.c,r.nCols),ce=Bt($.r,$.c,r.nCols),ne=[[F,ce],[ce,F],[z,Q],[Q,z]].map(pe=>a.findIndex(Ee=>pe[0]===Ee[0]&&pe[1]===Ee[1])).filter(pe=>pe!==-1);if(ne.length){const pe=ne.map(Ee=>`dpath_es[${Ee+1}]`).join(",");o+=`constraint sum([${pe}]) <= 1;
`}}const I=f.get(d.TELEPORT),O=I?Object.values(I):[];if(v.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const b of O){const A=b.cell,k=r.getCell(A.r,A.c);if(!k)continue;const G=r.getNeighboorCells(k),H=Bt(k.r,k.c,r.nCols),$=[];for(const z of G){if(O.some(Z=>Z.cell.r===z.r&&Z.cell.c==z.c&&Z.value===b.value))continue;const ce=Bt(z.r,z.c,r.nCols);$.push([H,ce]),$.push([ce,H])}const F=$.map(z=>a.findIndex(Q=>z[0]===Q[0]&&z[1]===Q[1])).filter(z=>z!==-1);if(F.length){const z=F.map(Q=>`dpath_es[${Q+1}]`).join(",");o+=`constraint sum([${z}]) <= 1;
`}}}return o}function XU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function qU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function ZU(t,e){let n="";return n+=`constraint connect_four_draw_p(${K.CONNECT_FOUR});
`,n}function QU(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${K.BOARD}, ${K.CONNECT_FOUR});
`,n}function JU(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${K.BOARD}, ${K.CONNECT_FOUR}, 3);
`,n}const e$=new Map([[d.FILLOMINO,NU],[d.CAVE,DU],[d.GALAXIES,GU],[d.YIN_YANG,hU],[d.SHIKAKU,RU],[d.SHIKAKU_NO_REPEATS_IN_REGION,TU],[d.NORINORI,PU],[d.NURIMISAKI,pU],[d.NURIKABE,vU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,mU],[d.TWO_CONTIGUOUS_REGIONS,EU],[d.CHAOS_CONSTRUCTION,CU],[d.NUMBERED_CHAOS_CONSTRUCTION,OU],[d.SASHIGANE,IU],[d.CELL_CENTER_LOOP_NO_TOUCHING,bU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,wU],[d.NOT_LOOP_SIZED_REGIONS,yU],[d.MODULAR_LOOP,LU],[d.DOUBLERS,AU],[d.NEGATORS,SU],[d.GOLDILOCKS_ZONE,UU],[d.NEXUS,MU],[d.INDEXER_CELLS,xU],[d.PENTOMINO_TILLING,$U],[d.LITS,FU],[d.CAVE_LITS,HU],[d.LITS_BLACK_WHITE_STAR_BATTLE,BU],[d.NORINORI_STAR_BATTLE,WU],[d.RENBAN_CAVES,kU],[d.MAZE_DIRECTED_PATH,VU],[d.CHAOS_CONSTRUCTION_SUGURU,XU],[d.CONNECT_FOUR,qU],[d.CONNECT_FOUR_DRAW,ZU],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,QU],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,JU]]);function t$(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=e$.get(i);if(!a)continue;let c=a(t,i);c=dt(c,`${i}`),e+=c}return e}function n$(){return`
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

`}function r$(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${we(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function iv(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new QD(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(n$());let f=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?f=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...Lt.range(1,16)]:r&&(f="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${f};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),ek(i,n),i.add(r$(t)),i.add(qk(t)),i.add(Zk(t)),i.add(t$(i)),i.add(gU(t,i)),i.add(Jk(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const sh=encodeURIComponent("4.4.2");let vr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Si=[];let _u;function ds(){if(!_u){const e=`importScripts(${JSON.stringify(vr.workerURL)});`;_u=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(_u);t.postMessage({wasmURL:vr.wasmURL?vr.wasmURL.toString():new URL(`./minizinc.wasm?version=${sh}`,vr.workerURL).toString(),dataURL:vr.dataURL?vr.dataURL.toString():new URL(`./minizinc.data?version=${sh}`,vr.workerURL).toString()}),Si.push({worker:t,runCount:0})}function ov(){for(;Si.length<vr.numWorkers;)ds()}async function i$(t){if(vr={...vr,...t},Si.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");ov(),await Promise.race(Si.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Kd{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Kd;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){ov();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Si.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Si.push({worker:o,runCount:a}):(o.terminate(),ds()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=f=>{switch(f.data.type){case"error":c.push(f.data);break;case"interface":u=f.data;break;case"exit":a<10?Si.push({worker:o,runCount:a}):(o.terminate(),ds()),f.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);ds();let c={},u=!1,f=null;return a.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":f||(f=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const p=m=>{if(m.code===0)v(m.outputFiles[i]);else{const E=f?{message:f.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(p):c.exit=new Set([p])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);ds();let o=null,a={},c=!1,u=null,f={},v="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const p of a[g.data.type])p(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":f={...f,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,p){a[g]?a[g].add(p):a[g]=new Set([p])},off(g,p){a[g]&&a[g].delete(p)},then(g,p){const m=E=>{if(E.code===0)g({status:v,solution:u,statistics:f});else{const I=o?{message:o.message,...E}:E;if(!p)throw I;p(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var o$=ue('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function s$(t,e){ae(e,!1);const n=Ve(),r=()=>me(Br,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function o(g,p,m){var E=document.createElement("a"),I=new Blob([g],{type:m});E.href=URL.createObjectURL(I),E.download=p,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=st(Us);return iv(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),p=rh(g);navigator.clipboard.writeText(p)}function f(){const g=Za(r()),p=a();o(p,`${g}.mzn`,"text/plain")}function v(){const g=Za(r()),p=a(),m=rh(p);o(m,`${g}.mzn`,"text/plain")}fe(),zr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,p)=>{var m=o$(),E=V(m),I=M(E,2),O=M(I,2),b=M(O,2),A=M(b,2),k=M(V(A));L(k,"href","https://play.minizinc.dev/"),Ni(),j(A),j(m),Ge("click",E,c),Ge("click",I,u),Ge("click",O,f),Ge("click",b,v),T(g,m)},$$slots:{default:!0},$$legacy:!0}),le()}var Fn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Fn||{});const a$=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),sv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),l$=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),c$=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),u$=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),d$=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),_$=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),f$=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),fu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),g$=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),gu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Dl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function h$(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=a$(t,n),o=sv(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=l$(t,n),a=c$(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=u$(t,n),o=d$(t,r);return[i,o]}if(e===d.FOG){const r=t.map(c=>c.fog),o=_$(t,n===1),a=f$(t,r);return[o,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=gu(t,n),i=gu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=gu(t,n),o=Dl(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=fu(t,n,e),i=fu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=fu(t,n,e),o=g$(t,r,e);return[i,o]}}function is(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),mn.update(i=>i)}function go(t){switch(t.type){case Fn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;is(e,d.DIGIT,n,!0);break}case Fn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;is(e,d.GIVEN,n,!0);break}case Fn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;is(e,d.REGIONS,n,!0);break}case Fn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;is(e,d.HIGHLIGHTS,n,!0);break}case Fn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;is(e,r,n,!0);break}case Fn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];mn.update(r=>r);break}case Fn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];mn.update(i=>i);break}case Fn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];mn.update(r=>r);break}case Fn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];mn.update(r=>r);break}case Fn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);mn.update(i=>i);break}case Fn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),mn.update(r=>r);break}case Fn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];mn.update(r=>r);break}}}function p$(t,e){return{execute:()=>{go(t)},unExecute:()=>{go(e)}}}function Go(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(f),i.push([g]))}}const o=Dl(r,i);go(o)}function v$(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let p=0;p<e;p++)for(let m=0;m<n;m++)if(!r[p][m]){const E=[];i.push(E),a(p,m,t[p][m])}function a(p,m,E){p<0||p>=e||m<0||m>=n||r[p][m]||t[p][m]!==E||(r[p][m]=!0,i[i.length-1].push([p,m]),a(p+1,m,E),a(p-1,m,E),a(p,m+1,E),a(p,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(p,m){for(const[E,I]of p)for(const[O,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+O,k=I+b;if(m.some(([G,H])=>G===A&&H===k))return!0}return!1}for(let p=0;p<i.length;p++)for(let m=p+1;m<i.length;m++)u(i[p],i[m])&&(c[p].add(m),c[m].add(p));const f=[1,4,7,9],v=new Array(i.length).fill(0);function g(p,m){for(const E of c[p])if(v[E]===m)return!1;return!0}for(let p=0;p<i.length;p++)for(const m of f)if(g(p,m)){v[p]=m;break}for(let p=0;p<i.length;p++)for(const[m,E]of i[p])o[m][E]=v[p];return o}function m$(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const f=i[u];for(let v=0;v<f.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const p=f[v];o.push(g),a.push(p)}}const c=sv(o,a);go(c)}function E$(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Go(o,e,r);return}}}function C$(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Go(o,e,r);return}}}function O$(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;r.push(f);const v=c[u];i.push([v])}}const o=Dl(r,i);go(o)}function I$(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Go(n,e,new Map([[0,4],[1,7],[2,9]]))}function b$(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Go(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function w$(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Go(n,e,new Map([[1,7],[2,4],[3,9]]))}function y$(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Go(n,e,new Map([[1,7],[2,8]]))}function L$(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<i.length;v++){const g=i[v];for(let p=0;p<g.length-1;p++){const m=e.getCell(v,p),E=e.getCell(v,p+1);if(!m||!E)continue;const I=g[p],O=g[p+1];if(I===O)continue;const b={colorId:c,p1:{r:v,c:p+1},p2:{r:v+1,c:p+1}};u.push(b)}}for(let v=0;v<a;v++)for(let g=0;g<o-1;g++){const p=e.getCell(g,v),m=e.getCell(g+1,v);if(!p||!m)continue;const E=i[g][v],I=i[g+1][v];if(E===I)continue;const O={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(O)}const f=Is(u);Cr(f);return}}function A$(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const v=e.getCell(c,f);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const p=i[v.r][v.c],m=i[g.r][g.c];if(!(p===1&&m===1))continue;const E={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const a=Is(o);Cr(a);return}}function S$(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=v$(i);if(!o)return;const a=[],c=[];for(let f=0;f<o.length;f++){const v=o[f];for(let g=0;g<v.length;g++){const p=e.getCell(f,g);if(!p)continue;a.push(p);const m=v[g];c.push([m])}}const u=Dl(a,c);go(u);return}}function N$(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const v=e.getCell(c,f);if(!v)continue;const g=i[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};o.push(m)}}const a=bT(o);Cr(a);return}}function x$(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const f=r[c],[v,g]=f,[p,m]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols],[E,I]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!Ts({r:p,c:m},{r:E,c:I}))continue;const A={colorId:4,p1:{r:p+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(A)}const a=Is(o);Cr(a)}function R$(t,e){const n=e.puzzle,r=n.grid;Cr(Ld()),m$(t,n),O$(t,r),L$(t,r),I$(t,r),b$(t,r),A$(t,r),C$(t,r),S$(t,r),E$(t,r),N$(t,r),w$(t,r),x$(t,e),y$(t,r)}function T$(){const{subscribe:t,set:e}=$t(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var D$=ue('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function k$(t,e){ae(e,!1);const n=Ve(),r=()=>me(Us,"$puzzleStore",n),i=()=>me(yn,"$gridStore",n),o=()=>me(b,"$timer",n),a=N(),c=N(),u=N(),f=N();let v=N(!0),g=N(!1),p=N(null),m=N(100),E=N("100"),I=N(null),O=N("IDLE");const b=T$();function A(z){return z===null?"":String(z)}function k(z){const Q=Math.floor(z/6e4),ce=Math.floor(z%6e4/1e3),Z=Math.floor(z%1e3/100),ne=ce.toString().padStart(2,"0");return`${Q}:${ne}.${Z}`}function G(){y(g,!0)}function H(z){const Q=parseInt(z);typeof Q=="number"&&Q>=1&&y(m,Q)}async function $(){y(I,0),y(O,"SOLVING...");const z=new Kd;Gp();const Q=iv(_(a));z.addFile("test.mzn",Q.model_str),b.reset(),b.start(),y(p,z.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(p).on("solution",ce=>{const Z=ce.output.json;ce.type==="solution"&&_(I)!==null&&y(I,_(I)+1),R$(Z,Q)}),_(p).on("error",ce=>{y(u,"Solve"),y(O,"ERROR"),console.log(ce.message),b.stop(),_(p)&&_(p).cancel()}),_(p).on("warning",ce=>{y(O,"WARNING"),console.log(ce.message)}),_(p).then(ce=>{y(O,ce.status),y(u,"Solve"),b.stop()})}function F(){_(p)===null||!_(p).isRunning()?$():_(p)!==null&&_(p).isRunning()&&(y(O,"IDLE"),y(u,"Solve"),b.stop(),_(p).cancel())}D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i())}),D(()=>{},()=>{y(u,"Solve")}),D(()=>o(),()=>{y(f,o())}),D(()=>_(p),()=>{_(p)&&(_(p)!==null&&_(p).isRunning()?y(u,"Stop"):y(u,"Solve"))}),Ie(),fe(),yl(t,{get isOpen(){return _(v)},set isOpen(z){y(v,z)},$$slots:{"panel-header":(z,Q)=>{wl(z,{slot:"panel-header",title:"Solver",get isOpen(){return _(v)},set isOpen(ce){y(v,ce)},$$legacy:!0})},"panel-content":(z,Q)=>{var ce=D$(),Z=se(ce),ne=M(Z,2);s$(ne,{get showModal(){return _(g)},set showModal(Dt){y(g,Dt)},$$legacy:!0});var pe=M(ne,2),Ee=V(pe,!0);j(pe);var ye=M(pe,2),Re=V(ye,!0);j(ye);var Ue=M(ye,2),xe=V(Ue);sn(xe),L(xe,"min",1),L(xe,"max",200),L(xe,"step",1),j(Ue);var Ce=M(Ue,2),rt=V(Ce,!0);te(()=>tt(rt,`Solution Count: ${A(_(I))}`)),j(Ce);var $e=M(Ce,2),At=V($e,!0);te(()=>tt(At,`Elapsed Time: ${k(_(f))}`)),j($e);var Tt=M($e,2),ln=V(Tt,!0);j(Tt),te(()=>{tt(Ee,_(u)),tt(Re,`Max. Solutions: ${_(m)}`),tt(ln,`Status: ${_(O)}`)}),Ge("click",Z,G),Ge("click",pe,F),Jn(xe,()=>_(E),Dt=>y(E,Dt)),Ge("input",xe,()=>H(_(E))),T(z,ce)}},$$legacy:!0}),le()}var G$=ue('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function M$(t){var e=G$(),n=V(e),r=V(n);WD(r);var i=M(r,2);k$(i,{});var o=M(i,2);y2(o,{elementHandlers:yt});var a=M(o,2);x2(a,{elementHandlers:yt});var c=M(a,2);v2(c,{elementHandlers:yt});var u=M(c,2);eD(u,{elementHandlers:yt});var f=M(u,2);YD(f,{}),j(n),j(e),T(t,e)}class Ne{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ne(this.x+e.x,this.y+e.y)}subtract(e){return new Ne(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ne(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ne(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function av(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const wn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ne(i.x,i.y)};function Pa(t,e){const n=ml(t),r=new Ne(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function U$(t,e){const n=ml(t),r=new Ne(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Ha(t,e){const n=ml(t),r=Dx(n),o=r.map(f=>new Ne(f.c,f.r)).map(f=>f.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function Ba(t,e){const n=ml(t),r=kx(n),o=r.map(f=>new Ne(f.c,f.r)).map(f=>f.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function gs(t,e,n){const r=Pa(t);if(!r)return null;const i=Ba(t);if(!i)return null;const o=Ha(t);if(!o)return null;const a=U$(t);if(!a)return null;let c,u;e===wt.CORNER?(c=o.corner,u="corner"):e===wt.EDGE?(c=i.edge,u="edge"):e===wt.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===wt.CORNER_OR_EDGE?o.dist<i.dist?(c=o.corner,u="corner"):(c=i.edge,u="edge"):e===wt.CORNER_OR_CENTER?o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===wt.EDGE_OR_CENTER?i.dist<a.dist?(c=i.edge,u="edge"):(c=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(c=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center");const v=new Ne(c.c,c.r).subtract(t).length(),g=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:v,closest:c,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:g}}class Mo{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=wn(e,n);if(!i)return;this._prevPoint=i;const o=r?void 0:this._margin,a=Pa(i,o);if(!a)return;const c=a.cell;this._prevCell=c,this._lastPointerDownTime=e.timeStamp;const u={event:e,cell:c,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(u)}pointerMove(e,n){if(!this._isDown)return;const r=wn(e,n);if(!r)return;const i=Pa(r,this._margin);if(!i)return;const o=i.cell;if(this._prevCell&&je(this._prevCell,o))return;this._prevCell=o,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:o,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=wn(e,n);if(!r)return;const i=Pa(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function ah(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function $$(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function lh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function ch(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function F$(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?ah(i,e):i.value!==null?$$(i,e):n===d.CORNER_PM&&i.cornerMarks.length?lh(i,e):n===d.CENTER_PM&&i.centerMarks.length?ch(i,e):i.cornerMarks.length?lh(i,e):i.centerMarks.length?ch(i,e):i.highlights.length?ah(i,e):r:r}function gi(t,e,n,r=!1){if(!(t&&e))return;const i=xd(t,e),o=Rd(t,n),a=$s(i,o);vn(a,r)}function Pi(t,e,n,r=!0){if(!(t&&e))return;const i=Rd(t,n),o=xd(t,e),a=$s(i,o);vn(a,r)}function Pu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Jg(r,t,n),a=Jg(r,t,e),c=$s(o,a);vn(c,i)}function P$(t,e,n,r){const i=new Mo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,f=!1,v=!1,g;(I=>{I.DYNAMIC="DYNAMIC",I.BULB="BULB",I.BODY="BODY"})(g||(g={}));let p="DYNAMIC";function m(I){f=!1;const O=I.cell;if(Wt(I.cell,o)){if(p==="DYNAMIC"){const A=st(mt),k=rT(A,n,O);if(k){const H=$R(k.arrow,k.matchLineIdx);Pu(k.id,k.arrow,H,n,!0),v=!0;return}const G=Yg(A,n,O);if(!G)f=!0,p="BULB",u=null,a=null;else{p="BODY",u=G[0],a=G[1],a=xu(a,O),Xt(n,u,a);return}}if(p==="BULB"&&!u){u=Lt.uniqueId(),a=Op(n,[O]),fi(u,a);return}else p==="BULB"&&u&&a?(a=kR(a,O),Xt(n,u,a)):p==="BODY"&&u&&a&&(a=GR(a,O,r==null?void 0:r.allowSelfIntersection),Xt(n,u,a))}}return i.onDragStart=I=>{p="DYNAMIC",m(I)},i.onDrag=I=>{m(I)},i.onDragEnd=()=>{if(v){v=!1;return}p==="BODY"&&u&&a?MR(a)?(a=UR(a),Xt(n,u,a)):(Pu(u,c,a,n),c=a):p==="BULB"&&(gi(u,a,n),c=a),p="DYNAMIC"},i.onTap=I=>{if(f)return;const O=I.cell,b=st(mt);if(Yg(b,n,O)){Pi(u,a,n);return}},{pointerDown:I=>{I.button===0&&i.pointerDown(I,t)},pointerMove:I=>{i.pointerMove(I,t)},pointerUp:I=>{i.pointerUp(I,t)},keyDown:()=>{},keyUp:()=>{}}}function H$(t,e,n,r){const i=new Mo,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function f(g){if(!u||!c)throw"UNREACHABLE";const p=g.cell;Wt(g.cell,o)&&(c=DR(c,p,a),Xt(n,u,c))}return i.onDragStart=g=>{u=Lt.uniqueId(),c=Ep(n,[],r==null?void 0:r.defaultValue),fi(u,c),f(g)},i.onDrag=g=>{f(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?ki(n,u):u&&c&&gi(u,c,n,!1),u=null},i.onTap=g=>{const p=g.cell,m=st(mt),E=nT(m,n,p);if(E){const[I,O]=E;Pi(I,O,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function B$(t,e,n,r){const i=new Mo,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=st(mt),m=g.cell;if(!Wt(g.cell,o))return;const I=Xa(p,n,m);if(c===0&&(c=I?2:1),!(r!=null&&r.oppositeConstraintId&&Xa(p,r.oppositeConstraintId,m))){if(I&&c===2){const[O,b]=I;Pi(O,b,n)}else if(c===1){const O=wp(n,m,r==null?void 0:r.defaultValue),b=Lt.uniqueId();gi(b,O,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)};function f(g){const p=st(jt);if(!p)return;let m=p.constraint;const E=p.id;if(m.value===void 0||!Oo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Ms(m,I),Xt(n,E,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}class kl{constructor(e){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"feature");ve(this,"_prevCoord",null);ve(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=wn(e,n);if(!r)return;const i=gs(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=gs(r,this.feature);if(!i||this._prevCoord&&je(i.closest,this._prevCoord)&&this._prevCellCoord&&je(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function W$(t,e,n,r){const i=(r==null?void 0:r.targets)??wt.CLOSEST,o=new kl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(p){const m=st(mt),E=p.cell,I=p.closest;if(!Wt(E,a))return;const b=oT(m,n,I);if(b){ki(n,b);return}c=yp(n,I,""),u=Lt.uniqueId(),fi(u,c)}function v(p){const m=st(jt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!Oo(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(E==null?void 0:E.value,p.key);O!==void 0&&O!==E.value&&(E=Ms(E,O),Xt(n,I,E))}return o.onDragStart=p=>{f(p)},{pointerDown:p=>{p.button===0&&o.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{v(p)},keyUp:()=>{}}}function z$(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??wt.CORNER_OR_EDGE,o=new kl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(p){const m=st(mt),E=p.cell,I=p.direction,O=Os(I);if(Wt(E,a))return;const A=ap(E,O);if(!Wt(A,a))return;const G=iT(m,n,E,O);if(G){ki(n,G);return}c=bp(n,E,O,""),u=Lt.uniqueId(),fi(u,c)}function v(p){const m=st(jt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!Oo(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(E==null?void 0:E.value,p.key);O!==void 0&&O!==E.value&&(E=Ms(E,O),Xt(n,I,E))}return o.onDragStart=p=>{f(p)},{pointerDown:p=>{p.button===0&&o.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{v(p)},keyUp:()=>{}}}function Y$(t,e,n,r){const i=new Mo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function v(m){const E=st(mt),I=m.cell;if(Wt(m.cell,o)){if(m.event.shiftKey){const b=zg(E,n,I);b&&(c=b[0],a=b[1],Do({id:c,constraint:a}),f=1)}if(f===0){const b=zg(E,n,I);if(f=b?2:1,b){Pi(b[0],b[1],n);return}}if(!a&&f===1){a=Ip(n,[I]),c=Lt.uniqueId(),fi(c,a);return}else if(a&&c&&f===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=PR(a,I,b),Xt(n,c,a);return}}}function g(m){const E=st(jt);if(!E)return;let I=E.constraint;const O=E.id;if(I.value===void 0||!Oo(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(I==null?void 0:I.value,m.key);b!==void 0&&b!==I.value&&(I=HR(I,b),Xt(n,O,I))}return i.onDragStart=m=>{c=null,a=null,f=0,v(m)},i.onDrag=m=>{v(m)},i.onDragEnd=()=>{c&&a&&gi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const oo=new Mo;function uh(t,e){return t.shiftKey?us.SELECTING:t.ctrlKey||t.metaKey||e?us.DYNAMIC:t.altKey?us.DESELECTING:us.RESETTING}function bs(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const o=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===o||n==="different"&&c.fog!==o)}}return t}function j$(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=bs(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function hs(t,e,n,r){const i=h$(e,n,r);if(i){const o=i[0],a=i[1],c=p$(o,a),u=Mu(t),v=[ST(u,u),c];AT(v)}}function K$(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=bs(e,r,"any",-1,!1);if(i.length)return hs(n,i,r,t),!0}else{const i=bs(e,r,"different",t,!0);if(i.length)return hs(n,i,r,t),!0}return!1}function V$(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};oo.onTap=m=>{if(m.tapCount!==2)return;const I=Wt(m.cell,i)?m.cell:null;if(!I)return;const O=F$(I,e,n),b=Mu(O);so(b)},oo.onDragStart=m=>{const E=Wt(m.cell,i),I=st(Uu),O=uh(m.event,I),b=E?m.cell:null,A=gT(b,O);so(A)},oo.onDrag=m=>{const I=Wt(m.cell,i)?m.cell:null,O=pT(I);so(O)};function o(m){if(!Ew(m))return!1;const E=e.getAllCells().map(O=>({r:O.r,c:O.c})),I=Mu(E);return so(I),!0}function a(m){if(!ww(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=Lw(m);return Mr(E),!0}return m.type==="keyup"?(xT(),!0):!1}function c(m){if(!bw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Mr(I),$u(I),!0}else{const E=yw(m.code);return Mr(E),$u(E),!0}}function u(m){if(!Sw(m))return!1;const E=st(Di).lastCell;let I=null;if(E!==null){const[A,k]=Nw(m),[G,H]=[jg(E.r+k,0,i.nRows-1),jg(E.c+A,0,i.nCols-1)];I={r:G,c:H}}else I={r:0,c:0};const O=uh(m,!1),b=vT(I,O);return so(b),!0}function f(m){const E=Iw(m);if(E===void 0)return!1;const I=st(Di).cells,O=[];if(I.forEach(b=>{const A=e.getCell(b.r,b.c);A&&O.push(A)}),n===d.FOG)return K$(E,O,I);if(E===null){const{tool:b,cells:A}=j$(O,n);if(A.length)return hs(I,A,b,E),!0}else{let b=bs(O,n,"different",E,!0);if(b.length)return hs(I,b,n,E),!0;if(b=bs(O,n,"equal",E,!0),b.length)return hs(I,b,n,E),!0}return!1}function v(m){return m.repeat?!1:f(m.key)}const g=Lt.throttle(m=>{oo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&oo.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){oo.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||v(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){f(m.currentTarget.value)}}}function Or(t){return po(mt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,element:o});return r})}const Vd=Or(Vb),X$=po(Vd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),q$=po(Vd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),Z$=Or(_l),Q$=Or(Hh),J$=Or(_d),eF=Or(fd),tF=Or(Bh),nF=Or(gd),rF=Or(hd),iF=Or(Wh),oF=Or(Cs),Hu=$t(void 0),Bu=$t(void 0),Wu=$t(void 0),zu=$t(void 0);function sF(t,e,n,r){const i=[Pe.N,Pe.NE,Pe.E,Pe.SE,Pe.S,Pe.SW,Pe.W,Pe.NW],o=new kl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,f;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(f||(f={}));let v=0;function g(E){const I=st(mt),O=E.cell;if(!Wt(E.cell,a))return;E.event.altKey&&(v=2);const A=Xa(I,n,O),k=Os(E.direction);if(A){[u,c]=A,c.direction===k||v===2?Pi(u,c,n):(c={...c,direction:k},Xt(n,u,c));return}else v!==2&&(c=Du(n,O,k),u=Lt.uniqueId(),gi(u,c,n,!0))}function p(E){if(!c||!u||!Cw(E))return;const O=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[O]},Xt(n,u,c)}return o.onDragStart=E=>{v=0,g(E)},o.onMove=E=>{if(!Wt(E.cell,a)){Hu.set(void 0);return}const O=Os(E.direction),b=Du(n,E.cell,O);Hu.set(b)},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:E=>{o.pointerMove(E,t)},pointerUp:()=>{},keyDown:E=>{p(E)},keyUp:()=>{}}}function aF(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function lF(t,e,n,r){const i=new kl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function v(p){const m=st(mt),E=p.cell;if(!Wt(p.cell,o))return;p.event.altKey&&(f=2);const O=Os(p.direction),b=Xa(m,n,E);if(b){if(c=b[0],a=b[1],f===2)ki(n,b[0]);else{const A=aF(a.directions,O);A.length?(a={...a,directions:A},Xt(n,c,a)):ki(n,c)}return}else f!==2&&(a=ku(n,E,O),c=Lt.uniqueId(),fi(c,a))}return i.onDragStart=p=>{f=0,v(p)},i.onMove=p=>{if(!Wt(p.cell,o)){Bu.set(void 0);return}const E=Os(p.direction),I=ku(n,p.cell,E);Bu.set(I)},{pointerDown:p=>{p.button===0&&i.pointerDown(p,t)},pointerMove:p=>{i.pointerMove(p,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class cF{constructor(){ve(this,"onDragStart",null);ve(this,"onMove",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const i=Ba(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=Ba(r,this._margin);if(!i||this._prevCoord&&je(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=wn(e,n);if(!r)return;const i=Ba(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function uF(t,e,n,r){const i=new cF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=st(mt),m=g.coord,E=Ka(m);if(!E.every(b=>Wt(b,o)))return;let O=null;if(c===0&&(O=eT(p,n,E),c=O?2:1),O&&c===2){const b=O[0];Pi(b,O[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",A=Tu(n,E,b),k=Lt.uniqueId();gi(k,A,n,!0)}}function f(g){const p=st(jt);if(!p)return;let m=p.constraint;const E=p.id;if(m.value===void 0||!Oo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Ms(m,I),Xt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},i.onMove=g=>{if(!Wt(g.coord,o)){Wu.set(void 0);return}const m=Ka(g.coord),E=(r==null?void 0:r.defaultValue)??"",I=Tu(n,m,E),O=st(Ol);O&&(I.shape={...O}),Wu.set(I)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}class dF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=Ha(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=Ha(r,this._margin);if(!i||this._prevCoord&&je(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=wn(e,n);if(!r)return;const i=Ha(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function _F(t,e,n,r){const i=new dF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=st(mt),m=g.coord,E=ja(m);if(!E.every(b=>Wt(b,o)))return;let O=null;if(c===0&&(O=tT(p,n,m),c=O?2:1),O&&c===2){const b=O[0];Pi(b,O[1],n);return}else if(c===1){const b=Ru(n,E,r==null?void 0:r.defaultValue),A=Lt.uniqueId();gi(A,b,n,!0)}}function f(g){const p=st(jt);if(!p)return;let m=p.constraint;const E=p.id;if(m.value===void 0||!Oo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Ms(m,I),Xt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},i.onMove=g=>{if(!Wt(g.coord,o)){zu.set(void 0);return}const m=ja(g.coord),E=Ru(n,m,r==null?void 0:r.defaultValue),I=st(Ol);I&&(E.shape={...I}),zu.set(E)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}class fF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const i=gs(r,wt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=wn(e,n);if(!r)return;const i=gs(r,wt.CLOSEST);if(!i||this._prevCoords&&je(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&xp(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=wn(e,n);if(!r)return;const i=gs(r,wt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&je(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function gF(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new fF;return r.onTap=o=>{const a=o.coords,c=st(Ja),u=st(Qa);if(o.type==="cell center"){if(!Rx(a,n))return;const v=u.getCellMarker(a);if(v)if(v.marker==="X"){const g={...a,colorId:c,marker:"O"},p=Ma(g),m=Ma(v),E=yi(p,m);vn(E)}else{const g=qg(a),p=Ma(v),m=yi(g,p);vn(m)}else{const g={...a,colorId:c,marker:"X"},p=Ma(g),m=qg(a),E=yi(p,m);vn(E)}}else if(o.type==="edge"){const f=u.getEdgeMarker(a);if(f){const v=Xg(a),g=Vg(f),p=yi(v,g);vn(p)}else{const v={...a,colorId:c},g=Vg(v),p=Xg(a),m=yi(g,p);vn(m)}}},r.onDrag=o=>{const a=o.coords,c=st(Ja);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},f=wT(u);Cr(f)}},r.onDragEnd=()=>{const o=st(Qa);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>lo(c,u)));if(a.length){const c=Is(a),u=Zg(a),f=yi(c,u);vn(f)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>lo(c,u)));if(a.length){const c=Zg(a),u=Is(a),f=yi(c,u);vn(f)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function hF(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function pF(t,e){const n=lp(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function vF(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function mF(t){for(let e=0;;e++){const n=vF(e);if(!t.has(n))return n}}function EF(t,e,n){const r=new Mo,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,f="cells2",v;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(v||(v={}));let g=0;function p(E){const I=st(mt),O=E.cell;if(!Wt(E.cell,i))return;const A=sT(I,n,O);if(g===0&&(A?(c=A[0],o=A[1],g=2,u=O,f=o.cells2.some(G=>je(G,O))?"cells2":"cells"):g=1),g===1&&c===null){c=Lt.uniqueId();const k=aT(I,n),G=mF(k);o=hF(n,[O],G),fi(c,o);return}else if(g===1&&c&&o){o=pF(o,O),Xt(n,c,o);return}else if(g===2&&c&&o&&u){const k={r:O.r-u.r,c:O.c-u.c},H=(f==="cells2"?o.cells2:o.cells).map(F=>({r:F.r+k.r,c:F.c+k.c}));if(!H.every(F=>Wt(F,i)))return;f==="cells"?o={...o,cells:H}:o={...o,cells2:H},u=O,Xt(n,c,o)}}return r.onDragStart=E=>{c=null,o=null,g=0,u=null,p(E)},r.onDrag=E=>{p(E)},r.onDragEnd=()=>{c&&o&&(g===1?gi(c,o,n):g===2&&Pu(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(ki(n,c),c=null,o=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function CF(t){if(t.type===he.SELECTION)return function(n,r,i){return V$(n,r,i)};if(t.type===he.SINGLE_CELL){let e=function(r,i,o){return B$(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_ARROW){let e=function(r,i,o){return sF(r,i,o,n)};const n=t;return e}else if(t.type===he.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return lF(r,i,o,n)};const n=t;return e}else if(t.type===he.EDGE){let e=function(r,i,o){return uF(r,i,o,n)};const n=t;return e}else if(t.type===he.CORNER){let e=function(r,i,o){return _F(r,i,o,n)};const n=t;return e}else if(t.type===he.LINE){let e=function(r,i,o){return H$(r,i,o,n)};const n=t;return e}else if(t.type===he.ARROW){let e=function(r,i,o){return P$(r,i,o,n)};const n=t;return e}else if(t.type===he.CAGE){let e=function(r,i,o){return Y$(r,i,o,n)};const n=t;return e}else{if(t.type===he.CLONE)return function(n,r,i){return EF(n,r,i)};if(t.type===he.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return W$(r,i,o,n)};const n=t;return e}else if(t.type===he.OUTSIDE_DIRECTION){let e=function(r,i,o){return z$(r,i,o,n)};const n=t;return e}else if(t.type===he.PEN)return function(n,r){return gF(n,r)}}}const lv=po([_o,yn,an],([t,e,n])=>{const r=Ti(n,yt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?CF(i):void 0;return o?o(t,e,n):void 0});var OF=ie('<path class="cursor svelte-zsq70u"></path>');function IF(t,e){ae(e,!1);const n=Ve(),r=()=>me(an,"$toolStore",n),i=()=>me(Di,"$selectionStore",n),o=N(),a=N(),c=.25;function u(v){if(!v)return"";const[g,p]=[v.c,v.r];return`M${g},${p}L${g+c},${p}L${g},${p+c}Z`}D(()=>r(),()=>{y(o,pd(r()))}),D(()=>i(),()=>{y(a,u(i().lastCell))}),Ie(),fe();var f=OF();te(()=>{L(f,"d",_(a)),L(f,"visibility",_(o)?"visible":"hidden")}),T(t,f),le()}var bF=ie('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function wF(t,e){ae(e,!1);let n=U(e,"gridShape",8);fe();var r=bF(),i=V(r);L(i,"x",0),L(i,"y",0),j(r),te(()=>{L(i,"width",n().nCols),L(i,"height",n().nRows)}),T(t,r),le()}var yF=ie('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),LF=ie('<g class="grid-lines"></g>');function AF(t,e){ae(e,!1);const n=Ve(),r=()=>me(yn,"$gridStore",n),i=N();D(()=>r(),()=>{y(i,r().getAllCells())}),Ie(),fe();var o=LF();lt(o,5,()=>_(i),Ot,(a,c)=>{var u=yF();L(u,"width",1),L(u,"height",1),te(()=>{L(u,"x",_(c).c),L(u,"y",_(c).r)}),T(a,u)}),j(o),T(t,o),le()}function SF(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function NF(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=SF(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],f=JSON.stringify(c),v=JSON.stringify(u);n(f,v)}}return e}function xF(t,e=0,n=!1){const r=[],i=NF(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let f=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),p=v;const m=[];do{const E=i.get(p);if(E===void 0)throw new Error(`Corner with no adjacencies found ${p}`);const I=new Ne(f.c,f.r),O=new Ne(g.c,g.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,k=null;for(const ne of E){const pe=JSON.parse(ne),Ee=new Ne(pe.c,pe.r),ye=O.subtract(I),Re=Ee.subtract(O),Ue=ye.perpDotProduct(Re);b<Ue!=n&&(b=Ue,k=pe,A=ne)}if(n&&E.size>1&&o.add(p),k===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(p);const G=e*(g.c-f.c),H=e*(k.c-g.c),$=e*(f.r-g.r),F=e*(g.r-k.r),z=F+b*H,Q=G+b*$,ce=new Ne(g.c+z,g.r+Q),Z=4;o.has(p)?(m.push(new Ne(ce.x-Z*G,ce.y-Z*H)),m.push(new Ne(ce.x-Z*$,ce.y-Z*F))):m.push(ce),f=g,g=k,p=A}while(p!==v);r.push(m)}return r}function ho(t,e=0,n=!1){return xF(t,e,n).map(o=>Uo(o,!0)).join("")}const RF=[new Ne(-.5,-.5),new Ne(.5,-.5),new Ne(.5,.5),new Ne(-.5,.5)];function TF(t,e,n=RF){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,f=c/(360/i),v=u/(360/i),g=Math.floor(f)%i,p=Math.ceil(f)%i,m=n[g].lerp(n[p],f%1),E=Math.floor(v)%i,I=Math.ceil(v)%i,O=n[E].lerp(n[I],v%1);r.push(m);for(let A=Math.ceil(f);A<=Math.floor(v);A++)r.push(n[A%i]);r.push(O);const b=new Ne(0,0);return r.push(b),r}function cv(t,e,n=new Ne(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const f=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),v=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Ne(f,v));c.push(g)}return c}function Uo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function li(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(v=>new Ne(v.x,v.y));if(r&&o.length>1){const v=o[o.length-1];for(let p=0;p<o.length-1;p++)if(v.equals(o[p])){o.push(o[p+1]);break}const g=o[0];for(let p=1;p<o.length;p++)if(g.equals(o[p])){o.unshift(o[p-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let v=o[1].subtract(o[0]);v=v.normalise(),v=v.scale(e),o[0]=o[0].add(v)}if(n){const v=o.length;let g=o[v-2].subtract(o[v-1]);g=g.normalise(),g=g.scale(n),o[v-1]=o[v-1].add(g)}}if(!i)return Uo(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let v=2;v<u;v++){const g=o[v-2],p=o[v-1],m=o[v];let E=g.subtract(p).normalise();E=E.scale(i),E=E.add(p);let I=m.subtract(p).normalise();I=I.scale(i),I=I.add(p),c.push(`L${E.x},${E.y} Q ${p.x},${p.y} ${I.x},${I.y}`)}const f=o[u-1];return c.push(`L${f.x},${f.y}`),c.join(" ")}function nl(t,e={}){const n=ws(t);return li(n,e)}function Ln(t){return new Ne(t.c+.5,t.r+.5)}function ws(t){return t.map(n=>Ln(n))}const DF=[new Ne(-.5,-.5),new Ne(.5,-.5),new Ne(.5,.5),new Ne(-.5,.5),new Ne(0,-.5),new Ne(0,.5),new Ne(-.5,0),new Ne(.5,0)];function kF(t,e){const n=DF[t];return n.subtract(n.scale(e))}function uv(t,e){const n=[new Ne(t.c-e,t.r-e),new Ne(t.c+e,t.r+e)],r=[new Ne(t.c-e,t.r+e),new Ne(t.c+e,t.r-e)];return[n,r].map(o=>Uo(o,!1)).join("")}const GF=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Gl(t,e="none"){return GF.get(t)||e}function MF(t,e,n){let r=[];function o(c,u){return c.map(f=>f.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Ne(-.12,-.32),new Ne(0,-.4),new Ne(.12,-.32)]:a=[new Ne(-.12,-.4),new Ne(0,-.32),new Ne(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const f=new Ne(n+.5,e+.5);return u.add(f)})),r}function Xd(t,e){const n=[new Ne(-t,0),new Ne(0,0),new Ne(0,t)],i={[Pe.NE]:0,[Pe.E]:Math.PI/4,[Pe.SE]:Math.PI/2,[Pe.S]:3*Math.PI/4,[Pe.SW]:Math.PI,[Pe.W]:5*Math.PI/4,[Pe.NW]:3*Math.PI/2,[Pe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function UF(t,e){const r=Ds(e),i=new Ne(r.c,r.r).normalise().scale(.3),o=Ln(t),a=o.subtract(i),c=o.add(i);return[a,c]}function dv(t,e){const r=UF(t,e);let i=Xd(.2,e);i=i.map(u=>u.add(r[1]));const o=li(r),a=li(i);return o+a}function $F(t,e){const r=Ds(e),i=new Ne(r.c,r.r),a=Ln(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function ps(t,e){const r=$F(t,e);let i=Xd(.1,e);i=i.map(u=>u.add(r[1]));const o=li(r),a=li(i);return o+a}var FF=ie('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),PF=ie('<g class="regions-border"></g>');function HF(t,e){ae(e,!1);const n=Ve(),r=()=>me(mn,"$cellsStore",n),i=N(),o=N();function a(u,f){return u.filter(p=>p.region===f).map(p=>({r:p.r,c:p.c}))}D(()=>r(),()=>{y(i,r())}),D(()=>_(i),()=>{y(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),Ie(),fe();var c=PF();lt(c,5,()=>_(o),Ot,(u,f)=>{var v=FF();te(()=>L(v,"d",ho(a(_(i),_(f)),0,!1))),te(()=>L(v,"id",`region-${_(f)??""}`)),T(u,v)}),j(c),T(t,c),le()}var BF=ie('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function WF(t,e){ae(e,!1);const n=Ve(),r=()=>me(Di,"$selectionStore",n),i=()=>me(an,"$toolStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),v=N();let g=U(e,"boundingBox",8);const p=.06,m=.05,E="#080808",I="#b2b2b2";D(()=>J(g()),()=>{y(o,g().x)}),D(()=>J(g()),()=>{y(a,g().y)}),D(()=>r(),()=>{y(c,r().cells)}),D(()=>_(c),()=>{y(u,ho(_(c),0))}),D(()=>_(c),()=>{y(f,ho(_(c),p))}),D(()=>i(),()=>{y(v,pd(i()))}),Ie(),fe();var O=BF(),b=V(O),A=V(b);L(A,"stdDeviation",m),Ni(),j(b);var k=M(b),G=V(k);L(G,"fill",I);var H=M(G);L(H,"fill",E),j(k);var $=M(k);j(O),te(()=>{L(O,"visibility",_(v)?"visible":"hidden"),L(k,"x",_(o)),L(k,"y",_(a)),L(G,"x",_(o)),L(G,"y",_(a)),L(H,"d",_(f)),L($,"d",_(u))}),T(t,O),le()}var zF=ie('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function YF(t,e){ae(e,!1);const n=N(),r=N();let i=U(e,"grid",8);D(()=>J(i()),()=>{y(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>_(n),()=>{y(r,ho(_(n),0))}),Ie(),fe();var o=zF(),a=V(o);j(o),te(()=>L(a,"d",_(r))),T(t,o),le()}function jF(t,e){const n=t.getRow(e.r);return new Set(n)}function KF(t,e){const n=t.getCol(e.c);return new Set(n)}function VF(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function XF(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function qF(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function ZF(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function QF(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function JF(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function e8(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),f=c.findIndex(g=>g===e);if(f!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((p,m)=>m!==f);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function t8(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function n8(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function r8(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(XF(t,i))),e.get(d.ANTIKING)&&(r=r.union(qF(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(ZF(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(JF(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(QF(t,i)))),r}function hu(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=n8(t,n,c);i=new Set([...i,...u])}return i}function i8(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],f=e8(t,i,u);r=new Set([...r,...f])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],f=t8(t,i,u);r=new Set([...r,...f])}return r=hu(t,e,i,d.KILLER_CAGE,r),r=hu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=hu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function _v(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...jF(i,e),...KF(i,e),...VF(i,e)])),n=new Set([...n,...r8(i,r,e)]),n=new Set([...n,...i8(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function o8(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(_v(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var s8=ie('<tspan class="svelte-xct9ah"> </tspan>'),a8=ie('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function l8(t,e){ae(e,!1);const n=N();let r=U(e,"cell",8),i=U(e,"seen_values",8);const o=.25;function a(v){return i().find(p=>p===v)!==void 0}D(()=>J(r()),()=>{y(n,Ln({r:r().r,c:r().c}))}),Ie(),fe();var c=Ae(),u=se(c);{var f=v=>{var g=a8(),p=V(g);L(p,"font-size",o),lt(p,5,()=>r().centerMarks,Ot,(m,E)=>{var I=s8();const O=Qe(()=>a(_(E)));te(()=>xt(I,"conflict",_(O)));var b=V(I,!0);j(I),te(()=>tt(b,_(E))),T(m,I)}),j(p),j(g),te(()=>{L(p,"x",_(n).x),L(p,"y",_(n).y),L(p,"textLength",r().centerMarks.length>5?"0.9":void 0)}),T(v,g)};re(u,v=>{r().centerMarks.length&&v(f)})}T(t,c),le()}var c8=ie('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),u8=ie('<g class="corner-marks-group"></g>');function d8(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const i=.25,o=.28;function a(g){const p=g.cornerMarks.slice(0,8),m=Ln({r:g.r,c:g.c});return p.map((E,I)=>{const O=kF(I,o);return{pos:m.add(O),value:E,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}fe();var u=Ae(),f=se(u);{var v=g=>{var p=u8();lt(p,5,()=>a(n()),Ot,(m,E)=>{let I=()=>_(E).pos,O=()=>_(E).value;var b=c8();L(b,"font-size",i);const A=Qe(()=>c(O()));var k=V(b,!0);j(b),te(()=>{L(b,"x",I().x),L(b,"y",I().y),xt(b,"conflict",_(A)),tt(k,O())}),T(m,b)}),j(p),T(g,p)};re(f,g=>{n().cornerMarks.length&&g(v)})}T(t,u),le()}var _8=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),f8=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),g8=ie('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),h8=ie("<!><!>",1),p8=ie('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function v8(t,e){ae(e,!1);const n=Ve(),r=()=>me(ci,"$settingsStore",n),i=()=>me(Us,"$puzzleStore",n),o=()=>me(an,"$toolStore",n),a=N(),c=N(),u=N(),f=N(),v=N(),g=N(),p=N();let m=U(e,"cell",8);const E=.8,I=400;function O(H,$){if(!H)return[];let z=[..._v(_(v),$.toCoords())].map(Q=>Q.value).filter(Q=>Q!==null);return z=[...new Set(z)],z}function b(H){return H?"1":"0"}D(()=>J(m()),()=>{y(a,m().value)}),D(()=>J(m()),()=>{y(c,m().given)}),D(()=>J(m()),()=>{y(u,Ln({r:m().r,c:m().c}))}),D(()=>r(),()=>{y(f,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{y(v,i())}),D(()=>r(),()=>{y(g,r().showSolution)}),D(()=>(_(f),J(m())),()=>{y(p,O(_(f),m()))}),Ie(),fe();var A=Ae(),k=se(A);{var G=H=>{var $=p8(),F=V($);{var z=ce=>{var Z=Ae(),ne=se(Z);{var pe=Ee=>{var ye=_8();L(ye,"font-size",E),L(ye,"font-weight",I);var Re=V(ye,!0);j(ye),te(()=>{L(ye,"x",_(u).x),L(ye,"y",_(u).y),tt(Re,m().region)}),T(Ee,ye)};re(ne,Ee=>{m().region!==null&&Ee(pe)})}T(ce,Z)},Q=ce=>{var Z=Ae(),ne=se(Z);{var pe=ye=>{var Re=Ae(),Ue=se(Re);{var xe=Ce=>{var rt=f8();L(rt,"font-size",E),L(rt,"font-weight",I);var $e=V(rt,!0);te(()=>tt($e,b(m().fog))),j(rt),te(()=>{L(rt,"x",_(u).x),L(rt,"y",_(u).y)}),T(Ce,rt)};re(Ue,Ce=>{m().fog!==null&&Ce(xe)})}T(ye,Re)},Ee=ye=>{var Re=Ae(),Ue=se(Re);{var xe=rt=>{var $e=g8();L($e,"font-size",E),L($e,"font-weight",I);var At=V($e,!0);j($e),te(()=>{L($e,"x",_(u).x),L($e,"y",_(u).y),xt($e,"given",_(c)),tt(At,_(a))}),T(rt,$e)},Ce=rt=>{var $e=h8(),At=se($e);d8(At,{get cell(){return m()},get seen_values(){return _(p)}});var Tt=M(At);l8(Tt,{get cell(){return m()},get seen_values(){return _(p)}}),T(rt,$e)};re(Ue,rt=>{_(a)!==null?rt(xe):rt(Ce,!1)},!0)}T(ye,Re)};re(ne,ye=>{o()===d.FOG?ye(pe):ye(Ee,!1)},!0)}T(ce,Z)};re(F,ce=>{o()===d.REGIONS?ce(z):ce(Q,!1)})}j($),te(()=>xt($,"hide-given",m().given)),T(H,$)};re(k,H=>{_(g)||H(G)})}T(t,A),le()}var m8=ie("<path></path>"),E8=ie('<g class="highlights-group"></g>');function C8(t,e){ae(e,!1);const n=Ve(),r=()=>me(an,"$toolStore",n);let i=U(e,"cell",8);function o(f){const v=Ln({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let I=TF(E,g);I=I.map(b=>b.add(v));const O=Uo(I,!0);return{colorId:m,d:O}})}fe();var a=Ae(),c=se(a);{var u=f=>{var v=Ae(),g=se(v);{var p=m=>{var E=E8();lt(E,5,()=>o(i()),Ot,(I,O)=>{let b=()=>_(O).colorId,A=()=>_(O).d;var k=m8();te(()=>{uo(k,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),L(k,"d",A())}),T(I,k)}),j(E),T(m,E)};re(g,m=>{i().highlights.length&&m(p)})}T(f,v)};re(c,f=>{r()!==d.REGIONS&&f(u)})}T(t,a),le()}var O8=ie('<path class="cell-marker" fill="none"></path>'),I8=ie('<circle fill="none" opacity="0.9"></circle>');function b8(t,e){ae(e,!1);const n=N(),r=N();let i=U(e,"marker",8);const o=.3,a=.08;D(()=>J(i()),()=>{y(n,uv(i(),o))}),D(()=>J(i()),()=>{y(r,Gl(i().colorId,"black"))}),Ie(),fe();var c=Ae(),u=se(c);{var f=g=>{var p=O8();L(p,"stroke-width",a),te(()=>{L(p,"d",_(n)),L(p,"stroke",_(r))}),T(g,p)},v=g=>{var p=I8();L(p,"r",o),L(p,"stroke-width",a),te(()=>{uo(p,`cell-marker color-${i().colorId??""}`),L(p,"cx",i().c),L(p,"cy",i().r),L(p,"stroke",_(r))}),T(g,p)};re(u,g=>{i().marker==="X"?g(f):g(v,!1)})}T(t,c),le()}var w8=ie('<g class="cell-markers"></g>');function y8(t,e){let n=U(e,"markers",8);var r=w8();lt(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{b8(i,{get marker(){return _(o)}})}),j(r),T(t,r)}var L8=ie('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function A8(t,e){ae(e,!1);const n=N();let r=U(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(v=>[new Ne(v.p1.c,v.p1.r),new Ne(v.p2.c,v.p2.r)]).flat()}function a(u){const f=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Gl(f,"black"):"darkred"}D(()=>J(r()),()=>{y(n,Uo(o(r().draftLine)))}),Ie(),fe();var c=L8();te(()=>L(c,"stroke",a(r()))),L(c,"stroke-width",i),L(c,"opacity",.5),te(()=>L(c,"d",_(n))),T(t,c),le()}var S8=ie('<path fill="none" opacity="0.9"></path>');function N8(t,e){ae(e,!1);const n=N(),r=N();let i=U(e,"marker",8);const o=.08,a=.04;D(()=>J(i()),()=>{y(n,uv(i(),o))}),D(()=>J(i()),()=>{y(r,Gl(i().colorId,"black"))}),Ie(),fe();var c=S8();L(c,"stroke-width",a),te(()=>{L(c,"d",_(n)),uo(c,`edge-marker color-${i().colorId??""}`),L(c,"stroke",_(r))}),T(t,c),le()}var x8=ie('<g class="edge-markers"></g>');function R8(t,e){let n=U(e,"markers",8);var r=x8();lt(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{N8(i,{get marker(){return _(o)}})}),j(r),T(t,r)}var T8=ie('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),D8=ie('<g class="line-markers svelte-yha19m"></g>');function k8(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return Gl(c,"black")}fe();var a=D8();lt(a,5,n,c=>i(c),(c,u)=>{var f=T8();L(f,"stroke-width",r),te(()=>L(f,"stroke",o(_(u).colorId))),te(()=>{L(f,"x1",_(u).p1.c),L(f,"y1",_(u).p1.r),L(f,"x2",_(u).p2.c),L(f,"y2",_(u).p2.r),uo(f,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),T(c,f)}),j(a),T(t,a),le()}var G8=ie('<g class="pen-tool"><!><!><!><!></g>');function M8(t,e){ae(e,!1);const n=Ve(),r=()=>me(Qa,"$penToolStore",n),i=N();D(()=>r(),()=>{y(i,{draftLine:r().draftLine,mode:r().mode})}),Ie(),fe();var o=G8(),a=V(o);k8(a,{get lineMarkers(){return r().lineMarkers}});var c=M(a);R8(c,{get markers(){return r().edgeMarkers}});var u=M(c);y8(u,{get markers(){return r().cellMarkers}});var f=M(u);A8(f,{get draftLineMarker(){return _(i)}}),j(o),T(t,o),le()}var U8=ie("<path></path>");function Gr(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let v=U(e,"cells",8),g=U(e,"shape",8,vd);const p="square";D(()=>J(g()),()=>{y(n,g().inset??.06)}),D(()=>J(g()),()=>{y(r,g().stroke??"black")}),D(()=>J(g()),()=>{y(i,g().strokeWidth??.03)}),D(()=>J(g()),()=>{y(o,g().strokeDasharray??.08)}),D(()=>J(g()),()=>{y(a,g().fill??"none")}),D(()=>J(g()),()=>{y(c,g().connectDiag??!0)}),D(()=>(J(v()),_(n),_(c)),()=>{y(u,ho(v(),_(n),_(c)))}),D(()=>J(g()),()=>{y(f,g().strokeLinejoin??"miter")}),Ie(),fe();var m=U8();L(m,"stroke-linecap",p),te(()=>{L(m,"d",_(u)),L(m,"stroke",_(r)),L(m,"stroke-width",_(i)),L(m,"fill",_(a)),L(m,"stroke-dasharray",_(o)),L(m,"stroke-linejoin",_(f))}),T(t,m),le()}var $8=ie('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function F8(t,e){ae(e,!1);const n=Ve(),r=()=>me(Di,"$selectionStore",n),i=()=>me(ci,"$settingsStore",n),o=()=>me(Us,"$puzzleStore",n),a=()=>me(an,"$toolStore",n),c=N(),u=N(),f=N(),v=N(),g={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function p(O,b){return O.length?o8(_(f),O):[]}D(()=>r(),()=>{y(c,r().cells)}),D(()=>i(),()=>{y(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(v,pd(a()))}),Ie(),fe();var m=Ae(),E=se(m);{var I=O=>{var b=$8(),A=V(b),k=Qe(()=>p(_(c),_(f)));Gr(A,{get cells(){return _(k)},shape:g}),j(b),T(O,b)};re(E,O=>{_(u)&&_(v)&&O(I)})}T(t,m),le()}function Ml(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...Ap(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function P8(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Ml(r))}return new Set(e)}function H8(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Ml(r))}return new Set(e)}function B8(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Ml(r))}return new Set(e)}function W8(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function z8(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function Y8(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function j8(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Ml(i);o.length&&e.push(...o)}return new Set(e)}function K8(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...P8(t),...H8(t),...B8(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(W8(t))),e.get(d.ANTIKING)&&(n=n.union(z8(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(Y8(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(j8(t))),n}function V8(t,e){return[...new Set([...K8(t,e)])]}var X8=ie('<rect class="conflict svelte-4mp6ok"></rect>'),q8=ie('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function Z8(t,e){ae(e,!1);const n=Ve(),r=()=>me(ci,"$settingsStore",n),i=()=>me(yn,"$gridStore",n),o=()=>me(Wr,"$globalConstraintsStore",n),a=()=>me(mn,"$cellsStore",n),c=N(),u=N(),f=N(),v=N();B.CAGE;function g(I){return V8(_(u),_(f)).map(A=>A.toCoords())}D(()=>r(),()=>{y(c,r().checkConflicts)}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(v,a())}),Ie(),fe();var p=Ae(),m=se(p);{var E=I=>{var O=q8();lt(O,5,()=>g(_(v)),Ot,(b,A)=>{var k=X8();L(k,"width",1),L(k,"height",1),te(()=>{L(k,"x",_(A).c),L(k,"y",_(A).r)}),T(b,k)}),j(O),T(I,O)};re(m,I=>{_(c)&&I(E)})}T(t,p),le()}var Q8=ie('<line class="diag svelte-ylotlw"></line>'),J8=ie('<line class="antidiag svelte-ylotlw"></line>'),e4=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),t4=ie('<line class="diag svelte-ylotlw"></line>'),n4=ie('<line class="antidiag svelte-ylotlw"></line>'),r4=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),i4=ie('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function o4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wr,"$globalConstraintsStore",n),i=()=>me(yn,"$gridStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N(),p=N(),m=N(),E=N(),I=N(),O=N(),b=0,A=0,k=0,G=0;D(()=>r(),()=>{y(o,r())}),D(()=>(_(o),d),()=>{y(a,!!_(o).get(d.POSITIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(c,!!_(o).get(d.NEGATIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(u,!!_(o).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(_(o),d),()=>{y(f,!!_(o).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(_(o),d),()=>{y(v,!!_(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(g,!!_(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{y(p,i())}),D(()=>_(p),()=>{y(m,_(p).nCols)}),D(()=>_(p),()=>{y(E,_(p).nRows)}),D(()=>_(p),()=>{y(I,_(p).nCols)}),D(()=>_(p),()=>{y(O,_(p).nRows)}),Ie(),fe();var H=i4(),$=V(H);{var F=xe=>{var Ce=Q8();L(Ce,"x1",b),L(Ce,"y1",A),te(()=>{L(Ce,"x2",_(I)),L(Ce,"y2",_(O))}),T(xe,Ce)};re($,xe=>{_(c)&&xe(F)})}var z=M($);{var Q=xe=>{var Ce=J8();L(Ce,"x1",b),L(Ce,"y1",A),te(()=>{L(Ce,"x2",_(I)),L(Ce,"y2",_(O))}),T(xe,Ce)};re(z,xe=>{_(u)&&xe(Q)})}var ce=M(z);{var Z=xe=>{var Ce=e4();L(Ce,"x1",b),L(Ce,"y1",A),te(()=>{L(Ce,"x2",_(I)),L(Ce,"y2",_(O))}),T(xe,Ce)};re(ce,xe=>{_(v)&&xe(Z)})}var ne=M(ce);{var pe=xe=>{var Ce=t4();L(Ce,"x2",G),L(Ce,"y1",k),te(()=>{L(Ce,"x1",_(m)),L(Ce,"y2",_(E))}),T(xe,Ce)};re(ne,xe=>{_(a)&&xe(pe)})}var Ee=M(ne);{var ye=xe=>{var Ce=n4();L(Ce,"x2",G),L(Ce,"y1",k),te(()=>{L(Ce,"x1",_(m)),L(Ce,"y2",_(E))}),T(xe,Ce)};re(Ee,xe=>{_(f)&&xe(ye)})}var Re=M(Ee);{var Ue=xe=>{var Ce=r4();L(Ce,"x2",G),L(Ce,"y1",k),te(()=>{L(Ce,"x1",_(m)),L(Ce,"y2",_(E))}),T(xe,Ce)};re(Re,xe=>{_(g)&&xe(Ue)})}j(H),T(t,H),le()}var s4=ie('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function a4(t,e){ae(e,!1);const n=Ve(),r=()=>me(mn,"$cellsStore",n),i=()=>me(Mp,"$showFogStore",n),o=()=>me(Il,"$solutionStore",n),a=()=>me(yn,"$gridStore",n),c=N(),u=N(),f=N(),v=N(),g=N(),p=N();let m=U(e,"boundingBox",8),E=U(e,"gridShape",8);function I(pe){const Ee=pe.filter(Ce=>Ce.fog);if(!_(g))return Ee.map(rt=>rt.toCoords());const ye=pe.filter(Ce=>Ce.value===_(g)[Ce.r][Ce.c]);let Re=new Set;for(const Ce of ye){const rt=_(p).getNeighboorCells(Ce);Re=new Set([...rt,Ce])}return[...new Set(Ee).difference(Re)].map(Ce=>Ce.toCoords())}D(()=>r(),()=>{y(c,r())}),D(()=>_(c),()=>{y(u,I(_(c)))}),D(()=>_(u),()=>{y(f,ho(_(u),0))}),D(()=>i(),()=>{y(v,i())}),D(()=>o(),()=>{y(g,o())}),D(()=>a(),()=>{y(p,a())}),Ie(),fe();var O=s4(),b=V(O),A=V(b);j(b);var k=M(b),G=V(k);L(G,"stroke-width",.5);var H=M(G);L(H,"stroke-width",.375);var $=M(H);L($,"stroke-width",.25);var F=M($);L(F,"stroke-width",.125),Ni(),j(k);var z=M(k),Q=V(z);Ni(),j(z);var ce=M(z),Z=V(ce),ne=M(Z);L(ne,"x",0),L(ne,"y",0),j(ce),j(O),te(()=>{L(A,"d",_(f)),xt(k,"disabled",!_(v)),xt(z,"disabled",!_(v)),L(Q,"x",m().x),L(Q,"y",m().y),L(Q,"width",m().width),L(Q,"height",m().height),L(Z,"x",m().x),L(Z,"y",m().y),L(Z,"width",m().width),L(Z,"height",m().height),L(ne,"width",E().nCols),L(ne,"height",E().nRows)}),T(t,O),le()}var l4=ie('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function c4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Mp,"$showFogStore",n),i=N();let o=U(e,"gridShape",8);D(()=>r(),()=>{y(i,r())}),Ie(),fe();var a=l4(),c=V(a);L(c,"x",0),L(c,"y",0),j(a),te(()=>{L(a,"visibility",_(i)?"visible":"hidden"),L(c,"width",o().nCols),L(c,"height",o().nRows)}),T(t,a),le()}var u4=ie('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function d4(t,e){ae(e,!1);const n=N();let r=U(e,"r",8),i=U(e,"c",8),o=U(e,"val",8);const a=.8,c=400;D(()=>(J(r()),J(i())),()=>{y(n,Ln({r:r(),c:i()}))}),Ie(),fe();var u=Ae(),f=se(u);{var v=g=>{var p=u4();L(p,"font-size",a),L(p,"font-weight",c);var m=V(p,!0);j(p),te(()=>{L(p,"x",_(n).x),L(p,"y",_(n).y),tt(m,o())}),T(g,p)};re(f,g=>{o()!==null&&g(v)})}T(t,u),le()}var _4=ie('<g class="solution-layer"></g>');function f4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Il,"$solutionStore",n),i=()=>me(ci,"$settingsStore",n),o=()=>me(Cl,"$gameModeStore",n),a=N(),c=N(),u=N();D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i().showSolution)}),D(()=>o(),()=>{y(u,o())}),Ie(),fe();var f=Ae(),v=se(f);{var g=p=>{var m=_4();lt(m,5,()=>_(a),Ot,(E,I,O)=>{var b=Ae(),A=se(b);lt(A,1,()=>_(I),Ot,(k,G,H)=>{d4(k,{r:O,c:H,get val(){return _(G)}})}),T(E,b)}),j(m),T(p,m)};re(v,p=>{_(a)&&_(c)&&_(u)===vo.SETTING&&p(g)})}T(t,f),le()}var g4=ie("<g></g>"),h4=ie('<g mask="url(#fog-mask-fog)"></g>');function pr(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),i=U(e,"Component",8);var o=h4();lt(o,5,n,Ot,(a,c)=>{let u=()=>_(c).toolId,f=()=>_(c).element;var v=g4();uo(v,"element-group"),lt(v,5,()=>Object.entries(f()),g=>g[0],(g,p)=>{i()(g,{get tool(){return _(p)[1]},get c_id(){return _(p)[0]}})}),j(v),te(()=>L(v,"data-toolId",u())),T(a,v)}),j(o),te(()=>uo(o,$b(r()))),T(t,o)}var p4=ie("<circle></circle>");function Bn(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=U(e,"x",8),f=U(e,"y",8),v=U(e,"shape",8);D(()=>J(v()),()=>{y(n,v().r??.35)}),D(()=>J(v()),()=>{y(r,v().stroke??"black")}),D(()=>J(v()),()=>{var p;y(i,(p=v())==null?void 0:p.opacity)}),D(()=>J(v()),()=>{y(o,v().strokeWidth??.02)}),D(()=>J(v()),()=>{y(a,v().fill??"none")}),D(()=>J(v()),()=>{y(c,v().strokeDasharray??0)}),Ie(),fe();var g=p4();te(()=>{L(g,"cx",u()),L(g,"cy",f()),L(g,"r",_(n)),L(g,"stroke",_(r)),L(g,"stroke-width",_(o)),L(g,"fill",_(a)),L(g,"opacity",_(i)),L(g,"stroke-dasharray",_(c))}),T(t,g),le()}var v4=ie('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Yu(t,e){ae(e,!1);const n=N(),r=N(),i=N();let o=U(e,"shape",8),a=U(e,"coords",8);const[c,u]=a(),f=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,p=c.r===u.r?u.r+1:u.r;D(()=>J(o()),()=>{y(n,o().stroke??"black")}),D(()=>J(o()),()=>{var E;y(r,(E=o())==null?void 0:E.opacity)}),D(()=>J(o()),()=>{y(i,o().strokeWidth??.02)}),Ie(),fe();var m=v4();L(m,"x1",f),L(m,"x2",v),L(m,"y1",g),L(m,"y2",p),te(()=>{L(m,"stroke",_(n)),L(m,"stroke-width",_(i)),L(m,"opacity",_(r))}),T(t,m),le()}var m4=ie("<ellipse></ellipse>");function E4(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=U(e,"cx",8),v=U(e,"cy",8),g=U(e,"shape",8);D(()=>J(g()),()=>{y(n,g().width??.5)}),D(()=>J(g()),()=>{y(r,g().height??.5)}),D(()=>J(g()),()=>{y(i,g().stroke??"black")}),D(()=>J(g()),()=>{var m;y(o,(m=g())==null?void 0:m.opacity)}),D(()=>J(g()),()=>{y(a,g().strokeWidth??.02)}),D(()=>J(g()),()=>{y(c,g().fill??"none")}),D(()=>J(g()),()=>{y(u,g().angle??0)}),Ie(),fe();var p=m4();te(()=>{L(p,"cx",f()),L(p,"cy",v()),L(p,"rx",_(n)/2),L(p,"ry",_(r)/2),L(p,"stroke",_(i)),L(p,"stroke-width",_(a)),L(p,"fill",_(c)),L(p,"opacity",_(o)),L(p,"transform",`rotate(${_(u)}, ${f()}, ${v()} )`)}),T(t,p),le()}var C4=ie("<polygon></polygon>");function rl(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let v=U(e,"cx",8),g=U(e,"cy",8),p=U(e,"shape",8);D(()=>J(p()),()=>{y(n,p().n??3)}),D(()=>J(p()),()=>{y(r,p().r??.5)}),D(()=>(_(r),_(n),J(v()),J(g())),()=>{y(i,cv(_(r),_(n),new Ne(v(),g())))}),D(()=>_(i),()=>{y(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>J(p()),()=>{y(a,p().stroke??"black")}),D(()=>J(p()),()=>{y(c,p().strokeWidth??.02)}),D(()=>J(p()),()=>{y(u,p().fill??"none")}),D(()=>J(p()),()=>{y(f,p().angle??0)}),Ie(),fe();var m=C4();te(()=>{L(m,"points",_(o)),L(m,"stroke",_(a)),L(m,"stroke-width",_(c)),L(m,"fill",_(u)),L(m,"transform",`rotate(${_(f)}, ${v()}, ${g()} )`)}),T(t,m),le()}var O4=ie("<rect></rect>");function I4(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=U(e,"cx",8),v=U(e,"cy",8),g=U(e,"shape",8);D(()=>J(g()),()=>{y(n,g().width??.5)}),D(()=>J(g()),()=>{y(r,g().height??.5)}),D(()=>(J(f()),_(n)),()=>{y(i,f()-_(n)/2)}),D(()=>(J(v()),_(r)),()=>{y(o,v()-_(r)/2)}),D(()=>J(g()),()=>{y(a,g().stroke||"black")}),D(()=>J(g()),()=>{y(c,g().strokeWidth||.023)}),D(()=>J(g()),()=>{y(u,g().fill||"none")}),Ie(),fe();var p=O4();te(()=>{L(p,"x",_(i)),L(p,"y",_(o)),L(p,"width",_(n)),L(p,"height",_(r)),L(p,"stroke",_(a)),L(p,"stroke-width",_(c)),L(p,"fill",_(u))}),T(t,p),le()}var b4=ie("<rect></rect>");function w4(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N(),p=N();let m=U(e,"cx",8),E=U(e,"cy",8),I=U(e,"shape",8);D(()=>J(I()),()=>{y(n,I().r??.5)}),D(()=>(J(m()),_(n)),()=>{y(r,m()-_(n))}),D(()=>(J(E()),_(n)),()=>{y(i,E()-_(n))}),D(()=>_(n),()=>{y(o,2*_(n))}),D(()=>_(n),()=>{y(a,2*_(n))}),D(()=>J(I()),()=>{y(c,I().stroke??"black")}),D(()=>J(I()),()=>{y(u,I().strokeWidth??.02)}),D(()=>J(I()),()=>{y(f,I().fill??"none")}),D(()=>J(I()),()=>{y(v,I().angle??0)}),D(()=>J(I()),()=>{y(g,I().strokeDasharray??0)}),D(()=>J(I()),()=>{y(p,I().opacity??1)}),Ie(),fe();var O=b4();te(()=>{L(O,"x",_(r)),L(O,"y",_(i)),L(O,"width",_(o)),L(O,"height",_(a)),L(O,"stroke",_(c)),L(O,"stroke-width",_(u)),L(O,"fill",_(f)),L(O,"transform",`rotate(${_(v)}, ${m()}, ${E()})`),L(O,"stroke-dasharray",_(g)),L(O,"opacity",_(p))}),T(t,O),le()}function er(t,e){ae(e,!1);const n=N();let r=U(e,"cx",8),i=U(e,"cy",8),o=U(e,"shape",8);D(()=>(J(o()),B),()=>{var v;y(n,((v=o())==null?void 0:v.type)??B.CIRCLE)}),Ie(),fe();var a=Ae(),c=se(a);{var u=v=>{Bn(v,{get x(){return r()},get y(){return i()},get shape(){return o()}})},f=v=>{var g=Ae(),p=se(g);{var m=I=>{E4(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var O=Ae(),b=se(O);{var A=G=>{w4(G,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},k=G=>{var H=Ae(),$=se(H);{var F=Q=>{I4(Q,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},z=Q=>{var ce=Ae(),Z=se(ce);{var ne=Ee=>{rl(Ee,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},pe=Ee=>{Bn(Ee,{get x(){return r()},get y(){return i()},get shape(){return o()}})};re(Z,Ee=>{_(n)===B.POLYGON?Ee(ne):Ee(pe,!1)},!0)}T(Q,ce)};re($,Q=>{_(n)===B.RECTANGLE?Q(F):Q(z,!1)},!0)}T(G,H)};re(b,G=>{_(n)===B.SQUARE?G(A):G(k,!1)},!0)}T(I,O)};re(p,I=>{_(n)===B.ELLIPSE?I(m):I(E,!1)},!0)}T(v,g)};re(c,v=>{_(n)===B.CIRCLE?v(u):v(f,!1)})}T(t,a),le()}var y4=ie("<!><!>",1),L4=ie("<!><!>",1),A4=ie("<!><!>",1),S4=ie("<!><!>",1),N4=ie('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function x4(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N();let g=U(e,"tool",8),p=U(e,"c_id",8);const m=Yt(g().toolId,yt)??Wa,E=g().cells;function I(G,H){return H===B.TEXT_ONLY?G.value?G.value:"-":G.value??""}function O(G){if(G!==d.EDGE_INEQUALITY&&G!==d.ONE_WAY_DOOR)return 0;const H=Ln(E[0]);return Ln(E[1]).subtract(H).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>J(g()),()=>{y(o,g().shape??m)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>ws,()=>{y(c,av(ws(E)))}),D(()=>(_(o),B),()=>{var G;y(u,((G=_(o))==null?void 0:G.type)||B.CIRCLE)}),D(()=>_(o),()=>{var G;y(f,((G=_(o))==null?void 0:G.fontSize)??.2)}),D(()=>_(o),()=>{var G;y(v,((G=_(o))==null?void 0:G.fontColor)??"black")}),Ie(),fe();var b=Ae(),A=se(b);{var k=G=>{var H=N4(),$=V(H);{var F=Z=>{var ne=y4(),pe=se(ne);{var Ee=Re=>{Bn(Re,{get x(){return _(c).x},get y(){return _(c).y},get shape(){return _(a)}})};re(pe,Re=>{p()===_(i)&&Re(Ee)})}var ye=M(pe);Bn(ye,{get x(){return _(c).x},get y(){return _(c).y},get shape(){return _(o)}}),T(Z,ne)},z=Z=>{var ne=Ae(),pe=se(ne);{var Ee=Re=>{var Ue=L4(),xe=se(Ue);{var Ce=$e=>{Bn($e,{get x(){return _(c).x},get y(){return _(c).y},get shape(){return _(a)}})};re(xe,$e=>{p()===_(i)&&$e(Ce)})}var rt=M(xe);Bn(rt,{get x(){return _(c).x},get y(){return _(c).y},get shape(){return _(o)}}),T(Re,Ue)},ye=Re=>{var Ue=Ae(),xe=se(Ue);{var Ce=$e=>{var At=A4(),Tt=se(At);{var ln=Mt=>{Yu(Mt,{coords:E,get shape(){return _(a)}})};re(Tt,Mt=>{p()===_(i)&&Mt(ln)})}var Dt=M(Tt);Yu(Dt,{coords:E,get shape(){return _(o)}}),T($e,At)},rt=$e=>{var At=S4(),Tt=se(At);{var ln=Mt=>{er(Mt,{get cx(){return _(c).x},get cy(){return _(c).y},get shape(){return _(a)}})};re(Tt,Mt=>{p()===_(i)&&Mt(ln)})}var Dt=M(Tt);er(Dt,{get cx(){return _(c).x},get cy(){return _(c).y},get shape(){return _(o)}}),T($e,At)};re(xe,$e=>{_(u)===B.BORDER_LINE?$e(Ce):$e(rt,!1)},!0)}T(Re,Ue)};re(pe,Re=>{_(u)===B.TEXT_ONLY?Re(Ee):Re(ye,!1)},!0)}T(Z,ne)};re($,Z=>{g().toolId===d.EDGE_INEQUALITY||g().toolId===d.ONE_WAY_DOOR?Z(F):Z(z,!1)})}var Q=M($);te(()=>L(Q,"transform",`rotate(${O(g().toolId)}, ${_(c).x}, ${_(c).y} )`));var ce=V(Q,!0);te(()=>tt(ce,I(g(),_(u)))),j(Q),j(H),te(()=>{L(Q,"x",_(c).x),L(Q,"y",_(c).y),L(Q,"font-size",_(f)),L(Q,"fill",_(v))}),T(G,H)};re(A,G=>{E.length===2&&G(k)})}T(t,b),le()}var R4=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),T4=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),D4=ie('<g class="quadruple-text"><!></g>');function fv(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=U(e,"cornerTool",8);const u=c().cells,f=new Ne(u[u.length-1].c,u[u.length-1].r),v=Yt(c().toolId,yt)??za;D(()=>J(c()),()=>{y(n,c().value)}),D(()=>J(c()),()=>{y(r,c().shape??v)}),D(()=>_(r),()=>{var E;y(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),D(()=>_(r),()=>{var E;y(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),D(()=>_(n),()=>{var E;y(a,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),Ie(),fe();var g=Ae(),p=se(g);{var m=E=>{var I=D4(),O=V(I);{var b=k=>{var G=R4(),H=V(G,!0);te(()=>tt(H,_(a).join(" "))),j(G),te(()=>{L(G,"x",f.x),L(G,"y",f.y),L(G,"font-size",_(i)),L(G,"fill",_(o))}),T(k,G)},A=k=>{var G=T4(),H=se(G),$=V(H,!0);te(()=>tt($,_(a).slice(0,2).join(" "))),j(H);var F=M(H),z=V(F,!0);te(()=>tt(z,_(a).slice(2).join(" "))),j(F),te(()=>{L(H,"x",f.x),L(H,"y",f.y),L(H,"dy",-_(i)/2),L(H,"font-size",_(i)),L(H,"fill",_(o)),L(F,"x",f.x),L(F,"y",f.y),L(F,"dy",_(i)/2),L(F,"font-size",_(i)),L(F,"fill",_(o))}),T(k,G)};re(O,k=>{_(a).length<=2?k(b):k(A,!1)})}j(I),te(()=>L(I,"data-count",_(a).length)),T(E,I)};re(p,E=>{_(n)&&E(m)})}T(t,g),le()}var k4=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),G4=ie('<g class="corner-tool"><!><!><!></g>');function M4(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let v=U(e,"tool",8),g=U(e,"c_id",8);const p=Yt(v().toolId,yt)??za,m=v().cells,E=new Ne(m[m.length-1].c,m[m.length-1].r);function I(k,G){return G===B.TEXT_ONLY?k.value?k.value:"-":k.value??""}D(()=>r(),()=>{var k;y(i,(k=r())==null?void 0:k.id)}),D(()=>J(v()),()=>{y(o,v().shape??p)}),D(()=>(_(o),B),()=>{var k;y(a,((k=_(o))==null?void 0:k.type)??B.CIRCLE)}),D(()=>_(o),()=>{y(c,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{var k;y(u,((k=_(o))==null?void 0:k.fontSize)??.2)}),D(()=>_(o),()=>{var k;y(f,((k=_(o))==null?void 0:k.fontColor)??"black")}),Ie(),fe();var O=Ae(),b=se(O);{var A=k=>{var G=G4(),H=V(G);{var $=Z=>{er(Z,{get cx(){return E.x},get cy(){return E.y},get shape(){return _(c)}})};re(H,Z=>{g()===_(i)&&Z($)})}var F=M(H);er(F,{get cx(){return E.x},get cy(){return E.y},get shape(){return _(o)}});var z=M(F);{var Q=Z=>{fv(Z,{get cornerTool(){return v()}})},ce=Z=>{var ne=k4(),pe=V(ne,!0);te(()=>tt(pe,I(v(),_(a)))),j(ne),te(()=>{L(ne,"x",E.x),L(ne,"y",E.y),L(ne,"font-size",_(u)),L(ne,"fill",_(f))}),T(Z,ne)};re(z,Z=>{v().toolId===d.QUADRUPLE?Z(Q):Z(ce,!1)})}j(G),T(k,G)};re(b,k=>{m.length===4&&k(A)})}T(t,O),le()}var U4=ie('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ys(t,e){ae(e,!1);const n=N();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),o=U(e,"x",8),a=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),f=U(e,"fontWeight",8,400),v=N(null),g=N(null);function p(A,k,G){const H=["TL","TR"].includes(G),F=["TL","BL"].includes(G)?A+.05:A,z=k;return new Ne(F,z)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}Pb(()=>{if(!_(v)||!_(g))return;const A=_(v).getBBox();_(g).setAttribute("x",String(A.x)),_(g).setAttribute("y",String(A.y+A.height*.1)),_(g).setAttribute("width",String(A.width)),_(g).setAttribute("height",String(A.height*.8))}),D(()=>(J(o()),J(a()),J(c())),()=>{y(n,p(o(),a(),c()))}),Ie(),fe();var I=Ae(),O=se(I);{var b=A=>{var k=U4(),G=se(k);xi(G,F=>y(g,F),()=>_(g));var H=M(G);te(()=>L(H,"text-anchor",m(c()))),te(()=>L(H,"dominant-baseline",E(c())));var $=V(H,!0);j(H),xi(H,F=>y(v,F),()=>_(v)),te(()=>{var F,z;L(H,"x",(F=_(n))==null?void 0:F.x),L(H,"y",(z=_(n))==null?void 0:z.y),L(H,"font-size",i()),L(H,"fill",u()),L(H,"font-weight",f()),tt($,r())}),T(A,k)};re(O,A=>{r().length&&A(b)})}T(t,I),le()}var $4=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),F4=ie('<g class="center-corner-or-edge-tool"><!><!><!></g>');function P4(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N();let p=U(e,"tool",8),m=U(e,"c_id",8);const E=p().cell,I=Yt(p().toolId,yt)??Wa;function O(z,Q){return Q===B.TEXT_ONLY?z.value?z.value:"-":z.value??""}D(()=>r(),()=>{var z;y(i,(z=r())==null?void 0:z.id)}),D(()=>J(p()),()=>{y(o,p().shape??I)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>{},()=>{y(c,E)}),D(()=>(_(o),B),()=>{var z;y(u,((z=_(o))==null?void 0:z.type)||B.CIRCLE)}),D(()=>_(o),()=>{var z;y(f,((z=_(o))==null?void 0:z.fontSize)??.2)}),D(()=>_(o),()=>{var z;y(v,((z=_(o))==null?void 0:z.fontColor)??"black")}),D(()=>_(c),()=>{y(g,_(c).r%1===.5&&_(c).c%1===.5)}),Ie(),fe();var b=F4(),A=V(b);{var k=z=>{er(z,{get cx(){return _(c).c},get cy(){return _(c).r},get shape(){return _(a)}})};re(A,z=>{m()===_(i)&&z(k)})}var G=M(A);er(G,{get cx(){return _(c).c},get cy(){return _(c).r},get shape(){return _(o)}});var H=M(G);{var $=z=>{var Q=Qe(()=>O(p(),_(u))),ce=Qe(()=>Math.floor(_(c).c)),Z=Qe(()=>Math.floor(_(c).r));ys(z,{get value(){return _(Q)},get x(){return _(ce)},get y(){return _(Z)},position:"TL",get fontColor(){return _(v)}})},F=z=>{var Q=$4(),ce=V(Q,!0);te(()=>tt(ce,O(p(),_(u)))),j(Q),te(()=>{L(Q,"x",_(c).c),L(Q,"y",_(c).r),L(Q,"font-size",_(f)),L(Q,"fill",_(v))}),T(z,Q)};re(H,z=>{_(g)?z($):z(F,!1)})}j(b),T(t,b),le()}var H4=ie('<path fill="none"></path>');function si(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=U(e,"linePoints",8),f=U(e,"shape",8,void 0);const v="round",g="round";D(()=>J(f()),()=>{var m;y(n,((m=f())==null?void 0:m.stroke)??"gray")}),D(()=>J(f()),()=>{var m;y(r,((m=f())==null?void 0:m.strokeWidth)??.1)}),D(()=>J(f()),()=>{var m;y(i,((m=f())==null?void 0:m.strokeDasharray)??0)}),D(()=>J(f()),()=>{var m;y(o,((m=f())==null?void 0:m.strokeDashoffset)??0)}),D(()=>J(f()),()=>{var m,E,I,O,b,A,k,G;y(a,{shortenHead:((E=(m=f())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((O=(I=f())==null?void 0:I.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((A=(b=f())==null?void 0:b.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((G=(k=f())==null?void 0:k.linePathOptions)==null?void 0:G.closeLoops)??!1})}),D(()=>(J(u()),_(a)),()=>{y(c,li(u(),_(a)))}),Ie(),fe();var p=H4();L(p,"stroke-linejoin",v),L(p,"stroke-linecap",g),te(()=>{L(p,"d",_(c)),L(p,"stroke",_(n)),L(p,"stroke-width",_(r)),L(p,"stroke-dasharray",_(i)),L(p,"stroke-dashoffset",_(o))}),T(t,p),le()}var B4=ue("<!> <!> <!>",1);function pu(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N();let a=U(e,"linePoints",8),c=U(e,"shape",8,As);function u(O){var k;const b=Lt.cloneDeep(O);b.r=b.r||.2;const A=b.r;return b.strokeDasharray=O.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(k=b.linePathOptions)==null?void 0:k.bezierRounding},b}D(()=>J(a()),()=>{y(n,a().length)}),D(()=>(_(n),J(a())),()=>{y(r,_(n)>=0?a()[0]:void 0)}),D(()=>(_(n),J(a())),()=>{y(i,_(n)>=0?a()[_(n)-1]:void 0)}),D(()=>J(c()),()=>{y(o,u(c()))}),Ie(),fe();var f=B4(),v=se(f);{var g=O=>{Bn(O,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};re(v,O=>{_(r)&&O(g)})}var p=M(v,2);{var m=O=>{si(O,{get linePoints(){return a()},get shape(){return _(o)}})};re(p,O=>{_(n)>1&&O(m)})}var E=M(p,2);{var I=O=>{Bn(O,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};re(E,O=>{_(i)&&O(I)})}T(t,f),le()}var W4=ue("<!> <!> <!>",1);function vu(t,e){ae(e,!1);const n=N(),r=N(),i=N();let o=U(e,"linePoints",8),a=U(e,"shape",12,As);const c=4,u=.5;function f(G,H){const $=H.r??u,F=H.n??c,z=H.angle??0,Q=cv($,F,new Ne(0,0),!0,0),ce=(F+(G-z/360)*F%F)%F,Z=Math.floor(ce)%F,ne=Math.ceil(ce)%F;return Q[Z].lerp(Q[ne],ce%1).length()}function v(G){if(_(n)<=1)return 0;const H=o()[0],F=o()[1].subtract(H).angle()/(2*Math.PI);return f(F,G)}function g(G){if(_(n)<=1)return 0;const H=o()[_(n)-1],F=o()[_(n)-2].subtract(H).angle()/(2*Math.PI);return f(F,G)}function p(G){var $;const H=Lt.cloneDeep(G);return H.r=H.r||u,H.opacity=1,H.linePathOptions={shortenHead:v(H),shortenTail:g(H),bezierRounding:($=H.linePathOptions)==null?void 0:$.bezierRounding},H}D(()=>J(o()),()=>{y(n,o().length)}),D(()=>(_(n),J(o())),()=>{y(r,_(n)>=0?o()[0]:void 0)}),D(()=>(_(n),J(o())),()=>{y(i,_(n)>=0?o()[_(n)-1]:void 0)}),D(()=>J(a()),()=>{a(p(a()))}),Ie(),fe();var m=W4(),E=se(m);{var I=G=>{rl(G,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return a()}})};re(E,G=>{_(r)&&G(I)})}var O=M(E,2);{var b=G=>{si(G,{get linePoints(){return o()},get shape(){return a()}})};re(O,G=>{_(n)>1&&G(b)})}var A=M(O,2);{var k=G=>{rl(G,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return a()}})};re(A,G=>{_(i)&&G(k)})}T(t,m),le()}var z4=ue("<!> <!>",1);function mu(t,e){ae(e,!1);const n=N();let r=U(e,"linePoints",8),i=U(e,"shape",8,As);function o(m){var O,b,A;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((O=E.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var O,b,A;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((O=E.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}D(()=>J(r()),()=>{y(n,r().length>0?r()[0]:void 0)}),Ie(),fe();var c=z4(),u=se(c);{var f=m=>{var E=Qe(()=>o(i()));si(m,{get linePoints(){return r()},get shape(){return _(E)}})};re(u,m=>{r().length>1&&m(f)})}var v=M(u,2);{var g=m=>{var E=Qe(()=>o(i()));Bn(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},p=m=>{var E=Ae(),I=se(E);{var O=b=>{var A=Qe(()=>a(i()));rl(b,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(A)}})};re(I,b=>{_(n)&&b(O)},!0)}T(m,E)};re(v,m=>{_(n)&&i().type===B.THERMO_WITH_CIRCLE?m(g):m(p,!1)})}T(t,c),le()}var Y4=ie("<!><!><!>",1),j4=ie("<!><!><!>",1),K4=ie("<!><!><!>",1),V4=ie("<!><!><!>",1),X4=ie('<g class="line-tool"><!></g>');function q4(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N();let g=U(e,"tool",8),p=U(e,"c_id",8);const m=Yt(g().toolId,yt)??As;D(()=>r(),()=>{var A;y(i,(A=r())==null?void 0:A.id)}),D(()=>J(g()),()=>{y(o,ws(g().cells))}),D(()=>J(g()),()=>{y(a,g().shape??m)}),D(()=>(_(a),B),()=>{var A;y(c,((A=_(a))==null?void 0:A.type)||B.LINE)}),D(()=>_(a),()=>{var A;y(u,((A=_(a))==null?void 0:A.opacity)??1)}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{y(v,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),Ie(),fe();var E=X4(),I=V(E);{var O=A=>{var k=Y4(),G=se(k);{var H=Q=>{pu(Q,{get linePoints(){return _(o)},get shape(){return _(f)}})};re(G,Q=>{Q(H)})}var $=M(G);{var F=Q=>{pu(Q,{get linePoints(){return _(o)},get shape(){return _(v)}})};re($,Q=>{p()===_(i)&&Q(F)})}var z=M($);pu(z,{get linePoints(){return _(o)},get shape(){return _(a)}}),T(A,k)},b=A=>{var k=Ae(),G=se(k);{var H=F=>{var z=j4(),Q=se(z);{var ce=Ee=>{vu(Ee,{get linePoints(){return _(o)},get shape(){return _(f)}})};re(Q,Ee=>{Ee(ce)})}var Z=M(Q);{var ne=Ee=>{vu(Ee,{get linePoints(){return _(o)},get shape(){return _(v)}})};re(Z,Ee=>{p()===_(i)&&Ee(ne)})}var pe=M(Z);vu(pe,{get linePoints(){return _(o)},get shape(){return _(a)}}),T(F,z)},$=F=>{var z=Ae(),Q=se(z);{var ce=ne=>{var pe=K4(),Ee=se(pe);{var ye=Ce=>{mu(Ce,{get linePoints(){return _(o)},get shape(){return _(f)}})};re(Ee,Ce=>{Ce(ye)})}var Re=M(Ee);{var Ue=Ce=>{mu(Ce,{get linePoints(){return _(o)},get shape(){return _(v)}})};re(Re,Ce=>{p()===_(i)&&Ce(Ue)})}var xe=M(Re);mu(xe,{get linePoints(){return _(o)},get shape(){return _(a)}}),T(ne,pe)},Z=ne=>{var pe=V4(),Ee=se(pe);{var ye=Ce=>{si(Ce,{get linePoints(){return _(o)},get shape(){return _(f)}})};re(Ee,Ce=>{Ce(ye)})}var Re=M(Ee);{var Ue=Ce=>{si(Ce,{get linePoints(){return _(o)},get shape(){return _(v)}})};re(Re,Ce=>{p()===_(i)&&Ce(Ue)})}var xe=M(Re);si(xe,{get linePoints(){return _(o)},get shape(){return _(a)}}),T(ne,pe)};re(Q,ne=>{_(c)===B.THERMO_WITH_CIRCLE||_(c)===B.THERMO_WITH_POLYGON?ne(ce):ne(Z,!1)},!0)}T(F,z)};re(G,F=>{_(c)===B.LINE_WITH_POLYGON_ENDS?F(H):F($,!1)},!0)}T(A,k)};re(I,A=>{_(c)===B.LINE_WITH_CIRCLE_ENDS?A(O):A(b,!1)})}j(E),te(()=>L(E,"opacity",_(u))),T(t,E),le()}var Z4=ue("<!> <!>",1);function gv(t,e){ae(e,!1);const n=N(),r=N();let i=U(e,"cells",8),o=U(e,"shape",8,vd),a=U(e,"value",8,void 0);D(()=>J(i()),()=>{y(n,i()[0])}),D(()=>_(n),()=>{y(r,new Ne(_(n).c,_(n).r))}),Ie(),fe();var c=Z4(),u=se(c);Gr(u,{get cells(){return i()},get shape(){return o()}});var f=M(u,2);{var v=g=>{ys(g,{get value(){return a()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};re(f,g=>{a()&&a().length&&g(v)})}T(t,c),le()}var Q4=ie('<g class="cage-tool"><!><!></g>');function J4(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N();let c=U(e,"tool",8),u=U(e,"c_id",8);const f=Yt(c().toolId,yt)??vd;D(()=>J(c()),()=>{y(i,c().shape??f)}),D(()=>r(),()=>{var E;y(o,(E=r())==null?void 0:E.id)}),D(()=>_(i),()=>{y(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),Ie(),fe();var v=Q4(),g=V(v);{var p=E=>{Gr(E,{get cells(){return c().cells},get shape(){return _(a)}})};re(g,E=>{u()===_(o)&&E(p)})}var m=M(g);gv(m,{get cells(){return c().cells},get shape(){return _(i)},get value(){return c().value}}),j(v),T(t,v),le()}var eP=ie("<!><!>",1),tP=ie('<g class="clone-tool"><!><!><!><!><!></g>');function nP(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N(),p=N(),m=N();let E=U(e,"tool",8),I=U(e,"c_id",8);const O=Yt(E().toolId,yt)??nw,b=800,A=E().value;D(()=>r(),()=>{var ce;y(i,(ce=r())==null?void 0:ce.id)}),D(()=>J(E()),()=>{y(o,E().shape??O)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{y(c,_(o).inset??.15)}),D(()=>_(o),()=>{y(u,_(o).strokeWidth??.07)}),D(()=>_(o),()=>{y(f,_(o).fontColor??_(o).stroke??"black")}),D(()=>J(E()),()=>{y(v,E().cells[E().cells.length-1])}),D(()=>J(E()),()=>{y(g,E().cells2[E().cells2.length-1])}),D(()=>(_(v),_(c)),()=>{y(p,new Ne(_(v).c+1-_(c)-.05,_(v).r+1-_(c)-.05))}),D(()=>(_(g),_(c)),()=>{y(m,new Ne(_(g).c+1-_(c)-.05,_(g).r+1-_(c)-.05))}),Ie(),fe();var k=tP(),G=V(k);{var H=ce=>{var Z=eP(),ne=se(Z);Gr(ne,{get cells(){return E().cells},get shape(){return _(a)}});var pe=M(ne);Gr(pe,{get cells(){return E().cells2},get shape(){return _(a)}}),T(ce,Z)};re(G,ce=>{I()===_(i)&&ce(H)})}var $=M(G);Gr($,{get cells(){return E().cells},get shape(){return _(o)}});var F=M($);ys(F,{value:A,get x(){return _(p).x},get y(){return _(p).y},position:"BR",get fontColor(){return _(f)},fontWeight:b});var z=M(F);Gr(z,{get cells(){return E().cells2},get shape(){return _(o)}});var Q=M(z);ys(Q,{value:A,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(f)},fontWeight:b}),j(k),T(t,k),le()}var rP=ie('<g class="outside-direction-tool"><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function iP(t,e){var G;ae(e,!1);const n=N(),r=N(),i=N(),o=N();let a=U(e,"tool",8);const c=a().cell,u=a().direction;ap(c,u);const f=Ln(c),v=Yt(a().toolId,yt)??rw,g=((G=_(n))==null?void 0:G.fontSize)??.5,p=.03;function m(H){return H.value&&H.value.length?H.value:"-"}function E(H,$){const F=Ds($),z=new Ne(F.c,F.r).normalise(),Q=Ln(H),ce=Q.add(z.scale(.35)),Z=Q.add(z.scale(.58));return[ce,Z]}function I(H,$){const z=E(H,$);let Q=Xd(.12,$);Q=Q.map(pe=>pe.add(z[1]));const ce=li(z),Z=li(Q);return ce+Z}D(()=>J(a()),()=>{y(n,a().shape??v)}),D(()=>_(n),()=>{var H;y(r,((H=_(n))==null?void 0:H.fontColor)??"var(--text-primary-color)")}),D(()=>_(n),()=>{var H;y(i,((H=_(n))==null?void 0:H.stroke)??"var(--text-primary-color)")}),D(()=>{},()=>{y(o,I(c,u))}),Ie(),fe();var O=rP(),b=V(O);L(b,"stroke-width",p);var A=M(b);L(A,"font-size",g);var k=V(A,!0);te(()=>tt(k,m(a()))),j(A),j(O),te(()=>{L(b,"d",_(o)),L(b,"stroke",_(i)),L(A,"x",f.x),L(A,"y",f.y),L(A,"fill",_(r))}),T(t,O),le()}var oP=ue("<!> <!> <!>",1);function sP(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=U(e,"linePoints",8),u=U(e,"shape",8);function f(O){const b=Lt.cloneDeep(O);return b.r=b.r||.2,b.strokeWidth=0,b.opacity=1,b}D(()=>J(c()),()=>{y(n,c().length)}),D(()=>(_(n),J(c())),()=>{y(r,_(n)>1&&c()[0].equals(c()[_(n)-1]))}),D(()=>(_(n),J(c())),()=>{y(i,_(n)>=0?c()[0]:void 0)}),D(()=>(_(n),J(c())),()=>{y(o,_(n)>=0?c()[_(n)-1]:void 0)}),D(()=>J(u()),()=>{y(a,f(u()))}),Ie(),fe();var v=oP(),g=se(v);si(g,{get linePoints(){return c()},get shape(){return u()}});var p=M(g,2);{var m=O=>{Bn(O,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(a)}})};re(p,O=>{!_(r)&&_(i)&&O(m)})}var E=M(p,2);{var I=O=>{Bn(O,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(a)}})};re(E,O=>{!_(r)&&_(o)&&O(I)})}T(t,v),le()}var aP=ie('<g class="corner-line-tool"><!></g>');function lP(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N();let a=U(e,"tool",8);const c=Yt(a().toolId,yt)??As;D(()=>(J(a()),Ne),()=>{y(n,a().coords.map(p=>new Ne(p.c,p.r)))}),D(()=>J(a()),()=>{y(r,a().shape??c)}),D(()=>(_(r),B),()=>{var p;y(i,((p=_(r))==null?void 0:p.type)||B.LINE)}),D(()=>_(r),()=>{var p;y(o,((p=_(r))==null?void 0:p.opacity)??1)}),Ie(),fe();var u=aP(),f=V(u);{var v=p=>{sP(p,{get linePoints(){return _(n)},get shape(){return _(r)}})},g=p=>{si(p,{get linePoints(){return _(n)},get shape(){return _(r)}})};re(f,p=>{_(i)===B.MAZE_WALL?p(v):p(g,!1)})}j(u),te(()=>L(u,"opacity",_(o))),T(t,u),le()}var cP=ie('<path fill="none" stroke-linecap="round"></path>'),uP=ie('<path fill="none" stroke-linecap="round"></path>'),dP=ie('<!><!><path fill="none" stroke-linecap="round"></path>',1);function _P(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N();let p=U(e,"tool",8),m=U(e,"c_id",8);const E=p().cell,I=Yt(p().toolId,yt)??jh;D(()=>r(),()=>{var $;y(i,($=r())==null?void 0:$.id)}),D(()=>J(p()),()=>{y(o,p().direction)}),D(()=>J(p()),()=>{y(a,p().shape??I)}),D(()=>_(a),()=>{y(c,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),D(()=>_(a),()=>{y(u,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>_(a),()=>{y(f,_(a).strokeWidth??.1)}),D(()=>_(a),()=>{y(v,_(a).stroke??"black")}),D(()=>_(o),()=>{y(g,dv(E,_(o)))}),Ie(),fe();var O=dP(),b=se(O);{var A=$=>{var F=cP();te(()=>{L(F,"d",_(g)),L(F,"stroke",_(c).stroke),L(F,"stroke-width",_(c).strokeWidth)}),T($,F)};re(b,$=>{$(A)})}var k=M(b);{var G=$=>{var F=uP();te(()=>{L(F,"d",_(g)),L(F,"stroke",_(u).stroke),L(F,"stroke-width",_(u).strokeWidth)}),T($,F)};re(k,$=>{m()===_(i)&&$(G)})}var H=M(k);te(()=>{L(H,"d",_(g)),L(H,"stroke",_(v)),L(H,"stroke-width",_(f))}),T(t,O),le()}var fP=ie('<path fill="none" stroke-linecap="round"></path>'),gP=ie('<path fill="none" stroke-linecap="round"></path>'),hP=ie('<path fill="none" stroke-linecap="round"></path>'),pP=ie("<!><!><!>",1);function vP(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let v=U(e,"tool",8),g=U(e,"c_id",8);const p=v().cell,m=Yt(v().toolId,yt)??Kh;D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>J(v()),()=>{y(o,v().shape??m)}),D(()=>_(o),()=>{y(a,_(o).strokeWidth??.08)}),D(()=>_(o),()=>{y(c,_(o).stroke??"black")}),D(()=>_(o),()=>{y(u,{..._(o),stroke:"var(--grid-background-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.03:.03})}),D(()=>_(o),()=>{y(f,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.05:.05})}),Ie(),fe();var E=pP(),I=se(E);{var O=G=>{var H=Ae(),$=se(H);lt($,1,()=>v().directions,Ot,(F,z)=>{var Q=fP();te(()=>L(Q,"d",ps(p,_(z)))),te(()=>{L(Q,"stroke",_(u).stroke),L(Q,"stroke-width",_(u).strokeWidth)}),T(F,Q)}),T(G,H)};re(I,G=>{G(O)})}var b=M(I);{var A=G=>{var H=Ae(),$=se(H);lt($,1,()=>v().directions,Ot,(F,z)=>{var Q=gP();te(()=>L(Q,"d",ps(p,_(z)))),te(()=>{L(Q,"stroke",_(f).stroke),L(Q,"stroke-width",_(f).strokeWidth)}),T(F,Q)}),T(G,H)};re(b,G=>{g()===_(i)&&G(A)})}var k=M(b);lt(k,1,()=>v().directions,Ot,(G,H)=>{var $=hP();te(()=>L($,"d",ps(p,_(H)))),te(()=>{L($,"stroke",_(c)),L($,"stroke-width",_(a))}),T(G,$)}),T(t,E),le()}var mP=ie('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function dh(t,e){ae(e,!1);const n=Ve(),r=()=>me(X$,"$minimumConstraintsStore",n),i=()=>me(q$,"$maximumConstraintsStore",n),o=N(),a=N(),c=N();let u=U(e,"coord",8),f=U(e,"minOrMax",8);function v(O,b){const A=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let G=0;G<k.length;G++){let H=k[G];const $={r:O.r+H[1],c:O.c+H[0]};A[G]=!Object.values(b).some(F=>je($,F.cell))}return A}function g(O,b){let A=MF(f(),O.r,O.c);const k=v(O,b);return A=A.filter((H,$)=>k[$]),A.map(H=>Uo(H,!1)).join("")}function p(O,b){return f()==="max"?b:O}D(()=>J(u()),()=>{y(o,u().c)}),D(()=>J(u()),()=>{y(a,u().r)}),D(()=>(r(),i()),()=>{y(c,p(r(),i()))}),Ie(),fe();var m=mP(),E=V(m);L(E,"width",1),L(E,"height",1);var I=M(E);te(()=>L(I,"d",g(u(),_(c)))),j(m),te(()=>{L(E,"x",_(o)),L(E,"y",_(a))}),T(t,m),le()}var EP=ie("<circle></circle>");function CP(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=U(e,"x",8),f=U(e,"y",8),v=U(e,"value",8),g=U(e,"shape",8);D(()=>J(g()),()=>{y(n,g().r??.35)}),D(()=>J(g()),()=>{y(r,g().stroke??"black")}),D(()=>J(g()),()=>{var m;y(i,(m=g())==null?void 0:m.opacity)}),D(()=>J(g()),()=>{y(o,g().strokeWidth??.02)}),D(()=>J(v()),()=>{y(a,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>J(g()),()=>{y(c,g().strokeDasharray??0)}),Ie(),fe();var p=EP();te(()=>{L(p,"cx",u()),L(p,"cy",f()),L(p,"r",_(n)),L(p,"stroke",_(r)),L(p,"stroke-width",_(o)),L(p,"fill",_(a)),L(p,"opacity",_(i)),L(p,"stroke-dasharray",_(c))}),T(t,p),le()}var OP=ie("<!><!>",1),IP=ie("<!><!>",1),bP=ie("<!><!><!>",1),wP=ie('<g class="single-cell-tool"><!><!></g>');function yP(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N();let p=U(e,"tool",8),m=U(e,"c_id",8);const E=p().cell,I=Yt(p().toolId,yt)??tw;D(()=>r(),()=>{var $;y(i,($=r())==null?void 0:$.id)}),D(()=>J(p()),()=>{y(o,p().shape??I)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--grid-background-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.06:.06})}),D(()=>_(o),()=>{y(c,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>(_(o),B),()=>{var $;y(u,(($=_(o))==null?void 0:$.type)||B.CIRCLE)}),D(()=>{},()=>{y(f,{x:E.c+.5,y:E.r+.5})}),D(()=>Ne,()=>{y(v,new Ne(E.c,E.r))}),D(()=>J(p()),()=>{y(g,p().value)}),Ie(),fe();var O=wP(),b=V(O);{var A=$=>{dh($,{coord:E,minOrMax:"min"})},k=$=>{var F=Ae(),z=se(F);{var Q=Z=>{dh(Z,{coord:E,minOrMax:"max"})},ce=Z=>{var ne=Ae(),pe=se(ne);{var Ee=Re=>{var Ue=OP(),xe=se(Ue);{var Ce=$e=>{er($e,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(c)}})};re(xe,$e=>{m()===_(i)&&$e(Ce)})}var rt=M(xe);CP(rt,{get x(){return _(f).x},get y(){return _(f).y},get value(){return _(g)},get shape(){return _(o)}}),T(Re,Ue)},ye=Re=>{var Ue=Ae(),xe=se(Ue);{var Ce=$e=>{var At=IP(),Tt=se(At);{var ln=Mt=>{Gr(Mt,{cells:[E],get shape(){return _(c)}})};re(Tt,Mt=>{m()===_(i)&&Mt(ln)})}var Dt=M(Tt);gv(Dt,{cells:[E],get shape(){return _(o)},get value(){return p().value}}),T($e,At)},rt=$e=>{var At=bP(),Tt=se(At);{var ln=Zt=>{er(Zt,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(a)}})};re(Tt,Zt=>{Zt(ln)})}var Dt=M(Tt);{var Mt=Zt=>{er(Zt,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(c)}})};re(Dt,Zt=>{m()===_(i)&&Zt(Mt)})}var Ir=M(Dt);er(Ir,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(o)}}),T($e,At)};re(xe,$e=>{_(u)===B.CAGE?$e(Ce):$e(rt,!1)},!0)}T(Re,Ue)};re(pe,Re=>{p().toolId===d.COLORED_COUNTING_CIRCLES?Re(Ee):Re(ye,!1)},!0)}T(Z,ne)};re(z,Z=>{p().toolId===d.MAXIMUM?Z(Q):Z(ce,!1)},!0)}T($,F)};re(b,$=>{p().toolId===d.MINIMUM?$(A):$(k,!1)})}var G=M(b);{var H=$=>{ys($,{get value(){return _(g)},get x(){return _(v).x},get y(){return _(v).y},position:"TL"})};re(G,$=>{_(u)!==B.CAGE&&p().toolId!==d.COLORED_COUNTING_CIRCLES&&_(g)&&$(H)})}j(O),te(()=>L(O,"id",`constraint-${m()}`)),T(t,O),le()}function LP(t,e){ae(e,!1);let n=U(e,"tool",8),r=U(e,"c_id",8);fe();var i=Ae(),o=se(i);{var a=u=>{_P(u,{get tool(){return n()},get c_id(){return r()}})},c=u=>{var f=Ae(),v=se(f);{var g=m=>{vP(m,{get tool(){return n()},get c_id(){return r()}})},p=m=>{var E=Ae(),I=se(E);{var O=b=>{yP(b,{get tool(){return n()},get c_id(){return r()}})};re(I,b=>{n().type==="SIMPLE"&&b(O)},!0)}T(m,E)};re(v,m=>{n().type==="MULTIARROW"?m(g):m(p,!1)},!0)}T(u,f)};re(o,u=>{n().type==="ARROW"?u(a):u(c,!1)})}T(t,i),le()}var AP=ie('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function hv(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),o=U(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=AP();L(u,"viewBox","0 0 1 1"),L(u,"refX",a),L(u,"refY",a),L(u,"markerWidth",1),L(u,"markerHeight",1);var f=V(u);L(f,"d",c),j(u),te(()=>{L(u,"id",r()),L(f,"stroke-width",i()),L(f,"stroke",o())}),T(t,u)}var SP=ie('<path class="arrow-line" fill="none"></path>'),NP=ie('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function xP(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),v=N(),g=N(),p=N();let m=U(e,"tool",8),E=U(e,"arrowId",8);const I=Yt(m().toolId,yt)??Vh,O="round",b="round",A=crypto.randomUUID(),k=`arrow-mask-${E()}-${A}`,G=`arrow-marker-${E()}-${A}`;D(()=>J(m()),()=>{y(n,m().shape??I)}),D(()=>_(n),()=>{var Z;y(r,((Z=_(n))==null?void 0:Z.r)??.4)}),D(()=>_(n),()=>{var Z;y(i,((Z=_(n))==null?void 0:Z.stroke)??"gray")}),D(()=>_(n),()=>{var Z;y(o,((Z=_(n))==null?void 0:Z.strokeWidth)??.1)}),D(()=>_(n),()=>{var Z;y(a,((Z=_(n))==null?void 0:Z.strokeDasharray)??0)}),D(()=>_(n),()=>{var Z;y(c,((Z=_(n))==null?void 0:Z.opacity)??.8)}),D(()=>(_(r),_(n)),()=>{var Z,ne,pe,Ee;y(u,{shortenHead:_(r),shortenTail:((ne=(Z=_(n))==null?void 0:Z.linePathOptions)==null?void 0:ne.shortenTail)??.2,bezierRounding:((Ee=(pe=_(n))==null?void 0:pe.linePathOptions)==null?void 0:Ee.bezierRounding)??.4})}),D(()=>_(n),()=>{var Z;y(f,((Z=_(n))==null?void 0:Z.fill)??"none")}),D(()=>_(n),()=>{var Z;y(v,((Z=_(n))==null?void 0:Z.inset)??.2)}),D(()=>_(v),()=>{y(g,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:_(v)})}),D(()=>J(m()),()=>{y(p,nl(m().cells))}),Ie(),fe();var H=NP(),$=se(H);L($,"id",k);var F=M(V($));j($);var z=M($);hv(z,{id:G,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var Q=M(z);Gr(Q,{get cells(){return m().cells},get shape(){return _(g)}});var ce=M(Q);lt(ce,1,()=>m().lines,Ot,(Z,ne)=>{var pe=Ae(),Ee=se(pe);{var ye=Re=>{var Ue=SP();te(()=>L(Ue,"d",nl(_(ne),_(u)))),L(Ue,"stroke-linejoin",O),L(Ue,"stroke-linecap",b),L(Ue,"marker-end",`url(#${G??""})`),te(()=>{L(Ue,"stroke",_(i)),L(Ue,"stroke-width",_(o)),L(Ue,"opacity",_(c)),L(Ue,"stroke-dasharray",_(a))}),T(Re,Ue)};re(Ee,Re=>{_(ne).length>1&&Re(ye)})}T(Z,pe)}),te(()=>{L(F,"stroke-width",2*_(r)-_(o)),L(F,"d",_(p))}),T(t,H),le()}var RP=ie('<path class="arrow-line" fill="none"></path>'),TP=ie('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function Eu(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=U(e,"tool",8),f=U(e,"c_id",8),v=U(e,"shape",8);const g="round",p="round",m=crypto.randomUUID(),E=`arrow-mask-${f()}-${m}`,I=`arrow-marker-${f()}-${m}`;D(()=>J(v()),()=>{var $;y(n,(($=v())==null?void 0:$.r)??.4)}),D(()=>J(v()),()=>{var $;y(r,(($=v())==null?void 0:$.stroke)??"gray")}),D(()=>J(v()),()=>{var $;y(i,(($=v())==null?void 0:$.strokeWidth)??.1)}),D(()=>J(v()),()=>{var $;y(o,(($=v())==null?void 0:$.strokeDasharray)??0)}),D(()=>(_(n),J(v())),()=>{var $,F,z,Q;y(a,{shortenHead:_(n),shortenTail:((F=($=v())==null?void 0:$.linePathOptions)==null?void 0:F.shortenTail)??.2,bezierRounding:((Q=(z=v())==null?void 0:z.linePathOptions)==null?void 0:Q.bezierRounding)??.4})}),D(()=>J(u()),()=>{y(c,nl(u().cells))}),Ie(),fe();var O=TP(),b=se(O);L(b,"id",E);var A=M(V(b));j(b);var k=M(b);hv(k,{id:I,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var G=M(k);L(G,"mask",`url(#${E??""})`);var H=M(G);lt(H,1,()=>u().lines,Ot,($,F)=>{var z=Ae(),Q=se(z);{var ce=Z=>{var ne=RP();te(()=>L(ne,"d",nl(_(F),_(a)))),L(ne,"stroke-linejoin",g),L(ne,"stroke-linecap",p),L(ne,"marker-end",`url(#${I??""})`),te(()=>{L(ne,"stroke",_(r)),L(ne,"stroke-width",_(i)),L(ne,"stroke-dasharray",_(o))}),T(Z,ne)};re(Q,Z=>{_(F).length>1&&Z(ce)})}T($,z)}),te(()=>{L(A,"stroke-width",2*_(n)-_(i)),L(A,"d",_(c)),L(G,"d",_(c)),L(G,"stroke-width",2*_(n)+_(i)),L(G,"stroke",_(r))}),T(t,O),le()}var DP=ie("<!><!><!>",1),kP=ie('<g class="arrow-tool"><!></g>');function GP(t,e){ae(e,!1);const n=Ve(),r=()=>me(jt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N();let u=U(e,"tool",8),f=U(e,"c_id",8);const v=Yt(u().toolId,yt)??Vh;D(()=>J(u()),()=>{y(i,u().shape??v)}),D(()=>_(i),()=>{y(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),D(()=>_(i),()=>{y(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;y(c,(I=r())==null?void 0:I.id)}),Ie(),fe();var g=kP(),p=V(g);{var m=I=>{xP(I,{get tool(){return u()},get arrowId(){return f()}})},E=I=>{var O=DP(),b=se(O);{var A=$=>{Eu($,{get tool(){return u()},get c_id(){return f()},get shape(){return _(o)}})};re(b,$=>{$(A)})}var k=M(b);{var G=$=>{Eu($,{get tool(){return u()},get c_id(){return f()},get shape(){return _(a)}})};re(k,$=>{f()===_(c)&&$(G)})}var H=M(k);Eu(H,{get tool(){return u()},get c_id(){return f()},get shape(){return _(i)}}),T(I,O)};re(p,I=>{_(i).type===B.BULBOUS_ARROW?I(m):I(E,!1)})}j(g),T(t,g),le()}var MP=ie('<g class="single-cell-arrow-tool-preview"><path fill="none" stroke-linecap="round"></path><path fill="none" stroke-linecap="round"></path></g>');function UP(t,e){ae(e,!1);const n=N(),r=N(),i=N();let o=U(e,"tool",8);const a=Yt(o().toolId,yt)??jh;D(()=>J(o()),()=>{y(n,o().shape??a)}),D(()=>_(n),()=>{y(r,{..._(n),stroke:"var(--grid-background-color)",strokeWidth:_(n).strokeWidth?_(n).strokeWidth+.05:.05})}),D(()=>J(o()),()=>{y(i,dv(o().cell,o().direction))}),Ie(),fe();var c=MP();L(c,"opacity",.5);var u=V(c),f=M(u);j(c),te(()=>{L(u,"d",_(i)),L(u,"stroke",_(r).stroke),L(u,"stroke-width",_(r).strokeWidth),L(f,"d",_(i)),L(f,"stroke",_(n).stroke),L(f,"stroke-width",_(n).strokeWidth)}),T(t,c),le()}var $P=ie('<path fill="none" stroke-linecap="round"></path>'),FP=ie('<path fill="none" stroke-linecap="round"></path>'),PP=ie('<g class="single-cell-multi-arrow-tool-preview"><!><!></g>');function HP(t,e){ae(e,!1);const n=N(),r=N(),i=N();let o=U(e,"tool",8);const a=Yt(o().toolId,yt)??Kh;D(()=>J(o()),()=>{y(n,o().cell)}),D(()=>J(o()),()=>{y(r,o().shape??a)}),D(()=>_(r),()=>{y(i,{..._(r),stroke:"var(--grid-background-color)",strokeWidth:_(r).strokeWidth?_(r).strokeWidth+.05:.05})}),Ie(),fe();var c=PP();L(c,"opacity",.5);var u=V(c);lt(u,1,()=>o().directions,Ot,(v,g)=>{var p=$P();te(()=>L(p,"d",ps(_(n),_(g)))),te(()=>{L(p,"stroke",_(i).stroke),L(p,"stroke-width",_(i).strokeWidth)}),T(v,p)});var f=M(u);lt(f,1,()=>o().directions,Ot,(v,g)=>{var p=FP();te(()=>L(p,"d",ps(_(n),_(g)))),te(()=>{L(p,"stroke",_(r).stroke),L(p,"stroke-width",_(r).strokeWidth)}),T(v,p)}),j(c),T(t,c),le()}var BP=ie('<g class="edge-tool-preview"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function WP(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=U(e,"tool",8);function v(A,k){return k===B.TEXT_ONLY?A.value?A.value:"-":A.value??""}function g(A){if(A!==d.EDGE_INEQUALITY&&A!==d.ONE_WAY_DOOR)return 0;const k=Ln(_(n)[0]);return Ln(_(n)[1]).subtract(k).angle()/(2*Math.PI)*360}D(()=>J(f()),()=>{y(n,f().cells)}),D(()=>_(n),()=>{y(r,av(ws(_(n))))}),D(()=>(J(f()),Wa),()=>{y(i,Yt(f().toolId,yt)??Wa)}),D(()=>(J(f()),_(i)),()=>{y(o,f().shape??_(i))}),D(()=>(_(o),B),()=>{var A;y(a,((A=_(o))==null?void 0:A.type)||B.CIRCLE)}),D(()=>_(o),()=>{var A;y(c,((A=_(o))==null?void 0:A.fontSize)??.2)}),D(()=>_(o),()=>{var A;y(u,((A=_(o))==null?void 0:A.fontColor)??"black")}),Ie(),fe();var p=BP();L(p,"opacity",.5);var m=V(p);{var E=A=>{Bn(A,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})},I=A=>{var k=Ae(),G=se(k);{var H=F=>{Bn(F,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})},$=F=>{var z=Ae(),Q=se(z);{var ce=ne=>{Yu(ne,{get coords(){return _(n)},get shape(){return _(o)}})},Z=ne=>{er(ne,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return _(o)}})};re(Q,ne=>{_(a)===B.BORDER_LINE?ne(ce):ne(Z,!1)},!0)}T(F,z)};re(G,F=>{_(a)===B.TEXT_ONLY?F(H):F($,!1)},!0)}T(A,k)};re(m,A=>{f().toolId===d.EDGE_INEQUALITY||f().toolId===d.ONE_WAY_DOOR?A(E):A(I,!1)})}var O=M(m);te(()=>L(O,"transform",`rotate(${g(f().toolId)}, ${_(r).x}, ${_(r).y} )`));var b=V(O,!0);te(()=>tt(b,v(f(),_(a)))),j(O),j(p),te(()=>{L(O,"x",_(r).x),L(O,"y",_(r).y),L(O,"font-size",_(c)),L(O,"fill",_(u))}),T(t,p),le()}var zP=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),YP=ie('<g class="edge-tool-preview"><!><!></g>');function jP(t,e){ae(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=U(e,"tool",8);function v(O,b){return b===B.TEXT_ONLY?O.value?O.value:"-":O.value??""}D(()=>(J(f()),za),()=>{y(n,Yt(f().toolId,yt)??za)}),D(()=>(J(f()),_(n)),()=>{y(r,f().shape??_(n))}),D(()=>(_(r),B),()=>{var O;y(i,((O=_(r))==null?void 0:O.type)??B.CIRCLE)}),D(()=>_(r),()=>{var O;y(o,((O=_(r))==null?void 0:O.fontSize)??.2)}),D(()=>_(r),()=>{var O;y(a,((O=_(r))==null?void 0:O.fontColor)??"black")}),D(()=>J(f()),()=>{y(c,f().cells)}),D(()=>_(c),()=>{y(u,new Ne(_(c)[_(c).length-1].c,_(c)[_(c).length-1].r))}),Ie(),fe();var g=YP();L(g,"opacity",.5);var p=V(g);er(p,{get cx(){return _(u).x},get cy(){return _(u).y},get shape(){return _(r)}});var m=M(p);{var E=O=>{fv(O,{get cornerTool(){return f()}})},I=O=>{var b=zP(),A=V(b,!0);te(()=>tt(A,v(f(),_(i)))),j(b),te(()=>{L(b,"x",_(u).x),L(b,"y",_(u).y),L(b,"font-size",_(o)),L(b,"fill",_(a))}),T(O,b)};re(m,O=>{f().toolId===d.QUADRUPLE?O(E):O(I,!1)})}j(g),T(t,g),le()}var KP=ie('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!></svg>');function VP(t,e){ae(e,!1);const n=Ve(),r=()=>me(yn,"$gridStore",n),i=()=>me(mt,"$localConstraintsStore",n),o=()=>me(an,"$toolStore",n),a=()=>me(mn,"$cellsStore",n),c=()=>me(Vd,"$singleCellToolsStore",n),u=()=>me(rF,"$cageToolsStore",n),f=()=>me(eF,"$lineToolsStore",n),v=()=>me(iF,"$cloneToolsStore",n),g=()=>me(nF,"$arrowToolsStore",n),p=()=>me(tF,"$cornerLineToolsStore",n),m=()=>me(oF,"$outsideDirectionToolsStore",n),E=()=>me(Z$,"$edgeToolsStore",n),I=()=>me(J$,"$cornerToolsStore",n),O=()=>me(Q$,"$centerCornerOrEdgeToolsStore",n),b=()=>me(Hu,"$singleCellArrowPreviewStore",n),A=()=>me(Bu,"$singleCellMultiArrowPreviewStore",n),k=()=>me(Wu,"$edgeToolPreviewStore",n),G=()=>me(zu,"$cornerToolPreviewStore",n),H=N(),$=N(),F=N();let z=U(e,"svgRef",12,null);function Q(){for(const[ft,Tn]of i().entries()){if(!Cs(ft))continue;if(Object.entries(Tn).some(([zi,_r])=>!Wt(_r.cell,_($))))return!0}return!1}function ce(ft,Tn){const yr=Q(),zi=Cs(Tn),_r=yr||zi?1:.2,Fo=-_r,Po=-_r,Ho=ft.nCols+2*_r,Bo=ft.nRows+2*_r;return{x:Fo,y:Po,width:Ho,height:Bo}}function Z(ft){return`${ft.x} ${ft.y} ${ft.width} ${ft.height}`}D(()=>r(),()=>{y(H,r())}),D(()=>_(H),()=>{y($,{nRows:_(H).nRows,nCols:_(H).nCols})}),D(()=>(_($),o()),()=>{y(F,ce(_($),o()))}),Ie(),fe();var ne=KP();te(()=>L(ne,"viewBox",Z(_(F))));var pe=V(ne);a4(pe,{get boundingBox(){return _(F)},get gridShape(){return _($)}});var Ee=M(pe);c4(Ee,{get gridShape(){return _($)}});var ye=M(Ee);YF(ye,{get grid(){return r()}});var Re=M(ye);wF(Re,{get gridShape(){return _($)}});var Ue=M(Re);lt(Ue,5,a,Ot,(ft,Tn)=>{C8(ft,{get cell(){return _(Tn)}})}),j(Ue);var xe=M(Ue);F8(xe,{});var Ce=M(xe);pr(Ce,{get elements(){return c()},g_name:"single-cell-tools-layer",Component:LP});var rt=M(Ce);pr(rt,{get elements(){return u()},g_name:"cage-tools-layer",Component:J4});var $e=M(rt);pr($e,{get elements(){return f()},g_name:"line-tools-layer",Component:q4});var At=M($e);pr(At,{get elements(){return v()},g_name:"clone-tools-layer",Component:nP});var Tt=M(At);pr(Tt,{get elements(){return g()},g_name:"arrow-tools-layer",Component:GP});var ln=M(Tt);AF(ln,{});var Dt=M(ln);o4(Dt,{});var Mt=M(Dt);HF(Mt,{});var Ir=M(Mt);pr(Ir,{get elements(){return p()},g_name:"corner-line-tools-layer",Component:lP});var Zt=M(Ir);pr(Zt,{get elements(){return m()},g_name:"outside-direction-tools-layer",Component:iP});var ir=M(Zt);WF(ir,{get boundingBox(){return _(F)}});var Bi=M(ir);IF(Bi,{});var br=M(Bi);pr(br,{get elements(){return E()},g_name:"edge-tools-layer",Component:x4});var wr=M(br);pr(wr,{get elements(){return I()},g_name:"corner-tools-layer",Component:M4});var Fe=M(wr);pr(Fe,{get elements(){return O()},g_name:"center-corner-edge-tools-layer",Component:P4});var be=M(Fe);M8(be,{});var De=M(be);lt(De,5,a,Ot,(ft,Tn)=>{v8(ft,{get cell(){return _(Tn)}})}),j(De);var Me=M(De);f4(Me,{});var St=M(Me);Z8(St,{});var $o=M(St);{var $l=ft=>{UP(ft,{get tool(){return b()}})};re($o,ft=>{ul(o())&&b()&&ft($l)})}var jr=M($o);{var Rn=ft=>{HP(ft,{get tool(){return A()}})};re(jr,ft=>{dl(o())&&A()&&ft(Rn)})}var Kr=M(jr);{var Wi=ft=>{WP(ft,{get tool(){return k()}})};re(Kr,ft=>{_l(o())&&k()&&ft(Wi)})}var Fl=M(Kr);{var hi=ft=>{jP(ft,{get tool(){return G()}})};re(Fl,ft=>{_d(o())&&G()&&ft(hi)})}j(ne),xi(ne,ft=>z(ft),()=>z()),T(t,ne),le()}function XP(t){return pw(t)?(Mb(),!0):!1}function qP(t){return vw(t)?(Tp(),!0):!1}function ZP(t){return mw(t)?(Dp(),!0):!1}function Cu(t){(XP(t)||qP(t)||ZP(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var QP=ue('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function JP(t,e){ae(e,!1);const n=Ve(),r=()=>me(lv,"$InputHandlerStore",n),i=()=>me(_o,"$svgRefStore",n),o=N();let a=N(null);function c(p){return m=>{p&&_(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(a))&&p(m)}}D(()=>r(),()=>{y(o,r())}),Ie();var u=QP();Ge("keydown",tu,function(...p){Cu==null||Cu.apply(this,p)});var f=Gg(()=>{var p;return c((p=_(o))==null?void 0:p.keyDown)});Ge("keydown",tu,function(...p){var m;(m=_(f))==null||m.apply(this,p)});var v=Gg(()=>{var p;return c((p=_(o))==null?void 0:p.keyUp)});Ge("keyup",tu,function(...p){var m;(m=_(v))==null||m.apply(this,p)});var g=V(u);VP(g,{get svgRef(){return bh(),i()},set svgRef(p){Ls(_o,p)},$$legacy:!0}),j(u),xi(u,p=>y(a,p),()=>_(a)),Ge("pointerdown",u,ou(nr(p=>{var m;p.currentTarget.focus(),(m=_(o))==null||m.pointerDown(p)})),!0),Ge("pointermove",u,ou(nr(p=>{var m;p.currentTarget.focus(),(m=_(o))==null||m.pointerMove(p)})),!0),Ge("pointerup",u,ou(nr(p=>{var m;p.currentTarget.focus(),(m=_(o))==null||m.pointerUp(p)})),!0),T(t,u),le()}var e6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function t6(t){var e=e6();T(t,e)}var n6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function r6(t){var e=n6();T(t,e)}var i6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function o6(t){var e=i6();T(t,e)}var s6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function a6(t){var e=s6();T(t,e)}var l6=ue('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function c6(t,e){ae(e,!1);const n=Ve(),r=()=>me(To,"$commandHistoryStore",n),i=()=>me(Uu,"$selectOnStore",n),o=N(),a=N();function c(){Tp()}function u(){Dp()}function f(){console.log("check")}function v(){Ls(Uu,!i())}D(()=>r(),()=>{y(o,r()._undoStack.length===0)}),D(()=>r(),()=>{y(a,r()._redoStack.length===0)}),Ie(),fe();var g=l6(),p=V(g),m=V(p);a6(m),j(p);var E=M(p,2),I=V(E);r6(I),j(E);var O=M(E,2);O.disabled=!0;var b=V(O);t6(b),j(O);var A=M(O,2),k=V(A);o6(k),j(A),j(g),te(()=>{p.disabled=_(o),E.disabled=_(a),L(A,"aria-checked",i()),xt(A,"active",i())}),Ge("click",p,c),Ge("click",E,u),Ge("click",O,f),Ge("click",A,v),T(t,g),le()}var u6=ue('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),d6=ue('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),_6=ue('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),f6=ue('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function g6(t,e){ae(e,!1);const n=Ve(),r=()=>me(ci,"$settingsStore",n),i=()=>me(Ja,"$penColorStore",n),o=()=>me(lv,"$InputHandlerStore",n),a=N(),c=N(),u=[];let f=U(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let p=N(!1);function m(F){return F?g:v}function E(F){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(F)}function I(F){const z=F.currentTarget;if(!z)return;const Q=z.getAttribute("aria-checked");y(p,Q!=="true")}D(()=>r(),()=>{y(a,r().penToolActive)}),D(()=>r(),()=>{y(c,r().letterToolActive)}),Ie(),fe();var O=f6(),b=V(O);{var A=F=>{var z=Ae(),Q=se(z);lt(Q,1,()=>v,Ot,(ce,Z)=>{var ne=u6(),pe=V(ne);sn(pe);var Ee;Ni(2),j(ne),te(()=>{L(ne,"data-value",_(Z)),xt(ne,"active",i()===_(Z)),Ee!==(Ee=_(Z))&&(pe.value=(pe.__value=_(Z))==null?"":_(Z))}),ll(u,[],pe,()=>(_(Z),i()),ye=>Ls(Ja,ye)),T(ce,ne)}),T(F,z)},k=F=>{var z=Ae(),Q=se(z);lt(Q,1,()=>m(_(p)),Ot,(ce,Z)=>{var ne=d6(),pe=V(ne),Ee=V(pe,!0);j(pe),Ni(2),j(ne),te(()=>{Fb(ne,_(Z)),tt(Ee,_(Z))}),Ge("click",ne,function(...ye){var Re;(Re=o()&&o().padClick)==null||Re.apply(this,ye)}),T(ce,ne)}),T(F,z)};re(b,F=>{f()===d.PEN_TOOL&&_(a)?F(A):F(k,!1)})}var G=M(b,2);{var H=F=>{var z=_6();te(()=>{L(z,"aria-checked",_(p)),xt(z,"letter-checked",_(p)),xt(z,"num-checked",!_(p))}),Ge("click",z,I),T(F,z)};re(G,F=>{_(c)&&E(f())&&F(H)})}var $=M(G,2);j(O),te(()=>{xt(O,"digit",f()===d.DIGIT),xt(O,"center",f()===d.CENTER_PM),xt(O,"corner",f()===d.CORNER_PM),xt(O,"color",f()===d.HIGHLIGHTS),xt(O,"pen",f()===d.PEN_TOOL),xt($,"letter-tool",_(c))}),Ge("click",$,function(...F){var z;(z=o()&&o().padClick)==null||z.apply(this,F)}),T(t,O),le()}var h6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function p6(t){var e=h6();T(t,e)}var v6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function m6(t){var e=v6();T(t,e)}var E6=ue('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function os(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),o=U(e,"title",8,void 0);function a(){$u(i())}fe();var c=E6(),u=V(c);sn(u);var f,v=M(u,2);gt(v,e,"default",{}),j(c),te(()=>{L(c,"title",o()),xt(c,"active",i()===r()),f!==(f=i())&&(u.value=(u.__value=i())==null?"":i())}),ll(n,[],u,()=>(i(),r()),r),Ge("change",u,a),T(t,c),le()}var C6=ue('<span aria-hidden="true">1</span>'),O6=ue('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),I6=ue('<span aria-hidden="true" style="font-size: 50%">123</span>'),b6=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),w6=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),y6=ue('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function L6(t,e){ae(e,!1);const n=Ve(),r=()=>me(ci,"$settingsStore",n);let i=U(e,"selectedTool",12);fe();var o=y6(),a=V(o);os(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=C6();T(p,E)},$$slots:{default:!0},$$legacy:!0});var c=M(a,2);os(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=O6();T(p,E)},$$slots:{default:!0},$$legacy:!0});var u=M(c,2);os(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=I6();T(p,E)},$$slots:{default:!0},$$legacy:!0});var f=M(u,2);os(f,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=b6(),I=V(E);p6(I),j(E),T(p,E)},$$slots:{default:!0},$$legacy:!0});var v=M(f,2);{var g=p=>{os(p,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=w6(),O=V(I);m6(O),j(I),T(m,I)},$$slots:{default:!0},$$legacy:!0})};re(v,p=>{r().penToolActive&&p(g)})}j(o),T(t,o),le()}var A6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function S6(t){var e=A6();T(t,e)}var N6=ue('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Bs(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=N6(),o=V(i),a=V(o);gt(a,e,"default",{}),j(o),j(i),te(()=>L(i,"title",n())),Ge("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,i)}var x6=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),R6=ue('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function T6(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){Gp(),el(),n(!1)}fe(),zr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=R6(),u=M(V(c),2);Ll(u,{children:(f,v)=>{var g=x6(),p=se(g),m=M(p,2);Ge("click",p,i),Ge("click",m,r),T(f,g)},$$slots:{default:!0}}),j(c),T(o,c)},$$slots:{default:!0},$$legacy:!0}),le()}var D6=ue("<!> <!>",1);function k6(t){let e=N(!1);function n(){y(e,!0)}var r=D6(),i=se(r);Bs(i,{title:"Restart",clickCb:n,children:(a,c)=>{S6(a)},$$slots:{default:!0}});var o=M(i,2);T6(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var G6=ue('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function ss(t,e){let n=U(e,"title",8);var r=G6(),i=V(r),o=V(i,!0);j(i);var a=M(i,2);gt(a,e,"default",{}),j(r),te(()=>tt(o,n())),T(t,r)}var M6=ue('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function pn(t,e){let n=U(e,"description",8);var r=M6(),i=V(r),o=V(i,!0);j(i);var a=M(i,2),c=V(a);gt(c,e,"default",{}),j(a),j(r),te(()=>tt(o,n())),T(t,r)}var U6=ue('<div class="shortcut svelte-1cgt5u5"> </div>');function dn(t,e){let n=U(e,"shortcut",8);var r=U6(),i=V(r,!0);j(r),te(()=>tt(i,n())),T(t,r)}var $6=ue("<p></p>"),F6=ue("<!> <!> <!> <!>",1),P6=ue("<!> or <!>",1),H6=ue("<!> <!> <!> <!> <!> <!> <!> <!>",1),B6=ue("<!> <!>",1),W6=ue('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function z6(t,e){let n=U(e,"showModal",12,!1);zr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=W6(),a=V(o);ss(a,{title:"Setting Instructions",children:(g,p)=>{var m=$6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",T(g,m)},$$slots:{default:!0}});var c=M(a,2);ss(c,{title:"General",children:(g,p)=>{pn(g,{description:"Toggle Darkmode",children:(m,E)=>{dn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=M(c,2);ss(u,{title:"Selection",children:(g,p)=>{var m=F6(),E=se(m);pn(E,{description:"Select cells",children:(A,k)=>{dn(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=M(E,2);pn(I,{description:"Add to current selection",children:(A,k)=>{dn(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var O=M(I,2);pn(O,{description:"Remove from current selection",children:(A,k)=>{dn(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var b=M(O,2);pn(b,{description:"Add or remove from current selection",children:(A,k)=>{dn(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}});var f=M(u,2);ss(f,{title:"Change Tool",children:(g,p)=>{var m=H6(),E=se(m);pn(E,{description:"Cycle Tool",children:($,F)=>{dn($,{shortcut:"Space"})},$$slots:{default:!0}});var I=M(E,2);pn(I,{description:"Change to Digit Tool",children:($,F)=>{dn($,{shortcut:"Z"})},$$slots:{default:!0}});var O=M(I,2);pn(O,{description:"Change to Corner Pencilmark Tool",children:($,F)=>{dn($,{shortcut:"X"})},$$slots:{default:!0}});var b=M(O,2);pn(b,{description:"Change to Center Pencilmark Tool",children:($,F)=>{dn($,{shortcut:"C"})},$$slots:{default:!0}});var A=M(b,2);pn(A,{description:"Change to Highlights Tool",children:($,F)=>{dn($,{shortcut:"V"})},$$slots:{default:!0}});var k=M(A,2);pn(k,{description:"Quickshift To Corner Pencilmark Tool",children:($,F)=>{dn($,{shortcut:"Shift"})},$$slots:{default:!0}});var G=M(k,2);pn(G,{description:"Quickshift To Center Pencilmark Tool",children:($,F)=>{dn($,{shortcut:"Ctrl"})},$$slots:{default:!0}});var H=M(G,2);pn(H,{description:"Quickshift To Highlights Tool",children:($,F)=>{var z=P6(),Q=se(z);dn(Q,{shortcut:"Shift + Ctrl"});var ce=M(Q,2);dn(ce,{shortcut:"Alt"}),T($,z)},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}});var v=M(f,2);ss(v,{title:"Undo/Redo",children:(g,p)=>{var m=B6(),E=se(m);pn(E,{description:"Undo",children:(O,b)=>{dn(O,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=M(E,2);pn(I,{description:"Redo",children:(O,b)=>{dn(O,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}}),j(o),T(r,o)},$$slots:{default:!0},$$legacy:!0})}var Y6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function j6(t){var e=Y6();T(t,e)}var K6=ue("<!> <!>",1);function V6(t){let e=N(!1);function n(){y(e,!0)}var r=K6(),i=se(r);Bs(i,{title:"Info",clickCb:n,children:(a,c)=>{j6(a)},$$slots:{default:!0}});var o=M(i,2);z6(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var X6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function q6(t){var e=X6();T(t,e)}var Z6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function Q6(t){var e=Z6();T(t,e)}function J6(t){let e=N(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),y(e,!_(e))}Bs(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=Ae(),f=se(u);{var v=p=>{Q6(p)},g=p=>{q6(p)};re(f,p=>{_(e)?p(v):p(g,!1)})}T(a,u)},$$slots:{default:!0}})}function pv(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);fe();var o=Ae(),a=se(o);{var c=u=>{var f=Ae(),v=se(f);Lh(v,()=>r()[n().type],(g,p)=>{p(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=Ae(),O=se(I);{var b=k=>{il(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=k=>{var G=gb();te(()=>tt(G,n().raw)),T(k,G)};re(O,k=>{"tokens"in n()&&n().tokens?k(b):k(A,!1)})}T(m,I)},$$slots:{default:!0}})}),T(u,f)};re(a,u=>{r()[n().type]&&u(c)})}T(t,o),le()}function il(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var o=Ae(),a=se(o);{var c=u=>{var f=Ae(),v=se(f);lt(v,1,n,Ot,(g,p)=>{pv(g,{get token(){return _(p)},get renderers(){return r()},get options(){return i()}})}),T(u,f)};re(a,u=>{n()&&u(c)})}T(t,o)}function vv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function mv(t){return t.startsWith("/")||t.startsWith("#")}function e9(t,e){return e.slug(t).replace(/--+/g,"-")}function t9(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let o=N();D(()=>(J(n()),J(r())),()=>{y(o,e9(n().text,r().slugger))}),Ie(),fe();var a=Ae(),c=se(a);return Sh(c,()=>`h${n().depth}`,!1,(u,f)=>{let v;te(()=>v=yh(u,v,{id:_(o)},void 0,u.namespaceURI===Vu,u.nodeName.includes("-")));var g=Ae(),p=se(g);gt(p,e,"default",{}),T(f,g)}),T(t,a),Je(e,"renderers",i),le({renderers:i})}var n9=ue("<blockquote><!></blockquote>");function r9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=n9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}function i9(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),o=N();D(()=>J(n()),()=>{y(o,n().ordered?"ol":"ul")}),Ie(),fe();var a=Ae(),c=se(a);Sh(c,()=>_(o),!1,(u,f)=>{let v;te(()=>v=yh(u,v,{start:n().start||1},void 0,u.namespaceURI===Vu,u.nodeName.includes("-")));var g=Ae(),p=se(g);lt(p,1,()=>n().items,Ot,(m,E)=>{var I=Qe(()=>({..._(E)}));pv(m,{get token(){return _(I)},get options(){return r()},get renderers(){return i()}})}),T(f,g)}),T(t,a),le()}var o9=ue("<li><!></li>");function s9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=o9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var a9=ue("<br>");function l9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=a9();return T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var c9=ue("<pre><code> </code></pre>");function u9(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=c9(),a=V(o),c=V(a,!0);return j(a),j(o),te(()=>{Bb(a,`lang-${n().lang}`),tt(c,n().text)}),T(t,o),Je(e,"options",r),Je(e,"renderers",i),le({options:r,renderers:i})}var d9=ue("<code> </code>");function _9(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=d9(),a=V(o,!0);return te(()=>tt(a,n().raw.slice(1,n().raw.length-1))),j(o),T(t,o),Je(e,"options",r),Je(e,"renderers",i),le({options:r,renderers:i})}var f9=ue('<th scope="col"><!></th>'),g9=ue("<td><!></td>"),h9=ue("<tr></tr>"),p9=ue("<table><thead><tr></tr></thead><tbody></tbody></table>");function v9(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);fe();var o=p9(),a=V(o),c=V(a);lt(c,5,()=>n().header,Ot,(f,v)=>{var g=f9(),p=V(g);il(p,{get tokens(){return _(v).tokens},get options(){return r()},get renderers(){return i()}}),j(g),T(f,g)}),j(c),j(a);var u=M(a);lt(u,5,()=>n().rows,Ot,(f,v)=>{var g=h9();lt(g,5,()=>_(v),Ot,(p,m)=>{var E=g9(),I=V(E);il(I,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),j(E),T(p,E)}),j(g),T(f,g)}),j(u),j(o),T(t,o),le()}function m9(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;fe();var o=Ae(),a=se(o);return Hb(a,()=>n().text),T(t,o),Je(e,"options",r),Je(e,"renderers",i),le({options:r,renderers:i})}var E9=ue("<p><!></p>");function C9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=E9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var O9=ue("<a><!></a>");function I9(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;fe();var o=O9();te(()=>L(o,"href",mv(n().href)?vv(r().baseUrl,n().href):n().href));var a=V(o);return gt(a,e,"default",{}),j(o),te(()=>L(o,"title",n().title)),T(t,o),Je(e,"renderers",i),le({renderers:i})}function b9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ae(),a=se(o);return gt(a,e,"default",{}),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var w9=ue("<dfn><!></dfn>");function y9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=w9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var L9=ue("<del><!></del>");function A9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=L9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var S9=ue("<em><!></em>");function N9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=S9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var x9=ue("<hr>");function R9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=x9();return T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var T9=ue("<strong><!></strong>");function D9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=T9(),a=V(o);return gt(a,e,"default",{}),j(o),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}var k9=ue('<img class="markdown-image svelte-z38cge">');function G9(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;fe();var o=k9();return te(()=>L(o,"src",mv(n().href)?vv(r().baseUrl,n().href):n().href)),te(()=>{L(o,"title",n().title),L(o,"alt",n().text)}),T(t,o),Je(e,"renderers",i),le({renderers:i})}function _h(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ae(),a=se(o);return gt(a,e,"default",{}),T(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),le({token:n,options:r,renderers:i})}const M9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,U9=Object.hasOwnProperty;class $9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=F9(e,n===!0);const o=i;for(;U9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function F9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(M9,"").replace(/ /g,"-"))}function qd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Hi=qd();function Ev(t){Hi=t}const Cv=/[&<>"']/,P9=new RegExp(Cv.source,"g"),Ov=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,H9=new RegExp(Ov.source,"g"),B9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fh=t=>B9[t];function Pn(t,e){if(e){if(Cv.test(t))return t.replace(P9,fh)}else if(Ov.test(t))return t.replace(H9,fh);return t}const W9=/(^|[^\[])\^/g;function It(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(W9,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function gh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const vs={exec:()=>null};function hh(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,f=a;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function as(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function z9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function ph(t,e,n,r){const i=e.href,o=e.title?Pn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Pn(a)}}function Y9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class ol{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Hi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:as(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=Y9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=as(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:as(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=as(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let f;for(f=0;f<r.length;f++)if(/^ {0,3}>/.test(r[f]))u.push(r[f]),c=!0;else if(!c)u.push(r[f]);else break;r=r.slice(f);const v=u.join(`
`),g=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${v}`:v,o=o?`${o}
${g}`:g;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=p,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),O=this.blockquote(I);a[a.length-1]=O,i=i.substring(0,i.length-E.raw.length)+O.raw,o=o.substring(0,o.length-E.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),O=this.list(I);a[a.length-1]=O,i=i.substring(0,i.length-m.raw.length)+O.raw,o=o.substring(0,o.length-E.raw.length)+O.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,f="",v="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;f=n[0],e=e.substring(f.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),p=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,v=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,v=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(p)&&(f+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),H=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const $=e.split(`
`,1)[0];let F;if(p=$,this.options.pedantic?(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),F=p):F=p.replace(/\t/g,"    "),k.test(p)||G.test(p)||H.test(p)||b.test(p)||A.test(p))break;if(F.search(/[^ ]/)>=E||!p.trim())v+=`
`+F.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(g)||G.test(g)||A.test(g))break;v+=`
`+p}!m&&!p.trim()&&(m=!0),f+=$+`
`,e=e.substring($.length+1),g=F.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(f)&&(c=!0));let I=null,O;this.options.gfm&&(I=/^\[[ xX]\] /.exec(v),I&&(O=I[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:f,task:!!I,checked:O,loose:!1,text:v,tokens:[]}),o.raw+=f}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const f=o.items[u].tokens.filter(g=>g.type==="space"),v=f.length>0&&f.some(g=>/\n.*\n/.test(g.raw));o.loose=v}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=hh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(hh(c,a.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[f]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Pn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=as(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=z9(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),ph(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return ph(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,f=a,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){f+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){v+=u;continue}if(f-=u,f>0)continue;u=Math.min(u,u+f+v);const p=[...i[0]][0].length,m=e.slice(0,a+i.index+p+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Pn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Pn(n[1]),i="mailto:"+r):(r=Pn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Pn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Pn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Pn(n[0]),{type:"text",raw:n[0],text:r}}}}const j9=/^(?:[ \t]*(?:\n|$))+/,K9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,V9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ws=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,X9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Iv=/(?:[*+-]|\d{1,9}[.)])/,bv=It(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Iv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Zd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,q9=/^[^\n]+/,Qd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Z9=It(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Q9=It(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Iv).getRegex(),Ul="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Jd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,J9=It("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Jd).replace("tag",Ul).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wv=It(Zd).replace("hr",Ws).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),eH=It(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",wv).getRegex(),e_={blockquote:eH,code:K9,def:Z9,fences:V9,heading:X9,hr:Ws,html:J9,lheading:bv,list:Q9,newline:j9,paragraph:wv,table:vs,text:q9},vh=It("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ws).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),tH={...e_,table:vh,paragraph:It(Zd).replace("hr",Ws).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",vh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex()},nH={...e_,html:It(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Jd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:vs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:It(Zd).replace("hr",Ws).replace("heading",` *#{1,6} *[^
]`).replace("lheading",bv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},yv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,rH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Lv=/^( {2,}|\\)\n(?!\s*$)/,iH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zs="\\p{P}\\p{S}",oH=It(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,zs).getRegex(),sH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,aH=It(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,zs).getRegex(),lH=It("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,zs).getRegex(),cH=It("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,zs).getRegex(),uH=It(/\\([punct])/,"gu").replace(/punct/g,zs).getRegex(),dH=It(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_H=It(Jd).replace("(?:-->|$)","-->").getRegex(),fH=It("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_H).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),sl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,gH=It(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",sl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Av=It(/^!?\[(label)\]\[(ref)\]/).replace("label",sl).replace("ref",Qd).getRegex(),Sv=It(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qd).getRegex(),hH=It("reflink|nolink(?!\\()","g").replace("reflink",Av).replace("nolink",Sv).getRegex(),t_={_backpedal:vs,anyPunctuation:uH,autolink:dH,blockSkip:sH,br:Lv,code:rH,del:vs,emStrongLDelim:aH,emStrongRDelimAst:lH,emStrongRDelimUnd:cH,escape:yv,link:gH,nolink:Sv,punctuation:oH,reflink:Av,reflinkSearch:hH,tag:fH,text:iH,url:vs},pH={...t_,link:It(/^!?\[(label)\]\((.*?)\)/).replace("label",sl).getRegex(),reflink:It(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",sl).getRegex()},ju={...t_,escape:It(yv).replace("])","~|])").getRegex(),url:It(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},vH={...ju,br:It(Lv).replace("{2,}","*").getRegex(),text:It(ju.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},$a={normal:e_,gfm:tH,pedantic:nH},ls={normal:t_,gfm:ju,breaks:vH,pedantic:pH};class Wn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hi,this.options.tokenizer=this.options.tokenizer||new ol,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:$a.normal,inline:ls.normal};this.options.pedantic?(n.block=$a.pedantic,n.inline=ls.pedantic):this.options.gfm&&(n.block=$a.gfm,this.options.breaks?n.inline=ls.breaks:n.inline=ls.gfm),this.tokenizer.rules=n}static get rules(){return{block:$a,inline:ls}}static lex(e,n){return new Wn(n).lex(e)}static lexInline(e,n){return new Wn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(v=>{f=v.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,f;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(f=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,f)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},g),typeof p=="number"&&p>=0&&(v=Math.min(v,p))}),v<1/0&&v>=0&&(o=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(f=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class al{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Hi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Pn(i)+'">'+(r?o:Pn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Pn(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=gh(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=gh(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class n_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class tr{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Hi,this.options.renderer=this.options.renderer||new al,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new n_}static parse(e,n){return new tr(n).parse(e)}static parseInline(e,n){return new tr(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class ms{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Hi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Wn.lex:Wn.lexInline}provideParser(){return this.block?tr.parse:tr.parseInline}}ve(ms,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class mH{constructor(...e){ve(this,"defaults",qd());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",tr);ve(this,"Renderer",al);ve(this,"TextRenderer",n_);ve(this,"Lexer",Wn);ve(this,"Tokenizer",ol);ve(this,"Hooks",ms);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const f of u)r=r.concat(this.walkTokens(f.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const f=c[u].flat(1/0);r=r.concat(this.walkTokens(f,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new al(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],f=o[c];o[c]=(...v)=>{let g=u.apply(o,v);return g===!1&&(g=f.apply(o,v)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new ol(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],f=o[c];o[c]=(...v)=>{let g=u.apply(o,v);return g===!1&&(g=f.apply(o,v)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new ms;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],f=o[c];ms.passThroughHooks.has(a)?o[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(o,v)).then(p=>f.call(o,p));const g=u.call(o,v);return f.call(o,g)}:o[c]=(...v)=>{let g=u.apply(o,v);return g===!1&&(g=f.apply(o,v)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Wn.lex(e,n??this.defaults)}parser(e,n){return tr.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Wn.lex:Wn.lexInline,f=a.hooks?a.hooks.provideParser():e?tr.parse:tr.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(v=>u(v,a)).then(v=>a.hooks?a.hooks.processAllTokens(v):v).then(v=>a.walkTokens?Promise.all(this.walkTokens(v,a.walkTokens)).then(()=>v):v).then(v=>f(v,a)).then(v=>a.hooks?a.hooks.postprocess(v):v).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let v=u(r,a);a.hooks&&(v=a.hooks.processAllTokens(v)),a.walkTokens&&this.walkTokens(v,a.walkTokens);let g=f(v,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Pn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Gi=new mH;function Ct(t,e){return Gi.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Gi.setOptions(t),Ct.defaults=Gi.defaults,Ev(Ct.defaults),Ct};Ct.getDefaults=qd;Ct.defaults=Hi;Ct.use=function(...t){return Gi.use(...t),Ct.defaults=Gi.defaults,Ev(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Gi.walkTokens(t,e)};Ct.parseInline=Gi.parseInline;Ct.Parser=tr;Ct.parser=tr.parse;Ct.Renderer=al;Ct.TextRenderer=n_;Ct.Lexer=Wn;Ct.lexer=Wn.lex;Ct.Tokenizer=ol;Ct.Hooks=ms;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;tr.parse;Wn.lex;function EH(t){return new Wn().lex(t)}const CH=()=>({heading:t9,blockquote:r9,list:i9,list_item:s9,br:l9,code:u9,codespan:_9,table:v9,html:m9,paragraph:C9,link:I9,text:b9,def:y9,del:A9,em:N9,hr:R9,strong:D9,image:G9,space:_h,escape:_h}),OH=()=>({baseUrl:"/",slugger:new $9});function IH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},Ah(()=>{console.warn=t})}function Nv(t,e){ae(e,!1),IH();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),o=N(),a=N(),c=N();D(()=>(J(n()),J(i()),J(r())),()=>{y(o,EH(n())),y(a,{...CH(),...i()}),y(c,{...OH(),...r()})}),Ie(),fe(),il(t,{get tokens(){return _(o)},get renderers(){return _(a)},get options(){return _(c)}}),le()}var bH=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),wH=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),yH=ue('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function LH(t,e){ae(e,!1);const n=Ve(),r=()=>me(Br,"$puzzleMetaStore",n),i=N();let o=U(e,"showModal",12,!1);function a(u){return u?qa(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{y(i,r())}),Ie(),fe(),zr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,f)=>{var v=yH(),g=V(v),p=V(g,!0);j(g);var m=M(g,2),E=V(m);te(()=>tt(E,`by ${a(_(i).authors)??""}`)),j(m);var I=M(m,2),O=V(I),b=Qe(()=>c(_(i).ruleset));Nv(O,{get source(){return _(b)}}),j(I);var A=M(I,2);{var k=$=>{var F=bH(),z=M(se(F),2);te(()=>L(z,"href",_(i).ctcUrl)),T($,F)};re(A,$=>{var F,z;(z=(F=_(i))==null?void 0:F.ctcUrl)!=null&&z.length&&$(k)})}var G=M(A,2);{var H=$=>{var F=wH(),z=M(se(F),2);te(()=>L(z,"href",_(i).ctcYoutubeUrl)),T($,F)};re(G,$=>{var F,z;(z=(F=_(i))==null?void 0:F.ctcYoutubeUrl)!=null&&z.length&&$(H)})}j(v),te(()=>{var $;return tt(p,(($=_(i))==null?void 0:$.title)||"Puzzle")}),T(u,v)},$$slots:{default:!0},$$legacy:!0}),le()}var AH=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function SH(t){var e=AH();T(t,e)}var NH=ue("<!> <!>",1);function xH(t){let e=N(!1);function n(){y(e,!0)}var r=NH(),i=se(r);Bs(i,{title:"Rules",clickCb:n,children:(a,c)=>{SH(a)},$$slots:{default:!0}});var o=M(i,2);LH(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var RH=ue("<!> <!>",1);function TH(t){let e=N(!1);function n(){y(e,!0)}var r=RH(),i=se(r);Bs(i,{title:"Settings",clickCb:n,children:(a,c)=>{Wp(a)},$$slots:{default:!0}});var o=M(i,2);zp(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),T(t,r)}var DH=ue('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function kH(t){var e=DH(),n=V(e);TH(n);var r=M(n,2);xH(r);var i=M(r,2);J6(i);var o=M(i,2);V6(o);var a=M(o,2);k6(a),j(e),T(t,e)}var GH=ue('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function MH(t,e){ae(e,!1);const n=Ve(),r=()=>me(_o,"$svgRefStore",n),i=()=>me(Br,"$puzzleMetaStore",n),o=()=>me(an,"$toolStore",n),a=N(),c=N();function u(){r()&&r().focus()}function f(Z){return Z?qa(Z," & ",", "):"Anonymous"}function v(Z){return Z&&Z.length?Z:"Normal sudoku rules apply."}D(()=>i(),()=>{y(a,i().title??"Sudoku")}),D(()=>i(),()=>{y(c,f(i().authors))}),Ie(),fe();var g=GH(),p=V(g),m=V(p),E=V(m),I=V(E,!0);j(E);var O=M(E,2),b=V(O);j(O),j(m);var A=M(m,2),k=V(A),G=Qe(()=>v(i().ruleset));Nv(k,{get source(){return _(G)}}),j(A),j(p);var H=M(p,2),$=V(H);kH($);var F=M($,2),z=V(F);g6(z,{get selectedTool(){return o()}});var Q=M(z,2);L6(Q,{get selectedTool(){return bh(),o()},set selectedTool(Z){Ls(an,Z)},$$legacy:!0}),j(F);var ce=M(F,2);c6(ce,{}),j(H),j(g),te(()=>{tt(I,_(a)),tt(b,`by ${_(c)??""}`)}),Ge("click",H,nr(()=>{u()})),T(t,g),le()}var UH=ue('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function JH(t,e){ae(e,!1);const n=Ve(),r=()=>me(Cl,"$gameModeStore",n),i=N();Ah(async()=>{const m=window.location.origin,E=Mg===""?m:`${m}/${Mg}`;try{await i$({workerURL:`${E}/minizinc-worker.js`,wasmURL:`${E}/minizinc.wasm`,dataURL:`${E}/minizinc.data`})}catch(I){const O="Failed to initialize MiniZinc: "+I.message;console.log(O)}}),D(()=>r(),()=>{y(i,r())}),Ie(),fe();var o=UH(),a=V(o),c=V(a);{var u=m=>{M$(m)};re(c,m=>{_(i)===vo.SETTING&&m(u)})}var f=M(c,2),v=V(f);JP(v,{}),j(f);var g=M(f,2),p=V(g);MH(p,{}),j(g),j(a),j(o),T(t,o),le()}export{JH as G,QH as b,fT as p,el as r,GT as s};
