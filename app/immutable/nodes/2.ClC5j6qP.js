var Hb=Object.defineProperty;var Pb=(t,e,n)=>e in t?Hb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>Pb(t,typeof e!="symbol"?e+"":e,n);import{b as nu,e as Bb,a as N,n as ie,t as oe,c as Le,d as Wb}from"../chunks/disclose-version.c9nfQR10.js";import{i as fe}from"../chunks/legacy.BeICcgj8.js";import{A as nh,b as bu,h as bt,G as Ji,F as eo,O as rh,Y as ih,ad as Yb,ae as gg,U as Jo,c as dr,au as bs,af as wu,a as Us,ag as oh,C as ru,av as hg,aw as zb,H as jb,ax as Vb,d as Ou,B as yu,V as qb,L as Kb,I as iu,ay as Lu,az as Au,a1 as Xb,a7 as vg,aA as ah,aB as Zb,aC as Qb,R as sh,W as Jb,S as ew,E as tw,aD as xu,aE as nw,ac as rw,aF as iw,aG as ow,ai as Su,M as lh,aH as aw,j as sw,a9 as lw,v as q,w as H,p as te,x as U,t as Z,e as ne,l as p,as as Xe,aI as M,$ as S,aJ as pe,aK as T,m as Q,f as ce,aL as cw,aM as Ei,aN as Uc,o as pg}from"../chunks/runtime.3UijFPFW.js";import{d as uw,p as F,s as qe,i as ge,e as _a,f as ve,b as Ii,c as ch,m as uh}from"../chunks/props.CJazo4uA.js";import{i as dw,a as _w,b as fw,c as gw,d as hw,e as vw,n as pw,f as mw,l as Nu,g as Te,s as nt,r as Cw}from"../chunks/render.7_-GRy3G.js";import{d as cn,w as Ft,g as st}from"../chunks/index.HRmy8yV3.js";import{a as Ew,o as dh}from"../chunks/index-client.CTQVjhPh.js";function gt(t,e){return e}function Iw(t,e,n,r){for(var i=[],a=e.length,s=0;s<a;s++)zb(e[s].e,i,!0);var c=a>0&&i.length===0&&n!==null;if(c){var u=n.parentNode;jb(u),u.append(n),r.clear(),Kr(t,e[0].prev,e[a-1].next)}Vb(i,()=>{for(var h=0;h<a;h++){var g=e[h];c||(r.delete(g.k),Kr(t,g.prev,g.next)),Ou(g.e,!c)}})}function We(t,e,n,r,i,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&ah)!==0;if(u){var h=t;s=bt?Ji(yu(h)):h.appendChild(nh())}bt&&eo();var g=null,f=!1;bu(()=>{var v=n(),m=rh(v)?v:v==null?[]:ih(v),C=m.length;if(f&&C===0)return;f=C===0;let I=!1;if(bt){var w=s.data===Yb;w!==(C===0)&&(s=gg(),Ji(s),Jo(!1),I=!0)}if(bt){for(var b=null,x,R=0;R<C;R++){if(dr.nodeType===8&&dr.data===qb){s=dr,I=!0,Jo(!1);break}var $=m[R],k=r($,R);x=_h(dr,c,b,null,$,k,R,i,e),c.items.set(k,x),b=x}C>0&&Ji(gg())}if(!bt){var Y=Kb;bw(m,c,s,i,e,(Y.f&bs)!==0,r)}a!==null&&(C===0?g?wu(g):g=Us(()=>a(s)):g!==null&&oh(g,()=>{g=null})),I&&Jo(!0),n()}),bt&&(s=dr)}function bw(t,e,n,r,i,a,s,c){var Ce,Se,lt,xe;var u=(i&Zb)!==0,h=(i&(Lu|Au))!==0,g=t.length,f=e.items,v=e.first,m=v,C,I=null,w,b=[],x=[],R,$,k,Y;if(u)for(Y=0;Y<g;Y+=1)R=t[Y],$=s(R,Y),k=f.get($),k!==void 0&&((Ce=k.a)==null||Ce.measure(),(w??(w=new Set)).add(k));for(Y=0;Y<g;Y+=1){if(R=t[Y],$=s(R,Y),k=f.get($),k===void 0){var W=m?m.e.nodes_start:n;I=_h(W,e,I,I===null?e.first:I.next,R,$,Y,r,i),f.set($,I),b=[],x=[],m=I.next;continue}if(h&&ww(k,R,Y,i),k.e.f&bs&&(wu(k.e),u&&((Se=k.a)==null||Se.unfix(),(w??(w=new Set)).delete(k))),k!==m){if(C!==void 0&&C.has(k)){if(b.length<x.length){var K=x[0],re;I=K.prev;var _e=b[0],ee=b[b.length-1];for(re=0;re<b.length;re+=1)mg(b[re],K,n);for(re=0;re<x.length;re+=1)C.delete(x[re]);Kr(e,_e.prev,ee.next),Kr(e,I,_e),Kr(e,ee,K),m=K,I=ee,Y-=1,b=[],x=[]}else C.delete(k),mg(k,m,n),Kr(e,k.prev,k.next),Kr(e,k,I===null?e.first:I.next),Kr(e,I,k),I=k;continue}for(b=[],x=[];m!==null&&m.k!==$;)(a||!(m.e.f&bs))&&(C??(C=new Set)).add(m),x.push(m),m=m.next;if(m===null)continue;k=m}b.push(k),I=k,m=k.next}if(m!==null||C!==void 0){for(var le=C===void 0?[]:ih(C);m!==null;)(a||!(m.e.f&bs))&&le.push(m),m=m.next;var Ie=le.length;if(Ie>0){var me=i&ah&&g===0?n:null;if(u){for(Y=0;Y<Ie;Y+=1)(lt=le[Y].a)==null||lt.measure();for(Y=0;Y<Ie;Y+=1)(xe=le[Y].a)==null||xe.fix()}Iw(e,le,me,f)}}u&&iu(()=>{var we;if(w!==void 0)for(k of w)(we=k.a)==null||we.apply()}),ru.first=e.first&&e.first.e,ru.last=I&&I.e}function ww(t,e,n,r){r&Lu&&hg(t.v,e),r&Au?hg(t.i,n):t.i=n}function _h(t,e,n,r,i,a,s,c,u,h){var g=(u&Lu)!==0,f=(u&Qb)===0,v=g?f?Xb(i):vg(i):i,m=u&Au?vg(s):s,C={i:m,v,k:a,a:null,e:null,prev:n,next:r};try{return C.e=Us(()=>c(t,v,m),bt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function mg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=sh(a);i.before(a),a=s}}function Kr(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ow(t,e,n,r,i){var a=t,s="",c;bu(()=>{if(s===(s=e()??"")){bt&&eo();return}c!==void 0&&(Ou(c),c=void 0),s!==""&&(c=Us(()=>{if(bt){dr.data;for(var u=eo(),h=u;u!==null&&(u.nodeType!==8||u.data!=="");)h=u,u=sh(u);if(u===null)throw Jb(),ew;nu(dr,h),a=Ji(u);return}var g=s+"",f=Bb(g);nu(yu(f),f.lastChild),a.before(f)}))})}function dt(t,e,n,r,i){var c;bt&&eo();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function fh(t,e,n,r,i,a){let s=bt;bt&&eo();var c,u,h=null;bt&&dr.nodeType===1&&(h=dr,eo());var g=bt?dr:t,f;bu(()=>{const v=e()||null;var m=v==="svg"?xu:null;v!==c&&(f&&(v===null?oh(f,()=>{f=null,u=null}):v===u?wu(f):Ou(f)),v&&v!==u&&(f=Us(()=>{if(h=bt?h:m?document.createElementNS(m,v):document.createElement(v),nu(h,h),r){bt&&dw(v)&&h.append(document.createComment(""));var C=bt?yu(h):h.appendChild(nh());bt&&(C===null?Jo(!1):Ji(C)),r(h,C)}ru.nodes_end=h,g.before(h)})),c=v,c&&(u=c))},tw),s&&(Jo(!0),Ji(g))}function gh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=gh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function yw(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=gh(t))&&(r&&(r+=" "),r+=e);return r}function Lw(t){return typeof t=="object"?yw(t):t??""}function Vt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;A(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;A(t,"checked",null),t.checked=i}}};t.__on_r=n,ow(n),_w()}}function Aw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function hh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function xw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function A(t,e,n,r){var i=t.__attributes??(t.__attributes={});bt&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[nw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ph(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function vh(t,e,n,r,i=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var h in e)h in n||(n[h]=null);n.class&&(n.class=Lw(n.class));var g=ph(t),f=t.__attributes??(t.__attributes={});for(const b in n){let x=n[b];if(u&&b==="value"&&x==null){t.value=t.__value="",c[b]=x;continue}var v=c[b];if(x!==v){c[b]=x;var m=b[0]+b[1];if(m!=="$$"){if(m==="on"){const R={},$="$$"+b;let k=b.slice(2);var C=mw(k);if(fw(k)&&(k=k.slice(0,-7),R.capture=!0),!C&&v){if(x!=null)continue;t.removeEventListener(k,c[$],R),c[$]=null}if(x!=null)if(C)t[`__${k}`]=x,hw([k]);else{let Y=function(W){c[b].call(this,W)};c[$]=gw(k,t,Y,R)}else C&&(t[`__${k}`]=void 0)}else if(b==="style"&&x!=null)t.style.cssText=x+"";else if(b==="autofocus")vw(t,!!x);else if(b==="__value"||b==="value"&&x!=null)t.value=t[b]=t.__value=x;else if(b==="selected"&&u)xw(t,x);else{var I=b;i||(I=pw(I));var w=I==="defaultValue"||I==="defaultChecked";if(x==null&&!a&&!w)if(f[b]=null,I==="value"||I==="checked"){let R=t;if(I==="value"){let $=R.defaultValue;R.removeAttribute(I),R.defaultValue=$}else{let $=R.defaultChecked;R.removeAttribute(I),R.defaultChecked=$}}else t.removeAttribute(b);else w||g.includes(I)&&(a||typeof x!="string")?t[I]=x:typeof x!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||A(t,I,x))}b==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var Cg=new Map;function ph(t){var e=Cg.get(t.nodeName);if(e)return e;Cg.set(t.nodeName,e=[]);for(var n,r=t,i=Element.prototype;i!==r;){n=iw(r);for(var a in n)n[a].set&&e.push(a);r=rw(r)}return e}function $n(t,e,n){var r=t.__className,i=mh(e);bt&&t.getAttribute("class")===i?t.__className=i:(r!==i||bt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Sw(t,e,n){var r=t.__className,i=mh(e);bt&&t.className===i?t.__className=i:(r!==i||bt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function mh(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=aw();Nu(t,"input",i=>{var a=i?t.defaultValue:t.value;if(a=Pc(t)?Bc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||sw(e)==null&&t.value)&&n(Pc(t)?Bc(t.value):t.value),Su(()=>{var i=e();Pc(t)&&i===Bc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Hc=new Set;function Hs(t,e,n,r,i=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Nu(n,"change",()=>{var h=n.__value;a&&(h=Eg(s,h,n.checked)),i(h)},()=>i(a?[]:null)),Su(()=>{var h=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}a?(h=h||[],n.checked=h.includes(n.__value)):n.checked=uw(n.__value,h)}),lh(()=>{var h=s.indexOf(n);h!==-1&&s.splice(h,1)}),Hc.has(s)||(Hc.add(s),iu(()=>{s.sort((h,g)=>h.compareDocumentPosition(g)===4?-1:1),Hc.delete(s)})),iu(()=>{if(c){var h;if(a)h=Eg(s,h,n.checked);else{var g=s.find(f=>f.checked);h=g==null?void 0:g.__value}i(h)}})}function Eg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Pc(t){var e=t.type;return e==="number"||e==="range"}function Bc(t){return t===""?null:+t}function Nw(t,e,n=e){Nu(t,"change",()=>{n(t.files)}),Su(()=>{t.files=e()})}function Qe(t,e,n){var r=lw(t,e);r&&r.set&&(t[e]=n,lh(()=>{t[e]=null}))}function Tw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Xn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Wc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Dw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=rh(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}const Rw=!0,aH=Object.freeze(Object.defineProperty({__proto__:null,prerender:Rw},Symbol.toStringTag,{value:"Module"}));function kw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=Ft(kw()),Gw=cn(Wt,t=>t.darkMode);function Mw(t){Wt.update(e=>({...e,darkMode:t}))}function $w(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function Fw(t){Wt.update(e=>({...e,penToolActive:t}))}function Uw(t){Wt.update(e=>({...e,letterToolActive:t}))}function Hw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function Pw(t){Wt.update(e=>({...e,checkConflicts:t}))}function Bw(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function Ww(t){Wt.update(e=>({...e,hideFog:t}))}function Yw(t){Wt.update(e=>({...e,showSolution:t}))}const Ig=encodeURIComponent("4.3.5");let ur={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const mi=[];let Yc;function Xo(){if(!Yc){const e=`importScripts(${JSON.stringify(ur.workerURL)});`;Yc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Yc);t.postMessage({wasmURL:ur.wasmURL?ur.wasmURL.toString():new URL(`./minizinc.wasm?version=${Ig}`,ur.workerURL).toString(),dataURL:ur.dataURL?ur.dataURL.toString():new URL(`./minizinc.data?version=${Ig}`,ur.workerURL).toString()}),mi.push({worker:t,runCount:0})}function Ch(){for(;mi.length<ur.numWorkers;)Xo()}async function zw(t){if(ur={...ur,...t},mi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Ch(),await Promise.race(mi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Tu{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Tu;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Ch();const i=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:c}=mi.pop();return s.postMessage({jsonStream:!0,files:a,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],i.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?mi.push({worker:a,runCount:s}):(a.terminate(),Xo()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;a.onmessage=h=>{switch(h.data.type){case"error":c.push(h.data);break;case"interface":u=h.data;break;case"exit":s<10?mi.push({worker:a,runCount:s}):(a.terminate(),Xo()),h.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const a=["-c","--fzn",i],{worker:s}=this._run(a,n.options,[i]);Xo();let c={},u=!1,h=null;return s.onmessage=g=>{if(c[g.data.type])for(const f of c[g.data.type])f(g.data);switch(g.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":h||(h=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,f){c[g]?c[g].add(f):c[g]=new Set([f])},off(g,f){c[g]&&c[g].delete(f)},then(g,f){const v=m=>{if(m.code===0)g(m.outputFiles[i]);else{const C=h?{message:h.message,...m}:m;if(!f)throw C;f(C)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Xo();let a=null,s={},c=!1,u=null,h={},g="UNKNOWN";return i.onmessage=f=>{if(s[f.data.type])for(const v of s[f.data.type])v(f.data);switch(f.data.type){case"exit":i.terminate(),c=!0,s={};break;case"error":a||(a=f.data);break;case"statistics":h={...h,...f.data.statistics};break;case"solution":u=f.data,g="SATISFIED";break;case"status":g=f.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),s.exit)for(const f of s.exit)f({type:"exit",code:null});s={}}},on(f,v){s[f]?s[f].add(v):s[f]=new Set([v])},off(f,v){s[f]&&s[f].delete(v)},then(f,v){const m=C=>{if(C.code===0)f({status:g,solution:u,statistics:h});else{const I=a?{message:a.message,...C}:C;if(!v)throw I;v(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var ao=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(ao||{}),Du=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Du||{}),Eh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Eh||{}),Ih=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Ih||{}),bh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(bh||{}),wh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.DIRECTED_PATH="Directed Path",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(wh||{}),Ps=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CAVE_CLUE="Cave Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t))(Ps||{}),Ru=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Ru||{}),ku=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t))(ku||{}),Gu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.MAZE_WALL="Maze Wall",t.ONE_WAY_DOOR="One Way Door",t))(Gu||{}),Mu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Mu||{}),$u=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))($u||{}),Fu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(Fu||{}),Uu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Uu||{}),Hu=(t=>(t.CLONE_REGION="Clone Region",t))(Hu||{}),Pu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Pu||{}),Bu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Bu||{}),Wu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Wu||{}),Yu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Yu||{}),zu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(zu||{}),Oh=(t=>(t.PEN_TOOL="Pen Tool",t))(Oh||{});const ju={...Eh,...Ih,...bh,...wh},yh={...Ps,...Ru,...ku,...Gu,...Mu,...$u,...Fu,...Uu,...Hu,...Pu,...Bu,...Wu,...Yu},_={...Du,...ju,...yh,...zu,...Oh};var D=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(D||{});function jw(t){return Object.values(ju).includes(t)}function Vw(t){return Object.values(yh).includes(t)}function Vu(t){return Object.values(Ru).includes(t)||t===_.COSMETIC_CELL_ARROW}function qu(t){return Object.values(ku).includes(t)||t===_.COSMETIC_CELL_MULTI_ARROW}function qw(t){return Object.values(Ps).includes(t)||Vu(t)||qu(t)||t===_.COSMETIC_CELL_SHAPE||t===_.COSMETIC_CELL_ARROW||t===_.COSMETIC_CELL_MULTI_ARROW}function Ku(t){return Object.values(Gu).includes(t)||t===_.COSMETIC_EDGE}function Lh(t){return Object.values(Mu).includes(t)||t===_.COSMETIC_CORNER}function Xu(t){return Object.values($u).includes(t)||t===_.COSMETIC_LINE||t===_.COSMETIC_LINE_WITH_POLYGON_ENDS||t===_.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Zu(t){return Object.values(Fu).includes(t)||t===_.COSMETIC_ARROW}function Qu(t){return Object.values(Uu).includes(t)||t===_.COSMETIC_CAGE}function Ah(t){return Object.values(Wu).includes(t)}function xh(t){return Object.values(Hu).includes(t)}function la(t){const e=Object.values(Pu),n=Object.values(Bu);return e.includes(t)||n.includes(t)||t===_.COSMETIC_OUTSIDE_DIRECTION}function Kw(t){return Object.values(Yu).includes(t)}function Xw(t){return Object.values(zu).includes(t)}function Ju(t){return Object.values(Du).includes(t)}const Zw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Qw=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Sh(t){for(const e of Object.values(_))if(e===t)return e}function Nh(t,e){return Object.values(e).includes(t)}class to extends Map{constructor(){super()}setConstraint(e,n){return jw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new to;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new to;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=Sh(r);a!==void 0&&Nh(a,ju)&&typeof i=="boolean"&&i&&n.setConstraint(a,i)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function Th(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function Ve(t,e){return t.r===e.r&&t.c===e.c}function Jw(t,e){return{r:t.r+e.r,c:t.c+e.c}}function eO(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Bs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ve(t,e)}function tO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function ys(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function qt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ws(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function nO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Dh(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function rO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const iO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function ed(t){t=t%8;const e=iO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const oO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function Ys(t){const e=oO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Rh(t,e){const n=Ys(e);return Jw(t,n)}function kh(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Gh(t,e,n=!1){const r=t.some(a=>Ve(a,e)),i=n?t.some(a=>Bs(a,e)):t.some(a=>tO(a,e));if(!r&&i){const a=[...t,e];return ys(a),a}return t}function hs(t){return`R${t.r+1}C${t.c+1}`}function td(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var aO=Zo.exports,bg;function sO(){return bg||(bg=1,function(t,e){(function(){var n,r="4.17.21",i=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,g="__lodash_placeholder__",f=1,v=2,m=4,C=1,I=2,w=1,b=2,x=4,R=8,$=16,k=32,Y=64,W=128,K=256,re=512,_e=30,ee="...",le=800,Ie=16,me=1,Ce=2,Se=3,lt=1/0,xe=9007199254740991,we=17976931348623157e292,_t=NaN,ct=4294967295,Un=ct-1,Lt=ct>>>1,yn=[["ary",W],["bind",w],["bindKey",b],["curry",R],["curryRight",$],["flip",re],["partial",k],["partialRight",Y],["rearg",K]],Xt="[object Arguments]",pr="[object Array]",Jn="[object AsyncFunction]",mr="[object Boolean]",ar="[object Date]",Lo="[object DOMException]",$r="[object Error]",Ri="[object Function]",$e="[object GeneratorFunction]",be="[object Map]",Ge="[object Number]",Me="[object Null]",St="[object Object]",$d="[object Promise]",ip="[object Proxy]",Ao="[object RegExp]",er="[object Set]",xo="[object String]",La="[object Symbol]",op="[object Undefined]",So="[object WeakMap]",ap="[object WeakSet]",No="[object ArrayBuffer]",ki="[object DataView]",ml="[object Float32Array]",Cl="[object Float64Array]",El="[object Int8Array]",Il="[object Int16Array]",bl="[object Int32Array]",wl="[object Uint8Array]",Ol="[object Uint8ClampedArray]",yl="[object Uint16Array]",Ll="[object Uint32Array]",sp=/\b__p \+= '';/g,lp=/\b(__p \+=) '' \+/g,cp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fd=/&(?:amp|lt|gt|quot|#39);/g,Ud=/[&<>"']/g,up=RegExp(Fd.source),dp=RegExp(Ud.source),_p=/<%-([\s\S]+?)%>/g,fp=/<%([\s\S]+?)%>/g,Hd=/<%=([\s\S]+?)%>/g,gp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hp=/^\w*$/,vp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Al=/[\\^$.*+?()[\]{}|]/g,pp=RegExp(Al.source),xl=/^\s+/,mp=/\s/,Cp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ep=/\{\n\/\* \[wrapped with (.+)\] \*/,Ip=/,? & /,bp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,wp=/[()=,{}\[\]\/\s]/,Op=/\\(\\)?/g,yp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pd=/\w*$/,Lp=/^[-+]0x[0-9a-f]+$/i,Ap=/^0b[01]+$/i,xp=/^\[object .+?Constructor\]$/,Sp=/^0o[0-7]+$/i,Np=/^(?:0|[1-9]\d*)$/,Tp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Aa=/($^)/,Dp=/['\n\r\u2028\u2029\\]/g,xa="\\ud800-\\udfff",Rp="\\u0300-\\u036f",kp="\\ufe20-\\ufe2f",Gp="\\u20d0-\\u20ff",Bd=Rp+kp+Gp,Wd="\\u2700-\\u27bf",Yd="a-z\\xdf-\\xf6\\xf8-\\xff",Mp="\\xac\\xb1\\xd7\\xf7",$p="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Fp="\\u2000-\\u206f",Up=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",zd="A-Z\\xc0-\\xd6\\xd8-\\xde",jd="\\ufe0e\\ufe0f",Vd=Mp+$p+Fp+Up,Sl="['’]",Hp="["+xa+"]",qd="["+Vd+"]",Sa="["+Bd+"]",Kd="\\d+",Pp="["+Wd+"]",Xd="["+Yd+"]",Zd="[^"+xa+Vd+Kd+Wd+Yd+zd+"]",Nl="\\ud83c[\\udffb-\\udfff]",Bp="(?:"+Sa+"|"+Nl+")",Qd="[^"+xa+"]",Tl="(?:\\ud83c[\\udde6-\\uddff]){2}",Dl="[\\ud800-\\udbff][\\udc00-\\udfff]",Gi="["+zd+"]",Jd="\\u200d",e_="(?:"+Xd+"|"+Zd+")",Wp="(?:"+Gi+"|"+Zd+")",t_="(?:"+Sl+"(?:d|ll|m|re|s|t|ve))?",n_="(?:"+Sl+"(?:D|LL|M|RE|S|T|VE))?",r_=Bp+"?",i_="["+jd+"]?",Yp="(?:"+Jd+"(?:"+[Qd,Tl,Dl].join("|")+")"+i_+r_+")*",zp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",o_=i_+r_+Yp,Vp="(?:"+[Pp,Tl,Dl].join("|")+")"+o_,qp="(?:"+[Qd+Sa+"?",Sa,Tl,Dl,Hp].join("|")+")",Kp=RegExp(Sl,"g"),Xp=RegExp(Sa,"g"),Rl=RegExp(Nl+"(?="+Nl+")|"+qp+o_,"g"),Zp=RegExp([Gi+"?"+Xd+"+"+t_+"(?="+[qd,Gi,"$"].join("|")+")",Wp+"+"+n_+"(?="+[qd,Gi+e_,"$"].join("|")+")",Gi+"?"+e_+"+"+t_,Gi+"+"+n_,jp,zp,Kd,Vp].join("|"),"g"),Qp=RegExp("["+Jd+xa+Bd+jd+"]"),Jp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,em=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tm=-1,At={};At[ml]=At[Cl]=At[El]=At[Il]=At[bl]=At[wl]=At[Ol]=At[yl]=At[Ll]=!0,At[Xt]=At[pr]=At[No]=At[mr]=At[ki]=At[ar]=At[$r]=At[Ri]=At[be]=At[Ge]=At[St]=At[Ao]=At[er]=At[xo]=At[So]=!1;var wt={};wt[Xt]=wt[pr]=wt[No]=wt[ki]=wt[mr]=wt[ar]=wt[ml]=wt[Cl]=wt[El]=wt[Il]=wt[bl]=wt[be]=wt[Ge]=wt[St]=wt[Ao]=wt[er]=wt[xo]=wt[La]=wt[wl]=wt[Ol]=wt[yl]=wt[Ll]=!0,wt[$r]=wt[Ri]=wt[So]=!1;var nm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},rm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},im={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},om={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},am=parseFloat,sm=parseInt,a_=typeof vs=="object"&&vs&&vs.Object===Object&&vs,lm=typeof self=="object"&&self&&self.Object===Object&&self,zt=a_||lm||Function("return this")(),kl=e&&!e.nodeType&&e,si=kl&&!0&&t&&!t.nodeType&&t,s_=si&&si.exports===kl,Gl=s_&&a_.process,Hn=function(){try{var j=si&&si.require&&si.require("util").types;return j||Gl&&Gl.binding&&Gl.binding("util")}catch{}}(),l_=Hn&&Hn.isArrayBuffer,c_=Hn&&Hn.isDate,u_=Hn&&Hn.isMap,d_=Hn&&Hn.isRegExp,__=Hn&&Hn.isSet,f_=Hn&&Hn.isTypedArray;function Ln(j,J,X){switch(X.length){case 0:return j.call(J);case 1:return j.call(J,X[0]);case 2:return j.call(J,X[0],X[1]);case 3:return j.call(J,X[0],X[1],X[2])}return j.apply(J,X)}function cm(j,J,X,ye){for(var je=-1,ft=j==null?0:j.length;++je<ft;){var Ut=j[je];J(ye,Ut,X(Ut),j)}return ye}function Pn(j,J){for(var X=-1,ye=j==null?0:j.length;++X<ye&&J(j[X],X,j)!==!1;);return j}function um(j,J){for(var X=j==null?0:j.length;X--&&J(j[X],X,j)!==!1;);return j}function g_(j,J){for(var X=-1,ye=j==null?0:j.length;++X<ye;)if(!J(j[X],X,j))return!1;return!0}function Fr(j,J){for(var X=-1,ye=j==null?0:j.length,je=0,ft=[];++X<ye;){var Ut=j[X];J(Ut,X,j)&&(ft[je++]=Ut)}return ft}function Na(j,J){var X=j==null?0:j.length;return!!X&&Mi(j,J,0)>-1}function Ml(j,J,X){for(var ye=-1,je=j==null?0:j.length;++ye<je;)if(X(J,j[ye]))return!0;return!1}function xt(j,J){for(var X=-1,ye=j==null?0:j.length,je=Array(ye);++X<ye;)je[X]=J(j[X],X,j);return je}function Ur(j,J){for(var X=-1,ye=J.length,je=j.length;++X<ye;)j[je+X]=J[X];return j}function $l(j,J,X,ye){var je=-1,ft=j==null?0:j.length;for(ye&&ft&&(X=j[++je]);++je<ft;)X=J(X,j[je],je,j);return X}function dm(j,J,X,ye){var je=j==null?0:j.length;for(ye&&je&&(X=j[--je]);je--;)X=J(X,j[je],je,j);return X}function Fl(j,J){for(var X=-1,ye=j==null?0:j.length;++X<ye;)if(J(j[X],X,j))return!0;return!1}var _m=Ul("length");function fm(j){return j.split("")}function gm(j){return j.match(bp)||[]}function h_(j,J,X){var ye;return X(j,function(je,ft,Ut){if(J(je,ft,Ut))return ye=ft,!1}),ye}function Ta(j,J,X,ye){for(var je=j.length,ft=X+(ye?1:-1);ye?ft--:++ft<je;)if(J(j[ft],ft,j))return ft;return-1}function Mi(j,J,X){return J===J?Lm(j,J,X):Ta(j,v_,X)}function hm(j,J,X,ye){for(var je=X-1,ft=j.length;++je<ft;)if(ye(j[je],J))return je;return-1}function v_(j){return j!==j}function p_(j,J){var X=j==null?0:j.length;return X?Pl(j,J)/X:_t}function Ul(j){return function(J){return J==null?n:J[j]}}function Hl(j){return function(J){return j==null?n:j[J]}}function m_(j,J,X,ye,je){return je(j,function(ft,Ut,It){X=ye?(ye=!1,ft):J(X,ft,Ut,It)}),X}function vm(j,J){var X=j.length;for(j.sort(J);X--;)j[X]=j[X].value;return j}function Pl(j,J){for(var X,ye=-1,je=j.length;++ye<je;){var ft=J(j[ye]);ft!==n&&(X=X===n?ft:X+ft)}return X}function Bl(j,J){for(var X=-1,ye=Array(j);++X<j;)ye[X]=J(X);return ye}function pm(j,J){return xt(J,function(X){return[X,j[X]]})}function C_(j){return j&&j.slice(0,w_(j)+1).replace(xl,"")}function An(j){return function(J){return j(J)}}function Wl(j,J){return xt(J,function(X){return j[X]})}function To(j,J){return j.has(J)}function E_(j,J){for(var X=-1,ye=j.length;++X<ye&&Mi(J,j[X],0)>-1;);return X}function I_(j,J){for(var X=j.length;X--&&Mi(J,j[X],0)>-1;);return X}function mm(j,J){for(var X=j.length,ye=0;X--;)j[X]===J&&++ye;return ye}var Cm=Hl(nm),Em=Hl(rm);function Im(j){return"\\"+om[j]}function bm(j,J){return j==null?n:j[J]}function $i(j){return Qp.test(j)}function wm(j){return Jp.test(j)}function Om(j){for(var J,X=[];!(J=j.next()).done;)X.push(J.value);return X}function Yl(j){var J=-1,X=Array(j.size);return j.forEach(function(ye,je){X[++J]=[je,ye]}),X}function b_(j,J){return function(X){return j(J(X))}}function Hr(j,J){for(var X=-1,ye=j.length,je=0,ft=[];++X<ye;){var Ut=j[X];(Ut===J||Ut===g)&&(j[X]=g,ft[je++]=X)}return ft}function Da(j){var J=-1,X=Array(j.size);return j.forEach(function(ye){X[++J]=ye}),X}function ym(j){var J=-1,X=Array(j.size);return j.forEach(function(ye){X[++J]=[ye,ye]}),X}function Lm(j,J,X){for(var ye=X-1,je=j.length;++ye<je;)if(j[ye]===J)return ye;return-1}function Am(j,J,X){for(var ye=X+1;ye--;)if(j[ye]===J)return ye;return ye}function Fi(j){return $i(j)?Sm(j):_m(j)}function tr(j){return $i(j)?Nm(j):fm(j)}function w_(j){for(var J=j.length;J--&&mp.test(j.charAt(J)););return J}var xm=Hl(im);function Sm(j){for(var J=Rl.lastIndex=0;Rl.test(j);)++J;return J}function Nm(j){return j.match(Rl)||[]}function Tm(j){return j.match(Zp)||[]}var Dm=function j(J){J=J==null?zt:Ui.defaults(zt.Object(),J,Ui.pick(zt,em));var X=J.Array,ye=J.Date,je=J.Error,ft=J.Function,Ut=J.Math,It=J.Object,zl=J.RegExp,Rm=J.String,Bn=J.TypeError,Ra=X.prototype,km=ft.prototype,Hi=It.prototype,ka=J["__core-js_shared__"],Ga=km.toString,pt=Hi.hasOwnProperty,Gm=0,O_=function(){var o=/[^.]+$/.exec(ka&&ka.keys&&ka.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Ma=Hi.toString,Mm=Ga.call(It),$m=zt._,Fm=zl("^"+Ga.call(pt).replace(Al,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$a=s_?J.Buffer:n,Pr=J.Symbol,Fa=J.Uint8Array,y_=$a?$a.allocUnsafe:n,Ua=b_(It.getPrototypeOf,It),L_=It.create,A_=Hi.propertyIsEnumerable,Ha=Ra.splice,x_=Pr?Pr.isConcatSpreadable:n,Do=Pr?Pr.iterator:n,li=Pr?Pr.toStringTag:n,Pa=function(){try{var o=fi(It,"defineProperty");return o({},"",{}),o}catch{}}(),Um=J.clearTimeout!==zt.clearTimeout&&J.clearTimeout,Hm=ye&&ye.now!==zt.Date.now&&ye.now,Pm=J.setTimeout!==zt.setTimeout&&J.setTimeout,Ba=Ut.ceil,Wa=Ut.floor,jl=It.getOwnPropertySymbols,Bm=$a?$a.isBuffer:n,S_=J.isFinite,Wm=Ra.join,Ym=b_(It.keys,It),Ht=Ut.max,Zt=Ut.min,zm=ye.now,jm=J.parseInt,N_=Ut.random,Vm=Ra.reverse,Vl=fi(J,"DataView"),Ro=fi(J,"Map"),ql=fi(J,"Promise"),Pi=fi(J,"Set"),ko=fi(J,"WeakMap"),Go=fi(It,"create"),Ya=ko&&new ko,Bi={},qm=gi(Vl),Km=gi(Ro),Xm=gi(ql),Zm=gi(Pi),Qm=gi(ko),za=Pr?Pr.prototype:n,Mo=za?za.valueOf:n,T_=za?za.toString:n;function y(o){if(Dt(o)&&!Ke(o)&&!(o instanceof ot)){if(o instanceof Wn)return o;if(pt.call(o,"__wrapped__"))return Rf(o)}return new Wn(o)}var Wi=function(){function o(){}return function(l){if(!Nt(l))return{};if(L_)return L_(l);o.prototype=l;var d=new o;return o.prototype=n,d}}();function ja(){}function Wn(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:_p,evaluate:fp,interpolate:Hd,variable:"",imports:{_:y}},y.prototype=ja.prototype,y.prototype.constructor=y,Wn.prototype=Wi(ja.prototype),Wn.prototype.constructor=Wn;function ot(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function Jm(){var o=new ot(this.__wrapped__);return o.__actions__=pn(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=pn(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=pn(this.__views__),o}function e1(){if(this.__filtered__){var o=new ot(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function t1(){var o=this.__wrapped__.value(),l=this.__dir__,d=Ke(o),E=l<0,O=d?o.length:0,L=f0(0,O,this.__views__),G=L.start,P=L.end,V=P-G,ae=E?P:G-1,se=this.__iteratees__,ue=se.length,Ee=0,Ne=Zt(V,this.__takeCount__);if(!d||!E&&O==V&&Ne==V)return tf(o,this.__actions__);var Ue=[];e:for(;V--&&Ee<Ne;){ae+=l;for(var et=-1,He=o[ae];++et<ue;){var it=se[et],at=it.iteratee,Nn=it.type,rn=at(He);if(Nn==Ce)He=rn;else if(!rn){if(Nn==me)continue e;break e}}Ue[Ee++]=He}return Ue}ot.prototype=Wi(ja.prototype),ot.prototype.constructor=ot;function ci(o){var l=-1,d=o==null?0:o.length;for(this.clear();++l<d;){var E=o[l];this.set(E[0],E[1])}}function n1(){this.__data__=Go?Go(null):{},this.size=0}function r1(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function i1(o){var l=this.__data__;if(Go){var d=l[o];return d===u?n:d}return pt.call(l,o)?l[o]:n}function o1(o){var l=this.__data__;return Go?l[o]!==n:pt.call(l,o)}function a1(o,l){var d=this.__data__;return this.size+=this.has(o)?0:1,d[o]=Go&&l===n?u:l,this}ci.prototype.clear=n1,ci.prototype.delete=r1,ci.prototype.get=i1,ci.prototype.has=o1,ci.prototype.set=a1;function Cr(o){var l=-1,d=o==null?0:o.length;for(this.clear();++l<d;){var E=o[l];this.set(E[0],E[1])}}function s1(){this.__data__=[],this.size=0}function l1(o){var l=this.__data__,d=Va(l,o);if(d<0)return!1;var E=l.length-1;return d==E?l.pop():Ha.call(l,d,1),--this.size,!0}function c1(o){var l=this.__data__,d=Va(l,o);return d<0?n:l[d][1]}function u1(o){return Va(this.__data__,o)>-1}function d1(o,l){var d=this.__data__,E=Va(d,o);return E<0?(++this.size,d.push([o,l])):d[E][1]=l,this}Cr.prototype.clear=s1,Cr.prototype.delete=l1,Cr.prototype.get=c1,Cr.prototype.has=u1,Cr.prototype.set=d1;function Er(o){var l=-1,d=o==null?0:o.length;for(this.clear();++l<d;){var E=o[l];this.set(E[0],E[1])}}function _1(){this.size=0,this.__data__={hash:new ci,map:new(Ro||Cr),string:new ci}}function f1(o){var l=os(this,o).delete(o);return this.size-=l?1:0,l}function g1(o){return os(this,o).get(o)}function h1(o){return os(this,o).has(o)}function v1(o,l){var d=os(this,o),E=d.size;return d.set(o,l),this.size+=d.size==E?0:1,this}Er.prototype.clear=_1,Er.prototype.delete=f1,Er.prototype.get=g1,Er.prototype.has=h1,Er.prototype.set=v1;function ui(o){var l=-1,d=o==null?0:o.length;for(this.__data__=new Er;++l<d;)this.add(o[l])}function p1(o){return this.__data__.set(o,u),this}function m1(o){return this.__data__.has(o)}ui.prototype.add=ui.prototype.push=p1,ui.prototype.has=m1;function nr(o){var l=this.__data__=new Cr(o);this.size=l.size}function C1(){this.__data__=new Cr,this.size=0}function E1(o){var l=this.__data__,d=l.delete(o);return this.size=l.size,d}function I1(o){return this.__data__.get(o)}function b1(o){return this.__data__.has(o)}function w1(o,l){var d=this.__data__;if(d instanceof Cr){var E=d.__data__;if(!Ro||E.length<i-1)return E.push([o,l]),this.size=++d.size,this;d=this.__data__=new Er(E)}return d.set(o,l),this.size=d.size,this}nr.prototype.clear=C1,nr.prototype.delete=E1,nr.prototype.get=I1,nr.prototype.has=b1,nr.prototype.set=w1;function D_(o,l){var d=Ke(o),E=!d&&hi(o),O=!d&&!E&&jr(o),L=!d&&!E&&!O&&Vi(o),G=d||E||O||L,P=G?Bl(o.length,Rm):[],V=P.length;for(var ae in o)(l||pt.call(o,ae))&&!(G&&(ae=="length"||O&&(ae=="offset"||ae=="parent")||L&&(ae=="buffer"||ae=="byteLength"||ae=="byteOffset")||Or(ae,V)))&&P.push(ae);return P}function R_(o){var l=o.length;return l?o[oc(0,l-1)]:n}function O1(o,l){return as(pn(o),di(l,0,o.length))}function y1(o){return as(pn(o))}function Kl(o,l,d){(d!==n&&!rr(o[l],d)||d===n&&!(l in o))&&Ir(o,l,d)}function $o(o,l,d){var E=o[l];(!(pt.call(o,l)&&rr(E,d))||d===n&&!(l in o))&&Ir(o,l,d)}function Va(o,l){for(var d=o.length;d--;)if(rr(o[d][0],l))return d;return-1}function L1(o,l,d,E){return Br(o,function(O,L,G){l(E,O,d(O),G)}),E}function k_(o,l){return o&&lr(l,Bt(l),o)}function A1(o,l){return o&&lr(l,Cn(l),o)}function Ir(o,l,d){l=="__proto__"&&Pa?Pa(o,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):o[l]=d}function Xl(o,l){for(var d=-1,E=l.length,O=X(E),L=o==null;++d<E;)O[d]=L?n:Nc(o,l[d]);return O}function di(o,l,d){return o===o&&(d!==n&&(o=o<=d?o:d),l!==n&&(o=o>=l?o:l)),o}function Yn(o,l,d,E,O,L){var G,P=l&f,V=l&v,ae=l&m;if(d&&(G=O?d(o,E,O,L):d(o)),G!==n)return G;if(!Nt(o))return o;var se=Ke(o);if(se){if(G=h0(o),!P)return pn(o,G)}else{var ue=Qt(o),Ee=ue==Ri||ue==$e;if(jr(o))return of(o,P);if(ue==St||ue==Xt||Ee&&!O){if(G=V||Ee?{}:Of(o),!P)return V?i0(o,A1(G,o)):r0(o,k_(G,o))}else{if(!wt[ue])return O?o:{};G=v0(o,ue,P)}}L||(L=new nr);var Ne=L.get(o);if(Ne)return Ne;L.set(o,G),Jf(o)?o.forEach(function(He){G.add(Yn(He,l,d,He,o,L))}):Zf(o)&&o.forEach(function(He,it){G.set(it,Yn(He,l,d,it,o,L))});var Ue=ae?V?vc:hc:V?Cn:Bt,et=se?n:Ue(o);return Pn(et||o,function(He,it){et&&(it=He,He=o[it]),$o(G,it,Yn(He,l,d,it,o,L))}),G}function x1(o){var l=Bt(o);return function(d){return G_(d,o,l)}}function G_(o,l,d){var E=d.length;if(o==null)return!E;for(o=It(o);E--;){var O=d[E],L=l[O],G=o[O];if(G===n&&!(O in o)||!L(G))return!1}return!0}function M_(o,l,d){if(typeof o!="function")throw new Bn(s);return Yo(function(){o.apply(n,d)},l)}function Fo(o,l,d,E){var O=-1,L=Na,G=!0,P=o.length,V=[],ae=l.length;if(!P)return V;d&&(l=xt(l,An(d))),E?(L=Ml,G=!1):l.length>=i&&(L=To,G=!1,l=new ui(l));e:for(;++O<P;){var se=o[O],ue=d==null?se:d(se);if(se=E||se!==0?se:0,G&&ue===ue){for(var Ee=ae;Ee--;)if(l[Ee]===ue)continue e;V.push(se)}else L(l,ue,E)||V.push(se)}return V}var Br=uf(sr),$_=uf(Ql,!0);function S1(o,l){var d=!0;return Br(o,function(E,O,L){return d=!!l(E,O,L),d}),d}function qa(o,l,d){for(var E=-1,O=o.length;++E<O;){var L=o[E],G=l(L);if(G!=null&&(P===n?G===G&&!Sn(G):d(G,P)))var P=G,V=L}return V}function N1(o,l,d,E){var O=o.length;for(d=Je(d),d<0&&(d=-d>O?0:O+d),E=E===n||E>O?O:Je(E),E<0&&(E+=O),E=d>E?0:tg(E);d<E;)o[d++]=l;return o}function F_(o,l){var d=[];return Br(o,function(E,O,L){l(E,O,L)&&d.push(E)}),d}function jt(o,l,d,E,O){var L=-1,G=o.length;for(d||(d=m0),O||(O=[]);++L<G;){var P=o[L];l>0&&d(P)?l>1?jt(P,l-1,d,E,O):Ur(O,P):E||(O[O.length]=P)}return O}var Zl=df(),U_=df(!0);function sr(o,l){return o&&Zl(o,l,Bt)}function Ql(o,l){return o&&U_(o,l,Bt)}function Ka(o,l){return Fr(l,function(d){return yr(o[d])})}function _i(o,l){l=Yr(l,o);for(var d=0,E=l.length;o!=null&&d<E;)o=o[cr(l[d++])];return d&&d==E?o:n}function H_(o,l,d){var E=l(o);return Ke(o)?E:Ur(E,d(o))}function tn(o){return o==null?o===n?op:Me:li&&li in It(o)?_0(o):y0(o)}function Jl(o,l){return o>l}function T1(o,l){return o!=null&&pt.call(o,l)}function D1(o,l){return o!=null&&l in It(o)}function R1(o,l,d){return o>=Zt(l,d)&&o<Ht(l,d)}function ec(o,l,d){for(var E=d?Ml:Na,O=o[0].length,L=o.length,G=L,P=X(L),V=1/0,ae=[];G--;){var se=o[G];G&&l&&(se=xt(se,An(l))),V=Zt(se.length,V),P[G]=!d&&(l||O>=120&&se.length>=120)?new ui(G&&se):n}se=o[0];var ue=-1,Ee=P[0];e:for(;++ue<O&&ae.length<V;){var Ne=se[ue],Ue=l?l(Ne):Ne;if(Ne=d||Ne!==0?Ne:0,!(Ee?To(Ee,Ue):E(ae,Ue,d))){for(G=L;--G;){var et=P[G];if(!(et?To(et,Ue):E(o[G],Ue,d)))continue e}Ee&&Ee.push(Ue),ae.push(Ne)}}return ae}function k1(o,l,d,E){return sr(o,function(O,L,G){l(E,d(O),L,G)}),E}function Uo(o,l,d){l=Yr(l,o),o=xf(o,l);var E=o==null?o:o[cr(jn(l))];return E==null?n:Ln(E,o,d)}function P_(o){return Dt(o)&&tn(o)==Xt}function G1(o){return Dt(o)&&tn(o)==No}function M1(o){return Dt(o)&&tn(o)==ar}function Ho(o,l,d,E,O){return o===l?!0:o==null||l==null||!Dt(o)&&!Dt(l)?o!==o&&l!==l:$1(o,l,d,E,Ho,O)}function $1(o,l,d,E,O,L){var G=Ke(o),P=Ke(l),V=G?pr:Qt(o),ae=P?pr:Qt(l);V=V==Xt?St:V,ae=ae==Xt?St:ae;var se=V==St,ue=ae==St,Ee=V==ae;if(Ee&&jr(o)){if(!jr(l))return!1;G=!0,se=!1}if(Ee&&!se)return L||(L=new nr),G||Vi(o)?If(o,l,d,E,O,L):u0(o,l,V,d,E,O,L);if(!(d&C)){var Ne=se&&pt.call(o,"__wrapped__"),Ue=ue&&pt.call(l,"__wrapped__");if(Ne||Ue){var et=Ne?o.value():o,He=Ue?l.value():l;return L||(L=new nr),O(et,He,d,E,L)}}return Ee?(L||(L=new nr),d0(o,l,d,E,O,L)):!1}function F1(o){return Dt(o)&&Qt(o)==be}function tc(o,l,d,E){var O=d.length,L=O,G=!E;if(o==null)return!L;for(o=It(o);O--;){var P=d[O];if(G&&P[2]?P[1]!==o[P[0]]:!(P[0]in o))return!1}for(;++O<L;){P=d[O];var V=P[0],ae=o[V],se=P[1];if(G&&P[2]){if(ae===n&&!(V in o))return!1}else{var ue=new nr;if(E)var Ee=E(ae,se,V,o,l,ue);if(!(Ee===n?Ho(se,ae,C|I,E,ue):Ee))return!1}}return!0}function B_(o){if(!Nt(o)||E0(o))return!1;var l=yr(o)?Fm:xp;return l.test(gi(o))}function U1(o){return Dt(o)&&tn(o)==Ao}function H1(o){return Dt(o)&&Qt(o)==er}function P1(o){return Dt(o)&&_s(o.length)&&!!At[tn(o)]}function W_(o){return typeof o=="function"?o:o==null?En:typeof o=="object"?Ke(o)?j_(o[0],o[1]):z_(o):_g(o)}function nc(o){if(!Wo(o))return Ym(o);var l=[];for(var d in It(o))pt.call(o,d)&&d!="constructor"&&l.push(d);return l}function B1(o){if(!Nt(o))return O0(o);var l=Wo(o),d=[];for(var E in o)E=="constructor"&&(l||!pt.call(o,E))||d.push(E);return d}function rc(o,l){return o<l}function Y_(o,l){var d=-1,E=mn(o)?X(o.length):[];return Br(o,function(O,L,G){E[++d]=l(O,L,G)}),E}function z_(o){var l=mc(o);return l.length==1&&l[0][2]?Lf(l[0][0],l[0][1]):function(d){return d===o||tc(d,o,l)}}function j_(o,l){return Ec(o)&&yf(l)?Lf(cr(o),l):function(d){var E=Nc(d,o);return E===n&&E===l?Tc(d,o):Ho(l,E,C|I)}}function Xa(o,l,d,E,O){o!==l&&Zl(l,function(L,G){if(O||(O=new nr),Nt(L))W1(o,l,G,d,Xa,E,O);else{var P=E?E(bc(o,G),L,G+"",o,l,O):n;P===n&&(P=L),Kl(o,G,P)}},Cn)}function W1(o,l,d,E,O,L,G){var P=bc(o,d),V=bc(l,d),ae=G.get(V);if(ae){Kl(o,d,ae);return}var se=L?L(P,V,d+"",o,l,G):n,ue=se===n;if(ue){var Ee=Ke(V),Ne=!Ee&&jr(V),Ue=!Ee&&!Ne&&Vi(V);se=V,Ee||Ne||Ue?Ke(P)?se=P:kt(P)?se=pn(P):Ne?(ue=!1,se=of(V,!0)):Ue?(ue=!1,se=af(V,!0)):se=[]:zo(V)||hi(V)?(se=P,hi(P)?se=ng(P):(!Nt(P)||yr(P))&&(se=Of(V))):ue=!1}ue&&(G.set(V,se),O(se,V,E,L,G),G.delete(V)),Kl(o,d,se)}function V_(o,l){var d=o.length;if(d)return l+=l<0?d:0,Or(l,d)?o[l]:n}function q_(o,l,d){l.length?l=xt(l,function(L){return Ke(L)?function(G){return _i(G,L.length===1?L[0]:L)}:L}):l=[En];var E=-1;l=xt(l,An(Fe()));var O=Y_(o,function(L,G,P){var V=xt(l,function(ae){return ae(L)});return{criteria:V,index:++E,value:L}});return vm(O,function(L,G){return n0(L,G,d)})}function Y1(o,l){return K_(o,l,function(d,E){return Tc(o,E)})}function K_(o,l,d){for(var E=-1,O=l.length,L={};++E<O;){var G=l[E],P=_i(o,G);d(P,G)&&Po(L,Yr(G,o),P)}return L}function z1(o){return function(l){return _i(l,o)}}function ic(o,l,d,E){var O=E?hm:Mi,L=-1,G=l.length,P=o;for(o===l&&(l=pn(l)),d&&(P=xt(o,An(d)));++L<G;)for(var V=0,ae=l[L],se=d?d(ae):ae;(V=O(P,se,V,E))>-1;)P!==o&&Ha.call(P,V,1),Ha.call(o,V,1);return o}function X_(o,l){for(var d=o?l.length:0,E=d-1;d--;){var O=l[d];if(d==E||O!==L){var L=O;Or(O)?Ha.call(o,O,1):lc(o,O)}}return o}function oc(o,l){return o+Wa(N_()*(l-o+1))}function j1(o,l,d,E){for(var O=-1,L=Ht(Ba((l-o)/(d||1)),0),G=X(L);L--;)G[E?L:++O]=o,o+=d;return G}function ac(o,l){var d="";if(!o||l<1||l>xe)return d;do l%2&&(d+=o),l=Wa(l/2),l&&(o+=o);while(l);return d}function tt(o,l){return wc(Af(o,l,En),o+"")}function V1(o){return R_(qi(o))}function q1(o,l){var d=qi(o);return as(d,di(l,0,d.length))}function Po(o,l,d,E){if(!Nt(o))return o;l=Yr(l,o);for(var O=-1,L=l.length,G=L-1,P=o;P!=null&&++O<L;){var V=cr(l[O]),ae=d;if(V==="__proto__"||V==="constructor"||V==="prototype")return o;if(O!=G){var se=P[V];ae=E?E(se,V,P):n,ae===n&&(ae=Nt(se)?se:Or(l[O+1])?[]:{})}$o(P,V,ae),P=P[V]}return o}var Z_=Ya?function(o,l){return Ya.set(o,l),o}:En,K1=Pa?function(o,l){return Pa(o,"toString",{configurable:!0,enumerable:!1,value:Rc(l),writable:!0})}:En;function X1(o){return as(qi(o))}function zn(o,l,d){var E=-1,O=o.length;l<0&&(l=-l>O?0:O+l),d=d>O?O:d,d<0&&(d+=O),O=l>d?0:d-l>>>0,l>>>=0;for(var L=X(O);++E<O;)L[E]=o[E+l];return L}function Z1(o,l){var d;return Br(o,function(E,O,L){return d=l(E,O,L),!d}),!!d}function Za(o,l,d){var E=0,O=o==null?E:o.length;if(typeof l=="number"&&l===l&&O<=Lt){for(;E<O;){var L=E+O>>>1,G=o[L];G!==null&&!Sn(G)&&(d?G<=l:G<l)?E=L+1:O=L}return O}return sc(o,l,En,d)}function sc(o,l,d,E){var O=0,L=o==null?0:o.length;if(L===0)return 0;l=d(l);for(var G=l!==l,P=l===null,V=Sn(l),ae=l===n;O<L;){var se=Wa((O+L)/2),ue=d(o[se]),Ee=ue!==n,Ne=ue===null,Ue=ue===ue,et=Sn(ue);if(G)var He=E||Ue;else ae?He=Ue&&(E||Ee):P?He=Ue&&Ee&&(E||!Ne):V?He=Ue&&Ee&&!Ne&&(E||!et):Ne||et?He=!1:He=E?ue<=l:ue<l;He?O=se+1:L=se}return Zt(L,Un)}function Q_(o,l){for(var d=-1,E=o.length,O=0,L=[];++d<E;){var G=o[d],P=l?l(G):G;if(!d||!rr(P,V)){var V=P;L[O++]=G===0?0:G}}return L}function J_(o){return typeof o=="number"?o:Sn(o)?_t:+o}function xn(o){if(typeof o=="string")return o;if(Ke(o))return xt(o,xn)+"";if(Sn(o))return T_?T_.call(o):"";var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Wr(o,l,d){var E=-1,O=Na,L=o.length,G=!0,P=[],V=P;if(d)G=!1,O=Ml;else if(L>=i){var ae=l?null:l0(o);if(ae)return Da(ae);G=!1,O=To,V=new ui}else V=l?[]:P;e:for(;++E<L;){var se=o[E],ue=l?l(se):se;if(se=d||se!==0?se:0,G&&ue===ue){for(var Ee=V.length;Ee--;)if(V[Ee]===ue)continue e;l&&V.push(ue),P.push(se)}else O(V,ue,d)||(V!==P&&V.push(ue),P.push(se))}return P}function lc(o,l){return l=Yr(l,o),o=xf(o,l),o==null||delete o[cr(jn(l))]}function ef(o,l,d,E){return Po(o,l,d(_i(o,l)),E)}function Qa(o,l,d,E){for(var O=o.length,L=E?O:-1;(E?L--:++L<O)&&l(o[L],L,o););return d?zn(o,E?0:L,E?L+1:O):zn(o,E?L+1:0,E?O:L)}function tf(o,l){var d=o;return d instanceof ot&&(d=d.value()),$l(l,function(E,O){return O.func.apply(O.thisArg,Ur([E],O.args))},d)}function cc(o,l,d){var E=o.length;if(E<2)return E?Wr(o[0]):[];for(var O=-1,L=X(E);++O<E;)for(var G=o[O],P=-1;++P<E;)P!=O&&(L[O]=Fo(L[O]||G,o[P],l,d));return Wr(jt(L,1),l,d)}function nf(o,l,d){for(var E=-1,O=o.length,L=l.length,G={};++E<O;){var P=E<L?l[E]:n;d(G,o[E],P)}return G}function uc(o){return kt(o)?o:[]}function dc(o){return typeof o=="function"?o:En}function Yr(o,l){return Ke(o)?o:Ec(o,l)?[o]:Df(ht(o))}var Q1=tt;function zr(o,l,d){var E=o.length;return d=d===n?E:d,!l&&d>=E?o:zn(o,l,d)}var rf=Um||function(o){return zt.clearTimeout(o)};function of(o,l){if(l)return o.slice();var d=o.length,E=y_?y_(d):new o.constructor(d);return o.copy(E),E}function _c(o){var l=new o.constructor(o.byteLength);return new Fa(l).set(new Fa(o)),l}function J1(o,l){var d=l?_c(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.byteLength)}function e0(o){var l=new o.constructor(o.source,Pd.exec(o));return l.lastIndex=o.lastIndex,l}function t0(o){return Mo?It(Mo.call(o)):{}}function af(o,l){var d=l?_c(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.length)}function sf(o,l){if(o!==l){var d=o!==n,E=o===null,O=o===o,L=Sn(o),G=l!==n,P=l===null,V=l===l,ae=Sn(l);if(!P&&!ae&&!L&&o>l||L&&G&&V&&!P&&!ae||E&&G&&V||!d&&V||!O)return 1;if(!E&&!L&&!ae&&o<l||ae&&d&&O&&!E&&!L||P&&d&&O||!G&&O||!V)return-1}return 0}function n0(o,l,d){for(var E=-1,O=o.criteria,L=l.criteria,G=O.length,P=d.length;++E<G;){var V=sf(O[E],L[E]);if(V){if(E>=P)return V;var ae=d[E];return V*(ae=="desc"?-1:1)}}return o.index-l.index}function lf(o,l,d,E){for(var O=-1,L=o.length,G=d.length,P=-1,V=l.length,ae=Ht(L-G,0),se=X(V+ae),ue=!E;++P<V;)se[P]=l[P];for(;++O<G;)(ue||O<L)&&(se[d[O]]=o[O]);for(;ae--;)se[P++]=o[O++];return se}function cf(o,l,d,E){for(var O=-1,L=o.length,G=-1,P=d.length,V=-1,ae=l.length,se=Ht(L-P,0),ue=X(se+ae),Ee=!E;++O<se;)ue[O]=o[O];for(var Ne=O;++V<ae;)ue[Ne+V]=l[V];for(;++G<P;)(Ee||O<L)&&(ue[Ne+d[G]]=o[O++]);return ue}function pn(o,l){var d=-1,E=o.length;for(l||(l=X(E));++d<E;)l[d]=o[d];return l}function lr(o,l,d,E){var O=!d;d||(d={});for(var L=-1,G=l.length;++L<G;){var P=l[L],V=E?E(d[P],o[P],P,d,o):n;V===n&&(V=o[P]),O?Ir(d,P,V):$o(d,P,V)}return d}function r0(o,l){return lr(o,Cc(o),l)}function i0(o,l){return lr(o,bf(o),l)}function Ja(o,l){return function(d,E){var O=Ke(d)?cm:L1,L=l?l():{};return O(d,o,Fe(E,2),L)}}function Yi(o){return tt(function(l,d){var E=-1,O=d.length,L=O>1?d[O-1]:n,G=O>2?d[2]:n;for(L=o.length>3&&typeof L=="function"?(O--,L):n,G&&nn(d[0],d[1],G)&&(L=O<3?n:L,O=1),l=It(l);++E<O;){var P=d[E];P&&o(l,P,E,L)}return l})}function uf(o,l){return function(d,E){if(d==null)return d;if(!mn(d))return o(d,E);for(var O=d.length,L=l?O:-1,G=It(d);(l?L--:++L<O)&&E(G[L],L,G)!==!1;);return d}}function df(o){return function(l,d,E){for(var O=-1,L=It(l),G=E(l),P=G.length;P--;){var V=G[o?P:++O];if(d(L[V],V,L)===!1)break}return l}}function o0(o,l,d){var E=l&w,O=Bo(o);function L(){var G=this&&this!==zt&&this instanceof L?O:o;return G.apply(E?d:this,arguments)}return L}function _f(o){return function(l){l=ht(l);var d=$i(l)?tr(l):n,E=d?d[0]:l.charAt(0),O=d?zr(d,1).join(""):l.slice(1);return E[o]()+O}}function zi(o){return function(l){return $l(ug(cg(l).replace(Kp,"")),o,"")}}function Bo(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=Wi(o.prototype),E=o.apply(d,l);return Nt(E)?E:d}}function a0(o,l,d){var E=Bo(o);function O(){for(var L=arguments.length,G=X(L),P=L,V=ji(O);P--;)G[P]=arguments[P];var ae=L<3&&G[0]!==V&&G[L-1]!==V?[]:Hr(G,V);if(L-=ae.length,L<d)return pf(o,l,es,O.placeholder,n,G,ae,n,n,d-L);var se=this&&this!==zt&&this instanceof O?E:o;return Ln(se,this,G)}return O}function ff(o){return function(l,d,E){var O=It(l);if(!mn(l)){var L=Fe(d,3);l=Bt(l),d=function(P){return L(O[P],P,O)}}var G=o(l,d,E);return G>-1?O[L?l[G]:G]:n}}function gf(o){return wr(function(l){var d=l.length,E=d,O=Wn.prototype.thru;for(o&&l.reverse();E--;){var L=l[E];if(typeof L!="function")throw new Bn(s);if(O&&!G&&is(L)=="wrapper")var G=new Wn([],!0)}for(E=G?E:d;++E<d;){L=l[E];var P=is(L),V=P=="wrapper"?pc(L):n;V&&Ic(V[0])&&V[1]==(W|R|k|K)&&!V[4].length&&V[9]==1?G=G[is(V[0])].apply(G,V[3]):G=L.length==1&&Ic(L)?G[P]():G.thru(L)}return function(){var ae=arguments,se=ae[0];if(G&&ae.length==1&&Ke(se))return G.plant(se).value();for(var ue=0,Ee=d?l[ue].apply(this,ae):se;++ue<d;)Ee=l[ue].call(this,Ee);return Ee}})}function es(o,l,d,E,O,L,G,P,V,ae){var se=l&W,ue=l&w,Ee=l&b,Ne=l&(R|$),Ue=l&re,et=Ee?n:Bo(o);function He(){for(var it=arguments.length,at=X(it),Nn=it;Nn--;)at[Nn]=arguments[Nn];if(Ne)var rn=ji(He),Tn=mm(at,rn);if(E&&(at=lf(at,E,O,Ne)),L&&(at=cf(at,L,G,Ne)),it-=Tn,Ne&&it<ae){var Gt=Hr(at,rn);return pf(o,l,es,He.placeholder,d,at,Gt,P,V,ae-it)}var ir=ue?d:this,Ar=Ee?ir[o]:o;return it=at.length,P?at=L0(at,P):Ue&&it>1&&at.reverse(),se&&V<it&&(at.length=V),this&&this!==zt&&this instanceof He&&(Ar=et||Bo(Ar)),Ar.apply(ir,at)}return He}function hf(o,l){return function(d,E){return k1(d,o,l(E),{})}}function ts(o,l){return function(d,E){var O;if(d===n&&E===n)return l;if(d!==n&&(O=d),E!==n){if(O===n)return E;typeof d=="string"||typeof E=="string"?(d=xn(d),E=xn(E)):(d=J_(d),E=J_(E)),O=o(d,E)}return O}}function fc(o){return wr(function(l){return l=xt(l,An(Fe())),tt(function(d){var E=this;return o(l,function(O){return Ln(O,E,d)})})})}function ns(o,l){l=l===n?" ":xn(l);var d=l.length;if(d<2)return d?ac(l,o):l;var E=ac(l,Ba(o/Fi(l)));return $i(l)?zr(tr(E),0,o).join(""):E.slice(0,o)}function s0(o,l,d,E){var O=l&w,L=Bo(o);function G(){for(var P=-1,V=arguments.length,ae=-1,se=E.length,ue=X(se+V),Ee=this&&this!==zt&&this instanceof G?L:o;++ae<se;)ue[ae]=E[ae];for(;V--;)ue[ae++]=arguments[++P];return Ln(Ee,O?d:this,ue)}return G}function vf(o){return function(l,d,E){return E&&typeof E!="number"&&nn(l,d,E)&&(d=E=n),l=Lr(l),d===n?(d=l,l=0):d=Lr(d),E=E===n?l<d?1:-1:Lr(E),j1(l,d,E,o)}}function rs(o){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=Vn(l),d=Vn(d)),o(l,d)}}function pf(o,l,d,E,O,L,G,P,V,ae){var se=l&R,ue=se?G:n,Ee=se?n:G,Ne=se?L:n,Ue=se?n:L;l|=se?k:Y,l&=~(se?Y:k),l&x||(l&=-4);var et=[o,l,O,Ne,ue,Ue,Ee,P,V,ae],He=d.apply(n,et);return Ic(o)&&Sf(He,et),He.placeholder=E,Nf(He,o,l)}function gc(o){var l=Ut[o];return function(d,E){if(d=Vn(d),E=E==null?0:Zt(Je(E),292),E&&S_(d)){var O=(ht(d)+"e").split("e"),L=l(O[0]+"e"+(+O[1]+E));return O=(ht(L)+"e").split("e"),+(O[0]+"e"+(+O[1]-E))}return l(d)}}var l0=Pi&&1/Da(new Pi([,-0]))[1]==lt?function(o){return new Pi(o)}:Mc;function mf(o){return function(l){var d=Qt(l);return d==be?Yl(l):d==er?ym(l):pm(l,o(l))}}function br(o,l,d,E,O,L,G,P){var V=l&b;if(!V&&typeof o!="function")throw new Bn(s);var ae=E?E.length:0;if(ae||(l&=-97,E=O=n),G=G===n?G:Ht(Je(G),0),P=P===n?P:Je(P),ae-=O?O.length:0,l&Y){var se=E,ue=O;E=O=n}var Ee=V?n:pc(o),Ne=[o,l,d,E,O,se,ue,L,G,P];if(Ee&&w0(Ne,Ee),o=Ne[0],l=Ne[1],d=Ne[2],E=Ne[3],O=Ne[4],P=Ne[9]=Ne[9]===n?V?0:o.length:Ht(Ne[9]-ae,0),!P&&l&(R|$)&&(l&=-25),!l||l==w)var Ue=o0(o,l,d);else l==R||l==$?Ue=a0(o,l,P):(l==k||l==(w|k))&&!O.length?Ue=s0(o,l,d,E):Ue=es.apply(n,Ne);var et=Ee?Z_:Sf;return Nf(et(Ue,Ne),o,l)}function Cf(o,l,d,E){return o===n||rr(o,Hi[d])&&!pt.call(E,d)?l:o}function Ef(o,l,d,E,O,L){return Nt(o)&&Nt(l)&&(L.set(l,o),Xa(o,l,n,Ef,L),L.delete(l)),o}function c0(o){return zo(o)?n:o}function If(o,l,d,E,O,L){var G=d&C,P=o.length,V=l.length;if(P!=V&&!(G&&V>P))return!1;var ae=L.get(o),se=L.get(l);if(ae&&se)return ae==l&&se==o;var ue=-1,Ee=!0,Ne=d&I?new ui:n;for(L.set(o,l),L.set(l,o);++ue<P;){var Ue=o[ue],et=l[ue];if(E)var He=G?E(et,Ue,ue,l,o,L):E(Ue,et,ue,o,l,L);if(He!==n){if(He)continue;Ee=!1;break}if(Ne){if(!Fl(l,function(it,at){if(!To(Ne,at)&&(Ue===it||O(Ue,it,d,E,L)))return Ne.push(at)})){Ee=!1;break}}else if(!(Ue===et||O(Ue,et,d,E,L))){Ee=!1;break}}return L.delete(o),L.delete(l),Ee}function u0(o,l,d,E,O,L,G){switch(d){case ki:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case No:return!(o.byteLength!=l.byteLength||!L(new Fa(o),new Fa(l)));case mr:case ar:case Ge:return rr(+o,+l);case $r:return o.name==l.name&&o.message==l.message;case Ao:case xo:return o==l+"";case be:var P=Yl;case er:var V=E&C;if(P||(P=Da),o.size!=l.size&&!V)return!1;var ae=G.get(o);if(ae)return ae==l;E|=I,G.set(o,l);var se=If(P(o),P(l),E,O,L,G);return G.delete(o),se;case La:if(Mo)return Mo.call(o)==Mo.call(l)}return!1}function d0(o,l,d,E,O,L){var G=d&C,P=hc(o),V=P.length,ae=hc(l),se=ae.length;if(V!=se&&!G)return!1;for(var ue=V;ue--;){var Ee=P[ue];if(!(G?Ee in l:pt.call(l,Ee)))return!1}var Ne=L.get(o),Ue=L.get(l);if(Ne&&Ue)return Ne==l&&Ue==o;var et=!0;L.set(o,l),L.set(l,o);for(var He=G;++ue<V;){Ee=P[ue];var it=o[Ee],at=l[Ee];if(E)var Nn=G?E(at,it,Ee,l,o,L):E(it,at,Ee,o,l,L);if(!(Nn===n?it===at||O(it,at,d,E,L):Nn)){et=!1;break}He||(He=Ee=="constructor")}if(et&&!He){var rn=o.constructor,Tn=l.constructor;rn!=Tn&&"constructor"in o&&"constructor"in l&&!(typeof rn=="function"&&rn instanceof rn&&typeof Tn=="function"&&Tn instanceof Tn)&&(et=!1)}return L.delete(o),L.delete(l),et}function wr(o){return wc(Af(o,n,Mf),o+"")}function hc(o){return H_(o,Bt,Cc)}function vc(o){return H_(o,Cn,bf)}var pc=Ya?function(o){return Ya.get(o)}:Mc;function is(o){for(var l=o.name+"",d=Bi[l],E=pt.call(Bi,l)?d.length:0;E--;){var O=d[E],L=O.func;if(L==null||L==o)return O.name}return l}function ji(o){var l=pt.call(y,"placeholder")?y:o;return l.placeholder}function Fe(){var o=y.iteratee||kc;return o=o===kc?W_:o,arguments.length?o(arguments[0],arguments[1]):o}function os(o,l){var d=o.__data__;return C0(l)?d[typeof l=="string"?"string":"hash"]:d.map}function mc(o){for(var l=Bt(o),d=l.length;d--;){var E=l[d],O=o[E];l[d]=[E,O,yf(O)]}return l}function fi(o,l){var d=bm(o,l);return B_(d)?d:n}function _0(o){var l=pt.call(o,li),d=o[li];try{o[li]=n;var E=!0}catch{}var O=Ma.call(o);return E&&(l?o[li]=d:delete o[li]),O}var Cc=jl?function(o){return o==null?[]:(o=It(o),Fr(jl(o),function(l){return A_.call(o,l)}))}:$c,bf=jl?function(o){for(var l=[];o;)Ur(l,Cc(o)),o=Ua(o);return l}:$c,Qt=tn;(Vl&&Qt(new Vl(new ArrayBuffer(1)))!=ki||Ro&&Qt(new Ro)!=be||ql&&Qt(ql.resolve())!=$d||Pi&&Qt(new Pi)!=er||ko&&Qt(new ko)!=So)&&(Qt=function(o){var l=tn(o),d=l==St?o.constructor:n,E=d?gi(d):"";if(E)switch(E){case qm:return ki;case Km:return be;case Xm:return $d;case Zm:return er;case Qm:return So}return l});function f0(o,l,d){for(var E=-1,O=d.length;++E<O;){var L=d[E],G=L.size;switch(L.type){case"drop":o+=G;break;case"dropRight":l-=G;break;case"take":l=Zt(l,o+G);break;case"takeRight":o=Ht(o,l-G);break}}return{start:o,end:l}}function g0(o){var l=o.match(Ep);return l?l[1].split(Ip):[]}function wf(o,l,d){l=Yr(l,o);for(var E=-1,O=l.length,L=!1;++E<O;){var G=cr(l[E]);if(!(L=o!=null&&d(o,G)))break;o=o[G]}return L||++E!=O?L:(O=o==null?0:o.length,!!O&&_s(O)&&Or(G,O)&&(Ke(o)||hi(o)))}function h0(o){var l=o.length,d=new o.constructor(l);return l&&typeof o[0]=="string"&&pt.call(o,"index")&&(d.index=o.index,d.input=o.input),d}function Of(o){return typeof o.constructor=="function"&&!Wo(o)?Wi(Ua(o)):{}}function v0(o,l,d){var E=o.constructor;switch(l){case No:return _c(o);case mr:case ar:return new E(+o);case ki:return J1(o,d);case ml:case Cl:case El:case Il:case bl:case wl:case Ol:case yl:case Ll:return af(o,d);case be:return new E;case Ge:case xo:return new E(o);case Ao:return e0(o);case er:return new E;case La:return t0(o)}}function p0(o,l){var d=l.length;if(!d)return o;var E=d-1;return l[E]=(d>1?"& ":"")+l[E],l=l.join(d>2?", ":" "),o.replace(Cp,`{
/* [wrapped with `+l+`] */
`)}function m0(o){return Ke(o)||hi(o)||!!(x_&&o&&o[x_])}function Or(o,l){var d=typeof o;return l=l??xe,!!l&&(d=="number"||d!="symbol"&&Np.test(o))&&o>-1&&o%1==0&&o<l}function nn(o,l,d){if(!Nt(d))return!1;var E=typeof l;return(E=="number"?mn(d)&&Or(l,d.length):E=="string"&&l in d)?rr(d[l],o):!1}function Ec(o,l){if(Ke(o))return!1;var d=typeof o;return d=="number"||d=="symbol"||d=="boolean"||o==null||Sn(o)?!0:hp.test(o)||!gp.test(o)||l!=null&&o in It(l)}function C0(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function Ic(o){var l=is(o),d=y[l];if(typeof d!="function"||!(l in ot.prototype))return!1;if(o===d)return!0;var E=pc(d);return!!E&&o===E[0]}function E0(o){return!!O_&&O_ in o}var I0=ka?yr:Fc;function Wo(o){var l=o&&o.constructor,d=typeof l=="function"&&l.prototype||Hi;return o===d}function yf(o){return o===o&&!Nt(o)}function Lf(o,l){return function(d){return d==null?!1:d[o]===l&&(l!==n||o in It(d))}}function b0(o){var l=us(o,function(E){return d.size===h&&d.clear(),E}),d=l.cache;return l}function w0(o,l){var d=o[1],E=l[1],O=d|E,L=O<(w|b|W),G=E==W&&d==R||E==W&&d==K&&o[7].length<=l[8]||E==(W|K)&&l[7].length<=l[8]&&d==R;if(!(L||G))return o;E&w&&(o[2]=l[2],O|=d&w?0:x);var P=l[3];if(P){var V=o[3];o[3]=V?lf(V,P,l[4]):P,o[4]=V?Hr(o[3],g):l[4]}return P=l[5],P&&(V=o[5],o[5]=V?cf(V,P,l[6]):P,o[6]=V?Hr(o[5],g):l[6]),P=l[7],P&&(o[7]=P),E&W&&(o[8]=o[8]==null?l[8]:Zt(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=O,o}function O0(o){var l=[];if(o!=null)for(var d in It(o))l.push(d);return l}function y0(o){return Ma.call(o)}function Af(o,l,d){return l=Ht(l===n?o.length-1:l,0),function(){for(var E=arguments,O=-1,L=Ht(E.length-l,0),G=X(L);++O<L;)G[O]=E[l+O];O=-1;for(var P=X(l+1);++O<l;)P[O]=E[O];return P[l]=d(G),Ln(o,this,P)}}function xf(o,l){return l.length<2?o:_i(o,zn(l,0,-1))}function L0(o,l){for(var d=o.length,E=Zt(l.length,d),O=pn(o);E--;){var L=l[E];o[E]=Or(L,d)?O[L]:n}return o}function bc(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var Sf=Tf(Z_),Yo=Pm||function(o,l){return zt.setTimeout(o,l)},wc=Tf(K1);function Nf(o,l,d){var E=l+"";return wc(o,p0(E,A0(g0(E),d)))}function Tf(o){var l=0,d=0;return function(){var E=zm(),O=Ie-(E-d);if(d=E,O>0){if(++l>=le)return arguments[0]}else l=0;return o.apply(n,arguments)}}function as(o,l){var d=-1,E=o.length,O=E-1;for(l=l===n?E:l;++d<l;){var L=oc(d,O),G=o[L];o[L]=o[d],o[d]=G}return o.length=l,o}var Df=b0(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(vp,function(d,E,O,L){l.push(O?L.replace(Op,"$1"):E||d)}),l});function cr(o){if(typeof o=="string"||Sn(o))return o;var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function gi(o){if(o!=null){try{return Ga.call(o)}catch{}try{return o+""}catch{}}return""}function A0(o,l){return Pn(yn,function(d){var E="_."+d[0];l&d[1]&&!Na(o,E)&&o.push(E)}),o.sort()}function Rf(o){if(o instanceof ot)return o.clone();var l=new Wn(o.__wrapped__,o.__chain__);return l.__actions__=pn(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function x0(o,l,d){(d?nn(o,l,d):l===n)?l=1:l=Ht(Je(l),0);var E=o==null?0:o.length;if(!E||l<1)return[];for(var O=0,L=0,G=X(Ba(E/l));O<E;)G[L++]=zn(o,O,O+=l);return G}function S0(o){for(var l=-1,d=o==null?0:o.length,E=0,O=[];++l<d;){var L=o[l];L&&(O[E++]=L)}return O}function N0(){var o=arguments.length;if(!o)return[];for(var l=X(o-1),d=arguments[0],E=o;E--;)l[E-1]=arguments[E];return Ur(Ke(d)?pn(d):[d],jt(l,1))}var T0=tt(function(o,l){return kt(o)?Fo(o,jt(l,1,kt,!0)):[]}),D0=tt(function(o,l){var d=jn(l);return kt(d)&&(d=n),kt(o)?Fo(o,jt(l,1,kt,!0),Fe(d,2)):[]}),R0=tt(function(o,l){var d=jn(l);return kt(d)&&(d=n),kt(o)?Fo(o,jt(l,1,kt,!0),n,d):[]});function k0(o,l,d){var E=o==null?0:o.length;return E?(l=d||l===n?1:Je(l),zn(o,l<0?0:l,E)):[]}function G0(o,l,d){var E=o==null?0:o.length;return E?(l=d||l===n?1:Je(l),l=E-l,zn(o,0,l<0?0:l)):[]}function M0(o,l){return o&&o.length?Qa(o,Fe(l,3),!0,!0):[]}function $0(o,l){return o&&o.length?Qa(o,Fe(l,3),!0):[]}function F0(o,l,d,E){var O=o==null?0:o.length;return O?(d&&typeof d!="number"&&nn(o,l,d)&&(d=0,E=O),N1(o,l,d,E)):[]}function kf(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=d==null?0:Je(d);return O<0&&(O=Ht(E+O,0)),Ta(o,Fe(l,3),O)}function Gf(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=E-1;return d!==n&&(O=Je(d),O=d<0?Ht(E+O,0):Zt(O,E-1)),Ta(o,Fe(l,3),O,!0)}function Mf(o){var l=o==null?0:o.length;return l?jt(o,1):[]}function U0(o){var l=o==null?0:o.length;return l?jt(o,lt):[]}function H0(o,l){var d=o==null?0:o.length;return d?(l=l===n?1:Je(l),jt(o,l)):[]}function P0(o){for(var l=-1,d=o==null?0:o.length,E={};++l<d;){var O=o[l];E[O[0]]=O[1]}return E}function $f(o){return o&&o.length?o[0]:n}function B0(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=d==null?0:Je(d);return O<0&&(O=Ht(E+O,0)),Mi(o,l,O)}function W0(o){var l=o==null?0:o.length;return l?zn(o,0,-1):[]}var Y0=tt(function(o){var l=xt(o,uc);return l.length&&l[0]===o[0]?ec(l):[]}),z0=tt(function(o){var l=jn(o),d=xt(o,uc);return l===jn(d)?l=n:d.pop(),d.length&&d[0]===o[0]?ec(d,Fe(l,2)):[]}),j0=tt(function(o){var l=jn(o),d=xt(o,uc);return l=typeof l=="function"?l:n,l&&d.pop(),d.length&&d[0]===o[0]?ec(d,n,l):[]});function V0(o,l){return o==null?"":Wm.call(o,l)}function jn(o){var l=o==null?0:o.length;return l?o[l-1]:n}function q0(o,l,d){var E=o==null?0:o.length;if(!E)return-1;var O=E;return d!==n&&(O=Je(d),O=O<0?Ht(E+O,0):Zt(O,E-1)),l===l?Am(o,l,O):Ta(o,v_,O,!0)}function K0(o,l){return o&&o.length?V_(o,Je(l)):n}var X0=tt(Ff);function Ff(o,l){return o&&o.length&&l&&l.length?ic(o,l):o}function Z0(o,l,d){return o&&o.length&&l&&l.length?ic(o,l,Fe(d,2)):o}function Q0(o,l,d){return o&&o.length&&l&&l.length?ic(o,l,n,d):o}var J0=wr(function(o,l){var d=o==null?0:o.length,E=Xl(o,l);return X_(o,xt(l,function(O){return Or(O,d)?+O:O}).sort(sf)),E});function eC(o,l){var d=[];if(!(o&&o.length))return d;var E=-1,O=[],L=o.length;for(l=Fe(l,3);++E<L;){var G=o[E];l(G,E,o)&&(d.push(G),O.push(E))}return X_(o,O),d}function Oc(o){return o==null?o:Vm.call(o)}function tC(o,l,d){var E=o==null?0:o.length;return E?(d&&typeof d!="number"&&nn(o,l,d)?(l=0,d=E):(l=l==null?0:Je(l),d=d===n?E:Je(d)),zn(o,l,d)):[]}function nC(o,l){return Za(o,l)}function rC(o,l,d){return sc(o,l,Fe(d,2))}function iC(o,l){var d=o==null?0:o.length;if(d){var E=Za(o,l);if(E<d&&rr(o[E],l))return E}return-1}function oC(o,l){return Za(o,l,!0)}function aC(o,l,d){return sc(o,l,Fe(d,2),!0)}function sC(o,l){var d=o==null?0:o.length;if(d){var E=Za(o,l,!0)-1;if(rr(o[E],l))return E}return-1}function lC(o){return o&&o.length?Q_(o):[]}function cC(o,l){return o&&o.length?Q_(o,Fe(l,2)):[]}function uC(o){var l=o==null?0:o.length;return l?zn(o,1,l):[]}function dC(o,l,d){return o&&o.length?(l=d||l===n?1:Je(l),zn(o,0,l<0?0:l)):[]}function _C(o,l,d){var E=o==null?0:o.length;return E?(l=d||l===n?1:Je(l),l=E-l,zn(o,l<0?0:l,E)):[]}function fC(o,l){return o&&o.length?Qa(o,Fe(l,3),!1,!0):[]}function gC(o,l){return o&&o.length?Qa(o,Fe(l,3)):[]}var hC=tt(function(o){return Wr(jt(o,1,kt,!0))}),vC=tt(function(o){var l=jn(o);return kt(l)&&(l=n),Wr(jt(o,1,kt,!0),Fe(l,2))}),pC=tt(function(o){var l=jn(o);return l=typeof l=="function"?l:n,Wr(jt(o,1,kt,!0),n,l)});function mC(o){return o&&o.length?Wr(o):[]}function CC(o,l){return o&&o.length?Wr(o,Fe(l,2)):[]}function EC(o,l){return l=typeof l=="function"?l:n,o&&o.length?Wr(o,n,l):[]}function yc(o){if(!(o&&o.length))return[];var l=0;return o=Fr(o,function(d){if(kt(d))return l=Ht(d.length,l),!0}),Bl(l,function(d){return xt(o,Ul(d))})}function Uf(o,l){if(!(o&&o.length))return[];var d=yc(o);return l==null?d:xt(d,function(E){return Ln(l,n,E)})}var IC=tt(function(o,l){return kt(o)?Fo(o,l):[]}),bC=tt(function(o){return cc(Fr(o,kt))}),wC=tt(function(o){var l=jn(o);return kt(l)&&(l=n),cc(Fr(o,kt),Fe(l,2))}),OC=tt(function(o){var l=jn(o);return l=typeof l=="function"?l:n,cc(Fr(o,kt),n,l)}),yC=tt(yc);function LC(o,l){return nf(o||[],l||[],$o)}function AC(o,l){return nf(o||[],l||[],Po)}var xC=tt(function(o){var l=o.length,d=l>1?o[l-1]:n;return d=typeof d=="function"?(o.pop(),d):n,Uf(o,d)});function Hf(o){var l=y(o);return l.__chain__=!0,l}function SC(o,l){return l(o),o}function ss(o,l){return l(o)}var NC=wr(function(o){var l=o.length,d=l?o[0]:0,E=this.__wrapped__,O=function(L){return Xl(L,o)};return l>1||this.__actions__.length||!(E instanceof ot)||!Or(d)?this.thru(O):(E=E.slice(d,+d+(l?1:0)),E.__actions__.push({func:ss,args:[O],thisArg:n}),new Wn(E,this.__chain__).thru(function(L){return l&&!L.length&&L.push(n),L}))});function TC(){return Hf(this)}function DC(){return new Wn(this.value(),this.__chain__)}function RC(){this.__values__===n&&(this.__values__=eg(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function kC(){return this}function GC(o){for(var l,d=this;d instanceof ja;){var E=Rf(d);E.__index__=0,E.__values__=n,l?O.__wrapped__=E:l=E;var O=E;d=d.__wrapped__}return O.__wrapped__=o,l}function MC(){var o=this.__wrapped__;if(o instanceof ot){var l=o;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:ss,args:[Oc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(Oc)}function $C(){return tf(this.__wrapped__,this.__actions__)}var FC=Ja(function(o,l,d){pt.call(o,d)?++o[d]:Ir(o,d,1)});function UC(o,l,d){var E=Ke(o)?g_:S1;return d&&nn(o,l,d)&&(l=n),E(o,Fe(l,3))}function HC(o,l){var d=Ke(o)?Fr:F_;return d(o,Fe(l,3))}var PC=ff(kf),BC=ff(Gf);function WC(o,l){return jt(ls(o,l),1)}function YC(o,l){return jt(ls(o,l),lt)}function zC(o,l,d){return d=d===n?1:Je(d),jt(ls(o,l),d)}function Pf(o,l){var d=Ke(o)?Pn:Br;return d(o,Fe(l,3))}function Bf(o,l){var d=Ke(o)?um:$_;return d(o,Fe(l,3))}var jC=Ja(function(o,l,d){pt.call(o,d)?o[d].push(l):Ir(o,d,[l])});function VC(o,l,d,E){o=mn(o)?o:qi(o),d=d&&!E?Je(d):0;var O=o.length;return d<0&&(d=Ht(O+d,0)),fs(o)?d<=O&&o.indexOf(l,d)>-1:!!O&&Mi(o,l,d)>-1}var qC=tt(function(o,l,d){var E=-1,O=typeof l=="function",L=mn(o)?X(o.length):[];return Br(o,function(G){L[++E]=O?Ln(l,G,d):Uo(G,l,d)}),L}),KC=Ja(function(o,l,d){Ir(o,d,l)});function ls(o,l){var d=Ke(o)?xt:Y_;return d(o,Fe(l,3))}function XC(o,l,d,E){return o==null?[]:(Ke(l)||(l=l==null?[]:[l]),d=E?n:d,Ke(d)||(d=d==null?[]:[d]),q_(o,l,d))}var ZC=Ja(function(o,l,d){o[d?0:1].push(l)},function(){return[[],[]]});function QC(o,l,d){var E=Ke(o)?$l:m_,O=arguments.length<3;return E(o,Fe(l,4),d,O,Br)}function JC(o,l,d){var E=Ke(o)?dm:m_,O=arguments.length<3;return E(o,Fe(l,4),d,O,$_)}function eE(o,l){var d=Ke(o)?Fr:F_;return d(o,ds(Fe(l,3)))}function tE(o){var l=Ke(o)?R_:V1;return l(o)}function nE(o,l,d){(d?nn(o,l,d):l===n)?l=1:l=Je(l);var E=Ke(o)?O1:q1;return E(o,l)}function rE(o){var l=Ke(o)?y1:X1;return l(o)}function iE(o){if(o==null)return 0;if(mn(o))return fs(o)?Fi(o):o.length;var l=Qt(o);return l==be||l==er?o.size:nc(o).length}function oE(o,l,d){var E=Ke(o)?Fl:Z1;return d&&nn(o,l,d)&&(l=n),E(o,Fe(l,3))}var aE=tt(function(o,l){if(o==null)return[];var d=l.length;return d>1&&nn(o,l[0],l[1])?l=[]:d>2&&nn(l[0],l[1],l[2])&&(l=[l[0]]),q_(o,jt(l,1),[])}),cs=Hm||function(){return zt.Date.now()};function sE(o,l){if(typeof l!="function")throw new Bn(s);return o=Je(o),function(){if(--o<1)return l.apply(this,arguments)}}function Wf(o,l,d){return l=d?n:l,l=o&&l==null?o.length:l,br(o,W,n,n,n,n,l)}function Yf(o,l){var d;if(typeof l!="function")throw new Bn(s);return o=Je(o),function(){return--o>0&&(d=l.apply(this,arguments)),o<=1&&(l=n),d}}var Lc=tt(function(o,l,d){var E=w;if(d.length){var O=Hr(d,ji(Lc));E|=k}return br(o,E,l,d,O)}),zf=tt(function(o,l,d){var E=w|b;if(d.length){var O=Hr(d,ji(zf));E|=k}return br(l,E,o,d,O)});function jf(o,l,d){l=d?n:l;var E=br(o,R,n,n,n,n,n,l);return E.placeholder=jf.placeholder,E}function Vf(o,l,d){l=d?n:l;var E=br(o,$,n,n,n,n,n,l);return E.placeholder=Vf.placeholder,E}function qf(o,l,d){var E,O,L,G,P,V,ae=0,se=!1,ue=!1,Ee=!0;if(typeof o!="function")throw new Bn(s);l=Vn(l)||0,Nt(d)&&(se=!!d.leading,ue="maxWait"in d,L=ue?Ht(Vn(d.maxWait)||0,l):L,Ee="trailing"in d?!!d.trailing:Ee);function Ne(Gt){var ir=E,Ar=O;return E=O=n,ae=Gt,G=o.apply(Ar,ir),G}function Ue(Gt){return ae=Gt,P=Yo(it,l),se?Ne(Gt):G}function et(Gt){var ir=Gt-V,Ar=Gt-ae,fg=l-ir;return ue?Zt(fg,L-Ar):fg}function He(Gt){var ir=Gt-V,Ar=Gt-ae;return V===n||ir>=l||ir<0||ue&&Ar>=L}function it(){var Gt=cs();if(He(Gt))return at(Gt);P=Yo(it,et(Gt))}function at(Gt){return P=n,Ee&&E?Ne(Gt):(E=O=n,G)}function Nn(){P!==n&&rf(P),ae=0,E=V=O=P=n}function rn(){return P===n?G:at(cs())}function Tn(){var Gt=cs(),ir=He(Gt);if(E=arguments,O=this,V=Gt,ir){if(P===n)return Ue(V);if(ue)return rf(P),P=Yo(it,l),Ne(V)}return P===n&&(P=Yo(it,l)),G}return Tn.cancel=Nn,Tn.flush=rn,Tn}var lE=tt(function(o,l){return M_(o,1,l)}),cE=tt(function(o,l,d){return M_(o,Vn(l)||0,d)});function uE(o){return br(o,re)}function us(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Bn(s);var d=function(){var E=arguments,O=l?l.apply(this,E):E[0],L=d.cache;if(L.has(O))return L.get(O);var G=o.apply(this,E);return d.cache=L.set(O,G)||L,G};return d.cache=new(us.Cache||Er),d}us.Cache=Er;function ds(o){if(typeof o!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function dE(o){return Yf(2,o)}var _E=Q1(function(o,l){l=l.length==1&&Ke(l[0])?xt(l[0],An(Fe())):xt(jt(l,1),An(Fe()));var d=l.length;return tt(function(E){for(var O=-1,L=Zt(E.length,d);++O<L;)E[O]=l[O].call(this,E[O]);return Ln(o,this,E)})}),Ac=tt(function(o,l){var d=Hr(l,ji(Ac));return br(o,k,n,l,d)}),Kf=tt(function(o,l){var d=Hr(l,ji(Kf));return br(o,Y,n,l,d)}),fE=wr(function(o,l){return br(o,K,n,n,n,l)});function gE(o,l){if(typeof o!="function")throw new Bn(s);return l=l===n?l:Je(l),tt(o,l)}function hE(o,l){if(typeof o!="function")throw new Bn(s);return l=l==null?0:Ht(Je(l),0),tt(function(d){var E=d[l],O=zr(d,0,l);return E&&Ur(O,E),Ln(o,this,O)})}function vE(o,l,d){var E=!0,O=!0;if(typeof o!="function")throw new Bn(s);return Nt(d)&&(E="leading"in d?!!d.leading:E,O="trailing"in d?!!d.trailing:O),qf(o,l,{leading:E,maxWait:l,trailing:O})}function pE(o){return Wf(o,1)}function mE(o,l){return Ac(dc(l),o)}function CE(){if(!arguments.length)return[];var o=arguments[0];return Ke(o)?o:[o]}function EE(o){return Yn(o,m)}function IE(o,l){return l=typeof l=="function"?l:n,Yn(o,m,l)}function bE(o){return Yn(o,f|m)}function wE(o,l){return l=typeof l=="function"?l:n,Yn(o,f|m,l)}function OE(o,l){return l==null||G_(o,l,Bt(l))}function rr(o,l){return o===l||o!==o&&l!==l}var yE=rs(Jl),LE=rs(function(o,l){return o>=l}),hi=P_(function(){return arguments}())?P_:function(o){return Dt(o)&&pt.call(o,"callee")&&!A_.call(o,"callee")},Ke=X.isArray,AE=l_?An(l_):G1;function mn(o){return o!=null&&_s(o.length)&&!yr(o)}function kt(o){return Dt(o)&&mn(o)}function xE(o){return o===!0||o===!1||Dt(o)&&tn(o)==mr}var jr=Bm||Fc,SE=c_?An(c_):M1;function NE(o){return Dt(o)&&o.nodeType===1&&!zo(o)}function TE(o){if(o==null)return!0;if(mn(o)&&(Ke(o)||typeof o=="string"||typeof o.splice=="function"||jr(o)||Vi(o)||hi(o)))return!o.length;var l=Qt(o);if(l==be||l==er)return!o.size;if(Wo(o))return!nc(o).length;for(var d in o)if(pt.call(o,d))return!1;return!0}function DE(o,l){return Ho(o,l)}function RE(o,l,d){d=typeof d=="function"?d:n;var E=d?d(o,l):n;return E===n?Ho(o,l,n,d):!!E}function xc(o){if(!Dt(o))return!1;var l=tn(o);return l==$r||l==Lo||typeof o.message=="string"&&typeof o.name=="string"&&!zo(o)}function kE(o){return typeof o=="number"&&S_(o)}function yr(o){if(!Nt(o))return!1;var l=tn(o);return l==Ri||l==$e||l==Jn||l==ip}function Xf(o){return typeof o=="number"&&o==Je(o)}function _s(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=xe}function Nt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function Dt(o){return o!=null&&typeof o=="object"}var Zf=u_?An(u_):F1;function GE(o,l){return o===l||tc(o,l,mc(l))}function ME(o,l,d){return d=typeof d=="function"?d:n,tc(o,l,mc(l),d)}function $E(o){return Qf(o)&&o!=+o}function FE(o){if(I0(o))throw new je(a);return B_(o)}function UE(o){return o===null}function HE(o){return o==null}function Qf(o){return typeof o=="number"||Dt(o)&&tn(o)==Ge}function zo(o){if(!Dt(o)||tn(o)!=St)return!1;var l=Ua(o);if(l===null)return!0;var d=pt.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&Ga.call(d)==Mm}var Sc=d_?An(d_):U1;function PE(o){return Xf(o)&&o>=-9007199254740991&&o<=xe}var Jf=__?An(__):H1;function fs(o){return typeof o=="string"||!Ke(o)&&Dt(o)&&tn(o)==xo}function Sn(o){return typeof o=="symbol"||Dt(o)&&tn(o)==La}var Vi=f_?An(f_):P1;function BE(o){return o===n}function WE(o){return Dt(o)&&Qt(o)==So}function YE(o){return Dt(o)&&tn(o)==ap}var zE=rs(rc),jE=rs(function(o,l){return o<=l});function eg(o){if(!o)return[];if(mn(o))return fs(o)?tr(o):pn(o);if(Do&&o[Do])return Om(o[Do]());var l=Qt(o),d=l==be?Yl:l==er?Da:qi;return d(o)}function Lr(o){if(!o)return o===0?o:0;if(o=Vn(o),o===lt||o===-1/0){var l=o<0?-1:1;return l*we}return o===o?o:0}function Je(o){var l=Lr(o),d=l%1;return l===l?d?l-d:l:0}function tg(o){return o?di(Je(o),0,ct):0}function Vn(o){if(typeof o=="number")return o;if(Sn(o))return _t;if(Nt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Nt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=C_(o);var d=Ap.test(o);return d||Sp.test(o)?sm(o.slice(2),d?2:8):Lp.test(o)?_t:+o}function ng(o){return lr(o,Cn(o))}function VE(o){return o?di(Je(o),-9007199254740991,xe):o===0?o:0}function ht(o){return o==null?"":xn(o)}var qE=Yi(function(o,l){if(Wo(l)||mn(l)){lr(l,Bt(l),o);return}for(var d in l)pt.call(l,d)&&$o(o,d,l[d])}),rg=Yi(function(o,l){lr(l,Cn(l),o)}),gs=Yi(function(o,l,d,E){lr(l,Cn(l),o,E)}),KE=Yi(function(o,l,d,E){lr(l,Bt(l),o,E)}),XE=wr(Xl);function ZE(o,l){var d=Wi(o);return l==null?d:k_(d,l)}var QE=tt(function(o,l){o=It(o);var d=-1,E=l.length,O=E>2?l[2]:n;for(O&&nn(l[0],l[1],O)&&(E=1);++d<E;)for(var L=l[d],G=Cn(L),P=-1,V=G.length;++P<V;){var ae=G[P],se=o[ae];(se===n||rr(se,Hi[ae])&&!pt.call(o,ae))&&(o[ae]=L[ae])}return o}),JE=tt(function(o){return o.push(n,Ef),Ln(ig,n,o)});function eI(o,l){return h_(o,Fe(l,3),sr)}function tI(o,l){return h_(o,Fe(l,3),Ql)}function nI(o,l){return o==null?o:Zl(o,Fe(l,3),Cn)}function rI(o,l){return o==null?o:U_(o,Fe(l,3),Cn)}function iI(o,l){return o&&sr(o,Fe(l,3))}function oI(o,l){return o&&Ql(o,Fe(l,3))}function aI(o){return o==null?[]:Ka(o,Bt(o))}function sI(o){return o==null?[]:Ka(o,Cn(o))}function Nc(o,l,d){var E=o==null?n:_i(o,l);return E===n?d:E}function lI(o,l){return o!=null&&wf(o,l,T1)}function Tc(o,l){return o!=null&&wf(o,l,D1)}var cI=hf(function(o,l,d){l!=null&&typeof l.toString!="function"&&(l=Ma.call(l)),o[l]=d},Rc(En)),uI=hf(function(o,l,d){l!=null&&typeof l.toString!="function"&&(l=Ma.call(l)),pt.call(o,l)?o[l].push(d):o[l]=[d]},Fe),dI=tt(Uo);function Bt(o){return mn(o)?D_(o):nc(o)}function Cn(o){return mn(o)?D_(o,!0):B1(o)}function _I(o,l){var d={};return l=Fe(l,3),sr(o,function(E,O,L){Ir(d,l(E,O,L),E)}),d}function fI(o,l){var d={};return l=Fe(l,3),sr(o,function(E,O,L){Ir(d,O,l(E,O,L))}),d}var gI=Yi(function(o,l,d){Xa(o,l,d)}),ig=Yi(function(o,l,d,E){Xa(o,l,d,E)}),hI=wr(function(o,l){var d={};if(o==null)return d;var E=!1;l=xt(l,function(L){return L=Yr(L,o),E||(E=L.length>1),L}),lr(o,vc(o),d),E&&(d=Yn(d,f|v|m,c0));for(var O=l.length;O--;)lc(d,l[O]);return d});function vI(o,l){return og(o,ds(Fe(l)))}var pI=wr(function(o,l){return o==null?{}:Y1(o,l)});function og(o,l){if(o==null)return{};var d=xt(vc(o),function(E){return[E]});return l=Fe(l),K_(o,d,function(E,O){return l(E,O[0])})}function mI(o,l,d){l=Yr(l,o);var E=-1,O=l.length;for(O||(O=1,o=n);++E<O;){var L=o==null?n:o[cr(l[E])];L===n&&(E=O,L=d),o=yr(L)?L.call(o):L}return o}function CI(o,l,d){return o==null?o:Po(o,l,d)}function EI(o,l,d,E){return E=typeof E=="function"?E:n,o==null?o:Po(o,l,d,E)}var ag=mf(Bt),sg=mf(Cn);function II(o,l,d){var E=Ke(o),O=E||jr(o)||Vi(o);if(l=Fe(l,4),d==null){var L=o&&o.constructor;O?d=E?new L:[]:Nt(o)?d=yr(L)?Wi(Ua(o)):{}:d={}}return(O?Pn:sr)(o,function(G,P,V){return l(d,G,P,V)}),d}function bI(o,l){return o==null?!0:lc(o,l)}function wI(o,l,d){return o==null?o:ef(o,l,dc(d))}function OI(o,l,d,E){return E=typeof E=="function"?E:n,o==null?o:ef(o,l,dc(d),E)}function qi(o){return o==null?[]:Wl(o,Bt(o))}function yI(o){return o==null?[]:Wl(o,Cn(o))}function LI(o,l,d){return d===n&&(d=l,l=n),d!==n&&(d=Vn(d),d=d===d?d:0),l!==n&&(l=Vn(l),l=l===l?l:0),di(Vn(o),l,d)}function AI(o,l,d){return l=Lr(l),d===n?(d=l,l=0):d=Lr(d),o=Vn(o),R1(o,l,d)}function xI(o,l,d){if(d&&typeof d!="boolean"&&nn(o,l,d)&&(l=d=n),d===n&&(typeof l=="boolean"?(d=l,l=n):typeof o=="boolean"&&(d=o,o=n)),o===n&&l===n?(o=0,l=1):(o=Lr(o),l===n?(l=o,o=0):l=Lr(l)),o>l){var E=o;o=l,l=E}if(d||o%1||l%1){var O=N_();return Zt(o+O*(l-o+am("1e-"+((O+"").length-1))),l)}return oc(o,l)}var SI=zi(function(o,l,d){return l=l.toLowerCase(),o+(d?lg(l):l)});function lg(o){return Dc(ht(o).toLowerCase())}function cg(o){return o=ht(o),o&&o.replace(Tp,Cm).replace(Xp,"")}function NI(o,l,d){o=ht(o),l=xn(l);var E=o.length;d=d===n?E:di(Je(d),0,E);var O=d;return d-=l.length,d>=0&&o.slice(d,O)==l}function TI(o){return o=ht(o),o&&dp.test(o)?o.replace(Ud,Em):o}function DI(o){return o=ht(o),o&&pp.test(o)?o.replace(Al,"\\$&"):o}var RI=zi(function(o,l,d){return o+(d?"-":"")+l.toLowerCase()}),kI=zi(function(o,l,d){return o+(d?" ":"")+l.toLowerCase()}),GI=_f("toLowerCase");function MI(o,l,d){o=ht(o),l=Je(l);var E=l?Fi(o):0;if(!l||E>=l)return o;var O=(l-E)/2;return ns(Wa(O),d)+o+ns(Ba(O),d)}function $I(o,l,d){o=ht(o),l=Je(l);var E=l?Fi(o):0;return l&&E<l?o+ns(l-E,d):o}function FI(o,l,d){o=ht(o),l=Je(l);var E=l?Fi(o):0;return l&&E<l?ns(l-E,d)+o:o}function UI(o,l,d){return d||l==null?l=0:l&&(l=+l),jm(ht(o).replace(xl,""),l||0)}function HI(o,l,d){return(d?nn(o,l,d):l===n)?l=1:l=Je(l),ac(ht(o),l)}function PI(){var o=arguments,l=ht(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var BI=zi(function(o,l,d){return o+(d?"_":"")+l.toLowerCase()});function WI(o,l,d){return d&&typeof d!="number"&&nn(o,l,d)&&(l=d=n),d=d===n?ct:d>>>0,d?(o=ht(o),o&&(typeof l=="string"||l!=null&&!Sc(l))&&(l=xn(l),!l&&$i(o))?zr(tr(o),0,d):o.split(l,d)):[]}var YI=zi(function(o,l,d){return o+(d?" ":"")+Dc(l)});function zI(o,l,d){return o=ht(o),d=d==null?0:di(Je(d),0,o.length),l=xn(l),o.slice(d,d+l.length)==l}function jI(o,l,d){var E=y.templateSettings;d&&nn(o,l,d)&&(l=n),o=ht(o),l=gs({},l,E,Cf);var O=gs({},l.imports,E.imports,Cf),L=Bt(O),G=Wl(O,L),P,V,ae=0,se=l.interpolate||Aa,ue="__p += '",Ee=zl((l.escape||Aa).source+"|"+se.source+"|"+(se===Hd?yp:Aa).source+"|"+(l.evaluate||Aa).source+"|$","g"),Ne="//# sourceURL="+(pt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tm+"]")+`
`;o.replace(Ee,function(He,it,at,Nn,rn,Tn){return at||(at=Nn),ue+=o.slice(ae,Tn).replace(Dp,Im),it&&(P=!0,ue+=`' +
__e(`+it+`) +
'`),rn&&(V=!0,ue+=`';
`+rn+`;
__p += '`),at&&(ue+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),ae=Tn+He.length,He}),ue+=`';
`;var Ue=pt.call(l,"variable")&&l.variable;if(!Ue)ue=`with (obj) {
`+ue+`
}
`;else if(wp.test(Ue))throw new je(c);ue=(V?ue.replace(sp,""):ue).replace(lp,"$1").replace(cp,"$1;"),ue="function("+(Ue||"obj")+`) {
`+(Ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ue+`return __p
}`;var et=dg(function(){return ft(L,Ne+"return "+ue).apply(n,G)});if(et.source=ue,xc(et))throw et;return et}function VI(o){return ht(o).toLowerCase()}function qI(o){return ht(o).toUpperCase()}function KI(o,l,d){if(o=ht(o),o&&(d||l===n))return C_(o);if(!o||!(l=xn(l)))return o;var E=tr(o),O=tr(l),L=E_(E,O),G=I_(E,O)+1;return zr(E,L,G).join("")}function XI(o,l,d){if(o=ht(o),o&&(d||l===n))return o.slice(0,w_(o)+1);if(!o||!(l=xn(l)))return o;var E=tr(o),O=I_(E,tr(l))+1;return zr(E,0,O).join("")}function ZI(o,l,d){if(o=ht(o),o&&(d||l===n))return o.replace(xl,"");if(!o||!(l=xn(l)))return o;var E=tr(o),O=E_(E,tr(l));return zr(E,O).join("")}function QI(o,l){var d=_e,E=ee;if(Nt(l)){var O="separator"in l?l.separator:O;d="length"in l?Je(l.length):d,E="omission"in l?xn(l.omission):E}o=ht(o);var L=o.length;if($i(o)){var G=tr(o);L=G.length}if(d>=L)return o;var P=d-Fi(E);if(P<1)return E;var V=G?zr(G,0,P).join(""):o.slice(0,P);if(O===n)return V+E;if(G&&(P+=V.length-P),Sc(O)){if(o.slice(P).search(O)){var ae,se=V;for(O.global||(O=zl(O.source,ht(Pd.exec(O))+"g")),O.lastIndex=0;ae=O.exec(se);)var ue=ae.index;V=V.slice(0,ue===n?P:ue)}}else if(o.indexOf(xn(O),P)!=P){var Ee=V.lastIndexOf(O);Ee>-1&&(V=V.slice(0,Ee))}return V+E}function JI(o){return o=ht(o),o&&up.test(o)?o.replace(Fd,xm):o}var eb=zi(function(o,l,d){return o+(d?" ":"")+l.toUpperCase()}),Dc=_f("toUpperCase");function ug(o,l,d){return o=ht(o),l=d?n:l,l===n?wm(o)?Tm(o):gm(o):o.match(l)||[]}var dg=tt(function(o,l){try{return Ln(o,n,l)}catch(d){return xc(d)?d:new je(d)}}),tb=wr(function(o,l){return Pn(l,function(d){d=cr(d),Ir(o,d,Lc(o[d],o))}),o});function nb(o){var l=o==null?0:o.length,d=Fe();return o=l?xt(o,function(E){if(typeof E[1]!="function")throw new Bn(s);return[d(E[0]),E[1]]}):[],tt(function(E){for(var O=-1;++O<l;){var L=o[O];if(Ln(L[0],this,E))return Ln(L[1],this,E)}})}function rb(o){return x1(Yn(o,f))}function Rc(o){return function(){return o}}function ib(o,l){return o==null||o!==o?l:o}var ob=gf(),ab=gf(!0);function En(o){return o}function kc(o){return W_(typeof o=="function"?o:Yn(o,f))}function sb(o){return z_(Yn(o,f))}function lb(o,l){return j_(o,Yn(l,f))}var cb=tt(function(o,l){return function(d){return Uo(d,o,l)}}),ub=tt(function(o,l){return function(d){return Uo(o,d,l)}});function Gc(o,l,d){var E=Bt(l),O=Ka(l,E);d==null&&!(Nt(l)&&(O.length||!E.length))&&(d=l,l=o,o=this,O=Ka(l,Bt(l)));var L=!(Nt(d)&&"chain"in d)||!!d.chain,G=yr(o);return Pn(O,function(P){var V=l[P];o[P]=V,G&&(o.prototype[P]=function(){var ae=this.__chain__;if(L||ae){var se=o(this.__wrapped__),ue=se.__actions__=pn(this.__actions__);return ue.push({func:V,args:arguments,thisArg:o}),se.__chain__=ae,se}return V.apply(o,Ur([this.value()],arguments))})}),o}function db(){return zt._===this&&(zt._=$m),this}function Mc(){}function _b(o){return o=Je(o),tt(function(l){return V_(l,o)})}var fb=fc(xt),gb=fc(g_),hb=fc(Fl);function _g(o){return Ec(o)?Ul(cr(o)):z1(o)}function vb(o){return function(l){return o==null?n:_i(o,l)}}var pb=vf(),mb=vf(!0);function $c(){return[]}function Fc(){return!1}function Cb(){return{}}function Eb(){return""}function Ib(){return!0}function bb(o,l){if(o=Je(o),o<1||o>xe)return[];var d=ct,E=Zt(o,ct);l=Fe(l),o-=ct;for(var O=Bl(E,l);++d<o;)l(d);return O}function wb(o){return Ke(o)?xt(o,cr):Sn(o)?[o]:pn(Df(ht(o)))}function Ob(o){var l=++Gm;return ht(o)+l}var yb=ts(function(o,l){return o+l},0),Lb=gc("ceil"),Ab=ts(function(o,l){return o/l},1),xb=gc("floor");function Sb(o){return o&&o.length?qa(o,En,Jl):n}function Nb(o,l){return o&&o.length?qa(o,Fe(l,2),Jl):n}function Tb(o){return p_(o,En)}function Db(o,l){return p_(o,Fe(l,2))}function Rb(o){return o&&o.length?qa(o,En,rc):n}function kb(o,l){return o&&o.length?qa(o,Fe(l,2),rc):n}var Gb=ts(function(o,l){return o*l},1),Mb=gc("round"),$b=ts(function(o,l){return o-l},0);function Fb(o){return o&&o.length?Pl(o,En):0}function Ub(o,l){return o&&o.length?Pl(o,Fe(l,2)):0}return y.after=sE,y.ary=Wf,y.assign=qE,y.assignIn=rg,y.assignInWith=gs,y.assignWith=KE,y.at=XE,y.before=Yf,y.bind=Lc,y.bindAll=tb,y.bindKey=zf,y.castArray=CE,y.chain=Hf,y.chunk=x0,y.compact=S0,y.concat=N0,y.cond=nb,y.conforms=rb,y.constant=Rc,y.countBy=FC,y.create=ZE,y.curry=jf,y.curryRight=Vf,y.debounce=qf,y.defaults=QE,y.defaultsDeep=JE,y.defer=lE,y.delay=cE,y.difference=T0,y.differenceBy=D0,y.differenceWith=R0,y.drop=k0,y.dropRight=G0,y.dropRightWhile=M0,y.dropWhile=$0,y.fill=F0,y.filter=HC,y.flatMap=WC,y.flatMapDeep=YC,y.flatMapDepth=zC,y.flatten=Mf,y.flattenDeep=U0,y.flattenDepth=H0,y.flip=uE,y.flow=ob,y.flowRight=ab,y.fromPairs=P0,y.functions=aI,y.functionsIn=sI,y.groupBy=jC,y.initial=W0,y.intersection=Y0,y.intersectionBy=z0,y.intersectionWith=j0,y.invert=cI,y.invertBy=uI,y.invokeMap=qC,y.iteratee=kc,y.keyBy=KC,y.keys=Bt,y.keysIn=Cn,y.map=ls,y.mapKeys=_I,y.mapValues=fI,y.matches=sb,y.matchesProperty=lb,y.memoize=us,y.merge=gI,y.mergeWith=ig,y.method=cb,y.methodOf=ub,y.mixin=Gc,y.negate=ds,y.nthArg=_b,y.omit=hI,y.omitBy=vI,y.once=dE,y.orderBy=XC,y.over=fb,y.overArgs=_E,y.overEvery=gb,y.overSome=hb,y.partial=Ac,y.partialRight=Kf,y.partition=ZC,y.pick=pI,y.pickBy=og,y.property=_g,y.propertyOf=vb,y.pull=X0,y.pullAll=Ff,y.pullAllBy=Z0,y.pullAllWith=Q0,y.pullAt=J0,y.range=pb,y.rangeRight=mb,y.rearg=fE,y.reject=eE,y.remove=eC,y.rest=gE,y.reverse=Oc,y.sampleSize=nE,y.set=CI,y.setWith=EI,y.shuffle=rE,y.slice=tC,y.sortBy=aE,y.sortedUniq=lC,y.sortedUniqBy=cC,y.split=WI,y.spread=hE,y.tail=uC,y.take=dC,y.takeRight=_C,y.takeRightWhile=fC,y.takeWhile=gC,y.tap=SC,y.throttle=vE,y.thru=ss,y.toArray=eg,y.toPairs=ag,y.toPairsIn=sg,y.toPath=wb,y.toPlainObject=ng,y.transform=II,y.unary=pE,y.union=hC,y.unionBy=vC,y.unionWith=pC,y.uniq=mC,y.uniqBy=CC,y.uniqWith=EC,y.unset=bI,y.unzip=yc,y.unzipWith=Uf,y.update=wI,y.updateWith=OI,y.values=qi,y.valuesIn=yI,y.without=IC,y.words=ug,y.wrap=mE,y.xor=bC,y.xorBy=wC,y.xorWith=OC,y.zip=yC,y.zipObject=LC,y.zipObjectDeep=AC,y.zipWith=xC,y.entries=ag,y.entriesIn=sg,y.extend=rg,y.extendWith=gs,Gc(y,y),y.add=yb,y.attempt=dg,y.camelCase=SI,y.capitalize=lg,y.ceil=Lb,y.clamp=LI,y.clone=EE,y.cloneDeep=bE,y.cloneDeepWith=wE,y.cloneWith=IE,y.conformsTo=OE,y.deburr=cg,y.defaultTo=ib,y.divide=Ab,y.endsWith=NI,y.eq=rr,y.escape=TI,y.escapeRegExp=DI,y.every=UC,y.find=PC,y.findIndex=kf,y.findKey=eI,y.findLast=BC,y.findLastIndex=Gf,y.findLastKey=tI,y.floor=xb,y.forEach=Pf,y.forEachRight=Bf,y.forIn=nI,y.forInRight=rI,y.forOwn=iI,y.forOwnRight=oI,y.get=Nc,y.gt=yE,y.gte=LE,y.has=lI,y.hasIn=Tc,y.head=$f,y.identity=En,y.includes=VC,y.indexOf=B0,y.inRange=AI,y.invoke=dI,y.isArguments=hi,y.isArray=Ke,y.isArrayBuffer=AE,y.isArrayLike=mn,y.isArrayLikeObject=kt,y.isBoolean=xE,y.isBuffer=jr,y.isDate=SE,y.isElement=NE,y.isEmpty=TE,y.isEqual=DE,y.isEqualWith=RE,y.isError=xc,y.isFinite=kE,y.isFunction=yr,y.isInteger=Xf,y.isLength=_s,y.isMap=Zf,y.isMatch=GE,y.isMatchWith=ME,y.isNaN=$E,y.isNative=FE,y.isNil=HE,y.isNull=UE,y.isNumber=Qf,y.isObject=Nt,y.isObjectLike=Dt,y.isPlainObject=zo,y.isRegExp=Sc,y.isSafeInteger=PE,y.isSet=Jf,y.isString=fs,y.isSymbol=Sn,y.isTypedArray=Vi,y.isUndefined=BE,y.isWeakMap=WE,y.isWeakSet=YE,y.join=V0,y.kebabCase=RI,y.last=jn,y.lastIndexOf=q0,y.lowerCase=kI,y.lowerFirst=GI,y.lt=zE,y.lte=jE,y.max=Sb,y.maxBy=Nb,y.mean=Tb,y.meanBy=Db,y.min=Rb,y.minBy=kb,y.stubArray=$c,y.stubFalse=Fc,y.stubObject=Cb,y.stubString=Eb,y.stubTrue=Ib,y.multiply=Gb,y.nth=K0,y.noConflict=db,y.noop=Mc,y.now=cs,y.pad=MI,y.padEnd=$I,y.padStart=FI,y.parseInt=UI,y.random=xI,y.reduce=QC,y.reduceRight=JC,y.repeat=HI,y.replace=PI,y.result=mI,y.round=Mb,y.runInContext=j,y.sample=tE,y.size=iE,y.snakeCase=BI,y.some=oE,y.sortedIndex=nC,y.sortedIndexBy=rC,y.sortedIndexOf=iC,y.sortedLastIndex=oC,y.sortedLastIndexBy=aC,y.sortedLastIndexOf=sC,y.startCase=YI,y.startsWith=zI,y.subtract=$b,y.sum=Fb,y.sumBy=Ub,y.template=jI,y.times=bb,y.toFinite=Lr,y.toInteger=Je,y.toLength=tg,y.toLower=VI,y.toNumber=Vn,y.toSafeInteger=VE,y.toString=ht,y.toUpper=qI,y.trim=KI,y.trimEnd=XI,y.trimStart=ZI,y.truncate=QI,y.unescape=JI,y.uniqueId=Ob,y.upperCase=eb,y.upperFirst=Dc,y.each=Pf,y.eachRight=Bf,y.first=$f,Gc(y,function(){var o={};return sr(y,function(l,d){pt.call(y.prototype,d)||(o[d]=l)}),o}(),{chain:!1}),y.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){y[o].placeholder=y}),Pn(["drop","take"],function(o,l){ot.prototype[o]=function(d){d=d===n?1:Ht(Je(d),0);var E=this.__filtered__&&!l?new ot(this):this.clone();return E.__filtered__?E.__takeCount__=Zt(d,E.__takeCount__):E.__views__.push({size:Zt(d,ct),type:o+(E.__dir__<0?"Right":"")}),E},ot.prototype[o+"Right"]=function(d){return this.reverse()[o](d).reverse()}}),Pn(["filter","map","takeWhile"],function(o,l){var d=l+1,E=d==me||d==Se;ot.prototype[o]=function(O){var L=this.clone();return L.__iteratees__.push({iteratee:Fe(O,3),type:d}),L.__filtered__=L.__filtered__||E,L}}),Pn(["head","last"],function(o,l){var d="take"+(l?"Right":"");ot.prototype[o]=function(){return this[d](1).value()[0]}}),Pn(["initial","tail"],function(o,l){var d="drop"+(l?"":"Right");ot.prototype[o]=function(){return this.__filtered__?new ot(this):this[d](1)}}),ot.prototype.compact=function(){return this.filter(En)},ot.prototype.find=function(o){return this.filter(o).head()},ot.prototype.findLast=function(o){return this.reverse().find(o)},ot.prototype.invokeMap=tt(function(o,l){return typeof o=="function"?new ot(this):this.map(function(d){return Uo(d,o,l)})}),ot.prototype.reject=function(o){return this.filter(ds(Fe(o)))},ot.prototype.slice=function(o,l){o=Je(o);var d=this;return d.__filtered__&&(o>0||l<0)?new ot(d):(o<0?d=d.takeRight(-o):o&&(d=d.drop(o)),l!==n&&(l=Je(l),d=l<0?d.dropRight(-l):d.take(l-o)),d)},ot.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},ot.prototype.toArray=function(){return this.take(ct)},sr(ot.prototype,function(o,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),O=y[E?"take"+(l=="last"?"Right":""):l],L=E||/^find/.test(l);O&&(y.prototype[l]=function(){var G=this.__wrapped__,P=E?[1]:arguments,V=G instanceof ot,ae=P[0],se=V||Ke(G),ue=function(it){var at=O.apply(y,Ur([it],P));return E&&Ee?at[0]:at};se&&d&&typeof ae=="function"&&ae.length!=1&&(V=se=!1);var Ee=this.__chain__,Ne=!!this.__actions__.length,Ue=L&&!Ee,et=V&&!Ne;if(!L&&se){G=et?G:new ot(this);var He=o.apply(G,P);return He.__actions__.push({func:ss,args:[ue],thisArg:n}),new Wn(He,Ee)}return Ue&&et?o.apply(this,P):(He=this.thru(ue),Ue?E?He.value()[0]:He.value():He)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(o){var l=Ra[o],d=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",E=/^(?:pop|shift)$/.test(o);y.prototype[o]=function(){var O=arguments;if(E&&!this.__chain__){var L=this.value();return l.apply(Ke(L)?L:[],O)}return this[d](function(G){return l.apply(Ke(G)?G:[],O)})}}),sr(ot.prototype,function(o,l){var d=y[l];if(d){var E=d.name+"";pt.call(Bi,E)||(Bi[E]=[]),Bi[E].push({name:l,func:d})}}),Bi[es(n,b).name]=[{name:"wrapper",func:n}],ot.prototype.clone=Jm,ot.prototype.reverse=e1,ot.prototype.value=t1,y.prototype.at=NC,y.prototype.chain=TC,y.prototype.commit=DC,y.prototype.next=RC,y.prototype.plant=GC,y.prototype.reverse=MC,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=$C,y.prototype.first=y.prototype.head,Do&&(y.prototype[Do]=kC),y},Ui=Dm();si?((si.exports=Ui)._=Ui,kl._=Ui):zt._=Ui}).call(aO)}(Zo,Zo.exports)),Zo.exports}var $t=sO(),B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function In(t,e,n){n!==void 0&&(t[e]=n)}function lO(t){var e,n,r,i,a,s,c,u,h,g,f,v,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(h=t.strokeWidth)!=null&&h.editable||(g=t.strokeDasharray)!=null&&g.editable||(f=t.strokeDashoffset)!=null&&f.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function ou(t){var n,r,i,a,s,c,u,h,g,f,v,m,C,I,w,b,x,R,$,k,Y,W;const e={type:t.type};return In(e,"n",(n=t.n)==null?void 0:n.value),In(e,"r",(r=t.r)==null?void 0:r.value),In(e,"height",(i=t.height)==null?void 0:i.value),In(e,"width",(a=t.width)==null?void 0:a.value),In(e,"inset",(s=t.inset)==null?void 0:s.value),In(e,"angle",(c=t.angle)==null?void 0:c.value),In(e,"fill",(u=t.fill)==null?void 0:u.value),In(e,"stroke",(h=t.stroke)==null?void 0:h.value),In(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),In(e,"strokeDasharray",(f=t.strokeDasharray)==null?void 0:f.value),In(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),In(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),In(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),In(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(b=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:b.value,shortenTail:(R=(x=t.linePathOptions)==null?void 0:x.shortenTail)==null?void 0:R.value,bezierRounding:(k=($=t.linePathOptions)==null?void 0:$.bezierRounding)==null?void 0:k.value,closeLoops:(W=(Y=t.linePathOptions)==null?void 0:Y.closeLoops)==null?void 0:W.value}),e}function cO(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const uO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},dO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},_O={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Mh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},$h={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},zs={type:"Line",strokeWidth:.125,stroke:"gray"},nd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},fO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},gO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},hO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function Sr(t){return Array.isArray?Array.isArray(t):Hh(t)==="[object Array]"}function vO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function pO(t){return t==null?"":vO(t)}function fr(t){return typeof t=="string"}function Fh(t){return typeof t=="number"}function mO(t){return t===!0||t===!1||CO(t)&&Hh(t)=="[object Boolean]"}function Uh(t){return typeof t=="object"}function CO(t){return Uh(t)&&t!==null}function kn(t){return t!=null}function zc(t){return!t.trim().length}function Hh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const EO="Incorrect 'index' type",IO=t=>`Invalid value for key ${t}`,bO=t=>`Pattern length exceeds max of ${t}.`,wO=t=>`Missing ${t} property in key`,OO=t=>`Property 'weight' in key '${t}' must be a positive integer`,wg=Object.prototype.hasOwnProperty;class yO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Ph(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ph(t){let e=null,n=null,r=null,i=1,a=null;if(fr(t)||Sr(t))r=t,e=Og(t),n=au(t);else{if(!wg.call(t,"name"))throw new Error(wO("name"));const s=t.name;if(r=s,wg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(OO(s));e=Og(s),n=au(s),a=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:a}}function Og(t){return Sr(t)?t:t.split(".")}function au(t){return Sr(t)?t.join("."):t}function LO(t,e){let n=[],r=!1;const i=(a,s,c)=>{if(kn(a))if(!s[c])n.push(a);else{let u=s[c];const h=a[u];if(!kn(h))return;if(c===s.length-1&&(fr(h)||Fh(h)||mO(h)))n.push(pO(h));else if(Sr(h)){r=!0;for(let g=0,f=h.length;g<f;g+=1)i(h[g],s,c+1)}else s.length&&i(h,s,c+1)}};return i(t,fr(e)?e.split("."):e,0),r?n:n[0]}const AO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},xO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},SO={location:0,threshold:.6,distance:100},NO={useExtendedSearch:!1,getFn:LO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...xO,...AO,...SO,...NO};const TO=/[^ ]+/g;function DO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const a=i.match(TO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class rd{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=DO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!kn(e)||zc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,a)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if(kn(s)){if(Sr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:h,value:g}=u.pop();if(kn(g))if(fr(g)&&!zc(g)){let f={v:g,i:h,n:this.norm.get(g)};c.push(f)}else Sr(g)&&g.forEach((f,v)=>{u.push({nestedArrIndex:v,value:f})})}r.$[a]=c}else if(fr(s)&&!zc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Bh(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const i=new rd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Ph)),i.setSources(e),i.create(),i}function RO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:i}=t,a=new rd({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function ps(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return i?s+c/i:c?1:s}function kO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(i=a-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const pi=32;function GO(t,e,n,{location:r=Ye.location,distance:i=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:h=Ye.ignoreLocation}={}){if(e.length>pi)throw new Error(bO(pi));const g=e.length,f=t.length,v=Math.max(0,Math.min(r,f));let m=a,C=v;const I=c>1||u,w=I?Array(f):[];let b;for(;(b=t.indexOf(e,C))>-1;){let W=ps(e,{currentLocation:b,expectedLocation:v,distance:i,ignoreLocation:h});if(m=Math.min(W,m),C=b+g,I){let K=0;for(;K<g;)w[b+K]=1,K+=1}}C=-1;let x=[],R=1,$=g+f;const k=1<<g-1;for(let W=0;W<g;W+=1){let K=0,re=$;for(;K<re;)ps(e,{errors:W,currentLocation:v+re,expectedLocation:v,distance:i,ignoreLocation:h})<=m?K=re:$=re,re=Math.floor(($-K)/2+K);$=re;let _e=Math.max(1,v-re+1),ee=s?f:Math.min(v+re,f)+g,le=Array(ee+2);le[ee+1]=(1<<W)-1;for(let me=ee;me>=_e;me-=1){let Ce=me-1,Se=n[t.charAt(Ce)];if(I&&(w[Ce]=+!!Se),le[me]=(le[me+1]<<1|1)&Se,W&&(le[me]|=(x[me+1]|x[me])<<1|1|x[me+1]),le[me]&k&&(R=ps(e,{errors:W,currentLocation:Ce,expectedLocation:v,distance:i,ignoreLocation:h}),R<=m)){if(m=R,C=Ce,C<=v)break;_e=Math.max(1,2*v-C)}}if(ps(e,{errors:W+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:h})>m)break;x=le}const Y={isMatch:C>=0,score:Math.max(.001,R)};if(I){const W=kO(w,c);W.length?u&&(Y.indices=W):Y.isMatch=!1}return Y}function MO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Wh{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:h=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:h},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(v,m)=>{this.chunks.push({pattern:v,alphabet:MO(v),startIndex:m})},f=this.pattern.length;if(f>pi){let v=0;const m=f%pi,C=f-m;for(;v<C;)g(this.pattern.substr(v,pi),v),v+=pi;if(m){const I=f-pi;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:i,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options;let g=[],f=0,v=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:w})=>{const{isMatch:b,score:x,indices:R}=GO(e,C,I,{location:i+w,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:h});b&&(v=!0),f+=x,b&&R&&(g=[...g,...R])});let m={isMatch:v,score:v?f/this.chunks.length:1};return v&&r&&(m.indices=g),m}}class Jr{constructor(e){this.pattern=e}static isMultiMatch(e){return yg(e,this.multiRegex)}static isSingleMatch(e){return yg(e,this.singleRegex)}search(){}}function yg(t,e){const n=t.match(e);return n?n[1]:null}class $O extends Jr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class FO extends Jr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class UO extends Jr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class HO extends Jr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class PO extends Jr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class BO extends Jr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Yh extends Jr{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:h=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new Wh(e,{location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class zh extends Jr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const su=[$O,zh,UO,HO,BO,PO,FO,Yh],Lg=su.length,WO=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,YO="|";function zO(t,e={}){return t.split(YO).map(n=>{let r=n.trim().split(WO).filter(a=>a&&!!a.trim()),i=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,h=-1;for(;!u&&++h<Lg;){const g=su[h];let f=g.isMultiMatch(c);f&&(i.push(new g(f,e)),u=!0)}if(!u)for(h=-1;++h<Lg;){const g=su[h];let f=g.isSingleMatch(c);if(f){i.push(new g(f,e));break}}}return i})}const jO=new Set([Yh.type,zh.type]);class VO{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:i=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:h=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:h},this.pattern=n?e:e.toLowerCase(),this.query=zO(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,h=n.length;u<h;u+=1){const g=n[u];s.length=0,a=0;for(let f=0,v=g.length;f<v;f+=1){const m=g[f],{isMatch:C,indices:I,score:w}=m.search(e);if(C){if(a+=1,c+=w,r){const b=m.constructor.type;jO.has(b)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let f={isMatch:!0,score:c/a};return r&&(f.indices=s),f}}return{isMatch:!1,score:1}}}const lu=[];function qO(...t){lu.push(...t)}function cu(t,e){for(let n=0,r=lu.length;n<r;n+=1){let i=lu[n];if(i.condition(t,e))return new i(t,e)}return new Wh(t,e)}const Ls={AND:"$and",OR:"$or"},uu={PATH:"$path",PATTERN:"$val"},du=t=>!!(t[Ls.AND]||t[Ls.OR]),KO=t=>!!t[uu.PATH],XO=t=>!Sr(t)&&Uh(t)&&!du(t),Ag=t=>({[Ls.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function jh(t,e,{auto:n=!0}={}){const r=i=>{let a=Object.keys(i);const s=KO(i);if(!s&&a.length>1&&!du(i))return r(Ag(i));if(XO(i)){const u=s?i[uu.PATH]:a[0],h=s?i[uu.PATTERN]:i[u];if(!fr(h))throw new Error(IO(u));const g={keyId:au(u),pattern:h};return n&&(g.searcher=cu(h,e)),g}let c={children:[],operator:a[0]};return a.forEach(u=>{const h=i[u];Sr(h)&&h.forEach(g=>{c.children.push(r(g))})}),c};return du(t)||(t=Ag(t)),r(t)}function ZO(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:a,score:s})=>{const c=i?i.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function QO(t,e){const n=t.matches;e.matches=[],kn(n)&&n.forEach(r=>{if(!kn(r.indices)||!r.indices.length)return;const{indices:i,value:a}=r;let s={indices:i,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function JO(t,e){e.score=t.score}function ey(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const i=[];return n&&i.push(QO),r&&i.push(JO),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(a,c)}),c})}class so{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new yO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof rd))throw new Error(EO);this._myIndex=n||Bh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){kn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,i-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=fr(e)?fr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ZO(u,{ignoreFieldNorm:c}),a&&u.sort(s),Fh(n)&&n>-1&&(u=u.slice(0,n)),ey(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=cu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:h,indices:g}=n.searchIn(a);u&&i.push({item:a,idx:s,matches:[{score:h,value:a,norm:c,indices:g}]})}),i}_searchLogical(e){const n=jh(e,this.options),r=(c,u,h)=>{if(!c.children){const{keyId:f,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(u,f),searcher:v});return m&&m.length?[{idx:h,item:u,matches:m}]:[]}const g=[];for(let f=0,v=c.children.length;f<v;f+=1){const m=c.children[f],C=r(m,u,h);if(C.length)g.push(...C);else if(c.operator===Ls.AND)return[]}return g},i=this._myIndex.records,a={},s=[];return i.forEach(({$:c,i:u})=>{if(kn(c)){let h=r(n,c,u);h.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),h.forEach(({matches:g})=>{a[u].matches.push(...g)}))}}),s}_searchObjectList(e){const n=cu(e,this.options),{keys:r,records:i}=this._myIndex,a=[];return i.forEach(({$:s,i:c})=>{if(!kn(s))return;let u=[];r.forEach((h,g)=>{u.push(...this._findMatches({key:h,value:s[g],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!kn(n))return[];let i=[];if(Sr(n))n.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:h,indices:g}=r.searchIn(a);u&&i.push({score:h,key:e,value:a,idx:s,norm:c,indices:g})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:h}=r.searchIn(a);c&&i.push({score:u,key:e,value:a,norm:s,indices:h})}return i}}so.version="7.0.0";so.createIndex=Bh;so.parseIndex=RO;so.config=Ye;so.parseQuery=jh;qO(VO);function Zr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function ty(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function ny(t){return new so(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function ry(t,e,n){const r=ty(e,n);return t.length===0?r:ny(r).search(t).map(i=>i.item)}function iy(t,e){return Zr(t,e).shape}function bn(t,e){const n=iy(t,e);return n?ou(n):void 0}function fa(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return td(e)}function ga(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return td(i)})}function oy(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return td(a)})})}function ei(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Vh(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Th(e)}function ay(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Th(r)})}function sy(t,e){const n=t.shape;return n===void 0?void 0:{...bn(e,Mt),...n}}function qh(t,e,n){return{toolId:t,cells:e,value:n}}function ly(t,e){const n=ga(e,"cells"),r=ei(e);return qh(t,n,r)}function Kh(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>Ve(a,e)&&s>=r)}function cy(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Bs(r[i-1],e)))return t;const s=Kh(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Xh(t,e){return{toolId:t,cells:e,lines:[]}}function uy(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),ys(n),{...t,cells:n};const r=n.some(a=>Ve(a,e)),i=n.some(a=>Bs(a,e));return n.length===1&&!r&&i?(n.push(e),ys(n),{...t,cells:n}):t}function dy(t,e){const n=t.cells.some(u=>Ve(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return _u(t,e);const i=t.lines[r-1],a=i.length;if(a===0&&!n)return t;if(a===0&&n)return _u(t,e);const s=Kh(i,e,!1);return(i.length===0?!0:Bs(i[a-1],e))?s>=0?(i.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),i]}):n?t:(i.push(e),{...t,lines:[...t.lines.slice(0,r-1),i]}):t}function _u(t,e){return t.cells.some(r=>Ve(r,e))?{...t,lines:[...t.lines,[e]]}:t}function _y(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function fy(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function gy(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function hy(t,e){const n=ga(e,"cells"),r=oy(e),i=Xh(t,n);return i.lines=r,i}function Zh(t,e,n=""){return{toolId:t,cells:e,value:n}}function vy(t,e,n=!1){const r=Gh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function py(t,e){return{...t,value:e}}function my(t,e){const n=ga(e,"cells"),r=ei(e);return Zh(t,n,r)}function Qh(t,e,n){return{toolId:t,cells:e,value:n}}function Cy(t,e){const n=ga(e,"cells"),r=ei(e);return Qh(t,n,r)}function Jh(t,e,n){return{toolId:t,cells:e,value:n}}function Ey(t,e){const n=ga(e,"cells"),r=ei(e);return Jh(t,n,r)}function ev(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function Iy(t,e){const n=fa(e),r=Vh(e),i=ei(e);return ev(t,n,r,i)}function tv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function by(t,e){const n=fa(e),r=ei(e);return tv(t,n,r)}function nv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function wy(t,e){const n=fa(e),r=Vh(e);return nv(t,n,r)}function rv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function Oy(t,e){const n=fa(e),r=ay(e),i=rv(t,n,Be.N);return i.directions=r,i}function iv(t,e,n=""){return{toolId:t,cell:e,value:n}}function yy(t,e){const n=fa(e),r=ei(e);return iv(t,n,r)}function Ly(t,e=""){return{toolId:t,value:e}}function Ay(t,e){const n=ei(e);return Ly(t,n)}function ha(t,e){return{...t,value:e}}class va extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const a of Object.values(r))i.push(My(a));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new va;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=Sh(r);if(a===void 0||!Object.keys(Mt).includes(a))continue;const s=i;for(const c of s){let u=null;if(Nh(a,Ps)?u=by(a,c):Vu(a)?u=wy(a,c):qu(a)?u=Oy(a,c):Ku(a)?u=Ey(a,c):Lh(a)?u=Cy(a,c):Xu(a)?u=ly(a,c):Zu(a)?u=hy(a,c):Qu(a)?u=my(a,c):la(a)?u=Iy(a,c):Kw(a)?u=Ay(a,c):Ah(a)&&(u=yy(a,c)),u!==null){n.addToDict(a);const h=$t.uniqueId(),g=sy(c,a);u.shape=g,n.addConstraint(a,h,u)}}}return n}}function id(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(Ve(a.cell,n))return[s,a]}return null}function xy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(n.every(c=>a.cells.some(u=>Ve(c,u))))return i}return null}function Sy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=a.cells[a.cells.length-1];if(Ve(n,s))return i}return null}function xg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>Ve(c,n)))return[i[0],a]}return null}function Ny(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ve(c,n)))return i;return null}function Sg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>Ve(c,n)))return[i[0],a]}return null}function Ty(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((h,g)=>Ve(h,n)&&g>0));if(c>=0)return{id:i,arrow:s,matchLineIdx:c}}return null}function Dy(t,e,n,r){const i=t.get(e);if(!i)return null;for(const a of Object.entries(i)){const s=a[1],c=a[0];if(Ve(n,s.cell)&&r===s.direction)return c}return null}function Ry(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(Ve(n,a.cell))return s}return null}function ky(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>Ve(c,n))||a.cells2.some(c=>Ve(c,n)))return[i[0],a]}return null}function Gy(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const a=i[1];r.add(a.value)}return r}function My(t){const e={};if("cells"in t){const n=t.cells.map(r=>hs(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>hs(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>hs(i)));e.lines=n}if("cell"in t){const n=hs(t.cell);e.cell=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=bn(t.toolId,Mt),r=cO(t.shape,n);r&&(e.shape=r)}return e}function Ng(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function ov(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function fu(t){const e=new Option().style;return e.color=t,e.color!==""}function jc(t){return ov(t)||fu(t)?t:fu(`#${t}`)?`#${t}`:void 0}function As(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function av(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function gu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}const Tg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function $y(t){return t in Tg?Tg[t]:null}function sv(t,e,n){if(n===null)return null;const r=$y(n);if(r===null)return null;const[i,a]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/a)}function Vc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class Fy{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Vc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Vc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Vc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===_.GIVEN?this.enterGiven(e,r):n===_.DIGIT?this.enterValue(e,r):n===_.CORNER_PM?this.enterCornerPM(e):n===_.CENTER_PM?this.enterCenterPM(e):n===_.HIGHLIGHTS?this.enterHighlight(e):n===_.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==sv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class pa{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const a=[];for(let s=0;s<n;s++){const c=new Fy(i,s);if(r){const u=sv(i,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[a,s]=[e.r+i[0],e.c+i[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return av(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),a=i.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:a,c:s}=Ys(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const h=this.grid[c][u];i.push(h),[c,u]=[c+a,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new pa(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=i.getCell(a,s);u&&Object.assign(u,c)}return i}}function Uy(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols,i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const a=r.toJSON();Object.keys(a).length&&(i.bool_constraints=a);const s=n.toJSON();return Object.keys(s).length&&(i.local_constraints=s),i}function Hy(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,i=t.valid_digits,a=t.grid,s=pa.fromJSON(e,n,a),c=t.solution,u=t.local_constraints,h=va.fromJson(u),g=t.bool_constraints,f=to.fromJson(g);return{puzzleMeta:r,solution:c,grid:s,valid_digits:i,localConstraints:h,globalConstraints:f}}var Qo=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Qo||{});const Py=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),By=()=>({type:"CLEAR"}),Wy=t=>({type:"DRAG",payload:t}),hu=t=>({type:"SET",payload:t}),Yy=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),od=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),_r=(t,e,n)=>{const r=[...t];return ys(r),{cells:r,lastCell:e,mode:n}};function zy(t,e,n){if(e===null)return od();if(n==="RESETTING")return _r([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ve(e,i));if(n==="SELECTING")return r!==-1?t:_r([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),_r(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return _r([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),_r(i,null,"DESELECTING")}return t}function jy(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ve(e,r));if(t.mode==="SELECTING")return n!==-1?t:_r([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),_r(r,null,t.mode)}return t}function Vy(t,e){return{...t,cells:e}}function qy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ve(e,i))!==-1?_r([...t.cells],e,"SELECTING"):_r([...t.cells,e],e,"SELECTING"):_r([e],e,t.mode)}function lv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return od();case"SET":return Vy(t,e.payload);case"CLICK":return zy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return jy(t,e.payload);case"ARROW_KEY":return qy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Qi(t,e){return Ve(t.p1,e.p1)&&Ve(t.p2,e.p2)||Ve(t.p1,e.p2)&&Ve(t.p2,e.p1)}function Ky(t,e){return Ve(t.p1,e.p2)&&Ve(t.p2,e.p1)}function cv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ve(t,e)}class js{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ve(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ve(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ve(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ve(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ve(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ve(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ve(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ve(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ve(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ve(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Qi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>Qi(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&Ky(r,e)&&this.draftLine.splice(n,1)}onDrag(e){cv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>Qi(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(a=>Qi(a,r));if(i!==-1){const a=this.lineMarkers.splice(i,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new js;return Object.assign(e,this),e}}const Dg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Rg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),ms=t=>({type:"ADD_CELL_MARKER",payload:t}),Xy=t=>({type:"SET_CELL_MARKERS",payload:t}),kg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),Zy=t=>({type:"DRAG",payload:t}),xs=t=>({type:"ADD_LINE_MARKERS",payload:t}),Gg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),ad=()=>({type:"RESET"});function Qy(t,e){switch(e.type){case"RESET":return new js;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function uv(){return{_undoStack:[],_redoStack:[]}}const lo=Ft(uv());function Jy(){lo.update(()=>uv())}function an(t,e=!0){lo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function eL(t,e=!0){lo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function dv(){lo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function _v(){lo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ss=Ft(new js);function Nr(t){Ss.update(e=>Qy(e,t))}const Ns=Ft(1);function vi(t,e){return{execute:()=>{Nr(t)},unExecute:()=>{Nr(e)}}}const bi=Ft(od());function Xi(t){t&&bi.update(e=>lv(e,t))}function Mg(t){t&&bi.update(e=>lv(e,t))}function tL(t,e){return{execute:()=>{Mg(t)},unExecute:()=>{Mg(e)}}}const no=Ft(),Vs=Ft(ao.SETTING),vu=Ft(!1),Kt=Ft(_.DIGIT),fv=Ft(_.DIGIT),sd=Ft(void 0),ln=Ft(new pa(9,9)),sn=Ft(st(ln).getAllCells()),Tr=Ft({}),Dr=Ft(new to),rt=Ft(new va),gr=Ft(null),gv=Ft(void 0),qs=Ft(void 0);function nL(t){Tr.update(()=>t)}function co(t){gr.update(()=>t)}function ld(t){gv.update(()=>t)}function xr(t){st(Kt)!==t&&(Kt.update(()=>t),co(null))}function rL(){const t=st(fv);t&&xr(t)}function pu(t){fv.update(()=>t)}function iL(t){st(Kt)===t&&xr(_.DIGIT)}function oL(t){rt.update(e=>(e.removeFromDict(t),e)),ld(void 0)}function Pt(t,e,n){rt.update(r=>(r.updateConstraint(t,e,n),r)),co({id:e,constraint:n})}function qc(t){const e=st(gr);if(t=t?{...t}:void 0,ld(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Pt(r,e.id,n)}function aL(t,e){const r=st(rt).get(e);if(!r)return;const i=r[t];i&&co({id:t,constraint:i})}function sL(t,e){const n=new pa(t,e);ln.update(()=>n),sd.update(()=>{}),rt.update(()=>new va),Dr.update(()=>new to),Tr.update(()=>({})),cd(void 0),sn.update(()=>n.getAllCells())}function lL(t){ln.update(()=>t.grid),Tr.update(()=>t.puzzleMeta),cd(t.solution),sd.update(()=>t.valid_digits),rt.update(()=>t.localConstraints),Dr.update(()=>t.globalConstraints),sn.update(()=>t.grid.getAllCells())}function hv(){const t=st(ln);t.resetValues(),ln.update(()=>t),sn.update(()=>t.getAllCells()),Nr(ad())}function Ts(){Jy(),Nr(ad()),xr(_.DIGIT);const t=By();Xi(t),ld(void 0),co(null)}const vv=cn([Wt,Kt,Vs],([t,e,n])=>{const r=t.hideFog,i=e;return![_.FOG,_.REGIONS].includes(i)&&!r&&n===ao.SETTING}),ma=cn([ln,Tr,Dr,rt,qs,sd],([t,e,n,r,i,a])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function cd(t){qs.update(()=>t)}var Zi=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Zi||{});const ud=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),dd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),cL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),uL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),$g=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function pv(t){rt.update(e=>(e.addToDict(t),e))}function ti(t,e){const n=st(gv);n&&(e.shape={...n}),rt.update(r=>(r.addConstraint(e.toolId,t,e),r)),co({id:t,constraint:e})}function wi(t,e){e&&rt.update(n=>(n.removeConstraint(t,e),n))}function dL(t,e){rt.update(n=>(n.setConstraints(t,e),n))}function Fg(t){t.type===Zi.ADD_LOCAL_CONSTRAINT?ti(t.payload.id,t.payload.constraint):t.type===Zi.REMOVE_LOCAL_CONSTRAINT?wi(t.payload.tool,t.payload.id):t.type===Zi.REMOVE_LOCAL_CONSTRAINT_GROUP?oL(t.payload.tool):t.type===Zi.RESTORE_LOCAL_CONSTRAINT_GROUP?dL(t.payload.tool,t.payload.constraints):t.type===Zi.UPDATE_LOCAL_CONSTRAINT&&Pt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ca(t,e){return{execute:()=>{Fg(t)},unExecute:()=>{Fg(e)}}}class Re{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Re(this.x+e.x,this.y+e.y)}subtract(e){return new Re(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Re(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Re(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function _L(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Mn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Re(i.x,i.y)};function ws(t,e=!0,n=.5){const r=Ws(t),i=new Re(r.c+.5,r.r+.5),a=t.distance(i);return!e||a<n?{cell:r,dist:a}:null}function mv(t,e=!0,n=.5){const r=Ws(t),i=new Re(r.c+.5,r.r+.5),a=t.distance(i),s={r:i.y,c:i.x};return!e||a<n?{cellCenter:s,dist:a}:null}function ea(t,e=!0,n=.5){const r=Ws(t),i=nO(r),s=i.map(g=>new Re(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],h=s[c];return!e||h<n?{corner:u,dist:h,idx:c}:null}function ta(t,e=!0,n=.5){const r=Ws(t),i=rO(r),s=i.map(g=>new Re(g.c,g.r)).map(g=>g.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],h=s[c];return!e||h<n?{edge:u,dist:h,idx:c}:null}function Kc(t,e=!0,n=.5){const r=ta(t,!1);if(!r)return null;const i=ea(t,!1);if(!i)return null;const a=mv(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,i.corner],u=s.map(I=>new Re(I.c,I.r)).map(I=>I.distance(t)),h=Math.min(...u),g=u.findIndex(I=>I===h),f=s[g],m=["cell center","edge","corner"][g],C={cellCenter:a.cellCenter,edge:r.edge,corner:i.corner,dist:h,target:f,type:m};return!e||h<n?C:null}class uo{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Mn(e,n);if(!i)return;this._prevPoint=i;const a=ws(i,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=ws(r,!0,this._margin);if(!i)return;const a=i.cell;if(this._prevCell&&Ve(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Mn(e,n);if(!r)return;const i=ws(r,!1);if(!i)return;const a=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Ug(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function fL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function Hg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function Pg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function gL(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===_.HIGHLIGHTS&&i.highlights.length?Ug(i,e):i.value!==null?fL(i,e):n===_.CORNER_PM&&i.cornerMarks.length?Hg(i,e):n===_.CENTER_PM&&i.centerMarks.length?Pg(i,e):i.cornerMarks.length?Hg(i,e):i.centerMarks.length?Pg(i,e):i.highlights.length?Ug(i,e):r:r}function ni(t,e,n,r=!1){if(!(t&&e))return;const i=ud(t,e),a=dd(t,n),s=Ca(i,a);an(s,r)}function Li(t,e,n,r=!0){if(!(t&&e))return;const i=dd(t,n),a=ud(t,e),s=Ca(i,a);an(s,r)}function mu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const a=$g(r,t,n),s=$g(r,t,e),c=Ca(a,s);an(c,i)}function Ks(t,e,n){const r=new uo,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,h=!1,g;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(g||(g={}));let f="DYNAMIC";function v(C){u=!1;const I=C.cell;if(qt(C.cell,i)){if(f==="DYNAMIC"){const b=st(rt),x=Ty(b,n,I);if(x){const $=gy(x.arrow,x.matchLineIdx);mu(x.id,x.arrow,$,n,!0),h=!0;return}const R=Sg(b,n,I);if(!R)u=!0,f="BULB",c=null,a=null;else{f="BODY",c=R[0],a=R[1],a=_u(a,I),Pt(n,c,a);return}}if(f==="BULB"&&!c){c=$t.uniqueId(),a=Xh(n,[I]),ti(c,a);return}else f==="BULB"&&c&&a?(a=uy(a,I),Pt(n,c,a)):f==="BODY"&&c&&a&&(a=dy(a,I),Pt(n,c,a))}}return r.onDragStart=C=>{f="DYNAMIC",v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{if(h){h=!1;return}f==="BODY"&&c&&a?_y(a)?(a=fy(a),Pt(n,c,a)):(mu(c,s,a,n),s=a):f==="BULB"&&(ni(c,a,n),s=a),f="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,w=st(rt);if(Sg(w,n,I)){Li(c,a,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const Xs=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,wn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Zs=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,hL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,un=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,_o=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,_d=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,vL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,pL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,mL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,fo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,CL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,EL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,IL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function bL(t){return Vu(t)?vL():qu(t)?pL():t===_.XV?EL():Ku(t)?mL():Qu(t)?Xs():Zu(t)?Zs():la(t)?hL():Xu(t)?De():xh(t)?IL():""}const wL={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:_.ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Zs(),tags:[],categories:[D.ARROW_CONSTRAINT,D.LOCAL_CONSTRAINT,D.ARROW_TOOL]}},OL={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:_.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Zs(),tags:[],categories:[D.ARROW_CONSTRAINT,D.LOCAL_CONSTRAINT,D.ARROW_TOOL]}};_.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,B.LINE,Zs(),D.ARROW_CONSTRAINT,D.LOCAL_CONSTRAINT,D.ARROW_TOOL;function yL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function LL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function AL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function xL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function SL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const NL={Delete:null,Backspace:null};function TL(t,e=10){if(t in NL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function DL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function RL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function kL(t){const e={KeyZ:_.DIGIT,KeyX:_.CORNER_PM,KeyC:_.CENTER_PM,KeyV:_.HIGHLIGHTS};return t in e?e[t]:_.DIGIT}function GL(t){let e;return t.altKey?e=_.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=_.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=_.CENTER_PM:e=_.HIGHLIGHTS,e}function Cv(t){return t==="Backspace"}function go(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Cv(t.key))}function ML(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function $L(t){return ML(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function FL(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ai(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,h=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${h.source}$`,"i").test(t))}function Rr(t,e,n){if(t===void 0)return t;let r=t;return Cv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Yt(t,e,n,r){const i=new uo,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let h=0;function g(m){const C=st(rt),I=m.cell;if(qt(m.cell,a)){if(m.event.shiftKey){const b=xg(C,n,I);b&&(c=b[0],s=b[1],co({id:c,constraint:s}),h=1)}if(h===0){const b=xg(C,n,I);if(h=b?2:1,b){Li(b[0],b[1],n);return}}if(!s&&h===1){s=Zh(n,[I]),c=$t.uniqueId(),ti(c,s);return}else if(s&&c&&h===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=vy(s,I,b),Pt(n,c,s);return}}}function f(m){const C=st(gr);if(!C)return;let I=C.constraint;const w=C.id;if(I.value===void 0||!go(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(I==null?void 0:I.value,m.key);b!==void 0&&b!==I.value&&(I=py(I,b),Pt(n,w,I))}return i.onDragStart=m=>{c=null,s=null,h=0,g(m)},i.onDrag=m=>{g(m)},i.onDragEnd=()=>{c&&s&&ni(c,s,n),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{f(m)},keyUp:()=>{}}}const fd=[D.CAGE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.CAGE_TOOL],On=[D.CAGE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.CAGE_TOOL];function dn(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function _n(t,e,n){return Rr(t,e,n)}const fn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},UL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},HL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:wn(),tags:[],categories:On}},PL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:wn(),tags:[],categories:On}},BL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SUM_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:wn(),tags:[],categories:On}},WL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Xs(),tags:[],categories:fd}},YL={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Xs(),tags:[],categories:fd}},zL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:wn(),tags:[],categories:On}},jL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:wn(),tags:[],categories:On}},VL={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:_.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Xs(),tags:[],categories:fd}};_.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,wn();const qL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:wn(),tags:[],categories:On}},KL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:wn(),tags:[],categories:On}};_.AQUARIUM_CAGE,z.CAGE_TOOLS,wn();const XL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:wn(),tags:[],categories:On}},ZL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:wn(),tags:[],categories:On}},QL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},JL={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:wn(),tags:[],categories:On}};var Dn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Dn||{});const eA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Ev=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),tA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),nA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),rA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),iA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),oA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),aA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Xc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),sA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Zc=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Qs=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function lA(t,e,n){if(e===_.DIGIT){const r=t.map(s=>s.value),i=eA(t,n),a=Ev(t,r);return[i,a]}if(e===_.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),a=tA(t,n),s=nA(t,r,i);return[a,s]}if(e===_.REGIONS){const r=t.map(s=>s.region),i=rA(t,n),a=iA(t,r);return[i,a]}if(e===_.FOG){const r=t.map(c=>c.fog),a=oA(t,n===1),s=aA(t,r);return[a,s]}if(e===_.HIGHLIGHTS&&n!==null){const r=Zc(t,n),i=Zc(t,n);return[r,i]}if(e===_.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=Zc(t,n),a=Qs(t,r);return[i,a]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n!==null){const r=Xc(t,n,e),i=Xc(t,n,e);return[r,i]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n===null){let r=[];e===_.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=Xc(t,n,e),a=sA(t,r,e);return[i,a]}}function jo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),sn.update(i=>i)}function ro(t){switch(t.type){case Dn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;jo(e,_.DIGIT,n,!0);break}case Dn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;jo(e,_.GIVEN,n,!0);break}case Dn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;jo(e,_.REGIONS,n,!0);break}case Dn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;jo(e,_.HIGHLIGHTS,n,!0);break}case Dn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;jo(e,r,n,!0);break}case Dn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];sn.update(r=>r);break}case Dn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];sn.update(i=>i);break}case Dn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];sn.update(r=>r);break}case Dn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];sn.update(r=>r);break}case Dn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===_.CENTER_PM?e[i].centerMarks=r[i]:n===_.CORNER_PM&&(e[i].cornerMarks=r[i]);sn.update(i=>i);break}case Dn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),sn.update(r=>r);break}case Dn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];sn.update(r=>r);break}}}function cA(t,e){return{execute:()=>{ro(t)},unExecute:()=>{ro(e)}}}const Ki=new uo;function Bg(t,e){return t.shiftKey?Qo.SELECTING:t.ctrlKey||t.metaKey||e?Qo.DYNAMIC:t.altKey?Qo.DESELECTING:Qo.RESETTING}function ca(t,e,n,r,i=!1){switch(e){case _.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case _.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case _.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case _.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case _.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case _.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function uA(t,e){const n=[e,_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],r=i=>i===_.CORNER_PM||i===_.CENTER_PM||i===_.DIGIT;for(const i of n){const a=ca(t,i,"any",-1,r(i));if(a.length)return{tool:i,cells:a}}return{tool:e,cells:[]}}function na(t,e,n,r){const i=lA(e,n,r);if(i){const a=i[0],s=i[1],c=cA(a,s),u=hu(t),g=[tL(u,u),c];eL(g)}}function dA(t,e,n){const r=_.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=ca(e,r,"any",-1,!1);if(i.length)return na(n,i,r,t),!0}else{const i=ca(e,r,"different",t,!0);if(i.length)return na(n,i,r,t),!0}return!1}function ri(t,e,n){const r=[_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};Ki.onTap=m=>{if(m.tapCount!==2)return;const I=qt(m.cell,i)?m.cell:null;if(!I)return;const w=gL(I,e,n),b=hu(w);Xi(b)},Ki.onDragStart=m=>{const C=qt(m.cell,i),I=st(vu),w=Bg(m.event,I),b=C?m.cell:null,x=Py(b,w);Xi(x)},Ki.onDrag=m=>{const I=qt(m.cell,i)?m.cell:null,w=Wy(I);Xi(w)};function a(m){if(!xL(m))return!1;const C=e.getAllCells().map(w=>({r:w.r,c:w.c})),I=hu(C);return Xi(I),!0}function s(m){if(!RL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=GL(m);return xr(C),!0}return m.type==="keyup"?(rL(),!0):!1}function c(m){if(!DL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return xr(I),pu(I),!0}else{const C=kL(m.code);return xr(C),pu(C),!0}}function u(m){if(!$L(m))return!1;const C=st(bi).lastCell;let I=null;if(C!==null){const[x,R]=FL(m),[$,k]=[Ng(C.r+R,0,i.nRows-1),Ng(C.c+x,0,i.nCols-1)];I={r:$,c:k}}else I={r:0,c:0};const w=Bg(m,!1),b=Yy(I,w);return Xi(b),!0}function h(m){const C=TL(m);if(C===void 0)return!1;const I=st(bi).cells,w=[];if(I.forEach(b=>{const x=e.getCell(b.r,b.c);x&&w.push(x)}),n===_.FOG)return dA(C,w,I);if(C===null){const{tool:b,cells:x}=uA(w,n);if(x.length)return na(I,x,b,C),!0}else{let b=ca(w,n,"different",C,!0);if(b.length)return na(I,b,n,C),!0;if(b=ca(w,n,"equal",C,!0),b.length)return na(I,b,n,C),!0}return!1}function g(m){return m.repeat?!1:h(m.key)}const f=$t.throttle(m=>{Ki.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&Ki.pointerDown(m,t)},pointerMove(m){f(m)},pointerUp(m){Ki.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||g(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){h(m.currentTarget.value)}}}class _A{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Mn(e,n);if(!r)return;const i=Kc(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=Kc(r,!1);if(!i||this._prevCoords&&Ve(this._prevCoords,i.target))return;this._isTap=!1;const a={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&cv(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Mn(e,n);if(!r)return;const i=Kc(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&Ve(this._prevCoords,i.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function fA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new _A;return r.onTap=a=>{const s=a.coords,c=st(Ns),u=st(Ss);if(a.type==="cell center"){if(!eO(s,n))return;const g=u.getCellMarker(s);if(g)if(g.marker==="X"){const f={...s,colorId:c,marker:"O"},v=ms(f),m=ms(g),C=vi(v,m);an(C)}else{const f=kg(s),v=ms(g),m=vi(f,v);an(m)}else{const f={...s,colorId:c,marker:"X"},v=ms(f),m=kg(s),C=vi(v,m);an(C)}}else if(a.type==="edge"){const h=u.getEdgeMarker(s);if(h){const g=Rg(s),f=Dg(h),v=vi(g,f);an(v)}else{const g={...s,colorId:c},f=Dg(g),v=Rg(s),m=vi(f,v);an(m)}}},r.onDrag=a=>{const s=a.coords,c=st(Ns);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},h=Zy(u);Nr(h)}},r.onDragEnd=()=>{const a=st(Ss);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>Qi(c,u)));if(s.length){const c=xs(s),u=Gg(s),h=vi(c,u);an(h)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>Qi(c,u)));if(s.length){const c=Gg(s),u=xs(s),h=vi(c,u);an(h)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const gA={getInputHandler:ri,toolId:_.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[D.CELL_INPUT_TOOL]}},hA={getInputHandler:ri,toolId:_.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[D.CELL_INPUT_TOOL]}},vA={getInputHandler:ri,toolId:_.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[D.CELL_INPUT_TOOL]}},pA={getInputHandler:ri,toolId:_.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[D.CELL_INPUT_TOOL]}},mA={getInputHandler:ri,toolId:_.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[D.CELL_INPUT_TOOL]}},CA={getInputHandler:ri,toolId:_.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[D.CELL_INPUT_TOOL]}},EA={getInputHandler:ri,toolId:_.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[D.CELL_INPUT_TOOL]}},IA={getInputHandler:ri,toolId:_.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[D.CELL_INPUT_TOOL]}},bA={getInputHandler:fA,toolId:_.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var vt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(vt||{});class Js{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=Mn(e,n);if(!r)return;const i=ta(r,!1);if(!i)return;const a=ea(r,!1);if(!a)return;const s=ws(r,!1);if(!s)return;const c=mv(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=i.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<i.dist?u=a.corner:u=i.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<a.dist&&i.dist<c.dist?u=i.edge:a.dist<i.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let h=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<i.dist&&(h="corner");const g=h==="edge"?2*i.idx:2*a.idx+1,f={event:e,cell:s.cell,edge:i.edge,corner:a.corner,closest:u,edgeIdx:i.idx,cornerIdx:a.idx,direction:g};this.onDragStart&&this.onDragStart(f)}}function gd(t,e,n,r){const i=(r==null?void 0:r.targets)??vt.CLOSEST,a=new Js(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function h(v){const m=st(rt),C=v.cell,I=v.closest;if(!qt(C,s))return;const b=Ry(m,n,I);if(b){wi(n,b);return}c=iv(n,I,""),u=$t.uniqueId(),ti(u,c)}function g(v){const m=st(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!go(v)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(C==null?void 0:C.value,v.key);w!==void 0&&w!==C.value&&(C=ha(C,w),Pt(n,I,C))}return a.onDragStart=v=>{h(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,B.CIRCLE,_d(),D.LOCAL_CONSTRAINT,D.CENTER_CORNER_EDGE_CONSTRAINT;const wA={getInputHandler(t,e,n){return gd(t,e,n,{targets:vt.CLOSEST,valueUpdater:(r,i)=>Rr(r,i,()=>!0),defaultValue:""})},toolId:_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:_d(),tags:[],categories:[D.LOCAL_CONSTRAINT,D.CENTER_CORNER_EDGE_CONSTRAINT]}},OA={getInputHandler(t,e,n){return gd(t,e,n,{targets:vt.CORNER_OR_EDGE,valueUpdater:(r,i)=>Rr(r,i,()=>!0),defaultValue:""})},toolId:_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:_d(),tags:[],categories:[D.LOCAL_CONSTRAINT,D.CENTER_CORNER_EDGE_CONSTRAINT]}};function yA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function LA(t,e){const n=Gh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function AA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function xA(t){for(let e=0;;e++){const n=AA(e);if(!t.has(n))return n}}function SA(t,e,n){const r=new uo,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,h="cells2",g;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(g||(g={}));let f=0;function v(C){const I=st(rt),w=C.cell;if(!qt(C.cell,i))return;const x=ky(I,n,w);if(f===0&&(x?(c=x[0],a=x[1],f=2,u=w,h=a.cells2.some($=>Ve($,w))?"cells2":"cells"):f=1),f===1&&c===null){c=$t.uniqueId();const R=Gy(I,n),$=xA(R);a=yA(n,[w],$),ti(c,a);return}else if(f===1&&c&&a){a=LA(a,w),Pt(n,c,a);return}else if(f===2&&c&&a&&u){const R={r:w.r-u.r,c:w.c-u.c},k=(h==="cells2"?a.cells2:a.cells).map(W=>({r:W.r+R.r,c:W.c+R.c}));if(!k.every(W=>qt(W,i)))return;h==="cells"?a={...a,cells:k}:a={...a,cells2:k},u=w,Pt(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,f=0,u=null,v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{c&&a&&(f===1?ni(c,a,n):f===2&&mu(c,s,a,n),s=a)},r.onTap=()=>{c&&f!==1&&(wi(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const NA={getInputHandler(t,e,n){return SA(t,e,n)},toolId:_.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[D.CLONE_CONSTRAINT,D.LOCAL_CONSTRAINT]}};class TA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellCorner",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const i=ea(r);if(!i)return;this._prevCellCorner=i.corner;const a={event:e,cellCorner:i.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=ea(r);if(!i||this._prevCellCorner&&Ve(i.corner,this._prevCellCorner))return;const a={event:e,cellCorner:i.corner};this._prevCellCorner=i.corner,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellCorner=null,this._isDown=!1);const r=Mn(e,n);!r||ea(r)}}function ii(t,e,n,r){const i=new TA,a={nRows:e.nRows,nCols:e.nCols};let s;(f=>{f[f.DYNAMIC=0]="DYNAMIC",f[f.ADDING=1]="ADDING",f[f.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(f){const v=st(rt),m=f.cellCorner,C=Dh(m);if(!C.every(b=>qt(b,a)))return;let w=null;if(c===0&&(w=Sy(v,n,m),c=w?2:1),w&&c===2){const b=w[0];Li(b,w[1],n);return}else if(c===1){const b=Qh(n,C,r==null?void 0:r.defaultValue),x=$t.uniqueId();ni(x,b,n,!0)}}function h(f){const v=st(gr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!go(f)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,f.key);I!==void 0&&I!==m.value&&(m=ha(m,I),Pt(n,C,m))}return i.onDragStart=f=>{c=0,u(f)},{pointerDown:f=>{f.button===0&&i.pointerDown(f,t)},pointerMove:f=>{i.pointerMove(f,t)},pointerUp:f=>{i.pointerUp(f,t)},keyDown:f=>{h(f)},keyUp:()=>{}}}function el(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function tl(t,e,n){return Rr(t,e,n)}function DA(t,e){function n(r){return!0}return Rr(t,e,n)}const RA={getInputHandler(t,e,n){return ii(t,e,n,{valueUpdater:(r,i)=>DA(r,i),defaultValue:""})},toolId:_.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:CL(),categories:[D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.CORNER_TOOL]}},kA={getInputHandler(t,e,n){return ii(t,e,n,{valueUpdater:(r,i)=>tl(r,i,el),defaultValue:""})},toolId:_.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:fo(),categories:[D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.CORNER_TOOL]}},GA={getInputHandler(t,e,n){return ii(t,e,n)},toolId:_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:fo(),categories:[D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.CORNER_TOOL]}},MA={getInputHandler(t,e,n){return ii(t,e,n,{valueUpdater:(r,i)=>tl(r,i,el),defaultValue:""})},toolId:_.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:fo(),categories:[D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.CORNER_TOOL]}};_.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,B.CIRCLE,fo(),D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.CORNER_TOOL;const $A={getInputHandler(t,e,n){return ii(t,e,n,{defaultValue:"X"})},toolId:_.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:fo(),categories:[D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.CORNER_TOOL]}},FA={getInputHandler(t,e,n){return ii(t,e,n,{defaultValue:""})},toolId:_.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:fo(),categories:[D.CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.CORNER_TOOL]}};function Ae(t,e,n,r){const i=new uo,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function h(f){if(!u||!c)throw"UNREACHABLE";const v=f.cell;qt(f.cell,a)&&(c=cy(c,v,s),Pt(n,u,c))}return i.onDragStart=f=>{u=$t.uniqueId(),c=qh(n,[],r==null?void 0:r.defaultValue),ti(u,c),h(f)},i.onDrag=f=>{h(f)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?wi(n,u):u&&c&&ni(u,c,n,!1),u=null},i.onTap=f=>{const v=f.cell,m=st(rt),C=Ny(m,n,v);if(C){const[I,w]=C;Li(I,w,n)}},{pointerDown:f=>{f.button===0&&i.pointerDown(f,t)},pointerMove:f=>{i.pointerMove(f,t)},pointerUp:f=>{i.pointerUp(f,t)},keyDown:()=>{},keyUp:()=>{}}}function Ze(t,e,n,r,i){const a=new uo,s={nRows:e.nRows,nCols:e.nCols};let c;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function h(v){const m=st(rt),C=v.cell;if(!qt(v.cell,s))return;const w=id(m,n,C);if(u===0&&(u=w?2:1),w&&u===2){const[b,x]=w;Li(b,x,n)}else if(u===1){const b=tv(n,C,i==null?void 0:i.defaultValue),x=$t.uniqueId();ni(x,b,n,!0)}}a.onDragStart=v=>{u=0,h(v)},a.onDrag=v=>{h(v)};function g(v){const m=st(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!go(v)||!(i!=null&&i.valueUpdater))return;const w=i.valueUpdater(C==null?void 0:C.value,v.key);w!==void 0&&w!==C.value&&(C=ha(C,w),Pt(n,I,C))}return{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:v=>{a.pointerMove(v,t)},pointerUp:v=>{a.pointerUp(v,t)},keyDown:v=>{g(v)},keyUp:()=>{}}}class UA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const i=ta(r,!0,.35);if(!i)return;this._prevCellEdge=i.edge;const a={event:e,edge:i.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=ta(r,!0,.35);if(!i||this._prevCellEdge&&Ve(i.edge,this._prevCellEdge))return;const a={event:e,edge:i.edge};this._prevCellEdge=i.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Mn(e,n);!r||ta(r,!0,.35)}}function Fn(t,e,n,r){const i=new UA,a={nRows:e.nRows,nCols:e.nCols};let s;(f=>{f[f.DYNAMIC=0]="DYNAMIC",f[f.ADDING=1]="ADDING",f[f.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(f){const v=st(rt),m=f.edge,C=kh(m);if(!C.every(b=>qt(b,a)))return;let w=null;if(c===0&&(w=xy(v,n,C),c=w?2:1),w&&c===2){const b=w[0];Li(b,w[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",x=Jh(n,C,b),R=$t.uniqueId();ni(R,x,n,!0)}}function h(f){const v=st(gr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!go(f)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,f.key);I!==void 0&&I!==m.value&&(m=ha(m,I),Pt(n,C,m))}return i.onDragStart=f=>{c=0,u(f)},{pointerDown:f=>{f.button===0&&i.pointerDown(f,t)},pointerMove:f=>{i.pointerMove(f,t)},pointerUp:f=>{i.pointerUp(f,t)},keyDown:f=>{h(f)},keyUp:()=>{}}}function hd(t,e,n,r=vt.CORNER_OR_EDGE){const i=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],a=new Js(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,h;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(h||(h={}));let g=0;function f(C){const I=st(rt),w=C.cell;if(!qt(C.cell,s))return;C.event.altKey&&(g=2);const x=id(I,n,w),R=ed(C.direction);if(x){[u,c]=x,c.direction===R||g===2?Li(u,c,n):(c={...c,direction:R},Pt(n,u,c));return}else g!==2&&(c=nv(n,w,R),u=$t.uniqueId(),ni(u,c,n,!0))}function v(C){if(!c||!u||!SL(C))return;const w=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[w]},Pt(n,u,c)}return a.onDragStart=C=>{g=0,f(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{v(C)},keyUp:()=>{}}}function HA(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function kr(t,e,n,r=vt.CORNER_OR_EDGE){const i=new Js(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let h=0;function g(v){const m=st(rt),C=v.cell;if(!qt(v.cell,a))return;v.event.altKey&&(h=2);const w=ed(v.direction),b=id(m,n,C);if(b){if(c=b[0],s=b[1],h===2)wi(n,b[0]);else{const x=HA(s.directions,w);x.length?(s={...s,directions:x},Pt(n,c,s)):wi(n,c)}return}else h!==2&&(s=rv(n,C,w),c=$t.uniqueId(),ti(c,s))}return i.onDragStart=v=>{h=0,g(v)},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const PA=[D.EDGE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.EDGE_TOOL],or=[D.EDGE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.EDGE_TOOL],hr=.15,xi=.02;function BA(t,e=1){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function ho(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function WA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Si(t,e,n){return Rr(t,e,n)}function YA(t,e){return t===void 0?"V":WA(e)?e.toUpperCase():t}function zA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function jA(t,e){return t===void 0?"<":zA(e)?e:t}const VA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,BA)})},toolId:_.RATIO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:or}},qA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,ho)})},toolId:_.DIFFERENCE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:or}},KA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,ho)})},toolId:_.EDGE_SUM,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:or}},XA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:YA,defaultValue:"V"})},toolId:_.XV,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:or}},ZA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:jA,defaultValue:"<"})},toolId:_.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:or}},QA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,ho)})},toolId:_.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:or}},JA={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,ho)})},toolId:_.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:or}},ex={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,ho)})},toolId:_.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:or}},tx={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:or}},nx={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:xi,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:or}},rx={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:hr},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:or}},ix={getInputHandler(t,e,n){return Fn(t,e,n)},toolId:_.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:B.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:PA}};function Rt(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??vt.CORNER_OR_EDGE,a=new Js(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function h(v){const m=st(rt),C=v.cell,I=v.direction,w=ed(I);if(qt(C,s))return;const x=Rh(C,w);if(!qt(x,s))return;const $=Dy(m,n,C,w);if($){wi(n,$);return}c=ev(n,C,w,""),u=$t.uniqueId(),ti(u,c)}function g(v){const m=st(gr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!go(v)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(C==null?void 0:C.value,v.key);w!==void 0&&w!==C.value&&(C=ha(C,w),Pt(n,I,C))}return a.onDragStart=v=>{h(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}const vo=[D.OUTSIDE_CORNER_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.OUTSIDE_CORNER_TOOL,D.OUTSIDE_DIRECTION_TOOL];function po(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ni(t,e,n){return Rr(t,e,n)}const mo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},ox={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,po),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:_o(),tags:[],categories:vo}},ax={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,po),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:_o(),tags:[],categories:vo}},sx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,po),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:_o(),tags:[],categories:vo}},lx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,po),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:_o(),tags:[],categories:vo}},cx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,po),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:_o(),tags:[],categories:vo}},ux={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,po),defaultValue:"",cornerOrEdge:vt.CORNER})},toolId:_.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:mo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:_o(),tags:[],categories:vo}},gn=[D.OUTSIDE_EDGE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.OUTSIDE_EDGE_TOOL,D.OUTSIDE_DIRECTION_TOOL];function en(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function hn(t,e,n){return Rr(t,e,n)}const vn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},dx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:un(),tags:[],categories:gn}},_x={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:un(),tags:[],categories:gn}},fx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:un(),tags:[],categories:gn}},gx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:un(),tags:[],categories:gn}},hx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:un(),tags:[],categories:gn}},vx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:un(),tags:[],categories:gn}},px={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:un(),tags:[],categories:gn}},mx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:un(),tags:[],categories:gn}},Cx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.X_INDEX,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:un(),tags:[],categories:gn}},Ex={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:un(),tags:[],categories:gn}};_.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,un();const Ix={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.EDGE})},toolId:_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:un(),tags:[],categories:gn}},bx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:_.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:un(),tags:[],categories:gn}},wx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:_.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:un(),tags:[],categories:gn}},Ox={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,en),defaultValue:"",cornerOrEdge:vt.BOTH})},toolId:_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:vn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:un(),tags:[],categories:gn}},yx={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL]}},Lx={getInputHandler(t,e,n){return hd(t,e,n)},toolId:_.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL]}},Ax={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL]}},xx={getInputHandler(t,e,n){return Fn(t,e,n,{valueUpdater:(r,i)=>Si(r,i,ho)})},toolId:_.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL,D.TYPABLE_TOOL]}},Sx={getInputHandler(t,e,n){return ii(t,e,n,{valueUpdater:(r,i)=>tl(r,i,el),defaultValue:""})},toolId:_.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL,D.TYPABLE_TOOL]}},Nx={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL]}},Tx={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL]}},Dx={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL]}},Rx={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>_n(r,i,dn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:_.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL,D.TYPABLE_TOOL]}},kx={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:_.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL,D.LOCAL_CONSTRAINT]}},Gx={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,i)=>Ni(r,i,en),defaultValue:"",cornerOrEdge:vt.CORNER_OR_EDGE})},toolId:_.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[D.COSMETIC_TOOL,D.LOCAL_CONSTRAINT,D.TYPABLE_TOOL,D.OUTSIDE_DIRECTION_TOOL]}},Co=[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT,D.DIAGONAL_CONSTRAINT],Mx={toolId:_.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},$x={toolId:_.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Fx={toolId:_.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Ux={toolId:_.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Hx={toolId:_.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Px={toolId:_.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Bx={toolId:_.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Wx={toolId:_.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Yx={toolId:_.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},zx={toolId:_.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},jx={toolId:_.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},Vx={toolId:_.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},qx={toolId:_.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Co}},Kx={toolId:_.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Co}},Xx={toolId:_.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Co}},Zx={toolId:_.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Co}},Qx={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Co}},Jx={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Co}},eS={toolId:_.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},tS={toolId:_.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},nS={toolId:_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.SIMPLE_GLOBAL_CONSTRAINT]}},rS={toolId:_.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},iS={toolId:_.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},oS={toolId:_.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},aS={toolId:_.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},sS={toolId:_.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},lS={toolId:_.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},cS={toolId:_.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},uS={toolId:_.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},dS={toolId:_.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},_S={toolId:_.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},fS={toolId:_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},gS={toolId:_.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},hS={toolId:_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},vS={toolId:_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.NEGATIVE_CONSTRAINT]}},pS={toolId:_.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},mS={toolId:_.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},CS={toolId:_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},ES={toolId:_.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},IS={toolId:_.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},bS={toolId:_.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},wS={toolId:_.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},OS={toolId:_.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},yS={toolId:_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},LS={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},AS={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},xS={toolId:_.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},SS={toolId:_.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},NS={toolId:_.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},TS={toolId:_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},DS={toolId:_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},RS={toolId:_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},kS={toolId:_.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},GS={toolId:_.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},MS={toolId:_.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},$S={toolId:_.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},FS={toolId:_.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},US={toolId:_.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},HS={toolId:_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},PS={toolId:_.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},BS={toolId:_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},WS={toolId:_.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},YS={toolId:_.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},zS={toolId:_.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.UNDETERMINED_REGIONS_CONSTRAINT]}},Pe=[D.LINE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.LINE_TOOL],Gr=[D.LINE_CONSTRAINT,D.LOCAL_CONSTRAINT,D.DOUBLE_ENDED_LINE_CONSTRAINT,D.LINE_TOOL],Ea={description:"",usage:De(),tags:[],categories:Pe},jS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ea,description:"Numbers along a thermometer must increase from the bulb end."}},VS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:_.CUSTOM_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ea,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},qS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Ea,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},KS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ea,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},XS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ea,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},ZS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.PALINDROME,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Pe}},QS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Pe}},JS={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Pe}},eN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Pe}},tN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Pe}},nN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},rN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Pe}},iN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:_.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Pe}},oN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Pe}},aN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Pe}},sN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},lN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Pe}},cN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Pe}},uN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Pe}},dN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Pe}},_N={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:_.SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Pe}},fN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Pe}},gN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Pe}},hN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},vN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Pe}},pN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:_.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Pe}},mN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Pe}},CN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Pe}},EN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Pe}},IN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Pe}},bN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Pe}},wN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Pe}},ON={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Pe}},yN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Pe}},LN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Pe}},AN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.XV_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Pe}},xN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Pe}},SN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:_.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Pe}},NN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Pe}};_.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,B.LINE,De();const TN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:_.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Pe}},DN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Pe}},RN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Pe}},kN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Pe}},GN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Pe}},MN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:_.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Pe}};_.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,B.THERMO_WITH_CIRCLE,De();const $N={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:_.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Pe}},FN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Pe}},UN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:_.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},HN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Pe}},PN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Pe}},BN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Pe}},WN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:Gr}},YN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:_.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:Gr}},zN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:Gr}},jN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:Gr}},VN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:Gr}},qN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:Gr}},KN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:Gr}},XN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!1})},toolId:_.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Pe}},ZN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Gr}},QN={getInputHandler(t,e,n){return Ae(t,e,n,{allowSelfIntersection:!0})},toolId:_.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Gr}},ut=[D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT,D.SINGLE_CELL_SHAPE_TOOL],Eo=[D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT,D.SINGLE_CELL_COLOR_TOOL];function Io(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function JN(t){return t===""||t==="1"||t==="2"||t==="3"}function Ti(t,e,n){return Rr(t,e,n)}const e2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:ut}},t2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:ut}},n2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT]}},r2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT]}};_.PRIME_CELL,z.CELL_COLOR_TOOL;const i2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ut}},o2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ut}},a2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ut}},s2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ut}},l2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ut}},c2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,Io),defaultValue:""})},toolId:_.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ut}},u2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,Io),defaultValue:"9"})},toolId:_.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ut}},d2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ut}},_2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:Eo}},f2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:Eo}},g2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Eo}},h2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Eo}},v2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Eo}},p2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ut}},m2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ut}},C2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ut}},E2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ut}},I2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,JN),defaultValue:""})},toolId:_.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ut}},b2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ut}},w2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ut}},O2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ut}},y2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ut}},L2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ut}},A2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ut}},x2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ut}},S2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ut}},N2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ut}},T2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ut}},D2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ut}},R2={getInputHandler(t,e,n){return hd(t,e,n)},toolId:_.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[D.SINGLE_CELL_ARROW_TOOL,D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT]}},k2={getInputHandler(t,e,n){return hd(t,e,n)},toolId:_.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[D.SINGLE_CELL_ARROW_TOOL,D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT]}},G2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,Io),defaultValue:""})},toolId:_.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ut}},M2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ut}},$2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ut}},F2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ut}},U2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,Io),defaultValue:""})},toolId:_.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ut}},H2={getInputHandler(t,e,n){return Ze(t,e,n)},toolId:_.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ut}},P2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,Io),defaultValue:""})},toolId:_.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ut}},B2={getInputHandler(t,e,n){return Ze(t,e,n,void 0,{valueUpdater:(r,i)=>Ti(r,i,Io),defaultValue:""})},toolId:_.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ut}},oi=[D.SINGLE_CELL_CONSTRAINT,D.LOCAL_CONSTRAINT,D.SINGLE_CELL_MULTIARROW_TOOL],bo={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},W2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:oi}},Y2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:oi}},z2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:oi}},j2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:oi}},V2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:oi}},q2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:bo,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:oi}},K2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:oi}},X2={getInputHandler(t,e,n){return kr(t,e,n)},toolId:_.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:oi}},Z2={toolId:_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[D.LOCAL_CONSTRAINT,D.VALUED_GLOBAL_CONSTRAINT]}},Q2={toolId:_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[D.LOCAL_CONSTRAINT,D.VALUED_GLOBAL_CONSTRAINT]}},J2={toolId:_.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[D.LOCAL_CONSTRAINT,D.VALUED_GLOBAL_CONSTRAINT]}};_.VAMPIRE_AND_PREY,D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT;_.MARKED_CELLS,D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT;const eT={toolId:_.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT]}},tT={toolId:_.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT]}};_.HOT_CELLS,D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT;_.COLD_CELLS,D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT;_.DECREMENT_FOUNTAIN,D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT;const nT={toolId:_.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[D.GLOBAL_CONSTRAINT,D.VALUE_MODIFIER_CONSTRAINT]}},Mt={[_.GIVEN]:gA,[_.DIGIT]:hA,[_.REGIONS]:vA,[_.OUTSIDE]:EA,[_.CORNER_PM]:pA,[_.CENTER_PM]:mA,[_.HIGHLIGHTS]:CA,[_.FOG]:IA,[_.PEN_TOOL]:bA,[_.SUDOKU_RULES_DO_NOT_APPLY]:Mx,[_.LEAVE_EMPTY_CELLS_EMPTY]:$x,[_.LITS]:Hx,[_.HEXED_SUDOKU]:Fx,[_.FILLOMINO]:Ux,[_.ANTIKNIGHT]:Px,[_.ANTIKING]:Wx,[_.ANTI_GIRAFFE]:Bx,[_.DISJOINT_GROUPS]:Yx,[_.TANGO]:zx,[_.NONCONSECUTIVE]:jx,[_.NONRATIO]:Vx,[_.ANTI_ENTROPY]:eS,[_.GLOBAL_INDEXING_COLUMN]:tS,[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:nS,[_.NEGATIVE_DIAGONAL]:qx,[_.POSITIVE_DIAGONAL]:Kx,[_.NEGATIVE_ANTIDIAGONAL]:Xx,[_.POSITIVE_ANTIDIAGONAL]:Zx,[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:Qx,[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:Jx,[_.ALL_RATIOS_GIVEN]:rS,[_.ALL_DIFFERENCES_GIVEN]:iS,[_.ALL_X_GIVEN]:oS,[_.ALL_V_GIVEN]:aS,[_.ALL_XV_GIVEN]:sS,[_.ALL_RADARS_GIVEN]:lS,[_.ALL_XY_DIFFERENCES_GIVEN]:cS,[_.ALL_INDEXING_COLUMN_GIVEN]:uS,[_.ALL_INDEXING_ROW_GIVEN]:dS,[_.ALL_YIN_YANG_KROPKI_GIVEN]:_S,[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:fS,[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:hS,[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:vS,[_.CAVE_CELLS_ARE_ODD]:GS,[_.CAVE_WALLS_ARE_EVEN]:kS,[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:DS,[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:RS,[_.DOUBLERS]:eT,[_.NEGATORS]:tT,[_.NEXUS]:nT,[_.UNKNOWN_REGIONS]:pS,[_.YIN_YANG]:mS,[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:CS,[_.NURIMISAKI]:ES,[_.TWO_CONTIGUOUS_REGIONS]:IS,[_.SASHIGANE]:bS,[_.GOLDILOCKS_ZONE]:wS,[_.CELL_CENTER_LOOP_NO_TOUCHING]:OS,[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:yS,[_.NOT_LOOP_SIZED_REGIONS]:xS,[_.MODULAR_LOOP]:SS,[_.CAVE]:NS,[_.CAVE_LITS]:MS,[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:TS,[_.NURIMISAKI_PATH_GERMAN_WHISPERS]:gS,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:LS,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:AS,[_.GALAXIES]:FS,[_.TWO_SYMMETRIC_GALAXIES]:PS,[_.EVERY_CELL_BELONGS_TO_A_GALAXY]:US,[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:HS,[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:BS,[_.PENTOMINO_TILLING]:WS,[_.TILLING_NO_EMPTY_CELLS]:YS,[_.LITS_BLACK_WHITE_STAR_BATTLE]:zS,[_.ODD]:e2,[_.EVEN]:t2,[_.MINIMUM]:n2,[_.MAXIMUM]:r2,[_.ODD_MINESWEEPER]:i2,[_.EVEN_MINESWEEPER]:o2,[_.WATCHTOWER]:s2,[_.NOT_WATCHTOWER]:l2,[_.FARSIGHT]:c2,[_.RADAR]:u2,[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:a2,[_.ORTHOGONAL_SUM]:d2,[_.DIAGONALLY_ADJACENT_SUM]:p2,[_.INDEXING_COLUMN]:_2,[_.INDEXING_ROW]:f2,[_.LOW_DIGIT]:g2,[_.HIGH_DIGIT]:h2,[_.FRIENDLY_CELL]:v2,[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:m2,[_.SANDWICH_ROW_COL_COUNT]:C2,[_.COUNTING_CIRCLES]:E2,[_.COLORED_COUNTING_CIRCLES]:I2,[_.UNIQUE_CELLS]:b2,[_.YIN_YANG_MINESWEEPER]:w2,[_.YIN_YANG_SEEN_UNSHADED_CELLS]:O2,[_.YIN_YANG_SEEN_SHADED_CELLS]:y2,[_.YIN_YANG_SEEN_SAME_SHADE_CELLS]:L2,[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:A2,[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:x2,[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:S2,[_.SEEN_REGION_BORDERS_COUNT]:N2,[_.NURIMISAKI_UNSHADED_ENDPOINTS]:T2,[_.SASHIGANE_BEND_REGION_COUNT]:D2,[_.SASHIGANE_REGION_SUM]:G2,[_.CELL_ON_THE_LOOP]:M2,[_.CELL_NOT_ON_THE_LOOP]:$2,[_.COUNT_LOOP_NEIGHBOUR_CELLS]:F2,[_.CAVE_CLUE]:H2,[_.TWILIGHT_CAVE_FILLOMINO_CLUE]:U2,[_.YIN_YANG_FILLOMINO_PARITY]:$S,[_.CHAOS_CONSTRUCTION_CHESS_SUMS]:P2,[_.CHAOS_CONSTRUCTION_ARROW_KNOTS]:B2,[_.SASHIGANE_ARROW_POINTS_TO_BEND]:R2,[_.THERMO_SIGHTLINE_LOOP_ARROW]:k2,[_.HOT_ARROWS]:X2,[_.COLD_ARROWS]:K2,[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:q2,[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:j2,[_.YIN_YANG_COUNT_SHADED_CELLS]:V2,[_.LOOP_CELL_COUNT_ARROWS]:z2,[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:Y2,[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:W2,[_.DIFFERENCE]:qA,[_.RATIO]:VA,[_.XV]:XA,[_.EDGE_INEQUALITY]:ZA,[_.EDGE_SUM]:KA,[_.EDGE_PRODUCT]:QA,[_.EDGE_MODULO]:JA,[_.EDGE_FACTOR]:ex,[_.XY_DIFFERENCES]:tx,[_.YIN_YANG_WHITE_KROPKI]:nx,[_.YIN_YANG_KROPKI]:rx,[_.UNKNOWN_REGION_BORDER]:ix,[_.QUADRUPLE]:RA,[_.CORNER_SUM]:kA,[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:GA,[_.CORNER_EVEN_COUNT]:MA,[_.PRODUCT_SQUARE]:$A,[_.EQUAL_DIAGONAL_DIFFERENCES]:FA,[_.THERMOMETER]:jS,[_.FUZZY_THERMOMETER]:qS,[_.SLOW_THERMOMETER]:KS,[_.CUSTOM_THERMOMETER]:VS,[_.ROW_CYCLE_THERMOMETER]:XS,[_.PALINDROME]:ZS,[_.RENBAN_LINE]:QS,[_.DOUBLE_RENBAN_LINE]:JS,[_.RENRENBANBAN_LINE]:eN,[_.N_CONSECUTIVE_RENBAN_LINE]:tN,[_.NABNER_LINE]:nN,[_.WHISPERS_LINE]:rN,[_.DUTCH_WHISPERS]:iN,[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:oN,[_.RENBAN_OR_WHISPERS_LINE]:aN,[_.RENBAN_OR_NABNER_LINE]:sN,[_.OUT_OF_ORDER_CONSECUTIVE_LINE]:lN,[_.INDEX_LINE]:cN,[_.UNIQUE_VALUES_LINE]:uN,[_.REPEATED_DIGITS_LINE]:ON,[_.REGION_SUM_LINE]:dN,[_.SUM_LINE]:_N,[_.XV_LINE]:AN,[_.ROW_SUM_LINE]:xN,[_.AT_LEAST_X_LINE]:SN,[_.SUPERFUZZY_ARROW]:yN,[_.HEADLESS_ARROW]:LN,[_.N_CONSECUTIVE_FUZZY_SUM_LINE]:NN,[_.PRODUCT_LINE]:TN,[_.ADJACENT_MULTIPLES_LINE]:DN,[_.ADJACENT_DIFFERENCES_COUNT_LINE]:RN,[_.LOOK_AND_SAY_LINE]:kN,[_.ARITHMETIC_SEQUENCE_LINE]:fN,[_.ZIPPER_LINE]:GN,[_.SEGMENTED_SUM_LINE]:MN,[_.SAME_PARITY_LINE]:gN,[_.MODULAR_LINE]:hN,[_.UNIMODULAR_LINE]:vN,[_.MODULAR_OR_UNIMODULAR_LINE]:pN,[_.ODD_EVEN_OSCILLATOR_LINE]:mN,[_.HIGH_LOW_OSCILLATOR_LINE]:CN,[_.ENTROPIC_LINE]:EN,[_.ENTROPIC_OR_MODULAR_LINE]:IN,[_.INDEXING_COLUMN_IS_X_LINE]:bN,[_.INDEXING_ROW_IS_X_LINE]:wN,[_.YIN_YANG_INDEXING_LINE_COLORING]:PN,[_.YIN_YANG_SHADED_WHISPERS_LINE]:$N,[_.YIN_YANG_UNSHADED_ENTROPIC_LINE]:FN,[_.YIN_YANG_UNSHADED_MODULAR_LINE]:UN,[_.YIN_YANG_REGION_SUM_LINE]:HN,[_.GOLDILOCKS_ZONE_REGION_SUM]:BN,[_.BETWEEN_LINE]:WN,[_.LOCKOUT_LINE]:YN,[_.PARITY_COUNT_LINE]:jN,[_.TIGHTROPE_LINE]:zN,[_.DOUBLE_ARROW_LINE]:VN,[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:qN,[_.SPLIT_PEAS]:KN,[_.DOUBLERS_THERMOMETER]:XN,[_.DOUBLERS_BETWEEN_LINE]:ZN,[_.DOUBLERS_DOUBLE_ARROW_LINE]:QN,[_.ARROW]:wL,[_.AVERAGE_ARROW]:OL,[_.KILLER_CAGE]:UL,[_.UNIQUE_DIGITS_CAGE]:HL,[_.INVERTED_KILLER_CAGE]:PL,[_.SUM_CAGE]:BL,[_.SUM_CAGE_LOOK_AND_SAY]:WL,[_.PARITY_BALANCE_CAGE]:YL,[_.DIVISIBLE_KILLER_CAGE]:zL,[_.SPOTLIGHT_CAGE]:jL,[_.PUTTERIA_CAGE]:VL,[_.MULTISET_CAGE]:qL,[_.VAULTED_CAGE]:KL,[_.YIN_YANG_ANTITHESIS_KILLER_CAGE]:XL,[_.YIN_YANG_BREAKEVEN_KILLER_CAGE]:ZL,[_.DOUBLERS_KILLER_CAGE]:QL,[_.NEGATORS_KILLER_CAGE]:JL,[_.CLONE_REGION]:NA,[_.SANDWICH_SUM]:dx,[_.X_SUM]:_x,[_.SHORTSIGHTED_X_SUM]:fx,[_.SHIFTED_X_SUM]:gx,[_.BROKEN_X_SUM]:hx,[_.X_SUM_SKYSCRAPERS]:vx,[_.BATTLEFIELD]:px,[_.SKYSCRAPERS]:mx,[_.X_INDEX]:Cx,[_.RISING_STREAK]:Ex,[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:Ix,[_.OUTSIDE_CONSECUTIVE_SUM]:bx,[_.LOOPWICHES]:wx,[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:Ox,[_.LITTLE_KILLER_SUM]:ox,[_.LITTLE_KILLER_PRODUCT]:ax,[_.LITTLE_KILLER_LOOK_AND_SAY]:sx,[_.LITTLE_KILLER_REGION_SUM_PRODUCT]:cx,[_.X_OMIT_LITTLE_KILLER_SUM]:lx,[_.NEGATORS_LITTLE_KILLER_SUM]:ux,[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:wA,[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:OA,[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:Z2,[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:Q2,[_.FORBIDDEN_KNIGHT_SUM]:J2,[_.COSMETIC_CELL_SHAPE]:yx,[_.COSMETIC_CELL_ARROW]:Lx,[_.COSMETIC_CELL_MULTI_ARROW]:Ax,[_.COSMETIC_EDGE]:xx,[_.COSMETIC_CORNER]:Sx,[_.COSMETIC_LINE]:Nx,[_.COSMETIC_LINE_WITH_CIRCLE_ENDS]:Tx,[_.COSMETIC_LINE_WITH_POLYGON_ENDS]:Dx,[_.COSMETIC_ARROW]:kx,[_.COSMETIC_CAGE]:Rx,[_.COSMETIC_OUTSIDE_DIRECTION]:Gx};var rT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Iv(t){var e=rT();N(t,e)}var iT=oe('<button class="remove-button svelte-17rdl63"><!></button>');function oT(t,e){let n=F(e,"onTrash",8,()=>{});var r=iT(),i=q(r);Iv(i),H(r),Te("click",r,Xn(function(...a){var s;(s=n())==null||s.apply(this,a)})),N(t,r)}var aT=oe('<input type="radio" class="radio-select-button svelte-3561wl">'),sT=oe('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ra(t,e){var re,_e;te(e,!1);const n=qe(),r=()=>ve(Kt,"$toolStore",n),i=[];let a=F(e,"elementInfo",8),s=F(e,"onClick",12,void 0),c=F(e,"onTrash",8,void 0);const u=a().toolId,h=a().permanent??!1,g=((re=a().menu)==null?void 0:re.name)??a().toolId,f=!((_e=a().meta)!=null&&_e.categories.includes(D.GLOBAL_CONSTRAINT)),v=`label-${g}`;f&&s(()=>{xr(u)});function m(){var me,Ce;const ee=(me=a().meta)==null?void 0:me.description,le=((Ce=a().meta)==null?void 0:Ce.usage)??bL(u);let Ie;return ee&&ee.length&&(Ie=ee),le.length&&(Ie?Ie=Ie+`

`+le:Ie=le),Ie}fe();var C=sT(),I=q(C);{var w=ee=>{var le=aT();Vt(le),A(le,"id",v),le.value=(le.__value=u)==null?"":u,Hs(i,[],le,()=>r(),Ie=>_a(Kt,Ie)),N(ee,le)};ge(I,ee=>{f&&ee(w)})}var b=U(I,2);Z(()=>A(b,"title",m())),A(b,"aria-labelledby",v);var x=q(b),R=q(x),$=q(R);{var k=ee=>{oT(ee,{get onTrash(){return c()}})};ge($,ee=>{h||ee(k)})}H(R);var Y=U(R,2);A(Y,"for",v),Y.textContent=g,H(x);var W=U(x,2),K=q(W);dt(K,e,"default",{}),H(W),H(b),H(C),Z(()=>Ot(C,"checked",u===r())),Te("click",b,Xn(function(...ee){var le;(le=s())==null||le.apply(this,ee)})),N(t,C),ne()}function bv(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n);let i=F(e,"toolId",8),a=F(e,"elementHandlers",8);const s=()=>{iL(i());const u=r().get(i());if(!u)return;const h=cL(i()),g=uL(i(),u),f=Ca(h,g);an(f)};fe();var c=Xe(()=>Zr(i(),a()));ra(t,{get elementInfo(){return p(c)},onTrash:s}),ne()}var lT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function cT(t){var e=lT();N(t,e)}var uT=oe('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function nl(t,e){let n=F(e,"isOpen",8,!0);var r=uT(),i=q(r);dt(i,e,"default",{}),H(r),Z(()=>{A(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var dT=oe('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function _T(t,e){te(e,!1);const n=qe(),r=()=>ve(no,"$svgRefStore",n),i=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(gr,"$currentConstraintStore",n),s=T();let c=F(e,"constraintId",8),u=F(e,"toolId",8);function h(){aL(c(),u()),r().focus()}function g(){const b=i().getConstraint(u(),c());if(!b)return;const x=dd(c(),u()),R=ud(c(),b),$=Ca(x,R);an($)}M(()=>a(),()=>{var b;S(s,(b=a())==null?void 0:b.id)}),pe(),fe();var f=dT(),v=q(f),m=q(v);H(v);var C=U(v,2),I=q(C),w=q(I);Iv(w),H(I),H(C),H(f),Z(()=>{Ot(f,"active",c()===p(s)),nt(m,`ID: ${c()??""}`)}),Te("click",I,Xn(g)),Te("click",f,h),N(t,f),ne()}var fT=oe('<div class="constraint-list svelte-w5npcu"></div>');function wv(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n),i=()=>ve(Kt,"$toolStore",n),a=T();let s=F(e,"toolId",8);M(()=>(r(),Q(s())),()=>{S(a,r().get(s()))}),pe(),fe();var c=Le(),u=ce(c);{var h=g=>{var f=Xe(()=>s()===i());nl(g,{get isOpen(){return p(f)},children:(v,m)=>{var C=fT();We(C,5,()=>Object.entries(p(a)),I=>I[0],(I,w)=>{_T(I,{get constraintId(){return p(w)[0]},get toolId(){return s()}})}),H(C),N(v,C)},$$slots:{default:!0}})};ge(u,g=>{p(a)&&Object.entries(p(a)).length&&g(h)})}N(t,c),ne()}var gT=oe('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function hT(t,e){let n=F(e,"title",8),r=F(e,"closeCb",8);var i=gT(),a=q(i),s=q(a,!0);H(a);var c=U(a,2);H(i),Z(()=>nt(s,n())),Te("click",c,function(...u){var h;(h=r())==null||h.apply(this,u)}),N(t,i)}var vT=oe('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Mr(t,e){te(e,!1);let n=F(e,"showModal",12),r=F(e,"title",8),i=T();function a(){n(!1),p(i).close()}M(()=>(p(i),Q(n())),()=>{p(i)&&n()&&p(i).showModal()}),M(()=>(p(i),Q(n())),()=>{p(i)&&!n()&&p(i).close()}),pe();var s=vT(),c=q(s),u=q(c);hT(u,{get title(){return r()},closeCb:a});var h=U(u,2),g=q(h),f=q(g);dt(f,e,"default",{}),H(g),H(h),H(c),H(s),Ii(s,v=>S(i,v),()=>p(i)),Te("click",c,Xn(function(v){Dw.call(this,e,v)})),Te("close",s,()=>{n(!1)}),Te("click",s,Tw(Xn(()=>p(i).close()))),N(t,s),ne()}var pT=oe('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function mT(t,e){te(e,!1);let n=F(e,"searchPattern",12,""),r=F(e,"showModal",8),i=T(null);M(()=>(Q(r()),p(i)),()=>{r()&&p(i)&&p(i).focus()}),pe();var a=pT(),s=U(q(a),2);Vt(s),A(s,"spellcheck",!1),Ii(s,c=>S(i,c),()=>p(i)),H(a),qn(s,n),N(t,a),ne()}var CT=oe('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function ET(t,e){let n=F(e,"showModal",12),r=F(e,"searchPattern",12,""),i=F(e,"title",8);Mr(t,{get title(){return i()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=CT(),u=q(c);mT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var h=U(u,2),g=q(h),f=q(g);dt(f,e,"default",{}),H(g),H(h),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0})}var IT=oe('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),bT=oe('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Xr(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0),i=F(e,"isCollapsible",8,!1);var a=Le(),s=ce(a);{var c=h=>{var g=IT(),f=q(g),v=q(f),m=q(v,!0);H(v),H(f);var C=U(f,2),I=q(C);dt(I,e,"default",{}),H(C),H(g),Z(()=>nt(m,n())),N(h,g)},u=h=>{var g=bT(),f=q(g),v=q(f),m=q(v,!0);H(v),H(f);var C=U(f,2),I=q(C);dt(I,e,"default",{});var w=U(I,2);H(C),H(g),Z(()=>{nt(m,n()),Ot(w,"open",r())}),Te("click",g,()=>r(!r())),N(h,g)};ge(s,h=>{i()?h(u,!1):h(c)})}N(t,a)}var wT=oe('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),OT=oe('<ol class="svelte-cd45on"></ol>'),yT=oe("<!> <!>",1);function LT(t,e){te(e,!1);const n=T();let r=F(e,"category",8),i=F(e,"addTool",8),a=F(e,"searchResults",8),s=T(!0);M(()=>(Q(a()),Q(r())),()=>{S(n,a().filter(g=>{var f,v;return(v=(f=g.info.meta)==null?void 0:f.categories)==null?void 0:v.includes(r())}))}),pe(),fe();var c=Le(),u=ce(c);{var h=g=>{var f=yT(),v=ce(f);Xr(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(C){S(s,C)},$$legacy:!0});var m=U(v,2);nl(m,{get isOpen(){return p(s)},children:(C,I)=>{var w=OT();We(w,5,()=>p(n),gt,(b,x)=>{let R=()=>p(x).key,$=()=>p(x).info;var k=wT(),Y=q(k),W=q(Y,!0);H(Y),H(k),Z(()=>{var K;A(Y,"title",(K=$().meta)==null?void 0:K.description),nt(W,R())}),Te("click",Y,()=>{i()(R())}),N(b,k)}),H(w),N(C,w)},$$slots:{default:!0}}),N(g,f)};ge(u,g=>{p(n).length&&g(h)})}N(t,c),ne()}function AT(t,e){te(e,!1);const n=T();let r=F(e,"searchPattern",8,""),i=F(e,"addTool",8),a=F(e,"categories",8),s=F(e,"filterFunc",8),c=F(e,"elementHandlers",8);M(()=>(Q(r()),Q(s()),Q(c())),()=>{S(n,ry(r(),s(),c()))}),pe(),fe();var u=Le(),h=ce(u);We(h,1,a,gt,(g,f)=>{LT(g,{get category(){return p(f)},get searchResults(){return p(n)},get addTool(){return i()}})}),N(t,u),ne()}var xT=oe('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function rl(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8);var i=xT();A(i,"tabindex",0);var a=q(i),s=q(a);dt(s,e,"add-button",{}),H(a);var c=U(a,2),u=q(c),h=q(u);dt(h,e,"title-icon",{}),H(u);var g=U(u);H(c);var f=U(c,2),v=q(f);H(f),H(i),Z(()=>{nt(g,` ${r()??""}`),Ot(v,"open",n())}),Te("click",i,()=>n(!n())),Te("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,i)}var ST=oe('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function NT(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8),i=F(e,"showModal",12);function a(){i(!i())}rl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=ST();Te("click",u,Xn(()=>a())),N(s,u)},"title-icon":(s,c)=>{var u=Le(),h=ce(u);dt(h,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var TT=oe('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),DT=oe('<div class="panel-container svelte-hixu4"><!> <!></div>');function il(t,e){let n=F(e,"isOpen",8,!0);var r=DT(),i=q(r);dt(i,e,"panel-header",{});var a=U(i,2);nl(a,{get isOpen(){return n()},children:(s,c)=>{var u=TT(),h=q(u);dt(h,e,"panel-content",{}),H(u),N(s,u)},$$slots:{default:!0}}),H(r),N(t,r)}var RT=oe("<!> <!>",1);function vd(t,e){te(e,!1);let n=F(e,"categories",8),r=F(e,"title",8),i=F(e,"onAddTool",8),a=F(e,"elementHandlerFilterFunc",8),s=F(e,"elementHandlers",8),c=T(!0),u=T(!1),h=T("");const g=f=>{S(u,!1),S(c,!0),i()(f)};fe(),il(t,{get isOpen(){return p(c)},set isOpen(f){S(c,f)},$$slots:{"panel-header":(f,v)=>{var m=RT(),C=ce(m);NT(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(w){S(c,w)},get showModal(){return p(u)},set showModal(w){S(u,w)},$$slots:{"title-icon":(w,b)=>{var x=Le(),R=ce(x);dt(R,e,"title-icon",{}),N(w,x)}},$$legacy:!0});var I=U(C,2);ET(I,{get title(){return r()},get showModal(){return p(u)},set showModal(w){S(u,w)},get searchPattern(){return p(h)},set searchPattern(w){S(h,w)},children:(w,b)=>{AT(w,{get searchPattern(){return p(h)},get categories(){return n()},get filterFunc(){return a()},addTool:g,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(f,m)},"panel-content":(f,v)=>{var m=Le(),C=ce(m);dt(C,e,"panel-content",{}),N(f,m)}},$$legacy:!0}),ne()}var kT=oe("<!> <!>",1);function GT(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n),i=T();let a=F(e,"elementHandlers",8);const s=[D.COSMETIC_TOOL],c=u=>{pv(u),xr(u)};M(()=>(r(),D),()=>{S(i,(u,h)=>{var v;const g=r().has(u);return!!((v=h.meta)!=null&&v.categories.includes(D.COSMETIC_TOOL))&&!g})}),pe(),fe(),vd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,h)=>{cT(u)},"panel-content":(u,h)=>{var g=Le(),f=ce(g);We(f,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>p(m)[0];var I=Le(),w=ce(I);{var b=x=>{var R=kT(),$=ce(R);bv($,{get toolId(){return C()},get elementHandlers(){return a()}});var k=U($,2);wv(k,{get toolId(){return C()}}),N(x,R)};ge(w,x=>{Xw(C())&&x(b)})}N(v,I)}),N(u,g)}}}),ne()}var Ov=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Ov||{});const Os=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),yv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function MT(t,e){Dr.update(n=>n.setConstraint(t,e))}function $T(t){Dr.update(e=>e.removeConstraint(t))}function Wg(t){t.type===Ov.REMOVE_GLOBAL_CONSTRAINT?$T(t.payload):MT(t.payload.tool,t.payload.value)}function Cu(t,e){return{execute:()=>{Wg(t)},unExecute:()=>{Wg(e)}}}var FT=oe('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function UT(t,e){let n=F(e,"value",8,!1);var r=FT(),i=q(r);Vt(i),H(r),Z(()=>hh(i,n())),N(t,r)}function HT(t,e){te(e,!1);let n=F(e,"toolId",8),r=F(e,"value",8,!1),i=F(e,"elementHandlers",8);const a=()=>{const u=Os(n(),!r()),h=Os(n(),r()),g=Cu(u,h);an(g)},s=()=>{const u=yv(n()),h=Os(n(),r()),g=Cu(u,h);an(g)};fe();var c=Xe(()=>Zr(n(),i()));ra(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,h)=>{UT(u,{get value(){return r()}})},$$slots:{default:!0}}),ne()}var PT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function BT(t){var e=PT();N(t,e)}function WT(t,e){te(e,!1);const n=qe(),r=()=>ve(Dr,"$globalConstraintsStore",n),i=T();let a=F(e,"elementHandlers",8);const s=Qw,c=u=>{const h=Os(u,!0),g=yv(u),f=Cu(h,g);an(f)};M(()=>r(),()=>{S(i,(u,h)=>{var v;const g=!!((v=h.meta)!=null&&v.categories.includes(D.GLOBAL_CONSTRAINT)),f=r().has(u);return g&&!f})}),pe(),fe(),vd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,h)=>{BT(u)},"panel-content":(u,h)=>{var g=Le(),f=ce(g);We(f,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];HT(v,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),N(u,g)}}}),ne()}var YT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function zT(t){var e=YT();N(t,e)}var jT=oe("<!> <!>",1),VT=oe("<!> <!> <!> <!>",1);function qT(t,e){te(e,!1);const n=qe(),r=()=>ve(rt,"$localConstraintsStore",n),i=T();let a=F(e,"elementHandlers",8);const s=Zw,c=u=>{pv(u),xr(u)};M(()=>(r(),D),()=>{S(i,(u,h)=>{var v;const g=r().has(u);return!!((v=h.meta)!=null&&v.categories.includes(D.LOCAL_CONSTRAINT))&&!g})}),pe(),fe(),vd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,h)=>{zT(u)},"panel-content":(u,h)=>{var g=VT(),f=ce(g),v=Xe(()=>Zr(_.GIVEN,a()));ra(f,{get elementInfo(){return p(v)}});var m=U(f,2),C=Xe(()=>Zr(_.REGIONS,a()));ra(m,{get elementInfo(){return p(C)}});var I=U(m,2),w=Xe(()=>Zr(_.FOG,a()));ra(I,{get elementInfo(){return p(w)}});var b=U(I,2);We(b,1,()=>r().entries(),([x,R])=>x,(x,R)=>{let $=()=>p(R)[0];var k=Le(),Y=ce(k);{var W=K=>{var re=jT(),_e=ce(re);bv(_e,{get toolId(){return $()},get elementHandlers(){return a()}});var ee=U(_e,2);wv(ee,{get toolId(){return $()}}),N(K,re)};ge(Y,K=>{Vw($())&&K(W)})}N(x,k)}),N(u,g)}}}),ne()}var KT=oe('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Qc(t,e){te(e,!1);const n=T();let r=F(e,"value",8),i=F(e,"onChangeCb",8,void 0),a=T(void 0);function s(m){const C=jc(m);C&&i()&&i()(C)}M(()=>Q(r()),()=>{S(n,r())}),M(()=>(p(n),jc),()=>{fu(p(n))&&S(a,jc(p(n)))}),pe(),fe();var c=KT(),u=q(c);const h=Xe(()=>ov(p(n)));var g=q(u);Vt(g),H(u);var f=U(u,2),v=U(q(f),2);Vt(v),A(v,"spellcheck",!1),A(v,"maxlength",30),H(f),H(c),Z(()=>{A(u,"style",`--choosen-color: ${p(a)??""}`),Ot(u,"transparent",p(h))}),qn(g,()=>p(n),m=>S(n,m)),Te("change",g,()=>s(p(n))),qn(v,()=>p(n),m=>S(n,m)),Te("input",v,()=>s(p(n))),N(t,c),ne()}var XT=oe('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ia(t,e){let n=F(e,"name",8);var r=XT(),i=q(r),a=q(i,!0);H(i);var s=U(i,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var ZT=oe('<input class="control-slider svelte-1rsuho6" type="range">');function QT(t,e){te(e,!1);let n=F(e,"min",8),r=F(e,"max",8),i=F(e,"value",12),a=F(e,"step",24,()=>(r()-n())/10),s=F(e,"onChangeCb",8,void 0),c=F(e,"onInputCb",8,void 0);fe();var u=ZT();Vt(u),Z(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",a())}),qn(u,i),Te("change",u,()=>{s()&&s()(i())}),Te("input",u,()=>{c()&&c()(i())}),N(t,u),ne()}function Vr(t,e){let n=F(e,"name",8),r=F(e,"value",12),i=F(e,"min",8),a=F(e,"max",8),s=F(e,"step",24,()=>(a()-i())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);ia(t,{get name(){return`${n()??""}: ${r()??""}`},children:(h,g)=>{QT(h,{get min(){return i()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(f){r(f)},$$legacy:!0})},$$slots:{default:!0}})}var JT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function eD(t){var e=JT();N(t,e)}var tD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function nD(t){var e=tD();N(t,e)}var rD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function iD(t){var e=rD();N(t,e)}var oD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function aD(t){var e=oD();N(t,e)}var sD=oe('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function lD(t,e){te(e,!1);const n=[];let r=F(e,"value",8),i=F(e,"selectedShape",12),a=F(e,"title",8),s=F(e,"updateShapeCb",8,void 0);fe();var c=sD(),u=q(c);Vt(u);var h,g=U(u,2);dt(g,e,"default",{}),H(c),Z(()=>{A(c,"title",a()),Ot(c,"active",r()===i()),h!==(h=r())&&(u.value=(u.__value=r())==null?"":r())}),Hs(n,[],u,()=>(r(),i()),i),Te("change",u,()=>s()&&s()(r())),N(t,c),ne()}var cD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function uD(t){var e=cD(),n=q(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),H(e),N(t,e)}var dD=oe('<div class="icon-wrapper svelte-18euf14"><!></div>'),_D=oe('<div class="radio-container svelte-18euf14"></div>');function fD(t,e){te(e,!1);let n=F(e,"name",8),r=F(e,"selectedShape",8),i=F(e,"possibleShapes",8),a=F(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,iD],[B.ELLIPSE,uD],[B.SQUARE,nD],[B.RECTANGLE,eD],[B.POLYGON,aD]]);fe(),ia(t,{get name(){return n()},children:(c,u)=>{var h=_D();We(h,5,i,gt,(g,f)=>{lD(g,{get title(){return p(f)},get value(){return p(f)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(v,m)=>{var C=Le(),I=ce(C);{var w=b=>{var x=dD(),R=q(x);ch(R,()=>s.get(p(f)),($,k)=>{k($,{})}),H(x),N(b,x)};ge(I,b=>{s.has(p(f))&&b(w)})}N(v,C)},$$slots:{default:!0}})}),H(h),N(c,h)},$$slots:{default:!0}}),ne()}var gD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function hD(t){var e=gD();N(t,e)}var vD=oe('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),pD=oe("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function mD(t,e){te(e,!1);const n=qe(),r=()=>ve(Kt,"$toolStore",n),i=()=>ve(gr,"$currentConstraintStore",n),a=T(),s=T(),c=T();let u=T(!0),h=F(e,"elementHandlers",8);function g(w,b){const x=(w==null?void 0:w.shape)??(b?ou(b):void 0);return qc(x),x}function f(w,b){p(c)&&(cw(c,p(c)[w]=b),qc(p(c)))}function v(){p(s)&&(S(c,ou(p(s))),qc(p(c)))}function m(w){return w&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(w)}function C(w){return w&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(w)}function I(w){return w&&[B.ELLIPSE,B.RECTANGLE].includes(w)}M(()=>(r(),Q(h())),()=>{S(a,Zr(r(),h()))}),M(()=>p(a),()=>{S(s,p(a).shape)}),M(()=>(i(),p(s)),()=>{var w;S(c,g(((w=i())==null?void 0:w.constraint)??null,p(s)))}),pe(),fe(),il(t,{get isOpen(){return p(u)},set isOpen(w){S(u,w)},$$slots:{"panel-header":(w,b)=>{rl(w,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(x){S(u,x)},$$slots:{"title-icon":(x,R)=>{hD(x)}},$$legacy:!0})},"panel-content":(w,b)=>{var x=Le(),R=ce(x);{var $=k=>{var Y=pD(),W=ce(Y);{var K=$e=>{var be=vD();Te("click",be,v),N($e,be)};ge(W,$e=>{lO(p(s))&&$e(K)})}var re=U(W,2);{var _e=$e=>{fD($e,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:be=>f("type",be)})};ge(re,$e=>{var be;p(s).allowedTypes&&p(s).allowedTypes.length&&((be=p(c))!=null&&be.type)&&$e(_e)})}var ee=U(re,2);{var le=$e=>{var be=Xe(()=>p(s).n.lb??3),Ge=Xe(()=>p(s).n.ub??10);Vr($e,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(be)},get max(){return p(Ge)},step:1,onChangeCb:Me=>f("n",Me)})};ge(ee,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.n)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.n)!=null&&Me.editable)&&C(p(c).type)&&$e(le)})}var Ie=U(ee,2);{var me=$e=>{var be=Xe(()=>p(s).r.lb??0),Ge=Xe(()=>p(s).r.ub??1),Me=Xe(()=>p(s).r.step??.05);Vr($e,{name:"Radius",get value(){return p(c).r},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("r",St)})};ge(Ie,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.r)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.r)!=null&&Me.editable)&&m(p(c).type)&&$e(me)})}var Ce=U(Ie,2);{var Se=$e=>{var be=Xe(()=>p(s).width.lb??0),Ge=Xe(()=>p(s).width.ub??1),Me=Xe(()=>p(s).width.step??.05);Vr($e,{name:"Width",get value(){return p(c).width},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("width",St)})};ge(Ce,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.width)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.width)!=null&&Me.editable)&&I(p(c).type)&&$e(Se)})}var lt=U(Ce,2);{var xe=$e=>{var be=Xe(()=>p(s).height.lb??0),Ge=Xe(()=>p(s).height.ub??1),Me=Xe(()=>p(s).height.step??.05);Vr($e,{name:"Height",get value(){return p(c).height},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("height",St)})};ge(lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.height)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.height)!=null&&Me.editable)&&I(p(c).type)&&$e(xe)})}var we=U(lt,2);{var _t=$e=>{var be=Xe(()=>p(s).angle.lb??0),Ge=Xe(()=>p(s).angle.ub??360),Me=Xe(()=>p(s).angle.step??15);Vr($e,{name:"Angle",get value(){return p(c).angle},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("angle",St)})};ge(we,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.angle)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.angle)!=null&&Me.editable)&&$e(_t)})}var ct=U(we,2);{var Un=$e=>{var be=Xe(()=>p(s).inset.lb??0),Ge=Xe(()=>p(s).inset.ub??.5),Me=Xe(()=>p(s).inset.step??.01);Vr($e,{name:"Inset",get value(){return p(c).inset},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("inset",St)})};ge(ct,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.inset)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.inset)!=null&&Me.editable)&&$e(Un)})}var Lt=U(ct,2);{var yn=$e=>{ia($e,{name:"Stroke",children:(be,Ge)=>{Qc(be,{get value(){return p(c).stroke},onChangeCb:Me=>f("stroke",Me)})},$$slots:{default:!0}})};ge(Lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.stroke)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.stroke)!=null&&Me.editable)&&$e(yn)})}var Xt=U(Lt,2);{var pr=$e=>{var be=Xe(()=>p(s).strokeWidth.lb??0),Ge=Xe(()=>p(s).strokeWidth.ub??.8),Me=Xe(()=>p(s).strokeWidth.step??.01);Vr($e,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("strokeWidth",St)})};ge(Xt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeWidth)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeWidth)!=null&&Me.editable)&&$e(pr)})}var Jn=U(Xt,2);{var mr=$e=>{var be=Xe(()=>p(s).strokeDasharray.lb??0),Ge=Xe(()=>p(s).strokeDasharray.ub??1),Me=Xe(()=>p(s).strokeDasharray.step??.01);Vr($e,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:St=>f("strokeDasharray",St)})};ge(Jn,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeDasharray)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeDasharray)!=null&&Me.editable)&&$e(mr)})}var ar=U(Jn,2);{var Lo=$e=>{ia($e,{name:"Fill",children:(be,Ge)=>{Qc(be,{get value(){return p(c).fill},onChangeCb:Me=>f("fill",Me)})},$$slots:{default:!0}})};ge(ar,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fill)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fill)!=null&&Me.editable)&&$e(Lo)})}var $r=U(ar,2);{var Ri=$e=>{ia($e,{name:"Font Color",children:(be,Ge)=>{Qc(be,{get value(){return p(c).fontColor},onChangeCb:Me=>f("fontColor",Me)})},$$slots:{default:!0}})};ge($r,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fontColor)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fontColor)!=null&&Me.editable)&&$e(Ri)})}N(k,Y)};ge(R,k=>{p(s)&&k($)})}N(w,x)}},$$legacy:!0}),ne()}var CD=oe('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ia(t,e){let n=F(e,"clickCb",8),r=F(e,"title",8);var i=CD(),a=q(i),s=q(a);dt(s,e,"default",{}),H(a),H(i),Z(()=>A(i,"title",r())),Te("click",i,Xn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,i)}var ED=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function ID(t){var e=ED();N(t,e)}var bD=oe('<div class="buttons-container svelte-kc00rw"><!></div>');function ol(t,e){var n=bD(),r=q(n);dt(r,e,"default",{}),H(n),N(t,n)}var wD=oe('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),OD=oe('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),yD=oe('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function LD(t,e){te(e,!1);const n=qe(),r=()=>ve(Tr,"$puzzleMetaStore",n),i=()=>ve(Dr,"$globalConstraintsStore",n),a=()=>ve(rt,"$localConstraintsStore",n);let s=F(e,"showModal",12,!1),c=T(""),u=T(""),h=T(""),g=T(""),f=T("");function v(){s(!1)}function m(){const b=p(u)?C(p(u)):["Anonymous"],R={title:p(c)?p(c):"Sudoku",authors:b,ruleset:p(h),ctcYoutubeUrl:p(g),ctcUrl:p(f)};nL(R),s(!1)}function C(b){return b.split(/\s*[;]\s*/)}function I(){var Y,W,K,re;let b="";const x=Mt,R=i();!!R.get(_.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[_e,ee]of R.entries())if(_e!==_.SUDOKU_RULES_DO_NOT_APPLY&&ee){const le=x[_e],Ie=((Y=le.menu)==null?void 0:Y.name)??le.toolId,me=(W=le.meta)==null?void 0:W.description;b+=`**${Ie}**: ${me}

`}const k=a();for(const[_e,ee]of k.entries())if(Object.keys(ee).length>0){const Ie=x[_e],me=((K=Ie.menu)==null?void 0:K.name)??Ie.toolId,Ce=(re=Ie.meta)==null?void 0:re.description;b+=`**${me}**: ${Ce}

`}return b.trim()}function w(){const b=I();S(h,b)}M(()=>(Q(s()),r(),As),()=>{if(!s()){const b=r().authors;S(c,r().title??""),S(u,b?As(b,"; ","; "):""),S(h,r().ruleset??""),S(g,r().ctcYoutubeUrl??""),S(f,r().ctcUrl??"")}}),pe(),fe(),Mr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(b){s(b)},children:(b,x)=>{var R=yD(),$=q(R);Xr($,{title:"Title"});var k=U($,2);Vt(k);var Y=U(k,2);Xr(Y,{title:"Authors"});var W=U(Y,2);Vt(W);var K=U(W,2);Xr(K,{title:"Ruleset",children:(Ce,Se)=>{var lt=wD();Te("click",lt,w),N(Ce,lt)},$$slots:{default:!0}});var re=U(K,2);Cw(re),A(re,"rows",8);var _e=U(re,2);Xr(_e,{title:"CTC Link"});var ee=U(_e,2);Vt(ee);var le=U(ee,2);Xr(le,{title:"CTC Youtube Link"});var Ie=U(le,2);Vt(Ie);var me=U(Ie,2);ol(me,{children:(Ce,Se)=>{var lt=OD(),xe=ce(lt),we=U(xe,2);Te("click",xe,m),Te("click",we,v),N(Ce,lt)},$$slots:{default:!0}}),H(R),qn(k,()=>p(c),Ce=>S(c,Ce)),qn(W,()=>p(u),Ce=>S(u,Ce)),qn(re,()=>p(h),Ce=>S(h,Ce)),qn(ee,()=>p(f),Ce=>S(f,Ce)),qn(Ie,()=>p(g),Ce=>S(g,Ce)),N(b,R)},$$slots:{default:!0},$$legacy:!0}),ne()}var AD=oe("<!> <!>",1);function xD(t){let e=T(!1);function n(){S(e,!0)}var r=AD(),i=ce(r);Ia(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{ID(s)},$$slots:{default:!0}});var a=U(i,2);LD(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var SD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function ND(t){var e=SD();N(t,e)}var TD=oe('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function DD(t,e){te(e,!1);let n=T(null),r=T(null);function i(){var a;(a=p(n))==null||a.click()}M(()=>(p(r),Ts),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const h=JSON.parse(u),g=Hy(h);console.log(g),lL(g),Ts()}},s.onerror=function(){alert(s.error)}}}),pe(),fe(),Ia(t,{title:"Open Puzzle",clickCb:i,children:(a,s)=>{var c=TD(),u=ce(c);ND(u);var h=U(u,2);Ii(h,g=>S(n,g),()=>p(n)),Nw(h,()=>p(r),g=>S(r,g)),N(a,c)},$$slots:{default:!0}}),ne()}var RD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function kD(t){var e=RD();N(t,e)}var GD=oe('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Yg(t,e){te(e,!1);let n=F(e,"name",8),r=F(e,"min",8),i=F(e,"max",8),a=F(e,"value",12),s=F(e,"step",24,()=>(i()-r())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);fe();var h=GD(),g=q(h),f=q(g);H(g);var v=U(g,2);Vt(v),H(h),Z(()=>{nt(f,`${n()??""}: ${a()??""}`),A(v,"min",r()),A(v,"max",i()),A(v,"step",s())}),qn(v,a),Te("change",v,()=>{c()&&c()(a())}),Te("input",v,()=>{u()&&u()(a())}),N(t,h),ne()}var MD=oe('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),$D=oe('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function FD(t,e){te(e,!1);let n=F(e,"showModal",12,!1);const r=4,i=20;let a=T(9),s=T(9),c=T(""),u=T($t.range(1,10));function h(){n(!1)}function g(){Ts(),sL(p(s),p(a)),n(!1)}function f(C){return C.map(w=>String(w)).join(",")}function v(){const C=Math.min(Math.max(p(s),p(a)),9);S(u,$t.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&S(u,C.split(",").map(Number))}fe(),Mr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var w=$D(),b=q(w);Yg(b,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return p(a)},set value(W){S(a,W)},$$legacy:!0});var x=U(b,2);Yg(x,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return p(s)},set value(W){S(s,W)},$$legacy:!0});var R=U(x,2),$=Xe(()=>`Allowed Digits: ${f(p(u))}`);Xr(R,{get title(){return p($)}});var k=U(R,2);Vt(k),Z(()=>A(k,"placeholder",f(p(u)))),k.disabled=!0;var Y=U(k,2);ol(Y,{children:(W,K)=>{var re=MD(),_e=ce(re),ee=U(_e,2);Te("click",_e,g),Te("click",ee,h),N(W,re)},$$slots:{default:!0}}),H(w),qn(k,()=>p(c),W=>S(c,W)),Te("input",k,()=>m(p(c))),N(C,w)},$$slots:{default:!0},$$legacy:!0}),ne()}var UD=oe("<!> <!>",1);function HD(t){let e=T(!1);function n(){S(e,!0)}var r=UD(),i=ce(r);Ia(i,{title:"New Puzzle",clickCb:n,children:(s,c)=>{kD(s)},$$slots:{default:!0}});var a=U(i,2);FD(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var PD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function BD(t){var e=PD();N(t,e)}var WD=oe('<button class="modal-button">Cancel</button>'),YD=oe('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function zD(t,e){te(e,!1);const n=qe(),r=()=>ve(no,"$svgRefStore",n),i=()=>ve(ma,"$puzzleStore",n),a=()=>ve(Tr,"$puzzleMetaStore",n),s=T();let c=F(e,"showModal",12,!1);function u(w){const b=getComputedStyle(w);let x="";for(let R of b){const $=b.getPropertyValue(R);$&&(x+=`${R}:${$};`)}return x}function h(w){const b=w.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(w));const x=w.childNodes;for(let R=0;R<x.length;R++){const $=x[R];if($ instanceof Element){const k=h($);b.replaceChild(k,b.childNodes[R])}}return b}function g(w,b="download.png"){const x=h(w),$=new XMLSerializer().serializeToString(x),k=new Image,Y=new Blob([$],{type:"image/svg+xml;charset=utf-8"}),W=URL.createObjectURL(Y);k.onload=()=>{const K=w.getBoundingClientRect(),re=K.width,_e=K.height,ee=document.createElement("canvas"),le=window.devicePixelRatio||1;ee.width=re*le,ee.height=_e*le;const Ie=ee.getContext("2d");Ie&&(Ie.scale(le,le),Ie.drawImage(k,0,0,re,_e),ee.toBlob(me=>{if(!me)return;const Ce=URL.createObjectURL(me),Se=document.createElement("a");Se.href=Ce,Se.download=b,Se.click(),URL.revokeObjectURL(Ce)}))},k.src=W}function f(w,b="download.svg"){const x=h(w);let $=new XMLSerializer().serializeToString(x);$.includes("<?xml")||($=`<?xml version="1.0" standalone="no"?>\r
`+$);const k=new Blob([$],{type:"image/svg+xml"}),Y=URL.createObjectURL(k),W=document.createElement("a");W.href=Y,W.download=b,W.click(),URL.revokeObjectURL(Y)}const v=()=>{const w=Uy(i());return JSON.stringify(w,null,2)},m=()=>{function w(R,$,k){var Y=document.createElement("a"),W=new Blob([R],{type:k});Y.href=URL.createObjectURL(W),Y.download=$,Y.click(),URL.revokeObjectURL(Y.href)}const b=v(),x=gu(a());w(b,`${x}.json`,"text/plain")};function C(){c(!1)}const I=1;M(()=>r(),()=>{S(s,r())}),pe(),fe(),Mr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(w){c(w)},children:(w,b)=>{var x=YD(),R=q(x),$=q(R),k=q($),Y=U(k,2),W=U(Y,2);H($);var K=U($,2),re=U(q(K),2),_e=q(re);A(_e,"width",400*I),A(_e,"height",300*I),H(re),H(K),H(R);var ee=U(R,2);ol(ee,{children:(le,Ie)=>{var me=WD();Te("click",me,C),N(le,me)},$$slots:{default:!0}}),H(x),Te("click",k,m),Te("click",Y,()=>g(p(s))),Te("click",W,()=>f(p(s))),N(w,x)},$$slots:{default:!0},$$legacy:!0}),ne()}var jD=oe("<!> <!>",1);function VD(t){let e=T(!1);function n(){S(e,!0)}var r=jD(),i=ce(r);Ia(i,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{BD(s)},$$slots:{default:!0}});var a=U(i,2);zD(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var qD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Lv(t){var e=qD();N(t,e)}var KD=oe('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),XD=oe('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Cs(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0);var i=XD(),a=q(i);Xr(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=U(a,2);nl(s,{get isOpen(){return r()},children:(c,u)=>{var h=KD(),g=q(h);dt(g,e,"default",{}),H(h),N(c,h)},$$slots:{default:!0}}),H(i),N(t,i)}var ZD=oe('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function QD(t,e){let n=F(e,"value",8),r=F(e,"onClickCb",8),i=F(e,"disabled",8,!1);var a=ZD(),s=q(a);Vt(s),Ei(2),H(a),Z(()=>{Ot(a,"disabled",i()),hh(s,n()),s.disabled=i()}),Te("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,a)}var JD=oe('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function qr(t,e){te(e,!1);let n=F(e,"value",8),r=F(e,"name",8),i=F(e,"updateCb",8,void 0),a=F(e,"disabled",8,!1);function s(){a()||i()&&i()(!n())}fe();var c=JD(),u=q(c);QD(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var h=U(u,2),g=q(h,!0);H(h),H(c),Z(()=>{Ot(c,"disabled",a()),nt(g,r())}),Te("click",h,Xn(s)),N(t,c),ne()}var eR=oe("<!> <!>",1),tR=oe("<!> <!> <!>",1),nR=oe("<!> <!>",1),rR=oe('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Av(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(Vs,"$gameModeStore",n),a=T();let s=F(e,"showModal",12,!1);M(()=>r(),()=>{S(a,r())}),pe(),fe(),Mr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var h=rR(),g=q(h);Cs(g,{title:"General",children:(I,w)=>{qr(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Mw})},$$slots:{default:!0}});var f=U(g,2);Cs(f,{title:"Tools",children:(I,w)=>{var b=eR(),x=ce(b);qr(x,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:Fw});var R=U(x,2);qr(R,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:Uw}),N(I,b)},$$slots:{default:!0}});var v=U(f,2);Cs(v,{title:"Gameplay",children:(I,w)=>{var b=tR(),x=ce(b);qr(x,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:Pw});var R=U(x,2);qr(R,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:Bw});var $=U(R,2);qr($,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:Hw}),N(I,b)},$$slots:{default:!0}});var m=U(v,2);{var C=I=>{Cs(I,{title:"Setting Mode Display",children:(w,b)=>{var x=nR(),R=ce(x);qr(R,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:Ww});var $=U(R,2);qr($,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:Yw}),N(w,x)},$$slots:{default:!0}})};ge(m,I=>{i()===ao.SETTING&&I(C)})}H(h),N(c,h)},$$slots:{default:!0},$$legacy:!0}),ne()}var iR=oe("<!> <!>",1);function oR(t){let e=T(!1);function n(){S(e,!0)}var r=iR(),i=ce(r);Ia(i,{title:"Settings",clickCb:n,children:(s,c)=>{Lv(s)},$$slots:{default:!0}});var a=U(i,2);Av(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var aR=oe('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function sR(t){var e=aR(),n=q(e);HD(n);var r=U(n,2);VD(r);var i=U(r,2);DD(i,{});var a=U(i,2);xD(a);var s=U(a,2);oR(s),H(e),N(t,e)}var lR=oe('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function cR(t,e){te(e,!1);let n=T(!1);function r(){const i=st(ln),a=[];for(let s=0;s<i.nRows;s++){const c=[];for(let u=0;u<i.nCols;u++){const h=i.getCell(s,u);if(!h)continue;const g=h.value;c.push(g)}a.push(c)}cd(a)}fe(),il(t,{get isOpen(){return p(n)},set isOpen(i){S(n,i)},$$slots:{"panel-header":(i,a)=>{rl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){S(n,s)},$$legacy:!0})},"panel-content":(i,a)=>{var s=lR();Te("click",s,r),N(i,s)}},$$legacy:!0}),ne()}const uR={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function dR(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],a=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[a,i]};if(i==="<"||i==="<=")return{upper_bound:[a,i]}}if(r=n.exec(t),r){const i=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,i==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function _R(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function fR(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function xv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function gR(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=_R(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=fR(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const a=dR(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=xv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var de=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t))(de||{});function Tt(t,e){return`${e}[${t.r},${t.c}]`}function wo(t,e){return t.map(r=>Tt(r,e))}function ke(t,e){return"["+wo(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ze(t){return t.map(n=>Oe(n))}function hR(t){return`values_grid[${t.r},${t.c}]`}function al(t){return t.map(e=>hR(e))}function Ci(t){return`constraint alldifferent([${t.join(",")}]);
`}function yt(t,e){return t&&(t=`
% ${e}
`+t),t}function pd(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i);r.push(a)}return r}function md(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i),s="["+ze(a).join(",")+"]";r.push(s)}return r}function sl(t,e,n,r){let i="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);i+=c}return i}class vR{constructor(){he(this,"model_str","");he(this,"used_vars",new Set)}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=uR){const i=gR(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let a="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],h=c.lower_bound[1];a+=`constraint ${n} ${h} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],h=c.upper_bound[1];a+=`constraint ${n} ${h} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[a,n]}}function pR(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const w=e[I].trim(),b=w.match(r),x=w.match(i),R=w.match(a);if(b||x||R){s={name:(b||x||R)[1],startLine:I,content:[e[I]]},c=(w.match(/\(/g)||[]).length-(w.match(/\)/g)||[]).length,u=(w.match(/\{/g)||[]).length-(w.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(w.match(/\(/g)||[]).length-(w.match(/\)/g)||[]).length,u+=(w.match(/\{/g)||[]).length-(w.match(/\}/g)||[]).length,c===0&&u===0&&w.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let $=s.startLine;for(;$>0&&e[$-1].trim().startsWith("%");)$-=1;n[s.name].startLine=$,s=null}}const h=new Set;function g(I){const w=[];for(const b of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${b}\\s*\\(`,"g").test(I)&&w.push(b);return w}for(const I of e)g(I).forEach(b=>h.add(b));const f=Object.values(n).filter(I=>!h.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));f.sort((I,w)=>w.start-I.start);const v=[...e];for(const I of f)v.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of v)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function zg(t){let e=t,n=e.length;for(;e=pR(e),e.length!=n;)n=e.length;return e}const jg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function mR(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function CR(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions;
`);for(const a of e.getAllCells()){const s=Tt(a,"board_regions");a.region!==null?t.add(`constraint ${s} = ${a.region};
`):t.add(`constraint ${s} = ${r-1};
`)}}}function ER(t,e){const r=t.grid.getPositiveDiagonal(),i=ze(r);let a=Ci(i);return a=`
% Positive Diagonal Constraint
`+a,a}function IR(t,e){const r=t.grid.getNegativeDiagonal(),i=ze(r);let a=Ci(i);return a=`
% Negative Diagonal Constraint
`+a,a}function bR(t,e){const r=t.grid.getPositiveDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function wR(t,e){const r=t.grid.getNegativeDiagonal(),a="["+ze(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function OR(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,h]=[c.r,c.c];for(let g=0;g<u;g++){const f=n.getCell(g,h),v=n.getCell(u,h+(u-g));if(!f||!v)continue;const m=Oe(f),C=Oe(v),w=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=w}}return a}function yR(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,h]=[c.r,c.c];for(let g=0;g<u;g++){const f=n.getCell(g,h),v=n.getCell(u,h-(u-g));if(!f||!v)continue;const m=Oe(f),C=Oe(v),w=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=w}}return a}function LR(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let a=0;a<i;a++){const s=n.getDisjointGroup(a),h=`constraint alldifferent(${`[${ze(s).join(",")}]`});
`;r+=h}return r}function AR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getNeighboorCells(i).filter(f=>f.r+f.c>=i.r+i.c),c=Oe(i),h=`[${ze(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${h});
`;r+=g}return r}function xR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getCellsByKnightMove(i).filter(f=>f.r>=i.r||f.c>=i.c),c=Oe(i),h=`[${ze(s).join(",")}]`,g=`constraint different_from_group_p(${c}, ${h});
`;r+=g}return r}function SR(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=yt(n,`${e}`),n}function NR(t,e){let n="";return n+=`constraint tango_p(board);
`,n=yt(n,`${e}`),n}function TR(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=yt(n,`${e}`),n}function*ai(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function DR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of ai(n)){const s=Oe(i),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function RR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of ai(n)){const s=Oe(i),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function kR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getRow(i.r),c=`[${ze(a).join(",")}]`,u=i.c+1,h=`constraint indexing_column_p(${c}, ${u});
`;r+=h}return r}function GR(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function MR(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function $R(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=yt(n,`${e}`),n}function Jc(t,e){const n=t.grid,i=t.localConstraints.get(_.XV);if(!(e===_.ALL_V_GIVEN||e===_.ALL_X_GIVEN||e===_.ALL_XV_GIVEN))return"";const a=[];if(i)for(const c of Object.values(i)){const u=c.cells,h=new Set(u.map(f=>n.getCell(f.r,f.c)).filter(f=>!!f)),g=c.value;(e===_.ALL_V_GIVEN&&(g==="v"||g==="V")||e===_.ALL_X_GIVEN&&(g==="x"||g==="X")||e===_.ALL_XV_GIVEN)&&a.push(h)}let s="";for(const[c,u]of ai(n)){if(a.find(v=>v.has(c)&&v.has(u)))continue;const g=Oe(c),f=Oe(u);if(e===_.ALL_V_GIVEN){const v=`constraint ${g} + ${f} != 5;
`;s+=v}else if(e===_.ALL_X_GIVEN){const v=`constraint ${g} + ${f} != 10;
`;s+=v}else{const v=`constraint ${g} + ${f} != 5 /\\ (${g} + ${f} != 10);
`;s+=v}}return s=yt(s,`${e}`),s}function io(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,a=new Set(i.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function FR(t,e){const n=t.grid,i=t.localConstraints.get(_.XY_DIFFERENCES),a=io(n,i);let s="";for(const[c,u]of ai(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const g=Oe(c),f=Oe(u);let v="";if(c.r==u.r){const I=n.getRow(c.r)[0];v=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];v=Oe(I)}if(!v)continue;const m=`constraint abs(${g} - ${f}) != ${v};
`;s+=m}return s=yt(s,`${e}`),s}function UR(t,e){const n=t.grid,r=t.localConstraints,i=r.get(_.DIFFERENCE),a=r.get(_.RATIO);let s=io(n,i);s=[...s,...io(n,a)];let c=[];i&&(c=Object.values(i).map(g=>g.value).map(g=>g||"1"));const u=[...new Set(c)];let h="";for(const[g,f]of ai(n)){if(s.find(I=>I.has(g)&&I.has(f)))continue;const m=Oe(g),C=Oe(f);for(const I of u){const w=parseInt(I),b=`constraint abs(${m} - ${C}) != ${w};
`;h+=b}}return h=yt(h,`${e}`),h}function HR(t,e){const n=t.grid,r=t.localConstraints,i=r.get(_.RATIO),a=r.get(_.DIFFERENCE);let s=io(n,i);s=[...s,...io(n,a)];let c=[];i&&(c=Object.values(i).map(g=>g.value).map(g=>g||"2"));const u=[...new Set(c)];let h="";for(const[g,f]of ai(n)){if(s.find(I=>I.has(g)&&I.has(f)))continue;const m=Oe(g),C=Oe(f);for(const I of u){const w=parseInt(I),b=`constraint not ratio_p(${m}, ${C}, ${w});
`;h+=b}}return h=yt(h,`${e}`),h}function PR(t,e){const n=t.grid,i=t.localConstraints.get(_.YIN_YANG_KROPKI),a=io(n,i);let s="";for(const[c,u]of ai(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const g=Oe(c),f=Oe(u),v=Tt(c,de.YIN_YANG),m=Tt(u,de.YIN_YANG),C=`constraint not yin_yang_kropki_p(${g}, ${f}, ${v}, ${m});
`;s+=C}return s=yt(s,`${e}`),s}function BR(t,e){const n=t.grid,i=t.localConstraints.get(_.YIN_YANG_COUNT_SHADED_CELLS),a=i?Object.values(i):[];function s(u,h){return u.find(g=>g.cell.r===h.r&&g.cell.c===h.c)}let c="";for(const u of n.getAllCells()){const h=s(a,u),g=h?h.directions:[],f=Oe(u),v=[Be.E,Be.N,Be.S,Be.W];for(const m of v){if(g.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=ke(C,de.YIN_YANG);c+=`constraint count(${I}, 1) != ${f};
`}}return c=yt(c,`${e}`),c}function Cd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,a=t.getCell(i.r,i.c);a&&n.add(a)}return n}function WR(t,e){const n=t.grid,i=t.localConstraints.get(_.INDEXING_COLUMN),a=Cd(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const h=n.getRow(c.r),f=`[${ze(h).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${f}, ${v});
`;s+=m}return s=yt(s,`${e}`),s}function YR(t,e){const n=t.grid,i=t.localConstraints.get(_.RADAR),a=Cd(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const h=Oe(c),[g,f,v,m]=md(n,c),C=`constraint not radar_p(${h}, ${g}, ${f}, ${v}, ${m}, 9);
`;s+=C}return s=yt(s,`${e}`),s}function zR(t,e){const n=t.grid,i=t.localConstraints.get(_.NURIMISAKI_UNSHADED_ENDPOINTS),a=Cd(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const h=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${h});
`;s+=v}return s=yt(s,`${e}`),s}function jR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of ai(n)){const s=Oe(i),c=Oe(a),u=`nurimisaki[${i.r},${i.c}]`,h=`nurimisaki[${a.r},${a.c}]`,g=`constraint (${u} == 0 /\\ ${h} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=g}return r}function VR(t,e){const n=t.grid,i=t.localConstraints.get(_.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let a=`
% ${e}
`;for(const s of Object.values(i)){const u=s.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),h=ke(u,de.YIN_YANG);a+=`constraint count_unique_values(${h}) >= 2;
`}return a}function qR(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=yt(n,`${e}`),n}function KR(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=yt(n,`${e}`),n}function XR(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=yt(n,`${e}`),n}function ZR(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=yt(n,`${e}`),n}function QR(t,e){let n="";return n+=`constraint not_fully_shaded_or_unshaded_2x2_p(cave_shading);
`,n=yt(n,`${e}`),n}function JR(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=yt(n,`${e}`),n}function ek(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=yt(n,`${e}`),n}function tk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=yt(n,`${e}`),n}function nk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=yt(n,`${e}`),n}function rk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=yt(n,`${e}`),n}function ik(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const a=r.getNeighboorCells(i).filter(h=>i.region!==null&&h.region===i.region),s=Tt(i,de.BOARD),c=Tt(i,de.YIN_YANG),u=ke(a,de.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=yt(n,`${e}`),n}function ok(t){const e=t.globalConstraints;if(e.get(_.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),h=ze(u),g=Ci(h);r+=g}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),h=ze(u),g=Ci(h);r+=g}if(!e.get(_.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const h=n.getRegion(u),g=ze(h),f=Ci(g);r+=f}}return r}function ak(t){const e=_.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const sk=new Map([[_.POSITIVE_DIAGONAL,ER],[_.NEGATIVE_DIAGONAL,IR],[_.POSITIVE_ANTIDIAGONAL,bR],[_.NEGATIVE_ANTIDIAGONAL,wR],[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,OR],[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,yR],[_.ANTIKING,AR],[_.ANTIKNIGHT,xR],[_.ANTI_GIRAFFE,SR],[_.DISJOINT_GROUPS,LR],[_.TANGO,NR],[_.NONCONSECUTIVE,DR],[_.NONRATIO,RR],[_.ANTI_ENTROPY,TR],[_.GLOBAL_INDEXING_COLUMN,kR],[_.ALL_V_GIVEN,Jc],[_.ALL_X_GIVEN,Jc],[_.ALL_XV_GIVEN,Jc],[_.ALL_DIFFERENCES_GIVEN,UR],[_.ALL_RATIOS_GIVEN,HR],[_.ALL_XY_DIFFERENCES_GIVEN,FR],[_.ALL_YIN_YANG_KROPKI_GIVEN,PR],[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,BR],[_.ALL_INDEXING_COLUMN_GIVEN,WR],[_.ALL_RADARS_GIVEN,YR],[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,zR],[_.NURIMISAKI_PATH_GERMAN_WHISPERS,jR],[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,VR],[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,$R],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,GR],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,MR],[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,qR],[_.CAVE_CELLS_ARE_ODD,XR],[_.CAVE_WALLS_ARE_EVEN,ZR],[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,QR],[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,JR],[_.YIN_YANG_FILLOMINO_PARITY,KR],[_.TWO_SYMMETRIC_GALAXIES,nk],[_.EVERY_CELL_BELONGS_TO_A_GALAXY,ek],[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,tk],[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,rk],[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,ik]]);function lk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const a=sk.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Sv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Nv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${ze(n.slice(1)).join(",")}]`}function ck(t,e,n,r){let i="";const a=Sv(e,r),s=`arrow_${n}`;if(i+=`var int: ${s};
`,i+=`% arrow pill
`,a.length===1){const u=a[0];i+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((h,g)=>`${Math.pow(10,g)}*${h}`).join(" + ");i+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;i+=`% arrow lines
`;for(const u of c){const g=`constraint sum(${Nv(e,u)}) == ${s};
`;i+=g}return i}function uk(t,e,n,r){let i="";const a=Sv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${Nv(e,u)}, ${s});
`;i+=g}}return i}const dk=new Map([[_.ARROW,ck],[_.AVERAGE_ARROW,uk]]);function _k(t,e,n,r){let i="";const a=dk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function Qr(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function Tv(t,e,n){const i=`[${Qr(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function ll(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ed(t,e,n,r,i){const s=`[${Qr(e,r).join(",")}]`,c=r.value,u=ll(t,c,n);if(!u)return"";const h=u[1];let g=u[0];return g+=`constraint ${i}(${s}, ${h});
`,g}function fk(t,e,n,r){const i=Qr(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return Ci(i);const c=ll(t,s,n);if(!c)return"";const u=c[1];let h=c[0];return h+=`constraint killer_cage(${a}, ${u});
`,h}function gk(t,e,n,r){const i=Qr(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return Ci(i);const c=ll(t,s,n);if(!c)return"";const u=c[1];let h=c[0];return h+=`constraint inverted_killer_cage_p(${a}, ${u});
`,h}function hk(t,e,n,r){return Ed(t,e,n,r,"sum_cage_p")}function vk(t,e,n,r){return Tv(e,r,"parity_balance_cage_p")}function pk(t,e,n,r){return Tv(e,r,"sum_cage_look_and_say_p")}function mk(t,e,n,r){return Ed(t,e,n,r,"divisible_killer_cage_p")}function Ck(t,e,n,r){return Ed(t,e,n,r,"spotlight_cage_p")}function Ek(t,e,n,r){const a=`[${Qr(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function Ik(t,e,n,r){const a=`[${Qr(e,r).join(",")}]`,s=r.value;let c="";const u=ll(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const g=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),f=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!f.includes(I)&&f.push(I)});const v=ke(f,de.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${v});
`,c}function Dv(t,e,n,r,i){const s=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),u=`[${ze(s).join(",")}]`,h=ke(s,de.YIN_YANG),g=r.value;if(g){const f=parseInt(g);return`constraint ${i}(${u}, ${h}, ${f});
`}return""}function bk(t,e,n,r){return Dv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function wk(t,e,n,r){return Dv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function Ok(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=`[${ze(a).join(",")}]`,h=`[${al(a).join(", ")}]`,g=r.value;if(g){const f=parseInt(g);return`constraint doublers_killer_cage_p(${c}, ${h}, ${f});
`}return""}function yk(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=`[${ze(a).join(",")}]`,h=`[${al(a).join(", ")}]`,g=r.value;if(g){const f=parseInt(g);return`constraint negators_killer_cage_p(${c}, ${h}, ${f});
`}return""}function Lk(t,e){let n="";const r=new Map;for(const i of e){const a=i.value,s=r.get(a);if(!s){r.set(a,[i]);continue}s.push(i)}for(const i of r.values())if(!(i.length<=1))for(const[a,s]of i.flatMap((c,u)=>i.slice(u+1).map(h=>[c,h]))){const u=`[${Qr(t,a).join(",")}]`,g=`[${Qr(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${g});
`}return n}const Ak=new Map([[_.KILLER_CAGE,fk],[_.INVERTED_KILLER_CAGE,gk],[_.SUM_CAGE,hk],[_.PARITY_BALANCE_CAGE,vk],[_.SUM_CAGE_LOOK_AND_SAY,pk],[_.DIVISIBLE_KILLER_CAGE,mk],[_.SPOTLIGHT_CAGE,Ck],[_.UNIQUE_DIGITS_CAGE,Ek],[_.VAULTED_CAGE,Ik],[_.YIN_YANG_ANTITHESIS_KILLER_CAGE,bk],[_.YIN_YANG_BREAKEVEN_KILLER_CAGE,wk],[_.DOUBLERS_KILLER_CAGE,Ok],[_.NEGATORS_KILLER_CAGE,yk]]);function xk(t,e,n,r){let i="";const a=Ak.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}else if(n===_.MULTISET_CAGE){const s=Object.values(r),c=Lk(e,s);i+=c}return i}function Sk(t,e,n,r){const i=e.r+.5,a=e.c+.5,s=n-i,c=r-a,u=Math.floor(n+s),h=Math.floor(r+c);return t.getCell(u,h)}function Nk(t,e){const n=[],r=[],i=[];for(const a of t.getAllCells()){const s=Sk(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||i.push(a)}return[n,r,i]}function Tk(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],h=u.cell,g=c+1,[f,v,m]=Nk(e,h),C=ke(f,de.GALAXY_REGIONS),I=ke(v,de.GALAXY_REGIONS),w=ke(m,de.GALAXY_REGIONS);r+=`% galaxy ${g}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${w}, ${g});
`,r+=`constraint connected_region(${de.GALAXY_REGIONS}, ${g});
`;const b=u.value;if(!b)continue;const x=parseInt(b);r+=`constraint galaxy_sum_p(${de.BOARD}, ${de.GALAXY_REGIONS}, ${x}, ${g});
`}if(!n.length)return r;const i=e.nCols*e.nRows,s=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${de.GALAXY_REGIONS}, ${s});
`,r}function Dk(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Rk(t,e,n,r){const i=r.cell,[a,s]=[i.r,i.c],c=r.value,u=Dk(t,c,n);if(!u)return"";const h=u[1];let g=u[0],f=[];if(a%1===0&&s%1===0?f=Dh(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(f=kh(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!f.length)return"";const v=ke(f,de.BOARD),m=ke(f,de.YIN_YANG);return g+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${h};
`,g}const kk=new Map([[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,Rk]]),Gk=new Map([[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,Tk]]);function Mk(t,e,n,r){let i="";const a=Gk.get(n),s=kk.get(n);if(s)for(const[c,u]of Object.entries(r)){const h=s(t,e,c,u);i+=h}else if(a){const c=Object.values(r),u=a(t,e,c);i+=u}return i}function Vg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return ze(n)}function $k(t,e){const r="["+Vg(t,e.cells).join(",")+"]",a="["+Vg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const Fk=new Map([[_.CLONE_REGION,$k]]);function Uk(t,e,n,r){return sl(e,n,r,Fk)}function Id(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function bd(t,e,n){const i=`[${Id(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Rv(t,e,n,r=""){const a=`[${Id(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function Hk(t,e,n,r){const a=`[${Id(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=xv(s);if(!c)return"";let u="";for(const g of c){const f=parseInt(g);Number.isNaN(f)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const h="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${h});
`,u}function Pk(t,e,n,r){return Rv(e,r,"corner_sum_p")}function Bk(t,e,n,r){return Rv(e,r,"corner_even_count_p")}function Wk(t,e,n,r){return bd(e,r,"corner_sum_of_three_equals_the_other_p")}function Yk(t,e,n,r){return bd(e,r,"equal_diagonal_differences_p")}function zk(t,e,n,r){return bd(e,r,"product_square_p")}const jk=new Map([[_.QUADRUPLE,Hk],[_.CORNER_SUM,Pk],[_.CORNER_EVEN_COUNT,Bk],[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,Wk],[_.PRODUCT_SQUARE,zk],[_.EQUAL_DIAGONAL_DIFFERENCES,Yk]]);function Vk(t,e,n,r){let i="";const a=jk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function cl(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return ze(r)}function qk(t,e,n){const r=cl(t,e),[i,a]=r;return`constraint ${n}(${i}, ${a});
`}function Kk(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function ul(t,e,n,r,i,a=""){var m;const s=cl(e,r),[c,u]=s,h=(m=r.value)!=null&&m.length?r.value:a,g=Kk(t,h,n);if(!g)return"";const f=g[1];let v=g[0];return v+=`constraint ${i}(${c}, ${u}, ${f});
`,v}function Xk(t,e,n,r){const i=cl(e,r),[a,s]=i;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function Zk(t,e,n,r){return ul(t,e,n,r,"ratio_p","2")}function Qk(t,e,n,r){return ul(t,e,n,r,"abs_difference","1")}function Jk(t,e,n,r){const i=cl(e,r),[a,s]=i,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function e5(t,e,n,r){return ul(t,e,n,r,"edge_sum_p")}function t5(t,e,n,r){return ul(t,e,n,r,"edge_modulo_p")}function n5(t,e,n,r){return qk(e,r,"edge_factor_p")}function r5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),[u,h]=a;let g="";if(u.r==h.r){const m=e.getRow(u.r)[0];g=Oe(m)}else if(u.c==h.c){const m=e.getCol(u.c)[0];g=Oe(m)}return g?`constraint abs(${s} - ${c}) == ${g};
`:""}function i5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),u=wo(a,de.YIN_YANG),[h,g]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${h}, ${g});
`}function o5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=ze(a),u=wo(a,de.YIN_YANG),[h,g]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${h}, ${g});
`}function a5(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),s=wo(a,de.UNKNOWN_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}const s5=new Map([[_.XV,Xk],[_.DIFFERENCE,Qk],[_.RATIO,Zk],[_.EDGE_INEQUALITY,Jk],[_.EDGE_SUM,e5],[_.EDGE_MODULO,t5],[_.EDGE_FACTOR,n5],[_.XY_DIFFERENCES,r5],[_.YIN_YANG_KROPKI,i5],[_.YIN_YANG_WHITE_KROPKI,o5],[_.UNKNOWN_REGION_BORDER,a5]]);function l5(t,e,n,r){let i="";const a=s5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function Oo(t,e,n=!1){let i=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(i=[...new Set(i)]),ze(i)}function mt(t,e,n,r=!1){const a=`[${Oo(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function vr(t,e,n,r=""){const a=`[${Oo(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function wd(t,e,n){let i=e.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),a=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),a=!0);const c=`[${ze(i).join(",")}]`,u=e.value;if(!u)return"";const h=parseInt(u);return`constraint ${n}(${c}, ${h}, ${a});
`}function c5(t,e,n){return mt(t,n,"renban",!0)}function u5(t,e,n){return mt(t,n,"double_renban_p",!0)}function d5(t,e,n){return mt(t,n,"renrenbanban_p",!0)}function _5(t,e,n){return mt(t,n,"knabner_p",!0)}function f5(t,e,n){return mt(t,n,"renban_or_nabner_line_p",!0)}function g5(t,e,n){return mt(t,n,"out_of_order_consecutive_line_p")}function h5(t,e,n){const i=`[${Oo(t,n).join(",")}]`,a=n.value,s=a?parseInt(a):5;return`constraint whispers(${i}, ${s});
`}function v5(t,e,n){return`constraint whispers(${`[${Oo(t,n).join(",")}]`}, 4);
`}function p5(t,e,n){return mt(t,n,"strictly_increasing")}function m5(t,e,n){return mt(t,n,"fuzzy_thermo_p")}function C5(t,e,n){return mt(t,n,"increasing")}function E5(t,e,n){return vr(t,n,"custom_thermo_p")}function I5(t,e,n){return mt(t,n,"palindrome")}function b5(t,e,n){return vr(t,n,"sum_line_p")}function w5(t,e,n){return mt(t,n,"xv_line_p")}function O5(t,e,n){return vr(t,n,"at_least_x_line_p","10")}function y5(t,e,n){return vr(t,n,"product_line_p")}function L5(t,e,n){return vr(t,n,"maximum_adjacent_difference_line_p","2")}function A5(t,e,n){return mt(t,n,"adjacent_multiples_line_p")}function x5(t,e,n){return mt(t,n,"index_line_p")}function S5(t,e,n){return mt(t,n,"zipper_line_p")}function N5(t,e,n){return wd(t,n,"segmented_sum_line_p")}function T5(t,e,n){return wd(t,n,"n_consecutive_renban_line_p")}function D5(t,e,n){return wd(t,n,"n_consecutive_fuzzy_sum_line_p")}function R5(t,e,n){const i=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u);let a="";const s=[];for(let u=0;u<i.length;u++){const h=i[u],g=t.getRow(h.r),f=ke(g,de.BOARD),v=`cycle_${e}_${u}`;s.push(v);const m=h.c+1;a+=`var int: ${v} = cycle_order_f(${f}, ${m});
`}const c="["+s.join(",")+"]";return a+=`constraint strictly_increasing(${c});
`,a}function k5(t,e,n){return mt(t,n,"adjacent_differences_count_line_p")}function G5(t,e,n){return mt(t,n,"same_parity_line_p")}function M5(t,e,n){return vr(t,n,"renban_or_whispers_p","5")}function $5(t,e,n){return mt(t,n,"alldifferent",!0)}function F5(t,e,n){return mt(t,n,"repeated_digits_line_p")}function U5(t,e,n){return mt(t,n,"superfuzzy_arrow_p")}function H5(t,e,n){return mt(t,n,"headless_arrow_p")}function P5(t,e,n){return vr(t,n,"unimodular_line_p","3")}function B5(t,e,n){return vr(t,n,"modular_line_p","3")}function W5(t,e,n){return vr(t,n,"modular_or_unimodular_line_p","3")}function Y5(t,e,n){return mt(t,n,"arithmetic_sequence_line_p")}function z5(t,e,n){return mt(t,n,"odd_even_oscillator_line_p")}function j5(t,e,n){return vr(t,n,"high_low_oscillator_line_p","5")}function V5(t,e,n){return mt(t,n,"look_and_say_line_p",!0)}function q5(t,e,n){const i=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f);function a(f){const v=[];let m=null;for(const C of f)C.r!=m?(v.push([C]),m=C.r):v[v.length-1].push(C);return v}const s=a(i);if(s.length<2)return"";const c=s[0],h=`[${ze(c).join(",")}]`;let g="";for(let f=1;f<s.length;f++){const v=s[f],C=`[${ze(v).join(",")}]`;g+=`constraint sum(${C}) == sum(${h});
`}return g}function K5(t,e,n){return mt(t,n,"between_line_p")}function X5(t,e,n){return mt(t,n,"tightrope_line_p")}function Z5(t,e,n){return mt(t,n,"double_arrow_p")}function Q5(t,e,n){return mt(t,n,"split_peas_p")}function J5(t,e,n){return mt(t,n,"parity_count_line_p")}function e3(t,e,n){return mt(t,n,"product_of_ends_equals_sum_of_line_p")}function t3(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const a=i.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(i),n=a}return r.length&&e.push(r),e}function n3(t,e,n){let r="";const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=t3(a);if(!s.length)return"";const c=`sum_line_${e}`;r+=`var int: ${c};
`;for(const u of s){const f=`constraint sum(${`[${ze(u).join(",")}]`}) == ${c};
`;r+=f}return r}function r3(t,e,n){return`constraint entropic_line_p(${`[${Oo(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function i3(t,e,n){return`constraint entropic_or_modular_line_p(${`[${Oo(t,n).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function o3(t,e,n){const i=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),s=`[${ze(i).join(",")}]`,c=ke(i,de.YIN_YANG);let u=n.value;u||(u="5");const h=parseInt(u);return`constraint yin_yang_shaded_whispers_line_p(${s}, ${c}, ${h});
`}function a3(t,e,n){const i=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),s=`[${ze(i).join(",")}]`,c=ke(i,de.YIN_YANG);let u=n.value;u||(u="3");const h=parseInt(u);return`constraint yin_yang_unshaded_modular_line_p(${s}, ${c}, ${h});
`}function Od(t,e,n){const i=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),s=`[${ze(i).join(",")}]`,c=ke(i,de.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function s3(t,e,n){return Od(t,n,"yin_yang_unshaded_entropic_line_p")}function l3(t,e,n){return Od(t,n,"yin_yang_indexing_line_coloring_p")}function c3(t,e,n){return Od(t,n,"yin_yang_region_sum_line_p")}function u3(t,e,n){const i=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),a=ke(i,de.VALUES_GRID),s=ke(i,de.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${s});
`}function yd(t,e,n){const i=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${al(i).join(", ")}]`;return`constraint ${n}(${s});
`}function d3(t,e,n){return yd(t,n,"between_line_p")}function _3(t,e,n){return yd(t,n,"double_arrow_p")}function f3(t,e,n){return yd(t,n,"strictly_increasing")}const g3=new Map([[_.THERMOMETER,p5],[_.FUZZY_THERMOMETER,m5],[_.SLOW_THERMOMETER,C5],[_.CUSTOM_THERMOMETER,E5],[_.RENBAN_LINE,c5],[_.DOUBLE_RENBAN_LINE,u5],[_.RENRENBANBAN_LINE,d5],[_.NABNER_LINE,_5],[_.WHISPERS_LINE,h5],[_.DUTCH_WHISPERS,v5],[_.RENBAN_OR_WHISPERS_LINE,M5],[_.RENBAN_OR_NABNER_LINE,f5],[_.OUT_OF_ORDER_CONSECUTIVE_LINE,g5],[_.N_CONSECUTIVE_RENBAN_LINE,T5],[_.PALINDROME,I5],[_.SUM_LINE,b5],[_.PRODUCT_LINE,y5],[_.XV_LINE,w5],[_.AT_LEAST_X_LINE,O5],[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,L5],[_.SAME_PARITY_LINE,G5],[_.ADJACENT_MULTIPLES_LINE,A5],[_.ADJACENT_DIFFERENCES_COUNT_LINE,k5],[_.LOOK_AND_SAY_LINE,V5],[_.ROW_SUM_LINE,q5],[_.INDEX_LINE,x5],[_.ZIPPER_LINE,S5],[_.SEGMENTED_SUM_LINE,N5],[_.N_CONSECUTIVE_FUZZY_SUM_LINE,D5],[_.SUPERFUZZY_ARROW,U5],[_.HEADLESS_ARROW,H5],[_.ARITHMETIC_SEQUENCE_LINE,Y5],[_.ODD_EVEN_OSCILLATOR_LINE,z5],[_.HIGH_LOW_OSCILLATOR_LINE,j5],[_.UNIQUE_VALUES_LINE,$5],[_.REPEATED_DIGITS_LINE,F5],[_.UNIMODULAR_LINE,P5],[_.MODULAR_LINE,B5],[_.MODULAR_OR_UNIMODULAR_LINE,W5],[_.REGION_SUM_LINE,n3],[_.ENTROPIC_LINE,r3],[_.ENTROPIC_OR_MODULAR_LINE,i3],[_.ROW_CYCLE_THERMOMETER,R5],[_.BETWEEN_LINE,K5],[_.TIGHTROPE_LINE,X5],[_.DOUBLE_ARROW_LINE,Z5],[_.SPLIT_PEAS,Q5],[_.PARITY_COUNT_LINE,J5],[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,e3],[_.DOUBLERS_THERMOMETER,f3],[_.DOUBLERS_BETWEEN_LINE,d3],[_.DOUBLERS_DOUBLE_ARROW_LINE,_3],[_.YIN_YANG_SHADED_WHISPERS_LINE,o3],[_.YIN_YANG_UNSHADED_ENTROPIC_LINE,s3],[_.YIN_YANG_UNSHADED_MODULAR_LINE,a3],[_.YIN_YANG_REGION_SUM_LINE,c3],[_.YIN_YANG_INDEXING_LINE_COLORING,l3],[_.GOLDILOCKS_ZONE_REGION_SUM,u3]]);function h3(t,e,n,r){let i="";const a=g3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(e,s,c);i+=u}return i}function Ld(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return ze(i)}function dl(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,i)}function Qn(t,e,n,r){const i=n.cell,a=e.getCell(i.r,i.c),c=`[${Ld(e,n).join(",")}]`,u=n.value,h=dl(t,u,i,a);if(!h)return"";const g=h[1];let f=h[0];return f+=`constraint ${r}(${c}, ${g});
`,f}function v3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${Ld(e,r).join(",")}]`,u=r.value,h=Math.min(e.nCols,e.nRows),g=dl(t,u,i,a);if(!g)return"";const f=g[1];let v=g[0];return v+=`constraint sandwich_sum_p(${c}, ${f}, 1, ${h});
`,v}function p3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=Ld(e,r),c=`[${s.join(",")}]`,u=s[0],h=r.value,g=dl(t,h,i,a);if(!g)return"";const f=g[1];let v=g[0];return v+=`constraint x_index_p(${c}, ${u}, ${f});
`,v}function m3(t,e,n,r){return Qn(t,e,r,"x_sum_p")}function C3(t,e,n,r){return Qn(t,e,r,"shortsighted_x_sum_p")}function E3(t,e,n,r){return Qn(t,e,r,"broken_x_sum_p")}function I3(t,e,n,r){return Qn(t,e,r,"shifted_x_sum_p")}function b3(t,e,n,r){return Qn(t,e,r,"skyscrapers_p")}function w3(t,e,n,r){return Qn(t,e,r,"x_sum_skyscrapers_p")}function O3(t,e,n,r){return Qn(t,e,r,"battlefield_p")}function y3(t,e,n,r){return Qn(t,e,r,"rising_streak_p")}function L3(t,e,n,r){return Qn(t,e,r,"outside_consecutive_sum_p")}function A3(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${ze(s).join(",")}]`,h=ke(s,de.CELL_CENTER_LOOP),g=r.value;if(g){const f=parseInt(g);return`constraint loopwhiches_p(${u}, ${h}, ${f});
`}return""}function x3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=r.direction,c=e.getCellsInDirection(i.r,i.c,s),u=ke(c,de.BOARD),h=ke(c,de.UNKNOWN_REGIONS),g=r.value,f=dl(t,g,i,a);if(!f)return"";const v=f[1];let m=f[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${h}, ${v});
`,m}function S3(t,e,n,r){return Qn(t,e,r,"little_killer_sum_p")}function N3(t,e,n,r){return Qn(t,e,r,"little_killer_product_p")}function T3(t,e,n,r){return Qn(t,e,r,"x_omit_little_killer_sum_p")}function D3(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${ze(s).join(",")}]`,h=ke(s,de.YIN_YANG),g=r.value;if(g){const f=parseInt(g);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${h}, ${f});
`}return""}function R3(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${al(s).join(", ")}]`,h=r.value;if(h){const g=parseInt(h);return`constraint little_killer_sum_p(${u}, ${g});
`}return""}const k3=new Map([[_.SANDWICH_SUM,v3],[_.X_SUM,m3],[_.SHORTSIGHTED_X_SUM,C3],[_.BROKEN_X_SUM,E3],[_.SHIFTED_X_SUM,I3],[_.SKYSCRAPERS,b3],[_.X_SUM_SKYSCRAPERS,w3],[_.X_INDEX,p3],[_.BATTLEFIELD,O3],[_.RISING_STREAK,y3],[_.OUTSIDE_CONSECUTIVE_SUM,L3],[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,D3],[_.LOOPWICHES,A3],[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,x3],[_.LITTLE_KILLER_SUM,S3],[_.LITTLE_KILLER_PRODUCT,N3],[_.X_OMIT_LITTLE_KILLER_SUM,T3],[_.NEGATORS_LITTLE_KILLER_SUM,R3]]);function G3(t,e,n,r){let i="";const a=k3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function M3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let a=t.getCellsInDirection(r.r,r.c,i);a=[r,...a];const s=ke(a,de.SASHIGANE),c=ke(a,de.SASHIGANE_BENDS),u=Oe(r),h=Tt(r,de.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${h}, ${s}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function $3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,a=t.getCellsInDirection(r.r,r.c,i),c="["+ze(a).join(",")+"]",u=ke(a,de.CELL_CENTER_LOOP),h=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${h});
`}const F3=new Map([[_.SASHIGANE_ARROW_POINTS_TO_BEND,M3],[_.THERMO_SIGHTLINE_LOOP_ARROW,$3]]);function U3(t,e,n,r){return sl(e,n,r,F3)}function kv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i);return`constraint ${n}(${a});
`}function Gv(t,e,n,r=""){const i=e.cell,a=t.getCell(i.r,i.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function H3(t,e,n,r){return kv(e,r,"odd_p")}function P3(t,e,n,r){return kv(e,r,"even_p")}function B3(t,e,n,r){return Gv(e,r,"low_digit_p","5")}function W3(t,e,n,r){return Gv(e,r,"high_digit_p","5")}function Mv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=t.getNeighboorCells(i),c=ke(s,de.BOARD);return`constraint ${n}(${c}) == ${a};
`}function Y3(t,e,n,r){return Mv(e,r,"odd_count")}function z3(t,e,n,r){return Mv(e,r,"even_count")}function j3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=ke(c,de.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function V3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${ke(c,de.BOARD)}, ${s});
`}function q3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${ke(c,de.BOARD)}, ${s});
`}function K3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getRow(a.r),c=ke(s,de.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function X3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getCol(a.c),c=ke(s,de.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function Z3(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const g=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${g};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function Q3(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),h=e.getCell(i.r,i.c+1);if(!s||!c||!u||!h)return"";const g=Oe(s),f=Oe(c),v=Oe(u),m=Oe(h);return`constraint groups_opposite_parity_p([${g},${f}], [${v},${m}]);
`}function Ad(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),[s,c,u,h]=md(t,i);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${h});
`}function J3(t,e,n,r){return Ad(e,r,"is_watchtower_p")}function eG(t,e,n,r){return Ad(e,r,"is_not_watchtower_p")}function tG(t,e,n,r){return Ad(e,r,"farsight_p")}function nG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),[c,u,h,g]=md(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${h}, ${g}, 9);
`}function rG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+ze(c).join(",")+"]",h=e.getCol(a.c),g="["+ze(h).join(",")+"]",[f,v]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${g}, ${f}, ${v}, ${s});
`}function $v(t,e,n){let r="";const i=e.map(s=>s.cell),a=new Set(i.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));for(const s of e){const c=s.cell,u=t.getCell(c.r,c.c);if(!u)continue;const h=Oe(u),g=t.getOrthogonallyAdjacentCells(u).filter(m=>!a.has(m)),f=ke(g,de.BOARD),v=`constraint ${n}(${f}, ${h});
`;r+=v}return r}function iG(t,e){return $v(t,e,"maximum_p")}function oG(t,e){return $v(t,e,"minimum_p")}function aG(t,e){let n="";const r=e.map(c=>c.cell),i=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...i]).join(`,
	`)}`;n+=`array[int] of var int: counting_circles = [
	${s}
];
`;for(const c of e){const u=c.cell,h=t.getCell(u.r,u.c);if(!h)continue;const g=Oe(h),f=`constraint count(counting_circles, ${g}) == ${g};
`;n+=f}return n+=`
`,n}function sG(t,e){let n="";const r=e.map(h=>h.cell),i=new Set(r.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h)),s=`${ze([...i]).join(`,
	`)}`,u=`${wo([...i],de.COUNTING_CIRCLES_COLORS).join(`,
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
`;for(const h of t.getAllCells()){if(i.has(h))continue;const g=Tt(h,de.COUNTING_CIRCLES_COLORS);n+=`constraint ${g} == 0;
`}for(const h of e){const g=h.cell,f=t.getCell(g.r,g.c);if(!f)continue;const v=Oe(f),m=Tt(f,de.COUNTING_CIRCLES_COLORS),C=h.value;C?n+=`constraint ${m} == ${C};
`:n+=`constraint ${m} != 0;
`,n+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${v}, ${m}) == ${v};
`}return n+=`
`,n}function lG(t,e){let n="";const r=e.map(c=>c.cell),i=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${ze([...i]).join(`,
	`)}`;return n+=`array[int] of var int: unique_cells = [
	${s}
];
`,n+=`constraint alldifferent(unique_cells);
`,n}function cG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${ke(u,de.YIN_YANG)}, ${s});
`}function xd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=pd(t,i),c=[];for(const g of s){const f=ke(g,de.YIN_YANG);c.push(f)}const u=Tt(i,de.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function uG(t,e,n,r){return xd(e,r,"yin_yang_seen_unshaded_p")}function dG(t,e,n,r){return xd(e,r,"yin_yang_seen_shaded_p")}function _G(t,e,n,r){return xd(e,r,"yin_yang_seen_same_shade_p")}function fG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Tt(a,de.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),h=ke(u,de.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${h});
`}function gG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${ke(c,de.YIN_YANG)}, 1) == ${s};
`}function hG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),h=e.getCol(a.c),g="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",f="["+h.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${f}, ${s}, ${c});
`}function vG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),h="["+c.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]",g="["+u.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${h}, ${g}, ${s});
`}function pG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let g=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const f=pd(e,a),v=[];for(const m of f){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";v.push(C)}return g+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${v[0]}, ${v[1]}, ${v[2]}, ${v[3]});
`,g}function mG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Tt(a,de.SASHIGANE),u=Tt(a,de.SASHIGANE_BENDS);let h=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return h+=`constraint ${u} = true;
`,h}function CG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Tt(a,de.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function EG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${Tt(a,de.CELL_CENTER_LOOP)} == 1;
`:""}function IG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${Tt(a,de.CELL_CENTER_LOOP)} == 0;
`:""}function bG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${ke(u,de.CELL_CENTER_LOOP)}) == ${s};
`}function wG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=Tt(a,de.CAVE_SHADING),u=pd(e,a),h=[];for(const f of u){const v=ke(f,de.CAVE_SHADING);h.push(v)}return`constraint cave_clue_p(${s}, ${c}, ${h[0]}, ${h[1]}, ${h[2]}, ${h[3]});
`}function OG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const h=Oe(a),g=Tt(a,de.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const f=e.getNeighboorCells(a),v=ke(f,de.BOARD),m=ke(f,de.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${h});
`;const C=e.getCellsByKnightMove(a),I=ke(C,de.BOARD),w=ke(C,de.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${w}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${h});
`;const b=[Be.NE,Be.NW,Be.SE,Be.SW],x=[];for(const k of b)e.getCellsInDirection(a.r,a.c,k).forEach(W=>x.push(W));const R=ke(x,de.BOARD),$=ke(x,de.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${R}, ${$}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${h});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function yG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const h=Oe(a),g=Tt(a,de.UNKNOWN_REGIONS),f=e.getOrthogonallyAdjacentCells(a),v=ke(f,de.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${g}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],C=[];for(const I of m){const w=e.getCellsInDirection(a.r,a.c,I);if(!w.length)continue;const b=ke(w,de.BOARD),x=ke(w,de.UNKNOWN_REGIONS),R=`in_arrow_${n}_${I}`,$=`in_arrow_${n}_${I}[1]`;C.push($),u+=`array[index_set(${b})] of var bool: ${R};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${x}, ${R}, ${h}, ${g});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}const LG=new Map([[_.ODD,H3],[_.EVEN,P3],[_.LOW_DIGIT,B3],[_.HIGH_DIGIT,W3],[_.ODD_MINESWEEPER,Y3],[_.EVEN_MINESWEEPER,z3],[_.DIAGONALLY_ADJACENT_SUM,q3],[_.ORTHOGONAL_SUM,V3],[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,j3],[_.FRIENDLY_CELL,Z3],[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,Q3],[_.WATCHTOWER,J3],[_.NOT_WATCHTOWER,eG],[_.FARSIGHT,tG],[_.RADAR,nG],[_.INDEXING_COLUMN,K3],[_.INDEXING_ROW,X3],[_.SANDWICH_ROW_COL_COUNT,rG],[_.YIN_YANG_MINESWEEPER,cG],[_.YIN_YANG_SEEN_UNSHADED_CELLS,uG],[_.YIN_YANG_SEEN_SHADED_CELLS,dG],[_.YIN_YANG_SEEN_SAME_SHADE_CELLS,_G],[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,fG],[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,gG],[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,hG],[_.SEEN_REGION_BORDERS_COUNT,vG],[_.NURIMISAKI_UNSHADED_ENDPOINTS,pG],[_.SASHIGANE_BEND_REGION_COUNT,mG],[_.SASHIGANE_REGION_SUM,CG],[_.CELL_ON_THE_LOOP,EG],[_.CELL_NOT_ON_THE_LOOP,IG],[_.COUNT_LOOP_NEIGHBOUR_CELLS,bG],[_.CAVE_CLUE,wG],[_.CHAOS_CONSTRUCTION_CHESS_SUMS,OG],[_.CHAOS_CONSTRUCTION_ARROW_KNOTS,yG]]),AG=new Map([[_.MAXIMUM,iG],[_.MINIMUM,oG],[_.COUNTING_CIRCLES,aG],[_.COLORED_COUNTING_CIRCLES,sG],[_.UNIQUE_CELLS,lG]]);function xG(t,e,n,r){let i="";const a=LG.get(n),s=AG.get(n);if(a)for(const[c,u]of Object.entries(r)){const h=a(t,e,c,u);i+=h}else if(s){const c=Object.values(r),u=s(e,c);i+=u}return i}function SG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,de.UNKNOWN_REGIONS),s=e.directions,c=[];for(const g of s){const f=t.getCellsInDirection(r.r,r.c,g),v=ke(f,de.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(g=>`count_different(${g}, ${a})`).join(" + ")} == ${i};
`}function NG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,de.YIN_YANG),s=e.directions;let c="";for(const u of s){const h=t.getCellsInDirection(r.r,r.c,u),f="["+ze(h).join(",")+"]",v=ke(h,de.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${f}, ${v}) == ${i};
`}return c}function TG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),h=ke(u,de.YIN_YANG);s+=`constraint count(${h}, 1) == ${i};
`}return s}function DG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,de.YIN_YANG),s=e.directions,c=[];for(const h of s){const g=t.getCellsInDirection(r.r,r.c,h),f=ke(g,de.YIN_YANG),v=ke(g,de.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${f}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function RG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions,s=[];for(const u of a){const h=t.getCellsInDirection(r.r,r.c,u),f=`count_loop_vars_f(${ke(h,de.CELL_CENTER_LOOP)})`;s.push(f)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function kG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=Tt(r,de.GALAXY_REGIONS),s=e.directions,c=[];for(const h of s){const g=t.getCellsInDirection(r.r,r.c,h),m=`count(${"["+wo(g,de.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function GG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+ze(u).join(",")+"]";s+=`constraint hot_arrows_p(${g}, ${i});
`}return s}function MG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),g="["+ze(u).join(",")+"]";s+=`constraint cold_arrows_p(${g}, ${i});
`}return s}const $G=new Map([[_.HOT_ARROWS,GG],[_.COLD_ARROWS,MG],[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,SG],[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,NG],[_.LOOP_CELL_COUNT_ARROWS,RG],[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,DG],[_.YIN_YANG_COUNT_SHADED_CELLS,TG],[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,kG]]);function FG(t,e,n,r){return sl(e,n,r,$G)}function UG(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function HG(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function PG(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const BG=new Map([[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,UG],[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,HG],[_.FORBIDDEN_KNIGHT_SUM,PG]]);function WG(t,e,n,r){return sl(e,n,r,BG)}const YG=[Mk,xG,U3,FG,l5,Vk,h3,_k,xk,G3,Uk,WG];function zG(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[a,s]of r.entries())for(const c of YG){let u=c(e,i,a,s);u=yt(u,`${a}`),n+=u}return n}function jG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,i+=`constraint yin_yang_p(yin_yang);
`,i}function VG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,i+=`constraint nurimisaki_p(nurimisaki);
`,i}function qG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`
% Two Contiguous Regions
`,i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,i+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,i}function KG(t,e){const n=t.grid;if(n.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const i=Math.max(n.nCols,n.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${i-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${i});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${i});
`,a}function XG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,i+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,i+=`constraint sashigane_adjacency_p(sashigane);
`,i+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,i+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,i+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,i}function ZG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, true);
`,i}function QG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i}function JG(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,i+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,i+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,i}function eM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i+=`constraint modular_loop_p(board, cell_center_loop);
`,i}function oa(t,e,n,r){const i=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=i.nRows;for(let g=0;g<s;g++){const f=i.getRow(g),v=r(f);a+=`constraint count_eq(${v}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let g=0;g<c;g++){const f=i.getCol(g),v=r(f);a+=`constraint count_eq(${v}, ${n}, ${e});
`}if(!t.globalConstraints.get(_.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const g=i.getUsedRegions();for(const f of g){const v=i.getRegion(f),m=r(v);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function tM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,i+=oa(t,1,!0,a=>ke(a,de.DOUBLERS)),i+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,i+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,i}function nM(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${i};
`,a+=oa(t,1,!0,s=>ke(s,de.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${i}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${i});
`,a}function rM(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${i};
`,a+=`constraint fillomino_p(board, ${i});
`,a}function iM(t,e){if(t.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="cave_shading",a="cave_regions";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint cave_p(${i}, ${a});
`,s}function oM(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=de.GALAXY_REGIONS,a=de.GALAXY_SIZES,s=n.nCols*n.nRows;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${i};
`,c+=`constraint galaxy_restrict_numbering_p(${i});
`,c+=`array[0..${s}] of var 0..${s}: ${a};
`,c+=`constraint galaxy_sizes_p(${i}, ${a});
`,c+=`constraint adjacent_galaxies_not_size_leq_3_p(${i}, ${a});
`,c+=`constraint gallaxy_connected_regions_p(${i});
`,c}function aM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,i+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,i}function sM(t,e){if(t.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,i+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,i+=`constraint goldilocks_zone_p(goldilocks_regions);
`,i+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,i}function lM(t,e){if(t.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=jg.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${i}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${i}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[s,c]of jg.entries()){const u=c.length,h=c[0].length,g=`pentomino_${s}`;a+=`array[1..${u}, 1..${h}] of 0..1: ${g} = ${mR(c)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${s});
`}return a}function cM(t,e){const n=t.grid;if(n.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=de.LITS_SHADING,a=de.LITS_REGIONS;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,s+=`constraint lits_shading_p(${i});
`,s+=`constraint lits_shading_ids_p(${i}, ${a});
`,s+=`constraint lits_region_and_ids_p(${de.BOARD_REGIONS}, ${a});
`,s+=`constraint lits_tetromino_shapes_p(${a});
`;const c=n.getUsedRegions();c.size&&(s+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const u of c){const h=n.getRegion(u),f=`constraint count_eq(${ke(h,de.LITS_SHADING)}, 1, 4);
`;s+=f}return s}function uM(t,e){const n=t.grid;if(n.getAllCells().some(h=>h.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=de.LITS_SHADING,a=de.LITS_REGIONS,s=de.CAVE_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${i});
`,c+=`constraint lits_shading_ids_p(${i}, ${a});
`,c+=`constraint lits_region_and_ids_p(${s}, ${a});
`,c+=`constraint lits_4_per_region_p(${s}, ${i});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=n.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const h of u){const g=n.getRegion(h),v=`constraint count_eq(${ke(g,de.LITS_SHADING)}, 1, 4);
`;c+=v}return c}function dM(t,e){if(t.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=de.LITS_SHADING,a=de.STAR_BATTLE,s=de.LITS_WHITE_BLACK_STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=oa(t,2,1,u=>ke(u,de.STAR_BATTLE)),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,c+=`
% 1 white star per row, column, region
`,c+=oa(t,1,1,u=>ke(u,de.LITS_WHITE_BLACK_STAR_BATTLE)),c+=`
% 1 black star per row, column, region
`,c+=oa(t,1,2,u=>ke(u,de.LITS_WHITE_BLACK_STAR_BATTLE)),c+=`constraint black_and_white_star_battle_p(${a}, ${s});
`,c+=`constraint lits_black_and_white_star_battle_p(${i}, ${s});
`,c}const _M=new Map([[_.FILLOMINO,rM],[_.CAVE,iM],[_.GALAXIES,oM],[_.YIN_YANG,jG],[_.NURIMISAKI,VG],[_.TWO_CONTIGUOUS_REGIONS,qG],[_.UNKNOWN_REGIONS,KG],[_.SASHIGANE,XG],[_.CELL_CENTER_LOOP_NO_TOUCHING,ZG],[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,QG],[_.NOT_LOOP_SIZED_REGIONS,JG],[_.MODULAR_LOOP,eM],[_.DOUBLERS,tM],[_.NEGATORS,nM],[_.GOLDILOCKS_ZONE,sM],[_.NEXUS,aM],[_.PENTOMINO_TILLING,lM],[_.LITS,cM],[_.CAVE_LITS,uM],[_.LITS_BLACK_WHITE_STAR_BATTLE,dM]]);function fM(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const a=_M.get(r);if(!a)continue;let s=a(t,r);s=yt(s,`${r}`),e+=s}return e}function gM(){return`
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

`}function hM(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function Fv(t){const e=t.grid,n=new vR,[r,i]=[e.nRows,e.nCols],a=r*i;n.add(`include "globals.mzn";
`),n.add(`include "alldifferent.mzn";

`),n.add(gM());let c=`1..${Math.max(r,i)}`,u=t.valid_digits;return!!t.globalConstraints.get(_.FILLOMINO)&&(c=`1..${a}`),t.globalConstraints.get(_.HEXED_SUDOKU)&&(u=[...$t.range(1,16)]),u&&(c="{"+u.join(",")+"}"),n.add(`set of int: ROW_IDXS = 0..${r-1};
`),n.add(`set of int: COL_IDXS = 0..${i-1};
`),n.add(`set of int: ALLOWED_DIGITS = ${c};
`),n.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),CR(n,e),n.add(hM(t)),n.add(ok(t)),n.add(ak(t)),n.add(fM(t)),n.add(zG(t,n)),n.add(lk(t)),n.add(`
solve satisfy;`),n.model_str}var vM=oe('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function pM(t,e){te(e,!1);const n=qe(),r=()=>ve(Tr,"$puzzleMetaStore",n);let i=F(e,"showModal",12,!1);function a(f,v,m){var C=document.createElement("a"),I=new Blob([f],{type:m});C.href=URL.createObjectURL(I),C.download=v,C.click(),URL.revokeObjectURL(C.href)}function s(){const f=st(ma);return Fv(f)}function c(){const f=s();navigator.clipboard.writeText(f)}function u(){const f=s(),v=zg(f);navigator.clipboard.writeText(v)}function h(){const f=gu(r()),v=s();a(v,`${f}.mzn`,"text/plain")}function g(){const f=gu(r()),v=s(),m=zg(v);a(m,`${f}.mzn`,"text/plain")}fe(),Mr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(f){i(f)},children:(f,v)=>{var m=vM(),C=q(m),I=U(C,2),w=U(I,2),b=U(w,2);H(m),Te("click",C,c),Te("click",I,u),Te("click",w,h),Te("click",b,g),N(f,m)},$$slots:{default:!0},$$legacy:!0}),ne()}function ba(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const h=e.getCell(s,u);if(!h)continue;const g=Number(c[u]),f=n.get(g);f!==void 0&&(r.push(h),i.push([f]))}}const a=Qs(r,i);ro(a)}function mM(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const C=[];i.push(C),s(v,m,t[v][m])}function s(v,m,C){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==C||(r[v][m]=!0,i[i.length-1].push([v,m]),s(v+1,m,C),s(v-1,m,C),s(v,m+1,C),s(v,m-1,C))}const c=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[C,I]of v)for(const[w,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=C+w,R=I+b;if(m.some(([$,k])=>$===x&&k===R))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(c[v].add(m),c[m].add(v));const h=[1,4,7,9],g=new Array(i.length).fill(0);function f(v,m){for(const C of c[v])if(g[C]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of h)if(f(v,m)){g[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,C]of i[v])a[m][C]=g[v];return a}function CM(t,e){const n=e.grid,r=e.globalConstraints.get(_.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const a=[],s=[];for(let u=0;u<i.length;u++){const h=i[u];for(let g=0;g<h.length;g++){const f=n.getCell(u,g);if(!f||f.given||r&&!f.given&&f.value===null)continue;const v=h[g];a.push(f),s.push(v)}}const c=Ev(a,s);ro(c)}function EM(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const a=t[i];if(a!==void 0){ba(a,e,r);return}}}function IM(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const a=t[i];if(a!==void 0){ba(a,e,r);return}}}function bM(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const h=e.getCell(s,u);if(!h)continue;r.push(h);const g=c[u];i.push([g+1])}}const a=Qs(r,i);ro(a)}function wM(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;ba(n,e,new Map([[0,4],[1,7],[2,9]]))}function OM(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;ba(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function yM(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;ba(n,e,new Map([[1,7],[2,4],[3,9]]))}function LM(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<i.length;g++){const f=i[g];for(let v=0;v<f.length-1;v++){const m=e.getCell(g,v),C=e.getCell(g,v+1);if(!m||!C)continue;const I=f[v],w=f[v+1];if(I===w)continue;const b={colorId:c,p1:{r:g,c:v+1},p2:{r:g+1,c:v+1}};u.push(b)}}for(let g=0;g<s;g++)for(let f=0;f<a-1;f++){const v=e.getCell(f,g),m=e.getCell(f+1,g);if(!v||!m)continue;const C=i[f][g],I=i[f+1][g];if(C===I)continue;const w={colorId:c,p1:{r:f+1,c:g},p2:{r:f+1,c:g+1}};u.push(w)}const h=xs(u);Nr(h);return}}function AM(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let h=0;h<u.length;h++){const g=e.getCell(c,h);if(g)for(const f of e.getOrthogonallyAdjacentCells(g)){if(!f||!(f.r>g.r||f.c>g.c))continue;const v=i[g.r][g.c],m=i[f.r][f.c];if(!(v===1&&m===1))continue;const C={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:f.r+.5,c:f.c+.5}};a.push(C)}}}const s=xs(a);Nr(s);return}}function xM(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=mM(i);if(!a)return;const s=[],c=[];for(let h=0;h<a.length;h++){const g=a[h];for(let f=0;f<g.length;f++){const v=e.getCell(h,f);if(!v)continue;s.push(v);const m=g[f];c.push([m])}}const u=Qs(s,c);ro(u);return}}function SM(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let h=0;h<u.length;h++){const g=e.getCell(c,h);if(!g)continue;const f=i[g.r][g.c];if(f===0)continue;const m={colorId:f===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};a.push(m)}}const s=Xy(a);Nr(s);return}}function NM(t,e){const n=e.grid;Nr(ad()),CM(t,e),bM(t,n),LM(t,n),wM(t,n),OM(t,n),AM(t,n),IM(t,n),xM(t,n),EM(t,n),SM(t,n),yM(t,n)}function TM(){const{subscribe:t,set:e}=Ft(0),n=100;let r=Date.now(),i,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,i=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(i),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var DM=oe('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function RM(t,e){te(e,!1);const n=qe(),r=()=>ve(ma,"$puzzleStore",n),i=()=>ve(ln,"$gridStore",n),a=()=>ve(b,"$timer",n),s=T(),c=T(),u=T(),h=T();let g=T(!1),f=T(!1),v=T(null),m=T(100),C=T("100"),I=T(null),w=T("IDLE");const b=TM();function x(K){return K===null?"":String(K)}function R(K){const re=Math.floor(K/6e4),_e=Math.floor(K%6e4/1e3),ee=Math.floor(K%1e3/100),le=_e.toString().padStart(2,"0");return`${re}:${le}.${ee}`}function $(){S(f,!0)}function k(K){const re=parseInt(K);typeof re=="number"&&re>=1&&S(m,re)}async function Y(){S(I,0),S(w,"SOLVING...");const K=new Tu;hv(),console.log(p(s));const re=Fv(p(s));K.addFile("test.mzn",re),b.reset(),b.start(),S(v,K.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(v).on("solution",_e=>{const ee=_e.output.json;_e.type==="solution"&&p(I)!==null&&S(I,p(I)+1),NM(ee,p(s))}),p(v).on("error",_e=>{S(u,"Solve"),S(w,"ERROR"),b.stop(),p(v)&&p(v).cancel()}),p(v).on("warning",_e=>{S(w,"WARNING"),console.log(_e.message)}),p(v).then(_e=>{S(w,_e.status),S(u,"Solve"),b.stop()})}function W(){p(v)===null||!p(v).isRunning()?Y():p(v)!==null&&p(v).isRunning()&&(S(w,"IDLE"),S(u,"Solve"),b.stop(),p(v).cancel())}M(()=>r(),()=>{S(s,r())}),M(()=>i(),()=>{S(c,i())}),M(()=>{},()=>{S(u,"Solve")}),M(()=>a(),()=>{S(h,a())}),M(()=>p(v),()=>{p(v)&&(p(v)!==null&&p(v).isRunning()?S(u,"Stop"):S(u,"Solve"))}),pe(),fe(),il(t,{get isOpen(){return p(g)},set isOpen(K){S(g,K)},$$slots:{"panel-header":(K,re)=>{rl(K,{slot:"panel-header",title:"Solver",get isOpen(){return p(g)},set isOpen(_e){S(g,_e)},$$legacy:!0})},"panel-content":(K,re)=>{var _e=DM(),ee=ce(_e),le=U(ee,2);pM(le,{get showModal(){return p(f)},set showModal(Xt){S(f,Xt)},$$legacy:!0});var Ie=U(le,2),me=q(Ie,!0);H(Ie);var Ce=U(Ie,2),Se=q(Ce,!0);H(Ce);var lt=U(Ce,2),xe=q(lt);Vt(xe),A(xe,"min",1),A(xe,"max",200),A(xe,"step",1),H(lt);var we=U(lt,2),_t=q(we,!0);Z(()=>nt(_t,`Solution Count: ${x(p(I))}`)),H(we);var ct=U(we,2),Un=q(ct,!0);Z(()=>nt(Un,`Elapsed Time: ${R(p(h))}`)),H(ct);var Lt=U(ct,2),yn=q(Lt,!0);H(Lt),Z(()=>{nt(me,p(u)),nt(Se,`Max. Solutions: ${p(m)}`),nt(yn,`Status: ${p(w)}`)}),Te("click",ee,$),Te("click",Ie,W),qn(xe,()=>p(C),Xt=>S(C,Xt)),Te("input",xe,()=>k(p(C))),N(K,_e)}},$$legacy:!0}),ne()}var kM=oe('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function GM(t){var e=kM(),n=q(e),r=q(n);sR(r);var i=U(r,2);RM(i,{});var a=U(i,2);WT(a,{elementHandlers:Mt});var s=U(a,2);qT(s,{elementHandlers:Mt});var c=U(s,2);GT(c,{elementHandlers:Mt});var u=U(c,2);mD(u,{elementHandlers:Mt});var h=U(u,2);cR(h,{}),H(n),H(e),N(t,e)}const Uv=cn([no,ln,Kt],([t,e,n])=>{const r=Zr(n,Mt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0}),Sd=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())qw(n)&&e.push({toolId:n,element:r});return e}),MM=cn(Sd,t=>{const e=t.find(r=>r.toolId===_.MINIMUM);return e?e.element:{}}),$M=cn(Sd,t=>{const e=t.find(r=>r.toolId===_.MAXIMUM);return e?e.element:{}}),FM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ku(n)&&e.push({toolId:n,element:r});return e}),UM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ah(n)&&e.push({toolId:n,element:r});return e}),HM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Lh(n)&&e.push({toolId:n,element:r});return e}),PM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Xu(n)&&e.push({toolId:n,element:r});return e}),BM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Zu(n)&&e.push({toolId:n,element:r});return e}),WM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())Qu(n)&&e.push({toolId:n,element:r});return e}),YM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())xh(n)&&e.push({toolId:n,element:r});return e}),zM=cn(rt,t=>{const e=[];for(const[n,r]of t.entries())la(n)&&e.push({toolId:n,element:r});return e});function jM(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function VM(t){const e=new Map;function n(r,i){const a=e.get(i);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=jM(r),a=i.length;for(let s=0;s<a;s++){const c=i[s%a],u=i[(s+1)%a],h=JSON.stringify(c),g=JSON.stringify(u);n(h,g)}}return e}function qM(t,e=0,n=!1){const r=[],i=VM(t);if(i.size<=0)return r;const a=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let h=JSON.parse(c);const g=Array.from(u)[0];let f=JSON.parse(g),v=g;const m=[];do{const C=i.get(v);if(C===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Re(h.c,h.r),w=new Re(f.c,f.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,R=null;for(const $ of C){const k=JSON.parse($),Y=new Re(k.c,k.r),W=w.subtract(I),K=Y.subtract(w),re=W.perpDotProduct(K);b<re!=n&&(b=re,R=k,x=$)}if(n&&C.size>1&&a.add(v),R===null||x===null)throw new Error("Corner with no adjacencies found");if(C.delete(x),C.size<=0&&i.delete(v),b!==0){const $=e*(f.c-h.c),k=e*(R.c-f.c),Y=e*(h.r-f.r),W=e*(f.r-R.r),K=W+b*k,re=$+b*Y,_e=new Re(f.c+K,f.r+re),ee=4;a.has(v)?(m.push(new Re(_e.x-ee*$,_e.y-ee*k)),m.push(new Re(_e.x-ee*Y,_e.y-ee*W))):m.push(_e)}h=f,f=R,v=x}while(v!==g);r.push(m)}return r}function oo(t,e=0,n=!1){return qM(t,e,n).map(a=>yo(a,!0)).join("")}const KM=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5)];function XM(t,e,n=KM){if(e===1)return n;const r=[],i=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,h=c/(360/i),g=u/(360/i),f=Math.floor(h)%i,v=Math.ceil(h)%i,m=n[f].lerp(n[v],h%1),C=Math.floor(g)%i,I=Math.ceil(g)%i,w=n[C].lerp(n[I],g%1);r.push(m);for(let x=Math.ceil(h);x<=Math.floor(g);x++)r.push(n[x%i]);r.push(w);const b=new Re(0,0);return r.push(b),r}function Hv(t,e,n=new Re(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const h=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),f=n.add(new Re(h,g));c.push(f)}return c}function yo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:a})=>`${i},${a}`).join("L")+n}function _l(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){if(r&&t.length>1){const h=t[t.length-1];for(let f=0;f<t.length-1;f++)if(h.equals(t[f])){t.push(t[f+1]);break}const g=t[0];for(let f=1;f<t.length;f++)if(g.equals(t[f])){t.unshift(t[f-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let h=t[1].subtract(t[0]);h=h.normalise(),h=h.scale(e),t[0]=t[0].add(h)}if(n){const h=t.length;let g=t[h-2].subtract(t[h-1]);g=g.normalise(),g=g.scale(n),t[h-1]=t[h-1].add(g)}}if(!i)return yo(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let h=2;h<c;h++){const g=t[h-2],f=t[h-1],v=t[h];let m=g.subtract(f).normalise();m=m.scale(i),m=m.add(f);let C=v.subtract(f).normalise();C=C.scale(i),C=C.add(f),s.push(`L${m.x},${m.y} Q ${f.x},${f.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function Eu(t,e={}){const n=Ds(t);return _l(n,e)}function Zn(t){return new Re(t.c+.5,t.r+.5)}function Ds(t){return t.map(n=>Zn(n))}const ZM=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5),new Re(0,-.5),new Re(0,.5),new Re(-.5,0),new Re(.5,0)];function QM(t,e){const n=ZM[t];return n.subtract(n.scale(e))}function Pv(t,e){const n=[new Re(t.c-e,t.r-e),new Re(t.c+e,t.r+e)],r=[new Re(t.c-e,t.r+e),new Re(t.c+e,t.r-e)];return[n,r].map(a=>yo(a,!1)).join("")}const JM=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function fl(t,e="none"){return JM.get(t)||e}function e8(t,e,n){let r=[];function a(c,u){return c.map(h=>h.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Re(-.12,-.32),new Re(0,-.4),new Re(.12,-.32)]:s=[new Re(-.12,-.4),new Re(0,-.32),new Re(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const h=new Re(n+.5,e+.5);return u.add(h)})),r}var t8=ie('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function gl(t,e){let n=F(e,"l",8,.2),r=F(e,"id",8),i=F(e,"strokeWidth",8),a=F(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=t8();A(u,"viewBox","0 0 1 1"),A(u,"refX",s),A(u,"refY",s),A(u,"markerWidth",1),A(u,"markerHeight",1);var h=q(u);A(h,"d",c),H(u),Z(()=>{A(u,"id",r()),A(h,"stroke-width",i()),A(h,"stroke",a())}),N(t,u)}var n8=ie('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function r8(t,e){var Y;te(e,!1);const n=T(),r=T(),i=T();let a=F(e,"outsideEdgeTool",8);const s=a().cell,c=a().direction,u=Rh(s,c),h=Zn(s),g=bn(a().toolId,Mt)??hO,f=((Y=p(n))==null?void 0:Y.fontSize)??.5,v=.03;function m(W){return W.value&&W.value.length?W.value:"-"}function C(){const re=Zn(u).subtract(h).length(),_e={shortenHead:.3*re,shortenTail:.55*re};return Eu([s,u],_e)}const w=`outside-tool-arrow-marker-${crypto.randomUUID()}`;M(()=>Q(a()),()=>{S(n,a().shape??g)}),M(()=>p(n),()=>{var W;S(r,((W=p(n))==null?void 0:W.fontColor)??"var(--text-primary-color)")}),M(()=>p(n),()=>{var W;S(i,((W=p(n))==null?void 0:W.stroke)??"var(--text-primary-color)")}),pe(),fe();var b=n8(),x=q(b);gl(x,{id:w,l:.07,strokeWidth:v,get stroke(){return p(i)}});var R=U(x);Z(()=>A(R,"d",C())),A(R,"stroke-width",v),A(R,"marker-end",`url(#${w??""})`);var $=U(R);A($,"font-size",f);var k=q($,!0);Z(()=>nt(k,m(a()))),H($),H(b),Z(()=>{A(R,"stroke",p(i)),A($,"x",h.x),A($,"y",h.y),A($,"fill",p(r))}),N(t,b),ne()}var i8=ie("<g></g>"),o8=ie('<g class="outside-direction-tools-layer" mask="url(#fog-mask-fog)"></g>');function a8(t,e){te(e,!1);const n=qe(),r=()=>ve(zM,"$outsideDirectionToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=o8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=i8();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{r8(f,{get outsideEdgeTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var s8=ie("<path></path>");function Rs(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T();let h=F(e,"cells",8),g=F(e,"shape",8,nd);M(()=>Q(g()),()=>{S(n,g().inset??.06)}),M(()=>Q(g()),()=>{S(r,g().stroke??"black")}),M(()=>Q(g()),()=>{S(i,g().strokeWidth??.03)}),M(()=>Q(g()),()=>{S(a,g().strokeDasharray??.08)}),M(()=>Q(g()),()=>{S(s,g().fill??"none")}),M(()=>Q(g()),()=>{S(c,g().connectDiag??!0)}),M(()=>(Q(h()),p(n),p(c)),()=>{S(u,oo(h(),p(n),p(c)))}),pe(),fe();var f=s8();Z(()=>{A(f,"d",p(u)),A(f,"stroke",p(r)),A(f,"stroke-width",p(i)),A(f,"fill",p(s)),A(f,"stroke-dasharray",p(a))}),N(t,f),ne()}var l8=ie('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ua(t,e){te(e,!1);const n=T();let r=F(e,"value",8,""),i=F(e,"fontSize",8,.2),a=F(e,"x",8),s=F(e,"y",8),c=F(e,"position",8,"TL"),u=F(e,"fontColor",8,"var(--text-primary-color)"),h=F(e,"fontWeight",8,400),g=T(null),f=T(null);function v(x,R,$){const k=["TL","TR"].includes($),W=["TL","BL"].includes($)?x+.05:x,K=R;return new Re(W,K)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function C(x){return["TL","TR"].includes(x)?"text-before-edge":""}Ew(()=>{if(!p(g)||!p(f))return;const x=p(g).getBBox();p(f).setAttribute("x",String(x.x)),p(f).setAttribute("y",String(x.y+x.height*.1)),p(f).setAttribute("width",String(x.width)),p(f).setAttribute("height",String(x.height*.8))}),M(()=>(Q(a()),Q(s()),Q(c())),()=>{S(n,v(a(),s(),c()))}),pe(),fe();var I=Le(),w=ce(I);{var b=x=>{var R=l8(),$=ce(R);Ii($,W=>S(f,W),()=>p(f));var k=U($);Z(()=>A(k,"text-anchor",m(c()))),Z(()=>A(k,"dominant-baseline",C(c())));var Y=q(k,!0);H(k),Ii(k,W=>S(g,W),()=>p(g)),Z(()=>{var W,K;A(k,"x",(W=p(n))==null?void 0:W.x),A(k,"y",(K=p(n))==null?void 0:K.y),A(k,"font-size",i()),A(k,"fill",u()),A(k,"font-weight",h()),nt(Y,r())}),N(x,R)};ge(w,x=>{r().length&&x(b)})}N(t,I),ne()}var c8=oe("<!> <!> <!> <!>",1);function u8(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),h=T();let g=F(e,"cloneTool",8);const f=bn(g().toolId,Mt)??gO,v=800,m=g().value;M(()=>Q(g()),()=>{S(n,g().shape??f)}),M(()=>p(n),()=>{S(r,p(n).inset??.15)}),M(()=>p(n),()=>{S(i,p(n).strokeWidth??.07)}),M(()=>p(n),()=>{S(a,p(n).fontColor??p(n).stroke??"black")}),M(()=>Q(g()),()=>{S(s,g().cells[g().cells.length-1])}),M(()=>Q(g()),()=>{S(c,g().cells2[g().cells2.length-1])}),M(()=>(p(s),p(r)),()=>{S(u,new Re(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),M(()=>(p(c),p(r)),()=>{S(h,new Re(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),pe(),fe();var C=c8(),I=ce(C);Rs(I,{get cells(){return g().cells},get shape(){return p(n)}});var w=U(I,2);ua(w,{value:m,get x(){return p(h).x},get y(){return p(h).y},position:"BR",get fontColor(){return p(a)},fontWeight:v});var b=U(w,2);Rs(b,{get cells(){return g().cells2},get shape(){return p(n)}});var x=U(b,2);ua(x,{value:m,get x(){return p(h).x},get y(){return p(h).y},position:"BR",get fontColor(){return p(a)},fontWeight:v}),N(t,C),ne()}var d8=ie("<g></g>"),_8=ie('<g class="clone-tools-layer" mask="url(#fog-mask-fog)"></g>');function f8(t,e){te(e,!1);const n=qe(),r=()=>ve(YM,"$cloneToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=_8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=d8();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{u8(f,{get cloneTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var g8=ie('<path fill="none"></path>');function da(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=F(e,"linePoints",8),h=F(e,"shape",8,void 0);const g="round",f="round";M(()=>Q(h()),()=>{var m;S(n,((m=h())==null?void 0:m.stroke)??"gray")}),M(()=>Q(h()),()=>{var m;S(r,((m=h())==null?void 0:m.strokeWidth)??.1)}),M(()=>Q(h()),()=>{var m;S(i,((m=h())==null?void 0:m.strokeDasharray)??0)}),M(()=>Q(h()),()=>{var m;S(a,((m=h())==null?void 0:m.strokeDashoffset)??0)}),M(()=>Q(h()),()=>{var m,C,I,w,b,x,R,$;S(s,{shortenHead:((C=(m=h())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((w=(I=h())==null?void 0:I.linePathOptions)==null?void 0:w.shortenTail)??.2,bezierRounding:((x=(b=h())==null?void 0:b.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:(($=(R=h())==null?void 0:R.linePathOptions)==null?void 0:$.closeLoops)??!1})}),M(()=>(Q(u()),p(s)),()=>{S(c,_l(u(),p(s)))}),pe(),fe();var v=g8();A(v,"stroke-linejoin",g),A(v,"stroke-linecap",f),Z(()=>{A(v,"d",p(c)),A(v,"stroke",p(n)),A(v,"stroke-width",p(r)),A(v,"stroke-dasharray",p(i)),A(v,"stroke-dashoffset",p(a))}),N(t,v),ne()}var h8=ie("<circle></circle>");function Oi(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=F(e,"x",8),h=F(e,"y",8),g=F(e,"shape",8);M(()=>Q(g()),()=>{S(n,g().r??.35)}),M(()=>Q(g()),()=>{S(r,g().stroke??"black")}),M(()=>Q(g()),()=>{var v;S(i,(v=g())==null?void 0:v.opacity)}),M(()=>Q(g()),()=>{S(a,g().strokeWidth??.02)}),M(()=>Q(g()),()=>{S(s,g().fill??"none")}),M(()=>Q(g()),()=>{S(c,g().strokeDasharray??0)}),pe(),fe();var f=h8();Z(()=>{A(f,"cx",u()),A(f,"cy",h()),A(f,"r",p(n)),A(f,"stroke",p(r)),A(f,"stroke-width",p(a)),A(f,"fill",p(s)),A(f,"opacity",p(i)),A(f,"stroke-dasharray",p(c))}),N(t,f),ne()}var v8=oe("<!> <!> <!>",1);function p8(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T();let s=F(e,"linePoints",8),c=F(e,"shape",8,zs);function u(w){var R;const b=$t.cloneDeep(w);b.r=b.r||.2;const x=b.r;return b.strokeDasharray=w.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(R=b.linePathOptions)==null?void 0:R.bezierRounding},b}M(()=>Q(s()),()=>{S(n,s().length)}),M(()=>(p(n),Q(s())),()=>{S(r,p(n)>=0?s()[0]:void 0)}),M(()=>(p(n),Q(s())),()=>{S(i,p(n)>=0?s()[p(n)-1]:void 0)}),M(()=>Q(c()),()=>{S(a,u(c()))}),pe(),fe();var h=v8(),g=ce(h);{var f=w=>{Oi(w,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};ge(g,w=>{p(r)&&w(f)})}var v=U(g,2);{var m=w=>{da(w,{get linePoints(){return s()},get shape(){return p(a)}})};ge(v,w=>{p(n)>1&&w(m)})}var C=U(v,2);{var I=w=>{Oi(w,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(a)}})};ge(C,w=>{p(i)&&w(I)})}N(t,h),ne()}var m8=ie("<polygon></polygon>");function ks(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),h=T();let g=F(e,"cx",8),f=F(e,"cy",8),v=F(e,"shape",8);M(()=>Q(v()),()=>{S(n,v().n??3)}),M(()=>Q(v()),()=>{S(r,v().r??.5)}),M(()=>(p(r),p(n),Q(g()),Q(f())),()=>{S(i,Hv(p(r),p(n),new Re(g(),f())))}),M(()=>p(i),()=>{S(a,p(i).map(C=>`${C.x},${C.y}`).join(" "))}),M(()=>Q(v()),()=>{S(s,v().stroke??"black")}),M(()=>Q(v()),()=>{S(c,v().strokeWidth??.02)}),M(()=>Q(v()),()=>{S(u,v().fill??"none")}),M(()=>Q(v()),()=>{S(h,v().angle??0)}),pe(),fe();var m=m8();Z(()=>{A(m,"points",p(a)),A(m,"stroke",p(s)),A(m,"stroke-width",p(c)),A(m,"fill",p(u)),A(m,"transform",`rotate(${p(h)}, ${g()}, ${f()} )`)}),N(t,m),ne()}var C8=oe("<!> <!> <!>",1);function E8(t,e){te(e,!1);const n=T(),r=T(),i=T();let a=F(e,"linePoints",8),s=F(e,"shape",12,zs);const c=4,u=.5;function h($,k){const Y=k.r??u,W=k.n??c,K=k.angle??0,re=Hv(Y,W,new Re(0,0),!0,0),_e=(W+($-K/360)*W%W)%W,ee=Math.floor(_e)%W,le=Math.ceil(_e)%W;return re[ee].lerp(re[le],_e%1).length()}function g($){if(p(n)<=1)return 0;const k=a()[0],W=a()[1].subtract(k).angle()/(2*Math.PI);return h(W,$)}function f($){if(p(n)<=1)return 0;const k=a()[p(n)-1],W=a()[p(n)-2].subtract(k).angle()/(2*Math.PI);return h(W,$)}function v($){var Y;const k=$t.cloneDeep($);return k.r=k.r||u,k.opacity=1,k.linePathOptions={shortenHead:g(k),shortenTail:f(k),bezierRounding:(Y=k.linePathOptions)==null?void 0:Y.bezierRounding},k}M(()=>Q(a()),()=>{S(n,a().length)}),M(()=>(p(n),Q(a())),()=>{S(r,p(n)>=0?a()[0]:void 0)}),M(()=>(p(n),Q(a())),()=>{S(i,p(n)>=0?a()[p(n)-1]:void 0)}),M(()=>Q(s()),()=>{s(v(s()))}),pe(),fe();var m=C8(),C=ce(m);{var I=$=>{ks($,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};ge(C,$=>{p(r)&&$(I)})}var w=U(C,2);{var b=$=>{da($,{get linePoints(){return a()},get shape(){return s()}})};ge(w,$=>{p(n)>1&&$(b)})}var x=U(w,2);{var R=$=>{ks($,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return s()}})};ge(x,$=>{p(i)&&$(R)})}N(t,m),ne()}var I8=oe("<!> <!>",1);function qg(t,e){te(e,!1);const n=T();let r=F(e,"linePoints",8),i=F(e,"shape",8,zs);function a(m){var w,b,x;const C=$t.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((w=C.linePathOptions)==null?void 0:w.shortenHead)||I,shortenTail:(b=C.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}function s(m){var w,b,x;const C=$t.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((w=C.linePathOptions)==null?void 0:w.shortenHead)||I,shortenTail:(b=C.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}M(()=>Q(r()),()=>{S(n,r().length>0?r()[0]:void 0)}),pe(),fe();var c=I8(),u=ce(c);{var h=m=>{var C=Xe(()=>a(i()));da(m,{get linePoints(){return r()},get shape(){return p(C)}})};ge(u,m=>{r().length>1&&m(h)})}var g=U(u,2);{var f=m=>{var C=Xe(()=>a(i()));Oi(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},v=m=>{var C=Le(),I=ce(C);{var w=b=>{var x=Xe(()=>s(i()));ks(b,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(x)}})};ge(I,b=>{p(n)&&b(w)},!0)}N(m,C)};ge(g,m=>{p(n)&&i().type===B.THERMO_WITH_CIRCLE?m(f):m(v,!1)})}N(t,c),ne()}var b8=ie('<g class="line-tool"><!></g>');function w8(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T();let s=F(e,"lineTool",8);const c=bn(s().toolId,Mt)??zs;M(()=>Q(s()),()=>{S(n,Ds(s().cells))}),M(()=>Q(s()),()=>{S(r,s().shape??c)}),M(()=>(p(r),B),()=>{var v;S(i,((v=p(r))==null?void 0:v.type)||B.LINE)}),M(()=>p(r),()=>{var v;S(a,((v=p(r))==null?void 0:v.opacity)??.8)}),pe(),fe();var u=b8(),h=q(u);{var g=v=>{da(v,{get linePoints(){return p(n)},get shape(){return p(r)}})},f=v=>{var m=Le(),C=ce(m);{var I=b=>{p8(b,{get linePoints(){return p(n)},get shape(){return p(r)}})},w=b=>{var x=Le(),R=ce(x);{var $=Y=>{E8(Y,{get linePoints(){return p(n)},get shape(){return p(r)}})},k=Y=>{var W=Le(),K=ce(W);{var re=ee=>{qg(ee,{get linePoints(){return p(n)},get shape(){return p(r)}})},_e=ee=>{var le=Le(),Ie=ce(le);{var me=Se=>{qg(Se,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ce=Se=>{da(Se,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(Ie,Se=>{p(i)===B.THERMO_WITH_POLYGON?Se(me):Se(Ce,!1)},!0)}N(ee,le)};ge(K,ee=>{p(i)===B.THERMO_WITH_CIRCLE?ee(re):ee(_e,!1)},!0)}N(Y,W)};ge(R,Y=>{p(i)===B.LINE_WITH_POLYGON_ENDS?Y($):Y(k,!1)},!0)}N(b,x)};ge(C,b=>{p(i)===B.LINE_WITH_CIRCLE_ENDS?b(I):b(w,!1)},!0)}N(v,m)};ge(h,v=>{p(i)===B.LINE?v(g):v(f,!1)})}H(u),Z(()=>A(u,"opacity",p(a))),N(t,u),ne()}var O8=ie("<g></g>"),y8=ie('<g class="line-tools-layer" mask="url(#fog-mask-fog)"></g>');function L8(t,e){te(e,!1);const n=qe(),r=()=>ve(PM,"$lineToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=y8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=O8();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{w8(f,{get lineTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var A8=ie('<path class="cursor svelte-zsq70u"></path>');function x8(t,e){te(e,!1);const n=qe(),r=()=>ve(Kt,"$toolStore",n),i=()=>ve(bi,"$selectionStore",n),a=T(),s=T(),c=.25;function u(g){if(!g)return"";const[f,v]=[g.c,g.r];return`M${f},${v}L${f+c},${v}L${f},${v+c}Z`}M(()=>r(),()=>{S(a,Ju(r()))}),M(()=>i(),()=>{S(s,u(i().lastCell))}),pe(),fe();var h=A8();Z(()=>{A(h,"d",p(s)),A(h,"visibility",p(a)?"visible":"hidden")}),N(t,h),ne()}var S8=ie('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function N8(t,e){te(e,!1);let n=F(e,"gridShape",8);fe();var r=S8(),i=q(r);A(i,"x",0),A(i,"y",0),H(r),Z(()=>{A(i,"width",n().nCols),A(i,"height",n().nRows)}),N(t,r),ne()}var T8=ie('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),D8=ie('<g class="grid-lines"></g>');function R8(t,e){te(e,!1);const n=qe(),r=()=>ve(ln,"$gridStore",n),i=T();M(()=>r(),()=>{S(i,r().getAllCells())}),pe(),fe();var a=D8();We(a,5,()=>p(i),gt,(s,c)=>{var u=T8();A(u,"width",1),A(u,"height",1),Z(()=>{A(u,"x",p(c).c),A(u,"y",p(c).r)}),N(s,u)}),H(a),N(t,a),ne()}var k8=ie('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),G8=ie('<g class="regions-border"></g>');function M8(t,e){te(e,!1);const n=qe(),r=()=>ve(sn,"$cellsStore",n),i=()=>ve(ln,"$gridStore",n),a=T(),s=T();function c(h,g){return h.filter(m=>m.region===g).map(m=>({r:m.r,c:m.c}))}M(()=>r(),()=>{S(a,r())}),M(()=>i(),()=>{S(s,i().getUsedRegions())}),pe(),fe();var u=G8();We(u,5,()=>p(s),gt,(h,g)=>{var f=k8();Z(()=>A(f,"d",oo(c(p(a),p(g)),0,!1))),Z(()=>A(f,"id",`region-${p(g)??""}`)),N(h,f)}),H(u),N(t,u),ne()}var $8=ie('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function F8(t,e){te(e,!1);const n=qe(),r=()=>ve(bi,"$selectionStore",n),i=()=>ve(Kt,"$toolStore",n),a=T(),s=T(),c=T(),u=T(),h=T(),g=T();let f=F(e,"boundingBox",8);const v=.06,m=.05,C="#080808",I="#b2b2b2";M(()=>Q(f()),()=>{S(a,f().x)}),M(()=>Q(f()),()=>{S(s,f().y)}),M(()=>r(),()=>{S(c,r().cells)}),M(()=>p(c),()=>{S(u,oo(p(c),0))}),M(()=>p(c),()=>{S(h,oo(p(c),v))}),M(()=>i(),()=>{S(g,Ju(i()))}),pe(),fe();var w=$8(),b=q(w),x=q(b);A(x,"stdDeviation",m),Ei(),H(b);var R=U(b),$=q(R);A($,"fill",I);var k=U($);A(k,"fill",C),H(R);var Y=U(R);H(w),Z(()=>{A(w,"visibility",p(g)?"visible":"hidden"),A(R,"x",p(a)),A(R,"y",p(s)),A($,"x",p(a)),A($,"y",p(s)),A(k,"d",p(h)),A(Y,"d",p(u))}),N(t,w),ne()}var U8=oe("<!> <!>",1);function Bv(t,e){te(e,!1);const n=T(),r=T();let i=F(e,"cells",8),a=F(e,"shape",8,nd),s=F(e,"value",8,void 0);M(()=>Q(i()),()=>{S(n,i()[0])}),M(()=>p(n),()=>{S(r,new Re(p(n).c,p(n).r))}),pe(),fe();var c=U8(),u=ce(c);Rs(u,{get cells(){return i()},get shape(){return a()}});var h=U(u,2);{var g=f=>{ua(f,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(h,f=>{s()&&s().length&&f(g)})}N(t,c),ne()}var H8=ie('<g class="cage-tool"><!></g>');function P8(t,e){te(e,!1);const n=T();let r=F(e,"cageTool",8);const i=bn(r().toolId,Mt)??nd;M(()=>Q(r()),()=>{S(n,r().shape??i)}),pe(),fe();var a=H8(),s=q(a);Bv(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),H(a),N(t,a),ne()}var B8=ie("<g></g>"),W8=ie('<g class="cage-tools-layer" mask="url(#fog-mask-fog)"></g>');function Y8(t,e){te(e,!1);const n=qe(),r=()=>ve(WM,"$cageToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=W8();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=B8();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{P8(f,{get cageTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var z8=ie('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function j8(t,e){te(e,!1);const n=T(),r=T();let i=F(e,"grid",8);M(()=>Q(i()),()=>{S(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),M(()=>p(n),()=>{S(r,oo(p(n),0))}),pe(),fe();var a=z8(),s=q(a);H(a),Z(()=>A(s,"d",p(r))),N(t,a),ne()}var V8=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),q8=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),K8=ie('<g class="quadruple-text"><!></g>');function X8(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=F(e,"cornerTool",8);const u=c().cells,h=new Re(u[u.length-1].c,u[u.length-1].r),g=bn(c().toolId,Mt)??$h;M(()=>Q(c()),()=>{S(n,c().value)}),M(()=>Q(c()),()=>{S(r,c().shape??g)}),M(()=>p(r),()=>{var C;S(i,((C=p(r))==null?void 0:C.fontSize)??.2)}),M(()=>p(r),()=>{var C;S(a,((C=p(r))==null?void 0:C.fontColor)??"black")}),M(()=>p(n),()=>{var C;S(s,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),pe(),fe();var f=Le(),v=ce(f);{var m=C=>{var I=K8(),w=q(I);{var b=R=>{var $=V8(),k=q($,!0);Z(()=>nt(k,p(s).join(" "))),H($),Z(()=>{A($,"x",h.x),A($,"y",h.y),A($,"font-size",p(i)),A($,"fill",p(a))}),N(R,$)},x=R=>{var $=q8(),k=ce($),Y=q(k,!0);Z(()=>nt(Y,p(s).slice(0,2).join(" "))),H(k);var W=U(k),K=q(W,!0);Z(()=>nt(K,p(s).slice(2).join(" "))),H(W),Z(()=>{A(k,"x",h.x),A(k,"y",h.y),A(k,"dy",-p(i)/2),A(k,"font-size",p(i)),A(k,"fill",p(a)),A(W,"x",h.x),A(W,"y",h.y),A(W,"dy",p(i)/2),A(W,"font-size",p(i)),A(W,"fill",p(a))}),N(R,$)};ge(w,R=>{p(s).length<=2?R(b):R(x,!1)})}H(I),Z(()=>A(I,"data-count",p(s).length)),N(C,I)};ge(v,C=>{p(n)&&C(m)})}N(t,f),ne()}var Z8=ie("<ellipse></ellipse>");function Q8(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T();let h=F(e,"cx",8),g=F(e,"cy",8),f=F(e,"shape",8);M(()=>Q(f()),()=>{S(n,f().width??.5)}),M(()=>Q(f()),()=>{S(r,f().height??.5)}),M(()=>Q(f()),()=>{S(i,f().stroke??"black")}),M(()=>Q(f()),()=>{var m;S(a,(m=f())==null?void 0:m.opacity)}),M(()=>Q(f()),()=>{S(s,f().strokeWidth??.02)}),M(()=>Q(f()),()=>{S(c,f().fill??"none")}),M(()=>Q(f()),()=>{S(u,f().angle??0)}),pe(),fe();var v=Z8();Z(()=>{A(v,"cx",h()),A(v,"cy",g()),A(v,"rx",p(n)/2),A(v,"ry",p(r)/2),A(v,"stroke",p(i)),A(v,"stroke-width",p(s)),A(v,"fill",p(c)),A(v,"opacity",p(a)),A(v,"transform",`rotate(${p(u)}, ${h()}, ${g()} )`)}),N(t,v),ne()}var J8=ie("<rect></rect>");function e$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T();let h=F(e,"cx",8),g=F(e,"cy",8),f=F(e,"shape",8);M(()=>Q(f()),()=>{S(n,f().width??.5)}),M(()=>Q(f()),()=>{S(r,f().height??.5)}),M(()=>(Q(h()),p(n)),()=>{S(i,h()-p(n)/2)}),M(()=>(Q(g()),p(r)),()=>{S(a,g()-p(r)/2)}),M(()=>Q(f()),()=>{S(s,f().stroke||"black")}),M(()=>Q(f()),()=>{S(c,f().strokeWidth||.023)}),M(()=>Q(f()),()=>{S(u,f().fill||"none")}),pe(),fe();var v=J8();Z(()=>{A(v,"x",p(i)),A(v,"y",p(a)),A(v,"width",p(n)),A(v,"height",p(r)),A(v,"stroke",p(s)),A(v,"stroke-width",p(c)),A(v,"fill",p(u))}),N(t,v),ne()}var t$=ie("<rect></rect>");function n$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),h=T(),g=T();let f=F(e,"cx",8),v=F(e,"cy",8),m=F(e,"shape",8);M(()=>Q(m()),()=>{S(n,m().r??.5)}),M(()=>(Q(f()),p(n)),()=>{S(r,f()-p(n))}),M(()=>(Q(v()),p(n)),()=>{S(i,v()-p(n))}),M(()=>p(n),()=>{S(a,2*p(n))}),M(()=>p(n),()=>{S(s,2*p(n))}),M(()=>Q(m()),()=>{S(c,m().stroke??"black")}),M(()=>Q(m()),()=>{S(u,m().strokeWidth??.02)}),M(()=>Q(m()),()=>{S(h,m().fill??"none")}),M(()=>Q(m()),()=>{S(g,m().angle??0)}),pe(),fe();var C=t$();Z(()=>{A(C,"x",p(r)),A(C,"y",p(i)),A(C,"width",p(a)),A(C,"height",p(s)),A(C,"stroke",p(c)),A(C,"stroke-width",p(u)),A(C,"fill",p(h)),A(C,"transform",`rotate(${p(g)}, ${f()}, ${v()})`)}),N(t,C),ne()}function hl(t,e){te(e,!1);const n=T();let r=F(e,"cx",8),i=F(e,"cy",8),a=F(e,"shape",8);M(()=>(Q(a()),B),()=>{var g;S(n,((g=a())==null?void 0:g.type)??B.CIRCLE)}),pe(),fe();var s=Le(),c=ce(s);{var u=g=>{Oi(g,{get x(){return r()},get y(){return i()},get shape(){return a()}})},h=g=>{var f=Le(),v=ce(f);{var m=I=>{Q8(I,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},C=I=>{var w=Le(),b=ce(w);{var x=$=>{n$($,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},R=$=>{var k=Le(),Y=ce(k);{var W=re=>{e$(re,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},K=re=>{var _e=Le(),ee=ce(_e);{var le=me=>{ks(me,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},Ie=me=>{Oi(me,{get x(){return r()},get y(){return i()},get shape(){return a()}})};ge(ee,me=>{p(n)===B.POLYGON?me(le):me(Ie,!1)},!0)}N(re,_e)};ge(Y,re=>{p(n)===B.RECTANGLE?re(W):re(K,!1)},!0)}N($,k)};ge(b,$=>{p(n)===B.SQUARE?$(x):$(R,!1)},!0)}N(I,w)};ge(v,I=>{p(n)===B.ELLIPSE?I(m):I(C,!1)},!0)}N(g,f)};ge(c,g=>{p(n)===B.CIRCLE?g(u):g(h,!1)})}N(t,s),ne()}var r$=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),i$=ie('<g class="corner-tool"><!><!></g>');function o$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T();let s=F(e,"cornerTool",8);const c=s().cells,u=bn(s().toolId,Mt)??$h,h=new Re(c[c.length-1].c,c[c.length-1].r);function g(C,I){return I===B.TEXT_ONLY?C.value?C.value:"-":C.value??""}M(()=>Q(s()),()=>{S(n,s().shape??u)}),M(()=>(p(n),B),()=>{var C;S(r,((C=p(n))==null?void 0:C.type)??B.CIRCLE)}),M(()=>p(n),()=>{var C;S(i,((C=p(n))==null?void 0:C.fontSize)??.2)}),M(()=>p(n),()=>{var C;S(a,((C=p(n))==null?void 0:C.fontColor)??"black")}),pe(),fe();var f=Le(),v=ce(f);{var m=C=>{var I=i$(),w=q(I);hl(w,{get cx(){return h.x},get cy(){return h.y},get shape(){return p(n)}});var b=U(w);{var x=$=>{X8($,{get cornerTool(){return s()}})},R=$=>{var k=r$(),Y=q(k,!0);Z(()=>nt(Y,g(s(),p(r)))),H(k),Z(()=>{A(k,"x",h.x),A(k,"y",h.y),A(k,"font-size",p(i)),A(k,"fill",p(a))}),N($,k)};ge(b,$=>{s().toolId===_.QUADRUPLE?$(x):$(R,!1)})}H(I),N(C,I)};ge(v,C=>{c.length===4&&C(m)})}N(t,f),ne()}var a$=ie("<g></g>"),s$=ie('<g class="corner-tools-layer" mask="url(#fog-mask-fog)"></g>');function l$(t,e){te(e,!1);const n=qe(),r=()=>ve(HM,"$cornerToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=s$();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=a$();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{o$(f,{get cornerTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var c$=ie('<path class="arrow-line" fill="none"></path>'),u$=ie('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function d$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T(),u=T(),h=T(),g=T(),f=T();let v=F(e,"arrowTool",8),m=F(e,"arrowId",8),C=F(e,"boundingBox",8);const I=bn(v().toolId,Mt)??fO,w="round",b="round",x=crypto.randomUUID(),R=`arrow-mask-${m()}-${x}`,$=`arrow-marker-${m()}-${x}`;M(()=>Q(v()),()=>{S(n,v().shape??I)}),M(()=>Q(C()),()=>{S(r,C().x)}),M(()=>Q(C()),()=>{S(i,C().y)}),M(()=>p(n),()=>{var le;S(a,((le=p(n))==null?void 0:le.r)??.4)}),M(()=>p(n),()=>{var le;S(s,((le=p(n))==null?void 0:le.stroke)??"gray")}),M(()=>p(n),()=>{var le;S(c,((le=p(n))==null?void 0:le.strokeWidth)??.1)}),M(()=>p(n),()=>{var le;S(u,((le=p(n))==null?void 0:le.strokeDasharray)??0)}),M(()=>p(n),()=>{var le;S(h,((le=p(n))==null?void 0:le.opacity)??.8)}),M(()=>(p(a),p(n)),()=>{var le,Ie,me,Ce;S(g,{shortenHead:p(a),shortenTail:((Ie=(le=p(n))==null?void 0:le.linePathOptions)==null?void 0:Ie.shortenTail)??.2,bezierRounding:((Ce=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ce.bezierRounding)??.4})}),M(()=>Q(v()),()=>{S(f,Eu(v().cells))}),pe(),fe();var k=u$(),Y=q(k);A(Y,"id",R);var W=q(Y),K=U(W);H(Y);var re=U(Y);gl(re,{id:$,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var _e=U(re);A(_e,"mask",`url(#${R??""})`);var ee=U(_e);We(ee,1,()=>v().lines,gt,(le,Ie)=>{var me=Le(),Ce=ce(me);{var Se=lt=>{var xe=c$();Z(()=>A(xe,"d",Eu(p(Ie),p(g)))),A(xe,"stroke-linejoin",w),A(xe,"stroke-linecap",b),A(xe,"marker-end",`url(#${$??""})`),Z(()=>{A(xe,"stroke",p(s)),A(xe,"stroke-width",p(c)),A(xe,"opacity",p(h)),A(xe,"stroke-dasharray",p(u))}),N(lt,xe)};ge(Ce,lt=>{p(Ie).length>1&&lt(Se)})}N(le,me)}),H(k),Z(()=>{A(Y,"x",p(r)),A(Y,"y",p(i)),A(W,"x",p(r)),A(W,"y",p(i)),A(K,"stroke-width",2*p(a)-p(c)),A(K,"d",p(f)),A(_e,"d",p(f)),A(_e,"stroke-width",2*p(a)+p(c)),A(_e,"stroke",p(s))}),N(t,k),ne()}var _$=ie("<g></g>"),f$=ie('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function g$(t,e){te(e,!1);const n=qe(),r=()=>ve(BM,"$arrowToolsStore",n),i=T();let a=F(e,"boundingBox",8);M(()=>r(),()=>{S(i,r())}),pe();var s=f$();We(s,5,()=>p(i),gt,(c,u)=>{let h=()=>p(u).toolId,g=()=>p(u).element;var f=_$();We(f,5,()=>Object.entries(g()),v=>v[0],(v,m)=>{d$(v,{get arrowId(){return p(m)[0]},get arrowTool(){return p(m)[1]},get boundingBox(){return a()}})}),H(f),Z(()=>$n(f,`element-group ${h()}`)),N(c,f)}),H(s),N(t,s),ne()}var h$=ie('<!><path fill="none"></path>',1);function v$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=F(e,"singleCellArrowTool",8),u=F(e,"id",8);const h=c().cell,g=bn(c().toolId,Mt)??dO,f=.3;function v(x,R){const $=Ys(R),k=new Re($.c,$.r).normalise().scale(f),Y=Zn(x),W=Y.subtract(k),K=Y.add(k);return[W,K]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;M(()=>Q(c()),()=>{S(n,c().direction)}),M(()=>Q(c()),()=>{S(r,c().shape??g)}),M(()=>p(r),()=>{S(i,p(r).strokeWidth??.1)}),M(()=>p(r),()=>{S(a,p(r).stroke??"black")}),M(()=>p(n),()=>{S(s,_l(v(h,p(n))))}),pe(),fe();var I=h$(),w=ce(I);gl(w,{id:C,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(i)}});var b=U(w);A(b,"marker-end",`url(#${C??""})`),Z(()=>{A(b,"d",p(s)),A(b,"stroke",p(a)),A(b,"stroke-width",p(i))}),N(t,I),ne()}var p$=ie('<path fill="none"></path>'),m$=ie("<!><!>",1);function C$(t,e){te(e,!1);const n=T(),r=T(),i=T();let a=F(e,"singleCellMultiArrowTool",8),s=F(e,"id",8);const c=a().cell,u=bn(a().toolId,Mt)??_O,h=.2;function g(b,x){const R=Ys(x),$=new Re(R.c,R.r),Y=Zn(b).add($.scale(.4));return[Y.subtract($.normalise().scale(h)),Y]}function f(b){return _l(g(c,b))}const v=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${v}`;M(()=>Q(a()),()=>{S(n,a().shape??u)}),M(()=>p(n),()=>{S(r,p(n).strokeWidth??.08)}),M(()=>p(n),()=>{S(i,p(n).stroke??"black")}),pe(),fe();var C=m$(),I=ce(C);gl(I,{id:m,l:.1,get stroke(){return p(i)},get strokeWidth(){return p(r)}});var w=U(I);We(w,1,()=>a().directions,gt,(b,x)=>{var R=p$();Z(()=>A(R,"d",f(p(x)))),A(R,"marker-end",`url(#${m??""})`),Z(()=>{A(R,"stroke",p(i)),A(R,"stroke-width",p(r))}),N(b,R)}),N(t,C),ne()}var E$=ie('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Kg(t,e){te(e,!1);const n=qe(),r=()=>ve(MM,"$minimumConstraintsStore",n),i=()=>ve($M,"$maximumConstraintsStore",n),a=T(),s=T(),c=T();let u=F(e,"coord",8),h=F(e,"minOrMax",8);function g(w,b){const x=[!0,!0,!0,!0];let R=[[0,-1],[1,0],[0,1],[-1,0]];for(let $=0;$<R.length;$++){let k=R[$];const Y={r:w.r+k[1],c:w.c+k[0]};x[$]=!Object.values(b).some(W=>Ve(Y,W.cell))}return x}function f(w,b){let x=e8(h(),w.r,w.c);const R=g(w,b);return x=x.filter((k,Y)=>R[Y]),x.map(k=>yo(k,!1)).join("")}function v(w,b){return h()==="max"?b:w}M(()=>Q(u()),()=>{S(a,u().c)}),M(()=>Q(u()),()=>{S(s,u().r)}),M(()=>(r(),i()),()=>{S(c,v(r(),i()))}),pe(),fe();var m=E$(),C=q(m);A(C,"width",1),A(C,"height",1);var I=U(C);Z(()=>A(I,"d",f(u(),p(c)))),H(m),Z(()=>{A(C,"x",p(a)),A(C,"y",p(s))}),N(t,m),ne()}var I$=ie("<circle></circle>");function b$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=F(e,"x",8),h=F(e,"y",8),g=F(e,"value",8),f=F(e,"shape",8);M(()=>Q(f()),()=>{S(n,f().r??.35)}),M(()=>Q(f()),()=>{S(r,f().stroke??"black")}),M(()=>Q(f()),()=>{var m;S(i,(m=f())==null?void 0:m.opacity)}),M(()=>Q(f()),()=>{S(a,f().strokeWidth??.02)}),M(()=>Q(g()),()=>{S(s,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),M(()=>Q(f()),()=>{S(c,f().strokeDasharray??0)}),pe(),fe();var v=I$();Z(()=>{A(v,"cx",u()),A(v,"cy",h()),A(v,"r",p(n)),A(v,"stroke",p(r)),A(v,"stroke-width",p(a)),A(v,"fill",p(s)),A(v,"opacity",p(i)),A(v,"stroke-dasharray",p(c))}),N(t,v),ne()}var w$=ie('<g class="single-cell-tool"><!><!></g>');function O$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=F(e,"singleCellTool",8),u=F(e,"id",8);const h=c().cell,g=bn(c().toolId,Mt)??uO;M(()=>Q(c()),()=>{S(n,c().shape??g)}),M(()=>(p(n),B),()=>{var b;S(r,((b=p(n))==null?void 0:b.type)||B.CIRCLE)}),M(()=>{},()=>{S(i,{x:h.c+.5,y:h.r+.5})}),M(()=>Re,()=>{S(a,new Re(h.c,h.r))}),M(()=>Q(c()),()=>{S(s,c().value)}),pe(),fe();var f=w$(),v=q(f);{var m=b=>{Kg(b,{coord:h,minOrMax:"min"})},C=b=>{var x=Le(),R=ce(x);{var $=Y=>{Kg(Y,{coord:h,minOrMax:"max"})},k=Y=>{var W=Le(),K=ce(W);{var re=ee=>{b$(ee,{get x(){return p(i).x},get y(){return p(i).y},get value(){return p(s)},get shape(){return p(n)}})},_e=ee=>{var le=Le(),Ie=ce(le);{var me=Se=>{Bv(Se,{cells:[h],get shape(){return p(n)},get value(){return c().value}})},Ce=Se=>{hl(Se,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return p(n)}})};ge(Ie,Se=>{p(r)===B.CAGE?Se(me):Se(Ce,!1)},!0)}N(ee,le)};ge(K,ee=>{c().toolId===_.COLORED_COUNTING_CIRCLES?ee(re):ee(_e,!1)},!0)}N(Y,W)};ge(R,Y=>{c().toolId===_.MAXIMUM?Y($):Y(k,!1)},!0)}N(b,x)};ge(v,b=>{c().toolId===_.MINIMUM?b(m):b(C,!1)})}var I=U(v);{var w=b=>{ua(b,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};ge(I,b=>{p(r)!==B.CAGE&&c().toolId!==_.COLORED_COUNTING_CIRCLES&&p(s)&&b(w)})}H(f),Z(()=>A(f,"id",`constraint-${u()}`)),N(t,f),ne()}var y$=ie("<g></g>"),L$=ie('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function A$(t,e){te(e,!1);const n=qe(),r=()=>ve(Sd,"$singleCellToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=L$();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=y$();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{var m=Le(),C=ce(m);{var I=b=>{v$(b,{get singleCellArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},w=b=>{var x=Le(),R=ce(x);{var $=Y=>{C$(Y,{get singleCellMultiArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},k=Y=>{var W=Le(),K=ce(W);{var re=_e=>{O$(_e,{get singleCellTool(){return p(v)[1]},get id(){return p(v)[0]}})};ge(K,_e=>{p(v)[1].type==="SIMPLE"&&_e(re)},!0)}N(Y,W)};ge(R,Y=>{p(v)[1].type==="MULTIARROW"?Y($):Y(k,!1)},!0)}N(b,x)};ge(C,b=>{p(v)[1].type==="ARROW"?b(I):b(w,!1)})}N(f,m)}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var x$=ie('<line class="svelte-yr67cf"></line>');function S$(t,e){te(e,!1);const n=T(),r=T(),i=T();let a=F(e,"shape",8),s=F(e,"coords",8);const[c,u]=s(),h=u.c,g=c.c===u.c?u.c+1:u.c,f=u.r,v=c.r===u.r?u.r+1:u.r;M(()=>Q(a()),()=>{S(n,a().stroke??"black")}),M(()=>Q(a()),()=>{var C;S(r,(C=a())==null?void 0:C.opacity)}),M(()=>Q(a()),()=>{S(i,a().strokeWidth??.02)}),pe(),fe();var m=x$();A(m,"x1",h),A(m,"x2",g),A(m,"y1",f),A(m,"y2",v),Z(()=>{A(m,"stroke",p(n)),A(m,"stroke-width",p(i)),A(m,"opacity",p(r))}),N(t,m),ne()}var N$=ie('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function T$(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T();let c=F(e,"edgeTool",8);const u=c().cells,h=bn(c().toolId,Mt)??Mh;function g(I,w){return w===B.TEXT_ONLY?I.value?I.value:"-":I.value??""}function f(){if(c().toolId!==_.EDGE_INEQUALITY)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}M(()=>Q(c()),()=>{S(n,c().shape??h)}),M(()=>Ds,()=>{S(r,_L(Ds(u)))}),M(()=>(p(n),B),()=>{var I;S(i,((I=p(n))==null?void 0:I.type)||B.CIRCLE)}),M(()=>p(n),()=>{var I;S(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),M(()=>p(n),()=>{var I;S(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),pe(),fe();var v=Le(),m=ce(v);{var C=I=>{var w=N$(),b=q(w);{var x=Y=>{Oi(Y,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},R=Y=>{var W=Le(),K=ce(W);{var re=ee=>{Oi(ee,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},_e=ee=>{var le=Le(),Ie=ce(le);{var me=Se=>{S$(Se,{coords:u,get shape(){return p(n)}})},Ce=Se=>{hl(Se,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(Ie,Se=>{p(i)===B.BORDER_LINE?Se(me):Se(Ce,!1)},!0)}N(ee,le)};ge(K,ee=>{p(i)===B.TEXT_ONLY?ee(re):ee(_e,!1)},!0)}N(Y,W)};ge(b,Y=>{c().toolId===_.EDGE_INEQUALITY?Y(x):Y(R,!1)})}var $=U(b);Z(()=>A($,"transform",`rotate(${f()}, ${p(r).x}, ${p(r).y} )`));var k=q($,!0);Z(()=>nt(k,g(c(),p(i)))),H($),H(w),Z(()=>{A($,"x",p(r).x),A($,"y",p(r).y),A($,"font-size",p(a)),A($,"fill",p(s))}),N(I,w)};ge(m,I=>{u.length===2&&I(C)})}N(t,v),ne()}var D$=ie("<g></g>"),R$=ie('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function k$(t,e){te(e,!1);const n=qe(),r=()=>ve(FM,"$edgeToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=R$();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=D$();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{T$(f,{get edgeTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}function G$(t,e){const n=t.getRow(e.r);return new Set(n)}function M$(t,e){const n=t.getCol(e.c);return new Set(n)}function $$(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function F$(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function U$(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function H$(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function P$(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function B$(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function W$(t,e,n){let r=new Set;const a=n.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>f!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),h=c.findIndex(f=>f===e);if(h!==-1){if(r=new Set([...r,...u]),u.length>0){const f=c.filter((v,m)=>m!==h);r=new Set([...r,...f])}return r}return u.findIndex(f=>f===e)!==-1&&(r=new Set([...r,...c])),r}function Y$(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function z$(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function j$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(_.ANTIKNIGHT)&&(r=r.union(F$(t,i))),e.get(_.ANTIKING)&&(r=r.union(U$(t,i))),e.get(_.DISJOINT_GROUPS)&&(r=r.union(H$(t,i))),e.get(_.NEGATIVE_DIAGONAL)&&(r=r.union(B$(t,i))),e.get(_.POSITIVE_DIAGONAL)&&(r=r.union(P$(t,i)))),r}function eu(t,e,n,r,i){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=z$(t,n,c);i=new Set([...i,...u])}return i}function V$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const a=e.get(_.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],h=W$(t,i,u);r=new Set([...r,...h])}const s=e.get(_.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],h=Y$(t,i,u);r=new Set([...r,...h])}return r=eu(t,e,i,_.KILLER_CAGE,r),r=eu(t,e,i,_.PARITY_BALANCE_CAGE,r),r=eu(t,e,i,_.SPOTLIGHT_CAGE,r),r}function Wv(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,a=t.localConstraints;if(!r)return n;r.get(_.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...G$(i,e),...M$(i,e),...$$(i,e)])),n=new Set([...n,...j$(i,r,e)]),n=new Set([...n,...V$(i,a,e)]);const s=i.getCell(e.r,e.c);return s&&n.delete(s),n}function q$(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(Wv(t,a));const r=n.reduce((a,s)=>a.intersection(s)),i=[];for(const a of r)i.push(a.toCoords());return i}var K$=ie('<tspan class="svelte-xct9ah"> </tspan>'),X$=ie('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function Z$(t,e){te(e,!1);const n=T();let r=F(e,"cell",8),i=F(e,"seen_values",8);const a=.25;function s(g){return i().find(v=>v===g)!==void 0}M(()=>Q(r()),()=>{S(n,Zn({r:r().r,c:r().c}))}),pe(),fe();var c=Le(),u=ce(c);{var h=g=>{var f=X$(),v=q(f);A(v,"font-size",a),We(v,5,()=>r().centerMarks,gt,(m,C)=>{var I=K$();const w=Xe(()=>s(p(C)));Z(()=>Ot(I,"conflict",p(w)));var b=q(I,!0);H(I),Z(()=>nt(b,p(C))),N(m,I)}),H(v),H(f),Z(()=>{A(v,"x",p(n).x),A(v,"y",p(n).y),A(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(g,f)};ge(u,g=>{r().centerMarks.length&&g(h)})}N(t,c),ne()}var Q$=ie('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),J$=ie('<g class="corner-marks-group"></g>');function e4(t,e){te(e,!1);let n=F(e,"cell",8),r=F(e,"seen_values",8);const i=.25,a=.28;function s(f){const v=f.cornerMarks.slice(0,8),m=Zn({r:f.r,c:f.c});return v.map((C,I)=>{const w=QM(I,a);return{pos:m.add(w),value:C,idx:I}})}function c(f){return r().find(m=>m===f)!==void 0}fe();var u=Le(),h=ce(u);{var g=f=>{var v=J$();We(v,5,()=>s(n()),gt,(m,C)=>{let I=()=>p(C).pos,w=()=>p(C).value;var b=Q$();A(b,"font-size",i);const x=Xe(()=>c(w()));var R=q(b,!0);H(b),Z(()=>{A(b,"x",I().x),A(b,"y",I().y),Ot(b,"conflict",p(x)),nt(R,w())}),N(m,b)}),H(v),N(f,v)};ge(h,f=>{n().cornerMarks.length&&f(g)})}N(t,u),ne()}var t4=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),n4=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),r4=ie('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),i4=ie("<!><!>",1),o4=ie('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function a4(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(ma,"$puzzleStore",n),a=()=>ve(Kt,"$toolStore",n),s=T(),c=T(),u=T(),h=T(),g=T(),f=T(),v=T();let m=F(e,"cell",8);const C=.8,I=400;function w(k,Y){if(!k)return[];let K=[...Wv(p(g),Y.toCoords())].map(re=>re.value).filter(re=>re!==null);return K=[...new Set(K)],K}function b(k){return k?"1":"0"}M(()=>Q(m()),()=>{S(s,m().value)}),M(()=>Q(m()),()=>{S(c,m().given)}),M(()=>Q(m()),()=>{S(u,Zn({r:m().r,c:m().c}))}),M(()=>r(),()=>{S(h,r().highlightPencilmarkConflicts)}),M(()=>i(),()=>{S(g,i())}),M(()=>r(),()=>{S(f,r().showSolution)}),M(()=>(p(h),Q(m())),()=>{S(v,w(p(h),m()))}),pe(),fe();var x=Le(),R=ce(x);{var $=k=>{var Y=o4(),W=q(Y);{var K=_e=>{var ee=Le(),le=ce(ee);{var Ie=me=>{var Ce=t4();A(Ce,"font-size",C),A(Ce,"font-weight",I);var Se=q(Ce,!0);H(Ce),Z(()=>{A(Ce,"x",p(u).x),A(Ce,"y",p(u).y),nt(Se,m().region)}),N(me,Ce)};ge(le,me=>{m().region!==null&&me(Ie)})}N(_e,ee)},re=_e=>{var ee=Le(),le=ce(ee);{var Ie=Ce=>{var Se=Le(),lt=ce(Se);{var xe=we=>{var _t=n4();A(_t,"font-size",C),A(_t,"font-weight",I);var ct=q(_t,!0);Z(()=>nt(ct,b(m().fog))),H(_t),Z(()=>{A(_t,"x",p(u).x),A(_t,"y",p(u).y)}),N(we,_t)};ge(lt,we=>{m().fog!==null&&we(xe)})}N(Ce,Se)},me=Ce=>{var Se=Le(),lt=ce(Se);{var xe=_t=>{var ct=r4();A(ct,"font-size",C),A(ct,"font-weight",I);var Un=q(ct,!0);H(ct),Z(()=>{A(ct,"x",p(u).x),A(ct,"y",p(u).y),Ot(ct,"given",p(c)),nt(Un,p(s))}),N(_t,ct)},we=_t=>{var ct=i4(),Un=ce(ct);e4(Un,{get cell(){return m()},get seen_values(){return p(v)}});var Lt=U(Un);Z$(Lt,{get cell(){return m()},get seen_values(){return p(v)}}),N(_t,ct)};ge(lt,_t=>{p(s)!==null?_t(xe):_t(we,!1)},!0)}N(Ce,Se)};ge(le,Ce=>{a()===_.FOG?Ce(Ie):Ce(me,!1)},!0)}N(_e,ee)};ge(W,_e=>{a()===_.REGIONS?_e(K):_e(re,!1)})}H(Y),Z(()=>Ot(Y,"hide-given",m().given)),N(k,Y)};ge(R,k=>{p(f)||k($)})}N(t,x),ne()}var s4=ie("<path></path>"),l4=ie('<g class="highlights-group"></g>');function c4(t,e){te(e,!1);const n=qe(),r=()=>ve(Kt,"$toolStore",n);let i=F(e,"cell",8);function a(h){const g=Zn({r:i().r,c:i().c}),f=i().highlights.length;return i().highlights.map((m,C)=>{let I=XM(C,f);I=I.map(b=>b.add(g));const w=yo(I,!0);return{colorId:m,d:w}})}fe();var s=Le(),c=ce(s);{var u=h=>{var g=Le(),f=ce(g);{var v=m=>{var C=l4();We(C,5,()=>a(i()),gt,(I,w)=>{let b=()=>p(w).colorId,x=()=>p(w).d;var R=s4();Z(()=>{$n(R,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),A(R,"d",x())}),N(I,R)}),H(C),N(m,C)};ge(f,m=>{i().highlights.length&&m(v)})}N(h,g)};ge(c,h=>{r()!==_.REGIONS&&h(u)})}N(t,s),ne()}var u4=ie('<path class="cell-marker" fill="none"></path>'),d4=ie('<circle fill="none" opacity="0.9"></circle>');function _4(t,e){te(e,!1);const n=T(),r=T();let i=F(e,"marker",8);const a=.3,s=.08;M(()=>Q(i()),()=>{S(n,Pv(i(),a))}),M(()=>Q(i()),()=>{S(r,fl(i().colorId,"black"))}),pe(),fe();var c=Le(),u=ce(c);{var h=f=>{var v=u4();A(v,"stroke-width",s),Z(()=>{A(v,"d",p(n)),A(v,"stroke",p(r))}),N(f,v)},g=f=>{var v=d4();A(v,"r",a),A(v,"stroke-width",s),Z(()=>{$n(v,`cell-marker color-${i().colorId??""}`),A(v,"cx",i().c),A(v,"cy",i().r),A(v,"stroke",p(r))}),N(f,v)};ge(u,f=>{i().marker==="X"?f(h):f(g,!1)})}N(t,c),ne()}var f4=ie('<g class="cell-markers"></g>');function g4(t,e){let n=F(e,"markers",8);var r=f4();We(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,a)=>{_4(i,{get marker(){return p(a)}})}),H(r),N(t,r)}var h4=ie('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function v4(t,e){te(e,!1);const n=T();let r=F(e,"draftLineMarker",8);const i=.2;function a(u){return u.map(g=>[new Re(g.p1.c,g.p1.r),new Re(g.p2.c,g.p2.r)]).flat()}function s(u){const h=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?fl(h,"black"):"darkred"}M(()=>Q(r()),()=>{S(n,yo(a(r().draftLine)))}),pe(),fe();var c=h4();Z(()=>A(c,"stroke",s(r()))),A(c,"stroke-width",i),A(c,"opacity",.5),Z(()=>A(c,"d",p(n))),N(t,c),ne()}var p4=ie('<path fill="none" opacity="0.9"></path>');function m4(t,e){te(e,!1);const n=T(),r=T();let i=F(e,"marker",8);const a=.08,s=.04;M(()=>Q(i()),()=>{S(n,Pv(i(),a))}),M(()=>Q(i()),()=>{S(r,fl(i().colorId,"black"))}),pe(),fe();var c=p4();A(c,"stroke-width",s),Z(()=>{A(c,"d",p(n)),$n(c,`edge-marker color-${i().colorId??""}`),A(c,"stroke",p(r))}),N(t,c),ne()}var C4=ie('<g class="edge-markers"></g>');function E4(t,e){let n=F(e,"markers",8);var r=C4();We(r,5,n,i=>`${i.r}, ${i.c}`,(i,a)=>{m4(i,{get marker(){return p(a)}})}),H(r),N(t,r)}var I4=ie('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),b4=ie('<g class="line-markers svelte-yha19m"></g>');function w4(t,e){te(e,!1);let n=F(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function a(c){return fl(c,"black")}fe();var s=b4();We(s,5,n,c=>i(c),(c,u)=>{var h=I4();A(h,"stroke-width",r),Z(()=>A(h,"stroke",a(p(u).colorId))),Z(()=>{A(h,"x1",p(u).p1.c),A(h,"y1",p(u).p1.r),A(h,"x2",p(u).p2.c),A(h,"y2",p(u).p2.r),$n(h,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),N(c,h)}),H(s),N(t,s),ne()}var O4=ie('<g class="pen-tool"><!><!><!><!></g>');function y4(t,e){te(e,!1);const n=qe(),r=()=>ve(Ss,"$penToolStore",n),i=T();M(()=>r(),()=>{S(i,{draftLine:r().draftLine,mode:r().mode})}),pe(),fe();var a=O4(),s=q(a);w4(s,{get lineMarkers(){return r().lineMarkers}});var c=U(s);E4(c,{get markers(){return r().edgeMarkers}});var u=U(c);g4(u,{get markers(){return r().cellMarkers}});var h=U(u);v4(h,{get draftLineMarker(){return p(i)}}),H(a),N(t,a),ne()}var L4=ie('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function A4(t,e){te(e,!1);const n=qe(),r=()=>ve(bi,"$selectionStore",n),i=()=>ve(Wt,"$settingsStore",n),a=()=>ve(ma,"$puzzleStore",n),s=()=>ve(Kt,"$toolStore",n),c=T(),u=T(),h=T(),g=T(),f={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(w,b){return w.length?q$(p(h),w):[]}M(()=>r(),()=>{S(c,r().cells)}),M(()=>i(),()=>{S(u,i().highlightCellsSeenBySelection)}),M(()=>a(),()=>{S(h,a())}),M(()=>s(),()=>{S(g,Ju(s()))}),pe(),fe();var m=Le(),C=ce(m);{var I=w=>{var b=L4(),x=q(b),R=Xe(()=>v(p(c),p(h)));Rs(x,{get cells(){return p(R)},shape:f}),H(b),N(w,b)};ge(C,w=>{p(u)&&p(g)&&w(I)})}N(t,m),ne()}function vl(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),i=[...av(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&i.includes(a.value))),e}function x4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...vl(r))}return new Set(e)}function S4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...vl(r))}return new Set(e)}function N4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...vl(r))}return new Set(e)}function T4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function D4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function R4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function k4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),a=vl(i);a.length&&e.push(...a)}return new Set(e)}function G4(t,e){let n=new Set;if(!e.get(_.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...x4(t),...S4(t),...N4(t)]);n=n.union(i)}return e.get(_.ANTIKNIGHT)&&(n=n.union(T4(t))),e.get(_.ANTIKING)&&(n=n.union(D4(t))),e.get(_.NONCONSECUTIVE)&&(n=n.union(R4(t))),e.get(_.DISJOINT_GROUPS)&&(n=n.union(k4(t))),n}function M4(t,e){return[...new Set([...G4(t,e)])]}var $4=ie('<rect class="conflict svelte-4mp6ok"></rect>'),F4=ie('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function U4(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(ln,"$gridStore",n),a=()=>ve(Dr,"$globalConstraintsStore",n),s=()=>ve(sn,"$cellsStore",n),c=T(),u=T(),h=T(),g=T();B.CAGE;function f(I){return M4(p(u),p(h)).map(x=>x.toCoords())}M(()=>r(),()=>{S(c,r().checkConflicts)}),M(()=>i(),()=>{S(u,i())}),M(()=>a(),()=>{S(h,a())}),M(()=>s(),()=>{S(g,s())}),pe(),fe();var v=Le(),m=ce(v);{var C=I=>{var w=F4();We(w,5,()=>f(p(g)),gt,(b,x)=>{var R=$4();A(R,"width",1),A(R,"height",1),Z(()=>{A(R,"x",p(x).c),A(R,"y",p(x).r)}),N(b,R)}),H(w),N(I,w)};ge(m,I=>{p(c)&&I(C)})}N(t,v),ne()}var H4=ie('<line class="diag svelte-ylotlw"></line>'),P4=ie('<line class="antidiag svelte-ylotlw"></line>'),B4=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),W4=ie('<line class="diag svelte-ylotlw"></line>'),Y4=ie('<line class="antidiag svelte-ylotlw"></line>'),z4=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),j4=ie('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function V4(t,e){te(e,!1);const n=qe(),r=()=>ve(Dr,"$globalConstraintsStore",n),i=()=>ve(ln,"$gridStore",n),a=T(),s=T(),c=T(),u=T(),h=T(),g=T(),f=T(),v=T(),m=T(),C=T(),I=T(),w=T(),b=0,x=0,R=0,$=0;M(()=>r(),()=>{S(a,r())}),M(()=>(p(a),_),()=>{S(s,!!p(a).get(_.POSITIVE_DIAGONAL))}),M(()=>(p(a),_),()=>{S(c,!!p(a).get(_.NEGATIVE_DIAGONAL))}),M(()=>(p(a),_),()=>{S(u,!!p(a).get(_.NEGATIVE_ANTIDIAGONAL))}),M(()=>(p(a),_),()=>{S(h,!!p(a).get(_.POSITIVE_ANTIDIAGONAL))}),M(()=>(p(a),_),()=>{S(g,!!p(a).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),M(()=>(p(a),_),()=>{S(f,!!p(a).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),M(()=>i(),()=>{S(v,i())}),M(()=>p(v),()=>{S(m,p(v).nCols)}),M(()=>p(v),()=>{S(C,p(v).nRows)}),M(()=>p(v),()=>{S(I,p(v).nCols)}),M(()=>p(v),()=>{S(w,p(v).nRows)}),pe(),fe();var k=j4(),Y=q(k);{var W=xe=>{var we=H4();A(we,"x1",b),A(we,"y1",x),Z(()=>{A(we,"x2",p(I)),A(we,"y2",p(w))}),N(xe,we)};ge(Y,xe=>{p(c)&&xe(W)})}var K=U(Y);{var re=xe=>{var we=P4();A(we,"x1",b),A(we,"y1",x),Z(()=>{A(we,"x2",p(I)),A(we,"y2",p(w))}),N(xe,we)};ge(K,xe=>{p(u)&&xe(re)})}var _e=U(K);{var ee=xe=>{var we=B4();A(we,"x1",b),A(we,"y1",x),Z(()=>{A(we,"x2",p(I)),A(we,"y2",p(w))}),N(xe,we)};ge(_e,xe=>{p(g)&&xe(ee)})}var le=U(_e);{var Ie=xe=>{var we=W4();A(we,"x2",$),A(we,"y1",R),Z(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),N(xe,we)};ge(le,xe=>{p(s)&&xe(Ie)})}var me=U(le);{var Ce=xe=>{var we=Y4();A(we,"x2",$),A(we,"y1",R),Z(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),N(xe,we)};ge(me,xe=>{p(h)&&xe(Ce)})}var Se=U(me);{var lt=xe=>{var we=z4();A(we,"x2",$),A(we,"y1",R),Z(()=>{A(we,"x1",p(m)),A(we,"y2",p(C))}),N(xe,we)};ge(Se,xe=>{p(f)&&xe(lt)})}H(k),N(t,k),ne()}var q4=ie('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function K4(t,e){te(e,!1);const n=qe(),r=()=>ve(sn,"$cellsStore",n),i=()=>ve(vv,"$showFogStore",n),a=()=>ve(qs,"$solutionStore",n),s=()=>ve(ln,"$gridStore",n),c=T(),u=T(),h=T(),g=T(),f=T(),v=T();let m=F(e,"boundingBox",8),C=F(e,"gridShape",8);function I(Ie){const me=Ie.filter(we=>we.fog);if(!p(f))return me.map(_t=>_t.toCoords());const Ce=Ie.filter(we=>we.value===p(f)[we.r][we.c]);let Se=new Set;for(const we of Ce){const _t=p(v).getNeighboorCells(we);Se=new Set([..._t,we])}return[...new Set(me).difference(Se)].map(we=>we.toCoords())}M(()=>r(),()=>{S(c,r())}),M(()=>p(c),()=>{S(u,I(p(c)))}),M(()=>p(u),()=>{S(h,oo(p(u),0))}),M(()=>i(),()=>{S(g,i())}),M(()=>a(),()=>{S(f,a())}),M(()=>s(),()=>{S(v,s())}),pe(),fe();var w=q4(),b=q(w),x=q(b);H(b);var R=U(b),$=q(R);A($,"stroke-width",.5);var k=U($);A(k,"stroke-width",.375);var Y=U(k);A(Y,"stroke-width",.25);var W=U(Y);A(W,"stroke-width",.125),Ei(),H(R);var K=U(R),re=q(K);Ei(),H(K);var _e=U(K),ee=q(_e),le=U(ee);A(le,"x",0),A(le,"y",0),H(_e),H(w),Z(()=>{A(x,"d",p(h)),Ot(R,"disabled",!p(g)),Ot(K,"disabled",!p(g)),A(re,"x",m().x),A(re,"y",m().y),A(re,"width",m().width),A(re,"height",m().height),A(ee,"x",m().x),A(ee,"y",m().y),A(ee,"width",m().width),A(ee,"height",m().height),A(le,"width",C().nCols),A(le,"height",C().nRows)}),N(t,w),ne()}var X4=ie('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function Z4(t,e){te(e,!1);const n=qe(),r=()=>ve(vv,"$showFogStore",n),i=T();let a=F(e,"gridShape",8);M(()=>r(),()=>{S(i,r())}),pe(),fe();var s=X4(),c=q(s);A(c,"x",0),A(c,"y",0),H(s),Z(()=>{A(s,"visibility",p(i)?"visible":"hidden"),A(c,"width",a().nCols),A(c,"height",a().nRows)}),N(t,s),ne()}var Q4=ie('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function J4(t,e){te(e,!1);const n=T();let r=F(e,"r",8),i=F(e,"c",8),a=F(e,"val",8);const s=.8,c=400;M(()=>(Q(r()),Q(i())),()=>{S(n,Zn({r:r(),c:i()}))}),pe(),fe();var u=Le(),h=ce(u);{var g=f=>{var v=Q4();A(v,"font-size",s),A(v,"font-weight",c);var m=q(v,!0);H(v),Z(()=>{A(v,"x",p(n).x),A(v,"y",p(n).y),nt(m,a())}),N(f,v)};ge(h,f=>{a()!==null&&f(g)})}N(t,u),ne()}var e6=ie('<g class="solution-layer"></g>');function t6(t,e){te(e,!1);const n=qe(),r=()=>ve(qs,"$solutionStore",n),i=()=>ve(Wt,"$settingsStore",n),a=()=>ve(Vs,"$gameModeStore",n),s=T(),c=T(),u=T();M(()=>r(),()=>{S(s,r())}),M(()=>i(),()=>{S(c,i().showSolution)}),M(()=>a(),()=>{S(u,a())}),pe(),fe();var h=Le(),g=ce(h);{var f=v=>{var m=e6();We(m,5,()=>p(s),gt,(C,I,w)=>{var b=Le(),x=ce(b);We(x,1,()=>p(I),gt,(R,$,k)=>{J4(R,{r:w,c:k,get val(){return p($)}})}),N(C,b)}),H(m),N(v,m)};ge(g,v=>{p(s)&&p(c)&&p(u)===ao.SETTING&&v(f)})}N(t,h),ne()}var n6=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),r6=ie('<g class="center-corner-or-edge-tool"><!><!></g>');function i6(t,e){te(e,!1);const n=T(),r=T(),i=T(),a=T(),s=T(),c=T();let u=F(e,"centerCornerOrEdgeTool",8);const h=u().cell,g=bn(u().toolId,Mt)??Mh;function f(b,x){return x===B.TEXT_ONLY?b.value?b.value:"-":b.value??""}M(()=>Q(u()),()=>{S(n,u().shape??g)}),M(()=>{},()=>{S(r,h)}),M(()=>(p(n),B),()=>{var b;S(i,((b=p(n))==null?void 0:b.type)||B.CIRCLE)}),M(()=>p(n),()=>{var b;S(a,((b=p(n))==null?void 0:b.fontSize)??.2)}),M(()=>p(n),()=>{var b;S(s,((b=p(n))==null?void 0:b.fontColor)??"black")}),M(()=>p(r),()=>{S(c,p(r).r%1===.5&&p(r).c%1===.5)}),pe(),fe();var v=r6(),m=q(v);hl(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=U(m);{var I=b=>{var x=Xe(()=>f(u(),p(i))),R=Xe(()=>Math.floor(p(r).c)),$=Xe(()=>Math.floor(p(r).r));ua(b,{get value(){return p(x)},get x(){return p(R)},get y(){return p($)},position:"TL",get fontColor(){return p(s)}})},w=b=>{var x=n6(),R=q(x,!0);Z(()=>nt(R,f(u(),p(i)))),H(x),Z(()=>{A(x,"x",p(r).c),A(x,"y",p(r).r),A(x,"font-size",p(a)),A(x,"fill",p(s))}),N(b,x)};ge(C,b=>{p(c)?b(I):b(w,!1)})}H(v),N(t,v),ne()}var o6=ie("<g></g>"),a6=ie('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function s6(t,e){te(e,!1);const n=qe(),r=()=>ve(UM,"$centerCornerOrEdgeToolsStore",n),i=T();M(()=>r(),()=>{S(i,r())}),pe();var a=a6();We(a,5,()=>p(i),gt,(s,c)=>{let u=()=>p(c).toolId,h=()=>p(c).element;var g=o6();We(g,5,()=>Object.entries(h()),f=>f[0],(f,v)=>{i6(f,{get centerCornerOrEdgeTool(){return p(v)[1]}})}),H(g),Z(()=>$n(g,`element-group ${u()}`)),N(s,g)}),H(a),N(t,a),ne()}var l6=ie('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function c6(t,e){te(e,!1);const n=qe(),r=()=>ve(ln,"$gridStore",n),i=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(Kt,"$toolStore",n),s=()=>ve(sn,"$cellsStore",n),c=T(),u=T(),h=T();let g=F(e,"svgRef",12,null);function f(){for(const[Lt,yn]of i().entries()){if(!la(Lt))continue;if(Object.entries(yn).some(([pr,Jn])=>!qt(Jn.cell,p(u))))return!0}return!1}function v(Lt,yn){const Xt=f(),pr=la(yn),Jn=Xt||pr?1:.2,mr=-Jn,ar=-Jn,Lo=Lt.nCols+2*Jn,$r=Lt.nRows+2*Jn;return{x:mr,y:ar,width:Lo,height:$r}}function m(Lt){return`${Lt.x} ${Lt.y} ${Lt.width} ${Lt.height}`}M(()=>r(),()=>{S(c,r())}),M(()=>p(c),()=>{S(u,{nRows:p(c).nRows,nCols:p(c).nCols})}),M(()=>(p(u),a()),()=>{S(h,v(p(u),a()))}),pe(),fe();var C=l6();Z(()=>A(C,"viewBox",m(p(h))));var I=q(C);K4(I,{get boundingBox(){return p(h)},get gridShape(){return p(u)}});var w=U(I);Z4(w,{get gridShape(){return p(u)}});var b=U(w);j8(b,{get grid(){return r()}});var x=U(b);N8(x,{get gridShape(){return p(u)}});var R=U(x);We(R,5,s,gt,(Lt,yn)=>{c4(Lt,{get cell(){return p(yn)}})}),H(R);var $=U(R);A4($,{});var k=U($);A$(k,{});var Y=U(k);Y8(Y,{});var W=U(Y);L8(W,{});var K=U(W);f8(K,{});var re=U(K);R8(re,{});var _e=U(re);V4(_e,{});var ee=U(_e);M8(ee,{});var le=U(ee);g$(le,{get boundingBox(){return p(h)}});var Ie=U(le);a8(Ie,{});var me=U(Ie);F8(me,{get boundingBox(){return p(h)}});var Ce=U(me);x8(Ce,{});var Se=U(Ce);k$(Se,{});var lt=U(Se);l$(lt,{});var xe=U(lt);s6(xe,{});var we=U(xe);y4(we,{});var _t=U(we);We(_t,5,s,gt,(Lt,yn)=>{a4(Lt,{get cell(){return p(yn)}})}),H(_t);var ct=U(_t);t6(ct,{});var Un=U(ct);U4(Un,{}),H(C),Ii(C,Lt=>g(Lt),()=>g()),N(t,C),ne()}function u6(t){return yL(t)?($w(),!0):!1}function d6(t){return LL(t)?(dv(),!0):!1}function _6(t){return AL(t)?(_v(),!0):!1}function tu(t){(u6(t)||d6(t)||_6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var f6=oe('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function g6(t,e){te(e,!1);const n=qe(),r=()=>ve(Uv,"$InputHandlerStore",n),i=()=>ve(no,"$svgRefStore",n),a=T();let s=T(null);function c(v){return m=>{v&&p(a)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===p(s))&&v(m)}}M(()=>r(),()=>{S(a,r())}),pe();var u=f6();Te("keydown",Uc,function(...v){tu==null||tu.apply(this,v)});var h=pg(()=>{var v;return c((v=p(a))==null?void 0:v.keyDown)});Te("keydown",Uc,function(...v){var m;(m=p(h))==null||m.apply(this,v)});var g=pg(()=>{var v;return c((v=p(a))==null?void 0:v.keyUp)});Te("keyup",Uc,function(...v){var m;(m=p(g))==null||m.apply(this,v)});var f=q(u);c6(f,{get svgRef(){return uh(),i()},set svgRef(v){_a(no,v)},$$legacy:!0}),H(u),Ii(u,v=>S(s,v),()=>p(s)),Te("pointerdown",u,Wc(Xn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerDown(v)})),!0),Te("pointermove",u,Wc(Xn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerMove(v)})),!0),Te("pointerup",u,Wc(Xn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerUp(v)})),!0),N(t,u),ne()}var h6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function v6(t){var e=h6();N(t,e)}var p6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function m6(t){var e=p6();N(t,e)}var C6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function E6(t){var e=C6();N(t,e)}var I6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function b6(t){var e=I6();N(t,e)}var w6=oe('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function O6(t,e){te(e,!1);const n=qe(),r=()=>ve(lo,"$commandHistoryStore",n),i=()=>ve(vu,"$selectOnStore",n),a=T(),s=T();function c(){dv()}function u(){_v()}function h(){console.log("check")}function g(){_a(vu,!i())}M(()=>r(),()=>{S(a,r()._undoStack.length===0)}),M(()=>r(),()=>{S(s,r()._redoStack.length===0)}),pe(),fe();var f=w6(),v=q(f),m=q(v);b6(m),H(v);var C=U(v,2),I=q(C);m6(I),H(C);var w=U(C,2);w.disabled=!0;var b=q(w);v6(b),H(w);var x=U(w,2),R=q(x);E6(R),H(x),H(f),Z(()=>{v.disabled=p(a),C.disabled=p(s),A(x,"aria-checked",i()),Ot(x,"active",i())}),Te("click",v,c),Te("click",C,u),Te("click",w,h),Te("click",x,g),N(t,f),ne()}var y6=oe('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),L6=oe('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),A6=oe('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),x6=oe('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function S6(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(Ns,"$penColorStore",n),a=()=>ve(Uv,"$InputHandlerStore",n),s=T(),c=T(),u=[];let h=F(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],f=["A","B","C","D","E","F","G","H","I","O"];let v=T(!1);function m(W){return W?f:g}function C(W){return[_.DIGIT,_.CENTER_PM,_.CORNER_PM,_.GIVEN].includes(W)}function I(W){const K=W.currentTarget;if(!K)return;const re=K.getAttribute("aria-checked");S(v,re!=="true")}M(()=>r(),()=>{S(s,r().penToolActive)}),M(()=>r(),()=>{S(c,r().letterToolActive)}),pe(),fe();var w=x6(),b=q(w);{var x=W=>{var K=Le(),re=ce(K);We(re,1,()=>g,gt,(_e,ee)=>{var le=y6(),Ie=q(le);Vt(Ie);var me;Ei(2),H(le),Z(()=>{A(le,"data-value",p(ee)),Ot(le,"active",i()===p(ee)),me!==(me=p(ee))&&(Ie.value=(Ie.__value=p(ee))==null?"":p(ee))}),Hs(u,[],Ie,()=>(p(ee),i()),Ce=>_a(Ns,Ce)),N(_e,le)}),N(W,K)},R=W=>{var K=Le(),re=ce(K);We(re,1,()=>m(p(v)),gt,(_e,ee)=>{var le=L6(),Ie=q(le),me=q(Ie,!0);H(Ie),Ei(2),H(le),Z(()=>{Aw(le,p(ee)),nt(me,p(ee))}),Te("click",le,function(...Ce){var Se;(Se=a()&&a().padClick)==null||Se.apply(this,Ce)}),N(_e,le)}),N(W,K)};ge(b,W=>{h()===_.PEN_TOOL&&p(s)?W(x):W(R,!1)})}var $=U(b,2);{var k=W=>{var K=A6();Z(()=>{A(K,"aria-checked",p(v)),Ot(K,"letter-checked",p(v)),Ot(K,"num-checked",!p(v))}),Te("click",K,I),N(W,K)};ge($,W=>{p(c)&&C(h())&&W(k)})}var Y=U($,2);H(w),Z(()=>{Ot(w,"digit",h()===_.DIGIT),Ot(w,"center",h()===_.CENTER_PM),Ot(w,"corner",h()===_.CORNER_PM),Ot(w,"color",h()===_.HIGHLIGHTS),Ot(w,"pen",h()===_.PEN_TOOL),Ot(Y,"letter-tool",p(c))}),Te("click",Y,function(...W){var K;(K=a()&&a().padClick)==null||K.apply(this,W)}),N(t,w),ne()}var N6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function T6(t){var e=N6();N(t,e)}var D6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function R6(t){var e=D6();N(t,e)}var k6=oe('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Vo(t,e){te(e,!1);const n=[];let r=F(e,"selectedTool",12),i=F(e,"value",8),a=F(e,"title",8,void 0);function s(){pu(i())}fe();var c=k6(),u=q(c);Vt(u);var h,g=U(u,2);dt(g,e,"default",{}),H(c),Z(()=>{A(c,"title",a()),Ot(c,"active",i()===r()),h!==(h=i())&&(u.value=(u.__value=i())==null?"":i())}),Hs(n,[],u,()=>(i(),r()),r),Te("change",u,s),N(t,c),ne()}var G6=oe('<span aria-hidden="true">1</span>'),M6=oe('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),$6=oe('<span aria-hidden="true" style="font-size: 50%">123</span>'),F6=oe('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),U6=oe('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),H6=oe('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function P6(t,e){te(e,!1);const n=qe(),r=()=>ve(Wt,"$settingsStore",n);let i=F(e,"selectedTool",12);fe();var a=H6(),s=q(a);Vo(s,{get value(){return _.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=G6();N(v,C)},$$slots:{default:!0},$$legacy:!0});var c=U(s,2);Vo(c,{get value(){return _.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=M6();N(v,C)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);Vo(u,{get value(){return _.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=$6();N(v,C)},$$slots:{default:!0},$$legacy:!0});var h=U(u,2);Vo(h,{get value(){return _.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=F6(),I=q(C);T6(I),H(C),N(v,C)},$$slots:{default:!0},$$legacy:!0});var g=U(h,2);{var f=v=>{Vo(v,{get value(){return _.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,C)=>{var I=U6(),w=q(I);R6(w),H(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(g,v=>{r().penToolActive&&v(f)})}H(a),N(t,a),ne()}var B6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function W6(t){var e=B6();N(t,e)}var Y6=oe('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function wa(t,e){let n=F(e,"title",8,void 0),r=F(e,"clickCb",8,void 0);var i=Y6(),a=q(i),s=q(a);dt(s,e,"default",{}),H(a),H(i),Z(()=>A(i,"title",n())),Te("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,i)}var z6=oe('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),j6=oe('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function V6(t,e){te(e,!1);let n=F(e,"showModal",12,!1);function r(){n(!1)}function i(){hv(),Ts(),n(!1)}fe(),Mr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=j6(),u=U(q(c),2);ol(u,{children:(h,g)=>{var f=z6(),v=ce(f),m=U(v,2);Te("click",v,i),Te("click",m,r),N(h,f)},$$slots:{default:!0}}),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0}),ne()}var q6=oe("<!> <!>",1);function K6(t){let e=T(!1);function n(){S(e,!0)}var r=q6(),i=ce(r);wa(i,{title:"Restart",clickCb:n,children:(s,c)=>{W6(s)},$$slots:{default:!0}});var a=U(i,2);V6(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var X6=oe('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Es(t,e){let n=F(e,"title",8);var r=X6(),i=q(r),a=q(i,!0);H(i);var s=U(i,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var Z6=oe('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function on(t,e){let n=F(e,"description",8);var r=Z6(),i=q(r),a=q(i,!0);H(i);var s=U(i,2),c=q(s);dt(c,e,"default",{}),H(s),H(r),Z(()=>nt(a,n())),N(t,r)}var Q6=oe('<div class="shortcut svelte-1cgt5u5"> </div>');function Jt(t,e){let n=F(e,"shortcut",8);var r=Q6(),i=q(r,!0);H(r),Z(()=>nt(i,n())),N(t,r)}var J6=oe("<!> <!> <!> <!>",1),eF=oe("<!> or <!>",1),tF=oe("<!> <!> <!> <!> <!> <!> <!> <!>",1),nF=oe("<!> <!>",1),rF=oe('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!></div>');function iF(t,e){let n=F(e,"showModal",12,!1);Mr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var a=rF(),s=q(a);Es(s,{title:"General",children:(g,f)=>{on(g,{description:"Toggle Darkmode",children:(v,m)=>{Jt(v,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var c=U(s,2);Es(c,{title:"Selection",children:(g,f)=>{var v=J6(),m=ce(v);on(m,{description:"Select cells",children:(b,x)=>{Jt(b,{shortcut:"click/drag"})},$$slots:{default:!0}});var C=U(m,2);on(C,{description:"Add to current selection",children:(b,x)=>{Jt(b,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=U(C,2);on(I,{description:"Remove from current selection",children:(b,x)=>{Jt(b,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=U(I,2);on(w,{description:"Add or remove from current selection",children:(b,x)=>{Jt(b,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(g,v)},$$slots:{default:!0}});var u=U(c,2);Es(u,{title:"Change Tool",children:(g,f)=>{var v=tF(),m=ce(v);on(m,{description:"Cycle Tool",children:(k,Y)=>{Jt(k,{shortcut:"Space"})},$$slots:{default:!0}});var C=U(m,2);on(C,{description:"Change to Digit Tool",children:(k,Y)=>{Jt(k,{shortcut:"Z"})},$$slots:{default:!0}});var I=U(C,2);on(I,{description:"Change to Corner Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"X"})},$$slots:{default:!0}});var w=U(I,2);on(w,{description:"Change to Center Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"C"})},$$slots:{default:!0}});var b=U(w,2);on(b,{description:"Change to Highlights Tool",children:(k,Y)=>{Jt(k,{shortcut:"V"})},$$slots:{default:!0}});var x=U(b,2);on(x,{description:"Quickshift To Corner Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"Shift"})},$$slots:{default:!0}});var R=U(x,2);on(R,{description:"Quickshift To Center Pencilmark Tool",children:(k,Y)=>{Jt(k,{shortcut:"Ctrl"})},$$slots:{default:!0}});var $=U(R,2);on($,{description:"Quickshift To Highlights Tool",children:(k,Y)=>{var W=eF(),K=ce(W);Jt(K,{shortcut:"Shift + Ctrl"});var re=U(K,2);Jt(re,{shortcut:"Alt"}),N(k,W)},$$slots:{default:!0}}),N(g,v)},$$slots:{default:!0}});var h=U(u,2);Es(h,{title:"Undo/Redo",children:(g,f)=>{var v=nF(),m=ce(v);on(m,{description:"Undo",children:(I,w)=>{Jt(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var C=U(m,2);on(C,{description:"Redo",children:(I,w)=>{Jt(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(g,v)},$$slots:{default:!0}}),H(a),N(r,a)},$$slots:{default:!0},$$legacy:!0})}var oF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function aF(t){var e=oF();N(t,e)}var sF=oe("<!> <!>",1);function lF(t){let e=T(!1);function n(){S(e,!0)}var r=sF(),i=ce(r);wa(i,{title:"Info",clickCb:n,children:(s,c)=>{aF(s)},$$slots:{default:!0}});var a=U(i,2);iF(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var cF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function uF(t){var e=cF();N(t,e)}var dF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function _F(t){var e=dF();N(t,e)}function fF(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function a(){n()?i():r(),S(e,!p(e))}wa(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=Le(),h=ce(u);{var g=v=>{_F(v)},f=v=>{uF(v)};ge(h,v=>{p(e)?v(g):v(f,!1)})}N(s,u)},$$slots:{default:!0}})}function Yv(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"renderers",8),i=F(e,"options",8);fe();var a=Le(),s=ce(a);{var c=u=>{var h=Le(),g=ce(h);ch(g,()=>r()[n().type],(f,v)=>{v(f,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,C)=>{var I=Le(),w=ce(I);{var b=R=>{Gs(R,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},x=R=>{var $=Wb();Z(()=>nt($,n().raw)),N(R,$)};ge(w,R=>{"tokens"in n()&&n().tokens?R(b):R(x,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,h)};ge(s,u=>{r()[n().type]&&u(c)})}N(t,a),ne()}function Gs(t,e){let n=F(e,"tokens",8),r=F(e,"renderers",8),i=F(e,"options",8);var a=Le(),s=ce(a);{var c=u=>{var h=Le(),g=ce(h);We(g,1,n,gt,(f,v)=>{Yv(f,{get token(){return p(v)},get renderers(){return r()},get options(){return i()}})}),N(u,h)};ge(s,u=>{n()&&u(c)})}N(t,a)}function zv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function jv(t){return t.startsWith("/")||t.startsWith("#")}function gF(t,e){return e.slug(t).replace(/--+/g,"-")}function hF(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;let a=T();M(()=>(Q(n()),Q(r())),()=>{S(a,gF(n().text,r().slugger))}),pe(),fe();var s=Le(),c=ce(s);return fh(c,()=>`h${n().depth}`,!1,(u,h)=>{let g;Z(()=>g=vh(u,g,{id:p(a)},void 0,u.namespaceURI===xu,u.nodeName.includes("-")));var f=Le(),v=ce(f);dt(v,e,"default",{}),N(h,f)}),N(t,s),Qe(e,"renderers",i),ne({renderers:i})}var vF=oe("<blockquote><!></blockquote>");function pF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=vF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}function mF(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8),i=F(e,"renderers",8),a=T();M(()=>Q(n()),()=>{S(a,n().ordered?"ol":"ul")}),pe(),fe();var s=Le(),c=ce(s);fh(c,()=>p(a),!1,(u,h)=>{let g;Z(()=>g=vh(u,g,{start:n().start||1},void 0,u.namespaceURI===xu,u.nodeName.includes("-")));var f=Le(),v=ce(f);We(v,1,()=>n().items,gt,(m,C)=>{var I=Xe(()=>({...p(C)}));Yv(m,{get token(){return p(I)},get options(){return r()},get renderers(){return i()}})}),N(h,f)}),N(t,s),ne()}var CF=oe("<li><!></li>");function EF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=CF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var IF=oe("<br>");function bF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=IF();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var wF=oe("<pre><code> </code></pre>");function OF(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=wF(),s=q(a),c=q(s,!0);return H(s),H(a),Z(()=>{Sw(s,`lang-${n().lang}`),nt(c,n().text)}),N(t,a),Qe(e,"options",r),Qe(e,"renderers",i),ne({options:r,renderers:i})}var yF=oe("<code> </code>");function LF(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=yF(),s=q(a,!0);return Z(()=>nt(s,n().raw.slice(1,n().raw.length-1))),H(a),N(t,a),Qe(e,"options",r),Qe(e,"renderers",i),ne({options:r,renderers:i})}var AF=oe('<th scope="col"><!></th>'),xF=oe("<td><!></td>"),SF=oe("<tr></tr>"),NF=oe("<table><thead><tr></tr></thead><tbody></tbody></table>");function TF(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8),i=F(e,"renderers",8);fe();var a=NF(),s=q(a),c=q(s);We(c,5,()=>n().header,gt,(h,g)=>{var f=AF(),v=q(f);Gs(v,{get tokens(){return p(g).tokens},get options(){return r()},get renderers(){return i()}}),H(f),N(h,f)}),H(c),H(s);var u=U(s);We(u,5,()=>n().rows,gt,(h,g)=>{var f=SF();We(f,5,()=>p(g),gt,(v,m)=>{var C=xF(),I=q(C);Gs(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return i()}}),H(C),N(v,C)}),H(f),N(h,f)}),H(u),H(a),N(t,a),ne()}function DF(t,e){te(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=Le(),s=ce(a);return Ow(s,()=>n().text),N(t,a),Qe(e,"options",r),Qe(e,"renderers",i),ne({options:r,renderers:i})}var RF=oe("<p><!></p>");function kF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=RF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var GF=oe("<a><!></a>");function MF(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;fe();var a=GF();Z(()=>A(a,"href",jv(n().href)?zv(r().baseUrl,n().href):n().href));var s=q(a);return dt(s,e,"default",{}),H(a),Z(()=>A(a,"title",n().title)),N(t,a),Qe(e,"renderers",i),ne({renderers:i})}function $F(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=Le(),s=ce(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var FF=oe("<dfn><!></dfn>");function UF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=FF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var HF=oe("<del><!></del>");function PF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=HF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var BF=oe("<em><!></em>");function WF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=BF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var YF=oe("<hr>");function zF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=YF();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var jF=oe("<strong><!></strong>");function VF(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=jF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}var qF=oe('<img class="markdown-image svelte-z38cge">');function KF(t,e){te(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;fe();var a=qF();return Z(()=>A(a,"src",jv(n().href)?zv(r().baseUrl,n().href):n().href)),Z(()=>{A(a,"title",n().title),A(a,"alt",n().text)}),N(t,a),Qe(e,"renderers",i),ne({renderers:i})}function Xg(t,e){te(e,!1);const n=void 0,r=void 0,i=void 0;var a=Le(),s=ce(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),ne({token:n,options:r,renderers:i})}const XF=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,ZF=Object.hasOwnProperty;class QF{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=JF(e,n===!0);const a=i;for(;ZF.call(r.occurrences,i);)r.occurrences[a]++,i=a+"-"+r.occurrences[a];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function JF(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(XF,"").replace(/ /g,"-"))}function Nd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Di=Nd();function Vv(t){Di=t}const qv=/[&<>"']/,eU=new RegExp(qv.source,"g"),Kv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,tU=new RegExp(Kv.source,"g"),nU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zg=t=>nU[t];function Rn(t,e){if(e){if(qv.test(t))return t.replace(eU,Zg)}else if(Kv.test(t))return t.replace(tU,Zg);return t}const rU=/(^|[^\[])\^/g;function Et(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(rU,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function Qg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const aa={exec:()=>null};function Jg(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,h=s;for(;--h>=0&&c[h]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function qo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function iU(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function eh(t,e,n,r){const i=e.href,a=e.title?Rn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:a,text:Rn(s)}}function oU(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[s]=a;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class Ms{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Di}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:qo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=oU(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=qo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:qo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=qo(n[0],`
`).split(`
`),i="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let h;for(h=0;h<r.length;h++)if(/^ {0,3}>/.test(r[h]))u.push(r[h]),c=!0;else if(!c)u.push(r[h]);else break;r=r.slice(h);const g=u.join(`
`),f=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,a=a?`${a}
${f}`:f;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,s,!0),this.lexer.state.top=v,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),w=this.blockquote(I);s[s.length-1]=w,i=i.substring(0,i.length-C.raw.length)+w.raw,a=a.substring(0,a.length-C.text.length)+w.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),w=this.list(I);s[s.length-1]=w,i=i.substring(0,i.length-m.raw.length)+w.raw,a=a.substring(0,a.length-C.raw.length)+w.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,a={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,h="",g="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;h=n[0],e=e.substring(h.length);let f=n[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),v=e.split(`
`,1)[0],m=!f.trim(),C=0;if(this.options.pedantic?(C=2,g=f.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,g=f.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(v)&&(h+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),$=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let W;if(v=Y,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),W=v):W=v.replace(/\t/g,"    "),R.test(v)||$.test(v)||k.test(v)||b.test(v)||x.test(v))break;if(W.search(/[^ ]/)>=C||!v.trim())g+=`
`+W.slice(C);else{if(m||f.replace(/\t/g,"    ").search(/[^ ]/)>=4||R.test(f)||$.test(f)||x.test(f))break;g+=`
`+v}!m&&!v.trim()&&(m=!0),h+=Y+`
`,e=e.substring(Y.length+1),f=W.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(h)&&(c=!0));let I=null,w;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(w=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:h,task:!!I,checked:w,loose:!1,text:g,tokens:[]}),a.raw+=h}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const h=a.items[u].tokens.filter(f=>f.type==="space"),g=h.length>0&&h.some(f=>/\n.*\n/.test(f.raw));a.loose=g}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Jg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(Jg(c,s.header.length).map((u,h)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[h]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Rn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=qo(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=iU(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),eh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),a=n[i.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return eh(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let c,u,h=s,g=0;const f=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+s);(i=f.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){h+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){g+=u;continue}if(h-=u,h>0)continue;u=Math.min(u,u+h+g);const v=[...i[0]][0].length,m=e.slice(0,s+i.index+v+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return i&&a&&(r=r.substring(1,r.length-1)),r=Rn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Rn(n[1]),i="mailto:"+r):(r=Rn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,a;if(n[2]==="@")i=Rn(n[0]),a="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=Rn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Rn(n[0]),{type:"text",raw:n[0],text:r}}}}const aU=/^(?:[ \t]*(?:\n|$))+/,sU=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,lU=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Oa=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cU=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Xv=/(?:[*+-]|\d{1,9}[.)])/,Zv=Et(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Xv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Td=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,uU=/^[^\n]+/,Dd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,dU=Et(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Dd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_U=Et(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Xv).getRegex(),pl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Rd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,fU=Et("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Rd).replace("tag",pl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Qv=Et(Td).replace("hr",Oa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pl).getRegex(),gU=Et(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Qv).getRegex(),kd={blockquote:gU,code:sU,def:dU,fences:lU,heading:cU,hr:Oa,html:fU,lheading:Zv,list:_U,newline:aU,paragraph:Qv,table:aa,text:uU},th=Et("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Oa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pl).getRegex(),hU={...kd,table:th,paragraph:Et(Td).replace("hr",Oa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",th).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pl).getRegex()},vU={...kd,html:Et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Rd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Et(Td).replace("hr",Oa).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Zv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Jv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pU=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ep=/^( {2,}|\\)\n(?!\s*$)/,mU=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ya="\\p{P}\\p{S}",CU=Et(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ya).getRegex(),EU=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,IU=Et(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ya).getRegex(),bU=Et("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ya).getRegex(),wU=Et("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ya).getRegex(),OU=Et(/\\([punct])/,"gu").replace(/punct/g,ya).getRegex(),yU=Et(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),LU=Et(Rd).replace("(?:-->|$)","-->").getRegex(),AU=Et("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",LU).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),$s=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,xU=Et(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",$s).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),tp=Et(/^!?\[(label)\]\[(ref)\]/).replace("label",$s).replace("ref",Dd).getRegex(),np=Et(/^!?\[(ref)\](?:\[\])?/).replace("ref",Dd).getRegex(),SU=Et("reflink|nolink(?!\\()","g").replace("reflink",tp).replace("nolink",np).getRegex(),Gd={_backpedal:aa,anyPunctuation:OU,autolink:yU,blockSkip:EU,br:ep,code:pU,del:aa,emStrongLDelim:IU,emStrongRDelimAst:bU,emStrongRDelimUnd:wU,escape:Jv,link:xU,nolink:np,punctuation:CU,reflink:tp,reflinkSearch:SU,tag:AU,text:mU,url:aa},NU={...Gd,link:Et(/^!?\[(label)\]\((.*?)\)/).replace("label",$s).getRegex(),reflink:Et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$s).getRegex()},Iu={...Gd,escape:Et(Jv).replace("])","~|])").getRegex(),url:Et(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},TU={...Iu,br:Et(ep).replace("{2,}","*").getRegex(),text:Et(Iu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Is={normal:kd,gfm:hU,pedantic:vU},Ko={normal:Gd,gfm:Iu,breaks:TU,pedantic:NU};class Gn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Di,this.options.tokenizer=this.options.tokenizer||new Ms,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Is.normal,inline:Ko.normal};this.options.pedantic?(n.block=Is.pedantic,n.inline=Ko.pedantic):this.options.gfm&&(n.block=Is.gfm,this.options.breaks?n.inline=Ko.breaks:n.inline=Ko.gfm),this.tokenizer.rules=n}static get rules(){return{block:Is,inline:Ko}}static lex(e,n){return new Gn(n).lex(e)}static lexInline(e,n){return new Gn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let h;this.options.extensions.startBlock.forEach(g=>{h=g.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,a,s=e,c,u,h;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(h=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,h)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const f=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},f),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(a=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(h=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class Fs{constructor(e){he(this,"options");he(this,"parser");this.options=e||Di}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Rn(i)+'">'+(r?a:Rn(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:Rn(a,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),a=Qg(e);if(a===null)return i;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=Qg(e);if(i===null)return r;e=i;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Md{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Di,this.options.renderer=this.options.renderer||new Fs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Md}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class sa{constructor(e){he(this,"options");he(this,"block");this.options=e||Di}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Gn.lex:Gn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}he(sa,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class DU{constructor(...e){he(this,"defaults",Nd());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Kn);he(this,"Renderer",Fs);he(this,"TextRenderer",Md);he(this,"Lexer",Gn);he(this,"Tokenizer",Ms);he(this,"Hooks",sa);this.use(...e)}walkTokens(e,n){var i,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const h of u)r=r.concat(this.walkTokens(h.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const h=c[u].flat(1/0);r=r.concat(this.walkTokens(h,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),i.extensions=n),r.renderer){const a=this.defaults.renderer||new Fs(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],h=a[c];a[c]=(...g)=>{let f=u.apply(a,g);return f===!1&&(f=h.apply(a,g)),f||""}}i.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new Ms(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],h=a[c];a[c]=(...g)=>{let f=u.apply(a,g);return f===!1&&(f=h.apply(a,g)),f}}i.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new sa;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],h=a[c];sa.passThroughHooks.has(s)?a[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(a,g)).then(v=>h.call(a,v));const f=u.call(a,g);return h.call(a,f)}:a[c]=(...g)=>{let f=u.apply(a,g);return f===!1&&(f=h.apply(a,g)),f}}i.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Gn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const a={...i},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Gn.lex:Gn.lexInline,h=s.hooks?s.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(g=>u(g,s)).then(g=>s.hooks?s.hooks.processAllTokens(g):g).then(g=>s.walkTokens?Promise.all(this.walkTokens(g,s.walkTokens)).then(()=>g):g).then(g=>h(g,s)).then(g=>s.hooks?s.hooks.postprocess(g):g).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let g=u(r,s);s.hooks&&(g=s.hooks.processAllTokens(g)),s.walkTokens&&this.walkTokens(g,s.walkTokens);let f=h(g,s);return s.hooks&&(f=s.hooks.postprocess(f)),f}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Rn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const yi=new DU;function Ct(t,e){return yi.parse(t,e)}Ct.options=Ct.setOptions=function(t){return yi.setOptions(t),Ct.defaults=yi.defaults,Vv(Ct.defaults),Ct};Ct.getDefaults=Nd;Ct.defaults=Di;Ct.use=function(...t){return yi.use(...t),Ct.defaults=yi.defaults,Vv(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return yi.walkTokens(t,e)};Ct.parseInline=yi.parseInline;Ct.Parser=Kn;Ct.parser=Kn.parse;Ct.Renderer=Fs;Ct.TextRenderer=Md;Ct.Lexer=Gn;Ct.lexer=Gn.lex;Ct.Tokenizer=Ms;Ct.Hooks=sa;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Kn.parse;Gn.lex;function RU(t){return new Gn().lex(t)}const kU=()=>({heading:hF,blockquote:pF,list:mF,list_item:EF,br:bF,code:OF,codespan:LF,table:TF,html:DF,paragraph:kF,link:MF,text:$F,def:UF,del:PF,em:WF,hr:zF,strong:VF,image:KF,space:Xg,escape:Xg}),GU=()=>({baseUrl:"/",slugger:new QF});function MU(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},dh(()=>{console.warn=t})}function rp(t,e){te(e,!1),MU();let n=F(e,"source",8),r=F(e,"options",24,()=>({})),i=F(e,"renderers",24,()=>({})),a=T(),s=T(),c=T();M(()=>(Q(n()),Q(i()),Q(r())),()=>{S(a,RU(n())),S(s,{...kU(),...i()}),S(c,{...GU(),...r()})}),pe(),fe(),Gs(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),ne()}var $U=oe('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),FU=oe('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),UU=oe('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function HU(t,e){te(e,!1);const n=qe(),r=()=>ve(Tr,"$puzzleMetaStore",n),i=T();let a=F(e,"showModal",12,!1);function s(u){return u?As(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}M(()=>r(),()=>{S(i,r())}),pe(),fe(),Mr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,h)=>{var g=UU(),f=q(g),v=q(f,!0);H(f);var m=U(f,2),C=q(m);Z(()=>nt(C,`by ${s(p(i).authors)??""}`)),H(m);var I=U(m,2),w=q(I),b=Xe(()=>c(p(i).ruleset));rp(w,{get source(){return p(b)}}),H(I);var x=U(I,2);{var R=Y=>{var W=$U(),K=U(ce(W),2);Z(()=>A(K,"href",p(i).ctcUrl)),N(Y,W)};ge(x,Y=>{var W,K;(K=(W=p(i))==null?void 0:W.ctcUrl)!=null&&K.length&&Y(R)})}var $=U(x,2);{var k=Y=>{var W=FU(),K=U(ce(W),2);Z(()=>A(K,"href",p(i).ctcYoutubeUrl)),N(Y,W)};ge($,Y=>{var W,K;(K=(W=p(i))==null?void 0:W.ctcYoutubeUrl)!=null&&K.length&&Y(k)})}H(g),Z(()=>{var Y;return nt(v,((Y=p(i))==null?void 0:Y.title)||"Puzzle")}),N(u,g)},$$slots:{default:!0},$$legacy:!0}),ne()}var PU=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function BU(t){var e=PU();N(t,e)}var WU=oe("<!> <!>",1);function YU(t){let e=T(!1);function n(){S(e,!0)}var r=WU(),i=ce(r);wa(i,{title:"Rules",clickCb:n,children:(s,c)=>{BU(s)},$$slots:{default:!0}});var a=U(i,2);HU(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var zU=oe("<!> <!>",1);function jU(t){let e=T(!1);function n(){S(e,!0)}var r=zU(),i=ce(r);wa(i,{title:"Settings",clickCb:n,children:(s,c)=>{Lv(s)},$$slots:{default:!0}});var a=U(i,2);Av(a,{get showModal(){return p(e)},set showModal(s){S(e,s)},$$legacy:!0}),N(t,r)}var VU=oe('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function qU(t){var e=VU(),n=q(e);jU(n);var r=U(n,2);YU(r);var i=U(r,2);fF(i);var a=U(i,2);lF(a);var s=U(a,2);K6(s),H(e),N(t,e)}var KU=oe('<div class="entry-panel-wrapper svelte-1dr0lb4"><div class="puzzle-info svelte-1dr0lb4"><div class="puzzle-header svelte-1dr0lb4"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1dr0lb4"><!></div></div>  <div class="entry-panel svelte-1dr0lb4"><!> <div class="entry-subpanel1 svelte-1dr0lb4"><!> <!></div> <!></div></div>');function XU(t,e){te(e,!1);const n=qe(),r=()=>ve(no,"$svgRefStore",n),i=()=>ve(Tr,"$puzzleMetaStore",n),a=()=>ve(Kt,"$toolStore",n),s=T(),c=T();function u(){r().focus()}function h(ee){return ee?As(ee," & ",", "):"Anonymous"}function g(ee){return ee&&ee.length?ee:"Normal sudoku rules apply."}M(()=>i(),()=>{S(s,i().title??"Sudoku")}),M(()=>i(),()=>{S(c,h(i().authors))}),pe(),fe();var f=KU(),v=q(f),m=q(v),C=q(m),I=q(C,!0);H(C);var w=U(C,2),b=q(w);H(w),H(m);var x=U(m,2),R=q(x),$=Xe(()=>g(i().ruleset));rp(R,{get source(){return p($)}}),H(x),H(v);var k=U(v,2),Y=q(k);qU(Y);var W=U(Y,2),K=q(W);S6(K,{get selectedTool(){return a()}});var re=U(K,2);P6(re,{get selectedTool(){return uh(),a()},set selectedTool(ee){_a(Kt,ee)},$$legacy:!0}),H(W);var _e=U(W,2);O6(_e,{}),H(k),H(f),Z(()=>{nt(I,p(s)),nt(b,`by ${p(c)??""}`)}),Te("click",k,Xn(()=>{u()})),N(t,f),ne()}var ZU=oe('<div class="App svelte-aer8a2"><header></header> <main class="svelte-aer8a2"><div class="game-wrapper svelte-aer8a2"><div class="game svelte-aer8a2"><!> <!> <!></div></div></main> <footer class="svelte-aer8a2"><div class="footer-text svelte-aer8a2"></div></footer></div>');function sH(t,e){te(e,!1);const n=qe(),r=()=>ve(Gw,"$darkModeStore",n),i=()=>ve(Vs,"$gameModeStore",n),a=T(),s=T();dh(async()=>{const I=window.location.href;try{await zw({workerURL:`${I}minizinc-worker.js`,wasmURL:`${I}minizinc.wasm`,dataURL:`${I}minizinc.data`})}catch(w){const b="Failed to initialize MiniZinc: "+w.message;console.log(b)}}),M(()=>r(),()=>{S(a,r()?"dark":"light")}),M(()=>i(),()=>{S(s,i())}),pe(),fe();var c=ZU(),u=U(q(c),2),h=q(u),g=q(h),f=q(g);{var v=I=>{GM(I)};ge(f,I=>{p(s)===ao.SETTING&&I(v)})}var m=U(f,2);g6(m,{});var C=U(m,2);XU(C,{}),H(g),H(h),H(u),Ei(2),H(c),Z(()=>A(c,"data-theme",p(a))),N(t,c),ne()}export{sH as component,aH as universal};
