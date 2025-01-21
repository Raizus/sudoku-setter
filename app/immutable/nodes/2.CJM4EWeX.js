var ew=Object.defineProperty;var tw=(t,e,n)=>e in t?ew(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>tw(t,typeof e!="symbol"?e+"":e,n);import{b as su,e as nw,a as N,n as de,t as ne,c as Ae,d as rw}from"../chunks/disclose-version.c9nfQR10.js";import{i as fe}from"../chunks/legacy.BeICcgj8.js";import{A as ch,b as Au,h as bt,G as ao,F as so,O as uh,Y as dh,ad as iw,ae as Eg,U as ra,c as cr,au as xs,af as Su,a as Ys,ag as _h,C as lu,av as Ig,aw as ow,H as aw,ax as sw,d as xu,B as Nu,V as lw,L as cw,I as cu,ay as Du,az as Tu,a1 as uw,a7 as bg,aA as fh,aB as dw,aC as _w,R as gh,W as fw,S as gw,E as hw,aD as Ru,aE as vw,ac as pw,aF as mw,aG as Cw,ai as ku,M as hh,aH as Ew,j as Iw,a9 as bw,v as K,w as Y,p as le,x as P,t as ee,e as ce,l as p,as as Xe,aI as M,$ as x,aJ as Ee,aK as R,m as Q,f as ue,aL as ww,aM as Li,aN as zc,o as wg}from"../chunks/runtime.3UijFPFW.js";import{d as Ow,p as F,s as rt,i as ge,e as va,f as ve,b as Ai,c as vh,m as ph}from"../chunks/props.CJazo4uA.js";import{i as yw,a as Lw,b as Aw,c as Sw,d as xw,e as Nw,n as Dw,f as Tw,l as Gu,g as Me,s as et,r as Rw}from"../chunks/render.7_-GRy3G.js";import{d as Ti,w as Ut,g as ot}from"../chunks/index.HRmy8yV3.js";import{a as kw,o as mh}from"../chunks/index-client.CTQVjhPh.js";function St(t,e){return e}function Gw(t,e,n,r){for(var i=[],a=e.length,s=0;s<a;s++)ow(e[s].e,i,!0);var c=a>0&&i.length===0&&n!==null;if(c){var u=n.parentNode;aw(u),u.append(n),r.clear(),ei(t,e[0].prev,e[a-1].next)}sw(i,()=>{for(var _=0;_<a;_++){var v=e[_];c||(r.delete(v.k),ei(t,v.prev,v.next)),xu(v.e,!c)}})}function lt(t,e,n,r,i,a=null){var s=t,c={flags:e,items:new Map,first:null},u=(e&fh)!==0;if(u){var _=t;s=bt?ao(Nu(_)):_.appendChild(ch())}bt&&so();var v=null,g=!1;Au(()=>{var h=n(),m=uh(h)?h:h==null?[]:dh(h),C=m.length;if(g&&C===0)return;g=C===0;let I=!1;if(bt){var b=s.data===iw;b!==(C===0)&&(s=Eg(),ao(s),ra(!1),I=!0)}if(bt){for(var w=null,L,D=0;D<C;D++){if(cr.nodeType===8&&cr.data===lw){s=cr,I=!0,ra(!1);break}var k=m[D],G=r(k,D);L=Ch(cr,c,w,null,k,G,D,i,e),c.items.set(G,L),w=L}C>0&&ao(Eg())}if(!bt){var U=cw;Mw(m,c,s,i,e,(U.f&xs)!==0,r)}a!==null&&(C===0?v?Su(v):v=Ys(()=>a(s)):v!==null&&_h(v,()=>{v=null})),I&&ra(!0),n()}),bt&&(s=cr)}function Mw(t,e,n,r,i,a,s,c){var Ce,Te,at,Se;var u=(i&dw)!==0,_=(i&(Du|Tu))!==0,v=t.length,g=e.items,h=e.first,m=h,C,I=null,b,w=[],L=[],D,k,G,U;if(u)for(U=0;U<v;U+=1)D=t[U],k=s(D,U),G=g.get(k),G!==void 0&&((Ce=G.a)==null||Ce.measure(),(b??(b=new Set)).add(G));for(U=0;U<v;U+=1){if(D=t[U],k=s(D,U),G=g.get(k),G===void 0){var H=m?m.e.nodes_start:n;I=Ch(H,e,I,I===null?e.first:I.next,D,k,U,r,i),g.set(k,I),w=[],L=[],m=I.next;continue}if(_&&$w(G,D,U,i),G.e.f&xs&&(Su(G.e),u&&((Te=G.a)==null||Te.unfix(),(b??(b=new Set)).delete(G))),G!==m){if(C!==void 0&&C.has(G)){if(w.length<L.length){var X=L[0],J;I=X.prev;var re=w[0],Z=w[w.length-1];for(J=0;J<w.length;J+=1)Og(w[J],X,n);for(J=0;J<L.length;J+=1)C.delete(L[J]);ei(e,re.prev,Z.next),ei(e,I,re),ei(e,Z,X),m=X,I=Z,U-=1,w=[],L=[]}else C.delete(G),Og(G,m,n),ei(e,G.prev,G.next),ei(e,G,I===null?e.first:I.next),ei(e,I,G),I=G;continue}for(w=[],L=[];m!==null&&m.k!==k;)(a||!(m.e.f&xs))&&(C??(C=new Set)).add(m),L.push(m),m=m.next;if(m===null)continue;G=m}w.push(G),I=G,m=G.next}if(m!==null||C!==void 0){for(var se=C===void 0?[]:dh(C);m!==null;)(a||!(m.e.f&xs))&&se.push(m),m=m.next;var be=se.length;if(be>0){var me=i&fh&&v===0?n:null;if(u){for(U=0;U<be;U+=1)(at=se[U].a)==null||at.measure();for(U=0;U<be;U+=1)(Se=se[U].a)==null||Se.fix()}Gw(e,se,me,g)}}u&&cu(()=>{var we;if(b!==void 0)for(G of b)(we=G.a)==null||we.apply()}),lu.first=e.first&&e.first.e,lu.last=I&&I.e}function $w(t,e,n,r){r&Du&&Ig(t.v,e),r&Tu?Ig(t.i,n):t.i=n}function Ch(t,e,n,r,i,a,s,c,u,_){var v=(u&Du)!==0,g=(u&_w)===0,h=v?g?uw(i):bg(i):i,m=u&Tu?bg(s):s,C={i:m,v:h,k:a,a:null,e:null,prev:n,next:r};try{return C.e=Ys(()=>c(t,h,m),bt),C.e.prev=n&&n.e,C.e.next=r&&r.e,n===null?e.first=C:(n.next=C,n.e.next=C.e),r!==null&&(r.prev=C,r.e.prev=C.e),C}finally{}}function Og(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,a=t.e.nodes_start;a!==r;){var s=gh(a);i.before(a),a=s}}function ei(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Fw(t,e,n,r,i){var a=t,s="",c;Au(()=>{if(s===(s=e()??"")){bt&&so();return}c!==void 0&&(xu(c),c=void 0),s!==""&&(c=Ys(()=>{if(bt){cr.data;for(var u=so(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=gh(u);if(u===null)throw fw(),gw;su(cr,_),a=ao(u);return}var v=s+"",g=nw(v);su(Nu(g),g.lastChild),a.before(g)}))})}function ut(t,e,n,r,i){var c;bt&&so();var a=(c=e.$$slots)==null?void 0:c[n],s=!1;a===!0&&(a=e[n==="default"?"children":n],s=!0),a===void 0||a(t,s?()=>r:r)}function Eh(t,e,n,r,i,a){let s=bt;bt&&so();var c,u,_=null;bt&&cr.nodeType===1&&(_=cr,so());var v=bt?cr:t,g;Au(()=>{const h=e()||null;var m=h==="svg"?Ru:null;h!==c&&(g&&(h===null?_h(g,()=>{g=null,u=null}):h===u?Su(g):xu(g)),h&&h!==u&&(g=Ys(()=>{if(_=bt?_:m?document.createElementNS(m,h):document.createElement(h),su(_,_),r){bt&&yw(h)&&_.append(document.createComment(""));var C=bt?Nu(_):_.appendChild(ch());bt&&(C===null?ra(!1):ao(C)),r(_,C)}lu.nodes_end=_,v.before(_)})),c=h,c&&(u=c))},hw),s&&(ra(!0),ao(v))}function Ih(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Ih(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Uw(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Ih(t))&&(r&&(r+=" "),r+=e);return r}function bh(t){return typeof t=="object"?Uw(t):t??""}function Vt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;S(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;S(t,"checked",null),t.checked=i}}};t.__on_r=n,Cw(n),Lw()}}function Hw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function wh(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function Pw(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function S(t,e,n,r){var i=t.__attributes??(t.__attributes={});bt&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[vw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&yh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Oh(t,e,n,r,i=!1,a=!1,s=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=bh(n.class));var v=yh(t),g=t.__attributes??(t.__attributes={});for(const w in n){let L=n[w];if(u&&w==="value"&&L==null){t.value=t.__value="",c[w]=L;continue}var h=c[w];if(L!==h){c[w]=L;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const D={},k="$$"+w;let G=w.slice(2);var C=Tw(G);if(Aw(G)&&(G=G.slice(0,-7),D.capture=!0),!C&&h){if(L!=null)continue;t.removeEventListener(G,c[k],D),c[k]=null}if(L!=null)if(C)t[`__${G}`]=L,xw([G]);else{let U=function(H){c[w].call(this,H)};c[k]=Sw(G,t,U,D)}else C&&(t[`__${G}`]=void 0)}else if(w==="style"&&L!=null)t.style.cssText=L+"";else if(w==="autofocus")Nw(t,!!L);else if(w==="__value"||w==="value"&&L!=null)t.value=t[w]=t.__value=L;else if(w==="selected"&&u)Pw(t,L);else{var I=w;i||(I=Dw(I));var b=I==="defaultValue"||I==="defaultChecked";if(L==null&&!a&&!b)if(g[w]=null,I==="value"||I==="checked"){let D=t;if(I==="value"){let k=D.defaultValue;D.removeAttribute(I),D.defaultValue=k}else{let k=D.defaultChecked;D.removeAttribute(I),D.defaultChecked=k}}else t.removeAttribute(w);else b||v.includes(I)&&(a||typeof L!="string")?t[I]=L:typeof L!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||S(t,I,L))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var yg=new Map;function yh(t){var e=yg.get(t.nodeName);if(e)return e;yg.set(t.nodeName,e=[]);for(var n,r=t,i=Element.prototype;i!==r;){n=mw(r);for(var a in n)n[a].set&&e.push(a);r=pw(r)}return e}function ri(t,e,n){var r=t.__className,i=Lh(e);bt&&t.getAttribute("class")===i?t.__className=i:(r!==i||bt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Bw(t,e,n){var r=t.__className,i=Lh(e);bt&&t.className===i?t.__className=i:(r!==i||bt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Lh(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Vn(t,e,n=e){var r=Ew();Gu(t,"input",i=>{var a=i?t.defaultValue:t.value;if(a=jc(t)?Vc(a):a,n(a),r&&a!==(a=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=a??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||Iw(e)==null&&t.value)&&n(jc(t)?Vc(t.value):t.value),ku(()=>{var i=e();jc(t)&&i===Vc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Yc=new Set;function js(t,e,n,r,i=r){var a=n.getAttribute("type")==="checkbox",s=t;let c=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),Gu(n,"change",()=>{var _=n.__value;a&&(_=Lg(s,_,n.checked)),i(_)},()=>i(a?[]:null)),ku(()=>{var _=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}a?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Ow(n.__value,_)}),hh(()=>{var _=s.indexOf(n);_!==-1&&s.splice(_,1)}),Yc.has(s)||(Yc.add(s),cu(()=>{s.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),Yc.delete(s)})),cu(()=>{if(c){var _;if(a)_=Lg(s,_,n.checked);else{var v=s.find(g=>g.checked);_=v==null?void 0:v.__value}i(_)}})}function Lg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function jc(t){var e=t.type;return e==="number"||e==="range"}function Vc(t){return t===""?null:+t}function Ww(t,e,n=e){Gu(t,"change",()=>{n(t.files)}),ku(()=>{t.files=e()})}function qe(t,e,n){var r=bw(t,e);r&&r.set&&(t[e]=n,hh(()=>{t[e]=null}))}function zw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Xn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Kc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Yw(t,e){var a;var n=(a=t.$$events)==null?void 0:a[e.type],r=uh(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}const jw=!0,zH=Object.freeze(Object.defineProperty({__proto__:null,prerender:jw},Symbol.toStringTag,{value:"Module"}));function Vw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const Wt=Ut(Vw()),Kw=Ti(Wt,t=>t.darkMode);function Xw(t){Wt.update(e=>({...e,darkMode:t}))}function qw(){Wt.update(t=>({...t,darkMode:!t.darkMode}))}function Zw(t){Wt.update(e=>({...e,penToolActive:t}))}function Qw(t){Wt.update(e=>({...e,letterToolActive:t}))}function Jw(t){Wt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function eO(t){Wt.update(e=>({...e,checkConflicts:t}))}function tO(t){Wt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function nO(t){Wt.update(e=>({...e,hideFog:t}))}function rO(t){Wt.update(e=>({...e,showSolution:t}))}const Ag=encodeURIComponent("4.3.5");let lr={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Oi=[];let Xc;function ea(){if(!Xc){const e=`importScripts(${JSON.stringify(lr.workerURL)});`;Xc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Xc);t.postMessage({wasmURL:lr.wasmURL?lr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Ag}`,lr.workerURL).toString(),dataURL:lr.dataURL?lr.dataURL.toString():new URL(`./minizinc.data?version=${Ag}`,lr.workerURL).toString()}),Oi.push({worker:t,runCount:0})}function Ah(){for(;Oi.length<lr.numWorkers;)ea()}async function iO(t){if(lr={...lr,...t},Oi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Ah(),await Promise.race(Oi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Mu{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Mu;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Ah();const i=[];let a=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;a={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:c}=Oi.pop();return s.postMessage({jsonStream:!0,files:a,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["--model-check-only"],i.options),c=[];a.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":s<10?Oi.push({worker:a,runCount:s}):(a.terminate(),ea()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:a,runCount:s}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;a.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":s<10?Oi.push({worker:a,runCount:s}):(a.terminate(),ea()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const a=["-c","--fzn",i],{worker:s}=this._run(a,n.options,[i]);ea();let c={},u=!1,_=null;return s.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":s.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const h=m=>{if(m.code===0)v(m.outputFiles[i]);else{const C=_?{message:_.message,...m}:m;if(!g)throw C;g(C)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);ea();let a=null,s={},c=!1,u=null,_={},v="UNKNOWN";return i.onmessage=g=>{if(s[g.data.type])for(const h of s[g.data.type])h(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,s={};break;case"error":a||(a=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),s.exit)for(const g of s.exit)g({type:"exit",code:null});s={}}},on(g,h){s[g]?s[g].add(h):s[g]=new Set([h])},off(g,h){s[g]&&s[g].delete(h)},then(g,h){const m=C=>{if(C.code===0)g({status:v,solution:u,statistics:_});else{const I=a?{message:a.message,...C}:C;if(!h)throw I;h(I)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var go=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(go||{}),$u=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))($u||{}),Sh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Sh||{}),xh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(xh||{}),Nh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(Nh||{}),Dh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(Dh||{}),Vs=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t))(Vs||{}),Fu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Fu||{}),Uu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t))(Uu||{}),Hu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t))(Hu||{}),Pu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Pu||{}),Bu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Bu||{}),Wu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(Wu||{}),zu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(zu||{}),Yu=(t=>(t.CLONE_REGION="Clone Region",t))(Yu||{}),ju=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(ju||{}),Vu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Vu||{}),Ku=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Ku||{}),Xu=(t=>(t.MAZE_WALL="Maze Wall",t))(Xu||{}),qu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(qu||{}),Zu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Zu||{}),Th=(t=>(t.PEN_TOOL="Pen Tool",t))(Th||{});const Qu={...Sh,...xh,...Nh,...Dh},Rh={...Vs,...Fu,...Uu,...Hu,...Pu,...Bu,...Wu,...zu,...Yu,...ju,...Vu,...Ku,...Xu,...qu},d={...$u,...Qu,...Rh,...Zu,...Th};var T=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(T||{});function oO(t){return Object.values(Qu).includes(t)}function aO(t){return Object.values(Rh).includes(t)}function Ju(t){return Object.values(Fu).includes(t)||t===d.COSMETIC_CELL_ARROW}function ed(t){return Object.values(Uu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function sO(t){return Object.values(Vs).includes(t)||Ju(t)||ed(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function td(t){return Object.values(Hu).includes(t)||t===d.COSMETIC_EDGE}function kh(t){return Object.values(Pu).includes(t)||t===d.COSMETIC_CORNER}function nd(t){return Object.values(Bu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function rd(t){return Object.values(Wu).includes(t)||t===d.COSMETIC_ARROW}function id(t){return Object.values(zu).includes(t)||t===d.COSMETIC_CAGE}function Gh(t){return Object.values(Ku).includes(t)}function Mh(t){return Object.values(Xu).includes(t)}function $h(t){return Object.values(Yu).includes(t)}function _a(t){const e=Object.values(ju),n=Object.values(Vu);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function lO(t){return Object.values(qu).includes(t)}function cO(t){return Object.values(Zu).includes(t)}function od(t){return Object.values($u).includes(t)}const uO=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],dO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Fh(t){for(const e of Object.values(d))if(e===t)return e}function Uh(t,e){return Object.values(e).includes(t)}class lo extends Map{constructor(){super()}setConstraint(e,n){return oO(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new lo;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new lo;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=Fh(r);a!==void 0&&Uh(a,Qu)&&typeof i=="boolean"&&i&&n.setConstraint(a,i)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function Hh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function ze(t,e){return t.r===e.r&&t.c===e.c}function Ph(t,e){return{r:t.r+e.r,c:t.c+e.c}}function _O(t,e){return{r:t.r*e,c:t.c*e}}function Bh(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function ho(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!ze(t,e)}function fO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ts(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Kt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ks(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function gO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Wh(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function hO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const vO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function ad(t){t=t%8;const e=vO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const pO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function Xs(t){const e=pO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function zh(t,e){const n=Xs(e);return Ph(t,n)}function sd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Yh(t,e,n=!1){const r=t.some(a=>ze(a,e)),i=n?t.some(a=>ho(a,e)):t.some(a=>fO(a,e));if(!r&&i){const a=[...t,e];return Ts(a),a}return t}function ws(t){return`R${t.r+1}C${t.c+1}`}function ld(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ta={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var mO=ta.exports,Sg;function CO(){return Sg||(Sg=1,function(t,e){(function(){var n,r="4.17.21",i=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",g=1,h=2,m=4,C=1,I=2,b=1,w=2,L=4,D=8,k=16,G=32,U=64,H=128,X=256,J=512,re=30,Z="...",se=800,be=16,me=1,Ce=2,Te=3,at=1/0,Se=9007199254740991,we=17976931348623157e292,ht=NaN,ct=4294967295,yn=ct-1,$n=ct>>>1,Hr=[["ary",H],["bind",b],["bindKey",w],["curry",D],["curryRight",k],["flip",J],["partial",G],["partialRight",U],["rearg",X]],Zt="[object Arguments]",pr="[object Array]",di="[object AsyncFunction]",ir="[object Boolean]",Fn="[object Date]",Hi="[object DOMException]",Pr="[object Error]",Rt="[object Function]",Ne="[object GeneratorFunction]",pe="[object Map]",Re="[object Number]",xe="[object Null]",Lt="[object Object]",Ra="[object Promise]",bl="[object Proxy]",_i="[object RegExp]",Jn="[object Set]",Do="[object String]",ka="[object Symbol]",Cp="[object Undefined]",To="[object WeakMap]",Ep="[object WeakSet]",Ro="[object ArrayBuffer]",Pi="[object DataView]",wl="[object Float32Array]",Ol="[object Float64Array]",yl="[object Int8Array]",Ll="[object Int16Array]",Al="[object Int32Array]",Sl="[object Uint8Array]",xl="[object Uint8ClampedArray]",Nl="[object Uint16Array]",Dl="[object Uint32Array]",Ip=/\b__p \+= '';/g,bp=/\b(__p \+=) '' \+/g,wp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zd=/&(?:amp|lt|gt|quot|#39);/g,Yd=/[&<>"']/g,Op=RegExp(zd.source),yp=RegExp(Yd.source),Lp=/<%-([\s\S]+?)%>/g,Ap=/<%([\s\S]+?)%>/g,jd=/<%=([\s\S]+?)%>/g,Sp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xp=/^\w*$/,Np=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tl=/[\\^$.*+?()[\]{}|]/g,Dp=RegExp(Tl.source),Rl=/^\s+/,Tp=/\s/,Rp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,kp=/\{\n\/\* \[wrapped with (.+)\] \*/,Gp=/,? & /,Mp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,$p=/[()=,{}\[\]\/\s]/,Fp=/\\(\\)?/g,Up=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Vd=/\w*$/,Hp=/^[-+]0x[0-9a-f]+$/i,Pp=/^0b[01]+$/i,Bp=/^\[object .+?Constructor\]$/,Wp=/^0o[0-7]+$/i,zp=/^(?:0|[1-9]\d*)$/,Yp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ga=/($^)/,jp=/['\n\r\u2028\u2029\\]/g,Ma="\\ud800-\\udfff",Vp="\\u0300-\\u036f",Kp="\\ufe20-\\ufe2f",Xp="\\u20d0-\\u20ff",Kd=Vp+Kp+Xp,Xd="\\u2700-\\u27bf",qd="a-z\\xdf-\\xf6\\xf8-\\xff",qp="\\xac\\xb1\\xd7\\xf7",Zp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Qp="\\u2000-\\u206f",Jp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Zd="A-Z\\xc0-\\xd6\\xd8-\\xde",Qd="\\ufe0e\\ufe0f",Jd=qp+Zp+Qp+Jp,kl="['’]",em="["+Ma+"]",e_="["+Jd+"]",$a="["+Kd+"]",t_="\\d+",tm="["+Xd+"]",n_="["+qd+"]",r_="[^"+Ma+Jd+t_+Xd+qd+Zd+"]",Gl="\\ud83c[\\udffb-\\udfff]",nm="(?:"+$a+"|"+Gl+")",i_="[^"+Ma+"]",Ml="(?:\\ud83c[\\udde6-\\uddff]){2}",$l="[\\ud800-\\udbff][\\udc00-\\udfff]",Bi="["+Zd+"]",o_="\\u200d",a_="(?:"+n_+"|"+r_+")",rm="(?:"+Bi+"|"+r_+")",s_="(?:"+kl+"(?:d|ll|m|re|s|t|ve))?",l_="(?:"+kl+"(?:D|LL|M|RE|S|T|VE))?",c_=nm+"?",u_="["+Qd+"]?",im="(?:"+o_+"(?:"+[i_,Ml,$l].join("|")+")"+u_+c_+")*",om="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",am="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",d_=u_+c_+im,sm="(?:"+[tm,Ml,$l].join("|")+")"+d_,lm="(?:"+[i_+$a+"?",$a,Ml,$l,em].join("|")+")",cm=RegExp(kl,"g"),um=RegExp($a,"g"),Fl=RegExp(Gl+"(?="+Gl+")|"+lm+d_,"g"),dm=RegExp([Bi+"?"+n_+"+"+s_+"(?="+[e_,Bi,"$"].join("|")+")",rm+"+"+l_+"(?="+[e_,Bi+a_,"$"].join("|")+")",Bi+"?"+a_+"+"+s_,Bi+"+"+l_,am,om,t_,sm].join("|"),"g"),_m=RegExp("["+o_+Ma+Kd+Qd+"]"),fm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hm=-1,At={};At[wl]=At[Ol]=At[yl]=At[Ll]=At[Al]=At[Sl]=At[xl]=At[Nl]=At[Dl]=!0,At[Zt]=At[pr]=At[Ro]=At[ir]=At[Pi]=At[Fn]=At[Pr]=At[Rt]=At[pe]=At[Re]=At[Lt]=At[_i]=At[Jn]=At[Do]=At[To]=!1;var wt={};wt[Zt]=wt[pr]=wt[Ro]=wt[Pi]=wt[ir]=wt[Fn]=wt[wl]=wt[Ol]=wt[yl]=wt[Ll]=wt[Al]=wt[pe]=wt[Re]=wt[Lt]=wt[_i]=wt[Jn]=wt[Do]=wt[ka]=wt[Sl]=wt[xl]=wt[Nl]=wt[Dl]=!0,wt[Pr]=wt[Rt]=wt[To]=!1;var vm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},pm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},mm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Cm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Em=parseFloat,Im=parseInt,__=typeof Os=="object"&&Os&&Os.Object===Object&&Os,bm=typeof self=="object"&&self&&self.Object===Object&&self,Yt=__||bm||Function("return this")(),Ul=e&&!e.nodeType&&e,fi=Ul&&!0&&t&&!t.nodeType&&t,f_=fi&&fi.exports===Ul,Hl=f_&&__.process,Un=function(){try{var j=fi&&fi.require&&fi.require("util").types;return j||Hl&&Hl.binding&&Hl.binding("util")}catch{}}(),g_=Un&&Un.isArrayBuffer,h_=Un&&Un.isDate,v_=Un&&Un.isMap,p_=Un&&Un.isRegExp,m_=Un&&Un.isSet,C_=Un&&Un.isTypedArray;function Ln(j,te,q){switch(q.length){case 0:return j.call(te);case 1:return j.call(te,q[0]);case 2:return j.call(te,q[0],q[1]);case 3:return j.call(te,q[0],q[1],q[2])}return j.apply(te,q)}function wm(j,te,q,Le){for(var Ve=-1,dt=j==null?0:j.length;++Ve<dt;){var Ht=j[Ve];te(Le,Ht,q(Ht),j)}return Le}function Hn(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le&&te(j[q],q,j)!==!1;);return j}function Om(j,te){for(var q=j==null?0:j.length;q--&&te(j[q],q,j)!==!1;);return j}function E_(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le;)if(!te(j[q],q,j))return!1;return!0}function Br(j,te){for(var q=-1,Le=j==null?0:j.length,Ve=0,dt=[];++q<Le;){var Ht=j[q];te(Ht,q,j)&&(dt[Ve++]=Ht)}return dt}function Fa(j,te){var q=j==null?0:j.length;return!!q&&Wi(j,te,0)>-1}function Pl(j,te,q){for(var Le=-1,Ve=j==null?0:j.length;++Le<Ve;)if(q(te,j[Le]))return!0;return!1}function Nt(j,te){for(var q=-1,Le=j==null?0:j.length,Ve=Array(Le);++q<Le;)Ve[q]=te(j[q],q,j);return Ve}function Wr(j,te){for(var q=-1,Le=te.length,Ve=j.length;++q<Le;)j[Ve+q]=te[q];return j}function Bl(j,te,q,Le){var Ve=-1,dt=j==null?0:j.length;for(Le&&dt&&(q=j[++Ve]);++Ve<dt;)q=te(q,j[Ve],Ve,j);return q}function ym(j,te,q,Le){var Ve=j==null?0:j.length;for(Le&&Ve&&(q=j[--Ve]);Ve--;)q=te(q,j[Ve],Ve,j);return q}function Wl(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le;)if(te(j[q],q,j))return!0;return!1}var Lm=zl("length");function Am(j){return j.split("")}function Sm(j){return j.match(Mp)||[]}function I_(j,te,q){var Le;return q(j,function(Ve,dt,Ht){if(te(Ve,dt,Ht))return Le=dt,!1}),Le}function Ua(j,te,q,Le){for(var Ve=j.length,dt=q+(Le?1:-1);Le?dt--:++dt<Ve;)if(te(j[dt],dt,j))return dt;return-1}function Wi(j,te,q){return te===te?Hm(j,te,q):Ua(j,b_,q)}function xm(j,te,q,Le){for(var Ve=q-1,dt=j.length;++Ve<dt;)if(Le(j[Ve],te))return Ve;return-1}function b_(j){return j!==j}function w_(j,te){var q=j==null?0:j.length;return q?jl(j,te)/q:ht}function zl(j){return function(te){return te==null?n:te[j]}}function Yl(j){return function(te){return j==null?n:j[te]}}function O_(j,te,q,Le,Ve){return Ve(j,function(dt,Ht,It){q=Le?(Le=!1,dt):te(q,dt,Ht,It)}),q}function Nm(j,te){var q=j.length;for(j.sort(te);q--;)j[q]=j[q].value;return j}function jl(j,te){for(var q,Le=-1,Ve=j.length;++Le<Ve;){var dt=te(j[Le]);dt!==n&&(q=q===n?dt:q+dt)}return q}function Vl(j,te){for(var q=-1,Le=Array(j);++q<j;)Le[q]=te(q);return Le}function Dm(j,te){return Nt(te,function(q){return[q,j[q]]})}function y_(j){return j&&j.slice(0,x_(j)+1).replace(Rl,"")}function An(j){return function(te){return j(te)}}function Kl(j,te){return Nt(te,function(q){return j[q]})}function ko(j,te){return j.has(te)}function L_(j,te){for(var q=-1,Le=j.length;++q<Le&&Wi(te,j[q],0)>-1;);return q}function A_(j,te){for(var q=j.length;q--&&Wi(te,j[q],0)>-1;);return q}function Tm(j,te){for(var q=j.length,Le=0;q--;)j[q]===te&&++Le;return Le}var Rm=Yl(vm),km=Yl(pm);function Gm(j){return"\\"+Cm[j]}function Mm(j,te){return j==null?n:j[te]}function zi(j){return _m.test(j)}function $m(j){return fm.test(j)}function Fm(j){for(var te,q=[];!(te=j.next()).done;)q.push(te.value);return q}function Xl(j){var te=-1,q=Array(j.size);return j.forEach(function(Le,Ve){q[++te]=[Ve,Le]}),q}function S_(j,te){return function(q){return j(te(q))}}function zr(j,te){for(var q=-1,Le=j.length,Ve=0,dt=[];++q<Le;){var Ht=j[q];(Ht===te||Ht===v)&&(j[q]=v,dt[Ve++]=q)}return dt}function Ha(j){var te=-1,q=Array(j.size);return j.forEach(function(Le){q[++te]=Le}),q}function Um(j){var te=-1,q=Array(j.size);return j.forEach(function(Le){q[++te]=[Le,Le]}),q}function Hm(j,te,q){for(var Le=q-1,Ve=j.length;++Le<Ve;)if(j[Le]===te)return Le;return-1}function Pm(j,te,q){for(var Le=q+1;Le--;)if(j[Le]===te)return Le;return Le}function Yi(j){return zi(j)?Wm(j):Lm(j)}function er(j){return zi(j)?zm(j):Am(j)}function x_(j){for(var te=j.length;te--&&Tp.test(j.charAt(te)););return te}var Bm=Yl(mm);function Wm(j){for(var te=Fl.lastIndex=0;Fl.test(j);)++te;return te}function zm(j){return j.match(Fl)||[]}function Ym(j){return j.match(dm)||[]}var jm=function j(te){te=te==null?Yt:ji.defaults(Yt.Object(),te,ji.pick(Yt,gm));var q=te.Array,Le=te.Date,Ve=te.Error,dt=te.Function,Ht=te.Math,It=te.Object,ql=te.RegExp,Vm=te.String,Pn=te.TypeError,Pa=q.prototype,Km=dt.prototype,Vi=It.prototype,Ba=te["__core-js_shared__"],Wa=Km.toString,mt=Vi.hasOwnProperty,Xm=0,N_=function(){var o=/[^.]+$/.exec(Ba&&Ba.keys&&Ba.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),za=Vi.toString,qm=Wa.call(It),Zm=Yt._,Qm=ql("^"+Wa.call(mt).replace(Tl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ya=f_?te.Buffer:n,Yr=te.Symbol,ja=te.Uint8Array,D_=Ya?Ya.allocUnsafe:n,Va=S_(It.getPrototypeOf,It),T_=It.create,R_=Vi.propertyIsEnumerable,Ka=Pa.splice,k_=Yr?Yr.isConcatSpreadable:n,Go=Yr?Yr.iterator:n,gi=Yr?Yr.toStringTag:n,Xa=function(){try{var o=Ci(It,"defineProperty");return o({},"",{}),o}catch{}}(),Jm=te.clearTimeout!==Yt.clearTimeout&&te.clearTimeout,e1=Le&&Le.now!==Yt.Date.now&&Le.now,t1=te.setTimeout!==Yt.setTimeout&&te.setTimeout,qa=Ht.ceil,Za=Ht.floor,Zl=It.getOwnPropertySymbols,n1=Ya?Ya.isBuffer:n,G_=te.isFinite,r1=Pa.join,i1=S_(It.keys,It),Pt=Ht.max,Qt=Ht.min,o1=Le.now,a1=te.parseInt,M_=Ht.random,s1=Pa.reverse,Ql=Ci(te,"DataView"),Mo=Ci(te,"Map"),Jl=Ci(te,"Promise"),Ki=Ci(te,"Set"),$o=Ci(te,"WeakMap"),Fo=Ci(It,"create"),Qa=$o&&new $o,Xi={},l1=Ei(Ql),c1=Ei(Mo),u1=Ei(Jl),d1=Ei(Ki),_1=Ei($o),Ja=Yr?Yr.prototype:n,Uo=Ja?Ja.valueOf:n,$_=Ja?Ja.toString:n;function y(o){if(kt(o)&&!Ke(o)&&!(o instanceof it)){if(o instanceof Bn)return o;if(mt.call(o,"__wrapped__"))return Uf(o)}return new Bn(o)}var qi=function(){function o(){}return function(l){if(!Dt(l))return{};if(T_)return T_(l);o.prototype=l;var f=new o;return o.prototype=n,f}}();function es(){}function Bn(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:Lp,evaluate:Ap,interpolate:jd,variable:"",imports:{_:y}},y.prototype=es.prototype,y.prototype.constructor=y,Bn.prototype=qi(es.prototype),Bn.prototype.constructor=Bn;function it(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function f1(){var o=new it(this.__wrapped__);return o.__actions__=mn(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=mn(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=mn(this.__views__),o}function g1(){if(this.__filtered__){var o=new it(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function h1(){var o=this.__wrapped__.value(),l=this.__dir__,f=Ke(o),E=l<0,O=f?o.length:0,A=A0(0,O,this.__views__),$=A.start,W=A.end,V=W-$,ie=E?W:$-1,ae=this.__iteratees__,_e=ae.length,Ie=0,ke=Qt(V,this.__takeCount__);if(!f||!E&&O==V&&ke==V)return lf(o,this.__actions__);var He=[];e:for(;V--&&Ie<ke;){ie+=l;for(var Qe=-1,Pe=o[ie];++Qe<_e;){var nt=ae[Qe],st=nt.iteratee,Nn=nt.type,ln=st(Pe);if(Nn==Ce)Pe=ln;else if(!ln){if(Nn==me)continue e;break e}}He[Ie++]=Pe}return He}it.prototype=qi(es.prototype),it.prototype.constructor=it;function hi(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function v1(){this.__data__=Fo?Fo(null):{},this.size=0}function p1(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function m1(o){var l=this.__data__;if(Fo){var f=l[o];return f===u?n:f}return mt.call(l,o)?l[o]:n}function C1(o){var l=this.__data__;return Fo?l[o]!==n:mt.call(l,o)}function E1(o,l){var f=this.__data__;return this.size+=this.has(o)?0:1,f[o]=Fo&&l===n?u:l,this}hi.prototype.clear=v1,hi.prototype.delete=p1,hi.prototype.get=m1,hi.prototype.has=C1,hi.prototype.set=E1;function mr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function I1(){this.__data__=[],this.size=0}function b1(o){var l=this.__data__,f=ts(l,o);if(f<0)return!1;var E=l.length-1;return f==E?l.pop():Ka.call(l,f,1),--this.size,!0}function w1(o){var l=this.__data__,f=ts(l,o);return f<0?n:l[f][1]}function O1(o){return ts(this.__data__,o)>-1}function y1(o,l){var f=this.__data__,E=ts(f,o);return E<0?(++this.size,f.push([o,l])):f[E][1]=l,this}mr.prototype.clear=I1,mr.prototype.delete=b1,mr.prototype.get=w1,mr.prototype.has=O1,mr.prototype.set=y1;function Cr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function L1(){this.size=0,this.__data__={hash:new hi,map:new(Mo||mr),string:new hi}}function A1(o){var l=fs(this,o).delete(o);return this.size-=l?1:0,l}function S1(o){return fs(this,o).get(o)}function x1(o){return fs(this,o).has(o)}function N1(o,l){var f=fs(this,o),E=f.size;return f.set(o,l),this.size+=f.size==E?0:1,this}Cr.prototype.clear=L1,Cr.prototype.delete=A1,Cr.prototype.get=S1,Cr.prototype.has=x1,Cr.prototype.set=N1;function vi(o){var l=-1,f=o==null?0:o.length;for(this.__data__=new Cr;++l<f;)this.add(o[l])}function D1(o){return this.__data__.set(o,u),this}function T1(o){return this.__data__.has(o)}vi.prototype.add=vi.prototype.push=D1,vi.prototype.has=T1;function tr(o){var l=this.__data__=new mr(o);this.size=l.size}function R1(){this.__data__=new mr,this.size=0}function k1(o){var l=this.__data__,f=l.delete(o);return this.size=l.size,f}function G1(o){return this.__data__.get(o)}function M1(o){return this.__data__.has(o)}function $1(o,l){var f=this.__data__;if(f instanceof mr){var E=f.__data__;if(!Mo||E.length<i-1)return E.push([o,l]),this.size=++f.size,this;f=this.__data__=new Cr(E)}return f.set(o,l),this.size=f.size,this}tr.prototype.clear=R1,tr.prototype.delete=k1,tr.prototype.get=G1,tr.prototype.has=M1,tr.prototype.set=$1;function F_(o,l){var f=Ke(o),E=!f&&Ii(o),O=!f&&!E&&qr(o),A=!f&&!E&&!O&&eo(o),$=f||E||O||A,W=$?Vl(o.length,Vm):[],V=W.length;for(var ie in o)(l||mt.call(o,ie))&&!($&&(ie=="length"||O&&(ie=="offset"||ie=="parent")||A&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||wr(ie,V)))&&W.push(ie);return W}function U_(o){var l=o.length;return l?o[uc(0,l-1)]:n}function F1(o,l){return gs(mn(o),pi(l,0,o.length))}function U1(o){return gs(mn(o))}function ec(o,l,f){(f!==n&&!nr(o[l],f)||f===n&&!(l in o))&&Er(o,l,f)}function Ho(o,l,f){var E=o[l];(!(mt.call(o,l)&&nr(E,f))||f===n&&!(l in o))&&Er(o,l,f)}function ts(o,l){for(var f=o.length;f--;)if(nr(o[f][0],l))return f;return-1}function H1(o,l,f,E){return jr(o,function(O,A,$){l(E,O,f(O),$)}),E}function H_(o,l){return o&&ar(l,Bt(l),o)}function P1(o,l){return o&&ar(l,En(l),o)}function Er(o,l,f){l=="__proto__"&&Xa?Xa(o,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):o[l]=f}function tc(o,l){for(var f=-1,E=l.length,O=q(E),A=o==null;++f<E;)O[f]=A?n:Gc(o,l[f]);return O}function pi(o,l,f){return o===o&&(f!==n&&(o=o<=f?o:f),l!==n&&(o=o>=l?o:l)),o}function Wn(o,l,f,E,O,A){var $,W=l&g,V=l&h,ie=l&m;if(f&&($=O?f(o,E,O,A):f(o)),$!==n)return $;if(!Dt(o))return o;var ae=Ke(o);if(ae){if($=x0(o),!W)return mn(o,$)}else{var _e=Jt(o),Ie=_e==Rt||_e==Ne;if(qr(o))return df(o,W);if(_e==Lt||_e==Zt||Ie&&!O){if($=V||Ie?{}:Nf(o),!W)return V?m0(o,P1($,o)):p0(o,H_($,o))}else{if(!wt[_e])return O?o:{};$=N0(o,_e,W)}}A||(A=new tr);var ke=A.get(o);if(ke)return ke;A.set(o,$),og(o)?o.forEach(function(Pe){$.add(Wn(Pe,l,f,Pe,o,A))}):rg(o)&&o.forEach(function(Pe,nt){$.set(nt,Wn(Pe,l,f,nt,o,A))});var He=ie?V?Ic:Ec:V?En:Bt,Qe=ae?n:He(o);return Hn(Qe||o,function(Pe,nt){Qe&&(nt=Pe,Pe=o[nt]),Ho($,nt,Wn(Pe,l,f,nt,o,A))}),$}function B1(o){var l=Bt(o);return function(f){return P_(f,o,l)}}function P_(o,l,f){var E=f.length;if(o==null)return!E;for(o=It(o);E--;){var O=f[E],A=l[O],$=o[O];if($===n&&!(O in o)||!A($))return!1}return!0}function B_(o,l,f){if(typeof o!="function")throw new Pn(s);return Vo(function(){o.apply(n,f)},l)}function Po(o,l,f,E){var O=-1,A=Fa,$=!0,W=o.length,V=[],ie=l.length;if(!W)return V;f&&(l=Nt(l,An(f))),E?(A=Pl,$=!1):l.length>=i&&(A=ko,$=!1,l=new vi(l));e:for(;++O<W;){var ae=o[O],_e=f==null?ae:f(ae);if(ae=E||ae!==0?ae:0,$&&_e===_e){for(var Ie=ie;Ie--;)if(l[Ie]===_e)continue e;V.push(ae)}else A(l,_e,E)||V.push(ae)}return V}var jr=vf(or),W_=vf(rc,!0);function W1(o,l){var f=!0;return jr(o,function(E,O,A){return f=!!l(E,O,A),f}),f}function ns(o,l,f){for(var E=-1,O=o.length;++E<O;){var A=o[E],$=l(A);if($!=null&&(W===n?$===$&&!xn($):f($,W)))var W=$,V=A}return V}function z1(o,l,f,E){var O=o.length;for(f=Ze(f),f<0&&(f=-f>O?0:O+f),E=E===n||E>O?O:Ze(E),E<0&&(E+=O),E=f>E?0:sg(E);f<E;)o[f++]=l;return o}function z_(o,l){var f=[];return jr(o,function(E,O,A){l(E,O,A)&&f.push(E)}),f}function jt(o,l,f,E,O){var A=-1,$=o.length;for(f||(f=T0),O||(O=[]);++A<$;){var W=o[A];l>0&&f(W)?l>1?jt(W,l-1,f,E,O):Wr(O,W):E||(O[O.length]=W)}return O}var nc=pf(),Y_=pf(!0);function or(o,l){return o&&nc(o,l,Bt)}function rc(o,l){return o&&Y_(o,l,Bt)}function rs(o,l){return Br(l,function(f){return Or(o[f])})}function mi(o,l){l=Kr(l,o);for(var f=0,E=l.length;o!=null&&f<E;)o=o[sr(l[f++])];return f&&f==E?o:n}function j_(o,l,f){var E=l(o);return Ke(o)?E:Wr(E,f(o))}function an(o){return o==null?o===n?Cp:xe:gi&&gi in It(o)?L0(o):U0(o)}function ic(o,l){return o>l}function Y1(o,l){return o!=null&&mt.call(o,l)}function j1(o,l){return o!=null&&l in It(o)}function V1(o,l,f){return o>=Qt(l,f)&&o<Pt(l,f)}function oc(o,l,f){for(var E=f?Pl:Fa,O=o[0].length,A=o.length,$=A,W=q(A),V=1/0,ie=[];$--;){var ae=o[$];$&&l&&(ae=Nt(ae,An(l))),V=Qt(ae.length,V),W[$]=!f&&(l||O>=120&&ae.length>=120)?new vi($&&ae):n}ae=o[0];var _e=-1,Ie=W[0];e:for(;++_e<O&&ie.length<V;){var ke=ae[_e],He=l?l(ke):ke;if(ke=f||ke!==0?ke:0,!(Ie?ko(Ie,He):E(ie,He,f))){for($=A;--$;){var Qe=W[$];if(!(Qe?ko(Qe,He):E(o[$],He,f)))continue e}Ie&&Ie.push(He),ie.push(ke)}}return ie}function K1(o,l,f,E){return or(o,function(O,A,$){l(E,f(O),A,$)}),E}function Bo(o,l,f){l=Kr(l,o),o=kf(o,l);var E=o==null?o:o[sr(Yn(l))];return E==null?n:Ln(E,o,f)}function V_(o){return kt(o)&&an(o)==Zt}function X1(o){return kt(o)&&an(o)==Ro}function q1(o){return kt(o)&&an(o)==Fn}function Wo(o,l,f,E,O){return o===l?!0:o==null||l==null||!kt(o)&&!kt(l)?o!==o&&l!==l:Z1(o,l,f,E,Wo,O)}function Z1(o,l,f,E,O,A){var $=Ke(o),W=Ke(l),V=$?pr:Jt(o),ie=W?pr:Jt(l);V=V==Zt?Lt:V,ie=ie==Zt?Lt:ie;var ae=V==Lt,_e=ie==Lt,Ie=V==ie;if(Ie&&qr(o)){if(!qr(l))return!1;$=!0,ae=!1}if(Ie&&!ae)return A||(A=new tr),$||eo(o)?Af(o,l,f,E,O,A):O0(o,l,V,f,E,O,A);if(!(f&C)){var ke=ae&&mt.call(o,"__wrapped__"),He=_e&&mt.call(l,"__wrapped__");if(ke||He){var Qe=ke?o.value():o,Pe=He?l.value():l;return A||(A=new tr),O(Qe,Pe,f,E,A)}}return Ie?(A||(A=new tr),y0(o,l,f,E,O,A)):!1}function Q1(o){return kt(o)&&Jt(o)==pe}function ac(o,l,f,E){var O=f.length,A=O,$=!E;if(o==null)return!A;for(o=It(o);O--;){var W=f[O];if($&&W[2]?W[1]!==o[W[0]]:!(W[0]in o))return!1}for(;++O<A;){W=f[O];var V=W[0],ie=o[V],ae=W[1];if($&&W[2]){if(ie===n&&!(V in o))return!1}else{var _e=new tr;if(E)var Ie=E(ie,ae,V,o,l,_e);if(!(Ie===n?Wo(ae,ie,C|I,E,_e):Ie))return!1}}return!0}function K_(o){if(!Dt(o)||k0(o))return!1;var l=Or(o)?Qm:Bp;return l.test(Ei(o))}function J1(o){return kt(o)&&an(o)==_i}function e0(o){return kt(o)&&Jt(o)==Jn}function t0(o){return kt(o)&&Es(o.length)&&!!At[an(o)]}function X_(o){return typeof o=="function"?o:o==null?In:typeof o=="object"?Ke(o)?Q_(o[0],o[1]):Z_(o):mg(o)}function sc(o){if(!jo(o))return i1(o);var l=[];for(var f in It(o))mt.call(o,f)&&f!="constructor"&&l.push(f);return l}function n0(o){if(!Dt(o))return F0(o);var l=jo(o),f=[];for(var E in o)E=="constructor"&&(l||!mt.call(o,E))||f.push(E);return f}function lc(o,l){return o<l}function q_(o,l){var f=-1,E=Cn(o)?q(o.length):[];return jr(o,function(O,A,$){E[++f]=l(O,A,$)}),E}function Z_(o){var l=wc(o);return l.length==1&&l[0][2]?Tf(l[0][0],l[0][1]):function(f){return f===o||ac(f,o,l)}}function Q_(o,l){return yc(o)&&Df(l)?Tf(sr(o),l):function(f){var E=Gc(f,o);return E===n&&E===l?Mc(f,o):Wo(l,E,C|I)}}function is(o,l,f,E,O){o!==l&&nc(l,function(A,$){if(O||(O=new tr),Dt(A))r0(o,l,$,f,is,E,O);else{var W=E?E(Ac(o,$),A,$+"",o,l,O):n;W===n&&(W=A),ec(o,$,W)}},En)}function r0(o,l,f,E,O,A,$){var W=Ac(o,f),V=Ac(l,f),ie=$.get(V);if(ie){ec(o,f,ie);return}var ae=A?A(W,V,f+"",o,l,$):n,_e=ae===n;if(_e){var Ie=Ke(V),ke=!Ie&&qr(V),He=!Ie&&!ke&&eo(V);ae=V,Ie||ke||He?Ke(W)?ae=W:Mt(W)?ae=mn(W):ke?(_e=!1,ae=df(V,!0)):He?(_e=!1,ae=_f(V,!0)):ae=[]:Ko(V)||Ii(V)?(ae=W,Ii(W)?ae=lg(W):(!Dt(W)||Or(W))&&(ae=Nf(V))):_e=!1}_e&&($.set(V,ae),O(ae,V,E,A,$),$.delete(V)),ec(o,f,ae)}function J_(o,l){var f=o.length;if(f)return l+=l<0?f:0,wr(l,f)?o[l]:n}function ef(o,l,f){l.length?l=Nt(l,function(A){return Ke(A)?function($){return mi($,A.length===1?A[0]:A)}:A}):l=[In];var E=-1;l=Nt(l,An(Ue()));var O=q_(o,function(A,$,W){var V=Nt(l,function(ie){return ie(A)});return{criteria:V,index:++E,value:A}});return Nm(O,function(A,$){return v0(A,$,f)})}function i0(o,l){return tf(o,l,function(f,E){return Mc(o,E)})}function tf(o,l,f){for(var E=-1,O=l.length,A={};++E<O;){var $=l[E],W=mi(o,$);f(W,$)&&zo(A,Kr($,o),W)}return A}function o0(o){return function(l){return mi(l,o)}}function cc(o,l,f,E){var O=E?xm:Wi,A=-1,$=l.length,W=o;for(o===l&&(l=mn(l)),f&&(W=Nt(o,An(f)));++A<$;)for(var V=0,ie=l[A],ae=f?f(ie):ie;(V=O(W,ae,V,E))>-1;)W!==o&&Ka.call(W,V,1),Ka.call(o,V,1);return o}function nf(o,l){for(var f=o?l.length:0,E=f-1;f--;){var O=l[f];if(f==E||O!==A){var A=O;wr(O)?Ka.call(o,O,1):fc(o,O)}}return o}function uc(o,l){return o+Za(M_()*(l-o+1))}function a0(o,l,f,E){for(var O=-1,A=Pt(qa((l-o)/(f||1)),0),$=q(A);A--;)$[E?A:++O]=o,o+=f;return $}function dc(o,l){var f="";if(!o||l<1||l>Se)return f;do l%2&&(f+=o),l=Za(l/2),l&&(o+=o);while(l);return f}function Je(o,l){return Sc(Rf(o,l,In),o+"")}function s0(o){return U_(to(o))}function l0(o,l){var f=to(o);return gs(f,pi(l,0,f.length))}function zo(o,l,f,E){if(!Dt(o))return o;l=Kr(l,o);for(var O=-1,A=l.length,$=A-1,W=o;W!=null&&++O<A;){var V=sr(l[O]),ie=f;if(V==="__proto__"||V==="constructor"||V==="prototype")return o;if(O!=$){var ae=W[V];ie=E?E(ae,V,W):n,ie===n&&(ie=Dt(ae)?ae:wr(l[O+1])?[]:{})}Ho(W,V,ie),W=W[V]}return o}var rf=Qa?function(o,l){return Qa.set(o,l),o}:In,c0=Xa?function(o,l){return Xa(o,"toString",{configurable:!0,enumerable:!1,value:Fc(l),writable:!0})}:In;function u0(o){return gs(to(o))}function zn(o,l,f){var E=-1,O=o.length;l<0&&(l=-l>O?0:O+l),f=f>O?O:f,f<0&&(f+=O),O=l>f?0:f-l>>>0,l>>>=0;for(var A=q(O);++E<O;)A[E]=o[E+l];return A}function d0(o,l){var f;return jr(o,function(E,O,A){return f=l(E,O,A),!f}),!!f}function os(o,l,f){var E=0,O=o==null?E:o.length;if(typeof l=="number"&&l===l&&O<=$n){for(;E<O;){var A=E+O>>>1,$=o[A];$!==null&&!xn($)&&(f?$<=l:$<l)?E=A+1:O=A}return O}return _c(o,l,In,f)}function _c(o,l,f,E){var O=0,A=o==null?0:o.length;if(A===0)return 0;l=f(l);for(var $=l!==l,W=l===null,V=xn(l),ie=l===n;O<A;){var ae=Za((O+A)/2),_e=f(o[ae]),Ie=_e!==n,ke=_e===null,He=_e===_e,Qe=xn(_e);if($)var Pe=E||He;else ie?Pe=He&&(E||Ie):W?Pe=He&&Ie&&(E||!ke):V?Pe=He&&Ie&&!ke&&(E||!Qe):ke||Qe?Pe=!1:Pe=E?_e<=l:_e<l;Pe?O=ae+1:A=ae}return Qt(A,yn)}function of(o,l){for(var f=-1,E=o.length,O=0,A=[];++f<E;){var $=o[f],W=l?l($):$;if(!f||!nr(W,V)){var V=W;A[O++]=$===0?0:$}}return A}function af(o){return typeof o=="number"?o:xn(o)?ht:+o}function Sn(o){if(typeof o=="string")return o;if(Ke(o))return Nt(o,Sn)+"";if(xn(o))return $_?$_.call(o):"";var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Vr(o,l,f){var E=-1,O=Fa,A=o.length,$=!0,W=[],V=W;if(f)$=!1,O=Pl;else if(A>=i){var ie=l?null:b0(o);if(ie)return Ha(ie);$=!1,O=ko,V=new vi}else V=l?[]:W;e:for(;++E<A;){var ae=o[E],_e=l?l(ae):ae;if(ae=f||ae!==0?ae:0,$&&_e===_e){for(var Ie=V.length;Ie--;)if(V[Ie]===_e)continue e;l&&V.push(_e),W.push(ae)}else O(V,_e,f)||(V!==W&&V.push(_e),W.push(ae))}return W}function fc(o,l){return l=Kr(l,o),o=kf(o,l),o==null||delete o[sr(Yn(l))]}function sf(o,l,f,E){return zo(o,l,f(mi(o,l)),E)}function as(o,l,f,E){for(var O=o.length,A=E?O:-1;(E?A--:++A<O)&&l(o[A],A,o););return f?zn(o,E?0:A,E?A+1:O):zn(o,E?A+1:0,E?O:A)}function lf(o,l){var f=o;return f instanceof it&&(f=f.value()),Bl(l,function(E,O){return O.func.apply(O.thisArg,Wr([E],O.args))},f)}function gc(o,l,f){var E=o.length;if(E<2)return E?Vr(o[0]):[];for(var O=-1,A=q(E);++O<E;)for(var $=o[O],W=-1;++W<E;)W!=O&&(A[O]=Po(A[O]||$,o[W],l,f));return Vr(jt(A,1),l,f)}function cf(o,l,f){for(var E=-1,O=o.length,A=l.length,$={};++E<O;){var W=E<A?l[E]:n;f($,o[E],W)}return $}function hc(o){return Mt(o)?o:[]}function vc(o){return typeof o=="function"?o:In}function Kr(o,l){return Ke(o)?o:yc(o,l)?[o]:Ff(vt(o))}var _0=Je;function Xr(o,l,f){var E=o.length;return f=f===n?E:f,!l&&f>=E?o:zn(o,l,f)}var uf=Jm||function(o){return Yt.clearTimeout(o)};function df(o,l){if(l)return o.slice();var f=o.length,E=D_?D_(f):new o.constructor(f);return o.copy(E),E}function pc(o){var l=new o.constructor(o.byteLength);return new ja(l).set(new ja(o)),l}function f0(o,l){var f=l?pc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.byteLength)}function g0(o){var l=new o.constructor(o.source,Vd.exec(o));return l.lastIndex=o.lastIndex,l}function h0(o){return Uo?It(Uo.call(o)):{}}function _f(o,l){var f=l?pc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.length)}function ff(o,l){if(o!==l){var f=o!==n,E=o===null,O=o===o,A=xn(o),$=l!==n,W=l===null,V=l===l,ie=xn(l);if(!W&&!ie&&!A&&o>l||A&&$&&V&&!W&&!ie||E&&$&&V||!f&&V||!O)return 1;if(!E&&!A&&!ie&&o<l||ie&&f&&O&&!E&&!A||W&&f&&O||!$&&O||!V)return-1}return 0}function v0(o,l,f){for(var E=-1,O=o.criteria,A=l.criteria,$=O.length,W=f.length;++E<$;){var V=ff(O[E],A[E]);if(V){if(E>=W)return V;var ie=f[E];return V*(ie=="desc"?-1:1)}}return o.index-l.index}function gf(o,l,f,E){for(var O=-1,A=o.length,$=f.length,W=-1,V=l.length,ie=Pt(A-$,0),ae=q(V+ie),_e=!E;++W<V;)ae[W]=l[W];for(;++O<$;)(_e||O<A)&&(ae[f[O]]=o[O]);for(;ie--;)ae[W++]=o[O++];return ae}function hf(o,l,f,E){for(var O=-1,A=o.length,$=-1,W=f.length,V=-1,ie=l.length,ae=Pt(A-W,0),_e=q(ae+ie),Ie=!E;++O<ae;)_e[O]=o[O];for(var ke=O;++V<ie;)_e[ke+V]=l[V];for(;++$<W;)(Ie||O<A)&&(_e[ke+f[$]]=o[O++]);return _e}function mn(o,l){var f=-1,E=o.length;for(l||(l=q(E));++f<E;)l[f]=o[f];return l}function ar(o,l,f,E){var O=!f;f||(f={});for(var A=-1,$=l.length;++A<$;){var W=l[A],V=E?E(f[W],o[W],W,f,o):n;V===n&&(V=o[W]),O?Er(f,W,V):Ho(f,W,V)}return f}function p0(o,l){return ar(o,Oc(o),l)}function m0(o,l){return ar(o,Sf(o),l)}function ss(o,l){return function(f,E){var O=Ke(f)?wm:H1,A=l?l():{};return O(f,o,Ue(E,2),A)}}function Zi(o){return Je(function(l,f){var E=-1,O=f.length,A=O>1?f[O-1]:n,$=O>2?f[2]:n;for(A=o.length>3&&typeof A=="function"?(O--,A):n,$&&sn(f[0],f[1],$)&&(A=O<3?n:A,O=1),l=It(l);++E<O;){var W=f[E];W&&o(l,W,E,A)}return l})}function vf(o,l){return function(f,E){if(f==null)return f;if(!Cn(f))return o(f,E);for(var O=f.length,A=l?O:-1,$=It(f);(l?A--:++A<O)&&E($[A],A,$)!==!1;);return f}}function pf(o){return function(l,f,E){for(var O=-1,A=It(l),$=E(l),W=$.length;W--;){var V=$[o?W:++O];if(f(A[V],V,A)===!1)break}return l}}function C0(o,l,f){var E=l&b,O=Yo(o);function A(){var $=this&&this!==Yt&&this instanceof A?O:o;return $.apply(E?f:this,arguments)}return A}function mf(o){return function(l){l=vt(l);var f=zi(l)?er(l):n,E=f?f[0]:l.charAt(0),O=f?Xr(f,1).join(""):l.slice(1);return E[o]()+O}}function Qi(o){return function(l){return Bl(vg(hg(l).replace(cm,"")),o,"")}}function Yo(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=qi(o.prototype),E=o.apply(f,l);return Dt(E)?E:f}}function E0(o,l,f){var E=Yo(o);function O(){for(var A=arguments.length,$=q(A),W=A,V=Ji(O);W--;)$[W]=arguments[W];var ie=A<3&&$[0]!==V&&$[A-1]!==V?[]:zr($,V);if(A-=ie.length,A<f)return wf(o,l,ls,O.placeholder,n,$,ie,n,n,f-A);var ae=this&&this!==Yt&&this instanceof O?E:o;return Ln(ae,this,$)}return O}function Cf(o){return function(l,f,E){var O=It(l);if(!Cn(l)){var A=Ue(f,3);l=Bt(l),f=function(W){return A(O[W],W,O)}}var $=o(l,f,E);return $>-1?O[A?l[$]:$]:n}}function Ef(o){return br(function(l){var f=l.length,E=f,O=Bn.prototype.thru;for(o&&l.reverse();E--;){var A=l[E];if(typeof A!="function")throw new Pn(s);if(O&&!$&&_s(A)=="wrapper")var $=new Bn([],!0)}for(E=$?E:f;++E<f;){A=l[E];var W=_s(A),V=W=="wrapper"?bc(A):n;V&&Lc(V[0])&&V[1]==(H|D|G|X)&&!V[4].length&&V[9]==1?$=$[_s(V[0])].apply($,V[3]):$=A.length==1&&Lc(A)?$[W]():$.thru(A)}return function(){var ie=arguments,ae=ie[0];if($&&ie.length==1&&Ke(ae))return $.plant(ae).value();for(var _e=0,Ie=f?l[_e].apply(this,ie):ae;++_e<f;)Ie=l[_e].call(this,Ie);return Ie}})}function ls(o,l,f,E,O,A,$,W,V,ie){var ae=l&H,_e=l&b,Ie=l&w,ke=l&(D|k),He=l&J,Qe=Ie?n:Yo(o);function Pe(){for(var nt=arguments.length,st=q(nt),Nn=nt;Nn--;)st[Nn]=arguments[Nn];if(ke)var ln=Ji(Pe),Dn=Tm(st,ln);if(E&&(st=gf(st,E,O,ke)),A&&(st=hf(st,A,$,ke)),nt-=Dn,ke&&nt<ie){var $t=zr(st,ln);return wf(o,l,ls,Pe.placeholder,f,st,$t,W,V,ie-nt)}var rr=_e?f:this,Lr=Ie?rr[o]:o;return nt=st.length,W?st=H0(st,W):He&&nt>1&&st.reverse(),ae&&V<nt&&(st.length=V),this&&this!==Yt&&this instanceof Pe&&(Lr=Qe||Yo(Lr)),Lr.apply(rr,st)}return Pe}function If(o,l){return function(f,E){return K1(f,o,l(E),{})}}function cs(o,l){return function(f,E){var O;if(f===n&&E===n)return l;if(f!==n&&(O=f),E!==n){if(O===n)return E;typeof f=="string"||typeof E=="string"?(f=Sn(f),E=Sn(E)):(f=af(f),E=af(E)),O=o(f,E)}return O}}function mc(o){return br(function(l){return l=Nt(l,An(Ue())),Je(function(f){var E=this;return o(l,function(O){return Ln(O,E,f)})})})}function us(o,l){l=l===n?" ":Sn(l);var f=l.length;if(f<2)return f?dc(l,o):l;var E=dc(l,qa(o/Yi(l)));return zi(l)?Xr(er(E),0,o).join(""):E.slice(0,o)}function I0(o,l,f,E){var O=l&b,A=Yo(o);function $(){for(var W=-1,V=arguments.length,ie=-1,ae=E.length,_e=q(ae+V),Ie=this&&this!==Yt&&this instanceof $?A:o;++ie<ae;)_e[ie]=E[ie];for(;V--;)_e[ie++]=arguments[++W];return Ln(Ie,O?f:this,_e)}return $}function bf(o){return function(l,f,E){return E&&typeof E!="number"&&sn(l,f,E)&&(f=E=n),l=yr(l),f===n?(f=l,l=0):f=yr(f),E=E===n?l<f?1:-1:yr(E),a0(l,f,E,o)}}function ds(o){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=jn(l),f=jn(f)),o(l,f)}}function wf(o,l,f,E,O,A,$,W,V,ie){var ae=l&D,_e=ae?$:n,Ie=ae?n:$,ke=ae?A:n,He=ae?n:A;l|=ae?G:U,l&=~(ae?U:G),l&L||(l&=-4);var Qe=[o,l,O,ke,_e,He,Ie,W,V,ie],Pe=f.apply(n,Qe);return Lc(o)&&Gf(Pe,Qe),Pe.placeholder=E,Mf(Pe,o,l)}function Cc(o){var l=Ht[o];return function(f,E){if(f=jn(f),E=E==null?0:Qt(Ze(E),292),E&&G_(f)){var O=(vt(f)+"e").split("e"),A=l(O[0]+"e"+(+O[1]+E));return O=(vt(A)+"e").split("e"),+(O[0]+"e"+(+O[1]-E))}return l(f)}}var b0=Ki&&1/Ha(new Ki([,-0]))[1]==at?function(o){return new Ki(o)}:Pc;function Of(o){return function(l){var f=Jt(l);return f==pe?Xl(l):f==Jn?Um(l):Dm(l,o(l))}}function Ir(o,l,f,E,O,A,$,W){var V=l&w;if(!V&&typeof o!="function")throw new Pn(s);var ie=E?E.length:0;if(ie||(l&=-97,E=O=n),$=$===n?$:Pt(Ze($),0),W=W===n?W:Ze(W),ie-=O?O.length:0,l&U){var ae=E,_e=O;E=O=n}var Ie=V?n:bc(o),ke=[o,l,f,E,O,ae,_e,A,$,W];if(Ie&&$0(ke,Ie),o=ke[0],l=ke[1],f=ke[2],E=ke[3],O=ke[4],W=ke[9]=ke[9]===n?V?0:o.length:Pt(ke[9]-ie,0),!W&&l&(D|k)&&(l&=-25),!l||l==b)var He=C0(o,l,f);else l==D||l==k?He=E0(o,l,W):(l==G||l==(b|G))&&!O.length?He=I0(o,l,f,E):He=ls.apply(n,ke);var Qe=Ie?rf:Gf;return Mf(Qe(He,ke),o,l)}function yf(o,l,f,E){return o===n||nr(o,Vi[f])&&!mt.call(E,f)?l:o}function Lf(o,l,f,E,O,A){return Dt(o)&&Dt(l)&&(A.set(l,o),is(o,l,n,Lf,A),A.delete(l)),o}function w0(o){return Ko(o)?n:o}function Af(o,l,f,E,O,A){var $=f&C,W=o.length,V=l.length;if(W!=V&&!($&&V>W))return!1;var ie=A.get(o),ae=A.get(l);if(ie&&ae)return ie==l&&ae==o;var _e=-1,Ie=!0,ke=f&I?new vi:n;for(A.set(o,l),A.set(l,o);++_e<W;){var He=o[_e],Qe=l[_e];if(E)var Pe=$?E(Qe,He,_e,l,o,A):E(He,Qe,_e,o,l,A);if(Pe!==n){if(Pe)continue;Ie=!1;break}if(ke){if(!Wl(l,function(nt,st){if(!ko(ke,st)&&(He===nt||O(He,nt,f,E,A)))return ke.push(st)})){Ie=!1;break}}else if(!(He===Qe||O(He,Qe,f,E,A))){Ie=!1;break}}return A.delete(o),A.delete(l),Ie}function O0(o,l,f,E,O,A,$){switch(f){case Pi:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case Ro:return!(o.byteLength!=l.byteLength||!A(new ja(o),new ja(l)));case ir:case Fn:case Re:return nr(+o,+l);case Pr:return o.name==l.name&&o.message==l.message;case _i:case Do:return o==l+"";case pe:var W=Xl;case Jn:var V=E&C;if(W||(W=Ha),o.size!=l.size&&!V)return!1;var ie=$.get(o);if(ie)return ie==l;E|=I,$.set(o,l);var ae=Af(W(o),W(l),E,O,A,$);return $.delete(o),ae;case ka:if(Uo)return Uo.call(o)==Uo.call(l)}return!1}function y0(o,l,f,E,O,A){var $=f&C,W=Ec(o),V=W.length,ie=Ec(l),ae=ie.length;if(V!=ae&&!$)return!1;for(var _e=V;_e--;){var Ie=W[_e];if(!($?Ie in l:mt.call(l,Ie)))return!1}var ke=A.get(o),He=A.get(l);if(ke&&He)return ke==l&&He==o;var Qe=!0;A.set(o,l),A.set(l,o);for(var Pe=$;++_e<V;){Ie=W[_e];var nt=o[Ie],st=l[Ie];if(E)var Nn=$?E(st,nt,Ie,l,o,A):E(nt,st,Ie,o,l,A);if(!(Nn===n?nt===st||O(nt,st,f,E,A):Nn)){Qe=!1;break}Pe||(Pe=Ie=="constructor")}if(Qe&&!Pe){var ln=o.constructor,Dn=l.constructor;ln!=Dn&&"constructor"in o&&"constructor"in l&&!(typeof ln=="function"&&ln instanceof ln&&typeof Dn=="function"&&Dn instanceof Dn)&&(Qe=!1)}return A.delete(o),A.delete(l),Qe}function br(o){return Sc(Rf(o,n,Bf),o+"")}function Ec(o){return j_(o,Bt,Oc)}function Ic(o){return j_(o,En,Sf)}var bc=Qa?function(o){return Qa.get(o)}:Pc;function _s(o){for(var l=o.name+"",f=Xi[l],E=mt.call(Xi,l)?f.length:0;E--;){var O=f[E],A=O.func;if(A==null||A==o)return O.name}return l}function Ji(o){var l=mt.call(y,"placeholder")?y:o;return l.placeholder}function Ue(){var o=y.iteratee||Uc;return o=o===Uc?X_:o,arguments.length?o(arguments[0],arguments[1]):o}function fs(o,l){var f=o.__data__;return R0(l)?f[typeof l=="string"?"string":"hash"]:f.map}function wc(o){for(var l=Bt(o),f=l.length;f--;){var E=l[f],O=o[E];l[f]=[E,O,Df(O)]}return l}function Ci(o,l){var f=Mm(o,l);return K_(f)?f:n}function L0(o){var l=mt.call(o,gi),f=o[gi];try{o[gi]=n;var E=!0}catch{}var O=za.call(o);return E&&(l?o[gi]=f:delete o[gi]),O}var Oc=Zl?function(o){return o==null?[]:(o=It(o),Br(Zl(o),function(l){return R_.call(o,l)}))}:Bc,Sf=Zl?function(o){for(var l=[];o;)Wr(l,Oc(o)),o=Va(o);return l}:Bc,Jt=an;(Ql&&Jt(new Ql(new ArrayBuffer(1)))!=Pi||Mo&&Jt(new Mo)!=pe||Jl&&Jt(Jl.resolve())!=Ra||Ki&&Jt(new Ki)!=Jn||$o&&Jt(new $o)!=To)&&(Jt=function(o){var l=an(o),f=l==Lt?o.constructor:n,E=f?Ei(f):"";if(E)switch(E){case l1:return Pi;case c1:return pe;case u1:return Ra;case d1:return Jn;case _1:return To}return l});function A0(o,l,f){for(var E=-1,O=f.length;++E<O;){var A=f[E],$=A.size;switch(A.type){case"drop":o+=$;break;case"dropRight":l-=$;break;case"take":l=Qt(l,o+$);break;case"takeRight":o=Pt(o,l-$);break}}return{start:o,end:l}}function S0(o){var l=o.match(kp);return l?l[1].split(Gp):[]}function xf(o,l,f){l=Kr(l,o);for(var E=-1,O=l.length,A=!1;++E<O;){var $=sr(l[E]);if(!(A=o!=null&&f(o,$)))break;o=o[$]}return A||++E!=O?A:(O=o==null?0:o.length,!!O&&Es(O)&&wr($,O)&&(Ke(o)||Ii(o)))}function x0(o){var l=o.length,f=new o.constructor(l);return l&&typeof o[0]=="string"&&mt.call(o,"index")&&(f.index=o.index,f.input=o.input),f}function Nf(o){return typeof o.constructor=="function"&&!jo(o)?qi(Va(o)):{}}function N0(o,l,f){var E=o.constructor;switch(l){case Ro:return pc(o);case ir:case Fn:return new E(+o);case Pi:return f0(o,f);case wl:case Ol:case yl:case Ll:case Al:case Sl:case xl:case Nl:case Dl:return _f(o,f);case pe:return new E;case Re:case Do:return new E(o);case _i:return g0(o);case Jn:return new E;case ka:return h0(o)}}function D0(o,l){var f=l.length;if(!f)return o;var E=f-1;return l[E]=(f>1?"& ":"")+l[E],l=l.join(f>2?", ":" "),o.replace(Rp,`{
/* [wrapped with `+l+`] */
`)}function T0(o){return Ke(o)||Ii(o)||!!(k_&&o&&o[k_])}function wr(o,l){var f=typeof o;return l=l??Se,!!l&&(f=="number"||f!="symbol"&&zp.test(o))&&o>-1&&o%1==0&&o<l}function sn(o,l,f){if(!Dt(f))return!1;var E=typeof l;return(E=="number"?Cn(f)&&wr(l,f.length):E=="string"&&l in f)?nr(f[l],o):!1}function yc(o,l){if(Ke(o))return!1;var f=typeof o;return f=="number"||f=="symbol"||f=="boolean"||o==null||xn(o)?!0:xp.test(o)||!Sp.test(o)||l!=null&&o in It(l)}function R0(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function Lc(o){var l=_s(o),f=y[l];if(typeof f!="function"||!(l in it.prototype))return!1;if(o===f)return!0;var E=bc(f);return!!E&&o===E[0]}function k0(o){return!!N_&&N_ in o}var G0=Ba?Or:Wc;function jo(o){var l=o&&o.constructor,f=typeof l=="function"&&l.prototype||Vi;return o===f}function Df(o){return o===o&&!Dt(o)}function Tf(o,l){return function(f){return f==null?!1:f[o]===l&&(l!==n||o in It(f))}}function M0(o){var l=ms(o,function(E){return f.size===_&&f.clear(),E}),f=l.cache;return l}function $0(o,l){var f=o[1],E=l[1],O=f|E,A=O<(b|w|H),$=E==H&&f==D||E==H&&f==X&&o[7].length<=l[8]||E==(H|X)&&l[7].length<=l[8]&&f==D;if(!(A||$))return o;E&b&&(o[2]=l[2],O|=f&b?0:L);var W=l[3];if(W){var V=o[3];o[3]=V?gf(V,W,l[4]):W,o[4]=V?zr(o[3],v):l[4]}return W=l[5],W&&(V=o[5],o[5]=V?hf(V,W,l[6]):W,o[6]=V?zr(o[5],v):l[6]),W=l[7],W&&(o[7]=W),E&H&&(o[8]=o[8]==null?l[8]:Qt(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=O,o}function F0(o){var l=[];if(o!=null)for(var f in It(o))l.push(f);return l}function U0(o){return za.call(o)}function Rf(o,l,f){return l=Pt(l===n?o.length-1:l,0),function(){for(var E=arguments,O=-1,A=Pt(E.length-l,0),$=q(A);++O<A;)$[O]=E[l+O];O=-1;for(var W=q(l+1);++O<l;)W[O]=E[O];return W[l]=f($),Ln(o,this,W)}}function kf(o,l){return l.length<2?o:mi(o,zn(l,0,-1))}function H0(o,l){for(var f=o.length,E=Qt(l.length,f),O=mn(o);E--;){var A=l[E];o[E]=wr(A,f)?O[A]:n}return o}function Ac(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var Gf=$f(rf),Vo=t1||function(o,l){return Yt.setTimeout(o,l)},Sc=$f(c0);function Mf(o,l,f){var E=l+"";return Sc(o,D0(E,P0(S0(E),f)))}function $f(o){var l=0,f=0;return function(){var E=o1(),O=be-(E-f);if(f=E,O>0){if(++l>=se)return arguments[0]}else l=0;return o.apply(n,arguments)}}function gs(o,l){var f=-1,E=o.length,O=E-1;for(l=l===n?E:l;++f<l;){var A=uc(f,O),$=o[A];o[A]=o[f],o[f]=$}return o.length=l,o}var Ff=M0(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(Np,function(f,E,O,A){l.push(O?A.replace(Fp,"$1"):E||f)}),l});function sr(o){if(typeof o=="string"||xn(o))return o;var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Ei(o){if(o!=null){try{return Wa.call(o)}catch{}try{return o+""}catch{}}return""}function P0(o,l){return Hn(Hr,function(f){var E="_."+f[0];l&f[1]&&!Fa(o,E)&&o.push(E)}),o.sort()}function Uf(o){if(o instanceof it)return o.clone();var l=new Bn(o.__wrapped__,o.__chain__);return l.__actions__=mn(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function B0(o,l,f){(f?sn(o,l,f):l===n)?l=1:l=Pt(Ze(l),0);var E=o==null?0:o.length;if(!E||l<1)return[];for(var O=0,A=0,$=q(qa(E/l));O<E;)$[A++]=zn(o,O,O+=l);return $}function W0(o){for(var l=-1,f=o==null?0:o.length,E=0,O=[];++l<f;){var A=o[l];A&&(O[E++]=A)}return O}function z0(){var o=arguments.length;if(!o)return[];for(var l=q(o-1),f=arguments[0],E=o;E--;)l[E-1]=arguments[E];return Wr(Ke(f)?mn(f):[f],jt(l,1))}var Y0=Je(function(o,l){return Mt(o)?Po(o,jt(l,1,Mt,!0)):[]}),j0=Je(function(o,l){var f=Yn(l);return Mt(f)&&(f=n),Mt(o)?Po(o,jt(l,1,Mt,!0),Ue(f,2)):[]}),V0=Je(function(o,l){var f=Yn(l);return Mt(f)&&(f=n),Mt(o)?Po(o,jt(l,1,Mt,!0),n,f):[]});function K0(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Ze(l),zn(o,l<0?0:l,E)):[]}function X0(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Ze(l),l=E-l,zn(o,0,l<0?0:l)):[]}function q0(o,l){return o&&o.length?as(o,Ue(l,3),!0,!0):[]}function Z0(o,l){return o&&o.length?as(o,Ue(l,3),!0):[]}function Q0(o,l,f,E){var O=o==null?0:o.length;return O?(f&&typeof f!="number"&&sn(o,l,f)&&(f=0,E=O),z1(o,l,f,E)):[]}function Hf(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=f==null?0:Ze(f);return O<0&&(O=Pt(E+O,0)),Ua(o,Ue(l,3),O)}function Pf(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=E-1;return f!==n&&(O=Ze(f),O=f<0?Pt(E+O,0):Qt(O,E-1)),Ua(o,Ue(l,3),O,!0)}function Bf(o){var l=o==null?0:o.length;return l?jt(o,1):[]}function J0(o){var l=o==null?0:o.length;return l?jt(o,at):[]}function eC(o,l){var f=o==null?0:o.length;return f?(l=l===n?1:Ze(l),jt(o,l)):[]}function tC(o){for(var l=-1,f=o==null?0:o.length,E={};++l<f;){var O=o[l];E[O[0]]=O[1]}return E}function Wf(o){return o&&o.length?o[0]:n}function nC(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=f==null?0:Ze(f);return O<0&&(O=Pt(E+O,0)),Wi(o,l,O)}function rC(o){var l=o==null?0:o.length;return l?zn(o,0,-1):[]}var iC=Je(function(o){var l=Nt(o,hc);return l.length&&l[0]===o[0]?oc(l):[]}),oC=Je(function(o){var l=Yn(o),f=Nt(o,hc);return l===Yn(f)?l=n:f.pop(),f.length&&f[0]===o[0]?oc(f,Ue(l,2)):[]}),aC=Je(function(o){var l=Yn(o),f=Nt(o,hc);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===o[0]?oc(f,n,l):[]});function sC(o,l){return o==null?"":r1.call(o,l)}function Yn(o){var l=o==null?0:o.length;return l?o[l-1]:n}function lC(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var O=E;return f!==n&&(O=Ze(f),O=O<0?Pt(E+O,0):Qt(O,E-1)),l===l?Pm(o,l,O):Ua(o,b_,O,!0)}function cC(o,l){return o&&o.length?J_(o,Ze(l)):n}var uC=Je(zf);function zf(o,l){return o&&o.length&&l&&l.length?cc(o,l):o}function dC(o,l,f){return o&&o.length&&l&&l.length?cc(o,l,Ue(f,2)):o}function _C(o,l,f){return o&&o.length&&l&&l.length?cc(o,l,n,f):o}var fC=br(function(o,l){var f=o==null?0:o.length,E=tc(o,l);return nf(o,Nt(l,function(O){return wr(O,f)?+O:O}).sort(ff)),E});function gC(o,l){var f=[];if(!(o&&o.length))return f;var E=-1,O=[],A=o.length;for(l=Ue(l,3);++E<A;){var $=o[E];l($,E,o)&&(f.push($),O.push(E))}return nf(o,O),f}function xc(o){return o==null?o:s1.call(o)}function hC(o,l,f){var E=o==null?0:o.length;return E?(f&&typeof f!="number"&&sn(o,l,f)?(l=0,f=E):(l=l==null?0:Ze(l),f=f===n?E:Ze(f)),zn(o,l,f)):[]}function vC(o,l){return os(o,l)}function pC(o,l,f){return _c(o,l,Ue(f,2))}function mC(o,l){var f=o==null?0:o.length;if(f){var E=os(o,l);if(E<f&&nr(o[E],l))return E}return-1}function CC(o,l){return os(o,l,!0)}function EC(o,l,f){return _c(o,l,Ue(f,2),!0)}function IC(o,l){var f=o==null?0:o.length;if(f){var E=os(o,l,!0)-1;if(nr(o[E],l))return E}return-1}function bC(o){return o&&o.length?of(o):[]}function wC(o,l){return o&&o.length?of(o,Ue(l,2)):[]}function OC(o){var l=o==null?0:o.length;return l?zn(o,1,l):[]}function yC(o,l,f){return o&&o.length?(l=f||l===n?1:Ze(l),zn(o,0,l<0?0:l)):[]}function LC(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Ze(l),l=E-l,zn(o,l<0?0:l,E)):[]}function AC(o,l){return o&&o.length?as(o,Ue(l,3),!1,!0):[]}function SC(o,l){return o&&o.length?as(o,Ue(l,3)):[]}var xC=Je(function(o){return Vr(jt(o,1,Mt,!0))}),NC=Je(function(o){var l=Yn(o);return Mt(l)&&(l=n),Vr(jt(o,1,Mt,!0),Ue(l,2))}),DC=Je(function(o){var l=Yn(o);return l=typeof l=="function"?l:n,Vr(jt(o,1,Mt,!0),n,l)});function TC(o){return o&&o.length?Vr(o):[]}function RC(o,l){return o&&o.length?Vr(o,Ue(l,2)):[]}function kC(o,l){return l=typeof l=="function"?l:n,o&&o.length?Vr(o,n,l):[]}function Nc(o){if(!(o&&o.length))return[];var l=0;return o=Br(o,function(f){if(Mt(f))return l=Pt(f.length,l),!0}),Vl(l,function(f){return Nt(o,zl(f))})}function Yf(o,l){if(!(o&&o.length))return[];var f=Nc(o);return l==null?f:Nt(f,function(E){return Ln(l,n,E)})}var GC=Je(function(o,l){return Mt(o)?Po(o,l):[]}),MC=Je(function(o){return gc(Br(o,Mt))}),$C=Je(function(o){var l=Yn(o);return Mt(l)&&(l=n),gc(Br(o,Mt),Ue(l,2))}),FC=Je(function(o){var l=Yn(o);return l=typeof l=="function"?l:n,gc(Br(o,Mt),n,l)}),UC=Je(Nc);function HC(o,l){return cf(o||[],l||[],Ho)}function PC(o,l){return cf(o||[],l||[],zo)}var BC=Je(function(o){var l=o.length,f=l>1?o[l-1]:n;return f=typeof f=="function"?(o.pop(),f):n,Yf(o,f)});function jf(o){var l=y(o);return l.__chain__=!0,l}function WC(o,l){return l(o),o}function hs(o,l){return l(o)}var zC=br(function(o){var l=o.length,f=l?o[0]:0,E=this.__wrapped__,O=function(A){return tc(A,o)};return l>1||this.__actions__.length||!(E instanceof it)||!wr(f)?this.thru(O):(E=E.slice(f,+f+(l?1:0)),E.__actions__.push({func:hs,args:[O],thisArg:n}),new Bn(E,this.__chain__).thru(function(A){return l&&!A.length&&A.push(n),A}))});function YC(){return jf(this)}function jC(){return new Bn(this.value(),this.__chain__)}function VC(){this.__values__===n&&(this.__values__=ag(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function KC(){return this}function XC(o){for(var l,f=this;f instanceof es;){var E=Uf(f);E.__index__=0,E.__values__=n,l?O.__wrapped__=E:l=E;var O=E;f=f.__wrapped__}return O.__wrapped__=o,l}function qC(){var o=this.__wrapped__;if(o instanceof it){var l=o;return this.__actions__.length&&(l=new it(this)),l=l.reverse(),l.__actions__.push({func:hs,args:[xc],thisArg:n}),new Bn(l,this.__chain__)}return this.thru(xc)}function ZC(){return lf(this.__wrapped__,this.__actions__)}var QC=ss(function(o,l,f){mt.call(o,f)?++o[f]:Er(o,f,1)});function JC(o,l,f){var E=Ke(o)?E_:W1;return f&&sn(o,l,f)&&(l=n),E(o,Ue(l,3))}function eE(o,l){var f=Ke(o)?Br:z_;return f(o,Ue(l,3))}var tE=Cf(Hf),nE=Cf(Pf);function rE(o,l){return jt(vs(o,l),1)}function iE(o,l){return jt(vs(o,l),at)}function oE(o,l,f){return f=f===n?1:Ze(f),jt(vs(o,l),f)}function Vf(o,l){var f=Ke(o)?Hn:jr;return f(o,Ue(l,3))}function Kf(o,l){var f=Ke(o)?Om:W_;return f(o,Ue(l,3))}var aE=ss(function(o,l,f){mt.call(o,f)?o[f].push(l):Er(o,f,[l])});function sE(o,l,f,E){o=Cn(o)?o:to(o),f=f&&!E?Ze(f):0;var O=o.length;return f<0&&(f=Pt(O+f,0)),Is(o)?f<=O&&o.indexOf(l,f)>-1:!!O&&Wi(o,l,f)>-1}var lE=Je(function(o,l,f){var E=-1,O=typeof l=="function",A=Cn(o)?q(o.length):[];return jr(o,function($){A[++E]=O?Ln(l,$,f):Bo($,l,f)}),A}),cE=ss(function(o,l,f){Er(o,f,l)});function vs(o,l){var f=Ke(o)?Nt:q_;return f(o,Ue(l,3))}function uE(o,l,f,E){return o==null?[]:(Ke(l)||(l=l==null?[]:[l]),f=E?n:f,Ke(f)||(f=f==null?[]:[f]),ef(o,l,f))}var dE=ss(function(o,l,f){o[f?0:1].push(l)},function(){return[[],[]]});function _E(o,l,f){var E=Ke(o)?Bl:O_,O=arguments.length<3;return E(o,Ue(l,4),f,O,jr)}function fE(o,l,f){var E=Ke(o)?ym:O_,O=arguments.length<3;return E(o,Ue(l,4),f,O,W_)}function gE(o,l){var f=Ke(o)?Br:z_;return f(o,Cs(Ue(l,3)))}function hE(o){var l=Ke(o)?U_:s0;return l(o)}function vE(o,l,f){(f?sn(o,l,f):l===n)?l=1:l=Ze(l);var E=Ke(o)?F1:l0;return E(o,l)}function pE(o){var l=Ke(o)?U1:u0;return l(o)}function mE(o){if(o==null)return 0;if(Cn(o))return Is(o)?Yi(o):o.length;var l=Jt(o);return l==pe||l==Jn?o.size:sc(o).length}function CE(o,l,f){var E=Ke(o)?Wl:d0;return f&&sn(o,l,f)&&(l=n),E(o,Ue(l,3))}var EE=Je(function(o,l){if(o==null)return[];var f=l.length;return f>1&&sn(o,l[0],l[1])?l=[]:f>2&&sn(l[0],l[1],l[2])&&(l=[l[0]]),ef(o,jt(l,1),[])}),ps=e1||function(){return Yt.Date.now()};function IE(o,l){if(typeof l!="function")throw new Pn(s);return o=Ze(o),function(){if(--o<1)return l.apply(this,arguments)}}function Xf(o,l,f){return l=f?n:l,l=o&&l==null?o.length:l,Ir(o,H,n,n,n,n,l)}function qf(o,l){var f;if(typeof l!="function")throw new Pn(s);return o=Ze(o),function(){return--o>0&&(f=l.apply(this,arguments)),o<=1&&(l=n),f}}var Dc=Je(function(o,l,f){var E=b;if(f.length){var O=zr(f,Ji(Dc));E|=G}return Ir(o,E,l,f,O)}),Zf=Je(function(o,l,f){var E=b|w;if(f.length){var O=zr(f,Ji(Zf));E|=G}return Ir(l,E,o,f,O)});function Qf(o,l,f){l=f?n:l;var E=Ir(o,D,n,n,n,n,n,l);return E.placeholder=Qf.placeholder,E}function Jf(o,l,f){l=f?n:l;var E=Ir(o,k,n,n,n,n,n,l);return E.placeholder=Jf.placeholder,E}function eg(o,l,f){var E,O,A,$,W,V,ie=0,ae=!1,_e=!1,Ie=!0;if(typeof o!="function")throw new Pn(s);l=jn(l)||0,Dt(f)&&(ae=!!f.leading,_e="maxWait"in f,A=_e?Pt(jn(f.maxWait)||0,l):A,Ie="trailing"in f?!!f.trailing:Ie);function ke($t){var rr=E,Lr=O;return E=O=n,ie=$t,$=o.apply(Lr,rr),$}function He($t){return ie=$t,W=Vo(nt,l),ae?ke($t):$}function Qe($t){var rr=$t-V,Lr=$t-ie,Cg=l-rr;return _e?Qt(Cg,A-Lr):Cg}function Pe($t){var rr=$t-V,Lr=$t-ie;return V===n||rr>=l||rr<0||_e&&Lr>=A}function nt(){var $t=ps();if(Pe($t))return st($t);W=Vo(nt,Qe($t))}function st($t){return W=n,Ie&&E?ke($t):(E=O=n,$)}function Nn(){W!==n&&uf(W),ie=0,E=V=O=W=n}function ln(){return W===n?$:st(ps())}function Dn(){var $t=ps(),rr=Pe($t);if(E=arguments,O=this,V=$t,rr){if(W===n)return He(V);if(_e)return uf(W),W=Vo(nt,l),ke(V)}return W===n&&(W=Vo(nt,l)),$}return Dn.cancel=Nn,Dn.flush=ln,Dn}var bE=Je(function(o,l){return B_(o,1,l)}),wE=Je(function(o,l,f){return B_(o,jn(l)||0,f)});function OE(o){return Ir(o,J)}function ms(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Pn(s);var f=function(){var E=arguments,O=l?l.apply(this,E):E[0],A=f.cache;if(A.has(O))return A.get(O);var $=o.apply(this,E);return f.cache=A.set(O,$)||A,$};return f.cache=new(ms.Cache||Cr),f}ms.Cache=Cr;function Cs(o){if(typeof o!="function")throw new Pn(s);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function yE(o){return qf(2,o)}var LE=_0(function(o,l){l=l.length==1&&Ke(l[0])?Nt(l[0],An(Ue())):Nt(jt(l,1),An(Ue()));var f=l.length;return Je(function(E){for(var O=-1,A=Qt(E.length,f);++O<A;)E[O]=l[O].call(this,E[O]);return Ln(o,this,E)})}),Tc=Je(function(o,l){var f=zr(l,Ji(Tc));return Ir(o,G,n,l,f)}),tg=Je(function(o,l){var f=zr(l,Ji(tg));return Ir(o,U,n,l,f)}),AE=br(function(o,l){return Ir(o,X,n,n,n,l)});function SE(o,l){if(typeof o!="function")throw new Pn(s);return l=l===n?l:Ze(l),Je(o,l)}function xE(o,l){if(typeof o!="function")throw new Pn(s);return l=l==null?0:Pt(Ze(l),0),Je(function(f){var E=f[l],O=Xr(f,0,l);return E&&Wr(O,E),Ln(o,this,O)})}function NE(o,l,f){var E=!0,O=!0;if(typeof o!="function")throw new Pn(s);return Dt(f)&&(E="leading"in f?!!f.leading:E,O="trailing"in f?!!f.trailing:O),eg(o,l,{leading:E,maxWait:l,trailing:O})}function DE(o){return Xf(o,1)}function TE(o,l){return Tc(vc(l),o)}function RE(){if(!arguments.length)return[];var o=arguments[0];return Ke(o)?o:[o]}function kE(o){return Wn(o,m)}function GE(o,l){return l=typeof l=="function"?l:n,Wn(o,m,l)}function ME(o){return Wn(o,g|m)}function $E(o,l){return l=typeof l=="function"?l:n,Wn(o,g|m,l)}function FE(o,l){return l==null||P_(o,l,Bt(l))}function nr(o,l){return o===l||o!==o&&l!==l}var UE=ds(ic),HE=ds(function(o,l){return o>=l}),Ii=V_(function(){return arguments}())?V_:function(o){return kt(o)&&mt.call(o,"callee")&&!R_.call(o,"callee")},Ke=q.isArray,PE=g_?An(g_):X1;function Cn(o){return o!=null&&Es(o.length)&&!Or(o)}function Mt(o){return kt(o)&&Cn(o)}function BE(o){return o===!0||o===!1||kt(o)&&an(o)==ir}var qr=n1||Wc,WE=h_?An(h_):q1;function zE(o){return kt(o)&&o.nodeType===1&&!Ko(o)}function YE(o){if(o==null)return!0;if(Cn(o)&&(Ke(o)||typeof o=="string"||typeof o.splice=="function"||qr(o)||eo(o)||Ii(o)))return!o.length;var l=Jt(o);if(l==pe||l==Jn)return!o.size;if(jo(o))return!sc(o).length;for(var f in o)if(mt.call(o,f))return!1;return!0}function jE(o,l){return Wo(o,l)}function VE(o,l,f){f=typeof f=="function"?f:n;var E=f?f(o,l):n;return E===n?Wo(o,l,n,f):!!E}function Rc(o){if(!kt(o))return!1;var l=an(o);return l==Pr||l==Hi||typeof o.message=="string"&&typeof o.name=="string"&&!Ko(o)}function KE(o){return typeof o=="number"&&G_(o)}function Or(o){if(!Dt(o))return!1;var l=an(o);return l==Rt||l==Ne||l==di||l==bl}function ng(o){return typeof o=="number"&&o==Ze(o)}function Es(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Se}function Dt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function kt(o){return o!=null&&typeof o=="object"}var rg=v_?An(v_):Q1;function XE(o,l){return o===l||ac(o,l,wc(l))}function qE(o,l,f){return f=typeof f=="function"?f:n,ac(o,l,wc(l),f)}function ZE(o){return ig(o)&&o!=+o}function QE(o){if(G0(o))throw new Ve(a);return K_(o)}function JE(o){return o===null}function eI(o){return o==null}function ig(o){return typeof o=="number"||kt(o)&&an(o)==Re}function Ko(o){if(!kt(o)||an(o)!=Lt)return!1;var l=Va(o);if(l===null)return!0;var f=mt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Wa.call(f)==qm}var kc=p_?An(p_):J1;function tI(o){return ng(o)&&o>=-9007199254740991&&o<=Se}var og=m_?An(m_):e0;function Is(o){return typeof o=="string"||!Ke(o)&&kt(o)&&an(o)==Do}function xn(o){return typeof o=="symbol"||kt(o)&&an(o)==ka}var eo=C_?An(C_):t0;function nI(o){return o===n}function rI(o){return kt(o)&&Jt(o)==To}function iI(o){return kt(o)&&an(o)==Ep}var oI=ds(lc),aI=ds(function(o,l){return o<=l});function ag(o){if(!o)return[];if(Cn(o))return Is(o)?er(o):mn(o);if(Go&&o[Go])return Fm(o[Go]());var l=Jt(o),f=l==pe?Xl:l==Jn?Ha:to;return f(o)}function yr(o){if(!o)return o===0?o:0;if(o=jn(o),o===at||o===-1/0){var l=o<0?-1:1;return l*we}return o===o?o:0}function Ze(o){var l=yr(o),f=l%1;return l===l?f?l-f:l:0}function sg(o){return o?pi(Ze(o),0,ct):0}function jn(o){if(typeof o=="number")return o;if(xn(o))return ht;if(Dt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Dt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=y_(o);var f=Pp.test(o);return f||Wp.test(o)?Im(o.slice(2),f?2:8):Hp.test(o)?ht:+o}function lg(o){return ar(o,En(o))}function sI(o){return o?pi(Ze(o),-9007199254740991,Se):o===0?o:0}function vt(o){return o==null?"":Sn(o)}var lI=Zi(function(o,l){if(jo(l)||Cn(l)){ar(l,Bt(l),o);return}for(var f in l)mt.call(l,f)&&Ho(o,f,l[f])}),cg=Zi(function(o,l){ar(l,En(l),o)}),bs=Zi(function(o,l,f,E){ar(l,En(l),o,E)}),cI=Zi(function(o,l,f,E){ar(l,Bt(l),o,E)}),uI=br(tc);function dI(o,l){var f=qi(o);return l==null?f:H_(f,l)}var _I=Je(function(o,l){o=It(o);var f=-1,E=l.length,O=E>2?l[2]:n;for(O&&sn(l[0],l[1],O)&&(E=1);++f<E;)for(var A=l[f],$=En(A),W=-1,V=$.length;++W<V;){var ie=$[W],ae=o[ie];(ae===n||nr(ae,Vi[ie])&&!mt.call(o,ie))&&(o[ie]=A[ie])}return o}),fI=Je(function(o){return o.push(n,Lf),Ln(ug,n,o)});function gI(o,l){return I_(o,Ue(l,3),or)}function hI(o,l){return I_(o,Ue(l,3),rc)}function vI(o,l){return o==null?o:nc(o,Ue(l,3),En)}function pI(o,l){return o==null?o:Y_(o,Ue(l,3),En)}function mI(o,l){return o&&or(o,Ue(l,3))}function CI(o,l){return o&&rc(o,Ue(l,3))}function EI(o){return o==null?[]:rs(o,Bt(o))}function II(o){return o==null?[]:rs(o,En(o))}function Gc(o,l,f){var E=o==null?n:mi(o,l);return E===n?f:E}function bI(o,l){return o!=null&&xf(o,l,Y1)}function Mc(o,l){return o!=null&&xf(o,l,j1)}var wI=If(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=za.call(l)),o[l]=f},Fc(In)),OI=If(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=za.call(l)),mt.call(o,l)?o[l].push(f):o[l]=[f]},Ue),yI=Je(Bo);function Bt(o){return Cn(o)?F_(o):sc(o)}function En(o){return Cn(o)?F_(o,!0):n0(o)}function LI(o,l){var f={};return l=Ue(l,3),or(o,function(E,O,A){Er(f,l(E,O,A),E)}),f}function AI(o,l){var f={};return l=Ue(l,3),or(o,function(E,O,A){Er(f,O,l(E,O,A))}),f}var SI=Zi(function(o,l,f){is(o,l,f)}),ug=Zi(function(o,l,f,E){is(o,l,f,E)}),xI=br(function(o,l){var f={};if(o==null)return f;var E=!1;l=Nt(l,function(A){return A=Kr(A,o),E||(E=A.length>1),A}),ar(o,Ic(o),f),E&&(f=Wn(f,g|h|m,w0));for(var O=l.length;O--;)fc(f,l[O]);return f});function NI(o,l){return dg(o,Cs(Ue(l)))}var DI=br(function(o,l){return o==null?{}:i0(o,l)});function dg(o,l){if(o==null)return{};var f=Nt(Ic(o),function(E){return[E]});return l=Ue(l),tf(o,f,function(E,O){return l(E,O[0])})}function TI(o,l,f){l=Kr(l,o);var E=-1,O=l.length;for(O||(O=1,o=n);++E<O;){var A=o==null?n:o[sr(l[E])];A===n&&(E=O,A=f),o=Or(A)?A.call(o):A}return o}function RI(o,l,f){return o==null?o:zo(o,l,f)}function kI(o,l,f,E){return E=typeof E=="function"?E:n,o==null?o:zo(o,l,f,E)}var _g=Of(Bt),fg=Of(En);function GI(o,l,f){var E=Ke(o),O=E||qr(o)||eo(o);if(l=Ue(l,4),f==null){var A=o&&o.constructor;O?f=E?new A:[]:Dt(o)?f=Or(A)?qi(Va(o)):{}:f={}}return(O?Hn:or)(o,function($,W,V){return l(f,$,W,V)}),f}function MI(o,l){return o==null?!0:fc(o,l)}function $I(o,l,f){return o==null?o:sf(o,l,vc(f))}function FI(o,l,f,E){return E=typeof E=="function"?E:n,o==null?o:sf(o,l,vc(f),E)}function to(o){return o==null?[]:Kl(o,Bt(o))}function UI(o){return o==null?[]:Kl(o,En(o))}function HI(o,l,f){return f===n&&(f=l,l=n),f!==n&&(f=jn(f),f=f===f?f:0),l!==n&&(l=jn(l),l=l===l?l:0),pi(jn(o),l,f)}function PI(o,l,f){return l=yr(l),f===n?(f=l,l=0):f=yr(f),o=jn(o),V1(o,l,f)}function BI(o,l,f){if(f&&typeof f!="boolean"&&sn(o,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof o=="boolean"&&(f=o,o=n)),o===n&&l===n?(o=0,l=1):(o=yr(o),l===n?(l=o,o=0):l=yr(l)),o>l){var E=o;o=l,l=E}if(f||o%1||l%1){var O=M_();return Qt(o+O*(l-o+Em("1e-"+((O+"").length-1))),l)}return uc(o,l)}var WI=Qi(function(o,l,f){return l=l.toLowerCase(),o+(f?gg(l):l)});function gg(o){return $c(vt(o).toLowerCase())}function hg(o){return o=vt(o),o&&o.replace(Yp,Rm).replace(um,"")}function zI(o,l,f){o=vt(o),l=Sn(l);var E=o.length;f=f===n?E:pi(Ze(f),0,E);var O=f;return f-=l.length,f>=0&&o.slice(f,O)==l}function YI(o){return o=vt(o),o&&yp.test(o)?o.replace(Yd,km):o}function jI(o){return o=vt(o),o&&Dp.test(o)?o.replace(Tl,"\\$&"):o}var VI=Qi(function(o,l,f){return o+(f?"-":"")+l.toLowerCase()}),KI=Qi(function(o,l,f){return o+(f?" ":"")+l.toLowerCase()}),XI=mf("toLowerCase");function qI(o,l,f){o=vt(o),l=Ze(l);var E=l?Yi(o):0;if(!l||E>=l)return o;var O=(l-E)/2;return us(Za(O),f)+o+us(qa(O),f)}function ZI(o,l,f){o=vt(o),l=Ze(l);var E=l?Yi(o):0;return l&&E<l?o+us(l-E,f):o}function QI(o,l,f){o=vt(o),l=Ze(l);var E=l?Yi(o):0;return l&&E<l?us(l-E,f)+o:o}function JI(o,l,f){return f||l==null?l=0:l&&(l=+l),a1(vt(o).replace(Rl,""),l||0)}function eb(o,l,f){return(f?sn(o,l,f):l===n)?l=1:l=Ze(l),dc(vt(o),l)}function tb(){var o=arguments,l=vt(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var nb=Qi(function(o,l,f){return o+(f?"_":"")+l.toLowerCase()});function rb(o,l,f){return f&&typeof f!="number"&&sn(o,l,f)&&(l=f=n),f=f===n?ct:f>>>0,f?(o=vt(o),o&&(typeof l=="string"||l!=null&&!kc(l))&&(l=Sn(l),!l&&zi(o))?Xr(er(o),0,f):o.split(l,f)):[]}var ib=Qi(function(o,l,f){return o+(f?" ":"")+$c(l)});function ob(o,l,f){return o=vt(o),f=f==null?0:pi(Ze(f),0,o.length),l=Sn(l),o.slice(f,f+l.length)==l}function ab(o,l,f){var E=y.templateSettings;f&&sn(o,l,f)&&(l=n),o=vt(o),l=bs({},l,E,yf);var O=bs({},l.imports,E.imports,yf),A=Bt(O),$=Kl(O,A),W,V,ie=0,ae=l.interpolate||Ga,_e="__p += '",Ie=ql((l.escape||Ga).source+"|"+ae.source+"|"+(ae===jd?Up:Ga).source+"|"+(l.evaluate||Ga).source+"|$","g"),ke="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hm+"]")+`
`;o.replace(Ie,function(Pe,nt,st,Nn,ln,Dn){return st||(st=Nn),_e+=o.slice(ie,Dn).replace(jp,Gm),nt&&(W=!0,_e+=`' +
__e(`+nt+`) +
'`),ln&&(V=!0,_e+=`';
`+ln+`;
__p += '`),st&&(_e+=`' +
((__t = (`+st+`)) == null ? '' : __t) +
'`),ie=Dn+Pe.length,Pe}),_e+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)_e=`with (obj) {
`+_e+`
}
`;else if($p.test(He))throw new Ve(c);_e=(V?_e.replace(Ip,""):_e).replace(bp,"$1").replace(wp,"$1;"),_e="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(W?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var Qe=pg(function(){return dt(A,ke+"return "+_e).apply(n,$)});if(Qe.source=_e,Rc(Qe))throw Qe;return Qe}function sb(o){return vt(o).toLowerCase()}function lb(o){return vt(o).toUpperCase()}function cb(o,l,f){if(o=vt(o),o&&(f||l===n))return y_(o);if(!o||!(l=Sn(l)))return o;var E=er(o),O=er(l),A=L_(E,O),$=A_(E,O)+1;return Xr(E,A,$).join("")}function ub(o,l,f){if(o=vt(o),o&&(f||l===n))return o.slice(0,x_(o)+1);if(!o||!(l=Sn(l)))return o;var E=er(o),O=A_(E,er(l))+1;return Xr(E,0,O).join("")}function db(o,l,f){if(o=vt(o),o&&(f||l===n))return o.replace(Rl,"");if(!o||!(l=Sn(l)))return o;var E=er(o),O=L_(E,er(l));return Xr(E,O).join("")}function _b(o,l){var f=re,E=Z;if(Dt(l)){var O="separator"in l?l.separator:O;f="length"in l?Ze(l.length):f,E="omission"in l?Sn(l.omission):E}o=vt(o);var A=o.length;if(zi(o)){var $=er(o);A=$.length}if(f>=A)return o;var W=f-Yi(E);if(W<1)return E;var V=$?Xr($,0,W).join(""):o.slice(0,W);if(O===n)return V+E;if($&&(W+=V.length-W),kc(O)){if(o.slice(W).search(O)){var ie,ae=V;for(O.global||(O=ql(O.source,vt(Vd.exec(O))+"g")),O.lastIndex=0;ie=O.exec(ae);)var _e=ie.index;V=V.slice(0,_e===n?W:_e)}}else if(o.indexOf(Sn(O),W)!=W){var Ie=V.lastIndexOf(O);Ie>-1&&(V=V.slice(0,Ie))}return V+E}function fb(o){return o=vt(o),o&&Op.test(o)?o.replace(zd,Bm):o}var gb=Qi(function(o,l,f){return o+(f?" ":"")+l.toUpperCase()}),$c=mf("toUpperCase");function vg(o,l,f){return o=vt(o),l=f?n:l,l===n?$m(o)?Ym(o):Sm(o):o.match(l)||[]}var pg=Je(function(o,l){try{return Ln(o,n,l)}catch(f){return Rc(f)?f:new Ve(f)}}),hb=br(function(o,l){return Hn(l,function(f){f=sr(f),Er(o,f,Dc(o[f],o))}),o});function vb(o){var l=o==null?0:o.length,f=Ue();return o=l?Nt(o,function(E){if(typeof E[1]!="function")throw new Pn(s);return[f(E[0]),E[1]]}):[],Je(function(E){for(var O=-1;++O<l;){var A=o[O];if(Ln(A[0],this,E))return Ln(A[1],this,E)}})}function pb(o){return B1(Wn(o,g))}function Fc(o){return function(){return o}}function mb(o,l){return o==null||o!==o?l:o}var Cb=Ef(),Eb=Ef(!0);function In(o){return o}function Uc(o){return X_(typeof o=="function"?o:Wn(o,g))}function Ib(o){return Z_(Wn(o,g))}function bb(o,l){return Q_(o,Wn(l,g))}var wb=Je(function(o,l){return function(f){return Bo(f,o,l)}}),Ob=Je(function(o,l){return function(f){return Bo(o,f,l)}});function Hc(o,l,f){var E=Bt(l),O=rs(l,E);f==null&&!(Dt(l)&&(O.length||!E.length))&&(f=l,l=o,o=this,O=rs(l,Bt(l)));var A=!(Dt(f)&&"chain"in f)||!!f.chain,$=Or(o);return Hn(O,function(W){var V=l[W];o[W]=V,$&&(o.prototype[W]=function(){var ie=this.__chain__;if(A||ie){var ae=o(this.__wrapped__),_e=ae.__actions__=mn(this.__actions__);return _e.push({func:V,args:arguments,thisArg:o}),ae.__chain__=ie,ae}return V.apply(o,Wr([this.value()],arguments))})}),o}function yb(){return Yt._===this&&(Yt._=Zm),this}function Pc(){}function Lb(o){return o=Ze(o),Je(function(l){return J_(l,o)})}var Ab=mc(Nt),Sb=mc(E_),xb=mc(Wl);function mg(o){return yc(o)?zl(sr(o)):o0(o)}function Nb(o){return function(l){return o==null?n:mi(o,l)}}var Db=bf(),Tb=bf(!0);function Bc(){return[]}function Wc(){return!1}function Rb(){return{}}function kb(){return""}function Gb(){return!0}function Mb(o,l){if(o=Ze(o),o<1||o>Se)return[];var f=ct,E=Qt(o,ct);l=Ue(l),o-=ct;for(var O=Vl(E,l);++f<o;)l(f);return O}function $b(o){return Ke(o)?Nt(o,sr):xn(o)?[o]:mn(Ff(vt(o)))}function Fb(o){var l=++Xm;return vt(o)+l}var Ub=cs(function(o,l){return o+l},0),Hb=Cc("ceil"),Pb=cs(function(o,l){return o/l},1),Bb=Cc("floor");function Wb(o){return o&&o.length?ns(o,In,ic):n}function zb(o,l){return o&&o.length?ns(o,Ue(l,2),ic):n}function Yb(o){return w_(o,In)}function jb(o,l){return w_(o,Ue(l,2))}function Vb(o){return o&&o.length?ns(o,In,lc):n}function Kb(o,l){return o&&o.length?ns(o,Ue(l,2),lc):n}var Xb=cs(function(o,l){return o*l},1),qb=Cc("round"),Zb=cs(function(o,l){return o-l},0);function Qb(o){return o&&o.length?jl(o,In):0}function Jb(o,l){return o&&o.length?jl(o,Ue(l,2)):0}return y.after=IE,y.ary=Xf,y.assign=lI,y.assignIn=cg,y.assignInWith=bs,y.assignWith=cI,y.at=uI,y.before=qf,y.bind=Dc,y.bindAll=hb,y.bindKey=Zf,y.castArray=RE,y.chain=jf,y.chunk=B0,y.compact=W0,y.concat=z0,y.cond=vb,y.conforms=pb,y.constant=Fc,y.countBy=QC,y.create=dI,y.curry=Qf,y.curryRight=Jf,y.debounce=eg,y.defaults=_I,y.defaultsDeep=fI,y.defer=bE,y.delay=wE,y.difference=Y0,y.differenceBy=j0,y.differenceWith=V0,y.drop=K0,y.dropRight=X0,y.dropRightWhile=q0,y.dropWhile=Z0,y.fill=Q0,y.filter=eE,y.flatMap=rE,y.flatMapDeep=iE,y.flatMapDepth=oE,y.flatten=Bf,y.flattenDeep=J0,y.flattenDepth=eC,y.flip=OE,y.flow=Cb,y.flowRight=Eb,y.fromPairs=tC,y.functions=EI,y.functionsIn=II,y.groupBy=aE,y.initial=rC,y.intersection=iC,y.intersectionBy=oC,y.intersectionWith=aC,y.invert=wI,y.invertBy=OI,y.invokeMap=lE,y.iteratee=Uc,y.keyBy=cE,y.keys=Bt,y.keysIn=En,y.map=vs,y.mapKeys=LI,y.mapValues=AI,y.matches=Ib,y.matchesProperty=bb,y.memoize=ms,y.merge=SI,y.mergeWith=ug,y.method=wb,y.methodOf=Ob,y.mixin=Hc,y.negate=Cs,y.nthArg=Lb,y.omit=xI,y.omitBy=NI,y.once=yE,y.orderBy=uE,y.over=Ab,y.overArgs=LE,y.overEvery=Sb,y.overSome=xb,y.partial=Tc,y.partialRight=tg,y.partition=dE,y.pick=DI,y.pickBy=dg,y.property=mg,y.propertyOf=Nb,y.pull=uC,y.pullAll=zf,y.pullAllBy=dC,y.pullAllWith=_C,y.pullAt=fC,y.range=Db,y.rangeRight=Tb,y.rearg=AE,y.reject=gE,y.remove=gC,y.rest=SE,y.reverse=xc,y.sampleSize=vE,y.set=RI,y.setWith=kI,y.shuffle=pE,y.slice=hC,y.sortBy=EE,y.sortedUniq=bC,y.sortedUniqBy=wC,y.split=rb,y.spread=xE,y.tail=OC,y.take=yC,y.takeRight=LC,y.takeRightWhile=AC,y.takeWhile=SC,y.tap=WC,y.throttle=NE,y.thru=hs,y.toArray=ag,y.toPairs=_g,y.toPairsIn=fg,y.toPath=$b,y.toPlainObject=lg,y.transform=GI,y.unary=DE,y.union=xC,y.unionBy=NC,y.unionWith=DC,y.uniq=TC,y.uniqBy=RC,y.uniqWith=kC,y.unset=MI,y.unzip=Nc,y.unzipWith=Yf,y.update=$I,y.updateWith=FI,y.values=to,y.valuesIn=UI,y.without=GC,y.words=vg,y.wrap=TE,y.xor=MC,y.xorBy=$C,y.xorWith=FC,y.zip=UC,y.zipObject=HC,y.zipObjectDeep=PC,y.zipWith=BC,y.entries=_g,y.entriesIn=fg,y.extend=cg,y.extendWith=bs,Hc(y,y),y.add=Ub,y.attempt=pg,y.camelCase=WI,y.capitalize=gg,y.ceil=Hb,y.clamp=HI,y.clone=kE,y.cloneDeep=ME,y.cloneDeepWith=$E,y.cloneWith=GE,y.conformsTo=FE,y.deburr=hg,y.defaultTo=mb,y.divide=Pb,y.endsWith=zI,y.eq=nr,y.escape=YI,y.escapeRegExp=jI,y.every=JC,y.find=tE,y.findIndex=Hf,y.findKey=gI,y.findLast=nE,y.findLastIndex=Pf,y.findLastKey=hI,y.floor=Bb,y.forEach=Vf,y.forEachRight=Kf,y.forIn=vI,y.forInRight=pI,y.forOwn=mI,y.forOwnRight=CI,y.get=Gc,y.gt=UE,y.gte=HE,y.has=bI,y.hasIn=Mc,y.head=Wf,y.identity=In,y.includes=sE,y.indexOf=nC,y.inRange=PI,y.invoke=yI,y.isArguments=Ii,y.isArray=Ke,y.isArrayBuffer=PE,y.isArrayLike=Cn,y.isArrayLikeObject=Mt,y.isBoolean=BE,y.isBuffer=qr,y.isDate=WE,y.isElement=zE,y.isEmpty=YE,y.isEqual=jE,y.isEqualWith=VE,y.isError=Rc,y.isFinite=KE,y.isFunction=Or,y.isInteger=ng,y.isLength=Es,y.isMap=rg,y.isMatch=XE,y.isMatchWith=qE,y.isNaN=ZE,y.isNative=QE,y.isNil=eI,y.isNull=JE,y.isNumber=ig,y.isObject=Dt,y.isObjectLike=kt,y.isPlainObject=Ko,y.isRegExp=kc,y.isSafeInteger=tI,y.isSet=og,y.isString=Is,y.isSymbol=xn,y.isTypedArray=eo,y.isUndefined=nI,y.isWeakMap=rI,y.isWeakSet=iI,y.join=sC,y.kebabCase=VI,y.last=Yn,y.lastIndexOf=lC,y.lowerCase=KI,y.lowerFirst=XI,y.lt=oI,y.lte=aI,y.max=Wb,y.maxBy=zb,y.mean=Yb,y.meanBy=jb,y.min=Vb,y.minBy=Kb,y.stubArray=Bc,y.stubFalse=Wc,y.stubObject=Rb,y.stubString=kb,y.stubTrue=Gb,y.multiply=Xb,y.nth=cC,y.noConflict=yb,y.noop=Pc,y.now=ps,y.pad=qI,y.padEnd=ZI,y.padStart=QI,y.parseInt=JI,y.random=BI,y.reduce=_E,y.reduceRight=fE,y.repeat=eb,y.replace=tb,y.result=TI,y.round=qb,y.runInContext=j,y.sample=hE,y.size=mE,y.snakeCase=nb,y.some=CE,y.sortedIndex=vC,y.sortedIndexBy=pC,y.sortedIndexOf=mC,y.sortedLastIndex=CC,y.sortedLastIndexBy=EC,y.sortedLastIndexOf=IC,y.startCase=ib,y.startsWith=ob,y.subtract=Zb,y.sum=Qb,y.sumBy=Jb,y.template=ab,y.times=Mb,y.toFinite=yr,y.toInteger=Ze,y.toLength=sg,y.toLower=sb,y.toNumber=jn,y.toSafeInteger=sI,y.toString=vt,y.toUpper=lb,y.trim=cb,y.trimEnd=ub,y.trimStart=db,y.truncate=_b,y.unescape=fb,y.uniqueId=Fb,y.upperCase=gb,y.upperFirst=$c,y.each=Vf,y.eachRight=Kf,y.first=Wf,Hc(y,function(){var o={};return or(y,function(l,f){mt.call(y.prototype,f)||(o[f]=l)}),o}(),{chain:!1}),y.VERSION=r,Hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){y[o].placeholder=y}),Hn(["drop","take"],function(o,l){it.prototype[o]=function(f){f=f===n?1:Pt(Ze(f),0);var E=this.__filtered__&&!l?new it(this):this.clone();return E.__filtered__?E.__takeCount__=Qt(f,E.__takeCount__):E.__views__.push({size:Qt(f,ct),type:o+(E.__dir__<0?"Right":"")}),E},it.prototype[o+"Right"]=function(f){return this.reverse()[o](f).reverse()}}),Hn(["filter","map","takeWhile"],function(o,l){var f=l+1,E=f==me||f==Te;it.prototype[o]=function(O){var A=this.clone();return A.__iteratees__.push({iteratee:Ue(O,3),type:f}),A.__filtered__=A.__filtered__||E,A}}),Hn(["head","last"],function(o,l){var f="take"+(l?"Right":"");it.prototype[o]=function(){return this[f](1).value()[0]}}),Hn(["initial","tail"],function(o,l){var f="drop"+(l?"":"Right");it.prototype[o]=function(){return this.__filtered__?new it(this):this[f](1)}}),it.prototype.compact=function(){return this.filter(In)},it.prototype.find=function(o){return this.filter(o).head()},it.prototype.findLast=function(o){return this.reverse().find(o)},it.prototype.invokeMap=Je(function(o,l){return typeof o=="function"?new it(this):this.map(function(f){return Bo(f,o,l)})}),it.prototype.reject=function(o){return this.filter(Cs(Ue(o)))},it.prototype.slice=function(o,l){o=Ze(o);var f=this;return f.__filtered__&&(o>0||l<0)?new it(f):(o<0?f=f.takeRight(-o):o&&(f=f.drop(o)),l!==n&&(l=Ze(l),f=l<0?f.dropRight(-l):f.take(l-o)),f)},it.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},it.prototype.toArray=function(){return this.take(ct)},or(it.prototype,function(o,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),O=y[E?"take"+(l=="last"?"Right":""):l],A=E||/^find/.test(l);O&&(y.prototype[l]=function(){var $=this.__wrapped__,W=E?[1]:arguments,V=$ instanceof it,ie=W[0],ae=V||Ke($),_e=function(nt){var st=O.apply(y,Wr([nt],W));return E&&Ie?st[0]:st};ae&&f&&typeof ie=="function"&&ie.length!=1&&(V=ae=!1);var Ie=this.__chain__,ke=!!this.__actions__.length,He=A&&!Ie,Qe=V&&!ke;if(!A&&ae){$=Qe?$:new it(this);var Pe=o.apply($,W);return Pe.__actions__.push({func:hs,args:[_e],thisArg:n}),new Bn(Pe,Ie)}return He&&Qe?o.apply(this,W):(Pe=this.thru(_e),He?E?Pe.value()[0]:Pe.value():Pe)})}),Hn(["pop","push","shift","sort","splice","unshift"],function(o){var l=Pa[o],f=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",E=/^(?:pop|shift)$/.test(o);y.prototype[o]=function(){var O=arguments;if(E&&!this.__chain__){var A=this.value();return l.apply(Ke(A)?A:[],O)}return this[f](function($){return l.apply(Ke($)?$:[],O)})}}),or(it.prototype,function(o,l){var f=y[l];if(f){var E=f.name+"";mt.call(Xi,E)||(Xi[E]=[]),Xi[E].push({name:l,func:f})}}),Xi[ls(n,w).name]=[{name:"wrapper",func:n}],it.prototype.clone=f1,it.prototype.reverse=g1,it.prototype.value=h1,y.prototype.at=zC,y.prototype.chain=YC,y.prototype.commit=jC,y.prototype.next=VC,y.prototype.plant=XC,y.prototype.reverse=qC,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=ZC,y.prototype.first=y.prototype.head,Go&&(y.prototype[Go]=KC),y},ji=jm();fi?((fi.exports=ji)._=ji,Ul._=ji):Yt._=ji}).call(mO)}(ta,ta.exports)),ta.exports}var xt=CO(),B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function bn(t,e,n){n!==void 0&&(t[e]=n)}function EO(t){var e,n,r,i,a,s,c,u,_,v,g,h,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(a=t.inset)!=null&&a.editable||(s=t.angle)!=null&&s.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function uu(t){var n,r,i,a,s,c,u,_,v,g,h,m,C,I,b,w,L,D,k,G,U,H;const e={type:t.type};return bn(e,"n",(n=t.n)==null?void 0:n.value),bn(e,"r",(r=t.r)==null?void 0:r.value),bn(e,"height",(i=t.height)==null?void 0:i.value),bn(e,"width",(a=t.width)==null?void 0:a.value),bn(e,"inset",(s=t.inset)==null?void 0:s.value),bn(e,"angle",(c=t.angle)==null?void 0:c.value),bn(e,"fill",(u=t.fill)==null?void 0:u.value),bn(e,"stroke",(_=t.stroke)==null?void 0:_.value),bn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),bn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),bn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),bn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),bn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),bn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:w.value,shortenTail:(D=(L=t.linePathOptions)==null?void 0:L.shortenTail)==null?void 0:D.value,bezierRounding:(G=(k=t.linePathOptions)==null?void 0:k.bezierRounding)==null?void 0:G.value,closeLoops:(H=(U=t.linePathOptions)==null?void 0:U.closeLoops)==null?void 0:H.value}),e}function IO(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const bO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},wO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},OO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},jh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Vh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},pa={type:"Line",strokeWidth:.125,stroke:"gray"},cd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},yO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},LO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},AO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function Sr(t){return Array.isArray?Array.isArray(t):qh(t)==="[object Array]"}function SO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function xO(t){return t==null?"":SO(t)}function dr(t){return typeof t=="string"}function Kh(t){return typeof t=="number"}function NO(t){return t===!0||t===!1||DO(t)&&qh(t)=="[object Boolean]"}function Xh(t){return typeof t=="object"}function DO(t){return Xh(t)&&t!==null}function kn(t){return t!=null}function qc(t){return!t.trim().length}function qh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const TO="Incorrect 'index' type",RO=t=>`Invalid value for key ${t}`,kO=t=>`Pattern length exceeds max of ${t}.`,GO=t=>`Missing ${t} property in key`,MO=t=>`Property 'weight' in key '${t}' must be a positive integer`,xg=Object.prototype.hasOwnProperty;class $O{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Zh(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Zh(t){let e=null,n=null,r=null,i=1,a=null;if(dr(t)||Sr(t))r=t,e=Ng(t),n=du(t);else{if(!xg.call(t,"name"))throw new Error(GO("name"));const s=t.name;if(r=s,xg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(MO(s));e=Ng(s),n=du(s),a=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:a}}function Ng(t){return Sr(t)?t:t.split(".")}function du(t){return Sr(t)?t.join("."):t}function FO(t,e){let n=[],r=!1;const i=(a,s,c)=>{if(kn(a))if(!s[c])n.push(a);else{let u=s[c];const _=a[u];if(!kn(_))return;if(c===s.length-1&&(dr(_)||Kh(_)||NO(_)))n.push(xO(_));else if(Sr(_)){r=!0;for(let v=0,g=_.length;v<g;v+=1)i(_[v],s,c+1)}else s.length&&i(_,s,c+1)}};return i(t,dr(e)?e.split("."):e,0),r?n:n[0]}const UO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},HO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},PO={location:0,threshold:.6,distance:100},BO={useExtendedSearch:!1,getFn:FO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...HO,...UO,...PO,...BO};const WO=/[^ ]+/g;function zO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const a=i.match(WO).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*t),c=parseFloat(Math.round(s*r)/r);return n.set(a,c),c},clear(){n.clear()}}}class ud{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=zO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,dr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();dr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!kn(e)||qc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,a)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if(kn(s)){if(Sr(s)){let c=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(kn(v))if(dr(v)&&!qc(v)){let g={v,i:_,n:this.norm.get(v)};c.push(g)}else Sr(v)&&v.forEach((g,h)=>{u.push({nestedArrIndex:h,value:g})})}r.$[a]=c}else if(dr(s)&&!qc(s)){let c={v:s,n:this.norm.get(s)};r.$[a]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Qh(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const i=new ud({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Zh)),i.setSources(e),i.create(),i}function YO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:i}=t,a=new ud({getFn:e,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function ys(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ye.distance,ignoreLocation:a=Ye.ignoreLocation}={}){const s=e/t.length;if(a)return s;const c=Math.abs(r-n);return i?s+c/i:c?1:s}function jO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let s=t.length;a<s;a+=1){let c=t[a];c&&r===-1?r=a:!c&&r!==-1&&(i=a-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}const wi=32;function VO(t,e,n,{location:r=Ye.location,distance:i=Ye.distance,threshold:a=Ye.threshold,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>wi)throw new Error(kO(wi));const v=e.length,g=t.length,h=Math.max(0,Math.min(r,g));let m=a,C=h;const I=c>1||u,b=I?Array(g):[];let w;for(;(w=t.indexOf(e,C))>-1;){let H=ys(e,{currentLocation:w,expectedLocation:h,distance:i,ignoreLocation:_});if(m=Math.min(H,m),C=w+v,I){let X=0;for(;X<v;)b[w+X]=1,X+=1}}C=-1;let L=[],D=1,k=v+g;const G=1<<v-1;for(let H=0;H<v;H+=1){let X=0,J=k;for(;X<J;)ys(e,{errors:H,currentLocation:h+J,expectedLocation:h,distance:i,ignoreLocation:_})<=m?X=J:k=J,J=Math.floor((k-X)/2+X);k=J;let re=Math.max(1,h-J+1),Z=s?g:Math.min(h+J,g)+v,se=Array(Z+2);se[Z+1]=(1<<H)-1;for(let me=Z;me>=re;me-=1){let Ce=me-1,Te=n[t.charAt(Ce)];if(I&&(b[Ce]=+!!Te),se[me]=(se[me+1]<<1|1)&Te,H&&(se[me]|=(L[me+1]|L[me])<<1|1|L[me+1]),se[me]&G&&(D=ys(e,{errors:H,currentLocation:Ce,expectedLocation:h,distance:i,ignoreLocation:_}),D<=m)){if(m=D,C=Ce,C<=h)break;re=Math.max(1,2*h-C)}}if(ys(e,{errors:H+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:_})>m)break;L=se}const U={isMatch:C>=0,score:Math.max(.001,D)};if(I){const H=jO(b,c);H.length?u&&(U.indices=H):U.isMatch=!1}return U}function KO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Jh{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(h,m)=>{this.chunks.push({pattern:h,alphabet:KO(h),startIndex:m})},g=this.pattern.length;if(g>wi){let h=0;const m=g%wi,C=g-m;for(;h<C;)v(this.pattern.substr(h,wi),h),h+=wi;if(m){const I=g-wi;v(this.pattern.substr(I),I)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:i,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],g=0,h=!1;this.chunks.forEach(({pattern:C,alphabet:I,startIndex:b})=>{const{isMatch:w,score:L,indices:D}=VO(e,C,I,{location:i+b,distance:a,threshold:s,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(h=!0),g+=L,w&&D&&(v=[...v,...D])});let m={isMatch:h,score:h?g/this.chunks.length:1};return h&&r&&(m.indices=v),m}}class oi{constructor(e){this.pattern=e}static isMultiMatch(e){return Dg(e,this.multiRegex)}static isSingleMatch(e){return Dg(e,this.singleRegex)}search(){}}function Dg(t,e){const n=t.match(e);return n?n[1]:null}class XO extends oi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class qO extends oi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ZO extends oi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class QO extends oi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class JO extends oi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ey extends oi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ev extends oi{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:a=Ye.includeMatches,findAllMatches:s=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new Jh(e,{location:n,threshold:r,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class tv extends oi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],a=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+a,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const _u=[XO,tv,ZO,QO,ey,JO,qO,ev],Tg=_u.length,ty=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ny="|";function ry(t,e={}){return t.split(ny).map(n=>{let r=n.trim().split(ty).filter(a=>a&&!!a.trim()),i=[];for(let a=0,s=r.length;a<s;a+=1){const c=r[a];let u=!1,_=-1;for(;!u&&++_<Tg;){const v=_u[_];let g=v.isMultiMatch(c);g&&(i.push(new v(g,e)),u=!0)}if(!u)for(_=-1;++_<Tg;){const v=_u[_];let g=v.isSingleMatch(c);if(g){i.push(new v(g,e));break}}}return i})}const iy=new Set([ev.type,tv.type]);class oy{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:i=Ye.minMatchCharLength,ignoreLocation:a=Ye.ignoreLocation,findAllMatches:s=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:a,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=ry(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let a=0,s=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];s.length=0,a=0;for(let g=0,h=v.length;g<h;g+=1){const m=v[g],{isMatch:C,indices:I,score:b}=m.search(e);if(C){if(a+=1,c+=b,r){const w=m.constructor.type;iy.has(w)?s=[...s,...I]:s.push(I)}}else{c=0,a=0,s.length=0;break}}if(a){let g={isMatch:!0,score:c/a};return r&&(g.indices=s),g}}return{isMatch:!1,score:1}}}const fu=[];function ay(...t){fu.push(...t)}function gu(t,e){for(let n=0,r=fu.length;n<r;n+=1){let i=fu[n];if(i.condition(t,e))return new i(t,e)}return new Jh(t,e)}const Rs={AND:"$and",OR:"$or"},hu={PATH:"$path",PATTERN:"$val"},vu=t=>!!(t[Rs.AND]||t[Rs.OR]),sy=t=>!!t[hu.PATH],ly=t=>!Sr(t)&&Xh(t)&&!vu(t),Rg=t=>({[Rs.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function nv(t,e,{auto:n=!0}={}){const r=i=>{let a=Object.keys(i);const s=sy(i);if(!s&&a.length>1&&!vu(i))return r(Rg(i));if(ly(i)){const u=s?i[hu.PATH]:a[0],_=s?i[hu.PATTERN]:i[u];if(!dr(_))throw new Error(RO(u));const v={keyId:du(u),pattern:_};return n&&(v.searcher=gu(_,e)),v}let c={children:[],operator:a[0]};return a.forEach(u=>{const _=i[u];Sr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return vu(t)||(t=Rg(t)),r(t)}function cy(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:a,score:s})=>{const c=i?i.weight:null;r*=Math.pow(s===0&&c?Number.EPSILON:s,(c||1)*(e?1:a))}),n.score=r})}function uy(t,e){const n=t.matches;e.matches=[],kn(n)&&n.forEach(r=>{if(!kn(r.indices)||!r.indices.length)return;const{indices:i,value:a}=r;let s={indices:i,value:a};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function dy(t,e){e.score=t.score}function _y(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const i=[];return n&&i.push(uy),r&&i.push(dy),t.map(a=>{const{idx:s}=a,c={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(a,c)}),c})}class vo{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new $O(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ud))throw new Error(TO);this._myIndex=n||Qh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){kn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const a=this._docs[r];e(a,r)&&(this.removeAt(r),r-=1,i-=1,n.push(a))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:a,sortFn:s,ignoreFieldNorm:c}=this.options;let u=dr(e)?dr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return cy(u,{ignoreFieldNorm:c}),a&&u.sort(s),Kh(n)&&n>-1&&(u=u.slice(0,n)),_y(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=gu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:_,indices:v}=n.searchIn(a);u&&i.push({item:a,idx:s,matches:[{score:_,value:a,norm:c,indices:v}]})}),i}_searchLogical(e){const n=nv(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:h});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let g=0,h=c.children.length;g<h;g+=1){const m=c.children[g],C=r(m,u,_);if(C.length)v.push(...C);else if(c.operator===Rs.AND)return[]}return v},i=this._myIndex.records,a={},s=[];return i.forEach(({$:c,i:u})=>{if(kn(c)){let _=r(n,c,u);_.length&&(a[u]||(a[u]={idx:u,item:c,matches:[]},s.push(a[u])),_.forEach(({matches:v})=>{a[u].matches.push(...v)}))}}),s}_searchObjectList(e){const n=gu(e,this.options),{keys:r,records:i}=this._myIndex,a=[];return i.forEach(({$:s,i:c})=>{if(!kn(s))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:s[v],searcher:n}))}),u.length&&a.push({idx:c,item:s,matches:u})}),a}_findMatches({key:e,value:n,searcher:r}){if(!kn(n))return[];let i=[];if(Sr(n))n.forEach(({v:a,i:s,n:c})=>{if(!kn(a))return;const{isMatch:u,score:_,indices:v}=r.searchIn(a);u&&i.push({score:_,key:e,value:a,idx:s,norm:c,indices:v})});else{const{v:a,n:s}=n,{isMatch:c,score:u,indices:_}=r.searchIn(a);c&&i.push({score:u,key:e,value:a,norm:s,indices:_})}return i}}vo.version="7.0.0";vo.createIndex=Qh;vo.parseIndex=YO;vo.config=Ye;vo.parseQuery=nv;ay(oy);function ni(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function fy(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function gy(t){return new vo(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function hy(t,e,n){const r=fy(e,n);return t.length===0?r:gy(r).search(t).map(i=>i.item)}function vy(t,e){return ni(t,e).shape}function fn(t,e){const n=vy(t,e);return n?uu(n):void 0}function ma(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return ld(e)}function py(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Ca(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return ld(i)})}function my(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(a=>{if(typeof a!="string")throw Error("cell must be string.");return ld(a)})})}function Nr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function rv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Hh(e)}function Cy(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Hh(r)})}function Ey(t,e){const n=t.shape;return n===void 0?void 0:{...fn(e,Gt),...n}}function iv(t,e,n){return{toolId:t,cells:e,value:n}}function Iy(t,e){const n=Ca(e,"cells"),r=Nr(e);return iv(t,n,r)}function ov(t,e,n){const r=n?t.length-2:0;return t.findIndex((a,s)=>ze(a,e)&&s>=r)}function by(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:ho(r[i-1],e)))return t;const s=ov(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function av(t,e){return{toolId:t,cells:e,lines:[]}}function wy(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ts(n),{...t,cells:n};const r=n.some(a=>ze(a,e)),i=n.some(a=>ho(a,e));return n.length===1&&!r&&i?(n.push(e),Ts(n),{...t,cells:n}):t}function Oy(t,e){const n=t.cells.some(u=>ze(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return pu(t,e);const i=t.lines[r-1],a=i.length;if(a===0&&!n)return t;if(a===0&&n)return pu(t,e);const s=ov(i,e,!1);return(i.length===0?!0:ho(i[a-1],e))?s>=0?(i.length=s+1,{...t,lines:[...t.lines.slice(0,r-1),i]}):n?t:(i.push(e),{...t,lines:[...t.lines.slice(0,r-1),i]}):t}function pu(t,e){return t.cells.some(r=>ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function yy(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function Ly(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function Ay(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function Sy(t,e){const n=Ca(e,"cells"),r=my(e),i=av(t,n);return i.lines=r,i}function sv(t,e,n=""){return{toolId:t,cells:e,value:n}}function xy(t,e,n=!1){const r=Yh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function Ny(t,e){return{...t,value:e}}function Dy(t,e){const n=Ca(e,"cells"),r=Nr(e);return sv(t,n,r)}function lv(t,e,n){return{toolId:t,cells:e,value:n}}function Ty(t,e){const n=Ca(e,"cells"),r=Nr(e);return lv(t,n,r)}function cv(t,e,n){return{toolId:t,cells:e,value:n}}function Ry(t,e){const n=Ca(e,"cells"),r=Nr(e);return cv(t,n,r)}function uv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function ky(t,e){const n=ma(e),r=rv(e),i=Nr(e);return uv(t,n,r,i)}function dv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function Gy(t,e){const n=ma(e),r=Nr(e);return dv(t,n,r)}function _v(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function My(t,e){const n=ma(e),r=rv(e);return _v(t,n,r)}function fv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function $y(t,e){const n=ma(e),r=Cy(e),i=fv(t,n,Be.N);return i.directions=r,i}function gv(t,e,n=""){return{toolId:t,cell:e,value:n}}function Fy(t,e){const n=ma(e),r=Nr(e);return gv(t,n,r)}function Uy(t,e=""){return{toolId:t,value:e}}function Hy(t,e){const n=Nr(e);return Uy(t,n)}function hv(t,e,n=""){return{toolId:t,coords:e,value:n}}function Py(t,e){const n=py(e,"coords"),r=Nr(e);return hv(t,n,r)}function By(t,e){const n=[...t.coords],r=n.length;return(r===0?!0:ho(n[r-1],e))?(n.push(e),{...t,coords:n}):t}function Ea(t,e){return{...t,value:e}}class Ia extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const a of Object.values(r))i.push(Qy(a));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new Ia;if(!e)return n;for(const[r,i]of Object.entries(e)){const a=Fh(r);if(a===void 0||!Object.keys(Gt).includes(a))continue;const s=i;for(const c of s){let u=null;if(Uh(a,Vs)?u=Gy(a,c):Ju(a)?u=My(a,c):ed(a)?u=$y(a,c):td(a)?u=Ry(a,c):kh(a)?u=Ty(a,c):nd(a)?u=Iy(a,c):Mh(a)?u=Py(a,c):rd(a)?u=Sy(a,c):id(a)?u=Dy(a,c):_a(a)?u=ky(a,c):lO(a)?u=Hy(a,c):Gh(a)&&(u=Fy(a,c)),u!==null){n.addToDict(a);const _=xt.uniqueId(),v=Ey(c,a);u.shape=v,n.addConstraint(a,_,u)}}}return n}}function dd(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(ze(a.cell,n))return[s,a]}return null}function Wy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(n.every(c=>a.cells.some(u=>ze(c,u))))return i}return null}function zy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=a.cells[a.cells.length-1];if(ze(n,s))return i}return null}function kg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>ze(c,n)))return[i[0],a]}return null}function Yy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>ze(c,n)))return i;return null}function jy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].coords.some(c=>ze(c,n)))return i;return null}function Gg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>ze(c,n)))return[i[0],a]}return null}function Vy(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,a]of Object.entries(r)){const s=a,c=s.lines.findIndex(u=>u.some((_,v)=>ze(_,n)&&v>0));if(c>=0)return{id:i,arrow:s,matchLineIdx:c}}return null}function Ky(t,e,n,r){const i=t.get(e);if(!i)return null;for(const a of Object.entries(i)){const s=a[1],c=a[0];if(ze(n,s.cell)&&r===s.direction)return c}return null}function Xy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1],s=i[0];if(ze(n,a.cell))return s}return null}function qy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const a=i[1];if(a.cells.some(c=>ze(c,n))||a.cells2.some(c=>ze(c,n)))return[i[0],a]}return null}function Zy(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const a=i[1];r.add(a.value)}return r}function Qy(t){const e={};if("cells"in t){const n=t.cells.map(r=>ws(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ws(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>ws(i)));e.lines=n}if("cell"in t){const n=ws(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=fn(t.toolId,Gt),r=IO(t.shape,n);r&&(e.shape=r)}return e}function Mg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function vv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function mu(t){const e=new Option().style;return e.color=t,e.color!==""}function Zc(t){return vv(t)||mu(t)?t:mu(`#${t}`)?`#${t}`:void 0}function ks(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function pv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Cu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function Jy(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const $g={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function eL(t){return t in $g?$g[t]:null}function mv(t,e,n){if(n===null)return null;const r=eL(n);if(r===null)return null;const[i,a]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/a)}function Qc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class tL{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Qc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Qc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Qc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==mv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ba{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const a=[];for(let s=0;s<n;s++){const c=new tL(i,s);if(r){const u=mv(i,s,e);c.region=u}a.push(c)}this.grid.push(a)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[a,s]=[e.r+i[0],e.c+i[1]],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const a=e.r+i[0],s=e.c+i[1],c=this.getCell(a,s);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return pv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),a=i.length;if(e<0||e>=a||![...r.values()].every(c=>c===a))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:a,c:s}=Xs(r);let[c,u]=[e+a,n+s];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+a,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let a=0;a<this.nCols;a++){const s=this.getCell(r,a);if(!s)continue;const c=s==null?void 0:s.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new ba(e,n);for(let a=0;a<e;a++)for(let s=0;s<n;s++){const c=r[a][s],u=i.getCell(a,s);u&&Object.assign(u,c)}return i}}function nL(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const a=Math.min(e.nRows,e.nCols),s=xt.range(1,a+1);t.valid_digits&&!Jy(s,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function rL(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,i=t.valid_digits,a=t.grid,s=ba.fromJSON(e,n,a),c=Math.min(s.nRows,s.nRows);let u=xt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,v=t.local_constraints,g=Ia.fromJson(v),h=t.bool_constraints,m=lo.fromJson(h);return{puzzleMeta:r,solution:_,grid:s,valid_digits:u,localConstraints:g,globalConstraints:m}}var na=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(na||{});const iL=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),oL=()=>({type:"CLEAR"}),aL=t=>({type:"DRAG",payload:t}),Eu=t=>({type:"SET",payload:t}),sL=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),_d=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),ur=(t,e,n)=>{const r=[...t];return Ts(r),{cells:r,lastCell:e,mode:n}};function lL(t,e,n){if(e===null)return _d();if(n==="RESETTING")return ur([e],e,"SELECTING");const r=t.cells.findIndex(i=>ze(e,i));if(n==="SELECTING")return r!==-1?t:ur([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),ur(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return ur([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),ur(i,null,"DESELECTING")}return t}function cL(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:ur([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),ur(r,null,t.mode)}return t}function uL(t,e){return{...t,cells:e}}function dL(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>ze(e,i))!==-1?ur([...t.cells],e,"SELECTING"):ur([...t.cells,e],e,"SELECTING"):ur([e],e,t.mode)}function Cv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return _d();case"SET":return uL(t,e.payload);case"CLICK":return lL(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return cL(t,e.payload);case"ARROW_KEY":return dL(t,e.payload.cell,e.payload.selectionMode);default:return t}}function oo(t,e){return ze(t.p1,e.p1)&&ze(t.p2,e.p2)||ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function _L(t,e){return ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function Ev(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!ze(t,e)}class qs{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>ze(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>ze(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>ze(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>ze(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>ze(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const a={...e,colorId:n,marker:"O"};this.cellMarkers[r]=a}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>oo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>oo(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&_L(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Ev(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(a=>oo(a,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(a=>oo(a,r));if(i!==-1){const a=this.lineMarkers.splice(i,1);n.push(a[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new qs;return Object.assign(e,this),e}}const Fg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Ug=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ls=t=>({type:"ADD_CELL_MARKER",payload:t}),fL=t=>({type:"SET_CELL_MARKERS",payload:t}),Hg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),gL=t=>({type:"DRAG",payload:t}),fa=t=>({type:"ADD_LINE_MARKERS",payload:t}),Pg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),fd=()=>({type:"RESET"});function hL(t,e){switch(e.type){case"RESET":return new qs;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Iv(){return{_undoStack:[],_redoStack:[]}}const po=Ut(Iv());function vL(){po.update(()=>Iv())}function un(t,e=!0){po.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function pL(t,e=!0){po.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function bv(){po.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function wv(){po.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Gs=Ut(new qs);function _r(t){Gs.update(e=>hL(e,t))}const Ms=Ut(1);function bi(t,e){return{execute:()=>{_r(t)},unExecute:()=>{_r(e)}}}const Si=Ut(_d());function ro(t){t&&Si.update(e=>Cv(e,t))}function Bg(t){t&&Si.update(e=>Cv(e,t))}function mL(t,e){return{execute:()=>{Bg(t)},unExecute:()=>{Bg(e)}}}const co=Ut(),Zs=Ut(go.SETTING),Iu=Ut(!1),Xt=Ut(d.DIGIT),Ov=Ut(d.DIGIT),gd=Ut(xt.range(1,10)),_n=Ut(new ba(9,9)),dn=Ut(ot(_n).getAllCells()),Dr=Ut({}),Tr=Ut(new lo),_t=Ut(new Ia),fr=Ut(null),yv=Ut(void 0),Qs=Ut(void 0);function CL(t){Dr.update(()=>t)}function mo(t){fr.update(()=>t)}function hd(t){yv.update(()=>t)}function Ar(t){ot(Xt)!==t&&(Xt.update(()=>t),mo(null))}function EL(){const t=ot(Ov);t&&Ar(t)}function bu(t){Ov.update(()=>t)}function IL(t){ot(Xt)===t&&Ar(d.DIGIT)}function bL(t){_t.update(e=>(e.removeFromDict(t),e)),hd(void 0)}function Ft(t,e,n){_t.update(r=>(r.updateConstraint(t,e,n),r)),mo({id:e,constraint:n})}function Jc(t){const e=ot(fr);if(t=t?{...t}:void 0,hd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Ft(r,e.id,n)}function wL(t,e){const r=ot(_t).get(e);if(!r)return;const i=r[t];i&&mo({id:t,constraint:i})}function OL(t,e,n){const r=new ba(t,e);_n.update(()=>r),gd.update(()=>n),_t.update(()=>new Ia),Tr.update(()=>new lo),Dr.update(()=>({})),vd(void 0),dn.update(()=>r.getAllCells())}function yL(t){_n.update(()=>t.grid),Dr.update(()=>t.puzzleMeta),vd(t.solution),gd.update(()=>t.valid_digits),_t.update(()=>t.localConstraints),Tr.update(()=>t.globalConstraints),dn.update(()=>t.grid.getAllCells())}function Lv(){const t=ot(_n);t.resetValues(),_n.update(()=>t),dn.update(()=>t.getAllCells()),_r(fd())}function $s(){vL(),_r(fd()),Ar(d.DIGIT);const t=oL();ro(t),hd(void 0),mo(null)}const Av=Ti([Wt,Xt,Zs],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===go.SETTING}),wa=Ti([_n,Dr,Tr,_t,Qs,gd],([t,e,n,r,i,a])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:a,globalConstraints:n,localConstraints:r}));function vd(t){Qs.update(()=>t)}var io=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(io||{});const pd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),md=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),LL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),AL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Wg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Sv(t){_t.update(e=>(e.addToDict(t),e))}function Rr(t,e){const n=ot(yv);n&&(e.shape={...n}),_t.update(r=>(r.addConstraint(e.toolId,t,e),r)),mo({id:t,constraint:e})}function xi(t,e){e&&_t.update(n=>(n.removeConstraint(t,e),n))}function SL(t,e){_t.update(n=>(n.setConstraints(t,e),n))}function zg(t){t.type===io.ADD_LOCAL_CONSTRAINT?Rr(t.payload.id,t.payload.constraint):t.type===io.REMOVE_LOCAL_CONSTRAINT?xi(t.payload.tool,t.payload.id):t.type===io.REMOVE_LOCAL_CONSTRAINT_GROUP?bL(t.payload.tool):t.type===io.RESTORE_LOCAL_CONSTRAINT_GROUP?SL(t.payload.tool,t.payload.constraints):t.type===io.UPDATE_LOCAL_CONSTRAINT&&Ft(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Oa(t,e){return{execute:()=>{zg(t)},unExecute:()=>{zg(e)}}}class Ge{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ge(this.x+e.x,this.y+e.y)}subtract(e){return new Ge(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ge(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ge(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function xL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Mn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ge(i.x,i.y)};function Ns(t,e=!0,n=.5){const r=Ks(t),i=new Ge(r.c+.5,r.r+.5),a=t.distance(i);return!e||a<n?{cell:r,dist:a}:null}function xv(t,e=!0,n=.5){const r=Ks(t),i=new Ge(r.c+.5,r.r+.5),a=t.distance(i),s={r:i.y,c:i.x};return!e||a<n?{cellCenter:s,dist:a}:null}function ia(t,e=!0,n=.5){const r=Ks(t),i=gO(r),s=i.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],_=s[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function oa(t,e=!0,n=.5){const r=Ks(t),i=hO(r),s=i.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=s.indexOf(Math.min(...s)),u=i[c],_=s[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function eu(t,e=!0,n=.5){const r=oa(t,!1);if(!r)return null;const i=ia(t,!1);if(!i)return null;const a=xv(t,!1);if(!a)return null;const s=[a.cellCenter,r.edge,i.corner],u=s.map(I=>new Ge(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),v=u.findIndex(I=>I===_),g=s[v],m=["cell center","edge","corner"][v],C={cellCenter:a.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?C:null}class Co{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Mn(e,n);if(!i)return;this._prevPoint=i;const a=Ns(i,!r,this._margin);if(!a)return;const s=a.cell;this._prevCell=s,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:s,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=Ns(r,!0,this._margin);if(!i)return;const a=i.cell;if(this._prevCell&&ze(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const s={event:e,cell:a,tapCount:this._tapCount};this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Mn(e,n);if(!r)return;const i=Ns(r,!1);if(!i)return;const a=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:a,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Yg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(a=>{const s=new Set(a.highlights);return n.difference(s).size===0}).map(a=>a.toCoords())}function NL(t,e){const n=t.value;return e.getAllCells().filter(a=>a.value===n).map(a=>a.toCoords())}function jg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.cornerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function Vg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(a=>{if(a.value!==null)return!1;const s=new Set(a.centerMarks);return n.difference(s).size===0}).map(a=>a.toCoords())}function DL(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Yg(i,e):i.value!==null?NL(i,e):n===d.CORNER_PM&&i.cornerMarks.length?jg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Vg(i,e):i.cornerMarks.length?jg(i,e):i.centerMarks.length?Vg(i,e):i.highlights.length?Yg(i,e):r:r}function kr(t,e,n,r=!1){if(!(t&&e))return;const i=pd(t,e),a=md(t,n),s=Oa(i,a);un(s,r)}function ai(t,e,n,r=!0){if(!(t&&e))return;const i=md(t,n),a=pd(t,e),s=Oa(i,a);un(s,r)}function wu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const a=Wg(r,t,n),s=Wg(r,t,e),c=Oa(a,s);un(c,i)}function Js(t,e,n){const r=new Co,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=!1,_=!1,v;(C=>{C.DYNAMIC="DYNAMIC",C.BULB="BULB",C.BODY="BODY"})(v||(v={}));let g="DYNAMIC";function h(C){u=!1;const I=C.cell;if(Kt(C.cell,i)){if(g==="DYNAMIC"){const w=ot(_t),L=Vy(w,n,I);if(L){const k=Ay(L.arrow,L.matchLineIdx);wu(L.id,L.arrow,k,n,!0),_=!0;return}const D=Gg(w,n,I);if(!D)u=!0,g="BULB",c=null,a=null;else{g="BODY",c=D[0],a=D[1],a=pu(a,I),Ft(n,c,a);return}}if(g==="BULB"&&!c){c=xt.uniqueId(),a=av(n,[I]),Rr(c,a);return}else g==="BULB"&&c&&a?(a=wy(a,I),Ft(n,c,a)):g==="BODY"&&c&&a&&(a=Oy(a,I),Ft(n,c,a))}}return r.onDragStart=C=>{g="DYNAMIC",h(C)},r.onDrag=C=>{h(C)},r.onDragEnd=()=>{if(_){_=!1;return}g==="BODY"&&c&&a?yy(a)?(a=Ly(a),Ft(n,c,a)):(wu(c,s,a,n),s=a):g==="BULB"&&(kr(c,a,n),s=a),g="DYNAMIC"},r.onTap=C=>{if(u)return;const I=C.cell,b=ot(_t);if(Gg(b,n,I)){ai(c,a,n);return}},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const el=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,wn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,tl=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,TL=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,tn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Eo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Cd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,RL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,kL=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,GL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Io=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,ML=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,$L=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,FL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function UL(t){return Ju(t)?RL():ed(t)?kL():t===d.XV?$L():td(t)?GL():id(t)?el():rd(t)?tl():_a(t)?TL():nd(t)?De():$h(t)?FL():""}const HL={getInputHandler(t,e,n){return Js(t,e,n)},toolId:d.ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:tl(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}},PL={getInputHandler(t,e,n){return Js(t,e,n)},toolId:d.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:tl(),tags:[],categories:[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL]}};d.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,B.LINE,tl(),T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL;function BL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function WL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function zL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function YL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function jL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const VL={Delete:null,Backspace:null};function KL(t,e=10){if(t in VL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function XL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function qL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function ZL(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function QL(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Nv(t){return t==="Backspace"}function bo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Nv(t.key))}function JL(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function eA(t){return JL(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function tA(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ri(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,a=(e==null?void 0:e.maxLength)??3;if(t.length>a)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${c.source}${_.source}$`,"i").test(t))}function Gr(t,e,n){if(t===void 0)return t;let r=t;return Nv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function zt(t,e,n,r){const i=new Co,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const C=ot(_t),I=m.cell;if(Kt(m.cell,a)){if(m.event.shiftKey){const w=kg(C,n,I);w&&(c=w[0],s=w[1],mo({id:c,constraint:s}),_=1)}if(_===0){const w=kg(C,n,I);if(_=w?2:1,w){ai(w[0],w[1],n);return}}if(!s&&_===1){s=sv(n,[I]),c=xt.uniqueId(),Rr(c,s);return}else if(s&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=xy(s,I,w),Ft(n,c,s);return}}}function g(m){const C=ot(fr);if(!C)return;let I=C.constraint;const b=C.id;if(I.value===void 0||!bo(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=Ny(I,w),Ft(n,b,I))}return i.onDragStart=m=>{c=null,s=null,_=0,v(m)},i.onDrag=m=>{v(m)},i.onDragEnd=()=>{c&&s&&kr(c,s,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const Ed=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CAGE_TOOL],On=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CAGE_TOOL];function gn(t,e=5){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function hn(t,e,n){return Gr(t,e,n)}const vn={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},nA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},rA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:wn(),tags:[],categories:On}},iA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:wn(),tags:[],categories:On}},oA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:wn(),tags:[],categories:On}},aA={getInputHandler(t,e,n){return zt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:el(),tags:[],categories:Ed}},sA={getInputHandler(t,e,n){return zt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:el(),tags:[],categories:Ed}},lA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:wn(),tags:[],categories:On}},cA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:wn(),tags:[],categories:On}},uA={getInputHandler(t,e,n){return zt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:d.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:el(),tags:[],categories:Ed}};d.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,wn();const dA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:wn(),tags:[],categories:On}},_A={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:wn(),tags:[],categories:On}};d.AQUARIUM_CAGE,z.CAGE_TOOLS,wn();const fA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:wn(),tags:[],categories:On}},gA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:wn(),tags:[],categories:On}},hA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:wn(),tags:[],categories:On}},vA={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:vn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:wn(),tags:[],categories:On}};var Tn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Tn||{});const pA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Dv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),mA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),CA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),EA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),IA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),bA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),wA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),tu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),OA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),nu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),nl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function yA(t,e,n){if(e===d.DIGIT){const r=t.map(s=>s.value),i=pA(t,n),a=Dv(t,r);return[i,a]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),a=mA(t,n),s=CA(t,r,i);return[a,s]}if(e===d.REGIONS){const r=t.map(s=>s.region),i=EA(t,n),a=IA(t,r);return[i,a]}if(e===d.FOG){const r=t.map(c=>c.fog),a=bA(t,n===1),s=wA(t,r);return[a,s]}if(e===d.HIGHLIGHTS&&n!==null){const r=nu(t,n),i=nu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=nu(t,n),a=nl(t,r);return[i,a]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=tu(t,n,e),i=tu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=tu(t,n,e),a=OA(t,r,e);return[i,a]}}function Xo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),dn.update(i=>i)}function uo(t){switch(t.type){case Tn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;Xo(e,d.DIGIT,n,!0);break}case Tn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;Xo(e,d.GIVEN,n,!0);break}case Tn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;Xo(e,d.REGIONS,n,!0);break}case Tn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;Xo(e,d.HIGHLIGHTS,n,!0);break}case Tn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;Xo(e,r,n,!0);break}case Tn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];dn.update(r=>r);break}case Tn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];dn.update(i=>i);break}case Tn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];dn.update(r=>r);break}case Tn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];dn.update(r=>r);break}case Tn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);dn.update(i=>i);break}case Tn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),dn.update(r=>r);break}case Tn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];dn.update(r=>r);break}}}function LA(t,e){return{execute:()=>{uo(t)},unExecute:()=>{uo(e)}}}const no=new Co;function Kg(t,e){return t.shiftKey?na.SELECTING:t.ctrlKey||t.metaKey||e?na.DYNAMIC:t.altKey?na.DESELECTING:na.RESETTING}function ga(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case d.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case d.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r));case d.FOG:{const a=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===a||n==="different"&&c.fog!==a)}}return t}function AA(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const a=ga(t,i,"any",-1,r(i));if(a.length)return{tool:i,cells:a}}return{tool:e,cells:[]}}function aa(t,e,n,r){const i=yA(e,n,r);if(i){const a=i[0],s=i[1],c=LA(a,s),u=Eu(t),v=[mL(u,u),c];pL(v)}}function SA(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=ga(e,r,"any",-1,!1);if(i.length)return aa(n,i,r,t),!0}else{const i=ga(e,r,"different",t,!0);if(i.length)return aa(n,i,r,t),!0}return!1}function si(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};no.onTap=m=>{if(m.tapCount!==2)return;const I=Kt(m.cell,i)?m.cell:null;if(!I)return;const b=DL(I,e,n),w=Eu(b);ro(w)},no.onDragStart=m=>{const C=Kt(m.cell,i),I=ot(Iu),b=Kg(m.event,I),w=C?m.cell:null,L=iL(w,b);ro(L)},no.onDrag=m=>{const I=Kt(m.cell,i)?m.cell:null,b=aL(I);ro(b)};function a(m){if(!YL(m))return!1;const C=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=Eu(C);return ro(I),!0}function s(m){if(!qL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=QL(m);return Ar(C),!0}return m.type==="keyup"?(EL(),!0):!1}function c(m){if(!XL(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),I=r[(C+1)%r.length];return Ar(I),bu(I),!0}else{const C=ZL(m.code);return Ar(C),bu(C),!0}}function u(m){if(!eA(m))return!1;const C=ot(Si).lastCell;let I=null;if(C!==null){const[L,D]=tA(m),[k,G]=[Mg(C.r+D,0,i.nRows-1),Mg(C.c+L,0,i.nCols-1)];I={r:k,c:G}}else I={r:0,c:0};const b=Kg(m,!1),w=sL(I,b);return ro(w),!0}function _(m){const C=KL(m);if(C===void 0)return!1;const I=ot(Si).cells,b=[];if(I.forEach(w=>{const L=e.getCell(w.r,w.c);L&&b.push(L)}),n===d.FOG)return SA(C,b,I);if(C===null){const{tool:w,cells:L}=AA(b,n);if(L.length)return aa(I,L,w,C),!0}else{let w=ga(b,n,"different",C,!0);if(w.length)return aa(I,w,n,C),!0;if(w=ga(b,n,"equal",C,!0),w.length)return aa(I,w,n,C),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const g=xt.throttle(m=>{no.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&no.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){no.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(a(m)||u(m)||v(m)||s(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}class xA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Mn(e,n);if(!r)return;const i=eu(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=eu(r,!1);if(!i||this._prevCoords&&ze(this._prevCoords,i.target))return;this._isTap=!1;const a={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Ev(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(a);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Mn(e,n);if(!r)return;const i=eu(r,!1);if(!i)return;const a={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&ze(this._prevCoords,i.target)&&(this.onTap&&this.onTap(a),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function NA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new xA;return r.onTap=a=>{const s=a.coords,c=ot(Ms),u=ot(Gs);if(a.type==="cell center"){if(!Bh(s,n))return;const v=u.getCellMarker(s);if(v)if(v.marker==="X"){const g={...s,colorId:c,marker:"O"},h=Ls(g),m=Ls(v),C=bi(h,m);un(C)}else{const g=Hg(s),h=Ls(v),m=bi(g,h);un(m)}else{const g={...s,colorId:c,marker:"X"},h=Ls(g),m=Hg(s),C=bi(h,m);un(C)}}else if(a.type==="edge"){const _=u.getEdgeMarker(s);if(_){const v=Ug(s),g=Fg(_),h=bi(v,g);un(h)}else{const v={...s,colorId:c},g=Fg(v),h=Ug(s),m=bi(g,h);un(m)}}},r.onDrag=a=>{const s=a.coords,c=ot(Ms);if(a.type==="cell center"||a.type==="corner"){const u={p1:a.prevCoords,p2:s,colorId:c},_=gL(u);_r(_)}},r.onDragEnd=()=>{const a=ot(Gs);if(a.mode==="add"){const s=a.draftLine.filter(c=>!a.lineMarkers.some(u=>oo(c,u)));if(s.length){const c=fa(s),u=Pg(s),_=bi(c,u);un(_)}}else{const s=a.lineMarkers.filter(c=>a.draftLine.some(u=>oo(c,u)));if(s.length){const c=Pg(s),u=fa(s),_=bi(c,u);un(_)}}},{blur(){},pointerDown(a){r.pointerDown(a,t)},pointerMove(a){r.pointerMove(a,t)},pointerUp(a){r.pointerUp(a,t)},keyDown(){},keyUp(){}}}const DA={getInputHandler:si,toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},TA={getInputHandler:si,toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},RA={getInputHandler:si,toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[T.CELL_INPUT_TOOL]}},kA={getInputHandler:si,toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},GA={getInputHandler:si,toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},MA={getInputHandler:si,toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[T.CELL_INPUT_TOOL]}},$A={getInputHandler:si,toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[T.CELL_INPUT_TOOL]}},FA={getInputHandler:si,toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[T.CELL_INPUT_TOOL]}},UA={getInputHandler:NA,toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var ft=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(ft||{});class rl{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=Mn(e,n);if(!r)return;const i=oa(r,!1);if(!i)return;const a=ia(r,!1);if(!a)return;const s=Ns(r,!1);if(!s)return;const c=xv(r,!1);if(!c)return;let u;this.target===1?u=a.corner:this.target===0?u=i.edge:this.target===2?u=c.cellCenter:this.target===3?a.dist<i.dist?u=a.corner:u=i.edge:this.target===4?a.dist<c.dist?u=a.corner:u=c.cellCenter:this.target===5?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<a.dist&&i.dist<c.dist?u=i.edge:a.dist<i.dist&&a.dist<c.dist?u=a.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&a.dist<i.dist&&(_="corner");const v=_==="edge"?2*i.idx:2*a.idx+1,g={event:e,cell:s.cell,edge:i.edge,corner:a.corner,closest:u,edgeIdx:i.idx,cornerIdx:a.idx,direction:v};this.onDragStart&&this.onDragStart(g)}}function Id(t,e,n,r){const i=(r==null?void 0:r.targets)??ft.CLOSEST,a=new rl(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=ot(_t),C=h.cell,I=h.closest;if(!Kt(C,s))return;const w=Xy(m,n,I);if(w){xi(n,w);return}c=gv(n,I,""),u=xt.uniqueId(),Rr(u,c)}function v(h){const m=ot(fr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!bo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=Ea(C,b),Ft(n,I,C))}return a.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&a.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,B.CIRCLE,Cd(),T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT;const HA={getInputHandler(t,e,n){return Id(t,e,n,{targets:ft.CLOSEST,valueUpdater:(r,i)=>Gr(r,i,()=>!0),defaultValue:""})},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Cd(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}},PA={getInputHandler(t,e,n){return Id(t,e,n,{targets:ft.CORNER_OR_EDGE,valueUpdater:(r,i)=>Gr(r,i,()=>!0),defaultValue:""})},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Cd(),tags:[],categories:[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT]}};function BA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function WA(t,e){const n=Yh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function zA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function YA(t){for(let e=0;;e++){const n=zA(e);if(!t.has(n))return n}}function jA(t,e,n){const r=new Co,i={nRows:e.nRows,nCols:e.nCols};let a=null,s=null,c=null,u=null,_="cells2",v;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(v||(v={}));let g=0;function h(C){const I=ot(_t),b=C.cell;if(!Kt(C.cell,i))return;const L=qy(I,n,b);if(g===0&&(L?(c=L[0],a=L[1],g=2,u=b,_=a.cells2.some(k=>ze(k,b))?"cells2":"cells"):g=1),g===1&&c===null){c=xt.uniqueId();const D=Zy(I,n),k=YA(D);a=BA(n,[b],k),Rr(c,a);return}else if(g===1&&c&&a){a=WA(a,b),Ft(n,c,a);return}else if(g===2&&c&&a&&u){const D={r:b.r-u.r,c:b.c-u.c},G=(_==="cells2"?a.cells2:a.cells).map(H=>({r:H.r+D.r,c:H.c+D.c}));if(!G.every(H=>Kt(H,i)))return;_==="cells"?a={...a,cells:G}:a={...a,cells2:G},u=b,Ft(n,c,a)}}return r.onDragStart=C=>{c=null,a=null,g=0,u=null,h(C)},r.onDrag=C=>{h(C)},r.onDragEnd=()=>{c&&a&&(g===1?kr(c,a,n):g===2&&wu(c,s,a,n),s=a)},r.onTap=()=>{c&&g!==1&&(xi(n,c),c=null,a=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}const VA={getInputHandler(t,e,n){return jA(t,e,n)},toolId:d.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[T.CLONE_CONSTRAINT,T.LOCAL_CONSTRAINT]}};class Tv{constructor(){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevCoord",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_margin")}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCoord===null,i=Mn(e,n);if(!i)return;const a=ia(i,!r);if(!a)return;this._prevCoord=a.corner;const s={event:e,cellCorner:a.corner};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=ia(r);if(!i||this._prevCoord&&ze(i.corner,this._prevCoord))return;const a={event:e,cellCorner:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(a)}pointerUp(e,n){const r=Mn(e,n);if(!r)return;const i=ia(r);if(!i)return;const a={event:e,cellCorner:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(a)),this._isTap&&this.onTap&&this.onTap(a)}}function li(t,e,n,r){const i=new Tv,a={nRows:e.nRows,nCols:e.nCols};let s;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(g){const h=ot(_t),m=g.cellCorner,C=Wh(m);if(!C.every(w=>Kt(w,a)))return;let b=null;if(c===0&&(b=zy(h,n,m),c=b?2:1),b&&c===2){const w=b[0];ai(w,b[1],n);return}else if(c===1){const w=lv(n,C,r==null?void 0:r.defaultValue),L=xt.uniqueId();kr(L,w,n,!0)}}function _(g){const h=ot(fr);if(!h)return;let m=h.constraint;const C=h.id;if(m.value===void 0||!bo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Ea(m,I),Ft(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function il(t,e=3){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ol(t,e,n){return Gr(t,e,n)}function KA(t,e){function n(r){return!0}return Gr(t,e,n)}const XA={getInputHandler(t,e,n){return li(t,e,n,{valueUpdater:(r,i)=>KA(r,i),defaultValue:""})},toolId:d.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:ML(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},qA={getInputHandler(t,e,n){return li(t,e,n,{valueUpdater:(r,i)=>ol(r,i,il),defaultValue:""})},toolId:d.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Io(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL]}},ZA={getInputHandler(t,e,n){return li(t,e,n)},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Io(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},QA={getInputHandler(t,e,n){return li(t,e,n,{valueUpdater:(r,i)=>ol(r,i,il),defaultValue:""})},toolId:d.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Io(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,B.CIRCLE,Io(),T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL;const JA={getInputHandler(t,e,n){return li(t,e,n,{defaultValue:"X"})},toolId:d.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Io(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}},eS={getInputHandler(t,e,n){return li(t,e,n,{defaultValue:""})},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Io(),categories:[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL]}};function ye(t,e,n,r){const i=new Co,a={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const h=g.cell;Kt(g.cell,a)&&(c=by(c,h,s),Ft(n,u,c))}return i.onDragStart=g=>{u=xt.uniqueId(),c=iv(n,[],r==null?void 0:r.defaultValue),Rr(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?xi(n,u):u&&c&&kr(u,c,n,!1),u=null},i.onTap=g=>{const h=g.cell,m=ot(_t),C=Yy(m,n,h);if(C){const[I,b]=C;ai(I,b,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function We(t,e,n,r,i){const a=new Co,s={nRows:e.nRows,nCols:e.nCols};let c;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(h){const m=ot(_t),C=h.cell;if(!Kt(h.cell,s))return;const b=dd(m,n,C);if(u===0&&(u=b?2:1),b&&u===2){const[w,L]=b;ai(w,L,n)}else if(u===1){const w=dv(n,C,i==null?void 0:i.defaultValue),L=xt.uniqueId();kr(L,w,n,!0)}}a.onDragStart=h=>{u=0,_(h)},a.onDrag=h=>{_(h)};function v(h){const m=ot(fr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!bo(h)||!(i!=null&&i.valueUpdater))return;const b=i.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=Ea(C,b),Ft(n,I,C))}return{pointerDown:h=>{h.button===0&&a.pointerDown(h,t)},pointerMove:h=>{a.pointerMove(h,t)},pointerUp:h=>{a.pointerUp(h,t)},keyDown:h=>{v(h)},keyUp:()=>{}}}class tS{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Mn(e,n);if(!r)return;const i=oa(r,!0,.35);if(!i)return;this._prevCellEdge=i.edge;const a={event:e,edge:i.edge};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Mn(e,n);if(!r)return;const i=oa(r,!0,.35);if(!i||this._prevCellEdge&&ze(i.edge,this._prevCellEdge))return;const a={event:e,edge:i.edge};this._prevCellEdge=i.edge,this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Mn(e,n);!r||oa(r,!0,.35)}}function pn(t,e,n,r){const i=new tS,a={nRows:e.nRows,nCols:e.nCols};let s;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(s||(s={}));let c=0;function u(g){const h=ot(_t),m=g.edge,C=sd(m);if(!C.every(w=>Kt(w,a)))return;let b=null;if(c===0&&(b=Wy(h,n,C),c=b?2:1),b&&c===2){const w=b[0];ai(w,b[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",L=cv(n,C,w),D=xt.uniqueId();kr(D,L,n,!0)}}function _(g){const h=ot(fr);if(!h)return;let m=h.constraint;const C=h.id;if(m.value===void 0||!bo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Ea(m,I),Ft(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function bd(t,e,n,r=ft.CORNER_OR_EDGE){const i=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],a=new rl(r),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function g(C){const I=ot(_t),b=C.cell;if(!Kt(C.cell,s))return;C.event.altKey&&(v=2);const L=dd(I,n,b),D=ad(C.direction);if(L){[u,c]=L,c.direction===D||v===2?ai(u,c,n):(c={...c,direction:D},Ft(n,u,c));return}else v!==2&&(c=_v(n,b,D),u=xt.uniqueId(),kr(u,c,n,!0))}function h(C){if(!c||!u||!jL(C))return;const b=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[b]},Ft(n,u,c)}return a.onDragStart=C=>{v=0,g(C)},{pointerDown:C=>{C.button===0&&a.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{h(C)},keyUp:()=>{}}}function nS(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function gr(t,e,n,r=ft.CORNER_OR_EDGE){const i=new rl(r),a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=ot(_t),C=h.cell;if(!Kt(h.cell,a))return;h.event.altKey&&(_=2);const b=ad(h.direction),w=dd(m,n,C);if(w){if(c=w[0],s=w[1],_===2)xi(n,w[0]);else{const L=nS(s.directions,b);L.length?(s={...s,directions:L},Ft(n,c,s)):xi(n,c)}return}else _!==2&&(s=fv(n,C,b),c=xt.uniqueId(),Rr(c,s))}return i.onDragStart=h=>{_=0,v(h)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const Rv=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.EDGE_TOOL],Zn=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.EDGE_TOOL],ya=.15,kv=.02,ki={type:B.CIRCLE,r:{editable:!0,value:ya,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:kv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}};function rS(t,e=1){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function wo(t,e=3){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function iS(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Gi(t,e,n){return Gr(t,e,n)}function oS(t,e){return t===void 0?"V":iS(e)?e.toUpperCase():t}function aS(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Gv(t,e){return t===void 0?"<":aS(e)?e:t}const sS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,rS)})},toolId:d.RATIO,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:ya},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Zn}},lS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,wo)})},toolId:d.DIFFERENCE,order:z.EDGE_TOOLS,shape:ki,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Zn}},cS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,wo)})},toolId:d.EDGE_SUM,order:z.EDGE_TOOLS,shape:{...ki,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Zn}},uS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:oS,defaultValue:"V"})},toolId:d.XV,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:ya},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Zn}},dS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:Gv,defaultValue:"<"})},toolId:d.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Zn}},_S={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,wo)})},toolId:d.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{...ki,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Zn}},fS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,wo)})},toolId:d.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{...ki,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Zn}},gS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,wo)})},toolId:d.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{...ki,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Zn}},hS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:ya},strokeWidth:{editable:!1,value:kv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Zn}},vS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:ki,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Zn}},pS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:ya},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Zn}},mS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:B.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Rv}},CS={getInputHandler(t,e,n){return pn(t,e,n)},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:z.EDGE_TOOLS,shape:ki,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Rv}},ES={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:Gv,defaultValue:"<"})},toolId:d.ONE_WAY_DOOR,order:z.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Zn}};function Tt(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??ft.CORNER_OR_EDGE,a=new rl(i),s={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=ot(_t),C=h.cell,I=h.direction,b=ad(I);if(Kt(C,s))return;const L=zh(C,b);if(!Kt(L,s))return;const k=Ky(m,n,C,b);if(k){xi(n,k);return}c=uv(n,C,b,""),u=xt.uniqueId(),Rr(u,c)}function v(h){const m=ot(fr);if(!m)return;let C=m.constraint;const I=m.id;if(C.value===void 0||!bo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(C==null?void 0:C.value,h.key);b!==void 0&&b!==C.value&&(C=Ea(C,b),Ft(n,I,C))}return a.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&a.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}const Oo=[T.OUTSIDE_CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_CORNER_TOOL,T.OUTSIDE_DIRECTION_TOOL];function yo(t,e=5){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Mi(t,e,n){return Gr(t,e,n)}const Lo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},IS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,yo),defaultValue:"",cornerOrEdge:ft.CORNER})},toolId:d.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Lo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Eo(),tags:[],categories:Oo}},bS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,yo),defaultValue:"",cornerOrEdge:ft.CORNER})},toolId:d.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Lo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Eo(),tags:[],categories:Oo}},wS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,yo),defaultValue:"",cornerOrEdge:ft.CORNER})},toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:Lo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Eo(),tags:[],categories:Oo}},OS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,yo),defaultValue:"",cornerOrEdge:ft.CORNER})},toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Lo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Eo(),tags:[],categories:Oo}},yS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,yo),defaultValue:"",cornerOrEdge:ft.CORNER})},toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Lo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Eo(),tags:[],categories:Oo}},LS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,yo),defaultValue:"",cornerOrEdge:ft.CORNER})},toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Lo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Eo(),tags:[],categories:Oo}},nn=[T.OUTSIDE_EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_EDGE_TOOL,T.OUTSIDE_DIRECTION_TOOL];function qt(t,e=5){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function rn(t,e,n){return Gr(t,e,n)}const on={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},AS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:tn(),tags:[],categories:nn}},SS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.SANDWICH_SUM_XOR_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:tn(),tags:[],categories:nn}},xS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:tn(),tags:[],categories:nn}},NS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:tn(),tags:[],categories:nn}},DS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:tn(),tags:[],categories:nn}},TS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:tn(),tags:[],categories:nn}},RS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:tn(),tags:[],categories:nn}},kS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:tn(),tags:[],categories:nn}},GS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:tn(),tags:[],categories:nn}},MS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.X_INDEX,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:tn(),tags:[],categories:nn}},$S={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:tn(),tags:[],categories:nn}};d.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,tn();const FS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.EDGE})},toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:tn(),tags:[],categories:nn}},US={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.BOTH})},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:tn(),tags:[],categories:nn}},HS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.BOTH})},toolId:d.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:tn(),tags:[],categories:nn}},PS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>rn(r,i,qt),defaultValue:"",cornerOrEdge:ft.BOTH})},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:on,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:tn(),tags:[],categories:nn}},BS={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},WS={getInputHandler(t,e,n){return bd(t,e,n)},toolId:d.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},zS={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},YS={getInputHandler(t,e,n){return pn(t,e,n,{valueUpdater:(r,i)=>Gi(r,i,wo)})},toolId:d.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},jS={getInputHandler(t,e,n){return li(t,e,n,{valueUpdater:(r,i)=>ol(r,i,il),defaultValue:""})},toolId:d.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},VS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},KS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},XS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL]}},qS={getInputHandler(t,e,n){return zt(t,e,n,{valueUpdater:(r,i)=>hn(r,i,gn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL]}},ZS={getInputHandler(t,e,n){return Js(t,e,n)},toolId:d.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT]}},QS={getInputHandler(t,e,n){return Tt(t,e,n,{valueUpdater:(r,i)=>Mi(r,i,qt),defaultValue:"",cornerOrEdge:ft.CORNER_OR_EDGE})},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_DIRECTION_TOOL]}},Ao=[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT,T.DIAGONAL_CONSTRAINT],JS={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ex={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},tx={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},nx={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Ao}},_x={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Ao}},fx={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Ao}},gx={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Ao}},hx={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Ao}},vx={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Ao}},px={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},mx={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Cx={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},Ex={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ix={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},bx={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},wx={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ox={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},yx={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Lx={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Ax={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Sx={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},xx={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Nx={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Dx={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Tx={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},Rx={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},kx={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Mx={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands. Digits may not repeat within an island.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Ux={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},eN={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},tN={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},nN={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},rN={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},iN={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},oN={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},aN={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},sN={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},lN={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},cN={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},uN={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},dN={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},_N={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},fN={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},gN={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},hN={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},Fe=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LINE_TOOL],Mr=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.DOUBLE_ENDED_LINE_CONSTRAINT,T.LINE_TOOL],La={description:"",usage:De(),tags:[],categories:Fe},vN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...La,description:"Numbers along a thermometer must increase from the bulb end."}},pN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:d.CUSTOM_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...La,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},mN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...La,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},CN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...La,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},EN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...La,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},IN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PALINDROME,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Fe}},bN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Fe}},wN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Fe}},ON={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Fe}},yN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},LN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Fe}},AN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Fe}},SN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Fe}},xN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Fe}},NN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Fe}},DN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Fe}},TN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Fe}},RN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Fe}},kN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Fe}},GN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Fe}},MN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Fe}},$N={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Fe}},FN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Fe}},UN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Fe}},HN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Fe}},PN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Fe}},BN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Fe}},WN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Fe}},zN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Fe}},YN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Fe}},jN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Fe}},VN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Fe}},KN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Fe}},XN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Fe}},qN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.AMBIGUOUS_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:De(),tags:[],categories:Fe}},ZN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Fe}},QN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.XV_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Fe}},JN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Fe}},e2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Fe}},t2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Fe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,B.LINE,De();const n2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Fe}},r2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Fe}},i2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Fe}},o2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Fe}},a2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Fe}},s2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Fe}},l2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:Fe}};d.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,B.THERMO_WITH_CIRCLE,De();const c2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Fe}},u2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Fe}},d2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Fe}},_2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Fe}},f2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Fe}},g2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Fe}},h2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:Mr}},v2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:Mr}},p2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:Mr}},m2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:Mr}},C2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:Mr}},E2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:Mr}},I2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:Mr}},b2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Fe}},w2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Mr}},O2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Mr}},tt=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_SHAPE_TOOL],So=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_COLOR_TOOL];function ci(t,e=3){return Ri(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function y2(t){return t===""||t==="1"||t==="2"||t==="3"}function $r(t,e,n){return Gr(t,e,n)}const L2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:tt}},A2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:tt}},S2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},x2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}};d.PRIME_CELL,z.CELL_COLOR_TOOL;const N2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},D2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},T2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:tt}},R2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},k2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},G2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:tt}},M2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:"9"})},toolId:d.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:tt}},$2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:tt}},F2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:So}},U2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:So}},H2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:So}},P2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:So}},B2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:So}},W2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:tt}},z2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:tt}},Y2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:tt}},j2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:tt}},V2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,y2),defaultValue:""})},toolId:d.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:tt}},K2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:tt}},X2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:tt}},q2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},Z2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},Q2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:tt}},J2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:tt}},eD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:tt}},tD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:tt}},nD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:tt}},rD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:tt}},iD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:tt}},oD={getInputHandler(t,e,n){return bd(t,e,n)},toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},aD={getInputHandler(t,e,n){return bd(t,e,n)},toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT]}},sD={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:tt}},lD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:tt}},cD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:tt}},uD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:tt}},dD={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:tt}},_D={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:tt}},fD={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:tt}},gD={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:tt}},hD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIRECTED_PATH_START,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:tt}},vD={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIRECTED_PATH_END,order:z.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:tt}},pD={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.TELEPORT,order:z.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:tt}},mD={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ci),defaultValue:""})},toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:tt}},Fr=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_MULTIARROW_TOOL],$i={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},CD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Fr}},ED={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Fr}},ID={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Fr}},bD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Fr}},wD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Fr}},OD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Fr}},yD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Fr}},LD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Fr}},AD={getInputHandler(t,e,n){return gr(t,e,n)},toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:z.CELL_SHAPE_TOOL,shape:$i,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Fr}},SD={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},xD={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},ND={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const DD={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},TD={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const RD={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};function kD(t,e,n,r){const i=new Tv,a={nRows:e.nRows,nCols:e.nCols};let s=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=ot(_t),C=h.cellCorner;if(!Bh(C,a))return;let b=null;if(_===0&&(b=jy(m,n,C),_=b?2:1),b){const w=b[0];ai(w,b[1],n);return}if(!s&&_===1){c=xt.uniqueId(),s=hv(n,[C],r==null?void 0:r.defaultValue),Rr(c,s);return}else if(s&&c&&_===1){s=By(s,C),Ft(n,c,s);return}}return i.onDragStart=h=>{c=null,s=null,_=0,h.event.shiftKey&&(_=1),v(h)},i.onDrag=h=>{v(h)},i.onDragEnd=()=>{c&&s&&kr(c,s,n,!1),c=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const GD=[T.CORNER_LINE_CONSTRAINT,T.CORNER_LINE_TOOL,T.LOCAL_CONSTRAINT],MD={getInputHandler(t,e,n){return kD(t,e,n)},toolId:d.MAZE_WALL,order:z.EDGE_TOOLS,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:GD}},Gt={[d.GIVEN]:DA,[d.DIGIT]:TA,[d.REGIONS]:RA,[d.OUTSIDE]:$A,[d.CORNER_PM]:kA,[d.CENTER_PM]:GA,[d.HIGHLIGHTS]:MA,[d.FOG]:FA,[d.PEN_TOOL]:UA,[d.SUDOKU_RULES_DO_NOT_APPLY]:JS,[d.LEAVE_EMPTY_CELLS_EMPTY]:ex,[d.LITS]:rx,[d.HEXED_SUDOKU]:tx,[d.FILLOMINO]:nx,[d.ANTIKNIGHT]:ix,[d.ANTIKING]:ax,[d.ANTI_GIRAFFE]:ox,[d.DISJOINT_GROUPS]:sx,[d.TANGO]:lx,[d.NONCONSECUTIVE]:cx,[d.NONRATIO]:ux,[d.ANTI_ENTROPY]:px,[d.GLOBAL_INDEXING_COLUMN]:mx,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:Cx,[d.NEGATIVE_DIAGONAL]:dx,[d.POSITIVE_DIAGONAL]:_x,[d.NEGATIVE_ANTIDIAGONAL]:fx,[d.POSITIVE_ANTIDIAGONAL]:gx,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:hx,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:vx,[d.ALL_RATIOS_GIVEN]:Ex,[d.ALL_DIFFERENCES_GIVEN]:Ix,[d.ALL_X_GIVEN]:bx,[d.ALL_V_GIVEN]:wx,[d.ALL_XV_GIVEN]:Ox,[d.ALL_RADARS_GIVEN]:yx,[d.ALL_XY_DIFFERENCES_GIVEN]:Lx,[d.ALL_INDEXING_COLUMN_GIVEN]:Ax,[d.ALL_INDEXING_ROW_GIVEN]:Sx,[d.ALL_YIN_YANG_KROPKI_GIVEN]:xx,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:Nx,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Tx,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Rx,[d.CAVE_CELLS_ARE_ODD]:iN,[d.CAVE_WALLS_ARE_EVEN]:rN,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:tN,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:nN,[d.DOUBLERS]:DD,[d.NEGATORS]:TD,[d.NEXUS]:RD,[d.UNKNOWN_REGIONS]:kx,[d.YIN_YANG]:Gx,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Mx,[d.NURIMISAKI]:$x,[d.NURIKABE]:Fx,[d.TWO_CONTIGUOUS_REGIONS]:Ux,[d.SASHIGANE]:Hx,[d.GOLDILOCKS_ZONE]:Px,[d.CELL_CENTER_LOOP_NO_TOUCHING]:Bx,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Wx,[d.NOT_LOOP_SIZED_REGIONS]:jx,[d.MODULAR_LOOP]:Vx,[d.CAVE]:Jx,[d.CAVE_LITS]:oN,[d.RENBAN_CAVES]:aN,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:eN,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:Dx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:zx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:Yx,[d.GALAXIES]:lN,[d.TWO_SYMMETRIC_GALAXIES]:dN,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:cN,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:uN,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:_N,[d.PENTOMINO_TILLING]:fN,[d.TILLING_NO_EMPTY_CELLS]:gN,[d.LITS_BLACK_WHITE_STAR_BATTLE]:hN,[d.MAZE_DIRECTED_PATH]:Kx,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:Xx,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:Qx,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:qx,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:Zx,[d.ODD]:L2,[d.EVEN]:A2,[d.MINIMUM]:S2,[d.MAXIMUM]:x2,[d.ODD_MINESWEEPER]:N2,[d.EVEN_MINESWEEPER]:D2,[d.WATCHTOWER]:R2,[d.NOT_WATCHTOWER]:k2,[d.FARSIGHT]:G2,[d.RADAR]:M2,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:T2,[d.ORTHOGONAL_SUM]:$2,[d.DIAGONALLY_ADJACENT_SUM]:W2,[d.INDEXING_COLUMN]:F2,[d.INDEXING_ROW]:U2,[d.LOW_DIGIT]:H2,[d.HIGH_DIGIT]:P2,[d.FRIENDLY_CELL]:B2,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:z2,[d.SANDWICH_ROW_COL_COUNT]:Y2,[d.COUNTING_CIRCLES]:j2,[d.COLORED_COUNTING_CIRCLES]:V2,[d.UNIQUE_CELLS]:K2,[d.YIN_YANG_MINESWEEPER]:X2,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:q2,[d.YIN_YANG_SEEN_SHADED_CELLS]:Z2,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:Q2,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:J2,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:eD,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:tD,[d.SEEN_REGION_BORDERS_COUNT]:nD,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:rD,[d.SASHIGANE_BEND_REGION_COUNT]:iD,[d.SASHIGANE_REGION_SUM]:sD,[d.CELL_ON_THE_LOOP]:lD,[d.CELL_NOT_ON_THE_LOOP]:cD,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:uD,[d.CAVE_CLUE]:_D,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:dD,[d.YIN_YANG_FILLOMINO_PARITY]:sN,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:fD,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:gD,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:mD,[d.DIRECTED_PATH_START]:hD,[d.DIRECTED_PATH_END]:vD,[d.TELEPORT]:pD,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:oD,[d.THERMO_SIGHTLINE_LOOP_ARROW]:aD,[d.HOT_ARROWS]:LD,[d.COLD_ARROWS]:yD,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:OD,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:bD,[d.YIN_YANG_COUNT_SHADED_CELLS]:wD,[d.LOOP_CELL_COUNT_ARROWS]:ID,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:ED,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:CD,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:AD,[d.DIFFERENCE]:lS,[d.RATIO]:sS,[d.XV]:uS,[d.EDGE_INEQUALITY]:dS,[d.EDGE_SUM]:cS,[d.EDGE_PRODUCT]:_S,[d.EDGE_MODULO]:fS,[d.EDGE_FACTOR]:gS,[d.XY_DIFFERENCES]:hS,[d.YIN_YANG_WHITE_KROPKI]:vS,[d.YIN_YANG_KROPKI]:pS,[d.UNKNOWN_REGION_BORDER]:mS,[d.EDGE_CAVE_ONE_OF_EACH]:CS,[d.ONE_WAY_DOOR]:ES,[d.QUADRUPLE]:XA,[d.CORNER_SUM]:qA,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:ZA,[d.CORNER_EVEN_COUNT]:QA,[d.PRODUCT_SQUARE]:JA,[d.EQUAL_DIAGONAL_DIFFERENCES]:eS,[d.THERMOMETER]:vN,[d.FUZZY_THERMOMETER]:mN,[d.SLOW_THERMOMETER]:CN,[d.CUSTOM_THERMOMETER]:pN,[d.ROW_CYCLE_THERMOMETER]:EN,[d.PALINDROME]:IN,[d.RENBAN_LINE]:bN,[d.DOUBLE_RENBAN_LINE]:wN,[d.RENRENBANBAN_LINE]:ON,[d.N_CONSECUTIVE_RENBAN_LINE]:yN,[d.NABNER_LINE]:LN,[d.WHISPERS_LINE]:AN,[d.DUTCH_WHISPERS]:SN,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:xN,[d.RENBAN_OR_WHISPERS_LINE]:NN,[d.RENBAN_OR_NABNER_LINE]:DN,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:TN,[d.INDEX_LINE]:RN,[d.UNIQUE_VALUES_LINE]:kN,[d.REPEATED_DIGITS_LINE]:KN,[d.REGION_SUM_LINE]:GN,[d.SUM_LINE]:MN,[d.XV_LINE]:QN,[d.ROW_SUM_LINE]:JN,[d.AT_LEAST_X_LINE]:e2,[d.SUPERFUZZY_ARROW]:XN,[d.AMBIGUOUS_ARROW]:qN,[d.HEADLESS_ARROW]:ZN,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:t2,[d.PRODUCT_LINE]:n2,[d.ADJACENT_MULTIPLES_LINE]:r2,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:i2,[d.LOOK_AND_SAY_LINE]:o2,[d.ARITHMETIC_SEQUENCE_LINE]:$N,[d.ZIPPER_LINE]:a2,[d.SEGMENTED_SUM_LINE]:s2,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:l2,[d.SAME_PARITY_LINE]:FN,[d.MODULAR_LINE]:UN,[d.UNIMODULAR_LINE]:HN,[d.MODULAR_OR_UNIMODULAR_LINE]:PN,[d.ODD_EVEN_OSCILLATOR_LINE]:BN,[d.HIGH_LOW_OSCILLATOR_LINE]:WN,[d.ENTROPIC_LINE]:zN,[d.ENTROPIC_OR_MODULAR_LINE]:YN,[d.INDEXING_COLUMN_IS_X_LINE]:jN,[d.INDEXING_ROW_IS_X_LINE]:VN,[d.YIN_YANG_INDEXING_LINE_COLORING]:f2,[d.YIN_YANG_SHADED_WHISPERS_LINE]:c2,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:u2,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:d2,[d.YIN_YANG_REGION_SUM_LINE]:_2,[d.GOLDILOCKS_ZONE_REGION_SUM]:g2,[d.BETWEEN_LINE]:h2,[d.LOCKOUT_LINE]:v2,[d.PARITY_COUNT_LINE]:m2,[d.TIGHTROPE_LINE]:p2,[d.DOUBLE_ARROW_LINE]:C2,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:E2,[d.SPLIT_PEAS]:I2,[d.DOUBLERS_THERMOMETER]:b2,[d.DOUBLERS_BETWEEN_LINE]:w2,[d.DOUBLERS_DOUBLE_ARROW_LINE]:O2,[d.ARROW]:HL,[d.AVERAGE_ARROW]:PL,[d.MAZE_WALL]:MD,[d.KILLER_CAGE]:nA,[d.UNIQUE_DIGITS_CAGE]:rA,[d.INVERTED_KILLER_CAGE]:iA,[d.SUM_CAGE]:oA,[d.SUM_CAGE_LOOK_AND_SAY]:aA,[d.PARITY_BALANCE_CAGE]:sA,[d.DIVISIBLE_KILLER_CAGE]:lA,[d.SPOTLIGHT_CAGE]:cA,[d.PUTTERIA_CAGE]:uA,[d.MULTISET_CAGE]:dA,[d.VAULTED_CAGE]:_A,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:fA,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:gA,[d.DOUBLERS_KILLER_CAGE]:hA,[d.NEGATORS_KILLER_CAGE]:vA,[d.CLONE_REGION]:VA,[d.SANDWICH_SUM]:AS,[d.X_SUM]:xS,[d.SHORTSIGHTED_X_SUM]:NS,[d.SHIFTED_X_SUM]:DS,[d.BROKEN_X_SUM]:TS,[d.X_SUM_SKYSCRAPERS]:RS,[d.BATTLEFIELD]:kS,[d.SKYSCRAPERS]:GS,[d.X_INDEX]:MS,[d.SANDWICH_SUM_XOR_X_SUM]:SS,[d.RISING_STREAK]:$S,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:FS,[d.OUTSIDE_CONSECUTIVE_SUM]:US,[d.LOOPWICHES]:HS,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:PS,[d.LITTLE_KILLER_SUM]:IS,[d.LITTLE_KILLER_PRODUCT]:bS,[d.LITTLE_KILLER_LOOK_AND_SAY]:wS,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:yS,[d.X_OMIT_LITTLE_KILLER_SUM]:OS,[d.NEGATORS_LITTLE_KILLER_SUM]:LS,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:HA,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:PA,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:SD,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:xD,[d.FORBIDDEN_KNIGHT_SUM]:ND,[d.COSMETIC_CELL_SHAPE]:BS,[d.COSMETIC_CELL_ARROW]:WS,[d.COSMETIC_CELL_MULTI_ARROW]:zS,[d.COSMETIC_EDGE]:YS,[d.COSMETIC_CORNER]:jS,[d.COSMETIC_LINE]:VS,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:KS,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:XS,[d.COSMETIC_ARROW]:ZS,[d.COSMETIC_CAGE]:qS,[d.COSMETIC_OUTSIDE_DIRECTION]:QS};var $D=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Mv(t){var e=$D();N(t,e)}var FD=ne('<button class="remove-button svelte-17rdl63"><!></button>');function UD(t,e){let n=F(e,"onTrash",8,()=>{});var r=FD(),i=K(r);Mv(i),Y(r),Me("click",r,Xn(function(...a){var s;(s=n())==null||s.apply(this,a)})),N(t,r)}var HD=ne('<input type="radio" class="radio-select-button svelte-3561wl">'),PD=ne('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function sa(t,e){var J,re;le(e,!1);const n=rt(),r=()=>ve(Xt,"$toolStore",n),i=[];let a=F(e,"elementInfo",8),s=F(e,"onClick",12,void 0),c=F(e,"onTrash",8,void 0);const u=a().toolId,_=a().permanent??!1,v=((J=a().menu)==null?void 0:J.name)??a().toolId,g=!((re=a().meta)!=null&&re.categories.includes(T.GLOBAL_CONSTRAINT)),h=`label-${v}`;g&&s(()=>{Ar(u)});function m(){var me,Ce;const Z=(me=a().meta)==null?void 0:me.description,se=((Ce=a().meta)==null?void 0:Ce.usage)??UL(u);let be;return Z&&Z.length&&(be=Z),se.length&&(be?be=be+`

`+se:be=se),be}fe();var C=PD(),I=K(C);{var b=Z=>{var se=HD();Vt(se),S(se,"id",h),se.value=(se.__value=u)==null?"":u,js(i,[],se,()=>r(),be=>va(Xt,be)),N(Z,se)};ge(I,Z=>{g&&Z(b)})}var w=P(I,2);ee(()=>S(w,"title",m())),S(w,"aria-labelledby",h);var L=K(w),D=K(L),k=K(D);{var G=Z=>{UD(Z,{get onTrash(){return c()}})};ge(k,Z=>{_||Z(G)})}Y(D);var U=P(D,2);S(U,"for",h),U.textContent=v,Y(L);var H=P(L,2),X=K(H);ut(X,e,"default",{}),Y(H),Y(w),Y(C),ee(()=>Ot(C,"checked",u===r())),Me("click",w,Xn(function(...Z){var se;(se=s())==null||se.apply(this,Z)})),N(t,C),ce()}function $v(t,e){le(e,!1);const n=rt(),r=()=>ve(_t,"$localConstraintsStore",n);let i=F(e,"toolId",8),a=F(e,"elementHandlers",8);const s=()=>{IL(i());const u=r().get(i());if(!u)return;const _=LL(i()),v=AL(i(),u),g=Oa(_,v);un(g)};fe();var c=Xe(()=>ni(i(),a()));sa(t,{get elementInfo(){return p(c)},onTrash:s}),ce()}var BD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function WD(t){var e=BD();N(t,e)}var zD=ne('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function al(t,e){let n=F(e,"isOpen",8,!0);var r=zD(),i=K(r);ut(i,e,"default",{}),Y(r),ee(()=>{S(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var YD=ne('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function jD(t,e){le(e,!1);const n=rt(),r=()=>ve(co,"$svgRefStore",n),i=()=>ve(_t,"$localConstraintsStore",n),a=()=>ve(fr,"$currentConstraintStore",n),s=R();let c=F(e,"constraintId",8),u=F(e,"toolId",8);function _(){wL(c(),u()),r().focus()}function v(){const w=i().getConstraint(u(),c());if(!w)return;const L=md(c(),u()),D=pd(c(),w),k=Oa(L,D);un(k)}M(()=>a(),()=>{var w;x(s,(w=a())==null?void 0:w.id)}),Ee(),fe();var g=YD(),h=K(g),m=K(h);Y(h);var C=P(h,2),I=K(C),b=K(I);Mv(b),Y(I),Y(C),Y(g),ee(()=>{Ot(g,"active",c()===p(s)),et(m,`ID: ${c()??""}`)}),Me("click",I,Xn(v)),Me("click",g,_),N(t,g),ce()}var VD=ne('<div class="constraint-list svelte-w5npcu"></div>');function Fv(t,e){le(e,!1);const n=rt(),r=()=>ve(_t,"$localConstraintsStore",n),i=()=>ve(Xt,"$toolStore",n),a=R();let s=F(e,"toolId",8);M(()=>(r(),Q(s())),()=>{x(a,r().get(s()))}),Ee(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=Xe(()=>s()===i());al(v,{get isOpen(){return p(g)},children:(h,m)=>{var C=VD();lt(C,5,()=>Object.entries(p(a)),I=>I[0],(I,b)=>{jD(I,{get constraintId(){return p(b)[0]},get toolId(){return s()}})}),Y(C),N(h,C)},$$slots:{default:!0}})};ge(u,v=>{p(a)&&Object.entries(p(a)).length&&v(_)})}N(t,c),ce()}var KD=ne('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function XD(t,e){let n=F(e,"title",8),r=F(e,"closeCb",8);var i=KD(),a=K(i),s=K(a,!0);Y(a);var c=P(a,2);Y(i),ee(()=>et(s,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),N(t,i)}var qD=ne('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Ur(t,e){le(e,!1);let n=F(e,"showModal",12),r=F(e,"title",8),i=R();function a(){n(!1),p(i).close()}M(()=>(p(i),Q(n())),()=>{p(i)&&n()&&p(i).showModal()}),M(()=>(p(i),Q(n())),()=>{p(i)&&!n()&&p(i).close()}),Ee();var s=qD(),c=K(s),u=K(c);XD(u,{get title(){return r()},closeCb:a});var _=P(u,2),v=K(_),g=K(v);ut(g,e,"default",{}),Y(v),Y(_),Y(c),Y(s),Ai(s,h=>x(i,h),()=>p(i)),Me("click",c,Xn(function(h){Yw.call(this,e,h)})),Me("close",s,()=>{n(!1)}),Me("click",s,zw(Xn(()=>p(i).close()))),N(t,s),ce()}var ZD=ne('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function QD(t,e){le(e,!1);let n=F(e,"searchPattern",12,""),r=F(e,"showModal",8),i=R(null);M(()=>(Q(r()),p(i)),()=>{r()&&p(i)&&p(i).focus()}),Ee();var a=ZD(),s=P(K(a),2);Vt(s),S(s,"spellcheck",!1),Ai(s,c=>x(i,c),()=>p(i)),Y(a),Vn(s,n),N(t,a),ce()}var JD=ne('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function eT(t,e){let n=F(e,"showModal",12),r=F(e,"searchPattern",12,""),i=F(e,"title",8);Ur(t,{get title(){return i()},get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=JD(),u=K(c);QD(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var _=P(u,2),v=K(_),g=K(v);ut(g,e,"default",{}),Y(v),Y(_),Y(c),N(a,c)},$$slots:{default:!0},$$legacy:!0})}var tT=ne('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),nT=ne('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function ti(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0),i=F(e,"isCollapsible",8,!1);var a=Ae(),s=ue(a);{var c=_=>{var v=tT(),g=K(v),h=K(g),m=K(h,!0);Y(h),Y(g);var C=P(g,2),I=K(C);ut(I,e,"default",{}),Y(C),Y(v),ee(()=>et(m,n())),N(_,v)},u=_=>{var v=nT(),g=K(v),h=K(g),m=K(h,!0);Y(h),Y(g);var C=P(g,2),I=K(C);ut(I,e,"default",{});var b=P(I,2);Y(C),Y(v),ee(()=>{et(m,n()),Ot(b,"open",r())}),Me("click",v,()=>r(!r())),N(_,v)};ge(s,_=>{i()?_(u,!1):_(c)})}N(t,a)}var rT=ne('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),iT=ne('<ol class="svelte-cd45on"></ol>'),oT=ne("<!> <!>",1);function aT(t,e){le(e,!1);const n=R();let r=F(e,"category",8),i=F(e,"addTool",8),a=F(e,"searchResults",8),s=R(!0);M(()=>(Q(a()),Q(r())),()=>{x(n,a().filter(v=>{var g,h;return(h=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:h.includes(r())}))}),Ee(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=oT(),h=ue(g);ti(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(s)},set isOpen(C){x(s,C)},$$legacy:!0});var m=P(h,2);al(m,{get isOpen(){return p(s)},children:(C,I)=>{var b=iT();lt(b,5,()=>p(n),St,(w,L)=>{let D=()=>p(L).key,k=()=>p(L).info;var G=rT(),U=K(G),H=K(U,!0);Y(U),Y(G),ee(()=>{var X;S(U,"title",(X=k().meta)==null?void 0:X.description),et(H,D())}),Me("click",U,()=>{i()(D())}),N(w,G)}),Y(b),N(C,b)},$$slots:{default:!0}}),N(v,g)};ge(u,v=>{p(n).length&&v(_)})}N(t,c),ce()}function sT(t,e){le(e,!1);const n=R();let r=F(e,"searchPattern",8,""),i=F(e,"addTool",8),a=F(e,"categories",8),s=F(e,"filterFunc",8),c=F(e,"elementHandlers",8);M(()=>(Q(r()),Q(s()),Q(c())),()=>{x(n,hy(r(),s(),c()))}),Ee(),fe();var u=Ae(),_=ue(u);lt(_,1,a,St,(v,g)=>{aT(v,{get category(){return p(g)},get searchResults(){return p(n)},get addTool(){return i()}})}),N(t,u),ce()}var lT=ne('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function sl(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8);var i=lT();S(i,"tabindex",0);var a=K(i),s=K(a);ut(s,e,"add-button",{}),Y(a);var c=P(a,2),u=K(c),_=K(u);ut(_,e,"title-icon",{}),Y(u);var v=P(u);Y(c);var g=P(c,2),h=K(g);Y(g),Y(i),ee(()=>{et(v,` ${r()??""}`),Ot(h,"open",n())}),Me("click",i,()=>n(!n())),Me("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,i)}var cT=ne('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function uT(t,e){let n=F(e,"isOpen",12),r=F(e,"title",8),i=F(e,"showModal",12);function a(){i(!i())}sl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,c)=>{var u=cT();Me("click",u,Xn(()=>a())),N(s,u)},"title-icon":(s,c)=>{var u=Ae(),_=ue(u);ut(_,e,"title-icon",{}),N(s,u)}},$$legacy:!0})}var dT=ne('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),_T=ne('<div class="panel-container svelte-hixu4"><!> <!></div>');function ll(t,e){let n=F(e,"isOpen",8,!0);var r=_T(),i=K(r);ut(i,e,"panel-header",{});var a=P(i,2);al(a,{get isOpen(){return n()},children:(s,c)=>{var u=dT(),_=K(u);ut(_,e,"panel-content",{}),Y(u),N(s,u)},$$slots:{default:!0}}),Y(r),N(t,r)}var fT=ne("<!> <!>",1);function wd(t,e){le(e,!1);let n=F(e,"categories",8),r=F(e,"title",8),i=F(e,"onAddTool",8),a=F(e,"elementHandlerFilterFunc",8),s=F(e,"elementHandlers",8),c=R(!0),u=R(!1),_=R("");const v=g=>{x(u,!1),x(c,!0),i()(g)};fe(),ll(t,{get isOpen(){return p(c)},set isOpen(g){x(c,g)},$$slots:{"panel-header":(g,h)=>{var m=fT(),C=ue(m);uT(C,{get title(){return r()},get isOpen(){return p(c)},set isOpen(b){x(c,b)},get showModal(){return p(u)},set showModal(b){x(u,b)},$$slots:{"title-icon":(b,w)=>{var L=Ae(),D=ue(L);ut(D,e,"title-icon",{}),N(b,L)}},$$legacy:!0});var I=P(C,2);eT(I,{get title(){return r()},get showModal(){return p(u)},set showModal(b){x(u,b)},get searchPattern(){return p(_)},set searchPattern(b){x(_,b)},children:(b,w)=>{sT(b,{get searchPattern(){return p(_)},get categories(){return n()},get filterFunc(){return a()},addTool:v,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),N(g,m)},"panel-content":(g,h)=>{var m=Ae(),C=ue(m);ut(C,e,"panel-content",{}),N(g,m)}},$$legacy:!0}),ce()}var gT=ne("<!> <!>",1);function hT(t,e){le(e,!1);const n=rt(),r=()=>ve(_t,"$localConstraintsStore",n),i=R();let a=F(e,"elementHandlers",8);const s=[T.COSMETIC_TOOL],c=u=>{Sv(u),Ar(u)};M(()=>(r(),T),()=>{x(i,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(T.COSMETIC_TOOL))&&!v})}),Ee(),fe(),wd(t,{title:"Cosmetic Tools",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{WD(u)},"panel-content":(u,_)=>{var v=Ae(),g=ue(v);lt(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let C=()=>p(m)[0];var I=Ae(),b=ue(I);{var w=L=>{var D=gT(),k=ue(D);$v(k,{get toolId(){return C()},get elementHandlers(){return a()}});var G=P(k,2);Fv(G,{get toolId(){return C()}}),N(L,D)};ge(b,L=>{cO(C())&&L(w)})}N(h,I)}),N(u,v)}}}),ce()}var Uv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Uv||{});const Ds=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Hv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function vT(t,e){Tr.update(n=>n.setConstraint(t,e))}function pT(t){Tr.update(e=>e.removeConstraint(t))}function Xg(t){t.type===Uv.REMOVE_GLOBAL_CONSTRAINT?pT(t.payload):vT(t.payload.tool,t.payload.value)}function Ou(t,e){return{execute:()=>{Xg(t)},unExecute:()=>{Xg(e)}}}var mT=ne('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function CT(t,e){let n=F(e,"value",8,!1);var r=mT(),i=K(r);Vt(i),Y(r),ee(()=>wh(i,n())),N(t,r)}function ET(t,e){le(e,!1);let n=F(e,"toolId",8),r=F(e,"value",8,!1),i=F(e,"elementHandlers",8);const a=()=>{const u=Ds(n(),!r()),_=Ds(n(),r()),v=Ou(u,_);un(v)},s=()=>{const u=Hv(n()),_=Ds(n(),r()),v=Ou(u,_);un(v)};fe();var c=Xe(()=>ni(n(),i()));sa(t,{get elementInfo(){return p(c)},onClick:a,onTrash:s,children:(u,_)=>{CT(u,{get value(){return r()}})},$$slots:{default:!0}}),ce()}var IT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function bT(t){var e=IT();N(t,e)}function wT(t,e){le(e,!1);const n=rt(),r=()=>ve(Tr,"$globalConstraintsStore",n),i=R();let a=F(e,"elementHandlers",8);const s=dO,c=u=>{const _=Ds(u,!0),v=Hv(u),g=Ou(_,v);un(g)};M(()=>r(),()=>{x(i,(u,_)=>{var h;const v=!!((h=_.meta)!=null&&h.categories.includes(T.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Ee(),fe(),wd(t,{title:"Global Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{bT(u)},"panel-content":(u,_)=>{var v=Ae(),g=ue(v);lt(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let C=()=>p(m)[0],I=()=>p(m)[1];ET(h,{get toolId(){return C()},get value(){return I()},get elementHandlers(){return a()}})}),N(u,v)}}}),ce()}var OT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function yT(t){var e=OT();N(t,e)}var LT=ne("<!> <!>",1),AT=ne("<!> <!> <!> <!>",1);function ST(t,e){le(e,!1);const n=rt(),r=()=>ve(_t,"$localConstraintsStore",n),i=R();let a=F(e,"elementHandlers",8);const s=uO,c=u=>{Sv(u),Ar(u)};M(()=>(r(),T),()=>{x(i,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(T.LOCAL_CONSTRAINT))&&!v})}),Ee(),fe(),wd(t,{title:"Local Constraints",onAddTool:c,categories:s,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return a()},$$slots:{"title-icon":(u,_)=>{yT(u)},"panel-content":(u,_)=>{var v=AT(),g=ue(v),h=Xe(()=>ni(d.GIVEN,a()));sa(g,{get elementInfo(){return p(h)}});var m=P(g,2),C=Xe(()=>ni(d.REGIONS,a()));sa(m,{get elementInfo(){return p(C)}});var I=P(m,2),b=Xe(()=>ni(d.FOG,a()));sa(I,{get elementInfo(){return p(b)}});var w=P(I,2);lt(w,1,()=>r().entries(),([L,D])=>L,(L,D)=>{let k=()=>p(D)[0];var G=Ae(),U=ue(G);{var H=X=>{var J=LT(),re=ue(J);$v(re,{get toolId(){return k()},get elementHandlers(){return a()}});var Z=P(re,2);Fv(Z,{get toolId(){return k()}}),N(X,J)};ge(U,X=>{aO(k())&&X(H)})}N(L,G)}),N(u,v)}}}),ce()}var xT=ne('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function ru(t,e){le(e,!1);const n=R();let r=F(e,"value",8),i=F(e,"onChangeCb",8,void 0),a=R(void 0);function s(m){const C=Zc(m);C&&i()&&i()(C)}M(()=>Q(r()),()=>{x(n,r())}),M(()=>(p(n),Zc),()=>{mu(p(n))&&x(a,Zc(p(n)))}),Ee(),fe();var c=xT(),u=K(c);const _=Xe(()=>vv(p(n)));var v=K(u);Vt(v),Y(u);var g=P(u,2),h=P(K(g),2);Vt(h),S(h,"spellcheck",!1),S(h,"maxlength",30),Y(g),Y(c),ee(()=>{S(u,"style",`--choosen-color: ${p(a)??""}`),Ot(u,"transparent",p(_))}),Vn(v,()=>p(n),m=>x(n,m)),Me("change",v,()=>s(p(n))),Vn(h,()=>p(n),m=>x(n,m)),Me("input",h,()=>s(p(n))),N(t,c),ce()}var NT=ne('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function la(t,e){let n=F(e,"name",8);var r=NT(),i=K(r),a=K(i,!0);Y(i);var s=P(i,2);ut(s,e,"default",{}),Y(r),ee(()=>et(a,n())),N(t,r)}var DT=ne('<input class="control-slider svelte-1rsuho6" type="range">');function TT(t,e){le(e,!1);let n=F(e,"min",8),r=F(e,"max",8),i=F(e,"value",12),a=F(e,"step",24,()=>(r()-n())/10),s=F(e,"onChangeCb",8,void 0),c=F(e,"onInputCb",8,void 0);fe();var u=DT();Vt(u),ee(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",a())}),Vn(u,i),Me("change",u,()=>{s()&&s()(i())}),Me("input",u,()=>{c()&&c()(i())}),N(t,u),ce()}function Zr(t,e){let n=F(e,"name",8),r=F(e,"value",12),i=F(e,"min",8),a=F(e,"max",8),s=F(e,"step",24,()=>(a()-i())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);la(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{TT(_,{get min(){return i()},get max(){return a()},get step(){return s()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var RT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function kT(t){var e=RT();N(t,e)}var GT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function MT(t){var e=GT();N(t,e)}var $T=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function FT(t){var e=$T();N(t,e)}var UT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function HT(t){var e=UT();N(t,e)}var PT=ne('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function BT(t,e){le(e,!1);const n=[];let r=F(e,"value",8),i=F(e,"selectedShape",12),a=F(e,"title",8),s=F(e,"updateShapeCb",8,void 0);fe();var c=PT(),u=K(c);Vt(u);var _,v=P(u,2);ut(v,e,"default",{}),Y(c),ee(()=>{S(c,"title",a()),Ot(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),js(n,[],u,()=>(r(),i()),i),Me("change",u,()=>s()&&s()(r())),N(t,c),ce()}var WT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function zT(t){var e=WT(),n=K(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),Y(e),N(t,e)}var YT=ne('<div class="icon-wrapper svelte-18euf14"><!></div>'),jT=ne('<div class="radio-container svelte-18euf14"></div>');function VT(t,e){le(e,!1);let n=F(e,"name",8),r=F(e,"selectedShape",8),i=F(e,"possibleShapes",8),a=F(e,"updateShapeCb",8,void 0);const s=new Map([[B.CIRCLE,FT],[B.ELLIPSE,zT],[B.SQUARE,MT],[B.RECTANGLE,kT],[B.POLYGON,HT]]);fe(),la(t,{get name(){return n()},children:(c,u)=>{var _=jT();lt(_,5,i,St,(v,g)=>{BT(v,{get title(){return p(g)},get value(){return p(g)},get selectedShape(){return r()},get updateShapeCb(){return a()},children:(h,m)=>{var C=Ae(),I=ue(C);{var b=w=>{var L=YT(),D=K(L);vh(D,()=>s.get(p(g)),(k,G)=>{G(k,{})}),Y(L),N(w,L)};ge(I,w=>{s.has(p(g))&&w(b)})}N(h,C)},$$slots:{default:!0}})}),Y(_),N(c,_)},$$slots:{default:!0}}),ce()}var KT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function XT(t){var e=KT();N(t,e)}var qT=ne('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),ZT=ne("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function QT(t,e){le(e,!1);const n=rt(),r=()=>ve(Xt,"$toolStore",n),i=()=>ve(fr,"$currentConstraintStore",n),a=R(),s=R(),c=R();let u=R(!0),_=F(e,"elementHandlers",8);function v(b,w){const L=(b==null?void 0:b.shape)??(w?uu(w):void 0);return Jc(L),L}function g(b,w){p(c)&&(ww(c,p(c)[b]=w),Jc(p(c)))}function h(){p(s)&&(x(c,uu(p(s))),Jc(p(c)))}function m(b){return b&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function C(b){return b&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[B.ELLIPSE,B.RECTANGLE].includes(b)}M(()=>(r(),Q(_())),()=>{x(a,ni(r(),_()))}),M(()=>p(a),()=>{x(s,p(a).shape)}),M(()=>(i(),p(s)),()=>{var b;x(c,v(((b=i())==null?void 0:b.constraint)??null,p(s)))}),Ee(),fe(),ll(t,{get isOpen(){return p(u)},set isOpen(b){x(u,b)},$$slots:{"panel-header":(b,w)=>{sl(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(L){x(u,L)},$$slots:{"title-icon":(L,D)=>{XT(L)}},$$legacy:!0})},"panel-content":(b,w)=>{var L=Ae(),D=ue(L);{var k=G=>{var U=ZT(),H=ue(U);{var X=Ne=>{var pe=qT();Me("click",pe,h),N(Ne,pe)};ge(H,Ne=>{EO(p(s))&&Ne(X)})}var J=P(H,2);{var re=Ne=>{VT(Ne,{get possibleShapes(){return p(s).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:pe=>g("type",pe)})};ge(J,Ne=>{var pe;p(s).allowedTypes&&p(s).allowedTypes.length&&((pe=p(c))!=null&&pe.type)&&Ne(re)})}var Z=P(J,2);{var se=Ne=>{var pe=Xe(()=>p(s).n.lb??3),Re=Xe(()=>p(s).n.ub??10);Zr(Ne,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(pe)},get max(){return p(Re)},step:1,onChangeCb:xe=>g("n",xe)})};ge(Z,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.n)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.n)!=null&&xe.editable)&&C(p(c).type)&&Ne(se)})}var be=P(Z,2);{var me=Ne=>{var pe=Xe(()=>p(s).r.lb??0),Re=Xe(()=>p(s).r.ub??1),xe=Xe(()=>p(s).r.step??.05);Zr(Ne,{name:"Radius",get value(){return p(c).r},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("r",Lt)})};ge(be,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.r)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.r)!=null&&xe.editable)&&m(p(c).type)&&Ne(me)})}var Ce=P(be,2);{var Te=Ne=>{var pe=Xe(()=>p(s).width.lb??0),Re=Xe(()=>p(s).width.ub??1),xe=Xe(()=>p(s).width.step??.05);Zr(Ne,{name:"Width",get value(){return p(c).width},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("width",Lt)})};ge(Ce,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.width)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.width)!=null&&xe.editable)&&I(p(c).type)&&Ne(Te)})}var at=P(Ce,2);{var Se=Ne=>{var pe=Xe(()=>p(s).height.lb??0),Re=Xe(()=>p(s).height.ub??1),xe=Xe(()=>p(s).height.step??.05);Zr(Ne,{name:"Height",get value(){return p(c).height},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("height",Lt)})};ge(at,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.height)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.height)!=null&&xe.editable)&&I(p(c).type)&&Ne(Se)})}var we=P(at,2);{var ht=Ne=>{var pe=Xe(()=>p(s).angle.lb??0),Re=Xe(()=>p(s).angle.ub??360),xe=Xe(()=>p(s).angle.step??15);Zr(Ne,{name:"Angle",get value(){return p(c).angle},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("angle",Lt)})};ge(we,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.angle)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.angle)!=null&&xe.editable)&&Ne(ht)})}var ct=P(we,2);{var yn=Ne=>{var pe=Xe(()=>p(s).inset.lb??0),Re=Xe(()=>p(s).inset.ub??.5),xe=Xe(()=>p(s).inset.step??.01);Zr(Ne,{name:"Inset",get value(){return p(c).inset},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("inset",Lt)})};ge(ct,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.inset)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.inset)!=null&&xe.editable)&&Ne(yn)})}var $n=P(ct,2);{var Hr=Ne=>{la(Ne,{name:"Stroke",children:(pe,Re)=>{ru(pe,{get value(){return p(c).stroke},onChangeCb:xe=>g("stroke",xe)})},$$slots:{default:!0}})};ge($n,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.stroke)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.stroke)!=null&&xe.editable)&&Ne(Hr)})}var Zt=P($n,2);{var pr=Ne=>{var pe=Xe(()=>p(s).strokeWidth.lb??0),Re=Xe(()=>p(s).strokeWidth.ub??.8),xe=Xe(()=>p(s).strokeWidth.step??.01);Zr(Ne,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("strokeWidth",Lt)})};ge(Zt,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.strokeWidth)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.strokeWidth)!=null&&xe.editable)&&Ne(pr)})}var di=P(Zt,2);{var ir=Ne=>{var pe=Xe(()=>p(s).strokeDasharray.lb??0),Re=Xe(()=>p(s).strokeDasharray.ub??1),xe=Xe(()=>p(s).strokeDasharray.step??.01);Zr(Ne,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(pe)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:Lt=>g("strokeDasharray",Lt)})};ge(di,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.strokeDasharray)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.strokeDasharray)!=null&&xe.editable)&&Ne(ir)})}var Fn=P(di,2);{var Hi=Ne=>{la(Ne,{name:"Fill",children:(pe,Re)=>{ru(pe,{get value(){return p(c).fill},onChangeCb:xe=>g("fill",xe)})},$$slots:{default:!0}})};ge(Fn,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.fill)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.fill)!=null&&xe.editable)&&Ne(Hi)})}var Pr=P(Fn,2);{var Rt=Ne=>{la(Ne,{name:"Font Color",children:(pe,Re)=>{ru(pe,{get value(){return p(c).fontColor},onChangeCb:xe=>g("fontColor",xe)})},$$slots:{default:!0}})};ge(Pr,Ne=>{var pe,Re,xe;((pe=p(c))==null?void 0:pe.fontColor)!==void 0&&((xe=(Re=p(s))==null?void 0:Re.fontColor)!=null&&xe.editable)&&Ne(Rt)})}N(G,U)};ge(D,G=>{p(s)&&G(k)})}N(b,L)}},$$legacy:!0}),ce()}var JT=ne('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Aa(t,e){let n=F(e,"clickCb",8),r=F(e,"title",8);var i=JT(),a=K(i),s=K(a);ut(s,e,"default",{}),Y(a),Y(i),ee(()=>S(i,"title",r())),Me("click",i,Xn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,i)}var eR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function tR(t){var e=eR();N(t,e)}var nR=ne('<div class="buttons-container svelte-kc00rw"><!></div>');function cl(t,e){var n=nR(),r=K(n);ut(r,e,"default",{}),Y(n),N(t,n)}var rR=ne('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),iR=ne('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),oR=ne('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function aR(t,e){le(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n),i=()=>ve(Tr,"$globalConstraintsStore",n),a=()=>ve(_t,"$localConstraintsStore",n);let s=F(e,"showModal",12,!1),c=R(""),u=R(""),_=R(""),v=R(""),g=R("");function h(){s(!1)}function m(){const w=p(u)?C(p(u)):["Anonymous"],D={title:p(c)?p(c):"Sudoku",authors:w,ruleset:p(_),ctcYoutubeUrl:p(v),ctcUrl:p(g)};CL(D),s(!1)}function C(w){return w.split(/\s*[;]\s*/)}function I(){var U,H,X,J;let w="";const L=Gt,D=i();!!D.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[re,Z]of D.entries())if(re!==d.SUDOKU_RULES_DO_NOT_APPLY&&Z){const se=L[re],be=((U=se.menu)==null?void 0:U.name)??se.toolId,me=(H=se.meta)==null?void 0:H.description;w+=`**${be}**: ${me}

`}const G=a();for(const[re,Z]of G.entries())if(Object.keys(Z).length>0){const be=L[re],me=((X=be.menu)==null?void 0:X.name)??be.toolId,Ce=(J=be.meta)==null?void 0:J.description;w+=`**${me}**: ${Ce}

`}return w.trim()}function b(){const w=I();x(_,w)}M(()=>(Q(s()),r(),ks),()=>{if(!s()){const w=r().authors;x(c,r().title??""),x(u,w?ks(w,"; ","; "):""),x(_,r().ruleset??""),x(v,r().ctcYoutubeUrl??""),x(g,r().ctcUrl??"")}}),Ee(),fe(),Ur(t,{title:"Edit Puzzle Meta",get showModal(){return s()},set showModal(w){s(w)},children:(w,L)=>{var D=oR(),k=K(D);ti(k,{title:"Title"});var G=P(k,2);Vt(G);var U=P(G,2);ti(U,{title:"Authors"});var H=P(U,2);Vt(H);var X=P(H,2);ti(X,{title:"Ruleset",children:(Ce,Te)=>{var at=rR();Me("click",at,b),N(Ce,at)},$$slots:{default:!0}});var J=P(X,2);Rw(J),S(J,"rows",8);var re=P(J,2);ti(re,{title:"CTC Link"});var Z=P(re,2);Vt(Z);var se=P(Z,2);ti(se,{title:"CTC Youtube Link"});var be=P(se,2);Vt(be);var me=P(be,2);cl(me,{children:(Ce,Te)=>{var at=iR(),Se=ue(at),we=P(Se,2);Me("click",Se,m),Me("click",we,h),N(Ce,at)},$$slots:{default:!0}}),Y(D),Vn(G,()=>p(c),Ce=>x(c,Ce)),Vn(H,()=>p(u),Ce=>x(u,Ce)),Vn(J,()=>p(_),Ce=>x(_,Ce)),Vn(Z,()=>p(g),Ce=>x(g,Ce)),Vn(be,()=>p(v),Ce=>x(v,Ce)),N(w,D)},$$slots:{default:!0},$$legacy:!0}),ce()}var sR=ne("<!> <!>",1);function lR(t){let e=R(!1);function n(){x(e,!0)}var r=sR(),i=ue(r);Aa(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,c)=>{tR(s)},$$slots:{default:!0}});var a=P(i,2);aR(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var cR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function uR(t){var e=cR();N(t,e)}var dR=ne('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function _R(t,e){le(e,!1);let n=R(null),r=R(null);function i(){var a;(a=p(n))==null||a.click()}M(()=>(p(r),$s),()=>{if(p(r)&&p(r).length){const a=p(r)[0],s=new FileReader;s.readAsText(a),s.onload=function(c){if(c.target||alert(s.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=rL(_);console.log(v),yL(v),$s()}},s.onerror=function(){alert(s.error)}}}),Ee(),fe(),Aa(t,{title:"Open Puzzle",clickCb:i,children:(a,s)=>{var c=dR(),u=ue(c);uR(u);var _=P(u,2);Ai(_,v=>x(n,v),()=>p(n)),Ww(_,()=>p(r),v=>x(r,v)),N(a,c)},$$slots:{default:!0}}),ce()}var fR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function gR(t){var e=fR();N(t,e)}var hR=ne('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function qg(t,e){le(e,!1);let n=F(e,"name",8),r=F(e,"min",8),i=F(e,"max",8),a=F(e,"value",12),s=F(e,"step",24,()=>(i()-r())/10),c=F(e,"onChangeCb",8,void 0),u=F(e,"onInputCb",8,void 0);fe();var _=hR(),v=K(_),g=K(v);Y(v);var h=P(v,2);Vt(h),Y(_),ee(()=>{et(g,`${n()??""}: ${a()??""}`),S(h,"min",r()),S(h,"max",i()),S(h,"step",s())}),Vn(h,a),Me("change",h,()=>{c()&&c()(a())}),Me("input",h,()=>{u()&&u()(a())}),N(t,_),ce()}var vR=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),pR=ne('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function mR(t,e){le(e,!1);let n=F(e,"showModal",12,!1);const r=4,i=20;let a=R(9),s=R(9),c=R(""),u=R(xt.range(1,10));function _(){n(!1)}function v(){$s(),OL(p(s),p(a),p(u).sort()),n(!1)}function g(C){return C.map(b=>String(b)).join(",")}function h(){const C=Math.min(Math.max(p(s),p(a)),9);x(u,xt.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&x(u,C.replaceAll(" ","").split(",").map(Number))}fe(),Ur(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,I)=>{var b=pR(),w=K(b);qg(w,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return p(a)},set value(H){x(a,H)},$$legacy:!0});var L=P(w,2);qg(L,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return p(s)},set value(H){x(s,H)},$$legacy:!0});var D=P(L,2),k=Xe(()=>`Allowed Digits (for the solver): ${g(p(u))}`);ti(D,{get title(){return p(k)}});var G=P(D,2);Vt(G),ee(()=>S(G,"placeholder",g(p(u))));var U=P(G,2);cl(U,{children:(H,X)=>{var J=vR(),re=ue(J),Z=P(re,2);Me("click",re,v),Me("click",Z,_),N(H,J)},$$slots:{default:!0}}),Y(b),Vn(G,()=>p(c),H=>x(c,H)),Me("input",G,()=>m(p(c))),N(C,b)},$$slots:{default:!0},$$legacy:!0}),ce()}var CR=ne("<!> <!>",1);function ER(t){let e=R(!1);function n(){x(e,!0)}var r=CR(),i=ue(r);Aa(i,{title:"New Puzzle",clickCb:n,children:(s,c)=>{gR(s)},$$slots:{default:!0}});var a=P(i,2);mR(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var IR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function bR(t){var e=IR();N(t,e)}var wR=ne('<button class="modal-button">Cancel</button>'),OR=ne('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function yR(t,e){le(e,!1);const n=rt(),r=()=>ve(co,"$svgRefStore",n),i=()=>ve(wa,"$puzzleStore",n),a=()=>ve(Dr,"$puzzleMetaStore",n),s=R();let c=F(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let L="";for(let D of w){const k=w.getPropertyValue(D);k&&(L+=`${D}:${k};`)}return L}function _(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const L=b.childNodes;for(let D=0;D<L.length;D++){const k=L[D];if(k instanceof Element){const G=_(k);w.replaceChild(G,w.childNodes[D])}}return w}function v(b,w="download.png"){const L=_(b),k=new XMLSerializer().serializeToString(L),G=new Image,U=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),H=URL.createObjectURL(U);G.onload=()=>{const X=b.getBoundingClientRect(),J=X.width,re=X.height,Z=document.createElement("canvas"),se=window.devicePixelRatio||1;Z.width=J*se,Z.height=re*se;const be=Z.getContext("2d");be&&(be.scale(se,se),be.drawImage(G,0,0,J,re),Z.toBlob(me=>{if(!me)return;const Ce=URL.createObjectURL(me),Te=document.createElement("a");Te.href=Ce,Te.download=w,Te.click(),URL.revokeObjectURL(Ce)}))},G.src=H}function g(b,w="download.svg"){const L=_(b);let k=new XMLSerializer().serializeToString(L);k.includes("<?xml")||(k=`<?xml version="1.0" standalone="no"?>\r
`+k);const G=new Blob([k],{type:"image/svg+xml"}),U=URL.createObjectURL(G),H=document.createElement("a");H.href=U,H.download=w,H.click(),URL.revokeObjectURL(U)}const h=()=>{const b=nL(i());return JSON.stringify(b,null,2)},m=()=>{function b(D,k,G){var U=document.createElement("a"),H=new Blob([D],{type:G});U.href=URL.createObjectURL(H),U.download=k,U.click(),URL.revokeObjectURL(U.href)}const w=h(),L=Cu(a());b(w,`${L}.json`,"text/plain")};function C(){c(!1)}const I=1;M(()=>r(),()=>{x(s,r())}),Ee(),fe(),Ur(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var L=OR(),D=K(L),k=K(D),G=K(k),U=P(G,2),H=P(U,2);Y(k);var X=P(k,2),J=P(K(X),2),re=K(J);S(re,"width",400*I),S(re,"height",300*I),Y(J),Y(X),Y(D);var Z=P(D,2);cl(Z,{children:(se,be)=>{var me=wR();Me("click",me,C),N(se,me)},$$slots:{default:!0}}),Y(L),Me("click",G,m),Me("click",U,()=>v(p(s))),Me("click",H,()=>g(p(s))),N(b,L)},$$slots:{default:!0},$$legacy:!0}),ce()}var LR=ne("<!> <!>",1);function AR(t){let e=R(!1);function n(){x(e,!0)}var r=LR(),i=ue(r);Aa(i,{title:"Save Puzzle",clickCb:n,children:(s,c)=>{bR(s)},$$slots:{default:!0}});var a=P(i,2);yR(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var SR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Pv(t){var e=SR();N(t,e)}var xR=ne('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),NR=ne('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function As(t,e){let n=F(e,"title",8),r=F(e,"isOpen",12,!0);var i=NR(),a=K(i);ti(a,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var s=P(a,2);al(s,{get isOpen(){return r()},children:(c,u)=>{var _=xR(),v=K(_);ut(v,e,"default",{}),Y(_),N(c,_)},$$slots:{default:!0}}),Y(i),N(t,i)}var DR=ne('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function TR(t,e){let n=F(e,"value",8),r=F(e,"onClickCb",8),i=F(e,"disabled",8,!1);var a=DR(),s=K(a);Vt(s),Li(2),Y(a),ee(()=>{Ot(a,"disabled",i()),wh(s,n()),s.disabled=i()}),Me("change",s,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,a)}var RR=ne('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Qr(t,e){le(e,!1);let n=F(e,"value",8),r=F(e,"name",8),i=F(e,"updateCb",8,void 0),a=F(e,"disabled",8,!1);function s(){a()||i()&&i()(!n())}fe();var c=RR(),u=K(c);TR(u,{get value(){return n()},onClickCb:s,get disabled(){return a()}});var _=P(u,2),v=K(_,!0);Y(_),Y(c),ee(()=>{Ot(c,"disabled",a()),et(v,r())}),Me("click",_,Xn(s)),N(t,c),ce()}var kR=ne("<!> <!>",1),GR=ne("<!> <!> <!>",1),MR=ne("<!> <!>",1),$R=ne('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Bv(t,e){le(e,!1);const n=rt(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(Zs,"$gameModeStore",n),a=R();let s=F(e,"showModal",12,!1);M(()=>r(),()=>{x(a,r())}),Ee(),fe(),Ur(t,{title:"Settings",get showModal(){return s()},set showModal(c){s(c)},children:(c,u)=>{var _=$R(),v=K(_);As(v,{title:"General",children:(I,b)=>{Qr(I,{get value(){return p(a).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Xw})},$$slots:{default:!0}});var g=P(v,2);As(g,{title:"Tools",children:(I,b)=>{var w=kR(),L=ue(w);Qr(L,{get value(){return p(a).penToolActive},name:"Pen Tool",updateCb:Zw});var D=P(L,2);Qr(D,{disabled:!0,get value(){return p(a).letterToolActive},name:"Letter Tool",updateCb:Qw}),N(I,w)},$$slots:{default:!0}});var h=P(g,2);As(h,{title:"Gameplay",children:(I,b)=>{var w=GR(),L=ue(w);Qr(L,{name:"Check Conflicts",get value(){return p(a).checkConflicts},updateCb:eO});var D=P(L,2);Qr(D,{name:"Highlight Pencilmark Conflicts",get value(){return p(a).highlightPencilmarkConflicts},updateCb:tO});var k=P(D,2);Qr(k,{name:"Highlight Cells Seen By Selection",get value(){return p(a).highlightCellsSeenBySelection},updateCb:Jw}),N(I,w)},$$slots:{default:!0}});var m=P(h,2);{var C=I=>{As(I,{title:"Setting Mode Display",children:(b,w)=>{var L=MR(),D=ue(L);Qr(D,{name:"Hide Fog",get value(){return p(a).hideFog},updateCb:nO});var k=P(D,2);Qr(k,{name:"Show Solution",get value(){return p(a).showSolution},updateCb:rO}),N(b,L)},$$slots:{default:!0}})};ge(m,I=>{i()===go.SETTING&&I(C)})}Y(_),N(c,_)},$$slots:{default:!0},$$legacy:!0}),ce()}var FR=ne("<!> <!>",1);function UR(t){let e=R(!1);function n(){x(e,!0)}var r=FR(),i=ue(r);Aa(i,{title:"Settings",clickCb:n,children:(s,c)=>{Pv(s)},$$slots:{default:!0}});var a=P(i,2);Bv(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var HR=ne('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function PR(t){var e=HR(),n=K(e);ER(n);var r=P(n,2);AR(r);var i=P(r,2);_R(i,{});var a=P(i,2);lR(a);var s=P(a,2);UR(s),Y(e),N(t,e)}var BR=ne('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function WR(t,e){le(e,!1);let n=R(!1);function r(){const i=ot(_n),a=[];for(let s=0;s<i.nRows;s++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(s,u);if(!_)continue;const v=_.value;c.push(v)}a.push(c)}vd(a)}fe(),ll(t,{get isOpen(){return p(n)},set isOpen(i){x(n,i)},$$slots:{"panel-header":(i,a)=>{sl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(s){x(n,s)},$$legacy:!0})},"panel-content":(i,a)=>{var s=BR();Me("click",s,r),N(i,s)}},$$legacy:!0}),ce()}const zR={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function YR(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],a=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[a,i]};if(i==="<"||i==="<=")return{upper_bound:[a,i]}}if(r=n.exec(t),r){const i=r[1],a=parseInt(r[2],10),s=parseInt(r[3],10),c=r[4];return{lower_bound:[a,i==="["?">=":">"],upper_bound:[s,c==="]"?"<=":"<"]}}return null}function jR(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function VR(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Wv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function KR(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=jR(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=VR(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const a=YR(t);if(e.allow_interval&&a)return{type:"interval",parsed:a};const s=Wv(t);return e.allow_var_list&&s?{type:"var_list",parsed:s}:null}var oe=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t))(oe||{});function yt(t,e){return`${e}[${t.r},${t.c}]`}function Fi(t,e){return t.map(r=>yt(r,e))}function $e(t,e){return"["+Fi(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function je(t){return t.map(n=>Oe(n))}function XR(t){return`values_grid[${t.r},${t.c}]`}function ul(t){return t.map(e=>XR(e))}function yi(t){return`constraint alldifferent([${t.join(",")}]);
`}function pt(t,e){return t&&(t=`
% ${e}
`+t),t}function Od(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i);r.push(a)}return r}function yd(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const i of n){const a=t.getCellsInDirection(e.r,e.c,i),s="["+je(a).join(",")+"]";r.push(s)}return r}function dl(t,e,n,r){let i="";const a=r.get(e);if(a)for(const s of Object.values(n)){const c=a(t,s);i+=c}return i}class qR{constructor(e){he(this,"model_str","");he(this,"used_vars");he(this,"puzzle");he(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=zR){const i=KR(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let a="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(a+=`var int: ${c};
`,this.addVariable(c)),[a,c]}if(!n)return null;if(this.hasVariable(n)||(a+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];a+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];a+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";a+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[a,n]}}function ZR(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,a=/^test\s+(\w+)\s*\(/;let s=null,c=0,u=0;for(let I=0;I<e.length;I++){const b=e[I].trim(),w=b.match(r),L=b.match(i),D=b.match(a);if(w||L||D){s={name:(w||L||D)[1],startLine:I,content:[e[I]]},c=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length;continue}if(s&&(s.content.push(e[I]),c+=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u+=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length,c===0&&u===0&&b.endsWith(";"))){n[s.name]={startLine:s.startLine,endLine:I,name:s.name,content:s.content};let k=s.startLine;for(;k>0&&e[k-1].trim().startsWith("%");)k-=1;n[s.name].startLine=k,s=null}}const _=new Set;function v(I){const b=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&b.push(w);return b}for(const I of e)v(I).forEach(w=>_.add(w));const g=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));g.sort((I,b)=>b.start-I.start);const h=[...e];for(const I of g)h.splice(I.start,I.end-I.start+1);const m=[];let C=!1;for(const I of h)I.trim()===""?C||(m.push(I),C=!0):(m.push(I),C=!1);return m.join(`
`)}function Zg(t){let e=t,n=e.length;for(;e=ZR(e),e.length!=n;)n=e.length;return e}const Qg=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function QR(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function JR(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions;
`);for(const a of e.getAllCells()){const s=yt(a,"board_regions");a.region!==null?t.add(`constraint ${s} = ${a.region};
`):t.add(`constraint ${s} = ${r-1};
`)}}}function Ld(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function ek(t,e){const r=t.grid.getPositiveDiagonal(),i=je(r);let a=yi(i);return a=`
% Positive Diagonal Constraint
`+a,a}function tk(t,e){const r=t.grid.getNegativeDiagonal(),i=je(r);let a=yi(i);return a=`
% Negative Diagonal Constraint
`+a,a}function nk(t,e){const r=t.grid.getPositiveDiagonal(),a="["+je(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function rk(t,e){const r=t.grid.getNegativeDiagonal(),a="["+je(r).join(",")+"]";let s=`
% ${e}
`;return s+=`constraint count_unique_values(${a}) == 3;
`,s}function ik(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getPositiveDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_+(u-v));if(!g||!h)continue;const m=Oe(g),C=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function ok(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let a="";const s=n.getNegativeDiagonal();for(const c of s){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_-(u-v));if(!g||!h)continue;const m=Oe(g),C=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;a+=b}}return a}function ak(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let a=0;a<i;a++){const s=n.getDisjointGroup(a),_=`constraint alldifferent(${`[${je(s).join(",")}]`});
`;r+=_}return r}function sk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=Oe(i),_=`[${je(s).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function lk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=Oe(i),_=`[${je(s).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function ck(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=pt(n,`${e}`),n}function uk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=pt(n,`${e}`),n}function dk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=pt(n,`${e}`),n}function*ui(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function _k(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of ui(n)){const s=Oe(i),c=Oe(a),u=`constraint not consecutive_p(${s}, ${c});
`;r+=u}return r}function fk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of ui(n)){const s=Oe(i),c=Oe(a),u=`constraint not ratio_p(${s}, ${c}, 2);
`;r+=u}return r}function gk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getRow(i.r),c=`[${je(a).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function hk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function vk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function pk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=pt(n,`${e}`),n}function iu(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const a=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&a.push(_)}let s="";for(const[c,u]of ui(n)){if(a.find(h=>h.has(c)&&h.has(u)))continue;const v=Oe(c),g=Oe(u);if(e===d.ALL_V_GIVEN){const h=`constraint ${v} + ${g} != 5;
`;s+=h}else if(e===d.ALL_X_GIVEN){const h=`constraint ${v} + ${g} != 10;
`;s+=h}else{const h=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;s+=h}}return s=pt(s,`${e}`),s}function _o(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,a=new Set(i.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s));n.push(a)}return n}function mk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),a=_o(n,i);let s="";for(const[c,u]of ui(n)){if(a.find(C=>C.has(c)&&C.has(u)))continue;const v=Oe(c),g=Oe(u);let h="";if(c.r==u.r){const I=n.getRow(c.r)[0];h=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];h=Oe(I)}if(!h)continue;const m=`constraint abs(${v} - ${g}) != ${h};
`;s+=m}return s=pt(s,`${e}`),s}function Ck(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),a=r.get(d.RATIO);let s=_o(n,i);s=[...s,..._o(n,a)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,g]of ui(n)){if(s.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),C=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${C}) != ${b};
`;_+=w}}return _=pt(_,`${e}`),_}function Ek(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),a=r.get(d.DIFFERENCE);let s=_o(n,i);s=[...s,..._o(n,a)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,g]of ui(n)){if(s.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),C=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${C}, ${b});
`;_+=w}}return _=pt(_,`${e}`),_}function Ik(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),a=_o(n,i);let s="";for(const[c,u]of ui(n)){if(a.find(I=>I.has(c)&&I.has(u)))continue;const v=Oe(c),g=Oe(u),h=yt(c,oe.YIN_YANG),m=yt(u,oe.YIN_YANG),C=`constraint not yin_yang_kropki_p(${v}, ${g}, ${h}, ${m});
`;s+=C}return s=pt(s,`${e}`),s}function bk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),a=i?Object.values(i):[];function s(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=s(a,u),v=_?_.directions:[],g=Oe(u),h=[Be.E,Be.N,Be.S,Be.W];for(const m of h){if(v.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),I=$e(C,oe.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=pt(c,`${e}`),c}function Ad(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,a=t.getCell(i.r,i.c);a&&n.add(a)}return n}function wk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),a=Ad(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=n.getRow(c.r),g=`[${je(_).join(",")}]`,h=c.c+1,m=`constraint not indexing_column_p(${g}, ${h});
`;s+=m}return s=pt(s,`${e}`),s}function Ok(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),a=Ad(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=Oe(c),[v,g,h,m]=yd(n,c),C=`constraint not radar_p(${_}, ${v}, ${g}, ${h}, ${m}, 9);
`;s+=C}return s=pt(s,`${e}`),s}function yk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),a=Ad(n,i);let s="";for(const c of n.getAllCells()){if(a.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,h=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;s+=h}return s=pt(s,`${e}`),s}function Lk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,a]of ui(n)){const s=Oe(i),c=Oe(a),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${a.r},${a.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${s} - ${c}) >= 5;
`;r+=v}return r}function Ak(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let a=`
% ${e}
`;for(const s of Object.values(i)){const u=s.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=$e(u,oe.YIN_YANG);a+=`constraint count_unique_values(${_}) >= 2;
`}return a}function Sk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=pt(n,`${e}`),n}function xk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=pt(n,`${e}`),n}function Nk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=pt(n,`${e}`),n}function Dk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=pt(n,`${e}`),n}function Tk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=pt(n,`${e}`),n}function Rk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=pt(n,`${e}`),n}function kk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=pt(n,`${e}`),n}function Gk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=pt(n,`${e}`),n}function Mk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=pt(n,`${e}`),n}function $k(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=pt(n,`${e}`),n}function Fk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const a=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),s=yt(i,oe.BOARD),c=yt(i,oe.YIN_YANG),u=$e(a,oe.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${c}, ${u});
`}return n=pt(n,`${e}`),n}function Uk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=pt(n,`${e}`),n}function Hk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=pt(n,`${e}`),n}function Pk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=pt(n,`${e}`),n}function Bk(t,e){let n="";const a="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${a});
`,n=pt(n,`${e}`),n}function Wk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=je(u),v=yi(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const a=n.nCols;for(let c=0;c<a;c++){const u=n.getCol(c),_=je(u),v=yi(_);r+=v}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=je(_),g=yi(v);r+=g}}return r}function zk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const Yk=new Map([[d.POSITIVE_DIAGONAL,ek],[d.NEGATIVE_DIAGONAL,tk],[d.POSITIVE_ANTIDIAGONAL,nk],[d.NEGATIVE_ANTIDIAGONAL,rk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,ik],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,ok],[d.ANTIKING,sk],[d.ANTIKNIGHT,lk],[d.ANTI_GIRAFFE,ck],[d.DISJOINT_GROUPS,ak],[d.TANGO,uk],[d.NONCONSECUTIVE,_k],[d.NONRATIO,fk],[d.ANTI_ENTROPY,dk],[d.GLOBAL_INDEXING_COLUMN,gk],[d.ALL_V_GIVEN,iu],[d.ALL_X_GIVEN,iu],[d.ALL_XV_GIVEN,iu],[d.ALL_DIFFERENCES_GIVEN,Ck],[d.ALL_RATIOS_GIVEN,Ek],[d.ALL_XY_DIFFERENCES_GIVEN,mk],[d.ALL_YIN_YANG_KROPKI_GIVEN,Ik],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,bk],[d.ALL_INDEXING_COLUMN_GIVEN,wk],[d.ALL_RADARS_GIVEN,Ok],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,yk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Lk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Ak],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,pk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,hk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,vk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Sk],[d.CAVE_CELLS_ARE_ODD,Nk],[d.CAVE_WALLS_ARE_EVEN,Dk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Tk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Rk],[d.YIN_YANG_FILLOMINO_PARITY,xk],[d.TWO_SYMMETRIC_GALAXIES,Mk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,kk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Gk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,$k],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Fk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,Uk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Bk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,Hk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,Pk]]);function jk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const a=Yk.get(r);if(!a)continue;const s=a(t,r);e+=s}return e}function zv(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function Yv(t,e){const n=e.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return`[${je(n.slice(1)).join(",")}]`}function Vk(t,e,n,r){let i="";const a=zv(e,r),s=`arrow_${n}`;if(i+=`var int: ${s};
`,i+=`% arrow pill
`,a.length===1){const u=a[0];i+=`constraint ${s} == ${u};
`}else if(a.length>1){const u=a.toReversed().map((_,v)=>`${Math.pow(10,v)}*${_}`).join(" + ");i+=`constraint ${s} == ${u};
`}else return"";const c=r.lines;i+=`% arrow lines
`;for(const u of c){const v=`constraint sum(${Yv(e,u)}) == ${s};
`;i+=v}return i}function Kk(t,e,n,r){let i="";const a=zv(e,r);if(a.length===1){const s=a[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${Yv(e,u)}, ${s});
`;i+=v}}return i}const Xk=new Map([[d.ARROW,Vk],[d.AVERAGE_ARROW,Kk]]);function qk(t,e,n,r){let i="";const a=Xk.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function ii(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function jv(t,e,n){const i=`[${ii(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function _l(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Sd(t,e,n,r,i){const s=`[${ii(e,r).join(",")}]`,c=r.value,u=_l(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${i}(${s}, ${_});
`,v}function Zk(t,e,n,r){const i=ii(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return yi(i);const c=_l(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${a}, ${u});
`,_}function Qk(t,e,n,r){const i=ii(e,r),a=`[${i.join(",")}]`,s=r.value;if(!s)return yi(i);const c=_l(t,s,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${a}, ${u});
`,_}function Jk(t,e,n,r){return Sd(t,e,n,r,"sum_cage_p")}function e3(t,e,n,r){return jv(e,r,"parity_balance_cage_p")}function t3(t,e,n,r){return jv(e,r,"sum_cage_look_and_say_p")}function n3(t,e,n,r){return Sd(t,e,n,r,"divisible_killer_cage_p")}function r3(t,e,n,r){return Sd(t,e,n,r,"spotlight_cage_p")}function i3(t,e,n,r){const a=`[${ii(e,r).join(",")}]`,s=r.value;if(s){const c=parseInt(s);return`constraint unique_values_cage_p(${a}, ${c}, ALLOWED_DIGITS);
`}return""}function o3(t,e,n,r){const a=`[${ii(e,r).join(",")}]`,s=r.value;let c="";const u=_l(t,s,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${a}) == ${m};
`}const v=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!v.includes(I)&&!g.includes(I)&&g.push(I)});const h=$e(g,oe.BOARD);return c+=`constraint vaulted_cage_p(${a}, ${h});
`,c}function Vv(t,e,n,r,i){const s=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),u=`[${je(s).join(",")}]`,_=$e(s,oe.YIN_YANG),v=r.value;if(v){const g=parseInt(v);return`constraint ${i}(${u}, ${_}, ${g});
`}return""}function a3(t,e,n,r){return Vv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function s3(t,e,n,r){return Vv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function l3(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(a).join(",")}]`,_=`[${ul(a).join(", ")}]`,v=r.value;if(v){const g=parseInt(v);return`constraint doublers_killer_cage_p(${c}, ${_}, ${g});
`}return""}function c3(t,e,n,r){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(a).join(",")}]`,_=`[${ul(a).join(", ")}]`,v=r.value;if(v){const g=parseInt(v);return`constraint negators_killer_cage_p(${c}, ${_}, ${g});
`}return""}function u3(t,e){let n="";const r=Ld(e);for(const i of r.values())if(!(i.length<=1))for(const[a,s]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${ii(t,a).join(",")}]`,v=`[${ii(t,s).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const d3=new Map([[d.KILLER_CAGE,Zk],[d.INVERTED_KILLER_CAGE,Qk],[d.SUM_CAGE,Jk],[d.PARITY_BALANCE_CAGE,e3],[d.SUM_CAGE_LOOK_AND_SAY,t3],[d.DIVISIBLE_KILLER_CAGE,n3],[d.SPOTLIGHT_CAGE,r3],[d.UNIQUE_DIGITS_CAGE,i3],[d.VAULTED_CAGE,o3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,a3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,s3],[d.DOUBLERS_KILLER_CAGE,l3],[d.NEGATORS_KILLER_CAGE,c3]]);function _3(t,e,n,r){let i="";const a=d3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}else if(n===d.MULTISET_CAGE){const s=Object.values(r),c=u3(e,s);i+=c}return i}function f3(t,e,n,r){const i=e.r+.5,a=e.c+.5,s=n-i,c=r-a,u=Math.floor(n+s),_=Math.floor(r+c);return t.getCell(u,_)}function g3(t,e){const n=[],r=[],i=[];for(const a of t.getAllCells()){const s=f3(t,a,e.r,e.c);s&&!n.includes(s)?(n.push(a),r.push(s)):r.includes(a)||i.push(a)}return[n,r,i]}function h3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[g,h,m]=g3(e,_),C=$e(g,oe.GALAXY_REGIONS),I=$e(h,oe.GALAXY_REGIONS),b=$e(m,oe.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${C}, ${I}, ${b}, ${v});
`,r+=`constraint connected_region(${oe.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const L=parseInt(w);r+=`constraint galaxy_sum_p(${oe.BOARD}, ${oe.GALAXY_REGIONS}, ${L}, ${v});
`}if(!n.length)return r;const i=e.nCols*e.nRows,s=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${oe.GALAXY_REGIONS}, ${s});
`,r}function v3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function p3(t,e,n,r){const i=r.cell,[a,s]=[i.r,i.c],c=r.value,u=v3(t,c,n);if(!u)return"";const _=u[1];let v=u[0],g=[];if(a%1===0&&s%1===0?g=Wh(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(a%1===.5&&s%1===0||a%1===0&&s%1===.5)&&(g=sd(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const h=$e(g,oe.BOARD),m=$e(g,oe.YIN_YANG);return v+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${_};
`,v}const m3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,p3]]),C3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,h3]]);function E3(t,e,n,r){let i="";const a=C3.get(n),s=m3.get(n);if(s)for(const[c,u]of Object.entries(r)){const _=s(t,e,c,u);i+=_}else if(a){const c=Object.values(r),u=a(t,e,c);i+=u}return i}function Jg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return je(n)}function I3(t,e){const r="["+Jg(t,e.cells).join(",")+"]",a="["+Jg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${a});
`}const b3=new Map([[d.CLONE_REGION,I3]]);function w3(t,e,n,r){return dl(e,n,r,b3)}function xd(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function Nd(t,e,n){const i=`[${xd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Kv(t,e,n,r=""){const a=`[${xd(t,e).join(",")}]`;let s=e.value;if(s||(s=r),s){const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}return""}function O3(t,e,n,r){const a=`[${xd(e,r).join(",")}]`,s=r.value;if(!s)return"";const c=Wv(s);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${a}, ${_});
`,u}function y3(t,e,n,r){return Kv(e,r,"corner_sum_p")}function L3(t,e,n,r){return Kv(e,r,"corner_even_count_p")}function A3(t,e,n,r){return Nd(e,r,"corner_sum_of_three_equals_the_other_p")}function S3(t,e,n,r){return Nd(e,r,"equal_diagonal_differences_p")}function x3(t,e,n,r){return Nd(e,r,"product_square_p")}const N3=new Map([[d.QUADRUPLE,O3],[d.CORNER_SUM,y3],[d.CORNER_EVEN_COUNT,L3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,A3],[d.PRODUCT_SQUARE,x3],[d.EQUAL_DIAGONAL_DIFFERENCES,S3]]);function D3(t,e,n,r){let i="";const a=N3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function fl(t,e){const r=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return je(r)}function T3(t,e,n){const r=fl(t,e),[i,a]=r;return`constraint ${n}(${i}, ${a});
`}function R3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function gl(t,e,n,r,i,a=""){var m;const s=fl(e,r),[c,u]=s,_=(m=r.value)!=null&&m.length?r.value:a,v=R3(t,_,n);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint ${i}(${c}, ${u}, ${g});
`,h}function k3(t,e,n,r){const i=fl(e,r),[a,s]=i;return r.value==="V"||r.value==="v"?`constraint ${a} + ${s} = 5;
`:`constraint ${a} + ${s} = 10;
`}function G3(t,e,n,r){return gl(t,e,n,r,"ratio_p","2")}function M3(t,e,n,r){return gl(t,e,n,r,"abs_difference","1")}function eh(t,e,n,r){const i=fl(e,r),[a,s]=i,c=r.value;return c==="<"?`constraint ${a} < ${s};
`:c===">"?`constraint ${a} > ${s};
`:""}function $3(t,e,n,r){return gl(t,e,n,r,"edge_sum_p")}function F3(t,e,n,r){return gl(t,e,n,r,"edge_modulo_p")}function U3(t,e,n,r){return T3(e,r,"edge_factor_p")}function H3(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[s,c]=je(a),[u,_]=a;let v="";if(u.r==_.r){const m=e.getRow(u.r)[0];v=Oe(m)}else if(u.c==_.c){const m=e.getCol(u.c)[0];v=Oe(m)}return v?`constraint abs(${s} - ${c}) == ${v};
`:""}function P3(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[s,c]=je(a),u=Fi(a,oe.YIN_YANG),[_,v]=u;return`constraint yin_yang_kropki_p(${s}, ${c}, ${_}, ${v});
`}function B3(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[s,c]=je(a),u=Fi(a,oe.YIN_YANG),[_,v]=u;return`constraint yin_yang_white_kropki_p(${s}, ${c}, ${_}, ${v});
`}function W3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),s=Fi(a,oe.UNKNOWN_REGIONS),[c,u]=s;return`constraint ${c} != ${u};
`}function z3(t,e,n,r){const a=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),s=Fi(a,oe.CAVE_SHADING),[c,u]=s;return`constraint ${c} != ${u};
`}const Y3=new Map([[d.XV,k3],[d.DIFFERENCE,M3],[d.RATIO,G3],[d.EDGE_INEQUALITY,eh],[d.ONE_WAY_DOOR,eh],[d.EDGE_SUM,$3],[d.EDGE_MODULO,F3],[d.EDGE_FACTOR,U3],[d.XY_DIFFERENCES,H3],[d.YIN_YANG_KROPKI,P3],[d.YIN_YANG_WHITE_KROPKI,B3],[d.UNKNOWN_REGION_BORDER,W3],[d.EDGE_CAVE_ONE_OF_EACH,z3]]);function j3(t,e,n,r){let i="";const a=Y3.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function xo(t,e,n=!1){let i=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return n&&(i=[...new Set(i)]),je(i)}function gt(t,e,n,r=!1){const a=`[${xo(t,e,r).join(",")}]`;return`constraint ${n}(${a});
`}function hr(t,e,n,r=""){const a=`[${xo(t,e).join(",")}]`;let s=e.value;if(s||(s=r),!s)return"";const c=parseInt(s);return`constraint ${n}(${a}, ${c});
`}function Dd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),a=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),a=!0);const c=`[${je(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${a});
`}function V3(t,e,n,r){return gt(e,r,"renban",!0)}function K3(t,e,n,r){return gt(e,r,"double_renban_p",!0)}function X3(t,e,n,r){return gt(e,r,"renrenbanban_p",!0)}function q3(t,e,n,r){return gt(e,r,"knabner_p",!0)}function Z3(t,e,n,r){return gt(e,r,"renban_or_nabner_line_p",!0)}function Q3(t,e,n,r){return gt(e,r,"out_of_order_consecutive_line_p")}function J3(t,e,n,r){const a=`[${xo(e,r).join(",")}]`,s=r.value,c=s?parseInt(s):5;return`constraint whispers(${a}, ${c});
`}function e5(t,e,n,r){return`constraint whispers(${`[${xo(e,r).join(",")}]`}, 4);
`}function t5(t,e,n,r){return gt(e,r,"strictly_increasing")}function n5(t,e,n,r){return gt(e,r,"fuzzy_thermo_p")}function r5(t,e,n,r){return gt(e,r,"increasing")}function i5(t,e,n,r){return hr(e,r,"custom_thermo_p")}function o5(t,e,n,r){return gt(e,r,"palindrome")}function a5(t,e,n,r){return hr(e,r,"sum_line_p")}function s5(t,e,n,r){return gt(e,r,"xv_line_p")}function l5(t,e,n,r){return hr(e,r,"at_least_x_line_p","10")}function c5(t,e,n,r){return hr(e,r,"product_line_p")}function u5(t,e,n,r){return hr(e,r,"maximum_adjacent_difference_line_p","2")}function d5(t,e,n,r){return gt(e,r,"adjacent_multiples_line_p")}function _5(t,e,n,r){return gt(e,r,"index_line_p")}function f5(t,e,n,r){return gt(e,r,"zipper_line_p")}function g5(t,e,n,r){return Dd(e,r,"segmented_sum_line_p")}function h5(t,e,n,r){return gt(e,r,"segmented_sum_and_renban_line_p")}function v5(t,e,n,r){return Dd(e,r,"n_consecutive_renban_line_p")}function p5(t,e,n,r){return Dd(e,r,"n_consecutive_fuzzy_sum_line_p")}function m5(t,e,n,r){const a=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_);let s="";const c=[];for(let _=0;_<a.length;_++){const v=a[_],g=e.getRow(v.r),h=$e(g,oe.BOARD),m=`cycle_${n}_${_}`;c.push(m);const C=v.c+1;s+=`var int: ${m} = cycle_order_f(${h}, ${C});
`}const u="["+c.join(",")+"]";return s+=`constraint strictly_increasing(${u});
`,s}function C5(t,e,n,r){return gt(e,r,"adjacent_differences_count_line_p")}function E5(t,e,n,r){return gt(e,r,"same_parity_line_p")}function I5(t,e,n,r){return hr(e,r,"renban_or_whispers_p","5")}function b5(t,e,n,r){return gt(e,r,"alldifferent",!0)}function w5(t,e,n,r){return gt(e,r,"repeated_digits_line_p")}function O5(t,e,n,r){return gt(e,r,"superfuzzy_arrow_p")}function y5(t,e,n,r){return gt(e,r,"ambiguous_arrow_p",!0)}function L5(t,e,n,r){return gt(e,r,"headless_arrow_p")}function A5(t,e,n,r){return hr(e,r,"unimodular_line_p","3")}function S5(t,e,n,r){return hr(e,r,"modular_line_p","3")}function x5(t,e,n,r){return hr(e,r,"modular_or_unimodular_line_p","3")}function N5(t,e,n,r){return gt(e,r,"arithmetic_sequence_line_p")}function D5(t,e,n,r){return gt(e,r,"odd_even_oscillator_line_p")}function T5(t,e,n,r){return hr(e,r,"high_low_oscillator_line_p","5")}function R5(t,e,n,r){return gt(e,r,"look_and_say_line_p",!0)}function k5(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h);function s(h){const m=[];let C=null;for(const I of h)I.r!=C?(m.push([I]),C=I.r):m[m.length-1].push(I);return m}const c=s(a);if(c.length<2)return"";const u=c[0],v=`[${je(u).join(",")}]`;let g="";for(let h=1;h<c.length;h++){const m=c[h],I=`[${je(m).join(",")}]`;g+=`constraint sum(${I}) == sum(${v});
`}return g}function G5(t,e,n,r){return gt(e,r,"between_line_p")}function M5(t,e,n,r){return gt(e,r,"tightrope_line_p")}function $5(t,e,n,r){return gt(e,r,"double_arrow_p")}function F5(t,e,n,r){return gt(e,r,"split_peas_p")}function U5(t,e,n,r){return gt(e,r,"parity_count_line_p")}function H5(t,e,n,r){return gt(e,r,"product_of_ends_equals_sum_of_line_p")}function P5(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const a=i.region;n!==a&&(r.length&&e.push(r),r=[]),r.push(i),n=a}return r.length&&e.push(r),e}function B5(t,e,n,r){let i="";const s=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),c=P5(s);if(!c.length)return"";const u=`sum_line_${n}`;i+=`var int: ${u};
`;for(const _ of c){const h=`constraint sum(${`[${je(_).join(",")}]`}) == ${u};
`;i+=h}return i}function W5(t,e,n,r){return`constraint entropic_line_p(${`[${xo(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function z5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${xo(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function Y5(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${je(a).join(",")}]`,u=$e(a,oe.YIN_YANG);let _=r.value;_||(_="5");const v=parseInt(_);return`constraint yin_yang_shaded_whispers_line_p(${c}, ${u}, ${v});
`}function j5(t,e,n,r){const a=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${je(a).join(",")}]`,u=$e(a,oe.YIN_YANG);let _=r.value;_||(_="3");const v=parseInt(_);return`constraint yin_yang_unshaded_modular_line_p(${c}, ${u}, ${v});
`}function Td(t,e,n){const i=e.cells.map(_=>t.getCell(_.r,_.c)).filter(_=>!!_),s=`[${je(i).join(",")}]`,c=$e(i,oe.YIN_YANG);return`constraint ${n}(${s}, ${c});
`}function V5(t,e,n,r){return Td(e,r,"yin_yang_unshaded_entropic_line_p")}function K5(t,e,n,r){return Td(e,r,"yin_yang_indexing_line_coloring_p")}function X5(t,e,n,r){return Td(e,r,"yin_yang_region_sum_line_p")}function q5(t,e,n,r){const a=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),s=$e(a,oe.VALUES_GRID),c=$e(a,oe.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${s}, ${c});
`}function Rd(t,e,n){const i=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),s=`[${ul(i).join(", ")}]`;return`constraint ${n}(${s});
`}function Z5(t,e,n,r){return Rd(e,r,"between_line_p")}function Q5(t,e,n,r){return Rd(e,r,"double_arrow_p")}function J5(t,e,n,r){return Rd(e,r,"strictly_increasing")}const eG=new Map([[d.THERMOMETER,t5],[d.FUZZY_THERMOMETER,n5],[d.SLOW_THERMOMETER,r5],[d.CUSTOM_THERMOMETER,i5],[d.RENBAN_LINE,V3],[d.DOUBLE_RENBAN_LINE,K3],[d.RENRENBANBAN_LINE,X3],[d.NABNER_LINE,q3],[d.WHISPERS_LINE,J3],[d.DUTCH_WHISPERS,e5],[d.RENBAN_OR_WHISPERS_LINE,I5],[d.RENBAN_OR_NABNER_LINE,Z3],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,Q3],[d.N_CONSECUTIVE_RENBAN_LINE,v5],[d.PALINDROME,o5],[d.SUM_LINE,a5],[d.PRODUCT_LINE,c5],[d.XV_LINE,s5],[d.AT_LEAST_X_LINE,l5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,u5],[d.SAME_PARITY_LINE,E5],[d.ADJACENT_MULTIPLES_LINE,d5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,C5],[d.LOOK_AND_SAY_LINE,R5],[d.ROW_SUM_LINE,k5],[d.INDEX_LINE,_5],[d.ZIPPER_LINE,f5],[d.SEGMENTED_SUM_LINE,g5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,h5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,p5],[d.SUPERFUZZY_ARROW,O5],[d.AMBIGUOUS_ARROW,y5],[d.HEADLESS_ARROW,L5],[d.ARITHMETIC_SEQUENCE_LINE,N5],[d.ODD_EVEN_OSCILLATOR_LINE,D5],[d.HIGH_LOW_OSCILLATOR_LINE,T5],[d.UNIQUE_VALUES_LINE,b5],[d.REPEATED_DIGITS_LINE,w5],[d.UNIMODULAR_LINE,A5],[d.MODULAR_LINE,S5],[d.MODULAR_OR_UNIMODULAR_LINE,x5],[d.REGION_SUM_LINE,B5],[d.ENTROPIC_LINE,W5],[d.ENTROPIC_OR_MODULAR_LINE,z5],[d.ROW_CYCLE_THERMOMETER,m5],[d.BETWEEN_LINE,G5],[d.TIGHTROPE_LINE,M5],[d.DOUBLE_ARROW_LINE,$5],[d.SPLIT_PEAS,F5],[d.PARITY_COUNT_LINE,U5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,H5],[d.DOUBLERS_THERMOMETER,J5],[d.DOUBLERS_BETWEEN_LINE,Z5],[d.DOUBLERS_DOUBLE_ARROW_LINE,Q5],[d.YIN_YANG_SHADED_WHISPERS_LINE,Y5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,V5],[d.YIN_YANG_UNSHADED_MODULAR_LINE,j5],[d.YIN_YANG_REGION_SUM_LINE,X5],[d.YIN_YANG_INDEXING_LINE_COLORING,K5],[d.GOLDILOCKS_ZONE_REGION_SUM,q5]]);function tG(t,e,n,r){let i="";const a=eG.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function hl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return je(i)}function Sa(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let a="";return(!r||r.outside)&&(a=`R${n.r}C${n.c}`,a=a.replace("-","m")),e||(e=a),t.getOrSetSharedVar(e,a,i)}function Qn(t,e,n,r){const i=n.cell,a=e.getCell(i.r,i.c),c=`[${hl(e,n).join(",")}]`,u=n.value,_=Sa(t,u,i,a);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function nG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${hl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=Sa(t,u,i,a);if(!h)return"";const m=h[1];let C=h[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C}function rG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),c=`[${hl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=Sa(t,u,i,a);if(!h)return"";const m=h[1];let C=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return C+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${I}, ${b});
`,C}function iG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=hl(e,r),c=`[${s.join(",")}]`,u=s[0],_=r.value,v=Sa(t,_,i,a);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint x_index_p(${c}, ${u}, ${g});
`,h}function oG(t,e,n,r){return Qn(t,e,r,"x_sum_p")}function aG(t,e,n,r){return Qn(t,e,r,"shortsighted_x_sum_p")}function sG(t,e,n,r){return Qn(t,e,r,"broken_x_sum_p")}function lG(t,e,n,r){return Qn(t,e,r,"shifted_x_sum_p")}function cG(t,e,n,r){return Qn(t,e,r,"skyscrapers_p")}function uG(t,e,n,r){return Qn(t,e,r,"x_sum_skyscrapers_p")}function dG(t,e,n,r){return Qn(t,e,r,"battlefield_p")}function _G(t,e,n,r){return Qn(t,e,r,"rising_streak_p")}function fG(t,e,n,r){return Qn(t,e,r,"outside_consecutive_sum_p")}function gG(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${je(s).join(",")}]`,_=$e(s,oe.CELL_CENTER_LOOP),v=r.value;if(v){const g=parseInt(v);return`constraint loopwhiches_p(${u}, ${_}, ${g});
`}return""}function hG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c),s=r.direction,c=e.getCellsInDirection(i.r,i.c,s),u=$e(c,oe.BOARD),_=$e(c,oe.UNKNOWN_REGIONS),v=r.value,g=Sa(t,v,i,a);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${h});
`,m}function vG(t,e,n,r){return Qn(t,e,r,"little_killer_sum_p")}function pG(t,e,n,r){return Qn(t,e,r,"little_killer_product_p")}function mG(t,e,n,r){return Qn(t,e,r,"x_omit_little_killer_sum_p")}function CG(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${je(s).join(",")}]`,_=$e(s,oe.YIN_YANG),v=r.value;if(v){const g=parseInt(v);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${_}, ${g});
`}return""}function EG(t,e,n,r){const i=r.cell,a=r.direction,s=e.getCellsInDirection(i.r,i.c,a),u=`[${ul(s).join(", ")}]`,_=r.value;if(_){const v=parseInt(_);return`constraint little_killer_sum_p(${u}, ${v});
`}return""}const IG=new Map([[d.SANDWICH_SUM,nG],[d.X_SUM,oG],[d.SHORTSIGHTED_X_SUM,aG],[d.BROKEN_X_SUM,sG],[d.SHIFTED_X_SUM,lG],[d.SKYSCRAPERS,cG],[d.X_SUM_SKYSCRAPERS,uG],[d.X_INDEX,iG],[d.BATTLEFIELD,dG],[d.SANDWICH_SUM_XOR_X_SUM,rG],[d.RISING_STREAK,_G],[d.OUTSIDE_CONSECUTIVE_SUM,fG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,CG],[d.LOOPWICHES,gG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,hG],[d.LITTLE_KILLER_SUM,vG],[d.LITTLE_KILLER_PRODUCT,pG],[d.X_OMIT_LITTLE_KILLER_SUM,mG],[d.NEGATORS_LITTLE_KILLER_SUM,EG]]);function bG(t,e,n,r){let i="";const a=IG.get(n);if(a)for(const[s,c]of Object.entries(r)){const u=a(t,e,s,c);i+=u}return i}function wG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let a=t.getCellsInDirection(r.r,r.c,i);a=[r,...a];const s=$e(a,oe.SASHIGANE),c=$e(a,oe.SASHIGANE_BENDS),u=Oe(r),_=yt(r,oe.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${s}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function OG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,a=t.getCellsInDirection(r.r,r.c,i),c="["+je(a).join(",")+"]",u=$e(a,oe.CELL_CENTER_LOOP),_=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const yG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,wG],[d.THERMO_SIGHTLINE_LOOP_ARROW,OG]]);function LG(t,e,n,r){return dl(e,n,r,yG)}function Xv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i);return`constraint ${n}(${a});
`}function AG(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function qv(t,e,n,r=""){const i=e.cell,a=t.getCell(i.r,i.c);if(!a)return"";const s=Oe(a);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${s}, ${u});
`}function SG(t,e,n,r){return Xv(e,r,"odd_p")}function xG(t,e,n,r){return Xv(e,r,"even_p")}function NG(t,e,n,r){return qv(e,r,"low_digit_p","5")}function DG(t,e,n,r){return qv(e,r,"high_digit_p","5")}function Zv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=t.getNeighboorCells(i),c=$e(s,oe.BOARD);return`constraint ${n}(${c}) == ${a};
`}function TG(t,e,n,r){return Zv(e,r,"odd_count")}function RG(t,e,n,r){return Zv(e,r,"even_count")}function kG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=$e(c,oe.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function GG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getOrthogonallyAdjacentCells(a);return`constraint sum_p(${$e(c,oe.BOARD)}, ${s});
`}function MG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getDiagonallyAdjacentCells(a);return`constraint sum_p(${$e(c,oe.BOARD)}, ${s});
`}function $G(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getRow(a.r),c=$e(s,oe.BOARD),u=a.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function FG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=e.getCol(a.c),c=$e(s,oe.BOARD),u=a.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function UG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=a.r+1,u=a.c+1;if(a.region!==null){const v=a.region+1;return`constraint ${s} == ${c} \\/ ${s} == ${u} \\/ ${s} == ${v};
`}return`constraint ${s} == ${c} \\/ ${s} == ${u};
`}function HG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!s||!c||!u||!_)return"";const v=Oe(s),g=Oe(c),h=Oe(u),m=Oe(_);return`constraint groups_opposite_parity_p([${v},${g}], [${h},${m}]);
`}function kd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),[s,c,u,_]=yd(t,i);return`constraint ${n}(${a}, ${s}, ${c}, ${u}, ${_});
`}function PG(t,e,n,r){return kd(e,r,"is_watchtower_p")}function BG(t,e,n,r){return kd(e,r,"is_not_watchtower_p")}function WG(t,e,n,r){return kd(e,r,"farsight_p")}function zG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),[c,u,_,v]=yd(e,a);return`constraint radar_p(${s}, ${c}, ${u}, ${_}, ${v}, 9);
`}function YG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u="["+je(c).join(",")+"]",_=e.getCol(a.c),v="["+je(_).join(",")+"]",[g,h]=[a.r+1,a.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${h}, ${s});
`}function Qv(t,e,n){const r=Object.values(e);let i="";const a=r.map(c=>c.cell),s=new Set(a.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=Oe(_),g=t.getOrthogonallyAdjacentCells(_).filter(C=>!s.has(C)),h=$e(g,oe.BOARD),m=`constraint ${n}(${h}, ${v});
`;i+=m}return i}function jG(t,e,n){return Qv(e,n,"maximum_p")}function VG(t,e,n){return Qv(e,n,"minimum_p")}function KG(t,e,n){const r=Object.values(n);let i="";const a=r.map(_=>_.cell),s=new Set(a.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...s]).join(`,
	`)}`;i+=`array[int] of var int: counting_circles = [
	${u}
];
`;for(const _ of r){const v=_.cell,g=e.getCell(v.r,v.c);if(!g)continue;const h=Oe(g),m=`constraint count(counting_circles, ${h}) == ${h};
`;i+=m}return i+=`
`,i}function XG(t,e,n){const r=Object.values(n);let i="";const a=r.map(g=>g.cell),s=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${je([...s]).join(`,
	`)}`,v=`${Fi([...s],oe.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${oe.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${oe.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(s.has(g))continue;const h=yt(g,oe.COUNTING_CIRCLES_COLORS);i+=`constraint ${h} == 0;
`}for(const g of r){const h=g.cell,m=e.getCell(h.r,h.c);if(!m)continue;const C=Oe(m),I=yt(m,oe.COUNTING_CIRCLES_COLORS),b=g.value;b?i+=`constraint ${I} == ${b};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${I}) == ${C};
`}return i+=`
`,i}function qG(t,e,n){const r=Object.values(n);let i="";const a=r.map(_=>_.cell),s=new Set(a.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...s]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function ZG(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint yin_yang_minesweeper_p(${$e(u,oe.YIN_YANG)}, ${s});
`}function Gd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const a=Oe(i),s=Od(t,i),c=[];for(const v of s){const g=$e(v,oe.YIN_YANG);c.push(g)}const u=yt(i,oe.YIN_YANG);return`constraint ${n}(${a}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function QG(t,e,n,r){return Gd(e,r,"yin_yang_seen_unshaded_p")}function JG(t,e,n,r){return Gd(e,r,"yin_yang_seen_shaded_p")}function eM(t,e,n,r){return Gd(e,r,"yin_yang_seen_same_shade_p")}function tM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=yt(a,oe.YIN_YANG),u=e.getOrthogonallyAdjacentCells(a),_=$e(u,oe.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${c}, ${_});
`}function nM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a);return`constraint count(${$e(c,oe.YIN_YANG)}, 1) == ${s};
`}function rM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`two_contiguous_regions[${a.r},${a.c}]`,u=e.getRow(a.r),_=e.getCol(a.c),v="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",g="["+_.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${s}, ${c});
`}function iM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getRow(a.r),u=e.getCol(a.c),_="["+c.map(h=>`unknown_regions[${h.r},${h.c}]`).join(", ")+"]",v="["+u.map(h=>`unknown_regions[${h.r},${h.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${s});
`}function oM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=`nurimisaki[${a.r},${a.c}]`;let v=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(a).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const g=Od(e,a),h=[];for(const m of g){const C="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";h.push(C)}return v+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${s}, ${c}, ${h[0]}, ${h[1]}, ${h[2]}, ${h[3]});
`,v}function aM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=yt(a,oe.SASHIGANE),u=yt(a,oe.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${s}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function sM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=yt(a,oe.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function lM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${yt(a,oe.CELL_CENTER_LOOP)} == 1;
`:""}function cM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint ${yt(a,oe.CELL_CENTER_LOOP)} == 0;
`:""}function uM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=e.getNeighboorCells(a),u=[a,...c];return`constraint sum(${$e(u,oe.CELL_CENTER_LOOP)}) == ${s};
`}function dM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=Oe(a),c=yt(a,oe.CAVE_SHADING),u=Od(e,a),_=[];for(const g of u){const h=$e(g,oe.CAVE_SHADING);_.push(h)}return`constraint cave_clue_p(${s}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function _M(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),v=yt(a,oe.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(a),h=$e(g,oe.BOARD),m=$e(g,oe.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(a),I=$e(C,oe.BOARD),b=$e(C,oe.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[Be.NE,Be.NW,Be.SE,Be.SW],L=[];for(const G of w)e.getCellsInDirection(a.r,a.c,G).forEach(H=>L.push(H));const D=$e(L,oe.BOARD),k=$e(L,oe.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${D}, ${k}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function fM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);if(!a)return"";const s=r.value;if(!s)return"";const c=parseInt(s);let u="";const _=Oe(a),v=yt(a,oe.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(a),h=$e(g,oe.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${v}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],C=[];for(const I of m){const b=e.getCellsInDirection(a.r,a.c,I);if(!b.length)continue;const w=$e(b,oe.BOARD),L=$e(b,oe.UNKNOWN_REGIONS),D=`in_arrow_${n}_${I}`,k=`in_arrow_${n}_${I}[1]`;C.push(k),u+=`array[index_set(${w})] of var bool: ${D};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${L}, ${D}, ${_}, ${v});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}function gM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint dpath_source == ${a.r*e.nCols+a.c+1};
`:""}function hM(t,e,n,r){const i=r.cell,a=e.getCell(i.r,i.c);return a?`constraint dpath_target == ${a.r*e.nCols+a.c+1};
`:""}function vM(t,e,n){let r="",i=0;for(const[a,s]of Object.entries(n)){const c=s.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=s.value;if(!_)continue;const v=AG(t,_,a);if(!v)continue;const g=v[1];r+=v[0];const h=yt(u,oe.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${oe.BOARD}, ${oe.NURIKABE_REGIONS}, ${h}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${oe.NURIKABE_REGIONS})) == ${i+1};
`,r}function pM(t,e,n){let r="";const i=Ld(Object.values(n));for(const a of i.values())if(!(a.length<=1))for(const[s,c]of a.flatMap((u,_)=>a.slice(_+1).map(v=>[u,v]))){const u=s.cell,_=c.cell,v=e.getCell(u.r,u.c),g=e.getCell(_.r,_.c);if(!v||!g)continue;const h=yt(v,oe.BOARD),m=yt(g,oe.BOARD);r+=`constraint ${h} == ${m};
`}return r}const mM=new Map([[d.ODD,SG],[d.EVEN,xG],[d.LOW_DIGIT,NG],[d.HIGH_DIGIT,DG],[d.ODD_MINESWEEPER,TG],[d.EVEN_MINESWEEPER,RG],[d.DIAGONALLY_ADJACENT_SUM,MG],[d.ORTHOGONAL_SUM,GG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,kG],[d.FRIENDLY_CELL,UG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,HG],[d.WATCHTOWER,PG],[d.NOT_WATCHTOWER,BG],[d.FARSIGHT,WG],[d.RADAR,zG],[d.INDEXING_COLUMN,$G],[d.INDEXING_ROW,FG],[d.SANDWICH_ROW_COL_COUNT,YG],[d.YIN_YANG_MINESWEEPER,ZG],[d.YIN_YANG_SEEN_UNSHADED_CELLS,QG],[d.YIN_YANG_SEEN_SHADED_CELLS,JG],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,eM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,tM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,nM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,rM],[d.SEEN_REGION_BORDERS_COUNT,iM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,oM],[d.SASHIGANE_BEND_REGION_COUNT,aM],[d.SASHIGANE_REGION_SUM,sM],[d.CELL_ON_THE_LOOP,lM],[d.CELL_NOT_ON_THE_LOOP,cM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,uM],[d.CAVE_CLUE,dM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,_M],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,fM],[d.DIRECTED_PATH_START,gM],[d.DIRECTED_PATH_END,hM]]),CM=new Map([[d.MAXIMUM,jG],[d.MINIMUM,VG],[d.COUNTING_CIRCLES,KG],[d.COLORED_COUNTING_CIRCLES,XG],[d.UNIQUE_CELLS,qG],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,vM],[d.TELEPORT,pM]]);function EM(t,e,n,r){let i="";const a=mM.get(n),s=CM.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(s){const c=s(t,e,r);i+=c}return i}function IM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=yt(r,oe.UNKNOWN_REGIONS),s=e.directions,c=[];for(const v of s){const g=t.getCellsInDirection(r.r,r.c,v),h=$e(g,oe.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(v=>`count_different(${v}, ${a})`).join(" + ")} == ${i};
`}function bM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=yt(r,oe.YIN_YANG),s=e.directions;let c="";for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g="["+je(_).join(",")+"]",h=$e(_,oe.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${a}, ${g}, ${h}) == ${i};
`}return c}function wM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),_=$e(u,oe.YIN_YANG);s+=`constraint count(${_}, 1) == ${i};
`}return s}function OM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=yt(r,oe.YIN_YANG),s=e.directions,c=[];for(const _ of s){const v=t.getCellsInDirection(r.r,r.c,_),g=$e(v,oe.YIN_YANG),h=$e(v,oe.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${a}, ${g}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function yM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${$e(_,oe.NURIKABE_SHADING)}, 1)`;s.push(g)}return`constraint ${s.join(" + ")} = ${i};
`}function LM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions,s=[];for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${$e(_,oe.CELL_CENTER_LOOP)})`;s.push(g)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function AM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=yt(r,oe.GALAXY_REGIONS),s=e.directions,c=[];for(const _ of s){const v=t.getCellsInDirection(r.r,r.c,_),m=`count(${"["+Fi(v,oe.GALAXY_REGIONS).join(",")+"]"}, ${a})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function SM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";s+=`constraint hot_arrows_p(${v}, ${i});
`}return s}function xM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),a=e.directions;let s="";for(const c of a){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";s+=`constraint cold_arrows_p(${v}, ${i});
`}return s}const NM=new Map([[d.HOT_ARROWS,SM],[d.COLD_ARROWS,xM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,IM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,bM],[d.LOOP_CELL_COUNT_ARROWS,LM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,OM],[d.YIN_YANG_COUNT_SHADED_CELLS,wM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,AM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,yM]]);function DM(t,e,n,r){return dl(e,n,r,NM)}function TM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function RM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function kM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const GM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,TM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,RM],[d.FORBIDDEN_KNIGHT_SUM,kM]]);function MM(t,e,n,r){return dl(e,n,r,GM)}const $M=[E3,EM,LG,DM,j3,D3,tG,qk,_3,bG,w3,MM];function FM(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[a,s]of r.entries())for(const c of $M){let u=c(e,i,a,s);u=pt(u,`${a}`),n+=u}return n}function UM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,a}function HM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,a}function PM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,a+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,a}function BM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`
% Two Contiguous Regions
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function WM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows);let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a-1}: unknown_regions;
`,s+=`constraint unknown_sudoku_regions_p(unknown_regions, ${a});
`,s+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${a});
`,s}function zM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function YM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, true);
`,a}function jM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a}function VM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,a+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,a+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,a}function KM(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,a+=`constraint cell_center_loop_p(cell_center_loop, false);
`,a+=`constraint modular_loop_p(board, cell_center_loop);
`,a}function ca(t,e,n,r){const i=t.grid;let a="";a+=`% Exactly ${e} per row 
`;const s=i.nRows;for(let v=0;v<s;v++){const g=i.getRow(v),h=r(g);a+=`constraint count_eq(${h}, ${n}, ${e});
`}a+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let v=0;v<c;v++){const g=i.getCol(v),h=r(g);a+=`constraint count_eq(${h}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){a+=`
% Exactly ${e} per region 
`;const v=i.getUsedRegions();for(const g of v){const h=i.getRegion(g),m=r(h);a+=`constraint count_eq(${m}, ${n}, ${e});
`}}return a}function XM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=ca(n,1,!0,s=>$e(s,oe.DOUBLERS)),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function qM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,s+=ca(n,1,!0,c=>$e(c,oe.NEGATORS)),s+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,s}function ZM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a="fillomino_area";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,s+=`constraint fillomino_p(board, ${a});
`,s}function QM(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=oe.CAVE_SHADING,s=oe.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,c+=`constraint cave_p(${a}, ${s});
`,c}function JM(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=oe.CAVE_SHADING,s=oe.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${a}, ${s}, ${c});
`,u+=`constraint renban_caves_p(${oe.BOARD}, ${c});
`,u}function e8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=oe.GALAXY_REGIONS,s=oe.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${a};
`,u+=`constraint galaxy_restrict_numbering_p(${a});
`,u+=`array[0..${c}] of var 0..${c}: ${s};
`,u+=`constraint galaxy_sizes_p(${a}, ${s});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${s});
`,u+=`constraint gallaxy_connected_regions_p(${a});
`,u}function t8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function n8(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function r8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=Qg.size;let s="";s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: tilling_placing_grid;
`,s+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of Qg.entries()){const _=u.length,v=u[0].length,g=`pentomino_${c}`;s+=`array[1..${_}, 1..${v}] of 0..1: ${g} = ${QR(u)};
`,s+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return s}function i8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=oe.LITS_SHADING,s=oe.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,c+=`constraint lits_shading_p(${a});
`,c+=`constraint lits_shading_ids_p(${a}, ${s});
`,c+=`constraint lits_region_and_ids_p(${oe.BOARD_REGIONS}, ${s});
`,c+=`constraint lits_tetromino_shapes_p(${s});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const v=r.getRegion(_),h=`constraint count_eq(${$e(v,oe.LITS_SHADING)}, 1, 4);
`;c+=h}return c}function o8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=oe.LITS_SHADING,s=oe.LITS_REGIONS,c=oe.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,u+=`constraint lits_shading_p(${a});
`,u+=`constraint lits_shading_ids_p(${a}, ${s});
`,u+=`constraint lits_region_and_ids_p(${c}, ${s});
`,u+=`constraint lits_4_per_region_p(${c}, ${a});
`,u+=`constraint lits_tetromino_shapes_p(${s});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const g=r.getRegion(v),m=`constraint count_eq(${$e(g,oe.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function a8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const a=oe.LITS_SHADING,s=oe.STAR_BATTLE,c=oe.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=ca(n,2,1,_=>$e(_,oe.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${s});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=ca(n,1,1,_=>$e(_,oe.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=ca(n,1,2,_=>$e(_,oe.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${s}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${a}, ${c});
`,u}function s8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(D=>D.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";function a(){const D=[];for(const k of r.getAllCells()){const G=k.r*r.nCols+k.c+1,U=r.getNeighboorCells(k);for(const H of U){const X=H.r*r.nCols+H.c+1;D.push([G,X])}}return D}const s=a(),c=n.localConstraints,u=c.get(d.TELEPORT);if(u){const D=Object.values(u),k=Ld(D);for(const G of k.values())if(!(G.length<=1))for(const[U,H]of G.flatMap((X,J)=>G.slice(J+1).map(re=>[X,re]))){const X=U.cell.r*r.nCols+U.cell.c+1,J=H.cell.r*r.nCols+H.cell.c+1;s.push([X,J]),s.push([J,X])}}t.edge_list=s;const _=r.nRows*r.nCols,v=s.length,g="["+s.map(D=>D[0]).join(",")+"]",h="["+s.map(D=>D[1]).join(",")+"]";let m="";m+=`array[int] of int: dpath_from = ${g};
`,m+=`array[int] of int: dpath_to = ${h};
`,m+=`var 1..${_}: dpath_source;
`,m+=`var 1..${_}: dpath_target;
`,m+=`array[1..${_}] of var bool: dpath_ns;
`,m+=`array[1..${v}] of var bool: dpath_es;
`,m+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`;function C(D,k){const G=s.findIndex(U=>U[0]===D&&U[1]===k);G!=-1&&(m+=`constraint dpath_es[${G+1}] = false;
`)}function I(D,k){const G=D.r*r.nCols+D.c+1;for(let U=-1;U<=1;U++){const H=(k.r+U)*r.nCols+k.c+1;C(G,H),C(H,G)}}function b(D,k){const G=D.r*r.nCols+D.c+1;for(let U=-1;U<=1;U++){const H=k.r*r.nCols+(k.c+U)+1;C(G,H),C(H,G)}}const w=c.get(d.MAZE_WALL);if(w){m+=`
 % Maze Walls
`;for(const D of Object.values(w)){const k=D.coords;for(let G=0;G<k.length-1;G++){const U=_O(Ph(k[G],k[G+1]),.5),X=sd(U).map(Z=>r.getCell(Z.r,Z.c)).filter(Z=>Z!==void 0);if(X.length!==2)continue;const[J,re]=X;J.r===re.r?(I(J,re),I(re,J)):J.c===re.c&&(b(J,re),b(re,J))}}}const L=c.get(d.ONE_WAY_DOOR);if(L){m+=`
 % One Way Doors
`;for(const D of Object.values(L)){const G=D.cells.map(Z=>r.getCell(Z.r,Z.c)).filter(Z=>!!Z),[U,H]=G,X=D.value,J=U.r*r.nCols+U.c+1,re=H.r*r.nCols+H.c+1;X==="<"?C(J,re):X===">"&&C(re,J)}}return m}const l8=new Map([[d.FILLOMINO,ZM],[d.CAVE,QM],[d.GALAXIES,e8],[d.YIN_YANG,UM],[d.NURIMISAKI,HM],[d.NURIKABE,PM],[d.TWO_CONTIGUOUS_REGIONS,BM],[d.UNKNOWN_REGIONS,WM],[d.SASHIGANE,zM],[d.CELL_CENTER_LOOP_NO_TOUCHING,YM],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,jM],[d.NOT_LOOP_SIZED_REGIONS,VM],[d.MODULAR_LOOP,KM],[d.DOUBLERS,XM],[d.NEGATORS,qM],[d.GOLDILOCKS_ZONE,n8],[d.NEXUS,t8],[d.PENTOMINO_TILLING,r8],[d.LITS,i8],[d.CAVE_LITS,o8],[d.LITS_BLACK_WHITE_STAR_BATTLE,a8],[d.RENBAN_CAVES,JM],[d.MAZE_DIRECTED_PATH,s8]]);function c8(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,a]of r.entries()){if(!a)continue;const s=l8.get(i);if(!s)continue;let c=s(t,i);c=pt(c,`${i}`),e+=c}return e}function u8(){return`
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

predicate cave_nurikabe_helper_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: regions
) =  let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    % water cells (0 = water), must be all orthogonally connected
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
    % for each region not equal to 0, there must be at least one cell that is on the edge of the grid
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

`}function d8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const a=`constraint ${Oe(r)} = ${r.value};
`;n+=a}return n.length&&(n=`
% Given Digits
`+n),n}function Jv(t){const e=t.grid;let n=t.valid_digits;const r=new qR(t),[i,a]=[e.nRows,e.nCols],s=i*a;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(u8());let u=`1..${Math.max(i,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)&&(u=`1..${s}`),t.globalConstraints.get(d.HEXED_SUDOKU)&&(n=[...xt.range(1,16)]),n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${i-1};
`),r.add(`set of int: COL_IDXS = 0..${a-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),JR(r,e),r.add(d8(t)),r.add(Wk(t)),r.add(zk(t)),r.add(c8(r)),r.add(FM(t,r)),r.add(jk(t)),r.add(`
solve satisfy;`),r}var _8=ne('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function f8(t,e){le(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n);let i=F(e,"showModal",12,!1);function a(g,h,m){var C=document.createElement("a"),I=new Blob([g],{type:m});C.href=URL.createObjectURL(I),C.download=h,C.click(),URL.revokeObjectURL(C.href)}function s(){const g=ot(wa);return Jv(g).model_str}function c(){const g=s();navigator.clipboard.writeText(g)}function u(){const g=s(),h=Zg(g);navigator.clipboard.writeText(h)}function _(){const g=Cu(r()),h=s();a(h,`${g}.mzn`,"text/plain")}function v(){const g=Cu(r()),h=s(),m=Zg(h);a(m,`${g}.mzn`,"text/plain")}fe(),Ur(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,h)=>{var m=_8(),C=K(m),I=P(C,2),b=P(I,2),w=P(b,2);Y(m),Me("click",C,c),Me("click",I,u),Me("click",b,_),Me("click",w,v),N(g,m)},$$slots:{default:!0},$$legacy:!0}),ce()}function xa(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const c=t[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(_),i.push([g]))}}const a=nl(r,i);uo(a)}function g8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],a=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const C=[];i.push(C),s(h,m,t[h][m])}function s(h,m,C){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==C||(r[h][m]=!0,i[i.length-1].push([h,m]),s(h+1,m,C),s(h-1,m,C),s(h,m+1,C),s(h,m-1,C))}const c=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[C,I]of h)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const L=C+b,D=I+w;if(m.some(([k,G])=>k===L&&G===D))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(c[h].add(m),c[m].add(h));const _=[1,4,7,9],v=new Array(i.length).fill(0);function g(h,m){for(const C of c[h])if(v[C]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of _)if(g(h,m)){v[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,C]of i[h])a[m][C]=v[h];return a}function h8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const a=[],s=[];for(let u=0;u<i.length;u++){const _=i[u];for(let v=0;v<_.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const h=_[v];a.push(g),s.push(h)}}const c=Dv(a,s);uo(c)}function v8(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const a=t[i];if(a!==void 0){xa(a,e,r);return}}}function p8(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const a=t[i];if(a!==void 0){xa(a,e,r);return}}}function m8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const c=n[s];for(let u=0;u<c.length;u++){const _=e.getCell(s,u);if(!_)continue;r.push(_);const v=c[u];i.push([v+1])}}const a=nl(r,i);uo(a)}function C8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;xa(n,e,new Map([[0,4],[1,7],[2,9]]))}function E8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;xa(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function I8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;xa(n,e,new Map([[1,7],[2,4],[3,9]]))}function b8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[a,s]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<i.length;v++){const g=i[v];for(let h=0;h<g.length-1;h++){const m=e.getCell(v,h),C=e.getCell(v,h+1);if(!m||!C)continue;const I=g[h],b=g[h+1];if(I===b)continue;const w={colorId:c,p1:{r:v,c:h+1},p2:{r:v+1,c:h+1}};u.push(w)}}for(let v=0;v<s;v++)for(let g=0;g<a-1;g++){const h=e.getCell(g,v),m=e.getCell(g+1,v);if(!h||!m)continue;const C=i[g][v],I=i[g+1][v];if(C===I)continue;const b={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(b)}const _=fa(u);_r(_);return}}function w8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const h=i[v.r][v.c],m=i[g.r][g.c];if(!(h===1&&m===1))continue;const C={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};a.push(C)}}}const s=fa(a);_r(s);return}}function O8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=g8(i);if(!a)return;const s=[],c=[];for(let _=0;_<a.length;_++){const v=a[_];for(let g=0;g<v.length;g++){const h=e.getCell(_,g);if(!h)continue;s.push(h);const m=v[g];c.push([m])}}const u=nl(s,c);uo(u);return}}function y8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const a=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const g=i[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};a.push(m)}}const s=fL(a);_r(s);return}}function L8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,a=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,g]=_,[h,m]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols],[C,I]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!ho({r:h,c:m},{r:C,c:I}))continue;const L={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:C+.5,c:I+.5}};a.push(L)}const s=fa(a);_r(s)}function A8(t,e){const n=e.puzzle,r=n.grid;_r(fd()),h8(t,n),m8(t,r),b8(t,r),C8(t,r),E8(t,r),w8(t,r),p8(t,r),O8(t,r),v8(t,r),y8(t,r),I8(t,r),L8(t,e)}function S8(){const{subscribe:t,set:e}=Ut(0),n=100;let r=Date.now(),i,a=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-a,i=setInterval(()=>{a=Date.now()-r,e(a)},n))},stop:()=>{s&&(s=!1,clearInterval(i),a=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),a=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:a})}}var x8=ne('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function N8(t,e){le(e,!1);const n=rt(),r=()=>ve(wa,"$puzzleStore",n),i=()=>ve(_n,"$gridStore",n),a=()=>ve(w,"$timer",n),s=R(),c=R(),u=R(),_=R();let v=R(!1),g=R(!1),h=R(null),m=R(100),C=R("100"),I=R(null),b=R("IDLE");const w=S8();function L(X){return X===null?"":String(X)}function D(X){const J=Math.floor(X/6e4),re=Math.floor(X%6e4/1e3),Z=Math.floor(X%1e3/100),se=re.toString().padStart(2,"0");return`${J}:${se}.${Z}`}function k(){x(g,!0)}function G(X){const J=parseInt(X);typeof J=="number"&&J>=1&&x(m,J)}async function U(){x(I,0),x(b,"SOLVING...");const X=new Mu;Lv(),console.log(p(s));const J=Jv(p(s));X.addFile("test.mzn",J.model_str),w.reset(),w.start(),x(h,X.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(h).on("solution",re=>{const Z=re.output.json;re.type==="solution"&&p(I)!==null&&x(I,p(I)+1),console.log(Z),A8(Z,J)}),p(h).on("error",re=>{x(u,"Solve"),x(b,"ERROR"),w.stop(),p(h)&&p(h).cancel()}),p(h).on("warning",re=>{x(b,"WARNING"),console.log(re.message)}),p(h).then(re=>{x(b,re.status),x(u,"Solve"),w.stop()})}function H(){p(h)===null||!p(h).isRunning()?U():p(h)!==null&&p(h).isRunning()&&(x(b,"IDLE"),x(u,"Solve"),w.stop(),p(h).cancel())}M(()=>r(),()=>{x(s,r())}),M(()=>i(),()=>{x(c,i())}),M(()=>{},()=>{x(u,"Solve")}),M(()=>a(),()=>{x(_,a())}),M(()=>p(h),()=>{p(h)&&(p(h)!==null&&p(h).isRunning()?x(u,"Stop"):x(u,"Solve"))}),Ee(),fe(),ll(t,{get isOpen(){return p(v)},set isOpen(X){x(v,X)},$$slots:{"panel-header":(X,J)=>{sl(X,{slot:"panel-header",title:"Solver",get isOpen(){return p(v)},set isOpen(re){x(v,re)},$$legacy:!0})},"panel-content":(X,J)=>{var re=x8(),Z=ue(re),se=P(Z,2);f8(se,{get showModal(){return p(g)},set showModal(Zt){x(g,Zt)},$$legacy:!0});var be=P(se,2),me=K(be,!0);Y(be);var Ce=P(be,2),Te=K(Ce,!0);Y(Ce);var at=P(Ce,2),Se=K(at);Vt(Se),S(Se,"min",1),S(Se,"max",200),S(Se,"step",1),Y(at);var we=P(at,2),ht=K(we,!0);ee(()=>et(ht,`Solution Count: ${L(p(I))}`)),Y(we);var ct=P(we,2),yn=K(ct,!0);ee(()=>et(yn,`Elapsed Time: ${D(p(_))}`)),Y(ct);var $n=P(ct,2),Hr=K($n,!0);Y($n),ee(()=>{et(me,p(u)),et(Te,`Max. Solutions: ${p(m)}`),et(Hr,`Status: ${p(b)}`)}),Me("click",Z,k),Me("click",be,H),Vn(Se,()=>p(C),Zt=>x(C,Zt)),Me("input",Se,()=>G(p(C))),N(X,re)}},$$legacy:!0}),ce()}var D8=ne('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function T8(t){var e=D8(),n=K(e),r=K(n);PR(r);var i=P(r,2);N8(i,{});var a=P(i,2);wT(a,{elementHandlers:Gt});var s=P(a,2);ST(s,{elementHandlers:Gt});var c=P(s,2);hT(c,{elementHandlers:Gt});var u=P(c,2);QT(u,{elementHandlers:Gt});var _=P(u,2);WR(_,{}),Y(n),Y(e),N(t,e)}const ep=Ti([co,_n,Xt],([t,e,n])=>{const r=ni(n,Gt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var R8=de('<path class="cursor svelte-zsq70u"></path>');function k8(t,e){le(e,!1);const n=rt(),r=()=>ve(Xt,"$toolStore",n),i=()=>ve(Si,"$selectionStore",n),a=R(),s=R(),c=.25;function u(v){if(!v)return"";const[g,h]=[v.c,v.r];return`M${g},${h}L${g+c},${h}L${g},${h+c}Z`}M(()=>r(),()=>{x(a,od(r()))}),M(()=>i(),()=>{x(s,u(i().lastCell))}),Ee(),fe();var _=R8();ee(()=>{S(_,"d",p(s)),S(_,"visibility",p(a)?"visible":"hidden")}),N(t,_),ce()}var G8=de('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function M8(t,e){le(e,!1);let n=F(e,"gridShape",8);fe();var r=G8(),i=K(r);S(i,"x",0),S(i,"y",0),Y(r),ee(()=>{S(i,"width",n().nCols),S(i,"height",n().nRows)}),N(t,r),ce()}var $8=de('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),F8=de('<g class="grid-lines"></g>');function U8(t,e){le(e,!1);const n=rt(),r=()=>ve(_n,"$gridStore",n),i=R();M(()=>r(),()=>{x(i,r().getAllCells())}),Ee(),fe();var a=F8();lt(a,5,()=>p(i),St,(s,c)=>{var u=$8();S(u,"width",1),S(u,"height",1),ee(()=>{S(u,"x",p(c).c),S(u,"y",p(c).r)}),N(s,u)}),Y(a),N(t,a),ce()}function H8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function P8(t){const e=new Map;function n(r,i){const a=e.get(i);if(a!=null&&a.has(r)){a.delete(r),a.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=H8(r),a=i.length;for(let s=0;s<a;s++){const c=i[s%a],u=i[(s+1)%a],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function B8(t,e=0,n=!1){const r=[],i=P8(t);if(i.size<=0)return r;const a=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(C=>C[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[c,u]=s;let _=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),h=v;const m=[];do{const C=i.get(h);if(C===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Ge(_.c,_.r),b=new Ge(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,L=null,D=null;for(const k of C){const G=JSON.parse(k),U=new Ge(G.c,G.r),H=b.subtract(I),X=U.subtract(b),J=H.perpDotProduct(X);w<J!=n&&(w=J,D=G,L=k)}if(n&&C.size>1&&a.add(h),D===null||L===null)throw new Error("Corner with no adjacencies found");if(C.delete(L),C.size<=0&&i.delete(h),w!==0){const k=e*(g.c-_.c),G=e*(D.c-g.c),U=e*(_.r-g.r),H=e*(g.r-D.r),X=H+w*G,J=k+w*U,re=new Ge(g.c+X,g.r+J),Z=4;a.has(h)?(m.push(new Ge(re.x-Z*k,re.y-Z*G)),m.push(new Ge(re.x-Z*U,re.y-Z*H))):m.push(re)}_=g,g=D,h=L}while(h!==v);r.push(m)}return r}function fo(t,e=0,n=!1){return B8(t,e,n).map(a=>No(a,!0)).join("")}const W8=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5)];function z8(t,e,n=W8){if(e===1)return n;const r=[],i=n.length,a=0,s=360/e,c=t*s+a,u=(t+1)*s+a,_=c/(360/i),v=u/(360/i),g=Math.floor(_)%i,h=Math.ceil(_)%i,m=n[g].lerp(n[h],_%1),C=Math.floor(v)%i,I=Math.ceil(v)%i,b=n[C].lerp(n[I],v%1);r.push(m);for(let L=Math.ceil(_);L<=Math.floor(v);L++)r.push(n[L%i]);r.push(b);const w=new Ge(0,0);return r.push(w),r}function tp(t,e,n=new Ge(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const a=Math.cos(Math.PI/e),s=r?t:t/a,c=[];for(let u=0;u<e;u++){const _=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),v=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Ge(_,v));c.push(g)}return c}function No(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:a})=>`${i},${a}`).join("L")+n}function vl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){if(r&&t.length>1){const _=t[t.length-1];for(let g=0;g<t.length-1;g++)if(_.equals(t[g])){t.push(t[g+1]);break}const v=t[0];for(let g=1;g<t.length;g++)if(v.equals(t[g])){t.unshift(t[g-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let v=t[_-2].subtract(t[_-1]);v=v.normalise(),v=v.scale(n),t[_-1]=t[_-1].add(v)}}if(!i)return No(t);const a=t[0],s=["M",`${a.x},${a.y}`],c=t.length;for(let _=2;_<c;_++){const v=t[_-2],g=t[_-1],h=t[_];let m=v.subtract(g).normalise();m=m.scale(i),m=m.add(g);let C=h.subtract(g).normalise();C=C.scale(i),C=C.add(g),s.push(`L${m.x},${m.y} Q ${g.x},${g.y} ${C.x},${C.y}`)}const u=t[c-1];return s.push(`L${u.x},${u.y}`),s.join(" ")}function yu(t,e={}){const n=Fs(t);return vl(n,e)}function qn(t){return new Ge(t.c+.5,t.r+.5)}function Fs(t){return t.map(n=>qn(n))}const Y8=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5),new Ge(0,-.5),new Ge(0,.5),new Ge(-.5,0),new Ge(.5,0)];function j8(t,e){const n=Y8[t];return n.subtract(n.scale(e))}function np(t,e){const n=[new Ge(t.c-e,t.r-e),new Ge(t.c+e,t.r+e)],r=[new Ge(t.c-e,t.r+e),new Ge(t.c+e,t.r-e)];return[n,r].map(a=>No(a,!1)).join("")}const V8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function pl(t,e="none"){return V8.get(t)||e}function K8(t,e,n){let r=[];function a(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Ge(-.12,-.32),new Ge(0,-.4),new Ge(.12,-.32)]:s=[new Ge(-.12,-.4),new Ge(0,-.32),new Ge(.12,-.4)],r=[s,a(s,90),a(s,180),a(s,270)],r=r.map(c=>c.map(u=>{const _=new Ge(n+.5,e+.5);return u.add(_)})),r}var X8=de('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),q8=de('<g class="regions-border"></g>');function Z8(t,e){le(e,!1);const n=rt(),r=()=>ve(dn,"$cellsStore",n),i=()=>ve(_n,"$gridStore",n),a=R(),s=R();function c(_,v){return _.filter(m=>m.region===v).map(m=>({r:m.r,c:m.c}))}M(()=>r(),()=>{x(a,r())}),M(()=>i(),()=>{x(s,i().getUsedRegions())}),Ee(),fe();var u=q8();lt(u,5,()=>p(s),St,(_,v)=>{var g=X8();ee(()=>S(g,"d",fo(c(p(a),p(v)),0,!1))),ee(()=>S(g,"id",`region-${p(v)??""}`)),N(_,g)}),Y(u),N(t,u),ce()}var Q8=de('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function J8(t,e){le(e,!1);const n=rt(),r=()=>ve(Si,"$selectionStore",n),i=()=>ve(Xt,"$toolStore",n),a=R(),s=R(),c=R(),u=R(),_=R(),v=R();let g=F(e,"boundingBox",8);const h=.06,m=.05,C="#080808",I="#b2b2b2";M(()=>Q(g()),()=>{x(a,g().x)}),M(()=>Q(g()),()=>{x(s,g().y)}),M(()=>r(),()=>{x(c,r().cells)}),M(()=>p(c),()=>{x(u,fo(p(c),0))}),M(()=>p(c),()=>{x(_,fo(p(c),h))}),M(()=>i(),()=>{x(v,od(i()))}),Ee(),fe();var b=Q8(),w=K(b),L=K(w);S(L,"stdDeviation",m),Li(),Y(w);var D=P(w),k=K(D);S(k,"fill",I);var G=P(k);S(G,"fill",C),Y(D);var U=P(D);Y(b),ee(()=>{S(b,"visibility",p(v)?"visible":"hidden"),S(D,"x",p(a)),S(D,"y",p(s)),S(k,"x",p(a)),S(k,"y",p(s)),S(G,"d",p(_)),S(U,"d",p(u))}),N(t,b),ce()}var e$=de('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function t$(t,e){le(e,!1);const n=R(),r=R();let i=F(e,"grid",8);M(()=>Q(i()),()=>{x(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),M(()=>p(n),()=>{x(r,fo(p(n),0))}),Ee(),fe();var a=e$(),s=K(a);Y(a),ee(()=>S(s,"d",p(r))),N(t,a),ce()}function vr(t){return Ti(_t,n=>{const r=[];for(const[i,a]of n.entries())t(i)&&r.push({toolId:i,element:a});return r})}const Md=vr(sO),n$=Ti(Md,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),r$=Ti(Md,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),i$=vr(td),o$=vr(Gh),a$=vr(kh),s$=vr(nd),l$=vr(Mh),c$=vr(rd),u$=vr(id),d$=vr($h),_$=vr(_a);var f$=de('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function ml(t,e){let n=F(e,"l",8,.2),r=F(e,"id",8),i=F(e,"strokeWidth",8),a=F(e,"stroke",8,"black");const s=.5,c=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=f$();S(u,"viewBox","0 0 1 1"),S(u,"refX",s),S(u,"refY",s),S(u,"markerWidth",1),S(u,"markerHeight",1);var _=K(u);S(_,"d",c),Y(u),ee(()=>{S(u,"id",r()),S(_,"stroke-width",i()),S(_,"stroke",a())}),N(t,u)}var g$=de('<path class="arrow-line" fill="none"></path>'),h$=de('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function v$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R(),_=R(),v=R(),g=R();let h=F(e,"tool",8),m=F(e,"arrowId",8),C=F(e,"boundingBox",8);const I=fn(h().toolId,Gt)??yO,b="round",w="round",L=crypto.randomUUID(),D=`arrow-mask-${m()}-${L}`,k=`arrow-marker-${m()}-${L}`;M(()=>Q(h()),()=>{x(n,h().shape??I)}),M(()=>Q(C()),()=>{x(r,C().x)}),M(()=>Q(C()),()=>{x(i,C().y)}),M(()=>p(n),()=>{var se;x(a,((se=p(n))==null?void 0:se.r)??.4)}),M(()=>p(n),()=>{var se;x(s,((se=p(n))==null?void 0:se.stroke)??"gray")}),M(()=>p(n),()=>{var se;x(c,((se=p(n))==null?void 0:se.strokeWidth)??.1)}),M(()=>p(n),()=>{var se;x(u,((se=p(n))==null?void 0:se.strokeDasharray)??0)}),M(()=>p(n),()=>{var se;x(_,((se=p(n))==null?void 0:se.opacity)??.8)}),M(()=>(p(a),p(n)),()=>{var se,be,me,Ce;x(v,{shortenHead:p(a),shortenTail:((be=(se=p(n))==null?void 0:se.linePathOptions)==null?void 0:be.shortenTail)??.2,bezierRounding:((Ce=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ce.bezierRounding)??.4})}),M(()=>Q(h()),()=>{x(g,yu(h().cells))}),Ee(),fe();var G=h$(),U=K(G);S(U,"id",D);var H=K(U),X=P(H);Y(U);var J=P(U);ml(J,{id:k,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(s)}});var re=P(J);S(re,"mask",`url(#${D??""})`);var Z=P(re);lt(Z,1,()=>h().lines,St,(se,be)=>{var me=Ae(),Ce=ue(me);{var Te=at=>{var Se=g$();ee(()=>S(Se,"d",yu(p(be),p(v)))),S(Se,"stroke-linejoin",b),S(Se,"stroke-linecap",w),S(Se,"marker-end",`url(#${k??""})`),ee(()=>{S(Se,"stroke",p(s)),S(Se,"stroke-width",p(c)),S(Se,"opacity",p(_)),S(Se,"stroke-dasharray",p(u))}),N(at,Se)};ge(Ce,at=>{p(be).length>1&&at(Te)})}N(se,me)}),Y(G),ee(()=>{S(U,"x",p(r)),S(U,"y",p(i)),S(H,"x",p(r)),S(H,"y",p(i)),S(X,"stroke-width",2*p(a)-p(c)),S(X,"d",p(g)),S(re,"d",p(g)),S(re,"stroke-width",2*p(a)+p(c)),S(re,"stroke",p(s))}),N(t,G),ce()}var p$=de("<g></g>"),m$=de('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function C$(t,e){le(e,!1);const n=rt(),r=()=>ve(c$,"$arrowToolsStore",n),i=R();let a=F(e,"boundingBox",8);M(()=>r(),()=>{x(i,r())}),Ee();var s=m$();lt(s,5,()=>p(i),St,(c,u)=>{let _=()=>p(u).toolId,v=()=>p(u).element;var g=p$();lt(g,5,()=>Object.entries(v()),h=>h[0],(h,m)=>{v$(h,{get arrowId(){return p(m)[0]},get tool(){return p(m)[1]},get boundingBox(){return a()}})}),Y(g),ee(()=>ri(g,`element-group ${_()}`)),N(c,g)}),Y(s),N(t,s),ce()}var E$=de('<!><path fill="none"></path>',1);function I$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R();let c=F(e,"tool",8),u=F(e,"id",8);const _=c().cell,v=fn(c().toolId,Gt)??wO,g=.3;function h(L,D){const k=Xs(D),G=new Ge(k.c,k.r).normalise().scale(g),U=qn(L),H=U.subtract(G),X=U.add(G);return[H,X]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;M(()=>Q(c()),()=>{x(n,c().direction)}),M(()=>Q(c()),()=>{x(r,c().shape??v)}),M(()=>p(r),()=>{x(i,p(r).strokeWidth??.1)}),M(()=>p(r),()=>{x(a,p(r).stroke??"black")}),M(()=>p(n),()=>{x(s,vl(h(_,p(n))))}),Ee(),fe();var I=E$(),b=ue(I);ml(b,{id:C,l:.15,get stroke(){return p(a)},get strokeWidth(){return p(i)}});var w=P(b);S(w,"marker-end",`url(#${C??""})`),ee(()=>{S(w,"d",p(s)),S(w,"stroke",p(a)),S(w,"stroke-width",p(i))}),N(t,I),ce()}var b$=de('<path fill="none"></path>'),w$=de("<!><!>",1);function O$(t,e){le(e,!1);const n=R(),r=R(),i=R();let a=F(e,"tool",8),s=F(e,"id",8);const c=a().cell,u=fn(a().toolId,Gt)??OO,_=.2;function v(w,L){const D=Xs(L),k=new Ge(D.c,D.r),U=qn(w).add(k.scale(.4));return[U.subtract(k.normalise().scale(_)),U]}function g(w){return vl(v(c,w))}const h=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${s()}-${h}`;M(()=>Q(a()),()=>{x(n,a().shape??u)}),M(()=>p(n),()=>{x(r,p(n).strokeWidth??.08)}),M(()=>p(n),()=>{x(i,p(n).stroke??"black")}),Ee(),fe();var C=w$(),I=ue(C);ml(I,{id:m,l:.1,get stroke(){return p(i)},get strokeWidth(){return p(r)}});var b=P(I);lt(b,1,()=>a().directions,St,(w,L)=>{var D=b$();ee(()=>S(D,"d",g(p(L)))),S(D,"marker-end",`url(#${m??""})`),ee(()=>{S(D,"stroke",p(i)),S(D,"stroke-width",p(r))}),N(w,D)}),N(t,C),ce()}var y$=de("<path></path>");function Us(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R();let _=F(e,"cells",8),v=F(e,"shape",8,cd);M(()=>Q(v()),()=>{x(n,v().inset??.06)}),M(()=>Q(v()),()=>{x(r,v().stroke??"black")}),M(()=>Q(v()),()=>{x(i,v().strokeWidth??.03)}),M(()=>Q(v()),()=>{x(a,v().strokeDasharray??.08)}),M(()=>Q(v()),()=>{x(s,v().fill??"none")}),M(()=>Q(v()),()=>{x(c,v().connectDiag??!0)}),M(()=>(Q(_()),p(n),p(c)),()=>{x(u,fo(_(),p(n),p(c)))}),Ee(),fe();var g=y$();ee(()=>{S(g,"d",p(u)),S(g,"stroke",p(r)),S(g,"stroke-width",p(i)),S(g,"fill",p(s)),S(g,"stroke-dasharray",p(a))}),N(t,g),ce()}var L$=de('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ha(t,e){le(e,!1);const n=R();let r=F(e,"value",8,""),i=F(e,"fontSize",8,.2),a=F(e,"x",8),s=F(e,"y",8),c=F(e,"position",8,"TL"),u=F(e,"fontColor",8,"var(--text-primary-color)"),_=F(e,"fontWeight",8,400),v=R(null),g=R(null);function h(L,D,k){const G=["TL","TR"].includes(k),H=["TL","BL"].includes(k)?L+.05:L,X=D;return new Ge(H,X)}function m(L){return["TL","BL"].includes(L)?"start":"end"}function C(L){return["TL","TR"].includes(L)?"text-before-edge":""}kw(()=>{if(!p(v)||!p(g))return;const L=p(v).getBBox();p(g).setAttribute("x",String(L.x)),p(g).setAttribute("y",String(L.y+L.height*.1)),p(g).setAttribute("width",String(L.width)),p(g).setAttribute("height",String(L.height*.8))}),M(()=>(Q(a()),Q(s()),Q(c())),()=>{x(n,h(a(),s(),c()))}),Ee(),fe();var I=Ae(),b=ue(I);{var w=L=>{var D=L$(),k=ue(D);Ai(k,H=>x(g,H),()=>p(g));var G=P(k);ee(()=>S(G,"text-anchor",m(c()))),ee(()=>S(G,"dominant-baseline",C(c())));var U=K(G,!0);Y(G),Ai(G,H=>x(v,H),()=>p(v)),ee(()=>{var H,X;S(G,"x",(H=p(n))==null?void 0:H.x),S(G,"y",(X=p(n))==null?void 0:X.y),S(G,"font-size",i()),S(G,"fill",u()),S(G,"font-weight",_()),et(U,r())}),N(L,D)};ge(b,L=>{r().length&&L(w)})}N(t,I),ce()}var A$=ne("<!> <!>",1);function rp(t,e){le(e,!1);const n=R(),r=R();let i=F(e,"cells",8),a=F(e,"shape",8,cd),s=F(e,"value",8,void 0);M(()=>Q(i()),()=>{x(n,i()[0])}),M(()=>p(n),()=>{x(r,new Ge(p(n).c,p(n).r))}),Ee(),fe();var c=A$(),u=ue(c);Us(u,{get cells(){return i()},get shape(){return a()}});var _=P(u,2);{var v=g=>{ha(g,{get value(){return s()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(_,g=>{s()&&s().length&&g(v)})}N(t,c),ce()}var S$=de("<rect></rect>");function x$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R(),_=R(),v=R();let g=F(e,"cx",8),h=F(e,"cy",8),m=F(e,"shape",8);M(()=>Q(m()),()=>{x(n,m().r??.5)}),M(()=>(Q(g()),p(n)),()=>{x(r,g()-p(n))}),M(()=>(Q(h()),p(n)),()=>{x(i,h()-p(n))}),M(()=>p(n),()=>{x(a,2*p(n))}),M(()=>p(n),()=>{x(s,2*p(n))}),M(()=>Q(m()),()=>{x(c,m().stroke??"black")}),M(()=>Q(m()),()=>{x(u,m().strokeWidth??.02)}),M(()=>Q(m()),()=>{x(_,m().fill??"none")}),M(()=>Q(m()),()=>{x(v,m().angle??0)}),Ee(),fe();var C=S$();ee(()=>{S(C,"x",p(r)),S(C,"y",p(i)),S(C,"width",p(a)),S(C,"height",p(s)),S(C,"stroke",p(c)),S(C,"stroke-width",p(u)),S(C,"fill",p(_)),S(C,"transform",`rotate(${p(v)}, ${g()}, ${h()})`)}),N(t,C),ce()}var N$=de('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function th(t,e){le(e,!1);const n=rt(),r=()=>ve(n$,"$minimumConstraintsStore",n),i=()=>ve(r$,"$maximumConstraintsStore",n),a=R(),s=R(),c=R();let u=F(e,"coord",8),_=F(e,"minOrMax",8);function v(b,w){const L=[!0,!0,!0,!0];let D=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<D.length;k++){let G=D[k];const U={r:b.r+G[1],c:b.c+G[0]};L[k]=!Object.values(w).some(H=>ze(U,H.cell))}return L}function g(b,w){let L=K8(_(),b.r,b.c);const D=v(b,w);return L=L.filter((G,U)=>D[U]),L.map(G=>No(G,!1)).join("")}function h(b,w){return _()==="max"?w:b}M(()=>Q(u()),()=>{x(a,u().c)}),M(()=>Q(u()),()=>{x(s,u().r)}),M(()=>(r(),i()),()=>{x(c,h(r(),i()))}),Ee(),fe();var m=N$(),C=K(m);S(C,"width",1),S(C,"height",1);var I=P(C);ee(()=>S(I,"d",g(u(),p(c)))),Y(m),ee(()=>{S(C,"x",p(a)),S(C,"y",p(s))}),N(t,m),ce()}var D$=de("<circle></circle>");function xr(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R();let u=F(e,"x",8),_=F(e,"y",8),v=F(e,"shape",8);M(()=>Q(v()),()=>{x(n,v().r??.35)}),M(()=>Q(v()),()=>{x(r,v().stroke??"black")}),M(()=>Q(v()),()=>{var h;x(i,(h=v())==null?void 0:h.opacity)}),M(()=>Q(v()),()=>{x(a,v().strokeWidth??.02)}),M(()=>Q(v()),()=>{x(s,v().fill??"none")}),M(()=>Q(v()),()=>{x(c,v().strokeDasharray??0)}),Ee(),fe();var g=D$();ee(()=>{S(g,"cx",u()),S(g,"cy",_()),S(g,"r",p(n)),S(g,"stroke",p(r)),S(g,"stroke-width",p(a)),S(g,"fill",p(s)),S(g,"opacity",p(i)),S(g,"stroke-dasharray",p(c))}),N(t,g),ce()}var T$=de("<ellipse></ellipse>");function R$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R();let _=F(e,"cx",8),v=F(e,"cy",8),g=F(e,"shape",8);M(()=>Q(g()),()=>{x(n,g().width??.5)}),M(()=>Q(g()),()=>{x(r,g().height??.5)}),M(()=>Q(g()),()=>{x(i,g().stroke??"black")}),M(()=>Q(g()),()=>{var m;x(a,(m=g())==null?void 0:m.opacity)}),M(()=>Q(g()),()=>{x(s,g().strokeWidth??.02)}),M(()=>Q(g()),()=>{x(c,g().fill??"none")}),M(()=>Q(g()),()=>{x(u,g().angle??0)}),Ee(),fe();var h=T$();ee(()=>{S(h,"cx",_()),S(h,"cy",v()),S(h,"rx",p(n)/2),S(h,"ry",p(r)/2),S(h,"stroke",p(i)),S(h,"stroke-width",p(s)),S(h,"fill",p(c)),S(h,"opacity",p(a)),S(h,"transform",`rotate(${p(u)}, ${_()}, ${v()} )`)}),N(t,h),ce()}var k$=de("<polygon></polygon>");function Hs(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R(),_=R();let v=F(e,"cx",8),g=F(e,"cy",8),h=F(e,"shape",8);M(()=>Q(h()),()=>{x(n,h().n??3)}),M(()=>Q(h()),()=>{x(r,h().r??.5)}),M(()=>(p(r),p(n),Q(v()),Q(g())),()=>{x(i,tp(p(r),p(n),new Ge(v(),g())))}),M(()=>p(i),()=>{x(a,p(i).map(C=>`${C.x},${C.y}`).join(" "))}),M(()=>Q(h()),()=>{x(s,h().stroke??"black")}),M(()=>Q(h()),()=>{x(c,h().strokeWidth??.02)}),M(()=>Q(h()),()=>{x(u,h().fill??"none")}),M(()=>Q(h()),()=>{x(_,h().angle??0)}),Ee(),fe();var m=k$();ee(()=>{S(m,"points",p(a)),S(m,"stroke",p(s)),S(m,"stroke-width",p(c)),S(m,"fill",p(u)),S(m,"transform",`rotate(${p(_)}, ${v()}, ${g()} )`)}),N(t,m),ce()}var G$=de("<rect></rect>");function M$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R();let _=F(e,"cx",8),v=F(e,"cy",8),g=F(e,"shape",8);M(()=>Q(g()),()=>{x(n,g().width??.5)}),M(()=>Q(g()),()=>{x(r,g().height??.5)}),M(()=>(Q(_()),p(n)),()=>{x(i,_()-p(n)/2)}),M(()=>(Q(v()),p(r)),()=>{x(a,v()-p(r)/2)}),M(()=>Q(g()),()=>{x(s,g().stroke||"black")}),M(()=>Q(g()),()=>{x(c,g().strokeWidth||.023)}),M(()=>Q(g()),()=>{x(u,g().fill||"none")}),Ee(),fe();var h=G$();ee(()=>{S(h,"x",p(i)),S(h,"y",p(a)),S(h,"width",p(n)),S(h,"height",p(r)),S(h,"stroke",p(s)),S(h,"stroke-width",p(c)),S(h,"fill",p(u))}),N(t,h),ce()}function Cl(t,e){le(e,!1);const n=R();let r=F(e,"cx",8),i=F(e,"cy",8),a=F(e,"shape",8);M(()=>(Q(a()),B),()=>{var v;x(n,((v=a())==null?void 0:v.type)??B.CIRCLE)}),Ee(),fe();var s=Ae(),c=ue(s);{var u=v=>{xr(v,{get x(){return r()},get y(){return i()},get shape(){return a()}})},_=v=>{var g=Ae(),h=ue(g);{var m=I=>{R$(I,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},C=I=>{var b=Ae(),w=ue(b);{var L=k=>{x$(k,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},D=k=>{var G=Ae(),U=ue(G);{var H=J=>{M$(J,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},X=J=>{var re=Ae(),Z=ue(re);{var se=me=>{Hs(me,{get cx(){return r()},get cy(){return i()},get shape(){return a()}})},be=me=>{xr(me,{get x(){return r()},get y(){return i()},get shape(){return a()}})};ge(Z,me=>{p(n)===B.POLYGON?me(se):me(be,!1)},!0)}N(J,re)};ge(U,J=>{p(n)===B.RECTANGLE?J(H):J(X,!1)},!0)}N(k,G)};ge(w,k=>{p(n)===B.SQUARE?k(L):k(D,!1)},!0)}N(I,b)};ge(h,I=>{p(n)===B.ELLIPSE?I(m):I(C,!1)},!0)}N(v,g)};ge(c,v=>{p(n)===B.CIRCLE?v(u):v(_,!1)})}N(t,s),ce()}var $$=de("<circle></circle>");function F$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R();let u=F(e,"x",8),_=F(e,"y",8),v=F(e,"value",8),g=F(e,"shape",8);M(()=>Q(g()),()=>{x(n,g().r??.35)}),M(()=>Q(g()),()=>{x(r,g().stroke??"black")}),M(()=>Q(g()),()=>{var m;x(i,(m=g())==null?void 0:m.opacity)}),M(()=>Q(g()),()=>{x(a,g().strokeWidth??.02)}),M(()=>Q(v()),()=>{x(s,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),M(()=>Q(g()),()=>{x(c,g().strokeDasharray??0)}),Ee(),fe();var h=$$();ee(()=>{S(h,"cx",u()),S(h,"cy",_()),S(h,"r",p(n)),S(h,"stroke",p(r)),S(h,"stroke-width",p(a)),S(h,"fill",p(s)),S(h,"opacity",p(i)),S(h,"stroke-dasharray",p(c))}),N(t,h),ce()}var U$=de('<g class="single-cell-tool"><!><!></g>');function H$(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R();let c=F(e,"tool",8),u=F(e,"id",8);const _=c().cell,v=fn(c().toolId,Gt)??bO;M(()=>Q(c()),()=>{x(n,c().shape??v)}),M(()=>(p(n),B),()=>{var w;x(r,((w=p(n))==null?void 0:w.type)||B.CIRCLE)}),M(()=>{},()=>{x(i,{x:_.c+.5,y:_.r+.5})}),M(()=>Ge,()=>{x(a,new Ge(_.c,_.r))}),M(()=>Q(c()),()=>{x(s,c().value)}),Ee(),fe();var g=U$(),h=K(g);{var m=w=>{th(w,{coord:_,minOrMax:"min"})},C=w=>{var L=Ae(),D=ue(L);{var k=U=>{th(U,{coord:_,minOrMax:"max"})},G=U=>{var H=Ae(),X=ue(H);{var J=Z=>{F$(Z,{get x(){return p(i).x},get y(){return p(i).y},get value(){return p(s)},get shape(){return p(n)}})},re=Z=>{var se=Ae(),be=ue(se);{var me=Te=>{rp(Te,{cells:[_],get shape(){return p(n)},get value(){return c().value}})},Ce=Te=>{Cl(Te,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return p(n)}})};ge(be,Te=>{p(r)===B.CAGE?Te(me):Te(Ce,!1)},!0)}N(Z,se)};ge(X,Z=>{c().toolId===d.COLORED_COUNTING_CIRCLES?Z(J):Z(re,!1)},!0)}N(U,H)};ge(D,U=>{c().toolId===d.MAXIMUM?U(k):U(G,!1)},!0)}N(w,L)};ge(h,w=>{c().toolId===d.MINIMUM?w(m):w(C,!1)})}var I=P(h);{var b=w=>{ha(w,{get value(){return p(s)},get x(){return p(a).x},get y(){return p(a).y},position:"TL"})};ge(I,w=>{p(r)!==B.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&p(s)&&w(b)})}Y(g),ee(()=>S(g,"id",`constraint-${u()}`)),N(t,g),ce()}var P$=de("<g></g>"),B$=de('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function W$(t,e){le(e,!1);const n=rt(),r=()=>ve(Md,"$singleCellToolsStore",n),i=R();M(()=>r(),()=>{x(i,r())}),Ee();var a=B$();lt(a,5,()=>p(i),St,(s,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=P$();lt(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{var m=Ae(),C=ue(m);{var I=w=>{I$(w,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},b=w=>{var L=Ae(),D=ue(L);{var k=U=>{O$(U,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},G=U=>{var H=Ae(),X=ue(H);{var J=re=>{H$(re,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})};ge(X,re=>{p(h)[1].type==="SIMPLE"&&re(J)},!0)}N(U,H)};ge(D,U=>{p(h)[1].type==="MULTIARROW"?U(k):U(G,!1)},!0)}N(w,L)};ge(C,w=>{p(h)[1].type==="ARROW"?w(I):w(b,!1)})}N(g,m)}),Y(v),ee(()=>ri(v,`element-group ${u()}`)),N(s,v)}),Y(a),N(t,a),ce()}function z$(t,e){const n=t.getRow(e.r);return new Set(n)}function Y$(t,e){const n=t.getCol(e.c);return new Set(n)}function j$(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function V$(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function K$(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function X$(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function q$(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function Z$(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function Q$(t,e,n){let r=new Set;const a=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),s=a.length,c=[a[0],a[s-1]],u=a.slice(1,s-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((h,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function J$(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function e4(t,e,n){let r=new Set;const a=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!a.find(u=>u===e))return r;const c=a.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function t4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(V$(t,i))),e.get(d.ANTIKING)&&(r=r.union(K$(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(X$(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(Z$(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(q$(t,i)))),r}function ou(t,e,n,r,i){const a=e.get(r);if(a)for(const s of Object.entries(a)){const c=s[1],u=e4(t,n,c);i=new Set([...i,...u])}return i}function n4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const a=e.get(d.BETWEEN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=Q$(t,i,u);r=new Set([...r,..._])}const s=e.get(d.RENBAN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=J$(t,i,u);r=new Set([...r,..._])}return r=ou(t,e,i,d.KILLER_CAGE,r),r=ou(t,e,i,d.PARITY_BALANCE_CAGE,r),r=ou(t,e,i,d.SPOTLIGHT_CAGE,r),r}function ip(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,a=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...z$(i,e),...Y$(i,e),...j$(i,e)])),n=new Set([...n,...t4(i,r,e)]),n=new Set([...n,...n4(i,a,e)]);const s=i.getCell(e.r,e.c);return s&&n.delete(s),n}function r4(t,e){const n=[];if(e.length==0)return[];for(const a of e)n.push(ip(t,a));const r=n.reduce((a,s)=>a.intersection(s)),i=[];for(const a of r)i.push(a.toCoords());return i}var i4=de('<tspan class="svelte-xct9ah"> </tspan>'),o4=de('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function a4(t,e){le(e,!1);const n=R();let r=F(e,"cell",8),i=F(e,"seen_values",8);const a=.25;function s(v){return i().find(h=>h===v)!==void 0}M(()=>Q(r()),()=>{x(n,qn({r:r().r,c:r().c}))}),Ee(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=o4(),h=K(g);S(h,"font-size",a),lt(h,5,()=>r().centerMarks,St,(m,C)=>{var I=i4();const b=Xe(()=>s(p(C)));ee(()=>Ot(I,"conflict",p(b)));var w=K(I,!0);Y(I),ee(()=>et(w,p(C))),N(m,I)}),Y(h),Y(g),ee(()=>{S(h,"x",p(n).x),S(h,"y",p(n).y),S(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(v,g)};ge(u,v=>{r().centerMarks.length&&v(_)})}N(t,c),ce()}var s4=de('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),l4=de('<g class="corner-marks-group"></g>');function c4(t,e){le(e,!1);let n=F(e,"cell",8),r=F(e,"seen_values",8);const i=.25,a=.28;function s(g){const h=g.cornerMarks.slice(0,8),m=qn({r:g.r,c:g.c});return h.map((C,I)=>{const b=j8(I,a);return{pos:m.add(b),value:C,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}fe();var u=Ae(),_=ue(u);{var v=g=>{var h=l4();lt(h,5,()=>s(n()),St,(m,C)=>{let I=()=>p(C).pos,b=()=>p(C).value;var w=s4();S(w,"font-size",i);const L=Xe(()=>c(b()));var D=K(w,!0);Y(w),ee(()=>{S(w,"x",I().x),S(w,"y",I().y),Ot(w,"conflict",p(L)),et(D,b())}),N(m,w)}),Y(h),N(g,h)};ge(_,g=>{n().cornerMarks.length&&g(v)})}N(t,u),ce()}var u4=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),d4=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),_4=de('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),f4=de("<!><!>",1),g4=de('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function h4(t,e){le(e,!1);const n=rt(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(wa,"$puzzleStore",n),a=()=>ve(Xt,"$toolStore",n),s=R(),c=R(),u=R(),_=R(),v=R(),g=R(),h=R();let m=F(e,"cell",8);const C=.8,I=400;function b(G,U){if(!G)return[];let X=[...ip(p(v),U.toCoords())].map(J=>J.value).filter(J=>J!==null);return X=[...new Set(X)],X}function w(G){return G?"1":"0"}M(()=>Q(m()),()=>{x(s,m().value)}),M(()=>Q(m()),()=>{x(c,m().given)}),M(()=>Q(m()),()=>{x(u,qn({r:m().r,c:m().c}))}),M(()=>r(),()=>{x(_,r().highlightPencilmarkConflicts)}),M(()=>i(),()=>{x(v,i())}),M(()=>r(),()=>{x(g,r().showSolution)}),M(()=>(p(_),Q(m())),()=>{x(h,b(p(_),m()))}),Ee(),fe();var L=Ae(),D=ue(L);{var k=G=>{var U=g4(),H=K(U);{var X=re=>{var Z=Ae(),se=ue(Z);{var be=me=>{var Ce=u4();S(Ce,"font-size",C),S(Ce,"font-weight",I);var Te=K(Ce,!0);Y(Ce),ee(()=>{S(Ce,"x",p(u).x),S(Ce,"y",p(u).y),et(Te,m().region)}),N(me,Ce)};ge(se,me=>{m().region!==null&&me(be)})}N(re,Z)},J=re=>{var Z=Ae(),se=ue(Z);{var be=Ce=>{var Te=Ae(),at=ue(Te);{var Se=we=>{var ht=d4();S(ht,"font-size",C),S(ht,"font-weight",I);var ct=K(ht,!0);ee(()=>et(ct,w(m().fog))),Y(ht),ee(()=>{S(ht,"x",p(u).x),S(ht,"y",p(u).y)}),N(we,ht)};ge(at,we=>{m().fog!==null&&we(Se)})}N(Ce,Te)},me=Ce=>{var Te=Ae(),at=ue(Te);{var Se=ht=>{var ct=_4();S(ct,"font-size",C),S(ct,"font-weight",I);var yn=K(ct,!0);Y(ct),ee(()=>{S(ct,"x",p(u).x),S(ct,"y",p(u).y),Ot(ct,"given",p(c)),et(yn,p(s))}),N(ht,ct)},we=ht=>{var ct=f4(),yn=ue(ct);c4(yn,{get cell(){return m()},get seen_values(){return p(h)}});var $n=P(yn);a4($n,{get cell(){return m()},get seen_values(){return p(h)}}),N(ht,ct)};ge(at,ht=>{p(s)!==null?ht(Se):ht(we,!1)},!0)}N(Ce,Te)};ge(se,Ce=>{a()===d.FOG?Ce(be):Ce(me,!1)},!0)}N(re,Z)};ge(H,re=>{a()===d.REGIONS?re(X):re(J,!1)})}Y(U),ee(()=>Ot(U,"hide-given",m().given)),N(G,U)};ge(D,G=>{p(g)||G(k)})}N(t,L),ce()}var v4=de("<path></path>"),p4=de('<g class="highlights-group"></g>');function m4(t,e){le(e,!1);const n=rt(),r=()=>ve(Xt,"$toolStore",n);let i=F(e,"cell",8);function a(_){const v=qn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,C)=>{let I=z8(C,g);I=I.map(w=>w.add(v));const b=No(I,!0);return{colorId:m,d:b}})}fe();var s=Ae(),c=ue(s);{var u=_=>{var v=Ae(),g=ue(v);{var h=m=>{var C=p4();lt(C,5,()=>a(i()),St,(I,b)=>{let w=()=>p(b).colorId,L=()=>p(b).d;var D=v4();ee(()=>{ri(D,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),S(D,"d",L())}),N(I,D)}),Y(C),N(m,C)};ge(g,m=>{i().highlights.length&&m(h)})}N(_,v)};ge(c,_=>{r()!==d.REGIONS&&_(u)})}N(t,s),ce()}var C4=de('<path class="cell-marker" fill="none"></path>'),E4=de('<circle fill="none" opacity="0.9"></circle>');function I4(t,e){le(e,!1);const n=R(),r=R();let i=F(e,"marker",8);const a=.3,s=.08;M(()=>Q(i()),()=>{x(n,np(i(),a))}),M(()=>Q(i()),()=>{x(r,pl(i().colorId,"black"))}),Ee(),fe();var c=Ae(),u=ue(c);{var _=g=>{var h=C4();S(h,"stroke-width",s),ee(()=>{S(h,"d",p(n)),S(h,"stroke",p(r))}),N(g,h)},v=g=>{var h=E4();S(h,"r",a),S(h,"stroke-width",s),ee(()=>{ri(h,`cell-marker color-${i().colorId??""}`),S(h,"cx",i().c),S(h,"cy",i().r),S(h,"stroke",p(r))}),N(g,h)};ge(u,g=>{i().marker==="X"?g(_):g(v,!1)})}N(t,c),ce()}var b4=de('<g class="cell-markers"></g>');function w4(t,e){let n=F(e,"markers",8);var r=b4();lt(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,a)=>{I4(i,{get marker(){return p(a)}})}),Y(r),N(t,r)}var O4=de('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function y4(t,e){le(e,!1);const n=R();let r=F(e,"draftLineMarker",8);const i=.2;function a(u){return u.map(v=>[new Ge(v.p1.c,v.p1.r),new Ge(v.p2.c,v.p2.r)]).flat()}function s(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?pl(_,"black"):"darkred"}M(()=>Q(r()),()=>{x(n,No(a(r().draftLine)))}),Ee(),fe();var c=O4();ee(()=>S(c,"stroke",s(r()))),S(c,"stroke-width",i),S(c,"opacity",.5),ee(()=>S(c,"d",p(n))),N(t,c),ce()}var L4=de('<path fill="none" opacity="0.9"></path>');function A4(t,e){le(e,!1);const n=R(),r=R();let i=F(e,"marker",8);const a=.08,s=.04;M(()=>Q(i()),()=>{x(n,np(i(),a))}),M(()=>Q(i()),()=>{x(r,pl(i().colorId,"black"))}),Ee(),fe();var c=L4();S(c,"stroke-width",s),ee(()=>{S(c,"d",p(n)),ri(c,`edge-marker color-${i().colorId??""}`),S(c,"stroke",p(r))}),N(t,c),ce()}var S4=de('<g class="edge-markers"></g>');function x4(t,e){let n=F(e,"markers",8);var r=S4();lt(r,5,n,i=>`${i.r}, ${i.c}`,(i,a)=>{A4(i,{get marker(){return p(a)}})}),Y(r),N(t,r)}var N4=de('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),D4=de('<g class="line-markers svelte-yha19m"></g>');function T4(t,e){le(e,!1);let n=F(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function a(c){return pl(c,"black")}fe();var s=D4();lt(s,5,n,c=>i(c),(c,u)=>{var _=N4();S(_,"stroke-width",r),ee(()=>S(_,"stroke",a(p(u).colorId))),ee(()=>{S(_,"x1",p(u).p1.c),S(_,"y1",p(u).p1.r),S(_,"x2",p(u).p2.c),S(_,"y2",p(u).p2.r),ri(_,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),N(c,_)}),Y(s),N(t,s),ce()}var R4=de('<g class="pen-tool"><!><!><!><!></g>');function k4(t,e){le(e,!1);const n=rt(),r=()=>ve(Gs,"$penToolStore",n),i=R();M(()=>r(),()=>{x(i,{draftLine:r().draftLine,mode:r().mode})}),Ee(),fe();var a=R4(),s=K(a);T4(s,{get lineMarkers(){return r().lineMarkers}});var c=P(s);x4(c,{get markers(){return r().edgeMarkers}});var u=P(c);w4(u,{get markers(){return r().cellMarkers}});var _=P(u);y4(_,{get draftLineMarker(){return p(i)}}),Y(a),N(t,a),ce()}var G4=de('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function M4(t,e){le(e,!1);const n=rt(),r=()=>ve(Si,"$selectionStore",n),i=()=>ve(Wt,"$settingsStore",n),a=()=>ve(wa,"$puzzleStore",n),s=()=>ve(Xt,"$toolStore",n),c=R(),u=R(),_=R(),v=R(),g={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,w){return b.length?r4(p(_),b):[]}M(()=>r(),()=>{x(c,r().cells)}),M(()=>i(),()=>{x(u,i().highlightCellsSeenBySelection)}),M(()=>a(),()=>{x(_,a())}),M(()=>s(),()=>{x(v,od(s()))}),Ee(),fe();var m=Ae(),C=ue(m);{var I=b=>{var w=G4(),L=K(w),D=Xe(()=>h(p(c),p(_)));Us(L,{get cells(){return p(D)},shape:g}),Y(w),N(b,w)};ge(C,b=>{p(u)&&p(v)&&b(I)})}N(t,m),ce()}function El(t){const e=[],n=t.map(a=>a.value).filter(a=>a!==null),i=[...pv(n).entries()].filter(([,a])=>a>1).map(([a])=>a);return e.push(...t.filter(a=>a.value!==null&&i.includes(a.value))),e}function $4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...El(r))}return new Set(e)}function F4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...El(r))}return new Set(e)}function U4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...El(r))}return new Set(e)}function H4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function P4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getNeighboorCells(r).filter(s=>s.value===r.value);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function B4(t){const e=[],n=t.getFilledCells();for(const r of n){const a=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);a.length&&(e.push(r),e.push(...a))}return new Set(e)}function W4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),a=El(i);a.length&&e.push(...a)}return new Set(e)}function z4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...$4(t),...F4(t),...U4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(H4(t))),e.get(d.ANTIKING)&&(n=n.union(P4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(B4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(W4(t))),n}function Y4(t,e){return[...new Set([...z4(t,e)])]}var j4=de('<rect class="conflict svelte-4mp6ok"></rect>'),V4=de('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function K4(t,e){le(e,!1);const n=rt(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(_n,"$gridStore",n),a=()=>ve(Tr,"$globalConstraintsStore",n),s=()=>ve(dn,"$cellsStore",n),c=R(),u=R(),_=R(),v=R();B.CAGE;function g(I){return Y4(p(u),p(_)).map(L=>L.toCoords())}M(()=>r(),()=>{x(c,r().checkConflicts)}),M(()=>i(),()=>{x(u,i())}),M(()=>a(),()=>{x(_,a())}),M(()=>s(),()=>{x(v,s())}),Ee(),fe();var h=Ae(),m=ue(h);{var C=I=>{var b=V4();lt(b,5,()=>g(p(v)),St,(w,L)=>{var D=j4();S(D,"width",1),S(D,"height",1),ee(()=>{S(D,"x",p(L).c),S(D,"y",p(L).r)}),N(w,D)}),Y(b),N(I,b)};ge(m,I=>{p(c)&&I(C)})}N(t,h),ce()}var X4=de('<line class="diag svelte-ylotlw"></line>'),q4=de('<line class="antidiag svelte-ylotlw"></line>'),Z4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),Q4=de('<line class="diag svelte-ylotlw"></line>'),J4=de('<line class="antidiag svelte-ylotlw"></line>'),eF=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),tF=de('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function nF(t,e){le(e,!1);const n=rt(),r=()=>ve(Tr,"$globalConstraintsStore",n),i=()=>ve(_n,"$gridStore",n),a=R(),s=R(),c=R(),u=R(),_=R(),v=R(),g=R(),h=R(),m=R(),C=R(),I=R(),b=R(),w=0,L=0,D=0,k=0;M(()=>r(),()=>{x(a,r())}),M(()=>(p(a),d),()=>{x(s,!!p(a).get(d.POSITIVE_DIAGONAL))}),M(()=>(p(a),d),()=>{x(c,!!p(a).get(d.NEGATIVE_DIAGONAL))}),M(()=>(p(a),d),()=>{x(u,!!p(a).get(d.NEGATIVE_ANTIDIAGONAL))}),M(()=>(p(a),d),()=>{x(_,!!p(a).get(d.POSITIVE_ANTIDIAGONAL))}),M(()=>(p(a),d),()=>{x(v,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),M(()=>(p(a),d),()=>{x(g,!!p(a).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),M(()=>i(),()=>{x(h,i())}),M(()=>p(h),()=>{x(m,p(h).nCols)}),M(()=>p(h),()=>{x(C,p(h).nRows)}),M(()=>p(h),()=>{x(I,p(h).nCols)}),M(()=>p(h),()=>{x(b,p(h).nRows)}),Ee(),fe();var G=tF(),U=K(G);{var H=Se=>{var we=X4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),N(Se,we)};ge(U,Se=>{p(c)&&Se(H)})}var X=P(U);{var J=Se=>{var we=q4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),N(Se,we)};ge(X,Se=>{p(u)&&Se(J)})}var re=P(X);{var Z=Se=>{var we=Z4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),N(Se,we)};ge(re,Se=>{p(v)&&Se(Z)})}var se=P(re);{var be=Se=>{var we=Q4();S(we,"x2",k),S(we,"y1",D),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(C))}),N(Se,we)};ge(se,Se=>{p(s)&&Se(be)})}var me=P(se);{var Ce=Se=>{var we=J4();S(we,"x2",k),S(we,"y1",D),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(C))}),N(Se,we)};ge(me,Se=>{p(_)&&Se(Ce)})}var Te=P(me);{var at=Se=>{var we=eF();S(we,"x2",k),S(we,"y1",D),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(C))}),N(Se,we)};ge(Te,Se=>{p(g)&&Se(at)})}Y(G),N(t,G),ce()}var rF=de('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function iF(t,e){le(e,!1);const n=rt(),r=()=>ve(dn,"$cellsStore",n),i=()=>ve(Av,"$showFogStore",n),a=()=>ve(Qs,"$solutionStore",n),s=()=>ve(_n,"$gridStore",n),c=R(),u=R(),_=R(),v=R(),g=R(),h=R();let m=F(e,"boundingBox",8),C=F(e,"gridShape",8);function I(be){const me=be.filter(we=>we.fog);if(!p(g))return me.map(ht=>ht.toCoords());const Ce=be.filter(we=>we.value===p(g)[we.r][we.c]);let Te=new Set;for(const we of Ce){const ht=p(h).getNeighboorCells(we);Te=new Set([...ht,we])}return[...new Set(me).difference(Te)].map(we=>we.toCoords())}M(()=>r(),()=>{x(c,r())}),M(()=>p(c),()=>{x(u,I(p(c)))}),M(()=>p(u),()=>{x(_,fo(p(u),0))}),M(()=>i(),()=>{x(v,i())}),M(()=>a(),()=>{x(g,a())}),M(()=>s(),()=>{x(h,s())}),Ee(),fe();var b=rF(),w=K(b),L=K(w);Y(w);var D=P(w),k=K(D);S(k,"stroke-width",.5);var G=P(k);S(G,"stroke-width",.375);var U=P(G);S(U,"stroke-width",.25);var H=P(U);S(H,"stroke-width",.125),Li(),Y(D);var X=P(D),J=K(X);Li(),Y(X);var re=P(X),Z=K(re),se=P(Z);S(se,"x",0),S(se,"y",0),Y(re),Y(b),ee(()=>{S(L,"d",p(_)),Ot(D,"disabled",!p(v)),Ot(X,"disabled",!p(v)),S(J,"x",m().x),S(J,"y",m().y),S(J,"width",m().width),S(J,"height",m().height),S(Z,"x",m().x),S(Z,"y",m().y),S(Z,"width",m().width),S(Z,"height",m().height),S(se,"width",C().nCols),S(se,"height",C().nRows)}),N(t,b),ce()}var oF=de('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function aF(t,e){le(e,!1);const n=rt(),r=()=>ve(Av,"$showFogStore",n),i=R();let a=F(e,"gridShape",8);M(()=>r(),()=>{x(i,r())}),Ee(),fe();var s=oF(),c=K(s);S(c,"x",0),S(c,"y",0),Y(s),ee(()=>{S(s,"visibility",p(i)?"visible":"hidden"),S(c,"width",a().nCols),S(c,"height",a().nRows)}),N(t,s),ce()}var sF=de('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function lF(t,e){le(e,!1);const n=R();let r=F(e,"r",8),i=F(e,"c",8),a=F(e,"val",8);const s=.8,c=400;M(()=>(Q(r()),Q(i())),()=>{x(n,qn({r:r(),c:i()}))}),Ee(),fe();var u=Ae(),_=ue(u);{var v=g=>{var h=sF();S(h,"font-size",s),S(h,"font-weight",c);var m=K(h,!0);Y(h),ee(()=>{S(h,"x",p(n).x),S(h,"y",p(n).y),et(m,a())}),N(g,h)};ge(_,g=>{a()!==null&&g(v)})}N(t,u),ce()}var cF=de('<g class="solution-layer"></g>');function uF(t,e){le(e,!1);const n=rt(),r=()=>ve(Qs,"$solutionStore",n),i=()=>ve(Wt,"$settingsStore",n),a=()=>ve(Zs,"$gameModeStore",n),s=R(),c=R(),u=R();M(()=>r(),()=>{x(s,r())}),M(()=>i(),()=>{x(c,i().showSolution)}),M(()=>a(),()=>{x(u,a())}),Ee(),fe();var _=Ae(),v=ue(_);{var g=h=>{var m=cF();lt(m,5,()=>p(s),St,(C,I,b)=>{var w=Ae(),L=ue(w);lt(L,1,()=>p(I),St,(D,k,G)=>{lF(D,{r:b,c:G,get val(){return p(k)}})}),N(C,w)}),Y(m),N(h,m)};ge(v,h=>{p(s)&&p(c)&&p(u)===go.SETTING&&h(g)})}N(t,_),ce()}var dF=de("<g></g>"),_F=de('<g mask="url(#fog-mask-fog)"></g>');function Jr(t,e){let n=F(e,"elements",8),r=F(e,"g_name",8),i=F(e,"Component",8);var a=_F();lt(a,5,n,St,(s,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=dF();lt(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{i()(g,{get tool(){return p(h)[1]}})}),Y(v),ee(()=>ri(v,`element-group ${u()}`)),N(s,v)}),Y(a),ee(()=>ri(a,bh(r()))),N(t,a)}var fF=de('<line class="svelte-yr67cf"></line>');function gF(t,e){le(e,!1);const n=R(),r=R(),i=R();let a=F(e,"shape",8),s=F(e,"coords",8);const[c,u]=s(),_=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,h=c.r===u.r?u.r+1:u.r;M(()=>Q(a()),()=>{x(n,a().stroke??"black")}),M(()=>Q(a()),()=>{var C;x(r,(C=a())==null?void 0:C.opacity)}),M(()=>Q(a()),()=>{x(i,a().strokeWidth??.02)}),Ee(),fe();var m=fF();S(m,"x1",_),S(m,"x2",v),S(m,"y1",g),S(m,"y2",h),ee(()=>{S(m,"stroke",p(n)),S(m,"stroke-width",p(i)),S(m,"opacity",p(r))}),N(t,m),ce()}var hF=de('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function vF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R();let c=F(e,"tool",8);const u=c().cells,_=fn(c().toolId,Gt)??jh;function v(I,b){return b===B.TEXT_ONLY?I.value?I.value:"-":I.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const I=qn(u[0]);return qn(u[1]).subtract(I).angle()/(2*Math.PI)*360}M(()=>Q(c()),()=>{x(n,c().shape??_)}),M(()=>Fs,()=>{x(r,xL(Fs(u)))}),M(()=>(p(n),B),()=>{var I;x(i,((I=p(n))==null?void 0:I.type)||B.CIRCLE)}),M(()=>p(n),()=>{var I;x(a,((I=p(n))==null?void 0:I.fontSize)??.2)}),M(()=>p(n),()=>{var I;x(s,((I=p(n))==null?void 0:I.fontColor)??"black")}),Ee(),fe();var h=Ae(),m=ue(h);{var C=I=>{var b=hF(),w=K(b);{var L=U=>{xr(U,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},D=U=>{var H=Ae(),X=ue(H);{var J=Z=>{xr(Z,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},re=Z=>{var se=Ae(),be=ue(se);{var me=Te=>{gF(Te,{coords:u,get shape(){return p(n)}})},Ce=Te=>{Cl(Te,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(be,Te=>{p(i)===B.BORDER_LINE?Te(me):Te(Ce,!1)},!0)}N(Z,se)};ge(X,Z=>{p(i)===B.TEXT_ONLY?Z(J):Z(re,!1)},!0)}N(U,H)};ge(w,U=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?U(L):U(D,!1)})}var k=P(w);ee(()=>S(k,"transform",`rotate(${g()}, ${p(r).x}, ${p(r).y} )`));var G=K(k,!0);ee(()=>et(G,v(c(),p(i)))),Y(k),Y(b),ee(()=>{S(k,"x",p(r).x),S(k,"y",p(r).y),S(k,"font-size",p(a)),S(k,"fill",p(s))}),N(I,b)};ge(m,I=>{u.length===2&&I(C)})}N(t,h),ce()}var pF=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),mF=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),CF=de('<g class="quadruple-text"><!></g>');function EF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R();let c=F(e,"cornerTool",8);const u=c().cells,_=new Ge(u[u.length-1].c,u[u.length-1].r),v=fn(c().toolId,Gt)??Vh;M(()=>Q(c()),()=>{x(n,c().value)}),M(()=>Q(c()),()=>{x(r,c().shape??v)}),M(()=>p(r),()=>{var C;x(i,((C=p(r))==null?void 0:C.fontSize)??.2)}),M(()=>p(r),()=>{var C;x(a,((C=p(r))==null?void 0:C.fontColor)??"black")}),M(()=>p(n),()=>{var C;x(s,p(n)?(C=p(n))==null?void 0:C.split(","):[])}),Ee(),fe();var g=Ae(),h=ue(g);{var m=C=>{var I=CF(),b=K(I);{var w=D=>{var k=pF(),G=K(k,!0);ee(()=>et(G,p(s).join(" "))),Y(k),ee(()=>{S(k,"x",_.x),S(k,"y",_.y),S(k,"font-size",p(i)),S(k,"fill",p(a))}),N(D,k)},L=D=>{var k=mF(),G=ue(k),U=K(G,!0);ee(()=>et(U,p(s).slice(0,2).join(" "))),Y(G);var H=P(G),X=K(H,!0);ee(()=>et(X,p(s).slice(2).join(" "))),Y(H),ee(()=>{S(G,"x",_.x),S(G,"y",_.y),S(G,"dy",-p(i)/2),S(G,"font-size",p(i)),S(G,"fill",p(a)),S(H,"x",_.x),S(H,"y",_.y),S(H,"dy",p(i)/2),S(H,"font-size",p(i)),S(H,"fill",p(a))}),N(D,k)};ge(b,D=>{p(s).length<=2?D(w):D(L,!1)})}Y(I),ee(()=>S(I,"data-count",p(s).length)),N(C,I)};ge(h,C=>{p(n)&&C(m)})}N(t,g),ce()}var IF=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),bF=de('<g class="corner-tool"><!><!></g>');function wF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R();let s=F(e,"tool",8);const c=s().cells,u=fn(s().toolId,Gt)??Vh,_=new Ge(c[c.length-1].c,c[c.length-1].r);function v(C,I){return I===B.TEXT_ONLY?C.value?C.value:"-":C.value??""}M(()=>Q(s()),()=>{x(n,s().shape??u)}),M(()=>(p(n),B),()=>{var C;x(r,((C=p(n))==null?void 0:C.type)??B.CIRCLE)}),M(()=>p(n),()=>{var C;x(i,((C=p(n))==null?void 0:C.fontSize)??.2)}),M(()=>p(n),()=>{var C;x(a,((C=p(n))==null?void 0:C.fontColor)??"black")}),Ee(),fe();var g=Ae(),h=ue(g);{var m=C=>{var I=bF(),b=K(I);Cl(b,{get cx(){return _.x},get cy(){return _.y},get shape(){return p(n)}});var w=P(b);{var L=k=>{EF(k,{get cornerTool(){return s()}})},D=k=>{var G=IF(),U=K(G,!0);ee(()=>et(U,v(s(),p(r)))),Y(G),ee(()=>{S(G,"x",_.x),S(G,"y",_.y),S(G,"font-size",p(i)),S(G,"fill",p(a))}),N(k,G)};ge(w,k=>{s().toolId===d.QUADRUPLE?k(L):k(D,!1)})}Y(I),N(C,I)};ge(h,C=>{c.length===4&&C(m)})}N(t,g),ce()}var OF=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),yF=de('<g class="center-corner-or-edge-tool"><!><!></g>');function LF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R();let u=F(e,"tool",8);const _=u().cell,v=fn(u().toolId,Gt)??jh;function g(w,L){return L===B.TEXT_ONLY?w.value?w.value:"-":w.value??""}M(()=>Q(u()),()=>{x(n,u().shape??v)}),M(()=>{},()=>{x(r,_)}),M(()=>(p(n),B),()=>{var w;x(i,((w=p(n))==null?void 0:w.type)||B.CIRCLE)}),M(()=>p(n),()=>{var w;x(a,((w=p(n))==null?void 0:w.fontSize)??.2)}),M(()=>p(n),()=>{var w;x(s,((w=p(n))==null?void 0:w.fontColor)??"black")}),M(()=>p(r),()=>{x(c,p(r).r%1===.5&&p(r).c%1===.5)}),Ee(),fe();var h=yF(),m=K(h);Cl(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var C=P(m);{var I=w=>{var L=Xe(()=>g(u(),p(i))),D=Xe(()=>Math.floor(p(r).c)),k=Xe(()=>Math.floor(p(r).r));ha(w,{get value(){return p(L)},get x(){return p(D)},get y(){return p(k)},position:"TL",get fontColor(){return p(s)}})},b=w=>{var L=OF(),D=K(L,!0);ee(()=>et(D,g(u(),p(i)))),Y(L),ee(()=>{S(L,"x",p(r).c),S(L,"y",p(r).r),S(L,"font-size",p(a)),S(L,"fill",p(s))}),N(w,L)};ge(C,w=>{p(c)?w(I):w(b,!1)})}Y(h),N(t,h),ce()}var AF=de('<path fill="none"></path>');function Ni(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R();let u=F(e,"linePoints",8),_=F(e,"shape",8,void 0);const v="round",g="round";M(()=>Q(_()),()=>{var m;x(n,((m=_())==null?void 0:m.stroke)??"gray")}),M(()=>Q(_()),()=>{var m;x(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),M(()=>Q(_()),()=>{var m;x(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),M(()=>Q(_()),()=>{var m;x(a,((m=_())==null?void 0:m.strokeDashoffset)??0)}),M(()=>Q(_()),()=>{var m,C,I,b,w,L,D,k;x(s,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((b=(I=_())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((L=(w=_())==null?void 0:w.linePathOptions)==null?void 0:L.bezierRounding)??.2,closeLoops:((k=(D=_())==null?void 0:D.linePathOptions)==null?void 0:k.closeLoops)??!1})}),M(()=>(Q(u()),p(s)),()=>{x(c,vl(u(),p(s)))}),Ee(),fe();var h=AF();S(h,"stroke-linejoin",v),S(h,"stroke-linecap",g),ee(()=>{S(h,"d",p(c)),S(h,"stroke",p(n)),S(h,"stroke-width",p(r)),S(h,"stroke-dasharray",p(i)),S(h,"stroke-dashoffset",p(a))}),N(t,h),ce()}var SF=ne("<!> <!> <!>",1);function xF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R();let s=F(e,"linePoints",8),c=F(e,"shape",8,pa);function u(b){var D;const w=xt.cloneDeep(b);w.r=w.r||.2;const L=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:L,shortenTail:L,bezierRounding:(D=w.linePathOptions)==null?void 0:D.bezierRounding},w}M(()=>Q(s()),()=>{x(n,s().length)}),M(()=>(p(n),Q(s())),()=>{x(r,p(n)>=0?s()[0]:void 0)}),M(()=>(p(n),Q(s())),()=>{x(i,p(n)>=0?s()[p(n)-1]:void 0)}),M(()=>Q(c()),()=>{x(a,u(c()))}),Ee(),fe();var _=SF(),v=ue(_);{var g=b=>{xr(b,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(a)}})};ge(v,b=>{p(r)&&b(g)})}var h=P(v,2);{var m=b=>{Ni(b,{get linePoints(){return s()},get shape(){return p(a)}})};ge(h,b=>{p(n)>1&&b(m)})}var C=P(h,2);{var I=b=>{xr(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(a)}})};ge(C,b=>{p(i)&&b(I)})}N(t,_),ce()}var NF=ne("<!> <!> <!>",1);function DF(t,e){le(e,!1);const n=R(),r=R(),i=R();let a=F(e,"linePoints",8),s=F(e,"shape",12,pa);const c=4,u=.5;function _(k,G){const U=G.r??u,H=G.n??c,X=G.angle??0,J=tp(U,H,new Ge(0,0),!0,0),re=(H+(k-X/360)*H%H)%H,Z=Math.floor(re)%H,se=Math.ceil(re)%H;return J[Z].lerp(J[se],re%1).length()}function v(k){if(p(n)<=1)return 0;const G=a()[0],H=a()[1].subtract(G).angle()/(2*Math.PI);return _(H,k)}function g(k){if(p(n)<=1)return 0;const G=a()[p(n)-1],H=a()[p(n)-2].subtract(G).angle()/(2*Math.PI);return _(H,k)}function h(k){var U;const G=xt.cloneDeep(k);return G.r=G.r||u,G.opacity=1,G.linePathOptions={shortenHead:v(G),shortenTail:g(G),bezierRounding:(U=G.linePathOptions)==null?void 0:U.bezierRounding},G}M(()=>Q(a()),()=>{x(n,a().length)}),M(()=>(p(n),Q(a())),()=>{x(r,p(n)>=0?a()[0]:void 0)}),M(()=>(p(n),Q(a())),()=>{x(i,p(n)>=0?a()[p(n)-1]:void 0)}),M(()=>Q(s()),()=>{s(h(s()))}),Ee(),fe();var m=NF(),C=ue(m);{var I=k=>{Hs(k,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return s()}})};ge(C,k=>{p(r)&&k(I)})}var b=P(C,2);{var w=k=>{Ni(k,{get linePoints(){return a()},get shape(){return s()}})};ge(b,k=>{p(n)>1&&k(w)})}var L=P(b,2);{var D=k=>{Hs(k,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return s()}})};ge(L,k=>{p(i)&&k(D)})}N(t,m),ce()}var TF=ne("<!> <!>",1);function nh(t,e){le(e,!1);const n=R();let r=F(e,"linePoints",8),i=F(e,"shape",8,pa);function a(m){var b,w,L;const C=xt.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=C.linePathOptions)==null?void 0:L.bezierRounding},C}function s(m){var b,w,L;const C=xt.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const I=C.r;return C.linePathOptions={shortenHead:((b=C.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=C.linePathOptions)==null?void 0:L.bezierRounding},C}M(()=>Q(r()),()=>{x(n,r().length>0?r()[0]:void 0)}),Ee(),fe();var c=TF(),u=ue(c);{var _=m=>{var C=Xe(()=>a(i()));Ni(m,{get linePoints(){return r()},get shape(){return p(C)}})};ge(u,m=>{r().length>1&&m(_)})}var v=P(u,2);{var g=m=>{var C=Xe(()=>a(i()));xr(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(C)}})},h=m=>{var C=Ae(),I=ue(C);{var b=w=>{var L=Xe(()=>s(i()));Hs(w,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(L)}})};ge(I,w=>{p(n)&&w(b)},!0)}N(m,C)};ge(v,m=>{p(n)&&i().type===B.THERMO_WITH_CIRCLE?m(g):m(h,!1)})}N(t,c),ce()}var RF=de('<g class="line-tool"><!></g>');function kF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R();let s=F(e,"tool",8);const c=fn(s().toolId,Gt)??pa;M(()=>Q(s()),()=>{x(n,Fs(s().cells))}),M(()=>Q(s()),()=>{x(r,s().shape??c)}),M(()=>(p(r),B),()=>{var h;x(i,((h=p(r))==null?void 0:h.type)||B.LINE)}),M(()=>p(r),()=>{var h;x(a,((h=p(r))==null?void 0:h.opacity)??.8)}),Ee(),fe();var u=RF(),_=K(u);{var v=h=>{Ni(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{var m=Ae(),C=ue(m);{var I=w=>{xF(w,{get linePoints(){return p(n)},get shape(){return p(r)}})},b=w=>{var L=Ae(),D=ue(L);{var k=U=>{DF(U,{get linePoints(){return p(n)},get shape(){return p(r)}})},G=U=>{var H=Ae(),X=ue(H);{var J=Z=>{nh(Z,{get linePoints(){return p(n)},get shape(){return p(r)}})},re=Z=>{var se=Ae(),be=ue(se);{var me=Te=>{nh(Te,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ce=Te=>{Ni(Te,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(be,Te=>{p(i)===B.THERMO_WITH_POLYGON?Te(me):Te(Ce,!1)},!0)}N(Z,se)};ge(X,Z=>{p(i)===B.THERMO_WITH_CIRCLE?Z(J):Z(re,!1)},!0)}N(U,H)};ge(D,U=>{p(i)===B.LINE_WITH_POLYGON_ENDS?U(k):U(G,!1)},!0)}N(w,L)};ge(C,w=>{p(i)===B.LINE_WITH_CIRCLE_ENDS?w(I):w(b,!1)},!0)}N(h,m)};ge(_,h=>{p(i)===B.LINE?h(v):h(g,!1)})}Y(u),ee(()=>S(u,"opacity",p(a))),N(t,u),ce()}var GF=de('<g class="cage-tool"><!></g>');function MF(t,e){le(e,!1);const n=R();let r=F(e,"tool",8);const i=fn(r().toolId,Gt)??cd;M(()=>Q(r()),()=>{x(n,r().shape??i)}),Ee(),fe();var a=GF(),s=K(a);rp(s,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),Y(a),N(t,a),ce()}var $F=ne("<!> <!> <!> <!>",1);function FF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R(),c=R(),u=R(),_=R();let v=F(e,"tool",8);const g=fn(v().toolId,Gt)??LO,h=800,m=v().value;M(()=>Q(v()),()=>{x(n,v().shape??g)}),M(()=>p(n),()=>{x(r,p(n).inset??.15)}),M(()=>p(n),()=>{x(i,p(n).strokeWidth??.07)}),M(()=>p(n),()=>{x(a,p(n).fontColor??p(n).stroke??"black")}),M(()=>Q(v()),()=>{x(s,v().cells[v().cells.length-1])}),M(()=>Q(v()),()=>{x(c,v().cells2[v().cells2.length-1])}),M(()=>(p(s),p(r)),()=>{x(u,new Ge(p(s).c+1-p(r)-.05,p(s).r+1-p(r)-.05))}),M(()=>(p(c),p(r)),()=>{x(_,new Ge(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),Ee(),fe();var C=$F(),I=ue(C);Us(I,{get cells(){return v().cells},get shape(){return p(n)}});var b=P(I,2);ha(b,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(a)},fontWeight:h});var w=P(b,2);Us(w,{get cells(){return v().cells2},get shape(){return p(n)}});var L=P(w,2);ha(L,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(a)},fontWeight:h}),N(t,C),ce()}var UF=de('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function HF(t,e){var U;le(e,!1);const n=R(),r=R(),i=R();let a=F(e,"tool",8);const s=a().cell,c=a().direction,u=zh(s,c),_=qn(s),v=fn(a().toolId,Gt)??AO,g=((U=p(n))==null?void 0:U.fontSize)??.5,h=.03;function m(H){return H.value&&H.value.length?H.value:"-"}function C(){const J=qn(u).subtract(_).length(),re={shortenHead:.3*J,shortenTail:.55*J};return yu([s,u],re)}const b=`outside-tool-arrow-marker-${crypto.randomUUID()}`;M(()=>Q(a()),()=>{x(n,a().shape??v)}),M(()=>p(n),()=>{var H;x(r,((H=p(n))==null?void 0:H.fontColor)??"var(--text-primary-color)")}),M(()=>p(n),()=>{var H;x(i,((H=p(n))==null?void 0:H.stroke)??"var(--text-primary-color)")}),Ee(),fe();var w=UF(),L=K(w);ml(L,{id:b,l:.07,strokeWidth:h,get stroke(){return p(i)}});var D=P(L);ee(()=>S(D,"d",C())),S(D,"stroke-width",h),S(D,"marker-end",`url(#${b??""})`);var k=P(D);S(k,"font-size",g);var G=K(k,!0);ee(()=>et(G,m(a()))),Y(k),Y(w),ee(()=>{S(D,"stroke",p(i)),S(k,"x",_.x),S(k,"y",_.y),S(k,"fill",p(r))}),N(t,w),ce()}var PF=ne("<!> <!> <!>",1);function BF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R(),s=R();let c=F(e,"linePoints",8),u=F(e,"shape",8);function _(b){const w=xt.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}M(()=>Q(c()),()=>{x(n,c().length)}),M(()=>(p(n),Q(c())),()=>{x(r,p(n)>1&&c()[0].equals(c()[p(n)-1]))}),M(()=>(p(n),Q(c())),()=>{x(i,p(n)>=0?c()[0]:void 0)}),M(()=>(p(n),Q(c())),()=>{x(a,p(n)>=0?c()[p(n)-1]:void 0)}),M(()=>Q(u()),()=>{x(s,_(u()))}),Ee(),fe();var v=PF(),g=ue(v);Ni(g,{get linePoints(){return c()},get shape(){return u()}});var h=P(g,2);{var m=b=>{xr(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(s)}})};ge(h,b=>{!p(r)&&p(i)&&b(m)})}var C=P(h,2);{var I=b=>{xr(b,{get x(){return p(a).x},get y(){return p(a).y},get shape(){return p(s)}})};ge(C,b=>{!p(r)&&p(a)&&b(I)})}N(t,v),ce()}var WF=de('<g class="corner-line-tool"><!></g>');function zF(t,e){le(e,!1);const n=R(),r=R(),i=R(),a=R();let s=F(e,"tool",8);const c=fn(s().toolId,Gt)??pa;M(()=>(Q(s()),Ge),()=>{x(n,s().coords.map(h=>new Ge(h.c,h.r)))}),M(()=>Q(s()),()=>{x(r,s().shape??c)}),M(()=>(p(r),B),()=>{var h;x(i,((h=p(r))==null?void 0:h.type)||B.LINE)}),M(()=>p(r),()=>{var h;x(a,((h=p(r))==null?void 0:h.opacity)??1)}),Ee(),fe();var u=WF(),_=K(u);{var v=h=>{BF(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{Ni(h,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(_,h=>{p(i)===B.MAZE_WALL?h(v):h(g,!1)})}Y(u),ee(()=>S(u,"opacity",p(a))),N(t,u),ce()}var YF=de('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function jF(t,e){le(e,!1);const n=rt(),r=()=>ve(_n,"$gridStore",n),i=()=>ve(_t,"$localConstraintsStore",n),a=()=>ve(Xt,"$toolStore",n),s=()=>ve(dn,"$cellsStore",n),c=()=>ve(u$,"$cageToolsStore",n),u=()=>ve(s$,"$lineToolsStore",n),_=()=>ve(d$,"$cloneToolsStore",n),v=()=>ve(l$,"$cornerLineToolsStore",n),g=()=>ve(_$,"$outsideDirectionToolsStore",n),h=()=>ve(i$,"$edgeToolsStore",n),m=()=>ve(a$,"$cornerToolsStore",n),C=()=>ve(o$,"$centerCornerOrEdgeToolsStore",n),I=R(),b=R(),w=R();let L=F(e,"svgRef",12,null);function D(){for(const[Rt,Ne]of i().entries()){if(!_a(Rt))continue;if(Object.entries(Ne).some(([Re,xe])=>!Kt(xe.cell,p(b))))return!0}return!1}function k(Rt,Ne){const pe=D(),Re=_a(Ne),xe=pe||Re?1:.2,Lt=-xe,Ra=-xe,bl=Rt.nCols+2*xe,_i=Rt.nRows+2*xe;return{x:Lt,y:Ra,width:bl,height:_i}}function G(Rt){return`${Rt.x} ${Rt.y} ${Rt.width} ${Rt.height}`}M(()=>r(),()=>{x(I,r())}),M(()=>p(I),()=>{x(b,{nRows:p(I).nRows,nCols:p(I).nCols})}),M(()=>(p(b),a()),()=>{x(w,k(p(b),a()))}),Ee(),fe();var U=YF();ee(()=>S(U,"viewBox",G(p(w))));var H=K(U);iF(H,{get boundingBox(){return p(w)},get gridShape(){return p(b)}});var X=P(H);aF(X,{get gridShape(){return p(b)}});var J=P(X);t$(J,{get grid(){return r()}});var re=P(J);M8(re,{get gridShape(){return p(b)}});var Z=P(re);lt(Z,5,s,St,(Rt,Ne)=>{m4(Rt,{get cell(){return p(Ne)}})}),Y(Z);var se=P(Z);M4(se,{});var be=P(se);W$(be,{});var me=P(be);Jr(me,{get elements(){return c()},g_name:"cage-tools-layer",Component:MF});var Ce=P(me);Jr(Ce,{get elements(){return u()},g_name:"line-tools-layer",Component:kF});var Te=P(Ce);Jr(Te,{get elements(){return _()},g_name:"clone-tools-layer",Component:FF});var at=P(Te);U8(at,{});var Se=P(at);nF(Se,{});var we=P(Se);Z8(we,{});var ht=P(we);Jr(ht,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:zF});var ct=P(ht);C$(ct,{get boundingBox(){return p(w)}});var yn=P(ct);Jr(yn,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:HF});var $n=P(yn);J8($n,{get boundingBox(){return p(w)}});var Hr=P($n);k8(Hr,{});var Zt=P(Hr);Jr(Zt,{get elements(){return h()},g_name:"edge-tools-layer",Component:vF});var pr=P(Zt);Jr(pr,{get elements(){return m()},g_name:"corner-tools-layer",Component:wF});var di=P(pr);Jr(di,{get elements(){return C()},g_name:"center-corner-edge-tools-layer",Component:LF});var ir=P(di);k4(ir,{});var Fn=P(ir);lt(Fn,5,s,St,(Rt,Ne)=>{h4(Rt,{get cell(){return p(Ne)}})}),Y(Fn);var Hi=P(Fn);uF(Hi,{});var Pr=P(Hi);K4(Pr,{}),Y(U),Ai(U,Rt=>L(Rt),()=>L()),N(t,U),ce()}function VF(t){return BL(t)?(qw(),!0):!1}function KF(t){return WL(t)?(bv(),!0):!1}function XF(t){return zL(t)?(wv(),!0):!1}function au(t){(VF(t)||KF(t)||XF(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var qF=ne('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function ZF(t,e){le(e,!1);const n=rt(),r=()=>ve(ep,"$InputHandlerStore",n),i=()=>ve(co,"$svgRefStore",n),a=R();let s=R(null);function c(h){return m=>{h&&p(a)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===p(s))&&h(m)}}M(()=>r(),()=>{x(a,r())}),Ee();var u=qF();Me("keydown",zc,function(...h){au==null||au.apply(this,h)});var _=wg(()=>{var h;return c((h=p(a))==null?void 0:h.keyDown)});Me("keydown",zc,function(...h){var m;(m=p(_))==null||m.apply(this,h)});var v=wg(()=>{var h;return c((h=p(a))==null?void 0:h.keyUp)});Me("keyup",zc,function(...h){var m;(m=p(v))==null||m.apply(this,h)});var g=K(u);jF(g,{get svgRef(){return ph(),i()},set svgRef(h){va(co,h)},$$legacy:!0}),Y(u),Ai(u,h=>x(s,h),()=>p(s)),Me("pointerdown",u,Kc(Xn(h=>{var m;h.currentTarget.focus(),(m=p(a))==null||m.pointerDown(h)})),!0),Me("pointermove",u,Kc(Xn(h=>{var m;h.currentTarget.focus(),(m=p(a))==null||m.pointerMove(h)})),!0),Me("pointerup",u,Kc(Xn(h=>{var m;h.currentTarget.focus(),(m=p(a))==null||m.pointerUp(h)})),!0),N(t,u),ce()}var QF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function JF(t){var e=QF();N(t,e)}var eU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function tU(t){var e=eU();N(t,e)}var nU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function rU(t){var e=nU();N(t,e)}var iU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function oU(t){var e=iU();N(t,e)}var aU=ne('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function sU(t,e){le(e,!1);const n=rt(),r=()=>ve(po,"$commandHistoryStore",n),i=()=>ve(Iu,"$selectOnStore",n),a=R(),s=R();function c(){bv()}function u(){wv()}function _(){console.log("check")}function v(){va(Iu,!i())}M(()=>r(),()=>{x(a,r()._undoStack.length===0)}),M(()=>r(),()=>{x(s,r()._redoStack.length===0)}),Ee(),fe();var g=aU(),h=K(g),m=K(h);oU(m),Y(h);var C=P(h,2),I=K(C);tU(I),Y(C);var b=P(C,2);b.disabled=!0;var w=K(b);JF(w),Y(b);var L=P(b,2),D=K(L);rU(D),Y(L),Y(g),ee(()=>{h.disabled=p(a),C.disabled=p(s),S(L,"aria-checked",i()),Ot(L,"active",i())}),Me("click",h,c),Me("click",C,u),Me("click",b,_),Me("click",L,v),N(t,g),ce()}var lU=ne('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),cU=ne('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),uU=ne('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),dU=ne('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function _U(t,e){le(e,!1);const n=rt(),r=()=>ve(Wt,"$settingsStore",n),i=()=>ve(Ms,"$penColorStore",n),a=()=>ve(ep,"$InputHandlerStore",n),s=R(),c=R(),u=[];let _=F(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let h=R(!1);function m(H){return H?g:v}function C(H){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(H)}function I(H){const X=H.currentTarget;if(!X)return;const J=X.getAttribute("aria-checked");x(h,J!=="true")}M(()=>r(),()=>{x(s,r().penToolActive)}),M(()=>r(),()=>{x(c,r().letterToolActive)}),Ee(),fe();var b=dU(),w=K(b);{var L=H=>{var X=Ae(),J=ue(X);lt(J,1,()=>v,St,(re,Z)=>{var se=lU(),be=K(se);Vt(be);var me;Li(2),Y(se),ee(()=>{S(se,"data-value",p(Z)),Ot(se,"active",i()===p(Z)),me!==(me=p(Z))&&(be.value=(be.__value=p(Z))==null?"":p(Z))}),js(u,[],be,()=>(p(Z),i()),Ce=>va(Ms,Ce)),N(re,se)}),N(H,X)},D=H=>{var X=Ae(),J=ue(X);lt(J,1,()=>m(p(h)),St,(re,Z)=>{var se=cU(),be=K(se),me=K(be,!0);Y(be),Li(2),Y(se),ee(()=>{Hw(se,p(Z)),et(me,p(Z))}),Me("click",se,function(...Ce){var Te;(Te=a()&&a().padClick)==null||Te.apply(this,Ce)}),N(re,se)}),N(H,X)};ge(w,H=>{_()===d.PEN_TOOL&&p(s)?H(L):H(D,!1)})}var k=P(w,2);{var G=H=>{var X=uU();ee(()=>{S(X,"aria-checked",p(h)),Ot(X,"letter-checked",p(h)),Ot(X,"num-checked",!p(h))}),Me("click",X,I),N(H,X)};ge(k,H=>{p(c)&&C(_())&&H(G)})}var U=P(k,2);Y(b),ee(()=>{Ot(b,"digit",_()===d.DIGIT),Ot(b,"center",_()===d.CENTER_PM),Ot(b,"corner",_()===d.CORNER_PM),Ot(b,"color",_()===d.HIGHLIGHTS),Ot(b,"pen",_()===d.PEN_TOOL),Ot(U,"letter-tool",p(c))}),Me("click",U,function(...H){var X;(X=a()&&a().padClick)==null||X.apply(this,H)}),N(t,b),ce()}var fU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function gU(t){var e=fU();N(t,e)}var hU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function vU(t){var e=hU();N(t,e)}var pU=ne('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function qo(t,e){le(e,!1);const n=[];let r=F(e,"selectedTool",12),i=F(e,"value",8),a=F(e,"title",8,void 0);function s(){bu(i())}fe();var c=pU(),u=K(c);Vt(u);var _,v=P(u,2);ut(v,e,"default",{}),Y(c),ee(()=>{S(c,"title",a()),Ot(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),js(n,[],u,()=>(i(),r()),r),Me("change",u,s),N(t,c),ce()}var mU=ne('<span aria-hidden="true">1</span>'),CU=ne('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),EU=ne('<span aria-hidden="true" style="font-size: 50%">123</span>'),IU=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),bU=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),wU=ne('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function OU(t,e){le(e,!1);const n=rt(),r=()=>ve(Wt,"$settingsStore",n);let i=F(e,"selectedTool",12);fe();var a=wU(),s=K(a);qo(s,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=mU();N(h,C)},$$slots:{default:!0},$$legacy:!0});var c=P(s,2);qo(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=CU();N(h,C)},$$slots:{default:!0},$$legacy:!0});var u=P(c,2);qo(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=EU();N(h,C)},$$slots:{default:!0},$$legacy:!0});var _=P(u,2);qo(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var C=IU(),I=K(C);gU(I),Y(C),N(h,C)},$$slots:{default:!0},$$legacy:!0});var v=P(_,2);{var g=h=>{qo(h,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,C)=>{var I=bU(),b=K(I);vU(b),Y(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(v,h=>{r().penToolActive&&h(g)})}Y(a),N(t,a),ce()}var yU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function LU(t){var e=yU();N(t,e)}var AU=ne('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Na(t,e){let n=F(e,"title",8,void 0),r=F(e,"clickCb",8,void 0);var i=AU(),a=K(i),s=K(a);ut(s,e,"default",{}),Y(a),Y(i),ee(()=>S(i,"title",n())),Me("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,i)}var SU=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),xU=ne('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function NU(t,e){le(e,!1);let n=F(e,"showModal",12,!1);function r(){n(!1)}function i(){Lv(),$s(),n(!1)}fe(),Ur(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(a){n(a)},children:(a,s)=>{var c=xU(),u=P(K(c),2);cl(u,{children:(_,v)=>{var g=SU(),h=ue(g),m=P(h,2);Me("click",h,i),Me("click",m,r),N(_,g)},$$slots:{default:!0}}),Y(c),N(a,c)},$$slots:{default:!0},$$legacy:!0}),ce()}var DU=ne("<!> <!>",1);function TU(t){let e=R(!1);function n(){x(e,!0)}var r=DU(),i=ue(r);Na(i,{title:"Restart",clickCb:n,children:(s,c)=>{LU(s)},$$slots:{default:!0}});var a=P(i,2);NU(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var RU=ne('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Zo(t,e){let n=F(e,"title",8);var r=RU(),i=K(r),a=K(i,!0);Y(i);var s=P(i,2);ut(s,e,"default",{}),Y(r),ee(()=>et(a,n())),N(t,r)}var kU=ne('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function cn(t,e){let n=F(e,"description",8);var r=kU(),i=K(r),a=K(i,!0);Y(i);var s=P(i,2),c=K(s);ut(c,e,"default",{}),Y(s),Y(r),ee(()=>et(a,n())),N(t,r)}var GU=ne('<div class="shortcut svelte-1cgt5u5"> </div>');function en(t,e){let n=F(e,"shortcut",8);var r=GU(),i=K(r,!0);Y(r),ee(()=>et(i,n())),N(t,r)}var MU=ne("<p></p>"),$U=ne("<!> <!> <!> <!>",1),FU=ne("<!> or <!>",1),UU=ne("<!> <!> <!> <!> <!> <!> <!> <!>",1),HU=ne("<!> <!>",1),PU=ne('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function BU(t,e){let n=F(e,"showModal",12,!1);Ur(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var a=PU(),s=K(a);Zo(s,{title:"Setting Instructions",children:(g,h)=>{var m=MU();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",N(g,m)},$$slots:{default:!0}});var c=P(s,2);Zo(c,{title:"General",children:(g,h)=>{cn(g,{description:"Toggle Darkmode",children:(m,C)=>{en(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=P(c,2);Zo(u,{title:"Selection",children:(g,h)=>{var m=$U(),C=ue(m);cn(C,{description:"Select cells",children:(L,D)=>{en(L,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=P(C,2);cn(I,{description:"Add to current selection",children:(L,D)=>{en(L,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=P(I,2);cn(b,{description:"Remove from current selection",children:(L,D)=>{en(L,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=P(b,2);cn(w,{description:"Add or remove from current selection",children:(L,D)=>{en(L,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var _=P(u,2);Zo(_,{title:"Change Tool",children:(g,h)=>{var m=UU(),C=ue(m);cn(C,{description:"Cycle Tool",children:(U,H)=>{en(U,{shortcut:"Space"})},$$slots:{default:!0}});var I=P(C,2);cn(I,{description:"Change to Digit Tool",children:(U,H)=>{en(U,{shortcut:"Z"})},$$slots:{default:!0}});var b=P(I,2);cn(b,{description:"Change to Corner Pencilmark Tool",children:(U,H)=>{en(U,{shortcut:"X"})},$$slots:{default:!0}});var w=P(b,2);cn(w,{description:"Change to Center Pencilmark Tool",children:(U,H)=>{en(U,{shortcut:"C"})},$$slots:{default:!0}});var L=P(w,2);cn(L,{description:"Change to Highlights Tool",children:(U,H)=>{en(U,{shortcut:"V"})},$$slots:{default:!0}});var D=P(L,2);cn(D,{description:"Quickshift To Corner Pencilmark Tool",children:(U,H)=>{en(U,{shortcut:"Shift"})},$$slots:{default:!0}});var k=P(D,2);cn(k,{description:"Quickshift To Center Pencilmark Tool",children:(U,H)=>{en(U,{shortcut:"Ctrl"})},$$slots:{default:!0}});var G=P(k,2);cn(G,{description:"Quickshift To Highlights Tool",children:(U,H)=>{var X=FU(),J=ue(X);en(J,{shortcut:"Shift + Ctrl"});var re=P(J,2);en(re,{shortcut:"Alt"}),N(U,X)},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var v=P(_,2);Zo(v,{title:"Undo/Redo",children:(g,h)=>{var m=HU(),C=ue(m);cn(C,{description:"Undo",children:(b,w)=>{en(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=P(C,2);cn(I,{description:"Redo",children:(b,w)=>{en(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}}),Y(a),N(r,a)},$$slots:{default:!0},$$legacy:!0})}var WU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function zU(t){var e=WU();N(t,e)}var YU=ne("<!> <!>",1);function jU(t){let e=R(!1);function n(){x(e,!0)}var r=YU(),i=ue(r);Na(i,{title:"Info",clickCb:n,children:(s,c)=>{zU(s)},$$slots:{default:!0}});var a=P(i,2);BU(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var VU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function KU(t){var e=VU();N(t,e)}var XU=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function qU(t){var e=XU();N(t,e)}function ZU(t){let e=R(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function a(){n()?i():r(),x(e,!p(e))}Na(t,{title:"Fullscreen",clickCb:a,children:(s,c)=>{var u=Ae(),_=ue(u);{var v=h=>{qU(h)},g=h=>{KU(h)};ge(_,h=>{p(e)?h(v):h(g,!1)})}N(s,u)},$$slots:{default:!0}})}function op(t,e){le(e,!1);let n=F(e,"token",8),r=F(e,"renderers",8),i=F(e,"options",8);fe();var a=Ae(),s=ue(a);{var c=u=>{var _=Ae(),v=ue(_);vh(v,()=>r()[n().type],(g,h)=>{h(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,C)=>{var I=Ae(),b=ue(I);{var w=D=>{Ps(D,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},L=D=>{var k=rw();ee(()=>et(k,n().raw)),N(D,k)};ge(b,D=>{"tokens"in n()&&n().tokens?D(w):D(L,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,_)};ge(s,u=>{r()[n().type]&&u(c)})}N(t,a),ce()}function Ps(t,e){let n=F(e,"tokens",8),r=F(e,"renderers",8),i=F(e,"options",8);var a=Ae(),s=ue(a);{var c=u=>{var _=Ae(),v=ue(_);lt(v,1,n,St,(g,h)=>{op(g,{get token(){return p(h)},get renderers(){return r()},get options(){return i()}})}),N(u,_)};ge(s,u=>{n()&&u(c)})}N(t,a)}function ap(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function sp(t){return t.startsWith("/")||t.startsWith("#")}function QU(t,e){return e.slug(t).replace(/--+/g,"-")}function JU(t,e){le(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;let a=R();M(()=>(Q(n()),Q(r())),()=>{x(a,QU(n().text,r().slugger))}),Ee(),fe();var s=Ae(),c=ue(s);return Eh(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;ee(()=>v=Oh(u,v,{id:p(a)},void 0,u.namespaceURI===Ru,u.nodeName.includes("-")));var g=Ae(),h=ue(g);ut(h,e,"default",{}),N(_,g)}),N(t,s),qe(e,"renderers",i),ce({renderers:i})}var e6=ne("<blockquote><!></blockquote>");function t6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=e6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}function n6(t,e){le(e,!1);let n=F(e,"token",8),r=F(e,"options",8),i=F(e,"renderers",8),a=R();M(()=>Q(n()),()=>{x(a,n().ordered?"ol":"ul")}),Ee(),fe();var s=Ae(),c=ue(s);Eh(c,()=>p(a),!1,(u,_)=>{let v;ee(()=>v=Oh(u,v,{start:n().start||1},void 0,u.namespaceURI===Ru,u.nodeName.includes("-")));var g=Ae(),h=ue(g);lt(h,1,()=>n().items,St,(m,C)=>{var I=Xe(()=>({...p(C)}));op(m,{get token(){return p(I)},get options(){return r()},get renderers(){return i()}})}),N(_,g)}),N(t,s),ce()}var r6=ne("<li><!></li>");function i6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=r6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var o6=ne("<br>");function a6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=o6();return N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var s6=ne("<pre><code> </code></pre>");function l6(t,e){le(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=s6(),s=K(a),c=K(s,!0);return Y(s),Y(a),ee(()=>{Bw(s,`lang-${n().lang}`),et(c,n().text)}),N(t,a),qe(e,"options",r),qe(e,"renderers",i),ce({options:r,renderers:i})}var c6=ne("<code> </code>");function u6(t,e){le(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=c6(),s=K(a,!0);return ee(()=>et(s,n().raw.slice(1,n().raw.length-1))),Y(a),N(t,a),qe(e,"options",r),qe(e,"renderers",i),ce({options:r,renderers:i})}var d6=ne('<th scope="col"><!></th>'),_6=ne("<td><!></td>"),f6=ne("<tr></tr>"),g6=ne("<table><thead><tr></tr></thead><tbody></tbody></table>");function h6(t,e){le(e,!1);let n=F(e,"token",8),r=F(e,"options",8),i=F(e,"renderers",8);fe();var a=g6(),s=K(a),c=K(s);lt(c,5,()=>n().header,St,(_,v)=>{var g=d6(),h=K(g);Ps(h,{get tokens(){return p(v).tokens},get options(){return r()},get renderers(){return i()}}),Y(g),N(_,g)}),Y(c),Y(s);var u=P(s);lt(u,5,()=>n().rows,St,(_,v)=>{var g=f6();lt(g,5,()=>p(v),St,(h,m)=>{var C=_6(),I=K(C);Ps(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return i()}}),Y(C),N(h,C)}),Y(g),N(_,g)}),Y(u),Y(a),N(t,a),ce()}function v6(t,e){le(e,!1);let n=F(e,"token",8);const r=void 0,i=void 0;fe();var a=Ae(),s=ue(a);return Fw(s,()=>n().text),N(t,a),qe(e,"options",r),qe(e,"renderers",i),ce({options:r,renderers:i})}var p6=ne("<p><!></p>");function m6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=p6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var C6=ne("<a><!></a>");function E6(t,e){le(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;fe();var a=C6();ee(()=>S(a,"href",sp(n().href)?ap(r().baseUrl,n().href):n().href));var s=K(a);return ut(s,e,"default",{}),Y(a),ee(()=>S(a,"title",n().title)),N(t,a),qe(e,"renderers",i),ce({renderers:i})}function I6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=Ae(),s=ue(a);return ut(s,e,"default",{}),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var b6=ne("<dfn><!></dfn>");function w6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=b6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var O6=ne("<del><!></del>");function y6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=O6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var L6=ne("<em><!></em>");function A6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=L6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var S6=ne("<hr>");function x6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=S6();return N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var N6=ne("<strong><!></strong>");function D6(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=N6(),s=K(a);return ut(s,e,"default",{}),Y(a),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}var T6=ne('<img class="markdown-image svelte-z38cge">');function R6(t,e){le(e,!1);let n=F(e,"token",8),r=F(e,"options",8);const i=void 0;fe();var a=T6();return ee(()=>S(a,"src",sp(n().href)?ap(r().baseUrl,n().href):n().href)),ee(()=>{S(a,"title",n().title),S(a,"alt",n().text)}),N(t,a),qe(e,"renderers",i),ce({renderers:i})}function rh(t,e){le(e,!1);const n=void 0,r=void 0,i=void 0;var a=Ae(),s=ue(a);return ut(s,e,"default",{}),N(t,a),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),ce({token:n,options:r,renderers:i})}const k6=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,G6=Object.hasOwnProperty;class M6{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=$6(e,n===!0);const a=i;for(;G6.call(r.occurrences,i);)r.occurrences[a]++,i=a+"-"+r.occurrences[a];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function $6(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(k6,"").replace(/ /g,"-"))}function $d(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ui=$d();function lp(t){Ui=t}const cp=/[&<>"']/,F6=new RegExp(cp.source,"g"),up=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,U6=new RegExp(up.source,"g"),H6={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ih=t=>H6[t];function Rn(t,e){if(e){if(cp.test(t))return t.replace(F6,ih)}else if(up.test(t))return t.replace(U6,ih);return t}const P6=/(^|[^\[])\^/g;function Et(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(P6,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function oh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ua={exec:()=>null};function ah(t,e){const n=t.replace(/\|/g,(a,s,c)=>{let u=!1,_=s;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Qo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function B6(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function sh(t,e,n,r){const i=e.href,a=e.title?Rn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:a,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:a,text:Rn(s)}}function W6(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[s]=a;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class Bs{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Ui}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Qo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=W6(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Qo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Qo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Qo(n[0],`
`).split(`
`),i="",a="";const s=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const v=u.join(`
`),g=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${v}`:v,a=a?`${a}
${g}`:g;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,s,!0),this.lexer.state.top=h,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.blockquote(I);s[s.length-1]=b,i=i.substring(0,i.length-C.raw.length)+b.raw,a=a.substring(0,a.length-C.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,I=C.raw+`
`+r.join(`
`),b=this.list(I);s[s.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,a=a.substring(0,a.length-C.raw.length)+b.raw,r=I.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:a}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,a={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",v="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),h=e.split(`
`,1)[0],m=!g.trim(),C=0;if(this.options.pedantic?(C=2,v=g.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,v=g.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(h)&&(_+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),L=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),D=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),G=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const U=e.split(`
`,1)[0];let H;if(h=U,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),H=h):H=h.replace(/\t/g,"    "),D.test(h)||k.test(h)||G.test(h)||w.test(h)||L.test(h))break;if(H.search(/[^ ]/)>=C||!h.trim())v+=`
`+H.slice(C);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||D.test(g)||k.test(g)||L.test(g))break;v+=`
`+h}!m&&!h.trim()&&(m=!0),_+=U+`
`,e=e.substring(U.length+1),g=H.slice(C)}}a.loose||(c?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(v),I&&(b=I[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:_,task:!!I,checked:b,loose:!1,text:v,tokens:[]}),a.raw+=_}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let u=0;u<a.items.length;u++)if(this.lexer.state.top=!1,a.items[u].tokens=this.lexer.blockTokens(a.items[u].text,[]),!a.loose){const _=a.items[u].tokens.filter(g=>g.type==="space"),v=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));a.loose=v}if(a.loose)for(let u=0;u<a.items.length;u++)a.items[u].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=ah(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?s.align.push("right"):/^ *:-+: *$/.test(c)?s.align.push("center"):/^ *:-+ *$/.test(c)?s.align.push("left"):s.align.push(null);for(let c=0;c<r.length;c++)s.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:s.align[c]});for(const c of a)s.rows.push(ah(c,s.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[_]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Rn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=Qo(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=B6(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],a=s[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),sh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),a=n[i.toLowerCase()];if(!a){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return sh(r,a,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let c,u,_=s,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+s);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const h=[...i[0]][0].length,m=e.slice(0,s+i.index+h+u);if(Math.min(s,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),a=/^ /.test(r)&&/ $/.test(r);return i&&a&&(r=r.substring(1,r.length-1)),r=Rn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Rn(n[1]),i="mailto:"+r):(r=Rn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,a;if(n[2]==="@")i=Rn(n[0]),a="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=Rn(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Rn(n[0]),{type:"text",raw:n[0],text:r}}}}const z6=/^(?:[ \t]*(?:\n|$))+/,Y6=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,j6=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Da=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,V6=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,dp=/(?:[*+-]|\d{1,9}[.)])/,_p=Et(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,dp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Fd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,K6=/^[^\n]+/,Ud=/(?!\s*\])(?:\\.|[^\[\]\\])+/,X6=Et(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ud).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),q6=Et(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,dp).getRegex(),Il="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Hd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Z6=Et("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Hd).replace("tag",Il).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fp=Et(Fd).replace("hr",Da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Il).getRegex(),Q6=Et(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fp).getRegex(),Pd={blockquote:Q6,code:Y6,def:X6,fences:j6,heading:V6,hr:Da,html:Z6,lheading:_p,list:q6,newline:z6,paragraph:fp,table:ua,text:K6},lh=Et("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Il).getRegex(),J6={...Pd,table:lh,paragraph:Et(Fd).replace("hr",Da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",lh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Il).getRegex()},eH={...Pd,html:Et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Hd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ua,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Et(Fd).replace("hr",Da).replace("heading",` *#{1,6} *[^
]`).replace("lheading",_p).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,tH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,hp=/^( {2,}|\\)\n(?!\s*$)/,nH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ta="\\p{P}\\p{S}",rH=Et(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ta).getRegex(),iH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,oH=Et(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ta).getRegex(),aH=Et("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ta).getRegex(),sH=Et("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ta).getRegex(),lH=Et(/\\([punct])/,"gu").replace(/punct/g,Ta).getRegex(),cH=Et(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),uH=Et(Hd).replace("(?:-->|$)","-->").getRegex(),dH=Et("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",uH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ws=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_H=Et(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ws).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),vp=Et(/^!?\[(label)\]\[(ref)\]/).replace("label",Ws).replace("ref",Ud).getRegex(),pp=Et(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ud).getRegex(),fH=Et("reflink|nolink(?!\\()","g").replace("reflink",vp).replace("nolink",pp).getRegex(),Bd={_backpedal:ua,anyPunctuation:lH,autolink:cH,blockSkip:iH,br:hp,code:tH,del:ua,emStrongLDelim:oH,emStrongRDelimAst:aH,emStrongRDelimUnd:sH,escape:gp,link:_H,nolink:pp,punctuation:rH,reflink:vp,reflinkSearch:fH,tag:dH,text:nH,url:ua},gH={...Bd,link:Et(/^!?\[(label)\]\((.*?)\)/).replace("label",Ws).getRegex(),reflink:Et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ws).getRegex()},Lu={...Bd,escape:Et(gp).replace("])","~|])").getRegex(),url:Et(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},hH={...Lu,br:Et(hp).replace("{2,}","*").getRegex(),text:Et(Lu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ss={normal:Pd,gfm:J6,pedantic:eH},Jo={normal:Bd,gfm:Lu,breaks:hH,pedantic:gH};class Gn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ui,this.options.tokenizer=this.options.tokenizer||new Bs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ss.normal,inline:Jo.normal};this.options.pedantic?(n.block=Ss.pedantic,n.inline=Jo.pedantic):this.options.gfm&&(n.block=Ss.gfm,this.options.breaks?n.inline=Jo.breaks:n.inline=Jo.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ss,inline:Jo}}static lex(e,n){return new Gn(n).lex(e)}static lexInline(e,n){return new Gn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,a,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){a=n[n.length-1],r&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,a,s=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,c.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},g),typeof h=="number"&&h>=0&&(v=Math.min(v,h))}),v<1/0&&v>=0&&(a=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(a)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class zs{constructor(e){he(this,"options");he(this,"parser");this.options=e||Ui}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],a=e.replace(/\n$/,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),a=oh(e);if(a===null)return i;e=a;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=oh(e);if(i===null)return r;e=i;let a=`<img src="${e}" alt="${r}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Wd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Ui,this.options.renderer=this.options.renderer||new zs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Wd}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let c=s,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const s=a;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class da{constructor(e){he(this,"options");he(this,"block");this.options=e||Ui}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Gn.lex:Gn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}he(da,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class vH{constructor(...e){he(this,"defaults",$d());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Kn);he(this,"Renderer",zs);he(this,"TextRenderer",Wd);he(this,"Lexer",Gn);he(this,"Tokenizer",Bs);he(this,"Hooks",da);this.use(...e)}walkTokens(e,n){var i,a;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const c=s;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=s;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=s;(a=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const s=n.renderers[a.name];s?n.renderers[a.name]=function(...c){let u=a.renderer.apply(this,c);return u===!1&&(u=s.apply(this,c)),u}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[a.level];s?s.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),i.extensions=n),r.renderer){const a=this.defaults.renderer||new zs(this.defaults);for(const s in r.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const c=s,u=r.renderer[c],_=a[c];a[c]=(...v)=>{let g=u.apply(a,v);return g===!1&&(g=_.apply(a,v)),g||""}}i.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new Bs(this.defaults);for(const s in r.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const c=s,u=r.tokenizer[c],_=a[c];a[c]=(...v)=>{let g=u.apply(a,v);return g===!1&&(g=_.apply(a,v)),g}}i.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new da;for(const s in r.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const c=s,u=r.hooks[c],_=a[c];da.passThroughHooks.has(s)?a[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(a,v)).then(h=>_.call(a,h));const g=u.call(a,v);return _.call(a,g)}:a[c]=(...v)=>{let g=u.apply(a,v);return g===!1&&(g=_.apply(a,v)),g}}i.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(s.call(this,c)),a&&(u=u.concat(a.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Gn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const a={...i},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?Gn.lex:Gn.lexInline,_=s.hooks?s.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(v=>u(v,s)).then(v=>s.hooks?s.hooks.processAllTokens(v):v).then(v=>s.walkTokens?Promise.all(this.walkTokens(v,s.walkTokens)).then(()=>v):v).then(v=>_(v,s)).then(v=>s.hooks?s.hooks.postprocess(v):v).catch(c);try{s.hooks&&(r=s.hooks.preprocess(r));let v=u(r,s);s.hooks&&(v=s.hooks.processAllTokens(v)),s.walkTokens&&this.walkTokens(v,s.walkTokens);let g=_(v,s);return s.hooks&&(g=s.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Rn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Di=new vH;function Ct(t,e){return Di.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Di.setOptions(t),Ct.defaults=Di.defaults,lp(Ct.defaults),Ct};Ct.getDefaults=$d;Ct.defaults=Ui;Ct.use=function(...t){return Di.use(...t),Ct.defaults=Di.defaults,lp(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Di.walkTokens(t,e)};Ct.parseInline=Di.parseInline;Ct.Parser=Kn;Ct.parser=Kn.parse;Ct.Renderer=zs;Ct.TextRenderer=Wd;Ct.Lexer=Gn;Ct.lexer=Gn.lex;Ct.Tokenizer=Bs;Ct.Hooks=da;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Kn.parse;Gn.lex;function pH(t){return new Gn().lex(t)}const mH=()=>({heading:JU,blockquote:t6,list:n6,list_item:i6,br:a6,code:l6,codespan:u6,table:h6,html:v6,paragraph:m6,link:E6,text:I6,def:w6,del:y6,em:A6,hr:x6,strong:D6,image:R6,space:rh,escape:rh}),CH=()=>({baseUrl:"/",slugger:new M6});function EH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},mh(()=>{console.warn=t})}function mp(t,e){le(e,!1),EH();let n=F(e,"source",8),r=F(e,"options",24,()=>({})),i=F(e,"renderers",24,()=>({})),a=R(),s=R(),c=R();M(()=>(Q(n()),Q(i()),Q(r())),()=>{x(a,pH(n())),x(s,{...mH(),...i()}),x(c,{...CH(),...r()})}),Ee(),fe(),Ps(t,{get tokens(){return p(a)},get renderers(){return p(s)},get options(){return p(c)}}),ce()}var IH=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),bH=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),wH=ne('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function OH(t,e){le(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n),i=R();let a=F(e,"showModal",12,!1);function s(u){return u?ks(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}M(()=>r(),()=>{x(i,r())}),Ee(),fe(),Ur(t,{title:"Rules",get showModal(){return a()},set showModal(u){a(u)},children:(u,_)=>{var v=wH(),g=K(v),h=K(g,!0);Y(g);var m=P(g,2),C=K(m);ee(()=>et(C,`by ${s(p(i).authors)??""}`)),Y(m);var I=P(m,2),b=K(I),w=Xe(()=>c(p(i).ruleset));mp(b,{get source(){return p(w)}}),Y(I);var L=P(I,2);{var D=U=>{var H=IH(),X=P(ue(H),2);ee(()=>S(X,"href",p(i).ctcUrl)),N(U,H)};ge(L,U=>{var H,X;(X=(H=p(i))==null?void 0:H.ctcUrl)!=null&&X.length&&U(D)})}var k=P(L,2);{var G=U=>{var H=bH(),X=P(ue(H),2);ee(()=>S(X,"href",p(i).ctcYoutubeUrl)),N(U,H)};ge(k,U=>{var H,X;(X=(H=p(i))==null?void 0:H.ctcYoutubeUrl)!=null&&X.length&&U(G)})}Y(v),ee(()=>{var U;return et(h,((U=p(i))==null?void 0:U.title)||"Puzzle")}),N(u,v)},$$slots:{default:!0},$$legacy:!0}),ce()}var yH=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function LH(t){var e=yH();N(t,e)}var AH=ne("<!> <!>",1);function SH(t){let e=R(!1);function n(){x(e,!0)}var r=AH(),i=ue(r);Na(i,{title:"Rules",clickCb:n,children:(s,c)=>{LH(s)},$$slots:{default:!0}});var a=P(i,2);OH(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var xH=ne("<!> <!>",1);function NH(t){let e=R(!1);function n(){x(e,!0)}var r=xH(),i=ue(r);Na(i,{title:"Settings",clickCb:n,children:(s,c)=>{Pv(s)},$$slots:{default:!0}});var a=P(i,2);Bv(a,{get showModal(){return p(e)},set showModal(s){x(e,s)},$$legacy:!0}),N(t,r)}var DH=ne('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function TH(t){var e=DH(),n=K(e);NH(n);var r=P(n,2);SH(r);var i=P(r,2);ZU(i);var a=P(i,2);jU(a);var s=P(a,2);TU(s),Y(e),N(t,e)}var RH=ne('<div class="entry-panel-wrapper svelte-1dr0lb4"><div class="puzzle-info svelte-1dr0lb4"><div class="puzzle-header svelte-1dr0lb4"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1dr0lb4"><!></div></div>  <div class="entry-panel svelte-1dr0lb4"><!> <div class="entry-subpanel1 svelte-1dr0lb4"><!> <!></div> <!></div></div>');function kH(t,e){le(e,!1);const n=rt(),r=()=>ve(co,"$svgRefStore",n),i=()=>ve(Dr,"$puzzleMetaStore",n),a=()=>ve(Xt,"$toolStore",n),s=R(),c=R();function u(){r().focus()}function _(Z){return Z?ks(Z," & ",", "):"Anonymous"}function v(Z){return Z&&Z.length?Z:"Normal sudoku rules apply."}M(()=>i(),()=>{x(s,i().title??"Sudoku")}),M(()=>i(),()=>{x(c,_(i().authors))}),Ee(),fe();var g=RH(),h=K(g),m=K(h),C=K(m),I=K(C,!0);Y(C);var b=P(C,2),w=K(b);Y(b),Y(m);var L=P(m,2),D=K(L),k=Xe(()=>v(i().ruleset));mp(D,{get source(){return p(k)}}),Y(L),Y(h);var G=P(h,2),U=K(G);TH(U);var H=P(U,2),X=K(H);_U(X,{get selectedTool(){return a()}});var J=P(X,2);OU(J,{get selectedTool(){return ph(),a()},set selectedTool(Z){va(Xt,Z)},$$legacy:!0}),Y(H);var re=P(H,2);sU(re,{}),Y(G),Y(g),ee(()=>{et(I,p(s)),et(w,`by ${p(c)??""}`)}),Me("click",G,Xn(()=>{u()})),N(t,g),ce()}var GH=ne('<div class="App svelte-aer8a2"><header></header> <main class="svelte-aer8a2"><div class="game-wrapper svelte-aer8a2"><div class="game svelte-aer8a2"><!> <!> <!></div></div></main> <footer class="svelte-aer8a2"><div class="footer-text svelte-aer8a2"></div></footer></div>');function YH(t,e){le(e,!1);const n=rt(),r=()=>ve(Kw,"$darkModeStore",n),i=()=>ve(Zs,"$gameModeStore",n),a=R(),s=R();mh(async()=>{const I=window.location.href;try{await iO({workerURL:`${I}minizinc-worker.js`,wasmURL:`${I}minizinc.wasm`,dataURL:`${I}minizinc.data`})}catch(b){const w="Failed to initialize MiniZinc: "+b.message;console.log(w)}}),M(()=>r(),()=>{x(a,r()?"dark":"light")}),M(()=>i(),()=>{x(s,i())}),Ee(),fe();var c=GH(),u=P(K(c),2),_=K(u),v=K(_),g=K(v);{var h=I=>{T8(I)};ge(g,I=>{p(s)===go.SETTING&&I(h)})}var m=P(g,2);ZF(m,{});var C=P(m,2);kH(C,{}),Y(v),Y(_),Y(u),Li(2),Y(c),ee(()=>S(c,"data-theme",p(a))),N(t,c),ce()}export{YH as component,zH as universal};
