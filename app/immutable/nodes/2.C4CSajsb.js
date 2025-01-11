var Nb=Object.defineProperty;var Db=(t,e,n)=>e in t?Nb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ge=(t,e,n)=>Db(t,typeof e!="symbol"?e+"":e,n);import{b as Kc,e as Tb,a as S,n as re,t as ne,c as Le,d as Rb}from"../chunks/disclose-version.Ct3fDSVq.js";import{i as de}from"../chunks/legacy.ClyFa4S2.js";import{A as Yg,b as _u,h as wt,G as Qo,F as Jo,O as zg,Y as Vg,ad as kb,ae as ng,U as qi,c as cr,au as hs,af as gu,a as ks,ag as jg,C as Xc,av as rg,aw as Gb,H as Mb,ax as Fb,d as hu,B as vu,V as $b,L as Ub,I as Zc,ay as pu,az as mu,a1 as Hb,a7 as og,aA as qg,aB as Pb,aC as Bb,R as Kg,W as Wb,S as Yb,E as zb,aD as Cu,aE as Vb,ac as jb,aF as qb,aG as Kb,ai as Eu,M as Xg,aH as Xb,j as Zb,a9 as Qb,p as ee,aI as G,aJ as ve,t as Z,e as te,x as H,v as q,w as P,$ as x,l as v,aK as D,f as le,aL as mo,m as J,as as Xe,aM as Rc,o as ig,aN as Jb}from"../chunks/runtime.cQGiEnnE.js";import{i as ew,a as tw,b as nw,c as rw,d as ow,e as iw,n as aw,f as sw,l as Iu,g as Re,s as nt,r as lw}from"../chunks/render.DRSTKqOj.js";import{d as cw,s as Ve,e as aa,f as he,p as $,i as fe,b as Co,c as Zg,m as Qg}from"../chunks/props.BivayBCD.js";import{d as ln,w as Ft,g as lt}from"../chunks/index.C12NDSKU.js";import{o as Jg,a as uw}from"../chunks/index-client.DmJlnVTH.js";function gt(t,e){return e}function dw(t,e,n,r){for(var o=[],a=e.length,s=0;s<a;s++)Gb(e[s].e,o,!0);var c=a>0&&o.length===0&&n!==null;if(c){var u=n.parentNode;Mb(u),u.append(n),r.clear(),zr(t,e[0].prev,e[a-1].next)}Fb(o,()=>{for(var _=0;_<a;_++){var g=e[_];c||(r.delete(g.k),zr(t,g.prev,g.next)),hu(g.e,!c)}})}function We(t,e,n,r,o,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&qg)!==0;if(u){var _=t;s=wt?Qo(vu(_)):_.appendChild(Yg())}wt&&Jo();var g=null,h=!1;_u(()=>{var p=n(),m=zg(p)?p:p==null?[]:Vg(p),C=m.length;if(h&&C===0)return;h=C===0;let I=!1;if(wt){var O=s.data===kb;O!==(C===0)&&(s=ng(),Qo(s),qi(!1),I=!0)}if(wt){for(var w=null,N,R=0;R<C;R++){if(cr.nodeType===8&&cr.data===$b){s=cr,I=!0,qi(!1);break}var F=m[R],M=r(F,R);N=eh(cr,c,w,null,F,M,R,o,e),c.items.set(M,N),w=N}C>0&&Qo(ng())}if(!wt){var z=Ub;fw(m,c,s,o,e,(z.f&hs)!==0,r)}a!==null&&(C===0?g?gu(g):g=ks(()=>a(s)):g!==null&&jg(g,()=>{g=null})),I&&qi(!0),n()}),wt&&(s=cr)}function fw(t,e,n,r,o,a,s,c){var Ce,He,ut,xe;var u=(o&Pb)!==0,_=(o&(pu|mu))!==0,g=t.length,h=e.items,p=e.first,m=p,C,I=null,O,w=[],N=[],R,F,M,z;if(u)for(z=0;z<g;z+=1)R=t[z],F=s(R,z),M=h.get(F),M!==void 0&&((Ce=M.a)==null||Ce.measure(),(O??(O=new Set)).add(M));for(z=0;z<g;z+=1){if(R=t[z],F=s(R,z),M=h.get(F),M===void 0){var V=m?m.e.nodes_start:n;I=eh(V,e,I,I===null?e.first:I.next,R,F,z,r,o),h.set(F,I),w=[],N=[],m=I.next;continue}if(_&&_w(M,R,z,o),M.e.f&hs&&(gu(M.e),u&&((He=M.a)==null||He.unfix(),(O??(O=new Set)).delete(M))),M!==m){if(C!==void 0&&C.has(M)){if(w.length<N.length){var K=N[0],se;I=K.prev;var _e=w[0],ie=w[w.length-1];for(se=0;se<w.length;se+=1)ag(w[se],K,n);for(se=0;se<N.length;se+=1)C.delete(N[se]);zr(e,_e.prev,ie.next),zr(e,I,_e),zr(e,ie,K),m=K,I=ie,z-=1,w=[],N=[]}else C.delete(M),ag(M,m,n),zr(e,M.prev,M.next),zr(e,M,I===null?e.first:I.next),zr(e,I,M),I=M;continue}for(w=[],N=[];m!==null&&m.k!==F;)(a||!(m.e.f&hs))&&(C??(C=new Set)).add(m),N.push(m),m=m.next;if(m===null)continue;M=m}w.push(M),I=M,m=M.next}if(m!==null||C!==void 0){for(var ce=C===void 0?[]:Vg(C);m!==null;)(a||!(m.e.f&hs))&&ce.push(m),m=m.next;var be=ce.length;if(be>0){var Ie=o&qg&&g===0?n:null;if(u){for(z=0;z<be;z+=1)(ut=ce[z].a)==null||ut.measure();for(z=0;z<be;z+=1)(xe=ce[z].a)==null||xe.fix()}dw(e,ce,Ie,h)}}u&&Zc(()=>{var Ee;if(O!==void 0)for(M of O)(Ee=M.a)==null||Ee.apply()}),Xc.first=e.first&&e.first.e,Xc.last=I&&I.e}function _w(t,e,n,r){r&pu&&rg(t.v,e),r&mu?rg(t.i,n):t.i=n}function eh(t,e,n,r,o,a,s,c,u,_){var g=(u&pu)!==0,h=(u&Bb)===0,p=g?h?Hb(o):og(o):o,m=u&mu?og(s):s,C={i:m,v:p,k:a,a:null,e:null,prev:n,next:r};try{return C.e=ks(()=>c(t,p,m),wt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function ag(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=Kg(a);o.before(a),a=s}}function zr(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function gw(t,e,n,r,o){var a=t,s="",c;_u(()=>{if(s===(s=e()??"")){wt&&Jo();return}c!==void 0&&(hu(c),c=void 0),s!==""&&(c=ks(()=>{if(wt){cr.data;for(var u=Jo(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=Kg(u);if(u===null)throw Wb(),Yb;Kc(cr,_),a=Qo(u);return}var g=s+"",h=Tb(g);Kc(vu(h),h.lastChild),a.before(h)}))})}function dt(t,e,n,r,o){var c;wt&&Jo();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function th(t,e,n,r,o,a){let s=wt;wt&&Jo();var c,u,_=null;wt&&cr.nodeType===1&&(_=cr,Jo());var g=wt?cr:t,h;_u(()=>{const p=e()||null;var m=p==="svg"?Cu:null;p!==c&&(h&&(p===null?jg(h,()=>{h=null,u=null}):p===u?gu(h):hu(h)),p&&p!==u&&(h=ks(()=>{if(_=wt?_:m?document.createElementNS(m,p):document.createElement(p),Kc(_,_),r){wt&&ew(p)&&_.append(document.createComment(""));var C=wt?vu(_):_.appendChild(Yg());wt&&(C===null?qi(!1):Qo(C)),r(_,C)}Xc.nodes_end=_,g.before(_)})),c=p,c&&(u=c))},zb),s&&(qi(!0),Qo(g))}function nh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=nh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function hw(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=nh(t))&&(r&&(r+=" "),r+=e);return r}function vw(t){return typeof t=="object"?hw(t):t??""}function qt(t){if(wt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;A(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;A(t,"checked",null),t.checked=o}}};t.__on_r=n,Kb(n),tw()}}function pw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function rh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function mw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function A(t,e,n,r){var o=t.__attributes??(t.__attributes={});wt&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Vb]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ih(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function oh(t,e,n,r,o=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=vw(n.class));var g=ih(t),h=t.__attributes??(t.__attributes={});for(const w in n){let N=n[w];if(u&&w==="value"&&N==null){t.value=t.__value="",c[w]=N;continue}var p=c[w];if(N!==p){c[w]=N;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const R={},F="$$"+w;let M=w.slice(2);var C=sw(M);if(nw(M)&&(M=M.slice(0,-7),R.capture=!0),!C&&p){if(N!=null)continue;t.removeEventListener(M,c[F],R),c[F]=null}if(N!=null)if(C)t[`__${M}`]=N,ow([M]);else{let z=function(V){c[w].call(this,V)};c[F]=rw(M,t,z,R)}else C&&(t[`__${M}`]=void 0)}else if(w==="style"&&N!=null)t.style.cssText=N+"";else if(w==="autofocus")iw(t,!!N);else if(w==="__value"||w==="value"&&N!=null)t.value=t[w]=t.__value=N;else if(w==="selected"&&u)mw(t,N);else{var I=w;o||(I=aw(I));var O=I==="defaultValue"||I==="defaultChecked";if(N==null&&!a&&!O)if(h[w]=null,I==="value"||I==="checked"){let R=t;if(I==="value"){let F=R.defaultValue;R.removeAttribute(I),R.defaultValue=F}else{let F=R.defaultChecked;R.removeAttribute(I),R.defaultChecked=F}}else t.removeAttribute(w);else O||g.includes(I)&&(a||typeof N!="string")?t[I]=N:typeof N!="function"&&(wt&&(I==="src"||I==="href"||I==="srcset")||A(t,I,N))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var sg=new Map;function ih(t){var e=sg.get(t.nodeName);if(e)return e;sg.set(t.nodeName,e=[]);for(var n,r=t,o=Element.prototype;o!==r;){n=qb(r);for(var a in n)n[a].set&&e.push(a);r=jb(r)}return e}function Gn(t,e,n){var r=t.__className,o=ah(e);wt&&t.getAttribute("class")===o?t.__className=o:(r!==o||wt&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function Cw(t,e,n){var r=t.__className,o=ah(e);wt&&t.className===o?t.__className=o:(r!==o||wt&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function ah(t,e){return(t??"")+""}function Lt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=Xb();Iu(t,"input",o=>{var a=o?t.defaultValue:t.value;if(a=Gc(t)?Mc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(wt&&t.defaultValue!==t.value||Zb(e)==null&&t.value)&&n(Gc(t)?Mc(t.value):t.value),Eu(()=>{var o=e();Gc(t)&&o===Mc(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const kc=new Set;function Gs(t,e,n,r,o=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Iu(n,"change",()=>{var _=n.__value;a&&(_=lg(s,_,n.checked)),o(_)},()=>o(a?[]:null)),Eu(()=>{var _=r();if(wt&&n.defaultChecked!==n.checked){c=!0;return}a?(_=_||[],n.checked=_.includes(n.__value)):n.checked=cw(n.__value,_)}),Xg(()=>{var _=s.indexOf(n);_!==-1&&s.splice(_,1)}),kc.has(s)||(kc.add(s),Zc(()=>{s.sort((_,g)=>_.compareDocumentPosition(g)===4?-1:1),kc.delete(s)})),Zc(()=>{if(c){var _;if(a)_=lg(s,_,n.checked);else{var g=s.find(h=>h.checked);_=g==null?void 0:g.__value}o(_)}})}function lg(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Gc(t){var e=t.type;return e==="number"||e==="range"}function Mc(t){return t===""?null:+t}function Ew(t,e,n=e){Iu(t,"change",()=>{n(t.files)}),Eu(()=>{t.files=e()})}function Ze(t,e,n){var r=Qb(t,e);r&&r.set&&(t[e]=n,Xg(()=>{t[e]=null}))}function Iw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Xn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Fc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function bw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=zg(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}const ww=!0,IU=Object.freeze(Object.defineProperty({__proto__:null,prerender:ww},Symbol.toStringTag,{value:"Module"}));function Ow(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=Ft(Ow()),Lw=ln(Wt,t=>t.darkMode);function yw(t){Wt.update(e=>({...e,darkMode:t}))}function Aw(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function xw(t){Wt.update(e=>({...e,penToolActive:t}))}function Sw(t){Wt.update(e=>({...e,letterToolActive:t}))}function Nw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function Dw(t){Wt.update(e=>({...e,checkConflicts:t}))}function Tw(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function Rw(t){Wt.update(e=>({...e,hideFog:t}))}function kw(t){Wt.update(e=>({...e,showSolution:t}))}var Gw=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function Mw(t){var e=Gw();S(t,e)}var Fw=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function $w(t){var e=Fw();S(t,e)}var Uw=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function Hw(t){var e=Uw();S(t,e)}var Pw=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function Bw(t){var e=Pw();S(t,e)}var bu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(bu||{}),sh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(sh||{}),lh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(lh||{}),ch=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(ch||{}),uh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t))(uh||{}),Ms=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CAVE_CLUE="Cave Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t))(Ms||{}),wu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(wu||{}),Ou=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t))(Ou||{}),Lu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t))(Lu||{}),yu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t))(yu||{}),Au=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Au||{}),xu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(xu||{}),Su=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Su||{}),Nu=(t=>(t.CLONE_REGION="Clone Region",t))(Nu||{}),Du=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t))(Du||{}),Tu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Tu||{}),Ru=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t))(Ru||{}),ku=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(ku||{}),Gu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Gu||{}),dh=(t=>(t.PEN_TOOL="Pen Tool",t))(dh||{});const Mu={...sh,...lh,...ch,...uh},fh={...Ms,...wu,...Ou,...Lu,...yu,...Au,...xu,...Su,...Nu,...Du,...Tu,...Ru,...ku},f={...bu,...Mu,...fh,...Gu,...dh};var T=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(T||{});function Ww(t){return Object.values(Mu).includes(t)}function Yw(t){return Object.values(fh).includes(t)}function Fu(t){return Object.values(wu).includes(t)||t===f.COSMETIC_CELL_ARROW}function $u(t){return Object.values(Ou).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function zw(t){return Object.values(Ms).includes(t)||Fu(t)||$u(t)||t===f.COSMETIC_CELL_SHAPE||t===f.COSMETIC_CELL_ARROW||t===f.COSMETIC_CELL_MULTI_ARROW}function Uu(t){return Object.values(Lu).includes(t)||t===f.COSMETIC_EDGE}function _h(t){return Object.values(yu).includes(t)||t===f.COSMETIC_CORNER}function Hu(t){return Object.values(Au).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Pu(t){return Object.values(xu).includes(t)||t===f.COSMETIC_ARROW}function Bu(t){return Object.values(Su).includes(t)||t===f.COSMETIC_CAGE}function Vw(t){return Object.values(Ru).includes(t)}function gh(t){return Object.values(Nu).includes(t)}function ta(t){const e=Object.values(Du),n=Object.values(Tu);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function jw(t){return Object.values(ku).includes(t)}function qw(t){return Object.values(Gu).includes(t)}function Wu(t){return Object.values(bu).includes(t)}const Kw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Xw=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function hh(t){for(const e of Object.values(f))if(e===t)return e}function vh(t,e){return Object.values(e).includes(t)}class ei extends Map{constructor(){super()}setConstraint(e,n){return Ww(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new ei;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new ei;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=hh(r);a!==void 0&&vh(a,Mu)&&typeof o=="boolean"&&o&&n.setConstraint(a,o)}return n}}var Pe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Pe||{});function ph(t){if(!(t in Pe))throw Error(" not a key in DIRECTION");return Pe[t]}function qe(t,e){return t.r===e.r&&t.c===e.c}function Zw(t,e){return{r:t.r+e.r,c:t.c+e.c}}function Qw(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Fs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!qe(t,e)}function Jw(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function ms(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Kt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function $s(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function eO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function tO(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function nO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const rO=new Map([[6,Pe.N],[2,Pe.S],[0,Pe.E],[4,Pe.W],[7,Pe.NE],[5,Pe.NW],[1,Pe.SE],[3,Pe.SW]]);function Yu(t){t=t%8;const e=rO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const oO=new Map([[Pe.N,{r:-1,c:0}],[Pe.S,{r:1,c:0}],[Pe.E,{r:0,c:1}],[Pe.W,{r:0,c:-1}],[Pe.NE,{r:-1,c:1}],[Pe.NW,{r:-1,c:-1}],[Pe.SE,{r:1,c:1}],[Pe.SW,{r:1,c:-1}]]);function Us(t){const e=oO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function mh(t,e){const n=Us(e);return Zw(t,n)}function iO(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Ch(t,e,n=!1){const r=t.some(a=>qe(a,e)),o=n?t.some(a=>Fs(a,e)):t.some(a=>Jw(a,e));if(!r&&o){const a=[...t,e];return ms(a),a}return t}function ls(t){return`R${t.r+1}C${t.c+1}`}function zu(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var aO=zi.exports,cg;function sO(){return cg||(cg=1,function(t,e){(function(){var n,r="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,g="__lodash_placeholder__",h=1,p=2,m=4,C=1,I=2,O=1,w=2,N=4,R=8,F=16,M=32,z=64,V=128,K=256,se=512,_e=30,ie="...",ce=800,be=16,Ie=1,Ce=2,He=3,ut=1/0,xe=9007199254740991,Ee=17976931348623157e292,ht=NaN,ct=4294967295,fn=ct-1,$n=ct>>>1,ro=[["ary",V],["bind",O],["bindKey",w],["curry",R],["curryRight",F],["flip",se],["partial",M],["partialRight",z],["rearg",K]],ot="[object Arguments]",zt="[object Array]",or="[object AsyncFunction]",Un="[object Boolean]",_n="[object Date]",Ii="[object DOMException]",ke="[object Error]",ye="[object Function]",Ge="[object GeneratorFunction]",Se="[object Map]",$t="[object Number]",jv="[object Null]",hr="[object Object]",Ld="[object Promise]",qv="[object Proxy]",bi="[object RegExp]",Qn="[object Set]",wi="[object String]",Ca="[object Symbol]",Kv="[object Undefined]",Oi="[object WeakMap]",Xv="[object WeakSet]",Li="[object ArrayBuffer]",Ro="[object DataView]",fl="[object Float32Array]",_l="[object Float64Array]",gl="[object Int8Array]",hl="[object Int16Array]",vl="[object Int32Array]",pl="[object Uint8Array]",ml="[object Uint8ClampedArray]",Cl="[object Uint16Array]",El="[object Uint32Array]",Zv=/\b__p \+= '';/g,Qv=/\b(__p \+=) '' \+/g,Jv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,yd=/&(?:amp|lt|gt|quot|#39);/g,Ad=/[&<>"']/g,ep=RegExp(yd.source),tp=RegExp(Ad.source),np=/<%-([\s\S]+?)%>/g,rp=/<%([\s\S]+?)%>/g,xd=/<%=([\s\S]+?)%>/g,op=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ip=/^\w*$/,ap=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Il=/[\\^$.*+?()[\]{}|]/g,sp=RegExp(Il.source),bl=/^\s+/,lp=/\s/,cp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,up=/\{\n\/\* \[wrapped with (.+)\] \*/,dp=/,? & /,fp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_p=/[()=,{}\[\]\/\s]/,gp=/\\(\\)?/g,hp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Sd=/\w*$/,vp=/^[-+]0x[0-9a-f]+$/i,pp=/^0b[01]+$/i,mp=/^\[object .+?Constructor\]$/,Cp=/^0o[0-7]+$/i,Ep=/^(?:0|[1-9]\d*)$/,Ip=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ea=/($^)/,bp=/['\n\r\u2028\u2029\\]/g,Ia="\\ud800-\\udfff",wp="\\u0300-\\u036f",Op="\\ufe20-\\ufe2f",Lp="\\u20d0-\\u20ff",Nd=wp+Op+Lp,Dd="\\u2700-\\u27bf",Td="a-z\\xdf-\\xf6\\xf8-\\xff",yp="\\xac\\xb1\\xd7\\xf7",Ap="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xp="\\u2000-\\u206f",Sp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rd="A-Z\\xc0-\\xd6\\xd8-\\xde",kd="\\ufe0e\\ufe0f",Gd=yp+Ap+xp+Sp,wl="['’]",Np="["+Ia+"]",Md="["+Gd+"]",ba="["+Nd+"]",Fd="\\d+",Dp="["+Dd+"]",$d="["+Td+"]",Ud="[^"+Ia+Gd+Fd+Dd+Td+Rd+"]",Ol="\\ud83c[\\udffb-\\udfff]",Tp="(?:"+ba+"|"+Ol+")",Hd="[^"+Ia+"]",Ll="(?:\\ud83c[\\udde6-\\uddff]){2}",yl="[\\ud800-\\udbff][\\udc00-\\udfff]",ko="["+Rd+"]",Pd="\\u200d",Bd="(?:"+$d+"|"+Ud+")",Rp="(?:"+ko+"|"+Ud+")",Wd="(?:"+wl+"(?:d|ll|m|re|s|t|ve))?",Yd="(?:"+wl+"(?:D|LL|M|RE|S|T|VE))?",zd=Tp+"?",Vd="["+kd+"]?",kp="(?:"+Pd+"(?:"+[Hd,Ll,yl].join("|")+")"+Vd+zd+")*",Gp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Mp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jd=Vd+zd+kp,Fp="(?:"+[Dp,Ll,yl].join("|")+")"+jd,$p="(?:"+[Hd+ba+"?",ba,Ll,yl,Np].join("|")+")",Up=RegExp(wl,"g"),Hp=RegExp(ba,"g"),Al=RegExp(Ol+"(?="+Ol+")|"+$p+jd,"g"),Pp=RegExp([ko+"?"+$d+"+"+Wd+"(?="+[Md,ko,"$"].join("|")+")",Rp+"+"+Yd+"(?="+[Md,ko+Bd,"$"].join("|")+")",ko+"?"+Bd+"+"+Wd,ko+"+"+Yd,Mp,Gp,Fd,Fp].join("|"),"g"),Bp=RegExp("["+Pd+Ia+Nd+kd+"]"),Wp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Yp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zp=-1,yt={};yt[fl]=yt[_l]=yt[gl]=yt[hl]=yt[vl]=yt[pl]=yt[ml]=yt[Cl]=yt[El]=!0,yt[ot]=yt[zt]=yt[Li]=yt[Un]=yt[Ro]=yt[_n]=yt[ke]=yt[ye]=yt[Se]=yt[$t]=yt[hr]=yt[bi]=yt[Qn]=yt[wi]=yt[Oi]=!1;var Ot={};Ot[ot]=Ot[zt]=Ot[Li]=Ot[Ro]=Ot[Un]=Ot[_n]=Ot[fl]=Ot[_l]=Ot[gl]=Ot[hl]=Ot[vl]=Ot[Se]=Ot[$t]=Ot[hr]=Ot[bi]=Ot[Qn]=Ot[wi]=Ot[Ca]=Ot[pl]=Ot[ml]=Ot[Cl]=Ot[El]=!0,Ot[ke]=Ot[ye]=Ot[Oi]=!1;var Vp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},jp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Kp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xp=parseFloat,Zp=parseInt,qd=typeof cs=="object"&&cs&&cs.Object===Object&&cs,Qp=typeof self=="object"&&self&&self.Object===Object&&self,Vt=qd||Qp||Function("return this")(),xl=e&&!e.nodeType&&e,oo=xl&&!0&&t&&!t.nodeType&&t,Kd=oo&&oo.exports===xl,Sl=Kd&&qd.process,Hn=function(){try{var Y=oo&&oo.require&&oo.require("util").types;return Y||Sl&&Sl.binding&&Sl.binding("util")}catch{}}(),Xd=Hn&&Hn.isArrayBuffer,Zd=Hn&&Hn.isDate,Qd=Hn&&Hn.isMap,Jd=Hn&&Hn.isRegExp,ef=Hn&&Hn.isSet,tf=Hn&&Hn.isTypedArray;function On(Y,Q,X){switch(X.length){case 0:return Y.call(Q);case 1:return Y.call(Q,X[0]);case 2:return Y.call(Q,X[0],X[1]);case 3:return Y.call(Q,X[0],X[1],X[2])}return Y.apply(Q,X)}function Jp(Y,Q,X,we){for(var je=-1,_t=Y==null?0:Y.length;++je<_t;){var Ut=Y[je];Q(we,Ut,X(Ut),Y)}return we}function Pn(Y,Q){for(var X=-1,we=Y==null?0:Y.length;++X<we&&Q(Y[X],X,Y)!==!1;);return Y}function em(Y,Q){for(var X=Y==null?0:Y.length;X--&&Q(Y[X],X,Y)!==!1;);return Y}function nf(Y,Q){for(var X=-1,we=Y==null?0:Y.length;++X<we;)if(!Q(Y[X],X,Y))return!1;return!0}function kr(Y,Q){for(var X=-1,we=Y==null?0:Y.length,je=0,_t=[];++X<we;){var Ut=Y[X];Q(Ut,X,Y)&&(_t[je++]=Ut)}return _t}function wa(Y,Q){var X=Y==null?0:Y.length;return!!X&&Go(Y,Q,0)>-1}function Nl(Y,Q,X){for(var we=-1,je=Y==null?0:Y.length;++we<je;)if(X(Q,Y[we]))return!0;return!1}function xt(Y,Q){for(var X=-1,we=Y==null?0:Y.length,je=Array(we);++X<we;)je[X]=Q(Y[X],X,Y);return je}function Gr(Y,Q){for(var X=-1,we=Q.length,je=Y.length;++X<we;)Y[je+X]=Q[X];return Y}function Dl(Y,Q,X,we){var je=-1,_t=Y==null?0:Y.length;for(we&&_t&&(X=Y[++je]);++je<_t;)X=Q(X,Y[je],je,Y);return X}function tm(Y,Q,X,we){var je=Y==null?0:Y.length;for(we&&je&&(X=Y[--je]);je--;)X=Q(X,Y[je],je,Y);return X}function Tl(Y,Q){for(var X=-1,we=Y==null?0:Y.length;++X<we;)if(Q(Y[X],X,Y))return!0;return!1}var nm=Rl("length");function rm(Y){return Y.split("")}function om(Y){return Y.match(fp)||[]}function rf(Y,Q,X){var we;return X(Y,function(je,_t,Ut){if(Q(je,_t,Ut))return we=_t,!1}),we}function Oa(Y,Q,X,we){for(var je=Y.length,_t=X+(we?1:-1);we?_t--:++_t<je;)if(Q(Y[_t],_t,Y))return _t;return-1}function Go(Y,Q,X){return Q===Q?vm(Y,Q,X):Oa(Y,of,X)}function im(Y,Q,X,we){for(var je=X-1,_t=Y.length;++je<_t;)if(we(Y[je],Q))return je;return-1}function of(Y){return Y!==Y}function af(Y,Q){var X=Y==null?0:Y.length;return X?Gl(Y,Q)/X:ht}function Rl(Y){return function(Q){return Q==null?n:Q[Y]}}function kl(Y){return function(Q){return Y==null?n:Y[Q]}}function sf(Y,Q,X,we,je){return je(Y,function(_t,Ut,bt){X=we?(we=!1,_t):Q(X,_t,Ut,bt)}),X}function am(Y,Q){var X=Y.length;for(Y.sort(Q);X--;)Y[X]=Y[X].value;return Y}function Gl(Y,Q){for(var X,we=-1,je=Y.length;++we<je;){var _t=Q(Y[we]);_t!==n&&(X=X===n?_t:X+_t)}return X}function Ml(Y,Q){for(var X=-1,we=Array(Y);++X<Y;)we[X]=Q(X);return we}function sm(Y,Q){return xt(Q,function(X){return[X,Y[X]]})}function lf(Y){return Y&&Y.slice(0,ff(Y)+1).replace(bl,"")}function Ln(Y){return function(Q){return Y(Q)}}function Fl(Y,Q){return xt(Q,function(X){return Y[X]})}function yi(Y,Q){return Y.has(Q)}function cf(Y,Q){for(var X=-1,we=Y.length;++X<we&&Go(Q,Y[X],0)>-1;);return X}function uf(Y,Q){for(var X=Y.length;X--&&Go(Q,Y[X],0)>-1;);return X}function lm(Y,Q){for(var X=Y.length,we=0;X--;)Y[X]===Q&&++we;return we}var cm=kl(Vp),um=kl(jp);function dm(Y){return"\\"+Kp[Y]}function fm(Y,Q){return Y==null?n:Y[Q]}function Mo(Y){return Bp.test(Y)}function _m(Y){return Wp.test(Y)}function gm(Y){for(var Q,X=[];!(Q=Y.next()).done;)X.push(Q.value);return X}function $l(Y){var Q=-1,X=Array(Y.size);return Y.forEach(function(we,je){X[++Q]=[je,we]}),X}function df(Y,Q){return function(X){return Y(Q(X))}}function Mr(Y,Q){for(var X=-1,we=Y.length,je=0,_t=[];++X<we;){var Ut=Y[X];(Ut===Q||Ut===g)&&(Y[X]=g,_t[je++]=X)}return _t}function La(Y){var Q=-1,X=Array(Y.size);return Y.forEach(function(we){X[++Q]=we}),X}function hm(Y){var Q=-1,X=Array(Y.size);return Y.forEach(function(we){X[++Q]=[we,we]}),X}function vm(Y,Q,X){for(var we=X-1,je=Y.length;++we<je;)if(Y[we]===Q)return we;return-1}function pm(Y,Q,X){for(var we=X+1;we--;)if(Y[we]===Q)return we;return we}function Fo(Y){return Mo(Y)?Cm(Y):nm(Y)}function Jn(Y){return Mo(Y)?Em(Y):rm(Y)}function ff(Y){for(var Q=Y.length;Q--&&lp.test(Y.charAt(Q)););return Q}var mm=kl(qp);function Cm(Y){for(var Q=Al.lastIndex=0;Al.test(Y);)++Q;return Q}function Em(Y){return Y.match(Al)||[]}function Im(Y){return Y.match(Pp)||[]}var bm=function Y(Q){Q=Q==null?Vt:$o.defaults(Vt.Object(),Q,$o.pick(Vt,Yp));var X=Q.Array,we=Q.Date,je=Q.Error,_t=Q.Function,Ut=Q.Math,bt=Q.Object,Ul=Q.RegExp,wm=Q.String,Bn=Q.TypeError,ya=X.prototype,Om=_t.prototype,Uo=bt.prototype,Aa=Q["__core-js_shared__"],xa=Om.toString,pt=Uo.hasOwnProperty,Lm=0,_f=function(){var i=/[^.]+$/.exec(Aa&&Aa.keys&&Aa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Sa=Uo.toString,ym=xa.call(bt),Am=Vt._,xm=Ul("^"+xa.call(pt).replace(Il,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Na=Kd?Q.Buffer:n,Fr=Q.Symbol,Da=Q.Uint8Array,gf=Na?Na.allocUnsafe:n,Ta=df(bt.getPrototypeOf,bt),hf=bt.create,vf=Uo.propertyIsEnumerable,Ra=ya.splice,pf=Fr?Fr.isConcatSpreadable:n,Ai=Fr?Fr.iterator:n,io=Fr?Fr.toStringTag:n,ka=function(){try{var i=uo(bt,"defineProperty");return i({},"",{}),i}catch{}}(),Sm=Q.clearTimeout!==Vt.clearTimeout&&Q.clearTimeout,Nm=we&&we.now!==Vt.Date.now&&we.now,Dm=Q.setTimeout!==Vt.setTimeout&&Q.setTimeout,Ga=Ut.ceil,Ma=Ut.floor,Hl=bt.getOwnPropertySymbols,Tm=Na?Na.isBuffer:n,mf=Q.isFinite,Rm=ya.join,km=df(bt.keys,bt),Ht=Ut.max,Zt=Ut.min,Gm=we.now,Mm=Q.parseInt,Cf=Ut.random,Fm=ya.reverse,Pl=uo(Q,"DataView"),xi=uo(Q,"Map"),Bl=uo(Q,"Promise"),Ho=uo(Q,"Set"),Si=uo(Q,"WeakMap"),Ni=uo(bt,"create"),Fa=Si&&new Si,Po={},$m=fo(Pl),Um=fo(xi),Hm=fo(Bl),Pm=fo(Ho),Bm=fo(Si),$a=Fr?Fr.prototype:n,Di=$a?$a.valueOf:n,Ef=$a?$a.toString:n;function L(i){if(Nt(i)&&!Ke(i)&&!(i instanceof at)){if(i instanceof Wn)return i;if(pt.call(i,"__wrapped__"))return I_(i)}return new Wn(i)}var Bo=function(){function i(){}return function(l){if(!St(l))return{};if(hf)return hf(l);i.prototype=l;var d=new i;return i.prototype=n,d}}();function Ua(){}function Wn(i,l){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:np,evaluate:rp,interpolate:xd,variable:"",imports:{_:L}},L.prototype=Ua.prototype,L.prototype.constructor=L,Wn.prototype=Bo(Ua.prototype),Wn.prototype.constructor=Wn;function at(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function Wm(){var i=new at(this.__wrapped__);return i.__actions__=gn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=gn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=gn(this.__views__),i}function Ym(){if(this.__filtered__){var i=new at(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function zm(){var i=this.__wrapped__.value(),l=this.__dir__,d=Ke(i),E=l<0,b=d?i.length:0,y=r0(0,b,this.__views__),k=y.start,U=y.end,j=U-k,oe=E?U:k-1,ae=this.__iteratees__,ue=ae.length,me=0,De=Zt(j,this.__takeCount__);if(!d||!E&&b==j&&De==j)return Yf(i,this.__actions__);var $e=[];e:for(;j--&&me<De;){oe+=l;for(var et=-1,Ue=i[oe];++et<ue;){var it=ae[et],st=it.iteratee,xn=it.type,nn=st(Ue);if(xn==Ce)Ue=nn;else if(!nn){if(xn==Ie)continue e;break e}}$e[me++]=Ue}return $e}at.prototype=Bo(Ua.prototype),at.prototype.constructor=at;function ao(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function Vm(){this.__data__=Ni?Ni(null):{},this.size=0}function jm(i){var l=this.has(i)&&delete this.__data__[i];return this.size-=l?1:0,l}function qm(i){var l=this.__data__;if(Ni){var d=l[i];return d===u?n:d}return pt.call(l,i)?l[i]:n}function Km(i){var l=this.__data__;return Ni?l[i]!==n:pt.call(l,i)}function Xm(i,l){var d=this.__data__;return this.size+=this.has(i)?0:1,d[i]=Ni&&l===n?u:l,this}ao.prototype.clear=Vm,ao.prototype.delete=jm,ao.prototype.get=qm,ao.prototype.has=Km,ao.prototype.set=Xm;function vr(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function Zm(){this.__data__=[],this.size=0}function Qm(i){var l=this.__data__,d=Ha(l,i);if(d<0)return!1;var E=l.length-1;return d==E?l.pop():Ra.call(l,d,1),--this.size,!0}function Jm(i){var l=this.__data__,d=Ha(l,i);return d<0?n:l[d][1]}function e1(i){return Ha(this.__data__,i)>-1}function t1(i,l){var d=this.__data__,E=Ha(d,i);return E<0?(++this.size,d.push([i,l])):d[E][1]=l,this}vr.prototype.clear=Zm,vr.prototype.delete=Qm,vr.prototype.get=Jm,vr.prototype.has=e1,vr.prototype.set=t1;function pr(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function n1(){this.size=0,this.__data__={hash:new ao,map:new(xi||vr),string:new ao}}function r1(i){var l=Qa(this,i).delete(i);return this.size-=l?1:0,l}function o1(i){return Qa(this,i).get(i)}function i1(i){return Qa(this,i).has(i)}function a1(i,l){var d=Qa(this,i),E=d.size;return d.set(i,l),this.size+=d.size==E?0:1,this}pr.prototype.clear=n1,pr.prototype.delete=r1,pr.prototype.get=o1,pr.prototype.has=i1,pr.prototype.set=a1;function so(i){var l=-1,d=i==null?0:i.length;for(this.__data__=new pr;++l<d;)this.add(i[l])}function s1(i){return this.__data__.set(i,u),this}function l1(i){return this.__data__.has(i)}so.prototype.add=so.prototype.push=s1,so.prototype.has=l1;function er(i){var l=this.__data__=new vr(i);this.size=l.size}function c1(){this.__data__=new vr,this.size=0}function u1(i){var l=this.__data__,d=l.delete(i);return this.size=l.size,d}function d1(i){return this.__data__.get(i)}function f1(i){return this.__data__.has(i)}function _1(i,l){var d=this.__data__;if(d instanceof vr){var E=d.__data__;if(!xi||E.length<o-1)return E.push([i,l]),this.size=++d.size,this;d=this.__data__=new pr(E)}return d.set(i,l),this.size=d.size,this}er.prototype.clear=c1,er.prototype.delete=u1,er.prototype.get=d1,er.prototype.has=f1,er.prototype.set=_1;function If(i,l){var d=Ke(i),E=!d&&_o(i),b=!d&&!E&&Br(i),y=!d&&!E&&!b&&Vo(i),k=d||E||b||y,U=k?Ml(i.length,wm):[],j=U.length;for(var oe in i)(l||pt.call(i,oe))&&!(k&&(oe=="length"||b&&(oe=="offset"||oe=="parent")||y&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Ir(oe,j)))&&U.push(oe);return U}function bf(i){var l=i.length;return l?i[Jl(0,l-1)]:n}function g1(i,l){return Ja(gn(i),lo(l,0,i.length))}function h1(i){return Ja(gn(i))}function Wl(i,l,d){(d!==n&&!tr(i[l],d)||d===n&&!(l in i))&&mr(i,l,d)}function Ti(i,l,d){var E=i[l];(!(pt.call(i,l)&&tr(E,d))||d===n&&!(l in i))&&mr(i,l,d)}function Ha(i,l){for(var d=i.length;d--;)if(tr(i[d][0],l))return d;return-1}function v1(i,l,d,E){return $r(i,function(b,y,k){l(E,b,d(b),k)}),E}function wf(i,l){return i&&ar(l,Bt(l),i)}function p1(i,l){return i&&ar(l,vn(l),i)}function mr(i,l,d){l=="__proto__"&&ka?ka(i,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):i[l]=d}function Yl(i,l){for(var d=-1,E=l.length,b=X(E),y=i==null;++d<E;)b[d]=y?n:Oc(i,l[d]);return b}function lo(i,l,d){return i===i&&(d!==n&&(i=i<=d?i:d),l!==n&&(i=i>=l?i:l)),i}function Yn(i,l,d,E,b,y){var k,U=l&h,j=l&p,oe=l&m;if(d&&(k=b?d(i,E,b,y):d(i)),k!==n)return k;if(!St(i))return i;var ae=Ke(i);if(ae){if(k=i0(i),!U)return gn(i,k)}else{var ue=Qt(i),me=ue==ye||ue==Ge;if(Br(i))return jf(i,U);if(ue==hr||ue==ot||me&&!b){if(k=j||me?{}:f_(i),!U)return j?q1(i,p1(k,i)):j1(i,wf(k,i))}else{if(!Ot[ue])return b?i:{};k=a0(i,ue,U)}}y||(y=new er);var De=y.get(i);if(De)return De;y.set(i,k),P_(i)?i.forEach(function(Ue){k.add(Yn(Ue,l,d,Ue,i,y))}):U_(i)&&i.forEach(function(Ue,it){k.set(it,Yn(Ue,l,d,it,i,y))});var $e=oe?j?uc:cc:j?vn:Bt,et=ae?n:$e(i);return Pn(et||i,function(Ue,it){et&&(it=Ue,Ue=i[it]),Ti(k,it,Yn(Ue,l,d,it,i,y))}),k}function m1(i){var l=Bt(i);return function(d){return Of(d,i,l)}}function Of(i,l,d){var E=d.length;if(i==null)return!E;for(i=bt(i);E--;){var b=d[E],y=l[b],k=i[b];if(k===n&&!(b in i)||!y(k))return!1}return!0}function Lf(i,l,d){if(typeof i!="function")throw new Bn(s);return Ui(function(){i.apply(n,d)},l)}function Ri(i,l,d,E){var b=-1,y=wa,k=!0,U=i.length,j=[],oe=l.length;if(!U)return j;d&&(l=xt(l,Ln(d))),E?(y=Nl,k=!1):l.length>=o&&(y=yi,k=!1,l=new so(l));e:for(;++b<U;){var ae=i[b],ue=d==null?ae:d(ae);if(ae=E||ae!==0?ae:0,k&&ue===ue){for(var me=oe;me--;)if(l[me]===ue)continue e;j.push(ae)}else y(l,ue,E)||j.push(ae)}return j}var $r=Qf(ir),yf=Qf(Vl,!0);function C1(i,l){var d=!0;return $r(i,function(E,b,y){return d=!!l(E,b,y),d}),d}function Pa(i,l,d){for(var E=-1,b=i.length;++E<b;){var y=i[E],k=l(y);if(k!=null&&(U===n?k===k&&!An(k):d(k,U)))var U=k,j=y}return j}function E1(i,l,d,E){var b=i.length;for(d=Qe(d),d<0&&(d=-d>b?0:b+d),E=E===n||E>b?b:Qe(E),E<0&&(E+=b),E=d>E?0:W_(E);d<E;)i[d++]=l;return i}function Af(i,l){var d=[];return $r(i,function(E,b,y){l(E,b,y)&&d.push(E)}),d}function jt(i,l,d,E,b){var y=-1,k=i.length;for(d||(d=l0),b||(b=[]);++y<k;){var U=i[y];l>0&&d(U)?l>1?jt(U,l-1,d,E,b):Gr(b,U):E||(b[b.length]=U)}return b}var zl=Jf(),xf=Jf(!0);function ir(i,l){return i&&zl(i,l,Bt)}function Vl(i,l){return i&&xf(i,l,Bt)}function Ba(i,l){return kr(l,function(d){return br(i[d])})}function co(i,l){l=Hr(l,i);for(var d=0,E=l.length;i!=null&&d<E;)i=i[sr(l[d++])];return d&&d==E?i:n}function Sf(i,l,d){var E=l(i);return Ke(i)?E:Gr(E,d(i))}function en(i){return i==null?i===n?Kv:jv:io&&io in bt(i)?n0(i):h0(i)}function jl(i,l){return i>l}function I1(i,l){return i!=null&&pt.call(i,l)}function b1(i,l){return i!=null&&l in bt(i)}function w1(i,l,d){return i>=Zt(l,d)&&i<Ht(l,d)}function ql(i,l,d){for(var E=d?Nl:wa,b=i[0].length,y=i.length,k=y,U=X(y),j=1/0,oe=[];k--;){var ae=i[k];k&&l&&(ae=xt(ae,Ln(l))),j=Zt(ae.length,j),U[k]=!d&&(l||b>=120&&ae.length>=120)?new so(k&&ae):n}ae=i[0];var ue=-1,me=U[0];e:for(;++ue<b&&oe.length<j;){var De=ae[ue],$e=l?l(De):De;if(De=d||De!==0?De:0,!(me?yi(me,$e):E(oe,$e,d))){for(k=y;--k;){var et=U[k];if(!(et?yi(et,$e):E(i[k],$e,d)))continue e}me&&me.push($e),oe.push(De)}}return oe}function O1(i,l,d,E){return ir(i,function(b,y,k){l(E,d(b),y,k)}),E}function ki(i,l,d){l=Hr(l,i),i=v_(i,l);var E=i==null?i:i[sr(Vn(l))];return E==null?n:On(E,i,d)}function Nf(i){return Nt(i)&&en(i)==ot}function L1(i){return Nt(i)&&en(i)==Li}function y1(i){return Nt(i)&&en(i)==_n}function Gi(i,l,d,E,b){return i===l?!0:i==null||l==null||!Nt(i)&&!Nt(l)?i!==i&&l!==l:A1(i,l,d,E,Gi,b)}function A1(i,l,d,E,b,y){var k=Ke(i),U=Ke(l),j=k?zt:Qt(i),oe=U?zt:Qt(l);j=j==ot?hr:j,oe=oe==ot?hr:oe;var ae=j==hr,ue=oe==hr,me=j==oe;if(me&&Br(i)){if(!Br(l))return!1;k=!0,ae=!1}if(me&&!ae)return y||(y=new er),k||Vo(i)?c_(i,l,d,E,b,y):e0(i,l,j,d,E,b,y);if(!(d&C)){var De=ae&&pt.call(i,"__wrapped__"),$e=ue&&pt.call(l,"__wrapped__");if(De||$e){var et=De?i.value():i,Ue=$e?l.value():l;return y||(y=new er),b(et,Ue,d,E,y)}}return me?(y||(y=new er),t0(i,l,d,E,b,y)):!1}function x1(i){return Nt(i)&&Qt(i)==Se}function Kl(i,l,d,E){var b=d.length,y=b,k=!E;if(i==null)return!y;for(i=bt(i);b--;){var U=d[b];if(k&&U[2]?U[1]!==i[U[0]]:!(U[0]in i))return!1}for(;++b<y;){U=d[b];var j=U[0],oe=i[j],ae=U[1];if(k&&U[2]){if(oe===n&&!(j in i))return!1}else{var ue=new er;if(E)var me=E(oe,ae,j,i,l,ue);if(!(me===n?Gi(ae,oe,C|I,E,ue):me))return!1}}return!0}function Df(i){if(!St(i)||u0(i))return!1;var l=br(i)?xm:mp;return l.test(fo(i))}function S1(i){return Nt(i)&&en(i)==bi}function N1(i){return Nt(i)&&Qt(i)==Qn}function D1(i){return Nt(i)&&is(i.length)&&!!yt[en(i)]}function Tf(i){return typeof i=="function"?i:i==null?pn:typeof i=="object"?Ke(i)?Gf(i[0],i[1]):kf(i):eg(i)}function Xl(i){if(!$i(i))return km(i);var l=[];for(var d in bt(i))pt.call(i,d)&&d!="constructor"&&l.push(d);return l}function T1(i){if(!St(i))return g0(i);var l=$i(i),d=[];for(var E in i)E=="constructor"&&(l||!pt.call(i,E))||d.push(E);return d}function Zl(i,l){return i<l}function Rf(i,l){var d=-1,E=hn(i)?X(i.length):[];return $r(i,function(b,y,k){E[++d]=l(b,y,k)}),E}function kf(i){var l=fc(i);return l.length==1&&l[0][2]?g_(l[0][0],l[0][1]):function(d){return d===i||Kl(d,i,l)}}function Gf(i,l){return gc(i)&&__(l)?g_(sr(i),l):function(d){var E=Oc(d,i);return E===n&&E===l?Lc(d,i):Gi(l,E,C|I)}}function Wa(i,l,d,E,b){i!==l&&zl(l,function(y,k){if(b||(b=new er),St(y))R1(i,l,k,d,Wa,E,b);else{var U=E?E(vc(i,k),y,k+"",i,l,b):n;U===n&&(U=y),Wl(i,k,U)}},vn)}function R1(i,l,d,E,b,y,k){var U=vc(i,d),j=vc(l,d),oe=k.get(j);if(oe){Wl(i,d,oe);return}var ae=y?y(U,j,d+"",i,l,k):n,ue=ae===n;if(ue){var me=Ke(j),De=!me&&Br(j),$e=!me&&!De&&Vo(j);ae=j,me||De||$e?Ke(U)?ae=U:Dt(U)?ae=gn(U):De?(ue=!1,ae=jf(j,!0)):$e?(ue=!1,ae=qf(j,!0)):ae=[]:Hi(j)||_o(j)?(ae=U,_o(U)?ae=Y_(U):(!St(U)||br(U))&&(ae=f_(j))):ue=!1}ue&&(k.set(j,ae),b(ae,j,E,y,k),k.delete(j)),Wl(i,d,ae)}function Mf(i,l){var d=i.length;if(d)return l+=l<0?d:0,Ir(l,d)?i[l]:n}function Ff(i,l,d){l.length?l=xt(l,function(y){return Ke(y)?function(k){return co(k,y.length===1?y[0]:y)}:y}):l=[pn];var E=-1;l=xt(l,Ln(Fe()));var b=Rf(i,function(y,k,U){var j=xt(l,function(oe){return oe(y)});return{criteria:j,index:++E,value:y}});return am(b,function(y,k){return V1(y,k,d)})}function k1(i,l){return $f(i,l,function(d,E){return Lc(i,E)})}function $f(i,l,d){for(var E=-1,b=l.length,y={};++E<b;){var k=l[E],U=co(i,k);d(U,k)&&Mi(y,Hr(k,i),U)}return y}function G1(i){return function(l){return co(l,i)}}function Ql(i,l,d,E){var b=E?im:Go,y=-1,k=l.length,U=i;for(i===l&&(l=gn(l)),d&&(U=xt(i,Ln(d)));++y<k;)for(var j=0,oe=l[y],ae=d?d(oe):oe;(j=b(U,ae,j,E))>-1;)U!==i&&Ra.call(U,j,1),Ra.call(i,j,1);return i}function Uf(i,l){for(var d=i?l.length:0,E=d-1;d--;){var b=l[d];if(d==E||b!==y){var y=b;Ir(b)?Ra.call(i,b,1):nc(i,b)}}return i}function Jl(i,l){return i+Ma(Cf()*(l-i+1))}function M1(i,l,d,E){for(var b=-1,y=Ht(Ga((l-i)/(d||1)),0),k=X(y);y--;)k[E?y:++b]=i,i+=d;return k}function ec(i,l){var d="";if(!i||l<1||l>xe)return d;do l%2&&(d+=i),l=Ma(l/2),l&&(i+=i);while(l);return d}function tt(i,l){return pc(h_(i,l,pn),i+"")}function F1(i){return bf(jo(i))}function $1(i,l){var d=jo(i);return Ja(d,lo(l,0,d.length))}function Mi(i,l,d,E){if(!St(i))return i;l=Hr(l,i);for(var b=-1,y=l.length,k=y-1,U=i;U!=null&&++b<y;){var j=sr(l[b]),oe=d;if(j==="__proto__"||j==="constructor"||j==="prototype")return i;if(b!=k){var ae=U[j];oe=E?E(ae,j,U):n,oe===n&&(oe=St(ae)?ae:Ir(l[b+1])?[]:{})}Ti(U,j,oe),U=U[j]}return i}var Hf=Fa?function(i,l){return Fa.set(i,l),i}:pn,U1=ka?function(i,l){return ka(i,"toString",{configurable:!0,enumerable:!1,value:Ac(l),writable:!0})}:pn;function H1(i){return Ja(jo(i))}function zn(i,l,d){var E=-1,b=i.length;l<0&&(l=-l>b?0:b+l),d=d>b?b:d,d<0&&(d+=b),b=l>d?0:d-l>>>0,l>>>=0;for(var y=X(b);++E<b;)y[E]=i[E+l];return y}function P1(i,l){var d;return $r(i,function(E,b,y){return d=l(E,b,y),!d}),!!d}function Ya(i,l,d){var E=0,b=i==null?E:i.length;if(typeof l=="number"&&l===l&&b<=$n){for(;E<b;){var y=E+b>>>1,k=i[y];k!==null&&!An(k)&&(d?k<=l:k<l)?E=y+1:b=y}return b}return tc(i,l,pn,d)}function tc(i,l,d,E){var b=0,y=i==null?0:i.length;if(y===0)return 0;l=d(l);for(var k=l!==l,U=l===null,j=An(l),oe=l===n;b<y;){var ae=Ma((b+y)/2),ue=d(i[ae]),me=ue!==n,De=ue===null,$e=ue===ue,et=An(ue);if(k)var Ue=E||$e;else oe?Ue=$e&&(E||me):U?Ue=$e&&me&&(E||!De):j?Ue=$e&&me&&!De&&(E||!et):De||et?Ue=!1:Ue=E?ue<=l:ue<l;Ue?b=ae+1:y=ae}return Zt(y,fn)}function Pf(i,l){for(var d=-1,E=i.length,b=0,y=[];++d<E;){var k=i[d],U=l?l(k):k;if(!d||!tr(U,j)){var j=U;y[b++]=k===0?0:k}}return y}function Bf(i){return typeof i=="number"?i:An(i)?ht:+i}function yn(i){if(typeof i=="string")return i;if(Ke(i))return xt(i,yn)+"";if(An(i))return Ef?Ef.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Ur(i,l,d){var E=-1,b=wa,y=i.length,k=!0,U=[],j=U;if(d)k=!1,b=Nl;else if(y>=o){var oe=l?null:Q1(i);if(oe)return La(oe);k=!1,b=yi,j=new so}else j=l?[]:U;e:for(;++E<y;){var ae=i[E],ue=l?l(ae):ae;if(ae=d||ae!==0?ae:0,k&&ue===ue){for(var me=j.length;me--;)if(j[me]===ue)continue e;l&&j.push(ue),U.push(ae)}else b(j,ue,d)||(j!==U&&j.push(ue),U.push(ae))}return U}function nc(i,l){return l=Hr(l,i),i=v_(i,l),i==null||delete i[sr(Vn(l))]}function Wf(i,l,d,E){return Mi(i,l,d(co(i,l)),E)}function za(i,l,d,E){for(var b=i.length,y=E?b:-1;(E?y--:++y<b)&&l(i[y],y,i););return d?zn(i,E?0:y,E?y+1:b):zn(i,E?y+1:0,E?b:y)}function Yf(i,l){var d=i;return d instanceof at&&(d=d.value()),Dl(l,function(E,b){return b.func.apply(b.thisArg,Gr([E],b.args))},d)}function rc(i,l,d){var E=i.length;if(E<2)return E?Ur(i[0]):[];for(var b=-1,y=X(E);++b<E;)for(var k=i[b],U=-1;++U<E;)U!=b&&(y[b]=Ri(y[b]||k,i[U],l,d));return Ur(jt(y,1),l,d)}function zf(i,l,d){for(var E=-1,b=i.length,y=l.length,k={};++E<b;){var U=E<y?l[E]:n;d(k,i[E],U)}return k}function oc(i){return Dt(i)?i:[]}function ic(i){return typeof i=="function"?i:pn}function Hr(i,l){return Ke(i)?i:gc(i,l)?[i]:E_(vt(i))}var B1=tt;function Pr(i,l,d){var E=i.length;return d=d===n?E:d,!l&&d>=E?i:zn(i,l,d)}var Vf=Sm||function(i){return Vt.clearTimeout(i)};function jf(i,l){if(l)return i.slice();var d=i.length,E=gf?gf(d):new i.constructor(d);return i.copy(E),E}function ac(i){var l=new i.constructor(i.byteLength);return new Da(l).set(new Da(i)),l}function W1(i,l){var d=l?ac(i.buffer):i.buffer;return new i.constructor(d,i.byteOffset,i.byteLength)}function Y1(i){var l=new i.constructor(i.source,Sd.exec(i));return l.lastIndex=i.lastIndex,l}function z1(i){return Di?bt(Di.call(i)):{}}function qf(i,l){var d=l?ac(i.buffer):i.buffer;return new i.constructor(d,i.byteOffset,i.length)}function Kf(i,l){if(i!==l){var d=i!==n,E=i===null,b=i===i,y=An(i),k=l!==n,U=l===null,j=l===l,oe=An(l);if(!U&&!oe&&!y&&i>l||y&&k&&j&&!U&&!oe||E&&k&&j||!d&&j||!b)return 1;if(!E&&!y&&!oe&&i<l||oe&&d&&b&&!E&&!y||U&&d&&b||!k&&b||!j)return-1}return 0}function V1(i,l,d){for(var E=-1,b=i.criteria,y=l.criteria,k=b.length,U=d.length;++E<k;){var j=Kf(b[E],y[E]);if(j){if(E>=U)return j;var oe=d[E];return j*(oe=="desc"?-1:1)}}return i.index-l.index}function Xf(i,l,d,E){for(var b=-1,y=i.length,k=d.length,U=-1,j=l.length,oe=Ht(y-k,0),ae=X(j+oe),ue=!E;++U<j;)ae[U]=l[U];for(;++b<k;)(ue||b<y)&&(ae[d[b]]=i[b]);for(;oe--;)ae[U++]=i[b++];return ae}function Zf(i,l,d,E){for(var b=-1,y=i.length,k=-1,U=d.length,j=-1,oe=l.length,ae=Ht(y-U,0),ue=X(ae+oe),me=!E;++b<ae;)ue[b]=i[b];for(var De=b;++j<oe;)ue[De+j]=l[j];for(;++k<U;)(me||b<y)&&(ue[De+d[k]]=i[b++]);return ue}function gn(i,l){var d=-1,E=i.length;for(l||(l=X(E));++d<E;)l[d]=i[d];return l}function ar(i,l,d,E){var b=!d;d||(d={});for(var y=-1,k=l.length;++y<k;){var U=l[y],j=E?E(d[U],i[U],U,d,i):n;j===n&&(j=i[U]),b?mr(d,U,j):Ti(d,U,j)}return d}function j1(i,l){return ar(i,_c(i),l)}function q1(i,l){return ar(i,u_(i),l)}function Va(i,l){return function(d,E){var b=Ke(d)?Jp:v1,y=l?l():{};return b(d,i,Fe(E,2),y)}}function Wo(i){return tt(function(l,d){var E=-1,b=d.length,y=b>1?d[b-1]:n,k=b>2?d[2]:n;for(y=i.length>3&&typeof y=="function"?(b--,y):n,k&&tn(d[0],d[1],k)&&(y=b<3?n:y,b=1),l=bt(l);++E<b;){var U=d[E];U&&i(l,U,E,y)}return l})}function Qf(i,l){return function(d,E){if(d==null)return d;if(!hn(d))return i(d,E);for(var b=d.length,y=l?b:-1,k=bt(d);(l?y--:++y<b)&&E(k[y],y,k)!==!1;);return d}}function Jf(i){return function(l,d,E){for(var b=-1,y=bt(l),k=E(l),U=k.length;U--;){var j=k[i?U:++b];if(d(y[j],j,y)===!1)break}return l}}function K1(i,l,d){var E=l&O,b=Fi(i);function y(){var k=this&&this!==Vt&&this instanceof y?b:i;return k.apply(E?d:this,arguments)}return y}function e_(i){return function(l){l=vt(l);var d=Mo(l)?Jn(l):n,E=d?d[0]:l.charAt(0),b=d?Pr(d,1).join(""):l.slice(1);return E[i]()+b}}function Yo(i){return function(l){return Dl(Q_(Z_(l).replace(Up,"")),i,"")}}function Fi(i){return function(){var l=arguments;switch(l.length){case 0:return new i;case 1:return new i(l[0]);case 2:return new i(l[0],l[1]);case 3:return new i(l[0],l[1],l[2]);case 4:return new i(l[0],l[1],l[2],l[3]);case 5:return new i(l[0],l[1],l[2],l[3],l[4]);case 6:return new i(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new i(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=Bo(i.prototype),E=i.apply(d,l);return St(E)?E:d}}function X1(i,l,d){var E=Fi(i);function b(){for(var y=arguments.length,k=X(y),U=y,j=zo(b);U--;)k[U]=arguments[U];var oe=y<3&&k[0]!==j&&k[y-1]!==j?[]:Mr(k,j);if(y-=oe.length,y<d)return i_(i,l,ja,b.placeholder,n,k,oe,n,n,d-y);var ae=this&&this!==Vt&&this instanceof b?E:i;return On(ae,this,k)}return b}function t_(i){return function(l,d,E){var b=bt(l);if(!hn(l)){var y=Fe(d,3);l=Bt(l),d=function(U){return y(b[U],U,b)}}var k=i(l,d,E);return k>-1?b[y?l[k]:k]:n}}function n_(i){return Er(function(l){var d=l.length,E=d,b=Wn.prototype.thru;for(i&&l.reverse();E--;){var y=l[E];if(typeof y!="function")throw new Bn(s);if(b&&!k&&Za(y)=="wrapper")var k=new Wn([],!0)}for(E=k?E:d;++E<d;){y=l[E];var U=Za(y),j=U=="wrapper"?dc(y):n;j&&hc(j[0])&&j[1]==(V|R|M|K)&&!j[4].length&&j[9]==1?k=k[Za(j[0])].apply(k,j[3]):k=y.length==1&&hc(y)?k[U]():k.thru(y)}return function(){var oe=arguments,ae=oe[0];if(k&&oe.length==1&&Ke(ae))return k.plant(ae).value();for(var ue=0,me=d?l[ue].apply(this,oe):ae;++ue<d;)me=l[ue].call(this,me);return me}})}function ja(i,l,d,E,b,y,k,U,j,oe){var ae=l&V,ue=l&O,me=l&w,De=l&(R|F),$e=l&se,et=me?n:Fi(i);function Ue(){for(var it=arguments.length,st=X(it),xn=it;xn--;)st[xn]=arguments[xn];if(De)var nn=zo(Ue),Sn=lm(st,nn);if(E&&(st=Xf(st,E,b,De)),y&&(st=Zf(st,y,k,De)),it-=Sn,De&&it<oe){var Tt=Mr(st,nn);return i_(i,l,ja,Ue.placeholder,d,st,Tt,U,j,oe-it)}var nr=ue?d:this,Or=me?nr[i]:i;return it=st.length,U?st=v0(st,U):$e&&it>1&&st.reverse(),ae&&j<it&&(st.length=j),this&&this!==Vt&&this instanceof Ue&&(Or=et||Fi(Or)),Or.apply(nr,st)}return Ue}function r_(i,l){return function(d,E){return O1(d,i,l(E),{})}}function qa(i,l){return function(d,E){var b;if(d===n&&E===n)return l;if(d!==n&&(b=d),E!==n){if(b===n)return E;typeof d=="string"||typeof E=="string"?(d=yn(d),E=yn(E)):(d=Bf(d),E=Bf(E)),b=i(d,E)}return b}}function sc(i){return Er(function(l){return l=xt(l,Ln(Fe())),tt(function(d){var E=this;return i(l,function(b){return On(b,E,d)})})})}function Ka(i,l){l=l===n?" ":yn(l);var d=l.length;if(d<2)return d?ec(l,i):l;var E=ec(l,Ga(i/Fo(l)));return Mo(l)?Pr(Jn(E),0,i).join(""):E.slice(0,i)}function Z1(i,l,d,E){var b=l&O,y=Fi(i);function k(){for(var U=-1,j=arguments.length,oe=-1,ae=E.length,ue=X(ae+j),me=this&&this!==Vt&&this instanceof k?y:i;++oe<ae;)ue[oe]=E[oe];for(;j--;)ue[oe++]=arguments[++U];return On(me,b?d:this,ue)}return k}function o_(i){return function(l,d,E){return E&&typeof E!="number"&&tn(l,d,E)&&(d=E=n),l=wr(l),d===n?(d=l,l=0):d=wr(d),E=E===n?l<d?1:-1:wr(E),M1(l,d,E,i)}}function Xa(i){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=jn(l),d=jn(d)),i(l,d)}}function i_(i,l,d,E,b,y,k,U,j,oe){var ae=l&R,ue=ae?k:n,me=ae?n:k,De=ae?y:n,$e=ae?n:y;l|=ae?M:z,l&=~(ae?z:M),l&N||(l&=-4);var et=[i,l,b,De,ue,$e,me,U,j,oe],Ue=d.apply(n,et);return hc(i)&&p_(Ue,et),Ue.placeholder=E,m_(Ue,i,l)}function lc(i){var l=Ut[i];return function(d,E){if(d=jn(d),E=E==null?0:Zt(Qe(E),292),E&&mf(d)){var b=(vt(d)+"e").split("e"),y=l(b[0]+"e"+(+b[1]+E));return b=(vt(y)+"e").split("e"),+(b[0]+"e"+(+b[1]-E))}return l(d)}}var Q1=Ho&&1/La(new Ho([,-0]))[1]==ut?function(i){return new Ho(i)}:Nc;function a_(i){return function(l){var d=Qt(l);return d==Se?$l(l):d==Qn?hm(l):sm(l,i(l))}}function Cr(i,l,d,E,b,y,k,U){var j=l&w;if(!j&&typeof i!="function")throw new Bn(s);var oe=E?E.length:0;if(oe||(l&=-97,E=b=n),k=k===n?k:Ht(Qe(k),0),U=U===n?U:Qe(U),oe-=b?b.length:0,l&z){var ae=E,ue=b;E=b=n}var me=j?n:dc(i),De=[i,l,d,E,b,ae,ue,y,k,U];if(me&&_0(De,me),i=De[0],l=De[1],d=De[2],E=De[3],b=De[4],U=De[9]=De[9]===n?j?0:i.length:Ht(De[9]-oe,0),!U&&l&(R|F)&&(l&=-25),!l||l==O)var $e=K1(i,l,d);else l==R||l==F?$e=X1(i,l,U):(l==M||l==(O|M))&&!b.length?$e=Z1(i,l,d,E):$e=ja.apply(n,De);var et=me?Hf:p_;return m_(et($e,De),i,l)}function s_(i,l,d,E){return i===n||tr(i,Uo[d])&&!pt.call(E,d)?l:i}function l_(i,l,d,E,b,y){return St(i)&&St(l)&&(y.set(l,i),Wa(i,l,n,l_,y),y.delete(l)),i}function J1(i){return Hi(i)?n:i}function c_(i,l,d,E,b,y){var k=d&C,U=i.length,j=l.length;if(U!=j&&!(k&&j>U))return!1;var oe=y.get(i),ae=y.get(l);if(oe&&ae)return oe==l&&ae==i;var ue=-1,me=!0,De=d&I?new so:n;for(y.set(i,l),y.set(l,i);++ue<U;){var $e=i[ue],et=l[ue];if(E)var Ue=k?E(et,$e,ue,l,i,y):E($e,et,ue,i,l,y);if(Ue!==n){if(Ue)continue;me=!1;break}if(De){if(!Tl(l,function(it,st){if(!yi(De,st)&&($e===it||b($e,it,d,E,y)))return De.push(st)})){me=!1;break}}else if(!($e===et||b($e,et,d,E,y))){me=!1;break}}return y.delete(i),y.delete(l),me}function e0(i,l,d,E,b,y,k){switch(d){case Ro:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case Li:return!(i.byteLength!=l.byteLength||!y(new Da(i),new Da(l)));case Un:case _n:case $t:return tr(+i,+l);case ke:return i.name==l.name&&i.message==l.message;case bi:case wi:return i==l+"";case Se:var U=$l;case Qn:var j=E&C;if(U||(U=La),i.size!=l.size&&!j)return!1;var oe=k.get(i);if(oe)return oe==l;E|=I,k.set(i,l);var ae=c_(U(i),U(l),E,b,y,k);return k.delete(i),ae;case Ca:if(Di)return Di.call(i)==Di.call(l)}return!1}function t0(i,l,d,E,b,y){var k=d&C,U=cc(i),j=U.length,oe=cc(l),ae=oe.length;if(j!=ae&&!k)return!1;for(var ue=j;ue--;){var me=U[ue];if(!(k?me in l:pt.call(l,me)))return!1}var De=y.get(i),$e=y.get(l);if(De&&$e)return De==l&&$e==i;var et=!0;y.set(i,l),y.set(l,i);for(var Ue=k;++ue<j;){me=U[ue];var it=i[me],st=l[me];if(E)var xn=k?E(st,it,me,l,i,y):E(it,st,me,i,l,y);if(!(xn===n?it===st||b(it,st,d,E,y):xn)){et=!1;break}Ue||(Ue=me=="constructor")}if(et&&!Ue){var nn=i.constructor,Sn=l.constructor;nn!=Sn&&"constructor"in i&&"constructor"in l&&!(typeof nn=="function"&&nn instanceof nn&&typeof Sn=="function"&&Sn instanceof Sn)&&(et=!1)}return y.delete(i),y.delete(l),et}function Er(i){return pc(h_(i,n,O_),i+"")}function cc(i){return Sf(i,Bt,_c)}function uc(i){return Sf(i,vn,u_)}var dc=Fa?function(i){return Fa.get(i)}:Nc;function Za(i){for(var l=i.name+"",d=Po[l],E=pt.call(Po,l)?d.length:0;E--;){var b=d[E],y=b.func;if(y==null||y==i)return b.name}return l}function zo(i){var l=pt.call(L,"placeholder")?L:i;return l.placeholder}function Fe(){var i=L.iteratee||xc;return i=i===xc?Tf:i,arguments.length?i(arguments[0],arguments[1]):i}function Qa(i,l){var d=i.__data__;return c0(l)?d[typeof l=="string"?"string":"hash"]:d.map}function fc(i){for(var l=Bt(i),d=l.length;d--;){var E=l[d],b=i[E];l[d]=[E,b,__(b)]}return l}function uo(i,l){var d=fm(i,l);return Df(d)?d:n}function n0(i){var l=pt.call(i,io),d=i[io];try{i[io]=n;var E=!0}catch{}var b=Sa.call(i);return E&&(l?i[io]=d:delete i[io]),b}var _c=Hl?function(i){return i==null?[]:(i=bt(i),kr(Hl(i),function(l){return vf.call(i,l)}))}:Dc,u_=Hl?function(i){for(var l=[];i;)Gr(l,_c(i)),i=Ta(i);return l}:Dc,Qt=en;(Pl&&Qt(new Pl(new ArrayBuffer(1)))!=Ro||xi&&Qt(new xi)!=Se||Bl&&Qt(Bl.resolve())!=Ld||Ho&&Qt(new Ho)!=Qn||Si&&Qt(new Si)!=Oi)&&(Qt=function(i){var l=en(i),d=l==hr?i.constructor:n,E=d?fo(d):"";if(E)switch(E){case $m:return Ro;case Um:return Se;case Hm:return Ld;case Pm:return Qn;case Bm:return Oi}return l});function r0(i,l,d){for(var E=-1,b=d.length;++E<b;){var y=d[E],k=y.size;switch(y.type){case"drop":i+=k;break;case"dropRight":l-=k;break;case"take":l=Zt(l,i+k);break;case"takeRight":i=Ht(i,l-k);break}}return{start:i,end:l}}function o0(i){var l=i.match(up);return l?l[1].split(dp):[]}function d_(i,l,d){l=Hr(l,i);for(var E=-1,b=l.length,y=!1;++E<b;){var k=sr(l[E]);if(!(y=i!=null&&d(i,k)))break;i=i[k]}return y||++E!=b?y:(b=i==null?0:i.length,!!b&&is(b)&&Ir(k,b)&&(Ke(i)||_o(i)))}function i0(i){var l=i.length,d=new i.constructor(l);return l&&typeof i[0]=="string"&&pt.call(i,"index")&&(d.index=i.index,d.input=i.input),d}function f_(i){return typeof i.constructor=="function"&&!$i(i)?Bo(Ta(i)):{}}function a0(i,l,d){var E=i.constructor;switch(l){case Li:return ac(i);case Un:case _n:return new E(+i);case Ro:return W1(i,d);case fl:case _l:case gl:case hl:case vl:case pl:case ml:case Cl:case El:return qf(i,d);case Se:return new E;case $t:case wi:return new E(i);case bi:return Y1(i);case Qn:return new E;case Ca:return z1(i)}}function s0(i,l){var d=l.length;if(!d)return i;var E=d-1;return l[E]=(d>1?"& ":"")+l[E],l=l.join(d>2?", ":" "),i.replace(cp,`{
/* [wrapped with `+l+`] */
`)}function l0(i){return Ke(i)||_o(i)||!!(pf&&i&&i[pf])}function Ir(i,l){var d=typeof i;return l=l??xe,!!l&&(d=="number"||d!="symbol"&&Ep.test(i))&&i>-1&&i%1==0&&i<l}function tn(i,l,d){if(!St(d))return!1;var E=typeof l;return(E=="number"?hn(d)&&Ir(l,d.length):E=="string"&&l in d)?tr(d[l],i):!1}function gc(i,l){if(Ke(i))return!1;var d=typeof i;return d=="number"||d=="symbol"||d=="boolean"||i==null||An(i)?!0:ip.test(i)||!op.test(i)||l!=null&&i in bt(l)}function c0(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function hc(i){var l=Za(i),d=L[l];if(typeof d!="function"||!(l in at.prototype))return!1;if(i===d)return!0;var E=dc(d);return!!E&&i===E[0]}function u0(i){return!!_f&&_f in i}var d0=Aa?br:Tc;function $i(i){var l=i&&i.constructor,d=typeof l=="function"&&l.prototype||Uo;return i===d}function __(i){return i===i&&!St(i)}function g_(i,l){return function(d){return d==null?!1:d[i]===l&&(l!==n||i in bt(d))}}function f0(i){var l=rs(i,function(E){return d.size===_&&d.clear(),E}),d=l.cache;return l}function _0(i,l){var d=i[1],E=l[1],b=d|E,y=b<(O|w|V),k=E==V&&d==R||E==V&&d==K&&i[7].length<=l[8]||E==(V|K)&&l[7].length<=l[8]&&d==R;if(!(y||k))return i;E&O&&(i[2]=l[2],b|=d&O?0:N);var U=l[3];if(U){var j=i[3];i[3]=j?Xf(j,U,l[4]):U,i[4]=j?Mr(i[3],g):l[4]}return U=l[5],U&&(j=i[5],i[5]=j?Zf(j,U,l[6]):U,i[6]=j?Mr(i[5],g):l[6]),U=l[7],U&&(i[7]=U),E&V&&(i[8]=i[8]==null?l[8]:Zt(i[8],l[8])),i[9]==null&&(i[9]=l[9]),i[0]=l[0],i[1]=b,i}function g0(i){var l=[];if(i!=null)for(var d in bt(i))l.push(d);return l}function h0(i){return Sa.call(i)}function h_(i,l,d){return l=Ht(l===n?i.length-1:l,0),function(){for(var E=arguments,b=-1,y=Ht(E.length-l,0),k=X(y);++b<y;)k[b]=E[l+b];b=-1;for(var U=X(l+1);++b<l;)U[b]=E[b];return U[l]=d(k),On(i,this,U)}}function v_(i,l){return l.length<2?i:co(i,zn(l,0,-1))}function v0(i,l){for(var d=i.length,E=Zt(l.length,d),b=gn(i);E--;){var y=l[E];i[E]=Ir(y,d)?b[y]:n}return i}function vc(i,l){if(!(l==="constructor"&&typeof i[l]=="function")&&l!="__proto__")return i[l]}var p_=C_(Hf),Ui=Dm||function(i,l){return Vt.setTimeout(i,l)},pc=C_(U1);function m_(i,l,d){var E=l+"";return pc(i,s0(E,p0(o0(E),d)))}function C_(i){var l=0,d=0;return function(){var E=Gm(),b=be-(E-d);if(d=E,b>0){if(++l>=ce)return arguments[0]}else l=0;return i.apply(n,arguments)}}function Ja(i,l){var d=-1,E=i.length,b=E-1;for(l=l===n?E:l;++d<l;){var y=Jl(d,b),k=i[y];i[y]=i[d],i[d]=k}return i.length=l,i}var E_=f0(function(i){var l=[];return i.charCodeAt(0)===46&&l.push(""),i.replace(ap,function(d,E,b,y){l.push(b?y.replace(gp,"$1"):E||d)}),l});function sr(i){if(typeof i=="string"||An(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function fo(i){if(i!=null){try{return xa.call(i)}catch{}try{return i+""}catch{}}return""}function p0(i,l){return Pn(ro,function(d){var E="_."+d[0];l&d[1]&&!wa(i,E)&&i.push(E)}),i.sort()}function I_(i){if(i instanceof at)return i.clone();var l=new Wn(i.__wrapped__,i.__chain__);return l.__actions__=gn(i.__actions__),l.__index__=i.__index__,l.__values__=i.__values__,l}function m0(i,l,d){(d?tn(i,l,d):l===n)?l=1:l=Ht(Qe(l),0);var E=i==null?0:i.length;if(!E||l<1)return[];for(var b=0,y=0,k=X(Ga(E/l));b<E;)k[y++]=zn(i,b,b+=l);return k}function C0(i){for(var l=-1,d=i==null?0:i.length,E=0,b=[];++l<d;){var y=i[l];y&&(b[E++]=y)}return b}function E0(){var i=arguments.length;if(!i)return[];for(var l=X(i-1),d=arguments[0],E=i;E--;)l[E-1]=arguments[E];return Gr(Ke(d)?gn(d):[d],jt(l,1))}var I0=tt(function(i,l){return Dt(i)?Ri(i,jt(l,1,Dt,!0)):[]}),b0=tt(function(i,l){var d=Vn(l);return Dt(d)&&(d=n),Dt(i)?Ri(i,jt(l,1,Dt,!0),Fe(d,2)):[]}),w0=tt(function(i,l){var d=Vn(l);return Dt(d)&&(d=n),Dt(i)?Ri(i,jt(l,1,Dt,!0),n,d):[]});function O0(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Qe(l),zn(i,l<0?0:l,E)):[]}function L0(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Qe(l),l=E-l,zn(i,0,l<0?0:l)):[]}function y0(i,l){return i&&i.length?za(i,Fe(l,3),!0,!0):[]}function A0(i,l){return i&&i.length?za(i,Fe(l,3),!0):[]}function x0(i,l,d,E){var b=i==null?0:i.length;return b?(d&&typeof d!="number"&&tn(i,l,d)&&(d=0,E=b),E1(i,l,d,E)):[]}function b_(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var b=d==null?0:Qe(d);return b<0&&(b=Ht(E+b,0)),Oa(i,Fe(l,3),b)}function w_(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var b=E-1;return d!==n&&(b=Qe(d),b=d<0?Ht(E+b,0):Zt(b,E-1)),Oa(i,Fe(l,3),b,!0)}function O_(i){var l=i==null?0:i.length;return l?jt(i,1):[]}function S0(i){var l=i==null?0:i.length;return l?jt(i,ut):[]}function N0(i,l){var d=i==null?0:i.length;return d?(l=l===n?1:Qe(l),jt(i,l)):[]}function D0(i){for(var l=-1,d=i==null?0:i.length,E={};++l<d;){var b=i[l];E[b[0]]=b[1]}return E}function L_(i){return i&&i.length?i[0]:n}function T0(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var b=d==null?0:Qe(d);return b<0&&(b=Ht(E+b,0)),Go(i,l,b)}function R0(i){var l=i==null?0:i.length;return l?zn(i,0,-1):[]}var k0=tt(function(i){var l=xt(i,oc);return l.length&&l[0]===i[0]?ql(l):[]}),G0=tt(function(i){var l=Vn(i),d=xt(i,oc);return l===Vn(d)?l=n:d.pop(),d.length&&d[0]===i[0]?ql(d,Fe(l,2)):[]}),M0=tt(function(i){var l=Vn(i),d=xt(i,oc);return l=typeof l=="function"?l:n,l&&d.pop(),d.length&&d[0]===i[0]?ql(d,n,l):[]});function F0(i,l){return i==null?"":Rm.call(i,l)}function Vn(i){var l=i==null?0:i.length;return l?i[l-1]:n}function $0(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var b=E;return d!==n&&(b=Qe(d),b=b<0?Ht(E+b,0):Zt(b,E-1)),l===l?pm(i,l,b):Oa(i,of,b,!0)}function U0(i,l){return i&&i.length?Mf(i,Qe(l)):n}var H0=tt(y_);function y_(i,l){return i&&i.length&&l&&l.length?Ql(i,l):i}function P0(i,l,d){return i&&i.length&&l&&l.length?Ql(i,l,Fe(d,2)):i}function B0(i,l,d){return i&&i.length&&l&&l.length?Ql(i,l,n,d):i}var W0=Er(function(i,l){var d=i==null?0:i.length,E=Yl(i,l);return Uf(i,xt(l,function(b){return Ir(b,d)?+b:b}).sort(Kf)),E});function Y0(i,l){var d=[];if(!(i&&i.length))return d;var E=-1,b=[],y=i.length;for(l=Fe(l,3);++E<y;){var k=i[E];l(k,E,i)&&(d.push(k),b.push(E))}return Uf(i,b),d}function mc(i){return i==null?i:Fm.call(i)}function z0(i,l,d){var E=i==null?0:i.length;return E?(d&&typeof d!="number"&&tn(i,l,d)?(l=0,d=E):(l=l==null?0:Qe(l),d=d===n?E:Qe(d)),zn(i,l,d)):[]}function V0(i,l){return Ya(i,l)}function j0(i,l,d){return tc(i,l,Fe(d,2))}function q0(i,l){var d=i==null?0:i.length;if(d){var E=Ya(i,l);if(E<d&&tr(i[E],l))return E}return-1}function K0(i,l){return Ya(i,l,!0)}function X0(i,l,d){return tc(i,l,Fe(d,2),!0)}function Z0(i,l){var d=i==null?0:i.length;if(d){var E=Ya(i,l,!0)-1;if(tr(i[E],l))return E}return-1}function Q0(i){return i&&i.length?Pf(i):[]}function J0(i,l){return i&&i.length?Pf(i,Fe(l,2)):[]}function eC(i){var l=i==null?0:i.length;return l?zn(i,1,l):[]}function tC(i,l,d){return i&&i.length?(l=d||l===n?1:Qe(l),zn(i,0,l<0?0:l)):[]}function nC(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Qe(l),l=E-l,zn(i,l<0?0:l,E)):[]}function rC(i,l){return i&&i.length?za(i,Fe(l,3),!1,!0):[]}function oC(i,l){return i&&i.length?za(i,Fe(l,3)):[]}var iC=tt(function(i){return Ur(jt(i,1,Dt,!0))}),aC=tt(function(i){var l=Vn(i);return Dt(l)&&(l=n),Ur(jt(i,1,Dt,!0),Fe(l,2))}),sC=tt(function(i){var l=Vn(i);return l=typeof l=="function"?l:n,Ur(jt(i,1,Dt,!0),n,l)});function lC(i){return i&&i.length?Ur(i):[]}function cC(i,l){return i&&i.length?Ur(i,Fe(l,2)):[]}function uC(i,l){return l=typeof l=="function"?l:n,i&&i.length?Ur(i,n,l):[]}function Cc(i){if(!(i&&i.length))return[];var l=0;return i=kr(i,function(d){if(Dt(d))return l=Ht(d.length,l),!0}),Ml(l,function(d){return xt(i,Rl(d))})}function A_(i,l){if(!(i&&i.length))return[];var d=Cc(i);return l==null?d:xt(d,function(E){return On(l,n,E)})}var dC=tt(function(i,l){return Dt(i)?Ri(i,l):[]}),fC=tt(function(i){return rc(kr(i,Dt))}),_C=tt(function(i){var l=Vn(i);return Dt(l)&&(l=n),rc(kr(i,Dt),Fe(l,2))}),gC=tt(function(i){var l=Vn(i);return l=typeof l=="function"?l:n,rc(kr(i,Dt),n,l)}),hC=tt(Cc);function vC(i,l){return zf(i||[],l||[],Ti)}function pC(i,l){return zf(i||[],l||[],Mi)}var mC=tt(function(i){var l=i.length,d=l>1?i[l-1]:n;return d=typeof d=="function"?(i.pop(),d):n,A_(i,d)});function x_(i){var l=L(i);return l.__chain__=!0,l}function CC(i,l){return l(i),i}function es(i,l){return l(i)}var EC=Er(function(i){var l=i.length,d=l?i[0]:0,E=this.__wrapped__,b=function(y){return Yl(y,i)};return l>1||this.__actions__.length||!(E instanceof at)||!Ir(d)?this.thru(b):(E=E.slice(d,+d+(l?1:0)),E.__actions__.push({func:es,args:[b],thisArg:n}),new Wn(E,this.__chain__).thru(function(y){return l&&!y.length&&y.push(n),y}))});function IC(){return x_(this)}function bC(){return new Wn(this.value(),this.__chain__)}function wC(){this.__values__===n&&(this.__values__=B_(this.value()));var i=this.__index__>=this.__values__.length,l=i?n:this.__values__[this.__index__++];return{done:i,value:l}}function OC(){return this}function LC(i){for(var l,d=this;d instanceof Ua;){var E=I_(d);E.__index__=0,E.__values__=n,l?b.__wrapped__=E:l=E;var b=E;d=d.__wrapped__}return b.__wrapped__=i,l}function yC(){var i=this.__wrapped__;if(i instanceof at){var l=i;return this.__actions__.length&&(l=new at(this)),l=l.reverse(),l.__actions__.push({func:es,args:[mc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(mc)}function AC(){return Yf(this.__wrapped__,this.__actions__)}var xC=Va(function(i,l,d){pt.call(i,d)?++i[d]:mr(i,d,1)});function SC(i,l,d){var E=Ke(i)?nf:C1;return d&&tn(i,l,d)&&(l=n),E(i,Fe(l,3))}function NC(i,l){var d=Ke(i)?kr:Af;return d(i,Fe(l,3))}var DC=t_(b_),TC=t_(w_);function RC(i,l){return jt(ts(i,l),1)}function kC(i,l){return jt(ts(i,l),ut)}function GC(i,l,d){return d=d===n?1:Qe(d),jt(ts(i,l),d)}function S_(i,l){var d=Ke(i)?Pn:$r;return d(i,Fe(l,3))}function N_(i,l){var d=Ke(i)?em:yf;return d(i,Fe(l,3))}var MC=Va(function(i,l,d){pt.call(i,d)?i[d].push(l):mr(i,d,[l])});function FC(i,l,d,E){i=hn(i)?i:jo(i),d=d&&!E?Qe(d):0;var b=i.length;return d<0&&(d=Ht(b+d,0)),as(i)?d<=b&&i.indexOf(l,d)>-1:!!b&&Go(i,l,d)>-1}var $C=tt(function(i,l,d){var E=-1,b=typeof l=="function",y=hn(i)?X(i.length):[];return $r(i,function(k){y[++E]=b?On(l,k,d):ki(k,l,d)}),y}),UC=Va(function(i,l,d){mr(i,d,l)});function ts(i,l){var d=Ke(i)?xt:Rf;return d(i,Fe(l,3))}function HC(i,l,d,E){return i==null?[]:(Ke(l)||(l=l==null?[]:[l]),d=E?n:d,Ke(d)||(d=d==null?[]:[d]),Ff(i,l,d))}var PC=Va(function(i,l,d){i[d?0:1].push(l)},function(){return[[],[]]});function BC(i,l,d){var E=Ke(i)?Dl:sf,b=arguments.length<3;return E(i,Fe(l,4),d,b,$r)}function WC(i,l,d){var E=Ke(i)?tm:sf,b=arguments.length<3;return E(i,Fe(l,4),d,b,yf)}function YC(i,l){var d=Ke(i)?kr:Af;return d(i,os(Fe(l,3)))}function zC(i){var l=Ke(i)?bf:F1;return l(i)}function VC(i,l,d){(d?tn(i,l,d):l===n)?l=1:l=Qe(l);var E=Ke(i)?g1:$1;return E(i,l)}function jC(i){var l=Ke(i)?h1:H1;return l(i)}function qC(i){if(i==null)return 0;if(hn(i))return as(i)?Fo(i):i.length;var l=Qt(i);return l==Se||l==Qn?i.size:Xl(i).length}function KC(i,l,d){var E=Ke(i)?Tl:P1;return d&&tn(i,l,d)&&(l=n),E(i,Fe(l,3))}var XC=tt(function(i,l){if(i==null)return[];var d=l.length;return d>1&&tn(i,l[0],l[1])?l=[]:d>2&&tn(l[0],l[1],l[2])&&(l=[l[0]]),Ff(i,jt(l,1),[])}),ns=Nm||function(){return Vt.Date.now()};function ZC(i,l){if(typeof l!="function")throw new Bn(s);return i=Qe(i),function(){if(--i<1)return l.apply(this,arguments)}}function D_(i,l,d){return l=d?n:l,l=i&&l==null?i.length:l,Cr(i,V,n,n,n,n,l)}function T_(i,l){var d;if(typeof l!="function")throw new Bn(s);return i=Qe(i),function(){return--i>0&&(d=l.apply(this,arguments)),i<=1&&(l=n),d}}var Ec=tt(function(i,l,d){var E=O;if(d.length){var b=Mr(d,zo(Ec));E|=M}return Cr(i,E,l,d,b)}),R_=tt(function(i,l,d){var E=O|w;if(d.length){var b=Mr(d,zo(R_));E|=M}return Cr(l,E,i,d,b)});function k_(i,l,d){l=d?n:l;var E=Cr(i,R,n,n,n,n,n,l);return E.placeholder=k_.placeholder,E}function G_(i,l,d){l=d?n:l;var E=Cr(i,F,n,n,n,n,n,l);return E.placeholder=G_.placeholder,E}function M_(i,l,d){var E,b,y,k,U,j,oe=0,ae=!1,ue=!1,me=!0;if(typeof i!="function")throw new Bn(s);l=jn(l)||0,St(d)&&(ae=!!d.leading,ue="maxWait"in d,y=ue?Ht(jn(d.maxWait)||0,l):y,me="trailing"in d?!!d.trailing:me);function De(Tt){var nr=E,Or=b;return E=b=n,oe=Tt,k=i.apply(Or,nr),k}function $e(Tt){return oe=Tt,U=Ui(it,l),ae?De(Tt):k}function et(Tt){var nr=Tt-j,Or=Tt-oe,tg=l-nr;return ue?Zt(tg,y-Or):tg}function Ue(Tt){var nr=Tt-j,Or=Tt-oe;return j===n||nr>=l||nr<0||ue&&Or>=y}function it(){var Tt=ns();if(Ue(Tt))return st(Tt);U=Ui(it,et(Tt))}function st(Tt){return U=n,me&&E?De(Tt):(E=b=n,k)}function xn(){U!==n&&Vf(U),oe=0,E=j=b=U=n}function nn(){return U===n?k:st(ns())}function Sn(){var Tt=ns(),nr=Ue(Tt);if(E=arguments,b=this,j=Tt,nr){if(U===n)return $e(j);if(ue)return Vf(U),U=Ui(it,l),De(j)}return U===n&&(U=Ui(it,l)),k}return Sn.cancel=xn,Sn.flush=nn,Sn}var QC=tt(function(i,l){return Lf(i,1,l)}),JC=tt(function(i,l,d){return Lf(i,jn(l)||0,d)});function eE(i){return Cr(i,se)}function rs(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new Bn(s);var d=function(){var E=arguments,b=l?l.apply(this,E):E[0],y=d.cache;if(y.has(b))return y.get(b);var k=i.apply(this,E);return d.cache=y.set(b,k)||y,k};return d.cache=new(rs.Cache||pr),d}rs.Cache=pr;function os(i){if(typeof i!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!i.call(this);case 1:return!i.call(this,l[0]);case 2:return!i.call(this,l[0],l[1]);case 3:return!i.call(this,l[0],l[1],l[2])}return!i.apply(this,l)}}function tE(i){return T_(2,i)}var nE=B1(function(i,l){l=l.length==1&&Ke(l[0])?xt(l[0],Ln(Fe())):xt(jt(l,1),Ln(Fe()));var d=l.length;return tt(function(E){for(var b=-1,y=Zt(E.length,d);++b<y;)E[b]=l[b].call(this,E[b]);return On(i,this,E)})}),Ic=tt(function(i,l){var d=Mr(l,zo(Ic));return Cr(i,M,n,l,d)}),F_=tt(function(i,l){var d=Mr(l,zo(F_));return Cr(i,z,n,l,d)}),rE=Er(function(i,l){return Cr(i,K,n,n,n,l)});function oE(i,l){if(typeof i!="function")throw new Bn(s);return l=l===n?l:Qe(l),tt(i,l)}function iE(i,l){if(typeof i!="function")throw new Bn(s);return l=l==null?0:Ht(Qe(l),0),tt(function(d){var E=d[l],b=Pr(d,0,l);return E&&Gr(b,E),On(i,this,b)})}function aE(i,l,d){var E=!0,b=!0;if(typeof i!="function")throw new Bn(s);return St(d)&&(E="leading"in d?!!d.leading:E,b="trailing"in d?!!d.trailing:b),M_(i,l,{leading:E,maxWait:l,trailing:b})}function sE(i){return D_(i,1)}function lE(i,l){return Ic(ic(l),i)}function cE(){if(!arguments.length)return[];var i=arguments[0];return Ke(i)?i:[i]}function uE(i){return Yn(i,m)}function dE(i,l){return l=typeof l=="function"?l:n,Yn(i,m,l)}function fE(i){return Yn(i,h|m)}function _E(i,l){return l=typeof l=="function"?l:n,Yn(i,h|m,l)}function gE(i,l){return l==null||Of(i,l,Bt(l))}function tr(i,l){return i===l||i!==i&&l!==l}var hE=Xa(jl),vE=Xa(function(i,l){return i>=l}),_o=Nf(function(){return arguments}())?Nf:function(i){return Nt(i)&&pt.call(i,"callee")&&!vf.call(i,"callee")},Ke=X.isArray,pE=Xd?Ln(Xd):L1;function hn(i){return i!=null&&is(i.length)&&!br(i)}function Dt(i){return Nt(i)&&hn(i)}function mE(i){return i===!0||i===!1||Nt(i)&&en(i)==Un}var Br=Tm||Tc,CE=Zd?Ln(Zd):y1;function EE(i){return Nt(i)&&i.nodeType===1&&!Hi(i)}function IE(i){if(i==null)return!0;if(hn(i)&&(Ke(i)||typeof i=="string"||typeof i.splice=="function"||Br(i)||Vo(i)||_o(i)))return!i.length;var l=Qt(i);if(l==Se||l==Qn)return!i.size;if($i(i))return!Xl(i).length;for(var d in i)if(pt.call(i,d))return!1;return!0}function bE(i,l){return Gi(i,l)}function wE(i,l,d){d=typeof d=="function"?d:n;var E=d?d(i,l):n;return E===n?Gi(i,l,n,d):!!E}function bc(i){if(!Nt(i))return!1;var l=en(i);return l==ke||l==Ii||typeof i.message=="string"&&typeof i.name=="string"&&!Hi(i)}function OE(i){return typeof i=="number"&&mf(i)}function br(i){if(!St(i))return!1;var l=en(i);return l==ye||l==Ge||l==or||l==qv}function $_(i){return typeof i=="number"&&i==Qe(i)}function is(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=xe}function St(i){var l=typeof i;return i!=null&&(l=="object"||l=="function")}function Nt(i){return i!=null&&typeof i=="object"}var U_=Qd?Ln(Qd):x1;function LE(i,l){return i===l||Kl(i,l,fc(l))}function yE(i,l,d){return d=typeof d=="function"?d:n,Kl(i,l,fc(l),d)}function AE(i){return H_(i)&&i!=+i}function xE(i){if(d0(i))throw new je(a);return Df(i)}function SE(i){return i===null}function NE(i){return i==null}function H_(i){return typeof i=="number"||Nt(i)&&en(i)==$t}function Hi(i){if(!Nt(i)||en(i)!=hr)return!1;var l=Ta(i);if(l===null)return!0;var d=pt.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&xa.call(d)==ym}var wc=Jd?Ln(Jd):S1;function DE(i){return $_(i)&&i>=-9007199254740991&&i<=xe}var P_=ef?Ln(ef):N1;function as(i){return typeof i=="string"||!Ke(i)&&Nt(i)&&en(i)==wi}function An(i){return typeof i=="symbol"||Nt(i)&&en(i)==Ca}var Vo=tf?Ln(tf):D1;function TE(i){return i===n}function RE(i){return Nt(i)&&Qt(i)==Oi}function kE(i){return Nt(i)&&en(i)==Xv}var GE=Xa(Zl),ME=Xa(function(i,l){return i<=l});function B_(i){if(!i)return[];if(hn(i))return as(i)?Jn(i):gn(i);if(Ai&&i[Ai])return gm(i[Ai]());var l=Qt(i),d=l==Se?$l:l==Qn?La:jo;return d(i)}function wr(i){if(!i)return i===0?i:0;if(i=jn(i),i===ut||i===-1/0){var l=i<0?-1:1;return l*Ee}return i===i?i:0}function Qe(i){var l=wr(i),d=l%1;return l===l?d?l-d:l:0}function W_(i){return i?lo(Qe(i),0,ct):0}function jn(i){if(typeof i=="number")return i;if(An(i))return ht;if(St(i)){var l=typeof i.valueOf=="function"?i.valueOf():i;i=St(l)?l+"":l}if(typeof i!="string")return i===0?i:+i;i=lf(i);var d=pp.test(i);return d||Cp.test(i)?Zp(i.slice(2),d?2:8):vp.test(i)?ht:+i}function Y_(i){return ar(i,vn(i))}function FE(i){return i?lo(Qe(i),-9007199254740991,xe):i===0?i:0}function vt(i){return i==null?"":yn(i)}var $E=Wo(function(i,l){if($i(l)||hn(l)){ar(l,Bt(l),i);return}for(var d in l)pt.call(l,d)&&Ti(i,d,l[d])}),z_=Wo(function(i,l){ar(l,vn(l),i)}),ss=Wo(function(i,l,d,E){ar(l,vn(l),i,E)}),UE=Wo(function(i,l,d,E){ar(l,Bt(l),i,E)}),HE=Er(Yl);function PE(i,l){var d=Bo(i);return l==null?d:wf(d,l)}var BE=tt(function(i,l){i=bt(i);var d=-1,E=l.length,b=E>2?l[2]:n;for(b&&tn(l[0],l[1],b)&&(E=1);++d<E;)for(var y=l[d],k=vn(y),U=-1,j=k.length;++U<j;){var oe=k[U],ae=i[oe];(ae===n||tr(ae,Uo[oe])&&!pt.call(i,oe))&&(i[oe]=y[oe])}return i}),WE=tt(function(i){return i.push(n,l_),On(V_,n,i)});function YE(i,l){return rf(i,Fe(l,3),ir)}function zE(i,l){return rf(i,Fe(l,3),Vl)}function VE(i,l){return i==null?i:zl(i,Fe(l,3),vn)}function jE(i,l){return i==null?i:xf(i,Fe(l,3),vn)}function qE(i,l){return i&&ir(i,Fe(l,3))}function KE(i,l){return i&&Vl(i,Fe(l,3))}function XE(i){return i==null?[]:Ba(i,Bt(i))}function ZE(i){return i==null?[]:Ba(i,vn(i))}function Oc(i,l,d){var E=i==null?n:co(i,l);return E===n?d:E}function QE(i,l){return i!=null&&d_(i,l,I1)}function Lc(i,l){return i!=null&&d_(i,l,b1)}var JE=r_(function(i,l,d){l!=null&&typeof l.toString!="function"&&(l=Sa.call(l)),i[l]=d},Ac(pn)),eI=r_(function(i,l,d){l!=null&&typeof l.toString!="function"&&(l=Sa.call(l)),pt.call(i,l)?i[l].push(d):i[l]=[d]},Fe),tI=tt(ki);function Bt(i){return hn(i)?If(i):Xl(i)}function vn(i){return hn(i)?If(i,!0):T1(i)}function nI(i,l){var d={};return l=Fe(l,3),ir(i,function(E,b,y){mr(d,l(E,b,y),E)}),d}function rI(i,l){var d={};return l=Fe(l,3),ir(i,function(E,b,y){mr(d,b,l(E,b,y))}),d}var oI=Wo(function(i,l,d){Wa(i,l,d)}),V_=Wo(function(i,l,d,E){Wa(i,l,d,E)}),iI=Er(function(i,l){var d={};if(i==null)return d;var E=!1;l=xt(l,function(y){return y=Hr(y,i),E||(E=y.length>1),y}),ar(i,uc(i),d),E&&(d=Yn(d,h|p|m,J1));for(var b=l.length;b--;)nc(d,l[b]);return d});function aI(i,l){return j_(i,os(Fe(l)))}var sI=Er(function(i,l){return i==null?{}:k1(i,l)});function j_(i,l){if(i==null)return{};var d=xt(uc(i),function(E){return[E]});return l=Fe(l),$f(i,d,function(E,b){return l(E,b[0])})}function lI(i,l,d){l=Hr(l,i);var E=-1,b=l.length;for(b||(b=1,i=n);++E<b;){var y=i==null?n:i[sr(l[E])];y===n&&(E=b,y=d),i=br(y)?y.call(i):y}return i}function cI(i,l,d){return i==null?i:Mi(i,l,d)}function uI(i,l,d,E){return E=typeof E=="function"?E:n,i==null?i:Mi(i,l,d,E)}var q_=a_(Bt),K_=a_(vn);function dI(i,l,d){var E=Ke(i),b=E||Br(i)||Vo(i);if(l=Fe(l,4),d==null){var y=i&&i.constructor;b?d=E?new y:[]:St(i)?d=br(y)?Bo(Ta(i)):{}:d={}}return(b?Pn:ir)(i,function(k,U,j){return l(d,k,U,j)}),d}function fI(i,l){return i==null?!0:nc(i,l)}function _I(i,l,d){return i==null?i:Wf(i,l,ic(d))}function gI(i,l,d,E){return E=typeof E=="function"?E:n,i==null?i:Wf(i,l,ic(d),E)}function jo(i){return i==null?[]:Fl(i,Bt(i))}function hI(i){return i==null?[]:Fl(i,vn(i))}function vI(i,l,d){return d===n&&(d=l,l=n),d!==n&&(d=jn(d),d=d===d?d:0),l!==n&&(l=jn(l),l=l===l?l:0),lo(jn(i),l,d)}function pI(i,l,d){return l=wr(l),d===n?(d=l,l=0):d=wr(d),i=jn(i),w1(i,l,d)}function mI(i,l,d){if(d&&typeof d!="boolean"&&tn(i,l,d)&&(l=d=n),d===n&&(typeof l=="boolean"?(d=l,l=n):typeof i=="boolean"&&(d=i,i=n)),i===n&&l===n?(i=0,l=1):(i=wr(i),l===n?(l=i,i=0):l=wr(l)),i>l){var E=i;i=l,l=E}if(d||i%1||l%1){var b=Cf();return Zt(i+b*(l-i+Xp("1e-"+((b+"").length-1))),l)}return Jl(i,l)}var CI=Yo(function(i,l,d){return l=l.toLowerCase(),i+(d?X_(l):l)});function X_(i){return yc(vt(i).toLowerCase())}function Z_(i){return i=vt(i),i&&i.replace(Ip,cm).replace(Hp,"")}function EI(i,l,d){i=vt(i),l=yn(l);var E=i.length;d=d===n?E:lo(Qe(d),0,E);var b=d;return d-=l.length,d>=0&&i.slice(d,b)==l}function II(i){return i=vt(i),i&&tp.test(i)?i.replace(Ad,um):i}function bI(i){return i=vt(i),i&&sp.test(i)?i.replace(Il,"\\$&"):i}var wI=Yo(function(i,l,d){return i+(d?"-":"")+l.toLowerCase()}),OI=Yo(function(i,l,d){return i+(d?" ":"")+l.toLowerCase()}),LI=e_("toLowerCase");function yI(i,l,d){i=vt(i),l=Qe(l);var E=l?Fo(i):0;if(!l||E>=l)return i;var b=(l-E)/2;return Ka(Ma(b),d)+i+Ka(Ga(b),d)}function AI(i,l,d){i=vt(i),l=Qe(l);var E=l?Fo(i):0;return l&&E<l?i+Ka(l-E,d):i}function xI(i,l,d){i=vt(i),l=Qe(l);var E=l?Fo(i):0;return l&&E<l?Ka(l-E,d)+i:i}function SI(i,l,d){return d||l==null?l=0:l&&(l=+l),Mm(vt(i).replace(bl,""),l||0)}function NI(i,l,d){return(d?tn(i,l,d):l===n)?l=1:l=Qe(l),ec(vt(i),l)}function DI(){var i=arguments,l=vt(i[0]);return i.length<3?l:l.replace(i[1],i[2])}var TI=Yo(function(i,l,d){return i+(d?"_":"")+l.toLowerCase()});function RI(i,l,d){return d&&typeof d!="number"&&tn(i,l,d)&&(l=d=n),d=d===n?ct:d>>>0,d?(i=vt(i),i&&(typeof l=="string"||l!=null&&!wc(l))&&(l=yn(l),!l&&Mo(i))?Pr(Jn(i),0,d):i.split(l,d)):[]}var kI=Yo(function(i,l,d){return i+(d?" ":"")+yc(l)});function GI(i,l,d){return i=vt(i),d=d==null?0:lo(Qe(d),0,i.length),l=yn(l),i.slice(d,d+l.length)==l}function MI(i,l,d){var E=L.templateSettings;d&&tn(i,l,d)&&(l=n),i=vt(i),l=ss({},l,E,s_);var b=ss({},l.imports,E.imports,s_),y=Bt(b),k=Fl(b,y),U,j,oe=0,ae=l.interpolate||Ea,ue="__p += '",me=Ul((l.escape||Ea).source+"|"+ae.source+"|"+(ae===xd?hp:Ea).source+"|"+(l.evaluate||Ea).source+"|$","g"),De="//# sourceURL="+(pt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zp+"]")+`
`;i.replace(me,function(Ue,it,st,xn,nn,Sn){return st||(st=xn),ue+=i.slice(oe,Sn).replace(bp,dm),it&&(U=!0,ue+=`' +
__e(`+it+`) +
'`),nn&&(j=!0,ue+=`';
`+nn+`;
__p += '`),st&&(ue+=`' +
((__t = (`+st+`)) == null ? '' : __t) +
'`),oe=Sn+Ue.length,Ue}),ue+=`';
`;var $e=pt.call(l,"variable")&&l.variable;if(!$e)ue=`with (obj) {
`+ue+`
}
`;else if(_p.test($e))throw new je(c);ue=(j?ue.replace(Zv,""):ue).replace(Qv,"$1").replace(Jv,"$1;"),ue="function("+($e||"obj")+`) {
`+($e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(j?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ue+`return __p
}`;var et=J_(function(){return _t(y,De+"return "+ue).apply(n,k)});if(et.source=ue,bc(et))throw et;return et}function FI(i){return vt(i).toLowerCase()}function $I(i){return vt(i).toUpperCase()}function UI(i,l,d){if(i=vt(i),i&&(d||l===n))return lf(i);if(!i||!(l=yn(l)))return i;var E=Jn(i),b=Jn(l),y=cf(E,b),k=uf(E,b)+1;return Pr(E,y,k).join("")}function HI(i,l,d){if(i=vt(i),i&&(d||l===n))return i.slice(0,ff(i)+1);if(!i||!(l=yn(l)))return i;var E=Jn(i),b=uf(E,Jn(l))+1;return Pr(E,0,b).join("")}function PI(i,l,d){if(i=vt(i),i&&(d||l===n))return i.replace(bl,"");if(!i||!(l=yn(l)))return i;var E=Jn(i),b=cf(E,Jn(l));return Pr(E,b).join("")}function BI(i,l){var d=_e,E=ie;if(St(l)){var b="separator"in l?l.separator:b;d="length"in l?Qe(l.length):d,E="omission"in l?yn(l.omission):E}i=vt(i);var y=i.length;if(Mo(i)){var k=Jn(i);y=k.length}if(d>=y)return i;var U=d-Fo(E);if(U<1)return E;var j=k?Pr(k,0,U).join(""):i.slice(0,U);if(b===n)return j+E;if(k&&(U+=j.length-U),wc(b)){if(i.slice(U).search(b)){var oe,ae=j;for(b.global||(b=Ul(b.source,vt(Sd.exec(b))+"g")),b.lastIndex=0;oe=b.exec(ae);)var ue=oe.index;j=j.slice(0,ue===n?U:ue)}}else if(i.indexOf(yn(b),U)!=U){var me=j.lastIndexOf(b);me>-1&&(j=j.slice(0,me))}return j+E}function WI(i){return i=vt(i),i&&ep.test(i)?i.replace(yd,mm):i}var YI=Yo(function(i,l,d){return i+(d?" ":"")+l.toUpperCase()}),yc=e_("toUpperCase");function Q_(i,l,d){return i=vt(i),l=d?n:l,l===n?_m(i)?Im(i):om(i):i.match(l)||[]}var J_=tt(function(i,l){try{return On(i,n,l)}catch(d){return bc(d)?d:new je(d)}}),zI=Er(function(i,l){return Pn(l,function(d){d=sr(d),mr(i,d,Ec(i[d],i))}),i});function VI(i){var l=i==null?0:i.length,d=Fe();return i=l?xt(i,function(E){if(typeof E[1]!="function")throw new Bn(s);return[d(E[0]),E[1]]}):[],tt(function(E){for(var b=-1;++b<l;){var y=i[b];if(On(y[0],this,E))return On(y[1],this,E)}})}function jI(i){return m1(Yn(i,h))}function Ac(i){return function(){return i}}function qI(i,l){return i==null||i!==i?l:i}var KI=n_(),XI=n_(!0);function pn(i){return i}function xc(i){return Tf(typeof i=="function"?i:Yn(i,h))}function ZI(i){return kf(Yn(i,h))}function QI(i,l){return Gf(i,Yn(l,h))}var JI=tt(function(i,l){return function(d){return ki(d,i,l)}}),eb=tt(function(i,l){return function(d){return ki(i,d,l)}});function Sc(i,l,d){var E=Bt(l),b=Ba(l,E);d==null&&!(St(l)&&(b.length||!E.length))&&(d=l,l=i,i=this,b=Ba(l,Bt(l)));var y=!(St(d)&&"chain"in d)||!!d.chain,k=br(i);return Pn(b,function(U){var j=l[U];i[U]=j,k&&(i.prototype[U]=function(){var oe=this.__chain__;if(y||oe){var ae=i(this.__wrapped__),ue=ae.__actions__=gn(this.__actions__);return ue.push({func:j,args:arguments,thisArg:i}),ae.__chain__=oe,ae}return j.apply(i,Gr([this.value()],arguments))})}),i}function tb(){return Vt._===this&&(Vt._=Am),this}function Nc(){}function nb(i){return i=Qe(i),tt(function(l){return Mf(l,i)})}var rb=sc(xt),ob=sc(nf),ib=sc(Tl);function eg(i){return gc(i)?Rl(sr(i)):G1(i)}function ab(i){return function(l){return i==null?n:co(i,l)}}var sb=o_(),lb=o_(!0);function Dc(){return[]}function Tc(){return!1}function cb(){return{}}function ub(){return""}function db(){return!0}function fb(i,l){if(i=Qe(i),i<1||i>xe)return[];var d=ct,E=Zt(i,ct);l=Fe(l),i-=ct;for(var b=Ml(E,l);++d<i;)l(d);return b}function _b(i){return Ke(i)?xt(i,sr):An(i)?[i]:gn(E_(vt(i)))}function gb(i){var l=++Lm;return vt(i)+l}var hb=qa(function(i,l){return i+l},0),vb=lc("ceil"),pb=qa(function(i,l){return i/l},1),mb=lc("floor");function Cb(i){return i&&i.length?Pa(i,pn,jl):n}function Eb(i,l){return i&&i.length?Pa(i,Fe(l,2),jl):n}function Ib(i){return af(i,pn)}function bb(i,l){return af(i,Fe(l,2))}function wb(i){return i&&i.length?Pa(i,pn,Zl):n}function Ob(i,l){return i&&i.length?Pa(i,Fe(l,2),Zl):n}var Lb=qa(function(i,l){return i*l},1),yb=lc("round"),Ab=qa(function(i,l){return i-l},0);function xb(i){return i&&i.length?Gl(i,pn):0}function Sb(i,l){return i&&i.length?Gl(i,Fe(l,2)):0}return L.after=ZC,L.ary=D_,L.assign=$E,L.assignIn=z_,L.assignInWith=ss,L.assignWith=UE,L.at=HE,L.before=T_,L.bind=Ec,L.bindAll=zI,L.bindKey=R_,L.castArray=cE,L.chain=x_,L.chunk=m0,L.compact=C0,L.concat=E0,L.cond=VI,L.conforms=jI,L.constant=Ac,L.countBy=xC,L.create=PE,L.curry=k_,L.curryRight=G_,L.debounce=M_,L.defaults=BE,L.defaultsDeep=WE,L.defer=QC,L.delay=JC,L.difference=I0,L.differenceBy=b0,L.differenceWith=w0,L.drop=O0,L.dropRight=L0,L.dropRightWhile=y0,L.dropWhile=A0,L.fill=x0,L.filter=NC,L.flatMap=RC,L.flatMapDeep=kC,L.flatMapDepth=GC,L.flatten=O_,L.flattenDeep=S0,L.flattenDepth=N0,L.flip=eE,L.flow=KI,L.flowRight=XI,L.fromPairs=D0,L.functions=XE,L.functionsIn=ZE,L.groupBy=MC,L.initial=R0,L.intersection=k0,L.intersectionBy=G0,L.intersectionWith=M0,L.invert=JE,L.invertBy=eI,L.invokeMap=$C,L.iteratee=xc,L.keyBy=UC,L.keys=Bt,L.keysIn=vn,L.map=ts,L.mapKeys=nI,L.mapValues=rI,L.matches=ZI,L.matchesProperty=QI,L.memoize=rs,L.merge=oI,L.mergeWith=V_,L.method=JI,L.methodOf=eb,L.mixin=Sc,L.negate=os,L.nthArg=nb,L.omit=iI,L.omitBy=aI,L.once=tE,L.orderBy=HC,L.over=rb,L.overArgs=nE,L.overEvery=ob,L.overSome=ib,L.partial=Ic,L.partialRight=F_,L.partition=PC,L.pick=sI,L.pickBy=j_,L.property=eg,L.propertyOf=ab,L.pull=H0,L.pullAll=y_,L.pullAllBy=P0,L.pullAllWith=B0,L.pullAt=W0,L.range=sb,L.rangeRight=lb,L.rearg=rE,L.reject=YC,L.remove=Y0,L.rest=oE,L.reverse=mc,L.sampleSize=VC,L.set=cI,L.setWith=uI,L.shuffle=jC,L.slice=z0,L.sortBy=XC,L.sortedUniq=Q0,L.sortedUniqBy=J0,L.split=RI,L.spread=iE,L.tail=eC,L.take=tC,L.takeRight=nC,L.takeRightWhile=rC,L.takeWhile=oC,L.tap=CC,L.throttle=aE,L.thru=es,L.toArray=B_,L.toPairs=q_,L.toPairsIn=K_,L.toPath=_b,L.toPlainObject=Y_,L.transform=dI,L.unary=sE,L.union=iC,L.unionBy=aC,L.unionWith=sC,L.uniq=lC,L.uniqBy=cC,L.uniqWith=uC,L.unset=fI,L.unzip=Cc,L.unzipWith=A_,L.update=_I,L.updateWith=gI,L.values=jo,L.valuesIn=hI,L.without=dC,L.words=Q_,L.wrap=lE,L.xor=fC,L.xorBy=_C,L.xorWith=gC,L.zip=hC,L.zipObject=vC,L.zipObjectDeep=pC,L.zipWith=mC,L.entries=q_,L.entriesIn=K_,L.extend=z_,L.extendWith=ss,Sc(L,L),L.add=hb,L.attempt=J_,L.camelCase=CI,L.capitalize=X_,L.ceil=vb,L.clamp=vI,L.clone=uE,L.cloneDeep=fE,L.cloneDeepWith=_E,L.cloneWith=dE,L.conformsTo=gE,L.deburr=Z_,L.defaultTo=qI,L.divide=pb,L.endsWith=EI,L.eq=tr,L.escape=II,L.escapeRegExp=bI,L.every=SC,L.find=DC,L.findIndex=b_,L.findKey=YE,L.findLast=TC,L.findLastIndex=w_,L.findLastKey=zE,L.floor=mb,L.forEach=S_,L.forEachRight=N_,L.forIn=VE,L.forInRight=jE,L.forOwn=qE,L.forOwnRight=KE,L.get=Oc,L.gt=hE,L.gte=vE,L.has=QE,L.hasIn=Lc,L.head=L_,L.identity=pn,L.includes=FC,L.indexOf=T0,L.inRange=pI,L.invoke=tI,L.isArguments=_o,L.isArray=Ke,L.isArrayBuffer=pE,L.isArrayLike=hn,L.isArrayLikeObject=Dt,L.isBoolean=mE,L.isBuffer=Br,L.isDate=CE,L.isElement=EE,L.isEmpty=IE,L.isEqual=bE,L.isEqualWith=wE,L.isError=bc,L.isFinite=OE,L.isFunction=br,L.isInteger=$_,L.isLength=is,L.isMap=U_,L.isMatch=LE,L.isMatchWith=yE,L.isNaN=AE,L.isNative=xE,L.isNil=NE,L.isNull=SE,L.isNumber=H_,L.isObject=St,L.isObjectLike=Nt,L.isPlainObject=Hi,L.isRegExp=wc,L.isSafeInteger=DE,L.isSet=P_,L.isString=as,L.isSymbol=An,L.isTypedArray=Vo,L.isUndefined=TE,L.isWeakMap=RE,L.isWeakSet=kE,L.join=F0,L.kebabCase=wI,L.last=Vn,L.lastIndexOf=$0,L.lowerCase=OI,L.lowerFirst=LI,L.lt=GE,L.lte=ME,L.max=Cb,L.maxBy=Eb,L.mean=Ib,L.meanBy=bb,L.min=wb,L.minBy=Ob,L.stubArray=Dc,L.stubFalse=Tc,L.stubObject=cb,L.stubString=ub,L.stubTrue=db,L.multiply=Lb,L.nth=U0,L.noConflict=tb,L.noop=Nc,L.now=ns,L.pad=yI,L.padEnd=AI,L.padStart=xI,L.parseInt=SI,L.random=mI,L.reduce=BC,L.reduceRight=WC,L.repeat=NI,L.replace=DI,L.result=lI,L.round=yb,L.runInContext=Y,L.sample=zC,L.size=qC,L.snakeCase=TI,L.some=KC,L.sortedIndex=V0,L.sortedIndexBy=j0,L.sortedIndexOf=q0,L.sortedLastIndex=K0,L.sortedLastIndexBy=X0,L.sortedLastIndexOf=Z0,L.startCase=kI,L.startsWith=GI,L.subtract=Ab,L.sum=xb,L.sumBy=Sb,L.template=MI,L.times=fb,L.toFinite=wr,L.toInteger=Qe,L.toLength=W_,L.toLower=FI,L.toNumber=jn,L.toSafeInteger=FE,L.toString=vt,L.toUpper=$I,L.trim=UI,L.trimEnd=HI,L.trimStart=PI,L.truncate=BI,L.unescape=WI,L.uniqueId=gb,L.upperCase=YI,L.upperFirst=yc,L.each=S_,L.eachRight=N_,L.first=L_,Sc(L,function(){var i={};return ir(L,function(l,d){pt.call(L.prototype,d)||(i[d]=l)}),i}(),{chain:!1}),L.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){L[i].placeholder=L}),Pn(["drop","take"],function(i,l){at.prototype[i]=function(d){d=d===n?1:Ht(Qe(d),0);var E=this.__filtered__&&!l?new at(this):this.clone();return E.__filtered__?E.__takeCount__=Zt(d,E.__takeCount__):E.__views__.push({size:Zt(d,ct),type:i+(E.__dir__<0?"Right":"")}),E},at.prototype[i+"Right"]=function(d){return this.reverse()[i](d).reverse()}}),Pn(["filter","map","takeWhile"],function(i,l){var d=l+1,E=d==Ie||d==He;at.prototype[i]=function(b){var y=this.clone();return y.__iteratees__.push({iteratee:Fe(b,3),type:d}),y.__filtered__=y.__filtered__||E,y}}),Pn(["head","last"],function(i,l){var d="take"+(l?"Right":"");at.prototype[i]=function(){return this[d](1).value()[0]}}),Pn(["initial","tail"],function(i,l){var d="drop"+(l?"":"Right");at.prototype[i]=function(){return this.__filtered__?new at(this):this[d](1)}}),at.prototype.compact=function(){return this.filter(pn)},at.prototype.find=function(i){return this.filter(i).head()},at.prototype.findLast=function(i){return this.reverse().find(i)},at.prototype.invokeMap=tt(function(i,l){return typeof i=="function"?new at(this):this.map(function(d){return ki(d,i,l)})}),at.prototype.reject=function(i){return this.filter(os(Fe(i)))},at.prototype.slice=function(i,l){i=Qe(i);var d=this;return d.__filtered__&&(i>0||l<0)?new at(d):(i<0?d=d.takeRight(-i):i&&(d=d.drop(i)),l!==n&&(l=Qe(l),d=l<0?d.dropRight(-l):d.take(l-i)),d)},at.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},at.prototype.toArray=function(){return this.take(ct)},ir(at.prototype,function(i,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),b=L[E?"take"+(l=="last"?"Right":""):l],y=E||/^find/.test(l);b&&(L.prototype[l]=function(){var k=this.__wrapped__,U=E?[1]:arguments,j=k instanceof at,oe=U[0],ae=j||Ke(k),ue=function(it){var st=b.apply(L,Gr([it],U));return E&&me?st[0]:st};ae&&d&&typeof oe=="function"&&oe.length!=1&&(j=ae=!1);var me=this.__chain__,De=!!this.__actions__.length,$e=y&&!me,et=j&&!De;if(!y&&ae){k=et?k:new at(this);var Ue=i.apply(k,U);return Ue.__actions__.push({func:es,args:[ue],thisArg:n}),new Wn(Ue,me)}return $e&&et?i.apply(this,U):(Ue=this.thru(ue),$e?E?Ue.value()[0]:Ue.value():Ue)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(i){var l=ya[i],d=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",E=/^(?:pop|shift)$/.test(i);L.prototype[i]=function(){var b=arguments;if(E&&!this.__chain__){var y=this.value();return l.apply(Ke(y)?y:[],b)}return this[d](function(k){return l.apply(Ke(k)?k:[],b)})}}),ir(at.prototype,function(i,l){var d=L[l];if(d){var E=d.name+"";pt.call(Po,E)||(Po[E]=[]),Po[E].push({name:l,func:d})}}),Po[ja(n,w).name]=[{name:"wrapper",func:n}],at.prototype.clone=Wm,at.prototype.reverse=Ym,at.prototype.value=zm,L.prototype.at=EC,L.prototype.chain=IC,L.prototype.commit=bC,L.prototype.next=wC,L.prototype.plant=LC,L.prototype.reverse=yC,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=AC,L.prototype.first=L.prototype.head,Ai&&(L.prototype[Ai]=OC),L},$o=bm();oo?((oo.exports=$o)._=$o,xl._=$o):Vt._=$o}).call(aO)}(zi,zi.exports)),zi.exports}var Gt=sO(),B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function mn(t,e,n){n!==void 0&&(t[e]=n)}function lO(t){var e,n,r,o,a,s,c,u,_,g,h,p,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(p=t.fontSize)!=null&&p.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function Cs(t){var n,r,o,a,s,c,u,_,g,h,p,m,C,I,O,w,N,R,F,M,z,V;const e={type:t.type};return mn(e,"n",(n=t.n)==null?void 0:n.value),mn(e,"r",(r=t.r)==null?void 0:r.value),mn(e,"height",(o=t.height)==null?void 0:o.value),mn(e,"width",(a=t.width)==null?void 0:a.value),mn(e,"inset",(s=t.inset)==null?void 0:s.value),mn(e,"angle",(c=t.angle)==null?void 0:c.value),mn(e,"fill",(u=t.fill)==null?void 0:u.value),mn(e,"stroke",(_=t.stroke)==null?void 0:_.value),mn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),mn(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),mn(e,"strokeDashoffset",(p=t.strokeDashoffset)==null?void 0:p.value),mn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),mn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),mn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(O=t.linePathOptions)==null?void 0:O.shortenHead)==null?void 0:w.value,shortenTail:(R=(N=t.linePathOptions)==null?void 0:N.shortenTail)==null?void 0:R.value,bezierRounding:(M=(F=t.linePathOptions)==null?void 0:F.bezierRounding)==null?void 0:M.value,closeLoops:(V=(z=t.linePathOptions)==null?void 0:z.closeLoops)==null?void 0:V.value}),e}function cO(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const uO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},dO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},fO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Eh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ih={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Hs={type:"Line",strokeWidth:.125,stroke:"gray"},Vu={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},_O={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},gO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07};function Ar(t){return Array.isArray?Array.isArray(t):Oh(t)==="[object Array]"}function hO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function vO(t){return t==null?"":hO(t)}function dr(t){return typeof t=="string"}function bh(t){return typeof t=="number"}function pO(t){return t===!0||t===!1||mO(t)&&Oh(t)=="[object Boolean]"}function wh(t){return typeof t=="object"}function mO(t){return wh(t)&&t!==null}function Tn(t){return t!=null}function $c(t){return!t.trim().length}function Oh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const CO="Incorrect 'index' type",EO=t=>`Invalid value for key ${t}`,IO=t=>`Pattern length exceeds max of ${t}.`,bO=t=>`Missing ${t} property in key`,wO=t=>`Property 'weight' in key '${t}' must be a positive integer`,ug=Object.prototype.hasOwnProperty;class OO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=Lh(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Lh(t){let e=null,n=null,r=null,o=1,a=null;if(dr(t)||Ar(t))r=t,e=dg(t),n=Qc(t);else{if(!ug.call(t,"name"))throw new Error(bO("name"));const s=t.name;if(r=s,ug.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(wO(s));e=dg(s),n=Qc(s),a=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:a}}function dg(t){return Ar(t)?t:t.split(".")}function Qc(t){return Ar(t)?t.join("."):t}function LO(t,e){let n=[],r=!1;const o=(a,s,c)=>{if(Tn(a))if(!s[c])n.push(a);else{let u=s[c];const _=a[u];if(!Tn(_))return;if(c===s.length-1&&(dr(_)||bh(_)||pO(_)))n.push(vO(_));else if(Ar(_)){r=!0;for(let g=0,h=_.length;g<h;g+=1)o(_[g],s,c+1)}else s.length&&o(_,s,c+1)}};return o(t,dr(e)?e.split("."):e,0),r?n:n[0]}const yO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},AO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},xO={location:0,threshold:.6,distance:100},SO={useExtendedSearch:!1,getFn:LO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...AO,...yO,...xO,...SO};const NO=/[^ ]+/g;function DO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const a=o.match(NO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class ju{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=DO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,dr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();dr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Tn(e)||$c(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,a)=>{let s=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Tn(s)){if(Ar(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:_,value:g}=u.pop();if(Tn(g))if(dr(g)&&!$c(g)){let h={v:g,i:_,n:this.norm.get(g)};c.push(h)}else Ar(g)&&g.forEach((h,p)=>{u.push({nestedArrIndex:p,value:h})})}r.$[a]=c}else if(dr(s)&&!$c(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function yh(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const o=new ju({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(Lh)),o.setSources(e),o.create(),o}function TO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:o}=t,a=new ju({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(o),a}function us(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return o?s+c/o:c?1:s}function RO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,o=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(o=a-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const ho=32;function kO(t,e,n,{location:r=Ye.location,distance:o=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>ho)throw new Error(IO(ho));const g=e.length,h=t.length,p=Math.max(0,Math.min(r,h));let m=a,C=p;const I=c>1||u,O=I?Array(h):[];let w;for(;(w=t.indexOf(e,C))>-1;){let V=us(e,{currentLocation:w,expectedLocation:p,distance:o,ignoreLocation:_});if(m=Math.min(V,m),C=w+g,I){let K=0;for(;K<g;)O[w+K]=1,K+=1}}C=-1;let N=[],R=1,F=g+h;const M=1<<g-1;for(let V=0;V<g;V+=1){let K=0,se=F;for(;K<se;)us(e,{errors:V,currentLocation:p+se,expectedLocation:p,distance:o,ignoreLocation:_})<=m?K=se:F=se,se=Math.floor((F-K)/2+K);F=se;let _e=Math.max(1,p-se+1),ie=s?h:Math.min(p+se,h)+g,ce=Array(ie+2);ce[ie+1]=(1<<V)-1;for(let Ie=ie;Ie>=_e;Ie-=1){let Ce=Ie-1,He=n[t.charAt(Ce)];if(I&&(O[Ce]=+!!He),ce[Ie]=(ce[Ie+1]<<1|1)&He,V&&(ce[Ie]|=(N[Ie+1]|N[Ie])<<1|1|N[Ie+1]),ce[Ie]&M&&(R=us(e,{errors:V,currentLocation:Ce,expectedLocation:p,distance:o,ignoreLocation:_}),R<=m)){if(m=R,C=Ce,C<=p)break;_e=Math.max(1,2*p-C)}}if(us(e,{errors:V+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:_})>m)break;N=ce}const z={isMatch:C>=0,score:Math.max(.001,R)};if(I){const V=RO(O,c);V.length?u&&(z.indices=V):z.isMatch=!1}return z}function GO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class Ah{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(p,m)=>{this.chunks.push({pattern:p,alphabet:GO(p),startIndex:m})},h=this.pattern.length;if(h>ho){let p=0;const m=h%ho,C=h-m;for(;p<C;)g(this.pattern.substr(p,ho),p),p+=ho;if(m){const I=h-ho;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:o,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let g=[],h=0,p=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:O})=>{const{isMatch:w,score:N,indices:R}=kO(e,C,I,{location:o+O,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(p=!0),h+=N,w&&R&&(g=[...g,...R])});let m={isMatch:p,score:p?h/this.chunks.length:1};return p&&r&&(m.indices=g),m}}class Kr{constructor(e){this.pattern=e}static isMultiMatch(e){return fg(e,this.multiRegex)}static isSingleMatch(e){return fg(e,this.singleRegex)}search(){}}function fg(t,e){const n=t.match(e);return n?n[1]:null}class MO extends Kr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class FO extends Kr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class $O extends Kr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class UO extends Kr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class HO extends Kr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class PO extends Kr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class xh extends Kr{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new Ah(e,{location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Sh extends Kr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,o.push([r,n-1]);const s=!!o.length;return{isMatch:s,score:s?0:1,indices:o}}}const Jc=[MO,Sh,$O,UO,PO,HO,FO,xh],_g=Jc.length,BO=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,WO="|";function YO(t,e={}){return t.split(WO).map(n=>{let r=n.trim().split(BO).filter(a=>a&&!!a.trim()),o=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,_=-1;for(;!u&&++_<_g;){const g=Jc[_];let h=g.isMultiMatch(c);h&&(o.push(new g(h,e)),u=!0)}if(!u)for(_=-1;++_<_g;){const g=Jc[_];let h=g.isSingleMatch(c);if(h){o.push(new g(h,e));break}}}return o})}const zO=new Set([xh.type,Sh.type]);class VO{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:o=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=YO(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const g=n[u];s.length=0,a=0;for(let h=0,p=g.length;h<p;h+=1){const m=g[h],{isMatch:C,indices:I,score:O}=m.search(e);if(C){if(a+=1,c+=O,r){const w=m.constructor.type;zO.has(w)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let h={isMatch:!0,score:c/a};return r&&(h.indices=s),h}}return{isMatch:!1,score:1}}}const eu=[];function jO(...t){eu.push(...t)}function tu(t,e){for(let n=0,r=eu.length;n<r;n+=1){let o=eu[n];if(o.condition(t,e))return new o(t,e)}return new Ah(t,e)}const Es={AND:"$and",OR:"$or"},nu={PATH:"$path",PATTERN:"$val"},ru=t=>!!(t[Es.AND]||t[Es.OR]),qO=t=>!!t[nu.PATH],KO=t=>!Ar(t)&&wh(t)&&!ru(t),gg=t=>({[Es.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Nh(t,e,{auto:n=!0}={}){const r=o=>{let a=Object.keys(o);const s=qO(o);if(!s&&a.length>1&&!ru(o))return r(gg(o));if(KO(o)){const u=s?o[nu.PATH]:a[0],_=s?o[nu.PATTERN]:o[u];if(!dr(_))throw new Error(EO(u));const g={keyId:Qc(u),pattern:_};return n&&(g.searcher=tu(_,e)),g}let c={children:[],operator:a[0]};return a.forEach(u=>{const _=o[u];Ar(_)&&_.forEach(g=>{c.children.push(r(g))})}),c};return ru(t)||(t=gg(t)),r(t)}function XO(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:a,score:s})=>{const c=o?o.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function ZO(t,e){const n=t.matches;e.matches=[],Tn(n)&&n.forEach(r=>{if(!Tn(r.indices)||!r.indices.length)return;const{indices:o,value:a}=r;let s={indices:o,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function QO(t,e){e.score=t.score}function JO(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const o=[];return n&&o.push(ZO),r&&o.push(QO),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return o.length&&o.forEach(u=>{u(a,c)}),c})}class oi{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new OO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ju))throw new Error(CO);this._myIndex=n||yh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Tn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,o-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=dr(e)?dr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return XO(u,{ignoreFieldNorm:c}),a&&u.sort(s),bh(n)&&n>-1&&(u=u.slice(0,n)),JO(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=tu(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:a,i:s,n:c})=>{if(!Tn(a))return;const{isMatch:u,score:_,indices:g}=n.searchIn(a);u&&o.push({item:a,idx:s,matches:[{score:_,value:a,norm:c,indices:g}]})}),o}_searchLogical(e){const n=Nh(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:h,searcher:p}=c,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:p});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const g=[];for(let h=0,p=c.children.length;h<p;h+=1){const m=c.children[h],C=r(m,u,_);if(C.length)g.push(...C);else if(c.operator===Es.AND)return[]}return g},o=this._myIndex.records,a={},s=[];return o.forEach(({$:c,i:u})=>{if(Tn(c)){let _=r(n,c,u);_.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),_.forEach(({matches:g})=>{a[u].matches.push(...g)}))}}),s}_searchObjectList(e){const n=tu(e,this.options),{keys:r,records:o}=this._myIndex,a=[];return o.forEach(({$:s,i:c})=>{if(!Tn(s))return;let u=[];r.forEach((_,g)=>{u.push(...this._findMatches({key:_,value:s[g],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!Tn(n))return[];let o=[];if(Ar(n))n.forEach(({v:a,i:s,n:c})=>{if(!Tn(a))return;const{isMatch:u,score:_,indices:g}=r.searchIn(a);u&&o.push({score:_,key:e,value:a,idx:s,norm:c,indices:g})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:_}=r.searchIn(a);c&&o.push({score:u,key:e,value:a,norm:s,indices:_})}return o}}oi.version="7.0.0";oi.createIndex=yh;oi.parseIndex=TO;oi.config=Ye;oi.parseQuery=Nh;jO(VO);function Lr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function eL(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function tL(t){return new oi(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function nL(t,e,n){const r=eL(e,n);return t.length===0?r:tL(r).search(t).map(o=>o.item)}function rL(t,e){return Lr(t,e).shape}function Mn(t,e){const n=rL(t,e);return n?Cs(n):void 0}var Ko=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Ko||{});const qu=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Ku=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),oL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),iL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),hg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Dh(t){rt.update(e=>(e.addToDict(t),e))}function Xr(t,e){const n=lt(ov);n&&(e.shape={...n}),rt.update(r=>(r.addConstraint(e.toolId,t,e),r)),mi({id:t,constraint:e})}function Eo(t,e){e&&rt.update(n=>(n.removeConstraint(t,e),n))}function aL(t,e){rt.update(n=>(n.setConstraints(t,e),n))}function vg(t){t.type===Ko.ADD_LOCAL_CONSTRAINT?Xr(t.payload.id,t.payload.constraint):t.type===Ko.REMOVE_LOCAL_CONSTRAINT?Eo(t.payload.tool,t.payload.id):t.type===Ko.REMOVE_LOCAL_CONSTRAINT_GROUP?PD(t.payload.tool):t.type===Ko.RESTORE_LOCAL_CONSTRAINT_GROUP?aL(t.payload.tool,t.payload.constraints):t.type===Ko.UPDATE_LOCAL_CONSTRAINT&&Pt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function sa(t,e){return{execute:()=>{vg(t)},unExecute:()=>{vg(e)}}}class Te{constructor(e,n){ge(this,"x");ge(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function sL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const kn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Te(o.x,o.y)};function vs(t,e=!0,n=.5){const r=$s(t),o=new Te(r.c+.5,r.r+.5),a=t.distance(o);return!e||a<n?{cell:r,dist:a}:null}function Th(t,e=!0,n=.5){const r=$s(t),o=new Te(r.c+.5,r.r+.5),a=t.distance(o),s={r:o.y,c:o.x};return!e||a<n?{cellCenter:s,dist:a}:null}function Ki(t,e=!0,n=.5){const r=$s(t),o=eO(r),s=o.map(g=>new Te(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],_=s[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function Xi(t,e=!0,n=.5){const r=$s(t),o=nO(r),s=o.map(g=>new Te(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],_=s[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function Uc(t,e=!0,n=.5){const r=Xi(t,!1);if(!r)return null;const o=Ki(t,!1);if(!o)return null;const a=Th(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,o.corner],u=s.map(I=>new Te(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),g=u.findIndex(I=>I===_),h=s[g],m=["cell center","edge","corner"][g],C={cellCenter:a.cellCenter,edge:r.edge,corner:o.corner,dist:_,target:h,type:m};return!e||_<n?C:null}class ii{constructor(e=.4){ge(this,"onTap",null);ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"onMove",null);ge(this,"_prevPoint",null);ge(this,"_prevCell",null);ge(this,"_lastPointerDownTime",0);ge(this,"_isDown",!1);ge(this,"_isTap",!1);ge(this,"_tapCount",0);ge(this,"_lastTapPosition",null);ge(this,"_lastTapTime",0);ge(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,o=kn(e,n);if(!o)return;this._prevPoint=o;const a=vs(o,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const o=vs(r,!0,this._margin);if(!o)return;const a=o.cell;if(this._prevCell&&qe(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=kn(e,n);if(!r)return;const o=vs(r,!1);if(!o)return;const a=o.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Rh(){return{_undoStack:[],_redoStack:[]}}const ai=Ft(Rh());function lL(){ai.update(()=>Rh())}function on(t,e=!0){ai.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function cL(t,e=!0){ai.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function kh(){ai.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Gh(){ai.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}function pg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function uL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function mg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function Cg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function dL(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===f.HIGHLIGHTS&&o.highlights.length?pg(o,e):o.value!==null?uL(o,e):n===f.CORNER_PM&&o.cornerMarks.length?mg(o,e):n===f.CENTER_PM&&o.centerMarks.length?Cg(o,e):o.cornerMarks.length?mg(o,e):o.centerMarks.length?Cg(o,e):o.highlights.length?pg(o,e):r:r}function Zr(t,e,n,r=!1){if(!(t&&e))return;const o=qu(t,e),a=Ku(t,n),s=sa(o,a);on(s,r)}function Oo(t,e,n,r=!0){if(!(t&&e))return;const o=Ku(t,n),a=qu(t,e),s=sa(o,a);on(s,r)}function ou(t,e,n,r,o=!1){if(!(t&&n&&e))return;const a=hg(r,t,n),s=hg(r,t,e),c=sa(a,s);on(c,o)}function Ps(t,e,n){console.log("getArrowToolInputHandler");const r=new ii,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,_=!1,g;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(g||(g={}));let h="DYNAMIC";function p(C){u=!1;const I=C.cell;if(Kt(C.cell,o)){if(h==="DYNAMIC"){const w=lt(rt),N=xD(w,n,I);if(N){const F=ID(N.arrow,N.matchLineIdx);ou(N.id,N.arrow,F,n,!0),_=!0;return}const R=xg(w,n,I);if(!R)u=!0,h="BULB",c=null,a=null;else{h="BODY",c=R[0],a=R[1],a=su(a,I),Pt(n,c,a);return}}if(h==="BULB"&&!c){c=Gt.uniqueId(),a=tv(n,[I]),Xr(c,a);return}else h==="BULB"&&c&&a?(a=pD(a,I),Pt(n,c,a)):h==="BODY"&&c&&a&&(a=mD(a,I),Pt(n,c,a))}}return r.onDragStart=C=>{h="DYNAMIC",p(C)},r.onDrag=C=>{p(C)},r.onDragEnd=()=>{if(_){_=!1;return}h==="BODY"&&c&&a?CD(a)?(a=ED(a),Pt(n,c,a)):(ou(c,s,a,n),s=a):h==="BULB"&&(Zr(c,a,n),s=a),h="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,O=lt(rt);if(xg(O,n,I)){Oo(c,a,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var W=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(W||{});const Bs=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Cn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Ws=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,fL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,En=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,si=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Mh=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ne=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,_L=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,gL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,hL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,la=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,vL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,pL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,mL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function CL(t){return Fu(t)?_L():$u(t)?gL():t===f.XV?pL():Uu(t)?hL():Bu(t)?Bs():Pu(t)?Ws():ta(t)?fL():Hu(t)?Ne():gh(t)?mL():""}const EL={getInputHandler(t,e,n){return Ps(t,e,n)},toolId:f.ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Ws(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}},IL={getInputHandler(t,e,n){return Ps(t,e,n)},toolId:f.AVERAGE_ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Ws(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}};f.SQUARE_ROOT_ARROW,W.ARROW_TOOLS,B.LINE,Ws(),T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL;function bL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function wL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function OL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function LL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function yL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const AL={Delete:null,Backspace:null};function xL(t,e=10){if(t in AL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function SL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function NL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function DL(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function TL(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function Fh(t){return t==="Backspace"}function li(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Fh(t.key))}function RL(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function kL(t){return RL(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function GL(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Lo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${_.source}$`,"i").test(t))}function Qr(t,e,n){if(t===void 0)return t;let r=t;return Fh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function $h(t,e,n=""){return{toolId:t,cells:e,value:n}}function ML(t,e,n=!1){const r=Ch(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function FL(t,e){return{...t,value:e}}function $L(t,e){const n=ca(e,"cells"),r=No(e);return $h(t,n,r)}function Yt(t,e,n,r){const o=new ii,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function g(m){const C=lt(rt),I=m.cell;if(Kt(m.cell,a)){if(m.event.shiftKey){const w=Ag(C,n,I);w&&(c=w[0],s=w[1],mi({id:c,constraint:s}),_=1)}if(_===0){const w=Ag(C,n,I);if(_=w?2:1,w){Oo(w[0],w[1],n);return}}if(!s&&_===1){s=$h(n,[I]),c=Gt.uniqueId(),Xr(c,s);return}else if(s&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=ML(s,I,w),Pt(n,c,s);return}}}function h(m){const C=lt(gr);if(!C)return;let I=C.constraint;const O=C.id;if(I.value===void 0||!li(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=FL(I,w),Pt(n,O,I))}return o.onDragStart=m=>{c=null,s=null,_=0,g(m)},o.onDrag=m=>{g(m)},o.onDragEnd=()=>{c&&s&&Zr(c,s,n),c=null},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:m=>{o.pointerUp(m,t)},keyDown:m=>{h(m)},keyUp:()=>{}}}const Xu=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CAGE_TOOL],In=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CAGE_TOOL];function cn(t,e=5){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function un(t,e,n){return Qr(t,e,n)}const fr={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},UL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.KILLER_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Cn(),tags:[],categories:In}},HL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.UNIQUE_DIGITS_CAGE,order:W.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Cn(),tags:[],categories:In}},PL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.INVERTED_KILLER_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Cn(),tags:[],categories:In}},BL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.SUM_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Cn(),tags:[],categories:In}},WL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.SUM_CAGE_LOOK_AND_SAY,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Bs(),tags:[],categories:Xu}},YL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.PARITY_BALANCE_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Bs(),tags:[],categories:Xu}},zL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.DIVISIBLE_KILLER_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Cn(),tags:[],categories:In}},VL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.SPOTLIGHT_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Cn(),tags:[],categories:In}},jL={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:f.PUTTERIA_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Bs(),tags:[],categories:Xu}};f.KILLER_CAGE_LOOK_AND_SAY,W.CAGE_TOOLS,Cn();const qL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.MULTISET_CAGE,order:W.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Cn(),tags:[],categories:In}},KL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.VAULTED_CAGE,order:W.CAGE_TOOLS,shape:fr,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Cn(),tags:[],categories:In}};f.AQUARIUM_CAGE,W.CAGE_TOOLS,Cn();const XL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:W.CAGE_TOOLS,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Cn(),tags:[],categories:In}},ZL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:W.CAGE_TOOLS,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Cn(),tags:[],categories:In}},QL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.DOUBLERS_KILLER_CAGE,order:W.CAGE_TOOLS,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Cn(),tags:[],categories:In}},JL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.NEGATORS_KILLER_CAGE,order:W.CAGE_TOOLS,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Cn(),tags:[],categories:In}};var Vi=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Vi||{});const ey=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),ty=()=>({type:"CLEAR"}),ny=t=>({type:"DRAG",payload:t}),iu=t=>({type:"SET",payload:t}),ry=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Zu=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),ur=(t,e,n)=>{const r=[...t];return ms(r),{cells:r,lastCell:e,mode:n}};function oy(t,e,n){if(e===null)return Zu();if(n==="RESETTING")return ur([e],e,"SELECTING");const r=t.cells.findIndex(o=>qe(e,o));if(n==="SELECTING")return r!==-1?t:ur([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),ur(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return ur([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),ur(o,null,"DESELECTING")}return t}function iy(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:ur([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),ur(r,null,t.mode)}return t}function ay(t,e){return{...t,cells:e}}function sy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>qe(e,o))!==-1?ur([...t.cells],e,"SELECTING"):ur([...t.cells,e],e,"SELECTING"):ur([e],e,t.mode)}function Uh(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Zu();case"SET":return ay(t,e.payload);case"CLICK":return oy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return iy(t,e.payload);case"ARROW_KEY":return sy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Eg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Hh(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function au(t){const e=new Option().style;return e.color=t,e.color!==""}function Hc(t){return Hh(t)||au(t)?t:au(`#${t}`)?`#${t}`:void 0}function Is(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Ph(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Bh(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}var Nn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Nn||{});const ly=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Wh=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),cy=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),uy=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),dy=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),fy=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),_y=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),gy=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Pc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),hy=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Bc=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Ys=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function vy(t,e,n){if(e===f.DIGIT){const r=t.map(s=>s.value),o=ly(t,n),a=Wh(t,r);return[o,a]}if(e===f.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),a=cy(t,n),s=uy(t,r,o);return[a,s]}if(e===f.REGIONS){const r=t.map(s=>s.region),o=dy(t,n),a=fy(t,r);return[o,a]}if(e===f.FOG){const r=t.map(c=>c.fog),a=_y(t,n===1),s=gy(t,r);return[a,s]}if(e===f.HIGHLIGHTS&&n!==null){const r=Bc(t,n),o=Bc(t,n);return[r,o]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),o=Bc(t,n),a=Ys(t,r);return[o,a]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Pc(t,n,e),o=Pc(t,n,e);return[r,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const o=Pc(t,n,e),a=hy(t,r,e);return[o,a]}}function Pi(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),an.update(o=>o)}function ti(t){switch(t.type){case Nn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;Pi(e,f.DIGIT,n,!0);break}case Nn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;Pi(e,f.GIVEN,n,!0);break}case Nn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;Pi(e,f.REGIONS,n,!0);break}case Nn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;Pi(e,f.HIGHLIGHTS,n,!0);break}case Nn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;Pi(e,r,n,!0);break}case Nn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];an.update(r=>r);break}case Nn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];an.update(o=>o);break}case Nn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];an.update(r=>r);break}case Nn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];an.update(r=>r);break}case Nn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===f.CENTER_PM?e[o].centerMarks=r[o]:n===f.CORNER_PM&&(e[o].cornerMarks=r[o]);an.update(o=>o);break}case Nn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),an.update(r=>r);break}case Nn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];an.update(r=>r);break}}}function py(t,e){return{execute:()=>{ti(t)},unExecute:()=>{ti(e)}}}const Io=Ft(Zu());function Xo(t){t&&Io.update(e=>Uh(e,t))}function Ig(t){t&&Io.update(e=>Uh(e,t))}function my(t,e){return{execute:()=>{Ig(t)},unExecute:()=>{Ig(e)}}}const qo=new ii;function bg(t,e){return t.shiftKey?Vi.SELECTING:t.ctrlKey||t.metaKey||e?Vi.DYNAMIC:t.altKey?Vi.DESELECTING:Vi.RESETTING}function na(t,e,n,r,o=!1){switch(e){case f.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case f.DIGIT:return t.filter(s=>!(o&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case f.CORNER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case f.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function Cy(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=o=>o===f.CORNER_PM||o===f.CENTER_PM||o===f.DIGIT;for(const o of n){const a=na(t,o,"any",-1,r(o));if(a.length)return{tool:o,cells:a}}return{tool:e,cells:[]}}function Zi(t,e,n,r){const o=vy(e,n,r);if(o){const a=o[0],s=o[1],c=py(a,s),u=iu(t),g=[my(u,u),c];cL(g)}}function Ey(t,e,n){const r=f.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const o=na(e,r,"any",-1,!1);if(o.length)return Zi(n,o,r,t),!0}else{const o=na(e,r,"different",t,!0);if(o.length)return Zi(n,o,r,t),!0}return!1}function Jr(t,e,n){console.log("getSelectionInputHandler");const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};qo.onTap=m=>{if(m.tapCount!==2)return;const I=Kt(m.cell,o)?m.cell:null;if(!I)return;const O=dL(I,e,n),w=iu(O);Xo(w)},qo.onDragStart=m=>{const C=Kt(m.cell,o),I=lt(lu),O=bg(m.event,I),w=C?m.cell:null,N=ey(w,O);Xo(N)},qo.onDrag=m=>{const I=Kt(m.cell,o)?m.cell:null,O=ny(I);Xo(O)};function a(m){if(!LL(m))return!1;const C=e.getAllCells().map(O=>({r:O.r,c:O.c})),I=iu(C);return Xo(I),!0}function s(m){if(!NL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=TL(m);return yr(C),!0}return m.type==="keyup"?(UD(),!0):!1}function c(m){if(!SL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return yr(I),cu(I),!0}else{const C=DL(m.code);return yr(C),cu(C),!0}}function u(m){if(!kL(m))return!1;const C=lt(Io).lastCell;let I=null;if(C!==null){const[N,R]=GL(m),[F,M]=[Eg(C.r+R,0,o.nRows-1),Eg(C.c+N,0,o.nCols-1)];I={r:F,c:M}}else I={r:0,c:0};const O=bg(m,!1),w=ry(I,O);return Xo(w),!0}function _(m){const C=xL(m);if(C===void 0)return!1;const I=lt(Io).cells,O=[];if(I.forEach(w=>{const N=e.getCell(w.r,w.c);N&&O.push(N)}),n===f.FOG)return Ey(C,O,I);if(C===null){const{tool:w,cells:N}=Cy(O,n);if(N.length)return Zi(I,N,w,C),!0}else{let w=na(O,n,"different",C,!0);if(w.length)return Zi(I,w,n,C),!0;if(w=na(O,n,"equal",C,!0),w.length)return Zi(I,w,n,C),!0}return!1}function g(m){return m.repeat?!1:_(m.key)}const h=Gt.throttle(m=>{qo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&qo.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){qo.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||g(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function Zo(t,e){return qe(t.p1,e.p1)&&qe(t.p2,e.p2)||qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function Iy(t,e){return qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function Yh(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!qe(t,e)}class zs{constructor(){ge(this,"edgeMarkers",[]);ge(this,"cellMarkers",[]);ge(this,"lineMarkers",[]);ge(this,"draftLine",[]);ge(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>qe(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Zo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>Zo(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&Iy(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Yh(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>Zo(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(a=>Zo(a,r));if(o!==-1){const a=this.lineMarkers.splice(o,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new zs;return Object.assign(e,this),e}}class by{constructor(){ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"onTap",null);ge(this,"_prevType",null);ge(this,"_isDown",!1);ge(this,"_isTap",!1);ge(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=kn(e,n);if(!r)return;const o=Uc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._prevType=o.type,this._prevCoords=o.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const o=Uc(r,!1);if(!o||this._prevCoords&&qe(this._prevCoords,o.target))return;this._isTap=!1;const a={coords:o.target,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&Yh(this._prevCoords,o.target)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=o.type,this._prevCoords=o.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=kn(e,n);if(!r)return;const o=Uc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._isTap&&this._prevCoords&&qe(this._prevCoords,o.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}const wg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Og=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),ds=t=>({type:"ADD_CELL_MARKER",payload:t}),Lg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),wy=t=>({type:"DRAG",payload:t}),bs=t=>({type:"ADD_LINE_MARKERS",payload:t}),yg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Qu=()=>({type:"RESET"});function Oy(t,e){switch(e.type){case"RESET":return new zs;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}const ws=Ft(new zs);function jr(t){ws.update(e=>Oy(e,t))}const Os=Ft(1);function go(t,e){return{execute:()=>{jr(t)},unExecute:()=>{jr(e)}}}function Ly(t,e){console.log("getPenToolInputHandler");const n={nRows:e.nRows,nCols:e.nCols},r=new by;return r.onTap=a=>{const s=a.coords,c=lt(Os),u=lt(ws);if(a.type==="cell center"){if(!Qw(s,n))return;const g=u.getCellMarker(s);if(g)if(g.marker==="X"){const h={...s,colorId:c,marker:"O"},p=ds(h),m=ds(g),C=go(p,m);on(C)}else{const h=Lg(s),p=ds(g),m=go(h,p);on(m)}else{const h={...s,colorId:c,marker:"X"},p=ds(h),m=Lg(s),C=go(p,m);on(C)}}else if(a.type==="edge"){const _=u.getEdgeMarker(s);if(_){const g=Og(s),h=wg(_),p=go(g,h);on(p)}else{const g={...s,colorId:c},h=wg(g),p=Og(s),m=go(h,p);on(m)}}},r.onDrag=a=>{const s=a.coords,c=lt(Os);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},_=wy(u);jr(_)}},r.onDragEnd=()=>{const a=lt(ws);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>Zo(c,u)));if(s.length){const c=bs(s),u=yg(s),_=go(c,u);on(_)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>Zo(c,u)));if(s.length){const c=yg(s),u=bs(s),_=go(c,u);on(_)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const yy={getInputHandler:Jr,toolId:f.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},Ay={getInputHandler:Jr,toolId:f.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},xy={getInputHandler:Jr,toolId:f.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[T.CELL_INPUT_TOOL]}},Sy={getInputHandler:Jr,toolId:f.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},Ny={getInputHandler:Jr,toolId:f.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},Dy={getInputHandler:Jr,toolId:f.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[T.CELL_INPUT_TOOL]}},Ty={getInputHandler:Jr,toolId:f.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[T.CELL_INPUT_TOOL]}},Ry={getInputHandler:Jr,toolId:f.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[T.CELL_INPUT_TOOL]}},ky={getInputHandler:Ly,toolId:f.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var Et=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(Et||{});class Vs{constructor(e){ge(this,"onDragStart",null);ge(this,"target");this.target=e}pointerDown(e,n){const r=kn(e,n);if(!r)return;const o=Xi(r,!1);if(!o)return;const a=Ki(r,!1);if(!a)return;const s=vs(r,!1);if(!s)return;const c=Th(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=o.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<o.dist?u=a.corner:u=o.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?o.dist<c.dist?u=o.edge:u=c.cellCenter:o.dist<a.dist&&o.dist<c.dist?u=o.edge:a.dist<o.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<o.dist&&(_="corner");const g=_==="edge"?2*o.idx:2*a.idx+1,h={event:e,cell:s.cell,edge:o.edge,corner:a.corner,closest:u,edgeIdx:o.idx,cornerIdx:a.idx,direction:g};this.onDragStart&&this.onDragStart(h)}}function Gy(t,e,n=""){return{toolId:t,cell:e,value:n}}function zh(t,e,n,r){console.log("getCenterCornerOrEdgeToolInputHandler");const o=(r==null?void 0:r.targets)??Et.CLOSEST,a=new Vs(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=lt(rt),C=p.cell,I=p.closest;if(console.log(p),!Kt(C,s))return;const w=ND(m,n,I);if(w){Eo(n,w);return}c=Gy(n,I,""),u=Gt.uniqueId(),Xr(u,c)}function g(p){const m=lt(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!li(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=ua(C,O),Pt(n,I,C))}return a.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&a.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{g(p)},keyUp:()=>{}}}const My={getInputHandler(t,e,n){return zh(t,e,n,{targets:Et.CLOSEST})},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,order:W.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The dots in the grid are centers of 180 degree rotationally symmetric 'galaxies' (non-overlapping set of orthogonally connected cells).",usage:Mh(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}},Fy={getInputHandler(t,e,n){return zh(t,e,n,{targets:Et.CLOSEST,valueUpdater:(r,o)=>Qr(r,o,()=>!0),defaultValue:""})},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:W.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Mh(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}};function $y(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function Uy(t,e){const n=Ch(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function Hy(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function Py(t){for(let e=0;;e++){const n=Hy(e);if(!t.has(n))return n}}function By(t,e,n){const r=new ii,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,_="cells2",g;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(g||(g={}));let h=0;function p(C){const I=lt(rt),O=C.cell;if(!Kt(C.cell,o))return;const N=DD(I,n,O);if(h===0&&(N?(c=N[0],a=N[1],h=2,u=O,_=a.cells2.some(F=>qe(F,O))?"cells2":"cells"):h=1),h===1&&c===null){c=Gt.uniqueId();const R=TD(I,n),F=Py(R);a=$y(n,[O],F),Xr(c,a);return}else if(h===1&&c&&a){a=Uy(a,O),Pt(n,c,a);return}else if(h===2&&c&&a&&u){const R={r:O.r-u.r,c:O.c-u.c},M=(_==="cells2"?a.cells2:a.cells).map(V=>({r:V.r+R.r,c:V.c+R.c}));if(!M.every(V=>Kt(V,o)))return;_==="cells"?a={...a,cells:M}:a={...a,cells2:M},u=O,Pt(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,h=0,u=null,p(C)},r.onDrag=C=>{p(C)},r.onDragEnd=()=>{c&&a&&(h===1?Zr(c,a,n):h===2&&ou(c,s,a,n),s=a)},r.onTap=()=>{c&&h!==1&&(Eo(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const Wy={getInputHandler(t,e,n){return By(t,e,n)},toolId:f.CLONE_REGION,order:W.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[T.CLONE_CONSTRAINT,T.LOCAL_CONSTRAINT]}};function Vh(t,e,n){return{toolId:t,cells:e,value:n}}function Yy(t,e){const n=ca(e,"cells"),r=No(e);return Vh(t,n,r)}class zy{constructor(){ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"_prevCellCorner",null);ge(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=kn(e,n);if(!r)return;const o=Ki(r);if(!o)return;this._prevCellCorner=o.corner;const a={event:e,cellCorner:o.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const o=Ki(r);if(!o||this._prevCellCorner&&qe(o.corner,this._prevCellCorner))return;const a={event:e,cellCorner:o.corner};this._prevCellCorner=o.corner,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellCorner=null,this._isDown=!1);const r=kn(e,n);!r||Ki(r)}}function yo(t,e,n,r){console.log("getCornerToolInputHandler");const o=new zy,a={nRows:e.nRows,nCols:e.nCols};let s;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(h){const p=lt(rt),m=h.cellCorner,C=tO(m);if(!C.every(w=>Kt(w,a)))return;let O=null;if(c===0&&(O=yD(p,n,m),c=O?2:1),O&&c===2){const w=O[0];Oo(w,O[1],n);return}else if(c===1){const w=Vh(n,C,r==null?void 0:r.defaultValue),N=Gt.uniqueId();Zr(N,w,n,!0)}}function _(h){const p=lt(gr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!li(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=ua(m,I),Pt(n,C,m))}return o.onDragStart=h=>{c=0,u(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:h=>{_(h)},keyUp:()=>{}}}function js(t,e=3){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function qs(t,e,n){return Qr(t,e,n)}function Vy(t,e){function n(r){return!0}return Qr(t,e,n)}const jy={getInputHandler(t,e,n){return yo(t,e,n,{valueUpdater:(r,o)=>Vy(r,o),defaultValue:""})},toolId:f.QUADRUPLE,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:vL(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},qy={getInputHandler(t,e,n){return yo(t,e,n,{valueUpdater:(r,o)=>qs(r,o,js),defaultValue:""})},toolId:f.CORNER_SUM,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:la(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},Ky={getInputHandler(t,e,n){return yo(t,e,n)},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:la(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},Xy={getInputHandler(t,e,n){return yo(t,e,n,{valueUpdater:(r,o)=>qs(r,o,js),defaultValue:""})},toolId:f.CORNER_EVEN_COUNT,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:la(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,W.CORNER_TOOLS,B.CIRCLE,la(),T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL;const Zy={getInputHandler(t,e,n){return yo(t,e,n,{defaultValue:"X"})},toolId:f.PRODUCT_SQUARE,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square’s positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:la(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};function jh(t,e,n){return{toolId:t,cells:e,value:n}}function Qy(t,e){const n=ca(e,"cells"),r=No(e);return jh(t,n,r)}function qh(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>qe(a,e)&&s>=r)}function Jy(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:Fs(r[o-1],e)))return t;const s=qh(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Ae(t,e,n,r){console.log("getLineToolInputHandler");const o=new ii,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(h){if(!u||!c)throw"UNREACHABLE";const p=h.cell;Kt(h.cell,a)&&(c=Jy(c,p,s),Pt(n,u,c))}return o.onDragStart=h=>{u=Gt.uniqueId(),c=jh(n,[],r==null?void 0:r.defaultValue),Xr(u,c),_(h)},o.onDrag=h=>{_(h)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?Eo(n,u):u&&c&&Zr(u,c,n,!1),u=null},o.onTap=h=>{const p=h.cell,m=lt(rt),C=AD(m,n,p);if(C){const[I,O]=C;Oo(I,O,n)}},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}function Kh(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function eA(t,e){const n=Ks(e),r=No(e);return Kh(t,n,r)}function Xh(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function tA(t,e){const n=Ks(e),r=ev(e);return Xh(t,n,r)}function Zh(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function nA(t,e){const n=Ks(e),r=hD(e),o=Zh(t,n,Pe.N);return o.directions=r,o}function Je(t,e,n,r,o){const a=new ii,s={nRows:e.nRows,nCols:e.nCols};let c;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(p){const m=lt(rt),C=p.cell;if(!Kt(p.cell,s))return;const O=ed(m,n,C);if(u===0&&(u=O?2:1),O&&u===2){const[w,N]=O;Oo(w,N,n)}else if(u===1){const w=Kh(n,C,o==null?void 0:o.defaultValue),N=Gt.uniqueId();Zr(N,w,n,!0)}}a.onDragStart=p=>{u=0,_(p)},a.onDrag=p=>{_(p)};function g(p){const m=lt(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!li(p)||!(o!=null&&o.valueUpdater))return;const O=o.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=ua(C,O),Pt(n,I,C))}return{pointerDown:p=>{p.button===0&&a.pointerDown(p,t)},pointerMove:p=>{a.pointerMove(p,t)},pointerUp:p=>{a.pointerUp(p,t)},keyDown:p=>{g(p)},keyUp:()=>{}}}class rA{constructor(){ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"_prevCellEdge",null);ge(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=kn(e,n);if(!r)return;const o=Xi(r,!0,.35);if(!o)return;this._prevCellEdge=o.edge;const a={event:e,edge:o.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const o=Xi(r,!0,.35);if(!o||this._prevCellEdge&&qe(o.edge,this._prevCellEdge))return;const a={event:e,edge:o.edge};this._prevCellEdge=o.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=kn(e,n);!r||Xi(r,!0,.35)}}function Qh(t,e,n){return{toolId:t,cells:e,value:n}}function oA(t,e){const n=ca(e,"cells"),r=No(e);return Qh(t,n,r)}function Fn(t,e,n,r){console.log("getEdgeToolInputHandler");const o=new rA,a={nRows:e.nRows,nCols:e.nCols};let s;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(h){const p=lt(rt),m=h.edge,C=iO(m);if(!C.every(w=>Kt(w,a)))return;let O=null;if(c===0&&(O=LD(p,n,C),c=O?2:1),O&&c===2){const w=O[0];Oo(w,O[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",N=Qh(n,C,w),R=Gt.uniqueId();Zr(R,N,n,!0)}}function _(h){const p=lt(gr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!li(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=ua(m,I),Pt(n,C,m))}return o.onDragStart=h=>{c=0,u(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:h=>{_(h)},keyUp:()=>{}}}function Ju(t,e,n,r=Et.CORNER_OR_EDGE){console.log("getSingleCellArrowToolInputHandler");const o=[Pe.N,Pe.NE,Pe.E,Pe.SE,Pe.S,Pe.SW,Pe.W,Pe.NW],a=new Vs(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let g=0;function h(C){const I=lt(rt),O=C.cell;if(console.log(C),!Kt(C.cell,s))return;C.event.altKey&&(g=2);const N=ed(I,n,O),R=Yu(C.direction);if(N){[u,c]=N,c.direction===R||g===2?Oo(u,c,n):(c={...c,direction:R},Pt(n,u,c));return}else g!==2&&(c=Xh(n,O,R),u=Gt.uniqueId(),Zr(u,c,n,!0))}function p(C){if(!c||!u||!yL(C))return;const O=(o.indexOf(c.direction)+1)%o.length;c={...c,direction:o[O]},Pt(n,u,c)}return a.onDragStart=C=>{g=0,h(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{p(C)},keyUp:()=>{}}}function iA(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function xr(t,e,n,r=Et.CORNER_OR_EDGE){console.log("getSingleCellMultiArrowToolInputHandler");const o=new Vs(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function g(p){const m=lt(rt),C=p.cell;if(console.log(p),!Kt(p.cell,a))return;p.event.altKey&&(_=2);const O=Yu(p.direction),w=ed(m,n,C);if(w){if(c=w[0],s=w[1],_===2)Eo(n,w[0]);else{const N=iA(s.directions,O);N.length?(s={...s,directions:N},Pt(n,c,s)):Eo(n,c)}return}else _!==2&&(s=Zh(n,C,O),c=Gt.uniqueId(),Xr(c,s))}return o.onDragStart=p=>{_=0,g(p)},{pointerDown:p=>{p.button===0&&o.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const aA=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.EDGE_TOOL],rr=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.EDGE_TOOL],_r=.15,Ao=.02;function sA(t,e=1){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function ci(t,e=3){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function lA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function xo(t,e,n){return Qr(t,e,n)}function cA(t,e){return t===void 0?"V":lA(e)?e.toUpperCase():t}function uA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function dA(t,e){return t===void 0?"<":uA(e)?e:t}const fA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,sA)})},toolId:f.RATIO,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:rr}},_A={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,ci)})},toolId:f.DIFFERENCE,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:rr}},gA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,ci)})},toolId:f.EDGE_SUM,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:rr}},hA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:cA,defaultValue:"V"})},toolId:f.XV,order:W.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:rr}},vA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:dA,defaultValue:"<"})},toolId:f.EDGE_INEQUALITY,order:W.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:rr}},pA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,ci)})},toolId:f.EDGE_PRODUCT,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:rr}},mA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,ci)})},toolId:f.EDGE_MODULO,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:rr}},CA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,ci)})},toolId:f.EDGE_FACTOR,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:rr}},EA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:f.XY_DIFFERENCES,order:W.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:rr}},IA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:f.YIN_YANG_WHITE_KROPKI,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:rr}},bA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:f.YIN_YANG_KROPKI,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:_r},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:rr}},wA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:f.UNKNOWN_REGION_BORDER,order:W.EDGE_TOOLS,shape:{type:B.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:aA}};function Jh(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function OA(t,e){const n=Ks(e),r=ev(e),o=No(e);return Jh(t,n,r,o)}function kt(t,e,n,r){console.log("getOutsideEdgeToolInputHandler");const o=(r==null?void 0:r.cornerOrEdge)??Et.CORNER_OR_EDGE,a=new Vs(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=lt(rt),C=p.cell,I=p.direction,O=Yu(I);if(Kt(C,s))return;const N=mh(C,O);if(!Kt(N,s))return;const F=SD(m,n,C,O);if(F){Eo(n,F);return}c=Jh(n,C,O,""),u=Gt.uniqueId(),Xr(u,c)}function g(p){const m=lt(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!li(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=ua(C,O),Pt(n,I,C))}return a.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&a.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{g(p)},keyUp:()=>{}}}const ui=[T.OUTSIDE_CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_CORNER_TOOL,T.OUTSIDE_DIRECTION_TOOL];function di(t,e=5){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function So(t,e,n){return Qr(t,e,n)}const LA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,di),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:si(),tags:[],categories:ui}},yA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,di),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_PRODUCT,order:W.OUTSIDE_TOOLS,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:si(),tags:[],categories:ui}},AA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,di),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_LOOK_AND_SAY,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:si(),tags:[],categories:ui}},xA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,di),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.X_OMIT_LITTLE_KILLER_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:si(),tags:[],categories:ui}},SA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,di),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,order:W.OUTSIDE_TOOLS,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:si(),tags:[],categories:ui}},NA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,di),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.NEGATORS_LITTLE_KILLER_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:si(),tags:[],categories:ui}},bn=[T.OUTSIDE_EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_EDGE_TOOL,T.OUTSIDE_DIRECTION_TOOL];function dn(t,e=5){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function wn(t,e,n){return Qr(t,e,n)}const DA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SANDWICH_SUM,order:W.OUTSIDE_TOOLS,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:En(),tags:[],categories:bn}},TA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.X_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:En(),tags:[],categories:bn}},RA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SHORTSIGHTED_X_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:En(),tags:[],categories:bn}},kA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SHIFTED_X_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:En(),tags:[],categories:bn}},GA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.BROKEN_X_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:En(),tags:[],categories:bn}},MA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.X_SUM_SKYSCRAPERS,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:En(),tags:[],categories:bn}},FA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.BATTLEFIELD,order:W.OUTSIDE_TOOLS,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:En(),tags:[],categories:bn}},$A={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SKYSCRAPERS,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:En(),tags:[],categories:bn}},UA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.X_INDEX,order:W.OUTSIDE_TOOLS,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:En(),tags:[],categories:bn}},HA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.RISING_STREAK,order:W.OUTSIDE_TOOLS,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:En(),tags:[],categories:bn}},PA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.ROW_OR_COLUMN_RANK,order:W.OUTSIDE_TOOLS,meta:{description:"Considering all rows and columns as numbers read from the direction of the clue and ranked from lowest (1) to highest (36), a clue represents where in the ranking that row/column lies.",usage:En(),tags:[],categories:bn}},BA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:W.OUTSIDE_TOOLS,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:En(),tags:[],categories:bn}},WA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.BOTH})},toolId:f.OUTSIDE_CONSECUTIVE_SUM,order:W.OUTSIDE_TOOLS,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:En(),tags:[],categories:bn}},YA={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.BOTH})},toolId:f.LOOPWICHES,order:W.OUTSIDE_TOOLS,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:En(),tags:[],categories:bn}},zA={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COSMETIC_CELL_SHAPE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},VA={getInputHandler(t,e,n){return Ju(t,e,n)},toolId:f.COSMETIC_CELL_ARROW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},jA={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.COSMETIC_CELL_MULTI_ARROW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},qA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,ci)})},toolId:f.COSMETIC_EDGE,order:W.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},KA={getInputHandler(t,e,n){return yo(t,e,n,{valueUpdater:(r,o)=>qs(r,o,js),defaultValue:""})},toolId:f.COSMETIC_CORNER,order:W.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},XA={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.COSMETIC_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},ZA={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},QA={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},JA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.COSMETIC_CAGE,order:W.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},ex={getInputHandler(t,e,n){return Ps(t,e,n)},toolId:f.COSMETIC_ARROW,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT]}},tx={getInputHandler(t,e,n){return kt(t,e,n,{valueUpdater:(r,o)=>So(r,o,dn),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE})},toolId:f.COSMETIC_OUTSIDE_DIRECTION,order:W.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_DIRECTION_TOOL]}},fi=[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT,T.DIAGONAL_CONSTRAINT],nx={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:f.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:f.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:f.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:f.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:f.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:f.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:f.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:f.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:f.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:f.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:fi}},_x={toolId:f.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:fi}},gx={toolId:f.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:fi}},hx={toolId:f.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:fi}},vx={toolId:f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:fi}},px={toolId:f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:fi}},mx={toolId:f.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Cx={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Ex={toolId:f.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ix={toolId:f.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},bx={toolId:f.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},wx={toolId:f.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ox={toolId:f.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Lx={toolId:f.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},yx={toolId:f.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ax={toolId:f.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},xx={toolId:f.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Sx={toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Nx={toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Dx={toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Tx={toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Rx={toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},kx={toolId:f.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:f.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:f.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:f.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:f.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:f.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:f.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:f.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:f.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:f.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:f.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:f.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},eS={toolId:f.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},tS={toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},nS={toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},rS={toolId:f.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},oS={toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},iS={toolId:f.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},aS={toolId:f.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Me=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LINE_TOOL],Sr=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.DOUBLE_ENDED_LINE_CONSTRAINT,T.LINE_TOOL],sS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers along a thermometer must increase from the bulb end.",usage:Ne(),tags:[],categories:Me}},lS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.SLOW_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s).",usage:Ne(),tags:[],categories:Me}},cS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ROW_CYCLE_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end.",usage:Ne(),tags:[],categories:Me}},uS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.PALINDROME,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Ne(),tags:[],categories:Me}},dS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Ne(),tags:[],categories:Me}},fS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLE_RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Ne(),tags:[],categories:Me}},_S={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.RENRENBANBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Ne(),tags:[],categories:Me}},gS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.N_CONSECUTIVE_RENBAN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Me}},hS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.NABNER_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Ne(),tags:[],categories:Me}},vS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.WHISPERS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Ne(),tags:[],categories:Me}},pS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:f.DUTCH_WHISPERS,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Ne(),tags:[],categories:Me}},mS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Ne(),tags:[],categories:Me}},CS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.RENBAN_OR_WHISPERS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Ne(),tags:[],categories:Me}},ES={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.RENBAN_OR_NABNER_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Ne(),tags:[],categories:Me}},IS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Ne(),tags:[],categories:Me}},bS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.INDEX_LINE,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Ne(),tags:[],categories:Me}},wS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.UNIQUE_VALUES_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Ne(),tags:[],categories:Me}},OS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.REGION_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Ne(),tags:[],categories:Me}},LS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:f.SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Ne(),tags:[],categories:Me}},yS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ARITHMETIC_SEQUENCE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Ne(),tags:[],categories:Me}},AS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.SAME_PARITY_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Ne(),tags:[],categories:Me}},xS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.MODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ne(),tags:[],categories:Me}},SS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.UNIMODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Ne(),tags:[],categories:Me}},NS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:f.MODULAR_OR_UNIMODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Ne(),tags:[],categories:Me}},DS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ODD_EVEN_OSCILLATOR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Ne(),tags:[],categories:Me}},TS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.HIGH_LOW_OSCILLATOR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Ne(),tags:[],categories:Me}},RS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ENTROPIC_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Ne(),tags:[],categories:Me}},kS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ENTROPIC_OR_MODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Ne(),tags:[],categories:Me}},GS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.INDEXING_COLUMN_IS_X_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Ne(),tags:[],categories:Me}},MS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.INDEXING_ROW_IS_X_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Ne(),tags:[],categories:Me}},FS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.REPEATED_DIGITS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Ne(),tags:[],categories:Me}},$S={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.SUPERFUZZY_ARROW,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Ne(),tags:[],categories:Me}},US={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.HEADLESS_ARROW,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Ne(),tags:[],categories:Me}},HS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.XV_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Ne(),tags:[],categories:Me}},PS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ROW_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Ne(),tags:[],categories:Me}},BS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:f.AT_LEAST_X_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Ne(),tags:[],categories:Me}},WS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Ne(),tags:[],categories:Me}},YS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ADJACENT_CELL_SUM_IS_PRIME_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Pairs of adjacent numbers on a light blue line must sum to a prime number.",usage:Ne(),tags:[],categories:Me}},zS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:f.PRODUCT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Ne(),tags:[],categories:Me}},VS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ADJACENT_MULTIPLES_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Ne(),tags:[],categories:Me}},jS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Ne(),tags:[],categories:Me}},qS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.LOOK_AND_SAY_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Ne(),tags:[],categories:Me}},KS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ZIPPER_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Ne(),tags:[],categories:Me}},XS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:f.SEGMENTED_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to 10. Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Ne(),tags:[],categories:Me}};f.THERMO_OR_AVERAGE_ARROW,W.LINE_TOOLS,B.THERMO_WITH_CIRCLE,Ne();const ZS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Ne(),tags:[],categories:Me}},QS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Ne(),tags:[],categories:Me}},JS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ne(),tags:[],categories:Me}},eN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.YIN_YANG_REGION_SUM_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Ne(),tags:[],categories:Me}},tN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.YIN_YANG_INDEXING_LINE_COLORING,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Ne(),tags:[],categories:Me}},nN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.GOLDILOCKS_ZONE_REGION_SUM,order:W.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Ne(),tags:[],categories:Me}},rN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.BETWEEN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Ne(),tags:[],categories:Sr}},oN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:f.LOCKOUT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Ne(),tags:[],categories:Sr}},iN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.TIGHTROPE_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Ne(),tags:[],categories:Sr}},aN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.PARITY_COUNT_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Ne(),tags:[],categories:Sr}},sN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLE_ARROW_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Ne(),categories:Sr}},lN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Ne(),tags:[],categories:Sr}},cN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.SPLIT_PEAS,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Ne(),tags:[],categories:Sr}},uN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.DOUBLERS_THERMOMETER,order:W.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Ne(),tags:[],categories:Me}},dN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLERS_BETWEEN_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Ne(),tags:[],categories:Sr}},fN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,order:W.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Ne(),tags:[],categories:Sr}},ft=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_SHAPE_TOOL],_i=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_COLOR_TOOL];function gi(t,e=3){return Lo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function hi(t,e,n){return Qr(t,e,n)}const _N={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ODD,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:ft}},gN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.EVEN,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:ft}},hN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.MINIMUM,order:W.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},vN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.MAXIMUM,order:W.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},pN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.PRIME_CELL,order:W.CELL_COLOR_TOOL,meta:{description:"Cell value is prime.",tags:[],categories:_i}},mN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ODD_MINESWEEPER,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ft}},CN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.EVEN_MINESWEEPER,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ft}},EN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ft}},IN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.WATCHTOWER,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ft}},bN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.NOT_WATCHTOWER,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ft}},wN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>hi(r,o,gi),defaultValue:""})},toolId:f.FARSIGHT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ft}},ON={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>hi(r,o,gi),defaultValue:"9"})},toolId:f.RADAR,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ft}},LN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ORTHOGONAL_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ft}},yN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.INDEXING_COLUMN,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:_i}},AN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.INDEXING_ROW,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:_i}},xN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.LOW_DIGIT,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:_i}},SN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.HIGH_DIGIT,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:_i}},NN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.FRIENDLY_CELL,order:W.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:_i}},DN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.DIAGONALLY_ADJACENT_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ft}},TN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ft}},RN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.SANDWICH_ROW_COL_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ft}},kN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COUNTING_CIRCLES,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ft}},GN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.UNIQUE_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ft}},MN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_MINESWEEPER,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ft}},FN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ft}},$N={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_SEEN_SHADED_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ft}},UN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ft}},HN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ft}},PN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ft}},BN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.SEEN_REGION_BORDERS_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ft}},WN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ft}},YN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.SASHIGANE_BEND_REGION_COUNT,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ft}},zN={getInputHandler(t,e,n){return Ju(t,e,n)},toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},VN={getInputHandler(t,e,n){return Ju(t,e,n)},toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},jN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>hi(r,o,gi),defaultValue:""})},toolId:f.SASHIGANE_REGION_SUM,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ft}},qN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.CELL_ON_THE_LOOP,order:W.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ft}},KN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.CELL_NOT_ON_THE_LOOP,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ft}},XN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ft}},ZN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>hi(r,o,gi),defaultValue:""})},toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ft}},QN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.CAVE_CLUE,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ft}},JN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>hi(r,o,gi),defaultValue:""})},toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ft}},eD={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>hi(r,o,gi),defaultValue:""})},toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ft}},eo=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_MULTIARROW_TOOL],vi={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},tD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:W.CELL_SHAPE_TOOL,shape:vi,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:eo}},nD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:W.CELL_SHAPE_TOOL,shape:vi,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:eo}},rD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.LOOP_CELL_COUNT_ARROWS,order:W.CELL_SHAPE_TOOL,shape:vi,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:eo}},oD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:W.CELL_SHAPE_TOOL,shape:vi,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:eo}},iD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.YIN_YANG_COUNT_SHADED_CELLS,order:W.CELL_SHAPE_TOOL,shape:vi,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:eo}},aD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:W.CELL_SHAPE_TOOL,shape:vi,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:eo}},sD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.COLD_ARROWS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:eo}},lD={getInputHandler(t,e,n){return xr(t,e,n)},toolId:f.HOT_ARROWS,order:W.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:eo}},cD={toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},uD={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const dD={toolId:f.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},fD={toolId:f.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const _D={toolId:f.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},Rt={[f.GIVEN]:yy,[f.DIGIT]:Ay,[f.REGIONS]:xy,[f.OUTSIDE]:Ty,[f.CORNER_PM]:Sy,[f.CENTER_PM]:Ny,[f.HIGHLIGHTS]:Dy,[f.FOG]:Ry,[f.PEN_TOOL]:ky,[f.SUDOKU_RULES_DO_NOT_APPLY]:nx,[f.HEXED_SUDOKU]:rx,[f.FILLOMINO]:ox,[f.ANTIKNIGHT]:ix,[f.ANTIKING]:sx,[f.ANTI_GIRAFFE]:ax,[f.DISJOINT_GROUPS]:lx,[f.TANGO]:cx,[f.NONCONSECUTIVE]:ux,[f.NONRATIO]:dx,[f.GLOBAL_INDEXING_COLUMN]:mx,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:Cx,[f.NEGATIVE_DIAGONAL]:fx,[f.POSITIVE_DIAGONAL]:_x,[f.NEGATIVE_ANTIDIAGONAL]:gx,[f.POSITIVE_ANTIDIAGONAL]:hx,[f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:vx,[f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:px,[f.ALL_RATIOS_GIVEN]:Ex,[f.ALL_DIFFERENCES_GIVEN]:Ix,[f.ALL_X_GIVEN]:bx,[f.ALL_V_GIVEN]:wx,[f.ALL_XV_GIVEN]:Ox,[f.ALL_RADARS_GIVEN]:Lx,[f.ALL_XY_DIFFERENCES_GIVEN]:yx,[f.ALL_INDEXING_COLUMN_GIVEN]:Ax,[f.ALL_INDEXING_ROW_GIVEN]:xx,[f.ALL_YIN_YANG_KROPKI_GIVEN]:Sx,[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:Nx,[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Tx,[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Rx,[f.CAVE_CELLS_ARE_ODD]:Qx,[f.CAVE_WALLS_ARE_EVEN]:Zx,[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:Kx,[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:Xx,[f.DOUBLERS]:dD,[f.NEGATORS]:fD,[f.NEXUS]:_D,[f.UNKNOWN_REGIONS]:kx,[f.YIN_YANG]:Gx,[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Mx,[f.NURIMISAKI]:Fx,[f.TWO_CONTIGUOUS_REGIONS]:$x,[f.SASHIGANE]:Ux,[f.GOLDILOCKS_ZONE]:Hx,[f.CELL_CENTER_LOOP_NO_TOUCHING]:Px,[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Bx,[f.NOT_LOOP_SIZED_REGIONS]:zx,[f.MODULAR_LOOP]:Vx,[f.CAVE]:jx,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:qx,[f.NURIMISAKI_PATH_GERMAN_WHISPERS]:Dx,[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Wx,[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:Yx,[f.GALAXIES]:eS,[f.TWO_SYMMETRIC_GALAXIES]:rS,[f.EVERY_CELL_BELONGS_TO_A_GALAXY]:tS,[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:nS,[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:oS,[f.PENTOMINO_TILLING]:iS,[f.TILLING_NO_EMPTY_CELLS]:aS,[f.ODD]:_N,[f.EVEN]:gN,[f.MINIMUM]:hN,[f.MAXIMUM]:vN,[f.PRIME_CELL]:pN,[f.ODD_MINESWEEPER]:mN,[f.EVEN_MINESWEEPER]:CN,[f.WATCHTOWER]:IN,[f.NOT_WATCHTOWER]:bN,[f.FARSIGHT]:wN,[f.RADAR]:ON,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:EN,[f.ORTHOGONAL_SUM]:LN,[f.DIAGONALLY_ADJACENT_SUM]:DN,[f.INDEXING_COLUMN]:yN,[f.INDEXING_ROW]:AN,[f.LOW_DIGIT]:xN,[f.HIGH_DIGIT]:SN,[f.FRIENDLY_CELL]:NN,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:TN,[f.SANDWICH_ROW_COL_COUNT]:RN,[f.COUNTING_CIRCLES]:kN,[f.UNIQUE_CELLS]:GN,[f.YIN_YANG_MINESWEEPER]:MN,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:FN,[f.YIN_YANG_SEEN_SHADED_CELLS]:$N,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:UN,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:HN,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:PN,[f.SEEN_REGION_BORDERS_COUNT]:BN,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:WN,[f.SASHIGANE_BEND_REGION_COUNT]:YN,[f.SASHIGANE_REGION_SUM]:jN,[f.CELL_ON_THE_LOOP]:qN,[f.CELL_NOT_ON_THE_LOOP]:KN,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:XN,[f.CAVE_CLUE]:QN,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:ZN,[f.YIN_YANG_FILLOMINO_PARITY]:Jx,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:JN,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:eD,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:zN,[f.THERMO_SIGHTLINE_LOOP_ARROW]:VN,[f.HOT_ARROWS]:lD,[f.COLD_ARROWS]:sD,[f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:aD,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:oD,[f.YIN_YANG_COUNT_SHADED_CELLS]:iD,[f.LOOP_CELL_COUNT_ARROWS]:rD,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:nD,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:tD,[f.DIFFERENCE]:_A,[f.RATIO]:fA,[f.XV]:hA,[f.EDGE_INEQUALITY]:vA,[f.EDGE_SUM]:gA,[f.EDGE_PRODUCT]:pA,[f.EDGE_MODULO]:mA,[f.EDGE_FACTOR]:CA,[f.XY_DIFFERENCES]:EA,[f.YIN_YANG_WHITE_KROPKI]:IA,[f.YIN_YANG_KROPKI]:bA,[f.UNKNOWN_REGION_BORDER]:wA,[f.QUADRUPLE]:jy,[f.CORNER_SUM]:qy,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Ky,[f.CORNER_EVEN_COUNT]:Xy,[f.PRODUCT_SQUARE]:Zy,[f.THERMOMETER]:sS,[f.SLOW_THERMOMETER]:lS,[f.ROW_CYCLE_THERMOMETER]:cS,[f.PALINDROME]:uS,[f.RENBAN_LINE]:dS,[f.DOUBLE_RENBAN_LINE]:fS,[f.RENRENBANBAN_LINE]:_S,[f.N_CONSECUTIVE_RENBAN_LINE]:gS,[f.NABNER_LINE]:hS,[f.WHISPERS_LINE]:vS,[f.DUTCH_WHISPERS]:pS,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:mS,[f.RENBAN_OR_WHISPERS_LINE]:CS,[f.RENBAN_OR_NABNER_LINE]:ES,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:IS,[f.INDEX_LINE]:bS,[f.UNIQUE_VALUES_LINE]:wS,[f.REPEATED_DIGITS_LINE]:FS,[f.REGION_SUM_LINE]:OS,[f.SUM_LINE]:LS,[f.XV_LINE]:HS,[f.ROW_SUM_LINE]:PS,[f.AT_LEAST_X_LINE]:BS,[f.SUPERFUZZY_ARROW]:$S,[f.HEADLESS_ARROW]:US,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:WS,[f.ADJACENT_CELL_SUM_IS_PRIME_LINE]:YS,[f.PRODUCT_LINE]:zS,[f.ADJACENT_MULTIPLES_LINE]:VS,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:jS,[f.LOOK_AND_SAY_LINE]:qS,[f.ARITHMETIC_SEQUENCE_LINE]:yS,[f.ZIPPER_LINE]:KS,[f.SEGMENTED_SUM_LINE]:XS,[f.SAME_PARITY_LINE]:AS,[f.MODULAR_LINE]:xS,[f.UNIMODULAR_LINE]:SS,[f.MODULAR_OR_UNIMODULAR_LINE]:NS,[f.ODD_EVEN_OSCILLATOR_LINE]:DS,[f.HIGH_LOW_OSCILLATOR_LINE]:TS,[f.ENTROPIC_LINE]:RS,[f.ENTROPIC_OR_MODULAR_LINE]:kS,[f.INDEXING_COLUMN_IS_X_LINE]:GS,[f.INDEXING_ROW_IS_X_LINE]:MS,[f.YIN_YANG_INDEXING_LINE_COLORING]:tN,[f.YIN_YANG_SHADED_WHISPERS_LINE]:ZS,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:QS,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:JS,[f.YIN_YANG_REGION_SUM_LINE]:eN,[f.GOLDILOCKS_ZONE_REGION_SUM]:nN,[f.BETWEEN_LINE]:rN,[f.LOCKOUT_LINE]:oN,[f.PARITY_COUNT_LINE]:aN,[f.TIGHTROPE_LINE]:iN,[f.DOUBLE_ARROW_LINE]:sN,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:lN,[f.SPLIT_PEAS]:cN,[f.DOUBLERS_THERMOMETER]:uN,[f.DOUBLERS_BETWEEN_LINE]:dN,[f.DOUBLERS_DOUBLE_ARROW_LINE]:fN,[f.ARROW]:EL,[f.AVERAGE_ARROW]:IL,[f.KILLER_CAGE]:UL,[f.UNIQUE_DIGITS_CAGE]:HL,[f.INVERTED_KILLER_CAGE]:PL,[f.SUM_CAGE]:BL,[f.SUM_CAGE_LOOK_AND_SAY]:WL,[f.PARITY_BALANCE_CAGE]:YL,[f.DIVISIBLE_KILLER_CAGE]:zL,[f.SPOTLIGHT_CAGE]:VL,[f.PUTTERIA_CAGE]:jL,[f.MULTISET_CAGE]:qL,[f.VAULTED_CAGE]:KL,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:XL,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:ZL,[f.DOUBLERS_KILLER_CAGE]:QL,[f.NEGATORS_KILLER_CAGE]:JL,[f.CLONE_REGION]:Wy,[f.SANDWICH_SUM]:DA,[f.X_SUM]:TA,[f.SHORTSIGHTED_X_SUM]:RA,[f.SHIFTED_X_SUM]:kA,[f.BROKEN_X_SUM]:GA,[f.X_SUM_SKYSCRAPERS]:MA,[f.BATTLEFIELD]:FA,[f.SKYSCRAPERS]:$A,[f.X_INDEX]:UA,[f.RISING_STREAK]:HA,[f.ROW_OR_COLUMN_RANK]:PA,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:BA,[f.OUTSIDE_CONSECUTIVE_SUM]:WA,[f.LOOPWICHES]:YA,[f.LITTLE_KILLER_SUM]:LA,[f.LITTLE_KILLER_PRODUCT]:yA,[f.LITTLE_KILLER_LOOK_AND_SAY]:AA,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:SA,[f.X_OMIT_LITTLE_KILLER_SUM]:xA,[f.NEGATORS_LITTLE_KILLER_SUM]:NA,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER]:My,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Fy,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:cD,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:uD,[f.COSMETIC_CELL_SHAPE]:zA,[f.COSMETIC_CELL_ARROW]:VA,[f.COSMETIC_CELL_MULTI_ARROW]:jA,[f.COSMETIC_EDGE]:qA,[f.COSMETIC_CORNER]:KA,[f.COSMETIC_LINE]:XA,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:ZA,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:QA,[f.COSMETIC_ARROW]:ex,[f.COSMETIC_CAGE]:JA,[f.COSMETIC_OUTSIDE_DIRECTION]:tx};function Ks(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return zu(e)}function ca(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return zu(o)})}function gD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return zu(a)})})}function No(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function ev(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return ph(e)}function hD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return ph(r)})}function vD(t,e){const n=t.shape;return n===void 0?void 0:{...Mn(e,Rt),...n}}function tv(t,e){return{toolId:t,cells:e,lines:[]}}function pD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),ms(n),{...t,cells:n};const r=n.some(a=>qe(a,e)),o=n.some(a=>Fs(a,e));return n.length===1&&!r&&o?(n.push(e),ms(n),{...t,cells:n}):t}function mD(t,e){const n=t.cells.some(u=>qe(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return su(t,e);const o=t.lines[r-1],a=o.length;if(a===0&&!n)return t;if(a===0&&n)return su(t,e);const s=qh(o,e,!1);return(o.length===0?!0:Fs(o[a-1],e))?s>=0?(o.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),o]}):n?t:(o.push(e),{...t,lines:[...t.lines.slice(0,r-1),o]}):t}function su(t,e){return t.cells.some(r=>qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function CD(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function ED(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function ID(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function bD(t,e){const n=ca(e,"cells"),r=gD(e),o=tv(t,n);return o.lines=r,o}function wD(t,e=""){return{toolId:t,value:e}}function OD(t,e){const n=No(e);return wD(t,n)}function ua(t,e){return{...t,value:e}}class da extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const o=this.get(e);o&&(o[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o[n]&&(o[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const a of Object.values(r))o.push(RD(a));o.length&&(e[n]=o)}return e}static fromJson(e){const n=new da;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=hh(r);if(a===void 0||!Object.keys(Rt).includes(a))continue;const s=o;for(const c of s){let u=null;if(vh(a,Ms)?u=eA(a,c):Fu(a)?u=tA(a,c):$u(a)?u=nA(a,c):Uu(a)?u=oA(a,c):_h(a)?u=Yy(a,c):Hu(a)?u=Qy(a,c):Pu(a)?u=bD(a,c):Bu(a)?u=$L(a,c):ta(a)?u=OA(a,c):jw(a)&&(u=OD(a,c)),u!==null){n.addToDict(a);const _=Gt.uniqueId(),g=vD(c,a);u.shape=g,n.addConstraint(a,_,u)}}}return n}}function ed(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(qe(a.cell,n))return[s,a]}return null}function LD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(n.every(c=>a.cells.some(u=>qe(c,u))))return o}return null}function yD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=a.cells[a.cells.length-1];if(qe(n,s))return o}return null}function Ag(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n)))return[o[0],a]}return null}function AD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].cells.some(c=>qe(c,n)))return o;return null}function xg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n)))return[o[0],a]}return null}function xD(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((_,g)=>qe(_,n)&&g>0));if(c>=0)return{id:o,arrow:s,matchLineIdx:c}}return null}function SD(t,e,n,r){const o=t.get(e);if(!o)return null;for(const a of Object.entries(o)){const s=a[1],c=a[0];if(qe(n,s.cell)&&r===s.direction)return c}return null}function ND(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(qe(n,a.cell))return s}return null}function DD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n))||a.cells2.some(c=>qe(c,n)))return[o[0],a]}return null}function TD(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n)){const a=o[1];r.add(a.value)}return r}function RD(t){const e={};if("cells"in t){const n=t.cells.map(r=>ls(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ls(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>ls(o)));e.lines=n}if("cell"in t){const n=ls(t.cell);e.cell=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=Mn(t.toolId,Rt),r=cO(t.shape,n);r&&(e.shape=r)}return e}const Sg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function kD(t){return t in Sg?Sg[t]:null}function nv(t,e,n){if(n===null)return null;const r=kD(n);if(r===null)return null;const[o,a]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/a)}function Wc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class GD{constructor(e,n){ge(this,"r");ge(this,"c");ge(this,"outside",!1);ge(this,"value",null);ge(this,"given",!1);ge(this,"region",null);ge(this,"centerMarks",[]);ge(this,"cornerMarks",[]);ge(this,"highlights",[]);ge(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Wc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Wc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Wc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==nv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class fa{constructor(e,n){ge(this,"nCols");ge(this,"nRows");ge(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const a=[];for(let s=0;s<n;s++){const c=new GD(o,s);if(r){const u=nv(o,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[a,s]=[e.r+o[0],e.c+o[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Ph(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),a=o.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:a,c:s}=Us(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];o.push(_),[c,u]=[c+a,u+s]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new fa(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=o.getCell(a,s);u&&Object.assign(u,c)}return o}}function MD(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols,o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const a=r.toJSON();Object.keys(a).length&&(o.bool_constraints=a);const s=n.toJSON();return Object.keys(s).length&&(o.local_constraints=s),o}function FD(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,o=t.valid_digits,a=t.grid,s=fa.fromJSON(e,n,a),c=t.solution,u=t.local_constraints,_=da.fromJson(u),g=t.bool_constraints,h=ei.fromJson(g);return{puzzleMeta:r,solution:c,grid:s,valid_digits:o,localConstraints:_,globalConstraints:h}}var pi=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(pi||{});const ra=Ft(),Xs=Ft(pi.SETTING),lu=Ft(!1),Xt=Ft(f.DIGIT),rv=Ft(f.DIGIT),td=Ft(void 0),sn=Ft(new fa(9,9)),an=Ft(lt(sn).getAllCells()),Nr=Ft({}),Dr=Ft(new ei),rt=Ft(new da),gr=Ft(null),ov=Ft(void 0),Zs=Ft(void 0);function $D(t){Nr.update(()=>t)}function mi(t){gr.update(()=>t)}function nd(t){ov.update(()=>t)}function yr(t){lt(Xt)!==t&&(Xt.update(()=>t),mi(null))}function UD(){const t=lt(rv);t&&yr(t)}function cu(t){rv.update(()=>t)}function HD(t){lt(Xt)===t&&yr(f.DIGIT)}function PD(t){rt.update(e=>(e.removeFromDict(t),e)),nd(void 0)}function Pt(t,e,n){rt.update(r=>(r.updateConstraint(t,e,n),r)),mi({id:e,constraint:n})}function Yc(t){const e=lt(gr);if(t=t?{...t}:void 0,nd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Pt(r,e.id,n)}function BD(t,e){const r=lt(rt).get(e);if(!r)return;const o=r[t];o&&mi({id:t,constraint:o})}function WD(t,e){const n=new fa(t,e);sn.update(()=>n),td.update(()=>{}),rt.update(()=>new da),Dr.update(()=>new ei),Nr.update(()=>({})),rd(void 0),an.update(()=>n.getAllCells())}function YD(t){sn.update(()=>t.grid),Nr.update(()=>t.puzzleMeta),rd(t.solution),td.update(()=>t.valid_digits),rt.update(()=>t.localConstraints),Dr.update(()=>t.globalConstraints),an.update(()=>t.grid.getAllCells())}function iv(){const t=lt(sn);t.resetValues(),sn.update(()=>t),an.update(()=>t.getAllCells()),jr(Qu())}function Ls(){lL(),jr(Qu()),yr(f.DIGIT);const t=ty();Xo(t),nd(void 0),mi(null)}const av=ln([Wt,Xt,Xs],([t,e,n])=>{const r=t.hideFog,o=e;return![f.FOG,f.REGIONS].includes(o)&&!r&&n===pi.SETTING}),_a=ln([sn,Nr,Dr,rt,Zs,td],([t,e,n,r,o,a])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function rd(t){Zs.update(()=>t)}var zD=ne('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function VD(t,e){ee(e,!1);const n=Ve(),r=()=>he(ai,"$commandHistoryStore",n),o=()=>he(lu,"$selectOnStore",n),a=D(),s=D();function c(){kh()}function u(){Gh()}function _(){console.log("check")}function g(){aa(lu,!o())}G(()=>r(),()=>{x(a,r()._undoStack.length===0)}),G(()=>r(),()=>{x(s,r()._redoStack.length===0)}),ve(),de();var h=zD(),p=q(h),m=q(p);Bw(m),P(p);var C=H(p,2),I=q(C);$w(I),P(C);var O=H(C,2);O.disabled=!0;var w=q(O);Mw(w),P(O);var N=H(O,2),R=q(N);Hw(R),P(N),P(h),Z(()=>{p.disabled=v(a),C.disabled=v(s),A(N,"aria-checked",o()),Lt(N,"active",o())}),Re("click",p,c),Re("click",C,u),Re("click",O,_),Re("click",N,g),S(t,h),te()}const sv=ln([ra,sn,Xt],([t,e,n])=>{const r=Lr(n,Rt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var jD=ne('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),qD=ne('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),KD=ne('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),XD=ne('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function ZD(t,e){ee(e,!1);const n=Ve(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(Os,"$penColorStore",n),a=()=>he(sv,"$InputHandlerStore",n),s=D(),c=D(),u=[];let _=$(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let p=D(!1);function m(V){return V?h:g}function C(V){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(V)}function I(V){const K=V.currentTarget;if(!K)return;const se=K.getAttribute("aria-checked");x(p,se!=="true")}G(()=>r(),()=>{x(s,r().penToolActive)}),G(()=>r(),()=>{x(c,r().letterToolActive)}),ve(),de();var O=XD(),w=q(O);{var N=V=>{var K=Le(),se=le(K);We(se,1,()=>g,gt,(_e,ie)=>{var ce=jD(),be=q(ce);qt(be);var Ie;mo(2),P(ce),Z(()=>{A(ce,"data-value",v(ie)),Lt(ce,"active",o()===v(ie)),Ie!==(Ie=v(ie))&&(be.value=(be.__value=v(ie))==null?"":v(ie))}),Gs(u,[],be,()=>(v(ie),o()),Ce=>aa(Os,Ce)),S(_e,ce)}),S(V,K)},R=V=>{var K=Le(),se=le(K);We(se,1,()=>m(v(p)),gt,(_e,ie)=>{var ce=qD(),be=q(ce),Ie=q(be,!0);P(be),mo(2),P(ce),Z(()=>{pw(ce,v(ie)),nt(Ie,v(ie))}),Re("click",ce,function(...Ce){var He;(He=a()&&a().padClick)==null||He.apply(this,Ce)}),S(_e,ce)}),S(V,K)};fe(w,V=>{_()===f.PEN_TOOL&&v(s)?V(N):V(R,!1)})}var F=H(w,2);{var M=V=>{var K=KD();Z(()=>{A(K,"aria-checked",v(p)),Lt(K,"letter-checked",v(p)),Lt(K,"num-checked",!v(p))}),Re("click",K,I),S(V,K)};fe(F,V=>{v(c)&&C(_())&&V(M)})}var z=H(F,2);P(O),Z(()=>{Lt(O,"digit",_()===f.DIGIT),Lt(O,"center",_()===f.CENTER_PM),Lt(O,"corner",_()===f.CORNER_PM),Lt(O,"color",_()===f.HIGHLIGHTS),Lt(O,"pen",_()===f.PEN_TOOL),Lt(z,"letter-tool",v(c))}),Re("click",z,function(...V){var K;(K=a()&&a().padClick)==null||K.apply(this,V)}),S(t,O),te()}var QD=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function JD(t){var e=QD();S(t,e)}var eT=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function tT(t){var e=eT();S(t,e)}var nT=ne('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Bi(t,e){ee(e,!1);const n=[];let r=$(e,"selectedTool",12),o=$(e,"value",8),a=$(e,"title",8,void 0);function s(){cu(o())}de();var c=nT(),u=q(c);qt(u);var _,g=H(u,2);dt(g,e,"default",{}),P(c),Z(()=>{A(c,"title",a()),Lt(c,"active",o()===r()),_!==(_=o())&&(u.value=(u.__value=o())==null?"":o())}),Gs(n,[],u,()=>(o(),r()),r),Re("change",u,s),S(t,c),te()}var rT=ne('<span aria-hidden="true">1</span>'),oT=ne('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),iT=ne('<span aria-hidden="true" style="font-size: 50%">123</span>'),aT=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),sT=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),lT=ne('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function cT(t,e){ee(e,!1);const n=Ve(),r=()=>he(Wt,"$settingsStore",n);let o=$(e,"selectedTool",12);de();var a=lT(),s=q(a);Bi(s,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=rT();S(p,C)},$$slots:{default:!0},$$legacy:!0});var c=H(s,2);Bi(c,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=oT();S(p,C)},$$slots:{default:!0},$$legacy:!0});var u=H(c,2);Bi(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=iT();S(p,C)},$$slots:{default:!0},$$legacy:!0});var _=H(u,2);Bi(_,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=aT(),I=q(C);JD(I),P(C),S(p,C)},$$slots:{default:!0},$$legacy:!0});var g=H(_,2);{var h=p=>{Bi(p,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,C)=>{var I=sT(),O=q(I);tT(O),P(I),S(m,I)},$$slots:{default:!0},$$legacy:!0})};fe(g,p=>{r().penToolActive&&p(h)})}P(a),S(t,a),te()}var uT=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function dT(t){var e=uT();S(t,e)}var fT=ne('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function ga(t,e){let n=$(e,"title",8,void 0),r=$(e,"clickCb",8,void 0);var o=fT(),a=q(o),s=q(a);dt(s,e,"default",{}),P(a),P(o),Z(()=>A(o,"title",n())),Re("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),S(t,o)}var _T=ne('<div class="buttons-container svelte-kc00rw"><!></div>');function Qs(t,e){var n=_T(),r=q(n);dt(r,e,"default",{}),P(n),S(t,n)}var gT=ne('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function hT(t,e){let n=$(e,"title",8),r=$(e,"closeCb",8);var o=gT(),a=q(o),s=q(a,!0);P(a);var c=H(a,2);P(o),Z(()=>nt(s,n())),Re("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),S(t,o)}var vT=ne('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Tr(t,e){ee(e,!1);let n=$(e,"showModal",12),r=$(e,"title",8),o=D();function a(){n(!1),v(o).close()}G(()=>(v(o),J(n())),()=>{v(o)&&n()&&v(o).showModal()}),G(()=>(v(o),J(n())),()=>{v(o)&&!n()&&v(o).close()}),ve();var s=vT(),c=q(s),u=q(c);hT(u,{get title(){return r()},closeCb:a});var _=H(u,2),g=q(_),h=q(g);dt(h,e,"default",{}),P(g),P(_),P(c),P(s),Co(s,p=>x(o,p),()=>v(o)),Re("click",c,Xn(function(p){bw.call(this,e,p)})),Re("close",s,()=>{n(!1)}),Re("click",s,Iw(Xn(()=>v(o).close()))),S(t,s),te()}var pT=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),mT=ne('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function CT(t,e){ee(e,!1);let n=$(e,"showModal",12,!1);function r(){n(!1)}function o(){iv(),Ls(),n(!1)}de(),Tr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=mT(),u=H(q(c),2);Qs(u,{children:(_,g)=>{var h=pT(),p=le(h),m=H(p,2);Re("click",p,o),Re("click",m,r),S(_,h)},$$slots:{default:!0}}),P(c),S(a,c)},$$slots:{default:!0},$$legacy:!0}),te()}var ET=ne("<!> <!>",1);function IT(t){let e=D(!1);function n(){x(e,!0)}var r=ET(),o=le(r);ga(o,{title:"Restart",clickCb:n,children:(s,c)=>{dT(s)},$$slots:{default:!0}});var a=H(o,2);CT(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var bT=ne('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function fs(t,e){let n=$(e,"title",8);var r=bT(),o=q(r),a=q(o,!0);P(o);var s=H(o,2);dt(s,e,"default",{}),P(r),Z(()=>nt(a,n())),S(t,r)}var wT=ne('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function rn(t,e){let n=$(e,"description",8);var r=wT(),o=q(r),a=q(o,!0);P(o);var s=H(o,2),c=q(s);dt(c,e,"default",{}),P(s),P(r),Z(()=>nt(a,n())),S(t,r)}var OT=ne('<div class="shortcut svelte-1cgt5u5"> </div>');function Jt(t,e){let n=$(e,"shortcut",8);var r=OT(),o=q(r,!0);P(r),Z(()=>nt(o,n())),S(t,r)}var LT=ne("<!> <!> <!> <!>",1),yT=ne("<!> or <!>",1),AT=ne("<!> <!> <!> <!> <!> <!> <!> <!>",1),xT=ne("<!> <!>",1),ST=ne('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!></div>');function NT(t,e){let n=$(e,"showModal",12,!1);Tr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var a=ST(),s=q(a);fs(s,{title:"General",children:(g,h)=>{rn(g,{description:"Toggle Darkmode",children:(p,m)=>{Jt(p,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var c=H(s,2);fs(c,{title:"Selection",children:(g,h)=>{var p=LT(),m=le(p);rn(m,{description:"Select cells",children:(w,N)=>{Jt(w,{shortcut:"click/drag"})},$$slots:{default:!0}});var C=H(m,2);rn(C,{description:"Add to current selection",children:(w,N)=>{Jt(w,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=H(C,2);rn(I,{description:"Remove from current selection",children:(w,N)=>{Jt(w,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var O=H(I,2);rn(O,{description:"Add or remove from current selection",children:(w,N)=>{Jt(w,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),S(g,p)},$$slots:{default:!0}});var u=H(c,2);fs(u,{title:"Change Tool",children:(g,h)=>{var p=AT(),m=le(p);rn(m,{description:"Cycle Tool",children:(M,z)=>{Jt(M,{shortcut:"Space"})},$$slots:{default:!0}});var C=H(m,2);rn(C,{description:"Change to Digit Tool",children:(M,z)=>{Jt(M,{shortcut:"Z"})},$$slots:{default:!0}});var I=H(C,2);rn(I,{description:"Change to Corner Pencilmark Tool",children:(M,z)=>{Jt(M,{shortcut:"X"})},$$slots:{default:!0}});var O=H(I,2);rn(O,{description:"Change to Center Pencilmark Tool",children:(M,z)=>{Jt(M,{shortcut:"C"})},$$slots:{default:!0}});var w=H(O,2);rn(w,{description:"Change to Highlights Tool",children:(M,z)=>{Jt(M,{shortcut:"V"})},$$slots:{default:!0}});var N=H(w,2);rn(N,{description:"Quickshift To Corner Pencilmark Tool",children:(M,z)=>{Jt(M,{shortcut:"Shift"})},$$slots:{default:!0}});var R=H(N,2);rn(R,{description:"Quickshift To Center Pencilmark Tool",children:(M,z)=>{Jt(M,{shortcut:"Ctrl"})},$$slots:{default:!0}});var F=H(R,2);rn(F,{description:"Quickshift To Highlights Tool",children:(M,z)=>{var V=yT(),K=le(V);Jt(K,{shortcut:"Shift + Ctrl"});var se=H(K,2);Jt(se,{shortcut:"Alt"}),S(M,V)},$$slots:{default:!0}}),S(g,p)},$$slots:{default:!0}});var _=H(u,2);fs(_,{title:"Undo/Redo",children:(g,h)=>{var p=xT(),m=le(p);rn(m,{description:"Undo",children:(I,O)=>{Jt(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var C=H(m,2);rn(C,{description:"Redo",children:(I,O)=>{Jt(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),S(g,p)},$$slots:{default:!0}}),P(a),S(r,a)},$$slots:{default:!0},$$legacy:!0})}var DT=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function TT(t){var e=DT();S(t,e)}var RT=ne("<!> <!>",1);function kT(t){let e=D(!1);function n(){x(e,!0)}var r=RT(),o=le(r);ga(o,{title:"Info",clickCb:n,children:(s,c)=>{TT(s)},$$slots:{default:!0}});var a=H(o,2);NT(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var GT=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function MT(t){var e=GT();S(t,e)}var FT=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function $T(t){var e=FT();S(t,e)}function UT(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function a(){n()?o():r(),x(e,!v(e))}ga(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=Le(),_=le(u);{var g=p=>{$T(p)},h=p=>{MT(p)};fe(_,p=>{v(e)?p(g):p(h,!1)})}S(s,u)},$$slots:{default:!0}})}function lv(t,e){ee(e,!1);let n=$(e,"token",8),r=$(e,"renderers",8),o=$(e,"options",8);de();var a=Le(),s=le(a);{var c=u=>{var _=Le(),g=le(_);Zg(g,()=>r()[n().type],(h,p)=>{p(h,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,C)=>{var I=Le(),O=le(I);{var w=R=>{ys(R,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},N=R=>{var F=Rb();Z(()=>nt(F,n().raw)),S(R,F)};fe(O,R=>{"tokens"in n()&&n().tokens?R(w):R(N,!1)})}S(m,I)},$$slots:{default:!0}})}),S(u,_)};fe(s,u=>{r()[n().type]&&u(c)})}S(t,a),te()}function ys(t,e){let n=$(e,"tokens",8),r=$(e,"renderers",8),o=$(e,"options",8);var a=Le(),s=le(a);{var c=u=>{var _=Le(),g=le(_);We(g,1,n,gt,(h,p)=>{lv(h,{get token(){return v(p)},get renderers(){return r()},get options(){return o()}})}),S(u,_)};fe(s,u=>{n()&&u(c)})}S(t,a)}function cv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function uv(t){return t.startsWith("/")||t.startsWith("#")}function HT(t,e){return e.slug(t).replace(/--+/g,"-")}function PT(t,e){ee(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const o=void 0;let a=D();G(()=>(J(n()),J(r())),()=>{x(a,HT(n().text,r().slugger))}),ve(),de();var s=Le(),c=le(s);return th(c,()=>`h${n().depth}`,!1,(u,_)=>{let g;Z(()=>g=oh(u,g,{id:v(a)},void 0,u.namespaceURI===Cu,u.nodeName.includes("-")));var h=Le(),p=le(h);dt(p,e,"default",{}),S(_,h)}),S(t,s),Ze(e,"renderers",o),te({renderers:o})}var BT=ne("<blockquote><!></blockquote>");function WT(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=BT(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}function YT(t,e){ee(e,!1);let n=$(e,"token",8),r=$(e,"options",8),o=$(e,"renderers",8),a=D();G(()=>J(n()),()=>{x(a,n().ordered?"ol":"ul")}),ve(),de();var s=Le(),c=le(s);th(c,()=>v(a),!1,(u,_)=>{let g;Z(()=>g=oh(u,g,{start:n().start||1},void 0,u.namespaceURI===Cu,u.nodeName.includes("-")));var h=Le(),p=le(h);We(p,1,()=>n().items,gt,(m,C)=>{var I=Xe(()=>({...v(C)}));lv(m,{get token(){return v(I)},get options(){return r()},get renderers(){return o()}})}),S(_,h)}),S(t,s),te()}var zT=ne("<li><!></li>");function VT(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=zT(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var jT=ne("<br>");function qT(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=jT();return S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var KT=ne("<pre><code> </code></pre>");function XT(t,e){ee(e,!1);let n=$(e,"token",8);const r=void 0,o=void 0;de();var a=KT(),s=q(a),c=q(s,!0);return P(s),P(a),Z(()=>{Cw(s,`lang-${n().lang}`),nt(c,n().text)}),S(t,a),Ze(e,"options",r),Ze(e,"renderers",o),te({options:r,renderers:o})}var ZT=ne("<code> </code>");function QT(t,e){ee(e,!1);let n=$(e,"token",8);const r=void 0,o=void 0;de();var a=ZT(),s=q(a,!0);return Z(()=>nt(s,n().raw.slice(1,n().raw.length-1))),P(a),S(t,a),Ze(e,"options",r),Ze(e,"renderers",o),te({options:r,renderers:o})}var JT=ne('<th scope="col"><!></th>'),e2=ne("<td><!></td>"),t2=ne("<tr></tr>"),n2=ne("<table><thead><tr></tr></thead><tbody></tbody></table>");function r2(t,e){ee(e,!1);let n=$(e,"token",8),r=$(e,"options",8),o=$(e,"renderers",8);de();var a=n2(),s=q(a),c=q(s);We(c,5,()=>n().header,gt,(_,g)=>{var h=JT(),p=q(h);ys(p,{get tokens(){return v(g).tokens},get options(){return r()},get renderers(){return o()}}),P(h),S(_,h)}),P(c),P(s);var u=H(s);We(u,5,()=>n().rows,gt,(_,g)=>{var h=t2();We(h,5,()=>v(g),gt,(p,m)=>{var C=e2(),I=q(C);ys(I,{get tokens(){return v(m).tokens},get options(){return r()},get renderers(){return o()}}),P(C),S(p,C)}),P(h),S(_,h)}),P(u),P(a),S(t,a),te()}function o2(t,e){ee(e,!1);let n=$(e,"token",8);const r=void 0,o=void 0;de();var a=Le(),s=le(a);return gw(s,()=>n().text),S(t,a),Ze(e,"options",r),Ze(e,"renderers",o),te({options:r,renderers:o})}var i2=ne("<p><!></p>");function a2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=i2(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var s2=ne("<a><!></a>");function l2(t,e){ee(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const o=void 0;de();var a=s2();Z(()=>A(a,"href",uv(n().href)?cv(r().baseUrl,n().href):n().href));var s=q(a);return dt(s,e,"default",{}),P(a),Z(()=>A(a,"title",n().title)),S(t,a),Ze(e,"renderers",o),te({renderers:o})}function c2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=Le(),s=le(a);return dt(s,e,"default",{}),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var u2=ne("<dfn><!></dfn>");function d2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=u2(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var f2=ne("<del><!></del>");function _2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=f2(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var g2=ne("<em><!></em>");function h2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=g2(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var v2=ne("<hr>");function p2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=v2();return S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var m2=ne("<strong><!></strong>");function C2(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=m2(),s=q(a);return dt(s,e,"default",{}),P(a),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}var E2=ne('<img class="markdown-image svelte-z38cge">');function I2(t,e){ee(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const o=void 0;de();var a=E2();return Z(()=>A(a,"src",uv(n().href)?cv(r().baseUrl,n().href):n().href)),Z(()=>{A(a,"title",n().title),A(a,"alt",n().text)}),S(t,a),Ze(e,"renderers",o),te({renderers:o})}function Ng(t,e){ee(e,!1);const n=void 0,r=void 0,o=void 0;var a=Le(),s=le(a);return dt(s,e,"default",{}),S(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),te({token:n,options:r,renderers:o})}const b2=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,w2=Object.hasOwnProperty;class O2{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=L2(e,n===!0);const a=o;for(;w2.call(r.occurrences,o);)r.occurrences[a]++,o=a+"-"+r.occurrences[a];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function L2(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(b2,"").replace(/ /g,"-"))}function od(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Do=od();function dv(t){Do=t}const fv=/[&<>"']/,y2=new RegExp(fv.source,"g"),_v=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,A2=new RegExp(_v.source,"g"),x2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Dg=t=>x2[t];function Dn(t,e){if(e){if(fv.test(t))return t.replace(y2,Dg)}else if(_v.test(t))return t.replace(A2,Dg);return t}const S2=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(S2,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}function Tg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Qi={exec:()=>null};function Rg(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,_=s;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function Wi(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function N2(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function kg(t,e,n,r){const o=e.href,a=e.title?Dn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:a,text:Dn(s)}}function D2(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}class As{constructor(e){ge(this,"options");ge(this,"rules");ge(this,"lexer");this.options=e||Do}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Wi(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=D2(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=Wi(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Wi(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Wi(n[0],`
`).split(`
`),o="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const g=u.join(`
`),h=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${g}`:g,a=a?`${a}
${h}`:h;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=p,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),O=this.blockquote(I);s[s.length-1]=O,o=o.substring(0,o.length-C.raw.length)+O.raw,a=a.substring(0,a.length-C.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),O=this.list(I);s[s.length-1]=O,o=o.substring(0,o.length-m.raw.length)+O.raw,a=a.substring(0,a.length-C.raw.length)+O.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,a={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",g="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),p=e.split(`
`,1)[0],m=!h.trim(),C=0;if(this.options.pedantic?(C=2,g=h.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,g=h.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(p)&&(_+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),F=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),M=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const z=e.split(`
`,1)[0];let V;if(p=z,this.options.pedantic?(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),V=p):V=p.replace(/\t/g,"    "),R.test(p)||F.test(p)||M.test(p)||w.test(p)||N.test(p))break;if(V.search(/[^ ]/)>=C||!p.trim())g+=`
`+V.slice(C);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||R.test(h)||F.test(h)||N.test(h))break;g+=`
`+p}!m&&!p.trim()&&(m=!0),_+=z+`
`,e=e.substring(z.length+1),h=V.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,O;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(O=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:_,task:!!I,checked:O,loose:!1,text:g,tokens:[]}),a.raw+=_}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const _=a.items[u].tokens.filter(h=>h.type==="space"),g=_.length>0&&_.some(h=>/\n.*\n/.test(h.raw));a.loose=g}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Rg(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(Rg(c,s.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[_]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Dn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=Wi(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=N2(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);s&&(o=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),kg(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),a=n[o.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return kg(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...o[0]].length-1;let c,u,_=s,g=0;const h=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+s);(o=h.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){_+=u;continue}else if((o[5]||o[6])&&s%3&&!((s+u)%3)){g+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+g);const p=[...o[0]][0].length,m=e.slice(0,s+o.index+p+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return o&&a&&(r=r.substring(1,r.length-1)),r=Dn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=Dn(n[1]),o="mailto:"+r):(r=Dn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,a;if(n[2]==="@")o=Dn(n[0]),a="mailto:"+o;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);o=Dn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Dn(n[0]),{type:"text",raw:n[0],text:r}}}}const T2=/^(?:[ \t]*(?:\n|$))+/,R2=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,k2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ha=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,G2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gv=/(?:[*+-]|\d{1,9}[.)])/,hv=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,gv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),id=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,M2=/^[^\n]+/,ad=/(?!\s*\])(?:\\.|[^\[\]\\])+/,F2=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ad).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$2=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,gv).getRegex(),Js="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",sd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,U2=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",sd).replace("tag",Js).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vv=Ct(id).replace("hr",ha).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),H2=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",vv).getRegex(),ld={blockquote:H2,code:R2,def:F2,fences:k2,heading:G2,hr:ha,html:U2,lheading:hv,list:$2,newline:T2,paragraph:vv,table:Qi,text:M2},Gg=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ha).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),P2={...ld,table:Gg,paragraph:Ct(id).replace("hr",ha).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Gg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex()},B2={...ld,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",sd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(id).replace("hr",ha).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},pv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,W2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mv=/^( {2,}|\\)\n(?!\s*$)/,Y2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,va="\\p{P}\\p{S}",z2=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,va).getRegex(),V2=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,j2=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,va).getRegex(),q2=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,va).getRegex(),K2=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,va).getRegex(),X2=Ct(/\\([punct])/,"gu").replace(/punct/g,va).getRegex(),Z2=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Q2=Ct(sd).replace("(?:-->|$)","-->").getRegex(),J2=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Q2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,eR=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",xs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Cv=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",xs).replace("ref",ad).getRegex(),Ev=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",ad).getRegex(),tR=Ct("reflink|nolink(?!\\()","g").replace("reflink",Cv).replace("nolink",Ev).getRegex(),cd={_backpedal:Qi,anyPunctuation:X2,autolink:Z2,blockSkip:V2,br:mv,code:W2,del:Qi,emStrongLDelim:j2,emStrongRDelimAst:q2,emStrongRDelimUnd:K2,escape:pv,link:eR,nolink:Ev,punctuation:z2,reflink:Cv,reflinkSearch:tR,tag:J2,text:Y2,url:Qi},nR={...cd,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",xs).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xs).getRegex()},uu={...cd,escape:Ct(pv).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},rR={...uu,br:Ct(mv).replace("{2,}","*").getRegex(),text:Ct(uu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_s={normal:ld,gfm:P2,pedantic:B2},Yi={normal:cd,gfm:uu,breaks:rR,pedantic:nR};class Rn{constructor(e){ge(this,"tokens");ge(this,"options");ge(this,"state");ge(this,"tokenizer");ge(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Do,this.options.tokenizer=this.options.tokenizer||new As,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:_s.normal,inline:Yi.normal};this.options.pedantic?(n.block=_s.pedantic,n.inline=Yi.pedantic):this.options.gfm&&(n.block=_s.gfm,this.options.breaks?n.inline=Yi.breaks:n.inline=Yi.gfm),this.tokenizer.rules=n}static get rules(){return{block:_s,inline:Yi}}static lex(e,n){return new Rn(n).lex(e)}static lexInline(e,n){return new Rn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(g=>{_=g.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o),r=s.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,a,s=e,c,u,_;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},h),typeof p=="number"&&p>=0&&(g=Math.min(g,p))}),g<1/0&&g>=0&&(a=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class Ss{constructor(e){ge(this,"options");ge(this,"parser");this.options=e||Do}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const o=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Dn(o)+'">'+(r?a:Dn(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:Dn(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let o="";for(let c=0;c<e.items.length;c++){const u=e.items[c];o+=this.listitem(u)}const a=n?"ol":"ul",s=n&&r!==1?' start="'+r+'"':"";return"<"+a+s+`>
`+o+"</"+a+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let a=0;a<e.header.length;a++)r+=this.tablecell(e.header[a]);n+=this.tablerow({text:r});let o="";for(let a=0;a<e.rows.length;a++){const s=e.rows[a];r="";for(let c=0;c<s.length;c++)r+=this.tablecell(s[c]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),a=Tg(e);if(a===null)return o;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+o+"</a>",s}image({href:e,title:n,text:r}){const o=Tg(e);if(o===null)return r;e=o;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class ud{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){ge(this,"options");ge(this,"renderer");ge(this,"textRenderer");this.options=e||Do,this.options.renderer=this.options.renderer||new Ss,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ud}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class Ji{constructor(e){ge(this,"options");ge(this,"block");this.options=e||Do}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Rn.lex:Rn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}ge(Ji,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class oR{constructor(...e){ge(this,"defaults",od());ge(this,"options",this.setOptions);ge(this,"parse",this.parseMarkdown(!0));ge(this,"parseInline",this.parseMarkdown(!1));ge(this,"Parser",Kn);ge(this,"Renderer",Ss);ge(this,"TextRenderer",ud);ge(this,"Lexer",Rn);ge(this,"Tokenizer",As);ge(this,"Hooks",Ji);this.use(...e)}walkTokens(e,n){var o,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),o.extensions=n),r.renderer){const a=this.defaults.renderer||new Ss(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],_=a[c];a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=_.apply(a,g)),h||""}}o.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new As(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],_=a[c];a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=_.apply(a,g)),h}}o.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new Ji;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],_=a[c];Ji.passThroughHooks.has(s)?a[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(a,g)).then(p=>_.call(a,p));const h=u.call(a,g);return _.call(a,h)}:a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=_.apply(a,g)),h}}o.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Rn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const a={...o},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Rn.lex:Rn.lexInline,_=s.hooks?s.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(g=>u(g,s)).then(g=>s.hooks?s.hooks.processAllTokens(g):g).then(g=>s.walkTokens?Promise.all(this.walkTokens(g,s.walkTokens)).then(()=>g):g).then(g=>_(g,s)).then(g=>s.hooks?s.hooks.postprocess(g):g).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let g=u(r,s);s.hooks&&(g=s.hooks.processAllTokens(g)),s.walkTokens&&this.walkTokens(g,s.walkTokens);let h=_(g,s);return s.hooks&&(h=s.hooks.postprocess(h)),h}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Dn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const bo=new oR;function mt(t,e){return bo.parse(t,e)}mt.options=mt.setOptions=function(t){return bo.setOptions(t),mt.defaults=bo.defaults,dv(mt.defaults),mt};mt.getDefaults=od;mt.defaults=Do;mt.use=function(...t){return bo.use(...t),mt.defaults=bo.defaults,dv(mt.defaults),mt};mt.walkTokens=function(t,e){return bo.walkTokens(t,e)};mt.parseInline=bo.parseInline;mt.Parser=Kn;mt.parser=Kn.parse;mt.Renderer=Ss;mt.TextRenderer=ud;mt.Lexer=Rn;mt.lexer=Rn.lex;mt.Tokenizer=As;mt.Hooks=Ji;mt.parse=mt;mt.options;mt.setOptions;mt.use;mt.walkTokens;mt.parseInline;Kn.parse;Rn.lex;function iR(t){return new Rn().lex(t)}const aR=()=>({heading:PT,blockquote:WT,list:YT,list_item:VT,br:qT,code:XT,codespan:QT,table:r2,html:o2,paragraph:a2,link:l2,text:c2,def:d2,del:_2,em:h2,hr:p2,strong:C2,image:I2,space:Ng,escape:Ng}),sR=()=>({baseUrl:"/",slugger:new O2});function lR(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},Jg(()=>{console.warn=t})}function Iv(t,e){ee(e,!1),lR();let n=$(e,"source",8),r=$(e,"options",24,()=>({})),o=$(e,"renderers",24,()=>({})),a=D(),s=D(),c=D();G(()=>(J(n()),J(o()),J(r())),()=>{x(a,iR(n())),x(s,{...aR(),...o()}),x(c,{...sR(),...r()})}),ve(),de(),ys(t,{get tokens(){return v(a)},get renderers(){return v(s)},get options(){return v(c)}}),te()}var cR=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),uR=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),dR=ne('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function fR(t,e){ee(e,!1);const n=Ve(),r=()=>he(Nr,"$puzzleMetaStore",n),o=D();let a=$(e,"showModal",12,!1);function s(u){return u?Is(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}G(()=>r(),()=>{x(o,r())}),ve(),de(),Tr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,_)=>{var g=dR(),h=q(g),p=q(h,!0);P(h);var m=H(h,2),C=q(m);Z(()=>nt(C,`by ${s(v(o).authors)??""}`)),P(m);var I=H(m,2),O=q(I),w=Xe(()=>c(v(o).ruleset));Iv(O,{get source(){return v(w)}}),P(I);var N=H(I,2);{var R=z=>{var V=cR(),K=H(le(V),2);Z(()=>A(K,"href",v(o).ctcUrl)),S(z,V)};fe(N,z=>{var V,K;(K=(V=v(o))==null?void 0:V.ctcUrl)!=null&&K.length&&z(R)})}var F=H(N,2);{var M=z=>{var V=uR(),K=H(le(V),2);Z(()=>A(K,"href",v(o).ctcYoutubeUrl)),S(z,V)};fe(F,z=>{var V,K;(K=(V=v(o))==null?void 0:V.ctcYoutubeUrl)!=null&&K.length&&z(M)})}P(g),Z(()=>{var z;return nt(p,((z=v(o))==null?void 0:z.title)||"Puzzle")}),S(u,g)},$$slots:{default:!0},$$legacy:!0}),te()}var _R=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function gR(t){var e=_R();S(t,e)}var hR=ne("<!> <!>",1);function vR(t){let e=D(!1);function n(){x(e,!0)}var r=hR(),o=le(r);ga(o,{title:"Rules",clickCb:n,children:(s,c)=>{gR(s)},$$slots:{default:!0}});var a=H(o,2);fR(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var pR=ne('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function el(t,e){let n=$(e,"isOpen",8,!0);var r=pR(),o=q(r);dt(o,e,"default",{}),P(r),Z(()=>{A(r,"aria-expanded",n()),Lt(r,"closed",!n())}),S(t,r)}var mR=ne('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),CR=ne('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Vr(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0),o=$(e,"isCollapsible",8,!1);var a=Le(),s=le(a);{var c=_=>{var g=mR(),h=q(g),p=q(h),m=q(p,!0);P(p),P(h);var C=H(h,2),I=q(C);dt(I,e,"default",{}),P(C),P(g),Z(()=>nt(m,n())),S(_,g)},u=_=>{var g=CR(),h=q(g),p=q(h),m=q(p,!0);P(p),P(h);var C=H(h,2),I=q(C);dt(I,e,"default",{});var O=H(I,2);P(C),P(g),Z(()=>{nt(m,n()),Lt(O,"open",r())}),Re("click",g,()=>r(!r())),S(_,g)};fe(s,_=>{o()?_(u,!1):_(c)})}S(t,a)}var ER=ne('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),IR=ne('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function gs(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0);var o=IR(),a=q(o);Vr(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=H(a,2);el(s,{get isOpen(){return r()},children:(c,u)=>{var _=ER(),g=q(_);dt(g,e,"default",{}),P(_),S(c,_)},$$slots:{default:!0}}),P(o),S(t,o)}var bR=ne('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function wR(t,e){let n=$(e,"value",8),r=$(e,"onClickCb",8),o=$(e,"disabled",8,!1);var a=bR(),s=q(a);qt(s),mo(2),P(a),Z(()=>{Lt(a,"disabled",o()),rh(s,n()),s.disabled=o()}),Re("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),S(t,a)}var OR=ne('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Wr(t,e){ee(e,!1);let n=$(e,"value",8),r=$(e,"name",8),o=$(e,"updateCb",8,void 0),a=$(e,"disabled",8,!1);function s(){a()||o()&&o()(!n())}de();var c=OR(),u=q(c);wR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var _=H(u,2),g=q(_,!0);P(_),P(c),Z(()=>{Lt(c,"disabled",a()),nt(g,r())}),Re("click",_,Xn(s)),S(t,c),te()}var LR=ne("<!> <!>",1),yR=ne("<!> <!> <!>",1),AR=ne("<!> <!>",1),xR=ne('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function bv(t,e){ee(e,!1);const n=Ve(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(Xs,"$gameModeStore",n),a=D();let s=$(e,"showModal",12,!1);G(()=>r(),()=>{x(a,r())}),ve(),de(),Tr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var _=xR(),g=q(_);gs(g,{title:"General",children:(I,O)=>{Wr(I,{get value(){return v(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:yw})},$$slots:{default:!0}});var h=H(g,2);gs(h,{title:"Tools",children:(I,O)=>{var w=LR(),N=le(w);Wr(N,{get value(){return v(a).penToolActive},name:"Pen Tool",updateCb:xw});var R=H(N,2);Wr(R,{disabled:!0,get value(){return v(a).letterToolActive},name:"Letter Tool",updateCb:Sw}),S(I,w)},$$slots:{default:!0}});var p=H(h,2);gs(p,{title:"Gameplay",children:(I,O)=>{var w=yR(),N=le(w);Wr(N,{name:"Check Conflicts",get value(){return v(a).checkConflicts},updateCb:Dw});var R=H(N,2);Wr(R,{name:"Highlight Pencilmark Conflicts",get value(){return v(a).highlightPencilmarkConflicts},updateCb:Tw});var F=H(R,2);Wr(F,{name:"Highlight Cells Seen By Selection",get value(){return v(a).highlightCellsSeenBySelection},updateCb:Nw}),S(I,w)},$$slots:{default:!0}});var m=H(p,2);{var C=I=>{gs(I,{title:"Setting Mode Display",children:(O,w)=>{var N=AR(),R=le(N);Wr(R,{name:"Hide Fog",get value(){return v(a).hideFog},updateCb:Rw});var F=H(R,2);Wr(F,{name:"Show Solution",get value(){return v(a).showSolution},updateCb:kw}),S(O,N)},$$slots:{default:!0}})};fe(m,I=>{o()===pi.SETTING&&I(C)})}P(_),S(c,_)},$$slots:{default:!0},$$legacy:!0}),te()}var SR=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function wv(t){var e=SR();S(t,e)}var NR=ne("<!> <!>",1);function DR(t){let e=D(!1);function n(){x(e,!0)}var r=NR(),o=le(r);ga(o,{title:"Settings",clickCb:n,children:(s,c)=>{wv(s)},$$slots:{default:!0}});var a=H(o,2);bv(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var TR=ne('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function RR(t){var e=TR(),n=q(e);DR(n);var r=H(n,2);vR(r);var o=H(r,2);UT(o);var a=H(o,2);kT(a);var s=H(a,2);IT(s),P(e),S(t,e)}var kR=ne('<div class="entry-panel-wrapper svelte-1aepbnb"><div class="puzzle-info svelte-1aepbnb"><div class="puzzle-header svelte-1aepbnb"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1aepbnb"><!></div></div>  <div class="entry-panel svelte-1aepbnb"><!> <div class="entry-subpanel1 svelte-1aepbnb"><!> <!></div> <!></div></div>');function GR(t,e){ee(e,!1);const n=Ve(),r=()=>he(ra,"$svgRefStore",n),o=()=>he(Nr,"$puzzleMetaStore",n),a=()=>he(Xt,"$toolStore",n),s=D(),c=D();function u(){r().focus()}function _(ie){return ie?Is(ie," & ",", "):"Anonymous"}function g(ie){return ie&&ie.length?ie:"Normal sudoku rules apply."}G(()=>o(),()=>{x(s,o().title??"Sudoku")}),G(()=>o(),()=>{x(c,_(o().authors))}),ve(),de();var h=kR(),p=q(h),m=q(p),C=q(m),I=q(C,!0);P(C);var O=H(C,2),w=q(O);P(O),P(m);var N=H(m,2),R=q(N),F=Xe(()=>g(o().ruleset));Iv(R,{get source(){return v(F)}}),P(N),P(p);var M=H(p,2),z=q(M);RR(z);var V=H(z,2),K=q(V);ZD(K,{get selectedTool(){return a()}});var se=H(K,2);cT(se,{get selectedTool(){return Qg(),a()},set selectedTool(ie){aa(Xt,ie)},$$legacy:!0}),P(V);var _e=H(V,2);VD(_e,{}),P(M),P(h),Z(()=>{nt(I,v(s)),nt(w,`by ${v(c)??""}`)}),Re("click",M,Xn(()=>{u()})),S(t,h),te()}const dd=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())zw(n)&&e.push({toolId:n,element:r});return e}),MR=ln(dd,t=>{const e=t.find(r=>r.toolId===f.MINIMUM);return e?e.element:{}}),FR=ln(dd,t=>{const e=t.find(r=>r.toolId===f.MAXIMUM);return e?e.element:{}}),$R=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Uu(n)&&e.push({toolId:n,element:r});return e}),UR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Vw(n)&&e.push({toolId:n,element:r});return e}),HR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())_h(n)&&e.push({toolId:n,element:r});return e}),PR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Hu(n)&&e.push({toolId:n,element:r});return e}),BR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Pu(n)&&e.push({toolId:n,element:r});return e}),WR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Bu(n)&&e.push({toolId:n,element:r});return e}),YR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())gh(n)&&e.push({toolId:n,element:r});return e}),zR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())ta(n)&&e.push({toolId:n,element:r});return e});function VR(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function jR(t){const e=new Map;function n(r,o){const a=e.get(o);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(o);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(o)}for(const r of t){const o=VR(r),a=o.length;for(let s=0;s<a;s++){const c=o[s%a],u=o[(s+1)%a],_=JSON.stringify(c),g=JSON.stringify(u);n(_,g)}}return e}function qR(t,e=0,n=!1){const r=[],o=jR(t);if(o.size<=0)return r;const a=new Set;for(;o.size>0;){const s=Array.from(o.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let _=JSON.parse(c);const g=Array.from(u)[0];let h=JSON.parse(g),p=g;const m=[];do{const C=o.get(p);if(C===void 0)throw new Error(`Corner with no adjacencies found ${p}`);const I=new Te(_.c,_.r),O=new Te(h.c,h.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,N=null,R=null;for(const F of C){const M=JSON.parse(F),z=new Te(M.c,M.r),V=O.subtract(I),K=z.subtract(O),se=V.perpDotProduct(K);w<se!=n&&(w=se,R=M,N=F)}if(n&&C.size>1&&a.add(p),R===null||N===null)throw new Error("Corner with no adjacencies found");if(C.delete(N),C.size<=0&&o.delete(p),w!==0){const F=e*(h.c-_.c),M=e*(R.c-h.c),z=e*(_.r-h.r),V=e*(h.r-R.r),K=V+w*M,se=F+w*z,_e=new Te(h.c+K,h.r+se),ie=4;a.has(p)?(m.push(new Te(_e.x-ie*F,_e.y-ie*M)),m.push(new Te(_e.x-ie*z,_e.y-ie*V))):m.push(_e)}_=h,h=R,p=N}while(p!==g);r.push(m)}return r}function ni(t,e=0,n=!1){return qR(t,e,n).map(a=>Ci(a,!0)).join("")}const KR=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function XR(t,e,n=KR){if(e===1)return n;const r=[],o=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,_=c/(360/o),g=u/(360/o),h=Math.floor(_)%o,p=Math.ceil(_)%o,m=n[h].lerp(n[p],_%1),C=Math.floor(g)%o,I=Math.ceil(g)%o,O=n[C].lerp(n[I],g%1);r.push(m);for(let N=Math.ceil(_);N<=Math.floor(g);N++)r.push(n[N%o]);r.push(O);const w=new Te(0,0);return r.push(w),r}function Ov(t,e,n=new Te(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const _=s*Math.cos(u/e*2*Math.PI+o*2*Math.PI),g=s*Math.sin(u/e*2*Math.PI+o*2*Math.PI),h=n.add(new Te(_,g));c.push(h)}return c}function Ci(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:a})=>`${o},${a}`).join("L")+n}function tl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){if(r&&t.length>1){const _=t[t.length-1];for(let h=0;h<t.length-1;h++)if(_.equals(t[h])){t.push(t[h+1]);break}const g=t[0];for(let h=1;h<t.length;h++)if(g.equals(t[h])){t.unshift(t[h-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let g=t[_-2].subtract(t[_-1]);g=g.normalise(),g=g.scale(n),t[_-1]=t[_-1].add(g)}}if(!o)return Ci(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let _=2;_<c;_++){const g=t[_-2],h=t[_-1],p=t[_];let m=g.subtract(h).normalise();m=m.scale(o),m=m.add(h);let C=p.subtract(h).normalise();C=C.scale(o),C=C.add(h),s.push(`L${m.x},${m.y} Q ${h.x},${h.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function du(t,e={}){const n=Ns(t);return tl(n,e)}function Zn(t){return new Te(t.c+.5,t.r+.5)}function Ns(t){return t.map(n=>Zn(n))}const ZR=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function QR(t,e){const n=ZR[t];return n.subtract(n.scale(e))}function Lv(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(a=>Ci(a,!1)).join("")}const JR=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function nl(t,e="none"){return JR.get(t)||e}function ek(t,e,n){let r=[];function a(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:s=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const _=new Te(n+.5,e+.5);return u.add(_)})),r}var tk=re('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function rl(t,e){let n=$(e,"l",8,.2),r=$(e,"id",8),o=$(e,"strokeWidth",8),a=$(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=tk();A(u,"viewBox","0 0 1 1"),A(u,"refX",s),A(u,"refY",s),A(u,"markerWidth",1),A(u,"markerHeight",1);var _=q(u);A(_,"d",c),P(u),Z(()=>{A(u,"id",r()),A(_,"stroke-width",o()),A(_,"stroke",a())}),S(t,u)}var nk=re('<g class="outside-direction-tool"><!><path fill="none" stroke="var(--text-primary-color)"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function rk(t,e){ee(e,!1);let n=$(e,"outsideEdgeTool",8);const r=n().cell,o=n().direction,a=mh(r,o),s=Zn(r),u=Lr(n().toolId,Rt).shape,_=u?Cs(u):void 0,g=(_==null?void 0:_.fontSize)??.5,h="white",p=.03;function m(z){return z.value&&z.value.length?z.value:"-"}function C(){const K=Zn(a).subtract(s).length(),se={shortenHead:.3*K,shortenTail:.55*K};return du([r,a],se)}const O=`outside-tool-arrow-marker-${crypto.randomUUID()}`;de();var w=nk(),N=q(w);rl(N,{id:O,l:.07,strokeWidth:p,stroke:"var(--text-primary-color)"});var R=H(N);Z(()=>A(R,"d",C())),A(R,"stroke-width",p),A(R,"marker-end",`url(#${O??""})`);var F=H(R);A(F,"font-size",g),A(F,"fill",h);var M=q(F,!0);Z(()=>nt(M,m(n()))),P(F),P(w),Z(()=>{A(F,"x",s.x),A(F,"y",s.y)}),S(t,w),te()}var ok=re("<g></g>"),ik=re('<g class="outside-direction-tools-layer" mask="url(#fog-mask-fog)"></g>');function ak(t,e){ee(e,!1);const n=Ve(),r=()=>he(zR,"$outsideDirectionToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=ik();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=ok();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{rk(h,{get outsideEdgeTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var sk=re("<path></path>");function Ds(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=$(e,"cells",8),g=$(e,"shape",8,Vu);G(()=>J(g()),()=>{x(n,g().inset??.06)}),G(()=>J(g()),()=>{x(r,g().stroke??"black")}),G(()=>J(g()),()=>{x(o,g().strokeWidth??.03)}),G(()=>J(g()),()=>{x(a,g().strokeDasharray??.08)}),G(()=>J(g()),()=>{x(s,g().fill??"none")}),G(()=>J(g()),()=>{x(c,g().connectDiag??!0)}),G(()=>(J(_()),v(n),v(c)),()=>{x(u,ni(_(),v(n),v(c)))}),ve(),de();var h=sk();Z(()=>{A(h,"d",v(u)),A(h,"stroke",v(r)),A(h,"stroke-width",v(o)),A(h,"fill",v(s)),A(h,"stroke-dasharray",v(a))}),S(t,h),te()}var lk=re('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function oa(t,e){ee(e,!1);const n=D();let r=$(e,"value",8,""),o=$(e,"fontSize",8,.2),a=$(e,"x",8),s=$(e,"y",8),c=$(e,"position",8,"TL"),u=$(e,"fontColor",8,"var(--text-primary-color)"),_=$(e,"fontWeight",8,400),g=D(null),h=D(null);function p(N,R,F){const M=["TL","TR"].includes(F),V=["TL","BL"].includes(F)?N+.05:N,K=R;return new Te(V,K)}function m(N){return["TL","BL"].includes(N)?"start":"end"}function C(N){return["TL","TR"].includes(N)?"text-before-edge":""}uw(()=>{if(!v(g)||!v(h))return;const N=v(g).getBBox();v(h).setAttribute("x",String(N.x)),v(h).setAttribute("y",String(N.y+N.height*.1)),v(h).setAttribute("width",String(N.width)),v(h).setAttribute("height",String(N.height*.8))}),G(()=>(J(a()),J(s()),J(c())),()=>{x(n,p(a(),s(),c()))}),ve(),de();var I=Le(),O=le(I);{var w=N=>{var R=lk(),F=le(R);Co(F,V=>x(h,V),()=>v(h));var M=H(F);Z(()=>A(M,"text-anchor",m(c()))),Z(()=>A(M,"dominant-baseline",C(c())));var z=q(M,!0);P(M),Co(M,V=>x(g,V),()=>v(g)),Z(()=>{var V,K;A(M,"x",(V=v(n))==null?void 0:V.x),A(M,"y",(K=v(n))==null?void 0:K.y),A(M,"font-size",o()),A(M,"fill",u()),A(M,"font-weight",_()),nt(z,r())}),S(N,R)};fe(O,N=>{r().length&&N(w)})}S(t,I),te()}var ck=ne("<!> <!> <!> <!>",1);function uk(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let g=$(e,"cloneTool",8);const h=Mn(g().toolId,Rt)??gO,p=800,m=g().value;G(()=>J(g()),()=>{x(n,g().shape??h)}),G(()=>v(n),()=>{x(r,v(n).inset??.15)}),G(()=>v(n),()=>{x(o,v(n).strokeWidth??.07)}),G(()=>v(n),()=>{x(a,v(n).fontColor??v(n).stroke??"black")}),G(()=>J(g()),()=>{x(s,g().cells[g().cells.length-1])}),G(()=>J(g()),()=>{x(c,g().cells2[g().cells2.length-1])}),G(()=>(v(s),v(r)),()=>{x(u,new Te(v(s).c+1-v(r)-.05,v(s).r+1-v(r)-.05))}),G(()=>(v(c),v(r)),()=>{x(_,new Te(v(c).c+1-v(r)-.05,v(c).r+1-v(r)-.05))}),ve(),de();var C=ck(),I=le(C);Ds(I,{get cells(){return g().cells},get shape(){return v(n)}});var O=H(I,2);oa(O,{value:m,get x(){return v(_).x},get y(){return v(_).y},position:"BR",get fontColor(){return v(a)},fontWeight:p});var w=H(O,2);Ds(w,{get cells(){return g().cells2},get shape(){return v(n)}});var N=H(w,2);oa(N,{value:m,get x(){return v(_).x},get y(){return v(_).y},position:"BR",get fontColor(){return v(a)},fontWeight:p}),S(t,C),te()}var dk=re("<g></g>"),fk=re('<g class="clone-tools-layer" mask="url(#fog-mask-fog)"></g>');function _k(t,e){ee(e,!1);const n=Ve(),r=()=>he(YR,"$cloneToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=fk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=dk();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{uk(h,{get cloneTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var gk=re('<path fill="none"></path>');function ia(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=$(e,"linePoints",8),_=$(e,"shape",8,void 0);const g="round",h="round";G(()=>J(_()),()=>{var m;x(n,((m=_())==null?void 0:m.stroke)??"gray")}),G(()=>J(_()),()=>{var m;x(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),G(()=>J(_()),()=>{var m;x(o,((m=_())==null?void 0:m.strokeDasharray)??0)}),G(()=>J(_()),()=>{var m;x(a,((m=_())==null?void 0:m.strokeDashoffset)??0)}),G(()=>J(_()),()=>{var m,C,I,O,w,N,R,F;x(s,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((O=(I=_())==null?void 0:I.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((N=(w=_())==null?void 0:w.linePathOptions)==null?void 0:N.bezierRounding)??.2,closeLoops:((F=(R=_())==null?void 0:R.linePathOptions)==null?void 0:F.closeLoops)??!1})}),G(()=>(J(u()),v(s)),()=>{x(c,tl(u(),v(s)))}),ve(),de();var p=gk();A(p,"stroke-linejoin",g),A(p,"stroke-linecap",h),Z(()=>{A(p,"d",v(c)),A(p,"stroke",v(n)),A(p,"stroke-width",v(r)),A(p,"stroke-dasharray",v(o)),A(p,"stroke-dashoffset",v(a))}),S(t,p),te()}var hk=re("<circle></circle>");function wo(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=$(e,"x",8),_=$(e,"y",8),g=$(e,"shape",8);G(()=>J(g()),()=>{x(n,g().r??.35)}),G(()=>J(g()),()=>{x(r,g().stroke??"black")}),G(()=>J(g()),()=>{var p;x(o,(p=g())==null?void 0:p.opacity)}),G(()=>J(g()),()=>{x(a,g().strokeWidth??.02)}),G(()=>J(g()),()=>{x(s,g().fill??"none")}),G(()=>J(g()),()=>{x(c,g().strokeDasharray??0)}),ve(),de();var h=hk();Z(()=>{A(h,"cx",u()),A(h,"cy",_()),A(h,"r",v(n)),A(h,"stroke",v(r)),A(h,"stroke-width",v(a)),A(h,"fill",v(s)),A(h,"opacity",v(o)),A(h,"stroke-dasharray",v(c))}),S(t,h),te()}var vk=ne("<!> <!> <!>",1);function pk(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D();let s=$(e,"linePoints",8),c=$(e,"shape",8,Hs);function u(O){var R;const w=Gt.cloneDeep(O);w.r=w.r||.2;const N=w.r;return w.strokeDasharray=O.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:N,shortenTail:N,bezierRounding:(R=w.linePathOptions)==null?void 0:R.bezierRounding},w}G(()=>J(s()),()=>{x(n,s().length)}),G(()=>(v(n),J(s())),()=>{x(r,v(n)>=0?s()[0]:void 0)}),G(()=>(v(n),J(s())),()=>{x(o,v(n)>=0?s()[v(n)-1]:void 0)}),G(()=>J(c()),()=>{x(a,u(c()))}),ve(),de();var _=vk(),g=le(_);{var h=O=>{wo(O,{get x(){return v(r).x},get y(){return v(r).y},get shape(){return v(a)}})};fe(g,O=>{v(r)&&O(h)})}var p=H(g,2);{var m=O=>{ia(O,{get linePoints(){return s()},get shape(){return v(a)}})};fe(p,O=>{v(n)>1&&O(m)})}var C=H(p,2);{var I=O=>{wo(O,{get x(){return v(o).x},get y(){return v(o).y},get shape(){return v(a)}})};fe(C,O=>{v(o)&&O(I)})}S(t,_),te()}var mk=re("<polygon></polygon>");function Ts(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let g=$(e,"cx",8),h=$(e,"cy",8),p=$(e,"shape",8);G(()=>J(p()),()=>{x(n,p().n??3)}),G(()=>J(p()),()=>{x(r,p().r??.5)}),G(()=>(v(r),v(n),J(g()),J(h())),()=>{x(o,Ov(v(r),v(n),new Te(g(),h())))}),G(()=>v(o),()=>{x(a,v(o).map(C=>`${C.x},${C.y}`).join(" "))}),G(()=>J(p()),()=>{x(s,p().stroke??"black")}),G(()=>J(p()),()=>{x(c,p().strokeWidth??.02)}),G(()=>J(p()),()=>{x(u,p().fill??"none")}),G(()=>J(p()),()=>{x(_,p().angle??0)}),ve(),de();var m=mk();Z(()=>{A(m,"points",v(a)),A(m,"stroke",v(s)),A(m,"stroke-width",v(c)),A(m,"fill",v(u)),A(m,"transform",`rotate(${v(_)}, ${g()}, ${h()} )`)}),S(t,m),te()}var Ck=ne("<!> <!> <!>",1);function Ek(t,e){ee(e,!1);const n=D(),r=D(),o=D();let a=$(e,"linePoints",8),s=$(e,"shape",12,Hs);const c=4,u=.5;function _(F,M){const z=M.r??u,V=M.n??c,K=M.angle??0,se=Ov(z,V,new Te(0,0),!0,0),_e=(V+(F-K/360)*V%V)%V,ie=Math.floor(_e)%V,ce=Math.ceil(_e)%V;return se[ie].lerp(se[ce],_e%1).length()}function g(F){if(v(n)<=1)return 0;const M=a()[0],V=a()[1].subtract(M).angle()/(2*Math.PI);return _(V,F)}function h(F){if(v(n)<=1)return 0;const M=a()[v(n)-1],V=a()[v(n)-2].subtract(M).angle()/(2*Math.PI);return _(V,F)}function p(F){var z;const M=Gt.cloneDeep(F);return M.r=M.r||u,M.opacity=1,M.linePathOptions={shortenHead:g(M),shortenTail:h(M),bezierRounding:(z=M.linePathOptions)==null?void 0:z.bezierRounding},M}G(()=>J(a()),()=>{x(n,a().length)}),G(()=>(v(n),J(a())),()=>{x(r,v(n)>=0?a()[0]:void 0)}),G(()=>(v(n),J(a())),()=>{x(o,v(n)>=0?a()[v(n)-1]:void 0)}),G(()=>J(s()),()=>{s(p(s()))}),ve(),de();var m=Ck(),C=le(m);{var I=F=>{Ts(F,{get cx(){return v(r).x},get cy(){return v(r).y},get shape(){return s()}})};fe(C,F=>{v(r)&&F(I)})}var O=H(C,2);{var w=F=>{ia(F,{get linePoints(){return a()},get shape(){return s()}})};fe(O,F=>{v(n)>1&&F(w)})}var N=H(O,2);{var R=F=>{Ts(F,{get cx(){return v(o).x},get cy(){return v(o).y},get shape(){return s()}})};fe(N,F=>{v(o)&&F(R)})}S(t,m),te()}var Ik=ne("<!> <!>",1);function Mg(t,e){ee(e,!1);const n=D();let r=$(e,"linePoints",8),o=$(e,"shape",8,Hs);function a(m){var O,w,N;const C=Gt.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(N=C.linePathOptions)==null?void 0:N.bezierRounding},C}function s(m){var O,w,N;const C=Gt.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(N=C.linePathOptions)==null?void 0:N.bezierRounding},C}G(()=>J(r()),()=>{x(n,r().length>0?r()[0]:void 0)}),ve(),de();var c=Ik(),u=le(c);{var _=m=>{var C=Xe(()=>a(o()));ia(m,{get linePoints(){return r()},get shape(){return v(C)}})};fe(u,m=>{r().length>1&&m(_)})}var g=H(u,2);{var h=m=>{var C=Xe(()=>a(o()));wo(m,{get x(){return v(n).x},get y(){return v(n).y},get shape(){return v(C)}})},p=m=>{var C=Le(),I=le(C);{var O=w=>{var N=Xe(()=>s(o()));Ts(w,{get cx(){return v(n).x},get cy(){return v(n).y},get shape(){return v(N)}})};fe(I,w=>{v(n)&&w(O)},!0)}S(m,C)};fe(g,m=>{v(n)&&o().type===B.THERMO_WITH_CIRCLE?m(h):m(p,!1)})}S(t,c),te()}var bk=re('<g class="line-tool"><!></g>');function wk(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D();let s=$(e,"lineTool",8);const c=Mn(s().toolId,Rt)??Hs;G(()=>J(s()),()=>{x(n,Ns(s().cells))}),G(()=>J(s()),()=>{x(r,s().shape??c)}),G(()=>(v(r),B),()=>{var p;x(o,((p=v(r))==null?void 0:p.type)||B.LINE)}),G(()=>v(r),()=>{var p;x(a,((p=v(r))==null?void 0:p.opacity)??.8)}),ve(),de();var u=bk(),_=q(u);{var g=p=>{ia(p,{get linePoints(){return v(n)},get shape(){return v(r)}})},h=p=>{var m=Le(),C=le(m);{var I=w=>{pk(w,{get linePoints(){return v(n)},get shape(){return v(r)}})},O=w=>{var N=Le(),R=le(N);{var F=z=>{Ek(z,{get linePoints(){return v(n)},get shape(){return v(r)}})},M=z=>{var V=Le(),K=le(V);{var se=ie=>{Mg(ie,{get linePoints(){return v(n)},get shape(){return v(r)}})},_e=ie=>{var ce=Le(),be=le(ce);{var Ie=He=>{Mg(He,{get linePoints(){return v(n)},get shape(){return v(r)}})},Ce=He=>{ia(He,{get linePoints(){return v(n)},get shape(){return v(r)}})};fe(be,He=>{v(o)===B.THERMO_WITH_POLYGON?He(Ie):He(Ce,!1)},!0)}S(ie,ce)};fe(K,ie=>{v(o)===B.THERMO_WITH_CIRCLE?ie(se):ie(_e,!1)},!0)}S(z,V)};fe(R,z=>{v(o)===B.LINE_WITH_POLYGON_ENDS?z(F):z(M,!1)},!0)}S(w,N)};fe(C,w=>{v(o)===B.LINE_WITH_CIRCLE_ENDS?w(I):w(O,!1)},!0)}S(p,m)};fe(_,p=>{v(o)===B.LINE?p(g):p(h,!1)})}P(u),Z(()=>A(u,"opacity",v(a))),S(t,u),te()}var Ok=re("<g></g>"),Lk=re('<g class="line-tools-layer" mask="url(#fog-mask-fog)"></g>');function yk(t,e){ee(e,!1);const n=Ve(),r=()=>he(PR,"$lineToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=Lk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=Ok();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{wk(h,{get lineTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var Ak=re('<path class="cursor svelte-zsq70u"></path>');function xk(t,e){ee(e,!1);const n=Ve(),r=()=>he(Xt,"$toolStore",n),o=()=>he(Io,"$selectionStore",n),a=D(),s=D(),c=.25;function u(g){if(!g)return"";const[h,p]=[g.c,g.r];return`M${h},${p}L${h+c},${p}L${h},${p+c}Z`}G(()=>r(),()=>{x(a,Wu(r()))}),G(()=>o(),()=>{x(s,u(o().lastCell))}),ve(),de();var _=Ak();Z(()=>{A(_,"d",v(s)),A(_,"visibility",v(a)?"visible":"hidden")}),S(t,_),te()}var Sk=re('<g class="grid-border"><rect fill="none" stroke="black"></rect></g>');function Nk(t,e){ee(e,!1);let n=$(e,"gridShape",8);const r=.06;de();var o=Sk(),a=q(o);A(a,"x",0),A(a,"y",0),A(a,"stroke-width",r),P(o),Z(()=>{A(a,"width",n().nCols),A(a,"height",n().nRows)}),S(t,o),te()}var Dk=re('<rect fill="none" stroke="black"></rect>'),Tk=re('<g class="grid-lines"></g>');function Rk(t,e){ee(e,!1);const n=Ve(),r=()=>he(sn,"$gridStore",n),o=D(),a=.01;G(()=>r(),()=>{x(o,r().getAllCells())}),ve(),de();var s=Tk();We(s,5,()=>v(o),gt,(c,u)=>{var _=Dk();A(_,"width",1),A(_,"height",1),A(_,"stroke-width",a),Z(()=>{A(_,"x",v(u).c),A(_,"y",v(u).r)}),S(c,_)}),P(s),S(t,s),te()}var kk=re('<path class="region-border" fill="none" stroke="black"></path>'),Gk=re('<g class="regions-border"></g>');function Mk(t,e){ee(e,!1);const n=Ve(),r=()=>he(an,"$cellsStore",n),o=()=>he(sn,"$gridStore",n),a=D(),s=D(),c=.06;function u(g,h){return g.filter(C=>C.region===h).map(C=>({r:C.r,c:C.c}))}G(()=>r(),()=>{x(a,r())}),G(()=>o(),()=>{x(s,o().getUsedRegions())}),ve(),de();var _=Gk();We(_,5,()=>v(s),gt,(g,h)=>{var p=kk();Z(()=>A(p,"d",ni(u(v(a),v(h)),0,!1))),A(p,"stroke-width",c),Z(()=>A(p,"id",`region-${v(h)??""}`)),S(g,p)}),P(_),S(t,_),te()}var Fk=re('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function $k(t,e){ee(e,!1);const n=Ve(),r=()=>he(Io,"$selectionStore",n),o=()=>he(Xt,"$toolStore",n),a=D(),s=D(),c=D(),u=D(),_=D(),g=D();let h=$(e,"boundingBox",8);const p=.06,m=.05,C="#080808",I="#b2b2b2";G(()=>J(h()),()=>{x(a,h().x)}),G(()=>J(h()),()=>{x(s,h().y)}),G(()=>r(),()=>{x(c,r().cells)}),G(()=>v(c),()=>{x(u,ni(v(c),0))}),G(()=>v(c),()=>{x(_,ni(v(c),p))}),G(()=>o(),()=>{x(g,Wu(o()))}),ve(),de();var O=Fk(),w=q(O),N=q(w);A(N,"stdDeviation",m),mo(),P(w);var R=H(w),F=q(R);A(F,"fill",I);var M=H(F);A(M,"fill",C),P(R);var z=H(R);P(O),Z(()=>{A(O,"visibility",v(g)?"visible":"hidden"),A(R,"x",v(a)),A(R,"y",v(s)),A(F,"x",v(a)),A(F,"y",v(s)),A(M,"d",v(_)),A(z,"d",v(u))}),S(t,O),te()}var Uk=ne("<!> <!>",1);function yv(t,e){ee(e,!1);const n=D(),r=D();let o=$(e,"cells",8),a=$(e,"shape",8,Vu),s=$(e,"value",8,void 0);G(()=>J(o()),()=>{x(n,o()[0])}),G(()=>v(n),()=>{x(r,new Te(v(n).c,v(n).r))}),ve(),de();var c=Uk(),u=le(c);Ds(u,{get cells(){return o()},get shape(){return a()}});var _=H(u,2);{var g=h=>{oa(h,{get value(){return s()},get x(){return v(r).x},get y(){return v(r).y},position:"TL"})};fe(_,h=>{s()&&s().length&&h(g)})}S(t,c),te()}var Hk=re('<g class="cage-tool"><!></g>');function Pk(t,e){ee(e,!1);const n=D();let r=$(e,"cageTool",8);const o=Mn(r().toolId,Rt)??Vu;G(()=>J(r()),()=>{x(n,r().shape??o)}),ve(),de();var a=Hk(),s=q(a);yv(s,{get cells(){return r().cells},get shape(){return v(n)},get value(){return r().value}}),P(a),S(t,a),te()}var Bk=re("<g></g>"),Wk=re('<g class="cage-tools-layer" mask="url(#fog-mask-fog)"></g>');function Yk(t,e){ee(e,!1);const n=Ve(),r=()=>he(WR,"$cageToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=Wk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=Bk();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{Pk(h,{get cageTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var zk=re('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function Vk(t,e){ee(e,!1);const n=D(),r=D();let o=$(e,"grid",8);G(()=>J(o()),()=>{x(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),G(()=>v(n),()=>{x(r,ni(v(n),0))}),ve(),de();var a=zk(),s=q(a);P(a),Z(()=>A(s,"d",v(r))),S(t,a),te()}var jk=re('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),qk=re('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),Kk=re('<g class="quadruple-text"><!></g>');function Xk(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"cornerTool",8);const u=c().cells,_=new Te(u[u.length-1].c,u[u.length-1].r),g=Mn(c().toolId,Rt)??Ih;G(()=>J(c()),()=>{x(n,c().value)}),G(()=>J(c()),()=>{x(r,c().shape??g)}),G(()=>v(r),()=>{var C;x(o,((C=v(r))==null?void 0:C.fontSize)??.2)}),G(()=>v(r),()=>{var C;x(a,((C=v(r))==null?void 0:C.fontColor)??"black")}),G(()=>v(n),()=>{var C;x(s,v(n)?(C=v(n))==null?void 0:C.split(","):[])}),ve(),de();var h=Le(),p=le(h);{var m=C=>{var I=Kk(),O=q(I);{var w=R=>{var F=jk(),M=q(F,!0);Z(()=>nt(M,v(s).join(" "))),P(F),Z(()=>{A(F,"x",_.x),A(F,"y",_.y),A(F,"font-size",v(o)),A(F,"fill",v(a))}),S(R,F)},N=R=>{var F=qk(),M=le(F),z=q(M,!0);Z(()=>nt(z,v(s).slice(0,2).join(" "))),P(M);var V=H(M),K=q(V,!0);Z(()=>nt(K,v(s).slice(2).join(" "))),P(V),Z(()=>{A(M,"x",_.x),A(M,"y",_.y),A(M,"dy",-v(o)/2),A(M,"font-size",v(o)),A(M,"fill",v(a)),A(V,"x",_.x),A(V,"y",_.y),A(V,"dy",v(o)/2),A(V,"font-size",v(o)),A(V,"fill",v(a))}),S(R,F)};fe(O,R=>{v(s).length<=2?R(w):R(N,!1)})}P(I),Z(()=>A(I,"data-count",v(s).length)),S(C,I)};fe(p,C=>{v(n)&&C(m)})}S(t,h),te()}var Zk=re("<ellipse></ellipse>");function Qk(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=$(e,"cx",8),g=$(e,"cy",8),h=$(e,"shape",8);G(()=>J(h()),()=>{x(n,h().width??.5)}),G(()=>J(h()),()=>{x(r,h().height??.5)}),G(()=>J(h()),()=>{x(o,h().stroke??"black")}),G(()=>J(h()),()=>{var m;x(a,(m=h())==null?void 0:m.opacity)}),G(()=>J(h()),()=>{x(s,h().strokeWidth??.02)}),G(()=>J(h()),()=>{x(c,h().fill??"none")}),G(()=>J(h()),()=>{x(u,h().angle??0)}),ve(),de();var p=Zk();Z(()=>{A(p,"cx",_()),A(p,"cy",g()),A(p,"rx",v(n)/2),A(p,"ry",v(r)/2),A(p,"stroke",v(o)),A(p,"stroke-width",v(s)),A(p,"fill",v(c)),A(p,"opacity",v(a)),A(p,"transform",`rotate(${v(u)}, ${_()}, ${g()} )`)}),S(t,p),te()}var Jk=re("<rect></rect>");function e5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=$(e,"cx",8),g=$(e,"cy",8),h=$(e,"shape",8);G(()=>J(h()),()=>{x(n,h().width??.5)}),G(()=>J(h()),()=>{x(r,h().height??.5)}),G(()=>(J(_()),v(n)),()=>{x(o,_()-v(n)/2)}),G(()=>(J(g()),v(r)),()=>{x(a,g()-v(r)/2)}),G(()=>J(h()),()=>{x(s,h().stroke||"black")}),G(()=>J(h()),()=>{x(c,h().strokeWidth||.023)}),G(()=>J(h()),()=>{x(u,h().fill||"none")}),ve(),de();var p=Jk();Z(()=>{A(p,"x",v(o)),A(p,"y",v(a)),A(p,"width",v(n)),A(p,"height",v(r)),A(p,"stroke",v(s)),A(p,"stroke-width",v(c)),A(p,"fill",v(u))}),S(t,p),te()}var t5=re("<rect></rect>");function n5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),g=D();let h=$(e,"cx",8),p=$(e,"cy",8),m=$(e,"shape",8);G(()=>J(m()),()=>{x(n,m().r??.5)}),G(()=>(J(h()),v(n)),()=>{x(r,h()-v(n))}),G(()=>(J(p()),v(n)),()=>{x(o,p()-v(n))}),G(()=>v(n),()=>{x(a,2*v(n))}),G(()=>v(n),()=>{x(s,2*v(n))}),G(()=>J(m()),()=>{x(c,m().stroke??"black")}),G(()=>J(m()),()=>{x(u,m().strokeWidth??.02)}),G(()=>J(m()),()=>{x(_,m().fill??"none")}),G(()=>J(m()),()=>{x(g,m().angle??0)}),ve(),de();var C=t5();Z(()=>{A(C,"x",v(r)),A(C,"y",v(o)),A(C,"width",v(a)),A(C,"height",v(s)),A(C,"stroke",v(c)),A(C,"stroke-width",v(u)),A(C,"fill",v(_)),A(C,"transform",`rotate(${v(g)}, ${h()}, ${p()})`)}),S(t,C),te()}function ol(t,e){ee(e,!1);const n=D();let r=$(e,"cx",8),o=$(e,"cy",8),a=$(e,"shape",8);G(()=>(J(a()),B),()=>{var g;x(n,((g=a())==null?void 0:g.type)??B.CIRCLE)}),ve(),de();var s=Le(),c=le(s);{var u=g=>{wo(g,{get x(){return r()},get y(){return o()},get shape(){return a()}})},_=g=>{var h=Le(),p=le(h);{var m=I=>{Qk(I,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},C=I=>{var O=Le(),w=le(O);{var N=F=>{n5(F,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},R=F=>{var M=Le(),z=le(M);{var V=se=>{e5(se,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},K=se=>{var _e=Le(),ie=le(_e);{var ce=Ie=>{Ts(Ie,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},be=Ie=>{wo(Ie,{get x(){return r()},get y(){return o()},get shape(){return a()}})};fe(ie,Ie=>{v(n)===B.POLYGON?Ie(ce):Ie(be,!1)},!0)}S(se,_e)};fe(z,se=>{v(n)===B.RECTANGLE?se(V):se(K,!1)},!0)}S(F,M)};fe(w,F=>{v(n)===B.SQUARE?F(N):F(R,!1)},!0)}S(I,O)};fe(p,I=>{v(n)===B.ELLIPSE?I(m):I(C,!1)},!0)}S(g,h)};fe(c,g=>{v(n)===B.CIRCLE?g(u):g(_,!1)})}S(t,s),te()}var r5=re('<text text-anchor="middle" dominant-baseline="central"> </text>'),o5=re('<g class="corner-tool"><!><!></g>');function i5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D();let s=$(e,"cornerTool",8);const c=s().cells,u=Mn(s().toolId,Rt)??Ih,_=new Te(c[c.length-1].c,c[c.length-1].r);function g(C,I){return I===B.TEXT_ONLY?C.value?C.value:"-":C.value??""}G(()=>J(s()),()=>{x(n,s().shape??u)}),G(()=>(v(n),B),()=>{var C;x(r,((C=v(n))==null?void 0:C.type)??B.CIRCLE)}),G(()=>v(n),()=>{var C;x(o,((C=v(n))==null?void 0:C.fontSize)??.2)}),G(()=>v(n),()=>{var C;x(a,((C=v(n))==null?void 0:C.fontColor)??"black")}),ve(),de();var h=Le(),p=le(h);{var m=C=>{var I=o5(),O=q(I);ol(O,{get cx(){return _.x},get cy(){return _.y},get shape(){return v(n)}});var w=H(O);{var N=F=>{Xk(F,{get cornerTool(){return s()}})},R=F=>{var M=r5(),z=q(M,!0);Z(()=>nt(z,g(s(),v(r)))),P(M),Z(()=>{A(M,"x",_.x),A(M,"y",_.y),A(M,"font-size",v(o)),A(M,"fill",v(a))}),S(F,M)};fe(w,F=>{s().toolId===f.QUADRUPLE?F(N):F(R,!1)})}P(I),S(C,I)};fe(p,C=>{c.length===4&&C(m)})}S(t,h),te()}var a5=re("<g></g>"),s5=re('<g class="corner-tools-layer" mask="url(#fog-mask-fog)"></g>');function l5(t,e){ee(e,!1);const n=Ve(),r=()=>he(HR,"$cornerToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=s5();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=a5();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{i5(h,{get cornerTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var c5=re('<path class="arrow-line" fill="none"></path>'),u5=re('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function d5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),g=D(),h=D();let p=$(e,"arrowTool",8),m=$(e,"arrowId",8),C=$(e,"boundingBox",8);const I=Mn(p().toolId,Rt)??_O,O="round",w="round",N=crypto.randomUUID(),R=`arrow-mask-${m()}-${N}`,F=`arrow-marker-${m()}-${N}`;G(()=>J(p()),()=>{x(n,p().shape??I)}),G(()=>J(C()),()=>{x(r,C().x)}),G(()=>J(C()),()=>{x(o,C().y)}),G(()=>v(n),()=>{var ce;x(a,((ce=v(n))==null?void 0:ce.r)??.4)}),G(()=>v(n),()=>{var ce;x(s,((ce=v(n))==null?void 0:ce.stroke)??"gray")}),G(()=>v(n),()=>{var ce;x(c,((ce=v(n))==null?void 0:ce.strokeWidth)??.1)}),G(()=>v(n),()=>{var ce;x(u,((ce=v(n))==null?void 0:ce.strokeDasharray)??0)}),G(()=>v(n),()=>{var ce;x(_,((ce=v(n))==null?void 0:ce.opacity)??.8)}),G(()=>(v(a),v(n)),()=>{var ce,be,Ie,Ce;x(g,{shortenHead:v(a),shortenTail:((be=(ce=v(n))==null?void 0:ce.linePathOptions)==null?void 0:be.shortenTail)??.2,bezierRounding:((Ce=(Ie=v(n))==null?void 0:Ie.linePathOptions)==null?void 0:Ce.bezierRounding)??.4})}),G(()=>J(p()),()=>{x(h,du(p().cells))}),ve(),de();var M=u5(),z=q(M);A(z,"id",R);var V=q(z),K=H(V);P(z);var se=H(z);rl(se,{id:F,l:.2,get strokeWidth(){return v(c)},get stroke(){return v(s)}});var _e=H(se);A(_e,"mask",`url(#${R??""})`);var ie=H(_e);We(ie,1,()=>p().lines,gt,(ce,be)=>{var Ie=Le(),Ce=le(Ie);{var He=ut=>{var xe=c5();Z(()=>A(xe,"d",du(v(be),v(g)))),A(xe,"stroke-linejoin",O),A(xe,"stroke-linecap",w),A(xe,"marker-end",`url(#${F??""})`),Z(()=>{A(xe,"stroke",v(s)),A(xe,"stroke-width",v(c)),A(xe,"opacity",v(_)),A(xe,"stroke-dasharray",v(u))}),S(ut,xe)};fe(Ce,ut=>{v(be).length>1&&ut(He)})}S(ce,Ie)}),P(M),Z(()=>{A(z,"x",v(r)),A(z,"y",v(o)),A(V,"x",v(r)),A(V,"y",v(o)),A(K,"stroke-width",2*v(a)-v(c)),A(K,"d",v(h)),A(_e,"d",v(h)),A(_e,"stroke-width",2*v(a)+v(c)),A(_e,"stroke",v(s))}),S(t,M),te()}var f5=re("<g></g>"),_5=re('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function g5(t,e){ee(e,!1);const n=Ve(),r=()=>he(BR,"$arrowToolsStore",n),o=D();let a=$(e,"boundingBox",8);G(()=>r(),()=>{x(o,r())}),ve();var s=_5();We(s,5,()=>v(o),gt,(c,u)=>{let _=()=>v(u).toolId,g=()=>v(u).element;var h=f5();We(h,5,()=>Object.entries(g()),p=>p[0],(p,m)=>{d5(p,{get arrowId(){return v(m)[0]},get arrowTool(){return v(m)[1]},get boundingBox(){return a()}})}),P(h),Z(()=>Gn(h,`element-group ${_()}`)),S(c,h)}),P(s),S(t,s),te()}var h5=re('<!><path fill="none"></path>',1);function v5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"singleCellArrowTool",8),u=$(e,"id",8);const _=c().cell,g=Mn(c().toolId,Rt)??dO,h=.3;function p(N,R){const F=Us(R),M=new Te(F.c,F.r).normalise().scale(h),z=Zn(N),V=z.subtract(M),K=z.add(M);return[V,K]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;G(()=>J(c()),()=>{x(n,c().direction)}),G(()=>J(c()),()=>{x(r,c().shape??g)}),G(()=>v(r),()=>{x(o,v(r).strokeWidth??.1)}),G(()=>v(r),()=>{x(a,v(r).stroke??"black")}),G(()=>v(n),()=>{x(s,tl(p(_,v(n))))}),ve(),de();var I=h5(),O=le(I);rl(O,{id:C,l:.15,get stroke(){return v(a)},get strokeWidth(){return v(o)}});var w=H(O);A(w,"marker-end",`url(#${C??""})`),Z(()=>{A(w,"d",v(s)),A(w,"stroke",v(a)),A(w,"stroke-width",v(o))}),S(t,I),te()}var p5=re('<path fill="none"></path>'),m5=re("<!><!>",1);function C5(t,e){ee(e,!1);const n=D(),r=D(),o=D();let a=$(e,"singleCellMultiArrowTool",8),s=$(e,"id",8);const c=a().cell,u=Mn(a().toolId,Rt)??fO,_=.2;function g(w,N){const R=Us(N),F=new Te(R.c,R.r),z=Zn(w).add(F.scale(.4));return[z.subtract(F.normalise().scale(_)),z]}function h(w){return tl(g(c,w))}const p=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${p}`;G(()=>J(a()),()=>{x(n,a().shape??u)}),G(()=>v(n),()=>{x(r,v(n).strokeWidth??.08)}),G(()=>v(n),()=>{x(o,v(n).stroke??"black")}),ve(),de();var C=m5(),I=le(C);rl(I,{id:m,l:.1,get stroke(){return v(o)},get strokeWidth(){return v(r)}});var O=H(I);We(O,1,()=>a().directions,gt,(w,N)=>{var R=p5();Z(()=>A(R,"d",h(v(N)))),A(R,"marker-end",`url(#${m??""})`),Z(()=>{A(R,"stroke",v(o)),A(R,"stroke-width",v(r))}),S(w,R)}),S(t,C),te()}var E5=re('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Fg(t,e){ee(e,!1);const n=Ve(),r=()=>he(MR,"$minimumConstraintsStore",n),o=()=>he(FR,"$maximumConstraintsStore",n),a=D(),s=D(),c=D();let u=$(e,"coord",8),_=$(e,"minOrMax",8);function g(O,w){const N=[!0,!0,!0,!0];let R=[[0,-1],[1,0],[0,1],[-1,0]];console.log(O);for(let F=0;F<R.length;F++){let M=R[F];const z={r:O.r+M[1],c:O.c+M[0]};console.log(z),N[F]=!Object.values(w).some(V=>qe(z,V.cell))}return N}function h(O,w){let N=ek(_(),O.r,O.c);const R=g(O,w);return N=N.filter((M,z)=>R[z]),N.map(M=>Ci(M,!1)).join("")}function p(O,w){return _()==="max"?w:O}G(()=>J(u()),()=>{x(a,u().c)}),G(()=>J(u()),()=>{x(s,u().r)}),G(()=>(r(),o()),()=>{x(c,p(r(),o()))}),G(()=>v(c),()=>{console.log(v(c))}),ve(),de();var m=E5(),C=q(m);A(C,"width",1),A(C,"height",1);var I=H(C);Z(()=>A(I,"d",h(u(),v(c)))),P(m),Z(()=>{A(C,"x",v(a)),A(C,"y",v(s))}),S(t,m),te()}var I5=re('<g class="single-cell-tool"><!><!></g>');function b5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"singleCellTool",8),u=$(e,"id",8);const _=c().cell,g=Mn(c().toolId,Rt)??uO;G(()=>J(c()),()=>{x(n,c().shape??g)}),G(()=>(v(n),B),()=>{var w;x(r,((w=v(n))==null?void 0:w.type)||B.CIRCLE)}),G(()=>{},()=>{x(o,{x:_.c+.5,y:_.r+.5})}),G(()=>Te,()=>{x(a,new Te(_.c,_.r))}),G(()=>J(c()),()=>{x(s,c().value)}),ve(),de();var h=I5(),p=q(h);{var m=w=>{Fg(w,{coord:_,minOrMax:"min"})},C=w=>{var N=Le(),R=le(N);{var F=z=>{Fg(z,{coord:_,minOrMax:"max"})},M=z=>{var V=Le(),K=le(V);{var se=ie=>{yv(ie,{cells:[_],get shape(){return v(n)},get value(){return c().value}})},_e=ie=>{ol(ie,{get cx(){return v(o).x},get cy(){return v(o).y},get shape(){return v(n)}})};fe(K,ie=>{v(r)===B.CAGE?ie(se):ie(_e,!1)},!0)}S(z,V)};fe(R,z=>{c().toolId===f.MAXIMUM?z(F):z(M,!1)},!0)}S(w,N)};fe(p,w=>{c().toolId===f.MINIMUM?w(m):w(C,!1)})}var I=H(p);{var O=w=>{oa(w,{get value(){return v(s)},get x(){return v(a).x},get y(){return v(a).y},position:"TL"})};fe(I,w=>{v(r)!==B.CAGE&&v(s)&&w(O)})}P(h),Z(()=>A(h,"id",`constraint-${u()}`)),S(t,h),te()}var w5=re("<g></g>"),O5=re('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function L5(t,e){ee(e,!1);const n=Ve(),r=()=>he(dd,"$singleCellToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=O5();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=w5();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{var m=Le(),C=le(m);{var I=w=>{v5(w,{get singleCellArrowTool(){return v(p)[1]},get id(){return v(p)[0]}})},O=w=>{var N=Le(),R=le(N);{var F=z=>{C5(z,{get singleCellMultiArrowTool(){return v(p)[1]},get id(){return v(p)[0]}})},M=z=>{var V=Le(),K=le(V);{var se=_e=>{b5(_e,{get singleCellTool(){return v(p)[1]},get id(){return v(p)[0]}})};fe(K,_e=>{v(p)[1].type==="SIMPLE"&&_e(se)},!0)}S(z,V)};fe(R,z=>{v(p)[1].type==="MULTIARROW"?z(F):z(M,!1)},!0)}S(w,N)};fe(C,w=>{v(p)[1].type==="ARROW"?w(I):w(O,!1)})}S(h,m)}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var y5=re('<line class="svelte-yr67cf"></line>');function A5(t,e){ee(e,!1);const n=D(),r=D(),o=D();let a=$(e,"shape",8),s=$(e,"coords",8);const[c,u]=s(),_=u.c,g=c.c===u.c?u.c+1:u.c,h=u.r,p=c.r===u.r?u.r+1:u.r;console.log("border line"),G(()=>J(a()),()=>{x(n,a().stroke??"black")}),G(()=>J(a()),()=>{var C;x(r,(C=a())==null?void 0:C.opacity)}),G(()=>J(a()),()=>{x(o,a().strokeWidth??.02)}),ve(),de();var m=y5();A(m,"x1",_),A(m,"x2",g),A(m,"y1",h),A(m,"y2",p),Z(()=>{A(m,"stroke",v(n)),A(m,"stroke-width",v(o)),A(m,"opacity",v(r))}),S(t,m),te()}var x5=re('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function S5(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"edgeTool",8);const u=c().cells,_=Mn(c().toolId,Rt)??Eh;function g(I,O){return O===B.TEXT_ONLY?I.value?I.value:"-":I.value??""}function h(){if(c().toolId!==f.EDGE_INEQUALITY)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}G(()=>J(c()),()=>{x(n,c().shape??_)}),G(()=>Ns,()=>{x(r,sL(Ns(u)))}),G(()=>(v(n),B),()=>{var I;x(o,((I=v(n))==null?void 0:I.type)||B.CIRCLE)}),G(()=>v(n),()=>{var I;x(a,((I=v(n))==null?void 0:I.fontSize)??.2)}),G(()=>v(n),()=>{var I;x(s,((I=v(n))==null?void 0:I.fontColor)??"black")}),ve(),de();var p=Le(),m=le(p);{var C=I=>{var O=x5(),w=q(O);{var N=z=>{wo(z,{get x(){return v(r).x},get y(){return v(r).y},get shape(){return v(n)}})},R=z=>{var V=Le(),K=le(V);{var se=ie=>{wo(ie,{get x(){return v(r).x},get y(){return v(r).y},get shape(){return v(n)}})},_e=ie=>{var ce=Le(),be=le(ce);{var Ie=He=>{A5(He,{coords:u,get shape(){return v(n)}})},Ce=He=>{ol(He,{get cx(){return v(r).x},get cy(){return v(r).y},get shape(){return v(n)}})};fe(be,He=>{v(o)===B.BORDER_LINE?He(Ie):He(Ce,!1)},!0)}S(ie,ce)};fe(K,ie=>{v(o)===B.TEXT_ONLY?ie(se):ie(_e,!1)},!0)}S(z,V)};fe(w,z=>{c().toolId===f.EDGE_INEQUALITY?z(N):z(R,!1)})}var F=H(w);Z(()=>A(F,"transform",`rotate(${h()}, ${v(r).x}, ${v(r).y} )`));var M=q(F,!0);Z(()=>nt(M,g(c(),v(o)))),P(F),P(O),Z(()=>{A(F,"x",v(r).x),A(F,"y",v(r).y),A(F,"font-size",v(a)),A(F,"fill",v(s))}),S(I,O)};fe(m,I=>{u.length===2&&I(C)})}S(t,p),te()}var N5=re("<g></g>"),D5=re('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function T5(t,e){ee(e,!1);const n=Ve(),r=()=>he($R,"$edgeToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=D5();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=N5();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{S5(h,{get edgeTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}function R5(t,e){const n=t.getRow(e.r);return new Set(n)}function k5(t,e){const n=t.getCol(e.c);return new Set(n)}function G5(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function M5(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function F5(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function $5(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function U5(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function H5(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function P5(t,e,n){let r=new Set;const a=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),_=c.findIndex(h=>h===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const h=c.filter((p,m)=>m!==_);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...c])),r}function B5(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function W5(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function Y5(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(f.ANTIKNIGHT)&&(r=r.union(M5(t,o))),e.get(f.ANTIKING)&&(r=r.union(F5(t,o))),e.get(f.DISJOINT_GROUPS)&&(r=r.union($5(t,o))),e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(H5(t,o))),e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(U5(t,o)))),r}function zc(t,e,n,r,o){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=W5(t,n,c);o=new Set([...o,...u])}return o}function z5(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;const a=e.get(f.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=P5(t,o,u);r=new Set([...r,..._])}const s=e.get(f.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=B5(t,o,u);r=new Set([...r,..._])}return r=zc(t,e,o,f.KILLER_CAGE,r),r=zc(t,e,o,f.PARITY_BALANCE_CAGE,r),r=zc(t,e,o,f.SPOTLIGHT_CAGE,r),r}function Av(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,a=t.localConstraints;if(!r)return n;r.get(f.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...R5(o,e),...k5(o,e),...G5(o,e)])),n=new Set([...n,...Y5(o,r,e)]),n=new Set([...n,...z5(o,a,e)]);const s=o.getCell(e.r,e.c);return s&&n.delete(s),n}function V5(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(Av(t,a));const r=n.reduce((a,s)=>a.intersection(s)),o=[];for(const a of r)o.push(a.toCoords());return o}var j5=re('<tspan class="svelte-8mb99u"> </tspan>'),q5=re('<g class="center-marks-group"><text class="center-mark svelte-8mb99u" dominant-baseline="central"></text></g>');function K5(t,e){ee(e,!1);const n=D();let r=$(e,"cell",8),o=$(e,"seen_values",8);const a=.25;function s(g){return o().find(p=>p===g)!==void 0}G(()=>J(r()),()=>{x(n,Zn({r:r().r,c:r().c}))}),ve(),de();var c=Le(),u=le(c);{var _=g=>{var h=q5(),p=q(h);A(p,"font-size",a),We(p,5,()=>r().centerMarks,gt,(m,C)=>{var I=j5();const O=Xe(()=>s(v(C)));Z(()=>Lt(I,"conflict",v(O)));var w=q(I,!0);P(I),Z(()=>nt(w,v(C))),S(m,I)}),P(p),P(h),Z(()=>{A(p,"x",v(n).x),A(p,"y",v(n).y),A(p,"textLength",r().centerMarks.length>5?"0.9":void 0)}),S(g,h)};fe(u,g=>{r().centerMarks.length&&g(_)})}S(t,c),te()}var X5=re('<text class="corner-mark svelte-1ntffp0" dominant-baseline="central"> </text>'),Z5=re('<g class="corner-marks-group"></g>');function Q5(t,e){ee(e,!1);let n=$(e,"cell",8),r=$(e,"seen_values",8);const o=.25,a=.28;function s(h){const p=h.cornerMarks.slice(0,8),m=Zn({r:h.r,c:h.c});return p.map((C,I)=>{const O=QR(I,a);return{pos:m.add(O),value:C,idx:I}})}function c(h){return r().find(m=>m===h)!==void 0}de();var u=Le(),_=le(u);{var g=h=>{var p=Z5();We(p,5,()=>s(n()),gt,(m,C)=>{let I=()=>v(C).pos,O=()=>v(C).value;var w=X5();A(w,"font-size",o);const N=Xe(()=>c(O()));var R=q(w,!0);P(w),Z(()=>{A(w,"x",I().x),A(w,"y",I().y),Lt(w,"conflict",v(N)),nt(R,O())}),S(m,w)}),P(p),S(h,p)};fe(_,h=>{n().cornerMarks.length&&h(g)})}S(t,u),te()}var J5=re('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),e3=re('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),t3=re('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),n3=re("<!><!>",1),r3=re('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function o3(t,e){ee(e,!1);const n=Ve(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(_a,"$puzzleStore",n),a=()=>he(Xt,"$toolStore",n),s=D(),c=D(),u=D(),_=D(),g=D(),h=D(),p=D();let m=$(e,"cell",8);const C=.8,I=400;function O(M,z){if(!M)return[];let K=[...Av(v(g),z.toCoords())].map(se=>se.value).filter(se=>se!==null);return K=[...new Set(K)],K}function w(M){return M?"1":"0"}G(()=>J(m()),()=>{x(s,m().value)}),G(()=>J(m()),()=>{x(c,m().given)}),G(()=>J(m()),()=>{x(u,Zn({r:m().r,c:m().c}))}),G(()=>r(),()=>{x(_,r().highlightPencilmarkConflicts)}),G(()=>o(),()=>{x(g,o())}),G(()=>r(),()=>{x(h,r().showSolution)}),G(()=>(v(_),J(m())),()=>{x(p,O(v(_),m()))}),ve(),de();var N=Le(),R=le(N);{var F=M=>{var z=r3(),V=q(z);{var K=_e=>{var ie=Le(),ce=le(ie);{var be=Ie=>{var Ce=J5();A(Ce,"font-size",C),A(Ce,"font-weight",I);var He=q(Ce,!0);P(Ce),Z(()=>{A(Ce,"x",v(u).x),A(Ce,"y",v(u).y),nt(He,m().region)}),S(Ie,Ce)};fe(ce,Ie=>{m().region!==null&&Ie(be)})}S(_e,ie)},se=_e=>{var ie=Le(),ce=le(ie);{var be=Ce=>{var He=Le(),ut=le(He);{var xe=Ee=>{var ht=e3();A(ht,"font-size",C),A(ht,"font-weight",I);var ct=q(ht,!0);Z(()=>nt(ct,w(m().fog))),P(ht),Z(()=>{A(ht,"x",v(u).x),A(ht,"y",v(u).y)}),S(Ee,ht)};fe(ut,Ee=>{m().fog!==null&&Ee(xe)})}S(Ce,He)},Ie=Ce=>{var He=Le(),ut=le(He);{var xe=ht=>{var ct=t3();A(ct,"font-size",C),A(ct,"font-weight",I);var fn=q(ct,!0);P(ct),Z(()=>{A(ct,"x",v(u).x),A(ct,"y",v(u).y),Lt(ct,"given",v(c)),nt(fn,v(s))}),S(ht,ct)},Ee=ht=>{var ct=n3(),fn=le(ct);Q5(fn,{get cell(){return m()},get seen_values(){return v(p)}});var $n=H(fn);K5($n,{get cell(){return m()},get seen_values(){return v(p)}}),S(ht,ct)};fe(ut,ht=>{v(s)!==null?ht(xe):ht(Ee,!1)},!0)}S(Ce,He)};fe(ce,Ce=>{a()===f.FOG?Ce(be):Ce(Ie,!1)},!0)}S(_e,ie)};fe(V,_e=>{a()===f.REGIONS?_e(K):_e(se,!1)})}P(z),Z(()=>Lt(z,"hide-given",m().given)),S(M,z)};fe(R,M=>{v(h)||M(F)})}S(t,N),te()}var i3=re("<path></path>"),a3=re('<g class="highlights-group"></g>');function s3(t,e){ee(e,!1);const n=Ve(),r=()=>he(Xt,"$toolStore",n);let o=$(e,"cell",8);function a(_){const g=Zn({r:o().r,c:o().c}),h=o().highlights.length;return o().highlights.map((m,C)=>{let I=XR(C,h);I=I.map(w=>w.add(g));const O=Ci(I,!0);return{colorId:m,d:O}})}de();var s=Le(),c=le(s);{var u=_=>{var g=Le(),h=le(g);{var p=m=>{var C=a3();We(C,5,()=>a(o()),gt,(I,O)=>{let w=()=>v(O).colorId,N=()=>v(O).d;var R=i3();Z(()=>{Gn(R,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),A(R,"d",N())}),S(I,R)}),P(C),S(m,C)};fe(h,m=>{o().highlights.length&&m(p)})}S(_,g)};fe(c,_=>{r()!==f.REGIONS&&_(u)})}S(t,s),te()}var l3=re('<path class="cell-marker" fill="none"></path>'),c3=re('<circle fill="none" opacity="0.9"></circle>');function u3(t,e){ee(e,!1);const n=D(),r=D();let o=$(e,"marker",8);const a=.3,s=.08;G(()=>J(o()),()=>{x(n,Lv(o(),a))}),G(()=>J(o()),()=>{x(r,nl(o().colorId,"black"))}),ve(),de();var c=Le(),u=le(c);{var _=h=>{var p=l3();A(p,"stroke-width",s),Z(()=>{A(p,"d",v(n)),A(p,"stroke",v(r))}),S(h,p)},g=h=>{var p=c3();A(p,"r",a),A(p,"stroke-width",s),Z(()=>{Gn(p,`cell-marker color-${o().colorId??""}`),A(p,"cx",o().c),A(p,"cy",o().r),A(p,"stroke",v(r))}),S(h,p)};fe(u,h=>{o().marker==="X"?h(_):h(g,!1)})}S(t,c),te()}var d3=re('<g class="cell-markers"></g>');function f3(t,e){let n=$(e,"markers",8);var r=d3();We(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,a)=>{u3(o,{get marker(){return v(a)}})}),P(r),S(t,r)}var _3=re('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function g3(t,e){ee(e,!1);const n=D();let r=$(e,"draftLineMarker",8);const o=.2;function a(u){return u.map(g=>[new Te(g.p1.c,g.p1.r),new Te(g.p2.c,g.p2.r)]).flat()}function s(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?nl(_,"black"):"darkred"}G(()=>J(r()),()=>{x(n,Ci(a(r().draftLine)))}),ve(),de();var c=_3();Z(()=>A(c,"stroke",s(r()))),A(c,"stroke-width",o),A(c,"opacity",.5),Z(()=>A(c,"d",v(n))),S(t,c),te()}var h3=re('<path fill="none" opacity="0.9"></path>');function v3(t,e){ee(e,!1);const n=D(),r=D();let o=$(e,"marker",8);const a=.08,s=.04;G(()=>J(o()),()=>{x(n,Lv(o(),a))}),G(()=>J(o()),()=>{x(r,nl(o().colorId,"black"))}),ve(),de();var c=h3();A(c,"stroke-width",s),Z(()=>{A(c,"d",v(n)),Gn(c,`edge-marker color-${o().colorId??""}`),A(c,"stroke",v(r))}),S(t,c),te()}var p3=re('<g class="edge-markers"></g>');function m3(t,e){let n=$(e,"markers",8);var r=p3();We(r,5,n,o=>`${o.r}, ${o.c}`,(o,a)=>{v3(o,{get marker(){return v(a)}})}),P(r),S(t,r)}var C3=re('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),E3=re('<g class="line-markers svelte-yha19m"></g>');function I3(t,e){ee(e,!1);let n=$(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function a(c){return nl(c,"black")}de();var s=E3();We(s,5,n,c=>o(c),(c,u)=>{var _=C3();A(_,"stroke-width",r),Z(()=>A(_,"stroke",a(v(u).colorId))),Z(()=>{A(_,"x1",v(u).p1.c),A(_,"y1",v(u).p1.r),A(_,"x2",v(u).p2.c),A(_,"y2",v(u).p2.r),Gn(_,`line-marker color-${v(u).colorId??""} svelte-yha19m`)}),S(c,_)}),P(s),S(t,s),te()}var b3=re('<g class="pen-tool"><!><!><!><!></g>');function w3(t,e){ee(e,!1);const n=Ve(),r=()=>he(ws,"$penToolStore",n),o=D();G(()=>r(),()=>{x(o,{draftLine:r().draftLine,mode:r().mode})}),ve(),de();var a=b3(),s=q(a);I3(s,{get lineMarkers(){return r().lineMarkers}});var c=H(s);m3(c,{get markers(){return r().edgeMarkers}});var u=H(c);f3(u,{get markers(){return r().cellMarkers}});var _=H(u);g3(_,{get draftLineMarker(){return v(o)}}),P(a),S(t,a),te()}var O3=re('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function L3(t,e){ee(e,!1);const n=Ve(),r=()=>he(Io,"$selectionStore",n),o=()=>he(Wt,"$settingsStore",n),a=()=>he(_a,"$puzzleStore",n),s=()=>he(Xt,"$toolStore",n),c=D(),u=D(),_=D(),g=D(),h={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function p(O,w){return O.length?V5(v(_),O):[]}G(()=>r(),()=>{x(c,r().cells)}),G(()=>o(),()=>{x(u,o().highlightCellsSeenBySelection)}),G(()=>a(),()=>{x(_,a())}),G(()=>s(),()=>{x(g,Wu(s()))}),ve(),de();var m=Le(),C=le(m);{var I=O=>{var w=O3(),N=q(w),R=Xe(()=>p(v(c),v(_)));Ds(N,{get cells(){return v(R)},shape:h}),P(w),S(O,w)};fe(C,O=>{v(u)&&v(g)&&O(I)})}S(t,m),te()}function il(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),o=[...Ph(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&o.includes(a.value))),e}function y3(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...il(r))}return new Set(e)}function A3(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...il(r))}return new Set(e)}function x3(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...il(r))}return new Set(e)}function S3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function N3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function D3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function T3(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),a=il(o);a.length&&e.push(...a)}return new Set(e)}function R3(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...y3(t),...A3(t),...x3(t)]);n=n.union(o)}return e.get(f.ANTIKNIGHT)&&(n=n.union(S3(t))),e.get(f.ANTIKING)&&(n=n.union(N3(t))),e.get(f.NONCONSECUTIVE)&&(n=n.union(D3(t))),e.get(f.DISJOINT_GROUPS)&&(n=n.union(T3(t))),n}function k3(t,e){return[...new Set([...R3(t,e)])]}var G3=re('<rect class="conflict svelte-4mp6ok"></rect>'),M3=re('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function F3(t,e){ee(e,!1);const n=Ve(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(sn,"$gridStore",n),a=()=>he(Dr,"$globalConstraintsStore",n),s=()=>he(an,"$cellsStore",n),c=D(),u=D(),_=D(),g=D();B.CAGE;function h(I){return k3(v(u),v(_)).map(N=>N.toCoords())}G(()=>r(),()=>{x(c,r().checkConflicts)}),G(()=>o(),()=>{x(u,o())}),G(()=>a(),()=>{x(_,a())}),G(()=>s(),()=>{x(g,s())}),ve(),de();var p=Le(),m=le(p);{var C=I=>{var O=M3();We(O,5,()=>h(v(g)),gt,(w,N)=>{var R=G3();A(R,"width",1),A(R,"height",1),Z(()=>{A(R,"x",v(N).c),A(R,"y",v(N).r)}),S(w,R)}),P(O),S(I,O)};fe(m,I=>{v(c)&&I(C)})}S(t,p),te()}var $3=re('<line class="diag svelte-ylotlw"></line>'),U3=re('<line class="antidiag svelte-ylotlw"></line>'),H3=re('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),P3=re('<line class="diag svelte-ylotlw"></line>'),B3=re('<line class="antidiag svelte-ylotlw"></line>'),W3=re('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),Y3=re('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function z3(t,e){ee(e,!1);const n=Ve(),r=()=>he(Dr,"$globalConstraintsStore",n),o=()=>he(sn,"$gridStore",n),a=D(),s=D(),c=D(),u=D(),_=D(),g=D(),h=D(),p=D(),m=D(),C=D(),I=D(),O=D(),w=0,N=0,R=0,F=0;G(()=>r(),()=>{x(a,r())}),G(()=>(v(a),f),()=>{x(s,!!v(a).get(f.POSITIVE_DIAGONAL))}),G(()=>(v(a),f),()=>{x(c,!!v(a).get(f.NEGATIVE_DIAGONAL))}),G(()=>(v(a),f),()=>{x(u,!!v(a).get(f.NEGATIVE_ANTIDIAGONAL))}),G(()=>(v(a),f),()=>{x(_,!!v(a).get(f.POSITIVE_ANTIDIAGONAL))}),G(()=>(v(a),f),()=>{x(g,!!v(a).get(f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),G(()=>(v(a),f),()=>{x(h,!!v(a).get(f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),G(()=>o(),()=>{x(p,o())}),G(()=>v(p),()=>{x(m,v(p).nCols)}),G(()=>v(p),()=>{x(C,v(p).nRows)}),G(()=>v(p),()=>{x(I,v(p).nCols)}),G(()=>v(p),()=>{x(O,v(p).nRows)}),ve(),de();var M=Y3(),z=q(M);{var V=xe=>{var Ee=$3();A(Ee,"x1",w),A(Ee,"y1",N),Z(()=>{A(Ee,"x2",v(I)),A(Ee,"y2",v(O))}),S(xe,Ee)};fe(z,xe=>{v(c)&&xe(V)})}var K=H(z);{var se=xe=>{var Ee=U3();A(Ee,"x1",w),A(Ee,"y1",N),Z(()=>{A(Ee,"x2",v(I)),A(Ee,"y2",v(O))}),S(xe,Ee)};fe(K,xe=>{v(u)&&xe(se)})}var _e=H(K);{var ie=xe=>{var Ee=H3();A(Ee,"x1",w),A(Ee,"y1",N),Z(()=>{A(Ee,"x2",v(I)),A(Ee,"y2",v(O))}),S(xe,Ee)};fe(_e,xe=>{v(g)&&xe(ie)})}var ce=H(_e);{var be=xe=>{var Ee=P3();A(Ee,"x2",F),A(Ee,"y1",R),Z(()=>{A(Ee,"x1",v(m)),A(Ee,"y2",v(C))}),S(xe,Ee)};fe(ce,xe=>{v(s)&&xe(be)})}var Ie=H(ce);{var Ce=xe=>{var Ee=B3();A(Ee,"x2",F),A(Ee,"y1",R),Z(()=>{A(Ee,"x1",v(m)),A(Ee,"y2",v(C))}),S(xe,Ee)};fe(Ie,xe=>{v(_)&&xe(Ce)})}var He=H(Ie);{var ut=xe=>{var Ee=W3();A(Ee,"x2",F),A(Ee,"y1",R),Z(()=>{A(Ee,"x1",v(m)),A(Ee,"y2",v(C))}),S(xe,Ee)};fe(He,xe=>{v(h)&&xe(ut)})}P(M),S(t,M),te()}var V3=re('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function j3(t,e){ee(e,!1);const n=Ve(),r=()=>he(an,"$cellsStore",n),o=()=>he(av,"$showFogStore",n),a=()=>he(Zs,"$solutionStore",n),s=()=>he(sn,"$gridStore",n),c=D(),u=D(),_=D(),g=D(),h=D(),p=D();let m=$(e,"boundingBox",8),C=$(e,"gridShape",8);function I(be){const Ie=be.filter(Ee=>Ee.fog);if(!v(h))return Ie.map(ht=>ht.toCoords());const Ce=be.filter(Ee=>Ee.value===v(h)[Ee.r][Ee.c]);let He=new Set;for(const Ee of Ce){const ht=v(p).getNeighboorCells(Ee);He=new Set([...ht,Ee])}return[...new Set(Ie).difference(He)].map(Ee=>Ee.toCoords())}G(()=>r(),()=>{x(c,r())}),G(()=>v(c),()=>{x(u,I(v(c)))}),G(()=>v(u),()=>{x(_,ni(v(u),0))}),G(()=>o(),()=>{x(g,o())}),G(()=>a(),()=>{x(h,a())}),G(()=>s(),()=>{x(p,s())}),ve(),de();var O=V3(),w=q(O),N=q(w);P(w);var R=H(w),F=q(R);A(F,"stroke-width",.5);var M=H(F);A(M,"stroke-width",.375);var z=H(M);A(z,"stroke-width",.25);var V=H(z);A(V,"stroke-width",.125),mo(),P(R);var K=H(R),se=q(K);mo(),P(K);var _e=H(K),ie=q(_e),ce=H(ie);A(ce,"x",0),A(ce,"y",0),P(_e),P(O),Z(()=>{A(N,"d",v(_)),Lt(R,"disabled",!v(g)),Lt(K,"disabled",!v(g)),A(se,"x",m().x),A(se,"y",m().y),A(se,"width",m().width),A(se,"height",m().height),A(ie,"x",m().x),A(ie,"y",m().y),A(ie,"width",m().width),A(ie,"height",m().height),A(ce,"width",C().nCols),A(ce,"height",C().nRows)}),S(t,O),te()}var q3=re('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function K3(t,e){ee(e,!1);const n=Ve(),r=()=>he(av,"$showFogStore",n),o=D();let a=$(e,"gridShape",8);G(()=>r(),()=>{x(o,r())}),ve(),de();var s=q3(),c=q(s);A(c,"x",0),A(c,"y",0),P(s),Z(()=>{A(s,"visibility",v(o)?"visible":"hidden"),A(c,"width",a().nCols),A(c,"height",a().nRows)}),S(t,s),te()}var X3=re('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function Z3(t,e){ee(e,!1);const n=D();let r=$(e,"r",8),o=$(e,"c",8),a=$(e,"val",8);const s=.8,c=400;G(()=>(J(r()),J(o())),()=>{x(n,Zn({r:r(),c:o()}))}),ve(),de();var u=Le(),_=le(u);{var g=h=>{var p=X3();A(p,"font-size",s),A(p,"font-weight",c);var m=q(p,!0);P(p),Z(()=>{A(p,"x",v(n).x),A(p,"y",v(n).y),nt(m,a())}),S(h,p)};fe(_,h=>{a()!==null&&h(g)})}S(t,u),te()}var Q3=re('<g class="solution-layer"></g>');function J3(t,e){ee(e,!1);const n=Ve(),r=()=>he(Zs,"$solutionStore",n),o=()=>he(Wt,"$settingsStore",n),a=()=>he(Xs,"$gameModeStore",n),s=D(),c=D(),u=D();G(()=>r(),()=>{x(s,r())}),G(()=>o(),()=>{x(c,o().showSolution)}),G(()=>a(),()=>{x(u,a())}),ve(),de();var _=Le(),g=le(_);{var h=p=>{var m=Q3();We(m,5,()=>v(s),gt,(C,I,O)=>{var w=Le(),N=le(w);We(N,1,()=>v(I),gt,(R,F,M)=>{Z3(R,{r:O,c:M,get val(){return v(F)}})}),S(C,w)}),P(m),S(p,m)};fe(g,p=>{v(s)&&v(c)&&v(u)===pi.SETTING&&p(h)})}S(t,_),te()}var eG=re('<text text-anchor="middle" dominant-baseline="central"> </text>'),tG=re('<g class="center-corner-or-edge-tool"><!><!></g>');function nG(t,e){ee(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=$(e,"centerCornerOrEdgeTool",8);const _=u().cell,g=Mn(u().toolId,Rt)??Eh;function h(w,N){return N===B.TEXT_ONLY?w.value?w.value:"-":w.value??""}G(()=>J(u()),()=>{x(n,u().shape??g)}),G(()=>{},()=>{x(r,_)}),G(()=>(v(n),B),()=>{var w;x(o,((w=v(n))==null?void 0:w.type)||B.CIRCLE)}),G(()=>v(n),()=>{var w;x(a,((w=v(n))==null?void 0:w.fontSize)??.2)}),G(()=>v(n),()=>{var w;x(s,((w=v(n))==null?void 0:w.fontColor)??"black")}),G(()=>v(r),()=>{x(c,v(r).r%1===.5&&v(r).c%1===.5)}),ve(),de();var p=tG(),m=q(p);ol(m,{get cx(){return v(r).c},get cy(){return v(r).r},get shape(){return v(n)}});var C=H(m);{var I=w=>{var N=Xe(()=>h(u(),v(o))),R=Xe(()=>Math.floor(v(r).c)),F=Xe(()=>Math.floor(v(r).r));oa(w,{get value(){return v(N)},get x(){return v(R)},get y(){return v(F)},position:"TL",get fontColor(){return v(s)}})},O=w=>{var N=eG(),R=q(N,!0);Z(()=>nt(R,h(u(),v(o)))),P(N),Z(()=>{A(N,"x",v(r).c),A(N,"y",v(r).r),A(N,"font-size",v(a)),A(N,"fill",v(s))}),S(w,N)};fe(C,w=>{v(c)?w(I):w(O,!1)})}P(p),S(t,p),te()}var rG=re("<g></g>"),oG=re('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function iG(t,e){ee(e,!1);const n=Ve(),r=()=>he(UR,"$centerCornerOrEdgeToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve();var a=oG();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=rG();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{nG(h,{get centerCornerOrEdgeTool(){return v(p)[1]}})}),P(g),Z(()=>Gn(g,`element-group ${u()}`)),S(s,g)}),P(a),S(t,a),te()}var aG=re("<!><!>",1),sG=re('<svg class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function lG(t,e){ee(e,!1);const n=Ve(),r=()=>he(sn,"$gridStore",n),o=()=>he(rt,"$localConstraintsStore",n),a=()=>he(Xt,"$toolStore",n),s=()=>he(an,"$cellsStore",n),c=D(),u=D(),_=D();let g=$(e,"svgRef",12,null),h=$(e,"isPreview",8,!1);function p(){for(const[ot,zt]of o().entries()){if(!ta(ot))continue;if(Object.entries(zt).some(([Un,_n])=>!Kt(_n.cell,v(u))))return!0}return!1}function m(ot,zt){const or=p(),Un=ta(zt),_n=or||Un?1:.2,Ii=-_n,ke=-_n,ye=ot.nCols+2*_n,Ge=ot.nRows+2*_n;return{x:Ii,y:ke,width:ye,height:Ge}}function C(ot){return`${ot.x} ${ot.y} ${ot.width} ${ot.height}`}G(()=>r(),()=>{x(c,r())}),G(()=>v(c),()=>{x(u,{nRows:v(c).nRows,nCols:v(c).nCols})}),G(()=>(v(u),a()),()=>{x(_,m(v(u),a()))}),ve(),de();var I=sG();Z(()=>A(I,"viewBox",C(v(_))));var O=q(I);j3(O,{get boundingBox(){return v(_)},get gridShape(){return v(u)}});var w=H(O);K3(w,{get gridShape(){return v(u)}});var N=H(w);Vk(N,{get grid(){return r()}});var R=H(N);Nk(R,{get gridShape(){return v(u)}});var F=H(R);We(F,5,s,gt,(ot,zt)=>{s3(ot,{get cell(){return v(zt)}})}),P(F);var M=H(F);{var z=ot=>{L3(ot,{})};fe(M,ot=>{h()||ot(z)})}var V=H(M);L5(V,{});var K=H(V);Yk(K,{});var se=H(K);yk(se,{});var _e=H(se);_k(_e,{});var ie=H(_e);Rk(ie,{});var ce=H(ie);z3(ce,{});var be=H(ce);Mk(be,{});var Ie=H(be);g5(Ie,{get boundingBox(){return v(_)}});var Ce=H(Ie);ak(Ce,{});var He=H(Ce);{var ut=ot=>{var zt=aG(),or=le(zt);$k(or,{get boundingBox(){return v(_)}});var Un=H(or);xk(Un,{}),S(ot,zt)};fe(He,ot=>{h()||ot(ut)})}var xe=H(He);T5(xe,{});var Ee=H(xe);l5(Ee,{});var ht=H(Ee);iG(ht,{});var ct=H(ht);w3(ct,{});var fn=H(ct);We(fn,5,s,gt,(ot,zt)=>{o3(ot,{get cell(){return v(zt)}})}),P(fn);var $n=H(fn);J3($n,{});var ro=H($n);F3(ro,{}),P(I),Co(I,ot=>g(ot),()=>g()),S(t,I),te()}function cG(t){return bL(t)?(Aw(),!0):!1}function uG(t){return wL(t)?(kh(),!0):!1}function dG(t){return OL(t)?(Gh(),!0):!1}function Vc(t){(cG(t)||uG(t)||dG(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var fG=ne('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function _G(t,e){ee(e,!1);const n=Ve(),r=()=>he(sv,"$InputHandlerStore",n),o=()=>he(ra,"$svgRefStore",n),a=D();let s=D(null);function c(p){return m=>{p&&v(a)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===v(s))&&p(m)}}G(()=>r(),()=>{x(a,r())}),ve();var u=fG();Re("keydown",Rc,function(...p){Vc==null||Vc.apply(this,p)});var _=ig(()=>{var p;return c((p=v(a))==null?void 0:p.keyDown)});Re("keydown",Rc,function(...p){var m;(m=v(_))==null||m.apply(this,p)});var g=ig(()=>{var p;return c((p=v(a))==null?void 0:p.keyUp)});Re("keyup",Rc,function(...p){var m;(m=v(g))==null||m.apply(this,p)});var h=q(u);lG(h,{get svgRef(){return Qg(),o()},set svgRef(p){aa(ra,p)},$$legacy:!0}),P(u),Co(u,p=>x(s,p),()=>v(s)),Re("pointerdown",u,Fc(Xn(p=>{var m;p.currentTarget.focus(),(m=v(a))==null||m.pointerDown(p)})),!0),Re("pointermove",u,Fc(Xn(p=>{var m;p.currentTarget.focus(),(m=v(a))==null||m.pointerMove(p)})),!0),Re("pointerup",u,Fc(Xn(p=>{var m;p.currentTarget.focus(),(m=v(a))==null||m.pointerUp(p)})),!0),S(t,u),te()}var gG=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function xv(t){var e=gG();S(t,e)}var hG=ne('<button class="remove-button svelte-17rdl63"><!></button>');function vG(t,e){let n=$(e,"onTrash",8,()=>{});var r=hG(),o=q(r);xv(o),P(r),Re("click",r,Xn(function(...a){var s;(s=n())==null||s.apply(this,a)})),S(t,r)}var pG=ne('<input type="radio" class="radio-select-button svelte-3561wl">'),mG=ne('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ea(t,e){var se,_e;ee(e,!1);const n=Ve(),r=()=>he(Xt,"$toolStore",n),o=[];let a=$(e,"elementInfo",8),s=$(e,"onClick",12,void 0),c=$(e,"onTrash",8,void 0);const u=a().toolId,_=a().permanent??!1,g=((se=a().menu)==null?void 0:se.name)??a().toolId,h=!((_e=a().meta)!=null&&_e.categories.includes(T.GLOBAL_CONSTRAINT)),p=`label-${g}`;h&&s(()=>{yr(u)});function m(){var Ie,Ce;const ie=(Ie=a().meta)==null?void 0:Ie.description,ce=((Ce=a().meta)==null?void 0:Ce.usage)??CL(u);let be;return ie&&ie.length&&(be=ie),ce.length&&(be?be=be+`

`+ce:be=ce),be}de();var C=mG(),I=q(C);{var O=ie=>{var ce=pG();qt(ce),A(ce,"id",p),ce.value=(ce.__value=u)==null?"":u,Gs(o,[],ce,()=>r(),be=>aa(Xt,be)),S(ie,ce)};fe(I,ie=>{h&&ie(O)})}var w=H(I,2);Z(()=>A(w,"title",m())),A(w,"aria-labelledby",p);var N=q(w),R=q(N),F=q(R);{var M=ie=>{vG(ie,{get onTrash(){return c()}})};fe(F,ie=>{_||ie(M)})}P(R);var z=H(R,2);A(z,"for",p),z.textContent=g,P(N);var V=H(N,2),K=q(V);dt(K,e,"default",{}),P(V),P(w),P(C),Z(()=>Lt(C,"checked",u===r())),Re("click",w,Xn(function(...ie){var ce;(ce=s())==null||ce.apply(this,ie)})),S(t,C),te()}function Sv(t,e){ee(e,!1);const n=Ve(),r=()=>he(rt,"$localConstraintsStore",n);let o=$(e,"toolId",8),a=$(e,"elementHandlers",8);const s=()=>{HD(o());const u=r().get(o());if(!u)return;const _=oL(o()),g=iL(o(),u),h=sa(_,g);on(h)};de();var c=Xe(()=>Lr(o(),a()));ea(t,{get elementInfo(){return v(c)},onTrash:s}),te()}var CG=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function EG(t){var e=CG();S(t,e)}var IG=ne('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function bG(t,e){ee(e,!1);const n=Ve(),r=()=>he(ra,"$svgRefStore",n),o=()=>he(rt,"$localConstraintsStore",n),a=()=>he(gr,"$currentConstraintStore",n),s=D();let c=$(e,"constraintId",8),u=$(e,"toolId",8);function _(){BD(c(),u()),r().focus()}function g(){const w=o().getConstraint(u(),c());if(!w)return;const N=Ku(c(),u()),R=qu(c(),w),F=sa(N,R);on(F)}G(()=>a(),()=>{var w;x(s,(w=a())==null?void 0:w.id)}),ve(),de();var h=IG(),p=q(h),m=q(p);P(p);var C=H(p,2),I=q(C),O=q(I);xv(O),P(I),P(C),P(h),Z(()=>{Lt(h,"active",c()===v(s)),nt(m,`ID: ${c()??""}`)}),Re("click",I,Xn(g)),Re("click",h,_),S(t,h),te()}var wG=ne('<div class="constraint-list svelte-w5npcu"></div>');function Nv(t,e){ee(e,!1);const n=Ve(),r=()=>he(rt,"$localConstraintsStore",n),o=()=>he(Xt,"$toolStore",n),a=D();let s=$(e,"toolId",8);G(()=>(r(),J(s())),()=>{x(a,r().get(s()))}),ve(),de();var c=Le(),u=le(c);{var _=g=>{var h=Xe(()=>s()===o());el(g,{get isOpen(){return v(h)},children:(p,m)=>{var C=wG();We(C,5,()=>Object.entries(v(a)),I=>I[0],(I,O)=>{bG(I,{get constraintId(){return v(O)[0]},get toolId(){return s()}})}),P(C),S(p,C)},$$slots:{default:!0}})};fe(u,g=>{v(a)&&Object.entries(v(a)).length&&g(_)})}S(t,c),te()}var OG=ne('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function LG(t,e){ee(e,!1);let n=$(e,"searchPattern",12,""),r=$(e,"showModal",8),o=D(null);G(()=>(J(r()),v(o)),()=>{r()&&v(o)&&v(o).focus()}),ve();var a=OG(),s=H(q(a),2);qt(s),A(s,"spellcheck",!1),Co(s,c=>x(o,c),()=>v(o)),P(a),qn(s,n),S(t,a),te()}var yG=ne('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function AG(t,e){let n=$(e,"showModal",12),r=$(e,"searchPattern",12,""),o=$(e,"title",8);Tr(t,{get title(){return o()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=yG(),u=q(c);LG(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(p){r(p)},$$legacy:!0});var _=H(u,2),g=q(_),h=q(g);dt(h,e,"default",{}),P(g),P(_),P(c),S(a,c)},$$slots:{default:!0},$$legacy:!0})}var xG=ne('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),SG=ne('<ol class="svelte-cd45on"></ol>'),NG=ne("<!> <!>",1);function DG(t,e){ee(e,!1);const n=D();let r=$(e,"category",8),o=$(e,"addTool",8),a=$(e,"searchResults",8),s=D(!0);G(()=>(J(a()),J(r())),()=>{x(n,a().filter(g=>{var h,p;return(p=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:p.includes(r())}))}),ve(),de();var c=Le(),u=le(c);{var _=g=>{var h=NG(),p=le(h);Vr(p,{get title(){return r()},isCollapsible:!0,get isOpen(){return v(s)},set isOpen(C){x(s,C)},$$legacy:!0});var m=H(p,2);el(m,{get isOpen(){return v(s)},children:(C,I)=>{var O=SG();We(O,5,()=>v(n),gt,(w,N)=>{let R=()=>v(N).key,F=()=>v(N).info;var M=xG(),z=q(M),V=q(z,!0);P(z),P(M),Z(()=>{var K;A(z,"title",(K=F().meta)==null?void 0:K.description),nt(V,R())}),Re("click",z,()=>{o()(R())}),S(w,M)}),P(O),S(C,O)},$$slots:{default:!0}}),S(g,h)};fe(u,g=>{v(n).length&&g(_)})}S(t,c),te()}function TG(t,e){ee(e,!1);const n=D();let r=$(e,"searchPattern",8,""),o=$(e,"addTool",8),a=$(e,"categories",8),s=$(e,"filterFunc",8),c=$(e,"elementHandlers",8);G(()=>(J(r()),J(s()),J(c())),()=>{x(n,nL(r(),s(),c()))}),ve(),de();var u=Le(),_=le(u);We(_,1,a,gt,(g,h)=>{DG(g,{get category(){return v(h)},get searchResults(){return v(n)},get addTool(){return o()}})}),S(t,u),te()}var RG=ne('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function al(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8);var o=RG();A(o,"tabindex",0);var a=q(o),s=q(a);dt(s,e,"add-button",{}),P(a);var c=H(a,2),u=q(c),_=q(u);dt(_,e,"title-icon",{}),P(u);var g=H(u);P(c);var h=H(c,2),p=q(h);P(h),P(o),Z(()=>{nt(g,` ${r()??""}`),Lt(p,"open",n())}),Re("click",o,()=>n(!n())),Re("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),S(t,o)}var kG=ne('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function GG(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8),o=$(e,"showModal",12);function a(){o(!o())}al(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=kG();Re("click",u,Xn(()=>a())),S(s,u)},"title-icon":(s,c)=>{var u=Le(),_=le(u);dt(_,e,"title-icon",{}),S(s,u)}},$$legacy:!0})}var MG=ne('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),FG=ne('<div class="panel-container svelte-hixu4"><!> <!></div>');function sl(t,e){let n=$(e,"isOpen",8,!0);var r=FG(),o=q(r);dt(o,e,"panel-header",{});var a=H(o,2);el(a,{get isOpen(){return n()},children:(s,c)=>{var u=MG(),_=q(u);dt(_,e,"panel-content",{}),P(u),S(s,u)},$$slots:{default:!0}}),P(r),S(t,r)}var $G=ne("<!> <!>",1);function fd(t,e){ee(e,!1);let n=$(e,"categories",8),r=$(e,"title",8),o=$(e,"onAddTool",8),a=$(e,"elementHandlerFilterFunc",8),s=$(e,"elementHandlers",8),c=D(!0),u=D(!1),_=D("");const g=h=>{x(u,!1),x(c,!0),o()(h)};de(),sl(t,{get isOpen(){return v(c)},set isOpen(h){x(c,h)},$$slots:{"panel-header":(h,p)=>{var m=$G(),C=le(m);GG(C,{get title(){return r()},get isOpen(){return v(c)},set isOpen(O){x(c,O)},get showModal(){return v(u)},set showModal(O){x(u,O)},$$slots:{"title-icon":(O,w)=>{var N=Le(),R=le(N);dt(R,e,"title-icon",{}),S(O,N)}},$$legacy:!0});var I=H(C,2);AG(I,{get title(){return r()},get showModal(){return v(u)},set showModal(O){x(u,O)},get searchPattern(){return v(_)},set searchPattern(O){x(_,O)},children:(O,w)=>{TG(O,{get searchPattern(){return v(_)},get categories(){return n()},get filterFunc(){return a()},addTool:g,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),S(h,m)},"panel-content":(h,p)=>{var m=Le(),C=le(m);dt(C,e,"panel-content",{}),S(h,m)}},$$legacy:!0}),te()}var UG=ne("<!> <!>",1);function HG(t,e){ee(e,!1);const n=Ve(),r=()=>he(rt,"$localConstraintsStore",n),o=D();let a=$(e,"elementHandlers",8);const s=[T.COSMETIC_TOOL],c=u=>{Dh(u),yr(u)};G(()=>(r(),T),()=>{x(o,(u,_)=>{var p;const g=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(T.COSMETIC_TOOL))&&!g})}),ve(),de(),fd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return v(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{EG(u)},"panel-content":(u,_)=>{var g=Le(),h=le(g);We(h,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let C=()=>v(m)[0];var I=Le(),O=le(I);{var w=N=>{var R=UG(),F=le(R);Sv(F,{get toolId(){return C()},get elementHandlers(){return a()}});var M=H(F,2);Nv(M,{get toolId(){return C()}}),S(N,R)};fe(O,N=>{qw(C())&&N(w)})}S(p,I)}),S(u,g)}}}),te()}var Dv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Dv||{});const ps=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Tv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function PG(t,e){Dr.update(n=>n.setConstraint(t,e))}function BG(t){Dr.update(e=>e.removeConstraint(t))}function $g(t){t.type===Dv.REMOVE_GLOBAL_CONSTRAINT?BG(t.payload):PG(t.payload.tool,t.payload.value)}function fu(t,e){return{execute:()=>{$g(t)},unExecute:()=>{$g(e)}}}var WG=ne('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function YG(t,e){let n=$(e,"value",8,!1);var r=WG(),o=q(r);qt(o),P(r),Z(()=>rh(o,n())),S(t,r)}function zG(t,e){ee(e,!1);let n=$(e,"toolId",8),r=$(e,"value",8,!1),o=$(e,"elementHandlers",8);const a=()=>{const u=ps(n(),!r()),_=ps(n(),r()),g=fu(u,_);on(g)},s=()=>{const u=Tv(n()),_=ps(n(),r()),g=fu(u,_);on(g)};de();var c=Xe(()=>Lr(n(),o()));ea(t,{get elementInfo(){return v(c)},onClick:a,onTrash:s,children:(u,_)=>{YG(u,{get value(){return r()}})},$$slots:{default:!0}}),te()}var VG=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function jG(t){var e=VG();S(t,e)}function qG(t,e){ee(e,!1);const n=Ve(),r=()=>he(Dr,"$globalConstraintsStore",n),o=D();let a=$(e,"elementHandlers",8);const s=Xw,c=u=>{const _=ps(u,!0),g=Tv(u),h=fu(_,g);on(h)};G(()=>r(),()=>{x(o,(u,_)=>{var p;const g=!!((p=_.meta)!=null&&p.categories.includes(T.GLOBAL_CONSTRAINT)),h=r().has(u);return g&&!h})}),ve(),de(),fd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return v(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{jG(u)},"panel-content":(u,_)=>{var g=Le(),h=le(g);We(h,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let C=()=>v(m)[0],I=()=>v(m)[1];zG(p,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),S(u,g)}}}),te()}var KG=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function XG(t){var e=KG();S(t,e)}var ZG=ne("<!> <!>",1),QG=ne("<!> <!> <!> <!>",1);function JG(t,e){ee(e,!1);const n=Ve(),r=()=>he(rt,"$localConstraintsStore",n),o=D();let a=$(e,"elementHandlers",8);const s=Kw,c=u=>{Dh(u),yr(u)};G(()=>(r(),T),()=>{x(o,(u,_)=>{var p;const g=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(T.LOCAL_CONSTRAINT))&&!g})}),ve(),de(),fd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return v(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{XG(u)},"panel-content":(u,_)=>{var g=QG(),h=le(g),p=Xe(()=>Lr(f.GIVEN,a()));ea(h,{get elementInfo(){return v(p)}});var m=H(h,2),C=Xe(()=>Lr(f.REGIONS,a()));ea(m,{get elementInfo(){return v(C)}});var I=H(m,2),O=Xe(()=>Lr(f.FOG,a()));ea(I,{get elementInfo(){return v(O)}});var w=H(I,2);We(w,1,()=>r().entries(),([N,R])=>N,(N,R)=>{let F=()=>v(R)[0];var M=Le(),z=le(M);{var V=K=>{var se=ZG(),_e=le(se);Sv(_e,{get toolId(){return F()},get elementHandlers(){return a()}});var ie=H(_e,2);Nv(ie,{get toolId(){return F()}}),S(K,se)};fe(z,K=>{Yw(F())&&K(V)})}S(N,M)}),S(u,g)}}}),te()}var e8=ne('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Ug(t,e){ee(e,!1);const n=D();let r=$(e,"value",8),o=$(e,"onChangeCb",8,void 0),a=D(void 0);function s(m){const C=Hc(m);C&&o()&&o()(C)}G(()=>J(r()),()=>{x(n,r())}),G(()=>(v(n),Hc),()=>{au(v(n))&&x(a,Hc(v(n)))}),ve(),de();var c=e8(),u=q(c);const _=Xe(()=>Hh(v(n)));var g=q(u);qt(g),P(u);var h=H(u,2),p=H(q(h),2);qt(p),A(p,"spellcheck",!1),A(p,"maxlength",30),P(h),P(c),Z(()=>{A(u,"style",`--choosen-color: ${v(a)??""}`),Lt(u,"transparent",v(_))}),qn(g,()=>v(n),m=>x(n,m)),Re("change",g,()=>s(v(n))),qn(p,()=>v(n),m=>x(n,m)),Re("input",p,()=>s(v(n))),S(t,c),te()}var t8=ne('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Rs(t,e){let n=$(e,"name",8);var r=t8(),o=q(r),a=q(o,!0);P(o);var s=H(o,2);dt(s,e,"default",{}),P(r),Z(()=>nt(a,n())),S(t,r)}var n8=ne('<input class="control-slider svelte-1rsuho6" type="range">');function r8(t,e){ee(e,!1);let n=$(e,"min",8),r=$(e,"max",8),o=$(e,"value",12),a=$(e,"step",24,()=>(r()-n())/10),s=$(e,"onChangeCb",8,void 0),c=$(e,"onInputCb",8,void 0);de();var u=n8();qt(u),Z(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",a())}),qn(u,o),Re("change",u,()=>{s()&&s()(o())}),Re("input",u,()=>{c()&&c()(o())}),S(t,u),te()}function Yr(t,e){let n=$(e,"name",8),r=$(e,"value",12),o=$(e,"min",8),a=$(e,"max",8),s=$(e,"step",24,()=>(a()-o())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);Rs(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,g)=>{r8(_,{get min(){return o()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var o8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function i8(t){var e=o8();S(t,e)}var a8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function s8(t){var e=a8();S(t,e)}var l8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function c8(t){var e=l8();S(t,e)}var u8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function d8(t){var e=u8();S(t,e)}var f8=ne('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function _8(t,e){ee(e,!1);const n=[];let r=$(e,"value",8),o=$(e,"selectedShape",12),a=$(e,"title",8),s=$(e,"updateShapeCb",8,void 0);de();var c=f8(),u=q(c);qt(u);var _,g=H(u,2);dt(g,e,"default",{}),P(c),Z(()=>{A(c,"title",a()),Lt(c,"active",r()===o()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Gs(n,[],u,()=>(r(),o()),o),Re("change",u,()=>s()&&s()(r())),S(t,c),te()}var g8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function h8(t){var e=g8(),n=q(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),P(e),S(t,e)}var v8=ne('<div class="icon-wrapper svelte-18euf14"><!></div>'),p8=ne('<div class="radio-container svelte-18euf14"></div>');function m8(t,e){ee(e,!1);let n=$(e,"name",8),r=$(e,"selectedShape",8),o=$(e,"possibleShapes",8),a=$(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,c8],[B.ELLIPSE,h8],[B.SQUARE,s8],[B.RECTANGLE,i8],[B.POLYGON,d8]]);de(),Rs(t,{get name(){return n()},children:(c,u)=>{var _=p8();We(_,5,o,gt,(g,h)=>{_8(g,{get title(){return v(h)},get value(){return v(h)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(p,m)=>{var C=Le(),I=le(C);{var O=w=>{var N=v8(),R=q(N);Zg(R,()=>s.get(v(h)),(F,M)=>{M(F,{})}),P(N),S(w,N)};fe(I,w=>{s.has(v(h))&&w(O)})}S(p,C)},$$slots:{default:!0}})}),P(_),S(c,_)},$$slots:{default:!0}}),te()}var C8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function E8(t){var e=C8();S(t,e)}var I8=ne('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),b8=ne("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function w8(t,e){ee(e,!1);const n=Ve(),r=()=>he(Xt,"$toolStore",n),o=()=>he(gr,"$currentConstraintStore",n),a=D(),s=D(),c=D();let u=D(!0),_=$(e,"elementHandlers",8);function g(O,w){const N=(O==null?void 0:O.shape)??(w?Cs(w):void 0);return Yc(N),N}function h(O,w){v(c)&&(Jb(c,v(c)[O]=w),Yc(v(c)),console.log(v(c)))}function p(){v(s)&&(x(c,Cs(v(s))),Yc(v(c)))}function m(O){return O&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function C(O){return O&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function I(O){return O&&[B.ELLIPSE,B.RECTANGLE].includes(O)}G(()=>(r(),J(_())),()=>{x(a,Lr(r(),_()))}),G(()=>v(a),()=>{x(s,v(a).shape)}),G(()=>(o(),v(s)),()=>{var O;x(c,g(((O=o())==null?void 0:O.constraint)??null,v(s)))}),ve(),de(),sl(t,{get isOpen(){return v(u)},set isOpen(O){x(u,O)},$$slots:{"panel-header":(O,w)=>{al(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return v(u)},set isOpen(N){x(u,N)},$$slots:{"title-icon":(N,R)=>{E8(N)}},$$legacy:!0})},"panel-content":(O,w)=>{var N=Le(),R=le(N);{var F=M=>{var z=b8(),V=le(z);{var K=ke=>{var ye=I8();Re("click",ye,p),S(ke,ye)};fe(V,ke=>{lO(v(s))&&ke(K)})}var se=H(V,2);{var _e=ke=>{m8(ke,{get possibleShapes(){return v(s).allowedTypes},name:"Shape",get selectedShape(){return v(c).type},updateShapeCb:ye=>h("type",ye)})};fe(se,ke=>{var ye;v(s).allowedTypes&&v(s).allowedTypes.length&&((ye=v(c))!=null&&ye.type)&&ke(_e)})}var ie=H(se,2);{var ce=ke=>{var ye=Xe(()=>v(s).n.lb??3),Ge=Xe(()=>v(s).n.ub??10);Yr(ke,{name:"Number of Sides",get value(){return v(c).n},get min(){return v(ye)},get max(){return v(Ge)},step:1,onChangeCb:Se=>h("n",Se)})};fe(ie,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.n)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.n)!=null&&Se.editable)&&C(v(c).type)&&ke(ce)})}var be=H(ie,2);{var Ie=ke=>{var ye=Xe(()=>v(s).r.lb??0),Ge=Xe(()=>v(s).r.ub??1),Se=Xe(()=>v(s).r.step??.05);Yr(ke,{name:"Radius",get value(){return v(c).r},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("r",$t)})};fe(be,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.r)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.r)!=null&&Se.editable)&&m(v(c).type)&&ke(Ie)})}var Ce=H(be,2);{var He=ke=>{var ye=Xe(()=>v(s).width.lb??0),Ge=Xe(()=>v(s).width.ub??1),Se=Xe(()=>v(s).width.step??.05);Yr(ke,{name:"Width",get value(){return v(c).width},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("width",$t)})};fe(Ce,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.width)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.width)!=null&&Se.editable)&&I(v(c).type)&&ke(He)})}var ut=H(Ce,2);{var xe=ke=>{var ye=Xe(()=>v(s).height.lb??0),Ge=Xe(()=>v(s).height.ub??1),Se=Xe(()=>v(s).height.step??.05);Yr(ke,{name:"Height",get value(){return v(c).height},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("height",$t)})};fe(ut,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.height)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.height)!=null&&Se.editable)&&I(v(c).type)&&ke(xe)})}var Ee=H(ut,2);{var ht=ke=>{var ye=Xe(()=>v(s).angle.lb??0),Ge=Xe(()=>v(s).angle.ub??360),Se=Xe(()=>v(s).angle.step??15);Yr(ke,{name:"Angle",get value(){return v(c).angle},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("angle",$t)})};fe(Ee,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.angle)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.angle)!=null&&Se.editable)&&ke(ht)})}var ct=H(Ee,2);{var fn=ke=>{var ye=Xe(()=>v(s).inset.lb??0),Ge=Xe(()=>v(s).inset.ub??.5),Se=Xe(()=>v(s).inset.step??.01);Yr(ke,{name:"Inset",get value(){return v(c).inset},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("inset",$t)})};fe(ct,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.inset)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.inset)!=null&&Se.editable)&&ke(fn)})}var $n=H(ct,2);{var ro=ke=>{Rs(ke,{name:"Stroke",children:(ye,Ge)=>{Ug(ye,{get value(){return v(c).stroke},onChangeCb:Se=>h("stroke",Se)})},$$slots:{default:!0}})};fe($n,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.stroke)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.stroke)!=null&&Se.editable)&&ke(ro)})}var ot=H($n,2);{var zt=ke=>{var ye=Xe(()=>v(s).strokeWidth.lb??0),Ge=Xe(()=>v(s).strokeWidth.ub??.8),Se=Xe(()=>v(s).strokeWidth.step??.01);Yr(ke,{name:"Stroke Width",get value(){return v(c).strokeWidth},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("strokeWidth",$t)})};fe(ot,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.strokeWidth)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.strokeWidth)!=null&&Se.editable)&&ke(zt)})}var or=H(ot,2);{var Un=ke=>{var ye=Xe(()=>v(s).strokeDasharray.lb??0),Ge=Xe(()=>v(s).strokeDasharray.ub??1),Se=Xe(()=>v(s).strokeDasharray.step??.01);Yr(ke,{name:"Stroke Dasharray",get value(){return v(c).strokeDasharray},get min(){return v(ye)},get max(){return v(Ge)},get step(){return v(Se)},onChangeCb:$t=>h("strokeDasharray",$t)})};fe(or,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.strokeDasharray)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.strokeDasharray)!=null&&Se.editable)&&ke(Un)})}var _n=H(or,2);{var Ii=ke=>{Rs(ke,{name:"Fill",children:(ye,Ge)=>{Ug(ye,{get value(){return v(c).fill},onChangeCb:Se=>h("fill",Se)})},$$slots:{default:!0}})};fe(_n,ke=>{var ye,Ge,Se;((ye=v(c))==null?void 0:ye.fill)!==void 0&&((Se=(Ge=v(s))==null?void 0:Ge.fill)!=null&&Se.editable)&&ke(Ii)})}S(M,z)};fe(R,M=>{v(s)&&M(F)})}S(O,N)}},$$legacy:!0}),te()}var O8=ne('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function pa(t,e){let n=$(e,"clickCb",8),r=$(e,"title",8);var o=O8(),a=q(o),s=q(a);dt(s,e,"default",{}),P(a),P(o),Z(()=>A(o,"title",r())),Re("click",o,Xn(function(...c){var u;(u=n())==null||u.apply(this,c)})),S(t,o)}var L8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function y8(t){var e=L8();S(t,e)}var A8=ne('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),x8=ne('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),S8=ne('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function N8(t,e){ee(e,!1);const n=Ve(),r=()=>he(Nr,"$puzzleMetaStore",n),o=()=>he(Dr,"$globalConstraintsStore",n),a=()=>he(rt,"$localConstraintsStore",n);let s=$(e,"showModal",12,!1),c=D(""),u=D(""),_=D(""),g=D(""),h=D("");function p(){s(!1)}function m(){const w=v(u)?C(v(u)):["Anonymous"],R={title:v(c)?v(c):"Sudoku",authors:w,ruleset:v(_),ctcYoutubeUrl:v(g),ctcUrl:v(h)};$D(R),s(!1)}function C(w){return w.split(/\s*[;]\s*/)}function I(){var z,V,K,se;let w="";const N=Rt,R=o();!!R.get(f.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[_e,ie]of R.entries())if(_e!==f.SUDOKU_RULES_DO_NOT_APPLY&&ie){const ce=N[_e],be=((z=ce.menu)==null?void 0:z.name)??ce.toolId,Ie=(V=ce.meta)==null?void 0:V.description;w+=`**${be}**: ${Ie}

`}const M=a();for(const[_e,ie]of M.entries())if(Object.keys(ie).length>0){const be=N[_e],Ie=((K=be.menu)==null?void 0:K.name)??be.toolId,Ce=(se=be.meta)==null?void 0:se.description;w+=`**${Ie}**: ${Ce}

`}return w.trim()}function O(){const w=I();x(_,w)}G(()=>(J(s()),r(),Is),()=>{if(!s()){const w=r().authors;x(c,r().title??""),x(u,w?Is(w,"; ","; "):""),x(_,r().ruleset??""),x(g,r().ctcYoutubeUrl??""),x(h,r().ctcUrl??"")}}),ve(),de(),Tr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(w){s(w)},children:(w,N)=>{var R=S8(),F=q(R);Vr(F,{title:"Title"});var M=H(F,2);qt(M);var z=H(M,2);Vr(z,{title:"Authors"});var V=H(z,2);qt(V);var K=H(V,2);Vr(K,{title:"Ruleset",children:(Ce,He)=>{var ut=A8();Re("click",ut,O),S(Ce,ut)},$$slots:{default:!0}});var se=H(K,2);lw(se),A(se,"rows",8);var _e=H(se,2);Vr(_e,{title:"CTC Link"});var ie=H(_e,2);qt(ie);var ce=H(ie,2);Vr(ce,{title:"CTC Youtube Link"});var be=H(ce,2);qt(be);var Ie=H(be,2);Qs(Ie,{children:(Ce,He)=>{var ut=x8(),xe=le(ut),Ee=H(xe,2);Re("click",xe,m),Re("click",Ee,p),S(Ce,ut)},$$slots:{default:!0}}),P(R),qn(M,()=>v(c),Ce=>x(c,Ce)),qn(V,()=>v(u),Ce=>x(u,Ce)),qn(se,()=>v(_),Ce=>x(_,Ce)),qn(ie,()=>v(h),Ce=>x(h,Ce)),qn(be,()=>v(g),Ce=>x(g,Ce)),S(w,R)},$$slots:{default:!0},$$legacy:!0}),te()}var D8=ne("<!> <!>",1);function T8(t){let e=D(!1);function n(){x(e,!0)}var r=D8(),o=le(r);pa(o,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{y8(s)},$$slots:{default:!0}});var a=H(o,2);N8(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var R8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function k8(t){var e=R8();S(t,e)}var G8=ne('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function M8(t,e){ee(e,!1);let n=D(null),r=D(null);function o(){var a;(a=v(n))==null||a.click()}G(()=>(v(r),Ls),()=>{if(v(r)&&v(r).length){const a=v(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),g=FD(_);console.log(g),YD(g),Ls()}},s.onerror=function(){alert(s.error)}}}),ve(),de(),pa(t,{title:"Open Puzzle",clickCb:o,children:(a,s)=>{var c=G8(),u=le(c);k8(u);var _=H(u,2);Co(_,g=>x(n,g),()=>v(n)),Ew(_,()=>v(r),g=>x(r,g)),S(a,c)},$$slots:{default:!0}}),te()}var F8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function $8(t){var e=F8();S(t,e)}var U8=ne('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Hg(t,e){ee(e,!1);let n=$(e,"name",8),r=$(e,"min",8),o=$(e,"max",8),a=$(e,"value",12),s=$(e,"step",24,()=>(o()-r())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);de();var _=U8(),g=q(_),h=q(g);P(g);var p=H(g,2);qt(p),P(_),Z(()=>{nt(h,`${n()??""}: ${a()??""}`),A(p,"min",r()),A(p,"max",o()),A(p,"step",s())}),qn(p,a),Re("change",p,()=>{c()&&c()(a())}),Re("input",p,()=>{u()&&u()(a())}),S(t,_),te()}var H8=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),P8=ne('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function B8(t,e){ee(e,!1);let n=$(e,"showModal",12,!1);const r=4,o=20;let a=D(9),s=D(9),c=D(""),u=D(Gt.range(1,10));function _(){n(!1)}function g(){Ls(),WD(v(s),v(a)),n(!1)}function h(C){return C.map(O=>String(O)).join(",")}function p(){const C=Math.min(Math.max(v(s),v(a)),9);x(u,Gt.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&x(u,C.split(",").map(Number))}de(),Tr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var O=P8(),w=q(O);Hg(w,{name:"Width",min:r,max:o,step:1,onInputCb:p,get value(){return v(a)},set value(V){x(a,V)},$$legacy:!0});var N=H(w,2);Hg(N,{name:"Height",min:r,max:o,step:1,onInputCb:p,get value(){return v(s)},set value(V){x(s,V)},$$legacy:!0});var R=H(N,2),F=Xe(()=>`Allowed Digits: ${h(v(u))}`);Vr(R,{get title(){return v(F)}});var M=H(R,2);qt(M),Z(()=>A(M,"placeholder",h(v(u)))),M.disabled=!0;var z=H(M,2);Qs(z,{children:(V,K)=>{var se=H8(),_e=le(se),ie=H(_e,2);Re("click",_e,g),Re("click",ie,_),S(V,se)},$$slots:{default:!0}}),P(O),qn(M,()=>v(c),V=>x(c,V)),Re("input",M,()=>m(v(c))),S(C,O)},$$slots:{default:!0},$$legacy:!0}),te()}var W8=ne("<!> <!>",1);function Y8(t){let e=D(!1);function n(){x(e,!0)}var r=W8(),o=le(r);pa(o,{title:"New Puzzle",clickCb:n,children:(s,c)=>{$8(s)},$$slots:{default:!0}});var a=H(o,2);B8(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var z8=re('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function V8(t){var e=z8();S(t,e)}var j8=ne('<button class="modal-button">Cancel</button>'),q8=ne('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download Image</button> <button class="modal-button">Download JSON</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"></div></div></div> <!></div>');function K8(t,e){ee(e,!1);const n=Ve(),r=()=>he(_a,"$puzzleStore",n),o=()=>he(Nr,"$puzzleMetaStore",n);let a=$(e,"showModal",12,!1);function s(){}const c=()=>{const g=MD(r());return JSON.stringify(g,null,2)},u=()=>{function g(m,C,I){var O=document.createElement("a"),w=new Blob([m],{type:I});O.href=URL.createObjectURL(w),O.download=C,O.click(),URL.revokeObjectURL(O.href)}const h=c(),p=Bh(o());g(h,`${p}.json`,"text/plain")};function _(){a(!1)}de(),Tr(t,{title:"Save Puzzle",get showModal(){return a()},set showModal(g){a(g)},children:(g,h)=>{var p=q8(),m=q(p),C=q(m),I=q(C),O=H(I,2);P(C),mo(2),P(m);var w=H(m,2);Qs(w,{children:(N,R)=>{var F=j8();Re("click",F,_),S(N,F)},$$slots:{default:!0}}),P(p),Re("click",I,s),Re("click",O,u),S(g,p)},$$slots:{default:!0},$$legacy:!0}),te()}var X8=ne("<!> <!>",1);function Z8(t){let e=D(!1);function n(){x(e,!0)}var r=X8(),o=le(r);pa(o,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{V8(s)},$$slots:{default:!0}});var a=H(o,2);K8(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var Q8=ne("<!> <!>",1);function J8(t){let e=D(!1);function n(){x(e,!0)}var r=Q8(),o=le(r);pa(o,{title:"Settings",clickCb:n,children:(s,c)=>{wv(s)},$$slots:{default:!0}});var a=H(o,2);bv(a,{get showModal(){return v(e)},set showModal(s){x(e,s)},$$legacy:!0}),S(t,r)}var eM=ne('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function tM(t){var e=eM(),n=q(e);Y8(n);var r=H(n,2);Z8(r);var o=H(r,2);M8(o,{});var a=H(o,2);T8(a);var s=H(a,2);J8(s),P(e),S(t,e)}var nM=ne('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function rM(t,e){ee(e,!1);let n=D(!1);function r(){const o=lt(sn),a=[];for(let s=0;s<o.nRows;s++){const c=[];for(let u=0;u<o.nCols;u++){const _=o.getCell(s,u);if(!_)continue;const g=_.value;c.push(g)}a.push(c)}rd(a)}de(),sl(t,{get isOpen(){return v(n)},set isOpen(o){x(n,o)},$$slots:{"panel-header":(o,a)=>{al(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return v(n)},set isOpen(s){x(n,s)},$$legacy:!0})},"panel-content":(o,a)=>{var s=nM();Re("click",s,r),S(o,s)}},$$legacy:!0}),te()}const oM={allow_var:!0,allow_int_list:!1,allow_interval:!1};function iM(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],a=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[a,o]};if(o==="<"||o==="<=")return{upper_bound:[a,o]}}if(r=n.exec(t),r){const o=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,o==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function aM(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function sM(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function lM(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=aM(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=sM(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const a=iM(t);return e.allow_interval&&a?{type:"interval",parsed:a}:null}var pe=(t=>(t.BOARD="board",t.YIN_YANG="yin_yang",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t))(pe||{});function Mt(t,e){return`${e}[${t.r},${t.c}]`}function ll(t,e){return t.map(r=>Mt(r,e))}function Be(t,e){return"["+ll(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ze(t){return t.map(n=>Oe(n))}function cM(t){return`values_grid[${t.r},${t.c}]`}function cl(t){return t.map(e=>cM(e))}function vo(t){return`constraint alldifferent([${t.join(",")}]);
`}function At(t,e){return t&&(t=`
% ${e}
`+t),t}function _d(t,e){const n=[Pe.N,Pe.S,Pe.W,Pe.E],r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o);r.push(a)}return r}function gd(t,e,n=void 0){n||(n=[Pe.N,Pe.S,Pe.W,Pe.E]);const r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o),s="["+ze(a).join(",")+"]";r.push(s)}return r}function ma(t,e,n,r){let o="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);o+=c}return o}class uM{constructor(){ge(this,"model_str","");ge(this,"used_vars",new Set)}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=oM){const o=lM(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let a="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];a+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];a+=`constraint ${n} ${_} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return[a,n]}}function dM(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const O=e[I].trim(),w=O.match(r),N=O.match(o),R=O.match(a);if(w||N||R){s={name:(w||N||R)[1],startLine:I,content:[e[I]]},c=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u+=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length,c===0&&u===0&&O.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let F=s.startLine;for(;F>0&&e[F-1].trim().startsWith("%");)F-=1;n[s.name].startLine=F,s=null}}const _=new Set;function g(I){const O=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&O.push(w);return O}for(const I of e)g(I).forEach(w=>_.add(w));const h=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));h.sort((I,O)=>O.start-I.start);const p=[...e];for(const I of h)p.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of p)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function fM(t){let e=t,n=e.length;for(;e=dM(e),e.length!=n;)n=e.length;return e}const Pg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function _M(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function gM(t,e){const r=t.grid.getPositiveDiagonal(),o=ze(r);let a=vo(o);return a=`
% Positive Diagonal Constraint
`+a,a}function hM(t,e){const r=t.grid.getNegativeDiagonal(),o=ze(r);let a=vo(o);return a=`
% Negative Diagonal Constraint
`+a,a}function vM(t,e){const r=t.grid.getPositiveDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function pM(t,e){const r=t.grid.getNegativeDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function mM(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let g=0;g<u;g++){const h=n.getCell(g,_),p=n.getCell(u,_+(u-g));if(!h||!p)continue;const m=Oe(h),C=Oe(p),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=O}}return a}function CM(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let g=0;g<u;g++){const h=n.getCell(g,_),p=n.getCell(u,_-(u-g));if(!h||!p)continue;const m=Oe(h),C=Oe(p),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=O}}return a}function EM(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let a=0;a<o;a++){const s=n.getDisjointGroup(a),_=`constraint alldifferent(${`[${ze(s).join(",")}]`});
`;r+=_}return r}function IM(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getNeighboorCells(o).filter(h=>h.r+h.c>=o.r+o.c),c=Oe(o),_=`[${ze(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${_});
`;r+=g}return r}function bM(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getCellsByKnightMove(o).filter(h=>h.r>=o.r||h.c>=o.c),c=Oe(o),_=`[${ze(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${_});
`;r+=g}return r}function wM(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=At(n,`${e}`),n}function OM(t,e){let n="";return n+=`constraint tango_p(board);
`,n=At(n,`${e}`),n}function*to(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function LM(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of to(n)){const s=Oe(o),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function yM(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of to(n)){const s=Oe(o),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function AM(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getRow(o.r),c=`[${ze(a).join(",")}]`,u=o.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function xM(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function SM(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function NM(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=At(n,`${e}`),n}function jc(t,e){const n=t.grid,o=t.localConstraints.get(f.XV);if(!(e===f.ALL_V_GIVEN||e===f.ALL_X_GIVEN||e===f.ALL_XV_GIVEN))return"";const a=[];if(o)for(const c of Object.values(o)){const u=c.cells,_=new Set(u.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),g=c.value;(e===f.ALL_V_GIVEN&&(g==="v"||g==="V")||e===f.ALL_X_GIVEN&&(g==="x"||g==="X")||e===f.ALL_XV_GIVEN)&&a.push(_)}let s="";for(const[c,u]of to(n)){if(a.find(p=>p.has(c)&&p.has(u)))continue;const g=Oe(c),h=Oe(u);if(e===f.ALL_V_GIVEN){const p=`constraint ${g} + ${h} != 5;
`;s+=p}else if(e===f.ALL_X_GIVEN){const p=`constraint ${g} + ${h} != 10;
`;s+=p}else{const p=`constraint ${g} + ${h} != 5 /\\ (${g} + ${h} != 10);
`;s+=p}}return s=At(s,`${e}`),s}function ri(t,e){const n=[];if(e)for(const r of Object.values(e)){const o=r.cells,a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function DM(t,e){const n=t.grid,o=t.localConstraints.get(f.XY_DIFFERENCES),a=ri(n,o);let s="";for(const[c,u]of to(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const g=Oe(c),h=Oe(u);let p="";if(c.r==u.r){const I=n.getRow(c.r)[0];p=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];p=Oe(I)}if(!p)continue;const m=`constraint abs(${g} - ${h}) != ${p};
`;s+=m}return s=At(s,`${e}`),s}function TM(t,e){const n=t.grid,r=t.localConstraints,o=r.get(f.DIFFERENCE),a=r.get(f.RATIO);let s=ri(n,o);s=[...s,...ri(n,a)];let c=[];o&&(c=Object.values(o).map(g=>g.value).map(g=>g||"1"));const u=[...new Set(c)];let _="";for(const[g,h]of to(n)){if(s.find(I=>I.has(g)&&I.has(h)))continue;const m=Oe(g),C=Oe(h);for(const I of u){const O=parseInt(I),w=`constraint abs(${m} - ${C}) != ${O};
`;_+=w}}return _=At(_,`${e}`),_}function RM(t,e){const n=t.grid,r=t.localConstraints,o=r.get(f.RATIO),a=r.get(f.DIFFERENCE);let s=ri(n,o);s=[...s,...ri(n,a)];let c=[];o&&(c=Object.values(o).map(g=>g.value).map(g=>g||"2"));const u=[...new Set(c)];let _="";for(const[g,h]of to(n)){if(s.find(I=>I.has(g)&&I.has(h)))continue;const m=Oe(g),C=Oe(h);for(const I of u){const O=parseInt(I),w=`constraint not ratio_p(${m}, ${C}, ${O});
`;_+=w}}return _=At(_,`${e}`),_}function kM(t,e){const n=t.grid,o=t.localConstraints.get(f.YIN_YANG_KROPKI),a=ri(n,o);let s="";for(const[c,u]of to(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const g=Oe(c),h=Oe(u),p=Mt(c,pe.YIN_YANG),m=Mt(u,pe.YIN_YANG),C=`constraint not yin_yang_kropki_p(${g}, ${h}, ${p}, ${m});
`;s+=C}return s=At(s,`${e}`),s}function GM(t,e){const n=t.grid,o=t.localConstraints.get(f.YIN_YANG_COUNT_SHADED_CELLS),a=o?Object.values(o):[];function s(u,_){return u.find(g=>g.cell.r===_.r&&g.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=s(a,u),g=_?_.directions:[],h=Oe(u),p=[Pe.E,Pe.N,Pe.S,Pe.W];for(const m of p){if(g.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=Be(C,pe.YIN_YANG);c+=`constraint count(${I}, 1) != ${h};
`}}return c=At(c,`${e}`),c}function hd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const o=r.cell,a=t.getCell(o.r,o.c);a&&n.add(a)}return n}function MM(t,e){const n=t.grid,o=t.localConstraints.get(f.INDEXING_COLUMN),a=hd(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=n.getRow(c.r),h=`[${ze(_).join(",")}]`,p=c.c+1,m=`constraint not indexing_column_p(${h}, ${p});
`;s+=m}return s=At(s,`${e}`),s}function FM(t,e){const n=t.grid,o=t.localConstraints.get(f.RADAR),a=hd(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=Oe(c),[g,h,p,m]=gd(n,c),C=`constraint not radar_p(${_}, ${g}, ${h}, ${p}, ${m}, 9);
`;s+=C}return s=At(s,`${e}`),s}function $M(t,e){const n=t.grid,o=t.localConstraints.get(f.NURIMISAKI_UNSHADED_ENDPOINTS),a=hd(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,p=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;s+=p}return s=At(s,`${e}`),s}function UM(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of to(n)){const s=Oe(o),c=Oe(a),u=`nurimisaki[${o.r},${o.c}]`,_=`nurimisaki[${a.r},${a.c}]`,g=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=g}return r}function HM(t,e){const n=t.grid,o=t.localConstraints.get(f.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let a=`
% ${e}
`;for(const s of Object.values(o)){const u=s.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),_=Be(u,pe.YIN_YANG);a+=`constraint count_unique_values(${_}) >= 2;
`}return a}function PM(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=At(n,`${e}`),n}function BM(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=At(n,`${e}`),n}function WM(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=At(n,`${e}`),n}function YM(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=At(n,`${e}`),n}function zM(t,e){let n="";return n+=`constraint not_fully_shaded_or_unshaded_2x2_p(cave_shading);
`,n=At(n,`${e}`),n}function VM(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=At(n,`${e}`),n}function jM(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=At(n,`${e}`),n}function qM(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=At(n,`${e}`),n}function KM(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=At(n,`${e}`),n}function XM(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=At(n,`${e}`),n}function ZM(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const a=r.getNeighboorCells(o).filter(_=>o.region!==null&&_.region===o.region),s=Mt(o,pe.BOARD),c=Mt(o,pe.YIN_YANG),u=Be(a,pe.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=At(n,`${e}`),n}function QM(t){const e=t.globalConstraints;if(e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),_=ze(u),g=vo(_);r+=g}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),_=ze(u),g=vo(_);r+=g}if(!e.get(f.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),g=ze(_),h=vo(g);r+=h}}return r}function JM(t){const e=f.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const e6=new Map([[f.POSITIVE_DIAGONAL,gM],[f.NEGATIVE_DIAGONAL,hM],[f.POSITIVE_ANTIDIAGONAL,vM],[f.NEGATIVE_ANTIDIAGONAL,pM],[f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,mM],[f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,CM],[f.ANTIKING,IM],[f.ANTIKNIGHT,bM],[f.ANTI_GIRAFFE,wM],[f.DISJOINT_GROUPS,EM],[f.TANGO,OM],[f.NONCONSECUTIVE,LM],[f.NONRATIO,yM],[f.GLOBAL_INDEXING_COLUMN,AM],[f.ALL_V_GIVEN,jc],[f.ALL_X_GIVEN,jc],[f.ALL_XV_GIVEN,jc],[f.ALL_DIFFERENCES_GIVEN,TM],[f.ALL_RATIOS_GIVEN,RM],[f.ALL_XY_DIFFERENCES_GIVEN,DM],[f.ALL_YIN_YANG_KROPKI_GIVEN,kM],[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,GM],[f.ALL_INDEXING_COLUMN_GIVEN,MM],[f.ALL_RADARS_GIVEN,FM],[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,$M],[f.NURIMISAKI_PATH_GERMAN_WHISPERS,UM],[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,HM],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,NM],[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,xM],[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,SM],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,PM],[f.CAVE_CELLS_ARE_ODD,WM],[f.CAVE_WALLS_ARE_EVEN,YM],[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,zM],[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,VM],[f.YIN_YANG_FILLOMINO_PARITY,BM],[f.TWO_SYMMETRIC_GALAXIES,KM],[f.EVERY_CELL_BELONGS_TO_A_GALAXY,jM],[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,qM],[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,XM],[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,ZM]]);function t6(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=e6.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Rv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function kv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${ze(n.slice(1)).join(",")}]`}function n6(t,e,n,r){let o="";const a=Rv(e,r),s=`arrow_${n}`;if(o+=`var int: ${s};
`,o+=`% arrow pill
`,a.length===1){const u=a[0];o+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((_,g)=>`${Math.pow(10,g)}*${_}`).join(" + ");o+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;o+=`% arrow lines
`;for(const u of c){const g=`constraint sum(${kv(e,u)}) == ${s};
`;o+=g}return o}function r6(t,e,n,r){let o="";const a=Rv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${kv(e,u)}, ${s});
`;o+=g}}return o}const o6=new Map([[f.ARROW,n6],[f.AVERAGE_ARROW,r6]]);function i6(t,e,n,r){let o="";const a=o6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function qr(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Gv(t,e,n){const o=`[${qr(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function ul(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function vd(t,e,n,r,o){const s=`[${qr(e,r).join(",")}]`,c=r.value,u=ul(t,c,n);if(!u)return"";const _=u[1];let g=u[0];return g+=`constraint ${o}(${s}, ${_});
`,g}function a6(t,e,n,r){const o=qr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return vo(o);const c=ul(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${a}, ${u});
`,_}function s6(t,e,n,r){const o=qr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return vo(o);const c=ul(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${a}, ${u});
`,_}function l6(t,e,n,r){return vd(t,e,n,r,"sum_cage_p")}function c6(t,e,n,r){return Gv(e,r,"parity_balance_cage_p")}function u6(t,e,n,r){return Gv(e,r,"sum_cage_look_and_say_p")}function d6(t,e,n,r){return vd(t,e,n,r,"divisible_killer_cage_p")}function f6(t,e,n,r){return vd(t,e,n,r,"spotlight_cage_p")}function _6(t,e,n,r){const a=`[${qr(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function g6(t,e,n,r){const a=`[${qr(e,r).join(",")}]`,s=r.value;let c="";const u=ul(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const g=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),h=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!h.includes(I)&&h.push(I)});const p=Be(h,pe.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${p});
`,c}function Mv(t,e,n,r,o){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),u=`[${ze(s).join(",")}]`,_=Be(s,pe.YIN_YANG),g=r.value;if(g){const h=parseInt(g);return`constraint ${o}(${u}, ${_}, ${h});
`}return""}function h6(t,e,n,r){return Mv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function v6(t,e,n,r){return Mv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function p6(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${ze(a).join(",")}]`,_=`[${cl(a).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint doublers_killer_cage_p(${c}, ${_}, ${h});
`}return""}function m6(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${ze(a).join(",")}]`,_=`[${cl(a).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint negators_killer_cage_p(${c}, ${_}, ${h});
`}return""}function C6(t,e){let n="";const r=new Map;for(const o of e){const a=o.value,s=r.get(a);if(!s){r.set(a,[o]);continue}s.push(o)}for(const o of r.values())if(!(o.length<=1))for(const[a,s]of o.flatMap((c,u)=>o.slice(u+1).map(_=>[c,_]))){const u=`[${qr(t,a).join(",")}]`,g=`[${qr(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${g});
`}return n}const E6=new Map([[f.KILLER_CAGE,a6],[f.INVERTED_KILLER_CAGE,s6],[f.SUM_CAGE,l6],[f.PARITY_BALANCE_CAGE,c6],[f.SUM_CAGE_LOOK_AND_SAY,u6],[f.DIVISIBLE_KILLER_CAGE,d6],[f.SPOTLIGHT_CAGE,f6],[f.UNIQUE_DIGITS_CAGE,_6],[f.VAULTED_CAGE,g6],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,h6],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,v6],[f.DOUBLERS_KILLER_CAGE,p6],[f.NEGATORS_KILLER_CAGE,m6]]);function I6(t,e,n,r){let o="";const a=E6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}else if(n===f.MULTISET_CAGE){const s=Object.values(r),c=C6(e,s);o+=c}return o}function b6(t,e,n,r){const o=e.r+.5,a=e.c+.5,s=n-o,c=r-a,u=Math.floor(n+s),_=Math.floor(r+c);return t.getCell(u,_)}function w6(t,e){const n=[],r=[],o=[];for(const a of t.getAllCells()){const s=b6(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||o.push(a)}return[n,r,o]}function O6(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,g=c+1,[h,p,m]=w6(e,_),C=Be(h,pe.GALAXY_REGIONS),I=Be(p,pe.GALAXY_REGIONS),O=Be(m,pe.GALAXY_REGIONS);r+=`% galaxy ${g}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${O}, ${g});
`,r+=`constraint connected_region(${pe.GALAXY_REGIONS}, ${g});
`;const w=u.value;if(!w)continue;const N=parseInt(w);r+=`constraint galaxy_sum_p(${pe.BOARD}, ${pe.GALAXY_REGIONS}, ${N}, ${g});
`}if(!n.length)return r;const o=e.nCols*e.nRows,s=`${n.length+1}..${o}`;return r+=`
constraint order_remaining_galaxies_p(${pe.GALAXY_REGIONS}, ${s});
`,r}const L6=new Map([[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,O6]]);function y6(t,e,n,r){let o="";const a=L6.get(n);if(a){const s=Object.values(r),c=a(t,e,s);o+=c}return o}function Bg(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return ze(n)}function A6(t,e){const r="["+Bg(t,e.cells).join(",")+"]",a="["+Bg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const x6=new Map([[f.CLONE_REGION,A6]]);function S6(t,e,n,r){return ma(e,n,r,x6)}function pd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Fv(t,e,n){const o=`[${pd(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function $v(t,e,n,r=""){const a=`[${pd(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function N6(t,e){const r=`[${pd(t,e).join(",")}]`,o=e.value;if(!o)return"";if(o){const s="["+o.replace(" ","").split(",").join(", ")+"]";return`constraint quadruple_p(${r}, ${s});
`}return""}function D6(t,e){return $v(t,e,"corner_sum_p")}function T6(t,e){return $v(t,e,"corner_even_count_p")}function R6(t,e){return Fv(t,e,"corner_sum_of_three_equals_the_other_p")}function k6(t,e){return Fv(t,e,"product_square_p")}const G6=new Map([[f.QUADRUPLE,N6],[f.CORNER_SUM,D6],[f.CORNER_EVEN_COUNT,T6],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,R6],[f.PRODUCT_SQUARE,k6]]);function M6(t,e,n,r){return ma(e,n,r,G6)}function md(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function F6(t,e,n){const r=md(t,e),[o,a]=r;return`constraint ${n}(${o}, ${a});
`}function $6(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function dl(t,e,n,r,o,a=""){var m;const s=md(e,r),[c,u]=s,_=(m=r.value)!=null&&m.length?r.value:a,g=$6(t,_,n);if(!g)return"";const h=g[1];let p=g[0];return p+=`constraint ${o}(${c}, ${u}, ${h});
`,p}function U6(t,e,n,r){const o=md(e,r),[a,s]=o;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function H6(t,e,n,r){return dl(t,e,n,r,"ratio_p","2")}function P6(t,e,n,r){return dl(t,e,n,r,"abs_difference","1")}function B6(t,e,n,r){return dl(t,e,n,r,"edge_sum_p")}function W6(t,e,n,r){return dl(t,e,n,r,"edge_modulo_p")}function Y6(t,e,n,r){return F6(e,r,"edge_factor_p")}function z6(t,e,n,r){const a=r.cells.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p),[s,c]=ze(a),[u,_]=a;let g="";if(u.r==_.r){const m=e.getRow(u.r)[0];g=Oe(m)}else if(u.c==_.c){const m=e.getCol(u.c)[0];g=Oe(m)}return g?`constraint abs(${s} - ${c}) == ${g};
`:""}function V6(t,e,n,r){const a=r.cells.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p),[s,c]=ze(a),u=ll(a,pe.YIN_YANG),[_,g]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${_}, ${g});
`}function j6(t,e,n,r){const a=r.cells.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p),[s,c]=ze(a),u=ll(a,pe.YIN_YANG),[_,g]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${_}, ${g});
`}const q6=new Map([[f.XV,U6],[f.DIFFERENCE,P6],[f.RATIO,H6],[f.EDGE_SUM,B6],[f.EDGE_MODULO,W6],[f.EDGE_FACTOR,Y6],[f.XY_DIFFERENCES,z6],[f.YIN_YANG_KROPKI,V6],[f.YIN_YANG_WHITE_KROPKI,j6]]);function K6(t,e,n,r){let o="";const a=q6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Ei(t,e,n=!1){let o=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(o=[...new Set(o)]),ze(o)}function It(t,e,n,r=!1){const a=`[${Ei(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function Rr(t,e,n,r=""){const a=`[${Ei(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function X6(t,e,n){return It(t,n,"renban",!0)}function Z6(t,e,n){return It(t,n,"double_renban_p",!0)}function Q6(t,e,n){return It(t,n,"renrenbanban_p",!0)}function J6(t,e,n){return It(t,n,"knabner_p",!0)}function e4(t,e,n){return It(t,n,"renban_or_nabner_line_p",!0)}function t4(t,e,n){return It(t,n,"out_of_order_consecutive_line_p")}function n4(t,e,n){const o=`[${Ei(t,n).join(",")}]`,a=n.value,s=a?parseInt(a):5;return`constraint whispers(${o}, ${s});
`}function r4(t,e,n){return`constraint whispers(${`[${Ei(t,n).join(",")}]`}, 4);
`}function o4(t,e,n){return It(t,n,"strictly_increasing")}function i4(t,e,n){return It(t,n,"increasing")}function a4(t,e,n){return It(t,n,"palindrome")}function s4(t,e,n){return Rr(t,n,"sum_line_p")}function l4(t,e,n){return It(t,n,"xv_line_p")}function c4(t,e,n){return Rr(t,n,"at_least_x_line_p","10")}function u4(t,e,n){return Rr(t,n,"product_line_p")}function d4(t,e,n){return Rr(t,n,"maximum_adjacent_difference_line_p","2")}function f4(t,e,n){return It(t,n,"adjacent_multiples_line_p")}function _4(t,e,n){return It(t,n,"index_line_p")}function g4(t,e,n){return It(t,n,"zipper_line_p")}function h4(t,e,n){let o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const c=`[${ze(o).join(",")}]`,u=n.value;if(!u)return"";const _=parseInt(u);return`constraint segmented_sum_line_p(${c}, ${_}, ${a});
`}function v4(t,e,n){let o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const c=`[${ze(o).join(",")}]`,u=n.value;if(!u)return"";const _=parseInt(u);return`constraint n_consecutive_renban_line_p(${c}, ${_}, ${a});
`}function p4(t,e,n){return It(t,n,"adjacent_differences_count_line_p")}function m4(t,e,n){return It(t,n,"same_parity_line_p")}function C4(t,e,n){return Rr(t,n,"renban_or_whispers_p","5")}function E4(t,e,n){return It(t,n,"alldifferent",!0)}function I4(t,e,n){return It(t,n,"repeated_digits_line_p")}function b4(t,e,n){return It(t,n,"superfuzzy_arrow_p")}function w4(t,e,n){return It(t,n,"headless_arrow_p")}function O4(t,e,n){return Rr(t,n,"unimodular_line_p","3")}function L4(t,e,n){return Rr(t,n,"modular_line_p","3")}function y4(t,e,n){return Rr(t,n,"modular_or_unimodular_line_p","3")}function A4(t,e,n){return It(t,n,"arithmetic_sequence_line_p")}function x4(t,e,n){return It(t,n,"odd_even_oscillator_line_p")}function S4(t,e,n){return Rr(t,n,"high_low_oscillator_line_p","5")}function N4(t,e,n){return It(t,n,"look_and_say_line_p",!0)}function D4(t,e,n){const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h);function a(h){const p=[];let m=null;for(const C of h)C.r!=m?(p.push([C]),m=C.r):p[p.length-1].push(C);return p}const s=a(o);if(s.length<2)return"";const c=s[0],_=`[${ze(c).join(",")}]`;let g="";for(let h=1;h<s.length;h++){const p=s[h],C=`[${ze(p).join(",")}]`;g+=`constraint sum(${C}) == sum(${_});
`}return g}function T4(t,e,n){return It(t,n,"between_line_p")}function R4(t,e,n){return It(t,n,"tightrope_line_p")}function k4(t,e,n){return It(t,n,"double_arrow_p")}function G4(t,e,n){return It(t,n,"split_peas_p")}function M4(t,e,n){return It(t,n,"parity_count_line_p")}function F4(t,e,n){return It(t,n,"product_of_ends_equals_sum_of_line_p")}function $4(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const a=o.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(o),n=a}return r.length&&e.push(r),e}function U4(t,e,n){let r="";const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=$4(a);if(!s.length)return"";const c=`sum_line_${e}`;r+=`var int: ${c};
`;for(const u of s){const h=`constraint sum(${`[${ze(u).join(",")}]`}) == ${c};
`;r+=h}return r}function H4(t,e,n){return`constraint entropic_line_p(${`[${Ei(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function P4(t,e,n){return`constraint entropic_or_modular_line_p(${`[${Ei(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function B4(t,e,n){const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),s=`[${ze(o).join(",")}]`,c=Be(o,pe.YIN_YANG);let u=n.value;u||(u="5");const _=parseInt(u);return`constraint yin_yang_shaded_whispers_line_p(${s}, ${c}, ${_});
`}function W4(t,e,n){const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),s=`[${ze(o).join(",")}]`,c=Be(o,pe.YIN_YANG);let u=n.value;u||(u="3");const _=parseInt(u);return`constraint yin_yang_unshaded_modular_line_p(${s}, ${c}, ${_});
`}function Cd(t,e,n){const o=e.cells.map(_=>t.getCell(_.r,_.c)).filter(_=>!!_),s=`[${ze(o).join(",")}]`,c=Be(o,pe.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function Y4(t,e,n){return Cd(t,n,"yin_yang_unshaded_entropic_line_p")}function z4(t,e,n){return Cd(t,n,"yin_yang_indexing_line_coloring_p")}function V4(t,e,n){return Cd(t,n,"yin_yang_region_sum_line_p")}function j4(t,e,n){const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),a=Be(o,pe.VALUES_GRID),s=Be(o,pe.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${s});
`}function Ed(t,e,n){const o=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${cl(o).join(", ")}]`;return`constraint ${n}(${s});
`}function q4(t,e,n){return Ed(t,n,"between_line_p")}function K4(t,e,n){return Ed(t,n,"double_arrow_p")}function X4(t,e,n){return Ed(t,n,"strictly_increasing")}const Z4=new Map([[f.THERMOMETER,o4],[f.SLOW_THERMOMETER,i4],[f.RENBAN_LINE,X6],[f.DOUBLE_RENBAN_LINE,Z6],[f.RENRENBANBAN_LINE,Q6],[f.NABNER_LINE,J6],[f.WHISPERS_LINE,n4],[f.DUTCH_WHISPERS,r4],[f.RENBAN_OR_WHISPERS_LINE,C4],[f.RENBAN_OR_NABNER_LINE,e4],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,t4],[f.N_CONSECUTIVE_RENBAN_LINE,v4],[f.PALINDROME,a4],[f.SUM_LINE,s4],[f.PRODUCT_LINE,u4],[f.XV_LINE,l4],[f.AT_LEAST_X_LINE,c4],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,d4],[f.SAME_PARITY_LINE,m4],[f.ADJACENT_MULTIPLES_LINE,f4],[f.ADJACENT_DIFFERENCES_COUNT_LINE,p4],[f.LOOK_AND_SAY_LINE,N4],[f.ROW_SUM_LINE,D4],[f.INDEX_LINE,_4],[f.ZIPPER_LINE,g4],[f.SEGMENTED_SUM_LINE,h4],[f.SUPERFUZZY_ARROW,b4],[f.HEADLESS_ARROW,w4],[f.ARITHMETIC_SEQUENCE_LINE,A4],[f.ODD_EVEN_OSCILLATOR_LINE,x4],[f.HIGH_LOW_OSCILLATOR_LINE,S4],[f.UNIQUE_VALUES_LINE,E4],[f.REPEATED_DIGITS_LINE,I4],[f.UNIMODULAR_LINE,O4],[f.MODULAR_LINE,L4],[f.MODULAR_OR_UNIMODULAR_LINE,y4],[f.REGION_SUM_LINE,U4],[f.ENTROPIC_LINE,H4],[f.ENTROPIC_OR_MODULAR_LINE,P4],[f.BETWEEN_LINE,T4],[f.TIGHTROPE_LINE,R4],[f.DOUBLE_ARROW_LINE,k4],[f.SPLIT_PEAS,G4],[f.PARITY_COUNT_LINE,M4],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,F4],[f.DOUBLERS_THERMOMETER,X4],[f.DOUBLERS_BETWEEN_LINE,q4],[f.DOUBLERS_DOUBLE_ARROW_LINE,K4],[f.YIN_YANG_SHADED_WHISPERS_LINE,B4],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,Y4],[f.YIN_YANG_UNSHADED_MODULAR_LINE,W4],[f.YIN_YANG_REGION_SUM_LINE,V4],[f.YIN_YANG_INDEXING_LINE_COLORING,z4],[f.GOLDILOCKS_ZONE_REGION_SUM,j4]]);function Q4(t,e,n,r){let o="";const a=Z4.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(e,s,c);o+=u}return o}function To(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return ze(o)}function Uv(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),t.getOrSetSharedVar(e,a,o)}function no(t,e,n,r){const o=n.cell,a=e.getCell(o.r,o.c),c=`[${To(e,n).join(",")}]`,u=n.value,_=Uv(t,u,o,a);if(!_)return"";const g=_[1];let h=_[0];return h+=`constraint ${r}(${c}, ${g});
`,h}function J4(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${To(e,r).join(",")}]`,u=r.value,_=Math.min(e.nCols,e.nRows),g=Uv(t,u,o,a);if(!g)return"";const h=g[1];let p=g[0];return p+=`constraint sandwich_sum_p(${c}, ${h}, 1, ${_});
`,p}function eF(t,e,n,r){const o=To(e,r),a=`[${o.join(",")}]`,s=o[0],c=r.value;if(c){const u=parseInt(c);return`constraint x_index_p(${a}, ${s}, ${u});
`}return""}function tF(t,e,n,r){const o=To(e,r),a=`[${o.join(",")}]`,s=o[0],c=r.value;if(c){const u=parseInt(c);return`constraint x_sum_p(${a}, ${s}, ${u});
`}return""}function nF(t,e,n,r){const o=To(e,r),a=`[${o.join(",")}]`,s=o[0],c=r.value;if(c){const u=parseInt(c);return`constraint shortsighted_x_sum_p(${a}, ${s}, ${u});
`}return""}function rF(t,e,n,r){const o=To(e,r),a=`[${o.join(",")}]`,s=o[0],c=r.value;if(c){const u=parseInt(c);return`constraint broken_x_sum_p(${a}, ${s}, ${u});
`}return""}function oF(t,e,n,r){const o=To(e,r),a=`[${o.join(",")}]`,s=o[0],c=r.value;if(c){const u=parseInt(c);return`constraint shifted_x_sum_p(${a}, ${s}, ${u});
`}return""}function iF(t,e,n,r){return no(t,e,r,"skyscrapers_p")}function aF(t,e,n,r){return no(t,e,r,"x_sum_skyscrapers_p")}function sF(t,e,n,r){return no(t,e,r,"battlefield_p")}function lF(t,e,n,r){return no(t,e,r,"rising_streak_p")}function cF(t,e,n,r){return no(t,e,r,"outside_consecutive_sum_p")}function uF(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${ze(s).join(",")}]`,_=Be(s,pe.CELL_CENTER_LOOP),g=r.value;if(g){const h=parseInt(g);return`constraint loopwhiches_p(${u}, ${_}, ${h});
`}return""}function dF(t,e,n,r){return no(t,e,r,"little_killer_sum_p")}function fF(t,e,n,r){return no(t,e,r,"little_killer_product_p")}function _F(t,e,n,r){return no(t,e,r,"x_omit_little_killer_sum_p")}function gF(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${ze(s).join(",")}]`,_=Be(s,pe.YIN_YANG),g=r.value;if(g){const h=parseInt(g);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${_}, ${h});
`}return""}function hF(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${cl(s).join(", ")}]`,_=r.value;if(_){const g=parseInt(_);return`constraint little_killer_sum_p(${u}, ${g});
`}return""}const vF=new Map([[f.SANDWICH_SUM,J4],[f.X_SUM,tF],[f.SHORTSIGHTED_X_SUM,nF],[f.BROKEN_X_SUM,rF],[f.SHIFTED_X_SUM,oF],[f.SKYSCRAPERS,iF],[f.X_SUM_SKYSCRAPERS,aF],[f.X_INDEX,eF],[f.BATTLEFIELD,sF],[f.RISING_STREAK,lF],[f.OUTSIDE_CONSECUTIVE_SUM,cF],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,gF],[f.LOOPWICHES,uF],[f.LITTLE_KILLER_SUM,dF],[f.LITTLE_KILLER_PRODUCT,fF],[f.X_OMIT_LITTLE_KILLER_SUM,_F],[f.NEGATORS_LITTLE_KILLER_SUM,hF]]);function pF(t,e,n,r){let o="";const a=vF.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function mF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let a=t.getCellsInDirection(r.r,r.c,o);a=[r,...a];const s=Be(a,pe.SASHIGANE),c=Be(a,pe.SASHIGANE_BENDS),u=Oe(r),_=Mt(r,pe.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${s}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function CF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,a=t.getCellsInDirection(r.r,r.c,o),c="["+ze(a).join(",")+"]",u=Be(a,pe.CELL_CENTER_LOOP),_=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const EF=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,mF],[f.THERMO_SIGHTLINE_LOOP_ARROW,CF]]);function IF(t,e,n,r){return ma(e,n,r,EF)}function Hv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o);return`constraint ${n}(${a});
`}function Pv(t,e,n,r=""){const o=e.cell,a=t.getCell(o.r,o.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function bF(t,e,n,r){return Hv(e,r,"odd_p")}function wF(t,e,n,r){return Hv(e,r,"even_p")}function OF(t,e,n,r){return Pv(e,r,"low_digit_p","5")}function LF(t,e,n,r){return Pv(e,r,"high_digit_p","5")}function Bv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=t.getNeighboorCells(o),c=Be(s,pe.BOARD);return`constraint ${n}(${c}) == ${a};
`}function yF(t,e,n,r){return Bv(e,r,"odd_count")}function AF(t,e,n,r){return Bv(e,r,"even_count")}function xF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=Be(c,pe.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function SF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${Be(c,pe.BOARD)}, ${s});
`}function NF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${Be(c,pe.BOARD)}, ${s});
`}function DF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getRow(a.r),c=Be(s,pe.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function TF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getCol(a.c),c=Be(s,pe.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function RF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const g=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${g};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function kF(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const s=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),_=e.getCell(o.r,o.c+1);if(!s||!c||!u||!_)return"";const g=Oe(s),h=Oe(c),p=Oe(u),m=Oe(_);return`constraint groups_opposite_parity_p([${g},${h}], [${p},${m}]);
`}function Id(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),[s,c,u,_]=gd(t,o);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${_});
`}function GF(t,e,n,r){return Id(e,r,"is_watchtower_p")}function MF(t,e,n,r){return Id(e,r,"is_not_watchtower_p")}function FF(t,e,n,r){return Id(e,r,"farsight_p")}function $F(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),[c,u,_,g]=gd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${_}, ${g}, 9);
`}function UF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+ze(c).join(",")+"]",_=e.getCol(a.c),g="["+ze(_).join(",")+"]",[h,p]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${g}, ${h}, ${p}, ${s});
`}function Wv(t,e,n){let r="";const o=e.map(s=>s.cell),a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));for(const s of e){const c=s.cell,u=t.getCell(c.r,c.c);if(!u)continue;const _=Oe(u),g=t.getOrthogonallyAdjacentCells(u).filter(m=>!a.has(m)),h=Be(g,pe.BOARD),p=`constraint ${n}(${h}, ${_});
`;r+=p}return r}function HF(t,e){return Wv(t,e,"maximum_p")}function PF(t,e){return Wv(t,e,"minimum_p")}function BF(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...o]).join(`,
	`)}`;n+=`array[int] of var int: counting_circles = [
	${s}
];
`;for(const c of e){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const g=Oe(_),h=`constraint count(counting_circles, ${g}) == ${g};
`;n+=h}return n+=`
`,n}function WF(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...o]).join(`,
	`)}`;return n+=`array[int] of var int: unique_cells = [
	${s}
];
`,n+=`constraint alldifferent(unique_cells);
`,n}function YF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${Be(u,pe.YIN_YANG)}, ${s});
`}function bd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=_d(t,o),c=[];for(const g of s){const h=Be(g,pe.YIN_YANG);c.push(h)}const u=Mt(o,pe.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function zF(t,e,n,r){return bd(e,r,"yin_yang_seen_unshaded_p")}function VF(t,e,n,r){return bd(e,r,"yin_yang_seen_shaded_p")}function jF(t,e,n,r){return bd(e,r,"yin_yang_seen_same_shade_p")}function qF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Mt(a,pe.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),_=Be(u,pe.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${_});
`}function KF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),_=e.getCol(a.c),g="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",h="["+_.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${s}, ${c});
`}function XF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),_="["+c.map(p=>`unknown_regions[${p.r},${p.c}]`).join(", ")+"]",g="["+u.map(p=>`unknown_regions[${p.r},${p.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${_}, ${g}, ${s});
`}function ZF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let g=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const h=_d(e,a),p=[];for(const m of h){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";p.push(C)}return g+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${p[0]}, ${p[1]}, ${p[2]}, ${p[3]});
`,g}function QF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Mt(a,pe.SASHIGANE),u=Mt(a,pe.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function JF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Mt(a,pe.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function e$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Mt(a,pe.CELL_CENTER_LOOP)} == 1;
`:""}function t$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Mt(a,pe.CELL_CENTER_LOOP)} == 0;
`:""}function n$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${Be(u,pe.CELL_CENTER_LOOP)}) == ${s};
`}function r$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Mt(a,pe.CAVE_SHADING),u=_d(e,a),_=[];for(const h of u){const p=Be(h,pe.CAVE_SHADING);_.push(p)}return`constraint cave_clue_p(${s}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function o$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),g=Mt(a,pe.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(a),p=Be(h,pe.BOARD),m=Be(h,pe.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${p}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(a),I=Be(C,pe.BOARD),O=Be(C,pe.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${O}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[Pe.NE,Pe.NW,Pe.SE,Pe.SW],N=[];for(const M of w)e.getCellsInDirection(a.r,a.c,M).forEach(V=>N.push(V));const R=Be(N,pe.BOARD),F=Be(N,pe.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${R}, ${F}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function i$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),g=Mt(a,pe.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(a),p=Be(h,pe.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${p}, ${g}) >= ${c};
`;const m=[Pe.N,Pe.S,Pe.E,Pe.W],C=[];for(const I of m){const O=e.getCellsInDirection(a.r,a.c,I);if(!O.length)continue;const w=Be(O,pe.BOARD),N=Be(O,pe.UNKNOWN_REGIONS),R=`in_arrow_${n}_${I}`,F=`in_arrow_${n}_${I}[1]`;C.push(F),u+=`array[index_set(${w})] of var bool: ${R};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${N}, ${R}, ${_}, ${g});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}const a$=new Map([[f.ODD,bF],[f.EVEN,wF],[f.LOW_DIGIT,OF],[f.HIGH_DIGIT,LF],[f.ODD_MINESWEEPER,yF],[f.EVEN_MINESWEEPER,AF],[f.DIAGONALLY_ADJACENT_SUM,NF],[f.ORTHOGONAL_SUM,SF],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,xF],[f.FRIENDLY_CELL,RF],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,kF],[f.WATCHTOWER,GF],[f.NOT_WATCHTOWER,MF],[f.FARSIGHT,FF],[f.RADAR,$F],[f.INDEXING_COLUMN,DF],[f.INDEXING_ROW,TF],[f.SANDWICH_ROW_COL_COUNT,UF],[f.YIN_YANG_MINESWEEPER,YF],[f.YIN_YANG_SEEN_UNSHADED_CELLS,zF],[f.YIN_YANG_SEEN_SHADED_CELLS,VF],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,jF],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,qF],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,KF],[f.SEEN_REGION_BORDERS_COUNT,XF],[f.NURIMISAKI_UNSHADED_ENDPOINTS,ZF],[f.SASHIGANE_BEND_REGION_COUNT,QF],[f.SASHIGANE_REGION_SUM,JF],[f.CELL_ON_THE_LOOP,e$],[f.CELL_NOT_ON_THE_LOOP,t$],[f.COUNT_LOOP_NEIGHBOUR_CELLS,n$],[f.CAVE_CLUE,r$],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,o$],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,i$]]),s$=new Map([[f.MAXIMUM,HF],[f.MINIMUM,PF],[f.COUNTING_CIRCLES,BF],[f.UNIQUE_CELLS,WF]]);function l$(t,e,n,r){let o="";const a=a$.get(n),s=s$.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);o+=_}else if(s){const c=Object.values(r),u=s(e,c);o+=u}return o}function c$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Mt(r,pe.UNKNOWN_REGIONS),s=e.directions,c=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),p=Be(h,pe.UNKNOWN_REGIONS);c.push(p)}return`constraint ${c.map(g=>`count_different(${g}, ${a})`).join(" + ")} == ${o};
`}function u$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Mt(r,pe.YIN_YANG),s=e.directions;let c="";for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),h="["+ze(_).join(",")+"]",p=Be(_,pe.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${h}, ${p}) == ${o};
`}return c}function d$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),_=Be(u,pe.YIN_YANG);s+=`constraint count(${_}, 1) == ${o};
`}return s}function f$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Mt(r,pe.YIN_YANG),s=e.directions,c=[];for(const _ of s){const g=t.getCellsInDirection(r.r,r.c,_),h=Be(g,pe.YIN_YANG),p=Be(g,pe.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${h}, ${p})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function _$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${Be(_,pe.CELL_CENTER_LOOP)})`;s.push(h)}return s.length?`constraint ${s.join(" + ")} = ${o};
`:""}function g$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Mt(r,pe.GALAXY_REGIONS),s=e.directions,c=[];for(const _ of s){const g=t.getCellsInDirection(r.r,r.c,_),m=`count(${"["+ll(g,pe.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function h$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+ze(u).join(",")+"]";s+=`constraint hot_arrows_p(${g}, ${o});
`}return s}function v$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+ze(u).join(",")+"]";s+=`constraint cold_arrows_p(${g}, ${o});
`}return s}const p$=new Map([[f.HOT_ARROWS,h$],[f.COLD_ARROWS,v$],[f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,c$],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,u$],[f.LOOP_CELL_COUNT_ARROWS,_$],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,f$],[f.YIN_YANG_COUNT_SHADED_CELLS,d$],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,g$]]);function m$(t,e,n,r){return ma(e,n,r,p$)}function C$(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function E$(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}const I$=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,C$],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,E$]]);function b$(t,e,n,r){return ma(e,n,r,I$)}const w$=[y6,l$,IF,m$,K6,M6,Q4,i6,I6,pF,S6,b$];function O$(t,e){let n="";const r=t.localConstraints,o=t.grid;for(const[a,s]of r.entries())for(const c of w$){let u=c(e,o,a,s);u=At(u,`${a}`),n+=u}return n}function L$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function y$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function A$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function x$(t,e){const n=t.grid;if(n.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(n.nCols,n.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${o});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${o});
`,a}function S$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function N$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function D$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function T$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function R$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function Yv(t,e){const n=t.grid;let r="";r+=`
% Only 1 per row 
`;const o=n.nRows;for(let u=0;u<o;u++){const _=n.getRow(u),g=e(_);r+=`constraint count_eq(${g}, true, 1);
`}r+=`
% Only 1 per column 
`;const a=n.nCols;for(let u=0;u<a;u++){const _=n.getCol(u),g=e(_);r+=`constraint count_eq(${g}, true, 1);
`}if(!t.globalConstraints.get(f.UNKNOWN_REGIONS)){r+=`
% Only 1 per region 
`;const u=n.getUsedRegions();for(const _ of u){const g=n.getRegion(_),h=e(g);r+=`constraint count_eq(${h}, true, 1);
`}}return r}function k$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=Yv(t,a=>Be(a,pe.DOUBLERS)),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function G$(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=Yv(t,s=>Be(s,pe.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function M$(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function F$(t,e){if(t.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="cave_shading",a="cave_regions";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint cave_p(${o}, ${a});
`,s}function $$(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=pe.GALAXY_REGIONS,a=pe.GALAXY_SIZES,s=n.nCols*n.nRows;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${o};
`,c+=`constraint galaxy_restrict_numbering_p(${o});
`,c+=`array[0..${s}] of var 0..${s}: ${a};
`,c+=`constraint galaxy_sizes_p(${o}, ${a});
`,c+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,c+=`constraint gallaxy_connected_regions_p(${o});
`,c}function U$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function H$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function P$(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Pg.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[s,c]of Pg.entries()){const u=c.length,_=c[0].length,g=`pentomino_${s}`;a+=`array[1..${u}, 1..${_}] of 0..1: ${g} = ${_M(c)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${s});
`}return a}const B$=new Map([[f.FILLOMINO,M$],[f.CAVE,F$],[f.GALAXIES,$$],[f.YIN_YANG,L$],[f.NURIMISAKI,y$],[f.TWO_CONTIGUOUS_REGIONS,A$],[f.UNKNOWN_REGIONS,x$],[f.SASHIGANE,S$],[f.CELL_CENTER_LOOP_NO_TOUCHING,N$],[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,D$],[f.NOT_LOOP_SIZED_REGIONS,T$],[f.MODULAR_LOOP,R$],[f.DOUBLERS,k$],[f.NEGATORS,G$],[f.GOLDILOCKS_ZONE,H$],[f.NEXUS,U$],[f.PENTOMINO_TILLING,P$]]);function W$(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=B$.get(r);if(!a)continue;let s=a(t,r);s=At(s,`${r}`),e+=s}return e}function Y$(){let t=`
`;return t+=`test orth_adjacent_2d(
    int: r1, int: c1, 
    int: r2, int: c2
) = let {
    int: d1 = abs(r2-r1);
    int: d2 = abs(c2-c1);
} in d1 <= 1 /\\ d2 <= 1 /\\ d1 + d2 = 1;
 
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
     
predicate not_fully_shaded_or_unshaded_2x2_p(array[int, int] of var 0..1: shading) =
    % For each possible 2x2 square in the grid
    forall(r in index_set_1of2(shading) where r < max(index_set_1of2(shading)),
           c in index_set_2of2(shading) where c < max(index_set_2of2(shading)))(
        % Sum of the 2x2 area must be between 1 and 3 inclusive
        % This prevents both all 0's (sum=0) and all 1's (sum=4)
        let {
            var int: square_sum = shading[r,c] + shading[r+1,c] + shading[r,c+1] + shading[r+1,c+1]
        } in
        square_sum in 1..3
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
) = 
    let {
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
);`+`predicate consecutive_p(var int: a, var int: b) =
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

`+`predicate renban(array[int] of var int: arr) =
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

predicate n_consecutive_sum_line_p(array[int] of var int: arr, int: n) =
    let {
        int: start_idx = min(index_set(arr)),
        int: end_idx = max(index_set(arr))
    } in
    forall(i in start_idx..end_idx - n + 1) (
        exists(k in i..i + n - 1) (
            arr[k] = sum(j in i..i + n - 1 where j != k)(arr[j])
        )
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
        array[min(idxs)..max(idxs)-1] of var bool: split_after;
        % segment_sum[i] is sum from position i to next split (or end)
        array[idxs] of var int: segment_sum;
    } in
    % Calculate running sum for each position
    forall(i in idxs)(
        segment_sum[i] = 
            if i = n then
                arr[i]
            else 
                arr[i] + 
                if split_after[i] then 
                    0 
                else 
                    segment_sum[i+1]
                endif
            endif
    ) /\\
    % Each segment must sum to val
    forall(i in 1..n)(
        % If this is start of segment (first pos or after split), sum must be val
        (i = 1 \\/ (i > 1 /\\ split_after[i-1])) -> segment_sum[i] = val
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

`+`predicate average_arrow_p(array[int] of var int: arr, var int: val) =
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

function var int: x_sum(array[int] of var int: arr, var int: x) =
    let {
        int: n = card(index_set(arr))
    } in
    sum(i in index_set(arr) where i <= min(index_set(arr)) + x - 1)(arr[i]);

predicate x_sum_p(array[int] of var int: arr, var int: x, var int: val) =
    val == x_sum(arr, x) /\\ (0 <= x /\\ x <= card(index_set(arr)));
	
predicate shortsighted_x_sum_p(array[int] of var int: arr, var int: x, var int: val) =
    x_sum(arr, x) == val \\/ x_sum(arr, x-1) == val;

predicate broken_x_sum_p(array[int] of var int: arr, var int: x, var int: val) =
    x_sum(arr, x-1) == val \\/ x_sum(arr, x+1) == val;

function var int: shifted_x_sum(array[int] of var int: arr, var int: n) =
    let {
        int: size = card(index_set(arr)),
        int: start_index = min(index_set(arr)),
        var int: x = arr[n]
    } in
	    sum(i in index_set(arr) where i >= n /\\ i < n + x)(arr[i]);

% sum(arr[n:n+x]), n = arr[1], x = arr[n]
predicate shifted_x_sum_p(array[int] of var int: arr, var int: n, var int: val) =
    (n >= 1 /\\ n <= card(index_set(arr)) /\\ n + arr[n] - 1 <= card(index_set(arr))) /\\
    shifted_x_sum(arr, n) == val;

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
    x_sum(arr, x);

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

predicate yin_yang_p(array[int, int] of var 0..1: grid) =
	connected_region(grid, 0) /\\
    connected_region(grid, 1) /\\
	not_fully_shaded_or_unshaded_2x2_p(grid) /\\
	yin_yang_no_crossings(grid);
	
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

function var int: yin_yang_seen_sum_f(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = 
  count_uninterrupted(arr1, val) + count_uninterrupted(arr2, val) + count_uninterrupted(arr3, val) + count_uninterrupted(arr4, val);

predicate yin_yang_seen_unshaded_p(
	var int: cell_var,
    var int: yin_yang_var,
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
) = let {
    var int: count_cell = if yin_yang_var == 0 then 1 else 0 endif;
} in (
    yin_yang_seen_sum_f(arr1, arr2, arr3, arr4, 0) + count_cell == cell_var /\\
    yin_yang_var == 0
);

predicate yin_yang_seen_shaded_p(
	var int: cell_var,
    var int: yin_yang_var,
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
) = let {
    var int: count_cell = if yin_yang_var == 1 then 1 else 0 endif;
} in (
    yin_yang_seen_sum_f(arr1, arr2, arr3, arr4, 1) + count_cell == cell_var /\\
    yin_yang_var == 1
);

predicate yin_yang_seen_same_shade_p(
	var int: cell_var,
    var int: yin_yang_var,
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
) = (
    yin_yang_seen_sum_f(arr1, arr2, arr3, arr4, yin_yang_var) + 1 == cell_var
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
    /\\
    % Elements that reference themselves should be dark
    forall(i in index_set(arr))(
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

`+`function var int: first_idx(array[int] of var int: arr, var int: x) =
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

function array[int] of var int: regions_idxs_f(array[int, int] of var int: regions, int: n_regions) =
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

`+`predicate nurimisaki_p(array[int, int] of var int: grid) =
	connected_region(grid, 0) /\\
	not_fully_shaded_or_unshaded_2x2_p(grid);

predicate nurimisaki_unshaded_endpoint_p(array[int] of var int: adj_cells, var int: nurimisaki_cell) = 
    count(adj_cells, 0) == 1 /\\ nurimisaki_cell == 0;
    
predicate nurimisaki_count_uninterrupted_unshaded_p(
	var int: cell_var,
    var int: nurimisaki_var,
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
) = let {
    var int: count_cell = if nurimisaki_var == 0 then 1 else 0 endif
} in count_uninterrupted(arr1, 0) + count_uninterrupted(arr2, 0) + count_uninterrupted(arr3, 0) + count_uninterrupted(arr4, 0) + count_cell == cell_var;

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
            % when when[r, c] != 1, it is equal to the minimum adjacent element in the same region + 1
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
    array[int, int] of var int: area
) =
    let {
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
        % Optimisation: fix unambiguous "roots" at time 1, the id of the
        % area will be the 'index' of the first element of that area
        same_before_p(area, same_before) /\\
        forall (r in rows, c in cols where grid[r, c] != 0) (
            if same_before[r,c] = 0 then
                when[r,c] = 1 /\\ area[r, c] = (r) * n_cols + c + 1
            else
                true
            endif
        ) /\\

        % Each cell contains the number corresponding to the size of its area.
        forall (r in rows, c in cols) (
            grid[r, c] = size[area[r, c]]
        ) /\\

        % small optimization to reduce search space
        forall(r in rows, c in cols) (
            forall(r2 in rows, c2 in cols) (
                abs(r2-r) + abs(c2-c) >= grid[r,c] -> area[r,c] != area[r2, c2]
            )
        ) /\\

        forall(r in rows, c in cols) (
            forall(r2 in rows, c2 in cols) (
                abs(r2-r) + abs(c2-c) >= grid[r,c] -> area[r, c] != (r2) * n_cols + c2 + 1
            )
        ) /\\

        % Each area's size is the number of cells in that area.
        forall (id in ids) (
            size[id] = sum (r in rows, c in cols) (bool2int(area[r, c] = id))
        ) /\\

        % Neighbouring areas must have different sizes. (horizontally adjacent)
        forall (r in rows, c in cols where c > 0) (
            let { var ids: id1 = area[r, c - 1], var ids: id2 = area[r, c] } in
            (id1 != id2) = (size[id1] != size[id2])
        ) /\\
        % Neighbouring areas must have different sizes. (vertically adjacent)
        forall (r in rows, c in cols where r > 0) (
            let { var ids: id1 = area[r-1, c], var ids: id2 = area[r, c] } in
            (id1 != id2) = (size[id1] != size[id2])
        ) /\\

        % Optimisation: the "when" label is actually the distance of a cell in an
        % area from the area "root".  This distance cannot be larger than the size
        % of the area.
        forall (r in rows, c in cols) (
            when[r, c] <= size[area[r, c]]
        ) /\\

        % Each cell is either the "root" of an area or is an extension of a
        % neighbouring cell.
        forall (r in rows, c in cols) (
            ( when[r, c] = 1 /\\ area[r, c] = (r) * n_cols + c + 1 ) \\/  
            ( when[r, c] > 1 /\\ 
                ( fillomino_joins(r, c, r - 1, c, grid, when, area) \\/ 
                  fillomino_joins(r, c, r + 1, c, grid, when, area) \\/
                  fillomino_joins(r, c, r, c - 1, grid, when, area) \\/ 
                  fillomino_joins(r, c, r, c + 1, grid, when, area)
                )
            )
        ) /\\

        % restricts the floodfilling growth,
        % by minimizing the distance of each node in the branching tree (each region) to the root
        % this removes solution with the same regions, but with different floodfilling (when array)
        fillomino_restrict_floodfill_p(when, area)

        % Symmetry breaking: canonical numbering of regions
        /\\
        forall(r in rows, c in cols) (
            area[r, c] <= (r * n_cols + c + 1)
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


predicate cave_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: regions
) =  let {
        set of int: rows = index_set_1of2(shading);
        set of int: cols = index_set_2of2(shading);
        int: n_rows = length(rows);
        int: n_cols = length(cols);
        int: g_size = n_rows * n_cols;
        array [rows, cols] of var 0..g_size: same_before;
        array[rows, cols] of var 0..g_size: when;
    } in
    % unshaded cells (0 = cave), representing the cave must be all orthogonally connected
    connected_region(shading, 0) /\\
    sum(r in rows, c in cols)(bool2int(shading[r,c] = 0)) > 1 /\\
    % label cave region with 0
    forall(r in rows, c in cols) (
        shading[r,c] = 0 <-> regions[r, c] = 0
    ) /\\
    forall(r in rows, c in cols) (
        shading[r,c] = 1 <-> regions[r, c] != 0
    ) /\\
    % all shaded cells are orthogonally connected by other shaded cells to an edge of the grid
    % adjacent shaded cells must belong to the same region (horiz adjacent)
    forall (r in rows, c in cols where c > 0) (
        let { 
            var int: id1 = regions[r, c - 1], 
            var int: id2 = regions[r, c] 
        } in (shading[r,c] = 1 /\\ shading[r, c - 1] = 1) -> id1 = id2
    ) /\\
    % adjacent shaded cells must belong to the same region (vertical adjacent)
    forall (r in rows, c in cols where r > 0) (
        let { var int: id1 = regions[r - 1, c], var int: id2 = regions[r, c] } in
        (shading[r,c] = 1 /\\ shading[r - 1, c] = 1) -> id1 = id2
    ) /\\
    % for each region not equal to 0, there must be at least one cell that is on the edge of the grid
    forall(r in rows, c in cols where regions[r,c] != 0)(
        exists(r2 in rows, c2 in cols)(regions[r2,c2] = regions[r,c] /\\ on_edge_2d(r2, c2, regions))
    ) /\\
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    same_before_p(regions, same_before) /\\
    forall (r in rows, c in cols) (
        if same_before[r,c] = 0 /\\ regions[r, c] != 0 then
            % 0-indexing arrays!!!!
            when[r,c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1
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
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/  
        ( when[r, c] > 1 /\\  
            ( cave_joins(r, c, r - 1, c, when, regions) \\/ 
              cave_joins(r, c, r + 1, c, when, regions) \\/
              cave_joins(r, c, r, c - 1, when, regions) \\/ 
              cave_joins(r, c, r, c + 1, when, regions)
            )
        )
    ) /\\
    fillomino_restrict_floodfill_p(when, regions)    
    % Symmetry breaking: canonical numbering of regions
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
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

`+`predicate anti_giraffe_p(array[int, int] of var int: grid) =
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

`,t}function z$(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function zv(t){const e=t.grid,n=new uM,[r,o]=[e.nRows,e.nCols],a=r*o;n.add(`include "globals.mzn";
`),n.add(`include "alldifferent.mzn";

`),n.add(Y$());let c=`1..${Math.max(r,o)}`,u=t.valid_digits;return!!t.globalConstraints.get(f.FILLOMINO)&&(c=`1..${a}`),t.globalConstraints.get(f.HEXED_SUDOKU)&&(u=[...Gt.range(1,16)]),u&&(c="{"+u.join(",")+"}"),n.add(`set of int: ROW_IDXS = 0..${r-1};
`),n.add(`set of int: COL_IDXS = 0..${o-1};
`),n.add(`set of int: ALLOWED_DIGITS = ${c};
`),n.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),n.add(z$(t)),n.add(QM(t)),n.add(JM(t)),n.add(W$(t)),n.add(O$(t,n)),n.add(t6(t)),n.add(`
solve satisfy;`),n.model_str}const Wg=encodeURIComponent("4.3.5");let lr={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const po=[];let qc;function ji(){if(!qc){const e=`importScripts(${JSON.stringify(lr.workerURL)});`;qc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(qc);t.postMessage({wasmURL:lr.wasmURL?lr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Wg}`,lr.workerURL).toString(),dataURL:lr.dataURL?lr.dataURL.toString():new URL(`./minizinc.data?version=${Wg}`,lr.workerURL).toString()}),po.push({worker:t,runCount:0})}function Vv(){for(;po.length<lr.numWorkers;)ji()}async function V$(t){if(lr={...lr,...t},po.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Vv(),await Promise.race(po.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class wd{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new wd;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Vv();const o=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:s,runCount:c}=po.pop();return s.postMessage({jsonStream:!0,files:a,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],o.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?po.push({worker:a,runCount:s}):(a.terminate(),ji()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],o.options),c=[];let u=null;a.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":s<10?po.push({worker:a,runCount:s}):(a.terminate(),ji()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const a=["-c","--fzn",o],{worker:s}=this._run(a,n.options,[o]);ji();let c={},u=!1,_=null;return s.onmessage=g=>{if(c[g.data.type])for(const h of c[g.data.type])h(g.data);switch(g.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":_||(_=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,h){c[g]?c[g].add(h):c[g]=new Set([h])},off(g,h){c[g]&&c[g].delete(h)},then(g,h){const p=m=>{if(m.code===0)g(m.outputFiles[o]);else{const C=_?{message:_.message,...m}:m;if(!h)throw C;h(C)}};c.exit?c.exit.add(p):c.exit=new Set([p])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);ji();let a=null,s={},c=!1,u=null,_={},g="UNKNOWN";return o.onmessage=h=>{if(s[h.data.type])for(const p of s[h.data.type])p(h.data);switch(h.data.type){case"exit":o.terminate(),c=!0,s={};break;case"error":a||(a=h.data);break;case"statistics":_={..._,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),s.exit)for(const h of s.exit)h({type:"exit",code:null});s={}}},on(h,p){s[h]?s[h].add(p):s[h]=new Set([p])},off(h,p){s[h]&&s[h].delete(p)},then(h,p){const m=C=>{if(C.code===0)h({status:g,solution:u,statistics:_});else{const I=a?{message:a.message,...C}:C;if(!p)throw I;p(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var j$=ne('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button></div>');function q$(t,e){ee(e,!1);const n=Ve(),r=()=>he(Nr,"$puzzleMetaStore",n);let o=$(e,"showModal",12,!1);function a(){const _=lt(_a);return zv(_)}function s(){const _=a();navigator.clipboard.writeText(_)}function c(){const _=a(),g=fM(_);navigator.clipboard.writeText(g)}function u(){function _(p,m,C){var I=document.createElement("a"),O=new Blob([p],{type:C});I.href=URL.createObjectURL(O),I.download=m,I.click(),URL.revokeObjectURL(I.href)}const g=Bh(r()),h=a();_(h,`${g}.mzn`,"text/plain")}de(),Tr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(_){o(_)},children:(_,g)=>{var h=j$(),p=q(h),m=H(p,2),C=H(m,2);P(h),Re("click",p,s),Re("click",m,c),Re("click",C,u),S(_,h)},$$slots:{default:!0},$$legacy:!0}),te()}function Od(t,e,n){const r=[],o=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const g=Number(c[u]),h=n.get(g)??1;o.push([h])}}const a=Ys(r,o);ti(a)}function K$(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let p=0;p<e;p++)for(let m=0;m<n;m++)if(!r[p][m]){const C=[];o.push(C),s(p,m,t[p][m])}function s(p,m,C){p<0||p>=e||m<0||m>=n||r[p][m]||t[p][m]!==C||(r[p][m]=!0,o[o.length-1].push([p,m]),s(p+1,m,C),s(p-1,m,C),s(p,m+1,C),s(p,m-1,C))}const c=Array(o.length).fill(0).map(()=>new Set);function u(p,m){for(const[C,I]of p)for(const[O,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const N=C+O,R=I+w;if(m.some(([F,M])=>F===N&&M===R))return!0}return!1}for(let p=0;p<o.length;p++)for(let m=p+1;m<o.length;m++)u(o[p],o[m])&&(c[p].add(m),c[m].add(p));const _=[1,4,7,9],g=new Array(o.length).fill(0);function h(p,m){for(const C of c[p])if(g[C]===m)return!1;return!0}for(let p=0;p<o.length;p++)for(const m of _)if(h(p,m)){g[p]=m;break}for(let p=0;p<o.length;p++)for(const[m,C]of o[p])a[m][C]=g[p];return a}function X$(t,e){if(t===void 0)return;const n=t.board;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_||_.given)continue;const g=c[u];r.push(_),o.push(g)}}const a=Wh(r,o);ti(a)}function Z$(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const a=t[o];if(a!==void 0){Od(a,e,r);return}}}function Q$(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const a=t[o];if(a!==void 0){Od(a,e,r);return}}}function J$(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const g=c[u];o.push([g+1])}}const a=Ys(r,o);ti(a)}function eU(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Od(n,e,new Map([[0,4],[1,7],[2,9]]))}function tU(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<o.length;g++){const h=o[g];for(let p=0;p<h.length-1;p++){const m=e.getCell(g,p),C=e.getCell(g,p+1);if(!m||!C)continue;const I=h[p],O=h[p+1];if(I===O)continue;const w={colorId:c,p1:{r:g,c:p+1},p2:{r:g+1,c:p+1}};u.push(w)}}for(let g=0;g<s;g++)for(let h=0;h<a-1;h++){const p=e.getCell(h,g),m=e.getCell(h+1,g);if(!p||!m)continue;const C=o[h][g],I=o[h+1][g];if(C===I)continue;const O={colorId:c,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(O)}const _=bs(u);jr(_);return}}function nU(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const g=e.getCell(c,_);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const p=o[g.r][g.c],m=o[h.r][h.c];if(!(p===1&&m===1))continue;const C={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};a.push(C)}}}const s=bs(a);jr(s);return}}function rU(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=K$(o);if(!a)return;const s=[],c=[];for(let _=0;_<a.length;_++){const g=a[_];for(let h=0;h<g.length;h++){const p=e.getCell(_,h);if(!p)continue;s.push(p);const m=g[h];c.push([m])}}const u=Ys(s,c);ti(u);return}}function oU(t,e){jr(Qu()),X$(t,e),J$(t,e),tU(t,e),eU(t,e),nU(t,e),Q$(t,e),rU(t,e),Z$(t,e)}function iU(){const{subscribe:t,set:e}=Ft(0),n=100;let r=Date.now(),o,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,o=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(o),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(o),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var aU=ne('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function sU(t,e){ee(e,!1);const n=Ve(),r=()=>he(_a,"$puzzleStore",n),o=()=>he(sn,"$gridStore",n),a=()=>he(w,"$timer",n),s=D(),c=D(),u=D(),_=D();let g=D(!1),h=D(!1),p=D(null),m=D(100),C=D("100"),I=D(null),O=D("IDLE");const w=iU();function N(K){return K===null?"":String(K)}function R(K){const se=Math.floor(K/6e4),_e=Math.floor(K%6e4/1e3),ie=Math.floor(K%1e3/100),ce=_e.toString().padStart(2,"0");return`${se}:${ce}.${ie}`}function F(){x(h,!0)}function M(K){const se=parseInt(K);typeof se=="number"&&se>=1&&x(m,se)}async function z(){x(I,0),x(O,"SOLVING...");const K=new wd;iv(),console.log(v(s));const se=zv(v(s));K.addFile("test.mzn",se),w.reset(),w.start(),x(p,K.solve({options:{solver:"chuffed","num-solutions":v(m)}})),v(p).on("solution",_e=>{const ie=_e.output.json;_e.type==="solution"&&v(I)!==null&&x(I,v(I)+1),oU(ie,v(c))}),v(p).on("error",_e=>{x(u,"Solve"),x(O,"ERROR"),w.stop(),v(p)&&v(p).cancel()}),v(p).then(_e=>{x(O,_e.status),x(u,"Solve"),w.stop()})}function V(){v(p)===null||!v(p).isRunning()?z():v(p)!==null&&v(p).isRunning()&&(x(O,"IDLE"),x(u,"Solve"),w.stop(),v(p).cancel())}G(()=>r(),()=>{x(s,r())}),G(()=>o(),()=>{x(c,o())}),G(()=>{},()=>{x(u,"Solve")}),G(()=>a(),()=>{x(_,a())}),G(()=>v(p),()=>{v(p)&&(v(p)!==null&&v(p).isRunning()?x(u,"Stop"):x(u,"Solve"))}),ve(),de(),sl(t,{get isOpen(){return v(g)},set isOpen(K){x(g,K)},$$slots:{"panel-header":(K,se)=>{al(K,{slot:"panel-header",title:"Solver",get isOpen(){return v(g)},set isOpen(_e){x(g,_e)},$$legacy:!0})},"panel-content":(K,se)=>{var _e=aU(),ie=le(_e),ce=H(ie,2);q$(ce,{get showModal(){return v(h)},set showModal(ot){x(h,ot)},$$legacy:!0});var be=H(ce,2),Ie=q(be,!0);P(be);var Ce=H(be,2),He=q(Ce,!0);P(Ce);var ut=H(Ce,2),xe=q(ut);qt(xe),A(xe,"min",1),A(xe,"max",200),A(xe,"step",1),P(ut);var Ee=H(ut,2),ht=q(Ee,!0);Z(()=>nt(ht,`Solution Count: ${N(v(I))}`)),P(Ee);var ct=H(Ee,2),fn=q(ct,!0);Z(()=>nt(fn,`Elapsed Time: ${R(v(_))}`)),P(ct);var $n=H(ct,2),ro=q($n,!0);P($n),Z(()=>{nt(Ie,v(u)),nt(He,`Max. Solutions: ${v(m)}`),nt(ro,`Status: ${v(O)}`)}),Re("click",ie,F),Re("click",be,V),qn(xe,()=>v(C),ot=>x(C,ot)),Re("input",xe,()=>M(v(C))),S(K,_e)}},$$legacy:!0}),te()}var lU=ne('<div class="setting-panel-wrapper svelte-8gul1v"><div class="setting-panel svelte-8gul1v"><!> <!> <!> <!> <!> <!> <!></div></div>');function cU(t){var e=lU(),n=q(e),r=q(n);tM(r);var o=H(r,2);sU(o,{});var a=H(o,2);qG(a,{elementHandlers:Rt});var s=H(a,2);JG(s,{elementHandlers:Rt});var c=H(s,2);HG(c,{elementHandlers:Rt});var u=H(c,2);w8(u,{elementHandlers:Rt});var _=H(u,2);rM(_,{}),P(n),P(e),S(t,e)}var uU=ne('<div class="game-wrapper svelte-rf6cgp"><div class="game svelte-rf6cgp"><!> <!> <!></div></div>');function dU(t,e){ee(e,!1);const n=Ve(),r=()=>he(Xs,"$gameModeStore",n),o=D();G(()=>r(),()=>{x(o,r())}),ve(),de();var a=uU(),s=q(a),c=q(s);{var u=h=>{cU(h)};fe(c,h=>{v(o)===pi.SETTING&&h(u)})}var _=H(c,2);_G(_,{});var g=H(_,2);GR(g,{}),P(s),P(a),S(t,a),te()}var fU=ne('<main class="App svelte-3tb04y"><!></main>');function bU(t,e){ee(e,!1);const n=Ve(),r=()=>he(Lw,"$darkModeStore",n),o=D();Jg(async()=>{const c=window.location.origin;try{await V$({workerURL:`${c}/minizinc-worker.js`,wasmURL:`${c}/minizinc.wasm`,dataURL:`${c}/minizinc.data`})}catch(u){const _="Failed to initialize MiniZinc: "+u.message;console.log(_)}}),G(()=>r(),()=>{x(o,r()?"dark":"light")}),ve(),de();var a=fU(),s=q(a);dU(s,{}),P(a),Z(()=>A(a,"data-theme",v(o))),S(t,a),te()}export{bU as component,IU as universal};
