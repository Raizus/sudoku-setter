var nw=Object.defineProperty;var rw=(t,e,n)=>e in t?nw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>rw(t,typeof e!="symbol"?e+"":e,n);import{b as lu,e as iw,a as T,n as de,t as ne,c as Ae,d as ow}from"../chunks/disclose-version.c9nfQR10.js";import{i as fe}from"../chunks/legacy.BeICcgj8.js";import{A as fh,b as Su,h as bt,G as ao,F as lo,O as gh,Y as hh,ad as sw,ae as Og,U as is,c as ur,au as Na,af as xu,a as ja,ag as vh,C as cu,av as yg,aw,H as lw,ax as cw,d as Nu,B as Tu,V as uw,L as dw,I as uu,ay as Du,az as Ru,a1 as _w,a7 as Lg,aA as ph,aB as fw,aC as gw,R as mh,W as hw,S as vw,E as pw,aD as ku,aE as mw,ac as Ew,aF as Cw,aG as Iw,ai as Gu,M as Eh,aH as bw,j as ww,a9 as Ow,v as K,w as Y,p as ae,x as F,t as ee,e as le,l as p,as as Xe,aI as G,$ as x,aJ as Ie,aK as D,m as Z,f as ue,aL as yw,aM as Si,aN as Yc,o as Ag}from"../chunks/runtime.3UijFPFW.js";import{d as Lw,p as $,s as rt,i as ge,e as ps,f as ve,b as xi,c as Ch,m as Ih}from"../chunks/props.CJazo4uA.js";import{i as Aw,a as Sw,b as xw,c as Nw,d as Tw,e as Dw,n as Rw,f as kw,l as Mu,g as Me,s as et,r as Gw}from"../chunks/render.7_-GRy3G.js";import{d as ki,w as Ht,g as ot}from"../chunks/index.HRmy8yV3.js";import{a as Mw,o as bh}from"../chunks/index-client.CTQVjhPh.js";function At(t,e){return e}function Uw(t,e,n,r){for(var i=[],s=e.length,a=0;a<s;a++)aw(e[a].e,i,!0);var c=s>0&&i.length===0&&n!==null;if(c){var u=n.parentNode;lw(u),u.append(n),r.clear(),ti(t,e[0].prev,e[s-1].next)}cw(i,()=>{for(var _=0;_<s;_++){var v=e[_];c||(r.delete(v.k),ti(t,v.prev,v.next)),Nu(v.e,!c)}})}function lt(t,e,n,r,i,s=null){var a=t,c={flags:e,items:new Map,first:null},u=(e&ph)!==0;if(u){var _=t;a=bt?ao(Tu(_)):_.appendChild(fh())}bt&&lo();var v=null,g=!1;Su(()=>{var h=n(),m=gh(h)?h:h==null?[]:hh(h),E=m.length;if(g&&E===0)return;g=E===0;let I=!1;if(bt){var b=a.data===sw;b!==(E===0)&&(a=Og(),ao(a),is(!1),I=!0)}if(bt){for(var w=null,L,R=0;R<E;R++){if(ur.nodeType===8&&ur.data===uw){a=ur,I=!0,is(!1);break}var k=m[R],U=r(k,R);L=wh(ur,c,w,null,k,U,R,i,e),c.items.set(U,L),w=L}E>0&&ao(Og())}if(!bt){var P=dw;$w(m,c,a,i,e,(P.f&Na)!==0,r)}s!==null&&(E===0?v?xu(v):v=ja(()=>s(a)):v!==null&&vh(v,()=>{v=null})),I&&is(!0),n()}),bt&&(a=ur)}function $w(t,e,n,r,i,s,a,c){var Ce,De,st,Se;var u=(i&fw)!==0,_=(i&(Du|Ru))!==0,v=t.length,g=e.items,h=e.first,m=h,E,I=null,b,w=[],L=[],R,k,U,P;if(u)for(P=0;P<v;P+=1)R=t[P],k=a(R,P),U=g.get(k),U!==void 0&&((Ce=U.a)==null||Ce.measure(),(b??(b=new Set)).add(U));for(P=0;P<v;P+=1){if(R=t[P],k=a(R,P),U=g.get(k),U===void 0){var W=m?m.e.nodes_start:n;I=wh(W,e,I,I===null?e.first:I.next,R,k,P,r,i),g.set(k,I),w=[],L=[],m=I.next;continue}if(_&&Fw(U,R,P,i),U.e.f&Na&&(xu(U.e),u&&((De=U.a)==null||De.unfix(),(b??(b=new Set)).delete(U))),U!==m){if(E!==void 0&&E.has(U)){if(w.length<L.length){var X=L[0],J;I=X.prev;var ce=w[0],Q=w[w.length-1];for(J=0;J<w.length;J+=1)Sg(w[J],X,n);for(J=0;J<L.length;J+=1)E.delete(L[J]);ti(e,ce.prev,Q.next),ti(e,I,ce),ti(e,Q,X),m=X,I=Q,P-=1,w=[],L=[]}else E.delete(U),Sg(U,m,n),ti(e,U.prev,U.next),ti(e,U,I===null?e.first:I.next),ti(e,I,U),I=U;continue}for(w=[],L=[];m!==null&&m.k!==k;)(s||!(m.e.f&Na))&&(E??(E=new Set)).add(m),L.push(m),m=m.next;if(m===null)continue;U=m}w.push(U),I=U,m=U.next}if(m!==null||E!==void 0){for(var ie=E===void 0?[]:hh(E);m!==null;)(s||!(m.e.f&Na))&&ie.push(m),m=m.next;var pe=ie.length;if(pe>0){var me=i&ph&&v===0?n:null;if(u){for(P=0;P<pe;P+=1)(st=ie[P].a)==null||st.measure();for(P=0;P<pe;P+=1)(Se=ie[P].a)==null||Se.fix()}Uw(e,ie,me,g)}}u&&uu(()=>{var we;if(b!==void 0)for(U of b)(we=U.a)==null||we.apply()}),cu.first=e.first&&e.first.e,cu.last=I&&I.e}function Fw(t,e,n,r){r&Du&&yg(t.v,e),r&Ru?yg(t.i,n):t.i=n}function wh(t,e,n,r,i,s,a,c,u,_){var v=(u&Du)!==0,g=(u&gw)===0,h=v?g?_w(i):Lg(i):i,m=u&Ru?Lg(a):a,E={i:m,v:h,k:s,a:null,e:null,prev:n,next:r};try{return E.e=ja(()=>c(t,h,m),bt),E.e.prev=n&&n.e,E.e.next=r&&r.e,n===null?e.first=E:(n.next=E,n.e.next=E.e),r!==null&&(r.prev=E,r.e.prev=E.e),E}finally{}}function Sg(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,i=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==r;){var a=mh(s);i.before(s),s=a}}function ti(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Hw(t,e,n,r,i){var s=t,a="",c;Su(()=>{if(a===(a=e()??"")){bt&&lo();return}c!==void 0&&(Nu(c),c=void 0),a!==""&&(c=ja(()=>{if(bt){ur.data;for(var u=lo(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=mh(u);if(u===null)throw hw(),vw;lu(ur,_),s=ao(u);return}var v=a+"",g=iw(v);lu(Tu(g),g.lastChild),s.before(g)}))})}function ut(t,e,n,r,i){var c;bt&&lo();var s=(c=e.$$slots)==null?void 0:c[n],a=!1;s===!0&&(s=e[n==="default"?"children":n],a=!0),s===void 0||s(t,a?()=>r:r)}function Oh(t,e,n,r,i,s){let a=bt;bt&&lo();var c,u,_=null;bt&&ur.nodeType===1&&(_=ur,lo());var v=bt?ur:t,g;Su(()=>{const h=e()||null;var m=h==="svg"?ku:null;h!==c&&(g&&(h===null?vh(g,()=>{g=null,u=null}):h===u?xu(g):Nu(g)),h&&h!==u&&(g=ja(()=>{if(_=bt?_:m?document.createElementNS(m,h):document.createElement(h),lu(_,_),r){bt&&Aw(h)&&_.append(document.createComment(""));var E=bt?Tu(_):_.appendChild(fh());bt&&(E===null?is(!1):ao(E)),r(_,E)}cu.nodes_end=_,v.before(_)})),c=h,c&&(u=c))},pw),a&&(is(!0),ao(v))}function yh(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=yh(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Pw(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=yh(t))&&(r&&(r+=" "),r+=e);return r}function Lh(t){return typeof t=="object"?Pw(t):t??""}function Kt(t){if(bt){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;S(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var i=t.checked;S(t,"checked",null),t.checked=i}}};t.__on_r=n,Iw(n),Sw()}}function Bw(t,e){var n=t.__attributes??(t.__attributes={});n.value===(n.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e)}function Ah(t,e){var n=t.__attributes??(t.__attributes={});n.checked!==(n.checked=e??void 0)&&(t.checked=e)}function Ww(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function S(t,e,n,r){var i=t.__attributes??(t.__attributes={});bt&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[mw]=n),n==null?t.removeAttribute(e):typeof n!="string"&&xh(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Sh(t,e,n,r,i=!1,s=!1,a=!1){var c=e||{},u=t.tagName==="OPTION";for(var _ in e)_ in n||(n[_]=null);n.class&&(n.class=Lh(n.class));var v=xh(t),g=t.__attributes??(t.__attributes={});for(const w in n){let L=n[w];if(u&&w==="value"&&L==null){t.value=t.__value="",c[w]=L;continue}var h=c[w];if(L!==h){c[w]=L;var m=w[0]+w[1];if(m!=="$$"){if(m==="on"){const R={},k="$$"+w;let U=w.slice(2);var E=kw(U);if(xw(U)&&(U=U.slice(0,-7),R.capture=!0),!E&&h){if(L!=null)continue;t.removeEventListener(U,c[k],R),c[k]=null}if(L!=null)if(E)t[`__${U}`]=L,Tw([U]);else{let P=function(W){c[w].call(this,W)};c[k]=Nw(U,t,P,R)}else E&&(t[`__${U}`]=void 0)}else if(w==="style"&&L!=null)t.style.cssText=L+"";else if(w==="autofocus")Dw(t,!!L);else if(w==="__value"||w==="value"&&L!=null)t.value=t[w]=t.__value=L;else if(w==="selected"&&u)Ww(t,L);else{var I=w;i||(I=Rw(I));var b=I==="defaultValue"||I==="defaultChecked";if(L==null&&!s&&!b)if(g[w]=null,I==="value"||I==="checked"){let R=t;if(I==="value"){let k=R.defaultValue;R.removeAttribute(I),R.defaultValue=k}else{let k=R.defaultChecked;R.removeAttribute(I),R.defaultChecked=k}}else t.removeAttribute(w);else b||v.includes(I)&&(s||typeof L!="string")?t[I]=L:typeof L!="function"&&(bt&&(I==="src"||I==="href"||I==="srcset")||S(t,I,L))}w==="style"&&"__styles"in t&&(t.__styles={})}}}return c}var xg=new Map;function xh(t){var e=xg.get(t.nodeName);if(e)return e;xg.set(t.nodeName,e=[]);for(var n,r=t,i=Element.prototype;i!==r;){n=Cw(r);for(var s in n)n[s].set&&e.push(s);r=Ew(r)}return e}function ii(t,e,n){var r=t.__className,i=Nh(e);bt&&t.getAttribute("class")===i?t.__className=i:(r!==i||bt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function zw(t,e,n){var r=t.__className,i=Nh(e);bt&&t.className===i?t.__className=i:(r!==i||bt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Nh(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Kn(t,e,n=e){var r=bw();Mu(t,"input",i=>{var s=i?t.defaultValue:t.value;if(s=Vc(t)?Kc(s):s,n(s),r&&s!==(s=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=s??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(bt&&t.defaultValue!==t.value||ww(e)==null&&t.value)&&n(Vc(t)?Kc(t.value):t.value),Gu(()=>{var i=e();Vc(t)&&i===Kc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const jc=new Set;function Va(t,e,n,r,i=r){var s=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),Mu(n,"change",()=>{var _=n.__value;s&&(_=Ng(a,_,n.checked)),i(_)},()=>i(s?[]:null)),Gu(()=>{var _=r();if(bt&&n.defaultChecked!==n.checked){c=!0;return}s?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Lw(n.__value,_)}),Eh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),jc.has(a)||(jc.add(a),uu(()=>{a.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),jc.delete(a)})),uu(()=>{if(c){var _;if(s)_=Ng(a,_,n.checked);else{var v=a.find(g=>g.checked);_=v==null?void 0:v.__value}i(_)}})}function Ng(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Vc(t){var e=t.type;return e==="number"||e==="range"}function Kc(t){return t===""?null:+t}function Yw(t,e,n=e){Mu(t,"change",()=>{n(t.files)}),Gu(()=>{t.files=e()})}function qe(t,e,n){var r=Ow(t,e);r&&r.set&&(t[e]=n,Eh(()=>{t[e]=null}))}function jw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function qn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Xc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Vw(t,e){var s;var n=(s=t.$$events)==null?void 0:s[e.type],r=gh(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}const Kw=!0,aP=Object.freeze(Object.defineProperty({__proto__:null,prerender:Kw},Symbol.toStringTag,{value:"Module"}));function Xw(){return{darkMode:!0,penToolActive:!0,letterToolActive:!1,highlightCellsSeenBySelection:!0,checkConflicts:!0,highlightPencilmarkConflicts:!0,hideFog:!1,showSolution:!1}}const zt=Ht(Xw()),qw=ki(zt,t=>t.darkMode);function Zw(t){zt.update(e=>({...e,darkMode:t}))}function Qw(){zt.update(t=>({...t,darkMode:!t.darkMode}))}function Jw(t){zt.update(e=>({...e,penToolActive:t}))}function eO(t){zt.update(e=>({...e,letterToolActive:t}))}function tO(t){zt.update(e=>({...e,highlightCellsSeenBySelection:t}))}function nO(t){zt.update(e=>({...e,checkConflicts:t}))}function rO(t){zt.update(e=>({...e,highlightPencilmarkConflicts:t}))}function iO(t){zt.update(e=>({...e,hideFog:t}))}function oO(t){zt.update(e=>({...e,showSolution:t}))}const Tg=encodeURIComponent("4.3.5");let cr={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Li=[];let qc;function ts(){if(!qc){const e=`importScripts(${JSON.stringify(cr.workerURL)});`;qc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(qc);t.postMessage({wasmURL:cr.wasmURL?cr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Tg}`,cr.workerURL).toString(),dataURL:cr.dataURL?cr.dataURL.toString():new URL(`./minizinc.data?version=${Tg}`,cr.workerURL).toString()}),Li.push({worker:t,runCount:0})}function Th(){for(;Li.length<cr.numWorkers;)ts()}async function sO(t){if(cr={...cr,...t},Li.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Th(),await Promise.race(Li.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Uu{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Uu;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Th();const i=[];let s=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;s={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Li.pop();return a.postMessage({jsonStream:!0,files:s,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:s,runCount:a}=this._run(["--model-check-only"],i.options),c=[];s.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Li.push({worker:s,runCount:a}):(s.terminate(),ts()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:s,runCount:a}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;s.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Li.push({worker:s,runCount:a}):(s.terminate(),ts()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const s=["-c","--fzn",i],{worker:a}=this._run(s,n.options,[i]);ts();let c={},u=!1,_=null;return a.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const h=m=>{if(m.code===0)v(m.outputFiles[i]);else{const E=_?{message:_.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);ts();let s=null,a={},c=!1,u=null,_={},v="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const h of a[g.data.type])h(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":s||(s=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,h){a[g]?a[g].add(h):a[g]=new Set([h])},off(g,h){a[g]&&a[g].delete(h)},then(g,h){const m=E=>{if(E.code===0)g({status:v,solution:u,statistics:_});else{const I=s?{message:s.message,...E}:E;if(!h)throw I;h(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var ho=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(ho||{}),$u=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))($u||{}),Dh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Dh||{}),Rh=(t=>(t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(Rh||{}),kh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t))(kh||{}),Gh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(Gh||{}),Ka=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t))(Ka||{}),Fu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Fu||{}),Hu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t))(Hu||{}),Pu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t))(Pu||{}),Bu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Bu||{}),Wu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Wu||{}),zu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t))(zu||{}),Yu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Yu||{}),ju=(t=>(t.CLONE_REGION="Clone Region",t))(ju||{}),Vu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Vu||{}),Ku=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Ku||{}),Xu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Xu||{}),qu=(t=>(t.MAZE_WALL="Maze Wall",t))(qu||{}),Zu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Zu||{}),Qu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Qu||{}),Mh=(t=>(t.PEN_TOOL="Pen Tool",t))(Mh||{});const Ju={...Dh,...Rh,...kh,...Gh},Uh={...Ka,...Fu,...Hu,...Pu,...Bu,...Wu,...zu,...Yu,...ju,...Vu,...Ku,...Xu,...qu,...Zu},d={...$u,...Ju,...Uh,...Qu,...Mh};var N=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(N||{});function aO(t){return Object.values(Ju).includes(t)}function lO(t){return Object.values(Uh).includes(t)}function ed(t){return Object.values(Fu).includes(t)||t===d.COSMETIC_CELL_ARROW}function td(t){return Object.values(Hu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function cO(t){return Object.values(Ka).includes(t)||ed(t)||td(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function nd(t){return Object.values(Pu).includes(t)||t===d.COSMETIC_EDGE}function $h(t){return Object.values(Bu).includes(t)||t===d.COSMETIC_CORNER}function rd(t){return Object.values(Wu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function id(t){return Object.values(zu).includes(t)||t===d.COSMETIC_ARROW}function od(t){return Object.values(Yu).includes(t)||t===d.COSMETIC_CAGE}function Fh(t){return Object.values(Xu).includes(t)}function Hh(t){return Object.values(qu).includes(t)}function Ph(t){return Object.values(ju).includes(t)}function fs(t){const e=Object.values(Vu),n=Object.values(Ku);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function uO(t){return Object.values(Zu).includes(t)}function dO(t){return Object.values(Qu).includes(t)}function sd(t){return Object.values($u).includes(t)}const _O=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],fO=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint"];function Bh(t){for(const e of Object.values(d))if(e===t)return e}function Wh(t,e){return Object.values(e).includes(t)}class co extends Map{constructor(){super()}setConstraint(e,n){return aO(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new co;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new co;if(!e)return n;for(const[r,i]of Object.entries(e)){const s=Bh(r);s!==void 0&&Wh(s,Ju)&&typeof i=="boolean"&&i&&n.setConstraint(s,i)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function zh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function ze(t,e){return t.r===e.r&&t.c===e.c}function Yh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function gO(t,e){return{r:t.r*e,c:t.c*e}}function jh(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function vo(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!ze(t,e)}function hO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ra(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Xt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Xa(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function vO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ad(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function pO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const mO=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function ld(t){t=t%8;const e=mO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const EO=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function qa(t){const e=EO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Vh(t,e){const n=qa(e);return Yh(t,n)}function cd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Kh(t,e,n=!1){const r=t.some(s=>ze(s,e)),i=n?t.some(s=>vo(s,e)):t.some(s=>hO(s,e));if(!r&&i){const s=[...t,e];return Ra(s),s}return t}function Oa(t){return`R${t.r+1}C${t.c+1}`}function ud(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ns={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var CO=ns.exports,Dg;function IO(){return Dg||(Dg=1,function(t,e){(function(){var n,r="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",g=1,h=2,m=4,E=1,I=2,b=1,w=2,L=4,R=8,k=16,U=32,P=64,W=128,X=256,J=512,ce=30,Q="...",ie=800,pe=16,me=1,Ce=2,De=3,st=1/0,Se=9007199254740991,we=17976931348623157e292,vt=NaN,ct=4294967295,Ln=ct-1,$n=ct>>>1,Pr=[["ary",W],["bind",b],["bindKey",w],["curry",R],["curryRight",k],["flip",J],["partial",U],["partialRight",P],["rearg",X]],Qt="[object Arguments]",mr="[object Array]",fi="[object AsyncFunction]",or="[object Boolean]",Fn="[object Date]",Pi="[object DOMException]",Br="[object Error]",Rt="[object Function]",Ne="[object GeneratorFunction]",Ee="[object Map]",Re="[object Number]",xe="[object Null]",yt="[object Object]",ks="[object Promise]",wl="[object Proxy]",gi="[object RegExp]",er="[object Set]",Do="[object String]",Gs="[object Symbol]",Ip="[object Undefined]",Ro="[object WeakMap]",bp="[object WeakSet]",ko="[object ArrayBuffer]",Bi="[object DataView]",Ol="[object Float32Array]",yl="[object Float64Array]",Ll="[object Int8Array]",Al="[object Int16Array]",Sl="[object Int32Array]",xl="[object Uint8Array]",Nl="[object Uint8ClampedArray]",Tl="[object Uint16Array]",Dl="[object Uint32Array]",wp=/\b__p \+= '';/g,Op=/\b(__p \+=) '' \+/g,yp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Kd=/&(?:amp|lt|gt|quot|#39);/g,Xd=/[&<>"']/g,Lp=RegExp(Kd.source),Ap=RegExp(Xd.source),Sp=/<%-([\s\S]+?)%>/g,xp=/<%([\s\S]+?)%>/g,qd=/<%=([\s\S]+?)%>/g,Np=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tp=/^\w*$/,Dp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rl=/[\\^$.*+?()[\]{}|]/g,Rp=RegExp(Rl.source),kl=/^\s+/,kp=/\s/,Gp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Mp=/\{\n\/\* \[wrapped with (.+)\] \*/,Up=/,? & /,$p=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fp=/[()=,{}\[\]\/\s]/,Hp=/\\(\\)?/g,Pp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zd=/\w*$/,Bp=/^[-+]0x[0-9a-f]+$/i,Wp=/^0b[01]+$/i,zp=/^\[object .+?Constructor\]$/,Yp=/^0o[0-7]+$/i,jp=/^(?:0|[1-9]\d*)$/,Vp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ms=/($^)/,Kp=/['\n\r\u2028\u2029\\]/g,Us="\\ud800-\\udfff",Xp="\\u0300-\\u036f",qp="\\ufe20-\\ufe2f",Zp="\\u20d0-\\u20ff",Qd=Xp+qp+Zp,Jd="\\u2700-\\u27bf",e_="a-z\\xdf-\\xf6\\xf8-\\xff",Qp="\\xac\\xb1\\xd7\\xf7",Jp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",em="\\u2000-\\u206f",tm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",t_="A-Z\\xc0-\\xd6\\xd8-\\xde",n_="\\ufe0e\\ufe0f",r_=Qp+Jp+em+tm,Gl="['’]",nm="["+Us+"]",i_="["+r_+"]",$s="["+Qd+"]",o_="\\d+",rm="["+Jd+"]",s_="["+e_+"]",a_="[^"+Us+r_+o_+Jd+e_+t_+"]",Ml="\\ud83c[\\udffb-\\udfff]",im="(?:"+$s+"|"+Ml+")",l_="[^"+Us+"]",Ul="(?:\\ud83c[\\udde6-\\uddff]){2}",$l="[\\ud800-\\udbff][\\udc00-\\udfff]",Wi="["+t_+"]",c_="\\u200d",u_="(?:"+s_+"|"+a_+")",om="(?:"+Wi+"|"+a_+")",d_="(?:"+Gl+"(?:d|ll|m|re|s|t|ve))?",__="(?:"+Gl+"(?:D|LL|M|RE|S|T|VE))?",f_=im+"?",g_="["+n_+"]?",sm="(?:"+c_+"(?:"+[l_,Ul,$l].join("|")+")"+g_+f_+")*",am="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",lm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",h_=g_+f_+sm,cm="(?:"+[rm,Ul,$l].join("|")+")"+h_,um="(?:"+[l_+$s+"?",$s,Ul,$l,nm].join("|")+")",dm=RegExp(Gl,"g"),_m=RegExp($s,"g"),Fl=RegExp(Ml+"(?="+Ml+")|"+um+h_,"g"),fm=RegExp([Wi+"?"+s_+"+"+d_+"(?="+[i_,Wi,"$"].join("|")+")",om+"+"+__+"(?="+[i_,Wi+u_,"$"].join("|")+")",Wi+"?"+u_+"+"+d_,Wi+"+"+__,lm,am,o_,cm].join("|"),"g"),gm=RegExp("["+c_+Us+Qd+n_+"]"),hm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,vm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],pm=-1,Lt={};Lt[Ol]=Lt[yl]=Lt[Ll]=Lt[Al]=Lt[Sl]=Lt[xl]=Lt[Nl]=Lt[Tl]=Lt[Dl]=!0,Lt[Qt]=Lt[mr]=Lt[ko]=Lt[or]=Lt[Bi]=Lt[Fn]=Lt[Br]=Lt[Rt]=Lt[Ee]=Lt[Re]=Lt[yt]=Lt[gi]=Lt[er]=Lt[Do]=Lt[Ro]=!1;var wt={};wt[Qt]=wt[mr]=wt[ko]=wt[Bi]=wt[or]=wt[Fn]=wt[Ol]=wt[yl]=wt[Ll]=wt[Al]=wt[Sl]=wt[Ee]=wt[Re]=wt[yt]=wt[gi]=wt[er]=wt[Do]=wt[Gs]=wt[xl]=wt[Nl]=wt[Tl]=wt[Dl]=!0,wt[Br]=wt[Rt]=wt[Ro]=!1;var mm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Em={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Im={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},bm=parseFloat,wm=parseInt,v_=typeof ya=="object"&&ya&&ya.Object===Object&&ya,Om=typeof self=="object"&&self&&self.Object===Object&&self,jt=v_||Om||Function("return this")(),Hl=e&&!e.nodeType&&e,hi=Hl&&!0&&t&&!t.nodeType&&t,p_=hi&&hi.exports===Hl,Pl=p_&&v_.process,Hn=function(){try{var j=hi&&hi.require&&hi.require("util").types;return j||Pl&&Pl.binding&&Pl.binding("util")}catch{}}(),m_=Hn&&Hn.isArrayBuffer,E_=Hn&&Hn.isDate,C_=Hn&&Hn.isMap,I_=Hn&&Hn.isRegExp,b_=Hn&&Hn.isSet,w_=Hn&&Hn.isTypedArray;function An(j,te,q){switch(q.length){case 0:return j.call(te);case 1:return j.call(te,q[0]);case 2:return j.call(te,q[0],q[1]);case 3:return j.call(te,q[0],q[1],q[2])}return j.apply(te,q)}function ym(j,te,q,Le){for(var Ve=-1,ft=j==null?0:j.length;++Ve<ft;){var Pt=j[Ve];te(Le,Pt,q(Pt),j)}return Le}function Pn(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le&&te(j[q],q,j)!==!1;);return j}function Lm(j,te){for(var q=j==null?0:j.length;q--&&te(j[q],q,j)!==!1;);return j}function O_(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le;)if(!te(j[q],q,j))return!1;return!0}function Wr(j,te){for(var q=-1,Le=j==null?0:j.length,Ve=0,ft=[];++q<Le;){var Pt=j[q];te(Pt,q,j)&&(ft[Ve++]=Pt)}return ft}function Fs(j,te){var q=j==null?0:j.length;return!!q&&zi(j,te,0)>-1}function Bl(j,te,q){for(var Le=-1,Ve=j==null?0:j.length;++Le<Ve;)if(q(te,j[Le]))return!0;return!1}function Nt(j,te){for(var q=-1,Le=j==null?0:j.length,Ve=Array(Le);++q<Le;)Ve[q]=te(j[q],q,j);return Ve}function zr(j,te){for(var q=-1,Le=te.length,Ve=j.length;++q<Le;)j[Ve+q]=te[q];return j}function Wl(j,te,q,Le){var Ve=-1,ft=j==null?0:j.length;for(Le&&ft&&(q=j[++Ve]);++Ve<ft;)q=te(q,j[Ve],Ve,j);return q}function Am(j,te,q,Le){var Ve=j==null?0:j.length;for(Le&&Ve&&(q=j[--Ve]);Ve--;)q=te(q,j[Ve],Ve,j);return q}function zl(j,te){for(var q=-1,Le=j==null?0:j.length;++q<Le;)if(te(j[q],q,j))return!0;return!1}var Sm=Yl("length");function xm(j){return j.split("")}function Nm(j){return j.match($p)||[]}function y_(j,te,q){var Le;return q(j,function(Ve,ft,Pt){if(te(Ve,ft,Pt))return Le=ft,!1}),Le}function Hs(j,te,q,Le){for(var Ve=j.length,ft=q+(Le?1:-1);Le?ft--:++ft<Ve;)if(te(j[ft],ft,j))return ft;return-1}function zi(j,te,q){return te===te?Bm(j,te,q):Hs(j,L_,q)}function Tm(j,te,q,Le){for(var Ve=q-1,ft=j.length;++Ve<ft;)if(Le(j[Ve],te))return Ve;return-1}function L_(j){return j!==j}function A_(j,te){var q=j==null?0:j.length;return q?Vl(j,te)/q:vt}function Yl(j){return function(te){return te==null?n:te[j]}}function jl(j){return function(te){return j==null?n:j[te]}}function S_(j,te,q,Le,Ve){return Ve(j,function(ft,Pt,It){q=Le?(Le=!1,ft):te(q,ft,Pt,It)}),q}function Dm(j,te){var q=j.length;for(j.sort(te);q--;)j[q]=j[q].value;return j}function Vl(j,te){for(var q,Le=-1,Ve=j.length;++Le<Ve;){var ft=te(j[Le]);ft!==n&&(q=q===n?ft:q+ft)}return q}function Kl(j,te){for(var q=-1,Le=Array(j);++q<j;)Le[q]=te(q);return Le}function Rm(j,te){return Nt(te,function(q){return[q,j[q]]})}function x_(j){return j&&j.slice(0,R_(j)+1).replace(kl,"")}function Sn(j){return function(te){return j(te)}}function Xl(j,te){return Nt(te,function(q){return j[q]})}function Go(j,te){return j.has(te)}function N_(j,te){for(var q=-1,Le=j.length;++q<Le&&zi(te,j[q],0)>-1;);return q}function T_(j,te){for(var q=j.length;q--&&zi(te,j[q],0)>-1;);return q}function km(j,te){for(var q=j.length,Le=0;q--;)j[q]===te&&++Le;return Le}var Gm=jl(mm),Mm=jl(Em);function Um(j){return"\\"+Im[j]}function $m(j,te){return j==null?n:j[te]}function Yi(j){return gm.test(j)}function Fm(j){return hm.test(j)}function Hm(j){for(var te,q=[];!(te=j.next()).done;)q.push(te.value);return q}function ql(j){var te=-1,q=Array(j.size);return j.forEach(function(Le,Ve){q[++te]=[Ve,Le]}),q}function D_(j,te){return function(q){return j(te(q))}}function Yr(j,te){for(var q=-1,Le=j.length,Ve=0,ft=[];++q<Le;){var Pt=j[q];(Pt===te||Pt===v)&&(j[q]=v,ft[Ve++]=q)}return ft}function Ps(j){var te=-1,q=Array(j.size);return j.forEach(function(Le){q[++te]=Le}),q}function Pm(j){var te=-1,q=Array(j.size);return j.forEach(function(Le){q[++te]=[Le,Le]}),q}function Bm(j,te,q){for(var Le=q-1,Ve=j.length;++Le<Ve;)if(j[Le]===te)return Le;return-1}function Wm(j,te,q){for(var Le=q+1;Le--;)if(j[Le]===te)return Le;return Le}function ji(j){return Yi(j)?Ym(j):Sm(j)}function tr(j){return Yi(j)?jm(j):xm(j)}function R_(j){for(var te=j.length;te--&&kp.test(j.charAt(te)););return te}var zm=jl(Cm);function Ym(j){for(var te=Fl.lastIndex=0;Fl.test(j);)++te;return te}function jm(j){return j.match(Fl)||[]}function Vm(j){return j.match(fm)||[]}var Km=function j(te){te=te==null?jt:Vi.defaults(jt.Object(),te,Vi.pick(jt,vm));var q=te.Array,Le=te.Date,Ve=te.Error,ft=te.Function,Pt=te.Math,It=te.Object,Zl=te.RegExp,Xm=te.String,Bn=te.TypeError,Bs=q.prototype,qm=ft.prototype,Ki=It.prototype,Ws=te["__core-js_shared__"],zs=qm.toString,mt=Ki.hasOwnProperty,Zm=0,k_=function(){var o=/[^.]+$/.exec(Ws&&Ws.keys&&Ws.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Ys=Ki.toString,Qm=zs.call(It),Jm=jt._,e1=Zl("^"+zs.call(mt).replace(Rl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),js=p_?te.Buffer:n,jr=te.Symbol,Vs=te.Uint8Array,G_=js?js.allocUnsafe:n,Ks=D_(It.getPrototypeOf,It),M_=It.create,U_=Ki.propertyIsEnumerable,Xs=Bs.splice,$_=jr?jr.isConcatSpreadable:n,Mo=jr?jr.iterator:n,vi=jr?jr.toStringTag:n,qs=function(){try{var o=Ii(It,"defineProperty");return o({},"",{}),o}catch{}}(),t1=te.clearTimeout!==jt.clearTimeout&&te.clearTimeout,n1=Le&&Le.now!==jt.Date.now&&Le.now,r1=te.setTimeout!==jt.setTimeout&&te.setTimeout,Zs=Pt.ceil,Qs=Pt.floor,Ql=It.getOwnPropertySymbols,i1=js?js.isBuffer:n,F_=te.isFinite,o1=Bs.join,s1=D_(It.keys,It),Bt=Pt.max,Jt=Pt.min,a1=Le.now,l1=te.parseInt,H_=Pt.random,c1=Bs.reverse,Jl=Ii(te,"DataView"),Uo=Ii(te,"Map"),ec=Ii(te,"Promise"),Xi=Ii(te,"Set"),$o=Ii(te,"WeakMap"),Fo=Ii(It,"create"),Js=$o&&new $o,qi={},u1=bi(Jl),d1=bi(Uo),_1=bi(ec),f1=bi(Xi),g1=bi($o),ea=jr?jr.prototype:n,Ho=ea?ea.valueOf:n,P_=ea?ea.toString:n;function y(o){if(kt(o)&&!Ke(o)&&!(o instanceof it)){if(o instanceof Wn)return o;if(mt.call(o,"__wrapped__"))return Wf(o)}return new Wn(o)}var Zi=function(){function o(){}return function(l){if(!Tt(l))return{};if(M_)return M_(l);o.prototype=l;var f=new o;return o.prototype=n,f}}();function ta(){}function Wn(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:Sp,evaluate:xp,interpolate:qd,variable:"",imports:{_:y}},y.prototype=ta.prototype,y.prototype.constructor=y,Wn.prototype=Zi(ta.prototype),Wn.prototype.constructor=Wn;function it(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function h1(){var o=new it(this.__wrapped__);return o.__actions__=En(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=En(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=En(this.__views__),o}function v1(){if(this.__filtered__){var o=new it(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function p1(){var o=this.__wrapped__.value(),l=this.__dir__,f=Ke(o),C=l<0,O=f?o.length:0,A=x0(0,O,this.__views__),M=A.start,B=A.end,V=B-M,oe=C?B:M-1,se=this.__iteratees__,_e=se.length,be=0,ke=Jt(V,this.__takeCount__);if(!f||!C&&O==V&&ke==V)return _f(o,this.__actions__);var He=[];e:for(;V--&&be<ke;){oe+=l;for(var Qe=-1,Pe=o[oe];++Qe<_e;){var nt=se[Qe],at=nt.iteratee,Tn=nt.type,un=at(Pe);if(Tn==Ce)Pe=un;else if(!un){if(Tn==me)continue e;break e}}He[be++]=Pe}return He}it.prototype=Zi(ta.prototype),it.prototype.constructor=it;function pi(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var C=o[l];this.set(C[0],C[1])}}function m1(){this.__data__=Fo?Fo(null):{},this.size=0}function E1(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function C1(o){var l=this.__data__;if(Fo){var f=l[o];return f===u?n:f}return mt.call(l,o)?l[o]:n}function I1(o){var l=this.__data__;return Fo?l[o]!==n:mt.call(l,o)}function b1(o,l){var f=this.__data__;return this.size+=this.has(o)?0:1,f[o]=Fo&&l===n?u:l,this}pi.prototype.clear=m1,pi.prototype.delete=E1,pi.prototype.get=C1,pi.prototype.has=I1,pi.prototype.set=b1;function Er(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var C=o[l];this.set(C[0],C[1])}}function w1(){this.__data__=[],this.size=0}function O1(o){var l=this.__data__,f=na(l,o);if(f<0)return!1;var C=l.length-1;return f==C?l.pop():Xs.call(l,f,1),--this.size,!0}function y1(o){var l=this.__data__,f=na(l,o);return f<0?n:l[f][1]}function L1(o){return na(this.__data__,o)>-1}function A1(o,l){var f=this.__data__,C=na(f,o);return C<0?(++this.size,f.push([o,l])):f[C][1]=l,this}Er.prototype.clear=w1,Er.prototype.delete=O1,Er.prototype.get=y1,Er.prototype.has=L1,Er.prototype.set=A1;function Cr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var C=o[l];this.set(C[0],C[1])}}function S1(){this.size=0,this.__data__={hash:new pi,map:new(Uo||Er),string:new pi}}function x1(o){var l=ga(this,o).delete(o);return this.size-=l?1:0,l}function N1(o){return ga(this,o).get(o)}function T1(o){return ga(this,o).has(o)}function D1(o,l){var f=ga(this,o),C=f.size;return f.set(o,l),this.size+=f.size==C?0:1,this}Cr.prototype.clear=S1,Cr.prototype.delete=x1,Cr.prototype.get=N1,Cr.prototype.has=T1,Cr.prototype.set=D1;function mi(o){var l=-1,f=o==null?0:o.length;for(this.__data__=new Cr;++l<f;)this.add(o[l])}function R1(o){return this.__data__.set(o,u),this}function k1(o){return this.__data__.has(o)}mi.prototype.add=mi.prototype.push=R1,mi.prototype.has=k1;function nr(o){var l=this.__data__=new Er(o);this.size=l.size}function G1(){this.__data__=new Er,this.size=0}function M1(o){var l=this.__data__,f=l.delete(o);return this.size=l.size,f}function U1(o){return this.__data__.get(o)}function $1(o){return this.__data__.has(o)}function F1(o,l){var f=this.__data__;if(f instanceof Er){var C=f.__data__;if(!Uo||C.length<i-1)return C.push([o,l]),this.size=++f.size,this;f=this.__data__=new Cr(C)}return f.set(o,l),this.size=f.size,this}nr.prototype.clear=G1,nr.prototype.delete=M1,nr.prototype.get=U1,nr.prototype.has=$1,nr.prototype.set=F1;function B_(o,l){var f=Ke(o),C=!f&&wi(o),O=!f&&!C&&Zr(o),A=!f&&!C&&!O&&to(o),M=f||C||O||A,B=M?Kl(o.length,Xm):[],V=B.length;for(var oe in o)(l||mt.call(o,oe))&&!(M&&(oe=="length"||O&&(oe=="offset"||oe=="parent")||A&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Or(oe,V)))&&B.push(oe);return B}function W_(o){var l=o.length;return l?o[dc(0,l-1)]:n}function H1(o,l){return ha(En(o),Ei(l,0,o.length))}function P1(o){return ha(En(o))}function tc(o,l,f){(f!==n&&!rr(o[l],f)||f===n&&!(l in o))&&Ir(o,l,f)}function Po(o,l,f){var C=o[l];(!(mt.call(o,l)&&rr(C,f))||f===n&&!(l in o))&&Ir(o,l,f)}function na(o,l){for(var f=o.length;f--;)if(rr(o[f][0],l))return f;return-1}function B1(o,l,f,C){return Vr(o,function(O,A,M){l(C,O,f(O),M)}),C}function z_(o,l){return o&&ar(l,Wt(l),o)}function W1(o,l){return o&&ar(l,In(l),o)}function Ir(o,l,f){l=="__proto__"&&qs?qs(o,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):o[l]=f}function nc(o,l){for(var f=-1,C=l.length,O=q(C),A=o==null;++f<C;)O[f]=A?n:Mc(o,l[f]);return O}function Ei(o,l,f){return o===o&&(f!==n&&(o=o<=f?o:f),l!==n&&(o=o>=l?o:l)),o}function zn(o,l,f,C,O,A){var M,B=l&g,V=l&h,oe=l&m;if(f&&(M=O?f(o,C,O,A):f(o)),M!==n)return M;if(!Tt(o))return o;var se=Ke(o);if(se){if(M=T0(o),!B)return En(o,M)}else{var _e=en(o),be=_e==Rt||_e==Ne;if(Zr(o))return hf(o,B);if(_e==yt||_e==Qt||be&&!O){if(M=V||be?{}:kf(o),!B)return V?C0(o,W1(M,o)):E0(o,z_(M,o))}else{if(!wt[_e])return O?o:{};M=D0(o,_e,B)}}A||(A=new nr);var ke=A.get(o);if(ke)return ke;A.set(o,M),cg(o)?o.forEach(function(Pe){M.add(zn(Pe,l,f,Pe,o,A))}):ag(o)&&o.forEach(function(Pe,nt){M.set(nt,zn(Pe,l,f,nt,o,A))});var He=oe?V?bc:Ic:V?In:Wt,Qe=se?n:He(o);return Pn(Qe||o,function(Pe,nt){Qe&&(nt=Pe,Pe=o[nt]),Po(M,nt,zn(Pe,l,f,nt,o,A))}),M}function z1(o){var l=Wt(o);return function(f){return Y_(f,o,l)}}function Y_(o,l,f){var C=f.length;if(o==null)return!C;for(o=It(o);C--;){var O=f[C],A=l[O],M=o[O];if(M===n&&!(O in o)||!A(M))return!1}return!0}function j_(o,l,f){if(typeof o!="function")throw new Bn(a);return Ko(function(){o.apply(n,f)},l)}function Bo(o,l,f,C){var O=-1,A=Fs,M=!0,B=o.length,V=[],oe=l.length;if(!B)return V;f&&(l=Nt(l,Sn(f))),C?(A=Bl,M=!1):l.length>=i&&(A=Go,M=!1,l=new mi(l));e:for(;++O<B;){var se=o[O],_e=f==null?se:f(se);if(se=C||se!==0?se:0,M&&_e===_e){for(var be=oe;be--;)if(l[be]===_e)continue e;V.push(se)}else A(l,_e,C)||V.push(se)}return V}var Vr=Cf(sr),V_=Cf(ic,!0);function Y1(o,l){var f=!0;return Vr(o,function(C,O,A){return f=!!l(C,O,A),f}),f}function ra(o,l,f){for(var C=-1,O=o.length;++C<O;){var A=o[C],M=l(A);if(M!=null&&(B===n?M===M&&!Nn(M):f(M,B)))var B=M,V=A}return V}function j1(o,l,f,C){var O=o.length;for(f=Ze(f),f<0&&(f=-f>O?0:O+f),C=C===n||C>O?O:Ze(C),C<0&&(C+=O),C=f>C?0:dg(C);f<C;)o[f++]=l;return o}function K_(o,l){var f=[];return Vr(o,function(C,O,A){l(C,O,A)&&f.push(C)}),f}function Vt(o,l,f,C,O){var A=-1,M=o.length;for(f||(f=k0),O||(O=[]);++A<M;){var B=o[A];l>0&&f(B)?l>1?Vt(B,l-1,f,C,O):zr(O,B):C||(O[O.length]=B)}return O}var rc=If(),X_=If(!0);function sr(o,l){return o&&rc(o,l,Wt)}function ic(o,l){return o&&X_(o,l,Wt)}function ia(o,l){return Wr(l,function(f){return yr(o[f])})}function Ci(o,l){l=Xr(l,o);for(var f=0,C=l.length;o!=null&&f<C;)o=o[lr(l[f++])];return f&&f==C?o:n}function q_(o,l,f){var C=l(o);return Ke(o)?C:zr(C,f(o))}function ln(o){return o==null?o===n?Ip:xe:vi&&vi in It(o)?S0(o):P0(o)}function oc(o,l){return o>l}function V1(o,l){return o!=null&&mt.call(o,l)}function K1(o,l){return o!=null&&l in It(o)}function X1(o,l,f){return o>=Jt(l,f)&&o<Bt(l,f)}function sc(o,l,f){for(var C=f?Bl:Fs,O=o[0].length,A=o.length,M=A,B=q(A),V=1/0,oe=[];M--;){var se=o[M];M&&l&&(se=Nt(se,Sn(l))),V=Jt(se.length,V),B[M]=!f&&(l||O>=120&&se.length>=120)?new mi(M&&se):n}se=o[0];var _e=-1,be=B[0];e:for(;++_e<O&&oe.length<V;){var ke=se[_e],He=l?l(ke):ke;if(ke=f||ke!==0?ke:0,!(be?Go(be,He):C(oe,He,f))){for(M=A;--M;){var Qe=B[M];if(!(Qe?Go(Qe,He):C(o[M],He,f)))continue e}be&&be.push(He),oe.push(ke)}}return oe}function q1(o,l,f,C){return sr(o,function(O,A,M){l(C,f(O),A,M)}),C}function Wo(o,l,f){l=Xr(l,o),o=$f(o,l);var C=o==null?o:o[lr(jn(l))];return C==null?n:An(C,o,f)}function Z_(o){return kt(o)&&ln(o)==Qt}function Z1(o){return kt(o)&&ln(o)==ko}function Q1(o){return kt(o)&&ln(o)==Fn}function zo(o,l,f,C,O){return o===l?!0:o==null||l==null||!kt(o)&&!kt(l)?o!==o&&l!==l:J1(o,l,f,C,zo,O)}function J1(o,l,f,C,O,A){var M=Ke(o),B=Ke(l),V=M?mr:en(o),oe=B?mr:en(l);V=V==Qt?yt:V,oe=oe==Qt?yt:oe;var se=V==yt,_e=oe==yt,be=V==oe;if(be&&Zr(o)){if(!Zr(l))return!1;M=!0,se=!1}if(be&&!se)return A||(A=new nr),M||to(o)?Tf(o,l,f,C,O,A):L0(o,l,V,f,C,O,A);if(!(f&E)){var ke=se&&mt.call(o,"__wrapped__"),He=_e&&mt.call(l,"__wrapped__");if(ke||He){var Qe=ke?o.value():o,Pe=He?l.value():l;return A||(A=new nr),O(Qe,Pe,f,C,A)}}return be?(A||(A=new nr),A0(o,l,f,C,O,A)):!1}function e0(o){return kt(o)&&en(o)==Ee}function ac(o,l,f,C){var O=f.length,A=O,M=!C;if(o==null)return!A;for(o=It(o);O--;){var B=f[O];if(M&&B[2]?B[1]!==o[B[0]]:!(B[0]in o))return!1}for(;++O<A;){B=f[O];var V=B[0],oe=o[V],se=B[1];if(M&&B[2]){if(oe===n&&!(V in o))return!1}else{var _e=new nr;if(C)var be=C(oe,se,V,o,l,_e);if(!(be===n?zo(se,oe,E|I,C,_e):be))return!1}}return!0}function Q_(o){if(!Tt(o)||M0(o))return!1;var l=yr(o)?e1:zp;return l.test(bi(o))}function t0(o){return kt(o)&&ln(o)==gi}function n0(o){return kt(o)&&en(o)==er}function r0(o){return kt(o)&&Ia(o.length)&&!!Lt[ln(o)]}function J_(o){return typeof o=="function"?o:o==null?bn:typeof o=="object"?Ke(o)?nf(o[0],o[1]):tf(o):bg(o)}function lc(o){if(!Vo(o))return s1(o);var l=[];for(var f in It(o))mt.call(o,f)&&f!="constructor"&&l.push(f);return l}function i0(o){if(!Tt(o))return H0(o);var l=Vo(o),f=[];for(var C in o)C=="constructor"&&(l||!mt.call(o,C))||f.push(C);return f}function cc(o,l){return o<l}function ef(o,l){var f=-1,C=Cn(o)?q(o.length):[];return Vr(o,function(O,A,M){C[++f]=l(O,A,M)}),C}function tf(o){var l=Oc(o);return l.length==1&&l[0][2]?Mf(l[0][0],l[0][1]):function(f){return f===o||ac(f,o,l)}}function nf(o,l){return Lc(o)&&Gf(l)?Mf(lr(o),l):function(f){var C=Mc(f,o);return C===n&&C===l?Uc(f,o):zo(l,C,E|I)}}function oa(o,l,f,C,O){o!==l&&rc(l,function(A,M){if(O||(O=new nr),Tt(A))o0(o,l,M,f,oa,C,O);else{var B=C?C(Sc(o,M),A,M+"",o,l,O):n;B===n&&(B=A),tc(o,M,B)}},In)}function o0(o,l,f,C,O,A,M){var B=Sc(o,f),V=Sc(l,f),oe=M.get(V);if(oe){tc(o,f,oe);return}var se=A?A(B,V,f+"",o,l,M):n,_e=se===n;if(_e){var be=Ke(V),ke=!be&&Zr(V),He=!be&&!ke&&to(V);se=V,be||ke||He?Ke(B)?se=B:Mt(B)?se=En(B):ke?(_e=!1,se=hf(V,!0)):He?(_e=!1,se=vf(V,!0)):se=[]:Xo(V)||wi(V)?(se=B,wi(B)?se=_g(B):(!Tt(B)||yr(B))&&(se=kf(V))):_e=!1}_e&&(M.set(V,se),O(se,V,C,A,M),M.delete(V)),tc(o,f,se)}function rf(o,l){var f=o.length;if(f)return l+=l<0?f:0,Or(l,f)?o[l]:n}function of(o,l,f){l.length?l=Nt(l,function(A){return Ke(A)?function(M){return Ci(M,A.length===1?A[0]:A)}:A}):l=[bn];var C=-1;l=Nt(l,Sn(Fe()));var O=ef(o,function(A,M,B){var V=Nt(l,function(oe){return oe(A)});return{criteria:V,index:++C,value:A}});return Dm(O,function(A,M){return m0(A,M,f)})}function s0(o,l){return sf(o,l,function(f,C){return Uc(o,C)})}function sf(o,l,f){for(var C=-1,O=l.length,A={};++C<O;){var M=l[C],B=Ci(o,M);f(B,M)&&Yo(A,Xr(M,o),B)}return A}function a0(o){return function(l){return Ci(l,o)}}function uc(o,l,f,C){var O=C?Tm:zi,A=-1,M=l.length,B=o;for(o===l&&(l=En(l)),f&&(B=Nt(o,Sn(f)));++A<M;)for(var V=0,oe=l[A],se=f?f(oe):oe;(V=O(B,se,V,C))>-1;)B!==o&&Xs.call(B,V,1),Xs.call(o,V,1);return o}function af(o,l){for(var f=o?l.length:0,C=f-1;f--;){var O=l[f];if(f==C||O!==A){var A=O;Or(O)?Xs.call(o,O,1):gc(o,O)}}return o}function dc(o,l){return o+Qs(H_()*(l-o+1))}function l0(o,l,f,C){for(var O=-1,A=Bt(Zs((l-o)/(f||1)),0),M=q(A);A--;)M[C?A:++O]=o,o+=f;return M}function _c(o,l){var f="";if(!o||l<1||l>Se)return f;do l%2&&(f+=o),l=Qs(l/2),l&&(o+=o);while(l);return f}function Je(o,l){return xc(Uf(o,l,bn),o+"")}function c0(o){return W_(no(o))}function u0(o,l){var f=no(o);return ha(f,Ei(l,0,f.length))}function Yo(o,l,f,C){if(!Tt(o))return o;l=Xr(l,o);for(var O=-1,A=l.length,M=A-1,B=o;B!=null&&++O<A;){var V=lr(l[O]),oe=f;if(V==="__proto__"||V==="constructor"||V==="prototype")return o;if(O!=M){var se=B[V];oe=C?C(se,V,B):n,oe===n&&(oe=Tt(se)?se:Or(l[O+1])?[]:{})}Po(B,V,oe),B=B[V]}return o}var lf=Js?function(o,l){return Js.set(o,l),o}:bn,d0=qs?function(o,l){return qs(o,"toString",{configurable:!0,enumerable:!1,value:Fc(l),writable:!0})}:bn;function _0(o){return ha(no(o))}function Yn(o,l,f){var C=-1,O=o.length;l<0&&(l=-l>O?0:O+l),f=f>O?O:f,f<0&&(f+=O),O=l>f?0:f-l>>>0,l>>>=0;for(var A=q(O);++C<O;)A[C]=o[C+l];return A}function f0(o,l){var f;return Vr(o,function(C,O,A){return f=l(C,O,A),!f}),!!f}function sa(o,l,f){var C=0,O=o==null?C:o.length;if(typeof l=="number"&&l===l&&O<=$n){for(;C<O;){var A=C+O>>>1,M=o[A];M!==null&&!Nn(M)&&(f?M<=l:M<l)?C=A+1:O=A}return O}return fc(o,l,bn,f)}function fc(o,l,f,C){var O=0,A=o==null?0:o.length;if(A===0)return 0;l=f(l);for(var M=l!==l,B=l===null,V=Nn(l),oe=l===n;O<A;){var se=Qs((O+A)/2),_e=f(o[se]),be=_e!==n,ke=_e===null,He=_e===_e,Qe=Nn(_e);if(M)var Pe=C||He;else oe?Pe=He&&(C||be):B?Pe=He&&be&&(C||!ke):V?Pe=He&&be&&!ke&&(C||!Qe):ke||Qe?Pe=!1:Pe=C?_e<=l:_e<l;Pe?O=se+1:A=se}return Jt(A,Ln)}function cf(o,l){for(var f=-1,C=o.length,O=0,A=[];++f<C;){var M=o[f],B=l?l(M):M;if(!f||!rr(B,V)){var V=B;A[O++]=M===0?0:M}}return A}function uf(o){return typeof o=="number"?o:Nn(o)?vt:+o}function xn(o){if(typeof o=="string")return o;if(Ke(o))return Nt(o,xn)+"";if(Nn(o))return P_?P_.call(o):"";var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Kr(o,l,f){var C=-1,O=Fs,A=o.length,M=!0,B=[],V=B;if(f)M=!1,O=Bl;else if(A>=i){var oe=l?null:O0(o);if(oe)return Ps(oe);M=!1,O=Go,V=new mi}else V=l?[]:B;e:for(;++C<A;){var se=o[C],_e=l?l(se):se;if(se=f||se!==0?se:0,M&&_e===_e){for(var be=V.length;be--;)if(V[be]===_e)continue e;l&&V.push(_e),B.push(se)}else O(V,_e,f)||(V!==B&&V.push(_e),B.push(se))}return B}function gc(o,l){return l=Xr(l,o),o=$f(o,l),o==null||delete o[lr(jn(l))]}function df(o,l,f,C){return Yo(o,l,f(Ci(o,l)),C)}function aa(o,l,f,C){for(var O=o.length,A=C?O:-1;(C?A--:++A<O)&&l(o[A],A,o););return f?Yn(o,C?0:A,C?A+1:O):Yn(o,C?A+1:0,C?O:A)}function _f(o,l){var f=o;return f instanceof it&&(f=f.value()),Wl(l,function(C,O){return O.func.apply(O.thisArg,zr([C],O.args))},f)}function hc(o,l,f){var C=o.length;if(C<2)return C?Kr(o[0]):[];for(var O=-1,A=q(C);++O<C;)for(var M=o[O],B=-1;++B<C;)B!=O&&(A[O]=Bo(A[O]||M,o[B],l,f));return Kr(Vt(A,1),l,f)}function ff(o,l,f){for(var C=-1,O=o.length,A=l.length,M={};++C<O;){var B=C<A?l[C]:n;f(M,o[C],B)}return M}function vc(o){return Mt(o)?o:[]}function pc(o){return typeof o=="function"?o:bn}function Xr(o,l){return Ke(o)?o:Lc(o,l)?[o]:Bf(pt(o))}var g0=Je;function qr(o,l,f){var C=o.length;return f=f===n?C:f,!l&&f>=C?o:Yn(o,l,f)}var gf=t1||function(o){return jt.clearTimeout(o)};function hf(o,l){if(l)return o.slice();var f=o.length,C=G_?G_(f):new o.constructor(f);return o.copy(C),C}function mc(o){var l=new o.constructor(o.byteLength);return new Vs(l).set(new Vs(o)),l}function h0(o,l){var f=l?mc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.byteLength)}function v0(o){var l=new o.constructor(o.source,Zd.exec(o));return l.lastIndex=o.lastIndex,l}function p0(o){return Ho?It(Ho.call(o)):{}}function vf(o,l){var f=l?mc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.length)}function pf(o,l){if(o!==l){var f=o!==n,C=o===null,O=o===o,A=Nn(o),M=l!==n,B=l===null,V=l===l,oe=Nn(l);if(!B&&!oe&&!A&&o>l||A&&M&&V&&!B&&!oe||C&&M&&V||!f&&V||!O)return 1;if(!C&&!A&&!oe&&o<l||oe&&f&&O&&!C&&!A||B&&f&&O||!M&&O||!V)return-1}return 0}function m0(o,l,f){for(var C=-1,O=o.criteria,A=l.criteria,M=O.length,B=f.length;++C<M;){var V=pf(O[C],A[C]);if(V){if(C>=B)return V;var oe=f[C];return V*(oe=="desc"?-1:1)}}return o.index-l.index}function mf(o,l,f,C){for(var O=-1,A=o.length,M=f.length,B=-1,V=l.length,oe=Bt(A-M,0),se=q(V+oe),_e=!C;++B<V;)se[B]=l[B];for(;++O<M;)(_e||O<A)&&(se[f[O]]=o[O]);for(;oe--;)se[B++]=o[O++];return se}function Ef(o,l,f,C){for(var O=-1,A=o.length,M=-1,B=f.length,V=-1,oe=l.length,se=Bt(A-B,0),_e=q(se+oe),be=!C;++O<se;)_e[O]=o[O];for(var ke=O;++V<oe;)_e[ke+V]=l[V];for(;++M<B;)(be||O<A)&&(_e[ke+f[M]]=o[O++]);return _e}function En(o,l){var f=-1,C=o.length;for(l||(l=q(C));++f<C;)l[f]=o[f];return l}function ar(o,l,f,C){var O=!f;f||(f={});for(var A=-1,M=l.length;++A<M;){var B=l[A],V=C?C(f[B],o[B],B,f,o):n;V===n&&(V=o[B]),O?Ir(f,B,V):Po(f,B,V)}return f}function E0(o,l){return ar(o,yc(o),l)}function C0(o,l){return ar(o,Df(o),l)}function la(o,l){return function(f,C){var O=Ke(f)?ym:B1,A=l?l():{};return O(f,o,Fe(C,2),A)}}function Qi(o){return Je(function(l,f){var C=-1,O=f.length,A=O>1?f[O-1]:n,M=O>2?f[2]:n;for(A=o.length>3&&typeof A=="function"?(O--,A):n,M&&cn(f[0],f[1],M)&&(A=O<3?n:A,O=1),l=It(l);++C<O;){var B=f[C];B&&o(l,B,C,A)}return l})}function Cf(o,l){return function(f,C){if(f==null)return f;if(!Cn(f))return o(f,C);for(var O=f.length,A=l?O:-1,M=It(f);(l?A--:++A<O)&&C(M[A],A,M)!==!1;);return f}}function If(o){return function(l,f,C){for(var O=-1,A=It(l),M=C(l),B=M.length;B--;){var V=M[o?B:++O];if(f(A[V],V,A)===!1)break}return l}}function I0(o,l,f){var C=l&b,O=jo(o);function A(){var M=this&&this!==jt&&this instanceof A?O:o;return M.apply(C?f:this,arguments)}return A}function bf(o){return function(l){l=pt(l);var f=Yi(l)?tr(l):n,C=f?f[0]:l.charAt(0),O=f?qr(f,1).join(""):l.slice(1);return C[o]()+O}}function Ji(o){return function(l){return Wl(Cg(Eg(l).replace(dm,"")),o,"")}}function jo(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Zi(o.prototype),C=o.apply(f,l);return Tt(C)?C:f}}function b0(o,l,f){var C=jo(o);function O(){for(var A=arguments.length,M=q(A),B=A,V=eo(O);B--;)M[B]=arguments[B];var oe=A<3&&M[0]!==V&&M[A-1]!==V?[]:Yr(M,V);if(A-=oe.length,A<f)return Af(o,l,ca,O.placeholder,n,M,oe,n,n,f-A);var se=this&&this!==jt&&this instanceof O?C:o;return An(se,this,M)}return O}function wf(o){return function(l,f,C){var O=It(l);if(!Cn(l)){var A=Fe(f,3);l=Wt(l),f=function(B){return A(O[B],B,O)}}var M=o(l,f,C);return M>-1?O[A?l[M]:M]:n}}function Of(o){return wr(function(l){var f=l.length,C=f,O=Wn.prototype.thru;for(o&&l.reverse();C--;){var A=l[C];if(typeof A!="function")throw new Bn(a);if(O&&!M&&fa(A)=="wrapper")var M=new Wn([],!0)}for(C=M?C:f;++C<f;){A=l[C];var B=fa(A),V=B=="wrapper"?wc(A):n;V&&Ac(V[0])&&V[1]==(W|R|U|X)&&!V[4].length&&V[9]==1?M=M[fa(V[0])].apply(M,V[3]):M=A.length==1&&Ac(A)?M[B]():M.thru(A)}return function(){var oe=arguments,se=oe[0];if(M&&oe.length==1&&Ke(se))return M.plant(se).value();for(var _e=0,be=f?l[_e].apply(this,oe):se;++_e<f;)be=l[_e].call(this,be);return be}})}function ca(o,l,f,C,O,A,M,B,V,oe){var se=l&W,_e=l&b,be=l&w,ke=l&(R|k),He=l&J,Qe=be?n:jo(o);function Pe(){for(var nt=arguments.length,at=q(nt),Tn=nt;Tn--;)at[Tn]=arguments[Tn];if(ke)var un=eo(Pe),Dn=km(at,un);if(C&&(at=mf(at,C,O,ke)),A&&(at=Ef(at,A,M,ke)),nt-=Dn,ke&&nt<oe){var Ut=Yr(at,un);return Af(o,l,ca,Pe.placeholder,f,at,Ut,B,V,oe-nt)}var ir=_e?f:this,Ar=be?ir[o]:o;return nt=at.length,B?at=B0(at,B):He&&nt>1&&at.reverse(),se&&V<nt&&(at.length=V),this&&this!==jt&&this instanceof Pe&&(Ar=Qe||jo(Ar)),Ar.apply(ir,at)}return Pe}function yf(o,l){return function(f,C){return q1(f,o,l(C),{})}}function ua(o,l){return function(f,C){var O;if(f===n&&C===n)return l;if(f!==n&&(O=f),C!==n){if(O===n)return C;typeof f=="string"||typeof C=="string"?(f=xn(f),C=xn(C)):(f=uf(f),C=uf(C)),O=o(f,C)}return O}}function Ec(o){return wr(function(l){return l=Nt(l,Sn(Fe())),Je(function(f){var C=this;return o(l,function(O){return An(O,C,f)})})})}function da(o,l){l=l===n?" ":xn(l);var f=l.length;if(f<2)return f?_c(l,o):l;var C=_c(l,Zs(o/ji(l)));return Yi(l)?qr(tr(C),0,o).join(""):C.slice(0,o)}function w0(o,l,f,C){var O=l&b,A=jo(o);function M(){for(var B=-1,V=arguments.length,oe=-1,se=C.length,_e=q(se+V),be=this&&this!==jt&&this instanceof M?A:o;++oe<se;)_e[oe]=C[oe];for(;V--;)_e[oe++]=arguments[++B];return An(be,O?f:this,_e)}return M}function Lf(o){return function(l,f,C){return C&&typeof C!="number"&&cn(l,f,C)&&(f=C=n),l=Lr(l),f===n?(f=l,l=0):f=Lr(f),C=C===n?l<f?1:-1:Lr(C),l0(l,f,C,o)}}function _a(o){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Vn(l),f=Vn(f)),o(l,f)}}function Af(o,l,f,C,O,A,M,B,V,oe){var se=l&R,_e=se?M:n,be=se?n:M,ke=se?A:n,He=se?n:A;l|=se?U:P,l&=~(se?P:U),l&L||(l&=-4);var Qe=[o,l,O,ke,_e,He,be,B,V,oe],Pe=f.apply(n,Qe);return Ac(o)&&Ff(Pe,Qe),Pe.placeholder=C,Hf(Pe,o,l)}function Cc(o){var l=Pt[o];return function(f,C){if(f=Vn(f),C=C==null?0:Jt(Ze(C),292),C&&F_(f)){var O=(pt(f)+"e").split("e"),A=l(O[0]+"e"+(+O[1]+C));return O=(pt(A)+"e").split("e"),+(O[0]+"e"+(+O[1]-C))}return l(f)}}var O0=Xi&&1/Ps(new Xi([,-0]))[1]==st?function(o){return new Xi(o)}:Bc;function Sf(o){return function(l){var f=en(l);return f==Ee?ql(l):f==er?Pm(l):Rm(l,o(l))}}function br(o,l,f,C,O,A,M,B){var V=l&w;if(!V&&typeof o!="function")throw new Bn(a);var oe=C?C.length:0;if(oe||(l&=-97,C=O=n),M=M===n?M:Bt(Ze(M),0),B=B===n?B:Ze(B),oe-=O?O.length:0,l&P){var se=C,_e=O;C=O=n}var be=V?n:wc(o),ke=[o,l,f,C,O,se,_e,A,M,B];if(be&&F0(ke,be),o=ke[0],l=ke[1],f=ke[2],C=ke[3],O=ke[4],B=ke[9]=ke[9]===n?V?0:o.length:Bt(ke[9]-oe,0),!B&&l&(R|k)&&(l&=-25),!l||l==b)var He=I0(o,l,f);else l==R||l==k?He=b0(o,l,B):(l==U||l==(b|U))&&!O.length?He=w0(o,l,f,C):He=ca.apply(n,ke);var Qe=be?lf:Ff;return Hf(Qe(He,ke),o,l)}function xf(o,l,f,C){return o===n||rr(o,Ki[f])&&!mt.call(C,f)?l:o}function Nf(o,l,f,C,O,A){return Tt(o)&&Tt(l)&&(A.set(l,o),oa(o,l,n,Nf,A),A.delete(l)),o}function y0(o){return Xo(o)?n:o}function Tf(o,l,f,C,O,A){var M=f&E,B=o.length,V=l.length;if(B!=V&&!(M&&V>B))return!1;var oe=A.get(o),se=A.get(l);if(oe&&se)return oe==l&&se==o;var _e=-1,be=!0,ke=f&I?new mi:n;for(A.set(o,l),A.set(l,o);++_e<B;){var He=o[_e],Qe=l[_e];if(C)var Pe=M?C(Qe,He,_e,l,o,A):C(He,Qe,_e,o,l,A);if(Pe!==n){if(Pe)continue;be=!1;break}if(ke){if(!zl(l,function(nt,at){if(!Go(ke,at)&&(He===nt||O(He,nt,f,C,A)))return ke.push(at)})){be=!1;break}}else if(!(He===Qe||O(He,Qe,f,C,A))){be=!1;break}}return A.delete(o),A.delete(l),be}function L0(o,l,f,C,O,A,M){switch(f){case Bi:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case ko:return!(o.byteLength!=l.byteLength||!A(new Vs(o),new Vs(l)));case or:case Fn:case Re:return rr(+o,+l);case Br:return o.name==l.name&&o.message==l.message;case gi:case Do:return o==l+"";case Ee:var B=ql;case er:var V=C&E;if(B||(B=Ps),o.size!=l.size&&!V)return!1;var oe=M.get(o);if(oe)return oe==l;C|=I,M.set(o,l);var se=Tf(B(o),B(l),C,O,A,M);return M.delete(o),se;case Gs:if(Ho)return Ho.call(o)==Ho.call(l)}return!1}function A0(o,l,f,C,O,A){var M=f&E,B=Ic(o),V=B.length,oe=Ic(l),se=oe.length;if(V!=se&&!M)return!1;for(var _e=V;_e--;){var be=B[_e];if(!(M?be in l:mt.call(l,be)))return!1}var ke=A.get(o),He=A.get(l);if(ke&&He)return ke==l&&He==o;var Qe=!0;A.set(o,l),A.set(l,o);for(var Pe=M;++_e<V;){be=B[_e];var nt=o[be],at=l[be];if(C)var Tn=M?C(at,nt,be,l,o,A):C(nt,at,be,o,l,A);if(!(Tn===n?nt===at||O(nt,at,f,C,A):Tn)){Qe=!1;break}Pe||(Pe=be=="constructor")}if(Qe&&!Pe){var un=o.constructor,Dn=l.constructor;un!=Dn&&"constructor"in o&&"constructor"in l&&!(typeof un=="function"&&un instanceof un&&typeof Dn=="function"&&Dn instanceof Dn)&&(Qe=!1)}return A.delete(o),A.delete(l),Qe}function wr(o){return xc(Uf(o,n,jf),o+"")}function Ic(o){return q_(o,Wt,yc)}function bc(o){return q_(o,In,Df)}var wc=Js?function(o){return Js.get(o)}:Bc;function fa(o){for(var l=o.name+"",f=qi[l],C=mt.call(qi,l)?f.length:0;C--;){var O=f[C],A=O.func;if(A==null||A==o)return O.name}return l}function eo(o){var l=mt.call(y,"placeholder")?y:o;return l.placeholder}function Fe(){var o=y.iteratee||Hc;return o=o===Hc?J_:o,arguments.length?o(arguments[0],arguments[1]):o}function ga(o,l){var f=o.__data__;return G0(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Oc(o){for(var l=Wt(o),f=l.length;f--;){var C=l[f],O=o[C];l[f]=[C,O,Gf(O)]}return l}function Ii(o,l){var f=$m(o,l);return Q_(f)?f:n}function S0(o){var l=mt.call(o,vi),f=o[vi];try{o[vi]=n;var C=!0}catch{}var O=Ys.call(o);return C&&(l?o[vi]=f:delete o[vi]),O}var yc=Ql?function(o){return o==null?[]:(o=It(o),Wr(Ql(o),function(l){return U_.call(o,l)}))}:Wc,Df=Ql?function(o){for(var l=[];o;)zr(l,yc(o)),o=Ks(o);return l}:Wc,en=ln;(Jl&&en(new Jl(new ArrayBuffer(1)))!=Bi||Uo&&en(new Uo)!=Ee||ec&&en(ec.resolve())!=ks||Xi&&en(new Xi)!=er||$o&&en(new $o)!=Ro)&&(en=function(o){var l=ln(o),f=l==yt?o.constructor:n,C=f?bi(f):"";if(C)switch(C){case u1:return Bi;case d1:return Ee;case _1:return ks;case f1:return er;case g1:return Ro}return l});function x0(o,l,f){for(var C=-1,O=f.length;++C<O;){var A=f[C],M=A.size;switch(A.type){case"drop":o+=M;break;case"dropRight":l-=M;break;case"take":l=Jt(l,o+M);break;case"takeRight":o=Bt(o,l-M);break}}return{start:o,end:l}}function N0(o){var l=o.match(Mp);return l?l[1].split(Up):[]}function Rf(o,l,f){l=Xr(l,o);for(var C=-1,O=l.length,A=!1;++C<O;){var M=lr(l[C]);if(!(A=o!=null&&f(o,M)))break;o=o[M]}return A||++C!=O?A:(O=o==null?0:o.length,!!O&&Ia(O)&&Or(M,O)&&(Ke(o)||wi(o)))}function T0(o){var l=o.length,f=new o.constructor(l);return l&&typeof o[0]=="string"&&mt.call(o,"index")&&(f.index=o.index,f.input=o.input),f}function kf(o){return typeof o.constructor=="function"&&!Vo(o)?Zi(Ks(o)):{}}function D0(o,l,f){var C=o.constructor;switch(l){case ko:return mc(o);case or:case Fn:return new C(+o);case Bi:return h0(o,f);case Ol:case yl:case Ll:case Al:case Sl:case xl:case Nl:case Tl:case Dl:return vf(o,f);case Ee:return new C;case Re:case Do:return new C(o);case gi:return v0(o);case er:return new C;case Gs:return p0(o)}}function R0(o,l){var f=l.length;if(!f)return o;var C=f-1;return l[C]=(f>1?"& ":"")+l[C],l=l.join(f>2?", ":" "),o.replace(Gp,`{
/* [wrapped with `+l+`] */
`)}function k0(o){return Ke(o)||wi(o)||!!($_&&o&&o[$_])}function Or(o,l){var f=typeof o;return l=l??Se,!!l&&(f=="number"||f!="symbol"&&jp.test(o))&&o>-1&&o%1==0&&o<l}function cn(o,l,f){if(!Tt(f))return!1;var C=typeof l;return(C=="number"?Cn(f)&&Or(l,f.length):C=="string"&&l in f)?rr(f[l],o):!1}function Lc(o,l){if(Ke(o))return!1;var f=typeof o;return f=="number"||f=="symbol"||f=="boolean"||o==null||Nn(o)?!0:Tp.test(o)||!Np.test(o)||l!=null&&o in It(l)}function G0(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function Ac(o){var l=fa(o),f=y[l];if(typeof f!="function"||!(l in it.prototype))return!1;if(o===f)return!0;var C=wc(f);return!!C&&o===C[0]}function M0(o){return!!k_&&k_ in o}var U0=Ws?yr:zc;function Vo(o){var l=o&&o.constructor,f=typeof l=="function"&&l.prototype||Ki;return o===f}function Gf(o){return o===o&&!Tt(o)}function Mf(o,l){return function(f){return f==null?!1:f[o]===l&&(l!==n||o in It(f))}}function $0(o){var l=Ea(o,function(C){return f.size===_&&f.clear(),C}),f=l.cache;return l}function F0(o,l){var f=o[1],C=l[1],O=f|C,A=O<(b|w|W),M=C==W&&f==R||C==W&&f==X&&o[7].length<=l[8]||C==(W|X)&&l[7].length<=l[8]&&f==R;if(!(A||M))return o;C&b&&(o[2]=l[2],O|=f&b?0:L);var B=l[3];if(B){var V=o[3];o[3]=V?mf(V,B,l[4]):B,o[4]=V?Yr(o[3],v):l[4]}return B=l[5],B&&(V=o[5],o[5]=V?Ef(V,B,l[6]):B,o[6]=V?Yr(o[5],v):l[6]),B=l[7],B&&(o[7]=B),C&W&&(o[8]=o[8]==null?l[8]:Jt(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=O,o}function H0(o){var l=[];if(o!=null)for(var f in It(o))l.push(f);return l}function P0(o){return Ys.call(o)}function Uf(o,l,f){return l=Bt(l===n?o.length-1:l,0),function(){for(var C=arguments,O=-1,A=Bt(C.length-l,0),M=q(A);++O<A;)M[O]=C[l+O];O=-1;for(var B=q(l+1);++O<l;)B[O]=C[O];return B[l]=f(M),An(o,this,B)}}function $f(o,l){return l.length<2?o:Ci(o,Yn(l,0,-1))}function B0(o,l){for(var f=o.length,C=Jt(l.length,f),O=En(o);C--;){var A=l[C];o[C]=Or(A,f)?O[A]:n}return o}function Sc(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var Ff=Pf(lf),Ko=r1||function(o,l){return jt.setTimeout(o,l)},xc=Pf(d0);function Hf(o,l,f){var C=l+"";return xc(o,R0(C,W0(N0(C),f)))}function Pf(o){var l=0,f=0;return function(){var C=a1(),O=pe-(C-f);if(f=C,O>0){if(++l>=ie)return arguments[0]}else l=0;return o.apply(n,arguments)}}function ha(o,l){var f=-1,C=o.length,O=C-1;for(l=l===n?C:l;++f<l;){var A=dc(f,O),M=o[A];o[A]=o[f],o[f]=M}return o.length=l,o}var Bf=$0(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(Dp,function(f,C,O,A){l.push(O?A.replace(Hp,"$1"):C||f)}),l});function lr(o){if(typeof o=="string"||Nn(o))return o;var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function bi(o){if(o!=null){try{return zs.call(o)}catch{}try{return o+""}catch{}}return""}function W0(o,l){return Pn(Pr,function(f){var C="_."+f[0];l&f[1]&&!Fs(o,C)&&o.push(C)}),o.sort()}function Wf(o){if(o instanceof it)return o.clone();var l=new Wn(o.__wrapped__,o.__chain__);return l.__actions__=En(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function z0(o,l,f){(f?cn(o,l,f):l===n)?l=1:l=Bt(Ze(l),0);var C=o==null?0:o.length;if(!C||l<1)return[];for(var O=0,A=0,M=q(Zs(C/l));O<C;)M[A++]=Yn(o,O,O+=l);return M}function Y0(o){for(var l=-1,f=o==null?0:o.length,C=0,O=[];++l<f;){var A=o[l];A&&(O[C++]=A)}return O}function j0(){var o=arguments.length;if(!o)return[];for(var l=q(o-1),f=arguments[0],C=o;C--;)l[C-1]=arguments[C];return zr(Ke(f)?En(f):[f],Vt(l,1))}var V0=Je(function(o,l){return Mt(o)?Bo(o,Vt(l,1,Mt,!0)):[]}),K0=Je(function(o,l){var f=jn(l);return Mt(f)&&(f=n),Mt(o)?Bo(o,Vt(l,1,Mt,!0),Fe(f,2)):[]}),X0=Je(function(o,l){var f=jn(l);return Mt(f)&&(f=n),Mt(o)?Bo(o,Vt(l,1,Mt,!0),n,f):[]});function q0(o,l,f){var C=o==null?0:o.length;return C?(l=f||l===n?1:Ze(l),Yn(o,l<0?0:l,C)):[]}function Z0(o,l,f){var C=o==null?0:o.length;return C?(l=f||l===n?1:Ze(l),l=C-l,Yn(o,0,l<0?0:l)):[]}function Q0(o,l){return o&&o.length?aa(o,Fe(l,3),!0,!0):[]}function J0(o,l){return o&&o.length?aa(o,Fe(l,3),!0):[]}function eE(o,l,f,C){var O=o==null?0:o.length;return O?(f&&typeof f!="number"&&cn(o,l,f)&&(f=0,C=O),j1(o,l,f,C)):[]}function zf(o,l,f){var C=o==null?0:o.length;if(!C)return-1;var O=f==null?0:Ze(f);return O<0&&(O=Bt(C+O,0)),Hs(o,Fe(l,3),O)}function Yf(o,l,f){var C=o==null?0:o.length;if(!C)return-1;var O=C-1;return f!==n&&(O=Ze(f),O=f<0?Bt(C+O,0):Jt(O,C-1)),Hs(o,Fe(l,3),O,!0)}function jf(o){var l=o==null?0:o.length;return l?Vt(o,1):[]}function tE(o){var l=o==null?0:o.length;return l?Vt(o,st):[]}function nE(o,l){var f=o==null?0:o.length;return f?(l=l===n?1:Ze(l),Vt(o,l)):[]}function rE(o){for(var l=-1,f=o==null?0:o.length,C={};++l<f;){var O=o[l];C[O[0]]=O[1]}return C}function Vf(o){return o&&o.length?o[0]:n}function iE(o,l,f){var C=o==null?0:o.length;if(!C)return-1;var O=f==null?0:Ze(f);return O<0&&(O=Bt(C+O,0)),zi(o,l,O)}function oE(o){var l=o==null?0:o.length;return l?Yn(o,0,-1):[]}var sE=Je(function(o){var l=Nt(o,vc);return l.length&&l[0]===o[0]?sc(l):[]}),aE=Je(function(o){var l=jn(o),f=Nt(o,vc);return l===jn(f)?l=n:f.pop(),f.length&&f[0]===o[0]?sc(f,Fe(l,2)):[]}),lE=Je(function(o){var l=jn(o),f=Nt(o,vc);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===o[0]?sc(f,n,l):[]});function cE(o,l){return o==null?"":o1.call(o,l)}function jn(o){var l=o==null?0:o.length;return l?o[l-1]:n}function uE(o,l,f){var C=o==null?0:o.length;if(!C)return-1;var O=C;return f!==n&&(O=Ze(f),O=O<0?Bt(C+O,0):Jt(O,C-1)),l===l?Wm(o,l,O):Hs(o,L_,O,!0)}function dE(o,l){return o&&o.length?rf(o,Ze(l)):n}var _E=Je(Kf);function Kf(o,l){return o&&o.length&&l&&l.length?uc(o,l):o}function fE(o,l,f){return o&&o.length&&l&&l.length?uc(o,l,Fe(f,2)):o}function gE(o,l,f){return o&&o.length&&l&&l.length?uc(o,l,n,f):o}var hE=wr(function(o,l){var f=o==null?0:o.length,C=nc(o,l);return af(o,Nt(l,function(O){return Or(O,f)?+O:O}).sort(pf)),C});function vE(o,l){var f=[];if(!(o&&o.length))return f;var C=-1,O=[],A=o.length;for(l=Fe(l,3);++C<A;){var M=o[C];l(M,C,o)&&(f.push(M),O.push(C))}return af(o,O),f}function Nc(o){return o==null?o:c1.call(o)}function pE(o,l,f){var C=o==null?0:o.length;return C?(f&&typeof f!="number"&&cn(o,l,f)?(l=0,f=C):(l=l==null?0:Ze(l),f=f===n?C:Ze(f)),Yn(o,l,f)):[]}function mE(o,l){return sa(o,l)}function EE(o,l,f){return fc(o,l,Fe(f,2))}function CE(o,l){var f=o==null?0:o.length;if(f){var C=sa(o,l);if(C<f&&rr(o[C],l))return C}return-1}function IE(o,l){return sa(o,l,!0)}function bE(o,l,f){return fc(o,l,Fe(f,2),!0)}function wE(o,l){var f=o==null?0:o.length;if(f){var C=sa(o,l,!0)-1;if(rr(o[C],l))return C}return-1}function OE(o){return o&&o.length?cf(o):[]}function yE(o,l){return o&&o.length?cf(o,Fe(l,2)):[]}function LE(o){var l=o==null?0:o.length;return l?Yn(o,1,l):[]}function AE(o,l,f){return o&&o.length?(l=f||l===n?1:Ze(l),Yn(o,0,l<0?0:l)):[]}function SE(o,l,f){var C=o==null?0:o.length;return C?(l=f||l===n?1:Ze(l),l=C-l,Yn(o,l<0?0:l,C)):[]}function xE(o,l){return o&&o.length?aa(o,Fe(l,3),!1,!0):[]}function NE(o,l){return o&&o.length?aa(o,Fe(l,3)):[]}var TE=Je(function(o){return Kr(Vt(o,1,Mt,!0))}),DE=Je(function(o){var l=jn(o);return Mt(l)&&(l=n),Kr(Vt(o,1,Mt,!0),Fe(l,2))}),RE=Je(function(o){var l=jn(o);return l=typeof l=="function"?l:n,Kr(Vt(o,1,Mt,!0),n,l)});function kE(o){return o&&o.length?Kr(o):[]}function GE(o,l){return o&&o.length?Kr(o,Fe(l,2)):[]}function ME(o,l){return l=typeof l=="function"?l:n,o&&o.length?Kr(o,n,l):[]}function Tc(o){if(!(o&&o.length))return[];var l=0;return o=Wr(o,function(f){if(Mt(f))return l=Bt(f.length,l),!0}),Kl(l,function(f){return Nt(o,Yl(f))})}function Xf(o,l){if(!(o&&o.length))return[];var f=Tc(o);return l==null?f:Nt(f,function(C){return An(l,n,C)})}var UE=Je(function(o,l){return Mt(o)?Bo(o,l):[]}),$E=Je(function(o){return hc(Wr(o,Mt))}),FE=Je(function(o){var l=jn(o);return Mt(l)&&(l=n),hc(Wr(o,Mt),Fe(l,2))}),HE=Je(function(o){var l=jn(o);return l=typeof l=="function"?l:n,hc(Wr(o,Mt),n,l)}),PE=Je(Tc);function BE(o,l){return ff(o||[],l||[],Po)}function WE(o,l){return ff(o||[],l||[],Yo)}var zE=Je(function(o){var l=o.length,f=l>1?o[l-1]:n;return f=typeof f=="function"?(o.pop(),f):n,Xf(o,f)});function qf(o){var l=y(o);return l.__chain__=!0,l}function YE(o,l){return l(o),o}function va(o,l){return l(o)}var jE=wr(function(o){var l=o.length,f=l?o[0]:0,C=this.__wrapped__,O=function(A){return nc(A,o)};return l>1||this.__actions__.length||!(C instanceof it)||!Or(f)?this.thru(O):(C=C.slice(f,+f+(l?1:0)),C.__actions__.push({func:va,args:[O],thisArg:n}),new Wn(C,this.__chain__).thru(function(A){return l&&!A.length&&A.push(n),A}))});function VE(){return qf(this)}function KE(){return new Wn(this.value(),this.__chain__)}function XE(){this.__values__===n&&(this.__values__=ug(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function qE(){return this}function ZE(o){for(var l,f=this;f instanceof ta;){var C=Wf(f);C.__index__=0,C.__values__=n,l?O.__wrapped__=C:l=C;var O=C;f=f.__wrapped__}return O.__wrapped__=o,l}function QE(){var o=this.__wrapped__;if(o instanceof it){var l=o;return this.__actions__.length&&(l=new it(this)),l=l.reverse(),l.__actions__.push({func:va,args:[Nc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(Nc)}function JE(){return _f(this.__wrapped__,this.__actions__)}var eC=la(function(o,l,f){mt.call(o,f)?++o[f]:Ir(o,f,1)});function tC(o,l,f){var C=Ke(o)?O_:Y1;return f&&cn(o,l,f)&&(l=n),C(o,Fe(l,3))}function nC(o,l){var f=Ke(o)?Wr:K_;return f(o,Fe(l,3))}var rC=wf(zf),iC=wf(Yf);function oC(o,l){return Vt(pa(o,l),1)}function sC(o,l){return Vt(pa(o,l),st)}function aC(o,l,f){return f=f===n?1:Ze(f),Vt(pa(o,l),f)}function Zf(o,l){var f=Ke(o)?Pn:Vr;return f(o,Fe(l,3))}function Qf(o,l){var f=Ke(o)?Lm:V_;return f(o,Fe(l,3))}var lC=la(function(o,l,f){mt.call(o,f)?o[f].push(l):Ir(o,f,[l])});function cC(o,l,f,C){o=Cn(o)?o:no(o),f=f&&!C?Ze(f):0;var O=o.length;return f<0&&(f=Bt(O+f,0)),ba(o)?f<=O&&o.indexOf(l,f)>-1:!!O&&zi(o,l,f)>-1}var uC=Je(function(o,l,f){var C=-1,O=typeof l=="function",A=Cn(o)?q(o.length):[];return Vr(o,function(M){A[++C]=O?An(l,M,f):Wo(M,l,f)}),A}),dC=la(function(o,l,f){Ir(o,f,l)});function pa(o,l){var f=Ke(o)?Nt:ef;return f(o,Fe(l,3))}function _C(o,l,f,C){return o==null?[]:(Ke(l)||(l=l==null?[]:[l]),f=C?n:f,Ke(f)||(f=f==null?[]:[f]),of(o,l,f))}var fC=la(function(o,l,f){o[f?0:1].push(l)},function(){return[[],[]]});function gC(o,l,f){var C=Ke(o)?Wl:S_,O=arguments.length<3;return C(o,Fe(l,4),f,O,Vr)}function hC(o,l,f){var C=Ke(o)?Am:S_,O=arguments.length<3;return C(o,Fe(l,4),f,O,V_)}function vC(o,l){var f=Ke(o)?Wr:K_;return f(o,Ca(Fe(l,3)))}function pC(o){var l=Ke(o)?W_:c0;return l(o)}function mC(o,l,f){(f?cn(o,l,f):l===n)?l=1:l=Ze(l);var C=Ke(o)?H1:u0;return C(o,l)}function EC(o){var l=Ke(o)?P1:_0;return l(o)}function CC(o){if(o==null)return 0;if(Cn(o))return ba(o)?ji(o):o.length;var l=en(o);return l==Ee||l==er?o.size:lc(o).length}function IC(o,l,f){var C=Ke(o)?zl:f0;return f&&cn(o,l,f)&&(l=n),C(o,Fe(l,3))}var bC=Je(function(o,l){if(o==null)return[];var f=l.length;return f>1&&cn(o,l[0],l[1])?l=[]:f>2&&cn(l[0],l[1],l[2])&&(l=[l[0]]),of(o,Vt(l,1),[])}),ma=n1||function(){return jt.Date.now()};function wC(o,l){if(typeof l!="function")throw new Bn(a);return o=Ze(o),function(){if(--o<1)return l.apply(this,arguments)}}function Jf(o,l,f){return l=f?n:l,l=o&&l==null?o.length:l,br(o,W,n,n,n,n,l)}function eg(o,l){var f;if(typeof l!="function")throw new Bn(a);return o=Ze(o),function(){return--o>0&&(f=l.apply(this,arguments)),o<=1&&(l=n),f}}var Dc=Je(function(o,l,f){var C=b;if(f.length){var O=Yr(f,eo(Dc));C|=U}return br(o,C,l,f,O)}),tg=Je(function(o,l,f){var C=b|w;if(f.length){var O=Yr(f,eo(tg));C|=U}return br(l,C,o,f,O)});function ng(o,l,f){l=f?n:l;var C=br(o,R,n,n,n,n,n,l);return C.placeholder=ng.placeholder,C}function rg(o,l,f){l=f?n:l;var C=br(o,k,n,n,n,n,n,l);return C.placeholder=rg.placeholder,C}function ig(o,l,f){var C,O,A,M,B,V,oe=0,se=!1,_e=!1,be=!0;if(typeof o!="function")throw new Bn(a);l=Vn(l)||0,Tt(f)&&(se=!!f.leading,_e="maxWait"in f,A=_e?Bt(Vn(f.maxWait)||0,l):A,be="trailing"in f?!!f.trailing:be);function ke(Ut){var ir=C,Ar=O;return C=O=n,oe=Ut,M=o.apply(Ar,ir),M}function He(Ut){return oe=Ut,B=Ko(nt,l),se?ke(Ut):M}function Qe(Ut){var ir=Ut-V,Ar=Ut-oe,wg=l-ir;return _e?Jt(wg,A-Ar):wg}function Pe(Ut){var ir=Ut-V,Ar=Ut-oe;return V===n||ir>=l||ir<0||_e&&Ar>=A}function nt(){var Ut=ma();if(Pe(Ut))return at(Ut);B=Ko(nt,Qe(Ut))}function at(Ut){return B=n,be&&C?ke(Ut):(C=O=n,M)}function Tn(){B!==n&&gf(B),oe=0,C=V=O=B=n}function un(){return B===n?M:at(ma())}function Dn(){var Ut=ma(),ir=Pe(Ut);if(C=arguments,O=this,V=Ut,ir){if(B===n)return He(V);if(_e)return gf(B),B=Ko(nt,l),ke(V)}return B===n&&(B=Ko(nt,l)),M}return Dn.cancel=Tn,Dn.flush=un,Dn}var OC=Je(function(o,l){return j_(o,1,l)}),yC=Je(function(o,l,f){return j_(o,Vn(l)||0,f)});function LC(o){return br(o,J)}function Ea(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Bn(a);var f=function(){var C=arguments,O=l?l.apply(this,C):C[0],A=f.cache;if(A.has(O))return A.get(O);var M=o.apply(this,C);return f.cache=A.set(O,M)||A,M};return f.cache=new(Ea.Cache||Cr),f}Ea.Cache=Cr;function Ca(o){if(typeof o!="function")throw new Bn(a);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function AC(o){return eg(2,o)}var SC=g0(function(o,l){l=l.length==1&&Ke(l[0])?Nt(l[0],Sn(Fe())):Nt(Vt(l,1),Sn(Fe()));var f=l.length;return Je(function(C){for(var O=-1,A=Jt(C.length,f);++O<A;)C[O]=l[O].call(this,C[O]);return An(o,this,C)})}),Rc=Je(function(o,l){var f=Yr(l,eo(Rc));return br(o,U,n,l,f)}),og=Je(function(o,l){var f=Yr(l,eo(og));return br(o,P,n,l,f)}),xC=wr(function(o,l){return br(o,X,n,n,n,l)});function NC(o,l){if(typeof o!="function")throw new Bn(a);return l=l===n?l:Ze(l),Je(o,l)}function TC(o,l){if(typeof o!="function")throw new Bn(a);return l=l==null?0:Bt(Ze(l),0),Je(function(f){var C=f[l],O=qr(f,0,l);return C&&zr(O,C),An(o,this,O)})}function DC(o,l,f){var C=!0,O=!0;if(typeof o!="function")throw new Bn(a);return Tt(f)&&(C="leading"in f?!!f.leading:C,O="trailing"in f?!!f.trailing:O),ig(o,l,{leading:C,maxWait:l,trailing:O})}function RC(o){return Jf(o,1)}function kC(o,l){return Rc(pc(l),o)}function GC(){if(!arguments.length)return[];var o=arguments[0];return Ke(o)?o:[o]}function MC(o){return zn(o,m)}function UC(o,l){return l=typeof l=="function"?l:n,zn(o,m,l)}function $C(o){return zn(o,g|m)}function FC(o,l){return l=typeof l=="function"?l:n,zn(o,g|m,l)}function HC(o,l){return l==null||Y_(o,l,Wt(l))}function rr(o,l){return o===l||o!==o&&l!==l}var PC=_a(oc),BC=_a(function(o,l){return o>=l}),wi=Z_(function(){return arguments}())?Z_:function(o){return kt(o)&&mt.call(o,"callee")&&!U_.call(o,"callee")},Ke=q.isArray,WC=m_?Sn(m_):Z1;function Cn(o){return o!=null&&Ia(o.length)&&!yr(o)}function Mt(o){return kt(o)&&Cn(o)}function zC(o){return o===!0||o===!1||kt(o)&&ln(o)==or}var Zr=i1||zc,YC=E_?Sn(E_):Q1;function jC(o){return kt(o)&&o.nodeType===1&&!Xo(o)}function VC(o){if(o==null)return!0;if(Cn(o)&&(Ke(o)||typeof o=="string"||typeof o.splice=="function"||Zr(o)||to(o)||wi(o)))return!o.length;var l=en(o);if(l==Ee||l==er)return!o.size;if(Vo(o))return!lc(o).length;for(var f in o)if(mt.call(o,f))return!1;return!0}function KC(o,l){return zo(o,l)}function XC(o,l,f){f=typeof f=="function"?f:n;var C=f?f(o,l):n;return C===n?zo(o,l,n,f):!!C}function kc(o){if(!kt(o))return!1;var l=ln(o);return l==Br||l==Pi||typeof o.message=="string"&&typeof o.name=="string"&&!Xo(o)}function qC(o){return typeof o=="number"&&F_(o)}function yr(o){if(!Tt(o))return!1;var l=ln(o);return l==Rt||l==Ne||l==fi||l==wl}function sg(o){return typeof o=="number"&&o==Ze(o)}function Ia(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Se}function Tt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function kt(o){return o!=null&&typeof o=="object"}var ag=C_?Sn(C_):e0;function ZC(o,l){return o===l||ac(o,l,Oc(l))}function QC(o,l,f){return f=typeof f=="function"?f:n,ac(o,l,Oc(l),f)}function JC(o){return lg(o)&&o!=+o}function eI(o){if(U0(o))throw new Ve(s);return Q_(o)}function tI(o){return o===null}function nI(o){return o==null}function lg(o){return typeof o=="number"||kt(o)&&ln(o)==Re}function Xo(o){if(!kt(o)||ln(o)!=yt)return!1;var l=Ks(o);if(l===null)return!0;var f=mt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&zs.call(f)==Qm}var Gc=I_?Sn(I_):t0;function rI(o){return sg(o)&&o>=-9007199254740991&&o<=Se}var cg=b_?Sn(b_):n0;function ba(o){return typeof o=="string"||!Ke(o)&&kt(o)&&ln(o)==Do}function Nn(o){return typeof o=="symbol"||kt(o)&&ln(o)==Gs}var to=w_?Sn(w_):r0;function iI(o){return o===n}function oI(o){return kt(o)&&en(o)==Ro}function sI(o){return kt(o)&&ln(o)==bp}var aI=_a(cc),lI=_a(function(o,l){return o<=l});function ug(o){if(!o)return[];if(Cn(o))return ba(o)?tr(o):En(o);if(Mo&&o[Mo])return Hm(o[Mo]());var l=en(o),f=l==Ee?ql:l==er?Ps:no;return f(o)}function Lr(o){if(!o)return o===0?o:0;if(o=Vn(o),o===st||o===-1/0){var l=o<0?-1:1;return l*we}return o===o?o:0}function Ze(o){var l=Lr(o),f=l%1;return l===l?f?l-f:l:0}function dg(o){return o?Ei(Ze(o),0,ct):0}function Vn(o){if(typeof o=="number")return o;if(Nn(o))return vt;if(Tt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Tt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=x_(o);var f=Wp.test(o);return f||Yp.test(o)?wm(o.slice(2),f?2:8):Bp.test(o)?vt:+o}function _g(o){return ar(o,In(o))}function cI(o){return o?Ei(Ze(o),-9007199254740991,Se):o===0?o:0}function pt(o){return o==null?"":xn(o)}var uI=Qi(function(o,l){if(Vo(l)||Cn(l)){ar(l,Wt(l),o);return}for(var f in l)mt.call(l,f)&&Po(o,f,l[f])}),fg=Qi(function(o,l){ar(l,In(l),o)}),wa=Qi(function(o,l,f,C){ar(l,In(l),o,C)}),dI=Qi(function(o,l,f,C){ar(l,Wt(l),o,C)}),_I=wr(nc);function fI(o,l){var f=Zi(o);return l==null?f:z_(f,l)}var gI=Je(function(o,l){o=It(o);var f=-1,C=l.length,O=C>2?l[2]:n;for(O&&cn(l[0],l[1],O)&&(C=1);++f<C;)for(var A=l[f],M=In(A),B=-1,V=M.length;++B<V;){var oe=M[B],se=o[oe];(se===n||rr(se,Ki[oe])&&!mt.call(o,oe))&&(o[oe]=A[oe])}return o}),hI=Je(function(o){return o.push(n,Nf),An(gg,n,o)});function vI(o,l){return y_(o,Fe(l,3),sr)}function pI(o,l){return y_(o,Fe(l,3),ic)}function mI(o,l){return o==null?o:rc(o,Fe(l,3),In)}function EI(o,l){return o==null?o:X_(o,Fe(l,3),In)}function CI(o,l){return o&&sr(o,Fe(l,3))}function II(o,l){return o&&ic(o,Fe(l,3))}function bI(o){return o==null?[]:ia(o,Wt(o))}function wI(o){return o==null?[]:ia(o,In(o))}function Mc(o,l,f){var C=o==null?n:Ci(o,l);return C===n?f:C}function OI(o,l){return o!=null&&Rf(o,l,V1)}function Uc(o,l){return o!=null&&Rf(o,l,K1)}var yI=yf(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Ys.call(l)),o[l]=f},Fc(bn)),LI=yf(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Ys.call(l)),mt.call(o,l)?o[l].push(f):o[l]=[f]},Fe),AI=Je(Wo);function Wt(o){return Cn(o)?B_(o):lc(o)}function In(o){return Cn(o)?B_(o,!0):i0(o)}function SI(o,l){var f={};return l=Fe(l,3),sr(o,function(C,O,A){Ir(f,l(C,O,A),C)}),f}function xI(o,l){var f={};return l=Fe(l,3),sr(o,function(C,O,A){Ir(f,O,l(C,O,A))}),f}var NI=Qi(function(o,l,f){oa(o,l,f)}),gg=Qi(function(o,l,f,C){oa(o,l,f,C)}),TI=wr(function(o,l){var f={};if(o==null)return f;var C=!1;l=Nt(l,function(A){return A=Xr(A,o),C||(C=A.length>1),A}),ar(o,bc(o),f),C&&(f=zn(f,g|h|m,y0));for(var O=l.length;O--;)gc(f,l[O]);return f});function DI(o,l){return hg(o,Ca(Fe(l)))}var RI=wr(function(o,l){return o==null?{}:s0(o,l)});function hg(o,l){if(o==null)return{};var f=Nt(bc(o),function(C){return[C]});return l=Fe(l),sf(o,f,function(C,O){return l(C,O[0])})}function kI(o,l,f){l=Xr(l,o);var C=-1,O=l.length;for(O||(O=1,o=n);++C<O;){var A=o==null?n:o[lr(l[C])];A===n&&(C=O,A=f),o=yr(A)?A.call(o):A}return o}function GI(o,l,f){return o==null?o:Yo(o,l,f)}function MI(o,l,f,C){return C=typeof C=="function"?C:n,o==null?o:Yo(o,l,f,C)}var vg=Sf(Wt),pg=Sf(In);function UI(o,l,f){var C=Ke(o),O=C||Zr(o)||to(o);if(l=Fe(l,4),f==null){var A=o&&o.constructor;O?f=C?new A:[]:Tt(o)?f=yr(A)?Zi(Ks(o)):{}:f={}}return(O?Pn:sr)(o,function(M,B,V){return l(f,M,B,V)}),f}function $I(o,l){return o==null?!0:gc(o,l)}function FI(o,l,f){return o==null?o:df(o,l,pc(f))}function HI(o,l,f,C){return C=typeof C=="function"?C:n,o==null?o:df(o,l,pc(f),C)}function no(o){return o==null?[]:Xl(o,Wt(o))}function PI(o){return o==null?[]:Xl(o,In(o))}function BI(o,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Vn(f),f=f===f?f:0),l!==n&&(l=Vn(l),l=l===l?l:0),Ei(Vn(o),l,f)}function WI(o,l,f){return l=Lr(l),f===n?(f=l,l=0):f=Lr(f),o=Vn(o),X1(o,l,f)}function zI(o,l,f){if(f&&typeof f!="boolean"&&cn(o,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof o=="boolean"&&(f=o,o=n)),o===n&&l===n?(o=0,l=1):(o=Lr(o),l===n?(l=o,o=0):l=Lr(l)),o>l){var C=o;o=l,l=C}if(f||o%1||l%1){var O=H_();return Jt(o+O*(l-o+bm("1e-"+((O+"").length-1))),l)}return dc(o,l)}var YI=Ji(function(o,l,f){return l=l.toLowerCase(),o+(f?mg(l):l)});function mg(o){return $c(pt(o).toLowerCase())}function Eg(o){return o=pt(o),o&&o.replace(Vp,Gm).replace(_m,"")}function jI(o,l,f){o=pt(o),l=xn(l);var C=o.length;f=f===n?C:Ei(Ze(f),0,C);var O=f;return f-=l.length,f>=0&&o.slice(f,O)==l}function VI(o){return o=pt(o),o&&Ap.test(o)?o.replace(Xd,Mm):o}function KI(o){return o=pt(o),o&&Rp.test(o)?o.replace(Rl,"\\$&"):o}var XI=Ji(function(o,l,f){return o+(f?"-":"")+l.toLowerCase()}),qI=Ji(function(o,l,f){return o+(f?" ":"")+l.toLowerCase()}),ZI=bf("toLowerCase");function QI(o,l,f){o=pt(o),l=Ze(l);var C=l?ji(o):0;if(!l||C>=l)return o;var O=(l-C)/2;return da(Qs(O),f)+o+da(Zs(O),f)}function JI(o,l,f){o=pt(o),l=Ze(l);var C=l?ji(o):0;return l&&C<l?o+da(l-C,f):o}function eb(o,l,f){o=pt(o),l=Ze(l);var C=l?ji(o):0;return l&&C<l?da(l-C,f)+o:o}function tb(o,l,f){return f||l==null?l=0:l&&(l=+l),l1(pt(o).replace(kl,""),l||0)}function nb(o,l,f){return(f?cn(o,l,f):l===n)?l=1:l=Ze(l),_c(pt(o),l)}function rb(){var o=arguments,l=pt(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var ib=Ji(function(o,l,f){return o+(f?"_":"")+l.toLowerCase()});function ob(o,l,f){return f&&typeof f!="number"&&cn(o,l,f)&&(l=f=n),f=f===n?ct:f>>>0,f?(o=pt(o),o&&(typeof l=="string"||l!=null&&!Gc(l))&&(l=xn(l),!l&&Yi(o))?qr(tr(o),0,f):o.split(l,f)):[]}var sb=Ji(function(o,l,f){return o+(f?" ":"")+$c(l)});function ab(o,l,f){return o=pt(o),f=f==null?0:Ei(Ze(f),0,o.length),l=xn(l),o.slice(f,f+l.length)==l}function lb(o,l,f){var C=y.templateSettings;f&&cn(o,l,f)&&(l=n),o=pt(o),l=wa({},l,C,xf);var O=wa({},l.imports,C.imports,xf),A=Wt(O),M=Xl(O,A),B,V,oe=0,se=l.interpolate||Ms,_e="__p += '",be=Zl((l.escape||Ms).source+"|"+se.source+"|"+(se===qd?Pp:Ms).source+"|"+(l.evaluate||Ms).source+"|$","g"),ke="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++pm+"]")+`
`;o.replace(be,function(Pe,nt,at,Tn,un,Dn){return at||(at=Tn),_e+=o.slice(oe,Dn).replace(Kp,Um),nt&&(B=!0,_e+=`' +
__e(`+nt+`) +
'`),un&&(V=!0,_e+=`';
`+un+`;
__p += '`),at&&(_e+=`' +
((__t = (`+at+`)) == null ? '' : __t) +
'`),oe=Dn+Pe.length,Pe}),_e+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)_e=`with (obj) {
`+_e+`
}
`;else if(Fp.test(He))throw new Ve(c);_e=(V?_e.replace(wp,""):_e).replace(Op,"$1").replace(yp,"$1;"),_e="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var Qe=Ig(function(){return ft(A,ke+"return "+_e).apply(n,M)});if(Qe.source=_e,kc(Qe))throw Qe;return Qe}function cb(o){return pt(o).toLowerCase()}function ub(o){return pt(o).toUpperCase()}function db(o,l,f){if(o=pt(o),o&&(f||l===n))return x_(o);if(!o||!(l=xn(l)))return o;var C=tr(o),O=tr(l),A=N_(C,O),M=T_(C,O)+1;return qr(C,A,M).join("")}function _b(o,l,f){if(o=pt(o),o&&(f||l===n))return o.slice(0,R_(o)+1);if(!o||!(l=xn(l)))return o;var C=tr(o),O=T_(C,tr(l))+1;return qr(C,0,O).join("")}function fb(o,l,f){if(o=pt(o),o&&(f||l===n))return o.replace(kl,"");if(!o||!(l=xn(l)))return o;var C=tr(o),O=N_(C,tr(l));return qr(C,O).join("")}function gb(o,l){var f=ce,C=Q;if(Tt(l)){var O="separator"in l?l.separator:O;f="length"in l?Ze(l.length):f,C="omission"in l?xn(l.omission):C}o=pt(o);var A=o.length;if(Yi(o)){var M=tr(o);A=M.length}if(f>=A)return o;var B=f-ji(C);if(B<1)return C;var V=M?qr(M,0,B).join(""):o.slice(0,B);if(O===n)return V+C;if(M&&(B+=V.length-B),Gc(O)){if(o.slice(B).search(O)){var oe,se=V;for(O.global||(O=Zl(O.source,pt(Zd.exec(O))+"g")),O.lastIndex=0;oe=O.exec(se);)var _e=oe.index;V=V.slice(0,_e===n?B:_e)}}else if(o.indexOf(xn(O),B)!=B){var be=V.lastIndexOf(O);be>-1&&(V=V.slice(0,be))}return V+C}function hb(o){return o=pt(o),o&&Lp.test(o)?o.replace(Kd,zm):o}var vb=Ji(function(o,l,f){return o+(f?" ":"")+l.toUpperCase()}),$c=bf("toUpperCase");function Cg(o,l,f){return o=pt(o),l=f?n:l,l===n?Fm(o)?Vm(o):Nm(o):o.match(l)||[]}var Ig=Je(function(o,l){try{return An(o,n,l)}catch(f){return kc(f)?f:new Ve(f)}}),pb=wr(function(o,l){return Pn(l,function(f){f=lr(f),Ir(o,f,Dc(o[f],o))}),o});function mb(o){var l=o==null?0:o.length,f=Fe();return o=l?Nt(o,function(C){if(typeof C[1]!="function")throw new Bn(a);return[f(C[0]),C[1]]}):[],Je(function(C){for(var O=-1;++O<l;){var A=o[O];if(An(A[0],this,C))return An(A[1],this,C)}})}function Eb(o){return z1(zn(o,g))}function Fc(o){return function(){return o}}function Cb(o,l){return o==null||o!==o?l:o}var Ib=Of(),bb=Of(!0);function bn(o){return o}function Hc(o){return J_(typeof o=="function"?o:zn(o,g))}function wb(o){return tf(zn(o,g))}function Ob(o,l){return nf(o,zn(l,g))}var yb=Je(function(o,l){return function(f){return Wo(f,o,l)}}),Lb=Je(function(o,l){return function(f){return Wo(o,f,l)}});function Pc(o,l,f){var C=Wt(l),O=ia(l,C);f==null&&!(Tt(l)&&(O.length||!C.length))&&(f=l,l=o,o=this,O=ia(l,Wt(l)));var A=!(Tt(f)&&"chain"in f)||!!f.chain,M=yr(o);return Pn(O,function(B){var V=l[B];o[B]=V,M&&(o.prototype[B]=function(){var oe=this.__chain__;if(A||oe){var se=o(this.__wrapped__),_e=se.__actions__=En(this.__actions__);return _e.push({func:V,args:arguments,thisArg:o}),se.__chain__=oe,se}return V.apply(o,zr([this.value()],arguments))})}),o}function Ab(){return jt._===this&&(jt._=Jm),this}function Bc(){}function Sb(o){return o=Ze(o),Je(function(l){return rf(l,o)})}var xb=Ec(Nt),Nb=Ec(O_),Tb=Ec(zl);function bg(o){return Lc(o)?Yl(lr(o)):a0(o)}function Db(o){return function(l){return o==null?n:Ci(o,l)}}var Rb=Lf(),kb=Lf(!0);function Wc(){return[]}function zc(){return!1}function Gb(){return{}}function Mb(){return""}function Ub(){return!0}function $b(o,l){if(o=Ze(o),o<1||o>Se)return[];var f=ct,C=Jt(o,ct);l=Fe(l),o-=ct;for(var O=Kl(C,l);++f<o;)l(f);return O}function Fb(o){return Ke(o)?Nt(o,lr):Nn(o)?[o]:En(Bf(pt(o)))}function Hb(o){var l=++Zm;return pt(o)+l}var Pb=ua(function(o,l){return o+l},0),Bb=Cc("ceil"),Wb=ua(function(o,l){return o/l},1),zb=Cc("floor");function Yb(o){return o&&o.length?ra(o,bn,oc):n}function jb(o,l){return o&&o.length?ra(o,Fe(l,2),oc):n}function Vb(o){return A_(o,bn)}function Kb(o,l){return A_(o,Fe(l,2))}function Xb(o){return o&&o.length?ra(o,bn,cc):n}function qb(o,l){return o&&o.length?ra(o,Fe(l,2),cc):n}var Zb=ua(function(o,l){return o*l},1),Qb=Cc("round"),Jb=ua(function(o,l){return o-l},0);function ew(o){return o&&o.length?Vl(o,bn):0}function tw(o,l){return o&&o.length?Vl(o,Fe(l,2)):0}return y.after=wC,y.ary=Jf,y.assign=uI,y.assignIn=fg,y.assignInWith=wa,y.assignWith=dI,y.at=_I,y.before=eg,y.bind=Dc,y.bindAll=pb,y.bindKey=tg,y.castArray=GC,y.chain=qf,y.chunk=z0,y.compact=Y0,y.concat=j0,y.cond=mb,y.conforms=Eb,y.constant=Fc,y.countBy=eC,y.create=fI,y.curry=ng,y.curryRight=rg,y.debounce=ig,y.defaults=gI,y.defaultsDeep=hI,y.defer=OC,y.delay=yC,y.difference=V0,y.differenceBy=K0,y.differenceWith=X0,y.drop=q0,y.dropRight=Z0,y.dropRightWhile=Q0,y.dropWhile=J0,y.fill=eE,y.filter=nC,y.flatMap=oC,y.flatMapDeep=sC,y.flatMapDepth=aC,y.flatten=jf,y.flattenDeep=tE,y.flattenDepth=nE,y.flip=LC,y.flow=Ib,y.flowRight=bb,y.fromPairs=rE,y.functions=bI,y.functionsIn=wI,y.groupBy=lC,y.initial=oE,y.intersection=sE,y.intersectionBy=aE,y.intersectionWith=lE,y.invert=yI,y.invertBy=LI,y.invokeMap=uC,y.iteratee=Hc,y.keyBy=dC,y.keys=Wt,y.keysIn=In,y.map=pa,y.mapKeys=SI,y.mapValues=xI,y.matches=wb,y.matchesProperty=Ob,y.memoize=Ea,y.merge=NI,y.mergeWith=gg,y.method=yb,y.methodOf=Lb,y.mixin=Pc,y.negate=Ca,y.nthArg=Sb,y.omit=TI,y.omitBy=DI,y.once=AC,y.orderBy=_C,y.over=xb,y.overArgs=SC,y.overEvery=Nb,y.overSome=Tb,y.partial=Rc,y.partialRight=og,y.partition=fC,y.pick=RI,y.pickBy=hg,y.property=bg,y.propertyOf=Db,y.pull=_E,y.pullAll=Kf,y.pullAllBy=fE,y.pullAllWith=gE,y.pullAt=hE,y.range=Rb,y.rangeRight=kb,y.rearg=xC,y.reject=vC,y.remove=vE,y.rest=NC,y.reverse=Nc,y.sampleSize=mC,y.set=GI,y.setWith=MI,y.shuffle=EC,y.slice=pE,y.sortBy=bC,y.sortedUniq=OE,y.sortedUniqBy=yE,y.split=ob,y.spread=TC,y.tail=LE,y.take=AE,y.takeRight=SE,y.takeRightWhile=xE,y.takeWhile=NE,y.tap=YE,y.throttle=DC,y.thru=va,y.toArray=ug,y.toPairs=vg,y.toPairsIn=pg,y.toPath=Fb,y.toPlainObject=_g,y.transform=UI,y.unary=RC,y.union=TE,y.unionBy=DE,y.unionWith=RE,y.uniq=kE,y.uniqBy=GE,y.uniqWith=ME,y.unset=$I,y.unzip=Tc,y.unzipWith=Xf,y.update=FI,y.updateWith=HI,y.values=no,y.valuesIn=PI,y.without=UE,y.words=Cg,y.wrap=kC,y.xor=$E,y.xorBy=FE,y.xorWith=HE,y.zip=PE,y.zipObject=BE,y.zipObjectDeep=WE,y.zipWith=zE,y.entries=vg,y.entriesIn=pg,y.extend=fg,y.extendWith=wa,Pc(y,y),y.add=Pb,y.attempt=Ig,y.camelCase=YI,y.capitalize=mg,y.ceil=Bb,y.clamp=BI,y.clone=MC,y.cloneDeep=$C,y.cloneDeepWith=FC,y.cloneWith=UC,y.conformsTo=HC,y.deburr=Eg,y.defaultTo=Cb,y.divide=Wb,y.endsWith=jI,y.eq=rr,y.escape=VI,y.escapeRegExp=KI,y.every=tC,y.find=rC,y.findIndex=zf,y.findKey=vI,y.findLast=iC,y.findLastIndex=Yf,y.findLastKey=pI,y.floor=zb,y.forEach=Zf,y.forEachRight=Qf,y.forIn=mI,y.forInRight=EI,y.forOwn=CI,y.forOwnRight=II,y.get=Mc,y.gt=PC,y.gte=BC,y.has=OI,y.hasIn=Uc,y.head=Vf,y.identity=bn,y.includes=cC,y.indexOf=iE,y.inRange=WI,y.invoke=AI,y.isArguments=wi,y.isArray=Ke,y.isArrayBuffer=WC,y.isArrayLike=Cn,y.isArrayLikeObject=Mt,y.isBoolean=zC,y.isBuffer=Zr,y.isDate=YC,y.isElement=jC,y.isEmpty=VC,y.isEqual=KC,y.isEqualWith=XC,y.isError=kc,y.isFinite=qC,y.isFunction=yr,y.isInteger=sg,y.isLength=Ia,y.isMap=ag,y.isMatch=ZC,y.isMatchWith=QC,y.isNaN=JC,y.isNative=eI,y.isNil=nI,y.isNull=tI,y.isNumber=lg,y.isObject=Tt,y.isObjectLike=kt,y.isPlainObject=Xo,y.isRegExp=Gc,y.isSafeInteger=rI,y.isSet=cg,y.isString=ba,y.isSymbol=Nn,y.isTypedArray=to,y.isUndefined=iI,y.isWeakMap=oI,y.isWeakSet=sI,y.join=cE,y.kebabCase=XI,y.last=jn,y.lastIndexOf=uE,y.lowerCase=qI,y.lowerFirst=ZI,y.lt=aI,y.lte=lI,y.max=Yb,y.maxBy=jb,y.mean=Vb,y.meanBy=Kb,y.min=Xb,y.minBy=qb,y.stubArray=Wc,y.stubFalse=zc,y.stubObject=Gb,y.stubString=Mb,y.stubTrue=Ub,y.multiply=Zb,y.nth=dE,y.noConflict=Ab,y.noop=Bc,y.now=ma,y.pad=QI,y.padEnd=JI,y.padStart=eb,y.parseInt=tb,y.random=zI,y.reduce=gC,y.reduceRight=hC,y.repeat=nb,y.replace=rb,y.result=kI,y.round=Qb,y.runInContext=j,y.sample=pC,y.size=CC,y.snakeCase=ib,y.some=IC,y.sortedIndex=mE,y.sortedIndexBy=EE,y.sortedIndexOf=CE,y.sortedLastIndex=IE,y.sortedLastIndexBy=bE,y.sortedLastIndexOf=wE,y.startCase=sb,y.startsWith=ab,y.subtract=Jb,y.sum=ew,y.sumBy=tw,y.template=lb,y.times=$b,y.toFinite=Lr,y.toInteger=Ze,y.toLength=dg,y.toLower=cb,y.toNumber=Vn,y.toSafeInteger=cI,y.toString=pt,y.toUpper=ub,y.trim=db,y.trimEnd=_b,y.trimStart=fb,y.truncate=gb,y.unescape=hb,y.uniqueId=Hb,y.upperCase=vb,y.upperFirst=$c,y.each=Zf,y.eachRight=Qf,y.first=Vf,Pc(y,function(){var o={};return sr(y,function(l,f){mt.call(y.prototype,f)||(o[f]=l)}),o}(),{chain:!1}),y.VERSION=r,Pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){y[o].placeholder=y}),Pn(["drop","take"],function(o,l){it.prototype[o]=function(f){f=f===n?1:Bt(Ze(f),0);var C=this.__filtered__&&!l?new it(this):this.clone();return C.__filtered__?C.__takeCount__=Jt(f,C.__takeCount__):C.__views__.push({size:Jt(f,ct),type:o+(C.__dir__<0?"Right":"")}),C},it.prototype[o+"Right"]=function(f){return this.reverse()[o](f).reverse()}}),Pn(["filter","map","takeWhile"],function(o,l){var f=l+1,C=f==me||f==De;it.prototype[o]=function(O){var A=this.clone();return A.__iteratees__.push({iteratee:Fe(O,3),type:f}),A.__filtered__=A.__filtered__||C,A}}),Pn(["head","last"],function(o,l){var f="take"+(l?"Right":"");it.prototype[o]=function(){return this[f](1).value()[0]}}),Pn(["initial","tail"],function(o,l){var f="drop"+(l?"":"Right");it.prototype[o]=function(){return this.__filtered__?new it(this):this[f](1)}}),it.prototype.compact=function(){return this.filter(bn)},it.prototype.find=function(o){return this.filter(o).head()},it.prototype.findLast=function(o){return this.reverse().find(o)},it.prototype.invokeMap=Je(function(o,l){return typeof o=="function"?new it(this):this.map(function(f){return Wo(f,o,l)})}),it.prototype.reject=function(o){return this.filter(Ca(Fe(o)))},it.prototype.slice=function(o,l){o=Ze(o);var f=this;return f.__filtered__&&(o>0||l<0)?new it(f):(o<0?f=f.takeRight(-o):o&&(f=f.drop(o)),l!==n&&(l=Ze(l),f=l<0?f.dropRight(-l):f.take(l-o)),f)},it.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},it.prototype.toArray=function(){return this.take(ct)},sr(it.prototype,function(o,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),O=y[C?"take"+(l=="last"?"Right":""):l],A=C||/^find/.test(l);O&&(y.prototype[l]=function(){var M=this.__wrapped__,B=C?[1]:arguments,V=M instanceof it,oe=B[0],se=V||Ke(M),_e=function(nt){var at=O.apply(y,zr([nt],B));return C&&be?at[0]:at};se&&f&&typeof oe=="function"&&oe.length!=1&&(V=se=!1);var be=this.__chain__,ke=!!this.__actions__.length,He=A&&!be,Qe=V&&!ke;if(!A&&se){M=Qe?M:new it(this);var Pe=o.apply(M,B);return Pe.__actions__.push({func:va,args:[_e],thisArg:n}),new Wn(Pe,be)}return He&&Qe?o.apply(this,B):(Pe=this.thru(_e),He?C?Pe.value()[0]:Pe.value():Pe)})}),Pn(["pop","push","shift","sort","splice","unshift"],function(o){var l=Bs[o],f=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",C=/^(?:pop|shift)$/.test(o);y.prototype[o]=function(){var O=arguments;if(C&&!this.__chain__){var A=this.value();return l.apply(Ke(A)?A:[],O)}return this[f](function(M){return l.apply(Ke(M)?M:[],O)})}}),sr(it.prototype,function(o,l){var f=y[l];if(f){var C=f.name+"";mt.call(qi,C)||(qi[C]=[]),qi[C].push({name:l,func:f})}}),qi[ca(n,w).name]=[{name:"wrapper",func:n}],it.prototype.clone=h1,it.prototype.reverse=v1,it.prototype.value=p1,y.prototype.at=jE,y.prototype.chain=VE,y.prototype.commit=KE,y.prototype.next=XE,y.prototype.plant=ZE,y.prototype.reverse=QE,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=JE,y.prototype.first=y.prototype.head,Mo&&(y.prototype[Mo]=qE),y},Vi=Km();hi?((hi.exports=Vi)._=Vi,Hl._=Vi):jt._=Vi}).call(CO)}(ns,ns.exports)),ns.exports}var St=IO(),H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function wn(t,e,n){n!==void 0&&(t[e]=n)}function bO(t){var e,n,r,i,s,a,c,u,_,v,g,h,m,E;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(s=t.inset)!=null&&s.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable)}function du(t){var n,r,i,s,a,c,u,_,v,g,h,m,E,I,b,w,L,R,k,U,P,W;const e={type:t.type};return wn(e,"n",(n=t.n)==null?void 0:n.value),wn(e,"r",(r=t.r)==null?void 0:r.value),wn(e,"height",(i=t.height)==null?void 0:i.value),wn(e,"width",(s=t.width)==null?void 0:s.value),wn(e,"inset",(a=t.inset)==null?void 0:a.value),wn(e,"angle",(c=t.angle)==null?void 0:c.value),wn(e,"fill",(u=t.fill)==null?void 0:u.value),wn(e,"stroke",(_=t.stroke)==null?void 0:_.value),wn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),wn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),wn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),wn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),wn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),wn(e,"opacity",(I=t.opacity)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:w.value,shortenTail:(R=(L=t.linePathOptions)==null?void 0:L.shortenTail)==null?void 0:R.value,bezierRounding:(U=(k=t.linePathOptions)==null?void 0:k.bezierRounding)==null?void 0:U.value,closeLoops:(W=(P=t.linePathOptions)==null?void 0:P.closeLoops)==null?void 0:W.value}),e}function wO(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const OO={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},yO={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},LO={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Xh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},qh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ms={type:"Line",strokeWidth:.125,stroke:"gray"},dd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},AO={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},SO={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},xO={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};function xr(t){return Array.isArray?Array.isArray(t):Jh(t)==="[object Array]"}function NO(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function TO(t){return t==null?"":NO(t)}function _r(t){return typeof t=="string"}function Zh(t){return typeof t=="number"}function DO(t){return t===!0||t===!1||RO(t)&&Jh(t)=="[object Boolean]"}function Qh(t){return typeof t=="object"}function RO(t){return Qh(t)&&t!==null}function Gn(t){return t!=null}function Zc(t){return!t.trim().length}function Jh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const kO="Incorrect 'index' type",GO=t=>`Invalid value for key ${t}`,MO=t=>`Pattern length exceeds max of ${t}.`,UO=t=>`Missing ${t} property in key`,$O=t=>`Property 'weight' in key '${t}' must be a positive integer`,Rg=Object.prototype.hasOwnProperty;class FO{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=ev(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ev(t){let e=null,n=null,r=null,i=1,s=null;if(_r(t)||xr(t))r=t,e=kg(t),n=_u(t);else{if(!Rg.call(t,"name"))throw new Error(UO("name"));const a=t.name;if(r=a,Rg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error($O(a));e=kg(a),n=_u(a),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function kg(t){return xr(t)?t:t.split(".")}function _u(t){return xr(t)?t.join("."):t}function HO(t,e){let n=[],r=!1;const i=(s,a,c)=>{if(Gn(s))if(!a[c])n.push(s);else{let u=a[c];const _=s[u];if(!Gn(_))return;if(c===a.length-1&&(_r(_)||Zh(_)||DO(_)))n.push(TO(_));else if(xr(_)){r=!0;for(let v=0,g=_.length;v<g;v+=1)i(_[v],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,_r(e)?e.split("."):e,0),r?n:n[0]}const PO={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BO={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},WO={location:0,threshold:.6,distance:100},zO={useExtendedSearch:!1,getFn:HO,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...BO,...PO,...WO,...zO};const YO=/[^ ]+/g;function jO(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(YO).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(s,c),c},clear(){n.clear()}}}class _d{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=jO(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_r(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();_r(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Gn(e)||Zc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Gn(a)){if(xr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(Gn(v))if(_r(v)&&!Zc(v)){let g={v,i:_,n:this.norm.get(v)};c.push(g)}else xr(v)&&v.forEach((g,h)=>{u.push({nestedArrIndex:h,value:g})})}r.$[s]=c}else if(_r(a)&&!Zc(a)){let c={v:a,n:this.norm.get(a)};r.$[s]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function tv(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const i=new _d({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(ev)),i.setSources(e),i.create(),i}function VO(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new _d({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function La(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ye.distance,ignoreLocation:s=Ye.ignoreLocation}={}){const a=e/t.length;if(s)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function KO(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=t.length;s<a;s+=1){let c=t[s];c&&r===-1?r=s:!c&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const yi=32;function XO(t,e,n,{location:r=Ye.location,distance:i=Ye.distance,threshold:s=Ye.threshold,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>yi)throw new Error(MO(yi));const v=e.length,g=t.length,h=Math.max(0,Math.min(r,g));let m=s,E=h;const I=c>1||u,b=I?Array(g):[];let w;for(;(w=t.indexOf(e,E))>-1;){let W=La(e,{currentLocation:w,expectedLocation:h,distance:i,ignoreLocation:_});if(m=Math.min(W,m),E=w+v,I){let X=0;for(;X<v;)b[w+X]=1,X+=1}}E=-1;let L=[],R=1,k=v+g;const U=1<<v-1;for(let W=0;W<v;W+=1){let X=0,J=k;for(;X<J;)La(e,{errors:W,currentLocation:h+J,expectedLocation:h,distance:i,ignoreLocation:_})<=m?X=J:k=J,J=Math.floor((k-X)/2+X);k=J;let ce=Math.max(1,h-J+1),Q=a?g:Math.min(h+J,g)+v,ie=Array(Q+2);ie[Q+1]=(1<<W)-1;for(let me=Q;me>=ce;me-=1){let Ce=me-1,De=n[t.charAt(Ce)];if(I&&(b[Ce]=+!!De),ie[me]=(ie[me+1]<<1|1)&De,W&&(ie[me]|=(L[me+1]|L[me])<<1|1|L[me+1]),ie[me]&U&&(R=La(e,{errors:W,currentLocation:Ce,expectedLocation:h,distance:i,ignoreLocation:_}),R<=m)){if(m=R,E=Ce,E<=h)break;ce=Math.max(1,2*h-E)}}if(La(e,{errors:W+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:_})>m)break;L=ie}const P={isMatch:E>=0,score:Math.max(.001,R)};if(I){const W=KO(b,c);W.length?u&&(P.indices=W):P.isMatch=!1}return P}function qO(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class nv{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:s=Ye.includeMatches,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(h,m)=>{this.chunks.push({pattern:h,alphabet:qO(h),startIndex:m})},g=this.pattern.length;if(g>yi){let h=0;const m=g%yi,E=g-m;for(;h<E;)v(this.pattern.substr(h,yi),h),h+=yi;if(m){const I=g-yi;v(this.pattern.substr(I),I)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],g=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:w,score:L,indices:R}=XO(e,E,I,{location:i+b,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(h=!0),g+=L,w&&R&&(v=[...v,...R])});let m={isMatch:h,score:h?g/this.chunks.length:1};return h&&r&&(m.indices=v),m}}class si{constructor(e){this.pattern=e}static isMultiMatch(e){return Gg(e,this.multiRegex)}static isSingleMatch(e){return Gg(e,this.singleRegex)}search(){}}function Gg(t,e){const n=t.match(e);return n?n[1]:null}class ZO extends si{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class QO extends si{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class JO extends si{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ey extends si{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ty extends si{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ny extends si{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class rv extends si{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:s=Ye.includeMatches,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new nv(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class iv extends si{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fu=[ZO,iv,JO,ey,ny,ty,QO,rv],Mg=fu.length,ry=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,iy="|";function oy(t,e={}){return t.split(iy).map(n=>{let r=n.trim().split(ry).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=r.length;s<a;s+=1){const c=r[s];let u=!1,_=-1;for(;!u&&++_<Mg;){const v=fu[_];let g=v.isMultiMatch(c);g&&(i.push(new v(g,e)),u=!0)}if(!u)for(_=-1;++_<Mg;){const v=fu[_];let g=v.isSingleMatch(c);if(g){i.push(new v(g,e));break}}}return i})}const sy=new Set([rv.type,iv.type]);class ay{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:i=Ye.minMatchCharLength,ignoreLocation:s=Ye.ignoreLocation,findAllMatches:a=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:s,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=oy(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let s=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];a.length=0,s=0;for(let g=0,h=v.length;g<h;g+=1){const m=v[g],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(s+=1,c+=b,r){const w=m.constructor.type;sy.has(w)?a=[...a,...I]:a.push(I)}}else{c=0,s=0,a.length=0;break}}if(s){let g={isMatch:!0,score:c/s};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const gu=[];function ly(...t){gu.push(...t)}function hu(t,e){for(let n=0,r=gu.length;n<r;n+=1){let i=gu[n];if(i.condition(t,e))return new i(t,e)}return new nv(t,e)}const ka={AND:"$and",OR:"$or"},vu={PATH:"$path",PATTERN:"$val"},pu=t=>!!(t[ka.AND]||t[ka.OR]),cy=t=>!!t[vu.PATH],uy=t=>!xr(t)&&Qh(t)&&!pu(t),Ug=t=>({[ka.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ov(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const a=cy(i);if(!a&&s.length>1&&!pu(i))return r(Ug(i));if(uy(i)){const u=a?i[vu.PATH]:s[0],_=a?i[vu.PATTERN]:i[u];if(!_r(_))throw new Error(GO(u));const v={keyId:_u(u),pattern:_};return n&&(v.searcher=hu(_,e)),v}let c={children:[],operator:s[0]};return s.forEach(u=>{const _=i[u];xr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return pu(t)||(t=Ug(t)),r(t)}function dy(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:s))}),n.score=r})}function _y(t,e){const n=t.matches;e.matches=[],Gn(n)&&n.forEach(r=>{if(!Gn(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let a={indices:i,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function fy(t,e){e.score=t.score}function gy(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const i=[];return n&&i.push(_y),r&&i.push(fy),t.map(s=>{const{idx:a}=s,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(s,c)}),c})}class po{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new FO(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof _d))throw new Error(kO);this._myIndex=n||tv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Gn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:c}=this.options;let u=_r(e)?_r(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return dy(u,{ignoreFieldNorm:c}),s&&u.sort(a),Zh(n)&&n>-1&&(u=u.slice(0,n)),gy(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=hu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:a,n:c})=>{if(!Gn(s))return;const{isMatch:u,score:_,indices:v}=n.searchIn(s);u&&i.push({item:s,idx:a,matches:[{score:_,value:s,norm:c,indices:v}]})}),i}_searchLogical(e){const n=ov(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:h});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let g=0,h=c.children.length;g<h;g+=1){const m=c.children[g],E=r(m,u,_);if(E.length)v.push(...E);else if(c.operator===ka.AND)return[]}return v},i=this._myIndex.records,s={},a=[];return i.forEach(({$:c,i:u})=>{if(Gn(c)){let _=r(n,c,u);_.length&&(s[u]||(s[u]={idx:u,item:c,matches:[]},a.push(s[u])),_.forEach(({matches:v})=>{s[u].matches.push(...v)}))}}),a}_searchObjectList(e){const n=hu(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:c})=>{if(!Gn(a))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:a[v],searcher:n}))}),u.length&&s.push({idx:c,item:a,matches:u})}),s}_findMatches({key:e,value:n,searcher:r}){if(!Gn(n))return[];let i=[];if(xr(n))n.forEach(({v:s,i:a,n:c})=>{if(!Gn(s))return;const{isMatch:u,score:_,indices:v}=r.searchIn(s);u&&i.push({score:_,key:e,value:s,idx:a,norm:c,indices:v})});else{const{v:s,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,norm:a,indices:_})}return i}}po.version="7.0.0";po.createIndex=tv;po.parseIndex=VO;po.config=Ye;po.parseQuery=ov;ly(ay);function ri(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function hy(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function vy(t){return new po(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function py(t,e,n){const r=hy(e,n);return t.length===0?r:vy(r).search(t).map(i=>i.item)}function my(t,e){return ri(t,e).shape}function hn(t,e){const n=my(t,e);return n?du(n):void 0}function Es(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return ud(e)}function Ey(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Cs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return ud(i)})}function Cy(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(s=>{if(typeof s!="string")throw Error("cell must be string.");return ud(s)})})}function Tr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function sv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return zh(e)}function Iy(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return zh(r)})}function by(t,e){const n=t.shape;return n===void 0?void 0:{...hn(e,Gt),...n}}function av(t,e,n){return{toolId:t,cells:e,value:n}}function wy(t,e){const n=Cs(e,"cells"),r=Tr(e);return av(t,n,r)}function lv(t,e,n){const r=n?t.length-2:0;return t.findIndex((s,a)=>ze(s,e)&&a>=r)}function Oy(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:vo(r[i-1],e)))return t;const a=lv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function cv(t,e){return{toolId:t,cells:e,lines:[]}}function yy(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ra(n),{...t,cells:n};const r=n.some(s=>ze(s,e)),i=n.some(s=>vo(s,e));return n.length===1&&!r&&i?(n.push(e),Ra(n),{...t,cells:n}):t}function Ly(t,e){const n=t.cells.some(u=>ze(u,e)),r=t.lines.length;if(r===0&&!n)return t;if(r===0&&n)return mu(t,e);const i=t.lines[r-1],s=i.length;if(s===0&&!n)return t;if(s===0&&n)return mu(t,e);const a=lv(i,e,!1);return(i.length===0?!0:vo(i[s-1],e))?a>=0?(i.length=a+1,{...t,lines:[...t.lines.slice(0,r-1),i]}):n?t:(i.push(e),{...t,lines:[...t.lines.slice(0,r-1),i]}):t}function mu(t,e){return t.cells.some(r=>ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function Ay(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function Sy(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function xy(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function Ny(t,e){const n=Cs(e,"cells"),r=Cy(e),i=cv(t,n);return i.lines=r,i}function uv(t,e,n=""){return{toolId:t,cells:e,value:n}}function Ty(t,e,n=!1){const r=Kh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function Dy(t,e){return{...t,value:e}}function Ry(t,e){const n=Cs(e,"cells"),r=Tr(e);return uv(t,n,r)}function dv(t,e,n){return{toolId:t,cells:e,value:n}}function ky(t,e){const n=Cs(e,"cells"),r=Tr(e);return dv(t,n,r)}function _v(t,e,n){return{toolId:t,cells:e,value:n}}function Gy(t,e){const n=Cs(e,"cells"),r=Tr(e);return _v(t,n,r)}function fv(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function My(t,e){const n=Es(e),r=sv(e),i=Tr(e);return fv(t,n,r,i)}function gv(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function Uy(t,e){const n=Es(e),r=Tr(e);return gv(t,n,r)}function hv(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function $y(t,e){const n=Es(e),r=sv(e);return hv(t,n,r)}function vv(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function Fy(t,e){const n=Es(e),r=Iy(e),i=vv(t,n,Be.N);return i.directions=r,i}function pv(t,e,n=""){return{toolId:t,cell:e,value:n}}function Hy(t,e){const n=Es(e),r=Tr(e);return pv(t,n,r)}function Py(t,e=""){return{toolId:t,value:e}}function By(t,e){const n=Tr(e);return Py(t,n)}function mv(t,e,n=""){return{toolId:t,coords:e,value:n}}function Wy(t,e){const n=Ey(e,"coords"),r=Tr(e);return mv(t,n,r)}function zy(t,e){const n=[...t.coords],r=n.length;return(r===0?!0:vo(n[r-1],e))?(n.push(e),{...t,coords:n}):t}function Is(t,e){return{...t,value:e}}class bs extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const s of Object.values(r))i.push(eL(s));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new bs;if(!e)return n;for(const[r,i]of Object.entries(e)){const s=Bh(r);if(s===void 0||!Object.keys(Gt).includes(s))continue;const a=i;for(const c of a){let u=null;if(Wh(s,Ka)?u=Uy(s,c):ed(s)?u=$y(s,c):td(s)?u=Fy(s,c):nd(s)?u=Gy(s,c):$h(s)?u=ky(s,c):rd(s)?u=wy(s,c):Hh(s)?u=Wy(s,c):id(s)?u=Ny(s,c):od(s)?u=Ry(s,c):fs(s)?u=My(s,c):uO(s)?u=By(s,c):Fh(s)&&(u=Hy(s,c)),u!==null){n.addToDict(s);const _=St.uniqueId(),v=by(c,s);u.shape=v,n.addConstraint(s,_,u)}}}return n}}function fd(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1],a=i[0];if(ze(s.cell,n))return[a,s]}return null}function Yy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(n.every(c=>s.cells.some(u=>ze(c,u))))return i}return null}function jy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1],a=s.cells[s.cells.length-1];if(ze(n,a))return i}return null}function $g(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(s.cells.some(c=>ze(c,n)))return[i[0],s]}return null}function Vy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>ze(c,n)))return i;return null}function Ky(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].coords.some(c=>ze(c,n)))return i;return null}function Fg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(s.cells.some(c=>ze(c,n)))return[i[0],s]}return null}function Xy(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,s]of Object.entries(r)){const a=s,c=a.lines.findIndex(u=>u.some((_,v)=>ze(_,n)&&v>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function qy(t,e,n,r){const i=t.get(e);if(!i)return null;for(const s of Object.entries(i)){const a=s[1],c=s[0];if(ze(n,a.cell)&&r===a.direction)return c}return null}function Zy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1],a=i[0];if(ze(n,s.cell))return a}return null}function Qy(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(s.cells.some(c=>ze(c,n))||s.cells2.some(c=>ze(c,n)))return[i[0],s]}return null}function Jy(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const s=i[1];r.add(s.value)}return r}function eL(t){const e={};if("cells"in t){const n=t.cells.map(r=>Oa(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Oa(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Oa(i)));e.lines=n}if("cell"in t){const n=Oa(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=hn(t.toolId,Gt),r=wO(t.shape,n);r&&(e.shape=r)}return e}function Hg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Ev(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Eu(t){const e=new Option().style;return e.color=t,e.color!==""}function Qc(t){return Ev(t)||Eu(t)?t:Eu(`#${t}`)?`#${t}`:void 0}function Ga(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Cv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Cu(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function tL(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Pg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function nL(t){return t in Pg?Pg[t]:null}function Iv(t,e,n){if(n===null)return null;const r=nL(n);if(r===null)return null;const[i,s]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/s)}function Jc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class rL{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);he(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Jc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Jc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Jc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Iv(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ws{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const s=[];for(let a=0;a<n;a++){const c=new rL(i,a);if(r){const u=Iv(i,a,e);c.region=u}s.push(c)}this.grid.push(s)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[s,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const s=e.r+i[0],a=e.c+i[1],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const s=e.r+i[0],a=e.c+i[1],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Cv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),s=i.length;if(e<0||e>=s||![...r.values()].every(c=>c===s))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:s,c:a}=qa(r);let[c,u]=[e+s,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+s,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let s=0;s<this.nCols;s++){const a=this.getCell(r,s);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new ws(e,n);for(let s=0;s<e;s++)for(let a=0;a<n;a++){const c=r[s][a],u=i.getCell(s,a);u&&Object.assign(u,c)}return i}}function iL(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const s=Math.min(e.nRows,e.nCols),a=St.range(1,s+1);t.valid_digits&&!tL(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function oL(t){const e=t.nRows,n=t.nRows,r=t.puzzleInfo,i=t.valid_digits,s=t.grid,a=ws.fromJSON(e,n,s),c=Math.min(a.nRows,a.nRows);let u=St.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,v=t.local_constraints,g=bs.fromJson(v),h=t.bool_constraints,m=co.fromJson(h);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}var rs=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(rs||{});const sL=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),aL=()=>({type:"CLEAR"}),lL=t=>({type:"DRAG",payload:t}),Iu=t=>({type:"SET",payload:t}),cL=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),gd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),dr=(t,e,n)=>{const r=[...t];return Ra(r),{cells:r,lastCell:e,mode:n}};function uL(t,e,n){if(e===null)return gd();if(n==="RESETTING")return dr([e],e,"SELECTING");const r=t.cells.findIndex(i=>ze(e,i));if(n==="SELECTING")return r!==-1?t:dr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),dr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return dr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),dr(i,null,"DESELECTING")}return t}function dL(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:dr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),dr(r,null,t.mode)}return t}function _L(t,e){return{...t,cells:e}}function fL(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>ze(e,i))!==-1?dr([...t.cells],e,"SELECTING"):dr([...t.cells,e],e,"SELECTING"):dr([e],e,t.mode)}function bv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return gd();case"SET":return _L(t,e.payload);case"CLICK":return uL(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return dL(t,e.payload);case"ARROW_KEY":return fL(t,e.payload.cell,e.payload.selectionMode);default:return t}}function so(t,e){return ze(t.p1,e.p1)&&ze(t.p2,e.p2)||ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function gL(t,e){return ze(t.p1,e.p2)&&ze(t.p2,e.p1)}function wv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!ze(t,e)}class Za{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>ze(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>ze(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>ze(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>ze(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>ze(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const s={...e,colorId:n,marker:"O"};this.cellMarkers[r]=s}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>so(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>so(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&gL(r,e)&&this.draftLine.splice(n,1)}onDrag(e){wv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(s=>so(s,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(s=>so(s,r));if(i!==-1){const s=this.lineMarkers.splice(i,1);n.push(s[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Za;return Object.assign(e,this),e}}const Bg=t=>({type:"ADD_EDGE_MARKER",payload:t}),Wg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Aa=t=>({type:"ADD_CELL_MARKER",payload:t}),hL=t=>({type:"SET_CELL_MARKERS",payload:t}),zg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),vL=t=>({type:"DRAG",payload:t}),gs=t=>({type:"ADD_LINE_MARKERS",payload:t}),Yg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),hd=()=>({type:"RESET"});function pL(t,e){switch(e.type){case"RESET":return new Za;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Ov(){return{_undoStack:[],_redoStack:[]}}const mo=Ht(Ov());function mL(){mo.update(()=>Ov())}function _n(t,e=!0){mo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function EL(t,e=!0){mo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function yv(){mo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Lv(){mo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ma=Ht(new Za);function fr(t){Ma.update(e=>pL(e,t))}const Ua=Ht(1);function Oi(t,e){return{execute:()=>{fr(t)},unExecute:()=>{fr(e)}}}const Ni=Ht(gd());function io(t){t&&Ni.update(e=>bv(e,t))}function jg(t){t&&Ni.update(e=>bv(e,t))}function CL(t,e){return{execute:()=>{jg(t)},unExecute:()=>{jg(e)}}}const uo=Ht(),Qa=Ht(ho.SETTING),bu=Ht(!1),qt=Ht(d.DIGIT),Av=Ht(d.DIGIT),vd=Ht(St.range(1,10)),gn=Ht(new ws(9,9)),fn=Ht(ot(gn).getAllCells()),Dr=Ht({}),Rr=Ht(new co),gt=Ht(new bs),gr=Ht(null),Sv=Ht(void 0),Ja=Ht(void 0);function IL(t){Dr.update(()=>t)}function Eo(t){gr.update(()=>t)}function pd(t){Sv.update(()=>t)}function Sr(t){ot(qt)!==t&&(qt.update(()=>t),Eo(null))}function bL(){const t=ot(Av);t&&Sr(t)}function wu(t){Av.update(()=>t)}function wL(t){ot(qt)===t&&Sr(d.DIGIT)}function OL(t){gt.update(e=>(e.removeFromDict(t),e)),pd(void 0)}function Ft(t,e,n){gt.update(r=>(r.updateConstraint(t,e,n),r)),Eo({id:e,constraint:n})}function eu(t){const e=ot(gr);if(t=t?{...t}:void 0,pd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Ft(r,e.id,n)}function yL(t,e){const r=ot(gt).get(e);if(!r)return;const i=r[t];i&&Eo({id:t,constraint:i})}function LL(t,e,n){const r=new ws(t,e);gn.update(()=>r),vd.update(()=>n),gt.update(()=>new bs),Rr.update(()=>new co),Dr.update(()=>({})),md(void 0),fn.update(()=>r.getAllCells())}function AL(t){gn.update(()=>t.grid),Dr.update(()=>t.puzzleMeta),md(t.solution),vd.update(()=>t.valid_digits),gt.update(()=>t.localConstraints),Rr.update(()=>t.globalConstraints),fn.update(()=>t.grid.getAllCells())}function xv(){const t=ot(gn);t.resetValues(),gn.update(()=>t),fn.update(()=>t.getAllCells()),fr(hd())}function $a(){mL(),fr(hd()),Sr(d.DIGIT);const t=aL();io(t),pd(void 0),Eo(null)}const Nv=ki([zt,qt,Qa],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===ho.SETTING}),Os=ki([gn,Dr,Rr,gt,Ja,vd],([t,e,n,r,i,s])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:s,globalConstraints:n,localConstraints:r}));function md(t){Ja.update(()=>t)}var oo=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(oo||{});const Ed=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Cd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),SL=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),xL=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Vg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function Tv(t){gt.update(e=>(e.addToDict(t),e))}function kr(t,e){const n=ot(Sv);n&&(e.shape={...n}),gt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Eo({id:t,constraint:e})}function Ti(t,e){e&&gt.update(n=>(n.removeConstraint(t,e),n))}function NL(t,e){gt.update(n=>(n.setConstraints(t,e),n))}function Kg(t){t.type===oo.ADD_LOCAL_CONSTRAINT?kr(t.payload.id,t.payload.constraint):t.type===oo.REMOVE_LOCAL_CONSTRAINT?Ti(t.payload.tool,t.payload.id):t.type===oo.REMOVE_LOCAL_CONSTRAINT_GROUP?OL(t.payload.tool):t.type===oo.RESTORE_LOCAL_CONSTRAINT_GROUP?NL(t.payload.tool,t.payload.constraints):t.type===oo.UPDATE_LOCAL_CONSTRAINT&&Ft(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function ys(t,e){return{execute:()=>{Kg(t)},unExecute:()=>{Kg(e)}}}class Ge{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ge(this.x+e.x,this.y+e.y)}subtract(e){return new Ge(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ge(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ge(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function TL(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Un=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ge(i.x,i.y)};function Ta(t,e=!0,n=.5){const r=Xa(t),i=new Ge(r.c+.5,r.r+.5),s=t.distance(i);return!e||s<n?{cell:r,dist:s}:null}function Dv(t,e=!0,n=.5){const r=Xa(t),i=new Ge(r.c+.5,r.r+.5),s=t.distance(i),a={r:i.y,c:i.x};return!e||s<n?{cellCenter:a,dist:s}:null}function os(t,e=!0,n=.5){const r=Xa(t),i=vO(r),a=i.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=a.indexOf(Math.min(...a)),u=i[c],_=a[c];return!e||_<n?{corner:u,dist:_,idx:c}:null}function ss(t,e=!0,n=.5){const r=Xa(t),i=pO(r),a=i.map(v=>new Ge(v.c,v.r)).map(v=>v.distance(t)),c=a.indexOf(Math.min(...a)),u=i[c],_=a[c];return!e||_<n?{edge:u,dist:_,idx:c}:null}function tu(t,e=!0,n=.5){const r=ss(t,!1);if(!r)return null;const i=os(t,!1);if(!i)return null;const s=Dv(t,!1);if(!s)return null;const a=[s.cellCenter,r.edge,i.corner],u=a.map(I=>new Ge(I.c,I.r)).map(I=>I.distance(t)),_=Math.min(...u),v=u.findIndex(I=>I===_),g=a[v],m=["cell center","edge","corner"][v],E={cellCenter:s.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?E:null}class Co{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Un(e,n);if(!i)return;this._prevPoint=i;const s=Ta(i,!r,this._margin);if(!s)return;const a=s.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const i=Ta(r,!0,this._margin);if(!i)return;const s=i.cell;if(this._prevCell&&ze(this._prevCell,s))return;this._prevCell=s,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:s,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Un(e,n);if(!r)return;const i=Ta(r,!1);if(!i)return;const s=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:s,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:s,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Xg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(s=>{const a=new Set(s.highlights);return n.difference(a).size===0}).map(s=>s.toCoords())}function DL(t,e){const n=t.value;return e.getAllCells().filter(s=>s.value===n).map(s=>s.toCoords())}function qg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(s=>{if(s.value!==null)return!1;const a=new Set(s.cornerMarks);return n.difference(a).size===0}).map(s=>s.toCoords())}function Zg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(s=>{if(s.value!==null)return!1;const a=new Set(s.centerMarks);return n.difference(a).size===0}).map(s=>s.toCoords())}function RL(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Xg(i,e):i.value!==null?DL(i,e):n===d.CORNER_PM&&i.cornerMarks.length?qg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Zg(i,e):i.cornerMarks.length?qg(i,e):i.centerMarks.length?Zg(i,e):i.highlights.length?Xg(i,e):r:r}function Gr(t,e,n,r=!1){if(!(t&&e))return;const i=Ed(t,e),s=Cd(t,n),a=ys(i,s);_n(a,r)}function ai(t,e,n,r=!0){if(!(t&&e))return;const i=Cd(t,n),s=Ed(t,e),a=ys(i,s);_n(a,r)}function Ou(t,e,n,r,i=!1){if(!(t&&n&&e))return;const s=Vg(r,t,n),a=Vg(r,t,e),c=ys(s,a);_n(c,i)}function el(t,e,n){const r=new Co,i={nRows:e.nRows,nCols:e.nCols};let s=null,a=null,c=null,u=!1,_=!1,v;(E=>{E.DYNAMIC="DYNAMIC",E.BULB="BULB",E.BODY="BODY"})(v||(v={}));let g="DYNAMIC";function h(E){u=!1;const I=E.cell;if(Xt(E.cell,i)){if(g==="DYNAMIC"){const w=ot(gt),L=Xy(w,n,I);if(L){const k=xy(L.arrow,L.matchLineIdx);Ou(L.id,L.arrow,k,n,!0),_=!0;return}const R=Fg(w,n,I);if(!R)u=!0,g="BULB",c=null,s=null;else{g="BODY",c=R[0],s=R[1],s=mu(s,I),Ft(n,c,s);return}}if(g==="BULB"&&!c){c=St.uniqueId(),s=cv(n,[I]),kr(c,s);return}else g==="BULB"&&c&&s?(s=yy(s,I),Ft(n,c,s)):g==="BODY"&&c&&s&&(s=Ly(s,I),Ft(n,c,s))}}return r.onDragStart=E=>{g="DYNAMIC",h(E)},r.onDrag=E=>{h(E)},r.onDragEnd=()=>{if(_){_=!1;return}g==="BODY"&&c&&s?Ay(s)?(s=Sy(s),Ft(n,c,s)):(Ou(c,a,s,n),a=s):g==="BULB"&&(Gr(c,s,n),a=s),g="DYNAMIC"},r.onTap=E=>{if(u)return;const I=E.cell,b=ot(gt);if(Fg(b,n,I)){ai(c,s,n);return}},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}var z=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(z||{});const tl=()=>`    Click and drag to draw a cage.
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
    Type to enter a total into the selected constraint (or the most recently edited).`,Io=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Id=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Te=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,GL=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,ML=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,UL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,bo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,$L=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,FL=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,HL=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function PL(t){return ed(t)?GL():td(t)?ML():t===d.XV?FL():nd(t)?UL():od(t)?tl():id(t)?nl():fs(t)?kL():rd(t)?Te():Ph(t)?HL():""}const BL={getInputHandler(t,e,n){return el(t,e,n)},toolId:d.ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:nl(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}},WL={getInputHandler(t,e,n){return el(t,e,n)},toolId:d.AVERAGE_ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:nl(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}};d.SQUARE_ROOT_ARROW,z.ARROW_TOOLS,H.LINE,nl(),N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL;function zL(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function YL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function jL(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function VL(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function KL(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const XL={Delete:null,Backspace:null};function qL(t,e=10){if(t in XL)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function ZL(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function QL(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function JL(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function eA(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Rv(t){return t==="Backspace"}function wo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Rv(t.key))}function tA(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function nA(t){return tA(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function rA(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Gi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,s=(e==null?void 0:e.maxLength)??3;if(t.length>s)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Mr(t,e,n){if(t===void 0)return t;let r=t;return Rv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function Yt(t,e,n,r){const i=new Co,s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const E=ot(gt),I=m.cell;if(Xt(m.cell,s)){if(m.event.shiftKey){const w=$g(E,n,I);w&&(c=w[0],a=w[1],Eo({id:c,constraint:a}),_=1)}if(_===0){const w=$g(E,n,I);if(_=w?2:1,w){ai(w[0],w[1],n);return}}if(!a&&_===1){a=uv(n,[I]),c=St.uniqueId(),kr(c,a);return}else if(a&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=Ty(a,I,w),Ft(n,c,a);return}}}function g(m){const E=ot(gr);if(!E)return;let I=E.constraint;const b=E.id;if(I.value===void 0||!wo(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(I==null?void 0:I.value,m.key);w!==void 0&&w!==I.value&&(I=Dy(I,w),Ft(n,b,I))}return i.onDragStart=m=>{c=null,a=null,_=0,v(m)},i.onDrag=m=>{v(m)},i.onDragEnd=()=>{c&&a&&Gr(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const bd=[N.CAGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CAGE_TOOL],yn=[N.CAGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CAGE_TOOL];function vn(t,e=5){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function pn(t,e,n){return Mr(t,e,n)}const mn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},iA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},oA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.UNIQUE_DIGITS_CAGE,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:On(),tags:[],categories:yn}},sA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.INVERTED_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:On(),tags:[],categories:yn}},aA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:On(),tags:[],categories:yn}},lA={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SUM_CAGE_LOOK_AND_SAY,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:tl(),tags:[],categories:bd}},cA={getInputHandler(t,e,n){return Yt(t,e,n,{defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.PARITY_BALANCE_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:tl(),tags:[],categories:bd}},uA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DIVISIBLE_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:On(),tags:[],categories:yn}},dA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.SPOTLIGHT_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:On(),tags:[],categories:yn}},_A={getInputHandler(t,e,n){return Yt(t,e,n,{allowDiagonallyAdjacent:!0})},toolId:d.PUTTERIA_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:tl(),tags:[],categories:bd}};d.KILLER_CAGE_LOOK_AND_SAY,z.CAGE_TOOLS,On();const fA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.MULTISET_CAGE,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:On(),tags:[],categories:yn}},gA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.VAULTED_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:On(),tags:[],categories:yn}};d.AQUARIUM_CAGE,z.CAGE_TOOLS,On();const hA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:On(),tags:[],categories:yn}},vA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:On(),tags:[],categories:yn}},pA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.DOUBLERS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:On(),tags:[],categories:yn}},mA={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.NEGATORS_KILLER_CAGE,order:z.CAGE_TOOLS,shape:mn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:On(),tags:[],categories:yn}};var Rn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Rn||{});const EA=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),kv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),CA=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),IA=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),bA=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),wA=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),OA=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),yA=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),nu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),LA=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),ru=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),rl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function AA(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=EA(t,n),s=kv(t,r);return[i,s]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),s=CA(t,n),a=IA(t,r,i);return[s,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=bA(t,n),s=wA(t,r);return[i,s]}if(e===d.FOG){const r=t.map(c=>c.fog),s=OA(t,n===1),a=yA(t,r);return[s,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=ru(t,n),i=ru(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=ru(t,n),s=rl(t,r);return[i,s]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=nu(t,n,e),i=nu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=nu(t,n,e),s=LA(t,r,e);return[i,s]}}function qo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),fn.update(i=>i)}function _o(t){switch(t.type){case Rn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;qo(e,d.DIGIT,n,!0);break}case Rn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;qo(e,d.GIVEN,n,!0);break}case Rn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;qo(e,d.REGIONS,n,!0);break}case Rn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;qo(e,d.HIGHLIGHTS,n,!0);break}case Rn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;qo(e,r,n,!0);break}case Rn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];fn.update(r=>r);break}case Rn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];fn.update(i=>i);break}case Rn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];fn.update(r=>r);break}case Rn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];fn.update(r=>r);break}case Rn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);fn.update(i=>i);break}case Rn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),fn.update(r=>r);break}case Rn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];fn.update(r=>r);break}}}function SA(t,e){return{execute:()=>{_o(t)},unExecute:()=>{_o(e)}}}const ro=new Co;function Qg(t,e){return t.shiftKey?rs.SELECTING:t.ctrlKey||t.metaKey||e?rs.DYNAMIC:t.altKey?rs.DESELECTING:rs.RESETTING}function hs(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const s=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===s||n==="different"&&c.fog!==s)}}return t}function xA(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const s=hs(t,i,"any",-1,r(i));if(s.length)return{tool:i,cells:s}}return{tool:e,cells:[]}}function as(t,e,n,r){const i=AA(e,n,r);if(i){const s=i[0],a=i[1],c=SA(s,a),u=Iu(t),v=[CL(u,u),c];EL(v)}}function NA(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=hs(e,r,"any",-1,!1);if(i.length)return as(n,i,r,t),!0}else{const i=hs(e,r,"different",t,!0);if(i.length)return as(n,i,r,t),!0}return!1}function li(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};ro.onTap=m=>{if(m.tapCount!==2)return;const I=Xt(m.cell,i)?m.cell:null;if(!I)return;const b=RL(I,e,n),w=Iu(b);io(w)},ro.onDragStart=m=>{const E=Xt(m.cell,i),I=ot(bu),b=Qg(m.event,I),w=E?m.cell:null,L=sL(w,b);io(L)},ro.onDrag=m=>{const I=Xt(m.cell,i)?m.cell:null,b=lL(I);io(b)};function s(m){if(!VL(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=Iu(E);return io(I),!0}function a(m){if(!QL(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=eA(m);return Sr(E),!0}return m.type==="keyup"?(bL(),!0):!1}function c(m){if(!ZL(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Sr(I),wu(I),!0}else{const E=JL(m.code);return Sr(E),wu(E),!0}}function u(m){if(!nA(m))return!1;const E=ot(Ni).lastCell;let I=null;if(E!==null){const[L,R]=rA(m),[k,U]=[Hg(E.r+R,0,i.nRows-1),Hg(E.c+L,0,i.nCols-1)];I={r:k,c:U}}else I={r:0,c:0};const b=Qg(m,!1),w=cL(I,b);return io(w),!0}function _(m){const E=qL(m);if(E===void 0)return!1;const I=ot(Ni).cells,b=[];if(I.forEach(w=>{const L=e.getCell(w.r,w.c);L&&b.push(L)}),n===d.FOG)return NA(E,b,I);if(E===null){const{tool:w,cells:L}=xA(b,n);if(L.length)return as(I,L,w,E),!0}else{let w=hs(b,n,"different",E,!0);if(w.length)return as(I,w,n,E),!0;if(w=hs(b,n,"equal",E,!0),w.length)return as(I,w,n,E),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const g=St.throttle(m=>{ro.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&ro.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){ro.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(s(m)||u(m)||v(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}class TA{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Un(e,n);if(!r)return;const i=tu(r,!1);if(!i)return;const s={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const i=tu(r,!1);if(!i||this._prevCoords&&ze(this._prevCoords,i.target))return;this._isTap=!1;const s={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&wv(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(s);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Un(e,n);if(!r)return;const i=tu(r,!1);if(!i)return;const s={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&ze(this._prevCoords,i.target)&&(this.onTap&&this.onTap(s),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function DA(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new TA;return r.onTap=s=>{const a=s.coords,c=ot(Ua),u=ot(Ma);if(s.type==="cell center"){if(!jh(a,n))return;const v=u.getCellMarker(a);if(v)if(v.marker==="X"){const g={...a,colorId:c,marker:"O"},h=Aa(g),m=Aa(v),E=Oi(h,m);_n(E)}else{const g=zg(a),h=Aa(v),m=Oi(g,h);_n(m)}else{const g={...a,colorId:c,marker:"X"},h=Aa(g),m=zg(a),E=Oi(h,m);_n(E)}}else if(s.type==="edge"){const _=u.getEdgeMarker(a);if(_){const v=Wg(a),g=Bg(_),h=Oi(v,g);_n(h)}else{const v={...a,colorId:c},g=Bg(v),h=Wg(a),m=Oi(g,h);_n(m)}}},r.onDrag=s=>{const a=s.coords,c=ot(Ua);if(s.type==="cell center"||s.type==="corner"){const u={p1:s.prevCoords,p2:a,colorId:c},_=vL(u);fr(_)}},r.onDragEnd=()=>{const s=ot(Ma);if(s.mode==="add"){const a=s.draftLine.filter(c=>!s.lineMarkers.some(u=>so(c,u)));if(a.length){const c=gs(a),u=Yg(a),_=Oi(c,u);_n(_)}}else{const a=s.lineMarkers.filter(c=>s.draftLine.some(u=>so(c,u)));if(a.length){const c=Yg(a),u=gs(a),_=Oi(c,u);_n(_)}}},{blur(){},pointerDown(s){r.pointerDown(s,t)},pointerMove(s){r.pointerMove(s,t)},pointerUp(s){r.pointerUp(s,t)},keyDown(){},keyUp(){}}}const RA={getInputHandler:li,toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[N.CELL_INPUT_TOOL]}},kA={getInputHandler:li,toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[N.CELL_INPUT_TOOL]}},GA={getInputHandler:li,toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[N.CELL_INPUT_TOOL]}},MA={getInputHandler:li,toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[N.CELL_INPUT_TOOL]}},UA={getInputHandler:li,toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[N.CELL_INPUT_TOOL]}},$A={getInputHandler:li,toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[N.CELL_INPUT_TOOL]}},FA={getInputHandler:li,toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[N.CELL_INPUT_TOOL]}},HA={getInputHandler:li,toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[N.CELL_INPUT_TOOL]}},PA={getInputHandler:DA,toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}};var ht=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t[t.BOTH=7]="BOTH",t))(ht||{});class il{constructor(e){he(this,"onDragStart",null);he(this,"target");this.target=e}pointerDown(e,n){const r=Un(e,n);if(!r)return;const i=ss(r,!1);if(!i)return;const s=os(r,!1);if(!s)return;const a=Ta(r,!1);if(!a)return;const c=Dv(r,!1);if(!c)return;let u;this.target===1?u=s.corner:this.target===0?u=i.edge:this.target===2?u=c.cellCenter:this.target===3?s.dist<i.dist?u=s.corner:u=i.edge:this.target===4?s.dist<c.dist?u=s.corner:u=c.cellCenter:this.target===5?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<s.dist&&i.dist<c.dist?u=i.edge:s.dist<i.dist&&s.dist<c.dist?u=s.corner:u=c.cellCenter;let _=this.target===1||this.target===4?"corner":"edge";(this.target===3||this.target===6)&&s.dist<i.dist&&(_="corner");const v=_==="edge"?2*i.idx:2*s.idx+1,g={event:e,cell:a.cell,edge:i.edge,corner:s.corner,closest:u,edgeIdx:i.idx,cornerIdx:s.idx,direction:v};this.onDragStart&&this.onDragStart(g)}}function wd(t,e,n,r){const i=(r==null?void 0:r.targets)??ht.CLOSEST,s=new il(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=ot(gt),E=h.cell,I=h.closest;if(!Xt(E,a))return;const w=Zy(m,n,I);if(w){Ti(n,w);return}c=pv(n,I,""),u=St.uniqueId(),kr(u,c)}function v(h){const m=ot(gr);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!wo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=Is(E,b),Ft(n,I,E))}return s.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&s.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,z.OUTSIDE_TOOLS,H.CIRCLE,Id(),N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT;const BA={getInputHandler(t,e,n){return wd(t,e,n,{targets:ht.CLOSEST,valueUpdater:(r,i)=>Mr(r,i,()=>!0),defaultValue:""})},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:z.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Id(),tags:[],categories:[N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT]}},WA={getInputHandler(t,e,n){return wd(t,e,n,{targets:ht.CORNER_OR_EDGE,valueUpdater:(r,i)=>Mr(r,i,()=>!0),defaultValue:""})},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:z.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Id(),tags:[],categories:[N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT]}};function zA(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function YA(t,e){const n=Kh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function jA(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function VA(t){for(let e=0;;e++){const n=jA(e);if(!t.has(n))return n}}function KA(t,e,n){const r=new Co,i={nRows:e.nRows,nCols:e.nCols};let s=null,a=null,c=null,u=null,_="cells2",v;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(v||(v={}));let g=0;function h(E){const I=ot(gt),b=E.cell;if(!Xt(E.cell,i))return;const L=Qy(I,n,b);if(g===0&&(L?(c=L[0],s=L[1],g=2,u=b,_=s.cells2.some(k=>ze(k,b))?"cells2":"cells"):g=1),g===1&&c===null){c=St.uniqueId();const R=Jy(I,n),k=VA(R);s=zA(n,[b],k),kr(c,s);return}else if(g===1&&c&&s){s=YA(s,b),Ft(n,c,s);return}else if(g===2&&c&&s&&u){const R={r:b.r-u.r,c:b.c-u.c},U=(_==="cells2"?s.cells2:s.cells).map(W=>({r:W.r+R.r,c:W.c+R.c}));if(!U.every(W=>Xt(W,i)))return;_==="cells"?s={...s,cells:U}:s={...s,cells2:U},u=b,Ft(n,c,s)}}return r.onDragStart=E=>{c=null,s=null,g=0,u=null,h(E)},r.onDrag=E=>{h(E)},r.onDragEnd=()=>{c&&s&&(g===1?Gr(c,s,n):g===2&&Ou(c,a,s,n),a=s)},r.onTap=()=>{c&&g!==1&&(Ti(n,c),c=null,s=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}const XA={getInputHandler(t,e,n){return KA(t,e,n)},toolId:d.CLONE_REGION,order:z.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[N.CLONE_CONSTRAINT,N.LOCAL_CONSTRAINT]}};class Gv{constructor(){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevCoord",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_margin")}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCoord===null,i=Un(e,n);if(!i)return;const s=os(i,!r);if(!s)return;this._prevCoord=s.corner;const a={event:e,cellCorner:s.corner};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const i=os(r);if(!i||this._prevCoord&&ze(i.corner,this._prevCoord))return;const s={event:e,cellCorner:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(s)}pointerUp(e,n){const r=Un(e,n);if(!r)return;const i=os(r);if(!i)return;const s={event:e,cellCorner:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(s)),this._isTap&&this.onTap&&this.onTap(s)}}function ci(t,e,n,r){const i=new Gv,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=ot(gt),m=g.cellCorner,E=ad(m);if(!E.every(w=>Xt(w,s)))return;let b=null;if(c===0&&(b=jy(h,n,m),c=b?2:1),b&&c===2){const w=b[0];ai(w,b[1],n);return}else if(c===1){const w=dv(n,E,r==null?void 0:r.defaultValue),L=St.uniqueId();Gr(L,w,n,!0)}}function _(g){const h=ot(gr);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!wo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Is(m,I),Ft(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function ol(t,e=3){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sl(t,e,n){return Mr(t,e,n)}function qA(t,e){function n(r){return!0}return Mr(t,e,n)}const ZA={getInputHandler(t,e,n){return ci(t,e,n,{valueUpdater:(r,i)=>qA(r,i),defaultValue:""})},toolId:d.QUADRUPLE,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:$L(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL]}},QA={getInputHandler(t,e,n){return ci(t,e,n,{valueUpdater:(r,i)=>sl(r,i,ol),defaultValue:""})},toolId:d.CORNER_SUM,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:bo(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL]}},JA={getInputHandler(t,e,n){return ci(t,e,n)},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:bo(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},eS={getInputHandler(t,e,n){return ci(t,e,n,{valueUpdater:(r,i)=>sl(r,i,ol),defaultValue:""})},toolId:d.CORNER_EVEN_COUNT,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:bo(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,z.CORNER_TOOLS,H.CIRCLE,bo(),N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL;const tS={getInputHandler(t,e,n){return ci(t,e,n,{defaultValue:"X"})},toolId:d.PRODUCT_SQUARE,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:bo(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},nS={getInputHandler(t,e,n){return ci(t,e,n,{defaultValue:""})},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:bo(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}};function ye(t,e,n,r){const i=new Co,s={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const h=g.cell;Xt(g.cell,s)&&(c=Oy(c,h,a),Ft(n,u,c))}return i.onDragStart=g=>{u=St.uniqueId(),c=av(n,[],r==null?void 0:r.defaultValue),kr(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?Ti(n,u):u&&c&&Gr(u,c,n,!1),u=null},i.onTap=g=>{const h=g.cell,m=ot(gt),E=Vy(m,n,h);if(E){const[I,b]=E;ai(I,b,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function We(t,e,n,r,i){const s=new Co,a={nRows:e.nRows,nCols:e.nCols};let c;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(c||(c={}));let u=0;function _(h){const m=ot(gt),E=h.cell;if(!Xt(h.cell,a))return;const b=fd(m,n,E);if(u===0&&(u=b?2:1),b&&u===2){const[w,L]=b;ai(w,L,n)}else if(u===1){const w=gv(n,E,i==null?void 0:i.defaultValue),L=St.uniqueId();Gr(L,w,n,!0)}}s.onDragStart=h=>{u=0,_(h)},s.onDrag=h=>{_(h)};function v(h){const m=ot(gr);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!wo(h)||!(i!=null&&i.valueUpdater))return;const b=i.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=Is(E,b),Ft(n,I,E))}return{pointerDown:h=>{h.button===0&&s.pointerDown(h,t)},pointerMove:h=>{s.pointerMove(h,t)},pointerUp:h=>{s.pointerUp(h,t)},keyDown:h=>{v(h)},keyUp:()=>{}}}class rS{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"_prevCellEdge",null);he(this,"_isDown",!1)}pointerDown(e,n){this._isDown=!0;const r=Un(e,n);if(!r)return;const i=ss(r,!0,.35);if(!i)return;this._prevCellEdge=i.edge;const s={event:e,edge:i.edge};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Un(e,n);if(!r)return;const i=ss(r,!0,.35);if(!i||this._prevCellEdge&&ze(i.edge,this._prevCellEdge))return;const s={event:e,edge:i.edge};this._prevCellEdge=i.edge,this.onDrag&&this.onDrag(s)}pointerUp(e,n){this._isDown&&(this._prevCellEdge=null,this._isDown=!1);const r=Un(e,n);!r||ss(r,!0,.35)}}function rn(t,e,n,r){const i=new rS,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=ot(gt),m=g.edge,E=cd(m);if(!E.every(w=>Xt(w,s)))return;let b=null;if(c===0&&(b=Yy(h,n,E),c=b?2:1),b&&c===2){const w=b[0];ai(w,b[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",L=_v(n,E,w),R=St.uniqueId();Gr(R,L,n,!0)}}function _(g){const h=ot(gr);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!wo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Is(m,I),Ft(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}function Od(t,e,n,r=ht.CORNER_OR_EDGE){const i=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],s=new il(r),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function g(E){const I=ot(gt),b=E.cell;if(!Xt(E.cell,a))return;E.event.altKey&&(v=2);const L=fd(I,n,b),R=ld(E.direction);if(L){[u,c]=L,c.direction===R||v===2?ai(u,c,n):(c={...c,direction:R},Ft(n,u,c));return}else v!==2&&(c=hv(n,b,R),u=St.uniqueId(),Gr(u,c,n,!0))}function h(E){if(!c||!u||!KL(E))return;const b=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[b]},Ft(n,u,c)}return s.onDragStart=E=>{v=0,g(E)},{pointerDown:E=>{E.button===0&&s.pointerDown(E,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:E=>{h(E)},keyUp:()=>{}}}function iS(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function hr(t,e,n,r=ht.CORNER_OR_EDGE){const i=new il(r),s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=ot(gt),E=h.cell;if(!Xt(h.cell,s))return;h.event.altKey&&(_=2);const b=ld(h.direction),w=fd(m,n,E);if(w){if(c=w[0],a=w[1],_===2)Ti(n,w[0]);else{const L=iS(a.directions,b);L.length?(a={...a,directions:L},Ft(n,c,a)):Ti(n,c)}return}else _!==2&&(a=vv(n,E,b),c=St.uniqueId(),kr(c,a))}return i.onDragStart=h=>{_=0,v(h)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}const yd=[N.EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.EDGE_TOOL],Qn=[N.EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.EDGE_TOOL],Ls=.15,Mv=.02,Mi={type:H.CIRCLE,r:{editable:!0,value:Ls,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Mv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}};function oS(t,e=1){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Oo(t,e=3){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sS(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Ui(t,e,n){return Mr(t,e,n)}function aS(t,e){return t===void 0?"V":sS(e)?e.toUpperCase():t}function lS(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Uv(t,e){return t===void 0?"<":lS(e)?e:t}const cS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,oS)})},toolId:d.RATIO,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Qn}},uS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,Oo)})},toolId:d.DIFFERENCE,order:z.EDGE_TOOLS,shape:Mi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Qn}},dS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,Oo)})},toolId:d.EDGE_SUM,order:z.EDGE_TOOLS,shape:{...Mi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Qn}},_S={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:aS,defaultValue:"V"})},toolId:d.XV,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Qn}},fS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:Uv,defaultValue:"<"})},toolId:d.EDGE_INEQUALITY,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Qn}},gS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,Oo)})},toolId:d.EDGE_PRODUCT,order:z.EDGE_TOOLS,shape:{...Mi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Qn}},hS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,Oo)})},toolId:d.EDGE_MODULO,order:z.EDGE_TOOLS,shape:{...Mi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Qn}},vS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,Oo)})},toolId:d.EDGE_FACTOR,order:z.EDGE_TOOLS,shape:{...Mi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Qn}},pS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.XY_DIFFERENCES,order:z.EDGE_TOOLS,shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:Mv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Qn}},mS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.YIN_YANG_WHITE_KROPKI,order:z.EDGE_TOOLS,shape:Mi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Qn}},ES={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.YIN_YANG_KROPKI,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Ls},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Qn}},CS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.UNKNOWN_REGION_BORDER,order:z.EDGE_TOOLS,shape:{type:H.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:yd}},IS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:z.EDGE_TOOLS,shape:{type:H.BORDER_LINE,strokeWidth:{editable:!1,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},opacity:{editable:!1,value:.9}},meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:yd}},bS={getInputHandler(t,e,n){return rn(t,e,n)},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:z.EDGE_TOOLS,shape:Mi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:yd}},wS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:Uv,defaultValue:"<"})},toolId:d.ONE_WAY_DOOR,order:z.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Qn}};function Dt(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??ht.CORNER_OR_EDGE,s=new il(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=ot(gt),E=h.cell,I=h.direction,b=ld(I);if(Xt(E,a))return;const L=Vh(E,b);if(!Xt(L,a))return;const k=qy(m,n,E,b);if(k){Ti(n,k);return}c=fv(n,E,b,""),u=St.uniqueId(),kr(u,c)}function v(h){const m=ot(gr);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!wo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=Is(E,b),Ft(n,I,E))}return s.onDragStart=h=>{_(h)},{pointerDown:h=>{h.button===0&&s.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{v(h)},keyUp:()=>{}}}const yo=[N.OUTSIDE_CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_CORNER_TOOL,N.OUTSIDE_DIRECTION_TOOL];function Lo(t,e=5){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function $i(t,e,n){return Mr(t,e,n)}const Ao={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},OS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Lo),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ao,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Io(),tags:[],categories:yo}},yS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Lo),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Ao,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Io(),tags:[],categories:yo}},LS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Lo),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:z.OUTSIDE_TOOLS,shape:Ao,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Io(),tags:[],categories:yo}},AS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Lo),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ao,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Io(),tags:[],categories:yo}},SS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Lo),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:z.OUTSIDE_TOOLS,shape:Ao,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Io(),tags:[],categories:yo}},xS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Lo),defaultValue:"",cornerOrEdge:ht.CORNER})},toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:z.OUTSIDE_TOOLS,shape:Ao,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Io(),tags:[],categories:yo}},on=[N.OUTSIDE_EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_EDGE_TOOL,N.OUTSIDE_DIRECTION_TOOL];function Zt(t,e=5){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sn(t,e,n){return Mr(t,e,n)}const an={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},NS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SANDWICH_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:nn(),tags:[],categories:on}},TS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SANDWICH_SUM_XOR_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:nn(),tags:[],categories:on}},DS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:nn(),tags:[],categories:on}},RS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SHORTSIGHTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:nn(),tags:[],categories:on}},kS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SHIFTED_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:nn(),tags:[],categories:on}},GS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.BROKEN_X_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:nn(),tags:[],categories:on}},MS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.X_SUM_SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:nn(),tags:[],categories:on}},US={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.BATTLEFIELD,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:nn(),tags:[],categories:on}},$S={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.SKYSCRAPERS,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:nn(),tags:[],categories:on}},FS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.X_INDEX,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:nn(),tags:[],categories:on}},HS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.RISING_STREAK,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:nn(),tags:[],categories:on}};d.ROW_OR_COLUMN_RANK,z.OUTSIDE_TOOLS,nn();const PS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.EDGE})},toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:nn(),tags:[],categories:on}},BS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:nn(),tags:[],categories:on}},WS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:d.LOOPWICHES,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:nn(),tags:[],categories:on}},zS={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>sn(r,i,Zt),defaultValue:"",cornerOrEdge:ht.BOTH})},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:z.OUTSIDE_TOOLS,shape:an,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:nn(),tags:[],categories:on}},YS={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COSMETIC_CELL_SHAPE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},jS={getInputHandler(t,e,n){return Od(t,e,n)},toolId:d.COSMETIC_CELL_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},VS={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},KS={getInputHandler(t,e,n){return rn(t,e,n,{valueUpdater:(r,i)=>Ui(r,i,Oo)})},toolId:d.COSMETIC_EDGE,order:z.EDGE_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},XS={getInputHandler(t,e,n){return ci(t,e,n,{valueUpdater:(r,i)=>sl(r,i,ol),defaultValue:""})},toolId:d.COSMETIC_CORNER,order:z.CORNER_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},qS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},ZS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},QS={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},JS={getInputHandler(t,e,n){return Yt(t,e,n,{valueUpdater:(r,i)=>pn(r,i,vn),defaultValue:"",allowDiagonallyAdjacent:!0})},toolId:d.COSMETIC_CAGE,order:z.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},ex={getInputHandler(t,e,n){return el(t,e,n)},toolId:d.COSMETIC_ARROW,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.LOCAL_CONSTRAINT]}},tx={getInputHandler(t,e,n){return Dt(t,e,n,{valueUpdater:(r,i)=>$i(r,i,Zt),defaultValue:"",cornerOrEdge:ht.CORNER_OR_EDGE})},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:z.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_DIRECTION_TOOL]}},So=[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT,N.DIAGONAL_CONSTRAINT],nx={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},dx={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},_x={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:So}},hx={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:So}},vx={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:So}},px={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:So}},mx={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:So}},Ex={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:So}},Cx={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},Ix={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},bx={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},wx={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Ox={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},yx={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Lx={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Ax={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Sx={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},xx={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Nx={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Tx={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Dx={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Rx={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},kx={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Gx={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Mx={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},Ux={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands. Digits may not repeat within an island.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Yx={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},jx={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Vx={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Kx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Xx={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Zx={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Qx={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},Jx={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},eN={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},tN={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},nN={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},rN={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},iN={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},oN={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},sN={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},aN={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},lN={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},cN={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},uN={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},dN={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},_N={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},fN={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},gN={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},hN={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},vN={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},pN={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},mN={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},EN={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},CN={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},IN={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},bN={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},$e=[N.LINE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.LINE_TOOL],Ur=[N.LINE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.DOUBLE_ENDED_LINE_CONSTRAINT,N.LINE_TOOL],As={description:"",usage:Te(),tags:[],categories:$e},wN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Numbers along a thermometer must increase from the bulb end."}},ON={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"2"})},toolId:d.CUSTOM_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},yN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.FUZZY_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},LN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SLOW_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},AN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_CYCLE_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...As,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},SN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PALINDROME,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Te(),tags:[],categories:$e}},xN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Te(),tags:[],categories:$e}},NN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Te(),tags:[],categories:$e}},TN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.RENRENBANBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Te(),tags:[],categories:$e}},DN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:$e}},RN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.NABNER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:$e}},kN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Te(),tags:[],categories:$e}},GN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.DUTCH_WHISPERS,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Te(),tags:[],categories:$e}},MN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"2"})},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Te(),tags:[],categories:$e}},UN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Te(),tags:[],categories:$e}},$N={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.RENBAN_OR_NABNER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:$e}},FN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Te(),tags:[],categories:$e}},HN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.INDEX_LINE,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Te(),tags:[],categories:$e}},PN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.UNIQUE_VALUES_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Te(),tags:[],categories:$e}},BN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Te(),tags:[],categories:$e}},WN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Te(),tags:[],categories:$e}},zN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ARITHMETIC_SEQUENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Te(),tags:[],categories:$e}},YN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SAME_PARITY_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Te(),tags:[],categories:$e}},jN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:$e}},VN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Te(),tags:[],categories:$e}},KN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:"3"})},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Te(),tags:[],categories:$e}},XN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Te(),tags:[],categories:$e}},qN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Te(),tags:[],categories:$e}},ZN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Te(),tags:[],categories:$e}},QN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ENTROPIC_OR_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Te(),tags:[],categories:$e}},JN={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Te(),tags:[],categories:$e}},e2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.INDEXING_ROW_IS_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Te(),tags:[],categories:$e}},t2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.REPEATED_DIGITS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Te(),tags:[],categories:$e}},n2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.SUPERFUZZY_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Te(),tags:[],categories:$e}},r2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.AMBIGUOUS_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Te(),tags:[],categories:$e}},i2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.HEADLESS_ARROW,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Te(),tags:[],categories:$e}},o2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.XV_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Te(),tags:[],categories:$e}},s2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ROW_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Te(),tags:[],categories:$e}},a2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.AT_LEAST_X_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Te(),tags:[],categories:$e}},l2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Te(),tags:[],categories:$e}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,z.LINE_TOOLS,H.LINE,Te();const c2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:""})},toolId:d.PRODUCT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Te(),tags:[],categories:$e}},u2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_MULTIPLES_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Te(),tags:[],categories:$e}},d2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Te(),tags:[],categories:$e}},_2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.LOOK_AND_SAY_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Te(),tags:[],categories:$e}},f2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.ZIPPER_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Te(),tags:[],categories:$e}},g2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"10"})},toolId:d.SEGMENTED_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Te(),tags:[],categories:$e}},h2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Te(),tags:[],categories:$e}},v2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1,defaultValue:""})},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Te(),tags:[],categories:$e}};d.THERMO_OR_AVERAGE_ARROW,z.LINE_TOOLS,H.THERMO_WITH_CIRCLE,Te();const p2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"5"})},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Te(),tags:[],categories:$e}},m2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Te(),tags:[],categories:$e}},E2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"3"})},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:$e}},C2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.YIN_YANG_REGION_SUM_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Te(),tags:[],categories:$e}},I2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Te(),tags:[],categories:$e}},b2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:z.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Te(),tags:[],categories:$e}},w2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Te(),tags:[],categories:Ur}},O2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0,defaultValue:"4"})},toolId:d.LOCKOUT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Te(),tags:[],categories:Ur}},y2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.TIGHTROPE_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Te(),tags:[],categories:Ur}},L2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PARITY_COUNT_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Te(),tags:[],categories:Ur}},A2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Te(),categories:Ur}},S2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Te(),tags:[],categories:Ur}},x2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.SPLIT_PEAS,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Te(),tags:[],categories:Ur}},N2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!1})},toolId:d.DOUBLERS_THERMOMETER,order:z.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Te(),tags:[],categories:$e}},T2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_BETWEEN_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:Ur}},D2={getInputHandler(t,e,n){return ye(t,e,n,{allowSelfIntersection:!0})},toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:z.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:Ur}},tt=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_SHAPE_TOOL],xo=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_COLOR_TOOL];function ui(t,e=3){return Gi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function R2(t){return t===""||t==="1"||t==="2"||t==="3"}function $r(t,e,n){return Mr(t,e,n)}const k2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ODD,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:tt}},G2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.EVEN,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:tt}},M2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.MINIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},U2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.MAXIMUM,order:z.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}};d.PRIME_CELL,z.CELL_COLOR_TOOL;const $2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ODD_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},F2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.EVEN_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:tt}},H2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:tt}},P2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},B2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.NOT_WATCHTOWER,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:tt}},W2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.FARSIGHT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:tt}},z2={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:"9"})},toolId:d.RADAR,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:tt}},Y2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ORTHOGONAL_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:tt}},j2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.INDEXING_COLUMN,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:xo}},V2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.INDEXING_ROW,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.",tags:[],categories:xo}},K2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.LOW_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:xo}},X2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.HIGH_DIGIT,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:xo}},q2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.FRIENDLY_CELL,order:z.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:xo}},Z2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIAGONALLY_ADJACENT_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:tt}},Q2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:tt}},J2={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SANDWICH_ROW_COL_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:tt}},eT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:tt}},tT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,R2),defaultValue:""})},toolId:d.COLORED_COUNTING_CIRCLES,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35}},meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:tt}},nT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.UNIQUE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:tt}},rT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_MINESWEEPER,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:tt}},iT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},oT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:tt}},sT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:tt}},aT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:tt}},lT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:tt}},cT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:tt}},uT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SEEN_REGION_BORDERS_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:tt}},dT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:tt}},_T={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.SASHIGANE_BEND_REGION_COUNT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:tt}},fT={getInputHandler(t,e,n){return Od(t,e,n)},toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[N.SINGLE_CELL_ARROW_TOOL,N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},gT={getInputHandler(t,e,n){return Od(t,e,n)},toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[N.SINGLE_CELL_ARROW_TOOL,N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},hT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.SASHIGANE_REGION_SUM,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:tt}},vT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CELL_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:tt}},pT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CELL_NOT_ON_THE_LOOP,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:tt}},mT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:tt}},ET={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:tt}},CT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.CAVE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:tt}},IT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:tt}},bT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:tt}},wT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIRECTED_PATH_START,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:tt}},OT={getInputHandler(t,e,n){return We(t,e,n)},toolId:d.DIRECTED_PATH_END,order:z.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:tt}},yT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.TELEPORT,order:z.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:tt}},LT={getInputHandler(t,e,n){return We(t,e,n,void 0,{valueUpdater:(r,i)=>$r(r,i,ui),defaultValue:""})},toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:z.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:tt}},Fr=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_MULTIARROW_TOOL],Fi={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},AT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Fr}},ST={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Fr}},xT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.LOOP_CELL_COUNT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Fr}},NT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Fr}},TT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Fr}},DT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Fr}},RT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.COLD_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Fr}},kT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.HOT_ARROWS,order:z.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Fr}},GT={getInputHandler(t,e,n){return hr(t,e,n)},toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:z.CELL_SHAPE_TOOL,shape:Fi,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Fr}},MT={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},UT={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},$T={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;const FT={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},HT={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;const PT={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}};function BT(t,e,n,r){const i=new Gv,s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(h){const m=ot(gt),E=h.cellCorner;if(!jh(E,s))return;let b=null;if(_===0&&(b=Ky(m,n,E),_=b?2:1),b){const w=b[0];ai(w,b[1],n);return}if(!a&&_===1){c=St.uniqueId(),a=mv(n,[E],r==null?void 0:r.defaultValue),kr(c,a);return}else if(a&&c&&_===1){a=zy(a,E),Ft(n,c,a);return}}return i.onDragStart=h=>{c=null,a=null,_=0,h.event.shiftKey&&(_=1),v(h)},i.onDrag=h=>{v(h)},i.onDragEnd=()=>{c&&a&&Gr(c,a,n,!1),c=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const WT=[N.CORNER_LINE_CONSTRAINT,N.CORNER_LINE_TOOL,N.LOCAL_CONSTRAINT],zT={getInputHandler(t,e,n){return BT(t,e,n)},toolId:d.MAZE_WALL,order:z.EDGE_TOOLS,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:WT}},Gt={[d.GIVEN]:RA,[d.DIGIT]:kA,[d.REGIONS]:GA,[d.OUTSIDE]:FA,[d.CORNER_PM]:MA,[d.CENTER_PM]:UA,[d.HIGHLIGHTS]:$A,[d.FOG]:HA,[d.PEN_TOOL]:PA,[d.SUDOKU_RULES_DO_NOT_APPLY]:nx,[d.LEAVE_EMPTY_CELLS_EMPTY]:rx,[d.LITS]:sx,[d.HEXED_SUDOKU]:ix,[d.FILLOMINO]:ox,[d.ANTIKNIGHT]:ax,[d.ANTIKING]:cx,[d.ANTI_GIRAFFE]:lx,[d.DISJOINT_GROUPS]:ux,[d.TANGO]:dx,[d.NONCONSECUTIVE]:_x,[d.NONRATIO]:fx,[d.ANTI_ENTROPY]:Cx,[d.GLOBAL_INDEXING_COLUMN]:Ix,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:bx,[d.NEGATIVE_DIAGONAL]:gx,[d.POSITIVE_DIAGONAL]:hx,[d.NEGATIVE_ANTIDIAGONAL]:vx,[d.POSITIVE_ANTIDIAGONAL]:px,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:mx,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:Ex,[d.ALL_RATIOS_GIVEN]:wx,[d.ALL_DIFFERENCES_GIVEN]:Ox,[d.ALL_X_GIVEN]:yx,[d.ALL_V_GIVEN]:Lx,[d.ALL_XV_GIVEN]:Ax,[d.ALL_RADARS_GIVEN]:Sx,[d.ALL_XY_DIFFERENCES_GIVEN]:xx,[d.ALL_INDEXING_COLUMN_GIVEN]:Nx,[d.ALL_INDEXING_ROW_GIVEN]:Tx,[d.ALL_YIN_YANG_KROPKI_GIVEN]:Dx,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:Rx,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Gx,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Mx,[d.CAVE_CELLS_ARE_ODD]:dN,[d.CAVE_WALLS_ARE_EVEN]:uN,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:lN,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:cN,[d.DOUBLERS]:FT,[d.NEGATORS]:HT,[d.NEXUS]:PT,[d.UNKNOWN_REGIONS]:Ux,[d.CHAOS_CONSTRUCTION_SUGURU]:$x,[d.YIN_YANG]:Fx,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Hx,[d.NURIMISAKI]:Px,[d.NURIKABE]:Bx,[d.TWO_CONTIGUOUS_REGIONS]:Wx,[d.SASHIGANE]:zx,[d.GOLDILOCKS_ZONE]:Yx,[d.CELL_CENTER_LOOP_NO_TOUCHING]:jx,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Vx,[d.NOT_LOOP_SIZED_REGIONS]:qx,[d.MODULAR_LOOP]:Zx,[d.CAVE]:sN,[d.CAVE_LITS]:_N,[d.RENBAN_CAVES]:fN,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:aN,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:kx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Kx,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:Xx,[d.GALAXIES]:hN,[d.TWO_SYMMETRIC_GALAXIES]:mN,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:vN,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:pN,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:EN,[d.PENTOMINO_TILLING]:CN,[d.TILLING_NO_EMPTY_CELLS]:IN,[d.LITS_BLACK_WHITE_STAR_BATTLE]:bN,[d.MAZE_DIRECTED_PATH]:Qx,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:Jx,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:rN,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:eN,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:nN,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:iN,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:oN,[d.DIRECTED_PATH_IS_PARITY_LINE]:tN,[d.ODD]:k2,[d.EVEN]:G2,[d.MINIMUM]:M2,[d.MAXIMUM]:U2,[d.ODD_MINESWEEPER]:$2,[d.EVEN_MINESWEEPER]:F2,[d.WATCHTOWER]:P2,[d.NOT_WATCHTOWER]:B2,[d.FARSIGHT]:W2,[d.RADAR]:z2,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:H2,[d.ORTHOGONAL_SUM]:Y2,[d.DIAGONALLY_ADJACENT_SUM]:Z2,[d.INDEXING_COLUMN]:j2,[d.INDEXING_ROW]:V2,[d.LOW_DIGIT]:K2,[d.HIGH_DIGIT]:X2,[d.FRIENDLY_CELL]:q2,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:Q2,[d.SANDWICH_ROW_COL_COUNT]:J2,[d.COUNTING_CIRCLES]:eT,[d.COLORED_COUNTING_CIRCLES]:tT,[d.UNIQUE_CELLS]:nT,[d.YIN_YANG_MINESWEEPER]:rT,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:iT,[d.YIN_YANG_SEEN_SHADED_CELLS]:oT,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:sT,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:aT,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:lT,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:cT,[d.SEEN_REGION_BORDERS_COUNT]:uT,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:dT,[d.SASHIGANE_BEND_REGION_COUNT]:_T,[d.SASHIGANE_REGION_SUM]:hT,[d.CELL_ON_THE_LOOP]:vT,[d.CELL_NOT_ON_THE_LOOP]:pT,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:mT,[d.CAVE_CLUE]:CT,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:ET,[d.YIN_YANG_FILLOMINO_PARITY]:gN,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:IT,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:bT,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:LT,[d.DIRECTED_PATH_START]:wT,[d.DIRECTED_PATH_END]:OT,[d.TELEPORT]:yT,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:fT,[d.THERMO_SIGHTLINE_LOOP_ARROW]:gT,[d.HOT_ARROWS]:kT,[d.COLD_ARROWS]:RT,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:DT,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:NT,[d.YIN_YANG_COUNT_SHADED_CELLS]:TT,[d.LOOP_CELL_COUNT_ARROWS]:xT,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:ST,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:AT,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:GT,[d.DIFFERENCE]:uS,[d.RATIO]:cS,[d.XV]:_S,[d.EDGE_INEQUALITY]:fS,[d.EDGE_SUM]:dS,[d.EDGE_PRODUCT]:gS,[d.EDGE_MODULO]:hS,[d.EDGE_FACTOR]:vS,[d.XY_DIFFERENCES]:pS,[d.YIN_YANG_WHITE_KROPKI]:mS,[d.YIN_YANG_KROPKI]:ES,[d.UNKNOWN_REGION_BORDER]:CS,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:IS,[d.EDGE_CAVE_ONE_OF_EACH]:bS,[d.ONE_WAY_DOOR]:wS,[d.QUADRUPLE]:ZA,[d.CORNER_SUM]:QA,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:JA,[d.CORNER_EVEN_COUNT]:eS,[d.PRODUCT_SQUARE]:tS,[d.EQUAL_DIAGONAL_DIFFERENCES]:nS,[d.THERMOMETER]:wN,[d.FUZZY_THERMOMETER]:yN,[d.SLOW_THERMOMETER]:LN,[d.CUSTOM_THERMOMETER]:ON,[d.ROW_CYCLE_THERMOMETER]:AN,[d.PALINDROME]:SN,[d.RENBAN_LINE]:xN,[d.DOUBLE_RENBAN_LINE]:NN,[d.RENRENBANBAN_LINE]:TN,[d.N_CONSECUTIVE_RENBAN_LINE]:DN,[d.NABNER_LINE]:RN,[d.WHISPERS_LINE]:kN,[d.DUTCH_WHISPERS]:GN,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:MN,[d.RENBAN_OR_WHISPERS_LINE]:UN,[d.RENBAN_OR_NABNER_LINE]:$N,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:FN,[d.INDEX_LINE]:HN,[d.UNIQUE_VALUES_LINE]:PN,[d.REPEATED_DIGITS_LINE]:t2,[d.REGION_SUM_LINE]:BN,[d.SUM_LINE]:WN,[d.XV_LINE]:o2,[d.ROW_SUM_LINE]:s2,[d.AT_LEAST_X_LINE]:a2,[d.SUPERFUZZY_ARROW]:n2,[d.AMBIGUOUS_ARROW]:r2,[d.HEADLESS_ARROW]:i2,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:l2,[d.PRODUCT_LINE]:c2,[d.ADJACENT_MULTIPLES_LINE]:u2,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:d2,[d.LOOK_AND_SAY_LINE]:_2,[d.ARITHMETIC_SEQUENCE_LINE]:zN,[d.ZIPPER_LINE]:f2,[d.SEGMENTED_SUM_LINE]:g2,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:h2,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:v2,[d.SAME_PARITY_LINE]:YN,[d.MODULAR_LINE]:jN,[d.UNIMODULAR_LINE]:VN,[d.MODULAR_OR_UNIMODULAR_LINE]:KN,[d.ODD_EVEN_OSCILLATOR_LINE]:XN,[d.HIGH_LOW_OSCILLATOR_LINE]:qN,[d.ENTROPIC_LINE]:ZN,[d.ENTROPIC_OR_MODULAR_LINE]:QN,[d.INDEXING_COLUMN_IS_X_LINE]:JN,[d.INDEXING_ROW_IS_X_LINE]:e2,[d.YIN_YANG_INDEXING_LINE_COLORING]:I2,[d.YIN_YANG_SHADED_WHISPERS_LINE]:p2,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:m2,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:E2,[d.YIN_YANG_REGION_SUM_LINE]:C2,[d.GOLDILOCKS_ZONE_REGION_SUM]:b2,[d.BETWEEN_LINE]:w2,[d.LOCKOUT_LINE]:O2,[d.PARITY_COUNT_LINE]:L2,[d.TIGHTROPE_LINE]:y2,[d.DOUBLE_ARROW_LINE]:A2,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:S2,[d.SPLIT_PEAS]:x2,[d.DOUBLERS_THERMOMETER]:N2,[d.DOUBLERS_BETWEEN_LINE]:T2,[d.DOUBLERS_DOUBLE_ARROW_LINE]:D2,[d.ARROW]:BL,[d.AVERAGE_ARROW]:WL,[d.MAZE_WALL]:zT,[d.KILLER_CAGE]:iA,[d.UNIQUE_DIGITS_CAGE]:oA,[d.INVERTED_KILLER_CAGE]:sA,[d.SUM_CAGE]:aA,[d.SUM_CAGE_LOOK_AND_SAY]:lA,[d.PARITY_BALANCE_CAGE]:cA,[d.DIVISIBLE_KILLER_CAGE]:uA,[d.SPOTLIGHT_CAGE]:dA,[d.PUTTERIA_CAGE]:_A,[d.MULTISET_CAGE]:fA,[d.VAULTED_CAGE]:gA,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:hA,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:vA,[d.DOUBLERS_KILLER_CAGE]:pA,[d.NEGATORS_KILLER_CAGE]:mA,[d.CLONE_REGION]:XA,[d.SANDWICH_SUM]:NS,[d.X_SUM]:DS,[d.SHORTSIGHTED_X_SUM]:RS,[d.SHIFTED_X_SUM]:kS,[d.BROKEN_X_SUM]:GS,[d.X_SUM_SKYSCRAPERS]:MS,[d.BATTLEFIELD]:US,[d.SKYSCRAPERS]:$S,[d.X_INDEX]:FS,[d.SANDWICH_SUM_XOR_X_SUM]:TS,[d.RISING_STREAK]:HS,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:PS,[d.OUTSIDE_CONSECUTIVE_SUM]:BS,[d.LOOPWICHES]:WS,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:zS,[d.LITTLE_KILLER_SUM]:OS,[d.LITTLE_KILLER_PRODUCT]:yS,[d.LITTLE_KILLER_LOOK_AND_SAY]:LS,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:SS,[d.X_OMIT_LITTLE_KILLER_SUM]:AS,[d.NEGATORS_LITTLE_KILLER_SUM]:xS,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:BA,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:WA,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:MT,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:UT,[d.FORBIDDEN_KNIGHT_SUM]:$T,[d.COSMETIC_CELL_SHAPE]:YS,[d.COSMETIC_CELL_ARROW]:jS,[d.COSMETIC_CELL_MULTI_ARROW]:VS,[d.COSMETIC_EDGE]:KS,[d.COSMETIC_CORNER]:XS,[d.COSMETIC_LINE]:qS,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:ZS,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:QS,[d.COSMETIC_ARROW]:ex,[d.COSMETIC_CAGE]:JS,[d.COSMETIC_OUTSIDE_DIRECTION]:tx};var YT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function $v(t){var e=YT();T(t,e)}var jT=ne('<button class="remove-button svelte-17rdl63"><!></button>');function VT(t,e){let n=$(e,"onTrash",8,()=>{});var r=jT(),i=K(r);$v(i),Y(r),Me("click",r,qn(function(...s){var a;(a=n())==null||a.apply(this,s)})),T(t,r)}var KT=ne('<input type="radio" class="radio-select-button svelte-3561wl">'),XT=ne('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ls(t,e){var J,ce;ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n),i=[];let s=$(e,"elementInfo",8),a=$(e,"onClick",12,void 0),c=$(e,"onTrash",8,void 0);const u=s().toolId,_=s().permanent??!1,v=((J=s().menu)==null?void 0:J.name)??s().toolId,g=!((ce=s().meta)!=null&&ce.categories.includes(N.GLOBAL_CONSTRAINT)),h=`label-${v}`;g&&a(()=>{Sr(u)});function m(){var me,Ce;const Q=(me=s().meta)==null?void 0:me.description,ie=((Ce=s().meta)==null?void 0:Ce.usage)??PL(u);let pe;return Q&&Q.length&&(pe=Q),ie.length&&(pe?pe=pe+`

`+ie:pe=ie),pe}fe();var E=XT(),I=K(E);{var b=Q=>{var ie=KT();Kt(ie),S(ie,"id",h),ie.value=(ie.__value=u)==null?"":u,Va(i,[],ie,()=>r(),pe=>ps(qt,pe)),T(Q,ie)};ge(I,Q=>{g&&Q(b)})}var w=F(I,2);ee(()=>S(w,"title",m())),S(w,"aria-labelledby",h);var L=K(w),R=K(L),k=K(R);{var U=Q=>{VT(Q,{get onTrash(){return c()}})};ge(k,Q=>{_||Q(U)})}Y(R);var P=F(R,2);S(P,"for",h),P.textContent=v,Y(L);var W=F(L,2),X=K(W);ut(X,e,"default",{}),Y(W),Y(w),Y(E),ee(()=>Ot(E,"checked",u===r())),Me("click",w,qn(function(...Q){var ie;(ie=a())==null||ie.apply(this,Q)})),T(t,E),le()}function Fv(t,e){ae(e,!1);const n=rt(),r=()=>ve(gt,"$localConstraintsStore",n);let i=$(e,"toolId",8),s=$(e,"elementHandlers",8);const a=()=>{wL(i());const u=r().get(i());if(!u)return;const _=SL(i()),v=xL(i(),u),g=ys(_,v);_n(g)};fe();var c=Xe(()=>ri(i(),s()));ls(t,{get elementInfo(){return p(c)},onTrash:a}),le()}var qT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function ZT(t){var e=qT();T(t,e)}var QT=ne('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function al(t,e){let n=$(e,"isOpen",8,!0);var r=QT(),i=K(r);ut(i,e,"default",{}),Y(r),ee(()=>{S(r,"aria-expanded",n()),Ot(r,"closed",!n())}),T(t,r)}var JT=ne('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function eD(t,e){ae(e,!1);const n=rt(),r=()=>ve(uo,"$svgRefStore",n),i=()=>ve(gt,"$localConstraintsStore",n),s=()=>ve(gr,"$currentConstraintStore",n),a=D();let c=$(e,"constraintId",8),u=$(e,"toolId",8);function _(){yL(c(),u()),r().focus()}function v(){const w=i().getConstraint(u(),c());if(!w)return;const L=Cd(c(),u()),R=Ed(c(),w),k=ys(L,R);_n(k)}G(()=>s(),()=>{var w;x(a,(w=s())==null?void 0:w.id)}),Ie(),fe();var g=JT(),h=K(g),m=K(h);Y(h);var E=F(h,2),I=K(E),b=K(I);$v(b),Y(I),Y(E),Y(g),ee(()=>{Ot(g,"active",c()===p(a)),et(m,`ID: ${c()??""}`)}),Me("click",I,qn(v)),Me("click",g,_),T(t,g),le()}var tD=ne('<div class="constraint-list svelte-w5npcu"></div>');function Hv(t,e){ae(e,!1);const n=rt(),r=()=>ve(gt,"$localConstraintsStore",n),i=()=>ve(qt,"$toolStore",n),s=D();let a=$(e,"toolId",8);G(()=>(r(),Z(a())),()=>{x(s,r().get(a()))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=Xe(()=>a()===i());al(v,{get isOpen(){return p(g)},children:(h,m)=>{var E=tD();lt(E,5,()=>Object.entries(p(s)),I=>I[0],(I,b)=>{eD(I,{get constraintId(){return p(b)[0]},get toolId(){return a()}})}),Y(E),T(h,E)},$$slots:{default:!0}})};ge(u,v=>{p(s)&&Object.entries(p(s)).length&&v(_)})}T(t,c),le()}var nD=ne('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function rD(t,e){let n=$(e,"title",8),r=$(e,"closeCb",8);var i=nD(),s=K(i),a=K(s,!0);Y(s);var c=F(s,2);Y(i),ee(()=>et(a,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),T(t,i)}var iD=ne('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Hr(t,e){ae(e,!1);let n=$(e,"showModal",12),r=$(e,"title",8),i=D();function s(){n(!1),p(i).close()}G(()=>(p(i),Z(n())),()=>{p(i)&&n()&&p(i).showModal()}),G(()=>(p(i),Z(n())),()=>{p(i)&&!n()&&p(i).close()}),Ie();var a=iD(),c=K(a),u=K(c);rD(u,{get title(){return r()},closeCb:s});var _=F(u,2),v=K(_),g=K(v);ut(g,e,"default",{}),Y(v),Y(_),Y(c),Y(a),xi(a,h=>x(i,h),()=>p(i)),Me("click",c,qn(function(h){Vw.call(this,e,h)})),Me("close",a,()=>{n(!1)}),Me("click",a,jw(qn(()=>p(i).close()))),T(t,a),le()}var oD=ne('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function sD(t,e){ae(e,!1);let n=$(e,"searchPattern",12,""),r=$(e,"showModal",8),i=D(null);G(()=>(Z(r()),p(i)),()=>{r()&&p(i)&&p(i).focus()}),Ie();var s=oD(),a=F(K(s),2);Kt(a),S(a,"spellcheck",!1),xi(a,c=>x(i,c),()=>p(i)),Y(s),Kn(a,n),T(t,s),le()}var aD=ne('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function lD(t,e){let n=$(e,"showModal",12),r=$(e,"searchPattern",12,""),i=$(e,"title",8);Hr(t,{get title(){return i()},get showModal(){return n()},set showModal(s){n(s)},children:(s,a)=>{var c=aD(),u=K(c);sD(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var _=F(u,2),v=K(_),g=K(v);ut(g,e,"default",{}),Y(v),Y(_),Y(c),T(s,c)},$$slots:{default:!0},$$legacy:!0})}var cD=ne('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),uD=ne('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function ni(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0),i=$(e,"isCollapsible",8,!1);var s=Ae(),a=ue(s);{var c=_=>{var v=cD(),g=K(v),h=K(g),m=K(h,!0);Y(h),Y(g);var E=F(g,2),I=K(E);ut(I,e,"default",{}),Y(E),Y(v),ee(()=>et(m,n())),T(_,v)},u=_=>{var v=uD(),g=K(v),h=K(g),m=K(h,!0);Y(h),Y(g);var E=F(g,2),I=K(E);ut(I,e,"default",{});var b=F(I,2);Y(E),Y(v),ee(()=>{et(m,n()),Ot(b,"open",r())}),Me("click",v,()=>r(!r())),T(_,v)};ge(a,_=>{i()?_(u,!1):_(c)})}T(t,s)}var dD=ne('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),_D=ne('<ol class="svelte-cd45on"></ol>'),fD=ne("<!> <!>",1);function gD(t,e){ae(e,!1);const n=D();let r=$(e,"category",8),i=$(e,"addTool",8),s=$(e,"searchResults",8),a=D(!0);G(()=>(Z(s()),Z(r())),()=>{x(n,s().filter(v=>{var g,h;return(h=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:h.includes(r())}))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=fD(),h=ue(g);ni(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return p(a)},set isOpen(E){x(a,E)},$$legacy:!0});var m=F(h,2);al(m,{get isOpen(){return p(a)},children:(E,I)=>{var b=_D();lt(b,5,()=>p(n),At,(w,L)=>{let R=()=>p(L).key,k=()=>p(L).info;var U=dD(),P=K(U),W=K(P,!0);Y(P),Y(U),ee(()=>{var X;S(P,"title",(X=k().meta)==null?void 0:X.description),et(W,R())}),Me("click",P,()=>{i()(R())}),T(w,U)}),Y(b),T(E,b)},$$slots:{default:!0}}),T(v,g)};ge(u,v=>{p(n).length&&v(_)})}T(t,c),le()}function hD(t,e){ae(e,!1);const n=D();let r=$(e,"searchPattern",8,""),i=$(e,"addTool",8),s=$(e,"categories",8),a=$(e,"filterFunc",8),c=$(e,"elementHandlers",8);G(()=>(Z(r()),Z(a()),Z(c())),()=>{x(n,py(r(),a(),c()))}),Ie(),fe();var u=Ae(),_=ue(u);lt(_,1,s,At,(v,g)=>{gD(v,{get category(){return p(g)},get searchResults(){return p(n)},get addTool(){return i()}})}),T(t,u),le()}var vD=ne('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function ll(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8);var i=vD();S(i,"tabindex",0);var s=K(i),a=K(s);ut(a,e,"add-button",{}),Y(s);var c=F(s,2),u=K(c),_=K(u);ut(_,e,"title-icon",{}),Y(u);var v=F(u);Y(c);var g=F(c,2),h=K(g);Y(g),Y(i),ee(()=>{et(v,` ${r()??""}`),Ot(h,"open",n())}),Me("click",i,()=>n(!n())),Me("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),T(t,i)}var pD=ne('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function mD(t,e){let n=$(e,"isOpen",12),r=$(e,"title",8),i=$(e,"showModal",12);function s(){i(!i())}ll(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=pD();Me("click",u,qn(()=>s())),T(a,u)},"title-icon":(a,c)=>{var u=Ae(),_=ue(u);ut(_,e,"title-icon",{}),T(a,u)}},$$legacy:!0})}var ED=ne('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),CD=ne('<div class="panel-container svelte-hixu4"><!> <!></div>');function cl(t,e){let n=$(e,"isOpen",8,!0);var r=CD(),i=K(r);ut(i,e,"panel-header",{});var s=F(i,2);al(s,{get isOpen(){return n()},children:(a,c)=>{var u=ED(),_=K(u);ut(_,e,"panel-content",{}),Y(u),T(a,u)},$$slots:{default:!0}}),Y(r),T(t,r)}var ID=ne("<!> <!>",1);function Ld(t,e){ae(e,!1);let n=$(e,"categories",8),r=$(e,"title",8),i=$(e,"onAddTool",8),s=$(e,"elementHandlerFilterFunc",8),a=$(e,"elementHandlers",8),c=D(!0),u=D(!1),_=D("");const v=g=>{x(u,!1),x(c,!0),i()(g)};fe(),cl(t,{get isOpen(){return p(c)},set isOpen(g){x(c,g)},$$slots:{"panel-header":(g,h)=>{var m=ID(),E=ue(m);mD(E,{get title(){return r()},get isOpen(){return p(c)},set isOpen(b){x(c,b)},get showModal(){return p(u)},set showModal(b){x(u,b)},$$slots:{"title-icon":(b,w)=>{var L=Ae(),R=ue(L);ut(R,e,"title-icon",{}),T(b,L)}},$$legacy:!0});var I=F(E,2);lD(I,{get title(){return r()},get showModal(){return p(u)},set showModal(b){x(u,b)},get searchPattern(){return p(_)},set searchPattern(b){x(_,b)},children:(b,w)=>{hD(b,{get searchPattern(){return p(_)},get categories(){return n()},get filterFunc(){return s()},addTool:v,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),T(g,m)},"panel-content":(g,h)=>{var m=Ae(),E=ue(m);ut(E,e,"panel-content",{}),T(g,m)}},$$legacy:!0}),le()}var bD=ne("<!> <!>",1);function wD(t,e){ae(e,!1);const n=rt(),r=()=>ve(gt,"$localConstraintsStore",n),i=D();let s=$(e,"elementHandlers",8);const a=[N.COSMETIC_TOOL],c=u=>{Tv(u),Sr(u)};G(()=>(r(),N),()=>{x(i,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(N.COSMETIC_TOOL))&&!v})}),Ie(),fe(),Ld(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{ZT(u)},"panel-content":(u,_)=>{var v=Ae(),g=ue(v);lt(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let E=()=>p(m)[0];var I=Ae(),b=ue(I);{var w=L=>{var R=bD(),k=ue(R);Fv(k,{get toolId(){return E()},get elementHandlers(){return s()}});var U=F(k,2);Hv(U,{get toolId(){return E()}}),T(L,R)};ge(b,L=>{dO(E())&&L(w)})}T(h,I)}),T(u,v)}}}),le()}var Pv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Pv||{});const Da=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Bv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function OD(t,e){Rr.update(n=>n.setConstraint(t,e))}function yD(t){Rr.update(e=>e.removeConstraint(t))}function Jg(t){t.type===Pv.REMOVE_GLOBAL_CONSTRAINT?yD(t.payload):OD(t.payload.tool,t.payload.value)}function yu(t,e){return{execute:()=>{Jg(t)},unExecute:()=>{Jg(e)}}}var LD=ne('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function AD(t,e){let n=$(e,"value",8,!1);var r=LD(),i=K(r);Kt(i),Y(r),ee(()=>Ah(i,n())),T(t,r)}function SD(t,e){ae(e,!1);let n=$(e,"toolId",8),r=$(e,"value",8,!1),i=$(e,"elementHandlers",8);const s=()=>{const u=Da(n(),!r()),_=Da(n(),r()),v=yu(u,_);_n(v)},a=()=>{const u=Bv(n()),_=Da(n(),r()),v=yu(u,_);_n(v)};fe();var c=Xe(()=>ri(n(),i()));ls(t,{get elementInfo(){return p(c)},onClick:s,onTrash:a,children:(u,_)=>{AD(u,{get value(){return r()}})},$$slots:{default:!0}}),le()}var xD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function ND(t){var e=xD();T(t,e)}function TD(t,e){ae(e,!1);const n=rt(),r=()=>ve(Rr,"$globalConstraintsStore",n),i=D();let s=$(e,"elementHandlers",8);const a=fO,c=u=>{const _=Da(u,!0),v=Bv(u),g=yu(_,v);_n(g)};G(()=>r(),()=>{x(i,(u,_)=>{var h;const v=!!((h=_.meta)!=null&&h.categories.includes(N.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Ie(),fe(),Ld(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{ND(u)},"panel-content":(u,_)=>{var v=Ae(),g=ue(v);lt(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let E=()=>p(m)[0],I=()=>p(m)[1];SD(h,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return s()}})}),T(u,v)}}}),le()}var DD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function RD(t){var e=DD();T(t,e)}var kD=ne("<!> <!>",1),GD=ne("<!> <!> <!> <!>",1);function MD(t,e){ae(e,!1);const n=rt(),r=()=>ve(gt,"$localConstraintsStore",n),i=D();let s=$(e,"elementHandlers",8);const a=_O,c=u=>{Tv(u),Sr(u)};G(()=>(r(),N),()=>{x(i,(u,_)=>{var h;const v=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(N.LOCAL_CONSTRAINT))&&!v})}),Ie(),fe(),Ld(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return p(i)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{RD(u)},"panel-content":(u,_)=>{var v=GD(),g=ue(v),h=Xe(()=>ri(d.GIVEN,s()));ls(g,{get elementInfo(){return p(h)}});var m=F(g,2),E=Xe(()=>ri(d.REGIONS,s()));ls(m,{get elementInfo(){return p(E)}});var I=F(m,2),b=Xe(()=>ri(d.FOG,s()));ls(I,{get elementInfo(){return p(b)}});var w=F(I,2);lt(w,1,()=>r().entries(),([L,R])=>L,(L,R)=>{let k=()=>p(R)[0];var U=Ae(),P=ue(U);{var W=X=>{var J=kD(),ce=ue(J);Fv(ce,{get toolId(){return k()},get elementHandlers(){return s()}});var Q=F(ce,2);Hv(Q,{get toolId(){return k()}}),T(X,J)};ge(P,X=>{lO(k())&&X(W)})}T(L,U)}),T(u,v)}}}),le()}var UD=ne('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function iu(t,e){ae(e,!1);const n=D();let r=$(e,"value",8),i=$(e,"onChangeCb",8,void 0),s=D(void 0);function a(m){const E=Qc(m);E&&i()&&i()(E)}G(()=>Z(r()),()=>{x(n,r())}),G(()=>(p(n),Qc),()=>{Eu(p(n))&&x(s,Qc(p(n)))}),Ie(),fe();var c=UD(),u=K(c);const _=Xe(()=>Ev(p(n)));var v=K(u);Kt(v),Y(u);var g=F(u,2),h=F(K(g),2);Kt(h),S(h,"spellcheck",!1),S(h,"maxlength",30),Y(g),Y(c),ee(()=>{S(u,"style",`--choosen-color: ${p(s)??""}`),Ot(u,"transparent",p(_))}),Kn(v,()=>p(n),m=>x(n,m)),Me("change",v,()=>a(p(n))),Kn(h,()=>p(n),m=>x(n,m)),Me("input",h,()=>a(p(n))),T(t,c),le()}var $D=ne('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function cs(t,e){let n=$(e,"name",8);var r=$D(),i=K(r),s=K(i,!0);Y(i);var a=F(i,2);ut(a,e,"default",{}),Y(r),ee(()=>et(s,n())),T(t,r)}var FD=ne('<input class="control-slider svelte-1rsuho6" type="range">');function HD(t,e){ae(e,!1);let n=$(e,"min",8),r=$(e,"max",8),i=$(e,"value",12),s=$(e,"step",24,()=>(r()-n())/10),a=$(e,"onChangeCb",8,void 0),c=$(e,"onInputCb",8,void 0);fe();var u=FD();Kt(u),ee(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",s())}),Kn(u,i),Me("change",u,()=>{a()&&a()(i())}),Me("input",u,()=>{c()&&c()(i())}),T(t,u),le()}function Qr(t,e){let n=$(e,"name",8),r=$(e,"value",12),i=$(e,"min",8),s=$(e,"max",8),a=$(e,"step",24,()=>(s()-i())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);cs(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{HD(_,{get min(){return i()},get max(){return s()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var PD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function BD(t){var e=PD();T(t,e)}var WD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function zD(t){var e=WD();T(t,e)}var YD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function jD(t){var e=YD();T(t,e)}var VD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function KD(t){var e=VD();T(t,e)}var XD=ne('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function qD(t,e){ae(e,!1);const n=[];let r=$(e,"value",8),i=$(e,"selectedShape",12),s=$(e,"title",8),a=$(e,"updateShapeCb",8,void 0);fe();var c=XD(),u=K(c);Kt(u);var _,v=F(u,2);ut(v,e,"default",{}),Y(c),ee(()=>{S(c,"title",s()),Ot(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Va(n,[],u,()=>(r(),i()),i),Me("change",u,()=>a()&&a()(r())),T(t,c),le()}var ZD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function QD(t){var e=ZD(),n=K(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),Y(e),T(t,e)}var JD=ne('<div class="icon-wrapper svelte-18euf14"><!></div>'),eR=ne('<div class="radio-container svelte-18euf14"></div>');function tR(t,e){ae(e,!1);let n=$(e,"name",8),r=$(e,"selectedShape",8),i=$(e,"possibleShapes",8),s=$(e,"updateShapeCb",8,void 0);const a=new Map([[H.CIRCLE,jD],[H.ELLIPSE,QD],[H.SQUARE,zD],[H.RECTANGLE,BD],[H.POLYGON,KD]]);fe(),cs(t,{get name(){return n()},children:(c,u)=>{var _=eR();lt(_,5,i,At,(v,g)=>{qD(v,{get title(){return p(g)},get value(){return p(g)},get selectedShape(){return r()},get updateShapeCb(){return s()},children:(h,m)=>{var E=Ae(),I=ue(E);{var b=w=>{var L=JD(),R=K(L);Ch(R,()=>a.get(p(g)),(k,U)=>{U(k,{})}),Y(L),T(w,L)};ge(I,w=>{a.has(p(g))&&w(b)})}T(h,E)},$$slots:{default:!0}})}),Y(_),T(c,_)},$$slots:{default:!0}}),le()}var nR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function rR(t){var e=nR();T(t,e)}var iR=ne('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),oR=ne("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function sR(t,e){ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n),i=()=>ve(gr,"$currentConstraintStore",n),s=D(),a=D(),c=D();let u=D(!0),_=$(e,"elementHandlers",8);function v(b,w){const L=(b==null?void 0:b.shape)??(w?du(w):void 0);return eu(L),L}function g(b,w){p(c)&&(yw(c,p(c)[b]=w),eu(p(c)))}function h(){p(a)&&(x(c,du(p(a))),eu(p(c)))}function m(b){return b&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[H.ELLIPSE,H.RECTANGLE].includes(b)}G(()=>(r(),Z(_())),()=>{x(s,ri(r(),_()))}),G(()=>p(s),()=>{x(a,p(s).shape)}),G(()=>(i(),p(a)),()=>{var b;x(c,v(((b=i())==null?void 0:b.constraint)??null,p(a)))}),Ie(),fe(),cl(t,{get isOpen(){return p(u)},set isOpen(b){x(u,b)},$$slots:{"panel-header":(b,w)=>{ll(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return p(u)},set isOpen(L){x(u,L)},$$slots:{"title-icon":(L,R)=>{rR(L)}},$$legacy:!0})},"panel-content":(b,w)=>{var L=Ae(),R=ue(L);{var k=U=>{var P=oR(),W=ue(P);{var X=Ne=>{var Ee=iR();Me("click",Ee,h),T(Ne,Ee)};ge(W,Ne=>{bO(p(a))&&Ne(X)})}var J=F(W,2);{var ce=Ne=>{tR(Ne,{get possibleShapes(){return p(a).allowedTypes},name:"Shape",get selectedShape(){return p(c).type},updateShapeCb:Ee=>g("type",Ee)})};ge(J,Ne=>{var Ee;p(a).allowedTypes&&p(a).allowedTypes.length&&((Ee=p(c))!=null&&Ee.type)&&Ne(ce)})}var Q=F(J,2);{var ie=Ne=>{var Ee=Xe(()=>p(a).n.lb??3),Re=Xe(()=>p(a).n.ub??10);Qr(Ne,{name:"Number of Sides",get value(){return p(c).n},get min(){return p(Ee)},get max(){return p(Re)},step:1,onChangeCb:xe=>g("n",xe)})};ge(Q,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.n)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.n)!=null&&xe.editable)&&E(p(c).type)&&Ne(ie)})}var pe=F(Q,2);{var me=Ne=>{var Ee=Xe(()=>p(a).r.lb??0),Re=Xe(()=>p(a).r.ub??1),xe=Xe(()=>p(a).r.step??.05);Qr(Ne,{name:"Radius",get value(){return p(c).r},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("r",yt)})};ge(pe,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.r)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.r)!=null&&xe.editable)&&m(p(c).type)&&Ne(me)})}var Ce=F(pe,2);{var De=Ne=>{var Ee=Xe(()=>p(a).width.lb??0),Re=Xe(()=>p(a).width.ub??1),xe=Xe(()=>p(a).width.step??.05);Qr(Ne,{name:"Width",get value(){return p(c).width},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("width",yt)})};ge(Ce,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.width)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.width)!=null&&xe.editable)&&I(p(c).type)&&Ne(De)})}var st=F(Ce,2);{var Se=Ne=>{var Ee=Xe(()=>p(a).height.lb??0),Re=Xe(()=>p(a).height.ub??1),xe=Xe(()=>p(a).height.step??.05);Qr(Ne,{name:"Height",get value(){return p(c).height},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("height",yt)})};ge(st,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.height)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.height)!=null&&xe.editable)&&I(p(c).type)&&Ne(Se)})}var we=F(st,2);{var vt=Ne=>{var Ee=Xe(()=>p(a).angle.lb??0),Re=Xe(()=>p(a).angle.ub??360),xe=Xe(()=>p(a).angle.step??15);Qr(Ne,{name:"Angle",get value(){return p(c).angle},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("angle",yt)})};ge(we,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.angle)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.angle)!=null&&xe.editable)&&Ne(vt)})}var ct=F(we,2);{var Ln=Ne=>{var Ee=Xe(()=>p(a).inset.lb??0),Re=Xe(()=>p(a).inset.ub??.5),xe=Xe(()=>p(a).inset.step??.01);Qr(Ne,{name:"Inset",get value(){return p(c).inset},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("inset",yt)})};ge(ct,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.inset)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.inset)!=null&&xe.editable)&&Ne(Ln)})}var $n=F(ct,2);{var Pr=Ne=>{cs(Ne,{name:"Stroke",children:(Ee,Re)=>{iu(Ee,{get value(){return p(c).stroke},onChangeCb:xe=>g("stroke",xe)})},$$slots:{default:!0}})};ge($n,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.stroke)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.stroke)!=null&&xe.editable)&&Ne(Pr)})}var Qt=F($n,2);{var mr=Ne=>{var Ee=Xe(()=>p(a).strokeWidth.lb??0),Re=Xe(()=>p(a).strokeWidth.ub??.8),xe=Xe(()=>p(a).strokeWidth.step??.01);Qr(Ne,{name:"Stroke Width",get value(){return p(c).strokeWidth},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("strokeWidth",yt)})};ge(Qt,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.strokeWidth)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.strokeWidth)!=null&&xe.editable)&&Ne(mr)})}var fi=F(Qt,2);{var or=Ne=>{var Ee=Xe(()=>p(a).strokeDasharray.lb??0),Re=Xe(()=>p(a).strokeDasharray.ub??1),xe=Xe(()=>p(a).strokeDasharray.step??.01);Qr(Ne,{name:"Stroke Dasharray",get value(){return p(c).strokeDasharray},get min(){return p(Ee)},get max(){return p(Re)},get step(){return p(xe)},onChangeCb:yt=>g("strokeDasharray",yt)})};ge(fi,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.strokeDasharray)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.strokeDasharray)!=null&&xe.editable)&&Ne(or)})}var Fn=F(fi,2);{var Pi=Ne=>{cs(Ne,{name:"Fill",children:(Ee,Re)=>{iu(Ee,{get value(){return p(c).fill},onChangeCb:xe=>g("fill",xe)})},$$slots:{default:!0}})};ge(Fn,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.fill)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.fill)!=null&&xe.editable)&&Ne(Pi)})}var Br=F(Fn,2);{var Rt=Ne=>{cs(Ne,{name:"Font Color",children:(Ee,Re)=>{iu(Ee,{get value(){return p(c).fontColor},onChangeCb:xe=>g("fontColor",xe)})},$$slots:{default:!0}})};ge(Br,Ne=>{var Ee,Re,xe;((Ee=p(c))==null?void 0:Ee.fontColor)!==void 0&&((xe=(Re=p(a))==null?void 0:Re.fontColor)!=null&&xe.editable)&&Ne(Rt)})}T(U,P)};ge(R,U=>{p(a)&&U(k)})}T(b,L)}},$$legacy:!0}),le()}var aR=ne('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ss(t,e){let n=$(e,"clickCb",8),r=$(e,"title",8);var i=aR(),s=K(i),a=K(s);ut(a,e,"default",{}),Y(s),Y(i),ee(()=>S(i,"title",r())),Me("click",i,qn(function(...c){var u;(u=n())==null||u.apply(this,c)})),T(t,i)}var lR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function cR(t){var e=lR();T(t,e)}var uR=ne('<div class="buttons-container svelte-kc00rw"><!></div>');function ul(t,e){var n=uR(),r=K(n);ut(r,e,"default",{}),Y(n),T(t,n)}var dR=ne('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),_R=ne('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),fR=ne('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function gR(t,e){ae(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n),i=()=>ve(Rr,"$globalConstraintsStore",n),s=()=>ve(gt,"$localConstraintsStore",n);let a=$(e,"showModal",12,!1),c=D(""),u=D(""),_=D(""),v=D(""),g=D("");function h(){a(!1)}function m(){const w=p(u)?E(p(u)):["Anonymous"],R={title:p(c)?p(c):"Sudoku",authors:w,ruleset:p(_),ctcYoutubeUrl:p(v),ctcUrl:p(g)};IL(R),a(!1)}function E(w){return w.split(/\s*[;]\s*/)}function I(){var P,W,X,J;let w="";const L=Gt,R=i();!!R.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,Q]of R.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&Q){const ie=L[ce],pe=((P=ie.menu)==null?void 0:P.name)??ie.toolId,me=(W=ie.meta)==null?void 0:W.description;w+=`**${pe}**: ${me}

`}const U=s();for(const[ce,Q]of U.entries())if(Object.keys(Q).length>0){const pe=L[ce],me=((X=pe.menu)==null?void 0:X.name)??pe.toolId,Ce=(J=pe.meta)==null?void 0:J.description;w+=`**${me}**: ${Ce}

`}return w.trim()}function b(){const w=I();x(_,w)}G(()=>(Z(a()),r(),Ga),()=>{if(!a()){const w=r().authors;x(c,r().title??""),x(u,w?Ga(w,"; ","; "):""),x(_,r().ruleset??""),x(v,r().ctcYoutubeUrl??""),x(g,r().ctcUrl??"")}}),Ie(),fe(),Hr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,L)=>{var R=fR(),k=K(R);ni(k,{title:"Title"});var U=F(k,2);Kt(U);var P=F(U,2);ni(P,{title:"Authors"});var W=F(P,2);Kt(W);var X=F(W,2);ni(X,{title:"Ruleset",children:(Ce,De)=>{var st=dR();Me("click",st,b),T(Ce,st)},$$slots:{default:!0}});var J=F(X,2);Gw(J),S(J,"rows",8);var ce=F(J,2);ni(ce,{title:"CTC Link"});var Q=F(ce,2);Kt(Q);var ie=F(Q,2);ni(ie,{title:"CTC Youtube Link"});var pe=F(ie,2);Kt(pe);var me=F(pe,2);ul(me,{children:(Ce,De)=>{var st=_R(),Se=ue(st),we=F(Se,2);Me("click",Se,m),Me("click",we,h),T(Ce,st)},$$slots:{default:!0}}),Y(R),Kn(U,()=>p(c),Ce=>x(c,Ce)),Kn(W,()=>p(u),Ce=>x(u,Ce)),Kn(J,()=>p(_),Ce=>x(_,Ce)),Kn(Q,()=>p(g),Ce=>x(g,Ce)),Kn(pe,()=>p(v),Ce=>x(v,Ce)),T(w,R)},$$slots:{default:!0},$$legacy:!0}),le()}var hR=ne("<!> <!>",1);function vR(t){let e=D(!1);function n(){x(e,!0)}var r=hR(),i=ue(r);Ss(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{cR(a)},$$slots:{default:!0}});var s=F(i,2);gR(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var pR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function mR(t){var e=pR();T(t,e)}var ER=ne('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function CR(t,e){ae(e,!1);let n=D(null),r=D(null);function i(){var s;(s=p(n))==null||s.click()}G(()=>(p(r),$a),()=>{if(p(r)&&p(r).length){const s=p(r)[0],a=new FileReader;a.readAsText(s),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=oL(_);console.log(v),AL(v),$a()}},a.onerror=function(){alert(a.error)}}}),Ie(),fe(),Ss(t,{title:"Open Puzzle",clickCb:i,children:(s,a)=>{var c=ER(),u=ue(c);mR(u);var _=F(u,2);xi(_,v=>x(n,v),()=>p(n)),Yw(_,()=>p(r),v=>x(r,v)),T(s,c)},$$slots:{default:!0}}),le()}var IR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function bR(t){var e=IR();T(t,e)}var wR=ne('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function eh(t,e){ae(e,!1);let n=$(e,"name",8),r=$(e,"min",8),i=$(e,"max",8),s=$(e,"value",12),a=$(e,"step",24,()=>(i()-r())/10),c=$(e,"onChangeCb",8,void 0),u=$(e,"onInputCb",8,void 0);fe();var _=wR(),v=K(_),g=K(v);Y(v);var h=F(v,2);Kt(h),Y(_),ee(()=>{et(g,`${n()??""}: ${s()??""}`),S(h,"min",r()),S(h,"max",i()),S(h,"step",a())}),Kn(h,s),Me("change",h,()=>{c()&&c()(s())}),Me("input",h,()=>{u()&&u()(s())}),T(t,_),le()}var OR=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),yR=ne('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function LR(t,e){ae(e,!1);let n=$(e,"showModal",12,!1);const r=4,i=20;let s=D(9),a=D(9),c=D(""),u=D(St.range(1,10));function _(){n(!1)}function v(){$a(),LL(p(a),p(s),p(u).sort()),n(!1)}function g(E){return E.map(b=>String(b)).join(",")}function h(){const E=Math.min(Math.max(p(a),p(s)),9);x(u,St.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&x(u,E.replaceAll(" ","").split(",").map(Number))}fe(),Hr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=yR(),w=K(b);eh(w,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return p(s)},set value(W){x(s,W)},$$legacy:!0});var L=F(w,2);eh(L,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return p(a)},set value(W){x(a,W)},$$legacy:!0});var R=F(L,2),k=Xe(()=>`Allowed Digits (for the solver): ${g(p(u))}`);ni(R,{get title(){return p(k)}});var U=F(R,2);Kt(U),ee(()=>S(U,"placeholder",g(p(u))));var P=F(U,2);ul(P,{children:(W,X)=>{var J=OR(),ce=ue(J),Q=F(ce,2);Me("click",ce,v),Me("click",Q,_),T(W,J)},$$slots:{default:!0}}),Y(b),Kn(U,()=>p(c),W=>x(c,W)),Me("input",U,()=>m(p(c))),T(E,b)},$$slots:{default:!0},$$legacy:!0}),le()}var AR=ne("<!> <!>",1);function SR(t){let e=D(!1);function n(){x(e,!0)}var r=AR(),i=ue(r);Ss(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{bR(a)},$$slots:{default:!0}});var s=F(i,2);LR(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var xR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function NR(t){var e=xR();T(t,e)}var TR=ne('<button class="modal-button">Cancel</button>'),DR=ne('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function RR(t,e){ae(e,!1);const n=rt(),r=()=>ve(uo,"$svgRefStore",n),i=()=>ve(Os,"$puzzleStore",n),s=()=>ve(Dr,"$puzzleMetaStore",n),a=D();let c=$(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let L="";for(let R of w){const k=w.getPropertyValue(R);k&&(L+=`${R}:${k};`)}return L}function _(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const L=b.childNodes;for(let R=0;R<L.length;R++){const k=L[R];if(k instanceof Element){const U=_(k);w.replaceChild(U,w.childNodes[R])}}return w}function v(b,w="download.png"){const L=_(b),k=new XMLSerializer().serializeToString(L),U=new Image,P=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),W=URL.createObjectURL(P);U.onload=()=>{const X=b.getBoundingClientRect(),J=X.width,ce=X.height,Q=document.createElement("canvas"),ie=window.devicePixelRatio||1;Q.width=J*ie,Q.height=ce*ie;const pe=Q.getContext("2d");pe&&(pe.scale(ie,ie),pe.drawImage(U,0,0,J,ce),Q.toBlob(me=>{if(!me)return;const Ce=URL.createObjectURL(me),De=document.createElement("a");De.href=Ce,De.download=w,De.click(),URL.revokeObjectURL(Ce)}))},U.src=W}function g(b,w="download.svg"){const L=_(b);let k=new XMLSerializer().serializeToString(L);k.includes("<?xml")||(k=`<?xml version="1.0" standalone="no"?>\r
`+k);const U=new Blob([k],{type:"image/svg+xml"}),P=URL.createObjectURL(U),W=document.createElement("a");W.href=P,W.download=w,W.click(),URL.revokeObjectURL(P)}const h=()=>{const b=iL(i());return JSON.stringify(b,null,2)},m=()=>{function b(R,k,U){var P=document.createElement("a"),W=new Blob([R],{type:U});P.href=URL.createObjectURL(W),P.download=k,P.click(),URL.revokeObjectURL(P.href)}const w=h(),L=Cu(s());b(w,`${L}.json`,"text/plain")};function E(){c(!1)}const I=1;G(()=>r(),()=>{x(a,r())}),Ie(),fe(),Hr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var L=DR(),R=K(L),k=K(R),U=K(k),P=F(U,2),W=F(P,2);Y(k);var X=F(k,2),J=F(K(X),2),ce=K(J);S(ce,"width",400*I),S(ce,"height",300*I),Y(J),Y(X),Y(R);var Q=F(R,2);ul(Q,{children:(ie,pe)=>{var me=TR();Me("click",me,E),T(ie,me)},$$slots:{default:!0}}),Y(L),Me("click",U,m),Me("click",P,()=>v(p(a))),Me("click",W,()=>g(p(a))),T(b,L)},$$slots:{default:!0},$$legacy:!0}),le()}var kR=ne("<!> <!>",1);function GR(t){let e=D(!1);function n(){x(e,!0)}var r=kR(),i=ue(r);Ss(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{NR(a)},$$slots:{default:!0}});var s=F(i,2);RR(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var MR=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Wv(t){var e=MR();T(t,e)}var UR=ne('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),$R=ne('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Sa(t,e){let n=$(e,"title",8),r=$(e,"isOpen",12,!0);var i=$R(),s=K(i);ni(s,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=F(s,2);al(a,{get isOpen(){return r()},children:(c,u)=>{var _=UR(),v=K(_);ut(v,e,"default",{}),Y(_),T(c,_)},$$slots:{default:!0}}),Y(i),T(t,i)}var FR=ne('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function HR(t,e){let n=$(e,"value",8),r=$(e,"onClickCb",8),i=$(e,"disabled",8,!1);var s=FR(),a=K(s);Kt(a),Si(2),Y(s),ee(()=>{Ot(s,"disabled",i()),Ah(a,n()),a.disabled=i()}),Me("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,s)}var PR=ne('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Jr(t,e){ae(e,!1);let n=$(e,"value",8),r=$(e,"name",8),i=$(e,"updateCb",8,void 0),s=$(e,"disabled",8,!1);function a(){s()||i()&&i()(!n())}fe();var c=PR(),u=K(c);HR(u,{get value(){return n()},onClickCb:a,get disabled(){return s()}});var _=F(u,2),v=K(_,!0);Y(_),Y(c),ee(()=>{Ot(c,"disabled",s()),et(v,r())}),Me("click",_,qn(a)),T(t,c),le()}var BR=ne("<!> <!>",1),WR=ne("<!> <!> <!>",1),zR=ne("<!> <!>",1),YR=ne('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function zv(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),i=()=>ve(Qa,"$gameModeStore",n),s=D();let a=$(e,"showModal",12,!1);G(()=>r(),()=>{x(s,r())}),Ie(),fe(),Hr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=YR(),v=K(_);Sa(v,{title:"General",children:(I,b)=>{Jr(I,{get value(){return p(s).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Zw})},$$slots:{default:!0}});var g=F(v,2);Sa(g,{title:"Tools",children:(I,b)=>{var w=BR(),L=ue(w);Jr(L,{get value(){return p(s).penToolActive},name:"Pen Tool",updateCb:Jw});var R=F(L,2);Jr(R,{disabled:!0,get value(){return p(s).letterToolActive},name:"Letter Tool",updateCb:eO}),T(I,w)},$$slots:{default:!0}});var h=F(g,2);Sa(h,{title:"Gameplay",children:(I,b)=>{var w=WR(),L=ue(w);Jr(L,{name:"Check Conflicts",get value(){return p(s).checkConflicts},updateCb:nO});var R=F(L,2);Jr(R,{name:"Highlight Pencilmark Conflicts",get value(){return p(s).highlightPencilmarkConflicts},updateCb:rO});var k=F(R,2);Jr(k,{name:"Highlight Cells Seen By Selection",get value(){return p(s).highlightCellsSeenBySelection},updateCb:tO}),T(I,w)},$$slots:{default:!0}});var m=F(h,2);{var E=I=>{Sa(I,{title:"Setting Mode Display",children:(b,w)=>{var L=zR(),R=ue(L);Jr(R,{name:"Hide Fog",get value(){return p(s).hideFog},updateCb:iO});var k=F(R,2);Jr(k,{name:"Show Solution",get value(){return p(s).showSolution},updateCb:oO}),T(b,L)},$$slots:{default:!0}})};ge(m,I=>{i()===ho.SETTING&&I(E)})}Y(_),T(c,_)},$$slots:{default:!0},$$legacy:!0}),le()}var jR=ne("<!> <!>",1);function VR(t){let e=D(!1);function n(){x(e,!0)}var r=jR(),i=ue(r);Ss(i,{title:"Settings",clickCb:n,children:(a,c)=>{Wv(a)},$$slots:{default:!0}});var s=F(i,2);zv(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var KR=ne('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function XR(t){var e=KR(),n=K(e);SR(n);var r=F(n,2);GR(r);var i=F(r,2);CR(i,{});var s=F(i,2);vR(s);var a=F(s,2);VR(a),Y(e),T(t,e)}var qR=ne('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function ZR(t,e){ae(e,!1);let n=D(!1);function r(){const i=ot(gn),s=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const v=_.value;c.push(v)}s.push(c)}md(s)}fe(),cl(t,{get isOpen(){return p(n)},set isOpen(i){x(n,i)},$$slots:{"panel-header":(i,s)=>{ll(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return p(n)},set isOpen(a){x(n,a)},$$legacy:!0})},"panel-content":(i,s)=>{var a=qR();Me("click",a,r),T(i,a)}},$$legacy:!0}),le()}const QR={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function JR(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],s=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[s,i]};if(i==="<"||i==="<=")return{upper_bound:[s,i]}}if(r=n.exec(t),r){const i=r[1],s=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[s,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function ek(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function tk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Yv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function nk(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=ek(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=tk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const s=JR(t);if(e.allow_interval&&s)return{type:"interval",parsed:s};const a=Yv(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var re=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t))(re||{});function xt(t,e){return`${e}[${t.r},${t.c}]`}function di(t,e){return t.map(r=>xt(r,e))}function Ue(t,e){return"["+di(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function je(t){return t.map(n=>Oe(n))}function rk(t){return`values_grid[${t.r},${t.c}]`}function dl(t){return t.map(e=>rk(e))}function Ai(t){return`constraint alldifferent([${t.join(",")}]);
`}function dt(t,e){return t&&(t=`
% ${e}
`+t),t}function Ad(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const i of n){const s=t.getCellsInDirection(e.r,e.c,i);r.push(s)}return r}function Sd(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const i of n){const s=t.getCellsInDirection(e.r,e.c,i),a="["+je(s).join(",")+"]";r.push(a)}return r}function _l(t,e,n,r){let i="";const s=r.get(e);if(s)for(const a of Object.values(n)){const c=s(t,a);i+=c}return i}class ik{constructor(e){he(this,"model_str","");he(this,"used_vars");he(this,"puzzle");he(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=QR){const i=nk(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let s="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(s+=`var int: ${c};
`,this.addVariable(c)),[s,c]}if(!n)return null;if(this.hasVariable(n)||(s+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];s+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];s+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";s+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[s,n]}}function ok(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,s=/^test\s+(\w+)\s*\(/;let a=null,c=0,u=0;for(let I=0;I<e.length;I++){const b=e[I].trim(),w=b.match(r),L=b.match(i),R=b.match(s);if(w||L||R){a={name:(w||L||R)[1],startLine:I,content:[e[I]]},c=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length;continue}if(a&&(a.content.push(e[I]),c+=(b.match(/\(/g)||[]).length-(b.match(/\)/g)||[]).length,u+=(b.match(/\{/g)||[]).length-(b.match(/\}/g)||[]).length,c===0&&u===0&&b.endsWith(";"))){n[a.name]={startLine:a.startLine,endLine:I,name:a.name,content:a.content};let k=a.startLine;for(;k>0&&e[k-1].trim().startsWith("%");)k-=1;n[a.name].startLine=k,a=null}}const _=new Set;function v(I){const b=[];for(const w of Object.keys(n))!I.includes("function")&&!I.includes("predicate")&&!I.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(I)&&b.push(w);return b}for(const I of e)v(I).forEach(w=>_.add(w));const g=Object.values(n).filter(I=>!_.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));g.sort((I,b)=>b.start-I.start);const h=[...e];for(const I of g)h.splice(I.start,I.end-I.start+1);const m=[];let E=!1;for(const I of h)I.trim()===""?E||(m.push(I),E=!0):(m.push(I),E=!1);return m.join(`
`)}function th(t){let e=t,n=e.length;for(;e=ok(e),e.length!=n;)n=e.length;return e}const nh=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function xd(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function sk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),s=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const v=e.getCell(c,_);!v||v.region===null?u.push(r-1):u.push(v.region)}s.push(u)}const a=xd(s);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Nd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function ak(t,e){const r=t.grid.getPositiveDiagonal(),i=je(r);let s=Ai(i);return s=`
% Positive Diagonal Constraint
`+s,s}function lk(t,e){const r=t.grid.getNegativeDiagonal(),i=je(r);let s=Ai(i);return s=`
% Negative Diagonal Constraint
`+s,s}function ck(t,e){const r=t.grid.getPositiveDiagonal(),s="["+je(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${s}) == 3;
`,a}function uk(t,e){const r=t.grid.getNegativeDiagonal(),s="["+je(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${s}) == 3;
`,a}function dk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let s="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_+(u-v));if(!g||!h)continue;const m=Oe(g),E=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;s+=b}}return s}function _k(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let s="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),h=n.getCell(u,_-(u-v));if(!g||!h)continue;const m=Oe(g),E=Oe(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;s+=b}}return s}function fk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let s=0;s<i;s++){const a=n.getDisjointGroup(s),_=`constraint alldifferent(${`[${je(a).join(",")}]`});
`;r+=_}return r}function gk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=Oe(i),_=`[${je(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function hk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=Oe(i),_=`[${je(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function vk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=dt(n,`${e}`),n}function pk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=dt(n,`${e}`),n}function mk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=dt(n,`${e}`),n}function*_i(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Ek(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,s]of _i(n)){const a=Oe(i),c=Oe(s),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function Ck(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,s]of _i(n)){const a=Oe(i),c=Oe(s),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function Ik(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getRow(i.r),c=`[${je(s).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function bk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function wk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function Ok(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=dt(n,`${e}`),n}function ou(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const s=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&s.push(_)}let a="";for(const[c,u]of _i(n)){if(s.find(h=>h.has(c)&&h.has(u)))continue;const v=Oe(c),g=Oe(u);if(e===d.ALL_V_GIVEN){const h=`constraint ${v} + ${g} != 5;
`;a+=h}else if(e===d.ALL_X_GIVEN){const h=`constraint ${v} + ${g} != 10;
`;a+=h}else{const h=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;a+=h}}return a=dt(a,`${e}`),a}function fo(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,s=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(s)}return n}function yk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),s=fo(n,i);let a="";for(const[c,u]of _i(n)){if(s.find(E=>E.has(c)&&E.has(u)))continue;const v=Oe(c),g=Oe(u);let h="";if(c.r==u.r){const I=n.getRow(c.r)[0];h=Oe(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];h=Oe(I)}if(!h)continue;const m=`constraint abs(${v} - ${g}) != ${h};
`;a+=m}return a=dt(a,`${e}`),a}function Lk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),s=r.get(d.RATIO);let a=fo(n,i);a=[...a,...fo(n,s)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,g]of _i(n)){if(a.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),E=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${E}) != ${b};
`;_+=w}}return _=dt(_,`${e}`),_}function Ak(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),s=r.get(d.DIFFERENCE);let a=fo(n,i);a=[...a,...fo(n,s)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,g]of _i(n)){if(a.find(I=>I.has(v)&&I.has(g)))continue;const m=Oe(v),E=Oe(g);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${E}, ${b});
`;_+=w}}return _=dt(_,`${e}`),_}function Sk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),s=fo(n,i);let a="";for(const[c,u]of _i(n)){if(s.find(I=>I.has(c)&&I.has(u)))continue;const v=Oe(c),g=Oe(u),h=xt(c,re.YIN_YANG),m=xt(u,re.YIN_YANG),E=`constraint not yin_yang_kropki_p(${v}, ${g}, ${h}, ${m});
`;a+=E}return a=dt(a,`${e}`),a}function xk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),s=i?Object.values(i):[];function a(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(s,u),v=_?_.directions:[],g=Oe(u),h=[Be.E,Be.N,Be.S,Be.W];for(const m of h){if(v.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),I=Ue(E,re.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=dt(c,`${e}`),c}function Td(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,s=t.getCell(i.r,i.c);s&&n.add(s)}return n}function Nk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),s=Td(n,i);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=n.getRow(c.r),g=`[${je(_).join(",")}]`,h=c.c+1,m=`constraint not indexing_column_p(${g}, ${h});
`;a+=m}return a=dt(a,`${e}`),a}function Tk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),s=Td(n,i);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=Oe(c),[v,g,h,m]=Sd(n,c),E=`constraint not radar_p(${_}, ${v}, ${g}, ${h}, ${m}, 9);
`;a+=E}return a=dt(a,`${e}`),a}function Dk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),s=Td(n,i);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,h=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=h}return a=dt(a,`${e}`),a}function Rk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,s]of _i(n)){const a=Oe(i),c=Oe(s),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${s.r},${s.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=v}return r}function kk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let s=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=Ue(u,re.YIN_YANG);s+=`constraint count_unique_values(${_}) >= 2;
`}return s}function Gk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=dt(n,`${e}`),n}function Mk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=dt(n,`${e}`),n}function Uk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function $k(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function Fk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=dt(n,`${e}`),n}function Hk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=dt(n,`${e}`),n}function Pk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Bk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Wk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function zk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=dt(n,`${e}`),n}function Yk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const s=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=xt(i,re.BOARD),c=xt(i,re.YIN_YANG),u=Ue(s,re.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=dt(n,`${e}`),n}function jk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Vk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Kk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Xk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function qk(t,e){let n="";const r=t.grid,s=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=s.length?Math.max(...s):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=dt(n,`${e}`),n}function Zk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Qk(t,e){let n="";const s="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${s});
`,n=dt(n,`${e}`),n}function Jk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=je(u),v=Ai(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const s=n.nCols;for(let c=0;c<s;c++){const u=n.getCol(c),_=je(u),v=Ai(_);r+=v}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=je(_),g=Ai(v);r+=g}}return r}function e3(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const t3=new Map([[d.POSITIVE_DIAGONAL,ak],[d.NEGATIVE_DIAGONAL,lk],[d.POSITIVE_ANTIDIAGONAL,ck],[d.NEGATIVE_ANTIDIAGONAL,uk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,dk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,_k],[d.ANTIKING,gk],[d.ANTIKNIGHT,hk],[d.ANTI_GIRAFFE,vk],[d.DISJOINT_GROUPS,fk],[d.TANGO,pk],[d.NONCONSECUTIVE,Ek],[d.NONRATIO,Ck],[d.ANTI_ENTROPY,mk],[d.GLOBAL_INDEXING_COLUMN,Ik],[d.ALL_V_GIVEN,ou],[d.ALL_X_GIVEN,ou],[d.ALL_XV_GIVEN,ou],[d.ALL_DIFFERENCES_GIVEN,Lk],[d.ALL_RATIOS_GIVEN,Ak],[d.ALL_XY_DIFFERENCES_GIVEN,yk],[d.ALL_YIN_YANG_KROPKI_GIVEN,Sk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,xk],[d.ALL_INDEXING_COLUMN_GIVEN,Nk],[d.ALL_RADARS_GIVEN,Tk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Dk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Rk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,kk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,Ok],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,bk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,wk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Gk],[d.CAVE_CELLS_ARE_ODD,Uk],[d.CAVE_WALLS_ARE_EVEN,$k],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Fk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Hk],[d.YIN_YANG_FILLOMINO_PARITY,Mk],[d.TWO_SYMMETRIC_GALAXIES,Wk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,Pk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Bk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,zk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Yk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,jk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Qk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,Vk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,Kk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,Xk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,qk],[d.DIRECTED_PATH_IS_PARITY_LINE,Zk]]);function n3(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const s=t3.get(r);if(!s)continue;const a=s(t,r);e+=a}return e}function jv(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function Vv(t,e){const n=e.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return`[${je(n.slice(1)).join(",")}]`}function r3(t,e,n,r){let i="";const s=jv(e,r),a=`arrow_${n}`;if(i+=`var int: ${a};
`,i+=`% arrow pill
`,s.length===1){const u=s[0];i+=`constraint ${a} == ${u};
`}else if(s.length>1){const u=s.toReversed().map((_,v)=>`${Math.pow(10,v)}*${_}`).join(" + ");i+=`constraint ${a} == ${u};
`}else return"";const c=r.lines;i+=`% arrow lines
`;for(const u of c){const v=`constraint sum(${Vv(e,u)}) == ${a};
`;i+=v}return i}function i3(t,e,n,r){let i="";const s=jv(e,r);if(s.length===1){const a=s[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${Vv(e,u)}, ${a});
`;i+=v}}return i}const o3=new Map([[d.ARROW,r3],[d.AVERAGE_ARROW,i3]]);function s3(t,e,n,r){let i="";const s=o3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function oi(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function Kv(t,e,n){const i=`[${oi(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function fl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Dd(t,e,n,r,i){const a=`[${oi(e,r).join(",")}]`,c=r.value,u=fl(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${i}(${a}, ${_});
`,v}function a3(t,e,n,r){const i=oi(e,r),s=`[${i.join(",")}]`,a=r.value;if(!a)return Ai(i);const c=fl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${s}, ${u});
`,_}function l3(t,e,n,r){const i=oi(e,r),s=`[${i.join(",")}]`,a=r.value;if(!a)return Ai(i);const c=fl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${s}, ${u});
`,_}function c3(t,e,n,r){return Dd(t,e,n,r,"sum_cage_p")}function u3(t,e,n,r){return Kv(e,r,"parity_balance_cage_p")}function d3(t,e,n,r){return Kv(e,r,"sum_cage_look_and_say_p")}function _3(t,e,n,r){return Dd(t,e,n,r,"divisible_killer_cage_p")}function f3(t,e,n,r){return Dd(t,e,n,r,"spotlight_cage_p")}function g3(t,e,n,r){const s=`[${oi(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${s}, ${c}, ALLOWED_DIGITS);
`}return""}function h3(t,e,n,r){const s=`[${oi(e,r).join(",")}]`,a=r.value;let c="";const u=fl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${s}) == ${m};
`}const v=r.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!v.includes(I)&&!g.includes(I)&&g.push(I)});const h=Ue(g,re.BOARD);return c+=`constraint vaulted_cage_p(${s}, ${h});
`,c}function Xv(t,e,n,r,i){const a=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),u=`[${je(a).join(",")}]`,_=Ue(a,re.YIN_YANG),v=r.value;if(v){const g=parseInt(v);return`constraint ${i}(${u}, ${_}, ${g});
`}return""}function v3(t,e,n,r){return Xv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function p3(t,e,n,r){return Xv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function m3(t,e,n,r){const s=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(s).join(",")}]`,_=`[${dl(s).join(", ")}]`,v=r.value;if(v){const g=parseInt(v);return`constraint doublers_killer_cage_p(${c}, ${_}, ${g});
`}return""}function E3(t,e,n,r){const s=r.cells.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g),c=`[${je(s).join(",")}]`,_=`[${dl(s).join(", ")}]`,v=r.value;if(v){const g=parseInt(v);return`constraint negators_killer_cage_p(${c}, ${_}, ${g});
`}return""}function C3(t,e){let n="";const r=Nd(e);for(const i of r.values())if(!(i.length<=1))for(const[s,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${oi(t,s).join(",")}]`,v=`[${oi(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const I3=new Map([[d.KILLER_CAGE,a3],[d.INVERTED_KILLER_CAGE,l3],[d.SUM_CAGE,c3],[d.PARITY_BALANCE_CAGE,u3],[d.SUM_CAGE_LOOK_AND_SAY,d3],[d.DIVISIBLE_KILLER_CAGE,_3],[d.SPOTLIGHT_CAGE,f3],[d.UNIQUE_DIGITS_CAGE,g3],[d.VAULTED_CAGE,h3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,v3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,p3],[d.DOUBLERS_KILLER_CAGE,m3],[d.NEGATORS_KILLER_CAGE,E3]]);function b3(t,e,n,r){let i="";const s=I3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=C3(e,a);i+=c}return i}function w3(t,e,n,r){const i=e.r+.5,s=e.c+.5,a=n-i,c=r-s,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function O3(t,e){const n=[],r=[],i=[];for(const s of t.getAllCells()){const a=w3(t,s,e.r,e.c);a&&!n.includes(a)?(n.push(s),r.push(a)):r.includes(s)||i.push(s)}return[n,r,i]}function y3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[g,h,m]=O3(e,_),E=Ue(g,re.GALAXY_REGIONS),I=Ue(h,re.GALAXY_REGIONS),b=Ue(m,re.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${E}, ${I}, ${b}, ${v});
`,r+=`constraint connected_region(${re.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const L=parseInt(w);r+=`constraint galaxy_sum_p(${re.BOARD}, ${re.GALAXY_REGIONS}, ${L}, ${v});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${re.GALAXY_REGIONS}, ${a});
`,r}function L3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function A3(t,e,n,r){const i=r.cell,[s,a]=[i.r,i.c],c=r.value,u=L3(t,c,n);if(!u)return"";const _=u[1];let v=u[0],g=[];if(s%1===0&&a%1===0?g=ad(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(s%1===.5&&a%1===0||s%1===0&&a%1===.5)&&(g=cd(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const h=Ue(g,re.BOARD),m=Ue(g,re.YIN_YANG);return v+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${_};
`,v}const S3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,A3]]),x3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,y3]]);function N3(t,e,n,r){let i="";const s=x3.get(n),a=S3.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(s){const c=Object.values(r),u=s(t,e,c);i+=u}return i}function rh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return je(n)}function T3(t,e){const r="["+rh(t,e.cells).join(",")+"]",s="["+rh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${s});
`}const D3=new Map([[d.CLONE_REGION,T3]]);function R3(t,e,n,r){return _l(e,n,r,D3)}function Rd(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function kd(t,e,n){const i=`[${Rd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function qv(t,e,n,r=""){const s=`[${Rd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${s}, ${c});
`}return""}function k3(t,e,n,r){const s=`[${Rd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Yv(a);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${s}, ${_});
`,u}function G3(t,e,n,r){return qv(e,r,"corner_sum_p")}function M3(t,e,n,r){return qv(e,r,"corner_even_count_p")}function U3(t,e,n,r){return kd(e,r,"corner_sum_of_three_equals_the_other_p")}function $3(t,e,n,r){return kd(e,r,"equal_diagonal_differences_p")}function F3(t,e,n,r){return kd(e,r,"product_square_p")}const H3=new Map([[d.QUADRUPLE,k3],[d.CORNER_SUM,G3],[d.CORNER_EVEN_COUNT,M3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,U3],[d.PRODUCT_SQUARE,F3],[d.EQUAL_DIAGONAL_DIFFERENCES,$3]]);function P3(t,e,n,r){let i="";const s=H3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function gl(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return je(r)}function B3(t,e,n){const r=gl(t,e),[i,s]=r;return`constraint ${n}(${i}, ${s});
`}function W3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function hl(t,e,n,r,i,s=""){var m;const a=gl(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:s,v=W3(t,_,n);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint ${i}(${c}, ${u}, ${g});
`,h}function z3(t,e,n,r){const i=gl(e,r),[s,a]=i;return r.value==="V"||r.value==="v"?`constraint ${s} + ${a} = 5;
`:`constraint ${s} + ${a} = 10;
`}function Y3(t,e,n,r){return hl(t,e,n,r,"ratio_p","2")}function j3(t,e,n,r){return hl(t,e,n,r,"abs_difference","1")}function ih(t,e,n,r){const i=gl(e,r),[s,a]=i,c=r.value;return c==="<"?`constraint ${s} < ${a};
`:c===">"?`constraint ${s} > ${a};
`:""}function V3(t,e,n,r){return hl(t,e,n,r,"edge_sum_p")}function K3(t,e,n,r){return hl(t,e,n,r,"edge_modulo_p")}function X3(t,e,n,r){return B3(e,r,"edge_factor_p")}function q3(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[a,c]=je(s),[u,_]=s;let v="";if(u.r==_.r){const m=e.getRow(u.r)[0];v=Oe(m)}else if(u.c==_.c){const m=e.getCol(u.c)[0];v=Oe(m)}return v?`constraint abs(${a} - ${c}) == ${v};
`:""}function Z3(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[a,c]=je(s),u=di(s,re.YIN_YANG),[_,v]=u;return`constraint yin_yang_kropki_p(${a}, ${c}, ${_}, ${v});
`}function Q3(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),[a,c]=je(s),u=di(s,re.YIN_YANG),[_,v]=u;return`constraint yin_yang_white_kropki_p(${a}, ${c}, ${_}, ${v});
`}function J3(t,e,n,r){const s=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),a=di(s,re.UNKNOWN_REGIONS),[c,u]=a;return`constraint ${c} != ${u};
`}function e5(t,e,n,r){const s=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),a=di(s,re.SUGURU_REGIONS),[c,u]=a;return`constraint ${c} != ${u};
`}function t5(t,e,n,r){const s=r.cells.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v),a=di(s,re.CAVE_SHADING),[c,u]=a;return`constraint ${c} != ${u};
`}const n5=new Map([[d.XV,z3],[d.DIFFERENCE,j3],[d.RATIO,Y3],[d.EDGE_INEQUALITY,ih],[d.ONE_WAY_DOOR,ih],[d.EDGE_SUM,V3],[d.EDGE_MODULO,K3],[d.EDGE_FACTOR,X3],[d.XY_DIFFERENCES,q3],[d.YIN_YANG_KROPKI,Z3],[d.YIN_YANG_WHITE_KROPKI,Q3],[d.UNKNOWN_REGION_BORDER,J3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,e5],[d.EDGE_CAVE_ONE_OF_EACH,t5]]);function r5(t,e,n,r){let i="";const s=n5.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function No(t,e,n=!1){let i=e.cells.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a);return n&&(i=[...new Set(i)]),je(i)}function _t(t,e,n,r=!1){const s=`[${No(t,e,r).join(",")}]`;return`constraint ${n}(${s});
`}function vr(t,e,n,r=""){const s=`[${No(t,e).join(",")}]`;let a=e.value;if(a||(a=r),!a)return"";const c=parseInt(a);return`constraint ${n}(${s}, ${c});
`}function Gd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),s=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),s=!0);const c=`[${je(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${s});
`}function i5(t,e,n,r){return _t(e,r,"renban",!0)}function o5(t,e,n,r){return _t(e,r,"double_renban_p",!0)}function s5(t,e,n,r){return _t(e,r,"renrenbanban_p",!0)}function a5(t,e,n,r){return _t(e,r,"knabner_p",!0)}function l5(t,e,n,r){return _t(e,r,"renban_or_nabner_line_p",!0)}function c5(t,e,n,r){return _t(e,r,"out_of_order_consecutive_line_p")}function u5(t,e,n,r){const s=`[${No(e,r).join(",")}]`,a=r.value,c=a?parseInt(a):5;return`constraint whispers(${s}, ${c});
`}function d5(t,e,n,r){return`constraint whispers(${`[${No(e,r).join(",")}]`}, 4);
`}function _5(t,e,n,r){return _t(e,r,"strictly_increasing")}function f5(t,e,n,r){return _t(e,r,"fuzzy_thermo_p")}function g5(t,e,n,r){return _t(e,r,"increasing")}function h5(t,e,n,r){return vr(e,r,"custom_thermo_p")}function v5(t,e,n,r){return _t(e,r,"palindrome")}function p5(t,e,n,r){return vr(e,r,"sum_line_p")}function m5(t,e,n,r){return _t(e,r,"xv_line_p")}function E5(t,e,n,r){return vr(e,r,"at_least_x_line_p","10")}function C5(t,e,n,r){return vr(e,r,"product_line_p")}function I5(t,e,n,r){return vr(e,r,"maximum_adjacent_difference_line_p","2")}function b5(t,e,n,r){return _t(e,r,"adjacent_multiples_line_p")}function w5(t,e,n,r){return _t(e,r,"index_line_p")}function O5(t,e,n,r){return _t(e,r,"zipper_line_p")}function y5(t,e,n,r){return Gd(e,r,"segmented_sum_line_p")}function L5(t,e,n,r){return _t(e,r,"segmented_sum_and_renban_line_p")}function A5(t,e,n,r){return Gd(e,r,"n_consecutive_renban_line_p")}function S5(t,e,n,r){return Gd(e,r,"n_consecutive_fuzzy_sum_line_p")}function x5(t,e,n,r){const s=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_);let a="";const c=[];for(let _=0;_<s.length;_++){const v=s[_],g=e.getRow(v.r),h=Ue(g,re.BOARD),m=`cycle_${n}_${_}`;c.push(m);const E=v.c+1;a+=`var int: ${m} = cycle_order_f(${h}, ${E});
`}const u="["+c.join(",")+"]";return a+=`constraint strictly_increasing(${u});
`,a}function N5(t,e,n,r){return _t(e,r,"adjacent_differences_count_line_p")}function T5(t,e,n,r){return _t(e,r,"same_parity_line_p")}function D5(t,e,n,r){return vr(e,r,"renban_or_whispers_p","5")}function R5(t,e,n,r){return _t(e,r,"alldifferent",!0)}function k5(t,e,n,r){return _t(e,r,"repeated_digits_line_p")}function G5(t,e,n,r){return _t(e,r,"superfuzzy_arrow_p")}function M5(t,e,n,r){return _t(e,r,"ambiguous_arrow_p",!0)}function U5(t,e,n,r){return _t(e,r,"headless_arrow_p")}function $5(t,e,n,r){return vr(e,r,"unimodular_line_p","3")}function F5(t,e,n,r){return vr(e,r,"modular_line_p","3")}function H5(t,e,n,r){return vr(e,r,"modular_or_unimodular_line_p","3")}function P5(t,e,n,r){return _t(e,r,"arithmetic_sequence_line_p")}function B5(t,e,n,r){return _t(e,r,"odd_even_oscillator_line_p")}function W5(t,e,n,r){return vr(e,r,"high_low_oscillator_line_p","5")}function z5(t,e,n,r){return _t(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function Y5(t,e,n,r){return _t(e,r,"look_and_say_line_p",!0)}function j5(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h);function a(h){const m=[];let E=null;for(const I of h)I.r!=E?(m.push([I]),E=I.r):m[m.length-1].push(I);return m}const c=a(s);if(c.length<2)return"";const u=c[0],v=`[${je(u).join(",")}]`;let g="";for(let h=1;h<c.length;h++){const m=c[h],I=`[${je(m).join(",")}]`;g+=`constraint sum(${I}) == sum(${v});
`}return g}function V5(t,e,n,r){return _t(e,r,"between_line_p")}function K5(t,e,n,r){return _t(e,r,"tightrope_line_p")}function X5(t,e,n,r){return _t(e,r,"double_arrow_p")}function q5(t,e,n,r){return _t(e,r,"split_peas_p")}function Z5(t,e,n,r){return _t(e,r,"parity_count_line_p")}function Q5(t,e,n,r){return _t(e,r,"product_of_ends_equals_sum_of_line_p")}function J5(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const s=i.region;n!==s&&(r.length&&e.push(r),r=[]),r.push(i),n=s}return r.length&&e.push(r),e}function eG(t,e,n,r){let i="";const a=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),c=J5(a);if(!c.length)return"";const u=`sum_line_${n}`;i+=`var int: ${u};
`;for(const _ of c){const h=`constraint sum(${`[${je(_).join(",")}]`}) == ${u};
`;i+=h}return i}function tG(t,e,n,r){return`constraint entropic_line_p(${`[${No(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function nG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${No(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function rG(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${je(s).join(",")}]`,u=Ue(s,re.YIN_YANG);let _=r.value;_||(_="5");const v=parseInt(_);return`constraint yin_yang_shaded_whispers_line_p(${c}, ${u}, ${v});
`}function iG(t,e,n,r){const s=r.cells.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h),c=`[${je(s).join(",")}]`,u=Ue(s,re.YIN_YANG);let _=r.value;_||(_="3");const v=parseInt(_);return`constraint yin_yang_unshaded_modular_line_p(${c}, ${u}, ${v});
`}function Md(t,e,n){const i=e.cells.map(_=>t.getCell(_.r,_.c)).filter(_=>!!_),a=`[${je(i).join(",")}]`,c=Ue(i,re.YIN_YANG);return`constraint ${n}(${a}, ${c});
`}function oG(t,e,n,r){return Md(e,r,"yin_yang_unshaded_entropic_line_p")}function sG(t,e,n,r){return Md(e,r,"yin_yang_indexing_line_coloring_p")}function aG(t,e,n,r){return Md(e,r,"yin_yang_region_sum_line_p")}function lG(t,e,n,r){const s=r.cells.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_),a=Ue(s,re.VALUES_GRID),c=Ue(s,re.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${a}, ${c});
`}function Ud(t,e,n){const i=e.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u),a=`[${dl(i).join(", ")}]`;return`constraint ${n}(${a});
`}function cG(t,e,n,r){return Ud(e,r,"between_line_p")}function uG(t,e,n,r){return Ud(e,r,"double_arrow_p")}function dG(t,e,n,r){return Ud(e,r,"strictly_increasing")}const _G=new Map([[d.THERMOMETER,_5],[d.FUZZY_THERMOMETER,f5],[d.SLOW_THERMOMETER,g5],[d.CUSTOM_THERMOMETER,h5],[d.RENBAN_LINE,i5],[d.DOUBLE_RENBAN_LINE,o5],[d.RENRENBANBAN_LINE,s5],[d.NABNER_LINE,a5],[d.WHISPERS_LINE,u5],[d.DUTCH_WHISPERS,d5],[d.RENBAN_OR_WHISPERS_LINE,D5],[d.RENBAN_OR_NABNER_LINE,l5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,c5],[d.N_CONSECUTIVE_RENBAN_LINE,A5],[d.PALINDROME,v5],[d.SUM_LINE,p5],[d.PRODUCT_LINE,C5],[d.XV_LINE,m5],[d.AT_LEAST_X_LINE,E5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,I5],[d.SAME_PARITY_LINE,T5],[d.ADJACENT_MULTIPLES_LINE,b5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,N5],[d.LOOK_AND_SAY_LINE,Y5],[d.ROW_SUM_LINE,j5],[d.INDEX_LINE,w5],[d.ZIPPER_LINE,O5],[d.SEGMENTED_SUM_LINE,y5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,L5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,S5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,z5],[d.SUPERFUZZY_ARROW,G5],[d.AMBIGUOUS_ARROW,M5],[d.HEADLESS_ARROW,U5],[d.ARITHMETIC_SEQUENCE_LINE,P5],[d.ODD_EVEN_OSCILLATOR_LINE,B5],[d.HIGH_LOW_OSCILLATOR_LINE,W5],[d.UNIQUE_VALUES_LINE,R5],[d.REPEATED_DIGITS_LINE,k5],[d.UNIMODULAR_LINE,$5],[d.MODULAR_LINE,F5],[d.MODULAR_OR_UNIMODULAR_LINE,H5],[d.REGION_SUM_LINE,eG],[d.ENTROPIC_LINE,tG],[d.ENTROPIC_OR_MODULAR_LINE,nG],[d.ROW_CYCLE_THERMOMETER,x5],[d.BETWEEN_LINE,V5],[d.TIGHTROPE_LINE,K5],[d.DOUBLE_ARROW_LINE,X5],[d.SPLIT_PEAS,q5],[d.PARITY_COUNT_LINE,Z5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,Q5],[d.DOUBLERS_THERMOMETER,dG],[d.DOUBLERS_BETWEEN_LINE,cG],[d.DOUBLERS_DOUBLE_ARROW_LINE,uG],[d.YIN_YANG_SHADED_WHISPERS_LINE,rG],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,oG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,iG],[d.YIN_YANG_REGION_SUM_LINE,aG],[d.YIN_YANG_INDEXING_LINE_COLORING,sG],[d.GOLDILOCKS_ZONE_REGION_SUM,lG]]);function fG(t,e,n,r){let i="";const s=_G.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function vl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return je(i)}function xs(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let s="";return(!r||r.outside)&&(s=`R${n.r}C${n.c}`,s=s.replace("-","m")),e||(e=s),t.getOrSetSharedVar(e,s,i)}function Jn(t,e,n,r){const i=n.cell,s=e.getCell(i.r,i.c),c=`[${vl(e,n).join(",")}]`,u=n.value,_=xs(t,u,i,s);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function gG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),c=`[${vl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=xs(t,u,i,s);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,E}function hG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),c=`[${vl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),h=xs(t,u,i,s);if(!h)return"";const m=h[1];let E=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,E+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function vG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),a=vl(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,v=xs(t,_,i,s);if(!v)return"";const g=v[1];let h=v[0];return h+=`constraint x_index_p(${c}, ${u}, ${g});
`,h}function pG(t,e,n,r){return Jn(t,e,r,"x_sum_p")}function mG(t,e,n,r){return Jn(t,e,r,"shortsighted_x_sum_p")}function EG(t,e,n,r){return Jn(t,e,r,"broken_x_sum_p")}function CG(t,e,n,r){return Jn(t,e,r,"shifted_x_sum_p")}function IG(t,e,n,r){return Jn(t,e,r,"skyscrapers_p")}function bG(t,e,n,r){return Jn(t,e,r,"x_sum_skyscrapers_p")}function wG(t,e,n,r){return Jn(t,e,r,"battlefield_p")}function OG(t,e,n,r){return Jn(t,e,r,"rising_streak_p")}function yG(t,e,n,r){return Jn(t,e,r,"outside_consecutive_sum_p")}function LG(t,e,n,r){const i=r.cell,s=r.direction,a=e.getCellsInDirection(i.r,i.c,s),u=`[${je(a).join(",")}]`,_=Ue(a,re.CELL_CENTER_LOOP),v=r.value;if(v){const g=parseInt(v);return`constraint loopwhiches_p(${u}, ${_}, ${g});
`}return""}function AG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ue(c,re.BOARD),_=Ue(c,re.UNKNOWN_REGIONS),v=r.value,g=xs(t,v,i,s);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${h});
`,m}function SG(t,e,n,r){return Jn(t,e,r,"little_killer_sum_p")}function xG(t,e,n,r){return Jn(t,e,r,"little_killer_product_p")}function NG(t,e,n,r){return Jn(t,e,r,"x_omit_little_killer_sum_p")}function TG(t,e,n,r){const i=r.cell,s=r.direction,a=e.getCellsInDirection(i.r,i.c,s),u=`[${je(a).join(",")}]`,_=Ue(a,re.YIN_YANG),v=r.value;if(v){const g=parseInt(v);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${u}, ${_}, ${g});
`}return""}function DG(t,e,n,r){const i=r.cell,s=r.direction,a=e.getCellsInDirection(i.r,i.c,s),u=`[${dl(a).join(", ")}]`,_=r.value;if(_){const v=parseInt(_);return`constraint little_killer_sum_p(${u}, ${v});
`}return""}const RG=new Map([[d.SANDWICH_SUM,gG],[d.X_SUM,pG],[d.SHORTSIGHTED_X_SUM,mG],[d.BROKEN_X_SUM,EG],[d.SHIFTED_X_SUM,CG],[d.SKYSCRAPERS,IG],[d.X_SUM_SKYSCRAPERS,bG],[d.X_INDEX,vG],[d.BATTLEFIELD,wG],[d.SANDWICH_SUM_XOR_X_SUM,hG],[d.RISING_STREAK,OG],[d.OUTSIDE_CONSECUTIVE_SUM,yG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,TG],[d.LOOPWICHES,LG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,AG],[d.LITTLE_KILLER_SUM,SG],[d.LITTLE_KILLER_PRODUCT,xG],[d.X_OMIT_LITTLE_KILLER_SUM,NG],[d.NEGATORS_LITTLE_KILLER_SUM,DG]]);function kG(t,e,n,r){let i="";const s=RG.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function GG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let s=t.getCellsInDirection(r.r,r.c,i);s=[r,...s];const a=Ue(s,re.SASHIGANE),c=Ue(s,re.SASHIGANE_BENDS),u=Oe(r),_=xt(r,re.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function MG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,s=t.getCellsInDirection(r.r,r.c,i),c="["+je(s).join(",")+"]",u=Ue(s,re.CELL_CENTER_LOOP),_=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const UG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,GG],[d.THERMO_SIGHTLINE_LOOP_ARROW,MG]]);function $G(t,e,n,r){return _l(e,n,r,UG)}function Zv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Oe(i);return`constraint ${n}(${s});
`}function FG(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Qv(t,e,n,r=""){const i=e.cell,s=t.getCell(i.r,i.c);if(!s)return"";const a=Oe(s);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function HG(t,e,n,r){return Zv(e,r,"odd_p")}function PG(t,e,n,r){return Zv(e,r,"even_p")}function BG(t,e,n,r){return Qv(e,r,"low_digit_p","5")}function WG(t,e,n,r){return Qv(e,r,"high_digit_p","5")}function Jv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Oe(i),a=t.getNeighboorCells(i),c=Ue(a,re.BOARD);return`constraint ${n}(${c}) == ${s};
`}function zG(t,e,n,r){return Jv(e,r,"odd_count")}function YG(t,e,n,r){return Jv(e,r,"even_count")}function jG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s);c.push(s);const u=Ue(c,re.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function VG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getOrthogonallyAdjacentCells(s);return`constraint sum_p(${Ue(c,re.BOARD)}, ${a});
`}function KG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getDiagonallyAdjacentCells(s);return`constraint sum_p(${Ue(c,re.BOARD)}, ${a});
`}function XG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=e.getRow(s.r),c=Ue(a,re.BOARD),u=s.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function qG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=e.getCol(s.c),c=Ue(a,re.BOARD),u=s.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function ZG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=s.r+1,u=s.c+1;if(s.region!==null){const v=s.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${v};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function QG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const v=Oe(a),g=Oe(c),h=Oe(u),m=Oe(_);return`constraint groups_opposite_parity_p([${v},${g}], [${h},${m}]);
`}function $d(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Oe(i),[a,c,u,_]=Sd(t,i);return`constraint ${n}(${s}, ${a}, ${c}, ${u}, ${_});
`}function JG(t,e,n,r){return $d(e,r,"is_watchtower_p")}function eM(t,e,n,r){return $d(e,r,"is_not_watchtower_p")}function tM(t,e,n,r){return $d(e,r,"farsight_p")}function nM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),[c,u,_,v]=Sd(e,s);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${v}, 9);
`}function rM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getRow(s.r),u="["+je(c).join(",")+"]",_=e.getCol(s.c),v="["+je(_).join(",")+"]",[g,h]=[s.r+1,s.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${h}, ${a});
`}function ep(t,e,n){const r=Object.values(e);let i="";const s=r.map(c=>c.cell),a=new Set(s.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=Oe(_),g=t.getOrthogonallyAdjacentCells(_).filter(E=>!a.has(E)),h=Ue(g,re.BOARD),m=`constraint ${n}(${h}, ${v});
`;i+=m}return i}function iM(t,e,n){return ep(e,n,"maximum_p")}function oM(t,e,n){return ep(e,n,"minimum_p")}function sM(t,e,n){const r=Object.values(n);let i="";const s=r.map(_=>_.cell),a=new Set(s.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function aM(t,e,n){const r=Object.values(n);let i="";const s=r.map(g=>g.cell),a=new Set(s.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${je([...a]).join(`,
	`)}`,v=`${di([...a],re.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${re.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${re.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const h=xt(g,re.COUNTING_CIRCLES_COLORS);i+=`constraint ${h} == 0;
`}for(const g of r){const h=g.cell,m=e.getCell(h.r,h.c);if(!m)continue;const E=Oe(m),I=xt(m,re.COUNTING_CIRCLES_COLORS),b=g.value;b?i+=`constraint ${I} == ${b};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${I}) == ${E};
`}return i+=`
`,i}function lM(t,e,n){const r=Object.values(n);let i="";const s=r.map(_=>_.cell),a=new Set(s.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${je([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function cM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s),u=[s,...c];return`constraint yin_yang_minesweeper_p(${Ue(u,re.YIN_YANG)}, ${a});
`}function Fd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Oe(i),a=Ad(t,i),c=[];for(const v of a){const g=Ue(v,re.YIN_YANG);c.push(g)}const u=xt(i,re.YIN_YANG);return`constraint ${n}(${s}, ${u}, ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]});
`}function uM(t,e,n,r){return Fd(e,r,"yin_yang_seen_unshaded_p")}function dM(t,e,n,r){return Fd(e,r,"yin_yang_seen_shaded_p")}function _M(t,e,n,r){return Fd(e,r,"yin_yang_seen_same_shade_p")}function fM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=xt(s,re.YIN_YANG),u=e.getOrthogonallyAdjacentCells(s),_=Ue(u,re.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function gM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s);return`constraint count(${Ue(c,re.YIN_YANG)}, 1) == ${a};
`}function hM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=`two_contiguous_regions[${s.r},${s.c}]`,u=e.getRow(s.r),_=e.getCol(s.c),v="["+u.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]",g="["+_.map(m=>`two_contiguous_regions[${m.r},${m.c}]`).join(", ")+"]";return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${a}, ${c});
`}function vM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getRow(s.r),u=e.getCol(s.c),_="["+c.map(h=>`unknown_regions[${h.r},${h.c}]`).join(", ")+"]",v="["+u.map(h=>`unknown_regions[${h.r},${h.c}]`).join(", ")+"]";return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${a});
`}function pM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=`nurimisaki[${s.r},${s.c}]`;let v=`constraint nurimisaki_unshaded_endpoint_p(${"["+e.getOrthogonallyAdjacentCells(s).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${c});
`;const g=Ad(e,s),h=[];for(const m of g){const E="["+m.map(I=>`nurimisaki[${I.r}, ${I.c}]`).join(", ")+"]";h.push(E)}return v+=`constraint nurimisaki_count_uninterrupted_unshaded_p(${a}, ${c}, ${h[0]}, ${h[1]}, ${h[2]}, ${h[3]});
`,v}function mM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=xt(s,re.SASHIGANE),u=xt(s,re.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function EM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=xt(s,re.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function CM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint ${xt(s,re.CELL_CENTER_LOOP)} == 1;
`:""}function IM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint ${xt(s,re.CELL_CENTER_LOOP)} == 0;
`:""}function bM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=e.getNeighboorCells(s),u=[s,...c];return`constraint sum(${Ue(u,re.CELL_CENTER_LOOP)}) == ${a};
`}function wM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Oe(s),c=xt(s,re.CAVE_SHADING),u=Ad(e,s),_=[];for(const g of u){const h=Ue(g,re.CAVE_SHADING);_.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function OM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Oe(s),v=xt(s,re.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(s),h=Ue(g,re.BOARD),m=Ue(g,re.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(s),I=Ue(E,re.BOARD),b=Ue(E,re.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[Be.NE,Be.NW,Be.SE,Be.SW],L=[];for(const U of w)e.getCellsInDirection(s.r,s.c,U).forEach(W=>L.push(W));const R=Ue(L,re.BOARD),k=Ue(L,re.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${R}, ${k}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function yM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Oe(s),v=xt(s,re.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(s),h=Ue(g,re.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${v}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],E=[];for(const I of m){const b=e.getCellsInDirection(s.r,s.c,I);if(!b.length)continue;const w=Ue(b,re.BOARD),L=Ue(b,re.UNKNOWN_REGIONS),R=`in_arrow_${n}_${I}`,k=`in_arrow_${n}_${I}[1]`;E.push(k),u+=`array[index_set(${w})] of var bool: ${R};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${L}, ${R}, ${_}, ${v});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function LM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint dpath_source == ${s.r*e.nCols+s.c+1};
`:""}function AM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint dpath_target == ${s.r*e.nCols+s.c+1};
`:""}function SM(t,e,n){let r="",i=0;for(const[s,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const v=FG(t,_,s);if(!v)continue;const g=v[1];r+=v[0];const h=xt(u,re.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${re.BOARD}, ${re.NURIKABE_REGIONS}, ${h}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${re.NURIKABE_REGIONS})) == ${i+1};
`,r}function xM(t,e,n){let r="";const i=Nd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,v]of u.flatMap((g,h)=>u.slice(h+1).map(m=>[g,m]))){const g=_.cell,h=v.cell,m=e.getCell(g.r,g.c),E=e.getCell(h.r,h.c);if(!m||!E)continue;const I=xt(m,re.BOARD),b=xt(E,re.BOARD);r+=`constraint ${I} == ${b};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=Ue(a,re.BOARD);return r+=`constraint alldifferent(${c});
`,r}const NM=new Map([[d.ODD,HG],[d.EVEN,PG],[d.LOW_DIGIT,BG],[d.HIGH_DIGIT,WG],[d.ODD_MINESWEEPER,zG],[d.EVEN_MINESWEEPER,YG],[d.DIAGONALLY_ADJACENT_SUM,KG],[d.ORTHOGONAL_SUM,VG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,jG],[d.FRIENDLY_CELL,ZG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,QG],[d.WATCHTOWER,JG],[d.NOT_WATCHTOWER,eM],[d.FARSIGHT,tM],[d.RADAR,nM],[d.INDEXING_COLUMN,XG],[d.INDEXING_ROW,qG],[d.SANDWICH_ROW_COL_COUNT,rM],[d.YIN_YANG_MINESWEEPER,cM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,uM],[d.YIN_YANG_SEEN_SHADED_CELLS,dM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,_M],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,fM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,gM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,hM],[d.SEEN_REGION_BORDERS_COUNT,vM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,pM],[d.SASHIGANE_BEND_REGION_COUNT,mM],[d.SASHIGANE_REGION_SUM,EM],[d.CELL_ON_THE_LOOP,CM],[d.CELL_NOT_ON_THE_LOOP,IM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,bM],[d.CAVE_CLUE,wM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,OM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,yM],[d.DIRECTED_PATH_START,LM],[d.DIRECTED_PATH_END,AM]]),TM=new Map([[d.MAXIMUM,iM],[d.MINIMUM,oM],[d.COUNTING_CIRCLES,sM],[d.COLORED_COUNTING_CIRCLES,aM],[d.UNIQUE_CELLS,lM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,SM],[d.TELEPORT,xM]]);function DM(t,e,n,r){let i="";const s=NM.get(n),a=TM.get(n);if(s)for(const[c,u]of Object.entries(r)){const _=s(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function RM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=xt(r,re.UNKNOWN_REGIONS),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v),h=Ue(g,re.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(v=>`count_different(${v}, ${s})`).join(" + ")} == ${i};
`}function kM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=xt(r,re.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g="["+je(_).join(",")+"]",h=Ue(_,re.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${s}, ${g}, ${h}) == ${i};
`}return c}function GM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),_=Ue(u,re.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function MM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=xt(r,re.YIN_YANG),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),g=Ue(v,re.YIN_YANG),h=Ue(v,re.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${s}, ${g}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function UM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=e.directions,a=[];for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${Ue(_,re.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function $M(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=e.directions,a=[];for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${Ue(_,re.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function FM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=xt(r,re.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),m=`count(${"["+di(v,re.GALAXY_REGIONS).join(",")+"]"}, ${s})`;c.push(m)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function HM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";a+=`constraint hot_arrows_p(${v}, ${i});
`}return a}function PM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),v="["+je(u).join(",")+"]";a+=`constraint cold_arrows_p(${v}, ${i});
`}return a}const BM=new Map([[d.HOT_ARROWS,HM],[d.COLD_ARROWS,PM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,RM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,kM],[d.LOOP_CELL_COUNT_ARROWS,$M],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,MM],[d.YIN_YANG_COUNT_SHADED_CELLS,GM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,FM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,UM]]);function WM(t,e,n,r){return _l(e,n,r,BM)}function zM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function YM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function jM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const VM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,zM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,YM],[d.FORBIDDEN_KNIGHT_SUM,jM]]);function KM(t,e,n,r){return _l(e,n,r,VM)}const XM=[N3,DM,$G,WM,r5,P3,fG,s3,b3,kG,R3,KM];function qM(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[s,a]of r.entries())for(const c of XM){let u=c(e,i,s,a);u=dt(u,`${s}`),n+=u}return n}function ZM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,s+=`constraint yin_yang_p(yin_yang);
`,s}function QM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,s+=`constraint nurimisaki_p(nurimisaki);
`,s}function JM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,s+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,s+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,s}function e8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`
% Two Contiguous Regions
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,s+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,s}function t8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const s=Math.max(r.nCols,r.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${s});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${s});
`,a}function n8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,s+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,s+=`constraint sashigane_adjacency_p(sashigane);
`,s+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,s+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,s+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,s}function r8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, true);
`,s}function i8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, false);
`,s}function o8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,s+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,s+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,s}function s8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, false);
`,s+=`constraint modular_loop_p(board, cell_center_loop);
`,s}function us(t,e,n,r){const i=t.grid;let s="";s+=`% Exactly ${e} per row 
`;const a=i.nRows;for(let v=0;v<a;v++){const g=i.getRow(v),h=r(g);s+=`constraint count_eq(${h}, ${n}, ${e});
`}s+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let v=0;v<c;v++){const g=i.getCol(v),h=r(g);s+=`constraint count_eq(${h}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){s+=`
% Exactly ${e} per region 
`;const v=i.getUsedRegions();for(const g of v){const h=i.getRegion(g),m=r(h);s+=`constraint count_eq(${m}, ${n}, ${e});
`}}return s}function a8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,s+=us(n,1,!0,a=>Ue(a,re.DOUBLERS)),s+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,s}function l8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,a+=us(n,1,!0,c=>Ue(c,re.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${s}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${s});
`,a}function c8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,a+=`constraint fillomino_p(board, ${s});
`,a}function u8(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.CAVE_SHADING,a=re.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${s}, ${a});
`,c}function d8(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.CAVE_SHADING,a=re.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${s}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${re.BOARD}, ${c});
`,u}function _8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.GALAXY_REGIONS,a=re.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${s};
`,u+=`constraint galaxy_restrict_numbering_p(${s});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${s}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${s}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${s});
`,u}function f8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,s+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,s}function g8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint goldilocks_zone_p(goldilocks_regions);
`,s+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,s}function h8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=nh.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of nh.entries()){const _=u.length,v=u[0].length,g=`pentomino_${c}`;a+=`array[1..${_}, 1..${v}] of 0..1: ${g} = ${xd(u)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return a}function v8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.LITS_SHADING,a=re.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${s});
`,c+=`constraint lits_shading_ids_p(${s}, ${a});
`,c+=`constraint lits_region_and_ids_p(${re.BOARD_REGIONS}, ${a});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const v=r.getRegion(_),h=`constraint count_eq(${Ue(v,re.LITS_SHADING)}, 1, 4);
`;c+=h}return c}function p8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.LITS_SHADING,a=re.LITS_REGIONS,c=re.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${s});
`,u+=`constraint lits_shading_ids_p(${s}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${s});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const g=r.getRegion(v),m=`constraint count_eq(${Ue(g,re.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function m8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=re.LITS_SHADING,a=re.STAR_BATTLE,c=re.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=us(n,2,1,_=>Ue(_,re.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=us(n,1,1,_=>Ue(_,re.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=us(n,1,2,_=>Ue(_,re.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${s}, ${c});
`,u}function $t(t,e,n){return t*n+e+1}function E8(t){const e=t.grid;function n(c,u){const _=[],v=$t(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=$t(u.r+g,u.c,e.nCols);_.push([v,h]),_.push([h,v])}return _}function r(c,u){const _=[],v=$t(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=$t(u.r,u.c+g,e.nCols);_.push([v,h]),_.push([h,v])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=ad(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=$t(g[0].r,g[0].c,e.nCols),m=$t(g[3].r,g[3].c,e.nCols);i.push([h,m]),i.push([m,h]),h=$t(g[1].r,g[1].c,e.nCols),m=$t(g[2].r,g[2].c,e.nCols),i.push([h,m]),i.push([m,h])}for(let _=0;_<u.length-1;_++){const v=gO(Yh(u[_],u[_+1]),.5),h=cd(v).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function C8(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const s of Object.values(i)){const c=s.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,v=s.value,g=$t(u.r,u.c,e.nCols),h=$t(_.r,_.c,e.nCols);v==="<"?n.push([g,h]):v===">"&&n.push([h,g])}return n}function I8(t){const e=[];for(const n of t.getAllCells()){const r=$t(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const s of i){const a=$t(s.r,s.c,t.nCols);e.push([r,a])}}return e}function b8(t){const e=t.grid,n=[],r=[],s=t.localConstraints.get(d.TELEPORT),a=s?Object.values(s):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(s){const _=Nd(a);let v=1;for(const g of _.values())if(!(g.length<=1)){for(const[h,m]of g.flatMap((E,I)=>g.slice(I+1).map(b=>[E,b]))){const E=$t(h.cell.r,h.cell.c,e.nCols),I=$t(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[h.cell.r][h.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const h of g){const m=$t(h.cell.r,h.cell.c,e.nCols);r.push(m)}v++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function w8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="",a=I8(r);const c=E8(n),u=C8(n);c.push(...u);const _=n.localConstraints;a=a.filter(w=>!c.some(L=>w[0]===L[0]&&w[1]===L[1]));const v=b8(n);if(v.tp_edges.length){a.push(...v.tp_edges);const w=xd(v.tp_arr),L=v.tp_count;s+=`
% teleports grid
`,s+=`array[ROW_IDXS, COL_IDXS] of 0..${L}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,h=a.length,m="["+a.map(w=>w[0]).join(",")+"]",E="["+a.map(w=>w[1]).join(",")+"]";s+=`array[int] of int: dpath_from = ${m};
`,s+=`array[int] of int: dpath_to = ${E};
`,s+=`var 1..${g}: dpath_source;
`,s+=`var 1..${g}: dpath_target;
`,s+=`array[1..${g}] of var bool: dpath_ns;
`,s+=`array[1..${h}] of var bool: dpath_es;
`,s+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,s+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let L=0;L<r.nCols-1;L++){const R=r.getCell(w,L),k=r.getCell(w,L+1),U=r.getCell(w+1,L),P=r.getCell(w+1,L+1);if(!R||!k||!U||!P)continue;const W=$t(R.r,R.c,r.nCols),X=$t(k.r,k.c,r.nCols),J=$t(U.r,U.c,r.nCols),ce=$t(P.r,P.c,r.nCols),ie=[[W,ce],[ce,W],[X,J],[J,X]].map(pe=>a.findIndex(me=>pe[0]===me[0]&&pe[1]===me[1])).filter(pe=>pe!==-1);if(ie.length){const pe=ie.map(me=>`dpath_es[${me+1}]`).join(",");s+=`constraint sum([${pe}]) <= 1;
`}}const I=_.get(d.TELEPORT),b=I?Object.values(I):[];if(v.tp_count>0){s+=`
% At most 1 edge per teleporter
`;for(const w of b){const L=w.cell,R=r.getCell(L.r,L.c);if(!R)continue;const k=r.getNeighboorCells(R),U=$t(R.r,R.c,r.nCols),P=[];for(const X of k){if(b.some(Q=>Q.cell.r===X.r&&Q.cell.c==X.c&&Q.value===w.value))continue;const ce=$t(X.r,X.c,r.nCols);P.push([U,ce]),P.push([ce,U])}const W=P.map(X=>a.findIndex(J=>X[0]===J[0]&&X[1]===J[1])).filter(X=>X!==-1);if(W.length){const X=W.map(J=>`dpath_es[${J+1}]`).join(",");s+=`constraint sum([${X}]) <= 1;
`}}}return s}function O8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,a+=`constraint chaos_construction_suguru_p(board, ${s});
`,a}const y8=new Map([[d.FILLOMINO,c8],[d.CAVE,u8],[d.GALAXIES,_8],[d.YIN_YANG,ZM],[d.NURIMISAKI,QM],[d.NURIKABE,JM],[d.TWO_CONTIGUOUS_REGIONS,e8],[d.UNKNOWN_REGIONS,t8],[d.SASHIGANE,n8],[d.CELL_CENTER_LOOP_NO_TOUCHING,r8],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,i8],[d.NOT_LOOP_SIZED_REGIONS,o8],[d.MODULAR_LOOP,s8],[d.DOUBLERS,a8],[d.NEGATORS,l8],[d.GOLDILOCKS_ZONE,g8],[d.NEXUS,f8],[d.PENTOMINO_TILLING,h8],[d.LITS,v8],[d.CAVE_LITS,p8],[d.LITS_BLACK_WHITE_STAR_BATTLE,m8],[d.RENBAN_CAVES,d8],[d.MAZE_DIRECTED_PATH,w8],[d.CHAOS_CONSTRUCTION_SUGURU,O8]]);function L8(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,s]of r.entries()){if(!s)continue;const a=y8.get(i);if(!a)continue;let c=a(t,i);c=dt(c,`${i}`),e+=c}return e}function A8(){return`
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
            % when when[r, c] > 1, it is equal to the minimum adjacent element in the same region + 1
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
        grid[r,c] == 1 -> regions[r, c] = (r * n_cols + c + 1)
    )
    /\\ forall(r in rows, c in cols)(
        grid[r,c] == 1 -> forall(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            regions[r,c] != regions[t.1, t.2]
        )
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
        (regions[r1, c1] != regions[r2, c2]) = (grid[r1, c1] != grid[r2, c2])
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
        when[r, c] <= size[regions[r, c]]
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

    % all cells with a value equal to 2 must have exactly 1 neighbour equal to it
    /\\ forall(r in rows, c in cols where grid[r,c] == 2)(
        sum(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            grid[r,c] == grid[t.1,t.2]
        ) == 1
    )

    % all cells with a value greater than 2 must have at least 2 neighbour equal to it
    /\\ forall(r in rows, c in cols where grid[r,c] > 2)(
        exists(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            grid[r,c] == grid[t.1,t.2]
        )
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

`}function S8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const s=`constraint ${Oe(r)} = ${r.value};
`;n+=s}return n.length&&(n=`
% Given Digits
`+n),n}function tp(t){const e=t.grid;let n=t.valid_digits;const r=new ik(t),[i,s]=[e.nRows,e.nCols],a=i*s;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(A8());let u=`1..${Math.max(i,s)}`;return!!t.globalConstraints.get(d.FILLOMINO)?u=`1..${a}`:t.globalConstraints.get(d.HEXED_SUDOKU)?n=[...St.range(1,16)]:n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${i-1};
`),r.add(`set of int: COL_IDXS = 0..${s-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),sk(r,e),r.add(S8(t)),r.add(Jk(t)),r.add(e3(t)),r.add(L8(r)),r.add(qM(t,r)),r.add(n3(t)),r.add(`
solve satisfy;`),r}var x8=ne('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function N8(t,e){ae(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n);let i=$(e,"showModal",12,!1);function s(g,h,m){var E=document.createElement("a"),I=new Blob([g],{type:m});E.href=URL.createObjectURL(I),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=ot(Os);return tp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),h=th(g);navigator.clipboard.writeText(h)}function _(){const g=Cu(r()),h=a();s(h,`${g}.mzn`,"text/plain")}function v(){const g=Cu(r()),h=a(),m=th(h);s(m,`${g}.mzn`,"text/plain")}fe(),Hr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,h)=>{var m=x8(),E=K(m),I=F(E,2),b=F(I,2),w=F(b,2);Y(m),Me("click",E,c),Me("click",I,u),Me("click",b,_),Me("click",w,v),T(g,m)},$$slots:{default:!0},$$legacy:!0}),le()}function Ns(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(_),i.push([g]))}}const s=rl(r,i);_o(s)}function T8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],s=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];i.push(E),a(h,m,t[h][m])}function a(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,i[i.length-1].push([h,m]),a(h+1,m,E),a(h-1,m,E),a(h,m+1,E),a(h,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,I]of h)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const L=E+b,R=I+w;if(m.some(([k,U])=>k===L&&U===R))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(c[h].add(m),c[m].add(h));const _=[1,4,7,9],v=new Array(i.length).fill(0);function g(h,m){for(const E of c[h])if(v[E]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of _)if(g(h,m)){v[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,E]of i[h])s[m][E]=v[h];return s}function D8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const s=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let v=0;v<_.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const h=_[v];s.push(g),a.push(h)}}const c=kv(s,a);_o(c)}function R8(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const s=t[i];if(s!==void 0){Ns(s,e,r);return}}}function k8(t,e){if(t===void 0)return;const n=["doublers_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const s=t[i];if(s!==void 0){Ns(s,e,r);return}}}function G8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const v=c[u];i.push([v+1])}}const s=rl(r,i);_o(s)}function M8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Ns(n,e,new Map([[0,4],[1,7],[2,9]]))}function U8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Ns(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function $8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Ns(n,e,new Map([[1,7],[2,4],[3,9]]))}function F8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[s,a]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<i.length;v++){const g=i[v];for(let h=0;h<g.length-1;h++){const m=e.getCell(v,h),E=e.getCell(v,h+1);if(!m||!E)continue;const I=g[h],b=g[h+1];if(I===b)continue;const w={colorId:c,p1:{r:v,c:h+1},p2:{r:v+1,c:h+1}};u.push(w)}}for(let v=0;v<a;v++)for(let g=0;g<s-1;g++){const h=e.getCell(g,v),m=e.getCell(g+1,v);if(!h||!m)continue;const E=i[g][v],I=i[g+1][v];if(E===I)continue;const b={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(b)}const _=gs(u);fr(_);return}}function H8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const s=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const h=i[v.r][v.c],m=i[g.r][g.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};s.push(E)}}}const a=gs(s);fr(a);return}}function P8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const s=T8(i);if(!s)return;const a=[],c=[];for(let _=0;_<s.length;_++){const v=s[_];for(let g=0;g<v.length;g++){const h=e.getCell(_,g);if(!h)continue;a.push(h);const m=v[g];c.push([m])}}const u=rl(a,c);_o(u);return}}function B8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const s=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const g=i[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};s.push(m)}}const a=hL(s);fr(a);return}}function W8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,s=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,g]=_,[h,m]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols],[E,I]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!vo({r:h,c:m},{r:E,c:I}))continue;const L={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};s.push(L)}const a=gs(s);fr(a)}function z8(t,e){const n=e.puzzle,r=n.grid;fr(hd()),D8(t,n),G8(t,r),F8(t,r),M8(t,r),U8(t,r),H8(t,r),k8(t,r),P8(t,r),R8(t,r),B8(t,r),$8(t,r),W8(t,e)}function Y8(){const{subscribe:t,set:e}=Ht(0),n=100;let r=Date.now(),i,s=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-s,i=setInterval(()=>{s=Date.now()-r,e(s)},n))},stop:()=>{a&&(a=!1,clearInterval(i),s=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),s=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:s})}}var j8=ne('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function V8(t,e){ae(e,!1);const n=rt(),r=()=>ve(Os,"$puzzleStore",n),i=()=>ve(gn,"$gridStore",n),s=()=>ve(w,"$timer",n),a=D(),c=D(),u=D(),_=D();let v=D(!1),g=D(!1),h=D(null),m=D(100),E=D("100"),I=D(null),b=D("IDLE");const w=Y8();function L(X){return X===null?"":String(X)}function R(X){const J=Math.floor(X/6e4),ce=Math.floor(X%6e4/1e3),Q=Math.floor(X%1e3/100),ie=ce.toString().padStart(2,"0");return`${J}:${ie}.${Q}`}function k(){x(g,!0)}function U(X){const J=parseInt(X);typeof J=="number"&&J>=1&&x(m,J)}async function P(){x(I,0),x(b,"SOLVING...");const X=new Uu;xv(),console.log(p(a));const J=tp(p(a));X.addFile("test.mzn",J.model_str),w.reset(),w.start(),x(h,X.solve({options:{solver:"chuffed","num-solutions":p(m)}})),p(h).on("solution",ce=>{const Q=ce.output.json;ce.type==="solution"&&p(I)!==null&&x(I,p(I)+1),console.log(Q),z8(Q,J)}),p(h).on("error",ce=>{x(u,"Solve"),x(b,"ERROR"),w.stop(),p(h)&&p(h).cancel()}),p(h).on("warning",ce=>{x(b,"WARNING"),console.log(ce.message)}),p(h).then(ce=>{x(b,ce.status),x(u,"Solve"),w.stop()})}function W(){p(h)===null||!p(h).isRunning()?P():p(h)!==null&&p(h).isRunning()&&(x(b,"IDLE"),x(u,"Solve"),w.stop(),p(h).cancel())}G(()=>r(),()=>{x(a,r())}),G(()=>i(),()=>{x(c,i())}),G(()=>{},()=>{x(u,"Solve")}),G(()=>s(),()=>{x(_,s())}),G(()=>p(h),()=>{p(h)&&(p(h)!==null&&p(h).isRunning()?x(u,"Stop"):x(u,"Solve"))}),Ie(),fe(),cl(t,{get isOpen(){return p(v)},set isOpen(X){x(v,X)},$$slots:{"panel-header":(X,J)=>{ll(X,{slot:"panel-header",title:"Solver",get isOpen(){return p(v)},set isOpen(ce){x(v,ce)},$$legacy:!0})},"panel-content":(X,J)=>{var ce=j8(),Q=ue(ce),ie=F(Q,2);N8(ie,{get showModal(){return p(g)},set showModal(Qt){x(g,Qt)},$$legacy:!0});var pe=F(ie,2),me=K(pe,!0);Y(pe);var Ce=F(pe,2),De=K(Ce,!0);Y(Ce);var st=F(Ce,2),Se=K(st);Kt(Se),S(Se,"min",1),S(Se,"max",200),S(Se,"step",1),Y(st);var we=F(st,2),vt=K(we,!0);ee(()=>et(vt,`Solution Count: ${L(p(I))}`)),Y(we);var ct=F(we,2),Ln=K(ct,!0);ee(()=>et(Ln,`Elapsed Time: ${R(p(_))}`)),Y(ct);var $n=F(ct,2),Pr=K($n,!0);Y($n),ee(()=>{et(me,p(u)),et(De,`Max. Solutions: ${p(m)}`),et(Pr,`Status: ${p(b)}`)}),Me("click",Q,k),Me("click",pe,W),Kn(Se,()=>p(E),Qt=>x(E,Qt)),Me("input",Se,()=>U(p(E))),T(X,ce)}},$$legacy:!0}),le()}var K8=ne('<div class="setting-panel-wrapper svelte-si50bm"><div class="setting-panel svelte-si50bm"><!> <!> <!> <!> <!> <!> <!></div></div>');function X8(t){var e=K8(),n=K(e),r=K(n);XR(r);var i=F(r,2);V8(i,{});var s=F(i,2);TD(s,{elementHandlers:Gt});var a=F(s,2);MD(a,{elementHandlers:Gt});var c=F(a,2);wD(c,{elementHandlers:Gt});var u=F(c,2);sR(u,{elementHandlers:Gt});var _=F(u,2);ZR(_,{}),Y(n),Y(e),T(t,e)}const np=ki([uo,gn,qt],([t,e,n])=>{const r=ri(n,Gt);if(r===void 0){console.warn(`Element hadler for ${n} is not defined`);return}return r.getInputHandler?r.getInputHandler(t,e,n):void 0});var q8=de('<path class="cursor svelte-zsq70u"></path>');function Z8(t,e){ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n),i=()=>ve(Ni,"$selectionStore",n),s=D(),a=D(),c=.25;function u(v){if(!v)return"";const[g,h]=[v.c,v.r];return`M${g},${h}L${g+c},${h}L${g},${h+c}Z`}G(()=>r(),()=>{x(s,sd(r()))}),G(()=>i(),()=>{x(a,u(i().lastCell))}),Ie(),fe();var _=q8();ee(()=>{S(_,"d",p(a)),S(_,"visibility",p(s)?"visible":"hidden")}),T(t,_),le()}var Q8=de('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function J8(t,e){ae(e,!1);let n=$(e,"gridShape",8);fe();var r=Q8(),i=K(r);S(i,"x",0),S(i,"y",0),Y(r),ee(()=>{S(i,"width",n().nCols),S(i,"height",n().nRows)}),T(t,r),le()}var eU=de('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),tU=de('<g class="grid-lines"></g>');function nU(t,e){ae(e,!1);const n=rt(),r=()=>ve(gn,"$gridStore",n),i=D();G(()=>r(),()=>{x(i,r().getAllCells())}),Ie(),fe();var s=tU();lt(s,5,()=>p(i),At,(a,c)=>{var u=eU();S(u,"width",1),S(u,"height",1),ee(()=>{S(u,"x",p(c).c),S(u,"y",p(c).r)}),T(a,u)}),Y(s),T(t,s),le()}function rU(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function iU(t){const e=new Map;function n(r,i){const s=e.get(i);if(s!=null&&s.has(r)){s.delete(r),s.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=rU(r),s=i.length;for(let a=0;a<s;a++){const c=i[a%s],u=i[(a+1)%s],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function oU(t,e=0,n=!1){const r=[],i=iU(t);if(i.size<=0)return r;const s=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),h=v;const m=[];do{const E=i.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Ge(_.c,_.r),b=new Ge(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,L=null,R=null;for(const k of E){const U=JSON.parse(k),P=new Ge(U.c,U.r),W=b.subtract(I),X=P.subtract(b),J=W.perpDotProduct(X);w<J!=n&&(w=J,R=U,L=k)}if(n&&E.size>1&&s.add(h),R===null||L===null)throw new Error("Corner with no adjacencies found");if(E.delete(L),E.size<=0&&i.delete(h),w!==0){const k=e*(g.c-_.c),U=e*(R.c-g.c),P=e*(_.r-g.r),W=e*(g.r-R.r),X=W+w*U,J=k+w*P,ce=new Ge(g.c+X,g.r+J),Q=4;s.has(h)?(m.push(new Ge(ce.x-Q*k,ce.y-Q*U)),m.push(new Ge(ce.x-Q*P,ce.y-Q*W))):m.push(ce)}_=g,g=R,h=L}while(h!==v);r.push(m)}return r}function go(t,e=0,n=!1){return oU(t,e,n).map(s=>To(s,!0)).join("")}const sU=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5)];function aU(t,e,n=sU){if(e===1)return n;const r=[],i=n.length,s=0,a=360/e,c=t*a+s,u=(t+1)*a+s,_=c/(360/i),v=u/(360/i),g=Math.floor(_)%i,h=Math.ceil(_)%i,m=n[g].lerp(n[h],_%1),E=Math.floor(v)%i,I=Math.ceil(v)%i,b=n[E].lerp(n[I],v%1);r.push(m);for(let L=Math.ceil(_);L<=Math.floor(v);L++)r.push(n[L%i]);r.push(b);const w=new Ge(0,0);return r.push(w),r}function rp(t,e,n=new Ge(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const s=Math.cos(Math.PI/e),a=r?t:t/s,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),v=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Ge(_,v));c.push(g)}return c}function To(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:s})=>`${i},${s}`).join("L")+n}function pl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){if(r&&t.length>1){const _=t[t.length-1];for(let g=0;g<t.length-1;g++)if(_.equals(t[g])){t.push(t[g+1]);break}const v=t[0];for(let g=1;g<t.length;g++)if(v.equals(t[g])){t.unshift(t[g-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let v=t[_-2].subtract(t[_-1]);v=v.normalise(),v=v.scale(n),t[_-1]=t[_-1].add(v)}}if(!i)return To(t);const s=t[0],a=["M",`${s.x},${s.y}`],c=t.length;for(let _=2;_<c;_++){const v=t[_-2],g=t[_-1],h=t[_];let m=v.subtract(g).normalise();m=m.scale(i),m=m.add(g);let E=h.subtract(g).normalise();E=E.scale(i),E=E.add(g),a.push(`L${m.x},${m.y} Q ${g.x},${g.y} ${E.x},${E.y}`)}const u=t[c-1];return a.push(`L${u.x},${u.y}`),a.join(" ")}function Lu(t,e={}){const n=Fa(t);return pl(n,e)}function Zn(t){return new Ge(t.c+.5,t.r+.5)}function Fa(t){return t.map(n=>Zn(n))}const lU=[new Ge(-.5,-.5),new Ge(.5,-.5),new Ge(.5,.5),new Ge(-.5,.5),new Ge(0,-.5),new Ge(0,.5),new Ge(-.5,0),new Ge(.5,0)];function cU(t,e){const n=lU[t];return n.subtract(n.scale(e))}function ip(t,e){const n=[new Ge(t.c-e,t.r-e),new Ge(t.c+e,t.r+e)],r=[new Ge(t.c-e,t.r+e),new Ge(t.c+e,t.r-e)];return[n,r].map(s=>To(s,!1)).join("")}const uU=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function ml(t,e="none"){return uU.get(t)||e}function dU(t,e,n){let r=[];function s(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Ge(-.12,-.32),new Ge(0,-.4),new Ge(.12,-.32)]:a=[new Ge(-.12,-.4),new Ge(0,-.32),new Ge(.12,-.4)],r=[a,s(a,90),s(a,180),s(a,270)],r=r.map(c=>c.map(u=>{const _=new Ge(n+.5,e+.5);return u.add(_)})),r}var _U=de('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),fU=de('<g class="regions-border"></g>');function gU(t,e){ae(e,!1);const n=rt(),r=()=>ve(fn,"$cellsStore",n),i=()=>ve(gn,"$gridStore",n),s=D(),a=D();function c(_,v){return _.filter(m=>m.region===v).map(m=>({r:m.r,c:m.c}))}G(()=>r(),()=>{x(s,r())}),G(()=>i(),()=>{x(a,i().getUsedRegions())}),Ie(),fe();var u=fU();lt(u,5,()=>p(a),At,(_,v)=>{var g=_U();ee(()=>S(g,"d",go(c(p(s),p(v)),0,!1))),ee(()=>S(g,"id",`region-${p(v)??""}`)),T(_,g)}),Y(u),T(t,u),le()}var hU=de('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function vU(t,e){ae(e,!1);const n=rt(),r=()=>ve(Ni,"$selectionStore",n),i=()=>ve(qt,"$toolStore",n),s=D(),a=D(),c=D(),u=D(),_=D(),v=D();let g=$(e,"boundingBox",8);const h=.06,m=.05,E="#080808",I="#b2b2b2";G(()=>Z(g()),()=>{x(s,g().x)}),G(()=>Z(g()),()=>{x(a,g().y)}),G(()=>r(),()=>{x(c,r().cells)}),G(()=>p(c),()=>{x(u,go(p(c),0))}),G(()=>p(c),()=>{x(_,go(p(c),h))}),G(()=>i(),()=>{x(v,sd(i()))}),Ie(),fe();var b=hU(),w=K(b),L=K(w);S(L,"stdDeviation",m),Si(),Y(w);var R=F(w),k=K(R);S(k,"fill",I);var U=F(k);S(U,"fill",E),Y(R);var P=F(R);Y(b),ee(()=>{S(b,"visibility",p(v)?"visible":"hidden"),S(R,"x",p(s)),S(R,"y",p(a)),S(k,"x",p(s)),S(k,"y",p(a)),S(U,"d",p(_)),S(P,"d",p(u))}),T(t,b),le()}var pU=de('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function mU(t,e){ae(e,!1);const n=D(),r=D();let i=$(e,"grid",8);G(()=>Z(i()),()=>{x(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),G(()=>p(n),()=>{x(r,go(p(n),0))}),Ie(),fe();var s=pU(),a=K(s);Y(s),ee(()=>S(a,"d",p(r))),T(t,s),le()}function pr(t){return ki(gt,n=>{const r=[];for(const[i,s]of n.entries())t(i)&&r.push({toolId:i,element:s});return r})}const Hd=pr(cO),EU=ki(Hd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),CU=ki(Hd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),IU=pr(nd),bU=pr(Fh),wU=pr($h),OU=pr(rd),yU=pr(Hh),LU=pr(id),AU=pr(od),SU=pr(Ph),xU=pr(fs);var NU=de('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function El(t,e){let n=$(e,"l",8,.2),r=$(e,"id",8),i=$(e,"strokeWidth",8),s=$(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=NU();S(u,"viewBox","0 0 1 1"),S(u,"refX",a),S(u,"refY",a),S(u,"markerWidth",1),S(u,"markerHeight",1);var _=K(u);S(_,"d",c),Y(u),ee(()=>{S(u,"id",r()),S(_,"stroke-width",i()),S(_,"stroke",s())}),T(t,u)}var TU=de('<path class="arrow-line" fill="none"></path>'),DU=de('<g><mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!></g>');function RU(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D(),_=D(),v=D(),g=D();let h=$(e,"tool",8),m=$(e,"arrowId",8),E=$(e,"boundingBox",8);const I=hn(h().toolId,Gt)??AO,b="round",w="round",L=crypto.randomUUID(),R=`arrow-mask-${m()}-${L}`,k=`arrow-marker-${m()}-${L}`;G(()=>Z(h()),()=>{x(n,h().shape??I)}),G(()=>Z(E()),()=>{x(r,E().x)}),G(()=>Z(E()),()=>{x(i,E().y)}),G(()=>p(n),()=>{var ie;x(s,((ie=p(n))==null?void 0:ie.r)??.4)}),G(()=>p(n),()=>{var ie;x(a,((ie=p(n))==null?void 0:ie.stroke)??"gray")}),G(()=>p(n),()=>{var ie;x(c,((ie=p(n))==null?void 0:ie.strokeWidth)??.1)}),G(()=>p(n),()=>{var ie;x(u,((ie=p(n))==null?void 0:ie.strokeDasharray)??0)}),G(()=>p(n),()=>{var ie;x(_,((ie=p(n))==null?void 0:ie.opacity)??.8)}),G(()=>(p(s),p(n)),()=>{var ie,pe,me,Ce;x(v,{shortenHead:p(s),shortenTail:((pe=(ie=p(n))==null?void 0:ie.linePathOptions)==null?void 0:pe.shortenTail)??.2,bezierRounding:((Ce=(me=p(n))==null?void 0:me.linePathOptions)==null?void 0:Ce.bezierRounding)??.4})}),G(()=>Z(h()),()=>{x(g,Lu(h().cells))}),Ie(),fe();var U=DU(),P=K(U);S(P,"id",R);var W=K(P),X=F(W);Y(P);var J=F(P);El(J,{id:k,l:.2,get strokeWidth(){return p(c)},get stroke(){return p(a)}});var ce=F(J);S(ce,"mask",`url(#${R??""})`);var Q=F(ce);lt(Q,1,()=>h().lines,At,(ie,pe)=>{var me=Ae(),Ce=ue(me);{var De=st=>{var Se=TU();ee(()=>S(Se,"d",Lu(p(pe),p(v)))),S(Se,"stroke-linejoin",b),S(Se,"stroke-linecap",w),S(Se,"marker-end",`url(#${k??""})`),ee(()=>{S(Se,"stroke",p(a)),S(Se,"stroke-width",p(c)),S(Se,"opacity",p(_)),S(Se,"stroke-dasharray",p(u))}),T(st,Se)};ge(Ce,st=>{p(pe).length>1&&st(De)})}T(ie,me)}),Y(U),ee(()=>{S(P,"x",p(r)),S(P,"y",p(i)),S(W,"x",p(r)),S(W,"y",p(i)),S(X,"stroke-width",2*p(s)-p(c)),S(X,"d",p(g)),S(ce,"d",p(g)),S(ce,"stroke-width",2*p(s)+p(c)),S(ce,"stroke",p(a))}),T(t,U),le()}var kU=de("<g></g>"),GU=de('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function MU(t,e){ae(e,!1);const n=rt(),r=()=>ve(LU,"$arrowToolsStore",n),i=D();let s=$(e,"boundingBox",8);G(()=>r(),()=>{x(i,r())}),Ie();var a=GU();lt(a,5,()=>p(i),At,(c,u)=>{let _=()=>p(u).toolId,v=()=>p(u).element;var g=kU();lt(g,5,()=>Object.entries(v()),h=>h[0],(h,m)=>{RU(h,{get arrowId(){return p(m)[0]},get tool(){return p(m)[1]},get boundingBox(){return s()}})}),Y(g),ee(()=>ii(g,`element-group ${_()}`)),T(c,g)}),Y(a),T(t,a),le()}var UU=de('<!><path fill="none"></path>',1);function $U(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D();let c=$(e,"tool",8),u=$(e,"id",8);const _=c().cell,v=hn(c().toolId,Gt)??yO,g=.3;function h(L,R){const k=qa(R),U=new Ge(k.c,k.r).normalise().scale(g),P=Zn(L),W=P.subtract(U),X=P.add(U);return[W,X]}const m=crypto.randomUUID(),E=`single-cell-arrow-marker-${u()}-${m}`;G(()=>Z(c()),()=>{x(n,c().direction)}),G(()=>Z(c()),()=>{x(r,c().shape??v)}),G(()=>p(r),()=>{x(i,p(r).strokeWidth??.1)}),G(()=>p(r),()=>{x(s,p(r).stroke??"black")}),G(()=>p(n),()=>{x(a,pl(h(_,p(n))))}),Ie(),fe();var I=UU(),b=ue(I);El(b,{id:E,l:.15,get stroke(){return p(s)},get strokeWidth(){return p(i)}});var w=F(b);S(w,"marker-end",`url(#${E??""})`),ee(()=>{S(w,"d",p(a)),S(w,"stroke",p(s)),S(w,"stroke-width",p(i))}),T(t,I),le()}var FU=de('<path fill="none"></path>'),HU=de("<!><!>",1);function PU(t,e){ae(e,!1);const n=D(),r=D(),i=D();let s=$(e,"tool",8),a=$(e,"id",8);const c=s().cell,u=hn(s().toolId,Gt)??LO,_=.2;function v(w,L){const R=qa(L),k=new Ge(R.c,R.r),P=Zn(w).add(k.scale(.4));return[P.subtract(k.normalise().scale(_)),P]}function g(w){return pl(v(c,w))}const h=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${a()}-${h}`;G(()=>Z(s()),()=>{x(n,s().shape??u)}),G(()=>p(n),()=>{x(r,p(n).strokeWidth??.08)}),G(()=>p(n),()=>{x(i,p(n).stroke??"black")}),Ie(),fe();var E=HU(),I=ue(E);El(I,{id:m,l:.1,get stroke(){return p(i)},get strokeWidth(){return p(r)}});var b=F(I);lt(b,1,()=>s().directions,At,(w,L)=>{var R=FU();ee(()=>S(R,"d",g(p(L)))),S(R,"marker-end",`url(#${m??""})`),ee(()=>{S(R,"stroke",p(i)),S(R,"stroke-width",p(r))}),T(w,R)}),T(t,E),le()}var BU=de("<path></path>");function Ha(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D();let _=$(e,"cells",8),v=$(e,"shape",8,dd);G(()=>Z(v()),()=>{x(n,v().inset??.06)}),G(()=>Z(v()),()=>{x(r,v().stroke??"black")}),G(()=>Z(v()),()=>{x(i,v().strokeWidth??.03)}),G(()=>Z(v()),()=>{x(s,v().strokeDasharray??.08)}),G(()=>Z(v()),()=>{x(a,v().fill??"none")}),G(()=>Z(v()),()=>{x(c,v().connectDiag??!0)}),G(()=>(Z(_()),p(n),p(c)),()=>{x(u,go(_(),p(n),p(c)))}),Ie(),fe();var g=BU();ee(()=>{S(g,"d",p(u)),S(g,"stroke",p(r)),S(g,"stroke-width",p(i)),S(g,"fill",p(a)),S(g,"stroke-dasharray",p(s))}),T(t,g),le()}var WU=de('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function vs(t,e){ae(e,!1);const n=D();let r=$(e,"value",8,""),i=$(e,"fontSize",8,.2),s=$(e,"x",8),a=$(e,"y",8),c=$(e,"position",8,"TL"),u=$(e,"fontColor",8,"var(--text-primary-color)"),_=$(e,"fontWeight",8,400),v=D(null),g=D(null);function h(L,R,k){const U=["TL","TR"].includes(k),W=["TL","BL"].includes(k)?L+.05:L,X=R;return new Ge(W,X)}function m(L){return["TL","BL"].includes(L)?"start":"end"}function E(L){return["TL","TR"].includes(L)?"text-before-edge":""}Mw(()=>{if(!p(v)||!p(g))return;const L=p(v).getBBox();p(g).setAttribute("x",String(L.x)),p(g).setAttribute("y",String(L.y+L.height*.1)),p(g).setAttribute("width",String(L.width)),p(g).setAttribute("height",String(L.height*.8))}),G(()=>(Z(s()),Z(a()),Z(c())),()=>{x(n,h(s(),a(),c()))}),Ie(),fe();var I=Ae(),b=ue(I);{var w=L=>{var R=WU(),k=ue(R);xi(k,W=>x(g,W),()=>p(g));var U=F(k);ee(()=>S(U,"text-anchor",m(c()))),ee(()=>S(U,"dominant-baseline",E(c())));var P=K(U,!0);Y(U),xi(U,W=>x(v,W),()=>p(v)),ee(()=>{var W,X;S(U,"x",(W=p(n))==null?void 0:W.x),S(U,"y",(X=p(n))==null?void 0:X.y),S(U,"font-size",i()),S(U,"fill",u()),S(U,"font-weight",_()),et(P,r())}),T(L,R)};ge(b,L=>{r().length&&L(w)})}T(t,I),le()}var zU=ne("<!> <!>",1);function op(t,e){ae(e,!1);const n=D(),r=D();let i=$(e,"cells",8),s=$(e,"shape",8,dd),a=$(e,"value",8,void 0);G(()=>Z(i()),()=>{x(n,i()[0])}),G(()=>p(n),()=>{x(r,new Ge(p(n).c,p(n).r))}),Ie(),fe();var c=zU(),u=ue(c);Ha(u,{get cells(){return i()},get shape(){return s()}});var _=F(u,2);{var v=g=>{vs(g,{get value(){return a()},get x(){return p(r).x},get y(){return p(r).y},position:"TL"})};ge(_,g=>{a()&&a().length&&g(v)})}T(t,c),le()}var YU=de("<rect></rect>");function jU(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D(),_=D(),v=D();let g=$(e,"cx",8),h=$(e,"cy",8),m=$(e,"shape",8);G(()=>Z(m()),()=>{x(n,m().r??.5)}),G(()=>(Z(g()),p(n)),()=>{x(r,g()-p(n))}),G(()=>(Z(h()),p(n)),()=>{x(i,h()-p(n))}),G(()=>p(n),()=>{x(s,2*p(n))}),G(()=>p(n),()=>{x(a,2*p(n))}),G(()=>Z(m()),()=>{x(c,m().stroke??"black")}),G(()=>Z(m()),()=>{x(u,m().strokeWidth??.02)}),G(()=>Z(m()),()=>{x(_,m().fill??"none")}),G(()=>Z(m()),()=>{x(v,m().angle??0)}),Ie(),fe();var E=YU();ee(()=>{S(E,"x",p(r)),S(E,"y",p(i)),S(E,"width",p(s)),S(E,"height",p(a)),S(E,"stroke",p(c)),S(E,"stroke-width",p(u)),S(E,"fill",p(_)),S(E,"transform",`rotate(${p(v)}, ${g()}, ${h()})`)}),T(t,E),le()}var VU=de('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function oh(t,e){ae(e,!1);const n=rt(),r=()=>ve(EU,"$minimumConstraintsStore",n),i=()=>ve(CU,"$maximumConstraintsStore",n),s=D(),a=D(),c=D();let u=$(e,"coord",8),_=$(e,"minOrMax",8);function v(b,w){const L=[!0,!0,!0,!0];let R=[[0,-1],[1,0],[0,1],[-1,0]];for(let k=0;k<R.length;k++){let U=R[k];const P={r:b.r+U[1],c:b.c+U[0]};L[k]=!Object.values(w).some(W=>ze(P,W.cell))}return L}function g(b,w){let L=dU(_(),b.r,b.c);const R=v(b,w);return L=L.filter((U,P)=>R[P]),L.map(U=>To(U,!1)).join("")}function h(b,w){return _()==="max"?w:b}G(()=>Z(u()),()=>{x(s,u().c)}),G(()=>Z(u()),()=>{x(a,u().r)}),G(()=>(r(),i()),()=>{x(c,h(r(),i()))}),Ie(),fe();var m=VU(),E=K(m);S(E,"width",1),S(E,"height",1);var I=F(E);ee(()=>S(I,"d",g(u(),p(c)))),Y(m),ee(()=>{S(E,"x",p(s)),S(E,"y",p(a))}),T(t,m),le()}var KU=de("<circle></circle>");function Nr(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D();let u=$(e,"x",8),_=$(e,"y",8),v=$(e,"shape",8);G(()=>Z(v()),()=>{x(n,v().r??.35)}),G(()=>Z(v()),()=>{x(r,v().stroke??"black")}),G(()=>Z(v()),()=>{var h;x(i,(h=v())==null?void 0:h.opacity)}),G(()=>Z(v()),()=>{x(s,v().strokeWidth??.02)}),G(()=>Z(v()),()=>{x(a,v().fill??"none")}),G(()=>Z(v()),()=>{x(c,v().strokeDasharray??0)}),Ie(),fe();var g=KU();ee(()=>{S(g,"cx",u()),S(g,"cy",_()),S(g,"r",p(n)),S(g,"stroke",p(r)),S(g,"stroke-width",p(s)),S(g,"fill",p(a)),S(g,"opacity",p(i)),S(g,"stroke-dasharray",p(c))}),T(t,g),le()}var XU=de("<ellipse></ellipse>");function qU(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D();let _=$(e,"cx",8),v=$(e,"cy",8),g=$(e,"shape",8);G(()=>Z(g()),()=>{x(n,g().width??.5)}),G(()=>Z(g()),()=>{x(r,g().height??.5)}),G(()=>Z(g()),()=>{x(i,g().stroke??"black")}),G(()=>Z(g()),()=>{var m;x(s,(m=g())==null?void 0:m.opacity)}),G(()=>Z(g()),()=>{x(a,g().strokeWidth??.02)}),G(()=>Z(g()),()=>{x(c,g().fill??"none")}),G(()=>Z(g()),()=>{x(u,g().angle??0)}),Ie(),fe();var h=XU();ee(()=>{S(h,"cx",_()),S(h,"cy",v()),S(h,"rx",p(n)/2),S(h,"ry",p(r)/2),S(h,"stroke",p(i)),S(h,"stroke-width",p(a)),S(h,"fill",p(c)),S(h,"opacity",p(s)),S(h,"transform",`rotate(${p(u)}, ${_()}, ${v()} )`)}),T(t,h),le()}var ZU=de("<polygon></polygon>");function Pa(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D(),_=D();let v=$(e,"cx",8),g=$(e,"cy",8),h=$(e,"shape",8);G(()=>Z(h()),()=>{x(n,h().n??3)}),G(()=>Z(h()),()=>{x(r,h().r??.5)}),G(()=>(p(r),p(n),Z(v()),Z(g())),()=>{x(i,rp(p(r),p(n),new Ge(v(),g())))}),G(()=>p(i),()=>{x(s,p(i).map(E=>`${E.x},${E.y}`).join(" "))}),G(()=>Z(h()),()=>{x(a,h().stroke??"black")}),G(()=>Z(h()),()=>{x(c,h().strokeWidth??.02)}),G(()=>Z(h()),()=>{x(u,h().fill??"none")}),G(()=>Z(h()),()=>{x(_,h().angle??0)}),Ie(),fe();var m=ZU();ee(()=>{S(m,"points",p(s)),S(m,"stroke",p(a)),S(m,"stroke-width",p(c)),S(m,"fill",p(u)),S(m,"transform",`rotate(${p(_)}, ${v()}, ${g()} )`)}),T(t,m),le()}var QU=de("<rect></rect>");function JU(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D();let _=$(e,"cx",8),v=$(e,"cy",8),g=$(e,"shape",8);G(()=>Z(g()),()=>{x(n,g().width??.5)}),G(()=>Z(g()),()=>{x(r,g().height??.5)}),G(()=>(Z(_()),p(n)),()=>{x(i,_()-p(n)/2)}),G(()=>(Z(v()),p(r)),()=>{x(s,v()-p(r)/2)}),G(()=>Z(g()),()=>{x(a,g().stroke||"black")}),G(()=>Z(g()),()=>{x(c,g().strokeWidth||.023)}),G(()=>Z(g()),()=>{x(u,g().fill||"none")}),Ie(),fe();var h=QU();ee(()=>{S(h,"x",p(i)),S(h,"y",p(s)),S(h,"width",p(n)),S(h,"height",p(r)),S(h,"stroke",p(a)),S(h,"stroke-width",p(c)),S(h,"fill",p(u))}),T(t,h),le()}function Cl(t,e){ae(e,!1);const n=D();let r=$(e,"cx",8),i=$(e,"cy",8),s=$(e,"shape",8);G(()=>(Z(s()),H),()=>{var v;x(n,((v=s())==null?void 0:v.type)??H.CIRCLE)}),Ie(),fe();var a=Ae(),c=ue(a);{var u=v=>{Nr(v,{get x(){return r()},get y(){return i()},get shape(){return s()}})},_=v=>{var g=Ae(),h=ue(g);{var m=I=>{qU(I,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},E=I=>{var b=Ae(),w=ue(b);{var L=k=>{jU(k,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},R=k=>{var U=Ae(),P=ue(U);{var W=J=>{JU(J,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},X=J=>{var ce=Ae(),Q=ue(ce);{var ie=me=>{Pa(me,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},pe=me=>{Nr(me,{get x(){return r()},get y(){return i()},get shape(){return s()}})};ge(Q,me=>{p(n)===H.POLYGON?me(ie):me(pe,!1)},!0)}T(J,ce)};ge(P,J=>{p(n)===H.RECTANGLE?J(W):J(X,!1)},!0)}T(k,U)};ge(w,k=>{p(n)===H.SQUARE?k(L):k(R,!1)},!0)}T(I,b)};ge(h,I=>{p(n)===H.ELLIPSE?I(m):I(E,!1)},!0)}T(v,g)};ge(c,v=>{p(n)===H.CIRCLE?v(u):v(_,!1)})}T(t,a),le()}var e$=de("<circle></circle>");function t$(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D();let u=$(e,"x",8),_=$(e,"y",8),v=$(e,"value",8),g=$(e,"shape",8);G(()=>Z(g()),()=>{x(n,g().r??.35)}),G(()=>Z(g()),()=>{x(r,g().stroke??"black")}),G(()=>Z(g()),()=>{var m;x(i,(m=g())==null?void 0:m.opacity)}),G(()=>Z(g()),()=>{x(s,g().strokeWidth??.02)}),G(()=>Z(v()),()=>{x(a,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),G(()=>Z(g()),()=>{x(c,g().strokeDasharray??0)}),Ie(),fe();var h=e$();ee(()=>{S(h,"cx",u()),S(h,"cy",_()),S(h,"r",p(n)),S(h,"stroke",p(r)),S(h,"stroke-width",p(s)),S(h,"fill",p(a)),S(h,"opacity",p(i)),S(h,"stroke-dasharray",p(c))}),T(t,h),le()}var n$=de('<g class="single-cell-tool"><!><!></g>');function r$(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D();let c=$(e,"tool",8),u=$(e,"id",8);const _=c().cell,v=hn(c().toolId,Gt)??OO;G(()=>Z(c()),()=>{x(n,c().shape??v)}),G(()=>(p(n),H),()=>{var w;x(r,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),G(()=>{},()=>{x(i,{x:_.c+.5,y:_.r+.5})}),G(()=>Ge,()=>{x(s,new Ge(_.c,_.r))}),G(()=>Z(c()),()=>{x(a,c().value)}),Ie(),fe();var g=n$(),h=K(g);{var m=w=>{oh(w,{coord:_,minOrMax:"min"})},E=w=>{var L=Ae(),R=ue(L);{var k=P=>{oh(P,{coord:_,minOrMax:"max"})},U=P=>{var W=Ae(),X=ue(W);{var J=Q=>{t$(Q,{get x(){return p(i).x},get y(){return p(i).y},get value(){return p(a)},get shape(){return p(n)}})},ce=Q=>{var ie=Ae(),pe=ue(ie);{var me=De=>{op(De,{cells:[_],get shape(){return p(n)},get value(){return c().value}})},Ce=De=>{Cl(De,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return p(n)}})};ge(pe,De=>{p(r)===H.CAGE?De(me):De(Ce,!1)},!0)}T(Q,ie)};ge(X,Q=>{c().toolId===d.COLORED_COUNTING_CIRCLES?Q(J):Q(ce,!1)},!0)}T(P,W)};ge(R,P=>{c().toolId===d.MAXIMUM?P(k):P(U,!1)},!0)}T(w,L)};ge(h,w=>{c().toolId===d.MINIMUM?w(m):w(E,!1)})}var I=F(h);{var b=w=>{vs(w,{get value(){return p(a)},get x(){return p(s).x},get y(){return p(s).y},position:"TL"})};ge(I,w=>{p(r)!==H.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&p(a)&&w(b)})}Y(g),ee(()=>S(g,"id",`constraint-${u()}`)),T(t,g),le()}var i$=de("<g></g>"),o$=de('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function s$(t,e){ae(e,!1);const n=rt(),r=()=>ve(Hd,"$singleCellToolsStore",n),i=D();G(()=>r(),()=>{x(i,r())}),Ie();var s=o$();lt(s,5,()=>p(i),At,(a,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=i$();lt(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{var m=Ae(),E=ue(m);{var I=w=>{$U(w,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},b=w=>{var L=Ae(),R=ue(L);{var k=P=>{PU(P,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})},U=P=>{var W=Ae(),X=ue(W);{var J=ce=>{r$(ce,{get tool(){return p(h)[1]},get id(){return p(h)[0]}})};ge(X,ce=>{p(h)[1].type==="SIMPLE"&&ce(J)},!0)}T(P,W)};ge(R,P=>{p(h)[1].type==="MULTIARROW"?P(k):P(U,!1)},!0)}T(w,L)};ge(E,w=>{p(h)[1].type==="ARROW"?w(I):w(b,!1)})}T(g,m)}),Y(v),ee(()=>ii(v,`element-group ${u()}`)),T(a,v)}),Y(s),T(t,s),le()}function a$(t,e){const n=t.getRow(e.r);return new Set(n)}function l$(t,e){const n=t.getCol(e.c);return new Set(n)}function c$(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function u$(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function d$(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function _$(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function f$(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function g$(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function h$(t,e,n){let r=new Set;const s=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=s.length,c=[s[0],s[a-1]],u=s.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((h,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function v$(t,e,n){let r=new Set;const s=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!s.find(u=>u===e))return r;const c=s.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function p$(t,e,n){let r=new Set;const s=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!s.find(u=>u===e))return r;const c=s.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function m$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(u$(t,i))),e.get(d.ANTIKING)&&(r=r.union(d$(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(_$(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(g$(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(f$(t,i)))),r}function su(t,e,n,r,i){const s=e.get(r);if(s)for(const a of Object.entries(s)){const c=a[1],u=p$(t,n,c);i=new Set([...i,...u])}return i}function E$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const s=e.get(d.BETWEEN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=h$(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=v$(t,i,u);r=new Set([...r,..._])}return r=su(t,e,i,d.KILLER_CAGE,r),r=su(t,e,i,d.PARITY_BALANCE_CAGE,r),r=su(t,e,i,d.SPOTLIGHT_CAGE,r),r}function sp(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,s=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...a$(i,e),...l$(i,e),...c$(i,e)])),n=new Set([...n,...m$(i,r,e)]),n=new Set([...n,...E$(i,s,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function C$(t,e){const n=[];if(e.length==0)return[];for(const s of e)n.push(sp(t,s));const r=n.reduce((s,a)=>s.intersection(a)),i=[];for(const s of r)i.push(s.toCoords());return i}var I$=de('<tspan class="svelte-xct9ah"> </tspan>'),b$=de('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function w$(t,e){ae(e,!1);const n=D();let r=$(e,"cell",8),i=$(e,"seen_values",8);const s=.25;function a(v){return i().find(h=>h===v)!==void 0}G(()=>Z(r()),()=>{x(n,Zn({r:r().r,c:r().c}))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=v=>{var g=b$(),h=K(g);S(h,"font-size",s),lt(h,5,()=>r().centerMarks,At,(m,E)=>{var I=I$();const b=Xe(()=>a(p(E)));ee(()=>Ot(I,"conflict",p(b)));var w=K(I,!0);Y(I),ee(()=>et(w,p(E))),T(m,I)}),Y(h),Y(g),ee(()=>{S(h,"x",p(n).x),S(h,"y",p(n).y),S(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),T(v,g)};ge(u,v=>{r().centerMarks.length&&v(_)})}T(t,c),le()}var O$=de('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),y$=de('<g class="corner-marks-group"></g>');function L$(t,e){ae(e,!1);let n=$(e,"cell",8),r=$(e,"seen_values",8);const i=.25,s=.28;function a(g){const h=g.cornerMarks.slice(0,8),m=Zn({r:g.r,c:g.c});return h.map((E,I)=>{const b=cU(I,s);return{pos:m.add(b),value:E,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}fe();var u=Ae(),_=ue(u);{var v=g=>{var h=y$();lt(h,5,()=>a(n()),At,(m,E)=>{let I=()=>p(E).pos,b=()=>p(E).value;var w=O$();S(w,"font-size",i);const L=Xe(()=>c(b()));var R=K(w,!0);Y(w),ee(()=>{S(w,"x",I().x),S(w,"y",I().y),Ot(w,"conflict",p(L)),et(R,b())}),T(m,w)}),Y(h),T(g,h)};ge(_,g=>{n().cornerMarks.length&&g(v)})}T(t,u),le()}var A$=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),S$=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),x$=de('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),N$=de("<!><!>",1),T$=de('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function D$(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),i=()=>ve(Os,"$puzzleStore",n),s=()=>ve(qt,"$toolStore",n),a=D(),c=D(),u=D(),_=D(),v=D(),g=D(),h=D();let m=$(e,"cell",8);const E=.8,I=400;function b(U,P){if(!U)return[];let X=[...sp(p(v),P.toCoords())].map(J=>J.value).filter(J=>J!==null);return X=[...new Set(X)],X}function w(U){return U?"1":"0"}G(()=>Z(m()),()=>{x(a,m().value)}),G(()=>Z(m()),()=>{x(c,m().given)}),G(()=>Z(m()),()=>{x(u,Zn({r:m().r,c:m().c}))}),G(()=>r(),()=>{x(_,r().highlightPencilmarkConflicts)}),G(()=>i(),()=>{x(v,i())}),G(()=>r(),()=>{x(g,r().showSolution)}),G(()=>(p(_),Z(m())),()=>{x(h,b(p(_),m()))}),Ie(),fe();var L=Ae(),R=ue(L);{var k=U=>{var P=T$(),W=K(P);{var X=ce=>{var Q=Ae(),ie=ue(Q);{var pe=me=>{var Ce=A$();S(Ce,"font-size",E),S(Ce,"font-weight",I);var De=K(Ce,!0);Y(Ce),ee(()=>{S(Ce,"x",p(u).x),S(Ce,"y",p(u).y),et(De,m().region)}),T(me,Ce)};ge(ie,me=>{m().region!==null&&me(pe)})}T(ce,Q)},J=ce=>{var Q=Ae(),ie=ue(Q);{var pe=Ce=>{var De=Ae(),st=ue(De);{var Se=we=>{var vt=S$();S(vt,"font-size",E),S(vt,"font-weight",I);var ct=K(vt,!0);ee(()=>et(ct,w(m().fog))),Y(vt),ee(()=>{S(vt,"x",p(u).x),S(vt,"y",p(u).y)}),T(we,vt)};ge(st,we=>{m().fog!==null&&we(Se)})}T(Ce,De)},me=Ce=>{var De=Ae(),st=ue(De);{var Se=vt=>{var ct=x$();S(ct,"font-size",E),S(ct,"font-weight",I);var Ln=K(ct,!0);Y(ct),ee(()=>{S(ct,"x",p(u).x),S(ct,"y",p(u).y),Ot(ct,"given",p(c)),et(Ln,p(a))}),T(vt,ct)},we=vt=>{var ct=N$(),Ln=ue(ct);L$(Ln,{get cell(){return m()},get seen_values(){return p(h)}});var $n=F(Ln);w$($n,{get cell(){return m()},get seen_values(){return p(h)}}),T(vt,ct)};ge(st,vt=>{p(a)!==null?vt(Se):vt(we,!1)},!0)}T(Ce,De)};ge(ie,Ce=>{s()===d.FOG?Ce(pe):Ce(me,!1)},!0)}T(ce,Q)};ge(W,ce=>{s()===d.REGIONS?ce(X):ce(J,!1)})}Y(P),ee(()=>Ot(P,"hide-given",m().given)),T(U,P)};ge(R,U=>{p(g)||U(k)})}T(t,L),le()}var R$=de("<path></path>"),k$=de('<g class="highlights-group"></g>');function G$(t,e){ae(e,!1);const n=rt(),r=()=>ve(qt,"$toolStore",n);let i=$(e,"cell",8);function s(_){const v=Zn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let I=aU(E,g);I=I.map(w=>w.add(v));const b=To(I,!0);return{colorId:m,d:b}})}fe();var a=Ae(),c=ue(a);{var u=_=>{var v=Ae(),g=ue(v);{var h=m=>{var E=k$();lt(E,5,()=>s(i()),At,(I,b)=>{let w=()=>p(b).colorId,L=()=>p(b).d;var R=R$();ee(()=>{ii(R,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),S(R,"d",L())}),T(I,R)}),Y(E),T(m,E)};ge(g,m=>{i().highlights.length&&m(h)})}T(_,v)};ge(c,_=>{r()!==d.REGIONS&&_(u)})}T(t,a),le()}var M$=de('<path class="cell-marker" fill="none"></path>'),U$=de('<circle fill="none" opacity="0.9"></circle>');function $$(t,e){ae(e,!1);const n=D(),r=D();let i=$(e,"marker",8);const s=.3,a=.08;G(()=>Z(i()),()=>{x(n,ip(i(),s))}),G(()=>Z(i()),()=>{x(r,ml(i().colorId,"black"))}),Ie(),fe();var c=Ae(),u=ue(c);{var _=g=>{var h=M$();S(h,"stroke-width",a),ee(()=>{S(h,"d",p(n)),S(h,"stroke",p(r))}),T(g,h)},v=g=>{var h=U$();S(h,"r",s),S(h,"stroke-width",a),ee(()=>{ii(h,`cell-marker color-${i().colorId??""}`),S(h,"cx",i().c),S(h,"cy",i().r),S(h,"stroke",p(r))}),T(g,h)};ge(u,g=>{i().marker==="X"?g(_):g(v,!1)})}T(t,c),le()}var F$=de('<g class="cell-markers"></g>');function H$(t,e){let n=$(e,"markers",8);var r=F$();lt(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,s)=>{$$(i,{get marker(){return p(s)}})}),Y(r),T(t,r)}var P$=de('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function B$(t,e){ae(e,!1);const n=D();let r=$(e,"draftLineMarker",8);const i=.2;function s(u){return u.map(v=>[new Ge(v.p1.c,v.p1.r),new Ge(v.p2.c,v.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?ml(_,"black"):"darkred"}G(()=>Z(r()),()=>{x(n,To(s(r().draftLine)))}),Ie(),fe();var c=P$();ee(()=>S(c,"stroke",a(r()))),S(c,"stroke-width",i),S(c,"opacity",.5),ee(()=>S(c,"d",p(n))),T(t,c),le()}var W$=de('<path fill="none" opacity="0.9"></path>');function z$(t,e){ae(e,!1);const n=D(),r=D();let i=$(e,"marker",8);const s=.08,a=.04;G(()=>Z(i()),()=>{x(n,ip(i(),s))}),G(()=>Z(i()),()=>{x(r,ml(i().colorId,"black"))}),Ie(),fe();var c=W$();S(c,"stroke-width",a),ee(()=>{S(c,"d",p(n)),ii(c,`edge-marker color-${i().colorId??""}`),S(c,"stroke",p(r))}),T(t,c),le()}var Y$=de('<g class="edge-markers"></g>');function j$(t,e){let n=$(e,"markers",8);var r=Y$();lt(r,5,n,i=>`${i.r}, ${i.c}`,(i,s)=>{z$(i,{get marker(){return p(s)}})}),Y(r),T(t,r)}var V$=de('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),K$=de('<g class="line-markers svelte-yha19m"></g>');function X$(t,e){ae(e,!1);let n=$(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function s(c){return ml(c,"black")}fe();var a=K$();lt(a,5,n,c=>i(c),(c,u)=>{var _=V$();S(_,"stroke-width",r),ee(()=>S(_,"stroke",s(p(u).colorId))),ee(()=>{S(_,"x1",p(u).p1.c),S(_,"y1",p(u).p1.r),S(_,"x2",p(u).p2.c),S(_,"y2",p(u).p2.r),ii(_,`line-marker color-${p(u).colorId??""} svelte-yha19m`)}),T(c,_)}),Y(a),T(t,a),le()}var q$=de('<g class="pen-tool"><!><!><!><!></g>');function Z$(t,e){ae(e,!1);const n=rt(),r=()=>ve(Ma,"$penToolStore",n),i=D();G(()=>r(),()=>{x(i,{draftLine:r().draftLine,mode:r().mode})}),Ie(),fe();var s=q$(),a=K(s);X$(a,{get lineMarkers(){return r().lineMarkers}});var c=F(a);j$(c,{get markers(){return r().edgeMarkers}});var u=F(c);H$(u,{get markers(){return r().cellMarkers}});var _=F(u);B$(_,{get draftLineMarker(){return p(i)}}),Y(s),T(t,s),le()}var Q$=de('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function J$(t,e){ae(e,!1);const n=rt(),r=()=>ve(Ni,"$selectionStore",n),i=()=>ve(zt,"$settingsStore",n),s=()=>ve(Os,"$puzzleStore",n),a=()=>ve(qt,"$toolStore",n),c=D(),u=D(),_=D(),v=D(),g={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,w){return b.length?C$(p(_),b):[]}G(()=>r(),()=>{x(c,r().cells)}),G(()=>i(),()=>{x(u,i().highlightCellsSeenBySelection)}),G(()=>s(),()=>{x(_,s())}),G(()=>a(),()=>{x(v,sd(a()))}),Ie(),fe();var m=Ae(),E=ue(m);{var I=b=>{var w=Q$(),L=K(w),R=Xe(()=>h(p(c),p(_)));Ha(L,{get cells(){return p(R)},shape:g}),Y(w),T(b,w)};ge(E,b=>{p(u)&&p(v)&&b(I)})}T(t,m),le()}function Il(t){const e=[],n=t.map(s=>s.value).filter(s=>s!==null),i=[...Cv(n).entries()].filter(([,s])=>s>1).map(([s])=>s);return e.push(...t.filter(s=>s.value!==null&&i.includes(s.value))),e}function e4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Il(r))}return new Set(e)}function t4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Il(r))}return new Set(e)}function n4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Il(r))}return new Set(e)}function r4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function i4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getNeighboorCells(r).filter(a=>a.value===r.value);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function o4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function s4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),s=Il(i);s.length&&e.push(...s)}return new Set(e)}function a4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...e4(t),...t4(t),...n4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(r4(t))),e.get(d.ANTIKING)&&(n=n.union(i4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(o4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(s4(t))),n}function l4(t,e){return[...new Set([...a4(t,e)])]}var c4=de('<rect class="conflict svelte-4mp6ok"></rect>'),u4=de('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function d4(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),i=()=>ve(gn,"$gridStore",n),s=()=>ve(Rr,"$globalConstraintsStore",n),a=()=>ve(fn,"$cellsStore",n),c=D(),u=D(),_=D(),v=D();H.CAGE;function g(I){return l4(p(u),p(_)).map(L=>L.toCoords())}G(()=>r(),()=>{x(c,r().checkConflicts)}),G(()=>i(),()=>{x(u,i())}),G(()=>s(),()=>{x(_,s())}),G(()=>a(),()=>{x(v,a())}),Ie(),fe();var h=Ae(),m=ue(h);{var E=I=>{var b=u4();lt(b,5,()=>g(p(v)),At,(w,L)=>{var R=c4();S(R,"width",1),S(R,"height",1),ee(()=>{S(R,"x",p(L).c),S(R,"y",p(L).r)}),T(w,R)}),Y(b),T(I,b)};ge(m,I=>{p(c)&&I(E)})}T(t,h),le()}var _4=de('<line class="diag svelte-ylotlw"></line>'),f4=de('<line class="antidiag svelte-ylotlw"></line>'),g4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),h4=de('<line class="diag svelte-ylotlw"></line>'),v4=de('<line class="antidiag svelte-ylotlw"></line>'),p4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),m4=de('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function E4(t,e){ae(e,!1);const n=rt(),r=()=>ve(Rr,"$globalConstraintsStore",n),i=()=>ve(gn,"$gridStore",n),s=D(),a=D(),c=D(),u=D(),_=D(),v=D(),g=D(),h=D(),m=D(),E=D(),I=D(),b=D(),w=0,L=0,R=0,k=0;G(()=>r(),()=>{x(s,r())}),G(()=>(p(s),d),()=>{x(a,!!p(s).get(d.POSITIVE_DIAGONAL))}),G(()=>(p(s),d),()=>{x(c,!!p(s).get(d.NEGATIVE_DIAGONAL))}),G(()=>(p(s),d),()=>{x(u,!!p(s).get(d.NEGATIVE_ANTIDIAGONAL))}),G(()=>(p(s),d),()=>{x(_,!!p(s).get(d.POSITIVE_ANTIDIAGONAL))}),G(()=>(p(s),d),()=>{x(v,!!p(s).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),G(()=>(p(s),d),()=>{x(g,!!p(s).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),G(()=>i(),()=>{x(h,i())}),G(()=>p(h),()=>{x(m,p(h).nCols)}),G(()=>p(h),()=>{x(E,p(h).nRows)}),G(()=>p(h),()=>{x(I,p(h).nCols)}),G(()=>p(h),()=>{x(b,p(h).nRows)}),Ie(),fe();var U=m4(),P=K(U);{var W=Se=>{var we=_4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),T(Se,we)};ge(P,Se=>{p(c)&&Se(W)})}var X=F(P);{var J=Se=>{var we=f4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),T(Se,we)};ge(X,Se=>{p(u)&&Se(J)})}var ce=F(X);{var Q=Se=>{var we=g4();S(we,"x1",w),S(we,"y1",L),ee(()=>{S(we,"x2",p(I)),S(we,"y2",p(b))}),T(Se,we)};ge(ce,Se=>{p(v)&&Se(Q)})}var ie=F(ce);{var pe=Se=>{var we=h4();S(we,"x2",k),S(we,"y1",R),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(E))}),T(Se,we)};ge(ie,Se=>{p(a)&&Se(pe)})}var me=F(ie);{var Ce=Se=>{var we=v4();S(we,"x2",k),S(we,"y1",R),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(E))}),T(Se,we)};ge(me,Se=>{p(_)&&Se(Ce)})}var De=F(me);{var st=Se=>{var we=p4();S(we,"x2",k),S(we,"y1",R),ee(()=>{S(we,"x1",p(m)),S(we,"y2",p(E))}),T(Se,we)};ge(De,Se=>{p(g)&&Se(st)})}Y(U),T(t,U),le()}var C4=de('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function I4(t,e){ae(e,!1);const n=rt(),r=()=>ve(fn,"$cellsStore",n),i=()=>ve(Nv,"$showFogStore",n),s=()=>ve(Ja,"$solutionStore",n),a=()=>ve(gn,"$gridStore",n),c=D(),u=D(),_=D(),v=D(),g=D(),h=D();let m=$(e,"boundingBox",8),E=$(e,"gridShape",8);function I(pe){const me=pe.filter(we=>we.fog);if(!p(g))return me.map(vt=>vt.toCoords());const Ce=pe.filter(we=>we.value===p(g)[we.r][we.c]);let De=new Set;for(const we of Ce){const vt=p(h).getNeighboorCells(we);De=new Set([...vt,we])}return[...new Set(me).difference(De)].map(we=>we.toCoords())}G(()=>r(),()=>{x(c,r())}),G(()=>p(c),()=>{x(u,I(p(c)))}),G(()=>p(u),()=>{x(_,go(p(u),0))}),G(()=>i(),()=>{x(v,i())}),G(()=>s(),()=>{x(g,s())}),G(()=>a(),()=>{x(h,a())}),Ie(),fe();var b=C4(),w=K(b),L=K(w);Y(w);var R=F(w),k=K(R);S(k,"stroke-width",.5);var U=F(k);S(U,"stroke-width",.375);var P=F(U);S(P,"stroke-width",.25);var W=F(P);S(W,"stroke-width",.125),Si(),Y(R);var X=F(R),J=K(X);Si(),Y(X);var ce=F(X),Q=K(ce),ie=F(Q);S(ie,"x",0),S(ie,"y",0),Y(ce),Y(b),ee(()=>{S(L,"d",p(_)),Ot(R,"disabled",!p(v)),Ot(X,"disabled",!p(v)),S(J,"x",m().x),S(J,"y",m().y),S(J,"width",m().width),S(J,"height",m().height),S(Q,"x",m().x),S(Q,"y",m().y),S(Q,"width",m().width),S(Q,"height",m().height),S(ie,"width",E().nCols),S(ie,"height",E().nRows)}),T(t,b),le()}var b4=de('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function w4(t,e){ae(e,!1);const n=rt(),r=()=>ve(Nv,"$showFogStore",n),i=D();let s=$(e,"gridShape",8);G(()=>r(),()=>{x(i,r())}),Ie(),fe();var a=b4(),c=K(a);S(c,"x",0),S(c,"y",0),Y(a),ee(()=>{S(a,"visibility",p(i)?"visible":"hidden"),S(c,"width",s().nCols),S(c,"height",s().nRows)}),T(t,a),le()}var O4=de('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function y4(t,e){ae(e,!1);const n=D();let r=$(e,"r",8),i=$(e,"c",8),s=$(e,"val",8);const a=.8,c=400;G(()=>(Z(r()),Z(i())),()=>{x(n,Zn({r:r(),c:i()}))}),Ie(),fe();var u=Ae(),_=ue(u);{var v=g=>{var h=O4();S(h,"font-size",a),S(h,"font-weight",c);var m=K(h,!0);Y(h),ee(()=>{S(h,"x",p(n).x),S(h,"y",p(n).y),et(m,s())}),T(g,h)};ge(_,g=>{s()!==null&&g(v)})}T(t,u),le()}var L4=de('<g class="solution-layer"></g>');function A4(t,e){ae(e,!1);const n=rt(),r=()=>ve(Ja,"$solutionStore",n),i=()=>ve(zt,"$settingsStore",n),s=()=>ve(Qa,"$gameModeStore",n),a=D(),c=D(),u=D();G(()=>r(),()=>{x(a,r())}),G(()=>i(),()=>{x(c,i().showSolution)}),G(()=>s(),()=>{x(u,s())}),Ie(),fe();var _=Ae(),v=ue(_);{var g=h=>{var m=L4();lt(m,5,()=>p(a),At,(E,I,b)=>{var w=Ae(),L=ue(w);lt(L,1,()=>p(I),At,(R,k,U)=>{y4(R,{r:b,c:U,get val(){return p(k)}})}),T(E,w)}),Y(m),T(h,m)};ge(v,h=>{p(a)&&p(c)&&p(u)===ho.SETTING&&h(g)})}T(t,_),le()}var S4=de("<g></g>"),x4=de('<g mask="url(#fog-mask-fog)"></g>');function ei(t,e){let n=$(e,"elements",8),r=$(e,"g_name",8),i=$(e,"Component",8);var s=x4();lt(s,5,n,At,(a,c)=>{let u=()=>p(c).toolId,_=()=>p(c).element;var v=S4();lt(v,5,()=>Object.entries(_()),g=>g[0],(g,h)=>{i()(g,{get tool(){return p(h)[1]}})}),Y(v),ee(()=>ii(v,`element-group ${u()}`)),T(a,v)}),Y(s),ee(()=>ii(s,Lh(r()))),T(t,s)}var N4=de('<line class="svelte-yr67cf"></line>');function T4(t,e){ae(e,!1);const n=D(),r=D(),i=D();let s=$(e,"shape",8),a=$(e,"coords",8);const[c,u]=a(),_=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,h=c.r===u.r?u.r+1:u.r;G(()=>Z(s()),()=>{x(n,s().stroke??"black")}),G(()=>Z(s()),()=>{var E;x(r,(E=s())==null?void 0:E.opacity)}),G(()=>Z(s()),()=>{x(i,s().strokeWidth??.02)}),Ie(),fe();var m=N4();S(m,"x1",_),S(m,"x2",v),S(m,"y1",g),S(m,"y2",h),ee(()=>{S(m,"stroke",p(n)),S(m,"stroke-width",p(i)),S(m,"opacity",p(r))}),T(t,m),le()}var D4=de('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function R4(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D();let c=$(e,"tool",8);const u=c().cells,_=hn(c().toolId,Gt)??Xh;function v(I,b){return b===H.TEXT_ONLY?I.value?I.value:"-":I.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const I=Zn(u[0]);return Zn(u[1]).subtract(I).angle()/(2*Math.PI)*360}G(()=>Z(c()),()=>{x(n,c().shape??_)}),G(()=>Fa,()=>{x(r,TL(Fa(u)))}),G(()=>(p(n),H),()=>{var I;x(i,((I=p(n))==null?void 0:I.type)||H.CIRCLE)}),G(()=>p(n),()=>{var I;x(s,((I=p(n))==null?void 0:I.fontSize)??.2)}),G(()=>p(n),()=>{var I;x(a,((I=p(n))==null?void 0:I.fontColor)??"black")}),Ie(),fe();var h=Ae(),m=ue(h);{var E=I=>{var b=D4(),w=K(b);{var L=P=>{Nr(P,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},R=P=>{var W=Ae(),X=ue(W);{var J=Q=>{Nr(Q,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(n)}})},ce=Q=>{var ie=Ae(),pe=ue(ie);{var me=De=>{T4(De,{coords:u,get shape(){return p(n)}})},Ce=De=>{Cl(De,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return p(n)}})};ge(pe,De=>{p(i)===H.BORDER_LINE?De(me):De(Ce,!1)},!0)}T(Q,ie)};ge(X,Q=>{p(i)===H.TEXT_ONLY?Q(J):Q(ce,!1)},!0)}T(P,W)};ge(w,P=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?P(L):P(R,!1)})}var k=F(w);ee(()=>S(k,"transform",`rotate(${g()}, ${p(r).x}, ${p(r).y} )`));var U=K(k,!0);ee(()=>et(U,v(c(),p(i)))),Y(k),Y(b),ee(()=>{S(k,"x",p(r).x),S(k,"y",p(r).y),S(k,"font-size",p(s)),S(k,"fill",p(a))}),T(I,b)};ge(m,I=>{u.length===2&&I(E)})}T(t,h),le()}var k4=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),G4=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),M4=de('<g class="quadruple-text"><!></g>');function U4(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D();let c=$(e,"cornerTool",8);const u=c().cells,_=new Ge(u[u.length-1].c,u[u.length-1].r),v=hn(c().toolId,Gt)??qh;G(()=>Z(c()),()=>{x(n,c().value)}),G(()=>Z(c()),()=>{x(r,c().shape??v)}),G(()=>p(r),()=>{var E;x(i,((E=p(r))==null?void 0:E.fontSize)??.2)}),G(()=>p(r),()=>{var E;x(s,((E=p(r))==null?void 0:E.fontColor)??"black")}),G(()=>p(n),()=>{var E;x(a,p(n)?(E=p(n))==null?void 0:E.split(","):[])}),Ie(),fe();var g=Ae(),h=ue(g);{var m=E=>{var I=M4(),b=K(I);{var w=R=>{var k=k4(),U=K(k,!0);ee(()=>et(U,p(a).join(" "))),Y(k),ee(()=>{S(k,"x",_.x),S(k,"y",_.y),S(k,"font-size",p(i)),S(k,"fill",p(s))}),T(R,k)},L=R=>{var k=G4(),U=ue(k),P=K(U,!0);ee(()=>et(P,p(a).slice(0,2).join(" "))),Y(U);var W=F(U),X=K(W,!0);ee(()=>et(X,p(a).slice(2).join(" "))),Y(W),ee(()=>{S(U,"x",_.x),S(U,"y",_.y),S(U,"dy",-p(i)/2),S(U,"font-size",p(i)),S(U,"fill",p(s)),S(W,"x",_.x),S(W,"y",_.y),S(W,"dy",p(i)/2),S(W,"font-size",p(i)),S(W,"fill",p(s))}),T(R,k)};ge(b,R=>{p(a).length<=2?R(w):R(L,!1)})}Y(I),ee(()=>S(I,"data-count",p(a).length)),T(E,I)};ge(h,E=>{p(n)&&E(m)})}T(t,g),le()}var $4=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),F4=de('<g class="corner-tool"><!><!></g>');function H4(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D();let a=$(e,"tool",8);const c=a().cells,u=hn(a().toolId,Gt)??qh,_=new Ge(c[c.length-1].c,c[c.length-1].r);function v(E,I){return I===H.TEXT_ONLY?E.value?E.value:"-":E.value??""}G(()=>Z(a()),()=>{x(n,a().shape??u)}),G(()=>(p(n),H),()=>{var E;x(r,((E=p(n))==null?void 0:E.type)??H.CIRCLE)}),G(()=>p(n),()=>{var E;x(i,((E=p(n))==null?void 0:E.fontSize)??.2)}),G(()=>p(n),()=>{var E;x(s,((E=p(n))==null?void 0:E.fontColor)??"black")}),Ie(),fe();var g=Ae(),h=ue(g);{var m=E=>{var I=F4(),b=K(I);Cl(b,{get cx(){return _.x},get cy(){return _.y},get shape(){return p(n)}});var w=F(b);{var L=k=>{U4(k,{get cornerTool(){return a()}})},R=k=>{var U=$4(),P=K(U,!0);ee(()=>et(P,v(a(),p(r)))),Y(U),ee(()=>{S(U,"x",_.x),S(U,"y",_.y),S(U,"font-size",p(i)),S(U,"fill",p(s))}),T(k,U)};ge(w,k=>{a().toolId===d.QUADRUPLE?k(L):k(R,!1)})}Y(I),T(E,I)};ge(h,E=>{c.length===4&&E(m)})}T(t,g),le()}var P4=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),B4=de('<g class="center-corner-or-edge-tool"><!><!></g>');function W4(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D();let u=$(e,"tool",8);const _=u().cell,v=hn(u().toolId,Gt)??Xh;function g(w,L){return L===H.TEXT_ONLY?w.value?w.value:"-":w.value??""}G(()=>Z(u()),()=>{x(n,u().shape??v)}),G(()=>{},()=>{x(r,_)}),G(()=>(p(n),H),()=>{var w;x(i,((w=p(n))==null?void 0:w.type)||H.CIRCLE)}),G(()=>p(n),()=>{var w;x(s,((w=p(n))==null?void 0:w.fontSize)??.2)}),G(()=>p(n),()=>{var w;x(a,((w=p(n))==null?void 0:w.fontColor)??"black")}),G(()=>p(r),()=>{x(c,p(r).r%1===.5&&p(r).c%1===.5)}),Ie(),fe();var h=B4(),m=K(h);Cl(m,{get cx(){return p(r).c},get cy(){return p(r).r},get shape(){return p(n)}});var E=F(m);{var I=w=>{var L=Xe(()=>g(u(),p(i))),R=Xe(()=>Math.floor(p(r).c)),k=Xe(()=>Math.floor(p(r).r));vs(w,{get value(){return p(L)},get x(){return p(R)},get y(){return p(k)},position:"TL",get fontColor(){return p(a)}})},b=w=>{var L=P4(),R=K(L,!0);ee(()=>et(R,g(u(),p(i)))),Y(L),ee(()=>{S(L,"x",p(r).c),S(L,"y",p(r).r),S(L,"font-size",p(s)),S(L,"fill",p(a))}),T(w,L)};ge(E,w=>{p(c)?w(I):w(b,!1)})}Y(h),T(t,h),le()}var z4=de('<path fill="none"></path>');function Di(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D();let u=$(e,"linePoints",8),_=$(e,"shape",8,void 0);const v="round",g="round";G(()=>Z(_()),()=>{var m;x(n,((m=_())==null?void 0:m.stroke)??"gray")}),G(()=>Z(_()),()=>{var m;x(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),G(()=>Z(_()),()=>{var m;x(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),G(()=>Z(_()),()=>{var m;x(s,((m=_())==null?void 0:m.strokeDashoffset)??0)}),G(()=>Z(_()),()=>{var m,E,I,b,w,L,R,k;x(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=_())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((L=(w=_())==null?void 0:w.linePathOptions)==null?void 0:L.bezierRounding)??.2,closeLoops:((k=(R=_())==null?void 0:R.linePathOptions)==null?void 0:k.closeLoops)??!1})}),G(()=>(Z(u()),p(a)),()=>{x(c,pl(u(),p(a)))}),Ie(),fe();var h=z4();S(h,"stroke-linejoin",v),S(h,"stroke-linecap",g),ee(()=>{S(h,"d",p(c)),S(h,"stroke",p(n)),S(h,"stroke-width",p(r)),S(h,"stroke-dasharray",p(i)),S(h,"stroke-dashoffset",p(s))}),T(t,h),le()}var Y4=ne("<!> <!> <!>",1);function j4(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D();let a=$(e,"linePoints",8),c=$(e,"shape",8,ms);function u(b){var R;const w=St.cloneDeep(b);w.r=w.r||.2;const L=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:L,shortenTail:L,bezierRounding:(R=w.linePathOptions)==null?void 0:R.bezierRounding},w}G(()=>Z(a()),()=>{x(n,a().length)}),G(()=>(p(n),Z(a())),()=>{x(r,p(n)>=0?a()[0]:void 0)}),G(()=>(p(n),Z(a())),()=>{x(i,p(n)>=0?a()[p(n)-1]:void 0)}),G(()=>Z(c()),()=>{x(s,u(c()))}),Ie(),fe();var _=Y4(),v=ue(_);{var g=b=>{Nr(b,{get x(){return p(r).x},get y(){return p(r).y},get shape(){return p(s)}})};ge(v,b=>{p(r)&&b(g)})}var h=F(v,2);{var m=b=>{Di(b,{get linePoints(){return a()},get shape(){return p(s)}})};ge(h,b=>{p(n)>1&&b(m)})}var E=F(h,2);{var I=b=>{Nr(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(s)}})};ge(E,b=>{p(i)&&b(I)})}T(t,_),le()}var V4=ne("<!> <!> <!>",1);function K4(t,e){ae(e,!1);const n=D(),r=D(),i=D();let s=$(e,"linePoints",8),a=$(e,"shape",12,ms);const c=4,u=.5;function _(k,U){const P=U.r??u,W=U.n??c,X=U.angle??0,J=rp(P,W,new Ge(0,0),!0,0),ce=(W+(k-X/360)*W%W)%W,Q=Math.floor(ce)%W,ie=Math.ceil(ce)%W;return J[Q].lerp(J[ie],ce%1).length()}function v(k){if(p(n)<=1)return 0;const U=s()[0],W=s()[1].subtract(U).angle()/(2*Math.PI);return _(W,k)}function g(k){if(p(n)<=1)return 0;const U=s()[p(n)-1],W=s()[p(n)-2].subtract(U).angle()/(2*Math.PI);return _(W,k)}function h(k){var P;const U=St.cloneDeep(k);return U.r=U.r||u,U.opacity=1,U.linePathOptions={shortenHead:v(U),shortenTail:g(U),bezierRounding:(P=U.linePathOptions)==null?void 0:P.bezierRounding},U}G(()=>Z(s()),()=>{x(n,s().length)}),G(()=>(p(n),Z(s())),()=>{x(r,p(n)>=0?s()[0]:void 0)}),G(()=>(p(n),Z(s())),()=>{x(i,p(n)>=0?s()[p(n)-1]:void 0)}),G(()=>Z(a()),()=>{a(h(a()))}),Ie(),fe();var m=V4(),E=ue(m);{var I=k=>{Pa(k,{get cx(){return p(r).x},get cy(){return p(r).y},get shape(){return a()}})};ge(E,k=>{p(r)&&k(I)})}var b=F(E,2);{var w=k=>{Di(k,{get linePoints(){return s()},get shape(){return a()}})};ge(b,k=>{p(n)>1&&k(w)})}var L=F(b,2);{var R=k=>{Pa(k,{get cx(){return p(i).x},get cy(){return p(i).y},get shape(){return a()}})};ge(L,k=>{p(i)&&k(R)})}T(t,m),le()}var X4=ne("<!> <!>",1);function sh(t,e){ae(e,!1);const n=D();let r=$(e,"linePoints",8),i=$(e,"shape",8,ms);function s(m){var b,w,L;const E=St.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=E.linePathOptions)==null?void 0:L.bezierRounding},E}function a(m){var b,w,L;const E=St.cloneDeep(m);E.r=E.r||.3,E.opacity=1,E.strokeWidth=0;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(L=E.linePathOptions)==null?void 0:L.bezierRounding},E}G(()=>Z(r()),()=>{x(n,r().length>0?r()[0]:void 0)}),Ie(),fe();var c=X4(),u=ue(c);{var _=m=>{var E=Xe(()=>s(i()));Di(m,{get linePoints(){return r()},get shape(){return p(E)}})};ge(u,m=>{r().length>1&&m(_)})}var v=F(u,2);{var g=m=>{var E=Xe(()=>s(i()));Nr(m,{get x(){return p(n).x},get y(){return p(n).y},get shape(){return p(E)}})},h=m=>{var E=Ae(),I=ue(E);{var b=w=>{var L=Xe(()=>a(i()));Pa(w,{get cx(){return p(n).x},get cy(){return p(n).y},get shape(){return p(L)}})};ge(I,w=>{p(n)&&w(b)},!0)}T(m,E)};ge(v,m=>{p(n)&&i().type===H.THERMO_WITH_CIRCLE?m(g):m(h,!1)})}T(t,c),le()}var q4=de('<g class="line-tool"><!></g>');function Z4(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D();let a=$(e,"tool",8);const c=hn(a().toolId,Gt)??ms;G(()=>Z(a()),()=>{x(n,Fa(a().cells))}),G(()=>Z(a()),()=>{x(r,a().shape??c)}),G(()=>(p(r),H),()=>{var h;x(i,((h=p(r))==null?void 0:h.type)||H.LINE)}),G(()=>p(r),()=>{var h;x(s,((h=p(r))==null?void 0:h.opacity)??.8)}),Ie(),fe();var u=q4(),_=K(u);{var v=h=>{Di(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{var m=Ae(),E=ue(m);{var I=w=>{j4(w,{get linePoints(){return p(n)},get shape(){return p(r)}})},b=w=>{var L=Ae(),R=ue(L);{var k=P=>{K4(P,{get linePoints(){return p(n)},get shape(){return p(r)}})},U=P=>{var W=Ae(),X=ue(W);{var J=Q=>{sh(Q,{get linePoints(){return p(n)},get shape(){return p(r)}})},ce=Q=>{var ie=Ae(),pe=ue(ie);{var me=De=>{sh(De,{get linePoints(){return p(n)},get shape(){return p(r)}})},Ce=De=>{Di(De,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(pe,De=>{p(i)===H.THERMO_WITH_POLYGON?De(me):De(Ce,!1)},!0)}T(Q,ie)};ge(X,Q=>{p(i)===H.THERMO_WITH_CIRCLE?Q(J):Q(ce,!1)},!0)}T(P,W)};ge(R,P=>{p(i)===H.LINE_WITH_POLYGON_ENDS?P(k):P(U,!1)},!0)}T(w,L)};ge(E,w=>{p(i)===H.LINE_WITH_CIRCLE_ENDS?w(I):w(b,!1)},!0)}T(h,m)};ge(_,h=>{p(i)===H.LINE?h(v):h(g,!1)})}Y(u),ee(()=>S(u,"opacity",p(s))),T(t,u),le()}var Q4=de('<g class="cage-tool"><!></g>');function J4(t,e){ae(e,!1);const n=D();let r=$(e,"tool",8);const i=hn(r().toolId,Gt)??dd;G(()=>Z(r()),()=>{x(n,r().shape??i)}),Ie(),fe();var s=Q4(),a=K(s);op(a,{get cells(){return r().cells},get shape(){return p(n)},get value(){return r().value}}),Y(s),T(t,s),le()}var eF=ne("<!> <!> <!> <!>",1);function tF(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D(),c=D(),u=D(),_=D();let v=$(e,"tool",8);const g=hn(v().toolId,Gt)??SO,h=800,m=v().value;G(()=>Z(v()),()=>{x(n,v().shape??g)}),G(()=>p(n),()=>{x(r,p(n).inset??.15)}),G(()=>p(n),()=>{x(i,p(n).strokeWidth??.07)}),G(()=>p(n),()=>{x(s,p(n).fontColor??p(n).stroke??"black")}),G(()=>Z(v()),()=>{x(a,v().cells[v().cells.length-1])}),G(()=>Z(v()),()=>{x(c,v().cells2[v().cells2.length-1])}),G(()=>(p(a),p(r)),()=>{x(u,new Ge(p(a).c+1-p(r)-.05,p(a).r+1-p(r)-.05))}),G(()=>(p(c),p(r)),()=>{x(_,new Ge(p(c).c+1-p(r)-.05,p(c).r+1-p(r)-.05))}),Ie(),fe();var E=eF(),I=ue(E);Ha(I,{get cells(){return v().cells},get shape(){return p(n)}});var b=F(I,2);vs(b,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(s)},fontWeight:h});var w=F(b,2);Ha(w,{get cells(){return v().cells2},get shape(){return p(n)}});var L=F(w,2);vs(L,{value:m,get x(){return p(_).x},get y(){return p(_).y},position:"BR",get fontColor(){return p(s)},fontWeight:h}),T(t,E),le()}var nF=de('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function rF(t,e){var P;ae(e,!1);const n=D(),r=D(),i=D();let s=$(e,"tool",8);const a=s().cell,c=s().direction,u=Vh(a,c),_=Zn(a),v=hn(s().toolId,Gt)??xO,g=((P=p(n))==null?void 0:P.fontSize)??.5,h=.03;function m(W){return W.value&&W.value.length?W.value:"-"}function E(){const J=Zn(u).subtract(_).length(),ce={shortenHead:.3*J,shortenTail:.55*J};return Lu([a,u],ce)}const b=`outside-tool-arrow-marker-${crypto.randomUUID()}`;G(()=>Z(s()),()=>{x(n,s().shape??v)}),G(()=>p(n),()=>{var W;x(r,((W=p(n))==null?void 0:W.fontColor)??"var(--text-primary-color)")}),G(()=>p(n),()=>{var W;x(i,((W=p(n))==null?void 0:W.stroke)??"var(--text-primary-color)")}),Ie(),fe();var w=nF(),L=K(w);El(L,{id:b,l:.07,strokeWidth:h,get stroke(){return p(i)}});var R=F(L);ee(()=>S(R,"d",E())),S(R,"stroke-width",h),S(R,"marker-end",`url(#${b??""})`);var k=F(R);S(k,"font-size",g);var U=K(k,!0);ee(()=>et(U,m(s()))),Y(k),Y(w),ee(()=>{S(R,"stroke",p(i)),S(k,"x",_.x),S(k,"y",_.y),S(k,"fill",p(r))}),T(t,w),le()}var iF=ne("<!> <!> <!>",1);function oF(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D(),a=D();let c=$(e,"linePoints",8),u=$(e,"shape",8);function _(b){const w=St.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}G(()=>Z(c()),()=>{x(n,c().length)}),G(()=>(p(n),Z(c())),()=>{x(r,p(n)>1&&c()[0].equals(c()[p(n)-1]))}),G(()=>(p(n),Z(c())),()=>{x(i,p(n)>=0?c()[0]:void 0)}),G(()=>(p(n),Z(c())),()=>{x(s,p(n)>=0?c()[p(n)-1]:void 0)}),G(()=>Z(u()),()=>{x(a,_(u()))}),Ie(),fe();var v=iF(),g=ue(v);Di(g,{get linePoints(){return c()},get shape(){return u()}});var h=F(g,2);{var m=b=>{Nr(b,{get x(){return p(i).x},get y(){return p(i).y},get shape(){return p(a)}})};ge(h,b=>{!p(r)&&p(i)&&b(m)})}var E=F(h,2);{var I=b=>{Nr(b,{get x(){return p(s).x},get y(){return p(s).y},get shape(){return p(a)}})};ge(E,b=>{!p(r)&&p(s)&&b(I)})}T(t,v),le()}var sF=de('<g class="corner-line-tool"><!></g>');function aF(t,e){ae(e,!1);const n=D(),r=D(),i=D(),s=D();let a=$(e,"tool",8);const c=hn(a().toolId,Gt)??ms;G(()=>(Z(a()),Ge),()=>{x(n,a().coords.map(h=>new Ge(h.c,h.r)))}),G(()=>Z(a()),()=>{x(r,a().shape??c)}),G(()=>(p(r),H),()=>{var h;x(i,((h=p(r))==null?void 0:h.type)||H.LINE)}),G(()=>p(r),()=>{var h;x(s,((h=p(r))==null?void 0:h.opacity)??1)}),Ie(),fe();var u=sF(),_=K(u);{var v=h=>{oF(h,{get linePoints(){return p(n)},get shape(){return p(r)}})},g=h=>{Di(h,{get linePoints(){return p(n)},get shape(){return p(r)}})};ge(_,h=>{p(i)===H.MAZE_WALL?h(v):h(g,!1)})}Y(u),ee(()=>S(u,"opacity",p(s))),T(t,u),le()}var lF=de('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function cF(t,e){ae(e,!1);const n=rt(),r=()=>ve(gn,"$gridStore",n),i=()=>ve(gt,"$localConstraintsStore",n),s=()=>ve(qt,"$toolStore",n),a=()=>ve(fn,"$cellsStore",n),c=()=>ve(AU,"$cageToolsStore",n),u=()=>ve(OU,"$lineToolsStore",n),_=()=>ve(SU,"$cloneToolsStore",n),v=()=>ve(yU,"$cornerLineToolsStore",n),g=()=>ve(xU,"$outsideDirectionToolsStore",n),h=()=>ve(IU,"$edgeToolsStore",n),m=()=>ve(wU,"$cornerToolsStore",n),E=()=>ve(bU,"$centerCornerOrEdgeToolsStore",n),I=D(),b=D(),w=D();let L=$(e,"svgRef",12,null);function R(){for(const[Rt,Ne]of i().entries()){if(!fs(Rt))continue;if(Object.entries(Ne).some(([Re,xe])=>!Xt(xe.cell,p(b))))return!0}return!1}function k(Rt,Ne){const Ee=R(),Re=fs(Ne),xe=Ee||Re?1:.2,yt=-xe,ks=-xe,wl=Rt.nCols+2*xe,gi=Rt.nRows+2*xe;return{x:yt,y:ks,width:wl,height:gi}}function U(Rt){return`${Rt.x} ${Rt.y} ${Rt.width} ${Rt.height}`}G(()=>r(),()=>{x(I,r())}),G(()=>p(I),()=>{x(b,{nRows:p(I).nRows,nCols:p(I).nCols})}),G(()=>(p(b),s()),()=>{x(w,k(p(b),s()))}),Ie(),fe();var P=lF();ee(()=>S(P,"viewBox",U(p(w))));var W=K(P);I4(W,{get boundingBox(){return p(w)},get gridShape(){return p(b)}});var X=F(W);w4(X,{get gridShape(){return p(b)}});var J=F(X);mU(J,{get grid(){return r()}});var ce=F(J);J8(ce,{get gridShape(){return p(b)}});var Q=F(ce);lt(Q,5,a,At,(Rt,Ne)=>{G$(Rt,{get cell(){return p(Ne)}})}),Y(Q);var ie=F(Q);J$(ie,{});var pe=F(ie);s$(pe,{});var me=F(pe);ei(me,{get elements(){return c()},g_name:"cage-tools-layer",Component:J4});var Ce=F(me);ei(Ce,{get elements(){return u()},g_name:"line-tools-layer",Component:Z4});var De=F(Ce);ei(De,{get elements(){return _()},g_name:"clone-tools-layer",Component:tF});var st=F(De);nU(st,{});var Se=F(st);E4(Se,{});var we=F(Se);gU(we,{});var vt=F(we);ei(vt,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:aF});var ct=F(vt);MU(ct,{get boundingBox(){return p(w)}});var Ln=F(ct);ei(Ln,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:rF});var $n=F(Ln);vU($n,{get boundingBox(){return p(w)}});var Pr=F($n);Z8(Pr,{});var Qt=F(Pr);ei(Qt,{get elements(){return h()},g_name:"edge-tools-layer",Component:R4});var mr=F(Qt);ei(mr,{get elements(){return m()},g_name:"corner-tools-layer",Component:H4});var fi=F(mr);ei(fi,{get elements(){return E()},g_name:"center-corner-edge-tools-layer",Component:W4});var or=F(fi);Z$(or,{});var Fn=F(or);lt(Fn,5,a,At,(Rt,Ne)=>{D$(Rt,{get cell(){return p(Ne)}})}),Y(Fn);var Pi=F(Fn);A4(Pi,{});var Br=F(Pi);d4(Br,{}),Y(P),xi(P,Rt=>L(Rt),()=>L()),T(t,P),le()}function uF(t){return zL(t)?(Qw(),!0):!1}function dF(t){return YL(t)?(yv(),!0):!1}function _F(t){return jL(t)?(Lv(),!0):!1}function au(t){(uF(t)||dF(t)||_F(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var fF=ne('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function gF(t,e){ae(e,!1);const n=rt(),r=()=>ve(np,"$InputHandlerStore",n),i=()=>ve(uo,"$svgRefStore",n),s=D();let a=D(null);function c(h){return m=>{h&&p(s)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===p(a))&&h(m)}}G(()=>r(),()=>{x(s,r())}),Ie();var u=fF();Me("keydown",Yc,function(...h){au==null||au.apply(this,h)});var _=Ag(()=>{var h;return c((h=p(s))==null?void 0:h.keyDown)});Me("keydown",Yc,function(...h){var m;(m=p(_))==null||m.apply(this,h)});var v=Ag(()=>{var h;return c((h=p(s))==null?void 0:h.keyUp)});Me("keyup",Yc,function(...h){var m;(m=p(v))==null||m.apply(this,h)});var g=K(u);cF(g,{get svgRef(){return Ih(),i()},set svgRef(h){ps(uo,h)},$$legacy:!0}),Y(u),xi(u,h=>x(a,h),()=>p(a)),Me("pointerdown",u,Xc(qn(h=>{var m;h.currentTarget.focus(),(m=p(s))==null||m.pointerDown(h)})),!0),Me("pointermove",u,Xc(qn(h=>{var m;h.currentTarget.focus(),(m=p(s))==null||m.pointerMove(h)})),!0),Me("pointerup",u,Xc(qn(h=>{var m;h.currentTarget.focus(),(m=p(s))==null||m.pointerUp(h)})),!0),T(t,u),le()}var hF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function vF(t){var e=hF();T(t,e)}var pF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function mF(t){var e=pF();T(t,e)}var EF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function CF(t){var e=EF();T(t,e)}var IF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function bF(t){var e=IF();T(t,e)}var wF=ne('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function OF(t,e){ae(e,!1);const n=rt(),r=()=>ve(mo,"$commandHistoryStore",n),i=()=>ve(bu,"$selectOnStore",n),s=D(),a=D();function c(){yv()}function u(){Lv()}function _(){console.log("check")}function v(){ps(bu,!i())}G(()=>r(),()=>{x(s,r()._undoStack.length===0)}),G(()=>r(),()=>{x(a,r()._redoStack.length===0)}),Ie(),fe();var g=wF(),h=K(g),m=K(h);bF(m),Y(h);var E=F(h,2),I=K(E);mF(I),Y(E);var b=F(E,2);b.disabled=!0;var w=K(b);vF(w),Y(b);var L=F(b,2),R=K(L);CF(R),Y(L),Y(g),ee(()=>{h.disabled=p(s),E.disabled=p(a),S(L,"aria-checked",i()),Ot(L,"active",i())}),Me("click",h,c),Me("click",E,u),Me("click",b,_),Me("click",L,v),T(t,g),le()}var yF=ne('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),LF=ne('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),AF=ne('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),SF=ne('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function xF(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n),i=()=>ve(Ua,"$penColorStore",n),s=()=>ve(np,"$InputHandlerStore",n),a=D(),c=D(),u=[];let _=$(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let h=D(!1);function m(W){return W?g:v}function E(W){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(W)}function I(W){const X=W.currentTarget;if(!X)return;const J=X.getAttribute("aria-checked");x(h,J!=="true")}G(()=>r(),()=>{x(a,r().penToolActive)}),G(()=>r(),()=>{x(c,r().letterToolActive)}),Ie(),fe();var b=SF(),w=K(b);{var L=W=>{var X=Ae(),J=ue(X);lt(J,1,()=>v,At,(ce,Q)=>{var ie=yF(),pe=K(ie);Kt(pe);var me;Si(2),Y(ie),ee(()=>{S(ie,"data-value",p(Q)),Ot(ie,"active",i()===p(Q)),me!==(me=p(Q))&&(pe.value=(pe.__value=p(Q))==null?"":p(Q))}),Va(u,[],pe,()=>(p(Q),i()),Ce=>ps(Ua,Ce)),T(ce,ie)}),T(W,X)},R=W=>{var X=Ae(),J=ue(X);lt(J,1,()=>m(p(h)),At,(ce,Q)=>{var ie=LF(),pe=K(ie),me=K(pe,!0);Y(pe),Si(2),Y(ie),ee(()=>{Bw(ie,p(Q)),et(me,p(Q))}),Me("click",ie,function(...Ce){var De;(De=s()&&s().padClick)==null||De.apply(this,Ce)}),T(ce,ie)}),T(W,X)};ge(w,W=>{_()===d.PEN_TOOL&&p(a)?W(L):W(R,!1)})}var k=F(w,2);{var U=W=>{var X=AF();ee(()=>{S(X,"aria-checked",p(h)),Ot(X,"letter-checked",p(h)),Ot(X,"num-checked",!p(h))}),Me("click",X,I),T(W,X)};ge(k,W=>{p(c)&&E(_())&&W(U)})}var P=F(k,2);Y(b),ee(()=>{Ot(b,"digit",_()===d.DIGIT),Ot(b,"center",_()===d.CENTER_PM),Ot(b,"corner",_()===d.CORNER_PM),Ot(b,"color",_()===d.HIGHLIGHTS),Ot(b,"pen",_()===d.PEN_TOOL),Ot(P,"letter-tool",p(c))}),Me("click",P,function(...W){var X;(X=s()&&s().padClick)==null||X.apply(this,W)}),T(t,b),le()}var NF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function TF(t){var e=NF();T(t,e)}var DF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function RF(t){var e=DF();T(t,e)}var kF=ne('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Zo(t,e){ae(e,!1);const n=[];let r=$(e,"selectedTool",12),i=$(e,"value",8),s=$(e,"title",8,void 0);function a(){wu(i())}fe();var c=kF(),u=K(c);Kt(u);var _,v=F(u,2);ut(v,e,"default",{}),Y(c),ee(()=>{S(c,"title",s()),Ot(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),Va(n,[],u,()=>(i(),r()),r),Me("change",u,a),T(t,c),le()}var GF=ne('<span aria-hidden="true">1</span>'),MF=ne('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),UF=ne('<span aria-hidden="true" style="font-size: 50%">123</span>'),$F=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),FF=ne('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),HF=ne('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function PF(t,e){ae(e,!1);const n=rt(),r=()=>ve(zt,"$settingsStore",n);let i=$(e,"selectedTool",12);fe();var s=HF(),a=K(s);Zo(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=GF();T(h,E)},$$slots:{default:!0},$$legacy:!0});var c=F(a,2);Zo(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=MF();T(h,E)},$$slots:{default:!0},$$legacy:!0});var u=F(c,2);Zo(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=UF();T(h,E)},$$slots:{default:!0},$$legacy:!0});var _=F(u,2);Zo(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=$F(),I=K(E);TF(I),Y(E),T(h,E)},$$slots:{default:!0},$$legacy:!0});var v=F(_,2);{var g=h=>{Zo(h,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=FF(),b=K(I);RF(b),Y(I),T(m,I)},$$slots:{default:!0},$$legacy:!0})};ge(v,h=>{r().penToolActive&&h(g)})}Y(s),T(t,s),le()}var BF=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function WF(t){var e=BF();T(t,e)}var zF=ne('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ts(t,e){let n=$(e,"title",8,void 0),r=$(e,"clickCb",8,void 0);var i=zF(),s=K(i),a=K(s);ut(a,e,"default",{}),Y(s),Y(i),ee(()=>S(i,"title",n())),Me("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),T(t,i)}var YF=ne('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),jF=ne('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function VF(t,e){ae(e,!1);let n=$(e,"showModal",12,!1);function r(){n(!1)}function i(){xv(),$a(),n(!1)}fe(),Hr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(s){n(s)},children:(s,a)=>{var c=jF(),u=F(K(c),2);ul(u,{children:(_,v)=>{var g=YF(),h=ue(g),m=F(h,2);Me("click",h,i),Me("click",m,r),T(_,g)},$$slots:{default:!0}}),Y(c),T(s,c)},$$slots:{default:!0},$$legacy:!0}),le()}var KF=ne("<!> <!>",1);function XF(t){let e=D(!1);function n(){x(e,!0)}var r=KF(),i=ue(r);Ts(i,{title:"Restart",clickCb:n,children:(a,c)=>{WF(a)},$$slots:{default:!0}});var s=F(i,2);VF(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var qF=ne('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Qo(t,e){let n=$(e,"title",8);var r=qF(),i=K(r),s=K(i,!0);Y(i);var a=F(i,2);ut(a,e,"default",{}),Y(r),ee(()=>et(s,n())),T(t,r)}var ZF=ne('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function dn(t,e){let n=$(e,"description",8);var r=ZF(),i=K(r),s=K(i,!0);Y(i);var a=F(i,2),c=K(a);ut(c,e,"default",{}),Y(a),Y(r),ee(()=>et(s,n())),T(t,r)}var QF=ne('<div class="shortcut svelte-1cgt5u5"> </div>');function tn(t,e){let n=$(e,"shortcut",8);var r=QF(),i=K(r,!0);Y(r),ee(()=>et(i,n())),T(t,r)}var JF=ne("<p></p>"),e6=ne("<!> <!> <!> <!>",1),t6=ne("<!> or <!>",1),n6=ne("<!> <!> <!> <!> <!> <!> <!> <!>",1),r6=ne("<!> <!>",1),i6=ne('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function o6(t,e){let n=$(e,"showModal",12,!1);Hr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var s=i6(),a=K(s);Qo(a,{title:"Setting Instructions",children:(g,h)=>{var m=JF();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",T(g,m)},$$slots:{default:!0}});var c=F(a,2);Qo(c,{title:"General",children:(g,h)=>{dn(g,{description:"Toggle Darkmode",children:(m,E)=>{tn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=F(c,2);Qo(u,{title:"Selection",children:(g,h)=>{var m=e6(),E=ue(m);dn(E,{description:"Select cells",children:(L,R)=>{tn(L,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=F(E,2);dn(I,{description:"Add to current selection",children:(L,R)=>{tn(L,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=F(I,2);dn(b,{description:"Remove from current selection",children:(L,R)=>{tn(L,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=F(b,2);dn(w,{description:"Add or remove from current selection",children:(L,R)=>{tn(L,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}});var _=F(u,2);Qo(_,{title:"Change Tool",children:(g,h)=>{var m=n6(),E=ue(m);dn(E,{description:"Cycle Tool",children:(P,W)=>{tn(P,{shortcut:"Space"})},$$slots:{default:!0}});var I=F(E,2);dn(I,{description:"Change to Digit Tool",children:(P,W)=>{tn(P,{shortcut:"Z"})},$$slots:{default:!0}});var b=F(I,2);dn(b,{description:"Change to Corner Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"X"})},$$slots:{default:!0}});var w=F(b,2);dn(w,{description:"Change to Center Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"C"})},$$slots:{default:!0}});var L=F(w,2);dn(L,{description:"Change to Highlights Tool",children:(P,W)=>{tn(P,{shortcut:"V"})},$$slots:{default:!0}});var R=F(L,2);dn(R,{description:"Quickshift To Corner Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"Shift"})},$$slots:{default:!0}});var k=F(R,2);dn(k,{description:"Quickshift To Center Pencilmark Tool",children:(P,W)=>{tn(P,{shortcut:"Ctrl"})},$$slots:{default:!0}});var U=F(k,2);dn(U,{description:"Quickshift To Highlights Tool",children:(P,W)=>{var X=t6(),J=ue(X);tn(J,{shortcut:"Shift + Ctrl"});var ce=F(J,2);tn(ce,{shortcut:"Alt"}),T(P,X)},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}});var v=F(_,2);Qo(v,{title:"Undo/Redo",children:(g,h)=>{var m=r6(),E=ue(m);dn(E,{description:"Undo",children:(b,w)=>{tn(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=F(E,2);dn(I,{description:"Redo",children:(b,w)=>{tn(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),T(g,m)},$$slots:{default:!0}}),Y(s),T(r,s)},$$slots:{default:!0},$$legacy:!0})}var s6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function a6(t){var e=s6();T(t,e)}var l6=ne("<!> <!>",1);function c6(t){let e=D(!1);function n(){x(e,!0)}var r=l6(),i=ue(r);Ts(i,{title:"Info",clickCb:n,children:(a,c)=>{a6(a)},$$slots:{default:!0}});var s=F(i,2);o6(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var u6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function d6(t){var e=u6();T(t,e)}var _6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function f6(t){var e=_6();T(t,e)}function g6(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function s(){n()?i():r(),x(e,!p(e))}Ts(t,{title:"Fullscreen",clickCb:s,children:(a,c)=>{var u=Ae(),_=ue(u);{var v=h=>{f6(h)},g=h=>{d6(h)};ge(_,h=>{p(e)?h(v):h(g,!1)})}T(a,u)},$$slots:{default:!0}})}function ap(t,e){ae(e,!1);let n=$(e,"token",8),r=$(e,"renderers",8),i=$(e,"options",8);fe();var s=Ae(),a=ue(s);{var c=u=>{var _=Ae(),v=ue(_);Ch(v,()=>r()[n().type],(g,h)=>{h(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=Ae(),b=ue(I);{var w=R=>{Ba(R,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},L=R=>{var k=ow();ee(()=>et(k,n().raw)),T(R,k)};ge(b,R=>{"tokens"in n()&&n().tokens?R(w):R(L,!1)})}T(m,I)},$$slots:{default:!0}})}),T(u,_)};ge(a,u=>{r()[n().type]&&u(c)})}T(t,s),le()}function Ba(t,e){let n=$(e,"tokens",8),r=$(e,"renderers",8),i=$(e,"options",8);var s=Ae(),a=ue(s);{var c=u=>{var _=Ae(),v=ue(_);lt(v,1,n,At,(g,h)=>{ap(g,{get token(){return p(h)},get renderers(){return r()},get options(){return i()}})}),T(u,_)};ge(a,u=>{n()&&u(c)})}T(t,s)}function lp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function cp(t){return t.startsWith("/")||t.startsWith("#")}function h6(t,e){return e.slug(t).replace(/--+/g,"-")}function v6(t,e){ae(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const i=void 0;let s=D();G(()=>(Z(n()),Z(r())),()=>{x(s,h6(n().text,r().slugger))}),Ie(),fe();var a=Ae(),c=ue(a);return Oh(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;ee(()=>v=Sh(u,v,{id:p(s)},void 0,u.namespaceURI===ku,u.nodeName.includes("-")));var g=Ae(),h=ue(g);ut(h,e,"default",{}),T(_,g)}),T(t,a),qe(e,"renderers",i),le({renderers:i})}var p6=ne("<blockquote><!></blockquote>");function m6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=p6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}function E6(t,e){ae(e,!1);let n=$(e,"token",8),r=$(e,"options",8),i=$(e,"renderers",8),s=D();G(()=>Z(n()),()=>{x(s,n().ordered?"ol":"ul")}),Ie(),fe();var a=Ae(),c=ue(a);Oh(c,()=>p(s),!1,(u,_)=>{let v;ee(()=>v=Sh(u,v,{start:n().start||1},void 0,u.namespaceURI===ku,u.nodeName.includes("-")));var g=Ae(),h=ue(g);lt(h,1,()=>n().items,At,(m,E)=>{var I=Xe(()=>({...p(E)}));ap(m,{get token(){return p(I)},get options(){return r()},get renderers(){return i()}})}),T(_,g)}),T(t,a),le()}var C6=ne("<li><!></li>");function I6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=C6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var b6=ne("<br>");function w6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=b6();return T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var O6=ne("<pre><code> </code></pre>");function y6(t,e){ae(e,!1);let n=$(e,"token",8);const r=void 0,i=void 0;fe();var s=O6(),a=K(s),c=K(a,!0);return Y(a),Y(s),ee(()=>{zw(a,`lang-${n().lang}`),et(c,n().text)}),T(t,s),qe(e,"options",r),qe(e,"renderers",i),le({options:r,renderers:i})}var L6=ne("<code> </code>");function A6(t,e){ae(e,!1);let n=$(e,"token",8);const r=void 0,i=void 0;fe();var s=L6(),a=K(s,!0);return ee(()=>et(a,n().raw.slice(1,n().raw.length-1))),Y(s),T(t,s),qe(e,"options",r),qe(e,"renderers",i),le({options:r,renderers:i})}var S6=ne('<th scope="col"><!></th>'),x6=ne("<td><!></td>"),N6=ne("<tr></tr>"),T6=ne("<table><thead><tr></tr></thead><tbody></tbody></table>");function D6(t,e){ae(e,!1);let n=$(e,"token",8),r=$(e,"options",8),i=$(e,"renderers",8);fe();var s=T6(),a=K(s),c=K(a);lt(c,5,()=>n().header,At,(_,v)=>{var g=S6(),h=K(g);Ba(h,{get tokens(){return p(v).tokens},get options(){return r()},get renderers(){return i()}}),Y(g),T(_,g)}),Y(c),Y(a);var u=F(a);lt(u,5,()=>n().rows,At,(_,v)=>{var g=N6();lt(g,5,()=>p(v),At,(h,m)=>{var E=x6(),I=K(E);Ba(I,{get tokens(){return p(m).tokens},get options(){return r()},get renderers(){return i()}}),Y(E),T(h,E)}),Y(g),T(_,g)}),Y(u),Y(s),T(t,s),le()}function R6(t,e){ae(e,!1);let n=$(e,"token",8);const r=void 0,i=void 0;fe();var s=Ae(),a=ue(s);return Hw(a,()=>n().text),T(t,s),qe(e,"options",r),qe(e,"renderers",i),le({options:r,renderers:i})}var k6=ne("<p><!></p>");function G6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=k6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var M6=ne("<a><!></a>");function U6(t,e){ae(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const i=void 0;fe();var s=M6();ee(()=>S(s,"href",cp(n().href)?lp(r().baseUrl,n().href):n().href));var a=K(s);return ut(a,e,"default",{}),Y(s),ee(()=>S(s,"title",n().title)),T(t,s),qe(e,"renderers",i),le({renderers:i})}function $6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=Ae(),a=ue(s);return ut(a,e,"default",{}),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var F6=ne("<dfn><!></dfn>");function H6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=F6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var P6=ne("<del><!></del>");function B6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=P6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var W6=ne("<em><!></em>");function z6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=W6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var Y6=ne("<hr>");function j6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=Y6();return T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var V6=ne("<strong><!></strong>");function K6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=V6(),a=K(s);return ut(a,e,"default",{}),Y(s),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var X6=ne('<img class="markdown-image svelte-z38cge">');function q6(t,e){ae(e,!1);let n=$(e,"token",8),r=$(e,"options",8);const i=void 0;fe();var s=X6();return ee(()=>S(s,"src",cp(n().href)?lp(r().baseUrl,n().href):n().href)),ee(()=>{S(s,"title",n().title),S(s,"alt",n().text)}),T(t,s),qe(e,"renderers",i),le({renderers:i})}function ah(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var s=Ae(),a=ue(s);return ut(a,e,"default",{}),T(t,s),qe(e,"token",n),qe(e,"options",r),qe(e,"renderers",i),le({token:n,options:r,renderers:i})}const Z6=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,Q6=Object.hasOwnProperty;class J6{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=eH(e,n===!0);const s=i;for(;Q6.call(r.occurrences,i);)r.occurrences[s]++,i=s+"-"+r.occurrences[s];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function eH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(Z6,"").replace(/ /g,"-"))}function Pd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Hi=Pd();function up(t){Hi=t}const dp=/[&<>"']/,tH=new RegExp(dp.source,"g"),_p=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,nH=new RegExp(_p.source,"g"),rH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lh=t=>rH[t];function kn(t,e){if(e){if(dp.test(t))return t.replace(tH,lh)}else if(_p.test(t))return t.replace(nH,lh);return t}const iH=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(iH,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function ch(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ds={exec:()=>null};function uh(t,e){const n=t.replace(/\|/g,(s,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Jo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function oH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function dh(t,e,n,r){const i=e.href,s=e.title?kn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:s,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:s,text:kn(a)}}function sH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[a]=s;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class Wa{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||Hi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Jo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=sH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Jo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Jo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Jo(n[0],`
`).split(`
`),i="",s="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const v=u.join(`
`),g=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${v}`:v,s=s?`${s}
${g}`:g;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,s=s.substring(0,s.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,s=s.substring(0,s.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:s}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,s={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",v="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),h=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,v=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,v=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(_+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),L=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),U=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const P=e.split(`
`,1)[0];let W;if(h=P,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),W=h):W=h.replace(/\t/g,"    "),R.test(h)||k.test(h)||U.test(h)||w.test(h)||L.test(h))break;if(W.search(/[^ ]/)>=E||!h.trim())v+=`
`+W.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||R.test(g)||k.test(g)||L.test(g))break;v+=`
`+h}!m&&!h.trim()&&(m=!0),_+=P+`
`,e=e.substring(P.length+1),g=W.slice(E)}}s.loose||(c?s.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(v),I&&(b=I[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:_,task:!!I,checked:b,loose:!1,text:v,tokens:[]}),s.raw+=_}s.items[s.items.length-1].raw=s.items[s.items.length-1].raw.trimEnd(),s.items[s.items.length-1].text=s.items[s.items.length-1].text.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const _=s.items[u].tokens.filter(g=>g.type==="space"),v=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));s.loose=v}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=uh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),s=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of s)a.rows.push(uh(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:kn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Jo(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=oH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),dh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),s=n[i.toLowerCase()];if(!s){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return dh(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const h=[...i[0]][0].length,m=e.slice(0,a+i.index+h+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),s=/^ /.test(r)&&/ $/.test(r);return i&&s&&(r=r.substring(1,r.length-1)),r=kn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=kn(n[1]),i="mailto:"+r):(r=kn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=kn(n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=kn(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=kn(n[0]),{type:"text",raw:n[0],text:r}}}}const aH=/^(?:[ \t]*(?:\n|$))+/,lH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,cH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ds=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,uH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fp=/(?:[*+-]|\d{1,9}[.)])/,gp=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,fp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Bd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,dH=/^[^\n]+/,Wd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,_H=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Wd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fH=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fp).getRegex(),bl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gH=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zd).replace("tag",bl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hp=Ct(Bd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bl).getRegex(),hH=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hp).getRegex(),Yd={blockquote:hH,code:lH,def:_H,fences:cH,heading:uH,hr:Ds,html:gH,lheading:gp,list:fH,newline:aH,paragraph:hp,table:ds,text:dH},_h=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bl).getRegex(),vH={...Yd,table:_h,paragraph:Ct(Bd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_h).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bl).getRegex()},pH={...Yd,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(Bd).replace("hr",Ds).replace("heading",` *#{1,6} *[^
]`).replace("lheading",gp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},vp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,mH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,pp=/^( {2,}|\\)\n(?!\s*$)/,EH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rs="\\p{P}\\p{S}",CH=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Rs).getRegex(),IH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,bH=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Rs).getRegex(),wH=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Rs).getRegex(),OH=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Rs).getRegex(),yH=Ct(/\\([punct])/,"gu").replace(/punct/g,Rs).getRegex(),LH=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),AH=Ct(zd).replace("(?:-->|$)","-->").getRegex(),SH=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",AH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),za=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,xH=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",za).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),mp=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",za).replace("ref",Wd).getRegex(),Ep=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",Wd).getRegex(),NH=Ct("reflink|nolink(?!\\()","g").replace("reflink",mp).replace("nolink",Ep).getRegex(),jd={_backpedal:ds,anyPunctuation:yH,autolink:LH,blockSkip:IH,br:pp,code:mH,del:ds,emStrongLDelim:bH,emStrongRDelimAst:wH,emStrongRDelimUnd:OH,escape:vp,link:xH,nolink:Ep,punctuation:CH,reflink:mp,reflinkSearch:NH,tag:SH,text:EH,url:ds},TH={...jd,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",za).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",za).getRegex()},Au={...jd,escape:Ct(vp).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},DH={...Au,br:Ct(pp).replace("{2,}","*").getRegex(),text:Ct(Au.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xa={normal:Yd,gfm:vH,pedantic:pH},es={normal:jd,gfm:Au,breaks:DH,pedantic:TH};class Mn{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hi,this.options.tokenizer=this.options.tokenizer||new Wa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:xa.normal,inline:es.normal};this.options.pedantic?(n.block=xa.pedantic,n.inline=es.pedantic):this.options.gfm&&(n.block=xa.gfm,this.options.breaks?n.inline=es.breaks:n.inline=es.gfm),this.tokenizer.rules=n}static get rules(){return{block:xa,inline:es}}static lex(e,n){return new Mn(n).lex(e)}static lexInline(e,n){return new Mn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){s=n[n.length-1],r&&(s==null?void 0:s.type)==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,s,a=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},g),typeof h=="number"&&h>=0&&(v=Math.min(v,h))}),v<1/0&&v>=0&&(s=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(s)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Ya{constructor(e){he(this,"options");he(this,"parser");this.options=e||Hi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],s=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+kn(i)+'">'+(r?s:kn(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:kn(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let c=0;c<e.items.length;c++){const u=e.items[c];i+=this.listitem(u)}const s=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+s+a+`>
`+i+"</"+s+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let s=0;s<e.header.length;s++)r+=this.tablecell(e.header[s]);n+=this.tablerow({text:r});let i="";for(let s=0;s<e.rows.length;s++){const a=e.rows[s];r="";for(let c=0;c<a.length;c++)r+=this.tablecell(a[c]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),s=ch(e);if(s===null)return i;e=s;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=ch(e);if(i===null)return r;e=i;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Vd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Xn{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||Hi,this.options.renderer=this.options.renderer||new Ya,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Vd}static parse(e,n){return new Xn(n).parse(e)}static parseInline(e,n){return new Xn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=s,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=s;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=this.options.extensions.renderers[s.type].call({parser:this},s);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=c||"";continue}}const a=s;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class _s{constructor(e){he(this,"options");he(this,"block");this.options=e||Hi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Mn.lex:Mn.lexInline}provideParser(){return this.block?Xn.parse:Xn.parseInline}}he(_s,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class RH{constructor(...e){he(this,"defaults",Pd());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",Xn);he(this,"Renderer",Ya);he(this,"TextRenderer",Vd);he(this,"Lexer",Mn);he(this,"Tokenizer",Wa);he(this,"Hooks",_s);this.use(...e)}walkTokens(e,n){var i,s;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=n.renderers[s.name];a?n.renderers[s.name]=function(...c){let u=s.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[s.level];a?a.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),i.extensions=n),r.renderer){const s=this.defaults.renderer||new Ya(this.defaults);for(const a in r.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=s[c];s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g||""}}i.renderer=s}if(r.tokenizer){const s=this.defaults.tokenizer||new Wa(this.defaults);for(const a in r.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=s[c];s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g}}i.tokenizer=s}if(r.hooks){const s=this.defaults.hooks||new _s;for(const a in r.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=s[c];_s.passThroughHooks.has(a)?s[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(s,v)).then(h=>_.call(s,h));const g=u.call(s,v);return _.call(s,g)}:s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g}}i.hooks=s}if(r.walkTokens){const s=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),s&&(u=u.concat(s.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Mn.lex(e,n??this.defaults)}parser(e,n){return Xn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const s={...i},a={...this.defaults,...s},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Mn.lex:Mn.lexInline,_=a.hooks?a.hooks.provideParser():e?Xn.parse:Xn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(v=>u(v,a)).then(v=>a.hooks?a.hooks.processAllTokens(v):v).then(v=>a.walkTokens?Promise.all(this.walkTokens(v,a.walkTokens)).then(()=>v):v).then(v=>_(v,a)).then(v=>a.hooks?a.hooks.postprocess(v):v).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let v=u(r,a);a.hooks&&(v=a.hooks.processAllTokens(v)),a.walkTokens&&this.walkTokens(v,a.walkTokens);let g=_(v,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+kn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Ri=new RH;function Et(t,e){return Ri.parse(t,e)}Et.options=Et.setOptions=function(t){return Ri.setOptions(t),Et.defaults=Ri.defaults,up(Et.defaults),Et};Et.getDefaults=Pd;Et.defaults=Hi;Et.use=function(...t){return Ri.use(...t),Et.defaults=Ri.defaults,up(Et.defaults),Et};Et.walkTokens=function(t,e){return Ri.walkTokens(t,e)};Et.parseInline=Ri.parseInline;Et.Parser=Xn;Et.parser=Xn.parse;Et.Renderer=Ya;Et.TextRenderer=Vd;Et.Lexer=Mn;Et.lexer=Mn.lex;Et.Tokenizer=Wa;Et.Hooks=_s;Et.parse=Et;Et.options;Et.setOptions;Et.use;Et.walkTokens;Et.parseInline;Xn.parse;Mn.lex;function kH(t){return new Mn().lex(t)}const GH=()=>({heading:v6,blockquote:m6,list:E6,list_item:I6,br:w6,code:y6,codespan:A6,table:D6,html:R6,paragraph:G6,link:U6,text:$6,def:H6,del:B6,em:z6,hr:j6,strong:K6,image:q6,space:ah,escape:ah}),MH=()=>({baseUrl:"/",slugger:new J6});function UH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},bh(()=>{console.warn=t})}function Cp(t,e){ae(e,!1),UH();let n=$(e,"source",8),r=$(e,"options",24,()=>({})),i=$(e,"renderers",24,()=>({})),s=D(),a=D(),c=D();G(()=>(Z(n()),Z(i()),Z(r())),()=>{x(s,kH(n())),x(a,{...GH(),...i()}),x(c,{...MH(),...r()})}),Ie(),fe(),Ba(t,{get tokens(){return p(s)},get renderers(){return p(a)},get options(){return p(c)}}),le()}var $H=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),FH=ne('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),HH=ne('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function PH(t,e){ae(e,!1);const n=rt(),r=()=>ve(Dr,"$puzzleMetaStore",n),i=D();let s=$(e,"showModal",12,!1);function a(u){return u?Ga(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}G(()=>r(),()=>{x(i,r())}),Ie(),fe(),Hr(t,{title:"Rules",get showModal(){return s()},set showModal(u){s(u)},children:(u,_)=>{var v=HH(),g=K(v),h=K(g,!0);Y(g);var m=F(g,2),E=K(m);ee(()=>et(E,`by ${a(p(i).authors)??""}`)),Y(m);var I=F(m,2),b=K(I),w=Xe(()=>c(p(i).ruleset));Cp(b,{get source(){return p(w)}}),Y(I);var L=F(I,2);{var R=P=>{var W=$H(),X=F(ue(W),2);ee(()=>S(X,"href",p(i).ctcUrl)),T(P,W)};ge(L,P=>{var W,X;(X=(W=p(i))==null?void 0:W.ctcUrl)!=null&&X.length&&P(R)})}var k=F(L,2);{var U=P=>{var W=FH(),X=F(ue(W),2);ee(()=>S(X,"href",p(i).ctcYoutubeUrl)),T(P,W)};ge(k,P=>{var W,X;(X=(W=p(i))==null?void 0:W.ctcYoutubeUrl)!=null&&X.length&&P(U)})}Y(v),ee(()=>{var P;return et(h,((P=p(i))==null?void 0:P.title)||"Puzzle")}),T(u,v)},$$slots:{default:!0},$$legacy:!0}),le()}var BH=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function WH(t){var e=BH();T(t,e)}var zH=ne("<!> <!>",1);function YH(t){let e=D(!1);function n(){x(e,!0)}var r=zH(),i=ue(r);Ts(i,{title:"Rules",clickCb:n,children:(a,c)=>{WH(a)},$$slots:{default:!0}});var s=F(i,2);PH(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var jH=ne("<!> <!>",1);function VH(t){let e=D(!1);function n(){x(e,!0)}var r=jH(),i=ue(r);Ts(i,{title:"Settings",clickCb:n,children:(a,c)=>{Wv(a)},$$slots:{default:!0}});var s=F(i,2);zv(s,{get showModal(){return p(e)},set showModal(a){x(e,a)},$$legacy:!0}),T(t,r)}var KH=ne('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function XH(t){var e=KH(),n=K(e);VH(n);var r=F(n,2);YH(r);var i=F(r,2);g6(i);var s=F(i,2);c6(s);var a=F(s,2);XF(a),Y(e),T(t,e)}var qH=ne('<div class="entry-panel-wrapper svelte-1dr0lb4"><div class="puzzle-info svelte-1dr0lb4"><div class="puzzle-header svelte-1dr0lb4"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-1dr0lb4"><!></div></div>  <div class="entry-panel svelte-1dr0lb4"><!> <div class="entry-subpanel1 svelte-1dr0lb4"><!> <!></div> <!></div></div>');function ZH(t,e){ae(e,!1);const n=rt(),r=()=>ve(uo,"$svgRefStore",n),i=()=>ve(Dr,"$puzzleMetaStore",n),s=()=>ve(qt,"$toolStore",n),a=D(),c=D();function u(){r().focus()}function _(Q){return Q?Ga(Q," & ",", "):"Anonymous"}function v(Q){return Q&&Q.length?Q:"Normal sudoku rules apply."}G(()=>i(),()=>{x(a,i().title??"Sudoku")}),G(()=>i(),()=>{x(c,_(i().authors))}),Ie(),fe();var g=qH(),h=K(g),m=K(h),E=K(m),I=K(E,!0);Y(E);var b=F(E,2),w=K(b);Y(b),Y(m);var L=F(m,2),R=K(L),k=Xe(()=>v(i().ruleset));Cp(R,{get source(){return p(k)}}),Y(L),Y(h);var U=F(h,2),P=K(U);XH(P);var W=F(P,2),X=K(W);xF(X,{get selectedTool(){return s()}});var J=F(X,2);PF(J,{get selectedTool(){return Ih(),s()},set selectedTool(Q){ps(qt,Q)},$$legacy:!0}),Y(W);var ce=F(W,2);OF(ce,{}),Y(U),Y(g),ee(()=>{et(I,p(a)),et(w,`by ${p(c)??""}`)}),Me("click",U,qn(()=>{u()})),T(t,g),le()}var QH=ne('<div class="App svelte-aer8a2"><header></header> <main class="svelte-aer8a2"><div class="game-wrapper svelte-aer8a2"><div class="game svelte-aer8a2"><!> <!> <!></div></div></main> <footer class="svelte-aer8a2"><div class="footer-text svelte-aer8a2"></div></footer></div>');function lP(t,e){ae(e,!1);const n=rt(),r=()=>ve(qw,"$darkModeStore",n),i=()=>ve(Qa,"$gameModeStore",n),s=D(),a=D();bh(async()=>{const I=window.location.href;try{await sO({workerURL:`${I}minizinc-worker.js`,wasmURL:`${I}minizinc.wasm`,dataURL:`${I}minizinc.data`})}catch(b){const w="Failed to initialize MiniZinc: "+b.message;console.log(w)}}),G(()=>r(),()=>{x(s,r()?"dark":"light")}),G(()=>i(),()=>{x(a,i())}),Ie(),fe();var c=QH(),u=F(K(c),2),_=K(u),v=K(_),g=K(v);{var h=I=>{X8(I)};ge(g,I=>{p(a)===ho.SETTING&&I(h)})}var m=F(g,2);gF(m,{});var E=F(m,2);ZH(E,{}),Y(v),Y(_),Y(u),Si(2),Y(c),ee(()=>S(c,"data-theme",p(s))),T(t,c),le()}export{lP as component,aP as universal};
