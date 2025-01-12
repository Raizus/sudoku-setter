var kb=Object.defineProperty;var Gb=(t,e,n)=>e in t?kb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ge=(t,e,n)=>Gb(t,typeof e!="symbol"?e+"":e,n);import{b as Zc,e as Mb,a as N,n as ae,t as re,c as ye,d as Fb}from"../chunks/disclose-version.Ct3fDSVq.js";import{i as fe}from"../chunks/legacy.ClyFa4S2.js";import{A as Xg,b as vu,h as bt,G as Qo,F as Jo,O as Zg,Y as Qg,ad as $b,ae as cg,U as Qi,c as dr,au as ps,af as pu,a as ks,ag as Jg,C as Qc,av as ug,aw as Ub,H as Hb,ax as Pb,d as mu,B as Cu,V as Bb,L as Wb,I as Jc,ay as Eu,az as Iu,a1 as Yb,a7 as dg,aA as eh,aB as zb,aC as Vb,R as th,W as jb,S as qb,E as Kb,aD as bu,aE as Xb,ac as Zb,aF as Qb,aG as Jb,ai as wu,M as nh,aH as ew,j as tw,a9 as nw,p as te,aI as F,aJ as ve,t as Z,e as ne,x as U,v as q,w as H,$ as S,l as v,aK as D,f as ue,aL as ei,m as ee,as as Xe,aM as kc,o as fg,aN as rw}from"../chunks/runtime.cQGiEnnE.js";import{i as ow,a as iw,b as aw,c as sw,d as lw,e as cw,n as uw,f as dw,l as Ou,g as De,s as nt,r as fw}from"../chunks/render.DRSTKqOj.js";import{d as _w,s as ze,e as ua,f as he,p as $,i as _e,b as Eo,c as rh,m as oh}from"../chunks/props.BivayBCD.js";import{d as ln,w as $t,g as st}from"../chunks/index.C12NDSKU.js";import{o as ih,a as gw}from"../chunks/index-client.DmJlnVTH.js";function gt(t,e){return e}function hw(t,e,n,r){for(var o=[],a=e.length,s=0;s<a;s++)Ub(e[s].e,o,!0);var c=a>0&&o.length===0&&n!==null;if(c){var u=n.parentNode;Hb(u),u.append(n),r.clear(),jr(t,e[0].prev,e[a-1].next)}Pb(o,()=>{for(var _=0;_<a;_++){var g=e[_];c||(r.delete(g.k),jr(t,g.prev,g.next)),mu(g.e,!c)}})}function We(t,e,n,r,o,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&eh)!==0;if(u){var _=t;s=bt?Qo(Cu(_)):_.appendChild(Xg())}bt&&Jo();var g=null,h=!1;vu(()=>{var p=n(),m=Zg(p)?p:p==null?[]:Qg(p),C=m.length;if(h&&C===0)return;h=C===0;let I=!1;if(bt){var O=s.data===$b;O!==(C===0)&&(s=cg(),Qo(s),Qi(!1),I=!0)}if(bt){for(var b=null,A,T=0;T<C;T++){if(dr.nodeType===8&&dr.data===Bb){s=dr,I=!0,Qi(!1);break}var M=m[T],k=r(M,T);A=ah(dr,c,b,null,M,k,T,o,e),c.items.set(k,A),b=A}C>0&&Qo(cg())}if(!bt){var Y=Wb;vw(m,c,s,o,e,(Y.f&ps)!==0,r)}a!==null&&(C===0?g?pu(g):g=ks(()=>a(s)):g!==null&&Jg(g,()=>{g=null})),I&&Qi(!0),n()}),bt&&(s=dr)}function vw(t,e,n,r,o,a,s,c){var Ie,Fe,lt,xe;var u=(o&zb)!==0,_=(o&(Eu|Iu))!==0,g=t.length,h=e.items,p=e.first,m=p,C,I=null,O,b=[],A=[],T,M,k,Y;if(u)for(Y=0;Y<g;Y+=1)T=t[Y],M=s(T,Y),k=h.get(M),k!==void 0&&((Ie=k.a)==null||Ie.measure(),(O??(O=new Set)).add(k));for(Y=0;Y<g;Y+=1){if(T=t[Y],M=s(T,Y),k=h.get(M),k===void 0){var W=m?m.e.nodes_start:n;I=ah(W,e,I,I===null?e.first:I.next,T,M,Y,r,o),h.set(M,I),b=[],A=[],m=I.next;continue}if(_&&pw(k,T,Y,o),k.e.f&ps&&(pu(k.e),u&&((Fe=k.a)==null||Fe.unfix(),(O??(O=new Set)).delete(k))),k!==m){if(C!==void 0&&C.has(k)){if(b.length<A.length){var K=A[0],oe;I=K.prev;var de=b[0],J=b[b.length-1];for(oe=0;oe<b.length;oe+=1)_g(b[oe],K,n);for(oe=0;oe<A.length;oe+=1)C.delete(A[oe]);jr(e,de.prev,J.next),jr(e,I,de),jr(e,J,K),m=K,I=J,Y-=1,b=[],A=[]}else C.delete(k),_g(k,m,n),jr(e,k.prev,k.next),jr(e,k,I===null?e.first:I.next),jr(e,I,k),I=k;continue}for(b=[],A=[];m!==null&&m.k!==M;)(a||!(m.e.f&ps))&&(C??(C=new Set)).add(m),A.push(m),m=m.next;if(m===null)continue;k=m}b.push(k),I=k,m=k.next}if(m!==null||C!==void 0){for(var le=C===void 0?[]:Qg(C);m!==null;)(a||!(m.e.f&ps))&&le.push(m),m=m.next;var be=le.length;if(be>0){var Ce=o&eh&&g===0?n:null;if(u){for(Y=0;Y<be;Y+=1)(lt=le[Y].a)==null||lt.measure();for(Y=0;Y<be;Y+=1)(xe=le[Y].a)==null||xe.fix()}hw(e,le,Ce,h)}}u&&Jc(()=>{var we;if(O!==void 0)for(k of O)(we=k.a)==null||we.apply()}),Qc.first=e.first&&e.first.e,Qc.last=I&&I.e}function pw(t,e,n,r){r&Eu&&ug(t.v,e),r&Iu?ug(t.i,n):t.i=n}function ah(t,e,n,r,o,a,s,c,u,_){var g=(u&Eu)!==0,h=(u&Vb)===0,p=g?h?Yb(o):dg(o):o,m=u&Iu?dg(s):s,C={i:m,v:p,k:a,a:null,e:null,prev:n,next:r};try{return C.e=ks(()=>c(t,p,m),bt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function _g(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=th(a);o.before(a),a=s}}function jr(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function mw(t,e,n,r,o){var a=t,s="",c;vu(()=>{if(s===(s=e()??"")){bt&&Jo();return}c!==void 0&&(mu(c),c=void 0),s!==""&&(c=ks(()=>{if(bt){dr.data;for(var u=Jo(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=th(u);if(u===null)throw jb(),qb;Zc(dr,_),a=Qo(u);return}var g=s+"",h=Mb(g);Zc(Cu(h),h.lastChild),a.before(h)}))})}function ut(t,e,n,r,o){var c;bt&&Jo();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function sh(t,e,n,r,o,a){let s=bt;bt&&Jo();var c,u,_=null;bt&&dr.nodeType===1&&(_=dr,Jo());var g=bt?dr:t,h;vu(()=>{const p=e()||null;var m=p==="svg"?bu:null;p!==c&&(h&&(p===null?Jg(h,()=>{h=null,u=null}):p===u?pu(h):mu(h)),p&&p!==u&&(h=ks(()=>{if(_=bt?_:m?document.createElementNS(m,p):document.createElement(p),Zc(_,_),r){bt&&ow(p)&&_.append(document.createComment(""));var C=bt?Cu(_):_.appendChild(Xg());bt&&(C===null?Qi(!1):Qo(C)),r(_,C)}Qc.nodes_end=_,g.before(_)})),c=p,c&&(u=c))},Kb),s&&(Qi(!0),Qo(g))}function lh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=lh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Cw(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=lh(t))&&(r&&(r+=" "),r+=e);return r}function Ew(t){return typeof t=="object"?Cw(t):t??""}function jt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;x(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;x(t,"checked",null),t.checked=o}}};t.__on_r=n,Jb(n),iw()}}function Iw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function ch(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function bw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function x(t,e,n,r){var o=t.__attributes??(t.__attributes={});bt&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Xb]=n),n==null?t.removeAttribute(e):typeof n!="string"&&dh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function uh(t,e,n,r,o=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=Ew(n.class));var g=dh(t),h=t.__attributes??(t.__attributes={});for(const b in n){let A=n[b];if(u&&b==="value"&&A==null){t.value=t.__value="",c[b]=A;continue}var p=c[b];if(A!==p){c[b]=A;var m=b[0]+b[1];if(m!=="$$"){if(m==="on"){const T={},M="$$"+b;let k=b.slice(2);var C=dw(k);if(aw(k)&&(k=k.slice(0,-7),T.capture=!0),!C&&p){if(A!=null)continue;t.removeEventListener(k,c[M],T),c[M]=null}if(A!=null)if(C)t[`__${k}`]=A,lw([k]);else{let Y=function(W){c[b].call(this,W)};c[M]=sw(k,t,Y,T)}else C&&(t[`__${k}`]=void 0)}else if(b==="style"&&A!=null)t.style.cssText=A+"";else if(b==="autofocus")cw(t,!!A);else if(b==="__value"||b==="value"&&A!=null)t.value=t[b]=t.__value=A;else if(b==="selected"&&u)bw(t,A);else{var I=b;o||(I=uw(I));var O=I==="defaultValue"||I==="defaultChecked";if(A==null&&!a&&!O)if(h[b]=null,I==="value"||I==="checked"){let T=t;if(I==="value"){let M=T.defaultValue;T.removeAttribute(I),T.defaultValue=M}else{let M=T.defaultChecked;T.removeAttribute(I),T.defaultChecked=M}}else t.removeAttribute(b);else O||g.includes(I)&&(a||typeof A!="string")?t[I]=A:typeof A!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||x(t,I,A))}b==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var gg=new Map;function dh(t){var e=gg.get(t.nodeName);if(e)return e;gg.set(t.nodeName,e=[]);for(var n,r=t,o=Element.prototype;o!==r;){n=Qb(r);for(var a in n)n[a].set&&e.push(a);r=Zb(r)}return e}function Fn(t,e,n){var r=t.__className,o=fh(e);bt&&t.getAttribute("class")===o?t.__className=o:(r!==o||bt&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function ww(t,e,n){var r=t.__className,o=fh(e);bt&&t.className===o?t.__className=o:(r!==o||bt&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function fh(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=ew();Ou(t,"input",o=>{var a=o?t.defaultValue:t.value;if(a=Mc(t)?Fc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||tw(e)==null&&t.value)&&n(Mc(t)?Fc(t.value):t.value),wu(()=>{var o=e();Mc(t)&&o===Fc(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const Gc=new Set;function Gs(t,e,n,r,o=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Ou(n,"change",()=>{var _=n.__value;a&&(_=hg(s,_,n.checked)),o(_)},()=>o(a?[]:null)),wu(()=>{var _=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}a?(_=_||[],n.checked=_.includes(n.__value)):n.checked=_w(n.__value,_)}),nh(()=>{var _=s.indexOf(n);_!==-1&&s.splice(_,1)}),Gc.has(s)||(Gc.add(s),Jc(()=>{s.sort((_,g)=>_.compareDocumentPosition(g)===4?-1:1),Gc.delete(s)})),Jc(()=>{if(c){var _;if(a)_=hg(s,_,n.checked);else{var g=s.find(h=>h.checked);_=g==null?void 0:g.__value}o(_)}})}function hg(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Mc(t){var e=t.type;return e==="number"||e==="range"}function Fc(t){return t===""?null:+t}function Ow(t,e,n=e){Ou(t,"change",()=>{n(t.files)}),wu(()=>{t.files=e()})}function Ze(t,e,n){var r=nw(t,e);r&&r.set&&(t[e]=n,nh(()=>{t[e]=null}))}function Lw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Xn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function $c(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function yw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=Zg(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}const Aw=!0,AU=Object.freeze(Object.defineProperty({__proto__:null,prerender:Aw},Symbol.toStringTag,{value:"Module"}));function xw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=$t(xw()),Sw=ln(Wt,t=>t.darkMode);function Nw(t){Wt.update(e=>({...e,darkMode:t}))}function Dw(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function Tw(t){Wt.update(e=>({...e,penToolActive:t}))}function Rw(t){Wt.update(e=>({...e,letterToolActive:t}))}function kw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function Gw(t){Wt.update(e=>({...e,checkConflicts:t}))}function Mw(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function Fw(t){Wt.update(e=>({...e,hideFog:t}))}function $w(t){Wt.update(e=>({...e,showSolution:t}))}var Uw=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function Hw(t){var e=Uw();N(t,e)}var Pw=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function Bw(t){var e=Pw();N(t,e)}var Ww=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function Yw(t){var e=Ww();N(t,e)}var zw=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function Vw(t){var e=zw();N(t,e)}var Lu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Lu||{}),_h=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(_h||{}),gh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(gh||{}),hh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(hh||{}),vh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t))(vh||{}),Ms=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CAVE_CLUE="Cave Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t))(Ms||{}),yu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(yu||{}),Au=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t))(Au||{}),xu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t))(xu||{}),Su=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Su||{}),Nu=(t=>(t.THERMOMETER="Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Nu||{}),Du=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(Du||{}),Tu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Tu||{}),Ru=(t=>(t.CLONE_REGION="Clone Region",t))(Ru||{}),ku=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t))(ku||{}),Gu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Gu||{}),Mu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t))(Mu||{}),Fu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Fu||{}),$u=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))($u||{}),ph=(t=>(t.PEN_TOOL="Pen Tool",t))(ph||{});const Uu={..._h,...gh,...hh,...vh},mh={...Ms,...yu,...Au,...xu,...Su,...Nu,...Du,...Tu,...Ru,...ku,...Gu,...Mu,...Fu},f={...Lu,...Uu,...mh,...$u,...ph};var R=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(R||{});function jw(t){return Object.values(Uu).includes(t)}function qw(t){return Object.values(mh).includes(t)}function Hu(t){return Object.values(yu).includes(t)||t===f.COSMETIC_CELL_ARROW}function Pu(t){return Object.values(Au).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function Kw(t){return Object.values(Ms).includes(t)||Hu(t)||Pu(t)||t===f.COSMETIC_CELL_SHAPE||t===f.COSMETIC_CELL_ARROW||t===f.COSMETIC_CELL_MULTI_ARROW}function Bu(t){return Object.values(xu).includes(t)||t===f.COSMETIC_EDGE}function Ch(t){return Object.values(Su).includes(t)||t===f.COSMETIC_CORNER}function Wu(t){return Object.values(Nu).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Yu(t){return Object.values(Du).includes(t)||t===f.COSMETIC_ARROW}function zu(t){return Object.values(Tu).includes(t)||t===f.COSMETIC_CAGE}function Xw(t){return Object.values(Mu).includes(t)}function Eh(t){return Object.values(Ru).includes(t)}function aa(t){const e=Object.values(ku),n=Object.values(Gu);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function Zw(t){return Object.values(Fu).includes(t)}function Qw(t){return Object.values($u).includes(t)}function Vu(t){return Object.values(Lu).includes(t)}const Jw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],eO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Ih(t){for(const e of Object.values(f))if(e===t)return e}function bh(t,e){return Object.values(e).includes(t)}class ti extends Map{constructor(){super()}setConstraint(e,n){return jw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new ti;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new ti;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Ih(r);a!==void 0&&bh(a,Uu)&&typeof o=="boolean"&&o&&n.setConstraint(a,o)}return n}}var Pe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Pe||{});function wh(t){if(!(t in Pe))throw Error(" not a key in DIRECTION");return Pe[t]}function je(t,e){return t.r===e.r&&t.c===e.c}function tO(t,e){return{r:t.r+e.r,c:t.c+e.c}}function nO(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Fs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!je(t,e)}function rO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Es(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function qt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function $s(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function oO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function iO(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function aO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const sO=new Map([[6,Pe.N],[2,Pe.S],[0,Pe.E],[4,Pe.W],[7,Pe.NE],[5,Pe.NW],[1,Pe.SE],[3,Pe.SW]]);function ju(t){t=t%8;const e=sO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const lO=new Map([[Pe.N,{r:-1,c:0}],[Pe.S,{r:1,c:0}],[Pe.E,{r:0,c:1}],[Pe.W,{r:0,c:-1}],[Pe.NE,{r:-1,c:1}],[Pe.NW,{r:-1,c:-1}],[Pe.SE,{r:1,c:1}],[Pe.SW,{r:1,c:-1}]]);function Us(t){const e=lO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Oh(t,e){const n=Us(e);return tO(t,n)}function cO(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Lh(t,e,n=!1){const r=t.some(a=>je(a,e)),o=n?t.some(a=>Fs(a,e)):t.some(a=>rO(a,e));if(!r&&o){const a=[...t,e];return Es(a),a}return t}function us(t){return`R${t.r+1}C${t.c+1}`}function qu(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ki={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var uO=Ki.exports,vg;function dO(){return vg||(vg=1,function(t,e){(function(){var n,r="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,g="__lodash_placeholder__",h=1,p=2,m=4,C=1,I=2,O=1,b=2,A=4,T=8,M=16,k=32,Y=64,W=128,K=256,oe=512,de=30,J="...",le=800,be=16,Ce=1,Ie=2,Fe=3,lt=1/0,xe=9007199254740991,we=17976931348623157e292,ft=NaN,ct=4294967295,Un=ct-1,Lt=ct>>>1,Ln=[["ary",W],["bind",O],["bindKey",b],["curry",T],["curryRight",M],["flip",oe],["partial",k],["partialRight",Y],["rearg",K]],Xt="[object Arguments]",vr="[object Array]",Jn="[object AsyncFunction]",pr="[object Boolean]",ar="[object Date]",Li="[object DOMException]",Gr="[object Error]",To="[object Function]",Ge="[object GeneratorFunction]",Ee="[object Map]",Re="[object Number]",ke="[object Null]",St="[object Object]",Td="[object Promise]",Qv="[object Proxy]",yi="[object RegExp]",er="[object Set]",Ai="[object String]",Ia="[object Symbol]",Jv="[object Undefined]",xi="[object WeakMap]",ep="[object WeakSet]",Si="[object ArrayBuffer]",Ro="[object DataView]",_l="[object Float32Array]",gl="[object Float64Array]",hl="[object Int8Array]",vl="[object Int16Array]",pl="[object Int32Array]",ml="[object Uint8Array]",Cl="[object Uint8ClampedArray]",El="[object Uint16Array]",Il="[object Uint32Array]",tp=/\b__p \+= '';/g,np=/\b(__p \+=) '' \+/g,rp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Rd=/&(?:amp|lt|gt|quot|#39);/g,kd=/[&<>"']/g,op=RegExp(Rd.source),ip=RegExp(kd.source),ap=/<%-([\s\S]+?)%>/g,sp=/<%([\s\S]+?)%>/g,Gd=/<%=([\s\S]+?)%>/g,lp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cp=/^\w*$/,up=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bl=/[\\^$.*+?()[\]{}|]/g,dp=RegExp(bl.source),wl=/^\s+/,fp=/\s/,_p=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,gp=/\{\n\/\* \[wrapped with (.+)\] \*/,hp=/,? & /,vp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pp=/[()=,{}\[\]\/\s]/,mp=/\\(\\)?/g,Cp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Md=/\w*$/,Ep=/^[-+]0x[0-9a-f]+$/i,Ip=/^0b[01]+$/i,bp=/^\[object .+?Constructor\]$/,wp=/^0o[0-7]+$/i,Op=/^(?:0|[1-9]\d*)$/,Lp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ba=/($^)/,yp=/['\n\r\u2028\u2029\\]/g,wa="\\ud800-\\udfff",Ap="\\u0300-\\u036f",xp="\\ufe20-\\ufe2f",Sp="\\u20d0-\\u20ff",Fd=Ap+xp+Sp,$d="\\u2700-\\u27bf",Ud="a-z\\xdf-\\xf6\\xf8-\\xff",Np="\\xac\\xb1\\xd7\\xf7",Dp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Tp="\\u2000-\\u206f",Rp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Hd="A-Z\\xc0-\\xd6\\xd8-\\xde",Pd="\\ufe0e\\ufe0f",Bd=Np+Dp+Tp+Rp,Ol="['’]",kp="["+wa+"]",Wd="["+Bd+"]",Oa="["+Fd+"]",Yd="\\d+",Gp="["+$d+"]",zd="["+Ud+"]",Vd="[^"+wa+Bd+Yd+$d+Ud+Hd+"]",Ll="\\ud83c[\\udffb-\\udfff]",Mp="(?:"+Oa+"|"+Ll+")",jd="[^"+wa+"]",yl="(?:\\ud83c[\\udde6-\\uddff]){2}",Al="[\\ud800-\\udbff][\\udc00-\\udfff]",ko="["+Hd+"]",qd="\\u200d",Kd="(?:"+zd+"|"+Vd+")",Fp="(?:"+ko+"|"+Vd+")",Xd="(?:"+Ol+"(?:d|ll|m|re|s|t|ve))?",Zd="(?:"+Ol+"(?:D|LL|M|RE|S|T|VE))?",Qd=Mp+"?",Jd="["+Pd+"]?",$p="(?:"+qd+"(?:"+[jd,yl,Al].join("|")+")"+Jd+Qd+")*",Up="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Hp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ef=Jd+Qd+$p,Pp="(?:"+[Gp,yl,Al].join("|")+")"+ef,Bp="(?:"+[jd+Oa+"?",Oa,yl,Al,kp].join("|")+")",Wp=RegExp(Ol,"g"),Yp=RegExp(Oa,"g"),xl=RegExp(Ll+"(?="+Ll+")|"+Bp+ef,"g"),zp=RegExp([ko+"?"+zd+"+"+Xd+"(?="+[Wd,ko,"$"].join("|")+")",Fp+"+"+Zd+"(?="+[Wd,ko+Kd,"$"].join("|")+")",ko+"?"+Kd+"+"+Xd,ko+"+"+Zd,Hp,Up,Yd,Pp].join("|"),"g"),Vp=RegExp("["+qd+wa+Fd+Pd+"]"),jp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Kp=-1,yt={};yt[_l]=yt[gl]=yt[hl]=yt[vl]=yt[pl]=yt[ml]=yt[Cl]=yt[El]=yt[Il]=!0,yt[Xt]=yt[vr]=yt[Si]=yt[pr]=yt[Ro]=yt[ar]=yt[Gr]=yt[To]=yt[Ee]=yt[Re]=yt[St]=yt[yi]=yt[er]=yt[Ai]=yt[xi]=!1;var wt={};wt[Xt]=wt[vr]=wt[Si]=wt[Ro]=wt[pr]=wt[ar]=wt[_l]=wt[gl]=wt[hl]=wt[vl]=wt[pl]=wt[Ee]=wt[Re]=wt[St]=wt[yi]=wt[er]=wt[Ai]=wt[Ia]=wt[ml]=wt[Cl]=wt[El]=wt[Il]=!0,wt[Gr]=wt[To]=wt[xi]=!1;var Xp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Zp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Jp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},em=parseFloat,tm=parseInt,tf=typeof ds=="object"&&ds&&ds.Object===Object&&ds,nm=typeof self=="object"&&self&&self.Object===Object&&self,zt=tf||nm||Function("return this")(),Sl=e&&!e.nodeType&&e,ao=Sl&&!0&&t&&!t.nodeType&&t,nf=ao&&ao.exports===Sl,Nl=nf&&tf.process,Hn=function(){try{var V=ao&&ao.require&&ao.require("util").types;return V||Nl&&Nl.binding&&Nl.binding("util")}catch{}}(),rf=Hn&&Hn.isArrayBuffer,of=Hn&&Hn.isDate,af=Hn&&Hn.isMap,sf=Hn&&Hn.isRegExp,lf=Hn&&Hn.isSet,cf=Hn&&Hn.isTypedArray;function yn(V,Q,X){switch(X.length){case 0:return V.call(Q);case 1:return V.call(Q,X[0]);case 2:return V.call(Q,X[0],X[1]);case 3:return V.call(Q,X[0],X[1],X[2])}return V.apply(Q,X)}function rm(V,Q,X,Oe){for(var Ve=-1,_t=V==null?0:V.length;++Ve<_t;){var Ut=V[Ve];Q(Oe,Ut,X(Ut),V)}return Oe}function Pn(V,Q){for(var X=-1,Oe=V==null?0:V.length;++X<Oe&&Q(V[X],X,V)!==!1;);return V}function om(V,Q){for(var X=V==null?0:V.length;X--&&Q(V[X],X,V)!==!1;);return V}function uf(V,Q){for(var X=-1,Oe=V==null?0:V.length;++X<Oe;)if(!Q(V[X],X,V))return!1;return!0}function Mr(V,Q){for(var X=-1,Oe=V==null?0:V.length,Ve=0,_t=[];++X<Oe;){var Ut=V[X];Q(Ut,X,V)&&(_t[Ve++]=Ut)}return _t}function La(V,Q){var X=V==null?0:V.length;return!!X&&Go(V,Q,0)>-1}function Dl(V,Q,X){for(var Oe=-1,Ve=V==null?0:V.length;++Oe<Ve;)if(X(Q,V[Oe]))return!0;return!1}function xt(V,Q){for(var X=-1,Oe=V==null?0:V.length,Ve=Array(Oe);++X<Oe;)Ve[X]=Q(V[X],X,V);return Ve}function Fr(V,Q){for(var X=-1,Oe=Q.length,Ve=V.length;++X<Oe;)V[Ve+X]=Q[X];return V}function Tl(V,Q,X,Oe){var Ve=-1,_t=V==null?0:V.length;for(Oe&&_t&&(X=V[++Ve]);++Ve<_t;)X=Q(X,V[Ve],Ve,V);return X}function im(V,Q,X,Oe){var Ve=V==null?0:V.length;for(Oe&&Ve&&(X=V[--Ve]);Ve--;)X=Q(X,V[Ve],Ve,V);return X}function Rl(V,Q){for(var X=-1,Oe=V==null?0:V.length;++X<Oe;)if(Q(V[X],X,V))return!0;return!1}var am=kl("length");function sm(V){return V.split("")}function lm(V){return V.match(vp)||[]}function df(V,Q,X){var Oe;return X(V,function(Ve,_t,Ut){if(Q(Ve,_t,Ut))return Oe=_t,!1}),Oe}function ya(V,Q,X,Oe){for(var Ve=V.length,_t=X+(Oe?1:-1);Oe?_t--:++_t<Ve;)if(Q(V[_t],_t,V))return _t;return-1}function Go(V,Q,X){return Q===Q?Em(V,Q,X):ya(V,ff,X)}function cm(V,Q,X,Oe){for(var Ve=X-1,_t=V.length;++Ve<_t;)if(Oe(V[Ve],Q))return Ve;return-1}function ff(V){return V!==V}function _f(V,Q){var X=V==null?0:V.length;return X?Ml(V,Q)/X:ft}function kl(V){return function(Q){return Q==null?n:Q[V]}}function Gl(V){return function(Q){return V==null?n:V[Q]}}function gf(V,Q,X,Oe,Ve){return Ve(V,function(_t,Ut,It){X=Oe?(Oe=!1,_t):Q(X,_t,Ut,It)}),X}function um(V,Q){var X=V.length;for(V.sort(Q);X--;)V[X]=V[X].value;return V}function Ml(V,Q){for(var X,Oe=-1,Ve=V.length;++Oe<Ve;){var _t=Q(V[Oe]);_t!==n&&(X=X===n?_t:X+_t)}return X}function Fl(V,Q){for(var X=-1,Oe=Array(V);++X<V;)Oe[X]=Q(X);return Oe}function dm(V,Q){return xt(Q,function(X){return[X,V[X]]})}function hf(V){return V&&V.slice(0,Cf(V)+1).replace(wl,"")}function An(V){return function(Q){return V(Q)}}function $l(V,Q){return xt(Q,function(X){return V[X]})}function Ni(V,Q){return V.has(Q)}function vf(V,Q){for(var X=-1,Oe=V.length;++X<Oe&&Go(Q,V[X],0)>-1;);return X}function pf(V,Q){for(var X=V.length;X--&&Go(Q,V[X],0)>-1;);return X}function fm(V,Q){for(var X=V.length,Oe=0;X--;)V[X]===Q&&++Oe;return Oe}var _m=Gl(Xp),gm=Gl(Zp);function hm(V){return"\\"+Jp[V]}function vm(V,Q){return V==null?n:V[Q]}function Mo(V){return Vp.test(V)}function pm(V){return jp.test(V)}function mm(V){for(var Q,X=[];!(Q=V.next()).done;)X.push(Q.value);return X}function Ul(V){var Q=-1,X=Array(V.size);return V.forEach(function(Oe,Ve){X[++Q]=[Ve,Oe]}),X}function mf(V,Q){return function(X){return V(Q(X))}}function $r(V,Q){for(var X=-1,Oe=V.length,Ve=0,_t=[];++X<Oe;){var Ut=V[X];(Ut===Q||Ut===g)&&(V[X]=g,_t[Ve++]=X)}return _t}function Aa(V){var Q=-1,X=Array(V.size);return V.forEach(function(Oe){X[++Q]=Oe}),X}function Cm(V){var Q=-1,X=Array(V.size);return V.forEach(function(Oe){X[++Q]=[Oe,Oe]}),X}function Em(V,Q,X){for(var Oe=X-1,Ve=V.length;++Oe<Ve;)if(V[Oe]===Q)return Oe;return-1}function Im(V,Q,X){for(var Oe=X+1;Oe--;)if(V[Oe]===Q)return Oe;return Oe}function Fo(V){return Mo(V)?wm(V):am(V)}function tr(V){return Mo(V)?Om(V):sm(V)}function Cf(V){for(var Q=V.length;Q--&&fp.test(V.charAt(Q)););return Q}var bm=Gl(Qp);function wm(V){for(var Q=xl.lastIndex=0;xl.test(V);)++Q;return Q}function Om(V){return V.match(xl)||[]}function Lm(V){return V.match(zp)||[]}var ym=function V(Q){Q=Q==null?zt:$o.defaults(zt.Object(),Q,$o.pick(zt,qp));var X=Q.Array,Oe=Q.Date,Ve=Q.Error,_t=Q.Function,Ut=Q.Math,It=Q.Object,Hl=Q.RegExp,Am=Q.String,Bn=Q.TypeError,xa=X.prototype,xm=_t.prototype,Uo=It.prototype,Sa=Q["__core-js_shared__"],Na=xm.toString,vt=Uo.hasOwnProperty,Sm=0,Ef=function(){var i=/[^.]+$/.exec(Sa&&Sa.keys&&Sa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Da=Uo.toString,Nm=Na.call(It),Dm=zt._,Tm=Hl("^"+Na.call(vt).replace(bl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ta=nf?Q.Buffer:n,Ur=Q.Symbol,Ra=Q.Uint8Array,If=Ta?Ta.allocUnsafe:n,ka=mf(It.getPrototypeOf,It),bf=It.create,wf=Uo.propertyIsEnumerable,Ga=xa.splice,Of=Ur?Ur.isConcatSpreadable:n,Di=Ur?Ur.iterator:n,so=Ur?Ur.toStringTag:n,Ma=function(){try{var i=_o(It,"defineProperty");return i({},"",{}),i}catch{}}(),Rm=Q.clearTimeout!==zt.clearTimeout&&Q.clearTimeout,km=Oe&&Oe.now!==zt.Date.now&&Oe.now,Gm=Q.setTimeout!==zt.setTimeout&&Q.setTimeout,Fa=Ut.ceil,$a=Ut.floor,Pl=It.getOwnPropertySymbols,Mm=Ta?Ta.isBuffer:n,Lf=Q.isFinite,Fm=xa.join,$m=mf(It.keys,It),Ht=Ut.max,Zt=Ut.min,Um=Oe.now,Hm=Q.parseInt,yf=Ut.random,Pm=xa.reverse,Bl=_o(Q,"DataView"),Ti=_o(Q,"Map"),Wl=_o(Q,"Promise"),Ho=_o(Q,"Set"),Ri=_o(Q,"WeakMap"),ki=_o(It,"create"),Ua=Ri&&new Ri,Po={},Bm=go(Bl),Wm=go(Ti),Ym=go(Wl),zm=go(Ho),Vm=go(Ri),Ha=Ur?Ur.prototype:n,Gi=Ha?Ha.valueOf:n,Af=Ha?Ha.toString:n;function L(i){if(Dt(i)&&!Ke(i)&&!(i instanceof it)){if(i instanceof Wn)return i;if(vt.call(i,"__wrapped__"))return x_(i)}return new Wn(i)}var Bo=function(){function i(){}return function(l){if(!Nt(l))return{};if(bf)return bf(l);i.prototype=l;var d=new i;return i.prototype=n,d}}();function Pa(){}function Wn(i,l){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:ap,evaluate:sp,interpolate:Gd,variable:"",imports:{_:L}},L.prototype=Pa.prototype,L.prototype.constructor=L,Wn.prototype=Bo(Pa.prototype),Wn.prototype.constructor=Wn;function it(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function jm(){var i=new it(this.__wrapped__);return i.__actions__=fn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=fn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=fn(this.__views__),i}function qm(){if(this.__filtered__){var i=new it(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function Km(){var i=this.__wrapped__.value(),l=this.__dir__,d=Ke(i),E=l<0,w=d?i.length:0,y=s0(0,w,this.__views__),G=y.start,P=y.end,j=P-G,ie=E?P:G-1,se=this.__iteratees__,ce=se.length,me=0,Ne=Zt(j,this.__takeCount__);if(!d||!E&&w==j&&Ne==j)return Zf(i,this.__actions__);var Ue=[];e:for(;j--&&me<Ne;){ie+=l;for(var et=-1,He=i[ie];++et<ce;){var ot=se[et],at=ot.iteratee,Nn=ot.type,nn=at(He);if(Nn==Ie)He=nn;else if(!nn){if(Nn==Ce)continue e;break e}}Ue[me++]=He}return Ue}it.prototype=Bo(Pa.prototype),it.prototype.constructor=it;function lo(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function Xm(){this.__data__=ki?ki(null):{},this.size=0}function Zm(i){var l=this.has(i)&&delete this.__data__[i];return this.size-=l?1:0,l}function Qm(i){var l=this.__data__;if(ki){var d=l[i];return d===u?n:d}return vt.call(l,i)?l[i]:n}function Jm(i){var l=this.__data__;return ki?l[i]!==n:vt.call(l,i)}function e1(i,l){var d=this.__data__;return this.size+=this.has(i)?0:1,d[i]=ki&&l===n?u:l,this}lo.prototype.clear=Xm,lo.prototype.delete=Zm,lo.prototype.get=Qm,lo.prototype.has=Jm,lo.prototype.set=e1;function mr(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function t1(){this.__data__=[],this.size=0}function n1(i){var l=this.__data__,d=Ba(l,i);if(d<0)return!1;var E=l.length-1;return d==E?l.pop():Ga.call(l,d,1),--this.size,!0}function r1(i){var l=this.__data__,d=Ba(l,i);return d<0?n:l[d][1]}function o1(i){return Ba(this.__data__,i)>-1}function i1(i,l){var d=this.__data__,E=Ba(d,i);return E<0?(++this.size,d.push([i,l])):d[E][1]=l,this}mr.prototype.clear=t1,mr.prototype.delete=n1,mr.prototype.get=r1,mr.prototype.has=o1,mr.prototype.set=i1;function Cr(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function a1(){this.size=0,this.__data__={hash:new lo,map:new(Ti||mr),string:new lo}}function s1(i){var l=es(this,i).delete(i);return this.size-=l?1:0,l}function l1(i){return es(this,i).get(i)}function c1(i){return es(this,i).has(i)}function u1(i,l){var d=es(this,i),E=d.size;return d.set(i,l),this.size+=d.size==E?0:1,this}Cr.prototype.clear=a1,Cr.prototype.delete=s1,Cr.prototype.get=l1,Cr.prototype.has=c1,Cr.prototype.set=u1;function co(i){var l=-1,d=i==null?0:i.length;for(this.__data__=new Cr;++l<d;)this.add(i[l])}function d1(i){return this.__data__.set(i,u),this}function f1(i){return this.__data__.has(i)}co.prototype.add=co.prototype.push=d1,co.prototype.has=f1;function nr(i){var l=this.__data__=new mr(i);this.size=l.size}function _1(){this.__data__=new mr,this.size=0}function g1(i){var l=this.__data__,d=l.delete(i);return this.size=l.size,d}function h1(i){return this.__data__.get(i)}function v1(i){return this.__data__.has(i)}function p1(i,l){var d=this.__data__;if(d instanceof mr){var E=d.__data__;if(!Ti||E.length<o-1)return E.push([i,l]),this.size=++d.size,this;d=this.__data__=new Cr(E)}return d.set(i,l),this.size=d.size,this}nr.prototype.clear=_1,nr.prototype.delete=g1,nr.prototype.get=h1,nr.prototype.has=v1,nr.prototype.set=p1;function xf(i,l){var d=Ke(i),E=!d&&ho(i),w=!d&&!E&&Yr(i),y=!d&&!E&&!w&&Vo(i),G=d||E||w||y,P=G?Fl(i.length,Am):[],j=P.length;for(var ie in i)(l||vt.call(i,ie))&&!(G&&(ie=="length"||w&&(ie=="offset"||ie=="parent")||y&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||wr(ie,j)))&&P.push(ie);return P}function Sf(i){var l=i.length;return l?i[ec(0,l-1)]:n}function m1(i,l){return ts(fn(i),uo(l,0,i.length))}function C1(i){return ts(fn(i))}function Yl(i,l,d){(d!==n&&!rr(i[l],d)||d===n&&!(l in i))&&Er(i,l,d)}function Mi(i,l,d){var E=i[l];(!(vt.call(i,l)&&rr(E,d))||d===n&&!(l in i))&&Er(i,l,d)}function Ba(i,l){for(var d=i.length;d--;)if(rr(i[d][0],l))return d;return-1}function E1(i,l,d,E){return Hr(i,function(w,y,G){l(E,w,d(w),G)}),E}function Nf(i,l){return i&&lr(l,Bt(l),i)}function I1(i,l){return i&&lr(l,gn(l),i)}function Er(i,l,d){l=="__proto__"&&Ma?Ma(i,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):i[l]=d}function zl(i,l){for(var d=-1,E=l.length,w=X(E),y=i==null;++d<E;)w[d]=y?n:Lc(i,l[d]);return w}function uo(i,l,d){return i===i&&(d!==n&&(i=i<=d?i:d),l!==n&&(i=i>=l?i:l)),i}function Yn(i,l,d,E,w,y){var G,P=l&h,j=l&p,ie=l&m;if(d&&(G=w?d(i,E,w,y):d(i)),G!==n)return G;if(!Nt(i))return i;var se=Ke(i);if(se){if(G=c0(i),!P)return fn(i,G)}else{var ce=Qt(i),me=ce==To||ce==Ge;if(Yr(i))return e_(i,P);if(ce==St||ce==Xt||me&&!w){if(G=j||me?{}:C_(i),!P)return j?Q1(i,I1(G,i)):Z1(i,Nf(G,i))}else{if(!wt[ce])return w?i:{};G=u0(i,ce,P)}}y||(y=new nr);var Ne=y.get(i);if(Ne)return Ne;y.set(i,G),q_(i)?i.forEach(function(He){G.add(Yn(He,l,d,He,i,y))}):V_(i)&&i.forEach(function(He,ot){G.set(ot,Yn(He,l,d,ot,i,y))});var Ue=ie?j?dc:uc:j?gn:Bt,et=se?n:Ue(i);return Pn(et||i,function(He,ot){et&&(ot=He,He=i[ot]),Mi(G,ot,Yn(He,l,d,ot,i,y))}),G}function b1(i){var l=Bt(i);return function(d){return Df(d,i,l)}}function Df(i,l,d){var E=d.length;if(i==null)return!E;for(i=It(i);E--;){var w=d[E],y=l[w],G=i[w];if(G===n&&!(w in i)||!y(G))return!1}return!0}function Tf(i,l,d){if(typeof i!="function")throw new Bn(s);return Wi(function(){i.apply(n,d)},l)}function Fi(i,l,d,E){var w=-1,y=La,G=!0,P=i.length,j=[],ie=l.length;if(!P)return j;d&&(l=xt(l,An(d))),E?(y=Dl,G=!1):l.length>=o&&(y=Ni,G=!1,l=new co(l));e:for(;++w<P;){var se=i[w],ce=d==null?se:d(se);if(se=E||se!==0?se:0,G&&ce===ce){for(var me=ie;me--;)if(l[me]===ce)continue e;j.push(se)}else y(l,ce,E)||j.push(se)}return j}var Hr=i_(sr),Rf=i_(jl,!0);function w1(i,l){var d=!0;return Hr(i,function(E,w,y){return d=!!l(E,w,y),d}),d}function Wa(i,l,d){for(var E=-1,w=i.length;++E<w;){var y=i[E],G=l(y);if(G!=null&&(P===n?G===G&&!Sn(G):d(G,P)))var P=G,j=y}return j}function O1(i,l,d,E){var w=i.length;for(d=Qe(d),d<0&&(d=-d>w?0:w+d),E=E===n||E>w?w:Qe(E),E<0&&(E+=w),E=d>E?0:X_(E);d<E;)i[d++]=l;return i}function kf(i,l){var d=[];return Hr(i,function(E,w,y){l(E,w,y)&&d.push(E)}),d}function Vt(i,l,d,E,w){var y=-1,G=i.length;for(d||(d=f0),w||(w=[]);++y<G;){var P=i[y];l>0&&d(P)?l>1?Vt(P,l-1,d,E,w):Fr(w,P):E||(w[w.length]=P)}return w}var Vl=a_(),Gf=a_(!0);function sr(i,l){return i&&Vl(i,l,Bt)}function jl(i,l){return i&&Gf(i,l,Bt)}function Ya(i,l){return Mr(l,function(d){return Or(i[d])})}function fo(i,l){l=Br(l,i);for(var d=0,E=l.length;i!=null&&d<E;)i=i[cr(l[d++])];return d&&d==E?i:n}function Mf(i,l,d){var E=l(i);return Ke(i)?E:Fr(E,d(i))}function en(i){return i==null?i===n?Jv:ke:so&&so in It(i)?a0(i):C0(i)}function ql(i,l){return i>l}function L1(i,l){return i!=null&&vt.call(i,l)}function y1(i,l){return i!=null&&l in It(i)}function A1(i,l,d){return i>=Zt(l,d)&&i<Ht(l,d)}function Kl(i,l,d){for(var E=d?Dl:La,w=i[0].length,y=i.length,G=y,P=X(y),j=1/0,ie=[];G--;){var se=i[G];G&&l&&(se=xt(se,An(l))),j=Zt(se.length,j),P[G]=!d&&(l||w>=120&&se.length>=120)?new co(G&&se):n}se=i[0];var ce=-1,me=P[0];e:for(;++ce<w&&ie.length<j;){var Ne=se[ce],Ue=l?l(Ne):Ne;if(Ne=d||Ne!==0?Ne:0,!(me?Ni(me,Ue):E(ie,Ue,d))){for(G=y;--G;){var et=P[G];if(!(et?Ni(et,Ue):E(i[G],Ue,d)))continue e}me&&me.push(Ue),ie.push(Ne)}}return ie}function x1(i,l,d,E){return sr(i,function(w,y,G){l(E,d(w),y,G)}),E}function $i(i,l,d){l=Br(l,i),i=w_(i,l);var E=i==null?i:i[cr(Vn(l))];return E==null?n:yn(E,i,d)}function Ff(i){return Dt(i)&&en(i)==Xt}function S1(i){return Dt(i)&&en(i)==Si}function N1(i){return Dt(i)&&en(i)==ar}function Ui(i,l,d,E,w){return i===l?!0:i==null||l==null||!Dt(i)&&!Dt(l)?i!==i&&l!==l:D1(i,l,d,E,Ui,w)}function D1(i,l,d,E,w,y){var G=Ke(i),P=Ke(l),j=G?vr:Qt(i),ie=P?vr:Qt(l);j=j==Xt?St:j,ie=ie==Xt?St:ie;var se=j==St,ce=ie==St,me=j==ie;if(me&&Yr(i)){if(!Yr(l))return!1;G=!0,se=!1}if(me&&!se)return y||(y=new nr),G||Vo(i)?v_(i,l,d,E,w,y):o0(i,l,j,d,E,w,y);if(!(d&C)){var Ne=se&&vt.call(i,"__wrapped__"),Ue=ce&&vt.call(l,"__wrapped__");if(Ne||Ue){var et=Ne?i.value():i,He=Ue?l.value():l;return y||(y=new nr),w(et,He,d,E,y)}}return me?(y||(y=new nr),i0(i,l,d,E,w,y)):!1}function T1(i){return Dt(i)&&Qt(i)==Ee}function Xl(i,l,d,E){var w=d.length,y=w,G=!E;if(i==null)return!y;for(i=It(i);w--;){var P=d[w];if(G&&P[2]?P[1]!==i[P[0]]:!(P[0]in i))return!1}for(;++w<y;){P=d[w];var j=P[0],ie=i[j],se=P[1];if(G&&P[2]){if(ie===n&&!(j in i))return!1}else{var ce=new nr;if(E)var me=E(ie,se,j,i,l,ce);if(!(me===n?Ui(se,ie,C|I,E,ce):me))return!1}}return!0}function $f(i){if(!Nt(i)||g0(i))return!1;var l=Or(i)?Tm:bp;return l.test(go(i))}function R1(i){return Dt(i)&&en(i)==yi}function k1(i){return Dt(i)&&Qt(i)==er}function G1(i){return Dt(i)&&ss(i.length)&&!!yt[en(i)]}function Uf(i){return typeof i=="function"?i:i==null?hn:typeof i=="object"?Ke(i)?Bf(i[0],i[1]):Pf(i):sg(i)}function Zl(i){if(!Bi(i))return $m(i);var l=[];for(var d in It(i))vt.call(i,d)&&d!="constructor"&&l.push(d);return l}function M1(i){if(!Nt(i))return m0(i);var l=Bi(i),d=[];for(var E in i)E=="constructor"&&(l||!vt.call(i,E))||d.push(E);return d}function Ql(i,l){return i<l}function Hf(i,l){var d=-1,E=_n(i)?X(i.length):[];return Hr(i,function(w,y,G){E[++d]=l(w,y,G)}),E}function Pf(i){var l=_c(i);return l.length==1&&l[0][2]?I_(l[0][0],l[0][1]):function(d){return d===i||Xl(d,i,l)}}function Bf(i,l){return hc(i)&&E_(l)?I_(cr(i),l):function(d){var E=Lc(d,i);return E===n&&E===l?yc(d,i):Ui(l,E,C|I)}}function za(i,l,d,E,w){i!==l&&Vl(l,function(y,G){if(w||(w=new nr),Nt(y))F1(i,l,G,d,za,E,w);else{var P=E?E(pc(i,G),y,G+"",i,l,w):n;P===n&&(P=y),Yl(i,G,P)}},gn)}function F1(i,l,d,E,w,y,G){var P=pc(i,d),j=pc(l,d),ie=G.get(j);if(ie){Yl(i,d,ie);return}var se=y?y(P,j,d+"",i,l,G):n,ce=se===n;if(ce){var me=Ke(j),Ne=!me&&Yr(j),Ue=!me&&!Ne&&Vo(j);se=j,me||Ne||Ue?Ke(P)?se=P:Tt(P)?se=fn(P):Ne?(ce=!1,se=e_(j,!0)):Ue?(ce=!1,se=t_(j,!0)):se=[]:Yi(j)||ho(j)?(se=P,ho(P)?se=Z_(P):(!Nt(P)||Or(P))&&(se=C_(j))):ce=!1}ce&&(G.set(j,se),w(se,j,E,y,G),G.delete(j)),Yl(i,d,se)}function Wf(i,l){var d=i.length;if(d)return l+=l<0?d:0,wr(l,d)?i[l]:n}function Yf(i,l,d){l.length?l=xt(l,function(y){return Ke(y)?function(G){return fo(G,y.length===1?y[0]:y)}:y}):l=[hn];var E=-1;l=xt(l,An($e()));var w=Hf(i,function(y,G,P){var j=xt(l,function(ie){return ie(y)});return{criteria:j,index:++E,value:y}});return um(w,function(y,G){return X1(y,G,d)})}function $1(i,l){return zf(i,l,function(d,E){return yc(i,E)})}function zf(i,l,d){for(var E=-1,w=l.length,y={};++E<w;){var G=l[E],P=fo(i,G);d(P,G)&&Hi(y,Br(G,i),P)}return y}function U1(i){return function(l){return fo(l,i)}}function Jl(i,l,d,E){var w=E?cm:Go,y=-1,G=l.length,P=i;for(i===l&&(l=fn(l)),d&&(P=xt(i,An(d)));++y<G;)for(var j=0,ie=l[y],se=d?d(ie):ie;(j=w(P,se,j,E))>-1;)P!==i&&Ga.call(P,j,1),Ga.call(i,j,1);return i}function Vf(i,l){for(var d=i?l.length:0,E=d-1;d--;){var w=l[d];if(d==E||w!==y){var y=w;wr(w)?Ga.call(i,w,1):rc(i,w)}}return i}function ec(i,l){return i+$a(yf()*(l-i+1))}function H1(i,l,d,E){for(var w=-1,y=Ht(Fa((l-i)/(d||1)),0),G=X(y);y--;)G[E?y:++w]=i,i+=d;return G}function tc(i,l){var d="";if(!i||l<1||l>xe)return d;do l%2&&(d+=i),l=$a(l/2),l&&(i+=i);while(l);return d}function tt(i,l){return mc(b_(i,l,hn),i+"")}function P1(i){return Sf(jo(i))}function B1(i,l){var d=jo(i);return ts(d,uo(l,0,d.length))}function Hi(i,l,d,E){if(!Nt(i))return i;l=Br(l,i);for(var w=-1,y=l.length,G=y-1,P=i;P!=null&&++w<y;){var j=cr(l[w]),ie=d;if(j==="__proto__"||j==="constructor"||j==="prototype")return i;if(w!=G){var se=P[j];ie=E?E(se,j,P):n,ie===n&&(ie=Nt(se)?se:wr(l[w+1])?[]:{})}Mi(P,j,ie),P=P[j]}return i}var jf=Ua?function(i,l){return Ua.set(i,l),i}:hn,W1=Ma?function(i,l){return Ma(i,"toString",{configurable:!0,enumerable:!1,value:xc(l),writable:!0})}:hn;function Y1(i){return ts(jo(i))}function zn(i,l,d){var E=-1,w=i.length;l<0&&(l=-l>w?0:w+l),d=d>w?w:d,d<0&&(d+=w),w=l>d?0:d-l>>>0,l>>>=0;for(var y=X(w);++E<w;)y[E]=i[E+l];return y}function z1(i,l){var d;return Hr(i,function(E,w,y){return d=l(E,w,y),!d}),!!d}function Va(i,l,d){var E=0,w=i==null?E:i.length;if(typeof l=="number"&&l===l&&w<=Lt){for(;E<w;){var y=E+w>>>1,G=i[y];G!==null&&!Sn(G)&&(d?G<=l:G<l)?E=y+1:w=y}return w}return nc(i,l,hn,d)}function nc(i,l,d,E){var w=0,y=i==null?0:i.length;if(y===0)return 0;l=d(l);for(var G=l!==l,P=l===null,j=Sn(l),ie=l===n;w<y;){var se=$a((w+y)/2),ce=d(i[se]),me=ce!==n,Ne=ce===null,Ue=ce===ce,et=Sn(ce);if(G)var He=E||Ue;else ie?He=Ue&&(E||me):P?He=Ue&&me&&(E||!Ne):j?He=Ue&&me&&!Ne&&(E||!et):Ne||et?He=!1:He=E?ce<=l:ce<l;He?w=se+1:y=se}return Zt(y,Un)}function qf(i,l){for(var d=-1,E=i.length,w=0,y=[];++d<E;){var G=i[d],P=l?l(G):G;if(!d||!rr(P,j)){var j=P;y[w++]=G===0?0:G}}return y}function Kf(i){return typeof i=="number"?i:Sn(i)?ft:+i}function xn(i){if(typeof i=="string")return i;if(Ke(i))return xt(i,xn)+"";if(Sn(i))return Af?Af.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Pr(i,l,d){var E=-1,w=La,y=i.length,G=!0,P=[],j=P;if(d)G=!1,w=Dl;else if(y>=o){var ie=l?null:n0(i);if(ie)return Aa(ie);G=!1,w=Ni,j=new co}else j=l?[]:P;e:for(;++E<y;){var se=i[E],ce=l?l(se):se;if(se=d||se!==0?se:0,G&&ce===ce){for(var me=j.length;me--;)if(j[me]===ce)continue e;l&&j.push(ce),P.push(se)}else w(j,ce,d)||(j!==P&&j.push(ce),P.push(se))}return P}function rc(i,l){return l=Br(l,i),i=w_(i,l),i==null||delete i[cr(Vn(l))]}function Xf(i,l,d,E){return Hi(i,l,d(fo(i,l)),E)}function ja(i,l,d,E){for(var w=i.length,y=E?w:-1;(E?y--:++y<w)&&l(i[y],y,i););return d?zn(i,E?0:y,E?y+1:w):zn(i,E?y+1:0,E?w:y)}function Zf(i,l){var d=i;return d instanceof it&&(d=d.value()),Tl(l,function(E,w){return w.func.apply(w.thisArg,Fr([E],w.args))},d)}function oc(i,l,d){var E=i.length;if(E<2)return E?Pr(i[0]):[];for(var w=-1,y=X(E);++w<E;)for(var G=i[w],P=-1;++P<E;)P!=w&&(y[w]=Fi(y[w]||G,i[P],l,d));return Pr(Vt(y,1),l,d)}function Qf(i,l,d){for(var E=-1,w=i.length,y=l.length,G={};++E<w;){var P=E<y?l[E]:n;d(G,i[E],P)}return G}function ic(i){return Tt(i)?i:[]}function ac(i){return typeof i=="function"?i:hn}function Br(i,l){return Ke(i)?i:hc(i,l)?[i]:A_(ht(i))}var V1=tt;function Wr(i,l,d){var E=i.length;return d=d===n?E:d,!l&&d>=E?i:zn(i,l,d)}var Jf=Rm||function(i){return zt.clearTimeout(i)};function e_(i,l){if(l)return i.slice();var d=i.length,E=If?If(d):new i.constructor(d);return i.copy(E),E}function sc(i){var l=new i.constructor(i.byteLength);return new Ra(l).set(new Ra(i)),l}function j1(i,l){var d=l?sc(i.buffer):i.buffer;return new i.constructor(d,i.byteOffset,i.byteLength)}function q1(i){var l=new i.constructor(i.source,Md.exec(i));return l.lastIndex=i.lastIndex,l}function K1(i){return Gi?It(Gi.call(i)):{}}function t_(i,l){var d=l?sc(i.buffer):i.buffer;return new i.constructor(d,i.byteOffset,i.length)}function n_(i,l){if(i!==l){var d=i!==n,E=i===null,w=i===i,y=Sn(i),G=l!==n,P=l===null,j=l===l,ie=Sn(l);if(!P&&!ie&&!y&&i>l||y&&G&&j&&!P&&!ie||E&&G&&j||!d&&j||!w)return 1;if(!E&&!y&&!ie&&i<l||ie&&d&&w&&!E&&!y||P&&d&&w||!G&&w||!j)return-1}return 0}function X1(i,l,d){for(var E=-1,w=i.criteria,y=l.criteria,G=w.length,P=d.length;++E<G;){var j=n_(w[E],y[E]);if(j){if(E>=P)return j;var ie=d[E];return j*(ie=="desc"?-1:1)}}return i.index-l.index}function r_(i,l,d,E){for(var w=-1,y=i.length,G=d.length,P=-1,j=l.length,ie=Ht(y-G,0),se=X(j+ie),ce=!E;++P<j;)se[P]=l[P];for(;++w<G;)(ce||w<y)&&(se[d[w]]=i[w]);for(;ie--;)se[P++]=i[w++];return se}function o_(i,l,d,E){for(var w=-1,y=i.length,G=-1,P=d.length,j=-1,ie=l.length,se=Ht(y-P,0),ce=X(se+ie),me=!E;++w<se;)ce[w]=i[w];for(var Ne=w;++j<ie;)ce[Ne+j]=l[j];for(;++G<P;)(me||w<y)&&(ce[Ne+d[G]]=i[w++]);return ce}function fn(i,l){var d=-1,E=i.length;for(l||(l=X(E));++d<E;)l[d]=i[d];return l}function lr(i,l,d,E){var w=!d;d||(d={});for(var y=-1,G=l.length;++y<G;){var P=l[y],j=E?E(d[P],i[P],P,d,i):n;j===n&&(j=i[P]),w?Er(d,P,j):Mi(d,P,j)}return d}function Z1(i,l){return lr(i,gc(i),l)}function Q1(i,l){return lr(i,p_(i),l)}function qa(i,l){return function(d,E){var w=Ke(d)?rm:E1,y=l?l():{};return w(d,i,$e(E,2),y)}}function Wo(i){return tt(function(l,d){var E=-1,w=d.length,y=w>1?d[w-1]:n,G=w>2?d[2]:n;for(y=i.length>3&&typeof y=="function"?(w--,y):n,G&&tn(d[0],d[1],G)&&(y=w<3?n:y,w=1),l=It(l);++E<w;){var P=d[E];P&&i(l,P,E,y)}return l})}function i_(i,l){return function(d,E){if(d==null)return d;if(!_n(d))return i(d,E);for(var w=d.length,y=l?w:-1,G=It(d);(l?y--:++y<w)&&E(G[y],y,G)!==!1;);return d}}function a_(i){return function(l,d,E){for(var w=-1,y=It(l),G=E(l),P=G.length;P--;){var j=G[i?P:++w];if(d(y[j],j,y)===!1)break}return l}}function J1(i,l,d){var E=l&O,w=Pi(i);function y(){var G=this&&this!==zt&&this instanceof y?w:i;return G.apply(E?d:this,arguments)}return y}function s_(i){return function(l){l=ht(l);var d=Mo(l)?tr(l):n,E=d?d[0]:l.charAt(0),w=d?Wr(d,1).join(""):l.slice(1);return E[i]()+w}}function Yo(i){return function(l){return Tl(ig(og(l).replace(Wp,"")),i,"")}}function Pi(i){return function(){var l=arguments;switch(l.length){case 0:return new i;case 1:return new i(l[0]);case 2:return new i(l[0],l[1]);case 3:return new i(l[0],l[1],l[2]);case 4:return new i(l[0],l[1],l[2],l[3]);case 5:return new i(l[0],l[1],l[2],l[3],l[4]);case 6:return new i(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new i(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=Bo(i.prototype),E=i.apply(d,l);return Nt(E)?E:d}}function e0(i,l,d){var E=Pi(i);function w(){for(var y=arguments.length,G=X(y),P=y,j=zo(w);P--;)G[P]=arguments[P];var ie=y<3&&G[0]!==j&&G[y-1]!==j?[]:$r(G,j);if(y-=ie.length,y<d)return f_(i,l,Ka,w.placeholder,n,G,ie,n,n,d-y);var se=this&&this!==zt&&this instanceof w?E:i;return yn(se,this,G)}return w}function l_(i){return function(l,d,E){var w=It(l);if(!_n(l)){var y=$e(d,3);l=Bt(l),d=function(P){return y(w[P],P,w)}}var G=i(l,d,E);return G>-1?w[y?l[G]:G]:n}}function c_(i){return br(function(l){var d=l.length,E=d,w=Wn.prototype.thru;for(i&&l.reverse();E--;){var y=l[E];if(typeof y!="function")throw new Bn(s);if(w&&!G&&Ja(y)=="wrapper")var G=new Wn([],!0)}for(E=G?E:d;++E<d;){y=l[E];var P=Ja(y),j=P=="wrapper"?fc(y):n;j&&vc(j[0])&&j[1]==(W|T|k|K)&&!j[4].length&&j[9]==1?G=G[Ja(j[0])].apply(G,j[3]):G=y.length==1&&vc(y)?G[P]():G.thru(y)}return function(){var ie=arguments,se=ie[0];if(G&&ie.length==1&&Ke(se))return G.plant(se).value();for(var ce=0,me=d?l[ce].apply(this,ie):se;++ce<d;)me=l[ce].call(this,me);return me}})}function Ka(i,l,d,E,w,y,G,P,j,ie){var se=l&W,ce=l&O,me=l&b,Ne=l&(T|M),Ue=l&oe,et=me?n:Pi(i);function He(){for(var ot=arguments.length,at=X(ot),Nn=ot;Nn--;)at[Nn]=arguments[Nn];if(Ne)var nn=zo(He),Dn=fm(at,nn);if(E&&(at=r_(at,E,w,Ne)),y&&(at=o_(at,y,G,Ne)),ot-=Dn,Ne&&ot<ie){var Rt=$r(at,nn);return f_(i,l,Ka,He.placeholder,d,at,Rt,P,j,ie-ot)}var or=ce?d:this,yr=me?or[i]:i;return ot=at.length,P?at=E0(at,P):Ue&&ot>1&&at.reverse(),se&&j<ot&&(at.length=j),this&&this!==zt&&this instanceof He&&(yr=et||Pi(yr)),yr.apply(or,at)}return He}function u_(i,l){return function(d,E){return x1(d,i,l(E),{})}}function Xa(i,l){return function(d,E){var w;if(d===n&&E===n)return l;if(d!==n&&(w=d),E!==n){if(w===n)return E;typeof d=="string"||typeof E=="string"?(d=xn(d),E=xn(E)):(d=Kf(d),E=Kf(E)),w=i(d,E)}return w}}function lc(i){return br(function(l){return l=xt(l,An($e())),tt(function(d){var E=this;return i(l,function(w){return yn(w,E,d)})})})}function Za(i,l){l=l===n?" ":xn(l);var d=l.length;if(d<2)return d?tc(l,i):l;var E=tc(l,Fa(i/Fo(l)));return Mo(l)?Wr(tr(E),0,i).join(""):E.slice(0,i)}function t0(i,l,d,E){var w=l&O,y=Pi(i);function G(){for(var P=-1,j=arguments.length,ie=-1,se=E.length,ce=X(se+j),me=this&&this!==zt&&this instanceof G?y:i;++ie<se;)ce[ie]=E[ie];for(;j--;)ce[ie++]=arguments[++P];return yn(me,w?d:this,ce)}return G}function d_(i){return function(l,d,E){return E&&typeof E!="number"&&tn(l,d,E)&&(d=E=n),l=Lr(l),d===n?(d=l,l=0):d=Lr(d),E=E===n?l<d?1:-1:Lr(E),H1(l,d,E,i)}}function Qa(i){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=jn(l),d=jn(d)),i(l,d)}}function f_(i,l,d,E,w,y,G,P,j,ie){var se=l&T,ce=se?G:n,me=se?n:G,Ne=se?y:n,Ue=se?n:y;l|=se?k:Y,l&=~(se?Y:k),l&A||(l&=-4);var et=[i,l,w,Ne,ce,Ue,me,P,j,ie],He=d.apply(n,et);return vc(i)&&O_(He,et),He.placeholder=E,L_(He,i,l)}function cc(i){var l=Ut[i];return function(d,E){if(d=jn(d),E=E==null?0:Zt(Qe(E),292),E&&Lf(d)){var w=(ht(d)+"e").split("e"),y=l(w[0]+"e"+(+w[1]+E));return w=(ht(y)+"e").split("e"),+(w[0]+"e"+(+w[1]-E))}return l(d)}}var n0=Ho&&1/Aa(new Ho([,-0]))[1]==lt?function(i){return new Ho(i)}:Dc;function __(i){return function(l){var d=Qt(l);return d==Ee?Ul(l):d==er?Cm(l):dm(l,i(l))}}function Ir(i,l,d,E,w,y,G,P){var j=l&b;if(!j&&typeof i!="function")throw new Bn(s);var ie=E?E.length:0;if(ie||(l&=-97,E=w=n),G=G===n?G:Ht(Qe(G),0),P=P===n?P:Qe(P),ie-=w?w.length:0,l&Y){var se=E,ce=w;E=w=n}var me=j?n:fc(i),Ne=[i,l,d,E,w,se,ce,y,G,P];if(me&&p0(Ne,me),i=Ne[0],l=Ne[1],d=Ne[2],E=Ne[3],w=Ne[4],P=Ne[9]=Ne[9]===n?j?0:i.length:Ht(Ne[9]-ie,0),!P&&l&(T|M)&&(l&=-25),!l||l==O)var Ue=J1(i,l,d);else l==T||l==M?Ue=e0(i,l,P):(l==k||l==(O|k))&&!w.length?Ue=t0(i,l,d,E):Ue=Ka.apply(n,Ne);var et=me?jf:O_;return L_(et(Ue,Ne),i,l)}function g_(i,l,d,E){return i===n||rr(i,Uo[d])&&!vt.call(E,d)?l:i}function h_(i,l,d,E,w,y){return Nt(i)&&Nt(l)&&(y.set(l,i),za(i,l,n,h_,y),y.delete(l)),i}function r0(i){return Yi(i)?n:i}function v_(i,l,d,E,w,y){var G=d&C,P=i.length,j=l.length;if(P!=j&&!(G&&j>P))return!1;var ie=y.get(i),se=y.get(l);if(ie&&se)return ie==l&&se==i;var ce=-1,me=!0,Ne=d&I?new co:n;for(y.set(i,l),y.set(l,i);++ce<P;){var Ue=i[ce],et=l[ce];if(E)var He=G?E(et,Ue,ce,l,i,y):E(Ue,et,ce,i,l,y);if(He!==n){if(He)continue;me=!1;break}if(Ne){if(!Rl(l,function(ot,at){if(!Ni(Ne,at)&&(Ue===ot||w(Ue,ot,d,E,y)))return Ne.push(at)})){me=!1;break}}else if(!(Ue===et||w(Ue,et,d,E,y))){me=!1;break}}return y.delete(i),y.delete(l),me}function o0(i,l,d,E,w,y,G){switch(d){case Ro:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case Si:return!(i.byteLength!=l.byteLength||!y(new Ra(i),new Ra(l)));case pr:case ar:case Re:return rr(+i,+l);case Gr:return i.name==l.name&&i.message==l.message;case yi:case Ai:return i==l+"";case Ee:var P=Ul;case er:var j=E&C;if(P||(P=Aa),i.size!=l.size&&!j)return!1;var ie=G.get(i);if(ie)return ie==l;E|=I,G.set(i,l);var se=v_(P(i),P(l),E,w,y,G);return G.delete(i),se;case Ia:if(Gi)return Gi.call(i)==Gi.call(l)}return!1}function i0(i,l,d,E,w,y){var G=d&C,P=uc(i),j=P.length,ie=uc(l),se=ie.length;if(j!=se&&!G)return!1;for(var ce=j;ce--;){var me=P[ce];if(!(G?me in l:vt.call(l,me)))return!1}var Ne=y.get(i),Ue=y.get(l);if(Ne&&Ue)return Ne==l&&Ue==i;var et=!0;y.set(i,l),y.set(l,i);for(var He=G;++ce<j;){me=P[ce];var ot=i[me],at=l[me];if(E)var Nn=G?E(at,ot,me,l,i,y):E(ot,at,me,i,l,y);if(!(Nn===n?ot===at||w(ot,at,d,E,y):Nn)){et=!1;break}He||(He=me=="constructor")}if(et&&!He){var nn=i.constructor,Dn=l.constructor;nn!=Dn&&"constructor"in i&&"constructor"in l&&!(typeof nn=="function"&&nn instanceof nn&&typeof Dn=="function"&&Dn instanceof Dn)&&(et=!1)}return y.delete(i),y.delete(l),et}function br(i){return mc(b_(i,n,D_),i+"")}function uc(i){return Mf(i,Bt,gc)}function dc(i){return Mf(i,gn,p_)}var fc=Ua?function(i){return Ua.get(i)}:Dc;function Ja(i){for(var l=i.name+"",d=Po[l],E=vt.call(Po,l)?d.length:0;E--;){var w=d[E],y=w.func;if(y==null||y==i)return w.name}return l}function zo(i){var l=vt.call(L,"placeholder")?L:i;return l.placeholder}function $e(){var i=L.iteratee||Sc;return i=i===Sc?Uf:i,arguments.length?i(arguments[0],arguments[1]):i}function es(i,l){var d=i.__data__;return _0(l)?d[typeof l=="string"?"string":"hash"]:d.map}function _c(i){for(var l=Bt(i),d=l.length;d--;){var E=l[d],w=i[E];l[d]=[E,w,E_(w)]}return l}function _o(i,l){var d=vm(i,l);return $f(d)?d:n}function a0(i){var l=vt.call(i,so),d=i[so];try{i[so]=n;var E=!0}catch{}var w=Da.call(i);return E&&(l?i[so]=d:delete i[so]),w}var gc=Pl?function(i){return i==null?[]:(i=It(i),Mr(Pl(i),function(l){return wf.call(i,l)}))}:Tc,p_=Pl?function(i){for(var l=[];i;)Fr(l,gc(i)),i=ka(i);return l}:Tc,Qt=en;(Bl&&Qt(new Bl(new ArrayBuffer(1)))!=Ro||Ti&&Qt(new Ti)!=Ee||Wl&&Qt(Wl.resolve())!=Td||Ho&&Qt(new Ho)!=er||Ri&&Qt(new Ri)!=xi)&&(Qt=function(i){var l=en(i),d=l==St?i.constructor:n,E=d?go(d):"";if(E)switch(E){case Bm:return Ro;case Wm:return Ee;case Ym:return Td;case zm:return er;case Vm:return xi}return l});function s0(i,l,d){for(var E=-1,w=d.length;++E<w;){var y=d[E],G=y.size;switch(y.type){case"drop":i+=G;break;case"dropRight":l-=G;break;case"take":l=Zt(l,i+G);break;case"takeRight":i=Ht(i,l-G);break}}return{start:i,end:l}}function l0(i){var l=i.match(gp);return l?l[1].split(hp):[]}function m_(i,l,d){l=Br(l,i);for(var E=-1,w=l.length,y=!1;++E<w;){var G=cr(l[E]);if(!(y=i!=null&&d(i,G)))break;i=i[G]}return y||++E!=w?y:(w=i==null?0:i.length,!!w&&ss(w)&&wr(G,w)&&(Ke(i)||ho(i)))}function c0(i){var l=i.length,d=new i.constructor(l);return l&&typeof i[0]=="string"&&vt.call(i,"index")&&(d.index=i.index,d.input=i.input),d}function C_(i){return typeof i.constructor=="function"&&!Bi(i)?Bo(ka(i)):{}}function u0(i,l,d){var E=i.constructor;switch(l){case Si:return sc(i);case pr:case ar:return new E(+i);case Ro:return j1(i,d);case _l:case gl:case hl:case vl:case pl:case ml:case Cl:case El:case Il:return t_(i,d);case Ee:return new E;case Re:case Ai:return new E(i);case yi:return q1(i);case er:return new E;case Ia:return K1(i)}}function d0(i,l){var d=l.length;if(!d)return i;var E=d-1;return l[E]=(d>1?"& ":"")+l[E],l=l.join(d>2?", ":" "),i.replace(_p,`{
/* [wrapped with `+l+`] */
`)}function f0(i){return Ke(i)||ho(i)||!!(Of&&i&&i[Of])}function wr(i,l){var d=typeof i;return l=l??xe,!!l&&(d=="number"||d!="symbol"&&Op.test(i))&&i>-1&&i%1==0&&i<l}function tn(i,l,d){if(!Nt(d))return!1;var E=typeof l;return(E=="number"?_n(d)&&wr(l,d.length):E=="string"&&l in d)?rr(d[l],i):!1}function hc(i,l){if(Ke(i))return!1;var d=typeof i;return d=="number"||d=="symbol"||d=="boolean"||i==null||Sn(i)?!0:cp.test(i)||!lp.test(i)||l!=null&&i in It(l)}function _0(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function vc(i){var l=Ja(i),d=L[l];if(typeof d!="function"||!(l in it.prototype))return!1;if(i===d)return!0;var E=fc(d);return!!E&&i===E[0]}function g0(i){return!!Ef&&Ef in i}var h0=Sa?Or:Rc;function Bi(i){var l=i&&i.constructor,d=typeof l=="function"&&l.prototype||Uo;return i===d}function E_(i){return i===i&&!Nt(i)}function I_(i,l){return function(d){return d==null?!1:d[i]===l&&(l!==n||i in It(d))}}function v0(i){var l=is(i,function(E){return d.size===_&&d.clear(),E}),d=l.cache;return l}function p0(i,l){var d=i[1],E=l[1],w=d|E,y=w<(O|b|W),G=E==W&&d==T||E==W&&d==K&&i[7].length<=l[8]||E==(W|K)&&l[7].length<=l[8]&&d==T;if(!(y||G))return i;E&O&&(i[2]=l[2],w|=d&O?0:A);var P=l[3];if(P){var j=i[3];i[3]=j?r_(j,P,l[4]):P,i[4]=j?$r(i[3],g):l[4]}return P=l[5],P&&(j=i[5],i[5]=j?o_(j,P,l[6]):P,i[6]=j?$r(i[5],g):l[6]),P=l[7],P&&(i[7]=P),E&W&&(i[8]=i[8]==null?l[8]:Zt(i[8],l[8])),i[9]==null&&(i[9]=l[9]),i[0]=l[0],i[1]=w,i}function m0(i){var l=[];if(i!=null)for(var d in It(i))l.push(d);return l}function C0(i){return Da.call(i)}function b_(i,l,d){return l=Ht(l===n?i.length-1:l,0),function(){for(var E=arguments,w=-1,y=Ht(E.length-l,0),G=X(y);++w<y;)G[w]=E[l+w];w=-1;for(var P=X(l+1);++w<l;)P[w]=E[w];return P[l]=d(G),yn(i,this,P)}}function w_(i,l){return l.length<2?i:fo(i,zn(l,0,-1))}function E0(i,l){for(var d=i.length,E=Zt(l.length,d),w=fn(i);E--;){var y=l[E];i[E]=wr(y,d)?w[y]:n}return i}function pc(i,l){if(!(l==="constructor"&&typeof i[l]=="function")&&l!="__proto__")return i[l]}var O_=y_(jf),Wi=Gm||function(i,l){return zt.setTimeout(i,l)},mc=y_(W1);function L_(i,l,d){var E=l+"";return mc(i,d0(E,I0(l0(E),d)))}function y_(i){var l=0,d=0;return function(){var E=Um(),w=be-(E-d);if(d=E,w>0){if(++l>=le)return arguments[0]}else l=0;return i.apply(n,arguments)}}function ts(i,l){var d=-1,E=i.length,w=E-1;for(l=l===n?E:l;++d<l;){var y=ec(d,w),G=i[y];i[y]=i[d],i[d]=G}return i.length=l,i}var A_=v0(function(i){var l=[];return i.charCodeAt(0)===46&&l.push(""),i.replace(up,function(d,E,w,y){l.push(w?y.replace(mp,"$1"):E||d)}),l});function cr(i){if(typeof i=="string"||Sn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function go(i){if(i!=null){try{return Na.call(i)}catch{}try{return i+""}catch{}}return""}function I0(i,l){return Pn(Ln,function(d){var E="_."+d[0];l&d[1]&&!La(i,E)&&i.push(E)}),i.sort()}function x_(i){if(i instanceof it)return i.clone();var l=new Wn(i.__wrapped__,i.__chain__);return l.__actions__=fn(i.__actions__),l.__index__=i.__index__,l.__values__=i.__values__,l}function b0(i,l,d){(d?tn(i,l,d):l===n)?l=1:l=Ht(Qe(l),0);var E=i==null?0:i.length;if(!E||l<1)return[];for(var w=0,y=0,G=X(Fa(E/l));w<E;)G[y++]=zn(i,w,w+=l);return G}function w0(i){for(var l=-1,d=i==null?0:i.length,E=0,w=[];++l<d;){var y=i[l];y&&(w[E++]=y)}return w}function O0(){var i=arguments.length;if(!i)return[];for(var l=X(i-1),d=arguments[0],E=i;E--;)l[E-1]=arguments[E];return Fr(Ke(d)?fn(d):[d],Vt(l,1))}var L0=tt(function(i,l){return Tt(i)?Fi(i,Vt(l,1,Tt,!0)):[]}),y0=tt(function(i,l){var d=Vn(l);return Tt(d)&&(d=n),Tt(i)?Fi(i,Vt(l,1,Tt,!0),$e(d,2)):[]}),A0=tt(function(i,l){var d=Vn(l);return Tt(d)&&(d=n),Tt(i)?Fi(i,Vt(l,1,Tt,!0),n,d):[]});function x0(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Qe(l),zn(i,l<0?0:l,E)):[]}function S0(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Qe(l),l=E-l,zn(i,0,l<0?0:l)):[]}function N0(i,l){return i&&i.length?ja(i,$e(l,3),!0,!0):[]}function D0(i,l){return i&&i.length?ja(i,$e(l,3),!0):[]}function T0(i,l,d,E){var w=i==null?0:i.length;return w?(d&&typeof d!="number"&&tn(i,l,d)&&(d=0,E=w),O1(i,l,d,E)):[]}function S_(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=d==null?0:Qe(d);return w<0&&(w=Ht(E+w,0)),ya(i,$e(l,3),w)}function N_(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=E-1;return d!==n&&(w=Qe(d),w=d<0?Ht(E+w,0):Zt(w,E-1)),ya(i,$e(l,3),w,!0)}function D_(i){var l=i==null?0:i.length;return l?Vt(i,1):[]}function R0(i){var l=i==null?0:i.length;return l?Vt(i,lt):[]}function k0(i,l){var d=i==null?0:i.length;return d?(l=l===n?1:Qe(l),Vt(i,l)):[]}function G0(i){for(var l=-1,d=i==null?0:i.length,E={};++l<d;){var w=i[l];E[w[0]]=w[1]}return E}function T_(i){return i&&i.length?i[0]:n}function M0(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=d==null?0:Qe(d);return w<0&&(w=Ht(E+w,0)),Go(i,l,w)}function F0(i){var l=i==null?0:i.length;return l?zn(i,0,-1):[]}var $0=tt(function(i){var l=xt(i,ic);return l.length&&l[0]===i[0]?Kl(l):[]}),U0=tt(function(i){var l=Vn(i),d=xt(i,ic);return l===Vn(d)?l=n:d.pop(),d.length&&d[0]===i[0]?Kl(d,$e(l,2)):[]}),H0=tt(function(i){var l=Vn(i),d=xt(i,ic);return l=typeof l=="function"?l:n,l&&d.pop(),d.length&&d[0]===i[0]?Kl(d,n,l):[]});function P0(i,l){return i==null?"":Fm.call(i,l)}function Vn(i){var l=i==null?0:i.length;return l?i[l-1]:n}function B0(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=E;return d!==n&&(w=Qe(d),w=w<0?Ht(E+w,0):Zt(w,E-1)),l===l?Im(i,l,w):ya(i,ff,w,!0)}function W0(i,l){return i&&i.length?Wf(i,Qe(l)):n}var Y0=tt(R_);function R_(i,l){return i&&i.length&&l&&l.length?Jl(i,l):i}function z0(i,l,d){return i&&i.length&&l&&l.length?Jl(i,l,$e(d,2)):i}function V0(i,l,d){return i&&i.length&&l&&l.length?Jl(i,l,n,d):i}var j0=br(function(i,l){var d=i==null?0:i.length,E=zl(i,l);return Vf(i,xt(l,function(w){return wr(w,d)?+w:w}).sort(n_)),E});function q0(i,l){var d=[];if(!(i&&i.length))return d;var E=-1,w=[],y=i.length;for(l=$e(l,3);++E<y;){var G=i[E];l(G,E,i)&&(d.push(G),w.push(E))}return Vf(i,w),d}function Cc(i){return i==null?i:Pm.call(i)}function K0(i,l,d){var E=i==null?0:i.length;return E?(d&&typeof d!="number"&&tn(i,l,d)?(l=0,d=E):(l=l==null?0:Qe(l),d=d===n?E:Qe(d)),zn(i,l,d)):[]}function X0(i,l){return Va(i,l)}function Z0(i,l,d){return nc(i,l,$e(d,2))}function Q0(i,l){var d=i==null?0:i.length;if(d){var E=Va(i,l);if(E<d&&rr(i[E],l))return E}return-1}function J0(i,l){return Va(i,l,!0)}function eC(i,l,d){return nc(i,l,$e(d,2),!0)}function tC(i,l){var d=i==null?0:i.length;if(d){var E=Va(i,l,!0)-1;if(rr(i[E],l))return E}return-1}function nC(i){return i&&i.length?qf(i):[]}function rC(i,l){return i&&i.length?qf(i,$e(l,2)):[]}function oC(i){var l=i==null?0:i.length;return l?zn(i,1,l):[]}function iC(i,l,d){return i&&i.length?(l=d||l===n?1:Qe(l),zn(i,0,l<0?0:l)):[]}function aC(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Qe(l),l=E-l,zn(i,l<0?0:l,E)):[]}function sC(i,l){return i&&i.length?ja(i,$e(l,3),!1,!0):[]}function lC(i,l){return i&&i.length?ja(i,$e(l,3)):[]}var cC=tt(function(i){return Pr(Vt(i,1,Tt,!0))}),uC=tt(function(i){var l=Vn(i);return Tt(l)&&(l=n),Pr(Vt(i,1,Tt,!0),$e(l,2))}),dC=tt(function(i){var l=Vn(i);return l=typeof l=="function"?l:n,Pr(Vt(i,1,Tt,!0),n,l)});function fC(i){return i&&i.length?Pr(i):[]}function _C(i,l){return i&&i.length?Pr(i,$e(l,2)):[]}function gC(i,l){return l=typeof l=="function"?l:n,i&&i.length?Pr(i,n,l):[]}function Ec(i){if(!(i&&i.length))return[];var l=0;return i=Mr(i,function(d){if(Tt(d))return l=Ht(d.length,l),!0}),Fl(l,function(d){return xt(i,kl(d))})}function k_(i,l){if(!(i&&i.length))return[];var d=Ec(i);return l==null?d:xt(d,function(E){return yn(l,n,E)})}var hC=tt(function(i,l){return Tt(i)?Fi(i,l):[]}),vC=tt(function(i){return oc(Mr(i,Tt))}),pC=tt(function(i){var l=Vn(i);return Tt(l)&&(l=n),oc(Mr(i,Tt),$e(l,2))}),mC=tt(function(i){var l=Vn(i);return l=typeof l=="function"?l:n,oc(Mr(i,Tt),n,l)}),CC=tt(Ec);function EC(i,l){return Qf(i||[],l||[],Mi)}function IC(i,l){return Qf(i||[],l||[],Hi)}var bC=tt(function(i){var l=i.length,d=l>1?i[l-1]:n;return d=typeof d=="function"?(i.pop(),d):n,k_(i,d)});function G_(i){var l=L(i);return l.__chain__=!0,l}function wC(i,l){return l(i),i}function ns(i,l){return l(i)}var OC=br(function(i){var l=i.length,d=l?i[0]:0,E=this.__wrapped__,w=function(y){return zl(y,i)};return l>1||this.__actions__.length||!(E instanceof it)||!wr(d)?this.thru(w):(E=E.slice(d,+d+(l?1:0)),E.__actions__.push({func:ns,args:[w],thisArg:n}),new Wn(E,this.__chain__).thru(function(y){return l&&!y.length&&y.push(n),y}))});function LC(){return G_(this)}function yC(){return new Wn(this.value(),this.__chain__)}function AC(){this.__values__===n&&(this.__values__=K_(this.value()));var i=this.__index__>=this.__values__.length,l=i?n:this.__values__[this.__index__++];return{done:i,value:l}}function xC(){return this}function SC(i){for(var l,d=this;d instanceof Pa;){var E=x_(d);E.__index__=0,E.__values__=n,l?w.__wrapped__=E:l=E;var w=E;d=d.__wrapped__}return w.__wrapped__=i,l}function NC(){var i=this.__wrapped__;if(i instanceof it){var l=i;return this.__actions__.length&&(l=new it(this)),l=l.reverse(),l.__actions__.push({func:ns,args:[Cc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(Cc)}function DC(){return Zf(this.__wrapped__,this.__actions__)}var TC=qa(function(i,l,d){vt.call(i,d)?++i[d]:Er(i,d,1)});function RC(i,l,d){var E=Ke(i)?uf:w1;return d&&tn(i,l,d)&&(l=n),E(i,$e(l,3))}function kC(i,l){var d=Ke(i)?Mr:kf;return d(i,$e(l,3))}var GC=l_(S_),MC=l_(N_);function FC(i,l){return Vt(rs(i,l),1)}function $C(i,l){return Vt(rs(i,l),lt)}function UC(i,l,d){return d=d===n?1:Qe(d),Vt(rs(i,l),d)}function M_(i,l){var d=Ke(i)?Pn:Hr;return d(i,$e(l,3))}function F_(i,l){var d=Ke(i)?om:Rf;return d(i,$e(l,3))}var HC=qa(function(i,l,d){vt.call(i,d)?i[d].push(l):Er(i,d,[l])});function PC(i,l,d,E){i=_n(i)?i:jo(i),d=d&&!E?Qe(d):0;var w=i.length;return d<0&&(d=Ht(w+d,0)),ls(i)?d<=w&&i.indexOf(l,d)>-1:!!w&&Go(i,l,d)>-1}var BC=tt(function(i,l,d){var E=-1,w=typeof l=="function",y=_n(i)?X(i.length):[];return Hr(i,function(G){y[++E]=w?yn(l,G,d):$i(G,l,d)}),y}),WC=qa(function(i,l,d){Er(i,d,l)});function rs(i,l){var d=Ke(i)?xt:Hf;return d(i,$e(l,3))}function YC(i,l,d,E){return i==null?[]:(Ke(l)||(l=l==null?[]:[l]),d=E?n:d,Ke(d)||(d=d==null?[]:[d]),Yf(i,l,d))}var zC=qa(function(i,l,d){i[d?0:1].push(l)},function(){return[[],[]]});function VC(i,l,d){var E=Ke(i)?Tl:gf,w=arguments.length<3;return E(i,$e(l,4),d,w,Hr)}function jC(i,l,d){var E=Ke(i)?im:gf,w=arguments.length<3;return E(i,$e(l,4),d,w,Rf)}function qC(i,l){var d=Ke(i)?Mr:kf;return d(i,as($e(l,3)))}function KC(i){var l=Ke(i)?Sf:P1;return l(i)}function XC(i,l,d){(d?tn(i,l,d):l===n)?l=1:l=Qe(l);var E=Ke(i)?m1:B1;return E(i,l)}function ZC(i){var l=Ke(i)?C1:Y1;return l(i)}function QC(i){if(i==null)return 0;if(_n(i))return ls(i)?Fo(i):i.length;var l=Qt(i);return l==Ee||l==er?i.size:Zl(i).length}function JC(i,l,d){var E=Ke(i)?Rl:z1;return d&&tn(i,l,d)&&(l=n),E(i,$e(l,3))}var eE=tt(function(i,l){if(i==null)return[];var d=l.length;return d>1&&tn(i,l[0],l[1])?l=[]:d>2&&tn(l[0],l[1],l[2])&&(l=[l[0]]),Yf(i,Vt(l,1),[])}),os=km||function(){return zt.Date.now()};function tE(i,l){if(typeof l!="function")throw new Bn(s);return i=Qe(i),function(){if(--i<1)return l.apply(this,arguments)}}function $_(i,l,d){return l=d?n:l,l=i&&l==null?i.length:l,Ir(i,W,n,n,n,n,l)}function U_(i,l){var d;if(typeof l!="function")throw new Bn(s);return i=Qe(i),function(){return--i>0&&(d=l.apply(this,arguments)),i<=1&&(l=n),d}}var Ic=tt(function(i,l,d){var E=O;if(d.length){var w=$r(d,zo(Ic));E|=k}return Ir(i,E,l,d,w)}),H_=tt(function(i,l,d){var E=O|b;if(d.length){var w=$r(d,zo(H_));E|=k}return Ir(l,E,i,d,w)});function P_(i,l,d){l=d?n:l;var E=Ir(i,T,n,n,n,n,n,l);return E.placeholder=P_.placeholder,E}function B_(i,l,d){l=d?n:l;var E=Ir(i,M,n,n,n,n,n,l);return E.placeholder=B_.placeholder,E}function W_(i,l,d){var E,w,y,G,P,j,ie=0,se=!1,ce=!1,me=!0;if(typeof i!="function")throw new Bn(s);l=jn(l)||0,Nt(d)&&(se=!!d.leading,ce="maxWait"in d,y=ce?Ht(jn(d.maxWait)||0,l):y,me="trailing"in d?!!d.trailing:me);function Ne(Rt){var or=E,yr=w;return E=w=n,ie=Rt,G=i.apply(yr,or),G}function Ue(Rt){return ie=Rt,P=Wi(ot,l),se?Ne(Rt):G}function et(Rt){var or=Rt-j,yr=Rt-ie,lg=l-or;return ce?Zt(lg,y-yr):lg}function He(Rt){var or=Rt-j,yr=Rt-ie;return j===n||or>=l||or<0||ce&&yr>=y}function ot(){var Rt=os();if(He(Rt))return at(Rt);P=Wi(ot,et(Rt))}function at(Rt){return P=n,me&&E?Ne(Rt):(E=w=n,G)}function Nn(){P!==n&&Jf(P),ie=0,E=j=w=P=n}function nn(){return P===n?G:at(os())}function Dn(){var Rt=os(),or=He(Rt);if(E=arguments,w=this,j=Rt,or){if(P===n)return Ue(j);if(ce)return Jf(P),P=Wi(ot,l),Ne(j)}return P===n&&(P=Wi(ot,l)),G}return Dn.cancel=Nn,Dn.flush=nn,Dn}var nE=tt(function(i,l){return Tf(i,1,l)}),rE=tt(function(i,l,d){return Tf(i,jn(l)||0,d)});function oE(i){return Ir(i,oe)}function is(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new Bn(s);var d=function(){var E=arguments,w=l?l.apply(this,E):E[0],y=d.cache;if(y.has(w))return y.get(w);var G=i.apply(this,E);return d.cache=y.set(w,G)||y,G};return d.cache=new(is.Cache||Cr),d}is.Cache=Cr;function as(i){if(typeof i!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!i.call(this);case 1:return!i.call(this,l[0]);case 2:return!i.call(this,l[0],l[1]);case 3:return!i.call(this,l[0],l[1],l[2])}return!i.apply(this,l)}}function iE(i){return U_(2,i)}var aE=V1(function(i,l){l=l.length==1&&Ke(l[0])?xt(l[0],An($e())):xt(Vt(l,1),An($e()));var d=l.length;return tt(function(E){for(var w=-1,y=Zt(E.length,d);++w<y;)E[w]=l[w].call(this,E[w]);return yn(i,this,E)})}),bc=tt(function(i,l){var d=$r(l,zo(bc));return Ir(i,k,n,l,d)}),Y_=tt(function(i,l){var d=$r(l,zo(Y_));return Ir(i,Y,n,l,d)}),sE=br(function(i,l){return Ir(i,K,n,n,n,l)});function lE(i,l){if(typeof i!="function")throw new Bn(s);return l=l===n?l:Qe(l),tt(i,l)}function cE(i,l){if(typeof i!="function")throw new Bn(s);return l=l==null?0:Ht(Qe(l),0),tt(function(d){var E=d[l],w=Wr(d,0,l);return E&&Fr(w,E),yn(i,this,w)})}function uE(i,l,d){var E=!0,w=!0;if(typeof i!="function")throw new Bn(s);return Nt(d)&&(E="leading"in d?!!d.leading:E,w="trailing"in d?!!d.trailing:w),W_(i,l,{leading:E,maxWait:l,trailing:w})}function dE(i){return $_(i,1)}function fE(i,l){return bc(ac(l),i)}function _E(){if(!arguments.length)return[];var i=arguments[0];return Ke(i)?i:[i]}function gE(i){return Yn(i,m)}function hE(i,l){return l=typeof l=="function"?l:n,Yn(i,m,l)}function vE(i){return Yn(i,h|m)}function pE(i,l){return l=typeof l=="function"?l:n,Yn(i,h|m,l)}function mE(i,l){return l==null||Df(i,l,Bt(l))}function rr(i,l){return i===l||i!==i&&l!==l}var CE=Qa(ql),EE=Qa(function(i,l){return i>=l}),ho=Ff(function(){return arguments}())?Ff:function(i){return Dt(i)&&vt.call(i,"callee")&&!wf.call(i,"callee")},Ke=X.isArray,IE=rf?An(rf):S1;function _n(i){return i!=null&&ss(i.length)&&!Or(i)}function Tt(i){return Dt(i)&&_n(i)}function bE(i){return i===!0||i===!1||Dt(i)&&en(i)==pr}var Yr=Mm||Rc,wE=of?An(of):N1;function OE(i){return Dt(i)&&i.nodeType===1&&!Yi(i)}function LE(i){if(i==null)return!0;if(_n(i)&&(Ke(i)||typeof i=="string"||typeof i.splice=="function"||Yr(i)||Vo(i)||ho(i)))return!i.length;var l=Qt(i);if(l==Ee||l==er)return!i.size;if(Bi(i))return!Zl(i).length;for(var d in i)if(vt.call(i,d))return!1;return!0}function yE(i,l){return Ui(i,l)}function AE(i,l,d){d=typeof d=="function"?d:n;var E=d?d(i,l):n;return E===n?Ui(i,l,n,d):!!E}function wc(i){if(!Dt(i))return!1;var l=en(i);return l==Gr||l==Li||typeof i.message=="string"&&typeof i.name=="string"&&!Yi(i)}function xE(i){return typeof i=="number"&&Lf(i)}function Or(i){if(!Nt(i))return!1;var l=en(i);return l==To||l==Ge||l==Jn||l==Qv}function z_(i){return typeof i=="number"&&i==Qe(i)}function ss(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=xe}function Nt(i){var l=typeof i;return i!=null&&(l=="object"||l=="function")}function Dt(i){return i!=null&&typeof i=="object"}var V_=af?An(af):T1;function SE(i,l){return i===l||Xl(i,l,_c(l))}function NE(i,l,d){return d=typeof d=="function"?d:n,Xl(i,l,_c(l),d)}function DE(i){return j_(i)&&i!=+i}function TE(i){if(h0(i))throw new Ve(a);return $f(i)}function RE(i){return i===null}function kE(i){return i==null}function j_(i){return typeof i=="number"||Dt(i)&&en(i)==Re}function Yi(i){if(!Dt(i)||en(i)!=St)return!1;var l=ka(i);if(l===null)return!0;var d=vt.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&Na.call(d)==Nm}var Oc=sf?An(sf):R1;function GE(i){return z_(i)&&i>=-9007199254740991&&i<=xe}var q_=lf?An(lf):k1;function ls(i){return typeof i=="string"||!Ke(i)&&Dt(i)&&en(i)==Ai}function Sn(i){return typeof i=="symbol"||Dt(i)&&en(i)==Ia}var Vo=cf?An(cf):G1;function ME(i){return i===n}function FE(i){return Dt(i)&&Qt(i)==xi}function $E(i){return Dt(i)&&en(i)==ep}var UE=Qa(Ql),HE=Qa(function(i,l){return i<=l});function K_(i){if(!i)return[];if(_n(i))return ls(i)?tr(i):fn(i);if(Di&&i[Di])return mm(i[Di]());var l=Qt(i),d=l==Ee?Ul:l==er?Aa:jo;return d(i)}function Lr(i){if(!i)return i===0?i:0;if(i=jn(i),i===lt||i===-1/0){var l=i<0?-1:1;return l*we}return i===i?i:0}function Qe(i){var l=Lr(i),d=l%1;return l===l?d?l-d:l:0}function X_(i){return i?uo(Qe(i),0,ct):0}function jn(i){if(typeof i=="number")return i;if(Sn(i))return ft;if(Nt(i)){var l=typeof i.valueOf=="function"?i.valueOf():i;i=Nt(l)?l+"":l}if(typeof i!="string")return i===0?i:+i;i=hf(i);var d=Ip.test(i);return d||wp.test(i)?tm(i.slice(2),d?2:8):Ep.test(i)?ft:+i}function Z_(i){return lr(i,gn(i))}function PE(i){return i?uo(Qe(i),-9007199254740991,xe):i===0?i:0}function ht(i){return i==null?"":xn(i)}var BE=Wo(function(i,l){if(Bi(l)||_n(l)){lr(l,Bt(l),i);return}for(var d in l)vt.call(l,d)&&Mi(i,d,l[d])}),Q_=Wo(function(i,l){lr(l,gn(l),i)}),cs=Wo(function(i,l,d,E){lr(l,gn(l),i,E)}),WE=Wo(function(i,l,d,E){lr(l,Bt(l),i,E)}),YE=br(zl);function zE(i,l){var d=Bo(i);return l==null?d:Nf(d,l)}var VE=tt(function(i,l){i=It(i);var d=-1,E=l.length,w=E>2?l[2]:n;for(w&&tn(l[0],l[1],w)&&(E=1);++d<E;)for(var y=l[d],G=gn(y),P=-1,j=G.length;++P<j;){var ie=G[P],se=i[ie];(se===n||rr(se,Uo[ie])&&!vt.call(i,ie))&&(i[ie]=y[ie])}return i}),jE=tt(function(i){return i.push(n,h_),yn(J_,n,i)});function qE(i,l){return df(i,$e(l,3),sr)}function KE(i,l){return df(i,$e(l,3),jl)}function XE(i,l){return i==null?i:Vl(i,$e(l,3),gn)}function ZE(i,l){return i==null?i:Gf(i,$e(l,3),gn)}function QE(i,l){return i&&sr(i,$e(l,3))}function JE(i,l){return i&&jl(i,$e(l,3))}function eI(i){return i==null?[]:Ya(i,Bt(i))}function tI(i){return i==null?[]:Ya(i,gn(i))}function Lc(i,l,d){var E=i==null?n:fo(i,l);return E===n?d:E}function nI(i,l){return i!=null&&m_(i,l,L1)}function yc(i,l){return i!=null&&m_(i,l,y1)}var rI=u_(function(i,l,d){l!=null&&typeof l.toString!="function"&&(l=Da.call(l)),i[l]=d},xc(hn)),oI=u_(function(i,l,d){l!=null&&typeof l.toString!="function"&&(l=Da.call(l)),vt.call(i,l)?i[l].push(d):i[l]=[d]},$e),iI=tt($i);function Bt(i){return _n(i)?xf(i):Zl(i)}function gn(i){return _n(i)?xf(i,!0):M1(i)}function aI(i,l){var d={};return l=$e(l,3),sr(i,function(E,w,y){Er(d,l(E,w,y),E)}),d}function sI(i,l){var d={};return l=$e(l,3),sr(i,function(E,w,y){Er(d,w,l(E,w,y))}),d}var lI=Wo(function(i,l,d){za(i,l,d)}),J_=Wo(function(i,l,d,E){za(i,l,d,E)}),cI=br(function(i,l){var d={};if(i==null)return d;var E=!1;l=xt(l,function(y){return y=Br(y,i),E||(E=y.length>1),y}),lr(i,dc(i),d),E&&(d=Yn(d,h|p|m,r0));for(var w=l.length;w--;)rc(d,l[w]);return d});function uI(i,l){return eg(i,as($e(l)))}var dI=br(function(i,l){return i==null?{}:$1(i,l)});function eg(i,l){if(i==null)return{};var d=xt(dc(i),function(E){return[E]});return l=$e(l),zf(i,d,function(E,w){return l(E,w[0])})}function fI(i,l,d){l=Br(l,i);var E=-1,w=l.length;for(w||(w=1,i=n);++E<w;){var y=i==null?n:i[cr(l[E])];y===n&&(E=w,y=d),i=Or(y)?y.call(i):y}return i}function _I(i,l,d){return i==null?i:Hi(i,l,d)}function gI(i,l,d,E){return E=typeof E=="function"?E:n,i==null?i:Hi(i,l,d,E)}var tg=__(Bt),ng=__(gn);function hI(i,l,d){var E=Ke(i),w=E||Yr(i)||Vo(i);if(l=$e(l,4),d==null){var y=i&&i.constructor;w?d=E?new y:[]:Nt(i)?d=Or(y)?Bo(ka(i)):{}:d={}}return(w?Pn:sr)(i,function(G,P,j){return l(d,G,P,j)}),d}function vI(i,l){return i==null?!0:rc(i,l)}function pI(i,l,d){return i==null?i:Xf(i,l,ac(d))}function mI(i,l,d,E){return E=typeof E=="function"?E:n,i==null?i:Xf(i,l,ac(d),E)}function jo(i){return i==null?[]:$l(i,Bt(i))}function CI(i){return i==null?[]:$l(i,gn(i))}function EI(i,l,d){return d===n&&(d=l,l=n),d!==n&&(d=jn(d),d=d===d?d:0),l!==n&&(l=jn(l),l=l===l?l:0),uo(jn(i),l,d)}function II(i,l,d){return l=Lr(l),d===n?(d=l,l=0):d=Lr(d),i=jn(i),A1(i,l,d)}function bI(i,l,d){if(d&&typeof d!="boolean"&&tn(i,l,d)&&(l=d=n),d===n&&(typeof l=="boolean"?(d=l,l=n):typeof i=="boolean"&&(d=i,i=n)),i===n&&l===n?(i=0,l=1):(i=Lr(i),l===n?(l=i,i=0):l=Lr(l)),i>l){var E=i;i=l,l=E}if(d||i%1||l%1){var w=yf();return Zt(i+w*(l-i+em("1e-"+((w+"").length-1))),l)}return ec(i,l)}var wI=Yo(function(i,l,d){return l=l.toLowerCase(),i+(d?rg(l):l)});function rg(i){return Ac(ht(i).toLowerCase())}function og(i){return i=ht(i),i&&i.replace(Lp,_m).replace(Yp,"")}function OI(i,l,d){i=ht(i),l=xn(l);var E=i.length;d=d===n?E:uo(Qe(d),0,E);var w=d;return d-=l.length,d>=0&&i.slice(d,w)==l}function LI(i){return i=ht(i),i&&ip.test(i)?i.replace(kd,gm):i}function yI(i){return i=ht(i),i&&dp.test(i)?i.replace(bl,"\\$&"):i}var AI=Yo(function(i,l,d){return i+(d?"-":"")+l.toLowerCase()}),xI=Yo(function(i,l,d){return i+(d?" ":"")+l.toLowerCase()}),SI=s_("toLowerCase");function NI(i,l,d){i=ht(i),l=Qe(l);var E=l?Fo(i):0;if(!l||E>=l)return i;var w=(l-E)/2;return Za($a(w),d)+i+Za(Fa(w),d)}function DI(i,l,d){i=ht(i),l=Qe(l);var E=l?Fo(i):0;return l&&E<l?i+Za(l-E,d):i}function TI(i,l,d){i=ht(i),l=Qe(l);var E=l?Fo(i):0;return l&&E<l?Za(l-E,d)+i:i}function RI(i,l,d){return d||l==null?l=0:l&&(l=+l),Hm(ht(i).replace(wl,""),l||0)}function kI(i,l,d){return(d?tn(i,l,d):l===n)?l=1:l=Qe(l),tc(ht(i),l)}function GI(){var i=arguments,l=ht(i[0]);return i.length<3?l:l.replace(i[1],i[2])}var MI=Yo(function(i,l,d){return i+(d?"_":"")+l.toLowerCase()});function FI(i,l,d){return d&&typeof d!="number"&&tn(i,l,d)&&(l=d=n),d=d===n?ct:d>>>0,d?(i=ht(i),i&&(typeof l=="string"||l!=null&&!Oc(l))&&(l=xn(l),!l&&Mo(i))?Wr(tr(i),0,d):i.split(l,d)):[]}var $I=Yo(function(i,l,d){return i+(d?" ":"")+Ac(l)});function UI(i,l,d){return i=ht(i),d=d==null?0:uo(Qe(d),0,i.length),l=xn(l),i.slice(d,d+l.length)==l}function HI(i,l,d){var E=L.templateSettings;d&&tn(i,l,d)&&(l=n),i=ht(i),l=cs({},l,E,g_);var w=cs({},l.imports,E.imports,g_),y=Bt(w),G=$l(w,y),P,j,ie=0,se=l.interpolate||ba,ce="__p += '",me=Hl((l.escape||ba).source+"|"+se.source+"|"+(se===Gd?Cp:ba).source+"|"+(l.evaluate||ba).source+"|$","g"),Ne="//# sourceURL="+(vt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Kp+"]")+`
`;i.replace(me,function(He,ot,at,Nn,nn,Dn){return at||(at=Nn),ce+=i.slice(ie,Dn).replace(yp,hm),ot&&(P=!0,ce+=`' +
__e(`+ot+`) +
'`),nn&&(j=!0,ce+=`';
`+nn+`;
__p += '`),at&&(ce+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),ie=Dn+He.length,He}),ce+=`';
`;var Ue=vt.call(l,"variable")&&l.variable;if(!Ue)ce=`with (obj) {
`+ce+`
}
`;else if(pp.test(Ue))throw new Ve(c);ce=(j?ce.replace(tp,""):ce).replace(np,"$1").replace(rp,"$1;"),ce="function("+(Ue||"obj")+`) {
`+(Ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(j?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var et=ag(function(){return _t(y,Ne+"return "+ce).apply(n,G)});if(et.source=ce,wc(et))throw et;return et}function PI(i){return ht(i).toLowerCase()}function BI(i){return ht(i).toUpperCase()}function WI(i,l,d){if(i=ht(i),i&&(d||l===n))return hf(i);if(!i||!(l=xn(l)))return i;var E=tr(i),w=tr(l),y=vf(E,w),G=pf(E,w)+1;return Wr(E,y,G).join("")}function YI(i,l,d){if(i=ht(i),i&&(d||l===n))return i.slice(0,Cf(i)+1);if(!i||!(l=xn(l)))return i;var E=tr(i),w=pf(E,tr(l))+1;return Wr(E,0,w).join("")}function zI(i,l,d){if(i=ht(i),i&&(d||l===n))return i.replace(wl,"");if(!i||!(l=xn(l)))return i;var E=tr(i),w=vf(E,tr(l));return Wr(E,w).join("")}function VI(i,l){var d=de,E=J;if(Nt(l)){var w="separator"in l?l.separator:w;d="length"in l?Qe(l.length):d,E="omission"in l?xn(l.omission):E}i=ht(i);var y=i.length;if(Mo(i)){var G=tr(i);y=G.length}if(d>=y)return i;var P=d-Fo(E);if(P<1)return E;var j=G?Wr(G,0,P).join(""):i.slice(0,P);if(w===n)return j+E;if(G&&(P+=j.length-P),Oc(w)){if(i.slice(P).search(w)){var ie,se=j;for(w.global||(w=Hl(w.source,ht(Md.exec(w))+"g")),w.lastIndex=0;ie=w.exec(se);)var ce=ie.index;j=j.slice(0,ce===n?P:ce)}}else if(i.indexOf(xn(w),P)!=P){var me=j.lastIndexOf(w);me>-1&&(j=j.slice(0,me))}return j+E}function jI(i){return i=ht(i),i&&op.test(i)?i.replace(Rd,bm):i}var qI=Yo(function(i,l,d){return i+(d?" ":"")+l.toUpperCase()}),Ac=s_("toUpperCase");function ig(i,l,d){return i=ht(i),l=d?n:l,l===n?pm(i)?Lm(i):lm(i):i.match(l)||[]}var ag=tt(function(i,l){try{return yn(i,n,l)}catch(d){return wc(d)?d:new Ve(d)}}),KI=br(function(i,l){return Pn(l,function(d){d=cr(d),Er(i,d,Ic(i[d],i))}),i});function XI(i){var l=i==null?0:i.length,d=$e();return i=l?xt(i,function(E){if(typeof E[1]!="function")throw new Bn(s);return[d(E[0]),E[1]]}):[],tt(function(E){for(var w=-1;++w<l;){var y=i[w];if(yn(y[0],this,E))return yn(y[1],this,E)}})}function ZI(i){return b1(Yn(i,h))}function xc(i){return function(){return i}}function QI(i,l){return i==null||i!==i?l:i}var JI=c_(),eb=c_(!0);function hn(i){return i}function Sc(i){return Uf(typeof i=="function"?i:Yn(i,h))}function tb(i){return Pf(Yn(i,h))}function nb(i,l){return Bf(i,Yn(l,h))}var rb=tt(function(i,l){return function(d){return $i(d,i,l)}}),ob=tt(function(i,l){return function(d){return $i(i,d,l)}});function Nc(i,l,d){var E=Bt(l),w=Ya(l,E);d==null&&!(Nt(l)&&(w.length||!E.length))&&(d=l,l=i,i=this,w=Ya(l,Bt(l)));var y=!(Nt(d)&&"chain"in d)||!!d.chain,G=Or(i);return Pn(w,function(P){var j=l[P];i[P]=j,G&&(i.prototype[P]=function(){var ie=this.__chain__;if(y||ie){var se=i(this.__wrapped__),ce=se.__actions__=fn(this.__actions__);return ce.push({func:j,args:arguments,thisArg:i}),se.__chain__=ie,se}return j.apply(i,Fr([this.value()],arguments))})}),i}function ib(){return zt._===this&&(zt._=Dm),this}function Dc(){}function ab(i){return i=Qe(i),tt(function(l){return Wf(l,i)})}var sb=lc(xt),lb=lc(uf),cb=lc(Rl);function sg(i){return hc(i)?kl(cr(i)):U1(i)}function ub(i){return function(l){return i==null?n:fo(i,l)}}var db=d_(),fb=d_(!0);function Tc(){return[]}function Rc(){return!1}function _b(){return{}}function gb(){return""}function hb(){return!0}function vb(i,l){if(i=Qe(i),i<1||i>xe)return[];var d=ct,E=Zt(i,ct);l=$e(l),i-=ct;for(var w=Fl(E,l);++d<i;)l(d);return w}function pb(i){return Ke(i)?xt(i,cr):Sn(i)?[i]:fn(A_(ht(i)))}function mb(i){var l=++Sm;return ht(i)+l}var Cb=Xa(function(i,l){return i+l},0),Eb=cc("ceil"),Ib=Xa(function(i,l){return i/l},1),bb=cc("floor");function wb(i){return i&&i.length?Wa(i,hn,ql):n}function Ob(i,l){return i&&i.length?Wa(i,$e(l,2),ql):n}function Lb(i){return _f(i,hn)}function yb(i,l){return _f(i,$e(l,2))}function Ab(i){return i&&i.length?Wa(i,hn,Ql):n}function xb(i,l){return i&&i.length?Wa(i,$e(l,2),Ql):n}var Sb=Xa(function(i,l){return i*l},1),Nb=cc("round"),Db=Xa(function(i,l){return i-l},0);function Tb(i){return i&&i.length?Ml(i,hn):0}function Rb(i,l){return i&&i.length?Ml(i,$e(l,2)):0}return L.after=tE,L.ary=$_,L.assign=BE,L.assignIn=Q_,L.assignInWith=cs,L.assignWith=WE,L.at=YE,L.before=U_,L.bind=Ic,L.bindAll=KI,L.bindKey=H_,L.castArray=_E,L.chain=G_,L.chunk=b0,L.compact=w0,L.concat=O0,L.cond=XI,L.conforms=ZI,L.constant=xc,L.countBy=TC,L.create=zE,L.curry=P_,L.curryRight=B_,L.debounce=W_,L.defaults=VE,L.defaultsDeep=jE,L.defer=nE,L.delay=rE,L.difference=L0,L.differenceBy=y0,L.differenceWith=A0,L.drop=x0,L.dropRight=S0,L.dropRightWhile=N0,L.dropWhile=D0,L.fill=T0,L.filter=kC,L.flatMap=FC,L.flatMapDeep=$C,L.flatMapDepth=UC,L.flatten=D_,L.flattenDeep=R0,L.flattenDepth=k0,L.flip=oE,L.flow=JI,L.flowRight=eb,L.fromPairs=G0,L.functions=eI,L.functionsIn=tI,L.groupBy=HC,L.initial=F0,L.intersection=$0,L.intersectionBy=U0,L.intersectionWith=H0,L.invert=rI,L.invertBy=oI,L.invokeMap=BC,L.iteratee=Sc,L.keyBy=WC,L.keys=Bt,L.keysIn=gn,L.map=rs,L.mapKeys=aI,L.mapValues=sI,L.matches=tb,L.matchesProperty=nb,L.memoize=is,L.merge=lI,L.mergeWith=J_,L.method=rb,L.methodOf=ob,L.mixin=Nc,L.negate=as,L.nthArg=ab,L.omit=cI,L.omitBy=uI,L.once=iE,L.orderBy=YC,L.over=sb,L.overArgs=aE,L.overEvery=lb,L.overSome=cb,L.partial=bc,L.partialRight=Y_,L.partition=zC,L.pick=dI,L.pickBy=eg,L.property=sg,L.propertyOf=ub,L.pull=Y0,L.pullAll=R_,L.pullAllBy=z0,L.pullAllWith=V0,L.pullAt=j0,L.range=db,L.rangeRight=fb,L.rearg=sE,L.reject=qC,L.remove=q0,L.rest=lE,L.reverse=Cc,L.sampleSize=XC,L.set=_I,L.setWith=gI,L.shuffle=ZC,L.slice=K0,L.sortBy=eE,L.sortedUniq=nC,L.sortedUniqBy=rC,L.split=FI,L.spread=cE,L.tail=oC,L.take=iC,L.takeRight=aC,L.takeRightWhile=sC,L.takeWhile=lC,L.tap=wC,L.throttle=uE,L.thru=ns,L.toArray=K_,L.toPairs=tg,L.toPairsIn=ng,L.toPath=pb,L.toPlainObject=Z_,L.transform=hI,L.unary=dE,L.union=cC,L.unionBy=uC,L.unionWith=dC,L.uniq=fC,L.uniqBy=_C,L.uniqWith=gC,L.unset=vI,L.unzip=Ec,L.unzipWith=k_,L.update=pI,L.updateWith=mI,L.values=jo,L.valuesIn=CI,L.without=hC,L.words=ig,L.wrap=fE,L.xor=vC,L.xorBy=pC,L.xorWith=mC,L.zip=CC,L.zipObject=EC,L.zipObjectDeep=IC,L.zipWith=bC,L.entries=tg,L.entriesIn=ng,L.extend=Q_,L.extendWith=cs,Nc(L,L),L.add=Cb,L.attempt=ag,L.camelCase=wI,L.capitalize=rg,L.ceil=Eb,L.clamp=EI,L.clone=gE,L.cloneDeep=vE,L.cloneDeepWith=pE,L.cloneWith=hE,L.conformsTo=mE,L.deburr=og,L.defaultTo=QI,L.divide=Ib,L.endsWith=OI,L.eq=rr,L.escape=LI,L.escapeRegExp=yI,L.every=RC,L.find=GC,L.findIndex=S_,L.findKey=qE,L.findLast=MC,L.findLastIndex=N_,L.findLastKey=KE,L.floor=bb,L.forEach=M_,L.forEachRight=F_,L.forIn=XE,L.forInRight=ZE,L.forOwn=QE,L.forOwnRight=JE,L.get=Lc,L.gt=CE,L.gte=EE,L.has=nI,L.hasIn=yc,L.head=T_,L.identity=hn,L.includes=PC,L.indexOf=M0,L.inRange=II,L.invoke=iI,L.isArguments=ho,L.isArray=Ke,L.isArrayBuffer=IE,L.isArrayLike=_n,L.isArrayLikeObject=Tt,L.isBoolean=bE,L.isBuffer=Yr,L.isDate=wE,L.isElement=OE,L.isEmpty=LE,L.isEqual=yE,L.isEqualWith=AE,L.isError=wc,L.isFinite=xE,L.isFunction=Or,L.isInteger=z_,L.isLength=ss,L.isMap=V_,L.isMatch=SE,L.isMatchWith=NE,L.isNaN=DE,L.isNative=TE,L.isNil=kE,L.isNull=RE,L.isNumber=j_,L.isObject=Nt,L.isObjectLike=Dt,L.isPlainObject=Yi,L.isRegExp=Oc,L.isSafeInteger=GE,L.isSet=q_,L.isString=ls,L.isSymbol=Sn,L.isTypedArray=Vo,L.isUndefined=ME,L.isWeakMap=FE,L.isWeakSet=$E,L.join=P0,L.kebabCase=AI,L.last=Vn,L.lastIndexOf=B0,L.lowerCase=xI,L.lowerFirst=SI,L.lt=UE,L.lte=HE,L.max=wb,L.maxBy=Ob,L.mean=Lb,L.meanBy=yb,L.min=Ab,L.minBy=xb,L.stubArray=Tc,L.stubFalse=Rc,L.stubObject=_b,L.stubString=gb,L.stubTrue=hb,L.multiply=Sb,L.nth=W0,L.noConflict=ib,L.noop=Dc,L.now=os,L.pad=NI,L.padEnd=DI,L.padStart=TI,L.parseInt=RI,L.random=bI,L.reduce=VC,L.reduceRight=jC,L.repeat=kI,L.replace=GI,L.result=fI,L.round=Nb,L.runInContext=V,L.sample=KC,L.size=QC,L.snakeCase=MI,L.some=JC,L.sortedIndex=X0,L.sortedIndexBy=Z0,L.sortedIndexOf=Q0,L.sortedLastIndex=J0,L.sortedLastIndexBy=eC,L.sortedLastIndexOf=tC,L.startCase=$I,L.startsWith=UI,L.subtract=Db,L.sum=Tb,L.sumBy=Rb,L.template=HI,L.times=vb,L.toFinite=Lr,L.toInteger=Qe,L.toLength=X_,L.toLower=PI,L.toNumber=jn,L.toSafeInteger=PE,L.toString=ht,L.toUpper=BI,L.trim=WI,L.trimEnd=YI,L.trimStart=zI,L.truncate=VI,L.unescape=jI,L.uniqueId=mb,L.upperCase=qI,L.upperFirst=Ac,L.each=M_,L.eachRight=F_,L.first=T_,Nc(L,function(){var i={};return sr(L,function(l,d){vt.call(L.prototype,d)||(i[d]=l)}),i}(),{chain:!1}),L.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){L[i].placeholder=L}),Pn(["drop","take"],function(i,l){it.prototype[i]=function(d){d=d===n?1:Ht(Qe(d),0);var E=this.__filtered__&&!l?new it(this):this.clone();return E.__filtered__?E.__takeCount__=Zt(d,E.__takeCount__):E.__views__.push({size:Zt(d,ct),type:i+(E.__dir__<0?"Right":"")}),E},it.prototype[i+"Right"]=function(d){return this.reverse()[i](d).reverse()}}),Pn(["filter","map","takeWhile"],function(i,l){var d=l+1,E=d==Ce||d==Fe;it.prototype[i]=function(w){var y=this.clone();return y.__iteratees__.push({iteratee:$e(w,3),type:d}),y.__filtered__=y.__filtered__||E,y}}),Pn(["head","last"],function(i,l){var d="take"+(l?"Right":"");it.prototype[i]=function(){return this[d](1).value()[0]}}),Pn(["initial","tail"],function(i,l){var d="drop"+(l?"":"Right");it.prototype[i]=function(){return this.__filtered__?new it(this):this[d](1)}}),it.prototype.compact=function(){return this.filter(hn)},it.prototype.find=function(i){return this.filter(i).head()},it.prototype.findLast=function(i){return this.reverse().find(i)},it.prototype.invokeMap=tt(function(i,l){return typeof i=="function"?new it(this):this.map(function(d){return $i(d,i,l)})}),it.prototype.reject=function(i){return this.filter(as($e(i)))},it.prototype.slice=function(i,l){i=Qe(i);var d=this;return d.__filtered__&&(i>0||l<0)?new it(d):(i<0?d=d.takeRight(-i):i&&(d=d.drop(i)),l!==n&&(l=Qe(l),d=l<0?d.dropRight(-l):d.take(l-i)),d)},it.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},it.prototype.toArray=function(){return this.take(ct)},sr(it.prototype,function(i,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),w=L[E?"take"+(l=="last"?"Right":""):l],y=E||/^find/.test(l);w&&(L.prototype[l]=function(){var G=this.__wrapped__,P=E?[1]:arguments,j=G instanceof it,ie=P[0],se=j||Ke(G),ce=function(ot){var at=w.apply(L,Fr([ot],P));return E&&me?at[0]:at};se&&d&&typeof ie=="function"&&ie.length!=1&&(j=se=!1);var me=this.__chain__,Ne=!!this.__actions__.length,Ue=y&&!me,et=j&&!Ne;if(!y&&se){G=et?G:new it(this);var He=i.apply(G,P);return He.__actions__.push({func:ns,args:[ce],thisArg:n}),new Wn(He,me)}return Ue&&et?i.apply(this,P):(He=this.thru(ce),Ue?E?He.value()[0]:He.value():He)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(i){var l=xa[i],d=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",E=/^(?:pop|shift)$/.test(i);L.prototype[i]=function(){var w=arguments;if(E&&!this.__chain__){var y=this.value();return l.apply(Ke(y)?y:[],w)}return this[d](function(G){return l.apply(Ke(G)?G:[],w)})}}),sr(it.prototype,function(i,l){var d=L[l];if(d){var E=d.name+"";vt.call(Po,E)||(Po[E]=[]),Po[E].push({name:l,func:d})}}),Po[Ka(n,b).name]=[{name:"wrapper",func:n}],it.prototype.clone=jm,it.prototype.reverse=qm,it.prototype.value=Km,L.prototype.at=OC,L.prototype.chain=LC,L.prototype.commit=yC,L.prototype.next=AC,L.prototype.plant=SC,L.prototype.reverse=NC,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=DC,L.prototype.first=L.prototype.head,Di&&(L.prototype[Di]=xC),L},$o=ym();ao?((ao.exports=$o)._=$o,Sl._=$o):zt._=$o}).call(uO)}(Ki,Ki.exports)),Ki.exports}var Mt=dO(),B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function vn(t,e,n){n!==void 0&&(t[e]=n)}function fO(t){var e,n,r,o,a,s,c,u,_,g,h,p,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(p=t.fontSize)!=null&&p.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function eu(t){var n,r,o,a,s,c,u,_,g,h,p,m,C,I,O,b,A,T,M,k,Y,W;const e={type:t.type};return vn(e,"n",(n=t.n)==null?void 0:n.value),vn(e,"r",(r=t.r)==null?void 0:r.value),vn(e,"height",(o=t.height)==null?void 0:o.value),vn(e,"width",(a=t.width)==null?void 0:a.value),vn(e,"inset",(s=t.inset)==null?void 0:s.value),vn(e,"angle",(c=t.angle)==null?void 0:c.value),vn(e,"fill",(u=t.fill)==null?void 0:u.value),vn(e,"stroke",(_=t.stroke)==null?void 0:_.value),vn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),vn(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),vn(e,"strokeDashoffset",(p=t.strokeDashoffset)==null?void 0:p.value),vn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),vn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),vn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(b=(O=t.linePathOptions)==null?void 0:O.shortenHead)==null?void 0:b.value,shortenTail:(T=(A=t.linePathOptions)==null?void 0:A.shortenTail)==null?void 0:T.value,bezierRounding:(k=(M=t.linePathOptions)==null?void 0:M.bezierRounding)==null?void 0:k.value,closeLoops:(W=(Y=t.linePathOptions)==null?void 0:Y.closeLoops)==null?void 0:W.value}),e}function _O(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const gO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},hO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},vO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},yh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ah={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Hs={type:"Line",strokeWidth:.125,stroke:"gray"},Ku={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},pO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},mO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},CO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):Nh(t)==="[object Array]"}function EO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function IO(t){return t==null?"":EO(t)}function _r(t){return typeof t=="string"}function xh(t){return typeof t=="number"}function bO(t){return t===!0||t===!1||wO(t)&&Nh(t)=="[object Boolean]"}function Sh(t){return typeof t=="object"}function wO(t){return Sh(t)&&t!==null}function kn(t){return t!=null}function Uc(t){return!t.trim().length}function Nh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const OO="Incorrect 'index' type",LO=t=>`Invalid value for key ${t}`,yO=t=>`Pattern length exceeds max of ${t}.`,AO=t=>`Missing ${t} property in key`,xO=t=>`Property 'weight' in key '${t}' must be a positive integer`,pg=Object.prototype.hasOwnProperty;class SO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=Dh(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Dh(t){let e=null,n=null,r=null,o=1,a=null;if(_r(t)||xr(t))r=t,e=mg(t),n=tu(t);else{if(!pg.call(t,"name"))throw new Error(AO("name"));const s=t.name;if(r=s,pg.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(xO(s));e=mg(s),n=tu(s),a=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:a}}function mg(t){return xr(t)?t:t.split(".")}function tu(t){return xr(t)?t.join("."):t}function NO(t,e){let n=[],r=!1;const o=(a,s,c)=>{if(kn(a))if(!s[c])n.push(a);else{let u=s[c];const _=a[u];if(!kn(_))return;if(c===s.length-1&&(_r(_)||xh(_)||bO(_)))n.push(IO(_));else if(xr(_)){r=!0;for(let g=0,h=_.length;g<h;g+=1)o(_[g],s,c+1)}else s.length&&o(_,s,c+1)}};return o(t,_r(e)?e.split("."):e,0),r?n:n[0]}const DO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},TO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},RO={location:0,threshold:.6,distance:100},kO={useExtendedSearch:!1,getFn:NO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...TO,...DO,...RO,...kO};const GO=/[^ ]+/g;function MO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const a=o.match(GO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class Xu{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=MO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_r(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();_r(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!kn(e)||Uc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,a)=>{let s=o.getFn?o.getFn(e):this.getFn(e,o.path);if(kn(s)){if(xr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:_,value:g}=u.pop();if(kn(g))if(_r(g)&&!Uc(g)){let h={v:g,i:_,n:this.norm.get(g)};c.push(h)}else xr(g)&&g.forEach((h,p)=>{u.push({nestedArrIndex:p,value:h})})}r.$[a]=c}else if(_r(s)&&!Uc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Th(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const o=new Xu({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(Dh)),o.setSources(e),o.create(),o}function FO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:o}=t,a=new Xu({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(o),a}function fs(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return o?s+c/o:c?1:s}function $O(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,o=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(o=a-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const po=32;function UO(t,e,n,{location:r=Ye.location,distance:o=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>po)throw new Error(yO(po));const g=e.length,h=t.length,p=Math.max(0,Math.min(r,h));let m=a,C=p;const I=c>1||u,O=I?Array(h):[];let b;for(;(b=t.indexOf(e,C))>-1;){let W=fs(e,{currentLocation:b,expectedLocation:p,distance:o,ignoreLocation:_});if(m=Math.min(W,m),C=b+g,I){let K=0;for(;K<g;)O[b+K]=1,K+=1}}C=-1;let A=[],T=1,M=g+h;const k=1<<g-1;for(let W=0;W<g;W+=1){let K=0,oe=M;for(;K<oe;)fs(e,{errors:W,currentLocation:p+oe,expectedLocation:p,distance:o,ignoreLocation:_})<=m?K=oe:M=oe,oe=Math.floor((M-K)/2+K);M=oe;let de=Math.max(1,p-oe+1),J=s?h:Math.min(p+oe,h)+g,le=Array(J+2);le[J+1]=(1<<W)-1;for(let Ce=J;Ce>=de;Ce-=1){let Ie=Ce-1,Fe=n[t.charAt(Ie)];if(I&&(O[Ie]=+!!Fe),le[Ce]=(le[Ce+1]<<1|1)&Fe,W&&(le[Ce]|=(A[Ce+1]|A[Ce])<<1|1|A[Ce+1]),le[Ce]&k&&(T=fs(e,{errors:W,currentLocation:Ie,expectedLocation:p,distance:o,ignoreLocation:_}),T<=m)){if(m=T,C=Ie,C<=p)break;de=Math.max(1,2*p-C)}}if(fs(e,{errors:W+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:_})>m)break;A=le}const Y={isMatch:C>=0,score:Math.max(.001,T)};if(I){const W=$O(O,c);W.length?u&&(Y.indices=W):Y.isMatch=!1}return Y}function HO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class Rh{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(p,m)=>{this.chunks.push({pattern:p,alphabet:HO(p),startIndex:m})},h=this.pattern.length;if(h>po){let p=0;const m=h%po,C=h-m;for(;p<C;)g(this.pattern.substr(p,po),p),p+=po;if(m){const I=h-po;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:o,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let g=[],h=0,p=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:O})=>{const{isMatch:b,score:A,indices:T}=UO(e,C,I,{location:o+O,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});b&&(p=!0),h+=A,b&&T&&(g=[...g,...T])});let m={isMatch:p,score:p?h/this.chunks.length:1};return p&&r&&(m.indices=g),m}}class Qr{constructor(e){this.pattern=e}static isMultiMatch(e){return Cg(e,this.multiRegex)}static isSingleMatch(e){return Cg(e,this.singleRegex)}search(){}}function Cg(t,e){const n=t.match(e);return n?n[1]:null}class PO extends Qr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class BO extends Qr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class WO extends Qr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class YO extends Qr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zO extends Qr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class VO extends Qr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class kh extends Qr{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new Rh(e,{location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Gh extends Qr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,o.push([r,n-1]);const s=!!o.length;return{isMatch:s,score:s?0:1,indices:o}}}const nu=[PO,Gh,WO,YO,VO,zO,BO,kh],Eg=nu.length,jO=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,qO="|";function KO(t,e={}){return t.split(qO).map(n=>{let r=n.trim().split(jO).filter(a=>a&&!!a.trim()),o=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,_=-1;for(;!u&&++_<Eg;){const g=nu[_];let h=g.isMultiMatch(c);h&&(o.push(new g(h,e)),u=!0)}if(!u)for(_=-1;++_<Eg;){const g=nu[_];let h=g.isSingleMatch(c);if(h){o.push(new g(h,e));break}}}return o})}const XO=new Set([kh.type,Gh.type]);class ZO{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:o=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=KO(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const g=n[u];s.length=0,a=0;for(let h=0,p=g.length;h<p;h+=1){const m=g[h],{isMatch:C,indices:I,score:O}=m.search(e);if(C){if(a+=1,c+=O,r){const b=m.constructor.type;XO.has(b)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let h={isMatch:!0,score:c/a};return r&&(h.indices=s),h}}return{isMatch:!1,score:1}}}const ru=[];function QO(...t){ru.push(...t)}function ou(t,e){for(let n=0,r=ru.length;n<r;n+=1){let o=ru[n];if(o.condition(t,e))return new o(t,e)}return new Rh(t,e)}const Is={AND:"$and",OR:"$or"},iu={PATH:"$path",PATTERN:"$val"},au=t=>!!(t[Is.AND]||t[Is.OR]),JO=t=>!!t[iu.PATH],eL=t=>!xr(t)&&Sh(t)&&!au(t),Ig=t=>({[Is.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Mh(t,e,{auto:n=!0}={}){const r=o=>{let a=Object.keys(o);const s=JO(o);if(!s&&a.length>1&&!au(o))return r(Ig(o));if(eL(o)){const u=s?o[iu.PATH]:a[0],_=s?o[iu.PATTERN]:o[u];if(!_r(_))throw new Error(LO(u));const g={keyId:tu(u),pattern:_};return n&&(g.searcher=ou(_,e)),g}let c={children:[],operator:a[0]};return a.forEach(u=>{const _=o[u];xr(_)&&_.forEach(g=>{c.children.push(r(g))})}),c};return au(t)||(t=Ig(t)),r(t)}function tL(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:a,score:s})=>{const c=o?o.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function nL(t,e){const n=t.matches;e.matches=[],kn(n)&&n.forEach(r=>{if(!kn(r.indices)||!r.indices.length)return;const{indices:o,value:a}=r;let s={indices:o,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function rL(t,e){e.score=t.score}function oL(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const o=[];return n&&o.push(nL),r&&o.push(rL),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return o.length&&o.forEach(u=>{u(a,c)}),c})}class ai{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new SO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Xu))throw new Error(OO);this._myIndex=n||Th(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){kn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,o-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=_r(e)?_r(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return tL(u,{ignoreFieldNorm:c}),a&&u.sort(s),xh(n)&&n>-1&&(u=u.slice(0,n)),oL(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=ou(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:_,indices:g}=n.searchIn(a);u&&o.push({item:a,idx:s,matches:[{score:_,value:a,norm:c,indices:g}]})}),o}_searchLogical(e){const n=Mh(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:h,searcher:p}=c,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:p});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const g=[];for(let h=0,p=c.children.length;h<p;h+=1){const m=c.children[h],C=r(m,u,_);if(C.length)g.push(...C);else if(c.operator===Is.AND)return[]}return g},o=this._myIndex.records,a={},s=[];return o.forEach(({$:c,i:u})=>{if(kn(c)){let _=r(n,c,u);_.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),_.forEach(({matches:g})=>{a[u].matches.push(...g)}))}}),s}_searchObjectList(e){const n=ou(e,this.options),{keys:r,records:o}=this._myIndex,a=[];return o.forEach(({$:s,i:c})=>{if(!kn(s))return;let u=[];r.forEach((_,g)=>{u.push(...this._findMatches({key:_,value:s[g],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!kn(n))return[];let o=[];if(xr(n))n.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:_,indices:g}=r.searchIn(a);u&&o.push({score:_,key:e,value:a,idx:s,norm:c,indices:g})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:_}=r.searchIn(a);c&&o.push({score:u,key:e,value:a,norm:s,indices:_})}return o}}ai.version="7.0.0";ai.createIndex=Th;ai.parseIndex=FO;ai.config=Ye;ai.parseQuery=Mh;QO(ZO);function Kr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function iL(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function aL(t){return new ai(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function sL(t,e,n){const r=iL(e,n);return t.length===0?r:aL(r).search(t).map(o=>o.item)}function lL(t,e){return Kr(t,e).shape}function pn(t,e){const n=lL(t,e);return n?eu(n):void 0}var Ko=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Ko||{});const Zu=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Qu=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),cL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),uL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),bg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Fh(t){rt.update(e=>(e.addToDict(t),e))}function Jr(t,e){const n=st(uv);n&&(e.shape={...n}),rt.update(r=>(r.addConstraint(e.toolId,t,e),r)),bi({id:t,constraint:e})}function Io(t,e){e&&rt.update(n=>(n.removeConstraint(t,e),n))}function dL(t,e){rt.update(n=>(n.setConstraints(t,e),n))}function wg(t){t.type===Ko.ADD_LOCAL_CONSTRAINT?Jr(t.payload.id,t.payload.constraint):t.type===Ko.REMOVE_LOCAL_CONSTRAINT?Io(t.payload.tool,t.payload.id):t.type===Ko.REMOVE_LOCAL_CONSTRAINT_GROUP?YD(t.payload.tool):t.type===Ko.RESTORE_LOCAL_CONSTRAINT_GROUP?dL(t.payload.tool,t.payload.constraints):t.type===Ko.UPDATE_LOCAL_CONSTRAINT&&Pt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function da(t,e){return{execute:()=>{wg(t)},unExecute:()=>{wg(e)}}}class Te{constructor(e,n){ge(this,"x");ge(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function fL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Mn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Te(o.x,o.y)};function ms(t,e=!0,n=.5){const r=$s(t),o=new Te(r.c+.5,r.r+.5),a=t.distance(o);return!e||a<n?{cell:r,dist:a}:null}function $h(t,e=!0,n=.5){const r=$s(t),o=new Te(r.c+.5,r.r+.5),a=t.distance(o),s={r:o.y,c:o.x};return!e||a<n?{cellCenter:s,dist:a}:null}function Ji(t,e=!0,n=.5){const r=$s(t),o=oO(r),s=o.map(g=>new Te(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],_=s[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function ea(t,e=!0,n=.5){const r=$s(t),o=aO(r),s=o.map(g=>new Te(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],_=s[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function Hc(t,e=!0,n=.5){const r=ea(t,!1);if(!r)return null;const o=Ji(t,!1);if(!o)return null;const a=$h(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,o.corner],u=s.map(I=>new Te(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),g=u.findIndex(I=>I===_),h=s[g],m=["cell center","edge","corner"][g],C={cellCenter:a.cellCenter,edge:r.edge,corner:o.corner,dist:_,target:h,type:m};return!e||_<n?C:null}class si{constructor(e=.4){ge(this,"onTap",null);ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"onMove",null);ge(this,"_prevPoint",null);ge(this,"_prevCell",null);ge(this,"_lastPointerDownTime",0);ge(this,"_isDown",!1);ge(this,"_isTap",!1);ge(this,"_tapCount",0);ge(this,"_lastTapPosition",null);ge(this,"_lastTapTime",0);ge(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,o=Mn(e,n);if(!o)return;this._prevPoint=o;const a=ms(o,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=ms(r,!0,this._margin);if(!o)return;const a=o.cell;if(this._prevCell&&je(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Mn(e,n);if(!r)return;const o=ms(r,!1);if(!o)return;const a=o.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Uh(){return{_undoStack:[],_redoStack:[]}}const li=$t(Uh());function _L(){li.update(()=>Uh())}function on(t,e=!0){li.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function gL(t,e=!0){li.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Hh(){li.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Ph(){li.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}function Og(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function hL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function Lg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function yg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function vL(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===f.HIGHLIGHTS&&o.highlights.length?Og(o,e):o.value!==null?hL(o,e):n===f.CORNER_PM&&o.cornerMarks.length?Lg(o,e):n===f.CENTER_PM&&o.centerMarks.length?yg(o,e):o.cornerMarks.length?Lg(o,e):o.centerMarks.length?yg(o,e):o.highlights.length?Og(o,e):r:r}function eo(t,e,n,r=!1){if(!(t&&e))return;const o=Zu(t,e),a=Qu(t,n),s=da(o,a);on(s,r)}function Lo(t,e,n,r=!0){if(!(t&&e))return;const o=Qu(t,n),a=Zu(t,e),s=da(o,a);on(s,r)}function su(t,e,n,r,o=!1){if(!(t&&n&&e))return;const a=bg(r,t,n),s=bg(r,t,e),c=da(a,s);on(c,o)}function Ps(t,e,n){console.log("getArrowToolInputHandler");const r=new si,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,_=!1,g;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(g||(g={}));let h="DYNAMIC";function p(C){u=!1;const I=C.cell;if(qt(C.cell,o)){if(h==="DYNAMIC"){const b=st(rt),A=DD(b,n,I);if(A){const M=OD(A.arrow,A.matchLineIdx);su(A.id,A.arrow,M,n,!0),_=!0;return}const T=Gg(b,n,I);if(!T)u=!0,h="BULB",c=null,a=null;else{h="BODY",c=T[0],a=T[1],a=uu(a,I),Pt(n,c,a);return}}if(h==="BULB"&&!c){c=Mt.uniqueId(),a=sv(n,[I]),Jr(c,a);return}else h==="BULB"&&c&&a?(a=ED(a,I),Pt(n,c,a)):h==="BODY"&&c&&a&&(a=ID(a,I),Pt(n,c,a))}}return r.onDragStart=C=>{h="DYNAMIC",p(C)},r.onDrag=C=>{p(C)},r.onDragEnd=()=>{if(_){_=!1;return}h==="BODY"&&c&&a?bD(a)?(a=wD(a),Pt(n,c,a)):(su(c,s,a,n),s=a):h==="BULB"&&(eo(c,a,n),s=a),h="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,O=st(rt);if(Gg(O,n,I)){Lo(c,a,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const Bs=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,mn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Ws=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,pL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Cn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,ci=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Bh=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Se=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,mL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,CL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,EL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,ui=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,IL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,bL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,wL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function OL(t){return Hu(t)?mL():Pu(t)?CL():t===f.XV?bL():Bu(t)?EL():zu(t)?Bs():Yu(t)?Ws():aa(t)?pL():Wu(t)?Se():Eh(t)?wL():""}const LL={getInputHandler(t,e,n){return Ps(t,e,n)},toolId:f.ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Ws(),tags:[],categories:[R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL]}},yL={getInputHandler(t,e,n){return Ps(t,e,n)},toolId:f.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Ws(),tags:[],categories:[R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL]}};f.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,B.LINE,Ws(),R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL;function AL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function xL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function SL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function NL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function DL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const TL={Delete:null,Backspace:null};function RL(t,e=10){if(t in TL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function kL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function GL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function ML(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function FL(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function Wh(t){return t==="Backspace"}function di(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Wh(t.key))}function $L(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function UL(t){return $L(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function HL(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function yo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${_.source}$`,"i").test(t))}function to(t,e,n){if(t===void 0)return t;let r=t;return Wh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Yh(t,e,n=""){return{toolId:t,cells:e,value:n}}function PL(t,e,n=!1){const r=Lh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function BL(t,e){return{...t,value:e}}function WL(t,e){const n=fa(e,"cells"),r=No(e);return Yh(t,n,r)}function Yt(t,e,n,r){const o=new si,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function g(m){const C=st(rt),I=m.cell;if(qt(m.cell,a)){if(m.event.shiftKey){const b=kg(C,n,I);b&&(c=b[0],s=b[1],bi({id:c,constraint:s}),_=1)}if(_===0){const b=kg(C,n,I);if(_=b?2:1,b){Lo(b[0],b[1],n);return}}if(!s&&_===1){s=Yh(n,[I]),c=Mt.uniqueId(),Jr(c,s);return}else if(s&&c&&_===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=PL(s,I,b),Pt(n,c,s);return}}}function h(m){const C=st(hr);if(!C)return;let I=C.constraint;const O=C.id;if(I.value===void 0||!di(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(I==null?void 0:I.value,m.key);b!==void 0&&b!==I.value&&(I=BL(I,b),Pt(n,O,I))}return o.onDragStart=m=>{c=null,s=null,_=0,g(m)},o.onDrag=m=>{g(m)},o.onDragEnd=()=>{c&&s&&eo(c,s,n),c=null},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:m=>{o.pointerUp(m,t)},keyDown:m=>{h(m)},keyUp:()=>{}}}const Ju=[R.CAGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CAGE_TOOL],En=[R.CAGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CAGE_TOOL];function cn(t,e=5){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function un(t,e,n){return to(t,e,n)}const In={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},YL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:mn(),tags:[],categories:En}},zL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:mn(),tags:[],categories:En}},VL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:mn(),tags:[],categories:En}},jL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.SUM_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:mn(),tags:[],categories:En}},qL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:In,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Bs(),tags:[],categories:Ju}},KL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Bs(),tags:[],categories:Ju}},XL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:mn(),tags:[],categories:En}},ZL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:mn(),tags:[],categories:En}},QL={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:f.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Bs(),tags:[],categories:Ju}};f.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,mn();const JL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:mn(),tags:[],categories:En}},ey={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:mn(),tags:[],categories:En}};f.AQUARIUM_CAGE,z.CAGE_TOOLS,mn();const ty={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:mn(),tags:[],categories:En}},ny={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:mn(),tags:[],categories:En}},ry={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:mn(),tags:[],categories:En}},oy={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:In,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:mn(),tags:[],categories:En}};var Xi=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Xi||{});const iy=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),ay=()=>({type:"CLEAR"}),sy=t=>({type:"DRAG",payload:t}),lu=t=>({type:"SET",payload:t}),ly=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),ed=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),fr=(t,e,n)=>{const r=[...t];return Es(r),{cells:r,lastCell:e,mode:n}};function cy(t,e,n){if(e===null)return ed();if(n==="RESETTING")return fr([e],e,"SELECTING");const r=t.cells.findIndex(o=>je(e,o));if(n==="SELECTING")return r!==-1?t:fr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),fr(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return fr([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),fr(o,null,"DESELECTING")}return t}function uy(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>je(e,r));if(t.mode==="SELECTING")return n!==-1?t:fr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),fr(r,null,t.mode)}return t}function dy(t,e){return{...t,cells:e}}function fy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>je(e,o))!==-1?fr([...t.cells],e,"SELECTING"):fr([...t.cells,e],e,"SELECTING"):fr([e],e,t.mode)}function zh(t,e){switch(e==null?void 0:e.type){case"CLEAR":return ed();case"SET":return dy(t,e.payload);case"CLICK":return cy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return uy(t,e.payload);case"ARROW_KEY":return fy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Ag(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Vh(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function cu(t){const e=new Option().style;return e.color=t,e.color!==""}function Pc(t){return Vh(t)||cu(t)?t:cu(`#${t}`)?`#${t}`:void 0}function bs(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function jh(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function qh(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}var Tn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Tn||{});const _y=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Kh=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),gy=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),hy=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),vy=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),py=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),my=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),Cy=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Bc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),Ey=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Wc=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Ys=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function Iy(t,e,n){if(e===f.DIGIT){const r=t.map(s=>s.value),o=_y(t,n),a=Kh(t,r);return[o,a]}if(e===f.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),a=gy(t,n),s=hy(t,r,o);return[a,s]}if(e===f.REGIONS){const r=t.map(s=>s.region),o=vy(t,n),a=py(t,r);return[o,a]}if(e===f.FOG){const r=t.map(c=>c.fog),a=my(t,n===1),s=Cy(t,r);return[a,s]}if(e===f.HIGHLIGHTS&&n!==null){const r=Wc(t,n),o=Wc(t,n);return[r,o]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),o=Wc(t,n),a=Ys(t,r);return[o,a]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Bc(t,n,e),o=Bc(t,n,e);return[r,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const o=Bc(t,n,e),a=Ey(t,r,e);return[o,a]}}function zi(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),an.update(o=>o)}function ni(t){switch(t.type){case Tn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;zi(e,f.DIGIT,n,!0);break}case Tn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;zi(e,f.GIVEN,n,!0);break}case Tn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;zi(e,f.REGIONS,n,!0);break}case Tn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;zi(e,f.HIGHLIGHTS,n,!0);break}case Tn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;zi(e,r,n,!0);break}case Tn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];an.update(r=>r);break}case Tn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];an.update(o=>o);break}case Tn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];an.update(r=>r);break}case Tn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];an.update(r=>r);break}case Tn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===f.CENTER_PM?e[o].centerMarks=r[o]:n===f.CORNER_PM&&(e[o].cornerMarks=r[o]);an.update(o=>o);break}case Tn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),an.update(r=>r);break}case Tn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];an.update(r=>r);break}}}function by(t,e){return{execute:()=>{ni(t)},unExecute:()=>{ni(e)}}}const bo=$t(ed());function Xo(t){t&&bo.update(e=>zh(e,t))}function xg(t){t&&bo.update(e=>zh(e,t))}function wy(t,e){return{execute:()=>{xg(t)},unExecute:()=>{xg(e)}}}const qo=new si;function Sg(t,e){return t.shiftKey?Xi.SELECTING:t.ctrlKey||t.metaKey||e?Xi.DYNAMIC:t.altKey?Xi.DESELECTING:Xi.RESETTING}function sa(t,e,n,r,o=!1){switch(e){case f.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case f.DIGIT:return t.filter(s=>!(o&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case f.CORNER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case f.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function Oy(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=o=>o===f.CORNER_PM||o===f.CENTER_PM||o===f.DIGIT;for(const o of n){const a=sa(t,o,"any",-1,r(o));if(a.length)return{tool:o,cells:a}}return{tool:e,cells:[]}}function ta(t,e,n,r){const o=Iy(e,n,r);if(o){const a=o[0],s=o[1],c=by(a,s),u=lu(t),g=[wy(u,u),c];gL(g)}}function Ly(t,e,n){const r=f.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const o=sa(e,r,"any",-1,!1);if(o.length)return ta(n,o,r,t),!0}else{const o=sa(e,r,"different",t,!0);if(o.length)return ta(n,o,r,t),!0}return!1}function no(t,e,n){console.log("getSelectionInputHandler");const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};qo.onTap=m=>{if(m.tapCount!==2)return;const I=qt(m.cell,o)?m.cell:null;if(!I)return;const O=vL(I,e,n),b=lu(O);Xo(b)},qo.onDragStart=m=>{const C=qt(m.cell,o),I=st(du),O=Sg(m.event,I),b=C?m.cell:null,A=iy(b,O);Xo(A)},qo.onDrag=m=>{const I=qt(m.cell,o)?m.cell:null,O=sy(I);Xo(O)};function a(m){if(!NL(m))return!1;const C=e.getAllCells().map(O=>({r:O.r,c:O.c})),I=lu(C);return Xo(I),!0}function s(m){if(!GL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=FL(m);return Ar(C),!0}return m.type==="keyup"?(BD(),!0):!1}function c(m){if(!kL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Ar(I),fu(I),!0}else{const C=ML(m.code);return Ar(C),fu(C),!0}}function u(m){if(!UL(m))return!1;const C=st(bo).lastCell;let I=null;if(C!==null){const[A,T]=HL(m),[M,k]=[Ag(C.r+T,0,o.nRows-1),Ag(C.c+A,0,o.nCols-1)];I={r:M,c:k}}else I={r:0,c:0};const O=Sg(m,!1),b=ly(I,O);return Xo(b),!0}function _(m){const C=RL(m);if(C===void 0)return!1;const I=st(bo).cells,O=[];if(I.forEach(b=>{const A=e.getCell(b.r,b.c);A&&O.push(A)}),n===f.FOG)return Ly(C,O,I);if(C===null){const{tool:b,cells:A}=Oy(O,n);if(A.length)return ta(I,A,b,C),!0}else{let b=sa(O,n,"different",C,!0);if(b.length)return ta(I,b,n,C),!0;if(b=sa(O,n,"equal",C,!0),b.length)return ta(I,b,n,C),!0}return!1}function g(m){return m.repeat?!1:_(m.key)}const h=Mt.throttle(m=>{qo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&qo.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){qo.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||g(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function Zo(t,e){return je(t.p1,e.p1)&&je(t.p2,e.p2)||je(t.p1,e.p2)&&je(t.p2,e.p1)}function yy(t,e){return je(t.p1,e.p2)&&je(t.p2,e.p1)}function Xh(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!je(t,e)}class zs{constructor(){ge(this,"edgeMarkers",[]);ge(this,"cellMarkers",[]);ge(this,"lineMarkers",[]);ge(this,"draftLine",[]);ge(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>je(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>je(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>je(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>je(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>je(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>je(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>je(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>je(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>je(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>je(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Zo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>Zo(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&yy(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Xh(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>Zo(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(a=>Zo(a,r));if(o!==-1){const a=this.lineMarkers.splice(o,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new zs;return Object.assign(e,this),e}}class Ay{constructor(){ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"onTap",null);ge(this,"_prevType",null);ge(this,"_isDown",!1);ge(this,"_isTap",!1);ge(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Mn(e,n);if(!r)return;const o=Hc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._prevType=o.type,this._prevCoords=o.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=Hc(r,!1);if(!o||this._prevCoords&&je(this._prevCoords,o.target))return;this._isTap=!1;const a={coords:o.target,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&Xh(this._prevCoords,o.target)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=o.type,this._prevCoords=o.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Mn(e,n);if(!r)return;const o=Hc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._isTap&&this._prevCoords&&je(this._prevCoords,o.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}const Ng=t=>({type:"ADD_EDGE_MARKER",payload:t}),Dg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),_s=t=>({type:"ADD_CELL_MARKER",payload:t}),Tg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),xy=t=>({type:"DRAG",payload:t}),ws=t=>({type:"ADD_LINE_MARKERS",payload:t}),Rg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),td=()=>({type:"RESET"});function Sy(t,e){switch(e.type){case"RESET":return new zs;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}const Os=$t(new zs);function Xr(t){Os.update(e=>Sy(e,t))}const Ls=$t(1);function vo(t,e){return{execute:()=>{Xr(t)},unExecute:()=>{Xr(e)}}}function Ny(t,e){console.log("getPenToolInputHandler");const n={nRows:e.nRows,nCols:e.nCols},r=new Ay;return r.onTap=a=>{const s=a.coords,c=st(Ls),u=st(Os);if(a.type==="cell center"){if(!nO(s,n))return;const g=u.getCellMarker(s);if(g)if(g.marker==="X"){const h={...s,colorId:c,marker:"O"},p=_s(h),m=_s(g),C=vo(p,m);on(C)}else{const h=Tg(s),p=_s(g),m=vo(h,p);on(m)}else{const h={...s,colorId:c,marker:"X"},p=_s(h),m=Tg(s),C=vo(p,m);on(C)}}else if(a.type==="edge"){const _=u.getEdgeMarker(s);if(_){const g=Dg(s),h=Ng(_),p=vo(g,h);on(p)}else{const g={...s,colorId:c},h=Ng(g),p=Dg(s),m=vo(h,p);on(m)}}},r.onDrag=a=>{const s=a.coords,c=st(Ls);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},_=xy(u);Xr(_)}},r.onDragEnd=()=>{const a=st(Os);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>Zo(c,u)));if(s.length){const c=ws(s),u=Rg(s),_=vo(c,u);on(_)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>Zo(c,u)));if(s.length){const c=Rg(s),u=ws(s),_=vo(c,u);on(_)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const Dy={getInputHandler:no,toolId:f.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[R.CELL_INPUT_TOOL]}},Ty={getInputHandler:no,toolId:f.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[R.CELL_INPUT_TOOL]}},Ry={getInputHandler:no,toolId:f.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[R.CELL_INPUT_TOOL]}},ky={getInputHandler:no,toolId:f.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[R.CELL_INPUT_TOOL]}},Gy={getInputHandler:no,toolId:f.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[R.CELL_INPUT_TOOL]}},My={getInputHandler:no,toolId:f.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[R.CELL_INPUT_TOOL]}},Fy={getInputHandler:no,toolId:f.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[R.CELL_INPUT_TOOL]}},$y={getInputHandler:no,toolId:f.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[R.CELL_INPUT_TOOL]}},Uy={getInputHandler:Ny,toolId:f.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var Et=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(Et||{});class Vs{constructor(e){ge(this,"onDragStart",null);ge(this,"target");this.target=e}pointerDown(e,n){const r=Mn(e,n);if(!r)return;const o=ea(r,!1);if(!o)return;const a=Ji(r,!1);if(!a)return;const s=ms(r,!1);if(!s)return;const c=$h(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=o.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<o.dist?u=a.corner:u=o.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?o.dist<c.dist?u=o.edge:u=c.cellCenter:o.dist<a.dist&&o.dist<c.dist?u=o.edge:a.dist<o.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<o.dist&&(_="corner");const g=_==="edge"?2*o.idx:2*a.idx+1,h={event:e,cell:s.cell,edge:o.edge,corner:a.corner,closest:u,edgeIdx:o.idx,cornerIdx:a.idx,direction:g};this.onDragStart&&this.onDragStart(h)}}function Hy(t,e,n=""){return{toolId:t,cell:e,value:n}}function Zh(t,e,n,r){console.log("getCenterCornerOrEdgeToolInputHandler");const o=(r==null?void 0:r.targets)??Et.CLOSEST,a=new Vs(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=st(rt),C=p.cell,I=p.closest;if(console.log(p),!qt(C,s))return;const b=RD(m,n,I);if(b){Io(n,b);return}c=Hy(n,I,""),u=Mt.uniqueId(),Jr(u,c)}function g(p){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!di(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=_a(C,O),Pt(n,I,C))}return a.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&a.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{g(p)},keyUp:()=>{}}}f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,B.CIRCLE,Bh(),R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT;const Py={getInputHandler(t,e,n){return Zh(t,e,n,{targets:Et.CLOSEST,valueUpdater:(r,o)=>to(r,o,()=>!0),defaultValue:""})},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Bh(),tags:[],categories:[R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT]}};function By(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function Wy(t,e){const n=Lh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function Yy(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function zy(t){for(let e=0;;e++){const n=Yy(e);if(!t.has(n))return n}}function Vy(t,e,n){const r=new si,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,_="cells2",g;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(g||(g={}));let h=0;function p(C){const I=st(rt),O=C.cell;if(!qt(C.cell,o))return;const A=kD(I,n,O);if(h===0&&(A?(c=A[0],a=A[1],h=2,u=O,_=a.cells2.some(M=>je(M,O))?"cells2":"cells"):h=1),h===1&&c===null){c=Mt.uniqueId();const T=GD(I,n),M=zy(T);a=By(n,[O],M),Jr(c,a);return}else if(h===1&&c&&a){a=Wy(a,O),Pt(n,c,a);return}else if(h===2&&c&&a&&u){const T={r:O.r-u.r,c:O.c-u.c},k=(_==="cells2"?a.cells2:a.cells).map(W=>({r:W.r+T.r,c:W.c+T.c}));if(!k.every(W=>qt(W,o)))return;_==="cells"?a={...a,cells:k}:a={...a,cells2:k},u=O,Pt(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,h=0,u=null,p(C)},r.onDrag=C=>{p(C)},r.onDragEnd=()=>{c&&a&&(h===1?eo(c,a,n):h===2&&su(c,s,a,n),s=a)},r.onTap=()=>{c&&h!==1&&(Io(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const jy={getInputHandler(t,e,n){return Vy(t,e,n)},toolId:f.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[R.CLONE_CONSTRAINT,R.LOCAL_CONSTRAINT]}};function Qh(t,e,n){return{toolId:t,cells:e,value:n}}function qy(t,e){const n=fa(e,"cells"),r=No(e);return Qh(t,n,r)}class Ky{constructor(){ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"_prevCellCorner",null);ge(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const o=Ji(r);if(!o)return;this._prevCellCorner=o.corner;const a={event:e,cellCorner:o.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=Ji(r);if(!o||this._prevCellCorner&&je(o.corner,this._prevCellCorner))return;const a={event:e,cellCorner:o.corner};this._prevCellCorner=o.corner,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellCorner=null,this._isDown=!1);const r=Mn(e,n);!r||Ji(r)}}function ro(t,e,n,r){console.log("getCornerToolInputHandler");const o=new Ky,a={nRows:e.nRows,nCols:e.nCols};let s;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(h){const p=st(rt),m=h.cellCorner,C=iO(m);if(!C.every(b=>qt(b,a)))return;let O=null;if(c===0&&(O=SD(p,n,m),c=O?2:1),O&&c===2){const b=O[0];Lo(b,O[1],n);return}else if(c===1){const b=Qh(n,C,r==null?void 0:r.defaultValue),A=Mt.uniqueId();eo(A,b,n,!0)}}function _(h){const p=st(hr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!di(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=_a(m,I),Pt(n,C,m))}return o.onDragStart=h=>{c=0,u(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:h=>{_(h)},keyUp:()=>{}}}function js(t,e=3){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function qs(t,e,n){return to(t,e,n)}function Xy(t,e){function n(r){return!0}return to(t,e,n)}const Zy={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>Xy(r,o),defaultValue:""})},toolId:f.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:IL(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL]}},Qy={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>qs(r,o,js),defaultValue:""})},toolId:f.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:ui(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL]}},Jy={getInputHandler(t,e,n){return ro(t,e,n)},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:ui(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}},eA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>qs(r,o,js),defaultValue:""})},toolId:f.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:ui(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,B.CIRCLE,ui(),R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL;const tA={getInputHandler(t,e,n){return ro(t,e,n,{defaultValue:"X"})},toolId:f.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:ui(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}},nA={getInputHandler(t,e,n){return ro(t,e,n,{defaultValue:""})},toolId:f.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:ui(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}};function Jh(t,e,n){return{toolId:t,cells:e,value:n}}function rA(t,e){const n=fa(e,"cells"),r=No(e);return Jh(t,n,r)}function ev(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>je(a,e)&&s>=r)}function oA(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:Fs(r[o-1],e)))return t;const s=ev(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Ae(t,e,n,r){console.log("getLineToolInputHandler");const o=new si,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(h){if(!u||!c)throw"UNREACHABLE";const p=h.cell;qt(h.cell,a)&&(c=oA(c,p,s),Pt(n,u,c))}return o.onDragStart=h=>{u=Mt.uniqueId(),c=Jh(n,[],r==null?void 0:r.defaultValue),Jr(u,c),_(h)},o.onDrag=h=>{_(h)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?Io(n,u):u&&c&&eo(u,c,n,!1),u=null},o.onTap=h=>{const p=h.cell,m=st(rt),C=ND(m,n,p);if(C){const[I,O]=C;Lo(I,O,n)}},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}function tv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function iA(t,e){const n=Ks(e),r=No(e);return tv(t,n,r)}function nv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function aA(t,e){const n=Ks(e),r=av(e);return nv(t,n,r)}function rv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function sA(t,e){const n=Ks(e),r=mD(e),o=rv(t,n,Pe.N);return o.directions=r,o}function Je(t,e,n,r,o){const a=new si,s={nRows:e.nRows,nCols:e.nCols};let c;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(p){const m=st(rt),C=p.cell;if(!qt(p.cell,s))return;const O=rd(m,n,C);if(u===0&&(u=O?2:1),O&&u===2){const[b,A]=O;Lo(b,A,n)}else if(u===1){const b=tv(n,C,o==null?void 0:o.defaultValue),A=Mt.uniqueId();eo(A,b,n,!0)}}a.onDragStart=p=>{u=0,_(p)},a.onDrag=p=>{_(p)};function g(p){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!di(p)||!(o!=null&&o.valueUpdater))return;const O=o.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=_a(C,O),Pt(n,I,C))}return{pointerDown:p=>{p.button===0&&a.pointerDown(p,t)},pointerMove:p=>{a.pointerMove(p,t)},pointerUp:p=>{a.pointerUp(p,t)},keyDown:p=>{g(p)},keyUp:()=>{}}}class lA{constructor(){ge(this,"onDragStart",null);ge(this,"onDrag",null);ge(this,"onDragEnd",null);ge(this,"_prevCellEdge",null);ge(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const o=ea(r,!0,.35);if(!o)return;this._prevCellEdge=o.edge;const a={event:e,edge:o.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=ea(r,!0,.35);if(!o||this._prevCellEdge&&je(o.edge,this._prevCellEdge))return;const a={event:e,edge:o.edge};this._prevCellEdge=o.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Mn(e,n);!r||ea(r,!0,.35)}}function ov(t,e,n){return{toolId:t,cells:e,value:n}}function cA(t,e){const n=fa(e,"cells"),r=No(e);return ov(t,n,r)}function $n(t,e,n,r){console.log("getEdgeToolInputHandler");const o=new lA,a={nRows:e.nRows,nCols:e.nCols};let s;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(h){const p=st(rt),m=h.edge,C=cO(m);if(!C.every(b=>qt(b,a)))return;let O=null;if(c===0&&(O=xD(p,n,C),c=O?2:1),O&&c===2){const b=O[0];Lo(b,O[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",A=ov(n,C,b),T=Mt.uniqueId();eo(T,A,n,!0)}}function _(h){const p=st(hr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!di(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=_a(m,I),Pt(n,C,m))}return o.onDragStart=h=>{c=0,u(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:h=>{_(h)},keyUp:()=>{}}}function nd(t,e,n,r=Et.CORNER_OR_EDGE){console.log("getSingleCellArrowToolInputHandler");const o=[Pe.N,Pe.NE,Pe.E,Pe.SE,Pe.S,Pe.SW,Pe.W,Pe.NW],a=new Vs(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let g=0;function h(C){const I=st(rt),O=C.cell;if(console.log(C),!qt(C.cell,s))return;C.event.altKey&&(g=2);const A=rd(I,n,O),T=ju(C.direction);if(A){[u,c]=A,c.direction===T||g===2?Lo(u,c,n):(c={...c,direction:T},Pt(n,u,c));return}else g!==2&&(c=nv(n,O,T),u=Mt.uniqueId(),eo(u,c,n,!0))}function p(C){if(!c||!u||!DL(C))return;const O=(o.indexOf(c.direction)+1)%o.length;c={...c,direction:o[O]},Pt(n,u,c)}return a.onDragStart=C=>{g=0,h(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{p(C)},keyUp:()=>{}}}function uA(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function Sr(t,e,n,r=Et.CORNER_OR_EDGE){console.log("getSingleCellMultiArrowToolInputHandler");const o=new Vs(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function g(p){const m=st(rt),C=p.cell;if(console.log(p),!qt(p.cell,a))return;p.event.altKey&&(_=2);const O=ju(p.direction),b=rd(m,n,C);if(b){if(c=b[0],s=b[1],_===2)Io(n,b[0]);else{const A=uA(s.directions,O);A.length?(s={...s,directions:A},Pt(n,c,s)):Io(n,c)}return}else _!==2&&(s=rv(n,C,O),c=Mt.uniqueId(),Jr(c,s))}return o.onDragStart=p=>{_=0,g(p)},{pointerDown:p=>{p.button===0&&o.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const dA=[R.EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.EDGE_TOOL],ir=[R.EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.EDGE_TOOL],gr=.15,Ao=.02;function fA(t,e=1){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function fi(t,e=3){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function _A(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function xo(t,e,n){return to(t,e,n)}function gA(t,e){return t===void 0?"V":_A(e)?e.toUpperCase():t}function hA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function vA(t,e){return t===void 0?"<":hA(e)?e:t}const pA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fA)})},toolId:f.RATIO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:ir}},mA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fi)})},toolId:f.DIFFERENCE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:ir}},CA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fi)})},toolId:f.EDGE_SUM,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:ir}},EA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:gA,defaultValue:"V"})},toolId:f.XV,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:ir}},IA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:vA,defaultValue:"<"})},toolId:f.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:ir}},bA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fi)})},toolId:f.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:ir}},wA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fi)})},toolId:f.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:ir}},OA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fi)})},toolId:f.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:ir}},LA={getInputHandler(t,e,n){return $n(t,e,n)},toolId:f.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:ir}},yA={getInputHandler(t,e,n){return $n(t,e,n)},toolId:f.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:Ao,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:ir}},AA={getInputHandler(t,e,n){return $n(t,e,n)},toolId:f.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:ir}},xA={getInputHandler(t,e,n){return $n(t,e,n)},toolId:f.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:B.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:dA}};function iv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function SA(t,e){const n=Ks(e),r=av(e),o=No(e);return iv(t,n,r,o)}function Gt(t,e,n,r){console.log("getOutsideEdgeToolInputHandler");const o=(r==null?void 0:r.cornerOrEdge)??Et.CORNER_OR_EDGE,a=new Vs(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=st(rt),C=p.cell,I=p.direction,O=ju(I);if(qt(C,s))return;const A=Oh(C,O);if(!qt(A,s))return;const M=TD(m,n,C,O);if(M){Io(n,M);return}c=iv(n,C,O,""),u=Mt.uniqueId(),Jr(u,c)}function g(p){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!di(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=_a(C,O),Pt(n,I,C))}return a.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&a.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{g(p)},keyUp:()=>{}}}const _i=[R.OUTSIDE_CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_CORNER_TOOL,R.OUTSIDE_DIRECTION_TOOL];function gi(t,e=5){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function So(t,e,n){return to(t,e,n)}const hi={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},NA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,gi),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:hi,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:ci(),tags:[],categories:_i}},DA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,gi),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:hi,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:ci(),tags:[],categories:_i}},TA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,gi),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:hi,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:ci(),tags:[],categories:_i}},RA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,gi),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:hi,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:ci(),tags:[],categories:_i}},kA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,gi),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:hi,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:ci(),tags:[],categories:_i}},GA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,gi),defaultValue:"",cornerOrEdge:Et.CORNER})},toolId:f.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:hi,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:ci(),tags:[],categories:_i}},bn=[R.OUTSIDE_EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_EDGE_TOOL,R.OUTSIDE_DIRECTION_TOOL];function dn(t,e=5){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function wn(t,e,n){return to(t,e,n)}const On={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},MA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:Cn(),tags:[],categories:bn}},FA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.X_SUM,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:Cn(),tags:[],categories:bn}},$A={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:Cn(),tags:[],categories:bn}},UA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:Cn(),tags:[],categories:bn}},HA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:Cn(),tags:[],categories:bn}},PA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:Cn(),tags:[],categories:bn}},BA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:Cn(),tags:[],categories:bn}},WA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:Cn(),tags:[],categories:bn}},YA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.X_INDEX,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:Cn(),tags:[],categories:bn}},zA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:Cn(),tags:[],categories:bn}};f.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,Cn();const VA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.EDGE})},toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:Cn(),tags:[],categories:bn}},jA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.BOTH})},toolId:f.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:Cn(),tags:[],categories:bn}},qA={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>wn(r,o,dn),defaultValue:"",cornerOrEdge:Et.BOTH})},toolId:f.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:On,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:Cn(),tags:[],categories:bn}},KA={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},XA={getInputHandler(t,e,n){return nd(t,e,n)},toolId:f.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},ZA={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},QA={getInputHandler(t,e,n){return $n(t,e,n,{valueUpdater:(r,o)=>xo(r,o,fi)})},toolId:f.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},JA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>qs(r,o,js),defaultValue:""})},toolId:f.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},ex={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},tx={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},nx={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},rx={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>un(r,o,cn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:f.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},ox={getInputHandler(t,e,n){return Ps(t,e,n)},toolId:f.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.LOCAL_CONSTRAINT]}},ix={getInputHandler(t,e,n){return Gt(t,e,n,{valueUpdater:(r,o)=>So(r,o,dn),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE})},toolId:f.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_DIRECTION_TOOL]}},vi=[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT,R.DIAGONAL_CONSTRAINT],ax={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:f.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:f.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:f.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:f.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:f.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:f.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},_x={toolId:f.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:f.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},hx={toolId:f.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},vx={toolId:f.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:vi}},px={toolId:f.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:vi}},mx={toolId:f.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:vi}},Cx={toolId:f.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:vi}},Ex={toolId:f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:vi}},Ix={toolId:f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:vi}},bx={toolId:f.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},wx={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},Ox={toolId:f.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Lx={toolId:f.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},yx={toolId:f.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Ax={toolId:f.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},xx={toolId:f.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Sx={toolId:f.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Nx={toolId:f.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Dx={toolId:f.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Tx={toolId:f.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Rx={toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},kx={toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Gx={toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Mx={toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Fx={toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},$x={toolId:f.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:f.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:f.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:f.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:f.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:f.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:f.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:f.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:f.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},eS={toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},tS={toolId:f.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},nS={toolId:f.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},rS={toolId:f.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},oS={toolId:f.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},iS={toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},aS={toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},sS={toolId:f.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},lS={toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},cS={toolId:f.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},uS={toolId:f.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Me=[R.LINE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.LINE_TOOL],Nr=[R.LINE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.DOUBLE_ENDED_LINE_CONSTRAINT,R.LINE_TOOL],dS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers along a thermometer must increase from the bulb end.",usage:Se(),tags:[],categories:Me}},fS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced.",usage:Se(),tags:[],categories:Me}},_S={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s).",usage:Se(),tags:[],categories:Me}},gS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end.",usage:Se(),tags:[],categories:Me}},hS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.PALINDROME,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Se(),tags:[],categories:Me}},vS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Se(),tags:[],categories:Me}},pS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Se(),tags:[],categories:Me}},mS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Se(),tags:[],categories:Me}},CS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Me}},ES={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Se(),tags:[],categories:Me}},IS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Se(),tags:[],categories:Me}},bS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:f.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Se(),tags:[],categories:Me}},wS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Se(),tags:[],categories:Me}},OS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Se(),tags:[],categories:Me}},LS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Se(),tags:[],categories:Me}},yS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Se(),tags:[],categories:Me}},AS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Se(),tags:[],categories:Me}},xS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Se(),tags:[],categories:Me}},SS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Se(),tags:[],categories:Me}},NS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:f.SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Se(),tags:[],categories:Me}},DS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Se(),tags:[],categories:Me}},TS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Se(),tags:[],categories:Me}},RS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Se(),tags:[],categories:Me}},kS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Se(),tags:[],categories:Me}},GS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:f.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Se(),tags:[],categories:Me}},MS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Se(),tags:[],categories:Me}},FS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Se(),tags:[],categories:Me}},$S={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Se(),tags:[],categories:Me}},US={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Se(),tags:[],categories:Me}},HS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Se(),tags:[],categories:Me}},PS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Se(),tags:[],categories:Me}},BS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Se(),tags:[],categories:Me}},WS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Se(),tags:[],categories:Me}},YS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Se(),tags:[],categories:Me}},zS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.XV_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Se(),tags:[],categories:Me}},VS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Se(),tags:[],categories:Me}},jS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:f.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Se(),tags:[],categories:Me}},qS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Se(),tags:[],categories:Me}};f.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,B.LINE,Se();const KS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:f.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Se(),tags:[],categories:Me}},XS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Se(),tags:[],categories:Me}},ZS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Se(),tags:[],categories:Me}},QS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Se(),tags:[],categories:Me}},JS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Se(),tags:[],categories:Me}},eN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:f.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to 10. Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Se(),tags:[],categories:Me}};f.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,B.THERMO_WITH_CIRCLE,Se();const tN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Se(),tags:[],categories:Me}},nN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Se(),tags:[],categories:Me}},rN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Se(),tags:[],categories:Me}},oN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Se(),tags:[],categories:Me}},iN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Se(),tags:[],categories:Me}},aN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Se(),tags:[],categories:Me}},sN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Se(),tags:[],categories:Nr}},lN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:f.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Se(),tags:[],categories:Nr}},cN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Se(),tags:[],categories:Nr}},uN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Se(),tags:[],categories:Nr}},dN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Se(),categories:Nr}},fN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Se(),tags:[],categories:Nr}},_N={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Se(),tags:[],categories:Nr}},gN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:f.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Se(),tags:[],categories:Me}},hN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Se(),tags:[],categories:Nr}},vN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Se(),tags:[],categories:Nr}},dt=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_SHAPE_TOOL],pi=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_COLOR_TOOL];function mi(t,e=3){return yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ci(t,e,n){return to(t,e,n)}const pN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:dt}},mN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:dt}},CN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},EN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}};f.PRIME_CELL,z.CELL_COLOR_TOOL;const IN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:dt}},bN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:dt}},wN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:dt}},ON={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:dt}},LN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:dt}},yN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>Ci(r,o,mi),defaultValue:""})},toolId:f.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:dt}},AN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>Ci(r,o,mi),defaultValue:"9"})},toolId:f.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:dt}},xN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:dt}},SN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:pi}},NN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:pi}},DN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:pi}},TN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:pi}},RN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:pi}},kN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:dt}},GN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:dt}},MN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:dt}},FN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:dt}},$N={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:dt}},UN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:dt}},HN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:dt}},PN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:dt}},BN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:dt}},WN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:dt}},YN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:dt}},zN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:dt}},VN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:dt}},jN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:dt}},qN={getInputHandler(t,e,n){return nd(t,e,n)},toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[R.SINGLE_CELL_ARROW_TOOL,R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},KN={getInputHandler(t,e,n){return nd(t,e,n)},toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[R.SINGLE_CELL_ARROW_TOOL,R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},XN={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>Ci(r,o,mi),defaultValue:""})},toolId:f.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:dt}},ZN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:dt}},QN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:dt}},JN={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:dt}},eD={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>Ci(r,o,mi),defaultValue:""})},toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:dt}},tD={getInputHandler(t,e,n){return Je(t,e,n)},toolId:f.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:dt}},nD={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>Ci(r,o,mi),defaultValue:""})},toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:dt}},rD={getInputHandler(t,e,n){return Je(t,e,n,void 0,{valueUpdater:(r,o)=>Ci(r,o,mi),defaultValue:""})},toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:dt}},oo=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_MULTIARROW_TOOL],Ei={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},oD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:oo}},iD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:oo}},aD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:oo}},sD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:oo}},lD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:oo}},cD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:oo}},uD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:oo}},dD={getInputHandler(t,e,n){return Sr(t,e,n)},toolId:f.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:oo}},fD={toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}},_D={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;const gD={toolId:f.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}},hD={toolId:f.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;const vD={toolId:f.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}},kt={[f.GIVEN]:Dy,[f.DIGIT]:Ty,[f.REGIONS]:Ry,[f.OUTSIDE]:Fy,[f.CORNER_PM]:ky,[f.CENTER_PM]:Gy,[f.HIGHLIGHTS]:My,[f.FOG]:$y,[f.PEN_TOOL]:Uy,[f.SUDOKU_RULES_DO_NOT_APPLY]:ax,[f.HEXED_SUDOKU]:sx,[f.FILLOMINO]:lx,[f.ANTIKNIGHT]:cx,[f.ANTIKING]:dx,[f.ANTI_GIRAFFE]:ux,[f.DISJOINT_GROUPS]:fx,[f.TANGO]:_x,[f.NONCONSECUTIVE]:gx,[f.NONRATIO]:hx,[f.GLOBAL_INDEXING_COLUMN]:bx,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:wx,[f.NEGATIVE_DIAGONAL]:vx,[f.POSITIVE_DIAGONAL]:px,[f.NEGATIVE_ANTIDIAGONAL]:mx,[f.POSITIVE_ANTIDIAGONAL]:Cx,[f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:Ex,[f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:Ix,[f.ALL_RATIOS_GIVEN]:Ox,[f.ALL_DIFFERENCES_GIVEN]:Lx,[f.ALL_X_GIVEN]:yx,[f.ALL_V_GIVEN]:Ax,[f.ALL_XV_GIVEN]:xx,[f.ALL_RADARS_GIVEN]:Sx,[f.ALL_XY_DIFFERENCES_GIVEN]:Nx,[f.ALL_INDEXING_COLUMN_GIVEN]:Dx,[f.ALL_INDEXING_ROW_GIVEN]:Tx,[f.ALL_YIN_YANG_KROPKI_GIVEN]:Rx,[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:kx,[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Mx,[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Fx,[f.CAVE_CELLS_ARE_ODD]:nS,[f.CAVE_WALLS_ARE_EVEN]:tS,[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:Jx,[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:eS,[f.DOUBLERS]:gD,[f.NEGATORS]:hD,[f.NEXUS]:vD,[f.UNKNOWN_REGIONS]:$x,[f.YIN_YANG]:Ux,[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Hx,[f.NURIMISAKI]:Px,[f.TWO_CONTIGUOUS_REGIONS]:Bx,[f.SASHIGANE]:Wx,[f.GOLDILOCKS_ZONE]:Yx,[f.CELL_CENTER_LOOP_NO_TOUCHING]:zx,[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Vx,[f.NOT_LOOP_SIZED_REGIONS]:Kx,[f.MODULAR_LOOP]:Xx,[f.CAVE]:Zx,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Qx,[f.NURIMISAKI_PATH_GERMAN_WHISPERS]:Gx,[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:jx,[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:qx,[f.GALAXIES]:oS,[f.TWO_SYMMETRIC_GALAXIES]:sS,[f.EVERY_CELL_BELONGS_TO_A_GALAXY]:iS,[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:aS,[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:lS,[f.PENTOMINO_TILLING]:cS,[f.TILLING_NO_EMPTY_CELLS]:uS,[f.ODD]:pN,[f.EVEN]:mN,[f.MINIMUM]:CN,[f.MAXIMUM]:EN,[f.ODD_MINESWEEPER]:IN,[f.EVEN_MINESWEEPER]:bN,[f.WATCHTOWER]:ON,[f.NOT_WATCHTOWER]:LN,[f.FARSIGHT]:yN,[f.RADAR]:AN,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:wN,[f.ORTHOGONAL_SUM]:xN,[f.DIAGONALLY_ADJACENT_SUM]:kN,[f.INDEXING_COLUMN]:SN,[f.INDEXING_ROW]:NN,[f.LOW_DIGIT]:DN,[f.HIGH_DIGIT]:TN,[f.FRIENDLY_CELL]:RN,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:GN,[f.SANDWICH_ROW_COL_COUNT]:MN,[f.COUNTING_CIRCLES]:FN,[f.UNIQUE_CELLS]:$N,[f.YIN_YANG_MINESWEEPER]:UN,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:HN,[f.YIN_YANG_SEEN_SHADED_CELLS]:PN,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:BN,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:WN,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:YN,[f.SEEN_REGION_BORDERS_COUNT]:zN,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:VN,[f.SASHIGANE_BEND_REGION_COUNT]:jN,[f.SASHIGANE_REGION_SUM]:XN,[f.CELL_ON_THE_LOOP]:ZN,[f.CELL_NOT_ON_THE_LOOP]:QN,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:JN,[f.CAVE_CLUE]:tD,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:eD,[f.YIN_YANG_FILLOMINO_PARITY]:rS,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:nD,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:rD,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:qN,[f.THERMO_SIGHTLINE_LOOP_ARROW]:KN,[f.HOT_ARROWS]:dD,[f.COLD_ARROWS]:uD,[f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:cD,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:sD,[f.YIN_YANG_COUNT_SHADED_CELLS]:lD,[f.LOOP_CELL_COUNT_ARROWS]:aD,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:iD,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:oD,[f.DIFFERENCE]:mA,[f.RATIO]:pA,[f.XV]:EA,[f.EDGE_INEQUALITY]:IA,[f.EDGE_SUM]:CA,[f.EDGE_PRODUCT]:bA,[f.EDGE_MODULO]:wA,[f.EDGE_FACTOR]:OA,[f.XY_DIFFERENCES]:LA,[f.YIN_YANG_WHITE_KROPKI]:yA,[f.YIN_YANG_KROPKI]:AA,[f.UNKNOWN_REGION_BORDER]:xA,[f.QUADRUPLE]:Zy,[f.CORNER_SUM]:Qy,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Jy,[f.CORNER_EVEN_COUNT]:eA,[f.PRODUCT_SQUARE]:tA,[f.EQUAL_DIAGONAL_DIFFERENCES]:nA,[f.THERMOMETER]:dS,[f.FUZZY_THERMOMETER]:fS,[f.SLOW_THERMOMETER]:_S,[f.ROW_CYCLE_THERMOMETER]:gS,[f.PALINDROME]:hS,[f.RENBAN_LINE]:vS,[f.DOUBLE_RENBAN_LINE]:pS,[f.RENRENBANBAN_LINE]:mS,[f.N_CONSECUTIVE_RENBAN_LINE]:CS,[f.NABNER_LINE]:ES,[f.WHISPERS_LINE]:IS,[f.DUTCH_WHISPERS]:bS,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:wS,[f.RENBAN_OR_WHISPERS_LINE]:OS,[f.RENBAN_OR_NABNER_LINE]:LS,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:yS,[f.INDEX_LINE]:AS,[f.UNIQUE_VALUES_LINE]:xS,[f.REPEATED_DIGITS_LINE]:BS,[f.REGION_SUM_LINE]:SS,[f.SUM_LINE]:NS,[f.XV_LINE]:zS,[f.ROW_SUM_LINE]:VS,[f.AT_LEAST_X_LINE]:jS,[f.SUPERFUZZY_ARROW]:WS,[f.HEADLESS_ARROW]:YS,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:qS,[f.PRODUCT_LINE]:KS,[f.ADJACENT_MULTIPLES_LINE]:XS,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:ZS,[f.LOOK_AND_SAY_LINE]:QS,[f.ARITHMETIC_SEQUENCE_LINE]:DS,[f.ZIPPER_LINE]:JS,[f.SEGMENTED_SUM_LINE]:eN,[f.SAME_PARITY_LINE]:TS,[f.MODULAR_LINE]:RS,[f.UNIMODULAR_LINE]:kS,[f.MODULAR_OR_UNIMODULAR_LINE]:GS,[f.ODD_EVEN_OSCILLATOR_LINE]:MS,[f.HIGH_LOW_OSCILLATOR_LINE]:FS,[f.ENTROPIC_LINE]:$S,[f.ENTROPIC_OR_MODULAR_LINE]:US,[f.INDEXING_COLUMN_IS_X_LINE]:HS,[f.INDEXING_ROW_IS_X_LINE]:PS,[f.YIN_YANG_INDEXING_LINE_COLORING]:iN,[f.YIN_YANG_SHADED_WHISPERS_LINE]:tN,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:nN,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:rN,[f.YIN_YANG_REGION_SUM_LINE]:oN,[f.GOLDILOCKS_ZONE_REGION_SUM]:aN,[f.BETWEEN_LINE]:sN,[f.LOCKOUT_LINE]:lN,[f.PARITY_COUNT_LINE]:uN,[f.TIGHTROPE_LINE]:cN,[f.DOUBLE_ARROW_LINE]:dN,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:fN,[f.SPLIT_PEAS]:_N,[f.DOUBLERS_THERMOMETER]:gN,[f.DOUBLERS_BETWEEN_LINE]:hN,[f.DOUBLERS_DOUBLE_ARROW_LINE]:vN,[f.ARROW]:LL,[f.AVERAGE_ARROW]:yL,[f.KILLER_CAGE]:YL,[f.UNIQUE_DIGITS_CAGE]:zL,[f.INVERTED_KILLER_CAGE]:VL,[f.SUM_CAGE]:jL,[f.SUM_CAGE_LOOK_AND_SAY]:qL,[f.PARITY_BALANCE_CAGE]:KL,[f.DIVISIBLE_KILLER_CAGE]:XL,[f.SPOTLIGHT_CAGE]:ZL,[f.PUTTERIA_CAGE]:QL,[f.MULTISET_CAGE]:JL,[f.VAULTED_CAGE]:ey,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:ty,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:ny,[f.DOUBLERS_KILLER_CAGE]:ry,[f.NEGATORS_KILLER_CAGE]:oy,[f.CLONE_REGION]:jy,[f.SANDWICH_SUM]:MA,[f.X_SUM]:FA,[f.SHORTSIGHTED_X_SUM]:$A,[f.SHIFTED_X_SUM]:UA,[f.BROKEN_X_SUM]:HA,[f.X_SUM_SKYSCRAPERS]:PA,[f.BATTLEFIELD]:BA,[f.SKYSCRAPERS]:WA,[f.X_INDEX]:YA,[f.RISING_STREAK]:zA,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:VA,[f.OUTSIDE_CONSECUTIVE_SUM]:jA,[f.LOOPWICHES]:qA,[f.LITTLE_KILLER_SUM]:NA,[f.LITTLE_KILLER_PRODUCT]:DA,[f.LITTLE_KILLER_LOOK_AND_SAY]:TA,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:kA,[f.X_OMIT_LITTLE_KILLER_SUM]:RA,[f.NEGATORS_LITTLE_KILLER_SUM]:GA,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Py,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:fD,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:_D,[f.COSMETIC_CELL_SHAPE]:KA,[f.COSMETIC_CELL_ARROW]:XA,[f.COSMETIC_CELL_MULTI_ARROW]:ZA,[f.COSMETIC_EDGE]:QA,[f.COSMETIC_CORNER]:JA,[f.COSMETIC_LINE]:ex,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:tx,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:nx,[f.COSMETIC_ARROW]:ox,[f.COSMETIC_CAGE]:rx,[f.COSMETIC_OUTSIDE_DIRECTION]:ix};function Ks(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return qu(e)}function fa(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return qu(o)})}function pD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return qu(a)})})}function No(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function av(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return wh(e)}function mD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return wh(r)})}function CD(t,e){const n=t.shape;return n===void 0?void 0:{...pn(e,kt),...n}}function sv(t,e){return{toolId:t,cells:e,lines:[]}}function ED(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Es(n),{...t,cells:n};const r=n.some(a=>je(a,e)),o=n.some(a=>Fs(a,e));return n.length===1&&!r&&o?(n.push(e),Es(n),{...t,cells:n}):t}function ID(t,e){const n=t.cells.some(u=>je(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return uu(t,e);const o=t.lines[r-1],a=o.length;if(a===0&&!n)return t;if(a===0&&n)return uu(t,e);const s=ev(o,e,!1);return(o.length===0?!0:Fs(o[a-1],e))?s>=0?(o.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),o]}):n?t:(o.push(e),{...t,lines:[...t.lines.slice(0,r-1),o]}):t}function uu(t,e){return t.cells.some(r=>je(r,e))?{...t,lines:[...t.lines,[e]]}:t}function bD(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function wD(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function OD(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function LD(t,e){const n=fa(e,"cells"),r=pD(e),o=sv(t,n);return o.lines=r,o}function yD(t,e=""){return{toolId:t,value:e}}function AD(t,e){const n=No(e);return yD(t,n)}function _a(t,e){return{...t,value:e}}class ga extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const o=this.get(e);o&&(o[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o[n]&&(o[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const a of Object.values(r))o.push(MD(a));o.length&&(e[n]=o)}return e}static fromJson(e){const n=new ga;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Ih(r);if(a===void 0||!Object.keys(kt).includes(a))continue;const s=o;for(const c of s){let u=null;if(bh(a,Ms)?u=iA(a,c):Hu(a)?u=aA(a,c):Pu(a)?u=sA(a,c):Bu(a)?u=cA(a,c):Ch(a)?u=qy(a,c):Wu(a)?u=rA(a,c):Yu(a)?u=LD(a,c):zu(a)?u=WL(a,c):aa(a)?u=SA(a,c):Zw(a)&&(u=AD(a,c)),u!==null){n.addToDict(a);const _=Mt.uniqueId(),g=CD(c,a);u.shape=g,n.addConstraint(a,_,u)}}}return n}}function rd(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(je(a.cell,n))return[s,a]}return null}function xD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(n.every(c=>a.cells.some(u=>je(c,u))))return o}return null}function SD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=a.cells[a.cells.length-1];if(je(n,s))return o}return null}function kg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>je(c,n)))return[o[0],a]}return null}function ND(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].cells.some(c=>je(c,n)))return o;return null}function Gg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>je(c,n)))return[o[0],a]}return null}function DD(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((_,g)=>je(_,n)&&g>0));if(c>=0)return{id:o,arrow:s,matchLineIdx:c}}return null}function TD(t,e,n,r){const o=t.get(e);if(!o)return null;for(const a of Object.entries(o)){const s=a[1],c=a[0];if(je(n,s.cell)&&r===s.direction)return c}return null}function RD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(je(n,a.cell))return s}return null}function kD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>je(c,n))||a.cells2.some(c=>je(c,n)))return[o[0],a]}return null}function GD(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n)){const a=o[1];r.add(a.value)}return r}function MD(t){const e={};if("cells"in t){const n=t.cells.map(r=>us(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>us(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>us(o)));e.lines=n}if("cell"in t){const n=us(t.cell);e.cell=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=pn(t.toolId,kt),r=_O(t.shape,n);r&&(e.shape=r)}return e}const Mg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function FD(t){return t in Mg?Mg[t]:null}function lv(t,e,n){if(n===null)return null;const r=FD(n);if(r===null)return null;const[o,a]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/a)}function Yc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class $D{constructor(e,n){ge(this,"r");ge(this,"c");ge(this,"outside",!1);ge(this,"value",null);ge(this,"given",!1);ge(this,"region",null);ge(this,"centerMarks",[]);ge(this,"cornerMarks",[]);ge(this,"highlights",[]);ge(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Yc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Yc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Yc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==lv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ha{constructor(e,n){ge(this,"nCols");ge(this,"nRows");ge(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const a=[];for(let s=0;s<n;s++){const c=new $D(o,s);if(r){const u=lv(o,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[a,s]=[e.r+o[0],e.c+o[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return jh(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),a=o.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:a,c:s}=Us(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];o.push(_),[c,u]=[c+a,u+s]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new ha(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=o.getCell(a,s);u&&Object.assign(u,c)}return o}}function UD(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols,o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const a=r.toJSON();Object.keys(a).length&&(o.bool_constraints=a);const s=n.toJSON();return Object.keys(s).length&&(o.local_constraints=s),o}function HD(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,o=t.valid_digits,a=t.grid,s=ha.fromJSON(e,n,a),c=t.solution,u=t.local_constraints,_=ga.fromJson(u),g=t.bool_constraints,h=ti.fromJson(g);return{puzzleMeta:r,solution:c,grid:s,valid_digits:o,localConstraints:_,globalConstraints:h}}var Ii=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Ii||{});const ri=$t(),Xs=$t(Ii.SETTING),du=$t(!1),Kt=$t(f.DIGIT),cv=$t(f.DIGIT),od=$t(void 0),sn=$t(new ha(9,9)),an=$t(st(sn).getAllCells()),Dr=$t({}),Tr=$t(new ti),rt=$t(new ga),hr=$t(null),uv=$t(void 0),Zs=$t(void 0);function PD(t){Dr.update(()=>t)}function bi(t){hr.update(()=>t)}function id(t){uv.update(()=>t)}function Ar(t){st(Kt)!==t&&(Kt.update(()=>t),bi(null))}function BD(){const t=st(cv);t&&Ar(t)}function fu(t){cv.update(()=>t)}function WD(t){st(Kt)===t&&Ar(f.DIGIT)}function YD(t){rt.update(e=>(e.removeFromDict(t),e)),id(void 0)}function Pt(t,e,n){rt.update(r=>(r.updateConstraint(t,e,n),r)),bi({id:e,constraint:n})}function zc(t){const e=st(hr);if(t=t?{...t}:void 0,id(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Pt(r,e.id,n)}function zD(t,e){const r=st(rt).get(e);if(!r)return;const o=r[t];o&&bi({id:t,constraint:o})}function VD(t,e){const n=new ha(t,e);sn.update(()=>n),od.update(()=>{}),rt.update(()=>new ga),Tr.update(()=>new ti),Dr.update(()=>({})),ad(void 0),an.update(()=>n.getAllCells())}function jD(t){sn.update(()=>t.grid),Dr.update(()=>t.puzzleMeta),ad(t.solution),od.update(()=>t.valid_digits),rt.update(()=>t.localConstraints),Tr.update(()=>t.globalConstraints),an.update(()=>t.grid.getAllCells())}function dv(){const t=st(sn);t.resetValues(),sn.update(()=>t),an.update(()=>t.getAllCells()),Xr(td())}function ys(){_L(),Xr(td()),Ar(f.DIGIT);const t=ay();Xo(t),id(void 0),bi(null)}const fv=ln([Wt,Kt,Xs],([t,e,n])=>{const r=t.hideFog,o=e;return![f.FOG,f.REGIONS].includes(o)&&!r&&n===Ii.SETTING}),va=ln([sn,Dr,Tr,rt,Zs,od],([t,e,n,r,o,a])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function ad(t){Zs.update(()=>t)}var qD=re('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function KD(t,e){te(e,!1);const n=ze(),r=()=>he(li,"$commandHistoryStore",n),o=()=>he(du,"$selectOnStore",n),a=D(),s=D();function c(){Hh()}function u(){Ph()}function _(){console.log("check")}function g(){ua(du,!o())}F(()=>r(),()=>{S(a,r()._undoStack.length===0)}),F(()=>r(),()=>{S(s,r()._redoStack.length===0)}),ve(),fe();var h=qD(),p=q(h),m=q(p);Vw(m),H(p);var C=U(p,2),I=q(C);Bw(I),H(C);var O=U(C,2);O.disabled=!0;var b=q(O);Hw(b),H(O);var A=U(O,2),T=q(A);Yw(T),H(A),H(h),Z(()=>{p.disabled=v(a),C.disabled=v(s),x(A,"aria-checked",o()),Ot(A,"active",o())}),De("click",p,c),De("click",C,u),De("click",O,_),De("click",A,g),N(t,h),ne()}const _v=ln([ri,sn,Kt],([t,e,n])=>{const r=Kr(n,kt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var XD=re('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),ZD=re('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),QD=re('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),JD=re('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function eT(t,e){te(e,!1);const n=ze(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(Ls,"$penColorStore",n),a=()=>he(_v,"$InputHandlerStore",n),s=D(),c=D(),u=[];let _=$(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let p=D(!1);function m(W){return W?h:g}function C(W){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(W)}function I(W){const K=W.currentTarget;if(!K)return;const oe=K.getAttribute("aria-checked");S(p,oe!=="true")}F(()=>r(),()=>{S(s,r().penToolActive)}),F(()=>r(),()=>{S(c,r().letterToolActive)}),ve(),fe();var O=JD(),b=q(O);{var A=W=>{var K=ye(),oe=ue(K);We(oe,1,()=>g,gt,(de,J)=>{var le=XD(),be=q(le);jt(be);var Ce;ei(2),H(le),Z(()=>{x(le,"data-value",v(J)),Ot(le,"active",o()===v(J)),Ce!==(Ce=v(J))&&(be.value=(be.__value=v(J))==null?"":v(J))}),Gs(u,[],be,()=>(v(J),o()),Ie=>ua(Ls,Ie)),N(de,le)}),N(W,K)},T=W=>{var K=ye(),oe=ue(K);We(oe,1,()=>m(v(p)),gt,(de,J)=>{var le=ZD(),be=q(le),Ce=q(be,!0);H(be),ei(2),H(le),Z(()=>{Iw(le,v(J)),nt(Ce,v(J))}),De("click",le,function(...Ie){var Fe;(Fe=a()&&a().padClick)==null||Fe.apply(this,Ie)}),N(de,le)}),N(W,K)};_e(b,W=>{_()===f.PEN_TOOL&&v(s)?W(A):W(T,!1)})}var M=U(b,2);{var k=W=>{var K=QD();Z(()=>{x(K,"aria-checked",v(p)),Ot(K,"letter-checked",v(p)),Ot(K,"num-checked",!v(p))}),De("click",K,I),N(W,K)};_e(M,W=>{v(c)&&C(_())&&W(k)})}var Y=U(M,2);H(O),Z(()=>{Ot(O,"digit",_()===f.DIGIT),Ot(O,"center",_()===f.CENTER_PM),Ot(O,"corner",_()===f.CORNER_PM),Ot(O,"color",_()===f.HIGHLIGHTS),Ot(O,"pen",_()===f.PEN_TOOL),Ot(Y,"letter-tool",v(c))}),De("click",Y,function(...W){var K;(K=a()&&a().padClick)==null||K.apply(this,W)}),N(t,O),ne()}var tT=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function nT(t){var e=tT();N(t,e)}var rT=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function oT(t){var e=rT();N(t,e)}var iT=re('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Vi(t,e){te(e,!1);const n=[];let r=$(e,"selectedTool",12),o=$(e,"value",8),a=$(e,"title",8,void 0);function s(){fu(o())}fe();var c=iT(),u=q(c);jt(u);var _,g=U(u,2);ut(g,e,"default",{}),H(c),Z(()=>{x(c,"title",a()),Ot(c,"active",o()===r()),_!==(_=o())&&(u.value=(u.__value=o())==null?"":o())}),Gs(n,[],u,()=>(o(),r()),r),De("change",u,s),N(t,c),ne()}var aT=re('<span aria-hidden="true">1</span>'),sT=re('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),lT=re('<span aria-hidden="true" style="font-size: 50%">123</span>'),cT=re('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),uT=re('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),dT=re('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function fT(t,e){te(e,!1);const n=ze(),r=()=>he(Wt,"$settingsStore",n);let o=$(e,"selectedTool",12);fe();var a=dT(),s=q(a);Vi(s,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=aT();N(p,C)},$$slots:{default:!0},$$legacy:!0});var c=U(s,2);Vi(c,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=sT();N(p,C)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);Vi(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=lT();N(p,C)},$$slots:{default:!0},$$legacy:!0});var _=U(u,2);Vi(_,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(p){o(p)},children:(p,m)=>{var C=cT(),I=q(C);nT(I),H(C),N(p,C)},$$slots:{default:!0},$$legacy:!0});var g=U(_,2);{var h=p=>{Vi(p,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,C)=>{var I=uT(),O=q(I);oT(O),H(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};_e(g,p=>{r().penToolActive&&p(h)})}H(a),N(t,a),ne()}var _T=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function gT(t){var e=_T();N(t,e)}var hT=re('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function pa(t,e){let n=$(e,"title",8,void 0),r=$(e,"clickCb",8,void 0);var o=hT(),a=q(o),s=q(a);ut(s,e,"default",{}),H(a),H(o),Z(()=>x(o,"title",n())),De("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,o)}var vT=re('<div class="buttons-container svelte-kc00rw"><!></div>');function Qs(t,e){var n=vT(),r=q(n);ut(r,e,"default",{}),H(n),N(t,n)}var pT=re('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function mT(t,e){let n=$(e,"title",8),r=$(e,"closeCb",8);var o=pT(),a=q(o),s=q(a,!0);H(a);var c=U(a,2);H(o),Z(()=>nt(s,n())),De("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),N(t,o)}var CT=re('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Rr(t,e){te(e,!1);let n=$(e,"showModal",12),r=$(e,"title",8),o=D();function a(){n(!1),v(o).close()}F(()=>(v(o),ee(n())),()=>{v(o)&&n()&&v(o).showModal()}),F(()=>(v(o),ee(n())),()=>{v(o)&&!n()&&v(o).close()}),ve();var s=CT(),c=q(s),u=q(c);mT(u,{get title(){return r()},closeCb:a});var _=U(u,2),g=q(_),h=q(g);ut(h,e,"default",{}),H(g),H(_),H(c),H(s),Eo(s,p=>S(o,p),()=>v(o)),De("click",c,Xn(function(p){yw.call(this,e,p)})),De("close",s,()=>{n(!1)}),De("click",s,Lw(Xn(()=>v(o).close()))),N(t,s),ne()}var ET=re('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),IT=re('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function bT(t,e){te(e,!1);let n=$(e,"showModal",12,!1);function r(){n(!1)}function o(){dv(),ys(),n(!1)}fe(),Rr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=IT(),u=U(q(c),2);Qs(u,{children:(_,g)=>{var h=ET(),p=ue(h),m=U(p,2);De("click",p,o),De("click",m,r),N(_,h)},$$slots:{default:!0}}),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0}),ne()}var wT=re("<!> <!>",1);function OT(t){let e=D(!1);function n(){S(e,!0)}var r=wT(),o=ue(r);pa(o,{title:"Restart",clickCb:n,children:(s,c)=>{gT(s)},$$slots:{default:!0}});var a=U(o,2);bT(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var LT=re('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function gs(t,e){let n=$(e,"title",8);var r=LT(),o=q(r),a=q(o,!0);H(o);var s=U(o,2);ut(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var yT=re('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function rn(t,e){let n=$(e,"description",8);var r=yT(),o=q(r),a=q(o,!0);H(o);var s=U(o,2),c=q(s);ut(c,e,"default",{}),H(s),H(r),Z(()=>nt(a,n())),N(t,r)}var AT=re('<div class="shortcut svelte-1cgt5u5"> </div>');function Jt(t,e){let n=$(e,"shortcut",8);var r=AT(),o=q(r,!0);H(r),Z(()=>nt(o,n())),N(t,r)}var xT=re("<!> <!> <!> <!>",1),ST=re("<!> or <!>",1),NT=re("<!> <!> <!> <!> <!> <!> <!> <!>",1),DT=re("<!> <!>",1),TT=re('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!></div>');function RT(t,e){let n=$(e,"showModal",12,!1);Rr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var a=TT(),s=q(a);gs(s,{title:"General",children:(g,h)=>{rn(g,{description:"Toggle Darkmode",children:(p,m)=>{Jt(p,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var c=U(s,2);gs(c,{title:"Selection",children:(g,h)=>{var p=xT(),m=ue(p);rn(m,{description:"Select cells",children:(b,A)=>{Jt(b,{shortcut:"click/drag"})},$$slots:{default:!0}});var C=U(m,2);rn(C,{description:"Add to current selection",children:(b,A)=>{Jt(b,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=U(C,2);rn(I,{description:"Remove from current selection",children:(b,A)=>{Jt(b,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var O=U(I,2);rn(O,{description:"Add or remove from current selection",children:(b,A)=>{Jt(b,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(g,p)},$$slots:{default:!0}});var u=U(c,2);gs(u,{title:"Change Tool",children:(g,h)=>{var p=NT(),m=ue(p);rn(m,{description:"Cycle Tool",children:(k,Y)=>{Jt(k,{shortcut:"Space"})},$$slots:{default:!0}});var C=U(m,2);rn(C,{description:"Change to Digit Tool",children:(k,Y)=>{Jt(k,{shortcut:"Z"})},$$slots:{default:!0}});var I=U(C,2);rn(I,{description:"Change to Corner Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"X"})},$$slots:{default:!0}});var O=U(I,2);rn(O,{description:"Change to Center Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"C"})},$$slots:{default:!0}});var b=U(O,2);rn(b,{description:"Change to Highlights Tool",children:(k,Y)=>{Jt(k,{shortcut:"V"})},$$slots:{default:!0}});var A=U(b,2);rn(A,{description:"Quickshift To Corner Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"Shift"})},$$slots:{default:!0}});var T=U(A,2);rn(T,{description:"Quickshift To Center Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"Ctrl"})},$$slots:{default:!0}});var M=U(T,2);rn(M,{description:"Quickshift To Highlights Tool",children:(k,Y)=>{var W=ST(),K=ue(W);Jt(K,{shortcut:"Shift + Ctrl"});var oe=U(K,2);Jt(oe,{shortcut:"Alt"}),N(k,W)},$$slots:{default:!0}}),N(g,p)},$$slots:{default:!0}});var _=U(u,2);gs(_,{title:"Undo/Redo",children:(g,h)=>{var p=DT(),m=ue(p);rn(m,{description:"Undo",children:(I,O)=>{Jt(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var C=U(m,2);rn(C,{description:"Redo",children:(I,O)=>{Jt(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(g,p)},$$slots:{default:!0}}),H(a),N(r,a)},$$slots:{default:!0},$$legacy:!0})}var kT=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function GT(t){var e=kT();N(t,e)}var MT=re("<!> <!>",1);function FT(t){let e=D(!1);function n(){S(e,!0)}var r=MT(),o=ue(r);pa(o,{title:"Info",clickCb:n,children:(s,c)=>{GT(s)},$$slots:{default:!0}});var a=U(o,2);RT(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var $T=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function UT(t){var e=$T();N(t,e)}var HT=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function PT(t){var e=HT();N(t,e)}function BT(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function a(){n()?o():r(),S(e,!v(e))}pa(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=ye(),_=ue(u);{var g=p=>{PT(p)},h=p=>{UT(p)};_e(_,p=>{v(e)?p(g):p(h,!1)})}N(s,u)},$$slots:{default:!0}})}function gv(t,e){te(e,!1);let n=$(e,"token",8),r=$(e,"renderers",8),o=$(e,"options",8);fe();var a=ye(),s=ue(a);{var c=u=>{var _=ye(),g=ue(_);rh(g,()=>r()[n().type],(h,p)=>{p(h,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,C)=>{var I=ye(),O=ue(I);{var b=T=>{As(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},A=T=>{var M=Fb();Z(()=>nt(M,n().raw)),N(T,M)};_e(O,T=>{"tokens"in n()&&n().tokens?T(b):T(A,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,_)};_e(s,u=>{r()[n().type]&&u(c)})}N(t,a),ne()}function As(t,e){let n=$(e,"tokens",8),r=$(e,"renderers",8),o=$(e,"options",8);var a=ye(),s=ue(a);{var c=u=>{var _=ye(),g=ue(_);We(g,1,n,gt,(h,p)=>{gv(h,{get token(){return v(p)},get renderers(){return r()},get options(){return o()}})}),N(u,_)};_e(s,u=>{n()&&u(c)})}N(t,a)}function hv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function vv(t){return t.startsWith("/")||t.startsWith("#")}function WT(t,e){return e.slug(t).replace(/--+/g,"-")}function YT(t,e){te(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const o=void 0;let a=D();F(()=>(ee(n()),ee(r())),()=>{S(a,WT(n().text,r().slugger))}),ve(),fe();var s=ye(),c=ue(s);return sh(c,()=>`h${n().depth}`,!1,(u,_)=>{let g;Z(()=>g=uh(u,g,{id:v(a)},void 0,u.namespaceURI===bu,u.nodeName.includes("-")));var h=ye(),p=ue(h);ut(p,e,"default",{}),N(_,h)}),N(t,s),Ze(e,"renderers",o),ne({renderers:o})}var zT=re("<blockquote><!></blockquote>");function VT(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=zT(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}function jT(t,e){te(e,!1);let n=$(e,"token",8),r=$(e,"options",8),o=$(e,"renderers",8),a=D();F(()=>ee(n()),()=>{S(a,n().ordered?"ol":"ul")}),ve(),fe();var s=ye(),c=ue(s);sh(c,()=>v(a),!1,(u,_)=>{let g;Z(()=>g=uh(u,g,{start:n().start||1},void 0,u.namespaceURI===bu,u.nodeName.includes("-")));var h=ye(),p=ue(h);We(p,1,()=>n().items,gt,(m,C)=>{var I=Xe(()=>({...v(C)}));gv(m,{get token(){return v(I)},get options(){return r()},get renderers(){return o()}})}),N(_,h)}),N(t,s),ne()}var qT=re("<li><!></li>");function KT(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=qT(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var XT=re("<br>");function ZT(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=XT();return N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var QT=re("<pre><code> </code></pre>");function JT(t,e){te(e,!1);let n=$(e,"token",8);const r=void 0,o=void 0;fe();var a=QT(),s=q(a),c=q(s,!0);return H(s),H(a),Z(()=>{ww(s,`lang-${n().lang}`),nt(c,n().text)}),N(t,a),Ze(e,"options",r),Ze(e,"renderers",o),ne({options:r,renderers:o})}var e2=re("<code> </code>");function t2(t,e){te(e,!1);let n=$(e,"token",8);const r=void 0,o=void 0;fe();var a=e2(),s=q(a,!0);return Z(()=>nt(s,n().raw.slice(1,n().raw.length-1))),H(a),N(t,a),Ze(e,"options",r),Ze(e,"renderers",o),ne({options:r,renderers:o})}var n2=re('<th scope="col"><!></th>'),r2=re("<td><!></td>"),o2=re("<tr></tr>"),i2=re("<table><thead><tr></tr></thead><tbody></tbody></table>");function a2(t,e){te(e,!1);let n=$(e,"token",8),r=$(e,"options",8),o=$(e,"renderers",8);fe();var a=i2(),s=q(a),c=q(s);We(c,5,()=>n().header,gt,(_,g)=>{var h=n2(),p=q(h);As(p,{get tokens(){return v(g).tokens},get options(){return r()},get renderers(){return o()}}),H(h),N(_,h)}),H(c),H(s);var u=U(s);We(u,5,()=>n().rows,gt,(_,g)=>{var h=o2();We(h,5,()=>v(g),gt,(p,m)=>{var C=r2(),I=q(C);As(I,{get tokens(){return v(m).tokens},get options(){return r()},get renderers(){return o()}}),H(C),N(p,C)}),H(h),N(_,h)}),H(u),H(a),N(t,a),ne()}function s2(t,e){te(e,!1);let n=$(e,"token",8);const r=void 0,o=void 0;fe();var a=ye(),s=ue(a);return mw(s,()=>n().text),N(t,a),Ze(e,"options",r),Ze(e,"renderers",o),ne({options:r,renderers:o})}var l2=re("<p><!></p>");function c2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=l2(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var u2=re("<a><!></a>");function d2(t,e){te(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const o=void 0;fe();var a=u2();Z(()=>x(a,"href",vv(n().href)?hv(r().baseUrl,n().href):n().href));var s=q(a);return ut(s,e,"default",{}),H(a),Z(()=>x(a,"title",n().title)),N(t,a),Ze(e,"renderers",o),ne({renderers:o})}function f2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=ye(),s=ue(a);return ut(s,e,"default",{}),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var _2=re("<dfn><!></dfn>");function g2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=_2(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var h2=re("<del><!></del>");function v2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=h2(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var p2=re("<em><!></em>");function m2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=p2(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var C2=re("<hr>");function E2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=C2();return N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var I2=re("<strong><!></strong>");function b2(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=I2(),s=q(a);return ut(s,e,"default",{}),H(a),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}var w2=re('<img class="markdown-image svelte-z38cge">');function O2(t,e){te(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const o=void 0;fe();var a=w2();return Z(()=>x(a,"src",vv(n().href)?hv(r().baseUrl,n().href):n().href)),Z(()=>{x(a,"title",n().title),x(a,"alt",n().text)}),N(t,a),Ze(e,"renderers",o),ne({renderers:o})}function Fg(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=ye(),s=ue(a);return ut(s,e,"default",{}),N(t,a),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",o),ne({token:n,options:r,renderers:o})}const L2=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,y2=Object.hasOwnProperty;class A2{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=x2(e,n===!0);const a=o;for(;y2.call(r.occurrences,o);)r.occurrences[a]++,o=a+"-"+r.occurrences[a];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function x2(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(L2,"").replace(/ /g,"-"))}function sd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Do=sd();function pv(t){Do=t}const mv=/[&<>"']/,S2=new RegExp(mv.source,"g"),Cv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,N2=new RegExp(Cv.source,"g"),D2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$g=t=>D2[t];function Rn(t,e){if(e){if(mv.test(t))return t.replace(S2,$g)}else if(Cv.test(t))return t.replace(N2,$g);return t}const T2=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(T2,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}function Ug(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const na={exec:()=>null};function Hg(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,_=s;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function ji(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function R2(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Pg(t,e,n,r){const o=e.href,a=e.title?Rn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:a,text:Rn(s)}}function k2(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}class xs{constructor(e){ge(this,"options");ge(this,"rules");ge(this,"lexer");this.options=e||Do}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ji(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=k2(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=ji(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ji(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=ji(n[0],`
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
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),p=e.split(`
`,1)[0],m=!h.trim(),C=0;if(this.options.pedantic?(C=2,g=h.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,g=h.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(p)&&(_+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let W;if(p=Y,this.options.pedantic?(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),W=p):W=p.replace(/\t/g,"    "),T.test(p)||M.test(p)||k.test(p)||b.test(p)||A.test(p))break;if(W.search(/[^ ]/)>=C||!p.trim())g+=`
`+W.slice(C);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(h)||M.test(h)||A.test(h))break;g+=`
`+p}!m&&!p.trim()&&(m=!0),_+=Y+`
`,e=e.substring(Y.length+1),h=W.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,O;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(O=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:_,task:!!I,checked:O,loose:!1,text:g,tokens:[]}),a.raw+=_}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const _=a.items[u].tokens.filter(h=>h.type==="space"),g=_.length>0&&_.some(h=>/\n.*\n/.test(h.raw));a.loose=g}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Hg(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(Hg(c,s.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[_]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Rn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=ji(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=R2(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);s&&(o=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),Pg(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),a=n[o.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return Pg(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...o[0]].length-1;let c,u,_=s,g=0;const h=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+s);(o=h.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){_+=u;continue}else if((o[5]||o[6])&&s%3&&!((s+u)%3)){g+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+g);const p=[...o[0]][0].length,m=e.slice(0,s+o.index+p+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return o&&a&&(r=r.substring(1,r.length-1)),r=Rn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=Rn(n[1]),o="mailto:"+r):(r=Rn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,a;if(n[2]==="@")o=Rn(n[0]),a="mailto:"+o;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);o=Rn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Rn(n[0]),{type:"text",raw:n[0],text:r}}}}const G2=/^(?:[ \t]*(?:\n|$))+/,M2=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,F2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ma=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ev=/(?:[*+-]|\d{1,9}[.)])/,Iv=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ev).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),ld=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,U2=/^[^\n]+/,cd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,H2=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",cd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),P2=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ev).getRegex(),Js="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ud=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,B2=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ud).replace("tag",Js).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),bv=Ct(ld).replace("hr",ma).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),W2=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",bv).getRegex(),dd={blockquote:W2,code:M2,def:H2,fences:F2,heading:$2,hr:ma,html:B2,lheading:Iv,list:P2,newline:G2,paragraph:bv,table:na,text:U2},Bg=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ma).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex(),Y2={...dd,table:Bg,paragraph:Ct(ld).replace("hr",ma).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Bg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Js).getRegex()},z2={...dd,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ud).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:na,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(ld).replace("hr",ma).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Iv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},wv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,V2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ov=/^( {2,}|\\)\n(?!\s*$)/,j2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ca="\\p{P}\\p{S}",q2=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ca).getRegex(),K2=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,X2=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ca).getRegex(),Z2=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ca).getRegex(),Q2=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ca).getRegex(),J2=Ct(/\\([punct])/,"gu").replace(/punct/g,Ca).getRegex(),eR=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),tR=Ct(ud).replace("(?:-->|$)","-->").getRegex(),nR=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",tR).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ss=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,rR=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ss).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Lv=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",Ss).replace("ref",cd).getRegex(),yv=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",cd).getRegex(),oR=Ct("reflink|nolink(?!\\()","g").replace("reflink",Lv).replace("nolink",yv).getRegex(),fd={_backpedal:na,anyPunctuation:J2,autolink:eR,blockSkip:K2,br:Ov,code:V2,del:na,emStrongLDelim:X2,emStrongRDelimAst:Z2,emStrongRDelimUnd:Q2,escape:wv,link:rR,nolink:yv,punctuation:q2,reflink:Lv,reflinkSearch:oR,tag:nR,text:j2,url:na},iR={...fd,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",Ss).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ss).getRegex()},_u={...fd,escape:Ct(wv).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},aR={..._u,br:Ct(Ov).replace("{2,}","*").getRegex(),text:Ct(_u.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},hs={normal:dd,gfm:Y2,pedantic:z2},qi={normal:fd,gfm:_u,breaks:aR,pedantic:iR};class Gn{constructor(e){ge(this,"tokens");ge(this,"options");ge(this,"state");ge(this,"tokenizer");ge(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Do,this.options.tokenizer=this.options.tokenizer||new xs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:hs.normal,inline:qi.normal};this.options.pedantic?(n.block=hs.pedantic,n.inline=qi.pedantic):this.options.gfm&&(n.block=hs.gfm,this.options.breaks?n.inline=qi.breaks:n.inline=qi.gfm),this.tokenizer.rules=n}static get rules(){return{block:hs,inline:qi}}static lex(e,n){return new Gn(n).lex(e)}static lexInline(e,n){return new Gn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(g=>{_=g.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o),r=s.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,a,s=e,c,u,_;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},h),typeof p=="number"&&p>=0&&(g=Math.min(g,p))}),g<1/0&&g>=0&&(a=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class Ns{constructor(e){ge(this,"options");ge(this,"parser");this.options=e||Do}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const o=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Rn(o)+'">'+(r?a:Rn(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:Rn(a,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),a=Ug(e);if(a===null)return o;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+o+"</a>",s}image({href:e,title:n,text:r}){const o=Ug(e);if(o===null)return r;e=o;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class _d{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){ge(this,"options");ge(this,"renderer");ge(this,"textRenderer");this.options=e||Do,this.options.renderer=this.options.renderer||new Ns,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _d}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class ra{constructor(e){ge(this,"options");ge(this,"block");this.options=e||Do}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Gn.lex:Gn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}ge(ra,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class sR{constructor(...e){ge(this,"defaults",sd());ge(this,"options",this.setOptions);ge(this,"parse",this.parseMarkdown(!0));ge(this,"parseInline",this.parseMarkdown(!1));ge(this,"Parser",Kn);ge(this,"Renderer",Ns);ge(this,"TextRenderer",_d);ge(this,"Lexer",Gn);ge(this,"Tokenizer",xs);ge(this,"Hooks",ra);this.use(...e)}walkTokens(e,n){var o,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),o.extensions=n),r.renderer){const a=this.defaults.renderer||new Ns(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],_=a[c];a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=_.apply(a,g)),h||""}}o.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new xs(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],_=a[c];a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=_.apply(a,g)),h}}o.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new ra;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],_=a[c];ra.passThroughHooks.has(s)?a[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(a,g)).then(p=>_.call(a,p));const h=u.call(a,g);return _.call(a,h)}:a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=_.apply(a,g)),h}}o.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Gn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const a={...o},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Gn.lex:Gn.lexInline,_=s.hooks?s.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(g=>u(g,s)).then(g=>s.hooks?s.hooks.processAllTokens(g):g).then(g=>s.walkTokens?Promise.all(this.walkTokens(g,s.walkTokens)).then(()=>g):g).then(g=>_(g,s)).then(g=>s.hooks?s.hooks.postprocess(g):g).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let g=u(r,s);s.hooks&&(g=s.hooks.processAllTokens(g)),s.walkTokens&&this.walkTokens(g,s.walkTokens);let h=_(g,s);return s.hooks&&(h=s.hooks.postprocess(h)),h}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Rn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const wo=new sR;function mt(t,e){return wo.parse(t,e)}mt.options=mt.setOptions=function(t){return wo.setOptions(t),mt.defaults=wo.defaults,pv(mt.defaults),mt};mt.getDefaults=sd;mt.defaults=Do;mt.use=function(...t){return wo.use(...t),mt.defaults=wo.defaults,pv(mt.defaults),mt};mt.walkTokens=function(t,e){return wo.walkTokens(t,e)};mt.parseInline=wo.parseInline;mt.Parser=Kn;mt.parser=Kn.parse;mt.Renderer=Ns;mt.TextRenderer=_d;mt.Lexer=Gn;mt.lexer=Gn.lex;mt.Tokenizer=xs;mt.Hooks=ra;mt.parse=mt;mt.options;mt.setOptions;mt.use;mt.walkTokens;mt.parseInline;Kn.parse;Gn.lex;function lR(t){return new Gn().lex(t)}const cR=()=>({heading:YT,blockquote:VT,list:jT,list_item:KT,br:ZT,code:JT,codespan:t2,table:a2,html:s2,paragraph:c2,link:d2,text:f2,def:g2,del:v2,em:m2,hr:E2,strong:b2,image:O2,space:Fg,escape:Fg}),uR=()=>({baseUrl:"/",slugger:new A2});function dR(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},ih(()=>{console.warn=t})}function Av(t,e){te(e,!1),dR();let n=$(e,"source",8),r=$(e,"options",24,()=>({})),o=$(e,"renderers",24,()=>({})),a=D(),s=D(),c=D();F(()=>(ee(n()),ee(o()),ee(r())),()=>{S(a,lR(n())),S(s,{...cR(),...o()}),S(c,{...uR(),...r()})}),ve(),fe(),As(t,{get tokens(){return v(a)},get renderers(){return v(s)},get options(){return v(c)}}),ne()}var fR=re('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),_R=re('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),gR=re('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function hR(t,e){te(e,!1);const n=ze(),r=()=>he(Dr,"$puzzleMetaStore",n),o=D();let a=$(e,"showModal",12,!1);function s(u){return u?bs(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}F(()=>r(),()=>{S(o,r())}),ve(),fe(),Rr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,_)=>{var g=gR(),h=q(g),p=q(h,!0);H(h);var m=U(h,2),C=q(m);Z(()=>nt(C,`by ${s(v(o).authors)??""}`)),H(m);var I=U(m,2),O=q(I),b=Xe(()=>c(v(o).ruleset));Av(O,{get source(){return v(b)}}),H(I);var A=U(I,2);{var T=Y=>{var W=fR(),K=U(ue(W),2);Z(()=>x(K,"href",v(o).ctcUrl)),N(Y,W)};_e(A,Y=>{var W,K;(K=(W=v(o))==null?void 0:W.ctcUrl)!=null&&K.length&&Y(T)})}var M=U(A,2);{var k=Y=>{var W=_R(),K=U(ue(W),2);Z(()=>x(K,"href",v(o).ctcYoutubeUrl)),N(Y,W)};_e(M,Y=>{var W,K;(K=(W=v(o))==null?void 0:W.ctcYoutubeUrl)!=null&&K.length&&Y(k)})}H(g),Z(()=>{var Y;return nt(p,((Y=v(o))==null?void 0:Y.title)||"Puzzle")}),N(u,g)},$$slots:{default:!0},$$legacy:!0}),ne()}var vR=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function pR(t){var e=vR();N(t,e)}var mR=re("<!> <!>",1);function CR(t){let e=D(!1);function n(){S(e,!0)}var r=mR(),o=ue(r);pa(o,{title:"Rules",clickCb:n,children:(s,c)=>{pR(s)},$$slots:{default:!0}});var a=U(o,2);hR(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var ER=re('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function el(t,e){let n=$(e,"isOpen",8,!0);var r=ER(),o=q(r);ut(o,e,"default",{}),H(r),Z(()=>{x(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var IR=re('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),bR=re('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function qr(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0),o=$(e,"isCollapsible",8,!1);var a=ye(),s=ue(a);{var c=_=>{var g=IR(),h=q(g),p=q(h),m=q(p,!0);H(p),H(h);var C=U(h,2),I=q(C);ut(I,e,"default",{}),H(C),H(g),Z(()=>nt(m,n())),N(_,g)},u=_=>{var g=bR(),h=q(g),p=q(h),m=q(p,!0);H(p),H(h);var C=U(h,2),I=q(C);ut(I,e,"default",{});var O=U(I,2);H(C),H(g),Z(()=>{nt(m,n()),Ot(O,"open",r())}),De("click",g,()=>r(!r())),N(_,g)};_e(s,_=>{o()?_(u,!1):_(c)})}N(t,a)}var wR=re('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),OR=re('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function vs(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0);var o=OR(),a=q(o);qr(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=U(a,2);el(s,{get isOpen(){return r()},children:(c,u)=>{var _=wR(),g=q(_);ut(g,e,"default",{}),H(_),N(c,_)},$$slots:{default:!0}}),H(o),N(t,o)}var LR=re('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function yR(t,e){let n=$(e,"value",8),r=$(e,"onClickCb",8),o=$(e,"disabled",8,!1);var a=LR(),s=q(a);jt(s),ei(2),H(a),Z(()=>{Ot(a,"disabled",o()),ch(s,n()),s.disabled=o()}),De("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,a)}var AR=re('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function zr(t,e){te(e,!1);let n=$(e,"value",8),r=$(e,"name",8),o=$(e,"updateCb",8,void 0),a=$(e,"disabled",8,!1);function s(){a()||o()&&o()(!n())}fe();var c=AR(),u=q(c);yR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var _=U(u,2),g=q(_,!0);H(_),H(c),Z(()=>{Ot(c,"disabled",a()),nt(g,r())}),De("click",_,Xn(s)),N(t,c),ne()}var xR=re("<!> <!>",1),SR=re("<!> <!> <!>",1),NR=re("<!> <!>",1),DR=re('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function xv(t,e){te(e,!1);const n=ze(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(Xs,"$gameModeStore",n),a=D();let s=$(e,"showModal",12,!1);F(()=>r(),()=>{S(a,r())}),ve(),fe(),Rr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var _=DR(),g=q(_);vs(g,{title:"General",children:(I,O)=>{zr(I,{get value(){return v(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Nw})},$$slots:{default:!0}});var h=U(g,2);vs(h,{title:"Tools",children:(I,O)=>{var b=xR(),A=ue(b);zr(A,{get value(){return v(a).penToolActive},name:"Pen Tool",updateCb:Tw});var T=U(A,2);zr(T,{disabled:!0,get value(){return v(a).letterToolActive},name:"Letter Tool",updateCb:Rw}),N(I,b)},$$slots:{default:!0}});var p=U(h,2);vs(p,{title:"Gameplay",children:(I,O)=>{var b=SR(),A=ue(b);zr(A,{name:"Check Conflicts",get value(){return v(a).checkConflicts},updateCb:Gw});var T=U(A,2);zr(T,{name:"Highlight Pencilmark Conflicts",get value(){return v(a).highlightPencilmarkConflicts},updateCb:Mw});var M=U(T,2);zr(M,{name:"Highlight Cells Seen By Selection",get value(){return v(a).highlightCellsSeenBySelection},updateCb:kw}),N(I,b)},$$slots:{default:!0}});var m=U(p,2);{var C=I=>{vs(I,{title:"Setting Mode Display",children:(O,b)=>{var A=NR(),T=ue(A);zr(T,{name:"Hide Fog",get value(){return v(a).hideFog},updateCb:Fw});var M=U(T,2);zr(M,{name:"Show Solution",get value(){return v(a).showSolution},updateCb:$w}),N(O,A)},$$slots:{default:!0}})};_e(m,I=>{o()===Ii.SETTING&&I(C)})}H(_),N(c,_)},$$slots:{default:!0},$$legacy:!0}),ne()}var TR=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Sv(t){var e=TR();N(t,e)}var RR=re("<!> <!>",1);function kR(t){let e=D(!1);function n(){S(e,!0)}var r=RR(),o=ue(r);pa(o,{title:"Settings",clickCb:n,children:(s,c)=>{Sv(s)},$$slots:{default:!0}});var a=U(o,2);xv(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var GR=re('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function MR(t){var e=GR(),n=q(e);kR(n);var r=U(n,2);CR(r);var o=U(r,2);BT(o);var a=U(o,2);FT(a);var s=U(a,2);OT(s),H(e),N(t,e)}var FR=re('<div class="entry-panel-wrapper svelte-1aepbnb"><div class="puzzle-info svelte-1aepbnb"><div class="puzzle-header svelte-1aepbnb"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1aepbnb"><!></div></div>  <div class="entry-panel svelte-1aepbnb"><!> <div class="entry-subpanel1 svelte-1aepbnb"><!> <!></div> <!></div></div>');function $R(t,e){te(e,!1);const n=ze(),r=()=>he(ri,"$svgRefStore",n),o=()=>he(Dr,"$puzzleMetaStore",n),a=()=>he(Kt,"$toolStore",n),s=D(),c=D();function u(){r().focus()}function _(J){return J?bs(J," & ",", "):"Anonymous"}function g(J){return J&&J.length?J:"Normal sudoku rules apply."}F(()=>o(),()=>{S(s,o().title??"Sudoku")}),F(()=>o(),()=>{S(c,_(o().authors))}),ve(),fe();var h=FR(),p=q(h),m=q(p),C=q(m),I=q(C,!0);H(C);var O=U(C,2),b=q(O);H(O),H(m);var A=U(m,2),T=q(A),M=Xe(()=>g(o().ruleset));Av(T,{get source(){return v(M)}}),H(A),H(p);var k=U(p,2),Y=q(k);MR(Y);var W=U(Y,2),K=q(W);eT(K,{get selectedTool(){return a()}});var oe=U(K,2);fT(oe,{get selectedTool(){return oh(),a()},set selectedTool(J){ua(Kt,J)},$$legacy:!0}),H(W);var de=U(W,2);KD(de,{}),H(k),H(h),Z(()=>{nt(I,v(s)),nt(b,`by ${v(c)??""}`)}),De("click",k,Xn(()=>{u()})),N(t,h),ne()}const gd=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Kw(n)&&e.push({toolId:n,element:r});return e}),UR=ln(gd,t=>{const e=t.find(r=>r.toolId===f.MINIMUM);return e?e.element:{}}),HR=ln(gd,t=>{const e=t.find(r=>r.toolId===f.MAXIMUM);return e?e.element:{}}),PR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Bu(n)&&e.push({toolId:n,element:r});return e}),BR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Xw(n)&&e.push({toolId:n,element:r});return e}),WR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Ch(n)&&e.push({toolId:n,element:r});return e}),YR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Wu(n)&&e.push({toolId:n,element:r});return e}),zR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Yu(n)&&e.push({toolId:n,element:r});return e}),VR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())zu(n)&&e.push({toolId:n,element:r});return e}),jR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())Eh(n)&&e.push({toolId:n,element:r});return e}),qR=ln(rt,t=>{const e=[];for(const[n,r]of t.entries())aa(n)&&e.push({toolId:n,element:r});return e});function KR(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function XR(t){const e=new Map;function n(r,o){const a=e.get(o);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(o);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(o)}for(const r of t){const o=KR(r),a=o.length;for(let s=0;s<a;s++){const c=o[s%a],u=o[(s+1)%a],_=JSON.stringify(c),g=JSON.stringify(u);n(_,g)}}return e}function ZR(t,e=0,n=!1){const r=[],o=XR(t);if(o.size<=0)return r;const a=new Set;for(;o.size>0;){const s=Array.from(o.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let _=JSON.parse(c);const g=Array.from(u)[0];let h=JSON.parse(g),p=g;const m=[];do{const C=o.get(p);if(C===void 0)throw new Error(`Corner with no adjacencies found ${p}`);const I=new Te(_.c,_.r),O=new Te(h.c,h.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,T=null;for(const M of C){const k=JSON.parse(M),Y=new Te(k.c,k.r),W=O.subtract(I),K=Y.subtract(O),oe=W.perpDotProduct(K);b<oe!=n&&(b=oe,T=k,A=M)}if(n&&C.size>1&&a.add(p),T===null||A===null)throw new Error("Corner with no adjacencies found");if(C.delete(A),C.size<=0&&o.delete(p),b!==0){const M=e*(h.c-_.c),k=e*(T.c-h.c),Y=e*(_.r-h.r),W=e*(h.r-T.r),K=W+b*k,oe=M+b*Y,de=new Te(h.c+K,h.r+oe),J=4;a.has(p)?(m.push(new Te(de.x-J*M,de.y-J*k)),m.push(new Te(de.x-J*Y,de.y-J*W))):m.push(de)}_=h,h=T,p=A}while(p!==g);r.push(m)}return r}function oi(t,e=0,n=!1){return ZR(t,e,n).map(a=>wi(a,!0)).join("")}const QR=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function JR(t,e,n=QR){if(e===1)return n;const r=[],o=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,_=c/(360/o),g=u/(360/o),h=Math.floor(_)%o,p=Math.ceil(_)%o,m=n[h].lerp(n[p],_%1),C=Math.floor(g)%o,I=Math.ceil(g)%o,O=n[C].lerp(n[I],g%1);r.push(m);for(let A=Math.ceil(_);A<=Math.floor(g);A++)r.push(n[A%o]);r.push(O);const b=new Te(0,0);return r.push(b),r}function Nv(t,e,n=new Te(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const _=s*Math.cos(u/e*2*Math.PI+o*2*Math.PI),g=s*Math.sin(u/e*2*Math.PI+o*2*Math.PI),h=n.add(new Te(_,g));c.push(h)}return c}function wi(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:a})=>`${o},${a}`).join("L")+n}function tl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){if(r&&t.length>1){const _=t[t.length-1];for(let h=0;h<t.length-1;h++)if(_.equals(t[h])){t.push(t[h+1]);break}const g=t[0];for(let h=1;h<t.length;h++)if(g.equals(t[h])){t.unshift(t[h-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let g=t[_-2].subtract(t[_-1]);g=g.normalise(),g=g.scale(n),t[_-1]=t[_-1].add(g)}}if(!o)return wi(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let _=2;_<c;_++){const g=t[_-2],h=t[_-1],p=t[_];let m=g.subtract(h).normalise();m=m.scale(o),m=m.add(h);let C=p.subtract(h).normalise();C=C.scale(o),C=C.add(h),s.push(`L${m.x},${m.y} Q ${h.x},${h.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function gu(t,e={}){const n=Ds(t);return tl(n,e)}function Zn(t){return new Te(t.c+.5,t.r+.5)}function Ds(t){return t.map(n=>Zn(n))}const ek=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function tk(t,e){const n=ek[t];return n.subtract(n.scale(e))}function Dv(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(a=>wi(a,!1)).join("")}const nk=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function nl(t,e="none"){return nk.get(t)||e}function rk(t,e,n){let r=[];function a(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:s=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const _=new Te(n+.5,e+.5);return u.add(_)})),r}var ok=ae('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function rl(t,e){let n=$(e,"l",8,.2),r=$(e,"id",8),o=$(e,"strokeWidth",8),a=$(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=ok();x(u,"viewBox","0 0 1 1"),x(u,"refX",s),x(u,"refY",s),x(u,"markerWidth",1),x(u,"markerHeight",1);var _=q(u);x(_,"d",c),H(u),Z(()=>{x(u,"id",r()),x(_,"stroke-width",o()),x(_,"stroke",a())}),N(t,u)}var ik=ae('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function ak(t,e){var Y;te(e,!1);const n=D(),r=D(),o=D();let a=$(e,"outsideEdgeTool",8);const s=a().cell,c=a().direction,u=Oh(s,c),_=Zn(s),g=pn(a().toolId,kt)??CO,h=((Y=v(n))==null?void 0:Y.fontSize)??.5,p=.03;function m(W){return W.value&&W.value.length?W.value:"-"}function C(){const oe=Zn(u).subtract(_).length(),de={shortenHead:.3*oe,shortenTail:.55*oe};return gu([s,u],de)}const O=`outside-tool-arrow-marker-${crypto.randomUUID()}`;F(()=>ee(a()),()=>{S(n,a().shape??g)}),F(()=>v(n),()=>{var W;S(r,((W=v(n))==null?void 0:W.fontColor)??"var(--text-primary-color)")}),F(()=>v(n),()=>{var W;S(o,((W=v(n))==null?void 0:W.stroke)??"var(--text-primary-color)")}),ve(),fe();var b=ik(),A=q(b);rl(A,{id:O,l:.07,strokeWidth:p,get stroke(){return v(o)}});var T=U(A);Z(()=>x(T,"d",C())),x(T,"stroke-width",p),x(T,"marker-end",`url(#${O??""})`);var M=U(T);x(M,"font-size",h);var k=q(M,!0);Z(()=>nt(k,m(a()))),H(M),H(b),Z(()=>{x(T,"stroke",v(o)),x(M,"x",_.x),x(M,"y",_.y),x(M,"fill",v(r))}),N(t,b),ne()}var sk=ae("<g></g>"),lk=ae('<g class="outside-direction-tools-layer" mask="url(#fog-mask-fog)"></g>');function ck(t,e){te(e,!1);const n=ze(),r=()=>he(qR,"$outsideDirectionToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=lk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=sk();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{ak(h,{get outsideEdgeTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var uk=ae("<path></path>");function Ts(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=$(e,"cells",8),g=$(e,"shape",8,Ku);F(()=>ee(g()),()=>{S(n,g().inset??.06)}),F(()=>ee(g()),()=>{S(r,g().stroke??"black")}),F(()=>ee(g()),()=>{S(o,g().strokeWidth??.03)}),F(()=>ee(g()),()=>{S(a,g().strokeDasharray??.08)}),F(()=>ee(g()),()=>{S(s,g().fill??"none")}),F(()=>ee(g()),()=>{S(c,g().connectDiag??!0)}),F(()=>(ee(_()),v(n),v(c)),()=>{S(u,oi(_(),v(n),v(c)))}),ve(),fe();var h=uk();Z(()=>{x(h,"d",v(u)),x(h,"stroke",v(r)),x(h,"stroke-width",v(o)),x(h,"fill",v(s)),x(h,"stroke-dasharray",v(a))}),N(t,h),ne()}var dk=ae('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function la(t,e){te(e,!1);const n=D();let r=$(e,"value",8,""),o=$(e,"fontSize",8,.2),a=$(e,"x",8),s=$(e,"y",8),c=$(e,"position",8,"TL"),u=$(e,"fontColor",8,"var(--text-primary-color)"),_=$(e,"fontWeight",8,400),g=D(null),h=D(null);function p(A,T,M){const k=["TL","TR"].includes(M),W=["TL","BL"].includes(M)?A+.05:A,K=T;return new Te(W,K)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function C(A){return["TL","TR"].includes(A)?"text-before-edge":""}gw(()=>{if(!v(g)||!v(h))return;const A=v(g).getBBox();v(h).setAttribute("x",String(A.x)),v(h).setAttribute("y",String(A.y+A.height*.1)),v(h).setAttribute("width",String(A.width)),v(h).setAttribute("height",String(A.height*.8))}),F(()=>(ee(a()),ee(s()),ee(c())),()=>{S(n,p(a(),s(),c()))}),ve(),fe();var I=ye(),O=ue(I);{var b=A=>{var T=dk(),M=ue(T);Eo(M,W=>S(h,W),()=>v(h));var k=U(M);Z(()=>x(k,"text-anchor",m(c()))),Z(()=>x(k,"dominant-baseline",C(c())));var Y=q(k,!0);H(k),Eo(k,W=>S(g,W),()=>v(g)),Z(()=>{var W,K;x(k,"x",(W=v(n))==null?void 0:W.x),x(k,"y",(K=v(n))==null?void 0:K.y),x(k,"font-size",o()),x(k,"fill",u()),x(k,"font-weight",_()),nt(Y,r())}),N(A,T)};_e(O,A=>{r().length&&A(b)})}N(t,I),ne()}var fk=re("<!> <!> <!> <!>",1);function _k(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let g=$(e,"cloneTool",8);const h=pn(g().toolId,kt)??mO,p=800,m=g().value;F(()=>ee(g()),()=>{S(n,g().shape??h)}),F(()=>v(n),()=>{S(r,v(n).inset??.15)}),F(()=>v(n),()=>{S(o,v(n).strokeWidth??.07)}),F(()=>v(n),()=>{S(a,v(n).fontColor??v(n).stroke??"black")}),F(()=>ee(g()),()=>{S(s,g().cells[g().cells.length-1])}),F(()=>ee(g()),()=>{S(c,g().cells2[g().cells2.length-1])}),F(()=>(v(s),v(r)),()=>{S(u,new Te(v(s).c+1-v(r)-.05,v(s).r+1-v(r)-.05))}),F(()=>(v(c),v(r)),()=>{S(_,new Te(v(c).c+1-v(r)-.05,v(c).r+1-v(r)-.05))}),ve(),fe();var C=fk(),I=ue(C);Ts(I,{get cells(){return g().cells},get shape(){return v(n)}});var O=U(I,2);la(O,{value:m,get x(){return v(_).x},get y(){return v(_).y},position:"BR",get fontColor(){return v(a)},fontWeight:p});var b=U(O,2);Ts(b,{get cells(){return g().cells2},get shape(){return v(n)}});var A=U(b,2);la(A,{value:m,get x(){return v(_).x},get y(){return v(_).y},position:"BR",get fontColor(){return v(a)},fontWeight:p}),N(t,C),ne()}var gk=ae("<g></g>"),hk=ae('<g class="clone-tools-layer" mask="url(#fog-mask-fog)"></g>');function vk(t,e){te(e,!1);const n=ze(),r=()=>he(jR,"$cloneToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=hk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=gk();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{_k(h,{get cloneTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var pk=ae('<path fill="none"></path>');function ca(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=$(e,"linePoints",8),_=$(e,"shape",8,void 0);const g="round",h="round";F(()=>ee(_()),()=>{var m;S(n,((m=_())==null?void 0:m.stroke)??"gray")}),F(()=>ee(_()),()=>{var m;S(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),F(()=>ee(_()),()=>{var m;S(o,((m=_())==null?void 0:m.strokeDasharray)??0)}),F(()=>ee(_()),()=>{var m;S(a,((m=_())==null?void 0:m.strokeDashoffset)??0)}),F(()=>ee(_()),()=>{var m,C,I,O,b,A,T,M;S(s,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((O=(I=_())==null?void 0:I.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((A=(b=_())==null?void 0:b.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((M=(T=_())==null?void 0:T.linePathOptions)==null?void 0:M.closeLoops)??!1})}),F(()=>(ee(u()),v(s)),()=>{S(c,tl(u(),v(s)))}),ve(),fe();var p=pk();x(p,"stroke-linejoin",g),x(p,"stroke-linecap",h),Z(()=>{x(p,"d",v(c)),x(p,"stroke",v(n)),x(p,"stroke-width",v(r)),x(p,"stroke-dasharray",v(o)),x(p,"stroke-dashoffset",v(a))}),N(t,p),ne()}var mk=ae("<circle></circle>");function Oo(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=$(e,"x",8),_=$(e,"y",8),g=$(e,"shape",8);F(()=>ee(g()),()=>{S(n,g().r??.35)}),F(()=>ee(g()),()=>{S(r,g().stroke??"black")}),F(()=>ee(g()),()=>{var p;S(o,(p=g())==null?void 0:p.opacity)}),F(()=>ee(g()),()=>{S(a,g().strokeWidth??.02)}),F(()=>ee(g()),()=>{S(s,g().fill??"none")}),F(()=>ee(g()),()=>{S(c,g().strokeDasharray??0)}),ve(),fe();var h=mk();Z(()=>{x(h,"cx",u()),x(h,"cy",_()),x(h,"r",v(n)),x(h,"stroke",v(r)),x(h,"stroke-width",v(a)),x(h,"fill",v(s)),x(h,"opacity",v(o)),x(h,"stroke-dasharray",v(c))}),N(t,h),ne()}var Ck=re("<!> <!> <!>",1);function Ek(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D();let s=$(e,"linePoints",8),c=$(e,"shape",8,Hs);function u(O){var T;const b=Mt.cloneDeep(O);b.r=b.r||.2;const A=b.r;return b.strokeDasharray=O.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(T=b.linePathOptions)==null?void 0:T.bezierRounding},b}F(()=>ee(s()),()=>{S(n,s().length)}),F(()=>(v(n),ee(s())),()=>{S(r,v(n)>=0?s()[0]:void 0)}),F(()=>(v(n),ee(s())),()=>{S(o,v(n)>=0?s()[v(n)-1]:void 0)}),F(()=>ee(c()),()=>{S(a,u(c()))}),ve(),fe();var _=Ck(),g=ue(_);{var h=O=>{Oo(O,{get x(){return v(r).x},get y(){return v(r).y},get shape(){return v(a)}})};_e(g,O=>{v(r)&&O(h)})}var p=U(g,2);{var m=O=>{ca(O,{get linePoints(){return s()},get shape(){return v(a)}})};_e(p,O=>{v(n)>1&&O(m)})}var C=U(p,2);{var I=O=>{Oo(O,{get x(){return v(o).x},get y(){return v(o).y},get shape(){return v(a)}})};_e(C,O=>{v(o)&&O(I)})}N(t,_),ne()}var Ik=ae("<polygon></polygon>");function Rs(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D();let g=$(e,"cx",8),h=$(e,"cy",8),p=$(e,"shape",8);F(()=>ee(p()),()=>{S(n,p().n??3)}),F(()=>ee(p()),()=>{S(r,p().r??.5)}),F(()=>(v(r),v(n),ee(g()),ee(h())),()=>{S(o,Nv(v(r),v(n),new Te(g(),h())))}),F(()=>v(o),()=>{S(a,v(o).map(C=>`${C.x},${C.y}`).join(" "))}),F(()=>ee(p()),()=>{S(s,p().stroke??"black")}),F(()=>ee(p()),()=>{S(c,p().strokeWidth??.02)}),F(()=>ee(p()),()=>{S(u,p().fill??"none")}),F(()=>ee(p()),()=>{S(_,p().angle??0)}),ve(),fe();var m=Ik();Z(()=>{x(m,"points",v(a)),x(m,"stroke",v(s)),x(m,"stroke-width",v(c)),x(m,"fill",v(u)),x(m,"transform",`rotate(${v(_)}, ${g()}, ${h()} )`)}),N(t,m),ne()}var bk=re("<!> <!> <!>",1);function wk(t,e){te(e,!1);const n=D(),r=D(),o=D();let a=$(e,"linePoints",8),s=$(e,"shape",12,Hs);const c=4,u=.5;function _(M,k){const Y=k.r??u,W=k.n??c,K=k.angle??0,oe=Nv(Y,W,new Te(0,0),!0,0),de=(W+(M-K/360)*W%W)%W,J=Math.floor(de)%W,le=Math.ceil(de)%W;return oe[J].lerp(oe[le],de%1).length()}function g(M){if(v(n)<=1)return 0;const k=a()[0],W=a()[1].subtract(k).angle()/(2*Math.PI);return _(W,M)}function h(M){if(v(n)<=1)return 0;const k=a()[v(n)-1],W=a()[v(n)-2].subtract(k).angle()/(2*Math.PI);return _(W,M)}function p(M){var Y;const k=Mt.cloneDeep(M);return k.r=k.r||u,k.opacity=1,k.linePathOptions={shortenHead:g(k),shortenTail:h(k),bezierRounding:(Y=k.linePathOptions)==null?void 0:Y.bezierRounding},k}F(()=>ee(a()),()=>{S(n,a().length)}),F(()=>(v(n),ee(a())),()=>{S(r,v(n)>=0?a()[0]:void 0)}),F(()=>(v(n),ee(a())),()=>{S(o,v(n)>=0?a()[v(n)-1]:void 0)}),F(()=>ee(s()),()=>{s(p(s()))}),ve(),fe();var m=bk(),C=ue(m);{var I=M=>{Rs(M,{get cx(){return v(r).x},get cy(){return v(r).y},get shape(){return s()}})};_e(C,M=>{v(r)&&M(I)})}var O=U(C,2);{var b=M=>{ca(M,{get linePoints(){return a()},get shape(){return s()}})};_e(O,M=>{v(n)>1&&M(b)})}var A=U(O,2);{var T=M=>{Rs(M,{get cx(){return v(o).x},get cy(){return v(o).y},get shape(){return s()}})};_e(A,M=>{v(o)&&M(T)})}N(t,m),ne()}var Ok=re("<!> <!>",1);function Wg(t,e){te(e,!1);const n=D();let r=$(e,"linePoints",8),o=$(e,"shape",8,Hs);function a(m){var O,b,A;const C=Mt.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=C.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(A=C.linePathOptions)==null?void 0:A.bezierRounding},C}function s(m){var O,b,A;const C=Mt.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=C.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(A=C.linePathOptions)==null?void 0:A.bezierRounding},C}F(()=>ee(r()),()=>{S(n,r().length>0?r()[0]:void 0)}),ve(),fe();var c=Ok(),u=ue(c);{var _=m=>{var C=Xe(()=>a(o()));ca(m,{get linePoints(){return r()},get shape(){return v(C)}})};_e(u,m=>{r().length>1&&m(_)})}var g=U(u,2);{var h=m=>{var C=Xe(()=>a(o()));Oo(m,{get x(){return v(n).x},get y(){return v(n).y},get shape(){return v(C)}})},p=m=>{var C=ye(),I=ue(C);{var O=b=>{var A=Xe(()=>s(o()));Rs(b,{get cx(){return v(n).x},get cy(){return v(n).y},get shape(){return v(A)}})};_e(I,b=>{v(n)&&b(O)},!0)}N(m,C)};_e(g,m=>{v(n)&&o().type===B.THERMO_WITH_CIRCLE?m(h):m(p,!1)})}N(t,c),ne()}var Lk=ae('<g class="line-tool"><!></g>');function yk(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D();let s=$(e,"lineTool",8);const c=pn(s().toolId,kt)??Hs;F(()=>ee(s()),()=>{S(n,Ds(s().cells))}),F(()=>ee(s()),()=>{S(r,s().shape??c)}),F(()=>(v(r),B),()=>{var p;S(o,((p=v(r))==null?void 0:p.type)||B.LINE)}),F(()=>v(r),()=>{var p;S(a,((p=v(r))==null?void 0:p.opacity)??.8)}),ve(),fe();var u=Lk(),_=q(u);{var g=p=>{ca(p,{get linePoints(){return v(n)},get shape(){return v(r)}})},h=p=>{var m=ye(),C=ue(m);{var I=b=>{Ek(b,{get linePoints(){return v(n)},get shape(){return v(r)}})},O=b=>{var A=ye(),T=ue(A);{var M=Y=>{wk(Y,{get linePoints(){return v(n)},get shape(){return v(r)}})},k=Y=>{var W=ye(),K=ue(W);{var oe=J=>{Wg(J,{get linePoints(){return v(n)},get shape(){return v(r)}})},de=J=>{var le=ye(),be=ue(le);{var Ce=Fe=>{Wg(Fe,{get linePoints(){return v(n)},get shape(){return v(r)}})},Ie=Fe=>{ca(Fe,{get linePoints(){return v(n)},get shape(){return v(r)}})};_e(be,Fe=>{v(o)===B.THERMO_WITH_POLYGON?Fe(Ce):Fe(Ie,!1)},!0)}N(J,le)};_e(K,J=>{v(o)===B.THERMO_WITH_CIRCLE?J(oe):J(de,!1)},!0)}N(Y,W)};_e(T,Y=>{v(o)===B.LINE_WITH_POLYGON_ENDS?Y(M):Y(k,!1)},!0)}N(b,A)};_e(C,b=>{v(o)===B.LINE_WITH_CIRCLE_ENDS?b(I):b(O,!1)},!0)}N(p,m)};_e(_,p=>{v(o)===B.LINE?p(g):p(h,!1)})}H(u),Z(()=>x(u,"opacity",v(a))),N(t,u),ne()}var Ak=ae("<g></g>"),xk=ae('<g class="line-tools-layer" mask="url(#fog-mask-fog)"></g>');function Sk(t,e){te(e,!1);const n=ze(),r=()=>he(YR,"$lineToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=xk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=Ak();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{yk(h,{get lineTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var Nk=ae('<path class="cursor svelte-zsq70u"></path>');function Dk(t,e){te(e,!1);const n=ze(),r=()=>he(Kt,"$toolStore",n),o=()=>he(bo,"$selectionStore",n),a=D(),s=D(),c=.25;function u(g){if(!g)return"";const[h,p]=[g.c,g.r];return`M${h},${p}L${h+c},${p}L${h},${p+c}Z`}F(()=>r(),()=>{S(a,Vu(r()))}),F(()=>o(),()=>{S(s,u(o().lastCell))}),ve(),fe();var _=Nk();Z(()=>{x(_,"d",v(s)),x(_,"visibility",v(a)?"visible":"hidden")}),N(t,_),ne()}var Tk=ae('<g class="grid-border"><rect fill="none" stroke="black"></rect></g>');function Rk(t,e){te(e,!1);let n=$(e,"gridShape",8);const r=.06;fe();var o=Tk(),a=q(o);x(a,"x",0),x(a,"y",0),x(a,"stroke-width",r),H(o),Z(()=>{x(a,"width",n().nCols),x(a,"height",n().nRows)}),N(t,o),ne()}var kk=ae('<rect fill="none" stroke="black"></rect>'),Gk=ae('<g class="grid-lines"></g>');function Mk(t,e){te(e,!1);const n=ze(),r=()=>he(sn,"$gridStore",n),o=D(),a=.01;F(()=>r(),()=>{S(o,r().getAllCells())}),ve(),fe();var s=Gk();We(s,5,()=>v(o),gt,(c,u)=>{var _=kk();x(_,"width",1),x(_,"height",1),x(_,"stroke-width",a),Z(()=>{x(_,"x",v(u).c),x(_,"y",v(u).r)}),N(c,_)}),H(s),N(t,s),ne()}var Fk=ae('<path class="region-border" fill="none" stroke="black"></path>'),$k=ae('<g class="regions-border"></g>');function Uk(t,e){te(e,!1);const n=ze(),r=()=>he(an,"$cellsStore",n),o=()=>he(sn,"$gridStore",n),a=D(),s=D(),c=.06;function u(g,h){return g.filter(C=>C.region===h).map(C=>({r:C.r,c:C.c}))}F(()=>r(),()=>{S(a,r())}),F(()=>o(),()=>{S(s,o().getUsedRegions())}),ve(),fe();var _=$k();We(_,5,()=>v(s),gt,(g,h)=>{var p=Fk();Z(()=>x(p,"d",oi(u(v(a),v(h)),0,!1))),x(p,"stroke-width",c),Z(()=>x(p,"id",`region-${v(h)??""}`)),N(g,p)}),H(_),N(t,_),ne()}var Hk=ae('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function Pk(t,e){te(e,!1);const n=ze(),r=()=>he(bo,"$selectionStore",n),o=()=>he(Kt,"$toolStore",n),a=D(),s=D(),c=D(),u=D(),_=D(),g=D();let h=$(e,"boundingBox",8);const p=.06,m=.05,C="#080808",I="#b2b2b2";F(()=>ee(h()),()=>{S(a,h().x)}),F(()=>ee(h()),()=>{S(s,h().y)}),F(()=>r(),()=>{S(c,r().cells)}),F(()=>v(c),()=>{S(u,oi(v(c),0))}),F(()=>v(c),()=>{S(_,oi(v(c),p))}),F(()=>o(),()=>{S(g,Vu(o()))}),ve(),fe();var O=Hk(),b=q(O),A=q(b);x(A,"stdDeviation",m),ei(),H(b);var T=U(b),M=q(T);x(M,"fill",I);var k=U(M);x(k,"fill",C),H(T);var Y=U(T);H(O),Z(()=>{x(O,"visibility",v(g)?"visible":"hidden"),x(T,"x",v(a)),x(T,"y",v(s)),x(M,"x",v(a)),x(M,"y",v(s)),x(k,"d",v(_)),x(Y,"d",v(u))}),N(t,O),ne()}var Bk=re("<!> <!>",1);function Tv(t,e){te(e,!1);const n=D(),r=D();let o=$(e,"cells",8),a=$(e,"shape",8,Ku),s=$(e,"value",8,void 0);F(()=>ee(o()),()=>{S(n,o()[0])}),F(()=>v(n),()=>{S(r,new Te(v(n).c,v(n).r))}),ve(),fe();var c=Bk(),u=ue(c);Ts(u,{get cells(){return o()},get shape(){return a()}});var _=U(u,2);{var g=h=>{la(h,{get value(){return s()},get x(){return v(r).x},get y(){return v(r).y},position:"TL"})};_e(_,h=>{s()&&s().length&&h(g)})}N(t,c),ne()}var Wk=ae('<g class="cage-tool"><!></g>');function Yk(t,e){te(e,!1);const n=D();let r=$(e,"cageTool",8);const o=pn(r().toolId,kt)??Ku;F(()=>ee(r()),()=>{S(n,r().shape??o)}),ve(),fe();var a=Wk(),s=q(a);Tv(s,{get cells(){return r().cells},get shape(){return v(n)},get value(){return r().value}}),H(a),N(t,a),ne()}var zk=ae("<g></g>"),Vk=ae('<g class="cage-tools-layer" mask="url(#fog-mask-fog)"></g>');function jk(t,e){te(e,!1);const n=ze(),r=()=>he(VR,"$cageToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=Vk();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=zk();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{Yk(h,{get cageTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var qk=ae('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function Kk(t,e){te(e,!1);const n=D(),r=D();let o=$(e,"grid",8);F(()=>ee(o()),()=>{S(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),F(()=>v(n),()=>{S(r,oi(v(n),0))}),ve(),fe();var a=qk(),s=q(a);H(a),Z(()=>x(s,"d",v(r))),N(t,a),ne()}var Xk=ae('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),Zk=ae('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),Qk=ae('<g class="quadruple-text"><!></g>');function Jk(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"cornerTool",8);const u=c().cells,_=new Te(u[u.length-1].c,u[u.length-1].r),g=pn(c().toolId,kt)??Ah;F(()=>ee(c()),()=>{S(n,c().value)}),F(()=>ee(c()),()=>{S(r,c().shape??g)}),F(()=>v(r),()=>{var C;S(o,((C=v(r))==null?void 0:C.fontSize)??.2)}),F(()=>v(r),()=>{var C;S(a,((C=v(r))==null?void 0:C.fontColor)??"black")}),F(()=>v(n),()=>{var C;S(s,v(n)?(C=v(n))==null?void 0:C.split(","):[])}),ve(),fe();var h=ye(),p=ue(h);{var m=C=>{var I=Qk(),O=q(I);{var b=T=>{var M=Xk(),k=q(M,!0);Z(()=>nt(k,v(s).join(" "))),H(M),Z(()=>{x(M,"x",_.x),x(M,"y",_.y),x(M,"font-size",v(o)),x(M,"fill",v(a))}),N(T,M)},A=T=>{var M=Zk(),k=ue(M),Y=q(k,!0);Z(()=>nt(Y,v(s).slice(0,2).join(" "))),H(k);var W=U(k),K=q(W,!0);Z(()=>nt(K,v(s).slice(2).join(" "))),H(W),Z(()=>{x(k,"x",_.x),x(k,"y",_.y),x(k,"dy",-v(o)/2),x(k,"font-size",v(o)),x(k,"fill",v(a)),x(W,"x",_.x),x(W,"y",_.y),x(W,"dy",v(o)/2),x(W,"font-size",v(o)),x(W,"fill",v(a))}),N(T,M)};_e(O,T=>{v(s).length<=2?T(b):T(A,!1)})}H(I),Z(()=>x(I,"data-count",v(s).length)),N(C,I)};_e(p,C=>{v(n)&&C(m)})}N(t,h),ne()}var e5=ae("<ellipse></ellipse>");function t5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=$(e,"cx",8),g=$(e,"cy",8),h=$(e,"shape",8);F(()=>ee(h()),()=>{S(n,h().width??.5)}),F(()=>ee(h()),()=>{S(r,h().height??.5)}),F(()=>ee(h()),()=>{S(o,h().stroke??"black")}),F(()=>ee(h()),()=>{var m;S(a,(m=h())==null?void 0:m.opacity)}),F(()=>ee(h()),()=>{S(s,h().strokeWidth??.02)}),F(()=>ee(h()),()=>{S(c,h().fill??"none")}),F(()=>ee(h()),()=>{S(u,h().angle??0)}),ve(),fe();var p=e5();Z(()=>{x(p,"cx",_()),x(p,"cy",g()),x(p,"rx",v(n)/2),x(p,"ry",v(r)/2),x(p,"stroke",v(o)),x(p,"stroke-width",v(s)),x(p,"fill",v(c)),x(p,"opacity",v(a)),x(p,"transform",`rotate(${v(u)}, ${_()}, ${g()} )`)}),N(t,p),ne()}var n5=ae("<rect></rect>");function r5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let _=$(e,"cx",8),g=$(e,"cy",8),h=$(e,"shape",8);F(()=>ee(h()),()=>{S(n,h().width??.5)}),F(()=>ee(h()),()=>{S(r,h().height??.5)}),F(()=>(ee(_()),v(n)),()=>{S(o,_()-v(n)/2)}),F(()=>(ee(g()),v(r)),()=>{S(a,g()-v(r)/2)}),F(()=>ee(h()),()=>{S(s,h().stroke||"black")}),F(()=>ee(h()),()=>{S(c,h().strokeWidth||.023)}),F(()=>ee(h()),()=>{S(u,h().fill||"none")}),ve(),fe();var p=n5();Z(()=>{x(p,"x",v(o)),x(p,"y",v(a)),x(p,"width",v(n)),x(p,"height",v(r)),x(p,"stroke",v(s)),x(p,"stroke-width",v(c)),x(p,"fill",v(u))}),N(t,p),ne()}var o5=ae("<rect></rect>");function i5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),g=D();let h=$(e,"cx",8),p=$(e,"cy",8),m=$(e,"shape",8);F(()=>ee(m()),()=>{S(n,m().r??.5)}),F(()=>(ee(h()),v(n)),()=>{S(r,h()-v(n))}),F(()=>(ee(p()),v(n)),()=>{S(o,p()-v(n))}),F(()=>v(n),()=>{S(a,2*v(n))}),F(()=>v(n),()=>{S(s,2*v(n))}),F(()=>ee(m()),()=>{S(c,m().stroke??"black")}),F(()=>ee(m()),()=>{S(u,m().strokeWidth??.02)}),F(()=>ee(m()),()=>{S(_,m().fill??"none")}),F(()=>ee(m()),()=>{S(g,m().angle??0)}),ve(),fe();var C=o5();Z(()=>{x(C,"x",v(r)),x(C,"y",v(o)),x(C,"width",v(a)),x(C,"height",v(s)),x(C,"stroke",v(c)),x(C,"stroke-width",v(u)),x(C,"fill",v(_)),x(C,"transform",`rotate(${v(g)}, ${h()}, ${p()})`)}),N(t,C),ne()}function ol(t,e){te(e,!1);const n=D();let r=$(e,"cx",8),o=$(e,"cy",8),a=$(e,"shape",8);F(()=>(ee(a()),B),()=>{var g;S(n,((g=a())==null?void 0:g.type)??B.CIRCLE)}),ve(),fe();var s=ye(),c=ue(s);{var u=g=>{Oo(g,{get x(){return r()},get y(){return o()},get shape(){return a()}})},_=g=>{var h=ye(),p=ue(h);{var m=I=>{t5(I,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},C=I=>{var O=ye(),b=ue(O);{var A=M=>{i5(M,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},T=M=>{var k=ye(),Y=ue(k);{var W=oe=>{r5(oe,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},K=oe=>{var de=ye(),J=ue(de);{var le=Ce=>{Rs(Ce,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},be=Ce=>{Oo(Ce,{get x(){return r()},get y(){return o()},get shape(){return a()}})};_e(J,Ce=>{v(n)===B.POLYGON?Ce(le):Ce(be,!1)},!0)}N(oe,de)};_e(Y,oe=>{v(n)===B.RECTANGLE?oe(W):oe(K,!1)},!0)}N(M,k)};_e(b,M=>{v(n)===B.SQUARE?M(A):M(T,!1)},!0)}N(I,O)};_e(p,I=>{v(n)===B.ELLIPSE?I(m):I(C,!1)},!0)}N(g,h)};_e(c,g=>{v(n)===B.CIRCLE?g(u):g(_,!1)})}N(t,s),ne()}var a5=ae('<text text-anchor="middle" dominant-baseline="central"> </text>'),s5=ae('<g class="corner-tool"><!><!></g>');function l5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D();let s=$(e,"cornerTool",8);const c=s().cells,u=pn(s().toolId,kt)??Ah,_=new Te(c[c.length-1].c,c[c.length-1].r);function g(C,I){return I===B.TEXT_ONLY?C.value?C.value:"-":C.value??""}F(()=>ee(s()),()=>{S(n,s().shape??u)}),F(()=>(v(n),B),()=>{var C;S(r,((C=v(n))==null?void 0:C.type)??B.CIRCLE)}),F(()=>v(n),()=>{var C;S(o,((C=v(n))==null?void 0:C.fontSize)??.2)}),F(()=>v(n),()=>{var C;S(a,((C=v(n))==null?void 0:C.fontColor)??"black")}),ve(),fe();var h=ye(),p=ue(h);{var m=C=>{var I=s5(),O=q(I);ol(O,{get cx(){return _.x},get cy(){return _.y},get shape(){return v(n)}});var b=U(O);{var A=M=>{Jk(M,{get cornerTool(){return s()}})},T=M=>{var k=a5(),Y=q(k,!0);Z(()=>nt(Y,g(s(),v(r)))),H(k),Z(()=>{x(k,"x",_.x),x(k,"y",_.y),x(k,"font-size",v(o)),x(k,"fill",v(a))}),N(M,k)};_e(b,M=>{s().toolId===f.QUADRUPLE?M(A):M(T,!1)})}H(I),N(C,I)};_e(p,C=>{c.length===4&&C(m)})}N(t,h),ne()}var c5=ae("<g></g>"),u5=ae('<g class="corner-tools-layer" mask="url(#fog-mask-fog)"></g>');function d5(t,e){te(e,!1);const n=ze(),r=()=>he(WR,"$cornerToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=u5();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=c5();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{l5(h,{get cornerTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var f5=ae('<path class="arrow-line" fill="none"></path>'),_5=ae('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function g5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),_=D(),g=D(),h=D();let p=$(e,"arrowTool",8),m=$(e,"arrowId",8),C=$(e,"boundingBox",8);const I=pn(p().toolId,kt)??pO,O="round",b="round",A=crypto.randomUUID(),T=`arrow-mask-${m()}-${A}`,M=`arrow-marker-${m()}-${A}`;F(()=>ee(p()),()=>{S(n,p().shape??I)}),F(()=>ee(C()),()=>{S(r,C().x)}),F(()=>ee(C()),()=>{S(o,C().y)}),F(()=>v(n),()=>{var le;S(a,((le=v(n))==null?void 0:le.r)??.4)}),F(()=>v(n),()=>{var le;S(s,((le=v(n))==null?void 0:le.stroke)??"gray")}),F(()=>v(n),()=>{var le;S(c,((le=v(n))==null?void 0:le.strokeWidth)??.1)}),F(()=>v(n),()=>{var le;S(u,((le=v(n))==null?void 0:le.strokeDasharray)??0)}),F(()=>v(n),()=>{var le;S(_,((le=v(n))==null?void 0:le.opacity)??.8)}),F(()=>(v(a),v(n)),()=>{var le,be,Ce,Ie;S(g,{shortenHead:v(a),shortenTail:((be=(le=v(n))==null?void 0:le.linePathOptions)==null?void 0:be.shortenTail)??.2,bezierRounding:((Ie=(Ce=v(n))==null?void 0:Ce.linePathOptions)==null?void 0:Ie.bezierRounding)??.4})}),F(()=>ee(p()),()=>{S(h,gu(p().cells))}),ve(),fe();var k=_5(),Y=q(k);x(Y,"id",T);var W=q(Y),K=U(W);H(Y);var oe=U(Y);rl(oe,{id:M,l:.2,get strokeWidth(){return v(c)},get stroke(){return v(s)}});var de=U(oe);x(de,"mask",`url(#${T??""})`);var J=U(de);We(J,1,()=>p().lines,gt,(le,be)=>{var Ce=ye(),Ie=ue(Ce);{var Fe=lt=>{var xe=f5();Z(()=>x(xe,"d",gu(v(be),v(g)))),x(xe,"stroke-linejoin",O),x(xe,"stroke-linecap",b),x(xe,"marker-end",`url(#${M??""})`),Z(()=>{x(xe,"stroke",v(s)),x(xe,"stroke-width",v(c)),x(xe,"opacity",v(_)),x(xe,"stroke-dasharray",v(u))}),N(lt,xe)};_e(Ie,lt=>{v(be).length>1&&lt(Fe)})}N(le,Ce)}),H(k),Z(()=>{x(Y,"x",v(r)),x(Y,"y",v(o)),x(W,"x",v(r)),x(W,"y",v(o)),x(K,"stroke-width",2*v(a)-v(c)),x(K,"d",v(h)),x(de,"d",v(h)),x(de,"stroke-width",2*v(a)+v(c)),x(de,"stroke",v(s))}),N(t,k),ne()}var h5=ae("<g></g>"),v5=ae('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function p5(t,e){te(e,!1);const n=ze(),r=()=>he(zR,"$arrowToolsStore",n),o=D();let a=$(e,"boundingBox",8);F(()=>r(),()=>{S(o,r())}),ve();var s=v5();We(s,5,()=>v(o),gt,(c,u)=>{let _=()=>v(u).toolId,g=()=>v(u).element;var h=h5();We(h,5,()=>Object.entries(g()),p=>p[0],(p,m)=>{g5(p,{get arrowId(){return v(m)[0]},get arrowTool(){return v(m)[1]},get boundingBox(){return a()}})}),H(h),Z(()=>Fn(h,`element-group ${_()}`)),N(c,h)}),H(s),N(t,s),ne()}var m5=ae('<!><path fill="none"></path>',1);function C5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"singleCellArrowTool",8),u=$(e,"id",8);const _=c().cell,g=pn(c().toolId,kt)??hO,h=.3;function p(A,T){const M=Us(T),k=new Te(M.c,M.r).normalise().scale(h),Y=Zn(A),W=Y.subtract(k),K=Y.add(k);return[W,K]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;F(()=>ee(c()),()=>{S(n,c().direction)}),F(()=>ee(c()),()=>{S(r,c().shape??g)}),F(()=>v(r),()=>{S(o,v(r).strokeWidth??.1)}),F(()=>v(r),()=>{S(a,v(r).stroke??"black")}),F(()=>v(n),()=>{S(s,tl(p(_,v(n))))}),ve(),fe();var I=m5(),O=ue(I);rl(O,{id:C,l:.15,get stroke(){return v(a)},get strokeWidth(){return v(o)}});var b=U(O);x(b,"marker-end",`url(#${C??""})`),Z(()=>{x(b,"d",v(s)),x(b,"stroke",v(a)),x(b,"stroke-width",v(o))}),N(t,I),ne()}var E5=ae('<path fill="none"></path>'),I5=ae("<!><!>",1);function b5(t,e){te(e,!1);const n=D(),r=D(),o=D();let a=$(e,"singleCellMultiArrowTool",8),s=$(e,"id",8);const c=a().cell,u=pn(a().toolId,kt)??vO,_=.2;function g(b,A){const T=Us(A),M=new Te(T.c,T.r),Y=Zn(b).add(M.scale(.4));return[Y.subtract(M.normalise().scale(_)),Y]}function h(b){return tl(g(c,b))}const p=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${p}`;F(()=>ee(a()),()=>{S(n,a().shape??u)}),F(()=>v(n),()=>{S(r,v(n).strokeWidth??.08)}),F(()=>v(n),()=>{S(o,v(n).stroke??"black")}),ve(),fe();var C=I5(),I=ue(C);rl(I,{id:m,l:.1,get stroke(){return v(o)},get strokeWidth(){return v(r)}});var O=U(I);We(O,1,()=>a().directions,gt,(b,A)=>{var T=E5();Z(()=>x(T,"d",h(v(A)))),x(T,"marker-end",`url(#${m??""})`),Z(()=>{x(T,"stroke",v(o)),x(T,"stroke-width",v(r))}),N(b,T)}),N(t,C),ne()}var w5=ae('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Yg(t,e){te(e,!1);const n=ze(),r=()=>he(UR,"$minimumConstraintsStore",n),o=()=>he(HR,"$maximumConstraintsStore",n),a=D(),s=D(),c=D();let u=$(e,"coord",8),_=$(e,"minOrMax",8);function g(O,b){const A=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];console.log(O);for(let M=0;M<T.length;M++){let k=T[M];const Y={r:O.r+k[1],c:O.c+k[0]};console.log(Y),A[M]=!Object.values(b).some(W=>je(Y,W.cell))}return A}function h(O,b){let A=rk(_(),O.r,O.c);const T=g(O,b);return A=A.filter((k,Y)=>T[Y]),A.map(k=>wi(k,!1)).join("")}function p(O,b){return _()==="max"?b:O}F(()=>ee(u()),()=>{S(a,u().c)}),F(()=>ee(u()),()=>{S(s,u().r)}),F(()=>(r(),o()),()=>{S(c,p(r(),o()))}),F(()=>v(c),()=>{console.log(v(c))}),ve(),fe();var m=w5(),C=q(m);x(C,"width",1),x(C,"height",1);var I=U(C);Z(()=>x(I,"d",h(u(),v(c)))),H(m),Z(()=>{x(C,"x",v(a)),x(C,"y",v(s))}),N(t,m),ne()}var O5=ae('<g class="single-cell-tool"><!><!></g>');function L5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"singleCellTool",8),u=$(e,"id",8);const _=c().cell,g=pn(c().toolId,kt)??gO;F(()=>ee(c()),()=>{S(n,c().shape??g)}),F(()=>(v(n),B),()=>{var b;S(r,((b=v(n))==null?void 0:b.type)||B.CIRCLE)}),F(()=>{},()=>{S(o,{x:_.c+.5,y:_.r+.5})}),F(()=>Te,()=>{S(a,new Te(_.c,_.r))}),F(()=>ee(c()),()=>{S(s,c().value)}),ve(),fe();var h=O5(),p=q(h);{var m=b=>{Yg(b,{coord:_,minOrMax:"min"})},C=b=>{var A=ye(),T=ue(A);{var M=Y=>{Yg(Y,{coord:_,minOrMax:"max"})},k=Y=>{var W=ye(),K=ue(W);{var oe=J=>{Tv(J,{cells:[_],get shape(){return v(n)},get value(){return c().value}})},de=J=>{ol(J,{get cx(){return v(o).x},get cy(){return v(o).y},get shape(){return v(n)}})};_e(K,J=>{v(r)===B.CAGE?J(oe):J(de,!1)},!0)}N(Y,W)};_e(T,Y=>{c().toolId===f.MAXIMUM?Y(M):Y(k,!1)},!0)}N(b,A)};_e(p,b=>{c().toolId===f.MINIMUM?b(m):b(C,!1)})}var I=U(p);{var O=b=>{la(b,{get value(){return v(s)},get x(){return v(a).x},get y(){return v(a).y},position:"TL"})};_e(I,b=>{v(r)!==B.CAGE&&v(s)&&b(O)})}H(h),Z(()=>x(h,"id",`constraint-${u()}`)),N(t,h),ne()}var y5=ae("<g></g>"),A5=ae('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function x5(t,e){te(e,!1);const n=ze(),r=()=>he(gd,"$singleCellToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=A5();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=y5();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{var m=ye(),C=ue(m);{var I=b=>{C5(b,{get singleCellArrowTool(){return v(p)[1]},get id(){return v(p)[0]}})},O=b=>{var A=ye(),T=ue(A);{var M=Y=>{b5(Y,{get singleCellMultiArrowTool(){return v(p)[1]},get id(){return v(p)[0]}})},k=Y=>{var W=ye(),K=ue(W);{var oe=de=>{L5(de,{get singleCellTool(){return v(p)[1]},get id(){return v(p)[0]}})};_e(K,de=>{v(p)[1].type==="SIMPLE"&&de(oe)},!0)}N(Y,W)};_e(T,Y=>{v(p)[1].type==="MULTIARROW"?Y(M):Y(k,!1)},!0)}N(b,A)};_e(C,b=>{v(p)[1].type==="ARROW"?b(I):b(O,!1)})}N(h,m)}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var S5=ae('<line class="svelte-yr67cf"></line>');function N5(t,e){te(e,!1);const n=D(),r=D(),o=D();let a=$(e,"shape",8),s=$(e,"coords",8);const[c,u]=s(),_=u.c,g=c.c===u.c?u.c+1:u.c,h=u.r,p=c.r===u.r?u.r+1:u.r;console.log("border line"),F(()=>ee(a()),()=>{S(n,a().stroke??"black")}),F(()=>ee(a()),()=>{var C;S(r,(C=a())==null?void 0:C.opacity)}),F(()=>ee(a()),()=>{S(o,a().strokeWidth??.02)}),ve(),fe();var m=S5();x(m,"x1",_),x(m,"x2",g),x(m,"y1",h),x(m,"y2",p),Z(()=>{x(m,"stroke",v(n)),x(m,"stroke-width",v(o)),x(m,"opacity",v(r))}),N(t,m),ne()}var D5=ae('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function T5(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=$(e,"edgeTool",8);const u=c().cells,_=pn(c().toolId,kt)??yh;function g(I,O){return O===B.TEXT_ONLY?I.value?I.value:"-":I.value??""}function h(){if(c().toolId!==f.EDGE_INEQUALITY)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}F(()=>ee(c()),()=>{S(n,c().shape??_)}),F(()=>Ds,()=>{S(r,fL(Ds(u)))}),F(()=>(v(n),B),()=>{var I;S(o,((I=v(n))==null?void 0:I.type)||B.CIRCLE)}),F(()=>v(n),()=>{var I;S(a,((I=v(n))==null?void 0:I.fontSize)??.2)}),F(()=>v(n),()=>{var I;S(s,((I=v(n))==null?void 0:I.fontColor)??"black")}),ve(),fe();var p=ye(),m=ue(p);{var C=I=>{var O=D5(),b=q(O);{var A=Y=>{Oo(Y,{get x(){return v(r).x},get y(){return v(r).y},get shape(){return v(n)}})},T=Y=>{var W=ye(),K=ue(W);{var oe=J=>{Oo(J,{get x(){return v(r).x},get y(){return v(r).y},get shape(){return v(n)}})},de=J=>{var le=ye(),be=ue(le);{var Ce=Fe=>{N5(Fe,{coords:u,get shape(){return v(n)}})},Ie=Fe=>{ol(Fe,{get cx(){return v(r).x},get cy(){return v(r).y},get shape(){return v(n)}})};_e(be,Fe=>{v(o)===B.BORDER_LINE?Fe(Ce):Fe(Ie,!1)},!0)}N(J,le)};_e(K,J=>{v(o)===B.TEXT_ONLY?J(oe):J(de,!1)},!0)}N(Y,W)};_e(b,Y=>{c().toolId===f.EDGE_INEQUALITY?Y(A):Y(T,!1)})}var M=U(b);Z(()=>x(M,"transform",`rotate(${h()}, ${v(r).x}, ${v(r).y} )`));var k=q(M,!0);Z(()=>nt(k,g(c(),v(o)))),H(M),H(O),Z(()=>{x(M,"x",v(r).x),x(M,"y",v(r).y),x(M,"font-size",v(a)),x(M,"fill",v(s))}),N(I,O)};_e(m,I=>{u.length===2&&I(C)})}N(t,p),ne()}var R5=ae("<g></g>"),k5=ae('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function G5(t,e){te(e,!1);const n=ze(),r=()=>he(PR,"$edgeToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=k5();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=R5();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{T5(h,{get edgeTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}function M5(t,e){const n=t.getRow(e.r);return new Set(n)}function F5(t,e){const n=t.getCol(e.c);return new Set(n)}function $5(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function U5(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function H5(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function P5(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function B5(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function W5(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function Y5(t,e,n){let r=new Set;const a=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),_=c.findIndex(h=>h===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const h=c.filter((p,m)=>m!==_);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...c])),r}function z5(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function V5(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function j5(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(f.ANTIKNIGHT)&&(r=r.union(U5(t,o))),e.get(f.ANTIKING)&&(r=r.union(H5(t,o))),e.get(f.DISJOINT_GROUPS)&&(r=r.union(P5(t,o))),e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(W5(t,o))),e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(B5(t,o)))),r}function Vc(t,e,n,r,o){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=V5(t,n,c);o=new Set([...o,...u])}return o}function q5(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;const a=e.get(f.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=Y5(t,o,u);r=new Set([...r,..._])}const s=e.get(f.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=z5(t,o,u);r=new Set([...r,..._])}return r=Vc(t,e,o,f.KILLER_CAGE,r),r=Vc(t,e,o,f.PARITY_BALANCE_CAGE,r),r=Vc(t,e,o,f.SPOTLIGHT_CAGE,r),r}function Rv(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,a=t.localConstraints;if(!r)return n;r.get(f.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...M5(o,e),...F5(o,e),...$5(o,e)])),n=new Set([...n,...j5(o,r,e)]),n=new Set([...n,...q5(o,a,e)]);const s=o.getCell(e.r,e.c);return s&&n.delete(s),n}function K5(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(Rv(t,a));const r=n.reduce((a,s)=>a.intersection(s)),o=[];for(const a of r)o.push(a.toCoords());return o}var X5=ae('<tspan class="svelte-8mb99u"> </tspan>'),Z5=ae('<g class="center-marks-group"><text class="center-mark svelte-8mb99u" dominant-baseline="central"></text></g>');function Q5(t,e){te(e,!1);const n=D();let r=$(e,"cell",8),o=$(e,"seen_values",8);const a=.25;function s(g){return o().find(p=>p===g)!==void 0}F(()=>ee(r()),()=>{S(n,Zn({r:r().r,c:r().c}))}),ve(),fe();var c=ye(),u=ue(c);{var _=g=>{var h=Z5(),p=q(h);x(p,"font-size",a),We(p,5,()=>r().centerMarks,gt,(m,C)=>{var I=X5();const O=Xe(()=>s(v(C)));Z(()=>Ot(I,"conflict",v(O)));var b=q(I,!0);H(I),Z(()=>nt(b,v(C))),N(m,I)}),H(p),H(h),Z(()=>{x(p,"x",v(n).x),x(p,"y",v(n).y),x(p,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(g,h)};_e(u,g=>{r().centerMarks.length&&g(_)})}N(t,c),ne()}var J5=ae('<text class="corner-mark svelte-1ntffp0" dominant-baseline="central"> </text>'),e3=ae('<g class="corner-marks-group"></g>');function t3(t,e){te(e,!1);let n=$(e,"cell",8),r=$(e,"seen_values",8);const o=.25,a=.28;function s(h){const p=h.cornerMarks.slice(0,8),m=Zn({r:h.r,c:h.c});return p.map((C,I)=>{const O=tk(I,a);return{pos:m.add(O),value:C,idx:I}})}function c(h){return r().find(m=>m===h)!==void 0}fe();var u=ye(),_=ue(u);{var g=h=>{var p=e3();We(p,5,()=>s(n()),gt,(m,C)=>{let I=()=>v(C).pos,O=()=>v(C).value;var b=J5();x(b,"font-size",o);const A=Xe(()=>c(O()));var T=q(b,!0);H(b),Z(()=>{x(b,"x",I().x),x(b,"y",I().y),Ot(b,"conflict",v(A)),nt(T,O())}),N(m,b)}),H(p),N(h,p)};_e(_,h=>{n().cornerMarks.length&&h(g)})}N(t,u),ne()}var n3=ae('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),r3=ae('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),o3=ae('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),i3=ae("<!><!>",1),a3=ae('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function s3(t,e){te(e,!1);const n=ze(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(va,"$puzzleStore",n),a=()=>he(Kt,"$toolStore",n),s=D(),c=D(),u=D(),_=D(),g=D(),h=D(),p=D();let m=$(e,"cell",8);const C=.8,I=400;function O(k,Y){if(!k)return[];let K=[...Rv(v(g),Y.toCoords())].map(oe=>oe.value).filter(oe=>oe!==null);return K=[...new Set(K)],K}function b(k){return k?"1":"0"}F(()=>ee(m()),()=>{S(s,m().value)}),F(()=>ee(m()),()=>{S(c,m().given)}),F(()=>ee(m()),()=>{S(u,Zn({r:m().r,c:m().c}))}),F(()=>r(),()=>{S(_,r().highlightPencilmarkConflicts)}),F(()=>o(),()=>{S(g,o())}),F(()=>r(),()=>{S(h,r().showSolution)}),F(()=>(v(_),ee(m())),()=>{S(p,O(v(_),m()))}),ve(),fe();var A=ye(),T=ue(A);{var M=k=>{var Y=a3(),W=q(Y);{var K=de=>{var J=ye(),le=ue(J);{var be=Ce=>{var Ie=n3();x(Ie,"font-size",C),x(Ie,"font-weight",I);var Fe=q(Ie,!0);H(Ie),Z(()=>{x(Ie,"x",v(u).x),x(Ie,"y",v(u).y),nt(Fe,m().region)}),N(Ce,Ie)};_e(le,Ce=>{m().region!==null&&Ce(be)})}N(de,J)},oe=de=>{var J=ye(),le=ue(J);{var be=Ie=>{var Fe=ye(),lt=ue(Fe);{var xe=we=>{var ft=r3();x(ft,"font-size",C),x(ft,"font-weight",I);var ct=q(ft,!0);Z(()=>nt(ct,b(m().fog))),H(ft),Z(()=>{x(ft,"x",v(u).x),x(ft,"y",v(u).y)}),N(we,ft)};_e(lt,we=>{m().fog!==null&&we(xe)})}N(Ie,Fe)},Ce=Ie=>{var Fe=ye(),lt=ue(Fe);{var xe=ft=>{var ct=o3();x(ct,"font-size",C),x(ct,"font-weight",I);var Un=q(ct,!0);H(ct),Z(()=>{x(ct,"x",v(u).x),x(ct,"y",v(u).y),Ot(ct,"given",v(c)),nt(Un,v(s))}),N(ft,ct)},we=ft=>{var ct=i3(),Un=ue(ct);t3(Un,{get cell(){return m()},get seen_values(){return v(p)}});var Lt=U(Un);Q5(Lt,{get cell(){return m()},get seen_values(){return v(p)}}),N(ft,ct)};_e(lt,ft=>{v(s)!==null?ft(xe):ft(we,!1)},!0)}N(Ie,Fe)};_e(le,Ie=>{a()===f.FOG?Ie(be):Ie(Ce,!1)},!0)}N(de,J)};_e(W,de=>{a()===f.REGIONS?de(K):de(oe,!1)})}H(Y),Z(()=>Ot(Y,"hide-given",m().given)),N(k,Y)};_e(T,k=>{v(h)||k(M)})}N(t,A),ne()}var l3=ae("<path></path>"),c3=ae('<g class="highlights-group"></g>');function u3(t,e){te(e,!1);const n=ze(),r=()=>he(Kt,"$toolStore",n);let o=$(e,"cell",8);function a(_){const g=Zn({r:o().r,c:o().c}),h=o().highlights.length;return o().highlights.map((m,C)=>{let I=JR(C,h);I=I.map(b=>b.add(g));const O=wi(I,!0);return{colorId:m,d:O}})}fe();var s=ye(),c=ue(s);{var u=_=>{var g=ye(),h=ue(g);{var p=m=>{var C=c3();We(C,5,()=>a(o()),gt,(I,O)=>{let b=()=>v(O).colorId,A=()=>v(O).d;var T=l3();Z(()=>{Fn(T,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),x(T,"d",A())}),N(I,T)}),H(C),N(m,C)};_e(h,m=>{o().highlights.length&&m(p)})}N(_,g)};_e(c,_=>{r()!==f.REGIONS&&_(u)})}N(t,s),ne()}var d3=ae('<path class="cell-marker" fill="none"></path>'),f3=ae('<circle fill="none" opacity="0.9"></circle>');function _3(t,e){te(e,!1);const n=D(),r=D();let o=$(e,"marker",8);const a=.3,s=.08;F(()=>ee(o()),()=>{S(n,Dv(o(),a))}),F(()=>ee(o()),()=>{S(r,nl(o().colorId,"black"))}),ve(),fe();var c=ye(),u=ue(c);{var _=h=>{var p=d3();x(p,"stroke-width",s),Z(()=>{x(p,"d",v(n)),x(p,"stroke",v(r))}),N(h,p)},g=h=>{var p=f3();x(p,"r",a),x(p,"stroke-width",s),Z(()=>{Fn(p,`cell-marker color-${o().colorId??""}`),x(p,"cx",o().c),x(p,"cy",o().r),x(p,"stroke",v(r))}),N(h,p)};_e(u,h=>{o().marker==="X"?h(_):h(g,!1)})}N(t,c),ne()}var g3=ae('<g class="cell-markers"></g>');function h3(t,e){let n=$(e,"markers",8);var r=g3();We(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,a)=>{_3(o,{get marker(){return v(a)}})}),H(r),N(t,r)}var v3=ae('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function p3(t,e){te(e,!1);const n=D();let r=$(e,"draftLineMarker",8);const o=.2;function a(u){return u.map(g=>[new Te(g.p1.c,g.p1.r),new Te(g.p2.c,g.p2.r)]).flat()}function s(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?nl(_,"black"):"darkred"}F(()=>ee(r()),()=>{S(n,wi(a(r().draftLine)))}),ve(),fe();var c=v3();Z(()=>x(c,"stroke",s(r()))),x(c,"stroke-width",o),x(c,"opacity",.5),Z(()=>x(c,"d",v(n))),N(t,c),ne()}var m3=ae('<path fill="none" opacity="0.9"></path>');function C3(t,e){te(e,!1);const n=D(),r=D();let o=$(e,"marker",8);const a=.08,s=.04;F(()=>ee(o()),()=>{S(n,Dv(o(),a))}),F(()=>ee(o()),()=>{S(r,nl(o().colorId,"black"))}),ve(),fe();var c=m3();x(c,"stroke-width",s),Z(()=>{x(c,"d",v(n)),Fn(c,`edge-marker color-${o().colorId??""}`),x(c,"stroke",v(r))}),N(t,c),ne()}var E3=ae('<g class="edge-markers"></g>');function I3(t,e){let n=$(e,"markers",8);var r=E3();We(r,5,n,o=>`${o.r}, ${o.c}`,(o,a)=>{C3(o,{get marker(){return v(a)}})}),H(r),N(t,r)}var b3=ae('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),w3=ae('<g class="line-markers svelte-yha19m"></g>');function O3(t,e){te(e,!1);let n=$(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function a(c){return nl(c,"black")}fe();var s=w3();We(s,5,n,c=>o(c),(c,u)=>{var _=b3();x(_,"stroke-width",r),Z(()=>x(_,"stroke",a(v(u).colorId))),Z(()=>{x(_,"x1",v(u).p1.c),x(_,"y1",v(u).p1.r),x(_,"x2",v(u).p2.c),x(_,"y2",v(u).p2.r),Fn(_,`line-marker color-${v(u).colorId??""} svelte-yha19m`)}),N(c,_)}),H(s),N(t,s),ne()}var L3=ae('<g class="pen-tool"><!><!><!><!></g>');function y3(t,e){te(e,!1);const n=ze(),r=()=>he(Os,"$penToolStore",n),o=D();F(()=>r(),()=>{S(o,{draftLine:r().draftLine,mode:r().mode})}),ve(),fe();var a=L3(),s=q(a);O3(s,{get lineMarkers(){return r().lineMarkers}});var c=U(s);I3(c,{get markers(){return r().edgeMarkers}});var u=U(c);h3(u,{get markers(){return r().cellMarkers}});var _=U(u);p3(_,{get draftLineMarker(){return v(o)}}),H(a),N(t,a),ne()}var A3=ae('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function x3(t,e){te(e,!1);const n=ze(),r=()=>he(bo,"$selectionStore",n),o=()=>he(Wt,"$settingsStore",n),a=()=>he(va,"$puzzleStore",n),s=()=>he(Kt,"$toolStore",n),c=D(),u=D(),_=D(),g=D(),h={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function p(O,b){return O.length?K5(v(_),O):[]}F(()=>r(),()=>{S(c,r().cells)}),F(()=>o(),()=>{S(u,o().highlightCellsSeenBySelection)}),F(()=>a(),()=>{S(_,a())}),F(()=>s(),()=>{S(g,Vu(s()))}),ve(),fe();var m=ye(),C=ue(m);{var I=O=>{var b=A3(),A=q(b),T=Xe(()=>p(v(c),v(_)));Ts(A,{get cells(){return v(T)},shape:h}),H(b),N(O,b)};_e(C,O=>{v(u)&&v(g)&&O(I)})}N(t,m),ne()}function il(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),o=[...jh(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&o.includes(a.value))),e}function S3(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...il(r))}return new Set(e)}function N3(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...il(r))}return new Set(e)}function D3(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...il(r))}return new Set(e)}function T3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function R3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function k3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function G3(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),a=il(o);a.length&&e.push(...a)}return new Set(e)}function M3(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...S3(t),...N3(t),...D3(t)]);n=n.union(o)}return e.get(f.ANTIKNIGHT)&&(n=n.union(T3(t))),e.get(f.ANTIKING)&&(n=n.union(R3(t))),e.get(f.NONCONSECUTIVE)&&(n=n.union(k3(t))),e.get(f.DISJOINT_GROUPS)&&(n=n.union(G3(t))),n}function F3(t,e){return[...new Set([...M3(t,e)])]}var $3=ae('<rect class="conflict svelte-4mp6ok"></rect>'),U3=ae('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function H3(t,e){te(e,!1);const n=ze(),r=()=>he(Wt,"$settingsStore",n),o=()=>he(sn,"$gridStore",n),a=()=>he(Tr,"$globalConstraintsStore",n),s=()=>he(an,"$cellsStore",n),c=D(),u=D(),_=D(),g=D();B.CAGE;function h(I){return F3(v(u),v(_)).map(A=>A.toCoords())}F(()=>r(),()=>{S(c,r().checkConflicts)}),F(()=>o(),()=>{S(u,o())}),F(()=>a(),()=>{S(_,a())}),F(()=>s(),()=>{S(g,s())}),ve(),fe();var p=ye(),m=ue(p);{var C=I=>{var O=U3();We(O,5,()=>h(v(g)),gt,(b,A)=>{var T=$3();x(T,"width",1),x(T,"height",1),Z(()=>{x(T,"x",v(A).c),x(T,"y",v(A).r)}),N(b,T)}),H(O),N(I,O)};_e(m,I=>{v(c)&&I(C)})}N(t,p),ne()}var P3=ae('<line class="diag svelte-ylotlw"></line>'),B3=ae('<line class="antidiag svelte-ylotlw"></line>'),W3=ae('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),Y3=ae('<line class="diag svelte-ylotlw"></line>'),z3=ae('<line class="antidiag svelte-ylotlw"></line>'),V3=ae('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),j3=ae('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function q3(t,e){te(e,!1);const n=ze(),r=()=>he(Tr,"$globalConstraintsStore",n),o=()=>he(sn,"$gridStore",n),a=D(),s=D(),c=D(),u=D(),_=D(),g=D(),h=D(),p=D(),m=D(),C=D(),I=D(),O=D(),b=0,A=0,T=0,M=0;F(()=>r(),()=>{S(a,r())}),F(()=>(v(a),f),()=>{S(s,!!v(a).get(f.POSITIVE_DIAGONAL))}),F(()=>(v(a),f),()=>{S(c,!!v(a).get(f.NEGATIVE_DIAGONAL))}),F(()=>(v(a),f),()=>{S(u,!!v(a).get(f.NEGATIVE_ANTIDIAGONAL))}),F(()=>(v(a),f),()=>{S(_,!!v(a).get(f.POSITIVE_ANTIDIAGONAL))}),F(()=>(v(a),f),()=>{S(g,!!v(a).get(f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),F(()=>(v(a),f),()=>{S(h,!!v(a).get(f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),F(()=>o(),()=>{S(p,o())}),F(()=>v(p),()=>{S(m,v(p).nCols)}),F(()=>v(p),()=>{S(C,v(p).nRows)}),F(()=>v(p),()=>{S(I,v(p).nCols)}),F(()=>v(p),()=>{S(O,v(p).nRows)}),ve(),fe();var k=j3(),Y=q(k);{var W=xe=>{var we=P3();x(we,"x1",b),x(we,"y1",A),Z(()=>{x(we,"x2",v(I)),x(we,"y2",v(O))}),N(xe,we)};_e(Y,xe=>{v(c)&&xe(W)})}var K=U(Y);{var oe=xe=>{var we=B3();x(we,"x1",b),x(we,"y1",A),Z(()=>{x(we,"x2",v(I)),x(we,"y2",v(O))}),N(xe,we)};_e(K,xe=>{v(u)&&xe(oe)})}var de=U(K);{var J=xe=>{var we=W3();x(we,"x1",b),x(we,"y1",A),Z(()=>{x(we,"x2",v(I)),x(we,"y2",v(O))}),N(xe,we)};_e(de,xe=>{v(g)&&xe(J)})}var le=U(de);{var be=xe=>{var we=Y3();x(we,"x2",M),x(we,"y1",T),Z(()=>{x(we,"x1",v(m)),x(we,"y2",v(C))}),N(xe,we)};_e(le,xe=>{v(s)&&xe(be)})}var Ce=U(le);{var Ie=xe=>{var we=z3();x(we,"x2",M),x(we,"y1",T),Z(()=>{x(we,"x1",v(m)),x(we,"y2",v(C))}),N(xe,we)};_e(Ce,xe=>{v(_)&&xe(Ie)})}var Fe=U(Ce);{var lt=xe=>{var we=V3();x(we,"x2",M),x(we,"y1",T),Z(()=>{x(we,"x1",v(m)),x(we,"y2",v(C))}),N(xe,we)};_e(Fe,xe=>{v(h)&&xe(lt)})}H(k),N(t,k),ne()}var K3=ae('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function X3(t,e){te(e,!1);const n=ze(),r=()=>he(an,"$cellsStore",n),o=()=>he(fv,"$showFogStore",n),a=()=>he(Zs,"$solutionStore",n),s=()=>he(sn,"$gridStore",n),c=D(),u=D(),_=D(),g=D(),h=D(),p=D();let m=$(e,"boundingBox",8),C=$(e,"gridShape",8);function I(be){const Ce=be.filter(we=>we.fog);if(!v(h))return Ce.map(ft=>ft.toCoords());const Ie=be.filter(we=>we.value===v(h)[we.r][we.c]);let Fe=new Set;for(const we of Ie){const ft=v(p).getNeighboorCells(we);Fe=new Set([...ft,we])}return[...new Set(Ce).difference(Fe)].map(we=>we.toCoords())}F(()=>r(),()=>{S(c,r())}),F(()=>v(c),()=>{S(u,I(v(c)))}),F(()=>v(u),()=>{S(_,oi(v(u),0))}),F(()=>o(),()=>{S(g,o())}),F(()=>a(),()=>{S(h,a())}),F(()=>s(),()=>{S(p,s())}),ve(),fe();var O=K3(),b=q(O),A=q(b);H(b);var T=U(b),M=q(T);x(M,"stroke-width",.5);var k=U(M);x(k,"stroke-width",.375);var Y=U(k);x(Y,"stroke-width",.25);var W=U(Y);x(W,"stroke-width",.125),ei(),H(T);var K=U(T),oe=q(K);ei(),H(K);var de=U(K),J=q(de),le=U(J);x(le,"x",0),x(le,"y",0),H(de),H(O),Z(()=>{x(A,"d",v(_)),Ot(T,"disabled",!v(g)),Ot(K,"disabled",!v(g)),x(oe,"x",m().x),x(oe,"y",m().y),x(oe,"width",m().width),x(oe,"height",m().height),x(J,"x",m().x),x(J,"y",m().y),x(J,"width",m().width),x(J,"height",m().height),x(le,"width",C().nCols),x(le,"height",C().nRows)}),N(t,O),ne()}var Z3=ae('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function Q3(t,e){te(e,!1);const n=ze(),r=()=>he(fv,"$showFogStore",n),o=D();let a=$(e,"gridShape",8);F(()=>r(),()=>{S(o,r())}),ve(),fe();var s=Z3(),c=q(s);x(c,"x",0),x(c,"y",0),H(s),Z(()=>{x(s,"visibility",v(o)?"visible":"hidden"),x(c,"width",a().nCols),x(c,"height",a().nRows)}),N(t,s),ne()}var J3=ae('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function eG(t,e){te(e,!1);const n=D();let r=$(e,"r",8),o=$(e,"c",8),a=$(e,"val",8);const s=.8,c=400;F(()=>(ee(r()),ee(o())),()=>{S(n,Zn({r:r(),c:o()}))}),ve(),fe();var u=ye(),_=ue(u);{var g=h=>{var p=J3();x(p,"font-size",s),x(p,"font-weight",c);var m=q(p,!0);H(p),Z(()=>{x(p,"x",v(n).x),x(p,"y",v(n).y),nt(m,a())}),N(h,p)};_e(_,h=>{a()!==null&&h(g)})}N(t,u),ne()}var tG=ae('<g class="solution-layer"></g>');function nG(t,e){te(e,!1);const n=ze(),r=()=>he(Zs,"$solutionStore",n),o=()=>he(Wt,"$settingsStore",n),a=()=>he(Xs,"$gameModeStore",n),s=D(),c=D(),u=D();F(()=>r(),()=>{S(s,r())}),F(()=>o(),()=>{S(c,o().showSolution)}),F(()=>a(),()=>{S(u,a())}),ve(),fe();var _=ye(),g=ue(_);{var h=p=>{var m=tG();We(m,5,()=>v(s),gt,(C,I,O)=>{var b=ye(),A=ue(b);We(A,1,()=>v(I),gt,(T,M,k)=>{eG(T,{r:O,c:k,get val(){return v(M)}})}),N(C,b)}),H(m),N(p,m)};_e(g,p=>{v(s)&&v(c)&&v(u)===Ii.SETTING&&p(h)})}N(t,_),ne()}var rG=ae('<text text-anchor="middle" dominant-baseline="central"> </text>'),oG=ae('<g class="center-corner-or-edge-tool"><!><!></g>');function iG(t,e){te(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=$(e,"centerCornerOrEdgeTool",8);const _=u().cell,g=pn(u().toolId,kt)??yh;function h(b,A){return A===B.TEXT_ONLY?b.value?b.value:"-":b.value??""}F(()=>ee(u()),()=>{S(n,u().shape??g)}),F(()=>{},()=>{S(r,_)}),F(()=>(v(n),B),()=>{var b;S(o,((b=v(n))==null?void 0:b.type)||B.CIRCLE)}),F(()=>v(n),()=>{var b;S(a,((b=v(n))==null?void 0:b.fontSize)??.2)}),F(()=>v(n),()=>{var b;S(s,((b=v(n))==null?void 0:b.fontColor)??"black")}),F(()=>v(r),()=>{S(c,v(r).r%1===.5&&v(r).c%1===.5)}),ve(),fe();var p=oG(),m=q(p);ol(m,{get cx(){return v(r).c},get cy(){return v(r).r},get shape(){return v(n)}});var C=U(m);{var I=b=>{var A=Xe(()=>h(u(),v(o))),T=Xe(()=>Math.floor(v(r).c)),M=Xe(()=>Math.floor(v(r).r));la(b,{get value(){return v(A)},get x(){return v(T)},get y(){return v(M)},position:"TL",get fontColor(){return v(s)}})},O=b=>{var A=rG(),T=q(A,!0);Z(()=>nt(T,h(u(),v(o)))),H(A),Z(()=>{x(A,"x",v(r).c),x(A,"y",v(r).r),x(A,"font-size",v(a)),x(A,"fill",v(s))}),N(b,A)};_e(C,b=>{v(c)?b(I):b(O,!1)})}H(p),N(t,p),ne()}var aG=ae("<g></g>"),sG=ae('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function lG(t,e){te(e,!1);const n=ze(),r=()=>he(BR,"$centerCornerOrEdgeToolsStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve();var a=sG();We(a,5,()=>v(o),gt,(s,c)=>{let u=()=>v(c).toolId,_=()=>v(c).element;var g=aG();We(g,5,()=>Object.entries(_()),h=>h[0],(h,p)=>{iG(h,{get centerCornerOrEdgeTool(){return v(p)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var cG=ae('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function uG(t,e){te(e,!1);const n=ze(),r=()=>he(sn,"$gridStore",n),o=()=>he(rt,"$localConstraintsStore",n),a=()=>he(Kt,"$toolStore",n),s=()=>he(an,"$cellsStore",n),c=D(),u=D(),_=D();let g=$(e,"svgRef",12,null);function h(){for(const[Lt,Ln]of o().entries()){if(!aa(Lt))continue;if(Object.entries(Ln).some(([vr,Jn])=>!qt(Jn.cell,v(u))))return!0}return!1}function p(Lt,Ln){const Xt=h(),vr=aa(Ln),Jn=Xt||vr?1:.2,pr=-Jn,ar=-Jn,Li=Lt.nCols+2*Jn,Gr=Lt.nRows+2*Jn;return{x:pr,y:ar,width:Li,height:Gr}}function m(Lt){return`${Lt.x} ${Lt.y} ${Lt.width} ${Lt.height}`}F(()=>r(),()=>{S(c,r())}),F(()=>v(c),()=>{S(u,{nRows:v(c).nRows,nCols:v(c).nCols})}),F(()=>(v(u),a()),()=>{S(_,p(v(u),a()))}),ve(),fe();var C=cG();Z(()=>x(C,"viewBox",m(v(_))));var I=q(C);X3(I,{get boundingBox(){return v(_)},get gridShape(){return v(u)}});var O=U(I);Q3(O,{get gridShape(){return v(u)}});var b=U(O);Kk(b,{get grid(){return r()}});var A=U(b);Rk(A,{get gridShape(){return v(u)}});var T=U(A);We(T,5,s,gt,(Lt,Ln)=>{u3(Lt,{get cell(){return v(Ln)}})}),H(T);var M=U(T);x3(M,{});var k=U(M);x5(k,{});var Y=U(k);jk(Y,{});var W=U(Y);Sk(W,{});var K=U(W);vk(K,{});var oe=U(K);Mk(oe,{});var de=U(oe);q3(de,{});var J=U(de);Uk(J,{});var le=U(J);p5(le,{get boundingBox(){return v(_)}});var be=U(le);ck(be,{});var Ce=U(be);Pk(Ce,{get boundingBox(){return v(_)}});var Ie=U(Ce);Dk(Ie,{});var Fe=U(Ie);G5(Fe,{});var lt=U(Fe);d5(lt,{});var xe=U(lt);lG(xe,{});var we=U(xe);y3(we,{});var ft=U(we);We(ft,5,s,gt,(Lt,Ln)=>{s3(Lt,{get cell(){return v(Ln)}})}),H(ft);var ct=U(ft);nG(ct,{});var Un=U(ct);H3(Un,{}),H(C),Eo(C,Lt=>g(Lt),()=>g()),N(t,C),ne()}function dG(t){return AL(t)?(Dw(),!0):!1}function fG(t){return xL(t)?(Hh(),!0):!1}function _G(t){return SL(t)?(Ph(),!0):!1}function jc(t){(dG(t)||fG(t)||_G(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var gG=re('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function hG(t,e){te(e,!1);const n=ze(),r=()=>he(_v,"$InputHandlerStore",n),o=()=>he(ri,"$svgRefStore",n),a=D();let s=D(null);function c(p){return m=>{p&&v(a)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===v(s))&&p(m)}}F(()=>r(),()=>{S(a,r())}),ve();var u=gG();De("keydown",kc,function(...p){jc==null||jc.apply(this,p)});var _=fg(()=>{var p;return c((p=v(a))==null?void 0:p.keyDown)});De("keydown",kc,function(...p){var m;(m=v(_))==null||m.apply(this,p)});var g=fg(()=>{var p;return c((p=v(a))==null?void 0:p.keyUp)});De("keyup",kc,function(...p){var m;(m=v(g))==null||m.apply(this,p)});var h=q(u);uG(h,{get svgRef(){return oh(),o()},set svgRef(p){ua(ri,p)},$$legacy:!0}),H(u),Eo(u,p=>S(s,p),()=>v(s)),De("pointerdown",u,$c(Xn(p=>{var m;p.currentTarget.focus(),(m=v(a))==null||m.pointerDown(p)})),!0),De("pointermove",u,$c(Xn(p=>{var m;p.currentTarget.focus(),(m=v(a))==null||m.pointerMove(p)})),!0),De("pointerup",u,$c(Xn(p=>{var m;p.currentTarget.focus(),(m=v(a))==null||m.pointerUp(p)})),!0),N(t,u),ne()}var vG=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function kv(t){var e=vG();N(t,e)}var pG=re('<button class="remove-button svelte-17rdl63"><!></button>');function mG(t,e){let n=$(e,"onTrash",8,()=>{});var r=pG(),o=q(r);kv(o),H(r),De("click",r,Xn(function(...a){var s;(s=n())==null||s.apply(this,a)})),N(t,r)}var CG=re('<input type="radio" class="radio-select-button svelte-3561wl">'),EG=re('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function oa(t,e){var oe,de;te(e,!1);const n=ze(),r=()=>he(Kt,"$toolStore",n),o=[];let a=$(e,"elementInfo",8),s=$(e,"onClick",12,void 0),c=$(e,"onTrash",8,void 0);const u=a().toolId,_=a().permanent??!1,g=((oe=a().menu)==null?void 0:oe.name)??a().toolId,h=!((de=a().meta)!=null&&de.categories.includes(R.GLOBAL_CONSTRAINT)),p=`label-${g}`;h&&s(()=>{Ar(u)});function m(){var Ce,Ie;const J=(Ce=a().meta)==null?void 0:Ce.description,le=((Ie=a().meta)==null?void 0:Ie.usage)??OL(u);let be;return J&&J.length&&(be=J),le.length&&(be?be=be+`

`+le:be=le),be}fe();var C=EG(),I=q(C);{var O=J=>{var le=CG();jt(le),x(le,"id",p),le.value=(le.__value=u)==null?"":u,Gs(o,[],le,()=>r(),be=>ua(Kt,be)),N(J,le)};_e(I,J=>{h&&J(O)})}var b=U(I,2);Z(()=>x(b,"title",m())),x(b,"aria-labelledby",p);var A=q(b),T=q(A),M=q(T);{var k=J=>{mG(J,{get onTrash(){return c()}})};_e(M,J=>{_||J(k)})}H(T);var Y=U(T,2);x(Y,"for",p),Y.textContent=g,H(A);var W=U(A,2),K=q(W);ut(K,e,"default",{}),H(W),H(b),H(C),Z(()=>Ot(C,"checked",u===r())),De("click",b,Xn(function(...J){var le;(le=s())==null||le.apply(this,J)})),N(t,C),ne()}function Gv(t,e){te(e,!1);const n=ze(),r=()=>he(rt,"$localConstraintsStore",n);let o=$(e,"toolId",8),a=$(e,"elementHandlers",8);const s=()=>{WD(o());const u=r().get(o());if(!u)return;const _=cL(o()),g=uL(o(),u),h=da(_,g);on(h)};fe();var c=Xe(()=>Kr(o(),a()));oa(t,{get elementInfo(){return v(c)},onTrash:s}),ne()}var IG=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function bG(t){var e=IG();N(t,e)}var wG=re('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function OG(t,e){te(e,!1);const n=ze(),r=()=>he(ri,"$svgRefStore",n),o=()=>he(rt,"$localConstraintsStore",n),a=()=>he(hr,"$currentConstraintStore",n),s=D();let c=$(e,"constraintId",8),u=$(e,"toolId",8);function _(){zD(c(),u()),r().focus()}function g(){const b=o().getConstraint(u(),c());if(!b)return;const A=Qu(c(),u()),T=Zu(c(),b),M=da(A,T);on(M)}F(()=>a(),()=>{var b;S(s,(b=a())==null?void 0:b.id)}),ve(),fe();var h=wG(),p=q(h),m=q(p);H(p);var C=U(p,2),I=q(C),O=q(I);kv(O),H(I),H(C),H(h),Z(()=>{Ot(h,"active",c()===v(s)),nt(m,`ID: ${c()??""}`)}),De("click",I,Xn(g)),De("click",h,_),N(t,h),ne()}var LG=re('<div class="constraint-list svelte-w5npcu"></div>');function Mv(t,e){te(e,!1);const n=ze(),r=()=>he(rt,"$localConstraintsStore",n),o=()=>he(Kt,"$toolStore",n),a=D();let s=$(e,"toolId",8);F(()=>(r(),ee(s())),()=>{S(a,r().get(s()))}),ve(),fe();var c=ye(),u=ue(c);{var _=g=>{var h=Xe(()=>s()===o());el(g,{get isOpen(){return v(h)},children:(p,m)=>{var C=LG();We(C,5,()=>Object.entries(v(a)),I=>I[0],(I,O)=>{OG(I,{get constraintId(){return v(O)[0]},get toolId(){return s()}})}),H(C),N(p,C)},$$slots:{default:!0}})};_e(u,g=>{v(a)&&Object.entries(v(a)).length&&g(_)})}N(t,c),ne()}var yG=re('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function AG(t,e){te(e,!1);let n=$(e,"searchPattern",12,""),r=$(e,"showModal",8),o=D(null);F(()=>(ee(r()),v(o)),()=>{r()&&v(o)&&v(o).focus()}),ve();var a=yG(),s=U(q(a),2);jt(s),x(s,"spellcheck",!1),Eo(s,c=>S(o,c),()=>v(o)),H(a),qn(s,n),N(t,a),ne()}var xG=re('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function SG(t,e){let n=$(e,"showModal",12),r=$(e,"searchPattern",12,""),o=$(e,"title",8);Rr(t,{get title(){return o()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=xG(),u=q(c);AG(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(p){r(p)},$$legacy:!0});var _=U(u,2),g=q(_),h=q(g);ut(h,e,"default",{}),H(g),H(_),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0})}var NG=re('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),DG=re('<ol class="svelte-cd45on"></ol>'),TG=re("<!> <!>",1);function RG(t,e){te(e,!1);const n=D();let r=$(e,"category",8),o=$(e,"addTool",8),a=$(e,"searchResults",8),s=D(!0);F(()=>(ee(a()),ee(r())),()=>{S(n,a().filter(g=>{var h,p;return(p=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:p.includes(r())}))}),ve(),fe();var c=ye(),u=ue(c);{var _=g=>{var h=TG(),p=ue(h);qr(p,{get title(){return r()},isCollapsible:!0,get isOpen(){return v(s)},set isOpen(C){S(s,C)},$$legacy:!0});var m=U(p,2);el(m,{get isOpen(){return v(s)},children:(C,I)=>{var O=DG();We(O,5,()=>v(n),gt,(b,A)=>{let T=()=>v(A).key,M=()=>v(A).info;var k=NG(),Y=q(k),W=q(Y,!0);H(Y),H(k),Z(()=>{var K;x(Y,"title",(K=M().meta)==null?void 0:K.description),nt(W,T())}),De("click",Y,()=>{o()(T())}),N(b,k)}),H(O),N(C,O)},$$slots:{default:!0}}),N(g,h)};_e(u,g=>{v(n).length&&g(_)})}N(t,c),ne()}function kG(t,e){te(e,!1);const n=D();let r=$(e,"searchPattern",8,""),o=$(e,"addTool",8),a=$(e,"categories",8),s=$(e,"filterFunc",8),c=$(e,"elementHandlers",8);F(()=>(ee(r()),ee(s()),ee(c())),()=>{S(n,sL(r(),s(),c()))}),ve(),fe();var u=ye(),_=ue(u);We(_,1,a,gt,(g,h)=>{RG(g,{get category(){return v(h)},get searchResults(){return v(n)},get addTool(){return o()}})}),N(t,u),ne()}var GG=re('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function al(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8);var o=GG();x(o,"tabindex",0);var a=q(o),s=q(a);ut(s,e,"add-button",{}),H(a);var c=U(a,2),u=q(c),_=q(u);ut(_,e,"title-icon",{}),H(u);var g=U(u);H(c);var h=U(c,2),p=q(h);H(h),H(o),Z(()=>{nt(g,` ${r()??""}`),Ot(p,"open",n())}),De("click",o,()=>n(!n())),De("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,o)}var MG=re('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function FG(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8),o=$(e,"showModal",12);function a(){o(!o())}al(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=MG();De("click",u,Xn(()=>a())),N(s,u)},"title-icon":(s,c)=>{var u=ye(),_=ue(u);ut(_,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var $G=re('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),UG=re('<div class="panel-container svelte-hixu4"><!> <!></div>');function sl(t,e){let n=$(e,"isOpen",8,!0);var r=UG(),o=q(r);ut(o,e,"panel-header",{});var a=U(o,2);el(a,{get isOpen(){return n()},children:(s,c)=>{var u=$G(),_=q(u);ut(_,e,"panel-content",{}),H(u),N(s,u)},$$slots:{default:!0}}),H(r),N(t,r)}var HG=re("<!> <!>",1);function hd(t,e){te(e,!1);let n=$(e,"categories",8),r=$(e,"title",8),o=$(e,"onAddTool",8),a=$(e,"elementHandlerFilterFunc",8),s=$(e,"elementHandlers",8),c=D(!0),u=D(!1),_=D("");const g=h=>{S(u,!1),S(c,!0),o()(h)};fe(),sl(t,{get isOpen(){return v(c)},set isOpen(h){S(c,h)},$$slots:{"panel-header":(h,p)=>{var m=HG(),C=ue(m);FG(C,{get title(){return r()},get isOpen(){return v(c)},set isOpen(O){S(c,O)},get showModal(){return v(u)},set showModal(O){S(u,O)},$$slots:{"title-icon":(O,b)=>{var A=ye(),T=ue(A);ut(T,e,"title-icon",{}),N(O,A)}},$$legacy:!0});var I=U(C,2);SG(I,{get title(){return r()},get showModal(){return v(u)},set showModal(O){S(u,O)},get searchPattern(){return v(_)},set searchPattern(O){S(_,O)},children:(O,b)=>{kG(O,{get searchPattern(){return v(_)},get categories(){return n()},get filterFunc(){return a()},addTool:g,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(h,m)},"panel-content":(h,p)=>{var m=ye(),C=ue(m);ut(C,e,"panel-content",{}),N(h,m)}},$$legacy:!0}),ne()}var PG=re("<!> <!>",1);function BG(t,e){te(e,!1);const n=ze(),r=()=>he(rt,"$localConstraintsStore",n),o=D();let a=$(e,"elementHandlers",8);const s=[R.COSMETIC_TOOL],c=u=>{Fh(u),Ar(u)};F(()=>(r(),R),()=>{S(o,(u,_)=>{var p;const g=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(R.COSMETIC_TOOL))&&!g})}),ve(),fe(),hd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return v(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{bG(u)},"panel-content":(u,_)=>{var g=ye(),h=ue(g);We(h,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let C=()=>v(m)[0];var I=ye(),O=ue(I);{var b=A=>{var T=PG(),M=ue(T);Gv(M,{get toolId(){return C()},get elementHandlers(){return a()}});var k=U(M,2);Mv(k,{get toolId(){return C()}}),N(A,T)};_e(O,A=>{Qw(C())&&A(b)})}N(p,I)}),N(u,g)}}}),ne()}var Fv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Fv||{});const Cs=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),$v=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function WG(t,e){Tr.update(n=>n.setConstraint(t,e))}function YG(t){Tr.update(e=>e.removeConstraint(t))}function zg(t){t.type===Fv.REMOVE_GLOBAL_CONSTRAINT?YG(t.payload):WG(t.payload.tool,t.payload.value)}function hu(t,e){return{execute:()=>{zg(t)},unExecute:()=>{zg(e)}}}var zG=re('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function VG(t,e){let n=$(e,"value",8,!1);var r=zG(),o=q(r);jt(o),H(r),Z(()=>ch(o,n())),N(t,r)}function jG(t,e){te(e,!1);let n=$(e,"toolId",8),r=$(e,"value",8,!1),o=$(e,"elementHandlers",8);const a=()=>{const u=Cs(n(),!r()),_=Cs(n(),r()),g=hu(u,_);on(g)},s=()=>{const u=$v(n()),_=Cs(n(),r()),g=hu(u,_);on(g)};fe();var c=Xe(()=>Kr(n(),o()));oa(t,{get elementInfo(){return v(c)},onClick:a,onTrash:s,children:(u,_)=>{VG(u,{get value(){return r()}})},$$slots:{default:!0}}),ne()}var qG=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function KG(t){var e=qG();N(t,e)}function XG(t,e){te(e,!1);const n=ze(),r=()=>he(Tr,"$globalConstraintsStore",n),o=D();let a=$(e,"elementHandlers",8);const s=eO,c=u=>{const _=Cs(u,!0),g=$v(u),h=hu(_,g);on(h)};F(()=>r(),()=>{S(o,(u,_)=>{var p;const g=!!((p=_.meta)!=null&&p.categories.includes(R.GLOBAL_CONSTRAINT)),h=r().has(u);return g&&!h})}),ve(),fe(),hd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return v(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{KG(u)},"panel-content":(u,_)=>{var g=ye(),h=ue(g);We(h,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let C=()=>v(m)[0],I=()=>v(m)[1];jG(p,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),N(u,g)}}}),ne()}var ZG=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function QG(t){var e=ZG();N(t,e)}var JG=re("<!> <!>",1),eM=re("<!> <!> <!> <!>",1);function tM(t,e){te(e,!1);const n=ze(),r=()=>he(rt,"$localConstraintsStore",n),o=D();let a=$(e,"elementHandlers",8);const s=Jw,c=u=>{Fh(u),Ar(u)};F(()=>(r(),R),()=>{S(o,(u,_)=>{var p;const g=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(R.LOCAL_CONSTRAINT))&&!g})}),ve(),fe(),hd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return v(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{QG(u)},"panel-content":(u,_)=>{var g=eM(),h=ue(g),p=Xe(()=>Kr(f.GIVEN,a()));oa(h,{get elementInfo(){return v(p)}});var m=U(h,2),C=Xe(()=>Kr(f.REGIONS,a()));oa(m,{get elementInfo(){return v(C)}});var I=U(m,2),O=Xe(()=>Kr(f.FOG,a()));oa(I,{get elementInfo(){return v(O)}});var b=U(I,2);We(b,1,()=>r().entries(),([A,T])=>A,(A,T)=>{let M=()=>v(T)[0];var k=ye(),Y=ue(k);{var W=K=>{var oe=JG(),de=ue(oe);Gv(de,{get toolId(){return M()},get elementHandlers(){return a()}});var J=U(de,2);Mv(J,{get toolId(){return M()}}),N(K,oe)};_e(Y,K=>{qw(M())&&K(W)})}N(A,k)}),N(u,g)}}}),ne()}var nM=re('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function qc(t,e){te(e,!1);const n=D();let r=$(e,"value",8),o=$(e,"onChangeCb",8,void 0),a=D(void 0);function s(m){const C=Pc(m);C&&o()&&o()(C)}F(()=>ee(r()),()=>{S(n,r())}),F(()=>(v(n),Pc),()=>{cu(v(n))&&S(a,Pc(v(n)))}),ve(),fe();var c=nM(),u=q(c);const _=Xe(()=>Vh(v(n)));var g=q(u);jt(g),H(u);var h=U(u,2),p=U(q(h),2);jt(p),x(p,"spellcheck",!1),x(p,"maxlength",30),H(h),H(c),Z(()=>{x(u,"style",`--choosen-color: ${v(a)??""}`),Ot(u,"transparent",v(_))}),qn(g,()=>v(n),m=>S(n,m)),De("change",g,()=>s(v(n))),qn(p,()=>v(n),m=>S(n,m)),De("input",p,()=>s(v(n))),N(t,c),ne()}var rM=re('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ia(t,e){let n=$(e,"name",8);var r=rM(),o=q(r),a=q(o,!0);H(o);var s=U(o,2);ut(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var oM=re('<input class="control-slider svelte-1rsuho6" type="range">');function iM(t,e){te(e,!1);let n=$(e,"min",8),r=$(e,"max",8),o=$(e,"value",12),a=$(e,"step",24,()=>(r()-n())/10),s=$(e,"onChangeCb",8,void 0),c=$(e,"onInputCb",8,void 0);fe();var u=oM();jt(u),Z(()=>{x(u,"min",n()),x(u,"max",r()),x(u,"step",a())}),qn(u,o),De("change",u,()=>{s()&&s()(o())}),De("input",u,()=>{c()&&c()(o())}),N(t,u),ne()}function Vr(t,e){let n=$(e,"name",8),r=$(e,"value",12),o=$(e,"min",8),a=$(e,"max",8),s=$(e,"step",24,()=>(a()-o())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);ia(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,g)=>{iM(_,{get min(){return o()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var aM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function sM(t){var e=aM();N(t,e)}var lM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function cM(t){var e=lM();N(t,e)}var uM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function dM(t){var e=uM();N(t,e)}var fM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function _M(t){var e=fM();N(t,e)}var gM=re('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function hM(t,e){te(e,!1);const n=[];let r=$(e,"value",8),o=$(e,"selectedShape",12),a=$(e,"title",8),s=$(e,"updateShapeCb",8,void 0);fe();var c=gM(),u=q(c);jt(u);var _,g=U(u,2);ut(g,e,"default",{}),H(c),Z(()=>{x(c,"title",a()),Ot(c,"active",r()===o()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Gs(n,[],u,()=>(r(),o()),o),De("change",u,()=>s()&&s()(r())),N(t,c),ne()}var vM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function pM(t){var e=vM(),n=q(e);x(n,"cx",480),x(n,"cy",-480),x(n,"rx",480),x(n,"ry",300),H(e),N(t,e)}var mM=re('<div class="icon-wrapper svelte-18euf14"><!></div>'),CM=re('<div class="radio-container svelte-18euf14"></div>');function EM(t,e){te(e,!1);let n=$(e,"name",8),r=$(e,"selectedShape",8),o=$(e,"possibleShapes",8),a=$(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,dM],[B.ELLIPSE,pM],[B.SQUARE,cM],[B.RECTANGLE,sM],[B.POLYGON,_M]]);fe(),ia(t,{get name(){return n()},children:(c,u)=>{var _=CM();We(_,5,o,gt,(g,h)=>{hM(g,{get title(){return v(h)},get value(){return v(h)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(p,m)=>{var C=ye(),I=ue(C);{var O=b=>{var A=mM(),T=q(A);rh(T,()=>s.get(v(h)),(M,k)=>{k(M,{})}),H(A),N(b,A)};_e(I,b=>{s.has(v(h))&&b(O)})}N(p,C)},$$slots:{default:!0}})}),H(_),N(c,_)},$$slots:{default:!0}}),ne()}var IM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function bM(t){var e=IM();N(t,e)}var wM=re('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),OM=re("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function LM(t,e){te(e,!1);const n=ze(),r=()=>he(Kt,"$toolStore",n),o=()=>he(hr,"$currentConstraintStore",n),a=D(),s=D(),c=D();let u=D(!0),_=$(e,"elementHandlers",8);function g(O,b){const A=(O==null?void 0:O.shape)??(b?eu(b):void 0);return zc(A),A}function h(O,b){v(c)&&(rw(c,v(c)[O]=b),zc(v(c)),console.log(v(c)))}function p(){v(s)&&(S(c,eu(v(s))),zc(v(c)))}function m(O){return O&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function C(O){return O&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function I(O){return O&&[B.ELLIPSE,B.RECTANGLE].includes(O)}F(()=>(r(),ee(_())),()=>{S(a,Kr(r(),_()))}),F(()=>v(a),()=>{S(s,v(a).shape)}),F(()=>(o(),v(s)),()=>{var O;S(c,g(((O=o())==null?void 0:O.constraint)??null,v(s)))}),ve(),fe(),sl(t,{get isOpen(){return v(u)},set isOpen(O){S(u,O)},$$slots:{"panel-header":(O,b)=>{al(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return v(u)},set isOpen(A){S(u,A)},$$slots:{"title-icon":(A,T)=>{bM(A)}},$$legacy:!0})},"panel-content":(O,b)=>{var A=ye(),T=ue(A);{var M=k=>{var Y=OM(),W=ue(Y);{var K=Ge=>{var Ee=wM();De("click",Ee,p),N(Ge,Ee)};_e(W,Ge=>{fO(v(s))&&Ge(K)})}var oe=U(W,2);{var de=Ge=>{EM(Ge,{get possibleShapes(){return v(s).allowedTypes},name:"Shape",get selectedShape(){return v(c).type},updateShapeCb:Ee=>h("type",Ee)})};_e(oe,Ge=>{var Ee;v(s).allowedTypes&&v(s).allowedTypes.length&&((Ee=v(c))!=null&&Ee.type)&&Ge(de)})}var J=U(oe,2);{var le=Ge=>{var Ee=Xe(()=>v(s).n.lb??3),Re=Xe(()=>v(s).n.ub??10);Vr(Ge,{name:"Number of Sides",get value(){return v(c).n},get min(){return v(Ee)},get max(){return v(Re)},step:1,onChangeCb:ke=>h("n",ke)})};_e(J,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.n)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.n)!=null&&ke.editable)&&C(v(c).type)&&Ge(le)})}var be=U(J,2);{var Ce=Ge=>{var Ee=Xe(()=>v(s).r.lb??0),Re=Xe(()=>v(s).r.ub??1),ke=Xe(()=>v(s).r.step??.05);Vr(Ge,{name:"Radius",get value(){return v(c).r},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("r",St)})};_e(be,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.r)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.r)!=null&&ke.editable)&&m(v(c).type)&&Ge(Ce)})}var Ie=U(be,2);{var Fe=Ge=>{var Ee=Xe(()=>v(s).width.lb??0),Re=Xe(()=>v(s).width.ub??1),ke=Xe(()=>v(s).width.step??.05);Vr(Ge,{name:"Width",get value(){return v(c).width},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("width",St)})};_e(Ie,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.width)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.width)!=null&&ke.editable)&&I(v(c).type)&&Ge(Fe)})}var lt=U(Ie,2);{var xe=Ge=>{var Ee=Xe(()=>v(s).height.lb??0),Re=Xe(()=>v(s).height.ub??1),ke=Xe(()=>v(s).height.step??.05);Vr(Ge,{name:"Height",get value(){return v(c).height},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("height",St)})};_e(lt,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.height)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.height)!=null&&ke.editable)&&I(v(c).type)&&Ge(xe)})}var we=U(lt,2);{var ft=Ge=>{var Ee=Xe(()=>v(s).angle.lb??0),Re=Xe(()=>v(s).angle.ub??360),ke=Xe(()=>v(s).angle.step??15);Vr(Ge,{name:"Angle",get value(){return v(c).angle},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("angle",St)})};_e(we,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.angle)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.angle)!=null&&ke.editable)&&Ge(ft)})}var ct=U(we,2);{var Un=Ge=>{var Ee=Xe(()=>v(s).inset.lb??0),Re=Xe(()=>v(s).inset.ub??.5),ke=Xe(()=>v(s).inset.step??.01);Vr(Ge,{name:"Inset",get value(){return v(c).inset},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("inset",St)})};_e(ct,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.inset)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.inset)!=null&&ke.editable)&&Ge(Un)})}var Lt=U(ct,2);{var Ln=Ge=>{ia(Ge,{name:"Stroke",children:(Ee,Re)=>{qc(Ee,{get value(){return v(c).stroke},onChangeCb:ke=>h("stroke",ke)})},$$slots:{default:!0}})};_e(Lt,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.stroke)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.stroke)!=null&&ke.editable)&&Ge(Ln)})}var Xt=U(Lt,2);{var vr=Ge=>{var Ee=Xe(()=>v(s).strokeWidth.lb??0),Re=Xe(()=>v(s).strokeWidth.ub??.8),ke=Xe(()=>v(s).strokeWidth.step??.01);Vr(Ge,{name:"Stroke Width",get value(){return v(c).strokeWidth},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("strokeWidth",St)})};_e(Xt,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.strokeWidth)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.strokeWidth)!=null&&ke.editable)&&Ge(vr)})}var Jn=U(Xt,2);{var pr=Ge=>{var Ee=Xe(()=>v(s).strokeDasharray.lb??0),Re=Xe(()=>v(s).strokeDasharray.ub??1),ke=Xe(()=>v(s).strokeDasharray.step??.01);Vr(Ge,{name:"Stroke Dasharray",get value(){return v(c).strokeDasharray},get min(){return v(Ee)},get max(){return v(Re)},get step(){return v(ke)},onChangeCb:St=>h("strokeDasharray",St)})};_e(Jn,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.strokeDasharray)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.strokeDasharray)!=null&&ke.editable)&&Ge(pr)})}var ar=U(Jn,2);{var Li=Ge=>{ia(Ge,{name:"Fill",children:(Ee,Re)=>{qc(Ee,{get value(){return v(c).fill},onChangeCb:ke=>h("fill",ke)})},$$slots:{default:!0}})};_e(ar,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.fill)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.fill)!=null&&ke.editable)&&Ge(Li)})}var Gr=U(ar,2);{var To=Ge=>{ia(Ge,{name:"Font Color",children:(Ee,Re)=>{qc(Ee,{get value(){return v(c).fontColor},onChangeCb:ke=>h("fontColor",ke)})},$$slots:{default:!0}})};_e(Gr,Ge=>{var Ee,Re,ke;((Ee=v(c))==null?void 0:Ee.fontColor)!==void 0&&((ke=(Re=v(s))==null?void 0:Re.fontColor)!=null&&ke.editable)&&Ge(To)})}N(k,Y)};_e(T,k=>{v(s)&&k(M)})}N(O,A)}},$$legacy:!0}),ne()}var yM=re('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ea(t,e){let n=$(e,"clickCb",8),r=$(e,"title",8);var o=yM(),a=q(o),s=q(a);ut(s,e,"default",{}),H(a),H(o),Z(()=>x(o,"title",r())),De("click",o,Xn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,o)}var AM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function xM(t){var e=AM();N(t,e)}var SM=re('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),NM=re('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),DM=re('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function TM(t,e){te(e,!1);const n=ze(),r=()=>he(Dr,"$puzzleMetaStore",n),o=()=>he(Tr,"$globalConstraintsStore",n),a=()=>he(rt,"$localConstraintsStore",n);let s=$(e,"showModal",12,!1),c=D(""),u=D(""),_=D(""),g=D(""),h=D("");function p(){s(!1)}function m(){const b=v(u)?C(v(u)):["Anonymous"],T={title:v(c)?v(c):"Sudoku",authors:b,ruleset:v(_),ctcYoutubeUrl:v(g),ctcUrl:v(h)};PD(T),s(!1)}function C(b){return b.split(/\s*[;]\s*/)}function I(){var Y,W,K,oe;let b="";const A=kt,T=o();!!T.get(f.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[de,J]of T.entries())if(de!==f.SUDOKU_RULES_DO_NOT_APPLY&&J){const le=A[de],be=((Y=le.menu)==null?void 0:Y.name)??le.toolId,Ce=(W=le.meta)==null?void 0:W.description;b+=`**${be}**: ${Ce}

`}const k=a();for(const[de,J]of k.entries())if(Object.keys(J).length>0){const be=A[de],Ce=((K=be.menu)==null?void 0:K.name)??be.toolId,Ie=(oe=be.meta)==null?void 0:oe.description;b+=`**${Ce}**: ${Ie}

`}return b.trim()}function O(){const b=I();S(_,b)}F(()=>(ee(s()),r(),bs),()=>{if(!s()){const b=r().authors;S(c,r().title??""),S(u,b?bs(b,"; ","; "):""),S(_,r().ruleset??""),S(g,r().ctcYoutubeUrl??""),S(h,r().ctcUrl??"")}}),ve(),fe(),Rr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(b){s(b)},children:(b,A)=>{var T=DM(),M=q(T);qr(M,{title:"Title"});var k=U(M,2);jt(k);var Y=U(k,2);qr(Y,{title:"Authors"});var W=U(Y,2);jt(W);var K=U(W,2);qr(K,{title:"Ruleset",children:(Ie,Fe)=>{var lt=SM();De("click",lt,O),N(Ie,lt)},$$slots:{default:!0}});var oe=U(K,2);fw(oe),x(oe,"rows",8);var de=U(oe,2);qr(de,{title:"CTC Link"});var J=U(de,2);jt(J);var le=U(J,2);qr(le,{title:"CTC Youtube Link"});var be=U(le,2);jt(be);var Ce=U(be,2);Qs(Ce,{children:(Ie,Fe)=>{var lt=NM(),xe=ue(lt),we=U(xe,2);De("click",xe,m),De("click",we,p),N(Ie,lt)},$$slots:{default:!0}}),H(T),qn(k,()=>v(c),Ie=>S(c,Ie)),qn(W,()=>v(u),Ie=>S(u,Ie)),qn(oe,()=>v(_),Ie=>S(_,Ie)),qn(J,()=>v(h),Ie=>S(h,Ie)),qn(be,()=>v(g),Ie=>S(g,Ie)),N(b,T)},$$slots:{default:!0},$$legacy:!0}),ne()}var RM=re("<!> <!>",1);function kM(t){let e=D(!1);function n(){S(e,!0)}var r=RM(),o=ue(r);Ea(o,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{xM(s)},$$slots:{default:!0}});var a=U(o,2);TM(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var GM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function MM(t){var e=GM();N(t,e)}var FM=re('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function $M(t,e){te(e,!1);let n=D(null),r=D(null);function o(){var a;(a=v(n))==null||a.click()}F(()=>(v(r),ys),()=>{if(v(r)&&v(r).length){const a=v(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),g=HD(_);console.log(g),jD(g),ys()}},s.onerror=function(){alert(s.error)}}}),ve(),fe(),Ea(t,{title:"Open Puzzle",clickCb:o,children:(a,s)=>{var c=FM(),u=ue(c);MM(u);var _=U(u,2);Eo(_,g=>S(n,g),()=>v(n)),Ow(_,()=>v(r),g=>S(r,g)),N(a,c)},$$slots:{default:!0}}),ne()}var UM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function HM(t){var e=UM();N(t,e)}var PM=re('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Vg(t,e){te(e,!1);let n=$(e,"name",8),r=$(e,"min",8),o=$(e,"max",8),a=$(e,"value",12),s=$(e,"step",24,()=>(o()-r())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);fe();var _=PM(),g=q(_),h=q(g);H(g);var p=U(g,2);jt(p),H(_),Z(()=>{nt(h,`${n()??""}: ${a()??""}`),x(p,"min",r()),x(p,"max",o()),x(p,"step",s())}),qn(p,a),De("change",p,()=>{c()&&c()(a())}),De("input",p,()=>{u()&&u()(a())}),N(t,_),ne()}var BM=re('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),WM=re('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function YM(t,e){te(e,!1);let n=$(e,"showModal",12,!1);const r=4,o=20;let a=D(9),s=D(9),c=D(""),u=D(Mt.range(1,10));function _(){n(!1)}function g(){ys(),VD(v(s),v(a)),n(!1)}function h(C){return C.map(O=>String(O)).join(",")}function p(){const C=Math.min(Math.max(v(s),v(a)),9);S(u,Mt.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&S(u,C.split(",").map(Number))}fe(),Rr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var O=WM(),b=q(O);Vg(b,{name:"Width",min:r,max:o,step:1,onInputCb:p,get value(){return v(a)},set value(W){S(a,W)},$$legacy:!0});var A=U(b,2);Vg(A,{name:"Height",min:r,max:o,step:1,onInputCb:p,get value(){return v(s)},set value(W){S(s,W)},$$legacy:!0});var T=U(A,2),M=Xe(()=>`Allowed Digits: ${h(v(u))}`);qr(T,{get title(){return v(M)}});var k=U(T,2);jt(k),Z(()=>x(k,"placeholder",h(v(u)))),k.disabled=!0;var Y=U(k,2);Qs(Y,{children:(W,K)=>{var oe=BM(),de=ue(oe),J=U(de,2);De("click",de,g),De("click",J,_),N(W,oe)},$$slots:{default:!0}}),H(O),qn(k,()=>v(c),W=>S(c,W)),De("input",k,()=>m(v(c))),N(C,O)},$$slots:{default:!0},$$legacy:!0}),ne()}var zM=re("<!> <!>",1);function VM(t){let e=D(!1);function n(){S(e,!0)}var r=zM(),o=ue(r);Ea(o,{title:"New Puzzle",clickCb:n,children:(s,c)=>{HM(s)},$$slots:{default:!0}});var a=U(o,2);YM(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var jM=ae('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function qM(t){var e=jM();N(t,e)}var KM=re('<button class="modal-button">Cancel</button>'),XM=re('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function ZM(t,e){te(e,!1);const n=ze(),r=()=>he(ri,"$svgRefStore",n),o=()=>he(va,"$puzzleStore",n),a=()=>he(Dr,"$puzzleMetaStore",n),s=D();let c=$(e,"showModal",12,!1);function u(O){const b=getComputedStyle(O);let A="";for(let T of b){const M=b.getPropertyValue(T);M&&(A+=`${T}:${M};`)}return A}function _(O){const b=O.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(O));const A=O.childNodes;for(let T=0;T<A.length;T++){const M=A[T];if(M instanceof Element){const k=_(M);b.replaceChild(k,b.childNodes[T])}}return b}function g(O,b="download.png"){const A=_(O),M=new XMLSerializer().serializeToString(A),k=new Image,Y=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),W=URL.createObjectURL(Y);k.onload=()=>{const K=O.getBoundingClientRect(),oe=K.width,de=K.height,J=document.createElement("canvas"),le=window.devicePixelRatio||1;J.width=oe*le,J.height=de*le;const be=J.getContext("2d");be&&(be.scale(le,le),be.drawImage(k,0,0,oe,de),J.toBlob(Ce=>{if(!Ce)return;const Ie=URL.createObjectURL(Ce),Fe=document.createElement("a");Fe.href=Ie,Fe.download=b,Fe.click(),URL.revokeObjectURL(Ie)}))},k.src=W}function h(O,b="download.svg"){const A=_(O);let M=new XMLSerializer().serializeToString(A);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const k=new Blob([M],{type:"image/svg+xml"}),Y=URL.createObjectURL(k),W=document.createElement("a");W.href=Y,W.download=b,W.click(),URL.revokeObjectURL(Y)}const p=()=>{const O=UD(o());return JSON.stringify(O,null,2)},m=()=>{function O(T,M,k){var Y=document.createElement("a"),W=new Blob([T],{type:k});Y.href=URL.createObjectURL(W),Y.download=M,Y.click(),URL.revokeObjectURL(Y.href)}const b=p(),A=qh(a());O(b,`${A}.json`,"text/plain")};function C(){c(!1)}const I=1;F(()=>r(),()=>{S(s,r())}),ve(),fe(),Rr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(O){c(O)},children:(O,b)=>{var A=XM(),T=q(A),M=q(T),k=q(M),Y=U(k,2),W=U(Y,2);H(M);var K=U(M,2),oe=U(q(K),2),de=q(oe);x(de,"width",400*I),x(de,"height",300*I),H(oe),H(K),H(T);var J=U(T,2);Qs(J,{children:(le,be)=>{var Ce=KM();De("click",Ce,C),N(le,Ce)},$$slots:{default:!0}}),H(A),De("click",k,m),De("click",Y,()=>g(v(s))),De("click",W,()=>h(v(s))),N(O,A)},$$slots:{default:!0},$$legacy:!0}),ne()}var QM=re("<!> <!>",1);function JM(t){let e=D(!1);function n(){S(e,!0)}var r=QM(),o=ue(r);Ea(o,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{qM(s)},$$slots:{default:!0}});var a=U(o,2);ZM(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var e8=re("<!> <!>",1);function t8(t){let e=D(!1);function n(){S(e,!0)}var r=e8(),o=ue(r);Ea(o,{title:"Settings",clickCb:n,children:(s,c)=>{Sv(s)},$$slots:{default:!0}});var a=U(o,2);xv(a,{get showModal(){return v(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var n8=re('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function r8(t){var e=n8(),n=q(e);VM(n);var r=U(n,2);JM(r);var o=U(r,2);$M(o,{});var a=U(o,2);kM(a);var s=U(a,2);t8(s),H(e),N(t,e)}var o8=re('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function i8(t,e){te(e,!1);let n=D(!1);function r(){const o=st(sn),a=[];for(let s=0;s<o.nRows;s++){const c=[];for(let u=0;u<o.nCols;u++){const _=o.getCell(s,u);if(!_)continue;const g=_.value;c.push(g)}a.push(c)}ad(a)}fe(),sl(t,{get isOpen(){return v(n)},set isOpen(o){S(n,o)},$$slots:{"panel-header":(o,a)=>{al(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return v(n)},set isOpen(s){S(n,s)},$$legacy:!0})},"panel-content":(o,a)=>{var s=o8();De("click",s,r),N(o,s)}},$$legacy:!0}),ne()}const a8={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function s8(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],a=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[a,o]};if(o==="<"||o==="<=")return{upper_bound:[a,o]}}if(r=n.exec(t),r){const o=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,o==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function l8(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function c8(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Uv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function u8(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=l8(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=c8(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const a=s8(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=Uv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var pe=(t=>(t.BOARD="board",t.YIN_YANG="yin_yang",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t))(pe||{});function Ft(t,e){return`${e}[${t.r},${t.c}]`}function ll(t,e){return t.map(r=>Ft(r,e))}function Be(t,e){return"["+ll(t,e).join(",")+"]"}function Le(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function qe(t){return t.map(n=>Le(n))}function d8(t){return`values_grid[${t.r},${t.c}]`}function cl(t){return t.map(e=>d8(e))}function mo(t){return`constraint alldifferent([${t.join(",")}]);
`}function At(t,e){return t&&(t=`
% ${e}
`+t),t}function vd(t,e){const n=[Pe.N,Pe.S,Pe.W,Pe.E],r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o);r.push(a)}return r}function pd(t,e,n=void 0){n||(n=[Pe.N,Pe.S,Pe.W,Pe.E]);const r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o),s="["+qe(a).join(",")+"]";r.push(s)}return r}function ul(t,e,n,r){let o="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);o+=c}return o}class f8{constructor(){ge(this,"model_str","");ge(this,"used_vars",new Set)}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=a8){const o=u8(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let a="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];a+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];a+=`constraint ${n} ${_} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return o.type==="var_list"?null:[a,n]}}function _8(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const O=e[I].trim(),b=O.match(r),A=O.match(o),T=O.match(a);if(b||A||T){s={name:(b||A||T)[1],startLine:I,content:[e[I]]},c=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u+=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length,c===0&&u===0&&O.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let M=s.startLine;for(;M>0&&e[M-1].trim().startsWith("%");)M-=1;n[s.name].startLine=M,s=null}}const _=new Set;function g(I){const O=[];for(const b of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${b}\\s*\\(`,"g").test(I)&&O.push(b);return O}for(const I of e)g(I).forEach(b=>_.add(b));const h=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));h.sort((I,O)=>O.start-I.start);const p=[...e];for(const I of h)p.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of p)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function g8(t){let e=t,n=e.length;for(;e=_8(e),e.length!=n;)n=e.length;return e}const jg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function h8(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function v8(t,e){const r=t.grid.getPositiveDiagonal(),o=qe(r);let a=mo(o);return a=`
% Positive Diagonal Constraint
`+a,a}function p8(t,e){const r=t.grid.getNegativeDiagonal(),o=qe(r);let a=mo(o);return a=`
% Negative Diagonal Constraint
`+a,a}function m8(t,e){const r=t.grid.getPositiveDiagonal(),a="["+qe(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function C8(t,e){const r=t.grid.getNegativeDiagonal(),a="["+qe(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function E8(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let g=0;g<u;g++){const h=n.getCell(g,_),p=n.getCell(u,_+(u-g));if(!h||!p)continue;const m=Le(h),C=Le(p),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=O}}return a}function I8(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let g=0;g<u;g++){const h=n.getCell(g,_),p=n.getCell(u,_-(u-g));if(!h||!p)continue;const m=Le(h),C=Le(p),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=O}}return a}function b8(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let a=0;a<o;a++){const s=n.getDisjointGroup(a),_=`constraint alldifferent(${`[${qe(s).join(",")}]`});
`;r+=_}return r}function w8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getNeighboorCells(o).filter(h=>h.r+h.c>=o.r+o.c),c=Le(o),_=`[${qe(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${_});
`;r+=g}return r}function O8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getCellsByKnightMove(o).filter(h=>h.r>=o.r||h.c>=o.c),c=Le(o),_=`[${qe(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${_});
`;r+=g}return r}function L8(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=At(n,`${e}`),n}function y8(t,e){let n="";return n+=`constraint tango_p(board);
`,n=At(n,`${e}`),n}function*io(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function A8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of io(n)){const s=Le(o),c=Le(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function x8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of io(n)){const s=Le(o),c=Le(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function S8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getRow(o.r),c=`[${qe(a).join(",")}]`,u=o.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function N8(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function D8(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function T8(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=At(n,`${e}`),n}function Kc(t,e){const n=t.grid,o=t.localConstraints.get(f.XV);if(!(e===f.ALL_V_GIVEN||e===f.ALL_X_GIVEN||e===f.ALL_XV_GIVEN))return"";const a=[];if(o)for(const c of Object.values(o)){const u=c.cells,_=new Set(u.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),g=c.value;(e===f.ALL_V_GIVEN&&(g==="v"||g==="V")||e===f.ALL_X_GIVEN&&(g==="x"||g==="X")||e===f.ALL_XV_GIVEN)&&a.push(_)}let s="";for(const[c,u]of io(n)){if(a.find(p=>p.has(c)&&p.has(u)))continue;const g=Le(c),h=Le(u);if(e===f.ALL_V_GIVEN){const p=`constraint ${g} + ${h} != 5;
`;s+=p}else if(e===f.ALL_X_GIVEN){const p=`constraint ${g} + ${h} != 10;
`;s+=p}else{const p=`constraint ${g} + ${h} != 5 /\\ (${g} + ${h} != 10);
`;s+=p}}return s=At(s,`${e}`),s}function ii(t,e){const n=[];if(e)for(const r of Object.values(e)){const o=r.cells,a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function R8(t,e){const n=t.grid,o=t.localConstraints.get(f.XY_DIFFERENCES),a=ii(n,o);let s="";for(const[c,u]of io(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const g=Le(c),h=Le(u);let p="";if(c.r==u.r){const I=n.getRow(c.r)[0];p=Le(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];p=Le(I)}if(!p)continue;const m=`constraint abs(${g} - ${h}) != ${p};
`;s+=m}return s=At(s,`${e}`),s}function k8(t,e){const n=t.grid,r=t.localConstraints,o=r.get(f.DIFFERENCE),a=r.get(f.RATIO);let s=ii(n,o);s=[...s,...ii(n,a)];let c=[];o&&(c=Object.values(o).map(g=>g.value).map(g=>g||"1"));const u=[...new Set(c)];let _="";for(const[g,h]of io(n)){if(s.find(I=>I.has(g)&&I.has(h)))continue;const m=Le(g),C=Le(h);for(const I of u){const O=parseInt(I),b=`constraint abs(${m} - ${C}) != ${O};
`;_+=b}}return _=At(_,`${e}`),_}function G8(t,e){const n=t.grid,r=t.localConstraints,o=r.get(f.RATIO),a=r.get(f.DIFFERENCE);let s=ii(n,o);s=[...s,...ii(n,a)];let c=[];o&&(c=Object.values(o).map(g=>g.value).map(g=>g||"2"));const u=[...new Set(c)];let _="";for(const[g,h]of io(n)){if(s.find(I=>I.has(g)&&I.has(h)))continue;const m=Le(g),C=Le(h);for(const I of u){const O=parseInt(I),b=`constraint not ratio_p(${m}, ${C}, ${O});
`;_+=b}}return _=At(_,`${e}`),_}function M8(t,e){const n=t.grid,o=t.localConstraints.get(f.YIN_YANG_KROPKI),a=ii(n,o);let s="";for(const[c,u]of io(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const g=Le(c),h=Le(u),p=Ft(c,pe.YIN_YANG),m=Ft(u,pe.YIN_YANG),C=`constraint not yin_yang_kropki_p(${g}, ${h}, ${p}, ${m});
`;s+=C}return s=At(s,`${e}`),s}function F8(t,e){const n=t.grid,o=t.localConstraints.get(f.YIN_YANG_COUNT_SHADED_CELLS),a=o?Object.values(o):[];function s(u,_){return u.find(g=>g.cell.r===_.r&&g.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=s(a,u),g=_?_.directions:[],h=Le(u),p=[Pe.E,Pe.N,Pe.S,Pe.W];for(const m of p){if(g.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=Be(C,pe.YIN_YANG);c+=`constraint count(${I}, 1) != ${h};
`}}return c=At(c,`${e}`),c}function md(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const o=r.cell,a=t.getCell(o.r,o.c);a&&n.add(a)}return n}function $8(t,e){const n=t.grid,o=t.localConstraints.get(f.INDEXING_COLUMN),a=md(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=n.getRow(c.r),h=`[${qe(_).join(",")}]`,p=c.c+1,m=`constraint not indexing_column_p(${h}, ${p});
`;s+=m}return s=At(s,`${e}`),s}function U8(t,e){const n=t.grid,o=t.localConstraints.get(f.RADAR),a=md(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=Le(c),[g,h,p,m]=pd(n,c),C=`constraint not radar_p(${_}, ${g}, ${h}, ${p}, ${m}, 9);
`;s+=C}return s=At(s,`${e}`),s}function H8(t,e){const n=t.grid,o=t.localConstraints.get(f.NURIMISAKI_UNSHADED_ENDPOINTS),a=md(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,p=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;s+=p}return s=At(s,`${e}`),s}function P8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of io(n)){const s=Le(o),c=Le(a),u=`nurimisaki[${o.r},${o.c}]`,_=`nurimisaki[${a.r},${a.c}]`,g=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=g}return r}function B8(t,e){const n=t.grid,o=t.localConstraints.get(f.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let a=`
% ${e}
`;for(const s of Object.values(o)){const u=s.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),_=Be(u,pe.YIN_YANG);a+=`constraint count_unique_values(${_}) >= 2;
`}return a}function W8(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=At(n,`${e}`),n}function Y8(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=At(n,`${e}`),n}function z8(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=At(n,`${e}`),n}function V8(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=At(n,`${e}`),n}function j8(t,e){let n="";return n+=`constraint not_fully_shaded_or_unshaded_2x2_p(cave_shading);
`,n=At(n,`${e}`),n}function q8(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=At(n,`${e}`),n}function K8(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=At(n,`${e}`),n}function X8(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=At(n,`${e}`),n}function Z8(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=At(n,`${e}`),n}function Q8(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=At(n,`${e}`),n}function J8(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const a=r.getNeighboorCells(o).filter(_=>o.region!==null&&_.region===o.region),s=Ft(o,pe.BOARD),c=Ft(o,pe.YIN_YANG),u=Be(a,pe.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=At(n,`${e}`),n}function e6(t){const e=t.globalConstraints;if(e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),_=qe(u),g=mo(_);r+=g}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),_=qe(u),g=mo(_);r+=g}if(!e.get(f.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),g=qe(_),h=mo(g);r+=h}}return r}function t6(t){const e=f.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const n6=new Map([[f.POSITIVE_DIAGONAL,v8],[f.NEGATIVE_DIAGONAL,p8],[f.POSITIVE_ANTIDIAGONAL,m8],[f.NEGATIVE_ANTIDIAGONAL,C8],[f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,E8],[f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,I8],[f.ANTIKING,w8],[f.ANTIKNIGHT,O8],[f.ANTI_GIRAFFE,L8],[f.DISJOINT_GROUPS,b8],[f.TANGO,y8],[f.NONCONSECUTIVE,A8],[f.NONRATIO,x8],[f.GLOBAL_INDEXING_COLUMN,S8],[f.ALL_V_GIVEN,Kc],[f.ALL_X_GIVEN,Kc],[f.ALL_XV_GIVEN,Kc],[f.ALL_DIFFERENCES_GIVEN,k8],[f.ALL_RATIOS_GIVEN,G8],[f.ALL_XY_DIFFERENCES_GIVEN,R8],[f.ALL_YIN_YANG_KROPKI_GIVEN,M8],[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,F8],[f.ALL_INDEXING_COLUMN_GIVEN,$8],[f.ALL_RADARS_GIVEN,U8],[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,H8],[f.NURIMISAKI_PATH_GERMAN_WHISPERS,P8],[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,B8],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,T8],[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,N8],[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,D8],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,W8],[f.CAVE_CELLS_ARE_ODD,z8],[f.CAVE_WALLS_ARE_EVEN,V8],[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,j8],[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,q8],[f.YIN_YANG_FILLOMINO_PARITY,Y8],[f.TWO_SYMMETRIC_GALAXIES,Z8],[f.EVERY_CELL_BELONGS_TO_A_GALAXY,K8],[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,X8],[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Q8],[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,J8]]);function r6(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=n6.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Hv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return qe(r)}function Pv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${qe(n.slice(1)).join(",")}]`}function o6(t,e,n,r){let o="";const a=Hv(e,r),s=`arrow_${n}`;if(o+=`var int: ${s};
`,o+=`% arrow pill
`,a.length===1){const u=a[0];o+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((_,g)=>`${Math.pow(10,g)}*${_}`).join(" + ");o+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;o+=`% arrow lines
`;for(const u of c){const g=`constraint sum(${Pv(e,u)}) == ${s};
`;o+=g}return o}function i6(t,e,n,r){let o="";const a=Hv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${Pv(e,u)}, ${s});
`;o+=g}}return o}const a6=new Map([[f.ARROW,o6],[f.AVERAGE_ARROW,i6]]);function s6(t,e,n,r){let o="";const a=a6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Zr(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return qe(r)}function Bv(t,e,n){const o=`[${Zr(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function dl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Cd(t,e,n,r,o){const s=`[${Zr(e,r).join(",")}]`,c=r.value,u=dl(t,c,n);if(!u)return"";const _=u[1];let g=u[0];return g+=`constraint ${o}(${s}, ${_});
`,g}function l6(t,e,n,r){const o=Zr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return mo(o);const c=dl(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${a}, ${u});
`,_}function c6(t,e,n,r){const o=Zr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return mo(o);const c=dl(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${a}, ${u});
`,_}function u6(t,e,n,r){return Cd(t,e,n,r,"sum_cage_p")}function d6(t,e,n,r){return Bv(e,r,"parity_balance_cage_p")}function f6(t,e,n,r){return Bv(e,r,"sum_cage_look_and_say_p")}function _6(t,e,n,r){return Cd(t,e,n,r,"divisible_killer_cage_p")}function g6(t,e,n,r){return Cd(t,e,n,r,"spotlight_cage_p")}function h6(t,e,n,r){const a=`[${Zr(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function v6(t,e,n,r){const a=`[${Zr(e,r).join(",")}]`,s=r.value;let c="";const u=dl(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const g=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),h=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!h.includes(I)&&h.push(I)});const p=Be(h,pe.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${p});
`,c}function Wv(t,e,n,r,o){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),u=`[${qe(s).join(",")}]`,_=Be(s,pe.YIN_YANG),g=r.value;if(g){const h=parseInt(g);return`constraint ${o}(${u}, ${_}, ${h});
`}return""}function p6(t,e,n,r){return Wv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function m6(t,e,n,r){return Wv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function C6(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${qe(a).join(",")}]`,_=`[${cl(a).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint doublers_killer_cage_p(${c}, ${_}, ${h});
`}return""}function E6(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${qe(a).join(",")}]`,_=`[${cl(a).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint negators_killer_cage_p(${c}, ${_}, ${h});
`}return""}function I6(t,e){let n="";const r=new Map;for(const o of e){const a=o.value,s=r.get(a);if(!s){r.set(a,[o]);continue}s.push(o)}for(const o of r.values())if(!(o.length<=1))for(const[a,s]of o.flatMap((c,u)=>o.slice(u+1).map(_=>[c,_]))){const u=`[${Zr(t,a).join(",")}]`,g=`[${Zr(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${g});
`}return n}const b6=new Map([[f.KILLER_CAGE,l6],[f.INVERTED_KILLER_CAGE,c6],[f.SUM_CAGE,u6],[f.PARITY_BALANCE_CAGE,d6],[f.SUM_CAGE_LOOK_AND_SAY,f6],[f.DIVISIBLE_KILLER_CAGE,_6],[f.SPOTLIGHT_CAGE,g6],[f.UNIQUE_DIGITS_CAGE,h6],[f.VAULTED_CAGE,v6],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,p6],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,m6],[f.DOUBLERS_KILLER_CAGE,C6],[f.NEGATORS_KILLER_CAGE,E6]]);function w6(t,e,n,r){let o="";const a=b6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}else if(n===f.MULTISET_CAGE){const s=Object.values(r),c=I6(e,s);o+=c}return o}function O6(t,e,n,r){const o=e.r+.5,a=e.c+.5,s=n-o,c=r-a,u=Math.floor(n+s),_=Math.floor(r+c);return t.getCell(u,_)}function L6(t,e){const n=[],r=[],o=[];for(const a of t.getAllCells()){const s=O6(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||o.push(a)}return[n,r,o]}function y6(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,g=c+1,[h,p,m]=L6(e,_),C=Be(h,pe.GALAXY_REGIONS),I=Be(p,pe.GALAXY_REGIONS),O=Be(m,pe.GALAXY_REGIONS);r+=`% galaxy ${g}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${O}, ${g});
`,r+=`constraint connected_region(${pe.GALAXY_REGIONS}, ${g});
`;const b=u.value;if(!b)continue;const A=parseInt(b);r+=`constraint galaxy_sum_p(${pe.BOARD}, ${pe.GALAXY_REGIONS}, ${A}, ${g});
`}if(!n.length)return r;const o=e.nCols*e.nRows,s=`${n.length+1}..${o}`;return r+=`
constraint order_remaining_galaxies_p(${pe.GALAXY_REGIONS}, ${s});
`,r}const A6=new Map([[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,y6]]);function x6(t,e,n,r){let o="";const a=A6.get(n);if(a){const s=Object.values(r),c=a(t,e,s);o+=c}return o}function qg(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return qe(n)}function S6(t,e){const r="["+qg(t,e.cells).join(",")+"]",a="["+qg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const N6=new Map([[f.CLONE_REGION,S6]]);function D6(t,e,n,r){return ul(e,n,r,N6)}function Ed(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return qe(r)}function Id(t,e,n){const o=`[${Ed(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function Yv(t,e,n,r=""){const a=`[${Ed(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function T6(t,e,n,r){const a=`[${Ed(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=Uv(s);if(!c)return"";let u="";for(const g of c){const h=parseInt(g);Number.isNaN(h)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${_});
`,u}function R6(t,e,n,r){return Yv(e,r,"corner_sum_p")}function k6(t,e,n,r){return Yv(e,r,"corner_even_count_p")}function G6(t,e,n,r){return Id(e,r,"corner_sum_of_three_equals_the_other_p")}function M6(t,e,n,r){return Id(e,r,"equal_diagonal_differences_p")}function F6(t,e,n,r){return Id(e,r,"product_square_p")}const $6=new Map([[f.QUADRUPLE,T6],[f.CORNER_SUM,R6],[f.CORNER_EVEN_COUNT,k6],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,G6],[f.PRODUCT_SQUARE,F6],[f.EQUAL_DIAGONAL_DIFFERENCES,M6]]);function U6(t,e,n,r){let o="";const a=$6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function bd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return qe(r)}function H6(t,e,n){const r=bd(t,e),[o,a]=r;return`constraint ${n}(${o}, ${a});
`}function P6(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function fl(t,e,n,r,o,a=""){var m;const s=bd(e,r),[c,u]=s,_=(m=r.value)!=null&&m.length?r.value:a,g=P6(t,_,n);if(!g)return"";const h=g[1];let p=g[0];return p+=`constraint ${o}(${c}, ${u}, ${h});
`,p}function B6(t,e,n,r){const o=bd(e,r),[a,s]=o;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function W6(t,e,n,r){return fl(t,e,n,r,"ratio_p","2")}function Y6(t,e,n,r){return fl(t,e,n,r,"abs_difference","1")}function z6(t,e,n,r){return fl(t,e,n,r,"edge_sum_p")}function V6(t,e,n,r){return fl(t,e,n,r,"edge_modulo_p")}function j6(t,e,n,r){return H6(e,r,"edge_factor_p")}function q6(t,e,n,r){const a=r.cells.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p),[s,c]=qe(a),[u,_]=a;let g="";if(u.r==_.r){const m=e.getRow(u.r)[0];g=Le(m)}else if(u.c==_.c){const m=e.getCol(u.c)[0];g=Le(m)}return g?`constraint abs(${s} - ${c}) == ${g};
`:""}function K6(t,e,n,r){const a=r.cells.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p),[s,c]=qe(a),u=ll(a,pe.YIN_YANG),[_,g]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${_}, ${g});
`}function X6(t,e,n,r){const a=r.cells.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p),[s,c]=qe(a),u=ll(a,pe.YIN_YANG),[_,g]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${_}, ${g});
`}const Z6=new Map([[f.XV,B6],[f.DIFFERENCE,Y6],[f.RATIO,W6],[f.EDGE_SUM,z6],[f.EDGE_MODULO,V6],[f.EDGE_FACTOR,j6],[f.XY_DIFFERENCES,q6],[f.YIN_YANG_KROPKI,K6],[f.YIN_YANG_WHITE_KROPKI,X6]]);function Q6(t,e,n,r){let o="";const a=Z6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Oi(t,e,n=!1){let o=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(o=[...new Set(o)]),qe(o)}function pt(t,e,n,r=!1){const a=`[${Oi(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function kr(t,e,n,r=""){const a=`[${Oi(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function wd(t,e,n){let o=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const c=`[${qe(o).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${a});
`}function J6(t,e,n){return pt(t,n,"renban",!0)}function e4(t,e,n){return pt(t,n,"double_renban_p",!0)}function t4(t,e,n){return pt(t,n,"renrenbanban_p",!0)}function n4(t,e,n){return pt(t,n,"knabner_p",!0)}function r4(t,e,n){return pt(t,n,"renban_or_nabner_line_p",!0)}function o4(t,e,n){return pt(t,n,"out_of_order_consecutive_line_p")}function i4(t,e,n){const o=`[${Oi(t,n).join(",")}]`,a=n.value,s=a?parseInt(a):5;return`constraint whispers(${o}, ${s});
`}function a4(t,e,n){return`constraint whispers(${`[${Oi(t,n).join(",")}]`}, 4);
`}function s4(t,e,n){return pt(t,n,"strictly_increasing")}function l4(t,e,n){return pt(t,n,"fuzzy_thermo_p")}function c4(t,e,n){return pt(t,n,"increasing")}function u4(t,e,n){return pt(t,n,"palindrome")}function d4(t,e,n){return kr(t,n,"sum_line_p")}function f4(t,e,n){return pt(t,n,"xv_line_p")}function _4(t,e,n){return kr(t,n,"at_least_x_line_p","10")}function g4(t,e,n){return kr(t,n,"product_line_p")}function h4(t,e,n){return kr(t,n,"maximum_adjacent_difference_line_p","2")}function v4(t,e,n){return pt(t,n,"adjacent_multiples_line_p")}function p4(t,e,n){return pt(t,n,"index_line_p")}function m4(t,e,n){return pt(t,n,"zipper_line_p")}function C4(t,e,n){return wd(t,n,"segmented_sum_line_p")}function E4(t,e,n){return wd(t,n,"n_consecutive_renban_line_p")}function I4(t,e,n){return wd(t,n,"n_consecutive_fuzzy_sum_line_p")}function b4(t,e,n){const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u);let a="";const s=[];for(let u=0;u<o.length;u++){const _=o[u],g=t.getRow(_.r),h=Be(g,pe.BOARD),p=`cycle_${e}_${u}`;s.push(p);const m=_.c+1;a+=`var int: ${p} = cycle_order_f(${h}, ${m});
`}const c="["+s.join(",")+"]";return a+=`constraint strictly_increasing(${c});
`,a}function w4(t,e,n){return pt(t,n,"adjacent_differences_count_line_p")}function O4(t,e,n){return pt(t,n,"same_parity_line_p")}function L4(t,e,n){return kr(t,n,"renban_or_whispers_p","5")}function y4(t,e,n){return pt(t,n,"alldifferent",!0)}function A4(t,e,n){return pt(t,n,"repeated_digits_line_p")}function x4(t,e,n){return pt(t,n,"superfuzzy_arrow_p")}function S4(t,e,n){return pt(t,n,"headless_arrow_p")}function N4(t,e,n){return kr(t,n,"unimodular_line_p","3")}function D4(t,e,n){return kr(t,n,"modular_line_p","3")}function T4(t,e,n){return kr(t,n,"modular_or_unimodular_line_p","3")}function R4(t,e,n){return pt(t,n,"arithmetic_sequence_line_p")}function k4(t,e,n){return pt(t,n,"odd_even_oscillator_line_p")}function G4(t,e,n){return kr(t,n,"high_low_oscillator_line_p","5")}function M4(t,e,n){return pt(t,n,"look_and_say_line_p",!0)}function F4(t,e,n){const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h);function a(h){const p=[];let m=null;for(const C of h)C.r!=m?(p.push([C]),m=C.r):p[p.length-1].push(C);return p}const s=a(o);if(s.length<2)return"";const c=s[0],_=`[${qe(c).join(",")}]`;let g="";for(let h=1;h<s.length;h++){const p=s[h],C=`[${qe(p).join(",")}]`;g+=`constraint sum(${C}) == sum(${_});
`}return g}function $4(t,e,n){return pt(t,n,"between_line_p")}function U4(t,e,n){return pt(t,n,"tightrope_line_p")}function H4(t,e,n){return pt(t,n,"double_arrow_p")}function P4(t,e,n){return pt(t,n,"split_peas_p")}function B4(t,e,n){return pt(t,n,"parity_count_line_p")}function W4(t,e,n){return pt(t,n,"product_of_ends_equals_sum_of_line_p")}function Y4(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const a=o.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(o),n=a}return r.length&&e.push(r),e}function z4(t,e,n){let r="";const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=Y4(a);if(!s.length)return"";const c=`sum_line_${e}`;r+=`var int: ${c};
`;for(const u of s){const h=`constraint sum(${`[${qe(u).join(",")}]`}) == ${c};
`;r+=h}return r}function V4(t,e,n){return`constraint entropic_line_p(${`[${Oi(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function j4(t,e,n){return`constraint entropic_or_modular_line_p(${`[${Oi(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function q4(t,e,n){const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),s=`[${qe(o).join(",")}]`,c=Be(o,pe.YIN_YANG);let u=n.value;u||(u="5");const _=parseInt(u);return`constraint yin_yang_shaded_whispers_line_p(${s}, ${c}, ${_});
`}function K4(t,e,n){const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),s=`[${qe(o).join(",")}]`,c=Be(o,pe.YIN_YANG);let u=n.value;u||(u="3");const _=parseInt(u);return`constraint yin_yang_unshaded_modular_line_p(${s}, ${c}, ${_});
`}function Od(t,e,n){const o=e.cells.map(_=>t.getCell(_.r,_.c)).filter(_=>!!_),s=`[${qe(o).join(",")}]`,c=Be(o,pe.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function X4(t,e,n){return Od(t,n,"yin_yang_unshaded_entropic_line_p")}function Z4(t,e,n){return Od(t,n,"yin_yang_indexing_line_coloring_p")}function Q4(t,e,n){return Od(t,n,"yin_yang_region_sum_line_p")}function J4(t,e,n){const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),a=Be(o,pe.VALUES_GRID),s=Be(o,pe.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${s});
`}function Ld(t,e,n){const o=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${cl(o).join(", ")}]`;return`constraint ${n}(${s});
`}function eF(t,e,n){return Ld(t,n,"between_line_p")}function tF(t,e,n){return Ld(t,n,"double_arrow_p")}function nF(t,e,n){return Ld(t,n,"strictly_increasing")}const rF=new Map([[f.THERMOMETER,s4],[f.FUZZY_THERMOMETER,l4],[f.SLOW_THERMOMETER,c4],[f.RENBAN_LINE,J6],[f.DOUBLE_RENBAN_LINE,e4],[f.RENRENBANBAN_LINE,t4],[f.NABNER_LINE,n4],[f.WHISPERS_LINE,i4],[f.DUTCH_WHISPERS,a4],[f.RENBAN_OR_WHISPERS_LINE,L4],[f.RENBAN_OR_NABNER_LINE,r4],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,o4],[f.N_CONSECUTIVE_RENBAN_LINE,E4],[f.PALINDROME,u4],[f.SUM_LINE,d4],[f.PRODUCT_LINE,g4],[f.XV_LINE,f4],[f.AT_LEAST_X_LINE,_4],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,h4],[f.SAME_PARITY_LINE,O4],[f.ADJACENT_MULTIPLES_LINE,v4],[f.ADJACENT_DIFFERENCES_COUNT_LINE,w4],[f.LOOK_AND_SAY_LINE,M4],[f.ROW_SUM_LINE,F4],[f.INDEX_LINE,p4],[f.ZIPPER_LINE,m4],[f.SEGMENTED_SUM_LINE,C4],[f.N_CONSECUTIVE_FUZZY_SUM_LINE,I4],[f.SUPERFUZZY_ARROW,x4],[f.HEADLESS_ARROW,S4],[f.ARITHMETIC_SEQUENCE_LINE,R4],[f.ODD_EVEN_OSCILLATOR_LINE,k4],[f.HIGH_LOW_OSCILLATOR_LINE,G4],[f.UNIQUE_VALUES_LINE,y4],[f.REPEATED_DIGITS_LINE,A4],[f.UNIMODULAR_LINE,N4],[f.MODULAR_LINE,D4],[f.MODULAR_OR_UNIMODULAR_LINE,T4],[f.REGION_SUM_LINE,z4],[f.ENTROPIC_LINE,V4],[f.ENTROPIC_OR_MODULAR_LINE,j4],[f.ROW_CYCLE_THERMOMETER,b4],[f.BETWEEN_LINE,$4],[f.TIGHTROPE_LINE,U4],[f.DOUBLE_ARROW_LINE,H4],[f.SPLIT_PEAS,P4],[f.PARITY_COUNT_LINE,B4],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,W4],[f.DOUBLERS_THERMOMETER,nF],[f.DOUBLERS_BETWEEN_LINE,eF],[f.DOUBLERS_DOUBLE_ARROW_LINE,tF],[f.YIN_YANG_SHADED_WHISPERS_LINE,q4],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,X4],[f.YIN_YANG_UNSHADED_MODULAR_LINE,K4],[f.YIN_YANG_REGION_SUM_LINE,Q4],[f.YIN_YANG_INDEXING_LINE_COLORING,Z4],[f.GOLDILOCKS_ZONE_REGION_SUM,J4]]);function oF(t,e,n,r){let o="";const a=rF.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(e,s,c);o+=u}return o}function yd(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return qe(o)}function Ad(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,o)}function Qn(t,e,n,r){const o=n.cell,a=e.getCell(o.r,o.c),c=`[${yd(e,n).join(",")}]`,u=n.value,_=Ad(t,u,o,a);if(!_)return"";const g=_[1];let h=_[0];return h+=`constraint ${r}(${c}, ${g});
`,h}function iF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${yd(e,r).join(",")}]`,u=r.value,_=Math.min(e.nCols,e.nRows),g=Ad(t,u,o,a);if(!g)return"";const h=g[1];let p=g[0];return p+=`constraint sandwich_sum_p(${c}, ${h}, 1, ${_});
`,p}function aF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=yd(e,r),c=`[${s.join(",")}]`,u=s[0],_=r.value,g=Ad(t,_,o,a);if(!g)return"";const h=g[1];let p=g[0];return p+=`constraint x_index_p(${c}, ${u}, ${h});
`,p}function sF(t,e,n,r){return Qn(t,e,r,"x_sum_p")}function lF(t,e,n,r){return Qn(t,e,r,"shortsighted_x_sum_p")}function cF(t,e,n,r){return Qn(t,e,r,"broken_x_sum_p")}function uF(t,e,n,r){return Qn(t,e,r,"shifted_x_sum_p")}function dF(t,e,n,r){return Qn(t,e,r,"skyscrapers_p")}function fF(t,e,n,r){return Qn(t,e,r,"x_sum_skyscrapers_p")}function _F(t,e,n,r){return Qn(t,e,r,"battlefield_p")}function gF(t,e,n,r){return Qn(t,e,r,"rising_streak_p")}function hF(t,e,n,r){return Qn(t,e,r,"outside_consecutive_sum_p")}function vF(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${qe(s).join(",")}]`,_=Be(s,pe.CELL_CENTER_LOOP),g=r.value;if(g){const h=parseInt(g);return`constraint loopwhiches_p(${u}, ${_}, ${h});
`}return""}function pF(t,e,n,r){return Qn(t,e,r,"little_killer_sum_p")}function mF(t,e,n,r){return Qn(t,e,r,"little_killer_product_p")}function CF(t,e,n,r){return Qn(t,e,r,"x_omit_little_killer_sum_p")}function EF(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${qe(s).join(",")}]`,_=Be(s,pe.YIN_YANG),g=r.value;if(g){const h=parseInt(g);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${_}, ${h});
`}return""}function IF(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${cl(s).join(", ")}]`,_=r.value;if(_){const g=parseInt(_);return`constraint little_killer_sum_p(${u}, ${g});
`}return""}const bF=new Map([[f.SANDWICH_SUM,iF],[f.X_SUM,sF],[f.SHORTSIGHTED_X_SUM,lF],[f.BROKEN_X_SUM,cF],[f.SHIFTED_X_SUM,uF],[f.SKYSCRAPERS,dF],[f.X_SUM_SKYSCRAPERS,fF],[f.X_INDEX,aF],[f.BATTLEFIELD,_F],[f.RISING_STREAK,gF],[f.OUTSIDE_CONSECUTIVE_SUM,hF],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,EF],[f.LOOPWICHES,vF],[f.LITTLE_KILLER_SUM,pF],[f.LITTLE_KILLER_PRODUCT,mF],[f.X_OMIT_LITTLE_KILLER_SUM,CF],[f.NEGATORS_LITTLE_KILLER_SUM,IF]]);function wF(t,e,n,r){let o="";const a=bF.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function OF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let a=t.getCellsInDirection(r.r,r.c,o);a=[r,...a];const s=Be(a,pe.SASHIGANE),c=Be(a,pe.SASHIGANE_BENDS),u=Le(r),_=Ft(r,pe.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${s}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function LF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,a=t.getCellsInDirection(r.r,r.c,o),c="["+qe(a).join(",")+"]",u=Be(a,pe.CELL_CENTER_LOOP),_=Le(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const yF=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,OF],[f.THERMO_SIGHTLINE_LOOP_ARROW,LF]]);function AF(t,e,n,r){return ul(e,n,r,yF)}function zv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Le(o);return`constraint ${n}(${a});
`}function Vv(t,e,n,r=""){const o=e.cell,a=t.getCell(o.r,o.c);if(!a)return"";const s=Le(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function xF(t,e,n,r){return zv(e,r,"odd_p")}function SF(t,e,n,r){return zv(e,r,"even_p")}function NF(t,e,n,r){return Vv(e,r,"low_digit_p","5")}function DF(t,e,n,r){return Vv(e,r,"high_digit_p","5")}function jv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Le(o),s=t.getNeighboorCells(o),c=Be(s,pe.BOARD);return`constraint ${n}(${c}) == ${a};
`}function TF(t,e,n,r){return jv(e,r,"odd_count")}function RF(t,e,n,r){return jv(e,r,"even_count")}function kF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getNeighboorCells(a),u=Be(c,pe.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function GF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${Be(c,pe.BOARD)}, ${s});
`}function MF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${Be(c,pe.BOARD)}, ${s});
`}function FF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getRow(a.r),c=Be(s,pe.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function $F(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getCol(a.c),c=Be(s,pe.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function UF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=a.r+1,u=a.c+1;if(a.region!==null){const g=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${g};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function HF(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const s=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),_=e.getCell(o.r,o.c+1);if(!s||!c||!u||!_)return"";const g=Le(s),h=Le(c),p=Le(u),m=Le(_);return`constraint groups_opposite_parity_p([${g},${h}], [${p},${m}]);
`}function xd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Le(o),[s,c,u,_]=pd(t,o);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${_});
`}function PF(t,e,n,r){return xd(e,r,"is_watchtower_p")}function BF(t,e,n,r){return xd(e,r,"is_not_watchtower_p")}function WF(t,e,n,r){return xd(e,r,"farsight_p")}function YF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),[c,u,_,g]=pd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${_}, ${g}, 9);
`}function zF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getRow(a.r),u="["+qe(c).join(",")+"]",_=e.getCol(a.c),g="["+qe(_).join(",")+"]",[h,p]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${g}, ${h}, ${p}, ${s});
`}function qv(t,e,n){let r="";const o=e.map(s=>s.cell),a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));for(const s of e){const c=s.cell,u=t.getCell(c.r,c.c);if(!u)continue;const _=Le(u),g=t.getOrthogonallyAdjacentCells(u).filter(m=>!a.has(m)),h=Be(g,pe.BOARD),p=`constraint ${n}(${h}, ${_});
`;r+=p}return r}function VF(t,e){return qv(t,e,"maximum_p")}function jF(t,e){return qv(t,e,"minimum_p")}function qF(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${qe([...o]).join(`,
	`)}`;n+=`array[int] of var int: counting_circles = [
	${s}
];
`;for(const c of e){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const g=Le(_),h=`constraint count(counting_circles, ${g}) == ${g};
`;n+=h}return n+=`
`,n}function KF(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${qe([...o]).join(`,
	`)}`;return n+=`array[int] of var int: unique_cells = [
	${s}
];
`,n+=`constraint alldifferent(unique_cells);
`,n}function XF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${Be(u,pe.YIN_YANG)}, ${s});
`}function Sd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Le(o),s=vd(t,o),c=[];for(const g of s){const h=Be(g,pe.YIN_YANG);c.push(h)}const u=Ft(o,pe.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function ZF(t,e,n,r){return Sd(e,r,"yin_yang_seen_unshaded_p")}function QF(t,e,n,r){return Sd(e,r,"yin_yang_seen_shaded_p")}function JF(t,e,n,r){return Sd(e,r,"yin_yang_seen_same_shade_p")}function e$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=Ft(a,pe.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),_=Be(u,pe.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${_});
`}function t$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),_=e.getCol(a.c),g="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",h="["+_.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${s}, ${c});
`}function n$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getRow(a.r),u=e.getCol(a.c),_="["+c.map(p=>`unknown_regions[${p.r},${p.c}]`).join(", ")+"]",g="["+u.map(p=>`unknown_regions[${p.r},${p.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${_}, ${g}, ${s});
`}function r$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=`nurimisaki[${a.r},${a.c}]`;let g=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const h=vd(e,a),p=[];for(const m of h){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";p.push(C)}return g+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${p[0]}, ${p[1]}, ${p[2]}, ${p[3]});
`,g}function o$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=Ft(a,pe.SASHIGANE),u=Ft(a,pe.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function i$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Ft(a,pe.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function a$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Ft(a,pe.CELL_CENTER_LOOP)} == 1;
`:""}function s$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Ft(a,pe.CELL_CENTER_LOOP)} == 0;
`:""}function l$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${Be(u,pe.CELL_CENTER_LOOP)}) == ${s};
`}function c$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Le(a),c=Ft(a,pe.CAVE_SHADING),u=vd(e,a),_=[];for(const h of u){const p=Be(h,pe.CAVE_SHADING);_.push(p)}return`constraint cave_clue_p(${s}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function u$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Le(a),g=Ft(a,pe.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(a),p=Be(h,pe.BOARD),m=Be(h,pe.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${p}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(a),I=Be(C,pe.BOARD),O=Be(C,pe.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${O}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const b=[Pe.NE,Pe.NW,Pe.SE,Pe.SW],A=[];for(const k of b)e.getCellsInDirection(a.r,a.c,k).forEach(W=>A.push(W));const T=Be(A,pe.BOARD),M=Be(A,pe.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${M}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function d$(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Le(a),g=Ft(a,pe.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(a),p=Be(h,pe.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${p}, ${g}) >= ${c};
`;const m=[Pe.N,Pe.S,Pe.E,Pe.W],C=[];for(const I of m){const O=e.getCellsInDirection(a.r,a.c,I);if(!O.length)continue;const b=Be(O,pe.BOARD),A=Be(O,pe.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,M=`in_arrow_${n}_${I}[1]`;C.push(M),u+=`array[index_set(${b})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${A}, ${T}, ${_}, ${g});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}const f$=new Map([[f.ODD,xF],[f.EVEN,SF],[f.LOW_DIGIT,NF],[f.HIGH_DIGIT,DF],[f.ODD_MINESWEEPER,TF],[f.EVEN_MINESWEEPER,RF],[f.DIAGONALLY_ADJACENT_SUM,MF],[f.ORTHOGONAL_SUM,GF],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,kF],[f.FRIENDLY_CELL,UF],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,HF],[f.WATCHTOWER,PF],[f.NOT_WATCHTOWER,BF],[f.FARSIGHT,WF],[f.RADAR,YF],[f.INDEXING_COLUMN,FF],[f.INDEXING_ROW,$F],[f.SANDWICH_ROW_COL_COUNT,zF],[f.YIN_YANG_MINESWEEPER,XF],[f.YIN_YANG_SEEN_UNSHADED_CELLS,ZF],[f.YIN_YANG_SEEN_SHADED_CELLS,QF],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,JF],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,e$],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,t$],[f.SEEN_REGION_BORDERS_COUNT,n$],[f.NURIMISAKI_UNSHADED_ENDPOINTS,r$],[f.SASHIGANE_BEND_REGION_COUNT,o$],[f.SASHIGANE_REGION_SUM,i$],[f.CELL_ON_THE_LOOP,a$],[f.CELL_NOT_ON_THE_LOOP,s$],[f.COUNT_LOOP_NEIGHBOUR_CELLS,l$],[f.CAVE_CLUE,c$],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,u$],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,d$]]),_$=new Map([[f.MAXIMUM,VF],[f.MINIMUM,jF],[f.COUNTING_CIRCLES,qF],[f.UNIQUE_CELLS,KF]]);function g$(t,e,n,r){let o="";const a=f$.get(n),s=_$.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);o+=_}else if(s){const c=Object.values(r),u=s(e,c);o+=u}return o}function h$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=Ft(r,pe.UNKNOWN_REGIONS),s=e.directions,c=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),p=Be(h,pe.UNKNOWN_REGIONS);c.push(p)}return`constraint ${c.map(g=>`count_different(${g}, ${a})`).join(" + ")} == ${o};
`}function v$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=Ft(r,pe.YIN_YANG),s=e.directions;let c="";for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),h="["+qe(_).join(",")+"]",p=Be(_,pe.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${h}, ${p}) == ${o};
`}return c}function p$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),_=Be(u,pe.YIN_YANG);s+=`constraint count(${_}, 1) == ${o};
`}return s}function m$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=Ft(r,pe.YIN_YANG),s=e.directions,c=[];for(const _ of s){const g=t.getCellsInDirection(r.r,r.c,_),h=Be(g,pe.YIN_YANG),p=Be(g,pe.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${h}, ${p})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function C$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${Be(_,pe.CELL_CENTER_LOOP)})`;s.push(h)}return s.length?`constraint ${s.join(" + ")} = ${o};
`:""}function E$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=Ft(r,pe.GALAXY_REGIONS),s=e.directions,c=[];for(const _ of s){const g=t.getCellsInDirection(r.r,r.c,_),m=`count(${"["+ll(g,pe.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function I$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+qe(u).join(",")+"]";s+=`constraint hot_arrows_p(${g}, ${o});
`}return s}function b$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Le(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+qe(u).join(",")+"]";s+=`constraint cold_arrows_p(${g}, ${o});
`}return s}const w$=new Map([[f.HOT_ARROWS,I$],[f.COLD_ARROWS,b$],[f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,h$],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,v$],[f.LOOP_CELL_COUNT_ARROWS,C$],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,m$],[f.YIN_YANG_COUNT_SHADED_CELLS,p$],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,E$]]);function O$(t,e,n,r){return ul(e,n,r,w$)}function L$(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function y$(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}const A$=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,L$],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,y$]]);function x$(t,e,n,r){return ul(e,n,r,A$)}const S$=[x6,g$,AF,O$,Q6,U6,oF,s6,w6,wF,D6,x$];function N$(t,e){let n="";const r=t.localConstraints,o=t.grid;for(const[a,s]of r.entries())for(const c of S$){let u=c(e,o,a,s);u=At(u,`${a}`),n+=u}return n}function D$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function T$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function R$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function k$(t,e){const n=t.grid;if(n.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(n.nCols,n.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${o});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${o});
`,a}function G$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function M$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function F$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function $$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function U$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function Kv(t,e){const n=t.grid;let r="";r+=`
% Only 1 per row 
`;const o=n.nRows;for(let u=0;u<o;u++){const _=n.getRow(u),g=e(_);r+=`constraint count_eq(${g}, true, 1);
`}r+=`
% Only 1 per column 
`;const a=n.nCols;for(let u=0;u<a;u++){const _=n.getCol(u),g=e(_);r+=`constraint count_eq(${g}, true, 1);
`}if(!t.globalConstraints.get(f.UNKNOWN_REGIONS)){r+=`
% Only 1 per region 
`;const u=n.getUsedRegions();for(const _ of u){const g=n.getRegion(_),h=e(g);r+=`constraint count_eq(${h}, true, 1);
`}}return r}function H$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=Kv(t,a=>Be(a,pe.DOUBLERS)),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function P$(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=Kv(t,s=>Be(s,pe.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function B$(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function W$(t,e){if(t.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="cave_shading",a="cave_regions";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint cave_p(${o}, ${a});
`,s}function Y$(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=pe.GALAXY_REGIONS,a=pe.GALAXY_SIZES,s=n.nCols*n.nRows;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${o};
`,c+=`constraint galaxy_restrict_numbering_p(${o});
`,c+=`array[0..${s}] of var 0..${s}: ${a};
`,c+=`constraint galaxy_sizes_p(${o}, ${a});
`,c+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,c+=`constraint gallaxy_connected_regions_p(${o});
`,c}function z$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function V$(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function j$(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=jg.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[s,c]of jg.entries()){const u=c.length,_=c[0].length,g=`pentomino_${s}`;a+=`array[1..${u}, 1..${_}] of 0..1: ${g} = ${h8(c)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${s});
`}return a}const q$=new Map([[f.FILLOMINO,B$],[f.CAVE,W$],[f.GALAXIES,Y$],[f.YIN_YANG,D$],[f.NURIMISAKI,T$],[f.TWO_CONTIGUOUS_REGIONS,R$],[f.UNKNOWN_REGIONS,k$],[f.SASHIGANE,G$],[f.CELL_CENTER_LOOP_NO_TOUCHING,M$],[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,F$],[f.NOT_LOOP_SIZED_REGIONS,$$],[f.MODULAR_LOOP,U$],[f.DOUBLERS,H$],[f.NEGATORS,P$],[f.GOLDILOCKS_ZONE,V$],[f.NEXUS,z$],[f.PENTOMINO_TILLING,j$]]);function K$(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=q$.get(r);if(!a)continue;let s=a(t,r);s=At(s,`${r}`),e+=s}return e}function X$(){let t=`
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
    
predicate equal_diagonal_differences_p(array[int] of var int: arr) =
    assert(length(arr) == 4, "Array must have length 4.") /\\
    abs(arr[1] - arr[4]) = abs(arr[2] - arr[3]);

`+`predicate fuzzy_thermo_p(array[int] of var int: arr) =
    strictly_increasing(arr) \\/ strictly_decreasing(arr);
    
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

`,t}function Z$(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Le(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function Xv(t){const e=t.grid,n=new f8,[r,o]=[e.nRows,e.nCols],a=r*o;n.add(`include "globals.mzn";
`),n.add(`include "alldifferent.mzn";

`),n.add(X$());let c=`1..${Math.max(r,o)}`,u=t.valid_digits;return!!t.globalConstraints.get(f.FILLOMINO)&&(c=`1..${a}`),t.globalConstraints.get(f.HEXED_SUDOKU)&&(u=[...Mt.range(1,16)]),u&&(c="{"+u.join(",")+"}"),n.add(`set of int: ROW_IDXS = 0..${r-1};
`),n.add(`set of int: COL_IDXS = 0..${o-1};
`),n.add(`set of int: ALLOWED_DIGITS = ${c};
`),n.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),n.add(Z$(t)),n.add(e6(t)),n.add(t6(t)),n.add(K$(t)),n.add(N$(t,n)),n.add(r6(t)),n.add(`
solve satisfy;`),n.model_str}const Kg=encodeURIComponent("4.3.5");let ur={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Co=[];let Xc;function Zi(){if(!Xc){const e=`importScripts(${JSON.stringify(ur.workerURL)});`;Xc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Xc);t.postMessage({wasmURL:ur.wasmURL?ur.wasmURL.toString():new URL(`./minizinc.wasm?version=${Kg}`,ur.workerURL).toString(),dataURL:ur.dataURL?ur.dataURL.toString():new URL(`./minizinc.data?version=${Kg}`,ur.workerURL).toString()}),Co.push({worker:t,runCount:0})}function Zv(){for(;Co.length<ur.numWorkers;)Zi()}async function Q$(t){if(ur={...ur,...t},Co.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Zv(),await Promise.race(Co.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Nd{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Nd;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Zv();const o=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:s,runCount:c}=Co.pop();return s.postMessage({jsonStream:!0,files:a,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],o.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?Co.push({worker:a,runCount:s}):(a.terminate(),Zi()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],o.options),c=[];let u=null;a.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":s<10?Co.push({worker:a,runCount:s}):(a.terminate(),Zi()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const a=["-c","--fzn",o],{worker:s}=this._run(a,n.options,[o]);Zi();let c={},u=!1,_=null;return s.onmessage=g=>{if(c[g.data.type])for(const h of c[g.data.type])h(g.data);switch(g.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":_||(_=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,h){c[g]?c[g].add(h):c[g]=new Set([h])},off(g,h){c[g]&&c[g].delete(h)},then(g,h){const p=m=>{if(m.code===0)g(m.outputFiles[o]);else{const C=_?{message:_.message,...m}:m;if(!h)throw C;h(C)}};c.exit?c.exit.add(p):c.exit=new Set([p])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);Zi();let a=null,s={},c=!1,u=null,_={},g="UNKNOWN";return o.onmessage=h=>{if(s[h.data.type])for(const p of s[h.data.type])p(h.data);switch(h.data.type){case"exit":o.terminate(),c=!0,s={};break;case"error":a||(a=h.data);break;case"statistics":_={..._,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),s.exit)for(const h of s.exit)h({type:"exit",code:null});s={}}},on(h,p){s[h]?s[h].add(p):s[h]=new Set([p])},off(h,p){s[h]&&s[h].delete(p)},then(h,p){const m=C=>{if(C.code===0)h({status:g,solution:u,statistics:_});else{const I=a?{message:a.message,...C}:C;if(!p)throw I;p(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var J$=re('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button></div>');function eU(t,e){te(e,!1);const n=ze(),r=()=>he(Dr,"$puzzleMetaStore",n);let o=$(e,"showModal",12,!1);function a(){const _=st(va);return Xv(_)}function s(){const _=a();navigator.clipboard.writeText(_)}function c(){const _=a(),g=g8(_);navigator.clipboard.writeText(g)}function u(){function _(p,m,C){var I=document.createElement("a"),O=new Blob([p],{type:C});I.href=URL.createObjectURL(O),I.download=m,I.click(),URL.revokeObjectURL(I.href)}const g=qh(r()),h=a();_(h,`${g}.mzn`,"text/plain")}fe(),Rr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(_){o(_)},children:(_,g)=>{var h=J$(),p=q(h),m=U(p,2),C=U(m,2);H(h),De("click",p,s),De("click",m,c),De("click",C,u),N(_,h)},$$slots:{default:!0},$$legacy:!0}),ne()}function Dd(t,e,n){const r=[],o=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const g=Number(c[u]),h=n.get(g)??1;o.push([h])}}const a=Ys(r,o);ni(a)}function tU(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let p=0;p<e;p++)for(let m=0;m<n;m++)if(!r[p][m]){const C=[];o.push(C),s(p,m,t[p][m])}function s(p,m,C){p<0||p>=e||m<0||m>=n||r[p][m]||t[p][m]!==C||(r[p][m]=!0,o[o.length-1].push([p,m]),s(p+1,m,C),s(p-1,m,C),s(p,m+1,C),s(p,m-1,C))}const c=Array(o.length).fill(0).map(()=>new Set);function u(p,m){for(const[C,I]of p)for(const[O,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=C+O,T=I+b;if(m.some(([M,k])=>M===A&&k===T))return!0}return!1}for(let p=0;p<o.length;p++)for(let m=p+1;m<o.length;m++)u(o[p],o[m])&&(c[p].add(m),c[m].add(p));const _=[1,4,7,9],g=new Array(o.length).fill(0);function h(p,m){for(const C of c[p])if(g[C]===m)return!1;return!0}for(let p=0;p<o.length;p++)for(const m of _)if(h(p,m)){g[p]=m;break}for(let p=0;p<o.length;p++)for(const[m,C]of o[p])a[m][C]=g[p];return a}function nU(t,e){if(t===void 0)return;const n=t.board;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_||_.given)continue;const g=c[u];r.push(_),o.push(g)}}const a=Kh(r,o);ni(a)}function rU(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const a=t[o];if(a!==void 0){Dd(a,e,r);return}}}function oU(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const a=t[o];if(a!==void 0){Dd(a,e,r);return}}}function iU(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const g=c[u];o.push([g+1])}}const a=Ys(r,o);ni(a)}function aU(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Dd(n,e,new Map([[0,4],[1,7],[2,9]]))}function sU(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<o.length;g++){const h=o[g];for(let p=0;p<h.length-1;p++){const m=e.getCell(g,p),C=e.getCell(g,p+1);if(!m||!C)continue;const I=h[p],O=h[p+1];if(I===O)continue;const b={colorId:c,p1:{r:g,c:p+1},p2:{r:g+1,c:p+1}};u.push(b)}}for(let g=0;g<s;g++)for(let h=0;h<a-1;h++){const p=e.getCell(h,g),m=e.getCell(h+1,g);if(!p||!m)continue;const C=o[h][g],I=o[h+1][g];if(C===I)continue;const O={colorId:c,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(O)}const _=ws(u);Xr(_);return}}function lU(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const g=e.getCell(c,_);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const p=o[g.r][g.c],m=o[h.r][h.c];if(!(p===1&&m===1))continue;const C={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};a.push(C)}}}const s=ws(a);Xr(s);return}}function cU(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=tU(o);if(!a)return;const s=[],c=[];for(let _=0;_<a.length;_++){const g=a[_];for(let h=0;h<g.length;h++){const p=e.getCell(_,h);if(!p)continue;s.push(p);const m=g[h];c.push([m])}}const u=Ys(s,c);ni(u);return}}function uU(t,e){Xr(td()),nU(t,e),iU(t,e),sU(t,e),aU(t,e),lU(t,e),oU(t,e),cU(t,e),rU(t,e)}function dU(){const{subscribe:t,set:e}=$t(0),n=100;let r=Date.now(),o,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,o=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(o),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(o),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var fU=re('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function _U(t,e){te(e,!1);const n=ze(),r=()=>he(va,"$puzzleStore",n),o=()=>he(sn,"$gridStore",n),a=()=>he(b,"$timer",n),s=D(),c=D(),u=D(),_=D();let g=D(!1),h=D(!1),p=D(null),m=D(100),C=D("100"),I=D(null),O=D("IDLE");const b=dU();function A(K){return K===null?"":String(K)}function T(K){const oe=Math.floor(K/6e4),de=Math.floor(K%6e4/1e3),J=Math.floor(K%1e3/100),le=de.toString().padStart(2,"0");return`${oe}:${le}.${J}`}function M(){S(h,!0)}function k(K){const oe=parseInt(K);typeof oe=="number"&&oe>=1&&S(m,oe)}async function Y(){S(I,0),S(O,"SOLVING...");const K=new Nd;dv(),console.log(v(s));const oe=Xv(v(s));K.addFile("test.mzn",oe),b.reset(),b.start(),S(p,K.solve({options:{solver:"chuffed","num-solutions":v(m)}})),v(p).on("solution",de=>{const J=de.output.json;de.type==="solution"&&v(I)!==null&&S(I,v(I)+1),uU(J,v(c))}),v(p).on("error",de=>{S(u,"Solve"),S(O,"ERROR"),b.stop(),v(p)&&v(p).cancel()}),v(p).then(de=>{S(O,de.status),S(u,"Solve"),b.stop()})}function W(){v(p)===null||!v(p).isRunning()?Y():v(p)!==null&&v(p).isRunning()&&(S(O,"IDLE"),S(u,"Solve"),b.stop(),v(p).cancel())}F(()=>r(),()=>{S(s,r())}),F(()=>o(),()=>{S(c,o())}),F(()=>{},()=>{S(u,"Solve")}),F(()=>a(),()=>{S(_,a())}),F(()=>v(p),()=>{v(p)&&(v(p)!==null&&v(p).isRunning()?S(u,"Stop"):S(u,"Solve"))}),ve(),fe(),sl(t,{get isOpen(){return v(g)},set isOpen(K){S(g,K)},$$slots:{"panel-header":(K,oe)=>{al(K,{slot:"panel-header",title:"Solver",get isOpen(){return v(g)},set isOpen(de){S(g,de)},$$legacy:!0})},"panel-content":(K,oe)=>{var de=fU(),J=ue(de),le=U(J,2);eU(le,{get showModal(){return v(h)},set showModal(Xt){S(h,Xt)},$$legacy:!0});var be=U(le,2),Ce=q(be,!0);H(be);var Ie=U(be,2),Fe=q(Ie,!0);H(Ie);var lt=U(Ie,2),xe=q(lt);jt(xe),x(xe,"min",1),x(xe,"max",200),x(xe,"step",1),H(lt);var we=U(lt,2),ft=q(we,!0);Z(()=>nt(ft,`Solution Count: ${A(v(I))}`)),H(we);var ct=U(we,2),Un=q(ct,!0);Z(()=>nt(Un,`Elapsed Time: ${T(v(_))}`)),H(ct);var Lt=U(ct,2),Ln=q(Lt,!0);H(Lt),Z(()=>{nt(Ce,v(u)),nt(Fe,`Max. Solutions: ${v(m)}`),nt(Ln,`Status: ${v(O)}`)}),De("click",J,M),De("click",be,W),qn(xe,()=>v(C),Xt=>S(C,Xt)),De("input",xe,()=>k(v(C))),N(K,de)}},$$legacy:!0}),ne()}var gU=re('<div class="setting-panel-wrapper svelte-8gul1v"><div class="setting-panel svelte-8gul1v"><!> <!> <!> <!> <!> <!> <!></div></div>');function hU(t){var e=gU(),n=q(e),r=q(n);r8(r);var o=U(r,2);_U(o,{});var a=U(o,2);XG(a,{elementHandlers:kt});var s=U(a,2);tM(s,{elementHandlers:kt});var c=U(s,2);BG(c,{elementHandlers:kt});var u=U(c,2);LM(u,{elementHandlers:kt});var _=U(u,2);i8(_,{}),H(n),H(e),N(t,e)}var vU=re('<div class="game-wrapper svelte-rf6cgp"><div class="game svelte-rf6cgp"><!> <!> <!></div></div>');function pU(t,e){te(e,!1);const n=ze(),r=()=>he(Xs,"$gameModeStore",n),o=D();F(()=>r(),()=>{S(o,r())}),ve(),fe();var a=vU(),s=q(a),c=q(s);{var u=h=>{hU(h)};_e(c,h=>{v(o)===Ii.SETTING&&h(u)})}var _=U(c,2);hG(_,{});var g=U(_,2);$R(g,{}),H(s),H(a),N(t,a),ne()}var mU=re('<main class="App svelte-3tb04y"><!></main>');function xU(t,e){te(e,!1);const n=ze(),r=()=>he(Sw,"$darkModeStore",n),o=D();ih(async()=>{const c=window.location.href;try{await Q$({workerURL:`${c}minizinc-worker.js`,wasmURL:`${c}minizinc.wasm`,dataURL:`${c}minizinc.data`})}catch(u){const _="Failed to initialize MiniZinc: "+u.message;console.log(_)}}),F(()=>r(),()=>{S(o,r()?"dark":"light")}),ve(),fe();var a=mU(),s=q(a);pU(s,{}),H(a),Z(()=>x(a,"data-theme",v(o))),N(t,a),ne()}export{xU as component,AU as universal};
