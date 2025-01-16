var Bb=Object.defineProperty;var Wb=(t,e,n)=>e in t?Bb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>Wb(t,typeof e!="symbol"?e+"":e,n);import{b as ru,e as Yb,a as N,n as oe,t as ie,c as Ae,d as zb}from"../chunks/disclose-version.c9nfQR10.js";import{i as fe}from"../chunks/legacy.BeICcgj8.js";import{A as nh,b as wu,h as bt,G as Ji,F as eo,O as rh,Y as ih,ad as Vb,ae as gg,U as Jo,c as dr,au as ws,af as Ou,a as Hs,ag as oh,C as iu,av as hg,aw as jb,H as qb,ax as Xb,d as yu,B as Lu,V as Kb,L as Zb,I as ou,ay as Au,az as xu,a1 as Qb,a7 as vg,aA as ah,aB as Jb,aC as ew,R as sh,W as tw,S as nw,E as rw,aD as Su,aE as iw,ac as ow,aF as aw,aG as sw,ai as Nu,M as lh,aH as lw,j as cw,a9 as uw,v as q,w as H,p as te,x as U,t as Z,e as ne,l as p,as as Ke,aI as G,$ as S,aJ as pe,aK as D,m as Q,f as ue,aL as dw,aM as Ci,aN as Hc,o as pg}from"../chunks/runtime.3UijFPFW.js";import{d as _w,p as F,s as qe,i as ge,e as _a,f as ve,b as Ei,c as ch,m as uh}from"../chunks/props.CJazo4uA.js";import{i as fw,a as gw,b as hw,c as vw,d as pw,e as mw,n as Cw,f as Ew,l as Du,g as De,s as nt,r as Iw}from"../chunks/render.7_-GRy3G.js";import{d as fn,w as Ft,g as st}from"../chunks/index.HRmy8yV3.js";import{a as bw,o as dh}from"../chunks/index-client.CTQVjhPh.js";function gt(t,e){return e}function ww(t,e,n,r){for(var i=[],a=e.length,s=0;s<a;s++)jb(e[s].e,i,!0);var c=a>0&&i.length===0&&n!==null;if(c){var u=n.parentNode;qb(u),u.append(n),r.clear(),qr(t,e[0].prev,e[a-1].next)}Xb(i,()=>{for(var f=0;f<a;f++){var g=e[f];c||(r.delete(g.k),qr(t,g.prev,g.next)),yu(g.e,!c)}})}function We(t,e,n,r,i,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&ah)!==0;if(u){var f=t;s=bt?Ji(Lu(f)):f.appendChild(nh())}bt&&eo();var g=null,h=!1;wu(()=>{var v=n(),m=rh(v)?v:v==null?[]:ih(v),C=m.length;if(h&&C===0)return;h=C===0;let I=!1;if(bt){var b=s.data===Vb;b!==(C===0)&&(s=gg(),Ji(s),Jo(!1),I=!0)}if(bt){for(var w=null,A,R=0;R<C;R++){if(dr.nodeType===8&&dr.data===Kb){s=dr,I=!0,Jo(!1);break}var M=m[R],$=r(M,R);A=_h(dr,c,w,null,M,$,R,i,e),c.items.set($,A),w=A}C>0&&Ji(gg())}if(!bt){var W=Zb;Ow(m,c,s,i,e,(W.f&ws)!==0,r)}a!==null&&(C===0?g?Ou(g):g=Hs(()=>a(s)):g!==null&&oh(g,()=>{g=null})),I&&Jo(!0),n()}),bt&&(s=dr)}function Ow(t,e,n,r,i,a,s,c){var Ce,Se,lt,xe;var u=(i&Jb)!==0,f=(i&(Au|xu))!==0,g=t.length,h=e.items,v=e.first,m=v,C,I=null,b,w=[],A=[],R,M,$,W;if(u)for(W=0;W<g;W+=1)R=t[W],M=s(R,W),$=h.get(M),$!==void 0&&((Ce=$.a)==null||Ce.measure(),(b??(b=new Set)).add($));for(W=0;W<g;W+=1){if(R=t[W],M=s(R,W),$=h.get(M),$===void 0){var Y=m?m.e.nodes_start:n;I=_h(Y,e,I,I===null?e.first:I.next,R,M,W,r,i),h.set(M,I),w=[],A=[],m=I.next;continue}if(f&&yw($,R,W,i),$.e.f&ws&&(Ou($.e),u&&((Se=$.a)==null||Se.unfix(),(b??(b=new Set)).delete($))),$!==m){if(C!==void 0&&C.has($)){if(w.length<A.length){var X=A[0],re;I=X.prev;var de=w[0],ee=w[w.length-1];for(re=0;re<w.length;re+=1)mg(w[re],X,n);for(re=0;re<A.length;re+=1)C.delete(A[re]);qr(e,de.prev,ee.next),qr(e,I,de),qr(e,ee,X),m=X,I=ee,W-=1,w=[],A=[]}else C.delete($),mg($,m,n),qr(e,$.prev,$.next),qr(e,$,I===null?e.first:I.next),qr(e,I,$),I=$;continue}for(w=[],A=[];m!==null&&m.k!==M;)(a||!(m.e.f&ws))&&(C??(C=new Set)).add(m),A.push(m),m=m.next;if(m===null)continue;$=m}w.push($),I=$,m=$.next}if(m!==null||C!==void 0){for(var le=C===void 0?[]:ih(C);m!==null;)(a||!(m.e.f&ws))&&le.push(m),m=m.next;var Ie=le.length;if(Ie>0){var me=i&ah&&g===0?n:null;if(u){for(W=0;W<Ie;W+=1)(lt=le[W].a)==null||lt.measure();for(W=0;W<Ie;W+=1)(xe=le[W].a)==null||xe.fix()}ww(e,le,me,h)}}u&&ou(()=>{var we;if(b!==void 0)for($ of b)(we=$.a)==null||we.apply()}),iu.first=e.first&&e.first.e,iu.last=I&&I.e}function yw(t,e,n,r){r&Au&&hg(t.v,e),r&xu?hg(t.i,n):t.i=n}function _h(t,e,n,r,i,a,s,c,u,f){var g=(u&Au)!==0,h=(u&ew)===0,v=g?h?Qb(i):vg(i):i,m=u&xu?vg(s):s,C={i:m,v,k:a,a:null,e:null,prev:n,next:r};try{return C.e=Hs(()=>c(t,v,m),bt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function mg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=sh(a);i.before(a),a=s}}function qr(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Lw(t,e,n,r,i){var a=t,s="",c;wu(()=>{if(s===(s=e()??"")){bt&&eo();return}c!==void 0&&(yu(c),c=void 0),s!==""&&(c=Hs(()=>{if(bt){dr.data;for(var u=eo(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=sh(u);if(u===null)throw tw(),nw;ru(dr,f),a=Ji(u);return}var g=s+"",h=Yb(g);ru(Lu(h),h.lastChild),a.before(h)}))})}function dt(t,e,n,r,i){var c;bt&&eo();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function fh(t,e,n,r,i,a){let s=bt;bt&&eo();var c,u,f=null;bt&&dr.nodeType===1&&(f=dr,eo());var g=bt?dr:t,h;wu(()=>{const v=e()||null;var m=v==="svg"?Su:null;v!==c&&(h&&(v===null?oh(h,()=>{h=null,u=null}):v===u?Ou(h):yu(h)),v&&v!==u&&(h=Hs(()=>{if(f=bt?f:m?document.createElementNS(m,v):document.createElement(v),ru(f,f),r){bt&&fw(v)&&f.append(document.createComment(""));var C=bt?Lu(f):f.appendChild(nh());bt&&(C===null?Jo(!1):Ji(C)),r(f,C)}iu.nodes_end=f,g.before(f)})),c=v,c&&(u=c))},rw),s&&(Jo(!0),Ji(g))}function gh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=gh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Aw(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=gh(t))&&(r&&(r+=" "),r+=e);return r}function xw(t){return typeof t=="object"?Aw(t):t??""}function jt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;x(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;x(t,"checked",null),t.checked=i}}};t.__on_r=n,sw(n),gw()}}function Sw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function hh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function Nw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function x(t,e,n,r){var i=t.__attributes??(t.__attributes={});bt&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[iw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ph(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function vh(t,e,n,r,i=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var f in e)f in n||(n[f]=null);n.class&&(n.class=xw(n.class));var g=ph(t),h=t.__attributes??(t.__attributes={});for(const w in n){let A=n[w];if(u&&w==="value"&&A==null){t.value=t.__value="",c[w]=A;continue}var v=c[w];if(A!==v){c[w]=A;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const R={},M="$$"+w;let $=w.slice(2);var C=Ew($);if(hw($)&&($=$.slice(0,-7),R.capture=!0),!C&&v){if(A!=null)continue;t.removeEventListener($,c[M],R),c[M]=null}if(A!=null)if(C)t[`__${$}`]=A,pw([$]);else{let W=function(Y){c[w].call(this,Y)};c[M]=vw($,t,W,R)}else C&&(t[`__${$}`]=void 0)}else if(w==="style"&&A!=null)t.style.cssText=A+"";else if(w==="autofocus")mw(t,!!A);else if(w==="__value"||w==="value"&&A!=null)t.value=t[w]=t.__value=A;else if(w==="selected"&&u)Nw(t,A);else{var I=w;i||(I=Cw(I));var b=I==="defaultValue"||I==="defaultChecked";if(A==null&&!a&&!b)if(h[w]=null,I==="value"||I==="checked"){let R=t;if(I==="value"){let M=R.defaultValue;R.removeAttribute(I),R.defaultValue=M}else{let M=R.defaultChecked;R.removeAttribute(I),R.defaultChecked=M}}else t.removeAttribute(w);else b||g.includes(I)&&(a||typeof A!="string")?t[I]=A:typeof A!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||x(t,I,A))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var Cg=new Map;function ph(t){var e=Cg.get(t.nodeName);if(e)return e;Cg.set(t.nodeName,e=[]);for(var n,r=t,i=Element.prototype;i!==r;){n=aw(r);for(var a in n)n[a].set&&e.push(a);r=ow(r)}return e}function Fn(t,e,n){var r=t.__className,i=mh(e);bt&&t.getAttribute("class")===i?t.__className=i:(r!==i||bt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Dw(t,e,n){var r=t.__className,i=mh(e);bt&&t.className===i?t.__className=i:(r!==i||bt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function mh(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=lw();Du(t,"input",i=>{var a=i?t.defaultValue:t.value;if(a=Bc(t)?Wc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||cw(e)==null&&t.value)&&n(Bc(t)?Wc(t.value):t.value),Nu(()=>{var i=e();Bc(t)&&i===Wc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Pc=new Set;function Ps(t,e,n,r,i=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Du(n,"change",()=>{var f=n.__value;a&&(f=Eg(s,f,n.checked)),i(f)},()=>i(a?[]:null)),Nu(()=>{var f=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}a?(f=f||[],n.checked=f.includes(n.__value)):n.checked=_w(n.__value,f)}),lh(()=>{var f=s.indexOf(n);f!==-1&&s.splice(f,1)}),Pc.has(s)||(Pc.add(s),ou(()=>{s.sort((f,g)=>f.compareDocumentPosition(g)===4?-1:1),Pc.delete(s)})),ou(()=>{if(c){var f;if(a)f=Eg(s,f,n.checked);else{var g=s.find(h=>h.checked);f=g==null?void 0:g.__value}i(f)}})}function Eg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Bc(t){var e=t.type;return e==="number"||e==="range"}function Wc(t){return t===""?null:+t}function Tw(t,e,n=e){Du(t,"change",()=>{n(t.files)}),Nu(()=>{t.files=e()})}function Qe(t,e,n){var r=uw(t,e);r&&r.set&&(t[e]=n,lh(()=>{t[e]=null}))}function Rw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Kn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Yc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function kw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=rh(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}const Gw=!0,pH=Object.freeze(Object.defineProperty({__proto__:null,prerender:Gw},Symbol.toStringTag,{value:"Module"}));function Mw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=Ft(Mw()),$w=fn(Wt,t=>t.darkMode);function Fw(t){Wt.update(e=>({...e,darkMode:t}))}function Uw(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function Hw(t){Wt.update(e=>({...e,penToolActive:t}))}function Pw(t){Wt.update(e=>({...e,letterToolActive:t}))}function Bw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function Ww(t){Wt.update(e=>({...e,checkConflicts:t}))}function Yw(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function zw(t){Wt.update(e=>({...e,hideFog:t}))}function Vw(t){Wt.update(e=>({...e,showSolution:t}))}const Ig=encodeURIComponent("4.3.5");let ur={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const pi=[];let zc;function Ko(){if(!zc){const e=`importScripts(${JSON.stringify(ur.workerURL)});`;zc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(zc);t.postMessage({wasmURL:ur.wasmURL?ur.wasmURL.toString():new URL(`./minizinc.wasm?version=${Ig}`,ur.workerURL).toString(),dataURL:ur.dataURL?ur.dataURL.toString():new URL(`./minizinc.data?version=${Ig}`,ur.workerURL).toString()}),pi.push({worker:t,runCount:0})}function Ch(){for(;pi.length<ur.numWorkers;)Ko()}async function jw(t){if(ur={...ur,...t},pi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Ch(),await Promise.race(pi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Tu{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Tu;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Ch();const i=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:c}=pi.pop();return s.postMessage({jsonStream:!0,files:a,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],i.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?pi.push({worker:a,runCount:s}):(a.terminate(),Ko()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;a.onmessage=f=>{switch(f.data.type){case"error":c.push(f.data);break;case"interface":u=f.data;break;case"exit":s<10?pi.push({worker:a,runCount:s}):(a.terminate(),Ko()),f.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const a=["-c","--fzn",i],{worker:s}=this._run(a,n.options,[i]);Ko();let c={},u=!1,f=null;return s.onmessage=g=>{if(c[g.data.type])for(const h of c[g.data.type])h(g.data);switch(g.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":f||(f=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,h){c[g]?c[g].add(h):c[g]=new Set([h])},off(g,h){c[g]&&c[g].delete(h)},then(g,h){const v=m=>{if(m.code===0)g(m.outputFiles[i]);else{const C=f?{message:f.message,...m}:m;if(!h)throw C;h(C)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Ko();let a=null,s={},c=!1,u=null,f={},g="UNKNOWN";return i.onmessage=h=>{if(s[h.data.type])for(const v of s[h.data.type])v(h.data);switch(h.data.type){case"exit":i.terminate(),c=!0,s={};break;case"error":a||(a=h.data);break;case"statistics":f={...f,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),s.exit)for(const h of s.exit)h({type:"exit",code:null});s={}}},on(h,v){s[h]?s[h].add(v):s[h]=new Set([v])},off(h,v){s[h]&&s[h].delete(v)},then(h,v){const m=C=>{if(C.code===0)h({status:g,solution:u,statistics:f});else{const I=a?{message:a.message,...C}:C;if(!v)throw I;v(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var ao=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(ao||{}),Ru=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Ru||{}),Eh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Eh||{}),Ih=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Ih||{}),bh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(bh||{}),wh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.DIRECTED_PATH="Directed Path",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(wh||{}),Bs=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t))(Bs||{}),ku=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(ku||{}),Gu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t))(Gu||{}),Mu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.MAZE_WALL="Maze Wall",t.ONE_WAY_DOOR="One Way Door",t))(Mu||{}),$u=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))($u||{}),Fu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Fu||{}),Uu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(Uu||{}),Hu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Hu||{}),Pu=(t=>(t.CLONE_REGION="Clone Region",t))(Pu||{}),Bu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Bu||{}),Wu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Wu||{}),Yu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Yu||{}),zu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(zu||{}),Vu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Vu||{}),Oh=(t=>(t.PEN_TOOL="Pen Tool",t))(Oh||{});const ju={...Eh,...Ih,...bh,...wh},yh={...Bs,...ku,...Gu,...Mu,...$u,...Fu,...Uu,...Hu,...Pu,...Bu,...Wu,...Yu,...zu},_={...Ru,...ju,...yh,...Vu,...Oh};var T=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(T||{});function qw(t){return Object.values(ju).includes(t)}function Xw(t){return Object.values(yh).includes(t)}function qu(t){return Object.values(ku).includes(t)||t===_.COSMETIC_CELL_ARROW}function Xu(t){return Object.values(Gu).includes(t)||t===_.COSMETIC_CELL_MULTI_ARROW}function Kw(t){return Object.values(Bs).includes(t)||qu(t)||Xu(t)||t===_.COSMETIC_CELL_SHAPE||t===_.COSMETIC_CELL_ARROW||t===_.COSMETIC_CELL_MULTI_ARROW}function Ku(t){return Object.values(Mu).includes(t)||t===_.COSMETIC_EDGE}function Lh(t){return Object.values($u).includes(t)||t===_.COSMETIC_CORNER}function Zu(t){return Object.values(Fu).includes(t)||t===_.COSMETIC_LINE||t===_.COSMETIC_LINE_WITH_POLYGON_ENDS||t===_.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Qu(t){return Object.values(Uu).includes(t)||t===_.COSMETIC_ARROW}function Ju(t){return Object.values(Hu).includes(t)||t===_.COSMETIC_CAGE}function Ah(t){return Object.values(Yu).includes(t)}function xh(t){return Object.values(Pu).includes(t)}function la(t){const e=Object.values(Bu),n=Object.values(Wu);return e.includes(t)||n.includes(t)||t===_.COSMETIC_OUTSIDE_DIRECTION}function Zw(t){return Object.values(zu).includes(t)}function Qw(t){return Object.values(Vu).includes(t)}function ed(t){return Object.values(Ru).includes(t)}const Jw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],eO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Sh(t){for(const e of Object.values(_))if(e===t)return e}function Nh(t,e){return Object.values(e).includes(t)}class to extends Map{constructor(){super()}setConstraint(e,n){return qw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new to;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new to;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=Sh(r);a!==void 0&&Nh(a,ju)&&typeof i=="boolean"&&i&&n.setConstraint(a,i)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function Dh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function je(t,e){return t.r===e.r&&t.c===e.c}function tO(t,e){return{r:t.r+e.r,c:t.c+e.c}}function nO(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ws(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!je(t,e)}function rO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ls(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function qt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ys(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function iO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Th(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function oO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const aO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function td(t){t=t%8;const e=aO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const sO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function zs(t){const e=sO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Rh(t,e){const n=zs(e);return tO(t,n)}function kh(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Gh(t,e,n=!1){const r=t.some(a=>je(a,e)),i=n?t.some(a=>Ws(a,e)):t.some(a=>rO(a,e));if(!r&&i){const a=[...t,e];return Ls(a),a}return t}function ps(t){return`R${t.r+1}C${t.c+1}`}function nd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var lO=Zo.exports,bg;function cO(){return bg||(bg=1,function(t,e){(function(){var n,r="4.17.21",i=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,g="__lodash_placeholder__",h=1,v=2,m=4,C=1,I=2,b=1,w=2,A=4,R=8,M=16,$=32,W=64,Y=128,X=256,re=512,de=30,ee="...",le=800,Ie=16,me=1,Ce=2,Se=3,lt=1/0,xe=9007199254740991,we=17976931348623157e292,_t=NaN,ct=4294967295,Un=ct-1,Lt=ct>>>1,Ln=[["ary",Y],["bind",b],["bindKey",w],["curry",R],["curryRight",M],["flip",re],["partial",$],["partialRight",W],["rearg",X]],Zt="[object Arguments]",vr="[object Array]",Jn="[object AsyncFunction]",pr="[object Boolean]",ar="[object Date]",yo="[object DOMException]",Mr="[object Error]",Ri="[object Function]",$e="[object GeneratorFunction]",be="[object Map]",Ge="[object Number]",Me="[object Null]",St="[object Object]",$d="[object Promise]",ap="[object Proxy]",Lo="[object RegExp]",er="[object Set]",Ao="[object String]",xa="[object Symbol]",sp="[object Undefined]",xo="[object WeakMap]",lp="[object WeakSet]",So="[object ArrayBuffer]",ki="[object DataView]",Cl="[object Float32Array]",El="[object Float64Array]",Il="[object Int8Array]",bl="[object Int16Array]",wl="[object Int32Array]",Ol="[object Uint8Array]",yl="[object Uint8ClampedArray]",Ll="[object Uint16Array]",Al="[object Uint32Array]",cp=/\b__p \+= '';/g,up=/\b(__p \+=) '' \+/g,dp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fd=/&(?:amp|lt|gt|quot|#39);/g,Ud=/[&<>"']/g,_p=RegExp(Fd.source),fp=RegExp(Ud.source),gp=/<%-([\s\S]+?)%>/g,hp=/<%([\s\S]+?)%>/g,Hd=/<%=([\s\S]+?)%>/g,vp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pp=/^\w*$/,mp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xl=/[\\^$.*+?()[\]{}|]/g,Cp=RegExp(xl.source),Sl=/^\s+/,Ep=/\s/,Ip=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,bp=/\{\n\/\* \[wrapped with (.+)\] \*/,wp=/,? & /,Op=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,yp=/[()=,{}\[\]\/\s]/,Lp=/\\(\\)?/g,Ap=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pd=/\w*$/,xp=/^[-+]0x[0-9a-f]+$/i,Sp=/^0b[01]+$/i,Np=/^\[object .+?Constructor\]$/,Dp=/^0o[0-7]+$/i,Tp=/^(?:0|[1-9]\d*)$/,Rp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Sa=/($^)/,kp=/['\n\r\u2028\u2029\\]/g,Na="\\ud800-\\udfff",Gp="\\u0300-\\u036f",Mp="\\ufe20-\\ufe2f",$p="\\u20d0-\\u20ff",Bd=Gp+Mp+$p,Wd="\\u2700-\\u27bf",Yd="a-z\\xdf-\\xf6\\xf8-\\xff",Fp="\\xac\\xb1\\xd7\\xf7",Up="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Hp="\\u2000-\\u206f",Pp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",zd="A-Z\\xc0-\\xd6\\xd8-\\xde",Vd="\\ufe0e\\ufe0f",jd=Fp+Up+Hp+Pp,Nl="['’]",Bp="["+Na+"]",qd="["+jd+"]",Da="["+Bd+"]",Xd="\\d+",Wp="["+Wd+"]",Kd="["+Yd+"]",Zd="[^"+Na+jd+Xd+Wd+Yd+zd+"]",Dl="\\ud83c[\\udffb-\\udfff]",Yp="(?:"+Da+"|"+Dl+")",Qd="[^"+Na+"]",Tl="(?:\\ud83c[\\udde6-\\uddff]){2}",Rl="[\\ud800-\\udbff][\\udc00-\\udfff]",Gi="["+zd+"]",Jd="\\u200d",e_="(?:"+Kd+"|"+Zd+")",zp="(?:"+Gi+"|"+Zd+")",t_="(?:"+Nl+"(?:d|ll|m|re|s|t|ve))?",n_="(?:"+Nl+"(?:D|LL|M|RE|S|T|VE))?",r_=Yp+"?",i_="["+Vd+"]?",Vp="(?:"+Jd+"(?:"+[Qd,Tl,Rl].join("|")+")"+i_+r_+")*",jp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",qp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",o_=i_+r_+Vp,Xp="(?:"+[Wp,Tl,Rl].join("|")+")"+o_,Kp="(?:"+[Qd+Da+"?",Da,Tl,Rl,Bp].join("|")+")",Zp=RegExp(Nl,"g"),Qp=RegExp(Da,"g"),kl=RegExp(Dl+"(?="+Dl+")|"+Kp+o_,"g"),Jp=RegExp([Gi+"?"+Kd+"+"+t_+"(?="+[qd,Gi,"$"].join("|")+")",zp+"+"+n_+"(?="+[qd,Gi+e_,"$"].join("|")+")",Gi+"?"+e_+"+"+t_,Gi+"+"+n_,qp,jp,Xd,Xp].join("|"),"g"),em=RegExp("["+Jd+Na+Bd+Vd+"]"),tm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rm=-1,At={};At[Cl]=At[El]=At[Il]=At[bl]=At[wl]=At[Ol]=At[yl]=At[Ll]=At[Al]=!0,At[Zt]=At[vr]=At[So]=At[pr]=At[ki]=At[ar]=At[Mr]=At[Ri]=At[be]=At[Ge]=At[St]=At[Lo]=At[er]=At[Ao]=At[xo]=!1;var wt={};wt[Zt]=wt[vr]=wt[So]=wt[ki]=wt[pr]=wt[ar]=wt[Cl]=wt[El]=wt[Il]=wt[bl]=wt[wl]=wt[be]=wt[Ge]=wt[St]=wt[Lo]=wt[er]=wt[Ao]=wt[xa]=wt[Ol]=wt[yl]=wt[Ll]=wt[Al]=!0,wt[Mr]=wt[Ri]=wt[xo]=!1;var im={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},om={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},am={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lm=parseFloat,cm=parseInt,a_=typeof ms=="object"&&ms&&ms.Object===Object&&ms,um=typeof self=="object"&&self&&self.Object===Object&&self,zt=a_||um||Function("return this")(),Gl=e&&!e.nodeType&&e,ai=Gl&&!0&&t&&!t.nodeType&&t,s_=ai&&ai.exports===Gl,Ml=s_&&a_.process,Hn=function(){try{var V=ai&&ai.require&&ai.require("util").types;return V||Ml&&Ml.binding&&Ml.binding("util")}catch{}}(),l_=Hn&&Hn.isArrayBuffer,c_=Hn&&Hn.isDate,u_=Hn&&Hn.isMap,d_=Hn&&Hn.isRegExp,__=Hn&&Hn.isSet,f_=Hn&&Hn.isTypedArray;function An(V,J,K){switch(K.length){case 0:return V.call(J);case 1:return V.call(J,K[0]);case 2:return V.call(J,K[0],K[1]);case 3:return V.call(J,K[0],K[1],K[2])}return V.apply(J,K)}function dm(V,J,K,ye){for(var Ve=-1,ft=V==null?0:V.length;++Ve<ft;){var Ut=V[Ve];J(ye,Ut,K(Ut),V)}return ye}function Pn(V,J){for(var K=-1,ye=V==null?0:V.length;++K<ye&&J(V[K],K,V)!==!1;);return V}function _m(V,J){for(var K=V==null?0:V.length;K--&&J(V[K],K,V)!==!1;);return V}function g_(V,J){for(var K=-1,ye=V==null?0:V.length;++K<ye;)if(!J(V[K],K,V))return!1;return!0}function $r(V,J){for(var K=-1,ye=V==null?0:V.length,Ve=0,ft=[];++K<ye;){var Ut=V[K];J(Ut,K,V)&&(ft[Ve++]=Ut)}return ft}function Ta(V,J){var K=V==null?0:V.length;return!!K&&Mi(V,J,0)>-1}function $l(V,J,K){for(var ye=-1,Ve=V==null?0:V.length;++ye<Ve;)if(K(J,V[ye]))return!0;return!1}function xt(V,J){for(var K=-1,ye=V==null?0:V.length,Ve=Array(ye);++K<ye;)Ve[K]=J(V[K],K,V);return Ve}function Fr(V,J){for(var K=-1,ye=J.length,Ve=V.length;++K<ye;)V[Ve+K]=J[K];return V}function Fl(V,J,K,ye){var Ve=-1,ft=V==null?0:V.length;for(ye&&ft&&(K=V[++Ve]);++Ve<ft;)K=J(K,V[Ve],Ve,V);return K}function fm(V,J,K,ye){var Ve=V==null?0:V.length;for(ye&&Ve&&(K=V[--Ve]);Ve--;)K=J(K,V[Ve],Ve,V);return K}function Ul(V,J){for(var K=-1,ye=V==null?0:V.length;++K<ye;)if(J(V[K],K,V))return!0;return!1}var gm=Hl("length");function hm(V){return V.split("")}function vm(V){return V.match(Op)||[]}function h_(V,J,K){var ye;return K(V,function(Ve,ft,Ut){if(J(Ve,ft,Ut))return ye=ft,!1}),ye}function Ra(V,J,K,ye){for(var Ve=V.length,ft=K+(ye?1:-1);ye?ft--:++ft<Ve;)if(J(V[ft],ft,V))return ft;return-1}function Mi(V,J,K){return J===J?xm(V,J,K):Ra(V,v_,K)}function pm(V,J,K,ye){for(var Ve=K-1,ft=V.length;++Ve<ft;)if(ye(V[Ve],J))return Ve;return-1}function v_(V){return V!==V}function p_(V,J){var K=V==null?0:V.length;return K?Bl(V,J)/K:_t}function Hl(V){return function(J){return J==null?n:J[V]}}function Pl(V){return function(J){return V==null?n:V[J]}}function m_(V,J,K,ye,Ve){return Ve(V,function(ft,Ut,It){K=ye?(ye=!1,ft):J(K,ft,Ut,It)}),K}function mm(V,J){var K=V.length;for(V.sort(J);K--;)V[K]=V[K].value;return V}function Bl(V,J){for(var K,ye=-1,Ve=V.length;++ye<Ve;){var ft=J(V[ye]);ft!==n&&(K=K===n?ft:K+ft)}return K}function Wl(V,J){for(var K=-1,ye=Array(V);++K<V;)ye[K]=J(K);return ye}function Cm(V,J){return xt(J,function(K){return[K,V[K]]})}function C_(V){return V&&V.slice(0,w_(V)+1).replace(Sl,"")}function xn(V){return function(J){return V(J)}}function Yl(V,J){return xt(J,function(K){return V[K]})}function No(V,J){return V.has(J)}function E_(V,J){for(var K=-1,ye=V.length;++K<ye&&Mi(J,V[K],0)>-1;);return K}function I_(V,J){for(var K=V.length;K--&&Mi(J,V[K],0)>-1;);return K}function Em(V,J){for(var K=V.length,ye=0;K--;)V[K]===J&&++ye;return ye}var Im=Pl(im),bm=Pl(om);function wm(V){return"\\"+sm[V]}function Om(V,J){return V==null?n:V[J]}function $i(V){return em.test(V)}function ym(V){return tm.test(V)}function Lm(V){for(var J,K=[];!(J=V.next()).done;)K.push(J.value);return K}function zl(V){var J=-1,K=Array(V.size);return V.forEach(function(ye,Ve){K[++J]=[Ve,ye]}),K}function b_(V,J){return function(K){return V(J(K))}}function Ur(V,J){for(var K=-1,ye=V.length,Ve=0,ft=[];++K<ye;){var Ut=V[K];(Ut===J||Ut===g)&&(V[K]=g,ft[Ve++]=K)}return ft}function ka(V){var J=-1,K=Array(V.size);return V.forEach(function(ye){K[++J]=ye}),K}function Am(V){var J=-1,K=Array(V.size);return V.forEach(function(ye){K[++J]=[ye,ye]}),K}function xm(V,J,K){for(var ye=K-1,Ve=V.length;++ye<Ve;)if(V[ye]===J)return ye;return-1}function Sm(V,J,K){for(var ye=K+1;ye--;)if(V[ye]===J)return ye;return ye}function Fi(V){return $i(V)?Dm(V):gm(V)}function tr(V){return $i(V)?Tm(V):hm(V)}function w_(V){for(var J=V.length;J--&&Ep.test(V.charAt(J)););return J}var Nm=Pl(am);function Dm(V){for(var J=kl.lastIndex=0;kl.test(V);)++J;return J}function Tm(V){return V.match(kl)||[]}function Rm(V){return V.match(Jp)||[]}var km=function V(J){J=J==null?zt:Ui.defaults(zt.Object(),J,Ui.pick(zt,nm));var K=J.Array,ye=J.Date,Ve=J.Error,ft=J.Function,Ut=J.Math,It=J.Object,Vl=J.RegExp,Gm=J.String,Bn=J.TypeError,Ga=K.prototype,Mm=ft.prototype,Hi=It.prototype,Ma=J["__core-js_shared__"],$a=Mm.toString,mt=Hi.hasOwnProperty,$m=0,O_=function(){var o=/[^.]+$/.exec(Ma&&Ma.keys&&Ma.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Fa=Hi.toString,Fm=$a.call(It),Um=zt._,Hm=Vl("^"+$a.call(mt).replace(xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ua=s_?J.Buffer:n,Hr=J.Symbol,Ha=J.Uint8Array,y_=Ua?Ua.allocUnsafe:n,Pa=b_(It.getPrototypeOf,It),L_=It.create,A_=Hi.propertyIsEnumerable,Ba=Ga.splice,x_=Hr?Hr.isConcatSpreadable:n,Do=Hr?Hr.iterator:n,si=Hr?Hr.toStringTag:n,Wa=function(){try{var o=_i(It,"defineProperty");return o({},"",{}),o}catch{}}(),Pm=J.clearTimeout!==zt.clearTimeout&&J.clearTimeout,Bm=ye&&ye.now!==zt.Date.now&&ye.now,Wm=J.setTimeout!==zt.setTimeout&&J.setTimeout,Ya=Ut.ceil,za=Ut.floor,jl=It.getOwnPropertySymbols,Ym=Ua?Ua.isBuffer:n,S_=J.isFinite,zm=Ga.join,Vm=b_(It.keys,It),Ht=Ut.max,Qt=Ut.min,jm=ye.now,qm=J.parseInt,N_=Ut.random,Xm=Ga.reverse,ql=_i(J,"DataView"),To=_i(J,"Map"),Xl=_i(J,"Promise"),Pi=_i(J,"Set"),Ro=_i(J,"WeakMap"),ko=_i(It,"create"),Va=Ro&&new Ro,Bi={},Km=fi(ql),Zm=fi(To),Qm=fi(Xl),Jm=fi(Pi),e1=fi(Ro),ja=Hr?Hr.prototype:n,Go=ja?ja.valueOf:n,D_=ja?ja.toString:n;function y(o){if(kt(o)&&!Xe(o)&&!(o instanceof ot)){if(o instanceof Wn)return o;if(mt.call(o,"__wrapped__"))return Rf(o)}return new Wn(o)}var Wi=function(){function o(){}return function(l){if(!Nt(l))return{};if(L_)return L_(l);o.prototype=l;var d=new o;return o.prototype=n,d}}();function qa(){}function Wn(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:gp,evaluate:hp,interpolate:Hd,variable:"",imports:{_:y}},y.prototype=qa.prototype,y.prototype.constructor=y,Wn.prototype=Wi(qa.prototype),Wn.prototype.constructor=Wn;function ot(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function t1(){var o=new ot(this.__wrapped__);return o.__actions__=pn(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=pn(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=pn(this.__views__),o}function n1(){if(this.__filtered__){var o=new ot(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function r1(){var o=this.__wrapped__.value(),l=this.__dir__,d=Xe(o),E=l<0,O=d?o.length:0,L=h0(0,O,this.__views__),k=L.start,P=L.end,j=P-k,ae=E?P:k-1,se=this.__iteratees__,_e=se.length,Ee=0,Ne=Qt(j,this.__takeCount__);if(!d||!E&&O==j&&Ne==j)return tf(o,this.__actions__);var He=[];e:for(;j--&&Ee<Ne;){ae+=l;for(var et=-1,Pe=o[ae];++et<_e;){var it=se[et],at=it.iteratee,Dn=it.type,ln=at(Pe);if(Dn==Ce)Pe=ln;else if(!ln){if(Dn==me)continue e;break e}}He[Ee++]=Pe}return He}ot.prototype=Wi(qa.prototype),ot.prototype.constructor=ot;function li(o){var l=-1,d=o==null?0:o.length;for(this.clear();++l<d;){var E=o[l];this.set(E[0],E[1])}}function i1(){this.__data__=ko?ko(null):{},this.size=0}function o1(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function a1(o){var l=this.__data__;if(ko){var d=l[o];return d===u?n:d}return mt.call(l,o)?l[o]:n}function s1(o){var l=this.__data__;return ko?l[o]!==n:mt.call(l,o)}function l1(o,l){var d=this.__data__;return this.size+=this.has(o)?0:1,d[o]=ko&&l===n?u:l,this}li.prototype.clear=i1,li.prototype.delete=o1,li.prototype.get=a1,li.prototype.has=s1,li.prototype.set=l1;function mr(o){var l=-1,d=o==null?0:o.length;for(this.clear();++l<d;){var E=o[l];this.set(E[0],E[1])}}function c1(){this.__data__=[],this.size=0}function u1(o){var l=this.__data__,d=Xa(l,o);if(d<0)return!1;var E=l.length-1;return d==E?l.pop():Ba.call(l,d,1),--this.size,!0}function d1(o){var l=this.__data__,d=Xa(l,o);return d<0?n:l[d][1]}function _1(o){return Xa(this.__data__,o)>-1}function f1(o,l){var d=this.__data__,E=Xa(d,o);return E<0?(++this.size,d.push([o,l])):d[E][1]=l,this}mr.prototype.clear=c1,mr.prototype.delete=u1,mr.prototype.get=d1,mr.prototype.has=_1,mr.prototype.set=f1;function Cr(o){var l=-1,d=o==null?0:o.length;for(this.clear();++l<d;){var E=o[l];this.set(E[0],E[1])}}function g1(){this.size=0,this.__data__={hash:new li,map:new(To||mr),string:new li}}function h1(o){var l=ss(this,o).delete(o);return this.size-=l?1:0,l}function v1(o){return ss(this,o).get(o)}function p1(o){return ss(this,o).has(o)}function m1(o,l){var d=ss(this,o),E=d.size;return d.set(o,l),this.size+=d.size==E?0:1,this}Cr.prototype.clear=g1,Cr.prototype.delete=h1,Cr.prototype.get=v1,Cr.prototype.has=p1,Cr.prototype.set=m1;function ci(o){var l=-1,d=o==null?0:o.length;for(this.__data__=new Cr;++l<d;)this.add(o[l])}function C1(o){return this.__data__.set(o,u),this}function E1(o){return this.__data__.has(o)}ci.prototype.add=ci.prototype.push=C1,ci.prototype.has=E1;function nr(o){var l=this.__data__=new mr(o);this.size=l.size}function I1(){this.__data__=new mr,this.size=0}function b1(o){var l=this.__data__,d=l.delete(o);return this.size=l.size,d}function w1(o){return this.__data__.get(o)}function O1(o){return this.__data__.has(o)}function y1(o,l){var d=this.__data__;if(d instanceof mr){var E=d.__data__;if(!To||E.length<i-1)return E.push([o,l]),this.size=++d.size,this;d=this.__data__=new Cr(E)}return d.set(o,l),this.size=d.size,this}nr.prototype.clear=I1,nr.prototype.delete=b1,nr.prototype.get=w1,nr.prototype.has=O1,nr.prototype.set=y1;function T_(o,l){var d=Xe(o),E=!d&&gi(o),O=!d&&!E&&zr(o),L=!d&&!E&&!O&&ji(o),k=d||E||O||L,P=k?Wl(o.length,Gm):[],j=P.length;for(var ae in o)(l||mt.call(o,ae))&&!(k&&(ae=="length"||O&&(ae=="offset"||ae=="parent")||L&&(ae=="buffer"||ae=="byteLength"||ae=="byteOffset")||wr(ae,j)))&&P.push(ae);return P}function R_(o){var l=o.length;return l?o[ac(0,l-1)]:n}function L1(o,l){return ls(pn(o),ui(l,0,o.length))}function A1(o){return ls(pn(o))}function Kl(o,l,d){(d!==n&&!rr(o[l],d)||d===n&&!(l in o))&&Er(o,l,d)}function Mo(o,l,d){var E=o[l];(!(mt.call(o,l)&&rr(E,d))||d===n&&!(l in o))&&Er(o,l,d)}function Xa(o,l){for(var d=o.length;d--;)if(rr(o[d][0],l))return d;return-1}function x1(o,l,d,E){return Pr(o,function(O,L,k){l(E,O,d(O),k)}),E}function k_(o,l){return o&&lr(l,Bt(l),o)}function S1(o,l){return o&&lr(l,Cn(l),o)}function Er(o,l,d){l=="__proto__"&&Wa?Wa(o,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):o[l]=d}function Zl(o,l){for(var d=-1,E=l.length,O=K(E),L=o==null;++d<E;)O[d]=L?n:Dc(o,l[d]);return O}function ui(o,l,d){return o===o&&(d!==n&&(o=o<=d?o:d),l!==n&&(o=o>=l?o:l)),o}function Yn(o,l,d,E,O,L){var k,P=l&h,j=l&v,ae=l&m;if(d&&(k=O?d(o,E,O,L):d(o)),k!==n)return k;if(!Nt(o))return o;var se=Xe(o);if(se){if(k=p0(o),!P)return pn(o,k)}else{var _e=Jt(o),Ee=_e==Ri||_e==$e;if(zr(o))return of(o,P);if(_e==St||_e==Zt||Ee&&!O){if(k=j||Ee?{}:Of(o),!P)return j?a0(o,S1(k,o)):o0(o,k_(k,o))}else{if(!wt[_e])return O?o:{};k=m0(o,_e,P)}}L||(L=new nr);var Ne=L.get(o);if(Ne)return Ne;L.set(o,k),Jf(o)?o.forEach(function(Pe){k.add(Yn(Pe,l,d,Pe,o,L))}):Zf(o)&&o.forEach(function(Pe,it){k.set(it,Yn(Pe,l,d,it,o,L))});var He=ae?j?pc:vc:j?Cn:Bt,et=se?n:He(o);return Pn(et||o,function(Pe,it){et&&(it=Pe,Pe=o[it]),Mo(k,it,Yn(Pe,l,d,it,o,L))}),k}function N1(o){var l=Bt(o);return function(d){return G_(d,o,l)}}function G_(o,l,d){var E=d.length;if(o==null)return!E;for(o=It(o);E--;){var O=d[E],L=l[O],k=o[O];if(k===n&&!(O in o)||!L(k))return!1}return!0}function M_(o,l,d){if(typeof o!="function")throw new Bn(s);return Wo(function(){o.apply(n,d)},l)}function $o(o,l,d,E){var O=-1,L=Ta,k=!0,P=o.length,j=[],ae=l.length;if(!P)return j;d&&(l=xt(l,xn(d))),E?(L=$l,k=!1):l.length>=i&&(L=No,k=!1,l=new ci(l));e:for(;++O<P;){var se=o[O],_e=d==null?se:d(se);if(se=E||se!==0?se:0,k&&_e===_e){for(var Ee=ae;Ee--;)if(l[Ee]===_e)continue e;j.push(se)}else L(l,_e,E)||j.push(se)}return j}var Pr=uf(sr),$_=uf(Jl,!0);function D1(o,l){var d=!0;return Pr(o,function(E,O,L){return d=!!l(E,O,L),d}),d}function Ka(o,l,d){for(var E=-1,O=o.length;++E<O;){var L=o[E],k=l(L);if(k!=null&&(P===n?k===k&&!Nn(k):d(k,P)))var P=k,j=L}return j}function T1(o,l,d,E){var O=o.length;for(d=Je(d),d<0&&(d=-d>O?0:O+d),E=E===n||E>O?O:Je(E),E<0&&(E+=O),E=d>E?0:tg(E);d<E;)o[d++]=l;return o}function F_(o,l){var d=[];return Pr(o,function(E,O,L){l(E,O,L)&&d.push(E)}),d}function Vt(o,l,d,E,O){var L=-1,k=o.length;for(d||(d=E0),O||(O=[]);++L<k;){var P=o[L];l>0&&d(P)?l>1?Vt(P,l-1,d,E,O):Fr(O,P):E||(O[O.length]=P)}return O}var Ql=df(),U_=df(!0);function sr(o,l){return o&&Ql(o,l,Bt)}function Jl(o,l){return o&&U_(o,l,Bt)}function Za(o,l){return $r(l,function(d){return Or(o[d])})}function di(o,l){l=Wr(l,o);for(var d=0,E=l.length;o!=null&&d<E;)o=o[cr(l[d++])];return d&&d==E?o:n}function H_(o,l,d){var E=l(o);return Xe(o)?E:Fr(E,d(o))}function an(o){return o==null?o===n?sp:Me:si&&si in It(o)?g0(o):A0(o)}function ec(o,l){return o>l}function R1(o,l){return o!=null&&mt.call(o,l)}function k1(o,l){return o!=null&&l in It(o)}function G1(o,l,d){return o>=Qt(l,d)&&o<Ht(l,d)}function tc(o,l,d){for(var E=d?$l:Ta,O=o[0].length,L=o.length,k=L,P=K(L),j=1/0,ae=[];k--;){var se=o[k];k&&l&&(se=xt(se,xn(l))),j=Qt(se.length,j),P[k]=!d&&(l||O>=120&&se.length>=120)?new ci(k&&se):n}se=o[0];var _e=-1,Ee=P[0];e:for(;++_e<O&&ae.length<j;){var Ne=se[_e],He=l?l(Ne):Ne;if(Ne=d||Ne!==0?Ne:0,!(Ee?No(Ee,He):E(ae,He,d))){for(k=L;--k;){var et=P[k];if(!(et?No(et,He):E(o[k],He,d)))continue e}Ee&&Ee.push(He),ae.push(Ne)}}return ae}function M1(o,l,d,E){return sr(o,function(O,L,k){l(E,d(O),L,k)}),E}function Fo(o,l,d){l=Wr(l,o),o=xf(o,l);var E=o==null?o:o[cr(Vn(l))];return E==null?n:An(E,o,d)}function P_(o){return kt(o)&&an(o)==Zt}function $1(o){return kt(o)&&an(o)==So}function F1(o){return kt(o)&&an(o)==ar}function Uo(o,l,d,E,O){return o===l?!0:o==null||l==null||!kt(o)&&!kt(l)?o!==o&&l!==l:U1(o,l,d,E,Uo,O)}function U1(o,l,d,E,O,L){var k=Xe(o),P=Xe(l),j=k?vr:Jt(o),ae=P?vr:Jt(l);j=j==Zt?St:j,ae=ae==Zt?St:ae;var se=j==St,_e=ae==St,Ee=j==ae;if(Ee&&zr(o)){if(!zr(l))return!1;k=!0,se=!1}if(Ee&&!se)return L||(L=new nr),k||ji(o)?If(o,l,d,E,O,L):_0(o,l,j,d,E,O,L);if(!(d&C)){var Ne=se&&mt.call(o,"__wrapped__"),He=_e&&mt.call(l,"__wrapped__");if(Ne||He){var et=Ne?o.value():o,Pe=He?l.value():l;return L||(L=new nr),O(et,Pe,d,E,L)}}return Ee?(L||(L=new nr),f0(o,l,d,E,O,L)):!1}function H1(o){return kt(o)&&Jt(o)==be}function nc(o,l,d,E){var O=d.length,L=O,k=!E;if(o==null)return!L;for(o=It(o);O--;){var P=d[O];if(k&&P[2]?P[1]!==o[P[0]]:!(P[0]in o))return!1}for(;++O<L;){P=d[O];var j=P[0],ae=o[j],se=P[1];if(k&&P[2]){if(ae===n&&!(j in o))return!1}else{var _e=new nr;if(E)var Ee=E(ae,se,j,o,l,_e);if(!(Ee===n?Uo(se,ae,C|I,E,_e):Ee))return!1}}return!0}function B_(o){if(!Nt(o)||b0(o))return!1;var l=Or(o)?Hm:Np;return l.test(fi(o))}function P1(o){return kt(o)&&an(o)==Lo}function B1(o){return kt(o)&&Jt(o)==er}function W1(o){return kt(o)&&gs(o.length)&&!!At[an(o)]}function W_(o){return typeof o=="function"?o:o==null?En:typeof o=="object"?Xe(o)?V_(o[0],o[1]):z_(o):_g(o)}function rc(o){if(!Bo(o))return Vm(o);var l=[];for(var d in It(o))mt.call(o,d)&&d!="constructor"&&l.push(d);return l}function Y1(o){if(!Nt(o))return L0(o);var l=Bo(o),d=[];for(var E in o)E=="constructor"&&(l||!mt.call(o,E))||d.push(E);return d}function ic(o,l){return o<l}function Y_(o,l){var d=-1,E=mn(o)?K(o.length):[];return Pr(o,function(O,L,k){E[++d]=l(O,L,k)}),E}function z_(o){var l=Cc(o);return l.length==1&&l[0][2]?Lf(l[0][0],l[0][1]):function(d){return d===o||nc(d,o,l)}}function V_(o,l){return Ic(o)&&yf(l)?Lf(cr(o),l):function(d){var E=Dc(d,o);return E===n&&E===l?Tc(d,o):Uo(l,E,C|I)}}function Qa(o,l,d,E,O){o!==l&&Ql(l,function(L,k){if(O||(O=new nr),Nt(L))z1(o,l,k,d,Qa,E,O);else{var P=E?E(wc(o,k),L,k+"",o,l,O):n;P===n&&(P=L),Kl(o,k,P)}},Cn)}function z1(o,l,d,E,O,L,k){var P=wc(o,d),j=wc(l,d),ae=k.get(j);if(ae){Kl(o,d,ae);return}var se=L?L(P,j,d+"",o,l,k):n,_e=se===n;if(_e){var Ee=Xe(j),Ne=!Ee&&zr(j),He=!Ee&&!Ne&&ji(j);se=j,Ee||Ne||He?Xe(P)?se=P:Gt(P)?se=pn(P):Ne?(_e=!1,se=of(j,!0)):He?(_e=!1,se=af(j,!0)):se=[]:Yo(j)||gi(j)?(se=P,gi(P)?se=ng(P):(!Nt(P)||Or(P))&&(se=Of(j))):_e=!1}_e&&(k.set(j,se),O(se,j,E,L,k),k.delete(j)),Kl(o,d,se)}function j_(o,l){var d=o.length;if(d)return l+=l<0?d:0,wr(l,d)?o[l]:n}function q_(o,l,d){l.length?l=xt(l,function(L){return Xe(L)?function(k){return di(k,L.length===1?L[0]:L)}:L}):l=[En];var E=-1;l=xt(l,xn(Fe()));var O=Y_(o,function(L,k,P){var j=xt(l,function(ae){return ae(L)});return{criteria:j,index:++E,value:L}});return mm(O,function(L,k){return i0(L,k,d)})}function V1(o,l){return X_(o,l,function(d,E){return Tc(o,E)})}function X_(o,l,d){for(var E=-1,O=l.length,L={};++E<O;){var k=l[E],P=di(o,k);d(P,k)&&Ho(L,Wr(k,o),P)}return L}function j1(o){return function(l){return di(l,o)}}function oc(o,l,d,E){var O=E?pm:Mi,L=-1,k=l.length,P=o;for(o===l&&(l=pn(l)),d&&(P=xt(o,xn(d)));++L<k;)for(var j=0,ae=l[L],se=d?d(ae):ae;(j=O(P,se,j,E))>-1;)P!==o&&Ba.call(P,j,1),Ba.call(o,j,1);return o}function K_(o,l){for(var d=o?l.length:0,E=d-1;d--;){var O=l[d];if(d==E||O!==L){var L=O;wr(O)?Ba.call(o,O,1):cc(o,O)}}return o}function ac(o,l){return o+za(N_()*(l-o+1))}function q1(o,l,d,E){for(var O=-1,L=Ht(Ya((l-o)/(d||1)),0),k=K(L);L--;)k[E?L:++O]=o,o+=d;return k}function sc(o,l){var d="";if(!o||l<1||l>xe)return d;do l%2&&(d+=o),l=za(l/2),l&&(o+=o);while(l);return d}function tt(o,l){return Oc(Af(o,l,En),o+"")}function X1(o){return R_(qi(o))}function K1(o,l){var d=qi(o);return ls(d,ui(l,0,d.length))}function Ho(o,l,d,E){if(!Nt(o))return o;l=Wr(l,o);for(var O=-1,L=l.length,k=L-1,P=o;P!=null&&++O<L;){var j=cr(l[O]),ae=d;if(j==="__proto__"||j==="constructor"||j==="prototype")return o;if(O!=k){var se=P[j];ae=E?E(se,j,P):n,ae===n&&(ae=Nt(se)?se:wr(l[O+1])?[]:{})}Mo(P,j,ae),P=P[j]}return o}var Z_=Va?function(o,l){return Va.set(o,l),o}:En,Z1=Wa?function(o,l){return Wa(o,"toString",{configurable:!0,enumerable:!1,value:kc(l),writable:!0})}:En;function Q1(o){return ls(qi(o))}function zn(o,l,d){var E=-1,O=o.length;l<0&&(l=-l>O?0:O+l),d=d>O?O:d,d<0&&(d+=O),O=l>d?0:d-l>>>0,l>>>=0;for(var L=K(O);++E<O;)L[E]=o[E+l];return L}function J1(o,l){var d;return Pr(o,function(E,O,L){return d=l(E,O,L),!d}),!!d}function Ja(o,l,d){var E=0,O=o==null?E:o.length;if(typeof l=="number"&&l===l&&O<=Lt){for(;E<O;){var L=E+O>>>1,k=o[L];k!==null&&!Nn(k)&&(d?k<=l:k<l)?E=L+1:O=L}return O}return lc(o,l,En,d)}function lc(o,l,d,E){var O=0,L=o==null?0:o.length;if(L===0)return 0;l=d(l);for(var k=l!==l,P=l===null,j=Nn(l),ae=l===n;O<L;){var se=za((O+L)/2),_e=d(o[se]),Ee=_e!==n,Ne=_e===null,He=_e===_e,et=Nn(_e);if(k)var Pe=E||He;else ae?Pe=He&&(E||Ee):P?Pe=He&&Ee&&(E||!Ne):j?Pe=He&&Ee&&!Ne&&(E||!et):Ne||et?Pe=!1:Pe=E?_e<=l:_e<l;Pe?O=se+1:L=se}return Qt(L,Un)}function Q_(o,l){for(var d=-1,E=o.length,O=0,L=[];++d<E;){var k=o[d],P=l?l(k):k;if(!d||!rr(P,j)){var j=P;L[O++]=k===0?0:k}}return L}function J_(o){return typeof o=="number"?o:Nn(o)?_t:+o}function Sn(o){if(typeof o=="string")return o;if(Xe(o))return xt(o,Sn)+"";if(Nn(o))return D_?D_.call(o):"";var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Br(o,l,d){var E=-1,O=Ta,L=o.length,k=!0,P=[],j=P;if(d)k=!1,O=$l;else if(L>=i){var ae=l?null:u0(o);if(ae)return ka(ae);k=!1,O=No,j=new ci}else j=l?[]:P;e:for(;++E<L;){var se=o[E],_e=l?l(se):se;if(se=d||se!==0?se:0,k&&_e===_e){for(var Ee=j.length;Ee--;)if(j[Ee]===_e)continue e;l&&j.push(_e),P.push(se)}else O(j,_e,d)||(j!==P&&j.push(_e),P.push(se))}return P}function cc(o,l){return l=Wr(l,o),o=xf(o,l),o==null||delete o[cr(Vn(l))]}function ef(o,l,d,E){return Ho(o,l,d(di(o,l)),E)}function es(o,l,d,E){for(var O=o.length,L=E?O:-1;(E?L--:++L<O)&&l(o[L],L,o););return d?zn(o,E?0:L,E?L+1:O):zn(o,E?L+1:0,E?O:L)}function tf(o,l){var d=o;return d instanceof ot&&(d=d.value()),Fl(l,function(E,O){return O.func.apply(O.thisArg,Fr([E],O.args))},d)}function uc(o,l,d){var E=o.length;if(E<2)return E?Br(o[0]):[];for(var O=-1,L=K(E);++O<E;)for(var k=o[O],P=-1;++P<E;)P!=O&&(L[O]=$o(L[O]||k,o[P],l,d));return Br(Vt(L,1),l,d)}function nf(o,l,d){for(var E=-1,O=o.length,L=l.length,k={};++E<O;){var P=E<L?l[E]:n;d(k,o[E],P)}return k}function dc(o){return Gt(o)?o:[]}function _c(o){return typeof o=="function"?o:En}function Wr(o,l){return Xe(o)?o:Ic(o,l)?[o]:Tf(vt(o))}var e0=tt;function Yr(o,l,d){var E=o.length;return d=d===n?E:d,!l&&d>=E?o:zn(o,l,d)}var rf=Pm||function(o){return zt.clearTimeout(o)};function of(o,l){if(l)return o.slice();var d=o.length,E=y_?y_(d):new o.constructor(d);return o.copy(E),E}function fc(o){var l=new o.constructor(o.byteLength);return new Ha(l).set(new Ha(o)),l}function t0(o,l){var d=l?fc(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.byteLength)}function n0(o){var l=new o.constructor(o.source,Pd.exec(o));return l.lastIndex=o.lastIndex,l}function r0(o){return Go?It(Go.call(o)):{}}function af(o,l){var d=l?fc(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.length)}function sf(o,l){if(o!==l){var d=o!==n,E=o===null,O=o===o,L=Nn(o),k=l!==n,P=l===null,j=l===l,ae=Nn(l);if(!P&&!ae&&!L&&o>l||L&&k&&j&&!P&&!ae||E&&k&&j||!d&&j||!O)return 1;if(!E&&!L&&!ae&&o<l||ae&&d&&O&&!E&&!L||P&&d&&O||!k&&O||!j)return-1}return 0}function i0(o,l,d){for(var E=-1,O=o.criteria,L=l.criteria,k=O.length,P=d.length;++E<k;){var j=sf(O[E],L[E]);if(j){if(E>=P)return j;var ae=d[E];return j*(ae=="desc"?-1:1)}}return o.index-l.index}function lf(o,l,d,E){for(var O=-1,L=o.length,k=d.length,P=-1,j=l.length,ae=Ht(L-k,0),se=K(j+ae),_e=!E;++P<j;)se[P]=l[P];for(;++O<k;)(_e||O<L)&&(se[d[O]]=o[O]);for(;ae--;)se[P++]=o[O++];return se}function cf(o,l,d,E){for(var O=-1,L=o.length,k=-1,P=d.length,j=-1,ae=l.length,se=Ht(L-P,0),_e=K(se+ae),Ee=!E;++O<se;)_e[O]=o[O];for(var Ne=O;++j<ae;)_e[Ne+j]=l[j];for(;++k<P;)(Ee||O<L)&&(_e[Ne+d[k]]=o[O++]);return _e}function pn(o,l){var d=-1,E=o.length;for(l||(l=K(E));++d<E;)l[d]=o[d];return l}function lr(o,l,d,E){var O=!d;d||(d={});for(var L=-1,k=l.length;++L<k;){var P=l[L],j=E?E(d[P],o[P],P,d,o):n;j===n&&(j=o[P]),O?Er(d,P,j):Mo(d,P,j)}return d}function o0(o,l){return lr(o,Ec(o),l)}function a0(o,l){return lr(o,bf(o),l)}function ts(o,l){return function(d,E){var O=Xe(d)?dm:x1,L=l?l():{};return O(d,o,Fe(E,2),L)}}function Yi(o){return tt(function(l,d){var E=-1,O=d.length,L=O>1?d[O-1]:n,k=O>2?d[2]:n;for(L=o.length>3&&typeof L=="function"?(O--,L):n,k&&sn(d[0],d[1],k)&&(L=O<3?n:L,O=1),l=It(l);++E<O;){var P=d[E];P&&o(l,P,E,L)}return l})}function uf(o,l){return function(d,E){if(d==null)return d;if(!mn(d))return o(d,E);for(var O=d.length,L=l?O:-1,k=It(d);(l?L--:++L<O)&&E(k[L],L,k)!==!1;);return d}}function df(o){return function(l,d,E){for(var O=-1,L=It(l),k=E(l),P=k.length;P--;){var j=k[o?P:++O];if(d(L[j],j,L)===!1)break}return l}}function s0(o,l,d){var E=l&b,O=Po(o);function L(){var k=this&&this!==zt&&this instanceof L?O:o;return k.apply(E?d:this,arguments)}return L}function _f(o){return function(l){l=vt(l);var d=$i(l)?tr(l):n,E=d?d[0]:l.charAt(0),O=d?Yr(d,1).join(""):l.slice(1);return E[o]()+O}}function zi(o){return function(l){return Fl(ug(cg(l).replace(Zp,"")),o,"")}}function Po(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=Wi(o.prototype),E=o.apply(d,l);return Nt(E)?E:d}}function l0(o,l,d){var E=Po(o);function O(){for(var L=arguments.length,k=K(L),P=L,j=Vi(O);P--;)k[P]=arguments[P];var ae=L<3&&k[0]!==j&&k[L-1]!==j?[]:Ur(k,j);if(L-=ae.length,L<d)return pf(o,l,ns,O.placeholder,n,k,ae,n,n,d-L);var se=this&&this!==zt&&this instanceof O?E:o;return An(se,this,k)}return O}function ff(o){return function(l,d,E){var O=It(l);if(!mn(l)){var L=Fe(d,3);l=Bt(l),d=function(P){return L(O[P],P,O)}}var k=o(l,d,E);return k>-1?O[L?l[k]:k]:n}}function gf(o){return br(function(l){var d=l.length,E=d,O=Wn.prototype.thru;for(o&&l.reverse();E--;){var L=l[E];if(typeof L!="function")throw new Bn(s);if(O&&!k&&as(L)=="wrapper")var k=new Wn([],!0)}for(E=k?E:d;++E<d;){L=l[E];var P=as(L),j=P=="wrapper"?mc(L):n;j&&bc(j[0])&&j[1]==(Y|R|$|X)&&!j[4].length&&j[9]==1?k=k[as(j[0])].apply(k,j[3]):k=L.length==1&&bc(L)?k[P]():k.thru(L)}return function(){var ae=arguments,se=ae[0];if(k&&ae.length==1&&Xe(se))return k.plant(se).value();for(var _e=0,Ee=d?l[_e].apply(this,ae):se;++_e<d;)Ee=l[_e].call(this,Ee);return Ee}})}function ns(o,l,d,E,O,L,k,P,j,ae){var se=l&Y,_e=l&b,Ee=l&w,Ne=l&(R|M),He=l&re,et=Ee?n:Po(o);function Pe(){for(var it=arguments.length,at=K(it),Dn=it;Dn--;)at[Dn]=arguments[Dn];if(Ne)var ln=Vi(Pe),Tn=Em(at,ln);if(E&&(at=lf(at,E,O,Ne)),L&&(at=cf(at,L,k,Ne)),it-=Tn,Ne&&it<ae){var Mt=Ur(at,ln);return pf(o,l,ns,Pe.placeholder,d,at,Mt,P,j,ae-it)}var ir=_e?d:this,Lr=Ee?ir[o]:o;return it=at.length,P?at=x0(at,P):He&&it>1&&at.reverse(),se&&j<it&&(at.length=j),this&&this!==zt&&this instanceof Pe&&(Lr=et||Po(Lr)),Lr.apply(ir,at)}return Pe}function hf(o,l){return function(d,E){return M1(d,o,l(E),{})}}function rs(o,l){return function(d,E){var O;if(d===n&&E===n)return l;if(d!==n&&(O=d),E!==n){if(O===n)return E;typeof d=="string"||typeof E=="string"?(d=Sn(d),E=Sn(E)):(d=J_(d),E=J_(E)),O=o(d,E)}return O}}function gc(o){return br(function(l){return l=xt(l,xn(Fe())),tt(function(d){var E=this;return o(l,function(O){return An(O,E,d)})})})}function is(o,l){l=l===n?" ":Sn(l);var d=l.length;if(d<2)return d?sc(l,o):l;var E=sc(l,Ya(o/Fi(l)));return $i(l)?Yr(tr(E),0,o).join(""):E.slice(0,o)}function c0(o,l,d,E){var O=l&b,L=Po(o);function k(){for(var P=-1,j=arguments.length,ae=-1,se=E.length,_e=K(se+j),Ee=this&&this!==zt&&this instanceof k?L:o;++ae<se;)_e[ae]=E[ae];for(;j--;)_e[ae++]=arguments[++P];return An(Ee,O?d:this,_e)}return k}function vf(o){return function(l,d,E){return E&&typeof E!="number"&&sn(l,d,E)&&(d=E=n),l=yr(l),d===n?(d=l,l=0):d=yr(d),E=E===n?l<d?1:-1:yr(E),q1(l,d,E,o)}}function os(o){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=jn(l),d=jn(d)),o(l,d)}}function pf(o,l,d,E,O,L,k,P,j,ae){var se=l&R,_e=se?k:n,Ee=se?n:k,Ne=se?L:n,He=se?n:L;l|=se?$:W,l&=~(se?W:$),l&A||(l&=-4);var et=[o,l,O,Ne,_e,He,Ee,P,j,ae],Pe=d.apply(n,et);return bc(o)&&Sf(Pe,et),Pe.placeholder=E,Nf(Pe,o,l)}function hc(o){var l=Ut[o];return function(d,E){if(d=jn(d),E=E==null?0:Qt(Je(E),292),E&&S_(d)){var O=(vt(d)+"e").split("e"),L=l(O[0]+"e"+(+O[1]+E));return O=(vt(L)+"e").split("e"),+(O[0]+"e"+(+O[1]-E))}return l(d)}}var u0=Pi&&1/ka(new Pi([,-0]))[1]==lt?function(o){return new Pi(o)}:$c;function mf(o){return function(l){var d=Jt(l);return d==be?zl(l):d==er?Am(l):Cm(l,o(l))}}function Ir(o,l,d,E,O,L,k,P){var j=l&w;if(!j&&typeof o!="function")throw new Bn(s);var ae=E?E.length:0;if(ae||(l&=-97,E=O=n),k=k===n?k:Ht(Je(k),0),P=P===n?P:Je(P),ae-=O?O.length:0,l&W){var se=E,_e=O;E=O=n}var Ee=j?n:mc(o),Ne=[o,l,d,E,O,se,_e,L,k,P];if(Ee&&y0(Ne,Ee),o=Ne[0],l=Ne[1],d=Ne[2],E=Ne[3],O=Ne[4],P=Ne[9]=Ne[9]===n?j?0:o.length:Ht(Ne[9]-ae,0),!P&&l&(R|M)&&(l&=-25),!l||l==b)var He=s0(o,l,d);else l==R||l==M?He=l0(o,l,P):(l==$||l==(b|$))&&!O.length?He=c0(o,l,d,E):He=ns.apply(n,Ne);var et=Ee?Z_:Sf;return Nf(et(He,Ne),o,l)}function Cf(o,l,d,E){return o===n||rr(o,Hi[d])&&!mt.call(E,d)?l:o}function Ef(o,l,d,E,O,L){return Nt(o)&&Nt(l)&&(L.set(l,o),Qa(o,l,n,Ef,L),L.delete(l)),o}function d0(o){return Yo(o)?n:o}function If(o,l,d,E,O,L){var k=d&C,P=o.length,j=l.length;if(P!=j&&!(k&&j>P))return!1;var ae=L.get(o),se=L.get(l);if(ae&&se)return ae==l&&se==o;var _e=-1,Ee=!0,Ne=d&I?new ci:n;for(L.set(o,l),L.set(l,o);++_e<P;){var He=o[_e],et=l[_e];if(E)var Pe=k?E(et,He,_e,l,o,L):E(He,et,_e,o,l,L);if(Pe!==n){if(Pe)continue;Ee=!1;break}if(Ne){if(!Ul(l,function(it,at){if(!No(Ne,at)&&(He===it||O(He,it,d,E,L)))return Ne.push(at)})){Ee=!1;break}}else if(!(He===et||O(He,et,d,E,L))){Ee=!1;break}}return L.delete(o),L.delete(l),Ee}function _0(o,l,d,E,O,L,k){switch(d){case ki:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case So:return!(o.byteLength!=l.byteLength||!L(new Ha(o),new Ha(l)));case pr:case ar:case Ge:return rr(+o,+l);case Mr:return o.name==l.name&&o.message==l.message;case Lo:case Ao:return o==l+"";case be:var P=zl;case er:var j=E&C;if(P||(P=ka),o.size!=l.size&&!j)return!1;var ae=k.get(o);if(ae)return ae==l;E|=I,k.set(o,l);var se=If(P(o),P(l),E,O,L,k);return k.delete(o),se;case xa:if(Go)return Go.call(o)==Go.call(l)}return!1}function f0(o,l,d,E,O,L){var k=d&C,P=vc(o),j=P.length,ae=vc(l),se=ae.length;if(j!=se&&!k)return!1;for(var _e=j;_e--;){var Ee=P[_e];if(!(k?Ee in l:mt.call(l,Ee)))return!1}var Ne=L.get(o),He=L.get(l);if(Ne&&He)return Ne==l&&He==o;var et=!0;L.set(o,l),L.set(l,o);for(var Pe=k;++_e<j;){Ee=P[_e];var it=o[Ee],at=l[Ee];if(E)var Dn=k?E(at,it,Ee,l,o,L):E(it,at,Ee,o,l,L);if(!(Dn===n?it===at||O(it,at,d,E,L):Dn)){et=!1;break}Pe||(Pe=Ee=="constructor")}if(et&&!Pe){var ln=o.constructor,Tn=l.constructor;ln!=Tn&&"constructor"in o&&"constructor"in l&&!(typeof ln=="function"&&ln instanceof ln&&typeof Tn=="function"&&Tn instanceof Tn)&&(et=!1)}return L.delete(o),L.delete(l),et}function br(o){return Oc(Af(o,n,Mf),o+"")}function vc(o){return H_(o,Bt,Ec)}function pc(o){return H_(o,Cn,bf)}var mc=Va?function(o){return Va.get(o)}:$c;function as(o){for(var l=o.name+"",d=Bi[l],E=mt.call(Bi,l)?d.length:0;E--;){var O=d[E],L=O.func;if(L==null||L==o)return O.name}return l}function Vi(o){var l=mt.call(y,"placeholder")?y:o;return l.placeholder}function Fe(){var o=y.iteratee||Gc;return o=o===Gc?W_:o,arguments.length?o(arguments[0],arguments[1]):o}function ss(o,l){var d=o.__data__;return I0(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Cc(o){for(var l=Bt(o),d=l.length;d--;){var E=l[d],O=o[E];l[d]=[E,O,yf(O)]}return l}function _i(o,l){var d=Om(o,l);return B_(d)?d:n}function g0(o){var l=mt.call(o,si),d=o[si];try{o[si]=n;var E=!0}catch{}var O=Fa.call(o);return E&&(l?o[si]=d:delete o[si]),O}var Ec=jl?function(o){return o==null?[]:(o=It(o),$r(jl(o),function(l){return A_.call(o,l)}))}:Fc,bf=jl?function(o){for(var l=[];o;)Fr(l,Ec(o)),o=Pa(o);return l}:Fc,Jt=an;(ql&&Jt(new ql(new ArrayBuffer(1)))!=ki||To&&Jt(new To)!=be||Xl&&Jt(Xl.resolve())!=$d||Pi&&Jt(new Pi)!=er||Ro&&Jt(new Ro)!=xo)&&(Jt=function(o){var l=an(o),d=l==St?o.constructor:n,E=d?fi(d):"";if(E)switch(E){case Km:return ki;case Zm:return be;case Qm:return $d;case Jm:return er;case e1:return xo}return l});function h0(o,l,d){for(var E=-1,O=d.length;++E<O;){var L=d[E],k=L.size;switch(L.type){case"drop":o+=k;break;case"dropRight":l-=k;break;case"take":l=Qt(l,o+k);break;case"takeRight":o=Ht(o,l-k);break}}return{start:o,end:l}}function v0(o){var l=o.match(bp);return l?l[1].split(wp):[]}function wf(o,l,d){l=Wr(l,o);for(var E=-1,O=l.length,L=!1;++E<O;){var k=cr(l[E]);if(!(L=o!=null&&d(o,k)))break;o=o[k]}return L||++E!=O?L:(O=o==null?0:o.length,!!O&&gs(O)&&wr(k,O)&&(Xe(o)||gi(o)))}function p0(o){var l=o.length,d=new o.constructor(l);return l&&typeof o[0]=="string"&&mt.call(o,"index")&&(d.index=o.index,d.input=o.input),d}function Of(o){return typeof o.constructor=="function"&&!Bo(o)?Wi(Pa(o)):{}}function m0(o,l,d){var E=o.constructor;switch(l){case So:return fc(o);case pr:case ar:return new E(+o);case ki:return t0(o,d);case Cl:case El:case Il:case bl:case wl:case Ol:case yl:case Ll:case Al:return af(o,d);case be:return new E;case Ge:case Ao:return new E(o);case Lo:return n0(o);case er:return new E;case xa:return r0(o)}}function C0(o,l){var d=l.length;if(!d)return o;var E=d-1;return l[E]=(d>1?"& ":"")+l[E],l=l.join(d>2?", ":" "),o.replace(Ip,`{
/* [wrapped with `+l+`] */
`)}function E0(o){return Xe(o)||gi(o)||!!(x_&&o&&o[x_])}function wr(o,l){var d=typeof o;return l=l??xe,!!l&&(d=="number"||d!="symbol"&&Tp.test(o))&&o>-1&&o%1==0&&o<l}function sn(o,l,d){if(!Nt(d))return!1;var E=typeof l;return(E=="number"?mn(d)&&wr(l,d.length):E=="string"&&l in d)?rr(d[l],o):!1}function Ic(o,l){if(Xe(o))return!1;var d=typeof o;return d=="number"||d=="symbol"||d=="boolean"||o==null||Nn(o)?!0:pp.test(o)||!vp.test(o)||l!=null&&o in It(l)}function I0(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function bc(o){var l=as(o),d=y[l];if(typeof d!="function"||!(l in ot.prototype))return!1;if(o===d)return!0;var E=mc(d);return!!E&&o===E[0]}function b0(o){return!!O_&&O_ in o}var w0=Ma?Or:Uc;function Bo(o){var l=o&&o.constructor,d=typeof l=="function"&&l.prototype||Hi;return o===d}function yf(o){return o===o&&!Nt(o)}function Lf(o,l){return function(d){return d==null?!1:d[o]===l&&(l!==n||o in It(d))}}function O0(o){var l=_s(o,function(E){return d.size===f&&d.clear(),E}),d=l.cache;return l}function y0(o,l){var d=o[1],E=l[1],O=d|E,L=O<(b|w|Y),k=E==Y&&d==R||E==Y&&d==X&&o[7].length<=l[8]||E==(Y|X)&&l[7].length<=l[8]&&d==R;if(!(L||k))return o;E&b&&(o[2]=l[2],O|=d&b?0:A);var P=l[3];if(P){var j=o[3];o[3]=j?lf(j,P,l[4]):P,o[4]=j?Ur(o[3],g):l[4]}return P=l[5],P&&(j=o[5],o[5]=j?cf(j,P,l[6]):P,o[6]=j?Ur(o[5],g):l[6]),P=l[7],P&&(o[7]=P),E&Y&&(o[8]=o[8]==null?l[8]:Qt(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=O,o}function L0(o){var l=[];if(o!=null)for(var d in It(o))l.push(d);return l}function A0(o){return Fa.call(o)}function Af(o,l,d){return l=Ht(l===n?o.length-1:l,0),function(){for(var E=arguments,O=-1,L=Ht(E.length-l,0),k=K(L);++O<L;)k[O]=E[l+O];O=-1;for(var P=K(l+1);++O<l;)P[O]=E[O];return P[l]=d(k),An(o,this,P)}}function xf(o,l){return l.length<2?o:di(o,zn(l,0,-1))}function x0(o,l){for(var d=o.length,E=Qt(l.length,d),O=pn(o);E--;){var L=l[E];o[E]=wr(L,d)?O[L]:n}return o}function wc(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var Sf=Df(Z_),Wo=Wm||function(o,l){return zt.setTimeout(o,l)},Oc=Df(Z1);function Nf(o,l,d){var E=l+"";return Oc(o,C0(E,S0(v0(E),d)))}function Df(o){var l=0,d=0;return function(){var E=jm(),O=Ie-(E-d);if(d=E,O>0){if(++l>=le)return arguments[0]}else l=0;return o.apply(n,arguments)}}function ls(o,l){var d=-1,E=o.length,O=E-1;for(l=l===n?E:l;++d<l;){var L=ac(d,O),k=o[L];o[L]=o[d],o[d]=k}return o.length=l,o}var Tf=O0(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(mp,function(d,E,O,L){l.push(O?L.replace(Lp,"$1"):E||d)}),l});function cr(o){if(typeof o=="string"||Nn(o))return o;var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function fi(o){if(o!=null){try{return $a.call(o)}catch{}try{return o+""}catch{}}return""}function S0(o,l){return Pn(Ln,function(d){var E="_."+d[0];l&d[1]&&!Ta(o,E)&&o.push(E)}),o.sort()}function Rf(o){if(o instanceof ot)return o.clone();var l=new Wn(o.__wrapped__,o.__chain__);return l.__actions__=pn(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function N0(o,l,d){(d?sn(o,l,d):l===n)?l=1:l=Ht(Je(l),0);var E=o==null?0:o.length;if(!E||l<1)return[];for(var O=0,L=0,k=K(Ya(E/l));O<E;)k[L++]=zn(o,O,O+=l);return k}function D0(o){for(var l=-1,d=o==null?0:o.length,E=0,O=[];++l<d;){var L=o[l];L&&(O[E++]=L)}return O}function T0(){var o=arguments.length;if(!o)return[];for(var l=K(o-1),d=arguments[0],E=o;E--;)l[E-1]=arguments[E];return Fr(Xe(d)?pn(d):[d],Vt(l,1))}var R0=tt(function(o,l){return Gt(o)?$o(o,Vt(l,1,Gt,!0)):[]}),k0=tt(function(o,l){var d=Vn(l);return Gt(d)&&(d=n),Gt(o)?$o(o,Vt(l,1,Gt,!0),Fe(d,2)):[]}),G0=tt(function(o,l){var d=Vn(l);return Gt(d)&&(d=n),Gt(o)?$o(o,Vt(l,1,Gt,!0),n,d):[]});function M0(o,l,d){var E=o==null?0:o.length;return E?(l=d||l===n?1:Je(l),zn(o,l<0?0:l,E)):[]}function $0(o,l,d){var E=o==null?0:o.length;return E?(l=d||l===n?1:Je(l),l=E-l,zn(o,0,l<0?0:l)):[]}function F0(o,l){return o&&o.length?es(o,Fe(l,3),!0,!0):[]}function U0(o,l){return o&&o.length?es(o,Fe(l,3),!0):[]}function H0(o,l,d,E){var O=o==null?0:o.length;return O?(d&&typeof d!="number"&&sn(o,l,d)&&(d=0,E=O),T1(o,l,d,E)):[]}function kf(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=d==null?0:Je(d);return O<0&&(O=Ht(E+O,0)),Ra(o,Fe(l,3),O)}function Gf(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=E-1;return d!==n&&(O=Je(d),O=d<0?Ht(E+O,0):Qt(O,E-1)),Ra(o,Fe(l,3),O,!0)}function Mf(o){var l=o==null?0:o.length;return l?Vt(o,1):[]}function P0(o){var l=o==null?0:o.length;return l?Vt(o,lt):[]}function B0(o,l){var d=o==null?0:o.length;return d?(l=l===n?1:Je(l),Vt(o,l)):[]}function W0(o){for(var l=-1,d=o==null?0:o.length,E={};++l<d;){var O=o[l];E[O[0]]=O[1]}return E}function $f(o){return o&&o.length?o[0]:n}function Y0(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=d==null?0:Je(d);return O<0&&(O=Ht(E+O,0)),Mi(o,l,O)}function z0(o){var l=o==null?0:o.length;return l?zn(o,0,-1):[]}var V0=tt(function(o){var l=xt(o,dc);return l.length&&l[0]===o[0]?tc(l):[]}),j0=tt(function(o){var l=Vn(o),d=xt(o,dc);return l===Vn(d)?l=n:d.pop(),d.length&&d[0]===o[0]?tc(d,Fe(l,2)):[]}),q0=tt(function(o){var l=Vn(o),d=xt(o,dc);return l=typeof l=="function"?l:n,l&&d.pop(),d.length&&d[0]===o[0]?tc(d,n,l):[]});function X0(o,l){return o==null?"":zm.call(o,l)}function Vn(o){var l=o==null?0:o.length;return l?o[l-1]:n}function K0(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=E;return d!==n&&(O=Je(d),O=O<0?Ht(E+O,0):Qt(O,E-1)),l===l?Sm(o,l,O):Ra(o,v_,O,!0)}function Z0(o,l){return o&&o.length?j_(o,Je(l)):n}var Q0=tt(Ff);function Ff(o,l){return o&&o.length&&l&&l.length?oc(o,l):o}function J0(o,l,d){return o&&o.length&&l&&l.length?oc(o,l,Fe(d,2)):o}function eC(o,l,d){return o&&o.length&&l&&l.length?oc(o,l,n,d):o}var tC=br(function(o,l){var d=o==null?0:o.length,E=Zl(o,l);return K_(o,xt(l,function(O){return wr(O,d)?+O:O}).sort(sf)),E});function nC(o,l){var d=[];if(!(o&&o.length))return d;var E=-1,O=[],L=o.length;for(l=Fe(l,3);++E<L;){var k=o[E];l(k,E,o)&&(d.push(k),O.push(E))}return K_(o,O),d}function yc(o){return o==null?o:Xm.call(o)}function rC(o,l,d){var E=o==null?0:o.length;return E?(d&&typeof d!="number"&&sn(o,l,d)?(l=0,d=E):(l=l==null?0:Je(l),d=d===n?E:Je(d)),zn(o,l,d)):[]}function iC(o,l){return Ja(o,l)}function oC(o,l,d){return lc(o,l,Fe(d,2))}function aC(o,l){var d=o==null?0:o.length;if(d){var E=Ja(o,l);if(E<d&&rr(o[E],l))return E}return-1}function sC(o,l){return Ja(o,l,!0)}function lC(o,l,d){return lc(o,l,Fe(d,2),!0)}function cC(o,l){var d=o==null?0:o.length;if(d){var E=Ja(o,l,!0)-1;if(rr(o[E],l))return E}return-1}function uC(o){return o&&o.length?Q_(o):[]}function dC(o,l){return o&&o.length?Q_(o,Fe(l,2)):[]}function _C(o){var l=o==null?0:o.length;return l?zn(o,1,l):[]}function fC(o,l,d){return o&&o.length?(l=d||l===n?1:Je(l),zn(o,0,l<0?0:l)):[]}function gC(o,l,d){var E=o==null?0:o.length;return E?(l=d||l===n?1:Je(l),l=E-l,zn(o,l<0?0:l,E)):[]}function hC(o,l){return o&&o.length?es(o,Fe(l,3),!1,!0):[]}function vC(o,l){return o&&o.length?es(o,Fe(l,3)):[]}var pC=tt(function(o){return Br(Vt(o,1,Gt,!0))}),mC=tt(function(o){var l=Vn(o);return Gt(l)&&(l=n),Br(Vt(o,1,Gt,!0),Fe(l,2))}),CC=tt(function(o){var l=Vn(o);return l=typeof l=="function"?l:n,Br(Vt(o,1,Gt,!0),n,l)});function EC(o){return o&&o.length?Br(o):[]}function IC(o,l){return o&&o.length?Br(o,Fe(l,2)):[]}function bC(o,l){return l=typeof l=="function"?l:n,o&&o.length?Br(o,n,l):[]}function Lc(o){if(!(o&&o.length))return[];var l=0;return o=$r(o,function(d){if(Gt(d))return l=Ht(d.length,l),!0}),Wl(l,function(d){return xt(o,Hl(d))})}function Uf(o,l){if(!(o&&o.length))return[];var d=Lc(o);return l==null?d:xt(d,function(E){return An(l,n,E)})}var wC=tt(function(o,l){return Gt(o)?$o(o,l):[]}),OC=tt(function(o){return uc($r(o,Gt))}),yC=tt(function(o){var l=Vn(o);return Gt(l)&&(l=n),uc($r(o,Gt),Fe(l,2))}),LC=tt(function(o){var l=Vn(o);return l=typeof l=="function"?l:n,uc($r(o,Gt),n,l)}),AC=tt(Lc);function xC(o,l){return nf(o||[],l||[],Mo)}function SC(o,l){return nf(o||[],l||[],Ho)}var NC=tt(function(o){var l=o.length,d=l>1?o[l-1]:n;return d=typeof d=="function"?(o.pop(),d):n,Uf(o,d)});function Hf(o){var l=y(o);return l.__chain__=!0,l}function DC(o,l){return l(o),o}function cs(o,l){return l(o)}var TC=br(function(o){var l=o.length,d=l?o[0]:0,E=this.__wrapped__,O=function(L){return Zl(L,o)};return l>1||this.__actions__.length||!(E instanceof ot)||!wr(d)?this.thru(O):(E=E.slice(d,+d+(l?1:0)),E.__actions__.push({func:cs,args:[O],thisArg:n}),new Wn(E,this.__chain__).thru(function(L){return l&&!L.length&&L.push(n),L}))});function RC(){return Hf(this)}function kC(){return new Wn(this.value(),this.__chain__)}function GC(){this.__values__===n&&(this.__values__=eg(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function MC(){return this}function $C(o){for(var l,d=this;d instanceof qa;){var E=Rf(d);E.__index__=0,E.__values__=n,l?O.__wrapped__=E:l=E;var O=E;d=d.__wrapped__}return O.__wrapped__=o,l}function FC(){var o=this.__wrapped__;if(o instanceof ot){var l=o;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:cs,args:[yc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(yc)}function UC(){return tf(this.__wrapped__,this.__actions__)}var HC=ts(function(o,l,d){mt.call(o,d)?++o[d]:Er(o,d,1)});function PC(o,l,d){var E=Xe(o)?g_:D1;return d&&sn(o,l,d)&&(l=n),E(o,Fe(l,3))}function BC(o,l){var d=Xe(o)?$r:F_;return d(o,Fe(l,3))}var WC=ff(kf),YC=ff(Gf);function zC(o,l){return Vt(us(o,l),1)}function VC(o,l){return Vt(us(o,l),lt)}function jC(o,l,d){return d=d===n?1:Je(d),Vt(us(o,l),d)}function Pf(o,l){var d=Xe(o)?Pn:Pr;return d(o,Fe(l,3))}function Bf(o,l){var d=Xe(o)?_m:$_;return d(o,Fe(l,3))}var qC=ts(function(o,l,d){mt.call(o,d)?o[d].push(l):Er(o,d,[l])});function XC(o,l,d,E){o=mn(o)?o:qi(o),d=d&&!E?Je(d):0;var O=o.length;return d<0&&(d=Ht(O+d,0)),hs(o)?d<=O&&o.indexOf(l,d)>-1:!!O&&Mi(o,l,d)>-1}var KC=tt(function(o,l,d){var E=-1,O=typeof l=="function",L=mn(o)?K(o.length):[];return Pr(o,function(k){L[++E]=O?An(l,k,d):Fo(k,l,d)}),L}),ZC=ts(function(o,l,d){Er(o,d,l)});function us(o,l){var d=Xe(o)?xt:Y_;return d(o,Fe(l,3))}function QC(o,l,d,E){return o==null?[]:(Xe(l)||(l=l==null?[]:[l]),d=E?n:d,Xe(d)||(d=d==null?[]:[d]),q_(o,l,d))}var JC=ts(function(o,l,d){o[d?0:1].push(l)},function(){return[[],[]]});function eE(o,l,d){var E=Xe(o)?Fl:m_,O=arguments.length<3;return E(o,Fe(l,4),d,O,Pr)}function tE(o,l,d){var E=Xe(o)?fm:m_,O=arguments.length<3;return E(o,Fe(l,4),d,O,$_)}function nE(o,l){var d=Xe(o)?$r:F_;return d(o,fs(Fe(l,3)))}function rE(o){var l=Xe(o)?R_:X1;return l(o)}function iE(o,l,d){(d?sn(o,l,d):l===n)?l=1:l=Je(l);var E=Xe(o)?L1:K1;return E(o,l)}function oE(o){var l=Xe(o)?A1:Q1;return l(o)}function aE(o){if(o==null)return 0;if(mn(o))return hs(o)?Fi(o):o.length;var l=Jt(o);return l==be||l==er?o.size:rc(o).length}function sE(o,l,d){var E=Xe(o)?Ul:J1;return d&&sn(o,l,d)&&(l=n),E(o,Fe(l,3))}var lE=tt(function(o,l){if(o==null)return[];var d=l.length;return d>1&&sn(o,l[0],l[1])?l=[]:d>2&&sn(l[0],l[1],l[2])&&(l=[l[0]]),q_(o,Vt(l,1),[])}),ds=Bm||function(){return zt.Date.now()};function cE(o,l){if(typeof l!="function")throw new Bn(s);return o=Je(o),function(){if(--o<1)return l.apply(this,arguments)}}function Wf(o,l,d){return l=d?n:l,l=o&&l==null?o.length:l,Ir(o,Y,n,n,n,n,l)}function Yf(o,l){var d;if(typeof l!="function")throw new Bn(s);return o=Je(o),function(){return--o>0&&(d=l.apply(this,arguments)),o<=1&&(l=n),d}}var Ac=tt(function(o,l,d){var E=b;if(d.length){var O=Ur(d,Vi(Ac));E|=$}return Ir(o,E,l,d,O)}),zf=tt(function(o,l,d){var E=b|w;if(d.length){var O=Ur(d,Vi(zf));E|=$}return Ir(l,E,o,d,O)});function Vf(o,l,d){l=d?n:l;var E=Ir(o,R,n,n,n,n,n,l);return E.placeholder=Vf.placeholder,E}function jf(o,l,d){l=d?n:l;var E=Ir(o,M,n,n,n,n,n,l);return E.placeholder=jf.placeholder,E}function qf(o,l,d){var E,O,L,k,P,j,ae=0,se=!1,_e=!1,Ee=!0;if(typeof o!="function")throw new Bn(s);l=jn(l)||0,Nt(d)&&(se=!!d.leading,_e="maxWait"in d,L=_e?Ht(jn(d.maxWait)||0,l):L,Ee="trailing"in d?!!d.trailing:Ee);function Ne(Mt){var ir=E,Lr=O;return E=O=n,ae=Mt,k=o.apply(Lr,ir),k}function He(Mt){return ae=Mt,P=Wo(it,l),se?Ne(Mt):k}function et(Mt){var ir=Mt-j,Lr=Mt-ae,fg=l-ir;return _e?Qt(fg,L-Lr):fg}function Pe(Mt){var ir=Mt-j,Lr=Mt-ae;return j===n||ir>=l||ir<0||_e&&Lr>=L}function it(){var Mt=ds();if(Pe(Mt))return at(Mt);P=Wo(it,et(Mt))}function at(Mt){return P=n,Ee&&E?Ne(Mt):(E=O=n,k)}function Dn(){P!==n&&rf(P),ae=0,E=j=O=P=n}function ln(){return P===n?k:at(ds())}function Tn(){var Mt=ds(),ir=Pe(Mt);if(E=arguments,O=this,j=Mt,ir){if(P===n)return He(j);if(_e)return rf(P),P=Wo(it,l),Ne(j)}return P===n&&(P=Wo(it,l)),k}return Tn.cancel=Dn,Tn.flush=ln,Tn}var uE=tt(function(o,l){return M_(o,1,l)}),dE=tt(function(o,l,d){return M_(o,jn(l)||0,d)});function _E(o){return Ir(o,re)}function _s(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Bn(s);var d=function(){var E=arguments,O=l?l.apply(this,E):E[0],L=d.cache;if(L.has(O))return L.get(O);var k=o.apply(this,E);return d.cache=L.set(O,k)||L,k};return d.cache=new(_s.Cache||Cr),d}_s.Cache=Cr;function fs(o){if(typeof o!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function fE(o){return Yf(2,o)}var gE=e0(function(o,l){l=l.length==1&&Xe(l[0])?xt(l[0],xn(Fe())):xt(Vt(l,1),xn(Fe()));var d=l.length;return tt(function(E){for(var O=-1,L=Qt(E.length,d);++O<L;)E[O]=l[O].call(this,E[O]);return An(o,this,E)})}),xc=tt(function(o,l){var d=Ur(l,Vi(xc));return Ir(o,$,n,l,d)}),Xf=tt(function(o,l){var d=Ur(l,Vi(Xf));return Ir(o,W,n,l,d)}),hE=br(function(o,l){return Ir(o,X,n,n,n,l)});function vE(o,l){if(typeof o!="function")throw new Bn(s);return l=l===n?l:Je(l),tt(o,l)}function pE(o,l){if(typeof o!="function")throw new Bn(s);return l=l==null?0:Ht(Je(l),0),tt(function(d){var E=d[l],O=Yr(d,0,l);return E&&Fr(O,E),An(o,this,O)})}function mE(o,l,d){var E=!0,O=!0;if(typeof o!="function")throw new Bn(s);return Nt(d)&&(E="leading"in d?!!d.leading:E,O="trailing"in d?!!d.trailing:O),qf(o,l,{leading:E,maxWait:l,trailing:O})}function CE(o){return Wf(o,1)}function EE(o,l){return xc(_c(l),o)}function IE(){if(!arguments.length)return[];var o=arguments[0];return Xe(o)?o:[o]}function bE(o){return Yn(o,m)}function wE(o,l){return l=typeof l=="function"?l:n,Yn(o,m,l)}function OE(o){return Yn(o,h|m)}function yE(o,l){return l=typeof l=="function"?l:n,Yn(o,h|m,l)}function LE(o,l){return l==null||G_(o,l,Bt(l))}function rr(o,l){return o===l||o!==o&&l!==l}var AE=os(ec),xE=os(function(o,l){return o>=l}),gi=P_(function(){return arguments}())?P_:function(o){return kt(o)&&mt.call(o,"callee")&&!A_.call(o,"callee")},Xe=K.isArray,SE=l_?xn(l_):$1;function mn(o){return o!=null&&gs(o.length)&&!Or(o)}function Gt(o){return kt(o)&&mn(o)}function NE(o){return o===!0||o===!1||kt(o)&&an(o)==pr}var zr=Ym||Uc,DE=c_?xn(c_):F1;function TE(o){return kt(o)&&o.nodeType===1&&!Yo(o)}function RE(o){if(o==null)return!0;if(mn(o)&&(Xe(o)||typeof o=="string"||typeof o.splice=="function"||zr(o)||ji(o)||gi(o)))return!o.length;var l=Jt(o);if(l==be||l==er)return!o.size;if(Bo(o))return!rc(o).length;for(var d in o)if(mt.call(o,d))return!1;return!0}function kE(o,l){return Uo(o,l)}function GE(o,l,d){d=typeof d=="function"?d:n;var E=d?d(o,l):n;return E===n?Uo(o,l,n,d):!!E}function Sc(o){if(!kt(o))return!1;var l=an(o);return l==Mr||l==yo||typeof o.message=="string"&&typeof o.name=="string"&&!Yo(o)}function ME(o){return typeof o=="number"&&S_(o)}function Or(o){if(!Nt(o))return!1;var l=an(o);return l==Ri||l==$e||l==Jn||l==ap}function Kf(o){return typeof o=="number"&&o==Je(o)}function gs(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=xe}function Nt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function kt(o){return o!=null&&typeof o=="object"}var Zf=u_?xn(u_):H1;function $E(o,l){return o===l||nc(o,l,Cc(l))}function FE(o,l,d){return d=typeof d=="function"?d:n,nc(o,l,Cc(l),d)}function UE(o){return Qf(o)&&o!=+o}function HE(o){if(w0(o))throw new Ve(a);return B_(o)}function PE(o){return o===null}function BE(o){return o==null}function Qf(o){return typeof o=="number"||kt(o)&&an(o)==Ge}function Yo(o){if(!kt(o)||an(o)!=St)return!1;var l=Pa(o);if(l===null)return!0;var d=mt.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&$a.call(d)==Fm}var Nc=d_?xn(d_):P1;function WE(o){return Kf(o)&&o>=-9007199254740991&&o<=xe}var Jf=__?xn(__):B1;function hs(o){return typeof o=="string"||!Xe(o)&&kt(o)&&an(o)==Ao}function Nn(o){return typeof o=="symbol"||kt(o)&&an(o)==xa}var ji=f_?xn(f_):W1;function YE(o){return o===n}function zE(o){return kt(o)&&Jt(o)==xo}function VE(o){return kt(o)&&an(o)==lp}var jE=os(ic),qE=os(function(o,l){return o<=l});function eg(o){if(!o)return[];if(mn(o))return hs(o)?tr(o):pn(o);if(Do&&o[Do])return Lm(o[Do]());var l=Jt(o),d=l==be?zl:l==er?ka:qi;return d(o)}function yr(o){if(!o)return o===0?o:0;if(o=jn(o),o===lt||o===-1/0){var l=o<0?-1:1;return l*we}return o===o?o:0}function Je(o){var l=yr(o),d=l%1;return l===l?d?l-d:l:0}function tg(o){return o?ui(Je(o),0,ct):0}function jn(o){if(typeof o=="number")return o;if(Nn(o))return _t;if(Nt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Nt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=C_(o);var d=Sp.test(o);return d||Dp.test(o)?cm(o.slice(2),d?2:8):xp.test(o)?_t:+o}function ng(o){return lr(o,Cn(o))}function XE(o){return o?ui(Je(o),-9007199254740991,xe):o===0?o:0}function vt(o){return o==null?"":Sn(o)}var KE=Yi(function(o,l){if(Bo(l)||mn(l)){lr(l,Bt(l),o);return}for(var d in l)mt.call(l,d)&&Mo(o,d,l[d])}),rg=Yi(function(o,l){lr(l,Cn(l),o)}),vs=Yi(function(o,l,d,E){lr(l,Cn(l),o,E)}),ZE=Yi(function(o,l,d,E){lr(l,Bt(l),o,E)}),QE=br(Zl);function JE(o,l){var d=Wi(o);return l==null?d:k_(d,l)}var eI=tt(function(o,l){o=It(o);var d=-1,E=l.length,O=E>2?l[2]:n;for(O&&sn(l[0],l[1],O)&&(E=1);++d<E;)for(var L=l[d],k=Cn(L),P=-1,j=k.length;++P<j;){var ae=k[P],se=o[ae];(se===n||rr(se,Hi[ae])&&!mt.call(o,ae))&&(o[ae]=L[ae])}return o}),tI=tt(function(o){return o.push(n,Ef),An(ig,n,o)});function nI(o,l){return h_(o,Fe(l,3),sr)}function rI(o,l){return h_(o,Fe(l,3),Jl)}function iI(o,l){return o==null?o:Ql(o,Fe(l,3),Cn)}function oI(o,l){return o==null?o:U_(o,Fe(l,3),Cn)}function aI(o,l){return o&&sr(o,Fe(l,3))}function sI(o,l){return o&&Jl(o,Fe(l,3))}function lI(o){return o==null?[]:Za(o,Bt(o))}function cI(o){return o==null?[]:Za(o,Cn(o))}function Dc(o,l,d){var E=o==null?n:di(o,l);return E===n?d:E}function uI(o,l){return o!=null&&wf(o,l,R1)}function Tc(o,l){return o!=null&&wf(o,l,k1)}var dI=hf(function(o,l,d){l!=null&&typeof l.toString!="function"&&(l=Fa.call(l)),o[l]=d},kc(En)),_I=hf(function(o,l,d){l!=null&&typeof l.toString!="function"&&(l=Fa.call(l)),mt.call(o,l)?o[l].push(d):o[l]=[d]},Fe),fI=tt(Fo);function Bt(o){return mn(o)?T_(o):rc(o)}function Cn(o){return mn(o)?T_(o,!0):Y1(o)}function gI(o,l){var d={};return l=Fe(l,3),sr(o,function(E,O,L){Er(d,l(E,O,L),E)}),d}function hI(o,l){var d={};return l=Fe(l,3),sr(o,function(E,O,L){Er(d,O,l(E,O,L))}),d}var vI=Yi(function(o,l,d){Qa(o,l,d)}),ig=Yi(function(o,l,d,E){Qa(o,l,d,E)}),pI=br(function(o,l){var d={};if(o==null)return d;var E=!1;l=xt(l,function(L){return L=Wr(L,o),E||(E=L.length>1),L}),lr(o,pc(o),d),E&&(d=Yn(d,h|v|m,d0));for(var O=l.length;O--;)cc(d,l[O]);return d});function mI(o,l){return og(o,fs(Fe(l)))}var CI=br(function(o,l){return o==null?{}:V1(o,l)});function og(o,l){if(o==null)return{};var d=xt(pc(o),function(E){return[E]});return l=Fe(l),X_(o,d,function(E,O){return l(E,O[0])})}function EI(o,l,d){l=Wr(l,o);var E=-1,O=l.length;for(O||(O=1,o=n);++E<O;){var L=o==null?n:o[cr(l[E])];L===n&&(E=O,L=d),o=Or(L)?L.call(o):L}return o}function II(o,l,d){return o==null?o:Ho(o,l,d)}function bI(o,l,d,E){return E=typeof E=="function"?E:n,o==null?o:Ho(o,l,d,E)}var ag=mf(Bt),sg=mf(Cn);function wI(o,l,d){var E=Xe(o),O=E||zr(o)||ji(o);if(l=Fe(l,4),d==null){var L=o&&o.constructor;O?d=E?new L:[]:Nt(o)?d=Or(L)?Wi(Pa(o)):{}:d={}}return(O?Pn:sr)(o,function(k,P,j){return l(d,k,P,j)}),d}function OI(o,l){return o==null?!0:cc(o,l)}function yI(o,l,d){return o==null?o:ef(o,l,_c(d))}function LI(o,l,d,E){return E=typeof E=="function"?E:n,o==null?o:ef(o,l,_c(d),E)}function qi(o){return o==null?[]:Yl(o,Bt(o))}function AI(o){return o==null?[]:Yl(o,Cn(o))}function xI(o,l,d){return d===n&&(d=l,l=n),d!==n&&(d=jn(d),d=d===d?d:0),l!==n&&(l=jn(l),l=l===l?l:0),ui(jn(o),l,d)}function SI(o,l,d){return l=yr(l),d===n?(d=l,l=0):d=yr(d),o=jn(o),G1(o,l,d)}function NI(o,l,d){if(d&&typeof d!="boolean"&&sn(o,l,d)&&(l=d=n),d===n&&(typeof l=="boolean"?(d=l,l=n):typeof o=="boolean"&&(d=o,o=n)),o===n&&l===n?(o=0,l=1):(o=yr(o),l===n?(l=o,o=0):l=yr(l)),o>l){var E=o;o=l,l=E}if(d||o%1||l%1){var O=N_();return Qt(o+O*(l-o+lm("1e-"+((O+"").length-1))),l)}return ac(o,l)}var DI=zi(function(o,l,d){return l=l.toLowerCase(),o+(d?lg(l):l)});function lg(o){return Rc(vt(o).toLowerCase())}function cg(o){return o=vt(o),o&&o.replace(Rp,Im).replace(Qp,"")}function TI(o,l,d){o=vt(o),l=Sn(l);var E=o.length;d=d===n?E:ui(Je(d),0,E);var O=d;return d-=l.length,d>=0&&o.slice(d,O)==l}function RI(o){return o=vt(o),o&&fp.test(o)?o.replace(Ud,bm):o}function kI(o){return o=vt(o),o&&Cp.test(o)?o.replace(xl,"\\$&"):o}var GI=zi(function(o,l,d){return o+(d?"-":"")+l.toLowerCase()}),MI=zi(function(o,l,d){return o+(d?" ":"")+l.toLowerCase()}),$I=_f("toLowerCase");function FI(o,l,d){o=vt(o),l=Je(l);var E=l?Fi(o):0;if(!l||E>=l)return o;var O=(l-E)/2;return is(za(O),d)+o+is(Ya(O),d)}function UI(o,l,d){o=vt(o),l=Je(l);var E=l?Fi(o):0;return l&&E<l?o+is(l-E,d):o}function HI(o,l,d){o=vt(o),l=Je(l);var E=l?Fi(o):0;return l&&E<l?is(l-E,d)+o:o}function PI(o,l,d){return d||l==null?l=0:l&&(l=+l),qm(vt(o).replace(Sl,""),l||0)}function BI(o,l,d){return(d?sn(o,l,d):l===n)?l=1:l=Je(l),sc(vt(o),l)}function WI(){var o=arguments,l=vt(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var YI=zi(function(o,l,d){return o+(d?"_":"")+l.toLowerCase()});function zI(o,l,d){return d&&typeof d!="number"&&sn(o,l,d)&&(l=d=n),d=d===n?ct:d>>>0,d?(o=vt(o),o&&(typeof l=="string"||l!=null&&!Nc(l))&&(l=Sn(l),!l&&$i(o))?Yr(tr(o),0,d):o.split(l,d)):[]}var VI=zi(function(o,l,d){return o+(d?" ":"")+Rc(l)});function jI(o,l,d){return o=vt(o),d=d==null?0:ui(Je(d),0,o.length),l=Sn(l),o.slice(d,d+l.length)==l}function qI(o,l,d){var E=y.templateSettings;d&&sn(o,l,d)&&(l=n),o=vt(o),l=vs({},l,E,Cf);var O=vs({},l.imports,E.imports,Cf),L=Bt(O),k=Yl(O,L),P,j,ae=0,se=l.interpolate||Sa,_e="__p += '",Ee=Vl((l.escape||Sa).source+"|"+se.source+"|"+(se===Hd?Ap:Sa).source+"|"+(l.evaluate||Sa).source+"|$","g"),Ne="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rm+"]")+`
`;o.replace(Ee,function(Pe,it,at,Dn,ln,Tn){return at||(at=Dn),_e+=o.slice(ae,Tn).replace(kp,wm),it&&(P=!0,_e+=`' +
__e(`+it+`) +
'`),ln&&(j=!0,_e+=`';
`+ln+`;
__p += '`),at&&(_e+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),ae=Tn+Pe.length,Pe}),_e+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)_e=`with (obj) {
`+_e+`
}
`;else if(yp.test(He))throw new Ve(c);_e=(j?_e.replace(cp,""):_e).replace(up,"$1").replace(dp,"$1;"),_e="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(j?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var et=dg(function(){return ft(L,Ne+"return "+_e).apply(n,k)});if(et.source=_e,Sc(et))throw et;return et}function XI(o){return vt(o).toLowerCase()}function KI(o){return vt(o).toUpperCase()}function ZI(o,l,d){if(o=vt(o),o&&(d||l===n))return C_(o);if(!o||!(l=Sn(l)))return o;var E=tr(o),O=tr(l),L=E_(E,O),k=I_(E,O)+1;return Yr(E,L,k).join("")}function QI(o,l,d){if(o=vt(o),o&&(d||l===n))return o.slice(0,w_(o)+1);if(!o||!(l=Sn(l)))return o;var E=tr(o),O=I_(E,tr(l))+1;return Yr(E,0,O).join("")}function JI(o,l,d){if(o=vt(o),o&&(d||l===n))return o.replace(Sl,"");if(!o||!(l=Sn(l)))return o;var E=tr(o),O=E_(E,tr(l));return Yr(E,O).join("")}function eb(o,l){var d=de,E=ee;if(Nt(l)){var O="separator"in l?l.separator:O;d="length"in l?Je(l.length):d,E="omission"in l?Sn(l.omission):E}o=vt(o);var L=o.length;if($i(o)){var k=tr(o);L=k.length}if(d>=L)return o;var P=d-Fi(E);if(P<1)return E;var j=k?Yr(k,0,P).join(""):o.slice(0,P);if(O===n)return j+E;if(k&&(P+=j.length-P),Nc(O)){if(o.slice(P).search(O)){var ae,se=j;for(O.global||(O=Vl(O.source,vt(Pd.exec(O))+"g")),O.lastIndex=0;ae=O.exec(se);)var _e=ae.index;j=j.slice(0,_e===n?P:_e)}}else if(o.indexOf(Sn(O),P)!=P){var Ee=j.lastIndexOf(O);Ee>-1&&(j=j.slice(0,Ee))}return j+E}function tb(o){return o=vt(o),o&&_p.test(o)?o.replace(Fd,Nm):o}var nb=zi(function(o,l,d){return o+(d?" ":"")+l.toUpperCase()}),Rc=_f("toUpperCase");function ug(o,l,d){return o=vt(o),l=d?n:l,l===n?ym(o)?Rm(o):vm(o):o.match(l)||[]}var dg=tt(function(o,l){try{return An(o,n,l)}catch(d){return Sc(d)?d:new Ve(d)}}),rb=br(function(o,l){return Pn(l,function(d){d=cr(d),Er(o,d,Ac(o[d],o))}),o});function ib(o){var l=o==null?0:o.length,d=Fe();return o=l?xt(o,function(E){if(typeof E[1]!="function")throw new Bn(s);return[d(E[0]),E[1]]}):[],tt(function(E){for(var O=-1;++O<l;){var L=o[O];if(An(L[0],this,E))return An(L[1],this,E)}})}function ob(o){return N1(Yn(o,h))}function kc(o){return function(){return o}}function ab(o,l){return o==null||o!==o?l:o}var sb=gf(),lb=gf(!0);function En(o){return o}function Gc(o){return W_(typeof o=="function"?o:Yn(o,h))}function cb(o){return z_(Yn(o,h))}function ub(o,l){return V_(o,Yn(l,h))}var db=tt(function(o,l){return function(d){return Fo(d,o,l)}}),_b=tt(function(o,l){return function(d){return Fo(o,d,l)}});function Mc(o,l,d){var E=Bt(l),O=Za(l,E);d==null&&!(Nt(l)&&(O.length||!E.length))&&(d=l,l=o,o=this,O=Za(l,Bt(l)));var L=!(Nt(d)&&"chain"in d)||!!d.chain,k=Or(o);return Pn(O,function(P){var j=l[P];o[P]=j,k&&(o.prototype[P]=function(){var ae=this.__chain__;if(L||ae){var se=o(this.__wrapped__),_e=se.__actions__=pn(this.__actions__);return _e.push({func:j,args:arguments,thisArg:o}),se.__chain__=ae,se}return j.apply(o,Fr([this.value()],arguments))})}),o}function fb(){return zt._===this&&(zt._=Um),this}function $c(){}function gb(o){return o=Je(o),tt(function(l){return j_(l,o)})}var hb=gc(xt),vb=gc(g_),pb=gc(Ul);function _g(o){return Ic(o)?Hl(cr(o)):j1(o)}function mb(o){return function(l){return o==null?n:di(o,l)}}var Cb=vf(),Eb=vf(!0);function Fc(){return[]}function Uc(){return!1}function Ib(){return{}}function bb(){return""}function wb(){return!0}function Ob(o,l){if(o=Je(o),o<1||o>xe)return[];var d=ct,E=Qt(o,ct);l=Fe(l),o-=ct;for(var O=Wl(E,l);++d<o;)l(d);return O}function yb(o){return Xe(o)?xt(o,cr):Nn(o)?[o]:pn(Tf(vt(o)))}function Lb(o){var l=++$m;return vt(o)+l}var Ab=rs(function(o,l){return o+l},0),xb=hc("ceil"),Sb=rs(function(o,l){return o/l},1),Nb=hc("floor");function Db(o){return o&&o.length?Ka(o,En,ec):n}function Tb(o,l){return o&&o.length?Ka(o,Fe(l,2),ec):n}function Rb(o){return p_(o,En)}function kb(o,l){return p_(o,Fe(l,2))}function Gb(o){return o&&o.length?Ka(o,En,ic):n}function Mb(o,l){return o&&o.length?Ka(o,Fe(l,2),ic):n}var $b=rs(function(o,l){return o*l},1),Fb=hc("round"),Ub=rs(function(o,l){return o-l},0);function Hb(o){return o&&o.length?Bl(o,En):0}function Pb(o,l){return o&&o.length?Bl(o,Fe(l,2)):0}return y.after=cE,y.ary=Wf,y.assign=KE,y.assignIn=rg,y.assignInWith=vs,y.assignWith=ZE,y.at=QE,y.before=Yf,y.bind=Ac,y.bindAll=rb,y.bindKey=zf,y.castArray=IE,y.chain=Hf,y.chunk=N0,y.compact=D0,y.concat=T0,y.cond=ib,y.conforms=ob,y.constant=kc,y.countBy=HC,y.create=JE,y.curry=Vf,y.curryRight=jf,y.debounce=qf,y.defaults=eI,y.defaultsDeep=tI,y.defer=uE,y.delay=dE,y.difference=R0,y.differenceBy=k0,y.differenceWith=G0,y.drop=M0,y.dropRight=$0,y.dropRightWhile=F0,y.dropWhile=U0,y.fill=H0,y.filter=BC,y.flatMap=zC,y.flatMapDeep=VC,y.flatMapDepth=jC,y.flatten=Mf,y.flattenDeep=P0,y.flattenDepth=B0,y.flip=_E,y.flow=sb,y.flowRight=lb,y.fromPairs=W0,y.functions=lI,y.functionsIn=cI,y.groupBy=qC,y.initial=z0,y.intersection=V0,y.intersectionBy=j0,y.intersectionWith=q0,y.invert=dI,y.invertBy=_I,y.invokeMap=KC,y.iteratee=Gc,y.keyBy=ZC,y.keys=Bt,y.keysIn=Cn,y.map=us,y.mapKeys=gI,y.mapValues=hI,y.matches=cb,y.matchesProperty=ub,y.memoize=_s,y.merge=vI,y.mergeWith=ig,y.method=db,y.methodOf=_b,y.mixin=Mc,y.negate=fs,y.nthArg=gb,y.omit=pI,y.omitBy=mI,y.once=fE,y.orderBy=QC,y.over=hb,y.overArgs=gE,y.overEvery=vb,y.overSome=pb,y.partial=xc,y.partialRight=Xf,y.partition=JC,y.pick=CI,y.pickBy=og,y.property=_g,y.propertyOf=mb,y.pull=Q0,y.pullAll=Ff,y.pullAllBy=J0,y.pullAllWith=eC,y.pullAt=tC,y.range=Cb,y.rangeRight=Eb,y.rearg=hE,y.reject=nE,y.remove=nC,y.rest=vE,y.reverse=yc,y.sampleSize=iE,y.set=II,y.setWith=bI,y.shuffle=oE,y.slice=rC,y.sortBy=lE,y.sortedUniq=uC,y.sortedUniqBy=dC,y.split=zI,y.spread=pE,y.tail=_C,y.take=fC,y.takeRight=gC,y.takeRightWhile=hC,y.takeWhile=vC,y.tap=DC,y.throttle=mE,y.thru=cs,y.toArray=eg,y.toPairs=ag,y.toPairsIn=sg,y.toPath=yb,y.toPlainObject=ng,y.transform=wI,y.unary=CE,y.union=pC,y.unionBy=mC,y.unionWith=CC,y.uniq=EC,y.uniqBy=IC,y.uniqWith=bC,y.unset=OI,y.unzip=Lc,y.unzipWith=Uf,y.update=yI,y.updateWith=LI,y.values=qi,y.valuesIn=AI,y.without=wC,y.words=ug,y.wrap=EE,y.xor=OC,y.xorBy=yC,y.xorWith=LC,y.zip=AC,y.zipObject=xC,y.zipObjectDeep=SC,y.zipWith=NC,y.entries=ag,y.entriesIn=sg,y.extend=rg,y.extendWith=vs,Mc(y,y),y.add=Ab,y.attempt=dg,y.camelCase=DI,y.capitalize=lg,y.ceil=xb,y.clamp=xI,y.clone=bE,y.cloneDeep=OE,y.cloneDeepWith=yE,y.cloneWith=wE,y.conformsTo=LE,y.deburr=cg,y.defaultTo=ab,y.divide=Sb,y.endsWith=TI,y.eq=rr,y.escape=RI,y.escapeRegExp=kI,y.every=PC,y.find=WC,y.findIndex=kf,y.findKey=nI,y.findLast=YC,y.findLastIndex=Gf,y.findLastKey=rI,y.floor=Nb,y.forEach=Pf,y.forEachRight=Bf,y.forIn=iI,y.forInRight=oI,y.forOwn=aI,y.forOwnRight=sI,y.get=Dc,y.gt=AE,y.gte=xE,y.has=uI,y.hasIn=Tc,y.head=$f,y.identity=En,y.includes=XC,y.indexOf=Y0,y.inRange=SI,y.invoke=fI,y.isArguments=gi,y.isArray=Xe,y.isArrayBuffer=SE,y.isArrayLike=mn,y.isArrayLikeObject=Gt,y.isBoolean=NE,y.isBuffer=zr,y.isDate=DE,y.isElement=TE,y.isEmpty=RE,y.isEqual=kE,y.isEqualWith=GE,y.isError=Sc,y.isFinite=ME,y.isFunction=Or,y.isInteger=Kf,y.isLength=gs,y.isMap=Zf,y.isMatch=$E,y.isMatchWith=FE,y.isNaN=UE,y.isNative=HE,y.isNil=BE,y.isNull=PE,y.isNumber=Qf,y.isObject=Nt,y.isObjectLike=kt,y.isPlainObject=Yo,y.isRegExp=Nc,y.isSafeInteger=WE,y.isSet=Jf,y.isString=hs,y.isSymbol=Nn,y.isTypedArray=ji,y.isUndefined=YE,y.isWeakMap=zE,y.isWeakSet=VE,y.join=X0,y.kebabCase=GI,y.last=Vn,y.lastIndexOf=K0,y.lowerCase=MI,y.lowerFirst=$I,y.lt=jE,y.lte=qE,y.max=Db,y.maxBy=Tb,y.mean=Rb,y.meanBy=kb,y.min=Gb,y.minBy=Mb,y.stubArray=Fc,y.stubFalse=Uc,y.stubObject=Ib,y.stubString=bb,y.stubTrue=wb,y.multiply=$b,y.nth=Z0,y.noConflict=fb,y.noop=$c,y.now=ds,y.pad=FI,y.padEnd=UI,y.padStart=HI,y.parseInt=PI,y.random=NI,y.reduce=eE,y.reduceRight=tE,y.repeat=BI,y.replace=WI,y.result=EI,y.round=Fb,y.runInContext=V,y.sample=rE,y.size=aE,y.snakeCase=YI,y.some=sE,y.sortedIndex=iC,y.sortedIndexBy=oC,y.sortedIndexOf=aC,y.sortedLastIndex=sC,y.sortedLastIndexBy=lC,y.sortedLastIndexOf=cC,y.startCase=VI,y.startsWith=jI,y.subtract=Ub,y.sum=Hb,y.sumBy=Pb,y.template=qI,y.times=Ob,y.toFinite=yr,y.toInteger=Je,y.toLength=tg,y.toLower=XI,y.toNumber=jn,y.toSafeInteger=XE,y.toString=vt,y.toUpper=KI,y.trim=ZI,y.trimEnd=QI,y.trimStart=JI,y.truncate=eb,y.unescape=tb,y.uniqueId=Lb,y.upperCase=nb,y.upperFirst=Rc,y.each=Pf,y.eachRight=Bf,y.first=$f,Mc(y,function(){var o={};return sr(y,function(l,d){mt.call(y.prototype,d)||(o[d]=l)}),o}(),{chain:!1}),y.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){y[o].placeholder=y}),Pn(["drop","take"],function(o,l){ot.prototype[o]=function(d){d=d===n?1:Ht(Je(d),0);var E=this.__filtered__&&!l?new ot(this):this.clone();return E.__filtered__?E.__takeCount__=Qt(d,E.__takeCount__):E.__views__.push({size:Qt(d,ct),type:o+(E.__dir__<0?"Right":"")}),E},ot.prototype[o+"Right"]=function(d){return this.reverse()[o](d).reverse()}}),Pn(["filter","map","takeWhile"],function(o,l){var d=l+1,E=d==me||d==Se;ot.prototype[o]=function(O){var L=this.clone();return L.__iteratees__.push({iteratee:Fe(O,3),type:d}),L.__filtered__=L.__filtered__||E,L}}),Pn(["head","last"],function(o,l){var d="take"+(l?"Right":"");ot.prototype[o]=function(){return this[d](1).value()[0]}}),Pn(["initial","tail"],function(o,l){var d="drop"+(l?"":"Right");ot.prototype[o]=function(){return this.__filtered__?new ot(this):this[d](1)}}),ot.prototype.compact=function(){return this.filter(En)},ot.prototype.find=function(o){return this.filter(o).head()},ot.prototype.findLast=function(o){return this.reverse().find(o)},ot.prototype.invokeMap=tt(function(o,l){return typeof o=="function"?new ot(this):this.map(function(d){return Fo(d,o,l)})}),ot.prototype.reject=function(o){return this.filter(fs(Fe(o)))},ot.prototype.slice=function(o,l){o=Je(o);var d=this;return d.__filtered__&&(o>0||l<0)?new ot(d):(o<0?d=d.takeRight(-o):o&&(d=d.drop(o)),l!==n&&(l=Je(l),d=l<0?d.dropRight(-l):d.take(l-o)),d)},ot.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},ot.prototype.toArray=function(){return this.take(ct)},sr(ot.prototype,function(o,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),O=y[E?"take"+(l=="last"?"Right":""):l],L=E||/^find/.test(l);O&&(y.prototype[l]=function(){var k=this.__wrapped__,P=E?[1]:arguments,j=k instanceof ot,ae=P[0],se=j||Xe(k),_e=function(it){var at=O.apply(y,Fr([it],P));return E&&Ee?at[0]:at};se&&d&&typeof ae=="function"&&ae.length!=1&&(j=se=!1);var Ee=this.__chain__,Ne=!!this.__actions__.length,He=L&&!Ee,et=j&&!Ne;if(!L&&se){k=et?k:new ot(this);var Pe=o.apply(k,P);return Pe.__actions__.push({func:cs,args:[_e],thisArg:n}),new Wn(Pe,Ee)}return He&&et?o.apply(this,P):(Pe=this.thru(_e),He?E?Pe.value()[0]:Pe.value():Pe)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(o){var l=Ga[o],d=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",E=/^(?:pop|shift)$/.test(o);y.prototype[o]=function(){var O=arguments;if(E&&!this.__chain__){var L=this.value();return l.apply(Xe(L)?L:[],O)}return this[d](function(k){return l.apply(Xe(k)?k:[],O)})}}),sr(ot.prototype,function(o,l){var d=y[l];if(d){var E=d.name+"";mt.call(Bi,E)||(Bi[E]=[]),Bi[E].push({name:l,func:d})}}),Bi[ns(n,w).name]=[{name:"wrapper",func:n}],ot.prototype.clone=t1,ot.prototype.reverse=n1,ot.prototype.value=r1,y.prototype.at=TC,y.prototype.chain=RC,y.prototype.commit=kC,y.prototype.next=GC,y.prototype.plant=$C,y.prototype.reverse=FC,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=UC,y.prototype.first=y.prototype.head,Do&&(y.prototype[Do]=MC),y},Ui=km();ai?((ai.exports=Ui)._=Ui,Gl._=Ui):zt._=Ui}).call(lO)}(Zo,Zo.exports)),Zo.exports}var Dt=cO(),B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function In(t,e,n){n!==void 0&&(t[e]=n)}function uO(t){var e,n,r,i,a,s,c,u,f,g,h,v,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(f=t.strokeWidth)!=null&&f.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function au(t){var n,r,i,a,s,c,u,f,g,h,v,m,C,I,b,w,A,R,M,$,W,Y;const e={type:t.type};return In(e,"n",(n=t.n)==null?void 0:n.value),In(e,"r",(r=t.r)==null?void 0:r.value),In(e,"height",(i=t.height)==null?void 0:i.value),In(e,"width",(a=t.width)==null?void 0:a.value),In(e,"inset",(s=t.inset)==null?void 0:s.value),In(e,"angle",(c=t.angle)==null?void 0:c.value),In(e,"fill",(u=t.fill)==null?void 0:u.value),In(e,"stroke",(f=t.stroke)==null?void 0:f.value),In(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),In(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),In(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),In(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),In(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),In(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:w.value,shortenTail:(R=(A=t.linePathOptions)==null?void 0:A.shortenTail)==null?void 0:R.value,bezierRounding:($=(M=t.linePathOptions)==null?void 0:M.bezierRounding)==null?void 0:$.value,closeLoops:(Y=(W=t.linePathOptions)==null?void 0:W.closeLoops)==null?void 0:Y.value}),e}function dO(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const _O={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},fO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},gO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Mh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},$h={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Vs={type:"Line",strokeWidth:.125,stroke:"gray"},rd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},hO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},vO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},pO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):Hh(t)==="[object Array]"}function mO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function CO(t){return t==null?"":mO(t)}function fr(t){return typeof t=="string"}function Fh(t){return typeof t=="number"}function EO(t){return t===!0||t===!1||IO(t)&&Hh(t)=="[object Boolean]"}function Uh(t){return typeof t=="object"}function IO(t){return Uh(t)&&t!==null}function Gn(t){return t!=null}function Vc(t){return!t.trim().length}function Hh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const bO="Incorrect 'index' type",wO=t=>`Invalid value for key ${t}`,OO=t=>`Pattern length exceeds max of ${t}.`,yO=t=>`Missing ${t} property in key`,LO=t=>`Property 'weight' in key '${t}' must be a positive integer`,wg=Object.prototype.hasOwnProperty;class AO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Ph(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ph(t){let e=null,n=null,r=null,i=1,a=null;if(fr(t)||xr(t))r=t,e=Og(t),n=su(t);else{if(!wg.call(t,"name"))throw new Error(yO("name"));const s=t.name;if(r=s,wg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(LO(s));e=Og(s),n=su(s),a=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:a}}function Og(t){return xr(t)?t:t.split(".")}function su(t){return xr(t)?t.join("."):t}function xO(t,e){let n=[],r=!1;const i=(a,s,c)=>{if(Gn(a))if(!s[c])n.push(a);else{let u=s[c];const f=a[u];if(!Gn(f))return;if(c===s.length-1&&(fr(f)||Fh(f)||EO(f)))n.push(CO(f));else if(xr(f)){r=!0;for(let g=0,h=f.length;g<h;g+=1)i(f[g],s,c+1)}else s.length&&i(f,s,c+1)}};return i(t,fr(e)?e.split("."):e,0),r?n:n[0]}const SO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},NO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},DO={location:0,threshold:.6,distance:100},TO={useExtendedSearch:!1,getFn:xO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...NO,...SO,...DO,...TO};const RO=/[^ ]+/g;function kO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const a=i.match(RO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class id{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=kO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Gn(e)||Vc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,a)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Gn(s)){if(xr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:f,value:g}=u.pop();if(Gn(g))if(fr(g)&&!Vc(g)){let h={v:g,i:f,n:this.norm.get(g)};c.push(h)}else xr(g)&&g.forEach((h,v)=>{u.push({nestedArrIndex:v,value:h})})}r.$[a]=c}else if(fr(s)&&!Vc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Bh(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const i=new id({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Ph)),i.setSources(e),i.create(),i}function GO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:i}=t,a=new id({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function Cs(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return i?s+c/i:c?1:s}function MO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(i=a-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const vi=32;function $O(t,e,n,{location:r=Ye.location,distance:i=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:f=Ye.ignoreLocation}={}){if(e.length>vi)throw new Error(OO(vi));const g=e.length,h=t.length,v=Math.max(0,Math.min(r,h));let m=a,C=v;const I=c>1||u,b=I?Array(h):[];let w;for(;(w=t.indexOf(e,C))>-1;){let Y=Cs(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:f});if(m=Math.min(Y,m),C=w+g,I){let X=0;for(;X<g;)b[w+X]=1,X+=1}}C=-1;let A=[],R=1,M=g+h;const $=1<<g-1;for(let Y=0;Y<g;Y+=1){let X=0,re=M;for(;X<re;)Cs(e,{errors:Y,currentLocation:v+re,expectedLocation:v,distance:i,ignoreLocation:f})<=m?X=re:M=re,re=Math.floor((M-X)/2+X);M=re;let de=Math.max(1,v-re+1),ee=s?h:Math.min(v+re,h)+g,le=Array(ee+2);le[ee+1]=(1<<Y)-1;for(let me=ee;me>=de;me-=1){let Ce=me-1,Se=n[t.charAt(Ce)];if(I&&(b[Ce]=+!!Se),le[me]=(le[me+1]<<1|1)&Se,Y&&(le[me]|=(A[me+1]|A[me])<<1|1|A[me+1]),le[me]&$&&(R=Cs(e,{errors:Y,currentLocation:Ce,expectedLocation:v,distance:i,ignoreLocation:f}),R<=m)){if(m=R,C=Ce,C<=v)break;de=Math.max(1,2*v-C)}}if(Cs(e,{errors:Y+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:f})>m)break;A=le}const W={isMatch:C>=0,score:Math.max(.001,R)};if(I){const Y=MO(b,c);Y.length?u&&(W.indices=Y):W.isMatch=!1}return W}function FO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Wh{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:f=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(v,m)=>{this.chunks.push({pattern:v,alphabet:FO(v),startIndex:m})},h=this.pattern.length;if(h>vi){let v=0;const m=h%vi,C=h-m;for(;v<C;)g(this.pattern.substr(v,vi),v),v+=vi;if(m){const I=h-vi;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:i,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let g=[],h=0,v=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:b})=>{const{isMatch:w,score:A,indices:R}=$O(e,C,I,{location:i+b,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});w&&(v=!0),h+=A,w&&R&&(g=[...g,...R])});let m={isMatch:v,score:v?h/this.chunks.length:1};return v&&r&&(m.indices=g),m}}class Qr{constructor(e){this.pattern=e}static isMultiMatch(e){return yg(e,this.multiRegex)}static isSingleMatch(e){return yg(e,this.singleRegex)}search(){}}function yg(t,e){const n=t.match(e);return n?n[1]:null}class UO extends Qr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class HO extends Qr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class PO extends Qr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class BO extends Qr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class WO extends Qr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class YO extends Qr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Yh extends Qr{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:f=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new Wh(e,{location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class zh extends Qr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const lu=[UO,zh,PO,BO,YO,WO,HO,Yh],Lg=lu.length,zO=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,VO="|";function jO(t,e={}){return t.split(VO).map(n=>{let r=n.trim().split(zO).filter(a=>a&&!!a.trim()),i=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,f=-1;for(;!u&&++f<Lg;){const g=lu[f];let h=g.isMultiMatch(c);h&&(i.push(new g(h,e)),u=!0)}if(!u)for(f=-1;++f<Lg;){const g=lu[f];let h=g.isSingleMatch(c);if(h){i.push(new g(h,e));break}}}return i})}const qO=new Set([Yh.type,zh.type]);class XO{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:i=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:f=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=jO(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const g=n[u];s.length=0,a=0;for(let h=0,v=g.length;h<v;h+=1){const m=g[h],{isMatch:C,indices:I,score:b}=m.search(e);if(C){if(a+=1,c+=b,r){const w=m.constructor.type;qO.has(w)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let h={isMatch:!0,score:c/a};return r&&(h.indices=s),h}}return{isMatch:!1,score:1}}}const cu=[];function KO(...t){cu.push(...t)}function uu(t,e){for(let n=0,r=cu.length;n<r;n+=1){let i=cu[n];if(i.condition(t,e))return new i(t,e)}return new Wh(t,e)}const As={AND:"$and",OR:"$or"},du={PATH:"$path",PATTERN:"$val"},_u=t=>!!(t[As.AND]||t[As.OR]),ZO=t=>!!t[du.PATH],QO=t=>!xr(t)&&Uh(t)&&!_u(t),Ag=t=>({[As.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Vh(t,e,{auto:n=!0}={}){const r=i=>{let a=Object.keys(i);const s=ZO(i);if(!s&&a.length>1&&!_u(i))return r(Ag(i));if(QO(i)){const u=s?i[du.PATH]:a[0],f=s?i[du.PATTERN]:i[u];if(!fr(f))throw new Error(wO(u));const g={keyId:su(u),pattern:f};return n&&(g.searcher=uu(f,e)),g}let c={children:[],operator:a[0]};return a.forEach(u=>{const f=i[u];xr(f)&&f.forEach(g=>{c.children.push(r(g))})}),c};return _u(t)||(t=Ag(t)),r(t)}function JO(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:a,score:s})=>{const c=i?i.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function ey(t,e){const n=t.matches;e.matches=[],Gn(n)&&n.forEach(r=>{if(!Gn(r.indices)||!r.indices.length)return;const{indices:i,value:a}=r;let s={indices:i,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function ty(t,e){e.score=t.score}function ny(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const i=[];return n&&i.push(ey),r&&i.push(ty),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(a,c)}),c})}class so{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new AO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof id))throw new Error(bO);this._myIndex=n||Bh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Gn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,i-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=fr(e)?fr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return JO(u,{ignoreFieldNorm:c}),a&&u.sort(s),Fh(n)&&n>-1&&(u=u.slice(0,n)),ny(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=uu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:a,i:s,n:c})=>{if(!Gn(a))return;const{isMatch:u,score:f,indices:g}=n.searchIn(a);u&&i.push({item:a,idx:s,matches:[{score:f,value:a,norm:c,indices:g}]})}),i}_searchLogical(e){const n=Vh(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:h,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:v});return m&&m.length?[{idx:f,item:u,matches:m}]:[]}const g=[];for(let h=0,v=c.children.length;h<v;h+=1){const m=c.children[h],C=r(m,u,f);if(C.length)g.push(...C);else if(c.operator===As.AND)return[]}return g},i=this._myIndex.records,a={},s=[];return i.forEach(({$:c,i:u})=>{if(Gn(c)){let f=r(n,c,u);f.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),f.forEach(({matches:g})=>{a[u].matches.push(...g)}))}}),s}_searchObjectList(e){const n=uu(e,this.options),{keys:r,records:i}=this._myIndex,a=[];return i.forEach(({$:s,i:c})=>{if(!Gn(s))return;let u=[];r.forEach((f,g)=>{u.push(...this._findMatches({key:f,value:s[g],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!Gn(n))return[];let i=[];if(xr(n))n.forEach(({v:a,i:s,n:c})=>{if(!Gn(a))return;const{isMatch:u,score:f,indices:g}=r.searchIn(a);u&&i.push({score:f,key:e,value:a,idx:s,norm:c,indices:g})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:f}=r.searchIn(a);c&&i.push({score:u,key:e,value:a,norm:s,indices:f})}return i}}so.version="7.0.0";so.createIndex=Bh;so.parseIndex=GO;so.config=Ye;so.parseQuery=Vh;KO(XO);function Kr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function ry(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function iy(t){return new so(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function oy(t,e,n){const r=ry(e,n);return t.length===0?r:iy(r).search(t).map(i=>i.item)}function ay(t,e){return Kr(t,e).shape}function bn(t,e){const n=ay(t,e);return n?au(n):void 0}function fa(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return nd(e)}function ga(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return nd(i)})}function sy(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return nd(a)})})}function Jr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function jh(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Dh(e)}function ly(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Dh(r)})}function cy(t,e){const n=t.shape;return n===void 0?void 0:{...bn(e,$t),...n}}function qh(t,e,n){return{toolId:t,cells:e,value:n}}function uy(t,e){const n=ga(e,"cells"),r=Jr(e);return qh(t,n,r)}function Xh(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>je(a,e)&&s>=r)}function dy(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Ws(r[i-1],e)))return t;const s=Xh(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Kh(t,e){return{toolId:t,cells:e,lines:[]}}function _y(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ls(n),{...t,cells:n};const r=n.some(a=>je(a,e)),i=n.some(a=>Ws(a,e));return n.length===1&&!r&&i?(n.push(e),Ls(n),{...t,cells:n}):t}function fy(t,e){const n=t.cells.some(u=>je(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return fu(t,e);const i=t.lines[r-1],a=i.length;if(a===0&&!n)return t;if(a===0&&n)return fu(t,e);const s=Xh(i,e,!1);return(i.length===0?!0:Ws(i[a-1],e))?s>=0?(i.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),i]}):n?t:(i.push(e),{...t,lines:[...t.lines.slice(0,r-1),i]}):t}function fu(t,e){return t.cells.some(r=>je(r,e))?{...t,lines:[...t.lines,[e]]}:t}function gy(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function hy(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function vy(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function py(t,e){const n=ga(e,"cells"),r=sy(e),i=Kh(t,n);return i.lines=r,i}function Zh(t,e,n=""){return{toolId:t,cells:e,value:n}}function my(t,e,n=!1){const r=Gh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function Cy(t,e){return{...t,value:e}}function Ey(t,e){const n=ga(e,"cells"),r=Jr(e);return Zh(t,n,r)}function Qh(t,e,n){return{toolId:t,cells:e,value:n}}function Iy(t,e){const n=ga(e,"cells"),r=Jr(e);return Qh(t,n,r)}function Jh(t,e,n){return{toolId:t,cells:e,value:n}}function by(t,e){const n=ga(e,"cells"),r=Jr(e);return Jh(t,n,r)}function ev(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function wy(t,e){const n=fa(e),r=jh(e),i=Jr(e);return ev(t,n,r,i)}function tv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function Oy(t,e){const n=fa(e),r=Jr(e);return tv(t,n,r)}function nv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function yy(t,e){const n=fa(e),r=jh(e);return nv(t,n,r)}function rv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function Ly(t,e){const n=fa(e),r=ly(e),i=rv(t,n,Be.N);return i.directions=r,i}function iv(t,e,n=""){return{toolId:t,cell:e,value:n}}function Ay(t,e){const n=fa(e),r=Jr(e);return iv(t,n,r)}function xy(t,e=""){return{toolId:t,value:e}}function Sy(t,e){const n=Jr(e);return xy(t,n)}function ha(t,e){return{...t,value:e}}class va extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const a of Object.values(r))i.push(Fy(a));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new va;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=Sh(r);if(a===void 0||!Object.keys($t).includes(a))continue;const s=i;for(const c of s){let u=null;if(Nh(a,Bs)?u=Oy(a,c):qu(a)?u=yy(a,c):Xu(a)?u=Ly(a,c):Ku(a)?u=by(a,c):Lh(a)?u=Iy(a,c):Zu(a)?u=uy(a,c):Qu(a)?u=py(a,c):Ju(a)?u=Ey(a,c):la(a)?u=wy(a,c):Zw(a)?u=Sy(a,c):Ah(a)&&(u=Ay(a,c)),u!==null){n.addToDict(a);const f=Dt.uniqueId(),g=cy(c,a);u.shape=g,n.addConstraint(a,f,u)}}}return n}}function od(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(je(a.cell,n))return[s,a]}return null}function Ny(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(n.every(c=>a.cells.some(u=>je(c,u))))return i}return null}function Dy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=a.cells[a.cells.length-1];if(je(n,s))return i}return null}function xg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>je(c,n)))return[i[0],a]}return null}function Ty(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>je(c,n)))return i;return null}function Sg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>je(c,n)))return[i[0],a]}return null}function Ry(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((f,g)=>je(f,n)&&g>0));if(c>=0)return{id:i,arrow:s,matchLineIdx:c}}return null}function ky(t,e,n,r){const i=t.get(e);if(!i)return null;for(const a of Object.entries(i)){const s=a[1],c=a[0];if(je(n,s.cell)&&r===s.direction)return c}return null}function Gy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(je(n,a.cell))return s}return null}function My(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>je(c,n))||a.cells2.some(c=>je(c,n)))return[i[0],a]}return null}function $y(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const a=i[1];r.add(a.value)}return r}function Fy(t){const e={};if("cells"in t){const n=t.cells.map(r=>ps(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ps(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>ps(i)));e.lines=n}if("cell"in t){const n=ps(t.cell);e.cell=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=bn(t.toolId,$t),r=dO(t.shape,n);r&&(e.shape=r)}return e}function Ng(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function ov(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function gu(t){const e=new Option().style;return e.color=t,e.color!==""}function jc(t){return ov(t)||gu(t)?t:gu(`#${t}`)?`#${t}`:void 0}function xs(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function av(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function hu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function Uy(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Dg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function Hy(t){return t in Dg?Dg[t]:null}function sv(t,e,n){if(n===null)return null;const r=Hy(n);if(r===null)return null;const[i,a]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/a)}function qc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class Py{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=qc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=qc(this.cornerMarks,e))}enterHighlight(e){this.highlights=qc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===_.GIVEN?this.enterGiven(e,r):n===_.DIGIT?this.enterValue(e,r):n===_.CORNER_PM?this.enterCornerPM(e):n===_.CENTER_PM?this.enterCenterPM(e):n===_.HIGHLIGHTS?this.enterHighlight(e):n===_.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==sv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class pa{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const a=[];for(let s=0;s<n;s++){const c=new Py(i,s);if(r){const u=sv(i,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[a,s]=[e.r+i[0],e.c+i[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return av(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),a=i.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:a,c:s}=zs(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const f=this.grid[c][u];i.push(f),[c,u]=[c+a,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new pa(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=i.getCell(a,s);u&&Object.assign(u,c)}return i}}function By(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const a=Math.min(e.nRows,e.nCols),s=Dt.range(1,a+1);t.valid_digits&&!Uy(s,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function Wy(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,i=t.valid_digits,a=t.grid,s=pa.fromJSON(e,n,a),c=Math.min(s.nRows,s.nRows);let u=Dt.range(1,c+1);i!==void 0&&(u=i);const f=t.solution,g=t.local_constraints,h=va.fromJson(g),v=t.bool_constraints,m=to.fromJson(v);return{puzzleMeta:r,solution:f,grid:s,valid_digits:u,localConstraints:h,globalConstraints:m}}var Qo=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Qo||{});const Yy=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),zy=()=>({type:"CLEAR"}),Vy=t=>({type:"DRAG",payload:t}),vu=t=>({type:"SET",payload:t}),jy=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),ad=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),_r=(t,e,n)=>{const r=[...t];return Ls(r),{cells:r,lastCell:e,mode:n}};function qy(t,e,n){if(e===null)return ad();if(n==="RESETTING")return _r([e],e,"SELECTING");const r=t.cells.findIndex(i=>je(e,i));if(n==="SELECTING")return r!==-1?t:_r([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),_r(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return _r([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),_r(i,null,"DESELECTING")}return t}function Xy(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>je(e,r));if(t.mode==="SELECTING")return n!==-1?t:_r([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),_r(r,null,t.mode)}return t}function Ky(t,e){return{...t,cells:e}}function Zy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>je(e,i))!==-1?_r([...t.cells],e,"SELECTING"):_r([...t.cells,e],e,"SELECTING"):_r([e],e,t.mode)}function lv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return ad();case"SET":return Ky(t,e.payload);case"CLICK":return qy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return Xy(t,e.payload);case"ARROW_KEY":return Zy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Qi(t,e){return je(t.p1,e.p1)&&je(t.p2,e.p2)||je(t.p1,e.p2)&&je(t.p2,e.p1)}function Qy(t,e){return je(t.p1,e.p2)&&je(t.p2,e.p1)}function cv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!je(t,e)}class js{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>je(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>je(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>je(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>je(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>je(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>je(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>je(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>je(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>je(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>je(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Qi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>Qi(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&Qy(r,e)&&this.draftLine.splice(n,1)}onDrag(e){cv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>Qi(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(a=>Qi(a,r));if(i!==-1){const a=this.lineMarkers.splice(i,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new js;return Object.assign(e,this),e}}const Tg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Rg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Es=t=>({type:"ADD_CELL_MARKER",payload:t}),Jy=t=>({type:"SET_CELL_MARKERS",payload:t}),kg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),eL=t=>({type:"DRAG",payload:t}),Ss=t=>({type:"ADD_LINE_MARKERS",payload:t}),Gg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),sd=()=>({type:"RESET"});function tL(t,e){switch(e.type){case"RESET":return new js;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function uv(){return{_undoStack:[],_redoStack:[]}}const lo=Ft(uv());function nL(){lo.update(()=>uv())}function un(t,e=!0){lo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function rL(t,e=!0){lo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function dv(){lo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function _v(){lo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ns=Ft(new js);function Sr(t){Ns.update(e=>tL(e,t))}const Ds=Ft(1);function hi(t,e){return{execute:()=>{Sr(t)},unExecute:()=>{Sr(e)}}}const Ii=Ft(ad());function Ki(t){t&&Ii.update(e=>lv(e,t))}function Mg(t){t&&Ii.update(e=>lv(e,t))}function iL(t,e){return{execute:()=>{Mg(t)},unExecute:()=>{Mg(e)}}}const no=Ft(),qs=Ft(ao.SETTING),pu=Ft(!1),Xt=Ft(_.DIGIT),fv=Ft(_.DIGIT),ld=Ft(Dt.range(1,10)),_n=Ft(new pa(9,9)),dn=Ft(st(_n).getAllCells()),Nr=Ft({}),Dr=Ft(new to),rt=Ft(new va),gr=Ft(null),gv=Ft(void 0),Xs=Ft(void 0);function oL(t){Nr.update(()=>t)}function co(t){gr.update(()=>t)}function cd(t){gv.update(()=>t)}function Ar(t){st(Xt)!==t&&(Xt.update(()=>t),co(null))}function aL(){const t=st(fv);t&&Ar(t)}function mu(t){fv.update(()=>t)}function sL(t){st(Xt)===t&&Ar(_.DIGIT)}function lL(t){rt.update(e=>(e.removeFromDict(t),e)),cd(void 0)}function Pt(t,e,n){rt.update(r=>(r.updateConstraint(t,e,n),r)),co({id:e,constraint:n})}function Xc(t){const e=st(gr);if(t=t?{...t}:void 0,cd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Pt(r,e.id,n)}function cL(t,e){const r=st(rt).get(e);if(!r)return;const i=r[t];i&&co({id:t,constraint:i})}function uL(t,e,n){const r=new pa(t,e);_n.update(()=>r),ld.update(()=>n),rt.update(()=>new va),Dr.update(()=>new to),Nr.update(()=>({})),ud(void 0),dn.update(()=>r.getAllCells())}function dL(t){_n.update(()=>t.grid),Nr.update(()=>t.puzzleMeta),ud(t.solution),ld.update(()=>t.valid_digits),rt.update(()=>t.localConstraints),Dr.update(()=>t.globalConstraints),dn.update(()=>t.grid.getAllCells())}function hv(){const t=st(_n);t.resetValues(),_n.update(()=>t),dn.update(()=>t.getAllCells()),Sr(sd())}function Ts(){nL(),Sr(sd()),Ar(_.DIGIT);const t=zy();Ki(t),cd(void 0),co(null)}const vv=fn([Wt,Xt,qs],([t,e,n])=>{const r=t.hideFog,i=e;return![_.FOG,_.REGIONS].includes(i)&&!r&&n===ao.SETTING}),ma=fn([_n,Nr,Dr,rt,Xs,ld],([t,e,n,r,i,a])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function ud(t){Xs.update(()=>t)}var Zi=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Zi||{});const dd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),_d=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),_L=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),fL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),$g=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function pv(t){rt.update(e=>(e.addToDict(t),e))}function ei(t,e){const n=st(gv);n&&(e.shape={...n}),rt.update(r=>(r.addConstraint(e.toolId,t,e),r)),co({id:t,constraint:e})}function bi(t,e){e&&rt.update(n=>(n.removeConstraint(t,e),n))}function gL(t,e){rt.update(n=>(n.setConstraints(t,e),n))}function Fg(t){t.type===Zi.ADD_LOCAL_CONSTRAINT?ei(t.payload.id,t.payload.constraint):t.type===Zi.REMOVE_LOCAL_CONSTRAINT?bi(t.payload.tool,t.payload.id):t.type===Zi.REMOVE_LOCAL_CONSTRAINT_GROUP?lL(t.payload.tool):t.type===Zi.RESTORE_LOCAL_CONSTRAINT_GROUP?gL(t.payload.tool,t.payload.constraints):t.type===Zi.UPDATE_LOCAL_CONSTRAINT&&Pt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ca(t,e){return{execute:()=>{Fg(t)},unExecute:()=>{Fg(e)}}}class Re{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Re(this.x+e.x,this.y+e.y)}subtract(e){return new Re(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Re(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Re(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function hL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const $n=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Re(i.x,i.y)};function Os(t,e=!0,n=.5){const r=Ys(t),i=new Re(r.c+.5,r.r+.5),a=t.distance(i);return!e||a<n?{cell:r,dist:a}:null}function mv(t,e=!0,n=.5){const r=Ys(t),i=new Re(r.c+.5,r.r+.5),a=t.distance(i),s={r:i.y,c:i.x};return!e||a<n?{cellCenter:s,dist:a}:null}function ea(t,e=!0,n=.5){const r=Ys(t),i=iO(r),s=i.map(g=>new Re(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],f=s[c];return!e||f<n?{corner:u,dist:f,idx:c}:null}function ta(t,e=!0,n=.5){const r=Ys(t),i=oO(r),s=i.map(g=>new Re(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],f=s[c];return!e||f<n?{edge:u,dist:f,idx:c}:null}function Kc(t,e=!0,n=.5){const r=ta(t,!1);if(!r)return null;const i=ea(t,!1);if(!i)return null;const a=mv(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,i.corner],u=s.map(I=>new Re(I.c,I.r)).map(I=>I.distance(t)),f=Math.min(...u),g=u.findIndex(I=>I===f),h=s[g],m=["cell center","edge","corner"][g],C={cellCenter:a.cellCenter,edge:r.edge,corner:i.corner,dist:f,target:h,type:m};return!e||f<n?C:null}class uo{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=$n(e,n);if(!i)return;this._prevPoint=i;const a=Os(i,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const i=Os(r,!0,this._margin);if(!i)return;const a=i.cell;if(this._prevCell&&je(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=$n(e,n);if(!r)return;const i=Os(r,!1);if(!i)return;const a=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Ug(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function vL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function Hg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function Pg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function pL(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===_.HIGHLIGHTS&&i.highlights.length?Ug(i,e):i.value!==null?vL(i,e):n===_.CORNER_PM&&i.cornerMarks.length?Hg(i,e):n===_.CENTER_PM&&i.centerMarks.length?Pg(i,e):i.cornerMarks.length?Hg(i,e):i.centerMarks.length?Pg(i,e):i.highlights.length?Ug(i,e):r:r}function ti(t,e,n,r=!1){if(!(t&&e))return;const i=dd(t,e),a=_d(t,n),s=Ca(i,a);un(s,r)}function yi(t,e,n,r=!0){if(!(t&&e))return;const i=_d(t,n),a=dd(t,e),s=Ca(i,a);un(s,r)}function Cu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const a=$g(r,t,n),s=$g(r,t,e),c=Ca(a,s);un(c,i)}function Ks(t,e,n){const r=new uo,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,f=!1,g;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(g||(g={}));let h="DYNAMIC";function v(C){u=!1;const I=C.cell;if(qt(C.cell,i)){if(h==="DYNAMIC"){const w=st(rt),A=Ry(w,n,I);if(A){const M=vy(A.arrow,A.matchLineIdx);Cu(A.id,A.arrow,M,n,!0),f=!0;return}const R=Sg(w,n,I);if(!R)u=!0,h="BULB",c=null,a=null;else{h="BODY",c=R[0],a=R[1],a=fu(a,I),Pt(n,c,a);return}}if(h==="BULB"&&!c){c=Dt.uniqueId(),a=Kh(n,[I]),ei(c,a);return}else h==="BULB"&&c&&a?(a=_y(a,I),Pt(n,c,a)):h==="BODY"&&c&&a&&(a=fy(a,I),Pt(n,c,a))}}return r.onDragStart=C=>{h="DYNAMIC",v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{if(f){f=!1;return}h==="BODY"&&c&&a?gy(a)?(a=hy(a),Pt(n,c,a)):(Cu(c,s,a,n),s=a):h==="BULB"&&(ti(c,a,n),s=a),h="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,b=st(rt);if(Sg(b,n,I)){yi(c,a,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const Zs=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,wn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Qs=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,mL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,tn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,_o=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,fd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Te=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,CL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,EL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,IL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,fo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,bL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,wL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,OL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function yL(t){return qu(t)?CL():Xu(t)?EL():t===_.XV?wL():Ku(t)?IL():Ju(t)?Zs():Qu(t)?Qs():la(t)?mL():Zu(t)?Te():xh(t)?OL():""}const LL={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:_.ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Qs(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}},AL={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:_.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Qs(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}};_.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,B.LINE,Qs(),T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL;function xL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function SL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function NL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function DL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function TL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const RL={Delete:null,Backspace:null};function kL(t,e=10){if(t in RL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function GL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function ML(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function $L(t){const e={KeyZ:_.DIGIT,KeyX:_.CORNER_PM,KeyC:_.CENTER_PM,KeyV:_.HIGHLIGHTS};return t in e?e[t]:_.DIGIT}function FL(t){let e;return t.altKey?e=_.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=_.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=_.CENTER_PM:e=_.HIGHLIGHTS,e}function Cv(t){return t==="Backspace"}function go(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Cv(t.key))}function UL(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function HL(t){return UL(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function PL(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Li(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,f=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${f.source}$`,"i").test(t))}function Tr(t,e,n){if(t===void 0)return t;let r=t;return Cv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Yt(t,e,n,r){const i=new uo,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function g(m){const C=st(rt),I=m.cell;if(qt(m.cell,a)){if(m.event.shiftKey){const w=xg(C,n,I);w&&(c=w[0],s=w[1],co({id:c,constraint:s}),f=1)}if(f===0){const w=xg(C,n,I);if(f=w?2:1,w){yi(w[0],w[1],n);return}}if(!s&&f===1){s=Zh(n,[I]),c=Dt.uniqueId(),ei(c,s);return}else if(s&&c&&f===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=my(s,I,w),Pt(n,c,s);return}}}function h(m){const C=st(gr);if(!C)return;let I=C.constraint;const b=C.id;if(I.value===void 0||!go(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=Cy(I,w),Pt(n,b,I))}return i.onDragStart=m=>{c=null,s=null,f=0,g(m)},i.onDrag=m=>{g(m)},i.onDragEnd=()=>{c&&s&&ti(c,s,n),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{h(m)},keyUp:()=>{}}}const gd=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CAGE_TOOL],On=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CAGE_TOOL];function gn(t,e=5){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function hn(t,e,n){return Tr(t,e,n)}const vn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},BL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},WL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:wn(),tags:[],categories:On}},YL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:wn(),tags:[],categories:On}},zL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SUM_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:wn(),tags:[],categories:On}},VL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Zs(),tags:[],categories:gd}},jL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Zs(),tags:[],categories:gd}},qL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:wn(),tags:[],categories:On}},XL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:wn(),tags:[],categories:On}},KL={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:_.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Zs(),tags:[],categories:gd}};_.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,wn();const ZL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:wn(),tags:[],categories:On}},QL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:wn(),tags:[],categories:On}};_.AQUARIUM_CAGE,z.CAGE_TOOLS,wn();const JL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:wn(),tags:[],categories:On}},eA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:wn(),tags:[],categories:On}},tA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},nA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:wn(),tags:[],categories:On}};var Rn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Rn||{});const rA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Ev=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),iA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),oA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),aA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),sA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),lA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),cA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Zc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),uA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Qc=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Js=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function dA(t,e,n){if(e===_.DIGIT){const r=t.map(s=>s.value),i=rA(t,n),a=Ev(t,r);return[i,a]}if(e===_.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),a=iA(t,n),s=oA(t,r,i);return[a,s]}if(e===_.REGIONS){const r=t.map(s=>s.region),i=aA(t,n),a=sA(t,r);return[i,a]}if(e===_.FOG){const r=t.map(c=>c.fog),a=lA(t,n===1),s=cA(t,r);return[a,s]}if(e===_.HIGHLIGHTS&&n!==null){const r=Qc(t,n),i=Qc(t,n);return[r,i]}if(e===_.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=Qc(t,n),a=Js(t,r);return[i,a]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n!==null){const r=Zc(t,n,e),i=Zc(t,n,e);return[r,i]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n===null){let r=[];e===_.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=Zc(t,n,e),a=uA(t,r,e);return[i,a]}}function zo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),dn.update(i=>i)}function ro(t){switch(t.type){case Rn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;zo(e,_.DIGIT,n,!0);break}case Rn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;zo(e,_.GIVEN,n,!0);break}case Rn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;zo(e,_.REGIONS,n,!0);break}case Rn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;zo(e,_.HIGHLIGHTS,n,!0);break}case Rn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;zo(e,r,n,!0);break}case Rn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];dn.update(r=>r);break}case Rn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];dn.update(i=>i);break}case Rn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];dn.update(r=>r);break}case Rn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];dn.update(r=>r);break}case Rn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===_.CENTER_PM?e[i].centerMarks=r[i]:n===_.CORNER_PM&&(e[i].cornerMarks=r[i]);dn.update(i=>i);break}case Rn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),dn.update(r=>r);break}case Rn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];dn.update(r=>r);break}}}function _A(t,e){return{execute:()=>{ro(t)},unExecute:()=>{ro(e)}}}const Xi=new uo;function Bg(t,e){return t.shiftKey?Qo.SELECTING:t.ctrlKey||t.metaKey||e?Qo.DYNAMIC:t.altKey?Qo.DESELECTING:Qo.RESETTING}function ca(t,e,n,r,i=!1){switch(e){case _.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case _.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case _.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case _.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case _.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case _.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function fA(t,e){const n=[e,_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],r=i=>i===_.CORNER_PM||i===_.CENTER_PM||i===_.DIGIT;for(const i of n){const a=ca(t,i,"any",-1,r(i));if(a.length)return{tool:i,cells:a}}return{tool:e,cells:[]}}function na(t,e,n,r){const i=dA(e,n,r);if(i){const a=i[0],s=i[1],c=_A(a,s),u=vu(t),g=[iL(u,u),c];rL(g)}}function gA(t,e,n){const r=_.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=ca(e,r,"any",-1,!1);if(i.length)return na(n,i,r,t),!0}else{const i=ca(e,r,"different",t,!0);if(i.length)return na(n,i,r,t),!0}return!1}function ni(t,e,n){const r=[_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};Xi.onTap=m=>{if(m.tapCount!==2)return;const I=qt(m.cell,i)?m.cell:null;if(!I)return;const b=pL(I,e,n),w=vu(b);Ki(w)},Xi.onDragStart=m=>{const C=qt(m.cell,i),I=st(pu),b=Bg(m.event,I),w=C?m.cell:null,A=Yy(w,b);Ki(A)},Xi.onDrag=m=>{const I=qt(m.cell,i)?m.cell:null,b=Vy(I);Ki(b)};function a(m){if(!DL(m))return!1;const C=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=vu(C);return Ki(I),!0}function s(m){if(!ML(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=FL(m);return Ar(C),!0}return m.type==="keyup"?(aL(),!0):!1}function c(m){if(!GL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Ar(I),mu(I),!0}else{const C=$L(m.code);return Ar(C),mu(C),!0}}function u(m){if(!HL(m))return!1;const C=st(Ii).lastCell;let I=null;if(C!==null){const[A,R]=PL(m),[M,$]=[Ng(C.r+R,0,i.nRows-1),Ng(C.c+A,0,i.nCols-1)];I={r:M,c:$}}else I={r:0,c:0};const b=Bg(m,!1),w=jy(I,b);return Ki(w),!0}function f(m){const C=kL(m);if(C===void 0)return!1;const I=st(Ii).cells,b=[];if(I.forEach(w=>{const A=e.getCell(w.r,w.c);A&&b.push(A)}),n===_.FOG)return gA(C,b,I);if(C===null){const{tool:w,cells:A}=fA(b,n);if(A.length)return na(I,A,w,C),!0}else{let w=ca(b,n,"different",C,!0);if(w.length)return na(I,w,n,C),!0;if(w=ca(b,n,"equal",C,!0),w.length)return na(I,w,n,C),!0}return!1}function g(m){return m.repeat?!1:f(m.key)}const h=Dt.throttle(m=>{Xi.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&Xi.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){Xi.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||g(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){f(m.currentTarget.value)}}}class hA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=$n(e,n);if(!r)return;const i=Kc(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const i=Kc(r,!1);if(!i||this._prevCoords&&je(this._prevCoords,i.target))return;this._isTap=!1;const a={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&cv(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=$n(e,n);if(!r)return;const i=Kc(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&je(this._prevCoords,i.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function vA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new hA;return r.onTap=a=>{const s=a.coords,c=st(Ds),u=st(Ns);if(a.type==="cell center"){if(!nO(s,n))return;const g=u.getCellMarker(s);if(g)if(g.marker==="X"){const h={...s,colorId:c,marker:"O"},v=Es(h),m=Es(g),C=hi(v,m);un(C)}else{const h=kg(s),v=Es(g),m=hi(h,v);un(m)}else{const h={...s,colorId:c,marker:"X"},v=Es(h),m=kg(s),C=hi(v,m);un(C)}}else if(a.type==="edge"){const f=u.getEdgeMarker(s);if(f){const g=Rg(s),h=Tg(f),v=hi(g,h);un(v)}else{const g={...s,colorId:c},h=Tg(g),v=Rg(s),m=hi(h,v);un(m)}}},r.onDrag=a=>{const s=a.coords,c=st(Ds);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},f=eL(u);Sr(f)}},r.onDragEnd=()=>{const a=st(Ns);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>Qi(c,u)));if(s.length){const c=Ss(s),u=Gg(s),f=hi(c,u);un(f)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>Qi(c,u)));if(s.length){const c=Gg(s),u=Ss(s),f=hi(c,u);un(f)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const pA={getInputHandler:ni,toolId:_.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},mA={getInputHandler:ni,toolId:_.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},CA={getInputHandler:ni,toolId:_.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[T.CELL_INPUT_TOOL]}},EA={getInputHandler:ni,toolId:_.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},IA={getInputHandler:ni,toolId:_.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},bA={getInputHandler:ni,toolId:_.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[T.CELL_INPUT_TOOL]}},wA={getInputHandler:ni,toolId:_.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[T.CELL_INPUT_TOOL]}},OA={getInputHandler:ni,toolId:_.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[T.CELL_INPUT_TOOL]}},yA={getInputHandler:vA,toolId:_.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var ht=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(ht||{});class el{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=$n(e,n);if(!r)return;const i=ta(r,!1);if(!i)return;const a=ea(r,!1);if(!a)return;const s=Os(r,!1);if(!s)return;const c=mv(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=i.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<i.dist?u=a.corner:u=i.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<a.dist&&i.dist<c.dist?u=i.edge:a.dist<i.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let f=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<i.dist&&(f="corner");const g=f==="edge"?2*i.idx:2*a.idx+1,h={event:e,cell:s.cell,edge:i.edge,corner:a.corner,closest:u,edgeIdx:i.idx,cornerIdx:a.idx,direction:g};this.onDragStart&&this.onDragStart(h)}}function hd(t,e,n,r){const i=(r==null?void 0:r.targets)??ht.CLOSEST,a=new el(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(v){const m=st(rt),C=v.cell,I=v.closest;if(!qt(C,s))return;const w=Gy(m,n,I);if(w){bi(n,w);return}c=iv(n,I,""),u=Dt.uniqueId(),ei(u,c)}function g(v){const m=st(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!go(v)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,v.key);b!==void 0&&b!==C.value&&(C=ha(C,b),Pt(n,I,C))}return a.onDragStart=v=>{f(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,B.CIRCLE,fd(),T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT;const LA={getInputHandler(t,e,n){return hd(t,e,n,{targets:ht.CLOSEST,valueUpdater:(r,i)=>Tr(r,i,()=>!0),defaultValue:""})},toolId:_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:fd(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}},AA={getInputHandler(t,e,n){return hd(t,e,n,{targets:ht.CORNER_OR_EDGE,valueUpdater:(r,i)=>Tr(r,i,()=>!0),defaultValue:""})},toolId:_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:fd(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}};function xA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function SA(t,e){const n=Gh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function NA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function DA(t){for(let e=0;;e++){const n=NA(e);if(!t.has(n))return n}}function TA(t,e,n){const r=new uo,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,f="cells2",g;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(g||(g={}));let h=0;function v(C){const I=st(rt),b=C.cell;if(!qt(C.cell,i))return;const A=My(I,n,b);if(h===0&&(A?(c=A[0],a=A[1],h=2,u=b,f=a.cells2.some(M=>je(M,b))?"cells2":"cells"):h=1),h===1&&c===null){c=Dt.uniqueId();const R=$y(I,n),M=DA(R);a=xA(n,[b],M),ei(c,a);return}else if(h===1&&c&&a){a=SA(a,b),Pt(n,c,a);return}else if(h===2&&c&&a&&u){const R={r:b.r-u.r,c:b.c-u.c},$=(f==="cells2"?a.cells2:a.cells).map(Y=>({r:Y.r+R.r,c:Y.c+R.c}));if(!$.every(Y=>qt(Y,i)))return;f==="cells"?a={...a,cells:$}:a={...a,cells2:$},u=b,Pt(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,h=0,u=null,v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{c&&a&&(h===1?ti(c,a,n):h===2&&Cu(c,s,a,n),s=a)},r.onTap=()=>{c&&h!==1&&(bi(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const RA={getInputHandler(t,e,n){return TA(t,e,n)},toolId:_.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[T.CLONE_CONSTRAINT,T.LOCAL_CONSTRAINT]}};class kA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellCorner",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=$n(e,n);if(!r)return;const i=ea(r);if(!i)return;this._prevCellCorner=i.corner;const a={event:e,cellCorner:i.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const i=ea(r);if(!i||this._prevCellCorner&&je(i.corner,this._prevCellCorner))return;const a={event:e,cellCorner:i.corner};this._prevCellCorner=i.corner,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellCorner=null,this._isDown=!1);const r=$n(e,n);!r||ea(r)}}function ri(t,e,n,r){const i=new kA,a={nRows:e.nRows,nCols:e.nCols};let s;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(h){const v=st(rt),m=h.cellCorner,C=Th(m);if(!C.every(w=>qt(w,a)))return;let b=null;if(c===0&&(b=Dy(v,n,m),c=b?2:1),b&&c===2){const w=b[0];yi(w,b[1],n);return}else if(c===1){const w=Qh(n,C,r==null?void 0:r.defaultValue),A=Dt.uniqueId();ti(A,w,n,!0)}}function f(h){const v=st(gr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!go(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=ha(m,I),Pt(n,C,m))}return i.onDragStart=h=>{c=0,u(h)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{f(h)},keyUp:()=>{}}}function tl(t,e=3){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function nl(t,e,n){return Tr(t,e,n)}function GA(t,e){function n(r){return!0}return Tr(t,e,n)}const MA={getInputHandler(t,e,n){return ri(t,e,n,{valueUpdater:(r,i)=>GA(r,i),defaultValue:""})},toolId:_.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:bL(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},$A={getInputHandler(t,e,n){return ri(t,e,n,{valueUpdater:(r,i)=>nl(r,i,tl),defaultValue:""})},toolId:_.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:fo(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},FA={getInputHandler(t,e,n){return ri(t,e,n)},toolId:_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:fo(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},UA={getInputHandler(t,e,n){return ri(t,e,n,{valueUpdater:(r,i)=>nl(r,i,tl),defaultValue:""})},toolId:_.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:fo(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};_.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,B.CIRCLE,fo(),T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL;const HA={getInputHandler(t,e,n){return ri(t,e,n,{defaultValue:"X"})},toolId:_.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:fo(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},PA={getInputHandler(t,e,n){return ri(t,e,n,{defaultValue:""})},toolId:_.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:fo(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};function Le(t,e,n,r){const i=new uo,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function f(h){if(!u||!c)throw"UNREACHABLE";const v=h.cell;qt(h.cell,a)&&(c=dy(c,v,s),Pt(n,u,c))}return i.onDragStart=h=>{u=Dt.uniqueId(),c=qh(n,[],r==null?void 0:r.defaultValue),ei(u,c),f(h)},i.onDrag=h=>{f(h)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?bi(n,u):u&&c&&ti(u,c,n,!1),u=null},i.onTap=h=>{const v=h.cell,m=st(rt),C=Ty(m,n,v);if(C){const[I,b]=C;yi(I,b,n)}},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}function Ze(t,e,n,r,i){const a=new uo,s={nRows:e.nRows,nCols:e.nCols};let c;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function f(v){const m=st(rt),C=v.cell;if(!qt(v.cell,s))return;const b=od(m,n,C);if(u===0&&(u=b?2:1),b&&u===2){const[w,A]=b;yi(w,A,n)}else if(u===1){const w=tv(n,C,i==null?void 0:i.defaultValue),A=Dt.uniqueId();ti(A,w,n,!0)}}a.onDragStart=v=>{u=0,f(v)},a.onDrag=v=>{f(v)};function g(v){const m=st(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!go(v)||!(i!=null&&i.valueUpdater))return;const b=i.valueUpdater(C==null?void 0:C.value,v.key);b!==void 0&&b!==C.value&&(C=ha(C,b),Pt(n,I,C))}return{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:v=>{a.pointerMove(v,t)},pointerUp:v=>{a.pointerUp(v,t)},keyDown:v=>{g(v)},keyUp:()=>{}}}class BA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=$n(e,n);if(!r)return;const i=ta(r,!0,.35);if(!i)return;this._prevCellEdge=i.edge;const a={event:e,edge:i.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const i=ta(r,!0,.35);if(!i||this._prevCellEdge&&je(i.edge,this._prevCellEdge))return;const a={event:e,edge:i.edge};this._prevCellEdge=i.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=$n(e,n);!r||ta(r,!0,.35)}}function yn(t,e,n,r){const i=new BA,a={nRows:e.nRows,nCols:e.nCols};let s;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(h){const v=st(rt),m=h.edge,C=kh(m);if(!C.every(w=>qt(w,a)))return;let b=null;if(c===0&&(b=Ny(v,n,C),c=b?2:1),b&&c===2){const w=b[0];yi(w,b[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",A=Jh(n,C,w),R=Dt.uniqueId();ti(R,A,n,!0)}}function f(h){const v=st(gr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!go(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=ha(m,I),Pt(n,C,m))}return i.onDragStart=h=>{c=0,u(h)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{f(h)},keyUp:()=>{}}}function vd(t,e,n,r=ht.CORNER_OR_EDGE){const i=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],a=new el(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,f;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(f||(f={}));let g=0;function h(C){const I=st(rt),b=C.cell;if(!qt(C.cell,s))return;C.event.altKey&&(g=2);const A=od(I,n,b),R=td(C.direction);if(A){[u,c]=A,c.direction===R||g===2?yi(u,c,n):(c={...c,direction:R},Pt(n,u,c));return}else g!==2&&(c=nv(n,b,R),u=Dt.uniqueId(),ti(u,c,n,!0))}function v(C){if(!c||!u||!TL(C))return;const b=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[b]},Pt(n,u,c)}return a.onDragStart=C=>{g=0,h(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{v(C)},keyUp:()=>{}}}function WA(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function Rr(t,e,n,r=ht.CORNER_OR_EDGE){const i=new el(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function g(v){const m=st(rt),C=v.cell;if(!qt(v.cell,a))return;v.event.altKey&&(f=2);const b=td(v.direction),w=od(m,n,C);if(w){if(c=w[0],s=w[1],f===2)bi(n,w[0]);else{const A=WA(s.directions,b);A.length?(s={...s,directions:A},Pt(n,c,s)):bi(n,c)}return}else f!==2&&(s=rv(n,C,b),c=Dt.uniqueId(),ei(c,s))}return i.onDragStart=v=>{f=0,g(v)},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const Iv=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.EDGE_TOOL],or=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.EDGE_TOOL],Ea=.15,bv=.02,Ai={type:B.CIRCLE,r:{editable:!0,value:Ea,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:bv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}};function YA(t,e=1){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function ho(t,e=3){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function zA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function xi(t,e,n){return Tr(t,e,n)}function VA(t,e){return t===void 0?"V":zA(e)?e.toUpperCase():t}function jA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function qA(t,e){return t===void 0?"<":jA(e)?e:t}const XA={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,YA)})},toolId:_.RATIO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:Ea},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:or}},KA={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,ho)})},toolId:_.DIFFERENCE,order:z.EDGE_TOOLS,shape:Ai,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:or}},ZA={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,ho)})},toolId:_.EDGE_SUM,order:z.EDGE_TOOLS,shape:{...Ai,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:or}},QA={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:VA,defaultValue:"V"})},toolId:_.XV,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:Ea},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:or}},JA={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:qA,defaultValue:"<"})},toolId:_.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:or}},ex={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,ho)})},toolId:_.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{...Ai,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:or}},tx={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,ho)})},toolId:_.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{...Ai,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:or}},nx={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,ho)})},toolId:_.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{...Ai,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:or}},rx={getInputHandler(t,e,n){return yn(t,e,n)},toolId:_.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ea},strokeWidth:{editable:!1,value:bv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:or}},ix={getInputHandler(t,e,n){return yn(t,e,n)},toolId:_.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:Ai,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:or}},ox={getInputHandler(t,e,n){return yn(t,e,n)},toolId:_.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:Ea},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:or}},ax={getInputHandler(t,e,n){return yn(t,e,n)},toolId:_.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:B.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Iv}},sx={getInputHandler(t,e,n){return yn(t,e,n)},toolId:_.EDGE_CAVE_ONE_OF_EACH,order:z.EDGE_TOOLS,shape:Ai,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Iv}};function Rt(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??ht.CORNER_OR_EDGE,a=new el(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(v){const m=st(rt),C=v.cell,I=v.direction,b=td(I);if(qt(C,s))return;const A=Rh(C,b);if(!qt(A,s))return;const M=ky(m,n,C,b);if(M){bi(n,M);return}c=ev(n,C,b,""),u=Dt.uniqueId(),ei(u,c)}function g(v){const m=st(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!go(v)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,v.key);b!==void 0&&b!==C.value&&(C=ha(C,b),Pt(n,I,C))}return a.onDragStart=v=>{f(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}const vo=[T.OUTSIDE_CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_CORNER_TOOL,T.OUTSIDE_DIRECTION_TOOL];function po(t,e=5){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Si(t,e,n){return Tr(t,e,n)}const mo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},lx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,po),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:_.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:_o(),tags:[],categories:vo}},cx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,po),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:_.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:_o(),tags:[],categories:vo}},ux={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,po),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:_.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:_o(),tags:[],categories:vo}},dx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,po),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:_.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:_o(),tags:[],categories:vo}},_x={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,po),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:_.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:_o(),tags:[],categories:vo}},fx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,po),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:_.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:_o(),tags:[],categories:vo}},nn=[T.OUTSIDE_EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_EDGE_TOOL,T.OUTSIDE_DIRECTION_TOOL];function Kt(t,e=5){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function rn(t,e,n){return Tr(t,e,n)}const on={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},gx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:tn(),tags:[],categories:nn}},hx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.SANDWICH_SUM_XOR_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:tn(),tags:[],categories:nn}},vx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:tn(),tags:[],categories:nn}},px={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:tn(),tags:[],categories:nn}},mx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:tn(),tags:[],categories:nn}},Cx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:tn(),tags:[],categories:nn}},Ex={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:tn(),tags:[],categories:nn}},Ix={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:tn(),tags:[],categories:nn}},bx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:tn(),tags:[],categories:nn}},wx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.X_INDEX,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:tn(),tags:[],categories:nn}},Ox={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:tn(),tags:[],categories:nn}};_.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,tn();const yx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:tn(),tags:[],categories:nn}},Lx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:_.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:tn(),tags:[],categories:nn}},Ax={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:_.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:tn(),tags:[],categories:nn}},xx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,Kt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:tn(),tags:[],categories:nn}},Sx={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},Nx={getInputHandler(t,e,n){return vd(t,e,n)},toolId:_.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},Dx={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},Tx={getInputHandler(t,e,n){return yn(t,e,n,{valueUpdater:(r,i)=>xi(r,i,ho)})},toolId:_.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},Rx={getInputHandler(t,e,n){return ri(t,e,n,{valueUpdater:(r,i)=>nl(r,i,tl),defaultValue:""})},toolId:_.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},kx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},Gx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},Mx={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},$x={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},Fx={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:_.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT]}},Ux={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Si(r,i,Kt),defaultValue:"",cornerOrEdge:ht.CORNER_OR_EDGE})},toolId:_.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_DIRECTION_TOOL]}},Co=[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT,T.DIAGONAL_CONSTRAINT],Hx={toolId:_.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Px={toolId:_.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Bx={toolId:_.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Wx={toolId:_.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Yx={toolId:_.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},zx={toolId:_.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Vx={toolId:_.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},jx={toolId:_.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},qx={toolId:_.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Xx={toolId:_.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Kx={toolId:_.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Zx={toolId:_.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Qx={toolId:_.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Co}},Jx={toolId:_.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Co}},eS={toolId:_.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Co}},tS={toolId:_.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Co}},nS={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Co}},rS={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Co}},iS={toolId:_.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},oS={toolId:_.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},aS={toolId:_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},sS={toolId:_.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},lS={toolId:_.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},cS={toolId:_.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},uS={toolId:_.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},dS={toolId:_.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},_S={toolId:_.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},fS={toolId:_.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},gS={toolId:_.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},hS={toolId:_.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},vS={toolId:_.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},pS={toolId:_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},mS={toolId:_.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},CS={toolId:_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},ES={toolId:_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},IS={toolId:_.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},bS={toolId:_.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},wS={toolId:_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},OS={toolId:_.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},yS={toolId:_.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},LS={toolId:_.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},AS={toolId:_.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},xS={toolId:_.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},SS={toolId:_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},NS={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},DS={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},TS={toolId:_.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},RS={toolId:_.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},kS={toolId:_.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},GS={toolId:_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},MS={toolId:_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},$S={toolId:_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},FS={toolId:_.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},US={toolId:_.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},HS={toolId:_.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},PS={toolId:_.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},BS={toolId:_.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},WS={toolId:_.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},YS={toolId:_.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},zS={toolId:_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},VS={toolId:_.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},jS={toolId:_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},qS={toolId:_.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},XS={toolId:_.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},KS={toolId:_.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Ue=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LINE_TOOL],kr=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.DOUBLE_ENDED_LINE_CONSTRAINT,T.LINE_TOOL],Ia={description:"",usage:Te(),tags:[],categories:Ue},ZS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ia,description:"Numbers along a thermometer must increase from the bulb end."}},QS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:_.CUSTOM_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ia,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},JS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Ia,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},eN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ia,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},tN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ia,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},nN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.PALINDROME,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Te(),tags:[],categories:Ue}},rN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Te(),tags:[],categories:Ue}},iN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Te(),tags:[],categories:Ue}},oN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Te(),tags:[],categories:Ue}},aN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Ue}},sN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:Ue}},lN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Te(),tags:[],categories:Ue}},cN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:_.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Te(),tags:[],categories:Ue}},uN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Te(),tags:[],categories:Ue}},dN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Te(),tags:[],categories:Ue}},_N={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:Ue}},fN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Te(),tags:[],categories:Ue}},gN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Te(),tags:[],categories:Ue}},hN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Te(),tags:[],categories:Ue}},vN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Te(),tags:[],categories:Ue}},pN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:_.SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Te(),tags:[],categories:Ue}},mN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Te(),tags:[],categories:Ue}},CN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Te(),tags:[],categories:Ue}},EN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:Ue}},IN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Te(),tags:[],categories:Ue}},bN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:_.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Te(),tags:[],categories:Ue}},wN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Te(),tags:[],categories:Ue}},ON={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Te(),tags:[],categories:Ue}},yN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Te(),tags:[],categories:Ue}},LN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Te(),tags:[],categories:Ue}},AN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Te(),tags:[],categories:Ue}},xN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Te(),tags:[],categories:Ue}},SN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Te(),tags:[],categories:Ue}},NN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Te(),tags:[],categories:Ue}},DN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Te(),tags:[],categories:Ue}},TN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.XV_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Te(),tags:[],categories:Ue}},RN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Te(),tags:[],categories:Ue}},kN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:_.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Te(),tags:[],categories:Ue}},GN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Te(),tags:[],categories:Ue}};_.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,B.LINE,Te();const MN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:_.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Te(),tags:[],categories:Ue}},$N={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Te(),tags:[],categories:Ue}},FN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Te(),tags:[],categories:Ue}},UN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Te(),tags:[],categories:Ue}},HN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Te(),tags:[],categories:Ue}},PN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:_.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Te(),tags:[],categories:Ue}},BN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:_.SEGMENTED_SUM_AND_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Te(),tags:[],categories:Ue}};_.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,B.THERMO_WITH_CIRCLE,Te();const WN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Te(),tags:[],categories:Ue}},YN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Te(),tags:[],categories:Ue}},zN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:Ue}},VN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Te(),tags:[],categories:Ue}},jN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Te(),tags:[],categories:Ue}},qN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Te(),tags:[],categories:Ue}},XN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Te(),tags:[],categories:kr}},KN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:_.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Te(),tags:[],categories:kr}},ZN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Te(),tags:[],categories:kr}},QN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Te(),tags:[],categories:kr}},JN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Te(),categories:kr}},e2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Te(),tags:[],categories:kr}},t2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Te(),tags:[],categories:kr}},n2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:_.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Te(),tags:[],categories:Ue}},r2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:kr}},i2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:kr}},ut=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_SHAPE_TOOL],Eo=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_COLOR_TOOL];function Io(t,e=3){return Li(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function o2(t){return t===""||t==="1"||t==="2"||t==="3"}function Ni(t,e,n){return Tr(t,e,n)}const a2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:ut}},s2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:ut}},l2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},c2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}};_.PRIME_CELL,z.CELL_COLOR_TOOL;const u2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ut}},d2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ut}},_2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ut}},f2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ut}},g2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ut}},h2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,Io),defaultValue:""})},toolId:_.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ut}},v2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,Io),defaultValue:"9"})},toolId:_.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ut}},p2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ut}},m2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:Eo}},C2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:Eo}},E2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Eo}},I2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Eo}},b2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Eo}},w2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ut}},O2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ut}},y2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ut}},L2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ut}},A2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,o2),defaultValue:""})},toolId:_.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ut}},x2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ut}},S2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ut}},N2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ut}},D2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ut}},T2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ut}},R2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ut}},k2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ut}},G2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ut}},M2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ut}},$2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ut}},F2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ut}},U2={getInputHandler(t,e,n){return vd(t,e,n)},toolId:_.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},H2={getInputHandler(t,e,n){return vd(t,e,n)},toolId:_.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},P2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,Io),defaultValue:""})},toolId:_.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ut}},B2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ut}},W2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ut}},Y2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ut}},z2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,Io),defaultValue:""})},toolId:_.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ut}},V2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ut}},j2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,Io),defaultValue:""})},toolId:_.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ut}},q2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ni(r,i,Io),defaultValue:""})},toolId:_.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ut}},ii=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_MULTIARROW_TOOL],bo={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},X2={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:ii}},K2={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:ii}},Z2={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:ii}},Q2={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:ii}},J2={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:ii}},eD={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:ii}},tD={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:ii}},nD={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:_.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:ii}},rD={toolId:_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},iD={toolId:_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},oD={toolId:_.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}};_.VAMPIRE_AND_PREY,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;_.MARKED_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const aD={toolId:_.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},sD={toolId:_.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};_.HOT_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;_.COLD_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;_.DECREMENT_FOUNTAIN,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const lD={toolId:_.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},$t={[_.GIVEN]:pA,[_.DIGIT]:mA,[_.REGIONS]:CA,[_.OUTSIDE]:wA,[_.CORNER_PM]:EA,[_.CENTER_PM]:IA,[_.HIGHLIGHTS]:bA,[_.FOG]:OA,[_.PEN_TOOL]:yA,[_.SUDOKU_RULES_DO_NOT_APPLY]:Hx,[_.LEAVE_EMPTY_CELLS_EMPTY]:Px,[_.LITS]:Yx,[_.HEXED_SUDOKU]:Bx,[_.FILLOMINO]:Wx,[_.ANTIKNIGHT]:zx,[_.ANTIKING]:jx,[_.ANTI_GIRAFFE]:Vx,[_.DISJOINT_GROUPS]:qx,[_.TANGO]:Xx,[_.NONCONSECUTIVE]:Kx,[_.NONRATIO]:Zx,[_.ANTI_ENTROPY]:iS,[_.GLOBAL_INDEXING_COLUMN]:oS,[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:aS,[_.NEGATIVE_DIAGONAL]:Qx,[_.POSITIVE_DIAGONAL]:Jx,[_.NEGATIVE_ANTIDIAGONAL]:eS,[_.POSITIVE_ANTIDIAGONAL]:tS,[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:nS,[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:rS,[_.ALL_RATIOS_GIVEN]:sS,[_.ALL_DIFFERENCES_GIVEN]:lS,[_.ALL_X_GIVEN]:cS,[_.ALL_V_GIVEN]:uS,[_.ALL_XV_GIVEN]:dS,[_.ALL_RADARS_GIVEN]:_S,[_.ALL_XY_DIFFERENCES_GIVEN]:fS,[_.ALL_INDEXING_COLUMN_GIVEN]:gS,[_.ALL_INDEXING_ROW_GIVEN]:hS,[_.ALL_YIN_YANG_KROPKI_GIVEN]:vS,[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:pS,[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:CS,[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:ES,[_.CAVE_CELLS_ARE_ODD]:US,[_.CAVE_WALLS_ARE_EVEN]:FS,[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:MS,[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:$S,[_.DOUBLERS]:aD,[_.NEGATORS]:sD,[_.NEXUS]:lD,[_.UNKNOWN_REGIONS]:IS,[_.YIN_YANG]:bS,[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:wS,[_.NURIMISAKI]:OS,[_.TWO_CONTIGUOUS_REGIONS]:yS,[_.SASHIGANE]:LS,[_.GOLDILOCKS_ZONE]:AS,[_.CELL_CENTER_LOOP_NO_TOUCHING]:xS,[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:SS,[_.NOT_LOOP_SIZED_REGIONS]:TS,[_.MODULAR_LOOP]:RS,[_.CAVE]:kS,[_.CAVE_LITS]:HS,[_.RENBAN_CAVES]:PS,[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:GS,[_.NURIMISAKI_PATH_GERMAN_WHISPERS]:mS,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:NS,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:DS,[_.GALAXIES]:WS,[_.TWO_SYMMETRIC_GALAXIES]:VS,[_.EVERY_CELL_BELONGS_TO_A_GALAXY]:YS,[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:zS,[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:jS,[_.PENTOMINO_TILLING]:qS,[_.TILLING_NO_EMPTY_CELLS]:XS,[_.LITS_BLACK_WHITE_STAR_BATTLE]:KS,[_.ODD]:a2,[_.EVEN]:s2,[_.MINIMUM]:l2,[_.MAXIMUM]:c2,[_.ODD_MINESWEEPER]:u2,[_.EVEN_MINESWEEPER]:d2,[_.WATCHTOWER]:f2,[_.NOT_WATCHTOWER]:g2,[_.FARSIGHT]:h2,[_.RADAR]:v2,[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:_2,[_.ORTHOGONAL_SUM]:p2,[_.DIAGONALLY_ADJACENT_SUM]:w2,[_.INDEXING_COLUMN]:m2,[_.INDEXING_ROW]:C2,[_.LOW_DIGIT]:E2,[_.HIGH_DIGIT]:I2,[_.FRIENDLY_CELL]:b2,[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:O2,[_.SANDWICH_ROW_COL_COUNT]:y2,[_.COUNTING_CIRCLES]:L2,[_.COLORED_COUNTING_CIRCLES]:A2,[_.UNIQUE_CELLS]:x2,[_.YIN_YANG_MINESWEEPER]:S2,[_.YIN_YANG_SEEN_UNSHADED_CELLS]:N2,[_.YIN_YANG_SEEN_SHADED_CELLS]:D2,[_.YIN_YANG_SEEN_SAME_SHADE_CELLS]:T2,[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:R2,[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:k2,[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:G2,[_.SEEN_REGION_BORDERS_COUNT]:M2,[_.NURIMISAKI_UNSHADED_ENDPOINTS]:$2,[_.SASHIGANE_BEND_REGION_COUNT]:F2,[_.SASHIGANE_REGION_SUM]:P2,[_.CELL_ON_THE_LOOP]:B2,[_.CELL_NOT_ON_THE_LOOP]:W2,[_.COUNT_LOOP_NEIGHBOUR_CELLS]:Y2,[_.CAVE_CLUE]:V2,[_.TWILIGHT_CAVE_FILLOMINO_CLUE]:z2,[_.YIN_YANG_FILLOMINO_PARITY]:BS,[_.CHAOS_CONSTRUCTION_CHESS_SUMS]:j2,[_.CHAOS_CONSTRUCTION_ARROW_KNOTS]:q2,[_.SASHIGANE_ARROW_POINTS_TO_BEND]:U2,[_.THERMO_SIGHTLINE_LOOP_ARROW]:H2,[_.HOT_ARROWS]:nD,[_.COLD_ARROWS]:tD,[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:eD,[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:Q2,[_.YIN_YANG_COUNT_SHADED_CELLS]:J2,[_.LOOP_CELL_COUNT_ARROWS]:Z2,[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:K2,[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:X2,[_.DIFFERENCE]:KA,[_.RATIO]:XA,[_.XV]:QA,[_.EDGE_INEQUALITY]:JA,[_.EDGE_SUM]:ZA,[_.EDGE_PRODUCT]:ex,[_.EDGE_MODULO]:tx,[_.EDGE_FACTOR]:nx,[_.XY_DIFFERENCES]:rx,[_.YIN_YANG_WHITE_KROPKI]:ix,[_.YIN_YANG_KROPKI]:ox,[_.UNKNOWN_REGION_BORDER]:ax,[_.EDGE_CAVE_ONE_OF_EACH]:sx,[_.QUADRUPLE]:MA,[_.CORNER_SUM]:$A,[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:FA,[_.CORNER_EVEN_COUNT]:UA,[_.PRODUCT_SQUARE]:HA,[_.EQUAL_DIAGONAL_DIFFERENCES]:PA,[_.THERMOMETER]:ZS,[_.FUZZY_THERMOMETER]:JS,[_.SLOW_THERMOMETER]:eN,[_.CUSTOM_THERMOMETER]:QS,[_.ROW_CYCLE_THERMOMETER]:tN,[_.PALINDROME]:nN,[_.RENBAN_LINE]:rN,[_.DOUBLE_RENBAN_LINE]:iN,[_.RENRENBANBAN_LINE]:oN,[_.N_CONSECUTIVE_RENBAN_LINE]:aN,[_.NABNER_LINE]:sN,[_.WHISPERS_LINE]:lN,[_.DUTCH_WHISPERS]:cN,[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:uN,[_.RENBAN_OR_WHISPERS_LINE]:dN,[_.RENBAN_OR_NABNER_LINE]:_N,[_.OUT_OF_ORDER_CONSECUTIVE_LINE]:fN,[_.INDEX_LINE]:gN,[_.UNIQUE_VALUES_LINE]:hN,[_.REPEATED_DIGITS_LINE]:SN,[_.REGION_SUM_LINE]:vN,[_.SUM_LINE]:pN,[_.XV_LINE]:TN,[_.ROW_SUM_LINE]:RN,[_.AT_LEAST_X_LINE]:kN,[_.SUPERFUZZY_ARROW]:NN,[_.HEADLESS_ARROW]:DN,[_.N_CONSECUTIVE_FUZZY_SUM_LINE]:GN,[_.PRODUCT_LINE]:MN,[_.ADJACENT_MULTIPLES_LINE]:$N,[_.ADJACENT_DIFFERENCES_COUNT_LINE]:FN,[_.LOOK_AND_SAY_LINE]:UN,[_.ARITHMETIC_SEQUENCE_LINE]:mN,[_.ZIPPER_LINE]:HN,[_.SEGMENTED_SUM_LINE]:PN,[_.SEGMENTED_SUM_AND_RENBAN_LINE]:BN,[_.SAME_PARITY_LINE]:CN,[_.MODULAR_LINE]:EN,[_.UNIMODULAR_LINE]:IN,[_.MODULAR_OR_UNIMODULAR_LINE]:bN,[_.ODD_EVEN_OSCILLATOR_LINE]:wN,[_.HIGH_LOW_OSCILLATOR_LINE]:ON,[_.ENTROPIC_LINE]:yN,[_.ENTROPIC_OR_MODULAR_LINE]:LN,[_.INDEXING_COLUMN_IS_X_LINE]:AN,[_.INDEXING_ROW_IS_X_LINE]:xN,[_.YIN_YANG_INDEXING_LINE_COLORING]:jN,[_.YIN_YANG_SHADED_WHISPERS_LINE]:WN,[_.YIN_YANG_UNSHADED_ENTROPIC_LINE]:YN,[_.YIN_YANG_UNSHADED_MODULAR_LINE]:zN,[_.YIN_YANG_REGION_SUM_LINE]:VN,[_.GOLDILOCKS_ZONE_REGION_SUM]:qN,[_.BETWEEN_LINE]:XN,[_.LOCKOUT_LINE]:KN,[_.PARITY_COUNT_LINE]:QN,[_.TIGHTROPE_LINE]:ZN,[_.DOUBLE_ARROW_LINE]:JN,[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:e2,[_.SPLIT_PEAS]:t2,[_.DOUBLERS_THERMOMETER]:n2,[_.DOUBLERS_BETWEEN_LINE]:r2,[_.DOUBLERS_DOUBLE_ARROW_LINE]:i2,[_.ARROW]:LL,[_.AVERAGE_ARROW]:AL,[_.KILLER_CAGE]:BL,[_.UNIQUE_DIGITS_CAGE]:WL,[_.INVERTED_KILLER_CAGE]:YL,[_.SUM_CAGE]:zL,[_.SUM_CAGE_LOOK_AND_SAY]:VL,[_.PARITY_BALANCE_CAGE]:jL,[_.DIVISIBLE_KILLER_CAGE]:qL,[_.SPOTLIGHT_CAGE]:XL,[_.PUTTERIA_CAGE]:KL,[_.MULTISET_CAGE]:ZL,[_.VAULTED_CAGE]:QL,[_.YIN_YANG_ANTITHESIS_KILLER_CAGE]:JL,[_.YIN_YANG_BREAKEVEN_KILLER_CAGE]:eA,[_.DOUBLERS_KILLER_CAGE]:tA,[_.NEGATORS_KILLER_CAGE]:nA,[_.CLONE_REGION]:RA,[_.SANDWICH_SUM]:gx,[_.X_SUM]:vx,[_.SHORTSIGHTED_X_SUM]:px,[_.SHIFTED_X_SUM]:mx,[_.BROKEN_X_SUM]:Cx,[_.X_SUM_SKYSCRAPERS]:Ex,[_.BATTLEFIELD]:Ix,[_.SKYSCRAPERS]:bx,[_.X_INDEX]:wx,[_.SANDWICH_SUM_XOR_X_SUM]:hx,[_.RISING_STREAK]:Ox,[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:yx,[_.OUTSIDE_CONSECUTIVE_SUM]:Lx,[_.LOOPWICHES]:Ax,[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:xx,[_.LITTLE_KILLER_SUM]:lx,[_.LITTLE_KILLER_PRODUCT]:cx,[_.LITTLE_KILLER_LOOK_AND_SAY]:ux,[_.LITTLE_KILLER_REGION_SUM_PRODUCT]:_x,[_.X_OMIT_LITTLE_KILLER_SUM]:dx,[_.NEGATORS_LITTLE_KILLER_SUM]:fx,[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:LA,[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:AA,[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:rD,[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:iD,[_.FORBIDDEN_KNIGHT_SUM]:oD,[_.COSMETIC_CELL_SHAPE]:Sx,[_.COSMETIC_CELL_ARROW]:Nx,[_.COSMETIC_CELL_MULTI_ARROW]:Dx,[_.COSMETIC_EDGE]:Tx,[_.COSMETIC_CORNER]:Rx,[_.COSMETIC_LINE]:kx,[_.COSMETIC_LINE_WITH_CIRCLE_ENDS]:Gx,[_.COSMETIC_LINE_WITH_POLYGON_ENDS]:Mx,[_.COSMETIC_ARROW]:Fx,[_.COSMETIC_CAGE]:$x,[_.COSMETIC_OUTSIDE_DIRECTION]:Ux};var cD=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function wv(t){var e=cD();N(t,e)}var uD=ie('<button class="remove-button svelte-17rdl63"><!></button>');function dD(t,e){let n=F(e,"onTrash",8,()=>{});var r=uD(),i=q(r);wv(i),H(r),De("click",r,Kn(function(...a){var s;(s=n())==null||s.apply(this,a)})),N(t,r)}var _D=ie('<input type="radio" class="radio-select-button svelte-3561wl">'),fD=ie('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ra(t,e){var re,de;te(e,!1);const n=qe(),r=()=>ve(Xt,"$toolStore",n),i=[];let a=F(e,"elementInfo",8),s=F(e,"onClick",12,void 0),c=F(e,"onTrash",8,void 0);const u=a().toolId,f=a().permanent??!1,g=((re=a().menu)==null?void 0:re.name)??a().toolId,h=!((de=a().meta)!=null&&de.categories.includes(T.GLOBAL_CONSTRAINT)),v=`label-${g}`;h&&s(()=>{Ar(u)});function m(){var me,Ce;const ee=(me=a().meta)==null?void 0:me.description,le=((Ce=a().meta)==null?void 0:Ce.usage)??yL(u);let Ie;return ee&&ee.length&&(Ie=ee),le.length&&(Ie?Ie=Ie+`

`+le:Ie=le),Ie}fe();var C=fD(),I=q(C);{var b=ee=>{var le=_D();jt(le),x(le,"id",v),le.value=(le.__value=u)==null?"":u,Ps(i,[],le,()=>r(),Ie=>_a(Xt,Ie)),N(ee,le)};ge(I,ee=>{h&&ee(b)})}var w=U(I,2);Z(()=>x(w,"title",m())),x(w,"aria-labelledby",v);var A=q(w),R=q(A),M=q(R);{var $=ee=>{dD(ee,{get onTrash(){return c()}})};ge(M,ee=>{f||ee($)})}H(R);var W=U(R,2);x(W,"for",v),W.textContent=g,H(A);var Y=U(A,2),X=q(Y);dt(X,e,"default",{}),H(Y),H(w),H(C),Z(()=>Ot(C,"checked",u===r())),De("click",w,Kn(function(...ee){var le;(le=s())==null||le.apply(this,ee)})),N(t,C),ne()}function Ov(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n);let i=F(e,"toolId",8),a=F(e,"elementHandlers",8);const s=()=>{sL(i());const u=r().get(i());if(!u)return;const f=_L(i()),g=fL(i(),u),h=Ca(f,g);un(h)};fe();var c=Ke(()=>Kr(i(),a()));ra(t,{get elementInfo(){return p(c)},onTrash:s}),ne()}var gD=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function hD(t){var e=gD();N(t,e)}var vD=ie('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function rl(t,e){let n=F(e,"isOpen",8,!0);var r=vD(),i=q(r);dt(i,e,"default",{}),H(r),Z(()=>{x(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var pD=ie('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function mD(t,e){te(e,!1);const n=qe(),r=()=>ve(no,"$svgRefStore",n),i=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(gr,"$currentConstraintStore",n),s=D();let c=F(e,"constraintId",8),u=F(e,"toolId",8);function f(){cL(c(),u()),r().focus()}function g(){const w=i().getConstraint(u(),c());if(!w)return;const A=_d(c(),u()),R=dd(c(),w),M=Ca(A,R);un(M)}G(()=>a(),()=>{var w;S(s,(w=a())==null?void 0:w.id)}),pe(),fe();var h=pD(),v=q(h),m=q(v);H(v);var C=U(v,2),I=q(C),b=q(I);wv(b),H(I),H(C),H(h),Z(()=>{Ot(h,"active",c()===p(s)),nt(m,`ID: ${c()??""}`)}),De("click",I,Kn(g)),De("click",h,f),N(t,h),ne()}var CD=ie('<div class="constraint-list svelte-w5npcu"></div>');function yv(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n),i=()=>ve(Xt,"$toolStore",n),a=D();let s=F(e,"toolId",8);G(()=>(r(),Q(s())),()=>{S(a,r().get(s()))}),pe(),fe();var c=Ae(),u=ue(c);{var f=g=>{var h=Ke(()=>s()===i());rl(g,{get isOpen(){return p(h)},children:(v,m)=>{var C=CD();We(C,5,()=>Object.entries(p(a)),I=>I[0],(I,b)=>{mD(I,{get constraintId(){return p(b)[0]},get toolId(){return s()}})}),H(C),N(v,C)},$$slots:{default:!0}})};ge(u,g=>{p(a)&&Object.entries(p(a)).length&&g(f)})}N(t,c),ne()}var ED=ie('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function ID(t,e){let n=F(e,"title",8),r=F(e,"closeCb",8);var i=ED(),a=q(i),s=q(a,!0);H(a);var c=U(a,2);H(i),Z(()=>nt(s,n())),De("click",c,function(...u){var f;(f=r())==null||f.apply(this,u)}),N(t,i)}var bD=ie('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Gr(t,e){te(e,!1);let n=F(e,"showModal",12),r=F(e,"title",8),i=D();function a(){n(!1),p(i).close()}G(()=>(p(i),Q(n())),()=>{p(i)&&n()&&p(i).showModal()}),G(()=>(p(i),Q(n())),()=>{p(i)&&!n()&&p(i).close()}),pe();var s=bD(),c=q(s),u=q(c);ID(u,{get title(){return r()},closeCb:a});var f=U(u,2),g=q(f),h=q(g);dt(h,e,"default",{}),H(g),H(f),H(c),H(s),Ei(s,v=>S(i,v),()=>p(i)),De("click",c,Kn(function(v){kw.call(this,e,v)})),De("close",s,()=>{n(!1)}),De("click",s,Rw(Kn(()=>p(i).close()))),N(t,s),ne()}var wD=ie('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function OD(t,e){te(e,!1);let n=F(e,"searchPattern",12,""),r=F(e,"showModal",8),i=D(null);G(()=>(Q(r()),p(i)),()=>{r()&&p(i)&&p(i).focus()}),pe();var a=wD(),s=U(q(a),2);jt(s),x(s,"spellcheck",!1),Ei(s,c=>S(i,c),()=>p(i)),H(a),qn(s,n),N(t,a),ne()}var yD=ie('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function LD(t,e){let n=F(e,"showModal",12),r=F(e,"searchPattern",12,""),i=F(e,"title",8);Gr(t,{get title(){return i()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=yD(),u=q(c);OD(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var f=U(u,2),g=q(f),h=q(g);dt(h,e,"default",{}),H(g),H(f),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0})}var AD=ie('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),xD=ie('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Xr(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0),i=F(e,"isCollapsible",8,!1);var a=Ae(),s=ue(a);{var c=f=>{var g=AD(),h=q(g),v=q(h),m=q(v,!0);H(v),H(h);var C=U(h,2),I=q(C);dt(I,e,"default",{}),H(C),H(g),Z(()=>nt(m,n())),N(f,g)},u=f=>{var g=xD(),h=q(g),v=q(h),m=q(v,!0);H(v),H(h);var C=U(h,2),I=q(C);dt(I,e,"default",{});var b=U(I,2);H(C),H(g),Z(()=>{nt(m,n()),Ot(b,"open",r())}),De("click",g,()=>r(!r())),N(f,g)};ge(s,f=>{i()?f(u,!1):f(c)})}N(t,a)}var SD=ie('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),ND=ie('<ol class="svelte-cd45on"></ol>'),DD=ie("<!> <!>",1);function TD(t,e){te(e,!1);const n=D();let r=F(e,"category",8),i=F(e,"addTool",8),a=F(e,"searchResults",8),s=D(!0);G(()=>(Q(a()),Q(r())),()=>{S(n,a().filter(g=>{var h,v;return(v=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:v.includes(r())}))}),pe(),fe();var c=Ae(),u=ue(c);{var f=g=>{var h=DD(),v=ue(h);Xr(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(C){S(s,C)},$$legacy:!0});var m=U(v,2);rl(m,{get isOpen(){return p(s)},children:(C,I)=>{var b=ND();We(b,5,()=>p(n),gt,(w,A)=>{let R=()=>p(A).key,M=()=>p(A).info;var $=SD(),W=q($),Y=q(W,!0);H(W),H($),Z(()=>{var X;x(W,"title",(X=M().meta)==null?void 0:X.description),nt(Y,R())}),De("click",W,()=>{i()(R())}),N(w,$)}),H(b),N(C,b)},$$slots:{default:!0}}),N(g,h)};ge(u,g=>{p(n).length&&g(f)})}N(t,c),ne()}function RD(t,e){te(e,!1);const n=D();let r=F(e,"searchPattern",8,""),i=F(e,"addTool",8),a=F(e,"categories",8),s=F(e,"filterFunc",8),c=F(e,"elementHandlers",8);G(()=>(Q(r()),Q(s()),Q(c())),()=>{S(n,oy(r(),s(),c()))}),pe(),fe();var u=Ae(),f=ue(u);We(f,1,a,gt,(g,h)=>{TD(g,{get category(){return p(h)},get searchResults(){return p(n)},get addTool(){return i()}})}),N(t,u),ne()}var kD=ie('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function il(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8);var i=kD();x(i,"tabindex",0);var a=q(i),s=q(a);dt(s,e,"add-button",{}),H(a);var c=U(a,2),u=q(c),f=q(u);dt(f,e,"title-icon",{}),H(u);var g=U(u);H(c);var h=U(c,2),v=q(h);H(h),H(i),Z(()=>{nt(g,` ${r()??""}`),Ot(v,"open",n())}),De("click",i,()=>n(!n())),De("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,i)}var GD=ie('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function MD(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8),i=F(e,"showModal",12);function a(){i(!i())}il(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=GD();De("click",u,Kn(()=>a())),N(s,u)},"title-icon":(s,c)=>{var u=Ae(),f=ue(u);dt(f,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var $D=ie('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),FD=ie('<div class="panel-container svelte-hixu4"><!> <!></div>');function ol(t,e){let n=F(e,"isOpen",8,!0);var r=FD(),i=q(r);dt(i,e,"panel-header",{});var a=U(i,2);rl(a,{get isOpen(){return n()},children:(s,c)=>{var u=$D(),f=q(u);dt(f,e,"panel-content",{}),H(u),N(s,u)},$$slots:{default:!0}}),H(r),N(t,r)}var UD=ie("<!> <!>",1);function pd(t,e){te(e,!1);let n=F(e,"categories",8),r=F(e,"title",8),i=F(e,"onAddTool",8),a=F(e,"elementHandlerFilterFunc",8),s=F(e,"elementHandlers",8),c=D(!0),u=D(!1),f=D("");const g=h=>{S(u,!1),S(c,!0),i()(h)};fe(),ol(t,{get isOpen(){return p(c)},set isOpen(h){S(c,h)},$$slots:{"panel-header":(h,v)=>{var m=UD(),C=ue(m);MD(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(b){S(c,b)},get showModal(){return p(u)},set showModal(b){S(u,b)},$$slots:{"title-icon":(b,w)=>{var A=Ae(),R=ue(A);dt(R,e,"title-icon",{}),N(b,A)}},$$legacy:!0});var I=U(C,2);LD(I,{get title(){return r()},get showModal(){return p(u)},set showModal(b){S(u,b)},get searchPattern(){return p(f)},set searchPattern(b){S(f,b)},children:(b,w)=>{RD(b,{get searchPattern(){return p(f)},get categories(){return n()},get filterFunc(){return a()},addTool:g,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(h,m)},"panel-content":(h,v)=>{var m=Ae(),C=ue(m);dt(C,e,"panel-content",{}),N(h,m)}},$$legacy:!0}),ne()}var HD=ie("<!> <!>",1);function PD(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n),i=D();let a=F(e,"elementHandlers",8);const s=[T.COSMETIC_TOOL],c=u=>{pv(u),Ar(u)};G(()=>(r(),T),()=>{S(i,(u,f)=>{var v;const g=r().has(u);return!!((v=f.meta)!=null&&v.categories.includes(T.COSMETIC_TOOL))&&!g})}),pe(),fe(),pd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,f)=>{hD(u)},"panel-content":(u,f)=>{var g=Ae(),h=ue(g);We(h,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>p(m)[0];var I=Ae(),b=ue(I);{var w=A=>{var R=HD(),M=ue(R);Ov(M,{get toolId(){return C()},get elementHandlers(){return a()}});var $=U(M,2);yv($,{get toolId(){return C()}}),N(A,R)};ge(b,A=>{Qw(C())&&A(w)})}N(v,I)}),N(u,g)}}}),ne()}var Lv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Lv||{});const ys=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Av=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function BD(t,e){Dr.update(n=>n.setConstraint(t,e))}function WD(t){Dr.update(e=>e.removeConstraint(t))}function Wg(t){t.type===Lv.REMOVE_GLOBAL_CONSTRAINT?WD(t.payload):BD(t.payload.tool,t.payload.value)}function Eu(t,e){return{execute:()=>{Wg(t)},unExecute:()=>{Wg(e)}}}var YD=ie('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function zD(t,e){let n=F(e,"value",8,!1);var r=YD(),i=q(r);jt(i),H(r),Z(()=>hh(i,n())),N(t,r)}function VD(t,e){te(e,!1);let n=F(e,"toolId",8),r=F(e,"value",8,!1),i=F(e,"elementHandlers",8);const a=()=>{const u=ys(n(),!r()),f=ys(n(),r()),g=Eu(u,f);un(g)},s=()=>{const u=Av(n()),f=ys(n(),r()),g=Eu(u,f);un(g)};fe();var c=Ke(()=>Kr(n(),i()));ra(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,f)=>{zD(u,{get value(){return r()}})},$$slots:{default:!0}}),ne()}var jD=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function qD(t){var e=jD();N(t,e)}function XD(t,e){te(e,!1);const n=qe(),r=()=>ve(Dr,"$globalConstraintsStore",n),i=D();let a=F(e,"elementHandlers",8);const s=eO,c=u=>{const f=ys(u,!0),g=Av(u),h=Eu(f,g);un(h)};G(()=>r(),()=>{S(i,(u,f)=>{var v;const g=!!((v=f.meta)!=null&&v.categories.includes(T.GLOBAL_CONSTRAINT)),h=r().has(u);return g&&!h})}),pe(),fe(),pd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,f)=>{qD(u)},"panel-content":(u,f)=>{var g=Ae(),h=ue(g);We(h,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];VD(v,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),N(u,g)}}}),ne()}var KD=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function ZD(t){var e=KD();N(t,e)}var QD=ie("<!> <!>",1),JD=ie("<!> <!> <!> <!>",1);function eT(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n),i=D();let a=F(e,"elementHandlers",8);const s=Jw,c=u=>{pv(u),Ar(u)};G(()=>(r(),T),()=>{S(i,(u,f)=>{var v;const g=r().has(u);return!!((v=f.meta)!=null&&v.categories.includes(T.LOCAL_CONSTRAINT))&&!g})}),pe(),fe(),pd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,f)=>{ZD(u)},"panel-content":(u,f)=>{var g=JD(),h=ue(g),v=Ke(()=>Kr(_.GIVEN,a()));ra(h,{get elementInfo(){return p(v)}});var m=U(h,2),C=Ke(()=>Kr(_.REGIONS,a()));ra(m,{get elementInfo(){return p(C)}});var I=U(m,2),b=Ke(()=>Kr(_.FOG,a()));ra(I,{get elementInfo(){return p(b)}});var w=U(I,2);We(w,1,()=>r().entries(),([A,R])=>A,(A,R)=>{let M=()=>p(R)[0];var $=Ae(),W=ue($);{var Y=X=>{var re=QD(),de=ue(re);Ov(de,{get toolId(){return M()},get elementHandlers(){return a()}});var ee=U(de,2);yv(ee,{get toolId(){return M()}}),N(X,re)};ge(W,X=>{Xw(M())&&X(Y)})}N(A,$)}),N(u,g)}}}),ne()}var tT=ie('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Jc(t,e){te(e,!1);const n=D();let r=F(e,"value",8),i=F(e,"onChangeCb",8,void 0),a=D(void 0);function s(m){const C=jc(m);C&&i()&&i()(C)}G(()=>Q(r()),()=>{S(n,r())}),G(()=>(p(n),jc),()=>{gu(p(n))&&S(a,jc(p(n)))}),pe(),fe();var c=tT(),u=q(c);const f=Ke(()=>ov(p(n)));var g=q(u);jt(g),H(u);var h=U(u,2),v=U(q(h),2);jt(v),x(v,"spellcheck",!1),x(v,"maxlength",30),H(h),H(c),Z(()=>{x(u,"style",`--choosen-color: ${p(a)??""}`),Ot(u,"transparent",p(f))}),qn(g,()=>p(n),m=>S(n,m)),De("change",g,()=>s(p(n))),qn(v,()=>p(n),m=>S(n,m)),De("input",v,()=>s(p(n))),N(t,c),ne()}var nT=ie('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ia(t,e){let n=F(e,"name",8);var r=nT(),i=q(r),a=q(i,!0);H(i);var s=U(i,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var rT=ie('<input class="control-slider svelte-1rsuho6" type="range">');function iT(t,e){te(e,!1);let n=F(e,"min",8),r=F(e,"max",8),i=F(e,"value",12),a=F(e,"step",24,()=>(r()-n())/10),s=F(e,"onChangeCb",8,void 0),c=F(e,"onInputCb",8,void 0);fe();var u=rT();jt(u),Z(()=>{x(u,"min",n()),x(u,"max",r()),x(u,"step",a())}),qn(u,i),De("change",u,()=>{s()&&s()(i())}),De("input",u,()=>{c()&&c()(i())}),N(t,u),ne()}function Vr(t,e){let n=F(e,"name",8),r=F(e,"value",12),i=F(e,"min",8),a=F(e,"max",8),s=F(e,"step",24,()=>(a()-i())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);ia(t,{get name(){return`${n()??""}: ${r()??""}`},children:(f,g)=>{iT(f,{get min(){return i()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var oT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function aT(t){var e=oT();N(t,e)}var sT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function lT(t){var e=sT();N(t,e)}var cT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function uT(t){var e=cT();N(t,e)}var dT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function _T(t){var e=dT();N(t,e)}var fT=ie('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function gT(t,e){te(e,!1);const n=[];let r=F(e,"value",8),i=F(e,"selectedShape",12),a=F(e,"title",8),s=F(e,"updateShapeCb",8,void 0);fe();var c=fT(),u=q(c);jt(u);var f,g=U(u,2);dt(g,e,"default",{}),H(c),Z(()=>{x(c,"title",a()),Ot(c,"active",r()===i()),f!==(f=r())&&(u.value=(u.__value=r())==null?"":r())}),Ps(n,[],u,()=>(r(),i()),i),De("change",u,()=>s()&&s()(r())),N(t,c),ne()}var hT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function vT(t){var e=hT(),n=q(e);x(n,"cx",480),x(n,"cy",-480),x(n,"rx",480),x(n,"ry",300),H(e),N(t,e)}var pT=ie('<div class="icon-wrapper svelte-18euf14"><!></div>'),mT=ie('<div class="radio-container svelte-18euf14"></div>');function CT(t,e){te(e,!1);let n=F(e,"name",8),r=F(e,"selectedShape",8),i=F(e,"possibleShapes",8),a=F(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,uT],[B.ELLIPSE,vT],[B.SQUARE,lT],[B.RECTANGLE,aT],[B.POLYGON,_T]]);fe(),ia(t,{get name(){return n()},children:(c,u)=>{var f=mT();We(f,5,i,gt,(g,h)=>{gT(g,{get title(){return p(h)},get value(){return p(h)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(v,m)=>{var C=Ae(),I=ue(C);{var b=w=>{var A=pT(),R=q(A);ch(R,()=>s.get(p(h)),(M,$)=>{$(M,{})}),H(A),N(w,A)};ge(I,w=>{s.has(p(h))&&w(b)})}N(v,C)},$$slots:{default:!0}})}),H(f),N(c,f)},$$slots:{default:!0}}),ne()}var ET=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function IT(t){var e=ET();N(t,e)}var bT=ie('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),wT=ie("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function OT(t,e){te(e,!1);const n=qe(),r=()=>ve(Xt,"$toolStore",n),i=()=>ve(gr,"$currentConstraintStore",n),a=D(),s=D(),c=D();let u=D(!0),f=F(e,"elementHandlers",8);function g(b,w){const A=(b==null?void 0:b.shape)??(w?au(w):void 0);return Xc(A),A}function h(b,w){p(c)&&(dw(c,p(c)[b]=w),Xc(p(c)))}function v(){p(s)&&(S(c,au(p(s))),Xc(p(c)))}function m(b){return b&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function C(b){return b&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[B.ELLIPSE,B.RECTANGLE].includes(b)}G(()=>(r(),Q(f())),()=>{S(a,Kr(r(),f()))}),G(()=>p(a),()=>{S(s,p(a).shape)}),G(()=>(i(),p(s)),()=>{var b;S(c,g(((b=i())==null?void 0:b.constraint)??null,p(s)))}),pe(),fe(),ol(t,{get isOpen(){return p(u)},set isOpen(b){S(u,b)},$$slots:{"panel-header":(b,w)=>{il(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(A){S(u,A)},$$slots:{"title-icon":(A,R)=>{IT(A)}},$$legacy:!0})},"panel-content":(b,w)=>{var A=Ae(),R=ue(A);{var M=$=>{var W=wT(),Y=ue(W);{var X=$e=>{var be=bT();De("click",be,v),N($e,be)};ge(Y,$e=>{uO(p(s))&&$e(X)})}var re=U(Y,2);{var de=$e=>{CT($e,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:be=>h("type",be)})};ge(re,$e=>{var be;p(s).allowedTypes&&p(s).allowedTypes.length&&((be=p(c))!=null&&be.type)&&$e(de)})}var ee=U(re,2);{var le=$e=>{var be=Ke(()=>p(s).n.lb??3),Ge=Ke(()=>p(s).n.ub??10);Vr($e,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(be)},get max(){return p(Ge)},step:1,onChangeCb:Me=>h("n",Me)})};ge(ee,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.n)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.n)!=null&&Me.editable)&&C(p(c).type)&&$e(le)})}var Ie=U(ee,2);{var me=$e=>{var be=Ke(()=>p(s).r.lb??0),Ge=Ke(()=>p(s).r.ub??1),Me=Ke(()=>p(s).r.step??.05);Vr($e,{name:"Radius",get value(){return p(c).r},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("r",St)})};ge(Ie,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.r)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.r)!=null&&Me.editable)&&m(p(c).type)&&$e(me)})}var Ce=U(Ie,2);{var Se=$e=>{var be=Ke(()=>p(s).width.lb??0),Ge=Ke(()=>p(s).width.ub??1),Me=Ke(()=>p(s).width.step??.05);Vr($e,{name:"Width",get value(){return p(c).width},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("width",St)})};ge(Ce,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.width)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.width)!=null&&Me.editable)&&I(p(c).type)&&$e(Se)})}var lt=U(Ce,2);{var xe=$e=>{var be=Ke(()=>p(s).height.lb??0),Ge=Ke(()=>p(s).height.ub??1),Me=Ke(()=>p(s).height.step??.05);Vr($e,{name:"Height",get value(){return p(c).height},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("height",St)})};ge(lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.height)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.height)!=null&&Me.editable)&&I(p(c).type)&&$e(xe)})}var we=U(lt,2);{var _t=$e=>{var be=Ke(()=>p(s).angle.lb??0),Ge=Ke(()=>p(s).angle.ub??360),Me=Ke(()=>p(s).angle.step??15);Vr($e,{name:"Angle",get value(){return p(c).angle},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("angle",St)})};ge(we,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.angle)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.angle)!=null&&Me.editable)&&$e(_t)})}var ct=U(we,2);{var Un=$e=>{var be=Ke(()=>p(s).inset.lb??0),Ge=Ke(()=>p(s).inset.ub??.5),Me=Ke(()=>p(s).inset.step??.01);Vr($e,{name:"Inset",get value(){return p(c).inset},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("inset",St)})};ge(ct,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.inset)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.inset)!=null&&Me.editable)&&$e(Un)})}var Lt=U(ct,2);{var Ln=$e=>{ia($e,{name:"Stroke",children:(be,Ge)=>{Jc(be,{get value(){return p(c).stroke},onChangeCb:Me=>h("stroke",Me)})},$$slots:{default:!0}})};ge(Lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.stroke)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.stroke)!=null&&Me.editable)&&$e(Ln)})}var Zt=U(Lt,2);{var vr=$e=>{var be=Ke(()=>p(s).strokeWidth.lb??0),Ge=Ke(()=>p(s).strokeWidth.ub??.8),Me=Ke(()=>p(s).strokeWidth.step??.01);Vr($e,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("strokeWidth",St)})};ge(Zt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeWidth)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeWidth)!=null&&Me.editable)&&$e(vr)})}var Jn=U(Zt,2);{var pr=$e=>{var be=Ke(()=>p(s).strokeDasharray.lb??0),Ge=Ke(()=>p(s).strokeDasharray.ub??1),Me=Ke(()=>p(s).strokeDasharray.step??.01);Vr($e,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>h("strokeDasharray",St)})};ge(Jn,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeDasharray)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeDasharray)!=null&&Me.editable)&&$e(pr)})}var ar=U(Jn,2);{var yo=$e=>{ia($e,{name:"Fill",children:(be,Ge)=>{Jc(be,{get value(){return p(c).fill},onChangeCb:Me=>h("fill",Me)})},$$slots:{default:!0}})};ge(ar,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fill)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fill)!=null&&Me.editable)&&$e(yo)})}var Mr=U(ar,2);{var Ri=$e=>{ia($e,{name:"Font Color",children:(be,Ge)=>{Jc(be,{get value(){return p(c).fontColor},onChangeCb:Me=>h("fontColor",Me)})},$$slots:{default:!0}})};ge(Mr,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fontColor)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fontColor)!=null&&Me.editable)&&$e(Ri)})}N($,W)};ge(R,$=>{p(s)&&$(M)})}N(b,A)}},$$legacy:!0}),ne()}var yT=ie('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function ba(t,e){let n=F(e,"clickCb",8),r=F(e,"title",8);var i=yT(),a=q(i),s=q(a);dt(s,e,"default",{}),H(a),H(i),Z(()=>x(i,"title",r())),De("click",i,Kn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,i)}var LT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function AT(t){var e=LT();N(t,e)}var xT=ie('<div class="buttons-container svelte-kc00rw"><!></div>');function al(t,e){var n=xT(),r=q(n);dt(r,e,"default",{}),H(n),N(t,n)}var ST=ie('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),NT=ie('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),DT=ie('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function TT(t,e){te(e,!1);const n=qe(),r=()=>ve(Nr,"$puzzleMetaStore",n),i=()=>ve(Dr,"$globalConstraintsStore",n),a=()=>ve(rt,"$localConstraintsStore",n);let s=F(e,"showModal",12,!1),c=D(""),u=D(""),f=D(""),g=D(""),h=D("");function v(){s(!1)}function m(){const w=p(u)?C(p(u)):["Anonymous"],R={title:p(c)?p(c):"Sudoku",authors:w,ruleset:p(f),ctcYoutubeUrl:p(g),ctcUrl:p(h)};oL(R),s(!1)}function C(w){return w.split(/\s*[;]\s*/)}function I(){var W,Y,X,re;let w="";const A=$t,R=i();!!R.get(_.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[de,ee]of R.entries())if(de!==_.SUDOKU_RULES_DO_NOT_APPLY&&ee){const le=A[de],Ie=((W=le.menu)==null?void 0:W.name)??le.toolId,me=(Y=le.meta)==null?void 0:Y.description;w+=`**${Ie}**: ${me}

`}const $=a();for(const[de,ee]of $.entries())if(Object.keys(ee).length>0){const Ie=A[de],me=((X=Ie.menu)==null?void 0:X.name)??Ie.toolId,Ce=(re=Ie.meta)==null?void 0:re.description;w+=`**${me}**: ${Ce}

`}return w.trim()}function b(){const w=I();S(f,w)}G(()=>(Q(s()),r(),xs),()=>{if(!s()){const w=r().authors;S(c,r().title??""),S(u,w?xs(w,"; ","; "):""),S(f,r().ruleset??""),S(g,r().ctcYoutubeUrl??""),S(h,r().ctcUrl??"")}}),pe(),fe(),Gr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(w){s(w)},children:(w,A)=>{var R=DT(),M=q(R);Xr(M,{title:"Title"});var $=U(M,2);jt($);var W=U($,2);Xr(W,{title:"Authors"});var Y=U(W,2);jt(Y);var X=U(Y,2);Xr(X,{title:"Ruleset",children:(Ce,Se)=>{var lt=ST();De("click",lt,b),N(Ce,lt)},$$slots:{default:!0}});var re=U(X,2);Iw(re),x(re,"rows",8);var de=U(re,2);Xr(de,{title:"CTC Link"});var ee=U(de,2);jt(ee);var le=U(ee,2);Xr(le,{title:"CTC Youtube Link"});var Ie=U(le,2);jt(Ie);var me=U(Ie,2);al(me,{children:(Ce,Se)=>{var lt=NT(),xe=ue(lt),we=U(xe,2);De("click",xe,m),De("click",we,v),N(Ce,lt)},$$slots:{default:!0}}),H(R),qn($,()=>p(c),Ce=>S(c,Ce)),qn(Y,()=>p(u),Ce=>S(u,Ce)),qn(re,()=>p(f),Ce=>S(f,Ce)),qn(ee,()=>p(h),Ce=>S(h,Ce)),qn(Ie,()=>p(g),Ce=>S(g,Ce)),N(w,R)},$$slots:{default:!0},$$legacy:!0}),ne()}var RT=ie("<!> <!>",1);function kT(t){let e=D(!1);function n(){S(e,!0)}var r=RT(),i=ue(r);ba(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{AT(s)},$$slots:{default:!0}});var a=U(i,2);TT(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var GT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function MT(t){var e=GT();N(t,e)}var $T=ie('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function FT(t,e){te(e,!1);let n=D(null),r=D(null);function i(){var a;(a=p(n))==null||a.click()}G(()=>(p(r),Ts),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const f=JSON.parse(u),g=Wy(f);console.log(g),dL(g),Ts()}},s.onerror=function(){alert(s.error)}}}),pe(),fe(),ba(t,{title:"Open Puzzle",clickCb:i,children:(a,s)=>{var c=$T(),u=ue(c);MT(u);var f=U(u,2);Ei(f,g=>S(n,g),()=>p(n)),Tw(f,()=>p(r),g=>S(r,g)),N(a,c)},$$slots:{default:!0}}),ne()}var UT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function HT(t){var e=UT();N(t,e)}var PT=ie('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Yg(t,e){te(e,!1);let n=F(e,"name",8),r=F(e,"min",8),i=F(e,"max",8),a=F(e,"value",12),s=F(e,"step",24,()=>(i()-r())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);fe();var f=PT(),g=q(f),h=q(g);H(g);var v=U(g,2);jt(v),H(f),Z(()=>{nt(h,`${n()??""}: ${a()??""}`),x(v,"min",r()),x(v,"max",i()),x(v,"step",s())}),qn(v,a),De("change",v,()=>{c()&&c()(a())}),De("input",v,()=>{u()&&u()(a())}),N(t,f),ne()}var BT=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),WT=ie('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function YT(t,e){te(e,!1);let n=F(e,"showModal",12,!1);const r=4,i=20;let a=D(9),s=D(9),c=D(""),u=D(Dt.range(1,10));function f(){n(!1)}function g(){Ts(),uL(p(s),p(a),p(u).sort()),n(!1)}function h(C){return C.map(b=>String(b)).join(",")}function v(){const C=Math.min(Math.max(p(s),p(a)),9);S(u,Dt.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&S(u,C.replaceAll(" ","").split(",").map(Number))}fe(),Gr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var b=WT(),w=q(b);Yg(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return p(a)},set value(Y){S(a,Y)},$$legacy:!0});var A=U(w,2);Yg(A,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return p(s)},set value(Y){S(s,Y)},$$legacy:!0});var R=U(A,2),M=Ke(()=>`Allowed Digits (for the solver): ${h(p(u))}`);Xr(R,{get title(){return p(M)}});var $=U(R,2);jt($),Z(()=>x($,"placeholder",h(p(u))));var W=U($,2);al(W,{children:(Y,X)=>{var re=BT(),de=ue(re),ee=U(de,2);De("click",de,g),De("click",ee,f),N(Y,re)},$$slots:{default:!0}}),H(b),qn($,()=>p(c),Y=>S(c,Y)),De("input",$,()=>m(p(c))),N(C,b)},$$slots:{default:!0},$$legacy:!0}),ne()}var zT=ie("<!> <!>",1);function VT(t){let e=D(!1);function n(){S(e,!0)}var r=zT(),i=ue(r);ba(i,{title:"New Puzzle",clickCb:n,children:(s,c)=>{HT(s)},$$slots:{default:!0}});var a=U(i,2);YT(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var jT=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function qT(t){var e=jT();N(t,e)}var XT=ie('<button class="modal-button">Cancel</button>'),KT=ie('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function ZT(t,e){te(e,!1);const n=qe(),r=()=>ve(no,"$svgRefStore",n),i=()=>ve(ma,"$puzzleStore",n),a=()=>ve(Nr,"$puzzleMetaStore",n),s=D();let c=F(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let A="";for(let R of w){const M=w.getPropertyValue(R);M&&(A+=`${R}:${M};`)}return A}function f(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const A=b.childNodes;for(let R=0;R<A.length;R++){const M=A[R];if(M instanceof Element){const $=f(M);w.replaceChild($,w.childNodes[R])}}return w}function g(b,w="download.png"){const A=f(b),M=new XMLSerializer().serializeToString(A),$=new Image,W=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),Y=URL.createObjectURL(W);$.onload=()=>{const X=b.getBoundingClientRect(),re=X.width,de=X.height,ee=document.createElement("canvas"),le=window.devicePixelRatio||1;ee.width=re*le,ee.height=de*le;const Ie=ee.getContext("2d");Ie&&(Ie.scale(le,le),Ie.drawImage($,0,0,re,de),ee.toBlob(me=>{if(!me)return;const Ce=URL.createObjectURL(me),Se=document.createElement("a");Se.href=Ce,Se.download=w,Se.click(),URL.revokeObjectURL(Ce)}))},$.src=Y}function h(b,w="download.svg"){const A=f(b);let M=new XMLSerializer().serializeToString(A);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const $=new Blob([M],{type:"image/svg+xml"}),W=URL.createObjectURL($),Y=document.createElement("a");Y.href=W,Y.download=w,Y.click(),URL.revokeObjectURL(W)}const v=()=>{const b=By(i());return JSON.stringify(b,null,2)},m=()=>{function b(R,M,$){var W=document.createElement("a"),Y=new Blob([R],{type:$});W.href=URL.createObjectURL(Y),W.download=M,W.click(),URL.revokeObjectURL(W.href)}const w=v(),A=hu(a());b(w,`${A}.json`,"text/plain")};function C(){c(!1)}const I=1;G(()=>r(),()=>{S(s,r())}),pe(),fe(),Gr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var A=KT(),R=q(A),M=q(R),$=q(M),W=U($,2),Y=U(W,2);H(M);var X=U(M,2),re=U(q(X),2),de=q(re);x(de,"width",400*I),x(de,"height",300*I),H(re),H(X),H(R);var ee=U(R,2);al(ee,{children:(le,Ie)=>{var me=XT();De("click",me,C),N(le,me)},$$slots:{default:!0}}),H(A),De("click",$,m),De("click",W,()=>g(p(s))),De("click",Y,()=>h(p(s))),N(b,A)},$$slots:{default:!0},$$legacy:!0}),ne()}var QT=ie("<!> <!>",1);function JT(t){let e=D(!1);function n(){S(e,!0)}var r=QT(),i=ue(r);ba(i,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{qT(s)},$$slots:{default:!0}});var a=U(i,2);ZT(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var eR=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function xv(t){var e=eR();N(t,e)}var tR=ie('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),nR=ie('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Is(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0);var i=nR(),a=q(i);Xr(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=U(a,2);rl(s,{get isOpen(){return r()},children:(c,u)=>{var f=tR(),g=q(f);dt(g,e,"default",{}),H(f),N(c,f)},$$slots:{default:!0}}),H(i),N(t,i)}var rR=ie('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function iR(t,e){let n=F(e,"value",8),r=F(e,"onClickCb",8),i=F(e,"disabled",8,!1);var a=rR(),s=q(a);jt(s),Ci(2),H(a),Z(()=>{Ot(a,"disabled",i()),hh(s,n()),s.disabled=i()}),De("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,a)}var oR=ie('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function jr(t,e){te(e,!1);let n=F(e,"value",8),r=F(e,"name",8),i=F(e,"updateCb",8,void 0),a=F(e,"disabled",8,!1);function s(){a()||i()&&i()(!n())}fe();var c=oR(),u=q(c);iR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var f=U(u,2),g=q(f,!0);H(f),H(c),Z(()=>{Ot(c,"disabled",a()),nt(g,r())}),De("click",f,Kn(s)),N(t,c),ne()}var aR=ie("<!> <!>",1),sR=ie("<!> <!> <!>",1),lR=ie("<!> <!>",1),cR=ie('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Sv(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(qs,"$gameModeStore",n),a=D();let s=F(e,"showModal",12,!1);G(()=>r(),()=>{S(a,r())}),pe(),fe(),Gr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var f=cR(),g=q(f);Is(g,{title:"General",children:(I,b)=>{jr(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Fw})},$$slots:{default:!0}});var h=U(g,2);Is(h,{title:"Tools",children:(I,b)=>{var w=aR(),A=ue(w);jr(A,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:Hw});var R=U(A,2);jr(R,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:Pw}),N(I,w)},$$slots:{default:!0}});var v=U(h,2);Is(v,{title:"Gameplay",children:(I,b)=>{var w=sR(),A=ue(w);jr(A,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:Ww});var R=U(A,2);jr(R,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:Yw});var M=U(R,2);jr(M,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:Bw}),N(I,w)},$$slots:{default:!0}});var m=U(v,2);{var C=I=>{Is(I,{title:"Setting Mode Display",children:(b,w)=>{var A=lR(),R=ue(A);jr(R,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:zw});var M=U(R,2);jr(M,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:Vw}),N(b,A)},$$slots:{default:!0}})};ge(m,I=>{i()===ao.SETTING&&I(C)})}H(f),N(c,f)},$$slots:{default:!0},$$legacy:!0}),ne()}var uR=ie("<!> <!>",1);function dR(t){let e=D(!1);function n(){S(e,!0)}var r=uR(),i=ue(r);ba(i,{title:"Settings",clickCb:n,children:(s,c)=>{xv(s)},$$slots:{default:!0}});var a=U(i,2);Sv(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var _R=ie('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function fR(t){var e=_R(),n=q(e);VT(n);var r=U(n,2);JT(r);var i=U(r,2);FT(i,{});var a=U(i,2);kT(a);var s=U(a,2);dR(s),H(e),N(t,e)}var gR=ie('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function hR(t,e){te(e,!1);let n=D(!1);function r(){const i=st(_n),a=[];for(let s=0;s<i.nRows;s++){const c=[];for(let u=0;u<i.nCols;u++){const f=i.getCell(s,u);if(!f)continue;const g=f.value;c.push(g)}a.push(c)}ud(a)}fe(),ol(t,{get isOpen(){return p(n)},set isOpen(i){S(n,i)},$$slots:{"panel-header":(i,a)=>{il(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){S(n,s)},$$legacy:!0})},"panel-content":(i,a)=>{var s=gR();De("click",s,r),N(i,s)}},$$legacy:!0}),ne()}const vR={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function pR(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],a=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[a,i]};if(i==="<"||i==="<=")return{upper_bound:[a,i]}}if(r=n.exec(t),r){const i=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,i==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function mR(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function CR(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Nv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function ER(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=mR(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=CR(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const a=pR(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=Nv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var ce=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t))(ce||{});function Tt(t,e){return`${e}[${t.r},${t.c}]`}function Di(t,e){return t.map(r=>Tt(r,e))}function ke(t,e){return"["+Di(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ze(t){return t.map(n=>Oe(n))}function IR(t){return`values_grid[${t.r},${t.c}]`}function sl(t){return t.map(e=>IR(e))}function mi(t){return`constraint alldifferent([${t.join(",")}]);
`}function yt(t,e){return t&&(t=`
% ${e}
`+t),t}function md(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i);r.push(a)}return r}function Cd(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i),s="["+ze(a).join(",")+"]";r.push(s)}return r}function ll(t,e,n,r){let i="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);i+=c}return i}class bR{constructor(e){he(this,"model_str","");he(this,"used_vars",new Set);he(this,"puzzle");this.puzzle=e}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=vR){const i=ER(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let a="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],f=c.lower_bound[1];a+=`constraint ${n} ${f} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],f=c.upper_bound[1];a+=`constraint ${n} ${f} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[a,n]}}function wR(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const b=e[I].trim(),w=b.match(r),A=b.match(i),R=b.match(a);if(w||A||R){s={name:(w||A||R)[1],startLine:I,content:[e[I]]},c=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u+=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length,c===0&&u===0&&b.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let M=s.startLine;for(;M>0&&e[M-1].trim().startsWith("%");)M-=1;n[s.name].startLine=M,s=null}}const f=new Set;function g(I){const b=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&b.push(w);return b}for(const I of e)g(I).forEach(w=>f.add(w));const h=Object.values(n).filter(I=>!f.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));h.sort((I,b)=>b.start-I.start);const v=[...e];for(const I of h)v.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of v)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function zg(t){let e=t,n=e.length;for(;e=wR(e),e.length!=n;)n=e.length;return e}const Vg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function OR(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function yR(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions;
`);for(const a of e.getAllCells()){const s=Tt(a,"board_regions");a.region!==null?t.add(`constraint ${s} = ${a.region};
`):t.add(`constraint ${s} = ${r-1};
`)}}}function LR(t,e){const r=t.grid.getPositiveDiagonal(),i=ze(r);let a=mi(i);return a=`
% Positive Diagonal Constraint
`+a,a}function AR(t,e){const r=t.grid.getNegativeDiagonal(),i=ze(r);let a=mi(i);return a=`
% Negative Diagonal Constraint
`+a,a}function xR(t,e){const r=t.grid.getPositiveDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function SR(t,e){const r=t.grid.getNegativeDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function NR(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,f]=[c.r,c.c];for(let g=0;g<u;g++){const h=n.getCell(g,f),v=n.getCell(u,f+(u-g));if(!h||!v)continue;const m=Oe(h),C=Oe(v),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function DR(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,f]=[c.r,c.c];for(let g=0;g<u;g++){const h=n.getCell(g,f),v=n.getCell(u,f-(u-g));if(!h||!v)continue;const m=Oe(h),C=Oe(v),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function TR(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let a=0;a<i;a++){const s=n.getDisjointGroup(a),f=`constraint alldifferent(${`[${ze(s).join(",")}]`});
`;r+=f}return r}function RR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getNeighboorCells(i).filter(h=>h.r+h.c>=i.r+i.c),c=Oe(i),f=`[${ze(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${f});
`;r+=g}return r}function kR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getCellsByKnightMove(i).filter(h=>h.r>=i.r||h.c>=i.c),c=Oe(i),f=`[${ze(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${f});
`;r+=g}return r}function GR(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=yt(n,`${e}`),n}function MR(t,e){let n="";return n+=`constraint tango_p(board);
`,n=yt(n,`${e}`),n}function $R(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=yt(n,`${e}`),n}function*oi(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function FR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of oi(n)){const s=Oe(i),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function UR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of oi(n)){const s=Oe(i),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function HR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getRow(i.r),c=`[${ze(a).join(",")}]`,u=i.c+1,f=`constraint indexing_column_p(${c}, ${u});
`;r+=f}return r}function PR(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function BR(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function WR(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=yt(n,`${e}`),n}function eu(t,e){const n=t.grid,i=t.localConstraints.get(_.XV);if(!(e===_.ALL_V_GIVEN||e===_.ALL_X_GIVEN||e===_.ALL_XV_GIVEN))return"";const a=[];if(i)for(const c of Object.values(i)){const u=c.cells,f=new Set(u.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),g=c.value;(e===_.ALL_V_GIVEN&&(g==="v"||g==="V")||e===_.ALL_X_GIVEN&&(g==="x"||g==="X")||e===_.ALL_XV_GIVEN)&&a.push(f)}let s="";for(const[c,u]of oi(n)){if(a.find(v=>v.has(c)&&v.has(u)))continue;const g=Oe(c),h=Oe(u);if(e===_.ALL_V_GIVEN){const v=`constraint ${g} + ${h} != 5;
`;s+=v}else if(e===_.ALL_X_GIVEN){const v=`constraint ${g} + ${h} != 10;
`;s+=v}else{const v=`constraint ${g} + ${h} != 5 /\\ (${g} + ${h} != 10);
`;s+=v}}return s=yt(s,`${e}`),s}function io(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,a=new Set(i.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function YR(t,e){const n=t.grid,i=t.localConstraints.get(_.XY_DIFFERENCES),a=io(n,i);let s="";for(const[c,u]of oi(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const g=Oe(c),h=Oe(u);let v="";if(c.r==u.r){const I=n.getRow(c.r)[0];v=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];v=Oe(I)}if(!v)continue;const m=`constraint abs(${g} - ${h}) != ${v};
`;s+=m}return s=yt(s,`${e}`),s}function zR(t,e){const n=t.grid,r=t.localConstraints,i=r.get(_.DIFFERENCE),a=r.get(_.RATIO);let s=io(n,i);s=[...s,...io(n,a)];let c=[];i&&(c=Object.values(i).map(g=>g.value).map(g=>g||"1"));const u=[...new Set(c)];let f="";for(const[g,h]of oi(n)){if(s.find(I=>I.has(g)&&I.has(h)))continue;const m=Oe(g),C=Oe(h);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${C}) != ${b};
`;f+=w}}return f=yt(f,`${e}`),f}function VR(t,e){const n=t.grid,r=t.localConstraints,i=r.get(_.RATIO),a=r.get(_.DIFFERENCE);let s=io(n,i);s=[...s,...io(n,a)];let c=[];i&&(c=Object.values(i).map(g=>g.value).map(g=>g||"2"));const u=[...new Set(c)];let f="";for(const[g,h]of oi(n)){if(s.find(I=>I.has(g)&&I.has(h)))continue;const m=Oe(g),C=Oe(h);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${C}, ${b});
`;f+=w}}return f=yt(f,`${e}`),f}function jR(t,e){const n=t.grid,i=t.localConstraints.get(_.YIN_YANG_KROPKI),a=io(n,i);let s="";for(const[c,u]of oi(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const g=Oe(c),h=Oe(u),v=Tt(c,ce.YIN_YANG),m=Tt(u,ce.YIN_YANG),C=`constraint not yin_yang_kropki_p(${g}, ${h}, ${v}, ${m});
`;s+=C}return s=yt(s,`${e}`),s}function qR(t,e){const n=t.grid,i=t.localConstraints.get(_.YIN_YANG_COUNT_SHADED_CELLS),a=i?Object.values(i):[];function s(u,f){return u.find(g=>g.cell.r===f.r&&g.cell.c===f.c)}let c="";for(const u of n.getAllCells()){const f=s(a,u),g=f?f.directions:[],h=Oe(u),v=[Be.E,Be.N,Be.S,Be.W];for(const m of v){if(g.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=ke(C,ce.YIN_YANG);c+=`constraint count(${I}, 1) != ${h};
`}}return c=yt(c,`${e}`),c}function Ed(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,a=t.getCell(i.r,i.c);a&&n.add(a)}return n}function XR(t,e){const n=t.grid,i=t.localConstraints.get(_.INDEXING_COLUMN),a=Ed(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const f=n.getRow(c.r),h=`[${ze(f).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${h}, ${v});
`;s+=m}return s=yt(s,`${e}`),s}function KR(t,e){const n=t.grid,i=t.localConstraints.get(_.RADAR),a=Ed(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const f=Oe(c),[g,h,v,m]=Cd(n,c),C=`constraint not radar_p(${f}, ${g}, ${h}, ${v}, ${m}, 9);
`;s+=C}return s=yt(s,`${e}`),s}function ZR(t,e){const n=t.grid,i=t.localConstraints.get(_.NURIMISAKI_UNSHADED_ENDPOINTS),a=Ed(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const f=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${f});
`;s+=v}return s=yt(s,`${e}`),s}function QR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of oi(n)){const s=Oe(i),c=Oe(a),u=`nurimisaki[${i.r},${i.c}]`,f=`nurimisaki[${a.r},${a.c}]`,g=`constraint (${u} == 0 /\\ ${f} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=g}return r}function JR(t,e){const n=t.grid,i=t.localConstraints.get(_.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let a=`
% ${e}
`;for(const s of Object.values(i)){const u=s.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),f=ke(u,ce.YIN_YANG);a+=`constraint count_unique_values(${f}) >= 2;
`}return a}function ek(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=yt(n,`${e}`),n}function tk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=yt(n,`${e}`),n}function nk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=yt(n,`${e}`),n}function rk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=yt(n,`${e}`),n}function ik(t,e){let n="";return n+=`constraint not_fully_shaded_or_unshaded_2x2_p(cave_shading);
`,n=yt(n,`${e}`),n}function ok(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=yt(n,`${e}`),n}function ak(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=yt(n,`${e}`),n}function sk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=yt(n,`${e}`),n}function lk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=yt(n,`${e}`),n}function ck(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=yt(n,`${e}`),n}function uk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const a=r.getNeighboorCells(i).filter(f=>i.region!==null&&f.region===i.region),s=Tt(i,ce.BOARD),c=Tt(i,ce.YIN_YANG),u=ke(a,ce.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=yt(n,`${e}`),n}function dk(t){const e=t.globalConstraints;if(e.get(_.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),f=ze(u),g=mi(f);r+=g}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),f=ze(u),g=mi(f);r+=g}if(!e.get(_.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const f=n.getRegion(u),g=ze(f),h=mi(g);r+=h}}return r}function _k(t){const e=_.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const fk=new Map([[_.POSITIVE_DIAGONAL,LR],[_.NEGATIVE_DIAGONAL,AR],[_.POSITIVE_ANTIDIAGONAL,xR],[_.NEGATIVE_ANTIDIAGONAL,SR],[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,NR],[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,DR],[_.ANTIKING,RR],[_.ANTIKNIGHT,kR],[_.ANTI_GIRAFFE,GR],[_.DISJOINT_GROUPS,TR],[_.TANGO,MR],[_.NONCONSECUTIVE,FR],[_.NONRATIO,UR],[_.ANTI_ENTROPY,$R],[_.GLOBAL_INDEXING_COLUMN,HR],[_.ALL_V_GIVEN,eu],[_.ALL_X_GIVEN,eu],[_.ALL_XV_GIVEN,eu],[_.ALL_DIFFERENCES_GIVEN,zR],[_.ALL_RATIOS_GIVEN,VR],[_.ALL_XY_DIFFERENCES_GIVEN,YR],[_.ALL_YIN_YANG_KROPKI_GIVEN,jR],[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,qR],[_.ALL_INDEXING_COLUMN_GIVEN,XR],[_.ALL_RADARS_GIVEN,KR],[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,ZR],[_.NURIMISAKI_PATH_GERMAN_WHISPERS,QR],[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,JR],[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,WR],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,PR],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,BR],[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,ek],[_.CAVE_CELLS_ARE_ODD,nk],[_.CAVE_WALLS_ARE_EVEN,rk],[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,ik],[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,ok],[_.YIN_YANG_FILLOMINO_PARITY,tk],[_.TWO_SYMMETRIC_GALAXIES,lk],[_.EVERY_CELL_BELONGS_TO_A_GALAXY,ak],[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,sk],[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,ck],[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,uk]]);function gk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const a=fk.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Dv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Tv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${ze(n.slice(1)).join(",")}]`}function hk(t,e,n,r){let i="";const a=Dv(e,r),s=`arrow_${n}`;if(i+=`var int: ${s};
`,i+=`% arrow pill
`,a.length===1){const u=a[0];i+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((f,g)=>`${Math.pow(10,g)}*${f}`).join(" + ");i+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;i+=`% arrow lines
`;for(const u of c){const g=`constraint sum(${Tv(e,u)}) == ${s};
`;i+=g}return i}function vk(t,e,n,r){let i="";const a=Dv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${Tv(e,u)}, ${s});
`;i+=g}}return i}const pk=new Map([[_.ARROW,hk],[_.AVERAGE_ARROW,vk]]);function mk(t,e,n,r){let i="";const a=pk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function Zr(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Rv(t,e,n){const i=`[${Zr(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function cl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Id(t,e,n,r,i){const s=`[${Zr(e,r).join(",")}]`,c=r.value,u=cl(t,c,n);if(!u)return"";const f=u[1];let g=u[0];return g+=`constraint ${i}(${s}, ${f});
`,g}function Ck(t,e,n,r){const i=Zr(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return mi(i);const c=cl(t,s,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint killer_cage(${a}, ${u});
`,f}function Ek(t,e,n,r){const i=Zr(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return mi(i);const c=cl(t,s,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint inverted_killer_cage_p(${a}, ${u});
`,f}function Ik(t,e,n,r){return Id(t,e,n,r,"sum_cage_p")}function bk(t,e,n,r){return Rv(e,r,"parity_balance_cage_p")}function wk(t,e,n,r){return Rv(e,r,"sum_cage_look_and_say_p")}function Ok(t,e,n,r){return Id(t,e,n,r,"divisible_killer_cage_p")}function yk(t,e,n,r){return Id(t,e,n,r,"spotlight_cage_p")}function Lk(t,e,n,r){const a=`[${Zr(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function Ak(t,e,n,r){const a=`[${Zr(e,r).join(",")}]`,s=r.value;let c="";const u=cl(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const g=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),h=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!h.includes(I)&&h.push(I)});const v=ke(h,ce.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${v});
`,c}function kv(t,e,n,r,i){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),u=`[${ze(s).join(",")}]`,f=ke(s,ce.YIN_YANG),g=r.value;if(g){const h=parseInt(g);return`constraint ${i}(${u}, ${f}, ${h});
`}return""}function xk(t,e,n,r){return kv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function Sk(t,e,n,r){return kv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function Nk(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${ze(a).join(",")}]`,f=`[${sl(a).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint doublers_killer_cage_p(${c}, ${f}, ${h});
`}return""}function Dk(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${ze(a).join(",")}]`,f=`[${sl(a).join(", ")}]`,g=r.value;if(g){const h=parseInt(g);return`constraint negators_killer_cage_p(${c}, ${f}, ${h});
`}return""}function Tk(t,e){let n="";const r=new Map;for(const i of e){const a=i.value,s=r.get(a);if(!s){r.set(a,[i]);continue}s.push(i)}for(const i of r.values())if(!(i.length<=1))for(const[a,s]of i.flatMap((c,u)=>i.slice(u+1).map(f=>[c,f]))){const u=`[${Zr(t,a).join(",")}]`,g=`[${Zr(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${g});
`}return n}const Rk=new Map([[_.KILLER_CAGE,Ck],[_.INVERTED_KILLER_CAGE,Ek],[_.SUM_CAGE,Ik],[_.PARITY_BALANCE_CAGE,bk],[_.SUM_CAGE_LOOK_AND_SAY,wk],[_.DIVISIBLE_KILLER_CAGE,Ok],[_.SPOTLIGHT_CAGE,yk],[_.UNIQUE_DIGITS_CAGE,Lk],[_.VAULTED_CAGE,Ak],[_.YIN_YANG_ANTITHESIS_KILLER_CAGE,xk],[_.YIN_YANG_BREAKEVEN_KILLER_CAGE,Sk],[_.DOUBLERS_KILLER_CAGE,Nk],[_.NEGATORS_KILLER_CAGE,Dk]]);function kk(t,e,n,r){let i="";const a=Rk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}else if(n===_.MULTISET_CAGE){const s=Object.values(r),c=Tk(e,s);i+=c}return i}function Gk(t,e,n,r){const i=e.r+.5,a=e.c+.5,s=n-i,c=r-a,u=Math.floor(n+s),f=Math.floor(r+c);return t.getCell(u,f)}function Mk(t,e){const n=[],r=[],i=[];for(const a of t.getAllCells()){const s=Gk(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||i.push(a)}return[n,r,i]}function $k(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],f=u.cell,g=c+1,[h,v,m]=Mk(e,f),C=ke(h,ce.GALAXY_REGIONS),I=ke(v,ce.GALAXY_REGIONS),b=ke(m,ce.GALAXY_REGIONS);r+=`% galaxy ${g}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${b}, ${g});
`,r+=`constraint connected_region(${ce.GALAXY_REGIONS}, ${g});
`;const w=u.value;if(!w)continue;const A=parseInt(w);r+=`constraint galaxy_sum_p(${ce.BOARD}, ${ce.GALAXY_REGIONS}, ${A}, ${g});
`}if(!n.length)return r;const i=e.nCols*e.nRows,s=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${ce.GALAXY_REGIONS}, ${s});
`,r}function Fk(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Uk(t,e,n,r){const i=r.cell,[a,s]=[i.r,i.c],c=r.value,u=Fk(t,c,n);if(!u)return"";const f=u[1];let g=u[0],h=[];if(a%1===0&&s%1===0?h=Th(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(h=kh(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!h.length)return"";const v=ke(h,ce.BOARD),m=ke(h,ce.YIN_YANG);return g+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${f};
`,g}const Hk=new Map([[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,Uk]]),Pk=new Map([[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,$k]]);function Bk(t,e,n,r){let i="";const a=Pk.get(n),s=Hk.get(n);if(s)for(const[c,u]of Object.entries(r)){const f=s(t,e,c,u);i+=f}else if(a){const c=Object.values(r),u=a(t,e,c);i+=u}return i}function jg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return ze(n)}function Wk(t,e){const r="["+jg(t,e.cells).join(",")+"]",a="["+jg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const Yk=new Map([[_.CLONE_REGION,Wk]]);function zk(t,e,n,r){return ll(e,n,r,Yk)}function bd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function wd(t,e,n){const i=`[${bd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Gv(t,e,n,r=""){const a=`[${bd(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function Vk(t,e,n,r){const a=`[${bd(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=Nv(s);if(!c)return"";let u="";for(const g of c){const h=parseInt(g);Number.isNaN(h)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const f="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${f});
`,u}function jk(t,e,n,r){return Gv(e,r,"corner_sum_p")}function qk(t,e,n,r){return Gv(e,r,"corner_even_count_p")}function Xk(t,e,n,r){return wd(e,r,"corner_sum_of_three_equals_the_other_p")}function Kk(t,e,n,r){return wd(e,r,"equal_diagonal_differences_p")}function Zk(t,e,n,r){return wd(e,r,"product_square_p")}const Qk=new Map([[_.QUADRUPLE,Vk],[_.CORNER_SUM,jk],[_.CORNER_EVEN_COUNT,qk],[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,Xk],[_.PRODUCT_SQUARE,Zk],[_.EQUAL_DIAGONAL_DIFFERENCES,Kk]]);function Jk(t,e,n,r){let i="";const a=Qk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function ul(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function e5(t,e,n){const r=ul(t,e),[i,a]=r;return`constraint ${n}(${i}, ${a});
`}function t5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function dl(t,e,n,r,i,a=""){var m;const s=ul(e,r),[c,u]=s,f=(m=r.value)!=null&&m.length?r.value:a,g=t5(t,f,n);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint ${i}(${c}, ${u}, ${h});
`,v}function n5(t,e,n,r){const i=ul(e,r),[a,s]=i;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function r5(t,e,n,r){return dl(t,e,n,r,"ratio_p","2")}function i5(t,e,n,r){return dl(t,e,n,r,"abs_difference","1")}function o5(t,e,n,r){const i=ul(e,r),[a,s]=i,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function a5(t,e,n,r){return dl(t,e,n,r,"edge_sum_p")}function s5(t,e,n,r){return dl(t,e,n,r,"edge_modulo_p")}function l5(t,e,n,r){return e5(e,r,"edge_factor_p")}function c5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),[u,f]=a;let g="";if(u.r==f.r){const m=e.getRow(u.r)[0];g=Oe(m)}else if(u.c==f.c){const m=e.getCol(u.c)[0];g=Oe(m)}return g?`constraint abs(${s} - ${c}) == ${g};
`:""}function u5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),u=Di(a,ce.YIN_YANG),[f,g]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${f}, ${g});
`}function d5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),u=Di(a,ce.YIN_YANG),[f,g]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${f}, ${g});
`}function _5(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),s=Di(a,ce.UNKNOWN_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}function f5(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),s=Di(a,ce.CAVE_SHADING),[c,u]=s;return`constraint ${c} != ${u};
`}const g5=new Map([[_.XV,n5],[_.DIFFERENCE,i5],[_.RATIO,r5],[_.EDGE_INEQUALITY,o5],[_.EDGE_SUM,a5],[_.EDGE_MODULO,s5],[_.EDGE_FACTOR,l5],[_.XY_DIFFERENCES,c5],[_.YIN_YANG_KROPKI,u5],[_.YIN_YANG_WHITE_KROPKI,d5],[_.UNKNOWN_REGION_BORDER,_5],[_.EDGE_CAVE_ONE_OF_EACH,f5]]);function h5(t,e,n,r){let i="";const a=g5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function wo(t,e,n=!1){let i=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(i=[...new Set(i)]),ze(i)}function pt(t,e,n,r=!1){const a=`[${wo(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function hr(t,e,n,r=""){const a=`[${wo(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function Od(t,e,n){let i=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),a=!0);const c=`[${ze(i).join(",")}]`,u=e.value;if(!u)return"";const f=parseInt(u);return`constraint ${n}(${c}, ${f}, ${a});
`}function v5(t,e,n,r){return pt(e,r,"renban",!0)}function p5(t,e,n,r){return pt(e,r,"double_renban_p",!0)}function m5(t,e,n,r){return pt(e,r,"renrenbanban_p",!0)}function C5(t,e,n,r){return pt(e,r,"knabner_p",!0)}function E5(t,e,n,r){return pt(e,r,"renban_or_nabner_line_p",!0)}function I5(t,e,n,r){return pt(e,r,"out_of_order_consecutive_line_p")}function b5(t,e,n,r){const a=`[${wo(e,r).join(",")}]`,s=r.value,c=s?parseInt(s):5;return`constraint whispers(${a}, ${c});
`}function w5(t,e,n,r){return`constraint whispers(${`[${wo(e,r).join(",")}]`}, 4);
`}function O5(t,e,n,r){return pt(e,r,"strictly_increasing")}function y5(t,e,n,r){return pt(e,r,"fuzzy_thermo_p")}function L5(t,e,n,r){return pt(e,r,"increasing")}function A5(t,e,n,r){return hr(e,r,"custom_thermo_p")}function x5(t,e,n,r){return pt(e,r,"palindrome")}function S5(t,e,n,r){return hr(e,r,"sum_line_p")}function N5(t,e,n,r){return pt(e,r,"xv_line_p")}function D5(t,e,n,r){return hr(e,r,"at_least_x_line_p","10")}function T5(t,e,n,r){return hr(e,r,"product_line_p")}function R5(t,e,n,r){return hr(e,r,"maximum_adjacent_difference_line_p","2")}function k5(t,e,n,r){return pt(e,r,"adjacent_multiples_line_p")}function G5(t,e,n,r){return pt(e,r,"index_line_p")}function M5(t,e,n,r){return pt(e,r,"zipper_line_p")}function $5(t,e,n,r){return Od(e,r,"segmented_sum_line_p")}function F5(t,e,n,r){return pt(e,r,"segmented_sum_and_renban_line_p")}function U5(t,e,n,r){return Od(e,r,"n_consecutive_renban_line_p")}function H5(t,e,n,r){return Od(e,r,"n_consecutive_fuzzy_sum_line_p")}function P5(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f);let s="";const c=[];for(let f=0;f<a.length;f++){const g=a[f],h=e.getRow(g.r),v=ke(h,ce.BOARD),m=`cycle_${n}_${f}`;c.push(m);const C=g.c+1;s+=`var int: ${m} = cycle_order_f(${v}, ${C});
`}const u="["+c.join(",")+"]";return s+=`constraint strictly_increasing(${u});
`,s}function B5(t,e,n,r){return pt(e,r,"adjacent_differences_count_line_p")}function W5(t,e,n,r){return pt(e,r,"same_parity_line_p")}function Y5(t,e,n,r){return hr(e,r,"renban_or_whispers_p","5")}function z5(t,e,n,r){return pt(e,r,"alldifferent",!0)}function V5(t,e,n,r){return pt(e,r,"repeated_digits_line_p")}function j5(t,e,n,r){return pt(e,r,"superfuzzy_arrow_p")}function q5(t,e,n,r){return pt(e,r,"headless_arrow_p")}function X5(t,e,n,r){return hr(e,r,"unimodular_line_p","3")}function K5(t,e,n,r){return hr(e,r,"modular_line_p","3")}function Z5(t,e,n,r){return hr(e,r,"modular_or_unimodular_line_p","3")}function Q5(t,e,n,r){return pt(e,r,"arithmetic_sequence_line_p")}function J5(t,e,n,r){return pt(e,r,"odd_even_oscillator_line_p")}function e3(t,e,n,r){return hr(e,r,"high_low_oscillator_line_p","5")}function t3(t,e,n,r){return pt(e,r,"look_and_say_line_p",!0)}function n3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v);function s(v){const m=[];let C=null;for(const I of v)I.r!=C?(m.push([I]),C=I.r):m[m.length-1].push(I);return m}const c=s(a);if(c.length<2)return"";const u=c[0],g=`[${ze(u).join(",")}]`;let h="";for(let v=1;v<c.length;v++){const m=c[v],I=`[${ze(m).join(",")}]`;h+=`constraint sum(${I}) == sum(${g});
`}return h}function r3(t,e,n,r){return pt(e,r,"between_line_p")}function i3(t,e,n,r){return pt(e,r,"tightrope_line_p")}function o3(t,e,n,r){return pt(e,r,"double_arrow_p")}function a3(t,e,n,r){return pt(e,r,"split_peas_p")}function s3(t,e,n,r){return pt(e,r,"parity_count_line_p")}function l3(t,e,n,r){return pt(e,r,"product_of_ends_equals_sum_of_line_p")}function c3(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const a=i.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(i),n=a}return r.length&&e.push(r),e}function u3(t,e,n,r){let i="";const s=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=c3(s);if(!c.length)return"";const u=`sum_line_${n}`;i+=`var int: ${u};
`;for(const f of c){const v=`constraint sum(${`[${ze(f).join(",")}]`}) == ${u};
`;i+=v}return i}function d3(t,e,n,r){return`constraint entropic_line_p(${`[${wo(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function _3(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${wo(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function f3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),c=`[${ze(a).join(",")}]`,u=ke(a,ce.YIN_YANG);let f=r.value;f||(f="5");const g=parseInt(f);return`constraint yin_yang_shaded_whispers_line_p(${c}, ${u}, ${g});
`}function g3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),c=`[${ze(a).join(",")}]`,u=ke(a,ce.YIN_YANG);let f=r.value;f||(f="3");const g=parseInt(f);return`constraint yin_yang_unshaded_modular_line_p(${c}, ${u}, ${g});
`}function yd(t,e,n){const i=e.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),s=`[${ze(i).join(",")}]`,c=ke(i,ce.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function h3(t,e,n,r){return yd(e,r,"yin_yang_unshaded_entropic_line_p")}function v3(t,e,n,r){return yd(e,r,"yin_yang_indexing_line_coloring_p")}function p3(t,e,n,r){return yd(e,r,"yin_yang_region_sum_line_p")}function m3(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),s=ke(a,ce.VALUES_GRID),c=ke(a,ce.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${s}, ${c});
`}function Ld(t,e,n){const i=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${sl(i).join(", ")}]`;return`constraint ${n}(${s});
`}function C3(t,e,n,r){return Ld(e,r,"between_line_p")}function E3(t,e,n,r){return Ld(e,r,"double_arrow_p")}function I3(t,e,n,r){return Ld(e,r,"strictly_increasing")}const b3=new Map([[_.THERMOMETER,O5],[_.FUZZY_THERMOMETER,y5],[_.SLOW_THERMOMETER,L5],[_.CUSTOM_THERMOMETER,A5],[_.RENBAN_LINE,v5],[_.DOUBLE_RENBAN_LINE,p5],[_.RENRENBANBAN_LINE,m5],[_.NABNER_LINE,C5],[_.WHISPERS_LINE,b5],[_.DUTCH_WHISPERS,w5],[_.RENBAN_OR_WHISPERS_LINE,Y5],[_.RENBAN_OR_NABNER_LINE,E5],[_.OUT_OF_ORDER_CONSECUTIVE_LINE,I5],[_.N_CONSECUTIVE_RENBAN_LINE,U5],[_.PALINDROME,x5],[_.SUM_LINE,S5],[_.PRODUCT_LINE,T5],[_.XV_LINE,N5],[_.AT_LEAST_X_LINE,D5],[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,R5],[_.SAME_PARITY_LINE,W5],[_.ADJACENT_MULTIPLES_LINE,k5],[_.ADJACENT_DIFFERENCES_COUNT_LINE,B5],[_.LOOK_AND_SAY_LINE,t3],[_.ROW_SUM_LINE,n3],[_.INDEX_LINE,G5],[_.ZIPPER_LINE,M5],[_.SEGMENTED_SUM_LINE,$5],[_.SEGMENTED_SUM_AND_RENBAN_LINE,F5],[_.N_CONSECUTIVE_FUZZY_SUM_LINE,H5],[_.SUPERFUZZY_ARROW,j5],[_.HEADLESS_ARROW,q5],[_.ARITHMETIC_SEQUENCE_LINE,Q5],[_.ODD_EVEN_OSCILLATOR_LINE,J5],[_.HIGH_LOW_OSCILLATOR_LINE,e3],[_.UNIQUE_VALUES_LINE,z5],[_.REPEATED_DIGITS_LINE,V5],[_.UNIMODULAR_LINE,X5],[_.MODULAR_LINE,K5],[_.MODULAR_OR_UNIMODULAR_LINE,Z5],[_.REGION_SUM_LINE,u3],[_.ENTROPIC_LINE,d3],[_.ENTROPIC_OR_MODULAR_LINE,_3],[_.ROW_CYCLE_THERMOMETER,P5],[_.BETWEEN_LINE,r3],[_.TIGHTROPE_LINE,i3],[_.DOUBLE_ARROW_LINE,o3],[_.SPLIT_PEAS,a3],[_.PARITY_COUNT_LINE,s3],[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,l3],[_.DOUBLERS_THERMOMETER,I3],[_.DOUBLERS_BETWEEN_LINE,C3],[_.DOUBLERS_DOUBLE_ARROW_LINE,E3],[_.YIN_YANG_SHADED_WHISPERS_LINE,f3],[_.YIN_YANG_UNSHADED_ENTROPIC_LINE,h3],[_.YIN_YANG_UNSHADED_MODULAR_LINE,g3],[_.YIN_YANG_REGION_SUM_LINE,p3],[_.YIN_YANG_INDEXING_LINE_COLORING,v3],[_.GOLDILOCKS_ZONE_REGION_SUM,m3]]);function w3(t,e,n,r){let i="";const a=b3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function _l(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return ze(i)}function wa(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,i)}function Qn(t,e,n,r){const i=n.cell,a=e.getCell(i.r,i.c),c=`[${_l(e,n).join(",")}]`,u=n.value,f=wa(t,u,i,a);if(!f)return"";const g=f[1];let h=f[0];return h+=`constraint ${r}(${c}, ${g});
`,h}function O3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${_l(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,g=Math.min(...f),h=Math.max(...f),v=wa(t,u,i,a);if(!v)return"";const m=v[1];let C=v[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${g}, ${h});
`,C}function y3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${_l(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,g=Math.min(...f),h=Math.max(...f),v=wa(t,u,i,a);if(!v)return"";const m=v[1];let C=v[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return C+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${g}, ${h});
`,C+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${I}, ${b});
`,C}function L3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=_l(e,r),c=`[${s.join(",")}]`,u=s[0],f=r.value,g=wa(t,f,i,a);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint x_index_p(${c}, ${u}, ${h});
`,v}function A3(t,e,n,r){return Qn(t,e,r,"x_sum_p")}function x3(t,e,n,r){return Qn(t,e,r,"shortsighted_x_sum_p")}function S3(t,e,n,r){return Qn(t,e,r,"broken_x_sum_p")}function N3(t,e,n,r){return Qn(t,e,r,"shifted_x_sum_p")}function D3(t,e,n,r){return Qn(t,e,r,"skyscrapers_p")}function T3(t,e,n,r){return Qn(t,e,r,"x_sum_skyscrapers_p")}function R3(t,e,n,r){return Qn(t,e,r,"battlefield_p")}function k3(t,e,n,r){return Qn(t,e,r,"rising_streak_p")}function G3(t,e,n,r){return Qn(t,e,r,"outside_consecutive_sum_p")}function M3(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${ze(s).join(",")}]`,f=ke(s,ce.CELL_CENTER_LOOP),g=r.value;if(g){const h=parseInt(g);return`constraint loopwhiches_p(${u}, ${f}, ${h});
`}return""}function $3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=r.direction,c=e.getCellsInDirection(i.r,i.c,s),u=ke(c,ce.BOARD),f=ke(c,ce.UNKNOWN_REGIONS),g=r.value,h=wa(t,g,i,a);if(!h)return"";const v=h[1];let m=h[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${f}, ${v});
`,m}function F3(t,e,n,r){return Qn(t,e,r,"little_killer_sum_p")}function U3(t,e,n,r){return Qn(t,e,r,"little_killer_product_p")}function H3(t,e,n,r){return Qn(t,e,r,"x_omit_little_killer_sum_p")}function P3(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${ze(s).join(",")}]`,f=ke(s,ce.YIN_YANG),g=r.value;if(g){const h=parseInt(g);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${f}, ${h});
`}return""}function B3(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${sl(s).join(", ")}]`,f=r.value;if(f){const g=parseInt(f);return`constraint little_killer_sum_p(${u}, ${g});
`}return""}const W3=new Map([[_.SANDWICH_SUM,O3],[_.X_SUM,A3],[_.SHORTSIGHTED_X_SUM,x3],[_.BROKEN_X_SUM,S3],[_.SHIFTED_X_SUM,N3],[_.SKYSCRAPERS,D3],[_.X_SUM_SKYSCRAPERS,T3],[_.X_INDEX,L3],[_.BATTLEFIELD,R3],[_.SANDWICH_SUM_XOR_X_SUM,y3],[_.RISING_STREAK,k3],[_.OUTSIDE_CONSECUTIVE_SUM,G3],[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,P3],[_.LOOPWICHES,M3],[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,$3],[_.LITTLE_KILLER_SUM,F3],[_.LITTLE_KILLER_PRODUCT,U3],[_.X_OMIT_LITTLE_KILLER_SUM,H3],[_.NEGATORS_LITTLE_KILLER_SUM,B3]]);function Y3(t,e,n,r){let i="";const a=W3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function z3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let a=t.getCellsInDirection(r.r,r.c,i);a=[r,...a];const s=ke(a,ce.SASHIGANE),c=ke(a,ce.SASHIGANE_BENDS),u=Oe(r),f=Tt(r,ce.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${f}, ${s}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function V3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,a=t.getCellsInDirection(r.r,r.c,i),c="["+ze(a).join(",")+"]",u=ke(a,ce.CELL_CENTER_LOOP),f=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${f});
`}const j3=new Map([[_.SASHIGANE_ARROW_POINTS_TO_BEND,z3],[_.THERMO_SIGHTLINE_LOOP_ARROW,V3]]);function q3(t,e,n,r){return ll(e,n,r,j3)}function Mv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i);return`constraint ${n}(${a});
`}function $v(t,e,n,r=""){const i=e.cell,a=t.getCell(i.r,i.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function X3(t,e,n,r){return Mv(e,r,"odd_p")}function K3(t,e,n,r){return Mv(e,r,"even_p")}function Z3(t,e,n,r){return $v(e,r,"low_digit_p","5")}function Q3(t,e,n,r){return $v(e,r,"high_digit_p","5")}function Fv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=t.getNeighboorCells(i),c=ke(s,ce.BOARD);return`constraint ${n}(${c}) == ${a};
`}function J3(t,e,n,r){return Fv(e,r,"odd_count")}function eG(t,e,n,r){return Fv(e,r,"even_count")}function tG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=ke(c,ce.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function nG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${ke(c,ce.BOARD)}, ${s});
`}function rG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${ke(c,ce.BOARD)}, ${s});
`}function iG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getRow(a.r),c=ke(s,ce.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function oG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getCol(a.c),c=ke(s,ce.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function aG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const g=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${g};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function sG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),f=e.getCell(i.r,i.c+1);if(!s||!c||!u||!f)return"";const g=Oe(s),h=Oe(c),v=Oe(u),m=Oe(f);return`constraint groups_opposite_parity_p([${g},${h}], [${v},${m}]);
`}function Ad(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),[s,c,u,f]=Cd(t,i);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${f});
`}function lG(t,e,n,r){return Ad(e,r,"is_watchtower_p")}function cG(t,e,n,r){return Ad(e,r,"is_not_watchtower_p")}function uG(t,e,n,r){return Ad(e,r,"farsight_p")}function dG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),[c,u,f,g]=Cd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${f}, ${g}, 9);
`}function _G(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+ze(c).join(",")+"]",f=e.getCol(a.c),g="["+ze(f).join(",")+"]",[h,v]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${g}, ${h}, ${v}, ${s});
`}function Uv(t,e,n){let r="";const i=e.map(s=>s.cell),a=new Set(i.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));for(const s of e){const c=s.cell,u=t.getCell(c.r,c.c);if(!u)continue;const f=Oe(u),g=t.getOrthogonallyAdjacentCells(u).filter(m=>!a.has(m)),h=ke(g,ce.BOARD),v=`constraint ${n}(${h}, ${f});
`;r+=v}return r}function fG(t,e){return Uv(t,e,"maximum_p")}function gG(t,e){return Uv(t,e,"minimum_p")}function hG(t,e){let n="";const r=e.map(c=>c.cell),i=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...i]).join(`,
	`)}`;n+=`array[int] of var int: counting_circles = [
	${s}
];
`;for(const c of e){const u=c.cell,f=t.getCell(u.r,u.c);if(!f)continue;const g=Oe(f),h=`constraint count(counting_circles, ${g}) == ${g};
`;n+=h}return n+=`
`,n}function vG(t,e){let n="";const r=e.map(f=>f.cell),i=new Set(r.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f)),s=`${ze([...i]).join(`,
	`)}`,u=`${Di([...i],ce.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;n+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${ce.COUNTING_CIRCLES_COLORS};
`,n+=`array[int] of var int: colored_counting_circles = [
	${s}
];
`,n+=`array[int] of var int: counting_circles_colors = [
	${u}
];
`,n+=`constraint colored_counting_circles_adjacent_p(${ce.COUNTING_CIRCLES_COLORS});
`,n+=`
% cells without circles
`;for(const f of t.getAllCells()){if(i.has(f))continue;const g=Tt(f,ce.COUNTING_CIRCLES_COLORS);n+=`constraint ${g} == 0;
`}for(const f of e){const g=f.cell,h=t.getCell(g.r,g.c);if(!h)continue;const v=Oe(h),m=Tt(h,ce.COUNTING_CIRCLES_COLORS),C=f.value;C?n+=`constraint ${m} == ${C};
`:n+=`constraint ${m} != 0;
`,n+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${v}, ${m}) == ${v};
`}return n+=`
`,n}function pG(t,e){let n="";const r=e.map(c=>c.cell),i=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...i]).join(`,
	`)}`;return n+=`array[int] of var int: unique_cells = [
	${s}
];
`,n+=`constraint alldifferent(unique_cells);
`,n}function mG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${ke(u,ce.YIN_YANG)}, ${s});
`}function xd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=md(t,i),c=[];for(const g of s){const h=ke(g,ce.YIN_YANG);c.push(h)}const u=Tt(i,ce.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function CG(t,e,n,r){return xd(e,r,"yin_yang_seen_unshaded_p")}function EG(t,e,n,r){return xd(e,r,"yin_yang_seen_shaded_p")}function IG(t,e,n,r){return xd(e,r,"yin_yang_seen_same_shade_p")}function bG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Tt(a,ce.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),f=ke(u,ce.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${f});
`}function wG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${ke(c,ce.YIN_YANG)}, 1) == ${s};
`}function OG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),f=e.getCol(a.c),g="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",h="["+f.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${s}, ${c});
`}function yG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),f="["+c.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]",g="["+u.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${f}, ${g}, ${s});
`}function LG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let g=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const h=md(e,a),v=[];for(const m of h){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";v.push(C)}return g+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${v[0]}, ${v[1]}, ${v[2]}, ${v[3]});
`,g}function AG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Tt(a,ce.SASHIGANE),u=Tt(a,ce.SASHIGANE_BENDS);let f=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return f+=`constraint ${u} = true;
`,f}function xG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Tt(a,ce.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function SG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${Tt(a,ce.CELL_CENTER_LOOP)} == 1;
`:""}function NG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${Tt(a,ce.CELL_CENTER_LOOP)} == 0;
`:""}function DG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${ke(u,ce.CELL_CENTER_LOOP)}) == ${s};
`}function TG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Tt(a,ce.CAVE_SHADING),u=md(e,a),f=[];for(const h of u){const v=ke(h,ce.CAVE_SHADING);f.push(v)}return`constraint cave_clue_p(${s}, ${c}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function RG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const f=Oe(a),g=Tt(a,ce.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(a),v=ke(h,ce.BOARD),m=ke(h,ce.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${f});
`;const C=e.getCellsByKnightMove(a),I=ke(C,ce.BOARD),b=ke(C,ce.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${f});
`;const w=[Be.NE,Be.NW,Be.SE,Be.SW],A=[];for(const $ of w)e.getCellsInDirection(a.r,a.c,$).forEach(Y=>A.push(Y));const R=ke(A,ce.BOARD),M=ke(A,ce.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${R}, ${M}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${f});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function kG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const f=Oe(a),g=Tt(a,ce.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(a),v=ke(h,ce.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${g}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],C=[];for(const I of m){const b=e.getCellsInDirection(a.r,a.c,I);if(!b.length)continue;const w=ke(b,ce.BOARD),A=ke(b,ce.UNKNOWN_REGIONS),R=`in_arrow_${n}_${I}`,M=`in_arrow_${n}_${I}[1]`;C.push(M),u+=`array[index_set(${w})] of var bool: ${R};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${R}, ${f}, ${g});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}const GG=new Map([[_.ODD,X3],[_.EVEN,K3],[_.LOW_DIGIT,Z3],[_.HIGH_DIGIT,Q3],[_.ODD_MINESWEEPER,J3],[_.EVEN_MINESWEEPER,eG],[_.DIAGONALLY_ADJACENT_SUM,rG],[_.ORTHOGONAL_SUM,nG],[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,tG],[_.FRIENDLY_CELL,aG],[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,sG],[_.WATCHTOWER,lG],[_.NOT_WATCHTOWER,cG],[_.FARSIGHT,uG],[_.RADAR,dG],[_.INDEXING_COLUMN,iG],[_.INDEXING_ROW,oG],[_.SANDWICH_ROW_COL_COUNT,_G],[_.YIN_YANG_MINESWEEPER,mG],[_.YIN_YANG_SEEN_UNSHADED_CELLS,CG],[_.YIN_YANG_SEEN_SHADED_CELLS,EG],[_.YIN_YANG_SEEN_SAME_SHADE_CELLS,IG],[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,bG],[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,wG],[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,OG],[_.SEEN_REGION_BORDERS_COUNT,yG],[_.NURIMISAKI_UNSHADED_ENDPOINTS,LG],[_.SASHIGANE_BEND_REGION_COUNT,AG],[_.SASHIGANE_REGION_SUM,xG],[_.CELL_ON_THE_LOOP,SG],[_.CELL_NOT_ON_THE_LOOP,NG],[_.COUNT_LOOP_NEIGHBOUR_CELLS,DG],[_.CAVE_CLUE,TG],[_.CHAOS_CONSTRUCTION_CHESS_SUMS,RG],[_.CHAOS_CONSTRUCTION_ARROW_KNOTS,kG]]),MG=new Map([[_.MAXIMUM,fG],[_.MINIMUM,gG],[_.COUNTING_CIRCLES,hG],[_.COLORED_COUNTING_CIRCLES,vG],[_.UNIQUE_CELLS,pG]]);function $G(t,e,n,r){let i="";const a=GG.get(n),s=MG.get(n);if(a)for(const[c,u]of Object.entries(r)){const f=a(t,e,c,u);i+=f}else if(s){const c=Object.values(r),u=s(e,c);i+=u}return i}function FG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,ce.UNKNOWN_REGIONS),s=e.directions,c=[];for(const g of s){const h=t.getCellsInDirection(r.r,r.c,g),v=ke(h,ce.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(g=>`count_different(${g}, ${a})`).join(" + ")} == ${i};
`}function UG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,ce.YIN_YANG),s=e.directions;let c="";for(const u of s){const f=t.getCellsInDirection(r.r,r.c,u),h="["+ze(f).join(",")+"]",v=ke(f,ce.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${h}, ${v}) == ${i};
`}return c}function HG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),f=ke(u,ce.YIN_YANG);s+=`constraint count(${f}, 1) == ${i};
`}return s}function PG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,ce.YIN_YANG),s=e.directions,c=[];for(const f of s){const g=t.getCellsInDirection(r.r,r.c,f),h=ke(g,ce.YIN_YANG),v=ke(g,ce.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${h}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function BG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions,s=[];for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${ke(f,ce.CELL_CENTER_LOOP)})`;s.push(h)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function WG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,ce.GALAXY_REGIONS),s=e.directions,c=[];for(const f of s){const g=t.getCellsInDirection(r.r,r.c,f),m=`count(${"["+Di(g,ce.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function YG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+ze(u).join(",")+"]";s+=`constraint hot_arrows_p(${g}, ${i});
`}return s}function zG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+ze(u).join(",")+"]";s+=`constraint cold_arrows_p(${g}, ${i});
`}return s}const VG=new Map([[_.HOT_ARROWS,YG],[_.COLD_ARROWS,zG],[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,FG],[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,UG],[_.LOOP_CELL_COUNT_ARROWS,BG],[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,PG],[_.YIN_YANG_COUNT_SHADED_CELLS,HG],[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,WG]]);function jG(t,e,n,r){return ll(e,n,r,VG)}function qG(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function XG(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function KG(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const ZG=new Map([[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,qG],[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,XG],[_.FORBIDDEN_KNIGHT_SUM,KG]]);function QG(t,e,n,r){return ll(e,n,r,ZG)}const JG=[Bk,$G,q3,jG,h5,Jk,w3,mk,kk,Y3,zk,QG];function eM(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[a,s]of r.entries())for(const c of JG){let u=c(e,i,a,s);u=yt(u,`${a}`),n+=u}return n}function tM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,i+=`constraint yin_yang_p(yin_yang);
`,i}function nM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,i+=`constraint nurimisaki_p(nurimisaki);
`,i}function rM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`
% Two Contiguous Regions
`,i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,i+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,i}function iM(t,e){const n=t.grid;if(n.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const i=Math.max(n.nCols,n.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${i-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${i});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${i});
`,a}function oM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,i+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,i+=`constraint sashigane_adjacency_p(sashigane);
`,i+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,i+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,i+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,i}function aM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, true);
`,i}function sM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i}function lM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,i+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,i+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,i}function cM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i+=`constraint modular_loop_p(board, cell_center_loop);
`,i}function oa(t,e,n,r){const i=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=i.nRows;for(let g=0;g<s;g++){const h=i.getRow(g),v=r(h);a+=`constraint count_eq(${v}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let g=0;g<c;g++){const h=i.getCol(g),v=r(h);a+=`constraint count_eq(${v}, ${n}, ${e});
`}if(!t.globalConstraints.get(_.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const g=i.getUsedRegions();for(const h of g){const v=i.getRegion(h),m=r(v);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function uM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,i+=oa(t,1,!0,a=>ke(a,ce.DOUBLERS)),i+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,i+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,i}function dM(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${i};
`,a+=oa(t,1,!0,s=>ke(s,ce.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${i}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${i});
`,a}function _M(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${i};
`,a+=`constraint fillomino_p(board, ${i});
`,a}function fM(t,e){if(t.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=ce.CAVE_SHADING,a=ce.CAVE_REGIONS;let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint cave_p(${i}, ${a});
`,s}function gM(t,e){if(t.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=ce.CAVE_SHADING,a=ce.BOARD_REGIONS,s="renban_cave_regions";let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,c+=`constraint renban_cave_regions_p(${i}, ${a}, ${s});
`,c+=`constraint renban_caves_p(${ce.BOARD}, ${s});
`,c}function hM(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=ce.GALAXY_REGIONS,a=ce.GALAXY_SIZES,s=n.nCols*n.nRows;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${i};
`,c+=`constraint galaxy_restrict_numbering_p(${i});
`,c+=`array[0..${s}] of var 0..${s}: ${a};
`,c+=`constraint galaxy_sizes_p(${i}, ${a});
`,c+=`constraint adjacent_galaxies_not_size_leq_3_p(${i}, ${a});
`,c+=`constraint gallaxy_connected_regions_p(${i});
`,c}function vM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,i+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,i}function pM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,i+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,i+=`constraint goldilocks_zone_p(goldilocks_regions);
`,i+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,i}function mM(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=Vg.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${i}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${i}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[s,c]of Vg.entries()){const u=c.length,f=c[0].length,g=`pentomino_${s}`;a+=`array[1..${u}, 1..${f}] of 0..1: ${g} = ${OR(c)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${s});
`}return a}function CM(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=ce.LITS_SHADING,a=ce.LITS_REGIONS;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,s+=`constraint lits_shading_p(${i});
`,s+=`constraint lits_shading_ids_p(${i}, ${a});
`,s+=`constraint lits_region_and_ids_p(${ce.BOARD_REGIONS}, ${a});
`,s+=`constraint lits_tetromino_shapes_p(${a});
`;const c=n.getUsedRegions();c.size&&(s+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const u of c){const f=n.getRegion(u),h=`constraint count_eq(${ke(f,ce.LITS_SHADING)}, 1, 4);
`;s+=h}return s}function EM(t,e){const n=t.grid;if(n.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=ce.LITS_SHADING,a=ce.LITS_REGIONS,s=ce.CAVE_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${i});
`,c+=`constraint lits_shading_ids_p(${i}, ${a});
`,c+=`constraint lits_region_and_ids_p(${s}, ${a});
`,c+=`constraint lits_4_per_region_p(${s}, ${i});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=n.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const f of u){const g=n.getRegion(f),v=`constraint count_eq(${ke(g,ce.LITS_SHADING)}, 1, 4);
`;c+=v}return c}function IM(t,e){if(t.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=ce.LITS_SHADING,a=ce.STAR_BATTLE,s=ce.LITS_WHITE_BLACK_STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=oa(t,2,1,u=>ke(u,ce.STAR_BATTLE)),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,c+=`
% 1 white star per row, column, region
`,c+=oa(t,1,1,u=>ke(u,ce.LITS_WHITE_BLACK_STAR_BATTLE)),c+=`
% 1 black star per row, column, region
`,c+=oa(t,1,2,u=>ke(u,ce.LITS_WHITE_BLACK_STAR_BATTLE)),c+=`constraint black_and_white_star_battle_p(${a}, ${s});
`,c+=`constraint lits_black_and_white_star_battle_p(${i}, ${s});
`,c}const bM=new Map([[_.FILLOMINO,_M],[_.CAVE,fM],[_.GALAXIES,hM],[_.YIN_YANG,tM],[_.NURIMISAKI,nM],[_.TWO_CONTIGUOUS_REGIONS,rM],[_.UNKNOWN_REGIONS,iM],[_.SASHIGANE,oM],[_.CELL_CENTER_LOOP_NO_TOUCHING,aM],[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,sM],[_.NOT_LOOP_SIZED_REGIONS,lM],[_.MODULAR_LOOP,cM],[_.DOUBLERS,uM],[_.NEGATORS,dM],[_.GOLDILOCKS_ZONE,pM],[_.NEXUS,vM],[_.PENTOMINO_TILLING,mM],[_.LITS,CM],[_.CAVE_LITS,EM],[_.LITS_BLACK_WHITE_STAR_BATTLE,IM],[_.RENBAN_CAVES,gM]]);function wM(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const a=bM.get(r);if(!a)continue;let s=a(t,r);s=yt(s,`${r}`),e+=s}return e}function OM(){return`
`+`test orth_adjacent_2d(
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
    )
    /\\ fillomino_restrict_floodfill_p(when, regions)    
    % Symmetry breaking: canonical numbering of regions
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
    )
);

predicate cave_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: regions
) =  let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
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
    forall (r in rows, c in cols where c > min(cols)) (
        let { 
            var int: id1 = regions[r, c - 1], 
            var int: id2 = regions[r, c] 
        } in (shading[r,c] = 1 /\\ shading[r, c - 1] = 1) -> id1 = id2
    ) /\\
    % adjacent shaded cells must belong to the same region (vertical adjacent)
    forall (r in rows, c in cols where r > min(rows)) (
        let { var int: id1 = regions[r - 1, c], var int: id2 = regions[r, c] } in
        (shading[r,c] = 1 /\\ shading[r - 1, c] = 1) -> id1 = id2
    ) /\\
    % for each region not equal to 0, there must be at least one cell that is on the edge of the grid
    forall(r in rows, c in cols where regions[r,c] != 0)(
        exists(r2 in rows, c2 in cols)(regions[r2,c2] = regions[r,c] /\\ on_edge_2d(r2, c2, regions))
    ) /\\
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    cave_floodfill_p(regions)
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

`}function yM(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function Hv(t){const e=t.grid;let n=t.valid_digits;const r=new bR(t),[i,a]=[e.nRows,e.nCols],s=i*a;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(OM());let u=`1..${Math.max(i,a)}`;return!!t.globalConstraints.get(_.FILLOMINO)&&(u=`1..${s}`),t.globalConstraints.get(_.HEXED_SUDOKU)&&(n=[...Dt.range(1,16)]),n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${i-1};
`),r.add(`set of int: COL_IDXS = 0..${a-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),yR(r,e),r.add(yM(t)),r.add(dk(t)),r.add(_k(t)),r.add(wM(t)),r.add(eM(t,r)),r.add(gk(t)),r.add(`
solve satisfy;`),r.model_str}var LM=ie('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function AM(t,e){te(e,!1);const n=qe(),r=()=>ve(Nr,"$puzzleMetaStore",n);let i=F(e,"showModal",12,!1);function a(h,v,m){var C=document.createElement("a"),I=new Blob([h],{type:m});C.href=URL.createObjectURL(I),C.download=v,C.click(),URL.revokeObjectURL(C.href)}function s(){const h=st(ma);return Hv(h)}function c(){const h=s();navigator.clipboard.writeText(h)}function u(){const h=s(),v=zg(h);navigator.clipboard.writeText(v)}function f(){const h=hu(r()),v=s();a(v,`${h}.mzn`,"text/plain")}function g(){const h=hu(r()),v=s(),m=zg(v);a(m,`${h}.mzn`,"text/plain")}fe(),Gr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(h){i(h)},children:(h,v)=>{var m=LM(),C=q(m),I=U(C,2),b=U(I,2),w=U(b,2);H(m),De("click",C,c),De("click",I,u),De("click",b,f),De("click",w,g),N(h,m)},$$slots:{default:!0},$$legacy:!0}),ne()}function Oa(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const f=e.getCell(s,u);if(!f)continue;const g=Number(c[u]),h=n.get(g);h!==void 0&&(r.push(f),i.push([h]))}}const a=Js(r,i);ro(a)}function xM(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const C=[];i.push(C),s(v,m,t[v][m])}function s(v,m,C){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==C||(r[v][m]=!0,i[i.length-1].push([v,m]),s(v+1,m,C),s(v-1,m,C),s(v,m+1,C),s(v,m-1,C))}const c=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[C,I]of v)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=C+b,R=I+w;if(m.some(([M,$])=>M===A&&$===R))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(c[v].add(m),c[m].add(v));const f=[1,4,7,9],g=new Array(i.length).fill(0);function h(v,m){for(const C of c[v])if(g[C]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of f)if(h(v,m)){g[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,C]of i[v])a[m][C]=g[v];return a}function SM(t,e){const n=e.grid,r=e.globalConstraints.get(_.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const a=[],s=[];for(let u=0;u<i.length;u++){const f=i[u];for(let g=0;g<f.length;g++){const h=n.getCell(u,g);if(!h||h.given||r&&!h.given&&h.value===null)continue;const v=f[g];a.push(h),s.push(v)}}const c=Ev(a,s);ro(c)}function NM(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const a=t[i];if(a!==void 0){Oa(a,e,r);return}}}function DM(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const a=t[i];if(a!==void 0){Oa(a,e,r);return}}}function TM(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const f=e.getCell(s,u);if(!f)continue;r.push(f);const g=c[u];i.push([g+1])}}const a=Js(r,i);ro(a)}function RM(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Oa(n,e,new Map([[0,4],[1,7],[2,9]]))}function kM(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Oa(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function GM(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Oa(n,e,new Map([[1,7],[2,4],[3,9]]))}function MM(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<i.length;g++){const h=i[g];for(let v=0;v<h.length-1;v++){const m=e.getCell(g,v),C=e.getCell(g,v+1);if(!m||!C)continue;const I=h[v],b=h[v+1];if(I===b)continue;const w={colorId:c,p1:{r:g,c:v+1},p2:{r:g+1,c:v+1}};u.push(w)}}for(let g=0;g<s;g++)for(let h=0;h<a-1;h++){const v=e.getCell(h,g),m=e.getCell(h+1,g);if(!v||!m)continue;const C=i[h][g],I=i[h+1][g];if(C===I)continue;const b={colorId:c,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(b)}const f=Ss(u);Sr(f);return}}function $M(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const g=e.getCell(c,f);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const v=i[g.r][g.c],m=i[h.r][h.c];if(!(v===1&&m===1))continue;const C={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};a.push(C)}}}const s=Ss(a);Sr(s);return}}function FM(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=xM(i);if(!a)return;const s=[],c=[];for(let f=0;f<a.length;f++){const g=a[f];for(let h=0;h<g.length;h++){const v=e.getCell(f,h);if(!v)continue;s.push(v);const m=g[h];c.push([m])}}const u=Js(s,c);ro(u);return}}function UM(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const g=e.getCell(c,f);if(!g)continue;const h=i[g.r][g.c];if(h===0)continue;const m={colorId:h===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};a.push(m)}}const s=Jy(a);Sr(s);return}}function HM(t,e){const n=e.grid;Sr(sd()),SM(t,e),TM(t,n),MM(t,n),RM(t,n),kM(t,n),$M(t,n),DM(t,n),FM(t,n),NM(t,n),UM(t,n),GM(t,n)}function PM(){const{subscribe:t,set:e}=Ft(0),n=100;let r=Date.now(),i,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,i=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(i),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var BM=ie('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function WM(t,e){te(e,!1);const n=qe(),r=()=>ve(ma,"$puzzleStore",n),i=()=>ve(_n,"$gridStore",n),a=()=>ve(w,"$timer",n),s=D(),c=D(),u=D(),f=D();let g=D(!1),h=D(!1),v=D(null),m=D(100),C=D("100"),I=D(null),b=D("IDLE");const w=PM();function A(X){return X===null?"":String(X)}function R(X){const re=Math.floor(X/6e4),de=Math.floor(X%6e4/1e3),ee=Math.floor(X%1e3/100),le=de.toString().padStart(2,"0");return`${re}:${le}.${ee}`}function M(){S(h,!0)}function $(X){const re=parseInt(X);typeof re=="number"&&re>=1&&S(m,re)}async function W(){S(I,0),S(b,"SOLVING...");const X=new Tu;hv(),console.log(p(s));const re=Hv(p(s));X.addFile("test.mzn",re),w.reset(),w.start(),S(v,X.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(v).on("solution",de=>{const ee=de.output.json;de.type==="solution"&&p(I)!==null&&S(I,p(I)+1),HM(ee,p(s))}),p(v).on("error",de=>{S(u,"Solve"),S(b,"ERROR"),w.stop(),p(v)&&p(v).cancel()}),p(v).on("warning",de=>{S(b,"WARNING"),console.log(de.message)}),p(v).then(de=>{S(b,de.status),S(u,"Solve"),w.stop()})}function Y(){p(v)===null||!p(v).isRunning()?W():p(v)!==null&&p(v).isRunning()&&(S(b,"IDLE"),S(u,"Solve"),w.stop(),p(v).cancel())}G(()=>r(),()=>{S(s,r())}),G(()=>i(),()=>{S(c,i())}),G(()=>{},()=>{S(u,"Solve")}),G(()=>a(),()=>{S(f,a())}),G(()=>p(v),()=>{p(v)&&(p(v)!==null&&p(v).isRunning()?S(u,"Stop"):S(u,"Solve"))}),pe(),fe(),ol(t,{get isOpen(){return p(g)},set isOpen(X){S(g,X)},$$slots:{"panel-header":(X,re)=>{il(X,{slot:"panel-header",title:"Solver",get isOpen(){return p(g)},set isOpen(de){S(g,de)},$$legacy:!0})},"panel-content":(X,re)=>{var de=BM(),ee=ue(de),le=U(ee,2);AM(le,{get showModal(){return p(h)},set showModal(Zt){S(h,Zt)},$$legacy:!0});var Ie=U(le,2),me=q(Ie,!0);H(Ie);var Ce=U(Ie,2),Se=q(Ce,!0);H(Ce);var lt=U(Ce,2),xe=q(lt);jt(xe),x(xe,"min",1),x(xe,"max",200),x(xe,"step",1),H(lt);var we=U(lt,2),_t=q(we,!0);Z(()=>nt(_t,`Solution Count: ${A(p(I))}`)),H(we);var ct=U(we,2),Un=q(ct,!0);Z(()=>nt(Un,`Elapsed Time: ${R(p(f))}`)),H(ct);var Lt=U(ct,2),Ln=q(Lt,!0);H(Lt),Z(()=>{nt(me,p(u)),nt(Se,`Max. Solutions: ${p(m)}`),nt(Ln,`Status: ${p(b)}`)}),De("click",ee,M),De("click",Ie,Y),qn(xe,()=>p(C),Zt=>S(C,Zt)),De("input",xe,()=>$(p(C))),N(X,de)}},$$legacy:!0}),ne()}var YM=ie('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function zM(t){var e=YM(),n=q(e),r=q(n);fR(r);var i=U(r,2);WM(i,{});var a=U(i,2);XD(a,{elementHandlers:$t});var s=U(a,2);eT(s,{elementHandlers:$t});var c=U(s,2);PD(c,{elementHandlers:$t});var u=U(c,2);OT(u,{elementHandlers:$t});var f=U(u,2);hR(f,{}),H(n),H(e),N(t,e)}const Pv=fn([no,_n,Xt],([t,e,n])=>{const r=Kr(n,$t);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0}),Sd=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Kw(n)&&e.push({toolId:n,element:r});return e}),VM=fn(Sd,t=>{const e=t.find(r=>r.toolId===_.MINIMUM);return e?e.element:{}}),jM=fn(Sd,t=>{const e=t.find(r=>r.toolId===_.MAXIMUM);return e?e.element:{}}),qM=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ku(n)&&e.push({toolId:n,element:r});return e}),XM=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ah(n)&&e.push({toolId:n,element:r});return e}),KM=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Lh(n)&&e.push({toolId:n,element:r});return e}),ZM=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Zu(n)&&e.push({toolId:n,element:r});return e}),QM=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Qu(n)&&e.push({toolId:n,element:r});return e}),JM=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ju(n)&&e.push({toolId:n,element:r});return e}),e8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())xh(n)&&e.push({toolId:n,element:r});return e}),t8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())la(n)&&e.push({toolId:n,element:r});return e});function n8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function r8(t){const e=new Map;function n(r,i){const a=e.get(i);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=n8(r),a=i.length;for(let s=0;s<a;s++){const c=i[s%a],u=i[(s+1)%a],f=JSON.stringify(c),g=JSON.stringify(u);n(f,g)}}return e}function i8(t,e=0,n=!1){const r=[],i=r8(t);if(i.size<=0)return r;const a=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let f=JSON.parse(c);const g=Array.from(u)[0];let h=JSON.parse(g),v=g;const m=[];do{const C=i.get(v);if(C===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Re(f.c,f.r),b=new Re(h.c,h.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,R=null;for(const M of C){const $=JSON.parse(M),W=new Re($.c,$.r),Y=b.subtract(I),X=W.subtract(b),re=Y.perpDotProduct(X);w<re!=n&&(w=re,R=$,A=M)}if(n&&C.size>1&&a.add(v),R===null||A===null)throw new Error("Corner with no adjacencies found");if(C.delete(A),C.size<=0&&i.delete(v),w!==0){const M=e*(h.c-f.c),$=e*(R.c-h.c),W=e*(f.r-h.r),Y=e*(h.r-R.r),X=Y+w*$,re=M+w*W,de=new Re(h.c+X,h.r+re),ee=4;a.has(v)?(m.push(new Re(de.x-ee*M,de.y-ee*$)),m.push(new Re(de.x-ee*W,de.y-ee*Y))):m.push(de)}f=h,h=R,v=A}while(v!==g);r.push(m)}return r}function oo(t,e=0,n=!1){return i8(t,e,n).map(a=>Oo(a,!0)).join("")}const o8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5)];function a8(t,e,n=o8){if(e===1)return n;const r=[],i=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,f=c/(360/i),g=u/(360/i),h=Math.floor(f)%i,v=Math.ceil(f)%i,m=n[h].lerp(n[v],f%1),C=Math.floor(g)%i,I=Math.ceil(g)%i,b=n[C].lerp(n[I],g%1);r.push(m);for(let A=Math.ceil(f);A<=Math.floor(g);A++)r.push(n[A%i]);r.push(b);const w=new Re(0,0);return r.push(w),r}function Bv(t,e,n=new Re(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const f=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),h=n.add(new Re(f,g));c.push(h)}return c}function Oo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:a})=>`${i},${a}`).join("L")+n}function fl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){if(r&&t.length>1){const f=t[t.length-1];for(let h=0;h<t.length-1;h++)if(f.equals(t[h])){t.push(t[h+1]);break}const g=t[0];for(let h=1;h<t.length;h++)if(g.equals(t[h])){t.unshift(t[h-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let f=t[1].subtract(t[0]);f=f.normalise(),f=f.scale(e),t[0]=t[0].add(f)}if(n){const f=t.length;let g=t[f-2].subtract(t[f-1]);g=g.normalise(),g=g.scale(n),t[f-1]=t[f-1].add(g)}}if(!i)return Oo(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let f=2;f<c;f++){const g=t[f-2],h=t[f-1],v=t[f];let m=g.subtract(h).normalise();m=m.scale(i),m=m.add(h);let C=v.subtract(h).normalise();C=C.scale(i),C=C.add(h),s.push(`L${m.x},${m.y} Q ${h.x},${h.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function Iu(t,e={}){const n=Rs(t);return fl(n,e)}function Zn(t){return new Re(t.c+.5,t.r+.5)}function Rs(t){return t.map(n=>Zn(n))}const s8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5),new Re(0,-.5),new Re(0,.5),new Re(-.5,0),new Re(.5,0)];function l8(t,e){const n=s8[t];return n.subtract(n.scale(e))}function Wv(t,e){const n=[new Re(t.c-e,t.r-e),new Re(t.c+e,t.r+e)],r=[new Re(t.c-e,t.r+e),new Re(t.c+e,t.r-e)];return[n,r].map(a=>Oo(a,!1)).join("")}const c8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function gl(t,e="none"){return c8.get(t)||e}function u8(t,e,n){let r=[];function a(c,u){return c.map(f=>f.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Re(-.12,-.32),new Re(0,-.4),new Re(.12,-.32)]:s=[new Re(-.12,-.4),new Re(0,-.32),new Re(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const f=new Re(n+.5,e+.5);return u.add(f)})),r}var d8=oe('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function hl(t,e){let n=F(e,"l",8,.2),r=F(e,"id",8),i=F(e,"strokeWidth",8),a=F(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=d8();x(u,"viewBox","0 0 1 1"),x(u,"refX",s),x(u,"refY",s),x(u,"markerWidth",1),x(u,"markerHeight",1);var f=q(u);x(f,"d",c),H(u),Z(()=>{x(u,"id",r()),x(f,"stroke-width",i()),x(f,"stroke",a())}),N(t,u)}var _8=oe('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function f8(t,e){var W;te(e,!1);const n=D(),r=D(),i=D();let a=F(e,"outsideEdgeTool",8);const s=a().cell,c=a().direction,u=Rh(s,c),f=Zn(s),g=bn(a().toolId,$t)??pO,h=((W=p(n))==null?void 0:W.fontSize)??.5,v=.03;function m(Y){return Y.value&&Y.value.length?Y.value:"-"}function C(){const re=Zn(u).subtract(f).length(),de={shortenHead:.3*re,shortenTail:.55*re};return Iu([s,u],de)}const b=`outside-tool-arrow-marker-${crypto.randomUUID()}`;G(()=>Q(a()),()=>{S(n,a().shape??g)}),G(()=>p(n),()=>{var Y;S(r,((Y=p(n))==null?void 0:Y.fontColor)??"var(--text-primary-color)")}),G(()=>p(n),()=>{var Y;S(i,((Y=p(n))==null?void 0:Y.stroke)??"var(--text-primary-color)")}),pe(),fe();var w=_8(),A=q(w);hl(A,{id:b,l:.07,strokeWidth:v,get stroke(){return p(i)}});var R=U(A);Z(()=>x(R,"d",C())),x(R,"stroke-width",v),x(R,"marker-end",`url(#${b??""})`);var M=U(R);x(M,"font-size",h);var $=q(M,!0);Z(()=>nt($,m(a()))),H(M),H(w),Z(()=>{x(R,"stroke",p(i)),x(M,"x",f.x),x(M,"y",f.y),x(M,"fill",p(r))}),N(t,w),ne()}var g8=oe("<g></g>"),h8=oe('<g class="outside-direction-tools-layer" mask="url(#fog-mask-fog)"></g>');function v8(t,e){te(e,!1);const n=qe(),r=()=>ve(t8,"$outsideDirectionToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=h8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=g8();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{f8(h,{get outsideEdgeTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var p8=oe("<path></path>");function ks(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D();let f=F(e,"cells",8),g=F(e,"shape",8,rd);G(()=>Q(g()),()=>{S(n,g().inset??.06)}),G(()=>Q(g()),()=>{S(r,g().stroke??"black")}),G(()=>Q(g()),()=>{S(i,g().strokeWidth??.03)}),G(()=>Q(g()),()=>{S(a,g().strokeDasharray??.08)}),G(()=>Q(g()),()=>{S(s,g().fill??"none")}),G(()=>Q(g()),()=>{S(c,g().connectDiag??!0)}),G(()=>(Q(f()),p(n),p(c)),()=>{S(u,oo(f(),p(n),p(c)))}),pe(),fe();var h=p8();Z(()=>{x(h,"d",p(u)),x(h,"stroke",p(r)),x(h,"stroke-width",p(i)),x(h,"fill",p(s)),x(h,"stroke-dasharray",p(a))}),N(t,h),ne()}var m8=oe('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ua(t,e){te(e,!1);const n=D();let r=F(e,"value",8,""),i=F(e,"fontSize",8,.2),a=F(e,"x",8),s=F(e,"y",8),c=F(e,"position",8,"TL"),u=F(e,"fontColor",8,"var(--text-primary-color)"),f=F(e,"fontWeight",8,400),g=D(null),h=D(null);function v(A,R,M){const $=["TL","TR"].includes(M),Y=["TL","BL"].includes(M)?A+.05:A,X=R;return new Re(Y,X)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function C(A){return["TL","TR"].includes(A)?"text-before-edge":""}bw(()=>{if(!p(g)||!p(h))return;const A=p(g).getBBox();p(h).setAttribute("x",String(A.x)),p(h).setAttribute("y",String(A.y+A.height*.1)),p(h).setAttribute("width",String(A.width)),p(h).setAttribute("height",String(A.height*.8))}),G(()=>(Q(a()),Q(s()),Q(c())),()=>{S(n,v(a(),s(),c()))}),pe(),fe();var I=Ae(),b=ue(I);{var w=A=>{var R=m8(),M=ue(R);Ei(M,Y=>S(h,Y),()=>p(h));var $=U(M);Z(()=>x($,"text-anchor",m(c()))),Z(()=>x($,"dominant-baseline",C(c())));var W=q($,!0);H($),Ei($,Y=>S(g,Y),()=>p(g)),Z(()=>{var Y,X;x($,"x",(Y=p(n))==null?void 0:Y.x),x($,"y",(X=p(n))==null?void 0:X.y),x($,"font-size",i()),x($,"fill",u()),x($,"font-weight",f()),nt(W,r())}),N(A,R)};ge(b,A=>{r().length&&A(w)})}N(t,I),ne()}var C8=ie("<!> <!> <!> <!>",1);function E8(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D(),f=D();let g=F(e,"cloneTool",8);const h=bn(g().toolId,$t)??vO,v=800,m=g().value;G(()=>Q(g()),()=>{S(n,g().shape??h)}),G(()=>p(n),()=>{S(r,p(n).inset??.15)}),G(()=>p(n),()=>{S(i,p(n).strokeWidth??.07)}),G(()=>p(n),()=>{S(a,p(n).fontColor??p(n).stroke??"black")}),G(()=>Q(g()),()=>{S(s,g().cells[g().cells.length-1])}),G(()=>Q(g()),()=>{S(c,g().cells2[g().cells2.length-1])}),G(()=>(p(s),p(r)),()=>{S(u,new Re(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),G(()=>(p(c),p(r)),()=>{S(f,new Re(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),pe(),fe();var C=C8(),I=ue(C);ks(I,{get cells(){return g().cells},get shape(){return p(n)}});var b=U(I,2);ua(b,{value:m,get x(){return p(f).x},get y(){return p(f).y},position:"BR",get fontColor(){return p(a)},fontWeight:v});var w=U(b,2);ks(w,{get cells(){return g().cells2},get shape(){return p(n)}});var A=U(w,2);ua(A,{value:m,get x(){return p(f).x},get y(){return p(f).y},position:"BR",get fontColor(){return p(a)},fontWeight:v}),N(t,C),ne()}var I8=oe("<g></g>"),b8=oe('<g class="clone-tools-layer" mask="url(#fog-mask-fog)"></g>');function w8(t,e){te(e,!1);const n=qe(),r=()=>ve(e8,"$cloneToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=b8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=I8();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{E8(h,{get cloneTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var O8=oe('<path fill="none"></path>');function da(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D();let u=F(e,"linePoints",8),f=F(e,"shape",8,void 0);const g="round",h="round";G(()=>Q(f()),()=>{var m;S(n,((m=f())==null?void 0:m.stroke)??"gray")}),G(()=>Q(f()),()=>{var m;S(r,((m=f())==null?void 0:m.strokeWidth)??.1)}),G(()=>Q(f()),()=>{var m;S(i,((m=f())==null?void 0:m.strokeDasharray)??0)}),G(()=>Q(f()),()=>{var m;S(a,((m=f())==null?void 0:m.strokeDashoffset)??0)}),G(()=>Q(f()),()=>{var m,C,I,b,w,A,R,M;S(s,{shortenHead:((C=(m=f())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((b=(I=f())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(w=f())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((M=(R=f())==null?void 0:R.linePathOptions)==null?void 0:M.closeLoops)??!1})}),G(()=>(Q(u()),p(s)),()=>{S(c,fl(u(),p(s)))}),pe(),fe();var v=O8();x(v,"stroke-linejoin",g),x(v,"stroke-linecap",h),Z(()=>{x(v,"d",p(c)),x(v,"stroke",p(n)),x(v,"stroke-width",p(r)),x(v,"stroke-dasharray",p(i)),x(v,"stroke-dashoffset",p(a))}),N(t,v),ne()}var y8=oe("<circle></circle>");function wi(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D();let u=F(e,"x",8),f=F(e,"y",8),g=F(e,"shape",8);G(()=>Q(g()),()=>{S(n,g().r??.35)}),G(()=>Q(g()),()=>{S(r,g().stroke??"black")}),G(()=>Q(g()),()=>{var v;S(i,(v=g())==null?void 0:v.opacity)}),G(()=>Q(g()),()=>{S(a,g().strokeWidth??.02)}),G(()=>Q(g()),()=>{S(s,g().fill??"none")}),G(()=>Q(g()),()=>{S(c,g().strokeDasharray??0)}),pe(),fe();var h=y8();Z(()=>{x(h,"cx",u()),x(h,"cy",f()),x(h,"r",p(n)),x(h,"stroke",p(r)),x(h,"stroke-width",p(a)),x(h,"fill",p(s)),x(h,"opacity",p(i)),x(h,"stroke-dasharray",p(c))}),N(t,h),ne()}var L8=ie("<!> <!> <!>",1);function A8(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D();let s=F(e,"linePoints",8),c=F(e,"shape",8,Vs);function u(b){var R;const w=Dt.cloneDeep(b);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(R=w.linePathOptions)==null?void 0:R.bezierRounding},w}G(()=>Q(s()),()=>{S(n,s().length)}),G(()=>(p(n),Q(s())),()=>{S(r,p(n)>=0?s()[0]:void 0)}),G(()=>(p(n),Q(s())),()=>{S(i,p(n)>=0?s()[p(n)-1]:void 0)}),G(()=>Q(c()),()=>{S(a,u(c()))}),pe(),fe();var f=L8(),g=ue(f);{var h=b=>{wi(b,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};ge(g,b=>{p(r)&&b(h)})}var v=U(g,2);{var m=b=>{da(b,{get linePoints(){return s()},get shape(){return p(a)}})};ge(v,b=>{p(n)>1&&b(m)})}var C=U(v,2);{var I=b=>{wi(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(a)}})};ge(C,b=>{p(i)&&b(I)})}N(t,f),ne()}var x8=oe("<polygon></polygon>");function Gs(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D(),f=D();let g=F(e,"cx",8),h=F(e,"cy",8),v=F(e,"shape",8);G(()=>Q(v()),()=>{S(n,v().n??3)}),G(()=>Q(v()),()=>{S(r,v().r??.5)}),G(()=>(p(r),p(n),Q(g()),Q(h())),()=>{S(i,Bv(p(r),p(n),new Re(g(),h())))}),G(()=>p(i),()=>{S(a,p(i).map(C=>`${C.x},${C.y}`).join(" "))}),G(()=>Q(v()),()=>{S(s,v().stroke??"black")}),G(()=>Q(v()),()=>{S(c,v().strokeWidth??.02)}),G(()=>Q(v()),()=>{S(u,v().fill??"none")}),G(()=>Q(v()),()=>{S(f,v().angle??0)}),pe(),fe();var m=x8();Z(()=>{x(m,"points",p(a)),x(m,"stroke",p(s)),x(m,"stroke-width",p(c)),x(m,"fill",p(u)),x(m,"transform",`rotate(${p(f)}, ${g()}, ${h()} )`)}),N(t,m),ne()}var S8=ie("<!> <!> <!>",1);function N8(t,e){te(e,!1);const n=D(),r=D(),i=D();let a=F(e,"linePoints",8),s=F(e,"shape",12,Vs);const c=4,u=.5;function f(M,$){const W=$.r??u,Y=$.n??c,X=$.angle??0,re=Bv(W,Y,new Re(0,0),!0,0),de=(Y+(M-X/360)*Y%Y)%Y,ee=Math.floor(de)%Y,le=Math.ceil(de)%Y;return re[ee].lerp(re[le],de%1).length()}function g(M){if(p(n)<=1)return 0;const $=a()[0],Y=a()[1].subtract($).angle()/(2*Math.PI);return f(Y,M)}function h(M){if(p(n)<=1)return 0;const $=a()[p(n)-1],Y=a()[p(n)-2].subtract($).angle()/(2*Math.PI);return f(Y,M)}function v(M){var W;const $=Dt.cloneDeep(M);return $.r=$.r||u,$.opacity=1,$.linePathOptions={shortenHead:g($),shortenTail:h($),bezierRounding:(W=$.linePathOptions)==null?void 0:W.bezierRounding},$}G(()=>Q(a()),()=>{S(n,a().length)}),G(()=>(p(n),Q(a())),()=>{S(r,p(n)>=0?a()[0]:void 0)}),G(()=>(p(n),Q(a())),()=>{S(i,p(n)>=0?a()[p(n)-1]:void 0)}),G(()=>Q(s()),()=>{s(v(s()))}),pe(),fe();var m=S8(),C=ue(m);{var I=M=>{Gs(M,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};ge(C,M=>{p(r)&&M(I)})}var b=U(C,2);{var w=M=>{da(M,{get linePoints(){return a()},get shape(){return s()}})};ge(b,M=>{p(n)>1&&M(w)})}var A=U(b,2);{var R=M=>{Gs(M,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return s()}})};ge(A,M=>{p(i)&&M(R)})}N(t,m),ne()}var D8=ie("<!> <!>",1);function qg(t,e){te(e,!1);const n=D();let r=F(e,"linePoints",8),i=F(e,"shape",8,Vs);function a(m){var b,w,A;const C=Dt.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=C.linePathOptions)==null?void 0:A.bezierRounding},C}function s(m){var b,w,A;const C=Dt.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=C.linePathOptions)==null?void 0:A.bezierRounding},C}G(()=>Q(r()),()=>{S(n,r().length>0?r()[0]:void 0)}),pe(),fe();var c=D8(),u=ue(c);{var f=m=>{var C=Ke(()=>a(i()));da(m,{get linePoints(){return r()},get shape(){return p(C)}})};ge(u,m=>{r().length>1&&m(f)})}var g=U(u,2);{var h=m=>{var C=Ke(()=>a(i()));wi(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},v=m=>{var C=Ae(),I=ue(C);{var b=w=>{var A=Ke(()=>s(i()));Gs(w,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(A)}})};ge(I,w=>{p(n)&&w(b)},!0)}N(m,C)};ge(g,m=>{p(n)&&i().type===B.THERMO_WITH_CIRCLE?m(h):m(v,!1)})}N(t,c),ne()}var T8=oe('<g class="line-tool"><!></g>');function R8(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D();let s=F(e,"lineTool",8);const c=bn(s().toolId,$t)??Vs;G(()=>Q(s()),()=>{S(n,Rs(s().cells))}),G(()=>Q(s()),()=>{S(r,s().shape??c)}),G(()=>(p(r),B),()=>{var v;S(i,((v=p(r))==null?void 0:v.type)||B.LINE)}),G(()=>p(r),()=>{var v;S(a,((v=p(r))==null?void 0:v.opacity)??.8)}),pe(),fe();var u=T8(),f=q(u);{var g=v=>{da(v,{get linePoints(){return p(n)},get shape(){return p(r)}})},h=v=>{var m=Ae(),C=ue(m);{var I=w=>{A8(w,{get linePoints(){return p(n)},get shape(){return p(r)}})},b=w=>{var A=Ae(),R=ue(A);{var M=W=>{N8(W,{get linePoints(){return p(n)},get shape(){return p(r)}})},$=W=>{var Y=Ae(),X=ue(Y);{var re=ee=>{qg(ee,{get linePoints(){return p(n)},get shape(){return p(r)}})},de=ee=>{var le=Ae(),Ie=ue(le);{var me=Se=>{qg(Se,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ce=Se=>{da(Se,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(Ie,Se=>{p(i)===B.THERMO_WITH_POLYGON?Se(me):Se(Ce,!1)},!0)}N(ee,le)};ge(X,ee=>{p(i)===B.THERMO_WITH_CIRCLE?ee(re):ee(de,!1)},!0)}N(W,Y)};ge(R,W=>{p(i)===B.LINE_WITH_POLYGON_ENDS?W(M):W($,!1)},!0)}N(w,A)};ge(C,w=>{p(i)===B.LINE_WITH_CIRCLE_ENDS?w(I):w(b,!1)},!0)}N(v,m)};ge(f,v=>{p(i)===B.LINE?v(g):v(h,!1)})}H(u),Z(()=>x(u,"opacity",p(a))),N(t,u),ne()}var k8=oe("<g></g>"),G8=oe('<g class="line-tools-layer" mask="url(#fog-mask-fog)"></g>');function M8(t,e){te(e,!1);const n=qe(),r=()=>ve(ZM,"$lineToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=G8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=k8();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{R8(h,{get lineTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var $8=oe('<path class="cursor svelte-zsq70u"></path>');function F8(t,e){te(e,!1);const n=qe(),r=()=>ve(Xt,"$toolStore",n),i=()=>ve(Ii,"$selectionStore",n),a=D(),s=D(),c=.25;function u(g){if(!g)return"";const[h,v]=[g.c,g.r];return`M${h},${v}L${h+c},${v}L${h},${v+c}Z`}G(()=>r(),()=>{S(a,ed(r()))}),G(()=>i(),()=>{S(s,u(i().lastCell))}),pe(),fe();var f=$8();Z(()=>{x(f,"d",p(s)),x(f,"visibility",p(a)?"visible":"hidden")}),N(t,f),ne()}var U8=oe('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function H8(t,e){te(e,!1);let n=F(e,"gridShape",8);fe();var r=U8(),i=q(r);x(i,"x",0),x(i,"y",0),H(r),Z(()=>{x(i,"width",n().nCols),x(i,"height",n().nRows)}),N(t,r),ne()}var P8=oe('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),B8=oe('<g class="grid-lines"></g>');function W8(t,e){te(e,!1);const n=qe(),r=()=>ve(_n,"$gridStore",n),i=D();G(()=>r(),()=>{S(i,r().getAllCells())}),pe(),fe();var a=B8();We(a,5,()=>p(i),gt,(s,c)=>{var u=P8();x(u,"width",1),x(u,"height",1),Z(()=>{x(u,"x",p(c).c),x(u,"y",p(c).r)}),N(s,u)}),H(a),N(t,a),ne()}var Y8=oe('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),z8=oe('<g class="regions-border"></g>');function V8(t,e){te(e,!1);const n=qe(),r=()=>ve(dn,"$cellsStore",n),i=()=>ve(_n,"$gridStore",n),a=D(),s=D();function c(f,g){return f.filter(m=>m.region===g).map(m=>({r:m.r,c:m.c}))}G(()=>r(),()=>{S(a,r())}),G(()=>i(),()=>{S(s,i().getUsedRegions())}),pe(),fe();var u=z8();We(u,5,()=>p(s),gt,(f,g)=>{var h=Y8();Z(()=>x(h,"d",oo(c(p(a),p(g)),0,!1))),Z(()=>x(h,"id",`region-${p(g)??""}`)),N(f,h)}),H(u),N(t,u),ne()}var j8=oe('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function q8(t,e){te(e,!1);const n=qe(),r=()=>ve(Ii,"$selectionStore",n),i=()=>ve(Xt,"$toolStore",n),a=D(),s=D(),c=D(),u=D(),f=D(),g=D();let h=F(e,"boundingBox",8);const v=.06,m=.05,C="#080808",I="#b2b2b2";G(()=>Q(h()),()=>{S(a,h().x)}),G(()=>Q(h()),()=>{S(s,h().y)}),G(()=>r(),()=>{S(c,r().cells)}),G(()=>p(c),()=>{S(u,oo(p(c),0))}),G(()=>p(c),()=>{S(f,oo(p(c),v))}),G(()=>i(),()=>{S(g,ed(i()))}),pe(),fe();var b=j8(),w=q(b),A=q(w);x(A,"stdDeviation",m),Ci(),H(w);var R=U(w),M=q(R);x(M,"fill",I);var $=U(M);x($,"fill",C),H(R);var W=U(R);H(b),Z(()=>{x(b,"visibility",p(g)?"visible":"hidden"),x(R,"x",p(a)),x(R,"y",p(s)),x(M,"x",p(a)),x(M,"y",p(s)),x($,"d",p(f)),x(W,"d",p(u))}),N(t,b),ne()}var X8=ie("<!> <!>",1);function Yv(t,e){te(e,!1);const n=D(),r=D();let i=F(e,"cells",8),a=F(e,"shape",8,rd),s=F(e,"value",8,void 0);G(()=>Q(i()),()=>{S(n,i()[0])}),G(()=>p(n),()=>{S(r,new Re(p(n).c,p(n).r))}),pe(),fe();var c=X8(),u=ue(c);ks(u,{get cells(){return i()},get shape(){return a()}});var f=U(u,2);{var g=h=>{ua(h,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(f,h=>{s()&&s().length&&h(g)})}N(t,c),ne()}var K8=oe('<g class="cage-tool"><!></g>');function Z8(t,e){te(e,!1);const n=D();let r=F(e,"cageTool",8);const i=bn(r().toolId,$t)??rd;G(()=>Q(r()),()=>{S(n,r().shape??i)}),pe(),fe();var a=K8(),s=q(a);Yv(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),H(a),N(t,a),ne()}var Q8=oe("<g></g>"),J8=oe('<g class="cage-tools-layer" mask="url(#fog-mask-fog)"></g>');function e$(t,e){te(e,!1);const n=qe(),r=()=>ve(JM,"$cageToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=J8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=Q8();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{Z8(h,{get cageTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var t$=oe('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function n$(t,e){te(e,!1);const n=D(),r=D();let i=F(e,"grid",8);G(()=>Q(i()),()=>{S(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),G(()=>p(n),()=>{S(r,oo(p(n),0))}),pe(),fe();var a=t$(),s=q(a);H(a),Z(()=>x(s,"d",p(r))),N(t,a),ne()}var r$=oe('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),i$=oe('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),o$=oe('<g class="quadruple-text"><!></g>');function a$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D();let c=F(e,"cornerTool",8);const u=c().cells,f=new Re(u[u.length-1].c,u[u.length-1].r),g=bn(c().toolId,$t)??$h;G(()=>Q(c()),()=>{S(n,c().value)}),G(()=>Q(c()),()=>{S(r,c().shape??g)}),G(()=>p(r),()=>{var C;S(i,((C=p(r))==null?void 0:C.fontSize)??.2)}),G(()=>p(r),()=>{var C;S(a,((C=p(r))==null?void 0:C.fontColor)??"black")}),G(()=>p(n),()=>{var C;S(s,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),pe(),fe();var h=Ae(),v=ue(h);{var m=C=>{var I=o$(),b=q(I);{var w=R=>{var M=r$(),$=q(M,!0);Z(()=>nt($,p(s).join(" "))),H(M),Z(()=>{x(M,"x",f.x),x(M,"y",f.y),x(M,"font-size",p(i)),x(M,"fill",p(a))}),N(R,M)},A=R=>{var M=i$(),$=ue(M),W=q($,!0);Z(()=>nt(W,p(s).slice(0,2).join(" "))),H($);var Y=U($),X=q(Y,!0);Z(()=>nt(X,p(s).slice(2).join(" "))),H(Y),Z(()=>{x($,"x",f.x),x($,"y",f.y),x($,"dy",-p(i)/2),x($,"font-size",p(i)),x($,"fill",p(a)),x(Y,"x",f.x),x(Y,"y",f.y),x(Y,"dy",p(i)/2),x(Y,"font-size",p(i)),x(Y,"fill",p(a))}),N(R,M)};ge(b,R=>{p(s).length<=2?R(w):R(A,!1)})}H(I),Z(()=>x(I,"data-count",p(s).length)),N(C,I)};ge(v,C=>{p(n)&&C(m)})}N(t,h),ne()}var s$=oe("<ellipse></ellipse>");function l$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D();let f=F(e,"cx",8),g=F(e,"cy",8),h=F(e,"shape",8);G(()=>Q(h()),()=>{S(n,h().width??.5)}),G(()=>Q(h()),()=>{S(r,h().height??.5)}),G(()=>Q(h()),()=>{S(i,h().stroke??"black")}),G(()=>Q(h()),()=>{var m;S(a,(m=h())==null?void 0:m.opacity)}),G(()=>Q(h()),()=>{S(s,h().strokeWidth??.02)}),G(()=>Q(h()),()=>{S(c,h().fill??"none")}),G(()=>Q(h()),()=>{S(u,h().angle??0)}),pe(),fe();var v=s$();Z(()=>{x(v,"cx",f()),x(v,"cy",g()),x(v,"rx",p(n)/2),x(v,"ry",p(r)/2),x(v,"stroke",p(i)),x(v,"stroke-width",p(s)),x(v,"fill",p(c)),x(v,"opacity",p(a)),x(v,"transform",`rotate(${p(u)}, ${f()}, ${g()} )`)}),N(t,v),ne()}var c$=oe("<rect></rect>");function u$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D();let f=F(e,"cx",8),g=F(e,"cy",8),h=F(e,"shape",8);G(()=>Q(h()),()=>{S(n,h().width??.5)}),G(()=>Q(h()),()=>{S(r,h().height??.5)}),G(()=>(Q(f()),p(n)),()=>{S(i,f()-p(n)/2)}),G(()=>(Q(g()),p(r)),()=>{S(a,g()-p(r)/2)}),G(()=>Q(h()),()=>{S(s,h().stroke||"black")}),G(()=>Q(h()),()=>{S(c,h().strokeWidth||.023)}),G(()=>Q(h()),()=>{S(u,h().fill||"none")}),pe(),fe();var v=c$();Z(()=>{x(v,"x",p(i)),x(v,"y",p(a)),x(v,"width",p(n)),x(v,"height",p(r)),x(v,"stroke",p(s)),x(v,"stroke-width",p(c)),x(v,"fill",p(u))}),N(t,v),ne()}var d$=oe("<rect></rect>");function _$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D(),f=D(),g=D();let h=F(e,"cx",8),v=F(e,"cy",8),m=F(e,"shape",8);G(()=>Q(m()),()=>{S(n,m().r??.5)}),G(()=>(Q(h()),p(n)),()=>{S(r,h()-p(n))}),G(()=>(Q(v()),p(n)),()=>{S(i,v()-p(n))}),G(()=>p(n),()=>{S(a,2*p(n))}),G(()=>p(n),()=>{S(s,2*p(n))}),G(()=>Q(m()),()=>{S(c,m().stroke??"black")}),G(()=>Q(m()),()=>{S(u,m().strokeWidth??.02)}),G(()=>Q(m()),()=>{S(f,m().fill??"none")}),G(()=>Q(m()),()=>{S(g,m().angle??0)}),pe(),fe();var C=d$();Z(()=>{x(C,"x",p(r)),x(C,"y",p(i)),x(C,"width",p(a)),x(C,"height",p(s)),x(C,"stroke",p(c)),x(C,"stroke-width",p(u)),x(C,"fill",p(f)),x(C,"transform",`rotate(${p(g)}, ${h()}, ${v()})`)}),N(t,C),ne()}function vl(t,e){te(e,!1);const n=D();let r=F(e,"cx",8),i=F(e,"cy",8),a=F(e,"shape",8);G(()=>(Q(a()),B),()=>{var g;S(n,((g=a())==null?void 0:g.type)??B.CIRCLE)}),pe(),fe();var s=Ae(),c=ue(s);{var u=g=>{wi(g,{get x(){return r()},get y(){return i()},get shape(){return a()}})},f=g=>{var h=Ae(),v=ue(h);{var m=I=>{l$(I,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},C=I=>{var b=Ae(),w=ue(b);{var A=M=>{_$(M,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},R=M=>{var $=Ae(),W=ue($);{var Y=re=>{u$(re,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},X=re=>{var de=Ae(),ee=ue(de);{var le=me=>{Gs(me,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},Ie=me=>{wi(me,{get x(){return r()},get y(){return i()},get shape(){return a()}})};ge(ee,me=>{p(n)===B.POLYGON?me(le):me(Ie,!1)},!0)}N(re,de)};ge(W,re=>{p(n)===B.RECTANGLE?re(Y):re(X,!1)},!0)}N(M,$)};ge(w,M=>{p(n)===B.SQUARE?M(A):M(R,!1)},!0)}N(I,b)};ge(v,I=>{p(n)===B.ELLIPSE?I(m):I(C,!1)},!0)}N(g,h)};ge(c,g=>{p(n)===B.CIRCLE?g(u):g(f,!1)})}N(t,s),ne()}var f$=oe('<text text-anchor="middle" dominant-baseline="central"> </text>'),g$=oe('<g class="corner-tool"><!><!></g>');function h$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D();let s=F(e,"cornerTool",8);const c=s().cells,u=bn(s().toolId,$t)??$h,f=new Re(c[c.length-1].c,c[c.length-1].r);function g(C,I){return I===B.TEXT_ONLY?C.value?C.value:"-":C.value??""}G(()=>Q(s()),()=>{S(n,s().shape??u)}),G(()=>(p(n),B),()=>{var C;S(r,((C=p(n))==null?void 0:C.type)??B.CIRCLE)}),G(()=>p(n),()=>{var C;S(i,((C=p(n))==null?void 0:C.fontSize)??.2)}),G(()=>p(n),()=>{var C;S(a,((C=p(n))==null?void 0:C.fontColor)??"black")}),pe(),fe();var h=Ae(),v=ue(h);{var m=C=>{var I=g$(),b=q(I);vl(b,{get cx(){return f.x},get cy(){return f.y},get shape(){return p(n)}});var w=U(b);{var A=M=>{a$(M,{get cornerTool(){return s()}})},R=M=>{var $=f$(),W=q($,!0);Z(()=>nt(W,g(s(),p(r)))),H($),Z(()=>{x($,"x",f.x),x($,"y",f.y),x($,"font-size",p(i)),x($,"fill",p(a))}),N(M,$)};ge(w,M=>{s().toolId===_.QUADRUPLE?M(A):M(R,!1)})}H(I),N(C,I)};ge(v,C=>{c.length===4&&C(m)})}N(t,h),ne()}var v$=oe("<g></g>"),p$=oe('<g class="corner-tools-layer" mask="url(#fog-mask-fog)"></g>');function m$(t,e){te(e,!1);const n=qe(),r=()=>ve(KM,"$cornerToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=p$();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=v$();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{h$(h,{get cornerTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var C$=oe('<path class="arrow-line" fill="none"></path>'),E$=oe('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function I$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D(),u=D(),f=D(),g=D(),h=D();let v=F(e,"arrowTool",8),m=F(e,"arrowId",8),C=F(e,"boundingBox",8);const I=bn(v().toolId,$t)??hO,b="round",w="round",A=crypto.randomUUID(),R=`arrow-mask-${m()}-${A}`,M=`arrow-marker-${m()}-${A}`;G(()=>Q(v()),()=>{S(n,v().shape??I)}),G(()=>Q(C()),()=>{S(r,C().x)}),G(()=>Q(C()),()=>{S(i,C().y)}),G(()=>p(n),()=>{var le;S(a,((le=p(n))==null?void 0:le.r)??.4)}),G(()=>p(n),()=>{var le;S(s,((le=p(n))==null?void 0:le.stroke)??"gray")}),G(()=>p(n),()=>{var le;S(c,((le=p(n))==null?void 0:le.strokeWidth)??.1)}),G(()=>p(n),()=>{var le;S(u,((le=p(n))==null?void 0:le.strokeDasharray)??0)}),G(()=>p(n),()=>{var le;S(f,((le=p(n))==null?void 0:le.opacity)??.8)}),G(()=>(p(a),p(n)),()=>{var le,Ie,me,Ce;S(g,{shortenHead:p(a),shortenTail:((Ie=(le=p(n))==null?void 0:le.linePathOptions)==null?void 0:Ie.shortenTail)??.2,bezierRounding:((Ce=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ce.bezierRounding)??.4})}),G(()=>Q(v()),()=>{S(h,Iu(v().cells))}),pe(),fe();var $=E$(),W=q($);x(W,"id",R);var Y=q(W),X=U(Y);H(W);var re=U(W);hl(re,{id:M,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var de=U(re);x(de,"mask",`url(#${R??""})`);var ee=U(de);We(ee,1,()=>v().lines,gt,(le,Ie)=>{var me=Ae(),Ce=ue(me);{var Se=lt=>{var xe=C$();Z(()=>x(xe,"d",Iu(p(Ie),p(g)))),x(xe,"stroke-linejoin",b),x(xe,"stroke-linecap",w),x(xe,"marker-end",`url(#${M??""})`),Z(()=>{x(xe,"stroke",p(s)),x(xe,"stroke-width",p(c)),x(xe,"opacity",p(f)),x(xe,"stroke-dasharray",p(u))}),N(lt,xe)};ge(Ce,lt=>{p(Ie).length>1&&lt(Se)})}N(le,me)}),H($),Z(()=>{x(W,"x",p(r)),x(W,"y",p(i)),x(Y,"x",p(r)),x(Y,"y",p(i)),x(X,"stroke-width",2*p(a)-p(c)),x(X,"d",p(h)),x(de,"d",p(h)),x(de,"stroke-width",2*p(a)+p(c)),x(de,"stroke",p(s))}),N(t,$),ne()}var b$=oe("<g></g>"),w$=oe('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function O$(t,e){te(e,!1);const n=qe(),r=()=>ve(QM,"$arrowToolsStore",n),i=D();let a=F(e,"boundingBox",8);G(()=>r(),()=>{S(i,r())}),pe();var s=w$();We(s,5,()=>p(i),gt,(c,u)=>{let f=()=>p(u).toolId,g=()=>p(u).element;var h=b$();We(h,5,()=>Object.entries(g()),v=>v[0],(v,m)=>{I$(v,{get arrowId(){return p(m)[0]},get arrowTool(){return p(m)[1]},get boundingBox(){return a()}})}),H(h),Z(()=>Fn(h,`element-group ${f()}`)),N(c,h)}),H(s),N(t,s),ne()}var y$=oe('<!><path fill="none"></path>',1);function L$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D();let c=F(e,"singleCellArrowTool",8),u=F(e,"id",8);const f=c().cell,g=bn(c().toolId,$t)??fO,h=.3;function v(A,R){const M=zs(R),$=new Re(M.c,M.r).normalise().scale(h),W=Zn(A),Y=W.subtract($),X=W.add($);return[Y,X]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;G(()=>Q(c()),()=>{S(n,c().direction)}),G(()=>Q(c()),()=>{S(r,c().shape??g)}),G(()=>p(r),()=>{S(i,p(r).strokeWidth??.1)}),G(()=>p(r),()=>{S(a,p(r).stroke??"black")}),G(()=>p(n),()=>{S(s,fl(v(f,p(n))))}),pe(),fe();var I=y$(),b=ue(I);hl(b,{id:C,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(i)}});var w=U(b);x(w,"marker-end",`url(#${C??""})`),Z(()=>{x(w,"d",p(s)),x(w,"stroke",p(a)),x(w,"stroke-width",p(i))}),N(t,I),ne()}var A$=oe('<path fill="none"></path>'),x$=oe("<!><!>",1);function S$(t,e){te(e,!1);const n=D(),r=D(),i=D();let a=F(e,"singleCellMultiArrowTool",8),s=F(e,"id",8);const c=a().cell,u=bn(a().toolId,$t)??gO,f=.2;function g(w,A){const R=zs(A),M=new Re(R.c,R.r),W=Zn(w).add(M.scale(.4));return[W.subtract(M.normalise().scale(f)),W]}function h(w){return fl(g(c,w))}const v=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${v}`;G(()=>Q(a()),()=>{S(n,a().shape??u)}),G(()=>p(n),()=>{S(r,p(n).strokeWidth??.08)}),G(()=>p(n),()=>{S(i,p(n).stroke??"black")}),pe(),fe();var C=x$(),I=ue(C);hl(I,{id:m,l:.1,get stroke(){return p(i)},get strokeWidth(){return p(r)}});var b=U(I);We(b,1,()=>a().directions,gt,(w,A)=>{var R=A$();Z(()=>x(R,"d",h(p(A)))),x(R,"marker-end",`url(#${m??""})`),Z(()=>{x(R,"stroke",p(i)),x(R,"stroke-width",p(r))}),N(w,R)}),N(t,C),ne()}var N$=oe('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Xg(t,e){te(e,!1);const n=qe(),r=()=>ve(VM,"$minimumConstraintsStore",n),i=()=>ve(jM,"$maximumConstraintsStore",n),a=D(),s=D(),c=D();let u=F(e,"coord",8),f=F(e,"minOrMax",8);function g(b,w){const A=[!0,!0,!0,!0];let R=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<R.length;M++){let $=R[M];const W={r:b.r+$[1],c:b.c+$[0]};A[M]=!Object.values(w).some(Y=>je(W,Y.cell))}return A}function h(b,w){let A=u8(f(),b.r,b.c);const R=g(b,w);return A=A.filter(($,W)=>R[W]),A.map($=>Oo($,!1)).join("")}function v(b,w){return f()==="max"?w:b}G(()=>Q(u()),()=>{S(a,u().c)}),G(()=>Q(u()),()=>{S(s,u().r)}),G(()=>(r(),i()),()=>{S(c,v(r(),i()))}),pe(),fe();var m=N$(),C=q(m);x(C,"width",1),x(C,"height",1);var I=U(C);Z(()=>x(I,"d",h(u(),p(c)))),H(m),Z(()=>{x(C,"x",p(a)),x(C,"y",p(s))}),N(t,m),ne()}var D$=oe("<circle></circle>");function T$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D();let u=F(e,"x",8),f=F(e,"y",8),g=F(e,"value",8),h=F(e,"shape",8);G(()=>Q(h()),()=>{S(n,h().r??.35)}),G(()=>Q(h()),()=>{S(r,h().stroke??"black")}),G(()=>Q(h()),()=>{var m;S(i,(m=h())==null?void 0:m.opacity)}),G(()=>Q(h()),()=>{S(a,h().strokeWidth??.02)}),G(()=>Q(g()),()=>{S(s,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),G(()=>Q(h()),()=>{S(c,h().strokeDasharray??0)}),pe(),fe();var v=D$();Z(()=>{x(v,"cx",u()),x(v,"cy",f()),x(v,"r",p(n)),x(v,"stroke",p(r)),x(v,"stroke-width",p(a)),x(v,"fill",p(s)),x(v,"opacity",p(i)),x(v,"stroke-dasharray",p(c))}),N(t,v),ne()}var R$=oe('<g class="single-cell-tool"><!><!></g>');function k$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D();let c=F(e,"singleCellTool",8),u=F(e,"id",8);const f=c().cell,g=bn(c().toolId,$t)??_O;G(()=>Q(c()),()=>{S(n,c().shape??g)}),G(()=>(p(n),B),()=>{var w;S(r,((w=p(n))==null?void 0:w.type)||B.CIRCLE)}),G(()=>{},()=>{S(i,{x:f.c+.5,y:f.r+.5})}),G(()=>Re,()=>{S(a,new Re(f.c,f.r))}),G(()=>Q(c()),()=>{S(s,c().value)}),pe(),fe();var h=R$(),v=q(h);{var m=w=>{Xg(w,{coord:f,minOrMax:"min"})},C=w=>{var A=Ae(),R=ue(A);{var M=W=>{Xg(W,{coord:f,minOrMax:"max"})},$=W=>{var Y=Ae(),X=ue(Y);{var re=ee=>{T$(ee,{get x(){return p(i).x},get y(){return p(i).y},get value(){return p(s)},get shape(){return p(n)}})},de=ee=>{var le=Ae(),Ie=ue(le);{var me=Se=>{Yv(Se,{cells:[f],get shape(){return p(n)},get value(){return c().value}})},Ce=Se=>{vl(Se,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return p(n)}})};ge(Ie,Se=>{p(r)===B.CAGE?Se(me):Se(Ce,!1)},!0)}N(ee,le)};ge(X,ee=>{c().toolId===_.COLORED_COUNTING_CIRCLES?ee(re):ee(de,!1)},!0)}N(W,Y)};ge(R,W=>{c().toolId===_.MAXIMUM?W(M):W($,!1)},!0)}N(w,A)};ge(v,w=>{c().toolId===_.MINIMUM?w(m):w(C,!1)})}var I=U(v);{var b=w=>{ua(w,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};ge(I,w=>{p(r)!==B.CAGE&&c().toolId!==_.COLORED_COUNTING_CIRCLES&&p(s)&&w(b)})}H(h),Z(()=>x(h,"id",`constraint-${u()}`)),N(t,h),ne()}var G$=oe("<g></g>"),M$=oe('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function $$(t,e){te(e,!1);const n=qe(),r=()=>ve(Sd,"$singleCellToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=M$();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=G$();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{var m=Ae(),C=ue(m);{var I=w=>{L$(w,{get singleCellArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},b=w=>{var A=Ae(),R=ue(A);{var M=W=>{S$(W,{get singleCellMultiArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},$=W=>{var Y=Ae(),X=ue(Y);{var re=de=>{k$(de,{get singleCellTool(){return p(v)[1]},get id(){return p(v)[0]}})};ge(X,de=>{p(v)[1].type==="SIMPLE"&&de(re)},!0)}N(W,Y)};ge(R,W=>{p(v)[1].type==="MULTIARROW"?W(M):W($,!1)},!0)}N(w,A)};ge(C,w=>{p(v)[1].type==="ARROW"?w(I):w(b,!1)})}N(h,m)}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var F$=oe('<line class="svelte-yr67cf"></line>');function U$(t,e){te(e,!1);const n=D(),r=D(),i=D();let a=F(e,"shape",8),s=F(e,"coords",8);const[c,u]=s(),f=u.c,g=c.c===u.c?u.c+1:u.c,h=u.r,v=c.r===u.r?u.r+1:u.r;G(()=>Q(a()),()=>{S(n,a().stroke??"black")}),G(()=>Q(a()),()=>{var C;S(r,(C=a())==null?void 0:C.opacity)}),G(()=>Q(a()),()=>{S(i,a().strokeWidth??.02)}),pe(),fe();var m=F$();x(m,"x1",f),x(m,"x2",g),x(m,"y1",h),x(m,"y2",v),Z(()=>{x(m,"stroke",p(n)),x(m,"stroke-width",p(i)),x(m,"opacity",p(r))}),N(t,m),ne()}var H$=oe('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function P$(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D();let c=F(e,"edgeTool",8);const u=c().cells,f=bn(c().toolId,$t)??Mh;function g(I,b){return b===B.TEXT_ONLY?I.value?I.value:"-":I.value??""}function h(){if(c().toolId!==_.EDGE_INEQUALITY)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}G(()=>Q(c()),()=>{S(n,c().shape??f)}),G(()=>Rs,()=>{S(r,hL(Rs(u)))}),G(()=>(p(n),B),()=>{var I;S(i,((I=p(n))==null?void 0:I.type)||B.CIRCLE)}),G(()=>p(n),()=>{var I;S(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),G(()=>p(n),()=>{var I;S(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),pe(),fe();var v=Ae(),m=ue(v);{var C=I=>{var b=H$(),w=q(b);{var A=W=>{wi(W,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},R=W=>{var Y=Ae(),X=ue(Y);{var re=ee=>{wi(ee,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},de=ee=>{var le=Ae(),Ie=ue(le);{var me=Se=>{U$(Se,{coords:u,get shape(){return p(n)}})},Ce=Se=>{vl(Se,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(Ie,Se=>{p(i)===B.BORDER_LINE?Se(me):Se(Ce,!1)},!0)}N(ee,le)};ge(X,ee=>{p(i)===B.TEXT_ONLY?ee(re):ee(de,!1)},!0)}N(W,Y)};ge(w,W=>{c().toolId===_.EDGE_INEQUALITY?W(A):W(R,!1)})}var M=U(w);Z(()=>x(M,"transform",`rotate(${h()}, ${p(r).x}, ${p(r).y} )`));var $=q(M,!0);Z(()=>nt($,g(c(),p(i)))),H(M),H(b),Z(()=>{x(M,"x",p(r).x),x(M,"y",p(r).y),x(M,"font-size",p(a)),x(M,"fill",p(s))}),N(I,b)};ge(m,I=>{u.length===2&&I(C)})}N(t,v),ne()}var B$=oe("<g></g>"),W$=oe('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function Y$(t,e){te(e,!1);const n=qe(),r=()=>ve(qM,"$edgeToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=W$();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=B$();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{P$(h,{get edgeTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}function z$(t,e){const n=t.getRow(e.r);return new Set(n)}function V$(t,e){const n=t.getCol(e.c);return new Set(n)}function j$(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function q$(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function X$(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function K$(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function Z$(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function Q$(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function J$(t,e,n){let r=new Set;const a=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),f=c.findIndex(h=>h===e);if(f!==-1){if(r=new Set([...r,...u]),u.length>0){const h=c.filter((v,m)=>m!==f);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...c])),r}function e4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function t4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function n4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(_.ANTIKNIGHT)&&(r=r.union(q$(t,i))),e.get(_.ANTIKING)&&(r=r.union(X$(t,i))),e.get(_.DISJOINT_GROUPS)&&(r=r.union(K$(t,i))),e.get(_.NEGATIVE_DIAGONAL)&&(r=r.union(Q$(t,i))),e.get(_.POSITIVE_DIAGONAL)&&(r=r.union(Z$(t,i)))),r}function tu(t,e,n,r,i){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=t4(t,n,c);i=new Set([...i,...u])}return i}function r4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const a=e.get(_.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],f=J$(t,i,u);r=new Set([...r,...f])}const s=e.get(_.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],f=e4(t,i,u);r=new Set([...r,...f])}return r=tu(t,e,i,_.KILLER_CAGE,r),r=tu(t,e,i,_.PARITY_BALANCE_CAGE,r),r=tu(t,e,i,_.SPOTLIGHT_CAGE,r),r}function zv(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,a=t.localConstraints;if(!r)return n;r.get(_.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...z$(i,e),...V$(i,e),...j$(i,e)])),n=new Set([...n,...n4(i,r,e)]),n=new Set([...n,...r4(i,a,e)]);const s=i.getCell(e.r,e.c);return s&&n.delete(s),n}function i4(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(zv(t,a));const r=n.reduce((a,s)=>a.intersection(s)),i=[];for(const a of r)i.push(a.toCoords());return i}var o4=oe('<tspan class="svelte-xct9ah"> </tspan>'),a4=oe('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function s4(t,e){te(e,!1);const n=D();let r=F(e,"cell",8),i=F(e,"seen_values",8);const a=.25;function s(g){return i().find(v=>v===g)!==void 0}G(()=>Q(r()),()=>{S(n,Zn({r:r().r,c:r().c}))}),pe(),fe();var c=Ae(),u=ue(c);{var f=g=>{var h=a4(),v=q(h);x(v,"font-size",a),We(v,5,()=>r().centerMarks,gt,(m,C)=>{var I=o4();const b=Ke(()=>s(p(C)));Z(()=>Ot(I,"conflict",p(b)));var w=q(I,!0);H(I),Z(()=>nt(w,p(C))),N(m,I)}),H(v),H(h),Z(()=>{x(v,"x",p(n).x),x(v,"y",p(n).y),x(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(g,h)};ge(u,g=>{r().centerMarks.length&&g(f)})}N(t,c),ne()}var l4=oe('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),c4=oe('<g class="corner-marks-group"></g>');function u4(t,e){te(e,!1);let n=F(e,"cell",8),r=F(e,"seen_values",8);const i=.25,a=.28;function s(h){const v=h.cornerMarks.slice(0,8),m=Zn({r:h.r,c:h.c});return v.map((C,I)=>{const b=l8(I,a);return{pos:m.add(b),value:C,idx:I}})}function c(h){return r().find(m=>m===h)!==void 0}fe();var u=Ae(),f=ue(u);{var g=h=>{var v=c4();We(v,5,()=>s(n()),gt,(m,C)=>{let I=()=>p(C).pos,b=()=>p(C).value;var w=l4();x(w,"font-size",i);const A=Ke(()=>c(b()));var R=q(w,!0);H(w),Z(()=>{x(w,"x",I().x),x(w,"y",I().y),Ot(w,"conflict",p(A)),nt(R,b())}),N(m,w)}),H(v),N(h,v)};ge(f,h=>{n().cornerMarks.length&&h(g)})}N(t,u),ne()}var d4=oe('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),_4=oe('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),f4=oe('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),g4=oe("<!><!>",1),h4=oe('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function v4(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(ma,"$puzzleStore",n),a=()=>ve(Xt,"$toolStore",n),s=D(),c=D(),u=D(),f=D(),g=D(),h=D(),v=D();let m=F(e,"cell",8);const C=.8,I=400;function b($,W){if(!$)return[];let X=[...zv(p(g),W.toCoords())].map(re=>re.value).filter(re=>re!==null);return X=[...new Set(X)],X}function w($){return $?"1":"0"}G(()=>Q(m()),()=>{S(s,m().value)}),G(()=>Q(m()),()=>{S(c,m().given)}),G(()=>Q(m()),()=>{S(u,Zn({r:m().r,c:m().c}))}),G(()=>r(),()=>{S(f,r().highlightPencilmarkConflicts)}),G(()=>i(),()=>{S(g,i())}),G(()=>r(),()=>{S(h,r().showSolution)}),G(()=>(p(f),Q(m())),()=>{S(v,b(p(f),m()))}),pe(),fe();var A=Ae(),R=ue(A);{var M=$=>{var W=h4(),Y=q(W);{var X=de=>{var ee=Ae(),le=ue(ee);{var Ie=me=>{var Ce=d4();x(Ce,"font-size",C),x(Ce,"font-weight",I);var Se=q(Ce,!0);H(Ce),Z(()=>{x(Ce,"x",p(u).x),x(Ce,"y",p(u).y),nt(Se,m().region)}),N(me,Ce)};ge(le,me=>{m().region!==null&&me(Ie)})}N(de,ee)},re=de=>{var ee=Ae(),le=ue(ee);{var Ie=Ce=>{var Se=Ae(),lt=ue(Se);{var xe=we=>{var _t=_4();x(_t,"font-size",C),x(_t,"font-weight",I);var ct=q(_t,!0);Z(()=>nt(ct,w(m().fog))),H(_t),Z(()=>{x(_t,"x",p(u).x),x(_t,"y",p(u).y)}),N(we,_t)};ge(lt,we=>{m().fog!==null&&we(xe)})}N(Ce,Se)},me=Ce=>{var Se=Ae(),lt=ue(Se);{var xe=_t=>{var ct=f4();x(ct,"font-size",C),x(ct,"font-weight",I);var Un=q(ct,!0);H(ct),Z(()=>{x(ct,"x",p(u).x),x(ct,"y",p(u).y),Ot(ct,"given",p(c)),nt(Un,p(s))}),N(_t,ct)},we=_t=>{var ct=g4(),Un=ue(ct);u4(Un,{get cell(){return m()},get seen_values(){return p(v)}});var Lt=U(Un);s4(Lt,{get cell(){return m()},get seen_values(){return p(v)}}),N(_t,ct)};ge(lt,_t=>{p(s)!==null?_t(xe):_t(we,!1)},!0)}N(Ce,Se)};ge(le,Ce=>{a()===_.FOG?Ce(Ie):Ce(me,!1)},!0)}N(de,ee)};ge(Y,de=>{a()===_.REGIONS?de(X):de(re,!1)})}H(W),Z(()=>Ot(W,"hide-given",m().given)),N($,W)};ge(R,$=>{p(h)||$(M)})}N(t,A),ne()}var p4=oe("<path></path>"),m4=oe('<g class="highlights-group"></g>');function C4(t,e){te(e,!1);const n=qe(),r=()=>ve(Xt,"$toolStore",n);let i=F(e,"cell",8);function a(f){const g=Zn({r:i().r,c:i().c}),h=i().highlights.length;return i().highlights.map((m,C)=>{let I=a8(C,h);I=I.map(w=>w.add(g));const b=Oo(I,!0);return{colorId:m,d:b}})}fe();var s=Ae(),c=ue(s);{var u=f=>{var g=Ae(),h=ue(g);{var v=m=>{var C=m4();We(C,5,()=>a(i()),gt,(I,b)=>{let w=()=>p(b).colorId,A=()=>p(b).d;var R=p4();Z(()=>{Fn(R,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),x(R,"d",A())}),N(I,R)}),H(C),N(m,C)};ge(h,m=>{i().highlights.length&&m(v)})}N(f,g)};ge(c,f=>{r()!==_.REGIONS&&f(u)})}N(t,s),ne()}var E4=oe('<path class="cell-marker" fill="none"></path>'),I4=oe('<circle fill="none" opacity="0.9"></circle>');function b4(t,e){te(e,!1);const n=D(),r=D();let i=F(e,"marker",8);const a=.3,s=.08;G(()=>Q(i()),()=>{S(n,Wv(i(),a))}),G(()=>Q(i()),()=>{S(r,gl(i().colorId,"black"))}),pe(),fe();var c=Ae(),u=ue(c);{var f=h=>{var v=E4();x(v,"stroke-width",s),Z(()=>{x(v,"d",p(n)),x(v,"stroke",p(r))}),N(h,v)},g=h=>{var v=I4();x(v,"r",a),x(v,"stroke-width",s),Z(()=>{Fn(v,`cell-marker color-${i().colorId??""}`),x(v,"cx",i().c),x(v,"cy",i().r),x(v,"stroke",p(r))}),N(h,v)};ge(u,h=>{i().marker==="X"?h(f):h(g,!1)})}N(t,c),ne()}var w4=oe('<g class="cell-markers"></g>');function O4(t,e){let n=F(e,"markers",8);var r=w4();We(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,a)=>{b4(i,{get marker(){return p(a)}})}),H(r),N(t,r)}var y4=oe('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function L4(t,e){te(e,!1);const n=D();let r=F(e,"draftLineMarker",8);const i=.2;function a(u){return u.map(g=>[new Re(g.p1.c,g.p1.r),new Re(g.p2.c,g.p2.r)]).flat()}function s(u){const f=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?gl(f,"black"):"darkred"}G(()=>Q(r()),()=>{S(n,Oo(a(r().draftLine)))}),pe(),fe();var c=y4();Z(()=>x(c,"stroke",s(r()))),x(c,"stroke-width",i),x(c,"opacity",.5),Z(()=>x(c,"d",p(n))),N(t,c),ne()}var A4=oe('<path fill="none" opacity="0.9"></path>');function x4(t,e){te(e,!1);const n=D(),r=D();let i=F(e,"marker",8);const a=.08,s=.04;G(()=>Q(i()),()=>{S(n,Wv(i(),a))}),G(()=>Q(i()),()=>{S(r,gl(i().colorId,"black"))}),pe(),fe();var c=A4();x(c,"stroke-width",s),Z(()=>{x(c,"d",p(n)),Fn(c,`edge-marker color-${i().colorId??""}`),x(c,"stroke",p(r))}),N(t,c),ne()}var S4=oe('<g class="edge-markers"></g>');function N4(t,e){let n=F(e,"markers",8);var r=S4();We(r,5,n,i=>`${i.r}, ${i.c}`,(i,a)=>{x4(i,{get marker(){return p(a)}})}),H(r),N(t,r)}var D4=oe('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),T4=oe('<g class="line-markers svelte-yha19m"></g>');function R4(t,e){te(e,!1);let n=F(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function a(c){return gl(c,"black")}fe();var s=T4();We(s,5,n,c=>i(c),(c,u)=>{var f=D4();x(f,"stroke-width",r),Z(()=>x(f,"stroke",a(p(u).colorId))),Z(()=>{x(f,"x1",p(u).p1.c),x(f,"y1",p(u).p1.r),x(f,"x2",p(u).p2.c),x(f,"y2",p(u).p2.r),Fn(f,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),N(c,f)}),H(s),N(t,s),ne()}var k4=oe('<g class="pen-tool"><!><!><!><!></g>');function G4(t,e){te(e,!1);const n=qe(),r=()=>ve(Ns,"$penToolStore",n),i=D();G(()=>r(),()=>{S(i,{draftLine:r().draftLine,mode:r().mode})}),pe(),fe();var a=k4(),s=q(a);R4(s,{get lineMarkers(){return r().lineMarkers}});var c=U(s);N4(c,{get markers(){return r().edgeMarkers}});var u=U(c);O4(u,{get markers(){return r().cellMarkers}});var f=U(u);L4(f,{get draftLineMarker(){return p(i)}}),H(a),N(t,a),ne()}var M4=oe('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function $4(t,e){te(e,!1);const n=qe(),r=()=>ve(Ii,"$selectionStore",n),i=()=>ve(Wt,"$settingsStore",n),a=()=>ve(ma,"$puzzleStore",n),s=()=>ve(Xt,"$toolStore",n),c=D(),u=D(),f=D(),g=D(),h={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(b,w){return b.length?i4(p(f),b):[]}G(()=>r(),()=>{S(c,r().cells)}),G(()=>i(),()=>{S(u,i().highlightCellsSeenBySelection)}),G(()=>a(),()=>{S(f,a())}),G(()=>s(),()=>{S(g,ed(s()))}),pe(),fe();var m=Ae(),C=ue(m);{var I=b=>{var w=M4(),A=q(w),R=Ke(()=>v(p(c),p(f)));ks(A,{get cells(){return p(R)},shape:h}),H(w),N(b,w)};ge(C,b=>{p(u)&&p(g)&&b(I)})}N(t,m),ne()}function pl(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),i=[...av(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&i.includes(a.value))),e}function F4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...pl(r))}return new Set(e)}function U4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...pl(r))}return new Set(e)}function H4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...pl(r))}return new Set(e)}function P4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function B4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function W4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function Y4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),a=pl(i);a.length&&e.push(...a)}return new Set(e)}function z4(t,e){let n=new Set;if(!e.get(_.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...F4(t),...U4(t),...H4(t)]);n=n.union(i)}return e.get(_.ANTIKNIGHT)&&(n=n.union(P4(t))),e.get(_.ANTIKING)&&(n=n.union(B4(t))),e.get(_.NONCONSECUTIVE)&&(n=n.union(W4(t))),e.get(_.DISJOINT_GROUPS)&&(n=n.union(Y4(t))),n}function V4(t,e){return[...new Set([...z4(t,e)])]}var j4=oe('<rect class="conflict svelte-4mp6ok"></rect>'),q4=oe('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function X4(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(_n,"$gridStore",n),a=()=>ve(Dr,"$globalConstraintsStore",n),s=()=>ve(dn,"$cellsStore",n),c=D(),u=D(),f=D(),g=D();B.CAGE;function h(I){return V4(p(u),p(f)).map(A=>A.toCoords())}G(()=>r(),()=>{S(c,r().checkConflicts)}),G(()=>i(),()=>{S(u,i())}),G(()=>a(),()=>{S(f,a())}),G(()=>s(),()=>{S(g,s())}),pe(),fe();var v=Ae(),m=ue(v);{var C=I=>{var b=q4();We(b,5,()=>h(p(g)),gt,(w,A)=>{var R=j4();x(R,"width",1),x(R,"height",1),Z(()=>{x(R,"x",p(A).c),x(R,"y",p(A).r)}),N(w,R)}),H(b),N(I,b)};ge(m,I=>{p(c)&&I(C)})}N(t,v),ne()}var K4=oe('<line class="diag svelte-ylotlw"></line>'),Z4=oe('<line class="antidiag svelte-ylotlw"></line>'),Q4=oe('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),J4=oe('<line class="diag svelte-ylotlw"></line>'),eF=oe('<line class="antidiag svelte-ylotlw"></line>'),tF=oe('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),nF=oe('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function rF(t,e){te(e,!1);const n=qe(),r=()=>ve(Dr,"$globalConstraintsStore",n),i=()=>ve(_n,"$gridStore",n),a=D(),s=D(),c=D(),u=D(),f=D(),g=D(),h=D(),v=D(),m=D(),C=D(),I=D(),b=D(),w=0,A=0,R=0,M=0;G(()=>r(),()=>{S(a,r())}),G(()=>(p(a),_),()=>{S(s,!!p(a).get(_.POSITIVE_DIAGONAL))}),G(()=>(p(a),_),()=>{S(c,!!p(a).get(_.NEGATIVE_DIAGONAL))}),G(()=>(p(a),_),()=>{S(u,!!p(a).get(_.NEGATIVE_ANTIDIAGONAL))}),G(()=>(p(a),_),()=>{S(f,!!p(a).get(_.POSITIVE_ANTIDIAGONAL))}),G(()=>(p(a),_),()=>{S(g,!!p(a).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),G(()=>(p(a),_),()=>{S(h,!!p(a).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),G(()=>i(),()=>{S(v,i())}),G(()=>p(v),()=>{S(m,p(v).nCols)}),G(()=>p(v),()=>{S(C,p(v).nRows)}),G(()=>p(v),()=>{S(I,p(v).nCols)}),G(()=>p(v),()=>{S(b,p(v).nRows)}),pe(),fe();var $=nF(),W=q($);{var Y=xe=>{var we=K4();x(we,"x1",w),x(we,"y1",A),Z(()=>{x(we,"x2",p(I)),x(we,"y2",p(b))}),N(xe,we)};ge(W,xe=>{p(c)&&xe(Y)})}var X=U(W);{var re=xe=>{var we=Z4();x(we,"x1",w),x(we,"y1",A),Z(()=>{x(we,"x2",p(I)),x(we,"y2",p(b))}),N(xe,we)};ge(X,xe=>{p(u)&&xe(re)})}var de=U(X);{var ee=xe=>{var we=Q4();x(we,"x1",w),x(we,"y1",A),Z(()=>{x(we,"x2",p(I)),x(we,"y2",p(b))}),N(xe,we)};ge(de,xe=>{p(g)&&xe(ee)})}var le=U(de);{var Ie=xe=>{var we=J4();x(we,"x2",M),x(we,"y1",R),Z(()=>{x(we,"x1",p(m)),x(we,"y2",p(C))}),N(xe,we)};ge(le,xe=>{p(s)&&xe(Ie)})}var me=U(le);{var Ce=xe=>{var we=eF();x(we,"x2",M),x(we,"y1",R),Z(()=>{x(we,"x1",p(m)),x(we,"y2",p(C))}),N(xe,we)};ge(me,xe=>{p(f)&&xe(Ce)})}var Se=U(me);{var lt=xe=>{var we=tF();x(we,"x2",M),x(we,"y1",R),Z(()=>{x(we,"x1",p(m)),x(we,"y2",p(C))}),N(xe,we)};ge(Se,xe=>{p(h)&&xe(lt)})}H($),N(t,$),ne()}var iF=oe('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function oF(t,e){te(e,!1);const n=qe(),r=()=>ve(dn,"$cellsStore",n),i=()=>ve(vv,"$showFogStore",n),a=()=>ve(Xs,"$solutionStore",n),s=()=>ve(_n,"$gridStore",n),c=D(),u=D(),f=D(),g=D(),h=D(),v=D();let m=F(e,"boundingBox",8),C=F(e,"gridShape",8);function I(Ie){const me=Ie.filter(we=>we.fog);if(!p(h))return me.map(_t=>_t.toCoords());const Ce=Ie.filter(we=>we.value===p(h)[we.r][we.c]);let Se=new Set;for(const we of Ce){const _t=p(v).getNeighboorCells(we);Se=new Set([..._t,we])}return[...new Set(me).difference(Se)].map(we=>we.toCoords())}G(()=>r(),()=>{S(c,r())}),G(()=>p(c),()=>{S(u,I(p(c)))}),G(()=>p(u),()=>{S(f,oo(p(u),0))}),G(()=>i(),()=>{S(g,i())}),G(()=>a(),()=>{S(h,a())}),G(()=>s(),()=>{S(v,s())}),pe(),fe();var b=iF(),w=q(b),A=q(w);H(w);var R=U(w),M=q(R);x(M,"stroke-width",.5);var $=U(M);x($,"stroke-width",.375);var W=U($);x(W,"stroke-width",.25);var Y=U(W);x(Y,"stroke-width",.125),Ci(),H(R);var X=U(R),re=q(X);Ci(),H(X);var de=U(X),ee=q(de),le=U(ee);x(le,"x",0),x(le,"y",0),H(de),H(b),Z(()=>{x(A,"d",p(f)),Ot(R,"disabled",!p(g)),Ot(X,"disabled",!p(g)),x(re,"x",m().x),x(re,"y",m().y),x(re,"width",m().width),x(re,"height",m().height),x(ee,"x",m().x),x(ee,"y",m().y),x(ee,"width",m().width),x(ee,"height",m().height),x(le,"width",C().nCols),x(le,"height",C().nRows)}),N(t,b),ne()}var aF=oe('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function sF(t,e){te(e,!1);const n=qe(),r=()=>ve(vv,"$showFogStore",n),i=D();let a=F(e,"gridShape",8);G(()=>r(),()=>{S(i,r())}),pe(),fe();var s=aF(),c=q(s);x(c,"x",0),x(c,"y",0),H(s),Z(()=>{x(s,"visibility",p(i)?"visible":"hidden"),x(c,"width",a().nCols),x(c,"height",a().nRows)}),N(t,s),ne()}var lF=oe('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function cF(t,e){te(e,!1);const n=D();let r=F(e,"r",8),i=F(e,"c",8),a=F(e,"val",8);const s=.8,c=400;G(()=>(Q(r()),Q(i())),()=>{S(n,Zn({r:r(),c:i()}))}),pe(),fe();var u=Ae(),f=ue(u);{var g=h=>{var v=lF();x(v,"font-size",s),x(v,"font-weight",c);var m=q(v,!0);H(v),Z(()=>{x(v,"x",p(n).x),x(v,"y",p(n).y),nt(m,a())}),N(h,v)};ge(f,h=>{a()!==null&&h(g)})}N(t,u),ne()}var uF=oe('<g class="solution-layer"></g>');function dF(t,e){te(e,!1);const n=qe(),r=()=>ve(Xs,"$solutionStore",n),i=()=>ve(Wt,"$settingsStore",n),a=()=>ve(qs,"$gameModeStore",n),s=D(),c=D(),u=D();G(()=>r(),()=>{S(s,r())}),G(()=>i(),()=>{S(c,i().showSolution)}),G(()=>a(),()=>{S(u,a())}),pe(),fe();var f=Ae(),g=ue(f);{var h=v=>{var m=uF();We(m,5,()=>p(s),gt,(C,I,b)=>{var w=Ae(),A=ue(w);We(A,1,()=>p(I),gt,(R,M,$)=>{cF(R,{r:b,c:$,get val(){return p(M)}})}),N(C,w)}),H(m),N(v,m)};ge(g,v=>{p(s)&&p(c)&&p(u)===ao.SETTING&&v(h)})}N(t,f),ne()}var _F=oe('<text text-anchor="middle" dominant-baseline="central"> </text>'),fF=oe('<g class="center-corner-or-edge-tool"><!><!></g>');function gF(t,e){te(e,!1);const n=D(),r=D(),i=D(),a=D(),s=D(),c=D();let u=F(e,"centerCornerOrEdgeTool",8);const f=u().cell,g=bn(u().toolId,$t)??Mh;function h(w,A){return A===B.TEXT_ONLY?w.value?w.value:"-":w.value??""}G(()=>Q(u()),()=>{S(n,u().shape??g)}),G(()=>{},()=>{S(r,f)}),G(()=>(p(n),B),()=>{var w;S(i,((w=p(n))==null?void 0:w.type)||B.CIRCLE)}),G(()=>p(n),()=>{var w;S(a,((w=p(n))==null?void 0:w.fontSize)??.2)}),G(()=>p(n),()=>{var w;S(s,((w=p(n))==null?void 0:w.fontColor)??"black")}),G(()=>p(r),()=>{S(c,p(r).r%1===.5&&p(r).c%1===.5)}),pe(),fe();var v=fF(),m=q(v);vl(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=U(m);{var I=w=>{var A=Ke(()=>h(u(),p(i))),R=Ke(()=>Math.floor(p(r).c)),M=Ke(()=>Math.floor(p(r).r));ua(w,{get value(){return p(A)},get x(){return p(R)},get y(){return p(M)},position:"TL",get fontColor(){return p(s)}})},b=w=>{var A=_F(),R=q(A,!0);Z(()=>nt(R,h(u(),p(i)))),H(A),Z(()=>{x(A,"x",p(r).c),x(A,"y",p(r).r),x(A,"font-size",p(a)),x(A,"fill",p(s))}),N(w,A)};ge(C,w=>{p(c)?w(I):w(b,!1)})}H(v),N(t,v),ne()}var hF=oe("<g></g>"),vF=oe('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function pF(t,e){te(e,!1);const n=qe(),r=()=>ve(XM,"$centerCornerOrEdgeToolsStore",n),i=D();G(()=>r(),()=>{S(i,r())}),pe();var a=vF();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var g=hF();We(g,5,()=>Object.entries(f()),h=>h[0],(h,v)=>{gF(h,{get centerCornerOrEdgeTool(){return p(v)[1]}})}),H(g),Z(()=>Fn(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var mF=oe('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function CF(t,e){te(e,!1);const n=qe(),r=()=>ve(_n,"$gridStore",n),i=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(Xt,"$toolStore",n),s=()=>ve(dn,"$cellsStore",n),c=D(),u=D(),f=D();let g=F(e,"svgRef",12,null);function h(){for(const[Lt,Ln]of i().entries()){if(!la(Lt))continue;if(Object.entries(Ln).some(([vr,Jn])=>!qt(Jn.cell,p(u))))return!0}return!1}function v(Lt,Ln){const Zt=h(),vr=la(Ln),Jn=Zt||vr?1:.2,pr=-Jn,ar=-Jn,yo=Lt.nCols+2*Jn,Mr=Lt.nRows+2*Jn;return{x:pr,y:ar,width:yo,height:Mr}}function m(Lt){return`${Lt.x} ${Lt.y} ${Lt.width} ${Lt.height}`}G(()=>r(),()=>{S(c,r())}),G(()=>p(c),()=>{S(u,{nRows:p(c).nRows,nCols:p(c).nCols})}),G(()=>(p(u),a()),()=>{S(f,v(p(u),a()))}),pe(),fe();var C=mF();Z(()=>x(C,"viewBox",m(p(f))));var I=q(C);oF(I,{get boundingBox(){return p(f)},get gridShape(){return p(u)}});var b=U(I);sF(b,{get gridShape(){return p(u)}});var w=U(b);n$(w,{get grid(){return r()}});var A=U(w);H8(A,{get gridShape(){return p(u)}});var R=U(A);We(R,5,s,gt,(Lt,Ln)=>{C4(Lt,{get cell(){return p(Ln)}})}),H(R);var M=U(R);$4(M,{});var $=U(M);$$($,{});var W=U($);e$(W,{});var Y=U(W);M8(Y,{});var X=U(Y);w8(X,{});var re=U(X);W8(re,{});var de=U(re);rF(de,{});var ee=U(de);V8(ee,{});var le=U(ee);O$(le,{get boundingBox(){return p(f)}});var Ie=U(le);v8(Ie,{});var me=U(Ie);q8(me,{get boundingBox(){return p(f)}});var Ce=U(me);F8(Ce,{});var Se=U(Ce);Y$(Se,{});var lt=U(Se);m$(lt,{});var xe=U(lt);pF(xe,{});var we=U(xe);G4(we,{});var _t=U(we);We(_t,5,s,gt,(Lt,Ln)=>{v4(Lt,{get cell(){return p(Ln)}})}),H(_t);var ct=U(_t);dF(ct,{});var Un=U(ct);X4(Un,{}),H(C),Ei(C,Lt=>g(Lt),()=>g()),N(t,C),ne()}function EF(t){return xL(t)?(Uw(),!0):!1}function IF(t){return SL(t)?(dv(),!0):!1}function bF(t){return NL(t)?(_v(),!0):!1}function nu(t){(EF(t)||IF(t)||bF(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var wF=ie('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function OF(t,e){te(e,!1);const n=qe(),r=()=>ve(Pv,"$InputHandlerStore",n),i=()=>ve(no,"$svgRefStore",n),a=D();let s=D(null);function c(v){return m=>{v&&p(a)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===p(s))&&v(m)}}G(()=>r(),()=>{S(a,r())}),pe();var u=wF();De("keydown",Hc,function(...v){nu==null||nu.apply(this,v)});var f=pg(()=>{var v;return c((v=p(a))==null?void 0:v.keyDown)});De("keydown",Hc,function(...v){var m;(m=p(f))==null||m.apply(this,v)});var g=pg(()=>{var v;return c((v=p(a))==null?void 0:v.keyUp)});De("keyup",Hc,function(...v){var m;(m=p(g))==null||m.apply(this,v)});var h=q(u);CF(h,{get svgRef(){return uh(),i()},set svgRef(v){_a(no,v)},$$legacy:!0}),H(u),Ei(u,v=>S(s,v),()=>p(s)),De("pointerdown",u,Yc(Kn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerDown(v)})),!0),De("pointermove",u,Yc(Kn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerMove(v)})),!0),De("pointerup",u,Yc(Kn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerUp(v)})),!0),N(t,u),ne()}var yF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function LF(t){var e=yF();N(t,e)}var AF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function xF(t){var e=AF();N(t,e)}var SF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function NF(t){var e=SF();N(t,e)}var DF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function TF(t){var e=DF();N(t,e)}var RF=ie('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function kF(t,e){te(e,!1);const n=qe(),r=()=>ve(lo,"$commandHistoryStore",n),i=()=>ve(pu,"$selectOnStore",n),a=D(),s=D();function c(){dv()}function u(){_v()}function f(){console.log("check")}function g(){_a(pu,!i())}G(()=>r(),()=>{S(a,r()._undoStack.length===0)}),G(()=>r(),()=>{S(s,r()._redoStack.length===0)}),pe(),fe();var h=RF(),v=q(h),m=q(v);TF(m),H(v);var C=U(v,2),I=q(C);xF(I),H(C);var b=U(C,2);b.disabled=!0;var w=q(b);LF(w),H(b);var A=U(b,2),R=q(A);NF(R),H(A),H(h),Z(()=>{v.disabled=p(a),C.disabled=p(s),x(A,"aria-checked",i()),Ot(A,"active",i())}),De("click",v,c),De("click",C,u),De("click",b,f),De("click",A,g),N(t,h),ne()}var GF=ie('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),MF=ie('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),$F=ie('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),FF=ie('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function UF(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(Ds,"$penColorStore",n),a=()=>ve(Pv,"$InputHandlerStore",n),s=D(),c=D(),u=[];let f=F(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let v=D(!1);function m(Y){return Y?h:g}function C(Y){return[_.DIGIT,_.CENTER_PM,_.CORNER_PM,_.GIVEN].includes(Y)}function I(Y){const X=Y.currentTarget;if(!X)return;const re=X.getAttribute("aria-checked");S(v,re!=="true")}G(()=>r(),()=>{S(s,r().penToolActive)}),G(()=>r(),()=>{S(c,r().letterToolActive)}),pe(),fe();var b=FF(),w=q(b);{var A=Y=>{var X=Ae(),re=ue(X);We(re,1,()=>g,gt,(de,ee)=>{var le=GF(),Ie=q(le);jt(Ie);var me;Ci(2),H(le),Z(()=>{x(le,"data-value",p(ee)),Ot(le,"active",i()===p(ee)),me!==(me=p(ee))&&(Ie.value=(Ie.__value=p(ee))==null?"":p(ee))}),Ps(u,[],Ie,()=>(p(ee),i()),Ce=>_a(Ds,Ce)),N(de,le)}),N(Y,X)},R=Y=>{var X=Ae(),re=ue(X);We(re,1,()=>m(p(v)),gt,(de,ee)=>{var le=MF(),Ie=q(le),me=q(Ie,!0);H(Ie),Ci(2),H(le),Z(()=>{Sw(le,p(ee)),nt(me,p(ee))}),De("click",le,function(...Ce){var Se;(Se=a()&&a().padClick)==null||Se.apply(this,Ce)}),N(de,le)}),N(Y,X)};ge(w,Y=>{f()===_.PEN_TOOL&&p(s)?Y(A):Y(R,!1)})}var M=U(w,2);{var $=Y=>{var X=$F();Z(()=>{x(X,"aria-checked",p(v)),Ot(X,"letter-checked",p(v)),Ot(X,"num-checked",!p(v))}),De("click",X,I),N(Y,X)};ge(M,Y=>{p(c)&&C(f())&&Y($)})}var W=U(M,2);H(b),Z(()=>{Ot(b,"digit",f()===_.DIGIT),Ot(b,"center",f()===_.CENTER_PM),Ot(b,"corner",f()===_.CORNER_PM),Ot(b,"color",f()===_.HIGHLIGHTS),Ot(b,"pen",f()===_.PEN_TOOL),Ot(W,"letter-tool",p(c))}),De("click",W,function(...Y){var X;(X=a()&&a().padClick)==null||X.apply(this,Y)}),N(t,b),ne()}var HF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function PF(t){var e=HF();N(t,e)}var BF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function WF(t){var e=BF();N(t,e)}var YF=ie('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Vo(t,e){te(e,!1);const n=[];let r=F(e,"selectedTool",12),i=F(e,"value",8),a=F(e,"title",8,void 0);function s(){mu(i())}fe();var c=YF(),u=q(c);jt(u);var f,g=U(u,2);dt(g,e,"default",{}),H(c),Z(()=>{x(c,"title",a()),Ot(c,"active",i()===r()),f!==(f=i())&&(u.value=(u.__value=i())==null?"":i())}),Ps(n,[],u,()=>(i(),r()),r),De("change",u,s),N(t,c),ne()}var zF=ie('<span aria-hidden="true">1</span>'),VF=ie('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),jF=ie('<span aria-hidden="true" style="font-size: 50%">123</span>'),qF=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),XF=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),KF=ie('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function ZF(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n);let i=F(e,"selectedTool",12);fe();var a=KF(),s=q(a);Vo(s,{get value(){return _.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=zF();N(v,C)},$$slots:{default:!0},$$legacy:!0});var c=U(s,2);Vo(c,{get value(){return _.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=VF();N(v,C)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);Vo(u,{get value(){return _.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=jF();N(v,C)},$$slots:{default:!0},$$legacy:!0});var f=U(u,2);Vo(f,{get value(){return _.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=qF(),I=q(C);PF(I),H(C),N(v,C)},$$slots:{default:!0},$$legacy:!0});var g=U(f,2);{var h=v=>{Vo(v,{get value(){return _.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,C)=>{var I=XF(),b=q(I);WF(b),H(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(g,v=>{r().penToolActive&&v(h)})}H(a),N(t,a),ne()}var QF=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function JF(t){var e=QF();N(t,e)}var e6=ie('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function ya(t,e){let n=F(e,"title",8,void 0),r=F(e,"clickCb",8,void 0);var i=e6(),a=q(i),s=q(a);dt(s,e,"default",{}),H(a),H(i),Z(()=>x(i,"title",n())),De("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,i)}var t6=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),n6=ie('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function r6(t,e){te(e,!1);let n=F(e,"showModal",12,!1);function r(){n(!1)}function i(){hv(),Ts(),n(!1)}fe(),Gr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=n6(),u=U(q(c),2);al(u,{children:(f,g)=>{var h=t6(),v=ue(h),m=U(v,2);De("click",v,i),De("click",m,r),N(f,h)},$$slots:{default:!0}}),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0}),ne()}var i6=ie("<!> <!>",1);function o6(t){let e=D(!1);function n(){S(e,!0)}var r=i6(),i=ue(r);ya(i,{title:"Restart",clickCb:n,children:(s,c)=>{JF(s)},$$slots:{default:!0}});var a=U(i,2);r6(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var a6=ie('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function jo(t,e){let n=F(e,"title",8);var r=a6(),i=q(r),a=q(i,!0);H(i);var s=U(i,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var s6=ie('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function cn(t,e){let n=F(e,"description",8);var r=s6(),i=q(r),a=q(i,!0);H(i);var s=U(i,2),c=q(s);dt(c,e,"default",{}),H(s),H(r),Z(()=>nt(a,n())),N(t,r)}var l6=ie('<div class="shortcut svelte-1cgt5u5"> </div>');function en(t,e){let n=F(e,"shortcut",8);var r=l6(),i=q(r,!0);H(r),Z(()=>nt(i,n())),N(t,r)}var c6=ie("<p></p>"),u6=ie("<!> <!> <!> <!>",1),d6=ie("<!> or <!>",1),_6=ie("<!> <!> <!> <!> <!> <!> <!> <!>",1),f6=ie("<!> <!>",1),g6=ie('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function h6(t,e){let n=F(e,"showModal",12,!1);Gr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var a=g6(),s=q(a);jo(s,{title:"Setting Instructions",children:(h,v)=>{var m=c6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",N(h,m)},$$slots:{default:!0}});var c=U(s,2);jo(c,{title:"General",children:(h,v)=>{cn(h,{description:"Toggle Darkmode",children:(m,C)=>{en(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=U(c,2);jo(u,{title:"Selection",children:(h,v)=>{var m=u6(),C=ue(m);cn(C,{description:"Select cells",children:(A,R)=>{en(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=U(C,2);cn(I,{description:"Add to current selection",children:(A,R)=>{en(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=U(I,2);cn(b,{description:"Remove from current selection",children:(A,R)=>{en(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=U(b,2);cn(w,{description:"Add or remove from current selection",children:(A,R)=>{en(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(h,m)},$$slots:{default:!0}});var f=U(u,2);jo(f,{title:"Change Tool",children:(h,v)=>{var m=_6(),C=ue(m);cn(C,{description:"Cycle Tool",children:(W,Y)=>{en(W,{shortcut:"Space"})},$$slots:{default:!0}});var I=U(C,2);cn(I,{description:"Change to Digit Tool",children:(W,Y)=>{en(W,{shortcut:"Z"})},$$slots:{default:!0}});var b=U(I,2);cn(b,{description:"Change to Corner Pencilmark Tool",children:(W,Y)=>{en(W,{shortcut:"X"})},$$slots:{default:!0}});var w=U(b,2);cn(w,{description:"Change to Center Pencilmark Tool",children:(W,Y)=>{en(W,{shortcut:"C"})},$$slots:{default:!0}});var A=U(w,2);cn(A,{description:"Change to Highlights Tool",children:(W,Y)=>{en(W,{shortcut:"V"})},$$slots:{default:!0}});var R=U(A,2);cn(R,{description:"Quickshift To Corner Pencilmark Tool",children:(W,Y)=>{en(W,{shortcut:"Shift"})},$$slots:{default:!0}});var M=U(R,2);cn(M,{description:"Quickshift To Center Pencilmark Tool",children:(W,Y)=>{en(W,{shortcut:"Ctrl"})},$$slots:{default:!0}});var $=U(M,2);cn($,{description:"Quickshift To Highlights Tool",children:(W,Y)=>{var X=d6(),re=ue(X);en(re,{shortcut:"Shift + Ctrl"});var de=U(re,2);en(de,{shortcut:"Alt"}),N(W,X)},$$slots:{default:!0}}),N(h,m)},$$slots:{default:!0}});var g=U(f,2);jo(g,{title:"Undo/Redo",children:(h,v)=>{var m=f6(),C=ue(m);cn(C,{description:"Undo",children:(b,w)=>{en(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=U(C,2);cn(I,{description:"Redo",children:(b,w)=>{en(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(h,m)},$$slots:{default:!0}}),H(a),N(r,a)},$$slots:{default:!0},$$legacy:!0})}var v6=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function p6(t){var e=v6();N(t,e)}var m6=ie("<!> <!>",1);function C6(t){let e=D(!1);function n(){S(e,!0)}var r=m6(),i=ue(r);ya(i,{title:"Info",clickCb:n,children:(s,c)=>{p6(s)},$$slots:{default:!0}});var a=U(i,2);h6(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var E6=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function I6(t){var e=E6();N(t,e)}var b6=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function w6(t){var e=b6();N(t,e)}function O6(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function a(){n()?i():r(),S(e,!p(e))}ya(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=Ae(),f=ue(u);{var g=v=>{w6(v)},h=v=>{I6(v)};ge(f,v=>{p(e)?v(g):v(h,!1)})}N(s,u)},$$slots:{default:!0}})}function Vv(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"renderers",8),i=F(e,"options",8);fe();var a=Ae(),s=ue(a);{var c=u=>{var f=Ae(),g=ue(f);ch(g,()=>r()[n().type],(h,v)=>{v(h,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,C)=>{var I=Ae(),b=ue(I);{var w=R=>{Ms(R,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=R=>{var M=zb();Z(()=>nt(M,n().raw)),N(R,M)};ge(b,R=>{"tokens"in n()&&n().tokens?R(w):R(A,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,f)};ge(s,u=>{r()[n().type]&&u(c)})}N(t,a),ne()}function Ms(t,e){let n=F(e,"tokens",8),r=F(e,"renderers",8),i=F(e,"options",8);var a=Ae(),s=ue(a);{var c=u=>{var f=Ae(),g=ue(f);We(g,1,n,gt,(h,v)=>{Vv(h,{get token(){return p(v)},get renderers(){return r()},get options(){return i()}})}),N(u,f)};ge(s,u=>{n()&&u(c)})}N(t,a)}function jv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function qv(t){return t.startsWith("/")||t.startsWith("#")}function y6(t,e){return e.slug(t).replace(/--+/g,"-")}function L6(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;let a=D();G(()=>(Q(n()),Q(r())),()=>{S(a,y6(n().text,r().slugger))}),pe(),fe();var s=Ae(),c=ue(s);return fh(c,()=>`h${n().depth}`,!1,(u,f)=>{let g;Z(()=>g=vh(u,g,{id:p(a)},void 0,u.namespaceURI===Su,u.nodeName.includes("-")));var h=Ae(),v=ue(h);dt(v,e,"default",{}),N(f,h)}),N(t,s),Qe(e,"renderers",i),ne({renderers:i})}var A6=ie("<blockquote><!></blockquote>");function x6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=A6(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}function S6(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8),i=F(e,"renderers",8),a=D();G(()=>Q(n()),()=>{S(a,n().ordered?"ol":"ul")}),pe(),fe();var s=Ae(),c=ue(s);fh(c,()=>p(a),!1,(u,f)=>{let g;Z(()=>g=vh(u,g,{start:n().start||1},void 0,u.namespaceURI===Su,u.nodeName.includes("-")));var h=Ae(),v=ue(h);We(v,1,()=>n().items,gt,(m,C)=>{var I=Ke(()=>({...p(C)}));Vv(m,{get token(){return p(I)},get options(){return r()},get renderers(){return i()}})}),N(f,h)}),N(t,s),ne()}var N6=ie("<li><!></li>");function D6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=N6(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var T6=ie("<br>");function R6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=T6();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var k6=ie("<pre><code> </code></pre>");function G6(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=k6(),s=q(a),c=q(s,!0);return H(s),H(a),Z(()=>{Dw(s,`lang-${n().lang}`),nt(c,n().text)}),N(t,a),Qe(e,"options",r),Qe(e,"renderers",i),ne({options:r,renderers:i})}var M6=ie("<code> </code>");function $6(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=M6(),s=q(a,!0);return Z(()=>nt(s,n().raw.slice(1,n().raw.length-1))),H(a),N(t,a),Qe(e,"options",r),Qe(e,"renderers",i),ne({options:r,renderers:i})}var F6=ie('<th scope="col"><!></th>'),U6=ie("<td><!></td>"),H6=ie("<tr></tr>"),P6=ie("<table><thead><tr></tr></thead><tbody></tbody></table>");function B6(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8),i=F(e,"renderers",8);fe();var a=P6(),s=q(a),c=q(s);We(c,5,()=>n().header,gt,(f,g)=>{var h=F6(),v=q(h);Ms(v,{get tokens(){return p(g).tokens},get options(){return r()},get renderers(){return i()}}),H(h),N(f,h)}),H(c),H(s);var u=U(s);We(u,5,()=>n().rows,gt,(f,g)=>{var h=H6();We(h,5,()=>p(g),gt,(v,m)=>{var C=U6(),I=q(C);Ms(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return i()}}),H(C),N(v,C)}),H(h),N(f,h)}),H(u),H(a),N(t,a),ne()}function W6(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=Ae(),s=ue(a);return Lw(s,()=>n().text),N(t,a),Qe(e,"options",r),Qe(e,"renderers",i),ne({options:r,renderers:i})}var Y6=ie("<p><!></p>");function z6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=Y6(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var V6=ie("<a><!></a>");function j6(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;fe();var a=V6();Z(()=>x(a,"href",qv(n().href)?jv(r().baseUrl,n().href):n().href));var s=q(a);return dt(s,e,"default",{}),H(a),Z(()=>x(a,"title",n().title)),N(t,a),Qe(e,"renderers",i),ne({renderers:i})}function q6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=Ae(),s=ue(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var X6=ie("<dfn><!></dfn>");function K6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=X6(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var Z6=ie("<del><!></del>");function Q6(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=Z6(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var J6=ie("<em><!></em>");function eU(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=J6(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var tU=ie("<hr>");function nU(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=tU();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var rU=ie("<strong><!></strong>");function iU(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=rU(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var oU=ie('<img class="markdown-image svelte-z38cge">');function aU(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;fe();var a=oU();return Z(()=>x(a,"src",qv(n().href)?jv(r().baseUrl,n().href):n().href)),Z(()=>{x(a,"title",n().title),x(a,"alt",n().text)}),N(t,a),Qe(e,"renderers",i),ne({renderers:i})}function Kg(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=Ae(),s=ue(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}const sU=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,lU=Object.hasOwnProperty;class cU{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=uU(e,n===!0);const a=i;for(;lU.call(r.occurrences,i);)r.occurrences[a]++,i=a+"-"+r.occurrences[a];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function uU(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(sU,"").replace(/ /g,"-"))}function Nd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ti=Nd();function Xv(t){Ti=t}const Kv=/[&<>"']/,dU=new RegExp(Kv.source,"g"),Zv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,_U=new RegExp(Zv.source,"g"),fU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zg=t=>fU[t];function kn(t,e){if(e){if(Kv.test(t))return t.replace(dU,Zg)}else if(Zv.test(t))return t.replace(_U,Zg);return t}const gU=/(^|[^\[])\^/g;function Et(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(gU,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function Qg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const aa={exec:()=>null};function Jg(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,f=s;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function qo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function hU(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function eh(t,e,n,r){const i=e.href,a=e.title?kn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:a,text:kn(s)}}function vU(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[s]=a;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class $s{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Ti}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:qo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=vU(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=qo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:qo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=qo(n[0],`
`).split(`
`),i="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let f;for(f=0;f<r.length;f++)if(/^ {0,3}>/.test(r[f]))u.push(r[f]),c=!0;else if(!c)u.push(r[f]);else break;r=r.slice(f);const g=u.join(`
`),h=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,a=a?`${a}
${h}`:h;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,s,!0),this.lexer.state.top=v,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.blockquote(I);s[s.length-1]=b,i=i.substring(0,i.length-C.raw.length)+b.raw,a=a.substring(0,a.length-C.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.list(I);s[s.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,a=a.substring(0,a.length-C.raw.length)+b.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,a={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,f="",g="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;f=n[0],e=e.substring(f.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!h.trim(),C=0;if(this.options.pedantic?(C=2,g=h.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,g=h.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(v)&&(f+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),$=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const W=e.split(`
`,1)[0];let Y;if(v=W,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),Y=v):Y=v.replace(/\t/g,"    "),R.test(v)||M.test(v)||$.test(v)||w.test(v)||A.test(v))break;if(Y.search(/[^ ]/)>=C||!v.trim())g+=`
`+Y.slice(C);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||R.test(h)||M.test(h)||A.test(h))break;g+=`
`+v}!m&&!v.trim()&&(m=!0),f+=W+`
`,e=e.substring(W.length+1),h=Y.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(f)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:f,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),a.raw+=f}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const f=a.items[u].tokens.filter(h=>h.type==="space"),g=f.length>0&&f.some(h=>/\n.*\n/.test(h.raw));a.loose=g}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Jg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(Jg(c,s.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[f]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:kn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=qo(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=hU(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),eh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),a=n[i.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return eh(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let c,u,f=s,g=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+s);(i=h.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){f+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){g+=u;continue}if(f-=u,f>0)continue;u=Math.min(u,u+f+g);const v=[...i[0]][0].length,m=e.slice(0,s+i.index+v+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return i&&a&&(r=r.substring(1,r.length-1)),r=kn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=kn(n[1]),i="mailto:"+r):(r=kn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,a;if(n[2]==="@")i=kn(n[0]),a="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=kn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=kn(n[0]),{type:"text",raw:n[0],text:r}}}}const pU=/^(?:[ \t]*(?:\n|$))+/,mU=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,CU=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,La=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,EU=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Qv=/(?:[*+-]|\d{1,9}[.)])/,Jv=Et(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Qv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Dd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,IU=/^[^\n]+/,Td=/(?!\s*\])(?:\\.|[^\[\]\\])+/,bU=Et(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Td).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wU=Et(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Qv).getRegex(),ml="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Rd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,OU=Et("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Rd).replace("tag",ml).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ep=Et(Dd).replace("hr",La).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),yU=Et(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ep).getRegex(),kd={blockquote:yU,code:mU,def:bU,fences:CU,heading:EU,hr:La,html:OU,lheading:Jv,list:wU,newline:pU,paragraph:ep,table:aa,text:IU},th=Et("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",La).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),LU={...kd,table:th,paragraph:Et(Dd).replace("hr",La).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",th).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex()},AU={...kd,html:Et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Rd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Et(Dd).replace("hr",La).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Jv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},tp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xU=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,np=/^( {2,}|\\)\n(?!\s*$)/,SU=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Aa="\\p{P}\\p{S}",NU=Et(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Aa).getRegex(),DU=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,TU=Et(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Aa).getRegex(),RU=Et("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Aa).getRegex(),kU=Et("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Aa).getRegex(),GU=Et(/\\([punct])/,"gu").replace(/punct/g,Aa).getRegex(),MU=Et(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$U=Et(Rd).replace("(?:-->|$)","-->").getRegex(),FU=Et("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$U).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,UU=Et(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Fs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),rp=Et(/^!?\[(label)\]\[(ref)\]/).replace("label",Fs).replace("ref",Td).getRegex(),ip=Et(/^!?\[(ref)\](?:\[\])?/).replace("ref",Td).getRegex(),HU=Et("reflink|nolink(?!\\()","g").replace("reflink",rp).replace("nolink",ip).getRegex(),Gd={_backpedal:aa,anyPunctuation:GU,autolink:MU,blockSkip:DU,br:np,code:xU,del:aa,emStrongLDelim:TU,emStrongRDelimAst:RU,emStrongRDelimUnd:kU,escape:tp,link:UU,nolink:ip,punctuation:NU,reflink:rp,reflinkSearch:HU,tag:FU,text:SU,url:aa},PU={...Gd,link:Et(/^!?\[(label)\]\((.*?)\)/).replace("label",Fs).getRegex(),reflink:Et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Fs).getRegex()},bu={...Gd,escape:Et(tp).replace("])","~|])").getRegex(),url:Et(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},BU={...bu,br:Et(np).replace("{2,}","*").getRegex(),text:Et(bu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bs={normal:kd,gfm:LU,pedantic:AU},Xo={normal:Gd,gfm:bu,breaks:BU,pedantic:PU};class Mn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ti,this.options.tokenizer=this.options.tokenizer||new $s,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:bs.normal,inline:Xo.normal};this.options.pedantic?(n.block=bs.pedantic,n.inline=Xo.pedantic):this.options.gfm&&(n.block=bs.gfm,this.options.breaks?n.inline=Xo.breaks:n.inline=Xo.gfm),this.tokenizer.rules=n}static get rules(){return{block:bs,inline:Xo}}static lex(e,n){return new Mn(n).lex(e)}static lexInline(e,n){return new Mn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(g=>{f=g.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,a,s=e,c,u,f;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(f=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,f)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},h),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(a=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(f=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class Us{constructor(e){he(this,"options");he(this,"parser");this.options=e||Ti}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+kn(i)+'">'+(r?a:kn(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:kn(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let c=0;c<e.items.length;c++){const u=e.items[c];i+=this.listitem(u)}const a=n?"ol":"ul",s=n&&r!==1?' start="'+r+'"':"";return"<"+a+s+`>
`+i+"</"+a+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let a=0;a<e.header.length;a++)r+=this.tablecell(e.header[a]);n+=this.tablerow({text:r});let i="";for(let a=0;a<e.rows.length;a++){const s=e.rows[a];r="";for(let c=0;c<s.length;c++)r+=this.tablecell(s[c]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),a=Qg(e);if(a===null)return i;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=Qg(e);if(i===null)return r;e=i;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Md{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Xn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Ti,this.options.renderer=this.options.renderer||new Us,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Md}static parse(e,n){return new Xn(n).parse(e)}static parseInline(e,n){return new Xn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class sa{constructor(e){he(this,"options");he(this,"block");this.options=e||Ti}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Mn.lex:Mn.lexInline}provideParser(){return this.block?Xn.parse:Xn.parseInline}}he(sa,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class WU{constructor(...e){he(this,"defaults",Nd());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Xn);he(this,"Renderer",Us);he(this,"TextRenderer",Md);he(this,"Lexer",Mn);he(this,"Tokenizer",$s);he(this,"Hooks",sa);this.use(...e)}walkTokens(e,n){var i,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const f of u)r=r.concat(this.walkTokens(f.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const f=c[u].flat(1/0);r=r.concat(this.walkTokens(f,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),i.extensions=n),r.renderer){const a=this.defaults.renderer||new Us(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],f=a[c];a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=f.apply(a,g)),h||""}}i.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new $s(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],f=a[c];a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=f.apply(a,g)),h}}i.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new sa;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],f=a[c];sa.passThroughHooks.has(s)?a[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(a,g)).then(v=>f.call(a,v));const h=u.call(a,g);return f.call(a,h)}:a[c]=(...g)=>{let h=u.apply(a,g);return h===!1&&(h=f.apply(a,g)),h}}i.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Mn.lex(e,n??this.defaults)}parser(e,n){return Xn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const a={...i},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Mn.lex:Mn.lexInline,f=s.hooks?s.hooks.provideParser():e?Xn.parse:Xn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(g=>u(g,s)).then(g=>s.hooks?s.hooks.processAllTokens(g):g).then(g=>s.walkTokens?Promise.all(this.walkTokens(g,s.walkTokens)).then(()=>g):g).then(g=>f(g,s)).then(g=>s.hooks?s.hooks.postprocess(g):g).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let g=u(r,s);s.hooks&&(g=s.hooks.processAllTokens(g)),s.walkTokens&&this.walkTokens(g,s.walkTokens);let h=f(g,s);return s.hooks&&(h=s.hooks.postprocess(h)),h}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+kn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Oi=new WU;function Ct(t,e){return Oi.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Oi.setOptions(t),Ct.defaults=Oi.defaults,Xv(Ct.defaults),Ct};Ct.getDefaults=Nd;Ct.defaults=Ti;Ct.use=function(...t){return Oi.use(...t),Ct.defaults=Oi.defaults,Xv(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Oi.walkTokens(t,e)};Ct.parseInline=Oi.parseInline;Ct.Parser=Xn;Ct.parser=Xn.parse;Ct.Renderer=Us;Ct.TextRenderer=Md;Ct.Lexer=Mn;Ct.lexer=Mn.lex;Ct.Tokenizer=$s;Ct.Hooks=sa;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Xn.parse;Mn.lex;function YU(t){return new Mn().lex(t)}const zU=()=>({heading:L6,blockquote:x6,list:S6,list_item:D6,br:R6,code:G6,codespan:$6,table:B6,html:W6,paragraph:z6,link:j6,text:q6,def:K6,del:Q6,em:eU,hr:nU,strong:iU,image:aU,space:Kg,escape:Kg}),VU=()=>({baseUrl:"/",slugger:new cU});function jU(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},dh(()=>{console.warn=t})}function op(t,e){te(e,!1),jU();let n=F(e,"source",8),r=F(e,"options",24,()=>({})),i=F(e,"renderers",24,()=>({})),a=D(),s=D(),c=D();G(()=>(Q(n()),Q(i()),Q(r())),()=>{S(a,YU(n())),S(s,{...zU(),...i()}),S(c,{...VU(),...r()})}),pe(),fe(),Ms(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),ne()}var qU=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),XU=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),KU=ie('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function ZU(t,e){te(e,!1);const n=qe(),r=()=>ve(Nr,"$puzzleMetaStore",n),i=D();let a=F(e,"showModal",12,!1);function s(u){return u?xs(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}G(()=>r(),()=>{S(i,r())}),pe(),fe(),Gr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,f)=>{var g=KU(),h=q(g),v=q(h,!0);H(h);var m=U(h,2),C=q(m);Z(()=>nt(C,`by ${s(p(i).authors)??""}`)),H(m);var I=U(m,2),b=q(I),w=Ke(()=>c(p(i).ruleset));op(b,{get source(){return p(w)}}),H(I);var A=U(I,2);{var R=W=>{var Y=qU(),X=U(ue(Y),2);Z(()=>x(X,"href",p(i).ctcUrl)),N(W,Y)};ge(A,W=>{var Y,X;(X=(Y=p(i))==null?void 0:Y.ctcUrl)!=null&&X.length&&W(R)})}var M=U(A,2);{var $=W=>{var Y=XU(),X=U(ue(Y),2);Z(()=>x(X,"href",p(i).ctcYoutubeUrl)),N(W,Y)};ge(M,W=>{var Y,X;(X=(Y=p(i))==null?void 0:Y.ctcYoutubeUrl)!=null&&X.length&&W($)})}H(g),Z(()=>{var W;return nt(v,((W=p(i))==null?void 0:W.title)||"Puzzle")}),N(u,g)},$$slots:{default:!0},$$legacy:!0}),ne()}var QU=oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function JU(t){var e=QU();N(t,e)}var eH=ie("<!> <!>",1);function tH(t){let e=D(!1);function n(){S(e,!0)}var r=eH(),i=ue(r);ya(i,{title:"Rules",clickCb:n,children:(s,c)=>{JU(s)},$$slots:{default:!0}});var a=U(i,2);ZU(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var nH=ie("<!> <!>",1);function rH(t){let e=D(!1);function n(){S(e,!0)}var r=nH(),i=ue(r);ya(i,{title:"Settings",clickCb:n,children:(s,c)=>{xv(s)},$$slots:{default:!0}});var a=U(i,2);Sv(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var iH=ie('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function oH(t){var e=iH(),n=q(e);rH(n);var r=U(n,2);tH(r);var i=U(r,2);O6(i);var a=U(i,2);C6(a);var s=U(a,2);o6(s),H(e),N(t,e)}var aH=ie('<div class="entry-panel-wrapper svelte-1dr0lb4"><div class="puzzle-info svelte-1dr0lb4"><div class="puzzle-header svelte-1dr0lb4"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1dr0lb4"><!></div></div>  <div class="entry-panel svelte-1dr0lb4"><!> <div class="entry-subpanel1 svelte-1dr0lb4"><!> <!></div> <!></div></div>');function sH(t,e){te(e,!1);const n=qe(),r=()=>ve(no,"$svgRefStore",n),i=()=>ve(Nr,"$puzzleMetaStore",n),a=()=>ve(Xt,"$toolStore",n),s=D(),c=D();function u(){r().focus()}function f(ee){return ee?xs(ee," & ",", "):"Anonymous"}function g(ee){return ee&&ee.length?ee:"Normal sudoku rules apply."}G(()=>i(),()=>{S(s,i().title??"Sudoku")}),G(()=>i(),()=>{S(c,f(i().authors))}),pe(),fe();var h=aH(),v=q(h),m=q(v),C=q(m),I=q(C,!0);H(C);var b=U(C,2),w=q(b);H(b),H(m);var A=U(m,2),R=q(A),M=Ke(()=>g(i().ruleset));op(R,{get source(){return p(M)}}),H(A),H(v);var $=U(v,2),W=q($);oH(W);var Y=U(W,2),X=q(Y);UF(X,{get selectedTool(){return a()}});var re=U(X,2);ZF(re,{get selectedTool(){return uh(),a()},set selectedTool(ee){_a(Xt,ee)},$$legacy:!0}),H(Y);var de=U(Y,2);kF(de,{}),H($),H(h),Z(()=>{nt(I,p(s)),nt(w,`by ${p(c)??""}`)}),De("click",$,Kn(()=>{u()})),N(t,h),ne()}var lH=ie('<div class="App svelte-aer8a2"><header></header> <main class="svelte-aer8a2"><div class="game-wrapper svelte-aer8a2"><div class="game svelte-aer8a2"><!> <!> <!></div></div></main> <footer class="svelte-aer8a2"><div class="footer-text svelte-aer8a2"></div></footer></div>');function mH(t,e){te(e,!1);const n=qe(),r=()=>ve($w,"$darkModeStore",n),i=()=>ve(qs,"$gameModeStore",n),a=D(),s=D();dh(async()=>{const I=window.location.href;try{await jw({workerURL:`${I}minizinc-worker.js`,wasmURL:`${I}minizinc.wasm`,dataURL:`${I}minizinc.data`})}catch(b){const w="Failed to initialize MiniZinc: "+b.message;console.log(w)}}),G(()=>r(),()=>{S(a,r()?"dark":"light")}),G(()=>i(),()=>{S(s,i())}),pe(),fe();var c=lH(),u=U(q(c),2),f=q(u),g=q(f),h=q(g);{var v=I=>{zM(I)};ge(h,I=>{p(s)===ao.SETTING&&I(v)})}var m=U(h,2);OF(m,{});var C=U(m,2);sH(C,{}),H(g),H(f),H(u),Ci(2),H(c),Z(()=>x(c,"data-theme",p(a))),N(t,c),ne()}export{mH as component,pH as universal};
