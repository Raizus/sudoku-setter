var Bb=Object.defineProperty;var Wb=(t,e,n)=>e in t?Bb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>Wb(t,typeof e!="symbol"?e+"":e,n);import{b as ru,e as zb,a as N,n as ie,t as oe,c as Ae,d as Yb}from"../chunks/disclose-version.c9nfQR10.js";import{i as fe}from"../chunks/legacy.BeICcgj8.js";import{A as rh,b as wu,h as wt,G as ei,F as ti,O as oh,Y as ih,ad as jb,ae as hg,U as Ji,c as dr,au as Os,af as Ou,a as Hs,ag as ah,C as ou,av as vg,aw as Vb,H as qb,ax as Xb,d as yu,B as Lu,V as Kb,L as Zb,I as iu,ay as Au,az as Su,a1 as Qb,a7 as pg,aA as sh,aB as Jb,aC as ew,R as lh,W as tw,S as nw,E as rw,aD as xu,aE as ow,ac as iw,aF as aw,aG as sw,ai as Nu,M as ch,aH as lw,j as cw,a9 as uw,v as q,w as H,p as ne,x as U,t as Z,e as re,l as p,as as Ze,aI as $,$ as x,aJ as pe,aK as D,m as Q,f as ue,aL as dw,aM as Co,aN as Hc,o as mg}from"../chunks/runtime.3UijFPFW.js";import{d as _w,p as F,s as Xe,i as ge,e as fa,f as ve,b as Io,c as uh,m as dh}from"../chunks/props.CJazo4uA.js";import{i as fw,a as gw,b as hw,c as vw,d as pw,e as mw,n as Ew,f as Cw,l as Tu,g as Te,s as nt,r as Iw}from"../chunks/render.7_-GRy3G.js";import{d as fn,w as Ft,g as ct}from"../chunks/index.HRmy8yV3.js";import{a as bw,o as _h}from"../chunks/index-client.CTQVjhPh.js";function gt(t,e){return e}function ww(t,e,n,r){for(var o=[],a=e.length,s=0;s<a;s++)Vb(e[s].e,o,!0);var c=a>0&&o.length===0&&n!==null;if(c){var u=n.parentNode;qb(u),u.append(n),r.clear(),qr(t,e[0].prev,e[a-1].next)}Xb(o,()=>{for(var f=0;f<a;f++){var h=e[f];c||(r.delete(h.k),qr(t,h.prev,h.next)),yu(h.e,!c)}})}function We(t,e,n,r,o,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&sh)!==0;if(u){var f=t;s=wt?ei(Lu(f)):f.appendChild(rh())}wt&&ti();var h=null,g=!1;wu(()=>{var v=n(),m=oh(v)?v:v==null?[]:ih(v),E=m.length;if(g&&E===0)return;g=E===0;let I=!1;if(wt){var w=s.data===jb;w!==(E===0)&&(s=hg(),ei(s),Ji(!1),I=!0)}if(wt){for(var b=null,L,T=0;T<E;T++){if(dr.nodeType===8&&dr.data===Kb){s=dr,I=!0,Ji(!1);break}var k=m[T],G=r(k,T);L=fh(dr,c,b,null,k,G,T,o,e),c.items.set(G,L),b=L}E>0&&ei(hg())}if(!wt){var P=Zb;Ow(m,c,s,o,e,(P.f&Os)!==0,r)}a!==null&&(E===0?h?Ou(h):h=Hs(()=>a(s)):h!==null&&ah(h,()=>{h=null})),I&&Ji(!0),n()}),wt&&(s=dr)}function Ow(t,e,n,r,o,a,s,c){var Ee,xe,st,Se;var u=(o&Jb)!==0,f=(o&(Au|Su))!==0,h=t.length,g=e.items,v=e.first,m=v,E,I=null,w,b=[],L=[],T,k,G,P;if(u)for(P=0;P<h;P+=1)T=t[P],k=s(T,P),G=g.get(k),G!==void 0&&((Ee=G.a)==null||Ee.measure(),(w??(w=new Set)).add(G));for(P=0;P<h;P+=1){if(T=t[P],k=s(T,P),G=g.get(k),G===void 0){var z=m?m.e.nodes_start:n;I=fh(z,e,I,I===null?e.first:I.next,T,k,P,r,o),g.set(k,I),b=[],L=[],m=I.next;continue}if(f&&yw(G,T,P,o),G.e.f&Os&&(Ou(G.e),u&&((xe=G.a)==null||xe.unfix(),(w??(w=new Set)).delete(G))),G!==m){if(E!==void 0&&E.has(G)){if(b.length<L.length){var X=L[0],te;I=X.prev;var de=b[0],ee=b[b.length-1];for(te=0;te<b.length;te+=1)Eg(b[te],X,n);for(te=0;te<L.length;te+=1)E.delete(L[te]);qr(e,de.prev,ee.next),qr(e,I,de),qr(e,ee,X),m=X,I=ee,P-=1,b=[],L=[]}else E.delete(G),Eg(G,m,n),qr(e,G.prev,G.next),qr(e,G,I===null?e.first:I.next),qr(e,I,G),I=G;continue}for(b=[],L=[];m!==null&&m.k!==k;)(a||!(m.e.f&Os))&&(E??(E=new Set)).add(m),L.push(m),m=m.next;if(m===null)continue;G=m}b.push(G),I=G,m=G.next}if(m!==null||E!==void 0){for(var le=E===void 0?[]:ih(E);m!==null;)(a||!(m.e.f&Os))&&le.push(m),m=m.next;var Ie=le.length;if(Ie>0){var me=o&sh&&h===0?n:null;if(u){for(P=0;P<Ie;P+=1)(st=le[P].a)==null||st.measure();for(P=0;P<Ie;P+=1)(Se=le[P].a)==null||Se.fix()}ww(e,le,me,g)}}u&&iu(()=>{var we;if(w!==void 0)for(G of w)(we=G.a)==null||we.apply()}),ou.first=e.first&&e.first.e,ou.last=I&&I.e}function yw(t,e,n,r){r&Au&&vg(t.v,e),r&Su?vg(t.i,n):t.i=n}function fh(t,e,n,r,o,a,s,c,u,f){var h=(u&Au)!==0,g=(u&ew)===0,v=h?g?Qb(o):pg(o):o,m=u&Su?pg(s):s,E={i:m,v,k:a,a:null,e:null,prev:n,next:r};try{return E.e=Hs(()=>c(t,v,m),wt),E.e.prev=n&&n.e,E.e.next=r&&r.e,n===null?e.first=E:(n.next=E,n.e.next=E.e),r!==null&&(r.prev=E,r.e.prev=E.e),E}finally{}}function Eg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=lh(a);o.before(a),a=s}}function qr(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Lw(t,e,n,r,o){var a=t,s="",c;wu(()=>{if(s===(s=e()??"")){wt&&ti();return}c!==void 0&&(yu(c),c=void 0),s!==""&&(c=Hs(()=>{if(wt){dr.data;for(var u=ti(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=lh(u);if(u===null)throw tw(),nw;ru(dr,f),a=ei(u);return}var h=s+"",g=zb(h);ru(Lu(g),g.lastChild),a.before(g)}))})}function dt(t,e,n,r,o){var c;wt&&ti();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function gh(t,e,n,r,o,a){let s=wt;wt&&ti();var c,u,f=null;wt&&dr.nodeType===1&&(f=dr,ti());var h=wt?dr:t,g;wu(()=>{const v=e()||null;var m=v==="svg"?xu:null;v!==c&&(g&&(v===null?ah(g,()=>{g=null,u=null}):v===u?Ou(g):yu(g)),v&&v!==u&&(g=Hs(()=>{if(f=wt?f:m?document.createElementNS(m,v):document.createElement(v),ru(f,f),r){wt&&fw(v)&&f.append(document.createComment(""));var E=wt?Lu(f):f.appendChild(rh());wt&&(E===null?Ji(!1):ei(E)),r(f,E)}ou.nodes_end=f,h.before(f)})),c=v,c&&(u=c))},rw),s&&(Ji(!0),ei(h))}function hh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=hh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Aw(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=hh(t))&&(r&&(r+=" "),r+=e);return r}function Sw(t){return typeof t=="object"?Aw(t):t??""}function Vt(t){if(wt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;S(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;S(t,"checked",null),t.checked=o}}};t.__on_r=n,sw(n),gw()}}function xw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function vh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function Nw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function S(t,e,n,r){var o=t.__attributes??(t.__attributes={});wt&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[ow]=n),n==null?t.removeAttribute(e):typeof n!="string"&&mh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function ph(t,e,n,r,o=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var f in e)f in n||(n[f]=null);n.class&&(n.class=Sw(n.class));var h=mh(t),g=t.__attributes??(t.__attributes={});for(const b in n){let L=n[b];if(u&&b==="value"&&L==null){t.value=t.__value="",c[b]=L;continue}var v=c[b];if(L!==v){c[b]=L;var m=b[0]+b[1];if(m!=="$$"){if(m==="on"){const T={},k="$$"+b;let G=b.slice(2);var E=Cw(G);if(hw(G)&&(G=G.slice(0,-7),T.capture=!0),!E&&v){if(L!=null)continue;t.removeEventListener(G,c[k],T),c[k]=null}if(L!=null)if(E)t[`__${G}`]=L,pw([G]);else{let P=function(z){c[b].call(this,z)};c[k]=vw(G,t,P,T)}else E&&(t[`__${G}`]=void 0)}else if(b==="style"&&L!=null)t.style.cssText=L+"";else if(b==="autofocus")mw(t,!!L);else if(b==="__value"||b==="value"&&L!=null)t.value=t[b]=t.__value=L;else if(b==="selected"&&u)Nw(t,L);else{var I=b;o||(I=Ew(I));var w=I==="defaultValue"||I==="defaultChecked";if(L==null&&!a&&!w)if(g[b]=null,I==="value"||I==="checked"){let T=t;if(I==="value"){let k=T.defaultValue;T.removeAttribute(I),T.defaultValue=k}else{let k=T.defaultChecked;T.removeAttribute(I),T.defaultChecked=k}}else t.removeAttribute(b);else w||h.includes(I)&&(a||typeof L!="string")?t[I]=L:typeof L!="function"&&(wt&&(I==="src"||I==="href"||I==="srcset")||S(t,I,L))}b==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var Cg=new Map;function mh(t){var e=Cg.get(t.nodeName);if(e)return e;Cg.set(t.nodeName,e=[]);for(var n,r=t,o=Element.prototype;o!==r;){n=aw(r);for(var a in n)n[a].set&&e.push(a);r=iw(r)}return e}function Fn(t,e,n){var r=t.__className,o=Eh(e);wt&&t.getAttribute("class")===o?t.__className=o:(r!==o||wt&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function Tw(t,e,n){var r=t.__className,o=Eh(e);wt&&t.className===o?t.__className=o:(r!==o||wt&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function Eh(t,e){return(t??"")+""}function yt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=lw();Tu(t,"input",o=>{var a=o?t.defaultValue:t.value;if(a=Bc(t)?Wc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(wt&&t.defaultValue!==t.value||cw(e)==null&&t.value)&&n(Bc(t)?Wc(t.value):t.value),Nu(()=>{var o=e();Bc(t)&&o===Wc(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const Pc=new Set;function Ps(t,e,n,r,o=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Tu(n,"change",()=>{var f=n.__value;a&&(f=Ig(s,f,n.checked)),o(f)},()=>o(a?[]:null)),Nu(()=>{var f=r();if(wt&&n.defaultChecked!==n.checked){c=!0;return}a?(f=f||[],n.checked=f.includes(n.__value)):n.checked=_w(n.__value,f)}),ch(()=>{var f=s.indexOf(n);f!==-1&&s.splice(f,1)}),Pc.has(s)||(Pc.add(s),iu(()=>{s.sort((f,h)=>f.compareDocumentPosition(h)===4?-1:1),Pc.delete(s)})),iu(()=>{if(c){var f;if(a)f=Ig(s,f,n.checked);else{var h=s.find(g=>g.checked);f=h==null?void 0:h.__value}o(f)}})}function Ig(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Bc(t){var e=t.type;return e==="number"||e==="range"}function Wc(t){return t===""?null:+t}function Dw(t,e,n=e){Tu(t,"change",()=>{n(t.files)}),Nu(()=>{t.files=e()})}function Qe(t,e,n){var r=uw(t,e);r&&r.set&&(t[e]=n,ch(()=>{t[e]=null}))}function Rw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Kn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function zc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function kw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=oh(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}const Gw=!0,xH=Object.freeze(Object.defineProperty({__proto__:null,prerender:Gw},Symbol.toStringTag,{value:"Module"}));function Mw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=Ft(Mw()),$w=fn(Wt,t=>t.darkMode);function Fw(t){Wt.update(e=>({...e,darkMode:t}))}function Uw(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function Hw(t){Wt.update(e=>({...e,penToolActive:t}))}function Pw(t){Wt.update(e=>({...e,letterToolActive:t}))}function Bw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function Ww(t){Wt.update(e=>({...e,checkConflicts:t}))}function zw(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function Yw(t){Wt.update(e=>({...e,hideFog:t}))}function jw(t){Wt.update(e=>({...e,showSolution:t}))}const bg=encodeURIComponent("4.3.5");let ur={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const mo=[];let Yc;function Ki(){if(!Yc){const e=`importScripts(${JSON.stringify(ur.workerURL)});`;Yc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Yc);t.postMessage({wasmURL:ur.wasmURL?ur.wasmURL.toString():new URL(`./minizinc.wasm?version=${bg}`,ur.workerURL).toString(),dataURL:ur.dataURL?ur.dataURL.toString():new URL(`./minizinc.data?version=${bg}`,ur.workerURL).toString()}),mo.push({worker:t,runCount:0})}function Ch(){for(;mo.length<ur.numWorkers;)Ki()}async function Vw(t){if(ur={...ur,...t},mo.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Ch(),await Promise.race(mo.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Du{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Du;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Ch();const o=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:s,runCount:c}=mo.pop();return s.postMessage({jsonStream:!0,files:a,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],o.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?mo.push({worker:a,runCount:s}):(a.terminate(),Ki()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],o.options),c=[];let u=null;a.onmessage=f=>{switch(f.data.type){case"error":c.push(f.data);break;case"interface":u=f.data;break;case"exit":s<10?mo.push({worker:a,runCount:s}):(a.terminate(),Ki()),f.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const a=["-c","--fzn",o],{worker:s}=this._run(a,n.options,[o]);Ki();let c={},u=!1,f=null;return s.onmessage=h=>{if(c[h.data.type])for(const g of c[h.data.type])g(h.data);switch(h.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":f||(f=h.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const h of c.exit)h({type:"exit",code:null});c={}}},on(h,g){c[h]?c[h].add(g):c[h]=new Set([g])},off(h,g){c[h]&&c[h].delete(g)},then(h,g){const v=m=>{if(m.code===0)h(m.outputFiles[o]);else{const E=f?{message:f.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);Ki();let a=null,s={},c=!1,u=null,f={},h="UNKNOWN";return o.onmessage=g=>{if(s[g.data.type])for(const v of s[g.data.type])v(g.data);switch(g.data.type){case"exit":o.terminate(),c=!0,s={};break;case"error":a||(a=g.data);break;case"statistics":f={...f,...g.data.statistics};break;case"solution":u=g.data,h="SATISFIED";break;case"status":h=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),s.exit)for(const g of s.exit)g({type:"exit",code:null});s={}}},on(g,v){s[g]?s[g].add(v):s[g]=new Set([v])},off(g,v){s[g]&&s[g].delete(v)},then(g,v){const m=E=>{if(E.code===0)g({status:h,solution:u,statistics:f});else{const I=a?{message:a.message,...E}:E;if(!v)throw I;v(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var si=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(si||{}),Ru=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Ru||{}),Ih=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Ih||{}),bh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(bh||{}),wh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(wh||{}),Oh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(Oh||{}),Bs=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t))(Bs||{}),ku=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(ku||{}),Gu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t))(Gu||{}),Mu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.MAZE_WALL="Maze Wall",t.ONE_WAY_DOOR="One Way Door",t))(Mu||{}),$u=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))($u||{}),Fu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Fu||{}),Uu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(Uu||{}),Hu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Hu||{}),Pu=(t=>(t.CLONE_REGION="Clone Region",t))(Pu||{}),Bu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Bu||{}),Wu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Wu||{}),zu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(zu||{}),Yu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Yu||{}),ju=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(ju||{}),yh=(t=>(t.PEN_TOOL="Pen Tool",t))(yh||{});const Vu={...Ih,...bh,...wh,...Oh},Lh={...Bs,...ku,...Gu,...Mu,...$u,...Fu,...Uu,...Hu,...Pu,...Bu,...Wu,...zu,...Yu},d={...Ru,...Vu,...Lh,...ju,...yh};var R=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(R||{});function qw(t){return Object.values(Vu).includes(t)}function Xw(t){return Object.values(Lh).includes(t)}function qu(t){return Object.values(ku).includes(t)||t===d.COSMETIC_CELL_ARROW}function Xu(t){return Object.values(Gu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function Kw(t){return Object.values(Bs).includes(t)||qu(t)||Xu(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function Ku(t){return Object.values(Mu).includes(t)||t===d.COSMETIC_EDGE}function Ah(t){return Object.values($u).includes(t)||t===d.COSMETIC_CORNER}function Zu(t){return Object.values(Fu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Qu(t){return Object.values(Uu).includes(t)||t===d.COSMETIC_ARROW}function Ju(t){return Object.values(Hu).includes(t)||t===d.COSMETIC_CAGE}function Sh(t){return Object.values(zu).includes(t)}function xh(t){return Object.values(Pu).includes(t)}function la(t){const e=Object.values(Bu),n=Object.values(Wu);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function Zw(t){return Object.values(Yu).includes(t)}function Qw(t){return Object.values(ju).includes(t)}function ed(t){return Object.values(Ru).includes(t)}const Jw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],eO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Nh(t){for(const e of Object.values(d))if(e===t)return e}function Th(t,e){return Object.values(e).includes(t)}class ni extends Map{constructor(){super()}setConstraint(e,n){return qw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new ni;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new ni;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Nh(r);a!==void 0&&Th(a,Vu)&&typeof o=="boolean"&&o&&n.setConstraint(a,o)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function Dh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function qe(t,e){return t.r===e.r&&t.c===e.c}function tO(t,e){return{r:t.r+e.r,c:t.c+e.c}}function nO(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ws(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!qe(t,e)}function rO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function As(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function qt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function zs(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function oO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Rh(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function iO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const aO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function td(t){t=t%8;const e=aO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const sO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function Ys(t){const e=sO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function kh(t,e){const n=Ys(e);return tO(t,n)}function Gh(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Mh(t,e,n=!1){const r=t.some(a=>qe(a,e)),o=n?t.some(a=>Ws(a,e)):t.some(a=>rO(a,e));if(!r&&o){const a=[...t,e];return As(a),a}return t}function ms(t){return`R${t.r+1}C${t.c+1}`}function nd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zi={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var lO=Zi.exports,wg;function cO(){return wg||(wg=1,function(t,e){(function(){var n,r="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",g=1,v=2,m=4,E=1,I=2,w=1,b=2,L=4,T=8,k=16,G=32,P=64,z=128,X=256,te=512,de=30,ee="...",le=800,Ie=16,me=1,Ee=2,xe=3,st=1/0,Se=9007199254740991,we=17976931348623157e292,_t=NaN,ut=4294967295,Un=ut-1,Lt=ut>>>1,Ln=[["ary",z],["bind",w],["bindKey",b],["curry",T],["curryRight",k],["flip",te],["partial",G],["partialRight",P],["rearg",X]],Zt="[object Arguments]",pr="[object Array]",Jn="[object AsyncFunction]",mr="[object Boolean]",ar="[object Date]",yi="[object DOMException]",Mr="[object Error]",ko="[object Function]",$e="[object GeneratorFunction]",be="[object Map]",Ge="[object Number]",Me="[object Null]",xt="[object Object]",Fd="[object Promise]",ap="[object Proxy]",Li="[object RegExp]",er="[object Set]",Ai="[object String]",xa="[object Symbol]",sp="[object Undefined]",Si="[object WeakMap]",lp="[object WeakSet]",xi="[object ArrayBuffer]",Go="[object DataView]",El="[object Float32Array]",Cl="[object Float64Array]",Il="[object Int8Array]",bl="[object Int16Array]",wl="[object Int32Array]",Ol="[object Uint8Array]",yl="[object Uint8ClampedArray]",Ll="[object Uint16Array]",Al="[object Uint32Array]",cp=/\b__p \+= '';/g,up=/\b(__p \+=) '' \+/g,dp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ud=/&(?:amp|lt|gt|quot|#39);/g,Hd=/[&<>"']/g,_p=RegExp(Ud.source),fp=RegExp(Hd.source),gp=/<%-([\s\S]+?)%>/g,hp=/<%([\s\S]+?)%>/g,Pd=/<%=([\s\S]+?)%>/g,vp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pp=/^\w*$/,mp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sl=/[\\^$.*+?()[\]{}|]/g,Ep=RegExp(Sl.source),xl=/^\s+/,Cp=/\s/,Ip=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,bp=/\{\n\/\* \[wrapped with (.+)\] \*/,wp=/,? & /,Op=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,yp=/[()=,{}\[\]\/\s]/,Lp=/\\(\\)?/g,Ap=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Bd=/\w*$/,Sp=/^[-+]0x[0-9a-f]+$/i,xp=/^0b[01]+$/i,Np=/^\[object .+?Constructor\]$/,Tp=/^0o[0-7]+$/i,Dp=/^(?:0|[1-9]\d*)$/,Rp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Na=/($^)/,kp=/['\n\r\u2028\u2029\\]/g,Ta="\\ud800-\\udfff",Gp="\\u0300-\\u036f",Mp="\\ufe20-\\ufe2f",$p="\\u20d0-\\u20ff",Wd=Gp+Mp+$p,zd="\\u2700-\\u27bf",Yd="a-z\\xdf-\\xf6\\xf8-\\xff",Fp="\\xac\\xb1\\xd7\\xf7",Up="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Hp="\\u2000-\\u206f",Pp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",jd="A-Z\\xc0-\\xd6\\xd8-\\xde",Vd="\\ufe0e\\ufe0f",qd=Fp+Up+Hp+Pp,Nl="['’]",Bp="["+Ta+"]",Xd="["+qd+"]",Da="["+Wd+"]",Kd="\\d+",Wp="["+zd+"]",Zd="["+Yd+"]",Qd="[^"+Ta+qd+Kd+zd+Yd+jd+"]",Tl="\\ud83c[\\udffb-\\udfff]",zp="(?:"+Da+"|"+Tl+")",Jd="[^"+Ta+"]",Dl="(?:\\ud83c[\\udde6-\\uddff]){2}",Rl="[\\ud800-\\udbff][\\udc00-\\udfff]",Mo="["+jd+"]",e_="\\u200d",t_="(?:"+Zd+"|"+Qd+")",Yp="(?:"+Mo+"|"+Qd+")",n_="(?:"+Nl+"(?:d|ll|m|re|s|t|ve))?",r_="(?:"+Nl+"(?:D|LL|M|RE|S|T|VE))?",o_=zp+"?",i_="["+Vd+"]?",jp="(?:"+e_+"(?:"+[Jd,Dl,Rl].join("|")+")"+i_+o_+")*",Vp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",qp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",a_=i_+o_+jp,Xp="(?:"+[Wp,Dl,Rl].join("|")+")"+a_,Kp="(?:"+[Jd+Da+"?",Da,Dl,Rl,Bp].join("|")+")",Zp=RegExp(Nl,"g"),Qp=RegExp(Da,"g"),kl=RegExp(Tl+"(?="+Tl+")|"+Kp+a_,"g"),Jp=RegExp([Mo+"?"+Zd+"+"+n_+"(?="+[Xd,Mo,"$"].join("|")+")",Yp+"+"+r_+"(?="+[Xd,Mo+t_,"$"].join("|")+")",Mo+"?"+t_+"+"+n_,Mo+"+"+r_,qp,Vp,Kd,Xp].join("|"),"g"),em=RegExp("["+e_+Ta+Wd+Vd+"]"),tm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rm=-1,At={};At[El]=At[Cl]=At[Il]=At[bl]=At[wl]=At[Ol]=At[yl]=At[Ll]=At[Al]=!0,At[Zt]=At[pr]=At[xi]=At[mr]=At[Go]=At[ar]=At[Mr]=At[ko]=At[be]=At[Ge]=At[xt]=At[Li]=At[er]=At[Ai]=At[Si]=!1;var Ot={};Ot[Zt]=Ot[pr]=Ot[xi]=Ot[Go]=Ot[mr]=Ot[ar]=Ot[El]=Ot[Cl]=Ot[Il]=Ot[bl]=Ot[wl]=Ot[be]=Ot[Ge]=Ot[xt]=Ot[Li]=Ot[er]=Ot[Ai]=Ot[xa]=Ot[Ol]=Ot[yl]=Ot[Ll]=Ot[Al]=!0,Ot[Mr]=Ot[ko]=Ot[Si]=!1;var om={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},im={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},am={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lm=parseFloat,cm=parseInt,s_=typeof Es=="object"&&Es&&Es.Object===Object&&Es,um=typeof self=="object"&&self&&self.Object===Object&&self,Yt=s_||um||Function("return this")(),Gl=e&&!e.nodeType&&e,ao=Gl&&!0&&t&&!t.nodeType&&t,l_=ao&&ao.exports===Gl,Ml=l_&&s_.process,Hn=function(){try{var j=ao&&ao.require&&ao.require("util").types;return j||Ml&&Ml.binding&&Ml.binding("util")}catch{}}(),c_=Hn&&Hn.isArrayBuffer,u_=Hn&&Hn.isDate,d_=Hn&&Hn.isMap,__=Hn&&Hn.isRegExp,f_=Hn&&Hn.isSet,g_=Hn&&Hn.isTypedArray;function An(j,J,K){switch(K.length){case 0:return j.call(J);case 1:return j.call(J,K[0]);case 2:return j.call(J,K[0],K[1]);case 3:return j.call(J,K[0],K[1],K[2])}return j.apply(J,K)}function dm(j,J,K,ye){for(var Ve=-1,ft=j==null?0:j.length;++Ve<ft;){var Ut=j[Ve];J(ye,Ut,K(Ut),j)}return ye}function Pn(j,J){for(var K=-1,ye=j==null?0:j.length;++K<ye&&J(j[K],K,j)!==!1;);return j}function _m(j,J){for(var K=j==null?0:j.length;K--&&J(j[K],K,j)!==!1;);return j}function h_(j,J){for(var K=-1,ye=j==null?0:j.length;++K<ye;)if(!J(j[K],K,j))return!1;return!0}function $r(j,J){for(var K=-1,ye=j==null?0:j.length,Ve=0,ft=[];++K<ye;){var Ut=j[K];J(Ut,K,j)&&(ft[Ve++]=Ut)}return ft}function Ra(j,J){var K=j==null?0:j.length;return!!K&&$o(j,J,0)>-1}function $l(j,J,K){for(var ye=-1,Ve=j==null?0:j.length;++ye<Ve;)if(K(J,j[ye]))return!0;return!1}function St(j,J){for(var K=-1,ye=j==null?0:j.length,Ve=Array(ye);++K<ye;)Ve[K]=J(j[K],K,j);return Ve}function Fr(j,J){for(var K=-1,ye=J.length,Ve=j.length;++K<ye;)j[Ve+K]=J[K];return j}function Fl(j,J,K,ye){var Ve=-1,ft=j==null?0:j.length;for(ye&&ft&&(K=j[++Ve]);++Ve<ft;)K=J(K,j[Ve],Ve,j);return K}function fm(j,J,K,ye){var Ve=j==null?0:j.length;for(ye&&Ve&&(K=j[--Ve]);Ve--;)K=J(K,j[Ve],Ve,j);return K}function Ul(j,J){for(var K=-1,ye=j==null?0:j.length;++K<ye;)if(J(j[K],K,j))return!0;return!1}var gm=Hl("length");function hm(j){return j.split("")}function vm(j){return j.match(Op)||[]}function v_(j,J,K){var ye;return K(j,function(Ve,ft,Ut){if(J(Ve,ft,Ut))return ye=ft,!1}),ye}function ka(j,J,K,ye){for(var Ve=j.length,ft=K+(ye?1:-1);ye?ft--:++ft<Ve;)if(J(j[ft],ft,j))return ft;return-1}function $o(j,J,K){return J===J?Sm(j,J,K):ka(j,p_,K)}function pm(j,J,K,ye){for(var Ve=K-1,ft=j.length;++Ve<ft;)if(ye(j[Ve],J))return Ve;return-1}function p_(j){return j!==j}function m_(j,J){var K=j==null?0:j.length;return K?Bl(j,J)/K:_t}function Hl(j){return function(J){return J==null?n:J[j]}}function Pl(j){return function(J){return j==null?n:j[J]}}function E_(j,J,K,ye,Ve){return Ve(j,function(ft,Ut,bt){K=ye?(ye=!1,ft):J(K,ft,Ut,bt)}),K}function mm(j,J){var K=j.length;for(j.sort(J);K--;)j[K]=j[K].value;return j}function Bl(j,J){for(var K,ye=-1,Ve=j.length;++ye<Ve;){var ft=J(j[ye]);ft!==n&&(K=K===n?ft:K+ft)}return K}function Wl(j,J){for(var K=-1,ye=Array(j);++K<j;)ye[K]=J(K);return ye}function Em(j,J){return St(J,function(K){return[K,j[K]]})}function C_(j){return j&&j.slice(0,O_(j)+1).replace(xl,"")}function Sn(j){return function(J){return j(J)}}function zl(j,J){return St(J,function(K){return j[K]})}function Ni(j,J){return j.has(J)}function I_(j,J){for(var K=-1,ye=j.length;++K<ye&&$o(J,j[K],0)>-1;);return K}function b_(j,J){for(var K=j.length;K--&&$o(J,j[K],0)>-1;);return K}function Cm(j,J){for(var K=j.length,ye=0;K--;)j[K]===J&&++ye;return ye}var Im=Pl(om),bm=Pl(im);function wm(j){return"\\"+sm[j]}function Om(j,J){return j==null?n:j[J]}function Fo(j){return em.test(j)}function ym(j){return tm.test(j)}function Lm(j){for(var J,K=[];!(J=j.next()).done;)K.push(J.value);return K}function Yl(j){var J=-1,K=Array(j.size);return j.forEach(function(ye,Ve){K[++J]=[Ve,ye]}),K}function w_(j,J){return function(K){return j(J(K))}}function Ur(j,J){for(var K=-1,ye=j.length,Ve=0,ft=[];++K<ye;){var Ut=j[K];(Ut===J||Ut===h)&&(j[K]=h,ft[Ve++]=K)}return ft}function Ga(j){var J=-1,K=Array(j.size);return j.forEach(function(ye){K[++J]=ye}),K}function Am(j){var J=-1,K=Array(j.size);return j.forEach(function(ye){K[++J]=[ye,ye]}),K}function Sm(j,J,K){for(var ye=K-1,Ve=j.length;++ye<Ve;)if(j[ye]===J)return ye;return-1}function xm(j,J,K){for(var ye=K+1;ye--;)if(j[ye]===J)return ye;return ye}function Uo(j){return Fo(j)?Tm(j):gm(j)}function tr(j){return Fo(j)?Dm(j):hm(j)}function O_(j){for(var J=j.length;J--&&Cp.test(j.charAt(J)););return J}var Nm=Pl(am);function Tm(j){for(var J=kl.lastIndex=0;kl.test(j);)++J;return J}function Dm(j){return j.match(kl)||[]}function Rm(j){return j.match(Jp)||[]}var km=function j(J){J=J==null?Yt:Ho.defaults(Yt.Object(),J,Ho.pick(Yt,nm));var K=J.Array,ye=J.Date,Ve=J.Error,ft=J.Function,Ut=J.Math,bt=J.Object,jl=J.RegExp,Gm=J.String,Bn=J.TypeError,Ma=K.prototype,Mm=ft.prototype,Po=bt.prototype,$a=J["__core-js_shared__"],Fa=Mm.toString,mt=Po.hasOwnProperty,$m=0,y_=function(){var i=/[^.]+$/.exec($a&&$a.keys&&$a.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Ua=Po.toString,Fm=Fa.call(bt),Um=Yt._,Hm=jl("^"+Fa.call(mt).replace(Sl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ha=l_?J.Buffer:n,Hr=J.Symbol,Pa=J.Uint8Array,L_=Ha?Ha.allocUnsafe:n,Ba=w_(bt.getPrototypeOf,bt),A_=bt.create,S_=Po.propertyIsEnumerable,Wa=Ma.splice,x_=Hr?Hr.isConcatSpreadable:n,Ti=Hr?Hr.iterator:n,so=Hr?Hr.toStringTag:n,za=function(){try{var i=fo(bt,"defineProperty");return i({},"",{}),i}catch{}}(),Pm=J.clearTimeout!==Yt.clearTimeout&&J.clearTimeout,Bm=ye&&ye.now!==Yt.Date.now&&ye.now,Wm=J.setTimeout!==Yt.setTimeout&&J.setTimeout,Ya=Ut.ceil,ja=Ut.floor,Vl=bt.getOwnPropertySymbols,zm=Ha?Ha.isBuffer:n,N_=J.isFinite,Ym=Ma.join,jm=w_(bt.keys,bt),Ht=Ut.max,Qt=Ut.min,Vm=ye.now,qm=J.parseInt,T_=Ut.random,Xm=Ma.reverse,ql=fo(J,"DataView"),Di=fo(J,"Map"),Xl=fo(J,"Promise"),Bo=fo(J,"Set"),Ri=fo(J,"WeakMap"),ki=fo(bt,"create"),Va=Ri&&new Ri,Wo={},Km=go(ql),Zm=go(Di),Qm=go(Xl),Jm=go(Bo),e1=go(Ri),qa=Hr?Hr.prototype:n,Gi=qa?qa.valueOf:n,D_=qa?qa.toString:n;function y(i){if(kt(i)&&!Ke(i)&&!(i instanceof it)){if(i instanceof Wn)return i;if(mt.call(i,"__wrapped__"))return kf(i)}return new Wn(i)}var zo=function(){function i(){}return function(l){if(!Nt(l))return{};if(A_)return A_(l);i.prototype=l;var _=new i;return i.prototype=n,_}}();function Xa(){}function Wn(i,l){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:gp,evaluate:hp,interpolate:Pd,variable:"",imports:{_:y}},y.prototype=Xa.prototype,y.prototype.constructor=y,Wn.prototype=zo(Xa.prototype),Wn.prototype.constructor=Wn;function it(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ut,this.__views__=[]}function t1(){var i=new it(this.__wrapped__);return i.__actions__=mn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=mn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=mn(this.__views__),i}function n1(){if(this.__filtered__){var i=new it(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function r1(){var i=this.__wrapped__.value(),l=this.__dir__,_=Ke(i),C=l<0,O=_?i.length:0,A=h0(0,O,this.__views__),M=A.start,B=A.end,V=B-M,ae=C?B:M-1,se=this.__iteratees__,_e=se.length,Ce=0,Ne=Qt(V,this.__takeCount__);if(!_||!C&&O==V&&Ne==V)return nf(i,this.__actions__);var He=[];e:for(;V--&&Ce<Ne;){ae+=l;for(var et=-1,Pe=i[ae];++et<_e;){var ot=se[et],lt=ot.iteratee,Tn=ot.type,ln=lt(Pe);if(Tn==Ee)Pe=ln;else if(!ln){if(Tn==me)continue e;break e}}He[Ce++]=Pe}return He}it.prototype=zo(Xa.prototype),it.prototype.constructor=it;function lo(i){var l=-1,_=i==null?0:i.length;for(this.clear();++l<_;){var C=i[l];this.set(C[0],C[1])}}function o1(){this.__data__=ki?ki(null):{},this.size=0}function i1(i){var l=this.has(i)&&delete this.__data__[i];return this.size-=l?1:0,l}function a1(i){var l=this.__data__;if(ki){var _=l[i];return _===u?n:_}return mt.call(l,i)?l[i]:n}function s1(i){var l=this.__data__;return ki?l[i]!==n:mt.call(l,i)}function l1(i,l){var _=this.__data__;return this.size+=this.has(i)?0:1,_[i]=ki&&l===n?u:l,this}lo.prototype.clear=o1,lo.prototype.delete=i1,lo.prototype.get=a1,lo.prototype.has=s1,lo.prototype.set=l1;function Er(i){var l=-1,_=i==null?0:i.length;for(this.clear();++l<_;){var C=i[l];this.set(C[0],C[1])}}function c1(){this.__data__=[],this.size=0}function u1(i){var l=this.__data__,_=Ka(l,i);if(_<0)return!1;var C=l.length-1;return _==C?l.pop():Wa.call(l,_,1),--this.size,!0}function d1(i){var l=this.__data__,_=Ka(l,i);return _<0?n:l[_][1]}function _1(i){return Ka(this.__data__,i)>-1}function f1(i,l){var _=this.__data__,C=Ka(_,i);return C<0?(++this.size,_.push([i,l])):_[C][1]=l,this}Er.prototype.clear=c1,Er.prototype.delete=u1,Er.prototype.get=d1,Er.prototype.has=_1,Er.prototype.set=f1;function Cr(i){var l=-1,_=i==null?0:i.length;for(this.clear();++l<_;){var C=i[l];this.set(C[0],C[1])}}function g1(){this.size=0,this.__data__={hash:new lo,map:new(Di||Er),string:new lo}}function h1(i){var l=ls(this,i).delete(i);return this.size-=l?1:0,l}function v1(i){return ls(this,i).get(i)}function p1(i){return ls(this,i).has(i)}function m1(i,l){var _=ls(this,i),C=_.size;return _.set(i,l),this.size+=_.size==C?0:1,this}Cr.prototype.clear=g1,Cr.prototype.delete=h1,Cr.prototype.get=v1,Cr.prototype.has=p1,Cr.prototype.set=m1;function co(i){var l=-1,_=i==null?0:i.length;for(this.__data__=new Cr;++l<_;)this.add(i[l])}function E1(i){return this.__data__.set(i,u),this}function C1(i){return this.__data__.has(i)}co.prototype.add=co.prototype.push=E1,co.prototype.has=C1;function nr(i){var l=this.__data__=new Er(i);this.size=l.size}function I1(){this.__data__=new Er,this.size=0}function b1(i){var l=this.__data__,_=l.delete(i);return this.size=l.size,_}function w1(i){return this.__data__.get(i)}function O1(i){return this.__data__.has(i)}function y1(i,l){var _=this.__data__;if(_ instanceof Er){var C=_.__data__;if(!Di||C.length<o-1)return C.push([i,l]),this.size=++_.size,this;_=this.__data__=new Cr(C)}return _.set(i,l),this.size=_.size,this}nr.prototype.clear=I1,nr.prototype.delete=b1,nr.prototype.get=w1,nr.prototype.has=O1,nr.prototype.set=y1;function R_(i,l){var _=Ke(i),C=!_&&ho(i),O=!_&&!C&&Yr(i),A=!_&&!C&&!O&&qo(i),M=_||C||O||A,B=M?Wl(i.length,Gm):[],V=B.length;for(var ae in i)(l||mt.call(i,ae))&&!(M&&(ae=="length"||O&&(ae=="offset"||ae=="parent")||A&&(ae=="buffer"||ae=="byteLength"||ae=="byteOffset")||Or(ae,V)))&&B.push(ae);return B}function k_(i){var l=i.length;return l?i[ac(0,l-1)]:n}function L1(i,l){return cs(mn(i),uo(l,0,i.length))}function A1(i){return cs(mn(i))}function Kl(i,l,_){(_!==n&&!rr(i[l],_)||_===n&&!(l in i))&&Ir(i,l,_)}function Mi(i,l,_){var C=i[l];(!(mt.call(i,l)&&rr(C,_))||_===n&&!(l in i))&&Ir(i,l,_)}function Ka(i,l){for(var _=i.length;_--;)if(rr(i[_][0],l))return _;return-1}function S1(i,l,_,C){return Pr(i,function(O,A,M){l(C,O,_(O),M)}),C}function G_(i,l){return i&&lr(l,Bt(l),i)}function x1(i,l){return i&&lr(l,Cn(l),i)}function Ir(i,l,_){l=="__proto__"&&za?za(i,l,{configurable:!0,enumerable:!0,value:_,writable:!0}):i[l]=_}function Zl(i,l){for(var _=-1,C=l.length,O=K(C),A=i==null;++_<C;)O[_]=A?n:Tc(i,l[_]);return O}function uo(i,l,_){return i===i&&(_!==n&&(i=i<=_?i:_),l!==n&&(i=i>=l?i:l)),i}function zn(i,l,_,C,O,A){var M,B=l&g,V=l&v,ae=l&m;if(_&&(M=O?_(i,C,O,A):_(i)),M!==n)return M;if(!Nt(i))return i;var se=Ke(i);if(se){if(M=p0(i),!B)return mn(i,M)}else{var _e=Jt(i),Ce=_e==ko||_e==$e;if(Yr(i))return af(i,B);if(_e==xt||_e==Zt||Ce&&!O){if(M=V||Ce?{}:yf(i),!B)return V?a0(i,x1(M,i)):i0(i,G_(M,i))}else{if(!Ot[_e])return O?i:{};M=m0(i,_e,B)}}A||(A=new nr);var Ne=A.get(i);if(Ne)return Ne;A.set(i,M),eg(i)?i.forEach(function(Pe){M.add(zn(Pe,l,_,Pe,i,A))}):Qf(i)&&i.forEach(function(Pe,ot){M.set(ot,zn(Pe,l,_,ot,i,A))});var He=ae?V?pc:vc:V?Cn:Bt,et=se?n:He(i);return Pn(et||i,function(Pe,ot){et&&(ot=Pe,Pe=i[ot]),Mi(M,ot,zn(Pe,l,_,ot,i,A))}),M}function N1(i){var l=Bt(i);return function(_){return M_(_,i,l)}}function M_(i,l,_){var C=_.length;if(i==null)return!C;for(i=bt(i);C--;){var O=_[C],A=l[O],M=i[O];if(M===n&&!(O in i)||!A(M))return!1}return!0}function $_(i,l,_){if(typeof i!="function")throw new Bn(s);return Wi(function(){i.apply(n,_)},l)}function $i(i,l,_,C){var O=-1,A=Ra,M=!0,B=i.length,V=[],ae=l.length;if(!B)return V;_&&(l=St(l,Sn(_))),C?(A=$l,M=!1):l.length>=o&&(A=Ni,M=!1,l=new co(l));e:for(;++O<B;){var se=i[O],_e=_==null?se:_(se);if(se=C||se!==0?se:0,M&&_e===_e){for(var Ce=ae;Ce--;)if(l[Ce]===_e)continue e;V.push(se)}else A(l,_e,C)||V.push(se)}return V}var Pr=df(sr),F_=df(Jl,!0);function T1(i,l){var _=!0;return Pr(i,function(C,O,A){return _=!!l(C,O,A),_}),_}function Za(i,l,_){for(var C=-1,O=i.length;++C<O;){var A=i[C],M=l(A);if(M!=null&&(B===n?M===M&&!Nn(M):_(M,B)))var B=M,V=A}return V}function D1(i,l,_,C){var O=i.length;for(_=Je(_),_<0&&(_=-_>O?0:O+_),C=C===n||C>O?O:Je(C),C<0&&(C+=O),C=_>C?0:ng(C);_<C;)i[_++]=l;return i}function U_(i,l){var _=[];return Pr(i,function(C,O,A){l(C,O,A)&&_.push(C)}),_}function jt(i,l,_,C,O){var A=-1,M=i.length;for(_||(_=C0),O||(O=[]);++A<M;){var B=i[A];l>0&&_(B)?l>1?jt(B,l-1,_,C,O):Fr(O,B):C||(O[O.length]=B)}return O}var Ql=_f(),H_=_f(!0);function sr(i,l){return i&&Ql(i,l,Bt)}function Jl(i,l){return i&&H_(i,l,Bt)}function Qa(i,l){return $r(l,function(_){return yr(i[_])})}function _o(i,l){l=Wr(l,i);for(var _=0,C=l.length;i!=null&&_<C;)i=i[cr(l[_++])];return _&&_==C?i:n}function P_(i,l,_){var C=l(i);return Ke(i)?C:Fr(C,_(i))}function an(i){return i==null?i===n?sp:Me:so&&so in bt(i)?g0(i):A0(i)}function ec(i,l){return i>l}function R1(i,l){return i!=null&&mt.call(i,l)}function k1(i,l){return i!=null&&l in bt(i)}function G1(i,l,_){return i>=Qt(l,_)&&i<Ht(l,_)}function tc(i,l,_){for(var C=_?$l:Ra,O=i[0].length,A=i.length,M=A,B=K(A),V=1/0,ae=[];M--;){var se=i[M];M&&l&&(se=St(se,Sn(l))),V=Qt(se.length,V),B[M]=!_&&(l||O>=120&&se.length>=120)?new co(M&&se):n}se=i[0];var _e=-1,Ce=B[0];e:for(;++_e<O&&ae.length<V;){var Ne=se[_e],He=l?l(Ne):Ne;if(Ne=_||Ne!==0?Ne:0,!(Ce?Ni(Ce,He):C(ae,He,_))){for(M=A;--M;){var et=B[M];if(!(et?Ni(et,He):C(i[M],He,_)))continue e}Ce&&Ce.push(He),ae.push(Ne)}}return ae}function M1(i,l,_,C){return sr(i,function(O,A,M){l(C,_(O),A,M)}),C}function Fi(i,l,_){l=Wr(l,i),i=xf(i,l);var C=i==null?i:i[cr(jn(l))];return C==null?n:An(C,i,_)}function B_(i){return kt(i)&&an(i)==Zt}function $1(i){return kt(i)&&an(i)==xi}function F1(i){return kt(i)&&an(i)==ar}function Ui(i,l,_,C,O){return i===l?!0:i==null||l==null||!kt(i)&&!kt(l)?i!==i&&l!==l:U1(i,l,_,C,Ui,O)}function U1(i,l,_,C,O,A){var M=Ke(i),B=Ke(l),V=M?pr:Jt(i),ae=B?pr:Jt(l);V=V==Zt?xt:V,ae=ae==Zt?xt:ae;var se=V==xt,_e=ae==xt,Ce=V==ae;if(Ce&&Yr(i)){if(!Yr(l))return!1;M=!0,se=!1}if(Ce&&!se)return A||(A=new nr),M||qo(i)?bf(i,l,_,C,O,A):_0(i,l,V,_,C,O,A);if(!(_&E)){var Ne=se&&mt.call(i,"__wrapped__"),He=_e&&mt.call(l,"__wrapped__");if(Ne||He){var et=Ne?i.value():i,Pe=He?l.value():l;return A||(A=new nr),O(et,Pe,_,C,A)}}return Ce?(A||(A=new nr),f0(i,l,_,C,O,A)):!1}function H1(i){return kt(i)&&Jt(i)==be}function nc(i,l,_,C){var O=_.length,A=O,M=!C;if(i==null)return!A;for(i=bt(i);O--;){var B=_[O];if(M&&B[2]?B[1]!==i[B[0]]:!(B[0]in i))return!1}for(;++O<A;){B=_[O];var V=B[0],ae=i[V],se=B[1];if(M&&B[2]){if(ae===n&&!(V in i))return!1}else{var _e=new nr;if(C)var Ce=C(ae,se,V,i,l,_e);if(!(Ce===n?Ui(se,ae,E|I,C,_e):Ce))return!1}}return!0}function W_(i){if(!Nt(i)||b0(i))return!1;var l=yr(i)?Hm:Np;return l.test(go(i))}function P1(i){return kt(i)&&an(i)==Li}function B1(i){return kt(i)&&Jt(i)==er}function W1(i){return kt(i)&&hs(i.length)&&!!At[an(i)]}function z_(i){return typeof i=="function"?i:i==null?In:typeof i=="object"?Ke(i)?V_(i[0],i[1]):j_(i):fg(i)}function rc(i){if(!Bi(i))return jm(i);var l=[];for(var _ in bt(i))mt.call(i,_)&&_!="constructor"&&l.push(_);return l}function z1(i){if(!Nt(i))return L0(i);var l=Bi(i),_=[];for(var C in i)C=="constructor"&&(l||!mt.call(i,C))||_.push(C);return _}function oc(i,l){return i<l}function Y_(i,l){var _=-1,C=En(i)?K(i.length):[];return Pr(i,function(O,A,M){C[++_]=l(O,A,M)}),C}function j_(i){var l=Ec(i);return l.length==1&&l[0][2]?Af(l[0][0],l[0][1]):function(_){return _===i||nc(_,i,l)}}function V_(i,l){return Ic(i)&&Lf(l)?Af(cr(i),l):function(_){var C=Tc(_,i);return C===n&&C===l?Dc(_,i):Ui(l,C,E|I)}}function Ja(i,l,_,C,O){i!==l&&Ql(l,function(A,M){if(O||(O=new nr),Nt(A))Y1(i,l,M,_,Ja,C,O);else{var B=C?C(wc(i,M),A,M+"",i,l,O):n;B===n&&(B=A),Kl(i,M,B)}},Cn)}function Y1(i,l,_,C,O,A,M){var B=wc(i,_),V=wc(l,_),ae=M.get(V);if(ae){Kl(i,_,ae);return}var se=A?A(B,V,_+"",i,l,M):n,_e=se===n;if(_e){var Ce=Ke(V),Ne=!Ce&&Yr(V),He=!Ce&&!Ne&&qo(V);se=V,Ce||Ne||He?Ke(B)?se=B:Gt(B)?se=mn(B):Ne?(_e=!1,se=af(V,!0)):He?(_e=!1,se=sf(V,!0)):se=[]:zi(V)||ho(V)?(se=B,ho(B)?se=rg(B):(!Nt(B)||yr(B))&&(se=yf(V))):_e=!1}_e&&(M.set(V,se),O(se,V,C,A,M),M.delete(V)),Kl(i,_,se)}function q_(i,l){var _=i.length;if(_)return l+=l<0?_:0,Or(l,_)?i[l]:n}function X_(i,l,_){l.length?l=St(l,function(A){return Ke(A)?function(M){return _o(M,A.length===1?A[0]:A)}:A}):l=[In];var C=-1;l=St(l,Sn(Fe()));var O=Y_(i,function(A,M,B){var V=St(l,function(ae){return ae(A)});return{criteria:V,index:++C,value:A}});return mm(O,function(A,M){return o0(A,M,_)})}function j1(i,l){return K_(i,l,function(_,C){return Dc(i,C)})}function K_(i,l,_){for(var C=-1,O=l.length,A={};++C<O;){var M=l[C],B=_o(i,M);_(B,M)&&Hi(A,Wr(M,i),B)}return A}function V1(i){return function(l){return _o(l,i)}}function ic(i,l,_,C){var O=C?pm:$o,A=-1,M=l.length,B=i;for(i===l&&(l=mn(l)),_&&(B=St(i,Sn(_)));++A<M;)for(var V=0,ae=l[A],se=_?_(ae):ae;(V=O(B,se,V,C))>-1;)B!==i&&Wa.call(B,V,1),Wa.call(i,V,1);return i}function Z_(i,l){for(var _=i?l.length:0,C=_-1;_--;){var O=l[_];if(_==C||O!==A){var A=O;Or(O)?Wa.call(i,O,1):cc(i,O)}}return i}function ac(i,l){return i+ja(T_()*(l-i+1))}function q1(i,l,_,C){for(var O=-1,A=Ht(Ya((l-i)/(_||1)),0),M=K(A);A--;)M[C?A:++O]=i,i+=_;return M}function sc(i,l){var _="";if(!i||l<1||l>Se)return _;do l%2&&(_+=i),l=ja(l/2),l&&(i+=i);while(l);return _}function tt(i,l){return Oc(Sf(i,l,In),i+"")}function X1(i){return k_(Xo(i))}function K1(i,l){var _=Xo(i);return cs(_,uo(l,0,_.length))}function Hi(i,l,_,C){if(!Nt(i))return i;l=Wr(l,i);for(var O=-1,A=l.length,M=A-1,B=i;B!=null&&++O<A;){var V=cr(l[O]),ae=_;if(V==="__proto__"||V==="constructor"||V==="prototype")return i;if(O!=M){var se=B[V];ae=C?C(se,V,B):n,ae===n&&(ae=Nt(se)?se:Or(l[O+1])?[]:{})}Mi(B,V,ae),B=B[V]}return i}var Q_=Va?function(i,l){return Va.set(i,l),i}:In,Z1=za?function(i,l){return za(i,"toString",{configurable:!0,enumerable:!1,value:kc(l),writable:!0})}:In;function Q1(i){return cs(Xo(i))}function Yn(i,l,_){var C=-1,O=i.length;l<0&&(l=-l>O?0:O+l),_=_>O?O:_,_<0&&(_+=O),O=l>_?0:_-l>>>0,l>>>=0;for(var A=K(O);++C<O;)A[C]=i[C+l];return A}function J1(i,l){var _;return Pr(i,function(C,O,A){return _=l(C,O,A),!_}),!!_}function es(i,l,_){var C=0,O=i==null?C:i.length;if(typeof l=="number"&&l===l&&O<=Lt){for(;C<O;){var A=C+O>>>1,M=i[A];M!==null&&!Nn(M)&&(_?M<=l:M<l)?C=A+1:O=A}return O}return lc(i,l,In,_)}function lc(i,l,_,C){var O=0,A=i==null?0:i.length;if(A===0)return 0;l=_(l);for(var M=l!==l,B=l===null,V=Nn(l),ae=l===n;O<A;){var se=ja((O+A)/2),_e=_(i[se]),Ce=_e!==n,Ne=_e===null,He=_e===_e,et=Nn(_e);if(M)var Pe=C||He;else ae?Pe=He&&(C||Ce):B?Pe=He&&Ce&&(C||!Ne):V?Pe=He&&Ce&&!Ne&&(C||!et):Ne||et?Pe=!1:Pe=C?_e<=l:_e<l;Pe?O=se+1:A=se}return Qt(A,Un)}function J_(i,l){for(var _=-1,C=i.length,O=0,A=[];++_<C;){var M=i[_],B=l?l(M):M;if(!_||!rr(B,V)){var V=B;A[O++]=M===0?0:M}}return A}function ef(i){return typeof i=="number"?i:Nn(i)?_t:+i}function xn(i){if(typeof i=="string")return i;if(Ke(i))return St(i,xn)+"";if(Nn(i))return D_?D_.call(i):"";var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function Br(i,l,_){var C=-1,O=Ra,A=i.length,M=!0,B=[],V=B;if(_)M=!1,O=$l;else if(A>=o){var ae=l?null:u0(i);if(ae)return Ga(ae);M=!1,O=Ni,V=new co}else V=l?[]:B;e:for(;++C<A;){var se=i[C],_e=l?l(se):se;if(se=_||se!==0?se:0,M&&_e===_e){for(var Ce=V.length;Ce--;)if(V[Ce]===_e)continue e;l&&V.push(_e),B.push(se)}else O(V,_e,_)||(V!==B&&V.push(_e),B.push(se))}return B}function cc(i,l){return l=Wr(l,i),i=xf(i,l),i==null||delete i[cr(jn(l))]}function tf(i,l,_,C){return Hi(i,l,_(_o(i,l)),C)}function ts(i,l,_,C){for(var O=i.length,A=C?O:-1;(C?A--:++A<O)&&l(i[A],A,i););return _?Yn(i,C?0:A,C?A+1:O):Yn(i,C?A+1:0,C?O:A)}function nf(i,l){var _=i;return _ instanceof it&&(_=_.value()),Fl(l,function(C,O){return O.func.apply(O.thisArg,Fr([C],O.args))},_)}function uc(i,l,_){var C=i.length;if(C<2)return C?Br(i[0]):[];for(var O=-1,A=K(C);++O<C;)for(var M=i[O],B=-1;++B<C;)B!=O&&(A[O]=$i(A[O]||M,i[B],l,_));return Br(jt(A,1),l,_)}function rf(i,l,_){for(var C=-1,O=i.length,A=l.length,M={};++C<O;){var B=C<A?l[C]:n;_(M,i[C],B)}return M}function dc(i){return Gt(i)?i:[]}function _c(i){return typeof i=="function"?i:In}function Wr(i,l){return Ke(i)?i:Ic(i,l)?[i]:Rf(vt(i))}var e0=tt;function zr(i,l,_){var C=i.length;return _=_===n?C:_,!l&&_>=C?i:Yn(i,l,_)}var of=Pm||function(i){return Yt.clearTimeout(i)};function af(i,l){if(l)return i.slice();var _=i.length,C=L_?L_(_):new i.constructor(_);return i.copy(C),C}function fc(i){var l=new i.constructor(i.byteLength);return new Pa(l).set(new Pa(i)),l}function t0(i,l){var _=l?fc(i.buffer):i.buffer;return new i.constructor(_,i.byteOffset,i.byteLength)}function n0(i){var l=new i.constructor(i.source,Bd.exec(i));return l.lastIndex=i.lastIndex,l}function r0(i){return Gi?bt(Gi.call(i)):{}}function sf(i,l){var _=l?fc(i.buffer):i.buffer;return new i.constructor(_,i.byteOffset,i.length)}function lf(i,l){if(i!==l){var _=i!==n,C=i===null,O=i===i,A=Nn(i),M=l!==n,B=l===null,V=l===l,ae=Nn(l);if(!B&&!ae&&!A&&i>l||A&&M&&V&&!B&&!ae||C&&M&&V||!_&&V||!O)return 1;if(!C&&!A&&!ae&&i<l||ae&&_&&O&&!C&&!A||B&&_&&O||!M&&O||!V)return-1}return 0}function o0(i,l,_){for(var C=-1,O=i.criteria,A=l.criteria,M=O.length,B=_.length;++C<M;){var V=lf(O[C],A[C]);if(V){if(C>=B)return V;var ae=_[C];return V*(ae=="desc"?-1:1)}}return i.index-l.index}function cf(i,l,_,C){for(var O=-1,A=i.length,M=_.length,B=-1,V=l.length,ae=Ht(A-M,0),se=K(V+ae),_e=!C;++B<V;)se[B]=l[B];for(;++O<M;)(_e||O<A)&&(se[_[O]]=i[O]);for(;ae--;)se[B++]=i[O++];return se}function uf(i,l,_,C){for(var O=-1,A=i.length,M=-1,B=_.length,V=-1,ae=l.length,se=Ht(A-B,0),_e=K(se+ae),Ce=!C;++O<se;)_e[O]=i[O];for(var Ne=O;++V<ae;)_e[Ne+V]=l[V];for(;++M<B;)(Ce||O<A)&&(_e[Ne+_[M]]=i[O++]);return _e}function mn(i,l){var _=-1,C=i.length;for(l||(l=K(C));++_<C;)l[_]=i[_];return l}function lr(i,l,_,C){var O=!_;_||(_={});for(var A=-1,M=l.length;++A<M;){var B=l[A],V=C?C(_[B],i[B],B,_,i):n;V===n&&(V=i[B]),O?Ir(_,B,V):Mi(_,B,V)}return _}function i0(i,l){return lr(i,Cc(i),l)}function a0(i,l){return lr(i,wf(i),l)}function ns(i,l){return function(_,C){var O=Ke(_)?dm:S1,A=l?l():{};return O(_,i,Fe(C,2),A)}}function Yo(i){return tt(function(l,_){var C=-1,O=_.length,A=O>1?_[O-1]:n,M=O>2?_[2]:n;for(A=i.length>3&&typeof A=="function"?(O--,A):n,M&&sn(_[0],_[1],M)&&(A=O<3?n:A,O=1),l=bt(l);++C<O;){var B=_[C];B&&i(l,B,C,A)}return l})}function df(i,l){return function(_,C){if(_==null)return _;if(!En(_))return i(_,C);for(var O=_.length,A=l?O:-1,M=bt(_);(l?A--:++A<O)&&C(M[A],A,M)!==!1;);return _}}function _f(i){return function(l,_,C){for(var O=-1,A=bt(l),M=C(l),B=M.length;B--;){var V=M[i?B:++O];if(_(A[V],V,A)===!1)break}return l}}function s0(i,l,_){var C=l&w,O=Pi(i);function A(){var M=this&&this!==Yt&&this instanceof A?O:i;return M.apply(C?_:this,arguments)}return A}function ff(i){return function(l){l=vt(l);var _=Fo(l)?tr(l):n,C=_?_[0]:l.charAt(0),O=_?zr(_,1).join(""):l.slice(1);return C[i]()+O}}function jo(i){return function(l){return Fl(dg(ug(l).replace(Zp,"")),i,"")}}function Pi(i){return function(){var l=arguments;switch(l.length){case 0:return new i;case 1:return new i(l[0]);case 2:return new i(l[0],l[1]);case 3:return new i(l[0],l[1],l[2]);case 4:return new i(l[0],l[1],l[2],l[3]);case 5:return new i(l[0],l[1],l[2],l[3],l[4]);case 6:return new i(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new i(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var _=zo(i.prototype),C=i.apply(_,l);return Nt(C)?C:_}}function l0(i,l,_){var C=Pi(i);function O(){for(var A=arguments.length,M=K(A),B=A,V=Vo(O);B--;)M[B]=arguments[B];var ae=A<3&&M[0]!==V&&M[A-1]!==V?[]:Ur(M,V);if(A-=ae.length,A<_)return mf(i,l,rs,O.placeholder,n,M,ae,n,n,_-A);var se=this&&this!==Yt&&this instanceof O?C:i;return An(se,this,M)}return O}function gf(i){return function(l,_,C){var O=bt(l);if(!En(l)){var A=Fe(_,3);l=Bt(l),_=function(B){return A(O[B],B,O)}}var M=i(l,_,C);return M>-1?O[A?l[M]:M]:n}}function hf(i){return wr(function(l){var _=l.length,C=_,O=Wn.prototype.thru;for(i&&l.reverse();C--;){var A=l[C];if(typeof A!="function")throw new Bn(s);if(O&&!M&&ss(A)=="wrapper")var M=new Wn([],!0)}for(C=M?C:_;++C<_;){A=l[C];var B=ss(A),V=B=="wrapper"?mc(A):n;V&&bc(V[0])&&V[1]==(z|T|G|X)&&!V[4].length&&V[9]==1?M=M[ss(V[0])].apply(M,V[3]):M=A.length==1&&bc(A)?M[B]():M.thru(A)}return function(){var ae=arguments,se=ae[0];if(M&&ae.length==1&&Ke(se))return M.plant(se).value();for(var _e=0,Ce=_?l[_e].apply(this,ae):se;++_e<_;)Ce=l[_e].call(this,Ce);return Ce}})}function rs(i,l,_,C,O,A,M,B,V,ae){var se=l&z,_e=l&w,Ce=l&b,Ne=l&(T|k),He=l&te,et=Ce?n:Pi(i);function Pe(){for(var ot=arguments.length,lt=K(ot),Tn=ot;Tn--;)lt[Tn]=arguments[Tn];if(Ne)var ln=Vo(Pe),Dn=Cm(lt,ln);if(C&&(lt=cf(lt,C,O,Ne)),A&&(lt=uf(lt,A,M,Ne)),ot-=Dn,Ne&&ot<ae){var Mt=Ur(lt,ln);return mf(i,l,rs,Pe.placeholder,_,lt,Mt,B,V,ae-ot)}var or=_e?_:this,Ar=Ce?or[i]:i;return ot=lt.length,B?lt=S0(lt,B):He&&ot>1&&lt.reverse(),se&&V<ot&&(lt.length=V),this&&this!==Yt&&this instanceof Pe&&(Ar=et||Pi(Ar)),Ar.apply(or,lt)}return Pe}function vf(i,l){return function(_,C){return M1(_,i,l(C),{})}}function os(i,l){return function(_,C){var O;if(_===n&&C===n)return l;if(_!==n&&(O=_),C!==n){if(O===n)return C;typeof _=="string"||typeof C=="string"?(_=xn(_),C=xn(C)):(_=ef(_),C=ef(C)),O=i(_,C)}return O}}function gc(i){return wr(function(l){return l=St(l,Sn(Fe())),tt(function(_){var C=this;return i(l,function(O){return An(O,C,_)})})})}function is(i,l){l=l===n?" ":xn(l);var _=l.length;if(_<2)return _?sc(l,i):l;var C=sc(l,Ya(i/Uo(l)));return Fo(l)?zr(tr(C),0,i).join(""):C.slice(0,i)}function c0(i,l,_,C){var O=l&w,A=Pi(i);function M(){for(var B=-1,V=arguments.length,ae=-1,se=C.length,_e=K(se+V),Ce=this&&this!==Yt&&this instanceof M?A:i;++ae<se;)_e[ae]=C[ae];for(;V--;)_e[ae++]=arguments[++B];return An(Ce,O?_:this,_e)}return M}function pf(i){return function(l,_,C){return C&&typeof C!="number"&&sn(l,_,C)&&(_=C=n),l=Lr(l),_===n?(_=l,l=0):_=Lr(_),C=C===n?l<_?1:-1:Lr(C),q1(l,_,C,i)}}function as(i){return function(l,_){return typeof l=="string"&&typeof _=="string"||(l=Vn(l),_=Vn(_)),i(l,_)}}function mf(i,l,_,C,O,A,M,B,V,ae){var se=l&T,_e=se?M:n,Ce=se?n:M,Ne=se?A:n,He=se?n:A;l|=se?G:P,l&=~(se?P:G),l&L||(l&=-4);var et=[i,l,O,Ne,_e,He,Ce,B,V,ae],Pe=_.apply(n,et);return bc(i)&&Nf(Pe,et),Pe.placeholder=C,Tf(Pe,i,l)}function hc(i){var l=Ut[i];return function(_,C){if(_=Vn(_),C=C==null?0:Qt(Je(C),292),C&&N_(_)){var O=(vt(_)+"e").split("e"),A=l(O[0]+"e"+(+O[1]+C));return O=(vt(A)+"e").split("e"),+(O[0]+"e"+(+O[1]-C))}return l(_)}}var u0=Bo&&1/Ga(new Bo([,-0]))[1]==st?function(i){return new Bo(i)}:$c;function Ef(i){return function(l){var _=Jt(l);return _==be?Yl(l):_==er?Am(l):Em(l,i(l))}}function br(i,l,_,C,O,A,M,B){var V=l&b;if(!V&&typeof i!="function")throw new Bn(s);var ae=C?C.length:0;if(ae||(l&=-97,C=O=n),M=M===n?M:Ht(Je(M),0),B=B===n?B:Je(B),ae-=O?O.length:0,l&P){var se=C,_e=O;C=O=n}var Ce=V?n:mc(i),Ne=[i,l,_,C,O,se,_e,A,M,B];if(Ce&&y0(Ne,Ce),i=Ne[0],l=Ne[1],_=Ne[2],C=Ne[3],O=Ne[4],B=Ne[9]=Ne[9]===n?V?0:i.length:Ht(Ne[9]-ae,0),!B&&l&(T|k)&&(l&=-25),!l||l==w)var He=s0(i,l,_);else l==T||l==k?He=l0(i,l,B):(l==G||l==(w|G))&&!O.length?He=c0(i,l,_,C):He=rs.apply(n,Ne);var et=Ce?Q_:Nf;return Tf(et(He,Ne),i,l)}function Cf(i,l,_,C){return i===n||rr(i,Po[_])&&!mt.call(C,_)?l:i}function If(i,l,_,C,O,A){return Nt(i)&&Nt(l)&&(A.set(l,i),Ja(i,l,n,If,A),A.delete(l)),i}function d0(i){return zi(i)?n:i}function bf(i,l,_,C,O,A){var M=_&E,B=i.length,V=l.length;if(B!=V&&!(M&&V>B))return!1;var ae=A.get(i),se=A.get(l);if(ae&&se)return ae==l&&se==i;var _e=-1,Ce=!0,Ne=_&I?new co:n;for(A.set(i,l),A.set(l,i);++_e<B;){var He=i[_e],et=l[_e];if(C)var Pe=M?C(et,He,_e,l,i,A):C(He,et,_e,i,l,A);if(Pe!==n){if(Pe)continue;Ce=!1;break}if(Ne){if(!Ul(l,function(ot,lt){if(!Ni(Ne,lt)&&(He===ot||O(He,ot,_,C,A)))return Ne.push(lt)})){Ce=!1;break}}else if(!(He===et||O(He,et,_,C,A))){Ce=!1;break}}return A.delete(i),A.delete(l),Ce}function _0(i,l,_,C,O,A,M){switch(_){case Go:if(i.byteLength!=l.byteLength||i.byteOffset!=l.byteOffset)return!1;i=i.buffer,l=l.buffer;case xi:return!(i.byteLength!=l.byteLength||!A(new Pa(i),new Pa(l)));case mr:case ar:case Ge:return rr(+i,+l);case Mr:return i.name==l.name&&i.message==l.message;case Li:case Ai:return i==l+"";case be:var B=Yl;case er:var V=C&E;if(B||(B=Ga),i.size!=l.size&&!V)return!1;var ae=M.get(i);if(ae)return ae==l;C|=I,M.set(i,l);var se=bf(B(i),B(l),C,O,A,M);return M.delete(i),se;case xa:if(Gi)return Gi.call(i)==Gi.call(l)}return!1}function f0(i,l,_,C,O,A){var M=_&E,B=vc(i),V=B.length,ae=vc(l),se=ae.length;if(V!=se&&!M)return!1;for(var _e=V;_e--;){var Ce=B[_e];if(!(M?Ce in l:mt.call(l,Ce)))return!1}var Ne=A.get(i),He=A.get(l);if(Ne&&He)return Ne==l&&He==i;var et=!0;A.set(i,l),A.set(l,i);for(var Pe=M;++_e<V;){Ce=B[_e];var ot=i[Ce],lt=l[Ce];if(C)var Tn=M?C(lt,ot,Ce,l,i,A):C(ot,lt,Ce,i,l,A);if(!(Tn===n?ot===lt||O(ot,lt,_,C,A):Tn)){et=!1;break}Pe||(Pe=Ce=="constructor")}if(et&&!Pe){var ln=i.constructor,Dn=l.constructor;ln!=Dn&&"constructor"in i&&"constructor"in l&&!(typeof ln=="function"&&ln instanceof ln&&typeof Dn=="function"&&Dn instanceof Dn)&&(et=!1)}return A.delete(i),A.delete(l),et}function wr(i){return Oc(Sf(i,n,$f),i+"")}function vc(i){return P_(i,Bt,Cc)}function pc(i){return P_(i,Cn,wf)}var mc=Va?function(i){return Va.get(i)}:$c;function ss(i){for(var l=i.name+"",_=Wo[l],C=mt.call(Wo,l)?_.length:0;C--;){var O=_[C],A=O.func;if(A==null||A==i)return O.name}return l}function Vo(i){var l=mt.call(y,"placeholder")?y:i;return l.placeholder}function Fe(){var i=y.iteratee||Gc;return i=i===Gc?z_:i,arguments.length?i(arguments[0],arguments[1]):i}function ls(i,l){var _=i.__data__;return I0(l)?_[typeof l=="string"?"string":"hash"]:_.map}function Ec(i){for(var l=Bt(i),_=l.length;_--;){var C=l[_],O=i[C];l[_]=[C,O,Lf(O)]}return l}function fo(i,l){var _=Om(i,l);return W_(_)?_:n}function g0(i){var l=mt.call(i,so),_=i[so];try{i[so]=n;var C=!0}catch{}var O=Ua.call(i);return C&&(l?i[so]=_:delete i[so]),O}var Cc=Vl?function(i){return i==null?[]:(i=bt(i),$r(Vl(i),function(l){return S_.call(i,l)}))}:Fc,wf=Vl?function(i){for(var l=[];i;)Fr(l,Cc(i)),i=Ba(i);return l}:Fc,Jt=an;(ql&&Jt(new ql(new ArrayBuffer(1)))!=Go||Di&&Jt(new Di)!=be||Xl&&Jt(Xl.resolve())!=Fd||Bo&&Jt(new Bo)!=er||Ri&&Jt(new Ri)!=Si)&&(Jt=function(i){var l=an(i),_=l==xt?i.constructor:n,C=_?go(_):"";if(C)switch(C){case Km:return Go;case Zm:return be;case Qm:return Fd;case Jm:return er;case e1:return Si}return l});function h0(i,l,_){for(var C=-1,O=_.length;++C<O;){var A=_[C],M=A.size;switch(A.type){case"drop":i+=M;break;case"dropRight":l-=M;break;case"take":l=Qt(l,i+M);break;case"takeRight":i=Ht(i,l-M);break}}return{start:i,end:l}}function v0(i){var l=i.match(bp);return l?l[1].split(wp):[]}function Of(i,l,_){l=Wr(l,i);for(var C=-1,O=l.length,A=!1;++C<O;){var M=cr(l[C]);if(!(A=i!=null&&_(i,M)))break;i=i[M]}return A||++C!=O?A:(O=i==null?0:i.length,!!O&&hs(O)&&Or(M,O)&&(Ke(i)||ho(i)))}function p0(i){var l=i.length,_=new i.constructor(l);return l&&typeof i[0]=="string"&&mt.call(i,"index")&&(_.index=i.index,_.input=i.input),_}function yf(i){return typeof i.constructor=="function"&&!Bi(i)?zo(Ba(i)):{}}function m0(i,l,_){var C=i.constructor;switch(l){case xi:return fc(i);case mr:case ar:return new C(+i);case Go:return t0(i,_);case El:case Cl:case Il:case bl:case wl:case Ol:case yl:case Ll:case Al:return sf(i,_);case be:return new C;case Ge:case Ai:return new C(i);case Li:return n0(i);case er:return new C;case xa:return r0(i)}}function E0(i,l){var _=l.length;if(!_)return i;var C=_-1;return l[C]=(_>1?"& ":"")+l[C],l=l.join(_>2?", ":" "),i.replace(Ip,`{
/* [wrapped with `+l+`] */
`)}function C0(i){return Ke(i)||ho(i)||!!(x_&&i&&i[x_])}function Or(i,l){var _=typeof i;return l=l??Se,!!l&&(_=="number"||_!="symbol"&&Dp.test(i))&&i>-1&&i%1==0&&i<l}function sn(i,l,_){if(!Nt(_))return!1;var C=typeof l;return(C=="number"?En(_)&&Or(l,_.length):C=="string"&&l in _)?rr(_[l],i):!1}function Ic(i,l){if(Ke(i))return!1;var _=typeof i;return _=="number"||_=="symbol"||_=="boolean"||i==null||Nn(i)?!0:pp.test(i)||!vp.test(i)||l!=null&&i in bt(l)}function I0(i){var l=typeof i;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?i!=="__proto__":i===null}function bc(i){var l=ss(i),_=y[l];if(typeof _!="function"||!(l in it.prototype))return!1;if(i===_)return!0;var C=mc(_);return!!C&&i===C[0]}function b0(i){return!!y_&&y_ in i}var w0=$a?yr:Uc;function Bi(i){var l=i&&i.constructor,_=typeof l=="function"&&l.prototype||Po;return i===_}function Lf(i){return i===i&&!Nt(i)}function Af(i,l){return function(_){return _==null?!1:_[i]===l&&(l!==n||i in bt(_))}}function O0(i){var l=fs(i,function(C){return _.size===f&&_.clear(),C}),_=l.cache;return l}function y0(i,l){var _=i[1],C=l[1],O=_|C,A=O<(w|b|z),M=C==z&&_==T||C==z&&_==X&&i[7].length<=l[8]||C==(z|X)&&l[7].length<=l[8]&&_==T;if(!(A||M))return i;C&w&&(i[2]=l[2],O|=_&w?0:L);var B=l[3];if(B){var V=i[3];i[3]=V?cf(V,B,l[4]):B,i[4]=V?Ur(i[3],h):l[4]}return B=l[5],B&&(V=i[5],i[5]=V?uf(V,B,l[6]):B,i[6]=V?Ur(i[5],h):l[6]),B=l[7],B&&(i[7]=B),C&z&&(i[8]=i[8]==null?l[8]:Qt(i[8],l[8])),i[9]==null&&(i[9]=l[9]),i[0]=l[0],i[1]=O,i}function L0(i){var l=[];if(i!=null)for(var _ in bt(i))l.push(_);return l}function A0(i){return Ua.call(i)}function Sf(i,l,_){return l=Ht(l===n?i.length-1:l,0),function(){for(var C=arguments,O=-1,A=Ht(C.length-l,0),M=K(A);++O<A;)M[O]=C[l+O];O=-1;for(var B=K(l+1);++O<l;)B[O]=C[O];return B[l]=_(M),An(i,this,B)}}function xf(i,l){return l.length<2?i:_o(i,Yn(l,0,-1))}function S0(i,l){for(var _=i.length,C=Qt(l.length,_),O=mn(i);C--;){var A=l[C];i[C]=Or(A,_)?O[A]:n}return i}function wc(i,l){if(!(l==="constructor"&&typeof i[l]=="function")&&l!="__proto__")return i[l]}var Nf=Df(Q_),Wi=Wm||function(i,l){return Yt.setTimeout(i,l)},Oc=Df(Z1);function Tf(i,l,_){var C=l+"";return Oc(i,E0(C,x0(v0(C),_)))}function Df(i){var l=0,_=0;return function(){var C=Vm(),O=Ie-(C-_);if(_=C,O>0){if(++l>=le)return arguments[0]}else l=0;return i.apply(n,arguments)}}function cs(i,l){var _=-1,C=i.length,O=C-1;for(l=l===n?C:l;++_<l;){var A=ac(_,O),M=i[A];i[A]=i[_],i[_]=M}return i.length=l,i}var Rf=O0(function(i){var l=[];return i.charCodeAt(0)===46&&l.push(""),i.replace(mp,function(_,C,O,A){l.push(O?A.replace(Lp,"$1"):C||_)}),l});function cr(i){if(typeof i=="string"||Nn(i))return i;var l=i+"";return l=="0"&&1/i==-1/0?"-0":l}function go(i){if(i!=null){try{return Fa.call(i)}catch{}try{return i+""}catch{}}return""}function x0(i,l){return Pn(Ln,function(_){var C="_."+_[0];l&_[1]&&!Ra(i,C)&&i.push(C)}),i.sort()}function kf(i){if(i instanceof it)return i.clone();var l=new Wn(i.__wrapped__,i.__chain__);return l.__actions__=mn(i.__actions__),l.__index__=i.__index__,l.__values__=i.__values__,l}function N0(i,l,_){(_?sn(i,l,_):l===n)?l=1:l=Ht(Je(l),0);var C=i==null?0:i.length;if(!C||l<1)return[];for(var O=0,A=0,M=K(Ya(C/l));O<C;)M[A++]=Yn(i,O,O+=l);return M}function T0(i){for(var l=-1,_=i==null?0:i.length,C=0,O=[];++l<_;){var A=i[l];A&&(O[C++]=A)}return O}function D0(){var i=arguments.length;if(!i)return[];for(var l=K(i-1),_=arguments[0],C=i;C--;)l[C-1]=arguments[C];return Fr(Ke(_)?mn(_):[_],jt(l,1))}var R0=tt(function(i,l){return Gt(i)?$i(i,jt(l,1,Gt,!0)):[]}),k0=tt(function(i,l){var _=jn(l);return Gt(_)&&(_=n),Gt(i)?$i(i,jt(l,1,Gt,!0),Fe(_,2)):[]}),G0=tt(function(i,l){var _=jn(l);return Gt(_)&&(_=n),Gt(i)?$i(i,jt(l,1,Gt,!0),n,_):[]});function M0(i,l,_){var C=i==null?0:i.length;return C?(l=_||l===n?1:Je(l),Yn(i,l<0?0:l,C)):[]}function $0(i,l,_){var C=i==null?0:i.length;return C?(l=_||l===n?1:Je(l),l=C-l,Yn(i,0,l<0?0:l)):[]}function F0(i,l){return i&&i.length?ts(i,Fe(l,3),!0,!0):[]}function U0(i,l){return i&&i.length?ts(i,Fe(l,3),!0):[]}function H0(i,l,_,C){var O=i==null?0:i.length;return O?(_&&typeof _!="number"&&sn(i,l,_)&&(_=0,C=O),D1(i,l,_,C)):[]}function Gf(i,l,_){var C=i==null?0:i.length;if(!C)return-1;var O=_==null?0:Je(_);return O<0&&(O=Ht(C+O,0)),ka(i,Fe(l,3),O)}function Mf(i,l,_){var C=i==null?0:i.length;if(!C)return-1;var O=C-1;return _!==n&&(O=Je(_),O=_<0?Ht(C+O,0):Qt(O,C-1)),ka(i,Fe(l,3),O,!0)}function $f(i){var l=i==null?0:i.length;return l?jt(i,1):[]}function P0(i){var l=i==null?0:i.length;return l?jt(i,st):[]}function B0(i,l){var _=i==null?0:i.length;return _?(l=l===n?1:Je(l),jt(i,l)):[]}function W0(i){for(var l=-1,_=i==null?0:i.length,C={};++l<_;){var O=i[l];C[O[0]]=O[1]}return C}function Ff(i){return i&&i.length?i[0]:n}function z0(i,l,_){var C=i==null?0:i.length;if(!C)return-1;var O=_==null?0:Je(_);return O<0&&(O=Ht(C+O,0)),$o(i,l,O)}function Y0(i){var l=i==null?0:i.length;return l?Yn(i,0,-1):[]}var j0=tt(function(i){var l=St(i,dc);return l.length&&l[0]===i[0]?tc(l):[]}),V0=tt(function(i){var l=jn(i),_=St(i,dc);return l===jn(_)?l=n:_.pop(),_.length&&_[0]===i[0]?tc(_,Fe(l,2)):[]}),q0=tt(function(i){var l=jn(i),_=St(i,dc);return l=typeof l=="function"?l:n,l&&_.pop(),_.length&&_[0]===i[0]?tc(_,n,l):[]});function X0(i,l){return i==null?"":Ym.call(i,l)}function jn(i){var l=i==null?0:i.length;return l?i[l-1]:n}function K0(i,l,_){var C=i==null?0:i.length;if(!C)return-1;var O=C;return _!==n&&(O=Je(_),O=O<0?Ht(C+O,0):Qt(O,C-1)),l===l?xm(i,l,O):ka(i,p_,O,!0)}function Z0(i,l){return i&&i.length?q_(i,Je(l)):n}var Q0=tt(Uf);function Uf(i,l){return i&&i.length&&l&&l.length?ic(i,l):i}function J0(i,l,_){return i&&i.length&&l&&l.length?ic(i,l,Fe(_,2)):i}function eE(i,l,_){return i&&i.length&&l&&l.length?ic(i,l,n,_):i}var tE=wr(function(i,l){var _=i==null?0:i.length,C=Zl(i,l);return Z_(i,St(l,function(O){return Or(O,_)?+O:O}).sort(lf)),C});function nE(i,l){var _=[];if(!(i&&i.length))return _;var C=-1,O=[],A=i.length;for(l=Fe(l,3);++C<A;){var M=i[C];l(M,C,i)&&(_.push(M),O.push(C))}return Z_(i,O),_}function yc(i){return i==null?i:Xm.call(i)}function rE(i,l,_){var C=i==null?0:i.length;return C?(_&&typeof _!="number"&&sn(i,l,_)?(l=0,_=C):(l=l==null?0:Je(l),_=_===n?C:Je(_)),Yn(i,l,_)):[]}function oE(i,l){return es(i,l)}function iE(i,l,_){return lc(i,l,Fe(_,2))}function aE(i,l){var _=i==null?0:i.length;if(_){var C=es(i,l);if(C<_&&rr(i[C],l))return C}return-1}function sE(i,l){return es(i,l,!0)}function lE(i,l,_){return lc(i,l,Fe(_,2),!0)}function cE(i,l){var _=i==null?0:i.length;if(_){var C=es(i,l,!0)-1;if(rr(i[C],l))return C}return-1}function uE(i){return i&&i.length?J_(i):[]}function dE(i,l){return i&&i.length?J_(i,Fe(l,2)):[]}function _E(i){var l=i==null?0:i.length;return l?Yn(i,1,l):[]}function fE(i,l,_){return i&&i.length?(l=_||l===n?1:Je(l),Yn(i,0,l<0?0:l)):[]}function gE(i,l,_){var C=i==null?0:i.length;return C?(l=_||l===n?1:Je(l),l=C-l,Yn(i,l<0?0:l,C)):[]}function hE(i,l){return i&&i.length?ts(i,Fe(l,3),!1,!0):[]}function vE(i,l){return i&&i.length?ts(i,Fe(l,3)):[]}var pE=tt(function(i){return Br(jt(i,1,Gt,!0))}),mE=tt(function(i){var l=jn(i);return Gt(l)&&(l=n),Br(jt(i,1,Gt,!0),Fe(l,2))}),EE=tt(function(i){var l=jn(i);return l=typeof l=="function"?l:n,Br(jt(i,1,Gt,!0),n,l)});function CE(i){return i&&i.length?Br(i):[]}function IE(i,l){return i&&i.length?Br(i,Fe(l,2)):[]}function bE(i,l){return l=typeof l=="function"?l:n,i&&i.length?Br(i,n,l):[]}function Lc(i){if(!(i&&i.length))return[];var l=0;return i=$r(i,function(_){if(Gt(_))return l=Ht(_.length,l),!0}),Wl(l,function(_){return St(i,Hl(_))})}function Hf(i,l){if(!(i&&i.length))return[];var _=Lc(i);return l==null?_:St(_,function(C){return An(l,n,C)})}var wE=tt(function(i,l){return Gt(i)?$i(i,l):[]}),OE=tt(function(i){return uc($r(i,Gt))}),yE=tt(function(i){var l=jn(i);return Gt(l)&&(l=n),uc($r(i,Gt),Fe(l,2))}),LE=tt(function(i){var l=jn(i);return l=typeof l=="function"?l:n,uc($r(i,Gt),n,l)}),AE=tt(Lc);function SE(i,l){return rf(i||[],l||[],Mi)}function xE(i,l){return rf(i||[],l||[],Hi)}var NE=tt(function(i){var l=i.length,_=l>1?i[l-1]:n;return _=typeof _=="function"?(i.pop(),_):n,Hf(i,_)});function Pf(i){var l=y(i);return l.__chain__=!0,l}function TE(i,l){return l(i),i}function us(i,l){return l(i)}var DE=wr(function(i){var l=i.length,_=l?i[0]:0,C=this.__wrapped__,O=function(A){return Zl(A,i)};return l>1||this.__actions__.length||!(C instanceof it)||!Or(_)?this.thru(O):(C=C.slice(_,+_+(l?1:0)),C.__actions__.push({func:us,args:[O],thisArg:n}),new Wn(C,this.__chain__).thru(function(A){return l&&!A.length&&A.push(n),A}))});function RE(){return Pf(this)}function kE(){return new Wn(this.value(),this.__chain__)}function GE(){this.__values__===n&&(this.__values__=tg(this.value()));var i=this.__index__>=this.__values__.length,l=i?n:this.__values__[this.__index__++];return{done:i,value:l}}function ME(){return this}function $E(i){for(var l,_=this;_ instanceof Xa;){var C=kf(_);C.__index__=0,C.__values__=n,l?O.__wrapped__=C:l=C;var O=C;_=_.__wrapped__}return O.__wrapped__=i,l}function FE(){var i=this.__wrapped__;if(i instanceof it){var l=i;return this.__actions__.length&&(l=new it(this)),l=l.reverse(),l.__actions__.push({func:us,args:[yc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(yc)}function UE(){return nf(this.__wrapped__,this.__actions__)}var HE=ns(function(i,l,_){mt.call(i,_)?++i[_]:Ir(i,_,1)});function PE(i,l,_){var C=Ke(i)?h_:T1;return _&&sn(i,l,_)&&(l=n),C(i,Fe(l,3))}function BE(i,l){var _=Ke(i)?$r:U_;return _(i,Fe(l,3))}var WE=gf(Gf),zE=gf(Mf);function YE(i,l){return jt(ds(i,l),1)}function jE(i,l){return jt(ds(i,l),st)}function VE(i,l,_){return _=_===n?1:Je(_),jt(ds(i,l),_)}function Bf(i,l){var _=Ke(i)?Pn:Pr;return _(i,Fe(l,3))}function Wf(i,l){var _=Ke(i)?_m:F_;return _(i,Fe(l,3))}var qE=ns(function(i,l,_){mt.call(i,_)?i[_].push(l):Ir(i,_,[l])});function XE(i,l,_,C){i=En(i)?i:Xo(i),_=_&&!C?Je(_):0;var O=i.length;return _<0&&(_=Ht(O+_,0)),vs(i)?_<=O&&i.indexOf(l,_)>-1:!!O&&$o(i,l,_)>-1}var KE=tt(function(i,l,_){var C=-1,O=typeof l=="function",A=En(i)?K(i.length):[];return Pr(i,function(M){A[++C]=O?An(l,M,_):Fi(M,l,_)}),A}),ZE=ns(function(i,l,_){Ir(i,_,l)});function ds(i,l){var _=Ke(i)?St:Y_;return _(i,Fe(l,3))}function QE(i,l,_,C){return i==null?[]:(Ke(l)||(l=l==null?[]:[l]),_=C?n:_,Ke(_)||(_=_==null?[]:[_]),X_(i,l,_))}var JE=ns(function(i,l,_){i[_?0:1].push(l)},function(){return[[],[]]});function eC(i,l,_){var C=Ke(i)?Fl:E_,O=arguments.length<3;return C(i,Fe(l,4),_,O,Pr)}function tC(i,l,_){var C=Ke(i)?fm:E_,O=arguments.length<3;return C(i,Fe(l,4),_,O,F_)}function nC(i,l){var _=Ke(i)?$r:U_;return _(i,gs(Fe(l,3)))}function rC(i){var l=Ke(i)?k_:X1;return l(i)}function oC(i,l,_){(_?sn(i,l,_):l===n)?l=1:l=Je(l);var C=Ke(i)?L1:K1;return C(i,l)}function iC(i){var l=Ke(i)?A1:Q1;return l(i)}function aC(i){if(i==null)return 0;if(En(i))return vs(i)?Uo(i):i.length;var l=Jt(i);return l==be||l==er?i.size:rc(i).length}function sC(i,l,_){var C=Ke(i)?Ul:J1;return _&&sn(i,l,_)&&(l=n),C(i,Fe(l,3))}var lC=tt(function(i,l){if(i==null)return[];var _=l.length;return _>1&&sn(i,l[0],l[1])?l=[]:_>2&&sn(l[0],l[1],l[2])&&(l=[l[0]]),X_(i,jt(l,1),[])}),_s=Bm||function(){return Yt.Date.now()};function cC(i,l){if(typeof l!="function")throw new Bn(s);return i=Je(i),function(){if(--i<1)return l.apply(this,arguments)}}function zf(i,l,_){return l=_?n:l,l=i&&l==null?i.length:l,br(i,z,n,n,n,n,l)}function Yf(i,l){var _;if(typeof l!="function")throw new Bn(s);return i=Je(i),function(){return--i>0&&(_=l.apply(this,arguments)),i<=1&&(l=n),_}}var Ac=tt(function(i,l,_){var C=w;if(_.length){var O=Ur(_,Vo(Ac));C|=G}return br(i,C,l,_,O)}),jf=tt(function(i,l,_){var C=w|b;if(_.length){var O=Ur(_,Vo(jf));C|=G}return br(l,C,i,_,O)});function Vf(i,l,_){l=_?n:l;var C=br(i,T,n,n,n,n,n,l);return C.placeholder=Vf.placeholder,C}function qf(i,l,_){l=_?n:l;var C=br(i,k,n,n,n,n,n,l);return C.placeholder=qf.placeholder,C}function Xf(i,l,_){var C,O,A,M,B,V,ae=0,se=!1,_e=!1,Ce=!0;if(typeof i!="function")throw new Bn(s);l=Vn(l)||0,Nt(_)&&(se=!!_.leading,_e="maxWait"in _,A=_e?Ht(Vn(_.maxWait)||0,l):A,Ce="trailing"in _?!!_.trailing:Ce);function Ne(Mt){var or=C,Ar=O;return C=O=n,ae=Mt,M=i.apply(Ar,or),M}function He(Mt){return ae=Mt,B=Wi(ot,l),se?Ne(Mt):M}function et(Mt){var or=Mt-V,Ar=Mt-ae,gg=l-or;return _e?Qt(gg,A-Ar):gg}function Pe(Mt){var or=Mt-V,Ar=Mt-ae;return V===n||or>=l||or<0||_e&&Ar>=A}function ot(){var Mt=_s();if(Pe(Mt))return lt(Mt);B=Wi(ot,et(Mt))}function lt(Mt){return B=n,Ce&&C?Ne(Mt):(C=O=n,M)}function Tn(){B!==n&&of(B),ae=0,C=V=O=B=n}function ln(){return B===n?M:lt(_s())}function Dn(){var Mt=_s(),or=Pe(Mt);if(C=arguments,O=this,V=Mt,or){if(B===n)return He(V);if(_e)return of(B),B=Wi(ot,l),Ne(V)}return B===n&&(B=Wi(ot,l)),M}return Dn.cancel=Tn,Dn.flush=ln,Dn}var uC=tt(function(i,l){return $_(i,1,l)}),dC=tt(function(i,l,_){return $_(i,Vn(l)||0,_)});function _C(i){return br(i,te)}function fs(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new Bn(s);var _=function(){var C=arguments,O=l?l.apply(this,C):C[0],A=_.cache;if(A.has(O))return A.get(O);var M=i.apply(this,C);return _.cache=A.set(O,M)||A,M};return _.cache=new(fs.Cache||Cr),_}fs.Cache=Cr;function gs(i){if(typeof i!="function")throw new Bn(s);return function(){var l=arguments;switch(l.length){case 0:return!i.call(this);case 1:return!i.call(this,l[0]);case 2:return!i.call(this,l[0],l[1]);case 3:return!i.call(this,l[0],l[1],l[2])}return!i.apply(this,l)}}function fC(i){return Yf(2,i)}var gC=e0(function(i,l){l=l.length==1&&Ke(l[0])?St(l[0],Sn(Fe())):St(jt(l,1),Sn(Fe()));var _=l.length;return tt(function(C){for(var O=-1,A=Qt(C.length,_);++O<A;)C[O]=l[O].call(this,C[O]);return An(i,this,C)})}),Sc=tt(function(i,l){var _=Ur(l,Vo(Sc));return br(i,G,n,l,_)}),Kf=tt(function(i,l){var _=Ur(l,Vo(Kf));return br(i,P,n,l,_)}),hC=wr(function(i,l){return br(i,X,n,n,n,l)});function vC(i,l){if(typeof i!="function")throw new Bn(s);return l=l===n?l:Je(l),tt(i,l)}function pC(i,l){if(typeof i!="function")throw new Bn(s);return l=l==null?0:Ht(Je(l),0),tt(function(_){var C=_[l],O=zr(_,0,l);return C&&Fr(O,C),An(i,this,O)})}function mC(i,l,_){var C=!0,O=!0;if(typeof i!="function")throw new Bn(s);return Nt(_)&&(C="leading"in _?!!_.leading:C,O="trailing"in _?!!_.trailing:O),Xf(i,l,{leading:C,maxWait:l,trailing:O})}function EC(i){return zf(i,1)}function CC(i,l){return Sc(_c(l),i)}function IC(){if(!arguments.length)return[];var i=arguments[0];return Ke(i)?i:[i]}function bC(i){return zn(i,m)}function wC(i,l){return l=typeof l=="function"?l:n,zn(i,m,l)}function OC(i){return zn(i,g|m)}function yC(i,l){return l=typeof l=="function"?l:n,zn(i,g|m,l)}function LC(i,l){return l==null||M_(i,l,Bt(l))}function rr(i,l){return i===l||i!==i&&l!==l}var AC=as(ec),SC=as(function(i,l){return i>=l}),ho=B_(function(){return arguments}())?B_:function(i){return kt(i)&&mt.call(i,"callee")&&!S_.call(i,"callee")},Ke=K.isArray,xC=c_?Sn(c_):$1;function En(i){return i!=null&&hs(i.length)&&!yr(i)}function Gt(i){return kt(i)&&En(i)}function NC(i){return i===!0||i===!1||kt(i)&&an(i)==mr}var Yr=zm||Uc,TC=u_?Sn(u_):F1;function DC(i){return kt(i)&&i.nodeType===1&&!zi(i)}function RC(i){if(i==null)return!0;if(En(i)&&(Ke(i)||typeof i=="string"||typeof i.splice=="function"||Yr(i)||qo(i)||ho(i)))return!i.length;var l=Jt(i);if(l==be||l==er)return!i.size;if(Bi(i))return!rc(i).length;for(var _ in i)if(mt.call(i,_))return!1;return!0}function kC(i,l){return Ui(i,l)}function GC(i,l,_){_=typeof _=="function"?_:n;var C=_?_(i,l):n;return C===n?Ui(i,l,n,_):!!C}function xc(i){if(!kt(i))return!1;var l=an(i);return l==Mr||l==yi||typeof i.message=="string"&&typeof i.name=="string"&&!zi(i)}function MC(i){return typeof i=="number"&&N_(i)}function yr(i){if(!Nt(i))return!1;var l=an(i);return l==ko||l==$e||l==Jn||l==ap}function Zf(i){return typeof i=="number"&&i==Je(i)}function hs(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Se}function Nt(i){var l=typeof i;return i!=null&&(l=="object"||l=="function")}function kt(i){return i!=null&&typeof i=="object"}var Qf=d_?Sn(d_):H1;function $C(i,l){return i===l||nc(i,l,Ec(l))}function FC(i,l,_){return _=typeof _=="function"?_:n,nc(i,l,Ec(l),_)}function UC(i){return Jf(i)&&i!=+i}function HC(i){if(w0(i))throw new Ve(a);return W_(i)}function PC(i){return i===null}function BC(i){return i==null}function Jf(i){return typeof i=="number"||kt(i)&&an(i)==Ge}function zi(i){if(!kt(i)||an(i)!=xt)return!1;var l=Ba(i);if(l===null)return!0;var _=mt.call(l,"constructor")&&l.constructor;return typeof _=="function"&&_ instanceof _&&Fa.call(_)==Fm}var Nc=__?Sn(__):P1;function WC(i){return Zf(i)&&i>=-9007199254740991&&i<=Se}var eg=f_?Sn(f_):B1;function vs(i){return typeof i=="string"||!Ke(i)&&kt(i)&&an(i)==Ai}function Nn(i){return typeof i=="symbol"||kt(i)&&an(i)==xa}var qo=g_?Sn(g_):W1;function zC(i){return i===n}function YC(i){return kt(i)&&Jt(i)==Si}function jC(i){return kt(i)&&an(i)==lp}var VC=as(oc),qC=as(function(i,l){return i<=l});function tg(i){if(!i)return[];if(En(i))return vs(i)?tr(i):mn(i);if(Ti&&i[Ti])return Lm(i[Ti]());var l=Jt(i),_=l==be?Yl:l==er?Ga:Xo;return _(i)}function Lr(i){if(!i)return i===0?i:0;if(i=Vn(i),i===st||i===-1/0){var l=i<0?-1:1;return l*we}return i===i?i:0}function Je(i){var l=Lr(i),_=l%1;return l===l?_?l-_:l:0}function ng(i){return i?uo(Je(i),0,ut):0}function Vn(i){if(typeof i=="number")return i;if(Nn(i))return _t;if(Nt(i)){var l=typeof i.valueOf=="function"?i.valueOf():i;i=Nt(l)?l+"":l}if(typeof i!="string")return i===0?i:+i;i=C_(i);var _=xp.test(i);return _||Tp.test(i)?cm(i.slice(2),_?2:8):Sp.test(i)?_t:+i}function rg(i){return lr(i,Cn(i))}function XC(i){return i?uo(Je(i),-9007199254740991,Se):i===0?i:0}function vt(i){return i==null?"":xn(i)}var KC=Yo(function(i,l){if(Bi(l)||En(l)){lr(l,Bt(l),i);return}for(var _ in l)mt.call(l,_)&&Mi(i,_,l[_])}),og=Yo(function(i,l){lr(l,Cn(l),i)}),ps=Yo(function(i,l,_,C){lr(l,Cn(l),i,C)}),ZC=Yo(function(i,l,_,C){lr(l,Bt(l),i,C)}),QC=wr(Zl);function JC(i,l){var _=zo(i);return l==null?_:G_(_,l)}var eI=tt(function(i,l){i=bt(i);var _=-1,C=l.length,O=C>2?l[2]:n;for(O&&sn(l[0],l[1],O)&&(C=1);++_<C;)for(var A=l[_],M=Cn(A),B=-1,V=M.length;++B<V;){var ae=M[B],se=i[ae];(se===n||rr(se,Po[ae])&&!mt.call(i,ae))&&(i[ae]=A[ae])}return i}),tI=tt(function(i){return i.push(n,If),An(ig,n,i)});function nI(i,l){return v_(i,Fe(l,3),sr)}function rI(i,l){return v_(i,Fe(l,3),Jl)}function oI(i,l){return i==null?i:Ql(i,Fe(l,3),Cn)}function iI(i,l){return i==null?i:H_(i,Fe(l,3),Cn)}function aI(i,l){return i&&sr(i,Fe(l,3))}function sI(i,l){return i&&Jl(i,Fe(l,3))}function lI(i){return i==null?[]:Qa(i,Bt(i))}function cI(i){return i==null?[]:Qa(i,Cn(i))}function Tc(i,l,_){var C=i==null?n:_o(i,l);return C===n?_:C}function uI(i,l){return i!=null&&Of(i,l,R1)}function Dc(i,l){return i!=null&&Of(i,l,k1)}var dI=vf(function(i,l,_){l!=null&&typeof l.toString!="function"&&(l=Ua.call(l)),i[l]=_},kc(In)),_I=vf(function(i,l,_){l!=null&&typeof l.toString!="function"&&(l=Ua.call(l)),mt.call(i,l)?i[l].push(_):i[l]=[_]},Fe),fI=tt(Fi);function Bt(i){return En(i)?R_(i):rc(i)}function Cn(i){return En(i)?R_(i,!0):z1(i)}function gI(i,l){var _={};return l=Fe(l,3),sr(i,function(C,O,A){Ir(_,l(C,O,A),C)}),_}function hI(i,l){var _={};return l=Fe(l,3),sr(i,function(C,O,A){Ir(_,O,l(C,O,A))}),_}var vI=Yo(function(i,l,_){Ja(i,l,_)}),ig=Yo(function(i,l,_,C){Ja(i,l,_,C)}),pI=wr(function(i,l){var _={};if(i==null)return _;var C=!1;l=St(l,function(A){return A=Wr(A,i),C||(C=A.length>1),A}),lr(i,pc(i),_),C&&(_=zn(_,g|v|m,d0));for(var O=l.length;O--;)cc(_,l[O]);return _});function mI(i,l){return ag(i,gs(Fe(l)))}var EI=wr(function(i,l){return i==null?{}:j1(i,l)});function ag(i,l){if(i==null)return{};var _=St(pc(i),function(C){return[C]});return l=Fe(l),K_(i,_,function(C,O){return l(C,O[0])})}function CI(i,l,_){l=Wr(l,i);var C=-1,O=l.length;for(O||(O=1,i=n);++C<O;){var A=i==null?n:i[cr(l[C])];A===n&&(C=O,A=_),i=yr(A)?A.call(i):A}return i}function II(i,l,_){return i==null?i:Hi(i,l,_)}function bI(i,l,_,C){return C=typeof C=="function"?C:n,i==null?i:Hi(i,l,_,C)}var sg=Ef(Bt),lg=Ef(Cn);function wI(i,l,_){var C=Ke(i),O=C||Yr(i)||qo(i);if(l=Fe(l,4),_==null){var A=i&&i.constructor;O?_=C?new A:[]:Nt(i)?_=yr(A)?zo(Ba(i)):{}:_={}}return(O?Pn:sr)(i,function(M,B,V){return l(_,M,B,V)}),_}function OI(i,l){return i==null?!0:cc(i,l)}function yI(i,l,_){return i==null?i:tf(i,l,_c(_))}function LI(i,l,_,C){return C=typeof C=="function"?C:n,i==null?i:tf(i,l,_c(_),C)}function Xo(i){return i==null?[]:zl(i,Bt(i))}function AI(i){return i==null?[]:zl(i,Cn(i))}function SI(i,l,_){return _===n&&(_=l,l=n),_!==n&&(_=Vn(_),_=_===_?_:0),l!==n&&(l=Vn(l),l=l===l?l:0),uo(Vn(i),l,_)}function xI(i,l,_){return l=Lr(l),_===n?(_=l,l=0):_=Lr(_),i=Vn(i),G1(i,l,_)}function NI(i,l,_){if(_&&typeof _!="boolean"&&sn(i,l,_)&&(l=_=n),_===n&&(typeof l=="boolean"?(_=l,l=n):typeof i=="boolean"&&(_=i,i=n)),i===n&&l===n?(i=0,l=1):(i=Lr(i),l===n?(l=i,i=0):l=Lr(l)),i>l){var C=i;i=l,l=C}if(_||i%1||l%1){var O=T_();return Qt(i+O*(l-i+lm("1e-"+((O+"").length-1))),l)}return ac(i,l)}var TI=jo(function(i,l,_){return l=l.toLowerCase(),i+(_?cg(l):l)});function cg(i){return Rc(vt(i).toLowerCase())}function ug(i){return i=vt(i),i&&i.replace(Rp,Im).replace(Qp,"")}function DI(i,l,_){i=vt(i),l=xn(l);var C=i.length;_=_===n?C:uo(Je(_),0,C);var O=_;return _-=l.length,_>=0&&i.slice(_,O)==l}function RI(i){return i=vt(i),i&&fp.test(i)?i.replace(Hd,bm):i}function kI(i){return i=vt(i),i&&Ep.test(i)?i.replace(Sl,"\\$&"):i}var GI=jo(function(i,l,_){return i+(_?"-":"")+l.toLowerCase()}),MI=jo(function(i,l,_){return i+(_?" ":"")+l.toLowerCase()}),$I=ff("toLowerCase");function FI(i,l,_){i=vt(i),l=Je(l);var C=l?Uo(i):0;if(!l||C>=l)return i;var O=(l-C)/2;return is(ja(O),_)+i+is(Ya(O),_)}function UI(i,l,_){i=vt(i),l=Je(l);var C=l?Uo(i):0;return l&&C<l?i+is(l-C,_):i}function HI(i,l,_){i=vt(i),l=Je(l);var C=l?Uo(i):0;return l&&C<l?is(l-C,_)+i:i}function PI(i,l,_){return _||l==null?l=0:l&&(l=+l),qm(vt(i).replace(xl,""),l||0)}function BI(i,l,_){return(_?sn(i,l,_):l===n)?l=1:l=Je(l),sc(vt(i),l)}function WI(){var i=arguments,l=vt(i[0]);return i.length<3?l:l.replace(i[1],i[2])}var zI=jo(function(i,l,_){return i+(_?"_":"")+l.toLowerCase()});function YI(i,l,_){return _&&typeof _!="number"&&sn(i,l,_)&&(l=_=n),_=_===n?ut:_>>>0,_?(i=vt(i),i&&(typeof l=="string"||l!=null&&!Nc(l))&&(l=xn(l),!l&&Fo(i))?zr(tr(i),0,_):i.split(l,_)):[]}var jI=jo(function(i,l,_){return i+(_?" ":"")+Rc(l)});function VI(i,l,_){return i=vt(i),_=_==null?0:uo(Je(_),0,i.length),l=xn(l),i.slice(_,_+l.length)==l}function qI(i,l,_){var C=y.templateSettings;_&&sn(i,l,_)&&(l=n),i=vt(i),l=ps({},l,C,Cf);var O=ps({},l.imports,C.imports,Cf),A=Bt(O),M=zl(O,A),B,V,ae=0,se=l.interpolate||Na,_e="__p += '",Ce=jl((l.escape||Na).source+"|"+se.source+"|"+(se===Pd?Ap:Na).source+"|"+(l.evaluate||Na).source+"|$","g"),Ne="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rm+"]")+`
`;i.replace(Ce,function(Pe,ot,lt,Tn,ln,Dn){return lt||(lt=Tn),_e+=i.slice(ae,Dn).replace(kp,wm),ot&&(B=!0,_e+=`' +
__e(`+ot+`) +
'`),ln&&(V=!0,_e+=`';
`+ln+`;
__p += '`),lt&&(_e+=`' +
((__t = (`+lt+`)) == null ? '' : __t) +
'`),ae=Dn+Pe.length,Pe}),_e+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)_e=`with (obj) {
`+_e+`
}
`;else if(yp.test(He))throw new Ve(c);_e=(V?_e.replace(cp,""):_e).replace(up,"$1").replace(dp,"$1;"),_e="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var et=_g(function(){return ft(A,Ne+"return "+_e).apply(n,M)});if(et.source=_e,xc(et))throw et;return et}function XI(i){return vt(i).toLowerCase()}function KI(i){return vt(i).toUpperCase()}function ZI(i,l,_){if(i=vt(i),i&&(_||l===n))return C_(i);if(!i||!(l=xn(l)))return i;var C=tr(i),O=tr(l),A=I_(C,O),M=b_(C,O)+1;return zr(C,A,M).join("")}function QI(i,l,_){if(i=vt(i),i&&(_||l===n))return i.slice(0,O_(i)+1);if(!i||!(l=xn(l)))return i;var C=tr(i),O=b_(C,tr(l))+1;return zr(C,0,O).join("")}function JI(i,l,_){if(i=vt(i),i&&(_||l===n))return i.replace(xl,"");if(!i||!(l=xn(l)))return i;var C=tr(i),O=I_(C,tr(l));return zr(C,O).join("")}function eb(i,l){var _=de,C=ee;if(Nt(l)){var O="separator"in l?l.separator:O;_="length"in l?Je(l.length):_,C="omission"in l?xn(l.omission):C}i=vt(i);var A=i.length;if(Fo(i)){var M=tr(i);A=M.length}if(_>=A)return i;var B=_-Uo(C);if(B<1)return C;var V=M?zr(M,0,B).join(""):i.slice(0,B);if(O===n)return V+C;if(M&&(B+=V.length-B),Nc(O)){if(i.slice(B).search(O)){var ae,se=V;for(O.global||(O=jl(O.source,vt(Bd.exec(O))+"g")),O.lastIndex=0;ae=O.exec(se);)var _e=ae.index;V=V.slice(0,_e===n?B:_e)}}else if(i.indexOf(xn(O),B)!=B){var Ce=V.lastIndexOf(O);Ce>-1&&(V=V.slice(0,Ce))}return V+C}function tb(i){return i=vt(i),i&&_p.test(i)?i.replace(Ud,Nm):i}var nb=jo(function(i,l,_){return i+(_?" ":"")+l.toUpperCase()}),Rc=ff("toUpperCase");function dg(i,l,_){return i=vt(i),l=_?n:l,l===n?ym(i)?Rm(i):vm(i):i.match(l)||[]}var _g=tt(function(i,l){try{return An(i,n,l)}catch(_){return xc(_)?_:new Ve(_)}}),rb=wr(function(i,l){return Pn(l,function(_){_=cr(_),Ir(i,_,Ac(i[_],i))}),i});function ob(i){var l=i==null?0:i.length,_=Fe();return i=l?St(i,function(C){if(typeof C[1]!="function")throw new Bn(s);return[_(C[0]),C[1]]}):[],tt(function(C){for(var O=-1;++O<l;){var A=i[O];if(An(A[0],this,C))return An(A[1],this,C)}})}function ib(i){return N1(zn(i,g))}function kc(i){return function(){return i}}function ab(i,l){return i==null||i!==i?l:i}var sb=hf(),lb=hf(!0);function In(i){return i}function Gc(i){return z_(typeof i=="function"?i:zn(i,g))}function cb(i){return j_(zn(i,g))}function ub(i,l){return V_(i,zn(l,g))}var db=tt(function(i,l){return function(_){return Fi(_,i,l)}}),_b=tt(function(i,l){return function(_){return Fi(i,_,l)}});function Mc(i,l,_){var C=Bt(l),O=Qa(l,C);_==null&&!(Nt(l)&&(O.length||!C.length))&&(_=l,l=i,i=this,O=Qa(l,Bt(l)));var A=!(Nt(_)&&"chain"in _)||!!_.chain,M=yr(i);return Pn(O,function(B){var V=l[B];i[B]=V,M&&(i.prototype[B]=function(){var ae=this.__chain__;if(A||ae){var se=i(this.__wrapped__),_e=se.__actions__=mn(this.__actions__);return _e.push({func:V,args:arguments,thisArg:i}),se.__chain__=ae,se}return V.apply(i,Fr([this.value()],arguments))})}),i}function fb(){return Yt._===this&&(Yt._=Um),this}function $c(){}function gb(i){return i=Je(i),tt(function(l){return q_(l,i)})}var hb=gc(St),vb=gc(h_),pb=gc(Ul);function fg(i){return Ic(i)?Hl(cr(i)):V1(i)}function mb(i){return function(l){return i==null?n:_o(i,l)}}var Eb=pf(),Cb=pf(!0);function Fc(){return[]}function Uc(){return!1}function Ib(){return{}}function bb(){return""}function wb(){return!0}function Ob(i,l){if(i=Je(i),i<1||i>Se)return[];var _=ut,C=Qt(i,ut);l=Fe(l),i-=ut;for(var O=Wl(C,l);++_<i;)l(_);return O}function yb(i){return Ke(i)?St(i,cr):Nn(i)?[i]:mn(Rf(vt(i)))}function Lb(i){var l=++$m;return vt(i)+l}var Ab=os(function(i,l){return i+l},0),Sb=hc("ceil"),xb=os(function(i,l){return i/l},1),Nb=hc("floor");function Tb(i){return i&&i.length?Za(i,In,ec):n}function Db(i,l){return i&&i.length?Za(i,Fe(l,2),ec):n}function Rb(i){return m_(i,In)}function kb(i,l){return m_(i,Fe(l,2))}function Gb(i){return i&&i.length?Za(i,In,oc):n}function Mb(i,l){return i&&i.length?Za(i,Fe(l,2),oc):n}var $b=os(function(i,l){return i*l},1),Fb=hc("round"),Ub=os(function(i,l){return i-l},0);function Hb(i){return i&&i.length?Bl(i,In):0}function Pb(i,l){return i&&i.length?Bl(i,Fe(l,2)):0}return y.after=cC,y.ary=zf,y.assign=KC,y.assignIn=og,y.assignInWith=ps,y.assignWith=ZC,y.at=QC,y.before=Yf,y.bind=Ac,y.bindAll=rb,y.bindKey=jf,y.castArray=IC,y.chain=Pf,y.chunk=N0,y.compact=T0,y.concat=D0,y.cond=ob,y.conforms=ib,y.constant=kc,y.countBy=HE,y.create=JC,y.curry=Vf,y.curryRight=qf,y.debounce=Xf,y.defaults=eI,y.defaultsDeep=tI,y.defer=uC,y.delay=dC,y.difference=R0,y.differenceBy=k0,y.differenceWith=G0,y.drop=M0,y.dropRight=$0,y.dropRightWhile=F0,y.dropWhile=U0,y.fill=H0,y.filter=BE,y.flatMap=YE,y.flatMapDeep=jE,y.flatMapDepth=VE,y.flatten=$f,y.flattenDeep=P0,y.flattenDepth=B0,y.flip=_C,y.flow=sb,y.flowRight=lb,y.fromPairs=W0,y.functions=lI,y.functionsIn=cI,y.groupBy=qE,y.initial=Y0,y.intersection=j0,y.intersectionBy=V0,y.intersectionWith=q0,y.invert=dI,y.invertBy=_I,y.invokeMap=KE,y.iteratee=Gc,y.keyBy=ZE,y.keys=Bt,y.keysIn=Cn,y.map=ds,y.mapKeys=gI,y.mapValues=hI,y.matches=cb,y.matchesProperty=ub,y.memoize=fs,y.merge=vI,y.mergeWith=ig,y.method=db,y.methodOf=_b,y.mixin=Mc,y.negate=gs,y.nthArg=gb,y.omit=pI,y.omitBy=mI,y.once=fC,y.orderBy=QE,y.over=hb,y.overArgs=gC,y.overEvery=vb,y.overSome=pb,y.partial=Sc,y.partialRight=Kf,y.partition=JE,y.pick=EI,y.pickBy=ag,y.property=fg,y.propertyOf=mb,y.pull=Q0,y.pullAll=Uf,y.pullAllBy=J0,y.pullAllWith=eE,y.pullAt=tE,y.range=Eb,y.rangeRight=Cb,y.rearg=hC,y.reject=nC,y.remove=nE,y.rest=vC,y.reverse=yc,y.sampleSize=oC,y.set=II,y.setWith=bI,y.shuffle=iC,y.slice=rE,y.sortBy=lC,y.sortedUniq=uE,y.sortedUniqBy=dE,y.split=YI,y.spread=pC,y.tail=_E,y.take=fE,y.takeRight=gE,y.takeRightWhile=hE,y.takeWhile=vE,y.tap=TE,y.throttle=mC,y.thru=us,y.toArray=tg,y.toPairs=sg,y.toPairsIn=lg,y.toPath=yb,y.toPlainObject=rg,y.transform=wI,y.unary=EC,y.union=pE,y.unionBy=mE,y.unionWith=EE,y.uniq=CE,y.uniqBy=IE,y.uniqWith=bE,y.unset=OI,y.unzip=Lc,y.unzipWith=Hf,y.update=yI,y.updateWith=LI,y.values=Xo,y.valuesIn=AI,y.without=wE,y.words=dg,y.wrap=CC,y.xor=OE,y.xorBy=yE,y.xorWith=LE,y.zip=AE,y.zipObject=SE,y.zipObjectDeep=xE,y.zipWith=NE,y.entries=sg,y.entriesIn=lg,y.extend=og,y.extendWith=ps,Mc(y,y),y.add=Ab,y.attempt=_g,y.camelCase=TI,y.capitalize=cg,y.ceil=Sb,y.clamp=SI,y.clone=bC,y.cloneDeep=OC,y.cloneDeepWith=yC,y.cloneWith=wC,y.conformsTo=LC,y.deburr=ug,y.defaultTo=ab,y.divide=xb,y.endsWith=DI,y.eq=rr,y.escape=RI,y.escapeRegExp=kI,y.every=PE,y.find=WE,y.findIndex=Gf,y.findKey=nI,y.findLast=zE,y.findLastIndex=Mf,y.findLastKey=rI,y.floor=Nb,y.forEach=Bf,y.forEachRight=Wf,y.forIn=oI,y.forInRight=iI,y.forOwn=aI,y.forOwnRight=sI,y.get=Tc,y.gt=AC,y.gte=SC,y.has=uI,y.hasIn=Dc,y.head=Ff,y.identity=In,y.includes=XE,y.indexOf=z0,y.inRange=xI,y.invoke=fI,y.isArguments=ho,y.isArray=Ke,y.isArrayBuffer=xC,y.isArrayLike=En,y.isArrayLikeObject=Gt,y.isBoolean=NC,y.isBuffer=Yr,y.isDate=TC,y.isElement=DC,y.isEmpty=RC,y.isEqual=kC,y.isEqualWith=GC,y.isError=xc,y.isFinite=MC,y.isFunction=yr,y.isInteger=Zf,y.isLength=hs,y.isMap=Qf,y.isMatch=$C,y.isMatchWith=FC,y.isNaN=UC,y.isNative=HC,y.isNil=BC,y.isNull=PC,y.isNumber=Jf,y.isObject=Nt,y.isObjectLike=kt,y.isPlainObject=zi,y.isRegExp=Nc,y.isSafeInteger=WC,y.isSet=eg,y.isString=vs,y.isSymbol=Nn,y.isTypedArray=qo,y.isUndefined=zC,y.isWeakMap=YC,y.isWeakSet=jC,y.join=X0,y.kebabCase=GI,y.last=jn,y.lastIndexOf=K0,y.lowerCase=MI,y.lowerFirst=$I,y.lt=VC,y.lte=qC,y.max=Tb,y.maxBy=Db,y.mean=Rb,y.meanBy=kb,y.min=Gb,y.minBy=Mb,y.stubArray=Fc,y.stubFalse=Uc,y.stubObject=Ib,y.stubString=bb,y.stubTrue=wb,y.multiply=$b,y.nth=Z0,y.noConflict=fb,y.noop=$c,y.now=_s,y.pad=FI,y.padEnd=UI,y.padStart=HI,y.parseInt=PI,y.random=NI,y.reduce=eC,y.reduceRight=tC,y.repeat=BI,y.replace=WI,y.result=CI,y.round=Fb,y.runInContext=j,y.sample=rC,y.size=aC,y.snakeCase=zI,y.some=sC,y.sortedIndex=oE,y.sortedIndexBy=iE,y.sortedIndexOf=aE,y.sortedLastIndex=sE,y.sortedLastIndexBy=lE,y.sortedLastIndexOf=cE,y.startCase=jI,y.startsWith=VI,y.subtract=Ub,y.sum=Hb,y.sumBy=Pb,y.template=qI,y.times=Ob,y.toFinite=Lr,y.toInteger=Je,y.toLength=ng,y.toLower=XI,y.toNumber=Vn,y.toSafeInteger=XC,y.toString=vt,y.toUpper=KI,y.trim=ZI,y.trimEnd=QI,y.trimStart=JI,y.truncate=eb,y.unescape=tb,y.uniqueId=Lb,y.upperCase=nb,y.upperFirst=Rc,y.each=Bf,y.eachRight=Wf,y.first=Ff,Mc(y,function(){var i={};return sr(y,function(l,_){mt.call(y.prototype,_)||(i[_]=l)}),i}(),{chain:!1}),y.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){y[i].placeholder=y}),Pn(["drop","take"],function(i,l){it.prototype[i]=function(_){_=_===n?1:Ht(Je(_),0);var C=this.__filtered__&&!l?new it(this):this.clone();return C.__filtered__?C.__takeCount__=Qt(_,C.__takeCount__):C.__views__.push({size:Qt(_,ut),type:i+(C.__dir__<0?"Right":"")}),C},it.prototype[i+"Right"]=function(_){return this.reverse()[i](_).reverse()}}),Pn(["filter","map","takeWhile"],function(i,l){var _=l+1,C=_==me||_==xe;it.prototype[i]=function(O){var A=this.clone();return A.__iteratees__.push({iteratee:Fe(O,3),type:_}),A.__filtered__=A.__filtered__||C,A}}),Pn(["head","last"],function(i,l){var _="take"+(l?"Right":"");it.prototype[i]=function(){return this[_](1).value()[0]}}),Pn(["initial","tail"],function(i,l){var _="drop"+(l?"":"Right");it.prototype[i]=function(){return this.__filtered__?new it(this):this[_](1)}}),it.prototype.compact=function(){return this.filter(In)},it.prototype.find=function(i){return this.filter(i).head()},it.prototype.findLast=function(i){return this.reverse().find(i)},it.prototype.invokeMap=tt(function(i,l){return typeof i=="function"?new it(this):this.map(function(_){return Fi(_,i,l)})}),it.prototype.reject=function(i){return this.filter(gs(Fe(i)))},it.prototype.slice=function(i,l){i=Je(i);var _=this;return _.__filtered__&&(i>0||l<0)?new it(_):(i<0?_=_.takeRight(-i):i&&(_=_.drop(i)),l!==n&&(l=Je(l),_=l<0?_.dropRight(-l):_.take(l-i)),_)},it.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},it.prototype.toArray=function(){return this.take(ut)},sr(it.prototype,function(i,l){var _=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),O=y[C?"take"+(l=="last"?"Right":""):l],A=C||/^find/.test(l);O&&(y.prototype[l]=function(){var M=this.__wrapped__,B=C?[1]:arguments,V=M instanceof it,ae=B[0],se=V||Ke(M),_e=function(ot){var lt=O.apply(y,Fr([ot],B));return C&&Ce?lt[0]:lt};se&&_&&typeof ae=="function"&&ae.length!=1&&(V=se=!1);var Ce=this.__chain__,Ne=!!this.__actions__.length,He=A&&!Ce,et=V&&!Ne;if(!A&&se){M=et?M:new it(this);var Pe=i.apply(M,B);return Pe.__actions__.push({func:us,args:[_e],thisArg:n}),new Wn(Pe,Ce)}return He&&et?i.apply(this,B):(Pe=this.thru(_e),He?C?Pe.value()[0]:Pe.value():Pe)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(i){var l=Ma[i],_=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",C=/^(?:pop|shift)$/.test(i);y.prototype[i]=function(){var O=arguments;if(C&&!this.__chain__){var A=this.value();return l.apply(Ke(A)?A:[],O)}return this[_](function(M){return l.apply(Ke(M)?M:[],O)})}}),sr(it.prototype,function(i,l){var _=y[l];if(_){var C=_.name+"";mt.call(Wo,C)||(Wo[C]=[]),Wo[C].push({name:l,func:_})}}),Wo[rs(n,b).name]=[{name:"wrapper",func:n}],it.prototype.clone=t1,it.prototype.reverse=n1,it.prototype.value=r1,y.prototype.at=DE,y.prototype.chain=RE,y.prototype.commit=kE,y.prototype.next=GE,y.prototype.plant=$E,y.prototype.reverse=FE,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=UE,y.prototype.first=y.prototype.head,Ti&&(y.prototype[Ti]=ME),y},Ho=km();ao?((ao.exports=Ho)._=Ho,Gl._=Ho):Yt._=Ho}).call(lO)}(Zi,Zi.exports)),Zi.exports}var Tt=cO(),W=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(W||{});function bn(t,e,n){n!==void 0&&(t[e]=n)}function uO(t){var e,n,r,o,a,s,c,u,f,h,g,v,m,E;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(f=t.strokeWidth)!=null&&f.editable||(h=t.strokeDasharray)!=null&&h.editable||(g=t.strokeDashoffset)!=null&&g.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable)}function au(t){var n,r,o,a,s,c,u,f,h,g,v,m,E,I,w,b,L,T,k,G,P,z;const e={type:t.type};return bn(e,"n",(n=t.n)==null?void 0:n.value),bn(e,"r",(r=t.r)==null?void 0:r.value),bn(e,"height",(o=t.height)==null?void 0:o.value),bn(e,"width",(a=t.width)==null?void 0:a.value),bn(e,"inset",(s=t.inset)==null?void 0:s.value),bn(e,"angle",(c=t.angle)==null?void 0:c.value),bn(e,"fill",(u=t.fill)==null?void 0:u.value),bn(e,"stroke",(f=t.stroke)==null?void 0:f.value),bn(e,"strokeWidth",(h=t.strokeWidth)==null?void 0:h.value),bn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),bn(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),bn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),bn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),bn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(b=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:b.value,shortenTail:(T=(L=t.linePathOptions)==null?void 0:L.shortenTail)==null?void 0:T.value,bezierRounding:(G=(k=t.linePathOptions)==null?void 0:k.bezierRounding)==null?void 0:G.value,closeLoops:(z=(P=t.linePathOptions)==null?void 0:P.closeLoops)==null?void 0:z.value}),e}function dO(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const _O={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},fO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},gO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},$h={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Fh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},js={type:"Line",strokeWidth:.125,stroke:"gray"},rd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},hO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},vO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},pO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):Ph(t)==="[object Array]"}function mO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function EO(t){return t==null?"":mO(t)}function fr(t){return typeof t=="string"}function Uh(t){return typeof t=="number"}function CO(t){return t===!0||t===!1||IO(t)&&Ph(t)=="[object Boolean]"}function Hh(t){return typeof t=="object"}function IO(t){return Hh(t)&&t!==null}function Gn(t){return t!=null}function jc(t){return!t.trim().length}function Ph(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const bO="Incorrect 'index' type",wO=t=>`Invalid value for key ${t}`,OO=t=>`Pattern length exceeds max of ${t}.`,yO=t=>`Missing ${t} property in key`,LO=t=>`Property 'weight' in key '${t}' must be a positive integer`,Og=Object.prototype.hasOwnProperty;class AO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=Bh(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Bh(t){let e=null,n=null,r=null,o=1,a=null;if(fr(t)||xr(t))r=t,e=yg(t),n=su(t);else{if(!Og.call(t,"name"))throw new Error(yO("name"));const s=t.name;if(r=s,Og.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(LO(s));e=yg(s),n=su(s),a=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:a}}function yg(t){return xr(t)?t:t.split(".")}function su(t){return xr(t)?t.join("."):t}function SO(t,e){let n=[],r=!1;const o=(a,s,c)=>{if(Gn(a))if(!s[c])n.push(a);else{let u=s[c];const f=a[u];if(!Gn(f))return;if(c===s.length-1&&(fr(f)||Uh(f)||CO(f)))n.push(EO(f));else if(xr(f)){r=!0;for(let h=0,g=f.length;h<g;h+=1)o(f[h],s,c+1)}else s.length&&o(f,s,c+1)}};return o(t,fr(e)?e.split("."):e,0),r?n:n[0]}const xO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},NO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},TO={location:0,threshold:.6,distance:100},DO={useExtendedSearch:!1,getFn:SO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ze={...NO,...xO,...TO,...DO};const RO=/[^ ]+/g;function kO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const a=o.match(RO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class od{constructor({getFn:e=ze.getFn,fieldNormWeight:n=ze.fieldNormWeight}={}){this.norm=kO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,fr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();fr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Gn(e)||jc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,a)=>{let s=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Gn(s)){if(xr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(Gn(h))if(fr(h)&&!jc(h)){let g={v:h,i:f,n:this.norm.get(h)};c.push(g)}else xr(h)&&h.forEach((g,v)=>{u.push({nestedArrIndex:v,value:g})})}r.$[a]=c}else if(fr(s)&&!jc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Wh(t,e,{getFn:n=ze.getFn,fieldNormWeight:r=ze.fieldNormWeight}={}){const o=new od({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(Bh)),o.setSources(e),o.create(),o}function GO(t,{getFn:e=ze.getFn,fieldNormWeight:n=ze.fieldNormWeight}={}){const{keys:r,records:o}=t,a=new od({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(o),a}function Cs(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=ze.distance,ignoreLocation:a=ze.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return o?s+c/o:c?1:s}function MO(t=[],e=ze.minMatchCharLength){let n=[],r=-1,o=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(o=a-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const po=32;function $O(t,e,n,{location:r=ze.location,distance:o=ze.distance,threshold:a=ze.threshold,findAllMatches:s=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,includeMatches:u=ze.includeMatches,ignoreLocation:f=ze.ignoreLocation}={}){if(e.length>po)throw new Error(OO(po));const h=e.length,g=t.length,v=Math.max(0,Math.min(r,g));let m=a,E=v;const I=c>1||u,w=I?Array(g):[];let b;for(;(b=t.indexOf(e,E))>-1;){let z=Cs(e,{currentLocation:b,expectedLocation:v,distance:o,ignoreLocation:f});if(m=Math.min(z,m),E=b+h,I){let X=0;for(;X<h;)w[b+X]=1,X+=1}}E=-1;let L=[],T=1,k=h+g;const G=1<<h-1;for(let z=0;z<h;z+=1){let X=0,te=k;for(;X<te;)Cs(e,{errors:z,currentLocation:v+te,expectedLocation:v,distance:o,ignoreLocation:f})<=m?X=te:k=te,te=Math.floor((k-X)/2+X);k=te;let de=Math.max(1,v-te+1),ee=s?g:Math.min(v+te,g)+h,le=Array(ee+2);le[ee+1]=(1<<z)-1;for(let me=ee;me>=de;me-=1){let Ee=me-1,xe=n[t.charAt(Ee)];if(I&&(w[Ee]=+!!xe),le[me]=(le[me+1]<<1|1)&xe,z&&(le[me]|=(L[me+1]|L[me])<<1|1|L[me+1]),le[me]&G&&(T=Cs(e,{errors:z,currentLocation:Ee,expectedLocation:v,distance:o,ignoreLocation:f}),T<=m)){if(m=T,E=Ee,E<=v)break;de=Math.max(1,2*v-E)}}if(Cs(e,{errors:z+1,currentLocation:v,expectedLocation:v,distance:o,ignoreLocation:f})>m)break;L=le}const P={isMatch:E>=0,score:Math.max(.001,T)};if(I){const z=MO(w,c);z.length?u&&(P.indices=z):P.isMatch=!1}return P}function FO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class zh{constructor(e,{location:n=ze.location,threshold:r=ze.threshold,distance:o=ze.distance,includeMatches:a=ze.includeMatches,findAllMatches:s=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,isCaseSensitive:u=ze.isCaseSensitive,ignoreLocation:f=ze.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(v,m)=>{this.chunks.push({pattern:v,alphabet:FO(v),startIndex:m})},g=this.pattern.length;if(g>po){let v=0;const m=g%po,E=g-m;for(;v<E;)h(this.pattern.substr(v,po),v),v+=po;if(m){const I=g-po;h(this.pattern.substr(I),I)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:o,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],g=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:w})=>{const{isMatch:b,score:L,indices:T}=$O(e,E,I,{location:o+w,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});b&&(v=!0),g+=L,b&&T&&(h=[...h,...T])});let m={isMatch:v,score:v?g/this.chunks.length:1};return v&&r&&(m.indices=h),m}}class Qr{constructor(e){this.pattern=e}static isMultiMatch(e){return Lg(e,this.multiRegex)}static isSingleMatch(e){return Lg(e,this.singleRegex)}search(){}}function Lg(t,e){const n=t.match(e);return n?n[1]:null}class UO extends Qr{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class HO extends Qr{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class PO extends Qr{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class BO extends Qr{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class WO extends Qr{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class zO extends Qr{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Yh extends Qr{constructor(e,{location:n=ze.location,threshold:r=ze.threshold,distance:o=ze.distance,includeMatches:a=ze.includeMatches,findAllMatches:s=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,isCaseSensitive:u=ze.isCaseSensitive,ignoreLocation:f=ze.ignoreLocation}={}){super(e),this._bitapSearch=new zh(e,{location:n,threshold:r,distance:o,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class jh extends Qr{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,o.push([r,n-1]);const s=!!o.length;return{isMatch:s,score:s?0:1,indices:o}}}const lu=[UO,jh,PO,BO,zO,WO,HO,Yh],Ag=lu.length,YO=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,jO="|";function VO(t,e={}){return t.split(jO).map(n=>{let r=n.trim().split(YO).filter(a=>a&&!!a.trim()),o=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,f=-1;for(;!u&&++f<Ag;){const h=lu[f];let g=h.isMultiMatch(c);g&&(o.push(new h(g,e)),u=!0)}if(!u)for(f=-1;++f<Ag;){const h=lu[f];let g=h.isSingleMatch(c);if(g){o.push(new h(g,e));break}}}return o})}const qO=new Set([Yh.type,jh.type]);class XO{constructor(e,{isCaseSensitive:n=ze.isCaseSensitive,includeMatches:r=ze.includeMatches,minMatchCharLength:o=ze.minMatchCharLength,ignoreLocation:a=ze.ignoreLocation,findAllMatches:s=ze.findAllMatches,location:c=ze.location,threshold:u=ze.threshold,distance:f=ze.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=VO(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];s.length=0,a=0;for(let g=0,v=h.length;g<v;g+=1){const m=h[g],{isMatch:E,indices:I,score:w}=m.search(e);if(E){if(a+=1,c+=w,r){const b=m.constructor.type;qO.has(b)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let g={isMatch:!0,score:c/a};return r&&(g.indices=s),g}}return{isMatch:!1,score:1}}}const cu=[];function KO(...t){cu.push(...t)}function uu(t,e){for(let n=0,r=cu.length;n<r;n+=1){let o=cu[n];if(o.condition(t,e))return new o(t,e)}return new zh(t,e)}const Ss={AND:"$and",OR:"$or"},du={PATH:"$path",PATTERN:"$val"},_u=t=>!!(t[Ss.AND]||t[Ss.OR]),ZO=t=>!!t[du.PATH],QO=t=>!xr(t)&&Hh(t)&&!_u(t),Sg=t=>({[Ss.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Vh(t,e,{auto:n=!0}={}){const r=o=>{let a=Object.keys(o);const s=ZO(o);if(!s&&a.length>1&&!_u(o))return r(Sg(o));if(QO(o)){const u=s?o[du.PATH]:a[0],f=s?o[du.PATTERN]:o[u];if(!fr(f))throw new Error(wO(u));const h={keyId:su(u),pattern:f};return n&&(h.searcher=uu(f,e)),h}let c={children:[],operator:a[0]};return a.forEach(u=>{const f=o[u];xr(f)&&f.forEach(h=>{c.children.push(r(h))})}),c};return _u(t)||(t=Sg(t)),r(t)}function JO(t,{ignoreFieldNorm:e=ze.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:a,score:s})=>{const c=o?o.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function ey(t,e){const n=t.matches;e.matches=[],Gn(n)&&n.forEach(r=>{if(!Gn(r.indices)||!r.indices.length)return;const{indices:o,value:a}=r;let s={indices:o,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function ty(t,e){e.score=t.score}function ny(t,e,{includeMatches:n=ze.includeMatches,includeScore:r=ze.includeScore}={}){const o=[];return n&&o.push(ey),r&&o.push(ty),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return o.length&&o.forEach(u=>{u(a,c)}),c})}class li{constructor(e,n={},r){this.options={...ze,...n},this.options.useExtendedSearch,this._keyStore=new AO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof od))throw new Error(bO);this._myIndex=n||Wh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Gn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,o-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=fr(e)?fr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return JO(u,{ignoreFieldNorm:c}),a&&u.sort(s),Uh(n)&&n>-1&&(u=u.slice(0,n)),ny(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=uu(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:a,i:s,n:c})=>{if(!Gn(a))return;const{isMatch:u,score:f,indices:h}=n.searchIn(a);u&&o.push({item:a,idx:s,matches:[{score:f,value:a,norm:c,indices:h}]})}),o}_searchLogical(e){const n=Vh(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:g,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:v});return m&&m.length?[{idx:f,item:u,matches:m}]:[]}const h=[];for(let g=0,v=c.children.length;g<v;g+=1){const m=c.children[g],E=r(m,u,f);if(E.length)h.push(...E);else if(c.operator===Ss.AND)return[]}return h},o=this._myIndex.records,a={},s=[];return o.forEach(({$:c,i:u})=>{if(Gn(c)){let f=r(n,c,u);f.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),f.forEach(({matches:h})=>{a[u].matches.push(...h)}))}}),s}_searchObjectList(e){const n=uu(e,this.options),{keys:r,records:o}=this._myIndex,a=[];return o.forEach(({$:s,i:c})=>{if(!Gn(s))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:s[h],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!Gn(n))return[];let o=[];if(xr(n))n.forEach(({v:a,i:s,n:c})=>{if(!Gn(a))return;const{isMatch:u,score:f,indices:h}=r.searchIn(a);u&&o.push({score:f,key:e,value:a,idx:s,norm:c,indices:h})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:f}=r.searchIn(a);c&&o.push({score:u,key:e,value:a,norm:s,indices:f})}return o}}li.version="7.0.0";li.createIndex=Wh;li.parseIndex=GO;li.config=ze;li.parseQuery=Vh;KO(XO);function Kr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function ry(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function oy(t){return new li(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function iy(t,e,n){const r=ry(e,n);return t.length===0?r:oy(r).search(t).map(o=>o.item)}function ay(t,e){return Kr(t,e).shape}function wn(t,e){const n=ay(t,e);return n?au(n):void 0}function ga(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return nd(e)}function ha(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return nd(o)})}function sy(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return nd(a)})})}function Jr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function qh(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Dh(e)}function ly(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Dh(r)})}function cy(t,e){const n=t.shape;return n===void 0?void 0:{...wn(e,$t),...n}}function Xh(t,e,n){return{toolId:t,cells:e,value:n}}function uy(t,e){const n=ha(e,"cells"),r=Jr(e);return Xh(t,n,r)}function Kh(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>qe(a,e)&&s>=r)}function dy(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:Ws(r[o-1],e)))return t;const s=Kh(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Zh(t,e){return{toolId:t,cells:e,lines:[]}}function _y(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),As(n),{...t,cells:n};const r=n.some(a=>qe(a,e)),o=n.some(a=>Ws(a,e));return n.length===1&&!r&&o?(n.push(e),As(n),{...t,cells:n}):t}function fy(t,e){const n=t.cells.some(u=>qe(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return fu(t,e);const o=t.lines[r-1],a=o.length;if(a===0&&!n)return t;if(a===0&&n)return fu(t,e);const s=Kh(o,e,!1);return(o.length===0?!0:Ws(o[a-1],e))?s>=0?(o.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),o]}):n?t:(o.push(e),{...t,lines:[...t.lines.slice(0,r-1),o]}):t}function fu(t,e){return t.cells.some(r=>qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function gy(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function hy(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function vy(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function py(t,e){const n=ha(e,"cells"),r=sy(e),o=Zh(t,n);return o.lines=r,o}function Qh(t,e,n=""){return{toolId:t,cells:e,value:n}}function my(t,e,n=!1){const r=Mh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function Ey(t,e){return{...t,value:e}}function Cy(t,e){const n=ha(e,"cells"),r=Jr(e);return Qh(t,n,r)}function Jh(t,e,n){return{toolId:t,cells:e,value:n}}function Iy(t,e){const n=ha(e,"cells"),r=Jr(e);return Jh(t,n,r)}function ev(t,e,n){return{toolId:t,cells:e,value:n}}function by(t,e){const n=ha(e,"cells"),r=Jr(e);return ev(t,n,r)}function tv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function wy(t,e){const n=ga(e),r=qh(e),o=Jr(e);return tv(t,n,r,o)}function nv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function Oy(t,e){const n=ga(e),r=Jr(e);return nv(t,n,r)}function rv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function yy(t,e){const n=ga(e),r=qh(e);return rv(t,n,r)}function ov(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function Ly(t,e){const n=ga(e),r=ly(e),o=ov(t,n,Be.N);return o.directions=r,o}function iv(t,e,n=""){return{toolId:t,cell:e,value:n}}function Ay(t,e){const n=ga(e),r=Jr(e);return iv(t,n,r)}function Sy(t,e=""){return{toolId:t,value:e}}function xy(t,e){const n=Jr(e);return Sy(t,n)}function va(t,e){return{...t,value:e}}class pa extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const o=this.get(e);o&&(o[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o[n]&&(o[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const a of Object.values(r))o.push(Fy(a));o.length&&(e[n]=o)}return e}static fromJson(e){const n=new pa;if(!e)return n;for(const[r,o]of Object.entries(e)){const a=Nh(r);if(a===void 0||!Object.keys($t).includes(a))continue;const s=o;for(const c of s){let u=null;if(Th(a,Bs)?u=Oy(a,c):qu(a)?u=yy(a,c):Xu(a)?u=Ly(a,c):Ku(a)?u=by(a,c):Ah(a)?u=Iy(a,c):Zu(a)?u=uy(a,c):Qu(a)?u=py(a,c):Ju(a)?u=Cy(a,c):la(a)?u=wy(a,c):Zw(a)?u=xy(a,c):Sh(a)&&(u=Ay(a,c)),u!==null){n.addToDict(a);const f=Tt.uniqueId(),h=cy(c,a);u.shape=h,n.addConstraint(a,f,u)}}}return n}}function id(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(qe(a.cell,n))return[s,a]}return null}function Ny(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(n.every(c=>a.cells.some(u=>qe(c,u))))return o}return null}function Ty(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=a.cells[a.cells.length-1];if(qe(n,s))return o}return null}function xg(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n)))return[o[0],a]}return null}function Dy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r))if(o[1].cells.some(c=>qe(c,n)))return o;return null}function Ng(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n)))return[o[0],a]}return null}function Ry(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((f,h)=>qe(f,n)&&h>0));if(c>=0)return{id:o,arrow:s,matchLineIdx:c}}return null}function ky(t,e,n,r){const o=t.get(e);if(!o)return null;for(const a of Object.entries(o)){const s=a[1],c=a[0];if(qe(n,s.cell)&&r===s.direction)return c}return null}function Gy(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1],s=o[0];if(qe(n,a.cell))return s}return null}function My(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r)){const a=o[1];if(a.cells.some(c=>qe(c,n))||a.cells2.some(c=>qe(c,n)))return[o[0],a]}return null}function $y(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n)){const a=o[1];r.add(a.value)}return r}function Fy(t){const e={};if("cells"in t){const n=t.cells.map(r=>ms(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ms(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>ms(o)));e.lines=n}if("cell"in t){const n=ms(t.cell);e.cell=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=wn(t.toolId,$t),r=dO(t.shape,n);r&&(e.shape=r)}return e}function Tg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function av(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function gu(t){const e=new Option().style;return e.color=t,e.color!==""}function Vc(t){return av(t)||gu(t)?t:gu(`#${t}`)?`#${t}`:void 0}function xs(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function sv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function hu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}function Uy(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Dg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function Hy(t){return t in Dg?Dg[t]:null}function lv(t,e,n){if(n===null)return null;const r=Hy(n);if(r===null)return null;const[o,a]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/a)}function qc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class Py{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=qc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=qc(this.cornerMarks,e))}enterHighlight(e){this.highlights=qc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==lv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ma{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const a=[];for(let s=0;s<n;s++){const c=new Py(o,s);if(r){const u=lv(o,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[a,s]=[e.r+o[0],e.c+o[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const a=e.r+o[0],s=e.c+o[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return sv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),a=o.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:a,c:s}=Ys(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const f=this.grid[c][u];o.push(f),[c,u]=[c+a,u+s]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new ma(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=o.getCell(a,s);u&&Object.assign(u,c)}return o}}function By(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols;const a=Math.min(e.nRows,e.nCols),s=Tt.range(1,a+1);t.valid_digits&&!Uy(s,t.valid_digits)&&(o.valid_digits=t.valid_digits),o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(o.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(o.local_constraints=u),o}function Wy(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,o=t.valid_digits,a=t.grid,s=ma.fromJSON(e,n,a),c=Math.min(s.nRows,s.nRows);let u=Tt.range(1,c+1);o!==void 0&&(u=o);const f=t.solution,h=t.local_constraints,g=pa.fromJson(h),v=t.bool_constraints,m=ni.fromJson(v);return{puzzleMeta:r,solution:f,grid:s,valid_digits:u,localConstraints:g,globalConstraints:m}}var Qi=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Qi||{});const zy=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),Yy=()=>({type:"CLEAR"}),jy=t=>({type:"DRAG",payload:t}),vu=t=>({type:"SET",payload:t}),Vy=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),ad=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),_r=(t,e,n)=>{const r=[...t];return As(r),{cells:r,lastCell:e,mode:n}};function qy(t,e,n){if(e===null)return ad();if(n==="RESETTING")return _r([e],e,"SELECTING");const r=t.cells.findIndex(o=>qe(e,o));if(n==="SELECTING")return r!==-1?t:_r([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),_r(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return _r([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),_r(o,null,"DESELECTING")}return t}function Xy(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:_r([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),_r(r,null,t.mode)}return t}function Ky(t,e){return{...t,cells:e}}function Zy(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>qe(e,o))!==-1?_r([...t.cells],e,"SELECTING"):_r([...t.cells,e],e,"SELECTING"):_r([e],e,t.mode)}function cv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return ad();case"SET":return Ky(t,e.payload);case"CLICK":return qy(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return Xy(t,e.payload);case"ARROW_KEY":return Zy(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Jo(t,e){return qe(t.p1,e.p1)&&qe(t.p2,e.p2)||qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function Qy(t,e){return qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function uv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!qe(t,e)}class Vs{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>qe(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Jo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>Jo(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&Qy(r,e)&&this.draftLine.splice(n,1)}onDrag(e){uv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>Jo(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(a=>Jo(a,r));if(o!==-1){const a=this.lineMarkers.splice(o,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Vs;return Object.assign(e,this),e}}const Rg=t=>({type:"ADD_EDGE_MARKER",payload:t}),kg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Is=t=>({type:"ADD_CELL_MARKER",payload:t}),Jy=t=>({type:"SET_CELL_MARKERS",payload:t}),Gg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),eL=t=>({type:"DRAG",payload:t}),ca=t=>({type:"ADD_LINE_MARKERS",payload:t}),Mg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),sd=()=>({type:"RESET"});function tL(t,e){switch(e.type){case"RESET":return new Vs;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function dv(){return{_undoStack:[],_redoStack:[]}}const ci=Ft(dv());function nL(){ci.update(()=>dv())}function un(t,e=!0){ci.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function rL(t,e=!0){ci.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function _v(){ci.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function fv(){ci.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ns=Ft(new Vs);function gr(t){Ns.update(e=>tL(e,t))}const Ts=Ft(1);function vo(t,e){return{execute:()=>{gr(t)},unExecute:()=>{gr(e)}}}const bo=Ft(ad());function Zo(t){t&&bo.update(e=>cv(e,t))}function $g(t){t&&bo.update(e=>cv(e,t))}function oL(t,e){return{execute:()=>{$g(t)},unExecute:()=>{$g(e)}}}const ri=Ft(),qs=Ft(si.SETTING),pu=Ft(!1),Xt=Ft(d.DIGIT),gv=Ft(d.DIGIT),ld=Ft(Tt.range(1,10)),_n=Ft(new ma(9,9)),dn=Ft(ct(_n).getAllCells()),Nr=Ft({}),Tr=Ft(new ni),rt=Ft(new pa),hr=Ft(null),hv=Ft(void 0),Xs=Ft(void 0);function iL(t){Nr.update(()=>t)}function ui(t){hr.update(()=>t)}function cd(t){hv.update(()=>t)}function Sr(t){ct(Xt)!==t&&(Xt.update(()=>t),ui(null))}function aL(){const t=ct(gv);t&&Sr(t)}function mu(t){gv.update(()=>t)}function sL(t){ct(Xt)===t&&Sr(d.DIGIT)}function lL(t){rt.update(e=>(e.removeFromDict(t),e)),cd(void 0)}function Pt(t,e,n){rt.update(r=>(r.updateConstraint(t,e,n),r)),ui({id:e,constraint:n})}function Xc(t){const e=ct(hr);if(t=t?{...t}:void 0,cd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Pt(r,e.id,n)}function cL(t,e){const r=ct(rt).get(e);if(!r)return;const o=r[t];o&&ui({id:t,constraint:o})}function uL(t,e,n){const r=new ma(t,e);_n.update(()=>r),ld.update(()=>n),rt.update(()=>new pa),Tr.update(()=>new ni),Nr.update(()=>({})),ud(void 0),dn.update(()=>r.getAllCells())}function dL(t){_n.update(()=>t.grid),Nr.update(()=>t.puzzleMeta),ud(t.solution),ld.update(()=>t.valid_digits),rt.update(()=>t.localConstraints),Tr.update(()=>t.globalConstraints),dn.update(()=>t.grid.getAllCells())}function vv(){const t=ct(_n);t.resetValues(),_n.update(()=>t),dn.update(()=>t.getAllCells()),gr(sd())}function Ds(){nL(),gr(sd()),Sr(d.DIGIT);const t=Yy();Zo(t),cd(void 0),ui(null)}const pv=fn([Wt,Xt,qs],([t,e,n])=>{const r=t.hideFog,o=e;return![d.FOG,d.REGIONS].includes(o)&&!r&&n===si.SETTING}),Ea=fn([_n,Nr,Tr,rt,Xs,ld],([t,e,n,r,o,a])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function ud(t){Xs.update(()=>t)}var Qo=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Qo||{});const dd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),_d=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),_L=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),fL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Fg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function mv(t){rt.update(e=>(e.addToDict(t),e))}function eo(t,e){const n=ct(hv);n&&(e.shape={...n}),rt.update(r=>(r.addConstraint(e.toolId,t,e),r)),ui({id:t,constraint:e})}function wo(t,e){e&&rt.update(n=>(n.removeConstraint(t,e),n))}function gL(t,e){rt.update(n=>(n.setConstraints(t,e),n))}function Ug(t){t.type===Qo.ADD_LOCAL_CONSTRAINT?eo(t.payload.id,t.payload.constraint):t.type===Qo.REMOVE_LOCAL_CONSTRAINT?wo(t.payload.tool,t.payload.id):t.type===Qo.REMOVE_LOCAL_CONSTRAINT_GROUP?lL(t.payload.tool):t.type===Qo.RESTORE_LOCAL_CONSTRAINT_GROUP?gL(t.payload.tool,t.payload.constraints):t.type===Qo.UPDATE_LOCAL_CONSTRAINT&&Pt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ca(t,e){return{execute:()=>{Ug(t)},unExecute:()=>{Ug(e)}}}class Re{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Re(this.x+e.x,this.y+e.y)}subtract(e){return new Re(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Re(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Re(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function hL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const $n=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Re(o.x,o.y)};function ys(t,e=!0,n=.5){const r=zs(t),o=new Re(r.c+.5,r.r+.5),a=t.distance(o);return!e||a<n?{cell:r,dist:a}:null}function Ev(t,e=!0,n=.5){const r=zs(t),o=new Re(r.c+.5,r.r+.5),a=t.distance(o),s={r:o.y,c:o.x};return!e||a<n?{cellCenter:s,dist:a}:null}function ea(t,e=!0,n=.5){const r=zs(t),o=oO(r),s=o.map(h=>new Re(h.c,h.r)).map(h=>h.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],f=s[c];return!e||f<n?{corner:u,dist:f,idx:c}:null}function ta(t,e=!0,n=.5){const r=zs(t),o=iO(r),s=o.map(h=>new Re(h.c,h.r)).map(h=>h.distance(t)),c=s.indexOf(Math.min(...s)),u=o[c],f=s[c];return!e||f<n?{edge:u,dist:f,idx:c}:null}function Kc(t,e=!0,n=.5){const r=ta(t,!1);if(!r)return null;const o=ea(t,!1);if(!o)return null;const a=Ev(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,o.corner],u=s.map(I=>new Re(I.c,I.r)).map(I=>I.distance(t)),f=Math.min(...u),h=u.findIndex(I=>I===f),g=s[h],m=["cell center","edge","corner"][h],E={cellCenter:a.cellCenter,edge:r.edge,corner:o.corner,dist:f,target:g,type:m};return!e||f<n?E:null}class di{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,o=$n(e,n);if(!o)return;this._prevPoint=o;const a=ys(o,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=ys(r,!0,this._margin);if(!o)return;const a=o.cell;if(this._prevCell&&qe(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=$n(e,n);if(!r)return;const o=ys(r,!1);if(!o)return;const a=o.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Hg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function vL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function Pg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function Bg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function pL(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===d.HIGHLIGHTS&&o.highlights.length?Hg(o,e):o.value!==null?vL(o,e):n===d.CORNER_PM&&o.cornerMarks.length?Pg(o,e):n===d.CENTER_PM&&o.centerMarks.length?Bg(o,e):o.cornerMarks.length?Pg(o,e):o.centerMarks.length?Bg(o,e):o.highlights.length?Hg(o,e):r:r}function to(t,e,n,r=!1){if(!(t&&e))return;const o=dd(t,e),a=_d(t,n),s=Ca(o,a);un(s,r)}function Lo(t,e,n,r=!0){if(!(t&&e))return;const o=_d(t,n),a=dd(t,e),s=Ca(o,a);un(s,r)}function Eu(t,e,n,r,o=!1){if(!(t&&n&&e))return;const a=Fg(r,t,n),s=Fg(r,t,e),c=Ca(a,s);un(c,o)}function Ks(t,e,n){const r=new di,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,f=!1,h;(E=>{E.DYNAMIC="DYNAMIC",E.BULB="BULB",E.BODY="BODY"})(h||(h={}));let g="DYNAMIC";function v(E){u=!1;const I=E.cell;if(qt(E.cell,o)){if(g==="DYNAMIC"){const b=ct(rt),L=Ry(b,n,I);if(L){const k=vy(L.arrow,L.matchLineIdx);Eu(L.id,L.arrow,k,n,!0),f=!0;return}const T=Ng(b,n,I);if(!T)u=!0,g="BULB",c=null,a=null;else{g="BODY",c=T[0],a=T[1],a=fu(a,I),Pt(n,c,a);return}}if(g==="BULB"&&!c){c=Tt.uniqueId(),a=Zh(n,[I]),eo(c,a);return}else g==="BULB"&&c&&a?(a=_y(a,I),Pt(n,c,a)):g==="BODY"&&c&&a&&(a=fy(a,I),Pt(n,c,a))}}return r.onDragStart=E=>{g="DYNAMIC",v(E)},r.onDrag=E=>{v(E)},r.onDragEnd=()=>{if(f){f=!1;return}g==="BODY"&&c&&a?gy(a)?(a=hy(a),Pt(n,c,a)):(Eu(c,s,a,n),s=a):g==="BULB"&&(to(c,a,n),s=a),g="DYNAMIC"},r.onTap=E=>{if(u)return;const I=E.cell,w=ct(rt);if(Ng(w,n,I)){Lo(c,a,n);return}},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}var Y=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(Y||{});const Zs=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,On=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Qs=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,mL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,tn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,_i=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,fd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,EL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,CL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,IL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,fi=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,bL=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,wL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,OL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function yL(t){return qu(t)?EL():Xu(t)?CL():t===d.XV?wL():Ku(t)?IL():Ju(t)?Zs():Qu(t)?Qs():la(t)?mL():Zu(t)?De():xh(t)?OL():""}const LL={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:d.ARROW,order:Y.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Qs(),tags:[],categories:[R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL]}},AL={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:d.AVERAGE_ARROW,order:Y.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Qs(),tags:[],categories:[R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL]}};d.SQUARE_ROOT_ARROW,Y.ARROW_TOOLS,W.LINE,Qs(),R.ARROW_CONSTRAINT,R.LOCAL_CONSTRAINT,R.ARROW_TOOL;function SL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function xL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function NL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function TL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function DL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const RL={Delete:null,Backspace:null};function kL(t,e=10){if(t in RL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function GL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function ML(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function $L(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function FL(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Cv(t){return t==="Backspace"}function gi(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Cv(t.key))}function UL(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function HL(t){return UL(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function PL(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ao(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z]*?/,f=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${f.source}$`,"i").test(t))}function Dr(t,e,n){if(t===void 0)return t;let r=t;return Cv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function zt(t,e,n,r){const o=new di,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function h(m){const E=ct(rt),I=m.cell;if(qt(m.cell,a)){if(m.event.shiftKey){const b=xg(E,n,I);b&&(c=b[0],s=b[1],ui({id:c,constraint:s}),f=1)}if(f===0){const b=xg(E,n,I);if(f=b?2:1,b){Lo(b[0],b[1],n);return}}if(!s&&f===1){s=Qh(n,[I]),c=Tt.uniqueId(),eo(c,s);return}else if(s&&c&&f===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=my(s,I,b),Pt(n,c,s);return}}}function g(m){const E=ct(hr);if(!E)return;let I=E.constraint;const w=E.id;if(I.value===void 0||!gi(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(I==null?void 0:I.value,m.key);b!==void 0&&b!==I.value&&(I=Ey(I,b),Pt(n,w,I))}return o.onDragStart=m=>{c=null,s=null,f=0,h(m)},o.onDrag=m=>{h(m)},o.onDragEnd=()=>{c&&s&&to(c,s,n),c=null},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:m=>{o.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const gd=[R.CAGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CAGE_TOOL],yn=[R.CAGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CAGE_TOOL];function gn(t,e=5){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function hn(t,e,n){return Dr(t,e,n)}const vn={type:W.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},BL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},WL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.UNIQUE_DIGITS_CAGE,order:Y.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:On(),tags:[],categories:yn}},zL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.INVERTED_KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:On(),tags:[],categories:yn}},YL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:On(),tags:[],categories:yn}},jL={getInputHandler(t,e,n){return zt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE_LOOK_AND_SAY,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Zs(),tags:[],categories:gd}},VL={getInputHandler(t,e,n){return zt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.PARITY_BALANCE_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Zs(),tags:[],categories:gd}},qL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DIVISIBLE_KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:On(),tags:[],categories:yn}},XL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SPOTLIGHT_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:On(),tags:[],categories:yn}},KL={getInputHandler(t,e,n){return zt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:d.PUTTERIA_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Zs(),tags:[],categories:gd}};d.KILLER_CAGE_LOOK_AND_SAY,Y.CAGE_TOOLS,On();const ZL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.MULTISET_CAGE,order:Y.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:On(),tags:[],categories:yn}},QL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.VAULTED_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:On(),tags:[],categories:yn}};d.AQUARIUM_CAGE,Y.CAGE_TOOLS,On();const JL={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:On(),tags:[],categories:yn}},eA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:On(),tags:[],categories:yn}},tA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DOUBLERS_KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},nA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.NEGATORS_KILLER_CAGE,order:Y.CAGE_TOOLS,shape:vn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:On(),tags:[],categories:yn}};var Rn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Rn||{});const rA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Iv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),oA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),iA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),aA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),sA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),lA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),cA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Zc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),uA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Qc=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Js=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function dA(t,e,n){if(e===d.DIGIT){const r=t.map(s=>s.value),o=rA(t,n),a=Iv(t,r);return[o,a]}if(e===d.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),a=oA(t,n),s=iA(t,r,o);return[a,s]}if(e===d.REGIONS){const r=t.map(s=>s.region),o=aA(t,n),a=sA(t,r);return[o,a]}if(e===d.FOG){const r=t.map(c=>c.fog),a=lA(t,n===1),s=cA(t,r);return[a,s]}if(e===d.HIGHLIGHTS&&n!==null){const r=Qc(t,n),o=Qc(t,n);return[r,o]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),o=Qc(t,n),a=Js(t,r);return[o,a]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=Zc(t,n,e),o=Zc(t,n,e);return[r,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const o=Zc(t,n,e),a=uA(t,r,e);return[o,a]}}function Yi(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),dn.update(o=>o)}function oi(t){switch(t.type){case Rn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;Yi(e,d.DIGIT,n,!0);break}case Rn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;Yi(e,d.GIVEN,n,!0);break}case Rn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;Yi(e,d.REGIONS,n,!0);break}case Rn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;Yi(e,d.HIGHLIGHTS,n,!0);break}case Rn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;Yi(e,r,n,!0);break}case Rn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];dn.update(r=>r);break}case Rn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];dn.update(o=>o);break}case Rn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];dn.update(r=>r);break}case Rn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];dn.update(r=>r);break}case Rn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===d.CENTER_PM?e[o].centerMarks=r[o]:n===d.CORNER_PM&&(e[o].cornerMarks=r[o]);dn.update(o=>o);break}case Rn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),dn.update(r=>r);break}case Rn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];dn.update(r=>r);break}}}function _A(t,e){return{execute:()=>{oi(t)},unExecute:()=>{oi(e)}}}const Ko=new di;function Wg(t,e){return t.shiftKey?Qi.SELECTING:t.ctrlKey||t.metaKey||e?Qi.DYNAMIC:t.altKey?Qi.DESELECTING:Qi.RESETTING}function ua(t,e,n,r,o=!1){switch(e){case d.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case d.DIGIT:return t.filter(s=>!(o&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case d.CORNER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(s=>!(o&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case d.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function fA(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=o=>o===d.CORNER_PM||o===d.CENTER_PM||o===d.DIGIT;for(const o of n){const a=ua(t,o,"any",-1,r(o));if(a.length)return{tool:o,cells:a}}return{tool:e,cells:[]}}function na(t,e,n,r){const o=dA(e,n,r);if(o){const a=o[0],s=o[1],c=_A(a,s),u=vu(t),h=[oL(u,u),c];rL(h)}}function gA(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const o=ua(e,r,"any",-1,!1);if(o.length)return na(n,o,r,t),!0}else{const o=ua(e,r,"different",t,!0);if(o.length)return na(n,o,r,t),!0}return!1}function no(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};Ko.onTap=m=>{if(m.tapCount!==2)return;const I=qt(m.cell,o)?m.cell:null;if(!I)return;const w=pL(I,e,n),b=vu(w);Zo(b)},Ko.onDragStart=m=>{const E=qt(m.cell,o),I=ct(pu),w=Wg(m.event,I),b=E?m.cell:null,L=zy(b,w);Zo(L)},Ko.onDrag=m=>{const I=qt(m.cell,o)?m.cell:null,w=jy(I);Zo(w)};function a(m){if(!TL(m))return!1;const E=e.getAllCells().map(w=>({r:w.r,c:w.c})),I=vu(E);return Zo(I),!0}function s(m){if(!ML(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=FL(m);return Sr(E),!0}return m.type==="keyup"?(aL(),!0):!1}function c(m){if(!GL(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Sr(I),mu(I),!0}else{const E=$L(m.code);return Sr(E),mu(E),!0}}function u(m){if(!HL(m))return!1;const E=ct(bo).lastCell;let I=null;if(E!==null){const[L,T]=PL(m),[k,G]=[Tg(E.r+T,0,o.nRows-1),Tg(E.c+L,0,o.nCols-1)];I={r:k,c:G}}else I={r:0,c:0};const w=Wg(m,!1),b=Vy(I,w);return Zo(b),!0}function f(m){const E=kL(m);if(E===void 0)return!1;const I=ct(bo).cells,w=[];if(I.forEach(b=>{const L=e.getCell(b.r,b.c);L&&w.push(L)}),n===d.FOG)return gA(E,w,I);if(E===null){const{tool:b,cells:L}=fA(w,n);if(L.length)return na(I,L,b,E),!0}else{let b=ua(w,n,"different",E,!0);if(b.length)return na(I,b,n,E),!0;if(b=ua(w,n,"equal",E,!0),b.length)return na(I,b,n,E),!0}return!1}function h(m){return m.repeat?!1:f(m.key)}const g=Tt.throttle(m=>{Ko.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&Ko.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){Ko.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||h(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){f(m.currentTarget.value)}}}class hA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=$n(e,n);if(!r)return;const o=Kc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._prevType=o.type,this._prevCoords=o.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=Kc(r,!1);if(!o||this._prevCoords&&qe(this._prevCoords,o.target))return;this._isTap=!1;const a={coords:o.target,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&uv(this._prevCoords,o.target)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=o.type,this._prevCoords=o.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=$n(e,n);if(!r)return;const o=Kc(r,!1);if(!o)return;const a={coords:o.target,type:o.type};this._isTap&&this._prevCoords&&qe(this._prevCoords,o.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function vA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new hA;return r.onTap=a=>{const s=a.coords,c=ct(Ts),u=ct(Ns);if(a.type==="cell center"){if(!nO(s,n))return;const h=u.getCellMarker(s);if(h)if(h.marker==="X"){const g={...s,colorId:c,marker:"O"},v=Is(g),m=Is(h),E=vo(v,m);un(E)}else{const g=Gg(s),v=Is(h),m=vo(g,v);un(m)}else{const g={...s,colorId:c,marker:"X"},v=Is(g),m=Gg(s),E=vo(v,m);un(E)}}else if(a.type==="edge"){const f=u.getEdgeMarker(s);if(f){const h=kg(s),g=Rg(f),v=vo(h,g);un(v)}else{const h={...s,colorId:c},g=Rg(h),v=kg(s),m=vo(g,v);un(m)}}},r.onDrag=a=>{const s=a.coords,c=ct(Ts);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},f=eL(u);gr(f)}},r.onDragEnd=()=>{const a=ct(Ns);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>Jo(c,u)));if(s.length){const c=ca(s),u=Mg(s),f=vo(c,u);un(f)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>Jo(c,u)));if(s.length){const c=Mg(s),u=ca(s),f=vo(c,u);un(f)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const pA={getInputHandler:no,toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[R.CELL_INPUT_TOOL]}},mA={getInputHandler:no,toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[R.CELL_INPUT_TOOL]}},EA={getInputHandler:no,toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[R.CELL_INPUT_TOOL]}},CA={getInputHandler:no,toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[R.CELL_INPUT_TOOL]}},IA={getInputHandler:no,toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[R.CELL_INPUT_TOOL]}},bA={getInputHandler:no,toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[R.CELL_INPUT_TOOL]}},wA={getInputHandler:no,toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[R.CELL_INPUT_TOOL]}},OA={getInputHandler:no,toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[R.CELL_INPUT_TOOL]}},yA={getInputHandler:vA,toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var ht=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(ht||{});class el{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=$n(e,n);if(!r)return;const o=ta(r,!1);if(!o)return;const a=ea(r,!1);if(!a)return;const s=ys(r,!1);if(!s)return;const c=Ev(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=o.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<o.dist?u=a.corner:u=o.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?o.dist<c.dist?u=o.edge:u=c.cellCenter:o.dist<a.dist&&o.dist<c.dist?u=o.edge:a.dist<o.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let f=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<o.dist&&(f="corner");const h=f==="edge"?2*o.idx:2*a.idx+1,g={event:e,cell:s.cell,edge:o.edge,corner:a.corner,closest:u,edgeIdx:o.idx,cornerIdx:a.idx,direction:h};this.onDragStart&&this.onDragStart(g)}}function hd(t,e,n,r){const o=(r==null?void 0:r.targets)??ht.CLOSEST,a=new el(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(v){const m=ct(rt),E=v.cell,I=v.closest;if(!qt(E,s))return;const b=Gy(m,n,I);if(b){wo(n,b);return}c=iv(n,I,""),u=Tt.uniqueId(),eo(u,c)}function h(v){const m=ct(hr);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!gi(v)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(E==null?void 0:E.value,v.key);w!==void 0&&w!==E.value&&(E=va(E,w),Pt(n,I,E))}return a.onDragStart=v=>{f(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{h(v)},keyUp:()=>{}}}d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,Y.OUTSIDE_TOOLS,W.CIRCLE,fd(),R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT;const LA={getInputHandler(t,e,n){return hd(t,e,n,{targets:ht.CLOSEST,valueUpdater:(r,o)=>Dr(r,o,()=>!0),defaultValue:""})},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:Y.OUTSIDE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:fd(),tags:[],categories:[R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT]}},AA={getInputHandler(t,e,n){return hd(t,e,n,{targets:ht.CORNER_OR_EDGE,valueUpdater:(r,o)=>Dr(r,o,()=>!0),defaultValue:""})},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:Y.OUTSIDE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:fd(),tags:[],categories:[R.LOCAL_CONSTRAINT,R.CENTER_CORNER_EDGE_CONSTRAINT]}};function SA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function xA(t,e){const n=Mh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function NA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function TA(t){for(let e=0;;e++){const n=NA(e);if(!t.has(n))return n}}function DA(t,e,n){const r=new di,o={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,f="cells2",h;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(h||(h={}));let g=0;function v(E){const I=ct(rt),w=E.cell;if(!qt(E.cell,o))return;const L=My(I,n,w);if(g===0&&(L?(c=L[0],a=L[1],g=2,u=w,f=a.cells2.some(k=>qe(k,w))?"cells2":"cells"):g=1),g===1&&c===null){c=Tt.uniqueId();const T=$y(I,n),k=TA(T);a=SA(n,[w],k),eo(c,a);return}else if(g===1&&c&&a){a=xA(a,w),Pt(n,c,a);return}else if(g===2&&c&&a&&u){const T={r:w.r-u.r,c:w.c-u.c},G=(f==="cells2"?a.cells2:a.cells).map(z=>({r:z.r+T.r,c:z.c+T.c}));if(!G.every(z=>qt(z,o)))return;f==="cells"?a={...a,cells:G}:a={...a,cells2:G},u=w,Pt(n,c,a)}}return r.onDragStart=E=>{c=null,a=null,g=0,u=null,v(E)},r.onDrag=E=>{v(E)},r.onDragEnd=()=>{c&&a&&(g===1?to(c,a,n):g===2&&Eu(c,s,a,n),s=a)},r.onTap=()=>{c&&g!==1&&(wo(n,c),c=null,a=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}const RA={getInputHandler(t,e,n){return DA(t,e,n)},toolId:d.CLONE_REGION,order:Y.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[R.CLONE_CONSTRAINT,R.LOCAL_CONSTRAINT]}};class kA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellCorner",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=$n(e,n);if(!r)return;const o=ea(r);if(!o)return;this._prevCellCorner=o.corner;const a={event:e,cellCorner:o.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=ea(r);if(!o||this._prevCellCorner&&qe(o.corner,this._prevCellCorner))return;const a={event:e,cellCorner:o.corner};this._prevCellCorner=o.corner,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellCorner=null,this._isDown=!1);const r=$n(e,n);!r||ea(r)}}function ro(t,e,n,r){const o=new kA,a={nRows:e.nRows,nCols:e.nCols};let s;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(g){const v=ct(rt),m=g.cellCorner,E=Rh(m);if(!E.every(b=>qt(b,a)))return;let w=null;if(c===0&&(w=Ty(v,n,m),c=w?2:1),w&&c===2){const b=w[0];Lo(b,w[1],n);return}else if(c===1){const b=Jh(n,E,r==null?void 0:r.defaultValue),L=Tt.uniqueId();to(L,b,n,!0)}}function f(g){const v=ct(hr);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!gi(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=va(m,I),Pt(n,E,m))}return o.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}function tl(t,e=3){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function nl(t,e,n){return Dr(t,e,n)}function GA(t,e){function n(r){return!0}return Dr(t,e,n)}const MA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>GA(r,o),defaultValue:""})},toolId:d.QUADRUPLE,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:bL(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL]}},$A={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>nl(r,o,tl),defaultValue:""})},toolId:d.CORNER_SUM,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:fi(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL]}},FA={getInputHandler(t,e,n){return ro(t,e,n)},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:fi(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}},UA={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>nl(r,o,tl),defaultValue:""})},toolId:d.CORNER_EVEN_COUNT,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:fi(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,Y.CORNER_TOOLS,W.CIRCLE,fi(),R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.CORNER_TOOL;const HA={getInputHandler(t,e,n){return ro(t,e,n,{defaultValue:"X"})},toolId:d.PRODUCT_SQUARE,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:fi(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}},PA={getInputHandler(t,e,n){return ro(t,e,n,{defaultValue:""})},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:fi(),categories:[R.CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.CORNER_TOOL]}};function Le(t,e,n,r){const o=new di,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function f(g){if(!u||!c)throw"UNREACHABLE";const v=g.cell;qt(g.cell,a)&&(c=dy(c,v,s),Pt(n,u,c))}return o.onDragStart=g=>{u=Tt.uniqueId(),c=Xh(n,[],r==null?void 0:r.defaultValue),eo(u,c),f(g)},o.onDrag=g=>{f(g)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?wo(n,u):u&&c&&to(u,c,n,!1),u=null},o.onTap=g=>{const v=g.cell,m=ct(rt),E=Dy(m,n,v);if(E){const[I,w]=E;Lo(I,w,n)}},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function je(t,e,n,r,o){const a=new di,s={nRows:e.nRows,nCols:e.nCols};let c;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function f(v){const m=ct(rt),E=v.cell;if(!qt(v.cell,s))return;const w=id(m,n,E);if(u===0&&(u=w?2:1),w&&u===2){const[b,L]=w;Lo(b,L,n)}else if(u===1){const b=nv(n,E,o==null?void 0:o.defaultValue),L=Tt.uniqueId();to(L,b,n,!0)}}a.onDragStart=v=>{u=0,f(v)},a.onDrag=v=>{f(v)};function h(v){const m=ct(hr);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!gi(v)||!(o!=null&&o.valueUpdater))return;const w=o.valueUpdater(E==null?void 0:E.value,v.key);w!==void 0&&w!==E.value&&(E=va(E,w),Pt(n,I,E))}return{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:v=>{a.pointerMove(v,t)},pointerUp:v=>{a.pointerUp(v,t)},keyDown:v=>{h(v)},keyUp:()=>{}}}class BA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=$n(e,n);if(!r)return;const o=ta(r,!0,.35);if(!o)return;this._prevCellEdge=o.edge;const a={event:e,edge:o.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=$n(e,n);if(!r)return;const o=ta(r,!0,.35);if(!o||this._prevCellEdge&&qe(o.edge,this._prevCellEdge))return;const a={event:e,edge:o.edge};this._prevCellEdge=o.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=$n(e,n);!r||ta(r,!0,.35)}}function pn(t,e,n,r){const o=new BA,a={nRows:e.nRows,nCols:e.nCols};let s;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(g){const v=ct(rt),m=g.edge,E=Gh(m);if(!E.every(b=>qt(b,a)))return;let w=null;if(c===0&&(w=Ny(v,n,E),c=w?2:1),w&&c===2){const b=w[0];Lo(b,w[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",L=ev(n,E,b),T=Tt.uniqueId();to(T,L,n,!0)}}function f(g){const v=ct(hr);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!gi(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=va(m,I),Pt(n,E,m))}return o.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:g=>{o.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}function vd(t,e,n,r=ht.CORNER_OR_EDGE){const o=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],a=new el(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,f;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(f||(f={}));let h=0;function g(E){const I=ct(rt),w=E.cell;if(!qt(E.cell,s))return;E.event.altKey&&(h=2);const L=id(I,n,w),T=td(E.direction);if(L){[u,c]=L,c.direction===T||h===2?Lo(u,c,n):(c={...c,direction:T},Pt(n,u,c));return}else h!==2&&(c=rv(n,w,T),u=Tt.uniqueId(),to(u,c,n,!0))}function v(E){if(!c||!u||!DL(E))return;const w=(o.indexOf(c.direction)+1)%o.length;c={...c,direction:o[w]},Pt(n,u,c)}return a.onDragStart=E=>{h=0,g(E)},{pointerDown:E=>{E.button===0&&a.pointerDown(E,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:E=>{v(E)},keyUp:()=>{}}}function WA(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function Rr(t,e,n,r=ht.CORNER_OR_EDGE){const o=new el(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function h(v){const m=ct(rt),E=v.cell;if(!qt(v.cell,a))return;v.event.altKey&&(f=2);const w=td(v.direction),b=id(m,n,E);if(b){if(c=b[0],s=b[1],f===2)wo(n,b[0]);else{const L=WA(s.directions,w);L.length?(s={...s,directions:L},Pt(n,c,s)):wo(n,c)}return}else f!==2&&(s=ov(n,E,w),c=Tt.uniqueId(),eo(c,s))}return o.onDragStart=v=>{f=0,h(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const pd=[R.EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.EDGE_TOOL],ir=[R.EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.EDGE_TOOL],Ia=.15,bv=.02,So={type:W.CIRCLE,r:{editable:!0,value:Ia,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:bv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}};function zA(t,e=1){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function hi(t,e=3){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function YA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function xo(t,e,n){return Dr(t,e,n)}function jA(t,e){return t===void 0?"V":YA(e)?e.toUpperCase():t}function VA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function qA(t,e){return t===void 0?"<":VA(e)?e:t}const XA={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,zA)})},toolId:d.RATIO,order:Y.EDGE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:Ia},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:ir}},KA={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,hi)})},toolId:d.DIFFERENCE,order:Y.EDGE_TOOLS,shape:So,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:ir}},ZA={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,hi)})},toolId:d.EDGE_SUM,order:Y.EDGE_TOOLS,shape:{...So,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:ir}},QA={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:jA,defaultValue:"V"})},toolId:d.XV,order:Y.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:Ia},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:ir}},JA={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:qA,defaultValue:"<"})},toolId:d.EDGE_INEQUALITY,order:Y.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:ir}},eS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,hi)})},toolId:d.EDGE_PRODUCT,order:Y.EDGE_TOOLS,shape:{...So,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:ir}},tS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,hi)})},toolId:d.EDGE_MODULO,order:Y.EDGE_TOOLS,shape:{...So,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:ir}},nS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,hi)})},toolId:d.EDGE_FACTOR,order:Y.EDGE_TOOLS,shape:{...So,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:ir}},rS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.XY_DIFFERENCES,order:Y.EDGE_TOOLS,shape:{type:W.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ia},strokeWidth:{editable:!1,value:bv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:ir}},oS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.YIN_YANG_WHITE_KROPKI,order:Y.EDGE_TOOLS,shape:So,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:ir}},iS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.YIN_YANG_KROPKI,order:Y.EDGE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:Ia},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:ir}},aS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.UNKNOWN_REGION_BORDER,order:Y.EDGE_TOOLS,shape:{type:W.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:pd}},sS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:Y.EDGE_TOOLS,shape:So,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:pd}},lS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.MAZE_WALL,order:Y.EDGE_TOOLS,shape:{type:W.BORDER_LINE,strokeWidth:{editable:!1,value:.15,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"darkblue"},opacity:{editable:!1,value:.9}},meta:{description:"Maze wall for directed paths.",tags:[],categories:pd}};function Rt(t,e,n,r){const o=(r==null?void 0:r.cornerOrEdge)??ht.CORNER_OR_EDGE,a=new el(o),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(v){const m=ct(rt),E=v.cell,I=v.direction,w=td(I);if(qt(E,s))return;const L=kh(E,w);if(!qt(L,s))return;const k=ky(m,n,E,w);if(k){wo(n,k);return}c=tv(n,E,w,""),u=Tt.uniqueId(),eo(u,c)}function h(v){const m=ct(hr);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!gi(v)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(E==null?void 0:E.value,v.key);w!==void 0&&w!==E.value&&(E=va(E,w),Pt(n,I,E))}return a.onDragStart=v=>{f(v)},{pointerDown:v=>{v.button===0&&a.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{h(v)},keyUp:()=>{}}}const vi=[R.OUTSIDE_CORNER_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_CORNER_TOOL,R.OUTSIDE_DIRECTION_TOOL];function pi(t,e=5){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function No(t,e,n){return Dr(t,e,n)}const mi={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},cS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,pi),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_SUM,order:Y.OUTSIDE_TOOLS,shape:mi,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:_i(),tags:[],categories:vi}},uS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,pi),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_PRODUCT,order:Y.OUTSIDE_TOOLS,shape:mi,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:_i(),tags:[],categories:vi}},dS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,pi),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:Y.OUTSIDE_TOOLS,shape:mi,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:_i(),tags:[],categories:vi}},_S={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,pi),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:Y.OUTSIDE_TOOLS,shape:mi,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:_i(),tags:[],categories:vi}},fS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,pi),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:Y.OUTSIDE_TOOLS,shape:mi,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:_i(),tags:[],categories:vi}},gS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,pi),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:Y.OUTSIDE_TOOLS,shape:mi,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:_i(),tags:[],categories:vi}},nn=[R.OUTSIDE_EDGE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_EDGE_TOOL,R.OUTSIDE_DIRECTION_TOOL];function Kt(t,e=5){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function rn(t,e,n){return Dr(t,e,n)}const on={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},hS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SANDWICH_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:tn(),tags:[],categories:nn}},vS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SANDWICH_SUM_XOR_X_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:tn(),tags:[],categories:nn}},pS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.X_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:tn(),tags:[],categories:nn}},mS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SHORTSIGHTED_X_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:tn(),tags:[],categories:nn}},ES={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SHIFTED_X_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:tn(),tags:[],categories:nn}},CS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.BROKEN_X_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:tn(),tags:[],categories:nn}},IS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.X_SUM_SKYSCRAPERS,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:tn(),tags:[],categories:nn}},bS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.BATTLEFIELD,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:tn(),tags:[],categories:nn}},wS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SKYSCRAPERS,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:tn(),tags:[],categories:nn}},OS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.X_INDEX,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:tn(),tags:[],categories:nn}},yS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.RISING_STREAK,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:tn(),tags:[],categories:nn}};d.ROW_OR_COLUMN_RANK,Y.OUTSIDE_TOOLS,tn();const LS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:tn(),tags:[],categories:nn}},AS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:tn(),tags:[],categories:nn}},SS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:d.LOOPWICHES,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:tn(),tags:[],categories:nn}},xS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>rn(r,o,Kt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:Y.OUTSIDE_TOOLS,shape:on,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:tn(),tags:[],categories:nn}},NS={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.COSMETIC_CELL_SHAPE,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},TS={getInputHandler(t,e,n){return vd(t,e,n)},toolId:d.COSMETIC_CELL_ARROW,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},DS={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},RS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,o)=>xo(r,o,hi)})},toolId:d.COSMETIC_EDGE,order:Y.EDGE_TOOLS,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},kS={getInputHandler(t,e,n){return ro(t,e,n,{valueUpdater:(r,o)=>nl(r,o,tl),defaultValue:""})},toolId:d.COSMETIC_CORNER,order:Y.CORNER_TOOLS,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},GS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},MS={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},$S={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL]}},FS={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,o)=>hn(r,o,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.COSMETIC_CAGE,order:Y.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.TYPABLE_TOOL]}},US={getInputHandler(t,e,n){return Ks(t,e,n)},toolId:d.COSMETIC_ARROW,order:Y.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.LOCAL_CONSTRAINT]}},HS={getInputHandler(t,e,n){return Rt(t,e,n,{valueUpdater:(r,o)=>No(r,o,Kt),defaultValue:"",cornerOrEdge:ht.CORNER_OR_EDGE})},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:Y.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[R.COSMETIC_TOOL,R.LOCAL_CONSTRAINT,R.TYPABLE_TOOL,R.OUTSIDE_DIRECTION_TOOL]}},Ei=[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT,R.DIAGONAL_CONSTRAINT],PS={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},BS={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},WS={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},zS={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},YS={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},jS={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},VS={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},qS={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},XS={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},KS={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},ZS={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},QS={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},JS={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Ei}},ex={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Ei}},tx={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Ei}},nx={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Ei}},rx={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Ei}},ox={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Ei}},ix={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},cx={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},ux={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},dx={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},_x={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},fx={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},gx={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},hx={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},vx={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},px={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},mx={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Ex={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Cx={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},Ix={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.NEGATIVE_CONSTRAINT]}},bx={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Sx={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},xx={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Dx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Rx={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},kx={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},eN={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.UNDETERMINED_REGIONS_CONSTRAINT]}},Ue=[R.LINE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.LINE_TOOL],kr=[R.LINE_CONSTRAINT,R.LOCAL_CONSTRAINT,R.DOUBLE_ENDED_LINE_CONSTRAINT,R.LINE_TOOL],ba={description:"",usage:De(),tags:[],categories:Ue},tN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.THERMOMETER,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ba,description:"Numbers along a thermometer must increase from the bulb end."}},nN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:d.CUSTOM_THERMOMETER,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ba,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},rN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.FUZZY_THERMOMETER,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...ba,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},oN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.SLOW_THERMOMETER,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ba,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},iN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_CYCLE_THERMOMETER,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ba,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},aN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.PALINDROME,order:Y.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Ue}},sN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENBAN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Ue}},lN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_RENBAN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Ue}},cN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENRENBANBAN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Ue}},uN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Ue}},dN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.NABNER_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Ue}},_N={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.WHISPERS_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Ue}},fN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.DUTCH_WHISPERS,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Ue}},gN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Ue}},hN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_WHISPERS_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Ue}},vN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_NABNER_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Ue}},pN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Ue}},mN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEX_LINE,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Ue}},EN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.UNIQUE_VALUES_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Ue}},CN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.REGION_SUM_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Ue}},IN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.SUM_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Ue}},bN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ARITHMETIC_SEQUENCE_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Ue}},wN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.SAME_PARITY_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Ue}},ON={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.MODULAR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Ue}},yN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.UNIMODULAR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Ue}},LN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Ue}},AN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Ue}},SN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Ue}},xN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Ue}},NN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_OR_MODULAR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Ue}},TN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Ue}},DN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_ROW_IS_X_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Ue}},RN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.REPEATED_DIGITS_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Ue}},kN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.SUPERFUZZY_ARROW,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Ue}},GN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.HEADLESS_ARROW,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Ue}},MN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.XV_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Ue}},$N={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_SUM_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Ue}},FN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.AT_LEAST_X_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Ue}},UN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Ue}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,Y.LINE_TOOLS,W.LINE,De();const HN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.PRODUCT_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Ue}},PN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_MULTIPLES_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Ue}},BN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Ue}},WN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.LOOK_AND_SAY_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Ue}},zN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.ZIPPER_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Ue}},YN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.SEGMENTED_SUM_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Ue}},jN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:Ue}};d.THERMO_OR_AVERAGE_ARROW,Y.LINE_TOOLS,W.THERMO_WITH_CIRCLE,De();const VN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Ue}},qN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Ue}},XN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Ue}},KN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_REGION_SUM_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Ue}},ZN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Ue}},QN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:Y.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Ue}},JN={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.BETWEEN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:kr}},e2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.LOCKOUT_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:kr}},t2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.TIGHTROPE_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:kr}},n2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.PARITY_COUNT_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:kr}},r2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_ARROW_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:kr}},o2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:kr}},i2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.SPLIT_PEAS,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:kr}},a2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!1})},toolId:d.DOUBLERS_THERMOMETER,order:Y.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Ue}},s2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_BETWEEN_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:kr}},l2={getInputHandler(t,e,n){return Le(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:Y.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:kr}},at=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_SHAPE_TOOL],Ci=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_COLOR_TOOL];function Ii(t,e=3){return Ao(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function c2(t){return t===""||t==="1"||t==="2"||t==="3"}function To(t,e,n){return Dr(t,e,n)}const u2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.ODD,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:at}},d2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.EVEN,order:Y.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:at}},_2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.MINIMUM,order:Y.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},f2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.MAXIMUM,order:Y.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}};d.PRIME_CELL,Y.CELL_COLOR_TOOL;const g2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.ODD_MINESWEEPER,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:at}},h2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.EVEN_MINESWEEPER,order:Y.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:at}},v2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:at}},p2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.WATCHTOWER,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:at}},m2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.NOT_WATCHTOWER,order:Y.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:at}},E2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,Ii),defaultValue:""})},toolId:d.FARSIGHT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:at}},C2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,Ii),defaultValue:"9"})},toolId:d.RADAR,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:at}},I2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.ORTHOGONAL_SUM,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:at}},b2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.INDEXING_COLUMN,order:Y.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:Ci}},w2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.INDEXING_ROW,order:Y.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:Ci}},O2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.LOW_DIGIT,order:Y.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Ci}},y2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.HIGH_DIGIT,order:Y.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Ci}},L2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.FRIENDLY_CELL,order:Y.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Ci}},A2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.DIAGONALLY_ADJACENT_SUM,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:at}},S2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:at}},x2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.SANDWICH_ROW_COL_COUNT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:at}},N2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.COUNTING_CIRCLES,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:at}},T2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,c2),defaultValue:""})},toolId:d.COLORED_COUNTING_CIRCLES,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:at}},D2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.UNIQUE_CELLS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:at}},R2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.YIN_YANG_MINESWEEPER,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:at}},k2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:at}},G2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:at}},M2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:at}},$2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:at}},F2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:at}},U2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:at}},H2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.SEEN_REGION_BORDERS_COUNT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:at}},P2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:at}},B2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.SASHIGANE_BEND_REGION_COUNT,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:at}},W2={getInputHandler(t,e,n){return vd(t,e,n)},toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[R.SINGLE_CELL_ARROW_TOOL,R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},z2={getInputHandler(t,e,n){return vd(t,e,n)},toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[R.SINGLE_CELL_ARROW_TOOL,R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT]}},Y2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,Ii),defaultValue:""})},toolId:d.SASHIGANE_REGION_SUM,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:at}},j2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.CELL_ON_THE_LOOP,order:Y.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:at}},V2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.CELL_NOT_ON_THE_LOOP,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:at}},q2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:at}},X2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,Ii),defaultValue:""})},toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:at}},K2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.CAVE_CLUE,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:at}},Z2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,Ii),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:at}},Q2={getInputHandler(t,e,n){return je(t,e,n,void 0,{valueUpdater:(r,o)=>To(r,o,Ii),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:at}},J2={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.DIRECTED_PATH_START,order:Y.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:at}},eT={getInputHandler(t,e,n){return je(t,e,n)},toolId:d.DIRECTED_PATH_END,order:Y.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:at}},oo=[R.SINGLE_CELL_CONSTRAINT,R.LOCAL_CONSTRAINT,R.SINGLE_CELL_MULTIARROW_TOOL],bi={type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},tT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:Y.CELL_SHAPE_TOOL,shape:bi,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:oo}},nT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:Y.CELL_SHAPE_TOOL,shape:bi,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:oo}},rT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.LOOP_CELL_COUNT_ARROWS,order:Y.CELL_SHAPE_TOOL,shape:bi,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:oo}},oT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:Y.CELL_SHAPE_TOOL,shape:bi,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:oo}},iT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:Y.CELL_SHAPE_TOOL,shape:bi,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:oo}},aT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:Y.CELL_SHAPE_TOOL,shape:bi,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:oo}},sT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.COLD_ARROWS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:oo}},lT={getInputHandler(t,e,n){return Rr(t,e,n)},toolId:d.HOT_ARROWS,order:Y.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:oo}},cT={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}},uT={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}},dT={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[R.LOCAL_CONSTRAINT,R.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;const _T={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}},fT={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT;const gT={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[R.GLOBAL_CONSTRAINT,R.VALUE_MODIFIER_CONSTRAINT]}},$t={[d.GIVEN]:pA,[d.DIGIT]:mA,[d.REGIONS]:EA,[d.OUTSIDE]:wA,[d.CORNER_PM]:CA,[d.CENTER_PM]:IA,[d.HIGHLIGHTS]:bA,[d.FOG]:OA,[d.PEN_TOOL]:yA,[d.SUDOKU_RULES_DO_NOT_APPLY]:PS,[d.LEAVE_EMPTY_CELLS_EMPTY]:BS,[d.LITS]:YS,[d.HEXED_SUDOKU]:WS,[d.FILLOMINO]:zS,[d.ANTIKNIGHT]:jS,[d.ANTIKING]:qS,[d.ANTI_GIRAFFE]:VS,[d.DISJOINT_GROUPS]:XS,[d.TANGO]:KS,[d.NONCONSECUTIVE]:ZS,[d.NONRATIO]:QS,[d.ANTI_ENTROPY]:ix,[d.GLOBAL_INDEXING_COLUMN]:ax,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:sx,[d.NEGATIVE_DIAGONAL]:JS,[d.POSITIVE_DIAGONAL]:ex,[d.NEGATIVE_ANTIDIAGONAL]:tx,[d.POSITIVE_ANTIDIAGONAL]:nx,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:rx,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:ox,[d.ALL_RATIOS_GIVEN]:lx,[d.ALL_DIFFERENCES_GIVEN]:cx,[d.ALL_X_GIVEN]:ux,[d.ALL_V_GIVEN]:dx,[d.ALL_XV_GIVEN]:_x,[d.ALL_RADARS_GIVEN]:fx,[d.ALL_XY_DIFFERENCES_GIVEN]:gx,[d.ALL_INDEXING_COLUMN_GIVEN]:hx,[d.ALL_INDEXING_ROW_GIVEN]:vx,[d.ALL_YIN_YANG_KROPKI_GIVEN]:px,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:mx,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Cx,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Ix,[d.CAVE_CELLS_ARE_ODD]:Wx,[d.CAVE_WALLS_ARE_EVEN]:Bx,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:Hx,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:Px,[d.DOUBLERS]:_T,[d.NEGATORS]:fT,[d.NEXUS]:gT,[d.UNKNOWN_REGIONS]:bx,[d.YIN_YANG]:wx,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Ox,[d.NURIMISAKI]:yx,[d.TWO_CONTIGUOUS_REGIONS]:Lx,[d.SASHIGANE]:Ax,[d.GOLDILOCKS_ZONE]:Sx,[d.CELL_CENTER_LOOP_NO_TOUCHING]:xx,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Nx,[d.NOT_LOOP_SIZED_REGIONS]:Rx,[d.MODULAR_LOOP]:kx,[d.CAVE]:Fx,[d.CAVE_LITS]:zx,[d.RENBAN_CAVES]:Yx,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Ux,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:Ex,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Tx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:Dx,[d.GALAXIES]:Vx,[d.TWO_SYMMETRIC_GALAXIES]:Kx,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:qx,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:Xx,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:Zx,[d.PENTOMINO_TILLING]:Qx,[d.TILLING_NO_EMPTY_CELLS]:Jx,[d.LITS_BLACK_WHITE_STAR_BATTLE]:eN,[d.MAZE_DIRECTED_PATH]:Gx,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:Mx,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:$x,[d.ODD]:u2,[d.EVEN]:d2,[d.MINIMUM]:_2,[d.MAXIMUM]:f2,[d.ODD_MINESWEEPER]:g2,[d.EVEN_MINESWEEPER]:h2,[d.WATCHTOWER]:p2,[d.NOT_WATCHTOWER]:m2,[d.FARSIGHT]:E2,[d.RADAR]:C2,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:v2,[d.ORTHOGONAL_SUM]:I2,[d.DIAGONALLY_ADJACENT_SUM]:A2,[d.INDEXING_COLUMN]:b2,[d.INDEXING_ROW]:w2,[d.LOW_DIGIT]:O2,[d.HIGH_DIGIT]:y2,[d.FRIENDLY_CELL]:L2,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:S2,[d.SANDWICH_ROW_COL_COUNT]:x2,[d.COUNTING_CIRCLES]:N2,[d.COLORED_COUNTING_CIRCLES]:T2,[d.UNIQUE_CELLS]:D2,[d.YIN_YANG_MINESWEEPER]:R2,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:k2,[d.YIN_YANG_SEEN_SHADED_CELLS]:G2,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:M2,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:$2,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:F2,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:U2,[d.SEEN_REGION_BORDERS_COUNT]:H2,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:P2,[d.SASHIGANE_BEND_REGION_COUNT]:B2,[d.SASHIGANE_REGION_SUM]:Y2,[d.CELL_ON_THE_LOOP]:j2,[d.CELL_NOT_ON_THE_LOOP]:V2,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:q2,[d.CAVE_CLUE]:K2,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:X2,[d.YIN_YANG_FILLOMINO_PARITY]:jx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:Z2,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:Q2,[d.DIRECTED_PATH_START]:J2,[d.DIRECTED_PATH_END]:eT,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:W2,[d.THERMO_SIGHTLINE_LOOP_ARROW]:z2,[d.HOT_ARROWS]:lT,[d.COLD_ARROWS]:sT,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:aT,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:oT,[d.YIN_YANG_COUNT_SHADED_CELLS]:iT,[d.LOOP_CELL_COUNT_ARROWS]:rT,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:nT,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:tT,[d.DIFFERENCE]:KA,[d.RATIO]:XA,[d.XV]:QA,[d.EDGE_INEQUALITY]:JA,[d.EDGE_SUM]:ZA,[d.EDGE_PRODUCT]:eS,[d.EDGE_MODULO]:tS,[d.EDGE_FACTOR]:nS,[d.XY_DIFFERENCES]:rS,[d.YIN_YANG_WHITE_KROPKI]:oS,[d.YIN_YANG_KROPKI]:iS,[d.UNKNOWN_REGION_BORDER]:aS,[d.EDGE_CAVE_ONE_OF_EACH]:sS,[d.MAZE_WALL]:lS,[d.QUADRUPLE]:MA,[d.CORNER_SUM]:$A,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:FA,[d.CORNER_EVEN_COUNT]:UA,[d.PRODUCT_SQUARE]:HA,[d.EQUAL_DIAGONAL_DIFFERENCES]:PA,[d.THERMOMETER]:tN,[d.FUZZY_THERMOMETER]:rN,[d.SLOW_THERMOMETER]:oN,[d.CUSTOM_THERMOMETER]:nN,[d.ROW_CYCLE_THERMOMETER]:iN,[d.PALINDROME]:aN,[d.RENBAN_LINE]:sN,[d.DOUBLE_RENBAN_LINE]:lN,[d.RENRENBANBAN_LINE]:cN,[d.N_CONSECUTIVE_RENBAN_LINE]:uN,[d.NABNER_LINE]:dN,[d.WHISPERS_LINE]:_N,[d.DUTCH_WHISPERS]:fN,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:gN,[d.RENBAN_OR_WHISPERS_LINE]:hN,[d.RENBAN_OR_NABNER_LINE]:vN,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:pN,[d.INDEX_LINE]:mN,[d.UNIQUE_VALUES_LINE]:EN,[d.REPEATED_DIGITS_LINE]:RN,[d.REGION_SUM_LINE]:CN,[d.SUM_LINE]:IN,[d.XV_LINE]:MN,[d.ROW_SUM_LINE]:$N,[d.AT_LEAST_X_LINE]:FN,[d.SUPERFUZZY_ARROW]:kN,[d.HEADLESS_ARROW]:GN,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:UN,[d.PRODUCT_LINE]:HN,[d.ADJACENT_MULTIPLES_LINE]:PN,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:BN,[d.LOOK_AND_SAY_LINE]:WN,[d.ARITHMETIC_SEQUENCE_LINE]:bN,[d.ZIPPER_LINE]:zN,[d.SEGMENTED_SUM_LINE]:YN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:jN,[d.SAME_PARITY_LINE]:wN,[d.MODULAR_LINE]:ON,[d.UNIMODULAR_LINE]:yN,[d.MODULAR_OR_UNIMODULAR_LINE]:LN,[d.ODD_EVEN_OSCILLATOR_LINE]:AN,[d.HIGH_LOW_OSCILLATOR_LINE]:SN,[d.ENTROPIC_LINE]:xN,[d.ENTROPIC_OR_MODULAR_LINE]:NN,[d.INDEXING_COLUMN_IS_X_LINE]:TN,[d.INDEXING_ROW_IS_X_LINE]:DN,[d.YIN_YANG_INDEXING_LINE_COLORING]:ZN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:VN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:qN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:XN,[d.YIN_YANG_REGION_SUM_LINE]:KN,[d.GOLDILOCKS_ZONE_REGION_SUM]:QN,[d.BETWEEN_LINE]:JN,[d.LOCKOUT_LINE]:e2,[d.PARITY_COUNT_LINE]:n2,[d.TIGHTROPE_LINE]:t2,[d.DOUBLE_ARROW_LINE]:r2,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:o2,[d.SPLIT_PEAS]:i2,[d.DOUBLERS_THERMOMETER]:a2,[d.DOUBLERS_BETWEEN_LINE]:s2,[d.DOUBLERS_DOUBLE_ARROW_LINE]:l2,[d.ARROW]:LL,[d.AVERAGE_ARROW]:AL,[d.KILLER_CAGE]:BL,[d.UNIQUE_DIGITS_CAGE]:WL,[d.INVERTED_KILLER_CAGE]:zL,[d.SUM_CAGE]:YL,[d.SUM_CAGE_LOOK_AND_SAY]:jL,[d.PARITY_BALANCE_CAGE]:VL,[d.DIVISIBLE_KILLER_CAGE]:qL,[d.SPOTLIGHT_CAGE]:XL,[d.PUTTERIA_CAGE]:KL,[d.MULTISET_CAGE]:ZL,[d.VAULTED_CAGE]:QL,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:JL,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:eA,[d.DOUBLERS_KILLER_CAGE]:tA,[d.NEGATORS_KILLER_CAGE]:nA,[d.CLONE_REGION]:RA,[d.SANDWICH_SUM]:hS,[d.X_SUM]:pS,[d.SHORTSIGHTED_X_SUM]:mS,[d.SHIFTED_X_SUM]:ES,[d.BROKEN_X_SUM]:CS,[d.X_SUM_SKYSCRAPERS]:IS,[d.BATTLEFIELD]:bS,[d.SKYSCRAPERS]:wS,[d.X_INDEX]:OS,[d.SANDWICH_SUM_XOR_X_SUM]:vS,[d.RISING_STREAK]:yS,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:LS,[d.OUTSIDE_CONSECUTIVE_SUM]:AS,[d.LOOPWICHES]:SS,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:xS,[d.LITTLE_KILLER_SUM]:cS,[d.LITTLE_KILLER_PRODUCT]:uS,[d.LITTLE_KILLER_LOOK_AND_SAY]:dS,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:fS,[d.X_OMIT_LITTLE_KILLER_SUM]:_S,[d.NEGATORS_LITTLE_KILLER_SUM]:gS,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:LA,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:AA,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:cT,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:uT,[d.FORBIDDEN_KNIGHT_SUM]:dT,[d.COSMETIC_CELL_SHAPE]:NS,[d.COSMETIC_CELL_ARROW]:TS,[d.COSMETIC_CELL_MULTI_ARROW]:DS,[d.COSMETIC_EDGE]:RS,[d.COSMETIC_CORNER]:kS,[d.COSMETIC_LINE]:GS,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:MS,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:$S,[d.COSMETIC_ARROW]:US,[d.COSMETIC_CAGE]:FS,[d.COSMETIC_OUTSIDE_DIRECTION]:HS};var hT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function wv(t){var e=hT();N(t,e)}var vT=oe('<button class="remove-button svelte-17rdl63"><!></button>');function pT(t,e){let n=F(e,"onTrash",8,()=>{});var r=vT(),o=q(r);wv(o),H(r),Te("click",r,Kn(function(...a){var s;(s=n())==null||s.apply(this,a)})),N(t,r)}var mT=oe('<input type="radio" class="radio-select-button svelte-3561wl">'),ET=oe('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ra(t,e){var te,de;ne(e,!1);const n=Xe(),r=()=>ve(Xt,"$toolStore",n),o=[];let a=F(e,"elementInfo",8),s=F(e,"onClick",12,void 0),c=F(e,"onTrash",8,void 0);const u=a().toolId,f=a().permanent??!1,h=((te=a().menu)==null?void 0:te.name)??a().toolId,g=!((de=a().meta)!=null&&de.categories.includes(R.GLOBAL_CONSTRAINT)),v=`label-${h}`;g&&s(()=>{Sr(u)});function m(){var me,Ee;const ee=(me=a().meta)==null?void 0:me.description,le=((Ee=a().meta)==null?void 0:Ee.usage)??yL(u);let Ie;return ee&&ee.length&&(Ie=ee),le.length&&(Ie?Ie=Ie+`

`+le:Ie=le),Ie}fe();var E=ET(),I=q(E);{var w=ee=>{var le=mT();Vt(le),S(le,"id",v),le.value=(le.__value=u)==null?"":u,Ps(o,[],le,()=>r(),Ie=>fa(Xt,Ie)),N(ee,le)};ge(I,ee=>{g&&ee(w)})}var b=U(I,2);Z(()=>S(b,"title",m())),S(b,"aria-labelledby",v);var L=q(b),T=q(L),k=q(T);{var G=ee=>{pT(ee,{get onTrash(){return c()}})};ge(k,ee=>{f||ee(G)})}H(T);var P=U(T,2);S(P,"for",v),P.textContent=h,H(L);var z=U(L,2),X=q(z);dt(X,e,"default",{}),H(z),H(b),H(E),Z(()=>yt(E,"checked",u===r())),Te("click",b,Kn(function(...ee){var le;(le=s())==null||le.apply(this,ee)})),N(t,E),re()}function Ov(t,e){ne(e,!1);const n=Xe(),r=()=>ve(rt,"$localConstraintsStore",n);let o=F(e,"toolId",8),a=F(e,"elementHandlers",8);const s=()=>{sL(o());const u=r().get(o());if(!u)return;const f=_L(o()),h=fL(o(),u),g=Ca(f,h);un(g)};fe();var c=Ze(()=>Kr(o(),a()));ra(t,{get elementInfo(){return p(c)},onTrash:s}),re()}var CT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function IT(t){var e=CT();N(t,e)}var bT=oe('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function rl(t,e){let n=F(e,"isOpen",8,!0);var r=bT(),o=q(r);dt(o,e,"default",{}),H(r),Z(()=>{S(r,"aria-expanded",n()),yt(r,"closed",!n())}),N(t,r)}var wT=oe('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function OT(t,e){ne(e,!1);const n=Xe(),r=()=>ve(ri,"$svgRefStore",n),o=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(hr,"$currentConstraintStore",n),s=D();let c=F(e,"constraintId",8),u=F(e,"toolId",8);function f(){cL(c(),u()),r().focus()}function h(){const b=o().getConstraint(u(),c());if(!b)return;const L=_d(c(),u()),T=dd(c(),b),k=Ca(L,T);un(k)}$(()=>a(),()=>{var b;x(s,(b=a())==null?void 0:b.id)}),pe(),fe();var g=wT(),v=q(g),m=q(v);H(v);var E=U(v,2),I=q(E),w=q(I);wv(w),H(I),H(E),H(g),Z(()=>{yt(g,"active",c()===p(s)),nt(m,`ID: ${c()??""}`)}),Te("click",I,Kn(h)),Te("click",g,f),N(t,g),re()}var yT=oe('<div class="constraint-list svelte-w5npcu"></div>');function yv(t,e){ne(e,!1);const n=Xe(),r=()=>ve(rt,"$localConstraintsStore",n),o=()=>ve(Xt,"$toolStore",n),a=D();let s=F(e,"toolId",8);$(()=>(r(),Q(s())),()=>{x(a,r().get(s()))}),pe(),fe();var c=Ae(),u=ue(c);{var f=h=>{var g=Ze(()=>s()===o());rl(h,{get isOpen(){return p(g)},children:(v,m)=>{var E=yT();We(E,5,()=>Object.entries(p(a)),I=>I[0],(I,w)=>{OT(I,{get constraintId(){return p(w)[0]},get toolId(){return s()}})}),H(E),N(v,E)},$$slots:{default:!0}})};ge(u,h=>{p(a)&&Object.entries(p(a)).length&&h(f)})}N(t,c),re()}var LT=oe('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function AT(t,e){let n=F(e,"title",8),r=F(e,"closeCb",8);var o=LT(),a=q(o),s=q(a,!0);H(a);var c=U(a,2);H(o),Z(()=>nt(s,n())),Te("click",c,function(...u){var f;(f=r())==null||f.apply(this,u)}),N(t,o)}var ST=oe('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Gr(t,e){ne(e,!1);let n=F(e,"showModal",12),r=F(e,"title",8),o=D();function a(){n(!1),p(o).close()}$(()=>(p(o),Q(n())),()=>{p(o)&&n()&&p(o).showModal()}),$(()=>(p(o),Q(n())),()=>{p(o)&&!n()&&p(o).close()}),pe();var s=ST(),c=q(s),u=q(c);AT(u,{get title(){return r()},closeCb:a});var f=U(u,2),h=q(f),g=q(h);dt(g,e,"default",{}),H(h),H(f),H(c),H(s),Io(s,v=>x(o,v),()=>p(o)),Te("click",c,Kn(function(v){kw.call(this,e,v)})),Te("close",s,()=>{n(!1)}),Te("click",s,Rw(Kn(()=>p(o).close()))),N(t,s),re()}var xT=oe('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function NT(t,e){ne(e,!1);let n=F(e,"searchPattern",12,""),r=F(e,"showModal",8),o=D(null);$(()=>(Q(r()),p(o)),()=>{r()&&p(o)&&p(o).focus()}),pe();var a=xT(),s=U(q(a),2);Vt(s),S(s,"spellcheck",!1),Io(s,c=>x(o,c),()=>p(o)),H(a),qn(s,n),N(t,a),re()}var TT=oe('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function DT(t,e){let n=F(e,"showModal",12),r=F(e,"searchPattern",12,""),o=F(e,"title",8);Gr(t,{get title(){return o()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=TT(),u=q(c);NT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var f=U(u,2),h=q(f),g=q(h);dt(g,e,"default",{}),H(h),H(f),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0})}var RT=oe('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),kT=oe('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Xr(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0),o=F(e,"isCollapsible",8,!1);var a=Ae(),s=ue(a);{var c=f=>{var h=RT(),g=q(h),v=q(g),m=q(v,!0);H(v),H(g);var E=U(g,2),I=q(E);dt(I,e,"default",{}),H(E),H(h),Z(()=>nt(m,n())),N(f,h)},u=f=>{var h=kT(),g=q(h),v=q(g),m=q(v,!0);H(v),H(g);var E=U(g,2),I=q(E);dt(I,e,"default",{});var w=U(I,2);H(E),H(h),Z(()=>{nt(m,n()),yt(w,"open",r())}),Te("click",h,()=>r(!r())),N(f,h)};ge(s,f=>{o()?f(u,!1):f(c)})}N(t,a)}var GT=oe('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),MT=oe('<ol class="svelte-cd45on"></ol>'),$T=oe("<!> <!>",1);function FT(t,e){ne(e,!1);const n=D();let r=F(e,"category",8),o=F(e,"addTool",8),a=F(e,"searchResults",8),s=D(!0);$(()=>(Q(a()),Q(r())),()=>{x(n,a().filter(h=>{var g,v;return(v=(g=h.info.meta)==null?void 0:g.categories)==null?void 0:v.includes(r())}))}),pe(),fe();var c=Ae(),u=ue(c);{var f=h=>{var g=$T(),v=ue(g);Xr(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(E){x(s,E)},$$legacy:!0});var m=U(v,2);rl(m,{get isOpen(){return p(s)},children:(E,I)=>{var w=MT();We(w,5,()=>p(n),gt,(b,L)=>{let T=()=>p(L).key,k=()=>p(L).info;var G=GT(),P=q(G),z=q(P,!0);H(P),H(G),Z(()=>{var X;S(P,"title",(X=k().meta)==null?void 0:X.description),nt(z,T())}),Te("click",P,()=>{o()(T())}),N(b,G)}),H(w),N(E,w)},$$slots:{default:!0}}),N(h,g)};ge(u,h=>{p(n).length&&h(f)})}N(t,c),re()}function UT(t,e){ne(e,!1);const n=D();let r=F(e,"searchPattern",8,""),o=F(e,"addTool",8),a=F(e,"categories",8),s=F(e,"filterFunc",8),c=F(e,"elementHandlers",8);$(()=>(Q(r()),Q(s()),Q(c())),()=>{x(n,iy(r(),s(),c()))}),pe(),fe();var u=Ae(),f=ue(u);We(f,1,a,gt,(h,g)=>{FT(h,{get category(){return p(g)},get searchResults(){return p(n)},get addTool(){return o()}})}),N(t,u),re()}var HT=oe('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function ol(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8);var o=HT();S(o,"tabindex",0);var a=q(o),s=q(a);dt(s,e,"add-button",{}),H(a);var c=U(a,2),u=q(c),f=q(u);dt(f,e,"title-icon",{}),H(u);var h=U(u);H(c);var g=U(c,2),v=q(g);H(g),H(o),Z(()=>{nt(h,` ${r()??""}`),yt(v,"open",n())}),Te("click",o,()=>n(!n())),Te("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,o)}var PT=oe('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function BT(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8),o=F(e,"showModal",12);function a(){o(!o())}ol(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=PT();Te("click",u,Kn(()=>a())),N(s,u)},"title-icon":(s,c)=>{var u=Ae(),f=ue(u);dt(f,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var WT=oe('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),zT=oe('<div class="panel-container svelte-hixu4"><!> <!></div>');function il(t,e){let n=F(e,"isOpen",8,!0);var r=zT(),o=q(r);dt(o,e,"panel-header",{});var a=U(o,2);rl(a,{get isOpen(){return n()},children:(s,c)=>{var u=WT(),f=q(u);dt(f,e,"panel-content",{}),H(u),N(s,u)},$$slots:{default:!0}}),H(r),N(t,r)}var YT=oe("<!> <!>",1);function md(t,e){ne(e,!1);let n=F(e,"categories",8),r=F(e,"title",8),o=F(e,"onAddTool",8),a=F(e,"elementHandlerFilterFunc",8),s=F(e,"elementHandlers",8),c=D(!0),u=D(!1),f=D("");const h=g=>{x(u,!1),x(c,!0),o()(g)};fe(),il(t,{get isOpen(){return p(c)},set isOpen(g){x(c,g)},$$slots:{"panel-header":(g,v)=>{var m=YT(),E=ue(m);BT(E,{get title(){return r()},get isOpen(){return p(c)},set isOpen(w){x(c,w)},get showModal(){return p(u)},set showModal(w){x(u,w)},$$slots:{"title-icon":(w,b)=>{var L=Ae(),T=ue(L);dt(T,e,"title-icon",{}),N(w,L)}},$$legacy:!0});var I=U(E,2);DT(I,{get title(){return r()},get showModal(){return p(u)},set showModal(w){x(u,w)},get searchPattern(){return p(f)},set searchPattern(w){x(f,w)},children:(w,b)=>{UT(w,{get searchPattern(){return p(f)},get categories(){return n()},get filterFunc(){return a()},addTool:h,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(g,m)},"panel-content":(g,v)=>{var m=Ae(),E=ue(m);dt(E,e,"panel-content",{}),N(g,m)}},$$legacy:!0}),re()}var jT=oe("<!> <!>",1);function VT(t,e){ne(e,!1);const n=Xe(),r=()=>ve(rt,"$localConstraintsStore",n),o=D();let a=F(e,"elementHandlers",8);const s=[R.COSMETIC_TOOL],c=u=>{mv(u),Sr(u)};$(()=>(r(),R),()=>{x(o,(u,f)=>{var v;const h=r().has(u);return!!((v=f.meta)!=null&&v.categories.includes(R.COSMETIC_TOOL))&&!h})}),pe(),fe(),md(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,f)=>{IT(u)},"panel-content":(u,f)=>{var h=Ae(),g=ue(h);We(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>p(m)[0];var I=Ae(),w=ue(I);{var b=L=>{var T=jT(),k=ue(T);Ov(k,{get toolId(){return E()},get elementHandlers(){return a()}});var G=U(k,2);yv(G,{get toolId(){return E()}}),N(L,T)};ge(w,L=>{Qw(E())&&L(b)})}N(v,I)}),N(u,h)}}}),re()}var Lv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Lv||{});const Ls=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Av=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function qT(t,e){Tr.update(n=>n.setConstraint(t,e))}function XT(t){Tr.update(e=>e.removeConstraint(t))}function zg(t){t.type===Lv.REMOVE_GLOBAL_CONSTRAINT?XT(t.payload):qT(t.payload.tool,t.payload.value)}function Cu(t,e){return{execute:()=>{zg(t)},unExecute:()=>{zg(e)}}}var KT=oe('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function ZT(t,e){let n=F(e,"value",8,!1);var r=KT(),o=q(r);Vt(o),H(r),Z(()=>vh(o,n())),N(t,r)}function QT(t,e){ne(e,!1);let n=F(e,"toolId",8),r=F(e,"value",8,!1),o=F(e,"elementHandlers",8);const a=()=>{const u=Ls(n(),!r()),f=Ls(n(),r()),h=Cu(u,f);un(h)},s=()=>{const u=Av(n()),f=Ls(n(),r()),h=Cu(u,f);un(h)};fe();var c=Ze(()=>Kr(n(),o()));ra(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,f)=>{ZT(u,{get value(){return r()}})},$$slots:{default:!0}}),re()}var JT=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function eD(t){var e=JT();N(t,e)}function tD(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Tr,"$globalConstraintsStore",n),o=D();let a=F(e,"elementHandlers",8);const s=eO,c=u=>{const f=Ls(u,!0),h=Av(u),g=Cu(f,h);un(g)};$(()=>r(),()=>{x(o,(u,f)=>{var v;const h=!!((v=f.meta)!=null&&v.categories.includes(R.GLOBAL_CONSTRAINT)),g=r().has(u);return h&&!g})}),pe(),fe(),md(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,f)=>{eD(u)},"panel-content":(u,f)=>{var h=Ae(),g=ue(h);We(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>p(m)[0],I=()=>p(m)[1];QT(v,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return a()}})}),N(u,h)}}}),re()}var nD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function rD(t){var e=nD();N(t,e)}var oD=oe("<!> <!>",1),iD=oe("<!> <!> <!> <!>",1);function aD(t,e){ne(e,!1);const n=Xe(),r=()=>ve(rt,"$localConstraintsStore",n),o=D();let a=F(e,"elementHandlers",8);const s=Jw,c=u=>{mv(u),Sr(u)};$(()=>(r(),R),()=>{x(o,(u,f)=>{var v;const h=r().has(u);return!!((v=f.meta)!=null&&v.categories.includes(R.LOCAL_CONSTRAINT))&&!h})}),pe(),fe(),md(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(o)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,f)=>{rD(u)},"panel-content":(u,f)=>{var h=iD(),g=ue(h),v=Ze(()=>Kr(d.GIVEN,a()));ra(g,{get elementInfo(){return p(v)}});var m=U(g,2),E=Ze(()=>Kr(d.REGIONS,a()));ra(m,{get elementInfo(){return p(E)}});var I=U(m,2),w=Ze(()=>Kr(d.FOG,a()));ra(I,{get elementInfo(){return p(w)}});var b=U(I,2);We(b,1,()=>r().entries(),([L,T])=>L,(L,T)=>{let k=()=>p(T)[0];var G=Ae(),P=ue(G);{var z=X=>{var te=oD(),de=ue(te);Ov(de,{get toolId(){return k()},get elementHandlers(){return a()}});var ee=U(de,2);yv(ee,{get toolId(){return k()}}),N(X,te)};ge(P,X=>{Xw(k())&&X(z)})}N(L,G)}),N(u,h)}}}),re()}var sD=oe('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Jc(t,e){ne(e,!1);const n=D();let r=F(e,"value",8),o=F(e,"onChangeCb",8,void 0),a=D(void 0);function s(m){const E=Vc(m);E&&o()&&o()(E)}$(()=>Q(r()),()=>{x(n,r())}),$(()=>(p(n),Vc),()=>{gu(p(n))&&x(a,Vc(p(n)))}),pe(),fe();var c=sD(),u=q(c);const f=Ze(()=>av(p(n)));var h=q(u);Vt(h),H(u);var g=U(u,2),v=U(q(g),2);Vt(v),S(v,"spellcheck",!1),S(v,"maxlength",30),H(g),H(c),Z(()=>{S(u,"style",`--choosen-color: ${p(a)??""}`),yt(u,"transparent",p(f))}),qn(h,()=>p(n),m=>x(n,m)),Te("change",h,()=>s(p(n))),qn(v,()=>p(n),m=>x(n,m)),Te("input",v,()=>s(p(n))),N(t,c),re()}var lD=oe('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function oa(t,e){let n=F(e,"name",8);var r=lD(),o=q(r),a=q(o,!0);H(o);var s=U(o,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var cD=oe('<input class="control-slider svelte-1rsuho6" type="range">');function uD(t,e){ne(e,!1);let n=F(e,"min",8),r=F(e,"max",8),o=F(e,"value",12),a=F(e,"step",24,()=>(r()-n())/10),s=F(e,"onChangeCb",8,void 0),c=F(e,"onInputCb",8,void 0);fe();var u=cD();Vt(u),Z(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",a())}),qn(u,o),Te("change",u,()=>{s()&&s()(o())}),Te("input",u,()=>{c()&&c()(o())}),N(t,u),re()}function jr(t,e){let n=F(e,"name",8),r=F(e,"value",12),o=F(e,"min",8),a=F(e,"max",8),s=F(e,"step",24,()=>(a()-o())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);oa(t,{get name(){return`${n()??""}: ${r()??""}`},children:(f,h)=>{uD(f,{get min(){return o()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var dD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function _D(t){var e=dD();N(t,e)}var fD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function gD(t){var e=fD();N(t,e)}var hD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function vD(t){var e=hD();N(t,e)}var pD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function mD(t){var e=pD();N(t,e)}var ED=oe('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function CD(t,e){ne(e,!1);const n=[];let r=F(e,"value",8),o=F(e,"selectedShape",12),a=F(e,"title",8),s=F(e,"updateShapeCb",8,void 0);fe();var c=ED(),u=q(c);Vt(u);var f,h=U(u,2);dt(h,e,"default",{}),H(c),Z(()=>{S(c,"title",a()),yt(c,"active",r()===o()),f!==(f=r())&&(u.value=(u.__value=r())==null?"":r())}),Ps(n,[],u,()=>(r(),o()),o),Te("change",u,()=>s()&&s()(r())),N(t,c),re()}var ID=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function bD(t){var e=ID(),n=q(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),H(e),N(t,e)}var wD=oe('<div class="icon-wrapper svelte-18euf14"><!></div>'),OD=oe('<div class="radio-container svelte-18euf14"></div>');function yD(t,e){ne(e,!1);let n=F(e,"name",8),r=F(e,"selectedShape",8),o=F(e,"possibleShapes",8),a=F(e,"updateShapeCb",8,void 0);const s=new Map([[W.CIRCLE,vD],[W.ELLIPSE,bD],[W.SQUARE,gD],[W.RECTANGLE,_D],[W.POLYGON,mD]]);fe(),oa(t,{get name(){return n()},children:(c,u)=>{var f=OD();We(f,5,o,gt,(h,g)=>{CD(h,{get title(){return p(g)},get value(){return p(g)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(v,m)=>{var E=Ae(),I=ue(E);{var w=b=>{var L=wD(),T=q(L);uh(T,()=>s.get(p(g)),(k,G)=>{G(k,{})}),H(L),N(b,L)};ge(I,b=>{s.has(p(g))&&b(w)})}N(v,E)},$$slots:{default:!0}})}),H(f),N(c,f)},$$slots:{default:!0}}),re()}var LD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function AD(t){var e=LD();N(t,e)}var SD=oe('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),xD=oe("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function ND(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Xt,"$toolStore",n),o=()=>ve(hr,"$currentConstraintStore",n),a=D(),s=D(),c=D();let u=D(!0),f=F(e,"elementHandlers",8);function h(w,b){const L=(w==null?void 0:w.shape)??(b?au(b):void 0);return Xc(L),L}function g(w,b){p(c)&&(dw(c,p(c)[w]=b),Xc(p(c)))}function v(){p(s)&&(x(c,au(p(s))),Xc(p(c)))}function m(w){return w&&[W.CIRCLE,W.SQUARE,W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(w)}function E(w){return w&&[W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(w)}function I(w){return w&&[W.ELLIPSE,W.RECTANGLE].includes(w)}$(()=>(r(),Q(f())),()=>{x(a,Kr(r(),f()))}),$(()=>p(a),()=>{x(s,p(a).shape)}),$(()=>(o(),p(s)),()=>{var w;x(c,h(((w=o())==null?void 0:w.constraint)??null,p(s)))}),pe(),fe(),il(t,{get isOpen(){return p(u)},set isOpen(w){x(u,w)},$$slots:{"panel-header":(w,b)=>{ol(w,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(L){x(u,L)},$$slots:{"title-icon":(L,T)=>{AD(L)}},$$legacy:!0})},"panel-content":(w,b)=>{var L=Ae(),T=ue(L);{var k=G=>{var P=xD(),z=ue(P);{var X=$e=>{var be=SD();Te("click",be,v),N($e,be)};ge(z,$e=>{uO(p(s))&&$e(X)})}var te=U(z,2);{var de=$e=>{yD($e,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:be=>g("type",be)})};ge(te,$e=>{var be;p(s).allowedTypes&&p(s).allowedTypes.length&&((be=p(c))!=null&&be.type)&&$e(de)})}var ee=U(te,2);{var le=$e=>{var be=Ze(()=>p(s).n.lb??3),Ge=Ze(()=>p(s).n.ub??10);jr($e,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(be)},get max(){return p(Ge)},step:1,onChangeCb:Me=>g("n",Me)})};ge(ee,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.n)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.n)!=null&&Me.editable)&&E(p(c).type)&&$e(le)})}var Ie=U(ee,2);{var me=$e=>{var be=Ze(()=>p(s).r.lb??0),Ge=Ze(()=>p(s).r.ub??1),Me=Ze(()=>p(s).r.step??.05);jr($e,{name:"Radius",get value(){return p(c).r},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("r",xt)})};ge(Ie,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.r)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.r)!=null&&Me.editable)&&m(p(c).type)&&$e(me)})}var Ee=U(Ie,2);{var xe=$e=>{var be=Ze(()=>p(s).width.lb??0),Ge=Ze(()=>p(s).width.ub??1),Me=Ze(()=>p(s).width.step??.05);jr($e,{name:"Width",get value(){return p(c).width},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("width",xt)})};ge(Ee,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.width)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.width)!=null&&Me.editable)&&I(p(c).type)&&$e(xe)})}var st=U(Ee,2);{var Se=$e=>{var be=Ze(()=>p(s).height.lb??0),Ge=Ze(()=>p(s).height.ub??1),Me=Ze(()=>p(s).height.step??.05);jr($e,{name:"Height",get value(){return p(c).height},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("height",xt)})};ge(st,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.height)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.height)!=null&&Me.editable)&&I(p(c).type)&&$e(Se)})}var we=U(st,2);{var _t=$e=>{var be=Ze(()=>p(s).angle.lb??0),Ge=Ze(()=>p(s).angle.ub??360),Me=Ze(()=>p(s).angle.step??15);jr($e,{name:"Angle",get value(){return p(c).angle},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("angle",xt)})};ge(we,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.angle)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.angle)!=null&&Me.editable)&&$e(_t)})}var ut=U(we,2);{var Un=$e=>{var be=Ze(()=>p(s).inset.lb??0),Ge=Ze(()=>p(s).inset.ub??.5),Me=Ze(()=>p(s).inset.step??.01);jr($e,{name:"Inset",get value(){return p(c).inset},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("inset",xt)})};ge(ut,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.inset)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.inset)!=null&&Me.editable)&&$e(Un)})}var Lt=U(ut,2);{var Ln=$e=>{oa($e,{name:"Stroke",children:(be,Ge)=>{Jc(be,{get value(){return p(c).stroke},onChangeCb:Me=>g("stroke",Me)})},$$slots:{default:!0}})};ge(Lt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.stroke)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.stroke)!=null&&Me.editable)&&$e(Ln)})}var Zt=U(Lt,2);{var pr=$e=>{var be=Ze(()=>p(s).strokeWidth.lb??0),Ge=Ze(()=>p(s).strokeWidth.ub??.8),Me=Ze(()=>p(s).strokeWidth.step??.01);jr($e,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("strokeWidth",xt)})};ge(Zt,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeWidth)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeWidth)!=null&&Me.editable)&&$e(pr)})}var Jn=U(Zt,2);{var mr=$e=>{var be=Ze(()=>p(s).strokeDasharray.lb??0),Ge=Ze(()=>p(s).strokeDasharray.ub??1),Me=Ze(()=>p(s).strokeDasharray.step??.01);jr($e,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(be)},get max(){return p(Ge)},get step(){return p(Me)},onChangeCb:xt=>g("strokeDasharray",xt)})};ge(Jn,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.strokeDasharray)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.strokeDasharray)!=null&&Me.editable)&&$e(mr)})}var ar=U(Jn,2);{var yi=$e=>{oa($e,{name:"Fill",children:(be,Ge)=>{Jc(be,{get value(){return p(c).fill},onChangeCb:Me=>g("fill",Me)})},$$slots:{default:!0}})};ge(ar,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fill)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fill)!=null&&Me.editable)&&$e(yi)})}var Mr=U(ar,2);{var ko=$e=>{oa($e,{name:"Font Color",children:(be,Ge)=>{Jc(be,{get value(){return p(c).fontColor},onChangeCb:Me=>g("fontColor",Me)})},$$slots:{default:!0}})};ge(Mr,$e=>{var be,Ge,Me;((be=p(c))==null?void 0:be.fontColor)!==void 0&&((Me=(Ge=p(s))==null?void 0:Ge.fontColor)!=null&&Me.editable)&&$e(ko)})}N(G,P)};ge(T,G=>{p(s)&&G(k)})}N(w,L)}},$$legacy:!0}),re()}var TD=oe('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function wa(t,e){let n=F(e,"clickCb",8),r=F(e,"title",8);var o=TD(),a=q(o),s=q(a);dt(s,e,"default",{}),H(a),H(o),Z(()=>S(o,"title",r())),Te("click",o,Kn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,o)}var DD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function RD(t){var e=DD();N(t,e)}var kD=oe('<div class="buttons-container svelte-kc00rw"><!></div>');function al(t,e){var n=kD(),r=q(n);dt(r,e,"default",{}),H(n),N(t,n)}var GD=oe('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),MD=oe('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),$D=oe('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function FD(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Nr,"$puzzleMetaStore",n),o=()=>ve(Tr,"$globalConstraintsStore",n),a=()=>ve(rt,"$localConstraintsStore",n);let s=F(e,"showModal",12,!1),c=D(""),u=D(""),f=D(""),h=D(""),g=D("");function v(){s(!1)}function m(){const b=p(u)?E(p(u)):["Anonymous"],T={title:p(c)?p(c):"Sudoku",authors:b,ruleset:p(f),ctcYoutubeUrl:p(h),ctcUrl:p(g)};iL(T),s(!1)}function E(b){return b.split(/\s*[;]\s*/)}function I(){var P,z,X,te;let b="";const L=$t,T=o();!!T.get(d.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[de,ee]of T.entries())if(de!==d.SUDOKU_RULES_DO_NOT_APPLY&&ee){const le=L[de],Ie=((P=le.menu)==null?void 0:P.name)??le.toolId,me=(z=le.meta)==null?void 0:z.description;b+=`**${Ie}**: ${me}

`}const G=a();for(const[de,ee]of G.entries())if(Object.keys(ee).length>0){const Ie=L[de],me=((X=Ie.menu)==null?void 0:X.name)??Ie.toolId,Ee=(te=Ie.meta)==null?void 0:te.description;b+=`**${me}**: ${Ee}

`}return b.trim()}function w(){const b=I();x(f,b)}$(()=>(Q(s()),r(),xs),()=>{if(!s()){const b=r().authors;x(c,r().title??""),x(u,b?xs(b,"; ","; "):""),x(f,r().ruleset??""),x(h,r().ctcYoutubeUrl??""),x(g,r().ctcUrl??"")}}),pe(),fe(),Gr(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(b){s(b)},children:(b,L)=>{var T=$D(),k=q(T);Xr(k,{title:"Title"});var G=U(k,2);Vt(G);var P=U(G,2);Xr(P,{title:"Authors"});var z=U(P,2);Vt(z);var X=U(z,2);Xr(X,{title:"Ruleset",children:(Ee,xe)=>{var st=GD();Te("click",st,w),N(Ee,st)},$$slots:{default:!0}});var te=U(X,2);Iw(te),S(te,"rows",8);var de=U(te,2);Xr(de,{title:"CTC Link"});var ee=U(de,2);Vt(ee);var le=U(ee,2);Xr(le,{title:"CTC Youtube Link"});var Ie=U(le,2);Vt(Ie);var me=U(Ie,2);al(me,{children:(Ee,xe)=>{var st=MD(),Se=ue(st),we=U(Se,2);Te("click",Se,m),Te("click",we,v),N(Ee,st)},$$slots:{default:!0}}),H(T),qn(G,()=>p(c),Ee=>x(c,Ee)),qn(z,()=>p(u),Ee=>x(u,Ee)),qn(te,()=>p(f),Ee=>x(f,Ee)),qn(ee,()=>p(g),Ee=>x(g,Ee)),qn(Ie,()=>p(h),Ee=>x(h,Ee)),N(b,T)},$$slots:{default:!0},$$legacy:!0}),re()}var UD=oe("<!> <!>",1);function HD(t){let e=D(!1);function n(){x(e,!0)}var r=UD(),o=ue(r);wa(o,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{RD(s)},$$slots:{default:!0}});var a=U(o,2);FD(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var PD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function BD(t){var e=PD();N(t,e)}var WD=oe('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function zD(t,e){ne(e,!1);let n=D(null),r=D(null);function o(){var a;(a=p(n))==null||a.click()}$(()=>(p(r),Ds),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const f=JSON.parse(u),h=Wy(f);console.log(h),dL(h),Ds()}},s.onerror=function(){alert(s.error)}}}),pe(),fe(),wa(t,{title:"Open Puzzle",clickCb:o,children:(a,s)=>{var c=WD(),u=ue(c);BD(u);var f=U(u,2);Io(f,h=>x(n,h),()=>p(n)),Dw(f,()=>p(r),h=>x(r,h)),N(a,c)},$$slots:{default:!0}}),re()}var YD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function jD(t){var e=YD();N(t,e)}var VD=oe('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Yg(t,e){ne(e,!1);let n=F(e,"name",8),r=F(e,"min",8),o=F(e,"max",8),a=F(e,"value",12),s=F(e,"step",24,()=>(o()-r())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);fe();var f=VD(),h=q(f),g=q(h);H(h);var v=U(h,2);Vt(v),H(f),Z(()=>{nt(g,`${n()??""}: ${a()??""}`),S(v,"min",r()),S(v,"max",o()),S(v,"step",s())}),qn(v,a),Te("change",v,()=>{c()&&c()(a())}),Te("input",v,()=>{u()&&u()(a())}),N(t,f),re()}var qD=oe('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),XD=oe('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function KD(t,e){ne(e,!1);let n=F(e,"showModal",12,!1);const r=4,o=20;let a=D(9),s=D(9),c=D(""),u=D(Tt.range(1,10));function f(){n(!1)}function h(){Ds(),uL(p(s),p(a),p(u).sort()),n(!1)}function g(E){return E.map(w=>String(w)).join(",")}function v(){const E=Math.min(Math.max(p(s),p(a)),9);x(u,Tt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&x(u,E.replaceAll(" ","").split(",").map(Number))}fe(),Gr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var w=XD(),b=q(w);Yg(b,{name:"Width",min:r,max:o,step:1,onInputCb:v,get value(){return p(a)},set value(z){x(a,z)},$$legacy:!0});var L=U(b,2);Yg(L,{name:"Height",min:r,max:o,step:1,onInputCb:v,get value(){return p(s)},set value(z){x(s,z)},$$legacy:!0});var T=U(L,2),k=Ze(()=>`Allowed Digits (for the solver): ${g(p(u))}`);Xr(T,{get title(){return p(k)}});var G=U(T,2);Vt(G),Z(()=>S(G,"placeholder",g(p(u))));var P=U(G,2);al(P,{children:(z,X)=>{var te=qD(),de=ue(te),ee=U(de,2);Te("click",de,h),Te("click",ee,f),N(z,te)},$$slots:{default:!0}}),H(w),qn(G,()=>p(c),z=>x(c,z)),Te("input",G,()=>m(p(c))),N(E,w)},$$slots:{default:!0},$$legacy:!0}),re()}var ZD=oe("<!> <!>",1);function QD(t){let e=D(!1);function n(){x(e,!0)}var r=ZD(),o=ue(r);wa(o,{title:"New Puzzle",clickCb:n,children:(s,c)=>{jD(s)},$$slots:{default:!0}});var a=U(o,2);KD(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var JD=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function eR(t){var e=JD();N(t,e)}var tR=oe('<button class="modal-button">Cancel</button>'),nR=oe('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function rR(t,e){ne(e,!1);const n=Xe(),r=()=>ve(ri,"$svgRefStore",n),o=()=>ve(Ea,"$puzzleStore",n),a=()=>ve(Nr,"$puzzleMetaStore",n),s=D();let c=F(e,"showModal",12,!1);function u(w){const b=getComputedStyle(w);let L="";for(let T of b){const k=b.getPropertyValue(T);k&&(L+=`${T}:${k};`)}return L}function f(w){const b=w.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(w));const L=w.childNodes;for(let T=0;T<L.length;T++){const k=L[T];if(k instanceof Element){const G=f(k);b.replaceChild(G,b.childNodes[T])}}return b}function h(w,b="download.png"){const L=f(w),k=new XMLSerializer().serializeToString(L),G=new Image,P=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),z=URL.createObjectURL(P);G.onload=()=>{const X=w.getBoundingClientRect(),te=X.width,de=X.height,ee=document.createElement("canvas"),le=window.devicePixelRatio||1;ee.width=te*le,ee.height=de*le;const Ie=ee.getContext("2d");Ie&&(Ie.scale(le,le),Ie.drawImage(G,0,0,te,de),ee.toBlob(me=>{if(!me)return;const Ee=URL.createObjectURL(me),xe=document.createElement("a");xe.href=Ee,xe.download=b,xe.click(),URL.revokeObjectURL(Ee)}))},G.src=z}function g(w,b="download.svg"){const L=f(w);let k=new XMLSerializer().serializeToString(L);k.includes("<?xml")||(k=`<?xml version="1.0" standalone="no"?>\r
`+k);const G=new Blob([k],{type:"image/svg+xml"}),P=URL.createObjectURL(G),z=document.createElement("a");z.href=P,z.download=b,z.click(),URL.revokeObjectURL(P)}const v=()=>{const w=By(o());return JSON.stringify(w,null,2)},m=()=>{function w(T,k,G){var P=document.createElement("a"),z=new Blob([T],{type:G});P.href=URL.createObjectURL(z),P.download=k,P.click(),URL.revokeObjectURL(P.href)}const b=v(),L=hu(a());w(b,`${L}.json`,"text/plain")};function E(){c(!1)}const I=1;$(()=>r(),()=>{x(s,r())}),pe(),fe(),Gr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(w){c(w)},children:(w,b)=>{var L=nR(),T=q(L),k=q(T),G=q(k),P=U(G,2),z=U(P,2);H(k);var X=U(k,2),te=U(q(X),2),de=q(te);S(de,"width",400*I),S(de,"height",300*I),H(te),H(X),H(T);var ee=U(T,2);al(ee,{children:(le,Ie)=>{var me=tR();Te("click",me,E),N(le,me)},$$slots:{default:!0}}),H(L),Te("click",G,m),Te("click",P,()=>h(p(s))),Te("click",z,()=>g(p(s))),N(w,L)},$$slots:{default:!0},$$legacy:!0}),re()}var oR=oe("<!> <!>",1);function iR(t){let e=D(!1);function n(){x(e,!0)}var r=oR(),o=ue(r);wa(o,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{eR(s)},$$slots:{default:!0}});var a=U(o,2);rR(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var aR=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Sv(t){var e=aR();N(t,e)}var sR=oe('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),lR=oe('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function bs(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0);var o=lR(),a=q(o);Xr(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=U(a,2);rl(s,{get isOpen(){return r()},children:(c,u)=>{var f=sR(),h=q(f);dt(h,e,"default",{}),H(f),N(c,f)},$$slots:{default:!0}}),H(o),N(t,o)}var cR=oe('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function uR(t,e){let n=F(e,"value",8),r=F(e,"onClickCb",8),o=F(e,"disabled",8,!1);var a=cR(),s=q(a);Vt(s),Co(2),H(a),Z(()=>{yt(a,"disabled",o()),vh(s,n()),s.disabled=o()}),Te("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,a)}var dR=oe('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Vr(t,e){ne(e,!1);let n=F(e,"value",8),r=F(e,"name",8),o=F(e,"updateCb",8,void 0),a=F(e,"disabled",8,!1);function s(){a()||o()&&o()(!n())}fe();var c=dR(),u=q(c);uR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var f=U(u,2),h=q(f,!0);H(f),H(c),Z(()=>{yt(c,"disabled",a()),nt(h,r())}),Te("click",f,Kn(s)),N(t,c),re()}var _R=oe("<!> <!>",1),fR=oe("<!> <!> <!>",1),gR=oe("<!> <!>",1),hR=oe('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function xv(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(qs,"$gameModeStore",n),a=D();let s=F(e,"showModal",12,!1);$(()=>r(),()=>{x(a,r())}),pe(),fe(),Gr(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var f=hR(),h=q(f);bs(h,{title:"General",children:(I,w)=>{Vr(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Fw})},$$slots:{default:!0}});var g=U(h,2);bs(g,{title:"Tools",children:(I,w)=>{var b=_R(),L=ue(b);Vr(L,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:Hw});var T=U(L,2);Vr(T,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:Pw}),N(I,b)},$$slots:{default:!0}});var v=U(g,2);bs(v,{title:"Gameplay",children:(I,w)=>{var b=fR(),L=ue(b);Vr(L,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:Ww});var T=U(L,2);Vr(T,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:zw});var k=U(T,2);Vr(k,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:Bw}),N(I,b)},$$slots:{default:!0}});var m=U(v,2);{var E=I=>{bs(I,{title:"Setting Mode Display",children:(w,b)=>{var L=gR(),T=ue(L);Vr(T,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:Yw});var k=U(T,2);Vr(k,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:jw}),N(w,L)},$$slots:{default:!0}})};ge(m,I=>{o()===si.SETTING&&I(E)})}H(f),N(c,f)},$$slots:{default:!0},$$legacy:!0}),re()}var vR=oe("<!> <!>",1);function pR(t){let e=D(!1);function n(){x(e,!0)}var r=vR(),o=ue(r);wa(o,{title:"Settings",clickCb:n,children:(s,c)=>{Sv(s)},$$slots:{default:!0}});var a=U(o,2);xv(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var mR=oe('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function ER(t){var e=mR(),n=q(e);QD(n);var r=U(n,2);iR(r);var o=U(r,2);zD(o,{});var a=U(o,2);HD(a);var s=U(a,2);pR(s),H(e),N(t,e)}var CR=oe('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function IR(t,e){ne(e,!1);let n=D(!1);function r(){const o=ct(_n),a=[];for(let s=0;s<o.nRows;s++){const c=[];for(let u=0;u<o.nCols;u++){const f=o.getCell(s,u);if(!f)continue;const h=f.value;c.push(h)}a.push(c)}ud(a)}fe(),il(t,{get isOpen(){return p(n)},set isOpen(o){x(n,o)},$$slots:{"panel-header":(o,a)=>{ol(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){x(n,s)},$$legacy:!0})},"panel-content":(o,a)=>{var s=CR();Te("click",s,r),N(o,s)}},$$legacy:!0}),re()}const bR={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function wR(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],a=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[a,o]};if(o==="<"||o==="<=")return{upper_bound:[a,o]}}if(r=n.exec(t),r){const o=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,o==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function OR(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function yR(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Nv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function LR(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=OR(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=yR(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const a=wR(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=Nv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var ce=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t))(ce||{});function Dt(t,e){return`${e}[${t.r},${t.c}]`}function Do(t,e){return t.map(r=>Dt(r,e))}function ke(t,e){return"["+Do(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function Ye(t){return t.map(n=>Oe(n))}function AR(t){return`values_grid[${t.r},${t.c}]`}function sl(t){return t.map(e=>AR(e))}function Eo(t){return`constraint alldifferent([${t.join(",")}]);
`}function It(t,e){return t&&(t=`
% ${e}
`+t),t}function Ed(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o);r.push(a)}return r}function Cd(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const o of n){const a=t.getCellsInDirection(e.r,e.c,o),s="["+Ye(a).join(",")+"]";r.push(s)}return r}function ll(t,e,n,r){let o="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);o+=c}return o}class SR{constructor(e){he(this,"model_str","");he(this,"used_vars");he(this,"puzzle");he(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=bR){const o=LR(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let a="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],f=c.lower_bound[1];a+=`constraint ${n} ${f} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],f=c.upper_bound[1];a+=`constraint ${n} ${f} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return o.type==="var_list"?null:[a,n]}}function xR(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const w=e[I].trim(),b=w.match(r),L=w.match(o),T=w.match(a);if(b||L||T){s={name:(b||L||T)[1],startLine:I,content:[e[I]]},c=(w.match(/\(/g)||[]).length-(w.match(/\)/g)||[]).length,u=(w.match(/\{/g)||[]).length-(w.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(w.match(/\(/g)||[]).length-(w.match(/\)/g)||[]).length,u+=(w.match(/\{/g)||[]).length-(w.match(/\}/g)||[]).length,c===0&&u===0&&w.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let k=s.startLine;for(;k>0&&e[k-1].trim().startsWith("%");)k-=1;n[s.name].startLine=k,s=null}}const f=new Set;function h(I){const w=[];for(const b of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${b}\\s*\\(`,"g").test(I)&&w.push(b);return w}for(const I of e)h(I).forEach(b=>f.add(b));const g=Object.values(n).filter(I=>!f.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));g.sort((I,w)=>w.start-I.start);const v=[...e];for(const I of g)v.splice(I.start,I.end-I.start+1);const m=[];let E=!1;for(const I of v)I.trim()===""?E||(m.push(I),E=!0):(m.push(I),E=!1);return m.join(`
`)}function jg(t){let e=t,n=e.length;for(;e=xR(e),e.length!=n;)n=e.length;return e}const Vg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function NR(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function TR(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),o=Math.max(...n);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${o}: board_regions;
`);for(const a of e.getAllCells()){const s=Dt(a,"board_regions");a.region!==null?t.add(`constraint ${s} = ${a.region};
`):t.add(`constraint ${s} = ${r-1};
`)}}}function DR(t,e){const r=t.grid.getPositiveDiagonal(),o=Ye(r);let a=Eo(o);return a=`
% Positive Diagonal Constraint
`+a,a}function RR(t,e){const r=t.grid.getNegativeDiagonal(),o=Ye(r);let a=Eo(o);return a=`
% Negative Diagonal Constraint
`+a,a}function kR(t,e){const r=t.grid.getPositiveDiagonal(),a="["+Ye(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function GR(t,e){const r=t.grid.getNegativeDiagonal(),a="["+Ye(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function MR(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,f]=[c.r,c.c];for(let h=0;h<u;h++){const g=n.getCell(h,f),v=n.getCell(u,f+(u-h));if(!g||!v)continue;const m=Oe(g),E=Oe(v),w=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;a+=w}}return a}function $R(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,f]=[c.r,c.c];for(let h=0;h<u;h++){const g=n.getCell(h,f),v=n.getCell(u,f-(u-h));if(!g||!v)continue;const m=Oe(g),E=Oe(v),w=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;a+=w}}return a}function FR(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let a=0;a<o;a++){const s=n.getDisjointGroup(a),f=`constraint alldifferent(${`[${Ye(s).join(",")}]`});
`;r+=f}return r}function UR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getNeighboorCells(o).filter(g=>g.r+g.c>=o.r+o.c),c=Oe(o),f=`[${Ye(s).join(",")}]`,h=`constraint different_from_group_p(${c}, ${f});
`;r+=h}return r}function HR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const s=n.getCellsByKnightMove(o).filter(g=>g.r>=o.r||g.c>=o.c),c=Oe(o),f=`[${Ye(s).join(",")}]`,h=`constraint different_from_group_p(${c}, ${f});
`;r+=h}return r}function PR(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=It(n,`${e}`),n}function BR(t,e){let n="";return n+=`constraint tango_p(board);
`,n=It(n,`${e}`),n}function WR(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=It(n,`${e}`),n}function*io(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function zR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of io(n)){const s=Oe(o),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function YR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of io(n)){const s=Oe(o),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function jR(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getRow(o.r),c=`[${Ye(a).join(",")}]`,u=o.c+1,f=`constraint indexing_column_p(${c}, ${u});
`;r+=f}return r}function VR(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function qR(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function XR(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=It(n,`${e}`),n}function eu(t,e){const n=t.grid,o=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const a=[];if(o)for(const c of Object.values(o)){const u=c.cells,f=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),h=c.value;(e===d.ALL_V_GIVEN&&(h==="v"||h==="V")||e===d.ALL_X_GIVEN&&(h==="x"||h==="X")||e===d.ALL_XV_GIVEN)&&a.push(f)}let s="";for(const[c,u]of io(n)){if(a.find(v=>v.has(c)&&v.has(u)))continue;const h=Oe(c),g=Oe(u);if(e===d.ALL_V_GIVEN){const v=`constraint ${h} + ${g} != 5;
`;s+=v}else if(e===d.ALL_X_GIVEN){const v=`constraint ${h} + ${g} != 10;
`;s+=v}else{const v=`constraint ${h} + ${g} != 5 /\\ (${h} + ${g} != 10);
`;s+=v}}return s=It(s,`${e}`),s}function ii(t,e){const n=[];if(e)for(const r of Object.values(e)){const o=r.cells,a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function KR(t,e){const n=t.grid,o=t.localConstraints.get(d.XY_DIFFERENCES),a=ii(n,o);let s="";for(const[c,u]of io(n)){if(a.find(E=>E.has(c)&&E.has(u)))continue;const h=Oe(c),g=Oe(u);let v="";if(c.r==u.r){const I=n.getRow(c.r)[0];v=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];v=Oe(I)}if(!v)continue;const m=`constraint abs(${h} - ${g}) != ${v};
`;s+=m}return s=It(s,`${e}`),s}function ZR(t,e){const n=t.grid,r=t.localConstraints,o=r.get(d.DIFFERENCE),a=r.get(d.RATIO);let s=ii(n,o);s=[...s,...ii(n,a)];let c=[];o&&(c=Object.values(o).map(h=>h.value).map(h=>h||"1"));const u=[...new Set(c)];let f="";for(const[h,g]of io(n)){if(s.find(I=>I.has(h)&&I.has(g)))continue;const m=Oe(h),E=Oe(g);for(const I of u){const w=parseInt(I),b=`constraint abs(${m} - ${E}) != ${w};
`;f+=b}}return f=It(f,`${e}`),f}function QR(t,e){const n=t.grid,r=t.localConstraints,o=r.get(d.RATIO),a=r.get(d.DIFFERENCE);let s=ii(n,o);s=[...s,...ii(n,a)];let c=[];o&&(c=Object.values(o).map(h=>h.value).map(h=>h||"2"));const u=[...new Set(c)];let f="";for(const[h,g]of io(n)){if(s.find(I=>I.has(h)&&I.has(g)))continue;const m=Oe(h),E=Oe(g);for(const I of u){const w=parseInt(I),b=`constraint not ratio_p(${m}, ${E}, ${w});
`;f+=b}}return f=It(f,`${e}`),f}function JR(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_KROPKI),a=ii(n,o);let s="";for(const[c,u]of io(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const h=Oe(c),g=Oe(u),v=Dt(c,ce.YIN_YANG),m=Dt(u,ce.YIN_YANG),E=`constraint not yin_yang_kropki_p(${h}, ${g}, ${v}, ${m});
`;s+=E}return s=It(s,`${e}`),s}function ek(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),a=o?Object.values(o):[];function s(u,f){return u.find(h=>h.cell.r===f.r&&h.cell.c===f.c)}let c="";for(const u of n.getAllCells()){const f=s(a,u),h=f?f.directions:[],g=Oe(u),v=[Be.E,Be.N,Be.S,Be.W];for(const m of v){if(h.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),I=ke(E,ce.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=It(c,`${e}`),c}function Id(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const o=r.cell,a=t.getCell(o.r,o.c);a&&n.add(a)}return n}function tk(t,e){const n=t.grid,o=t.localConstraints.get(d.INDEXING_COLUMN),a=Id(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const f=n.getRow(c.r),g=`[${Ye(f).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${g}, ${v});
`;s+=m}return s=It(s,`${e}`),s}function nk(t,e){const n=t.grid,o=t.localConstraints.get(d.RADAR),a=Id(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const f=Oe(c),[h,g,v,m]=Cd(n,c),E=`constraint not radar_p(${f}, ${h}, ${g}, ${v}, ${m}, 9);
`;s+=E}return s=It(s,`${e}`),s}function rk(t,e){const n=t.grid,o=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),a=Id(n,o);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const f=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${f});
`;s+=v}return s=It(s,`${e}`),s}function ok(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,a]of io(n)){const s=Oe(o),c=Oe(a),u=`nurimisaki[${o.r},${o.c}]`,f=`nurimisaki[${a.r},${a.c}]`,h=`constraint (${u} == 0 /\\ ${f} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=h}return r}function ik(t,e){const n=t.grid,o=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let a=`
% ${e}
`;for(const s of Object.values(o)){const u=s.cells.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h),f=ke(u,ce.YIN_YANG);a+=`constraint count_unique_values(${f}) >= 2;
`}return a}function ak(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=It(n,`${e}`),n}function sk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=It(n,`${e}`),n}function lk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=It(n,`${e}`),n}function ck(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=It(n,`${e}`),n}function uk(t,e){let n="";return n+=`constraint not_fully_shaded_or_unshaded_2x2_p(cave_shading);
`,n=It(n,`${e}`),n}function dk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=It(n,`${e}`),n}function _k(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=It(n,`${e}`),n}function fk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=It(n,`${e}`),n}function gk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=It(n,`${e}`),n}function hk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=It(n,`${e}`),n}function vk(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const a=r.getNeighboorCells(o).filter(f=>o.region!==null&&f.region===o.region),s=Dt(o,ce.BOARD),c=Dt(o,ce.YIN_YANG),u=ke(a,ce.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=It(n,`${e}`),n}function pk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=It(n,`${e}`),n}function mk(t,e){let n="";const a="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${a});
`,n=It(n,`${e}`),n}function Ek(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),f=Ye(u),h=Eo(f);r+=h}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),f=Ye(u),h=Eo(f);r+=h}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const f=n.getRegion(u),h=Ye(f),g=Eo(h);r+=g}}return r}function Ck(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const Ik=new Map([[d.POSITIVE_DIAGONAL,DR],[d.NEGATIVE_DIAGONAL,RR],[d.POSITIVE_ANTIDIAGONAL,kR],[d.NEGATIVE_ANTIDIAGONAL,GR],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,MR],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,$R],[d.ANTIKING,UR],[d.ANTIKNIGHT,HR],[d.ANTI_GIRAFFE,PR],[d.DISJOINT_GROUPS,FR],[d.TANGO,BR],[d.NONCONSECUTIVE,zR],[d.NONRATIO,YR],[d.ANTI_ENTROPY,WR],[d.GLOBAL_INDEXING_COLUMN,jR],[d.ALL_V_GIVEN,eu],[d.ALL_X_GIVEN,eu],[d.ALL_XV_GIVEN,eu],[d.ALL_DIFFERENCES_GIVEN,ZR],[d.ALL_RATIOS_GIVEN,QR],[d.ALL_XY_DIFFERENCES_GIVEN,KR],[d.ALL_YIN_YANG_KROPKI_GIVEN,JR],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,ek],[d.ALL_INDEXING_COLUMN_GIVEN,tk],[d.ALL_RADARS_GIVEN,nk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,rk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,ok],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,ik],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,XR],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,VR],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,qR],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,ak],[d.CAVE_CELLS_ARE_ODD,lk],[d.CAVE_WALLS_ARE_EVEN,ck],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,uk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,dk],[d.YIN_YANG_FILLOMINO_PARITY,sk],[d.TWO_SYMMETRIC_GALAXIES,gk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,_k],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,fk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,hk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,vk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,pk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,mk]]);function bk(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const a=Ik.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function Tv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return Ye(r)}function Dv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${Ye(n.slice(1)).join(",")}]`}function wk(t,e,n,r){let o="";const a=Tv(e,r),s=`arrow_${n}`;if(o+=`var int: ${s};
`,o+=`% arrow pill
`,a.length===1){const u=a[0];o+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((f,h)=>`${Math.pow(10,h)}*${f}`).join(" + ");o+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;o+=`% arrow lines
`;for(const u of c){const h=`constraint sum(${Dv(e,u)}) == ${s};
`;o+=h}return o}function Ok(t,e,n,r){let o="";const a=Tv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const h=`constraint average_arrow_p(${Dv(e,u)}, ${s});
`;o+=h}}return o}const yk=new Map([[d.ARROW,wk],[d.AVERAGE_ARROW,Ok]]);function Lk(t,e,n,r){let o="";const a=yk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function Zr(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return Ye(r)}function Rv(t,e,n){const o=`[${Zr(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function cl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function bd(t,e,n,r,o){const s=`[${Zr(e,r).join(",")}]`,c=r.value,u=cl(t,c,n);if(!u)return"";const f=u[1];let h=u[0];return h+=`constraint ${o}(${s}, ${f});
`,h}function Ak(t,e,n,r){const o=Zr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return Eo(o);const c=cl(t,s,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint killer_cage(${a}, ${u});
`,f}function Sk(t,e,n,r){const o=Zr(e,r),a=`[${o.join(",")}]`,s=r.value;if(!s)return Eo(o);const c=cl(t,s,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint inverted_killer_cage_p(${a}, ${u});
`,f}function xk(t,e,n,r){return bd(t,e,n,r,"sum_cage_p")}function Nk(t,e,n,r){return Rv(e,r,"parity_balance_cage_p")}function Tk(t,e,n,r){return Rv(e,r,"sum_cage_look_and_say_p")}function Dk(t,e,n,r){return bd(t,e,n,r,"divisible_killer_cage_p")}function Rk(t,e,n,r){return bd(t,e,n,r,"spotlight_cage_p")}function kk(t,e,n,r){const a=`[${Zr(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function Gk(t,e,n,r){const a=`[${Zr(e,r).join(",")}]`,s=r.value;let c="";const u=cl(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const h=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),g=[];for(const m of h)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!h.includes(I)&&!g.includes(I)&&g.push(I)});const v=ke(g,ce.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${v});
`,c}function kv(t,e,n,r,o){const s=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),u=`[${Ye(s).join(",")}]`,f=ke(s,ce.YIN_YANG),h=r.value;if(h){const g=parseInt(h);return`constraint ${o}(${u}, ${f}, ${g});
`}return""}function Mk(t,e,n,r){return kv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function $k(t,e,n,r){return kv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function Fk(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${Ye(a).join(",")}]`,f=`[${sl(a).join(", ")}]`,h=r.value;if(h){const g=parseInt(h);return`constraint doublers_killer_cage_p(${c}, ${f}, ${g});
`}return""}function Uk(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${Ye(a).join(",")}]`,f=`[${sl(a).join(", ")}]`,h=r.value;if(h){const g=parseInt(h);return`constraint negators_killer_cage_p(${c}, ${f}, ${g});
`}return""}function Hk(t,e){let n="";const r=new Map;for(const o of e){const a=o.value,s=r.get(a);if(!s){r.set(a,[o]);continue}s.push(o)}for(const o of r.values())if(!(o.length<=1))for(const[a,s]of o.flatMap((c,u)=>o.slice(u+1).map(f=>[c,f]))){const u=`[${Zr(t,a).join(",")}]`,h=`[${Zr(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${h});
`}return n}const Pk=new Map([[d.KILLER_CAGE,Ak],[d.INVERTED_KILLER_CAGE,Sk],[d.SUM_CAGE,xk],[d.PARITY_BALANCE_CAGE,Nk],[d.SUM_CAGE_LOOK_AND_SAY,Tk],[d.DIVISIBLE_KILLER_CAGE,Dk],[d.SPOTLIGHT_CAGE,Rk],[d.UNIQUE_DIGITS_CAGE,kk],[d.VAULTED_CAGE,Gk],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,Mk],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,$k],[d.DOUBLERS_KILLER_CAGE,Fk],[d.NEGATORS_KILLER_CAGE,Uk]]);function Bk(t,e,n,r){let o="";const a=Pk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}else if(n===d.MULTISET_CAGE){const s=Object.values(r),c=Hk(e,s);o+=c}return o}function Wk(t,e,n,r){const o=e.r+.5,a=e.c+.5,s=n-o,c=r-a,u=Math.floor(n+s),f=Math.floor(r+c);return t.getCell(u,f)}function zk(t,e){const n=[],r=[],o=[];for(const a of t.getAllCells()){const s=Wk(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||o.push(a)}return[n,r,o]}function Yk(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],f=u.cell,h=c+1,[g,v,m]=zk(e,f),E=ke(g,ce.GALAXY_REGIONS),I=ke(v,ce.GALAXY_REGIONS),w=ke(m,ce.GALAXY_REGIONS);r+=`% galaxy ${h}
`,r+=`constraint galaxy_center_p(${E}, ${I}, ${w}, ${h});
`,r+=`constraint connected_region(${ce.GALAXY_REGIONS}, ${h});
`;const b=u.value;if(!b)continue;const L=parseInt(b);r+=`constraint galaxy_sum_p(${ce.BOARD}, ${ce.GALAXY_REGIONS}, ${L}, ${h});
`}if(!n.length)return r;const o=e.nCols*e.nRows,s=`${n.length+1}..${o}`;return r+=`
constraint order_remaining_galaxies_p(${ce.GALAXY_REGIONS}, ${s});
`,r}function jk(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Vk(t,e,n,r){const o=r.cell,[a,s]=[o.r,o.c],c=r.value,u=jk(t,c,n);if(!u)return"";const f=u[1];let h=u[0],g=[];if(a%1===0&&s%1===0?g=Rh(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(g=Gh(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const v=ke(g,ce.BOARD),m=ke(g,ce.YIN_YANG);return h+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${f};
`,h}const qk=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,Vk]]),Xk=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,Yk]]);function Kk(t,e,n,r){let o="";const a=Xk.get(n),s=qk.get(n);if(s)for(const[c,u]of Object.entries(r)){const f=s(t,e,c,u);o+=f}else if(a){const c=Object.values(r),u=a(t,e,c);o+=u}return o}function qg(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return Ye(n)}function Zk(t,e){const r="["+qg(t,e.cells).join(",")+"]",a="["+qg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const Qk=new Map([[d.CLONE_REGION,Zk]]);function Jk(t,e,n,r){return ll(e,n,r,Qk)}function wd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return Ye(r)}function Od(t,e,n){const o=`[${wd(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function Gv(t,e,n,r=""){const a=`[${wd(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function e5(t,e,n,r){const a=`[${wd(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=Nv(s);if(!c)return"";let u="";for(const h of c){const g=parseInt(h);Number.isNaN(g)&&!t.hasVariable(h)&&(u+=`var int: ${h};
`,t.addVariable(h))}const f="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${f});
`,u}function t5(t,e,n,r){return Gv(e,r,"corner_sum_p")}function n5(t,e,n,r){return Gv(e,r,"corner_even_count_p")}function r5(t,e,n,r){return Od(e,r,"corner_sum_of_three_equals_the_other_p")}function o5(t,e,n,r){return Od(e,r,"equal_diagonal_differences_p")}function i5(t,e,n,r){return Od(e,r,"product_square_p")}const a5=new Map([[d.QUADRUPLE,e5],[d.CORNER_SUM,t5],[d.CORNER_EVEN_COUNT,n5],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,r5],[d.PRODUCT_SQUARE,i5],[d.EQUAL_DIAGONAL_DIFFERENCES,o5]]);function s5(t,e,n,r){let o="";const a=a5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function ul(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return Ye(r)}function l5(t,e,n){const r=ul(t,e),[o,a]=r;return`constraint ${n}(${o}, ${a});
`}function c5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function dl(t,e,n,r,o,a=""){var m;const s=ul(e,r),[c,u]=s,f=(m=r.value)!=null&&m.length?r.value:a,h=c5(t,f,n);if(!h)return"";const g=h[1];let v=h[0];return v+=`constraint ${o}(${c}, ${u}, ${g});
`,v}function u5(t,e,n,r){const o=ul(e,r),[a,s]=o;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function d5(t,e,n,r){return dl(t,e,n,r,"ratio_p","2")}function _5(t,e,n,r){return dl(t,e,n,r,"abs_difference","1")}function f5(t,e,n,r){const o=ul(e,r),[a,s]=o,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function g5(t,e,n,r){return dl(t,e,n,r,"edge_sum_p")}function h5(t,e,n,r){return dl(t,e,n,r,"edge_modulo_p")}function v5(t,e,n,r){return l5(e,r,"edge_factor_p")}function p5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=Ye(a),[u,f]=a;let h="";if(u.r==f.r){const m=e.getRow(u.r)[0];h=Oe(m)}else if(u.c==f.c){const m=e.getCol(u.c)[0];h=Oe(m)}return h?`constraint abs(${s} - ${c}) == ${h};
`:""}function m5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=Ye(a),u=Do(a,ce.YIN_YANG),[f,h]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${f}, ${h});
`}function E5(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),[s,c]=Ye(a),u=Do(a,ce.YIN_YANG),[f,h]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${f}, ${h});
`}function C5(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),s=Do(a,ce.UNKNOWN_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}function I5(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),s=Do(a,ce.CAVE_SHADING),[c,u]=s;return`constraint ${c} != ${u};
`}const b5=new Map([[d.XV,u5],[d.DIFFERENCE,_5],[d.RATIO,d5],[d.EDGE_INEQUALITY,f5],[d.EDGE_SUM,g5],[d.EDGE_MODULO,h5],[d.EDGE_FACTOR,v5],[d.XY_DIFFERENCES,p5],[d.YIN_YANG_KROPKI,m5],[d.YIN_YANG_WHITE_KROPKI,E5],[d.UNKNOWN_REGION_BORDER,C5],[d.EDGE_CAVE_ONE_OF_EACH,I5]]);function w5(t,e,n,r){let o="";const a=b5.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function wi(t,e,n=!1){let o=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(o=[...new Set(o)]),Ye(o)}function pt(t,e,n,r=!1){const a=`[${wi(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function vr(t,e,n,r=""){const a=`[${wi(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function yd(t,e,n){let o=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const c=`[${Ye(o).join(",")}]`,u=e.value;if(!u)return"";const f=parseInt(u);return`constraint ${n}(${c}, ${f}, ${a});
`}function O5(t,e,n,r){return pt(e,r,"renban",!0)}function y5(t,e,n,r){return pt(e,r,"double_renban_p",!0)}function L5(t,e,n,r){return pt(e,r,"renrenbanban_p",!0)}function A5(t,e,n,r){return pt(e,r,"knabner_p",!0)}function S5(t,e,n,r){return pt(e,r,"renban_or_nabner_line_p",!0)}function x5(t,e,n,r){return pt(e,r,"out_of_order_consecutive_line_p")}function N5(t,e,n,r){const a=`[${wi(e,r).join(",")}]`,s=r.value,c=s?parseInt(s):5;return`constraint whispers(${a}, ${c});
`}function T5(t,e,n,r){return`constraint whispers(${`[${wi(e,r).join(",")}]`}, 4);
`}function D5(t,e,n,r){return pt(e,r,"strictly_increasing")}function R5(t,e,n,r){return pt(e,r,"fuzzy_thermo_p")}function k5(t,e,n,r){return pt(e,r,"increasing")}function G5(t,e,n,r){return vr(e,r,"custom_thermo_p")}function M5(t,e,n,r){return pt(e,r,"palindrome")}function $5(t,e,n,r){return vr(e,r,"sum_line_p")}function F5(t,e,n,r){return pt(e,r,"xv_line_p")}function U5(t,e,n,r){return vr(e,r,"at_least_x_line_p","10")}function H5(t,e,n,r){return vr(e,r,"product_line_p")}function P5(t,e,n,r){return vr(e,r,"maximum_adjacent_difference_line_p","2")}function B5(t,e,n,r){return pt(e,r,"adjacent_multiples_line_p")}function W5(t,e,n,r){return pt(e,r,"index_line_p")}function z5(t,e,n,r){return pt(e,r,"zipper_line_p")}function Y5(t,e,n,r){return yd(e,r,"segmented_sum_line_p")}function j5(t,e,n,r){return pt(e,r,"segmented_sum_and_renban_line_p")}function V5(t,e,n,r){return yd(e,r,"n_consecutive_renban_line_p")}function q5(t,e,n,r){return yd(e,r,"n_consecutive_fuzzy_sum_line_p")}function X5(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f);let s="";const c=[];for(let f=0;f<a.length;f++){const h=a[f],g=e.getRow(h.r),v=ke(g,ce.BOARD),m=`cycle_${n}_${f}`;c.push(m);const E=h.c+1;s+=`var int: ${m} = cycle_order_f(${v}, ${E});
`}const u="["+c.join(",")+"]";return s+=`constraint strictly_increasing(${u});
`,s}function K5(t,e,n,r){return pt(e,r,"adjacent_differences_count_line_p")}function Z5(t,e,n,r){return pt(e,r,"same_parity_line_p")}function Q5(t,e,n,r){return vr(e,r,"renban_or_whispers_p","5")}function J5(t,e,n,r){return pt(e,r,"alldifferent",!0)}function e3(t,e,n,r){return pt(e,r,"repeated_digits_line_p")}function t3(t,e,n,r){return pt(e,r,"superfuzzy_arrow_p")}function n3(t,e,n,r){return pt(e,r,"headless_arrow_p")}function r3(t,e,n,r){return vr(e,r,"unimodular_line_p","3")}function o3(t,e,n,r){return vr(e,r,"modular_line_p","3")}function i3(t,e,n,r){return vr(e,r,"modular_or_unimodular_line_p","3")}function a3(t,e,n,r){return pt(e,r,"arithmetic_sequence_line_p")}function s3(t,e,n,r){return pt(e,r,"odd_even_oscillator_line_p")}function l3(t,e,n,r){return vr(e,r,"high_low_oscillator_line_p","5")}function c3(t,e,n,r){return pt(e,r,"look_and_say_line_p",!0)}function u3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v);function s(v){const m=[];let E=null;for(const I of v)I.r!=E?(m.push([I]),E=I.r):m[m.length-1].push(I);return m}const c=s(a);if(c.length<2)return"";const u=c[0],h=`[${Ye(u).join(",")}]`;let g="";for(let v=1;v<c.length;v++){const m=c[v],I=`[${Ye(m).join(",")}]`;g+=`constraint sum(${I}) == sum(${h});
`}return g}function d3(t,e,n,r){return pt(e,r,"between_line_p")}function _3(t,e,n,r){return pt(e,r,"tightrope_line_p")}function f3(t,e,n,r){return pt(e,r,"double_arrow_p")}function g3(t,e,n,r){return pt(e,r,"split_peas_p")}function h3(t,e,n,r){return pt(e,r,"parity_count_line_p")}function v3(t,e,n,r){return pt(e,r,"product_of_ends_equals_sum_of_line_p")}function p3(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const a=o.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(o),n=a}return r.length&&e.push(r),e}function m3(t,e,n,r){let o="";const s=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),c=p3(s);if(!c.length)return"";const u=`sum_line_${n}`;o+=`var int: ${u};
`;for(const f of c){const v=`constraint sum(${`[${Ye(f).join(",")}]`}) == ${u};
`;o+=v}return o}function E3(t,e,n,r){return`constraint entropic_line_p(${`[${wi(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function C3(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${wi(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function I3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),c=`[${Ye(a).join(",")}]`,u=ke(a,ce.YIN_YANG);let f=r.value;f||(f="5");const h=parseInt(f);return`constraint yin_yang_shaded_whispers_line_p(${c}, ${u}, ${h});
`}function b3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),c=`[${Ye(a).join(",")}]`,u=ke(a,ce.YIN_YANG);let f=r.value;f||(f="3");const h=parseInt(f);return`constraint yin_yang_unshaded_modular_line_p(${c}, ${u}, ${h});
`}function Ld(t,e,n){const o=e.cells.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f),s=`[${Ye(o).join(",")}]`,c=ke(o,ce.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function w3(t,e,n,r){return Ld(e,r,"yin_yang_unshaded_entropic_line_p")}function O3(t,e,n,r){return Ld(e,r,"yin_yang_indexing_line_coloring_p")}function y3(t,e,n,r){return Ld(e,r,"yin_yang_region_sum_line_p")}function L3(t,e,n,r){const a=r.cells.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f),s=ke(a,ce.VALUES_GRID),c=ke(a,ce.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${s}, ${c});
`}function Ad(t,e,n){const o=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${sl(o).join(", ")}]`;return`constraint ${n}(${s});
`}function A3(t,e,n,r){return Ad(e,r,"between_line_p")}function S3(t,e,n,r){return Ad(e,r,"double_arrow_p")}function x3(t,e,n,r){return Ad(e,r,"strictly_increasing")}const N3=new Map([[d.THERMOMETER,D5],[d.FUZZY_THERMOMETER,R5],[d.SLOW_THERMOMETER,k5],[d.CUSTOM_THERMOMETER,G5],[d.RENBAN_LINE,O5],[d.DOUBLE_RENBAN_LINE,y5],[d.RENRENBANBAN_LINE,L5],[d.NABNER_LINE,A5],[d.WHISPERS_LINE,N5],[d.DUTCH_WHISPERS,T5],[d.RENBAN_OR_WHISPERS_LINE,Q5],[d.RENBAN_OR_NABNER_LINE,S5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,x5],[d.N_CONSECUTIVE_RENBAN_LINE,V5],[d.PALINDROME,M5],[d.SUM_LINE,$5],[d.PRODUCT_LINE,H5],[d.XV_LINE,F5],[d.AT_LEAST_X_LINE,U5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,P5],[d.SAME_PARITY_LINE,Z5],[d.ADJACENT_MULTIPLES_LINE,B5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,K5],[d.LOOK_AND_SAY_LINE,c3],[d.ROW_SUM_LINE,u3],[d.INDEX_LINE,W5],[d.ZIPPER_LINE,z5],[d.SEGMENTED_SUM_LINE,Y5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,j5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,q5],[d.SUPERFUZZY_ARROW,t3],[d.HEADLESS_ARROW,n3],[d.ARITHMETIC_SEQUENCE_LINE,a3],[d.ODD_EVEN_OSCILLATOR_LINE,s3],[d.HIGH_LOW_OSCILLATOR_LINE,l3],[d.UNIQUE_VALUES_LINE,J5],[d.REPEATED_DIGITS_LINE,e3],[d.UNIMODULAR_LINE,r3],[d.MODULAR_LINE,o3],[d.MODULAR_OR_UNIMODULAR_LINE,i3],[d.REGION_SUM_LINE,m3],[d.ENTROPIC_LINE,E3],[d.ENTROPIC_OR_MODULAR_LINE,C3],[d.ROW_CYCLE_THERMOMETER,X5],[d.BETWEEN_LINE,d3],[d.TIGHTROPE_LINE,_3],[d.DOUBLE_ARROW_LINE,f3],[d.SPLIT_PEAS,g3],[d.PARITY_COUNT_LINE,h3],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,v3],[d.DOUBLERS_THERMOMETER,x3],[d.DOUBLERS_BETWEEN_LINE,A3],[d.DOUBLERS_DOUBLE_ARROW_LINE,S3],[d.YIN_YANG_SHADED_WHISPERS_LINE,I3],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,w3],[d.YIN_YANG_UNSHADED_MODULAR_LINE,b3],[d.YIN_YANG_REGION_SUM_LINE,y3],[d.YIN_YANG_INDEXING_LINE_COLORING,O3],[d.GOLDILOCKS_ZONE_REGION_SUM,L3]]);function T3(t,e,n,r){let o="";const a=N3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function _l(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return Ye(o)}function Oa(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,o)}function Qn(t,e,n,r){const o=n.cell,a=e.getCell(o.r,o.c),c=`[${_l(e,n).join(",")}]`,u=n.value,f=Oa(t,u,o,a);if(!f)return"";const h=f[1];let g=f[0];return g+=`constraint ${r}(${c}, ${h});
`,g}function D3(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${_l(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,h=Math.min(...f),g=Math.max(...f),v=Oa(t,u,o,a);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${h}, ${g});
`,E}function R3(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),c=`[${_l(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,h=Math.min(...f),g=Math.max(...f),v=Oa(t,u,o,a);if(!v)return"";const m=v[1];let E=v[0];const I=`var_bool_${n}_0`,w=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${h}, ${g});
`,E+=`var bool: ${w} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${w});
`,E}function k3(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=_l(e,r),c=`[${s.join(",")}]`,u=s[0],f=r.value,h=Oa(t,f,o,a);if(!h)return"";const g=h[1];let v=h[0];return v+=`constraint x_index_p(${c}, ${u}, ${g});
`,v}function G3(t,e,n,r){return Qn(t,e,r,"x_sum_p")}function M3(t,e,n,r){return Qn(t,e,r,"shortsighted_x_sum_p")}function $3(t,e,n,r){return Qn(t,e,r,"broken_x_sum_p")}function F3(t,e,n,r){return Qn(t,e,r,"shifted_x_sum_p")}function U3(t,e,n,r){return Qn(t,e,r,"skyscrapers_p")}function H3(t,e,n,r){return Qn(t,e,r,"x_sum_skyscrapers_p")}function P3(t,e,n,r){return Qn(t,e,r,"battlefield_p")}function B3(t,e,n,r){return Qn(t,e,r,"rising_streak_p")}function W3(t,e,n,r){return Qn(t,e,r,"outside_consecutive_sum_p")}function z3(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${Ye(s).join(",")}]`,f=ke(s,ce.CELL_CENTER_LOOP),h=r.value;if(h){const g=parseInt(h);return`constraint loopwhiches_p(${u}, ${f}, ${g});
`}return""}function Y3(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c),s=r.direction,c=e.getCellsInDirection(o.r,o.c,s),u=ke(c,ce.BOARD),f=ke(c,ce.UNKNOWN_REGIONS),h=r.value,g=Oa(t,h,o,a);if(!g)return"";const v=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${f}, ${v});
`,m}function j3(t,e,n,r){return Qn(t,e,r,"little_killer_sum_p")}function V3(t,e,n,r){return Qn(t,e,r,"little_killer_product_p")}function q3(t,e,n,r){return Qn(t,e,r,"x_omit_little_killer_sum_p")}function X3(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${Ye(s).join(",")}]`,f=ke(s,ce.YIN_YANG),h=r.value;if(h){const g=parseInt(h);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${f}, ${g});
`}return""}function K3(t,e,n,r){const o=r.cell,a=r.direction,s=e.getCellsInDirection(o.r,o.c,a),u=`[${sl(s).join(", ")}]`,f=r.value;if(f){const h=parseInt(f);return`constraint little_killer_sum_p(${u}, ${h});
`}return""}const Z3=new Map([[d.SANDWICH_SUM,D3],[d.X_SUM,G3],[d.SHORTSIGHTED_X_SUM,M3],[d.BROKEN_X_SUM,$3],[d.SHIFTED_X_SUM,F3],[d.SKYSCRAPERS,U3],[d.X_SUM_SKYSCRAPERS,H3],[d.X_INDEX,k3],[d.BATTLEFIELD,P3],[d.SANDWICH_SUM_XOR_X_SUM,R3],[d.RISING_STREAK,B3],[d.OUTSIDE_CONSECUTIVE_SUM,W3],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,X3],[d.LOOPWICHES,z3],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,Y3],[d.LITTLE_KILLER_SUM,j3],[d.LITTLE_KILLER_PRODUCT,V3],[d.X_OMIT_LITTLE_KILLER_SUM,q3],[d.NEGATORS_LITTLE_KILLER_SUM,K3]]);function Q3(t,e,n,r){let o="";const a=Z3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);o+=u}return o}function J3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let a=t.getCellsInDirection(r.r,r.c,o);a=[r,...a];const s=ke(a,ce.SASHIGANE),c=ke(a,ce.SASHIGANE_BENDS),u=Oe(r),f=Dt(r,ce.SASHIGANE);let h=`constraint sashigane_arrow_points_to_bend_p(${u}, ${f}, ${s}, ${c});
`;return h+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,h}function eG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,a=t.getCellsInDirection(r.r,r.c,o),c="["+Ye(a).join(",")+"]",u=ke(a,ce.CELL_CENTER_LOOP),f=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${f});
`}const tG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,J3],[d.THERMO_SIGHTLINE_LOOP_ARROW,eG]]);function nG(t,e,n,r){return ll(e,n,r,tG)}function Mv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o);return`constraint ${n}(${a});
`}function $v(t,e,n,r=""){const o=e.cell,a=t.getCell(o.r,o.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function rG(t,e,n,r){return Mv(e,r,"odd_p")}function oG(t,e,n,r){return Mv(e,r,"even_p")}function iG(t,e,n,r){return $v(e,r,"low_digit_p","5")}function aG(t,e,n,r){return $v(e,r,"high_digit_p","5")}function Fv(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=t.getNeighboorCells(o),c=ke(s,ce.BOARD);return`constraint ${n}(${c}) == ${a};
`}function sG(t,e,n,r){return Fv(e,r,"odd_count")}function lG(t,e,n,r){return Fv(e,r,"even_count")}function cG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=ke(c,ce.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function uG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${ke(c,ce.BOARD)}, ${s});
`}function dG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${ke(c,ce.BOARD)}, ${s});
`}function _G(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getRow(a.r),c=ke(s,ce.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function fG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=e.getCol(a.c),c=ke(s,ce.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function gG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const h=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${h};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function hG(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const s=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),f=e.getCell(o.r,o.c+1);if(!s||!c||!u||!f)return"";const h=Oe(s),g=Oe(c),v=Oe(u),m=Oe(f);return`constraint groups_opposite_parity_p([${h},${g}], [${v},${m}]);
`}function Sd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),[s,c,u,f]=Cd(t,o);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${f});
`}function vG(t,e,n,r){return Sd(e,r,"is_watchtower_p")}function pG(t,e,n,r){return Sd(e,r,"is_not_watchtower_p")}function mG(t,e,n,r){return Sd(e,r,"farsight_p")}function EG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),[c,u,f,h]=Cd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${f}, ${h}, 9);
`}function CG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+Ye(c).join(",")+"]",f=e.getCol(a.c),h="["+Ye(f).join(",")+"]",[g,v]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${h}, ${g}, ${v}, ${s});
`}function Uv(t,e,n){let r="";const o=e.map(s=>s.cell),a=new Set(o.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));for(const s of e){const c=s.cell,u=t.getCell(c.r,c.c);if(!u)continue;const f=Oe(u),h=t.getOrthogonallyAdjacentCells(u).filter(m=>!a.has(m)),g=ke(h,ce.BOARD),v=`constraint ${n}(${g}, ${f});
`;r+=v}return r}function IG(t,e){return Uv(t,e,"maximum_p")}function bG(t,e){return Uv(t,e,"minimum_p")}function wG(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${Ye([...o]).join(`,
	`)}`;n+=`array[int] of var int: counting_circles = [
	${s}
];
`;for(const c of e){const u=c.cell,f=t.getCell(u.r,u.c);if(!f)continue;const h=Oe(f),g=`constraint count(counting_circles, ${h}) == ${h};
`;n+=g}return n+=`
`,n}function OG(t,e){let n="";const r=e.map(f=>f.cell),o=new Set(r.map(f=>t.getCell(f.r,f.c)).filter(f=>!!f)),s=`${Ye([...o]).join(`,
	`)}`,u=`${Do([...o],ce.COUNTING_CIRCLES_COLORS).join(`,
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
`;for(const f of t.getAllCells()){if(o.has(f))continue;const h=Dt(f,ce.COUNTING_CIRCLES_COLORS);n+=`constraint ${h} == 0;
`}for(const f of e){const h=f.cell,g=t.getCell(h.r,h.c);if(!g)continue;const v=Oe(g),m=Dt(g,ce.COUNTING_CIRCLES_COLORS),E=f.value;E?n+=`constraint ${m} == ${E};
`:n+=`constraint ${m} != 0;
`,n+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${v}, ${m}) == ${v};
`}return n+=`
`,n}function yG(t,e){let n="";const r=e.map(c=>c.cell),o=new Set(r.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c)),s=`${Ye([...o]).join(`,
	`)}`;return n+=`array[int] of var int: unique_cells = [
	${s}
];
`,n+=`constraint alldifferent(unique_cells);
`,n}function LG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${ke(u,ce.YIN_YANG)}, ${s});
`}function xd(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const a=Oe(o),s=Ed(t,o),c=[];for(const h of s){const g=ke(h,ce.YIN_YANG);c.push(g)}const u=Dt(o,ce.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function AG(t,e,n,r){return xd(e,r,"yin_yang_seen_unshaded_p")}function SG(t,e,n,r){return xd(e,r,"yin_yang_seen_shaded_p")}function xG(t,e,n,r){return xd(e,r,"yin_yang_seen_same_shade_p")}function NG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Dt(a,ce.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),f=ke(u,ce.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${f});
`}function TG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${ke(c,ce.YIN_YANG)}, 1) == ${s};
`}function DG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),f=e.getCol(a.c),h="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",g="["+f.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${h}, ${g}, ${s}, ${c});
`}function RG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),f="["+c.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]",h="["+u.map(v=>`unknown_regions[${v.r},${v.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${f}, ${h}, ${s});
`}function kG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let h=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const g=Ed(e,a),v=[];for(const m of g){const E="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";v.push(E)}return h+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${v[0]}, ${v[1]}, ${v[2]}, ${v[3]});
`,h}function GG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Dt(a,ce.SASHIGANE),u=Dt(a,ce.SASHIGANE_BENDS);let f=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return f+=`constraint ${u} = true;
`,f}function MG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Dt(a,ce.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function $G(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Dt(a,ce.CELL_CENTER_LOOP)} == 1;
`:""}function FG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint ${Dt(a,ce.CELL_CENTER_LOOP)} == 0;
`:""}function UG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${ke(u,ce.CELL_CENTER_LOOP)}) == ${s};
`}function HG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=Oe(a),c=Dt(a,ce.CAVE_SHADING),u=Ed(e,a),f=[];for(const g of u){const v=ke(g,ce.CAVE_SHADING);f.push(v)}return`constraint cave_clue_p(${s}, ${c}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function PG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const f=Oe(a),h=Dt(a,ce.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(a),v=ke(g,ce.BOARD),m=ke(g,ce.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${h});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${f});
`;const E=e.getCellsByKnightMove(a),I=ke(E,ce.BOARD),w=ke(E,ce.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${w}, ${h});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${f});
`;const b=[Be.NE,Be.NW,Be.SE,Be.SW],L=[];for(const G of b)e.getCellsInDirection(a.r,a.c,G).forEach(z=>L.push(z));const T=ke(L,ce.BOARD),k=ke(L,ce.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${k}, ${h});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${f});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function BG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const f=Oe(a),h=Dt(a,ce.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(a),v=ke(g,ce.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${h}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],E=[];for(const I of m){const w=e.getCellsInDirection(a.r,a.c,I);if(!w.length)continue;const b=ke(w,ce.BOARD),L=ke(w,ce.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,k=`in_arrow_${n}_${I}[1]`;E.push(k),u+=`array[index_set(${b})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${L}, ${T}, ${f}, ${h});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function WG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint dpath_source == ${a.r*e.nCols+a.c+1};
`:""}function zG(t,e,n,r){const o=r.cell,a=e.getCell(o.r,o.c);return a?`constraint dpath_target == ${a.r*e.nCols+a.c+1};
`:""}const YG=new Map([[d.ODD,rG],[d.EVEN,oG],[d.LOW_DIGIT,iG],[d.HIGH_DIGIT,aG],[d.ODD_MINESWEEPER,sG],[d.EVEN_MINESWEEPER,lG],[d.DIAGONALLY_ADJACENT_SUM,dG],[d.ORTHOGONAL_SUM,uG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,cG],[d.FRIENDLY_CELL,gG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,hG],[d.WATCHTOWER,vG],[d.NOT_WATCHTOWER,pG],[d.FARSIGHT,mG],[d.RADAR,EG],[d.INDEXING_COLUMN,_G],[d.INDEXING_ROW,fG],[d.SANDWICH_ROW_COL_COUNT,CG],[d.YIN_YANG_MINESWEEPER,LG],[d.YIN_YANG_SEEN_UNSHADED_CELLS,AG],[d.YIN_YANG_SEEN_SHADED_CELLS,SG],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,xG],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,NG],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,TG],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,DG],[d.SEEN_REGION_BORDERS_COUNT,RG],[d.NURIMISAKI_UNSHADED_ENDPOINTS,kG],[d.SASHIGANE_BEND_REGION_COUNT,GG],[d.SASHIGANE_REGION_SUM,MG],[d.CELL_ON_THE_LOOP,$G],[d.CELL_NOT_ON_THE_LOOP,FG],[d.COUNT_LOOP_NEIGHBOUR_CELLS,UG],[d.CAVE_CLUE,HG],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,PG],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,BG],[d.DIRECTED_PATH_START,WG],[d.DIRECTED_PATH_END,zG]]),jG=new Map([[d.MAXIMUM,IG],[d.MINIMUM,bG],[d.COUNTING_CIRCLES,wG],[d.COLORED_COUNTING_CIRCLES,OG],[d.UNIQUE_CELLS,yG]]);function VG(t,e,n,r){let o="";const a=YG.get(n),s=jG.get(n);if(a)for(const[c,u]of Object.entries(r)){const f=a(t,e,c,u);o+=f}else if(s){const c=Object.values(r),u=s(e,c);o+=u}return o}function qG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Dt(r,ce.UNKNOWN_REGIONS),s=e.directions,c=[];for(const h of s){const g=t.getCellsInDirection(r.r,r.c,h),v=ke(g,ce.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(h=>`count_different(${h}, ${a})`).join(" + ")} == ${o};
`}function XG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Dt(r,ce.YIN_YANG),s=e.directions;let c="";for(const u of s){const f=t.getCellsInDirection(r.r,r.c,u),g="["+Ye(f).join(",")+"]",v=ke(f,ce.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${g}, ${v}) == ${o};
`}return c}function KG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),f=ke(u,ce.YIN_YANG);s+=`constraint count(${f}, 1) == ${o};
`}return s}function ZG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Dt(r,ce.YIN_YANG),s=e.directions,c=[];for(const f of s){const h=t.getCellsInDirection(r.r,r.c,f),g=ke(h,ce.YIN_YANG),v=ke(h,ce.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${g}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function QG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions,s=[];for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${ke(f,ce.CELL_CENTER_LOOP)})`;s.push(g)}return s.length?`constraint ${s.join(" + ")} = ${o};
`:""}function JG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=Dt(r,ce.GALAXY_REGIONS),s=e.directions,c=[];for(const f of s){const h=t.getCellsInDirection(r.r,r.c,f),m=`count(${"["+Do(h,ce.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function eM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),h="["+Ye(u).join(",")+"]";s+=`constraint hot_arrows_p(${h}, ${o});
`}return s}function tM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),h="["+Ye(u).join(",")+"]";s+=`constraint cold_arrows_p(${h}, ${o});
`}return s}const nM=new Map([[d.HOT_ARROWS,eM],[d.COLD_ARROWS,tM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,qG],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,XG],[d.LOOP_CELL_COUNT_ARROWS,QG],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,ZG],[d.YIN_YANG_COUNT_SHADED_CELLS,KG],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,JG]]);function rM(t,e,n,r){return ll(e,n,r,nM)}function oM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function iM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function aM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const sM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,oM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,iM],[d.FORBIDDEN_KNIGHT_SUM,aM]]);function lM(t,e,n,r){return ll(e,n,r,sM)}const cM=[Kk,VG,nG,rM,w5,s5,T3,Lk,Bk,Q3,Jk,lM];function uM(t,e){let n="";const r=t.localConstraints,o=t.grid;for(const[a,s]of r.entries())for(const c of cM){let u=c(e,o,a,s);u=It(u,`${a}`),n+=u}return n}function dM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,a}function _M(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,a}function fM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`
% Two Contiguous Regions
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function gM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows);let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a-1}: unknown_regions;
`,s+=`constraint unknown_sudoku_regions_p(unknown_regions, ${a});
`,s+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${a});
`,s}function hM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function vM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, true);
`,a}function pM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a}function mM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,a+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,a+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,a}function EM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a+=`constraint modular_loop_p(board, cell_center_loop);
`,a}function ia(t,e,n,r){const o=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=o.nRows;for(let h=0;h<s;h++){const g=o.getRow(h),v=r(g);a+=`constraint count_eq(${v}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=o.nCols;for(let h=0;h<c;h++){const g=o.getCol(h),v=r(g);a+=`constraint count_eq(${v}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const h=o.getUsedRegions();for(const g of h){const v=o.getRegion(g),m=r(v);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function CM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=ia(n,1,!0,s=>ke(s,ce.DOUBLERS)),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function IM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,s+=ia(n,1,!0,c=>ke(c,ce.NEGATORS)),s+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,s}function bM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="fillomino_area";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint fillomino_p(board, ${a});
`,s}function wM(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ce.CAVE_SHADING,s=ce.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,c+=`constraint cave_p(${a}, ${s});
`,c}function OM(t,e){if(t.puzzle.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ce.CAVE_SHADING,s=ce.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${a}, ${s}, ${c});
`,u+=`constraint renban_caves_p(${ce.BOARD}, ${c});
`,u}function yM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ce.GALAXY_REGIONS,s=ce.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${a};
`,u+=`constraint galaxy_restrict_numbering_p(${a});
`,u+=`array[0..${c}] of var 0..${c}: ${s};
`,u+=`constraint galaxy_sizes_p(${a}, ${s});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${s});
`,u+=`constraint gallaxy_connected_regions_p(${a});
`,u}function LM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function AM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function SM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=Vg.size;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_placing_grid;
`,s+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of Vg.entries()){const f=u.length,h=u[0].length,g=`pentomino_${c}`;s+=`array[1..${f}, 1..${h}] of 0..1: ${g} = ${NR(u)};
`,s+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return s}function xM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ce.LITS_SHADING,s=ce.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,c+=`constraint lits_shading_p(${a});
`,c+=`constraint lits_shading_ids_p(${a}, ${s});
`,c+=`constraint lits_region_and_ids_p(${ce.BOARD_REGIONS}, ${s});
`,c+=`constraint lits_tetromino_shapes_p(${s});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const f of u){const h=r.getRegion(f),v=`constraint count_eq(${ke(h,ce.LITS_SHADING)}, 1, 4);
`;c+=v}return c}function NM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(h=>h.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ce.LITS_SHADING,s=ce.LITS_REGIONS,c=ce.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,u+=`constraint lits_shading_p(${a});
`,u+=`constraint lits_shading_ids_p(${a}, ${s});
`,u+=`constraint lits_region_and_ids_p(${c}, ${s});
`,u+=`constraint lits_4_per_region_p(${c}, ${a});
`,u+=`constraint lits_tetromino_shapes_p(${s});
`;const f=r.getUsedRegions();f.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const h of f){const g=r.getRegion(h),m=`constraint count_eq(${ke(g,ce.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function TM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=ce.LITS_SHADING,s=ce.STAR_BATTLE,c=ce.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=ia(n,2,1,f=>ke(f,ce.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${s});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=ia(n,1,1,f=>ke(f,ce.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=ia(n,1,2,f=>ke(f,ce.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${s}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${a}, ${c});
`,u}function DM(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(b=>b.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";function a(){const b=[];for(const L of r.getAllCells()){const T=L.r*r.nCols+L.c+1,k=r.getNeighboorCells(L);for(const G of k){const P=G.r*r.nCols+G.c+1;b.push([T,P])}}return b}const s=a();t.edge_list=s;const c=r.nRows*r.nCols,u=s.length,f="["+s.map(b=>b[0]).join(",")+"]",h="["+s.map(b=>b[1]).join(",")+"]";let g="";g+=`array[int] of int: dpath_from = ${f};
`,g+=`array[int] of int: dpath_to = ${h};
`,g+=`var 1..${c}: dpath_source;
`,g+=`var 1..${c}: dpath_target;
`,g+=`array[1..${c}] of var bool: dpath_ns;
`,g+=`array[1..${u}] of var bool: dpath_es;
`,g+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`;function v(b,L){const T=s.findIndex(k=>k[0]===b&&k[1]===L);T!=-1&&(g+=`constraint dpath_es[${T+1}] = false;
`)}function m(b,L){const T=b.r*r.nCols+b.c+1;for(let k=-1;k<=1;k++){const G=(L.r+k)*r.nCols+L.c+1;v(T,G),v(G,T)}}function E(b,L){const T=b.r*r.nCols+b.c+1;for(let k=-1;k<=1;k++){const G=L.r*r.nCols+(L.c+k)+1;v(T,G),v(G,T)}}const w=n.localConstraints.get(d.MAZE_WALL);if(!w)return g;for(const b of Object.values(w)){const T=b.cells.map(P=>r.getCell(P.r,P.c)).filter(P=>!!P),[k,G]=T;k.r===G.r?(m(k,G),m(G,k)):k.c===G.c&&(E(k,G),E(G,k))}return g}const RM=new Map([[d.FILLOMINO,bM],[d.CAVE,wM],[d.GALAXIES,yM],[d.YIN_YANG,dM],[d.NURIMISAKI,_M],[d.TWO_CONTIGUOUS_REGIONS,fM],[d.UNKNOWN_REGIONS,gM],[d.SASHIGANE,hM],[d.CELL_CENTER_LOOP_NO_TOUCHING,vM],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,pM],[d.NOT_LOOP_SIZED_REGIONS,mM],[d.MODULAR_LOOP,EM],[d.DOUBLERS,CM],[d.NEGATORS,IM],[d.GOLDILOCKS_ZONE,AM],[d.NEXUS,LM],[d.PENTOMINO_TILLING,SM],[d.LITS,xM],[d.CAVE_LITS,NM],[d.LITS_BLACK_WHITE_STAR_BATTLE,TM],[d.RENBAN_CAVES,OM],[d.MAZE_DIRECTED_PATH,DM]]);function kM(t){let e="";const r=t.puzzle.globalConstraints;for(const[o,a]of r.entries()){if(!a)continue;const s=RM.get(o);if(!s)continue;let c=s(t,o);c=It(c,`${o}`),e+=c}return e}function GM(){return`
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

`+`predicate direct_path_adjacent_sum_is_prime(
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
            var int: sum_var;
        } in (
            sum_var = grid[r1,c1] + grid[r2,c2] /\\
            is_prime_p(sum_var)
        )
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

`}function MM(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function Hv(t){const e=t.grid;let n=t.valid_digits;const r=new SR(t),[o,a]=[e.nRows,e.nCols],s=o*a;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(GM());let u=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)&&(u=`1..${s}`),t.globalConstraints.get(d.HEXED_SUDOKU)&&(n=[...Tt.range(1,16)]),n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${o-1};
`),r.add(`set of int: COL_IDXS = 0..${a-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),TR(r,e),r.add(MM(t)),r.add(Ek(t)),r.add(Ck(t)),r.add(kM(r)),r.add(uM(t,r)),r.add(bk(t)),r.add(`
solve satisfy;`),r}var $M=oe('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function FM(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Nr,"$puzzleMetaStore",n);let o=F(e,"showModal",12,!1);function a(g,v,m){var E=document.createElement("a"),I=new Blob([g],{type:m});E.href=URL.createObjectURL(I),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function s(){const g=ct(Ea);return Hv(g).model_str}function c(){const g=s();navigator.clipboard.writeText(g)}function u(){const g=s(),v=jg(g);navigator.clipboard.writeText(v)}function f(){const g=hu(r()),v=s();a(v,`${g}.mzn`,"text/plain")}function h(){const g=hu(r()),v=s(),m=jg(v);a(m,`${g}.mzn`,"text/plain")}fe(),Gr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(g){o(g)},children:(g,v)=>{var m=$M(),E=q(m),I=U(E,2),w=U(I,2),b=U(w,2);H(m),Te("click",E,c),Te("click",I,u),Te("click",w,f),Te("click",b,h),N(g,m)},$$slots:{default:!0},$$legacy:!0}),re()}function ya(t,e,n){const r=[],o=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const f=e.getCell(s,u);if(!f)continue;const h=Number(c[u]),g=n.get(h);g!==void 0&&(r.push(f),o.push([g]))}}const a=Js(r,o);oi(a)}function UM(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];o.push(E),s(v,m,t[v][m])}function s(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,o[o.length-1].push([v,m]),s(v+1,m,E),s(v-1,m,E),s(v,m+1,E),s(v,m-1,E))}const c=Array(o.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,I]of v)for(const[w,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const L=E+w,T=I+b;if(m.some(([k,G])=>k===L&&G===T))return!0}return!1}for(let v=0;v<o.length;v++)for(let m=v+1;m<o.length;m++)u(o[v],o[m])&&(c[v].add(m),c[m].add(v));const f=[1,4,7,9],h=new Array(o.length).fill(0);function g(v,m){for(const E of c[v])if(h[E]===m)return!1;return!0}for(let v=0;v<o.length;v++)for(const m of f)if(g(v,m)){h[v]=m;break}for(let v=0;v<o.length;v++)for(const[m,E]of o[v])a[m][E]=h[v];return a}function HM(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const a=[],s=[];for(let u=0;u<o.length;u++){const f=o[u];for(let h=0;h<f.length;h++){const g=n.getCell(u,h);if(!g||g.given||r&&!g.given&&g.value===null)continue;const v=f[h];a.push(g),s.push(v)}}const c=Iv(a,s);oi(c)}function PM(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const a=t[o];if(a!==void 0){ya(a,e,r);return}}}function BM(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const a=t[o];if(a!==void 0){ya(a,e,r);return}}}function WM(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const f=e.getCell(s,u);if(!f)continue;r.push(f);const h=c[u];o.push([h+1])}}const a=Js(r,o);oi(a)}function zM(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;ya(n,e,new Map([[0,4],[1,7],[2,9]]))}function YM(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;ya(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function jM(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;ya(n,e,new Map([[1,7],[2,4],[3,9]]))}function VM(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let h=0;h<o.length;h++){const g=o[h];for(let v=0;v<g.length-1;v++){const m=e.getCell(h,v),E=e.getCell(h,v+1);if(!m||!E)continue;const I=g[v],w=g[v+1];if(I===w)continue;const b={colorId:c,p1:{r:h,c:v+1},p2:{r:h+1,c:v+1}};u.push(b)}}for(let h=0;h<s;h++)for(let g=0;g<a-1;g++){const v=e.getCell(g,h),m=e.getCell(g+1,h);if(!v||!m)continue;const E=o[g][h],I=o[g+1][h];if(E===I)continue;const w={colorId:c,p1:{r:g+1,c:h},p2:{r:g+1,c:h+1}};u.push(w)}const f=ca(u);gr(f);return}}function qM(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let f=0;f<u.length;f++){const h=e.getCell(c,f);if(h)for(const g of e.getOrthogonallyAdjacentCells(h)){if(!g||!(g.r>h.r||g.c>h.c))continue;const v=o[h.r][h.c],m=o[g.r][g.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:h.r+.5,c:h.c+.5},p2:{r:g.r+.5,c:g.c+.5}};a.push(E)}}}const s=ca(a);gr(s);return}}function XM(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=UM(o);if(!a)return;const s=[],c=[];for(let f=0;f<a.length;f++){const h=a[f];for(let g=0;g<h.length;g++){const v=e.getCell(f,g);if(!v)continue;s.push(v);const m=h[g];c.push([m])}}const u=Js(s,c);oi(u);return}}function KM(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const o=t[r];if(o===void 0)continue;const a=[];for(let c=0;c<o.length;c++){const u=o[c];for(let f=0;f<u.length;f++){const h=e.getCell(c,f);if(!h)continue;const g=o[h.r][h.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:h.r+.5,c:h.c+.5};a.push(m)}}const s=Jy(a);gr(s);return}}function ZM(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,o=e.puzzle.grid,a=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const f=r[c],[h,g]=f,[v,m]=[Math.floor((h-1)/o.nCols),(h-1)%o.nCols],[E,I]=[Math.floor((g-1)/o.nCols),(g-1)%o.nCols],w={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};a.push(w)}const s=ca(a);gr(s)}function QM(t,e){const n=e.puzzle,r=n.grid;gr(sd()),HM(t,n),WM(t,r),VM(t,r),zM(t,r),YM(t,r),qM(t,r),BM(t,r),XM(t,r),PM(t,r),KM(t,r),jM(t,r),ZM(t,e)}function JM(){const{subscribe:t,set:e}=Ft(0),n=100;let r=Date.now(),o,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,o=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(o),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(o),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var e8=oe('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function t8(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Ea,"$puzzleStore",n),o=()=>ve(_n,"$gridStore",n),a=()=>ve(b,"$timer",n),s=D(),c=D(),u=D(),f=D();let h=D(!1),g=D(!1),v=D(null),m=D(100),E=D("100"),I=D(null),w=D("IDLE");const b=JM();function L(X){return X===null?"":String(X)}function T(X){const te=Math.floor(X/6e4),de=Math.floor(X%6e4/1e3),ee=Math.floor(X%1e3/100),le=de.toString().padStart(2,"0");return`${te}:${le}.${ee}`}function k(){x(g,!0)}function G(X){const te=parseInt(X);typeof te=="number"&&te>=1&&x(m,te)}async function P(){x(I,0),x(w,"SOLVING...");const X=new Du;vv(),console.log(p(s));const te=Hv(p(s));X.addFile("test.mzn",te.model_str),b.reset(),b.start(),x(v,X.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(v).on("solution",de=>{const ee=de.output.json;de.type==="solution"&&p(I)!==null&&x(I,p(I)+1),console.log(ee),QM(ee,te)}),p(v).on("error",de=>{x(u,"Solve"),x(w,"ERROR"),b.stop(),p(v)&&p(v).cancel()}),p(v).on("warning",de=>{x(w,"WARNING"),console.log(de.message)}),p(v).then(de=>{x(w,de.status),x(u,"Solve"),b.stop()})}function z(){p(v)===null||!p(v).isRunning()?P():p(v)!==null&&p(v).isRunning()&&(x(w,"IDLE"),x(u,"Solve"),b.stop(),p(v).cancel())}$(()=>r(),()=>{x(s,r())}),$(()=>o(),()=>{x(c,o())}),$(()=>{},()=>{x(u,"Solve")}),$(()=>a(),()=>{x(f,a())}),$(()=>p(v),()=>{p(v)&&(p(v)!==null&&p(v).isRunning()?x(u,"Stop"):x(u,"Solve"))}),pe(),fe(),il(t,{get isOpen(){return p(h)},set isOpen(X){x(h,X)},$$slots:{"panel-header":(X,te)=>{ol(X,{slot:"panel-header",title:"Solver",get isOpen(){return p(h)},set isOpen(de){x(h,de)},$$legacy:!0})},"panel-content":(X,te)=>{var de=e8(),ee=ue(de),le=U(ee,2);FM(le,{get showModal(){return p(g)},set showModal(Zt){x(g,Zt)},$$legacy:!0});var Ie=U(le,2),me=q(Ie,!0);H(Ie);var Ee=U(Ie,2),xe=q(Ee,!0);H(Ee);var st=U(Ee,2),Se=q(st);Vt(Se),S(Se,"min",1),S(Se,"max",200),S(Se,"step",1),H(st);var we=U(st,2),_t=q(we,!0);Z(()=>nt(_t,`Solution Count: ${L(p(I))}`)),H(we);var ut=U(we,2),Un=q(ut,!0);Z(()=>nt(Un,`Elapsed Time: ${T(p(f))}`)),H(ut);var Lt=U(ut,2),Ln=q(Lt,!0);H(Lt),Z(()=>{nt(me,p(u)),nt(xe,`Max. Solutions: ${p(m)}`),nt(Ln,`Status: ${p(w)}`)}),Te("click",ee,k),Te("click",Ie,z),qn(Se,()=>p(E),Zt=>x(E,Zt)),Te("input",Se,()=>G(p(E))),N(X,de)}},$$legacy:!0}),re()}var n8=oe('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function r8(t){var e=n8(),n=q(e),r=q(n);ER(r);var o=U(r,2);t8(o,{});var a=U(o,2);tD(a,{elementHandlers:$t});var s=U(a,2);aD(s,{elementHandlers:$t});var c=U(s,2);VT(c,{elementHandlers:$t});var u=U(c,2);ND(u,{elementHandlers:$t});var f=U(u,2);IR(f,{}),H(n),H(e),N(t,e)}const Pv=fn([ri,_n,Xt],([t,e,n])=>{const r=Kr(n,$t);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0}),Nd=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Kw(n)&&e.push({toolId:n,element:r});return e}),o8=fn(Nd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),i8=fn(Nd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),a8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ku(n)&&e.push({toolId:n,element:r});return e}),s8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Sh(n)&&e.push({toolId:n,element:r});return e}),l8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ah(n)&&e.push({toolId:n,element:r});return e}),c8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Zu(n)&&e.push({toolId:n,element:r});return e}),u8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Qu(n)&&e.push({toolId:n,element:r});return e}),d8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())Ju(n)&&e.push({toolId:n,element:r});return e}),_8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())xh(n)&&e.push({toolId:n,element:r});return e}),f8=fn(rt,t=>{const e=[];for(const[n,r]of t.entries())la(n)&&e.push({toolId:n,element:r});return e});function g8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function h8(t){const e=new Map;function n(r,o){const a=e.get(o);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(o);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(o)}for(const r of t){const o=g8(r),a=o.length;for(let s=0;s<a;s++){const c=o[s%a],u=o[(s+1)%a],f=JSON.stringify(c),h=JSON.stringify(u);n(f,h)}}return e}function v8(t,e=0,n=!1){const r=[],o=h8(t);if(o.size<=0)return r;const a=new Set;for(;o.size>0;){const s=Array.from(o.entries()).find(E=>E[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let f=JSON.parse(c);const h=Array.from(u)[0];let g=JSON.parse(h),v=h;const m=[];do{const E=o.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Re(f.c,f.r),w=new Re(g.c,g.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,L=null,T=null;for(const k of E){const G=JSON.parse(k),P=new Re(G.c,G.r),z=w.subtract(I),X=P.subtract(w),te=z.perpDotProduct(X);b<te!=n&&(b=te,T=G,L=k)}if(n&&E.size>1&&a.add(v),T===null||L===null)throw new Error("Corner with no adjacencies found");if(E.delete(L),E.size<=0&&o.delete(v),b!==0){const k=e*(g.c-f.c),G=e*(T.c-g.c),P=e*(f.r-g.r),z=e*(g.r-T.r),X=z+b*G,te=k+b*P,de=new Re(g.c+X,g.r+te),ee=4;a.has(v)?(m.push(new Re(de.x-ee*k,de.y-ee*G)),m.push(new Re(de.x-ee*P,de.y-ee*z))):m.push(de)}f=g,g=T,v=L}while(v!==h);r.push(m)}return r}function ai(t,e=0,n=!1){return v8(t,e,n).map(a=>Oi(a,!0)).join("")}const p8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5)];function m8(t,e,n=p8){if(e===1)return n;const r=[],o=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,f=c/(360/o),h=u/(360/o),g=Math.floor(f)%o,v=Math.ceil(f)%o,m=n[g].lerp(n[v],f%1),E=Math.floor(h)%o,I=Math.ceil(h)%o,w=n[E].lerp(n[I],h%1);r.push(m);for(let L=Math.ceil(f);L<=Math.floor(h);L++)r.push(n[L%o]);r.push(w);const b=new Re(0,0);return r.push(b),r}function Bv(t,e,n=new Re(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const f=s*Math.cos(u/e*2*Math.PI+o*2*Math.PI),h=s*Math.sin(u/e*2*Math.PI+o*2*Math.PI),g=n.add(new Re(f,h));c.push(g)}return c}function Oi(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:a})=>`${o},${a}`).join("L")+n}function fl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){if(r&&t.length>1){const f=t[t.length-1];for(let g=0;g<t.length-1;g++)if(f.equals(t[g])){t.push(t[g+1]);break}const h=t[0];for(let g=1;g<t.length;g++)if(h.equals(t[g])){t.unshift(t[g-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let f=t[1].subtract(t[0]);f=f.normalise(),f=f.scale(e),t[0]=t[0].add(f)}if(n){const f=t.length;let h=t[f-2].subtract(t[f-1]);h=h.normalise(),h=h.scale(n),t[f-1]=t[f-1].add(h)}}if(!o)return Oi(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let f=2;f<c;f++){const h=t[f-2],g=t[f-1],v=t[f];let m=h.subtract(g).normalise();m=m.scale(o),m=m.add(g);let E=v.subtract(g).normalise();E=E.scale(o),E=E.add(g),s.push(`L${m.x},${m.y} Q ${g.x},${g.y} ${E.x},${E.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function Iu(t,e={}){const n=Rs(t);return fl(n,e)}function Zn(t){return new Re(t.c+.5,t.r+.5)}function Rs(t){return t.map(n=>Zn(n))}const E8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5),new Re(0,-.5),new Re(0,.5),new Re(-.5,0),new Re(.5,0)];function C8(t,e){const n=E8[t];return n.subtract(n.scale(e))}function Wv(t,e){const n=[new Re(t.c-e,t.r-e),new Re(t.c+e,t.r+e)],r=[new Re(t.c-e,t.r+e),new Re(t.c+e,t.r-e)];return[n,r].map(a=>Oi(a,!1)).join("")}const I8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function gl(t,e="none"){return I8.get(t)||e}function b8(t,e,n){let r=[];function a(c,u){return c.map(f=>f.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Re(-.12,-.32),new Re(0,-.4),new Re(.12,-.32)]:s=[new Re(-.12,-.4),new Re(0,-.32),new Re(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const f=new Re(n+.5,e+.5);return u.add(f)})),r}var w8=ie('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function hl(t,e){let n=F(e,"l",8,.2),r=F(e,"id",8),o=F(e,"strokeWidth",8),a=F(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=w8();S(u,"viewBox","0 0 1 1"),S(u,"refX",s),S(u,"refY",s),S(u,"markerWidth",1),S(u,"markerHeight",1);var f=q(u);S(f,"d",c),H(u),Z(()=>{S(u,"id",r()),S(f,"stroke-width",o()),S(f,"stroke",a())}),N(t,u)}var O8=ie('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function y8(t,e){var P;ne(e,!1);const n=D(),r=D(),o=D();let a=F(e,"outsideEdgeTool",8);const s=a().cell,c=a().direction,u=kh(s,c),f=Zn(s),h=wn(a().toolId,$t)??pO,g=((P=p(n))==null?void 0:P.fontSize)??.5,v=.03;function m(z){return z.value&&z.value.length?z.value:"-"}function E(){const te=Zn(u).subtract(f).length(),de={shortenHead:.3*te,shortenTail:.55*te};return Iu([s,u],de)}const w=`outside-tool-arrow-marker-${crypto.randomUUID()}`;$(()=>Q(a()),()=>{x(n,a().shape??h)}),$(()=>p(n),()=>{var z;x(r,((z=p(n))==null?void 0:z.fontColor)??"var(--text-primary-color)")}),$(()=>p(n),()=>{var z;x(o,((z=p(n))==null?void 0:z.stroke)??"var(--text-primary-color)")}),pe(),fe();var b=O8(),L=q(b);hl(L,{id:w,l:.07,strokeWidth:v,get stroke(){return p(o)}});var T=U(L);Z(()=>S(T,"d",E())),S(T,"stroke-width",v),S(T,"marker-end",`url(#${w??""})`);var k=U(T);S(k,"font-size",g);var G=q(k,!0);Z(()=>nt(G,m(a()))),H(k),H(b),Z(()=>{S(T,"stroke",p(o)),S(k,"x",f.x),S(k,"y",f.y),S(k,"fill",p(r))}),N(t,b),re()}var L8=ie("<g></g>"),A8=ie('<g class="outside-direction-tools-layer" mask="url(#fog-mask-fog)"></g>');function S8(t,e){ne(e,!1);const n=Xe(),r=()=>ve(f8,"$outsideDirectionToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=A8();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=L8();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{y8(g,{get outsideEdgeTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var x8=ie("<path></path>");function ks(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let f=F(e,"cells",8),h=F(e,"shape",8,rd);$(()=>Q(h()),()=>{x(n,h().inset??.06)}),$(()=>Q(h()),()=>{x(r,h().stroke??"black")}),$(()=>Q(h()),()=>{x(o,h().strokeWidth??.03)}),$(()=>Q(h()),()=>{x(a,h().strokeDasharray??.08)}),$(()=>Q(h()),()=>{x(s,h().fill??"none")}),$(()=>Q(h()),()=>{x(c,h().connectDiag??!0)}),$(()=>(Q(f()),p(n),p(c)),()=>{x(u,ai(f(),p(n),p(c)))}),pe(),fe();var g=x8();Z(()=>{S(g,"d",p(u)),S(g,"stroke",p(r)),S(g,"stroke-width",p(o)),S(g,"fill",p(s)),S(g,"stroke-dasharray",p(a))}),N(t,g),re()}var N8=ie('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function da(t,e){ne(e,!1);const n=D();let r=F(e,"value",8,""),o=F(e,"fontSize",8,.2),a=F(e,"x",8),s=F(e,"y",8),c=F(e,"position",8,"TL"),u=F(e,"fontColor",8,"var(--text-primary-color)"),f=F(e,"fontWeight",8,400),h=D(null),g=D(null);function v(L,T,k){const G=["TL","TR"].includes(k),z=["TL","BL"].includes(k)?L+.05:L,X=T;return new Re(z,X)}function m(L){return["TL","BL"].includes(L)?"start":"end"}function E(L){return["TL","TR"].includes(L)?"text-before-edge":""}bw(()=>{if(!p(h)||!p(g))return;const L=p(h).getBBox();p(g).setAttribute("x",String(L.x)),p(g).setAttribute("y",String(L.y+L.height*.1)),p(g).setAttribute("width",String(L.width)),p(g).setAttribute("height",String(L.height*.8))}),$(()=>(Q(a()),Q(s()),Q(c())),()=>{x(n,v(a(),s(),c()))}),pe(),fe();var I=Ae(),w=ue(I);{var b=L=>{var T=N8(),k=ue(T);Io(k,z=>x(g,z),()=>p(g));var G=U(k);Z(()=>S(G,"text-anchor",m(c()))),Z(()=>S(G,"dominant-baseline",E(c())));var P=q(G,!0);H(G),Io(G,z=>x(h,z),()=>p(h)),Z(()=>{var z,X;S(G,"x",(z=p(n))==null?void 0:z.x),S(G,"y",(X=p(n))==null?void 0:X.y),S(G,"font-size",o()),S(G,"fill",u()),S(G,"font-weight",f()),nt(P,r())}),N(L,T)};ge(w,L=>{r().length&&L(b)})}N(t,I),re()}var T8=oe("<!> <!> <!> <!>",1);function D8(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),f=D();let h=F(e,"cloneTool",8);const g=wn(h().toolId,$t)??vO,v=800,m=h().value;$(()=>Q(h()),()=>{x(n,h().shape??g)}),$(()=>p(n),()=>{x(r,p(n).inset??.15)}),$(()=>p(n),()=>{x(o,p(n).strokeWidth??.07)}),$(()=>p(n),()=>{x(a,p(n).fontColor??p(n).stroke??"black")}),$(()=>Q(h()),()=>{x(s,h().cells[h().cells.length-1])}),$(()=>Q(h()),()=>{x(c,h().cells2[h().cells2.length-1])}),$(()=>(p(s),p(r)),()=>{x(u,new Re(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),$(()=>(p(c),p(r)),()=>{x(f,new Re(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),pe(),fe();var E=T8(),I=ue(E);ks(I,{get cells(){return h().cells},get shape(){return p(n)}});var w=U(I,2);da(w,{value:m,get x(){return p(f).x},get y(){return p(f).y},position:"BR",get fontColor(){return p(a)},fontWeight:v});var b=U(w,2);ks(b,{get cells(){return h().cells2},get shape(){return p(n)}});var L=U(b,2);da(L,{value:m,get x(){return p(f).x},get y(){return p(f).y},position:"BR",get fontColor(){return p(a)},fontWeight:v}),N(t,E),re()}var R8=ie("<g></g>"),k8=ie('<g class="clone-tools-layer" mask="url(#fog-mask-fog)"></g>');function G8(t,e){ne(e,!1);const n=Xe(),r=()=>ve(_8,"$cloneToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=k8();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=R8();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{D8(g,{get cloneTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var M8=ie('<path fill="none"></path>');function _a(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=F(e,"linePoints",8),f=F(e,"shape",8,void 0);const h="round",g="round";$(()=>Q(f()),()=>{var m;x(n,((m=f())==null?void 0:m.stroke)??"gray")}),$(()=>Q(f()),()=>{var m;x(r,((m=f())==null?void 0:m.strokeWidth)??.1)}),$(()=>Q(f()),()=>{var m;x(o,((m=f())==null?void 0:m.strokeDasharray)??0)}),$(()=>Q(f()),()=>{var m;x(a,((m=f())==null?void 0:m.strokeDashoffset)??0)}),$(()=>Q(f()),()=>{var m,E,I,w,b,L,T,k;x(s,{shortenHead:((E=(m=f())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((w=(I=f())==null?void 0:I.linePathOptions)==null?void 0:w.shortenTail)??.2,bezierRounding:((L=(b=f())==null?void 0:b.linePathOptions)==null?void 0:L.bezierRounding)??.2,closeLoops:((k=(T=f())==null?void 0:T.linePathOptions)==null?void 0:k.closeLoops)??!1})}),$(()=>(Q(u()),p(s)),()=>{x(c,fl(u(),p(s)))}),pe(),fe();var v=M8();S(v,"stroke-linejoin",h),S(v,"stroke-linecap",g),Z(()=>{S(v,"d",p(c)),S(v,"stroke",p(n)),S(v,"stroke-width",p(r)),S(v,"stroke-dasharray",p(o)),S(v,"stroke-dashoffset",p(a))}),N(t,v),re()}var $8=ie("<circle></circle>");function Oo(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=F(e,"x",8),f=F(e,"y",8),h=F(e,"shape",8);$(()=>Q(h()),()=>{x(n,h().r??.35)}),$(()=>Q(h()),()=>{x(r,h().stroke??"black")}),$(()=>Q(h()),()=>{var v;x(o,(v=h())==null?void 0:v.opacity)}),$(()=>Q(h()),()=>{x(a,h().strokeWidth??.02)}),$(()=>Q(h()),()=>{x(s,h().fill??"none")}),$(()=>Q(h()),()=>{x(c,h().strokeDasharray??0)}),pe(),fe();var g=$8();Z(()=>{S(g,"cx",u()),S(g,"cy",f()),S(g,"r",p(n)),S(g,"stroke",p(r)),S(g,"stroke-width",p(a)),S(g,"fill",p(s)),S(g,"opacity",p(o)),S(g,"stroke-dasharray",p(c))}),N(t,g),re()}var F8=oe("<!> <!> <!>",1);function U8(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D();let s=F(e,"linePoints",8),c=F(e,"shape",8,js);function u(w){var T;const b=Tt.cloneDeep(w);b.r=b.r||.2;const L=b.r;return b.strokeDasharray=w.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:L,shortenTail:L,bezierRounding:(T=b.linePathOptions)==null?void 0:T.bezierRounding},b}$(()=>Q(s()),()=>{x(n,s().length)}),$(()=>(p(n),Q(s())),()=>{x(r,p(n)>=0?s()[0]:void 0)}),$(()=>(p(n),Q(s())),()=>{x(o,p(n)>=0?s()[p(n)-1]:void 0)}),$(()=>Q(c()),()=>{x(a,u(c()))}),pe(),fe();var f=F8(),h=ue(f);{var g=w=>{Oo(w,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};ge(h,w=>{p(r)&&w(g)})}var v=U(h,2);{var m=w=>{_a(w,{get linePoints(){return s()},get shape(){return p(a)}})};ge(v,w=>{p(n)>1&&w(m)})}var E=U(v,2);{var I=w=>{Oo(w,{get x(){return p(o).x},get y(){return p(o).y},get shape(){return p(a)}})};ge(E,w=>{p(o)&&w(I)})}N(t,f),re()}var H8=ie("<polygon></polygon>");function Gs(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),f=D();let h=F(e,"cx",8),g=F(e,"cy",8),v=F(e,"shape",8);$(()=>Q(v()),()=>{x(n,v().n??3)}),$(()=>Q(v()),()=>{x(r,v().r??.5)}),$(()=>(p(r),p(n),Q(h()),Q(g())),()=>{x(o,Bv(p(r),p(n),new Re(h(),g())))}),$(()=>p(o),()=>{x(a,p(o).map(E=>`${E.x},${E.y}`).join(" "))}),$(()=>Q(v()),()=>{x(s,v().stroke??"black")}),$(()=>Q(v()),()=>{x(c,v().strokeWidth??.02)}),$(()=>Q(v()),()=>{x(u,v().fill??"none")}),$(()=>Q(v()),()=>{x(f,v().angle??0)}),pe(),fe();var m=H8();Z(()=>{S(m,"points",p(a)),S(m,"stroke",p(s)),S(m,"stroke-width",p(c)),S(m,"fill",p(u)),S(m,"transform",`rotate(${p(f)}, ${h()}, ${g()} )`)}),N(t,m),re()}var P8=oe("<!> <!> <!>",1);function B8(t,e){ne(e,!1);const n=D(),r=D(),o=D();let a=F(e,"linePoints",8),s=F(e,"shape",12,js);const c=4,u=.5;function f(k,G){const P=G.r??u,z=G.n??c,X=G.angle??0,te=Bv(P,z,new Re(0,0),!0,0),de=(z+(k-X/360)*z%z)%z,ee=Math.floor(de)%z,le=Math.ceil(de)%z;return te[ee].lerp(te[le],de%1).length()}function h(k){if(p(n)<=1)return 0;const G=a()[0],z=a()[1].subtract(G).angle()/(2*Math.PI);return f(z,k)}function g(k){if(p(n)<=1)return 0;const G=a()[p(n)-1],z=a()[p(n)-2].subtract(G).angle()/(2*Math.PI);return f(z,k)}function v(k){var P;const G=Tt.cloneDeep(k);return G.r=G.r||u,G.opacity=1,G.linePathOptions={shortenHead:h(G),shortenTail:g(G),bezierRounding:(P=G.linePathOptions)==null?void 0:P.bezierRounding},G}$(()=>Q(a()),()=>{x(n,a().length)}),$(()=>(p(n),Q(a())),()=>{x(r,p(n)>=0?a()[0]:void 0)}),$(()=>(p(n),Q(a())),()=>{x(o,p(n)>=0?a()[p(n)-1]:void 0)}),$(()=>Q(s()),()=>{s(v(s()))}),pe(),fe();var m=P8(),E=ue(m);{var I=k=>{Gs(k,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};ge(E,k=>{p(r)&&k(I)})}var w=U(E,2);{var b=k=>{_a(k,{get linePoints(){return a()},get shape(){return s()}})};ge(w,k=>{p(n)>1&&k(b)})}var L=U(w,2);{var T=k=>{Gs(k,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return s()}})};ge(L,k=>{p(o)&&k(T)})}N(t,m),re()}var W8=oe("<!> <!>",1);function Xg(t,e){ne(e,!1);const n=D();let r=F(e,"linePoints",8),o=F(e,"shape",8,js);function a(m){var w,b,L;const E=Tt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((w=E.linePathOptions)==null?void 0:w.shortenHead)||I,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(L=E.linePathOptions)==null?void 0:L.bezierRounding},E}function s(m){var w,b,L;const E=Tt.cloneDeep(m);E.r=E.r||.3,E.opacity=1,E.strokeWidth=0;const I=E.r;return E.linePathOptions={shortenHead:((w=E.linePathOptions)==null?void 0:w.shortenHead)||I,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(L=E.linePathOptions)==null?void 0:L.bezierRounding},E}$(()=>Q(r()),()=>{x(n,r().length>0?r()[0]:void 0)}),pe(),fe();var c=W8(),u=ue(c);{var f=m=>{var E=Ze(()=>a(o()));_a(m,{get linePoints(){return r()},get shape(){return p(E)}})};ge(u,m=>{r().length>1&&m(f)})}var h=U(u,2);{var g=m=>{var E=Ze(()=>a(o()));Oo(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(E)}})},v=m=>{var E=Ae(),I=ue(E);{var w=b=>{var L=Ze(()=>s(o()));Gs(b,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(L)}})};ge(I,b=>{p(n)&&b(w)},!0)}N(m,E)};ge(h,m=>{p(n)&&o().type===W.THERMO_WITH_CIRCLE?m(g):m(v,!1)})}N(t,c),re()}var z8=ie('<g class="line-tool"><!></g>');function Y8(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D();let s=F(e,"lineTool",8);const c=wn(s().toolId,$t)??js;$(()=>Q(s()),()=>{x(n,Rs(s().cells))}),$(()=>Q(s()),()=>{x(r,s().shape??c)}),$(()=>(p(r),W),()=>{var v;x(o,((v=p(r))==null?void 0:v.type)||W.LINE)}),$(()=>p(r),()=>{var v;x(a,((v=p(r))==null?void 0:v.opacity)??.8)}),pe(),fe();var u=z8(),f=q(u);{var h=v=>{_a(v,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=v=>{var m=Ae(),E=ue(m);{var I=b=>{U8(b,{get linePoints(){return p(n)},get shape(){return p(r)}})},w=b=>{var L=Ae(),T=ue(L);{var k=P=>{B8(P,{get linePoints(){return p(n)},get shape(){return p(r)}})},G=P=>{var z=Ae(),X=ue(z);{var te=ee=>{Xg(ee,{get linePoints(){return p(n)},get shape(){return p(r)}})},de=ee=>{var le=Ae(),Ie=ue(le);{var me=xe=>{Xg(xe,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ee=xe=>{_a(xe,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(Ie,xe=>{p(o)===W.THERMO_WITH_POLYGON?xe(me):xe(Ee,!1)},!0)}N(ee,le)};ge(X,ee=>{p(o)===W.THERMO_WITH_CIRCLE?ee(te):ee(de,!1)},!0)}N(P,z)};ge(T,P=>{p(o)===W.LINE_WITH_POLYGON_ENDS?P(k):P(G,!1)},!0)}N(b,L)};ge(E,b=>{p(o)===W.LINE_WITH_CIRCLE_ENDS?b(I):b(w,!1)},!0)}N(v,m)};ge(f,v=>{p(o)===W.LINE?v(h):v(g,!1)})}H(u),Z(()=>S(u,"opacity",p(a))),N(t,u),re()}var j8=ie("<g></g>"),V8=ie('<g class="line-tools-layer" mask="url(#fog-mask-fog)"></g>');function q8(t,e){ne(e,!1);const n=Xe(),r=()=>ve(c8,"$lineToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=V8();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=j8();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{Y8(g,{get lineTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var X8=ie('<path class="cursor svelte-zsq70u"></path>');function K8(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Xt,"$toolStore",n),o=()=>ve(bo,"$selectionStore",n),a=D(),s=D(),c=.25;function u(h){if(!h)return"";const[g,v]=[h.c,h.r];return`M${g},${v}L${g+c},${v}L${g},${v+c}Z`}$(()=>r(),()=>{x(a,ed(r()))}),$(()=>o(),()=>{x(s,u(o().lastCell))}),pe(),fe();var f=X8();Z(()=>{S(f,"d",p(s)),S(f,"visibility",p(a)?"visible":"hidden")}),N(t,f),re()}var Z8=ie('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function Q8(t,e){ne(e,!1);let n=F(e,"gridShape",8);fe();var r=Z8(),o=q(r);S(o,"x",0),S(o,"y",0),H(r),Z(()=>{S(o,"width",n().nCols),S(o,"height",n().nRows)}),N(t,r),re()}var J8=ie('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),e$=ie('<g class="grid-lines"></g>');function t$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(_n,"$gridStore",n),o=D();$(()=>r(),()=>{x(o,r().getAllCells())}),pe(),fe();var a=e$();We(a,5,()=>p(o),gt,(s,c)=>{var u=J8();S(u,"width",1),S(u,"height",1),Z(()=>{S(u,"x",p(c).c),S(u,"y",p(c).r)}),N(s,u)}),H(a),N(t,a),re()}var n$=ie('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),r$=ie('<g class="regions-border"></g>');function o$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(dn,"$cellsStore",n),o=()=>ve(_n,"$gridStore",n),a=D(),s=D();function c(f,h){return f.filter(m=>m.region===h).map(m=>({r:m.r,c:m.c}))}$(()=>r(),()=>{x(a,r())}),$(()=>o(),()=>{x(s,o().getUsedRegions())}),pe(),fe();var u=r$();We(u,5,()=>p(s),gt,(f,h)=>{var g=n$();Z(()=>S(g,"d",ai(c(p(a),p(h)),0,!1))),Z(()=>S(g,"id",`region-${p(h)??""}`)),N(f,g)}),H(u),N(t,u),re()}var i$=ie('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function a$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(bo,"$selectionStore",n),o=()=>ve(Xt,"$toolStore",n),a=D(),s=D(),c=D(),u=D(),f=D(),h=D();let g=F(e,"boundingBox",8);const v=.06,m=.05,E="#080808",I="#b2b2b2";$(()=>Q(g()),()=>{x(a,g().x)}),$(()=>Q(g()),()=>{x(s,g().y)}),$(()=>r(),()=>{x(c,r().cells)}),$(()=>p(c),()=>{x(u,ai(p(c),0))}),$(()=>p(c),()=>{x(f,ai(p(c),v))}),$(()=>o(),()=>{x(h,ed(o()))}),pe(),fe();var w=i$(),b=q(w),L=q(b);S(L,"stdDeviation",m),Co(),H(b);var T=U(b),k=q(T);S(k,"fill",I);var G=U(k);S(G,"fill",E),H(T);var P=U(T);H(w),Z(()=>{S(w,"visibility",p(h)?"visible":"hidden"),S(T,"x",p(a)),S(T,"y",p(s)),S(k,"x",p(a)),S(k,"y",p(s)),S(G,"d",p(f)),S(P,"d",p(u))}),N(t,w),re()}var s$=oe("<!> <!>",1);function zv(t,e){ne(e,!1);const n=D(),r=D();let o=F(e,"cells",8),a=F(e,"shape",8,rd),s=F(e,"value",8,void 0);$(()=>Q(o()),()=>{x(n,o()[0])}),$(()=>p(n),()=>{x(r,new Re(p(n).c,p(n).r))}),pe(),fe();var c=s$(),u=ue(c);ks(u,{get cells(){return o()},get shape(){return a()}});var f=U(u,2);{var h=g=>{da(g,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(f,g=>{s()&&s().length&&g(h)})}N(t,c),re()}var l$=ie('<g class="cage-tool"><!></g>');function c$(t,e){ne(e,!1);const n=D();let r=F(e,"cageTool",8);const o=wn(r().toolId,$t)??rd;$(()=>Q(r()),()=>{x(n,r().shape??o)}),pe(),fe();var a=l$(),s=q(a);zv(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),H(a),N(t,a),re()}var u$=ie("<g></g>"),d$=ie('<g class="cage-tools-layer" mask="url(#fog-mask-fog)"></g>');function _$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(d8,"$cageToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=d$();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=u$();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{c$(g,{get cageTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var f$=ie('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function g$(t,e){ne(e,!1);const n=D(),r=D();let o=F(e,"grid",8);$(()=>Q(o()),()=>{x(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),$(()=>p(n),()=>{x(r,ai(p(n),0))}),pe(),fe();var a=f$(),s=q(a);H(a),Z(()=>S(s,"d",p(r))),N(t,a),re()}var h$=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),v$=ie('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),p$=ie('<g class="quadruple-text"><!></g>');function m$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=F(e,"cornerTool",8);const u=c().cells,f=new Re(u[u.length-1].c,u[u.length-1].r),h=wn(c().toolId,$t)??Fh;$(()=>Q(c()),()=>{x(n,c().value)}),$(()=>Q(c()),()=>{x(r,c().shape??h)}),$(()=>p(r),()=>{var E;x(o,((E=p(r))==null?void 0:E.fontSize)??.2)}),$(()=>p(r),()=>{var E;x(a,((E=p(r))==null?void 0:E.fontColor)??"black")}),$(()=>p(n),()=>{var E;x(s,p(n)?(E=p(n))==null?void 0:E.split(","):[])}),pe(),fe();var g=Ae(),v=ue(g);{var m=E=>{var I=p$(),w=q(I);{var b=T=>{var k=h$(),G=q(k,!0);Z(()=>nt(G,p(s).join(" "))),H(k),Z(()=>{S(k,"x",f.x),S(k,"y",f.y),S(k,"font-size",p(o)),S(k,"fill",p(a))}),N(T,k)},L=T=>{var k=v$(),G=ue(k),P=q(G,!0);Z(()=>nt(P,p(s).slice(0,2).join(" "))),H(G);var z=U(G),X=q(z,!0);Z(()=>nt(X,p(s).slice(2).join(" "))),H(z),Z(()=>{S(G,"x",f.x),S(G,"y",f.y),S(G,"dy",-p(o)/2),S(G,"font-size",p(o)),S(G,"fill",p(a)),S(z,"x",f.x),S(z,"y",f.y),S(z,"dy",p(o)/2),S(z,"font-size",p(o)),S(z,"fill",p(a))}),N(T,k)};ge(w,T=>{p(s).length<=2?T(b):T(L,!1)})}H(I),Z(()=>S(I,"data-count",p(s).length)),N(E,I)};ge(v,E=>{p(n)&&E(m)})}N(t,g),re()}var E$=ie("<ellipse></ellipse>");function C$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let f=F(e,"cx",8),h=F(e,"cy",8),g=F(e,"shape",8);$(()=>Q(g()),()=>{x(n,g().width??.5)}),$(()=>Q(g()),()=>{x(r,g().height??.5)}),$(()=>Q(g()),()=>{x(o,g().stroke??"black")}),$(()=>Q(g()),()=>{var m;x(a,(m=g())==null?void 0:m.opacity)}),$(()=>Q(g()),()=>{x(s,g().strokeWidth??.02)}),$(()=>Q(g()),()=>{x(c,g().fill??"none")}),$(()=>Q(g()),()=>{x(u,g().angle??0)}),pe(),fe();var v=E$();Z(()=>{S(v,"cx",f()),S(v,"cy",h()),S(v,"rx",p(n)/2),S(v,"ry",p(r)/2),S(v,"stroke",p(o)),S(v,"stroke-width",p(s)),S(v,"fill",p(c)),S(v,"opacity",p(a)),S(v,"transform",`rotate(${p(u)}, ${f()}, ${h()} )`)}),N(t,v),re()}var I$=ie("<rect></rect>");function b$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D();let f=F(e,"cx",8),h=F(e,"cy",8),g=F(e,"shape",8);$(()=>Q(g()),()=>{x(n,g().width??.5)}),$(()=>Q(g()),()=>{x(r,g().height??.5)}),$(()=>(Q(f()),p(n)),()=>{x(o,f()-p(n)/2)}),$(()=>(Q(h()),p(r)),()=>{x(a,h()-p(r)/2)}),$(()=>Q(g()),()=>{x(s,g().stroke||"black")}),$(()=>Q(g()),()=>{x(c,g().strokeWidth||.023)}),$(()=>Q(g()),()=>{x(u,g().fill||"none")}),pe(),fe();var v=I$();Z(()=>{S(v,"x",p(o)),S(v,"y",p(a)),S(v,"width",p(n)),S(v,"height",p(r)),S(v,"stroke",p(s)),S(v,"stroke-width",p(c)),S(v,"fill",p(u))}),N(t,v),re()}var w$=ie("<rect></rect>");function O$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),f=D(),h=D();let g=F(e,"cx",8),v=F(e,"cy",8),m=F(e,"shape",8);$(()=>Q(m()),()=>{x(n,m().r??.5)}),$(()=>(Q(g()),p(n)),()=>{x(r,g()-p(n))}),$(()=>(Q(v()),p(n)),()=>{x(o,v()-p(n))}),$(()=>p(n),()=>{x(a,2*p(n))}),$(()=>p(n),()=>{x(s,2*p(n))}),$(()=>Q(m()),()=>{x(c,m().stroke??"black")}),$(()=>Q(m()),()=>{x(u,m().strokeWidth??.02)}),$(()=>Q(m()),()=>{x(f,m().fill??"none")}),$(()=>Q(m()),()=>{x(h,m().angle??0)}),pe(),fe();var E=w$();Z(()=>{S(E,"x",p(r)),S(E,"y",p(o)),S(E,"width",p(a)),S(E,"height",p(s)),S(E,"stroke",p(c)),S(E,"stroke-width",p(u)),S(E,"fill",p(f)),S(E,"transform",`rotate(${p(h)}, ${g()}, ${v()})`)}),N(t,E),re()}function vl(t,e){ne(e,!1);const n=D();let r=F(e,"cx",8),o=F(e,"cy",8),a=F(e,"shape",8);$(()=>(Q(a()),W),()=>{var h;x(n,((h=a())==null?void 0:h.type)??W.CIRCLE)}),pe(),fe();var s=Ae(),c=ue(s);{var u=h=>{Oo(h,{get x(){return r()},get y(){return o()},get shape(){return a()}})},f=h=>{var g=Ae(),v=ue(g);{var m=I=>{C$(I,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},E=I=>{var w=Ae(),b=ue(w);{var L=k=>{O$(k,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},T=k=>{var G=Ae(),P=ue(G);{var z=te=>{b$(te,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},X=te=>{var de=Ae(),ee=ue(de);{var le=me=>{Gs(me,{get cx(){return r()},get cy(){return o()},get shape(){return a()}})},Ie=me=>{Oo(me,{get x(){return r()},get y(){return o()},get shape(){return a()}})};ge(ee,me=>{p(n)===W.POLYGON?me(le):me(Ie,!1)},!0)}N(te,de)};ge(P,te=>{p(n)===W.RECTANGLE?te(z):te(X,!1)},!0)}N(k,G)};ge(b,k=>{p(n)===W.SQUARE?k(L):k(T,!1)},!0)}N(I,w)};ge(v,I=>{p(n)===W.ELLIPSE?I(m):I(E,!1)},!0)}N(h,g)};ge(c,h=>{p(n)===W.CIRCLE?h(u):h(f,!1)})}N(t,s),re()}var y$=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),L$=ie('<g class="corner-tool"><!><!></g>');function A$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D();let s=F(e,"cornerTool",8);const c=s().cells,u=wn(s().toolId,$t)??Fh,f=new Re(c[c.length-1].c,c[c.length-1].r);function h(E,I){return I===W.TEXT_ONLY?E.value?E.value:"-":E.value??""}$(()=>Q(s()),()=>{x(n,s().shape??u)}),$(()=>(p(n),W),()=>{var E;x(r,((E=p(n))==null?void 0:E.type)??W.CIRCLE)}),$(()=>p(n),()=>{var E;x(o,((E=p(n))==null?void 0:E.fontSize)??.2)}),$(()=>p(n),()=>{var E;x(a,((E=p(n))==null?void 0:E.fontColor)??"black")}),pe(),fe();var g=Ae(),v=ue(g);{var m=E=>{var I=L$(),w=q(I);vl(w,{get cx(){return f.x},get cy(){return f.y},get shape(){return p(n)}});var b=U(w);{var L=k=>{m$(k,{get cornerTool(){return s()}})},T=k=>{var G=y$(),P=q(G,!0);Z(()=>nt(P,h(s(),p(r)))),H(G),Z(()=>{S(G,"x",f.x),S(G,"y",f.y),S(G,"font-size",p(o)),S(G,"fill",p(a))}),N(k,G)};ge(b,k=>{s().toolId===d.QUADRUPLE?k(L):k(T,!1)})}H(I),N(E,I)};ge(v,E=>{c.length===4&&E(m)})}N(t,g),re()}var S$=ie("<g></g>"),x$=ie('<g class="corner-tools-layer" mask="url(#fog-mask-fog)"></g>');function N$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(l8,"$cornerToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=x$();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=S$();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{A$(g,{get cornerTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var T$=ie('<path class="arrow-line" fill="none"></path>'),D$=ie('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function R$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D(),u=D(),f=D(),h=D(),g=D();let v=F(e,"arrowTool",8),m=F(e,"arrowId",8),E=F(e,"boundingBox",8);const I=wn(v().toolId,$t)??hO,w="round",b="round",L=crypto.randomUUID(),T=`arrow-mask-${m()}-${L}`,k=`arrow-marker-${m()}-${L}`;$(()=>Q(v()),()=>{x(n,v().shape??I)}),$(()=>Q(E()),()=>{x(r,E().x)}),$(()=>Q(E()),()=>{x(o,E().y)}),$(()=>p(n),()=>{var le;x(a,((le=p(n))==null?void 0:le.r)??.4)}),$(()=>p(n),()=>{var le;x(s,((le=p(n))==null?void 0:le.stroke)??"gray")}),$(()=>p(n),()=>{var le;x(c,((le=p(n))==null?void 0:le.strokeWidth)??.1)}),$(()=>p(n),()=>{var le;x(u,((le=p(n))==null?void 0:le.strokeDasharray)??0)}),$(()=>p(n),()=>{var le;x(f,((le=p(n))==null?void 0:le.opacity)??.8)}),$(()=>(p(a),p(n)),()=>{var le,Ie,me,Ee;x(h,{shortenHead:p(a),shortenTail:((Ie=(le=p(n))==null?void 0:le.linePathOptions)==null?void 0:Ie.shortenTail)??.2,bezierRounding:((Ee=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ee.bezierRounding)??.4})}),$(()=>Q(v()),()=>{x(g,Iu(v().cells))}),pe(),fe();var G=D$(),P=q(G);S(P,"id",T);var z=q(P),X=U(z);H(P);var te=U(P);hl(te,{id:k,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var de=U(te);S(de,"mask",`url(#${T??""})`);var ee=U(de);We(ee,1,()=>v().lines,gt,(le,Ie)=>{var me=Ae(),Ee=ue(me);{var xe=st=>{var Se=T$();Z(()=>S(Se,"d",Iu(p(Ie),p(h)))),S(Se,"stroke-linejoin",w),S(Se,"stroke-linecap",b),S(Se,"marker-end",`url(#${k??""})`),Z(()=>{S(Se,"stroke",p(s)),S(Se,"stroke-width",p(c)),S(Se,"opacity",p(f)),S(Se,"stroke-dasharray",p(u))}),N(st,Se)};ge(Ee,st=>{p(Ie).length>1&&st(xe)})}N(le,me)}),H(G),Z(()=>{S(P,"x",p(r)),S(P,"y",p(o)),S(z,"x",p(r)),S(z,"y",p(o)),S(X,"stroke-width",2*p(a)-p(c)),S(X,"d",p(g)),S(de,"d",p(g)),S(de,"stroke-width",2*p(a)+p(c)),S(de,"stroke",p(s))}),N(t,G),re()}var k$=ie("<g></g>"),G$=ie('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function M$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(u8,"$arrowToolsStore",n),o=D();let a=F(e,"boundingBox",8);$(()=>r(),()=>{x(o,r())}),pe();var s=G$();We(s,5,()=>p(o),gt,(c,u)=>{let f=()=>p(u).toolId,h=()=>p(u).element;var g=k$();We(g,5,()=>Object.entries(h()),v=>v[0],(v,m)=>{R$(v,{get arrowId(){return p(m)[0]},get arrowTool(){return p(m)[1]},get boundingBox(){return a()}})}),H(g),Z(()=>Fn(g,`element-group ${f()}`)),N(c,g)}),H(s),N(t,s),re()}var $$=ie('<!><path fill="none"></path>',1);function F$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=F(e,"singleCellArrowTool",8),u=F(e,"id",8);const f=c().cell,h=wn(c().toolId,$t)??fO,g=.3;function v(L,T){const k=Ys(T),G=new Re(k.c,k.r).normalise().scale(g),P=Zn(L),z=P.subtract(G),X=P.add(G);return[z,X]}const m=crypto.randomUUID(),E=`single-cell-arrow-marker-${u()}-${m}`;$(()=>Q(c()),()=>{x(n,c().direction)}),$(()=>Q(c()),()=>{x(r,c().shape??h)}),$(()=>p(r),()=>{x(o,p(r).strokeWidth??.1)}),$(()=>p(r),()=>{x(a,p(r).stroke??"black")}),$(()=>p(n),()=>{x(s,fl(v(f,p(n))))}),pe(),fe();var I=$$(),w=ue(I);hl(w,{id:E,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(o)}});var b=U(w);S(b,"marker-end",`url(#${E??""})`),Z(()=>{S(b,"d",p(s)),S(b,"stroke",p(a)),S(b,"stroke-width",p(o))}),N(t,I),re()}var U$=ie('<path fill="none"></path>'),H$=ie("<!><!>",1);function P$(t,e){ne(e,!1);const n=D(),r=D(),o=D();let a=F(e,"singleCellMultiArrowTool",8),s=F(e,"id",8);const c=a().cell,u=wn(a().toolId,$t)??gO,f=.2;function h(b,L){const T=Ys(L),k=new Re(T.c,T.r),P=Zn(b).add(k.scale(.4));return[P.subtract(k.normalise().scale(f)),P]}function g(b){return fl(h(c,b))}const v=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${v}`;$(()=>Q(a()),()=>{x(n,a().shape??u)}),$(()=>p(n),()=>{x(r,p(n).strokeWidth??.08)}),$(()=>p(n),()=>{x(o,p(n).stroke??"black")}),pe(),fe();var E=H$(),I=ue(E);hl(I,{id:m,l:.1,get stroke(){return p(o)},get strokeWidth(){return p(r)}});var w=U(I);We(w,1,()=>a().directions,gt,(b,L)=>{var T=U$();Z(()=>S(T,"d",g(p(L)))),S(T,"marker-end",`url(#${m??""})`),Z(()=>{S(T,"stroke",p(o)),S(T,"stroke-width",p(r))}),N(b,T)}),N(t,E),re()}var B$=ie('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Kg(t,e){ne(e,!1);const n=Xe(),r=()=>ve(o8,"$minimumConstraintsStore",n),o=()=>ve(i8,"$maximumConstraintsStore",n),a=D(),s=D(),c=D();let u=F(e,"coord",8),f=F(e,"minOrMax",8);function h(w,b){const L=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<T.length;k++){let G=T[k];const P={r:w.r+G[1],c:w.c+G[0]};L[k]=!Object.values(b).some(z=>qe(P,z.cell))}return L}function g(w,b){let L=b8(f(),w.r,w.c);const T=h(w,b);return L=L.filter((G,P)=>T[P]),L.map(G=>Oi(G,!1)).join("")}function v(w,b){return f()==="max"?b:w}$(()=>Q(u()),()=>{x(a,u().c)}),$(()=>Q(u()),()=>{x(s,u().r)}),$(()=>(r(),o()),()=>{x(c,v(r(),o()))}),pe(),fe();var m=B$(),E=q(m);S(E,"width",1),S(E,"height",1);var I=U(E);Z(()=>S(I,"d",g(u(),p(c)))),H(m),Z(()=>{S(E,"x",p(a)),S(E,"y",p(s))}),N(t,m),re()}var W$=ie("<circle></circle>");function z$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=F(e,"x",8),f=F(e,"y",8),h=F(e,"value",8),g=F(e,"shape",8);$(()=>Q(g()),()=>{x(n,g().r??.35)}),$(()=>Q(g()),()=>{x(r,g().stroke??"black")}),$(()=>Q(g()),()=>{var m;x(o,(m=g())==null?void 0:m.opacity)}),$(()=>Q(g()),()=>{x(a,g().strokeWidth??.02)}),$(()=>Q(h()),()=>{x(s,h()==="1"?"var(--constraint-color-red)":h()==="2"?"var(--constraint-color-green)":h()==="3"?"var(--constraint-color-blue)":"none")}),$(()=>Q(g()),()=>{x(c,g().strokeDasharray??0)}),pe(),fe();var v=W$();Z(()=>{S(v,"cx",u()),S(v,"cy",f()),S(v,"r",p(n)),S(v,"stroke",p(r)),S(v,"stroke-width",p(a)),S(v,"fill",p(s)),S(v,"opacity",p(o)),S(v,"stroke-dasharray",p(c))}),N(t,v),re()}var Y$=ie('<g class="single-cell-tool"><!><!></g>');function j$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=F(e,"singleCellTool",8),u=F(e,"id",8);const f=c().cell,h=wn(c().toolId,$t)??_O;$(()=>Q(c()),()=>{x(n,c().shape??h)}),$(()=>(p(n),W),()=>{var b;x(r,((b=p(n))==null?void 0:b.type)||W.CIRCLE)}),$(()=>{},()=>{x(o,{x:f.c+.5,y:f.r+.5})}),$(()=>Re,()=>{x(a,new Re(f.c,f.r))}),$(()=>Q(c()),()=>{x(s,c().value)}),pe(),fe();var g=Y$(),v=q(g);{var m=b=>{Kg(b,{coord:f,minOrMax:"min"})},E=b=>{var L=Ae(),T=ue(L);{var k=P=>{Kg(P,{coord:f,minOrMax:"max"})},G=P=>{var z=Ae(),X=ue(z);{var te=ee=>{z$(ee,{get x(){return p(o).x},get y(){return p(o).y},get value(){return p(s)},get shape(){return p(n)}})},de=ee=>{var le=Ae(),Ie=ue(le);{var me=xe=>{zv(xe,{cells:[f],get shape(){return p(n)},get value(){return c().value}})},Ee=xe=>{vl(xe,{get cx(){return p(o).x},get cy(){return p(o).y},get shape(){return p(n)}})};ge(Ie,xe=>{p(r)===W.CAGE?xe(me):xe(Ee,!1)},!0)}N(ee,le)};ge(X,ee=>{c().toolId===d.COLORED_COUNTING_CIRCLES?ee(te):ee(de,!1)},!0)}N(P,z)};ge(T,P=>{c().toolId===d.MAXIMUM?P(k):P(G,!1)},!0)}N(b,L)};ge(v,b=>{c().toolId===d.MINIMUM?b(m):b(E,!1)})}var I=U(v);{var w=b=>{da(b,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};ge(I,b=>{p(r)!==W.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&p(s)&&b(w)})}H(g),Z(()=>S(g,"id",`constraint-${u()}`)),N(t,g),re()}var V$=ie("<g></g>"),q$=ie('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function X$(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Nd,"$singleCellToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=q$();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=V$();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{var m=Ae(),E=ue(m);{var I=b=>{F$(b,{get singleCellArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},w=b=>{var L=Ae(),T=ue(L);{var k=P=>{P$(P,{get singleCellMultiArrowTool(){return p(v)[1]},get id(){return p(v)[0]}})},G=P=>{var z=Ae(),X=ue(z);{var te=de=>{j$(de,{get singleCellTool(){return p(v)[1]},get id(){return p(v)[0]}})};ge(X,de=>{p(v)[1].type==="SIMPLE"&&de(te)},!0)}N(P,z)};ge(T,P=>{p(v)[1].type==="MULTIARROW"?P(k):P(G,!1)},!0)}N(b,L)};ge(E,b=>{p(v)[1].type==="ARROW"?b(I):b(w,!1)})}N(g,m)}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var K$=ie('<line class="svelte-yr67cf"></line>');function Z$(t,e){ne(e,!1);const n=D(),r=D(),o=D();let a=F(e,"shape",8),s=F(e,"coords",8);const[c,u]=s(),f=u.c,h=c.c===u.c?u.c+1:u.c,g=u.r,v=c.r===u.r?u.r+1:u.r;$(()=>Q(a()),()=>{x(n,a().stroke??"black")}),$(()=>Q(a()),()=>{var E;x(r,(E=a())==null?void 0:E.opacity)}),$(()=>Q(a()),()=>{x(o,a().strokeWidth??.02)}),pe(),fe();var m=K$();S(m,"x1",f),S(m,"x2",h),S(m,"y1",g),S(m,"y2",v),Z(()=>{S(m,"stroke",p(n)),S(m,"stroke-width",p(o)),S(m,"opacity",p(r))}),N(t,m),re()}var Q$=ie('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function J$(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D();let c=F(e,"edgeTool",8);const u=c().cells,f=wn(c().toolId,$t)??$h;function h(I,w){return w===W.TEXT_ONLY?I.value?I.value:"-":I.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}$(()=>Q(c()),()=>{x(n,c().shape??f)}),$(()=>Rs,()=>{x(r,hL(Rs(u)))}),$(()=>(p(n),W),()=>{var I;x(o,((I=p(n))==null?void 0:I.type)||W.CIRCLE)}),$(()=>p(n),()=>{var I;x(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),$(()=>p(n),()=>{var I;x(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),pe(),fe();var v=Ae(),m=ue(v);{var E=I=>{var w=Q$(),b=q(w);{var L=P=>{Oo(P,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},T=P=>{var z=Ae(),X=ue(z);{var te=ee=>{Oo(ee,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},de=ee=>{var le=Ae(),Ie=ue(le);{var me=xe=>{Z$(xe,{coords:u,get shape(){return p(n)}})},Ee=xe=>{vl(xe,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(Ie,xe=>{p(o)===W.BORDER_LINE?xe(me):xe(Ee,!1)},!0)}N(ee,le)};ge(X,ee=>{p(o)===W.TEXT_ONLY?ee(te):ee(de,!1)},!0)}N(P,z)};ge(b,P=>{c().toolId===d.EDGE_INEQUALITY?P(L):P(T,!1)})}var k=U(b);Z(()=>S(k,"transform",`rotate(${g()}, ${p(r).x}, ${p(r).y} )`));var G=q(k,!0);Z(()=>nt(G,h(c(),p(o)))),H(k),H(w),Z(()=>{S(k,"x",p(r).x),S(k,"y",p(r).y),S(k,"font-size",p(a)),S(k,"fill",p(s))}),N(I,w)};ge(m,I=>{u.length===2&&I(E)})}N(t,v),re()}var e4=ie("<g></g>"),t4=ie('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function n4(t,e){ne(e,!1);const n=Xe(),r=()=>ve(a8,"$edgeToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=t4();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=e4();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{J$(g,{get edgeTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}function r4(t,e){const n=t.getRow(e.r);return new Set(n)}function o4(t,e){const n=t.getCol(e.c);return new Set(n)}function i4(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function a4(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function s4(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function l4(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function c4(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function u4(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function d4(t,e,n){let r=new Set;const a=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),f=c.findIndex(g=>g===e);if(f!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((v,m)=>m!==f);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function _4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function f4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function g4(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(d.ANTIKNIGHT)&&(r=r.union(a4(t,o))),e.get(d.ANTIKING)&&(r=r.union(s4(t,o))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(l4(t,o))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(u4(t,o))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(c4(t,o)))),r}function tu(t,e,n,r,o){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=f4(t,n,c);o=new Set([...o,...u])}return o}function h4(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;const a=e.get(d.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],f=d4(t,o,u);r=new Set([...r,...f])}const s=e.get(d.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],f=_4(t,o,u);r=new Set([...r,...f])}return r=tu(t,e,o,d.KILLER_CAGE,r),r=tu(t,e,o,d.PARITY_BALANCE_CAGE,r),r=tu(t,e,o,d.SPOTLIGHT_CAGE,r),r}function Yv(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,a=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...r4(o,e),...o4(o,e),...i4(o,e)])),n=new Set([...n,...g4(o,r,e)]),n=new Set([...n,...h4(o,a,e)]);const s=o.getCell(e.r,e.c);return s&&n.delete(s),n}function v4(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(Yv(t,a));const r=n.reduce((a,s)=>a.intersection(s)),o=[];for(const a of r)o.push(a.toCoords());return o}var p4=ie('<tspan class="svelte-xct9ah"> </tspan>'),m4=ie('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function E4(t,e){ne(e,!1);const n=D();let r=F(e,"cell",8),o=F(e,"seen_values",8);const a=.25;function s(h){return o().find(v=>v===h)!==void 0}$(()=>Q(r()),()=>{x(n,Zn({r:r().r,c:r().c}))}),pe(),fe();var c=Ae(),u=ue(c);{var f=h=>{var g=m4(),v=q(g);S(v,"font-size",a),We(v,5,()=>r().centerMarks,gt,(m,E)=>{var I=p4();const w=Ze(()=>s(p(E)));Z(()=>yt(I,"conflict",p(w)));var b=q(I,!0);H(I),Z(()=>nt(b,p(E))),N(m,I)}),H(v),H(g),Z(()=>{S(v,"x",p(n).x),S(v,"y",p(n).y),S(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(h,g)};ge(u,h=>{r().centerMarks.length&&h(f)})}N(t,c),re()}var C4=ie('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),I4=ie('<g class="corner-marks-group"></g>');function b4(t,e){ne(e,!1);let n=F(e,"cell",8),r=F(e,"seen_values",8);const o=.25,a=.28;function s(g){const v=g.cornerMarks.slice(0,8),m=Zn({r:g.r,c:g.c});return v.map((E,I)=>{const w=C8(I,a);return{pos:m.add(w),value:E,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}fe();var u=Ae(),f=ue(u);{var h=g=>{var v=I4();We(v,5,()=>s(n()),gt,(m,E)=>{let I=()=>p(E).pos,w=()=>p(E).value;var b=C4();S(b,"font-size",o);const L=Ze(()=>c(w()));var T=q(b,!0);H(b),Z(()=>{S(b,"x",I().x),S(b,"y",I().y),yt(b,"conflict",p(L)),nt(T,w())}),N(m,b)}),H(v),N(g,v)};ge(f,g=>{n().cornerMarks.length&&g(h)})}N(t,u),re()}var w4=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),O4=ie('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),y4=ie('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),L4=ie("<!><!>",1),A4=ie('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function S4(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(Ea,"$puzzleStore",n),a=()=>ve(Xt,"$toolStore",n),s=D(),c=D(),u=D(),f=D(),h=D(),g=D(),v=D();let m=F(e,"cell",8);const E=.8,I=400;function w(G,P){if(!G)return[];let X=[...Yv(p(h),P.toCoords())].map(te=>te.value).filter(te=>te!==null);return X=[...new Set(X)],X}function b(G){return G?"1":"0"}$(()=>Q(m()),()=>{x(s,m().value)}),$(()=>Q(m()),()=>{x(c,m().given)}),$(()=>Q(m()),()=>{x(u,Zn({r:m().r,c:m().c}))}),$(()=>r(),()=>{x(f,r().highlightPencilmarkConflicts)}),$(()=>o(),()=>{x(h,o())}),$(()=>r(),()=>{x(g,r().showSolution)}),$(()=>(p(f),Q(m())),()=>{x(v,w(p(f),m()))}),pe(),fe();var L=Ae(),T=ue(L);{var k=G=>{var P=A4(),z=q(P);{var X=de=>{var ee=Ae(),le=ue(ee);{var Ie=me=>{var Ee=w4();S(Ee,"font-size",E),S(Ee,"font-weight",I);var xe=q(Ee,!0);H(Ee),Z(()=>{S(Ee,"x",p(u).x),S(Ee,"y",p(u).y),nt(xe,m().region)}),N(me,Ee)};ge(le,me=>{m().region!==null&&me(Ie)})}N(de,ee)},te=de=>{var ee=Ae(),le=ue(ee);{var Ie=Ee=>{var xe=Ae(),st=ue(xe);{var Se=we=>{var _t=O4();S(_t,"font-size",E),S(_t,"font-weight",I);var ut=q(_t,!0);Z(()=>nt(ut,b(m().fog))),H(_t),Z(()=>{S(_t,"x",p(u).x),S(_t,"y",p(u).y)}),N(we,_t)};ge(st,we=>{m().fog!==null&&we(Se)})}N(Ee,xe)},me=Ee=>{var xe=Ae(),st=ue(xe);{var Se=_t=>{var ut=y4();S(ut,"font-size",E),S(ut,"font-weight",I);var Un=q(ut,!0);H(ut),Z(()=>{S(ut,"x",p(u).x),S(ut,"y",p(u).y),yt(ut,"given",p(c)),nt(Un,p(s))}),N(_t,ut)},we=_t=>{var ut=L4(),Un=ue(ut);b4(Un,{get cell(){return m()},get seen_values(){return p(v)}});var Lt=U(Un);E4(Lt,{get cell(){return m()},get seen_values(){return p(v)}}),N(_t,ut)};ge(st,_t=>{p(s)!==null?_t(Se):_t(we,!1)},!0)}N(Ee,xe)};ge(le,Ee=>{a()===d.FOG?Ee(Ie):Ee(me,!1)},!0)}N(de,ee)};ge(z,de=>{a()===d.REGIONS?de(X):de(te,!1)})}H(P),Z(()=>yt(P,"hide-given",m().given)),N(G,P)};ge(T,G=>{p(g)||G(k)})}N(t,L),re()}var x4=ie("<path></path>"),N4=ie('<g class="highlights-group"></g>');function T4(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Xt,"$toolStore",n);let o=F(e,"cell",8);function a(f){const h=Zn({r:o().r,c:o().c}),g=o().highlights.length;return o().highlights.map((m,E)=>{let I=m8(E,g);I=I.map(b=>b.add(h));const w=Oi(I,!0);return{colorId:m,d:w}})}fe();var s=Ae(),c=ue(s);{var u=f=>{var h=Ae(),g=ue(h);{var v=m=>{var E=N4();We(E,5,()=>a(o()),gt,(I,w)=>{let b=()=>p(w).colorId,L=()=>p(w).d;var T=x4();Z(()=>{Fn(T,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),S(T,"d",L())}),N(I,T)}),H(E),N(m,E)};ge(g,m=>{o().highlights.length&&m(v)})}N(f,h)};ge(c,f=>{r()!==d.REGIONS&&f(u)})}N(t,s),re()}var D4=ie('<path class="cell-marker" fill="none"></path>'),R4=ie('<circle fill="none" opacity="0.9"></circle>');function k4(t,e){ne(e,!1);const n=D(),r=D();let o=F(e,"marker",8);const a=.3,s=.08;$(()=>Q(o()),()=>{x(n,Wv(o(),a))}),$(()=>Q(o()),()=>{x(r,gl(o().colorId,"black"))}),pe(),fe();var c=Ae(),u=ue(c);{var f=g=>{var v=D4();S(v,"stroke-width",s),Z(()=>{S(v,"d",p(n)),S(v,"stroke",p(r))}),N(g,v)},h=g=>{var v=R4();S(v,"r",a),S(v,"stroke-width",s),Z(()=>{Fn(v,`cell-marker color-${o().colorId??""}`),S(v,"cx",o().c),S(v,"cy",o().r),S(v,"stroke",p(r))}),N(g,v)};ge(u,g=>{o().marker==="X"?g(f):g(h,!1)})}N(t,c),re()}var G4=ie('<g class="cell-markers"></g>');function M4(t,e){let n=F(e,"markers",8);var r=G4();We(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,a)=>{k4(o,{get marker(){return p(a)}})}),H(r),N(t,r)}var $4=ie('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function F4(t,e){ne(e,!1);const n=D();let r=F(e,"draftLineMarker",8);const o=.2;function a(u){return u.map(h=>[new Re(h.p1.c,h.p1.r),new Re(h.p2.c,h.p2.r)]).flat()}function s(u){const f=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?gl(f,"black"):"darkred"}$(()=>Q(r()),()=>{x(n,Oi(a(r().draftLine)))}),pe(),fe();var c=$4();Z(()=>S(c,"stroke",s(r()))),S(c,"stroke-width",o),S(c,"opacity",.5),Z(()=>S(c,"d",p(n))),N(t,c),re()}var U4=ie('<path fill="none" opacity="0.9"></path>');function H4(t,e){ne(e,!1);const n=D(),r=D();let o=F(e,"marker",8);const a=.08,s=.04;$(()=>Q(o()),()=>{x(n,Wv(o(),a))}),$(()=>Q(o()),()=>{x(r,gl(o().colorId,"black"))}),pe(),fe();var c=U4();S(c,"stroke-width",s),Z(()=>{S(c,"d",p(n)),Fn(c,`edge-marker color-${o().colorId??""}`),S(c,"stroke",p(r))}),N(t,c),re()}var P4=ie('<g class="edge-markers"></g>');function B4(t,e){let n=F(e,"markers",8);var r=P4();We(r,5,n,o=>`${o.r}, ${o.c}`,(o,a)=>{H4(o,{get marker(){return p(a)}})}),H(r),N(t,r)}var W4=ie('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),z4=ie('<g class="line-markers svelte-yha19m"></g>');function Y4(t,e){ne(e,!1);let n=F(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function a(c){return gl(c,"black")}fe();var s=z4();We(s,5,n,c=>o(c),(c,u)=>{var f=W4();S(f,"stroke-width",r),Z(()=>S(f,"stroke",a(p(u).colorId))),Z(()=>{S(f,"x1",p(u).p1.c),S(f,"y1",p(u).p1.r),S(f,"x2",p(u).p2.c),S(f,"y2",p(u).p2.r),Fn(f,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),N(c,f)}),H(s),N(t,s),re()}var j4=ie('<g class="pen-tool"><!><!><!><!></g>');function V4(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Ns,"$penToolStore",n),o=D();$(()=>r(),()=>{x(o,{draftLine:r().draftLine,mode:r().mode})}),pe(),fe();var a=j4(),s=q(a);Y4(s,{get lineMarkers(){return r().lineMarkers}});var c=U(s);B4(c,{get markers(){return r().edgeMarkers}});var u=U(c);M4(u,{get markers(){return r().cellMarkers}});var f=U(u);F4(f,{get draftLineMarker(){return p(o)}}),H(a),N(t,a),re()}var q4=ie('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function X4(t,e){ne(e,!1);const n=Xe(),r=()=>ve(bo,"$selectionStore",n),o=()=>ve(Wt,"$settingsStore",n),a=()=>ve(Ea,"$puzzleStore",n),s=()=>ve(Xt,"$toolStore",n),c=D(),u=D(),f=D(),h=D(),g={type:W.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(w,b){return w.length?v4(p(f),w):[]}$(()=>r(),()=>{x(c,r().cells)}),$(()=>o(),()=>{x(u,o().highlightCellsSeenBySelection)}),$(()=>a(),()=>{x(f,a())}),$(()=>s(),()=>{x(h,ed(s()))}),pe(),fe();var m=Ae(),E=ue(m);{var I=w=>{var b=q4(),L=q(b),T=Ze(()=>v(p(c),p(f)));ks(L,{get cells(){return p(T)},shape:g}),H(b),N(w,b)};ge(E,w=>{p(u)&&p(h)&&w(I)})}N(t,m),re()}function pl(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),o=[...sv(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&o.includes(a.value))),e}function K4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...pl(r))}return new Set(e)}function Z4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...pl(r))}return new Set(e)}function Q4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...pl(r))}return new Set(e)}function J4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function e6(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function t6(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function n6(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),a=pl(o);a.length&&e.push(...a)}return new Set(e)}function r6(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...K4(t),...Z4(t),...Q4(t)]);n=n.union(o)}return e.get(d.ANTIKNIGHT)&&(n=n.union(J4(t))),e.get(d.ANTIKING)&&(n=n.union(e6(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(t6(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(n6(t))),n}function o6(t,e){return[...new Set([...r6(t,e)])]}var i6=ie('<rect class="conflict svelte-4mp6ok"></rect>'),a6=ie('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function s6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(_n,"$gridStore",n),a=()=>ve(Tr,"$globalConstraintsStore",n),s=()=>ve(dn,"$cellsStore",n),c=D(),u=D(),f=D(),h=D();W.CAGE;function g(I){return o6(p(u),p(f)).map(L=>L.toCoords())}$(()=>r(),()=>{x(c,r().checkConflicts)}),$(()=>o(),()=>{x(u,o())}),$(()=>a(),()=>{x(f,a())}),$(()=>s(),()=>{x(h,s())}),pe(),fe();var v=Ae(),m=ue(v);{var E=I=>{var w=a6();We(w,5,()=>g(p(h)),gt,(b,L)=>{var T=i6();S(T,"width",1),S(T,"height",1),Z(()=>{S(T,"x",p(L).c),S(T,"y",p(L).r)}),N(b,T)}),H(w),N(I,w)};ge(m,I=>{p(c)&&I(E)})}N(t,v),re()}var l6=ie('<line class="diag svelte-ylotlw"></line>'),c6=ie('<line class="antidiag svelte-ylotlw"></line>'),u6=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),d6=ie('<line class="diag svelte-ylotlw"></line>'),_6=ie('<line class="antidiag svelte-ylotlw"></line>'),f6=ie('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),g6=ie('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function h6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Tr,"$globalConstraintsStore",n),o=()=>ve(_n,"$gridStore",n),a=D(),s=D(),c=D(),u=D(),f=D(),h=D(),g=D(),v=D(),m=D(),E=D(),I=D(),w=D(),b=0,L=0,T=0,k=0;$(()=>r(),()=>{x(a,r())}),$(()=>(p(a),d),()=>{x(s,!!p(a).get(d.POSITIVE_DIAGONAL))}),$(()=>(p(a),d),()=>{x(c,!!p(a).get(d.NEGATIVE_DIAGONAL))}),$(()=>(p(a),d),()=>{x(u,!!p(a).get(d.NEGATIVE_ANTIDIAGONAL))}),$(()=>(p(a),d),()=>{x(f,!!p(a).get(d.POSITIVE_ANTIDIAGONAL))}),$(()=>(p(a),d),()=>{x(h,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),$(()=>(p(a),d),()=>{x(g,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),$(()=>o(),()=>{x(v,o())}),$(()=>p(v),()=>{x(m,p(v).nCols)}),$(()=>p(v),()=>{x(E,p(v).nRows)}),$(()=>p(v),()=>{x(I,p(v).nCols)}),$(()=>p(v),()=>{x(w,p(v).nRows)}),pe(),fe();var G=g6(),P=q(G);{var z=Se=>{var we=l6();S(we,"x1",b),S(we,"y1",L),Z(()=>{S(we,"x2",p(I)),S(we,"y2",p(w))}),N(Se,we)};ge(P,Se=>{p(c)&&Se(z)})}var X=U(P);{var te=Se=>{var we=c6();S(we,"x1",b),S(we,"y1",L),Z(()=>{S(we,"x2",p(I)),S(we,"y2",p(w))}),N(Se,we)};ge(X,Se=>{p(u)&&Se(te)})}var de=U(X);{var ee=Se=>{var we=u6();S(we,"x1",b),S(we,"y1",L),Z(()=>{S(we,"x2",p(I)),S(we,"y2",p(w))}),N(Se,we)};ge(de,Se=>{p(h)&&Se(ee)})}var le=U(de);{var Ie=Se=>{var we=d6();S(we,"x2",k),S(we,"y1",T),Z(()=>{S(we,"x1",p(m)),S(we,"y2",p(E))}),N(Se,we)};ge(le,Se=>{p(s)&&Se(Ie)})}var me=U(le);{var Ee=Se=>{var we=_6();S(we,"x2",k),S(we,"y1",T),Z(()=>{S(we,"x1",p(m)),S(we,"y2",p(E))}),N(Se,we)};ge(me,Se=>{p(f)&&Se(Ee)})}var xe=U(me);{var st=Se=>{var we=f6();S(we,"x2",k),S(we,"y1",T),Z(()=>{S(we,"x1",p(m)),S(we,"y2",p(E))}),N(Se,we)};ge(xe,Se=>{p(g)&&Se(st)})}H(G),N(t,G),re()}var v6=ie('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function p6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(dn,"$cellsStore",n),o=()=>ve(pv,"$showFogStore",n),a=()=>ve(Xs,"$solutionStore",n),s=()=>ve(_n,"$gridStore",n),c=D(),u=D(),f=D(),h=D(),g=D(),v=D();let m=F(e,"boundingBox",8),E=F(e,"gridShape",8);function I(Ie){const me=Ie.filter(we=>we.fog);if(!p(g))return me.map(_t=>_t.toCoords());const Ee=Ie.filter(we=>we.value===p(g)[we.r][we.c]);let xe=new Set;for(const we of Ee){const _t=p(v).getNeighboorCells(we);xe=new Set([..._t,we])}return[...new Set(me).difference(xe)].map(we=>we.toCoords())}$(()=>r(),()=>{x(c,r())}),$(()=>p(c),()=>{x(u,I(p(c)))}),$(()=>p(u),()=>{x(f,ai(p(u),0))}),$(()=>o(),()=>{x(h,o())}),$(()=>a(),()=>{x(g,a())}),$(()=>s(),()=>{x(v,s())}),pe(),fe();var w=v6(),b=q(w),L=q(b);H(b);var T=U(b),k=q(T);S(k,"stroke-width",.5);var G=U(k);S(G,"stroke-width",.375);var P=U(G);S(P,"stroke-width",.25);var z=U(P);S(z,"stroke-width",.125),Co(),H(T);var X=U(T),te=q(X);Co(),H(X);var de=U(X),ee=q(de),le=U(ee);S(le,"x",0),S(le,"y",0),H(de),H(w),Z(()=>{S(L,"d",p(f)),yt(T,"disabled",!p(h)),yt(X,"disabled",!p(h)),S(te,"x",m().x),S(te,"y",m().y),S(te,"width",m().width),S(te,"height",m().height),S(ee,"x",m().x),S(ee,"y",m().y),S(ee,"width",m().width),S(ee,"height",m().height),S(le,"width",E().nCols),S(le,"height",E().nRows)}),N(t,w),re()}var m6=ie('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function E6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(pv,"$showFogStore",n),o=D();let a=F(e,"gridShape",8);$(()=>r(),()=>{x(o,r())}),pe(),fe();var s=m6(),c=q(s);S(c,"x",0),S(c,"y",0),H(s),Z(()=>{S(s,"visibility",p(o)?"visible":"hidden"),S(c,"width",a().nCols),S(c,"height",a().nRows)}),N(t,s),re()}var C6=ie('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function I6(t,e){ne(e,!1);const n=D();let r=F(e,"r",8),o=F(e,"c",8),a=F(e,"val",8);const s=.8,c=400;$(()=>(Q(r()),Q(o())),()=>{x(n,Zn({r:r(),c:o()}))}),pe(),fe();var u=Ae(),f=ue(u);{var h=g=>{var v=C6();S(v,"font-size",s),S(v,"font-weight",c);var m=q(v,!0);H(v),Z(()=>{S(v,"x",p(n).x),S(v,"y",p(n).y),nt(m,a())}),N(g,v)};ge(f,g=>{a()!==null&&g(h)})}N(t,u),re()}var b6=ie('<g class="solution-layer"></g>');function w6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Xs,"$solutionStore",n),o=()=>ve(Wt,"$settingsStore",n),a=()=>ve(qs,"$gameModeStore",n),s=D(),c=D(),u=D();$(()=>r(),()=>{x(s,r())}),$(()=>o(),()=>{x(c,o().showSolution)}),$(()=>a(),()=>{x(u,a())}),pe(),fe();var f=Ae(),h=ue(f);{var g=v=>{var m=b6();We(m,5,()=>p(s),gt,(E,I,w)=>{var b=Ae(),L=ue(b);We(L,1,()=>p(I),gt,(T,k,G)=>{I6(T,{r:w,c:G,get val(){return p(k)}})}),N(E,b)}),H(m),N(v,m)};ge(h,v=>{p(s)&&p(c)&&p(u)===si.SETTING&&v(g)})}N(t,f),re()}var O6=ie('<text text-anchor="middle" dominant-baseline="central"> </text>'),y6=ie('<g class="center-corner-or-edge-tool"><!><!></g>');function L6(t,e){ne(e,!1);const n=D(),r=D(),o=D(),a=D(),s=D(),c=D();let u=F(e,"centerCornerOrEdgeTool",8);const f=u().cell,h=wn(u().toolId,$t)??$h;function g(b,L){return L===W.TEXT_ONLY?b.value?b.value:"-":b.value??""}$(()=>Q(u()),()=>{x(n,u().shape??h)}),$(()=>{},()=>{x(r,f)}),$(()=>(p(n),W),()=>{var b;x(o,((b=p(n))==null?void 0:b.type)||W.CIRCLE)}),$(()=>p(n),()=>{var b;x(a,((b=p(n))==null?void 0:b.fontSize)??.2)}),$(()=>p(n),()=>{var b;x(s,((b=p(n))==null?void 0:b.fontColor)??"black")}),$(()=>p(r),()=>{x(c,p(r).r%1===.5&&p(r).c%1===.5)}),pe(),fe();var v=y6(),m=q(v);vl(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var E=U(m);{var I=b=>{var L=Ze(()=>g(u(),p(o))),T=Ze(()=>Math.floor(p(r).c)),k=Ze(()=>Math.floor(p(r).r));da(b,{get value(){return p(L)},get x(){return p(T)},get y(){return p(k)},position:"TL",get fontColor(){return p(s)}})},w=b=>{var L=O6(),T=q(L,!0);Z(()=>nt(T,g(u(),p(o)))),H(L),Z(()=>{S(L,"x",p(r).c),S(L,"y",p(r).r),S(L,"font-size",p(a)),S(L,"fill",p(s))}),N(b,L)};ge(E,b=>{p(c)?b(I):b(w,!1)})}H(v),N(t,v),re()}var A6=ie("<g></g>"),S6=ie('<g class="edge-tools-layer" mask="url(#fog-mask-fog)"></g>');function x6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(s8,"$centerCornerOrEdgeToolsStore",n),o=D();$(()=>r(),()=>{x(o,r())}),pe();var a=S6();We(a,5,()=>p(o),gt,(s,c)=>{let u=()=>p(c).toolId,f=()=>p(c).element;var h=A6();We(h,5,()=>Object.entries(f()),g=>g[0],(g,v)=>{L6(g,{get centerCornerOrEdgeTool(){return p(v)[1]}})}),H(h),Z(()=>Fn(h,`element-group ${u()}`)),N(s,h)}),H(a),N(t,a),re()}var N6=ie('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function T6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(_n,"$gridStore",n),o=()=>ve(rt,"$localConstraintsStore",n),a=()=>ve(Xt,"$toolStore",n),s=()=>ve(dn,"$cellsStore",n),c=D(),u=D(),f=D();let h=F(e,"svgRef",12,null);function g(){for(const[Lt,Ln]of o().entries()){if(!la(Lt))continue;if(Object.entries(Ln).some(([pr,Jn])=>!qt(Jn.cell,p(u))))return!0}return!1}function v(Lt,Ln){const Zt=g(),pr=la(Ln),Jn=Zt||pr?1:.2,mr=-Jn,ar=-Jn,yi=Lt.nCols+2*Jn,Mr=Lt.nRows+2*Jn;return{x:mr,y:ar,width:yi,height:Mr}}function m(Lt){return`${Lt.x} ${Lt.y} ${Lt.width} ${Lt.height}`}$(()=>r(),()=>{x(c,r())}),$(()=>p(c),()=>{x(u,{nRows:p(c).nRows,nCols:p(c).nCols})}),$(()=>(p(u),a()),()=>{x(f,v(p(u),a()))}),pe(),fe();var E=N6();Z(()=>S(E,"viewBox",m(p(f))));var I=q(E);p6(I,{get boundingBox(){return p(f)},get gridShape(){return p(u)}});var w=U(I);E6(w,{get gridShape(){return p(u)}});var b=U(w);g$(b,{get grid(){return r()}});var L=U(b);Q8(L,{get gridShape(){return p(u)}});var T=U(L);We(T,5,s,gt,(Lt,Ln)=>{T4(Lt,{get cell(){return p(Ln)}})}),H(T);var k=U(T);X4(k,{});var G=U(k);X$(G,{});var P=U(G);_$(P,{});var z=U(P);q8(z,{});var X=U(z);G8(X,{});var te=U(X);t$(te,{});var de=U(te);h6(de,{});var ee=U(de);o$(ee,{});var le=U(ee);M$(le,{get boundingBox(){return p(f)}});var Ie=U(le);S8(Ie,{});var me=U(Ie);a$(me,{get boundingBox(){return p(f)}});var Ee=U(me);K8(Ee,{});var xe=U(Ee);n4(xe,{});var st=U(xe);N$(st,{});var Se=U(st);x6(Se,{});var we=U(Se);V4(we,{});var _t=U(we);We(_t,5,s,gt,(Lt,Ln)=>{S4(Lt,{get cell(){return p(Ln)}})}),H(_t);var ut=U(_t);w6(ut,{});var Un=U(ut);s6(Un,{}),H(E),Io(E,Lt=>h(Lt),()=>h()),N(t,E),re()}function D6(t){return SL(t)?(Uw(),!0):!1}function R6(t){return xL(t)?(_v(),!0):!1}function k6(t){return NL(t)?(fv(),!0):!1}function nu(t){(D6(t)||R6(t)||k6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var G6=oe('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function M6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Pv,"$InputHandlerStore",n),o=()=>ve(ri,"$svgRefStore",n),a=D();let s=D(null);function c(v){return m=>{v&&p(a)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===p(s))&&v(m)}}$(()=>r(),()=>{x(a,r())}),pe();var u=G6();Te("keydown",Hc,function(...v){nu==null||nu.apply(this,v)});var f=mg(()=>{var v;return c((v=p(a))==null?void 0:v.keyDown)});Te("keydown",Hc,function(...v){var m;(m=p(f))==null||m.apply(this,v)});var h=mg(()=>{var v;return c((v=p(a))==null?void 0:v.keyUp)});Te("keyup",Hc,function(...v){var m;(m=p(h))==null||m.apply(this,v)});var g=q(u);T6(g,{get svgRef(){return dh(),o()},set svgRef(v){fa(ri,v)},$$legacy:!0}),H(u),Io(u,v=>x(s,v),()=>p(s)),Te("pointerdown",u,zc(Kn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerDown(v)})),!0),Te("pointermove",u,zc(Kn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerMove(v)})),!0),Te("pointerup",u,zc(Kn(v=>{var m;v.currentTarget.focus(),(m=p(a))==null||m.pointerUp(v)})),!0),N(t,u),re()}var $6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function F6(t){var e=$6();N(t,e)}var U6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function H6(t){var e=U6();N(t,e)}var P6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function B6(t){var e=P6();N(t,e)}var W6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function z6(t){var e=W6();N(t,e)}var Y6=oe('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function j6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(ci,"$commandHistoryStore",n),o=()=>ve(pu,"$selectOnStore",n),a=D(),s=D();function c(){_v()}function u(){fv()}function f(){console.log("check")}function h(){fa(pu,!o())}$(()=>r(),()=>{x(a,r()._undoStack.length===0)}),$(()=>r(),()=>{x(s,r()._redoStack.length===0)}),pe(),fe();var g=Y6(),v=q(g),m=q(v);z6(m),H(v);var E=U(v,2),I=q(E);H6(I),H(E);var w=U(E,2);w.disabled=!0;var b=q(w);F6(b),H(w);var L=U(w,2),T=q(L);B6(T),H(L),H(g),Z(()=>{v.disabled=p(a),E.disabled=p(s),S(L,"aria-checked",o()),yt(L,"active",o())}),Te("click",v,c),Te("click",E,u),Te("click",w,f),Te("click",L,h),N(t,g),re()}var V6=oe('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),q6=oe('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),X6=oe('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),K6=oe('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function Z6(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Wt,"$settingsStore",n),o=()=>ve(Ts,"$penColorStore",n),a=()=>ve(Pv,"$InputHandlerStore",n),s=D(),c=D(),u=[];let f=F(e,"selectedTool",8);const h=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let v=D(!1);function m(z){return z?g:h}function E(z){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(z)}function I(z){const X=z.currentTarget;if(!X)return;const te=X.getAttribute("aria-checked");x(v,te!=="true")}$(()=>r(),()=>{x(s,r().penToolActive)}),$(()=>r(),()=>{x(c,r().letterToolActive)}),pe(),fe();var w=K6(),b=q(w);{var L=z=>{var X=Ae(),te=ue(X);We(te,1,()=>h,gt,(de,ee)=>{var le=V6(),Ie=q(le);Vt(Ie);var me;Co(2),H(le),Z(()=>{S(le,"data-value",p(ee)),yt(le,"active",o()===p(ee)),me!==(me=p(ee))&&(Ie.value=(Ie.__value=p(ee))==null?"":p(ee))}),Ps(u,[],Ie,()=>(p(ee),o()),Ee=>fa(Ts,Ee)),N(de,le)}),N(z,X)},T=z=>{var X=Ae(),te=ue(X);We(te,1,()=>m(p(v)),gt,(de,ee)=>{var le=q6(),Ie=q(le),me=q(Ie,!0);H(Ie),Co(2),H(le),Z(()=>{xw(le,p(ee)),nt(me,p(ee))}),Te("click",le,function(...Ee){var xe;(xe=a()&&a().padClick)==null||xe.apply(this,Ee)}),N(de,le)}),N(z,X)};ge(b,z=>{f()===d.PEN_TOOL&&p(s)?z(L):z(T,!1)})}var k=U(b,2);{var G=z=>{var X=X6();Z(()=>{S(X,"aria-checked",p(v)),yt(X,"letter-checked",p(v)),yt(X,"num-checked",!p(v))}),Te("click",X,I),N(z,X)};ge(k,z=>{p(c)&&E(f())&&z(G)})}var P=U(k,2);H(w),Z(()=>{yt(w,"digit",f()===d.DIGIT),yt(w,"center",f()===d.CENTER_PM),yt(w,"corner",f()===d.CORNER_PM),yt(w,"color",f()===d.HIGHLIGHTS),yt(w,"pen",f()===d.PEN_TOOL),yt(P,"letter-tool",p(c))}),Te("click",P,function(...z){var X;(X=a()&&a().padClick)==null||X.apply(this,z)}),N(t,w),re()}var Q6=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function J6(t){var e=Q6();N(t,e)}var eF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function tF(t){var e=eF();N(t,e)}var nF=oe('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function ji(t,e){ne(e,!1);const n=[];let r=F(e,"selectedTool",12),o=F(e,"value",8),a=F(e,"title",8,void 0);function s(){mu(o())}fe();var c=nF(),u=q(c);Vt(u);var f,h=U(u,2);dt(h,e,"default",{}),H(c),Z(()=>{S(c,"title",a()),yt(c,"active",o()===r()),f!==(f=o())&&(u.value=(u.__value=o())==null?"":o())}),Ps(n,[],u,()=>(o(),r()),r),Te("change",u,s),N(t,c),re()}var rF=oe('<span aria-hidden="true">1</span>'),oF=oe('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),iF=oe('<span aria-hidden="true" style="font-size: 50%">123</span>'),aF=oe('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),sF=oe('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),lF=oe('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function cF(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Wt,"$settingsStore",n);let o=F(e,"selectedTool",12);fe();var a=lF(),s=q(a);ji(s,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var E=rF();N(v,E)},$$slots:{default:!0},$$legacy:!0});var c=U(s,2);ji(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var E=oF();N(v,E)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);ji(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var E=iF();N(v,E)},$$slots:{default:!0},$$legacy:!0});var f=U(u,2);ji(f,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(v){o(v)},children:(v,m)=>{var E=aF(),I=q(E);J6(I),H(E),N(v,E)},$$slots:{default:!0},$$legacy:!0});var h=U(f,2);{var g=v=>{ji(v,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,E)=>{var I=sF(),w=q(I);tF(w),H(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(h,v=>{r().penToolActive&&v(g)})}H(a),N(t,a),re()}var uF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function dF(t){var e=uF();N(t,e)}var _F=oe('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function La(t,e){let n=F(e,"title",8,void 0),r=F(e,"clickCb",8,void 0);var o=_F(),a=q(o),s=q(a);dt(s,e,"default",{}),H(a),H(o),Z(()=>S(o,"title",n())),Te("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,o)}var fF=oe('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),gF=oe('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function hF(t,e){ne(e,!1);let n=F(e,"showModal",12,!1);function r(){n(!1)}function o(){vv(),Ds(),n(!1)}fe(),Gr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=gF(),u=U(q(c),2);al(u,{children:(f,h)=>{var g=fF(),v=ue(g),m=U(v,2);Te("click",v,o),Te("click",m,r),N(f,g)},$$slots:{default:!0}}),H(c),N(a,c)},$$slots:{default:!0},$$legacy:!0}),re()}var vF=oe("<!> <!>",1);function pF(t){let e=D(!1);function n(){x(e,!0)}var r=vF(),o=ue(r);La(o,{title:"Restart",clickCb:n,children:(s,c)=>{dF(s)},$$slots:{default:!0}});var a=U(o,2);hF(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var mF=oe('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Vi(t,e){let n=F(e,"title",8);var r=mF(),o=q(r),a=q(o,!0);H(o);var s=U(o,2);dt(s,e,"default",{}),H(r),Z(()=>nt(a,n())),N(t,r)}var EF=oe('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function cn(t,e){let n=F(e,"description",8);var r=EF(),o=q(r),a=q(o,!0);H(o);var s=U(o,2),c=q(s);dt(c,e,"default",{}),H(s),H(r),Z(()=>nt(a,n())),N(t,r)}var CF=oe('<div class="shortcut svelte-1cgt5u5"> </div>');function en(t,e){let n=F(e,"shortcut",8);var r=CF(),o=q(r,!0);H(r),Z(()=>nt(o,n())),N(t,r)}var IF=oe("<p></p>"),bF=oe("<!> <!> <!> <!>",1),wF=oe("<!> or <!>",1),OF=oe("<!> <!> <!> <!> <!> <!> <!> <!>",1),yF=oe("<!> <!>",1),LF=oe('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function AF(t,e){let n=F(e,"showModal",12,!1);Gr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var a=LF(),s=q(a);Vi(s,{title:"Setting Instructions",children:(g,v)=>{var m=IF();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",N(g,m)},$$slots:{default:!0}});var c=U(s,2);Vi(c,{title:"General",children:(g,v)=>{cn(g,{description:"Toggle Darkmode",children:(m,E)=>{en(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=U(c,2);Vi(u,{title:"Selection",children:(g,v)=>{var m=bF(),E=ue(m);cn(E,{description:"Select cells",children:(L,T)=>{en(L,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=U(E,2);cn(I,{description:"Add to current selection",children:(L,T)=>{en(L,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var w=U(I,2);cn(w,{description:"Remove from current selection",children:(L,T)=>{en(L,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var b=U(w,2);cn(b,{description:"Add or remove from current selection",children:(L,T)=>{en(L,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var f=U(u,2);Vi(f,{title:"Change Tool",children:(g,v)=>{var m=OF(),E=ue(m);cn(E,{description:"Cycle Tool",children:(P,z)=>{en(P,{shortcut:"Space"})},$$slots:{default:!0}});var I=U(E,2);cn(I,{description:"Change to Digit Tool",children:(P,z)=>{en(P,{shortcut:"Z"})},$$slots:{default:!0}});var w=U(I,2);cn(w,{description:"Change to Corner Pencilmark Tool",children:(P,z)=>{en(P,{shortcut:"X"})},$$slots:{default:!0}});var b=U(w,2);cn(b,{description:"Change to Center Pencilmark Tool",children:(P,z)=>{en(P,{shortcut:"C"})},$$slots:{default:!0}});var L=U(b,2);cn(L,{description:"Change to Highlights Tool",children:(P,z)=>{en(P,{shortcut:"V"})},$$slots:{default:!0}});var T=U(L,2);cn(T,{description:"Quickshift To Corner Pencilmark Tool",children:(P,z)=>{en(P,{shortcut:"Shift"})},$$slots:{default:!0}});var k=U(T,2);cn(k,{description:"Quickshift To Center Pencilmark Tool",children:(P,z)=>{en(P,{shortcut:"Ctrl"})},$$slots:{default:!0}});var G=U(k,2);cn(G,{description:"Quickshift To Highlights Tool",children:(P,z)=>{var X=wF(),te=ue(X);en(te,{shortcut:"Shift + Ctrl"});var de=U(te,2);en(de,{shortcut:"Alt"}),N(P,X)},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var h=U(f,2);Vi(h,{title:"Undo/Redo",children:(g,v)=>{var m=yF(),E=ue(m);cn(E,{description:"Undo",children:(w,b)=>{en(w,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=U(E,2);cn(I,{description:"Redo",children:(w,b)=>{en(w,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}}),H(a),N(r,a)},$$slots:{default:!0},$$legacy:!0})}var SF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function xF(t){var e=SF();N(t,e)}var NF=oe("<!> <!>",1);function TF(t){let e=D(!1);function n(){x(e,!0)}var r=NF(),o=ue(r);La(o,{title:"Info",clickCb:n,children:(s,c)=>{xF(s)},$$slots:{default:!0}});var a=U(o,2);AF(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var DF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function RF(t){var e=DF();N(t,e)}var kF=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function GF(t){var e=kF();N(t,e)}function MF(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function a(){n()?o():r(),x(e,!p(e))}La(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=Ae(),f=ue(u);{var h=v=>{GF(v)},g=v=>{RF(v)};ge(f,v=>{p(e)?v(h):v(g,!1)})}N(s,u)},$$slots:{default:!0}})}function jv(t,e){ne(e,!1);let n=F(e,"token",8),r=F(e,"renderers",8),o=F(e,"options",8);fe();var a=Ae(),s=ue(a);{var c=u=>{var f=Ae(),h=ue(f);uh(h,()=>r()[n().type],(g,v)=>{v(g,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,E)=>{var I=Ae(),w=ue(I);{var b=T=>{Ms(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},L=T=>{var k=Yb();Z(()=>nt(k,n().raw)),N(T,k)};ge(w,T=>{"tokens"in n()&&n().tokens?T(b):T(L,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,f)};ge(s,u=>{r()[n().type]&&u(c)})}N(t,a),re()}function Ms(t,e){let n=F(e,"tokens",8),r=F(e,"renderers",8),o=F(e,"options",8);var a=Ae(),s=ue(a);{var c=u=>{var f=Ae(),h=ue(f);We(h,1,n,gt,(g,v)=>{jv(g,{get token(){return p(v)},get renderers(){return r()},get options(){return o()}})}),N(u,f)};ge(s,u=>{n()&&u(c)})}N(t,a)}function Vv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function qv(t){return t.startsWith("/")||t.startsWith("#")}function $F(t,e){return e.slug(t).replace(/--+/g,"-")}function FF(t,e){ne(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const o=void 0;let a=D();$(()=>(Q(n()),Q(r())),()=>{x(a,$F(n().text,r().slugger))}),pe(),fe();var s=Ae(),c=ue(s);return gh(c,()=>`h${n().depth}`,!1,(u,f)=>{let h;Z(()=>h=ph(u,h,{id:p(a)},void 0,u.namespaceURI===xu,u.nodeName.includes("-")));var g=Ae(),v=ue(g);dt(v,e,"default",{}),N(f,g)}),N(t,s),Qe(e,"renderers",o),re({renderers:o})}var UF=oe("<blockquote><!></blockquote>");function HF(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=UF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}function PF(t,e){ne(e,!1);let n=F(e,"token",8),r=F(e,"options",8),o=F(e,"renderers",8),a=D();$(()=>Q(n()),()=>{x(a,n().ordered?"ol":"ul")}),pe(),fe();var s=Ae(),c=ue(s);gh(c,()=>p(a),!1,(u,f)=>{let h;Z(()=>h=ph(u,h,{start:n().start||1},void 0,u.namespaceURI===xu,u.nodeName.includes("-")));var g=Ae(),v=ue(g);We(v,1,()=>n().items,gt,(m,E)=>{var I=Ze(()=>({...p(E)}));jv(m,{get token(){return p(I)},get options(){return r()},get renderers(){return o()}})}),N(f,g)}),N(t,s),re()}var BF=oe("<li><!></li>");function WF(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=BF(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var zF=oe("<br>");function YF(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=zF();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var jF=oe("<pre><code> </code></pre>");function VF(t,e){ne(e,!1);let n=F(e,"token",8);const r=void 0,o=void 0;fe();var a=jF(),s=q(a),c=q(s,!0);return H(s),H(a),Z(()=>{Tw(s,`lang-${n().lang}`),nt(c,n().text)}),N(t,a),Qe(e,"options",r),Qe(e,"renderers",o),re({options:r,renderers:o})}var qF=oe("<code> </code>");function XF(t,e){ne(e,!1);let n=F(e,"token",8);const r=void 0,o=void 0;fe();var a=qF(),s=q(a,!0);return Z(()=>nt(s,n().raw.slice(1,n().raw.length-1))),H(a),N(t,a),Qe(e,"options",r),Qe(e,"renderers",o),re({options:r,renderers:o})}var KF=oe('<th scope="col"><!></th>'),ZF=oe("<td><!></td>"),QF=oe("<tr></tr>"),JF=oe("<table><thead><tr></tr></thead><tbody></tbody></table>");function eU(t,e){ne(e,!1);let n=F(e,"token",8),r=F(e,"options",8),o=F(e,"renderers",8);fe();var a=JF(),s=q(a),c=q(s);We(c,5,()=>n().header,gt,(f,h)=>{var g=KF(),v=q(g);Ms(v,{get tokens(){return p(h).tokens},get options(){return r()},get renderers(){return o()}}),H(g),N(f,g)}),H(c),H(s);var u=U(s);We(u,5,()=>n().rows,gt,(f,h)=>{var g=QF();We(g,5,()=>p(h),gt,(v,m)=>{var E=ZF(),I=q(E);Ms(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return o()}}),H(E),N(v,E)}),H(g),N(f,g)}),H(u),H(a),N(t,a),re()}function tU(t,e){ne(e,!1);let n=F(e,"token",8);const r=void 0,o=void 0;fe();var a=Ae(),s=ue(a);return Lw(s,()=>n().text),N(t,a),Qe(e,"options",r),Qe(e,"renderers",o),re({options:r,renderers:o})}var nU=oe("<p><!></p>");function rU(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=nU(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var oU=oe("<a><!></a>");function iU(t,e){ne(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const o=void 0;fe();var a=oU();Z(()=>S(a,"href",qv(n().href)?Vv(r().baseUrl,n().href):n().href));var s=q(a);return dt(s,e,"default",{}),H(a),Z(()=>S(a,"title",n().title)),N(t,a),Qe(e,"renderers",o),re({renderers:o})}function aU(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=Ae(),s=ue(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var sU=oe("<dfn><!></dfn>");function lU(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=sU(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var cU=oe("<del><!></del>");function uU(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=cU(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var dU=oe("<em><!></em>");function _U(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=dU(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var fU=oe("<hr>");function gU(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=fU();return N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var hU=oe("<strong><!></strong>");function vU(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=hU(),s=q(a);return dt(s,e,"default",{}),H(a),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}var pU=oe('<img class="markdown-image svelte-z38cge">');function mU(t,e){ne(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const o=void 0;fe();var a=pU();return Z(()=>S(a,"src",qv(n().href)?Vv(r().baseUrl,n().href):n().href)),Z(()=>{S(a,"title",n().title),S(a,"alt",n().text)}),N(t,a),Qe(e,"renderers",o),re({renderers:o})}function Zg(t,e){ne(e,!1);const n=void 0,r=void 0,o=void 0;var a=Ae(),s=ue(a);return dt(s,e,"default",{}),N(t,a),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",o),re({token:n,options:r,renderers:o})}const EU=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,CU=Object.hasOwnProperty;class IU{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=bU(e,n===!0);const a=o;for(;CU.call(r.occurrences,o);)r.occurrences[a]++,o=a+"-"+r.occurrences[a];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function bU(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(EU,"").replace(/ /g,"-"))}function Td(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ro=Td();function Xv(t){Ro=t}const Kv=/[&<>"']/,wU=new RegExp(Kv.source,"g"),Zv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,OU=new RegExp(Zv.source,"g"),yU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qg=t=>yU[t];function kn(t,e){if(e){if(Kv.test(t))return t.replace(wU,Qg)}else if(Zv.test(t))return t.replace(OU,Qg);return t}const LU=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(LU,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}function Jg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const aa={exec:()=>null};function eh(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,f=s;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function qi(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function AU(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function th(t,e,n,r){const o=e.href,a=e.title?kn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:a,text:kn(s)}}function SU(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[s]=a;return s.length>=r.length?o.slice(r.length):o}).join(`
`)}class $s{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Ro}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:qi(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=SU(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=qi(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:qi(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=qi(n[0],`
`).split(`
`),o="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let f;for(f=0;f<r.length;f++)if(/^ {0,3}>/.test(r[f]))u.push(r[f]),c=!0;else if(!c)u.push(r[f]);else break;r=r.slice(f);const h=u.join(`
`),g=h.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${h}`:h,a=a?`${a}
${g}`:g;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,s,!0),this.lexer.state.top=v,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),w=this.blockquote(I);s[s.length-1]=w,o=o.substring(0,o.length-E.raw.length)+w.raw,a=a.substring(0,a.length-E.text.length)+w.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),w=this.list(I);s[s.length-1]=w,o=o.substring(0,o.length-m.raw.length)+w.raw,a=a.substring(0,a.length-E.raw.length)+w.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,a={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,f="",h="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;f=n[0],e=e.substring(f.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),v=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,h=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,h=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(f+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),L=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const P=e.split(`
`,1)[0];let z;if(v=P,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),z=v):z=v.replace(/\t/g,"    "),T.test(v)||k.test(v)||G.test(v)||b.test(v)||L.test(v))break;if(z.search(/[^ ]/)>=E||!v.trim())h+=`
`+z.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(g)||k.test(g)||L.test(g))break;h+=`
`+v}!m&&!v.trim()&&(m=!0),f+=P+`
`,e=e.substring(P.length+1),g=z.slice(E)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(f)&&(c=!0));let I=null,w;this.options.gfm&&(I=/^\[[ xX]\] /.exec(h),I&&(w=I[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:f,task:!!I,checked:w,loose:!1,text:h,tokens:[]}),a.raw+=f}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const f=a.items[u].tokens.filter(g=>g.type==="space"),h=f.length>0&&f.some(g=>/\n.*\n/.test(g.raw));a.loose=h}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=eh(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(eh(c,s.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[f]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:kn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=qi(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=AU(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);s&&(o=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),th(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),a=n[o.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return th(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...o[0]].length-1;let c,u,f=s,h=0;const g=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+s);(o=g.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){f+=u;continue}else if((o[5]||o[6])&&s%3&&!((s+u)%3)){h+=u;continue}if(f-=u,f>0)continue;u=Math.min(u,u+f+h);const v=[...o[0]][0].length,m=e.slice(0,s+o.index+v+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return o&&a&&(r=r.substring(1,r.length-1)),r=kn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=kn(n[1]),o="mailto:"+r):(r=kn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,a;if(n[2]==="@")o=kn(n[0]),a="mailto:"+o;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);o=kn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=kn(n[0]),{type:"text",raw:n[0],text:r}}}}const xU=/^(?:[ \t]*(?:\n|$))+/,NU=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,TU=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Aa=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,DU=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Qv=/(?:[*+-]|\d{1,9}[.)])/,Jv=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Qv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Dd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,RU=/^[^\n]+/,Rd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,kU=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),GU=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Qv).getRegex(),ml="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",kd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,MU=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",kd).replace("tag",ml).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ep=Ct(Dd).replace("hr",Aa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),$U=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ep).getRegex(),Gd={blockquote:$U,code:NU,def:kU,fences:TU,heading:DU,hr:Aa,html:MU,lheading:Jv,list:GU,newline:xU,paragraph:ep,table:aa,text:RU},nh=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Aa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),FU={...Gd,table:nh,paragraph:Ct(Dd).replace("hr",Aa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex()},UU={...Gd,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",kd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(Dd).replace("hr",Aa).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Jv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},tp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,HU=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,np=/^( {2,}|\\)\n(?!\s*$)/,PU=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Sa="\\p{P}\\p{S}",BU=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Sa).getRegex(),WU=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,zU=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Sa).getRegex(),YU=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Sa).getRegex(),jU=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Sa).getRegex(),VU=Ct(/\\([punct])/,"gu").replace(/punct/g,Sa).getRegex(),qU=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),XU=Ct(kd).replace("(?:-->|$)","-->").getRegex(),KU=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",XU).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ZU=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Fs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),rp=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",Fs).replace("ref",Rd).getRegex(),op=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rd).getRegex(),QU=Ct("reflink|nolink(?!\\()","g").replace("reflink",rp).replace("nolink",op).getRegex(),Md={_backpedal:aa,anyPunctuation:VU,autolink:qU,blockSkip:WU,br:np,code:HU,del:aa,emStrongLDelim:zU,emStrongRDelimAst:YU,emStrongRDelimUnd:jU,escape:tp,link:ZU,nolink:op,punctuation:BU,reflink:rp,reflinkSearch:QU,tag:KU,text:PU,url:aa},JU={...Md,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",Fs).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Fs).getRegex()},bu={...Md,escape:Ct(tp).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},eH={...bu,br:Ct(np).replace("{2,}","*").getRegex(),text:Ct(bu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ws={normal:Gd,gfm:FU,pedantic:UU},Xi={normal:Md,gfm:bu,breaks:eH,pedantic:JU};class Mn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ro,this.options.tokenizer=this.options.tokenizer||new $s,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:ws.normal,inline:Xi.normal};this.options.pedantic?(n.block=ws.pedantic,n.inline=Xi.pedantic):this.options.gfm&&(n.block=ws.gfm,this.options.breaks?n.inline=Xi.breaks:n.inline=Xi.gfm),this.tokenizer.rules=n}static get rules(){return{block:ws,inline:Xi}}static lex(e,n){return new Mn(n).lex(e)}static lexInline(e,n){return new Mn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(h=>{f=h.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o),r=s.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,a,s=e,c,u,f;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)h.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(f=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(r=h.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,f)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},g),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(a=e.substring(0,h+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(f=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}}class Us{constructor(e){he(this,"options");he(this,"parser");this.options=e||Ro}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const o=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+kn(o)+'">'+(r?a:kn(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:kn(a,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),a=Jg(e);if(a===null)return o;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+o+"</a>",s}image({href:e,title:n,text:r}){const o=Jg(e);if(o===null)return r;e=o;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class $d{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Xn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Ro,this.options.renderer=this.options.renderer||new Us,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $d}static parse(e,n){return new Xn(n).parse(e)}static parseInline(e,n){return new Xn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const a=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class sa{constructor(e){he(this,"options");he(this,"block");this.options=e||Ro}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Mn.lex:Mn.lexInline}provideParser(){return this.block?Xn.parse:Xn.parseInline}}he(sa,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class tH{constructor(...e){he(this,"defaults",Td());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Xn);he(this,"Renderer",Us);he(this,"TextRenderer",$d);he(this,"Lexer",Mn);he(this,"Tokenizer",$s);he(this,"Hooks",sa);this.use(...e)}walkTokens(e,n){var o,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const f of u)r=r.concat(this.walkTokens(f.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const f=c[u].flat(1/0);r=r.concat(this.walkTokens(f,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),o.extensions=n),r.renderer){const a=this.defaults.renderer||new Us(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],f=a[c];a[c]=(...h)=>{let g=u.apply(a,h);return g===!1&&(g=f.apply(a,h)),g||""}}o.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new $s(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],f=a[c];a[c]=(...h)=>{let g=u.apply(a,h);return g===!1&&(g=f.apply(a,h)),g}}o.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new sa;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],f=a[c];sa.passThroughHooks.has(s)?a[c]=h=>{if(this.defaults.async)return Promise.resolve(u.call(a,h)).then(v=>f.call(a,v));const g=u.call(a,h);return f.call(a,g)}:a[c]=(...h)=>{let g=u.apply(a,h);return g===!1&&(g=f.apply(a,h)),g}}o.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Mn.lex(e,n??this.defaults)}parser(e,n){return Xn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const a={...o},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Mn.lex:Mn.lexInline,f=s.hooks?s.hooks.provideParser():e?Xn.parse:Xn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(h=>u(h,s)).then(h=>s.hooks?s.hooks.processAllTokens(h):h).then(h=>s.walkTokens?Promise.all(this.walkTokens(h,s.walkTokens)).then(()=>h):h).then(h=>f(h,s)).then(h=>s.hooks?s.hooks.postprocess(h):h).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let h=u(r,s);s.hooks&&(h=s.hooks.processAllTokens(h)),s.walkTokens&&this.walkTokens(h,s.walkTokens);let g=f(h,s);return s.hooks&&(g=s.hooks.postprocess(g)),g}catch(h){return c(h)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+kn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const yo=new tH;function Et(t,e){return yo.parse(t,e)}Et.options=Et.setOptions=function(t){return yo.setOptions(t),Et.defaults=yo.defaults,Xv(Et.defaults),Et};Et.getDefaults=Td;Et.defaults=Ro;Et.use=function(...t){return yo.use(...t),Et.defaults=yo.defaults,Xv(Et.defaults),Et};Et.walkTokens=function(t,e){return yo.walkTokens(t,e)};Et.parseInline=yo.parseInline;Et.Parser=Xn;Et.parser=Xn.parse;Et.Renderer=Us;Et.TextRenderer=$d;Et.Lexer=Mn;Et.lexer=Mn.lex;Et.Tokenizer=$s;Et.Hooks=sa;Et.parse=Et;Et.options;Et.setOptions;Et.use;Et.walkTokens;Et.parseInline;Xn.parse;Mn.lex;function nH(t){return new Mn().lex(t)}const rH=()=>({heading:FF,blockquote:HF,list:PF,list_item:WF,br:YF,code:VF,codespan:XF,table:eU,html:tU,paragraph:rU,link:iU,text:aU,def:lU,del:uU,em:_U,hr:gU,strong:vU,image:mU,space:Zg,escape:Zg}),oH=()=>({baseUrl:"/",slugger:new IU});function iH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},_h(()=>{console.warn=t})}function ip(t,e){ne(e,!1),iH();let n=F(e,"source",8),r=F(e,"options",24,()=>({})),o=F(e,"renderers",24,()=>({})),a=D(),s=D(),c=D();$(()=>(Q(n()),Q(o()),Q(r())),()=>{x(a,nH(n())),x(s,{...rH(),...o()}),x(c,{...oH(),...r()})}),pe(),fe(),Ms(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),re()}var aH=oe('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),sH=oe('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),lH=oe('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function cH(t,e){ne(e,!1);const n=Xe(),r=()=>ve(Nr,"$puzzleMetaStore",n),o=D();let a=F(e,"showModal",12,!1);function s(u){return u?xs(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}$(()=>r(),()=>{x(o,r())}),pe(),fe(),Gr(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,f)=>{var h=lH(),g=q(h),v=q(g,!0);H(g);var m=U(g,2),E=q(m);Z(()=>nt(E,`by ${s(p(o).authors)??""}`)),H(m);var I=U(m,2),w=q(I),b=Ze(()=>c(p(o).ruleset));ip(w,{get source(){return p(b)}}),H(I);var L=U(I,2);{var T=P=>{var z=aH(),X=U(ue(z),2);Z(()=>S(X,"href",p(o).ctcUrl)),N(P,z)};ge(L,P=>{var z,X;(X=(z=p(o))==null?void 0:z.ctcUrl)!=null&&X.length&&P(T)})}var k=U(L,2);{var G=P=>{var z=sH(),X=U(ue(z),2);Z(()=>S(X,"href",p(o).ctcYoutubeUrl)),N(P,z)};ge(k,P=>{var z,X;(X=(z=p(o))==null?void 0:z.ctcYoutubeUrl)!=null&&X.length&&P(G)})}H(h),Z(()=>{var P;return nt(v,((P=p(o))==null?void 0:P.title)||"Puzzle")}),N(u,h)},$$slots:{default:!0},$$legacy:!0}),re()}var uH=ie('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function dH(t){var e=uH();N(t,e)}var _H=oe("<!> <!>",1);function fH(t){let e=D(!1);function n(){x(e,!0)}var r=_H(),o=ue(r);La(o,{title:"Rules",clickCb:n,children:(s,c)=>{dH(s)},$$slots:{default:!0}});var a=U(o,2);cH(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var gH=oe("<!> <!>",1);function hH(t){let e=D(!1);function n(){x(e,!0)}var r=gH(),o=ue(r);La(o,{title:"Settings",clickCb:n,children:(s,c)=>{Sv(s)},$$slots:{default:!0}});var a=U(o,2);xv(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var vH=oe('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function pH(t){var e=vH(),n=q(e);hH(n);var r=U(n,2);fH(r);var o=U(r,2);MF(o);var a=U(o,2);TF(a);var s=U(a,2);pF(s),H(e),N(t,e)}var mH=oe('<div class="entry-panel-wrapper svelte-1dr0lb4"><div class="puzzle-info svelte-1dr0lb4"><div class="puzzle-header svelte-1dr0lb4"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1dr0lb4"><!></div></div>  <div class="entry-panel svelte-1dr0lb4"><!> <div class="entry-subpanel1 svelte-1dr0lb4"><!> <!></div> <!></div></div>');function EH(t,e){ne(e,!1);const n=Xe(),r=()=>ve(ri,"$svgRefStore",n),o=()=>ve(Nr,"$puzzleMetaStore",n),a=()=>ve(Xt,"$toolStore",n),s=D(),c=D();function u(){r().focus()}function f(ee){return ee?xs(ee," & ",", "):"Anonymous"}function h(ee){return ee&&ee.length?ee:"Normal sudoku rules apply."}$(()=>o(),()=>{x(s,o().title??"Sudoku")}),$(()=>o(),()=>{x(c,f(o().authors))}),pe(),fe();var g=mH(),v=q(g),m=q(v),E=q(m),I=q(E,!0);H(E);var w=U(E,2),b=q(w);H(w),H(m);var L=U(m,2),T=q(L),k=Ze(()=>h(o().ruleset));ip(T,{get source(){return p(k)}}),H(L),H(v);var G=U(v,2),P=q(G);pH(P);var z=U(P,2),X=q(z);Z6(X,{get selectedTool(){return a()}});var te=U(X,2);cF(te,{get selectedTool(){return dh(),a()},set selectedTool(ee){fa(Xt,ee)},$$legacy:!0}),H(z);var de=U(z,2);j6(de,{}),H(G),H(g),Z(()=>{nt(I,p(s)),nt(b,`by ${p(c)??""}`)}),Te("click",G,Kn(()=>{u()})),N(t,g),re()}var CH=oe('<div class="App svelte-aer8a2"><header></header> <main class="svelte-aer8a2"><div class="game-wrapper svelte-aer8a2"><div class="game svelte-aer8a2"><!> <!> <!></div></div></main> <footer class="svelte-aer8a2"><div class="footer-text svelte-aer8a2"></div></footer></div>');function NH(t,e){ne(e,!1);const n=Xe(),r=()=>ve($w,"$darkModeStore",n),o=()=>ve(qs,"$gameModeStore",n),a=D(),s=D();_h(async()=>{const I=window.location.href;try{await Vw({workerURL:`${I}minizinc-worker.js`,wasmURL:`${I}minizinc.wasm`,dataURL:`${I}minizinc.data`})}catch(w){const b="Failed to initialize MiniZinc: "+w.message;console.log(b)}}),$(()=>r(),()=>{x(a,r()?"dark":"light")}),$(()=>o(),()=>{x(s,o())}),pe(),fe();var c=CH(),u=U(q(c),2),f=q(u),h=q(f),g=q(h);{var v=I=>{r8(I)};ge(g,I=>{p(s)===si.SETTING&&I(v)})}var m=U(g,2);M6(m,{});var E=U(m,2);EH(E,{}),H(h),H(f),H(u),Co(2),H(c),Z(()=>S(c,"data-theme",p(a))),N(t,c),re()}export{NH as component,xH as universal};
