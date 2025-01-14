var Ub=Object.defineProperty;var Hb=(t,e,n)=>e in t?Ub(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>Hb(t,typeof e!="symbol"?e+"":e,n);import{b as tu,e as Pb,a as N,n as ie,t as re,c as ye,d as Bb}from"../chunks/disclose-version.Dg_NLxo-.js";import{i as fe}from"../chunks/legacy.BIOpJeaM.js";import{A as th,b as Iu,h as bt,G as ei,F as ti,O as nh,Y as rh,ad as Wb,ae as fg,U as Ji,c as dr,au as Is,af as bu,a as Fs,ag as oh,C as nu,av as gg,aw as Yb,H as zb,ax as jb,d as wu,B as Ou,V as Vb,L as qb,I as ru,ay as Lu,az as yu,a1 as Kb,a7 as hg,aA as ih,aB as Xb,aC as Zb,R as ah,W as Qb,S as Jb,E as ew,aD as Au,aE as tw,ac as nw,aF as rw,aG as ow,ai as xu,M as sh,aH as iw,j as aw,a9 as sw,p as te,aI as M,aJ as pe,t as Z,e as ne,v as U,w as q,x as H,$ as S,l as p,aK as T,f as ce,aL as Io,m as Q,as as Xe,aM as Fc,o as vg,aN as lw}from"../chunks/runtime.fPiJQ45m.js";import{i as cw,a as uw,b as dw,c as _w,d as fw,e as gw,n as hw,f as vw,l as Su,g as De,s as nt,r as pw}from"../chunks/render.Bak2-P20.js";import{d as mw,s as je,e as _a,f as ve,p as F,i as ge,b as bo,c as lh,m as ch}from"../chunks/props.BV3_8QEG.js";import{d as cn,w as Ft,g as st}from"../chunks/index.COHsOmhi.js";import{o as uh,a as Cw}from"../chunks/index-client.Bs9ty8xq.js";function gt(t,e){return e}function Ew(t,e,n,r){for(var o=[],a=e.length,s=0;s<a;s++)Yb(e[s].e,o,!0);var c=a>0&&o.length===0&&n!==null;if(c){var u=n.parentNode;zb(u),u.append(n),r.clear(),Kr(t,e[0].prev,e[a-1].next)}jb(o,()=>{for(var g=0;g<a;g++){var h=e[g];c||(r.delete(h.k),Kr(t,h.prev,h.next)),wu(h.e,!c)}})}function We(t,e,n,r,o,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&ih)!==0;if(u){var g=t;s=bt?ei(Ou(g)):g.appendChild(th())}bt&&ti();var h=null,f=!1;Iu(()=>{var v=n(),m=nh(v)?v:v==null?[]:rh(v),C=m.length;if(f&&C===0)return;f=C===0;let I=!1;if(bt){var O=s.data===Wb;O!==(C===0)&&(s=fg(),ei(s),Ji(!1),I=!0)}if(bt){for(var b=null,x,D=0;D<C;D++){if(dr.nodeType===8&&dr.data===Vb){s=dr,I=!0,Ji(!1);break}var $=m[D],k=r($,D);x=dh(dr,c,b,null,$,k,D,o,e),c.items.set(k,x),b=x}C>0&&ei(fg())}if(!bt){var Y=qb;Iw(m,c,s,o,e,(Y.f&Is)!==0,r)}a!==null&&(C===0?h?bu(h):h=Fs(()=>a(s)):h!==null&&oh(h,()=>{h=null})),I&&Ji(!0),n()}),bt&&(s=dr)}function Iw(t,e,n,r,o,a,s,c){var Ce,Ne,lt,xe;var u=(o&Xb)!==0,g=(o&(Lu|yu))!==0,h=t.length,f=e.items,v=e.first,m=v,C,I=null,O,b=[],x=[],D,$,k,Y;if(u)for(Y=0;Y<h;Y+=1)D=t[Y],$=s(D,Y),k=f.get($),k!==void 0&&((Ce=k.a)==null||Ce.measure(),(O??(O=new Set)).add(k));for(Y=0;Y<h;Y+=1){if(D=t[Y],$=s(D,Y),k=f.get($),k===void 0){var W=m?m.e.nodes_start:n;I=dh(W,e,I,I===null?e.first:I.next,D,$,Y,r,o),f.set($,I),b=[],x=[],m=I.next;continue}if(g&&bw(k,D,Y,o),k.e.f&Is&&(bu(k.e),u&&((Ne=k.a)==null||Ne.unfix(),(O??(O=new Set)).delete(k))),k!==m){if(C!==void 0&&C.has(k)){if(b.length<x.length){var K=x[0],oe;I=K.prev;var _e=b[0],ee=b[b.length-1];for(oe=0;oe<b.length;oe+=1)pg(b[oe],K,n);for(oe=0;oe<x.length;oe+=1)C.delete(x[oe]);Kr(e,_e.prev,ee.next),Kr(e,I,_e),Kr(e,ee,K),m=K,I=ee,Y-=1,b=[],x=[]}else C.delete(k),pg(k,m,n),Kr(e,k.prev,k.next),Kr(e,k,I===null?e.first:I.next),Kr(e,I,k),I=k;continue}for(b=[],x=[];m!==null&&m.k!==$;)(a||!(m.e.f&Is))&&(C??(C=new Set)).add(m),x.push(m),m=m.next;if(m===null)continue;k=m}b.push(k),I=k,m=k.next}if(m!==null||C!==void 0){for(var le=C===void 0?[]:rh(C);m!==null;)(a||!(m.e.f&Is))&&le.push(m),m=m.next;var Ie=le.length;if(Ie>0){var me=o&ih&&h===0?n:null;if(u){for(Y=0;Y<Ie;Y+=1)(lt=le[Y].a)==null||lt.measure();for(Y=0;Y<Ie;Y+=1)(xe=le[Y].a)==null||xe.fix()}Ew(e,le,me,f)}}u&&ru(()=>{var we;if(O!==void 0)for(k of O)(we=k.a)==null||we.apply()}),nu.first=e.first&&e.first.e,nu.last=I&&I.e}function bw(t,e,n,r){r&Lu&&gg(t.v,e),r&yu?gg(t.i,n):t.i=n}function dh(t,e,n,r,o,a,s,c,u,g){var h=(u&Lu)!==0,f=(u&Zb)===0,v=h?f?Kb(o):hg(o):o,m=u&yu?hg(s):s,C={i:m,v,k:a,a:null,e:null,prev:n,next:r};try{return C.e=Fs(()=>c(t,v,m),bt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function pg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=ah(a);o.before(a),a=s}}function Kr(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function ww(t,e,n,r,o){var a=t,s="",c;Iu(()=>{if(s===(s=e()??"")){bt&&ti();return}c!==void 0&&(wu(c),c=void 0),s!==""&&(c=Fs(()=>{if(bt){dr.data;for(var u=ti(),g=u;u!==null&&(u.nodeType!==8||u.data!=="");)g=u,u=ah(u);if(u===null)throw Qb(),Jb;tu(dr,g),a=ei(u);return}var h=s+"",f=Pb(h);tu(Ou(f),f.lastChild),a.before(f)}))})}function dt(t,e,n,r,o){var c;bt&&ti();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function _h(t,e,n,r,o,a){let s=bt;bt&&ti();var c,u,g=null;bt&&dr.nodeType===1&&(g=dr,ti());var h=bt?dr:t,f;Iu(()=>{const v=e()||null;var m=v==="svg"?Au:null;v!==c&&(f&&(v===null?oh(f,()=>{f=null,u=null}):v===u?bu(f):wu(f)),v&&v!==u&&(f=Fs(()=>{if(g=bt?g:m?document.createElementNS(m,v):document.createElement(v),tu(g,g),r){bt&&cw(v)&&g.append(document.createComment(""));var C=bt?Ou(g):g.appendChild(th());bt&&(C===null?Ji(!1):ei(C)),r(g,C)}nu.nodes_end=g,h.before(g)})),c=v,c&&(u=c))},ew),s&&(Ji(!0),ei(h))}function fh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=fh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Ow(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=fh(t))&&(r&&(r+=" "),r+=e);return r}function Lw(t){return typeof t=="object"?Ow(t):t??""}function Vt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;A(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;A(t,"checked",null),t.checked=o}}};t.__on_r=n,ow(n),uw()}}function yw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function gh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function Aw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function A(t,e,n,r){var o=t.__attributes??(t.__attributes={});bt&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[tw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&vh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function hh(t,e,n,r,o=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var g in e)g in n||(n[g]=null);n.class&&(n.class=Lw(n.class));var h=vh(t),f=t.__attributes??(t.__attributes={});for(const b in n){let x=n[b];if(u&&b==="value"&&x==null){t.value=t.__value="",c[b]=x;continue}var v=c[b];if(x!==v){c[b]=x;var m=b[0]+b[1];if(m!=="$$"){if(m==="on"){const D={},$="$$"+b;let k=b.slice(2);var C=vw(k);if(dw(k)&&(k=k.slice(0,-7),D.capture=!0),!C&&v){if(x!=null)continue;t.removeEventListener(k,c[$],D),c[$]=null}if(x!=null)if(C)t[`__${k}`]=x,fw([k]);else{let Y=function(W){c[b].call(this,W)};c[$]=_w(k,t,Y,D)}else C&&(t[`__${k}`]=void 0)}else if(b==="style"&&x!=null)t.style.cssText=x+"";else if(b==="autofocus")gw(t,!!x);else if(b==="__value"||b==="value"&&x!=null)t.value=t[b]=t.__value=x;else if(b==="selected"&&u)Aw(t,x);else{var I=b;o||(I=hw(I));var O=I==="defaultValue"||I==="defaultChecked";if(x==null&&!a&&!O)if(f[b]=null,I==="value"||I==="checked"){let D=t;if(I==="value"){let $=D.defaultValue;D.removeAttribute(I),D.defaultValue=$}else{let $=D.defaultChecked;D.removeAttribute(I),D.defaultChecked=$}}else t.removeAttribute(b);else O||h.includes(I)&&(a||typeof x!="string")?t[I]=x:typeof x!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||A(t,I,x))}b==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var mg=new Map;function vh(t){var e=mg.get(t.nodeName);if(e)return e;mg.set(t.nodeName,e=[]);for(var n,r=t,o=Element.prototype;o!==r;){n=rw(r);for(var a in n)n[a].set&&e.push(a);r=nw(r)}return e}function $n(t,e,n){var r=t.__className,o=ph(e);bt&&t.getAttribute("class")===o?t.__className=o:(r!==o||bt&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function xw(t,e,n){var r=t.__className,o=ph(e);bt&&t.className===o?t.__className=o:(r!==o||bt&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function ph(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=iw();Su(t,"input",o=>{var a=o?t.defaultValue:t.value;if(a=Hc(t)?Pc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||aw(e)==null&&t.value)&&n(Hc(t)?Pc(t.value):t.value),xu(()=>{var o=e();Hc(t)&&o===Pc(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const Uc=new Set;function Us(t,e,n,r,o=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Su(n,"change",()=>{var g=n.__value;a&&(g=Cg(s,g,n.checked)),o(g)},()=>o(a?[]:null)),xu(()=>{var g=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}a?(g=g||[],n.checked=g.includes(n.__value)):n.checked=mw(n.__value,g)}),sh(()=>{var g=s.indexOf(n);g!==-1&&s.splice(g,1)}),Uc.has(s)||(Uc.add(s),ru(()=>{s.sort((g,h)=>g.compareDocumentPosition(h)===4?-1:1),Uc.delete(s)})),ru(()=>{if(c){var g;if(a)g=Cg(s,g,n.checked);else{var h=s.find(f=>f.checked);g=h==null?void 0:h.__value}o(g)}})}function Cg(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Hc(t){var e=t.type;return e==="number"||e==="range"}function Pc(t){return t===""?null:+t}function Sw(t,e,n=e){Su(t,"change",()=>{n(t.files)}),xu(()=>{t.files=e()})}function Qe(t,e,n){var r=sw(t,e);r&&r.set&&(t[e]=n,sh(()=>{t[e]=null}))}function Nw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Xn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Bc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Tw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=nh(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}const Dw=!0,tH=Object.freeze(Object.defineProperty({__proto__:null,prerender:Dw},Symbol.toStringTag,{value:"Module"}));function Rw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=Ft(Rw()),kw=cn(Wt,t=>t.darkMode);function Gw(t){Wt.update(e=>({...e,darkMode:t}))}function Mw(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function $w(t){Wt.update(e=>({...e,penToolActive:t}))}function Fw(t){Wt.update(e=>({...e,letterToolActive:t}))}function Uw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function Hw(t){Wt.update(e=>({...e,checkConflicts:t}))}function Pw(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function Bw(t){Wt.update(e=>({...e,hideFog:t}))}function Ww(t){Wt.update(e=>({...e,showSolution:t}))}var Yw=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function zw(t){var e=Yw();N(t,e)}var jw=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function Vw(t){var e=jw();N(t,e)}var qw=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function Kw(t){var e=qw();N(t,e)}var Xw=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function Zw(t){var e=Xw();N(t,e)}var Nu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Nu||{}),mh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(mh||{}),Ch=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Ch||{}),Eh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(Eh||{}),Ih=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(Ih||{}),Hs=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CAVE_CLUE="Cave Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t))(Hs||{}),Tu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Tu||{}),Du=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t))(Du||{}),Ru=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t))(Ru||{}),ku=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(ku||{}),Gu=(t=>(t.THERMOMETER="Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Gu||{}),Mu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(Mu||{}),$u=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))($u||{}),Fu=(t=>(t.CLONE_REGION="Clone Region",t))(Fu||{}),Uu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Uu||{}),Hu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Hu||{}),Pu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Pu||{}),Bu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Bu||{}),Wu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Wu||{}),bh=(t=>(t.PEN_TOOL="Pen Tool",t))(bh||{});const Yu={...mh,...Ch,...Eh,...Ih},wh={...Hs,...Tu,...Du,...Ru,...ku,...Gu,...Mu,...$u,...Fu,...Uu,...Hu,...Pu,...Bu},_={...Nu,...Yu,...wh,...Wu,...bh};var R=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(R||{});function Qw(t){return Object.values(Yu).includes(t)}function Jw(t){return Object.values(wh).includes(t)}function zu(t){return Object.values(Tu).includes(t)||t===_.COSMETIC_CELL_ARROW}function ju(t){return Object.values(Du).includes(t)||t===_.COSMETIC_CELL_MULTI_ARROW}function eO(t){return Object.values(Hs).includes(t)||zu(t)||ju(t)||t===_.COSMETIC_CELL_SHAPE||t===_.COSMETIC_CELL_ARROW||t===_.COSMETIC_CELL_MULTI_ARROW}function Vu(t){return Object.values(Ru).includes(t)||t===_.COSMETIC_EDGE}function Oh(t){return Object.values(ku).includes(t)||t===_.COSMETIC_CORNER}function qu(t){return Object.values(Gu).includes(t)||t===_.COSMETIC_LINE||t===_.COSMETIC_LINE_WITH_POLYGON_ENDS||t===_.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Ku(t){return Object.values(Mu).includes(t)||t===_.COSMETIC_ARROW}function Xu(t){return Object.values($u).includes(t)||t===_.COSMETIC_CAGE}function Lh(t){return Object.values(Pu).includes(t)}function yh(t){return Object.values(Fu).includes(t)}function la(t){const e=Object.values(Uu),n=Object.values(Hu);return e.includes(t)||n.includes(t)||t===_.COSMETIC_OUTSIDE_DIRECTION}function tO(t){return Object.values(Bu).includes(t)}function nO(t){return Object.values(Wu).includes(t)}function Zu(t){return Object.values(Nu).includes(t)}const rO=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],oO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Ah(t){for(const e of Object.values(_))if(e===t)return e}function xh(t,e){return Object.values(e).includes(t)}class ni extends Map{constructor(){super()}setConstraint(e,n){return Qw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new ni;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new ni;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Ah(r);a!==void 0&&xh(a,Yu)&&typeof o=="boolean"&&o&&n.setConstraint(a,o)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function Sh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function qe(t,e){return t.r===e.r&&t.c===e.c}function iO(t,e){return{r:t.r+e.r,c:t.c+e.c}}function aO(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ps(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!qe(t,e)}function sO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Os(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function qt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Bs(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function lO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Nh(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function cO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const uO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function Qu(t){t=t%8;const e=uO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const dO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function Ws(t){const e=dO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Th(t,e){const n=Ws(e);return iO(t,n)}function Dh(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Rh(t,e,n=!1){const r=t.some(a=>qe(a,e)),o=n?t.some(a=>Ps(a,e)):t.some(a=>sO(a,e));if(!r&&o){const a=[...t,e];return Os(a),a}return t}function gs(t){return`R${t.r+1}C${t.c+1}`}function Ju(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var _O=Xi.exports,Eg;function fO(){return Eg||(Eg=1,function(t,e){(function(){var n,r="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",g=500,h="__lodash_placeholder__",f=1,v=2,m=4,C=1,I=2,O=1,b=2,x=4,D=8,$=16,k=32,Y=64,W=128,K=256,oe=512,_e=30,ee="...",le=800,Ie=16,me=1,Ce=2,Ne=3,lt=1/0,xe=9007199254740991,we=17976931348623157e292,_t=NaN,ct=4294967295,Un=ct-1,Lt=ct>>>1,Ln=[["ary",W],["bind",O],["bindKey",b],["curry",D],["curryRight",$],["flip",oe],["partial",k],["partialRight",Y],["rearg",K]],Xt="[object Arguments]",vr="[object Array]",Jn="[object AsyncFunction]",pr="[object Boolean]",ar="[object Date]",yi="[object DOMException]",$r="[object Error]",ko="[object Function]",$e="[object GeneratorFunction]",be="[object Map]",Ge="[object Number]",Me="[object Null]",St="[object Object]",Md="[object Promise]",rp="[object Proxy]",Ai="[object RegExp]",er="[object Set]",xi="[object String]",La="[object Symbol]",op="[object Undefined]",Si="[object WeakMap]",ip="[object WeakSet]",Ni="[object ArrayBuffer]",Go="[object DataView]",pl="[object Float32Array]",ml="[object Float64Array]",Cl="[object Int8Array]",El="[object Int16Array]",Il="[object Int32Array]",bl="[object Uint8Array]",wl="[object Uint8ClampedArray]",Ol="[object Uint16Array]",Ll="[object Uint32Array]",ap=/\b__p \+= '';/g,sp=/\b(__p \+=) '' \+/g,lp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,$d=/&(?:amp|lt|gt|quot|#39);/g,Fd=/[&<>"']/g,cp=RegExp($d.source),up=RegExp(Fd.source),dp=/<%-([\s\S]+?)%>/g,_p=/<%([\s\S]+?)%>/g,Ud=/<%=([\s\S]+?)%>/g,fp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gp=/^\w*$/,hp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yl=/[\\^$.*+?()[\]{}|]/g,vp=RegExp(yl.source),Al=/^\s+/,pp=/\s/,mp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Cp=/\{\n\/\* \[wrapped with (.+)\] \*/,Ep=/,? & /,Ip=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,bp=/[()=,{}\[\]\/\s]/,wp=/\\(\\)?/g,Op=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Hd=/\w*$/,Lp=/^[-+]0x[0-9a-f]+$/i,yp=/^0b[01]+$/i,Ap=/^\[object .+?Constructor\]$/,xp=/^0o[0-7]+$/i,Sp=/^(?:0|[1-9]\d*)$/,Np=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ya=/($^)/,Tp=/['\n\r\u2028\u2029\\]/g,Aa="\\ud800-\\udfff",Dp="\\u0300-\\u036f",Rp="\\ufe20-\\ufe2f",kp="\\u20d0-\\u20ff",Pd=Dp+Rp+kp,Bd="\\u2700-\\u27bf",Wd="a-z\\xdf-\\xf6\\xf8-\\xff",Gp="\\xac\\xb1\\xd7\\xf7",Mp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",$p="\\u2000-\\u206f",Fp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Yd="A-Z\\xc0-\\xd6\\xd8-\\xde",zd="\\ufe0e\\ufe0f",jd=Gp+Mp+$p+Fp,xl="['’]",Up="["+Aa+"]",Vd="["+jd+"]",xa="["+Pd+"]",qd="\\d+",Hp="["+Bd+"]",Kd="["+Wd+"]",Xd="[^"+Aa+jd+qd+Bd+Wd+Yd+"]",Sl="\\ud83c[\\udffb-\\udfff]",Pp="(?:"+xa+"|"+Sl+")",Zd="[^"+Aa+"]",Nl="(?:\\ud83c[\\udde6-\\uddff]){2}",Tl="[\\ud800-\\udbff][\\udc00-\\udfff]",Mo="["+Yd+"]",Qd="\\u200d",Jd="(?:"+Kd+"|"+Xd+")",Bp="(?:"+Mo+"|"+Xd+")",e_="(?:"+xl+"(?:d|ll|m|re|s|t|ve))?",t_="(?:"+xl+"(?:D|LL|M|RE|S|T|VE))?",n_=Pp+"?",r_="["+zd+"]?",Wp="(?:"+Qd+"(?:"+[Zd,Nl,Tl].join("|")+")"+r_+n_+")*",Yp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",zp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",o_=r_+n_+Wp,jp="(?:"+[Hp,Nl,Tl].join("|")+")"+o_,Vp="(?:"+[Zd+xa+"?",xa,Nl,Tl,Up].join("|")+")",qp=RegExp(xl,"g"),Kp=RegExp(xa,"g"),Dl=RegExp(Sl+"(?="+Sl+")|"+Vp+o_,"g"),Xp=RegExp([Mo+"?"+Kd+"+"+e_+"(?="+[Vd,Mo,"$"].join("|")+")",Bp+"+"+t_+"(?="+[Vd,Mo+Jd,"$"].join("|")+")",Mo+"?"+Jd+"+"+e_,Mo+"+"+t_,zp,Yp,qd,jp].join("|"),"g"),Zp=RegExp("["+Qd+Aa+Pd+zd+"]"),Qp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Jp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],em=-1,yt={};yt[pl]=yt[ml]=yt[Cl]=yt[El]=yt[Il]=yt[bl]=yt[wl]=yt[Ol]=yt[Ll]=!0,yt[Xt]=yt[vr]=yt[Ni]=yt[pr]=yt[Go]=yt[ar]=yt[$r]=yt[ko]=yt[be]=yt[Ge]=yt[St]=yt[Ai]=yt[er]=yt[xi]=yt[Si]=!1;var wt={};wt[Xt]=wt[vr]=wt[Ni]=wt[Go]=wt[pr]=wt[ar]=wt[pl]=wt[ml]=wt[Cl]=wt[El]=wt[Il]=wt[be]=wt[Ge]=wt[St]=wt[Ai]=wt[er]=wt[xi]=wt[La]=wt[bl]=wt[wl]=wt[Ol]=wt[Ll]=!0,wt[$r]=wt[ko]=wt[Si]=!1;var tm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},nm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},om={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},im=parseFloat,am=parseInt,i_=typeof hs=="object"&&hs&&hs.Object===Object&&hs,sm=typeof self=="object"&&self&&self.Object===Object&&self,zt=i_||sm||Function("return this")(),Rl=e&&!e.nodeType&&e,so=Rl&&!0&&t&&!t.nodeType&&t,a_=so&&so.exports===Rl,kl=a_&&i_.process,Hn=function(){try{var j=so&&so.require&&so.require("util").types;return j||kl&&kl.binding&&kl.binding("util")}catch{}}(),s_=Hn&&Hn.isArrayBuffer,l_=Hn&&Hn.isDate,c_=Hn&&Hn.isMap,u_=Hn&&Hn.isRegExp,d_=Hn&&Hn.isSet,__=Hn&&Hn.isTypedArray;function yn(j,J,X){switch(X.length){case 0:return j.call(J);case 1:return j.call(J,X[0]);case 2:return j.call(J,X[0],X[1]);case 3:return j.call(J,X[0],X[1],X[2])}return j.apply(J,X)}function lm(j,J,X,Le){for(var Ve=-1,ft=j==null?0:j.length;++Ve<ft;){var Ut=j[Ve];J(Le,Ut,X(Ut),j)}return Le}function Pn(j,J){for(var X=-1,Le=j==null?0:j.length;++X<Le&&J(j[X],X,j)!==!1;);return j}function cm(j,J){for(var X=j==null?0:j.length;X--&&J(j[X],X,j)!==!1;);return j}function f_(j,J){for(var X=-1,Le=j==null?0:j.length;++X<Le;)if(!J(j[X],X,j))return!1;return!0}function Fr(j,J){for(var X=-1,Le=j==null?0:j.length,Ve=0,ft=[];++X<Le;){var Ut=j[X];J(Ut,X,j)&&(ft[Ve++]=Ut)}return ft}function Sa(j,J){var X=j==null?0:j.length;return!!X&&$o(j,J,0)>-1}function Gl(j,J,X){for(var Le=-1,Ve=j==null?0:j.length;++Le<Ve;)if(X(J,j[Le]))return!0;return!1}function xt(j,J){for(var X=-1,Le=j==null?0:j.length,Ve=Array(Le);++X<Le;)Ve[X]=J(j[X],X,j);return Ve}function Ur(j,J){for(var X=-1,Le=J.length,Ve=j.length;++X<Le;)j[Ve+X]=J[X];return j}function Ml(j,J,X,Le){var Ve=-1,ft=j==null?0:j.length;for(Le&&ft&&(X=j[++Ve]);++Ve<ft;)X=J(X,j[Ve],Ve,j);return X}function um(j,J,X,Le){var Ve=j==null?0:j.length;for(Le&&Ve&&(X=j[--Ve]);Ve--;)X=J(X,j[Ve],Ve,j);return X}function $l(j,J){for(var X=-1,Le=j==null?0:j.length;++X<Le;)if(J(j[X],X,j))return!0;return!1}var dm=Fl("length");function _m(j){return j.split("")}function fm(j){return j.match(Ip)||[]}function g_(j,J,X){var Le;return X(j,function(Ve,ft,Ut){if(J(Ve,ft,Ut))return Le=ft,!1}),Le}function Na(j,J,X,Le){for(var Ve=j.length,ft=X+(Le?1:-1);Le?ft--:++ft<Ve;)if(J(j[ft],ft,j))return ft;return-1}function $o(j,J,X){return J===J?Lm(j,J,X):Na(j,h_,X)}function gm(j,J,X,Le){for(var Ve=X-1,ft=j.length;++Ve<ft;)if(Le(j[Ve],J))return Ve;return-1}function h_(j){return j!==j}function v_(j,J){var X=j==null?0:j.length;return X?Hl(j,J)/X:_t}function Fl(j){return function(J){return J==null?n:J[j]}}function Ul(j){return function(J){return j==null?n:j[J]}}function p_(j,J,X,Le,Ve){return Ve(j,function(ft,Ut,It){X=Le?(Le=!1,ft):J(X,ft,Ut,It)}),X}function hm(j,J){var X=j.length;for(j.sort(J);X--;)j[X]=j[X].value;return j}function Hl(j,J){for(var X,Le=-1,Ve=j.length;++Le<Ve;){var ft=J(j[Le]);ft!==n&&(X=X===n?ft:X+ft)}return X}function Pl(j,J){for(var X=-1,Le=Array(j);++X<j;)Le[X]=J(X);return Le}function vm(j,J){return xt(J,function(X){return[X,j[X]]})}function m_(j){return j&&j.slice(0,b_(j)+1).replace(Al,"")}function An(j){return function(J){return j(J)}}function Bl(j,J){return xt(J,function(X){return j[X]})}function Ti(j,J){return j.has(J)}function C_(j,J){for(var X=-1,Le=j.length;++X<Le&&$o(J,j[X],0)>-1;);return X}function E_(j,J){for(var X=j.length;X--&&$o(J,j[X],0)>-1;);return X}function pm(j,J){for(var X=j.length,Le=0;X--;)j[X]===J&&++Le;return Le}var mm=Ul(tm),Cm=Ul(nm);function Em(j){return"\\"+om[j]}function Im(j,J){return j==null?n:j[J]}function Fo(j){return Zp.test(j)}function bm(j){return Qp.test(j)}function wm(j){for(var J,X=[];!(J=j.next()).done;)X.push(J.value);return X}function Wl(j){var J=-1,X=Array(j.size);return j.forEach(function(Le,Ve){X[++J]=[Ve,Le]}),X}function I_(j,J){return function(X){return j(J(X))}}function Hr(j,J){for(var X=-1,Le=j.length,Ve=0,ft=[];++X<Le;){var Ut=j[X];(Ut===J||Ut===h)&&(j[X]=h,ft[Ve++]=X)}return ft}function Ta(j){var J=-1,X=Array(j.size);return j.forEach(function(Le){X[++J]=Le}),X}function Om(j){var J=-1,X=Array(j.size);return j.forEach(function(Le){X[++J]=[Le,Le]}),X}function Lm(j,J,X){for(var Le=X-1,Ve=j.length;++Le<Ve;)if(j[Le]===J)return Le;return-1}function ym(j,J,X){for(var Le=X+1;Le--;)if(j[Le]===J)return Le;return Le}function Uo(j){return Fo(j)?xm(j):dm(j)}function tr(j){return Fo(j)?Sm(j):_m(j)}function b_(j){for(var J=j.length;J--&&pp.test(j.charAt(J)););return J}var Am=Ul(rm);function xm(j){for(var J=Dl.lastIndex=0;Dl.test(j);)++J;return J}function Sm(j){return j.match(Dl)||[]}function Nm(j){return j.match(Xp)||[]}var Tm=function j(J){J=J==null?zt:Ho.defaults(zt.Object(),J,Ho.pick(zt,Jp));var X=J.Array,Le=J.Date,Ve=J.Error,ft=J.Function,Ut=J.Math,It=J.Object,Yl=J.RegExp,Dm=J.String,Bn=J.TypeError,Da=X.prototype,Rm=ft.prototype,Po=It.prototype,Ra=J["__core-js_shared__"],ka=Rm.toString,pt=Po.hasOwnProperty,km=0,w_=function(){var i=/[^.]+$/.exec(Ra&&Ra.keys&&Ra.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Ga=Po.toString,Gm=ka.call(It),Mm=zt._,$m=Yl("^"+ka.call(pt).replace(yl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ma=a_?J.Buffer:n,Pr=J.Symbol,$a=J.Uint8Array,O_=Ma?Ma.allocUnsafe:n,Fa=I_(It.getPrototypeOf,It),L_=It.create,y_=Po.propertyIsEnumerable,Ua=Da.splice,A_=Pr?Pr.isConcatSpreadable:n,Di=Pr?Pr.iterator:n,lo=Pr?Pr.toStringTag:n,Ha=function(){try{var i=go(It,"defineProperty");return i({},"",{}),i}catch{}}(),Fm=J.clearTimeout!==zt.clearTimeout&&J.clearTimeout,Um=Le&&Le.now!==zt.Date.now&&Le.now,Hm=J.setTimeout!==zt.setTimeout&&J.setTimeout,Pa=Ut.ceil,Ba=Ut.floor,zl=It.getOwnPropertySymbols,Pm=Ma?Ma.isBuffer:n,x_=J.isFinite,Bm=Da.join,Wm=I_(It.keys,It),Ht=Ut.max,Zt=Ut.min,Ym=Le.now,zm=J.parseInt,S_=Ut.random,jm=Da.reverse,jl=go(J,"DataView"),Ri=go(J,"Map"),Vl=go(J,"Promise"),Bo=go(J,"Set"),ki=go(J,"WeakMap"),Gi=go(It,"create"),Wa=ki&&new ki,Wo={},Vm=ho(jl),qm=ho(Ri),Km=ho(Vl),Xm=ho(Bo),Zm=ho(ki),Ya=Pr?Pr.prototype:n,Mi=Ya?Ya.valueOf:n,N_=Ya?Ya.toString:n;function L(i){if(Dt(i)&&!Ke(i)&&!(i instanceof it)){if(i instanceof Wn)return i;if(pt.call(i,"__wrapped__"))return Df(i)}return new Wn(i)}var Yo=function(){function i(){}return function(l){if(!Nt(l))return{};if(L_)return L_(l);i.prototype=l;var d=new i;return i.prototype=n,d}}();function za(){}function Wn(i,l){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:dp,evaluate:_p,interpolate:Ud,variable:"",imports:{_:L}},L.prototype=za.prototype,L.prototype.constructor=L,Wn.prototype=Yo(za.prototype),Wn.prototype.constructor=Wn;function it(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function Qm(){var i=new it(this.__wrapped__);return i.__actions__=pn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=pn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=pn(this.__views__),i}function Jm(){if(this.__filtered__){var i=new it(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function e1(){var i=this.__wrapped__.value(),l=this.__dir__,d=Ke(i),E=l<0,w=d?i.length:0,y=_0(0,w,this.__views__),G=y.start,P=y.end,V=P-G,ae=E?P:G-1,se=this.__iteratees__,ue=se.length,Ee=0,Te=Zt(V,this.__takeCount__);if(!d||!E&&w==V&&Te==V)return ef(i,this.__actions__);var He=[];e:for(;V--&&Ee<Te;){ae+=l;for(var et=-1,Pe=i[ae];++et<ue;){var ot=se[et],at=ot.iteratee,Nn=ot.type,rn=at(Pe);if(Nn==Ce)Pe=rn;else if(!rn){if(Nn==me)continue e;break e}}He[Ee++]=Pe}return He}it.prototype=Yo(za.prototype),it.prototype.constructor=it;function co(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function t1(){this.__data__=Gi?Gi(null):{},this.size=0}function n1(i){var l=this.has(i)&&delete this.__data__[i];return this.size-=l?1:0,l}function r1(i){var l=this.__data__;if(Gi){var d=l[i];return d===u?n:d}return pt.call(l,i)?l[i]:n}function o1(i){var l=this.__data__;return Gi?l[i]!==n:pt.call(l,i)}function i1(i,l){var d=this.__data__;return this.size+=this.has(i)?0:1,d[i]=Gi&&l===n?u:l,this}co.prototype.clear=t1,co.prototype.delete=n1,co.prototype.get=r1,co.prototype.has=o1,co.prototype.set=i1;function mr(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function a1(){this.__data__=[],this.size=0}function s1(i){var l=this.__data__,d=ja(l,i);if(d<0)return!1;var E=l.length-1;return d==E?l.pop():Ua.call(l,d,1),--this.size,!0}function l1(i){var l=this.__data__,d=ja(l,i);return d<0?n:l[d][1]}function c1(i){return ja(this.__data__,i)>-1}function u1(i,l){var d=this.__data__,E=ja(d,i);return E<0?(++this.size,d.push([i,l])):d[E][1]=l,this}mr.prototype.clear=a1,mr.prototype.delete=s1,mr.prototype.get=l1,mr.prototype.has=c1,mr.prototype.set=u1;function Cr(i){var l=-1,d=i==null?0:i.length;for(this.clear();++l<d;){var E=i[l];this.set(E[0],E[1])}}function d1(){this.size=0,this.__data__={hash:new co,map:new(Ri||mr),string:new co}}function _1(i){var l=os(this,i).delete(i);return this.size-=l?1:0,l}function f1(i){return os(this,i).get(i)}function g1(i){return os(this,i).has(i)}function h1(i,l){var d=os(this,i),E=d.size;return d.set(i,l),this.size+=d.size==E?0:1,this}Cr.prototype.clear=d1,Cr.prototype.delete=_1,Cr.prototype.get=f1,Cr.prototype.has=g1,Cr.prototype.set=h1;function uo(i){var l=-1,d=i==null?0:i.length;for(this.__data__=new Cr;++l<d;)this.add(i[l])}function v1(i){return this.__data__.set(i,u),this}function p1(i){return this.__data__.has(i)}uo.prototype.add=uo.prototype.push=v1,uo.prototype.has=p1;function nr(i){var l=this.__data__=new mr(i);this.size=l.size}function m1(){this.__data__=new mr,this.size=0}function C1(i){var l=this.__data__,d=l.delete(i);return this.size=l.size,d}function E1(i){return this.__data__.get(i)}function I1(i){return this.__data__.has(i)}function b1(i,l){var d=this.__data__;if(d instanceof mr){var E=d.__data__;if(!Ri||E.length<o-1)return E.push([i,l]),this.size=++d.size,this;d=this.__data__=new Cr(E)}return d.set(i,l),this.size=d.size,this}nr.prototype.clear=m1,nr.prototype.delete=C1,nr.prototype.get=E1,nr.prototype.has=I1,nr.prototype.set=b1;function T_(i,l){var d=Ke(i),E=!d&&vo(i),w=!d&&!E&&jr(i),y=!d&&!E&&!w&&qo(i),G=d||E||w||y,P=G?Pl(i.length,Dm):[],V=P.length;for(var ae in i)(l||pt.call(i,ae))&&!(G&&(ae=="length"||w&&(ae=="offset"||ae=="parent")||y&&(ae=="buffer"||ae=="byteLength"||ae=="byteOffset")||wr(ae,V)))&&P.push(ae);return P}function D_(i){var l=i.length;return l?i[oc(0,l-1)]:n}function w1(i,l){return is(pn(i),_o(l,0,i.length))}function O1(i){return is(pn(i))}function ql(i,l,d){(d!==n&&!rr(i[l],d)||d===n&&!(l in i))&&Er(i,l,d)}function $i(i,l,d){var E=i[l];(!(pt.call(i,l)&&rr(E,d))||d===n&&!(l in i))&&Er(i,l,d)}function ja(i,l){for(var d=i.length;d--;)if(rr(i[d][0],l))return d;return-1}function L1(i,l,d,E){return Br(i,function(w,y,G){l(E,w,d(w),G)}),E}function R_(i,l){return i&&lr(l,Bt(l),i)}function y1(i,l){return i&&lr(l,Cn(l),i)}function Er(i,l,d){l=="__proto__"&&Ha?Ha(i,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):i[l]=d}function Kl(i,l){for(var d=-1,E=l.length,w=X(E),y=i==null;++d<E;)w[d]=y?n:Sc(i,l[d]);return w}function _o(i,l,d){return i===i&&(d!==n&&(i=i<=d?i:d),l!==n&&(i=i>=l?i:l)),i}function Yn(i,l,d,E,w,y){var G,P=l&f,V=l&v,ae=l&m;if(d&&(G=w?d(i,E,w,y):d(i)),G!==n)return G;if(!Nt(i))return i;var se=Ke(i);if(se){if(G=g0(i),!P)return pn(i,G)}else{var ue=Qt(i),Ee=ue==ko||ue==$e;if(jr(i))return rf(i,P);if(ue==St||ue==Xt||Ee&&!w){if(G=V||Ee?{}:wf(i),!P)return V?r0(i,y1(G,i)):n0(i,R_(G,i))}else{if(!wt[ue])return w?i:{};G=h0(i,ue,P)}}y||(y=new nr);var Te=y.get(i);if(Te)return Te;y.set(i,G),Qf(i)?i.forEach(function(Pe){G.add(Yn(Pe,l,d,Pe,i,y))}):Xf(i)&&i.forEach(function(Pe,ot){G.set(ot,Yn(Pe,l,d,ot,i,y))});var He=ae?V?hc:gc:V?Cn:Bt,et=se?n:He(i);return Pn(et||i,function(Pe,ot){et&&(ot=Pe,Pe=i[ot]),$i(G,ot,Yn(Pe,l,d,ot,i,y))}),G}function A1(i){var l=Bt(i);return function(d){return k_(d,i,l)}}function k_(i,l,d){var E=d.length;if(i==null)return!E;for(i=It(i);E--;){var w=d[E],y=l[w],G=i[w];if(G===n&&!(w in i)||!y(G))return!1}return!0}function G_(i,l,d){if(typeof i!="function")throw new Bn(s);return Yi(function(){i.apply(n,d)},l)}function Fi(i,l,d,E){var w=-1,y=Sa,G=!0,P=i.length,V=[],ae=l.length;if(!P)return V;d&&(l=xt(l,An(d))),E?(y=Gl,G=!1):l.length>=o&&(y=Ti,G=!1,l=new uo(l));e:for(;++w<P;){var se=i[w],ue=d==null?se:d(se);if(se=E||se!==0?se:0,G&&ue===ue){for(var Ee=ae;Ee--;)if(l[Ee]===ue)continue e;V.push(se)}else y(l,ue,E)||V.push(se)}return V}var Br=cf(sr),M_=cf(Zl,!0);function x1(i,l){var d=!0;return Br(i,function(E,w,y){return d=!!l(E,w,y),d}),d}function Va(i,l,d){for(var E=-1,w=i.length;++E<w;){var y=i[E],G=l(y);if(G!=null&&(P===n?G===G&&!Sn(G):d(G,P)))var P=G,V=y}return V}function S1(i,l,d,E){var w=i.length;for(d=Je(d),d<0&&(d=-d>w?0:w+d),E=E===n||E>w?w:Je(E),E<0&&(E+=w),E=d>E?0:eg(E);d<E;)i[d++]=l;return i}function $_(i,l){var d=[];return Br(i,function(E,w,y){l(E,w,y)&&d.push(E)}),d}function jt(i,l,d,E,w){var y=-1,G=i.length;for(d||(d=p0),w||(w=[]);++y<G;){var P=i[y];l>0&&d(P)?l>1?jt(P,l-1,d,E,w):Ur(w,P):E||(w[w.length]=P)}return w}var Xl=uf(),F_=uf(!0);function sr(i,l){return i&&Xl(i,l,Bt)}function Zl(i,l){return i&&F_(i,l,Bt)}function qa(i,l){return Fr(l,function(d){return Or(i[d])})}function fo(i,l){l=Yr(l,i);for(var d=0,E=l.length;i!=null&&d<E;)i=i[cr(l[d++])];return d&&d==E?i:n}function U_(i,l,d){var E=l(i);return Ke(i)?E:Ur(E,d(i))}function tn(i){return i==null?i===n?op:Me:lo&&lo in It(i)?d0(i):O0(i)}function Ql(i,l){return i>l}function N1(i,l){return i!=null&&pt.call(i,l)}function T1(i,l){return i!=null&&l in It(i)}function D1(i,l,d){return i>=Zt(l,d)&&i<Ht(l,d)}function Jl(i,l,d){for(var E=d?Gl:Sa,w=i[0].length,y=i.length,G=y,P=X(y),V=1/0,ae=[];G--;){var se=i[G];G&&l&&(se=xt(se,An(l))),V=Zt(se.length,V),P[G]=!d&&(l||w>=120&&se.length>=120)?new uo(G&&se):n}se=i[0];var ue=-1,Ee=P[0];e:for(;++ue<w&&ae.length<V;){var Te=se[ue],He=l?l(Te):Te;if(Te=d||Te!==0?Te:0,!(Ee?Ti(Ee,He):E(ae,He,d))){for(G=y;--G;){var et=P[G];if(!(et?Ti(et,He):E(i[G],He,d)))continue e}Ee&&Ee.push(He),ae.push(Te)}}return ae}function R1(i,l,d,E){return sr(i,function(w,y,G){l(E,d(w),y,G)}),E}function Ui(i,l,d){l=Yr(l,i),i=Af(i,l);var E=i==null?i:i[cr(jn(l))];return E==null?n:yn(E,i,d)}function H_(i){return Dt(i)&&tn(i)==Xt}function k1(i){return Dt(i)&&tn(i)==Ni}function G1(i){return Dt(i)&&tn(i)==ar}function Hi(i,l,d,E,w){return i===l?!0:i==null||l==null||!Dt(i)&&!Dt(l)?i!==i&&l!==l:M1(i,l,d,E,Hi,w)}function M1(i,l,d,E,w,y){var G=Ke(i),P=Ke(l),V=G?vr:Qt(i),ae=P?vr:Qt(l);V=V==Xt?St:V,ae=ae==Xt?St:ae;var se=V==St,ue=ae==St,Ee=V==ae;if(Ee&&jr(i)){if(!jr(l))return!1;G=!0,se=!1}if(Ee&&!se)return y||(y=new nr),G||qo(i)?Ef(i,l,d,E,w,y):c0(i,l,V,d,E,w,y);if(!(d&C)){var Te=se&&pt.call(i,"__wrapped__"),He=ue&&pt.call(l,"__wrapped__");if(Te||He){var et=Te?i.value():i,Pe=He?l.value():l;return y||(y=new nr),w(et,Pe,d,E,y)}}return Ee?(y||(y=new nr),u0(i,l,d,E,w,y)):!1}function $1(i){return Dt(i)&&Qt(i)==be}function ec(i,l,d,E){var w=d.length,y=w,G=!E;if(i==null)return!y;for(i=It(i);w--;){var P=d[w];if(G&&P[2]?P[1]!==i[P[0]]:!(P[0]in i))return!1}for(;++w<y;){P=d[w];var V=P[0],ae=i[V],se=P[1];if(G&&P[2]){if(ae===n&&!(V in i))return!1}else{var ue=new nr;if(E)var Ee=E(ae,se,V,i,l,ue);if(!(Ee===n?Hi(se,ae,C|I,E,ue):Ee))return!1}}return!0}function P_(i){if(!Nt(i)||C0(i))return!1;var l=Or(i)?$m:Ap;return l.test(ho(i))}function F1(i){return Dt(i)&&tn(i)==Ai}function U1(i){return Dt(i)&&Qt(i)==er}function H1(i){return Dt(i)&&ds(i.length)&&!!yt[tn(i)]}function B_(i){return typeof i=="function"?i:i==null?En:typeof i=="object"?Ke(i)?z_(i[0],i[1]):Y_(i):dg(i)}function tc(i){if(!Wi(i))return Wm(i);var l=[];for(var d in It(i))pt.call(i,d)&&d!="constructor"&&l.push(d);return l}function P1(i){if(!Nt(i))return w0(i);var l=Wi(i),d=[];for(var E in i)E=="constructor"&&(l||!pt.call(i,E))||d.push(E);return d}function nc(i,l){return i<l}function W_(i,l){var d=-1,E=mn(i)?X(i.length):[];return Br(i,function(w,y,G){E[++d]=l(w,y,G)}),E}function Y_(i){var l=pc(i);return l.length==1&&l[0][2]?Lf(l[0][0],l[0][1]):function(d){return d===i||ec(d,i,l)}}function z_(i,l){return Cc(i)&&Of(l)?Lf(cr(i),l):function(d){var E=Sc(d,i);return E===n&&E===l?Nc(d,i):Hi(l,E,C|I)}}function Ka(i,l,d,E,w){i!==l&&Xl(l,function(y,G){if(w||(w=new nr),Nt(y))B1(i,l,G,d,Ka,E,w);else{var P=E?E(Ic(i,G),y,G+"",i,l,w):n;P===n&&(P=y),ql(i,G,P)}},Cn)}function B1(i,l,d,E,w,y,G){var P=Ic(i,d),V=Ic(l,d),ae=G.get(V);if(ae){ql(i,d,ae);return}var se=y?y(P,V,d+"",i,l,G):n,ue=se===n;if(ue){var Ee=Ke(V),Te=!Ee&&jr(V),He=!Ee&&!Te&&qo(V);se=V,Ee||Te||He?Ke(P)?se=P:kt(P)?se=pn(P):Te?(ue=!1,se=rf(V,!0)):He?(ue=!1,se=of(V,!0)):se=[]:zi(V)||vo(V)?(se=P,vo(P)?se=tg(P):(!Nt(P)||Or(P))&&(se=wf(V))):ue=!1}ue&&(G.set(V,se),w(se,V,E,y,G),G.delete(V)),ql(i,d,se)}function j_(i,l){var d=i.length;if(d)return l+=l<0?d:0,wr(l,d)?i[l]:n}function V_(i,l,d){l.length?l=xt(l,function(y){return Ke(y)?function(G){return fo(G,y.length===1?y[0]:y)}:y}):l=[En];var E=-1;l=xt(l,An(Ue()));var w=W_(i,function(y,G,P){var V=xt(l,function(ae){return ae(y)});return{criteria:V,index:++E,value:y}});return hm(w,function(y,G){return t0(y,G,d)})}function W1(i,l){return q_(i,l,function(d,E){return Nc(i,E)})}function q_(i,l,d){for(var E=-1,w=l.length,y={};++E<w;){var G=l[E],P=fo(i,G);d(P,G)&&Pi(y,Yr(G,i),P)}return y}function Y1(i){return function(l){return fo(l,i)}}function rc(i,l,d,E){var w=E?gm:$o,y=-1,G=l.length,P=i;for(i===l&&(l=pn(l)),d&&(P=xt(i,An(d)));++y<G;)for(var V=0,ae=l[y],se=d?d(ae):ae;(V=w(P,se,V,E))>-1;)P!==i&&Ua.call(P,V,1),Ua.call(i,V,1);return i}function K_(i,l){for(var d=i?l.length:0,E=d-1;d--;){var w=l[d];if(d==E||w!==y){var y=w;wr(w)?Ua.call(i,w,1):sc(i,w)}}return i}function oc(i,l){return i+Ba(S_()*(l-i+1))}function z1(i,l,d,E){for(var w=-1,y=Ht(Pa((l-i)/(d||1)),0),G=X(y);y--;)G[E?y:++w]=i,i+=d;return G}function ic(i,l){var d="";if(!i||l<1||l>xe)return d;do l%2&&(d+=i),l=Ba(l/2),l&&(i+=i);while(l);return d}function tt(i,l){return bc(yf(i,l,En),i+"")}function j1(i){return D_(Ko(i))}function V1(i,l){var d=Ko(i);return is(d,_o(l,0,d.length))}function Pi(i,l,d,E){if(!Nt(i))return i;l=Yr(l,i);for(var w=-1,y=l.length,G=y-1,P=i;P!=null&&++w<y;){var V=cr(l[w]),ae=d;if(V==="__proto__"||V==="constructor"||V==="prototype")return i;if(w!=G){var se=P[V];ae=E?E(se,V,P):n,ae===n&&(ae=Nt(se)?se:wr(l[w+1])?[]:{})}$i(P,V,ae),P=P[V]}return i}var X_=Wa?function(i,l){return Wa.set(i,l),i}:En,q1=Ha?function(i,l){return Ha(i,"toString",{configurable:!0,enumerable:!1,value:Dc(l),writable:!0})}:En;function K1(i){return is(Ko(i))}function zn(i,l,d){var E=-1,w=i.length;l<0&&(l=-l>w?0:w+l),d=d>w?w:d,d<0&&(d+=w),w=l>d?0:d-l>>>0,l>>>=0;for(var y=X(w);++E<w;)y[E]=i[E+l];return y}function X1(i,l){var d;return Br(i,function(E,w,y){return d=l(E,w,y),!d}),!!d}function Xa(i,l,d){var E=0,w=i==null?E:i.length;if(typeof l=="number"&&l===l&&w<=Lt){for(;E<w;){var y=E+w>>>1,G=i[y];G!==null&&!Sn(G)&&(d?G<=l:G<l)?E=y+1:w=y}return w}return ac(i,l,En,d)}function ac(i,l,d,E){var w=0,y=i==null?0:i.length;if(y===0)return 0;l=d(l);for(var G=l!==l,P=l===null,V=Sn(l),ae=l===n;w<y;){var se=Ba((w+y)/2),ue=d(i[se]),Ee=ue!==n,Te=ue===null,He=ue===ue,et=Sn(ue);if(G)var Pe=E||He;else ae?Pe=He&&(E||Ee):P?Pe=He&&Ee&&(E||!Te):V?Pe=He&&Ee&&!Te&&(E||!et):Te||et?Pe=!1:Pe=E?ue<=l:ue<l;Pe?w=se+1:y=se}return Zt(y,Un)}function Z_(i,l){for(var d=-1,E=i.length,w=0,y=[];++d<E;){var G=i[d],P=l?l(G):G;if(!d||!rr(P,V)){var V=P;y[w++]=G===0?0:G}}return y}function Q_(i){return typeof i=="number"?i:Sn(i)?_t:+i}function xn(i){if(typeof i=="string")return i;if(Ke(i))return xt(i,xn)+"";if(Sn(i))return N_?N_.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Wr(i,l,d){var E=-1,w=Sa,y=i.length,G=!0,P=[],V=P;if(d)G=!1,w=Gl;else if(y>=o){var ae=l?null:s0(i);if(ae)return Ta(ae);G=!1,w=Ti,V=new uo}else V=l?[]:P;e:for(;++E<y;){var se=i[E],ue=l?l(se):se;if(se=d||se!==0?se:0,G&&ue===ue){for(var Ee=V.length;Ee--;)if(V[Ee]===ue)continue e;l&&V.push(ue),P.push(se)}else w(V,ue,d)||(V!==P&&V.push(ue),P.push(se))}return P}function sc(i,l){return l=Yr(l,i),i=Af(i,l),i==null||delete i[cr(jn(l))]}function J_(i,l,d,E){return Pi(i,l,d(fo(i,l)),E)}function Za(i,l,d,E){for(var w=i.length,y=E?w:-1;(E?y--:++y<w)&&l(i[y],y,i););return d?zn(i,E?0:y,E?y+1:w):zn(i,E?y+1:0,E?w:y)}function ef(i,l){var d=i;return d instanceof it&&(d=d.value()),Ml(l,function(E,w){return w.func.apply(w.thisArg,Ur([E],w.args))},d)}function lc(i,l,d){var E=i.length;if(E<2)return E?Wr(i[0]):[];for(var w=-1,y=X(E);++w<E;)for(var G=i[w],P=-1;++P<E;)P!=w&&(y[w]=Fi(y[w]||G,i[P],l,d));return Wr(jt(y,1),l,d)}function tf(i,l,d){for(var E=-1,w=i.length,y=l.length,G={};++E<w;){var P=E<y?l[E]:n;d(G,i[E],P)}return G}function cc(i){return kt(i)?i:[]}function uc(i){return typeof i=="function"?i:En}function Yr(i,l){return Ke(i)?i:Cc(i,l)?[i]:Tf(ht(i))}var Z1=tt;function zr(i,l,d){var E=i.length;return d=d===n?E:d,!l&&d>=E?i:zn(i,l,d)}var nf=Fm||function(i){return zt.clearTimeout(i)};function rf(i,l){if(l)return i.slice();var d=i.length,E=O_?O_(d):new i.constructor(d);return i.copy(E),E}function dc(i){var l=new i.constructor(i.byteLength);return new $a(l).set(new $a(i)),l}function Q1(i,l){var d=l?dc(i.buffer):i.buffer;return new i.constructor(d,i.byteOffset,i.byteLength)}function J1(i){var l=new i.constructor(i.source,Hd.exec(i));return l.lastIndex=i.lastIndex,l}function e0(i){return Mi?It(Mi.call(i)):{}}function of(i,l){var d=l?dc(i.buffer):i.buffer;return new i.constructor(d,i.byteOffset,i.length)}function af(i,l){if(i!==l){var d=i!==n,E=i===null,w=i===i,y=Sn(i),G=l!==n,P=l===null,V=l===l,ae=Sn(l);if(!P&&!ae&&!y&&i>l||y&&G&&V&&!P&&!ae||E&&G&&V||!d&&V||!w)return 1;if(!E&&!y&&!ae&&i<l||ae&&d&&w&&!E&&!y||P&&d&&w||!G&&w||!V)return-1}return 0}function t0(i,l,d){for(var E=-1,w=i.criteria,y=l.criteria,G=w.length,P=d.length;++E<G;){var V=af(w[E],y[E]);if(V){if(E>=P)return V;var ae=d[E];return V*(ae=="desc"?-1:1)}}return i.index-l.index}function sf(i,l,d,E){for(var w=-1,y=i.length,G=d.length,P=-1,V=l.length,ae=Ht(y-G,0),se=X(V+ae),ue=!E;++P<V;)se[P]=l[P];for(;++w<G;)(ue||w<y)&&(se[d[w]]=i[w]);for(;ae--;)se[P++]=i[w++];return se}function lf(i,l,d,E){for(var w=-1,y=i.length,G=-1,P=d.length,V=-1,ae=l.length,se=Ht(y-P,0),ue=X(se+ae),Ee=!E;++w<se;)ue[w]=i[w];for(var Te=w;++V<ae;)ue[Te+V]=l[V];for(;++G<P;)(Ee||w<y)&&(ue[Te+d[G]]=i[w++]);return ue}function pn(i,l){var d=-1,E=i.length;for(l||(l=X(E));++d<E;)l[d]=i[d];return l}function lr(i,l,d,E){var w=!d;d||(d={});for(var y=-1,G=l.length;++y<G;){var P=l[y],V=E?E(d[P],i[P],P,d,i):n;V===n&&(V=i[P]),w?Er(d,P,V):$i(d,P,V)}return d}function n0(i,l){return lr(i,mc(i),l)}function r0(i,l){return lr(i,If(i),l)}function Qa(i,l){return function(d,E){var w=Ke(d)?lm:L1,y=l?l():{};return w(d,i,Ue(E,2),y)}}function zo(i){return tt(function(l,d){var E=-1,w=d.length,y=w>1?d[w-1]:n,G=w>2?d[2]:n;for(y=i.length>3&&typeof y=="function"?(w--,y):n,G&&nn(d[0],d[1],G)&&(y=w<3?n:y,w=1),l=It(l);++E<w;){var P=d[E];P&&i(l,P,E,y)}return l})}function cf(i,l){return function(d,E){if(d==null)return d;if(!mn(d))return i(d,E);for(var w=d.length,y=l?w:-1,G=It(d);(l?y--:++y<w)&&E(G[y],y,G)!==!1;);return d}}function uf(i){return function(l,d,E){for(var w=-1,y=It(l),G=E(l),P=G.length;P--;){var V=G[i?P:++w];if(d(y[V],V,y)===!1)break}return l}}function o0(i,l,d){var E=l&O,w=Bi(i);function y(){var G=this&&this!==zt&&this instanceof y?w:i;return G.apply(E?d:this,arguments)}return y}function df(i){return function(l){l=ht(l);var d=Fo(l)?tr(l):n,E=d?d[0]:l.charAt(0),w=d?zr(d,1).join(""):l.slice(1);return E[i]()+w}}function jo(i){return function(l){return Ml(cg(lg(l).replace(qp,"")),i,"")}}function Bi(i){return function(){var l=arguments;switch(l.length){case 0:return new i;case 1:return new i(l[0]);case 2:return new i(l[0],l[1]);case 3:return new i(l[0],l[1],l[2]);case 4:return new i(l[0],l[1],l[2],l[3]);case 5:return new i(l[0],l[1],l[2],l[3],l[4]);case 6:return new i(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new i(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=Yo(i.prototype),E=i.apply(d,l);return Nt(E)?E:d}}function i0(i,l,d){var E=Bi(i);function w(){for(var y=arguments.length,G=X(y),P=y,V=Vo(w);P--;)G[P]=arguments[P];var ae=y<3&&G[0]!==V&&G[y-1]!==V?[]:Hr(G,V);if(y-=ae.length,y<d)return vf(i,l,Ja,w.placeholder,n,G,ae,n,n,d-y);var se=this&&this!==zt&&this instanceof w?E:i;return yn(se,this,G)}return w}function _f(i){return function(l,d,E){var w=It(l);if(!mn(l)){var y=Ue(d,3);l=Bt(l),d=function(P){return y(w[P],P,w)}}var G=i(l,d,E);return G>-1?w[y?l[G]:G]:n}}function ff(i){return br(function(l){var d=l.length,E=d,w=Wn.prototype.thru;for(i&&l.reverse();E--;){var y=l[E];if(typeof y!="function")throw new Bn(s);if(w&&!G&&rs(y)=="wrapper")var G=new Wn([],!0)}for(E=G?E:d;++E<d;){y=l[E];var P=rs(y),V=P=="wrapper"?vc(y):n;V&&Ec(V[0])&&V[1]==(W|D|k|K)&&!V[4].length&&V[9]==1?G=G[rs(V[0])].apply(G,V[3]):G=y.length==1&&Ec(y)?G[P]():G.thru(y)}return function(){var ae=arguments,se=ae[0];if(G&&ae.length==1&&Ke(se))return G.plant(se).value();for(var ue=0,Ee=d?l[ue].apply(this,ae):se;++ue<d;)Ee=l[ue].call(this,Ee);return Ee}})}function Ja(i,l,d,E,w,y,G,P,V,ae){var se=l&W,ue=l&O,Ee=l&b,Te=l&(D|$),He=l&oe,et=Ee?n:Bi(i);function Pe(){for(var ot=arguments.length,at=X(ot),Nn=ot;Nn--;)at[Nn]=arguments[Nn];if(Te)var rn=Vo(Pe),Tn=pm(at,rn);if(E&&(at=sf(at,E,w,Te)),y&&(at=lf(at,y,G,Te)),ot-=Tn,Te&&ot<ae){var Gt=Hr(at,rn);return vf(i,l,Ja,Pe.placeholder,d,at,Gt,P,V,ae-ot)}var or=ue?d:this,yr=Ee?or[i]:i;return ot=at.length,P?at=L0(at,P):He&&ot>1&&at.reverse(),se&&V<ot&&(at.length=V),this&&this!==zt&&this instanceof Pe&&(yr=et||Bi(yr)),yr.apply(or,at)}return Pe}function gf(i,l){return function(d,E){return R1(d,i,l(E),{})}}function es(i,l){return function(d,E){var w;if(d===n&&E===n)return l;if(d!==n&&(w=d),E!==n){if(w===n)return E;typeof d=="string"||typeof E=="string"?(d=xn(d),E=xn(E)):(d=Q_(d),E=Q_(E)),w=i(d,E)}return w}}function _c(i){return br(function(l){return l=xt(l,An(Ue())),tt(function(d){var E=this;return i(l,function(w){return yn(w,E,d)})})})}function ts(i,l){l=l===n?" ":xn(l);var d=l.length;if(d<2)return d?ic(l,i):l;var E=ic(l,Pa(i/Uo(l)));return Fo(l)?zr(tr(E),0,i).join(""):E.slice(0,i)}function a0(i,l,d,E){var w=l&O,y=Bi(i);function G(){for(var P=-1,V=arguments.length,ae=-1,se=E.length,ue=X(se+V),Ee=this&&this!==zt&&this instanceof G?y:i;++ae<se;)ue[ae]=E[ae];for(;V--;)ue[ae++]=arguments[++P];return yn(Ee,w?d:this,ue)}return G}function hf(i){return function(l,d,E){return E&&typeof E!="number"&&nn(l,d,E)&&(d=E=n),l=Lr(l),d===n?(d=l,l=0):d=Lr(d),E=E===n?l<d?1:-1:Lr(E),z1(l,d,E,i)}}function ns(i){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=Vn(l),d=Vn(d)),i(l,d)}}function vf(i,l,d,E,w,y,G,P,V,ae){var se=l&D,ue=se?G:n,Ee=se?n:G,Te=se?y:n,He=se?n:y;l|=se?k:Y,l&=~(se?Y:k),l&x||(l&=-4);var et=[i,l,w,Te,ue,He,Ee,P,V,ae],Pe=d.apply(n,et);return Ec(i)&&xf(Pe,et),Pe.placeholder=E,Sf(Pe,i,l)}function fc(i){var l=Ut[i];return function(d,E){if(d=Vn(d),E=E==null?0:Zt(Je(E),292),E&&x_(d)){var w=(ht(d)+"e").split("e"),y=l(w[0]+"e"+(+w[1]+E));return w=(ht(y)+"e").split("e"),+(w[0]+"e"+(+w[1]-E))}return l(d)}}var s0=Bo&&1/Ta(new Bo([,-0]))[1]==lt?function(i){return new Bo(i)}:Gc;function pf(i){return function(l){var d=Qt(l);return d==be?Wl(l):d==er?Om(l):vm(l,i(l))}}function Ir(i,l,d,E,w,y,G,P){var V=l&b;if(!V&&typeof i!="function")throw new Bn(s);var ae=E?E.length:0;if(ae||(l&=-97,E=w=n),G=G===n?G:Ht(Je(G),0),P=P===n?P:Je(P),ae-=w?w.length:0,l&Y){var se=E,ue=w;E=w=n}var Ee=V?n:vc(i),Te=[i,l,d,E,w,se,ue,y,G,P];if(Ee&&b0(Te,Ee),i=Te[0],l=Te[1],d=Te[2],E=Te[3],w=Te[4],P=Te[9]=Te[9]===n?V?0:i.length:Ht(Te[9]-ae,0),!P&&l&(D|$)&&(l&=-25),!l||l==O)var He=o0(i,l,d);else l==D||l==$?He=i0(i,l,P):(l==k||l==(O|k))&&!w.length?He=a0(i,l,d,E):He=Ja.apply(n,Te);var et=Ee?X_:xf;return Sf(et(He,Te),i,l)}function mf(i,l,d,E){return i===n||rr(i,Po[d])&&!pt.call(E,d)?l:i}function Cf(i,l,d,E,w,y){return Nt(i)&&Nt(l)&&(y.set(l,i),Ka(i,l,n,Cf,y),y.delete(l)),i}function l0(i){return zi(i)?n:i}function Ef(i,l,d,E,w,y){var G=d&C,P=i.length,V=l.length;if(P!=V&&!(G&&V>P))return!1;var ae=y.get(i),se=y.get(l);if(ae&&se)return ae==l&&se==i;var ue=-1,Ee=!0,Te=d&I?new uo:n;for(y.set(i,l),y.set(l,i);++ue<P;){var He=i[ue],et=l[ue];if(E)var Pe=G?E(et,He,ue,l,i,y):E(He,et,ue,i,l,y);if(Pe!==n){if(Pe)continue;Ee=!1;break}if(Te){if(!$l(l,function(ot,at){if(!Ti(Te,at)&&(He===ot||w(He,ot,d,E,y)))return Te.push(at)})){Ee=!1;break}}else if(!(He===et||w(He,et,d,E,y))){Ee=!1;break}}return y.delete(i),y.delete(l),Ee}function c0(i,l,d,E,w,y,G){switch(d){case Go:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case Ni:return!(i.byteLength!=l.byteLength||!y(new $a(i),new $a(l)));case pr:case ar:case Ge:return rr(+i,+l);case $r:return i.name==l.name&&i.message==l.message;case Ai:case xi:return i==l+"";case be:var P=Wl;case er:var V=E&C;if(P||(P=Ta),i.size!=l.size&&!V)return!1;var ae=G.get(i);if(ae)return ae==l;E|=I,G.set(i,l);var se=Ef(P(i),P(l),E,w,y,G);return G.delete(i),se;case La:if(Mi)return Mi.call(i)==Mi.call(l)}return!1}function u0(i,l,d,E,w,y){var G=d&C,P=gc(i),V=P.length,ae=gc(l),se=ae.length;if(V!=se&&!G)return!1;for(var ue=V;ue--;){var Ee=P[ue];if(!(G?Ee in l:pt.call(l,Ee)))return!1}var Te=y.get(i),He=y.get(l);if(Te&&He)return Te==l&&He==i;var et=!0;y.set(i,l),y.set(l,i);for(var Pe=G;++ue<V;){Ee=P[ue];var ot=i[Ee],at=l[Ee];if(E)var Nn=G?E(at,ot,Ee,l,i,y):E(ot,at,Ee,i,l,y);if(!(Nn===n?ot===at||w(ot,at,d,E,y):Nn)){et=!1;break}Pe||(Pe=Ee=="constructor")}if(et&&!Pe){var rn=i.constructor,Tn=l.constructor;rn!=Tn&&"constructor"in i&&"constructor"in l&&!(typeof rn=="function"&&rn instanceof rn&&typeof Tn=="function"&&Tn instanceof Tn)&&(et=!1)}return y.delete(i),y.delete(l),et}function br(i){return bc(yf(i,n,Gf),i+"")}function gc(i){return U_(i,Bt,mc)}function hc(i){return U_(i,Cn,If)}var vc=Wa?function(i){return Wa.get(i)}:Gc;function rs(i){for(var l=i.name+"",d=Wo[l],E=pt.call(Wo,l)?d.length:0;E--;){var w=d[E],y=w.func;if(y==null||y==i)return w.name}return l}function Vo(i){var l=pt.call(L,"placeholder")?L:i;return l.placeholder}function Ue(){var i=L.iteratee||Rc;return i=i===Rc?B_:i,arguments.length?i(arguments[0],arguments[1]):i}function os(i,l){var d=i.__data__;return m0(l)?d[typeof l=="string"?"string":"hash"]:d.map}function pc(i){for(var l=Bt(i),d=l.length;d--;){var E=l[d],w=i[E];l[d]=[E,w,Of(w)]}return l}function go(i,l){var d=Im(i,l);return P_(d)?d:n}function d0(i){var l=pt.call(i,lo),d=i[lo];try{i[lo]=n;var E=!0}catch{}var w=Ga.call(i);return E&&(l?i[lo]=d:delete i[lo]),w}var mc=zl?function(i){return i==null?[]:(i=It(i),Fr(zl(i),function(l){return y_.call(i,l)}))}:Mc,If=zl?function(i){for(var l=[];i;)Ur(l,mc(i)),i=Fa(i);return l}:Mc,Qt=tn;(jl&&Qt(new jl(new ArrayBuffer(1)))!=Go||Ri&&Qt(new Ri)!=be||Vl&&Qt(Vl.resolve())!=Md||Bo&&Qt(new Bo)!=er||ki&&Qt(new ki)!=Si)&&(Qt=function(i){var l=tn(i),d=l==St?i.constructor:n,E=d?ho(d):"";if(E)switch(E){case Vm:return Go;case qm:return be;case Km:return Md;case Xm:return er;case Zm:return Si}return l});function _0(i,l,d){for(var E=-1,w=d.length;++E<w;){var y=d[E],G=y.size;switch(y.type){case"drop":i+=G;break;case"dropRight":l-=G;break;case"take":l=Zt(l,i+G);break;case"takeRight":i=Ht(i,l-G);break}}return{start:i,end:l}}function f0(i){var l=i.match(Cp);return l?l[1].split(Ep):[]}function bf(i,l,d){l=Yr(l,i);for(var E=-1,w=l.length,y=!1;++E<w;){var G=cr(l[E]);if(!(y=i!=null&&d(i,G)))break;i=i[G]}return y||++E!=w?y:(w=i==null?0:i.length,!!w&&ds(w)&&wr(G,w)&&(Ke(i)||vo(i)))}function g0(i){var l=i.length,d=new i.constructor(l);return l&&typeof i[0]=="string"&&pt.call(i,"index")&&(d.index=i.index,d.input=i.input),d}function wf(i){return typeof i.constructor=="function"&&!Wi(i)?Yo(Fa(i)):{}}function h0(i,l,d){var E=i.constructor;switch(l){case Ni:return dc(i);case pr:case ar:return new E(+i);case Go:return Q1(i,d);case pl:case ml:case Cl:case El:case Il:case bl:case wl:case Ol:case Ll:return of(i,d);case be:return new E;case Ge:case xi:return new E(i);case Ai:return J1(i);case er:return new E;case La:return e0(i)}}function v0(i,l){var d=l.length;if(!d)return i;var E=d-1;return l[E]=(d>1?"& ":"")+l[E],l=l.join(d>2?", ":" "),i.replace(mp,`{
/* [wrapped with `+l+`] */
`)}function p0(i){return Ke(i)||vo(i)||!!(A_&&i&&i[A_])}function wr(i,l){var d=typeof i;return l=l??xe,!!l&&(d=="number"||d!="symbol"&&Sp.test(i))&&i>-1&&i%1==0&&i<l}function nn(i,l,d){if(!Nt(d))return!1;var E=typeof l;return(E=="number"?mn(d)&&wr(l,d.length):E=="string"&&l in d)?rr(d[l],i):!1}function Cc(i,l){if(Ke(i))return!1;var d=typeof i;return d=="number"||d=="symbol"||d=="boolean"||i==null||Sn(i)?!0:gp.test(i)||!fp.test(i)||l!=null&&i in It(l)}function m0(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function Ec(i){var l=rs(i),d=L[l];if(typeof d!="function"||!(l in it.prototype))return!1;if(i===d)return!0;var E=vc(d);return!!E&&i===E[0]}function C0(i){return!!w_&&w_ in i}var E0=Ra?Or:$c;function Wi(i){var l=i&&i.constructor,d=typeof l=="function"&&l.prototype||Po;return i===d}function Of(i){return i===i&&!Nt(i)}function Lf(i,l){return function(d){return d==null?!1:d[i]===l&&(l!==n||i in It(d))}}function I0(i){var l=cs(i,function(E){return d.size===g&&d.clear(),E}),d=l.cache;return l}function b0(i,l){var d=i[1],E=l[1],w=d|E,y=w<(O|b|W),G=E==W&&d==D||E==W&&d==K&&i[7].length<=l[8]||E==(W|K)&&l[7].length<=l[8]&&d==D;if(!(y||G))return i;E&O&&(i[2]=l[2],w|=d&O?0:x);var P=l[3];if(P){var V=i[3];i[3]=V?sf(V,P,l[4]):P,i[4]=V?Hr(i[3],h):l[4]}return P=l[5],P&&(V=i[5],i[5]=V?lf(V,P,l[6]):P,i[6]=V?Hr(i[5],h):l[6]),P=l[7],P&&(i[7]=P),E&W&&(i[8]=i[8]==null?l[8]:Zt(i[8],l[8])),i[9]==null&&(i[9]=l[9]),i[0]=l[0],i[1]=w,i}function w0(i){var l=[];if(i!=null)for(var d in It(i))l.push(d);return l}function O0(i){return Ga.call(i)}function yf(i,l,d){return l=Ht(l===n?i.length-1:l,0),function(){for(var E=arguments,w=-1,y=Ht(E.length-l,0),G=X(y);++w<y;)G[w]=E[l+w];w=-1;for(var P=X(l+1);++w<l;)P[w]=E[w];return P[l]=d(G),yn(i,this,P)}}function Af(i,l){return l.length<2?i:fo(i,zn(l,0,-1))}function L0(i,l){for(var d=i.length,E=Zt(l.length,d),w=pn(i);E--;){var y=l[E];i[E]=wr(y,d)?w[y]:n}return i}function Ic(i,l){if(!(l==="constructor"&&typeof i[l]=="function")&&l!="__proto__")return i[l]}var xf=Nf(X_),Yi=Hm||function(i,l){return zt.setTimeout(i,l)},bc=Nf(q1);function Sf(i,l,d){var E=l+"";return bc(i,v0(E,y0(f0(E),d)))}function Nf(i){var l=0,d=0;return function(){var E=Ym(),w=Ie-(E-d);if(d=E,w>0){if(++l>=le)return arguments[0]}else l=0;return i.apply(n,arguments)}}function is(i,l){var d=-1,E=i.length,w=E-1;for(l=l===n?E:l;++d<l;){var y=oc(d,w),G=i[y];i[y]=i[d],i[d]=G}return i.length=l,i}var Tf=I0(function(i){var l=[];return i.charCodeAt(0)===46&&l.push(""),i.replace(hp,function(d,E,w,y){l.push(w?y.replace(wp,"$1"):E||d)}),l});function cr(i){if(typeof i=="string"||Sn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function ho(i){if(i!=null){try{return ka.call(i)}catch{}try{return i+""}catch{}}return""}function y0(i,l){return Pn(Ln,function(d){var E="_."+d[0];l&d[1]&&!Sa(i,E)&&i.push(E)}),i.sort()}function Df(i){if(i instanceof it)return i.clone();var l=new Wn(i.__wrapped__,i.__chain__);return l.__actions__=pn(i.__actions__),l.__index__=i.__index__,l.__values__=i.__values__,l}function A0(i,l,d){(d?nn(i,l,d):l===n)?l=1:l=Ht(Je(l),0);var E=i==null?0:i.length;if(!E||l<1)return[];for(var w=0,y=0,G=X(Pa(E/l));w<E;)G[y++]=zn(i,w,w+=l);return G}function x0(i){for(var l=-1,d=i==null?0:i.length,E=0,w=[];++l<d;){var y=i[l];y&&(w[E++]=y)}return w}function S0(){var i=arguments.length;if(!i)return[];for(var l=X(i-1),d=arguments[0],E=i;E--;)l[E-1]=arguments[E];return Ur(Ke(d)?pn(d):[d],jt(l,1))}var N0=tt(function(i,l){return kt(i)?Fi(i,jt(l,1,kt,!0)):[]}),T0=tt(function(i,l){var d=jn(l);return kt(d)&&(d=n),kt(i)?Fi(i,jt(l,1,kt,!0),Ue(d,2)):[]}),D0=tt(function(i,l){var d=jn(l);return kt(d)&&(d=n),kt(i)?Fi(i,jt(l,1,kt,!0),n,d):[]});function R0(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Je(l),zn(i,l<0?0:l,E)):[]}function k0(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Je(l),l=E-l,zn(i,0,l<0?0:l)):[]}function G0(i,l){return i&&i.length?Za(i,Ue(l,3),!0,!0):[]}function M0(i,l){return i&&i.length?Za(i,Ue(l,3),!0):[]}function $0(i,l,d,E){var w=i==null?0:i.length;return w?(d&&typeof d!="number"&&nn(i,l,d)&&(d=0,E=w),S1(i,l,d,E)):[]}function Rf(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=d==null?0:Je(d);return w<0&&(w=Ht(E+w,0)),Na(i,Ue(l,3),w)}function kf(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=E-1;return d!==n&&(w=Je(d),w=d<0?Ht(E+w,0):Zt(w,E-1)),Na(i,Ue(l,3),w,!0)}function Gf(i){var l=i==null?0:i.length;return l?jt(i,1):[]}function F0(i){var l=i==null?0:i.length;return l?jt(i,lt):[]}function U0(i,l){var d=i==null?0:i.length;return d?(l=l===n?1:Je(l),jt(i,l)):[]}function H0(i){for(var l=-1,d=i==null?0:i.length,E={};++l<d;){var w=i[l];E[w[0]]=w[1]}return E}function Mf(i){return i&&i.length?i[0]:n}function P0(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=d==null?0:Je(d);return w<0&&(w=Ht(E+w,0)),$o(i,l,w)}function B0(i){var l=i==null?0:i.length;return l?zn(i,0,-1):[]}var W0=tt(function(i){var l=xt(i,cc);return l.length&&l[0]===i[0]?Jl(l):[]}),Y0=tt(function(i){var l=jn(i),d=xt(i,cc);return l===jn(d)?l=n:d.pop(),d.length&&d[0]===i[0]?Jl(d,Ue(l,2)):[]}),z0=tt(function(i){var l=jn(i),d=xt(i,cc);return l=typeof l=="function"?l:n,l&&d.pop(),d.length&&d[0]===i[0]?Jl(d,n,l):[]});function j0(i,l){return i==null?"":Bm.call(i,l)}function jn(i){var l=i==null?0:i.length;return l?i[l-1]:n}function V0(i,l,d){var E=i==null?0:i.length;if(!E)return-1;var w=E;return d!==n&&(w=Je(d),w=w<0?Ht(E+w,0):Zt(w,E-1)),l===l?ym(i,l,w):Na(i,h_,w,!0)}function q0(i,l){return i&&i.length?j_(i,Je(l)):n}var K0=tt($f);function $f(i,l){return i&&i.length&&l&&l.length?rc(i,l):i}function X0(i,l,d){return i&&i.length&&l&&l.length?rc(i,l,Ue(d,2)):i}function Z0(i,l,d){return i&&i.length&&l&&l.length?rc(i,l,n,d):i}var Q0=br(function(i,l){var d=i==null?0:i.length,E=Kl(i,l);return K_(i,xt(l,function(w){return wr(w,d)?+w:w}).sort(af)),E});function J0(i,l){var d=[];if(!(i&&i.length))return d;var E=-1,w=[],y=i.length;for(l=Ue(l,3);++E<y;){var G=i[E];l(G,E,i)&&(d.push(G),w.push(E))}return K_(i,w),d}function wc(i){return i==null?i:jm.call(i)}function eC(i,l,d){var E=i==null?0:i.length;return E?(d&&typeof d!="number"&&nn(i,l,d)?(l=0,d=E):(l=l==null?0:Je(l),d=d===n?E:Je(d)),zn(i,l,d)):[]}function tC(i,l){return Xa(i,l)}function nC(i,l,d){return ac(i,l,Ue(d,2))}function rC(i,l){var d=i==null?0:i.length;if(d){var E=Xa(i,l);if(E<d&&rr(i[E],l))return E}return-1}function oC(i,l){return Xa(i,l,!0)}function iC(i,l,d){return ac(i,l,Ue(d,2),!0)}function aC(i,l){var d=i==null?0:i.length;if(d){var E=Xa(i,l,!0)-1;if(rr(i[E],l))return E}return-1}function sC(i){return i&&i.length?Z_(i):[]}function lC(i,l){return i&&i.length?Z_(i,Ue(l,2)):[]}function cC(i){var l=i==null?0:i.length;return l?zn(i,1,l):[]}function uC(i,l,d){return i&&i.length?(l=d||l===n?1:Je(l),zn(i,0,l<0?0:l)):[]}function dC(i,l,d){var E=i==null?0:i.length;return E?(l=d||l===n?1:Je(l),l=E-l,zn(i,l<0?0:l,E)):[]}function _C(i,l){return i&&i.length?Za(i,Ue(l,3),!1,!0):[]}function fC(i,l){return i&&i.length?Za(i,Ue(l,3)):[]}var gC=tt(function(i){return Wr(jt(i,1,kt,!0))}),hC=tt(function(i){var l=jn(i);return kt(l)&&(l=n),Wr(jt(i,1,kt,!0),Ue(l,2))}),vC=tt(function(i){var l=jn(i);return l=typeof l=="function"?l:n,Wr(jt(i,1,kt,!0),n,l)});function pC(i){return i&&i.length?Wr(i):[]}function mC(i,l){return i&&i.length?Wr(i,Ue(l,2)):[]}function CC(i,l){return l=typeof l=="function"?l:n,i&&i.length?Wr(i,n,l):[]}function Oc(i){if(!(i&&i.length))return[];var l=0;return i=Fr(i,function(d){if(kt(d))return l=Ht(d.length,l),!0}),Pl(l,function(d){return xt(i,Fl(d))})}function Ff(i,l){if(!(i&&i.length))return[];var d=Oc(i);return l==null?d:xt(d,function(E){return yn(l,n,E)})}var EC=tt(function(i,l){return kt(i)?Fi(i,l):[]}),IC=tt(function(i){return lc(Fr(i,kt))}),bC=tt(function(i){var l=jn(i);return kt(l)&&(l=n),lc(Fr(i,kt),Ue(l,2))}),wC=tt(function(i){var l=jn(i);return l=typeof l=="function"?l:n,lc(Fr(i,kt),n,l)}),OC=tt(Oc);function LC(i,l){return tf(i||[],l||[],$i)}function yC(i,l){return tf(i||[],l||[],Pi)}var AC=tt(function(i){var l=i.length,d=l>1?i[l-1]:n;return d=typeof d=="function"?(i.pop(),d):n,Ff(i,d)});function Uf(i){var l=L(i);return l.__chain__=!0,l}function xC(i,l){return l(i),i}function as(i,l){return l(i)}var SC=br(function(i){var l=i.length,d=l?i[0]:0,E=this.__wrapped__,w=function(y){return Kl(y,i)};return l>1||this.__actions__.length||!(E instanceof it)||!wr(d)?this.thru(w):(E=E.slice(d,+d+(l?1:0)),E.__actions__.push({func:as,args:[w],thisArg:n}),new Wn(E,this.__chain__).thru(function(y){return l&&!y.length&&y.push(n),y}))});function NC(){return Uf(this)}function TC(){return new Wn(this.value(),this.__chain__)}function DC(){this.__values__===n&&(this.__values__=Jf(this.value()));var i=this.__index__>=this.__values__.length,l=i?n:this.__values__[this.__index__++];return{done:i,value:l}}function RC(){return this}function kC(i){for(var l,d=this;d instanceof za;){var E=Df(d);E.__index__=0,E.__values__=n,l?w.__wrapped__=E:l=E;var w=E;d=d.__wrapped__}return w.__wrapped__=i,l}function GC(){var i=this.__wrapped__;if(i instanceof it){var l=i;return this.__actions__.length&&(l=new it(this)),l=l.reverse(),l.__actions__.push({func:as,args:[wc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(wc)}function MC(){return ef(this.__wrapped__,this.__actions__)}var $C=Qa(function(i,l,d){pt.call(i,d)?++i[d]:Er(i,d,1)});function FC(i,l,d){var E=Ke(i)?f_:x1;return d&&nn(i,l,d)&&(l=n),E(i,Ue(l,3))}function UC(i,l){var d=Ke(i)?Fr:$_;return d(i,Ue(l,3))}var HC=_f(Rf),PC=_f(kf);function BC(i,l){return jt(ss(i,l),1)}function WC(i,l){return jt(ss(i,l),lt)}function YC(i,l,d){return d=d===n?1:Je(d),jt(ss(i,l),d)}function Hf(i,l){var d=Ke(i)?Pn:Br;return d(i,Ue(l,3))}function Pf(i,l){var d=Ke(i)?cm:M_;return d(i,Ue(l,3))}var zC=Qa(function(i,l,d){pt.call(i,d)?i[d].push(l):Er(i,d,[l])});function jC(i,l,d,E){i=mn(i)?i:Ko(i),d=d&&!E?Je(d):0;var w=i.length;return d<0&&(d=Ht(w+d,0)),_s(i)?d<=w&&i.indexOf(l,d)>-1:!!w&&$o(i,l,d)>-1}var VC=tt(function(i,l,d){var E=-1,w=typeof l=="function",y=mn(i)?X(i.length):[];return Br(i,function(G){y[++E]=w?yn(l,G,d):Ui(G,l,d)}),y}),qC=Qa(function(i,l,d){Er(i,d,l)});function ss(i,l){var d=Ke(i)?xt:W_;return d(i,Ue(l,3))}function KC(i,l,d,E){return i==null?[]:(Ke(l)||(l=l==null?[]:[l]),d=E?n:d,Ke(d)||(d=d==null?[]:[d]),V_(i,l,d))}var XC=Qa(function(i,l,d){i[d?0:1].push(l)},function(){return[[],[]]});function ZC(i,l,d){var E=Ke(i)?Ml:p_,w=arguments.length<3;return E(i,Ue(l,4),d,w,Br)}function QC(i,l,d){var E=Ke(i)?um:p_,w=arguments.length<3;return E(i,Ue(l,4),d,w,M_)}function JC(i,l){var d=Ke(i)?Fr:$_;return d(i,us(Ue(l,3)))}function eE(i){var l=Ke(i)?D_:j1;return l(i)}function tE(i,l,d){(d?nn(i,l,d):l===n)?l=1:l=Je(l);var E=Ke(i)?w1:V1;return E(i,l)}function nE(i){var l=Ke(i)?O1:K1;return l(i)}function rE(i){if(i==null)return 0;if(mn(i))return _s(i)?Uo(i):i.length;var l=Qt(i);return l==be||l==er?i.size:tc(i).length}function oE(i,l,d){var E=Ke(i)?$l:X1;return d&&nn(i,l,d)&&(l=n),E(i,Ue(l,3))}var iE=tt(function(i,l){if(i==null)return[];var d=l.length;return d>1&&nn(i,l[0],l[1])?l=[]:d>2&&nn(l[0],l[1],l[2])&&(l=[l[0]]),V_(i,jt(l,1),[])}),ls=Um||function(){return zt.Date.now()};function aE(i,l){if(typeof l!="function")throw new Bn(s);return i=Je(i),function(){if(--i<1)return l.apply(this,arguments)}}function Bf(i,l,d){return l=d?n:l,l=i&&l==null?i.length:l,Ir(i,W,n,n,n,n,l)}function Wf(i,l){var d;if(typeof l!="function")throw new Bn(s);return i=Je(i),function(){return--i>0&&(d=l.apply(this,arguments)),i<=1&&(l=n),d}}var Lc=tt(function(i,l,d){var E=O;if(d.length){var w=Hr(d,Vo(Lc));E|=k}return Ir(i,E,l,d,w)}),Yf=tt(function(i,l,d){var E=O|b;if(d.length){var w=Hr(d,Vo(Yf));E|=k}return Ir(l,E,i,d,w)});function zf(i,l,d){l=d?n:l;var E=Ir(i,D,n,n,n,n,n,l);return E.placeholder=zf.placeholder,E}function jf(i,l,d){l=d?n:l;var E=Ir(i,$,n,n,n,n,n,l);return E.placeholder=jf.placeholder,E}function Vf(i,l,d){var E,w,y,G,P,V,ae=0,se=!1,ue=!1,Ee=!0;if(typeof i!="function")throw new Bn(s);l=Vn(l)||0,Nt(d)&&(se=!!d.leading,ue="maxWait"in d,y=ue?Ht(Vn(d.maxWait)||0,l):y,Ee="trailing"in d?!!d.trailing:Ee);function Te(Gt){var or=E,yr=w;return E=w=n,ae=Gt,G=i.apply(yr,or),G}function He(Gt){return ae=Gt,P=Yi(ot,l),se?Te(Gt):G}function et(Gt){var or=Gt-V,yr=Gt-ae,_g=l-or;return ue?Zt(_g,y-yr):_g}function Pe(Gt){var or=Gt-V,yr=Gt-ae;return V===n||or>=l||or<0||ue&&yr>=y}function ot(){var Gt=ls();if(Pe(Gt))return at(Gt);P=Yi(ot,et(Gt))}function at(Gt){return P=n,Ee&&E?Te(Gt):(E=w=n,G)}function Nn(){P!==n&&nf(P),ae=0,E=V=w=P=n}function rn(){return P===n?G:at(ls())}function Tn(){var Gt=ls(),or=Pe(Gt);if(E=arguments,w=this,V=Gt,or){if(P===n)return He(V);if(ue)return nf(P),P=Yi(ot,l),Te(V)}return P===n&&(P=Yi(ot,l)),G}return Tn.cancel=Nn,Tn.flush=rn,Tn}var sE=tt(function(i,l){return G_(i,1,l)}),lE=tt(function(i,l,d){return G_(i,Vn(l)||0,d)});function cE(i){return Ir(i,oe)}function cs(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new Bn(s);var d=function(){var E=arguments,w=l?l.apply(this,E):E[0],y=d.cache;if(y.has(w))return y.get(w);var G=i.apply(this,E);return d.cache=y.set(w,G)||y,G};return d.cache=new(cs.Cache||Cr),d}cs.Cache=Cr;function us(i){if(typeof i!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!i.call(this);case 1:return!i.call(this,l[0]);case 2:return!i.call(this,l[0],l[1]);case 3:return!i.call(this,l[0],l[1],l[2])}return!i.apply(this,l)}}function uE(i){return Wf(2,i)}var dE=Z1(function(i,l){l=l.length==1&&Ke(l[0])?xt(l[0],An(Ue())):xt(jt(l,1),An(Ue()));var d=l.length;return tt(function(E){for(var w=-1,y=Zt(E.length,d);++w<y;)E[w]=l[w].call(this,E[w]);return yn(i,this,E)})}),yc=tt(function(i,l){var d=Hr(l,Vo(yc));return Ir(i,k,n,l,d)}),qf=tt(function(i,l){var d=Hr(l,Vo(qf));return Ir(i,Y,n,l,d)}),_E=br(function(i,l){return Ir(i,K,n,n,n,l)});function fE(i,l){if(typeof i!="function")throw new Bn(s);return l=l===n?l:Je(l),tt(i,l)}function gE(i,l){if(typeof i!="function")throw new Bn(s);return l=l==null?0:Ht(Je(l),0),tt(function(d){var E=d[l],w=zr(d,0,l);return E&&Ur(w,E),yn(i,this,w)})}function hE(i,l,d){var E=!0,w=!0;if(typeof i!="function")throw new Bn(s);return Nt(d)&&(E="leading"in d?!!d.leading:E,w="trailing"in d?!!d.trailing:w),Vf(i,l,{leading:E,maxWait:l,trailing:w})}function vE(i){return Bf(i,1)}function pE(i,l){return yc(uc(l),i)}function mE(){if(!arguments.length)return[];var i=arguments[0];return Ke(i)?i:[i]}function CE(i){return Yn(i,m)}function EE(i,l){return l=typeof l=="function"?l:n,Yn(i,m,l)}function IE(i){return Yn(i,f|m)}function bE(i,l){return l=typeof l=="function"?l:n,Yn(i,f|m,l)}function wE(i,l){return l==null||k_(i,l,Bt(l))}function rr(i,l){return i===l||i!==i&&l!==l}var OE=ns(Ql),LE=ns(function(i,l){return i>=l}),vo=H_(function(){return arguments}())?H_:function(i){return Dt(i)&&pt.call(i,"callee")&&!y_.call(i,"callee")},Ke=X.isArray,yE=s_?An(s_):k1;function mn(i){return i!=null&&ds(i.length)&&!Or(i)}function kt(i){return Dt(i)&&mn(i)}function AE(i){return i===!0||i===!1||Dt(i)&&tn(i)==pr}var jr=Pm||$c,xE=l_?An(l_):G1;function SE(i){return Dt(i)&&i.nodeType===1&&!zi(i)}function NE(i){if(i==null)return!0;if(mn(i)&&(Ke(i)||typeof i=="string"||typeof i.splice=="function"||jr(i)||qo(i)||vo(i)))return!i.length;var l=Qt(i);if(l==be||l==er)return!i.size;if(Wi(i))return!tc(i).length;for(var d in i)if(pt.call(i,d))return!1;return!0}function TE(i,l){return Hi(i,l)}function DE(i,l,d){d=typeof d=="function"?d:n;var E=d?d(i,l):n;return E===n?Hi(i,l,n,d):!!E}function Ac(i){if(!Dt(i))return!1;var l=tn(i);return l==$r||l==yi||typeof i.message=="string"&&typeof i.name=="string"&&!zi(i)}function RE(i){return typeof i=="number"&&x_(i)}function Or(i){if(!Nt(i))return!1;var l=tn(i);return l==ko||l==$e||l==Jn||l==rp}function Kf(i){return typeof i=="number"&&i==Je(i)}function ds(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=xe}function Nt(i){var l=typeof i;return i!=null&&(l=="object"||l=="function")}function Dt(i){return i!=null&&typeof i=="object"}var Xf=c_?An(c_):$1;function kE(i,l){return i===l||ec(i,l,pc(l))}function GE(i,l,d){return d=typeof d=="function"?d:n,ec(i,l,pc(l),d)}function ME(i){return Zf(i)&&i!=+i}function $E(i){if(E0(i))throw new Ve(a);return P_(i)}function FE(i){return i===null}function UE(i){return i==null}function Zf(i){return typeof i=="number"||Dt(i)&&tn(i)==Ge}function zi(i){if(!Dt(i)||tn(i)!=St)return!1;var l=Fa(i);if(l===null)return!0;var d=pt.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&ka.call(d)==Gm}var xc=u_?An(u_):F1;function HE(i){return Kf(i)&&i>=-9007199254740991&&i<=xe}var Qf=d_?An(d_):U1;function _s(i){return typeof i=="string"||!Ke(i)&&Dt(i)&&tn(i)==xi}function Sn(i){return typeof i=="symbol"||Dt(i)&&tn(i)==La}var qo=__?An(__):H1;function PE(i){return i===n}function BE(i){return Dt(i)&&Qt(i)==Si}function WE(i){return Dt(i)&&tn(i)==ip}var YE=ns(nc),zE=ns(function(i,l){return i<=l});function Jf(i){if(!i)return[];if(mn(i))return _s(i)?tr(i):pn(i);if(Di&&i[Di])return wm(i[Di]());var l=Qt(i),d=l==be?Wl:l==er?Ta:Ko;return d(i)}function Lr(i){if(!i)return i===0?i:0;if(i=Vn(i),i===lt||i===-1/0){var l=i<0?-1:1;return l*we}return i===i?i:0}function Je(i){var l=Lr(i),d=l%1;return l===l?d?l-d:l:0}function eg(i){return i?_o(Je(i),0,ct):0}function Vn(i){if(typeof i=="number")return i;if(Sn(i))return _t;if(Nt(i)){var l=typeof i.valueOf=="function"?i.valueOf():i;i=Nt(l)?l+"":l}if(typeof i!="string")return i===0?i:+i;i=m_(i);var d=yp.test(i);return d||xp.test(i)?am(i.slice(2),d?2:8):Lp.test(i)?_t:+i}function tg(i){return lr(i,Cn(i))}function jE(i){return i?_o(Je(i),-9007199254740991,xe):i===0?i:0}function ht(i){return i==null?"":xn(i)}var VE=zo(function(i,l){if(Wi(l)||mn(l)){lr(l,Bt(l),i);return}for(var d in l)pt.call(l,d)&&$i(i,d,l[d])}),ng=zo(function(i,l){lr(l,Cn(l),i)}),fs=zo(function(i,l,d,E){lr(l,Cn(l),i,E)}),qE=zo(function(i,l,d,E){lr(l,Bt(l),i,E)}),KE=br(Kl);function XE(i,l){var d=Yo(i);return l==null?d:R_(d,l)}var ZE=tt(function(i,l){i=It(i);var d=-1,E=l.length,w=E>2?l[2]:n;for(w&&nn(l[0],l[1],w)&&(E=1);++d<E;)for(var y=l[d],G=Cn(y),P=-1,V=G.length;++P<V;){var ae=G[P],se=i[ae];(se===n||rr(se,Po[ae])&&!pt.call(i,ae))&&(i[ae]=y[ae])}return i}),QE=tt(function(i){return i.push(n,Cf),yn(rg,n,i)});function JE(i,l){return g_(i,Ue(l,3),sr)}function eI(i,l){return g_(i,Ue(l,3),Zl)}function tI(i,l){return i==null?i:Xl(i,Ue(l,3),Cn)}function nI(i,l){return i==null?i:F_(i,Ue(l,3),Cn)}function rI(i,l){return i&&sr(i,Ue(l,3))}function oI(i,l){return i&&Zl(i,Ue(l,3))}function iI(i){return i==null?[]:qa(i,Bt(i))}function aI(i){return i==null?[]:qa(i,Cn(i))}function Sc(i,l,d){var E=i==null?n:fo(i,l);return E===n?d:E}function sI(i,l){return i!=null&&bf(i,l,N1)}function Nc(i,l){return i!=null&&bf(i,l,T1)}var lI=gf(function(i,l,d){l!=null&&typeof l.toString!="function"&&(l=Ga.call(l)),i[l]=d},Dc(En)),cI=gf(function(i,l,d){l!=null&&typeof l.toString!="function"&&(l=Ga.call(l)),pt.call(i,l)?i[l].push(d):i[l]=[d]},Ue),uI=tt(Ui);function Bt(i){return mn(i)?T_(i):tc(i)}function Cn(i){return mn(i)?T_(i,!0):P1(i)}function dI(i,l){var d={};return l=Ue(l,3),sr(i,function(E,w,y){Er(d,l(E,w,y),E)}),d}function _I(i,l){var d={};return l=Ue(l,3),sr(i,function(E,w,y){Er(d,w,l(E,w,y))}),d}var fI=zo(function(i,l,d){Ka(i,l,d)}),rg=zo(function(i,l,d,E){Ka(i,l,d,E)}),gI=br(function(i,l){var d={};if(i==null)return d;var E=!1;l=xt(l,function(y){return y=Yr(y,i),E||(E=y.length>1),y}),lr(i,hc(i),d),E&&(d=Yn(d,f|v|m,l0));for(var w=l.length;w--;)sc(d,l[w]);return d});function hI(i,l){return og(i,us(Ue(l)))}var vI=br(function(i,l){return i==null?{}:W1(i,l)});function og(i,l){if(i==null)return{};var d=xt(hc(i),function(E){return[E]});return l=Ue(l),q_(i,d,function(E,w){return l(E,w[0])})}function pI(i,l,d){l=Yr(l,i);var E=-1,w=l.length;for(w||(w=1,i=n);++E<w;){var y=i==null?n:i[cr(l[E])];y===n&&(E=w,y=d),i=Or(y)?y.call(i):y}return i}function mI(i,l,d){return i==null?i:Pi(i,l,d)}function CI(i,l,d,E){return E=typeof E=="function"?E:n,i==null?i:Pi(i,l,d,E)}var ig=pf(Bt),ag=pf(Cn);function EI(i,l,d){var E=Ke(i),w=E||jr(i)||qo(i);if(l=Ue(l,4),d==null){var y=i&&i.constructor;w?d=E?new y:[]:Nt(i)?d=Or(y)?Yo(Fa(i)):{}:d={}}return(w?Pn:sr)(i,function(G,P,V){return l(d,G,P,V)}),d}function II(i,l){return i==null?!0:sc(i,l)}function bI(i,l,d){return i==null?i:J_(i,l,uc(d))}function wI(i,l,d,E){return E=typeof E=="function"?E:n,i==null?i:J_(i,l,uc(d),E)}function Ko(i){return i==null?[]:Bl(i,Bt(i))}function OI(i){return i==null?[]:Bl(i,Cn(i))}function LI(i,l,d){return d===n&&(d=l,l=n),d!==n&&(d=Vn(d),d=d===d?d:0),l!==n&&(l=Vn(l),l=l===l?l:0),_o(Vn(i),l,d)}function yI(i,l,d){return l=Lr(l),d===n?(d=l,l=0):d=Lr(d),i=Vn(i),D1(i,l,d)}function AI(i,l,d){if(d&&typeof d!="boolean"&&nn(i,l,d)&&(l=d=n),d===n&&(typeof l=="boolean"?(d=l,l=n):typeof i=="boolean"&&(d=i,i=n)),i===n&&l===n?(i=0,l=1):(i=Lr(i),l===n?(l=i,i=0):l=Lr(l)),i>l){var E=i;i=l,l=E}if(d||i%1||l%1){var w=S_();return Zt(i+w*(l-i+im("1e-"+((w+"").length-1))),l)}return oc(i,l)}var xI=jo(function(i,l,d){return l=l.toLowerCase(),i+(d?sg(l):l)});function sg(i){return Tc(ht(i).toLowerCase())}function lg(i){return i=ht(i),i&&i.replace(Np,mm).replace(Kp,"")}function SI(i,l,d){i=ht(i),l=xn(l);var E=i.length;d=d===n?E:_o(Je(d),0,E);var w=d;return d-=l.length,d>=0&&i.slice(d,w)==l}function NI(i){return i=ht(i),i&&up.test(i)?i.replace(Fd,Cm):i}function TI(i){return i=ht(i),i&&vp.test(i)?i.replace(yl,"\\$&"):i}var DI=jo(function(i,l,d){return i+(d?"-":"")+l.toLowerCase()}),RI=jo(function(i,l,d){return i+(d?" ":"")+l.toLowerCase()}),kI=df("toLowerCase");function GI(i,l,d){i=ht(i),l=Je(l);var E=l?Uo(i):0;if(!l||E>=l)return i;var w=(l-E)/2;return ts(Ba(w),d)+i+ts(Pa(w),d)}function MI(i,l,d){i=ht(i),l=Je(l);var E=l?Uo(i):0;return l&&E<l?i+ts(l-E,d):i}function $I(i,l,d){i=ht(i),l=Je(l);var E=l?Uo(i):0;return l&&E<l?ts(l-E,d)+i:i}function FI(i,l,d){return d||l==null?l=0:l&&(l=+l),zm(ht(i).replace(Al,""),l||0)}function UI(i,l,d){return(d?nn(i,l,d):l===n)?l=1:l=Je(l),ic(ht(i),l)}function HI(){var i=arguments,l=ht(i[0]);return i.length<3?l:l.replace(i[1],i[2])}var PI=jo(function(i,l,d){return i+(d?"_":"")+l.toLowerCase()});function BI(i,l,d){return d&&typeof d!="number"&&nn(i,l,d)&&(l=d=n),d=d===n?ct:d>>>0,d?(i=ht(i),i&&(typeof l=="string"||l!=null&&!xc(l))&&(l=xn(l),!l&&Fo(i))?zr(tr(i),0,d):i.split(l,d)):[]}var WI=jo(function(i,l,d){return i+(d?" ":"")+Tc(l)});function YI(i,l,d){return i=ht(i),d=d==null?0:_o(Je(d),0,i.length),l=xn(l),i.slice(d,d+l.length)==l}function zI(i,l,d){var E=L.templateSettings;d&&nn(i,l,d)&&(l=n),i=ht(i),l=fs({},l,E,mf);var w=fs({},l.imports,E.imports,mf),y=Bt(w),G=Bl(w,y),P,V,ae=0,se=l.interpolate||ya,ue="__p += '",Ee=Yl((l.escape||ya).source+"|"+se.source+"|"+(se===Ud?Op:ya).source+"|"+(l.evaluate||ya).source+"|$","g"),Te="//# sourceURL="+(pt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++em+"]")+`
`;i.replace(Ee,function(Pe,ot,at,Nn,rn,Tn){return at||(at=Nn),ue+=i.slice(ae,Tn).replace(Tp,Em),ot&&(P=!0,ue+=`' +
__e(`+ot+`) +
'`),rn&&(V=!0,ue+=`';
`+rn+`;
__p += '`),at&&(ue+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),ae=Tn+Pe.length,Pe}),ue+=`';
`;var He=pt.call(l,"variable")&&l.variable;if(!He)ue=`with (obj) {
`+ue+`
}
`;else if(bp.test(He))throw new Ve(c);ue=(V?ue.replace(ap,""):ue).replace(sp,"$1").replace(lp,"$1;"),ue="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ue+`return __p
}`;var et=ug(function(){return ft(y,Te+"return "+ue).apply(n,G)});if(et.source=ue,Ac(et))throw et;return et}function jI(i){return ht(i).toLowerCase()}function VI(i){return ht(i).toUpperCase()}function qI(i,l,d){if(i=ht(i),i&&(d||l===n))return m_(i);if(!i||!(l=xn(l)))return i;var E=tr(i),w=tr(l),y=C_(E,w),G=E_(E,w)+1;return zr(E,y,G).join("")}function KI(i,l,d){if(i=ht(i),i&&(d||l===n))return i.slice(0,b_(i)+1);if(!i||!(l=xn(l)))return i;var E=tr(i),w=E_(E,tr(l))+1;return zr(E,0,w).join("")}function XI(i,l,d){if(i=ht(i),i&&(d||l===n))return i.replace(Al,"");if(!i||!(l=xn(l)))return i;var E=tr(i),w=C_(E,tr(l));return zr(E,w).join("")}function ZI(i,l){var d=_e,E=ee;if(Nt(l)){var w="separator"in l?l.separator:w;d="length"in l?Je(l.length):d,E="omission"in l?xn(l.omission):E}i=ht(i);var y=i.length;if(Fo(i)){var G=tr(i);y=G.length}if(d>=y)return i;var P=d-Uo(E);if(P<1)return E;var V=G?zr(G,0,P).join(""):i.slice(0,P);if(w===n)return V+E;if(G&&(P+=V.length-P),xc(w)){if(i.slice(P).search(w)){var ae,se=V;for(w.global||(w=Yl(w.source,ht(Hd.exec(w))+"g")),w.lastIndex=0;ae=w.exec(se);)var ue=ae.index;V=V.slice(0,ue===n?P:ue)}}else if(i.indexOf(xn(w),P)!=P){var Ee=V.lastIndexOf(w);Ee>-1&&(V=V.slice(0,Ee))}return V+E}function QI(i){return i=ht(i),i&&cp.test(i)?i.replace($d,Am):i}var JI=jo(function(i,l,d){return i+(d?" ":"")+l.toUpperCase()}),Tc=df("toUpperCase");function cg(i,l,d){return i=ht(i),l=d?n:l,l===n?bm(i)?Nm(i):fm(i):i.match(l)||[]}var ug=tt(function(i,l){try{return yn(i,n,l)}catch(d){return Ac(d)?d:new Ve(d)}}),eb=br(function(i,l){return Pn(l,function(d){d=cr(d),Er(i,d,Lc(i[d],i))}),i});function tb(i){var l=i==null?0:i.length,d=Ue();return i=l?xt(i,function(E){if(typeof E[1]!="function")throw new Bn(s);return[d(E[0]),E[1]]}):[],tt(function(E){for(var w=-1;++w<l;){var y=i[w];if(yn(y[0],this,E))return yn(y[1],this,E)}})}function nb(i){return A1(Yn(i,f))}function Dc(i){return function(){return i}}function rb(i,l){return i==null||i!==i?l:i}var ob=ff(),ib=ff(!0);function En(i){return i}function Rc(i){return B_(typeof i=="function"?i:Yn(i,f))}function ab(i){return Y_(Yn(i,f))}function sb(i,l){return z_(i,Yn(l,f))}var lb=tt(function(i,l){return function(d){return Ui(d,i,l)}}),cb=tt(function(i,l){return function(d){return Ui(i,d,l)}});function kc(i,l,d){var E=Bt(l),w=qa(l,E);d==null&&!(Nt(l)&&(w.length||!E.length))&&(d=l,l=i,i=this,w=qa(l,Bt(l)));var y=!(Nt(d)&&"chain"in d)||!!d.chain,G=Or(i);return Pn(w,function(P){var V=l[P];i[P]=V,G&&(i.prototype[P]=function(){var ae=this.__chain__;if(y||ae){var se=i(this.__wrapped__),ue=se.__actions__=pn(this.__actions__);return ue.push({func:V,args:arguments,thisArg:i}),se.__chain__=ae,se}return V.apply(i,Ur([this.value()],arguments))})}),i}function ub(){return zt._===this&&(zt._=Mm),this}function Gc(){}function db(i){return i=Je(i),tt(function(l){return j_(l,i)})}var _b=_c(xt),fb=_c(f_),gb=_c($l);function dg(i){return Cc(i)?Fl(cr(i)):Y1(i)}function hb(i){return function(l){return i==null?n:fo(i,l)}}var vb=hf(),pb=hf(!0);function Mc(){return[]}function $c(){return!1}function mb(){return{}}function Cb(){return""}function Eb(){return!0}function Ib(i,l){if(i=Je(i),i<1||i>xe)return[];var d=ct,E=Zt(i,ct);l=Ue(l),i-=ct;for(var w=Pl(E,l);++d<i;)l(d);return w}function bb(i){return Ke(i)?xt(i,cr):Sn(i)?[i]:pn(Tf(ht(i)))}function wb(i){var l=++km;return ht(i)+l}var Ob=es(function(i,l){return i+l},0),Lb=fc("ceil"),yb=es(function(i,l){return i/l},1),Ab=fc("floor");function xb(i){return i&&i.length?Va(i,En,Ql):n}function Sb(i,l){return i&&i.length?Va(i,Ue(l,2),Ql):n}function Nb(i){return v_(i,En)}function Tb(i,l){return v_(i,Ue(l,2))}function Db(i){return i&&i.length?Va(i,En,nc):n}function Rb(i,l){return i&&i.length?Va(i,Ue(l,2),nc):n}var kb=es(function(i,l){return i*l},1),Gb=fc("round"),Mb=es(function(i,l){return i-l},0);function $b(i){return i&&i.length?Hl(i,En):0}function Fb(i,l){return i&&i.length?Hl(i,Ue(l,2)):0}return L.after=aE,L.ary=Bf,L.assign=VE,L.assignIn=ng,L.assignInWith=fs,L.assignWith=qE,L.at=KE,L.before=Wf,L.bind=Lc,L.bindAll=eb,L.bindKey=Yf,L.castArray=mE,L.chain=Uf,L.chunk=A0,L.compact=x0,L.concat=S0,L.cond=tb,L.conforms=nb,L.constant=Dc,L.countBy=$C,L.create=XE,L.curry=zf,L.curryRight=jf,L.debounce=Vf,L.defaults=ZE,L.defaultsDeep=QE,L.defer=sE,L.delay=lE,L.difference=N0,L.differenceBy=T0,L.differenceWith=D0,L.drop=R0,L.dropRight=k0,L.dropRightWhile=G0,L.dropWhile=M0,L.fill=$0,L.filter=UC,L.flatMap=BC,L.flatMapDeep=WC,L.flatMapDepth=YC,L.flatten=Gf,L.flattenDeep=F0,L.flattenDepth=U0,L.flip=cE,L.flow=ob,L.flowRight=ib,L.fromPairs=H0,L.functions=iI,L.functionsIn=aI,L.groupBy=zC,L.initial=B0,L.intersection=W0,L.intersectionBy=Y0,L.intersectionWith=z0,L.invert=lI,L.invertBy=cI,L.invokeMap=VC,L.iteratee=Rc,L.keyBy=qC,L.keys=Bt,L.keysIn=Cn,L.map=ss,L.mapKeys=dI,L.mapValues=_I,L.matches=ab,L.matchesProperty=sb,L.memoize=cs,L.merge=fI,L.mergeWith=rg,L.method=lb,L.methodOf=cb,L.mixin=kc,L.negate=us,L.nthArg=db,L.omit=gI,L.omitBy=hI,L.once=uE,L.orderBy=KC,L.over=_b,L.overArgs=dE,L.overEvery=fb,L.overSome=gb,L.partial=yc,L.partialRight=qf,L.partition=XC,L.pick=vI,L.pickBy=og,L.property=dg,L.propertyOf=hb,L.pull=K0,L.pullAll=$f,L.pullAllBy=X0,L.pullAllWith=Z0,L.pullAt=Q0,L.range=vb,L.rangeRight=pb,L.rearg=_E,L.reject=JC,L.remove=J0,L.rest=fE,L.reverse=wc,L.sampleSize=tE,L.set=mI,L.setWith=CI,L.shuffle=nE,L.slice=eC,L.sortBy=iE,L.sortedUniq=sC,L.sortedUniqBy=lC,L.split=BI,L.spread=gE,L.tail=cC,L.take=uC,L.takeRight=dC,L.takeRightWhile=_C,L.takeWhile=fC,L.tap=xC,L.throttle=hE,L.thru=as,L.toArray=Jf,L.toPairs=ig,L.toPairsIn=ag,L.toPath=bb,L.toPlainObject=tg,L.transform=EI,L.unary=vE,L.union=gC,L.unionBy=hC,L.unionWith=vC,L.uniq=pC,L.uniqBy=mC,L.uniqWith=CC,L.unset=II,L.unzip=Oc,L.unzipWith=Ff,L.update=bI,L.updateWith=wI,L.values=Ko,L.valuesIn=OI,L.without=EC,L.words=cg,L.wrap=pE,L.xor=IC,L.xorBy=bC,L.xorWith=wC,L.zip=OC,L.zipObject=LC,L.zipObjectDeep=yC,L.zipWith=AC,L.entries=ig,L.entriesIn=ag,L.extend=ng,L.extendWith=fs,kc(L,L),L.add=Ob,L.attempt=ug,L.camelCase=xI,L.capitalize=sg,L.ceil=Lb,L.clamp=LI,L.clone=CE,L.cloneDeep=IE,L.cloneDeepWith=bE,L.cloneWith=EE,L.conformsTo=wE,L.deburr=lg,L.defaultTo=rb,L.divide=yb,L.endsWith=SI,L.eq=rr,L.escape=NI,L.escapeRegExp=TI,L.every=FC,L.find=HC,L.findIndex=Rf,L.findKey=JE,L.findLast=PC,L.findLastIndex=kf,L.findLastKey=eI,L.floor=Ab,L.forEach=Hf,L.forEachRight=Pf,L.forIn=tI,L.forInRight=nI,L.forOwn=rI,L.forOwnRight=oI,L.get=Sc,L.gt=OE,L.gte=LE,L.has=sI,L.hasIn=Nc,L.head=Mf,L.identity=En,L.includes=jC,L.indexOf=P0,L.inRange=yI,L.invoke=uI,L.isArguments=vo,L.isArray=Ke,L.isArrayBuffer=yE,L.isArrayLike=mn,L.isArrayLikeObject=kt,L.isBoolean=AE,L.isBuffer=jr,L.isDate=xE,L.isElement=SE,L.isEmpty=NE,L.isEqual=TE,L.isEqualWith=DE,L.isError=Ac,L.isFinite=RE,L.isFunction=Or,L.isInteger=Kf,L.isLength=ds,L.isMap=Xf,L.isMatch=kE,L.isMatchWith=GE,L.isNaN=ME,L.isNative=$E,L.isNil=UE,L.isNull=FE,L.isNumber=Zf,L.isObject=Nt,L.isObjectLike=Dt,L.isPlainObject=zi,L.isRegExp=xc,L.isSafeInteger=HE,L.isSet=Qf,L.isString=_s,L.isSymbol=Sn,L.isTypedArray=qo,L.isUndefined=PE,L.isWeakMap=BE,L.isWeakSet=WE,L.join=j0,L.kebabCase=DI,L.last=jn,L.lastIndexOf=V0,L.lowerCase=RI,L.lowerFirst=kI,L.lt=YE,L.lte=zE,L.max=xb,L.maxBy=Sb,L.mean=Nb,L.meanBy=Tb,L.min=Db,L.minBy=Rb,L.stubArray=Mc,L.stubFalse=$c,L.stubObject=mb,L.stubString=Cb,L.stubTrue=Eb,L.multiply=kb,L.nth=q0,L.noConflict=ub,L.noop=Gc,L.now=ls,L.pad=GI,L.padEnd=MI,L.padStart=$I,L.parseInt=FI,L.random=AI,L.reduce=ZC,L.reduceRight=QC,L.repeat=UI,L.replace=HI,L.result=pI,L.round=Gb,L.runInContext=j,L.sample=eE,L.size=rE,L.snakeCase=PI,L.some=oE,L.sortedIndex=tC,L.sortedIndexBy=nC,L.sortedIndexOf=rC,L.sortedLastIndex=oC,L.sortedLastIndexBy=iC,L.sortedLastIndexOf=aC,L.startCase=WI,L.startsWith=YI,L.subtract=Mb,L.sum=$b,L.sumBy=Fb,L.template=zI,L.times=Ib,L.toFinite=Lr,L.toInteger=Je,L.toLength=eg,L.toLower=jI,L.toNumber=Vn,L.toSafeInteger=jE,L.toString=ht,L.toUpper=VI,L.trim=qI,L.trimEnd=KI,L.trimStart=XI,L.truncate=ZI,L.unescape=QI,L.uniqueId=wb,L.upperCase=JI,L.upperFirst=Tc,L.each=Hf,L.eachRight=Pf,L.first=Mf,kc(L,function(){var i={};return sr(L,function(l,d){pt.call(L.prototype,d)||(i[d]=l)}),i}(),{chain:!1}),L.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){L[i].placeholder=L}),Pn(["drop","take"],function(i,l){it.prototype[i]=function(d){d=d===n?1:Ht(Je(d),0);var E=this.__filtered__&&!l?new it(this):this.clone();return E.__filtered__?E.__takeCount__=Zt(d,E.__takeCount__):E.__views__.push({size:Zt(d,ct),type:i+(E.__dir__<0?"Right":"")}),E},it.prototype[i+"Right"]=function(d){return this.reverse()[i](d).reverse()}}),Pn(["filter","map","takeWhile"],function(i,l){var d=l+1,E=d==me||d==Ne;it.prototype[i]=function(w){var y=this.clone();return y.__iteratees__.push({iteratee:Ue(w,3),type:d}),y.__filtered__=y.__filtered__||E,y}}),Pn(["head","last"],function(i,l){var d="take"+(l?"Right":"");it.prototype[i]=function(){return this[d](1).value()[0]}}),Pn(["initial","tail"],function(i,l){var d="drop"+(l?"":"Right");it.prototype[i]=function(){return this.__filtered__?new it(this):this[d](1)}}),it.prototype.compact=function(){return this.filter(En)},it.prototype.find=function(i){return this.filter(i).head()},it.prototype.findLast=function(i){return this.reverse().find(i)},it.prototype.invokeMap=tt(function(i,l){return typeof i=="function"?new it(this):this.map(function(d){return Ui(d,i,l)})}),it.prototype.reject=function(i){return this.filter(us(Ue(i)))},it.prototype.slice=function(i,l){i=Je(i);var d=this;return d.__filtered__&&(i>0||l<0)?new it(d):(i<0?d=d.takeRight(-i):i&&(d=d.drop(i)),l!==n&&(l=Je(l),d=l<0?d.dropRight(-l):d.take(l-i)),d)},it.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},it.prototype.toArray=function(){return this.take(ct)},sr(it.prototype,function(i,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),w=L[E?"take"+(l=="last"?"Right":""):l],y=E||/^find/.test(l);w&&(L.prototype[l]=function(){var G=this.__wrapped__,P=E?[1]:arguments,V=G instanceof it,ae=P[0],se=V||Ke(G),ue=function(ot){var at=w.apply(L,Ur([ot],P));return E&&Ee?at[0]:at};se&&d&&typeof ae=="function"&&ae.length!=1&&(V=se=!1);var Ee=this.__chain__,Te=!!this.__actions__.length,He=y&&!Ee,et=V&&!Te;if(!y&&se){G=et?G:new it(this);var Pe=i.apply(G,P);return Pe.__actions__.push({func:as,args:[ue],thisArg:n}),new Wn(Pe,Ee)}return He&&et?i.apply(this,P):(Pe=this.thru(ue),He?E?Pe.value()[0]:Pe.value():Pe)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(i){var l=Da[i],d=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",E=/^(?:pop|shift)$/.test(i);L.prototype[i]=function(){var w=arguments;if(E&&!this.__chain__){var y=this.value();return l.apply(Ke(y)?y:[],w)}return this[d](function(G){return l.apply(Ke(G)?G:[],w)})}}),sr(it.prototype,function(i,l){var d=L[l];if(d){var E=d.name+"";pt.call(Wo,E)||(Wo[E]=[]),Wo[E].push({name:l,func:d})}}),Wo[Ja(n,b).name]=[{name:"wrapper",func:n}],it.prototype.clone=Qm,it.prototype.reverse=Jm,it.prototype.value=e1,L.prototype.at=SC,L.prototype.chain=NC,L.prototype.commit=TC,L.prototype.next=DC,L.prototype.plant=kC,L.prototype.reverse=GC,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=MC,L.prototype.first=L.prototype.head,Di&&(L.prototype[Di]=RC),L},Ho=Tm();so?((so.exports=Ho)._=Ho,Rl._=Ho):zt._=Ho}).call(_O)}(Xi,Xi.exports)),Xi.exports}var $t=fO(),B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function In(t,e,n){n!==void 0&&(t[e]=n)}function gO(t){var e,n,r,o,a,s,c,u,g,h,f,v,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(g=t.strokeWidth)!=null&&g.editable||(h=t.strokeDasharray)!=null&&h.editable||(f=t.strokeDashoffset)!=null&&f.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function ou(t){var n,r,o,a,s,c,u,g,h,f,v,m,C,I,O,b,x,D,$,k,Y,W;const e={type:t.type};return In(e,"n",(n=t.n)==null?void 0:n.value),In(e,"r",(r=t.r)==null?void 0:r.value),In(e,"height",(o=t.height)==null?void 0:o.value),In(e,"width",(a=t.width)==null?void 0:a.value),In(e,"inset",(s=t.inset)==null?void 0:s.value),In(e,"angle",(c=t.angle)==null?void 0:c.value),In(e,"fill",(u=t.fill)==null?void 0:u.value),In(e,"stroke",(g=t.stroke)==null?void 0:g.value),In(e,"strokeWidth",(h=t.strokeWidth)==null?void 0:h.value),In(e,"strokeDasharray",(f=t.strokeDasharray)==null?void 0:f.value),In(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),In(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),In(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),In(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(b=(O=t.linePathOptions)==null?void 0:O.shortenHead)==null?void 0:b.value,shortenTail:(D=(x=t.linePathOptions)==null?void 0:x.shortenTail)==null?void 0:D.value,bezierRounding:(k=($=t.linePathOptions)==null?void 0:$.bezierRounding)==null?void 0:k.value,closeLoops:(W=(Y=t.linePathOptions)==null?void 0:Y.closeLoops)==null?void 0:W.value}),e}function hO(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const vO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},pO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},mO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},kh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Gh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ys={type:"Line",strokeWidth:.125,stroke:"gray"},ed={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},CO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},EO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},IO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):Fh(t)==="[object Array]"}function bO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function wO(t){return t==null?"":bO(t)}function fr(t){return typeof t=="string"}function Mh(t){return typeof t=="number"}function OO(t){return t===!0||t===!1||LO(t)&&Fh(t)=="[object Boolean]"}function $h(t){return typeof t=="object"}function LO(t){return $h(t)&&t!==null}function kn(t){return t!=null}function Wc(t){return!t.trim().length}function Fh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const yO="Incorrect 'index' type",AO=t=>`Invalid value for key ${t}`,xO=t=>`Pattern length exceeds max of ${t}.`,SO=t=>`Missing ${t} property in key`,NO=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ig=Object.prototype.hasOwnProperty;class TO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=Uh(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Uh(t){let e=null,n=null,r=null,o=1,a=null;if(fr(t)||xr(t))r=t,e=bg(t),n=iu(t);else{if(!Ig.call(t,"name"))throw new Error(SO("name"));const s=t.name;if(r=s,Ig.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(NO(s));e=bg(s),n=iu(s),a=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:a}}function bg(t){return xr(t)?t:t.split(".")}function iu(t){return xr(t)?t.join("."):t}function DO(t,e){let n=[],r=!1;const o=(a,s,c)=>{if(kn(a))if(!s[c])n.push(a);else{let u=s[c];const g=a[u];if(!kn(g))return;if(c===s.length-1&&(fr(g)||Mh(g)||OO(g)))n.push(wO(g));else if(xr(g)){r=!0;for(let h=0,f=g.length;h<f;h+=1)o(g[h],s,c+1)}else s.length&&o(g,s,c+1)}};return o(t,fr(e)?e.split("."):e,0),r?n:n[0]}const RO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},kO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},GO={location:0,threshold:.6,distance:100},MO={useExtendedSearch:!1,getFn:DO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...kO,...RO,...GO,...MO};const $O=/[^ ]+/g;function FO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const a=o.match($O).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class td{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=FO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!kn(e)||Wc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,a)=>{let s=o.getFn?o.getFn(e):this.getFn(e,o.path);if(kn(s)){if(xr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:g,value:h}=u.pop();if(kn(h))if(fr(h)&&!Wc(h)){let f={v:h,i:g,n:this.norm.get(h)};c.push(f)}else xr(h)&&h.forEach((f,v)=>{u.push({nestedArrIndex:v,value:f})})}r.$[a]=c}else if(fr(s)&&!Wc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Hh(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const o=new td({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(Uh)),o.setSources(e),o.create(),o}function UO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:o}=t,a=new td({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(o),a}function vs(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return o?s+c/o:c?1:s}function HO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,o=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(o=a-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const mo=32;function PO(t,e,n,{location:r=Ye.location,distance:o=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:g=Ye.ignoreLocation}={}){if(e.length>mo)throw new Error(xO(mo));const h=e.length,f=t.length,v=Math.max(0,Math.min(r,f));let m=a,C=v;const I=c>1||u,O=I?Array(f):[];let b;for(;(b=t.indexOf(e,C))>-1;){let W=vs(e,{currentLocation:b,expectedLocation:v,distance:o,ignoreLocation:g});if(m=Math.min(W,m),C=b+h,I){let K=0;for(;K<h;)O[b+K]=1,K+=1}}C=-1;let x=[],D=1,$=h+f;const k=1<<h-1;for(let W=0;W<h;W+=1){let K=0,oe=$;for(;K<oe;)vs(e,{errors:W,currentLocation:v+oe,expectedLocation:v,distance:o,ignoreLocation:g})<=m?K=oe:$=oe,oe=Math.floor(($-K)/2+K);$=oe;let _e=Math.max(1,v-oe+1),ee=s?f:Math.min(v+oe,f)+h,le=Array(ee+2);le[ee+1]=(1<<W)-1;for(let me=ee;me>=_e;me-=1){let Ce=me-1,Ne=n[t.charAt(Ce)];if(I&&(O[Ce]=+!!Ne),le[me]=(le[me+1]<<1|1)&Ne,W&&(le[me]|=(x[me+1]|x[me])<<1|1|x[me+1]),le[me]&k&&(D=vs(e,{errors:W,currentLocation:Ce,expectedLocation:v,distance:o,ignoreLocation:g}),D<=m)){if(m=D,C=Ce,C<=v)break;_e=Math.max(1,2*v-C)}}if(vs(e,{errors:W+1,currentLocation:v,expectedLocation:v,distance:o,ignoreLocation:g})>m)break;x=le}const Y={isMatch:C>=0,score:Math.max(.001,D)};if(I){const W=HO(O,c);W.length?u&&(Y.indices=W):Y.isMatch=!1}return Y}function BO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class Ph{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:g=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:g},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(v,m)=>{this.chunks.push({pattern:v,alphabet:BO(v),startIndex:m})},f=this.pattern.length;if(f>mo){let v=0;const m=f%mo,C=f-m;for(;v<C;)h(this.pattern.substr(v,mo),v),v+=mo;if(m){const I=f-mo;h(this.pattern.substr(I),I)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:o,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:g}=this.options;let h=[],f=0,v=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:O})=>{const{isMatch:b,score:x,indices:D}=PO(e,C,I,{location:o+O,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:g});b&&(v=!0),f+=x,b&&D&&(h=[...h,...D])});let m={isMatch:v,score:v?f/this.chunks.length:1};return v&&r&&(m.indices=h),m}}class Jr{constructor(e){this.pattern=e}static isMultiMatch(e){return wg(e,this.multiRegex)}static isSingleMatch(e){return wg(e,this.singleRegex)}search(){}}function wg(t,e){const n=t.match(e);return n?n[1]:null}class WO extends Jr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class YO extends Jr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class zO extends Jr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class jO extends Jr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class VO extends Jr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class qO extends Jr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Bh extends Jr{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:g=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new Ph(e,{location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:g})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Wh extends Jr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,o.push([r,n-1]);const s=!!o.length;return{isMatch:s,score:s?0:1,indices:o}}}const au=[WO,Wh,zO,jO,qO,VO,YO,Bh],Og=au.length,KO=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,XO="|";function ZO(t,e={}){return t.split(XO).map(n=>{let r=n.trim().split(KO).filter(a=>a&&!!a.trim()),o=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,g=-1;for(;!u&&++g<Og;){const h=au[g];let f=h.isMultiMatch(c);f&&(o.push(new h(f,e)),u=!0)}if(!u)for(g=-1;++g<Og;){const h=au[g];let f=h.isSingleMatch(c);if(f){o.push(new h(f,e));break}}}return o})}const QO=new Set([Bh.type,Wh.type]);class JO{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:o=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:g=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:g},this.pattern=n?e:e.toLowerCase(),this.query=ZO(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,g=n.length;u<g;u+=1){const h=n[u];s.length=0,a=0;for(let f=0,v=h.length;f<v;f+=1){const m=h[f],{isMatch:C,indices:I,score:O}=m.search(e);if(C){if(a+=1,c+=O,r){const b=m.constructor.type;QO.has(b)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let f={isMatch:!0,score:c/a};return r&&(f.indices=s),f}}return{isMatch:!1,score:1}}}const su=[];function eL(...t){su.push(...t)}function lu(t,e){for(let n=0,r=su.length;n<r;n+=1){let o=su[n];if(o.condition(t,e))return new o(t,e)}return new Ph(t,e)}const Ls={AND:"$and",OR:"$or"},cu={PATH:"$path",PATTERN:"$val"},uu=t=>!!(t[Ls.AND]||t[Ls.OR]),tL=t=>!!t[cu.PATH],nL=t=>!xr(t)&&$h(t)&&!uu(t),Lg=t=>({[Ls.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Yh(t,e,{auto:n=!0}={}){const r=o=>{let a=Object.keys(o);const s=tL(o);if(!s&&a.length>1&&!uu(o))return r(Lg(o));if(nL(o)){const u=s?o[cu.PATH]:a[0],g=s?o[cu.PATTERN]:o[u];if(!fr(g))throw new Error(AO(u));const h={keyId:iu(u),pattern:g};return n&&(h.searcher=lu(g,e)),h}let c={children:[],operator:a[0]};return a.forEach(u=>{const g=o[u];xr(g)&&g.forEach(h=>{c.children.push(r(h))})}),c};return uu(t)||(t=Lg(t)),r(t)}function rL(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:a,score:s})=>{const c=o?o.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function oL(t,e){const n=t.matches;e.matches=[],kn(n)&&n.forEach(r=>{if(!kn(r.indices)||!r.indices.length)return;const{indices:o,value:a}=r;let s={indices:o,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function iL(t,e){e.score=t.score}function aL(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const o=[];return n&&o.push(oL),r&&o.push(iL),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return o.length&&o.forEach(u=>{u(a,c)}),c})}class si{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new TO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof td))throw new Error(yO);this._myIndex=n||Hh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){kn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,o-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=fr(e)?fr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return rL(u,{ignoreFieldNorm:c}),a&&u.sort(s),Mh(n)&&n>-1&&(u=u.slice(0,n)),aL(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=lu(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:g,indices:h}=n.searchIn(a);u&&o.push({item:a,idx:s,matches:[{score:g,value:a,norm:c,indices:h}]})}),o}_searchLogical(e){const n=Yh(e,this.options),r=(c,u,g)=>{if(!c.children){const{keyId:f,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(u,f),searcher:v});return m&&m.length?[{idx:g,item:u,matches:m}]:[]}const h=[];for(let f=0,v=c.children.length;f<v;f+=1){const m=c.children[f],C=r(m,u,g);if(C.length)h.push(...C);else if(c.operator===Ls.AND)return[]}return h},o=this._myIndex.records,a={},s=[];return o.forEach(({$:c,i:u})=>{if(kn(c)){let g=r(n,c,u);g.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),g.forEach(({matches:h})=>{a[u].matches.push(...h)}))}}),s}_searchObjectList(e){const n=lu(e,this.options),{keys:r,records:o}=this._myIndex,a=[];return o.forEach(({$:s,i:c})=>{if(!kn(s))return;let u=[];r.forEach((g,h)=>{u.push(...this._findMatches({key:g,value:s[h],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!kn(n))return[];let o=[];if(xr(n))n.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:g,indices:h}=r.searchIn(a);u&&o.push({score:g,key:e,value:a,idx:s,norm:c,indices:h})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:g}=r.searchIn(a);c&&o.push({score:u,key:e,value:a,norm:s,indices:g})}return o}}si.version="7.0.0";si.createIndex=Hh;si.parseIndex=UO;si.config=Ye;si.parseQuery=Yh;eL(JO);function Zr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function sL(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function lL(t){return new si(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function cL(t,e,n){const r=sL(e,n);return t.length===0?r:lL(r).search(t).map(o=>o.item)}function uL(t,e){return Zr(t,e).shape}function bn(t,e){const n=uL(t,e);return n?ou(n):void 0}var Zo=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Zo||{});const nd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),rd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),dL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),_L=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),yg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function zh(t){rt.update(e=>(e.addToDict(t),e))}function eo(t,e){const n=st(vv);n&&(e.shape={...n}),rt.update(r=>(r.addConstraint(e.toolId,t,e),r)),bi({id:t,constraint:e})}function wo(t,e){e&&rt.update(n=>(n.removeConstraint(t,e),n))}function fL(t,e){rt.update(n=>(n.setConstraints(t,e),n))}function Ag(t){t.type===Zo.ADD_LOCAL_CONSTRAINT?eo(t.payload.id,t.payload.constraint):t.type===Zo.REMOVE_LOCAL_CONSTRAINT?wo(t.payload.tool,t.payload.id):t.type===Zo.REMOVE_LOCAL_CONSTRAINT_GROUP?nT(t.payload.tool):t.type===Zo.RESTORE_LOCAL_CONSTRAINT_GROUP?fL(t.payload.tool,t.payload.constraints):t.type===Zo.UPDATE_LOCAL_CONSTRAINT&&Pt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function fa(t,e){return{execute:()=>{Ag(t)},unExecute:()=>{Ag(e)}}}class Re{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Re(this.x+e.x,this.y+e.y)}subtract(e){return new Re(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Re(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Re(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function gL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Mn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Re(o.x,o.y)};function bs(t,e=!0,n=.5){const r=Bs(t),o=new Re(r.c+.5,r.r+.5),a=t.distance(o);return!e||a<n?{cell:r,dist:a}:null}function jh(t,e=!0,n=.5){const r=Bs(t),o=new Re(r.c+.5,r.r+.5),a=t.distance(o),s={r:o.y,c:o.x};return!e||a<n?{cellCenter:s,dist:a}:null}function ea(t,e=!0,n=.5){const r=Bs(t),o=lO(r),s=o.map(h=>new Re(h.c,h.r)).map(h=>h.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],g=s[c];return!e||g<n?{corner:u,dist:g,idx:c}:null}function ta(t,e=!0,n=.5){const r=Bs(t),o=cO(r),s=o.map(h=>new Re(h.c,h.r)).map(h=>h.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],g=s[c];return!e||g<n?{edge:u,dist:g,idx:c}:null}function Yc(t,e=!0,n=.5){const r=ta(t,!1);if(!r)return null;const o=ea(t,!1);if(!o)return null;const a=jh(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,o.corner],u=s.map(I=>new Re(I.c,I.r)).map(I=>I.distance(t)),g=Math.min(...u),h=u.findIndex(I=>I===g),f=s[h],m=["cell center","edge","corner"][h],C={cellCenter:a.cellCenter,edge:r.edge,corner:o.corner,dist:g,target:f,type:m};return!e||g<n?C:null}class li{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,o=Mn(e,n);if(!o)return;this._prevPoint=o;const a=bs(o,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=bs(r,!0,this._margin);if(!o)return;const a=o.cell;if(this._prevCell&&qe(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Mn(e,n);if(!r)return;const o=bs(r,!1);if(!o)return;const a=o.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Vh(){return{_undoStack:[],_redoStack:[]}}const ci=Ft(Vh());function hL(){ci.update(()=>Vh())}function an(t,e=!0){ci.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function vL(t,e=!0){ci.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function qh(){ci.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Kh(){ci.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}function xg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function pL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function Sg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function Ng(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function mL(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===_.HIGHLIGHTS&&o.highlights.length?xg(o,e):o.value!==null?pL(o,e):n===_.CORNER_PM&&o.cornerMarks.length?Sg(o,e):n===_.CENTER_PM&&o.centerMarks.length?Ng(o,e):o.cornerMarks.length?Sg(o,e):o.centerMarks.length?Ng(o,e):o.highlights.length?xg(o,e):r:r}function to(t,e,n,r=!1){if(!(t&&e))return;const o=nd(t,e),a=rd(t,n),s=fa(o,a);an(s,r)}function Ao(t,e,n,r=!0){if(!(t&&e))return;const o=rd(t,n),a=nd(t,e),s=fa(o,a);an(s,r)}function du(t,e,n,r,o=!1){if(!(t&&n&&e))return;const a=yg(r,t,n),s=yg(r,t,e),c=fa(a,s);an(c,o)}function zs(t,e,n){const r=new li,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,g=!1,h;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(h||(h={}));let f="DYNAMIC";function v(C){u=!1;const I=C.cell;if(qt(C.cell,o)){if(f==="DYNAMIC"){const b=st(rt),x=W2(b,n,I);if(x){const $=M2(x.arrow,x.matchLineIdx);du(x.id,x.arrow,$,n,!0),g=!0;return}const D=Ug(b,n,I);if(!D)u=!0,f="BULB",c=null,a=null;else{f="BODY",c=D[0],a=D[1],a=hu(a,I),Pt(n,c,a);return}}if(f==="BULB"&&!c){c=$t.uniqueId(),a=fv(n,[I]),eo(c,a);return}else f==="BULB"&&c&&a?(a=D2(a,I),Pt(n,c,a)):f==="BODY"&&c&&a&&(a=R2(a,I),Pt(n,c,a))}}return r.onDragStart=C=>{f="DYNAMIC",v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{if(g){g=!1;return}f==="BODY"&&c&&a?k2(a)?(a=G2(a),Pt(n,c,a)):(du(c,s,a,n),s=a):f==="BULB"&&(to(c,a,n),s=a),f="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,O=st(rt);if(Ug(O,n,I)){Ao(c,a,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const js=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,wn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Vs=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,CL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,un=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,ui=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,od=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Se=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,EL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,IL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,bL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,di=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,wL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,OL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,LL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function yL(t){return zu(t)?EL():ju(t)?IL():t===_.XV?OL():Vu(t)?bL():Xu(t)?js():Ku(t)?Vs():la(t)?CL():qu(t)?Se():yh(t)?LL():""}const AL={getInputHandler(t,e,n){return zs(t,e,n)},toolId:_.ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Vs(),tags:[],categories:[R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL]}},xL={getInputHandler(t,e,n){return zs(t,e,n)},toolId:_.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Vs(),tags:[],categories:[R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL]}};_.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,B.LINE,Vs(),R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL;function SL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function NL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function TL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function DL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function RL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const kL={Delete:null,Backspace:null};function GL(t,e=10){if(t in kL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function ML(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function $L(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function FL(t){const e={KeyZ:_.DIGIT,KeyX:_.CORNER_PM,KeyC:_.CENTER_PM,KeyV:_.HIGHLIGHTS};return t in e?e[t]:_.DIGIT}function UL(t){let e;return t.altKey?e=_.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=_.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=_.CENTER_PM:e=_.HIGHLIGHTS,e}function Xh(t){return t==="Backspace"}function _i(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Xh(t.key))}function HL(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function PL(t){return HL(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function BL(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function xo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z]*?/,g=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${g.source}$`,"i").test(t))}function Nr(t,e,n){if(t===void 0)return t;let r=t;return Xh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Zh(t,e,n=""){return{toolId:t,cells:e,value:n}}function WL(t,e,n=!1){const r=Rh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function YL(t,e){return{...t,value:e}}function zL(t,e){const n=ha(e,"cells"),r=io(e);return Zh(t,n,r)}function Yt(t,e,n,r){const o=new li,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let g=0;function h(m){const C=st(rt),I=m.cell;if(qt(m.cell,a)){if(m.event.shiftKey){const b=Fg(C,n,I);b&&(c=b[0],s=b[1],bi({id:c,constraint:s}),g=1)}if(g===0){const b=Fg(C,n,I);if(g=b?2:1,b){Ao(b[0],b[1],n);return}}if(!s&&g===1){s=Zh(n,[I]),c=$t.uniqueId(),eo(c,s);return}else if(s&&c&&g===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=WL(s,I,b),Pt(n,c,s);return}}}function f(m){const C=st(hr);if(!C)return;let I=C.constraint;const O=C.id;if(I.value===void 0||!_i(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(I==null?void 0:I.value,m.key);b!==void 0&&b!==I.value&&(I=YL(I,b),Pt(n,O,I))}return o.onDragStart=m=>{c=null,s=null,g=0,h(m)},o.onDrag=m=>{h(m)},o.onDragEnd=()=>{c&&s&&to(c,s,n),c=null},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:m=>{o.pointerUp(m,t)},keyDown:m=>{f(m)},keyUp:()=>{}}}const id=[R.CAGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CAGE_TOOL],On=[R.CAGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CAGE_TOOL];function dn(t,e=5){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function _n(t,e,n){return Nr(t,e,n)}const fn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},jL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},VL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:wn(),tags:[],categories:On}},qL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:wn(),tags:[],categories:On}},KL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SUM_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:wn(),tags:[],categories:On}},XL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:js(),tags:[],categories:id}},ZL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:js(),tags:[],categories:id}},QL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:wn(),tags:[],categories:On}},JL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:wn(),tags:[],categories:On}},ey={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:_.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:js(),tags:[],categories:id}};_.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,wn();const ty={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:wn(),tags:[],categories:On}},ny={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:wn(),tags:[],categories:On}};_.AQUARIUM_CAGE,z.CAGE_TOOLS,wn();const ry={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:wn(),tags:[],categories:On}},oy={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:wn(),tags:[],categories:On}},iy={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},ay={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:wn(),tags:[],categories:On}};var Zi=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Zi||{});const sy=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),ly=()=>({type:"CLEAR"}),cy=t=>({type:"DRAG",payload:t}),_u=t=>({type:"SET",payload:t}),uy=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),ad=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),_r=(t,e,n)=>{const r=[...t];return Os(r),{cells:r,lastCell:e,mode:n}};function dy(t,e,n){if(e===null)return ad();if(n==="RESETTING")return _r([e],e,"SELECTING");const r=t.cells.findIndex(o=>qe(e,o));if(n==="SELECTING")return r!==-1?t:_r([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),_r(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return _r([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),_r(o,null,"DESELECTING")}return t}function _y(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:_r([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),_r(r,null,t.mode)}return t}function fy(t,e){return{...t,cells:e}}function gy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>qe(e,o))!==-1?_r([...t.cells],e,"SELECTING"):_r([...t.cells,e],e,"SELECTING"):_r([e],e,t.mode)}function Qh(t,e){switch(e==null?void 0:e.type){case"CLEAR":return ad();case"SET":return fy(t,e.payload);case"CLICK":return dy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return _y(t,e.payload);case"ARROW_KEY":return gy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Tg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Jh(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function fu(t){const e=new Option().style;return e.color=t,e.color!==""}function zc(t){return Jh(t)||fu(t)?t:fu(`#${t}`)?`#${t}`:void 0}function ys(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function ev(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function gu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}var Dn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Dn||{});const hy=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),tv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),vy=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),py=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),my=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),Cy=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Ey=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),Iy=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),jc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),by=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Vc=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),qs=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function wy(t,e,n){if(e===_.DIGIT){const r=t.map(s=>s.value),o=hy(t,n),a=tv(t,r);return[o,a]}if(e===_.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),a=vy(t,n),s=py(t,r,o);return[a,s]}if(e===_.REGIONS){const r=t.map(s=>s.region),o=my(t,n),a=Cy(t,r);return[o,a]}if(e===_.FOG){const r=t.map(c=>c.fog),a=Ey(t,n===1),s=Iy(t,r);return[a,s]}if(e===_.HIGHLIGHTS&&n!==null){const r=Vc(t,n),o=Vc(t,n);return[r,o]}if(e===_.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),o=Vc(t,n),a=qs(t,r);return[o,a]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n!==null){const r=jc(t,n,e),o=jc(t,n,e);return[r,o]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n===null){let r=[];e===_.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const o=jc(t,n,e),a=by(t,r,e);return[o,a]}}function ji(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),sn.update(o=>o)}function ri(t){switch(t.type){case Dn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ji(e,_.DIGIT,n,!0);break}case Dn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ji(e,_.GIVEN,n,!0);break}case Dn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ji(e,_.REGIONS,n,!0);break}case Dn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ji(e,_.HIGHLIGHTS,n,!0);break}case Dn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ji(e,r,n,!0);break}case Dn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];sn.update(r=>r);break}case Dn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];sn.update(o=>o);break}case Dn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];sn.update(r=>r);break}case Dn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];sn.update(r=>r);break}case Dn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===_.CENTER_PM?e[o].centerMarks=r[o]:n===_.CORNER_PM&&(e[o].cornerMarks=r[o]);sn.update(o=>o);break}case Dn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),sn.update(r=>r);break}case Dn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];sn.update(r=>r);break}}}function Oy(t,e){return{execute:()=>{ri(t)},unExecute:()=>{ri(e)}}}const Oo=Ft(ad());function Qo(t){t&&Oo.update(e=>Qh(e,t))}function Dg(t){t&&Oo.update(e=>Qh(e,t))}function Ly(t,e){return{execute:()=>{Dg(t)},unExecute:()=>{Dg(e)}}}const Xo=new li;function Rg(t,e){return t.shiftKey?Zi.SELECTING:t.ctrlKey||t.metaKey||e?Zi.DYNAMIC:t.altKey?Zi.DESELECTING:Zi.RESETTING}function ca(t,e,n,r,o=!1){switch(e){case _.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case _.DIGIT:return t.filter(s=>!(o&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case _.CORNER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case _.CENTER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case _.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case _.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function yy(t,e){const n=[e,_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],r=o=>o===_.CORNER_PM||o===_.CENTER_PM||o===_.DIGIT;for(const o of n){const a=ca(t,o,"any",-1,r(o));if(a.length)return{tool:o,cells:a}}return{tool:e,cells:[]}}function na(t,e,n,r){const o=wy(e,n,r);if(o){const a=o[0],s=o[1],c=Oy(a,s),u=_u(t),h=[Ly(u,u),c];vL(h)}}function Ay(t,e,n){const r=_.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const o=ca(e,r,"any",-1,!1);if(o.length)return na(n,o,r,t),!0}else{const o=ca(e,r,"different",t,!0);if(o.length)return na(n,o,r,t),!0}return!1}function no(t,e,n){const r=[_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};Xo.onTap=m=>{if(m.tapCount!==2)return;const I=qt(m.cell,o)?m.cell:null;if(!I)return;const O=mL(I,e,n),b=_u(O);Qo(b)},Xo.onDragStart=m=>{const C=qt(m.cell,o),I=st(vu),O=Rg(m.event,I),b=C?m.cell:null,x=sy(b,O);Qo(x)},Xo.onDrag=m=>{const I=qt(m.cell,o)?m.cell:null,O=cy(I);Qo(O)};function a(m){if(!DL(m))return!1;const C=e.getAllCells().map(O=>({r:O.r,c:O.c})),I=_u(C);return Qo(I),!0}function s(m){if(!$L(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=UL(m);return Ar(C),!0}return m.type==="keyup"?(eT(),!0):!1}function c(m){if(!ML(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Ar(I),pu(I),!0}else{const C=FL(m.code);return Ar(C),pu(C),!0}}function u(m){if(!PL(m))return!1;const C=st(Oo).lastCell;let I=null;if(C!==null){const[x,D]=BL(m),[$,k]=[Tg(C.r+D,0,o.nRows-1),Tg(C.c+x,0,o.nCols-1)];I={r:$,c:k}}else I={r:0,c:0};const O=Rg(m,!1),b=uy(I,O);return Qo(b),!0}function g(m){const C=GL(m);if(C===void 0)return!1;const I=st(Oo).cells,O=[];if(I.forEach(b=>{const x=e.getCell(b.r,b.c);x&&O.push(x)}),n===_.FOG)return Ay(C,O,I);if(C===null){const{tool:b,cells:x}=yy(O,n);if(x.length)return na(I,x,b,C),!0}else{let b=ca(O,n,"different",C,!0);if(b.length)return na(I,b,n,C),!0;if(b=ca(O,n,"equal",C,!0),b.length)return na(I,b,n,C),!0}return!1}function h(m){return m.repeat?!1:g(m.key)}const f=$t.throttle(m=>{Xo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&Xo.pointerDown(m,t)},pointerMove(m){f(m)},pointerUp(m){Xo.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||h(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){g(m.currentTarget.value)}}}function Jo(t,e){return qe(t.p1,e.p1)&&qe(t.p2,e.p2)||qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function xy(t,e){return qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function nv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!qe(t,e)}class Ks{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>qe(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Jo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>Jo(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&xy(r,e)&&this.draftLine.splice(n,1)}onDrag(e){nv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>Jo(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(a=>Jo(a,r));if(o!==-1){const a=this.lineMarkers.splice(o,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Ks;return Object.assign(e,this),e}}class Sy{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Mn(e,n);if(!r)return;const o=Yc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._prevType=o.type,this._prevCoords=o.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=Yc(r,!1);if(!o||this._prevCoords&&qe(this._prevCoords,o.target))return;this._isTap=!1;const a={coords:o.target,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&nv(this._prevCoords,o.target)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=o.type,this._prevCoords=o.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Mn(e,n);if(!r)return;const o=Yc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._isTap&&this._prevCoords&&qe(this._prevCoords,o.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}const kg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Gg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),ps=t=>({type:"ADD_CELL_MARKER",payload:t}),Ny=t=>({type:"SET_CELL_MARKERS",payload:t}),Mg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),Ty=t=>({type:"DRAG",payload:t}),As=t=>({type:"ADD_LINE_MARKERS",payload:t}),$g=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),sd=()=>({type:"RESET"});function Dy(t,e){switch(e.type){case"RESET":return new Ks;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}const xs=Ft(new Ks);function Sr(t){xs.update(e=>Dy(e,t))}const Ss=Ft(1);function po(t,e){return{execute:()=>{Sr(t)},unExecute:()=>{Sr(e)}}}function Ry(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new Sy;return r.onTap=a=>{const s=a.coords,c=st(Ss),u=st(xs);if(a.type==="cell center"){if(!aO(s,n))return;const h=u.getCellMarker(s);if(h)if(h.marker==="X"){const f={...s,colorId:c,marker:"O"},v=ps(f),m=ps(h),C=po(v,m);an(C)}else{const f=Mg(s),v=ps(h),m=po(f,v);an(m)}else{const f={...s,colorId:c,marker:"X"},v=ps(f),m=Mg(s),C=po(v,m);an(C)}}else if(a.type==="edge"){const g=u.getEdgeMarker(s);if(g){const h=Gg(s),f=kg(g),v=po(h,f);an(v)}else{const h={...s,colorId:c},f=kg(h),v=Gg(s),m=po(f,v);an(m)}}},r.onDrag=a=>{const s=a.coords,c=st(Ss);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},g=Ty(u);Sr(g)}},r.onDragEnd=()=>{const a=st(xs);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>Jo(c,u)));if(s.length){const c=As(s),u=$g(s),g=po(c,u);an(g)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>Jo(c,u)));if(s.length){const c=$g(s),u=As(s),g=po(c,u);an(g)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const ky={getInputHandler:no,toolId:_.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[R.CELL_INPUT_TOOL]}},Gy={getInputHandler:no,toolId:_.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[R.CELL_INPUT_TOOL]}},My={getInputHandler:no,toolId:_.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[R.CELL_INPUT_TOOL]}},$y={getInputHandler:no,toolId:_.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[R.CELL_INPUT_TOOL]}},Fy={getInputHandler:no,toolId:_.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[R.CELL_INPUT_TOOL]}},Uy={getInputHandler:no,toolId:_.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[R.CELL_INPUT_TOOL]}},Hy={getInputHandler:no,toolId:_.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[R.CELL_INPUT_TOOL]}},Py={getInputHandler:no,toolId:_.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[R.CELL_INPUT_TOOL]}},By={getInputHandler:Ry,toolId:_.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var vt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(vt||{});class Xs{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=Mn(e,n);if(!r)return;const o=ta(r,!1);if(!o)return;const a=ea(r,!1);if(!a)return;const s=bs(r,!1);if(!s)return;const c=jh(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=o.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<o.dist?u=a.corner:u=o.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?o.dist<c.dist?u=o.edge:u=c.cellCenter:o.dist<a.dist&&o.dist<c.dist?u=o.edge:a.dist<o.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let g=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<o.dist&&(g="corner");const h=g==="edge"?2*o.idx:2*a.idx+1,f={event:e,cell:s.cell,edge:o.edge,corner:a.corner,closest:u,edgeIdx:o.idx,cornerIdx:a.idx,direction:h};this.onDragStart&&this.onDragStart(f)}}function rv(t,e,n=""){return{toolId:t,cell:e,value:n}}function Wy(t,e){const n=ga(e),r=io(e);return rv(t,n,r)}function ld(t,e,n,r){const o=(r==null?void 0:r.targets)??vt.CLOSEST,a=new Xs(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function g(v){const m=st(rt),C=v.cell,I=v.closest;if(!qt(C,s))return;const b=z2(m,n,I);if(b){wo(n,b);return}c=rv(n,I,""),u=$t.uniqueId(),eo(u,c)}function h(v){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!_i(v)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,v.key);O!==void 0&&O!==C.value&&(C=va(C,O),Pt(n,I,C))}return a.onDragStart=v=>{g(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{h(v)},keyUp:()=>{}}}_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,B.CIRCLE,od(),R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT;const Yy={getInputHandler(t,e,n){return ld(t,e,n,{targets:vt.CLOSEST,valueUpdater:(r,o)=>Nr(r,o,()=>!0),defaultValue:""})},toolId:_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:od(),tags:[],categories:[R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT]}},zy={getInputHandler(t,e,n){return ld(t,e,n,{targets:vt.CORNER_OR_EDGE,valueUpdater:(r,o)=>Nr(r,o,()=>!0),defaultValue:""})},toolId:_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:od(),tags:[],categories:[R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT]}};function jy(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function Vy(t,e){const n=Rh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function qy(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function Ky(t){for(let e=0;;e++){const n=qy(e);if(!t.has(n))return n}}function Xy(t,e,n){const r=new li,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,g="cells2",h;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(h||(h={}));let f=0;function v(C){const I=st(rt),O=C.cell;if(!qt(C.cell,o))return;const x=j2(I,n,O);if(f===0&&(x?(c=x[0],a=x[1],f=2,u=O,g=a.cells2.some($=>qe($,O))?"cells2":"cells"):f=1),f===1&&c===null){c=$t.uniqueId();const D=V2(I,n),$=Ky(D);a=jy(n,[O],$),eo(c,a);return}else if(f===1&&c&&a){a=Vy(a,O),Pt(n,c,a);return}else if(f===2&&c&&a&&u){const D={r:O.r-u.r,c:O.c-u.c},k=(g==="cells2"?a.cells2:a.cells).map(W=>({r:W.r+D.r,c:W.c+D.c}));if(!k.every(W=>qt(W,o)))return;g==="cells"?a={...a,cells:k}:a={...a,cells2:k},u=O,Pt(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,f=0,u=null,v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{c&&a&&(f===1?to(c,a,n):f===2&&du(c,s,a,n),s=a)},r.onTap=()=>{c&&f!==1&&(wo(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const Zy={getInputHandler(t,e,n){return Xy(t,e,n)},toolId:_.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[R.CLONE_CONSTRAINT,R.LOCAL_CONSTRAINT]}};function ov(t,e,n){return{toolId:t,cells:e,value:n}}function Qy(t,e){const n=ha(e,"cells"),r=io(e);return ov(t,n,r)}class Jy{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellCorner",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const o=ea(r);if(!o)return;this._prevCellCorner=o.corner;const a={event:e,cellCorner:o.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=ea(r);if(!o||this._prevCellCorner&&qe(o.corner,this._prevCellCorner))return;const a={event:e,cellCorner:o.corner};this._prevCellCorner=o.corner,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellCorner=null,this._isDown=!1);const r=Mn(e,n);!r||ea(r)}}function ro(t,e,n,r){const o=new Jy,a={nRows:e.nRows,nCols:e.nCols};let s;(f=>{f[f.DYNAMIC=0]="DYNAMIC",f[f.ADDING=1]="ADDING",f[f.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(f){const v=st(rt),m=f.cellCorner,C=Nh(m);if(!C.every(b=>qt(b,a)))return;let O=null;if(c===0&&(O=P2(v,n,m),c=O?2:1),O&&c===2){const b=O[0];Ao(b,O[1],n);return}else if(c===1){const b=ov(n,C,r==null?void 0:r.defaultValue),x=$t.uniqueId();to(x,b,n,!0)}}function g(f){const v=st(hr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!_i(f)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,f.key);I!==void 0&&I!==m.value&&(m=va(m,I),Pt(n,C,m))}return o.onDragStart=f=>{c=0,u(f)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{g(f)},keyUp:()=>{}}}function Zs(t,e=3){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Qs(t,e,n){return Nr(t,e,n)}function eA(t,e){function n(r){return!0}return Nr(t,e,n)}const tA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>eA(r,o),defaultValue:""})},toolId:_.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:wL(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL]}},nA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>Qs(r,o,Zs),defaultValue:""})},toolId:_.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:di(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL]}},rA={getInputHandler(t,e,n){return ro(t,e,n)},toolId:_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:di(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}},oA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>Qs(r,o,Zs),defaultValue:""})},toolId:_.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:di(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}};_.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,B.CIRCLE,di(),R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL;const iA={getInputHandler(t,e,n){return ro(t,e,n,{defaultValue:"X"})},toolId:_.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:di(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}},aA={getInputHandler(t,e,n){return ro(t,e,n,{defaultValue:""})},toolId:_.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:di(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}};function iv(t,e,n){return{toolId:t,cells:e,value:n}}function sA(t,e){const n=ha(e,"cells"),r=io(e);return iv(t,n,r)}function av(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>qe(a,e)&&s>=r)}function lA(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:Ps(r[o-1],e)))return t;const s=av(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Ae(t,e,n,r){const o=new li,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function g(f){if(!u||!c)throw"UNREACHABLE";const v=f.cell;qt(f.cell,a)&&(c=lA(c,v,s),Pt(n,u,c))}return o.onDragStart=f=>{u=$t.uniqueId(),c=iv(n,[],r==null?void 0:r.defaultValue),eo(u,c),g(f)},o.onDrag=f=>{g(f)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?wo(n,u):u&&c&&to(u,c,n,!1),u=null},o.onTap=f=>{const v=f.cell,m=st(rt),C=B2(m,n,v);if(C){const[I,O]=C;Ao(I,O,n)}},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:()=>{},keyUp:()=>{}}}function sv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function cA(t,e){const n=ga(e),r=io(e);return sv(t,n,r)}function lv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function uA(t,e){const n=ga(e),r=_v(e);return lv(t,n,r)}function cv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function dA(t,e){const n=ga(e),r=N2(e),o=cv(t,n,Be.N);return o.directions=r,o}function Ze(t,e,n,r,o){const a=new li,s={nRows:e.nRows,nCols:e.nCols};let c;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function g(v){const m=st(rt),C=v.cell;if(!qt(v.cell,s))return;const O=ud(m,n,C);if(u===0&&(u=O?2:1),O&&u===2){const[b,x]=O;Ao(b,x,n)}else if(u===1){const b=sv(n,C,o==null?void 0:o.defaultValue),x=$t.uniqueId();to(x,b,n,!0)}}a.onDragStart=v=>{u=0,g(v)},a.onDrag=v=>{g(v)};function h(v){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!_i(v)||!(o!=null&&o.valueUpdater))return;const O=o.valueUpdater(C==null?void 0:C.value,v.key);O!==void 0&&O!==C.value&&(C=va(C,O),Pt(n,I,C))}return{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:v=>{a.pointerMove(v,t)},pointerUp:v=>{a.pointerUp(v,t)},keyDown:v=>{h(v)},keyUp:()=>{}}}class _A{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const o=ta(r,!0,.35);if(!o)return;this._prevCellEdge=o.edge;const a={event:e,edge:o.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const o=ta(r,!0,.35);if(!o||this._prevCellEdge&&qe(o.edge,this._prevCellEdge))return;const a={event:e,edge:o.edge};this._prevCellEdge=o.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Mn(e,n);!r||ta(r,!0,.35)}}function uv(t,e,n){return{toolId:t,cells:e,value:n}}function fA(t,e){const n=ha(e,"cells"),r=io(e);return uv(t,n,r)}function Fn(t,e,n,r){const o=new _A,a={nRows:e.nRows,nCols:e.nCols};let s;(f=>{f[f.DYNAMIC=0]="DYNAMIC",f[f.ADDING=1]="ADDING",f[f.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(f){const v=st(rt),m=f.edge,C=Dh(m);if(!C.every(b=>qt(b,a)))return;let O=null;if(c===0&&(O=H2(v,n,C),c=O?2:1),O&&c===2){const b=O[0];Ao(b,O[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",x=uv(n,C,b),D=$t.uniqueId();to(D,x,n,!0)}}function g(f){const v=st(hr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!_i(f)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,f.key);I!==void 0&&I!==m.value&&(m=va(m,I),Pt(n,C,m))}return o.onDragStart=f=>{c=0,u(f)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{g(f)},keyUp:()=>{}}}function cd(t,e,n,r=vt.CORNER_OR_EDGE){const o=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],a=new Xs(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,g;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(g||(g={}));let h=0;function f(C){const I=st(rt),O=C.cell;if(!qt(C.cell,s))return;C.event.altKey&&(h=2);const x=ud(I,n,O),D=Qu(C.direction);if(x){[u,c]=x,c.direction===D||h===2?Ao(u,c,n):(c={...c,direction:D},Pt(n,u,c));return}else h!==2&&(c=lv(n,O,D),u=$t.uniqueId(),to(u,c,n,!0))}function v(C){if(!c||!u||!RL(C))return;const O=(o.indexOf(c.direction)+1)%o.length;c={...c,direction:o[O]},Pt(n,u,c)}return a.onDragStart=C=>{h=0,f(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{v(C)},keyUp:()=>{}}}function gA(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function Tr(t,e,n,r=vt.CORNER_OR_EDGE){const o=new Xs(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let g=0;function h(v){const m=st(rt),C=v.cell;if(!qt(v.cell,a))return;v.event.altKey&&(g=2);const O=Qu(v.direction),b=ud(m,n,C);if(b){if(c=b[0],s=b[1],g===2)wo(n,b[0]);else{const x=gA(s.directions,O);x.length?(s={...s,directions:x},Pt(n,c,s)):wo(n,c)}return}else g!==2&&(s=cv(n,C,O),c=$t.uniqueId(),eo(c,s))}return o.onDragStart=v=>{g=0,h(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const hA=[R.EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.EDGE_TOOL],ir=[R.EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.EDGE_TOOL],gr=.15,So=.02;function vA(t,e=1){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function fi(t,e=3){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function pA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function No(t,e,n){return Nr(t,e,n)}function mA(t,e){return t===void 0?"V":pA(e)?e.toUpperCase():t}function CA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function EA(t,e){return t===void 0?"<":CA(e)?e:t}const IA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,vA)})},toolId:_.RATIO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:ir}},bA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,fi)})},toolId:_.DIFFERENCE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:ir}},wA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,fi)})},toolId:_.EDGE_SUM,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:ir}},OA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:mA,defaultValue:"V"})},toolId:_.XV,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:ir}},LA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:EA,defaultValue:"<"})},toolId:_.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:ir}},yA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,fi)})},toolId:_.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:ir}},AA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,fi)})},toolId:_.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:ir}},xA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,fi)})},toolId:_.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:ir}},SA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:ir}},NA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:So,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:ir}},TA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:gr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:ir}},DA={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:B.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:hA}};function dv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function RA(t,e){const n=ga(e),r=_v(e),o=io(e);return dv(t,n,r,o)}function Rt(t,e,n,r){const o=(r==null?void 0:r.cornerOrEdge)??vt.CORNER_OR_EDGE,a=new Xs(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function g(v){const m=st(rt),C=v.cell,I=v.direction,O=Qu(I);if(qt(C,s))return;const x=Th(C,O);if(!qt(x,s))return;const $=Y2(m,n,C,O);if($){wo(n,$);return}c=dv(n,C,O,""),u=$t.uniqueId(),eo(u,c)}function h(v){const m=st(hr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!_i(v)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,v.key);O!==void 0&&O!==C.value&&(C=va(C,O),Pt(n,I,C))}return a.onDragStart=v=>{g(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{h(v)},keyUp:()=>{}}}const gi=[R.OUTSIDE_CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_CORNER_TOOL,R.OUTSIDE_DIRECTION_TOOL];function hi(t,e=5){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function To(t,e,n){return Nr(t,e,n)}const vi={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},kA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,hi),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:vi,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:ui(),tags:[],categories:gi}},GA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,hi),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:vi,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:ui(),tags:[],categories:gi}},MA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,hi),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:vi,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:ui(),tags:[],categories:gi}},$A={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,hi),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:vi,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:ui(),tags:[],categories:gi}},FA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,hi),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:vi,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:ui(),tags:[],categories:gi}},UA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,hi),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:vi,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:ui(),tags:[],categories:gi}},gn=[R.OUTSIDE_EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_EDGE_TOOL,R.OUTSIDE_DIRECTION_TOOL];function en(t,e=5){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function hn(t,e,n){return Nr(t,e,n)}const vn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},HA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:un(),tags:[],categories:gn}},PA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:un(),tags:[],categories:gn}},BA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:un(),tags:[],categories:gn}},WA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:un(),tags:[],categories:gn}},YA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:un(),tags:[],categories:gn}},zA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:un(),tags:[],categories:gn}},jA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:un(),tags:[],categories:gn}},VA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:un(),tags:[],categories:gn}},qA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.X_INDEX,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:un(),tags:[],categories:gn}},KA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:un(),tags:[],categories:gn}};_.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,un();const XA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:un(),tags:[],categories:gn}},ZA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:_.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:un(),tags:[],categories:gn}},QA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:_.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:un(),tags:[],categories:gn}},JA={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:un(),tags:[],categories:gn}},ex={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},tx={getInputHandler(t,e,n){return cd(t,e,n)},toolId:_.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},nx={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},rx={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,o)=>No(r,o,fi)})},toolId:_.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},ox={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>Qs(r,o,Zs),defaultValue:""})},toolId:_.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},ix={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},ax={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},sx={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},lx={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>_n(r,o,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},cx={getInputHandler(t,e,n){return zs(t,e,n)},toolId:_.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.LOCAL_CONSTRAINT]}},ux={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>To(r,o,en),defaultValue:"",cornerOrEdge:vt.CORNER_OR_EDGE})},toolId:_.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_DIRECTION_TOOL]}},pi=[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT,R.DIAGONAL_CONSTRAINT],dx={toolId:_.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},_x={toolId:_.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:_.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:_.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},hx={toolId:_.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},vx={toolId:_.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},px={toolId:_.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},mx={toolId:_.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},Cx={toolId:_.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},Ex={toolId:_.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},Ix={toolId:_.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},bx={toolId:_.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},wx={toolId:_.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:pi}},Ox={toolId:_.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:pi}},Lx={toolId:_.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:pi}},yx={toolId:_.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:pi}},Ax={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:pi}},xx={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:pi}},Sx={toolId:_.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},Nx={toolId:_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},Tx={toolId:_.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Dx={toolId:_.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Rx={toolId:_.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},kx={toolId:_.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Gx={toolId:_.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Mx={toolId:_.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},$x={toolId:_.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Fx={toolId:_.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Ux={toolId:_.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Hx={toolId:_.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Px={toolId:_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Bx={toolId:_.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Wx={toolId:_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Yx={toolId:_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},zx={toolId:_.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:_.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:_.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:_.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:_.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:_.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:_.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},eS={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},tS={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},nS={toolId:_.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},rS={toolId:_.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},oS={toolId:_.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},iS={toolId:_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},aS={toolId:_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},sS={toolId:_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},lS={toolId:_.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},cS={toolId:_.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},uS={toolId:_.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},dS={toolId:_.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},_S={toolId:_.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},fS={toolId:_.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},gS={toolId:_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},hS={toolId:_.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},vS={toolId:_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},pS={toolId:_.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},mS={toolId:_.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},CS={toolId:_.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Fe=[R.LINE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.LINE_TOOL],Dr=[R.LINE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.DOUBLE_ENDED_LINE_CONSTRAINT,R.LINE_TOOL],ES={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers along a thermometer must increase from the bulb end.",usage:Se(),tags:[],categories:Fe}},IS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced.",usage:Se(),tags:[],categories:Fe}},bS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s).",usage:Se(),tags:[],categories:Fe}},wS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end.",usage:Se(),tags:[],categories:Fe}},OS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.PALINDROME,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Se(),tags:[],categories:Fe}},LS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Se(),tags:[],categories:Fe}},yS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Se(),tags:[],categories:Fe}},AS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Se(),tags:[],categories:Fe}},xS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},SS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Se(),tags:[],categories:Fe}},NS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Se(),tags:[],categories:Fe}},TS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:_.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Se(),tags:[],categories:Fe}},DS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Se(),tags:[],categories:Fe}},RS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Se(),tags:[],categories:Fe}},kS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Se(),tags:[],categories:Fe}},GS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Se(),tags:[],categories:Fe}},MS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Se(),tags:[],categories:Fe}},$S={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Se(),tags:[],categories:Fe}},FS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Se(),tags:[],categories:Fe}},US={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:_.SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Se(),tags:[],categories:Fe}},HS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Se(),tags:[],categories:Fe}},PS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Se(),tags:[],categories:Fe}},BS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Se(),tags:[],categories:Fe}},WS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Se(),tags:[],categories:Fe}},YS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:_.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Se(),tags:[],categories:Fe}},zS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Se(),tags:[],categories:Fe}},jS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Se(),tags:[],categories:Fe}},VS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Se(),tags:[],categories:Fe}},qS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Se(),tags:[],categories:Fe}},KS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Se(),tags:[],categories:Fe}},XS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Se(),tags:[],categories:Fe}},ZS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Se(),tags:[],categories:Fe}},QS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Se(),tags:[],categories:Fe}},JS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Se(),tags:[],categories:Fe}},eN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.XV_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Se(),tags:[],categories:Fe}},tN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Se(),tags:[],categories:Fe}},nN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:_.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Se(),tags:[],categories:Fe}},rN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Se(),tags:[],categories:Fe}};_.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,B.LINE,Se();const oN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:_.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Se(),tags:[],categories:Fe}},iN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Se(),tags:[],categories:Fe}},aN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Se(),tags:[],categories:Fe}},sN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Se(),tags:[],categories:Fe}},lN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Se(),tags:[],categories:Fe}},cN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:_.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Se(),tags:[],categories:Fe}};_.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,B.THERMO_WITH_CIRCLE,Se();const uN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Se(),tags:[],categories:Fe}},dN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Se(),tags:[],categories:Fe}},_N={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Se(),tags:[],categories:Fe}},fN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Se(),tags:[],categories:Fe}},gN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Se(),tags:[],categories:Fe}},hN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Se(),tags:[],categories:Fe}},vN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Se(),tags:[],categories:Dr}},pN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:_.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Se(),tags:[],categories:Dr}},mN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Se(),tags:[],categories:Dr}},CN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Se(),tags:[],categories:Dr}},EN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Se(),categories:Dr}},IN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Se(),tags:[],categories:Dr}},bN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Se(),tags:[],categories:Dr}},wN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Se(),tags:[],categories:Fe}},ON={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Se(),tags:[],categories:Dr}},LN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Se(),tags:[],categories:Dr}},ut=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_SHAPE_TOOL],mi=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_COLOR_TOOL];function Ci(t,e=3){return xo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function yN(t){return t===""||t==="1"||t==="2"||t==="3"}function Do(t,e,n){return Nr(t,e,n)}const AN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:ut}},xN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:ut}},SN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},NN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}};_.PRIME_CELL,z.CELL_COLOR_TOOL;const TN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ut}},DN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ut}},RN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ut}},kN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ut}},GN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ut}},MN={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,Ci),defaultValue:""})},toolId:_.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ut}},$N={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,Ci),defaultValue:"9"})},toolId:_.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ut}},FN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ut}},UN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:mi}},HN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:mi}},PN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:mi}},BN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:mi}},WN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:mi}},YN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ut}},zN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ut}},jN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ut}},VN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ut}},qN={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,yN),defaultValue:""})},toolId:_.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ut}},KN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ut}},XN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ut}},ZN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ut}},QN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ut}},JN={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ut}},e2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ut}},t2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ut}},n2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ut}},r2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ut}},o2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ut}},i2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ut}},a2={getInputHandler(t,e,n){return cd(t,e,n)},toolId:_.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[R.SINGLE_CELL_ARROW_TOOL,R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},s2={getInputHandler(t,e,n){return cd(t,e,n)},toolId:_.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[R.SINGLE_CELL_ARROW_TOOL,R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},l2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,Ci),defaultValue:""})},toolId:_.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ut}},c2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ut}},u2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ut}},d2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ut}},_2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,Ci),defaultValue:""})},toolId:_.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ut}},f2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ut}},g2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,Ci),defaultValue:""})},toolId:_.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ut}},h2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,o)=>Do(r,o,Ci),defaultValue:""})},toolId:_.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ut}},oo=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_MULTIARROW_TOOL],Ei={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},v2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:oo}},p2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:oo}},m2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:oo}},C2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:oo}},E2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:oo}},I2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ei,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:oo}},b2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:oo}},w2={getInputHandler(t,e,n){return Tr(t,e,n)},toolId:_.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:oo}},O2={toolId:_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}},L2={toolId:_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}};_.VAMPIRE_AND_PREY,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;_.MARKED_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;const y2={toolId:_.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}},A2={toolId:_.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}};_.HOT_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;_.COLD_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;_.DECREMENT_FOUNTAIN,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;const x2={toolId:_.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}},Mt={[_.GIVEN]:ky,[_.DIGIT]:Gy,[_.REGIONS]:My,[_.OUTSIDE]:Hy,[_.CORNER_PM]:$y,[_.CENTER_PM]:Fy,[_.HIGHLIGHTS]:Uy,[_.FOG]:Py,[_.PEN_TOOL]:By,[_.SUDOKU_RULES_DO_NOT_APPLY]:dx,[_.LEAVE_EMPTY_CELLS_EMPTY]:_x,[_.LITS]:hx,[_.HEXED_SUDOKU]:fx,[_.FILLOMINO]:gx,[_.ANTIKNIGHT]:vx,[_.ANTIKING]:mx,[_.ANTI_GIRAFFE]:px,[_.DISJOINT_GROUPS]:Cx,[_.TANGO]:Ex,[_.NONCONSECUTIVE]:Ix,[_.NONRATIO]:bx,[_.GLOBAL_INDEXING_COLUMN]:Sx,[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:Nx,[_.NEGATIVE_DIAGONAL]:wx,[_.POSITIVE_DIAGONAL]:Ox,[_.NEGATIVE_ANTIDIAGONAL]:Lx,[_.POSITIVE_ANTIDIAGONAL]:yx,[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:Ax,[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:xx,[_.ALL_RATIOS_GIVEN]:Tx,[_.ALL_DIFFERENCES_GIVEN]:Dx,[_.ALL_X_GIVEN]:Rx,[_.ALL_V_GIVEN]:kx,[_.ALL_XV_GIVEN]:Gx,[_.ALL_RADARS_GIVEN]:Mx,[_.ALL_XY_DIFFERENCES_GIVEN]:$x,[_.ALL_INDEXING_COLUMN_GIVEN]:Fx,[_.ALL_INDEXING_ROW_GIVEN]:Ux,[_.ALL_YIN_YANG_KROPKI_GIVEN]:Hx,[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:Px,[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Wx,[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Yx,[_.CAVE_CELLS_ARE_ODD]:cS,[_.CAVE_WALLS_ARE_EVEN]:lS,[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:aS,[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:sS,[_.DOUBLERS]:y2,[_.NEGATORS]:A2,[_.NEXUS]:x2,[_.UNKNOWN_REGIONS]:zx,[_.YIN_YANG]:jx,[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Vx,[_.NURIMISAKI]:qx,[_.TWO_CONTIGUOUS_REGIONS]:Kx,[_.SASHIGANE]:Xx,[_.GOLDILOCKS_ZONE]:Zx,[_.CELL_CENTER_LOOP_NO_TOUCHING]:Qx,[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Jx,[_.NOT_LOOP_SIZED_REGIONS]:nS,[_.MODULAR_LOOP]:rS,[_.CAVE]:oS,[_.CAVE_LITS]:uS,[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:iS,[_.NURIMISAKI_PATH_GERMAN_WHISPERS]:Bx,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:eS,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:tS,[_.GALAXIES]:_S,[_.TWO_SYMMETRIC_GALAXIES]:hS,[_.EVERY_CELL_BELONGS_TO_A_GALAXY]:fS,[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:gS,[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:vS,[_.PENTOMINO_TILLING]:pS,[_.TILLING_NO_EMPTY_CELLS]:mS,[_.LITS_BLACK_WHITE_STAR_BATTLE]:CS,[_.ODD]:AN,[_.EVEN]:xN,[_.MINIMUM]:SN,[_.MAXIMUM]:NN,[_.ODD_MINESWEEPER]:TN,[_.EVEN_MINESWEEPER]:DN,[_.WATCHTOWER]:kN,[_.NOT_WATCHTOWER]:GN,[_.FARSIGHT]:MN,[_.RADAR]:$N,[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:RN,[_.ORTHOGONAL_SUM]:FN,[_.DIAGONALLY_ADJACENT_SUM]:YN,[_.INDEXING_COLUMN]:UN,[_.INDEXING_ROW]:HN,[_.LOW_DIGIT]:PN,[_.HIGH_DIGIT]:BN,[_.FRIENDLY_CELL]:WN,[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:zN,[_.SANDWICH_ROW_COL_COUNT]:jN,[_.COUNTING_CIRCLES]:VN,[_.COLORED_COUNTING_CIRCLES]:qN,[_.UNIQUE_CELLS]:KN,[_.YIN_YANG_MINESWEEPER]:XN,[_.YIN_YANG_SEEN_UNSHADED_CELLS]:ZN,[_.YIN_YANG_SEEN_SHADED_CELLS]:QN,[_.YIN_YANG_SEEN_SAME_SHADE_CELLS]:JN,[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:e2,[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:t2,[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:n2,[_.SEEN_REGION_BORDERS_COUNT]:r2,[_.NURIMISAKI_UNSHADED_ENDPOINTS]:o2,[_.SASHIGANE_BEND_REGION_COUNT]:i2,[_.SASHIGANE_REGION_SUM]:l2,[_.CELL_ON_THE_LOOP]:c2,[_.CELL_NOT_ON_THE_LOOP]:u2,[_.COUNT_LOOP_NEIGHBOUR_CELLS]:d2,[_.CAVE_CLUE]:f2,[_.TWILIGHT_CAVE_FILLOMINO_CLUE]:_2,[_.YIN_YANG_FILLOMINO_PARITY]:dS,[_.CHAOS_CONSTRUCTION_CHESS_SUMS]:g2,[_.CHAOS_CONSTRUCTION_ARROW_KNOTS]:h2,[_.SASHIGANE_ARROW_POINTS_TO_BEND]:a2,[_.THERMO_SIGHTLINE_LOOP_ARROW]:s2,[_.HOT_ARROWS]:w2,[_.COLD_ARROWS]:b2,[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:I2,[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:C2,[_.YIN_YANG_COUNT_SHADED_CELLS]:E2,[_.LOOP_CELL_COUNT_ARROWS]:m2,[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:p2,[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:v2,[_.DIFFERENCE]:bA,[_.RATIO]:IA,[_.XV]:OA,[_.EDGE_INEQUALITY]:LA,[_.EDGE_SUM]:wA,[_.EDGE_PRODUCT]:yA,[_.EDGE_MODULO]:AA,[_.EDGE_FACTOR]:xA,[_.XY_DIFFERENCES]:SA,[_.YIN_YANG_WHITE_KROPKI]:NA,[_.YIN_YANG_KROPKI]:TA,[_.UNKNOWN_REGION_BORDER]:DA,[_.QUADRUPLE]:tA,[_.CORNER_SUM]:nA,[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:rA,[_.CORNER_EVEN_COUNT]:oA,[_.PRODUCT_SQUARE]:iA,[_.EQUAL_DIAGONAL_DIFFERENCES]:aA,[_.THERMOMETER]:ES,[_.FUZZY_THERMOMETER]:IS,[_.SLOW_THERMOMETER]:bS,[_.ROW_CYCLE_THERMOMETER]:wS,[_.PALINDROME]:OS,[_.RENBAN_LINE]:LS,[_.DOUBLE_RENBAN_LINE]:yS,[_.RENRENBANBAN_LINE]:AS,[_.N_CONSECUTIVE_RENBAN_LINE]:xS,[_.NABNER_LINE]:SS,[_.WHISPERS_LINE]:NS,[_.DUTCH_WHISPERS]:TS,[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:DS,[_.RENBAN_OR_WHISPERS_LINE]:RS,[_.RENBAN_OR_NABNER_LINE]:kS,[_.OUT_OF_ORDER_CONSECUTIVE_LINE]:GS,[_.INDEX_LINE]:MS,[_.UNIQUE_VALUES_LINE]:$S,[_.REPEATED_DIGITS_LINE]:ZS,[_.REGION_SUM_LINE]:FS,[_.SUM_LINE]:US,[_.XV_LINE]:eN,[_.ROW_SUM_LINE]:tN,[_.AT_LEAST_X_LINE]:nN,[_.SUPERFUZZY_ARROW]:QS,[_.HEADLESS_ARROW]:JS,[_.N_CONSECUTIVE_FUZZY_SUM_LINE]:rN,[_.PRODUCT_LINE]:oN,[_.ADJACENT_MULTIPLES_LINE]:iN,[_.ADJACENT_DIFFERENCES_COUNT_LINE]:aN,[_.LOOK_AND_SAY_LINE]:sN,[_.ARITHMETIC_SEQUENCE_LINE]:HS,[_.ZIPPER_LINE]:lN,[_.SEGMENTED_SUM_LINE]:cN,[_.SAME_PARITY_LINE]:PS,[_.MODULAR_LINE]:BS,[_.UNIMODULAR_LINE]:WS,[_.MODULAR_OR_UNIMODULAR_LINE]:YS,[_.ODD_EVEN_OSCILLATOR_LINE]:zS,[_.HIGH_LOW_OSCILLATOR_LINE]:jS,[_.ENTROPIC_LINE]:VS,[_.ENTROPIC_OR_MODULAR_LINE]:qS,[_.INDEXING_COLUMN_IS_X_LINE]:KS,[_.INDEXING_ROW_IS_X_LINE]:XS,[_.YIN_YANG_INDEXING_LINE_COLORING]:gN,[_.YIN_YANG_SHADED_WHISPERS_LINE]:uN,[_.YIN_YANG_UNSHADED_ENTROPIC_LINE]:dN,[_.YIN_YANG_UNSHADED_MODULAR_LINE]:_N,[_.YIN_YANG_REGION_SUM_LINE]:fN,[_.GOLDILOCKS_ZONE_REGION_SUM]:hN,[_.BETWEEN_LINE]:vN,[_.LOCKOUT_LINE]:pN,[_.PARITY_COUNT_LINE]:CN,[_.TIGHTROPE_LINE]:mN,[_.DOUBLE_ARROW_LINE]:EN,[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:IN,[_.SPLIT_PEAS]:bN,[_.DOUBLERS_THERMOMETER]:wN,[_.DOUBLERS_BETWEEN_LINE]:ON,[_.DOUBLERS_DOUBLE_ARROW_LINE]:LN,[_.ARROW]:AL,[_.AVERAGE_ARROW]:xL,[_.KILLER_CAGE]:jL,[_.UNIQUE_DIGITS_CAGE]:VL,[_.INVERTED_KILLER_CAGE]:qL,[_.SUM_CAGE]:KL,[_.SUM_CAGE_LOOK_AND_SAY]:XL,[_.PARITY_BALANCE_CAGE]:ZL,[_.DIVISIBLE_KILLER_CAGE]:QL,[_.SPOTLIGHT_CAGE]:JL,[_.PUTTERIA_CAGE]:ey,[_.MULTISET_CAGE]:ty,[_.VAULTED_CAGE]:ny,[_.YIN_YANG_ANTITHESIS_KILLER_CAGE]:ry,[_.YIN_YANG_BREAKEVEN_KILLER_CAGE]:oy,[_.DOUBLERS_KILLER_CAGE]:iy,[_.NEGATORS_KILLER_CAGE]:ay,[_.CLONE_REGION]:Zy,[_.SANDWICH_SUM]:HA,[_.X_SUM]:PA,[_.SHORTSIGHTED_X_SUM]:BA,[_.SHIFTED_X_SUM]:WA,[_.BROKEN_X_SUM]:YA,[_.X_SUM_SKYSCRAPERS]:zA,[_.BATTLEFIELD]:jA,[_.SKYSCRAPERS]:VA,[_.X_INDEX]:qA,[_.RISING_STREAK]:KA,[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:XA,[_.OUTSIDE_CONSECUTIVE_SUM]:ZA,[_.LOOPWICHES]:QA,[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:JA,[_.LITTLE_KILLER_SUM]:kA,[_.LITTLE_KILLER_PRODUCT]:GA,[_.LITTLE_KILLER_LOOK_AND_SAY]:MA,[_.LITTLE_KILLER_REGION_SUM_PRODUCT]:FA,[_.X_OMIT_LITTLE_KILLER_SUM]:$A,[_.NEGATORS_LITTLE_KILLER_SUM]:UA,[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Yy,[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:zy,[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:O2,[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:L2,[_.COSMETIC_CELL_SHAPE]:ex,[_.COSMETIC_CELL_ARROW]:tx,[_.COSMETIC_CELL_MULTI_ARROW]:nx,[_.COSMETIC_EDGE]:rx,[_.COSMETIC_CORNER]:ox,[_.COSMETIC_LINE]:ix,[_.COSMETIC_LINE_WITH_CIRCLE_ENDS]:ax,[_.COSMETIC_LINE_WITH_POLYGON_ENDS]:sx,[_.COSMETIC_ARROW]:cx,[_.COSMETIC_CAGE]:lx,[_.COSMETIC_OUTSIDE_DIRECTION]:ux};function ga(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Ju(e)}function ha(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Ju(o)})}function S2(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return Ju(a)})})}function io(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function _v(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Sh(e)}function N2(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Sh(r)})}function T2(t,e){const n=t.shape;return n===void 0?void 0:{...bn(e,Mt),...n}}function fv(t,e){return{toolId:t,cells:e,lines:[]}}function D2(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Os(n),{...t,cells:n};const r=n.some(a=>qe(a,e)),o=n.some(a=>Ps(a,e));return n.length===1&&!r&&o?(n.push(e),Os(n),{...t,cells:n}):t}function R2(t,e){const n=t.cells.some(u=>qe(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return hu(t,e);const o=t.lines[r-1],a=o.length;if(a===0&&!n)return t;if(a===0&&n)return hu(t,e);const s=av(o,e,!1);return(o.length===0?!0:Ps(o[a-1],e))?s>=0?(o.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),o]}):n?t:(o.push(e),{...t,lines:[...t.lines.slice(0,r-1),o]}):t}function hu(t,e){return t.cells.some(r=>qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function k2(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function G2(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function M2(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function $2(t,e){const n=ha(e,"cells"),r=S2(e),o=fv(t,n);return o.lines=r,o}function F2(t,e=""){return{toolId:t,value:e}}function U2(t,e){const n=io(e);return F2(t,n)}function va(t,e){return{...t,value:e}}class pa extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const o=this.get(e);o&&(o[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o[n]&&(o[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const a of Object.values(r))o.push(q2(a));o.length&&(e[n]=o)}return e}static fromJson(e){const n=new pa;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Ah(r);if(a===void 0||!Object.keys(Mt).includes(a))continue;const s=o;for(const c of s){let u=null;if(xh(a,Hs)?u=cA(a,c):zu(a)?u=uA(a,c):ju(a)?u=dA(a,c):Vu(a)?u=fA(a,c):Oh(a)?u=Qy(a,c):qu(a)?u=sA(a,c):Ku(a)?u=$2(a,c):Xu(a)?u=zL(a,c):la(a)?u=RA(a,c):tO(a)?u=U2(a,c):Lh(a)&&(u=Wy(a,c)),u!==null){n.addToDict(a);const g=$t.uniqueId(),h=T2(c,a);u.shape=h,n.addConstraint(a,g,u)}}}return n}}function ud(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(qe(a.cell,n))return[s,a]}return null}function H2(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(n.every(c=>a.cells.some(u=>qe(c,u))))return o}return null}function P2(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=a.cells[a.cells.length-1];if(qe(n,s))return o}return null}function Fg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n)))return[o[0],a]}return null}function B2(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].cells.some(c=>qe(c,n)))return o;return null}function Ug(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n)))return[o[0],a]}return null}function W2(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((g,h)=>qe(g,n)&&h>0));if(c>=0)return{id:o,arrow:s,matchLineIdx:c}}return null}function Y2(t,e,n,r){const o=t.get(e);if(!o)return null;for(const a of Object.entries(o)){const s=a[1],c=a[0];if(qe(n,s.cell)&&r===s.direction)return c}return null}function z2(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(qe(n,a.cell))return s}return null}function j2(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n))||a.cells2.some(c=>qe(c,n)))return[o[0],a]}return null}function V2(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n)){const a=o[1];r.add(a.value)}return r}function q2(t){const e={};if("cells"in t){const n=t.cells.map(r=>gs(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>gs(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>gs(o)));e.lines=n}if("cell"in t){const n=gs(t.cell);e.cell=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=bn(t.toolId,Mt),r=hO(t.shape,n);r&&(e.shape=r)}return e}const Hg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function K2(t){return t in Hg?Hg[t]:null}function gv(t,e,n){if(n===null)return null;const r=K2(n);if(r===null)return null;const[o,a]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/a)}function qc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class X2{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=qc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=qc(this.cornerMarks,e))}enterHighlight(e){this.highlights=qc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===_.GIVEN?this.enterGiven(e,r):n===_.DIGIT?this.enterValue(e,r):n===_.CORNER_PM?this.enterCornerPM(e):n===_.CENTER_PM?this.enterCenterPM(e):n===_.HIGHLIGHTS?this.enterHighlight(e):n===_.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==gv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ma{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const a=[];for(let s=0;s<n;s++){const c=new X2(o,s);if(r){const u=gv(o,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[a,s]=[e.r+o[0],e.c+o[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return ev(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),a=o.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:a,c:s}=Ws(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const g=this.grid[c][u];o.push(g),[c,u]=[c+a,u+s]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new ma(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=o.getCell(a,s);u&&Object.assign(u,c)}return o}}function Z2(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols,o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const a=r.toJSON();Object.keys(a).length&&(o.bool_constraints=a);const s=n.toJSON();return Object.keys(s).length&&(o.local_constraints=s),o}function Q2(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,o=t.valid_digits,a=t.grid,s=ma.fromJSON(e,n,a),c=t.solution,u=t.local_constraints,g=pa.fromJson(u),h=t.bool_constraints,f=ni.fromJson(h);return{puzzleMeta:r,solution:c,grid:s,valid_digits:o,localConstraints:g,globalConstraints:f}}var Ii=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Ii||{});const oi=Ft(),Js=Ft(Ii.SETTING),vu=Ft(!1),Kt=Ft(_.DIGIT),hv=Ft(_.DIGIT),dd=Ft(void 0),ln=Ft(new ma(9,9)),sn=Ft(st(ln).getAllCells()),Rr=Ft({}),kr=Ft(new ni),rt=Ft(new pa),hr=Ft(null),vv=Ft(void 0),el=Ft(void 0);function J2(t){Rr.update(()=>t)}function bi(t){hr.update(()=>t)}function _d(t){vv.update(()=>t)}function Ar(t){st(Kt)!==t&&(Kt.update(()=>t),bi(null))}function eT(){const t=st(hv);t&&Ar(t)}function pu(t){hv.update(()=>t)}function tT(t){st(Kt)===t&&Ar(_.DIGIT)}function nT(t){rt.update(e=>(e.removeFromDict(t),e)),_d(void 0)}function Pt(t,e,n){rt.update(r=>(r.updateConstraint(t,e,n),r)),bi({id:e,constraint:n})}function Kc(t){const e=st(hr);if(t=t?{...t}:void 0,_d(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Pt(r,e.id,n)}function rT(t,e){const r=st(rt).get(e);if(!r)return;const o=r[t];o&&bi({id:t,constraint:o})}function oT(t,e){const n=new ma(t,e);ln.update(()=>n),dd.update(()=>{}),rt.update(()=>new pa),kr.update(()=>new ni),Rr.update(()=>({})),fd(void 0),sn.update(()=>n.getAllCells())}function iT(t){ln.update(()=>t.grid),Rr.update(()=>t.puzzleMeta),fd(t.solution),dd.update(()=>t.valid_digits),rt.update(()=>t.localConstraints),kr.update(()=>t.globalConstraints),sn.update(()=>t.grid.getAllCells())}function pv(){const t=st(ln);t.resetValues(),ln.update(()=>t),sn.update(()=>t.getAllCells()),Sr(sd())}function Ns(){hL(),Sr(sd()),Ar(_.DIGIT);const t=ly();Qo(t),_d(void 0),bi(null)}const mv=cn([Wt,Kt,Js],([t,e,n])=>{const r=t.hideFog,o=e;return![_.FOG,_.REGIONS].includes(o)&&!r&&n===Ii.SETTING}),Ca=cn([ln,Rr,kr,rt,el,dd],([t,e,n,r,o,a])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function fd(t){el.update(()=>t)}var aT=re('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function sT(t,e){te(e,!1);const n=je(),r=()=>ve(ci,"$commandHistoryStore",n),o=()=>ve(vu,"$selectOnStore",n),a=T(),s=T();function c(){qh()}function u(){Kh()}function g(){console.log("check")}function h(){_a(vu,!o())}M(()=>r(),()=>{S(a,r()._undoStack.length===0)}),M(()=>r(),()=>{S(s,r()._redoStack.length===0)}),pe(),fe();var f=aT(),v=q(f),m=q(v);Zw(m),H(v);var C=U(v,2),I=q(C);Vw(I),H(C);var O=U(C,2);O.disabled=!0;var b=q(O);zw(b),H(O);var x=U(O,2),D=q(x);Kw(D),H(x),H(f),Z(()=>{v.disabled=p(a),C.disabled=p(s),A(x,"aria-checked",o()),Ot(x,"active",o())}),De("click",v,c),De("click",C,u),De("click",O,g),De("click",x,h),N(t,f),ne()}const Cv=cn([oi,ln,Kt],([t,e,n])=>{const r=Zr(n,Mt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var lT=re('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),cT=re('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),uT=re('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),dT=re('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function _T(t,e){te(e,!1);const n=je(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(Ss,"$penColorStore",n),a=()=>ve(Cv,"$InputHandlerStore",n),s=T(),c=T(),u=[];let g=F(e,"selectedTool",8);const h=[1,2,3,4,5,6,7,8,9,0],f=["A","B","C","D","E","F","G","H","I","O"];let v=T(!1);function m(W){return W?f:h}function C(W){return[_.DIGIT,_.CENTER_PM,_.CORNER_PM,_.GIVEN].includes(W)}function I(W){const K=W.currentTarget;if(!K)return;const oe=K.getAttribute("aria-checked");S(v,oe!=="true")}M(()=>r(),()=>{S(s,r().penToolActive)}),M(()=>r(),()=>{S(c,r().letterToolActive)}),pe(),fe();var O=dT(),b=q(O);{var x=W=>{var K=ye(),oe=ce(K);We(oe,1,()=>h,gt,(_e,ee)=>{var le=lT(),Ie=q(le);Vt(Ie);var me;Io(2),H(le),Z(()=>{A(le,"data-value",p(ee)),Ot(le,"active",o()===p(ee)),me!==(me=p(ee))&&(Ie.value=(Ie.__value=p(ee))==null?"":p(ee))}),Us(u,[],Ie,()=>(p(ee),o()),Ce=>_a(Ss,Ce)),N(_e,le)}),N(W,K)},D=W=>{var K=ye(),oe=ce(K);We(oe,1,()=>m(p(v)),gt,(_e,ee)=>{var le=cT(),Ie=q(le),me=q(Ie,!0);H(Ie),Io(2),H(le),Z(()=>{yw(le,p(ee)),nt(me,p(ee))}),De("click",le,function(...Ce){var Ne;(Ne=a()&&a().padClick)==null||Ne.apply(this,Ce)}),N(_e,le)}),N(W,K)};ge(b,W=>{g()===_.PEN_TOOL&&p(s)?W(x):W(D,!1)})}var $=U(b,2);{var k=W=>{var K=uT();Z(()=>{A(K,"aria-checked",p(v)),Ot(K,"letter-checked",p(v)),Ot(K,"num-checked",!p(v))}),De("click",K,I),N(W,K)};ge($,W=>{p(c)&&C(g())&&W(k)})}var Y=U($,2);H(O),Z(()=>{Ot(O,"digit",g()===_.DIGIT),Ot(O,"center",g()===_.CENTER_PM),Ot(O,"corner",g()===_.CORNER_PM),Ot(O,"color",g()===_.HIGHLIGHTS),Ot(O,"pen",g()===_.PEN_TOOL),Ot(Y,"letter-tool",p(c))}),De("click",Y,function(...W){var K;(K=a()&&a().padClick)==null||K.apply(this,W)}),N(t,O),ne()}var fT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function gT(t){var e=fT();N(t,e)}var hT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function vT(t){var e=hT();N(t,e)}var pT=re('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Vi(t,e){te(e,!1);const n=[];let r=F(e,"selectedTool",12),o=F(e,"value",8),a=F(e,"title",8,void 0);function s(){pu(o())}fe();var c=pT(),u=q(c);Vt(u);var g,h=U(u,2);dt(h,e,"default",{}),H(c),Z(()=>{A(c,"title",a()),Ot(c,"active",o()===r()),g!==(g=o())&&(u.value=(u.__value=o())==null?"":o())}),Us(n,[],u,()=>(o(),r()),r),De("change",u,s),N(t,c),ne()}var mT=re('<span aria-hidden="true">1</span>'),CT=re('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),ET=re('<span aria-hidden="true" style="font-size: 50%">123</span>'),IT=re('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),bT=re('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),wT=re('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function OT(t,e){te(e,!1);const n=je(),r=()=>ve(Wt,"$settingsStore",n);let o=F(e,"selectedTool",12);fe();var a=wT(),s=q(a);Vi(s,{get value(){return _.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var C=mT();N(v,C)},$$slots:{default:!0},$$legacy:!0});var c=U(s,2);Vi(c,{get value(){return _.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var C=CT();N(v,C)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);Vi(u,{get value(){return _.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var C=ET();N(v,C)},$$slots:{default:!0},$$legacy:!0});var g=U(u,2);Vi(g,{get value(){return _.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var C=IT(),I=q(C);gT(I),H(C),N(v,C)},$$slots:{default:!0},$$legacy:!0});var h=U(g,2);{var f=v=>{Vi(v,{get value(){return _.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,C)=>{var I=bT(),O=q(I);vT(O),H(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(h,v=>{r().penToolActive&&v(f)})}H(a),N(t,a),ne()}var LT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function yT(t){var e=LT();N(t,e)}var AT=re('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ea(t,e){let n=F(e,"title",8,void 0),r=F(e,"clickCb",8,void 0);var o=AT(),a=q(o),s=q(a);dt(s,e,"default",{}),H(a),H(o),Z(()=>A(o,"title",n())),De("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,o)}var xT=re('<div class="buttons-container svelte-kc00rw"><!></div>');function tl(t,e){var n=xT(),r=q(n);dt(r,e,"default",{}),H(n),N(t,n)}var ST=re('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function NT(t,e){let n=F(e,"title",8),r=F(e,"closeCb",8);var o=ST(),a=q(o),s=q(a,!0);H(a);var c=U(a,2);H(o),Z(()=>nt(s,n())),De("click",c,function(...u){var g;(g=r())==null||g.apply(this,u)}),N(t,o)}var TT=re('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Gr(t,e){te(e,!1);let n=F(e,"showModal",12),r=F(e,"title",8),o=T();function a(){n(!1),p(o).close()}M(()=>(p(o),Q(n())),()=>{p(o)&&n()&&p(o).showModal()}),M(()=>(p(o),Q(n())),()=>{p(o)&&!n()&&p(o).close()}),pe();var s=TT(),c=q(s),u=q(c);NT(u,{get title(){return r()},closeCb:a});var g=U(u,2),h=q(g),f=q(h);dt(f,e,"default",{}),H(h),H(g),H(c),H(s),bo(s,v=>S(o,v),()=>p(o)),De("click",c,Xn(function(v){Tw.call(this,e,v)})),De("close",s,()=>{n(!1)}),De("click",s,Nw(Xn(()=>p(o).close()))),N(t,s),ne()}var DT=re('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),RT=re('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function kT(t,e){te(e,!1);let n=F(e,"showModal",12,!1);function r(){n(!1)}function o(){pv(),Ns(),n(!1)}fe(),Gr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=RT(),u=U(q(c),2);tl(u,{children:(g,h)=>{var f=DT(),v=ce(f),m=U(v,2);De("click",v,o),De("click",m,r),N(g,f)},$$slots:{default:!0}}),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0}),ne()}var GT=re("<!> <!>",1);function MT(t){let e=T(!1);function n(){S(e,!0)}var r=GT(),o=ce(r);Ea(o,{title:"Restart",clickCb:n,children:(s,c)=>{yT(s)},$$slots:{default:!0}});var a=U(o,2);kT(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var $T=re('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function ms(t,e){let n=F(e,"title",8);var r=$T(),o=q(r),a=q(o,!0);H(o);var s=U(o,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var FT=re('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function on(t,e){let n=F(e,"description",8);var r=FT(),o=q(r),a=q(o,!0);H(o);var s=U(o,2),c=q(s);dt(c,e,"default",{}),H(s),H(r),Z(()=>nt(a,n())),N(t,r)}var UT=re('<div class="shortcut svelte-1cgt5u5"> </div>');function Jt(t,e){let n=F(e,"shortcut",8);var r=UT(),o=q(r,!0);H(r),Z(()=>nt(o,n())),N(t,r)}var HT=re("<!> <!> <!> <!>",1),PT=re("<!> or <!>",1),BT=re("<!> <!> <!> <!> <!> <!> <!> <!>",1),WT=re("<!> <!>",1),YT=re('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!></div>');function zT(t,e){let n=F(e,"showModal",12,!1);Gr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var a=YT(),s=q(a);ms(s,{title:"General",children:(h,f)=>{on(h,{description:"Toggle Darkmode",children:(v,m)=>{Jt(v,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var c=U(s,2);ms(c,{title:"Selection",children:(h,f)=>{var v=HT(),m=ce(v);on(m,{description:"Select cells",children:(b,x)=>{Jt(b,{shortcut:"click/drag"})},$$slots:{default:!0}});var C=U(m,2);on(C,{description:"Add to current selection",children:(b,x)=>{Jt(b,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=U(C,2);on(I,{description:"Remove from current selection",children:(b,x)=>{Jt(b,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var O=U(I,2);on(O,{description:"Add or remove from current selection",children:(b,x)=>{Jt(b,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(h,v)},$$slots:{default:!0}});var u=U(c,2);ms(u,{title:"Change Tool",children:(h,f)=>{var v=BT(),m=ce(v);on(m,{description:"Cycle Tool",children:(k,Y)=>{Jt(k,{shortcut:"Space"})},$$slots:{default:!0}});var C=U(m,2);on(C,{description:"Change to Digit Tool",children:(k,Y)=>{Jt(k,{shortcut:"Z"})},$$slots:{default:!0}});var I=U(C,2);on(I,{description:"Change to Corner Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"X"})},$$slots:{default:!0}});var O=U(I,2);on(O,{description:"Change to Center Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"C"})},$$slots:{default:!0}});var b=U(O,2);on(b,{description:"Change to Highlights Tool",children:(k,Y)=>{Jt(k,{shortcut:"V"})},$$slots:{default:!0}});var x=U(b,2);on(x,{description:"Quickshift To Corner Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"Shift"})},$$slots:{default:!0}});var D=U(x,2);on(D,{description:"Quickshift To Center Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"Ctrl"})},$$slots:{default:!0}});var $=U(D,2);on($,{description:"Quickshift To Highlights Tool",children:(k,Y)=>{var W=PT(),K=ce(W);Jt(K,{shortcut:"Shift + Ctrl"});var oe=U(K,2);Jt(oe,{shortcut:"Alt"}),N(k,W)},$$slots:{default:!0}}),N(h,v)},$$slots:{default:!0}});var g=U(u,2);ms(g,{title:"Undo/Redo",children:(h,f)=>{var v=WT(),m=ce(v);on(m,{description:"Undo",children:(I,O)=>{Jt(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var C=U(m,2);on(C,{description:"Redo",children:(I,O)=>{Jt(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(h,v)},$$slots:{default:!0}}),H(a),N(r,a)},$$slots:{default:!0},$$legacy:!0})}var jT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function VT(t){var e=jT();N(t,e)}var qT=re("<!> <!>",1);function KT(t){let e=T(!1);function n(){S(e,!0)}var r=qT(),o=ce(r);Ea(o,{title:"Info",clickCb:n,children:(s,c)=>{VT(s)},$$slots:{default:!0}});var a=U(o,2);zT(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var XT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function ZT(t){var e=XT();N(t,e)}var QT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function JT(t){var e=QT();N(t,e)}function eD(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function a(){n()?o():r(),S(e,!p(e))}Ea(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=ye(),g=ce(u);{var h=v=>{JT(v)},f=v=>{ZT(v)};ge(g,v=>{p(e)?v(h):v(f,!1)})}N(s,u)},$$slots:{default:!0}})}function Ev(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"renderers",8),o=F(e,"options",8);fe();var a=ye(),s=ce(a);{var c=u=>{var g=ye(),h=ce(g);lh(h,()=>r()[n().type],(f,v)=>{v(f,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,C)=>{var I=ye(),O=ce(I);{var b=D=>{Ts(D,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},x=D=>{var $=Bb();Z(()=>nt($,n().raw)),N(D,$)};ge(O,D=>{"tokens"in n()&&n().tokens?D(b):D(x,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,g)};ge(s,u=>{r()[n().type]&&u(c)})}N(t,a),ne()}function Ts(t,e){let n=F(e,"tokens",8),r=F(e,"renderers",8),o=F(e,"options",8);var a=ye(),s=ce(a);{var c=u=>{var g=ye(),h=ce(g);We(h,1,n,gt,(f,v)=>{Ev(f,{get token(){return p(v)},get renderers(){return r()},get options(){return o()}})}),N(u,g)};ge(s,u=>{n()&&u(c)})}N(t,a)}function Iv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function bv(t){return t.startsWith("/")||t.startsWith("#")}function tD(t,e){return e.slug(t).replace(/--+/g,"-")}function nD(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const o=void 0;let a=T();M(()=>(Q(n()),Q(r())),()=>{S(a,tD(n().text,r().slugger))}),pe(),fe();var s=ye(),c=ce(s);return _h(c,()=>`h${n().depth}`,!1,(u,g)=>{let h;Z(()=>h=hh(u,h,{id:p(a)},void 0,u.namespaceURI===Au,u.nodeName.includes("-")));var f=ye(),v=ce(f);dt(v,e,"default",{}),N(g,f)}),N(t,s),Qe(e,"renderers",o),ne({renderers:o})}var rD=re("<blockquote><!></blockquote>");function oD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=rD(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}function iD(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8),o=F(e,"renderers",8),a=T();M(()=>Q(n()),()=>{S(a,n().ordered?"ol":"ul")}),pe(),fe();var s=ye(),c=ce(s);_h(c,()=>p(a),!1,(u,g)=>{let h;Z(()=>h=hh(u,h,{start:n().start||1},void 0,u.namespaceURI===Au,u.nodeName.includes("-")));var f=ye(),v=ce(f);We(v,1,()=>n().items,gt,(m,C)=>{var I=Xe(()=>({...p(C)}));Ev(m,{get token(){return p(I)},get options(){return r()},get renderers(){return o()}})}),N(g,f)}),N(t,s),ne()}var aD=re("<li><!></li>");function sD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=aD(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var lD=re("<br>");function cD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=lD();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var uD=re("<pre><code> </code></pre>");function dD(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,o=void 0;fe();var a=uD(),s=q(a),c=q(s,!0);return H(s),H(a),Z(()=>{xw(s,`lang-${n().lang}`),nt(c,n().text)}),N(t,a),Qe(e,"options",r),Qe(e,"renderers",o),ne({options:r,renderers:o})}var _D=re("<code> </code>");function fD(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,o=void 0;fe();var a=_D(),s=q(a,!0);return Z(()=>nt(s,n().raw.slice(1,n().raw.length-1))),H(a),N(t,a),Qe(e,"options",r),Qe(e,"renderers",o),ne({options:r,renderers:o})}var gD=re('<th scope="col"><!></th>'),hD=re("<td><!></td>"),vD=re("<tr></tr>"),pD=re("<table><thead><tr></tr></thead><tbody></tbody></table>");function mD(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8),o=F(e,"renderers",8);fe();var a=pD(),s=q(a),c=q(s);We(c,5,()=>n().header,gt,(g,h)=>{var f=gD(),v=q(f);Ts(v,{get tokens(){return p(h).tokens},get options(){return r()},get renderers(){return o()}}),H(f),N(g,f)}),H(c),H(s);var u=U(s);We(u,5,()=>n().rows,gt,(g,h)=>{var f=vD();We(f,5,()=>p(h),gt,(v,m)=>{var C=hD(),I=q(C);Ts(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return o()}}),H(C),N(v,C)}),H(f),N(g,f)}),H(u),H(a),N(t,a),ne()}function CD(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,o=void 0;fe();var a=ye(),s=ce(a);return ww(s,()=>n().text),N(t,a),Qe(e,"options",r),Qe(e,"renderers",o),ne({options:r,renderers:o})}var ED=re("<p><!></p>");function ID(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=ED(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var bD=re("<a><!></a>");function wD(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const o=void 0;fe();var a=bD();Z(()=>A(a,"href",bv(n().href)?Iv(r().baseUrl,n().href):n().href));var s=q(a);return dt(s,e,"default",{}),H(a),Z(()=>A(a,"title",n().title)),N(t,a),Qe(e,"renderers",o),ne({renderers:o})}function OD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=ye(),s=ce(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var LD=re("<dfn><!></dfn>");function yD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=LD(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var AD=re("<del><!></del>");function xD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=AD(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var SD=re("<em><!></em>");function ND(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=SD(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var TD=re("<hr>");function DD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=TD();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var RD=re("<strong><!></strong>");function kD(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=RD(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}var GD=re('<img class="markdown-image svelte-z38cge">');function MD(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const o=void 0;fe();var a=GD();return Z(()=>A(a,"src",bv(n().href)?Iv(r().baseUrl,n().href):n().href)),Z(()=>{A(a,"title",n().title),A(a,"alt",n().text)}),N(t,a),Qe(e,"renderers",o),ne({renderers:o})}function Pg(t,e){te(e,!1);const n=void 0,r=void 0,o=void 0;var a=ye(),s=ce(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),ne({token:n,options:r,renderers:o})}const $D=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,FD=Object.hasOwnProperty;class UD{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=HD(e,n===!0);const a=o;for(;FD.call(r.occurrences,o);)r.occurrences[a]++,o=a+"-"+r.occurrences[a];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function HD(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace($D,"").replace(/ /g,"-"))}function gd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ro=gd();function wv(t){Ro=t}const Ov=/[&<>"']/,PD=new RegExp(Ov.source,"g"),Lv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,BD=new RegExp(Lv.source,"g"),WD={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bg=t=>WD[t];function Rn(t,e){if(e){if(Ov.test(t))return t.replace(PD,Bg)}else if(Lv.test(t))return t.replace(BD,Bg);return t}const YD=/(^|[^\[])\^/g;function Et(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(YD,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}function Wg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ra={exec:()=>null};function Yg(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,g=s;for(;--g>=0&&c[g]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function qi(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function zD(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function zg(t,e,n,r){const o=e.href,a=e.title?Rn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:a,text:Rn(s)}}function jD(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}class Ds{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Ro}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:qi(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=jD(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=qi(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:qi(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=qi(n[0],`
`).split(`
`),o="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let g;for(g=0;g<r.length;g++)if(/^ {0,3}>/.test(r[g]))u.push(r[g]),c=!0;else if(!c)u.push(r[g]);else break;r=r.slice(g);const h=u.join(`
`),f=h.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${h}`:h,a=a?`${a}
${f}`:f;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,s,!0),this.lexer.state.top=v,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),O=this.blockquote(I);s[s.length-1]=O,o=o.substring(0,o.length-C.raw.length)+O.raw,a=a.substring(0,a.length-C.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),O=this.list(I);s[s.length-1]=O,o=o.substring(0,o.length-m.raw.length)+O.raw,a=a.substring(0,a.length-C.raw.length)+O.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,a={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,g="",h="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;g=n[0],e=e.substring(g.length);let f=n[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),v=e.split(`
`,1)[0],m=!f.trim(),C=0;if(this.options.pedantic?(C=2,h=f.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,h=f.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(v)&&(g+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),D=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),$=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let W;if(v=Y,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),W=v):W=v.replace(/\t/g,"    "),D.test(v)||$.test(v)||k.test(v)||b.test(v)||x.test(v))break;if(W.search(/[^ ]/)>=C||!v.trim())h+=`
`+W.slice(C);else{if(m||f.replace(/\t/g,"    ").search(/[^ ]/)>=4||D.test(f)||$.test(f)||x.test(f))break;h+=`
`+v}!m&&!v.trim()&&(m=!0),g+=Y+`
`,e=e.substring(Y.length+1),f=W.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(g)&&(c=!0));let I=null,O;this.options.gfm&&(I=/^\[[ xX]\] /.exec(h),I&&(O=I[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:g,task:!!I,checked:O,loose:!1,text:h,tokens:[]}),a.raw+=g}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const g=a.items[u].tokens.filter(f=>f.type==="space"),h=g.length>0&&g.some(f=>/\n.*\n/.test(f.raw));a.loose=h}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Yg(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(Yg(c,s.header.length).map((u,g)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[g]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Rn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=qi(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=zD(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);s&&(o=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),zg(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),a=n[o.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return zg(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...o[0]].length-1;let c,u,g=s,h=0;const f=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+s);(o=f.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){g+=u;continue}else if((o[5]||o[6])&&s%3&&!((s+u)%3)){h+=u;continue}if(g-=u,g>0)continue;u=Math.min(u,u+g+h);const v=[...o[0]][0].length,m=e.slice(0,s+o.index+v+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return o&&a&&(r=r.substring(1,r.length-1)),r=Rn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=Rn(n[1]),o="mailto:"+r):(r=Rn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,a;if(n[2]==="@")o=Rn(n[0]),a="mailto:"+o;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);o=Rn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Rn(n[0]),{type:"text",raw:n[0],text:r}}}}const VD=/^(?:[ \t]*(?:\n|$))+/,qD=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,KD=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ia=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,XD=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yv=/(?:[*+-]|\d{1,9}[.)])/,Av=Et(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,yv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),hd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ZD=/^[^\n]+/,vd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,QD=Et(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",vd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),JD=Et(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yv).getRegex(),nl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,eR=Et("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",pd).replace("tag",nl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xv=Et(hd).replace("hr",Ia).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nl).getRegex(),tR=Et(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",xv).getRegex(),md={blockquote:tR,code:qD,def:QD,fences:KD,heading:XD,hr:Ia,html:eR,lheading:Av,list:JD,newline:VD,paragraph:xv,table:ra,text:ZD},jg=Et("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ia).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nl).getRegex(),nR={...md,table:jg,paragraph:Et(hd).replace("hr",Ia).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nl).getRegex()},rR={...md,html:Et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",pd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ra,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Et(hd).replace("hr",Ia).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Av).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Sv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,oR=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Nv=/^( {2,}|\\)\n(?!\s*$)/,iR=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ba="\\p{P}\\p{S}",aR=Et(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ba).getRegex(),sR=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,lR=Et(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ba).getRegex(),cR=Et("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ba).getRegex(),uR=Et("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ba).getRegex(),dR=Et(/\\([punct])/,"gu").replace(/punct/g,ba).getRegex(),_R=Et(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),fR=Et(pd).replace("(?:-->|$)","-->").getRegex(),gR=Et("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",fR).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Rs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,hR=Et(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Rs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Tv=Et(/^!?\[(label)\]\[(ref)\]/).replace("label",Rs).replace("ref",vd).getRegex(),Dv=Et(/^!?\[(ref)\](?:\[\])?/).replace("ref",vd).getRegex(),vR=Et("reflink|nolink(?!\\()","g").replace("reflink",Tv).replace("nolink",Dv).getRegex(),Cd={_backpedal:ra,anyPunctuation:dR,autolink:_R,blockSkip:sR,br:Nv,code:oR,del:ra,emStrongLDelim:lR,emStrongRDelimAst:cR,emStrongRDelimUnd:uR,escape:Sv,link:hR,nolink:Dv,punctuation:aR,reflink:Tv,reflinkSearch:vR,tag:gR,text:iR,url:ra},pR={...Cd,link:Et(/^!?\[(label)\]\((.*?)\)/).replace("label",Rs).getRegex(),reflink:Et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Rs).getRegex()},mu={...Cd,escape:Et(Sv).replace("])","~|])").getRegex(),url:Et(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},mR={...mu,br:Et(Nv).replace("{2,}","*").getRegex(),text:Et(mu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Cs={normal:md,gfm:nR,pedantic:rR},Ki={normal:Cd,gfm:mu,breaks:mR,pedantic:pR};class Gn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ro,this.options.tokenizer=this.options.tokenizer||new Ds,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Cs.normal,inline:Ki.normal};this.options.pedantic?(n.block=Cs.pedantic,n.inline=Ki.pedantic):this.options.gfm&&(n.block=Cs.gfm,this.options.breaks?n.inline=Ki.breaks:n.inline=Ki.gfm),this.tokenizer.rules=n}static get rules(){return{block:Cs,inline:Ki}}static lex(e,n){return new Gn(n).lex(e)}static lexInline(e,n){return new Gn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let g;this.options.extensions.startBlock.forEach(h=>{g=h.call({lexer:this},u),typeof g=="number"&&g>=0&&(c=Math.min(c,g))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o),r=s.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,a,s=e,c,u,g;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)h.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(g=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(r=h.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,g)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const f=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},f),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(a=e.substring(0,h+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(g=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}}class ks{constructor(e){he(this,"options");he(this,"parser");this.options=e||Ro}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const o=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),a=Wg(e);if(a===null)return o;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+o+"</a>",s}image({href:e,title:n,text:r}){const o=Wg(e);if(o===null)return r;e=o;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Ed{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Ro,this.options.renderer=this.options.renderer||new ks,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ed}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class oa{constructor(e){he(this,"options");he(this,"block");this.options=e||Ro}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Gn.lex:Gn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}he(oa,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class CR{constructor(...e){he(this,"defaults",gd());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Kn);he(this,"Renderer",ks);he(this,"TextRenderer",Ed);he(this,"Lexer",Gn);he(this,"Tokenizer",Ds);he(this,"Hooks",oa);this.use(...e)}walkTokens(e,n){var o,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const g of u)r=r.concat(this.walkTokens(g.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const g=c[u].flat(1/0);r=r.concat(this.walkTokens(g,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),o.extensions=n),r.renderer){const a=this.defaults.renderer||new ks(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],g=a[c];a[c]=(...h)=>{let f=u.apply(a,h);return f===!1&&(f=g.apply(a,h)),f||""}}o.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new Ds(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],g=a[c];a[c]=(...h)=>{let f=u.apply(a,h);return f===!1&&(f=g.apply(a,h)),f}}o.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new oa;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],g=a[c];oa.passThroughHooks.has(s)?a[c]=h=>{if(this.defaults.async)return Promise.resolve(u.call(a,h)).then(v=>g.call(a,v));const f=u.call(a,h);return g.call(a,f)}:a[c]=(...h)=>{let f=u.apply(a,h);return f===!1&&(f=g.apply(a,h)),f}}o.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Gn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const a={...o},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Gn.lex:Gn.lexInline,g=s.hooks?s.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(h=>u(h,s)).then(h=>s.hooks?s.hooks.processAllTokens(h):h).then(h=>s.walkTokens?Promise.all(this.walkTokens(h,s.walkTokens)).then(()=>h):h).then(h=>g(h,s)).then(h=>s.hooks?s.hooks.postprocess(h):h).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let h=u(r,s);s.hooks&&(h=s.hooks.processAllTokens(h)),s.walkTokens&&this.walkTokens(h,s.walkTokens);let f=g(h,s);return s.hooks&&(f=s.hooks.postprocess(f)),f}catch(h){return c(h)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Rn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const Lo=new CR;function Ct(t,e){return Lo.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Lo.setOptions(t),Ct.defaults=Lo.defaults,wv(Ct.defaults),Ct};Ct.getDefaults=gd;Ct.defaults=Ro;Ct.use=function(...t){return Lo.use(...t),Ct.defaults=Lo.defaults,wv(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Lo.walkTokens(t,e)};Ct.parseInline=Lo.parseInline;Ct.Parser=Kn;Ct.parser=Kn.parse;Ct.Renderer=ks;Ct.TextRenderer=Ed;Ct.Lexer=Gn;Ct.lexer=Gn.lex;Ct.Tokenizer=Ds;Ct.Hooks=oa;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Kn.parse;Gn.lex;function ER(t){return new Gn().lex(t)}const IR=()=>({heading:nD,blockquote:oD,list:iD,list_item:sD,br:cD,code:dD,codespan:fD,table:mD,html:CD,paragraph:ID,link:wD,text:OD,def:yD,del:xD,em:ND,hr:DD,strong:kD,image:MD,space:Pg,escape:Pg}),bR=()=>({baseUrl:"/",slugger:new UD});function wR(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},uh(()=>{console.warn=t})}function Rv(t,e){te(e,!1),wR();let n=F(e,"source",8),r=F(e,"options",24,()=>({})),o=F(e,"renderers",24,()=>({})),a=T(),s=T(),c=T();M(()=>(Q(n()),Q(o()),Q(r())),()=>{S(a,ER(n())),S(s,{...IR(),...o()}),S(c,{...bR(),...r()})}),pe(),fe(),Ts(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),ne()}var OR=re('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),LR=re('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),yR=re('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function AR(t,e){te(e,!1);const n=je(),r=()=>ve(Rr,"$puzzleMetaStore",n),o=T();let a=F(e,"showModal",12,!1);function s(u){return u?ys(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}M(()=>r(),()=>{S(o,r())}),pe(),fe(),Gr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,g)=>{var h=yR(),f=q(h),v=q(f,!0);H(f);var m=U(f,2),C=q(m);Z(()=>nt(C,`by ${s(p(o).authors)??""}`)),H(m);var I=U(m,2),O=q(I),b=Xe(()=>c(p(o).ruleset));Rv(O,{get source(){return p(b)}}),H(I);var x=U(I,2);{var D=Y=>{var W=OR(),K=U(ce(W),2);Z(()=>A(K,"href",p(o).ctcUrl)),N(Y,W)};ge(x,Y=>{var W,K;(K=(W=p(o))==null?void 0:W.ctcUrl)!=null&&K.length&&Y(D)})}var $=U(x,2);{var k=Y=>{var W=LR(),K=U(ce(W),2);Z(()=>A(K,"href",p(o).ctcYoutubeUrl)),N(Y,W)};ge($,Y=>{var W,K;(K=(W=p(o))==null?void 0:W.ctcYoutubeUrl)!=null&&K.length&&Y(k)})}H(h),Z(()=>{var Y;return nt(v,((Y=p(o))==null?void 0:Y.title)||"Puzzle")}),N(u,h)},$$slots:{default:!0},$$legacy:!0}),ne()}var xR=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function SR(t){var e=xR();N(t,e)}var NR=re("<!> <!>",1);function TR(t){let e=T(!1);function n(){S(e,!0)}var r=NR(),o=ce(r);Ea(o,{title:"Rules",clickCb:n,children:(s,c)=>{SR(s)},$$slots:{default:!0}});var a=U(o,2);AR(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var DR=re('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function rl(t,e){let n=F(e,"isOpen",8,!0);var r=DR(),o=q(r);dt(o,e,"default",{}),H(r),Z(()=>{A(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var RR=re('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),kR=re('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Xr(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0),o=F(e,"isCollapsible",8,!1);var a=ye(),s=ce(a);{var c=g=>{var h=RR(),f=q(h),v=q(f),m=q(v,!0);H(v),H(f);var C=U(f,2),I=q(C);dt(I,e,"default",{}),H(C),H(h),Z(()=>nt(m,n())),N(g,h)},u=g=>{var h=kR(),f=q(h),v=q(f),m=q(v,!0);H(v),H(f);var C=U(f,2),I=q(C);dt(I,e,"default",{});var O=U(I,2);H(C),H(h),Z(()=>{nt(m,n()),Ot(O,"open",r())}),De("click",h,()=>r(!r())),N(g,h)};ge(s,g=>{o()?g(u,!1):g(c)})}N(t,a)}var GR=re('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),MR=re('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Es(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0);var o=MR(),a=q(o);Xr(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=U(a,2);rl(s,{get isOpen(){return r()},children:(c,u)=>{var g=GR(),h=q(g);dt(h,e,"default",{}),H(g),N(c,g)},$$slots:{default:!0}}),H(o),N(t,o)}var $R=re('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function FR(t,e){let n=F(e,"value",8),r=F(e,"onClickCb",8),o=F(e,"disabled",8,!1);var a=$R(),s=q(a);Vt(s),Io(2),H(a),Z(()=>{Ot(a,"disabled",o()),gh(s,n()),s.disabled=o()}),De("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,a)}var UR=re('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Vr(t,e){te(e,!1);let n=F(e,"value",8),r=F(e,"name",8),o=F(e,"updateCb",8,void 0),a=F(e,"disabled",8,!1);function s(){a()||o()&&o()(!n())}fe();var c=UR(),u=q(c);FR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var g=U(u,2),h=q(g,!0);H(g),H(c),Z(()=>{Ot(c,"disabled",a()),nt(h,r())}),De("click",g,Xn(s)),N(t,c),ne()}var HR=re("<!> <!>",1),PR=re("<!> <!> <!>",1),BR=re("<!> <!>",1),WR=re('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function kv(t,e){te(e,!1);const n=je(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(Js,"$gameModeStore",n),a=T();let s=F(e,"showModal",12,!1);M(()=>r(),()=>{S(a,r())}),pe(),fe(),Gr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var g=WR(),h=q(g);Es(h,{title:"General",children:(I,O)=>{Vr(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Gw})},$$slots:{default:!0}});var f=U(h,2);Es(f,{title:"Tools",children:(I,O)=>{var b=HR(),x=ce(b);Vr(x,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:$w});var D=U(x,2);Vr(D,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:Fw}),N(I,b)},$$slots:{default:!0}});var v=U(f,2);Es(v,{title:"Gameplay",children:(I,O)=>{var b=PR(),x=ce(b);Vr(x,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:Hw});var D=U(x,2);Vr(D,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:Pw});var $=U(D,2);Vr($,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:Uw}),N(I,b)},$$slots:{default:!0}});var m=U(v,2);{var C=I=>{Es(I,{title:"Setting Mode Display",children:(O,b)=>{var x=BR(),D=ce(x);Vr(D,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:Bw});var $=U(D,2);Vr($,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:Ww}),N(O,x)},$$slots:{default:!0}})};ge(m,I=>{o()===Ii.SETTING&&I(C)})}H(g),N(c,g)},$$slots:{default:!0},$$legacy:!0}),ne()}var YR=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Gv(t){var e=YR();N(t,e)}var zR=re("<!> <!>",1);function jR(t){let e=T(!1);function n(){S(e,!0)}var r=zR(),o=ce(r);Ea(o,{title:"Settings",clickCb:n,children:(s,c)=>{Gv(s)},$$slots:{default:!0}});var a=U(o,2);kv(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var VR=re('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function qR(t){var e=VR(),n=q(e);jR(n);var r=U(n,2);TR(r);var o=U(r,2);eD(o);var a=U(o,2);KT(a);var s=U(a,2);MT(s),H(e),N(t,e)}var KR=re('<div class="entry-panel-wrapper svelte-1aepbnb"><div class="puzzle-info svelte-1aepbnb"><div class="puzzle-header svelte-1aepbnb"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1aepbnb"><!></div></div>  <div class="entry-panel svelte-1aepbnb"><!> <div class="entry-subpanel1 svelte-1aepbnb"><!> <!></div> <!></div></div>');function XR(t,e){te(e,!1);const n=je(),r=()=>ve(oi,"$svgRefStore",n),o=()=>ve(Rr,"$puzzleMetaStore",n),a=()=>ve(Kt,"$toolStore",n),s=T(),c=T();function u(){r().focus()}function g(ee){return ee?ys(ee," & ",", "):"Anonymous"}function h(ee){return ee&&ee.length?ee:"Normal sudoku rules apply."}M(()=>o(),()=>{S(s,o().title??"Sudoku")}),M(()=>o(),()=>{S(c,g(o().authors))}),pe(),fe();var f=KR(),v=q(f),m=q(v),C=q(m),I=q(C,!0);H(C);var O=U(C,2),b=q(O);H(O),H(m);var x=U(m,2),D=q(x),$=Xe(()=>h(o().ruleset));Rv(D,{get source(){return p($)}}),H(x),H(v);var k=U(v,2),Y=q(k);qR(Y);var W=U(Y,2),K=q(W);_T(K,{get selectedTool(){return a()}});var oe=U(K,2);OT(oe,{get selectedTool(){return ch(),a()},set selectedTool(ee){_a(Kt,ee)},$$legacy:!0}),H(W);var _e=U(W,2);sT(_e,{}),H(k),H(f),Z(()=>{nt(I,p(s)),nt(b,`by ${p(c)??""}`)}),De("click",k,Xn(()=>{u()})),N(t,f),ne()}const Id=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())eO(n)&&e.push({toolId:n,element:r});return e}),ZR=cn(Id,t=>{const e=t.find(r=>r.toolId===_.MINIMUM);return e?e.element:{}}),QR=cn(Id,t=>{const e=t.find(r=>r.toolId===_.MAXIMUM);return e?e.element:{}}),JR=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Vu(n)&&e.push({toolId:n,element:r});return e}),ek=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Lh(n)&&e.push({toolId:n,element:r});return e}),tk=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Oh(n)&&e.push({toolId:n,element:r});return e}),nk=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())qu(n)&&e.push({toolId:n,element:r});return e}),rk=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ku(n)&&e.push({toolId:n,element:r});return e}),ok=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Xu(n)&&e.push({toolId:n,element:r});return e}),ik=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())yh(n)&&e.push({toolId:n,element:r});return e}),ak=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())la(n)&&e.push({toolId:n,element:r});return e});function sk(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function lk(t){const e=new Map;function n(r,o){const a=e.get(o);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(o);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(o)}for(const r of t){const o=sk(r),a=o.length;for(let s=0;s<a;s++){const c=o[s%a],u=o[(s+1)%a],g=JSON.stringify(c),h=JSON.stringify(u);n(g,h)}}return e}function ck(t,e=0,n=!1){const r=[],o=lk(t);if(o.size<=0)return r;const a=new Set;for(;o.size>0;){const s=Array.from(o.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let g=JSON.parse(c);const h=Array.from(u)[0];let f=JSON.parse(h),v=h;const m=[];do{const C=o.get(v);if(C===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Re(g.c,g.r),O=new Re(f.c,f.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,D=null;for(const $ of C){const k=JSON.parse($),Y=new Re(k.c,k.r),W=O.subtract(I),K=Y.subtract(O),oe=W.perpDotProduct(K);b<oe!=n&&(b=oe,D=k,x=$)}if(n&&C.size>1&&a.add(v),D===null||x===null)throw new Error("Corner with no adjacencies found");if(C.delete(x),C.size<=0&&o.delete(v),b!==0){const $=e*(f.c-g.c),k=e*(D.c-f.c),Y=e*(g.r-f.r),W=e*(f.r-D.r),K=W+b*k,oe=$+b*Y,_e=new Re(f.c+K,f.r+oe),ee=4;a.has(v)?(m.push(new Re(_e.x-ee*$,_e.y-ee*k)),m.push(new Re(_e.x-ee*Y,_e.y-ee*W))):m.push(_e)}g=f,f=D,v=x}while(v!==h);r.push(m)}return r}function ii(t,e=0,n=!1){return ck(t,e,n).map(a=>wi(a,!0)).join("")}const uk=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5)];function dk(t,e,n=uk){if(e===1)return n;const r=[],o=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,g=c/(360/o),h=u/(360/o),f=Math.floor(g)%o,v=Math.ceil(g)%o,m=n[f].lerp(n[v],g%1),C=Math.floor(h)%o,I=Math.ceil(h)%o,O=n[C].lerp(n[I],h%1);r.push(m);for(let x=Math.ceil(g);x<=Math.floor(h);x++)r.push(n[x%o]);r.push(O);const b=new Re(0,0);return r.push(b),r}function Mv(t,e,n=new Re(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const g=s*Math.cos(u/e*2*Math.PI+o*2*Math.PI),h=s*Math.sin(u/e*2*Math.PI+o*2*Math.PI),f=n.add(new Re(g,h));c.push(f)}return c}function wi(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:a})=>`${o},${a}`).join("L")+n}function ol(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){if(r&&t.length>1){const g=t[t.length-1];for(let f=0;f<t.length-1;f++)if(g.equals(t[f])){t.push(t[f+1]);break}const h=t[0];for(let f=1;f<t.length;f++)if(h.equals(t[f])){t.unshift(t[f-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let g=t[1].subtract(t[0]);g=g.normalise(),g=g.scale(e),t[0]=t[0].add(g)}if(n){const g=t.length;let h=t[g-2].subtract(t[g-1]);h=h.normalise(),h=h.scale(n),t[g-1]=t[g-1].add(h)}}if(!o)return wi(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let g=2;g<c;g++){const h=t[g-2],f=t[g-1],v=t[g];let m=h.subtract(f).normalise();m=m.scale(o),m=m.add(f);let C=v.subtract(f).normalise();C=C.scale(o),C=C.add(f),s.push(`L${m.x},${m.y} Q ${f.x},${f.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function Cu(t,e={}){const n=Gs(t);return ol(n,e)}function Zn(t){return new Re(t.c+.5,t.r+.5)}function Gs(t){return t.map(n=>Zn(n))}const _k=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5),new Re(0,-.5),new Re(0,.5),new Re(-.5,0),new Re(.5,0)];function fk(t,e){const n=_k[t];return n.subtract(n.scale(e))}function $v(t,e){const n=[new Re(t.c-e,t.r-e),new Re(t.c+e,t.r+e)],r=[new Re(t.c-e,t.r+e),new Re(t.c+e,t.r-e)];return[n,r].map(a=>wi(a,!1)).join("")}const gk=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function il(t,e="none"){return gk.get(t)||e}function hk(t,e,n){let r=[];function a(c,u){return c.map(g=>g.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Re(-.12,-.32),new Re(0,-.4),new Re(.12,-.32)]:s=[new Re(-.12,-.4),new Re(0,-.32),new Re(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const g=new Re(n+.5,e+.5);return u.add(g)})),r}var vk=ie('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function al(t,e){let n=F(e,"l",8,.2),r=F(e,"id",8),o=F(e,"strokeWidth",8),a=F(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=vk();A(u,"viewBox","0 0 1 1"),A(u,"refX",s),A(u,"refY",s),A(u,"markerWidth",1),A(u,"markerHeight",1);var g=q(u);A(g,"d",c),H(u),Z(()=>{A(u,"id",r()),A(g,"stroke-width",o()),A(g,"stroke",a())}),N(t,u)}var pk=ie('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function mk(t,e){var Y;te(e,!1);const n=T(),r=T(),o=T();let a=F(e,"outsideEdgeTool",8);const s=a().cell,c=a().direction,u=Th(s,c),g=Zn(s),h=bn(a().toolId,Mt)??IO,f=((Y=p(n))==null?void 0:Y.fontSize)??.5,v=.03;function m(W){return W.value&&W.value.length?W.value:"-"}function C(){const oe=Zn(u).subtract(g).length(),_e={shortenHead:.3*oe,shortenTail:.55*oe};return Cu([s,u],_e)}const O=`outside-tool-arrow-marker-${crypto.randomUUID()}`;M(()=>Q(a()),()=>{S(n,a().shape??h)}),M(()=>p(n),()=>{var W;S(r,((W=p(n))==null?void 0:W.fontColor)??"var(--text-primary-color)")}),M(()=>p(n),()=>{var W;S(o,((W=p(n))==null?void 0:W.stroke)??"var(--text-primary-color)")}),pe(),fe();var b=pk(),x=q(b);al(x,{id:O,l:.07,strokeWidth:v,get stroke(){return p(o)}});var D=U(x);Z(()=>A(D,"d",C())),A(D,"stroke-width",v),A(D,"marker-end",`url(#${O??""})`);var $=U(D);A($,"font-size",f);var k=q($,!0);Z(()=>nt(k,m(a()))),H($),H(b),Z(()=>{A(D,"stroke",p(o)),A($,"x",g.x),A($,"y",g.y),A($,"fill",p(r))}),N(t,b),ne()}var Ck=ie("<g></g>"),Ek=ie('<g class="outside-direction-tools-layer" mask="url(#fog-mask-fog)"></g>');function Ik(t,e){te(e,!1);const n=je(),r=()=>ve(ak,"$outsideDirectionToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=Ek();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=Ck();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{mk(f,{get outsideEdgeTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var bk=ie("<path></path>");function Ms(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T();let g=F(e,"cells",8),h=F(e,"shape",8,ed);M(()=>Q(h()),()=>{S(n,h().inset??.06)}),M(()=>Q(h()),()=>{S(r,h().stroke??"black")}),M(()=>Q(h()),()=>{S(o,h().strokeWidth??.03)}),M(()=>Q(h()),()=>{S(a,h().strokeDasharray??.08)}),M(()=>Q(h()),()=>{S(s,h().fill??"none")}),M(()=>Q(h()),()=>{S(c,h().connectDiag??!0)}),M(()=>(Q(g()),p(n),p(c)),()=>{S(u,ii(g(),p(n),p(c)))}),pe(),fe();var f=bk();Z(()=>{A(f,"d",p(u)),A(f,"stroke",p(r)),A(f,"stroke-width",p(o)),A(f,"fill",p(s)),A(f,"stroke-dasharray",p(a))}),N(t,f),ne()}var wk=ie('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ua(t,e){te(e,!1);const n=T();let r=F(e,"value",8,""),o=F(e,"fontSize",8,.2),a=F(e,"x",8),s=F(e,"y",8),c=F(e,"position",8,"TL"),u=F(e,"fontColor",8,"var(--text-primary-color)"),g=F(e,"fontWeight",8,400),h=T(null),f=T(null);function v(x,D,$){const k=["TL","TR"].includes($),W=["TL","BL"].includes($)?x+.05:x,K=D;return new Re(W,K)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function C(x){return["TL","TR"].includes(x)?"text-before-edge":""}Cw(()=>{if(!p(h)||!p(f))return;const x=p(h).getBBox();p(f).setAttribute("x",String(x.x)),p(f).setAttribute("y",String(x.y+x.height*.1)),p(f).setAttribute("width",String(x.width)),p(f).setAttribute("height",String(x.height*.8))}),M(()=>(Q(a()),Q(s()),Q(c())),()=>{S(n,v(a(),s(),c()))}),pe(),fe();var I=ye(),O=ce(I);{var b=x=>{var D=wk(),$=ce(D);bo($,W=>S(f,W),()=>p(f));var k=U($);Z(()=>A(k,"text-anchor",m(c()))),Z(()=>A(k,"dominant-baseline",C(c())));var Y=q(k,!0);H(k),bo(k,W=>S(h,W),()=>p(h)),Z(()=>{var W,K;A(k,"x",(W=p(n))==null?void 0:W.x),A(k,"y",(K=p(n))==null?void 0:K.y),A(k,"font-size",o()),A(k,"fill",u()),A(k,"font-weight",g()),nt(Y,r())}),N(x,D)};ge(O,x=>{r().length&&x(b)})}N(t,I),ne()}var Ok=re("<!> <!> <!> <!>",1);function Lk(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T(),g=T();let h=F(e,"cloneTool",8);const f=bn(h().toolId,Mt)??EO,v=800,m=h().value;M(()=>Q(h()),()=>{S(n,h().shape??f)}),M(()=>p(n),()=>{S(r,p(n).inset??.15)}),M(()=>p(n),()=>{S(o,p(n).strokeWidth??.07)}),M(()=>p(n),()=>{S(a,p(n).fontColor??p(n).stroke??"black")}),M(()=>Q(h()),()=>{S(s,h().cells[h().cells.length-1])}),M(()=>Q(h()),()=>{S(c,h().cells2[h().cells2.length-1])}),M(()=>(p(s),p(r)),()=>{S(u,new Re(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),M(()=>(p(c),p(r)),()=>{S(g,new Re(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),pe(),fe();var C=Ok(),I=ce(C);Ms(I,{get cells(){return h().cells},get shape(){return p(n)}});var O=U(I,2);ua(O,{value:m,get x(){return p(g).x},get y(){return p(g).y},position:"BR",get fontColor(){return p(a)},fontWeight:v});var b=U(O,2);Ms(b,{get cells(){return h().cells2},get shape(){return p(n)}});var x=U(b,2);ua(x,{value:m,get x(){return p(g).x},get y(){return p(g).y},position:"BR",get fontColor(){return p(a)},fontWeight:v}),N(t,C),ne()}var yk=ie("<g></g>"),Ak=ie('<g class="clone-tools-layer" mask="url(#fog-mask-fog)"></g>');function xk(t,e){te(e,!1);const n=je(),r=()=>ve(ik,"$cloneToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=Ak();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=yk();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{Lk(f,{get cloneTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var Sk=ie('<path fill="none"></path>');function da(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T();let u=F(e,"linePoints",8),g=F(e,"shape",8,void 0);const h="round",f="round";M(()=>Q(g()),()=>{var m;S(n,((m=g())==null?void 0:m.stroke)??"gray")}),M(()=>Q(g()),()=>{var m;S(r,((m=g())==null?void 0:m.strokeWidth)??.1)}),M(()=>Q(g()),()=>{var m;S(o,((m=g())==null?void 0:m.strokeDasharray)??0)}),M(()=>Q(g()),()=>{var m;S(a,((m=g())==null?void 0:m.strokeDashoffset)??0)}),M(()=>Q(g()),()=>{var m,C,I,O,b,x,D,$;S(s,{shortenHead:((C=(m=g())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((O=(I=g())==null?void 0:I.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((x=(b=g())==null?void 0:b.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:(($=(D=g())==null?void 0:D.linePathOptions)==null?void 0:$.closeLoops)??!1})}),M(()=>(Q(u()),p(s)),()=>{S(c,ol(u(),p(s)))}),pe(),fe();var v=Sk();A(v,"stroke-linejoin",h),A(v,"stroke-linecap",f),Z(()=>{A(v,"d",p(c)),A(v,"stroke",p(n)),A(v,"stroke-width",p(r)),A(v,"stroke-dasharray",p(o)),A(v,"stroke-dashoffset",p(a))}),N(t,v),ne()}var Nk=ie("<circle></circle>");function yo(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T();let u=F(e,"x",8),g=F(e,"y",8),h=F(e,"shape",8);M(()=>Q(h()),()=>{S(n,h().r??.35)}),M(()=>Q(h()),()=>{S(r,h().stroke??"black")}),M(()=>Q(h()),()=>{var v;S(o,(v=h())==null?void 0:v.opacity)}),M(()=>Q(h()),()=>{S(a,h().strokeWidth??.02)}),M(()=>Q(h()),()=>{S(s,h().fill??"none")}),M(()=>Q(h()),()=>{S(c,h().strokeDasharray??0)}),pe(),fe();var f=Nk();Z(()=>{A(f,"cx",u()),A(f,"cy",g()),A(f,"r",p(n)),A(f,"stroke",p(r)),A(f,"stroke-width",p(a)),A(f,"fill",p(s)),A(f,"opacity",p(o)),A(f,"stroke-dasharray",p(c))}),N(t,f),ne()}var Tk=re("<!> <!> <!>",1);function Dk(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T();let s=F(e,"linePoints",8),c=F(e,"shape",8,Ys);function u(O){var D;const b=$t.cloneDeep(O);b.r=b.r||.2;const x=b.r;return b.strokeDasharray=O.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(D=b.linePathOptions)==null?void 0:D.bezierRounding},b}M(()=>Q(s()),()=>{S(n,s().length)}),M(()=>(p(n),Q(s())),()=>{S(r,p(n)>=0?s()[0]:void 0)}),M(()=>(p(n),Q(s())),()=>{S(o,p(n)>=0?s()[p(n)-1]:void 0)}),M(()=>Q(c()),()=>{S(a,u(c()))}),pe(),fe();var g=Tk(),h=ce(g);{var f=O=>{yo(O,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};ge(h,O=>{p(r)&&O(f)})}var v=U(h,2);{var m=O=>{da(O,{get linePoints(){return s()},get shape(){return p(a)}})};ge(v,O=>{p(n)>1&&O(m)})}var C=U(v,2);{var I=O=>{yo(O,{get x(){return p(o).x},get y(){return p(o).y},get shape(){return p(a)}})};ge(C,O=>{p(o)&&O(I)})}N(t,g),ne()}var Rk=ie("<polygon></polygon>");function $s(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T(),g=T();let h=F(e,"cx",8),f=F(e,"cy",8),v=F(e,"shape",8);M(()=>Q(v()),()=>{S(n,v().n??3)}),M(()=>Q(v()),()=>{S(r,v().r??.5)}),M(()=>(p(r),p(n),Q(h()),Q(f())),()=>{S(o,Mv(p(r),p(n),new Re(h(),f())))}),M(()=>p(o),()=>{S(a,p(o).map(C=>`${C.x},${C.y}`).join(" "))}),M(()=>Q(v()),()=>{S(s,v().stroke??"black")}),M(()=>Q(v()),()=>{S(c,v().strokeWidth??.02)}),M(()=>Q(v()),()=>{S(u,v().fill??"none")}),M(()=>Q(v()),()=>{S(g,v().angle??0)}),pe(),fe();var m=Rk();Z(()=>{A(m,"points",p(a)),A(m,"stroke",p(s)),A(m,"stroke-width",p(c)),A(m,"fill",p(u)),A(m,"transform",`rotate(${p(g)}, ${h()}, ${f()} )`)}),N(t,m),ne()}var kk=re("<!> <!> <!>",1);function Gk(t,e){te(e,!1);const n=T(),r=T(),o=T();let a=F(e,"linePoints",8),s=F(e,"shape",12,Ys);const c=4,u=.5;function g($,k){const Y=k.r??u,W=k.n??c,K=k.angle??0,oe=Mv(Y,W,new Re(0,0),!0,0),_e=(W+($-K/360)*W%W)%W,ee=Math.floor(_e)%W,le=Math.ceil(_e)%W;return oe[ee].lerp(oe[le],_e%1).length()}function h($){if(p(n)<=1)return 0;const k=a()[0],W=a()[1].subtract(k).angle()/(2*Math.PI);return g(W,$)}function f($){if(p(n)<=1)return 0;const k=a()[p(n)-1],W=a()[p(n)-2].subtract(k).angle()/(2*Math.PI);return g(W,$)}function v($){var Y;const k=$t.cloneDeep($);return k.r=k.r||u,k.opacity=1,k.linePathOptions={shortenHead:h(k),shortenTail:f(k),bezierRounding:(Y=k.linePathOptions)==null?void 0:Y.bezierRounding},k}M(()=>Q(a()),()=>{S(n,a().length)}),M(()=>(p(n),Q(a())),()=>{S(r,p(n)>=0?a()[0]:void 0)}),M(()=>(p(n),Q(a())),()=>{S(o,p(n)>=0?a()[p(n)-1]:void 0)}),M(()=>Q(s()),()=>{s(v(s()))}),pe(),fe();var m=kk(),C=ce(m);{var I=$=>{$s($,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};ge(C,$=>{p(r)&&$(I)})}var O=U(C,2);{var b=$=>{da($,{get linePoints(){return a()},get shape(){return s()}})};ge(O,$=>{p(n)>1&&$(b)})}var x=U(O,2);{var D=$=>{$s($,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return s()}})};ge(x,$=>{p(o)&&$(D)})}N(t,m),ne()}var Mk=re("<!> <!>",1);function Vg(t,e){te(e,!1);const n=T();let r=F(e,"linePoints",8),o=F(e,"shape",8,Ys);function a(m){var O,b,x;const C=$t.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=C.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}function s(m){var O,b,x;const C=$t.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=C.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}M(()=>Q(r()),()=>{S(n,r().length>0?r()[0]:void 0)}),pe(),fe();var c=Mk(),u=ce(c);{var g=m=>{var C=Xe(()=>a(o()));da(m,{get linePoints(){return r()},get shape(){return p(C)}})};ge(u,m=>{r().length>1&&m(g)})}var h=U(u,2);{var f=m=>{var C=Xe(()=>a(o()));yo(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},v=m=>{var C=ye(),I=ce(C);{var O=b=>{var x=Xe(()=>s(o()));$s(b,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(x)}})};ge(I,b=>{p(n)&&b(O)},!0)}N(m,C)};ge(h,m=>{p(n)&&o().type===B.THERMO_WITH_CIRCLE?m(f):m(v,!1)})}N(t,c),ne()}var $k=ie('<g class="line-tool"><!></g>');function Fk(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T();let s=F(e,"lineTool",8);const c=bn(s().toolId,Mt)??Ys;M(()=>Q(s()),()=>{S(n,Gs(s().cells))}),M(()=>Q(s()),()=>{S(r,s().shape??c)}),M(()=>(p(r),B),()=>{var v;S(o,((v=p(r))==null?void 0:v.type)||B.LINE)}),M(()=>p(r),()=>{var v;S(a,((v=p(r))==null?void 0:v.opacity)??.8)}),pe(),fe();var u=$k(),g=q(u);{var h=v=>{da(v,{get linePoints(){return p(n)},get shape(){return p(r)}})},f=v=>{var m=ye(),C=ce(m);{var I=b=>{Dk(b,{get linePoints(){return p(n)},get shape(){return p(r)}})},O=b=>{var x=ye(),D=ce(x);{var $=Y=>{Gk(Y,{get linePoints(){return p(n)},get shape(){return p(r)}})},k=Y=>{var W=ye(),K=ce(W);{var oe=ee=>{Vg(ee,{get linePoints(){return p(n)},get shape(){return p(r)}})},_e=ee=>{var le=ye(),Ie=ce(le);{var me=Ne=>{Vg(Ne,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ce=Ne=>{da(Ne,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(Ie,Ne=>{p(o)===B.THERMO_WITH_POLYGON?Ne(me):Ne(Ce,!1)},!0)}N(ee,le)};ge(K,ee=>{p(o)===B.THERMO_WITH_CIRCLE?ee(oe):ee(_e,!1)},!0)}N(Y,W)};ge(D,Y=>{p(o)===B.LINE_WITH_POLYGON_ENDS?Y($):Y(k,!1)},!0)}N(b,x)};ge(C,b=>{p(o)===B.LINE_WITH_CIRCLE_ENDS?b(I):b(O,!1)},!0)}N(v,m)};ge(g,v=>{p(o)===B.LINE?v(h):v(f,!1)})}H(u),Z(()=>A(u,"opacity",p(a))),N(t,u),ne()}var Uk=ie("<g></g>"),Hk=ie('<g class="line-tools-layer" mask="url(#fog-mask-fog)"></g>');function Pk(t,e){te(e,!1);const n=je(),r=()=>ve(nk,"$lineToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=Hk();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=Uk();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{Fk(f,{get lineTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var Bk=ie('<path class="cursor svelte-zsq70u"></path>');function Wk(t,e){te(e,!1);const n=je(),r=()=>ve(Kt,"$toolStore",n),o=()=>ve(Oo,"$selectionStore",n),a=T(),s=T(),c=.25;function u(h){if(!h)return"";const[f,v]=[h.c,h.r];return`M${f},${v}L${f+c},${v}L${f},${v+c}Z`}M(()=>r(),()=>{S(a,Zu(r()))}),M(()=>o(),()=>{S(s,u(o().lastCell))}),pe(),fe();var g=Bk();Z(()=>{A(g,"d",p(s)),A(g,"visibility",p(a)?"visible":"hidden")}),N(t,g),ne()}var Yk=ie('<g class="grid-border"><rect fill="none" stroke="black"></rect></g>');function zk(t,e){te(e,!1);let n=F(e,"gridShape",8);const r=.06;fe();var o=Yk(),a=q(o);A(a,"x",0),A(a,"y",0),A(a,"stroke-width",r),H(o),Z(()=>{A(a,"width",n().nCols),A(a,"height",n().nRows)}),N(t,o),ne()}var jk=ie('<rect fill="none" stroke="black"></rect>'),Vk=ie('<g class="grid-lines"></g>');function qk(t,e){te(e,!1);const n=je(),r=()=>ve(ln,"$gridStore",n),o=T(),a=.01;M(()=>r(),()=>{S(o,r().getAllCells())}),pe(),fe();var s=Vk();We(s,5,()=>p(o),gt,(c,u)=>{var g=jk();A(g,"width",1),A(g,"height",1),A(g,"stroke-width",a),Z(()=>{A(g,"x",p(u).c),A(g,"y",p(u).r)}),N(c,g)}),H(s),N(t,s),ne()}var Kk=ie('<path class="region-border" fill="none" stroke="black"></path>'),Xk=ie('<g class="regions-border"></g>');function Zk(t,e){te(e,!1);const n=je(),r=()=>ve(sn,"$cellsStore",n),o=()=>ve(ln,"$gridStore",n),a=T(),s=T(),c=.06;function u(h,f){return h.filter(C=>C.region===f).map(C=>({r:C.r,c:C.c}))}M(()=>r(),()=>{S(a,r())}),M(()=>o(),()=>{S(s,o().getUsedRegions())}),pe(),fe();var g=Xk();We(g,5,()=>p(s),gt,(h,f)=>{var v=Kk();Z(()=>A(v,"d",ii(u(p(a),p(f)),0,!1))),A(v,"stroke-width",c),Z(()=>A(v,"id",`region-${p(f)??""}`)),N(h,v)}),H(g),N(t,g),ne()}var Qk=ie('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function Jk(t,e){te(e,!1);const n=je(),r=()=>ve(Oo,"$selectionStore",n),o=()=>ve(Kt,"$toolStore",n),a=T(),s=T(),c=T(),u=T(),g=T(),h=T();let f=F(e,"boundingBox",8);const v=.06,m=.05,C="#080808",I="#b2b2b2";M(()=>Q(f()),()=>{S(a,f().x)}),M(()=>Q(f()),()=>{S(s,f().y)}),M(()=>r(),()=>{S(c,r().cells)}),M(()=>p(c),()=>{S(u,ii(p(c),0))}),M(()=>p(c),()=>{S(g,ii(p(c),v))}),M(()=>o(),()=>{S(h,Zu(o()))}),pe(),fe();var O=Qk(),b=q(O),x=q(b);A(x,"stdDeviation",m),Io(),H(b);var D=U(b),$=q(D);A($,"fill",I);var k=U($);A(k,"fill",C),H(D);var Y=U(D);H(O),Z(()=>{A(O,"visibility",p(h)?"visible":"hidden"),A(D,"x",p(a)),A(D,"y",p(s)),A($,"x",p(a)),A($,"y",p(s)),A(k,"d",p(g)),A(Y,"d",p(u))}),N(t,O),ne()}var e5=re("<!> <!>",1);function Fv(t,e){te(e,!1);const n=T(),r=T();let o=F(e,"cells",8),a=F(e,"shape",8,ed),s=F(e,"value",8,void 0);M(()=>Q(o()),()=>{S(n,o()[0])}),M(()=>p(n),()=>{S(r,new Re(p(n).c,p(n).r))}),pe(),fe();var c=e5(),u=ce(c);Ms(u,{get cells(){return o()},get shape(){return a()}});var g=U(u,2);{var h=f=>{ua(f,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(g,f=>{s()&&s().length&&f(h)})}N(t,c),ne()}var t5=ie('<g class="cage-tool"><!></g>');function n5(t,e){te(e,!1);const n=T();let r=F(e,"cageTool",8);const o=bn(r().toolId,Mt)??ed;M(()=>Q(r()),()=>{S(n,r().shape??o)}),pe(),fe();var a=t5(),s=q(a);Fv(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),H(a),N(t,a),ne()}var r5=ie("<g></g>"),o5=ie('<g class="cage-tools-layer" mask="url(#fog-mask-fog)"></g>');function i5(t,e){te(e,!1);const n=je(),r=()=>ve(ok,"$cageToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=o5();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=r5();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{n5(f,{get cageTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var a5=ie('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function s5(t,e){te(e,!1);const n=T(),r=T();let o=F(e,"grid",8);M(()=>Q(o()),()=>{S(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),M(()=>p(n),()=>{S(r,ii(p(n),0))}),pe(),fe();var a=a5(),s=q(a);H(a),Z(()=>A(s,"d",p(r))),N(t,a),ne()}var l5=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),c5=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),u5=ie('<g class="quadruple-text"><!></g>');function d5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T();let c=F(e,"cornerTool",8);const u=c().cells,g=new Re(u[u.length-1].c,u[u.length-1].r),h=bn(c().toolId,Mt)??Gh;M(()=>Q(c()),()=>{S(n,c().value)}),M(()=>Q(c()),()=>{S(r,c().shape??h)}),M(()=>p(r),()=>{var C;S(o,((C=p(r))==null?void 0:C.fontSize)??.2)}),M(()=>p(r),()=>{var C;S(a,((C=p(r))==null?void 0:C.fontColor)??"black")}),M(()=>p(n),()=>{var C;S(s,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),pe(),fe();var f=ye(),v=ce(f);{var m=C=>{var I=u5(),O=q(I);{var b=D=>{var $=l5(),k=q($,!0);Z(()=>nt(k,p(s).join(" "))),H($),Z(()=>{A($,"x",g.x),A($,"y",g.y),A($,"font-size",p(o)),A($,"fill",p(a))}),N(D,$)},x=D=>{var $=c5(),k=ce($),Y=q(k,!0);Z(()=>nt(Y,p(s).slice(0,2).join(" "))),H(k);var W=U(k),K=q(W,!0);Z(()=>nt(K,p(s).slice(2).join(" "))),H(W),Z(()=>{A(k,"x",g.x),A(k,"y",g.y),A(k,"dy",-p(o)/2),A(k,"font-size",p(o)),A(k,"fill",p(a)),A(W,"x",g.x),A(W,"y",g.y),A(W,"dy",p(o)/2),A(W,"font-size",p(o)),A(W,"fill",p(a))}),N(D,$)};ge(O,D=>{p(s).length<=2?D(b):D(x,!1)})}H(I),Z(()=>A(I,"data-count",p(s).length)),N(C,I)};ge(v,C=>{p(n)&&C(m)})}N(t,f),ne()}var _5=ie("<ellipse></ellipse>");function f5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T();let g=F(e,"cx",8),h=F(e,"cy",8),f=F(e,"shape",8);M(()=>Q(f()),()=>{S(n,f().width??.5)}),M(()=>Q(f()),()=>{S(r,f().height??.5)}),M(()=>Q(f()),()=>{S(o,f().stroke??"black")}),M(()=>Q(f()),()=>{var m;S(a,(m=f())==null?void 0:m.opacity)}),M(()=>Q(f()),()=>{S(s,f().strokeWidth??.02)}),M(()=>Q(f()),()=>{S(c,f().fill??"none")}),M(()=>Q(f()),()=>{S(u,f().angle??0)}),pe(),fe();var v=_5();Z(()=>{A(v,"cx",g()),A(v,"cy",h()),A(v,"rx",p(n)/2),A(v,"ry",p(r)/2),A(v,"stroke",p(o)),A(v,"stroke-width",p(s)),A(v,"fill",p(c)),A(v,"opacity",p(a)),A(v,"transform",`rotate(${p(u)}, ${g()}, ${h()} )`)}),N(t,v),ne()}var g5=ie("<rect></rect>");function h5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T();let g=F(e,"cx",8),h=F(e,"cy",8),f=F(e,"shape",8);M(()=>Q(f()),()=>{S(n,f().width??.5)}),M(()=>Q(f()),()=>{S(r,f().height??.5)}),M(()=>(Q(g()),p(n)),()=>{S(o,g()-p(n)/2)}),M(()=>(Q(h()),p(r)),()=>{S(a,h()-p(r)/2)}),M(()=>Q(f()),()=>{S(s,f().stroke||"black")}),M(()=>Q(f()),()=>{S(c,f().strokeWidth||.023)}),M(()=>Q(f()),()=>{S(u,f().fill||"none")}),pe(),fe();var v=g5();Z(()=>{A(v,"x",p(o)),A(v,"y",p(a)),A(v,"width",p(n)),A(v,"height",p(r)),A(v,"stroke",p(s)),A(v,"stroke-width",p(c)),A(v,"fill",p(u))}),N(t,v),ne()}var v5=ie("<rect></rect>");function p5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T(),g=T(),h=T();let f=F(e,"cx",8),v=F(e,"cy",8),m=F(e,"shape",8);M(()=>Q(m()),()=>{S(n,m().r??.5)}),M(()=>(Q(f()),p(n)),()=>{S(r,f()-p(n))}),M(()=>(Q(v()),p(n)),()=>{S(o,v()-p(n))}),M(()=>p(n),()=>{S(a,2*p(n))}),M(()=>p(n),()=>{S(s,2*p(n))}),M(()=>Q(m()),()=>{S(c,m().stroke??"black")}),M(()=>Q(m()),()=>{S(u,m().strokeWidth??.02)}),M(()=>Q(m()),()=>{S(g,m().fill??"none")}),M(()=>Q(m()),()=>{S(h,m().angle??0)}),pe(),fe();var C=v5();Z(()=>{A(C,"x",p(r)),A(C,"y",p(o)),A(C,"width",p(a)),A(C,"height",p(s)),A(C,"stroke",p(c)),A(C,"stroke-width",p(u)),A(C,"fill",p(g)),A(C,"transform",`rotate(${p(h)}, ${f()}, ${v()})`)}),N(t,C),ne()}function sl(t,e){te(e,!1);const n=T();let r=F(e,"cx",8),o=F(e,"cy",8),a=F(e,"shape",8);M(()=>(Q(a()),B),()=>{var h;S(n,((h=a())==null?void 0:h.type)??B.CIRCLE)}),pe(),fe();var s=ye(),c=ce(s);{var u=h=>{yo(h,{get x(){return r()},get y(){return o()},get shape(){return a()}})},g=h=>{var f=ye(),v=ce(f);{var m=I=>{f5(I,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},C=I=>{var O=ye(),b=ce(O);{var x=$=>{p5($,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},D=$=>{var k=ye(),Y=ce(k);{var W=oe=>{h5(oe,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},K=oe=>{var _e=ye(),ee=ce(_e);{var le=me=>{$s(me,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},Ie=me=>{yo(me,{get x(){return r()},get y(){return o()},get shape(){return a()}})};ge(ee,me=>{p(n)===B.POLYGON?me(le):me(Ie,!1)},!0)}N(oe,_e)};ge(Y,oe=>{p(n)===B.RECTANGLE?oe(W):oe(K,!1)},!0)}N($,k)};ge(b,$=>{p(n)===B.SQUARE?$(x):$(D,!1)},!0)}N(I,O)};ge(v,I=>{p(n)===B.ELLIPSE?I(m):I(C,!1)},!0)}N(h,f)};ge(c,h=>{p(n)===B.CIRCLE?h(u):h(g,!1)})}N(t,s),ne()}var m5=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),C5=ie('<g class="corner-tool"><!><!></g>');function E5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T();let s=F(e,"cornerTool",8);const c=s().cells,u=bn(s().toolId,Mt)??Gh,g=new Re(c[c.length-1].c,c[c.length-1].r);function h(C,I){return I===B.TEXT_ONLY?C.value?C.value:"-":C.value??""}M(()=>Q(s()),()=>{S(n,s().shape??u)}),M(()=>(p(n),B),()=>{var C;S(r,((C=p(n))==null?void 0:C.type)??B.CIRCLE)}),M(()=>p(n),()=>{var C;S(o,((C=p(n))==null?void 0:C.fontSize)??.2)}),M(()=>p(n),()=>{var C;S(a,((C=p(n))==null?void 0:C.fontColor)??"black")}),pe(),fe();var f=ye(),v=ce(f);{var m=C=>{var I=C5(),O=q(I);sl(O,{get cx(){return g.x},get cy(){return g.y},get shape(){return p(n)}});var b=U(O);{var x=$=>{d5($,{get cornerTool(){return s()}})},D=$=>{var k=m5(),Y=q(k,!0);Z(()=>nt(Y,h(s(),p(r)))),H(k),Z(()=>{A(k,"x",g.x),A(k,"y",g.y),A(k,"font-size",p(o)),A(k,"fill",p(a))}),N($,k)};ge(b,$=>{s().toolId===_.QUADRUPLE?$(x):$(D,!1)})}H(I),N(C,I)};ge(v,C=>{c.length===4&&C(m)})}N(t,f),ne()}var I5=ie("<g></g>"),b5=ie('<g class="corner-tools-layer" mask="url(#fog-mask-fog)"></g>');function w5(t,e){te(e,!1);const n=je(),r=()=>ve(tk,"$cornerToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=b5();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=I5();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{E5(f,{get cornerTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var O5=ie('<path class="arrow-line" fill="none"></path>'),L5=ie('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function y5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T(),u=T(),g=T(),h=T(),f=T();let v=F(e,"arrowTool",8),m=F(e,"arrowId",8),C=F(e,"boundingBox",8);const I=bn(v().toolId,Mt)??CO,O="round",b="round",x=crypto.randomUUID(),D=`arrow-mask-${m()}-${x}`,$=`arrow-marker-${m()}-${x}`;M(()=>Q(v()),()=>{S(n,v().shape??I)}),M(()=>Q(C()),()=>{S(r,C().x)}),M(()=>Q(C()),()=>{S(o,C().y)}),M(()=>p(n),()=>{var le;S(a,((le=p(n))==null?void 0:le.r)??.4)}),M(()=>p(n),()=>{var le;S(s,((le=p(n))==null?void 0:le.stroke)??"gray")}),M(()=>p(n),()=>{var le;S(c,((le=p(n))==null?void 0:le.strokeWidth)??.1)}),M(()=>p(n),()=>{var le;S(u,((le=p(n))==null?void 0:le.strokeDasharray)??0)}),M(()=>p(n),()=>{var le;S(g,((le=p(n))==null?void 0:le.opacity)??.8)}),M(()=>(p(a),p(n)),()=>{var le,Ie,me,Ce;S(h,{shortenHead:p(a),shortenTail:((Ie=(le=p(n))==null?void 0:le.linePathOptions)==null?void 0:Ie.shortenTail)??.2,bezierRounding:((Ce=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ce.bezierRounding)??.4})}),M(()=>Q(v()),()=>{S(f,Cu(v().cells))}),pe(),fe();var k=L5(),Y=q(k);A(Y,"id",D);var W=q(Y),K=U(W);H(Y);var oe=U(Y);al(oe,{id:$,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var _e=U(oe);A(_e,"mask",`url(#${D??""})`);var ee=U(_e);We(ee,1,()=>v().lines,gt,(le,Ie)=>{var me=ye(),Ce=ce(me);{var Ne=lt=>{var xe=O5();Z(()=>A(xe,"d",Cu(p(Ie),p(h)))),A(xe,"stroke-linejoin",O),A(xe,"stroke-linecap",b),A(xe,"marker-end",`url(#${$??""})`),Z(()=>{A(xe,"stroke",p(s)),A(xe,"stroke-width",p(c)),A(xe,"opacity",p(g)),A(xe,"stroke-dasharray",p(u))}),N(lt,xe)};ge(Ce,lt=>{p(Ie).length>1&&lt(Ne)})}N(le,me)}),H(k),Z(()=>{A(Y,"x",p(r)),A(Y,"y",p(o)),A(W,"x",p(r)),A(W,"y",p(o)),A(K,"stroke-width",2*p(a)-p(c)),A(K,"d",p(f)),A(_e,"d",p(f)),A(_e,"stroke-width",2*p(a)+p(c)),A(_e,"stroke",p(s))}),N(t,k),ne()}var A5=ie("<g></g>"),x5=ie('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function S5(t,e){te(e,!1);const n=je(),r=()=>ve(rk,"$arrowToolsStore",n),o=T();let a=F(e,"boundingBox",8);M(()=>r(),()=>{S(o,r())}),pe();var s=x5();We(s,5,()=>p(o),gt,(c,u)=>{let g=()=>p(u).toolId,h=()=>p(u).element;var f=A5();We(f,5,()=>Object.entries(h()),v=>v[0],(v,m)=>{y5(v,{get arrowId(){return p(m)[0]},get arrowTool(){return p(m)[1]},get boundingBox(){return a()}})}),H(f),Z(()=>$n(f,`element-group ${g()}`)),N(c,f)}),H(s),N(t,s),ne()}var N5=ie('<!><path fill="none"></path>',1);function T5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T();let c=F(e,"singleCellArrowTool",8),u=F(e,"id",8);const g=c().cell,h=bn(c().toolId,Mt)??pO,f=.3;function v(x,D){const $=Ws(D),k=new Re($.c,$.r).normalise().scale(f),Y=Zn(x),W=Y.subtract(k),K=Y.add(k);return[W,K]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;M(()=>Q(c()),()=>{S(n,c().direction)}),M(()=>Q(c()),()=>{S(r,c().shape??h)}),M(()=>p(r),()=>{S(o,p(r).strokeWidth??.1)}),M(()=>p(r),()=>{S(a,p(r).stroke??"black")}),M(()=>p(n),()=>{S(s,ol(v(g,p(n))))}),pe(),fe();var I=N5(),O=ce(I);al(O,{id:C,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(o)}});var b=U(O);A(b,"marker-end",`url(#${C??""})`),Z(()=>{A(b,"d",p(s)),A(b,"stroke",p(a)),A(b,"stroke-width",p(o))}),N(t,I),ne()}var D5=ie('<path fill="none"></path>'),R5=ie("<!><!>",1);function k5(t,e){te(e,!1);const n=T(),r=T(),o=T();let a=F(e,"singleCellMultiArrowTool",8),s=F(e,"id",8);const c=a().cell,u=bn(a().toolId,Mt)??mO,g=.2;function h(b,x){const D=Ws(x),$=new Re(D.c,D.r),Y=Zn(b).add($.scale(.4));return[Y.subtract($.normalise().scale(g)),Y]}function f(b){return ol(h(c,b))}const v=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${v}`;M(()=>Q(a()),()=>{S(n,a().shape??u)}),M(()=>p(n),()=>{S(r,p(n).strokeWidth??.08)}),M(()=>p(n),()=>{S(o,p(n).stroke??"black")}),pe(),fe();var C=R5(),I=ce(C);al(I,{id:m,l:.1,get stroke(){return p(o)},get strokeWidth(){return p(r)}});var O=U(I);We(O,1,()=>a().directions,gt,(b,x)=>{var D=D5();Z(()=>A(D,"d",f(p(x)))),A(D,"marker-end",`url(#${m??""})`),Z(()=>{A(D,"stroke",p(o)),A(D,"stroke-width",p(r))}),N(b,D)}),N(t,C),ne()}var G5=ie('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function qg(t,e){te(e,!1);const n=je(),r=()=>ve(ZR,"$minimumConstraintsStore",n),o=()=>ve(QR,"$maximumConstraintsStore",n),a=T(),s=T(),c=T();let u=F(e,"coord",8),g=F(e,"minOrMax",8);function h(O,b){const x=[!0,!0,!0,!0];let D=[[0,-1],[1,0],[0,1],[-1,0]];for(let $=0;$<D.length;$++){let k=D[$];const Y={r:O.r+k[1],c:O.c+k[0]};x[$]=!Object.values(b).some(W=>qe(Y,W.cell))}return x}function f(O,b){let x=hk(g(),O.r,O.c);const D=h(O,b);return x=x.filter((k,Y)=>D[Y]),x.map(k=>wi(k,!1)).join("")}function v(O,b){return g()==="max"?b:O}M(()=>Q(u()),()=>{S(a,u().c)}),M(()=>Q(u()),()=>{S(s,u().r)}),M(()=>(r(),o()),()=>{S(c,v(r(),o()))}),pe(),fe();var m=G5(),C=q(m);A(C,"width",1),A(C,"height",1);var I=U(C);Z(()=>A(I,"d",f(u(),p(c)))),H(m),Z(()=>{A(C,"x",p(a)),A(C,"y",p(s))}),N(t,m),ne()}var M5=ie("<circle></circle>");function $5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T();let u=F(e,"x",8),g=F(e,"y",8),h=F(e,"value",8),f=F(e,"shape",8);M(()=>Q(f()),()=>{S(n,f().r??.35)}),M(()=>Q(f()),()=>{S(r,f().stroke??"black")}),M(()=>Q(f()),()=>{var m;S(o,(m=f())==null?void 0:m.opacity)}),M(()=>Q(f()),()=>{S(a,f().strokeWidth??.02)}),M(()=>Q(h()),()=>{S(s,h()==="1"?"var(--constraint-color-red)":h()==="2"?"var(--constraint-color-green)":h()==="3"?"var(--constraint-color-blue)":"none")}),M(()=>Q(f()),()=>{S(c,f().strokeDasharray??0)}),pe(),fe();var v=M5();Z(()=>{A(v,"cx",u()),A(v,"cy",g()),A(v,"r",p(n)),A(v,"stroke",p(r)),A(v,"stroke-width",p(a)),A(v,"fill",p(s)),A(v,"opacity",p(o)),A(v,"stroke-dasharray",p(c))}),N(t,v),ne()}var F5=ie('<g class="single-cell-tool"><!><!></g>');function U5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T();let c=F(e,"singleCellTool",8),u=F(e,"id",8);const g=c().cell,h=bn(c().toolId,Mt)??vO;M(()=>Q(c()),()=>{S(n,c().shape??h)}),M(()=>(p(n),B),()=>{var b;S(r,((b=p(n))==null?void 0:b.type)||B.CIRCLE)}),M(()=>{},()=>{S(o,{x:g.c+.5,y:g.r+.5})}),M(()=>Re,()=>{S(a,new Re(g.c,g.r))}),M(()=>Q(c()),()=>{S(s,c().value)}),pe(),fe();var f=F5(),v=q(f);{var m=b=>{qg(b,{coord:g,minOrMax:"min"})},C=b=>{var x=ye(),D=ce(x);{var $=Y=>{qg(Y,{coord:g,minOrMax:"max"})},k=Y=>{var W=ye(),K=ce(W);{var oe=ee=>{$5(ee,{get x(){return p(o).x},get y(){return p(o).y},get value(){return p(s)},get shape(){return p(n)}})},_e=ee=>{var le=ye(),Ie=ce(le);{var me=Ne=>{Fv(Ne,{cells:[g],get shape(){return p(n)},get value(){return c().value}})},Ce=Ne=>{sl(Ne,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return p(n)}})};ge(Ie,Ne=>{p(r)===B.CAGE?Ne(me):Ne(Ce,!1)},!0)}N(ee,le)};ge(K,ee=>{c().toolId===_.COLORED_COUNTING_CIRCLES?ee(oe):ee(_e,!1)},!0)}N(Y,W)};ge(D,Y=>{c().toolId===_.MAXIMUM?Y($):Y(k,!1)},!0)}N(b,x)};ge(v,b=>{c().toolId===_.MINIMUM?b(m):b(C,!1)})}var I=U(v);{var O=b=>{ua(b,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};ge(I,b=>{p(r)!==B.CAGE&&c().toolId!==_.COLORED_COUNTING_CIRCLES&&p(s)&&b(O)})}H(f),Z(()=>A(f,"id",`constraint-${u()}`)),N(t,f),ne()}var H5=ie("<g></g>"),P5=ie('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function B5(t,e){te(e,!1);const n=je(),r=()=>ve(Id,"$singleCellToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=P5();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=H5();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{var m=ye(),C=ce(m);{var I=b=>{T5(b,{get singleCellArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},O=b=>{var x=ye(),D=ce(x);{var $=Y=>{k5(Y,{get singleCellMultiArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},k=Y=>{var W=ye(),K=ce(W);{var oe=_e=>{U5(_e,{get singleCellTool(){return p(v)[1]},get id(){return p(v)[0]}})};ge(K,_e=>{p(v)[1].type==="SIMPLE"&&_e(oe)},!0)}N(Y,W)};ge(D,Y=>{p(v)[1].type==="MULTIARROW"?Y($):Y(k,!1)},!0)}N(b,x)};ge(C,b=>{p(v)[1].type==="ARROW"?b(I):b(O,!1)})}N(f,m)}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var W5=ie('<line class="svelte-yr67cf"></line>');function Y5(t,e){te(e,!1);const n=T(),r=T(),o=T();let a=F(e,"shape",8),s=F(e,"coords",8);const[c,u]=s(),g=u.c,h=c.c===u.c?u.c+1:u.c,f=u.r,v=c.r===u.r?u.r+1:u.r;M(()=>Q(a()),()=>{S(n,a().stroke??"black")}),M(()=>Q(a()),()=>{var C;S(r,(C=a())==null?void 0:C.opacity)}),M(()=>Q(a()),()=>{S(o,a().strokeWidth??.02)}),pe(),fe();var m=W5();A(m,"x1",g),A(m,"x2",h),A(m,"y1",f),A(m,"y2",v),Z(()=>{A(m,"stroke",p(n)),A(m,"stroke-width",p(o)),A(m,"opacity",p(r))}),N(t,m),ne()}var z5=ie('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function j5(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T();let c=F(e,"edgeTool",8);const u=c().cells,g=bn(c().toolId,Mt)??kh;function h(I,O){return O===B.TEXT_ONLY?I.value?I.value:"-":I.value??""}function f(){if(c().toolId!==_.EDGE_INEQUALITY)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}M(()=>Q(c()),()=>{S(n,c().shape??g)}),M(()=>Gs,()=>{S(r,gL(Gs(u)))}),M(()=>(p(n),B),()=>{var I;S(o,((I=p(n))==null?void 0:I.type)||B.CIRCLE)}),M(()=>p(n),()=>{var I;S(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),M(()=>p(n),()=>{var I;S(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),pe(),fe();var v=ye(),m=ce(v);{var C=I=>{var O=z5(),b=q(O);{var x=Y=>{yo(Y,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},D=Y=>{var W=ye(),K=ce(W);{var oe=ee=>{yo(ee,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},_e=ee=>{var le=ye(),Ie=ce(le);{var me=Ne=>{Y5(Ne,{coords:u,get shape(){return p(n)}})},Ce=Ne=>{sl(Ne,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(Ie,Ne=>{p(o)===B.BORDER_LINE?Ne(me):Ne(Ce,!1)},!0)}N(ee,le)};ge(K,ee=>{p(o)===B.TEXT_ONLY?ee(oe):ee(_e,!1)},!0)}N(Y,W)};ge(b,Y=>{c().toolId===_.EDGE_INEQUALITY?Y(x):Y(D,!1)})}var $=U(b);Z(()=>A($,"transform",`rotate(${f()}, ${p(r).x}, ${p(r).y} )`));var k=q($,!0);Z(()=>nt(k,h(c(),p(o)))),H($),H(O),Z(()=>{A($,"x",p(r).x),A($,"y",p(r).y),A($,"font-size",p(a)),A($,"fill",p(s))}),N(I,O)};ge(m,I=>{u.length===2&&I(C)})}N(t,v),ne()}var V5=ie("<g></g>"),q5=ie('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function K5(t,e){te(e,!1);const n=je(),r=()=>ve(JR,"$edgeToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=q5();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=V5();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{j5(f,{get edgeTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}function X5(t,e){const n=t.getRow(e.r);return new Set(n)}function Z5(t,e){const n=t.getCol(e.c);return new Set(n)}function Q5(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function J5(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function e3(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function t3(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function n3(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function r3(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function o3(t,e,n){let r=new Set;const a=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>f!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),g=c.findIndex(f=>f===e);if(g!==-1){if(r=new Set([...r,...u]),u.length>0){const f=c.filter((v,m)=>m!==g);r=new Set([...r,...f])}return r}return u.findIndex(f=>f===e)!==-1&&(r=new Set([...r,...c])),r}function i3(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function a3(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function s3(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(_.ANTIKNIGHT)&&(r=r.union(J5(t,o))),e.get(_.ANTIKING)&&(r=r.union(e3(t,o))),e.get(_.DISJOINT_GROUPS)&&(r=r.union(t3(t,o))),e.get(_.NEGATIVE_DIAGONAL)&&(r=r.union(r3(t,o))),e.get(_.POSITIVE_DIAGONAL)&&(r=r.union(n3(t,o)))),r}function Xc(t,e,n,r,o){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=a3(t,n,c);o=new Set([...o,...u])}return o}function l3(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;const a=e.get(_.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],g=o3(t,o,u);r=new Set([...r,...g])}const s=e.get(_.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],g=i3(t,o,u);r=new Set([...r,...g])}return r=Xc(t,e,o,_.KILLER_CAGE,r),r=Xc(t,e,o,_.PARITY_BALANCE_CAGE,r),r=Xc(t,e,o,_.SPOTLIGHT_CAGE,r),r}function Uv(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,a=t.localConstraints;if(!r)return n;r.get(_.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...X5(o,e),...Z5(o,e),...Q5(o,e)])),n=new Set([...n,...s3(o,r,e)]),n=new Set([...n,...l3(o,a,e)]);const s=o.getCell(e.r,e.c);return s&&n.delete(s),n}function c3(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(Uv(t,a));const r=n.reduce((a,s)=>a.intersection(s)),o=[];for(const a of r)o.push(a.toCoords());return o}var u3=ie('<tspan class="svelte-8mb99u"> </tspan>'),d3=ie('<g class="center-marks-group"><text class="center-mark svelte-8mb99u" dominant-baseline="central"></text></g>');function _3(t,e){te(e,!1);const n=T();let r=F(e,"cell",8),o=F(e,"seen_values",8);const a=.25;function s(h){return o().find(v=>v===h)!==void 0}M(()=>Q(r()),()=>{S(n,Zn({r:r().r,c:r().c}))}),pe(),fe();var c=ye(),u=ce(c);{var g=h=>{var f=d3(),v=q(f);A(v,"font-size",a),We(v,5,()=>r().centerMarks,gt,(m,C)=>{var I=u3();const O=Xe(()=>s(p(C)));Z(()=>Ot(I,"conflict",p(O)));var b=q(I,!0);H(I),Z(()=>nt(b,p(C))),N(m,I)}),H(v),H(f),Z(()=>{A(v,"x",p(n).x),A(v,"y",p(n).y),A(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(h,f)};ge(u,h=>{r().centerMarks.length&&h(g)})}N(t,c),ne()}var f3=ie('<text class="corner-mark svelte-1ntffp0" dominant-baseline="central"> </text>'),g3=ie('<g class="corner-marks-group"></g>');function h3(t,e){te(e,!1);let n=F(e,"cell",8),r=F(e,"seen_values",8);const o=.25,a=.28;function s(f){const v=f.cornerMarks.slice(0,8),m=Zn({r:f.r,c:f.c});return v.map((C,I)=>{const O=fk(I,a);return{pos:m.add(O),value:C,idx:I}})}function c(f){return r().find(m=>m===f)!==void 0}fe();var u=ye(),g=ce(u);{var h=f=>{var v=g3();We(v,5,()=>s(n()),gt,(m,C)=>{let I=()=>p(C).pos,O=()=>p(C).value;var b=f3();A(b,"font-size",o);const x=Xe(()=>c(O()));var D=q(b,!0);H(b),Z(()=>{A(b,"x",I().x),A(b,"y",I().y),Ot(b,"conflict",p(x)),nt(D,O())}),N(m,b)}),H(v),N(f,v)};ge(g,f=>{n().cornerMarks.length&&f(h)})}N(t,u),ne()}var v3=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),p3=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),m3=ie('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),C3=ie("<!><!>",1),E3=ie('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function I3(t,e){te(e,!1);const n=je(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(Ca,"$puzzleStore",n),a=()=>ve(Kt,"$toolStore",n),s=T(),c=T(),u=T(),g=T(),h=T(),f=T(),v=T();let m=F(e,"cell",8);const C=.8,I=400;function O(k,Y){if(!k)return[];let K=[...Uv(p(h),Y.toCoords())].map(oe=>oe.value).filter(oe=>oe!==null);return K=[...new Set(K)],K}function b(k){return k?"1":"0"}M(()=>Q(m()),()=>{S(s,m().value)}),M(()=>Q(m()),()=>{S(c,m().given)}),M(()=>Q(m()),()=>{S(u,Zn({r:m().r,c:m().c}))}),M(()=>r(),()=>{S(g,r().highlightPencilmarkConflicts)}),M(()=>o(),()=>{S(h,o())}),M(()=>r(),()=>{S(f,r().showSolution)}),M(()=>(p(g),Q(m())),()=>{S(v,O(p(g),m()))}),pe(),fe();var x=ye(),D=ce(x);{var $=k=>{var Y=E3(),W=q(Y);{var K=_e=>{var ee=ye(),le=ce(ee);{var Ie=me=>{var Ce=v3();A(Ce,"font-size",C),A(Ce,"font-weight",I);var Ne=q(Ce,!0);H(Ce),Z(()=>{A(Ce,"x",p(u).x),A(Ce,"y",p(u).y),nt(Ne,m().region)}),N(me,Ce)};ge(le,me=>{m().region!==null&&me(Ie)})}N(_e,ee)},oe=_e=>{var ee=ye(),le=ce(ee);{var Ie=Ce=>{var Ne=ye(),lt=ce(Ne);{var xe=we=>{var _t=p3();A(_t,"font-size",C),A(_t,"font-weight",I);var ct=q(_t,!0);Z(()=>nt(ct,b(m().fog))),H(_t),Z(()=>{A(_t,"x",p(u).x),A(_t,"y",p(u).y)}),N(we,_t)};ge(lt,we=>{m().fog!==null&&we(xe)})}N(Ce,Ne)},me=Ce=>{var Ne=ye(),lt=ce(Ne);{var xe=_t=>{var ct=m3();A(ct,"font-size",C),A(ct,"font-weight",I);var Un=q(ct,!0);H(ct),Z(()=>{A(ct,"x",p(u).x),A(ct,"y",p(u).y),Ot(ct,"given",p(c)),nt(Un,p(s))}),N(_t,ct)},we=_t=>{var ct=C3(),Un=ce(ct);h3(Un,{get cell(){return m()},get seen_values(){return p(v)}});var Lt=U(Un);_3(Lt,{get cell(){return m()},get seen_values(){return p(v)}}),N(_t,ct)};ge(lt,_t=>{p(s)!==null?_t(xe):_t(we,!1)},!0)}N(Ce,Ne)};ge(le,Ce=>{a()===_.FOG?Ce(Ie):Ce(me,!1)},!0)}N(_e,ee)};ge(W,_e=>{a()===_.REGIONS?_e(K):_e(oe,!1)})}H(Y),Z(()=>Ot(Y,"hide-given",m().given)),N(k,Y)};ge(D,k=>{p(f)||k($)})}N(t,x),ne()}var b3=ie("<path></path>"),w3=ie('<g class="highlights-group"></g>');function O3(t,e){te(e,!1);const n=je(),r=()=>ve(Kt,"$toolStore",n);let o=F(e,"cell",8);function a(g){const h=Zn({r:o().r,c:o().c}),f=o().highlights.length;return o().highlights.map((m,C)=>{let I=dk(C,f);I=I.map(b=>b.add(h));const O=wi(I,!0);return{colorId:m,d:O}})}fe();var s=ye(),c=ce(s);{var u=g=>{var h=ye(),f=ce(h);{var v=m=>{var C=w3();We(C,5,()=>a(o()),gt,(I,O)=>{let b=()=>p(O).colorId,x=()=>p(O).d;var D=b3();Z(()=>{$n(D,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),A(D,"d",x())}),N(I,D)}),H(C),N(m,C)};ge(f,m=>{o().highlights.length&&m(v)})}N(g,h)};ge(c,g=>{r()!==_.REGIONS&&g(u)})}N(t,s),ne()}var L3=ie('<path class="cell-marker" fill="none"></path>'),y3=ie('<circle fill="none" opacity="0.9"></circle>');function A3(t,e){te(e,!1);const n=T(),r=T();let o=F(e,"marker",8);const a=.3,s=.08;M(()=>Q(o()),()=>{S(n,$v(o(),a))}),M(()=>Q(o()),()=>{S(r,il(o().colorId,"black"))}),pe(),fe();var c=ye(),u=ce(c);{var g=f=>{var v=L3();A(v,"stroke-width",s),Z(()=>{A(v,"d",p(n)),A(v,"stroke",p(r))}),N(f,v)},h=f=>{var v=y3();A(v,"r",a),A(v,"stroke-width",s),Z(()=>{$n(v,`cell-marker color-${o().colorId??""}`),A(v,"cx",o().c),A(v,"cy",o().r),A(v,"stroke",p(r))}),N(f,v)};ge(u,f=>{o().marker==="X"?f(g):f(h,!1)})}N(t,c),ne()}var x3=ie('<g class="cell-markers"></g>');function S3(t,e){let n=F(e,"markers",8);var r=x3();We(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,a)=>{A3(o,{get marker(){return p(a)}})}),H(r),N(t,r)}var N3=ie('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function T3(t,e){te(e,!1);const n=T();let r=F(e,"draftLineMarker",8);const o=.2;function a(u){return u.map(h=>[new Re(h.p1.c,h.p1.r),new Re(h.p2.c,h.p2.r)]).flat()}function s(u){const g=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?il(g,"black"):"darkred"}M(()=>Q(r()),()=>{S(n,wi(a(r().draftLine)))}),pe(),fe();var c=N3();Z(()=>A(c,"stroke",s(r()))),A(c,"stroke-width",o),A(c,"opacity",.5),Z(()=>A(c,"d",p(n))),N(t,c),ne()}var D3=ie('<path fill="none" opacity="0.9"></path>');function R3(t,e){te(e,!1);const n=T(),r=T();let o=F(e,"marker",8);const a=.08,s=.04;M(()=>Q(o()),()=>{S(n,$v(o(),a))}),M(()=>Q(o()),()=>{S(r,il(o().colorId,"black"))}),pe(),fe();var c=D3();A(c,"stroke-width",s),Z(()=>{A(c,"d",p(n)),$n(c,`edge-marker color-${o().colorId??""}`),A(c,"stroke",p(r))}),N(t,c),ne()}var k3=ie('<g class="edge-markers"></g>');function G3(t,e){let n=F(e,"markers",8);var r=k3();We(r,5,n,o=>`${o.r}, ${o.c}`,(o,a)=>{R3(o,{get marker(){return p(a)}})}),H(r),N(t,r)}var M3=ie('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),$3=ie('<g class="line-markers svelte-yha19m"></g>');function F3(t,e){te(e,!1);let n=F(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function a(c){return il(c,"black")}fe();var s=$3();We(s,5,n,c=>o(c),(c,u)=>{var g=M3();A(g,"stroke-width",r),Z(()=>A(g,"stroke",a(p(u).colorId))),Z(()=>{A(g,"x1",p(u).p1.c),A(g,"y1",p(u).p1.r),A(g,"x2",p(u).p2.c),A(g,"y2",p(u).p2.r),$n(g,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),N(c,g)}),H(s),N(t,s),ne()}var U3=ie('<g class="pen-tool"><!><!><!><!></g>');function H3(t,e){te(e,!1);const n=je(),r=()=>ve(xs,"$penToolStore",n),o=T();M(()=>r(),()=>{S(o,{draftLine:r().draftLine,mode:r().mode})}),pe(),fe();var a=U3(),s=q(a);F3(s,{get lineMarkers(){return r().lineMarkers}});var c=U(s);G3(c,{get markers(){return r().edgeMarkers}});var u=U(c);S3(u,{get markers(){return r().cellMarkers}});var g=U(u);T3(g,{get draftLineMarker(){return p(o)}}),H(a),N(t,a),ne()}var P3=ie('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function B3(t,e){te(e,!1);const n=je(),r=()=>ve(Oo,"$selectionStore",n),o=()=>ve(Wt,"$settingsStore",n),a=()=>ve(Ca,"$puzzleStore",n),s=()=>ve(Kt,"$toolStore",n),c=T(),u=T(),g=T(),h=T(),f={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(O,b){return O.length?c3(p(g),O):[]}M(()=>r(),()=>{S(c,r().cells)}),M(()=>o(),()=>{S(u,o().highlightCellsSeenBySelection)}),M(()=>a(),()=>{S(g,a())}),M(()=>s(),()=>{S(h,Zu(s()))}),pe(),fe();var m=ye(),C=ce(m);{var I=O=>{var b=P3(),x=q(b),D=Xe(()=>v(p(c),p(g)));Ms(x,{get cells(){return p(D)},shape:f}),H(b),N(O,b)};ge(C,O=>{p(u)&&p(h)&&O(I)})}N(t,m),ne()}function ll(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),o=[...ev(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&o.includes(a.value))),e}function W3(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...ll(r))}return new Set(e)}function Y3(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...ll(r))}return new Set(e)}function z3(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...ll(r))}return new Set(e)}function j3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function V3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function q3(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function K3(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),a=ll(o);a.length&&e.push(...a)}return new Set(e)}function X3(t,e){let n=new Set;if(!e.get(_.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...W3(t),...Y3(t),...z3(t)]);n=n.union(o)}return e.get(_.ANTIKNIGHT)&&(n=n.union(j3(t))),e.get(_.ANTIKING)&&(n=n.union(V3(t))),e.get(_.NONCONSECUTIVE)&&(n=n.union(q3(t))),e.get(_.DISJOINT_GROUPS)&&(n=n.union(K3(t))),n}function Z3(t,e){return[...new Set([...X3(t,e)])]}var Q3=ie('<rect class="conflict svelte-4mp6ok"></rect>'),J3=ie('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function eG(t,e){te(e,!1);const n=je(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(ln,"$gridStore",n),a=()=>ve(kr,"$globalConstraintsStore",n),s=()=>ve(sn,"$cellsStore",n),c=T(),u=T(),g=T(),h=T();B.CAGE;function f(I){return Z3(p(u),p(g)).map(x=>x.toCoords())}M(()=>r(),()=>{S(c,r().checkConflicts)}),M(()=>o(),()=>{S(u,o())}),M(()=>a(),()=>{S(g,a())}),M(()=>s(),()=>{S(h,s())}),pe(),fe();var v=ye(),m=ce(v);{var C=I=>{var O=J3();We(O,5,()=>f(p(h)),gt,(b,x)=>{var D=Q3();A(D,"width",1),A(D,"height",1),Z(()=>{A(D,"x",p(x).c),A(D,"y",p(x).r)}),N(b,D)}),H(O),N(I,O)};ge(m,I=>{p(c)&&I(C)})}N(t,v),ne()}var tG=ie('<line class="diag svelte-ylotlw"></line>'),nG=ie('<line class="antidiag svelte-ylotlw"></line>'),rG=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),oG=ie('<line class="diag svelte-ylotlw"></line>'),iG=ie('<line class="antidiag svelte-ylotlw"></line>'),aG=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),sG=ie('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function lG(t,e){te(e,!1);const n=je(),r=()=>ve(kr,"$globalConstraintsStore",n),o=()=>ve(ln,"$gridStore",n),a=T(),s=T(),c=T(),u=T(),g=T(),h=T(),f=T(),v=T(),m=T(),C=T(),I=T(),O=T(),b=0,x=0,D=0,$=0;M(()=>r(),()=>{S(a,r())}),M(()=>(p(a),_),()=>{S(s,!!p(a).get(_.POSITIVE_DIAGONAL))}),M(()=>(p(a),_),()=>{S(c,!!p(a).get(_.NEGATIVE_DIAGONAL))}),M(()=>(p(a),_),()=>{S(u,!!p(a).get(_.NEGATIVE_ANTIDIAGONAL))}),M(()=>(p(a),_),()=>{S(g,!!p(a).get(_.POSITIVE_ANTIDIAGONAL))}),M(()=>(p(a),_),()=>{S(h,!!p(a).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),M(()=>(p(a),_),()=>{S(f,!!p(a).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),M(()=>o(),()=>{S(v,o())}),M(()=>p(v),()=>{S(m,p(v).nCols)}),M(()=>p(v),()=>{S(C,p(v).nRows)}),M(()=>p(v),()=>{S(I,p(v).nCols)}),M(()=>p(v),()=>{S(O,p(v).nRows)}),pe(),fe();var k=sG(),Y=q(k);{var W=xe=>{var we=tG();A(we,"x1",b),A(we,"y1",x),Z(()=>{A(we,"x2",p(I)),A(we,"y2",p(O))}),N(xe,we)};ge(Y,xe=>{p(c)&&xe(W)})}var K=U(Y);{var oe=xe=>{var we=nG();A(we,"x1",b),A(we,"y1",x),Z(()=>{A(we,"x2",p(I)),A(we,"y2",p(O))}),N(xe,we)};ge(K,xe=>{p(u)&&xe(oe)})}var _e=U(K);{var ee=xe=>{var we=rG();A(we,"x1",b),A(we,"y1",x),Z(()=>{A(we,"x2",p(I)),A(we,"y2",p(O))}),N(xe,we)};ge(_e,xe=>{p(h)&&xe(ee)})}var le=U(_e);{var Ie=xe=>{var we=oG();A(we,"x2",$),A(we,"y1",D),Z(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),N(xe,we)};ge(le,xe=>{p(s)&&xe(Ie)})}var me=U(le);{var Ce=xe=>{var we=iG();A(we,"x2",$),A(we,"y1",D),Z(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),N(xe,we)};ge(me,xe=>{p(g)&&xe(Ce)})}var Ne=U(me);{var lt=xe=>{var we=aG();A(we,"x2",$),A(we,"y1",D),Z(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),N(xe,we)};ge(Ne,xe=>{p(f)&&xe(lt)})}H(k),N(t,k),ne()}var cG=ie('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function uG(t,e){te(e,!1);const n=je(),r=()=>ve(sn,"$cellsStore",n),o=()=>ve(mv,"$showFogStore",n),a=()=>ve(el,"$solutionStore",n),s=()=>ve(ln,"$gridStore",n),c=T(),u=T(),g=T(),h=T(),f=T(),v=T();let m=F(e,"boundingBox",8),C=F(e,"gridShape",8);function I(Ie){const me=Ie.filter(we=>we.fog);if(!p(f))return me.map(_t=>_t.toCoords());const Ce=Ie.filter(we=>we.value===p(f)[we.r][we.c]);let Ne=new Set;for(const we of Ce){const _t=p(v).getNeighboorCells(we);Ne=new Set([..._t,we])}return[...new Set(me).difference(Ne)].map(we=>we.toCoords())}M(()=>r(),()=>{S(c,r())}),M(()=>p(c),()=>{S(u,I(p(c)))}),M(()=>p(u),()=>{S(g,ii(p(u),0))}),M(()=>o(),()=>{S(h,o())}),M(()=>a(),()=>{S(f,a())}),M(()=>s(),()=>{S(v,s())}),pe(),fe();var O=cG(),b=q(O),x=q(b);H(b);var D=U(b),$=q(D);A($,"stroke-width",.5);var k=U($);A(k,"stroke-width",.375);var Y=U(k);A(Y,"stroke-width",.25);var W=U(Y);A(W,"stroke-width",.125),Io(),H(D);var K=U(D),oe=q(K);Io(),H(K);var _e=U(K),ee=q(_e),le=U(ee);A(le,"x",0),A(le,"y",0),H(_e),H(O),Z(()=>{A(x,"d",p(g)),Ot(D,"disabled",!p(h)),Ot(K,"disabled",!p(h)),A(oe,"x",m().x),A(oe,"y",m().y),A(oe,"width",m().width),A(oe,"height",m().height),A(ee,"x",m().x),A(ee,"y",m().y),A(ee,"width",m().width),A(ee,"height",m().height),A(le,"width",C().nCols),A(le,"height",C().nRows)}),N(t,O),ne()}var dG=ie('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function _G(t,e){te(e,!1);const n=je(),r=()=>ve(mv,"$showFogStore",n),o=T();let a=F(e,"gridShape",8);M(()=>r(),()=>{S(o,r())}),pe(),fe();var s=dG(),c=q(s);A(c,"x",0),A(c,"y",0),H(s),Z(()=>{A(s,"visibility",p(o)?"visible":"hidden"),A(c,"width",a().nCols),A(c,"height",a().nRows)}),N(t,s),ne()}var fG=ie('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function gG(t,e){te(e,!1);const n=T();let r=F(e,"r",8),o=F(e,"c",8),a=F(e,"val",8);const s=.8,c=400;M(()=>(Q(r()),Q(o())),()=>{S(n,Zn({r:r(),c:o()}))}),pe(),fe();var u=ye(),g=ce(u);{var h=f=>{var v=fG();A(v,"font-size",s),A(v,"font-weight",c);var m=q(v,!0);H(v),Z(()=>{A(v,"x",p(n).x),A(v,"y",p(n).y),nt(m,a())}),N(f,v)};ge(g,f=>{a()!==null&&f(h)})}N(t,u),ne()}var hG=ie('<g class="solution-layer"></g>');function vG(t,e){te(e,!1);const n=je(),r=()=>ve(el,"$solutionStore",n),o=()=>ve(Wt,"$settingsStore",n),a=()=>ve(Js,"$gameModeStore",n),s=T(),c=T(),u=T();M(()=>r(),()=>{S(s,r())}),M(()=>o(),()=>{S(c,o().showSolution)}),M(()=>a(),()=>{S(u,a())}),pe(),fe();var g=ye(),h=ce(g);{var f=v=>{var m=hG();We(m,5,()=>p(s),gt,(C,I,O)=>{var b=ye(),x=ce(b);We(x,1,()=>p(I),gt,(D,$,k)=>{gG(D,{r:O,c:k,get val(){return p($)}})}),N(C,b)}),H(m),N(v,m)};ge(h,v=>{p(s)&&p(c)&&p(u)===Ii.SETTING&&v(f)})}N(t,g),ne()}var pG=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),mG=ie('<g class="center-corner-or-edge-tool"><!><!></g>');function CG(t,e){te(e,!1);const n=T(),r=T(),o=T(),a=T(),s=T(),c=T();let u=F(e,"centerCornerOrEdgeTool",8);const g=u().cell,h=bn(u().toolId,Mt)??kh;function f(b,x){return x===B.TEXT_ONLY?b.value?b.value:"-":b.value??""}M(()=>Q(u()),()=>{S(n,u().shape??h)}),M(()=>{},()=>{S(r,g)}),M(()=>(p(n),B),()=>{var b;S(o,((b=p(n))==null?void 0:b.type)||B.CIRCLE)}),M(()=>p(n),()=>{var b;S(a,((b=p(n))==null?void 0:b.fontSize)??.2)}),M(()=>p(n),()=>{var b;S(s,((b=p(n))==null?void 0:b.fontColor)??"black")}),M(()=>p(r),()=>{S(c,p(r).r%1===.5&&p(r).c%1===.5)}),pe(),fe();var v=mG(),m=q(v);sl(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=U(m);{var I=b=>{var x=Xe(()=>f(u(),p(o))),D=Xe(()=>Math.floor(p(r).c)),$=Xe(()=>Math.floor(p(r).r));ua(b,{get value(){return p(x)},get x(){return p(D)},get y(){return p($)},position:"TL",get fontColor(){return p(s)}})},O=b=>{var x=pG(),D=q(x,!0);Z(()=>nt(D,f(u(),p(o)))),H(x),Z(()=>{A(x,"x",p(r).c),A(x,"y",p(r).r),A(x,"font-size",p(a)),A(x,"fill",p(s))}),N(b,x)};ge(C,b=>{p(c)?b(I):b(O,!1)})}H(v),N(t,v),ne()}var EG=ie("<g></g>"),IG=ie('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function bG(t,e){te(e,!1);const n=je(),r=()=>ve(ek,"$centerCornerOrEdgeToolsStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe();var a=IG();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,g=()=>p(c).element;var h=EG();We(h,5,()=>Object.entries(g()),f=>f[0],(f,v)=>{CG(f,{get centerCornerOrEdgeTool(){return p(v)[1]}})}),H(h),Z(()=>$n(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),ne()}var wG=ie('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function OG(t,e){te(e,!1);const n=je(),r=()=>ve(ln,"$gridStore",n),o=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(Kt,"$toolStore",n),s=()=>ve(sn,"$cellsStore",n),c=T(),u=T(),g=T();let h=F(e,"svgRef",12,null);function f(){for(const[Lt,Ln]of o().entries()){if(!la(Lt))continue;if(Object.entries(Ln).some(([vr,Jn])=>!qt(Jn.cell,p(u))))return!0}return!1}function v(Lt,Ln){const Xt=f(),vr=la(Ln),Jn=Xt||vr?1:.2,pr=-Jn,ar=-Jn,yi=Lt.nCols+2*Jn,$r=Lt.nRows+2*Jn;return{x:pr,y:ar,width:yi,height:$r}}function m(Lt){return`${Lt.x} ${Lt.y} ${Lt.width} ${Lt.height}`}M(()=>r(),()=>{S(c,r())}),M(()=>p(c),()=>{S(u,{nRows:p(c).nRows,nCols:p(c).nCols})}),M(()=>(p(u),a()),()=>{S(g,v(p(u),a()))}),pe(),fe();var C=wG();Z(()=>A(C,"viewBox",m(p(g))));var I=q(C);uG(I,{get boundingBox(){return p(g)},get gridShape(){return p(u)}});var O=U(I);_G(O,{get gridShape(){return p(u)}});var b=U(O);s5(b,{get grid(){return r()}});var x=U(b);zk(x,{get gridShape(){return p(u)}});var D=U(x);We(D,5,s,gt,(Lt,Ln)=>{O3(Lt,{get cell(){return p(Ln)}})}),H(D);var $=U(D);B3($,{});var k=U($);B5(k,{});var Y=U(k);i5(Y,{});var W=U(Y);Pk(W,{});var K=U(W);xk(K,{});var oe=U(K);qk(oe,{});var _e=U(oe);lG(_e,{});var ee=U(_e);Zk(ee,{});var le=U(ee);S5(le,{get boundingBox(){return p(g)}});var Ie=U(le);Ik(Ie,{});var me=U(Ie);Jk(me,{get boundingBox(){return p(g)}});var Ce=U(me);Wk(Ce,{});var Ne=U(Ce);K5(Ne,{});var lt=U(Ne);w5(lt,{});var xe=U(lt);bG(xe,{});var we=U(xe);H3(we,{});var _t=U(we);We(_t,5,s,gt,(Lt,Ln)=>{I3(Lt,{get cell(){return p(Ln)}})}),H(_t);var ct=U(_t);vG(ct,{});var Un=U(ct);eG(Un,{}),H(C),bo(C,Lt=>h(Lt),()=>h()),N(t,C),ne()}function LG(t){return SL(t)?(Mw(),!0):!1}function yG(t){return NL(t)?(qh(),!0):!1}function AG(t){return TL(t)?(Kh(),!0):!1}function Zc(t){(LG(t)||yG(t)||AG(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var xG=re('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function SG(t,e){te(e,!1);const n=je(),r=()=>ve(Cv,"$InputHandlerStore",n),o=()=>ve(oi,"$svgRefStore",n),a=T();let s=T(null);function c(v){return m=>{v&&p(a)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===p(s))&&v(m)}}M(()=>r(),()=>{S(a,r())}),pe();var u=xG();De("keydown",Fc,function(...v){Zc==null||Zc.apply(this,v)});var g=vg(()=>{var v;return c((v=p(a))==null?void 0:v.keyDown)});De("keydown",Fc,function(...v){var m;(m=p(g))==null||m.apply(this,v)});var h=vg(()=>{var v;return c((v=p(a))==null?void 0:v.keyUp)});De("keyup",Fc,function(...v){var m;(m=p(h))==null||m.apply(this,v)});var f=q(u);OG(f,{get svgRef(){return ch(),o()},set svgRef(v){_a(oi,v)},$$legacy:!0}),H(u),bo(u,v=>S(s,v),()=>p(s)),De("pointerdown",u,Bc(Xn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerDown(v)})),!0),De("pointermove",u,Bc(Xn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerMove(v)})),!0),De("pointerup",u,Bc(Xn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerUp(v)})),!0),N(t,u),ne()}var NG=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Hv(t){var e=NG();N(t,e)}var TG=re('<button class="remove-button svelte-17rdl63"><!></button>');function DG(t,e){let n=F(e,"onTrash",8,()=>{});var r=TG(),o=q(r);Hv(o),H(r),De("click",r,Xn(function(...a){var s;(s=n())==null||s.apply(this,a)})),N(t,r)}var RG=re('<input type="radio" class="radio-select-button svelte-3561wl">'),kG=re('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ia(t,e){var oe,_e;te(e,!1);const n=je(),r=()=>ve(Kt,"$toolStore",n),o=[];let a=F(e,"elementInfo",8),s=F(e,"onClick",12,void 0),c=F(e,"onTrash",8,void 0);const u=a().toolId,g=a().permanent??!1,h=((oe=a().menu)==null?void 0:oe.name)??a().toolId,f=!((_e=a().meta)!=null&&_e.categories.includes(R.GLOBAL_CONSTRAINT)),v=`label-${h}`;f&&s(()=>{Ar(u)});function m(){var me,Ce;const ee=(me=a().meta)==null?void 0:me.description,le=((Ce=a().meta)==null?void 0:Ce.usage)??yL(u);let Ie;return ee&&ee.length&&(Ie=ee),le.length&&(Ie?Ie=Ie+`

`+le:Ie=le),Ie}fe();var C=kG(),I=q(C);{var O=ee=>{var le=RG();Vt(le),A(le,"id",v),le.value=(le.__value=u)==null?"":u,Us(o,[],le,()=>r(),Ie=>_a(Kt,Ie)),N(ee,le)};ge(I,ee=>{f&&ee(O)})}var b=U(I,2);Z(()=>A(b,"title",m())),A(b,"aria-labelledby",v);var x=q(b),D=q(x),$=q(D);{var k=ee=>{DG(ee,{get onTrash(){return c()}})};ge($,ee=>{g||ee(k)})}H(D);var Y=U(D,2);A(Y,"for",v),Y.textContent=h,H(x);var W=U(x,2),K=q(W);dt(K,e,"default",{}),H(W),H(b),H(C),Z(()=>Ot(C,"checked",u===r())),De("click",b,Xn(function(...ee){var le;(le=s())==null||le.apply(this,ee)})),N(t,C),ne()}function Pv(t,e){te(e,!1);const n=je(),r=()=>ve(rt,"$localConstraintsStore",n);let o=F(e,"toolId",8),a=F(e,"elementHandlers",8);const s=()=>{tT(o());const u=r().get(o());if(!u)return;const g=dL(o()),h=_L(o(),u),f=fa(g,h);an(f)};fe();var c=Xe(()=>Zr(o(),a()));ia(t,{get elementInfo(){return p(c)},onTrash:s}),ne()}var GG=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function MG(t){var e=GG();N(t,e)}var $G=re('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function FG(t,e){te(e,!1);const n=je(),r=()=>ve(oi,"$svgRefStore",n),o=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(hr,"$currentConstraintStore",n),s=T();let c=F(e,"constraintId",8),u=F(e,"toolId",8);function g(){rT(c(),u()),r().focus()}function h(){const b=o().getConstraint(u(),c());if(!b)return;const x=rd(c(),u()),D=nd(c(),b),$=fa(x,D);an($)}M(()=>a(),()=>{var b;S(s,(b=a())==null?void 0:b.id)}),pe(),fe();var f=$G(),v=q(f),m=q(v);H(v);var C=U(v,2),I=q(C),O=q(I);Hv(O),H(I),H(C),H(f),Z(()=>{Ot(f,"active",c()===p(s)),nt(m,`ID: ${c()??""}`)}),De("click",I,Xn(h)),De("click",f,g),N(t,f),ne()}var UG=re('<div class="constraint-list svelte-w5npcu"></div>');function Bv(t,e){te(e,!1);const n=je(),r=()=>ve(rt,"$localConstraintsStore",n),o=()=>ve(Kt,"$toolStore",n),a=T();let s=F(e,"toolId",8);M(()=>(r(),Q(s())),()=>{S(a,r().get(s()))}),pe(),fe();var c=ye(),u=ce(c);{var g=h=>{var f=Xe(()=>s()===o());rl(h,{get isOpen(){return p(f)},children:(v,m)=>{var C=UG();We(C,5,()=>Object.entries(p(a)),I=>I[0],(I,O)=>{FG(I,{get constraintId(){return p(O)[0]},get toolId(){return s()}})}),H(C),N(v,C)},$$slots:{default:!0}})};ge(u,h=>{p(a)&&Object.entries(p(a)).length&&h(g)})}N(t,c),ne()}var HG=re('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function PG(t,e){te(e,!1);let n=F(e,"searchPattern",12,""),r=F(e,"showModal",8),o=T(null);M(()=>(Q(r()),p(o)),()=>{r()&&p(o)&&p(o).focus()}),pe();var a=HG(),s=U(q(a),2);Vt(s),A(s,"spellcheck",!1),bo(s,c=>S(o,c),()=>p(o)),H(a),qn(s,n),N(t,a),ne()}var BG=re('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function WG(t,e){let n=F(e,"showModal",12),r=F(e,"searchPattern",12,""),o=F(e,"title",8);Gr(t,{get title(){return o()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=BG(),u=q(c);PG(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var g=U(u,2),h=q(g),f=q(h);dt(f,e,"default",{}),H(h),H(g),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0})}var YG=re('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),zG=re('<ol class="svelte-cd45on"></ol>'),jG=re("<!> <!>",1);function VG(t,e){te(e,!1);const n=T();let r=F(e,"category",8),o=F(e,"addTool",8),a=F(e,"searchResults",8),s=T(!0);M(()=>(Q(a()),Q(r())),()=>{S(n,a().filter(h=>{var f,v;return(v=(f=h.info.meta)==null?void 0:f.categories)==null?void 0:v.includes(r())}))}),pe(),fe();var c=ye(),u=ce(c);{var g=h=>{var f=jG(),v=ce(f);Xr(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(C){S(s,C)},$$legacy:!0});var m=U(v,2);rl(m,{get isOpen(){return p(s)},children:(C,I)=>{var O=zG();We(O,5,()=>p(n),gt,(b,x)=>{let D=()=>p(x).key,$=()=>p(x).info;var k=YG(),Y=q(k),W=q(Y,!0);H(Y),H(k),Z(()=>{var K;A(Y,"title",(K=$().meta)==null?void 0:K.description),nt(W,D())}),De("click",Y,()=>{o()(D())}),N(b,k)}),H(O),N(C,O)},$$slots:{default:!0}}),N(h,f)};ge(u,h=>{p(n).length&&h(g)})}N(t,c),ne()}function qG(t,e){te(e,!1);const n=T();let r=F(e,"searchPattern",8,""),o=F(e,"addTool",8),a=F(e,"categories",8),s=F(e,"filterFunc",8),c=F(e,"elementHandlers",8);M(()=>(Q(r()),Q(s()),Q(c())),()=>{S(n,cL(r(),s(),c()))}),pe(),fe();var u=ye(),g=ce(u);We(g,1,a,gt,(h,f)=>{VG(h,{get category(){return p(f)},get searchResults(){return p(n)},get addTool(){return o()}})}),N(t,u),ne()}var KG=re('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function cl(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8);var o=KG();A(o,"tabindex",0);var a=q(o),s=q(a);dt(s,e,"add-button",{}),H(a);var c=U(a,2),u=q(c),g=q(u);dt(g,e,"title-icon",{}),H(u);var h=U(u);H(c);var f=U(c,2),v=q(f);H(f),H(o),Z(()=>{nt(h,` ${r()??""}`),Ot(v,"open",n())}),De("click",o,()=>n(!n())),De("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,o)}var XG=re('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function ZG(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8),o=F(e,"showModal",12);function a(){o(!o())}cl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=XG();De("click",u,Xn(()=>a())),N(s,u)},"title-icon":(s,c)=>{var u=ye(),g=ce(u);dt(g,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var QG=re('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),JG=re('<div class="panel-container svelte-hixu4"><!> <!></div>');function ul(t,e){let n=F(e,"isOpen",8,!0);var r=JG(),o=q(r);dt(o,e,"panel-header",{});var a=U(o,2);rl(a,{get isOpen(){return n()},children:(s,c)=>{var u=QG(),g=q(u);dt(g,e,"panel-content",{}),H(u),N(s,u)},$$slots:{default:!0}}),H(r),N(t,r)}var eM=re("<!> <!>",1);function bd(t,e){te(e,!1);let n=F(e,"categories",8),r=F(e,"title",8),o=F(e,"onAddTool",8),a=F(e,"elementHandlerFilterFunc",8),s=F(e,"elementHandlers",8),c=T(!0),u=T(!1),g=T("");const h=f=>{S(u,!1),S(c,!0),o()(f)};fe(),ul(t,{get isOpen(){return p(c)},set isOpen(f){S(c,f)},$$slots:{"panel-header":(f,v)=>{var m=eM(),C=ce(m);ZG(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(O){S(c,O)},get showModal(){return p(u)},set showModal(O){S(u,O)},$$slots:{"title-icon":(O,b)=>{var x=ye(),D=ce(x);dt(D,e,"title-icon",{}),N(O,x)}},$$legacy:!0});var I=U(C,2);WG(I,{get title(){return r()},get showModal(){return p(u)},set showModal(O){S(u,O)},get searchPattern(){return p(g)},set searchPattern(O){S(g,O)},children:(O,b)=>{qG(O,{get searchPattern(){return p(g)},get categories(){return n()},get filterFunc(){return a()},addTool:h,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(f,m)},"panel-content":(f,v)=>{var m=ye(),C=ce(m);dt(C,e,"panel-content",{}),N(f,m)}},$$legacy:!0}),ne()}var tM=re("<!> <!>",1);function nM(t,e){te(e,!1);const n=je(),r=()=>ve(rt,"$localConstraintsStore",n),o=T();let a=F(e,"elementHandlers",8);const s=[R.COSMETIC_TOOL],c=u=>{zh(u),Ar(u)};M(()=>(r(),R),()=>{S(o,(u,g)=>{var v;const h=r().has(u);return!!((v=g.meta)!=null&&v.categories.includes(R.COSMETIC_TOOL))&&!h})}),pe(),fe(),bd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,g)=>{MG(u)},"panel-content":(u,g)=>{var h=ye(),f=ce(h);We(f,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>p(m)[0];var I=ye(),O=ce(I);{var b=x=>{var D=tM(),$=ce(D);Pv($,{get toolId(){return C()},get elementHandlers(){return a()}});var k=U($,2);Bv(k,{get toolId(){return C()}}),N(x,D)};ge(O,x=>{nO(C())&&x(b)})}N(v,I)}),N(u,h)}}}),ne()}var Wv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Wv||{});const ws=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Yv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function rM(t,e){kr.update(n=>n.setConstraint(t,e))}function oM(t){kr.update(e=>e.removeConstraint(t))}function Kg(t){t.type===Wv.REMOVE_GLOBAL_CONSTRAINT?oM(t.payload):rM(t.payload.tool,t.payload.value)}function Eu(t,e){return{execute:()=>{Kg(t)},unExecute:()=>{Kg(e)}}}var iM=re('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function aM(t,e){let n=F(e,"value",8,!1);var r=iM(),o=q(r);Vt(o),H(r),Z(()=>gh(o,n())),N(t,r)}function sM(t,e){te(e,!1);let n=F(e,"toolId",8),r=F(e,"value",8,!1),o=F(e,"elementHandlers",8);const a=()=>{const u=ws(n(),!r()),g=ws(n(),r()),h=Eu(u,g);an(h)},s=()=>{const u=Yv(n()),g=ws(n(),r()),h=Eu(u,g);an(h)};fe();var c=Xe(()=>Zr(n(),o()));ia(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,g)=>{aM(u,{get value(){return r()}})},$$slots:{default:!0}}),ne()}var lM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function cM(t){var e=lM();N(t,e)}function uM(t,e){te(e,!1);const n=je(),r=()=>ve(kr,"$globalConstraintsStore",n),o=T();let a=F(e,"elementHandlers",8);const s=oO,c=u=>{const g=ws(u,!0),h=Yv(u),f=Eu(g,h);an(f)};M(()=>r(),()=>{S(o,(u,g)=>{var v;const h=!!((v=g.meta)!=null&&v.categories.includes(R.GLOBAL_CONSTRAINT)),f=r().has(u);return h&&!f})}),pe(),fe(),bd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,g)=>{cM(u)},"panel-content":(u,g)=>{var h=ye(),f=ce(h);We(f,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];sM(v,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),N(u,h)}}}),ne()}var dM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function _M(t){var e=dM();N(t,e)}var fM=re("<!> <!>",1),gM=re("<!> <!> <!> <!>",1);function hM(t,e){te(e,!1);const n=je(),r=()=>ve(rt,"$localConstraintsStore",n),o=T();let a=F(e,"elementHandlers",8);const s=rO,c=u=>{zh(u),Ar(u)};M(()=>(r(),R),()=>{S(o,(u,g)=>{var v;const h=r().has(u);return!!((v=g.meta)!=null&&v.categories.includes(R.LOCAL_CONSTRAINT))&&!h})}),pe(),fe(),bd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,g)=>{_M(u)},"panel-content":(u,g)=>{var h=gM(),f=ce(h),v=Xe(()=>Zr(_.GIVEN,a()));ia(f,{get elementInfo(){return p(v)}});var m=U(f,2),C=Xe(()=>Zr(_.REGIONS,a()));ia(m,{get elementInfo(){return p(C)}});var I=U(m,2),O=Xe(()=>Zr(_.FOG,a()));ia(I,{get elementInfo(){return p(O)}});var b=U(I,2);We(b,1,()=>r().entries(),([x,D])=>x,(x,D)=>{let $=()=>p(D)[0];var k=ye(),Y=ce(k);{var W=K=>{var oe=fM(),_e=ce(oe);Pv(_e,{get toolId(){return $()},get elementHandlers(){return a()}});var ee=U(_e,2);Bv(ee,{get toolId(){return $()}}),N(K,oe)};ge(Y,K=>{Jw($())&&K(W)})}N(x,k)}),N(u,h)}}}),ne()}var vM=re('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Qc(t,e){te(e,!1);const n=T();let r=F(e,"value",8),o=F(e,"onChangeCb",8,void 0),a=T(void 0);function s(m){const C=zc(m);C&&o()&&o()(C)}M(()=>Q(r()),()=>{S(n,r())}),M(()=>(p(n),zc),()=>{fu(p(n))&&S(a,zc(p(n)))}),pe(),fe();var c=vM(),u=q(c);const g=Xe(()=>Jh(p(n)));var h=q(u);Vt(h),H(u);var f=U(u,2),v=U(q(f),2);Vt(v),A(v,"spellcheck",!1),A(v,"maxlength",30),H(f),H(c),Z(()=>{A(u,"style",`--choosen-color: ${p(a)??""}`),Ot(u,"transparent",p(g))}),qn(h,()=>p(n),m=>S(n,m)),De("change",h,()=>s(p(n))),qn(v,()=>p(n),m=>S(n,m)),De("input",v,()=>s(p(n))),N(t,c),ne()}var pM=re('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function aa(t,e){let n=F(e,"name",8);var r=pM(),o=q(r),a=q(o,!0);H(o);var s=U(o,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var mM=re('<input class="control-slider svelte-1rsuho6" type="range">');function CM(t,e){te(e,!1);let n=F(e,"min",8),r=F(e,"max",8),o=F(e,"value",12),a=F(e,"step",24,()=>(r()-n())/10),s=F(e,"onChangeCb",8,void 0),c=F(e,"onInputCb",8,void 0);fe();var u=mM();Vt(u),Z(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",a())}),qn(u,o),De("change",u,()=>{s()&&s()(o())}),De("input",u,()=>{c()&&c()(o())}),N(t,u),ne()}function qr(t,e){let n=F(e,"name",8),r=F(e,"value",12),o=F(e,"min",8),a=F(e,"max",8),s=F(e,"step",24,()=>(a()-o())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);aa(t,{get name(){return`${n()??""}: ${r()??""}`},children:(g,h)=>{CM(g,{get min(){return o()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(f){r(f)},$$legacy:!0})},$$slots:{default:!0}})}var EM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function IM(t){var e=EM();N(t,e)}var bM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function wM(t){var e=bM();N(t,e)}var OM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function LM(t){var e=OM();N(t,e)}var yM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function AM(t){var e=yM();N(t,e)}var xM=re('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function SM(t,e){te(e,!1);const n=[];let r=F(e,"value",8),o=F(e,"selectedShape",12),a=F(e,"title",8),s=F(e,"updateShapeCb",8,void 0);fe();var c=xM(),u=q(c);Vt(u);var g,h=U(u,2);dt(h,e,"default",{}),H(c),Z(()=>{A(c,"title",a()),Ot(c,"active",r()===o()),g!==(g=r())&&(u.value=(u.__value=r())==null?"":r())}),Us(n,[],u,()=>(r(),o()),o),De("change",u,()=>s()&&s()(r())),N(t,c),ne()}var NM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function TM(t){var e=NM(),n=q(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),H(e),N(t,e)}var DM=re('<div class="icon-wrapper svelte-18euf14"><!></div>'),RM=re('<div class="radio-container svelte-18euf14"></div>');function kM(t,e){te(e,!1);let n=F(e,"name",8),r=F(e,"selectedShape",8),o=F(e,"possibleShapes",8),a=F(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,LM],[B.ELLIPSE,TM],[B.SQUARE,wM],[B.RECTANGLE,IM],[B.POLYGON,AM]]);fe(),aa(t,{get name(){return n()},children:(c,u)=>{var g=RM();We(g,5,o,gt,(h,f)=>{SM(h,{get title(){return p(f)},get value(){return p(f)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(v,m)=>{var C=ye(),I=ce(C);{var O=b=>{var x=DM(),D=q(x);lh(D,()=>s.get(p(f)),($,k)=>{k($,{})}),H(x),N(b,x)};ge(I,b=>{s.has(p(f))&&b(O)})}N(v,C)},$$slots:{default:!0}})}),H(g),N(c,g)},$$slots:{default:!0}}),ne()}var GM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function MM(t){var e=GM();N(t,e)}var $M=re('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),FM=re("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function UM(t,e){te(e,!1);const n=je(),r=()=>ve(Kt,"$toolStore",n),o=()=>ve(hr,"$currentConstraintStore",n),a=T(),s=T(),c=T();let u=T(!0),g=F(e,"elementHandlers",8);function h(O,b){const x=(O==null?void 0:O.shape)??(b?ou(b):void 0);return Kc(x),x}function f(O,b){p(c)&&(lw(c,p(c)[O]=b),Kc(p(c)))}function v(){p(s)&&(S(c,ou(p(s))),Kc(p(c)))}function m(O){return O&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function C(O){return O&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function I(O){return O&&[B.ELLIPSE,B.RECTANGLE].includes(O)}M(()=>(r(),Q(g())),()=>{S(a,Zr(r(),g()))}),M(()=>p(a),()=>{S(s,p(a).shape)}),M(()=>(o(),p(s)),()=>{var O;S(c,h(((O=o())==null?void 0:O.constraint)??null,p(s)))}),pe(),fe(),ul(t,{get isOpen(){return p(u)},set isOpen(O){S(u,O)},$$slots:{"panel-header":(O,b)=>{cl(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(x){S(u,x)},$$slots:{"title-icon":(x,D)=>{MM(x)}},$$legacy:!0})},"panel-content":(O,b)=>{var x=ye(),D=ce(x);{var $=k=>{var Y=FM(),W=ce(Y);{var K=$e=>{var be=$M();De("click",be,v),N($e,be)};ge(W,$e=>{gO(p(s))&&$e(K)})}var oe=U(W,2);{var _e=$e=>{kM($e,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:be=>f("type",be)})};ge(oe,$e=>{var be;p(s).allowedTypes&&p(s).allowedTypes.length&&((be=p(c))!=null&&be.type)&&$e(_e)})}var ee=U(oe,2);{var le=$e=>{var be=Xe(()=>p(s).n.lb??3),Ge=Xe(()=>p(s).n.ub??10);qr($e,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(be)},get max(){return p(Ge)},step:1,onChangeCb:Me=>f("n",Me)})};ge(ee,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.n)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.n)!=null&&Me.editable)&&C(p(c).type)&&$e(le)})}var Ie=U(ee,2);{var me=$e=>{var be=Xe(()=>p(s).r.lb??0),Ge=Xe(()=>p(s).r.ub??1),Me=Xe(()=>p(s).r.step??.05);qr($e,{name:"Radius",get value(){return p(c).r},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("r",St)})};ge(Ie,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.r)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.r)!=null&&Me.editable)&&m(p(c).type)&&$e(me)})}var Ce=U(Ie,2);{var Ne=$e=>{var be=Xe(()=>p(s).width.lb??0),Ge=Xe(()=>p(s).width.ub??1),Me=Xe(()=>p(s).width.step??.05);qr($e,{name:"Width",get value(){return p(c).width},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("width",St)})};ge(Ce,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.width)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.width)!=null&&Me.editable)&&I(p(c).type)&&$e(Ne)})}var lt=U(Ce,2);{var xe=$e=>{var be=Xe(()=>p(s).height.lb??0),Ge=Xe(()=>p(s).height.ub??1),Me=Xe(()=>p(s).height.step??.05);qr($e,{name:"Height",get value(){return p(c).height},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("height",St)})};ge(lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.height)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.height)!=null&&Me.editable)&&I(p(c).type)&&$e(xe)})}var we=U(lt,2);{var _t=$e=>{var be=Xe(()=>p(s).angle.lb??0),Ge=Xe(()=>p(s).angle.ub??360),Me=Xe(()=>p(s).angle.step??15);qr($e,{name:"Angle",get value(){return p(c).angle},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("angle",St)})};ge(we,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.angle)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.angle)!=null&&Me.editable)&&$e(_t)})}var ct=U(we,2);{var Un=$e=>{var be=Xe(()=>p(s).inset.lb??0),Ge=Xe(()=>p(s).inset.ub??.5),Me=Xe(()=>p(s).inset.step??.01);qr($e,{name:"Inset",get value(){return p(c).inset},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("inset",St)})};ge(ct,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.inset)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.inset)!=null&&Me.editable)&&$e(Un)})}var Lt=U(ct,2);{var Ln=$e=>{aa($e,{name:"Stroke",children:(be,Ge)=>{Qc(be,{get value(){return p(c).stroke},onChangeCb:Me=>f("stroke",Me)})},$$slots:{default:!0}})};ge(Lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.stroke)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.stroke)!=null&&Me.editable)&&$e(Ln)})}var Xt=U(Lt,2);{var vr=$e=>{var be=Xe(()=>p(s).strokeWidth.lb??0),Ge=Xe(()=>p(s).strokeWidth.ub??.8),Me=Xe(()=>p(s).strokeWidth.step??.01);qr($e,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("strokeWidth",St)})};ge(Xt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeWidth)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeWidth)!=null&&Me.editable)&&$e(vr)})}var Jn=U(Xt,2);{var pr=$e=>{var be=Xe(()=>p(s).strokeDasharray.lb??0),Ge=Xe(()=>p(s).strokeDasharray.ub??1),Me=Xe(()=>p(s).strokeDasharray.step??.01);qr($e,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("strokeDasharray",St)})};ge(Jn,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeDasharray)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeDasharray)!=null&&Me.editable)&&$e(pr)})}var ar=U(Jn,2);{var yi=$e=>{aa($e,{name:"Fill",children:(be,Ge)=>{Qc(be,{get value(){return p(c).fill},onChangeCb:Me=>f("fill",Me)})},$$slots:{default:!0}})};ge(ar,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fill)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fill)!=null&&Me.editable)&&$e(yi)})}var $r=U(ar,2);{var ko=$e=>{aa($e,{name:"Font Color",children:(be,Ge)=>{Qc(be,{get value(){return p(c).fontColor},onChangeCb:Me=>f("fontColor",Me)})},$$slots:{default:!0}})};ge($r,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fontColor)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fontColor)!=null&&Me.editable)&&$e(ko)})}N(k,Y)};ge(D,k=>{p(s)&&k($)})}N(O,x)}},$$legacy:!0}),ne()}var HM=re('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function wa(t,e){let n=F(e,"clickCb",8),r=F(e,"title",8);var o=HM(),a=q(o),s=q(a);dt(s,e,"default",{}),H(a),H(o),Z(()=>A(o,"title",r())),De("click",o,Xn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,o)}var PM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function BM(t){var e=PM();N(t,e)}var WM=re('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),YM=re('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),zM=re('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function jM(t,e){te(e,!1);const n=je(),r=()=>ve(Rr,"$puzzleMetaStore",n),o=()=>ve(kr,"$globalConstraintsStore",n),a=()=>ve(rt,"$localConstraintsStore",n);let s=F(e,"showModal",12,!1),c=T(""),u=T(""),g=T(""),h=T(""),f=T("");function v(){s(!1)}function m(){const b=p(u)?C(p(u)):["Anonymous"],D={title:p(c)?p(c):"Sudoku",authors:b,ruleset:p(g),ctcYoutubeUrl:p(h),ctcUrl:p(f)};J2(D),s(!1)}function C(b){return b.split(/\s*[;]\s*/)}function I(){var Y,W,K,oe;let b="";const x=Mt,D=o();!!D.get(_.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[_e,ee]of D.entries())if(_e!==_.SUDOKU_RULES_DO_NOT_APPLY&&ee){const le=x[_e],Ie=((Y=le.menu)==null?void 0:Y.name)??le.toolId,me=(W=le.meta)==null?void 0:W.description;b+=`**${Ie}**: ${me}

`}const k=a();for(const[_e,ee]of k.entries())if(Object.keys(ee).length>0){const Ie=x[_e],me=((K=Ie.menu)==null?void 0:K.name)??Ie.toolId,Ce=(oe=Ie.meta)==null?void 0:oe.description;b+=`**${me}**: ${Ce}

`}return b.trim()}function O(){const b=I();S(g,b)}M(()=>(Q(s()),r(),ys),()=>{if(!s()){const b=r().authors;S(c,r().title??""),S(u,b?ys(b,"; ","; "):""),S(g,r().ruleset??""),S(h,r().ctcYoutubeUrl??""),S(f,r().ctcUrl??"")}}),pe(),fe(),Gr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(b){s(b)},children:(b,x)=>{var D=zM(),$=q(D);Xr($,{title:"Title"});var k=U($,2);Vt(k);var Y=U(k,2);Xr(Y,{title:"Authors"});var W=U(Y,2);Vt(W);var K=U(W,2);Xr(K,{title:"Ruleset",children:(Ce,Ne)=>{var lt=WM();De("click",lt,O),N(Ce,lt)},$$slots:{default:!0}});var oe=U(K,2);pw(oe),A(oe,"rows",8);var _e=U(oe,2);Xr(_e,{title:"CTC Link"});var ee=U(_e,2);Vt(ee);var le=U(ee,2);Xr(le,{title:"CTC Youtube Link"});var Ie=U(le,2);Vt(Ie);var me=U(Ie,2);tl(me,{children:(Ce,Ne)=>{var lt=YM(),xe=ce(lt),we=U(xe,2);De("click",xe,m),De("click",we,v),N(Ce,lt)},$$slots:{default:!0}}),H(D),qn(k,()=>p(c),Ce=>S(c,Ce)),qn(W,()=>p(u),Ce=>S(u,Ce)),qn(oe,()=>p(g),Ce=>S(g,Ce)),qn(ee,()=>p(f),Ce=>S(f,Ce)),qn(Ie,()=>p(h),Ce=>S(h,Ce)),N(b,D)},$$slots:{default:!0},$$legacy:!0}),ne()}var VM=re("<!> <!>",1);function qM(t){let e=T(!1);function n(){S(e,!0)}var r=VM(),o=ce(r);wa(o,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{BM(s)},$$slots:{default:!0}});var a=U(o,2);jM(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var KM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function XM(t){var e=KM();N(t,e)}var ZM=re('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function QM(t,e){te(e,!1);let n=T(null),r=T(null);function o(){var a;(a=p(n))==null||a.click()}M(()=>(p(r),Ns),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const g=JSON.parse(u),h=Q2(g);console.log(h),iT(h),Ns()}},s.onerror=function(){alert(s.error)}}}),pe(),fe(),wa(t,{title:"Open Puzzle",clickCb:o,children:(a,s)=>{var c=ZM(),u=ce(c);XM(u);var g=U(u,2);bo(g,h=>S(n,h),()=>p(n)),Sw(g,()=>p(r),h=>S(r,h)),N(a,c)},$$slots:{default:!0}}),ne()}var JM=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function e8(t){var e=JM();N(t,e)}var t8=re('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Xg(t,e){te(e,!1);let n=F(e,"name",8),r=F(e,"min",8),o=F(e,"max",8),a=F(e,"value",12),s=F(e,"step",24,()=>(o()-r())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);fe();var g=t8(),h=q(g),f=q(h);H(h);var v=U(h,2);Vt(v),H(g),Z(()=>{nt(f,`${n()??""}: ${a()??""}`),A(v,"min",r()),A(v,"max",o()),A(v,"step",s())}),qn(v,a),De("change",v,()=>{c()&&c()(a())}),De("input",v,()=>{u()&&u()(a())}),N(t,g),ne()}var n8=re('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),r8=re('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function o8(t,e){te(e,!1);let n=F(e,"showModal",12,!1);const r=4,o=20;let a=T(9),s=T(9),c=T(""),u=T($t.range(1,10));function g(){n(!1)}function h(){Ns(),oT(p(s),p(a)),n(!1)}function f(C){return C.map(O=>String(O)).join(",")}function v(){const C=Math.min(Math.max(p(s),p(a)),9);S(u,$t.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&S(u,C.split(",").map(Number))}fe(),Gr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var O=r8(),b=q(O);Xg(b,{name:"Width",min:r,max:o,step:1,onInputCb:v,get value(){return p(a)},set value(W){S(a,W)},$$legacy:!0});var x=U(b,2);Xg(x,{name:"Height",min:r,max:o,step:1,onInputCb:v,get value(){return p(s)},set value(W){S(s,W)},$$legacy:!0});var D=U(x,2),$=Xe(()=>`Allowed Digits: ${f(p(u))}`);Xr(D,{get title(){return p($)}});var k=U(D,2);Vt(k),Z(()=>A(k,"placeholder",f(p(u)))),k.disabled=!0;var Y=U(k,2);tl(Y,{children:(W,K)=>{var oe=n8(),_e=ce(oe),ee=U(_e,2);De("click",_e,h),De("click",ee,g),N(W,oe)},$$slots:{default:!0}}),H(O),qn(k,()=>p(c),W=>S(c,W)),De("input",k,()=>m(p(c))),N(C,O)},$$slots:{default:!0},$$legacy:!0}),ne()}var i8=re("<!> <!>",1);function a8(t){let e=T(!1);function n(){S(e,!0)}var r=i8(),o=ce(r);wa(o,{title:"New Puzzle",clickCb:n,children:(s,c)=>{e8(s)},$$slots:{default:!0}});var a=U(o,2);o8(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var s8=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function l8(t){var e=s8();N(t,e)}var c8=re('<button class="modal-button">Cancel</button>'),u8=re('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function d8(t,e){te(e,!1);const n=je(),r=()=>ve(oi,"$svgRefStore",n),o=()=>ve(Ca,"$puzzleStore",n),a=()=>ve(Rr,"$puzzleMetaStore",n),s=T();let c=F(e,"showModal",12,!1);function u(O){const b=getComputedStyle(O);let x="";for(let D of b){const $=b.getPropertyValue(D);$&&(x+=`${D}:${$};`)}return x}function g(O){const b=O.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(O));const x=O.childNodes;for(let D=0;D<x.length;D++){const $=x[D];if($ instanceof Element){const k=g($);b.replaceChild(k,b.childNodes[D])}}return b}function h(O,b="download.png"){const x=g(O),$=new XMLSerializer().serializeToString(x),k=new Image,Y=new Blob([$],{type:"image/svg+xml;charset=utf-8"}),W=URL.createObjectURL(Y);k.onload=()=>{const K=O.getBoundingClientRect(),oe=K.width,_e=K.height,ee=document.createElement("canvas"),le=window.devicePixelRatio||1;ee.width=oe*le,ee.height=_e*le;const Ie=ee.getContext("2d");Ie&&(Ie.scale(le,le),Ie.drawImage(k,0,0,oe,_e),ee.toBlob(me=>{if(!me)return;const Ce=URL.createObjectURL(me),Ne=document.createElement("a");Ne.href=Ce,Ne.download=b,Ne.click(),URL.revokeObjectURL(Ce)}))},k.src=W}function f(O,b="download.svg"){const x=g(O);let $=new XMLSerializer().serializeToString(x);$.includes("<?xml")||($=`<?xml version="1.0" standalone="no"?>\r
`+$);const k=new Blob([$],{type:"image/svg+xml"}),Y=URL.createObjectURL(k),W=document.createElement("a");W.href=Y,W.download=b,W.click(),URL.revokeObjectURL(Y)}const v=()=>{const O=Z2(o());return JSON.stringify(O,null,2)},m=()=>{function O(D,$,k){var Y=document.createElement("a"),W=new Blob([D],{type:k});Y.href=URL.createObjectURL(W),Y.download=$,Y.click(),URL.revokeObjectURL(Y.href)}const b=v(),x=gu(a());O(b,`${x}.json`,"text/plain")};function C(){c(!1)}const I=1;M(()=>r(),()=>{S(s,r())}),pe(),fe(),Gr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(O){c(O)},children:(O,b)=>{var x=u8(),D=q(x),$=q(D),k=q($),Y=U(k,2),W=U(Y,2);H($);var K=U($,2),oe=U(q(K),2),_e=q(oe);A(_e,"width",400*I),A(_e,"height",300*I),H(oe),H(K),H(D);var ee=U(D,2);tl(ee,{children:(le,Ie)=>{var me=c8();De("click",me,C),N(le,me)},$$slots:{default:!0}}),H(x),De("click",k,m),De("click",Y,()=>h(p(s))),De("click",W,()=>f(p(s))),N(O,x)},$$slots:{default:!0},$$legacy:!0}),ne()}var _8=re("<!> <!>",1);function f8(t){let e=T(!1);function n(){S(e,!0)}var r=_8(),o=ce(r);wa(o,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{l8(s)},$$slots:{default:!0}});var a=U(o,2);d8(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var g8=re("<!> <!>",1);function h8(t){let e=T(!1);function n(){S(e,!0)}var r=g8(),o=ce(r);wa(o,{title:"Settings",clickCb:n,children:(s,c)=>{Gv(s)},$$slots:{default:!0}});var a=U(o,2);kv(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var v8=re('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function p8(t){var e=v8(),n=q(e);a8(n);var r=U(n,2);f8(r);var o=U(r,2);QM(o,{});var a=U(o,2);qM(a);var s=U(a,2);h8(s),H(e),N(t,e)}var m8=re('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function C8(t,e){te(e,!1);let n=T(!1);function r(){const o=st(ln),a=[];for(let s=0;s<o.nRows;s++){const c=[];for(let u=0;u<o.nCols;u++){const g=o.getCell(s,u);if(!g)continue;const h=g.value;c.push(h)}a.push(c)}fd(a)}fe(),ul(t,{get isOpen(){return p(n)},set isOpen(o){S(n,o)},$$slots:{"panel-header":(o,a)=>{cl(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){S(n,s)},$$legacy:!0})},"panel-content":(o,a)=>{var s=m8();De("click",s,r),N(o,s)}},$$legacy:!0}),ne()}const E8={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function I8(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],a=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[a,o]};if(o==="<"||o==="<=")return{upper_bound:[a,o]}}if(r=n.exec(t),r){const o=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,o==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function b8(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function w8(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function zv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function O8(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=b8(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=w8(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const a=I8(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=zv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var de=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t))(de||{});function Tt(t,e){return`${e}[${t.r},${t.c}]`}function Oi(t,e){return t.map(r=>Tt(r,e))}function ke(t,e){return"["+Oi(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ze(t){return t.map(n=>Oe(n))}function L8(t){return`values_grid[${t.r},${t.c}]`}function dl(t){return t.map(e=>L8(e))}function Co(t){return`constraint alldifferent([${t.join(",")}]);
`}function At(t,e){return t&&(t=`
% ${e}
`+t),t}function wd(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o);r.push(a)}return r}function Od(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o),s="["+ze(a).join(",")+"]";r.push(s)}return r}function _l(t,e,n,r){let o="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);o+=c}return o}class y8{constructor(){he(this,"model_str","");he(this,"used_vars",new Set)}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=E8){const o=O8(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let a="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],g=c.lower_bound[1];a+=`constraint ${n} ${g} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],g=c.upper_bound[1];a+=`constraint ${n} ${g} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return o.type==="var_list"?null:[a,n]}}function A8(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const O=e[I].trim(),b=O.match(r),x=O.match(o),D=O.match(a);if(b||x||D){s={name:(b||x||D)[1],startLine:I,content:[e[I]]},c=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u+=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length,c===0&&u===0&&O.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let $=s.startLine;for(;$>0&&e[$-1].trim().startsWith("%");)$-=1;n[s.name].startLine=$,s=null}}const g=new Set;function h(I){const O=[];for(const b of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${b}\\s*\\(`,"g").test(I)&&O.push(b);return O}for(const I of e)h(I).forEach(b=>g.add(b));const f=Object.values(n).filter(I=>!g.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));f.sort((I,O)=>O.start-I.start);const v=[...e];for(const I of f)v.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of v)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function Zg(t){let e=t,n=e.length;for(;e=A8(e),e.length!=n;)n=e.length;return e}const Qg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function x8(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function S8(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),o=Math.max(...n);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${o}: board_regions;
`);for(const a of e.getAllCells()){const s=Tt(a,"board_regions");a.region!==null?t.add(`constraint ${s} = ${a.region};
`):t.add(`constraint ${s} = ${r-1};
`)}}}function N8(t,e){const r=t.grid.getPositiveDiagonal(),o=ze(r);let a=Co(o);return a=`
% Positive Diagonal Constraint
`+a,a}function T8(t,e){const r=t.grid.getNegativeDiagonal(),o=ze(r);let a=Co(o);return a=`
% Negative Diagonal Constraint
`+a,a}function D8(t,e){const r=t.grid.getPositiveDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function R8(t,e){const r=t.grid.getNegativeDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function k8(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,g]=[c.r,c.c];for(let h=0;h<u;h++){const f=n.getCell(h,g),v=n.getCell(u,g+(u-h));if(!f||!v)continue;const m=Oe(f),C=Oe(v),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=O}}return a}function G8(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,g]=[c.r,c.c];for(let h=0;h<u;h++){const f=n.getCell(h,g),v=n.getCell(u,g-(u-h));if(!f||!v)continue;const m=Oe(f),C=Oe(v),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=O}}return a}function M8(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let a=0;a<o;a++){const s=n.getDisjointGroup(a),g=`constraint alldifferent(${`[${ze(s).join(",")}]`});
`;r+=g}return r}function $8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getNeighboorCells(o).filter(f=>f.r+f.c>=o.r+o.c),c=Oe(o),g=`[${ze(s).join(",")}]`,h=`constraint different_from_group_p(${c}, ${g});
`;r+=h}return r}function F8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getCellsByKnightMove(o).filter(f=>f.r>=o.r||f.c>=o.c),c=Oe(o),g=`[${ze(s).join(",")}]`,h=`constraint different_from_group_p(${c}, ${g});
`;r+=h}return r}function U8(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=At(n,`${e}`),n}function H8(t,e){let n="";return n+=`constraint tango_p(board);
`,n=At(n,`${e}`),n}function*ao(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function P8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of ao(n)){const s=Oe(o),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function B8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of ao(n)){const s=Oe(o),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function W8(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getRow(o.r),c=`[${ze(a).join(",")}]`,u=o.c+1,g=`constraint indexing_column_p(${c}, ${u});
`;r+=g}return r}function Y8(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function z8(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function j8(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=At(n,`${e}`),n}function Jc(t,e){const n=t.grid,o=t.localConstraints.get(_.XV);if(!(e===_.ALL_V_GIVEN||e===_.ALL_X_GIVEN||e===_.ALL_XV_GIVEN))return"";const a=[];if(o)for(const c of Object.values(o)){const u=c.cells,g=new Set(u.map(f=>n.getCell(f.r,f.c)).filter(f=>!!f)),h=c.value;(e===_.ALL_V_GIVEN&&(h==="v"||h==="V")||e===_.ALL_X_GIVEN&&(h==="x"||h==="X")||e===_.ALL_XV_GIVEN)&&a.push(g)}let s="";for(const[c,u]of ao(n)){if(a.find(v=>v.has(c)&&v.has(u)))continue;const h=Oe(c),f=Oe(u);if(e===_.ALL_V_GIVEN){const v=`constraint ${h} + ${f} != 5;
`;s+=v}else if(e===_.ALL_X_GIVEN){const v=`constraint ${h} + ${f} != 10;
`;s+=v}else{const v=`constraint ${h} + ${f} != 5 /\\ (${h} + ${f} != 10);
`;s+=v}}return s=At(s,`${e}`),s}function ai(t,e){const n=[];if(e)for(const r of Object.values(e)){const o=r.cells,a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function V8(t,e){const n=t.grid,o=t.localConstraints.get(_.XY_DIFFERENCES),a=ai(n,o);let s="";for(const[c,u]of ao(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const h=Oe(c),f=Oe(u);let v="";if(c.r==u.r){const I=n.getRow(c.r)[0];v=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];v=Oe(I)}if(!v)continue;const m=`constraint abs(${h} - ${f}) != ${v};
`;s+=m}return s=At(s,`${e}`),s}function q8(t,e){const n=t.grid,r=t.localConstraints,o=r.get(_.DIFFERENCE),a=r.get(_.RATIO);let s=ai(n,o);s=[...s,...ai(n,a)];let c=[];o&&(c=Object.values(o).map(h=>h.value).map(h=>h||"1"));const u=[...new Set(c)];let g="";for(const[h,f]of ao(n)){if(s.find(I=>I.has(h)&&I.has(f)))continue;const m=Oe(h),C=Oe(f);for(const I of u){const O=parseInt(I),b=`constraint abs(${m} - ${C}) != ${O};
`;g+=b}}return g=At(g,`${e}`),g}function K8(t,e){const n=t.grid,r=t.localConstraints,o=r.get(_.RATIO),a=r.get(_.DIFFERENCE);let s=ai(n,o);s=[...s,...ai(n,a)];let c=[];o&&(c=Object.values(o).map(h=>h.value).map(h=>h||"2"));const u=[...new Set(c)];let g="";for(const[h,f]of ao(n)){if(s.find(I=>I.has(h)&&I.has(f)))continue;const m=Oe(h),C=Oe(f);for(const I of u){const O=parseInt(I),b=`constraint not ratio_p(${m}, ${C}, ${O});
`;g+=b}}return g=At(g,`${e}`),g}function X8(t,e){const n=t.grid,o=t.localConstraints.get(_.YIN_YANG_KROPKI),a=ai(n,o);let s="";for(const[c,u]of ao(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const h=Oe(c),f=Oe(u),v=Tt(c,de.YIN_YANG),m=Tt(u,de.YIN_YANG),C=`constraint not yin_yang_kropki_p(${h}, ${f}, ${v}, ${m});
`;s+=C}return s=At(s,`${e}`),s}function Z8(t,e){const n=t.grid,o=t.localConstraints.get(_.YIN_YANG_COUNT_SHADED_CELLS),a=o?Object.values(o):[];function s(u,g){return u.find(h=>h.cell.r===g.r&&h.cell.c===g.c)}let c="";for(const u of n.getAllCells()){const g=s(a,u),h=g?g.directions:[],f=Oe(u),v=[Be.E,Be.N,Be.S,Be.W];for(const m of v){if(h.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=ke(C,de.YIN_YANG);c+=`constraint count(${I}, 1) != ${f};
`}}return c=At(c,`${e}`),c}function Ld(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const o=r.cell,a=t.getCell(o.r,o.c);a&&n.add(a)}return n}function Q8(t,e){const n=t.grid,o=t.localConstraints.get(_.INDEXING_COLUMN),a=Ld(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const g=n.getRow(c.r),f=`[${ze(g).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${f}, ${v});
`;s+=m}return s=At(s,`${e}`),s}function J8(t,e){const n=t.grid,o=t.localConstraints.get(_.RADAR),a=Ld(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const g=Oe(c),[h,f,v,m]=Od(n,c),C=`constraint not radar_p(${g}, ${h}, ${f}, ${v}, ${m}, 9);
`;s+=C}return s=At(s,`${e}`),s}function e$(t,e){const n=t.grid,o=t.localConstraints.get(_.NURIMISAKI_UNSHADED_ENDPOINTS),a=Ld(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const g=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${g});
`;s+=v}return s=At(s,`${e}`),s}function t$(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of ao(n)){const s=Oe(o),c=Oe(a),u=`nurimisaki[${o.r},${o.c}]`,g=`nurimisaki[${a.r},${a.c}]`,h=`constraint (${u} == 0 /\\ ${g} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=h}return r}function n$(t,e){const n=t.grid,o=t.localConstraints.get(_.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let a=`
% ${e}
`;for(const s of Object.values(o)){const u=s.cells.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h),g=ke(u,de.YIN_YANG);a+=`constraint count_unique_values(${g}) >= 2;
`}return a}function r$(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=At(n,`${e}`),n}function o$(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=At(n,`${e}`),n}function i$(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=At(n,`${e}`),n}function a$(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=At(n,`${e}`),n}function s$(t,e){let n="";return n+=`constraint not_fully_shaded_or_unshaded_2x2_p(cave_shading);
`,n=At(n,`${e}`),n}function l$(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=At(n,`${e}`),n}function c$(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=At(n,`${e}`),n}function u$(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=At(n,`${e}`),n}function d$(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=At(n,`${e}`),n}function _$(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=At(n,`${e}`),n}function f$(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const a=r.getNeighboorCells(o).filter(g=>o.region!==null&&g.region===o.region),s=Tt(o,de.BOARD),c=Tt(o,de.YIN_YANG),u=ke(a,de.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=At(n,`${e}`),n}function g$(t){const e=t.globalConstraints;if(e.get(_.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),g=ze(u),h=Co(g);r+=h}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),g=ze(u),h=Co(g);r+=h}if(!e.get(_.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const g=n.getRegion(u),h=ze(g),f=Co(h);r+=f}}return r}function h$(t){const e=_.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const v$=new Map([[_.POSITIVE_DIAGONAL,N8],[_.NEGATIVE_DIAGONAL,T8],[_.POSITIVE_ANTIDIAGONAL,D8],[_.NEGATIVE_ANTIDIAGONAL,R8],[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,k8],[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,G8],[_.ANTIKING,$8],[_.ANTIKNIGHT,F8],[_.ANTI_GIRAFFE,U8],[_.DISJOINT_GROUPS,M8],[_.TANGO,H8],[_.NONCONSECUTIVE,P8],[_.NONRATIO,B8],[_.GLOBAL_INDEXING_COLUMN,W8],[_.ALL_V_GIVEN,Jc],[_.ALL_X_GIVEN,Jc],[_.ALL_XV_GIVEN,Jc],[_.ALL_DIFFERENCES_GIVEN,q8],[_.ALL_RATIOS_GIVEN,K8],[_.ALL_XY_DIFFERENCES_GIVEN,V8],[_.ALL_YIN_YANG_KROPKI_GIVEN,X8],[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,Z8],[_.ALL_INDEXING_COLUMN_GIVEN,Q8],[_.ALL_RADARS_GIVEN,J8],[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,e$],[_.NURIMISAKI_PATH_GERMAN_WHISPERS,t$],[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,n$],[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,j8],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,Y8],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,z8],[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,r$],[_.CAVE_CELLS_ARE_ODD,i$],[_.CAVE_WALLS_ARE_EVEN,a$],[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,s$],[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,l$],[_.YIN_YANG_FILLOMINO_PARITY,o$],[_.TWO_SYMMETRIC_GALAXIES,d$],[_.EVERY_CELL_BELONGS_TO_A_GALAXY,c$],[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,u$],[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,_$],[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,f$]]);function p$(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=v$.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function jv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Vv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${ze(n.slice(1)).join(",")}]`}function m$(t,e,n,r){let o="";const a=jv(e,r),s=`arrow_${n}`;if(o+=`var int: ${s};
`,o+=`% arrow pill
`,a.length===1){const u=a[0];o+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((g,h)=>`${Math.pow(10,h)}*${g}`).join(" + ");o+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;o+=`% arrow lines
`;for(const u of c){const h=`constraint sum(${Vv(e,u)}) == ${s};
`;o+=h}return o}function C$(t,e,n,r){let o="";const a=jv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const h=`constraint average_arrow_p(${Vv(e,u)}, ${s});
`;o+=h}}return o}const E$=new Map([[_.ARROW,m$],[_.AVERAGE_ARROW,C$]]);function I$(t,e,n,r){let o="";const a=E$.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Qr(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function qv(t,e,n){const o=`[${Qr(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function fl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function yd(t,e,n,r,o){const s=`[${Qr(e,r).join(",")}]`,c=r.value,u=fl(t,c,n);if(!u)return"";const g=u[1];let h=u[0];return h+=`constraint ${o}(${s}, ${g});
`,h}function b$(t,e,n,r){const o=Qr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return Co(o);const c=fl(t,s,n);if(!c)return"";const u=c[1];let g=c[0];return g+=`constraint killer_cage(${a}, ${u});
`,g}function w$(t,e,n,r){const o=Qr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return Co(o);const c=fl(t,s,n);if(!c)return"";const u=c[1];let g=c[0];return g+=`constraint inverted_killer_cage_p(${a}, ${u});
`,g}function O$(t,e,n,r){return yd(t,e,n,r,"sum_cage_p")}function L$(t,e,n,r){return qv(e,r,"parity_balance_cage_p")}function y$(t,e,n,r){return qv(e,r,"sum_cage_look_and_say_p")}function A$(t,e,n,r){return yd(t,e,n,r,"divisible_killer_cage_p")}function x$(t,e,n,r){return yd(t,e,n,r,"spotlight_cage_p")}function S$(t,e,n,r){const a=`[${Qr(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function N$(t,e,n,r){const a=`[${Qr(e,r).join(",")}]`,s=r.value;let c="";const u=fl(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const h=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),f=[];for(const m of h)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!h.includes(I)&&!f.includes(I)&&f.push(I)});const v=ke(f,de.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${v});
`,c}function Kv(t,e,n,r,o){const s=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),u=`[${ze(s).join(",")}]`,g=ke(s,de.YIN_YANG),h=r.value;if(h){const f=parseInt(h);return`constraint ${o}(${u}, ${g}, ${f});
`}return""}function T$(t,e,n,r){return Kv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function D$(t,e,n,r){return Kv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function R$(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=`[${ze(a).join(",")}]`,g=`[${dl(a).join(", ")}]`,h=r.value;if(h){const f=parseInt(h);return`constraint doublers_killer_cage_p(${c}, ${g}, ${f});
`}return""}function k$(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=`[${ze(a).join(",")}]`,g=`[${dl(a).join(", ")}]`,h=r.value;if(h){const f=parseInt(h);return`constraint negators_killer_cage_p(${c}, ${g}, ${f});
`}return""}function G$(t,e){let n="";const r=new Map;for(const o of e){const a=o.value,s=r.get(a);if(!s){r.set(a,[o]);continue}s.push(o)}for(const o of r.values())if(!(o.length<=1))for(const[a,s]of o.flatMap((c,u)=>o.slice(u+1).map(g=>[c,g]))){const u=`[${Qr(t,a).join(",")}]`,h=`[${Qr(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${h});
`}return n}const M$=new Map([[_.KILLER_CAGE,b$],[_.INVERTED_KILLER_CAGE,w$],[_.SUM_CAGE,O$],[_.PARITY_BALANCE_CAGE,L$],[_.SUM_CAGE_LOOK_AND_SAY,y$],[_.DIVISIBLE_KILLER_CAGE,A$],[_.SPOTLIGHT_CAGE,x$],[_.UNIQUE_DIGITS_CAGE,S$],[_.VAULTED_CAGE,N$],[_.YIN_YANG_ANTITHESIS_KILLER_CAGE,T$],[_.YIN_YANG_BREAKEVEN_KILLER_CAGE,D$],[_.DOUBLERS_KILLER_CAGE,R$],[_.NEGATORS_KILLER_CAGE,k$]]);function $$(t,e,n,r){let o="";const a=M$.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}else if(n===_.MULTISET_CAGE){const s=Object.values(r),c=G$(e,s);o+=c}return o}function F$(t,e,n,r){const o=e.r+.5,a=e.c+.5,s=n-o,c=r-a,u=Math.floor(n+s),g=Math.floor(r+c);return t.getCell(u,g)}function U$(t,e){const n=[],r=[],o=[];for(const a of t.getAllCells()){const s=F$(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||o.push(a)}return[n,r,o]}function H$(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],g=u.cell,h=c+1,[f,v,m]=U$(e,g),C=ke(f,de.GALAXY_REGIONS),I=ke(v,de.GALAXY_REGIONS),O=ke(m,de.GALAXY_REGIONS);r+=`% galaxy ${h}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${O}, ${h});
`,r+=`constraint connected_region(${de.GALAXY_REGIONS}, ${h});
`;const b=u.value;if(!b)continue;const x=parseInt(b);r+=`constraint galaxy_sum_p(${de.BOARD}, ${de.GALAXY_REGIONS}, ${x}, ${h});
`}if(!n.length)return r;const o=e.nCols*e.nRows,s=`${n.length+1}..${o}`;return r+=`
constraint order_remaining_galaxies_p(${de.GALAXY_REGIONS}, ${s});
`,r}function P$(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function B$(t,e,n,r){const o=r.cell,[a,s]=[o.r,o.c],c=r.value,u=P$(t,c,n);if(!u)return"";const g=u[1];let h=u[0],f=[];if(a%1===0&&s%1===0?f=Nh(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(f=Dh(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!f.length)return"";const v=ke(f,de.BOARD),m=ke(f,de.YIN_YANG);return h+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${g};
`,h}const W$=new Map([[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,B$]]),Y$=new Map([[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,H$]]);function z$(t,e,n,r){let o="";const a=Y$.get(n),s=W$.get(n);if(s)for(const[c,u]of Object.entries(r)){const g=s(t,e,c,u);o+=g}else if(a){const c=Object.values(r),u=a(t,e,c);o+=u}return o}function Jg(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return ze(n)}function j$(t,e){const r="["+Jg(t,e.cells).join(",")+"]",a="["+Jg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const V$=new Map([[_.CLONE_REGION,j$]]);function q$(t,e,n,r){return _l(e,n,r,V$)}function Ad(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function xd(t,e,n){const o=`[${Ad(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function Xv(t,e,n,r=""){const a=`[${Ad(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function K$(t,e,n,r){const a=`[${Ad(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=zv(s);if(!c)return"";let u="";for(const h of c){const f=parseInt(h);Number.isNaN(f)&&!t.hasVariable(h)&&(u+=`var int: ${h};
`,t.addVariable(h))}const g="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${g});
`,u}function X$(t,e,n,r){return Xv(e,r,"corner_sum_p")}function Z$(t,e,n,r){return Xv(e,r,"corner_even_count_p")}function Q$(t,e,n,r){return xd(e,r,"corner_sum_of_three_equals_the_other_p")}function J$(t,e,n,r){return xd(e,r,"equal_diagonal_differences_p")}function e4(t,e,n,r){return xd(e,r,"product_square_p")}const t4=new Map([[_.QUADRUPLE,K$],[_.CORNER_SUM,X$],[_.CORNER_EVEN_COUNT,Z$],[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,Q$],[_.PRODUCT_SQUARE,e4],[_.EQUAL_DIAGONAL_DIFFERENCES,J$]]);function n4(t,e,n,r){let o="";const a=t4.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function gl(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function r4(t,e,n){const r=gl(t,e),[o,a]=r;return`constraint ${n}(${o}, ${a});
`}function o4(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function hl(t,e,n,r,o,a=""){var m;const s=gl(e,r),[c,u]=s,g=(m=r.value)!=null&&m.length?r.value:a,h=o4(t,g,n);if(!h)return"";const f=h[1];let v=h[0];return v+=`constraint ${o}(${c}, ${u}, ${f});
`,v}function i4(t,e,n,r){const o=gl(e,r),[a,s]=o;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function a4(t,e,n,r){return hl(t,e,n,r,"ratio_p","2")}function s4(t,e,n,r){return hl(t,e,n,r,"abs_difference","1")}function l4(t,e,n,r){const o=gl(e,r),[a,s]=o,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function c4(t,e,n,r){return hl(t,e,n,r,"edge_sum_p")}function u4(t,e,n,r){return hl(t,e,n,r,"edge_modulo_p")}function d4(t,e,n,r){return r4(e,r,"edge_factor_p")}function _4(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),[u,g]=a;let h="";if(u.r==g.r){const m=e.getRow(u.r)[0];h=Oe(m)}else if(u.c==g.c){const m=e.getCol(u.c)[0];h=Oe(m)}return h?`constraint abs(${s} - ${c}) == ${h};
`:""}function f4(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),u=Oi(a,de.YIN_YANG),[g,h]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${g}, ${h});
`}function g4(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),u=Oi(a,de.YIN_YANG),[g,h]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${g}, ${h});
`}function h4(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),s=Oi(a,de.UNKNOWN_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}const v4=new Map([[_.XV,i4],[_.DIFFERENCE,s4],[_.RATIO,a4],[_.EDGE_INEQUALITY,l4],[_.EDGE_SUM,c4],[_.EDGE_MODULO,u4],[_.EDGE_FACTOR,d4],[_.XY_DIFFERENCES,_4],[_.YIN_YANG_KROPKI,f4],[_.YIN_YANG_WHITE_KROPKI,g4],[_.UNKNOWN_REGION_BORDER,h4]]);function p4(t,e,n,r){let o="";const a=v4.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Li(t,e,n=!1){let o=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(o=[...new Set(o)]),ze(o)}function mt(t,e,n,r=!1){const a=`[${Li(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function Mr(t,e,n,r=""){const a=`[${Li(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function Sd(t,e,n){let o=e.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const c=`[${ze(o).join(",")}]`,u=e.value;if(!u)return"";const g=parseInt(u);return`constraint ${n}(${c}, ${g}, ${a});
`}function m4(t,e,n){return mt(t,n,"renban",!0)}function C4(t,e,n){return mt(t,n,"double_renban_p",!0)}function E4(t,e,n){return mt(t,n,"renrenbanban_p",!0)}function I4(t,e,n){return mt(t,n,"knabner_p",!0)}function b4(t,e,n){return mt(t,n,"renban_or_nabner_line_p",!0)}function w4(t,e,n){return mt(t,n,"out_of_order_consecutive_line_p")}function O4(t,e,n){const o=`[${Li(t,n).join(",")}]`,a=n.value,s=a?parseInt(a):5;return`constraint whispers(${o}, ${s});
`}function L4(t,e,n){return`constraint whispers(${`[${Li(t,n).join(",")}]`}, 4);
`}function y4(t,e,n){return mt(t,n,"strictly_increasing")}function A4(t,e,n){return mt(t,n,"fuzzy_thermo_p")}function x4(t,e,n){return mt(t,n,"increasing")}function S4(t,e,n){return mt(t,n,"palindrome")}function N4(t,e,n){return Mr(t,n,"sum_line_p")}function T4(t,e,n){return mt(t,n,"xv_line_p")}function D4(t,e,n){return Mr(t,n,"at_least_x_line_p","10")}function R4(t,e,n){return Mr(t,n,"product_line_p")}function k4(t,e,n){return Mr(t,n,"maximum_adjacent_difference_line_p","2")}function G4(t,e,n){return mt(t,n,"adjacent_multiples_line_p")}function M4(t,e,n){return mt(t,n,"index_line_p")}function $4(t,e,n){return mt(t,n,"zipper_line_p")}function F4(t,e,n){return Sd(t,n,"segmented_sum_line_p")}function U4(t,e,n){return Sd(t,n,"n_consecutive_renban_line_p")}function H4(t,e,n){return Sd(t,n,"n_consecutive_fuzzy_sum_line_p")}function P4(t,e,n){const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u);let a="";const s=[];for(let u=0;u<o.length;u++){const g=o[u],h=t.getRow(g.r),f=ke(h,de.BOARD),v=`cycle_${e}_${u}`;s.push(v);const m=g.c+1;a+=`var int: ${v} = cycle_order_f(${f}, ${m});
`}const c="["+s.join(",")+"]";return a+=`constraint strictly_increasing(${c});
`,a}function B4(t,e,n){return mt(t,n,"adjacent_differences_count_line_p")}function W4(t,e,n){return mt(t,n,"same_parity_line_p")}function Y4(t,e,n){return Mr(t,n,"renban_or_whispers_p","5")}function z4(t,e,n){return mt(t,n,"alldifferent",!0)}function j4(t,e,n){return mt(t,n,"repeated_digits_line_p")}function V4(t,e,n){return mt(t,n,"superfuzzy_arrow_p")}function q4(t,e,n){return mt(t,n,"headless_arrow_p")}function K4(t,e,n){return Mr(t,n,"unimodular_line_p","3")}function X4(t,e,n){return Mr(t,n,"modular_line_p","3")}function Z4(t,e,n){return Mr(t,n,"modular_or_unimodular_line_p","3")}function Q4(t,e,n){return mt(t,n,"arithmetic_sequence_line_p")}function J4(t,e,n){return mt(t,n,"odd_even_oscillator_line_p")}function e6(t,e,n){return Mr(t,n,"high_low_oscillator_line_p","5")}function t6(t,e,n){return mt(t,n,"look_and_say_line_p",!0)}function n6(t,e,n){const o=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f);function a(f){const v=[];let m=null;for(const C of f)C.r!=m?(v.push([C]),m=C.r):v[v.length-1].push(C);return v}const s=a(o);if(s.length<2)return"";const c=s[0],g=`[${ze(c).join(",")}]`;let h="";for(let f=1;f<s.length;f++){const v=s[f],C=`[${ze(v).join(",")}]`;h+=`constraint sum(${C}) == sum(${g});
`}return h}function r6(t,e,n){return mt(t,n,"between_line_p")}function o6(t,e,n){return mt(t,n,"tightrope_line_p")}function i6(t,e,n){return mt(t,n,"double_arrow_p")}function a6(t,e,n){return mt(t,n,"split_peas_p")}function s6(t,e,n){return mt(t,n,"parity_count_line_p")}function l6(t,e,n){return mt(t,n,"product_of_ends_equals_sum_of_line_p")}function c6(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const a=o.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(o),n=a}return r.length&&e.push(r),e}function u6(t,e,n){let r="";const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=c6(a);if(!s.length)return"";const c=`sum_line_${e}`;r+=`var int: ${c};
`;for(const u of s){const f=`constraint sum(${`[${ze(u).join(",")}]`}) == ${c};
`;r+=f}return r}function d6(t,e,n){return`constraint entropic_line_p(${`[${Li(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function _6(t,e,n){return`constraint entropic_or_modular_line_p(${`[${Li(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function f6(t,e,n){const o=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),s=`[${ze(o).join(",")}]`,c=ke(o,de.YIN_YANG);let u=n.value;u||(u="5");const g=parseInt(u);return`constraint yin_yang_shaded_whispers_line_p(${s}, ${c}, ${g});
`}function g6(t,e,n){const o=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),s=`[${ze(o).join(",")}]`,c=ke(o,de.YIN_YANG);let u=n.value;u||(u="3");const g=parseInt(u);return`constraint yin_yang_unshaded_modular_line_p(${s}, ${c}, ${g});
`}function Nd(t,e,n){const o=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),s=`[${ze(o).join(",")}]`,c=ke(o,de.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function h6(t,e,n){return Nd(t,n,"yin_yang_unshaded_entropic_line_p")}function v6(t,e,n){return Nd(t,n,"yin_yang_indexing_line_coloring_p")}function p6(t,e,n){return Nd(t,n,"yin_yang_region_sum_line_p")}function m6(t,e,n){const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),a=ke(o,de.VALUES_GRID),s=ke(o,de.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${s});
`}function Td(t,e,n){const o=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${dl(o).join(", ")}]`;return`constraint ${n}(${s});
`}function C6(t,e,n){return Td(t,n,"between_line_p")}function E6(t,e,n){return Td(t,n,"double_arrow_p")}function I6(t,e,n){return Td(t,n,"strictly_increasing")}const b6=new Map([[_.THERMOMETER,y4],[_.FUZZY_THERMOMETER,A4],[_.SLOW_THERMOMETER,x4],[_.RENBAN_LINE,m4],[_.DOUBLE_RENBAN_LINE,C4],[_.RENRENBANBAN_LINE,E4],[_.NABNER_LINE,I4],[_.WHISPERS_LINE,O4],[_.DUTCH_WHISPERS,L4],[_.RENBAN_OR_WHISPERS_LINE,Y4],[_.RENBAN_OR_NABNER_LINE,b4],[_.OUT_OF_ORDER_CONSECUTIVE_LINE,w4],[_.N_CONSECUTIVE_RENBAN_LINE,U4],[_.PALINDROME,S4],[_.SUM_LINE,N4],[_.PRODUCT_LINE,R4],[_.XV_LINE,T4],[_.AT_LEAST_X_LINE,D4],[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,k4],[_.SAME_PARITY_LINE,W4],[_.ADJACENT_MULTIPLES_LINE,G4],[_.ADJACENT_DIFFERENCES_COUNT_LINE,B4],[_.LOOK_AND_SAY_LINE,t6],[_.ROW_SUM_LINE,n6],[_.INDEX_LINE,M4],[_.ZIPPER_LINE,$4],[_.SEGMENTED_SUM_LINE,F4],[_.N_CONSECUTIVE_FUZZY_SUM_LINE,H4],[_.SUPERFUZZY_ARROW,V4],[_.HEADLESS_ARROW,q4],[_.ARITHMETIC_SEQUENCE_LINE,Q4],[_.ODD_EVEN_OSCILLATOR_LINE,J4],[_.HIGH_LOW_OSCILLATOR_LINE,e6],[_.UNIQUE_VALUES_LINE,z4],[_.REPEATED_DIGITS_LINE,j4],[_.UNIMODULAR_LINE,K4],[_.MODULAR_LINE,X4],[_.MODULAR_OR_UNIMODULAR_LINE,Z4],[_.REGION_SUM_LINE,u6],[_.ENTROPIC_LINE,d6],[_.ENTROPIC_OR_MODULAR_LINE,_6],[_.ROW_CYCLE_THERMOMETER,P4],[_.BETWEEN_LINE,r6],[_.TIGHTROPE_LINE,o6],[_.DOUBLE_ARROW_LINE,i6],[_.SPLIT_PEAS,a6],[_.PARITY_COUNT_LINE,s6],[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,l6],[_.DOUBLERS_THERMOMETER,I6],[_.DOUBLERS_BETWEEN_LINE,C6],[_.DOUBLERS_DOUBLE_ARROW_LINE,E6],[_.YIN_YANG_SHADED_WHISPERS_LINE,f6],[_.YIN_YANG_UNSHADED_ENTROPIC_LINE,h6],[_.YIN_YANG_UNSHADED_MODULAR_LINE,g6],[_.YIN_YANG_REGION_SUM_LINE,p6],[_.YIN_YANG_INDEXING_LINE_COLORING,v6],[_.GOLDILOCKS_ZONE_REGION_SUM,m6]]);function w6(t,e,n,r){let o="";const a=b6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(e,s,c);o+=u}return o}function Dd(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return ze(o)}function vl(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,o)}function Qn(t,e,n,r){const o=n.cell,a=e.getCell(o.r,o.c),c=`[${Dd(e,n).join(",")}]`,u=n.value,g=vl(t,u,o,a);if(!g)return"";const h=g[1];let f=g[0];return f+=`constraint ${r}(${c}, ${h});
`,f}function O6(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${Dd(e,r).join(",")}]`,u=r.value,g=Math.min(e.nCols,e.nRows),h=vl(t,u,o,a);if(!h)return"";const f=h[1];let v=h[0];return v+=`constraint sandwich_sum_p(${c}, ${f}, 1, ${g});
`,v}function L6(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=Dd(e,r),c=`[${s.join(",")}]`,u=s[0],g=r.value,h=vl(t,g,o,a);if(!h)return"";const f=h[1];let v=h[0];return v+=`constraint x_index_p(${c}, ${u}, ${f});
`,v}function y6(t,e,n,r){return Qn(t,e,r,"x_sum_p")}function A6(t,e,n,r){return Qn(t,e,r,"shortsighted_x_sum_p")}function x6(t,e,n,r){return Qn(t,e,r,"broken_x_sum_p")}function S6(t,e,n,r){return Qn(t,e,r,"shifted_x_sum_p")}function N6(t,e,n,r){return Qn(t,e,r,"skyscrapers_p")}function T6(t,e,n,r){return Qn(t,e,r,"x_sum_skyscrapers_p")}function D6(t,e,n,r){return Qn(t,e,r,"battlefield_p")}function R6(t,e,n,r){return Qn(t,e,r,"rising_streak_p")}function k6(t,e,n,r){return Qn(t,e,r,"outside_consecutive_sum_p")}function G6(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${ze(s).join(",")}]`,g=ke(s,de.CELL_CENTER_LOOP),h=r.value;if(h){const f=parseInt(h);return`constraint loopwhiches_p(${u}, ${g}, ${f});
`}return""}function M6(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=r.direction,c=e.getCellsInDirection(o.r,o.c,s),u=ke(c,de.BOARD),g=ke(c,de.UNKNOWN_REGIONS),h=r.value,f=vl(t,h,o,a);if(!f)return"";const v=f[1];let m=f[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${g}, ${v});
`,m}function $6(t,e,n,r){return Qn(t,e,r,"little_killer_sum_p")}function F6(t,e,n,r){return Qn(t,e,r,"little_killer_product_p")}function U6(t,e,n,r){return Qn(t,e,r,"x_omit_little_killer_sum_p")}function H6(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${ze(s).join(",")}]`,g=ke(s,de.YIN_YANG),h=r.value;if(h){const f=parseInt(h);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${g}, ${f});
`}return""}function P6(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${dl(s).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint little_killer_sum_p(${u}, ${h});
`}return""}const B6=new Map([[_.SANDWICH_SUM,O6],[_.X_SUM,y6],[_.SHORTSIGHTED_X_SUM,A6],[_.BROKEN_X_SUM,x6],[_.SHIFTED_X_SUM,S6],[_.SKYSCRAPERS,N6],[_.X_SUM_SKYSCRAPERS,T6],[_.X_INDEX,L6],[_.BATTLEFIELD,D6],[_.RISING_STREAK,R6],[_.OUTSIDE_CONSECUTIVE_SUM,k6],[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,H6],[_.LOOPWICHES,G6],[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,M6],[_.LITTLE_KILLER_SUM,$6],[_.LITTLE_KILLER_PRODUCT,F6],[_.X_OMIT_LITTLE_KILLER_SUM,U6],[_.NEGATORS_LITTLE_KILLER_SUM,P6]]);function W6(t,e,n,r){let o="";const a=B6.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Y6(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let a=t.getCellsInDirection(r.r,r.c,o);a=[r,...a];const s=ke(a,de.SASHIGANE),c=ke(a,de.SASHIGANE_BENDS),u=Oe(r),g=Tt(r,de.SASHIGANE);let h=`constraint sashigane_arrow_points_to_bend_p(${u}, ${g}, ${s}, ${c});
`;return h+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,h}function z6(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,a=t.getCellsInDirection(r.r,r.c,o),c="["+ze(a).join(",")+"]",u=ke(a,de.CELL_CENTER_LOOP),g=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${g});
`}const j6=new Map([[_.SASHIGANE_ARROW_POINTS_TO_BEND,Y6],[_.THERMO_SIGHTLINE_LOOP_ARROW,z6]]);function V6(t,e,n,r){return _l(e,n,r,j6)}function Zv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o);return`constraint ${n}(${a});
`}function Qv(t,e,n,r=""){const o=e.cell,a=t.getCell(o.r,o.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function q6(t,e,n,r){return Zv(e,r,"odd_p")}function K6(t,e,n,r){return Zv(e,r,"even_p")}function X6(t,e,n,r){return Qv(e,r,"low_digit_p","5")}function Z6(t,e,n,r){return Qv(e,r,"high_digit_p","5")}function Jv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=t.getNeighboorCells(o),c=ke(s,de.BOARD);return`constraint ${n}(${c}) == ${a};
`}function Q6(t,e,n,r){return Jv(e,r,"odd_count")}function J6(t,e,n,r){return Jv(e,r,"even_count")}function eF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=ke(c,de.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function tF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${ke(c,de.BOARD)}, ${s});
`}function nF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${ke(c,de.BOARD)}, ${s});
`}function rF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getRow(a.r),c=ke(s,de.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function oF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getCol(a.c),c=ke(s,de.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function iF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const h=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${h};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function aF(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const s=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),g=e.getCell(o.r,o.c+1);if(!s||!c||!u||!g)return"";const h=Oe(s),f=Oe(c),v=Oe(u),m=Oe(g);return`constraint groups_opposite_parity_p([${h},${f}], [${v},${m}]);
`}function Rd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),[s,c,u,g]=Od(t,o);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${g});
`}function sF(t,e,n,r){return Rd(e,r,"is_watchtower_p")}function lF(t,e,n,r){return Rd(e,r,"is_not_watchtower_p")}function cF(t,e,n,r){return Rd(e,r,"farsight_p")}function uF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),[c,u,g,h]=Od(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${g}, ${h}, 9);
`}function dF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+ze(c).join(",")+"]",g=e.getCol(a.c),h="["+ze(g).join(",")+"]",[f,v]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${h}, ${f}, ${v}, ${s});
`}function ep(t,e,n){let r="";const o=e.map(s=>s.cell),a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));for(const s of e){const c=s.cell,u=t.getCell(c.r,c.c);if(!u)continue;const g=Oe(u),h=t.getOrthogonallyAdjacentCells(u).filter(m=>!a.has(m)),f=ke(h,de.BOARD),v=`constraint ${n}(${f}, ${g});
`;r+=v}return r}function _F(t,e){return ep(t,e,"maximum_p")}function fF(t,e){return ep(t,e,"minimum_p")}function gF(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...o]).join(`,
	`)}`;n+=`array[int] of var int: counting_circles = [
	${s}
];
`;for(const c of e){const u=c.cell,g=t.getCell(u.r,u.c);if(!g)continue;const h=Oe(g),f=`constraint count(counting_circles, ${h}) == ${h};
`;n+=f}return n+=`
`,n}function hF(t,e){let n="";const r=e.map(g=>g.cell),o=new Set(r.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g)),s=`${ze([...o]).join(`,
	`)}`,u=`${Oi([...o],de.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;n+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${de.COUNTING_CIRCLES_COLORS};
`,n+=`array[int] of var int: colored_counting_circles = [
	${s}
];
`,n+=`array[int] of var int: counting_circles_colors = [
	${u}
];
`,n+=`constraint colored_counting_circles_adjacent_p(${de.COUNTING_CIRCLES_COLORS});
`,n+=`
% cells without circles
`;for(const g of t.getAllCells()){if(o.has(g))continue;const h=Tt(g,de.COUNTING_CIRCLES_COLORS);n+=`constraint ${h} == 0;
`}for(const g of e){const h=g.cell,f=t.getCell(h.r,h.c);if(!f)continue;const v=Oe(f),m=Tt(f,de.COUNTING_CIRCLES_COLORS),C=g.value;C?n+=`constraint ${m} == ${C};
`:n+=`constraint ${m} != 0;
`,n+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${v}, ${m}) == ${v};
`}return n+=`
`,n}function vF(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...o]).join(`,
	`)}`;return n+=`array[int] of var int: unique_cells = [
	${s}
];
`,n+=`constraint alldifferent(unique_cells);
`,n}function pF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${ke(u,de.YIN_YANG)}, ${s});
`}function kd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=wd(t,o),c=[];for(const h of s){const f=ke(h,de.YIN_YANG);c.push(f)}const u=Tt(o,de.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function mF(t,e,n,r){return kd(e,r,"yin_yang_seen_unshaded_p")}function CF(t,e,n,r){return kd(e,r,"yin_yang_seen_shaded_p")}function EF(t,e,n,r){return kd(e,r,"yin_yang_seen_same_shade_p")}function IF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Tt(a,de.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),g=ke(u,de.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${g});
`}function bF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${ke(c,de.YIN_YANG)}, 1) == ${s};
`}function wF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),g=e.getCol(a.c),h="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",f="["+g.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${h}, ${f}, ${s}, ${c});
`}function OF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),g="["+c.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]",h="["+u.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${g}, ${h}, ${s});
`}function LF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let h=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const f=wd(e,a),v=[];for(const m of f){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";v.push(C)}return h+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${v[0]}, ${v[1]}, ${v[2]}, ${v[3]});
`,h}function yF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Tt(a,de.SASHIGANE),u=Tt(a,de.SASHIGANE_BENDS);let g=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return g+=`constraint ${u} = true;
`,g}function AF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Tt(a,de.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function xF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Tt(a,de.CELL_CENTER_LOOP)} == 1;
`:""}function SF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Tt(a,de.CELL_CENTER_LOOP)} == 0;
`:""}function NF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${ke(u,de.CELL_CENTER_LOOP)}) == ${s};
`}function TF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Tt(a,de.CAVE_SHADING),u=wd(e,a),g=[];for(const f of u){const v=ke(f,de.CAVE_SHADING);g.push(v)}return`constraint cave_clue_p(${s}, ${c}, ${g[0]}, ${g[1]}, ${g[2]}, ${g[3]});
`}function DF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const g=Oe(a),h=Tt(a,de.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const f=e.getNeighboorCells(a),v=ke(f,de.BOARD),m=ke(f,de.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${h});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${g});
`;const C=e.getCellsByKnightMove(a),I=ke(C,de.BOARD),O=ke(C,de.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${O}, ${h});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${g});
`;const b=[Be.NE,Be.NW,Be.SE,Be.SW],x=[];for(const k of b)e.getCellsInDirection(a.r,a.c,k).forEach(W=>x.push(W));const D=ke(x,de.BOARD),$=ke(x,de.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${D}, ${$}, ${h});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${g});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function RF(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const g=Oe(a),h=Tt(a,de.UNKNOWN_REGIONS),f=e.getOrthogonallyAdjacentCells(a),v=ke(f,de.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${h}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],C=[];for(const I of m){const O=e.getCellsInDirection(a.r,a.c,I);if(!O.length)continue;const b=ke(O,de.BOARD),x=ke(O,de.UNKNOWN_REGIONS),D=`in_arrow_${n}_${I}`,$=`in_arrow_${n}_${I}[1]`;C.push($),u+=`array[index_set(${b})] of var bool: ${D};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${x}, ${D}, ${g}, ${h});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}const kF=new Map([[_.ODD,q6],[_.EVEN,K6],[_.LOW_DIGIT,X6],[_.HIGH_DIGIT,Z6],[_.ODD_MINESWEEPER,Q6],[_.EVEN_MINESWEEPER,J6],[_.DIAGONALLY_ADJACENT_SUM,nF],[_.ORTHOGONAL_SUM,tF],[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,eF],[_.FRIENDLY_CELL,iF],[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,aF],[_.WATCHTOWER,sF],[_.NOT_WATCHTOWER,lF],[_.FARSIGHT,cF],[_.RADAR,uF],[_.INDEXING_COLUMN,rF],[_.INDEXING_ROW,oF],[_.SANDWICH_ROW_COL_COUNT,dF],[_.YIN_YANG_MINESWEEPER,pF],[_.YIN_YANG_SEEN_UNSHADED_CELLS,mF],[_.YIN_YANG_SEEN_SHADED_CELLS,CF],[_.YIN_YANG_SEEN_SAME_SHADE_CELLS,EF],[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,IF],[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,bF],[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,wF],[_.SEEN_REGION_BORDERS_COUNT,OF],[_.NURIMISAKI_UNSHADED_ENDPOINTS,LF],[_.SASHIGANE_BEND_REGION_COUNT,yF],[_.SASHIGANE_REGION_SUM,AF],[_.CELL_ON_THE_LOOP,xF],[_.CELL_NOT_ON_THE_LOOP,SF],[_.COUNT_LOOP_NEIGHBOUR_CELLS,NF],[_.CAVE_CLUE,TF],[_.CHAOS_CONSTRUCTION_CHESS_SUMS,DF],[_.CHAOS_CONSTRUCTION_ARROW_KNOTS,RF]]),GF=new Map([[_.MAXIMUM,_F],[_.MINIMUM,fF],[_.COUNTING_CIRCLES,gF],[_.COLORED_COUNTING_CIRCLES,hF],[_.UNIQUE_CELLS,vF]]);function MF(t,e,n,r){let o="";const a=kF.get(n),s=GF.get(n);if(a)for(const[c,u]of Object.entries(r)){const g=a(t,e,c,u);o+=g}else if(s){const c=Object.values(r),u=s(e,c);o+=u}return o}function $F(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Tt(r,de.UNKNOWN_REGIONS),s=e.directions,c=[];for(const h of s){const f=t.getCellsInDirection(r.r,r.c,h),v=ke(f,de.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(h=>`count_different(${h}, ${a})`).join(" + ")} == ${o};
`}function FF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Tt(r,de.YIN_YANG),s=e.directions;let c="";for(const u of s){const g=t.getCellsInDirection(r.r,r.c,u),f="["+ze(g).join(",")+"]",v=ke(g,de.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${f}, ${v}) == ${o};
`}return c}function UF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g=ke(u,de.YIN_YANG);s+=`constraint count(${g}, 1) == ${o};
`}return s}function HF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Tt(r,de.YIN_YANG),s=e.directions,c=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),f=ke(h,de.YIN_YANG),v=ke(h,de.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${f}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function PF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions,s=[];for(const u of a){const g=t.getCellsInDirection(r.r,r.c,u),f=`count_loop_vars_f(${ke(g,de.CELL_CENTER_LOOP)})`;s.push(f)}return s.length?`constraint ${s.join(" + ")} = ${o};
`:""}function BF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Tt(r,de.GALAXY_REGIONS),s=e.directions,c=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),m=`count(${"["+Oi(h,de.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function WF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),h="["+ze(u).join(",")+"]";s+=`constraint hot_arrows_p(${h}, ${o});
`}return s}function YF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),h="["+ze(u).join(",")+"]";s+=`constraint cold_arrows_p(${h}, ${o});
`}return s}const zF=new Map([[_.HOT_ARROWS,WF],[_.COLD_ARROWS,YF],[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,$F],[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,FF],[_.LOOP_CELL_COUNT_ARROWS,PF],[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,HF],[_.YIN_YANG_COUNT_SHADED_CELLS,UF],[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,BF]]);function jF(t,e,n,r){return _l(e,n,r,zF)}function VF(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function qF(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}const KF=new Map([[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,VF],[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,qF]]);function XF(t,e,n,r){return _l(e,n,r,KF)}const ZF=[z$,MF,V6,jF,p4,n4,w6,I$,$$,W6,q$,XF];function QF(t,e){let n="";const r=t.localConstraints,o=t.grid;for(const[a,s]of r.entries())for(const c of ZF){let u=c(e,o,a,s);u=At(u,`${a}`),n+=u}return n}function JF(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function eU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function tU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function nU(t,e){const n=t.grid;if(n.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(n.nCols,n.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${o});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${o});
`,a}function rU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function oU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function iU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function aU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function sU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function sa(t,e,n,r){const o=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=o.nRows;for(let h=0;h<s;h++){const f=o.getRow(h),v=r(f);a+=`constraint count_eq(${v}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=o.nCols;for(let h=0;h<c;h++){const f=o.getCol(h),v=r(f);a+=`constraint count_eq(${v}, ${n}, ${e});
`}if(!t.globalConstraints.get(_.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const h=o.getUsedRegions();for(const f of h){const v=o.getRegion(f),m=r(v);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function lU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=sa(t,1,!0,a=>ke(a,de.DOUBLERS)),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function cU(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=sa(t,1,!0,s=>ke(s,de.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function uU(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function dU(t,e){if(t.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="cave_shading",a="cave_regions";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint cave_p(${o}, ${a});
`,s}function _U(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=de.GALAXY_REGIONS,a=de.GALAXY_SIZES,s=n.nCols*n.nRows;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${o};
`,c+=`constraint galaxy_restrict_numbering_p(${o});
`,c+=`array[0..${s}] of var 0..${s}: ${a};
`,c+=`constraint galaxy_sizes_p(${o}, ${a});
`,c+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,c+=`constraint gallaxy_connected_regions_p(${o});
`,c}function fU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function gU(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function hU(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Qg.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[s,c]of Qg.entries()){const u=c.length,g=c[0].length,h=`pentomino_${s}`;a+=`array[1..${u}, 1..${g}] of 0..1: ${h} = ${x8(c)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${h}, ${s});
`}return a}function vU(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=de.LITS_SHADING,a=de.LITS_REGIONS;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,s+=`constraint lits_shading_p(${o});
`,s+=`constraint lits_shading_ids_p(${o}, ${a});
`,s+=`constraint lits_region_and_ids_p(${de.BOARD_REGIONS}, ${a});
`,s+=`constraint lits_tetromino_shapes_p(${a});
`;const c=n.getUsedRegions();c.size&&(s+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const u of c){const g=n.getRegion(u),f=`constraint count_eq(${ke(g,de.LITS_SHADING)}, 1, 4);
`;s+=f}return s}function pU(t,e){const n=t.grid;if(n.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=de.LITS_SHADING,a=de.LITS_REGIONS,s=de.CAVE_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${o});
`,c+=`constraint lits_shading_ids_p(${o}, ${a});
`,c+=`constraint lits_region_and_ids_p(${s}, ${a});
`,c+=`constraint lits_4_per_region_p(${s}, ${o});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=n.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of u){const h=n.getRegion(g),v=`constraint count_eq(${ke(h,de.LITS_SHADING)}, 1, 4);
`;c+=v}return c}function mU(t,e){if(t.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=de.LITS_SHADING,a=de.STAR_BATTLE,s=de.LITS_WHITE_BLACK_STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=sa(t,2,1,u=>ke(u,de.STAR_BATTLE)),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,c+=`
% 1 white star per row, column, region
`,c+=sa(t,1,1,u=>ke(u,de.LITS_WHITE_BLACK_STAR_BATTLE)),c+=`
% 1 black star per row, column, region
`,c+=sa(t,1,2,u=>ke(u,de.LITS_WHITE_BLACK_STAR_BATTLE)),c+=`constraint black_and_white_star_battle_p(${a}, ${s});
`,c+=`constraint lits_black_and_white_star_battle_p(${o}, ${s});
`,c}const CU=new Map([[_.FILLOMINO,uU],[_.CAVE,dU],[_.GALAXIES,_U],[_.YIN_YANG,JF],[_.NURIMISAKI,eU],[_.TWO_CONTIGUOUS_REGIONS,tU],[_.UNKNOWN_REGIONS,nU],[_.SASHIGANE,rU],[_.CELL_CENTER_LOOP_NO_TOUCHING,oU],[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,iU],[_.NOT_LOOP_SIZED_REGIONS,aU],[_.MODULAR_LOOP,sU],[_.DOUBLERS,lU],[_.NEGATORS,cU],[_.GOLDILOCKS_ZONE,gU],[_.NEXUS,fU],[_.PENTOMINO_TILLING,hU],[_.LITS,vU],[_.CAVE_LITS,pU],[_.LITS_BLACK_WHITE_STAR_BATTLE,mU]]);function EU(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=CU.get(r);if(!a)continue;let s=a(t,r);s=At(s,`${r}`),e+=s}return e}function IU(){let t=`
`;return t+=`test orth_adjacent_2d(
    int: r1, int: c1, 
    int: r2, int: c2
) = let {
    int: d1 = abs(r2-r1);
    int: d2 = abs(c2-c1);
} in d1 <= 1 /\\ d2 <= 1 /\\ d1 + d2 = 1;

test diag_adjacent_2d(
    int: r1, int: c1, 
    int: r2, int: c2
) = let {
    int: d1 = abs(r2-r1);
    int: d2 = abs(c2-c1);
} in d1 = 1 /\\ d2 = 1;

test orth_or_diag_adjacent_2d(
    int: r1, int: c1, 
    int: r2, int: c2
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

predicate all_equal_to_p(array[int] of var int: arr, var int: val) =
    forall(v in arr)(v = val);

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

`+`predicate not_fully_shaded_2x2_p(
    array[int, int] of var 0..1: shading
) = let {
   set of int: rows = index_set_1of2(shading);
   set of int: cols = index_set_2of2(shading);
} in
    % For each possible 2x2 square in the grid
    forall(r in rows where r < max(rows),
           c in cols where c < max(cols))(
        % Sum of the 2x2 area must be between 1 and 3 inclusive
        % This prevents both all 0's (sum=0) and all 1's (sum=4)
        let {
            var int: square_sum = shading[r,c] + shading[r+1,c] + shading[r,c+1] + shading[r+1,c+1]
        } in
        square_sum in 0..3
    );

predicate lits_shading_p(array[int, int] of var 0..1: shading) =
    connected_region(shading, 1) /\\
	not_fully_shaded_2x2_p(shading);

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
    assert(index_sets_agree(regions, ids_grid), "regions and ids_grid must have the same indexes.")
    % Shade one tetromino in each region. 
    % No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape.
    % if adjacent cells are in different regions than ids cannot be the same (unless they're both zero)
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r,c-1] } in (
            regions[r,c] != regions[r,c-1] -> ((id1 = 0 /\\ id2 = 0) \\/ (id1 != id2))
        )
    )
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
    /\\ forall(r in rows, c in cols where c>min(cols))(
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r,c-1] } in (
            (id1 != 0 /\\ id2 != 0 /\\ id1 == id2) -> 
                count_same_adjacent(ids_grid, r, c) + count_same_adjacent(ids_grid, r, c-1) > 2
        )
    )
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

predicate check_tetra_p(array[int] of var int: tetra, var int: val) = 
    if (all_equal(tetra) /\\ exists(id1 in tetra)(id1 != 0)) then 
        all_equal_to_p(tetra, val)
    else
        true
    endif;

predicate lits_o_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r < max(rows), c in cols where c < max(cols))(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 5)
    )  
);

predicate lits_i_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows, c in cols where c <= max(cols) - 3)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r,c+3]];
        } in check_tetra_p(tetra, 2)
    ) /\\
    forall(r in rows where r <= max(rows) - 3, c in cols)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r+3,c]];
        } in check_tetra_p(tetra, 2)
    )
);

predicate lits_t_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 3)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c+1], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 3)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 3)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r+1,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 3)
    )
);

predicate lits_s_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 4)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 4)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r,c+1], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 4)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 4)
    )
);

predicate lits_l_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c+2], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r,c+1]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r+2,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 1)
    ) 
);

predicate lits_tetromino_shapes_p(array[int, int] of var int: ids_grid) = (
    lits_l_tetra_p(ids_grid)
    /\\ lits_i_tetra_p(ids_grid)
    /\\ lits_t_tetra_p(ids_grid)
    /\\ lits_s_tetra_p(ids_grid)
);

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
        star_battle_grid[r,c] = 1 -> forall(idx in orth_or_diag_adjacent_idxs(r, c))(
            in_bounds_2d(idx.1, idx.2, star_battle_grid) -> star_battle_grid[idx.1, idx.2] = 0
        )
    )
);

`,t}function bU(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function tp(t){const e=t.grid,n=new y8,[r,o]=[e.nRows,e.nCols],a=r*o;n.add(`include "globals.mzn";
`),n.add(`include "alldifferent.mzn";

`),n.add(IU());let c=`1..${Math.max(r,o)}`,u=t.valid_digits;return!!t.globalConstraints.get(_.FILLOMINO)&&(c=`1..${a}`),t.globalConstraints.get(_.HEXED_SUDOKU)&&(u=[...$t.range(1,16)]),u&&(c="{"+u.join(",")+"}"),n.add(`set of int: ROW_IDXS = 0..${r-1};
`),n.add(`set of int: COL_IDXS = 0..${o-1};
`),n.add(`set of int: ALLOWED_DIGITS = ${c};
`),n.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),S8(n,e),n.add(bU(t)),n.add(g$(t)),n.add(h$(t)),n.add(EU(t)),n.add(QF(t,n)),n.add(p$(t)),n.add(`
solve satisfy;`),n.model_str}const eh=encodeURIComponent("4.3.5");let ur={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Eo=[];let eu;function Qi(){if(!eu){const e=`importScripts(${JSON.stringify(ur.workerURL)});`;eu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(eu);t.postMessage({wasmURL:ur.wasmURL?ur.wasmURL.toString():new URL(`./minizinc.wasm?version=${eh}`,ur.workerURL).toString(),dataURL:ur.dataURL?ur.dataURL.toString():new URL(`./minizinc.data?version=${eh}`,ur.workerURL).toString()}),Eo.push({worker:t,runCount:0})}function np(){for(;Eo.length<ur.numWorkers;)Qi()}async function wU(t){if(ur={...ur,...t},Eo.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");np(),await Promise.race(Eo.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Gd{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Gd;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){np();const o=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:s,runCount:c}=Eo.pop();return s.postMessage({jsonStream:!0,files:a,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],o.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?Eo.push({worker:a,runCount:s}):(a.terminate(),Qi()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],o.options),c=[];let u=null;a.onmessage=g=>{switch(g.data.type){case"error":c.push(g.data);break;case"interface":u=g.data;break;case"exit":s<10?Eo.push({worker:a,runCount:s}):(a.terminate(),Qi()),g.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const a=["-c","--fzn",o],{worker:s}=this._run(a,n.options,[o]);Qi();let c={},u=!1,g=null;return s.onmessage=h=>{if(c[h.data.type])for(const f of c[h.data.type])f(h.data);switch(h.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":g||(g=h.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const h of c.exit)h({type:"exit",code:null});c={}}},on(h,f){c[h]?c[h].add(f):c[h]=new Set([f])},off(h,f){c[h]&&c[h].delete(f)},then(h,f){const v=m=>{if(m.code===0)h(m.outputFiles[o]);else{const C=g?{message:g.message,...m}:m;if(!f)throw C;f(C)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);Qi();let a=null,s={},c=!1,u=null,g={},h="UNKNOWN";return o.onmessage=f=>{if(s[f.data.type])for(const v of s[f.data.type])v(f.data);switch(f.data.type){case"exit":o.terminate(),c=!0,s={};break;case"error":a||(a=f.data);break;case"statistics":g={...g,...f.data.statistics};break;case"solution":u=f.data,h="SATISFIED";break;case"status":h=f.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),s.exit)for(const f of s.exit)f({type:"exit",code:null});s={}}},on(f,v){s[f]?s[f].add(v):s[f]=new Set([v])},off(f,v){s[f]&&s[f].delete(v)},then(f,v){const m=C=>{if(C.code===0)f({status:h,solution:u,statistics:g});else{const I=a?{message:a.message,...C}:C;if(!v)throw I;v(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var OU=re('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function LU(t,e){te(e,!1);const n=je(),r=()=>ve(Rr,"$puzzleMetaStore",n);let o=F(e,"showModal",12,!1);function a(f,v,m){var C=document.createElement("a"),I=new Blob([f],{type:m});C.href=URL.createObjectURL(I),C.download=v,C.click(),URL.revokeObjectURL(C.href)}function s(){const f=st(Ca);return tp(f)}function c(){const f=s();navigator.clipboard.writeText(f)}function u(){const f=s(),v=Zg(f);navigator.clipboard.writeText(v)}function g(){const f=gu(r()),v=s();a(v,`${f}.mzn`,"text/plain")}function h(){const f=gu(r()),v=s(),m=Zg(v);a(m,`${f}.mzn`,"text/plain")}fe(),Gr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(f){o(f)},children:(f,v)=>{var m=OU(),C=q(m),I=U(C,2),O=U(I,2),b=U(O,2);H(m),De("click",C,c),De("click",I,u),De("click",O,g),De("click",b,h),N(f,m)},$$slots:{default:!0},$$legacy:!0}),ne()}function Oa(t,e,n){const r=[],o=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const g=e.getCell(s,u);if(!g)continue;const h=Number(c[u]),f=n.get(h);f!==void 0&&(r.push(g),o.push([f]))}}const a=qs(r,o);ri(a)}function yU(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const C=[];o.push(C),s(v,m,t[v][m])}function s(v,m,C){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==C||(r[v][m]=!0,o[o.length-1].push([v,m]),s(v+1,m,C),s(v-1,m,C),s(v,m+1,C),s(v,m-1,C))}const c=Array(o.length).fill(0).map(()=>new Set);function u(v,m){for(const[C,I]of v)for(const[O,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=C+O,D=I+b;if(m.some(([$,k])=>$===x&&k===D))return!0}return!1}for(let v=0;v<o.length;v++)for(let m=v+1;m<o.length;m++)u(o[v],o[m])&&(c[v].add(m),c[m].add(v));const g=[1,4,7,9],h=new Array(o.length).fill(0);function f(v,m){for(const C of c[v])if(h[C]===m)return!1;return!0}for(let v=0;v<o.length;v++)for(const m of g)if(f(v,m)){h[v]=m;break}for(let v=0;v<o.length;v++)for(const[m,C]of o[v])a[m][C]=h[v];return a}function AU(t,e){const n=e.grid,r=e.globalConstraints.get(_.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const a=[],s=[];for(let u=0;u<o.length;u++){const g=o[u];for(let h=0;h<g.length;h++){const f=n.getCell(u,h);if(!f||f.given||r&&!f.given&&f.value===null)continue;const v=g[h];a.push(f),s.push(v)}}const c=tv(a,s);ri(c)}function xU(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const a=t[o];if(a!==void 0){Oa(a,e,r);return}}}function SU(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const a=t[o];if(a!==void 0){Oa(a,e,r);return}}}function NU(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const g=e.getCell(s,u);if(!g)continue;r.push(g);const h=c[u];o.push([h+1])}}const a=qs(r,o);ri(a)}function TU(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Oa(n,e,new Map([[0,4],[1,7],[2,9]]))}function DU(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Oa(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function RU(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Oa(n,e,new Map([[1,7],[2,4],[3,9]]))}function kU(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let h=0;h<o.length;h++){const f=o[h];for(let v=0;v<f.length-1;v++){const m=e.getCell(h,v),C=e.getCell(h,v+1);if(!m||!C)continue;const I=f[v],O=f[v+1];if(I===O)continue;const b={colorId:c,p1:{r:h,c:v+1},p2:{r:h+1,c:v+1}};u.push(b)}}for(let h=0;h<s;h++)for(let f=0;f<a-1;f++){const v=e.getCell(f,h),m=e.getCell(f+1,h);if(!v||!m)continue;const C=o[f][h],I=o[f+1][h];if(C===I)continue;const O={colorId:c,p1:{r:f+1,c:h},p2:{r:f+1,c:h+1}};u.push(O)}const g=As(u);Sr(g);return}}function GU(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let g=0;g<u.length;g++){const h=e.getCell(c,g);if(h)for(const f of e.getOrthogonallyAdjacentCells(h)){if(!f||!(f.r>h.r||f.c>h.c))continue;const v=o[h.r][h.c],m=o[f.r][f.c];if(!(v===1&&m===1))continue;const C={colorId:4,p1:{r:h.r+.5,c:h.c+.5},p2:{r:f.r+.5,c:f.c+.5}};a.push(C)}}}const s=As(a);Sr(s);return}}function MU(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=yU(o);if(!a)return;const s=[],c=[];for(let g=0;g<a.length;g++){const h=a[g];for(let f=0;f<h.length;f++){const v=e.getCell(g,f);if(!v)continue;s.push(v);const m=h[f];c.push([m])}}const u=qs(s,c);ri(u);return}}function $U(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let g=0;g<u.length;g++){const h=e.getCell(c,g);if(!h)continue;const f=o[h.r][h.c];if(f===0)continue;const m={colorId:f===1?1:3,marker:"X",r:h.r+.5,c:h.c+.5};a.push(m)}}const s=Ny(a);Sr(s);return}}function FU(t,e){const n=e.grid;Sr(sd()),AU(t,e),NU(t,n),kU(t,n),TU(t,n),DU(t,n),GU(t,n),SU(t,n),MU(t,n),xU(t,n),$U(t,n),RU(t,n)}function UU(){const{subscribe:t,set:e}=Ft(0),n=100;let r=Date.now(),o,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,o=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(o),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(o),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var HU=re('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function PU(t,e){te(e,!1);const n=je(),r=()=>ve(Ca,"$puzzleStore",n),o=()=>ve(ln,"$gridStore",n),a=()=>ve(b,"$timer",n),s=T(),c=T(),u=T(),g=T();let h=T(!1),f=T(!1),v=T(null),m=T(100),C=T("100"),I=T(null),O=T("IDLE");const b=UU();function x(K){return K===null?"":String(K)}function D(K){const oe=Math.floor(K/6e4),_e=Math.floor(K%6e4/1e3),ee=Math.floor(K%1e3/100),le=_e.toString().padStart(2,"0");return`${oe}:${le}.${ee}`}function $(){S(f,!0)}function k(K){const oe=parseInt(K);typeof oe=="number"&&oe>=1&&S(m,oe)}async function Y(){S(I,0),S(O,"SOLVING...");const K=new Gd;pv(),console.log(p(s));const oe=tp(p(s));K.addFile("test.mzn",oe),b.reset(),b.start(),S(v,K.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(v).on("solution",_e=>{const ee=_e.output.json;_e.type==="solution"&&p(I)!==null&&S(I,p(I)+1),FU(ee,p(s))}),p(v).on("error",_e=>{S(u,"Solve"),S(O,"ERROR"),b.stop(),p(v)&&p(v).cancel()}),p(v).then(_e=>{S(O,_e.status),S(u,"Solve"),b.stop()})}function W(){p(v)===null||!p(v).isRunning()?Y():p(v)!==null&&p(v).isRunning()&&(S(O,"IDLE"),S(u,"Solve"),b.stop(),p(v).cancel())}M(()=>r(),()=>{S(s,r())}),M(()=>o(),()=>{S(c,o())}),M(()=>{},()=>{S(u,"Solve")}),M(()=>a(),()=>{S(g,a())}),M(()=>p(v),()=>{p(v)&&(p(v)!==null&&p(v).isRunning()?S(u,"Stop"):S(u,"Solve"))}),pe(),fe(),ul(t,{get isOpen(){return p(h)},set isOpen(K){S(h,K)},$$slots:{"panel-header":(K,oe)=>{cl(K,{slot:"panel-header",title:"Solver",get isOpen(){return p(h)},set isOpen(_e){S(h,_e)},$$legacy:!0})},"panel-content":(K,oe)=>{var _e=HU(),ee=ce(_e),le=U(ee,2);LU(le,{get showModal(){return p(f)},set showModal(Xt){S(f,Xt)},$$legacy:!0});var Ie=U(le,2),me=q(Ie,!0);H(Ie);var Ce=U(Ie,2),Ne=q(Ce,!0);H(Ce);var lt=U(Ce,2),xe=q(lt);Vt(xe),A(xe,"min",1),A(xe,"max",200),A(xe,"step",1),H(lt);var we=U(lt,2),_t=q(we,!0);Z(()=>nt(_t,`Solution Count: ${x(p(I))}`)),H(we);var ct=U(we,2),Un=q(ct,!0);Z(()=>nt(Un,`Elapsed Time: ${D(p(g))}`)),H(ct);var Lt=U(ct,2),Ln=q(Lt,!0);H(Lt),Z(()=>{nt(me,p(u)),nt(Ne,`Max. Solutions: ${p(m)}`),nt(Ln,`Status: ${p(O)}`)}),De("click",ee,$),De("click",Ie,W),qn(xe,()=>p(C),Xt=>S(C,Xt)),De("input",xe,()=>k(p(C))),N(K,_e)}},$$legacy:!0}),ne()}var BU=re('<div class="setting-panel-wrapper svelte-8gul1v"><div class="setting-panel svelte-8gul1v"><!> <!> <!> <!> <!> <!> <!></div></div>');function WU(t){var e=BU(),n=q(e),r=q(n);p8(r);var o=U(r,2);PU(o,{});var a=U(o,2);uM(a,{elementHandlers:Mt});var s=U(a,2);hM(s,{elementHandlers:Mt});var c=U(s,2);nM(c,{elementHandlers:Mt});var u=U(c,2);UM(u,{elementHandlers:Mt});var g=U(u,2);C8(g,{}),H(n),H(e),N(t,e)}var YU=re('<div class="game-wrapper svelte-rf6cgp"><div class="game svelte-rf6cgp"><!> <!> <!></div></div>');function zU(t,e){te(e,!1);const n=je(),r=()=>ve(Js,"$gameModeStore",n),o=T();M(()=>r(),()=>{S(o,r())}),pe(),fe();var a=YU(),s=q(a),c=q(s);{var u=f=>{WU(f)};ge(c,f=>{p(o)===Ii.SETTING&&f(u)})}var g=U(c,2);SG(g,{});var h=U(g,2);XR(h,{}),H(s),H(a),N(t,a),ne()}var jU=re('<header></header> <main class="App svelte-fgnljd"><!></main> <footer></footer>',1);function nH(t,e){te(e,!1);const n=je(),r=()=>ve(kw,"$darkModeStore",n),o=T();uh(async()=>{const u=window.location.href;try{await wU({workerURL:`${u}minizinc-worker.js`,wasmURL:`${u}minizinc.wasm`,dataURL:`${u}minizinc.data`})}catch(g){const h="Failed to initialize MiniZinc: "+g.message;console.log(h)}}),M(()=>r(),()=>{S(o,r()?"dark":"light")}),pe(),fe();var a=jU(),s=U(ce(a),2),c=q(s);zU(c,{}),H(s),Io(2),Z(()=>A(s,"data-theme",p(o))),N(t,a),ne()}export{nH as component,tH as universal};
