var nw=Object.defineProperty;var rw=(t,e,n)=>e in t?nw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>rw(t,typeof e!="symbol"?e+"":e,n);import{b as lu,e as ow,a as N,n as de,t as ne,c as Ae,d as iw}from"../chunks/disclose-version.c9nfQR10.js";import{i as fe}from"../chunks/legacy.BeICcgj8.js";import{A as fh,b as Su,h as bt,G as li,F as ci,O as gh,Y as hh,ad as sw,ae as Og,U as os,c as ur,au as Na,af as xu,a as ja,ag as vh,C as cu,av as yg,aw,H as lw,ax as cw,d as Nu,B as Tu,V as uw,L as dw,I as uu,ay as Du,az as Ru,a1 as _w,a7 as Lg,aA as ph,aB as fw,aC as gw,R as mh,W as hw,S as vw,E as pw,aD as ku,aE as mw,ac as Cw,aF as Ew,aG as Iw,ai as Gu,M as Ch,aH as bw,j as ww,a9 as Ow,v as K,w as Y,p as ae,x as F,t as ee,e as le,l as p,as as Xe,aI as G,$ as x,aJ as Ie,aK as D,m as Z,f as ue,aL as yw,aM as xo,aN as Yc,o as Ag}from"../chunks/runtime.3UijFPFW.js";import{d as Lw,p as U,s as rt,i as ge,e as ps,f as ve,b as No,c as Eh,m as Ih}from"../chunks/props.CJazo4uA.js";import{i as Aw,a as Sw,b as xw,c as Nw,d as Tw,e as Dw,n as Rw,f as kw,l as Mu,g as Me,s as et,r as Gw}from"../chunks/render.7_-GRy3G.js";import{d as Go,w as Ht,g as it}from"../chunks/index.HRmy8yV3.js";import{a as Mw,o as bh}from"../chunks/index-client.CTQVjhPh.js";function At(t,e){return e}function $w(t,e,n,r){for(var o=[],s=e.length,a=0;a<s;a++)aw(e[a].e,o,!0);var c=s>0&&o.length===0&&n!==null;if(c){var u=n.parentNode;lw(u),u.append(n),r.clear(),to(t,e[0].prev,e[s-1].next)}cw(o,()=>{for(var _=0;_<s;_++){var v=e[_];c||(r.delete(v.k),to(t,v.prev,v.next)),Nu(v.e,!c)}})}function lt(t,e,n,r,o,s=null){var a=t,c={flags:e,items:new Map,first:null},u=(e&ph)!==0;if(u){var _=t;a=bt?li(Tu(_)):_.appendChild(fh())}bt&&ci();var v=null,g=!1;Su(()=>{var h=n(),m=gh(h)?h:h==null?[]:hh(h),C=m.length;if(g&&C===0)return;g=C===0;let I=!1;if(bt){var b=a.data===sw;b!==(C===0)&&(a=Og(),li(a),os(!1),I=!0)}if(bt){for(var w=null,L,R=0;R<C;R++){if(ur.nodeType===8&&ur.data===uw){a=ur,I=!0,os(!1);break}var k=m[R],$=r(k,R);L=wh(ur,c,w,null,k,$,R,o,e),c.items.set($,L),w=L}C>0&&li(Og())}if(!bt){var P=dw;Uw(m,c,a,o,e,(P.f&Na)!==0,r)}s!==null&&(C===0?v?xu(v):v=ja(()=>s(a)):v!==null&&vh(v,()=>{v=null})),I&&os(!0),n()}),bt&&(a=ur)}function Uw(t,e,n,r,o,s,a,c){var Ee,De,st,Se;var u=(o&fw)!==0,_=(o&(Du|Ru))!==0,v=t.length,g=e.items,h=e.first,m=h,C,I=null,b,w=[],L=[],R,k,$,P;if(u)for(P=0;P<v;P+=1)R=t[P],k=a(R,P),$=g.get(k),$!==void 0&&((Ee=$.a)==null||Ee.measure(),(b??(b=new Set)).add($));for(P=0;P<v;P+=1){if(R=t[P],k=a(R,P),$=g.get(k),$===void 0){var W=m?m.e.nodes_start:n;I=wh(W,e,I,I===null?e.first:I.next,R,k,P,r,o),g.set(k,I),w=[],L=[],m=I.next;continue}if(_&&Fw($,R,P,o),$.e.f&Na&&(xu($.e),u&&((De=$.a)==null||De.unfix(),(b??(b=new Set)).delete($))),$!==m){if(C!==void 0&&C.has($)){if(w.length<L.length){var X=L[0],J;I=X.prev;var ce=w[0],Q=w[w.length-1];for(J=0;J<w.length;J+=1)Sg(w[J],X,n);for(J=0;J<L.length;J+=1)C.delete(L[J]);to(e,ce.prev,Q.next),to(e,I,ce),to(e,Q,X),m=X,I=Q,P-=1,w=[],L=[]}else C.delete($),Sg($,m,n),to(e,$.prev,$.next),to(e,$,I===null?e.first:I.next),to(e,I,$),I=$;continue}for(w=[],L=[];m!==null&&m.k!==k;)(s||!(m.e.f&Na))&&(C??(C=new Set)).add(m),L.push(m),m=m.next;if(m===null)continue;$=m}w.push($),I=$,m=$.next}if(m!==null||C!==void 0){for(var oe=C===void 0?[]:hh(C);m!==null;)(s||!(m.e.f&Na))&&oe.push(m),m=m.next;var pe=oe.length;if(pe>0){var me=o&ph&&v===0?n:null;if(u){for(P=0;P<pe;P+=1)(st=oe[P].a)==null||st.measure();for(P=0;P<pe;P+=1)(Se=oe[P].a)==null||Se.fix()}$w(e,oe,me,g)}}u&&uu(()=>{var we;if(b!==void 0)for($ of b)(we=$.a)==null||we.apply()}),cu.first=e.first&&e.first.e,cu.last=I&&I.e}function Fw(t,e,n,r){r&Du&&yg(t.v,e),r&Ru?yg(t.i,n):t.i=n}function wh(t,e,n,r,o,s,a,c,u,_){var v=(u&Du)!==0,g=(u&gw)===0,h=v?g?_w(o):Lg(o):o,m=u&Ru?Lg(a):a,C={i:m,v:h,k:s,a:null,e:null,prev:n,next:r};try{return C.e=ja(()=>c(t,h,m),bt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function Sg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==r;){var a=mh(s);o.before(s),s=a}}function to(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Hw(t,e,n,r,o){var s=t,a="",c;Su(()=>{if(a===(a=e()??"")){bt&&ci();return}c!==void 0&&(Nu(c),c=void 0),a!==""&&(c=ja(()=>{if(bt){ur.data;for(var u=ci(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=mh(u);if(u===null)throw hw(),vw;lu(ur,_),s=li(u);return}var v=a+"",g=ow(v);lu(Tu(g),g.lastChild),s.before(g)}))})}function ut(t,e,n,r,o){var c;bt&&ci();var s=(c=e.$$slots)==null?void 0:c[n],a=!1;s===!0&&(s=e[n==="default"?"children":n],a=!0),s===void 0||s(t,a?()=>r:r)}function Oh(t,e,n,r,o,s){let a=bt;bt&&ci();var c,u,_=null;bt&&ur.nodeType===1&&(_=ur,ci());var v=bt?ur:t,g;Su(()=>{const h=e()||null;var m=h==="svg"?ku:null;h!==c&&(g&&(h===null?vh(g,()=>{g=null,u=null}):h===u?xu(g):Nu(g)),h&&h!==u&&(g=ja(()=>{if(_=bt?_:m?document.createElementNS(m,h):document.createElement(h),lu(_,_),r){bt&&Aw(h)&&_.append(document.createComment(""));var C=bt?Tu(_):_.appendChild(fh());bt&&(C===null?os(!1):li(C)),r(_,C)}cu.nodes_end=_,v.before(_)})),c=h,c&&(u=c))},pw),a&&(os(!0),li(v))}function yh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=yh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Pw(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=yh(t))&&(r&&(r+=" "),r+=e);return r}function Lh(t){return typeof t=="object"?Pw(t):t??""}function Kt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;S(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;S(t,"checked",null),t.checked=o}}};t.__on_r=n,Iw(n),Sw()}}function Bw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function Ah(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function Ww(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function S(t,e,n,r){var o=t.__attributes??(t.__attributes={});bt&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[mw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&xh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Sh(t,e,n,r,o=!1,s=!1,a=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=Lh(n.class));var v=xh(t),g=t.__attributes??(t.__attributes={});for(const w in n){let L=n[w];if(u&&w==="value"&&L==null){t.value=t.__value="",c[w]=L;continue}var h=c[w];if(L!==h){c[w]=L;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const R={},k="$$"+w;let $=w.slice(2);var C=kw($);if(xw($)&&($=$.slice(0,-7),R.capture=!0),!C&&h){if(L!=null)continue;t.removeEventListener($,c[k],R),c[k]=null}if(L!=null)if(C)t[`__${$}`]=L,Tw([$]);else{let P=function(W){c[w].call(this,W)};c[k]=Nw($,t,P,R)}else C&&(t[`__${$}`]=void 0)}else if(w==="style"&&L!=null)t.style.cssText=L+"";else if(w==="autofocus")Dw(t,!!L);else if(w==="__value"||w==="value"&&L!=null)t.value=t[w]=t.__value=L;else if(w==="selected"&&u)Ww(t,L);else{var I=w;o||(I=Rw(I));var b=I==="defaultValue"||I==="defaultChecked";if(L==null&&!s&&!b)if(g[w]=null,I==="value"||I==="checked"){let R=t;if(I==="value"){let k=R.defaultValue;R.removeAttribute(I),R.defaultValue=k}else{let k=R.defaultChecked;R.removeAttribute(I),R.defaultChecked=k}}else t.removeAttribute(w);else b||v.includes(I)&&(s||typeof L!="string")?t[I]=L:typeof L!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||S(t,I,L))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var xg=new Map;function xh(t){var e=xg.get(t.nodeName);if(e)return e;xg.set(t.nodeName,e=[]);for(var n,r=t,o=Element.prototype;o!==r;){n=Ew(r);for(var s in n)n[s].set&&e.push(s);r=Cw(r)}return e}function oo(t,e,n){var r=t.__className,o=Nh(e);bt&&t.getAttribute("class")===o?t.__className=o:(r!==o||bt&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function zw(t,e,n){var r=t.__className,o=Nh(e);bt&&t.className===o?t.__className=o:(r!==o||bt&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function Nh(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Kn(t,e,n=e){var r=bw();Mu(t,"input",o=>{var s=o?t.defaultValue:t.value;if(s=Vc(t)?Kc(s):s,n(s),r&&s!==(s=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=s??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||ww(e)==null&&t.value)&&n(Vc(t)?Kc(t.value):t.value),Gu(()=>{var o=e();Vc(t)&&o===Kc(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const jc=new Set;function Va(t,e,n,r,o=r){var s=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),Mu(n,"change",()=>{var _=n.__value;s&&(_=Ng(a,_,n.checked)),o(_)},()=>o(s?[]:null)),Gu(()=>{var _=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}s?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Lw(n.__value,_)}),Ch(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),jc.has(a)||(jc.add(a),uu(()=>{a.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),jc.delete(a)})),uu(()=>{if(c){var _;if(s)_=Ng(a,_,n.checked);else{var v=a.find(g=>g.checked);_=v==null?void 0:v.__value}o(_)}})}function Ng(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Vc(t){var e=t.type;return e==="number"||e==="range"}function Kc(t){return t===""?null:+t}function Yw(t,e,n=e){Mu(t,"change",()=>{n(t.files)}),Gu(()=>{t.files=e()})}function qe(t,e,n){var r=Ow(t,e);r&&r.set&&(t[e]=n,Ch(()=>{t[e]=null}))}function jw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function qn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Xc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Vw(t,e){var s;var n=(s=t.$$events)==null?void 0:s[e.type],r=gh(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}const Kw=!0,rP=Object.freeze(Object.defineProperty({__proto__:null,prerender:Kw},Symbol.toStringTag,{value:"Module"}));function Xw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const zt=Ht(Xw()),qw=Go(zt,t=>t.darkMode);function Zw(t){zt.update(e=>({...e,darkMode:t}))}function Qw(){zt.update(t=>({...t,darkMode:!t.darkMode}))}function Jw(t){zt.update(e=>({...e,penToolActive:t}))}function eO(t){zt.update(e=>({...e,letterToolActive:t}))}function tO(t){zt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function nO(t){zt.update(e=>({...e,checkConflicts:t}))}function rO(t){zt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function oO(t){zt.update(e=>({...e,hideFog:t}))}function iO(t){zt.update(e=>({...e,showSolution:t}))}const Tg=encodeURIComponent("4.3.5");let cr={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ao=[];let qc;function ts(){if(!qc){const e=`importScripts(${JSON.stringify(cr.workerURL)});`;qc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(qc);t.postMessage({wasmURL:cr.wasmURL?cr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Tg}`,cr.workerURL).toString(),dataURL:cr.dataURL?cr.dataURL.toString():new URL(`./minizinc.data?version=${Tg}`,cr.workerURL).toString()}),Ao.push({worker:t,runCount:0})}function Th(){for(;Ao.length<cr.numWorkers;)ts()}async function sO(t){if(cr={...cr,...t},Ao.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Th(),await Promise.race(Ao.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class $u{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new $u;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Th();const o=[];let s=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;s={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:a,runCount:c}=Ao.pop();return a.postMessage({jsonStream:!0,files:s,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:s,runCount:a}=this._run(["--model-check-only"],o.options),c=[];s.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Ao.push({worker:s,runCount:a}):(s.terminate(),ts()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:s,runCount:a}=this._run(["-c","--model-interface-only"],o.options),c=[];let u=null;s.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Ao.push({worker:s,runCount:a}):(s.terminate(),ts()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const s=["-c","--fzn",o],{worker:a}=this._run(s,n.options,[o]);ts();let c={},u=!1,_=null;return a.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const h=m=>{if(m.code===0)v(m.outputFiles[o]);else{const C=_?{message:_.message,...m}:m;if(!g)throw C;g(C)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);ts();let s=null,a={},c=!1,u=null,_={},v="UNKNOWN";return o.onmessage=g=>{if(a[g.data.type])for(const h of a[g.data.type])h(g.data);switch(g.data.type){case"exit":o.terminate(),c=!0,a={};break;case"error":s||(s=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,h){a[g]?a[g].add(h):a[g]=new Set([h])},off(g,h){a[g]&&a[g].delete(h)},then(g,h){const m=C=>{if(C.code===0)g({status:v,solution:u,statistics:_});else{const I=s?{message:s.message,...C}:C;if(!h)throw I;h(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var hi=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(hi||{}),Uu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Uu||{}),Dh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Dh||{}),Rh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Rh||{}),kh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(kh||{}),Gh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(Gh||{}),Ka=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t))(Ka||{}),Fu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Fu||{}),Hu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t))(Hu||{}),Pu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t))(Pu||{}),Bu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Bu||{}),Wu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Wu||{}),zu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(zu||{}),Yu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Yu||{}),ju=(t=>(t.CLONE_REGION="Clone Region",t))(ju||{}),Vu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Vu||{}),Ku=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Ku||{}),Xu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Xu||{}),qu=(t=>(t.MAZE_WALL="Maze Wall",t))(qu||{}),Zu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Zu||{}),Qu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Qu||{}),Mh=(t=>(t.PEN_TOOL="Pen Tool",t))(Mh||{});const Ju={...Dh,...Rh,...kh,...Gh},$h={...Ka,...Fu,...Hu,...Pu,...Bu,...Wu,...zu,...Yu,...ju,...Vu,...Ku,...Xu,...qu,...Zu},d={...Uu,...Ju,...$h,...Qu,...Mh};var T=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(T||{});function aO(t){return Object.values(Ju).includes(t)}function lO(t){return Object.values($h).includes(t)}function ed(t){return Object.values(Fu).includes(t)||t===d.COSMETIC_CELL_ARROW}function td(t){return Object.values(Hu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function cO(t){return Object.values(Ka).includes(t)||ed(t)||td(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function nd(t){return Object.values(Pu).includes(t)||t===d.COSMETIC_EDGE}function Uh(t){return Object.values(Bu).includes(t)||t===d.COSMETIC_CORNER}function rd(t){return Object.values(Wu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function od(t){return Object.values(zu).includes(t)||t===d.COSMETIC_ARROW}function id(t){return Object.values(Yu).includes(t)||t===d.COSMETIC_CAGE}function Fh(t){return Object.values(Xu).includes(t)}function Hh(t){return Object.values(qu).includes(t)}function Ph(t){return Object.values(ju).includes(t)}function fs(t){const e=Object.values(Vu),n=Object.values(Ku);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function uO(t){return Object.values(Zu).includes(t)}function dO(t){return Object.values(Qu).includes(t)}function sd(t){return Object.values(Uu).includes(t)}const _O=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],fO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Bh(t){for(const e of Object.values(d))if(e===t)return e}function Wh(t,e){return Object.values(e).includes(t)}class ui extends Map{constructor(){super()}setConstraint(e,n){return aO(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new ui;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new ui;if(!e)return n;for(const[r,o]of Object.entries(e)){const s=Bh(r);s!==void 0&&Wh(s,Ju)&&typeof o=="boolean"&&o&&n.setConstraint(s,o)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function zh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function ze(t,e){return t.r===e.r&&t.c===e.c}function Yh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function gO(t,e){return{r:t.r*e,c:t.c*e}}function jh(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function vi(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!ze(t,e)}function hO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ra(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Xt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Xa(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function vO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ad(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function pO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const mO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function ld(t){t=t%8;const e=mO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const CO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function qa(t){const e=CO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Vh(t,e){const n=qa(e);return Yh(t,n)}function cd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Kh(t,e,n=!1){const r=t.some(s=>ze(s,e)),o=n?t.some(s=>vi(s,e)):t.some(s=>hO(s,e));if(!r&&o){const s=[...t,e];return Ra(s),s}return t}function Oa(t){return`R${t.r+1}C${t.c+1}`}function ud(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ns={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var EO=ns.exports,Dg;function IO(){return Dg||(Dg=1,function(t,e){(function(){var n,r="4.17.21",o=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",g=1,h=2,m=4,C=1,I=2,b=1,w=2,L=4,R=8,k=16,$=32,P=64,W=128,X=256,J=512,ce=30,Q="...",oe=800,pe=16,me=1,Ee=2,De=3,st=1/0,Se=9007199254740991,we=17976931348623157e292,vt=NaN,ct=4294967295,Ln=ct-1,Un=ct>>>1,Pr=[["ary",W],["bind",b],["bindKey",w],["curry",R],["curryRight",k],["flip",J],["partial",$],["partialRight",P],["rearg",X]],Qt="[object Arguments]",mr="[object Array]",go="[object AsyncFunction]",ir="[object Boolean]",Fn="[object Date]",Bo="[object DOMException]",Br="[object Error]",Rt="[object Function]",Ne="[object GeneratorFunction]",Ce="[object Map]",Re="[object Number]",xe="[object Null]",yt="[object Object]",ks="[object Promise]",wl="[object Proxy]",ho="[object RegExp]",er="[object Set]",Di="[object String]",Gs="[object Symbol]",Ip="[object Undefined]",Ri="[object WeakMap]",bp="[object WeakSet]",ki="[object ArrayBuffer]",Wo="[object DataView]",Ol="[object Float32Array]",yl="[object Float64Array]",Ll="[object Int8Array]",Al="[object Int16Array]",Sl="[object Int32Array]",xl="[object Uint8Array]",Nl="[object Uint8ClampedArray]",Tl="[object Uint16Array]",Dl="[object Uint32Array]",wp=/\b__p \+= '';/g,Op=/\b(__p \+=) '' \+/g,yp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Kd=/&(?:amp|lt|gt|quot|#39);/g,Xd=/[&<>"']/g,Lp=RegExp(Kd.source),Ap=RegExp(Xd.source),Sp=/<%-([\s\S]+?)%>/g,xp=/<%([\s\S]+?)%>/g,qd=/<%=([\s\S]+?)%>/g,Np=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tp=/^\w*$/,Dp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rl=/[\\^$.*+?()[\]{}|]/g,Rp=RegExp(Rl.source),kl=/^\s+/,kp=/\s/,Gp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Mp=/\{\n\/\* \[wrapped with (.+)\] \*/,$p=/,? & /,Up=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fp=/[()=,{}\[\]\/\s]/,Hp=/\\(\\)?/g,Pp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zd=/\w*$/,Bp=/^[-+]0x[0-9a-f]+$/i,Wp=/^0b[01]+$/i,zp=/^\[object .+?Constructor\]$/,Yp=/^0o[0-7]+$/i,jp=/^(?:0|[1-9]\d*)$/,Vp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ms=/($^)/,Kp=/['\n\r\u2028\u2029\\]/g,$s="\\ud800-\\udfff",Xp="\\u0300-\\u036f",qp="\\ufe20-\\ufe2f",Zp="\\u20d0-\\u20ff",Qd=Xp+qp+Zp,Jd="\\u2700-\\u27bf",e_="a-z\\xdf-\\xf6\\xf8-\\xff",Qp="\\xac\\xb1\\xd7\\xf7",Jp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",em="\\u2000-\\u206f",tm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",t_="A-Z\\xc0-\\xd6\\xd8-\\xde",n_="\\ufe0e\\ufe0f",r_=Qp+Jp+em+tm,Gl="['’]",nm="["+$s+"]",o_="["+r_+"]",Us="["+Qd+"]",i_="\\d+",rm="["+Jd+"]",s_="["+e_+"]",a_="[^"+$s+r_+i_+Jd+e_+t_+"]",Ml="\\ud83c[\\udffb-\\udfff]",om="(?:"+Us+"|"+Ml+")",l_="[^"+$s+"]",$l="(?:\\ud83c[\\udde6-\\uddff]){2}",Ul="[\\ud800-\\udbff][\\udc00-\\udfff]",zo="["+t_+"]",c_="\\u200d",u_="(?:"+s_+"|"+a_+")",im="(?:"+zo+"|"+a_+")",d_="(?:"+Gl+"(?:d|ll|m|re|s|t|ve))?",__="(?:"+Gl+"(?:D|LL|M|RE|S|T|VE))?",f_=om+"?",g_="["+n_+"]?",sm="(?:"+c_+"(?:"+[l_,$l,Ul].join("|")+")"+g_+f_+")*",am="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",lm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",h_=g_+f_+sm,cm="(?:"+[rm,$l,Ul].join("|")+")"+h_,um="(?:"+[l_+Us+"?",Us,$l,Ul,nm].join("|")+")",dm=RegExp(Gl,"g"),_m=RegExp(Us,"g"),Fl=RegExp(Ml+"(?="+Ml+")|"+um+h_,"g"),fm=RegExp([zo+"?"+s_+"+"+d_+"(?="+[o_,zo,"$"].join("|")+")",im+"+"+__+"(?="+[o_,zo+u_,"$"].join("|")+")",zo+"?"+u_+"+"+d_,zo+"+"+__,lm,am,i_,cm].join("|"),"g"),gm=RegExp("["+c_+$s+Qd+n_+"]"),hm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],pm=-1,Lt={};Lt[Ol]=Lt[yl]=Lt[Ll]=Lt[Al]=Lt[Sl]=Lt[xl]=Lt[Nl]=Lt[Tl]=Lt[Dl]=!0,Lt[Qt]=Lt[mr]=Lt[ki]=Lt[ir]=Lt[Wo]=Lt[Fn]=Lt[Br]=Lt[Rt]=Lt[Ce]=Lt[Re]=Lt[yt]=Lt[ho]=Lt[er]=Lt[Di]=Lt[Ri]=!1;var wt={};wt[Qt]=wt[mr]=wt[ki]=wt[Wo]=wt[ir]=wt[Fn]=wt[Ol]=wt[yl]=wt[Ll]=wt[Al]=wt[Sl]=wt[Ce]=wt[Re]=wt[yt]=wt[ho]=wt[er]=wt[Di]=wt[Gs]=wt[xl]=wt[Nl]=wt[Tl]=wt[Dl]=!0,wt[Br]=wt[Rt]=wt[Ri]=!1;var mm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Cm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Em={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Im={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bm=parseFloat,wm=parseInt,v_=typeof ya=="object"&&ya&&ya.Object===Object&&ya,Om=typeof self=="object"&&self&&self.Object===Object&&self,jt=v_||Om||Function("return this")(),Hl=e&&!e.nodeType&&e,vo=Hl&&!0&&t&&!t.nodeType&&t,p_=vo&&vo.exports===Hl,Pl=p_&&v_.process,Hn=function(){try{var j=vo&&vo.require&&vo.require("util").types;return j||Pl&&Pl.binding&&Pl.binding("util")}catch{}}(),m_=Hn&&Hn.isArrayBuffer,C_=Hn&&Hn.isDate,E_=Hn&&Hn.isMap,I_=Hn&&Hn.isRegExp,b_=Hn&&Hn.isSet,w_=Hn&&Hn.isTypedArray;function An(j,te,q){switch(q.length){case 0:return j.call(te);case 1:return j.call(te,q[0]);case 2:return j.call(te,q[0],q[1]);case 3:return j.call(te,q[0],q[1],q[2])}return j.apply(te,q)}function ym(j,te,q,Le){for(var Ve=-1,_t=j==null?0:j.length;++Ve<_t;){var Pt=j[Ve];te(Le,Pt,q(Pt),j)}return Le}function Pn(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le&&te(j[q],q,j)!==!1;);return j}function Lm(j,te){for(var q=j==null?0:j.length;q--&&te(j[q],q,j)!==!1;);return j}function O_(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le;)if(!te(j[q],q,j))return!1;return!0}function Wr(j,te){for(var q=-1,Le=j==null?0:j.length,Ve=0,_t=[];++q<Le;){var Pt=j[q];te(Pt,q,j)&&(_t[Ve++]=Pt)}return _t}function Fs(j,te){var q=j==null?0:j.length;return!!q&&Yo(j,te,0)>-1}function Bl(j,te,q){for(var Le=-1,Ve=j==null?0:j.length;++Le<Ve;)if(q(te,j[Le]))return!0;return!1}function Nt(j,te){for(var q=-1,Le=j==null?0:j.length,Ve=Array(Le);++q<Le;)Ve[q]=te(j[q],q,j);return Ve}function zr(j,te){for(var q=-1,Le=te.length,Ve=j.length;++q<Le;)j[Ve+q]=te[q];return j}function Wl(j,te,q,Le){var Ve=-1,_t=j==null?0:j.length;for(Le&&_t&&(q=j[++Ve]);++Ve<_t;)q=te(q,j[Ve],Ve,j);return q}function Am(j,te,q,Le){var Ve=j==null?0:j.length;for(Le&&Ve&&(q=j[--Ve]);Ve--;)q=te(q,j[Ve],Ve,j);return q}function zl(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le;)if(te(j[q],q,j))return!0;return!1}var Sm=Yl("length");function xm(j){return j.split("")}function Nm(j){return j.match(Up)||[]}function y_(j,te,q){var Le;return q(j,function(Ve,_t,Pt){if(te(Ve,_t,Pt))return Le=_t,!1}),Le}function Hs(j,te,q,Le){for(var Ve=j.length,_t=q+(Le?1:-1);Le?_t--:++_t<Ve;)if(te(j[_t],_t,j))return _t;return-1}function Yo(j,te,q){return te===te?Bm(j,te,q):Hs(j,L_,q)}function Tm(j,te,q,Le){for(var Ve=q-1,_t=j.length;++Ve<_t;)if(Le(j[Ve],te))return Ve;return-1}function L_(j){return j!==j}function A_(j,te){var q=j==null?0:j.length;return q?Vl(j,te)/q:vt}function Yl(j){return function(te){return te==null?n:te[j]}}function jl(j){return function(te){return j==null?n:j[te]}}function S_(j,te,q,Le,Ve){return Ve(j,function(_t,Pt,It){q=Le?(Le=!1,_t):te(q,_t,Pt,It)}),q}function Dm(j,te){var q=j.length;for(j.sort(te);q--;)j[q]=j[q].value;return j}function Vl(j,te){for(var q,Le=-1,Ve=j.length;++Le<Ve;){var _t=te(j[Le]);_t!==n&&(q=q===n?_t:q+_t)}return q}function Kl(j,te){for(var q=-1,Le=Array(j);++q<j;)Le[q]=te(q);return Le}function Rm(j,te){return Nt(te,function(q){return[q,j[q]]})}function x_(j){return j&&j.slice(0,R_(j)+1).replace(kl,"")}function Sn(j){return function(te){return j(te)}}function Xl(j,te){return Nt(te,function(q){return j[q]})}function Gi(j,te){return j.has(te)}function N_(j,te){for(var q=-1,Le=j.length;++q<Le&&Yo(te,j[q],0)>-1;);return q}function T_(j,te){for(var q=j.length;q--&&Yo(te,j[q],0)>-1;);return q}function km(j,te){for(var q=j.length,Le=0;q--;)j[q]===te&&++Le;return Le}var Gm=jl(mm),Mm=jl(Cm);function $m(j){return"\\"+Im[j]}function Um(j,te){return j==null?n:j[te]}function jo(j){return gm.test(j)}function Fm(j){return hm.test(j)}function Hm(j){for(var te,q=[];!(te=j.next()).done;)q.push(te.value);return q}function ql(j){var te=-1,q=Array(j.size);return j.forEach(function(Le,Ve){q[++te]=[Ve,Le]}),q}function D_(j,te){return function(q){return j(te(q))}}function Yr(j,te){for(var q=-1,Le=j.length,Ve=0,_t=[];++q<Le;){var Pt=j[q];(Pt===te||Pt===v)&&(j[q]=v,_t[Ve++]=q)}return _t}function Ps(j){var te=-1,q=Array(j.size);return j.forEach(function(Le){q[++te]=Le}),q}function Pm(j){var te=-1,q=Array(j.size);return j.forEach(function(Le){q[++te]=[Le,Le]}),q}function Bm(j,te,q){for(var Le=q-1,Ve=j.length;++Le<Ve;)if(j[Le]===te)return Le;return-1}function Wm(j,te,q){for(var Le=q+1;Le--;)if(j[Le]===te)return Le;return Le}function Vo(j){return jo(j)?Ym(j):Sm(j)}function tr(j){return jo(j)?jm(j):xm(j)}function R_(j){for(var te=j.length;te--&&kp.test(j.charAt(te)););return te}var zm=jl(Em);function Ym(j){for(var te=Fl.lastIndex=0;Fl.test(j);)++te;return te}function jm(j){return j.match(Fl)||[]}function Vm(j){return j.match(fm)||[]}var Km=function j(te){te=te==null?jt:Ko.defaults(jt.Object(),te,Ko.pick(jt,vm));var q=te.Array,Le=te.Date,Ve=te.Error,_t=te.Function,Pt=te.Math,It=te.Object,Zl=te.RegExp,Xm=te.String,Bn=te.TypeError,Bs=q.prototype,qm=_t.prototype,Xo=It.prototype,Ws=te["__core-js_shared__"],zs=qm.toString,mt=Xo.hasOwnProperty,Zm=0,k_=function(){var i=/[^.]+$/.exec(Ws&&Ws.keys&&Ws.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Ys=Xo.toString,Qm=zs.call(It),Jm=jt._,e1=Zl("^"+zs.call(mt).replace(Rl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),js=p_?te.Buffer:n,jr=te.Symbol,Vs=te.Uint8Array,G_=js?js.allocUnsafe:n,Ks=D_(It.getPrototypeOf,It),M_=It.create,$_=Xo.propertyIsEnumerable,Xs=Bs.splice,U_=jr?jr.isConcatSpreadable:n,Mi=jr?jr.iterator:n,po=jr?jr.toStringTag:n,qs=function(){try{var i=bo(It,"defineProperty");return i({},"",{}),i}catch{}}(),t1=te.clearTimeout!==jt.clearTimeout&&te.clearTimeout,n1=Le&&Le.now!==jt.Date.now&&Le.now,r1=te.setTimeout!==jt.setTimeout&&te.setTimeout,Zs=Pt.ceil,Qs=Pt.floor,Ql=It.getOwnPropertySymbols,o1=js?js.isBuffer:n,F_=te.isFinite,i1=Bs.join,s1=D_(It.keys,It),Bt=Pt.max,Jt=Pt.min,a1=Le.now,l1=te.parseInt,H_=Pt.random,c1=Bs.reverse,Jl=bo(te,"DataView"),$i=bo(te,"Map"),ec=bo(te,"Promise"),qo=bo(te,"Set"),Ui=bo(te,"WeakMap"),Fi=bo(It,"create"),Js=Ui&&new Ui,Zo={},u1=wo(Jl),d1=wo($i),_1=wo(ec),f1=wo(qo),g1=wo(Ui),ea=jr?jr.prototype:n,Hi=ea?ea.valueOf:n,P_=ea?ea.toString:n;function y(i){if(kt(i)&&!Ke(i)&&!(i instanceof ot)){if(i instanceof Wn)return i;if(mt.call(i,"__wrapped__"))return Wf(i)}return new Wn(i)}var Qo=function(){function i(){}return function(l){if(!Tt(l))return{};if(M_)return M_(l);i.prototype=l;var f=new i;return i.prototype=n,f}}();function ta(){}function Wn(i,l){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:Sp,evaluate:xp,interpolate:qd,variable:"",imports:{_:y}},y.prototype=ta.prototype,y.prototype.constructor=y,Wn.prototype=Qo(ta.prototype),Wn.prototype.constructor=Wn;function ot(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function h1(){var i=new ot(this.__wrapped__);return i.__actions__=Cn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Cn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Cn(this.__views__),i}function v1(){if(this.__filtered__){var i=new ot(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function p1(){var i=this.__wrapped__.value(),l=this.__dir__,f=Ke(i),E=l<0,O=f?i.length:0,A=x0(0,O,this.__views__),M=A.start,B=A.end,V=B-M,ie=E?B:M-1,se=this.__iteratees__,_e=se.length,be=0,ke=Jt(V,this.__takeCount__);if(!f||!E&&O==V&&ke==V)return _f(i,this.__actions__);var He=[];e:for(;V--&&be<ke;){ie+=l;for(var Qe=-1,Pe=i[ie];++Qe<_e;){var nt=se[Qe],at=nt.iteratee,Tn=nt.type,un=at(Pe);if(Tn==Ee)Pe=un;else if(!un){if(Tn==me)continue e;break e}}He[be++]=Pe}return He}ot.prototype=Qo(ta.prototype),ot.prototype.constructor=ot;function mo(i){var l=-1,f=i==null?0:i.length;for(this.clear();++l<f;){var E=i[l];this.set(E[0],E[1])}}function m1(){this.__data__=Fi?Fi(null):{},this.size=0}function C1(i){var l=this.has(i)&&delete this.__data__[i];return this.size-=l?1:0,l}function E1(i){var l=this.__data__;if(Fi){var f=l[i];return f===u?n:f}return mt.call(l,i)?l[i]:n}function I1(i){var l=this.__data__;return Fi?l[i]!==n:mt.call(l,i)}function b1(i,l){var f=this.__data__;return this.size+=this.has(i)?0:1,f[i]=Fi&&l===n?u:l,this}mo.prototype.clear=m1,mo.prototype.delete=C1,mo.prototype.get=E1,mo.prototype.has=I1,mo.prototype.set=b1;function Cr(i){var l=-1,f=i==null?0:i.length;for(this.clear();++l<f;){var E=i[l];this.set(E[0],E[1])}}function w1(){this.__data__=[],this.size=0}function O1(i){var l=this.__data__,f=na(l,i);if(f<0)return!1;var E=l.length-1;return f==E?l.pop():Xs.call(l,f,1),--this.size,!0}function y1(i){var l=this.__data__,f=na(l,i);return f<0?n:l[f][1]}function L1(i){return na(this.__data__,i)>-1}function A1(i,l){var f=this.__data__,E=na(f,i);return E<0?(++this.size,f.push([i,l])):f[E][1]=l,this}Cr.prototype.clear=w1,Cr.prototype.delete=O1,Cr.prototype.get=y1,Cr.prototype.has=L1,Cr.prototype.set=A1;function Er(i){var l=-1,f=i==null?0:i.length;for(this.clear();++l<f;){var E=i[l];this.set(E[0],E[1])}}function S1(){this.size=0,this.__data__={hash:new mo,map:new($i||Cr),string:new mo}}function x1(i){var l=ga(this,i).delete(i);return this.size-=l?1:0,l}function N1(i){return ga(this,i).get(i)}function T1(i){return ga(this,i).has(i)}function D1(i,l){var f=ga(this,i),E=f.size;return f.set(i,l),this.size+=f.size==E?0:1,this}Er.prototype.clear=S1,Er.prototype.delete=x1,Er.prototype.get=N1,Er.prototype.has=T1,Er.prototype.set=D1;function Co(i){var l=-1,f=i==null?0:i.length;for(this.__data__=new Er;++l<f;)this.add(i[l])}function R1(i){return this.__data__.set(i,u),this}function k1(i){return this.__data__.has(i)}Co.prototype.add=Co.prototype.push=R1,Co.prototype.has=k1;function nr(i){var l=this.__data__=new Cr(i);this.size=l.size}function G1(){this.__data__=new Cr,this.size=0}function M1(i){var l=this.__data__,f=l.delete(i);return this.size=l.size,f}function $1(i){return this.__data__.get(i)}function U1(i){return this.__data__.has(i)}function F1(i,l){var f=this.__data__;if(f instanceof Cr){var E=f.__data__;if(!$i||E.length<o-1)return E.push([i,l]),this.size=++f.size,this;f=this.__data__=new Er(E)}return f.set(i,l),this.size=f.size,this}nr.prototype.clear=G1,nr.prototype.delete=M1,nr.prototype.get=$1,nr.prototype.has=U1,nr.prototype.set=F1;function B_(i,l){var f=Ke(i),E=!f&&Oo(i),O=!f&&!E&&Zr(i),A=!f&&!E&&!O&&ni(i),M=f||E||O||A,B=M?Kl(i.length,Xm):[],V=B.length;for(var ie in i)(l||mt.call(i,ie))&&!(M&&(ie=="length"||O&&(ie=="offset"||ie=="parent")||A&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||Or(ie,V)))&&B.push(ie);return B}function W_(i){var l=i.length;return l?i[dc(0,l-1)]:n}function H1(i,l){return ha(Cn(i),Eo(l,0,i.length))}function P1(i){return ha(Cn(i))}function tc(i,l,f){(f!==n&&!rr(i[l],f)||f===n&&!(l in i))&&Ir(i,l,f)}function Pi(i,l,f){var E=i[l];(!(mt.call(i,l)&&rr(E,f))||f===n&&!(l in i))&&Ir(i,l,f)}function na(i,l){for(var f=i.length;f--;)if(rr(i[f][0],l))return f;return-1}function B1(i,l,f,E){return Vr(i,function(O,A,M){l(E,O,f(O),M)}),E}function z_(i,l){return i&&ar(l,Wt(l),i)}function W1(i,l){return i&&ar(l,In(l),i)}function Ir(i,l,f){l=="__proto__"&&qs?qs(i,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):i[l]=f}function nc(i,l){for(var f=-1,E=l.length,O=q(E),A=i==null;++f<E;)O[f]=A?n:Mc(i,l[f]);return O}function Eo(i,l,f){return i===i&&(f!==n&&(i=i<=f?i:f),l!==n&&(i=i>=l?i:l)),i}function zn(i,l,f,E,O,A){var M,B=l&g,V=l&h,ie=l&m;if(f&&(M=O?f(i,E,O,A):f(i)),M!==n)return M;if(!Tt(i))return i;var se=Ke(i);if(se){if(M=T0(i),!B)return Cn(i,M)}else{var _e=en(i),be=_e==Rt||_e==Ne;if(Zr(i))return hf(i,B);if(_e==yt||_e==Qt||be&&!O){if(M=V||be?{}:kf(i),!B)return V?E0(i,W1(M,i)):C0(i,z_(M,i))}else{if(!wt[_e])return O?i:{};M=D0(i,_e,B)}}A||(A=new nr);var ke=A.get(i);if(ke)return ke;A.set(i,M),cg(i)?i.forEach(function(Pe){M.add(zn(Pe,l,f,Pe,i,A))}):ag(i)&&i.forEach(function(Pe,nt){M.set(nt,zn(Pe,l,f,nt,i,A))});var He=ie?V?bc:Ic:V?In:Wt,Qe=se?n:He(i);return Pn(Qe||i,function(Pe,nt){Qe&&(nt=Pe,Pe=i[nt]),Pi(M,nt,zn(Pe,l,f,nt,i,A))}),M}function z1(i){var l=Wt(i);return function(f){return Y_(f,i,l)}}function Y_(i,l,f){var E=f.length;if(i==null)return!E;for(i=It(i);E--;){var O=f[E],A=l[O],M=i[O];if(M===n&&!(O in i)||!A(M))return!1}return!0}function j_(i,l,f){if(typeof i!="function")throw new Bn(a);return Ki(function(){i.apply(n,f)},l)}function Bi(i,l,f,E){var O=-1,A=Fs,M=!0,B=i.length,V=[],ie=l.length;if(!B)return V;f&&(l=Nt(l,Sn(f))),E?(A=Bl,M=!1):l.length>=o&&(A=Gi,M=!1,l=new Co(l));e:for(;++O<B;){var se=i[O],_e=f==null?se:f(se);if(se=E||se!==0?se:0,M&&_e===_e){for(var be=ie;be--;)if(l[be]===_e)continue e;V.push(se)}else A(l,_e,E)||V.push(se)}return V}var Vr=Ef(sr),V_=Ef(oc,!0);function Y1(i,l){var f=!0;return Vr(i,function(E,O,A){return f=!!l(E,O,A),f}),f}function ra(i,l,f){for(var E=-1,O=i.length;++E<O;){var A=i[E],M=l(A);if(M!=null&&(B===n?M===M&&!Nn(M):f(M,B)))var B=M,V=A}return V}function j1(i,l,f,E){var O=i.length;for(f=Ze(f),f<0&&(f=-f>O?0:O+f),E=E===n||E>O?O:Ze(E),E<0&&(E+=O),E=f>E?0:dg(E);f<E;)i[f++]=l;return i}function K_(i,l){var f=[];return Vr(i,function(E,O,A){l(E,O,A)&&f.push(E)}),f}function Vt(i,l,f,E,O){var A=-1,M=i.length;for(f||(f=k0),O||(O=[]);++A<M;){var B=i[A];l>0&&f(B)?l>1?Vt(B,l-1,f,E,O):zr(O,B):E||(O[O.length]=B)}return O}var rc=If(),X_=If(!0);function sr(i,l){return i&&rc(i,l,Wt)}function oc(i,l){return i&&X_(i,l,Wt)}function oa(i,l){return Wr(l,function(f){return yr(i[f])})}function Io(i,l){l=Xr(l,i);for(var f=0,E=l.length;i!=null&&f<E;)i=i[lr(l[f++])];return f&&f==E?i:n}function q_(i,l,f){var E=l(i);return Ke(i)?E:zr(E,f(i))}function ln(i){return i==null?i===n?Ip:xe:po&&po in It(i)?S0(i):P0(i)}function ic(i,l){return i>l}function V1(i,l){return i!=null&&mt.call(i,l)}function K1(i,l){return i!=null&&l in It(i)}function X1(i,l,f){return i>=Jt(l,f)&&i<Bt(l,f)}function sc(i,l,f){for(var E=f?Bl:Fs,O=i[0].length,A=i.length,M=A,B=q(A),V=1/0,ie=[];M--;){var se=i[M];M&&l&&(se=Nt(se,Sn(l))),V=Jt(se.length,V),B[M]=!f&&(l||O>=120&&se.length>=120)?new Co(M&&se):n}se=i[0];var _e=-1,be=B[0];e:for(;++_e<O&&ie.length<V;){var ke=se[_e],He=l?l(ke):ke;if(ke=f||ke!==0?ke:0,!(be?Gi(be,He):E(ie,He,f))){for(M=A;--M;){var Qe=B[M];if(!(Qe?Gi(Qe,He):E(i[M],He,f)))continue e}be&&be.push(He),ie.push(ke)}}return ie}function q1(i,l,f,E){return sr(i,function(O,A,M){l(E,f(O),A,M)}),E}function Wi(i,l,f){l=Xr(l,i),i=Uf(i,l);var E=i==null?i:i[lr(jn(l))];return E==null?n:An(E,i,f)}function Z_(i){return kt(i)&&ln(i)==Qt}function Z1(i){return kt(i)&&ln(i)==ki}function Q1(i){return kt(i)&&ln(i)==Fn}function zi(i,l,f,E,O){return i===l?!0:i==null||l==null||!kt(i)&&!kt(l)?i!==i&&l!==l:J1(i,l,f,E,zi,O)}function J1(i,l,f,E,O,A){var M=Ke(i),B=Ke(l),V=M?mr:en(i),ie=B?mr:en(l);V=V==Qt?yt:V,ie=ie==Qt?yt:ie;var se=V==yt,_e=ie==yt,be=V==ie;if(be&&Zr(i)){if(!Zr(l))return!1;M=!0,se=!1}if(be&&!se)return A||(A=new nr),M||ni(i)?Tf(i,l,f,E,O,A):L0(i,l,V,f,E,O,A);if(!(f&C)){var ke=se&&mt.call(i,"__wrapped__"),He=_e&&mt.call(l,"__wrapped__");if(ke||He){var Qe=ke?i.value():i,Pe=He?l.value():l;return A||(A=new nr),O(Qe,Pe,f,E,A)}}return be?(A||(A=new nr),A0(i,l,f,E,O,A)):!1}function e0(i){return kt(i)&&en(i)==Ce}function ac(i,l,f,E){var O=f.length,A=O,M=!E;if(i==null)return!A;for(i=It(i);O--;){var B=f[O];if(M&&B[2]?B[1]!==i[B[0]]:!(B[0]in i))return!1}for(;++O<A;){B=f[O];var V=B[0],ie=i[V],se=B[1];if(M&&B[2]){if(ie===n&&!(V in i))return!1}else{var _e=new nr;if(E)var be=E(ie,se,V,i,l,_e);if(!(be===n?zi(se,ie,C|I,E,_e):be))return!1}}return!0}function Q_(i){if(!Tt(i)||M0(i))return!1;var l=yr(i)?e1:zp;return l.test(wo(i))}function t0(i){return kt(i)&&ln(i)==ho}function n0(i){return kt(i)&&en(i)==er}function r0(i){return kt(i)&&Ia(i.length)&&!!Lt[ln(i)]}function J_(i){return typeof i=="function"?i:i==null?bn:typeof i=="object"?Ke(i)?nf(i[0],i[1]):tf(i):bg(i)}function lc(i){if(!Vi(i))return s1(i);var l=[];for(var f in It(i))mt.call(i,f)&&f!="constructor"&&l.push(f);return l}function o0(i){if(!Tt(i))return H0(i);var l=Vi(i),f=[];for(var E in i)E=="constructor"&&(l||!mt.call(i,E))||f.push(E);return f}function cc(i,l){return i<l}function ef(i,l){var f=-1,E=En(i)?q(i.length):[];return Vr(i,function(O,A,M){E[++f]=l(O,A,M)}),E}function tf(i){var l=Oc(i);return l.length==1&&l[0][2]?Mf(l[0][0],l[0][1]):function(f){return f===i||ac(f,i,l)}}function nf(i,l){return Lc(i)&&Gf(l)?Mf(lr(i),l):function(f){var E=Mc(f,i);return E===n&&E===l?$c(f,i):zi(l,E,C|I)}}function ia(i,l,f,E,O){i!==l&&rc(l,function(A,M){if(O||(O=new nr),Tt(A))i0(i,l,M,f,ia,E,O);else{var B=E?E(Sc(i,M),A,M+"",i,l,O):n;B===n&&(B=A),tc(i,M,B)}},In)}function i0(i,l,f,E,O,A,M){var B=Sc(i,f),V=Sc(l,f),ie=M.get(V);if(ie){tc(i,f,ie);return}var se=A?A(B,V,f+"",i,l,M):n,_e=se===n;if(_e){var be=Ke(V),ke=!be&&Zr(V),He=!be&&!ke&&ni(V);se=V,be||ke||He?Ke(B)?se=B:Mt(B)?se=Cn(B):ke?(_e=!1,se=hf(V,!0)):He?(_e=!1,se=vf(V,!0)):se=[]:Xi(V)||Oo(V)?(se=B,Oo(B)?se=_g(B):(!Tt(B)||yr(B))&&(se=kf(V))):_e=!1}_e&&(M.set(V,se),O(se,V,E,A,M),M.delete(V)),tc(i,f,se)}function rf(i,l){var f=i.length;if(f)return l+=l<0?f:0,Or(l,f)?i[l]:n}function of(i,l,f){l.length?l=Nt(l,function(A){return Ke(A)?function(M){return Io(M,A.length===1?A[0]:A)}:A}):l=[bn];var E=-1;l=Nt(l,Sn(Fe()));var O=ef(i,function(A,M,B){var V=Nt(l,function(ie){return ie(A)});return{criteria:V,index:++E,value:A}});return Dm(O,function(A,M){return m0(A,M,f)})}function s0(i,l){return sf(i,l,function(f,E){return $c(i,E)})}function sf(i,l,f){for(var E=-1,O=l.length,A={};++E<O;){var M=l[E],B=Io(i,M);f(B,M)&&Yi(A,Xr(M,i),B)}return A}function a0(i){return function(l){return Io(l,i)}}function uc(i,l,f,E){var O=E?Tm:Yo,A=-1,M=l.length,B=i;for(i===l&&(l=Cn(l)),f&&(B=Nt(i,Sn(f)));++A<M;)for(var V=0,ie=l[A],se=f?f(ie):ie;(V=O(B,se,V,E))>-1;)B!==i&&Xs.call(B,V,1),Xs.call(i,V,1);return i}function af(i,l){for(var f=i?l.length:0,E=f-1;f--;){var O=l[f];if(f==E||O!==A){var A=O;Or(O)?Xs.call(i,O,1):gc(i,O)}}return i}function dc(i,l){return i+Qs(H_()*(l-i+1))}function l0(i,l,f,E){for(var O=-1,A=Bt(Zs((l-i)/(f||1)),0),M=q(A);A--;)M[E?A:++O]=i,i+=f;return M}function _c(i,l){var f="";if(!i||l<1||l>Se)return f;do l%2&&(f+=i),l=Qs(l/2),l&&(i+=i);while(l);return f}function Je(i,l){return xc($f(i,l,bn),i+"")}function c0(i){return W_(ri(i))}function u0(i,l){var f=ri(i);return ha(f,Eo(l,0,f.length))}function Yi(i,l,f,E){if(!Tt(i))return i;l=Xr(l,i);for(var O=-1,A=l.length,M=A-1,B=i;B!=null&&++O<A;){var V=lr(l[O]),ie=f;if(V==="__proto__"||V==="constructor"||V==="prototype")return i;if(O!=M){var se=B[V];ie=E?E(se,V,B):n,ie===n&&(ie=Tt(se)?se:Or(l[O+1])?[]:{})}Pi(B,V,ie),B=B[V]}return i}var lf=Js?function(i,l){return Js.set(i,l),i}:bn,d0=qs?function(i,l){return qs(i,"toString",{configurable:!0,enumerable:!1,value:Fc(l),writable:!0})}:bn;function _0(i){return ha(ri(i))}function Yn(i,l,f){var E=-1,O=i.length;l<0&&(l=-l>O?0:O+l),f=f>O?O:f,f<0&&(f+=O),O=l>f?0:f-l>>>0,l>>>=0;for(var A=q(O);++E<O;)A[E]=i[E+l];return A}function f0(i,l){var f;return Vr(i,function(E,O,A){return f=l(E,O,A),!f}),!!f}function sa(i,l,f){var E=0,O=i==null?E:i.length;if(typeof l=="number"&&l===l&&O<=Un){for(;E<O;){var A=E+O>>>1,M=i[A];M!==null&&!Nn(M)&&(f?M<=l:M<l)?E=A+1:O=A}return O}return fc(i,l,bn,f)}function fc(i,l,f,E){var O=0,A=i==null?0:i.length;if(A===0)return 0;l=f(l);for(var M=l!==l,B=l===null,V=Nn(l),ie=l===n;O<A;){var se=Qs((O+A)/2),_e=f(i[se]),be=_e!==n,ke=_e===null,He=_e===_e,Qe=Nn(_e);if(M)var Pe=E||He;else ie?Pe=He&&(E||be):B?Pe=He&&be&&(E||!ke):V?Pe=He&&be&&!ke&&(E||!Qe):ke||Qe?Pe=!1:Pe=E?_e<=l:_e<l;Pe?O=se+1:A=se}return Jt(A,Ln)}function cf(i,l){for(var f=-1,E=i.length,O=0,A=[];++f<E;){var M=i[f],B=l?l(M):M;if(!f||!rr(B,V)){var V=B;A[O++]=M===0?0:M}}return A}function uf(i){return typeof i=="number"?i:Nn(i)?vt:+i}function xn(i){if(typeof i=="string")return i;if(Ke(i))return Nt(i,xn)+"";if(Nn(i))return P_?P_.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Kr(i,l,f){var E=-1,O=Fs,A=i.length,M=!0,B=[],V=B;if(f)M=!1,O=Bl;else if(A>=o){var ie=l?null:O0(i);if(ie)return Ps(ie);M=!1,O=Gi,V=new Co}else V=l?[]:B;e:for(;++E<A;){var se=i[E],_e=l?l(se):se;if(se=f||se!==0?se:0,M&&_e===_e){for(var be=V.length;be--;)if(V[be]===_e)continue e;l&&V.push(_e),B.push(se)}else O(V,_e,f)||(V!==B&&V.push(_e),B.push(se))}return B}function gc(i,l){return l=Xr(l,i),i=Uf(i,l),i==null||delete i[lr(jn(l))]}function df(i,l,f,E){return Yi(i,l,f(Io(i,l)),E)}function aa(i,l,f,E){for(var O=i.length,A=E?O:-1;(E?A--:++A<O)&&l(i[A],A,i););return f?Yn(i,E?0:A,E?A+1:O):Yn(i,E?A+1:0,E?O:A)}function _f(i,l){var f=i;return f instanceof ot&&(f=f.value()),Wl(l,function(E,O){return O.func.apply(O.thisArg,zr([E],O.args))},f)}function hc(i,l,f){var E=i.length;if(E<2)return E?Kr(i[0]):[];for(var O=-1,A=q(E);++O<E;)for(var M=i[O],B=-1;++B<E;)B!=O&&(A[O]=Bi(A[O]||M,i[B],l,f));return Kr(Vt(A,1),l,f)}function ff(i,l,f){for(var E=-1,O=i.length,A=l.length,M={};++E<O;){var B=E<A?l[E]:n;f(M,i[E],B)}return M}function vc(i){return Mt(i)?i:[]}function pc(i){return typeof i=="function"?i:bn}function Xr(i,l){return Ke(i)?i:Lc(i,l)?[i]:Bf(pt(i))}var g0=Je;function qr(i,l,f){var E=i.length;return f=f===n?E:f,!l&&f>=E?i:Yn(i,l,f)}var gf=t1||function(i){return jt.clearTimeout(i)};function hf(i,l){if(l)return i.slice();var f=i.length,E=G_?G_(f):new i.constructor(f);return i.copy(E),E}function mc(i){var l=new i.constructor(i.byteLength);return new Vs(l).set(new Vs(i)),l}function h0(i,l){var f=l?mc(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.byteLength)}function v0(i){var l=new i.constructor(i.source,Zd.exec(i));return l.lastIndex=i.lastIndex,l}function p0(i){return Hi?It(Hi.call(i)):{}}function vf(i,l){var f=l?mc(i.buffer):i.buffer;return new i.constructor(f,i.byteOffset,i.length)}function pf(i,l){if(i!==l){var f=i!==n,E=i===null,O=i===i,A=Nn(i),M=l!==n,B=l===null,V=l===l,ie=Nn(l);if(!B&&!ie&&!A&&i>l||A&&M&&V&&!B&&!ie||E&&M&&V||!f&&V||!O)return 1;if(!E&&!A&&!ie&&i<l||ie&&f&&O&&!E&&!A||B&&f&&O||!M&&O||!V)return-1}return 0}function m0(i,l,f){for(var E=-1,O=i.criteria,A=l.criteria,M=O.length,B=f.length;++E<M;){var V=pf(O[E],A[E]);if(V){if(E>=B)return V;var ie=f[E];return V*(ie=="desc"?-1:1)}}return i.index-l.index}function mf(i,l,f,E){for(var O=-1,A=i.length,M=f.length,B=-1,V=l.length,ie=Bt(A-M,0),se=q(V+ie),_e=!E;++B<V;)se[B]=l[B];for(;++O<M;)(_e||O<A)&&(se[f[O]]=i[O]);for(;ie--;)se[B++]=i[O++];return se}function Cf(i,l,f,E){for(var O=-1,A=i.length,M=-1,B=f.length,V=-1,ie=l.length,se=Bt(A-B,0),_e=q(se+ie),be=!E;++O<se;)_e[O]=i[O];for(var ke=O;++V<ie;)_e[ke+V]=l[V];for(;++M<B;)(be||O<A)&&(_e[ke+f[M]]=i[O++]);return _e}function Cn(i,l){var f=-1,E=i.length;for(l||(l=q(E));++f<E;)l[f]=i[f];return l}function ar(i,l,f,E){var O=!f;f||(f={});for(var A=-1,M=l.length;++A<M;){var B=l[A],V=E?E(f[B],i[B],B,f,i):n;V===n&&(V=i[B]),O?Ir(f,B,V):Pi(f,B,V)}return f}function C0(i,l){return ar(i,yc(i),l)}function E0(i,l){return ar(i,Df(i),l)}function la(i,l){return function(f,E){var O=Ke(f)?ym:B1,A=l?l():{};return O(f,i,Fe(E,2),A)}}function Jo(i){return Je(function(l,f){var E=-1,O=f.length,A=O>1?f[O-1]:n,M=O>2?f[2]:n;for(A=i.length>3&&typeof A=="function"?(O--,A):n,M&&cn(f[0],f[1],M)&&(A=O<3?n:A,O=1),l=It(l);++E<O;){var B=f[E];B&&i(l,B,E,A)}return l})}function Ef(i,l){return function(f,E){if(f==null)return f;if(!En(f))return i(f,E);for(var O=f.length,A=l?O:-1,M=It(f);(l?A--:++A<O)&&E(M[A],A,M)!==!1;);return f}}function If(i){return function(l,f,E){for(var O=-1,A=It(l),M=E(l),B=M.length;B--;){var V=M[i?B:++O];if(f(A[V],V,A)===!1)break}return l}}function I0(i,l,f){var E=l&b,O=ji(i);function A(){var M=this&&this!==jt&&this instanceof A?O:i;return M.apply(E?f:this,arguments)}return A}function bf(i){return function(l){l=pt(l);var f=jo(l)?tr(l):n,E=f?f[0]:l.charAt(0),O=f?qr(f,1).join(""):l.slice(1);return E[i]()+O}}function ei(i){return function(l){return Wl(Eg(Cg(l).replace(dm,"")),i,"")}}function ji(i){return function(){var l=arguments;switch(l.length){case 0:return new i;case 1:return new i(l[0]);case 2:return new i(l[0],l[1]);case 3:return new i(l[0],l[1],l[2]);case 4:return new i(l[0],l[1],l[2],l[3]);case 5:return new i(l[0],l[1],l[2],l[3],l[4]);case 6:return new i(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new i(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Qo(i.prototype),E=i.apply(f,l);return Tt(E)?E:f}}function b0(i,l,f){var E=ji(i);function O(){for(var A=arguments.length,M=q(A),B=A,V=ti(O);B--;)M[B]=arguments[B];var ie=A<3&&M[0]!==V&&M[A-1]!==V?[]:Yr(M,V);if(A-=ie.length,A<f)return Af(i,l,ca,O.placeholder,n,M,ie,n,n,f-A);var se=this&&this!==jt&&this instanceof O?E:i;return An(se,this,M)}return O}function wf(i){return function(l,f,E){var O=It(l);if(!En(l)){var A=Fe(f,3);l=Wt(l),f=function(B){return A(O[B],B,O)}}var M=i(l,f,E);return M>-1?O[A?l[M]:M]:n}}function Of(i){return wr(function(l){var f=l.length,E=f,O=Wn.prototype.thru;for(i&&l.reverse();E--;){var A=l[E];if(typeof A!="function")throw new Bn(a);if(O&&!M&&fa(A)=="wrapper")var M=new Wn([],!0)}for(E=M?E:f;++E<f;){A=l[E];var B=fa(A),V=B=="wrapper"?wc(A):n;V&&Ac(V[0])&&V[1]==(W|R|$|X)&&!V[4].length&&V[9]==1?M=M[fa(V[0])].apply(M,V[3]):M=A.length==1&&Ac(A)?M[B]():M.thru(A)}return function(){var ie=arguments,se=ie[0];if(M&&ie.length==1&&Ke(se))return M.plant(se).value();for(var _e=0,be=f?l[_e].apply(this,ie):se;++_e<f;)be=l[_e].call(this,be);return be}})}function ca(i,l,f,E,O,A,M,B,V,ie){var se=l&W,_e=l&b,be=l&w,ke=l&(R|k),He=l&J,Qe=be?n:ji(i);function Pe(){for(var nt=arguments.length,at=q(nt),Tn=nt;Tn--;)at[Tn]=arguments[Tn];if(ke)var un=ti(Pe),Dn=km(at,un);if(E&&(at=mf(at,E,O,ke)),A&&(at=Cf(at,A,M,ke)),nt-=Dn,ke&&nt<ie){var $t=Yr(at,un);return Af(i,l,ca,Pe.placeholder,f,at,$t,B,V,ie-nt)}var or=_e?f:this,Ar=be?or[i]:i;return nt=at.length,B?at=B0(at,B):He&&nt>1&&at.reverse(),se&&V<nt&&(at.length=V),this&&this!==jt&&this instanceof Pe&&(Ar=Qe||ji(Ar)),Ar.apply(or,at)}return Pe}function yf(i,l){return function(f,E){return q1(f,i,l(E),{})}}function ua(i,l){return function(f,E){var O;if(f===n&&E===n)return l;if(f!==n&&(O=f),E!==n){if(O===n)return E;typeof f=="string"||typeof E=="string"?(f=xn(f),E=xn(E)):(f=uf(f),E=uf(E)),O=i(f,E)}return O}}function Cc(i){return wr(function(l){return l=Nt(l,Sn(Fe())),Je(function(f){var E=this;return i(l,function(O){return An(O,E,f)})})})}function da(i,l){l=l===n?" ":xn(l);var f=l.length;if(f<2)return f?_c(l,i):l;var E=_c(l,Zs(i/Vo(l)));return jo(l)?qr(tr(E),0,i).join(""):E.slice(0,i)}function w0(i,l,f,E){var O=l&b,A=ji(i);function M(){for(var B=-1,V=arguments.length,ie=-1,se=E.length,_e=q(se+V),be=this&&this!==jt&&this instanceof M?A:i;++ie<se;)_e[ie]=E[ie];for(;V--;)_e[ie++]=arguments[++B];return An(be,O?f:this,_e)}return M}function Lf(i){return function(l,f,E){return E&&typeof E!="number"&&cn(l,f,E)&&(f=E=n),l=Lr(l),f===n?(f=l,l=0):f=Lr(f),E=E===n?l<f?1:-1:Lr(E),l0(l,f,E,i)}}function _a(i){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Vn(l),f=Vn(f)),i(l,f)}}function Af(i,l,f,E,O,A,M,B,V,ie){var se=l&R,_e=se?M:n,be=se?n:M,ke=se?A:n,He=se?n:A;l|=se?$:P,l&=~(se?P:$),l&L||(l&=-4);var Qe=[i,l,O,ke,_e,He,be,B,V,ie],Pe=f.apply(n,Qe);return Ac(i)&&Ff(Pe,Qe),Pe.placeholder=E,Hf(Pe,i,l)}function Ec(i){var l=Pt[i];return function(f,E){if(f=Vn(f),E=E==null?0:Jt(Ze(E),292),E&&F_(f)){var O=(pt(f)+"e").split("e"),A=l(O[0]+"e"+(+O[1]+E));return O=(pt(A)+"e").split("e"),+(O[0]+"e"+(+O[1]-E))}return l(f)}}var O0=qo&&1/Ps(new qo([,-0]))[1]==st?function(i){return new qo(i)}:Bc;function Sf(i){return function(l){var f=en(l);return f==Ce?ql(l):f==er?Pm(l):Rm(l,i(l))}}function br(i,l,f,E,O,A,M,B){var V=l&w;if(!V&&typeof i!="function")throw new Bn(a);var ie=E?E.length:0;if(ie||(l&=-97,E=O=n),M=M===n?M:Bt(Ze(M),0),B=B===n?B:Ze(B),ie-=O?O.length:0,l&P){var se=E,_e=O;E=O=n}var be=V?n:wc(i),ke=[i,l,f,E,O,se,_e,A,M,B];if(be&&F0(ke,be),i=ke[0],l=ke[1],f=ke[2],E=ke[3],O=ke[4],B=ke[9]=ke[9]===n?V?0:i.length:Bt(ke[9]-ie,0),!B&&l&(R|k)&&(l&=-25),!l||l==b)var He=I0(i,l,f);else l==R||l==k?He=b0(i,l,B):(l==$||l==(b|$))&&!O.length?He=w0(i,l,f,E):He=ca.apply(n,ke);var Qe=be?lf:Ff;return Hf(Qe(He,ke),i,l)}function xf(i,l,f,E){return i===n||rr(i,Xo[f])&&!mt.call(E,f)?l:i}function Nf(i,l,f,E,O,A){return Tt(i)&&Tt(l)&&(A.set(l,i),ia(i,l,n,Nf,A),A.delete(l)),i}function y0(i){return Xi(i)?n:i}function Tf(i,l,f,E,O,A){var M=f&C,B=i.length,V=l.length;if(B!=V&&!(M&&V>B))return!1;var ie=A.get(i),se=A.get(l);if(ie&&se)return ie==l&&se==i;var _e=-1,be=!0,ke=f&I?new Co:n;for(A.set(i,l),A.set(l,i);++_e<B;){var He=i[_e],Qe=l[_e];if(E)var Pe=M?E(Qe,He,_e,l,i,A):E(He,Qe,_e,i,l,A);if(Pe!==n){if(Pe)continue;be=!1;break}if(ke){if(!zl(l,function(nt,at){if(!Gi(ke,at)&&(He===nt||O(He,nt,f,E,A)))return ke.push(at)})){be=!1;break}}else if(!(He===Qe||O(He,Qe,f,E,A))){be=!1;break}}return A.delete(i),A.delete(l),be}function L0(i,l,f,E,O,A,M){switch(f){case Wo:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case ki:return!(i.byteLength!=l.byteLength||!A(new Vs(i),new Vs(l)));case ir:case Fn:case Re:return rr(+i,+l);case Br:return i.name==l.name&&i.message==l.message;case ho:case Di:return i==l+"";case Ce:var B=ql;case er:var V=E&C;if(B||(B=Ps),i.size!=l.size&&!V)return!1;var ie=M.get(i);if(ie)return ie==l;E|=I,M.set(i,l);var se=Tf(B(i),B(l),E,O,A,M);return M.delete(i),se;case Gs:if(Hi)return Hi.call(i)==Hi.call(l)}return!1}function A0(i,l,f,E,O,A){var M=f&C,B=Ic(i),V=B.length,ie=Ic(l),se=ie.length;if(V!=se&&!M)return!1;for(var _e=V;_e--;){var be=B[_e];if(!(M?be in l:mt.call(l,be)))return!1}var ke=A.get(i),He=A.get(l);if(ke&&He)return ke==l&&He==i;var Qe=!0;A.set(i,l),A.set(l,i);for(var Pe=M;++_e<V;){be=B[_e];var nt=i[be],at=l[be];if(E)var Tn=M?E(at,nt,be,l,i,A):E(nt,at,be,i,l,A);if(!(Tn===n?nt===at||O(nt,at,f,E,A):Tn)){Qe=!1;break}Pe||(Pe=be=="constructor")}if(Qe&&!Pe){var un=i.constructor,Dn=l.constructor;un!=Dn&&"constructor"in i&&"constructor"in l&&!(typeof un=="function"&&un instanceof un&&typeof Dn=="function"&&Dn instanceof Dn)&&(Qe=!1)}return A.delete(i),A.delete(l),Qe}function wr(i){return xc($f(i,n,jf),i+"")}function Ic(i){return q_(i,Wt,yc)}function bc(i){return q_(i,In,Df)}var wc=Js?function(i){return Js.get(i)}:Bc;function fa(i){for(var l=i.name+"",f=Zo[l],E=mt.call(Zo,l)?f.length:0;E--;){var O=f[E],A=O.func;if(A==null||A==i)return O.name}return l}function ti(i){var l=mt.call(y,"placeholder")?y:i;return l.placeholder}function Fe(){var i=y.iteratee||Hc;return i=i===Hc?J_:i,arguments.length?i(arguments[0],arguments[1]):i}function ga(i,l){var f=i.__data__;return G0(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Oc(i){for(var l=Wt(i),f=l.length;f--;){var E=l[f],O=i[E];l[f]=[E,O,Gf(O)]}return l}function bo(i,l){var f=Um(i,l);return Q_(f)?f:n}function S0(i){var l=mt.call(i,po),f=i[po];try{i[po]=n;var E=!0}catch{}var O=Ys.call(i);return E&&(l?i[po]=f:delete i[po]),O}var yc=Ql?function(i){return i==null?[]:(i=It(i),Wr(Ql(i),function(l){return $_.call(i,l)}))}:Wc,Df=Ql?function(i){for(var l=[];i;)zr(l,yc(i)),i=Ks(i);return l}:Wc,en=ln;(Jl&&en(new Jl(new ArrayBuffer(1)))!=Wo||$i&&en(new $i)!=Ce||ec&&en(ec.resolve())!=ks||qo&&en(new qo)!=er||Ui&&en(new Ui)!=Ri)&&(en=function(i){var l=ln(i),f=l==yt?i.constructor:n,E=f?wo(f):"";if(E)switch(E){case u1:return Wo;case d1:return Ce;case _1:return ks;case f1:return er;case g1:return Ri}return l});function x0(i,l,f){for(var E=-1,O=f.length;++E<O;){var A=f[E],M=A.size;switch(A.type){case"drop":i+=M;break;case"dropRight":l-=M;break;case"take":l=Jt(l,i+M);break;case"takeRight":i=Bt(i,l-M);break}}return{start:i,end:l}}function N0(i){var l=i.match(Mp);return l?l[1].split($p):[]}function Rf(i,l,f){l=Xr(l,i);for(var E=-1,O=l.length,A=!1;++E<O;){var M=lr(l[E]);if(!(A=i!=null&&f(i,M)))break;i=i[M]}return A||++E!=O?A:(O=i==null?0:i.length,!!O&&Ia(O)&&Or(M,O)&&(Ke(i)||Oo(i)))}function T0(i){var l=i.length,f=new i.constructor(l);return l&&typeof i[0]=="string"&&mt.call(i,"index")&&(f.index=i.index,f.input=i.input),f}function kf(i){return typeof i.constructor=="function"&&!Vi(i)?Qo(Ks(i)):{}}function D0(i,l,f){var E=i.constructor;switch(l){case ki:return mc(i);case ir:case Fn:return new E(+i);case Wo:return h0(i,f);case Ol:case yl:case Ll:case Al:case Sl:case xl:case Nl:case Tl:case Dl:return vf(i,f);case Ce:return new E;case Re:case Di:return new E(i);case ho:return v0(i);case er:return new E;case Gs:return p0(i)}}function R0(i,l){var f=l.length;if(!f)return i;var E=f-1;return l[E]=(f>1?"& ":"")+l[E],l=l.join(f>2?", ":" "),i.replace(Gp,`{
/* [wrapped with `+l+`] */
`)}function k0(i){return Ke(i)||Oo(i)||!!(U_&&i&&i[U_])}function Or(i,l){var f=typeof i;return l=l??Se,!!l&&(f=="number"||f!="symbol"&&jp.test(i))&&i>-1&&i%1==0&&i<l}function cn(i,l,f){if(!Tt(f))return!1;var E=typeof l;return(E=="number"?En(f)&&Or(l,f.length):E=="string"&&l in f)?rr(f[l],i):!1}function Lc(i,l){if(Ke(i))return!1;var f=typeof i;return f=="number"||f=="symbol"||f=="boolean"||i==null||Nn(i)?!0:Tp.test(i)||!Np.test(i)||l!=null&&i in It(l)}function G0(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function Ac(i){var l=fa(i),f=y[l];if(typeof f!="function"||!(l in ot.prototype))return!1;if(i===f)return!0;var E=wc(f);return!!E&&i===E[0]}function M0(i){return!!k_&&k_ in i}var $0=Ws?yr:zc;function Vi(i){var l=i&&i.constructor,f=typeof l=="function"&&l.prototype||Xo;return i===f}function Gf(i){return i===i&&!Tt(i)}function Mf(i,l){return function(f){return f==null?!1:f[i]===l&&(l!==n||i in It(f))}}function U0(i){var l=Ca(i,function(E){return f.size===_&&f.clear(),E}),f=l.cache;return l}function F0(i,l){var f=i[1],E=l[1],O=f|E,A=O<(b|w|W),M=E==W&&f==R||E==W&&f==X&&i[7].length<=l[8]||E==(W|X)&&l[7].length<=l[8]&&f==R;if(!(A||M))return i;E&b&&(i[2]=l[2],O|=f&b?0:L);var B=l[3];if(B){var V=i[3];i[3]=V?mf(V,B,l[4]):B,i[4]=V?Yr(i[3],v):l[4]}return B=l[5],B&&(V=i[5],i[5]=V?Cf(V,B,l[6]):B,i[6]=V?Yr(i[5],v):l[6]),B=l[7],B&&(i[7]=B),E&W&&(i[8]=i[8]==null?l[8]:Jt(i[8],l[8])),i[9]==null&&(i[9]=l[9]),i[0]=l[0],i[1]=O,i}function H0(i){var l=[];if(i!=null)for(var f in It(i))l.push(f);return l}function P0(i){return Ys.call(i)}function $f(i,l,f){return l=Bt(l===n?i.length-1:l,0),function(){for(var E=arguments,O=-1,A=Bt(E.length-l,0),M=q(A);++O<A;)M[O]=E[l+O];O=-1;for(var B=q(l+1);++O<l;)B[O]=E[O];return B[l]=f(M),An(i,this,B)}}function Uf(i,l){return l.length<2?i:Io(i,Yn(l,0,-1))}function B0(i,l){for(var f=i.length,E=Jt(l.length,f),O=Cn(i);E--;){var A=l[E];i[E]=Or(A,f)?O[A]:n}return i}function Sc(i,l){if(!(l==="constructor"&&typeof i[l]=="function")&&l!="__proto__")return i[l]}var Ff=Pf(lf),Ki=r1||function(i,l){return jt.setTimeout(i,l)},xc=Pf(d0);function Hf(i,l,f){var E=l+"";return xc(i,R0(E,W0(N0(E),f)))}function Pf(i){var l=0,f=0;return function(){var E=a1(),O=pe-(E-f);if(f=E,O>0){if(++l>=oe)return arguments[0]}else l=0;return i.apply(n,arguments)}}function ha(i,l){var f=-1,E=i.length,O=E-1;for(l=l===n?E:l;++f<l;){var A=dc(f,O),M=i[A];i[A]=i[f],i[f]=M}return i.length=l,i}var Bf=U0(function(i){var l=[];return i.charCodeAt(0)===46&&l.push(""),i.replace(Dp,function(f,E,O,A){l.push(O?A.replace(Hp,"$1"):E||f)}),l});function lr(i){if(typeof i=="string"||Nn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function wo(i){if(i!=null){try{return zs.call(i)}catch{}try{return i+""}catch{}}return""}function W0(i,l){return Pn(Pr,function(f){var E="_."+f[0];l&f[1]&&!Fs(i,E)&&i.push(E)}),i.sort()}function Wf(i){if(i instanceof ot)return i.clone();var l=new Wn(i.__wrapped__,i.__chain__);return l.__actions__=Cn(i.__actions__),l.__index__=i.__index__,l.__values__=i.__values__,l}function z0(i,l,f){(f?cn(i,l,f):l===n)?l=1:l=Bt(Ze(l),0);var E=i==null?0:i.length;if(!E||l<1)return[];for(var O=0,A=0,M=q(Zs(E/l));O<E;)M[A++]=Yn(i,O,O+=l);return M}function Y0(i){for(var l=-1,f=i==null?0:i.length,E=0,O=[];++l<f;){var A=i[l];A&&(O[E++]=A)}return O}function j0(){var i=arguments.length;if(!i)return[];for(var l=q(i-1),f=arguments[0],E=i;E--;)l[E-1]=arguments[E];return zr(Ke(f)?Cn(f):[f],Vt(l,1))}var V0=Je(function(i,l){return Mt(i)?Bi(i,Vt(l,1,Mt,!0)):[]}),K0=Je(function(i,l){var f=jn(l);return Mt(f)&&(f=n),Mt(i)?Bi(i,Vt(l,1,Mt,!0),Fe(f,2)):[]}),X0=Je(function(i,l){var f=jn(l);return Mt(f)&&(f=n),Mt(i)?Bi(i,Vt(l,1,Mt,!0),n,f):[]});function q0(i,l,f){var E=i==null?0:i.length;return E?(l=f||l===n?1:Ze(l),Yn(i,l<0?0:l,E)):[]}function Z0(i,l,f){var E=i==null?0:i.length;return E?(l=f||l===n?1:Ze(l),l=E-l,Yn(i,0,l<0?0:l)):[]}function Q0(i,l){return i&&i.length?aa(i,Fe(l,3),!0,!0):[]}function J0(i,l){return i&&i.length?aa(i,Fe(l,3),!0):[]}function eC(i,l,f,E){var O=i==null?0:i.length;return O?(f&&typeof f!="number"&&cn(i,l,f)&&(f=0,E=O),j1(i,l,f,E)):[]}function zf(i,l,f){var E=i==null?0:i.length;if(!E)return-1;var O=f==null?0:Ze(f);return O<0&&(O=Bt(E+O,0)),Hs(i,Fe(l,3),O)}function Yf(i,l,f){var E=i==null?0:i.length;if(!E)return-1;var O=E-1;return f!==n&&(O=Ze(f),O=f<0?Bt(E+O,0):Jt(O,E-1)),Hs(i,Fe(l,3),O,!0)}function jf(i){var l=i==null?0:i.length;return l?Vt(i,1):[]}function tC(i){var l=i==null?0:i.length;return l?Vt(i,st):[]}function nC(i,l){var f=i==null?0:i.length;return f?(l=l===n?1:Ze(l),Vt(i,l)):[]}function rC(i){for(var l=-1,f=i==null?0:i.length,E={};++l<f;){var O=i[l];E[O[0]]=O[1]}return E}function Vf(i){return i&&i.length?i[0]:n}function oC(i,l,f){var E=i==null?0:i.length;if(!E)return-1;var O=f==null?0:Ze(f);return O<0&&(O=Bt(E+O,0)),Yo(i,l,O)}function iC(i){var l=i==null?0:i.length;return l?Yn(i,0,-1):[]}var sC=Je(function(i){var l=Nt(i,vc);return l.length&&l[0]===i[0]?sc(l):[]}),aC=Je(function(i){var l=jn(i),f=Nt(i,vc);return l===jn(f)?l=n:f.pop(),f.length&&f[0]===i[0]?sc(f,Fe(l,2)):[]}),lC=Je(function(i){var l=jn(i),f=Nt(i,vc);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===i[0]?sc(f,n,l):[]});function cC(i,l){return i==null?"":i1.call(i,l)}function jn(i){var l=i==null?0:i.length;return l?i[l-1]:n}function uC(i,l,f){var E=i==null?0:i.length;if(!E)return-1;var O=E;return f!==n&&(O=Ze(f),O=O<0?Bt(E+O,0):Jt(O,E-1)),l===l?Wm(i,l,O):Hs(i,L_,O,!0)}function dC(i,l){return i&&i.length?rf(i,Ze(l)):n}var _C=Je(Kf);function Kf(i,l){return i&&i.length&&l&&l.length?uc(i,l):i}function fC(i,l,f){return i&&i.length&&l&&l.length?uc(i,l,Fe(f,2)):i}function gC(i,l,f){return i&&i.length&&l&&l.length?uc(i,l,n,f):i}var hC=wr(function(i,l){var f=i==null?0:i.length,E=nc(i,l);return af(i,Nt(l,function(O){return Or(O,f)?+O:O}).sort(pf)),E});function vC(i,l){var f=[];if(!(i&&i.length))return f;var E=-1,O=[],A=i.length;for(l=Fe(l,3);++E<A;){var M=i[E];l(M,E,i)&&(f.push(M),O.push(E))}return af(i,O),f}function Nc(i){return i==null?i:c1.call(i)}function pC(i,l,f){var E=i==null?0:i.length;return E?(f&&typeof f!="number"&&cn(i,l,f)?(l=0,f=E):(l=l==null?0:Ze(l),f=f===n?E:Ze(f)),Yn(i,l,f)):[]}function mC(i,l){return sa(i,l)}function CC(i,l,f){return fc(i,l,Fe(f,2))}function EC(i,l){var f=i==null?0:i.length;if(f){var E=sa(i,l);if(E<f&&rr(i[E],l))return E}return-1}function IC(i,l){return sa(i,l,!0)}function bC(i,l,f){return fc(i,l,Fe(f,2),!0)}function wC(i,l){var f=i==null?0:i.length;if(f){var E=sa(i,l,!0)-1;if(rr(i[E],l))return E}return-1}function OC(i){return i&&i.length?cf(i):[]}function yC(i,l){return i&&i.length?cf(i,Fe(l,2)):[]}function LC(i){var l=i==null?0:i.length;return l?Yn(i,1,l):[]}function AC(i,l,f){return i&&i.length?(l=f||l===n?1:Ze(l),Yn(i,0,l<0?0:l)):[]}function SC(i,l,f){var E=i==null?0:i.length;return E?(l=f||l===n?1:Ze(l),l=E-l,Yn(i,l<0?0:l,E)):[]}function xC(i,l){return i&&i.length?aa(i,Fe(l,3),!1,!0):[]}function NC(i,l){return i&&i.length?aa(i,Fe(l,3)):[]}var TC=Je(function(i){return Kr(Vt(i,1,Mt,!0))}),DC=Je(function(i){var l=jn(i);return Mt(l)&&(l=n),Kr(Vt(i,1,Mt,!0),Fe(l,2))}),RC=Je(function(i){var l=jn(i);return l=typeof l=="function"?l:n,Kr(Vt(i,1,Mt,!0),n,l)});function kC(i){return i&&i.length?Kr(i):[]}function GC(i,l){return i&&i.length?Kr(i,Fe(l,2)):[]}function MC(i,l){return l=typeof l=="function"?l:n,i&&i.length?Kr(i,n,l):[]}function Tc(i){if(!(i&&i.length))return[];var l=0;return i=Wr(i,function(f){if(Mt(f))return l=Bt(f.length,l),!0}),Kl(l,function(f){return Nt(i,Yl(f))})}function Xf(i,l){if(!(i&&i.length))return[];var f=Tc(i);return l==null?f:Nt(f,function(E){return An(l,n,E)})}var $C=Je(function(i,l){return Mt(i)?Bi(i,l):[]}),UC=Je(function(i){return hc(Wr(i,Mt))}),FC=Je(function(i){var l=jn(i);return Mt(l)&&(l=n),hc(Wr(i,Mt),Fe(l,2))}),HC=Je(function(i){var l=jn(i);return l=typeof l=="function"?l:n,hc(Wr(i,Mt),n,l)}),PC=Je(Tc);function BC(i,l){return ff(i||[],l||[],Pi)}function WC(i,l){return ff(i||[],l||[],Yi)}var zC=Je(function(i){var l=i.length,f=l>1?i[l-1]:n;return f=typeof f=="function"?(i.pop(),f):n,Xf(i,f)});function qf(i){var l=y(i);return l.__chain__=!0,l}function YC(i,l){return l(i),i}function va(i,l){return l(i)}var jC=wr(function(i){var l=i.length,f=l?i[0]:0,E=this.__wrapped__,O=function(A){return nc(A,i)};return l>1||this.__actions__.length||!(E instanceof ot)||!Or(f)?this.thru(O):(E=E.slice(f,+f+(l?1:0)),E.__actions__.push({func:va,args:[O],thisArg:n}),new Wn(E,this.__chain__).thru(function(A){return l&&!A.length&&A.push(n),A}))});function VC(){return qf(this)}function KC(){return new Wn(this.value(),this.__chain__)}function XC(){this.__values__===n&&(this.__values__=ug(this.value()));var i=this.__index__>=this.__values__.length,l=i?n:this.__values__[this.__index__++];return{done:i,value:l}}function qC(){return this}function ZC(i){for(var l,f=this;f instanceof ta;){var E=Wf(f);E.__index__=0,E.__values__=n,l?O.__wrapped__=E:l=E;var O=E;f=f.__wrapped__}return O.__wrapped__=i,l}function QC(){var i=this.__wrapped__;if(i instanceof ot){var l=i;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:va,args:[Nc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(Nc)}function JC(){return _f(this.__wrapped__,this.__actions__)}var eE=la(function(i,l,f){mt.call(i,f)?++i[f]:Ir(i,f,1)});function tE(i,l,f){var E=Ke(i)?O_:Y1;return f&&cn(i,l,f)&&(l=n),E(i,Fe(l,3))}function nE(i,l){var f=Ke(i)?Wr:K_;return f(i,Fe(l,3))}var rE=wf(zf),oE=wf(Yf);function iE(i,l){return Vt(pa(i,l),1)}function sE(i,l){return Vt(pa(i,l),st)}function aE(i,l,f){return f=f===n?1:Ze(f),Vt(pa(i,l),f)}function Zf(i,l){var f=Ke(i)?Pn:Vr;return f(i,Fe(l,3))}function Qf(i,l){var f=Ke(i)?Lm:V_;return f(i,Fe(l,3))}var lE=la(function(i,l,f){mt.call(i,f)?i[f].push(l):Ir(i,f,[l])});function cE(i,l,f,E){i=En(i)?i:ri(i),f=f&&!E?Ze(f):0;var O=i.length;return f<0&&(f=Bt(O+f,0)),ba(i)?f<=O&&i.indexOf(l,f)>-1:!!O&&Yo(i,l,f)>-1}var uE=Je(function(i,l,f){var E=-1,O=typeof l=="function",A=En(i)?q(i.length):[];return Vr(i,function(M){A[++E]=O?An(l,M,f):Wi(M,l,f)}),A}),dE=la(function(i,l,f){Ir(i,f,l)});function pa(i,l){var f=Ke(i)?Nt:ef;return f(i,Fe(l,3))}function _E(i,l,f,E){return i==null?[]:(Ke(l)||(l=l==null?[]:[l]),f=E?n:f,Ke(f)||(f=f==null?[]:[f]),of(i,l,f))}var fE=la(function(i,l,f){i[f?0:1].push(l)},function(){return[[],[]]});function gE(i,l,f){var E=Ke(i)?Wl:S_,O=arguments.length<3;return E(i,Fe(l,4),f,O,Vr)}function hE(i,l,f){var E=Ke(i)?Am:S_,O=arguments.length<3;return E(i,Fe(l,4),f,O,V_)}function vE(i,l){var f=Ke(i)?Wr:K_;return f(i,Ea(Fe(l,3)))}function pE(i){var l=Ke(i)?W_:c0;return l(i)}function mE(i,l,f){(f?cn(i,l,f):l===n)?l=1:l=Ze(l);var E=Ke(i)?H1:u0;return E(i,l)}function CE(i){var l=Ke(i)?P1:_0;return l(i)}function EE(i){if(i==null)return 0;if(En(i))return ba(i)?Vo(i):i.length;var l=en(i);return l==Ce||l==er?i.size:lc(i).length}function IE(i,l,f){var E=Ke(i)?zl:f0;return f&&cn(i,l,f)&&(l=n),E(i,Fe(l,3))}var bE=Je(function(i,l){if(i==null)return[];var f=l.length;return f>1&&cn(i,l[0],l[1])?l=[]:f>2&&cn(l[0],l[1],l[2])&&(l=[l[0]]),of(i,Vt(l,1),[])}),ma=n1||function(){return jt.Date.now()};function wE(i,l){if(typeof l!="function")throw new Bn(a);return i=Ze(i),function(){if(--i<1)return l.apply(this,arguments)}}function Jf(i,l,f){return l=f?n:l,l=i&&l==null?i.length:l,br(i,W,n,n,n,n,l)}function eg(i,l){var f;if(typeof l!="function")throw new Bn(a);return i=Ze(i),function(){return--i>0&&(f=l.apply(this,arguments)),i<=1&&(l=n),f}}var Dc=Je(function(i,l,f){var E=b;if(f.length){var O=Yr(f,ti(Dc));E|=$}return br(i,E,l,f,O)}),tg=Je(function(i,l,f){var E=b|w;if(f.length){var O=Yr(f,ti(tg));E|=$}return br(l,E,i,f,O)});function ng(i,l,f){l=f?n:l;var E=br(i,R,n,n,n,n,n,l);return E.placeholder=ng.placeholder,E}function rg(i,l,f){l=f?n:l;var E=br(i,k,n,n,n,n,n,l);return E.placeholder=rg.placeholder,E}function og(i,l,f){var E,O,A,M,B,V,ie=0,se=!1,_e=!1,be=!0;if(typeof i!="function")throw new Bn(a);l=Vn(l)||0,Tt(f)&&(se=!!f.leading,_e="maxWait"in f,A=_e?Bt(Vn(f.maxWait)||0,l):A,be="trailing"in f?!!f.trailing:be);function ke($t){var or=E,Ar=O;return E=O=n,ie=$t,M=i.apply(Ar,or),M}function He($t){return ie=$t,B=Ki(nt,l),se?ke($t):M}function Qe($t){var or=$t-V,Ar=$t-ie,wg=l-or;return _e?Jt(wg,A-Ar):wg}function Pe($t){var or=$t-V,Ar=$t-ie;return V===n||or>=l||or<0||_e&&Ar>=A}function nt(){var $t=ma();if(Pe($t))return at($t);B=Ki(nt,Qe($t))}function at($t){return B=n,be&&E?ke($t):(E=O=n,M)}function Tn(){B!==n&&gf(B),ie=0,E=V=O=B=n}function un(){return B===n?M:at(ma())}function Dn(){var $t=ma(),or=Pe($t);if(E=arguments,O=this,V=$t,or){if(B===n)return He(V);if(_e)return gf(B),B=Ki(nt,l),ke(V)}return B===n&&(B=Ki(nt,l)),M}return Dn.cancel=Tn,Dn.flush=un,Dn}var OE=Je(function(i,l){return j_(i,1,l)}),yE=Je(function(i,l,f){return j_(i,Vn(l)||0,f)});function LE(i){return br(i,J)}function Ca(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new Bn(a);var f=function(){var E=arguments,O=l?l.apply(this,E):E[0],A=f.cache;if(A.has(O))return A.get(O);var M=i.apply(this,E);return f.cache=A.set(O,M)||A,M};return f.cache=new(Ca.Cache||Er),f}Ca.Cache=Er;function Ea(i){if(typeof i!="function")throw new Bn(a);return function(){var l=arguments;switch(l.length){case 0:return!i.call(this);case 1:return!i.call(this,l[0]);case 2:return!i.call(this,l[0],l[1]);case 3:return!i.call(this,l[0],l[1],l[2])}return!i.apply(this,l)}}function AE(i){return eg(2,i)}var SE=g0(function(i,l){l=l.length==1&&Ke(l[0])?Nt(l[0],Sn(Fe())):Nt(Vt(l,1),Sn(Fe()));var f=l.length;return Je(function(E){for(var O=-1,A=Jt(E.length,f);++O<A;)E[O]=l[O].call(this,E[O]);return An(i,this,E)})}),Rc=Je(function(i,l){var f=Yr(l,ti(Rc));return br(i,$,n,l,f)}),ig=Je(function(i,l){var f=Yr(l,ti(ig));return br(i,P,n,l,f)}),xE=wr(function(i,l){return br(i,X,n,n,n,l)});function NE(i,l){if(typeof i!="function")throw new Bn(a);return l=l===n?l:Ze(l),Je(i,l)}function TE(i,l){if(typeof i!="function")throw new Bn(a);return l=l==null?0:Bt(Ze(l),0),Je(function(f){var E=f[l],O=qr(f,0,l);return E&&zr(O,E),An(i,this,O)})}function DE(i,l,f){var E=!0,O=!0;if(typeof i!="function")throw new Bn(a);return Tt(f)&&(E="leading"in f?!!f.leading:E,O="trailing"in f?!!f.trailing:O),og(i,l,{leading:E,maxWait:l,trailing:O})}function RE(i){return Jf(i,1)}function kE(i,l){return Rc(pc(l),i)}function GE(){if(!arguments.length)return[];var i=arguments[0];return Ke(i)?i:[i]}function ME(i){return zn(i,m)}function $E(i,l){return l=typeof l=="function"?l:n,zn(i,m,l)}function UE(i){return zn(i,g|m)}function FE(i,l){return l=typeof l=="function"?l:n,zn(i,g|m,l)}function HE(i,l){return l==null||Y_(i,l,Wt(l))}function rr(i,l){return i===l||i!==i&&l!==l}var PE=_a(ic),BE=_a(function(i,l){return i>=l}),Oo=Z_(function(){return arguments}())?Z_:function(i){return kt(i)&&mt.call(i,"callee")&&!$_.call(i,"callee")},Ke=q.isArray,WE=m_?Sn(m_):Z1;function En(i){return i!=null&&Ia(i.length)&&!yr(i)}function Mt(i){return kt(i)&&En(i)}function zE(i){return i===!0||i===!1||kt(i)&&ln(i)==ir}var Zr=o1||zc,YE=C_?Sn(C_):Q1;function jE(i){return kt(i)&&i.nodeType===1&&!Xi(i)}function VE(i){if(i==null)return!0;if(En(i)&&(Ke(i)||typeof i=="string"||typeof i.splice=="function"||Zr(i)||ni(i)||Oo(i)))return!i.length;var l=en(i);if(l==Ce||l==er)return!i.size;if(Vi(i))return!lc(i).length;for(var f in i)if(mt.call(i,f))return!1;return!0}function KE(i,l){return zi(i,l)}function XE(i,l,f){f=typeof f=="function"?f:n;var E=f?f(i,l):n;return E===n?zi(i,l,n,f):!!E}function kc(i){if(!kt(i))return!1;var l=ln(i);return l==Br||l==Bo||typeof i.message=="string"&&typeof i.name=="string"&&!Xi(i)}function qE(i){return typeof i=="number"&&F_(i)}function yr(i){if(!Tt(i))return!1;var l=ln(i);return l==Rt||l==Ne||l==go||l==wl}function sg(i){return typeof i=="number"&&i==Ze(i)}function Ia(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Se}function Tt(i){var l=typeof i;return i!=null&&(l=="object"||l=="function")}function kt(i){return i!=null&&typeof i=="object"}var ag=E_?Sn(E_):e0;function ZE(i,l){return i===l||ac(i,l,Oc(l))}function QE(i,l,f){return f=typeof f=="function"?f:n,ac(i,l,Oc(l),f)}function JE(i){return lg(i)&&i!=+i}function eI(i){if($0(i))throw new Ve(s);return Q_(i)}function tI(i){return i===null}function nI(i){return i==null}function lg(i){return typeof i=="number"||kt(i)&&ln(i)==Re}function Xi(i){if(!kt(i)||ln(i)!=yt)return!1;var l=Ks(i);if(l===null)return!0;var f=mt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&zs.call(f)==Qm}var Gc=I_?Sn(I_):t0;function rI(i){return sg(i)&&i>=-9007199254740991&&i<=Se}var cg=b_?Sn(b_):n0;function ba(i){return typeof i=="string"||!Ke(i)&&kt(i)&&ln(i)==Di}function Nn(i){return typeof i=="symbol"||kt(i)&&ln(i)==Gs}var ni=w_?Sn(w_):r0;function oI(i){return i===n}function iI(i){return kt(i)&&en(i)==Ri}function sI(i){return kt(i)&&ln(i)==bp}var aI=_a(cc),lI=_a(function(i,l){return i<=l});function ug(i){if(!i)return[];if(En(i))return ba(i)?tr(i):Cn(i);if(Mi&&i[Mi])return Hm(i[Mi]());var l=en(i),f=l==Ce?ql:l==er?Ps:ri;return f(i)}function Lr(i){if(!i)return i===0?i:0;if(i=Vn(i),i===st||i===-1/0){var l=i<0?-1:1;return l*we}return i===i?i:0}function Ze(i){var l=Lr(i),f=l%1;return l===l?f?l-f:l:0}function dg(i){return i?Eo(Ze(i),0,ct):0}function Vn(i){if(typeof i=="number")return i;if(Nn(i))return vt;if(Tt(i)){var l=typeof i.valueOf=="function"?i.valueOf():i;i=Tt(l)?l+"":l}if(typeof i!="string")return i===0?i:+i;i=x_(i);var f=Wp.test(i);return f||Yp.test(i)?wm(i.slice(2),f?2:8):Bp.test(i)?vt:+i}function _g(i){return ar(i,In(i))}function cI(i){return i?Eo(Ze(i),-9007199254740991,Se):i===0?i:0}function pt(i){return i==null?"":xn(i)}var uI=Jo(function(i,l){if(Vi(l)||En(l)){ar(l,Wt(l),i);return}for(var f in l)mt.call(l,f)&&Pi(i,f,l[f])}),fg=Jo(function(i,l){ar(l,In(l),i)}),wa=Jo(function(i,l,f,E){ar(l,In(l),i,E)}),dI=Jo(function(i,l,f,E){ar(l,Wt(l),i,E)}),_I=wr(nc);function fI(i,l){var f=Qo(i);return l==null?f:z_(f,l)}var gI=Je(function(i,l){i=It(i);var f=-1,E=l.length,O=E>2?l[2]:n;for(O&&cn(l[0],l[1],O)&&(E=1);++f<E;)for(var A=l[f],M=In(A),B=-1,V=M.length;++B<V;){var ie=M[B],se=i[ie];(se===n||rr(se,Xo[ie])&&!mt.call(i,ie))&&(i[ie]=A[ie])}return i}),hI=Je(function(i){return i.push(n,Nf),An(gg,n,i)});function vI(i,l){return y_(i,Fe(l,3),sr)}function pI(i,l){return y_(i,Fe(l,3),oc)}function mI(i,l){return i==null?i:rc(i,Fe(l,3),In)}function CI(i,l){return i==null?i:X_(i,Fe(l,3),In)}function EI(i,l){return i&&sr(i,Fe(l,3))}function II(i,l){return i&&oc(i,Fe(l,3))}function bI(i){return i==null?[]:oa(i,Wt(i))}function wI(i){return i==null?[]:oa(i,In(i))}function Mc(i,l,f){var E=i==null?n:Io(i,l);return E===n?f:E}function OI(i,l){return i!=null&&Rf(i,l,V1)}function $c(i,l){return i!=null&&Rf(i,l,K1)}var yI=yf(function(i,l,f){l!=null&&typeof l.toString!="function"&&(l=Ys.call(l)),i[l]=f},Fc(bn)),LI=yf(function(i,l,f){l!=null&&typeof l.toString!="function"&&(l=Ys.call(l)),mt.call(i,l)?i[l].push(f):i[l]=[f]},Fe),AI=Je(Wi);function Wt(i){return En(i)?B_(i):lc(i)}function In(i){return En(i)?B_(i,!0):o0(i)}function SI(i,l){var f={};return l=Fe(l,3),sr(i,function(E,O,A){Ir(f,l(E,O,A),E)}),f}function xI(i,l){var f={};return l=Fe(l,3),sr(i,function(E,O,A){Ir(f,O,l(E,O,A))}),f}var NI=Jo(function(i,l,f){ia(i,l,f)}),gg=Jo(function(i,l,f,E){ia(i,l,f,E)}),TI=wr(function(i,l){var f={};if(i==null)return f;var E=!1;l=Nt(l,function(A){return A=Xr(A,i),E||(E=A.length>1),A}),ar(i,bc(i),f),E&&(f=zn(f,g|h|m,y0));for(var O=l.length;O--;)gc(f,l[O]);return f});function DI(i,l){return hg(i,Ea(Fe(l)))}var RI=wr(function(i,l){return i==null?{}:s0(i,l)});function hg(i,l){if(i==null)return{};var f=Nt(bc(i),function(E){return[E]});return l=Fe(l),sf(i,f,function(E,O){return l(E,O[0])})}function kI(i,l,f){l=Xr(l,i);var E=-1,O=l.length;for(O||(O=1,i=n);++E<O;){var A=i==null?n:i[lr(l[E])];A===n&&(E=O,A=f),i=yr(A)?A.call(i):A}return i}function GI(i,l,f){return i==null?i:Yi(i,l,f)}function MI(i,l,f,E){return E=typeof E=="function"?E:n,i==null?i:Yi(i,l,f,E)}var vg=Sf(Wt),pg=Sf(In);function $I(i,l,f){var E=Ke(i),O=E||Zr(i)||ni(i);if(l=Fe(l,4),f==null){var A=i&&i.constructor;O?f=E?new A:[]:Tt(i)?f=yr(A)?Qo(Ks(i)):{}:f={}}return(O?Pn:sr)(i,function(M,B,V){return l(f,M,B,V)}),f}function UI(i,l){return i==null?!0:gc(i,l)}function FI(i,l,f){return i==null?i:df(i,l,pc(f))}function HI(i,l,f,E){return E=typeof E=="function"?E:n,i==null?i:df(i,l,pc(f),E)}function ri(i){return i==null?[]:Xl(i,Wt(i))}function PI(i){return i==null?[]:Xl(i,In(i))}function BI(i,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Vn(f),f=f===f?f:0),l!==n&&(l=Vn(l),l=l===l?l:0),Eo(Vn(i),l,f)}function WI(i,l,f){return l=Lr(l),f===n?(f=l,l=0):f=Lr(f),i=Vn(i),X1(i,l,f)}function zI(i,l,f){if(f&&typeof f!="boolean"&&cn(i,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof i=="boolean"&&(f=i,i=n)),i===n&&l===n?(i=0,l=1):(i=Lr(i),l===n?(l=i,i=0):l=Lr(l)),i>l){var E=i;i=l,l=E}if(f||i%1||l%1){var O=H_();return Jt(i+O*(l-i+bm("1e-"+((O+"").length-1))),l)}return dc(i,l)}var YI=ei(function(i,l,f){return l=l.toLowerCase(),i+(f?mg(l):l)});function mg(i){return Uc(pt(i).toLowerCase())}function Cg(i){return i=pt(i),i&&i.replace(Vp,Gm).replace(_m,"")}function jI(i,l,f){i=pt(i),l=xn(l);var E=i.length;f=f===n?E:Eo(Ze(f),0,E);var O=f;return f-=l.length,f>=0&&i.slice(f,O)==l}function VI(i){return i=pt(i),i&&Ap.test(i)?i.replace(Xd,Mm):i}function KI(i){return i=pt(i),i&&Rp.test(i)?i.replace(Rl,"\\$&"):i}var XI=ei(function(i,l,f){return i+(f?"-":"")+l.toLowerCase()}),qI=ei(function(i,l,f){return i+(f?" ":"")+l.toLowerCase()}),ZI=bf("toLowerCase");function QI(i,l,f){i=pt(i),l=Ze(l);var E=l?Vo(i):0;if(!l||E>=l)return i;var O=(l-E)/2;return da(Qs(O),f)+i+da(Zs(O),f)}function JI(i,l,f){i=pt(i),l=Ze(l);var E=l?Vo(i):0;return l&&E<l?i+da(l-E,f):i}function eb(i,l,f){i=pt(i),l=Ze(l);var E=l?Vo(i):0;return l&&E<l?da(l-E,f)+i:i}function tb(i,l,f){return f||l==null?l=0:l&&(l=+l),l1(pt(i).replace(kl,""),l||0)}function nb(i,l,f){return(f?cn(i,l,f):l===n)?l=1:l=Ze(l),_c(pt(i),l)}function rb(){var i=arguments,l=pt(i[0]);return i.length<3?l:l.replace(i[1],i[2])}var ob=ei(function(i,l,f){return i+(f?"_":"")+l.toLowerCase()});function ib(i,l,f){return f&&typeof f!="number"&&cn(i,l,f)&&(l=f=n),f=f===n?ct:f>>>0,f?(i=pt(i),i&&(typeof l=="string"||l!=null&&!Gc(l))&&(l=xn(l),!l&&jo(i))?qr(tr(i),0,f):i.split(l,f)):[]}var sb=ei(function(i,l,f){return i+(f?" ":"")+Uc(l)});function ab(i,l,f){return i=pt(i),f=f==null?0:Eo(Ze(f),0,i.length),l=xn(l),i.slice(f,f+l.length)==l}function lb(i,l,f){var E=y.templateSettings;f&&cn(i,l,f)&&(l=n),i=pt(i),l=wa({},l,E,xf);var O=wa({},l.imports,E.imports,xf),A=Wt(O),M=Xl(O,A),B,V,ie=0,se=l.interpolate||Ms,_e="__p += '",be=Zl((l.escape||Ms).source+"|"+se.source+"|"+(se===qd?Pp:Ms).source+"|"+(l.evaluate||Ms).source+"|$","g"),ke="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++pm+"]")+`
`;i.replace(be,function(Pe,nt,at,Tn,un,Dn){return at||(at=Tn),_e+=i.slice(ie,Dn).replace(Kp,$m),nt&&(B=!0,_e+=`' +
__e(`+nt+`) +
'`),un&&(V=!0,_e+=`';
`+un+`;
__p += '`),at&&(_e+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),ie=Dn+Pe.length,Pe}),_e+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)_e=`with (obj) {
`+_e+`
}
`;else if(Fp.test(He))throw new Ve(c);_e=(V?_e.replace(wp,""):_e).replace(Op,"$1").replace(yp,"$1;"),_e="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var Qe=Ig(function(){return _t(A,ke+"return "+_e).apply(n,M)});if(Qe.source=_e,kc(Qe))throw Qe;return Qe}function cb(i){return pt(i).toLowerCase()}function ub(i){return pt(i).toUpperCase()}function db(i,l,f){if(i=pt(i),i&&(f||l===n))return x_(i);if(!i||!(l=xn(l)))return i;var E=tr(i),O=tr(l),A=N_(E,O),M=T_(E,O)+1;return qr(E,A,M).join("")}function _b(i,l,f){if(i=pt(i),i&&(f||l===n))return i.slice(0,R_(i)+1);if(!i||!(l=xn(l)))return i;var E=tr(i),O=T_(E,tr(l))+1;return qr(E,0,O).join("")}function fb(i,l,f){if(i=pt(i),i&&(f||l===n))return i.replace(kl,"");if(!i||!(l=xn(l)))return i;var E=tr(i),O=N_(E,tr(l));return qr(E,O).join("")}function gb(i,l){var f=ce,E=Q;if(Tt(l)){var O="separator"in l?l.separator:O;f="length"in l?Ze(l.length):f,E="omission"in l?xn(l.omission):E}i=pt(i);var A=i.length;if(jo(i)){var M=tr(i);A=M.length}if(f>=A)return i;var B=f-Vo(E);if(B<1)return E;var V=M?qr(M,0,B).join(""):i.slice(0,B);if(O===n)return V+E;if(M&&(B+=V.length-B),Gc(O)){if(i.slice(B).search(O)){var ie,se=V;for(O.global||(O=Zl(O.source,pt(Zd.exec(O))+"g")),O.lastIndex=0;ie=O.exec(se);)var _e=ie.index;V=V.slice(0,_e===n?B:_e)}}else if(i.indexOf(xn(O),B)!=B){var be=V.lastIndexOf(O);be>-1&&(V=V.slice(0,be))}return V+E}function hb(i){return i=pt(i),i&&Lp.test(i)?i.replace(Kd,zm):i}var vb=ei(function(i,l,f){return i+(f?" ":"")+l.toUpperCase()}),Uc=bf("toUpperCase");function Eg(i,l,f){return i=pt(i),l=f?n:l,l===n?Fm(i)?Vm(i):Nm(i):i.match(l)||[]}var Ig=Je(function(i,l){try{return An(i,n,l)}catch(f){return kc(f)?f:new Ve(f)}}),pb=wr(function(i,l){return Pn(l,function(f){f=lr(f),Ir(i,f,Dc(i[f],i))}),i});function mb(i){var l=i==null?0:i.length,f=Fe();return i=l?Nt(i,function(E){if(typeof E[1]!="function")throw new Bn(a);return[f(E[0]),E[1]]}):[],Je(function(E){for(var O=-1;++O<l;){var A=i[O];if(An(A[0],this,E))return An(A[1],this,E)}})}function Cb(i){return z1(zn(i,g))}function Fc(i){return function(){return i}}function Eb(i,l){return i==null||i!==i?l:i}var Ib=Of(),bb=Of(!0);function bn(i){return i}function Hc(i){return J_(typeof i=="function"?i:zn(i,g))}function wb(i){return tf(zn(i,g))}function Ob(i,l){return nf(i,zn(l,g))}var yb=Je(function(i,l){return function(f){return Wi(f,i,l)}}),Lb=Je(function(i,l){return function(f){return Wi(i,f,l)}});function Pc(i,l,f){var E=Wt(l),O=oa(l,E);f==null&&!(Tt(l)&&(O.length||!E.length))&&(f=l,l=i,i=this,O=oa(l,Wt(l)));var A=!(Tt(f)&&"chain"in f)||!!f.chain,M=yr(i);return Pn(O,function(B){var V=l[B];i[B]=V,M&&(i.prototype[B]=function(){var ie=this.__chain__;if(A||ie){var se=i(this.__wrapped__),_e=se.__actions__=Cn(this.__actions__);return _e.push({func:V,args:arguments,thisArg:i}),se.__chain__=ie,se}return V.apply(i,zr([this.value()],arguments))})}),i}function Ab(){return jt._===this&&(jt._=Jm),this}function Bc(){}function Sb(i){return i=Ze(i),Je(function(l){return rf(l,i)})}var xb=Cc(Nt),Nb=Cc(O_),Tb=Cc(zl);function bg(i){return Lc(i)?Yl(lr(i)):a0(i)}function Db(i){return function(l){return i==null?n:Io(i,l)}}var Rb=Lf(),kb=Lf(!0);function Wc(){return[]}function zc(){return!1}function Gb(){return{}}function Mb(){return""}function $b(){return!0}function Ub(i,l){if(i=Ze(i),i<1||i>Se)return[];var f=ct,E=Jt(i,ct);l=Fe(l),i-=ct;for(var O=Kl(E,l);++f<i;)l(f);return O}function Fb(i){return Ke(i)?Nt(i,lr):Nn(i)?[i]:Cn(Bf(pt(i)))}function Hb(i){var l=++Zm;return pt(i)+l}var Pb=ua(function(i,l){return i+l},0),Bb=Ec("ceil"),Wb=ua(function(i,l){return i/l},1),zb=Ec("floor");function Yb(i){return i&&i.length?ra(i,bn,ic):n}function jb(i,l){return i&&i.length?ra(i,Fe(l,2),ic):n}function Vb(i){return A_(i,bn)}function Kb(i,l){return A_(i,Fe(l,2))}function Xb(i){return i&&i.length?ra(i,bn,cc):n}function qb(i,l){return i&&i.length?ra(i,Fe(l,2),cc):n}var Zb=ua(function(i,l){return i*l},1),Qb=Ec("round"),Jb=ua(function(i,l){return i-l},0);function ew(i){return i&&i.length?Vl(i,bn):0}function tw(i,l){return i&&i.length?Vl(i,Fe(l,2)):0}return y.after=wE,y.ary=Jf,y.assign=uI,y.assignIn=fg,y.assignInWith=wa,y.assignWith=dI,y.at=_I,y.before=eg,y.bind=Dc,y.bindAll=pb,y.bindKey=tg,y.castArray=GE,y.chain=qf,y.chunk=z0,y.compact=Y0,y.concat=j0,y.cond=mb,y.conforms=Cb,y.constant=Fc,y.countBy=eE,y.create=fI,y.curry=ng,y.curryRight=rg,y.debounce=og,y.defaults=gI,y.defaultsDeep=hI,y.defer=OE,y.delay=yE,y.difference=V0,y.differenceBy=K0,y.differenceWith=X0,y.drop=q0,y.dropRight=Z0,y.dropRightWhile=Q0,y.dropWhile=J0,y.fill=eC,y.filter=nE,y.flatMap=iE,y.flatMapDeep=sE,y.flatMapDepth=aE,y.flatten=jf,y.flattenDeep=tC,y.flattenDepth=nC,y.flip=LE,y.flow=Ib,y.flowRight=bb,y.fromPairs=rC,y.functions=bI,y.functionsIn=wI,y.groupBy=lE,y.initial=iC,y.intersection=sC,y.intersectionBy=aC,y.intersectionWith=lC,y.invert=yI,y.invertBy=LI,y.invokeMap=uE,y.iteratee=Hc,y.keyBy=dE,y.keys=Wt,y.keysIn=In,y.map=pa,y.mapKeys=SI,y.mapValues=xI,y.matches=wb,y.matchesProperty=Ob,y.memoize=Ca,y.merge=NI,y.mergeWith=gg,y.method=yb,y.methodOf=Lb,y.mixin=Pc,y.negate=Ea,y.nthArg=Sb,y.omit=TI,y.omitBy=DI,y.once=AE,y.orderBy=_E,y.over=xb,y.overArgs=SE,y.overEvery=Nb,y.overSome=Tb,y.partial=Rc,y.partialRight=ig,y.partition=fE,y.pick=RI,y.pickBy=hg,y.property=bg,y.propertyOf=Db,y.pull=_C,y.pullAll=Kf,y.pullAllBy=fC,y.pullAllWith=gC,y.pullAt=hC,y.range=Rb,y.rangeRight=kb,y.rearg=xE,y.reject=vE,y.remove=vC,y.rest=NE,y.reverse=Nc,y.sampleSize=mE,y.set=GI,y.setWith=MI,y.shuffle=CE,y.slice=pC,y.sortBy=bE,y.sortedUniq=OC,y.sortedUniqBy=yC,y.split=ib,y.spread=TE,y.tail=LC,y.take=AC,y.takeRight=SC,y.takeRightWhile=xC,y.takeWhile=NC,y.tap=YC,y.throttle=DE,y.thru=va,y.toArray=ug,y.toPairs=vg,y.toPairsIn=pg,y.toPath=Fb,y.toPlainObject=_g,y.transform=$I,y.unary=RE,y.union=TC,y.unionBy=DC,y.unionWith=RC,y.uniq=kC,y.uniqBy=GC,y.uniqWith=MC,y.unset=UI,y.unzip=Tc,y.unzipWith=Xf,y.update=FI,y.updateWith=HI,y.values=ri,y.valuesIn=PI,y.without=$C,y.words=Eg,y.wrap=kE,y.xor=UC,y.xorBy=FC,y.xorWith=HC,y.zip=PC,y.zipObject=BC,y.zipObjectDeep=WC,y.zipWith=zC,y.entries=vg,y.entriesIn=pg,y.extend=fg,y.extendWith=wa,Pc(y,y),y.add=Pb,y.attempt=Ig,y.camelCase=YI,y.capitalize=mg,y.ceil=Bb,y.clamp=BI,y.clone=ME,y.cloneDeep=UE,y.cloneDeepWith=FE,y.cloneWith=$E,y.conformsTo=HE,y.deburr=Cg,y.defaultTo=Eb,y.divide=Wb,y.endsWith=jI,y.eq=rr,y.escape=VI,y.escapeRegExp=KI,y.every=tE,y.find=rE,y.findIndex=zf,y.findKey=vI,y.findLast=oE,y.findLastIndex=Yf,y.findLastKey=pI,y.floor=zb,y.forEach=Zf,y.forEachRight=Qf,y.forIn=mI,y.forInRight=CI,y.forOwn=EI,y.forOwnRight=II,y.get=Mc,y.gt=PE,y.gte=BE,y.has=OI,y.hasIn=$c,y.head=Vf,y.identity=bn,y.includes=cE,y.indexOf=oC,y.inRange=WI,y.invoke=AI,y.isArguments=Oo,y.isArray=Ke,y.isArrayBuffer=WE,y.isArrayLike=En,y.isArrayLikeObject=Mt,y.isBoolean=zE,y.isBuffer=Zr,y.isDate=YE,y.isElement=jE,y.isEmpty=VE,y.isEqual=KE,y.isEqualWith=XE,y.isError=kc,y.isFinite=qE,y.isFunction=yr,y.isInteger=sg,y.isLength=Ia,y.isMap=ag,y.isMatch=ZE,y.isMatchWith=QE,y.isNaN=JE,y.isNative=eI,y.isNil=nI,y.isNull=tI,y.isNumber=lg,y.isObject=Tt,y.isObjectLike=kt,y.isPlainObject=Xi,y.isRegExp=Gc,y.isSafeInteger=rI,y.isSet=cg,y.isString=ba,y.isSymbol=Nn,y.isTypedArray=ni,y.isUndefined=oI,y.isWeakMap=iI,y.isWeakSet=sI,y.join=cC,y.kebabCase=XI,y.last=jn,y.lastIndexOf=uC,y.lowerCase=qI,y.lowerFirst=ZI,y.lt=aI,y.lte=lI,y.max=Yb,y.maxBy=jb,y.mean=Vb,y.meanBy=Kb,y.min=Xb,y.minBy=qb,y.stubArray=Wc,y.stubFalse=zc,y.stubObject=Gb,y.stubString=Mb,y.stubTrue=$b,y.multiply=Zb,y.nth=dC,y.noConflict=Ab,y.noop=Bc,y.now=ma,y.pad=QI,y.padEnd=JI,y.padStart=eb,y.parseInt=tb,y.random=zI,y.reduce=gE,y.reduceRight=hE,y.repeat=nb,y.replace=rb,y.result=kI,y.round=Qb,y.runInContext=j,y.sample=pE,y.size=EE,y.snakeCase=ob,y.some=IE,y.sortedIndex=mC,y.sortedIndexBy=CC,y.sortedIndexOf=EC,y.sortedLastIndex=IC,y.sortedLastIndexBy=bC,y.sortedLastIndexOf=wC,y.startCase=sb,y.startsWith=ab,y.subtract=Jb,y.sum=ew,y.sumBy=tw,y.template=lb,y.times=Ub,y.toFinite=Lr,y.toInteger=Ze,y.toLength=dg,y.toLower=cb,y.toNumber=Vn,y.toSafeInteger=cI,y.toString=pt,y.toUpper=ub,y.trim=db,y.trimEnd=_b,y.trimStart=fb,y.truncate=gb,y.unescape=hb,y.uniqueId=Hb,y.upperCase=vb,y.upperFirst=Uc,y.each=Zf,y.eachRight=Qf,y.first=Vf,Pc(y,function(){var i={};return sr(y,function(l,f){mt.call(y.prototype,f)||(i[f]=l)}),i}(),{chain:!1}),y.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){y[i].placeholder=y}),Pn(["drop","take"],function(i,l){ot.prototype[i]=function(f){f=f===n?1:Bt(Ze(f),0);var E=this.__filtered__&&!l?new ot(this):this.clone();return E.__filtered__?E.__takeCount__=Jt(f,E.__takeCount__):E.__views__.push({size:Jt(f,ct),type:i+(E.__dir__<0?"Right":"")}),E},ot.prototype[i+"Right"]=function(f){return this.reverse()[i](f).reverse()}}),Pn(["filter","map","takeWhile"],function(i,l){var f=l+1,E=f==me||f==De;ot.prototype[i]=function(O){var A=this.clone();return A.__iteratees__.push({iteratee:Fe(O,3),type:f}),A.__filtered__=A.__filtered__||E,A}}),Pn(["head","last"],function(i,l){var f="take"+(l?"Right":"");ot.prototype[i]=function(){return this[f](1).value()[0]}}),Pn(["initial","tail"],function(i,l){var f="drop"+(l?"":"Right");ot.prototype[i]=function(){return this.__filtered__?new ot(this):this[f](1)}}),ot.prototype.compact=function(){return this.filter(bn)},ot.prototype.find=function(i){return this.filter(i).head()},ot.prototype.findLast=function(i){return this.reverse().find(i)},ot.prototype.invokeMap=Je(function(i,l){return typeof i=="function"?new ot(this):this.map(function(f){return Wi(f,i,l)})}),ot.prototype.reject=function(i){return this.filter(Ea(Fe(i)))},ot.prototype.slice=function(i,l){i=Ze(i);var f=this;return f.__filtered__&&(i>0||l<0)?new ot(f):(i<0?f=f.takeRight(-i):i&&(f=f.drop(i)),l!==n&&(l=Ze(l),f=l<0?f.dropRight(-l):f.take(l-i)),f)},ot.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},ot.prototype.toArray=function(){return this.take(ct)},sr(ot.prototype,function(i,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),O=y[E?"take"+(l=="last"?"Right":""):l],A=E||/^find/.test(l);O&&(y.prototype[l]=function(){var M=this.__wrapped__,B=E?[1]:arguments,V=M instanceof ot,ie=B[0],se=V||Ke(M),_e=function(nt){var at=O.apply(y,zr([nt],B));return E&&be?at[0]:at};se&&f&&typeof ie=="function"&&ie.length!=1&&(V=se=!1);var be=this.__chain__,ke=!!this.__actions__.length,He=A&&!be,Qe=V&&!ke;if(!A&&se){M=Qe?M:new ot(this);var Pe=i.apply(M,B);return Pe.__actions__.push({func:va,args:[_e],thisArg:n}),new Wn(Pe,be)}return He&&Qe?i.apply(this,B):(Pe=this.thru(_e),He?E?Pe.value()[0]:Pe.value():Pe)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(i){var l=Bs[i],f=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",E=/^(?:pop|shift)$/.test(i);y.prototype[i]=function(){var O=arguments;if(E&&!this.__chain__){var A=this.value();return l.apply(Ke(A)?A:[],O)}return this[f](function(M){return l.apply(Ke(M)?M:[],O)})}}),sr(ot.prototype,function(i,l){var f=y[l];if(f){var E=f.name+"";mt.call(Zo,E)||(Zo[E]=[]),Zo[E].push({name:l,func:f})}}),Zo[ca(n,w).name]=[{name:"wrapper",func:n}],ot.prototype.clone=h1,ot.prototype.reverse=v1,ot.prototype.value=p1,y.prototype.at=jC,y.prototype.chain=VC,y.prototype.commit=KC,y.prototype.next=XC,y.prototype.plant=ZC,y.prototype.reverse=QC,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=JC,y.prototype.first=y.prototype.head,Mi&&(y.prototype[Mi]=qC),y},Ko=Km();vo?((vo.exports=Ko)._=Ko,Hl._=Ko):jt._=Ko}).call(EO)}(ns,ns.exports)),ns.exports}var St=IO(),H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function wn(t,e,n){n!==void 0&&(t[e]=n)}function bO(t){var e,n,r,o,s,a,c,u,_,v,g,h,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(s=t.inset)!=null&&s.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function du(t){var n,r,o,s,a,c,u,_,v,g,h,m,C,I,b,w,L,R,k,$,P,W;const e={type:t.type};return wn(e,"n",(n=t.n)==null?void 0:n.value),wn(e,"r",(r=t.r)==null?void 0:r.value),wn(e,"height",(o=t.height)==null?void 0:o.value),wn(e,"width",(s=t.width)==null?void 0:s.value),wn(e,"inset",(a=t.inset)==null?void 0:a.value),wn(e,"angle",(c=t.angle)==null?void 0:c.value),wn(e,"fill",(u=t.fill)==null?void 0:u.value),wn(e,"stroke",(_=t.stroke)==null?void 0:_.value),wn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),wn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),wn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),wn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),wn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),wn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:w.value,shortenTail:(R=(L=t.linePathOptions)==null?void 0:L.shortenTail)==null?void 0:R.value,bezierRounding:($=(k=t.linePathOptions)==null?void 0:k.bezierRounding)==null?void 0:$.value,closeLoops:(W=(P=t.linePathOptions)==null?void 0:P.closeLoops)==null?void 0:W.value}),e}function wO(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const OO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},yO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},LO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Xh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},qh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ms={type:"Line",strokeWidth:.125,stroke:"gray"},dd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},AO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},SO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},xO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):Jh(t)==="[object Array]"}function NO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function TO(t){return t==null?"":NO(t)}function _r(t){return typeof t=="string"}function Zh(t){return typeof t=="number"}function DO(t){return t===!0||t===!1||RO(t)&&Jh(t)=="[object Boolean]"}function Qh(t){return typeof t=="object"}function RO(t){return Qh(t)&&t!==null}function Gn(t){return t!=null}function Zc(t){return!t.trim().length}function Jh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kO="Incorrect 'index' type",GO=t=>`Invalid value for key ${t}`,MO=t=>`Pattern length exceeds max of ${t}.`,$O=t=>`Missing ${t} property in key`,UO=t=>`Property 'weight' in key '${t}' must be a positive integer`,Rg=Object.prototype.hasOwnProperty;class FO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=ev(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ev(t){let e=null,n=null,r=null,o=1,s=null;if(_r(t)||xr(t))r=t,e=kg(t),n=_u(t);else{if(!Rg.call(t,"name"))throw new Error($O("name"));const a=t.name;if(r=a,Rg.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(UO(a));e=kg(a),n=_u(a),s=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:s}}function kg(t){return xr(t)?t:t.split(".")}function _u(t){return xr(t)?t.join("."):t}function HO(t,e){let n=[],r=!1;const o=(s,a,c)=>{if(Gn(s))if(!a[c])n.push(s);else{let u=a[c];const _=s[u];if(!Gn(_))return;if(c===a.length-1&&(_r(_)||Zh(_)||DO(_)))n.push(TO(_));else if(xr(_)){r=!0;for(let v=0,g=_.length;v<g;v+=1)o(_[v],a,c+1)}else a.length&&o(_,a,c+1)}};return o(t,_r(e)?e.split("."):e,0),r?n:n[0]}const PO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},WO={location:0,threshold:.6,distance:100},zO={useExtendedSearch:!1,getFn:HO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...BO,...PO,...WO,...zO};const YO=/[^ ]+/g;function jO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const s=o.match(YO).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(s,c),c},clear(){n.clear()}}}class _d{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=jO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_r(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();_r(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Gn(e)||Zc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,s)=>{let a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Gn(a)){if(xr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(Gn(v))if(_r(v)&&!Zc(v)){let g={v,i:_,n:this.norm.get(v)};c.push(g)}else xr(v)&&v.forEach((g,h)=>{u.push({nestedArrIndex:h,value:g})})}r.$[s]=c}else if(_r(a)&&!Zc(a)){let c={v:a,n:this.norm.get(a)};r.$[s]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function tv(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const o=new _d({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(ev)),o.setSources(e),o.create(),o}function VO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:o}=t,s=new _d({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(o),s}function La(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Ye.distance,ignoreLocation:s=Ye.ignoreLocation}={}){const a=e/t.length;if(s)return a;const c=Math.abs(r-n);return o?a+c/o:c?1:a}function KO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,o=-1,s=0;for(let a=t.length;s<a;s+=1){let c=t[s];c&&r===-1?r=s:!c&&r!==-1&&(o=s-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Lo=32;function XO(t,e,n,{location:r=Ye.location,distance:o=Ye.distance,threshold:s=Ye.threshold,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>Lo)throw new Error(MO(Lo));const v=e.length,g=t.length,h=Math.max(0,Math.min(r,g));let m=s,C=h;const I=c>1||u,b=I?Array(g):[];let w;for(;(w=t.indexOf(e,C))>-1;){let W=La(e,{currentLocation:w,expectedLocation:h,distance:o,ignoreLocation:_});if(m=Math.min(W,m),C=w+v,I){let X=0;for(;X<v;)b[w+X]=1,X+=1}}C=-1;let L=[],R=1,k=v+g;const $=1<<v-1;for(let W=0;W<v;W+=1){let X=0,J=k;for(;X<J;)La(e,{errors:W,currentLocation:h+J,expectedLocation:h,distance:o,ignoreLocation:_})<=m?X=J:k=J,J=Math.floor((k-X)/2+X);k=J;let ce=Math.max(1,h-J+1),Q=a?g:Math.min(h+J,g)+v,oe=Array(Q+2);oe[Q+1]=(1<<W)-1;for(let me=Q;me>=ce;me-=1){let Ee=me-1,De=n[t.charAt(Ee)];if(I&&(b[Ee]=+!!De),oe[me]=(oe[me+1]<<1|1)&De,W&&(oe[me]|=(L[me+1]|L[me])<<1|1|L[me+1]),oe[me]&$&&(R=La(e,{errors:W,currentLocation:Ee,expectedLocation:h,distance:o,ignoreLocation:_}),R<=m)){if(m=R,C=Ee,C<=h)break;ce=Math.max(1,2*h-C)}}if(La(e,{errors:W+1,currentLocation:h,expectedLocation:h,distance:o,ignoreLocation:_})>m)break;L=oe}const P={isMatch:C>=0,score:Math.max(.001,R)};if(I){const W=KO(b,c);W.length?u&&(P.indices=W):P.isMatch=!1}return P}function qO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class nv{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:s=Ye.includeMatches,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:s,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(h,m)=>{this.chunks.push({pattern:h,alphabet:qO(h),startIndex:m})},g=this.pattern.length;if(g>Lo){let h=0;const m=g%Lo,C=g-m;for(;h<C;)v(this.pattern.substr(h,Lo),h),h+=Lo;if(m){const I=g-Lo;v(this.pattern.substr(I),I)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:o,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],g=0,h=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:b})=>{const{isMatch:w,score:L,indices:R}=XO(e,C,I,{location:o+b,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(h=!0),g+=L,w&&R&&(v=[...v,...R])});let m={isMatch:h,score:h?g/this.chunks.length:1};return h&&r&&(m.indices=v),m}}class so{constructor(e){this.pattern=e}static isMultiMatch(e){return Gg(e,this.multiRegex)}static isSingleMatch(e){return Gg(e,this.singleRegex)}search(){}}function Gg(t,e){const n=t.match(e);return n?n[1]:null}class ZO extends so{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class QO extends so{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class JO extends so{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ey extends so{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ty extends so{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ny extends so{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class rv extends so{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:o=Ye.distance,includeMatches:s=Ye.includeMatches,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new nv(e,{location:n,threshold:r,distance:o,includeMatches:s,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ov extends so{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,o.push([r,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const fu=[ZO,ov,JO,ey,ny,ty,QO,rv],Mg=fu.length,ry=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,oy="|";function iy(t,e={}){return t.split(oy).map(n=>{let r=n.trim().split(ry).filter(s=>s&&!!s.trim()),o=[];for(let s=0,a=r.length;s<a;s+=1){const c=r[s];let u=!1,_=-1;for(;!u&&++_<Mg;){const v=fu[_];let g=v.isMultiMatch(c);g&&(o.push(new v(g,e)),u=!0)}if(!u)for(_=-1;++_<Mg;){const v=fu[_];let g=v.isSingleMatch(c);if(g){o.push(new v(g,e));break}}}return o})}const sy=new Set([rv.type,ov.type]);class ay{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:o=Ye.minMatchCharLength,ignoreLocation:s=Ye.ignoreLocation,findAllMatches:a=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:a,ignoreLocation:s,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=iy(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let s=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];a.length=0,s=0;for(let g=0,h=v.length;g<h;g+=1){const m=v[g],{isMatch:C,indices:I,score:b}=m.search(e);if(C){if(s+=1,c+=b,r){const w=m.constructor.type;sy.has(w)?a=[...a,...I]:a.push(I)}}else{c=0,s=0,a.length=0;break}}if(s){let g={isMatch:!0,score:c/s};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const gu=[];function ly(...t){gu.push(...t)}function hu(t,e){for(let n=0,r=gu.length;n<r;n+=1){let o=gu[n];if(o.condition(t,e))return new o(t,e)}return new nv(t,e)}const ka={AND:"$and",OR:"$or"},vu={PATH:"$path",PATTERN:"$val"},pu=t=>!!(t[ka.AND]||t[ka.OR]),cy=t=>!!t[vu.PATH],uy=t=>!xr(t)&&Qh(t)&&!pu(t),$g=t=>({[ka.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function iv(t,e,{auto:n=!0}={}){const r=o=>{let s=Object.keys(o);const a=cy(o);if(!a&&s.length>1&&!pu(o))return r($g(o));if(uy(o)){const u=a?o[vu.PATH]:s[0],_=a?o[vu.PATTERN]:o[u];if(!_r(_))throw new Error(GO(u));const v={keyId:_u(u),pattern:_};return n&&(v.searcher=hu(_,e)),v}let c={children:[],operator:s[0]};return s.forEach(u=>{const _=o[u];xr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return pu(t)||(t=$g(t)),r(t)}function dy(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:s,score:a})=>{const c=o?o.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:s))}),n.score=r})}function _y(t,e){const n=t.matches;e.matches=[],Gn(n)&&n.forEach(r=>{if(!Gn(r.indices)||!r.indices.length)return;const{indices:o,value:s}=r;let a={indices:o,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function fy(t,e){e.score=t.score}function gy(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const o=[];return n&&o.push(_y),r&&o.push(fy),t.map(s=>{const{idx:a}=s,c={item:e[a],refIndex:a};return o.length&&o.forEach(u=>{u(s,c)}),c})}class pi{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new FO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof _d))throw new Error(kO);this._myIndex=n||tv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Gn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,o-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:s,sortFn:a,ignoreFieldNorm:c}=this.options;let u=_r(e)?_r(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return dy(u,{ignoreFieldNorm:c}),s&&u.sort(a),Zh(n)&&n>-1&&(u=u.slice(0,n)),gy(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=hu(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:s,i:a,n:c})=>{if(!Gn(s))return;const{isMatch:u,score:_,indices:v}=n.searchIn(s);u&&o.push({item:s,idx:a,matches:[{score:_,value:s,norm:c,indices:v}]})}),o}_searchLogical(e){const n=iv(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:h});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let g=0,h=c.children.length;g<h;g+=1){const m=c.children[g],C=r(m,u,_);if(C.length)v.push(...C);else if(c.operator===ka.AND)return[]}return v},o=this._myIndex.records,s={},a=[];return o.forEach(({$:c,i:u})=>{if(Gn(c)){let _=r(n,c,u);_.length&&(s[u]||(s[u]={idx:u,item:c,matches:[]},a.push(s[u])),_.forEach(({matches:v})=>{s[u].matches.push(...v)}))}}),a}_searchObjectList(e){const n=hu(e,this.options),{keys:r,records:o}=this._myIndex,s=[];return o.forEach(({$:a,i:c})=>{if(!Gn(a))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:a[v],searcher:n}))}),u.length&&s.push({idx:c,item:a,matches:u})}),s}_findMatches({key:e,value:n,searcher:r}){if(!Gn(n))return[];let o=[];if(xr(n))n.forEach(({v:s,i:a,n:c})=>{if(!Gn(s))return;const{isMatch:u,score:_,indices:v}=r.searchIn(s);u&&o.push({score:_,key:e,value:s,idx:a,norm:c,indices:v})});else{const{v:s,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(s);c&&o.push({score:u,key:e,value:s,norm:a,indices:_})}return o}}pi.version="7.0.0";pi.createIndex=tv;pi.parseIndex=VO;pi.config=Ye;pi.parseQuery=iv;ly(ay);function ro(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function hy(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function vy(t){return new pi(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function py(t,e,n){const r=hy(e,n);return t.length===0?r:vy(r).search(t).map(o=>o.item)}function my(t,e){return ro(t,e).shape}function hn(t,e){const n=my(t,e);return n?du(n):void 0}function Cs(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return ud(e)}function Cy(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Es(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return ud(o)})}function Ey(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(s=>{if(typeof s!="string")throw Error("cell must be string.");return ud(s)})})}function Tr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function sv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return zh(e)}function Iy(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return zh(r)})}function by(t,e){const n=t.shape;return n===void 0?void 0:{...hn(e,Gt),...n}}function av(t,e,n){return{toolId:t,cells:e,value:n}}function wy(t,e){const n=Es(e,"cells"),r=Tr(e);return av(t,n,r)}function lv(t,e,n){const r=n?t.length-2:0;return t.findIndex((s,a)=>ze(s,e)&&a>=r)}function Oy(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:vi(r[o-1],e)))return t;const a=lv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function cv(t,e){return{toolId:t,cells:e,lines:[]}}function yy(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ra(n),{...t,cells:n};const r=n.some(s=>ze(s,e)),o=n.some(s=>vi(s,e));return n.length===1&&!r&&o?(n.push(e),Ra(n),{...t,cells:n}):t}function Ly(t,e){const n=t.cells.some(u=>ze(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return mu(t,e);const o=t.lines[r-1],s=o.length;if(s===0&&!n)return t;if(s===0&&n)return mu(t,e);const a=lv(o,e,!1);return(o.length===0?!0:vi(o[s-1],e))?a>=0?(o.length=a+1,{...t,lines:[...t.lines.slice(0,r-1),o]}):n?t:(o.push(e),{...t,lines:[...t.lines.slice(0,r-1),o]}):t}function mu(t,e){return t.cells.some(r=>ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function Ay(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function Sy(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function xy(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function Ny(t,e){const n=Es(e,"cells"),r=Ey(e),o=cv(t,n);return o.lines=r,o}function uv(t,e,n=""){return{toolId:t,cells:e,value:n}}function Ty(t,e,n=!1){const r=Kh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function Dy(t,e){return{...t,value:e}}function Ry(t,e){const n=Es(e,"cells"),r=Tr(e);return uv(t,n,r)}function dv(t,e,n){return{toolId:t,cells:e,value:n}}function ky(t,e){const n=Es(e,"cells"),r=Tr(e);return dv(t,n,r)}function _v(t,e,n){return{toolId:t,cells:e,value:n}}function Gy(t,e){const n=Es(e,"cells"),r=Tr(e);return _v(t,n,r)}function fv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function My(t,e){const n=Cs(e),r=sv(e),o=Tr(e);return fv(t,n,r,o)}function gv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function $y(t,e){const n=Cs(e),r=Tr(e);return gv(t,n,r)}function hv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function Uy(t,e){const n=Cs(e),r=sv(e);return hv(t,n,r)}function vv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function Fy(t,e){const n=Cs(e),r=Iy(e),o=vv(t,n,Be.N);return o.directions=r,o}function pv(t,e,n=""){return{toolId:t,cell:e,value:n}}function Hy(t,e){const n=Cs(e),r=Tr(e);return pv(t,n,r)}function Py(t,e=""){return{toolId:t,value:e}}function By(t,e){const n=Tr(e);return Py(t,n)}function mv(t,e,n=""){return{toolId:t,coords:e,value:n}}function Wy(t,e){const n=Cy(e,"coords"),r=Tr(e);return mv(t,n,r)}function zy(t,e){const n=[...t.coords],r=n.length;return(r===0?!0:vi(n[r-1],e))?(n.push(e),{...t,coords:n}):t}function Is(t,e){return{...t,value:e}}class bs extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const o=this.get(e);o&&(o[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o[n]&&(o[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const s of Object.values(r))o.push(eL(s));o.length&&(e[n]=o)}return e}static fromJson(e){const n=new bs;if(!e)return n;for(const[r,o]of Object.entries(e)){const s=Bh(r);if(s===void 0||!Object.keys(Gt).includes(s))continue;const a=o;for(const c of a){let u=null;if(Wh(s,Ka)?u=$y(s,c):ed(s)?u=Uy(s,c):td(s)?u=Fy(s,c):nd(s)?u=Gy(s,c):Uh(s)?u=ky(s,c):rd(s)?u=wy(s,c):Hh(s)?u=Wy(s,c):od(s)?u=Ny(s,c):id(s)?u=Ry(s,c):fs(s)?u=My(s,c):uO(s)?u=By(s,c):Fh(s)&&(u=Hy(s,c)),u!==null){n.addToDict(s);const _=St.uniqueId(),v=by(c,s);u.shape=v,n.addConstraint(s,_,u)}}}return n}}function fd(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1],a=o[0];if(ze(s.cell,n))return[a,s]}return null}function Yy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1];if(n.every(c=>s.cells.some(u=>ze(c,u))))return o}return null}function jy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1],a=s.cells[s.cells.length-1];if(ze(n,a))return o}return null}function Ug(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1];if(s.cells.some(c=>ze(c,n)))return[o[0],s]}return null}function Vy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].cells.some(c=>ze(c,n)))return o;return null}function Ky(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].coords.some(c=>ze(c,n)))return o;return null}function Fg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1];if(s.cells.some(c=>ze(c,n)))return[o[0],s]}return null}function Xy(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,s]of Object.entries(r)){const a=s,c=a.lines.findIndex(u=>u.some((_,v)=>ze(_,n)&&v>0));if(c>=0)return{id:o,arrow:a,matchLineIdx:c}}return null}function qy(t,e,n,r){const o=t.get(e);if(!o)return null;for(const s of Object.entries(o)){const a=s[1],c=s[0];if(ze(n,a.cell)&&r===a.direction)return c}return null}function Zy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1],a=o[0];if(ze(n,s.cell))return a}return null}function Qy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const s=o[1];if(s.cells.some(c=>ze(c,n))||s.cells2.some(c=>ze(c,n)))return[o[0],s]}return null}function Jy(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n)){const s=o[1];r.add(s.value)}return r}function eL(t){const e={};if("cells"in t){const n=t.cells.map(r=>Oa(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Oa(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>Oa(o)));e.lines=n}if("cell"in t){const n=Oa(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=hn(t.toolId,Gt),r=wO(t.shape,n);r&&(e.shape=r)}return e}function Hg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Cv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Cu(t){const e=new Option().style;return e.color=t,e.color!==""}function Qc(t){return Cv(t)||Cu(t)?t:Cu(`#${t}`)?`#${t}`:void 0}function Ga(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Ev(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Eu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}function tL(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Pg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function nL(t){return t in Pg?Pg[t]:null}function Iv(t,e,n){if(n===null)return null;const r=nL(n);if(r===null)return null;const[o,s]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/s)}function Jc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class rL{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Jc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Jc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Jc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Iv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ws{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const s=[];for(let a=0;a<n;a++){const c=new rL(o,a);if(r){const u=Iv(o,a,e);c.region=u}s.push(c)}this.grid.push(s)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[s,a]=[e.r+o[0],e.c+o[1]],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const s=e.r+o[0],a=e.c+o[1],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const s=e.r+o[0],a=e.c+o[1],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Ev(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),s=o.length;if(e<0||e>=s||![...r.values()].every(c=>c===s))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:s,c:a}=qa(r);let[c,u]=[e+s,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];o.push(_),[c,u]=[c+s,u+a]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let s=0;s<this.nCols;s++){const a=this.getCell(r,s);if(!a)continue;const c=a==null?void 0:a.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new ws(e,n);for(let s=0;s<e;s++)for(let a=0;a<n;a++){const c=r[s][a],u=o.getCell(s,a);u&&Object.assign(u,c)}return o}}function oL(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols;const s=Math.min(e.nRows,e.nCols),a=St.range(1,s+1);t.valid_digits&&!tL(a,t.valid_digits)&&(o.valid_digits=t.valid_digits),o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(o.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(o.local_constraints=u),o}function iL(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,o=t.valid_digits,s=t.grid,a=ws.fromJSON(e,n,s),c=Math.min(a.nRows,a.nRows);let u=St.range(1,c+1);o!==void 0&&(u=o);const _=t.solution,v=t.local_constraints,g=bs.fromJson(v),h=t.bool_constraints,m=ui.fromJson(h);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}var rs=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(rs||{});const sL=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),aL=()=>({type:"CLEAR"}),lL=t=>({type:"DRAG",payload:t}),Iu=t=>({type:"SET",payload:t}),cL=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),gd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),dr=(t,e,n)=>{const r=[...t];return Ra(r),{cells:r,lastCell:e,mode:n}};function uL(t,e,n){if(e===null)return gd();if(n==="RESETTING")return dr([e],e,"SELECTING");const r=t.cells.findIndex(o=>ze(e,o));if(n==="SELECTING")return r!==-1?t:dr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),dr(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return dr([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),dr(o,null,"DESELECTING")}return t}function dL(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:dr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),dr(r,null,t.mode)}return t}function _L(t,e){return{...t,cells:e}}function fL(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>ze(e,o))!==-1?dr([...t.cells],e,"SELECTING"):dr([...t.cells,e],e,"SELECTING"):dr([e],e,t.mode)}function bv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return gd();case"SET":return _L(t,e.payload);case"CLICK":return uL(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return dL(t,e.payload);case"ARROW_KEY":return fL(t,e.payload.cell,e.payload.selectionMode);default:return t}}function ai(t,e){return ze(t.p1,e.p1)&&ze(t.p2,e.p2)||ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function gL(t,e){return ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function wv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!ze(t,e)}class Za{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>ze(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>ze(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>ze(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>ze(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>ze(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const s={...e,colorId:n,marker:"O"};this.cellMarkers[r]=s}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>ai(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>ai(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&gL(r,e)&&this.draftLine.splice(n,1)}onDrag(e){wv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(s=>ai(s,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(s=>ai(s,r));if(o!==-1){const s=this.lineMarkers.splice(o,1);n.push(s[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Za;return Object.assign(e,this),e}}const Bg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Wg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Aa=t=>({type:"ADD_CELL_MARKER",payload:t}),hL=t=>({type:"SET_CELL_MARKERS",payload:t}),zg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),vL=t=>({type:"DRAG",payload:t}),gs=t=>({type:"ADD_LINE_MARKERS",payload:t}),Yg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),hd=()=>({type:"RESET"});function pL(t,e){switch(e.type){case"RESET":return new Za;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Ov(){return{_undoStack:[],_redoStack:[]}}const mi=Ht(Ov());function mL(){mi.update(()=>Ov())}function _n(t,e=!0){mi.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function CL(t,e=!0){mi.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function yv(){mi.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Lv(){mi.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ma=Ht(new Za);function fr(t){Ma.update(e=>pL(e,t))}const $a=Ht(1);function yo(t,e){return{execute:()=>{fr(t)},unExecute:()=>{fr(e)}}}const To=Ht(gd());function ii(t){t&&To.update(e=>bv(e,t))}function jg(t){t&&To.update(e=>bv(e,t))}function EL(t,e){return{execute:()=>{jg(t)},unExecute:()=>{jg(e)}}}const di=Ht(),Qa=Ht(hi.SETTING),bu=Ht(!1),qt=Ht(d.DIGIT),Av=Ht(d.DIGIT),vd=Ht(St.range(1,10)),gn=Ht(new ws(9,9)),fn=Ht(it(gn).getAllCells()),Dr=Ht({}),Rr=Ht(new ui),ft=Ht(new bs),gr=Ht(null),Sv=Ht(void 0),Ja=Ht(void 0);function IL(t){Dr.update(()=>t)}function Ci(t){gr.update(()=>t)}function pd(t){Sv.update(()=>t)}function Sr(t){it(qt)!==t&&(qt.update(()=>t),Ci(null))}function bL(){const t=it(Av);t&&Sr(t)}function wu(t){Av.update(()=>t)}function wL(t){it(qt)===t&&Sr(d.DIGIT)}function OL(t){ft.update(e=>(e.removeFromDict(t),e)),pd(void 0)}function Ft(t,e,n){ft.update(r=>(r.updateConstraint(t,e,n),r)),Ci({id:e,constraint:n})}function eu(t){const e=it(gr);if(t=t?{...t}:void 0,pd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Ft(r,e.id,n)}function yL(t,e){const r=it(ft).get(e);if(!r)return;const o=r[t];o&&Ci({id:t,constraint:o})}function LL(t,e,n){const r=new ws(t,e);gn.update(()=>r),vd.update(()=>n),ft.update(()=>new bs),Rr.update(()=>new ui),Dr.update(()=>({})),md(void 0),fn.update(()=>r.getAllCells())}function AL(t){gn.update(()=>t.grid),Dr.update(()=>t.puzzleMeta),md(t.solution),vd.update(()=>t.valid_digits),ft.update(()=>t.localConstraints),Rr.update(()=>t.globalConstraints),fn.update(()=>t.grid.getAllCells())}function xv(){const t=it(gn);t.resetValues(),gn.update(()=>t),fn.update(()=>t.getAllCells()),fr(hd())}function Ua(){mL(),fr(hd()),Sr(d.DIGIT);const t=aL();ii(t),pd(void 0),Ci(null)}const Nv=Go([zt,qt,Qa],([t,e,n])=>{const r=t.hideFog,o=e;return![d.FOG,d.REGIONS].includes(o)&&!r&&n===hi.SETTING}),Os=Go([gn,Dr,Rr,ft,Ja,vd],([t,e,n,r,o,s])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:s,globalConstraints:n,localConstraints:r}));function md(t){Ja.update(()=>t)}var si=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(si||{});const Cd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Ed=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),SL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),xL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Vg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Tv(t){ft.update(e=>(e.addToDict(t),e))}function kr(t,e){const n=it(Sv);n&&(e.shape={...n}),ft.update(r=>(r.addConstraint(e.toolId,t,e),r)),Ci({id:t,constraint:e})}function Do(t,e){e&&ft.update(n=>(n.removeConstraint(t,e),n))}function NL(t,e){ft.update(n=>(n.setConstraints(t,e),n))}function Kg(t){t.type===si.ADD_LOCAL_CONSTRAINT?kr(t.payload.id,t.payload.constraint):t.type===si.REMOVE_LOCAL_CONSTRAINT?Do(t.payload.tool,t.payload.id):t.type===si.REMOVE_LOCAL_CONSTRAINT_GROUP?OL(t.payload.tool):t.type===si.RESTORE_LOCAL_CONSTRAINT_GROUP?NL(t.payload.tool,t.payload.constraints):t.type===si.UPDATE_LOCAL_CONSTRAINT&&Ft(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function ys(t,e){return{execute:()=>{Kg(t)},unExecute:()=>{Kg(e)}}}class Ge{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ge(this.x+e.x,this.y+e.y)}subtract(e){return new Ge(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ge(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ge(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function TL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const $n=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Ge(o.x,o.y)};function Ta(t,e=!0,n=.5){const r=Xa(t),o=new Ge(r.c+.5,r.r+.5),s=t.distance(o);return!e||s<n?{cell:r,dist:s}:null}function Dv(t,e=!0,n=.5){const r=Xa(t),o=new Ge(r.c+.5,r.r+.5),s=t.distance(o),a={r:o.y,c:o.x};return!e||s<n?{cellCenter:a,dist:s}:null}function is(t,e=!0,n=.5){const r=Xa(t),o=vO(r),a=o.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=a.indexOf(Math.min(...a)),u=o[c],_=a[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function ss(t,e=!0,n=.5){const r=Xa(t),o=pO(r),a=o.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=a.indexOf(Math.min(...a)),u=o[c],_=a[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function tu(t,e=!0,n=.5){const r=ss(t,!1);if(!r)return null;const o=is(t,!1);if(!o)return null;const s=Dv(t,!1);if(!s)return null;const a=[s.cellCenter,r.edge,o.corner],u=a.map(I=>new Ge(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),v=u.findIndex(I=>I===_),g=a[v],m=["cell center","edge","corner"][v],C={cellCenter:s.cellCenter,edge:r.edge,corner:o.corner,dist:_,target:g,type:m};return!e||_<n?C:null}class Ei{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,o=$n(e,n);if(!o)return;this._prevPoint=o;const s=Ta(o,!r,this._margin);if(!s)return;const a=s.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=Ta(r,!0,this._margin);if(!o)return;const s=o.cell;if(this._prevCell&&ze(this._prevCell,s))return;this._prevCell=s,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:s,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=$n(e,n);if(!r)return;const o=Ta(r,!1);if(!o)return;const s=o.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:s,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:s,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Xg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(s=>{const a=new Set(s.highlights);return n.difference(a).size===0}).map(s=>s.toCoords())}function DL(t,e){const n=t.value;return e.getAllCells().filter(s=>s.value===n).map(s=>s.toCoords())}function qg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(s=>{if(s.value!==null)return!1;const a=new Set(s.cornerMarks);return n.difference(a).size===0}).map(s=>s.toCoords())}function Zg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(s=>{if(s.value!==null)return!1;const a=new Set(s.centerMarks);return n.difference(a).size===0}).map(s=>s.toCoords())}function RL(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===d.HIGHLIGHTS&&o.highlights.length?Xg(o,e):o.value!==null?DL(o,e):n===d.CORNER_PM&&o.cornerMarks.length?qg(o,e):n===d.CENTER_PM&&o.centerMarks.length?Zg(o,e):o.cornerMarks.length?qg(o,e):o.centerMarks.length?Zg(o,e):o.highlights.length?Xg(o,e):r:r}function Gr(t,e,n,r=!1){if(!(t&&e))return;const o=Cd(t,e),s=Ed(t,n),a=ys(o,s);_n(a,r)}function ao(t,e,n,r=!0){if(!(t&&e))return;const o=Ed(t,n),s=Cd(t,e),a=ys(o,s);_n(a,r)}function Ou(t,e,n,r,o=!1){if(!(t&&n&&e))return;const s=Vg(r,t,n),a=Vg(r,t,e),c=ys(s,a);_n(c,o)}function el(t,e,n){const r=new Ei,o={nRows:e.nRows,nCols:e.nCols};let s=null,a=null,c=null,u=!1,_=!1,v;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(v||(v={}));let g="DYNAMIC";function h(C){u=!1;const I=C.cell;if(Xt(C.cell,o)){if(g==="DYNAMIC"){const w=it(ft),L=Xy(w,n,I);if(L){const k=xy(L.arrow,L.matchLineIdx);Ou(L.id,L.arrow,k,n,!0),_=!0;return}const R=Fg(w,n,I);if(!R)u=!0,g="BULB",c=null,s=null;else{g="BODY",c=R[0],s=R[1],s=mu(s,I),Ft(n,c,s);return}}if(g==="BULB"&&!c){c=St.uniqueId(),s=cv(n,[I]),kr(c,s);return}else g==="BULB"&&c&&s?(s=yy(s,I),Ft(n,c,s)):g==="BODY"&&c&&s&&(s=Ly(s,I),Ft(n,c,s))}}return r.onDragStart=C=>{g="DYNAMIC",h(C)},r.onDrag=C=>{h(C)},r.onDragEnd=()=>{if(_){_=!1;return}g==="BODY"&&c&&s?Ay(s)?(s=Sy(s),Ft(n,c,s)):(Ou(c,a,s,n),a=s):g==="BULB"&&(Gr(c,s,n),a=s),g="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,b=it(ft);if(Fg(b,n,I)){ao(c,s,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const tl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,On=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,nl=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,kL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,nn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ii=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Id=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Te=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,GL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,ML=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,$L=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,bi=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,UL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,FL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,HL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function PL(t){return ed(t)?GL():td(t)?ML():t===d.XV?FL():nd(t)?$L():id(t)?tl():od(t)?nl():fs(t)?kL():rd(t)?Te():Ph(t)?HL():""}const BL={getInputHandler(t,e,n){return el(t,e,n)},toolId:d.ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:nl(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}},WL={getInputHandler(t,e,n){return el(t,e,n)},toolId:d.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:nl(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}};d.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,H.LINE,nl(),T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL;function zL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function YL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function jL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function VL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function KL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const XL={Delete:null,Backspace:null};function qL(t,e=10){if(t in XL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function ZL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function QL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function JL(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function eA(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Rv(t){return t==="Backspace"}function wi(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Rv(t.key))}function tA(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function nA(t){return tA(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function rA(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Mo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,s=(e==null?void 0:e.maxLength)??3;if(t.length>s)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Mr(t,e,n){if(t===void 0)return t;let r=t;return Rv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Yt(t,e,n,r){const o=new Ei,s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const C=it(ft),I=m.cell;if(Xt(m.cell,s)){if(m.event.shiftKey){const w=Ug(C,n,I);w&&(c=w[0],a=w[1],Ci({id:c,constraint:a}),_=1)}if(_===0){const w=Ug(C,n,I);if(_=w?2:1,w){ao(w[0],w[1],n);return}}if(!a&&_===1){a=uv(n,[I]),c=St.uniqueId(),kr(c,a);return}else if(a&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=Ty(a,I,w),Ft(n,c,a);return}}}function g(m){const C=it(gr);if(!C)return;let I=C.constraint;const b=C.id;if(I.value===void 0||!wi(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=Dy(I,w),Ft(n,b,I))}return o.onDragStart=m=>{c=null,a=null,_=0,v(m)},o.onDrag=m=>{v(m)},o.onDragEnd=()=>{c&&a&&Gr(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:m=>{o.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const bd=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CAGE_TOOL],yn=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CAGE_TOOL];function vn(t,e=5){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function pn(t,e,n){return Mr(t,e,n)}const mn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},oA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},iA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:On(),tags:[],categories:yn}},sA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:On(),tags:[],categories:yn}},aA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:On(),tags:[],categories:yn}},lA={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:tl(),tags:[],categories:bd}},cA={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:tl(),tags:[],categories:bd}},uA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:On(),tags:[],categories:yn}},dA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:On(),tags:[],categories:yn}},_A={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:d.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:tl(),tags:[],categories:bd}};d.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,On();const fA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:On(),tags:[],categories:yn}},gA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:On(),tags:[],categories:yn}};d.AQUARIUM_CAGE,z.CAGE_TOOLS,On();const hA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:On(),tags:[],categories:yn}},vA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:On(),tags:[],categories:yn}},pA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},mA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:On(),tags:[],categories:yn}};var Rn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Rn||{});const CA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),kv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),EA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),IA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),bA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),wA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),OA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),yA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),nu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),LA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),ru=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),rl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function AA(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),o=CA(t,n),s=kv(t,r);return[o,s]}if(e===d.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),s=EA(t,n),a=IA(t,r,o);return[s,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),o=bA(t,n),s=wA(t,r);return[o,s]}if(e===d.FOG){const r=t.map(c=>c.fog),s=OA(t,n===1),a=yA(t,r);return[s,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=ru(t,n),o=ru(t,n);return[r,o]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),o=ru(t,n),s=rl(t,r);return[o,s]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=nu(t,n,e),o=nu(t,n,e);return[r,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const o=nu(t,n,e),s=LA(t,r,e);return[o,s]}}function qi(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),fn.update(o=>o)}function _i(t){switch(t.type){case Rn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;qi(e,d.DIGIT,n,!0);break}case Rn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;qi(e,d.GIVEN,n,!0);break}case Rn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;qi(e,d.REGIONS,n,!0);break}case Rn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;qi(e,d.HIGHLIGHTS,n,!0);break}case Rn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;qi(e,r,n,!0);break}case Rn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];fn.update(r=>r);break}case Rn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];fn.update(o=>o);break}case Rn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];fn.update(r=>r);break}case Rn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];fn.update(r=>r);break}case Rn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===d.CENTER_PM?e[o].centerMarks=r[o]:n===d.CORNER_PM&&(e[o].cornerMarks=r[o]);fn.update(o=>o);break}case Rn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),fn.update(r=>r);break}case Rn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];fn.update(r=>r);break}}}function SA(t,e){return{execute:()=>{_i(t)},unExecute:()=>{_i(e)}}}const oi=new Ei;function Qg(t,e){return t.shiftKey?rs.SELECTING:t.ctrlKey||t.metaKey||e?rs.DYNAMIC:t.altKey?rs.DESELECTING:rs.RESETTING}function hs(t,e,n,r,o=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(o&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(o&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(o&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const s=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===s||n==="different"&&c.fog!==s)}}return t}function xA(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=o=>o===d.CORNER_PM||o===d.CENTER_PM||o===d.DIGIT;for(const o of n){const s=hs(t,o,"any",-1,r(o));if(s.length)return{tool:o,cells:s}}return{tool:e,cells:[]}}function as(t,e,n,r){const o=AA(e,n,r);if(o){const s=o[0],a=o[1],c=SA(s,a),u=Iu(t),v=[EL(u,u),c];CL(v)}}function NA(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const o=hs(e,r,"any",-1,!1);if(o.length)return as(n,o,r,t),!0}else{const o=hs(e,r,"different",t,!0);if(o.length)return as(n,o,r,t),!0}return!1}function lo(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};oi.onTap=m=>{if(m.tapCount!==2)return;const I=Xt(m.cell,o)?m.cell:null;if(!I)return;const b=RL(I,e,n),w=Iu(b);ii(w)},oi.onDragStart=m=>{const C=Xt(m.cell,o),I=it(bu),b=Qg(m.event,I),w=C?m.cell:null,L=sL(w,b);ii(L)},oi.onDrag=m=>{const I=Xt(m.cell,o)?m.cell:null,b=lL(I);ii(b)};function s(m){if(!VL(m))return!1;const C=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=Iu(C);return ii(I),!0}function a(m){if(!QL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=eA(m);return Sr(C),!0}return m.type==="keyup"?(bL(),!0):!1}function c(m){if(!ZL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Sr(I),wu(I),!0}else{const C=JL(m.code);return Sr(C),wu(C),!0}}function u(m){if(!nA(m))return!1;const C=it(To).lastCell;let I=null;if(C!==null){const[L,R]=rA(m),[k,$]=[Hg(C.r+R,0,o.nRows-1),Hg(C.c+L,0,o.nCols-1)];I={r:k,c:$}}else I={r:0,c:0};const b=Qg(m,!1),w=cL(I,b);return ii(w),!0}function _(m){const C=qL(m);if(C===void 0)return!1;const I=it(To).cells,b=[];if(I.forEach(w=>{const L=e.getCell(w.r,w.c);L&&b.push(L)}),n===d.FOG)return NA(C,b,I);if(C===null){const{tool:w,cells:L}=xA(b,n);if(L.length)return as(I,L,w,C),!0}else{let w=hs(b,n,"different",C,!0);if(w.length)return as(I,w,n,C),!0;if(w=hs(b,n,"equal",C,!0),w.length)return as(I,w,n,C),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const g=St.throttle(m=>{oi.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&oi.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){oi.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(s(m)||u(m)||v(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}class TA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=$n(e,n);if(!r)return;const o=tu(r,!1);if(!o)return;const s={coords:o.target,type:o.type};this._prevType=o.type,this._prevCoords=o.target,this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=tu(r,!1);if(!o||this._prevCoords&&ze(this._prevCoords,o.target))return;this._isTap=!1;const s={coords:o.target,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&wv(this._prevCoords,o.target)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(s);else return;this._prevType=o.type,this._prevCoords=o.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=$n(e,n);if(!r)return;const o=tu(r,!1);if(!o)return;const s={coords:o.target,type:o.type};this._isTap&&this._prevCoords&&ze(this._prevCoords,o.target)&&(this.onTap&&this.onTap(s),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function DA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new TA;return r.onTap=s=>{const a=s.coords,c=it($a),u=it(Ma);if(s.type==="cell center"){if(!jh(a,n))return;const v=u.getCellMarker(a);if(v)if(v.marker==="X"){const g={...a,colorId:c,marker:"O"},h=Aa(g),m=Aa(v),C=yo(h,m);_n(C)}else{const g=zg(a),h=Aa(v),m=yo(g,h);_n(m)}else{const g={...a,colorId:c,marker:"X"},h=Aa(g),m=zg(a),C=yo(h,m);_n(C)}}else if(s.type==="edge"){const _=u.getEdgeMarker(a);if(_){const v=Wg(a),g=Bg(_),h=yo(v,g);_n(h)}else{const v={...a,colorId:c},g=Bg(v),h=Wg(a),m=yo(g,h);_n(m)}}},r.onDrag=s=>{const a=s.coords,c=it($a);if(s.type==="cell center"||s.type==="corner"){const u={p1:s.prevCoords,p2:a,colorId:c},_=vL(u);fr(_)}},r.onDragEnd=()=>{const s=it(Ma);if(s.mode==="add"){const a=s.draftLine.filter(c=>!s.lineMarkers.some(u=>ai(c,u)));if(a.length){const c=gs(a),u=Yg(a),_=yo(c,u);_n(_)}}else{const a=s.lineMarkers.filter(c=>s.draftLine.some(u=>ai(c,u)));if(a.length){const c=Yg(a),u=gs(a),_=yo(c,u);_n(_)}}},{blur(){},pointerDown(s){r.pointerDown(s,t)},pointerMove(s){r.pointerMove(s,t)},pointerUp(s){r.pointerUp(s,t)},keyDown(){},keyUp(){}}}const RA={getInputHandler:lo,toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},kA={getInputHandler:lo,toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},GA={getInputHandler:lo,toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[T.CELL_INPUT_TOOL]}},MA={getInputHandler:lo,toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},$A={getInputHandler:lo,toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},UA={getInputHandler:lo,toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[T.CELL_INPUT_TOOL]}},FA={getInputHandler:lo,toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[T.CELL_INPUT_TOOL]}},HA={getInputHandler:lo,toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[T.CELL_INPUT_TOOL]}},PA={getInputHandler:DA,toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var gt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(gt||{});class ol{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=$n(e,n);if(!r)return;const o=ss(r,!1);if(!o)return;const s=is(r,!1);if(!s)return;const a=Ta(r,!1);if(!a)return;const c=Dv(r,!1);if(!c)return;let u;this.target===1?u=s.corner:this.target===0?u=o.edge:this.target===2?u=c.cellCenter:this.target===3?s.dist<o.dist?u=s.corner:u=o.edge:this.target===4?s.dist<c.dist?u=s.corner:u=c.cellCenter:this.target===5?o.dist<c.dist?u=o.edge:u=c.cellCenter:o.dist<s.dist&&o.dist<c.dist?u=o.edge:s.dist<o.dist&&s.dist<c.dist?u=s.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&s.dist<o.dist&&(_="corner");const v=_==="edge"?2*o.idx:2*s.idx+1,g={event:e,cell:a.cell,edge:o.edge,corner:s.corner,closest:u,edgeIdx:o.idx,cornerIdx:s.idx,direction:v};this.onDragStart&&this.onDragStart(g)}}function wd(t,e,n,r){const o=(r==null?void 0:r.targets)??gt.CLOSEST,s=new ol(o),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=it(ft),C=h.cell,I=h.closest;if(!Xt(C,a))return;const w=Zy(m,n,I);if(w){Do(n,w);return}c=pv(n,I,""),u=St.uniqueId(),kr(u,c)}function v(h){const m=it(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!wi(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=Is(C,b),Ft(n,I,C))}return s.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&s.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,H.CIRCLE,Id(),T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT;const BA={getInputHandler(t,e,n){return wd(t,e,n,{targets:gt.CLOSEST,valueUpdater:(r,o)=>Mr(r,o,()=>!0),defaultValue:""})},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Id(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}},WA={getInputHandler(t,e,n){return wd(t,e,n,{targets:gt.CORNER_OR_EDGE,valueUpdater:(r,o)=>Mr(r,o,()=>!0),defaultValue:""})},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Id(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}};function zA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function YA(t,e){const n=Kh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function jA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function VA(t){for(let e=0;;e++){const n=jA(e);if(!t.has(n))return n}}function KA(t,e,n){const r=new Ei,o={nRows:e.nRows,nCols:e.nCols};let s=null,a=null,c=null,u=null,_="cells2",v;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(v||(v={}));let g=0;function h(C){const I=it(ft),b=C.cell;if(!Xt(C.cell,o))return;const L=Qy(I,n,b);if(g===0&&(L?(c=L[0],s=L[1],g=2,u=b,_=s.cells2.some(k=>ze(k,b))?"cells2":"cells"):g=1),g===1&&c===null){c=St.uniqueId();const R=Jy(I,n),k=VA(R);s=zA(n,[b],k),kr(c,s);return}else if(g===1&&c&&s){s=YA(s,b),Ft(n,c,s);return}else if(g===2&&c&&s&&u){const R={r:b.r-u.r,c:b.c-u.c},$=(_==="cells2"?s.cells2:s.cells).map(W=>({r:W.r+R.r,c:W.c+R.c}));if(!$.every(W=>Xt(W,o)))return;_==="cells"?s={...s,cells:$}:s={...s,cells2:$},u=b,Ft(n,c,s)}}return r.onDragStart=C=>{c=null,s=null,g=0,u=null,h(C)},r.onDrag=C=>{h(C)},r.onDragEnd=()=>{c&&s&&(g===1?Gr(c,s,n):g===2&&Ou(c,a,s,n),a=s)},r.onTap=()=>{c&&g!==1&&(Do(n,c),c=null,s=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const XA={getInputHandler(t,e,n){return KA(t,e,n)},toolId:d.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[T.CLONE_CONSTRAINT,T.LOCAL_CONSTRAINT]}};class Gv{constructor(){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevCoord",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_margin")}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCoord===null,o=$n(e,n);if(!o)return;const s=is(o,!r);if(!s)return;this._prevCoord=s.corner;const a={event:e,cellCorner:s.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=is(r);if(!o||this._prevCoord&&ze(o.corner,this._prevCoord))return;const s={event:e,cellCorner:o.corner};this._prevCoord=o.corner,this._isTap=!1,this.onDrag&&this.onDrag(s)}pointerUp(e,n){const r=$n(e,n);if(!r)return;const o=is(r);if(!o)return;const s={event:e,cellCorner:o.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(s)),this._isTap&&this.onTap&&this.onTap(s)}}function co(t,e,n,r){const o=new Gv,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=it(ft),m=g.cellCorner,C=ad(m);if(!C.every(w=>Xt(w,s)))return;let b=null;if(c===0&&(b=jy(h,n,m),c=b?2:1),b&&c===2){const w=b[0];ao(w,b[1],n);return}else if(c===1){const w=dv(n,C,r==null?void 0:r.defaultValue),L=St.uniqueId();Gr(L,w,n,!0)}}function _(g){const h=it(gr);if(!h)return;let m=h.constraint;const C=h.id;if(m.value===void 0||!wi(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Is(m,I),Ft(n,C,m))}return o.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function il(t,e=3){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sl(t,e,n){return Mr(t,e,n)}function qA(t,e){function n(r){return!0}return Mr(t,e,n)}const ZA={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>qA(r,o),defaultValue:""})},toolId:d.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:UL(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},QA={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>sl(r,o,il),defaultValue:""})},toolId:d.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:bi(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},JA={getInputHandler(t,e,n){return co(t,e,n)},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:bi(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},eS={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>sl(r,o,il),defaultValue:""})},toolId:d.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:bi(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,H.CIRCLE,bi(),T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL;const tS={getInputHandler(t,e,n){return co(t,e,n,{defaultValue:"X"})},toolId:d.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:bi(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},nS={getInputHandler(t,e,n){return co(t,e,n,{defaultValue:""})},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:bi(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};function ye(t,e,n,r){const o=new Ei,s={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const h=g.cell;Xt(g.cell,s)&&(c=Oy(c,h,a),Ft(n,u,c))}return o.onDragStart=g=>{u=St.uniqueId(),c=av(n,[],r==null?void 0:r.defaultValue),kr(u,c),_(g)},o.onDrag=g=>{_(g)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?Do(n,u):u&&c&&Gr(u,c,n,!1),u=null},o.onTap=g=>{const h=g.cell,m=it(ft),C=Vy(m,n,h);if(C){const[I,b]=C;ao(I,b,n)}},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function We(t,e,n,r,o){const s=new Ei,a={nRows:e.nRows,nCols:e.nCols};let c;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(h){const m=it(ft),C=h.cell;if(!Xt(h.cell,a))return;const b=fd(m,n,C);if(u===0&&(u=b?2:1),b&&u===2){const[w,L]=b;ao(w,L,n)}else if(u===1){const w=gv(n,C,o==null?void 0:o.defaultValue),L=St.uniqueId();Gr(L,w,n,!0)}}s.onDragStart=h=>{u=0,_(h)},s.onDrag=h=>{_(h)};function v(h){const m=it(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!wi(h)||!(o!=null&&o.valueUpdater))return;const b=o.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=Is(C,b),Ft(n,I,C))}return{pointerDown:h=>{h.button===0&&s.pointerDown(h,t)},pointerMove:h=>{s.pointerMove(h,t)},pointerUp:h=>{s.pointerUp(h,t)},keyDown:h=>{v(h)},keyUp:()=>{}}}class rS{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=$n(e,n);if(!r)return;const o=ss(r,!0,.35);if(!o)return;this._prevCellEdge=o.edge;const s={event:e,edge:o.edge};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=ss(r,!0,.35);if(!o||this._prevCellEdge&&ze(o.edge,this._prevCellEdge))return;const s={event:e,edge:o.edge};this._prevCellEdge=o.edge,this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=$n(e,n);!r||ss(r,!0,.35)}}function rn(t,e,n,r){const o=new rS,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=it(ft),m=g.edge,C=cd(m);if(!C.every(w=>Xt(w,s)))return;let b=null;if(c===0&&(b=Yy(h,n,C),c=b?2:1),b&&c===2){const w=b[0];ao(w,b[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",L=_v(n,C,w),R=St.uniqueId();Gr(R,L,n,!0)}}function _(g){const h=it(gr);if(!h)return;let m=h.constraint;const C=h.id;if(m.value===void 0||!wi(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Is(m,I),Ft(n,C,m))}return o.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function Od(t,e,n,r=gt.CORNER_OR_EDGE){const o=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],s=new ol(r),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function g(C){const I=it(ft),b=C.cell;if(!Xt(C.cell,a))return;C.event.altKey&&(v=2);const L=fd(I,n,b),R=ld(C.direction);if(L){[u,c]=L,c.direction===R||v===2?ao(u,c,n):(c={...c,direction:R},Ft(n,u,c));return}else v!==2&&(c=hv(n,b,R),u=St.uniqueId(),Gr(u,c,n,!0))}function h(C){if(!c||!u||!KL(C))return;const b=(o.indexOf(c.direction)+1)%o.length;c={...c,direction:o[b]},Ft(n,u,c)}return s.onDragStart=C=>{v=0,g(C)},{pointerDown:C=>{C.button===0&&s.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{h(C)},keyUp:()=>{}}}function oS(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function hr(t,e,n,r=gt.CORNER_OR_EDGE){const o=new ol(r),s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=it(ft),C=h.cell;if(!Xt(h.cell,s))return;h.event.altKey&&(_=2);const b=ld(h.direction),w=fd(m,n,C);if(w){if(c=w[0],a=w[1],_===2)Do(n,w[0]);else{const L=oS(a.directions,b);L.length?(a={...a,directions:L},Ft(n,c,a)):Do(n,c)}return}else _!==2&&(a=vv(n,C,b),c=St.uniqueId(),kr(c,a))}return o.onDragStart=h=>{_=0,v(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const yd=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.EDGE_TOOL],Qn=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.EDGE_TOOL],Ls=.15,Mv=.02,$o={type:H.CIRCLE,r:{editable:!0,value:Ls,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Mv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}};function iS(t,e=1){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Oi(t,e=3){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sS(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Uo(t,e,n){return Mr(t,e,n)}function aS(t,e){return t===void 0?"V":sS(e)?e.toUpperCase():t}function lS(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function $v(t,e){return t===void 0?"<":lS(e)?e:t}const cS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,iS)})},toolId:d.RATIO,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Qn}},uS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,Oi)})},toolId:d.DIFFERENCE,order:z.EDGE_TOOLS,shape:$o,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Qn}},dS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,Oi)})},toolId:d.EDGE_SUM,order:z.EDGE_TOOLS,shape:{...$o,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Qn}},_S={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:aS,defaultValue:"V"})},toolId:d.XV,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Qn}},fS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:$v,defaultValue:"<"})},toolId:d.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Qn}},gS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,Oi)})},toolId:d.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{...$o,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Qn}},hS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,Oi)})},toolId:d.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{...$o,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Qn}},vS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,Oi)})},toolId:d.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{...$o,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Qn}},pS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:Mv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Qn}},mS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:$o,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Qn}},CS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Qn}},ES={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:H.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:yd}},IS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:z.EDGE_TOOLS,shape:{type:H.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:yd}},bS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:z.EDGE_TOOLS,shape:$o,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:yd}},wS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:$v,defaultValue:"<"})},toolId:d.ONE_WAY_DOOR,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Qn}};function Dt(t,e,n,r){const o=(r==null?void 0:r.cornerOrEdge)??gt.CORNER_OR_EDGE,s=new ol(o),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=it(ft),C=h.cell,I=h.direction,b=ld(I);if(Xt(C,a))return;const L=Vh(C,b);if(!Xt(L,a))return;const k=qy(m,n,C,b);if(k){Do(n,k);return}c=fv(n,C,b,""),u=St.uniqueId(),kr(u,c)}function v(h){const m=it(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!wi(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=Is(C,b),Ft(n,I,C))}return s.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&s.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}const yi=[T.OUTSIDE_CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_CORNER_TOOL,T.OUTSIDE_DIRECTION_TOOL];function Li(t,e=5){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fo(t,e,n){return Mr(t,e,n)}const Ai={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},OS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Li),defaultValue:"",cornerOrEdge:gt.CORNER})},toolId:d.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Ii(),tags:[],categories:yi}},yS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Li),defaultValue:"",cornerOrEdge:gt.CORNER})},toolId:d.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Ii(),tags:[],categories:yi}},LS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Li),defaultValue:"",cornerOrEdge:gt.CORNER})},toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Ii(),tags:[],categories:yi}},AS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Li),defaultValue:"",cornerOrEdge:gt.CORNER})},toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Ii(),tags:[],categories:yi}},SS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Li),defaultValue:"",cornerOrEdge:gt.CORNER})},toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Ii(),tags:[],categories:yi}},xS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Li),defaultValue:"",cornerOrEdge:gt.CORNER})},toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ai,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Ii(),tags:[],categories:yi}},on=[T.OUTSIDE_EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_EDGE_TOOL,T.OUTSIDE_DIRECTION_TOOL];function Zt(t,e=5){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sn(t,e,n){return Mr(t,e,n)}const an={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},NS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:nn(),tags:[],categories:on}},TS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.SANDWICH_SUM_XOR_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:nn(),tags:[],categories:on}},DS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:nn(),tags:[],categories:on}},RS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:nn(),tags:[],categories:on}},kS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:nn(),tags:[],categories:on}},GS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:nn(),tags:[],categories:on}},MS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:nn(),tags:[],categories:on}},$S={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:nn(),tags:[],categories:on}},US={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:nn(),tags:[],categories:on}},FS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.X_INDEX,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:nn(),tags:[],categories:on}},HS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:nn(),tags:[],categories:on}};d.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,nn();const PS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.EDGE})},toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:nn(),tags:[],categories:on}},BS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.BOTH})},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:nn(),tags:[],categories:on}},WS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.BOTH})},toolId:d.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:nn(),tags:[],categories:on}},zS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>sn(r,o,Zt),defaultValue:"",cornerOrEdge:gt.BOTH})},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:nn(),tags:[],categories:on}},YS={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},jS={getInputHandler(t,e,n){return Od(t,e,n)},toolId:d.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},VS={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},KS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,o)=>Uo(r,o,Oi)})},toolId:d.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},XS={getInputHandler(t,e,n){return co(t,e,n,{valueUpdater:(r,o)=>sl(r,o,il),defaultValue:""})},toolId:d.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},qS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},ZS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},QS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},JS={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,o)=>pn(r,o,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},ex={getInputHandler(t,e,n){return el(t,e,n)},toolId:d.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT]}},tx={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,o)=>Fo(r,o,Zt),defaultValue:"",cornerOrEdge:gt.CORNER_OR_EDGE})},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_DIRECTION_TOOL]}},Si=[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT,T.DIAGONAL_CONSTRAINT],nx={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},_x={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Si}},hx={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Si}},vx={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Si}},px={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Si}},mx={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Si}},Cx={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Si}},Ex={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Ix={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},bx={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},wx={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ox={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},yx={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Lx={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ax={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Sx={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},xx={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Nx={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Tx={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Dx={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Rx={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},kx={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Gx={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Mx={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},$x={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands. Digits may not repeat within an island.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},eN={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},tN={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},nN={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},rN={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},oN={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},iN={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},sN={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},aN={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},lN={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},cN={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},uN={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},dN={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},_N={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},fN={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},gN={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},hN={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},vN={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},pN={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},mN={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},CN={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},EN={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},IN={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Ue=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LINE_TOOL],$r=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.DOUBLE_ENDED_LINE_CONSTRAINT,T.LINE_TOOL],As={description:"",usage:Te(),tags:[],categories:Ue},bN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Numbers along a thermometer must increase from the bulb end."}},wN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:d.CUSTOM_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},ON={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},yN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},LN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},AN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PALINDROME,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Te(),tags:[],categories:Ue}},SN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Te(),tags:[],categories:Ue}},xN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Te(),tags:[],categories:Ue}},NN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Te(),tags:[],categories:Ue}},TN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Ue}},DN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:Ue}},RN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Te(),tags:[],categories:Ue}},kN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Te(),tags:[],categories:Ue}},GN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Te(),tags:[],categories:Ue}},MN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Te(),tags:[],categories:Ue}},$N={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:Ue}},UN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Te(),tags:[],categories:Ue}},FN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Te(),tags:[],categories:Ue}},HN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Te(),tags:[],categories:Ue}},PN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Te(),tags:[],categories:Ue}},BN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Te(),tags:[],categories:Ue}},WN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Te(),tags:[],categories:Ue}},zN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Te(),tags:[],categories:Ue}},YN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:Ue}},jN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Te(),tags:[],categories:Ue}},VN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Te(),tags:[],categories:Ue}},KN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Te(),tags:[],categories:Ue}},XN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Te(),tags:[],categories:Ue}},qN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Te(),tags:[],categories:Ue}},ZN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Te(),tags:[],categories:Ue}},QN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Te(),tags:[],categories:Ue}},JN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Te(),tags:[],categories:Ue}},e2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Te(),tags:[],categories:Ue}},t2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Te(),tags:[],categories:Ue}},n2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.AMBIGUOUS_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Te(),tags:[],categories:Ue}},r2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Te(),tags:[],categories:Ue}},o2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.XV_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Te(),tags:[],categories:Ue}},i2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Te(),tags:[],categories:Ue}},s2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Te(),tags:[],categories:Ue}},a2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Te(),tags:[],categories:Ue}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,H.LINE,Te();const l2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Te(),tags:[],categories:Ue}},c2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Te(),tags:[],categories:Ue}},u2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Te(),tags:[],categories:Ue}},d2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Te(),tags:[],categories:Ue}},_2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Te(),tags:[],categories:Ue}},f2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Te(),tags:[],categories:Ue}},g2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Te(),tags:[],categories:Ue}};d.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,H.THERMO_WITH_CIRCLE,Te();const h2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Te(),tags:[],categories:Ue}},v2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Te(),tags:[],categories:Ue}},p2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:Ue}},m2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Te(),tags:[],categories:Ue}},C2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Te(),tags:[],categories:Ue}},E2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Te(),tags:[],categories:Ue}},I2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Te(),tags:[],categories:$r}},b2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Te(),tags:[],categories:$r}},w2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Te(),tags:[],categories:$r}},O2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Te(),tags:[],categories:$r}},y2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Te(),categories:$r}},L2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Te(),tags:[],categories:$r}},A2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Te(),tags:[],categories:$r}},S2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Te(),tags:[],categories:Ue}},x2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:$r}},N2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:$r}},tt=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_SHAPE_TOOL],xi=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_COLOR_TOOL];function uo(t,e=3){return Mo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function T2(t){return t===""||t==="1"||t==="2"||t==="3"}function Ur(t,e,n){return Mr(t,e,n)}const D2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:tt}},R2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:tt}},k2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},G2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}};d.PRIME_CELL,z.CELL_COLOR_TOOL;const M2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},$2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},U2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:tt}},F2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},H2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},P2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:tt}},B2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:"9"})},toolId:d.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:tt}},W2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:tt}},z2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:xi}},Y2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:xi}},j2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:xi}},V2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:xi}},K2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:xi}},X2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:tt}},q2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:tt}},Z2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:tt}},Q2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:tt}},J2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,T2),defaultValue:""})},toolId:d.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:tt}},eT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:tt}},tT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:tt}},nT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},rT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},oT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:tt}},iT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:tt}},sT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:tt}},aT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:tt}},lT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:tt}},cT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:tt}},uT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:tt}},dT={getInputHandler(t,e,n){return Od(t,e,n)},toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},_T={getInputHandler(t,e,n){return Od(t,e,n)},toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},fT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:tt}},gT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:tt}},hT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:tt}},vT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:tt}},pT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:tt}},mT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:tt}},CT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:tt}},ET={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:tt}},IT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIRECTED_PATH_START,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:tt}},bT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIRECTED_PATH_END,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:tt}},wT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.TELEPORT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:tt}},OT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,o)=>Ur(r,o,uo),defaultValue:""})},toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:tt}},Fr=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_MULTIARROW_TOOL],Ho={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},yT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Fr}},LT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Fr}},AT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Fr}},ST={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Fr}},xT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Fr}},NT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Fr}},TT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Fr}},DT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Fr}},RT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Ho,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Fr}},kT={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},GT={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},MT={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const $T={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},UT={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const FT={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};function HT(t,e,n,r){const o=new Gv,s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=it(ft),C=h.cellCorner;if(!jh(C,s))return;let b=null;if(_===0&&(b=Ky(m,n,C),_=b?2:1),b){const w=b[0];ao(w,b[1],n);return}if(!a&&_===1){c=St.uniqueId(),a=mv(n,[C],r==null?void 0:r.defaultValue),kr(c,a);return}else if(a&&c&&_===1){a=zy(a,C),Ft(n,c,a);return}}return o.onDragStart=h=>{c=null,a=null,_=0,h.event.shiftKey&&(_=1),v(h)},o.onDrag=h=>{v(h)},o.onDragEnd=()=>{c&&a&&Gr(c,a,n,!1),c=null},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const PT=[T.CORNER_LINE_CONSTRAINT,T.CORNER_LINE_TOOL,T.LOCAL_CONSTRAINT],BT={getInputHandler(t,e,n){return HT(t,e,n)},toolId:d.MAZE_WALL,order:z.EDGE_TOOLS,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:PT}},Gt={[d.GIVEN]:RA,[d.DIGIT]:kA,[d.REGIONS]:GA,[d.OUTSIDE]:FA,[d.CORNER_PM]:MA,[d.CENTER_PM]:$A,[d.HIGHLIGHTS]:UA,[d.FOG]:HA,[d.PEN_TOOL]:PA,[d.SUDOKU_RULES_DO_NOT_APPLY]:nx,[d.LEAVE_EMPTY_CELLS_EMPTY]:rx,[d.LITS]:sx,[d.HEXED_SUDOKU]:ox,[d.FILLOMINO]:ix,[d.ANTIKNIGHT]:ax,[d.ANTIKING]:cx,[d.ANTI_GIRAFFE]:lx,[d.DISJOINT_GROUPS]:ux,[d.TANGO]:dx,[d.NONCONSECUTIVE]:_x,[d.NONRATIO]:fx,[d.ANTI_ENTROPY]:Ex,[d.GLOBAL_INDEXING_COLUMN]:Ix,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:bx,[d.NEGATIVE_DIAGONAL]:gx,[d.POSITIVE_DIAGONAL]:hx,[d.NEGATIVE_ANTIDIAGONAL]:vx,[d.POSITIVE_ANTIDIAGONAL]:px,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:mx,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:Cx,[d.ALL_RATIOS_GIVEN]:wx,[d.ALL_DIFFERENCES_GIVEN]:Ox,[d.ALL_X_GIVEN]:yx,[d.ALL_V_GIVEN]:Lx,[d.ALL_XV_GIVEN]:Ax,[d.ALL_RADARS_GIVEN]:Sx,[d.ALL_XY_DIFFERENCES_GIVEN]:xx,[d.ALL_INDEXING_COLUMN_GIVEN]:Nx,[d.ALL_INDEXING_ROW_GIVEN]:Tx,[d.ALL_YIN_YANG_KROPKI_GIVEN]:Dx,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:Rx,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Gx,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Mx,[d.CAVE_CELLS_ARE_ODD]:uN,[d.CAVE_WALLS_ARE_EVEN]:cN,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:aN,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:lN,[d.DOUBLERS]:$T,[d.NEGATORS]:UT,[d.NEXUS]:FT,[d.UNKNOWN_REGIONS]:$x,[d.CHAOS_CONSTRUCTION_SUGURU]:Ux,[d.YIN_YANG]:Fx,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Hx,[d.NURIMISAKI]:Px,[d.NURIKABE]:Bx,[d.TWO_CONTIGUOUS_REGIONS]:Wx,[d.SASHIGANE]:zx,[d.GOLDILOCKS_ZONE]:Yx,[d.CELL_CENTER_LOOP_NO_TOUCHING]:jx,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Vx,[d.NOT_LOOP_SIZED_REGIONS]:qx,[d.MODULAR_LOOP]:Zx,[d.CAVE]:iN,[d.CAVE_LITS]:dN,[d.RENBAN_CAVES]:_N,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:sN,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:kx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Kx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:Xx,[d.GALAXIES]:gN,[d.TWO_SYMMETRIC_GALAXIES]:pN,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:hN,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:vN,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:mN,[d.PENTOMINO_TILLING]:CN,[d.TILLING_NO_EMPTY_CELLS]:EN,[d.LITS_BLACK_WHITE_STAR_BATTLE]:IN,[d.MAZE_DIRECTED_PATH]:Qx,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:Jx,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:nN,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:eN,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:tN,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:rN,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:oN,[d.ODD]:D2,[d.EVEN]:R2,[d.MINIMUM]:k2,[d.MAXIMUM]:G2,[d.ODD_MINESWEEPER]:M2,[d.EVEN_MINESWEEPER]:$2,[d.WATCHTOWER]:F2,[d.NOT_WATCHTOWER]:H2,[d.FARSIGHT]:P2,[d.RADAR]:B2,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:U2,[d.ORTHOGONAL_SUM]:W2,[d.DIAGONALLY_ADJACENT_SUM]:X2,[d.INDEXING_COLUMN]:z2,[d.INDEXING_ROW]:Y2,[d.LOW_DIGIT]:j2,[d.HIGH_DIGIT]:V2,[d.FRIENDLY_CELL]:K2,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:q2,[d.SANDWICH_ROW_COL_COUNT]:Z2,[d.COUNTING_CIRCLES]:Q2,[d.COLORED_COUNTING_CIRCLES]:J2,[d.UNIQUE_CELLS]:eT,[d.YIN_YANG_MINESWEEPER]:tT,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:nT,[d.YIN_YANG_SEEN_SHADED_CELLS]:rT,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:oT,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:iT,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:sT,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:aT,[d.SEEN_REGION_BORDERS_COUNT]:lT,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:cT,[d.SASHIGANE_BEND_REGION_COUNT]:uT,[d.SASHIGANE_REGION_SUM]:fT,[d.CELL_ON_THE_LOOP]:gT,[d.CELL_NOT_ON_THE_LOOP]:hT,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:vT,[d.CAVE_CLUE]:mT,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:pT,[d.YIN_YANG_FILLOMINO_PARITY]:fN,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:CT,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:ET,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:OT,[d.DIRECTED_PATH_START]:IT,[d.DIRECTED_PATH_END]:bT,[d.TELEPORT]:wT,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:dT,[d.THERMO_SIGHTLINE_LOOP_ARROW]:_T,[d.HOT_ARROWS]:DT,[d.COLD_ARROWS]:TT,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:NT,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:ST,[d.YIN_YANG_COUNT_SHADED_CELLS]:xT,[d.LOOP_CELL_COUNT_ARROWS]:AT,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:LT,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:yT,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:RT,[d.DIFFERENCE]:uS,[d.RATIO]:cS,[d.XV]:_S,[d.EDGE_INEQUALITY]:fS,[d.EDGE_SUM]:dS,[d.EDGE_PRODUCT]:gS,[d.EDGE_MODULO]:hS,[d.EDGE_FACTOR]:vS,[d.XY_DIFFERENCES]:pS,[d.YIN_YANG_WHITE_KROPKI]:mS,[d.YIN_YANG_KROPKI]:CS,[d.UNKNOWN_REGION_BORDER]:ES,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:IS,[d.EDGE_CAVE_ONE_OF_EACH]:bS,[d.ONE_WAY_DOOR]:wS,[d.QUADRUPLE]:ZA,[d.CORNER_SUM]:QA,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:JA,[d.CORNER_EVEN_COUNT]:eS,[d.PRODUCT_SQUARE]:tS,[d.EQUAL_DIAGONAL_DIFFERENCES]:nS,[d.THERMOMETER]:bN,[d.FUZZY_THERMOMETER]:ON,[d.SLOW_THERMOMETER]:yN,[d.CUSTOM_THERMOMETER]:wN,[d.ROW_CYCLE_THERMOMETER]:LN,[d.PALINDROME]:AN,[d.RENBAN_LINE]:SN,[d.DOUBLE_RENBAN_LINE]:xN,[d.RENRENBANBAN_LINE]:NN,[d.N_CONSECUTIVE_RENBAN_LINE]:TN,[d.NABNER_LINE]:DN,[d.WHISPERS_LINE]:RN,[d.DUTCH_WHISPERS]:kN,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:GN,[d.RENBAN_OR_WHISPERS_LINE]:MN,[d.RENBAN_OR_NABNER_LINE]:$N,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:UN,[d.INDEX_LINE]:FN,[d.UNIQUE_VALUES_LINE]:HN,[d.REPEATED_DIGITS_LINE]:e2,[d.REGION_SUM_LINE]:PN,[d.SUM_LINE]:BN,[d.XV_LINE]:o2,[d.ROW_SUM_LINE]:i2,[d.AT_LEAST_X_LINE]:s2,[d.SUPERFUZZY_ARROW]:t2,[d.AMBIGUOUS_ARROW]:n2,[d.HEADLESS_ARROW]:r2,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:a2,[d.PRODUCT_LINE]:l2,[d.ADJACENT_MULTIPLES_LINE]:c2,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:u2,[d.LOOK_AND_SAY_LINE]:d2,[d.ARITHMETIC_SEQUENCE_LINE]:WN,[d.ZIPPER_LINE]:_2,[d.SEGMENTED_SUM_LINE]:f2,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:g2,[d.SAME_PARITY_LINE]:zN,[d.MODULAR_LINE]:YN,[d.UNIMODULAR_LINE]:jN,[d.MODULAR_OR_UNIMODULAR_LINE]:VN,[d.ODD_EVEN_OSCILLATOR_LINE]:KN,[d.HIGH_LOW_OSCILLATOR_LINE]:XN,[d.ENTROPIC_LINE]:qN,[d.ENTROPIC_OR_MODULAR_LINE]:ZN,[d.INDEXING_COLUMN_IS_X_LINE]:QN,[d.INDEXING_ROW_IS_X_LINE]:JN,[d.YIN_YANG_INDEXING_LINE_COLORING]:C2,[d.YIN_YANG_SHADED_WHISPERS_LINE]:h2,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:v2,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:p2,[d.YIN_YANG_REGION_SUM_LINE]:m2,[d.GOLDILOCKS_ZONE_REGION_SUM]:E2,[d.BETWEEN_LINE]:I2,[d.LOCKOUT_LINE]:b2,[d.PARITY_COUNT_LINE]:O2,[d.TIGHTROPE_LINE]:w2,[d.DOUBLE_ARROW_LINE]:y2,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:L2,[d.SPLIT_PEAS]:A2,[d.DOUBLERS_THERMOMETER]:S2,[d.DOUBLERS_BETWEEN_LINE]:x2,[d.DOUBLERS_DOUBLE_ARROW_LINE]:N2,[d.ARROW]:BL,[d.AVERAGE_ARROW]:WL,[d.MAZE_WALL]:BT,[d.KILLER_CAGE]:oA,[d.UNIQUE_DIGITS_CAGE]:iA,[d.INVERTED_KILLER_CAGE]:sA,[d.SUM_CAGE]:aA,[d.SUM_CAGE_LOOK_AND_SAY]:lA,[d.PARITY_BALANCE_CAGE]:cA,[d.DIVISIBLE_KILLER_CAGE]:uA,[d.SPOTLIGHT_CAGE]:dA,[d.PUTTERIA_CAGE]:_A,[d.MULTISET_CAGE]:fA,[d.VAULTED_CAGE]:gA,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:hA,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:vA,[d.DOUBLERS_KILLER_CAGE]:pA,[d.NEGATORS_KILLER_CAGE]:mA,[d.CLONE_REGION]:XA,[d.SANDWICH_SUM]:NS,[d.X_SUM]:DS,[d.SHORTSIGHTED_X_SUM]:RS,[d.SHIFTED_X_SUM]:kS,[d.BROKEN_X_SUM]:GS,[d.X_SUM_SKYSCRAPERS]:MS,[d.BATTLEFIELD]:$S,[d.SKYSCRAPERS]:US,[d.X_INDEX]:FS,[d.SANDWICH_SUM_XOR_X_SUM]:TS,[d.RISING_STREAK]:HS,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:PS,[d.OUTSIDE_CONSECUTIVE_SUM]:BS,[d.LOOPWICHES]:WS,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:zS,[d.LITTLE_KILLER_SUM]:OS,[d.LITTLE_KILLER_PRODUCT]:yS,[d.LITTLE_KILLER_LOOK_AND_SAY]:LS,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:SS,[d.X_OMIT_LITTLE_KILLER_SUM]:AS,[d.NEGATORS_LITTLE_KILLER_SUM]:xS,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:BA,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:WA,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:kT,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:GT,[d.FORBIDDEN_KNIGHT_SUM]:MT,[d.COSMETIC_CELL_SHAPE]:YS,[d.COSMETIC_CELL_ARROW]:jS,[d.COSMETIC_CELL_MULTI_ARROW]:VS,[d.COSMETIC_EDGE]:KS,[d.COSMETIC_CORNER]:XS,[d.COSMETIC_LINE]:qS,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:ZS,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:QS,[d.COSMETIC_ARROW]:ex,[d.COSMETIC_CAGE]:JS,[d.COSMETIC_OUTSIDE_DIRECTION]:tx};var WT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Uv(t){var e=WT();N(t,e)}var zT=ne('<button class="remove-button svelte-17rdl63"><!></button>');function YT(t,e){let n=U(e,"onTrash",8,()=>{});var r=zT(),o=K(r);Uv(o),Y(r),Me("click",r,qn(function(...s){var a;(a=n())==null||a.apply(this,s)})),N(t,r)}var jT=ne('<input type="radio" class="radio-select-button svelte-3561wl">'),VT=ne('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ls(t,e){var J,ce;ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n),o=[];let s=U(e,"elementInfo",8),a=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=s().toolId,_=s().permanent??!1,v=((J=s().menu)==null?void 0:J.name)??s().toolId,g=!((ce=s().meta)!=null&&ce.categories.includes(T.GLOBAL_CONSTRAINT)),h=`label-${v}`;g&&a(()=>{Sr(u)});function m(){var me,Ee;const Q=(me=s().meta)==null?void 0:me.description,oe=((Ee=s().meta)==null?void 0:Ee.usage)??PL(u);let pe;return Q&&Q.length&&(pe=Q),oe.length&&(pe?pe=pe+`

`+oe:pe=oe),pe}fe();var C=VT(),I=K(C);{var b=Q=>{var oe=jT();Kt(oe),S(oe,"id",h),oe.value=(oe.__value=u)==null?"":u,Va(o,[],oe,()=>r(),pe=>ps(qt,pe)),N(Q,oe)};ge(I,Q=>{g&&Q(b)})}var w=F(I,2);ee(()=>S(w,"title",m())),S(w,"aria-labelledby",h);var L=K(w),R=K(L),k=K(R);{var $=Q=>{YT(Q,{get onTrash(){return c()}})};ge(k,Q=>{_||Q($)})}Y(R);var P=F(R,2);S(P,"for",h),P.textContent=v,Y(L);var W=F(L,2),X=K(W);ut(X,e,"default",{}),Y(W),Y(w),Y(C),ee(()=>Ot(C,"checked",u===r())),Me("click",w,qn(function(...Q){var oe;(oe=a())==null||oe.apply(this,Q)})),N(t,C),le()}function Fv(t,e){ae(e,!1);const n=rt(),r=()=>ve(ft,"$localConstraintsStore",n);let o=U(e,"toolId",8),s=U(e,"elementHandlers",8);const a=()=>{wL(o());const u=r().get(o());if(!u)return;const _=SL(o()),v=xL(o(),u),g=ys(_,v);_n(g)};fe();var c=Xe(()=>ro(o(),s()));ls(t,{get elementInfo(){return p(c)},onTrash:a}),le()}var KT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function XT(t){var e=KT();N(t,e)}var qT=ne('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function al(t,e){let n=U(e,"isOpen",8,!0);var r=qT(),o=K(r);ut(o,e,"default",{}),Y(r),ee(()=>{S(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var ZT=ne('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function QT(t,e){ae(e,!1);const n=rt(),r=()=>ve(di,"$svgRefStore",n),o=()=>ve(ft,"$localConstraintsStore",n),s=()=>ve(gr,"$currentConstraintStore",n),a=D();let c=U(e,"constraintId",8),u=U(e,"toolId",8);function _(){yL(c(),u()),r().focus()}function v(){const w=o().getConstraint(u(),c());if(!w)return;const L=Ed(c(),u()),R=Cd(c(),w),k=ys(L,R);_n(k)}G(()=>s(),()=>{var w;x(a,(w=s())==null?void 0:w.id)}),Ie(),fe();var g=ZT(),h=K(g),m=K(h);Y(h);var C=F(h,2),I=K(C),b=K(I);Uv(b),Y(I),Y(C),Y(g),ee(()=>{Ot(g,"active",c()===p(a)),et(m,`ID: ${c()??""}`)}),Me("click",I,qn(v)),Me("click",g,_),N(t,g),le()}var JT=ne('<div class="constraint-list svelte-w5npcu"></div>');function Hv(t,e){ae(e,!1);const n=rt(),r=()=>ve(ft,"$localConstraintsStore",n),o=()=>ve(qt,"$toolStore",n),s=D();let a=U(e,"toolId",8);G(()=>(r(),Z(a())),()=>{x(s,r().get(a()))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=Xe(()=>a()===o());al(v,{get isOpen(){return p(g)},children:(h,m)=>{var C=JT();lt(C,5,()=>Object.entries(p(s)),I=>I[0],(I,b)=>{QT(I,{get constraintId(){return p(b)[0]},get toolId(){return a()}})}),Y(C),N(h,C)},$$slots:{default:!0}})};ge(u,v=>{p(s)&&Object.entries(p(s)).length&&v(_)})}N(t,c),le()}var eD=ne('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function tD(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var o=eD(),s=K(o),a=K(s,!0);Y(s);var c=F(s,2);Y(o),ee(()=>et(a,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),N(t,o)}var nD=ne('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Hr(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),o=D();function s(){n(!1),p(o).close()}G(()=>(p(o),Z(n())),()=>{p(o)&&n()&&p(o).showModal()}),G(()=>(p(o),Z(n())),()=>{p(o)&&!n()&&p(o).close()}),Ie();var a=nD(),c=K(a),u=K(c);tD(u,{get title(){return r()},closeCb:s});var _=F(u,2),v=K(_),g=K(v);ut(g,e,"default",{}),Y(v),Y(_),Y(c),Y(a),No(a,h=>x(o,h),()=>p(o)),Me("click",c,qn(function(h){Vw.call(this,e,h)})),Me("close",a,()=>{n(!1)}),Me("click",a,jw(qn(()=>p(o).close()))),N(t,a),le()}var rD=ne('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function oD(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),o=D(null);G(()=>(Z(r()),p(o)),()=>{r()&&p(o)&&p(o).focus()}),Ie();var s=rD(),a=F(K(s),2);Kt(a),S(a,"spellcheck",!1),No(a,c=>x(o,c),()=>p(o)),Y(s),Kn(a,n),N(t,s),le()}var iD=ne('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function sD(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),o=U(e,"title",8);Hr(t,{get title(){return o()},get showModal(){return n()},set showModal(s){n(s)},children:(s,a)=>{var c=iD(),u=K(c);oD(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var _=F(u,2),v=K(_),g=K(v);ut(g,e,"default",{}),Y(v),Y(_),Y(c),N(s,c)},$$slots:{default:!0},$$legacy:!0})}var aD=ne('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),lD=ne('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function no(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),o=U(e,"isCollapsible",8,!1);var s=Ae(),a=ue(s);{var c=_=>{var v=aD(),g=K(v),h=K(g),m=K(h,!0);Y(h),Y(g);var C=F(g,2),I=K(C);ut(I,e,"default",{}),Y(C),Y(v),ee(()=>et(m,n())),N(_,v)},u=_=>{var v=lD(),g=K(v),h=K(g),m=K(h,!0);Y(h),Y(g);var C=F(g,2),I=K(C);ut(I,e,"default",{});var b=F(I,2);Y(C),Y(v),ee(()=>{et(m,n()),Ot(b,"open",r())}),Me("click",v,()=>r(!r())),N(_,v)};ge(a,_=>{o()?_(u,!1):_(c)})}N(t,s)}var cD=ne('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),uD=ne('<ol class="svelte-cd45on"></ol>'),dD=ne("<!> <!>",1);function _D(t,e){ae(e,!1);const n=D();let r=U(e,"category",8),o=U(e,"addTool",8),s=U(e,"searchResults",8),a=D(!0);G(()=>(Z(s()),Z(r())),()=>{x(n,s().filter(v=>{var g,h;return(h=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:h.includes(r())}))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=dD(),h=ue(g);no(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(a)},set isOpen(C){x(a,C)},$$legacy:!0});var m=F(h,2);al(m,{get isOpen(){return p(a)},children:(C,I)=>{var b=uD();lt(b,5,()=>p(n),At,(w,L)=>{let R=()=>p(L).key,k=()=>p(L).info;var $=cD(),P=K($),W=K(P,!0);Y(P),Y($),ee(()=>{var X;S(P,"title",(X=k().meta)==null?void 0:X.description),et(W,R())}),Me("click",P,()=>{o()(R())}),N(w,$)}),Y(b),N(C,b)},$$slots:{default:!0}}),N(v,g)};ge(u,v=>{p(n).length&&v(_)})}N(t,c),le()}function fD(t,e){ae(e,!1);const n=D();let r=U(e,"searchPattern",8,""),o=U(e,"addTool",8),s=U(e,"categories",8),a=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);G(()=>(Z(r()),Z(a()),Z(c())),()=>{x(n,py(r(),a(),c()))}),Ie(),fe();var u=Ae(),_=ue(u);lt(_,1,s,At,(v,g)=>{_D(v,{get category(){return p(g)},get searchResults(){return p(n)},get addTool(){return o()}})}),N(t,u),le()}var gD=ne('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function ll(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var o=gD();S(o,"tabindex",0);var s=K(o),a=K(s);ut(a,e,"add-button",{}),Y(s);var c=F(s,2),u=K(c),_=K(u);ut(_,e,"title-icon",{}),Y(u);var v=F(u);Y(c);var g=F(c,2),h=K(g);Y(g),Y(o),ee(()=>{et(v,` ${r()??""}`),Ot(h,"open",n())}),Me("click",o,()=>n(!n())),Me("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,o)}var hD=ne('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function vD(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),o=U(e,"showModal",12);function s(){o(!o())}ll(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=hD();Me("click",u,qn(()=>s())),N(a,u)},"title-icon":(a,c)=>{var u=Ae(),_=ue(u);ut(_,e,"title-icon",{}),N(a,u)}},$$legacy:!0})}var pD=ne('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),mD=ne('<div class="panel-container svelte-hixu4"><!> <!></div>');function cl(t,e){let n=U(e,"isOpen",8,!0);var r=mD(),o=K(r);ut(o,e,"panel-header",{});var s=F(o,2);al(s,{get isOpen(){return n()},children:(a,c)=>{var u=pD(),_=K(u);ut(_,e,"panel-content",{}),Y(u),N(a,u)},$$slots:{default:!0}}),Y(r),N(t,r)}var CD=ne("<!> <!>",1);function Ld(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),o=U(e,"onAddTool",8),s=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),c=D(!0),u=D(!1),_=D("");const v=g=>{x(u,!1),x(c,!0),o()(g)};fe(),cl(t,{get isOpen(){return p(c)},set isOpen(g){x(c,g)},$$slots:{"panel-header":(g,h)=>{var m=CD(),C=ue(m);vD(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(b){x(c,b)},get showModal(){return p(u)},set showModal(b){x(u,b)},$$slots:{"title-icon":(b,w)=>{var L=Ae(),R=ue(L);ut(R,e,"title-icon",{}),N(b,L)}},$$legacy:!0});var I=F(C,2);sD(I,{get title(){return r()},get showModal(){return p(u)},set showModal(b){x(u,b)},get searchPattern(){return p(_)},set searchPattern(b){x(_,b)},children:(b,w)=>{fD(b,{get searchPattern(){return p(_)},get categories(){return n()},get filterFunc(){return s()},addTool:v,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),N(g,m)},"panel-content":(g,h)=>{var m=Ae(),C=ue(m);ut(C,e,"panel-content",{}),N(g,m)}},$$legacy:!0}),le()}var ED=ne("<!> <!>",1);function ID(t,e){ae(e,!1);const n=rt(),r=()=>ve(ft,"$localConstraintsStore",n),o=D();let s=U(e,"elementHandlers",8);const a=[T.COSMETIC_TOOL],c=u=>{Tv(u),Sr(u)};G(()=>(r(),T),()=>{x(o,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(T.COSMETIC_TOOL))&&!v})}),Ie(),fe(),Ld(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{XT(u)},"panel-content":(u,_)=>{var v=Ae(),g=ue(v);lt(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let C=()=>p(m)[0];var I=Ae(),b=ue(I);{var w=L=>{var R=ED(),k=ue(R);Fv(k,{get toolId(){return C()},get elementHandlers(){return s()}});var $=F(k,2);Hv($,{get toolId(){return C()}}),N(L,R)};ge(b,L=>{dO(C())&&L(w)})}N(h,I)}),N(u,v)}}}),le()}var Pv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Pv||{});const Da=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Bv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function bD(t,e){Rr.update(n=>n.setConstraint(t,e))}function wD(t){Rr.update(e=>e.removeConstraint(t))}function Jg(t){t.type===Pv.REMOVE_GLOBAL_CONSTRAINT?wD(t.payload):bD(t.payload.tool,t.payload.value)}function yu(t,e){return{execute:()=>{Jg(t)},unExecute:()=>{Jg(e)}}}var OD=ne('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function yD(t,e){let n=U(e,"value",8,!1);var r=OD(),o=K(r);Kt(o),Y(r),ee(()=>Ah(o,n())),N(t,r)}function LD(t,e){ae(e,!1);let n=U(e,"toolId",8),r=U(e,"value",8,!1),o=U(e,"elementHandlers",8);const s=()=>{const u=Da(n(),!r()),_=Da(n(),r()),v=yu(u,_);_n(v)},a=()=>{const u=Bv(n()),_=Da(n(),r()),v=yu(u,_);_n(v)};fe();var c=Xe(()=>ro(n(),o()));ls(t,{get elementInfo(){return p(c)},onClick:s,onTrash:a,children:(u,_)=>{yD(u,{get value(){return r()}})},$$slots:{default:!0}}),le()}var AD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function SD(t){var e=AD();N(t,e)}function xD(t,e){ae(e,!1);const n=rt(),r=()=>ve(Rr,"$globalConstraintsStore",n),o=D();let s=U(e,"elementHandlers",8);const a=fO,c=u=>{const _=Da(u,!0),v=Bv(u),g=yu(_,v);_n(g)};G(()=>r(),()=>{x(o,(u,_)=>{var h;const v=!!((h=_.meta)!=null&&h.categories.includes(T.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Ie(),fe(),Ld(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{SD(u)},"panel-content":(u,_)=>{var v=Ae(),g=ue(v);lt(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];LD(h,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return s()}})}),N(u,v)}}}),le()}var ND=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function TD(t){var e=ND();N(t,e)}var DD=ne("<!> <!>",1),RD=ne("<!> <!> <!> <!>",1);function kD(t,e){ae(e,!1);const n=rt(),r=()=>ve(ft,"$localConstraintsStore",n),o=D();let s=U(e,"elementHandlers",8);const a=_O,c=u=>{Tv(u),Sr(u)};G(()=>(r(),T),()=>{x(o,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(T.LOCAL_CONSTRAINT))&&!v})}),Ie(),fe(),Ld(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{TD(u)},"panel-content":(u,_)=>{var v=RD(),g=ue(v),h=Xe(()=>ro(d.GIVEN,s()));ls(g,{get elementInfo(){return p(h)}});var m=F(g,2),C=Xe(()=>ro(d.REGIONS,s()));ls(m,{get elementInfo(){return p(C)}});var I=F(m,2),b=Xe(()=>ro(d.FOG,s()));ls(I,{get elementInfo(){return p(b)}});var w=F(I,2);lt(w,1,()=>r().entries(),([L,R])=>L,(L,R)=>{let k=()=>p(R)[0];var $=Ae(),P=ue($);{var W=X=>{var J=DD(),ce=ue(J);Fv(ce,{get toolId(){return k()},get elementHandlers(){return s()}});var Q=F(ce,2);Hv(Q,{get toolId(){return k()}}),N(X,J)};ge(P,X=>{lO(k())&&X(W)})}N(L,$)}),N(u,v)}}}),le()}var GD=ne('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function ou(t,e){ae(e,!1);const n=D();let r=U(e,"value",8),o=U(e,"onChangeCb",8,void 0),s=D(void 0);function a(m){const C=Qc(m);C&&o()&&o()(C)}G(()=>Z(r()),()=>{x(n,r())}),G(()=>(p(n),Qc),()=>{Cu(p(n))&&x(s,Qc(p(n)))}),Ie(),fe();var c=GD(),u=K(c);const _=Xe(()=>Cv(p(n)));var v=K(u);Kt(v),Y(u);var g=F(u,2),h=F(K(g),2);Kt(h),S(h,"spellcheck",!1),S(h,"maxlength",30),Y(g),Y(c),ee(()=>{S(u,"style",`--choosen-color: ${p(s)??""}`),Ot(u,"transparent",p(_))}),Kn(v,()=>p(n),m=>x(n,m)),Me("change",v,()=>a(p(n))),Kn(h,()=>p(n),m=>x(n,m)),Me("input",h,()=>a(p(n))),N(t,c),le()}var MD=ne('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function cs(t,e){let n=U(e,"name",8);var r=MD(),o=K(r),s=K(o,!0);Y(o);var a=F(o,2);ut(a,e,"default",{}),Y(r),ee(()=>et(s,n())),N(t,r)}var $D=ne('<input class="control-slider svelte-1rsuho6" type="range">');function UD(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),o=U(e,"value",12),s=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);fe();var u=$D();Kt(u),ee(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",s())}),Kn(u,o),Me("change",u,()=>{a()&&a()(o())}),Me("input",u,()=>{c()&&c()(o())}),N(t,u),le()}function Qr(t,e){let n=U(e,"name",8),r=U(e,"value",12),o=U(e,"min",8),s=U(e,"max",8),a=U(e,"step",24,()=>(s()-o())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);cs(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{UD(_,{get min(){return o()},get max(){return s()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var FD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function HD(t){var e=FD();N(t,e)}var PD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function BD(t){var e=PD();N(t,e)}var WD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function zD(t){var e=WD();N(t,e)}var YD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function jD(t){var e=YD();N(t,e)}var VD=ne('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function KD(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),o=U(e,"selectedShape",12),s=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);fe();var c=VD(),u=K(c);Kt(u);var _,v=F(u,2);ut(v,e,"default",{}),Y(c),ee(()=>{S(c,"title",s()),Ot(c,"active",r()===o()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Va(n,[],u,()=>(r(),o()),o),Me("change",u,()=>a()&&a()(r())),N(t,c),le()}var XD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function qD(t){var e=XD(),n=K(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),Y(e),N(t,e)}var ZD=ne('<div class="icon-wrapper svelte-18euf14"><!></div>'),QD=ne('<div class="radio-container svelte-18euf14"></div>');function JD(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),o=U(e,"possibleShapes",8),s=U(e,"updateShapeCb",8,void 0);const a=new Map([[H.CIRCLE,zD],[H.ELLIPSE,qD],[H.SQUARE,BD],[H.RECTANGLE,HD],[H.POLYGON,jD]]);fe(),cs(t,{get name(){return n()},children:(c,u)=>{var _=QD();lt(_,5,o,At,(v,g)=>{KD(v,{get title(){return p(g)},get value(){return p(g)},get selectedShape(){return r()},get updateShapeCb(){return s()},children:(h,m)=>{var C=Ae(),I=ue(C);{var b=w=>{var L=ZD(),R=K(L);Eh(R,()=>a.get(p(g)),(k,$)=>{$(k,{})}),Y(L),N(w,L)};ge(I,w=>{a.has(p(g))&&w(b)})}N(h,C)},$$slots:{default:!0}})}),Y(_),N(c,_)},$$slots:{default:!0}}),le()}var eR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function tR(t){var e=eR();N(t,e)}var nR=ne('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),rR=ne("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function oR(t,e){ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n),o=()=>ve(gr,"$currentConstraintStore",n),s=D(),a=D(),c=D();let u=D(!0),_=U(e,"elementHandlers",8);function v(b,w){const L=(b==null?void 0:b.shape)??(w?du(w):void 0);return eu(L),L}function g(b,w){p(c)&&(yw(c,p(c)[b]=w),eu(p(c)))}function h(){p(a)&&(x(c,du(p(a))),eu(p(c)))}function m(b){return b&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function C(b){return b&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[H.ELLIPSE,H.RECTANGLE].includes(b)}G(()=>(r(),Z(_())),()=>{x(s,ro(r(),_()))}),G(()=>p(s),()=>{x(a,p(s).shape)}),G(()=>(o(),p(a)),()=>{var b;x(c,v(((b=o())==null?void 0:b.constraint)??null,p(a)))}),Ie(),fe(),cl(t,{get isOpen(){return p(u)},set isOpen(b){x(u,b)},$$slots:{"panel-header":(b,w)=>{ll(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(L){x(u,L)},$$slots:{"title-icon":(L,R)=>{tR(L)}},$$legacy:!0})},"panel-content":(b,w)=>{var L=Ae(),R=ue(L);{var k=$=>{var P=rR(),W=ue(P);{var X=Ne=>{var Ce=nR();Me("click",Ce,h),N(Ne,Ce)};ge(W,Ne=>{bO(p(a))&&Ne(X)})}var J=F(W,2);{var ce=Ne=>{JD(Ne,{get possibleShapes(){return p(a).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:Ce=>g("type",Ce)})};ge(J,Ne=>{var Ce;p(a).allowedTypes&&p(a).allowedTypes.length&&((Ce=p(c))!=null&&Ce.type)&&Ne(ce)})}var Q=F(J,2);{var oe=Ne=>{var Ce=Xe(()=>p(a).n.lb??3),Re=Xe(()=>p(a).n.ub??10);Qr(Ne,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(Ce)},get max(){return p(Re)},step:1,onChangeCb:xe=>g("n",xe)})};ge(Q,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.n)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.n)!=null&&xe.editable)&&C(p(c).type)&&Ne(oe)})}var pe=F(Q,2);{var me=Ne=>{var Ce=Xe(()=>p(a).r.lb??0),Re=Xe(()=>p(a).r.ub??1),xe=Xe(()=>p(a).r.step??.05);Qr(Ne,{name:"Radius",get value(){return p(c).r},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("r",yt)})};ge(pe,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.r)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.r)!=null&&xe.editable)&&m(p(c).type)&&Ne(me)})}var Ee=F(pe,2);{var De=Ne=>{var Ce=Xe(()=>p(a).width.lb??0),Re=Xe(()=>p(a).width.ub??1),xe=Xe(()=>p(a).width.step??.05);Qr(Ne,{name:"Width",get value(){return p(c).width},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("width",yt)})};ge(Ee,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.width)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.width)!=null&&xe.editable)&&I(p(c).type)&&Ne(De)})}var st=F(Ee,2);{var Se=Ne=>{var Ce=Xe(()=>p(a).height.lb??0),Re=Xe(()=>p(a).height.ub??1),xe=Xe(()=>p(a).height.step??.05);Qr(Ne,{name:"Height",get value(){return p(c).height},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("height",yt)})};ge(st,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.height)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.height)!=null&&xe.editable)&&I(p(c).type)&&Ne(Se)})}var we=F(st,2);{var vt=Ne=>{var Ce=Xe(()=>p(a).angle.lb??0),Re=Xe(()=>p(a).angle.ub??360),xe=Xe(()=>p(a).angle.step??15);Qr(Ne,{name:"Angle",get value(){return p(c).angle},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("angle",yt)})};ge(we,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.angle)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.angle)!=null&&xe.editable)&&Ne(vt)})}var ct=F(we,2);{var Ln=Ne=>{var Ce=Xe(()=>p(a).inset.lb??0),Re=Xe(()=>p(a).inset.ub??.5),xe=Xe(()=>p(a).inset.step??.01);Qr(Ne,{name:"Inset",get value(){return p(c).inset},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("inset",yt)})};ge(ct,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.inset)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.inset)!=null&&xe.editable)&&Ne(Ln)})}var Un=F(ct,2);{var Pr=Ne=>{cs(Ne,{name:"Stroke",children:(Ce,Re)=>{ou(Ce,{get value(){return p(c).stroke},onChangeCb:xe=>g("stroke",xe)})},$$slots:{default:!0}})};ge(Un,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.stroke)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.stroke)!=null&&xe.editable)&&Ne(Pr)})}var Qt=F(Un,2);{var mr=Ne=>{var Ce=Xe(()=>p(a).strokeWidth.lb??0),Re=Xe(()=>p(a).strokeWidth.ub??.8),xe=Xe(()=>p(a).strokeWidth.step??.01);Qr(Ne,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("strokeWidth",yt)})};ge(Qt,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.strokeWidth)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.strokeWidth)!=null&&xe.editable)&&Ne(mr)})}var go=F(Qt,2);{var ir=Ne=>{var Ce=Xe(()=>p(a).strokeDasharray.lb??0),Re=Xe(()=>p(a).strokeDasharray.ub??1),xe=Xe(()=>p(a).strokeDasharray.step??.01);Qr(Ne,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(Ce)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("strokeDasharray",yt)})};ge(go,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.strokeDasharray)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.strokeDasharray)!=null&&xe.editable)&&Ne(ir)})}var Fn=F(go,2);{var Bo=Ne=>{cs(Ne,{name:"Fill",children:(Ce,Re)=>{ou(Ce,{get value(){return p(c).fill},onChangeCb:xe=>g("fill",xe)})},$$slots:{default:!0}})};ge(Fn,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.fill)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.fill)!=null&&xe.editable)&&Ne(Bo)})}var Br=F(Fn,2);{var Rt=Ne=>{cs(Ne,{name:"Font Color",children:(Ce,Re)=>{ou(Ce,{get value(){return p(c).fontColor},onChangeCb:xe=>g("fontColor",xe)})},$$slots:{default:!0}})};ge(Br,Ne=>{var Ce,Re,xe;((Ce=p(c))==null?void 0:Ce.fontColor)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.fontColor)!=null&&xe.editable)&&Ne(Rt)})}N($,P)};ge(R,$=>{p(a)&&$(k)})}N(b,L)}},$$legacy:!0}),le()}var iR=ne('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ss(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var o=iR(),s=K(o),a=K(s);ut(a,e,"default",{}),Y(s),Y(o),ee(()=>S(o,"title",r())),Me("click",o,qn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,o)}var sR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function aR(t){var e=sR();N(t,e)}var lR=ne('<div class="buttons-container svelte-kc00rw"><!></div>');function ul(t,e){var n=lR(),r=K(n);ut(r,e,"default",{}),Y(n),N(t,n)}var cR=ne('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),uR=ne('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),dR=ne('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function _R(t,e){ae(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n),o=()=>ve(Rr,"$globalConstraintsStore",n),s=()=>ve(ft,"$localConstraintsStore",n);let a=U(e,"showModal",12,!1),c=D(""),u=D(""),_=D(""),v=D(""),g=D("");function h(){a(!1)}function m(){const w=p(u)?C(p(u)):["Anonymous"],R={title:p(c)?p(c):"Sudoku",authors:w,ruleset:p(_),ctcYoutubeUrl:p(v),ctcUrl:p(g)};IL(R),a(!1)}function C(w){return w.split(/\s*[;]\s*/)}function I(){var P,W,X,J;let w="";const L=Gt,R=o();!!R.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,Q]of R.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&Q){const oe=L[ce],pe=((P=oe.menu)==null?void 0:P.name)??oe.toolId,me=(W=oe.meta)==null?void 0:W.description;w+=`**${pe}**: ${me}

`}const $=s();for(const[ce,Q]of $.entries())if(Object.keys(Q).length>0){const pe=L[ce],me=((X=pe.menu)==null?void 0:X.name)??pe.toolId,Ee=(J=pe.meta)==null?void 0:J.description;w+=`**${me}**: ${Ee}

`}return w.trim()}function b(){const w=I();x(_,w)}G(()=>(Z(a()),r(),Ga),()=>{if(!a()){const w=r().authors;x(c,r().title??""),x(u,w?Ga(w,"; ","; "):""),x(_,r().ruleset??""),x(v,r().ctcYoutubeUrl??""),x(g,r().ctcUrl??"")}}),Ie(),fe(),Hr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,L)=>{var R=dR(),k=K(R);no(k,{title:"Title"});var $=F(k,2);Kt($);var P=F($,2);no(P,{title:"Authors"});var W=F(P,2);Kt(W);var X=F(W,2);no(X,{title:"Ruleset",children:(Ee,De)=>{var st=cR();Me("click",st,b),N(Ee,st)},$$slots:{default:!0}});var J=F(X,2);Gw(J),S(J,"rows",8);var ce=F(J,2);no(ce,{title:"CTC Link"});var Q=F(ce,2);Kt(Q);var oe=F(Q,2);no(oe,{title:"CTC Youtube Link"});var pe=F(oe,2);Kt(pe);var me=F(pe,2);ul(me,{children:(Ee,De)=>{var st=uR(),Se=ue(st),we=F(Se,2);Me("click",Se,m),Me("click",we,h),N(Ee,st)},$$slots:{default:!0}}),Y(R),Kn($,()=>p(c),Ee=>x(c,Ee)),Kn(W,()=>p(u),Ee=>x(u,Ee)),Kn(J,()=>p(_),Ee=>x(_,Ee)),Kn(Q,()=>p(g),Ee=>x(g,Ee)),Kn(pe,()=>p(v),Ee=>x(v,Ee)),N(w,R)},$$slots:{default:!0},$$legacy:!0}),le()}var fR=ne("<!> <!>",1);function gR(t){let e=D(!1);function n(){x(e,!0)}var r=fR(),o=ue(r);Ss(o,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{aR(a)},$$slots:{default:!0}});var s=F(o,2);_R(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var hR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function vR(t){var e=hR();N(t,e)}var pR=ne('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function mR(t,e){ae(e,!1);let n=D(null),r=D(null);function o(){var s;(s=p(n))==null||s.click()}G(()=>(p(r),Ua),()=>{if(p(r)&&p(r).length){const s=p(r)[0],a=new FileReader;a.readAsText(s),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=iL(_);console.log(v),AL(v),Ua()}},a.onerror=function(){alert(a.error)}}}),Ie(),fe(),Ss(t,{title:"Open Puzzle",clickCb:o,children:(s,a)=>{var c=pR(),u=ue(c);vR(u);var _=F(u,2);No(_,v=>x(n,v),()=>p(n)),Yw(_,()=>p(r),v=>x(r,v)),N(s,c)},$$slots:{default:!0}}),le()}var CR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function ER(t){var e=CR();N(t,e)}var IR=ne('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function eh(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),o=U(e,"max",8),s=U(e,"value",12),a=U(e,"step",24,()=>(o()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fe();var _=IR(),v=K(_),g=K(v);Y(v);var h=F(v,2);Kt(h),Y(_),ee(()=>{et(g,`${n()??""}: ${s()??""}`),S(h,"min",r()),S(h,"max",o()),S(h,"step",a())}),Kn(h,s),Me("change",h,()=>{c()&&c()(s())}),Me("input",h,()=>{u()&&u()(s())}),N(t,_),le()}var bR=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),wR=ne('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function OR(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,o=20;let s=D(9),a=D(9),c=D(""),u=D(St.range(1,10));function _(){n(!1)}function v(){Ua(),LL(p(a),p(s),p(u).sort()),n(!1)}function g(C){return C.map(b=>String(b)).join(",")}function h(){const C=Math.min(Math.max(p(a),p(s)),9);x(u,St.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&x(u,C.replaceAll(" ","").split(",").map(Number))}fe(),Hr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var b=wR(),w=K(b);eh(w,{name:"Width",min:r,max:o,step:1,onInputCb:h,get value(){return p(s)},set value(W){x(s,W)},$$legacy:!0});var L=F(w,2);eh(L,{name:"Height",min:r,max:o,step:1,onInputCb:h,get value(){return p(a)},set value(W){x(a,W)},$$legacy:!0});var R=F(L,2),k=Xe(()=>`Allowed Digits (for the solver): ${g(p(u))}`);no(R,{get title(){return p(k)}});var $=F(R,2);Kt($),ee(()=>S($,"placeholder",g(p(u))));var P=F($,2);ul(P,{children:(W,X)=>{var J=bR(),ce=ue(J),Q=F(ce,2);Me("click",ce,v),Me("click",Q,_),N(W,J)},$$slots:{default:!0}}),Y(b),Kn($,()=>p(c),W=>x(c,W)),Me("input",$,()=>m(p(c))),N(C,b)},$$slots:{default:!0},$$legacy:!0}),le()}var yR=ne("<!> <!>",1);function LR(t){let e=D(!1);function n(){x(e,!0)}var r=yR(),o=ue(r);Ss(o,{title:"New Puzzle",clickCb:n,children:(a,c)=>{ER(a)},$$slots:{default:!0}});var s=F(o,2);OR(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var AR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function SR(t){var e=AR();N(t,e)}var xR=ne('<button class="modal-button">Cancel</button>'),NR=ne('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function TR(t,e){ae(e,!1);const n=rt(),r=()=>ve(di,"$svgRefStore",n),o=()=>ve(Os,"$puzzleStore",n),s=()=>ve(Dr,"$puzzleMetaStore",n),a=D();let c=U(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let L="";for(let R of w){const k=w.getPropertyValue(R);k&&(L+=`${R}:${k};`)}return L}function _(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const L=b.childNodes;for(let R=0;R<L.length;R++){const k=L[R];if(k instanceof Element){const $=_(k);w.replaceChild($,w.childNodes[R])}}return w}function v(b,w="download.png"){const L=_(b),k=new XMLSerializer().serializeToString(L),$=new Image,P=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),W=URL.createObjectURL(P);$.onload=()=>{const X=b.getBoundingClientRect(),J=X.width,ce=X.height,Q=document.createElement("canvas"),oe=window.devicePixelRatio||1;Q.width=J*oe,Q.height=ce*oe;const pe=Q.getContext("2d");pe&&(pe.scale(oe,oe),pe.drawImage($,0,0,J,ce),Q.toBlob(me=>{if(!me)return;const Ee=URL.createObjectURL(me),De=document.createElement("a");De.href=Ee,De.download=w,De.click(),URL.revokeObjectURL(Ee)}))},$.src=W}function g(b,w="download.svg"){const L=_(b);let k=new XMLSerializer().serializeToString(L);k.includes("<?xml")||(k=`<?xml version="1.0" standalone="no"?>\r
`+k);const $=new Blob([k],{type:"image/svg+xml"}),P=URL.createObjectURL($),W=document.createElement("a");W.href=P,W.download=w,W.click(),URL.revokeObjectURL(P)}const h=()=>{const b=oL(o());return JSON.stringify(b,null,2)},m=()=>{function b(R,k,$){var P=document.createElement("a"),W=new Blob([R],{type:$});P.href=URL.createObjectURL(W),P.download=k,P.click(),URL.revokeObjectURL(P.href)}const w=h(),L=Eu(s());b(w,`${L}.json`,"text/plain")};function C(){c(!1)}const I=1;G(()=>r(),()=>{x(a,r())}),Ie(),fe(),Hr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var L=NR(),R=K(L),k=K(R),$=K(k),P=F($,2),W=F(P,2);Y(k);var X=F(k,2),J=F(K(X),2),ce=K(J);S(ce,"width",400*I),S(ce,"height",300*I),Y(J),Y(X),Y(R);var Q=F(R,2);ul(Q,{children:(oe,pe)=>{var me=xR();Me("click",me,C),N(oe,me)},$$slots:{default:!0}}),Y(L),Me("click",$,m),Me("click",P,()=>v(p(a))),Me("click",W,()=>g(p(a))),N(b,L)},$$slots:{default:!0},$$legacy:!0}),le()}var DR=ne("<!> <!>",1);function RR(t){let e=D(!1);function n(){x(e,!0)}var r=DR(),o=ue(r);Ss(o,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{SR(a)},$$slots:{default:!0}});var s=F(o,2);TR(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var kR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Wv(t){var e=kR();N(t,e)}var GR=ne('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),MR=ne('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Sa(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var o=MR(),s=K(o);no(s,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=F(s,2);al(a,{get isOpen(){return r()},children:(c,u)=>{var _=GR(),v=K(_);ut(v,e,"default",{}),Y(_),N(c,_)},$$slots:{default:!0}}),Y(o),N(t,o)}var $R=ne('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function UR(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),o=U(e,"disabled",8,!1);var s=$R(),a=K(s);Kt(a),xo(2),Y(s),ee(()=>{Ot(s,"disabled",o()),Ah(a,n()),a.disabled=o()}),Me("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,s)}var FR=ne('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Jr(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),o=U(e,"updateCb",8,void 0),s=U(e,"disabled",8,!1);function a(){s()||o()&&o()(!n())}fe();var c=FR(),u=K(c);UR(u,{get value(){return n()},onClickCb:a,get disabled(){return s()}});var _=F(u,2),v=K(_,!0);Y(_),Y(c),ee(()=>{Ot(c,"disabled",s()),et(v,r())}),Me("click",_,qn(a)),N(t,c),le()}var HR=ne("<!> <!>",1),PR=ne("<!> <!> <!>",1),BR=ne("<!> <!>",1),WR=ne('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function zv(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),o=()=>ve(Qa,"$gameModeStore",n),s=D();let a=U(e,"showModal",12,!1);G(()=>r(),()=>{x(s,r())}),Ie(),fe(),Hr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=WR(),v=K(_);Sa(v,{title:"General",children:(I,b)=>{Jr(I,{get value(){return p(s).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Zw})},$$slots:{default:!0}});var g=F(v,2);Sa(g,{title:"Tools",children:(I,b)=>{var w=HR(),L=ue(w);Jr(L,{get value(){return p(s).penToolActive},name:"Pen Tool",updateCb:Jw});var R=F(L,2);Jr(R,{disabled:!0,get value(){return p(s).letterToolActive},name:"Letter Tool",updateCb:eO}),N(I,w)},$$slots:{default:!0}});var h=F(g,2);Sa(h,{title:"Gameplay",children:(I,b)=>{var w=PR(),L=ue(w);Jr(L,{name:"Check Conflicts",get value(){return p(s).checkConflicts},updateCb:nO});var R=F(L,2);Jr(R,{name:"Highlight Pencilmark Conflicts",get value(){return p(s).highlightPencilmarkConflicts},updateCb:rO});var k=F(R,2);Jr(k,{name:"Highlight Cells Seen By Selection",get value(){return p(s).highlightCellsSeenBySelection},updateCb:tO}),N(I,w)},$$slots:{default:!0}});var m=F(h,2);{var C=I=>{Sa(I,{title:"Setting Mode Display",children:(b,w)=>{var L=BR(),R=ue(L);Jr(R,{name:"Hide Fog",get value(){return p(s).hideFog},updateCb:oO});var k=F(R,2);Jr(k,{name:"Show Solution",get value(){return p(s).showSolution},updateCb:iO}),N(b,L)},$$slots:{default:!0}})};ge(m,I=>{o()===hi.SETTING&&I(C)})}Y(_),N(c,_)},$$slots:{default:!0},$$legacy:!0}),le()}var zR=ne("<!> <!>",1);function YR(t){let e=D(!1);function n(){x(e,!0)}var r=zR(),o=ue(r);Ss(o,{title:"Settings",clickCb:n,children:(a,c)=>{Wv(a)},$$slots:{default:!0}});var s=F(o,2);zv(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var jR=ne('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function VR(t){var e=jR(),n=K(e);LR(n);var r=F(n,2);RR(r);var o=F(r,2);mR(o,{});var s=F(o,2);gR(s);var a=F(s,2);YR(a),Y(e),N(t,e)}var KR=ne('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function XR(t,e){ae(e,!1);let n=D(!1);function r(){const o=it(gn),s=[];for(let a=0;a<o.nRows;a++){const c=[];for(let u=0;u<o.nCols;u++){const _=o.getCell(a,u);if(!_)continue;const v=_.value;c.push(v)}s.push(c)}md(s)}fe(),cl(t,{get isOpen(){return p(n)},set isOpen(o){x(n,o)},$$slots:{"panel-header":(o,s)=>{ll(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(a){x(n,a)},$$legacy:!0})},"panel-content":(o,s)=>{var a=KR();Me("click",a,r),N(o,a)}},$$legacy:!0}),le()}const qR={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function ZR(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],s=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[s,o]};if(o==="<"||o==="<=")return{upper_bound:[s,o]}}if(r=n.exec(t),r){const o=r[1],s=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[s,o==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function QR(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function JR(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Yv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function ek(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=QR(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=JR(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const s=ZR(t);if(e.allow_interval&&s)return{type:"interval",parsed:s};const a=Yv(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var re=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t))(re||{});function xt(t,e){return`${e}[${t.r},${t.c}]`}function _o(t,e){return t.map(r=>xt(r,e))}function $e(t,e){return"["+_o(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function je(t){return t.map(n=>Oe(n))}function tk(t){return`values_grid[${t.r},${t.c}]`}function dl(t){return t.map(e=>tk(e))}function So(t){return`constraint alldifferent([${t.join(",")}]);
`}function dt(t,e){return t&&(t=`
% ${e}
`+t),t}function Ad(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const o of n){const s=t.getCellsInDirection(e.r,e.c,o);r.push(s)}return r}function Sd(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const o of n){const s=t.getCellsInDirection(e.r,e.c,o),a="["+je(s).join(",")+"]";r.push(a)}return r}function _l(t,e,n,r){let o="";const s=r.get(e);if(s)for(const a of Object.values(n)){const c=s(t,a);o+=c}return o}class nk{constructor(e){he(this,"model_str","");he(this,"used_vars");he(this,"puzzle");he(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=qR){const o=ek(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let s="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(s+=`var int: ${c};
`,this.addVariable(c)),[s,c]}if(!n)return null;if(this.hasVariable(n)||(s+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];s+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];s+=`constraint ${n} ${_} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";s+=`constraint member(${u}, ${n});
`}return o.type==="var_list"?null:[s,n]}}function rk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,s=/^test\s+(\w+)\s*\(/;let a=null,c=0,u=0;for(let I=0;I<e.length;I++){const b=e[I].trim(),w=b.match(r),L=b.match(o),R=b.match(s);if(w||L||R){a={name:(w||L||R)[1],startLine:I,content:[e[I]]},c=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length;continue}if(a&&(a.content.push(e[I]),c+=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u+=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length,c===0&&u===0&&b.endsWith(";"))){n[a.name]={startLine:a.startLine,endLine:I,name:a.name,content:a.content};let k=a.startLine;for(;k>0&&e[k-1].trim().startsWith("%");)k-=1;n[a.name].startLine=k,a=null}}const _=new Set;function v(I){const b=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&b.push(w);return b}for(const I of e)v(I).forEach(w=>_.add(w));const g=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));g.sort((I,b)=>b.start-I.start);const h=[...e];for(const I of g)h.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of h)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function th(t){let e=t,n=e.length;for(;e=rk(e),e.length!=n;)n=e.length;return e}const nh=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function xd(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function ok(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),o=Math.max(...n),s=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const v=e.getCell(c,_);!v||v.region===null?u.push(r-1):u.push(v.region)}s.push(u)}const a=xd(s);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${o}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Nd(t){const e=new Map;for(const n of t){const r=n.value??"",o=e.get(r);if(!o){e.set(r,[n]);continue}o.push(n)}return e}function ik(t,e){const r=t.grid.getPositiveDiagonal(),o=je(r);let s=So(o);return s=`
% Positive Diagonal Constraint
`+s,s}function sk(t,e){const r=t.grid.getNegativeDiagonal(),o=je(r);let s=So(o);return s=`
% Negative Diagonal Constraint
`+s,s}function ak(t,e){const r=t.grid.getPositiveDiagonal(),s="["+je(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${s}) == 3;
`,a}function lk(t,e){const r=t.grid.getNegativeDiagonal(),s="["+je(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${s}) == 3;
`,a}function ck(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let s="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_+(u-v));if(!g||!h)continue;const m=Oe(g),C=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;s+=b}}return s}function uk(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let s="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_-(u-v));if(!g||!h)continue;const m=Oe(g),C=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;s+=b}}return s}function dk(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let s=0;s<o;s++){const a=n.getDisjointGroup(s),_=`constraint alldifferent(${`[${je(a).join(",")}]`});
`;r+=_}return r}function _k(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getNeighboorCells(o).filter(g=>g.r+g.c>=o.r+o.c),c=Oe(o),_=`[${je(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function fk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getCellsByKnightMove(o).filter(g=>g.r>=o.r||g.c>=o.c),c=Oe(o),_=`[${je(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function gk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=dt(n,`${e}`),n}function hk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=dt(n,`${e}`),n}function vk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=dt(n,`${e}`),n}function*fo(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function pk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,s]of fo(n)){const a=Oe(o),c=Oe(s),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function mk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,s]of fo(n)){const a=Oe(o),c=Oe(s),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function Ck(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getRow(o.r),c=`[${je(s).join(",")}]`,u=o.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function Ek(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function Ik(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function bk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=dt(n,`${e}`),n}function iu(t,e){const n=t.grid,o=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const s=[];if(o)for(const c of Object.values(o)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&s.push(_)}let a="";for(const[c,u]of fo(n)){if(s.find(h=>h.has(c)&&h.has(u)))continue;const v=Oe(c),g=Oe(u);if(e===d.ALL_V_GIVEN){const h=`constraint ${v} + ${g} != 5;
`;a+=h}else if(e===d.ALL_X_GIVEN){const h=`constraint ${v} + ${g} != 10;
`;a+=h}else{const h=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;a+=h}}return a=dt(a,`${e}`),a}function fi(t,e){const n=[];if(e)for(const r of Object.values(e)){const o=r.cells,s=new Set(o.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(s)}return n}function wk(t,e){const n=t.grid,o=t.localConstraints.get(d.XY_DIFFERENCES),s=fi(n,o);let a="";for(const[c,u]of fo(n)){if(s.find(C=>C.has(c)&&C.has(u)))continue;const v=Oe(c),g=Oe(u);let h="";if(c.r==u.r){const I=n.getRow(c.r)[0];h=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];h=Oe(I)}if(!h)continue;const m=`constraint abs(${v} - ${g}) != ${h};
`;a+=m}return a=dt(a,`${e}`),a}function Ok(t,e){const n=t.grid,r=t.localConstraints,o=r.get(d.DIFFERENCE),s=r.get(d.RATIO);let a=fi(n,o);a=[...a,...fi(n,s)];let c=[];o&&(c=Object.values(o).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,g]of fo(n)){if(a.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),C=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${C}) != ${b};
`;_+=w}}return _=dt(_,`${e}`),_}function yk(t,e){const n=t.grid,r=t.localConstraints,o=r.get(d.RATIO),s=r.get(d.DIFFERENCE);let a=fi(n,o);a=[...a,...fi(n,s)];let c=[];o&&(c=Object.values(o).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,g]of fo(n)){if(a.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),C=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${C}, ${b});
`;_+=w}}return _=dt(_,`${e}`),_}function Lk(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_KROPKI),s=fi(n,o);let a="";for(const[c,u]of fo(n)){if(s.find(I=>I.has(c)&&I.has(u)))continue;const v=Oe(c),g=Oe(u),h=xt(c,re.YIN_YANG),m=xt(u,re.YIN_YANG),C=`constraint not yin_yang_kropki_p(${v}, ${g}, ${h}, ${m});
`;a+=C}return a=dt(a,`${e}`),a}function Ak(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),s=o?Object.values(o):[];function a(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(s,u),v=_?_.directions:[],g=Oe(u),h=[Be.E,Be.N,Be.S,Be.W];for(const m of h){if(v.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=$e(C,re.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=dt(c,`${e}`),c}function Td(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const o=r.cell,s=t.getCell(o.r,o.c);s&&n.add(s)}return n}function Sk(t,e){const n=t.grid,o=t.localConstraints.get(d.INDEXING_COLUMN),s=Td(n,o);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=n.getRow(c.r),g=`[${je(_).join(",")}]`,h=c.c+1,m=`constraint not indexing_column_p(${g}, ${h});
`;a+=m}return a=dt(a,`${e}`),a}function xk(t,e){const n=t.grid,o=t.localConstraints.get(d.RADAR),s=Td(n,o);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=Oe(c),[v,g,h,m]=Sd(n,c),C=`constraint not radar_p(${_}, ${v}, ${g}, ${h}, ${m}, 9);
`;a+=C}return a=dt(a,`${e}`),a}function Nk(t,e){const n=t.grid,o=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),s=Td(n,o);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,h=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=h}return a=dt(a,`${e}`),a}function Tk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,s]of fo(n)){const a=Oe(o),c=Oe(s),u=`nurimisaki[${o.r},${o.c}]`,_=`nurimisaki[${s.r},${s.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=v}return r}function Dk(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let s=`
% ${e}
`;for(const a of Object.values(o)){const u=a.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=$e(u,re.YIN_YANG);s+=`constraint count_unique_values(${_}) >= 2;
`}return s}function Rk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=dt(n,`${e}`),n}function kk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=dt(n,`${e}`),n}function Gk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function Mk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function $k(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=dt(n,`${e}`),n}function Uk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=dt(n,`${e}`),n}function Fk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Hk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Pk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Bk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=dt(n,`${e}`),n}function Wk(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const s=r.getNeighboorCells(o).filter(_=>o.region!==null&&_.region===o.region),a=xt(o,re.BOARD),c=xt(o,re.YIN_YANG),u=$e(s,re.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=dt(n,`${e}`),n}function zk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Yk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function jk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Vk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Kk(t,e){let n="";const r=t.grid,s=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=s.length?Math.max(...s):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=dt(n,`${e}`),n}function Xk(t,e){let n="";const s="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${s});
`,n=dt(n,`${e}`),n}function qk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),_=je(u),v=So(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const s=n.nCols;for(let c=0;c<s;c++){const u=n.getCol(c),_=je(u),v=So(_);r+=v}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=je(_),g=So(v);r+=g}}return r}function Zk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const Qk=new Map([[d.POSITIVE_DIAGONAL,ik],[d.NEGATIVE_DIAGONAL,sk],[d.POSITIVE_ANTIDIAGONAL,ak],[d.NEGATIVE_ANTIDIAGONAL,lk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,ck],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,uk],[d.ANTIKING,_k],[d.ANTIKNIGHT,fk],[d.ANTI_GIRAFFE,gk],[d.DISJOINT_GROUPS,dk],[d.TANGO,hk],[d.NONCONSECUTIVE,pk],[d.NONRATIO,mk],[d.ANTI_ENTROPY,vk],[d.GLOBAL_INDEXING_COLUMN,Ck],[d.ALL_V_GIVEN,iu],[d.ALL_X_GIVEN,iu],[d.ALL_XV_GIVEN,iu],[d.ALL_DIFFERENCES_GIVEN,Ok],[d.ALL_RATIOS_GIVEN,yk],[d.ALL_XY_DIFFERENCES_GIVEN,wk],[d.ALL_YIN_YANG_KROPKI_GIVEN,Lk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,Ak],[d.ALL_INDEXING_COLUMN_GIVEN,Sk],[d.ALL_RADARS_GIVEN,xk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Nk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Tk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Dk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,bk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,Ek],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,Ik],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Rk],[d.CAVE_CELLS_ARE_ODD,Gk],[d.CAVE_WALLS_ARE_EVEN,Mk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,$k],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Uk],[d.YIN_YANG_FILLOMINO_PARITY,kk],[d.TWO_SYMMETRIC_GALAXIES,Pk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,Fk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Hk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Bk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Wk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,zk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Xk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,Yk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,jk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,Vk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,Kk]]);function Jk(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const s=Qk.get(r);if(!s)continue;const a=s(t,r);e+=a}return e}function jv(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function Vv(t,e){const n=e.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return`[${je(n.slice(1)).join(",")}]`}function e3(t,e,n,r){let o="";const s=jv(e,r),a=`arrow_${n}`;if(o+=`var int: ${a};
`,o+=`% arrow pill
`,s.length===1){const u=s[0];o+=`constraint ${a} == ${u};
`}else if(s.length>1){const u=s.toReversed().map((_,v)=>`${Math.pow(10,v)}*${_}`).join(" + ");o+=`constraint ${a} == ${u};
`}else return"";const c=r.lines;o+=`% arrow lines
`;for(const u of c){const v=`constraint sum(${Vv(e,u)}) == ${a};
`;o+=v}return o}function t3(t,e,n,r){let o="";const s=jv(e,r);if(s.length===1){const a=s[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${Vv(e,u)}, ${a});
`;o+=v}}return o}const n3=new Map([[d.ARROW,e3],[d.AVERAGE_ARROW,t3]]);function r3(t,e,n,r){let o="";const s=n3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);o+=u}return o}function io(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function Kv(t,e,n){const o=`[${io(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function fl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Dd(t,e,n,r,o){const a=`[${io(e,r).join(",")}]`,c=r.value,u=fl(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${o}(${a}, ${_});
`,v}function o3(t,e,n,r){const o=io(e,r),s=`[${o.join(",")}]`,a=r.value;if(!a)return So(o);const c=fl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${s}, ${u});
`,_}function i3(t,e,n,r){const o=io(e,r),s=`[${o.join(",")}]`,a=r.value;if(!a)return So(o);const c=fl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${s}, ${u});
`,_}function s3(t,e,n,r){return Dd(t,e,n,r,"sum_cage_p")}function a3(t,e,n,r){return Kv(e,r,"parity_balance_cage_p")}function l3(t,e,n,r){return Kv(e,r,"sum_cage_look_and_say_p")}function c3(t,e,n,r){return Dd(t,e,n,r,"divisible_killer_cage_p")}function u3(t,e,n,r){return Dd(t,e,n,r,"spotlight_cage_p")}function d3(t,e,n,r){const s=`[${io(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${s}, ${c}, ALLOWED_DIGITS);
`}return""}function _3(t,e,n,r){const s=`[${io(e,r).join(",")}]`,a=r.value;let c="";const u=fl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${s}) == ${m};
`}const v=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!v.includes(I)&&!g.includes(I)&&g.push(I)});const h=$e(g,re.BOARD);return c+=`constraint vaulted_cage_p(${s}, ${h});
`,c}function Xv(t,e,n,r,o){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),u=`[${je(a).join(",")}]`,_=$e(a,re.YIN_YANG),v=r.value;if(v){const g=parseInt(v);return`constraint ${o}(${u}, ${_}, ${g});
`}return""}function f3(t,e,n,r){return Xv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function g3(t,e,n,r){return Xv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function h3(t,e,n,r){const s=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(s).join(",")}]`,_=`[${dl(s).join(", ")}]`,v=r.value;if(v){const g=parseInt(v);return`constraint doublers_killer_cage_p(${c}, ${_}, ${g});
`}return""}function v3(t,e,n,r){const s=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(s).join(",")}]`,_=`[${dl(s).join(", ")}]`,v=r.value;if(v){const g=parseInt(v);return`constraint negators_killer_cage_p(${c}, ${_}, ${g});
`}return""}function p3(t,e){let n="";const r=Nd(e);for(const o of r.values())if(!(o.length<=1))for(const[s,a]of o.flatMap((c,u)=>o.slice(u+1).map(_=>[c,_]))){const u=`[${io(t,s).join(",")}]`,v=`[${io(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const m3=new Map([[d.KILLER_CAGE,o3],[d.INVERTED_KILLER_CAGE,i3],[d.SUM_CAGE,s3],[d.PARITY_BALANCE_CAGE,a3],[d.SUM_CAGE_LOOK_AND_SAY,l3],[d.DIVISIBLE_KILLER_CAGE,c3],[d.SPOTLIGHT_CAGE,u3],[d.UNIQUE_DIGITS_CAGE,d3],[d.VAULTED_CAGE,_3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,f3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,g3],[d.DOUBLERS_KILLER_CAGE,h3],[d.NEGATORS_KILLER_CAGE,v3]]);function C3(t,e,n,r){let o="";const s=m3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);o+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=p3(e,a);o+=c}return o}function E3(t,e,n,r){const o=e.r+.5,s=e.c+.5,a=n-o,c=r-s,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function I3(t,e){const n=[],r=[],o=[];for(const s of t.getAllCells()){const a=E3(t,s,e.r,e.c);a&&!n.includes(a)?(n.push(s),r.push(a)):r.includes(s)||o.push(s)}return[n,r,o]}function b3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[g,h,m]=I3(e,_),C=$e(g,re.GALAXY_REGIONS),I=$e(h,re.GALAXY_REGIONS),b=$e(m,re.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${b}, ${v});
`,r+=`constraint connected_region(${re.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const L=parseInt(w);r+=`constraint galaxy_sum_p(${re.BOARD}, ${re.GALAXY_REGIONS}, ${L}, ${v});
`}if(!n.length)return r;const o=e.nCols*e.nRows,a=`${n.length+1}..${o}`;return r+=`
constraint order_remaining_galaxies_p(${re.GALAXY_REGIONS}, ${a});
`,r}function w3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function O3(t,e,n,r){const o=r.cell,[s,a]=[o.r,o.c],c=r.value,u=w3(t,c,n);if(!u)return"";const _=u[1];let v=u[0],g=[];if(s%1===0&&a%1===0?g=ad(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(s%1===.5&&a%1===0||s%1===0&&a%1===.5)&&(g=cd(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const h=$e(g,re.BOARD),m=$e(g,re.YIN_YANG);return v+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${_};
`,v}const y3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,O3]]),L3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,b3]]);function A3(t,e,n,r){let o="";const s=L3.get(n),a=y3.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);o+=_}else if(s){const c=Object.values(r),u=s(t,e,c);o+=u}return o}function rh(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return je(n)}function S3(t,e){const r="["+rh(t,e.cells).join(",")+"]",s="["+rh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${s});
`}const x3=new Map([[d.CLONE_REGION,S3]]);function N3(t,e,n,r){return _l(e,n,r,x3)}function Rd(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function kd(t,e,n){const o=`[${Rd(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function qv(t,e,n,r=""){const s=`[${Rd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${s}, ${c});
`}return""}function T3(t,e,n,r){const s=`[${Rd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Yv(a);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${s}, ${_});
`,u}function D3(t,e,n,r){return qv(e,r,"corner_sum_p")}function R3(t,e,n,r){return qv(e,r,"corner_even_count_p")}function k3(t,e,n,r){return kd(e,r,"corner_sum_of_three_equals_the_other_p")}function G3(t,e,n,r){return kd(e,r,"equal_diagonal_differences_p")}function M3(t,e,n,r){return kd(e,r,"product_square_p")}const $3=new Map([[d.QUADRUPLE,T3],[d.CORNER_SUM,D3],[d.CORNER_EVEN_COUNT,R3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,k3],[d.PRODUCT_SQUARE,M3],[d.EQUAL_DIAGONAL_DIFFERENCES,G3]]);function U3(t,e,n,r){let o="";const s=$3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);o+=u}return o}function gl(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function F3(t,e,n){const r=gl(t,e),[o,s]=r;return`constraint ${n}(${o}, ${s});
`}function H3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function hl(t,e,n,r,o,s=""){var m;const a=gl(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:s,v=H3(t,_,n);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint ${o}(${c}, ${u}, ${g});
`,h}function P3(t,e,n,r){const o=gl(e,r),[s,a]=o;return r.value==="V"||r.value==="v"?`constraint ${s} + ${a} = 5;
`:`constraint ${s} + ${a} = 10;
`}function B3(t,e,n,r){return hl(t,e,n,r,"ratio_p","2")}function W3(t,e,n,r){return hl(t,e,n,r,"abs_difference","1")}function oh(t,e,n,r){const o=gl(e,r),[s,a]=o,c=r.value;return c==="<"?`constraint ${s} < ${a};
`:c===">"?`constraint ${s} > ${a};
`:""}function z3(t,e,n,r){return hl(t,e,n,r,"edge_sum_p")}function Y3(t,e,n,r){return hl(t,e,n,r,"edge_modulo_p")}function j3(t,e,n,r){return F3(e,r,"edge_factor_p")}function V3(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[a,c]=je(s),[u,_]=s;let v="";if(u.r==_.r){const m=e.getRow(u.r)[0];v=Oe(m)}else if(u.c==_.c){const m=e.getCol(u.c)[0];v=Oe(m)}return v?`constraint abs(${a} - ${c}) == ${v};
`:""}function K3(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[a,c]=je(s),u=_o(s,re.YIN_YANG),[_,v]=u;return`constraint yin_yang_kropki_p(${a}, ${c}, ${_}, ${v});
`}function X3(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[a,c]=je(s),u=_o(s,re.YIN_YANG),[_,v]=u;return`constraint yin_yang_white_kropki_p(${a}, ${c}, ${_}, ${v});
`}function q3(t,e,n,r){const s=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),a=_o(s,re.UNKNOWN_REGIONS),[c,u]=a;return`constraint ${c} != ${u};
`}function Z3(t,e,n,r){const s=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),a=_o(s,re.SUGURU_REGIONS),[c,u]=a;return`constraint ${c} != ${u};
`}function Q3(t,e,n,r){const s=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),a=_o(s,re.CAVE_SHADING),[c,u]=a;return`constraint ${c} != ${u};
`}const J3=new Map([[d.XV,P3],[d.DIFFERENCE,W3],[d.RATIO,B3],[d.EDGE_INEQUALITY,oh],[d.ONE_WAY_DOOR,oh],[d.EDGE_SUM,z3],[d.EDGE_MODULO,Y3],[d.EDGE_FACTOR,j3],[d.XY_DIFFERENCES,V3],[d.YIN_YANG_KROPKI,K3],[d.YIN_YANG_WHITE_KROPKI,X3],[d.UNKNOWN_REGION_BORDER,q3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,Z3],[d.EDGE_CAVE_ONE_OF_EACH,Q3]]);function e5(t,e,n,r){let o="";const s=J3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);o+=u}return o}function Ni(t,e,n=!1){let o=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return n&&(o=[...new Set(o)]),je(o)}function ht(t,e,n,r=!1){const s=`[${Ni(t,e,r).join(",")}]`;return`constraint ${n}(${s});
`}function vr(t,e,n,r=""){const s=`[${Ni(t,e).join(",")}]`;let a=e.value;if(a||(a=r),!a)return"";const c=parseInt(a);return`constraint ${n}(${s}, ${c});
`}function Gd(t,e,n){let o=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),s=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),s=!0);const c=`[${je(o).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${s});
`}function t5(t,e,n,r){return ht(e,r,"renban",!0)}function n5(t,e,n,r){return ht(e,r,"double_renban_p",!0)}function r5(t,e,n,r){return ht(e,r,"renrenbanban_p",!0)}function o5(t,e,n,r){return ht(e,r,"knabner_p",!0)}function i5(t,e,n,r){return ht(e,r,"renban_or_nabner_line_p",!0)}function s5(t,e,n,r){return ht(e,r,"out_of_order_consecutive_line_p")}function a5(t,e,n,r){const s=`[${Ni(e,r).join(",")}]`,a=r.value,c=a?parseInt(a):5;return`constraint whispers(${s}, ${c});
`}function l5(t,e,n,r){return`constraint whispers(${`[${Ni(e,r).join(",")}]`}, 4);
`}function c5(t,e,n,r){return ht(e,r,"strictly_increasing")}function u5(t,e,n,r){return ht(e,r,"fuzzy_thermo_p")}function d5(t,e,n,r){return ht(e,r,"increasing")}function _5(t,e,n,r){return vr(e,r,"custom_thermo_p")}function f5(t,e,n,r){return ht(e,r,"palindrome")}function g5(t,e,n,r){return vr(e,r,"sum_line_p")}function h5(t,e,n,r){return ht(e,r,"xv_line_p")}function v5(t,e,n,r){return vr(e,r,"at_least_x_line_p","10")}function p5(t,e,n,r){return vr(e,r,"product_line_p")}function m5(t,e,n,r){return vr(e,r,"maximum_adjacent_difference_line_p","2")}function C5(t,e,n,r){return ht(e,r,"adjacent_multiples_line_p")}function E5(t,e,n,r){return ht(e,r,"index_line_p")}function I5(t,e,n,r){return ht(e,r,"zipper_line_p")}function b5(t,e,n,r){return Gd(e,r,"segmented_sum_line_p")}function w5(t,e,n,r){return ht(e,r,"segmented_sum_and_renban_line_p")}function O5(t,e,n,r){return Gd(e,r,"n_consecutive_renban_line_p")}function y5(t,e,n,r){return Gd(e,r,"n_consecutive_fuzzy_sum_line_p")}function L5(t,e,n,r){const s=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_);let a="";const c=[];for(let _=0;_<s.length;_++){const v=s[_],g=e.getRow(v.r),h=$e(g,re.BOARD),m=`cycle_${n}_${_}`;c.push(m);const C=v.c+1;a+=`var int: ${m} = cycle_order_f(${h}, ${C});
`}const u="["+c.join(",")+"]";return a+=`constraint strictly_increasing(${u});
`,a}function A5(t,e,n,r){return ht(e,r,"adjacent_differences_count_line_p")}function S5(t,e,n,r){return ht(e,r,"same_parity_line_p")}function x5(t,e,n,r){return vr(e,r,"renban_or_whispers_p","5")}function N5(t,e,n,r){return ht(e,r,"alldifferent",!0)}function T5(t,e,n,r){return ht(e,r,"repeated_digits_line_p")}function D5(t,e,n,r){return ht(e,r,"superfuzzy_arrow_p")}function R5(t,e,n,r){return ht(e,r,"ambiguous_arrow_p",!0)}function k5(t,e,n,r){return ht(e,r,"headless_arrow_p")}function G5(t,e,n,r){return vr(e,r,"unimodular_line_p","3")}function M5(t,e,n,r){return vr(e,r,"modular_line_p","3")}function $5(t,e,n,r){return vr(e,r,"modular_or_unimodular_line_p","3")}function U5(t,e,n,r){return ht(e,r,"arithmetic_sequence_line_p")}function F5(t,e,n,r){return ht(e,r,"odd_even_oscillator_line_p")}function H5(t,e,n,r){return vr(e,r,"high_low_oscillator_line_p","5")}function P5(t,e,n,r){return ht(e,r,"look_and_say_line_p",!0)}function B5(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h);function a(h){const m=[];let C=null;for(const I of h)I.r!=C?(m.push([I]),C=I.r):m[m.length-1].push(I);return m}const c=a(s);if(c.length<2)return"";const u=c[0],v=`[${je(u).join(",")}]`;let g="";for(let h=1;h<c.length;h++){const m=c[h],I=`[${je(m).join(",")}]`;g+=`constraint sum(${I}) == sum(${v});
`}return g}function W5(t,e,n,r){return ht(e,r,"between_line_p")}function z5(t,e,n,r){return ht(e,r,"tightrope_line_p")}function Y5(t,e,n,r){return ht(e,r,"double_arrow_p")}function j5(t,e,n,r){return ht(e,r,"split_peas_p")}function V5(t,e,n,r){return ht(e,r,"parity_count_line_p")}function K5(t,e,n,r){return ht(e,r,"product_of_ends_equals_sum_of_line_p")}function X5(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const s=o.region;n!==s&&(r.length&&e.push(r),r=[]),r.push(o),n=s}return r.length&&e.push(r),e}function q5(t,e,n,r){let o="";const a=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),c=X5(a);if(!c.length)return"";const u=`sum_line_${n}`;o+=`var int: ${u};
`;for(const _ of c){const h=`constraint sum(${`[${je(_).join(",")}]`}) == ${u};
`;o+=h}return o}function Z5(t,e,n,r){return`constraint entropic_line_p(${`[${Ni(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function Q5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ni(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function J5(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${je(s).join(",")}]`,u=$e(s,re.YIN_YANG);let _=r.value;_||(_="5");const v=parseInt(_);return`constraint yin_yang_shaded_whispers_line_p(${c}, ${u}, ${v});
`}function eG(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${je(s).join(",")}]`,u=$e(s,re.YIN_YANG);let _=r.value;_||(_="3");const v=parseInt(_);return`constraint yin_yang_unshaded_modular_line_p(${c}, ${u}, ${v});
`}function Md(t,e,n){const o=e.cells.map(_=>t.getCell(_.r,_.c)).filter(_=>!!_),a=`[${je(o).join(",")}]`,c=$e(o,re.YIN_YANG);return`constraint ${n}(${a}, ${c});
`}function tG(t,e,n,r){return Md(e,r,"yin_yang_unshaded_entropic_line_p")}function nG(t,e,n,r){return Md(e,r,"yin_yang_indexing_line_coloring_p")}function rG(t,e,n,r){return Md(e,r,"yin_yang_region_sum_line_p")}function oG(t,e,n,r){const s=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),a=$e(s,re.VALUES_GRID),c=$e(s,re.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${c});
`}function $d(t,e,n){const o=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),a=`[${dl(o).join(", ")}]`;return`constraint ${n}(${a});
`}function iG(t,e,n,r){return $d(e,r,"between_line_p")}function sG(t,e,n,r){return $d(e,r,"double_arrow_p")}function aG(t,e,n,r){return $d(e,r,"strictly_increasing")}const lG=new Map([[d.THERMOMETER,c5],[d.FUZZY_THERMOMETER,u5],[d.SLOW_THERMOMETER,d5],[d.CUSTOM_THERMOMETER,_5],[d.RENBAN_LINE,t5],[d.DOUBLE_RENBAN_LINE,n5],[d.RENRENBANBAN_LINE,r5],[d.NABNER_LINE,o5],[d.WHISPERS_LINE,a5],[d.DUTCH_WHISPERS,l5],[d.RENBAN_OR_WHISPERS_LINE,x5],[d.RENBAN_OR_NABNER_LINE,i5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,s5],[d.N_CONSECUTIVE_RENBAN_LINE,O5],[d.PALINDROME,f5],[d.SUM_LINE,g5],[d.PRODUCT_LINE,p5],[d.XV_LINE,h5],[d.AT_LEAST_X_LINE,v5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,m5],[d.SAME_PARITY_LINE,S5],[d.ADJACENT_MULTIPLES_LINE,C5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,A5],[d.LOOK_AND_SAY_LINE,P5],[d.ROW_SUM_LINE,B5],[d.INDEX_LINE,E5],[d.ZIPPER_LINE,I5],[d.SEGMENTED_SUM_LINE,b5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,w5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,y5],[d.SUPERFUZZY_ARROW,D5],[d.AMBIGUOUS_ARROW,R5],[d.HEADLESS_ARROW,k5],[d.ARITHMETIC_SEQUENCE_LINE,U5],[d.ODD_EVEN_OSCILLATOR_LINE,F5],[d.HIGH_LOW_OSCILLATOR_LINE,H5],[d.UNIQUE_VALUES_LINE,N5],[d.REPEATED_DIGITS_LINE,T5],[d.UNIMODULAR_LINE,G5],[d.MODULAR_LINE,M5],[d.MODULAR_OR_UNIMODULAR_LINE,$5],[d.REGION_SUM_LINE,q5],[d.ENTROPIC_LINE,Z5],[d.ENTROPIC_OR_MODULAR_LINE,Q5],[d.ROW_CYCLE_THERMOMETER,L5],[d.BETWEEN_LINE,W5],[d.TIGHTROPE_LINE,z5],[d.DOUBLE_ARROW_LINE,Y5],[d.SPLIT_PEAS,j5],[d.PARITY_COUNT_LINE,V5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,K5],[d.DOUBLERS_THERMOMETER,aG],[d.DOUBLERS_BETWEEN_LINE,iG],[d.DOUBLERS_DOUBLE_ARROW_LINE,sG],[d.YIN_YANG_SHADED_WHISPERS_LINE,J5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,tG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,eG],[d.YIN_YANG_REGION_SUM_LINE,rG],[d.YIN_YANG_INDEXING_LINE_COLORING,nG],[d.GOLDILOCKS_ZONE_REGION_SUM,oG]]);function cG(t,e,n,r){let o="";const s=lG.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);o+=u}return o}function vl(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return je(o)}function xs(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let s="";return(!r||r.outside)&&(s=`R${n.r}C${n.c}`,s=s.replace("-","m")),e||(e=s),t.getOrSetSharedVar(e,s,o)}function Jn(t,e,n,r){const o=n.cell,s=e.getCell(o.r,o.c),c=`[${vl(e,n).join(",")}]`,u=n.value,_=xs(t,u,o,s);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function uG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c),c=`[${vl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=xs(t,u,o,s);if(!h)return"";const m=h[1];let C=h[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C}function dG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c),c=`[${vl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=xs(t,u,o,s);if(!h)return"";const m=h[1];let C=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return C+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${I}, ${b});
`,C}function _G(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c),a=vl(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,v=xs(t,_,o,s);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint x_index_p(${c}, ${u}, ${g});
`,h}function fG(t,e,n,r){return Jn(t,e,r,"x_sum_p")}function gG(t,e,n,r){return Jn(t,e,r,"shortsighted_x_sum_p")}function hG(t,e,n,r){return Jn(t,e,r,"broken_x_sum_p")}function vG(t,e,n,r){return Jn(t,e,r,"shifted_x_sum_p")}function pG(t,e,n,r){return Jn(t,e,r,"skyscrapers_p")}function mG(t,e,n,r){return Jn(t,e,r,"x_sum_skyscrapers_p")}function CG(t,e,n,r){return Jn(t,e,r,"battlefield_p")}function EG(t,e,n,r){return Jn(t,e,r,"rising_streak_p")}function IG(t,e,n,r){return Jn(t,e,r,"outside_consecutive_sum_p")}function bG(t,e,n,r){const o=r.cell,s=r.direction,a=e.getCellsInDirection(o.r,o.c,s),u=`[${je(a).join(",")}]`,_=$e(a,re.CELL_CENTER_LOOP),v=r.value;if(v){const g=parseInt(v);return`constraint loopwhiches_p(${u}, ${_}, ${g});
`}return""}function wG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c),a=r.direction,c=e.getCellsInDirection(o.r,o.c,a),u=$e(c,re.BOARD),_=$e(c,re.UNKNOWN_REGIONS),v=r.value,g=xs(t,v,o,s);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${h});
`,m}function OG(t,e,n,r){return Jn(t,e,r,"little_killer_sum_p")}function yG(t,e,n,r){return Jn(t,e,r,"little_killer_product_p")}function LG(t,e,n,r){return Jn(t,e,r,"x_omit_little_killer_sum_p")}function AG(t,e,n,r){const o=r.cell,s=r.direction,a=e.getCellsInDirection(o.r,o.c,s),u=`[${je(a).join(",")}]`,_=$e(a,re.YIN_YANG),v=r.value;if(v){const g=parseInt(v);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${_}, ${g});
`}return""}function SG(t,e,n,r){const o=r.cell,s=r.direction,a=e.getCellsInDirection(o.r,o.c,s),u=`[${dl(a).join(", ")}]`,_=r.value;if(_){const v=parseInt(_);return`constraint little_killer_sum_p(${u}, ${v});
`}return""}const xG=new Map([[d.SANDWICH_SUM,uG],[d.X_SUM,fG],[d.SHORTSIGHTED_X_SUM,gG],[d.BROKEN_X_SUM,hG],[d.SHIFTED_X_SUM,vG],[d.SKYSCRAPERS,pG],[d.X_SUM_SKYSCRAPERS,mG],[d.X_INDEX,_G],[d.BATTLEFIELD,CG],[d.SANDWICH_SUM_XOR_X_SUM,dG],[d.RISING_STREAK,EG],[d.OUTSIDE_CONSECUTIVE_SUM,IG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,AG],[d.LOOPWICHES,bG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,wG],[d.LITTLE_KILLER_SUM,OG],[d.LITTLE_KILLER_PRODUCT,yG],[d.X_OMIT_LITTLE_KILLER_SUM,LG],[d.NEGATORS_LITTLE_KILLER_SUM,SG]]);function NG(t,e,n,r){let o="";const s=xG.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);o+=u}return o}function TG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let s=t.getCellsInDirection(r.r,r.c,o);s=[r,...s];const a=$e(s,re.SASHIGANE),c=$e(s,re.SASHIGANE_BENDS),u=Oe(r),_=xt(r,re.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function DG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,s=t.getCellsInDirection(r.r,r.c,o),c="["+je(s).join(",")+"]",u=$e(s,re.CELL_CENTER_LOOP),_=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const RG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,TG],[d.THERMO_SIGHTLINE_LOOP_ARROW,DG]]);function kG(t,e,n,r){return _l(e,n,r,RG)}function Zv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const s=Oe(o);return`constraint ${n}(${s});
`}function GG(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`cell_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Qv(t,e,n,r=""){const o=e.cell,s=t.getCell(o.r,o.c);if(!s)return"";const a=Oe(s);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function MG(t,e,n,r){return Zv(e,r,"odd_p")}function $G(t,e,n,r){return Zv(e,r,"even_p")}function UG(t,e,n,r){return Qv(e,r,"low_digit_p","5")}function FG(t,e,n,r){return Qv(e,r,"high_digit_p","5")}function Jv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const s=Oe(o),a=t.getNeighboorCells(o),c=$e(a,re.BOARD);return`constraint ${n}(${c}) == ${s};
`}function HG(t,e,n,r){return Jv(e,r,"odd_count")}function PG(t,e,n,r){return Jv(e,r,"even_count")}function BG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s),u=$e(c,re.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function WG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getOrthogonallyAdjacentCells(s);return`constraint sum_p(${$e(c,re.BOARD)}, ${a});
`}function zG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getDiagonallyAdjacentCells(s);return`constraint sum_p(${$e(c,re.BOARD)}, ${a});
`}function YG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=e.getRow(s.r),c=$e(a,re.BOARD),u=s.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function jG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=e.getCol(s.c),c=$e(a,re.BOARD),u=s.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function VG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=s.r+1,u=s.c+1;if(s.region!==null){const v=s.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${v};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function KG(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const a=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),_=e.getCell(o.r,o.c+1);if(!a||!c||!u||!_)return"";const v=Oe(a),g=Oe(c),h=Oe(u),m=Oe(_);return`constraint groups_opposite_parity_p([${v},${g}], [${h},${m}]);
`}function Ud(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const s=Oe(o),[a,c,u,_]=Sd(t,o);return`constraint ${n}(${s}, ${a}, ${c}, ${u}, ${_});
`}function XG(t,e,n,r){return Ud(e,r,"is_watchtower_p")}function qG(t,e,n,r){return Ud(e,r,"is_not_watchtower_p")}function ZG(t,e,n,r){return Ud(e,r,"farsight_p")}function QG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),[c,u,_,v]=Sd(e,s);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${v}, 9);
`}function JG(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getRow(s.r),u="["+je(c).join(",")+"]",_=e.getCol(s.c),v="["+je(_).join(",")+"]",[g,h]=[s.r+1,s.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${h}, ${a});
`}function ep(t,e,n){const r=Object.values(e);let o="";const s=r.map(c=>c.cell),a=new Set(s.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=Oe(_),g=t.getOrthogonallyAdjacentCells(_).filter(C=>!a.has(C)),h=$e(g,re.BOARD),m=`constraint ${n}(${h}, ${v});
`;o+=m}return o}function eM(t,e,n){return ep(e,n,"maximum_p")}function tM(t,e,n){return ep(e,n,"minimum_p")}function nM(t,e,n){const r=Object.values(n);let o="";const s=r.map(_=>_.cell),a=new Set(s.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...a]).join(`,
	`)}`;o+=`array[int] of var int: counting_circles = [
	${u}
];
`;for(const _ of r){const v=_.cell,g=e.getCell(v.r,v.c);if(!g)continue;const h=Oe(g),m=`constraint count(counting_circles, ${h}) == ${h};
`;o+=m}return o+=`
`,o}function rM(t,e,n){const r=Object.values(n);let o="";const s=r.map(g=>g.cell),a=new Set(s.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${je([...a]).join(`,
	`)}`,v=`${_o([...a],re.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${re.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${re.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const h=xt(g,re.COUNTING_CIRCLES_COLORS);o+=`constraint ${h} == 0;
`}for(const g of r){const h=g.cell,m=e.getCell(h.r,h.c);if(!m)continue;const C=Oe(m),I=xt(m,re.COUNTING_CIRCLES_COLORS),b=g.value;b?o+=`constraint ${I} == ${b};
`:o+=`constraint ${I} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${I}) == ${C};
`}return o+=`
`,o}function oM(t,e,n){const r=Object.values(n);let o="";const s=r.map(_=>_.cell),a=new Set(s.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...a]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${u}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function iM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s),u=[s,...c];return`constraint yin_yang_minesweeper_p(${$e(u,re.YIN_YANG)}, ${a});
`}function Fd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const s=Oe(o),a=Ad(t,o),c=[];for(const v of a){const g=$e(v,re.YIN_YANG);c.push(g)}const u=xt(o,re.YIN_YANG);return`constraint ${n}(${s}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function sM(t,e,n,r){return Fd(e,r,"yin_yang_seen_unshaded_p")}function aM(t,e,n,r){return Fd(e,r,"yin_yang_seen_shaded_p")}function lM(t,e,n,r){return Fd(e,r,"yin_yang_seen_same_shade_p")}function cM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=xt(s,re.YIN_YANG),u=e.getOrthogonallyAdjacentCells(s),_=$e(u,re.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function uM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s);return`constraint count(${$e(c,re.YIN_YANG)}, 1) == ${a};
`}function dM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=`two_contiguous_regions[${s.r},${s.c}]`,u=e.getRow(s.r),_=e.getCol(s.c),v="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",g="["+_.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${a}, ${c});
`}function _M(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getRow(s.r),u=e.getCol(s.c),_="["+c.map(h=>`unknown_regions[${h.r},${h.c}]`).join(", ")+"]",v="["+u.map(h=>`unknown_regions[${h.r},${h.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${a});
`}function fM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=`nurimisaki[${s.r},${s.c}]`;let v=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(s).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const g=Ad(e,s),h=[];for(const m of g){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";h.push(C)}return v+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${a}, ${c}, ${h[0]}, ${h[1]}, ${h[2]}, ${h[3]});
`,v}function gM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=xt(s,re.SASHIGANE),u=xt(s,re.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function hM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=xt(s,re.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function vM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);return s?`constraint ${xt(s,re.CELL_CENTER_LOOP)} == 1;
`:""}function pM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);return s?`constraint ${xt(s,re.CELL_CENTER_LOOP)} == 0;
`:""}function mM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s),u=[s,...c];return`constraint sum(${$e(u,re.CELL_CENTER_LOOP)}) == ${a};
`}function CM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=Oe(s),c=xt(s,re.CAVE_SHADING),u=Ad(e,s),_=[];for(const g of u){const h=$e(g,re.CAVE_SHADING);_.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function EM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Oe(s),v=xt(s,re.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(s),h=$e(g,re.BOARD),m=$e(g,re.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(s),I=$e(C,re.BOARD),b=$e(C,re.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[Be.NE,Be.NW,Be.SE,Be.SW],L=[];for(const $ of w)e.getCellsInDirection(s.r,s.c,$).forEach(W=>L.push(W));const R=$e(L,re.BOARD),k=$e(L,re.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${R}, ${k}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function IM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);if(!s)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Oe(s),v=xt(s,re.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(s),h=$e(g,re.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${v}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],C=[];for(const I of m){const b=e.getCellsInDirection(s.r,s.c,I);if(!b.length)continue;const w=$e(b,re.BOARD),L=$e(b,re.UNKNOWN_REGIONS),R=`in_arrow_${n}_${I}`,k=`in_arrow_${n}_${I}[1]`;C.push(k),u+=`array[index_set(${w})] of var bool: ${R};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${L}, ${R}, ${_}, ${v});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}function bM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);return s?`constraint dpath_source == ${s.r*e.nCols+s.c+1};
`:""}function wM(t,e,n,r){const o=r.cell,s=e.getCell(o.r,o.c);return s?`constraint dpath_target == ${s.r*e.nCols+s.c+1};
`:""}function OM(t,e,n){let r="",o=0;for(const[s,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const v=GG(t,_,s);if(!v)continue;const g=v[1];r+=v[0];const h=xt(u,re.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${re.BOARD}, ${re.NURIKABE_REGIONS}, ${h}, ${g});
`,o+=1}return r+=`constraint count_unique_values(array1d(${re.NURIKABE_REGIONS})) == ${o+1};
`,r}function yM(t,e,n){let r="";const o=Nd(Object.values(n));for(const u of o.values())if(!(u.length<=1))for(const[_,v]of u.flatMap((g,h)=>u.slice(h+1).map(m=>[g,m]))){const g=_.cell,h=v.cell,m=e.getCell(g.r,g.c),C=e.getCell(h.r,h.c);if(!m||!C)continue;const I=xt(m,re.BOARD),b=xt(C,re.BOARD);r+=`constraint ${I} == ${b};
`}const a=[...o.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=$e(a,re.BOARD);return r+=`constraint alldifferent(${c});
`,r}const LM=new Map([[d.ODD,MG],[d.EVEN,$G],[d.LOW_DIGIT,UG],[d.HIGH_DIGIT,FG],[d.ODD_MINESWEEPER,HG],[d.EVEN_MINESWEEPER,PG],[d.DIAGONALLY_ADJACENT_SUM,zG],[d.ORTHOGONAL_SUM,WG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,BG],[d.FRIENDLY_CELL,VG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,KG],[d.WATCHTOWER,XG],[d.NOT_WATCHTOWER,qG],[d.FARSIGHT,ZG],[d.RADAR,QG],[d.INDEXING_COLUMN,YG],[d.INDEXING_ROW,jG],[d.SANDWICH_ROW_COL_COUNT,JG],[d.YIN_YANG_MINESWEEPER,iM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,sM],[d.YIN_YANG_SEEN_SHADED_CELLS,aM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,lM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,cM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,uM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,dM],[d.SEEN_REGION_BORDERS_COUNT,_M],[d.NURIMISAKI_UNSHADED_ENDPOINTS,fM],[d.SASHIGANE_BEND_REGION_COUNT,gM],[d.SASHIGANE_REGION_SUM,hM],[d.CELL_ON_THE_LOOP,vM],[d.CELL_NOT_ON_THE_LOOP,pM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,mM],[d.CAVE_CLUE,CM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,EM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,IM],[d.DIRECTED_PATH_START,bM],[d.DIRECTED_PATH_END,wM]]),AM=new Map([[d.MAXIMUM,eM],[d.MINIMUM,tM],[d.COUNTING_CIRCLES,nM],[d.COLORED_COUNTING_CIRCLES,rM],[d.UNIQUE_CELLS,oM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,OM],[d.TELEPORT,yM]]);function SM(t,e,n,r){let o="";const s=LM.get(n),a=AM.get(n);if(s)for(const[c,u]of Object.entries(r)){const _=s(t,e,c,u);o+=_}else if(a){const c=a(t,e,r);o+=c}return o}function xM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=xt(r,re.UNKNOWN_REGIONS),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v),h=$e(g,re.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(v=>`count_different(${v}, ${s})`).join(" + ")} == ${o};
`}function NM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=xt(r,re.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g="["+je(_).join(",")+"]",h=$e(_,re.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${s}, ${g}, ${h}) == ${o};
`}return c}function TM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),_=$e(u,re.YIN_YANG);a+=`constraint count(${_}, 1) == ${o};
`}return a}function DM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=xt(r,re.YIN_YANG),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),g=$e(v,re.YIN_YANG),h=$e(v,re.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${s}, ${g}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function RM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=e.directions,a=[];for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${$e(_,re.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${o};
`}function kM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=e.directions,a=[];for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${$e(_,re.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${o};
`:""}function GM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=xt(r,re.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),m=`count(${"["+_o(v,re.GALAXY_REGIONS).join(",")+"]"}, ${s})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function MM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";a+=`constraint hot_arrows_p(${v}, ${o});
`}return a}function $M(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";a+=`constraint cold_arrows_p(${v}, ${o});
`}return a}const UM=new Map([[d.HOT_ARROWS,MM],[d.COLD_ARROWS,$M],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,xM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,NM],[d.LOOP_CELL_COUNT_ARROWS,kM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,DM],[d.YIN_YANG_COUNT_SHADED_CELLS,TM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,GM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,RM]]);function FM(t,e,n,r){return _l(e,n,r,UM)}function HM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function PM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function BM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const WM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,HM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,PM],[d.FORBIDDEN_KNIGHT_SUM,BM]]);function zM(t,e,n,r){return _l(e,n,r,WM)}const YM=[A3,SM,kG,FM,e5,U3,cG,r3,C3,NG,N3,zM];function jM(t,e){let n="";const r=t.localConstraints,o=t.grid;for(const[s,a]of r.entries())for(const c of YM){let u=c(e,o,s,a);u=dt(u,`${s}`),n+=u}return n}function VM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,s+=`constraint yin_yang_p(yin_yang);
`,s}function KM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,s+=`constraint nurimisaki_p(nurimisaki);
`,s}function XM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,s+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,s+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,s}function qM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`
% Two Contiguous Regions
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,s+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,s}function ZM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const s=Math.max(r.nCols,r.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${s});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${s});
`,a}function QM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,s+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,s+=`constraint sashigane_adjacency_p(sashigane);
`,s+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,s+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,s+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,s}function JM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, true);
`,s}function e8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, false);
`,s}function t8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,s+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,s+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,s}function n8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, false);
`,s+=`constraint modular_loop_p(board, cell_center_loop);
`,s}function us(t,e,n,r){const o=t.grid;let s="";s+=`% Exactly ${e} per row 
`;const a=o.nRows;for(let v=0;v<a;v++){const g=o.getRow(v),h=r(g);s+=`constraint count_eq(${h}, ${n}, ${e});
`}s+=`
% Exactly ${e} per column 
`;const c=o.nCols;for(let v=0;v<c;v++){const g=o.getCol(v),h=r(g);s+=`constraint count_eq(${h}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){s+=`
% Exactly ${e} per region 
`;const v=o.getUsedRegions();for(const g of v){const h=o.getRegion(g),m=r(h);s+=`constraint count_eq(${m}, ${n}, ${e});
`}}return s}function r8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,s+=us(n,1,!0,a=>$e(a,re.DOUBLERS)),s+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,s}function o8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,a+=us(n,1,!0,c=>$e(c,re.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${s}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${s});
`,a}function i8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,a+=`constraint fillomino_p(board, ${s});
`,a}function s8(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.CAVE_SHADING,a=re.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${s}, ${a});
`,c}function a8(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.CAVE_SHADING,a=re.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${s}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${re.BOARD}, ${c});
`,u}function l8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.GALAXY_REGIONS,a=re.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${s};
`,u+=`constraint galaxy_restrict_numbering_p(${s});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${s}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${s}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${s});
`,u}function c8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,s+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,s}function u8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint goldilocks_zone_p(goldilocks_regions);
`,s+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,s}function d8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=nh.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of nh.entries()){const _=u.length,v=u[0].length,g=`pentomino_${c}`;a+=`array[1..${_}, 1..${v}] of 0..1: ${g} = ${xd(u)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return a}function _8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.LITS_SHADING,a=re.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${s});
`,c+=`constraint lits_shading_ids_p(${s}, ${a});
`,c+=`constraint lits_region_and_ids_p(${re.BOARD_REGIONS}, ${a});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const v=r.getRegion(_),h=`constraint count_eq(${$e(v,re.LITS_SHADING)}, 1, 4);
`;c+=h}return c}function f8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.LITS_SHADING,a=re.LITS_REGIONS,c=re.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${s});
`,u+=`constraint lits_shading_ids_p(${s}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${s});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const g=r.getRegion(v),m=`constraint count_eq(${$e(g,re.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function g8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.LITS_SHADING,a=re.STAR_BATTLE,c=re.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=us(n,2,1,_=>$e(_,re.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=us(n,1,1,_=>$e(_,re.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=us(n,1,2,_=>$e(_,re.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${s}, ${c});
`,u}function Ut(t,e,n){return t*n+e+1}function h8(t){const e=t.grid;function n(c,u){const _=[],v=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=Ut(u.r+g,u.c,e.nCols);_.push([v,h]),_.push([h,v])}return _}function r(c,u){const _=[],v=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=Ut(u.r,u.c+g,e.nCols);_.push([v,h]),_.push([h,v])}return _}const o=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=ad(_).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0);let h=Ut(g[0].r,g[0].c,e.nCols),m=Ut(g[3].r,g[3].c,e.nCols);o.push([h,m]),o.push([m,h]),h=Ut(g[1].r,g[1].c,e.nCols),m=Ut(g[2].r,g[2].c,e.nCols),o.push([h,m]),o.push([m,h])}for(let _=0;_<u.length-1;_++){const v=gO(Yh(u[_],u[_+1]),.5),h=cd(v).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,C]=h;if(m.r===C.r){let I=n(m,C);o.push(...I),I=n(C,m),o.push(...I)}else if(m.c===C.c){let I=r(m,C);o.push(...I),I=r(C,m),o.push(...I)}}}return o}function v8(t){const e=t.grid,n=[],o=t.localConstraints.get(d.ONE_WAY_DOOR);if(o)for(const s of Object.values(o)){const c=s.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,v=s.value,g=Ut(u.r,u.c,e.nCols),h=Ut(_.r,_.c,e.nCols);v==="<"?n.push([g,h]):v===">"&&n.push([h,g])}return n}function p8(t){const e=[];for(const n of t.getAllCells()){const r=Ut(n.r,n.c,t.nCols),o=t.getNeighboorCells(n);for(const s of o){const a=Ut(s.r,s.c,t.nCols);e.push([r,a])}}return e}function m8(t){const e=t.grid,n=[],r=[],s=t.localConstraints.get(d.TELEPORT),a=s?Object.values(s):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(s){const _=Nd(a);let v=1;for(const g of _.values())if(!(g.length<=1)){for(const[h,m]of g.flatMap((C,I)=>g.slice(I+1).map(b=>[C,b]))){const C=Ut(h.cell.r,h.cell.c,e.nCols),I=Ut(m.cell.r,m.cell.c,e.nCols);n.push([C,I]),n.push([I,C]),u[h.cell.r][h.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const h of g){const m=Ut(h.cell.r,h.cell.c,e.nCols);r.push(m)}v++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function C8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="",a=p8(r);const c=h8(n),u=v8(n);c.push(...u);const _=n.localConstraints;a=a.filter(w=>!c.some(L=>w[0]===L[0]&&w[1]===L[1]));const v=m8(n);if(v.tp_edges.length){a.push(...v.tp_edges);const w=xd(v.tp_arr),L=v.tp_count;s+=`
% teleports grid
`,s+=`array[ROW_IDXS, COL_IDXS] of 0..${L}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,h=a.length,m="["+a.map(w=>w[0]).join(",")+"]",C="["+a.map(w=>w[1]).join(",")+"]";s+=`array[int] of int: dpath_from = ${m};
`,s+=`array[int] of int: dpath_to = ${C};
`,s+=`var 1..${g}: dpath_source;
`,s+=`var 1..${g}: dpath_target;
`,s+=`array[1..${g}] of var bool: dpath_ns;
`,s+=`array[1..${h}] of var bool: dpath_es;
`,s+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,s+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let L=0;L<r.nCols-1;L++){const R=r.getCell(w,L),k=r.getCell(w,L+1),$=r.getCell(w+1,L),P=r.getCell(w+1,L+1);if(!R||!k||!$||!P)continue;const W=Ut(R.r,R.c,r.nCols),X=Ut(k.r,k.c,r.nCols),J=Ut($.r,$.c,r.nCols),ce=Ut(P.r,P.c,r.nCols),oe=[[W,ce],[ce,W],[X,J],[J,X]].map(pe=>a.findIndex(me=>pe[0]===me[0]&&pe[1]===me[1])).filter(pe=>pe!==-1);if(oe.length){const pe=oe.map(me=>`dpath_es[${me+1}]`).join(",");s+=`constraint sum([${pe}]) <= 1;
`}}const I=_.get(d.TELEPORT),b=I?Object.values(I):[];if(v.tp_count>0){s+=`
% At most 1 edge per teleporter
`;for(const w of b){const L=w.cell,R=r.getCell(L.r,L.c);if(!R)continue;const k=r.getNeighboorCells(R),$=Ut(R.r,R.c,r.nCols),P=[];for(const X of k){if(b.some(Q=>Q.cell.r===X.r&&Q.cell.c==X.c&&Q.value===w.value))continue;const ce=Ut(X.r,X.c,r.nCols);P.push([$,ce]),P.push([ce,$])}const W=P.map(X=>a.findIndex(J=>X[0]===J[0]&&X[1]===J[1])).filter(X=>X!==-1);if(W.length){const X=W.map(J=>`dpath_es[${J+1}]`).join(",");s+=`constraint sum([${X}]) <= 1;
`}}}return s}function E8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,a+=`constraint chaos_construction_suguru_p(board, ${s});
`,a}const I8=new Map([[d.FILLOMINO,i8],[d.CAVE,s8],[d.GALAXIES,l8],[d.YIN_YANG,VM],[d.NURIMISAKI,KM],[d.NURIKABE,XM],[d.TWO_CONTIGUOUS_REGIONS,qM],[d.UNKNOWN_REGIONS,ZM],[d.SASHIGANE,QM],[d.CELL_CENTER_LOOP_NO_TOUCHING,JM],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,e8],[d.NOT_LOOP_SIZED_REGIONS,t8],[d.MODULAR_LOOP,n8],[d.DOUBLERS,r8],[d.NEGATORS,o8],[d.GOLDILOCKS_ZONE,u8],[d.NEXUS,c8],[d.PENTOMINO_TILLING,d8],[d.LITS,_8],[d.CAVE_LITS,f8],[d.LITS_BLACK_WHITE_STAR_BATTLE,g8],[d.RENBAN_CAVES,a8],[d.MAZE_DIRECTED_PATH,C8],[d.CHAOS_CONSTRUCTION_SUGURU,E8]]);function b8(t){let e="";const r=t.puzzle.globalConstraints;for(const[o,s]of r.entries()){if(!s)continue;const a=I8.get(o);if(!a)continue;let c=a(t,o);c=dt(c,`${o}`),e+=c}return e}function w8(){return`
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
	connected_region(grid, 0)
    /\\ shading_2x2_allowed_p(grid, 1..3);

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
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    array[rows, cols] of var int: size = 
        array2d(rows, cols, [grid[r,c] | r in rows, c in cols]);
    set of int: time = 1..g_size;
    array[rows, cols] of var time: when;
} in (
    % 1. Each cell's region size matches its value
    forall(r in rows, c in cols) (
        grid[r, c] = size[r, c]
    )

    % 2. Symmetry breaking: canonical numbering of regions (reduces search space, tested)
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
    )

    % 3. regions of size 1
    /\\ forall(r in rows, c in cols)(
        grid[r,c] == 1 -> regions[r, c] = (r * n_cols + c + 1)
    )

    % 4. small optimization to reduce search space
    /\\ forall(r in rows, c in cols) (
        forall(r2 in rows, c2 in cols) (
            abs(r2-r) + abs(c2-c) >= grid[r,c] -> regions[r, c] != (r2) * n_cols + c2 + 1
        )
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
    /\\ forall(r1 in rows, c1 in cols, r2 in rows, c2 in cols where orth_adjacent_2d(r1, c1, r2, c2)) (
        (grid[r1, c1] != grid[r2, c2] -> regions[r1, c1] != regions[r2, c2]) /\\
        (grid[r1, c1] == grid[r2, c2] <-> regions[r1, c1] == regions[r2, c2])
    )

    % 8. Each region's size equals the count of its cells
    /\\ forall(r in rows, c in cols) (
        grid[r, c] = sum(r2 in rows, c2 in cols)(bool2int(regions[r2, c2] = regions[r, c]))
    )
    
    % floodfill - necessary to make sure each region is connected
    % root fix
    /\\ forall(r in rows, c in cols)(
        when[r,c] == 1 <-> regions[r, c] = (r * n_cols + c + 1)
    )
    %% Optimisation: the "when" label is actually the 'distance' of a cell in a
    %% region from the region "root".  This distance cannot be larger than the size
    %% of the region.
    /\\ forall (r in rows, c in cols) (
        when[r, c] <= size[r, c]
    )

    /\\ forall (r in rows, c in cols) (
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/  
        ( when[r, c] > 1 /\\ 
            ( fillomino_joins(r, c, r - 1, c, grid, when, regions) \\/ 
                fillomino_joins(r, c, r + 1, c, grid, when, regions) \\/
                fillomino_joins(r, c, r, c - 1, grid, when, regions) \\/ 
                fillomino_joins(r, c, r, c + 1, grid, when, regions)
            )
        )
    )

    %% restricts the floodfilling growth,
    %% by minimizing the distance of each node in the branching tree (each region) to the root
    %% this removes solutions with the same regions, but with different floodfilling (when array)
    /\\ fillomino_restrict_floodfill_p(when, regions)
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
    % Symmetry breaking: canonical numbering of regions
    forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
    )

    /\\ same_before_p(regions, same_before)
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
        regions[r, c] != 0 -> when[r,c] >= 1
    )
    % floodfilling - Each cell is either the "root" of an area or is an extension of a
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
    % Each cell is either the "root" of a region or is an extension of a
    % neighbouring cell.
    /\\ forall (r in rows, c in cols) (
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/  
        ( when[r, c] > 1 /\\ 
            ( cave_joins(r, c, r - 1, c, when, regions) \\/ 
                cave_joins(r, c, r + 1, c, when, regions) \\/
                cave_joins(r, c, r, c - 1, when, regions) \\/ 
                cave_joins(r, c, r, c + 1, when, regions)
            )
        )
    )
    % restricts the floodfilling growth,
    % by minimizing the distance of each node in the branching tree (each region) to the root
    % this removes solution with the same regions, but with different floodfilling (when array)
    /\\ fillomino_restrict_floodfill_p(when, regions)
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

`}function O8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const s=`constraint ${Oe(r)} = ${r.value};
`;n+=s}return n.length&&(n=`
% Given Digits
`+n),n}function tp(t){const e=t.grid;let n=t.valid_digits;const r=new nk(t),[o,s]=[e.nRows,e.nCols],a=o*s;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(w8());let u=`1..${Math.max(o,s)}`;return!!t.globalConstraints.get(d.FILLOMINO)&&(u=`1..${a}`),t.globalConstraints.get(d.HEXED_SUDOKU)&&(n=[...St.range(1,16)]),n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${o-1};
`),r.add(`set of int: COL_IDXS = 0..${s-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),ok(r,e),r.add(O8(t)),r.add(qk(t)),r.add(Zk(t)),r.add(b8(r)),r.add(jM(t,r)),r.add(Jk(t)),r.add(`
solve satisfy;`),r}var y8=ne('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function L8(t,e){ae(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n);let o=U(e,"showModal",12,!1);function s(g,h,m){var C=document.createElement("a"),I=new Blob([g],{type:m});C.href=URL.createObjectURL(I),C.download=h,C.click(),URL.revokeObjectURL(C.href)}function a(){const g=it(Os);return tp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),h=th(g);navigator.clipboard.writeText(h)}function _(){const g=Eu(r()),h=a();s(h,`${g}.mzn`,"text/plain")}function v(){const g=Eu(r()),h=a(),m=th(h);s(m,`${g}.mzn`,"text/plain")}fe(),Hr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(g){o(g)},children:(g,h)=>{var m=y8(),C=K(m),I=F(C,2),b=F(I,2),w=F(b,2);Y(m),Me("click",C,c),Me("click",I,u),Me("click",b,_),Me("click",w,v),N(g,m)},$$slots:{default:!0},$$legacy:!0}),le()}function Ns(t,e,n){const r=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(_),o.push([g]))}}const s=rl(r,o);_i(s)}function A8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],s=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const C=[];o.push(C),a(h,m,t[h][m])}function a(h,m,C){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==C||(r[h][m]=!0,o[o.length-1].push([h,m]),a(h+1,m,C),a(h-1,m,C),a(h,m+1,C),a(h,m-1,C))}const c=Array(o.length).fill(0).map(()=>new Set);function u(h,m){for(const[C,I]of h)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const L=C+b,R=I+w;if(m.some(([k,$])=>k===L&&$===R))return!0}return!1}for(let h=0;h<o.length;h++)for(let m=h+1;m<o.length;m++)u(o[h],o[m])&&(c[h].add(m),c[m].add(h));const _=[1,4,7,9],v=new Array(o.length).fill(0);function g(h,m){for(const C of c[h])if(v[C]===m)return!1;return!0}for(let h=0;h<o.length;h++)for(const m of _)if(g(h,m)){v[h]=m;break}for(let h=0;h<o.length;h++)for(const[m,C]of o[h])s[m][C]=v[h];return s}function S8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const s=[],a=[];for(let u=0;u<o.length;u++){const _=o[u];for(let v=0;v<_.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const h=_[v];s.push(g),a.push(h)}}const c=kv(s,a);_i(c)}function x8(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const s=t[o];if(s!==void 0){Ns(s,e,r);return}}}function N8(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const s=t[o];if(s!==void 0){Ns(s,e,r);return}}}function T8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const v=c[u];o.push([v+1])}}const s=rl(r,o);_i(s)}function D8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Ns(n,e,new Map([[0,4],[1,7],[2,9]]))}function R8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Ns(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function k8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Ns(n,e,new Map([[1,7],[2,4],[3,9]]))}function G8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions","suguru_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[s,a]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<o.length;v++){const g=o[v];for(let h=0;h<g.length-1;h++){const m=e.getCell(v,h),C=e.getCell(v,h+1);if(!m||!C)continue;const I=g[h],b=g[h+1];if(I===b)continue;const w={colorId:c,p1:{r:v,c:h+1},p2:{r:v+1,c:h+1}};u.push(w)}}for(let v=0;v<a;v++)for(let g=0;g<s-1;g++){const h=e.getCell(g,v),m=e.getCell(g+1,v);if(!h||!m)continue;const C=o[g][v],I=o[g+1][v];if(C===I)continue;const b={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(b)}const _=gs(u);fr(_);return}}function M8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const s=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const h=o[v.r][v.c],m=o[g.r][g.c];if(!(h===1&&m===1))continue;const C={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};s.push(C)}}}const a=gs(s);fr(a);return}}function $8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const s=A8(o);if(!s)return;const a=[],c=[];for(let _=0;_<s.length;_++){const v=s[_];for(let g=0;g<v.length;g++){const h=e.getCell(_,g);if(!h)continue;a.push(h);const m=v[g];c.push([m])}}const u=rl(a,c);_i(u);return}}function U8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const o=t[r];if(o===void 0)continue;const s=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const g=o[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};s.push(m)}}const a=hL(s);fr(a);return}}function F8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,o=e.puzzle.grid,s=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,g]=_,[h,m]=[Math.floor((v-1)/o.nCols),(v-1)%o.nCols],[C,I]=[Math.floor((g-1)/o.nCols),(g-1)%o.nCols];if(!vi({r:h,c:m},{r:C,c:I}))continue;const L={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:C+.5,c:I+.5}};s.push(L)}const a=gs(s);fr(a)}function H8(t,e){const n=e.puzzle,r=n.grid;fr(hd()),S8(t,n),T8(t,r),G8(t,r),D8(t,r),R8(t,r),M8(t,r),N8(t,r),$8(t,r),x8(t,r),U8(t,r),k8(t,r),F8(t,e)}function P8(){const{subscribe:t,set:e}=Ht(0),n=100;let r=Date.now(),o,s=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-s,o=setInterval(()=>{s=Date.now()-r,e(s)},n))},stop:()=>{a&&(a=!1,clearInterval(o),s=Date.now()-r)},reset:()=>{a=!1,clearInterval(o),s=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:s})}}var B8=ne('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function W8(t,e){ae(e,!1);const n=rt(),r=()=>ve(Os,"$puzzleStore",n),o=()=>ve(gn,"$gridStore",n),s=()=>ve(w,"$timer",n),a=D(),c=D(),u=D(),_=D();let v=D(!1),g=D(!1),h=D(null),m=D(100),C=D("100"),I=D(null),b=D("IDLE");const w=P8();function L(X){return X===null?"":String(X)}function R(X){const J=Math.floor(X/6e4),ce=Math.floor(X%6e4/1e3),Q=Math.floor(X%1e3/100),oe=ce.toString().padStart(2,"0");return`${J}:${oe}.${Q}`}function k(){x(g,!0)}function $(X){const J=parseInt(X);typeof J=="number"&&J>=1&&x(m,J)}async function P(){x(I,0),x(b,"SOLVING...");const X=new $u;xv(),console.log(p(a));const J=tp(p(a));X.addFile("test.mzn",J.model_str),w.reset(),w.start(),x(h,X.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(h).on("solution",ce=>{const Q=ce.output.json;ce.type==="solution"&&p(I)!==null&&x(I,p(I)+1),console.log(Q),H8(Q,J)}),p(h).on("error",ce=>{x(u,"Solve"),x(b,"ERROR"),w.stop(),p(h)&&p(h).cancel()}),p(h).on("warning",ce=>{x(b,"WARNING"),console.log(ce.message)}),p(h).then(ce=>{x(b,ce.status),x(u,"Solve"),w.stop()})}function W(){p(h)===null||!p(h).isRunning()?P():p(h)!==null&&p(h).isRunning()&&(x(b,"IDLE"),x(u,"Solve"),w.stop(),p(h).cancel())}G(()=>r(),()=>{x(a,r())}),G(()=>o(),()=>{x(c,o())}),G(()=>{},()=>{x(u,"Solve")}),G(()=>s(),()=>{x(_,s())}),G(()=>p(h),()=>{p(h)&&(p(h)!==null&&p(h).isRunning()?x(u,"Stop"):x(u,"Solve"))}),Ie(),fe(),cl(t,{get isOpen(){return p(v)},set isOpen(X){x(v,X)},$$slots:{"panel-header":(X,J)=>{ll(X,{slot:"panel-header",title:"Solver",get isOpen(){return p(v)},set isOpen(ce){x(v,ce)},$$legacy:!0})},"panel-content":(X,J)=>{var ce=B8(),Q=ue(ce),oe=F(Q,2);L8(oe,{get showModal(){return p(g)},set showModal(Qt){x(g,Qt)},$$legacy:!0});var pe=F(oe,2),me=K(pe,!0);Y(pe);var Ee=F(pe,2),De=K(Ee,!0);Y(Ee);var st=F(Ee,2),Se=K(st);Kt(Se),S(Se,"min",1),S(Se,"max",200),S(Se,"step",1),Y(st);var we=F(st,2),vt=K(we,!0);ee(()=>et(vt,`Solution Count: ${L(p(I))}`)),Y(we);var ct=F(we,2),Ln=K(ct,!0);ee(()=>et(Ln,`Elapsed Time: ${R(p(_))}`)),Y(ct);var Un=F(ct,2),Pr=K(Un,!0);Y(Un),ee(()=>{et(me,p(u)),et(De,`Max. Solutions: ${p(m)}`),et(Pr,`Status: ${p(b)}`)}),Me("click",Q,k),Me("click",pe,W),Kn(Se,()=>p(C),Qt=>x(C,Qt)),Me("input",Se,()=>$(p(C))),N(X,ce)}},$$legacy:!0}),le()}var z8=ne('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function Y8(t){var e=z8(),n=K(e),r=K(n);VR(r);var o=F(r,2);W8(o,{});var s=F(o,2);xD(s,{elementHandlers:Gt});var a=F(s,2);kD(a,{elementHandlers:Gt});var c=F(a,2);ID(c,{elementHandlers:Gt});var u=F(c,2);oR(u,{elementHandlers:Gt});var _=F(u,2);XR(_,{}),Y(n),Y(e),N(t,e)}const np=Go([di,gn,qt],([t,e,n])=>{const r=ro(n,Gt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var j8=de('<path class="cursor svelte-zsq70u"></path>');function V8(t,e){ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n),o=()=>ve(To,"$selectionStore",n),s=D(),a=D(),c=.25;function u(v){if(!v)return"";const[g,h]=[v.c,v.r];return`M${g},${h}L${g+c},${h}L${g},${h+c}Z`}G(()=>r(),()=>{x(s,sd(r()))}),G(()=>o(),()=>{x(a,u(o().lastCell))}),Ie(),fe();var _=j8();ee(()=>{S(_,"d",p(a)),S(_,"visibility",p(s)?"visible":"hidden")}),N(t,_),le()}var K8=de('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function X8(t,e){ae(e,!1);let n=U(e,"gridShape",8);fe();var r=K8(),o=K(r);S(o,"x",0),S(o,"y",0),Y(r),ee(()=>{S(o,"width",n().nCols),S(o,"height",n().nRows)}),N(t,r),le()}var q8=de('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),Z8=de('<g class="grid-lines"></g>');function Q8(t,e){ae(e,!1);const n=rt(),r=()=>ve(gn,"$gridStore",n),o=D();G(()=>r(),()=>{x(o,r().getAllCells())}),Ie(),fe();var s=Z8();lt(s,5,()=>p(o),At,(a,c)=>{var u=q8();S(u,"width",1),S(u,"height",1),ee(()=>{S(u,"x",p(c).c),S(u,"y",p(c).r)}),N(a,u)}),Y(s),N(t,s),le()}function J8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function e$(t){const e=new Map;function n(r,o){const s=e.get(o);if(s!=null&&s.has(r)){s.delete(r),s.size<=0&&e.delete(o);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(o)}for(const r of t){const o=J8(r),s=o.length;for(let a=0;a<s;a++){const c=o[a%s],u=o[(a+1)%s],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function t$(t,e=0,n=!1){const r=[],o=e$(t);if(o.size<=0)return r;const s=new Set;for(;o.size>0;){const a=Array.from(o.entries()).find(C=>C[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),h=v;const m=[];do{const C=o.get(h);if(C===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Ge(_.c,_.r),b=new Ge(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,L=null,R=null;for(const k of C){const $=JSON.parse(k),P=new Ge($.c,$.r),W=b.subtract(I),X=P.subtract(b),J=W.perpDotProduct(X);w<J!=n&&(w=J,R=$,L=k)}if(n&&C.size>1&&s.add(h),R===null||L===null)throw new Error("Corner with no adjacencies found");if(C.delete(L),C.size<=0&&o.delete(h),w!==0){const k=e*(g.c-_.c),$=e*(R.c-g.c),P=e*(_.r-g.r),W=e*(g.r-R.r),X=W+w*$,J=k+w*P,ce=new Ge(g.c+X,g.r+J),Q=4;s.has(h)?(m.push(new Ge(ce.x-Q*k,ce.y-Q*$)),m.push(new Ge(ce.x-Q*P,ce.y-Q*W))):m.push(ce)}_=g,g=R,h=L}while(h!==v);r.push(m)}return r}function gi(t,e=0,n=!1){return t$(t,e,n).map(s=>Ti(s,!0)).join("")}const n$=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5)];function r$(t,e,n=n$){if(e===1)return n;const r=[],o=n.length,s=0,a=360/e,c=t*a+s,u=(t+1)*a+s,_=c/(360/o),v=u/(360/o),g=Math.floor(_)%o,h=Math.ceil(_)%o,m=n[g].lerp(n[h],_%1),C=Math.floor(v)%o,I=Math.ceil(v)%o,b=n[C].lerp(n[I],v%1);r.push(m);for(let L=Math.ceil(_);L<=Math.floor(v);L++)r.push(n[L%o]);r.push(b);const w=new Ge(0,0);return r.push(w),r}function rp(t,e,n=new Ge(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const s=Math.cos(Math.PI/e),a=r?t:t/s,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+o*2*Math.PI),v=a*Math.sin(u/e*2*Math.PI+o*2*Math.PI),g=n.add(new Ge(_,v));c.push(g)}return c}function Ti(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:s})=>`${o},${s}`).join("L")+n}function pl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){if(r&&t.length>1){const _=t[t.length-1];for(let g=0;g<t.length-1;g++)if(_.equals(t[g])){t.push(t[g+1]);break}const v=t[0];for(let g=1;g<t.length;g++)if(v.equals(t[g])){t.unshift(t[g-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let v=t[_-2].subtract(t[_-1]);v=v.normalise(),v=v.scale(n),t[_-1]=t[_-1].add(v)}}if(!o)return Ti(t);const s=t[0],a=["M",`${s.x},${s.y}`],c=t.length;for(let _=2;_<c;_++){const v=t[_-2],g=t[_-1],h=t[_];let m=v.subtract(g).normalise();m=m.scale(o),m=m.add(g);let C=h.subtract(g).normalise();C=C.scale(o),C=C.add(g),a.push(`L${m.x},${m.y} Q ${g.x},${g.y} ${C.x},${C.y}`)}const u=t[c-1];return a.push(`L${u.x},${u.y}`),a.join(" ")}function Lu(t,e={}){const n=Fa(t);return pl(n,e)}function Zn(t){return new Ge(t.c+.5,t.r+.5)}function Fa(t){return t.map(n=>Zn(n))}const o$=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5),new Ge(0,-.5),new Ge(0,.5),new Ge(-.5,0),new Ge(.5,0)];function i$(t,e){const n=o$[t];return n.subtract(n.scale(e))}function op(t,e){const n=[new Ge(t.c-e,t.r-e),new Ge(t.c+e,t.r+e)],r=[new Ge(t.c-e,t.r+e),new Ge(t.c+e,t.r-e)];return[n,r].map(s=>Ti(s,!1)).join("")}const s$=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function ml(t,e="none"){return s$.get(t)||e}function a$(t,e,n){let r=[];function s(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Ge(-.12,-.32),new Ge(0,-.4),new Ge(.12,-.32)]:a=[new Ge(-.12,-.4),new Ge(0,-.32),new Ge(.12,-.4)],r=[a,s(a,90),s(a,180),s(a,270)],r=r.map(c=>c.map(u=>{const _=new Ge(n+.5,e+.5);return u.add(_)})),r}var l$=de('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),c$=de('<g class="regions-border"></g>');function u$(t,e){ae(e,!1);const n=rt(),r=()=>ve(fn,"$cellsStore",n),o=()=>ve(gn,"$gridStore",n),s=D(),a=D();function c(_,v){return _.filter(m=>m.region===v).map(m=>({r:m.r,c:m.c}))}G(()=>r(),()=>{x(s,r())}),G(()=>o(),()=>{x(a,o().getUsedRegions())}),Ie(),fe();var u=c$();lt(u,5,()=>p(a),At,(_,v)=>{var g=l$();ee(()=>S(g,"d",gi(c(p(s),p(v)),0,!1))),ee(()=>S(g,"id",`region-${p(v)??""}`)),N(_,g)}),Y(u),N(t,u),le()}var d$=de('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function _$(t,e){ae(e,!1);const n=rt(),r=()=>ve(To,"$selectionStore",n),o=()=>ve(qt,"$toolStore",n),s=D(),a=D(),c=D(),u=D(),_=D(),v=D();let g=U(e,"boundingBox",8);const h=.06,m=.05,C="#080808",I="#b2b2b2";G(()=>Z(g()),()=>{x(s,g().x)}),G(()=>Z(g()),()=>{x(a,g().y)}),G(()=>r(),()=>{x(c,r().cells)}),G(()=>p(c),()=>{x(u,gi(p(c),0))}),G(()=>p(c),()=>{x(_,gi(p(c),h))}),G(()=>o(),()=>{x(v,sd(o()))}),Ie(),fe();var b=d$(),w=K(b),L=K(w);S(L,"stdDeviation",m),xo(),Y(w);var R=F(w),k=K(R);S(k,"fill",I);var $=F(k);S($,"fill",C),Y(R);var P=F(R);Y(b),ee(()=>{S(b,"visibility",p(v)?"visible":"hidden"),S(R,"x",p(s)),S(R,"y",p(a)),S(k,"x",p(s)),S(k,"y",p(a)),S($,"d",p(_)),S(P,"d",p(u))}),N(t,b),le()}var f$=de('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function g$(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"grid",8);G(()=>Z(o()),()=>{x(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),G(()=>p(n),()=>{x(r,gi(p(n),0))}),Ie(),fe();var s=f$(),a=K(s);Y(s),ee(()=>S(a,"d",p(r))),N(t,s),le()}function pr(t){return Go(ft,n=>{const r=[];for(const[o,s]of n.entries())t(o)&&r.push({toolId:o,element:s});return r})}const Hd=pr(cO),h$=Go(Hd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),v$=Go(Hd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),p$=pr(nd),m$=pr(Fh),C$=pr(Uh),E$=pr(rd),I$=pr(Hh),b$=pr(od),w$=pr(id),O$=pr(Ph),y$=pr(fs);var L$=de('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function Cl(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),o=U(e,"strokeWidth",8),s=U(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=L$();S(u,"viewBox","0 0 1 1"),S(u,"refX",a),S(u,"refY",a),S(u,"markerWidth",1),S(u,"markerHeight",1);var _=K(u);S(_,"d",c),Y(u),ee(()=>{S(u,"id",r()),S(_,"stroke-width",o()),S(_,"stroke",s())}),N(t,u)}var A$=de('<path class="arrow-line" fill="none"></path>'),S$=de('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function x$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D(),_=D(),v=D(),g=D();let h=U(e,"tool",8),m=U(e,"arrowId",8),C=U(e,"boundingBox",8);const I=hn(h().toolId,Gt)??AO,b="round",w="round",L=crypto.randomUUID(),R=`arrow-mask-${m()}-${L}`,k=`arrow-marker-${m()}-${L}`;G(()=>Z(h()),()=>{x(n,h().shape??I)}),G(()=>Z(C()),()=>{x(r,C().x)}),G(()=>Z(C()),()=>{x(o,C().y)}),G(()=>p(n),()=>{var oe;x(s,((oe=p(n))==null?void 0:oe.r)??.4)}),G(()=>p(n),()=>{var oe;x(a,((oe=p(n))==null?void 0:oe.stroke)??"gray")}),G(()=>p(n),()=>{var oe;x(c,((oe=p(n))==null?void 0:oe.strokeWidth)??.1)}),G(()=>p(n),()=>{var oe;x(u,((oe=p(n))==null?void 0:oe.strokeDasharray)??0)}),G(()=>p(n),()=>{var oe;x(_,((oe=p(n))==null?void 0:oe.opacity)??.8)}),G(()=>(p(s),p(n)),()=>{var oe,pe,me,Ee;x(v,{shortenHead:p(s),shortenTail:((pe=(oe=p(n))==null?void 0:oe.linePathOptions)==null?void 0:pe.shortenTail)??.2,bezierRounding:((Ee=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ee.bezierRounding)??.4})}),G(()=>Z(h()),()=>{x(g,Lu(h().cells))}),Ie(),fe();var $=S$(),P=K($);S(P,"id",R);var W=K(P),X=F(W);Y(P);var J=F(P);Cl(J,{id:k,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(a)}});var ce=F(J);S(ce,"mask",`url(#${R??""})`);var Q=F(ce);lt(Q,1,()=>h().lines,At,(oe,pe)=>{var me=Ae(),Ee=ue(me);{var De=st=>{var Se=A$();ee(()=>S(Se,"d",Lu(p(pe),p(v)))),S(Se,"stroke-linejoin",b),S(Se,"stroke-linecap",w),S(Se,"marker-end",`url(#${k??""})`),ee(()=>{S(Se,"stroke",p(a)),S(Se,"stroke-width",p(c)),S(Se,"opacity",p(_)),S(Se,"stroke-dasharray",p(u))}),N(st,Se)};ge(Ee,st=>{p(pe).length>1&&st(De)})}N(oe,me)}),Y($),ee(()=>{S(P,"x",p(r)),S(P,"y",p(o)),S(W,"x",p(r)),S(W,"y",p(o)),S(X,"stroke-width",2*p(s)-p(c)),S(X,"d",p(g)),S(ce,"d",p(g)),S(ce,"stroke-width",2*p(s)+p(c)),S(ce,"stroke",p(a))}),N(t,$),le()}var N$=de("<g></g>"),T$=de('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function D$(t,e){ae(e,!1);const n=rt(),r=()=>ve(b$,"$arrowToolsStore",n),o=D();let s=U(e,"boundingBox",8);G(()=>r(),()=>{x(o,r())}),Ie();var a=T$();lt(a,5,()=>p(o),At,(c,u)=>{let _=()=>p(u).toolId,v=()=>p(u).element;var g=N$();lt(g,5,()=>Object.entries(v()),h=>h[0],(h,m)=>{x$(h,{get arrowId(){return p(m)[0]},get tool(){return p(m)[1]},get boundingBox(){return s()}})}),Y(g),ee(()=>oo(g,`element-group ${_()}`)),N(c,g)}),Y(a),N(t,a),le()}var R$=de('<!><path fill="none"></path>',1);function k$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D();let c=U(e,"tool",8),u=U(e,"id",8);const _=c().cell,v=hn(c().toolId,Gt)??yO,g=.3;function h(L,R){const k=qa(R),$=new Ge(k.c,k.r).normalise().scale(g),P=Zn(L),W=P.subtract($),X=P.add($);return[W,X]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;G(()=>Z(c()),()=>{x(n,c().direction)}),G(()=>Z(c()),()=>{x(r,c().shape??v)}),G(()=>p(r),()=>{x(o,p(r).strokeWidth??.1)}),G(()=>p(r),()=>{x(s,p(r).stroke??"black")}),G(()=>p(n),()=>{x(a,pl(h(_,p(n))))}),Ie(),fe();var I=R$(),b=ue(I);Cl(b,{id:C,l:.15,get stroke(){return p(s)},get strokeWidth(){return p(o)}});var w=F(b);S(w,"marker-end",`url(#${C??""})`),ee(()=>{S(w,"d",p(a)),S(w,"stroke",p(s)),S(w,"stroke-width",p(o))}),N(t,I),le()}var G$=de('<path fill="none"></path>'),M$=de("<!><!>",1);function $$(t,e){ae(e,!1);const n=D(),r=D(),o=D();let s=U(e,"tool",8),a=U(e,"id",8);const c=s().cell,u=hn(s().toolId,Gt)??LO,_=.2;function v(w,L){const R=qa(L),k=new Ge(R.c,R.r),P=Zn(w).add(k.scale(.4));return[P.subtract(k.normalise().scale(_)),P]}function g(w){return pl(v(c,w))}const h=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${a()}-${h}`;G(()=>Z(s()),()=>{x(n,s().shape??u)}),G(()=>p(n),()=>{x(r,p(n).strokeWidth??.08)}),G(()=>p(n),()=>{x(o,p(n).stroke??"black")}),Ie(),fe();var C=M$(),I=ue(C);Cl(I,{id:m,l:.1,get stroke(){return p(o)},get strokeWidth(){return p(r)}});var b=F(I);lt(b,1,()=>s().directions,At,(w,L)=>{var R=G$();ee(()=>S(R,"d",g(p(L)))),S(R,"marker-end",`url(#${m??""})`),ee(()=>{S(R,"stroke",p(o)),S(R,"stroke-width",p(r))}),N(w,R)}),N(t,C),le()}var U$=de("<path></path>");function Ha(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D();let _=U(e,"cells",8),v=U(e,"shape",8,dd);G(()=>Z(v()),()=>{x(n,v().inset??.06)}),G(()=>Z(v()),()=>{x(r,v().stroke??"black")}),G(()=>Z(v()),()=>{x(o,v().strokeWidth??.03)}),G(()=>Z(v()),()=>{x(s,v().strokeDasharray??.08)}),G(()=>Z(v()),()=>{x(a,v().fill??"none")}),G(()=>Z(v()),()=>{x(c,v().connectDiag??!0)}),G(()=>(Z(_()),p(n),p(c)),()=>{x(u,gi(_(),p(n),p(c)))}),Ie(),fe();var g=U$();ee(()=>{S(g,"d",p(u)),S(g,"stroke",p(r)),S(g,"stroke-width",p(o)),S(g,"fill",p(a)),S(g,"stroke-dasharray",p(s))}),N(t,g),le()}var F$=de('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function vs(t,e){ae(e,!1);const n=D();let r=U(e,"value",8,""),o=U(e,"fontSize",8,.2),s=U(e,"x",8),a=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),v=D(null),g=D(null);function h(L,R,k){const $=["TL","TR"].includes(k),W=["TL","BL"].includes(k)?L+.05:L,X=R;return new Ge(W,X)}function m(L){return["TL","BL"].includes(L)?"start":"end"}function C(L){return["TL","TR"].includes(L)?"text-before-edge":""}Mw(()=>{if(!p(v)||!p(g))return;const L=p(v).getBBox();p(g).setAttribute("x",String(L.x)),p(g).setAttribute("y",String(L.y+L.height*.1)),p(g).setAttribute("width",String(L.width)),p(g).setAttribute("height",String(L.height*.8))}),G(()=>(Z(s()),Z(a()),Z(c())),()=>{x(n,h(s(),a(),c()))}),Ie(),fe();var I=Ae(),b=ue(I);{var w=L=>{var R=F$(),k=ue(R);No(k,W=>x(g,W),()=>p(g));var $=F(k);ee(()=>S($,"text-anchor",m(c()))),ee(()=>S($,"dominant-baseline",C(c())));var P=K($,!0);Y($),No($,W=>x(v,W),()=>p(v)),ee(()=>{var W,X;S($,"x",(W=p(n))==null?void 0:W.x),S($,"y",(X=p(n))==null?void 0:X.y),S($,"font-size",o()),S($,"fill",u()),S($,"font-weight",_()),et(P,r())}),N(L,R)};ge(b,L=>{r().length&&L(w)})}N(t,I),le()}var H$=ne("<!> <!>",1);function ip(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"cells",8),s=U(e,"shape",8,dd),a=U(e,"value",8,void 0);G(()=>Z(o()),()=>{x(n,o()[0])}),G(()=>p(n),()=>{x(r,new Ge(p(n).c,p(n).r))}),Ie(),fe();var c=H$(),u=ue(c);Ha(u,{get cells(){return o()},get shape(){return s()}});var _=F(u,2);{var v=g=>{vs(g,{get value(){return a()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(_,g=>{a()&&a().length&&g(v)})}N(t,c),le()}var P$=de("<rect></rect>");function B$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D(),_=D(),v=D();let g=U(e,"cx",8),h=U(e,"cy",8),m=U(e,"shape",8);G(()=>Z(m()),()=>{x(n,m().r??.5)}),G(()=>(Z(g()),p(n)),()=>{x(r,g()-p(n))}),G(()=>(Z(h()),p(n)),()=>{x(o,h()-p(n))}),G(()=>p(n),()=>{x(s,2*p(n))}),G(()=>p(n),()=>{x(a,2*p(n))}),G(()=>Z(m()),()=>{x(c,m().stroke??"black")}),G(()=>Z(m()),()=>{x(u,m().strokeWidth??.02)}),G(()=>Z(m()),()=>{x(_,m().fill??"none")}),G(()=>Z(m()),()=>{x(v,m().angle??0)}),Ie(),fe();var C=P$();ee(()=>{S(C,"x",p(r)),S(C,"y",p(o)),S(C,"width",p(s)),S(C,"height",p(a)),S(C,"stroke",p(c)),S(C,"stroke-width",p(u)),S(C,"fill",p(_)),S(C,"transform",`rotate(${p(v)}, ${g()}, ${h()})`)}),N(t,C),le()}var W$=de('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function ih(t,e){ae(e,!1);const n=rt(),r=()=>ve(h$,"$minimumConstraintsStore",n),o=()=>ve(v$,"$maximumConstraintsStore",n),s=D(),a=D(),c=D();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function v(b,w){const L=[!0,!0,!0,!0];let R=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<R.length;k++){let $=R[k];const P={r:b.r+$[1],c:b.c+$[0]};L[k]=!Object.values(w).some(W=>ze(P,W.cell))}return L}function g(b,w){let L=a$(_(),b.r,b.c);const R=v(b,w);return L=L.filter(($,P)=>R[P]),L.map($=>Ti($,!1)).join("")}function h(b,w){return _()==="max"?w:b}G(()=>Z(u()),()=>{x(s,u().c)}),G(()=>Z(u()),()=>{x(a,u().r)}),G(()=>(r(),o()),()=>{x(c,h(r(),o()))}),Ie(),fe();var m=W$(),C=K(m);S(C,"width",1),S(C,"height",1);var I=F(C);ee(()=>S(I,"d",g(u(),p(c)))),Y(m),ee(()=>{S(C,"x",p(s)),S(C,"y",p(a))}),N(t,m),le()}var z$=de("<circle></circle>");function Nr(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D();let u=U(e,"x",8),_=U(e,"y",8),v=U(e,"shape",8);G(()=>Z(v()),()=>{x(n,v().r??.35)}),G(()=>Z(v()),()=>{x(r,v().stroke??"black")}),G(()=>Z(v()),()=>{var h;x(o,(h=v())==null?void 0:h.opacity)}),G(()=>Z(v()),()=>{x(s,v().strokeWidth??.02)}),G(()=>Z(v()),()=>{x(a,v().fill??"none")}),G(()=>Z(v()),()=>{x(c,v().strokeDasharray??0)}),Ie(),fe();var g=z$();ee(()=>{S(g,"cx",u()),S(g,"cy",_()),S(g,"r",p(n)),S(g,"stroke",p(r)),S(g,"stroke-width",p(s)),S(g,"fill",p(a)),S(g,"opacity",p(o)),S(g,"stroke-dasharray",p(c))}),N(t,g),le()}var Y$=de("<ellipse></ellipse>");function j$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D();let _=U(e,"cx",8),v=U(e,"cy",8),g=U(e,"shape",8);G(()=>Z(g()),()=>{x(n,g().width??.5)}),G(()=>Z(g()),()=>{x(r,g().height??.5)}),G(()=>Z(g()),()=>{x(o,g().stroke??"black")}),G(()=>Z(g()),()=>{var m;x(s,(m=g())==null?void 0:m.opacity)}),G(()=>Z(g()),()=>{x(a,g().strokeWidth??.02)}),G(()=>Z(g()),()=>{x(c,g().fill??"none")}),G(()=>Z(g()),()=>{x(u,g().angle??0)}),Ie(),fe();var h=Y$();ee(()=>{S(h,"cx",_()),S(h,"cy",v()),S(h,"rx",p(n)/2),S(h,"ry",p(r)/2),S(h,"stroke",p(o)),S(h,"stroke-width",p(a)),S(h,"fill",p(c)),S(h,"opacity",p(s)),S(h,"transform",`rotate(${p(u)}, ${_()}, ${v()} )`)}),N(t,h),le()}var V$=de("<polygon></polygon>");function Pa(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D(),_=D();let v=U(e,"cx",8),g=U(e,"cy",8),h=U(e,"shape",8);G(()=>Z(h()),()=>{x(n,h().n??3)}),G(()=>Z(h()),()=>{x(r,h().r??.5)}),G(()=>(p(r),p(n),Z(v()),Z(g())),()=>{x(o,rp(p(r),p(n),new Ge(v(),g())))}),G(()=>p(o),()=>{x(s,p(o).map(C=>`${C.x},${C.y}`).join(" "))}),G(()=>Z(h()),()=>{x(a,h().stroke??"black")}),G(()=>Z(h()),()=>{x(c,h().strokeWidth??.02)}),G(()=>Z(h()),()=>{x(u,h().fill??"none")}),G(()=>Z(h()),()=>{x(_,h().angle??0)}),Ie(),fe();var m=V$();ee(()=>{S(m,"points",p(s)),S(m,"stroke",p(a)),S(m,"stroke-width",p(c)),S(m,"fill",p(u)),S(m,"transform",`rotate(${p(_)}, ${v()}, ${g()} )`)}),N(t,m),le()}var K$=de("<rect></rect>");function X$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D();let _=U(e,"cx",8),v=U(e,"cy",8),g=U(e,"shape",8);G(()=>Z(g()),()=>{x(n,g().width??.5)}),G(()=>Z(g()),()=>{x(r,g().height??.5)}),G(()=>(Z(_()),p(n)),()=>{x(o,_()-p(n)/2)}),G(()=>(Z(v()),p(r)),()=>{x(s,v()-p(r)/2)}),G(()=>Z(g()),()=>{x(a,g().stroke||"black")}),G(()=>Z(g()),()=>{x(c,g().strokeWidth||.023)}),G(()=>Z(g()),()=>{x(u,g().fill||"none")}),Ie(),fe();var h=K$();ee(()=>{S(h,"x",p(o)),S(h,"y",p(s)),S(h,"width",p(n)),S(h,"height",p(r)),S(h,"stroke",p(a)),S(h,"stroke-width",p(c)),S(h,"fill",p(u))}),N(t,h),le()}function El(t,e){ae(e,!1);const n=D();let r=U(e,"cx",8),o=U(e,"cy",8),s=U(e,"shape",8);G(()=>(Z(s()),H),()=>{var v;x(n,((v=s())==null?void 0:v.type)??H.CIRCLE)}),Ie(),fe();var a=Ae(),c=ue(a);{var u=v=>{Nr(v,{get x(){return r()},get y(){return o()},get shape(){return s()}})},_=v=>{var g=Ae(),h=ue(g);{var m=I=>{j$(I,{get cx(){return r()},get cy(){return o()},get shape(){return s()}})},C=I=>{var b=Ae(),w=ue(b);{var L=k=>{B$(k,{get cx(){return r()},get cy(){return o()},get shape(){return s()}})},R=k=>{var $=Ae(),P=ue($);{var W=J=>{X$(J,{get cx(){return r()},get cy(){return o()},get shape(){return s()}})},X=J=>{var ce=Ae(),Q=ue(ce);{var oe=me=>{Pa(me,{get cx(){return r()},get cy(){return o()},get shape(){return s()}})},pe=me=>{Nr(me,{get x(){return r()},get y(){return o()},get shape(){return s()}})};ge(Q,me=>{p(n)===H.POLYGON?me(oe):me(pe,!1)},!0)}N(J,ce)};ge(P,J=>{p(n)===H.RECTANGLE?J(W):J(X,!1)},!0)}N(k,$)};ge(w,k=>{p(n)===H.SQUARE?k(L):k(R,!1)},!0)}N(I,b)};ge(h,I=>{p(n)===H.ELLIPSE?I(m):I(C,!1)},!0)}N(v,g)};ge(c,v=>{p(n)===H.CIRCLE?v(u):v(_,!1)})}N(t,a),le()}var q$=de("<circle></circle>");function Z$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D();let u=U(e,"x",8),_=U(e,"y",8),v=U(e,"value",8),g=U(e,"shape",8);G(()=>Z(g()),()=>{x(n,g().r??.35)}),G(()=>Z(g()),()=>{x(r,g().stroke??"black")}),G(()=>Z(g()),()=>{var m;x(o,(m=g())==null?void 0:m.opacity)}),G(()=>Z(g()),()=>{x(s,g().strokeWidth??.02)}),G(()=>Z(v()),()=>{x(a,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),G(()=>Z(g()),()=>{x(c,g().strokeDasharray??0)}),Ie(),fe();var h=q$();ee(()=>{S(h,"cx",u()),S(h,"cy",_()),S(h,"r",p(n)),S(h,"stroke",p(r)),S(h,"stroke-width",p(s)),S(h,"fill",p(a)),S(h,"opacity",p(o)),S(h,"stroke-dasharray",p(c))}),N(t,h),le()}var Q$=de('<g class="single-cell-tool"><!><!></g>');function J$(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D();let c=U(e,"tool",8),u=U(e,"id",8);const _=c().cell,v=hn(c().toolId,Gt)??OO;G(()=>Z(c()),()=>{x(n,c().shape??v)}),G(()=>(p(n),H),()=>{var w;x(r,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),G(()=>{},()=>{x(o,{x:_.c+.5,y:_.r+.5})}),G(()=>Ge,()=>{x(s,new Ge(_.c,_.r))}),G(()=>Z(c()),()=>{x(a,c().value)}),Ie(),fe();var g=Q$(),h=K(g);{var m=w=>{ih(w,{coord:_,minOrMax:"min"})},C=w=>{var L=Ae(),R=ue(L);{var k=P=>{ih(P,{coord:_,minOrMax:"max"})},$=P=>{var W=Ae(),X=ue(W);{var J=Q=>{Z$(Q,{get x(){return p(o).x},get y(){return p(o).y},get value(){return p(a)},get shape(){return p(n)}})},ce=Q=>{var oe=Ae(),pe=ue(oe);{var me=De=>{ip(De,{cells:[_],get shape(){return p(n)},get value(){return c().value}})},Ee=De=>{El(De,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return p(n)}})};ge(pe,De=>{p(r)===H.CAGE?De(me):De(Ee,!1)},!0)}N(Q,oe)};ge(X,Q=>{c().toolId===d.COLORED_COUNTING_CIRCLES?Q(J):Q(ce,!1)},!0)}N(P,W)};ge(R,P=>{c().toolId===d.MAXIMUM?P(k):P($,!1)},!0)}N(w,L)};ge(h,w=>{c().toolId===d.MINIMUM?w(m):w(C,!1)})}var I=F(h);{var b=w=>{vs(w,{get value(){return p(a)},get x(){return p(s).x},get y(){return p(s).y},position:"TL"})};ge(I,w=>{p(r)!==H.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&p(a)&&w(b)})}Y(g),ee(()=>S(g,"id",`constraint-${u()}`)),N(t,g),le()}var eU=de("<g></g>"),tU=de('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function nU(t,e){ae(e,!1);const n=rt(),r=()=>ve(Hd,"$singleCellToolsStore",n),o=D();G(()=>r(),()=>{x(o,r())}),Ie();var s=tU();lt(s,5,()=>p(o),At,(a,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=eU();lt(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{var m=Ae(),C=ue(m);{var I=w=>{k$(w,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},b=w=>{var L=Ae(),R=ue(L);{var k=P=>{$$(P,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},$=P=>{var W=Ae(),X=ue(W);{var J=ce=>{J$(ce,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})};ge(X,ce=>{p(h)[1].type==="SIMPLE"&&ce(J)},!0)}N(P,W)};ge(R,P=>{p(h)[1].type==="MULTIARROW"?P(k):P($,!1)},!0)}N(w,L)};ge(C,w=>{p(h)[1].type==="ARROW"?w(I):w(b,!1)})}N(g,m)}),Y(v),ee(()=>oo(v,`element-group ${u()}`)),N(a,v)}),Y(s),N(t,s),le()}function rU(t,e){const n=t.getRow(e.r);return new Set(n)}function oU(t,e){const n=t.getCol(e.c);return new Set(n)}function iU(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function sU(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function aU(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function lU(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function cU(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function uU(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function dU(t,e,n){let r=new Set;const s=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=s.length,c=[s[0],s[a-1]],u=s.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((h,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function _U(t,e,n){let r=new Set;const s=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!s.find(u=>u===e))return r;const c=s.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function fU(t,e,n){let r=new Set;const s=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!s.find(u=>u===e))return r;const c=s.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function gU(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(d.ANTIKNIGHT)&&(r=r.union(sU(t,o))),e.get(d.ANTIKING)&&(r=r.union(aU(t,o))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(lU(t,o))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(uU(t,o))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(cU(t,o)))),r}function su(t,e,n,r,o){const s=e.get(r);if(s)for(const a of Object.entries(s)){const c=a[1],u=fU(t,n,c);o=new Set([...o,...u])}return o}function hU(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;const s=e.get(d.BETWEEN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=dU(t,o,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=_U(t,o,u);r=new Set([...r,..._])}return r=su(t,e,o,d.KILLER_CAGE,r),r=su(t,e,o,d.PARITY_BALANCE_CAGE,r),r=su(t,e,o,d.SPOTLIGHT_CAGE,r),r}function sp(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,s=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...rU(o,e),...oU(o,e),...iU(o,e)])),n=new Set([...n,...gU(o,r,e)]),n=new Set([...n,...hU(o,s,e)]);const a=o.getCell(e.r,e.c);return a&&n.delete(a),n}function vU(t,e){const n=[];if(e.length==0)return[];for(const s of e)n.push(sp(t,s));const r=n.reduce((s,a)=>s.intersection(a)),o=[];for(const s of r)o.push(s.toCoords());return o}var pU=de('<tspan class="svelte-xct9ah"> </tspan>'),mU=de('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function CU(t,e){ae(e,!1);const n=D();let r=U(e,"cell",8),o=U(e,"seen_values",8);const s=.25;function a(v){return o().find(h=>h===v)!==void 0}G(()=>Z(r()),()=>{x(n,Zn({r:r().r,c:r().c}))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=mU(),h=K(g);S(h,"font-size",s),lt(h,5,()=>r().centerMarks,At,(m,C)=>{var I=pU();const b=Xe(()=>a(p(C)));ee(()=>Ot(I,"conflict",p(b)));var w=K(I,!0);Y(I),ee(()=>et(w,p(C))),N(m,I)}),Y(h),Y(g),ee(()=>{S(h,"x",p(n).x),S(h,"y",p(n).y),S(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(v,g)};ge(u,v=>{r().centerMarks.length&&v(_)})}N(t,c),le()}var EU=de('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),IU=de('<g class="corner-marks-group"></g>');function bU(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const o=.25,s=.28;function a(g){const h=g.cornerMarks.slice(0,8),m=Zn({r:g.r,c:g.c});return h.map((C,I)=>{const b=i$(I,s);return{pos:m.add(b),value:C,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}fe();var u=Ae(),_=ue(u);{var v=g=>{var h=IU();lt(h,5,()=>a(n()),At,(m,C)=>{let I=()=>p(C).pos,b=()=>p(C).value;var w=EU();S(w,"font-size",o);const L=Xe(()=>c(b()));var R=K(w,!0);Y(w),ee(()=>{S(w,"x",I().x),S(w,"y",I().y),Ot(w,"conflict",p(L)),et(R,b())}),N(m,w)}),Y(h),N(g,h)};ge(_,g=>{n().cornerMarks.length&&g(v)})}N(t,u),le()}var wU=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),OU=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),yU=de('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),LU=de("<!><!>",1),AU=de('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function SU(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),o=()=>ve(Os,"$puzzleStore",n),s=()=>ve(qt,"$toolStore",n),a=D(),c=D(),u=D(),_=D(),v=D(),g=D(),h=D();let m=U(e,"cell",8);const C=.8,I=400;function b($,P){if(!$)return[];let X=[...sp(p(v),P.toCoords())].map(J=>J.value).filter(J=>J!==null);return X=[...new Set(X)],X}function w($){return $?"1":"0"}G(()=>Z(m()),()=>{x(a,m().value)}),G(()=>Z(m()),()=>{x(c,m().given)}),G(()=>Z(m()),()=>{x(u,Zn({r:m().r,c:m().c}))}),G(()=>r(),()=>{x(_,r().highlightPencilmarkConflicts)}),G(()=>o(),()=>{x(v,o())}),G(()=>r(),()=>{x(g,r().showSolution)}),G(()=>(p(_),Z(m())),()=>{x(h,b(p(_),m()))}),Ie(),fe();var L=Ae(),R=ue(L);{var k=$=>{var P=AU(),W=K(P);{var X=ce=>{var Q=Ae(),oe=ue(Q);{var pe=me=>{var Ee=wU();S(Ee,"font-size",C),S(Ee,"font-weight",I);var De=K(Ee,!0);Y(Ee),ee(()=>{S(Ee,"x",p(u).x),S(Ee,"y",p(u).y),et(De,m().region)}),N(me,Ee)};ge(oe,me=>{m().region!==null&&me(pe)})}N(ce,Q)},J=ce=>{var Q=Ae(),oe=ue(Q);{var pe=Ee=>{var De=Ae(),st=ue(De);{var Se=we=>{var vt=OU();S(vt,"font-size",C),S(vt,"font-weight",I);var ct=K(vt,!0);ee(()=>et(ct,w(m().fog))),Y(vt),ee(()=>{S(vt,"x",p(u).x),S(vt,"y",p(u).y)}),N(we,vt)};ge(st,we=>{m().fog!==null&&we(Se)})}N(Ee,De)},me=Ee=>{var De=Ae(),st=ue(De);{var Se=vt=>{var ct=yU();S(ct,"font-size",C),S(ct,"font-weight",I);var Ln=K(ct,!0);Y(ct),ee(()=>{S(ct,"x",p(u).x),S(ct,"y",p(u).y),Ot(ct,"given",p(c)),et(Ln,p(a))}),N(vt,ct)},we=vt=>{var ct=LU(),Ln=ue(ct);bU(Ln,{get cell(){return m()},get seen_values(){return p(h)}});var Un=F(Ln);CU(Un,{get cell(){return m()},get seen_values(){return p(h)}}),N(vt,ct)};ge(st,vt=>{p(a)!==null?vt(Se):vt(we,!1)},!0)}N(Ee,De)};ge(oe,Ee=>{s()===d.FOG?Ee(pe):Ee(me,!1)},!0)}N(ce,Q)};ge(W,ce=>{s()===d.REGIONS?ce(X):ce(J,!1)})}Y(P),ee(()=>Ot(P,"hide-given",m().given)),N($,P)};ge(R,$=>{p(g)||$(k)})}N(t,L),le()}var xU=de("<path></path>"),NU=de('<g class="highlights-group"></g>');function TU(t,e){ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n);let o=U(e,"cell",8);function s(_){const v=Zn({r:o().r,c:o().c}),g=o().highlights.length;return o().highlights.map((m,C)=>{let I=r$(C,g);I=I.map(w=>w.add(v));const b=Ti(I,!0);return{colorId:m,d:b}})}fe();var a=Ae(),c=ue(a);{var u=_=>{var v=Ae(),g=ue(v);{var h=m=>{var C=NU();lt(C,5,()=>s(o()),At,(I,b)=>{let w=()=>p(b).colorId,L=()=>p(b).d;var R=xU();ee(()=>{oo(R,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),S(R,"d",L())}),N(I,R)}),Y(C),N(m,C)};ge(g,m=>{o().highlights.length&&m(h)})}N(_,v)};ge(c,_=>{r()!==d.REGIONS&&_(u)})}N(t,a),le()}var DU=de('<path class="cell-marker" fill="none"></path>'),RU=de('<circle fill="none" opacity="0.9"></circle>');function kU(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"marker",8);const s=.3,a=.08;G(()=>Z(o()),()=>{x(n,op(o(),s))}),G(()=>Z(o()),()=>{x(r,ml(o().colorId,"black"))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=g=>{var h=DU();S(h,"stroke-width",a),ee(()=>{S(h,"d",p(n)),S(h,"stroke",p(r))}),N(g,h)},v=g=>{var h=RU();S(h,"r",s),S(h,"stroke-width",a),ee(()=>{oo(h,`cell-marker color-${o().colorId??""}`),S(h,"cx",o().c),S(h,"cy",o().r),S(h,"stroke",p(r))}),N(g,h)};ge(u,g=>{o().marker==="X"?g(_):g(v,!1)})}N(t,c),le()}var GU=de('<g class="cell-markers"></g>');function MU(t,e){let n=U(e,"markers",8);var r=GU();lt(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,s)=>{kU(o,{get marker(){return p(s)}})}),Y(r),N(t,r)}var $U=de('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function UU(t,e){ae(e,!1);const n=D();let r=U(e,"draftLineMarker",8);const o=.2;function s(u){return u.map(v=>[new Ge(v.p1.c,v.p1.r),new Ge(v.p2.c,v.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?ml(_,"black"):"darkred"}G(()=>Z(r()),()=>{x(n,Ti(s(r().draftLine)))}),Ie(),fe();var c=$U();ee(()=>S(c,"stroke",a(r()))),S(c,"stroke-width",o),S(c,"opacity",.5),ee(()=>S(c,"d",p(n))),N(t,c),le()}var FU=de('<path fill="none" opacity="0.9"></path>');function HU(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"marker",8);const s=.08,a=.04;G(()=>Z(o()),()=>{x(n,op(o(),s))}),G(()=>Z(o()),()=>{x(r,ml(o().colorId,"black"))}),Ie(),fe();var c=FU();S(c,"stroke-width",a),ee(()=>{S(c,"d",p(n)),oo(c,`edge-marker color-${o().colorId??""}`),S(c,"stroke",p(r))}),N(t,c),le()}var PU=de('<g class="edge-markers"></g>');function BU(t,e){let n=U(e,"markers",8);var r=PU();lt(r,5,n,o=>`${o.r}, ${o.c}`,(o,s)=>{HU(o,{get marker(){return p(s)}})}),Y(r),N(t,r)}var WU=de('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),zU=de('<g class="line-markers svelte-yha19m"></g>');function YU(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function s(c){return ml(c,"black")}fe();var a=zU();lt(a,5,n,c=>o(c),(c,u)=>{var _=WU();S(_,"stroke-width",r),ee(()=>S(_,"stroke",s(p(u).colorId))),ee(()=>{S(_,"x1",p(u).p1.c),S(_,"y1",p(u).p1.r),S(_,"x2",p(u).p2.c),S(_,"y2",p(u).p2.r),oo(_,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),N(c,_)}),Y(a),N(t,a),le()}var jU=de('<g class="pen-tool"><!><!><!><!></g>');function VU(t,e){ae(e,!1);const n=rt(),r=()=>ve(Ma,"$penToolStore",n),o=D();G(()=>r(),()=>{x(o,{draftLine:r().draftLine,mode:r().mode})}),Ie(),fe();var s=jU(),a=K(s);YU(a,{get lineMarkers(){return r().lineMarkers}});var c=F(a);BU(c,{get markers(){return r().edgeMarkers}});var u=F(c);MU(u,{get markers(){return r().cellMarkers}});var _=F(u);UU(_,{get draftLineMarker(){return p(o)}}),Y(s),N(t,s),le()}var KU=de('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function XU(t,e){ae(e,!1);const n=rt(),r=()=>ve(To,"$selectionStore",n),o=()=>ve(zt,"$settingsStore",n),s=()=>ve(Os,"$puzzleStore",n),a=()=>ve(qt,"$toolStore",n),c=D(),u=D(),_=D(),v=D(),g={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,w){return b.length?vU(p(_),b):[]}G(()=>r(),()=>{x(c,r().cells)}),G(()=>o(),()=>{x(u,o().highlightCellsSeenBySelection)}),G(()=>s(),()=>{x(_,s())}),G(()=>a(),()=>{x(v,sd(a()))}),Ie(),fe();var m=Ae(),C=ue(m);{var I=b=>{var w=KU(),L=K(w),R=Xe(()=>h(p(c),p(_)));Ha(L,{get cells(){return p(R)},shape:g}),Y(w),N(b,w)};ge(C,b=>{p(u)&&p(v)&&b(I)})}N(t,m),le()}function Il(t){const e=[],n=t.map(s=>s.value).filter(s=>s!==null),o=[...Ev(n).entries()].filter(([,s])=>s>1).map(([s])=>s);return e.push(...t.filter(s=>s.value!==null&&o.includes(s.value))),e}function qU(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Il(r))}return new Set(e)}function ZU(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Il(r))}return new Set(e)}function QU(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Il(r))}return new Set(e)}function JU(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function e4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getNeighboorCells(r).filter(a=>a.value===r.value);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function t4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function n4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),s=Il(o);s.length&&e.push(...s)}return new Set(e)}function r4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...qU(t),...ZU(t),...QU(t)]);n=n.union(o)}return e.get(d.ANTIKNIGHT)&&(n=n.union(JU(t))),e.get(d.ANTIKING)&&(n=n.union(e4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(t4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(n4(t))),n}function o4(t,e){return[...new Set([...r4(t,e)])]}var i4=de('<rect class="conflict svelte-4mp6ok"></rect>'),s4=de('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function a4(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),o=()=>ve(gn,"$gridStore",n),s=()=>ve(Rr,"$globalConstraintsStore",n),a=()=>ve(fn,"$cellsStore",n),c=D(),u=D(),_=D(),v=D();H.CAGE;function g(I){return o4(p(u),p(_)).map(L=>L.toCoords())}G(()=>r(),()=>{x(c,r().checkConflicts)}),G(()=>o(),()=>{x(u,o())}),G(()=>s(),()=>{x(_,s())}),G(()=>a(),()=>{x(v,a())}),Ie(),fe();var h=Ae(),m=ue(h);{var C=I=>{var b=s4();lt(b,5,()=>g(p(v)),At,(w,L)=>{var R=i4();S(R,"width",1),S(R,"height",1),ee(()=>{S(R,"x",p(L).c),S(R,"y",p(L).r)}),N(w,R)}),Y(b),N(I,b)};ge(m,I=>{p(c)&&I(C)})}N(t,h),le()}var l4=de('<line class="diag svelte-ylotlw"></line>'),c4=de('<line class="antidiag svelte-ylotlw"></line>'),u4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),d4=de('<line class="diag svelte-ylotlw"></line>'),_4=de('<line class="antidiag svelte-ylotlw"></line>'),f4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),g4=de('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function h4(t,e){ae(e,!1);const n=rt(),r=()=>ve(Rr,"$globalConstraintsStore",n),o=()=>ve(gn,"$gridStore",n),s=D(),a=D(),c=D(),u=D(),_=D(),v=D(),g=D(),h=D(),m=D(),C=D(),I=D(),b=D(),w=0,L=0,R=0,k=0;G(()=>r(),()=>{x(s,r())}),G(()=>(p(s),d),()=>{x(a,!!p(s).get(d.POSITIVE_DIAGONAL))}),G(()=>(p(s),d),()=>{x(c,!!p(s).get(d.NEGATIVE_DIAGONAL))}),G(()=>(p(s),d),()=>{x(u,!!p(s).get(d.NEGATIVE_ANTIDIAGONAL))}),G(()=>(p(s),d),()=>{x(_,!!p(s).get(d.POSITIVE_ANTIDIAGONAL))}),G(()=>(p(s),d),()=>{x(v,!!p(s).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),G(()=>(p(s),d),()=>{x(g,!!p(s).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),G(()=>o(),()=>{x(h,o())}),G(()=>p(h),()=>{x(m,p(h).nCols)}),G(()=>p(h),()=>{x(C,p(h).nRows)}),G(()=>p(h),()=>{x(I,p(h).nCols)}),G(()=>p(h),()=>{x(b,p(h).nRows)}),Ie(),fe();var $=g4(),P=K($);{var W=Se=>{var we=l4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),N(Se,we)};ge(P,Se=>{p(c)&&Se(W)})}var X=F(P);{var J=Se=>{var we=c4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),N(Se,we)};ge(X,Se=>{p(u)&&Se(J)})}var ce=F(X);{var Q=Se=>{var we=u4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),N(Se,we)};ge(ce,Se=>{p(v)&&Se(Q)})}var oe=F(ce);{var pe=Se=>{var we=d4();S(we,"x2",k),S(we,"y1",R),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(C))}),N(Se,we)};ge(oe,Se=>{p(a)&&Se(pe)})}var me=F(oe);{var Ee=Se=>{var we=_4();S(we,"x2",k),S(we,"y1",R),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(C))}),N(Se,we)};ge(me,Se=>{p(_)&&Se(Ee)})}var De=F(me);{var st=Se=>{var we=f4();S(we,"x2",k),S(we,"y1",R),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(C))}),N(Se,we)};ge(De,Se=>{p(g)&&Se(st)})}Y($),N(t,$),le()}var v4=de('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function p4(t,e){ae(e,!1);const n=rt(),r=()=>ve(fn,"$cellsStore",n),o=()=>ve(Nv,"$showFogStore",n),s=()=>ve(Ja,"$solutionStore",n),a=()=>ve(gn,"$gridStore",n),c=D(),u=D(),_=D(),v=D(),g=D(),h=D();let m=U(e,"boundingBox",8),C=U(e,"gridShape",8);function I(pe){const me=pe.filter(we=>we.fog);if(!p(g))return me.map(vt=>vt.toCoords());const Ee=pe.filter(we=>we.value===p(g)[we.r][we.c]);let De=new Set;for(const we of Ee){const vt=p(h).getNeighboorCells(we);De=new Set([...vt,we])}return[...new Set(me).difference(De)].map(we=>we.toCoords())}G(()=>r(),()=>{x(c,r())}),G(()=>p(c),()=>{x(u,I(p(c)))}),G(()=>p(u),()=>{x(_,gi(p(u),0))}),G(()=>o(),()=>{x(v,o())}),G(()=>s(),()=>{x(g,s())}),G(()=>a(),()=>{x(h,a())}),Ie(),fe();var b=v4(),w=K(b),L=K(w);Y(w);var R=F(w),k=K(R);S(k,"stroke-width",.5);var $=F(k);S($,"stroke-width",.375);var P=F($);S(P,"stroke-width",.25);var W=F(P);S(W,"stroke-width",.125),xo(),Y(R);var X=F(R),J=K(X);xo(),Y(X);var ce=F(X),Q=K(ce),oe=F(Q);S(oe,"x",0),S(oe,"y",0),Y(ce),Y(b),ee(()=>{S(L,"d",p(_)),Ot(R,"disabled",!p(v)),Ot(X,"disabled",!p(v)),S(J,"x",m().x),S(J,"y",m().y),S(J,"width",m().width),S(J,"height",m().height),S(Q,"x",m().x),S(Q,"y",m().y),S(Q,"width",m().width),S(Q,"height",m().height),S(oe,"width",C().nCols),S(oe,"height",C().nRows)}),N(t,b),le()}var m4=de('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function C4(t,e){ae(e,!1);const n=rt(),r=()=>ve(Nv,"$showFogStore",n),o=D();let s=U(e,"gridShape",8);G(()=>r(),()=>{x(o,r())}),Ie(),fe();var a=m4(),c=K(a);S(c,"x",0),S(c,"y",0),Y(a),ee(()=>{S(a,"visibility",p(o)?"visible":"hidden"),S(c,"width",s().nCols),S(c,"height",s().nRows)}),N(t,a),le()}var E4=de('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function I4(t,e){ae(e,!1);const n=D();let r=U(e,"r",8),o=U(e,"c",8),s=U(e,"val",8);const a=.8,c=400;G(()=>(Z(r()),Z(o())),()=>{x(n,Zn({r:r(),c:o()}))}),Ie(),fe();var u=Ae(),_=ue(u);{var v=g=>{var h=E4();S(h,"font-size",a),S(h,"font-weight",c);var m=K(h,!0);Y(h),ee(()=>{S(h,"x",p(n).x),S(h,"y",p(n).y),et(m,s())}),N(g,h)};ge(_,g=>{s()!==null&&g(v)})}N(t,u),le()}var b4=de('<g class="solution-layer"></g>');function w4(t,e){ae(e,!1);const n=rt(),r=()=>ve(Ja,"$solutionStore",n),o=()=>ve(zt,"$settingsStore",n),s=()=>ve(Qa,"$gameModeStore",n),a=D(),c=D(),u=D();G(()=>r(),()=>{x(a,r())}),G(()=>o(),()=>{x(c,o().showSolution)}),G(()=>s(),()=>{x(u,s())}),Ie(),fe();var _=Ae(),v=ue(_);{var g=h=>{var m=b4();lt(m,5,()=>p(a),At,(C,I,b)=>{var w=Ae(),L=ue(w);lt(L,1,()=>p(I),At,(R,k,$)=>{I4(R,{r:b,c:$,get val(){return p(k)}})}),N(C,w)}),Y(m),N(h,m)};ge(v,h=>{p(a)&&p(c)&&p(u)===hi.SETTING&&h(g)})}N(t,_),le()}var O4=de("<g></g>"),y4=de('<g mask="url(#fog-mask-fog)"></g>');function eo(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),o=U(e,"Component",8);var s=y4();lt(s,5,n,At,(a,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=O4();lt(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{o()(g,{get tool(){return p(h)[1]}})}),Y(v),ee(()=>oo(v,`element-group ${u()}`)),N(a,v)}),Y(s),ee(()=>oo(s,Lh(r()))),N(t,s)}var L4=de('<line class="svelte-yr67cf"></line>');function A4(t,e){ae(e,!1);const n=D(),r=D(),o=D();let s=U(e,"shape",8),a=U(e,"coords",8);const[c,u]=a(),_=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,h=c.r===u.r?u.r+1:u.r;G(()=>Z(s()),()=>{x(n,s().stroke??"black")}),G(()=>Z(s()),()=>{var C;x(r,(C=s())==null?void 0:C.opacity)}),G(()=>Z(s()),()=>{x(o,s().strokeWidth??.02)}),Ie(),fe();var m=L4();S(m,"x1",_),S(m,"x2",v),S(m,"y1",g),S(m,"y2",h),ee(()=>{S(m,"stroke",p(n)),S(m,"stroke-width",p(o)),S(m,"opacity",p(r))}),N(t,m),le()}var S4=de('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function x4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D();let c=U(e,"tool",8);const u=c().cells,_=hn(c().toolId,Gt)??Xh;function v(I,b){return b===H.TEXT_ONLY?I.value?I.value:"-":I.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}G(()=>Z(c()),()=>{x(n,c().shape??_)}),G(()=>Fa,()=>{x(r,TL(Fa(u)))}),G(()=>(p(n),H),()=>{var I;x(o,((I=p(n))==null?void 0:I.type)||H.CIRCLE)}),G(()=>p(n),()=>{var I;x(s,((I=p(n))==null?void 0:I.fontSize)??.2)}),G(()=>p(n),()=>{var I;x(a,((I=p(n))==null?void 0:I.fontColor)??"black")}),Ie(),fe();var h=Ae(),m=ue(h);{var C=I=>{var b=S4(),w=K(b);{var L=P=>{Nr(P,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},R=P=>{var W=Ae(),X=ue(W);{var J=Q=>{Nr(Q,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},ce=Q=>{var oe=Ae(),pe=ue(oe);{var me=De=>{A4(De,{coords:u,get shape(){return p(n)}})},Ee=De=>{El(De,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(pe,De=>{p(o)===H.BORDER_LINE?De(me):De(Ee,!1)},!0)}N(Q,oe)};ge(X,Q=>{p(o)===H.TEXT_ONLY?Q(J):Q(ce,!1)},!0)}N(P,W)};ge(w,P=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?P(L):P(R,!1)})}var k=F(w);ee(()=>S(k,"transform",`rotate(${g()}, ${p(r).x}, ${p(r).y} )`));var $=K(k,!0);ee(()=>et($,v(c(),p(o)))),Y(k),Y(b),ee(()=>{S(k,"x",p(r).x),S(k,"y",p(r).y),S(k,"font-size",p(s)),S(k,"fill",p(a))}),N(I,b)};ge(m,I=>{u.length===2&&I(C)})}N(t,h),le()}var N4=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),T4=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),D4=de('<g class="quadruple-text"><!></g>');function R4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D();let c=U(e,"cornerTool",8);const u=c().cells,_=new Ge(u[u.length-1].c,u[u.length-1].r),v=hn(c().toolId,Gt)??qh;G(()=>Z(c()),()=>{x(n,c().value)}),G(()=>Z(c()),()=>{x(r,c().shape??v)}),G(()=>p(r),()=>{var C;x(o,((C=p(r))==null?void 0:C.fontSize)??.2)}),G(()=>p(r),()=>{var C;x(s,((C=p(r))==null?void 0:C.fontColor)??"black")}),G(()=>p(n),()=>{var C;x(a,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),Ie(),fe();var g=Ae(),h=ue(g);{var m=C=>{var I=D4(),b=K(I);{var w=R=>{var k=N4(),$=K(k,!0);ee(()=>et($,p(a).join(" "))),Y(k),ee(()=>{S(k,"x",_.x),S(k,"y",_.y),S(k,"font-size",p(o)),S(k,"fill",p(s))}),N(R,k)},L=R=>{var k=T4(),$=ue(k),P=K($,!0);ee(()=>et(P,p(a).slice(0,2).join(" "))),Y($);var W=F($),X=K(W,!0);ee(()=>et(X,p(a).slice(2).join(" "))),Y(W),ee(()=>{S($,"x",_.x),S($,"y",_.y),S($,"dy",-p(o)/2),S($,"font-size",p(o)),S($,"fill",p(s)),S(W,"x",_.x),S(W,"y",_.y),S(W,"dy",p(o)/2),S(W,"font-size",p(o)),S(W,"fill",p(s))}),N(R,k)};ge(b,R=>{p(a).length<=2?R(w):R(L,!1)})}Y(I),ee(()=>S(I,"data-count",p(a).length)),N(C,I)};ge(h,C=>{p(n)&&C(m)})}N(t,g),le()}var k4=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),G4=de('<g class="corner-tool"><!><!></g>');function M4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D();let a=U(e,"tool",8);const c=a().cells,u=hn(a().toolId,Gt)??qh,_=new Ge(c[c.length-1].c,c[c.length-1].r);function v(C,I){return I===H.TEXT_ONLY?C.value?C.value:"-":C.value??""}G(()=>Z(a()),()=>{x(n,a().shape??u)}),G(()=>(p(n),H),()=>{var C;x(r,((C=p(n))==null?void 0:C.type)??H.CIRCLE)}),G(()=>p(n),()=>{var C;x(o,((C=p(n))==null?void 0:C.fontSize)??.2)}),G(()=>p(n),()=>{var C;x(s,((C=p(n))==null?void 0:C.fontColor)??"black")}),Ie(),fe();var g=Ae(),h=ue(g);{var m=C=>{var I=G4(),b=K(I);El(b,{get cx(){return _.x},get cy(){return _.y},get shape(){return p(n)}});var w=F(b);{var L=k=>{R4(k,{get cornerTool(){return a()}})},R=k=>{var $=k4(),P=K($,!0);ee(()=>et(P,v(a(),p(r)))),Y($),ee(()=>{S($,"x",_.x),S($,"y",_.y),S($,"font-size",p(o)),S($,"fill",p(s))}),N(k,$)};ge(w,k=>{a().toolId===d.QUADRUPLE?k(L):k(R,!1)})}Y(I),N(C,I)};ge(h,C=>{c.length===4&&C(m)})}N(t,g),le()}var $4=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),U4=de('<g class="center-corner-or-edge-tool"><!><!></g>');function F4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D();let u=U(e,"tool",8);const _=u().cell,v=hn(u().toolId,Gt)??Xh;function g(w,L){return L===H.TEXT_ONLY?w.value?w.value:"-":w.value??""}G(()=>Z(u()),()=>{x(n,u().shape??v)}),G(()=>{},()=>{x(r,_)}),G(()=>(p(n),H),()=>{var w;x(o,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),G(()=>p(n),()=>{var w;x(s,((w=p(n))==null?void 0:w.fontSize)??.2)}),G(()=>p(n),()=>{var w;x(a,((w=p(n))==null?void 0:w.fontColor)??"black")}),G(()=>p(r),()=>{x(c,p(r).r%1===.5&&p(r).c%1===.5)}),Ie(),fe();var h=U4(),m=K(h);El(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=F(m);{var I=w=>{var L=Xe(()=>g(u(),p(o))),R=Xe(()=>Math.floor(p(r).c)),k=Xe(()=>Math.floor(p(r).r));vs(w,{get value(){return p(L)},get x(){return p(R)},get y(){return p(k)},position:"TL",get fontColor(){return p(a)}})},b=w=>{var L=$4(),R=K(L,!0);ee(()=>et(R,g(u(),p(o)))),Y(L),ee(()=>{S(L,"x",p(r).c),S(L,"y",p(r).r),S(L,"font-size",p(s)),S(L,"fill",p(a))}),N(w,L)};ge(C,w=>{p(c)?w(I):w(b,!1)})}Y(h),N(t,h),le()}var H4=de('<path fill="none"></path>');function Ro(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const v="round",g="round";G(()=>Z(_()),()=>{var m;x(n,((m=_())==null?void 0:m.stroke)??"gray")}),G(()=>Z(_()),()=>{var m;x(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),G(()=>Z(_()),()=>{var m;x(o,((m=_())==null?void 0:m.strokeDasharray)??0)}),G(()=>Z(_()),()=>{var m;x(s,((m=_())==null?void 0:m.strokeDashoffset)??0)}),G(()=>Z(_()),()=>{var m,C,I,b,w,L,R,k;x(a,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((b=(I=_())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((L=(w=_())==null?void 0:w.linePathOptions)==null?void 0:L.bezierRounding)??.2,closeLoops:((k=(R=_())==null?void 0:R.linePathOptions)==null?void 0:k.closeLoops)??!1})}),G(()=>(Z(u()),p(a)),()=>{x(c,pl(u(),p(a)))}),Ie(),fe();var h=H4();S(h,"stroke-linejoin",v),S(h,"stroke-linecap",g),ee(()=>{S(h,"d",p(c)),S(h,"stroke",p(n)),S(h,"stroke-width",p(r)),S(h,"stroke-dasharray",p(o)),S(h,"stroke-dashoffset",p(s))}),N(t,h),le()}var P4=ne("<!> <!> <!>",1);function B4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D();let a=U(e,"linePoints",8),c=U(e,"shape",8,ms);function u(b){var R;const w=St.cloneDeep(b);w.r=w.r||.2;const L=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:L,shortenTail:L,bezierRounding:(R=w.linePathOptions)==null?void 0:R.bezierRounding},w}G(()=>Z(a()),()=>{x(n,a().length)}),G(()=>(p(n),Z(a())),()=>{x(r,p(n)>=0?a()[0]:void 0)}),G(()=>(p(n),Z(a())),()=>{x(o,p(n)>=0?a()[p(n)-1]:void 0)}),G(()=>Z(c()),()=>{x(s,u(c()))}),Ie(),fe();var _=P4(),v=ue(_);{var g=b=>{Nr(b,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(s)}})};ge(v,b=>{p(r)&&b(g)})}var h=F(v,2);{var m=b=>{Ro(b,{get linePoints(){return a()},get shape(){return p(s)}})};ge(h,b=>{p(n)>1&&b(m)})}var C=F(h,2);{var I=b=>{Nr(b,{get x(){return p(o).x},get y(){return p(o).y},get shape(){return p(s)}})};ge(C,b=>{p(o)&&b(I)})}N(t,_),le()}var W4=ne("<!> <!> <!>",1);function z4(t,e){ae(e,!1);const n=D(),r=D(),o=D();let s=U(e,"linePoints",8),a=U(e,"shape",12,ms);const c=4,u=.5;function _(k,$){const P=$.r??u,W=$.n??c,X=$.angle??0,J=rp(P,W,new Ge(0,0),!0,0),ce=(W+(k-X/360)*W%W)%W,Q=Math.floor(ce)%W,oe=Math.ceil(ce)%W;return J[Q].lerp(J[oe],ce%1).length()}function v(k){if(p(n)<=1)return 0;const $=s()[0],W=s()[1].subtract($).angle()/(2*Math.PI);return _(W,k)}function g(k){if(p(n)<=1)return 0;const $=s()[p(n)-1],W=s()[p(n)-2].subtract($).angle()/(2*Math.PI);return _(W,k)}function h(k){var P;const $=St.cloneDeep(k);return $.r=$.r||u,$.opacity=1,$.linePathOptions={shortenHead:v($),shortenTail:g($),bezierRounding:(P=$.linePathOptions)==null?void 0:P.bezierRounding},$}G(()=>Z(s()),()=>{x(n,s().length)}),G(()=>(p(n),Z(s())),()=>{x(r,p(n)>=0?s()[0]:void 0)}),G(()=>(p(n),Z(s())),()=>{x(o,p(n)>=0?s()[p(n)-1]:void 0)}),G(()=>Z(a()),()=>{a(h(a()))}),Ie(),fe();var m=W4(),C=ue(m);{var I=k=>{Pa(k,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return a()}})};ge(C,k=>{p(r)&&k(I)})}var b=F(C,2);{var w=k=>{Ro(k,{get linePoints(){return s()},get shape(){return a()}})};ge(b,k=>{p(n)>1&&k(w)})}var L=F(b,2);{var R=k=>{Pa(k,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return a()}})};ge(L,k=>{p(o)&&k(R)})}N(t,m),le()}var Y4=ne("<!> <!>",1);function sh(t,e){ae(e,!1);const n=D();let r=U(e,"linePoints",8),o=U(e,"shape",8,ms);function s(m){var b,w,L;const C=St.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=C.linePathOptions)==null?void 0:L.bezierRounding},C}function a(m){var b,w,L;const C=St.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=C.linePathOptions)==null?void 0:L.bezierRounding},C}G(()=>Z(r()),()=>{x(n,r().length>0?r()[0]:void 0)}),Ie(),fe();var c=Y4(),u=ue(c);{var _=m=>{var C=Xe(()=>s(o()));Ro(m,{get linePoints(){return r()},get shape(){return p(C)}})};ge(u,m=>{r().length>1&&m(_)})}var v=F(u,2);{var g=m=>{var C=Xe(()=>s(o()));Nr(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},h=m=>{var C=Ae(),I=ue(C);{var b=w=>{var L=Xe(()=>a(o()));Pa(w,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(L)}})};ge(I,w=>{p(n)&&w(b)},!0)}N(m,C)};ge(v,m=>{p(n)&&o().type===H.THERMO_WITH_CIRCLE?m(g):m(h,!1)})}N(t,c),le()}var j4=de('<g class="line-tool"><!></g>');function V4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D();let a=U(e,"tool",8);const c=hn(a().toolId,Gt)??ms;G(()=>Z(a()),()=>{x(n,Fa(a().cells))}),G(()=>Z(a()),()=>{x(r,a().shape??c)}),G(()=>(p(r),H),()=>{var h;x(o,((h=p(r))==null?void 0:h.type)||H.LINE)}),G(()=>p(r),()=>{var h;x(s,((h=p(r))==null?void 0:h.opacity)??.8)}),Ie(),fe();var u=j4(),_=K(u);{var v=h=>{Ro(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{var m=Ae(),C=ue(m);{var I=w=>{B4(w,{get linePoints(){return p(n)},get shape(){return p(r)}})},b=w=>{var L=Ae(),R=ue(L);{var k=P=>{z4(P,{get linePoints(){return p(n)},get shape(){return p(r)}})},$=P=>{var W=Ae(),X=ue(W);{var J=Q=>{sh(Q,{get linePoints(){return p(n)},get shape(){return p(r)}})},ce=Q=>{var oe=Ae(),pe=ue(oe);{var me=De=>{sh(De,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ee=De=>{Ro(De,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(pe,De=>{p(o)===H.THERMO_WITH_POLYGON?De(me):De(Ee,!1)},!0)}N(Q,oe)};ge(X,Q=>{p(o)===H.THERMO_WITH_CIRCLE?Q(J):Q(ce,!1)},!0)}N(P,W)};ge(R,P=>{p(o)===H.LINE_WITH_POLYGON_ENDS?P(k):P($,!1)},!0)}N(w,L)};ge(C,w=>{p(o)===H.LINE_WITH_CIRCLE_ENDS?w(I):w(b,!1)},!0)}N(h,m)};ge(_,h=>{p(o)===H.LINE?h(v):h(g,!1)})}Y(u),ee(()=>S(u,"opacity",p(s))),N(t,u),le()}var K4=de('<g class="cage-tool"><!></g>');function X4(t,e){ae(e,!1);const n=D();let r=U(e,"tool",8);const o=hn(r().toolId,Gt)??dd;G(()=>Z(r()),()=>{x(n,r().shape??o)}),Ie(),fe();var s=K4(),a=K(s);ip(a,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),Y(s),N(t,s),le()}var q4=ne("<!> <!> <!> <!>",1);function Z4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D(),c=D(),u=D(),_=D();let v=U(e,"tool",8);const g=hn(v().toolId,Gt)??SO,h=800,m=v().value;G(()=>Z(v()),()=>{x(n,v().shape??g)}),G(()=>p(n),()=>{x(r,p(n).inset??.15)}),G(()=>p(n),()=>{x(o,p(n).strokeWidth??.07)}),G(()=>p(n),()=>{x(s,p(n).fontColor??p(n).stroke??"black")}),G(()=>Z(v()),()=>{x(a,v().cells[v().cells.length-1])}),G(()=>Z(v()),()=>{x(c,v().cells2[v().cells2.length-1])}),G(()=>(p(a),p(r)),()=>{x(u,new Ge(p(a).c+1-p(r)-.05,p(a).r+1-p(r)-.05))}),G(()=>(p(c),p(r)),()=>{x(_,new Ge(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),Ie(),fe();var C=q4(),I=ue(C);Ha(I,{get cells(){return v().cells},get shape(){return p(n)}});var b=F(I,2);vs(b,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(s)},fontWeight:h});var w=F(b,2);Ha(w,{get cells(){return v().cells2},get shape(){return p(n)}});var L=F(w,2);vs(L,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(s)},fontWeight:h}),N(t,C),le()}var Q4=de('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function J4(t,e){var P;ae(e,!1);const n=D(),r=D(),o=D();let s=U(e,"tool",8);const a=s().cell,c=s().direction,u=Vh(a,c),_=Zn(a),v=hn(s().toolId,Gt)??xO,g=((P=p(n))==null?void 0:P.fontSize)??.5,h=.03;function m(W){return W.value&&W.value.length?W.value:"-"}function C(){const J=Zn(u).subtract(_).length(),ce={shortenHead:.3*J,shortenTail:.55*J};return Lu([a,u],ce)}const b=`outside-tool-arrow-marker-${crypto.randomUUID()}`;G(()=>Z(s()),()=>{x(n,s().shape??v)}),G(()=>p(n),()=>{var W;x(r,((W=p(n))==null?void 0:W.fontColor)??"var(--text-primary-color)")}),G(()=>p(n),()=>{var W;x(o,((W=p(n))==null?void 0:W.stroke)??"var(--text-primary-color)")}),Ie(),fe();var w=Q4(),L=K(w);Cl(L,{id:b,l:.07,strokeWidth:h,get stroke(){return p(o)}});var R=F(L);ee(()=>S(R,"d",C())),S(R,"stroke-width",h),S(R,"marker-end",`url(#${b??""})`);var k=F(R);S(k,"font-size",g);var $=K(k,!0);ee(()=>et($,m(s()))),Y(k),Y(w),ee(()=>{S(R,"stroke",p(o)),S(k,"x",_.x),S(k,"y",_.y),S(k,"fill",p(r))}),N(t,w),le()}var eF=ne("<!> <!> <!>",1);function tF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D(),a=D();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(b){const w=St.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}G(()=>Z(c()),()=>{x(n,c().length)}),G(()=>(p(n),Z(c())),()=>{x(r,p(n)>1&&c()[0].equals(c()[p(n)-1]))}),G(()=>(p(n),Z(c())),()=>{x(o,p(n)>=0?c()[0]:void 0)}),G(()=>(p(n),Z(c())),()=>{x(s,p(n)>=0?c()[p(n)-1]:void 0)}),G(()=>Z(u()),()=>{x(a,_(u()))}),Ie(),fe();var v=eF(),g=ue(v);Ro(g,{get linePoints(){return c()},get shape(){return u()}});var h=F(g,2);{var m=b=>{Nr(b,{get x(){return p(o).x},get y(){return p(o).y},get shape(){return p(a)}})};ge(h,b=>{!p(r)&&p(o)&&b(m)})}var C=F(h,2);{var I=b=>{Nr(b,{get x(){return p(s).x},get y(){return p(s).y},get shape(){return p(a)}})};ge(C,b=>{!p(r)&&p(s)&&b(I)})}N(t,v),le()}var nF=de('<g class="corner-line-tool"><!></g>');function rF(t,e){ae(e,!1);const n=D(),r=D(),o=D(),s=D();let a=U(e,"tool",8);const c=hn(a().toolId,Gt)??ms;G(()=>(Z(a()),Ge),()=>{x(n,a().coords.map(h=>new Ge(h.c,h.r)))}),G(()=>Z(a()),()=>{x(r,a().shape??c)}),G(()=>(p(r),H),()=>{var h;x(o,((h=p(r))==null?void 0:h.type)||H.LINE)}),G(()=>p(r),()=>{var h;x(s,((h=p(r))==null?void 0:h.opacity)??1)}),Ie(),fe();var u=nF(),_=K(u);{var v=h=>{tF(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{Ro(h,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(_,h=>{p(o)===H.MAZE_WALL?h(v):h(g,!1)})}Y(u),ee(()=>S(u,"opacity",p(s))),N(t,u),le()}var oF=de('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function iF(t,e){ae(e,!1);const n=rt(),r=()=>ve(gn,"$gridStore",n),o=()=>ve(ft,"$localConstraintsStore",n),s=()=>ve(qt,"$toolStore",n),a=()=>ve(fn,"$cellsStore",n),c=()=>ve(w$,"$cageToolsStore",n),u=()=>ve(E$,"$lineToolsStore",n),_=()=>ve(O$,"$cloneToolsStore",n),v=()=>ve(I$,"$cornerLineToolsStore",n),g=()=>ve(y$,"$outsideDirectionToolsStore",n),h=()=>ve(p$,"$edgeToolsStore",n),m=()=>ve(C$,"$cornerToolsStore",n),C=()=>ve(m$,"$centerCornerOrEdgeToolsStore",n),I=D(),b=D(),w=D();let L=U(e,"svgRef",12,null);function R(){for(const[Rt,Ne]of o().entries()){if(!fs(Rt))continue;if(Object.entries(Ne).some(([Re,xe])=>!Xt(xe.cell,p(b))))return!0}return!1}function k(Rt,Ne){const Ce=R(),Re=fs(Ne),xe=Ce||Re?1:.2,yt=-xe,ks=-xe,wl=Rt.nCols+2*xe,ho=Rt.nRows+2*xe;return{x:yt,y:ks,width:wl,height:ho}}function $(Rt){return`${Rt.x} ${Rt.y} ${Rt.width} ${Rt.height}`}G(()=>r(),()=>{x(I,r())}),G(()=>p(I),()=>{x(b,{nRows:p(I).nRows,nCols:p(I).nCols})}),G(()=>(p(b),s()),()=>{x(w,k(p(b),s()))}),Ie(),fe();var P=oF();ee(()=>S(P,"viewBox",$(p(w))));var W=K(P);p4(W,{get boundingBox(){return p(w)},get gridShape(){return p(b)}});var X=F(W);C4(X,{get gridShape(){return p(b)}});var J=F(X);g$(J,{get grid(){return r()}});var ce=F(J);X8(ce,{get gridShape(){return p(b)}});var Q=F(ce);lt(Q,5,a,At,(Rt,Ne)=>{TU(Rt,{get cell(){return p(Ne)}})}),Y(Q);var oe=F(Q);XU(oe,{});var pe=F(oe);nU(pe,{});var me=F(pe);eo(me,{get elements(){return c()},g_name:"cage-tools-layer",Component:X4});var Ee=F(me);eo(Ee,{get elements(){return u()},g_name:"line-tools-layer",Component:V4});var De=F(Ee);eo(De,{get elements(){return _()},g_name:"clone-tools-layer",Component:Z4});var st=F(De);Q8(st,{});var Se=F(st);h4(Se,{});var we=F(Se);u$(we,{});var vt=F(we);eo(vt,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:rF});var ct=F(vt);D$(ct,{get boundingBox(){return p(w)}});var Ln=F(ct);eo(Ln,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:J4});var Un=F(Ln);_$(Un,{get boundingBox(){return p(w)}});var Pr=F(Un);V8(Pr,{});var Qt=F(Pr);eo(Qt,{get elements(){return h()},g_name:"edge-tools-layer",Component:x4});var mr=F(Qt);eo(mr,{get elements(){return m()},g_name:"corner-tools-layer",Component:M4});var go=F(mr);eo(go,{get elements(){return C()},g_name:"center-corner-edge-tools-layer",Component:F4});var ir=F(go);VU(ir,{});var Fn=F(ir);lt(Fn,5,a,At,(Rt,Ne)=>{SU(Rt,{get cell(){return p(Ne)}})}),Y(Fn);var Bo=F(Fn);w4(Bo,{});var Br=F(Bo);a4(Br,{}),Y(P),No(P,Rt=>L(Rt),()=>L()),N(t,P),le()}function sF(t){return zL(t)?(Qw(),!0):!1}function aF(t){return YL(t)?(yv(),!0):!1}function lF(t){return jL(t)?(Lv(),!0):!1}function au(t){(sF(t)||aF(t)||lF(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var cF=ne('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function uF(t,e){ae(e,!1);const n=rt(),r=()=>ve(np,"$InputHandlerStore",n),o=()=>ve(di,"$svgRefStore",n),s=D();let a=D(null);function c(h){return m=>{h&&p(s)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===p(a))&&h(m)}}G(()=>r(),()=>{x(s,r())}),Ie();var u=cF();Me("keydown",Yc,function(...h){au==null||au.apply(this,h)});var _=Ag(()=>{var h;return c((h=p(s))==null?void 0:h.keyDown)});Me("keydown",Yc,function(...h){var m;(m=p(_))==null||m.apply(this,h)});var v=Ag(()=>{var h;return c((h=p(s))==null?void 0:h.keyUp)});Me("keyup",Yc,function(...h){var m;(m=p(v))==null||m.apply(this,h)});var g=K(u);iF(g,{get svgRef(){return Ih(),o()},set svgRef(h){ps(di,h)},$$legacy:!0}),Y(u),No(u,h=>x(a,h),()=>p(a)),Me("pointerdown",u,Xc(qn(h=>{var m;h.currentTarget.focus(),(m=p(s))==null||m.pointerDown(h)})),!0),Me("pointermove",u,Xc(qn(h=>{var m;h.currentTarget.focus(),(m=p(s))==null||m.pointerMove(h)})),!0),Me("pointerup",u,Xc(qn(h=>{var m;h.currentTarget.focus(),(m=p(s))==null||m.pointerUp(h)})),!0),N(t,u),le()}var dF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function _F(t){var e=dF();N(t,e)}var fF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function gF(t){var e=fF();N(t,e)}var hF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function vF(t){var e=hF();N(t,e)}var pF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function mF(t){var e=pF();N(t,e)}var CF=ne('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function EF(t,e){ae(e,!1);const n=rt(),r=()=>ve(mi,"$commandHistoryStore",n),o=()=>ve(bu,"$selectOnStore",n),s=D(),a=D();function c(){yv()}function u(){Lv()}function _(){console.log("check")}function v(){ps(bu,!o())}G(()=>r(),()=>{x(s,r()._undoStack.length===0)}),G(()=>r(),()=>{x(a,r()._redoStack.length===0)}),Ie(),fe();var g=CF(),h=K(g),m=K(h);mF(m),Y(h);var C=F(h,2),I=K(C);gF(I),Y(C);var b=F(C,2);b.disabled=!0;var w=K(b);_F(w),Y(b);var L=F(b,2),R=K(L);vF(R),Y(L),Y(g),ee(()=>{h.disabled=p(s),C.disabled=p(a),S(L,"aria-checked",o()),Ot(L,"active",o())}),Me("click",h,c),Me("click",C,u),Me("click",b,_),Me("click",L,v),N(t,g),le()}var IF=ne('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),bF=ne('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),wF=ne('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),OF=ne('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function yF(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),o=()=>ve($a,"$penColorStore",n),s=()=>ve(np,"$InputHandlerStore",n),a=D(),c=D(),u=[];let _=U(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let h=D(!1);function m(W){return W?g:v}function C(W){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(W)}function I(W){const X=W.currentTarget;if(!X)return;const J=X.getAttribute("aria-checked");x(h,J!=="true")}G(()=>r(),()=>{x(a,r().penToolActive)}),G(()=>r(),()=>{x(c,r().letterToolActive)}),Ie(),fe();var b=OF(),w=K(b);{var L=W=>{var X=Ae(),J=ue(X);lt(J,1,()=>v,At,(ce,Q)=>{var oe=IF(),pe=K(oe);Kt(pe);var me;xo(2),Y(oe),ee(()=>{S(oe,"data-value",p(Q)),Ot(oe,"active",o()===p(Q)),me!==(me=p(Q))&&(pe.value=(pe.__value=p(Q))==null?"":p(Q))}),Va(u,[],pe,()=>(p(Q),o()),Ee=>ps($a,Ee)),N(ce,oe)}),N(W,X)},R=W=>{var X=Ae(),J=ue(X);lt(J,1,()=>m(p(h)),At,(ce,Q)=>{var oe=bF(),pe=K(oe),me=K(pe,!0);Y(pe),xo(2),Y(oe),ee(()=>{Bw(oe,p(Q)),et(me,p(Q))}),Me("click",oe,function(...Ee){var De;(De=s()&&s().padClick)==null||De.apply(this,Ee)}),N(ce,oe)}),N(W,X)};ge(w,W=>{_()===d.PEN_TOOL&&p(a)?W(L):W(R,!1)})}var k=F(w,2);{var $=W=>{var X=wF();ee(()=>{S(X,"aria-checked",p(h)),Ot(X,"letter-checked",p(h)),Ot(X,"num-checked",!p(h))}),Me("click",X,I),N(W,X)};ge(k,W=>{p(c)&&C(_())&&W($)})}var P=F(k,2);Y(b),ee(()=>{Ot(b,"digit",_()===d.DIGIT),Ot(b,"center",_()===d.CENTER_PM),Ot(b,"corner",_()===d.CORNER_PM),Ot(b,"color",_()===d.HIGHLIGHTS),Ot(b,"pen",_()===d.PEN_TOOL),Ot(P,"letter-tool",p(c))}),Me("click",P,function(...W){var X;(X=s()&&s().padClick)==null||X.apply(this,W)}),N(t,b),le()}var LF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function AF(t){var e=LF();N(t,e)}var SF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function xF(t){var e=SF();N(t,e)}var NF=ne('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Zi(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),o=U(e,"value",8),s=U(e,"title",8,void 0);function a(){wu(o())}fe();var c=NF(),u=K(c);Kt(u);var _,v=F(u,2);ut(v,e,"default",{}),Y(c),ee(()=>{S(c,"title",s()),Ot(c,"active",o()===r()),_!==(_=o())&&(u.value=(u.__value=o())==null?"":o())}),Va(n,[],u,()=>(o(),r()),r),Me("change",u,a),N(t,c),le()}var TF=ne('<span aria-hidden="true">1</span>'),DF=ne('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),RF=ne('<span aria-hidden="true" style="font-size: 50%">123</span>'),kF=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),GF=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),MF=ne('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function $F(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n);let o=U(e,"selectedTool",12);fe();var s=MF(),a=K(s);Zi(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var C=TF();N(h,C)},$$slots:{default:!0},$$legacy:!0});var c=F(a,2);Zi(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var C=DF();N(h,C)},$$slots:{default:!0},$$legacy:!0});var u=F(c,2);Zi(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var C=RF();N(h,C)},$$slots:{default:!0},$$legacy:!0});var _=F(u,2);Zi(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var C=kF(),I=K(C);AF(I),Y(C),N(h,C)},$$slots:{default:!0},$$legacy:!0});var v=F(_,2);{var g=h=>{Zi(h,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,C)=>{var I=GF(),b=K(I);xF(b),Y(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(v,h=>{r().penToolActive&&h(g)})}Y(s),N(t,s),le()}var UF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function FF(t){var e=UF();N(t,e)}var HF=ne('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ts(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var o=HF(),s=K(o),a=K(s);ut(a,e,"default",{}),Y(s),Y(o),ee(()=>S(o,"title",n())),Me("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,o)}var PF=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),BF=ne('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function WF(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function o(){xv(),Ua(),n(!1)}fe(),Hr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(s){n(s)},children:(s,a)=>{var c=BF(),u=F(K(c),2);ul(u,{children:(_,v)=>{var g=PF(),h=ue(g),m=F(h,2);Me("click",h,o),Me("click",m,r),N(_,g)},$$slots:{default:!0}}),Y(c),N(s,c)},$$slots:{default:!0},$$legacy:!0}),le()}var zF=ne("<!> <!>",1);function YF(t){let e=D(!1);function n(){x(e,!0)}var r=zF(),o=ue(r);Ts(o,{title:"Restart",clickCb:n,children:(a,c)=>{FF(a)},$$slots:{default:!0}});var s=F(o,2);WF(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var jF=ne('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Qi(t,e){let n=U(e,"title",8);var r=jF(),o=K(r),s=K(o,!0);Y(o);var a=F(o,2);ut(a,e,"default",{}),Y(r),ee(()=>et(s,n())),N(t,r)}var VF=ne('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function dn(t,e){let n=U(e,"description",8);var r=VF(),o=K(r),s=K(o,!0);Y(o);var a=F(o,2),c=K(a);ut(c,e,"default",{}),Y(a),Y(r),ee(()=>et(s,n())),N(t,r)}var KF=ne('<div class="shortcut svelte-1cgt5u5"> </div>');function tn(t,e){let n=U(e,"shortcut",8);var r=KF(),o=K(r,!0);Y(r),ee(()=>et(o,n())),N(t,r)}var XF=ne("<p></p>"),qF=ne("<!> <!> <!> <!>",1),ZF=ne("<!> or <!>",1),QF=ne("<!> <!> <!> <!> <!> <!> <!> <!>",1),JF=ne("<!> <!>",1),e6=ne('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function t6(t,e){let n=U(e,"showModal",12,!1);Hr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var s=e6(),a=K(s);Qi(a,{title:"Setting Instructions",children:(g,h)=>{var m=XF();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",N(g,m)},$$slots:{default:!0}});var c=F(a,2);Qi(c,{title:"General",children:(g,h)=>{dn(g,{description:"Toggle Darkmode",children:(m,C)=>{tn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=F(c,2);Qi(u,{title:"Selection",children:(g,h)=>{var m=qF(),C=ue(m);dn(C,{description:"Select cells",children:(L,R)=>{tn(L,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=F(C,2);dn(I,{description:"Add to current selection",children:(L,R)=>{tn(L,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=F(I,2);dn(b,{description:"Remove from current selection",children:(L,R)=>{tn(L,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=F(b,2);dn(w,{description:"Add or remove from current selection",children:(L,R)=>{tn(L,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var _=F(u,2);Qi(_,{title:"Change Tool",children:(g,h)=>{var m=QF(),C=ue(m);dn(C,{description:"Cycle Tool",children:(P,W)=>{tn(P,{shortcut:"Space"})},$$slots:{default:!0}});var I=F(C,2);dn(I,{description:"Change to Digit Tool",children:(P,W)=>{tn(P,{shortcut:"Z"})},$$slots:{default:!0}});var b=F(I,2);dn(b,{description:"Change to Corner Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"X"})},$$slots:{default:!0}});var w=F(b,2);dn(w,{description:"Change to Center Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"C"})},$$slots:{default:!0}});var L=F(w,2);dn(L,{description:"Change to Highlights Tool",children:(P,W)=>{tn(P,{shortcut:"V"})},$$slots:{default:!0}});var R=F(L,2);dn(R,{description:"Quickshift To Corner Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"Shift"})},$$slots:{default:!0}});var k=F(R,2);dn(k,{description:"Quickshift To Center Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"Ctrl"})},$$slots:{default:!0}});var $=F(k,2);dn($,{description:"Quickshift To Highlights Tool",children:(P,W)=>{var X=ZF(),J=ue(X);tn(J,{shortcut:"Shift + Ctrl"});var ce=F(J,2);tn(ce,{shortcut:"Alt"}),N(P,X)},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var v=F(_,2);Qi(v,{title:"Undo/Redo",children:(g,h)=>{var m=JF(),C=ue(m);dn(C,{description:"Undo",children:(b,w)=>{tn(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=F(C,2);dn(I,{description:"Redo",children:(b,w)=>{tn(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}}),Y(s),N(r,s)},$$slots:{default:!0},$$legacy:!0})}var n6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function r6(t){var e=n6();N(t,e)}var o6=ne("<!> <!>",1);function i6(t){let e=D(!1);function n(){x(e,!0)}var r=o6(),o=ue(r);Ts(o,{title:"Info",clickCb:n,children:(a,c)=>{r6(a)},$$slots:{default:!0}});var s=F(o,2);t6(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var s6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function a6(t){var e=s6();N(t,e)}var l6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function c6(t){var e=l6();N(t,e)}function u6(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function s(){n()?o():r(),x(e,!p(e))}Ts(t,{title:"Fullscreen",clickCb:s,children:(a,c)=>{var u=Ae(),_=ue(u);{var v=h=>{c6(h)},g=h=>{a6(h)};ge(_,h=>{p(e)?h(v):h(g,!1)})}N(a,u)},$$slots:{default:!0}})}function ap(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),o=U(e,"options",8);fe();var s=Ae(),a=ue(s);{var c=u=>{var _=Ae(),v=ue(_);Eh(v,()=>r()[n().type],(g,h)=>{h(g,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,C)=>{var I=Ae(),b=ue(I);{var w=R=>{Ba(R,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},L=R=>{var k=iw();ee(()=>et(k,n().raw)),N(R,k)};ge(b,R=>{"tokens"in n()&&n().tokens?R(w):R(L,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,_)};ge(a,u=>{r()[n().type]&&u(c)})}N(t,s),le()}function Ba(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),o=U(e,"options",8);var s=Ae(),a=ue(s);{var c=u=>{var _=Ae(),v=ue(_);lt(v,1,n,At,(g,h)=>{ap(g,{get token(){return p(h)},get renderers(){return r()},get options(){return o()}})}),N(u,_)};ge(a,u=>{n()&&u(c)})}N(t,s)}function lp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function cp(t){return t.startsWith("/")||t.startsWith("#")}function d6(t,e){return e.slug(t).replace(/--+/g,"-")}function _6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;let s=D();G(()=>(Z(n()),Z(r())),()=>{x(s,d6(n().text,r().slugger))}),Ie(),fe();var a=Ae(),c=ue(a);return Oh(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;ee(()=>v=Sh(u,v,{id:p(s)},void 0,u.namespaceURI===ku,u.nodeName.includes("-")));var g=Ae(),h=ue(g);ut(h,e,"default",{}),N(_,g)}),N(t,a),qe(e,"renderers",o),le({renderers:o})}var f6=ne("<blockquote><!></blockquote>");function g6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=f6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}function h6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),o=U(e,"renderers",8),s=D();G(()=>Z(n()),()=>{x(s,n().ordered?"ol":"ul")}),Ie(),fe();var a=Ae(),c=ue(a);Oh(c,()=>p(s),!1,(u,_)=>{let v;ee(()=>v=Sh(u,v,{start:n().start||1},void 0,u.namespaceURI===ku,u.nodeName.includes("-")));var g=Ae(),h=ue(g);lt(h,1,()=>n().items,At,(m,C)=>{var I=Xe(()=>({...p(C)}));ap(m,{get token(){return p(I)},get options(){return r()},get renderers(){return o()}})}),N(_,g)}),N(t,a),le()}var v6=ne("<li><!></li>");function p6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=v6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var m6=ne("<br>");function C6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=m6();return N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var E6=ne("<pre><code> </code></pre>");function I6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;fe();var s=E6(),a=K(s),c=K(a,!0);return Y(a),Y(s),ee(()=>{zw(a,`lang-${n().lang}`),et(c,n().text)}),N(t,s),qe(e,"options",r),qe(e,"renderers",o),le({options:r,renderers:o})}var b6=ne("<code> </code>");function w6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;fe();var s=b6(),a=K(s,!0);return ee(()=>et(a,n().raw.slice(1,n().raw.length-1))),Y(s),N(t,s),qe(e,"options",r),qe(e,"renderers",o),le({options:r,renderers:o})}var O6=ne('<th scope="col"><!></th>'),y6=ne("<td><!></td>"),L6=ne("<tr></tr>"),A6=ne("<table><thead><tr></tr></thead><tbody></tbody></table>");function S6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),o=U(e,"renderers",8);fe();var s=A6(),a=K(s),c=K(a);lt(c,5,()=>n().header,At,(_,v)=>{var g=O6(),h=K(g);Ba(h,{get tokens(){return p(v).tokens},get options(){return r()},get renderers(){return o()}}),Y(g),N(_,g)}),Y(c),Y(a);var u=F(a);lt(u,5,()=>n().rows,At,(_,v)=>{var g=L6();lt(g,5,()=>p(v),At,(h,m)=>{var C=y6(),I=K(C);Ba(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return o()}}),Y(C),N(h,C)}),Y(g),N(_,g)}),Y(u),Y(s),N(t,s),le()}function x6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;fe();var s=Ae(),a=ue(s);return Hw(a,()=>n().text),N(t,s),qe(e,"options",r),qe(e,"renderers",o),le({options:r,renderers:o})}var N6=ne("<p><!></p>");function T6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=N6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var D6=ne("<a><!></a>");function R6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;fe();var s=D6();ee(()=>S(s,"href",cp(n().href)?lp(r().baseUrl,n().href):n().href));var a=K(s);return ut(a,e,"default",{}),Y(s),ee(()=>S(s,"title",n().title)),N(t,s),qe(e,"renderers",o),le({renderers:o})}function k6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=Ae(),a=ue(s);return ut(a,e,"default",{}),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var G6=ne("<dfn><!></dfn>");function M6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=G6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var $6=ne("<del><!></del>");function U6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=$6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var F6=ne("<em><!></em>");function H6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=F6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var P6=ne("<hr>");function B6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=P6();return N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var W6=ne("<strong><!></strong>");function z6(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=W6(),a=K(s);return ut(a,e,"default",{}),Y(s),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}var Y6=ne('<img class="markdown-image svelte-z38cge">');function j6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;fe();var s=Y6();return ee(()=>S(s,"src",cp(n().href)?lp(r().baseUrl,n().href):n().href)),ee(()=>{S(s,"title",n().title),S(s,"alt",n().text)}),N(t,s),qe(e,"renderers",o),le({renderers:o})}function ah(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var s=Ae(),a=ue(s);return ut(a,e,"default",{}),N(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",o),le({token:n,options:r,renderers:o})}const V6=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,K6=Object.hasOwnProperty;class X6{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=q6(e,n===!0);const s=o;for(;K6.call(r.occurrences,o);)r.occurrences[s]++,o=s+"-"+r.occurrences[s];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function q6(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(V6,"").replace(/ /g,"-"))}function Pd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Po=Pd();function up(t){Po=t}const dp=/[&<>"']/,Z6=new RegExp(dp.source,"g"),_p=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Q6=new RegExp(_p.source,"g"),J6={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lh=t=>J6[t];function kn(t,e){if(e){if(dp.test(t))return t.replace(Z6,lh)}else if(_p.test(t))return t.replace(Q6,lh);return t}const eH=/(^|[^\[])\^/g;function Et(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(eH,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}function ch(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ds={exec:()=>null};function uh(t,e){const n=t.replace(/\|/g,(s,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function Ji(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function tH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function dh(t,e,n,r){const o=e.href,s=e.title?kn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:s,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:s,text:kn(a)}}function nH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const s=o.match(/^\s+/);if(s===null)return o;const[a]=s;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}class Wa{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Po}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Ji(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=nH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=Ji(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Ji(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Ji(n[0],`
`).split(`
`),o="",s="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const v=u.join(`
`),g=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${v}`:v,s=s?`${s}
${g}`:g;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,o=o.substring(0,o.length-C.raw.length)+b.raw,s=s.substring(0,s.length-C.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,o=o.substring(0,o.length-m.raw.length)+b.raw,s=s.substring(0,s.length-C.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:a,text:s}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,s={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",v="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),h=e.split(`
`,1)[0],m=!g.trim(),C=0;if(this.options.pedantic?(C=2,v=g.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,v=g.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(h)&&(_+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),L=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),$=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const P=e.split(`
`,1)[0];let W;if(h=P,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),W=h):W=h.replace(/\t/g,"    "),R.test(h)||k.test(h)||$.test(h)||w.test(h)||L.test(h))break;if(W.search(/[^ ]/)>=C||!h.trim())v+=`
`+W.slice(C);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||R.test(g)||k.test(g)||L.test(g))break;v+=`
`+h}!m&&!h.trim()&&(m=!0),_+=P+`
`,e=e.substring(P.length+1),g=W.slice(C)}}s.loose||(c?s.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(v),I&&(b=I[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:_,task:!!I,checked:b,loose:!1,text:v,tokens:[]}),s.raw+=_}s.items[s.items.length-1].raw=s.items[s.items.length-1].raw.trimEnd(),s.items[s.items.length-1].text=s.items[s.items.length-1].text.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const _=s.items[u].tokens.filter(g=>g.type==="space"),v=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));s.loose=v}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=uh(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),s=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of s)a.rows.push(uh(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:kn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Ji(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=tH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);a&&(o=a[1],s=a[3])}else s=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),dh(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),s=n[o.toLowerCase()];if(!s){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return dh(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...o[0]].length-1;let c,u,_=a,v=0;const g=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(o=g.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){_+=u;continue}else if((o[5]||o[6])&&a%3&&!((a+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const h=[...o[0]][0].length,m=e.slice(0,a+o.index+h+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),s=/^ /.test(r)&&/ $/.test(r);return o&&s&&(r=r.substring(1,r.length-1)),r=kn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=kn(n[1]),o="mailto:"+r):(r=kn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,s;if(n[2]==="@")o=kn(n[0]),s="mailto:"+o;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);o=kn(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=kn(n[0]),{type:"text",raw:n[0],text:r}}}}const rH=/^(?:[ \t]*(?:\n|$))+/,oH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,iH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ds=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,sH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fp=/(?:[*+-]|\d{1,9}[.)])/,gp=Et(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,fp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Bd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,aH=/^[^\n]+/,Wd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,lH=Et(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Wd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cH=Et(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fp).getRegex(),bl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,uH=Et("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zd).replace("tag",bl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hp=Et(Bd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bl).getRegex(),dH=Et(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hp).getRegex(),Yd={blockquote:dH,code:oH,def:lH,fences:iH,heading:sH,hr:Ds,html:uH,lheading:gp,list:cH,newline:rH,paragraph:hp,table:ds,text:aH},_h=Et("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bl).getRegex(),_H={...Yd,table:_h,paragraph:Et(Bd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_h).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bl).getRegex()},fH={...Yd,html:Et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Et(Bd).replace("hr",Ds).replace("heading",` *#{1,6} *[^
]`).replace("lheading",gp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,pp=/^( {2,}|\\)\n(?!\s*$)/,hH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rs="\\p{P}\\p{S}",vH=Et(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Rs).getRegex(),pH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,mH=Et(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Rs).getRegex(),CH=Et("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Rs).getRegex(),EH=Et("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Rs).getRegex(),IH=Et(/\\([punct])/,"gu").replace(/punct/g,Rs).getRegex(),bH=Et(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),wH=Et(zd).replace("(?:-->|$)","-->").getRegex(),OH=Et("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",wH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),za=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,yH=Et(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",za).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),mp=Et(/^!?\[(label)\]\[(ref)\]/).replace("label",za).replace("ref",Wd).getRegex(),Cp=Et(/^!?\[(ref)\](?:\[\])?/).replace("ref",Wd).getRegex(),LH=Et("reflink|nolink(?!\\()","g").replace("reflink",mp).replace("nolink",Cp).getRegex(),jd={_backpedal:ds,anyPunctuation:IH,autolink:bH,blockSkip:pH,br:pp,code:gH,del:ds,emStrongLDelim:mH,emStrongRDelimAst:CH,emStrongRDelimUnd:EH,escape:vp,link:yH,nolink:Cp,punctuation:vH,reflink:mp,reflinkSearch:LH,tag:OH,text:hH,url:ds},AH={...jd,link:Et(/^!?\[(label)\]\((.*?)\)/).replace("label",za).getRegex(),reflink:Et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",za).getRegex()},Au={...jd,escape:Et(vp).replace("])","~|])").getRegex(),url:Et(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},SH={...Au,br:Et(pp).replace("{2,}","*").getRegex(),text:Et(Au.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xa={normal:Yd,gfm:_H,pedantic:fH},es={normal:jd,gfm:Au,breaks:SH,pedantic:AH};class Mn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Po,this.options.tokenizer=this.options.tokenizer||new Wa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:xa.normal,inline:es.normal};this.options.pedantic?(n.block=xa.pedantic,n.inline=es.pedantic):this.options.gfm&&(n.block=xa.gfm,this.options.breaks?n.inline=es.breaks:n.inline=es.gfm),this.tokenizer.rules=n}static get rules(){return{block:xa,inline:es}}static lex(e,n){return new Mn(n).lex(e)}static lexInline(e,n){return new Mn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+o.raw,s.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+o.raw,s.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){s=n[n.length-1],r&&(s==null?void 0:s.type)==="paragraph"?(s.raw+=`
`+o.raw,s.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(o),r=a.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+o.raw,s.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,s,a=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},g),typeof h=="number"&&h>=0&&(v=Math.min(v,h))}),v<1/0&&v>=0&&(s=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(s)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Ya{constructor(e){he(this,"options");he(this,"parser");this.options=e||Po}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const o=(a=(n||"").match(/^\S*/))==null?void 0:a[0],s=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+kn(o)+'">'+(r?s:kn(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:kn(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let o="";for(let c=0;c<e.items.length;c++){const u=e.items[c];o+=this.listitem(u)}const s=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+s+a+`>
`+o+"</"+s+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let s=0;s<e.header.length;s++)r+=this.tablecell(e.header[s]);n+=this.tablerow({text:r});let o="";for(let s=0;s<e.rows.length;s++){const a=e.rows[s];r="";for(let c=0;c<a.length;c++)r+=this.tablecell(a[c]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),s=ch(e);if(s===null)return o;e=s;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+o+"</a>",a}image({href:e,title:n,text:r}){const o=ch(e);if(o===null)return r;e=o;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Vd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Xn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Po,this.options.renderer=this.options.renderer||new Ya,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Vd}static parse(e,n){return new Xn(n).parse(e)}static parseInline(e,n){return new Xn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const s=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=s,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=s;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const s=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=this.options.extensions.renderers[s.type].call({parser:this},s);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=c||"";continue}}const a=s;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class _s{constructor(e){he(this,"options");he(this,"block");this.options=e||Po}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Mn.lex:Mn.lexInline}provideParser(){return this.block?Xn.parse:Xn.parseInline}}he(_s,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class xH{constructor(...e){he(this,"defaults",Pd());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Xn);he(this,"Renderer",Ya);he(this,"TextRenderer",Vd);he(this,"Lexer",Mn);he(this,"Tokenizer",Wa);he(this,"Hooks",_s);this.use(...e)}walkTokens(e,n){var o,s;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(s=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&s[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=n.renderers[s.name];a?n.renderers[s.name]=function(...c){let u=s.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[s.level];a?a.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),o.extensions=n),r.renderer){const s=this.defaults.renderer||new Ya(this.defaults);for(const a in r.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=s[c];s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g||""}}o.renderer=s}if(r.tokenizer){const s=this.defaults.tokenizer||new Wa(this.defaults);for(const a in r.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=s[c];s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g}}o.tokenizer=s}if(r.hooks){const s=this.defaults.hooks||new _s;for(const a in r.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=s[c];_s.passThroughHooks.has(a)?s[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(s,v)).then(h=>_.call(s,h));const g=u.call(s,v);return _.call(s,g)}:s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g}}o.hooks=s}if(r.walkTokens){const s=this.defaults.walkTokens,a=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),s&&(u=u.concat(s.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Mn.lex(e,n??this.defaults)}parser(e,n){return Xn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const s={...o},a={...this.defaults,...s},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Mn.lex:Mn.lexInline,_=a.hooks?a.hooks.provideParser():e?Xn.parse:Xn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(v=>u(v,a)).then(v=>a.hooks?a.hooks.processAllTokens(v):v).then(v=>a.walkTokens?Promise.all(this.walkTokens(v,a.walkTokens)).then(()=>v):v).then(v=>_(v,a)).then(v=>a.hooks?a.hooks.postprocess(v):v).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let v=u(r,a);a.hooks&&(v=a.hooks.processAllTokens(v)),a.walkTokens&&this.walkTokens(v,a.walkTokens);let g=_(v,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+kn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const ko=new xH;function Ct(t,e){return ko.parse(t,e)}Ct.options=Ct.setOptions=function(t){return ko.setOptions(t),Ct.defaults=ko.defaults,up(Ct.defaults),Ct};Ct.getDefaults=Pd;Ct.defaults=Po;Ct.use=function(...t){return ko.use(...t),Ct.defaults=ko.defaults,up(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return ko.walkTokens(t,e)};Ct.parseInline=ko.parseInline;Ct.Parser=Xn;Ct.parser=Xn.parse;Ct.Renderer=Ya;Ct.TextRenderer=Vd;Ct.Lexer=Mn;Ct.lexer=Mn.lex;Ct.Tokenizer=Wa;Ct.Hooks=_s;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Xn.parse;Mn.lex;function NH(t){return new Mn().lex(t)}const TH=()=>({heading:_6,blockquote:g6,list:h6,list_item:p6,br:C6,code:I6,codespan:w6,table:S6,html:x6,paragraph:T6,link:R6,text:k6,def:M6,del:U6,em:H6,hr:B6,strong:z6,image:j6,space:ah,escape:ah}),DH=()=>({baseUrl:"/",slugger:new X6});function RH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},bh(()=>{console.warn=t})}function Ep(t,e){ae(e,!1),RH();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),o=U(e,"renderers",24,()=>({})),s=D(),a=D(),c=D();G(()=>(Z(n()),Z(o()),Z(r())),()=>{x(s,NH(n())),x(a,{...TH(),...o()}),x(c,{...DH(),...r()})}),Ie(),fe(),Ba(t,{get tokens(){return p(s)},get renderers(){return p(a)},get options(){return p(c)}}),le()}var kH=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),GH=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),MH=ne('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function $H(t,e){ae(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n),o=D();let s=U(e,"showModal",12,!1);function a(u){return u?Ga(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}G(()=>r(),()=>{x(o,r())}),Ie(),fe(),Hr(t,{title:"Rules",get showModal(){return s()},set showModal(u){s(u)},children:(u,_)=>{var v=MH(),g=K(v),h=K(g,!0);Y(g);var m=F(g,2),C=K(m);ee(()=>et(C,`by ${a(p(o).authors)??""}`)),Y(m);var I=F(m,2),b=K(I),w=Xe(()=>c(p(o).ruleset));Ep(b,{get source(){return p(w)}}),Y(I);var L=F(I,2);{var R=P=>{var W=kH(),X=F(ue(W),2);ee(()=>S(X,"href",p(o).ctcUrl)),N(P,W)};ge(L,P=>{var W,X;(X=(W=p(o))==null?void 0:W.ctcUrl)!=null&&X.length&&P(R)})}var k=F(L,2);{var $=P=>{var W=GH(),X=F(ue(W),2);ee(()=>S(X,"href",p(o).ctcYoutubeUrl)),N(P,W)};ge(k,P=>{var W,X;(X=(W=p(o))==null?void 0:W.ctcYoutubeUrl)!=null&&X.length&&P($)})}Y(v),ee(()=>{var P;return et(h,((P=p(o))==null?void 0:P.title)||"Puzzle")}),N(u,v)},$$slots:{default:!0},$$legacy:!0}),le()}var UH=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function FH(t){var e=UH();N(t,e)}var HH=ne("<!> <!>",1);function PH(t){let e=D(!1);function n(){x(e,!0)}var r=HH(),o=ue(r);Ts(o,{title:"Rules",clickCb:n,children:(a,c)=>{FH(a)},$$slots:{default:!0}});var s=F(o,2);$H(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var BH=ne("<!> <!>",1);function WH(t){let e=D(!1);function n(){x(e,!0)}var r=BH(),o=ue(r);Ts(o,{title:"Settings",clickCb:n,children:(a,c)=>{Wv(a)},$$slots:{default:!0}});var s=F(o,2);zv(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),N(t,r)}var zH=ne('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function YH(t){var e=zH(),n=K(e);WH(n);var r=F(n,2);PH(r);var o=F(r,2);u6(o);var s=F(o,2);i6(s);var a=F(s,2);YF(a),Y(e),N(t,e)}var jH=ne('<div class="entry-panel-wrapper svelte-1dr0lb4"><div class="puzzle-info svelte-1dr0lb4"><div class="puzzle-header svelte-1dr0lb4"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1dr0lb4"><!></div></div>  <div class="entry-panel svelte-1dr0lb4"><!> <div class="entry-subpanel1 svelte-1dr0lb4"><!> <!></div> <!></div></div>');function VH(t,e){ae(e,!1);const n=rt(),r=()=>ve(di,"$svgRefStore",n),o=()=>ve(Dr,"$puzzleMetaStore",n),s=()=>ve(qt,"$toolStore",n),a=D(),c=D();function u(){r().focus()}function _(Q){return Q?Ga(Q," & ",", "):"Anonymous"}function v(Q){return Q&&Q.length?Q:"Normal sudoku rules apply."}G(()=>o(),()=>{x(a,o().title??"Sudoku")}),G(()=>o(),()=>{x(c,_(o().authors))}),Ie(),fe();var g=jH(),h=K(g),m=K(h),C=K(m),I=K(C,!0);Y(C);var b=F(C,2),w=K(b);Y(b),Y(m);var L=F(m,2),R=K(L),k=Xe(()=>v(o().ruleset));Ep(R,{get source(){return p(k)}}),Y(L),Y(h);var $=F(h,2),P=K($);YH(P);var W=F(P,2),X=K(W);yF(X,{get selectedTool(){return s()}});var J=F(X,2);$F(J,{get selectedTool(){return Ih(),s()},set selectedTool(Q){ps(qt,Q)},$$legacy:!0}),Y(W);var ce=F(W,2);EF(ce,{}),Y($),Y(g),ee(()=>{et(I,p(a)),et(w,`by ${p(c)??""}`)}),Me("click",$,qn(()=>{u()})),N(t,g),le()}var KH=ne('<div class="App svelte-aer8a2"><header></header> <main class="svelte-aer8a2"><div class="game-wrapper svelte-aer8a2"><div class="game svelte-aer8a2"><!> <!> <!></div></div></main> <footer class="svelte-aer8a2"><div class="footer-text svelte-aer8a2"></div></footer></div>');function oP(t,e){ae(e,!1);const n=rt(),r=()=>ve(qw,"$darkModeStore",n),o=()=>ve(Qa,"$gameModeStore",n),s=D(),a=D();bh(async()=>{const I=window.location.href;try{await sO({workerURL:`${I}minizinc-worker.js`,wasmURL:`${I}minizinc.wasm`,dataURL:`${I}minizinc.data`})}catch(b){const w="Failed to initialize MiniZinc: "+b.message;console.log(w)}}),G(()=>r(),()=>{x(s,r()?"dark":"light")}),G(()=>o(),()=>{x(a,o())}),Ie(),fe();var c=KH(),u=F(K(c),2),_=K(u),v=K(_),g=K(v);{var h=I=>{Y8(I)};ge(g,I=>{p(a)===hi.SETTING&&I(h)})}var m=F(g,2);uF(m,{});var C=F(m,2);VH(C,{}),Y(v),Y(_),Y(u),xo(2),Y(c),ee(()=>S(c,"data-theme",p(s))),N(t,c),le()}export{oP as component,rP as universal};
